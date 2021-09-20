import assert from "node:assert";
import { Ms932Encoder } from "../../../node/index.mjs";

describe("Ms932Encoder.prototype.fatal", () => {
  it("fatal", () => {
    const ms932Encoder1 = new Ms932Encoder({fatal:true});
    assert.strictEqual(ms932Encoder1.fatal, true);

    const ms932Encoder2 = new Ms932Encoder({fatal:false});
    assert.strictEqual(ms932Encoder2.fatal, false);

    const ms932Encoder3 = new Ms932Encoder();
    assert.strictEqual(ms932Encoder3.fatal, false);
  });

});
