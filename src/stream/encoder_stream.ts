//

import { encodeChar, Ms932EncoderCommon, Ms932EncoderOptions } from "../_.js";

type Ms932EncoderStreamPending = {
  highSurrogate: string,
};

// $011 class Ms932EncoderStream extends TransformStream<string, Uint8Array> implements TextEncoderStream {
class Ms932EncoderStream implements TextEncoderStream {

  readonly #common: Ms932EncoderCommon;

  readonly #pending: Ms932EncoderStreamPending;

  readonly #stream: TransformStream<string, Uint8Array>;

  /**
   * @param options Options for Ms932EncoderStream.
   */
  constructor(options?: Ms932EncoderOptions) {
    const self = (): Ms932EncoderStream => this;
    const transformer: Transformer<string, Uint8Array> = {
      transform(chunk: string, controller: TransformStreamDefaultController<Uint8Array>): void {
        const encoded = self().#encodeChunk(chunk);
        controller.enqueue(encoded);
      },
      flush(controller: TransformStreamDefaultController<Uint8Array>): void {
        if (self().#pending.highSurrogate.length > 0) {
          controller.enqueue(Uint8Array.of(0x3F)); // TODO U+FFFDはShift_JISで表現できない為、U+003Fとする //TODO オプション指定可能にする
        }
      },
    };
    // $011 super(transformer);
    this.#common = new Ms932EncoderCommon(options);
    this.#pending = Object.seal({
      highSurrogate: "",
    });
    this.#stream = new TransformStream<string, Uint8Array>(transformer);// $011

    Object.freeze(this);
  }

  /**
   * Gets "shift_jis".
   */
  get encoding(): string {
    return this.#common.encoding;
  }

  /**
   * Gets true if the error mode is "fatal", otherwise false.
   */
  get fatal(): boolean {
    return this.#common.fatal;
  }

  // $011
  get writable(): WritableStream<string> {
    return this.#stream.writable;
  }

  // $011
  get readable(): ReadableStream<Uint8Array> {
    return this.#stream.readable;
  }

  #encodeChunk(chunk: string): Uint8Array {
    const cs = [ ...(this.#pending.highSurrogate + chunk) ];
    this.#pending.highSurrogate = "";

    const cCount = cs.length;
    const tmp = new Array(chunk.length * 2 + 1);
    let written = 0;
    for (let i = 0; i < cCount; i++) {
      const c = cs[i] as string;
      const codePoint = c.codePointAt(0) as number;

      if (((i + 1) === cCount) && (codePoint >= 0xD800) && (codePoint <= 0xDBFF)) {
        this.#pending.highSurrogate = c;
        break;
      }

      const bytes = encodeChar(codePoint, this.fatal);
      tmp[written] = bytes[0];
      written = written + 1;
      if (bytes.length > 1) {
        tmp[written] = bytes[1];
        written = written + 1;
      }
    }

    return Uint8Array.from(tmp.slice(0, written));
  }

}
Object.freeze(Ms932EncoderStream);

export {
  Ms932EncoderStream,
};
