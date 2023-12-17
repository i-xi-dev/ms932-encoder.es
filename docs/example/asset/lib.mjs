const ms932Decoder = new TextDecoder("shift_jis");

/**
 * @param {Uint8Array} input
 * @returns {string}
 */
export function decodeMs932(input) {
  return ms932Decoder.decode(input);
}

/**
 * @param {Uint8Array} bytes
 * @returns {string}
 */
export function bytesToString(bytes) {
  return [...bytes].map((byte) =>
    byte.toString(16).toUpperCase().padStart(2, "0")
  ).join(" ");
}
