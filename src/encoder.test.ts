import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encoding", () => {
  it("encoding", () => {
    const ms932Encoder1 = new Ms932Encoder();
    expect(ms932Encoder1.encoding).toBe("shift_jis");

  });

});

describe("Ms932Encoder.prototype.fatal", () => {
  it("fatal", () => {
    const ms932Encoder1 = new Ms932Encoder({fatal:true});
    expect(ms932Encoder1.fatal).toBe(true);

    const ms932Encoder2 = new Ms932Encoder({fatal:false});
    expect(ms932Encoder2.fatal).toBe(false);

    const ms932Encoder3 = new Ms932Encoder();
    expect(ms932Encoder3.fatal).toBe(false);

  });

});
