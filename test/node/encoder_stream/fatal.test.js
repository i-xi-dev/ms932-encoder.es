import assert from "node:assert";
import { Ms932EncoderStream } from "../../../node.mjs";

describe("Ms932EncoderStream.prototype.fatal", () => {
  it("fatal", () => {
    const ms932Encoder1 = new Ms932EncoderStream({fatal:true});
    assert.strictEqual(ms932Encoder1.fatal, true);

    const ms932Encoder2 = new Ms932EncoderStream({fatal:false});
    assert.strictEqual(ms932Encoder2.fatal, false);

    const ms932Encoder3 = new Ms932EncoderStream();
    assert.strictEqual(ms932Encoder3.fatal, false);
  });

});
