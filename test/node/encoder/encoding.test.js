import assert from "node:assert";
import { Ms932Encoder } from "../../../node/index.mjs";

describe("Ms932Encoder.prototype.encoding", () => {
  it("encoding", () => {
    const ms932Encoder1 = new Ms932Encoder();
    assert.strictEqual(ms932Encoder1.encoding, "shift_jis");
  });

});
