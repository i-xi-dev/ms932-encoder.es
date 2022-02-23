import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encoding", () => {
  it("encoding", () => {
    const ms932Encoder1 = new Ms932Encoder();
    expect(ms932Encoder1.encoding).to.equal("shift_jis");

  });

});

describe("Ms932Encoder.prototype.fatal", () => {
  it("fatal", () => {
    const ms932Encoder1 = new Ms932Encoder({fatal:true});
    expect(ms932Encoder1.fatal).to.equal(true);

    const ms932Encoder2 = new Ms932Encoder({fatal:false});
    expect(ms932Encoder2.fatal).to.equal(false);

    const ms932Encoder3 = new Ms932Encoder();
    expect(ms932Encoder3.fatal).to.equal(false);

  });

});
