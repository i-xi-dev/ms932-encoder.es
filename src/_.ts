//

/**
 * The labels of MS932 encoding.
 * 
 * {@link https://encoding.spec.whatwg.org/#names-and-labels}
 */
const MS932_LABELS: ReadonlyArray<string> = [
  "csshiftjis",
  "ms932",
  "ms_kanji",
  "shift-jis",
  "shift_jis",
  "sjis",
  "windows-31j",
  "x-sjis",
];

/**
 * The error mode for Ms932EncoderCommon.
 */
type Ms932ErrorMode = "fatal" | "replacement";

/**
 * Common getters that are shared between Ms932Encoder and Ms932EncoderStream.
 */
class Ms932EncoderCommon {
  /**
   * A name for this instance.
   */
  readonly #name: string;

  /**
   * An error mode for this instance.
   */
  readonly #errorMode: Ms932ErrorMode;

  /**
   * @param label The label of MS932 encoding.
   * @param errorMode The error mode.
   */
  constructor(label: string, errorMode: Ms932ErrorMode) {
    if (MS932_LABELS.includes(label.toLowerCase()) !== true) {
      throw new RangeError(`The given label "${ label }" is invalid.`);
    }

    this.#name = "Shift_JIS";
    this.#errorMode = errorMode;
  }

  /**
   * Gets "shift_jis".
   */
  get encoding(): string {
    return this.#name.toLowerCase();
  }

  /**
   * Gets true if the error mode is "fatal", otherwise false.
   */
  get fatal(): boolean {
    return this.#errorMode === "fatal";
  }
}

/**
 * Options for Ms932Encoder and Ms932EncoderStream.
 */
type Ms932EncoderOptions = {
  /**
   * Whether or not to set the error mode to "fatal".
   */
  fatal?: boolean,
};

export {
  Ms932EncoderCommon,
  Ms932EncoderOptions,
};
