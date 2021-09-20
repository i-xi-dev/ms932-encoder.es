import assert from "node:assert";
import { Ms932EncoderStream } from "../../../node/stream/index.mjs";

describe("Ms932EncoderStream.prototype.encoding", () => {
  it("encoding", () => {
    const ms932Encoder1 = new Ms932EncoderStream();
    assert.strictEqual(ms932Encoder1.encoding, "shift_jis");
  });

});
