import assert from "node:assert";
import { Ms932Encoder } from "../../node/index.mjs";

describe("Ms932Encoder.prototype.encodeInto", () => {
  it("encodeInto(string, Object)", () => {
    // fallback
    const ms932Encoder1 = new Ms932Encoder({fatal:true});
    assert.throws(() => {
      ms932Encoder1.encodeInto("\u0081", new Uint8Array());
    }, {
     name: "Error",
     message: "EncodingError U+0081"
    });

    const ms932Encoder2 = new Ms932Encoder(/*{fatal: false}*/);

    const b1 = new Uint8Array(4);
    const r1 = ms932Encoder2.encodeInto("\u0081", b1);
    assert.strictEqual([...b1].join(","), "63,0,0,0");
    assert.strictEqual(r1.read, 1);
    assert.strictEqual(r1.written, 1);

    const b2 = new Uint8Array(4);
    const r2 = ms932Encoder2.encodeInto("\u{29e3d}", b2);
    assert.strictEqual([...b2].join(","), "63,0,0,0");
    assert.strictEqual(r2.read, 2);
    assert.strictEqual(r2.written, 1);

  });

  it("encodeInto(string)", () => {
    const ms932Encoder = new Ms932Encoder();
    const td = new TextDecoder("shift_jis");

    const b1 = new Uint8Array(10);
    const r1 = ms932Encoder.encodeInto("あいうえお", b1);
    assert.strictEqual([...b1].join(","), "130,160,130,162,130,164,130,166,130,168");
    assert.strictEqual(r1.read, 5);
    assert.strictEqual(r1.written, 10);

    assert.strictEqual(td.decode(b1.subarray(0,r1.written)), "あいうえお");

    const b2 = new Uint8Array(20);
    const r2 = ms932Encoder.encodeInto("あabcいうえお\u{29e3d}123?", b2);
    assert.strictEqual([...b2].join(","), "130,160,97,98,99,130,162,130,164,130,166,130,168,63,49,50,51,63,0,0");
    assert.strictEqual(r2.read, 14);
    assert.strictEqual(r2.written, 18);

    assert.strictEqual(td.decode(b2.subarray(0,r2.written)), "あabcいうえお?123?");

    const b3 = new Uint8Array(10);
    const r3 = ms932Encoder.encodeInto("あabcいうえお\u{29e3d}123?", b3);
    assert.strictEqual([...b3].join(","), "130,160,97,98,99,130,162,130,164,0");
    assert.strictEqual(r3.read, 6);
    assert.strictEqual(r3.written, 9);

    assert.strictEqual(td.decode(b3.subarray(0,r3.written)), "あabcいう");

  });

});
