import { expect } from '@esm-bundle/chai';
import { Ms932 } from "../../dist/index.js";

describe("Ms932.Encoder.prototype.encoding", () => {
  it("encoding", () => {
    const ms932Encoder1 = new Ms932.Encoder();
    expect(ms932Encoder1.encoding).to.equal("shift_jis");

  });

});

describe("Ms932.Encoder.prototype.fatal", () => {
  it("fatal", () => {
    const ms932Encoder1 = new Ms932.Encoder({fatal:true});
    expect(ms932Encoder1.fatal).to.equal(true);

    const ms932Encoder2 = new Ms932.Encoder({fatal:false});
    expect(ms932Encoder2.fatal).to.equal(false);

    const ms932Encoder3 = new Ms932.Encoder();
    expect(ms932Encoder3.fatal).to.equal(false);

  });

});
