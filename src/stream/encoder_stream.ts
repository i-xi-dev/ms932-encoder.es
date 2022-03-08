//

import { type codepoint } from "@i-xi-dev/fundamental";
import {
  type Ms932EncoderOptions,
  encodeChar,
  Ms932EncoderCommon,
} from "../ms932";

type Ms932EncoderStreamPending = {
  highSurrogate: string,
};

// $011 class Ms932EncoderStream extends TransformStream<string, Uint8Array> implements TextEncoderStream {
/**
 * The `TransformStream` that encodes a stream of string into Windows-31J encoded byte stream.
 * 
 * @example
 * ```javascript
 * const encoderStream = new Ms932EncoderStream();
 * // readableStream: ReadableStream<string>
 * // writableStream: WritableStream<Uint8Array>
 * readableStream.pipeThrough(encoderStream).pipeTo(writableStream);
 * ```
 */
class Ms932EncoderStream implements TextEncoderStream {
  /**
   * Common getters.
   */
  readonly #common: Ms932EncoderCommon;

  readonly #pending: Ms932EncoderStreamPending;

  readonly #stream: TransformStream<string, Uint8Array>;

  /**
   * @param options - The options for `Ms932EncoderStream`.
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
          controller.enqueue(Uint8Array.from(self().#common._replacement.bytes)); // U+FFFDはWindows-31Jで表現できない
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
   * Gets `"shift_jis"`.
   */
  get encoding(): string {
    return this.#common.encoding;
  }

  /**
   * Gets `true` if the error mode is "fatal", otherwise `false`.
   */
  get fatal(): boolean {
    return this.#common.fatal;
  }

  // $011
  /**
   * @see [TextEncoderStream.writable](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoderStream/writable)
   */
  get writable(): WritableStream<string> {
    return this.#stream.writable;
  }

  // $011
  /**
   * @see [TextEncoderStream.readable](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoderStream/readable)
   */
  get readable(): ReadableStream<Uint8Array> {
    return this.#stream.readable;
  }

  /**
   * チャンクを符号化
   * 
   * https://encoding.spec.whatwg.org/#interface-textencoderstream のとおりの処理ではないが、結果は同じはず
   * 
   * @param chunk - 文字列
   * @returns chunkを符号化したバイト列
   */
  #encodeChunk(chunk: string): Uint8Array {
    const cs = [ ...(this.#pending.highSurrogate + chunk) ];
    this.#pending.highSurrogate = "";

    const cCount = cs.length;
    const tmp = new Array(chunk.length * 2 + 1);
    let written = 0;
    for (let i = 0; i < cCount; i++) {
      const c = cs[i] as string;
      const codePoint = c.codePointAt(0) as codepoint;

      if (((i + 1) === cCount) && (codePoint >= 0xD800) && (codePoint <= 0xDBFF)) {
        this.#pending.highSurrogate = c;
        break;
      }

      const bytes = encodeChar(codePoint, this.fatal, this.#common._replacement.bytes);
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
