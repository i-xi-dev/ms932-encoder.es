//

import {
  type codepoint,
  type uint8,
} from "@i-xi-dev/fundamental";

import {
  type Ms932EncoderOptions,
  encodeChar,
  Ms932EncoderCommon,
} from "./ms932";

/**
 * Windows-31J text encoder
 * 
 * @example
 * ```javascript
 * const encoder = new Ms932Encoder();
 * 
 * encoder.encode("あいうえお");
 * // → Uint8Array[ 0x82, 0xA0, 0x82, 0xA2, 0x82, 0xA4, 0x82, 0xA6, 0x82, 0xA8 ]
 * 
 * const bytes = new Uint8Array(10);
 * const { read, written } = encoder.encodeInto("あいうえお", bytes);
 * // → read: 5
 * //   written: 10
 * //   bytes: Uint8Array[ 0x82, 0xA0, 0x82, 0xA2, 0x82, 0xA4, 0x82, 0xA6, 0x82, 0xA8 ]
 * ```
 */
class Ms932Encoder implements TextEncoder {
  /**
   * Common getters.
   */
  readonly #common: Ms932EncoderCommon;

  /**
   * @param options - The options for `Ms932Encoder`.
   */
  constructor(options?: Ms932EncoderOptions) {
    this.#common = new Ms932EncoderCommon(options);
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

  /**
   * @see [TextEncoder.encode](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encode)
   * @throws {Error} When `fatal` is `true`, the `input` contains characters that cannot be encoded in Windows-31J; Otherwise, no exceptions will be thrown.
   */
  encode(input = ""): Uint8Array {
    const tmp = new Array<uint8>(input.length * 2);
    let written = 0;
    for (const c of input) {
      const codePoint = c.codePointAt(0) as codepoint;
      const bytes = encodeChar(codePoint, this.fatal, this.#common._replacement.bytes);
      tmp[written] = bytes[0];
      written = written + 1;
      if (bytes.length > 1) {
        tmp[written] = bytes[1] as uint8;
        written = written + 1;
      }
    }

    return Uint8Array.from(tmp.slice(0, written));
  }

  /**
   * @see [TextEncoder.encodeInto](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/encodeInto)
   * @throws {Error} When `fatal` is `true`, the `input` contains characters that cannot be encoded in Windows-31J; Otherwise, no exceptions will be thrown.
   */
  encodeInto(source: string, destination: Uint8Array): TextEncoderEncodeIntoResult {
    let read = 0;
    let written = 0;
    for (const c of String(source)) { // ブラウザのTextEncoder#encodeIntoだと、sourceがstring型以外のいかなる型でもあっても多分落ちない
      const codePoint = c.codePointAt(0) as codepoint;
      const bytes = encodeChar(codePoint, this.fatal, this.#common._replacement.bytes);

      if ((written + bytes.length) > destination.length) {
        break;
      }

      read = read + (codePoint <= 0xFFFF ? 1 : 2);
      destination.set(bytes, written);
      written = written + bytes.length;
    }

    return {
      read,
      written,
    };
  }
}
Object.freeze(Ms932Encoder);

export {
  Ms932Encoder,
};
