import { TransformStream } from "node:stream/web";
globalThis.TransformStream = TransformStream;

export * from "../../dist/stream/index.js";
