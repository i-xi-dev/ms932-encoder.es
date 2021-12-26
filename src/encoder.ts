//

import {
  type uint8,
} from "@i-xi-dev/fundamental";

import {
  type Ms932EncoderOptions,
  encodeChar,
  Ms932EncoderCommon,
} from "./ms932";

/**
 * Windows-31J text encoder
 */
class Ms932Encoder implements TextEncoder {
  /**
   * Common getters.
   */
  readonly #common: Ms932EncoderCommon;

  /**
   * @param options - Options for Ms932Encoder.
   */
  constructor(options?: Ms932EncoderOptions) {
    this.#common = new Ms932EncoderCommon(options);
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

  /**
   * Implements {@link TextEncoder.encode}.
   */
  encode(input = ""): Uint8Array {
    const tmp = new Array<uint8>(input.length * 2);
    let written = 0;
    for (const c of input) {
      const codePoint = c.codePointAt(0) as number;
      const bytes = encodeChar(codePoint, this.fatal);
      tmp[written] = bytes[0];
      written = written + 1;
      if (bytes.length > 1) {
        tmp[written] = bytes[1] as uint8;
        written = written + 1;
      }
    }

    return Uint8Array.from(tmp.slice(0, written));
  }

  // XXX ブラウザのTextEncoder#encodeIntoだと、sourceは多分String(source)している
  //     （string型以外のいかなる型でもあっても多分落ちない）
  /**
   * Implements {@link TextEncoder.encodeInto}.
   */
  encodeInto(source: string, destination: Uint8Array): TextEncoderEncodeIntoResult {
    let read = 0;
    let written = 0;
    for (const c of source) {
      const codePoint = c.codePointAt(0) as number;
      const bytes = encodeChar(codePoint, this.fatal);

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
