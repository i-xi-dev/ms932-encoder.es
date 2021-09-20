//

import { encodeChar, Ms932EncoderCommon, Ms932EncoderOptions } from "./_.js";

class Ms932Encoder extends Ms932EncoderCommon implements TextEncoder {
  /**
   * @param options Options for Ms932Encoder.
   */
  constructor(options?: Ms932EncoderOptions);

  /**
   * @param label A label for Ms932Encoder. This must be one of the case-insensitive MS932_LABELS.
   * @param options Options for Ms932Encoder.
   */
  constructor(label: string, options?: Ms932EncoderOptions);

  constructor(param0?: string | Ms932EncoderOptions, param1?: Ms932EncoderOptions) {
    let label = "shift_jis";
    let fatal = false;
    if (typeof param0 === "string") {
      label = param0;
      if (param1) {
        fatal = param1.fatal === true;
      }
    }
    else if (param0) {
      fatal = param0.fatal === true;
    }
    super(label, (fatal ? "fatal" : "replacement"));
    Object.freeze(this);
  }

  encode(input = ""): Uint8Array {
    const tmp = new Array(input.length * 2);
    let i = 0;
    for (const c of input) {
      const codePoint = c.codePointAt(0) as number;
      const bytes = encodeChar(codePoint, this.fatal);
      tmp[i] = bytes[0];
      i = i + 1;
      if (bytes.length > 1) {
        tmp[i] = bytes[1];
        i = i + 1;
      }
    }

    return Uint8Array.from(tmp.slice(0, i));
  }

  // XXX ブラウザのTextEncoder#encodeIntoだと、sourceは多分String(source)している
  //     （string型以外のいかなる型でもあっても多分落ちない）
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
