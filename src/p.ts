let _ts: {
  prototype: TransformStream;
  new <I, O>(
    transformer?: Transformer<I, O>,
    writableStrategy?: QueuingStrategy<I>,
    readableStrategy?: QueuingStrategy<O>,
  ): TransformStream<I, O>;
};
if (globalThis.TransformStream) {
  _ts = globalThis.TransformStream;
} else {
  const nodeUrl = "node:stream/web";
  const nsw = await import(nodeUrl);
  _ts = nsw.TransformStream;
}
export { _ts };
