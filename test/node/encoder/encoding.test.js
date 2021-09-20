import assert from "node:assert";
import { Ms932Encoder } from "../../../node.mjs";

describe("Ms932Encoder.encoding", () => {
  it("encoding", () => {
    const ms932Encoder1 = new Ms932Encoder();
    assert.strictEqual(ms932Encoder1.encoding, "shift_jis");
  });

});
