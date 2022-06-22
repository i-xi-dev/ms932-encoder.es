import { assertStrictEquals } from "std/testing/asserts";
import { Ms932 } from "../src/ms932.ts";

Deno.test("Ms932.Encoder.prototype.encoding", () => {
  // encoding
  const ms932Encoder1 = new Ms932.Encoder();
  assertStrictEquals(ms932Encoder1.encoding, "shift_jis");
});

Deno.test("Ms932.Encoder.prototype.fatal", () => {
  // fatal
  const ms932Encoder1 = new Ms932.Encoder({ fatal: true });
  assertStrictEquals(ms932Encoder1.fatal, true);

  const ms932Encoder2 = new Ms932.Encoder({ fatal: false });
  assertStrictEquals(ms932Encoder2.fatal, false);

  const ms932Encoder3 = new Ms932.Encoder();
  assertStrictEquals(ms932Encoder3.fatal, false);
});
