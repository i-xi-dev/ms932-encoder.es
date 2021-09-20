import { TransformStream } from "node:stream/web";
globalThis.TransformStream = TransformStream;

export { Ms932EncoderStream } from "../../dist/stream/encoder_stream.js";
