import { TransformStream } from "node:stream/web";
globalThis.TransformStream = TransformStream;

export { Ms932Encoder } from "./dist/encoder.js";
export { Ms932EncoderStream } from "./dist/encoder_stream.js";
