// TODO 何故importが使えないのか

const { ReadableStream, WritableStream, TransformStream } = require("node:stream/web");
globalThis.ReadableStream = ReadableStream;
globalThis.WritableStream = WritableStream;
globalThis.TransformStream = TransformStream;
