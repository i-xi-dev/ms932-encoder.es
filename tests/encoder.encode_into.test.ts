import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encodeInto(string, Object)", () => {
  // fallback
  const ms932Encoder1 = new Ms932.Encoder({ fatal: true });
  assertThrows(
    () => {
      ms932Encoder1.encodeInto("\u0081", new Uint8Array());
    },
    Error,
    "EncodingError U+0081",
  );

  const ms932Encoder2 = new Ms932.Encoder(/*{fatal: false}*/);

  const b1 = new Uint8Array(4);
  const r1 = ms932Encoder2.encodeInto("\u0081", b1);
  assertStrictEquals([...b1].join(","), "63,0,0,0");
  assertStrictEquals(r1.read, 1);
  assertStrictEquals(r1.written, 1);

  const b2 = new Uint8Array(4);
  const r2 = ms932Encoder2.encodeInto("\u{29e3d}", b2);
  assertStrictEquals([...b2].join(","), "63,0,0,0");
  assertStrictEquals(r2.read, 2);
  assertStrictEquals(r2.written, 1);
});

Deno.test("Ms932.Encoder.prototype.encodeInto(string)", () => {
  const ms932Encoder = new Ms932.Encoder();
  const td = new TextDecoder("shift_jis");

  const b1 = new Uint8Array(10);
  const r1 = ms932Encoder.encodeInto("あいうえお", b1);
  assertStrictEquals(
    [...b1].join(","),
    "130,160,130,162,130,164,130,166,130,168",
  );
  assertStrictEquals(r1.read, 5);
  assertStrictEquals(r1.written, 10);

  assertStrictEquals(td.decode(b1.subarray(0, r1.written)), "あいうえお");

  const b2 = new Uint8Array(20);
  const r2 = ms932Encoder.encodeInto("あabcいうえお\u{29e3d}123?", b2);
  assertStrictEquals(
    [...b2].join(","),
    "130,160,97,98,99,130,162,130,164,130,166,130,168,63,49,50,51,63,0,0",
  );
  assertStrictEquals(r2.read, 14);
  assertStrictEquals(r2.written, 18);

  assertStrictEquals(td.decode(b2.subarray(0, r2.written)), "あabcいうえお?123?");

  const b3 = new Uint8Array(10);
  const r3 = ms932Encoder.encodeInto("あabcいうえお\u{29e3d}123?", b3);
  assertStrictEquals([...b3].join(","), "130,160,97,98,99,130,162,130,164,0");
  assertStrictEquals(r3.read, 6);
  assertStrictEquals(r3.written, 9);

  assertStrictEquals(td.decode(b3.subarray(0, r3.written)), "あabcいう");
});
