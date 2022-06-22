import { assertStrictEquals } from "std/testing/asserts";
import { Ms932 } from "../src/ms932.ts";

if (!globalThis.ReadableStream) {
  const nodeUrl = "node:stream/web";
  const nsw = await import(nodeUrl);
  globalThis.ReadableStream = nsw.ReadableStream;
  globalThis.WritableStream = nsw.WritableStream;
}

Deno.test("Ms932EncoderStream.prototype.encoding", () => {
  // encoding
  const ms932Encoder1 = new Ms932.EncoderStream();
  assertStrictEquals(ms932Encoder1.encoding, "shift_jis");
});

Deno.test("Ms932EncoderStream.prototype.fatal", () => {
  // fatal
  const ms932Encoder1 = new Ms932.EncoderStream({ fatal: true });
  assertStrictEquals(ms932Encoder1.fatal, true);

  const ms932Encoder2 = new Ms932.EncoderStream({ fatal: false });
  assertStrictEquals(ms932Encoder2.fatal, false);

  const ms932Encoder3 = new Ms932.EncoderStream();
  assertStrictEquals(ms932Encoder3.fatal, false);
});

Deno.test("Ms932EncoderStream.prototype.writable", async () => {
  // writable
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
  ];

  let ti: any;
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
    },
  });
  await s.pipeThrough(ms932Encoder1).pipeTo(ws);
  await s.pipeTo(ws);

  const expected = "0x41,0x42,0x43,0x82,0xA0," +
    "0x3F,0x41,0x3F,0x41,0x3F," +
    "0x41,0x41,0x41,0x3F,0x41," +
    "0x00,0x41,0x00,0x00,0x00";

  assertStrictEquals(
    [...result].map((e) => "0x" + e.toString(16).toUpperCase().padStart(2, "0"))
      .join(","),
    expected,
  );
});

Deno.test("Ms932EncoderStream.prototype.writable - 2", async () => {
  // writable
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
    "\uD800",
  ];

  let ti: any;
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
    },
  });
  await s.pipeThrough(ms932Encoder1).pipeTo(ws);
  await s.pipeTo(ws);

  const expected = "0x41,0x42,0x43,0x82,0xA0," +
    "0x3F,0x41,0x3F,0x41,0x3F," +
    "0x41,0x41,0x41,0x3F,0x41," +
    "0x00,0x3F,0x00,0x00,0x00";

  assertStrictEquals(
    [...result].map((e) => "0x" + e.toString(16).toUpperCase().padStart(2, "0"))
      .join(","),
    expected,
  );
});
