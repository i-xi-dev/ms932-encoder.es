import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encodeInto", () => {
  it("encodeInto(string, Object)", () => {
    // fallback
    const ms932Encoder1 = new Ms932Encoder({fatal:true});
    expect(() => {
      ms932Encoder1.encodeInto("\u0081", new Uint8Array());
    }).to.throw(Error, "EncodingError U+0081");

    const ms932Encoder2 = new Ms932Encoder(/*{fatal: false}*/);

    const b1 = new Uint8Array(4);
    const r1 = ms932Encoder2.encodeInto("\u0081", b1);
    expect([...b1].join(",")).to.equal("63,0,0,0");
    expect(r1.read).to.equal(1);
    expect(r1.written).to.equal(1);

    const b2 = new Uint8Array(4);
    const r2 = ms932Encoder2.encodeInto("\u{29e3d}", b2);
    expect([...b2].join(",")).to.equal("63,0,0,0");
    expect(r2.read).to.equal(2);
    expect(r2.written).to.equal(1);

  });

  it("encodeInto(string)", () => {
    const ms932Encoder = new Ms932Encoder();
    const td = new TextDecoder("shift_jis");

    const b1 = new Uint8Array(10);
    const r1 = ms932Encoder.encodeInto("あいうえお", b1);
    expect([...b1].join(",")).to.equal("130,160,130,162,130,164,130,166,130,168");
    expect(r1.read).to.equal(5);
    expect(r1.written).to.equal(10);

    expect(td.decode(b1.subarray(0,r1.written))).to.equal("あいうえお");

    const b2 = new Uint8Array(20);
    const r2 = ms932Encoder.encodeInto("あabcいうえお\u{29e3d}123?", b2);
    expect([...b2].join(",")).to.equal("130,160,97,98,99,130,162,130,164,130,166,130,168,63,49,50,51,63,0,0");
    expect(r2.read).to.equal(14);
    expect(r2.written).to.equal(18);

    expect(td.decode(b2.subarray(0,r2.written))).to.equal("あabcいうえお?123?");

    const b3 = new Uint8Array(10);
    const r3 = ms932Encoder.encodeInto("あabcいうえお\u{29e3d}123?", b3);
    expect([...b3].join(",")).to.equal("130,160,97,98,99,130,162,130,164,0");
    expect(r3.read).to.equal(6);
    expect(r3.written).to.equal(9);

    expect(td.decode(b3.subarray(0,r3.written))).to.equal("あabcいう");

  });

});
