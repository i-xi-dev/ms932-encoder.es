import assert from "node:assert";
import { ReadableStream, TransformStream, WritableStream } from "node:stream/web";
import { Ms932EncoderStream } from "../../../node/stream/index.mjs";

describe("Ms932EncoderStream.prototype.writable", () => {
  it("writable", async () => {
    const td = [
      "ABC",
      "あ",
      "\uD867",
      "",
      "A",
      "\uD867\uDE3E",
      "A",
      "\uDE3E",
      "A",
      "",
      "",
    ]

    let ti;
    const s = new ReadableStream({
      start(controller) {
        let c = 0;
        ti = setInterval(() => {
          if (c >= 10) {
            clearInterval(ti);
            controller.close();
            return;
          }
          controller.enqueue(td[c]);
          c = c + 1;

        }, 10);
      },
    });

    const ms932Encoder1 = new Ms932EncoderStream();

    const result = new Uint8Array(15);
    let written = 0;
    const ws = new WritableStream({
      write(chunk) {
        result.set(chunk, written);
        written = written + chunk.byteLength;
      }
    });
    await s.pipeThrough(ms932Encoder1).pipeTo(ws);
    await s.pipeTo(ws);

    const expected = "0x41,0x42,0x43,0x82,0xA0,"
      + "0x3F,0x41,0x3F,0x41,0x3F,"
      + "0x41,0x00,0x00,0x00,0x00";

    assert.strictEqual([...result].map(e => "0x" + e.toString(16).toUpperCase().padStart(2, "0")).join(","), expected);

  });

});
