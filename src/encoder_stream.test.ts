import { expect } from '@esm-bundle/chai';
import { Ms932 } from "./index";

describe("Ms932EncoderStream.prototype.encoding", () => {
  it("encoding", () => {
    const ms932Encoder1 = new Ms932.EncoderStream();
    expect(ms932Encoder1.encoding).to.equal("shift_jis");

  });

});

describe("Ms932EncoderStream.prototype.fatal", () => {
  it("fatal", () => {
    const ms932Encoder1 = new Ms932.EncoderStream({fatal:true});
    expect(ms932Encoder1.fatal).to.equal(true);

    const ms932Encoder2 = new Ms932.EncoderStream({fatal:false});
    expect(ms932Encoder2.fatal).to.equal(false);

    const ms932Encoder3 = new Ms932.EncoderStream();
    expect(ms932Encoder3.fatal).to.equal(false);

  });

});

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
      "AA",

      "\uD867",
      "\uDE3E",
      "A",
      "\u0000",
      "A",
    ]

    let ti: NodeJS.Timer;
    const s = new ReadableStream({
      start(controller) {
        let c = 0;
        ti = setInterval(() => {
          if (c >= 15) {
            clearInterval(ti);
            controller.close();
            return;
          }
          controller.enqueue(td[c]);
          c = c + 1;

        }, 10);
      },
    });

    await (() => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 200);
      });
    })();

    const ms932Encoder1 = new Ms932.EncoderStream();

    const result = new Uint8Array(20);
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
      + "0x41,0x41,0x41,0x3F,0x41,"
      + "0x00,0x41,0x00,0x00,0x00";

    expect([...result].map(e => "0x" + e.toString(16).toUpperCase().padStart(2, "0")).join(",")).to.equal(expected);

  });

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
      "AA",

      "\uD867",
      "\uDE3E",
      "A",
      "\u0000",
      "\u{D800}",
    ]

    let ti: NodeJS.Timer;
    const s = new ReadableStream({
      start(controller) {
        let c = 0;
        ti = setInterval(() => {
          if (c >= 15) {
            clearInterval(ti);
            controller.close();
            return;
          }
          controller.enqueue(td[c]);
          c = c + 1;

        }, 10);
      },
    });

    await (() => {
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          resolve();
        }, 200);
      });
    })();

    const ms932Encoder1 = new Ms932.EncoderStream();

    const result = new Uint8Array(20);
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
      + "0x41,0x41,0x41,0x3F,0x41,"
      + "0x00,0x3F,0x00,0x00,0x00";

    expect([...result].map(e => "0x" + e.toString(16).toUpperCase().padStart(2, "0")).join(",")).to.equal(expected);

  });

});
