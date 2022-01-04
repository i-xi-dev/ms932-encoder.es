import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 10", () => {

  it("encode(string) - U+9C00-U+9FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
r = r && ([...ms932Encoder.encode("鰀")].join(",") === "252,70"); // U+9C00
assert.throws(() => {ms932Encoder.encode("\u9C01")}, {name:"Error",message:"EncodingError U+9C01"});
assert.throws(() => {ms932Encoder.encode("\u9C02")}, {name:"Error",message:"EncodingError U+9C02"});
assert.throws(() => {ms932Encoder.encode("\u9C03")}, {name:"Error",message:"EncodingError U+9C03"});
r = r && ([...ms932Encoder.encode("鰄")].join(",") === "233,216"); // U+9C04
assert.throws(() => {ms932Encoder.encode("\u9C05")}, {name:"Error",message:"EncodingError U+9C05"});
r = r && ([...ms932Encoder.encode("鰆")].join(",") === "233,212"); // U+9C06
assert.throws(() => {ms932Encoder.encode("\u9C07")}, {name:"Error",message:"EncodingError U+9C07"});
r = r && ([...ms932Encoder.encode("鰈鰉鰊")].join(",") === "233,213,233,209,233,215"); // U+9C08
assert.throws(() => {ms932Encoder.encode("\u9C0B")}, {name:"Error",message:"EncodingError U+9C0B"});
r = r && ([...ms932Encoder.encode("鰌鰍")].join(",") === "233,211,138,130"); // U+9C0C
assert.throws(() => {ms932Encoder.encode("\u9C0E")}, {name:"Error",message:"EncodingError U+9C0E"});
assert.throws(() => {ms932Encoder.encode("\u9C0F")}, {name:"Error",message:"EncodingError U+9C0F"});
r = r && ([...ms932Encoder.encode("鰐")].join(",") === "152,107"); // U+9C10
assert.throws(() => {ms932Encoder.encode("\u9C11")}, {name:"Error",message:"EncodingError U+9C11"});
r = r && ([...ms932Encoder.encode("鰒鰓鰔鰕")].join(",") === "233,214,233,210,233,208,233,207"); // U+9C12
assert.throws(() => {ms932Encoder.encode("\u9C16")}, {name:"Error",message:"EncodingError U+9C16"});
assert.throws(() => {ms932Encoder.encode("\u9C17")}, {name:"Error",message:"EncodingError U+9C17"});
assert.throws(() => {ms932Encoder.encode("\u9C18")}, {name:"Error",message:"EncodingError U+9C18"});
assert.throws(() => {ms932Encoder.encode("\u9C19")}, {name:"Error",message:"EncodingError U+9C19"});
assert.throws(() => {ms932Encoder.encode("\u9C1A")}, {name:"Error",message:"EncodingError U+9C1A"});
r = r && ([...ms932Encoder.encode("鰛")].join(",") === "233,218"); // U+9C1B
assert.throws(() => {ms932Encoder.encode("\u9C1C")}, {name:"Error",message:"EncodingError U+9C1C"});
assert.throws(() => {ms932Encoder.encode("\u9C1D")}, {name:"Error",message:"EncodingError U+9C1D"});
assert.throws(() => {ms932Encoder.encode("\u9C1E")}, {name:"Error",message:"EncodingError U+9C1E"});
assert.throws(() => {ms932Encoder.encode("\u9C1F")}, {name:"Error",message:"EncodingError U+9C1F"});
assert.throws(() => {ms932Encoder.encode("\u9C20")}, {name:"Error",message:"EncodingError U+9C20"});
r = r && ([...ms932Encoder.encode("鰡")].join(",") === "233,221"); // U+9C21
assert.throws(() => {ms932Encoder.encode("\u9C22")}, {name:"Error",message:"EncodingError U+9C22"});
assert.throws(() => {ms932Encoder.encode("\u9C23")}, {name:"Error",message:"EncodingError U+9C23"});
r = r && ([...ms932Encoder.encode("鰤鰥")].join(",") === "233,220,233,219"); // U+9C24
assert.throws(() => {ms932Encoder.encode("\u9C26")}, {name:"Error",message:"EncodingError U+9C26"});
assert.throws(() => {ms932Encoder.encode("\u9C27")}, {name:"Error",message:"EncodingError U+9C27"});
assert.throws(() => {ms932Encoder.encode("\u9C28")}, {name:"Error",message:"EncodingError U+9C28"});
assert.throws(() => {ms932Encoder.encode("\u9C29")}, {name:"Error",message:"EncodingError U+9C29"});
assert.throws(() => {ms932Encoder.encode("\u9C2A")}, {name:"Error",message:"EncodingError U+9C2A"});
assert.throws(() => {ms932Encoder.encode("\u9C2B")}, {name:"Error",message:"EncodingError U+9C2B"});
assert.throws(() => {ms932Encoder.encode("\u9C2C")}, {name:"Error",message:"EncodingError U+9C2C"});
r = r && ([...ms932Encoder.encode("鰭鰮鰯鰰")].join(",") === "149,104,233,217,136,241,233,222"); // U+9C2D
assert.throws(() => {ms932Encoder.encode("\u9C31")}, {name:"Error",message:"EncodingError U+9C31"});
r = r && ([...ms932Encoder.encode("鰲")].join(",") === "233,224"); // U+9C32
assert.throws(() => {ms932Encoder.encode("\u9C33")}, {name:"Error",message:"EncodingError U+9C33"});
assert.throws(() => {ms932Encoder.encode("\u9C34")}, {name:"Error",message:"EncodingError U+9C34"});
assert.throws(() => {ms932Encoder.encode("\u9C35")}, {name:"Error",message:"EncodingError U+9C35"});
assert.throws(() => {ms932Encoder.encode("\u9C36")}, {name:"Error",message:"EncodingError U+9C36"});
assert.throws(() => {ms932Encoder.encode("\u9C37")}, {name:"Error",message:"EncodingError U+9C37"});
assert.throws(() => {ms932Encoder.encode("\u9C38")}, {name:"Error",message:"EncodingError U+9C38"});
r = r && ([...ms932Encoder.encode("鰹鰺鰻")].join(",") === "138,143,233,203,137,86"); // U+9C39
assert.throws(() => {ms932Encoder.encode("\u9C3C")}, {name:"Error",message:"EncodingError U+9C3C"});
assert.throws(() => {ms932Encoder.encode("\u9C3D")}, {name:"Error",message:"EncodingError U+9C3D"});
r = r && ([...ms932Encoder.encode("鰾")].join(",") === "233,226"); // U+9C3E
assert.throws(() => {ms932Encoder.encode("\u9C3F")}, {name:"Error",message:"EncodingError U+9C3F"});
assert.throws(() => {ms932Encoder.encode("\u9C40")}, {name:"Error",message:"EncodingError U+9C40"});
assert.throws(() => {ms932Encoder.encode("\u9C41")}, {name:"Error",message:"EncodingError U+9C41"});
assert.throws(() => {ms932Encoder.encode("\u9C42")}, {name:"Error",message:"EncodingError U+9C42"});
assert.throws(() => {ms932Encoder.encode("\u9C43")}, {name:"Error",message:"EncodingError U+9C43"});
assert.throws(() => {ms932Encoder.encode("\u9C44")}, {name:"Error",message:"EncodingError U+9C44"});
assert.throws(() => {ms932Encoder.encode("\u9C45")}, {name:"Error",message:"EncodingError U+9C45"});
r = r && ([...ms932Encoder.encode("鱆鱇鱈")].join(",") === "233,225,233,223,146,76"); // U+9C46
assert.throws(() => {ms932Encoder.encode("\u9C49")}, {name:"Error",message:"EncodingError U+9C49"});
assert.throws(() => {ms932Encoder.encode("\u9C4A")}, {name:"Error",message:"EncodingError U+9C4A"});
assert.throws(() => {ms932Encoder.encode("\u9C4B")}, {name:"Error",message:"EncodingError U+9C4B"});
assert.throws(() => {ms932Encoder.encode("\u9C4C")}, {name:"Error",message:"EncodingError U+9C4C"});
assert.throws(() => {ms932Encoder.encode("\u9C4D")}, {name:"Error",message:"EncodingError U+9C4D"});
assert.throws(() => {ms932Encoder.encode("\u9C4E")}, {name:"Error",message:"EncodingError U+9C4E"});
assert.throws(() => {ms932Encoder.encode("\u9C4F")}, {name:"Error",message:"EncodingError U+9C4F"});
assert.throws(() => {ms932Encoder.encode("\u9C50")}, {name:"Error",message:"EncodingError U+9C50"});
assert.throws(() => {ms932Encoder.encode("\u9C51")}, {name:"Error",message:"EncodingError U+9C51"});
r = r && ([...ms932Encoder.encode("鱒")].join(",") === "150,144"); // U+9C52
assert.throws(() => {ms932Encoder.encode("\u9C53")}, {name:"Error",message:"EncodingError U+9C53"});
assert.throws(() => {ms932Encoder.encode("\u9C54")}, {name:"Error",message:"EncodingError U+9C54"});
assert.throws(() => {ms932Encoder.encode("\u9C55")}, {name:"Error",message:"EncodingError U+9C55"});
assert.throws(() => {ms932Encoder.encode("\u9C56")}, {name:"Error",message:"EncodingError U+9C56"});
r = r && ([...ms932Encoder.encode("鱗")].join(",") === "151,216"); // U+9C57
assert.throws(() => {ms932Encoder.encode("\u9C58")}, {name:"Error",message:"EncodingError U+9C58"});
assert.throws(() => {ms932Encoder.encode("\u9C59")}, {name:"Error",message:"EncodingError U+9C59"});
r = r && ([...ms932Encoder.encode("鱚")].join(",") === "233,227"); // U+9C5A
assert.throws(() => {ms932Encoder.encode("\u9C5B")}, {name:"Error",message:"EncodingError U+9C5B"});
assert.throws(() => {ms932Encoder.encode("\u9C5C")}, {name:"Error",message:"EncodingError U+9C5C"});
assert.throws(() => {ms932Encoder.encode("\u9C5D")}, {name:"Error",message:"EncodingError U+9C5D"});
assert.throws(() => {ms932Encoder.encode("\u9C5E")}, {name:"Error",message:"EncodingError U+9C5E"});
assert.throws(() => {ms932Encoder.encode("\u9C5F")}, {name:"Error",message:"EncodingError U+9C5F"});
r = r && ([...ms932Encoder.encode("鱠")].join(",") === "233,228"); // U+9C60
assert.throws(() => {ms932Encoder.encode("\u9C61")}, {name:"Error",message:"EncodingError U+9C61"});
assert.throws(() => {ms932Encoder.encode("\u9C62")}, {name:"Error",message:"EncodingError U+9C62"});
assert.throws(() => {ms932Encoder.encode("\u9C63")}, {name:"Error",message:"EncodingError U+9C63"});
assert.throws(() => {ms932Encoder.encode("\u9C64")}, {name:"Error",message:"EncodingError U+9C64"});
assert.throws(() => {ms932Encoder.encode("\u9C65")}, {name:"Error",message:"EncodingError U+9C65"});
assert.throws(() => {ms932Encoder.encode("\u9C66")}, {name:"Error",message:"EncodingError U+9C66"});
r = r && ([...ms932Encoder.encode("鱧")].join(",") === "233,229"); // U+9C67
assert.throws(() => {ms932Encoder.encode("\u9C68")}, {name:"Error",message:"EncodingError U+9C68"});
assert.throws(() => {ms932Encoder.encode("\u9C69")}, {name:"Error",message:"EncodingError U+9C69"});
assert.throws(() => {ms932Encoder.encode("\u9C6A")}, {name:"Error",message:"EncodingError U+9C6A"});
assert.throws(() => {ms932Encoder.encode("\u9C6B")}, {name:"Error",message:"EncodingError U+9C6B"});
assert.throws(() => {ms932Encoder.encode("\u9C6C")}, {name:"Error",message:"EncodingError U+9C6C"});
assert.throws(() => {ms932Encoder.encode("\u9C6D")}, {name:"Error",message:"EncodingError U+9C6D"});
assert.throws(() => {ms932Encoder.encode("\u9C6E")}, {name:"Error",message:"EncodingError U+9C6E"});
assert.throws(() => {ms932Encoder.encode("\u9C6F")}, {name:"Error",message:"EncodingError U+9C6F"});
assert.throws(() => {ms932Encoder.encode("\u9C70")}, {name:"Error",message:"EncodingError U+9C70"});
assert.throws(() => {ms932Encoder.encode("\u9C71")}, {name:"Error",message:"EncodingError U+9C71"});
assert.throws(() => {ms932Encoder.encode("\u9C72")}, {name:"Error",message:"EncodingError U+9C72"});
assert.throws(() => {ms932Encoder.encode("\u9C73")}, {name:"Error",message:"EncodingError U+9C73"});
assert.throws(() => {ms932Encoder.encode("\u9C74")}, {name:"Error",message:"EncodingError U+9C74"});
assert.throws(() => {ms932Encoder.encode("\u9C75")}, {name:"Error",message:"EncodingError U+9C75"});
r = r && ([...ms932Encoder.encode("鱶")].join(",") === "233,230"); // U+9C76
assert.throws(() => {ms932Encoder.encode("\u9C77")}, {name:"Error",message:"EncodingError U+9C77"});
r = r && ([...ms932Encoder.encode("鱸")].join(",") === "233,231"); // U+9C78
assert.throws(() => {ms932Encoder.encode("\u9C79")}, {name:"Error",message:"EncodingError U+9C79"});
assert.throws(() => {ms932Encoder.encode("\u9C7A")}, {name:"Error",message:"EncodingError U+9C7A"});
assert.throws(() => {ms932Encoder.encode("\u9C7B")}, {name:"Error",message:"EncodingError U+9C7B"});
assert.throws(() => {ms932Encoder.encode("\u9C7C")}, {name:"Error",message:"EncodingError U+9C7C"});
assert.throws(() => {ms932Encoder.encode("\u9C7D")}, {name:"Error",message:"EncodingError U+9C7D"});
assert.throws(() => {ms932Encoder.encode("\u9C7E")}, {name:"Error",message:"EncodingError U+9C7E"});
assert.throws(() => {ms932Encoder.encode("\u9C7F")}, {name:"Error",message:"EncodingError U+9C7F"});
assert.throws(() => {ms932Encoder.encode("\u9C80")}, {name:"Error",message:"EncodingError U+9C80"});
assert.throws(() => {ms932Encoder.encode("\u9C81")}, {name:"Error",message:"EncodingError U+9C81"});
assert.throws(() => {ms932Encoder.encode("\u9C82")}, {name:"Error",message:"EncodingError U+9C82"});
assert.throws(() => {ms932Encoder.encode("\u9C83")}, {name:"Error",message:"EncodingError U+9C83"});
assert.throws(() => {ms932Encoder.encode("\u9C84")}, {name:"Error",message:"EncodingError U+9C84"});
assert.throws(() => {ms932Encoder.encode("\u9C85")}, {name:"Error",message:"EncodingError U+9C85"});
assert.throws(() => {ms932Encoder.encode("\u9C86")}, {name:"Error",message:"EncodingError U+9C86"});
assert.throws(() => {ms932Encoder.encode("\u9C87")}, {name:"Error",message:"EncodingError U+9C87"});
assert.throws(() => {ms932Encoder.encode("\u9C88")}, {name:"Error",message:"EncodingError U+9C88"});
assert.throws(() => {ms932Encoder.encode("\u9C89")}, {name:"Error",message:"EncodingError U+9C89"});
assert.throws(() => {ms932Encoder.encode("\u9C8A")}, {name:"Error",message:"EncodingError U+9C8A"});
assert.throws(() => {ms932Encoder.encode("\u9C8B")}, {name:"Error",message:"EncodingError U+9C8B"});
assert.throws(() => {ms932Encoder.encode("\u9C8C")}, {name:"Error",message:"EncodingError U+9C8C"});
assert.throws(() => {ms932Encoder.encode("\u9C8D")}, {name:"Error",message:"EncodingError U+9C8D"});
assert.throws(() => {ms932Encoder.encode("\u9C8E")}, {name:"Error",message:"EncodingError U+9C8E"});
assert.throws(() => {ms932Encoder.encode("\u9C8F")}, {name:"Error",message:"EncodingError U+9C8F"});
assert.throws(() => {ms932Encoder.encode("\u9C90")}, {name:"Error",message:"EncodingError U+9C90"});
assert.throws(() => {ms932Encoder.encode("\u9C91")}, {name:"Error",message:"EncodingError U+9C91"});
assert.throws(() => {ms932Encoder.encode("\u9C92")}, {name:"Error",message:"EncodingError U+9C92"});
assert.throws(() => {ms932Encoder.encode("\u9C93")}, {name:"Error",message:"EncodingError U+9C93"});
assert.throws(() => {ms932Encoder.encode("\u9C94")}, {name:"Error",message:"EncodingError U+9C94"});
assert.throws(() => {ms932Encoder.encode("\u9C95")}, {name:"Error",message:"EncodingError U+9C95"});
assert.throws(() => {ms932Encoder.encode("\u9C96")}, {name:"Error",message:"EncodingError U+9C96"});
assert.throws(() => {ms932Encoder.encode("\u9C97")}, {name:"Error",message:"EncodingError U+9C97"});
assert.throws(() => {ms932Encoder.encode("\u9C98")}, {name:"Error",message:"EncodingError U+9C98"});
assert.throws(() => {ms932Encoder.encode("\u9C99")}, {name:"Error",message:"EncodingError U+9C99"});
assert.throws(() => {ms932Encoder.encode("\u9C9A")}, {name:"Error",message:"EncodingError U+9C9A"});
assert.throws(() => {ms932Encoder.encode("\u9C9B")}, {name:"Error",message:"EncodingError U+9C9B"});
assert.throws(() => {ms932Encoder.encode("\u9C9C")}, {name:"Error",message:"EncodingError U+9C9C"});
assert.throws(() => {ms932Encoder.encode("\u9C9D")}, {name:"Error",message:"EncodingError U+9C9D"});
assert.throws(() => {ms932Encoder.encode("\u9C9E")}, {name:"Error",message:"EncodingError U+9C9E"});
assert.throws(() => {ms932Encoder.encode("\u9C9F")}, {name:"Error",message:"EncodingError U+9C9F"});
assert.throws(() => {ms932Encoder.encode("\u9CA0")}, {name:"Error",message:"EncodingError U+9CA0"});
assert.throws(() => {ms932Encoder.encode("\u9CA1")}, {name:"Error",message:"EncodingError U+9CA1"});
assert.throws(() => {ms932Encoder.encode("\u9CA2")}, {name:"Error",message:"EncodingError U+9CA2"});
assert.throws(() => {ms932Encoder.encode("\u9CA3")}, {name:"Error",message:"EncodingError U+9CA3"});
assert.throws(() => {ms932Encoder.encode("\u9CA4")}, {name:"Error",message:"EncodingError U+9CA4"});
assert.throws(() => {ms932Encoder.encode("\u9CA5")}, {name:"Error",message:"EncodingError U+9CA5"});
assert.throws(() => {ms932Encoder.encode("\u9CA6")}, {name:"Error",message:"EncodingError U+9CA6"});
assert.throws(() => {ms932Encoder.encode("\u9CA7")}, {name:"Error",message:"EncodingError U+9CA7"});
assert.throws(() => {ms932Encoder.encode("\u9CA8")}, {name:"Error",message:"EncodingError U+9CA8"});
assert.throws(() => {ms932Encoder.encode("\u9CA9")}, {name:"Error",message:"EncodingError U+9CA9"});
assert.throws(() => {ms932Encoder.encode("\u9CAA")}, {name:"Error",message:"EncodingError U+9CAA"});
assert.throws(() => {ms932Encoder.encode("\u9CAB")}, {name:"Error",message:"EncodingError U+9CAB"});
assert.throws(() => {ms932Encoder.encode("\u9CAC")}, {name:"Error",message:"EncodingError U+9CAC"});
assert.throws(() => {ms932Encoder.encode("\u9CAD")}, {name:"Error",message:"EncodingError U+9CAD"});
assert.throws(() => {ms932Encoder.encode("\u9CAE")}, {name:"Error",message:"EncodingError U+9CAE"});
assert.throws(() => {ms932Encoder.encode("\u9CAF")}, {name:"Error",message:"EncodingError U+9CAF"});
assert.throws(() => {ms932Encoder.encode("\u9CB0")}, {name:"Error",message:"EncodingError U+9CB0"});
assert.throws(() => {ms932Encoder.encode("\u9CB1")}, {name:"Error",message:"EncodingError U+9CB1"});
assert.throws(() => {ms932Encoder.encode("\u9CB2")}, {name:"Error",message:"EncodingError U+9CB2"});
assert.throws(() => {ms932Encoder.encode("\u9CB3")}, {name:"Error",message:"EncodingError U+9CB3"});
assert.throws(() => {ms932Encoder.encode("\u9CB4")}, {name:"Error",message:"EncodingError U+9CB4"});
assert.throws(() => {ms932Encoder.encode("\u9CB5")}, {name:"Error",message:"EncodingError U+9CB5"});
assert.throws(() => {ms932Encoder.encode("\u9CB6")}, {name:"Error",message:"EncodingError U+9CB6"});
assert.throws(() => {ms932Encoder.encode("\u9CB7")}, {name:"Error",message:"EncodingError U+9CB7"});
assert.throws(() => {ms932Encoder.encode("\u9CB8")}, {name:"Error",message:"EncodingError U+9CB8"});
assert.throws(() => {ms932Encoder.encode("\u9CB9")}, {name:"Error",message:"EncodingError U+9CB9"});
assert.throws(() => {ms932Encoder.encode("\u9CBA")}, {name:"Error",message:"EncodingError U+9CBA"});
assert.throws(() => {ms932Encoder.encode("\u9CBB")}, {name:"Error",message:"EncodingError U+9CBB"});
assert.throws(() => {ms932Encoder.encode("\u9CBC")}, {name:"Error",message:"EncodingError U+9CBC"});
assert.throws(() => {ms932Encoder.encode("\u9CBD")}, {name:"Error",message:"EncodingError U+9CBD"});
assert.throws(() => {ms932Encoder.encode("\u9CBE")}, {name:"Error",message:"EncodingError U+9CBE"});
assert.throws(() => {ms932Encoder.encode("\u9CBF")}, {name:"Error",message:"EncodingError U+9CBF"});
assert.throws(() => {ms932Encoder.encode("\u9CC0")}, {name:"Error",message:"EncodingError U+9CC0"});
assert.throws(() => {ms932Encoder.encode("\u9CC1")}, {name:"Error",message:"EncodingError U+9CC1"});
assert.throws(() => {ms932Encoder.encode("\u9CC2")}, {name:"Error",message:"EncodingError U+9CC2"});
assert.throws(() => {ms932Encoder.encode("\u9CC3")}, {name:"Error",message:"EncodingError U+9CC3"});
assert.throws(() => {ms932Encoder.encode("\u9CC4")}, {name:"Error",message:"EncodingError U+9CC4"});
assert.throws(() => {ms932Encoder.encode("\u9CC5")}, {name:"Error",message:"EncodingError U+9CC5"});
assert.throws(() => {ms932Encoder.encode("\u9CC6")}, {name:"Error",message:"EncodingError U+9CC6"});
assert.throws(() => {ms932Encoder.encode("\u9CC7")}, {name:"Error",message:"EncodingError U+9CC7"});
assert.throws(() => {ms932Encoder.encode("\u9CC8")}, {name:"Error",message:"EncodingError U+9CC8"});
assert.throws(() => {ms932Encoder.encode("\u9CC9")}, {name:"Error",message:"EncodingError U+9CC9"});
assert.throws(() => {ms932Encoder.encode("\u9CCA")}, {name:"Error",message:"EncodingError U+9CCA"});
assert.throws(() => {ms932Encoder.encode("\u9CCB")}, {name:"Error",message:"EncodingError U+9CCB"});
assert.throws(() => {ms932Encoder.encode("\u9CCC")}, {name:"Error",message:"EncodingError U+9CCC"});
assert.throws(() => {ms932Encoder.encode("\u9CCD")}, {name:"Error",message:"EncodingError U+9CCD"});
assert.throws(() => {ms932Encoder.encode("\u9CCE")}, {name:"Error",message:"EncodingError U+9CCE"});
assert.throws(() => {ms932Encoder.encode("\u9CCF")}, {name:"Error",message:"EncodingError U+9CCF"});
assert.throws(() => {ms932Encoder.encode("\u9CD0")}, {name:"Error",message:"EncodingError U+9CD0"});
assert.throws(() => {ms932Encoder.encode("\u9CD1")}, {name:"Error",message:"EncodingError U+9CD1"});
assert.throws(() => {ms932Encoder.encode("\u9CD2")}, {name:"Error",message:"EncodingError U+9CD2"});
assert.throws(() => {ms932Encoder.encode("\u9CD3")}, {name:"Error",message:"EncodingError U+9CD3"});
assert.throws(() => {ms932Encoder.encode("\u9CD4")}, {name:"Error",message:"EncodingError U+9CD4"});
assert.throws(() => {ms932Encoder.encode("\u9CD5")}, {name:"Error",message:"EncodingError U+9CD5"});
assert.throws(() => {ms932Encoder.encode("\u9CD6")}, {name:"Error",message:"EncodingError U+9CD6"});
assert.throws(() => {ms932Encoder.encode("\u9CD7")}, {name:"Error",message:"EncodingError U+9CD7"});
assert.throws(() => {ms932Encoder.encode("\u9CD8")}, {name:"Error",message:"EncodingError U+9CD8"});
assert.throws(() => {ms932Encoder.encode("\u9CD9")}, {name:"Error",message:"EncodingError U+9CD9"});
assert.throws(() => {ms932Encoder.encode("\u9CDA")}, {name:"Error",message:"EncodingError U+9CDA"});
assert.throws(() => {ms932Encoder.encode("\u9CDB")}, {name:"Error",message:"EncodingError U+9CDB"});
assert.throws(() => {ms932Encoder.encode("\u9CDC")}, {name:"Error",message:"EncodingError U+9CDC"});
assert.throws(() => {ms932Encoder.encode("\u9CDD")}, {name:"Error",message:"EncodingError U+9CDD"});
assert.throws(() => {ms932Encoder.encode("\u9CDE")}, {name:"Error",message:"EncodingError U+9CDE"});
assert.throws(() => {ms932Encoder.encode("\u9CDF")}, {name:"Error",message:"EncodingError U+9CDF"});
assert.throws(() => {ms932Encoder.encode("\u9CE0")}, {name:"Error",message:"EncodingError U+9CE0"});
assert.throws(() => {ms932Encoder.encode("\u9CE1")}, {name:"Error",message:"EncodingError U+9CE1"});
assert.throws(() => {ms932Encoder.encode("\u9CE2")}, {name:"Error",message:"EncodingError U+9CE2"});
assert.throws(() => {ms932Encoder.encode("\u9CE3")}, {name:"Error",message:"EncodingError U+9CE3"});
assert.throws(() => {ms932Encoder.encode("\u9CE4")}, {name:"Error",message:"EncodingError U+9CE4"});
r = r && ([...ms932Encoder.encode("鳥")].join(",") === "146,185"); // U+9CE5
assert.throws(() => {ms932Encoder.encode("\u9CE6")}, {name:"Error",message:"EncodingError U+9CE6"});
r = r && ([...ms932Encoder.encode("鳧")].join(",") === "233,232"); // U+9CE7
assert.throws(() => {ms932Encoder.encode("\u9CE8")}, {name:"Error",message:"EncodingError U+9CE8"});
r = r && ([...ms932Encoder.encode("鳩")].join(",") === "148,181"); // U+9CE9
assert.throws(() => {ms932Encoder.encode("\u9CEA")}, {name:"Error",message:"EncodingError U+9CEA"});
r = r && ([...ms932Encoder.encode("鳫鳬")].join(",") === "233,237,233,233"); // U+9CEB
assert.throws(() => {ms932Encoder.encode("\u9CED")}, {name:"Error",message:"EncodingError U+9CED"});
assert.throws(() => {ms932Encoder.encode("\u9CEE")}, {name:"Error",message:"EncodingError U+9CEE"});
assert.throws(() => {ms932Encoder.encode("\u9CEF")}, {name:"Error",message:"EncodingError U+9CEF"});
r = r && ([...ms932Encoder.encode("鳰")].join(",") === "233,234"); // U+9CF0
assert.throws(() => {ms932Encoder.encode("\u9CF1")}, {name:"Error",message:"EncodingError U+9CF1"});
assert.throws(() => {ms932Encoder.encode("\u9CF2")}, {name:"Error",message:"EncodingError U+9CF2"});
r = r && ([...ms932Encoder.encode("鳳鳴")].join(",") === "150,80,150,194"); // U+9CF3
assert.throws(() => {ms932Encoder.encode("\u9CF5")}, {name:"Error",message:"EncodingError U+9CF5"});
r = r && ([...ms932Encoder.encode("鳶")].join(",") === "147,206"); // U+9CF6
assert.throws(() => {ms932Encoder.encode("\u9CF7")}, {name:"Error",message:"EncodingError U+9CF7"});
assert.throws(() => {ms932Encoder.encode("\u9CF8")}, {name:"Error",message:"EncodingError U+9CF8"});
assert.throws(() => {ms932Encoder.encode("\u9CF9")}, {name:"Error",message:"EncodingError U+9CF9"});
assert.throws(() => {ms932Encoder.encode("\u9CFA")}, {name:"Error",message:"EncodingError U+9CFA"});
assert.throws(() => {ms932Encoder.encode("\u9CFB")}, {name:"Error",message:"EncodingError U+9CFB"});
assert.throws(() => {ms932Encoder.encode("\u9CFC")}, {name:"Error",message:"EncodingError U+9CFC"});
assert.throws(() => {ms932Encoder.encode("\u9CFD")}, {name:"Error",message:"EncodingError U+9CFD"});
assert.throws(() => {ms932Encoder.encode("\u9CFE")}, {name:"Error",message:"EncodingError U+9CFE"});
assert.throws(() => {ms932Encoder.encode("\u9CFF")}, {name:"Error",message:"EncodingError U+9CFF"});
assert.throws(() => {ms932Encoder.encode("\u9D00")}, {name:"Error",message:"EncodingError U+9D00"});
assert.throws(() => {ms932Encoder.encode("\u9D01")}, {name:"Error",message:"EncodingError U+9D01"});
assert.throws(() => {ms932Encoder.encode("\u9D02")}, {name:"Error",message:"EncodingError U+9D02"});
r = r && ([...ms932Encoder.encode("鴃")].join(",") === "233,238"); // U+9D03
assert.throws(() => {ms932Encoder.encode("\u9D04")}, {name:"Error",message:"EncodingError U+9D04"});
assert.throws(() => {ms932Encoder.encode("\u9D05")}, {name:"Error",message:"EncodingError U+9D05"});
r = r && ([...ms932Encoder.encode("鴆鴇鴈鴉")].join(",") === "233,239,147,188,233,236,233,235"); // U+9D06
assert.throws(() => {ms932Encoder.encode("\u9D0A")}, {name:"Error",message:"EncodingError U+9D0A"});
assert.throws(() => {ms932Encoder.encode("\u9D0B")}, {name:"Error",message:"EncodingError U+9D0B"});
assert.throws(() => {ms932Encoder.encode("\u9D0C")}, {name:"Error",message:"EncodingError U+9D0C"});
assert.throws(() => {ms932Encoder.encode("\u9D0D")}, {name:"Error",message:"EncodingError U+9D0D"});
r = r && ([...ms932Encoder.encode("鴎")].join(",") === "137,168"); // U+9D0E
assert.throws(() => {ms932Encoder.encode("\u9D0F")}, {name:"Error",message:"EncodingError U+9D0F"});
assert.throws(() => {ms932Encoder.encode("\u9D10")}, {name:"Error",message:"EncodingError U+9D10"});
assert.throws(() => {ms932Encoder.encode("\u9D11")}, {name:"Error",message:"EncodingError U+9D11"});
r = r && ([...ms932Encoder.encode("鴒")].join(",") === "233,247"); // U+9D12
assert.throws(() => {ms932Encoder.encode("\u9D13")}, {name:"Error",message:"EncodingError U+9D13"});
assert.throws(() => {ms932Encoder.encode("\u9D14")}, {name:"Error",message:"EncodingError U+9D14"});
r = r && ([...ms932Encoder.encode("鴕")].join(",") === "233,246"); // U+9D15
assert.throws(() => {ms932Encoder.encode("\u9D16")}, {name:"Error",message:"EncodingError U+9D16"});
assert.throws(() => {ms932Encoder.encode("\u9D17")}, {name:"Error",message:"EncodingError U+9D17"});
assert.throws(() => {ms932Encoder.encode("\u9D18")}, {name:"Error",message:"EncodingError U+9D18"});
assert.throws(() => {ms932Encoder.encode("\u9D19")}, {name:"Error",message:"EncodingError U+9D19"});
assert.throws(() => {ms932Encoder.encode("\u9D1A")}, {name:"Error",message:"EncodingError U+9D1A"});
r = r && ([...ms932Encoder.encode("鴛")].join(",") === "137,149"); // U+9D1B
assert.throws(() => {ms932Encoder.encode("\u9D1C")}, {name:"Error",message:"EncodingError U+9D1C"});
assert.throws(() => {ms932Encoder.encode("\u9D1D")}, {name:"Error",message:"EncodingError U+9D1D"});
assert.throws(() => {ms932Encoder.encode("\u9D1E")}, {name:"Error",message:"EncodingError U+9D1E"});
r = r && ([...ms932Encoder.encode("鴟")].join(",") === "233,244"); // U+9D1F
assert.throws(() => {ms932Encoder.encode("\u9D20")}, {name:"Error",message:"EncodingError U+9D20"});
assert.throws(() => {ms932Encoder.encode("\u9D21")}, {name:"Error",message:"EncodingError U+9D21"});
assert.throws(() => {ms932Encoder.encode("\u9D22")}, {name:"Error",message:"EncodingError U+9D22"});
r = r && ([...ms932Encoder.encode("鴣")].join(",") === "233,243"); // U+9D23
assert.throws(() => {ms932Encoder.encode("\u9D24")}, {name:"Error",message:"EncodingError U+9D24"});
assert.throws(() => {ms932Encoder.encode("\u9D25")}, {name:"Error",message:"EncodingError U+9D25"});
r = r && ([...ms932Encoder.encode("鴦")].join(",") === "233,241"); // U+9D26
assert.throws(() => {ms932Encoder.encode("\u9D27")}, {name:"Error",message:"EncodingError U+9D27"});
r = r && ([...ms932Encoder.encode("鴨")].join(",") === "138,155"); // U+9D28
assert.throws(() => {ms932Encoder.encode("\u9D29")}, {name:"Error",message:"EncodingError U+9D29"});
r = r && ([...ms932Encoder.encode("鴪鴫鴬")].join(",") === "233,240,142,176,137,167"); // U+9D2A
assert.throws(() => {ms932Encoder.encode("\u9D2D")}, {name:"Error",message:"EncodingError U+9D2D"});
assert.throws(() => {ms932Encoder.encode("\u9D2E")}, {name:"Error",message:"EncodingError U+9D2E"});
assert.throws(() => {ms932Encoder.encode("\u9D2F")}, {name:"Error",message:"EncodingError U+9D2F"});
assert.throws(() => {ms932Encoder.encode("\u9D30")}, {name:"Error",message:"EncodingError U+9D30"});
assert.throws(() => {ms932Encoder.encode("\u9D31")}, {name:"Error",message:"EncodingError U+9D31"});
assert.throws(() => {ms932Encoder.encode("\u9D32")}, {name:"Error",message:"EncodingError U+9D32"});
assert.throws(() => {ms932Encoder.encode("\u9D33")}, {name:"Error",message:"EncodingError U+9D33"});
assert.throws(() => {ms932Encoder.encode("\u9D34")}, {name:"Error",message:"EncodingError U+9D34"});
assert.throws(() => {ms932Encoder.encode("\u9D35")}, {name:"Error",message:"EncodingError U+9D35"});
assert.throws(() => {ms932Encoder.encode("\u9D36")}, {name:"Error",message:"EncodingError U+9D36"});
assert.throws(() => {ms932Encoder.encode("\u9D37")}, {name:"Error",message:"EncodingError U+9D37"});
assert.throws(() => {ms932Encoder.encode("\u9D38")}, {name:"Error",message:"EncodingError U+9D38"});
assert.throws(() => {ms932Encoder.encode("\u9D39")}, {name:"Error",message:"EncodingError U+9D39"});
assert.throws(() => {ms932Encoder.encode("\u9D3A")}, {name:"Error",message:"EncodingError U+9D3A"});
r = r && ([...ms932Encoder.encode("鴻")].join(",") === "141,131"); // U+9D3B
assert.throws(() => {ms932Encoder.encode("\u9D3C")}, {name:"Error",message:"EncodingError U+9D3C"});
assert.throws(() => {ms932Encoder.encode("\u9D3D")}, {name:"Error",message:"EncodingError U+9D3D"});
r = r && ([...ms932Encoder.encode("鴾鴿")].join(",") === "233,250,233,249"); // U+9D3E
assert.throws(() => {ms932Encoder.encode("\u9D40")}, {name:"Error",message:"EncodingError U+9D40"});
r = r && ([...ms932Encoder.encode("鵁")].join(",") === "233,248"); // U+9D41
assert.throws(() => {ms932Encoder.encode("\u9D42")}, {name:"Error",message:"EncodingError U+9D42"});
assert.throws(() => {ms932Encoder.encode("\u9D43")}, {name:"Error",message:"EncodingError U+9D43"});
r = r && ([...ms932Encoder.encode("鵄")].join(",") === "233,245"); // U+9D44
assert.throws(() => {ms932Encoder.encode("\u9D45")}, {name:"Error",message:"EncodingError U+9D45"});
r = r && ([...ms932Encoder.encode("鵆")].join(",") === "233,251"); // U+9D46
assert.throws(() => {ms932Encoder.encode("\u9D47")}, {name:"Error",message:"EncodingError U+9D47"});
r = r && ([...ms932Encoder.encode("鵈")].join(",") === "233,252"); // U+9D48
assert.throws(() => {ms932Encoder.encode("\u9D49")}, {name:"Error",message:"EncodingError U+9D49"});
assert.throws(() => {ms932Encoder.encode("\u9D4A")}, {name:"Error",message:"EncodingError U+9D4A"});
assert.throws(() => {ms932Encoder.encode("\u9D4B")}, {name:"Error",message:"EncodingError U+9D4B"});
assert.throws(() => {ms932Encoder.encode("\u9D4C")}, {name:"Error",message:"EncodingError U+9D4C"});
assert.throws(() => {ms932Encoder.encode("\u9D4D")}, {name:"Error",message:"EncodingError U+9D4D"});
assert.throws(() => {ms932Encoder.encode("\u9D4E")}, {name:"Error",message:"EncodingError U+9D4E"});
assert.throws(() => {ms932Encoder.encode("\u9D4F")}, {name:"Error",message:"EncodingError U+9D4F"});
r = r && ([...ms932Encoder.encode("鵐鵑")].join(",") === "234,68,234,67"); // U+9D50
assert.throws(() => {ms932Encoder.encode("\u9D52")}, {name:"Error",message:"EncodingError U+9D52"});
assert.throws(() => {ms932Encoder.encode("\u9D53")}, {name:"Error",message:"EncodingError U+9D53"});
assert.throws(() => {ms932Encoder.encode("\u9D54")}, {name:"Error",message:"EncodingError U+9D54"});
assert.throws(() => {ms932Encoder.encode("\u9D55")}, {name:"Error",message:"EncodingError U+9D55"});
assert.throws(() => {ms932Encoder.encode("\u9D56")}, {name:"Error",message:"EncodingError U+9D56"});
assert.throws(() => {ms932Encoder.encode("\u9D57")}, {name:"Error",message:"EncodingError U+9D57"});
assert.throws(() => {ms932Encoder.encode("\u9D58")}, {name:"Error",message:"EncodingError U+9D58"});
r = r && ([...ms932Encoder.encode("鵙")].join(",") === "234,69"); // U+9D59
assert.throws(() => {ms932Encoder.encode("\u9D5A")}, {name:"Error",message:"EncodingError U+9D5A"});
assert.throws(() => {ms932Encoder.encode("\u9D5B")}, {name:"Error",message:"EncodingError U+9D5B"});
r = r && ([...ms932Encoder.encode("鵜鵝鵞")].join(",") === "137,76,234,64,234,65"); // U+9D5C
assert.throws(() => {ms932Encoder.encode("\u9D5F")}, {name:"Error",message:"EncodingError U+9D5F"});
r = r && ([...ms932Encoder.encode("鵠鵡")].join(",") === "141,148,150,183"); // U+9D60
assert.throws(() => {ms932Encoder.encode("\u9D62")}, {name:"Error",message:"EncodingError U+9D62"});
assert.throws(() => {ms932Encoder.encode("\u9D63")}, {name:"Error",message:"EncodingError U+9D63"});
r = r && ([...ms932Encoder.encode("鵤")].join(",") === "234,66"); // U+9D64
assert.throws(() => {ms932Encoder.encode("\u9D65")}, {name:"Error",message:"EncodingError U+9D65"});
assert.throws(() => {ms932Encoder.encode("\u9D66")}, {name:"Error",message:"EncodingError U+9D66"});
assert.throws(() => {ms932Encoder.encode("\u9D67")}, {name:"Error",message:"EncodingError U+9D67"});
assert.throws(() => {ms932Encoder.encode("\u9D68")}, {name:"Error",message:"EncodingError U+9D68"});
assert.throws(() => {ms932Encoder.encode("\u9D69")}, {name:"Error",message:"EncodingError U+9D69"});
assert.throws(() => {ms932Encoder.encode("\u9D6A")}, {name:"Error",message:"EncodingError U+9D6A"});
r = r && ([...ms932Encoder.encode("鵫鵬")].join(",") === "252,72,150,81"); // U+9D6B
assert.throws(() => {ms932Encoder.encode("\u9D6D")}, {name:"Error",message:"EncodingError U+9D6D"});
assert.throws(() => {ms932Encoder.encode("\u9D6E")}, {name:"Error",message:"EncodingError U+9D6E"});
r = r && ([...ms932Encoder.encode("鵯鵰")].join(",") === "234,74,252,71"); // U+9D6F
assert.throws(() => {ms932Encoder.encode("\u9D71")}, {name:"Error",message:"EncodingError U+9D71"});
r = r && ([...ms932Encoder.encode("鵲")].join(",") === "234,70"); // U+9D72
assert.throws(() => {ms932Encoder.encode("\u9D73")}, {name:"Error",message:"EncodingError U+9D73"});
assert.throws(() => {ms932Encoder.encode("\u9D74")}, {name:"Error",message:"EncodingError U+9D74"});
assert.throws(() => {ms932Encoder.encode("\u9D75")}, {name:"Error",message:"EncodingError U+9D75"});
assert.throws(() => {ms932Encoder.encode("\u9D76")}, {name:"Error",message:"EncodingError U+9D76"});
assert.throws(() => {ms932Encoder.encode("\u9D77")}, {name:"Error",message:"EncodingError U+9D77"});
assert.throws(() => {ms932Encoder.encode("\u9D78")}, {name:"Error",message:"EncodingError U+9D78"});
assert.throws(() => {ms932Encoder.encode("\u9D79")}, {name:"Error",message:"EncodingError U+9D79"});
r = r && ([...ms932Encoder.encode("鵺")].join(",") === "234,75"); // U+9D7A
assert.throws(() => {ms932Encoder.encode("\u9D7B")}, {name:"Error",message:"EncodingError U+9D7B"});
assert.throws(() => {ms932Encoder.encode("\u9D7C")}, {name:"Error",message:"EncodingError U+9D7C"});
assert.throws(() => {ms932Encoder.encode("\u9D7D")}, {name:"Error",message:"EncodingError U+9D7D"});
assert.throws(() => {ms932Encoder.encode("\u9D7E")}, {name:"Error",message:"EncodingError U+9D7E"});
assert.throws(() => {ms932Encoder.encode("\u9D7F")}, {name:"Error",message:"EncodingError U+9D7F"});
assert.throws(() => {ms932Encoder.encode("\u9D80")}, {name:"Error",message:"EncodingError U+9D80"});
assert.throws(() => {ms932Encoder.encode("\u9D81")}, {name:"Error",message:"EncodingError U+9D81"});
assert.throws(() => {ms932Encoder.encode("\u9D82")}, {name:"Error",message:"EncodingError U+9D82"});
assert.throws(() => {ms932Encoder.encode("\u9D83")}, {name:"Error",message:"EncodingError U+9D83"});
assert.throws(() => {ms932Encoder.encode("\u9D84")}, {name:"Error",message:"EncodingError U+9D84"});
assert.throws(() => {ms932Encoder.encode("\u9D85")}, {name:"Error",message:"EncodingError U+9D85"});
assert.throws(() => {ms932Encoder.encode("\u9D86")}, {name:"Error",message:"EncodingError U+9D86"});
r = r && ([...ms932Encoder.encode("鶇")].join(",") === "234,72"); // U+9D87
assert.throws(() => {ms932Encoder.encode("\u9D88")}, {name:"Error",message:"EncodingError U+9D88"});
r = r && ([...ms932Encoder.encode("鶉")].join(",") === "234,71"); // U+9D89
assert.throws(() => {ms932Encoder.encode("\u9D8A")}, {name:"Error",message:"EncodingError U+9D8A"});
assert.throws(() => {ms932Encoder.encode("\u9D8B")}, {name:"Error",message:"EncodingError U+9D8B"});
assert.throws(() => {ms932Encoder.encode("\u9D8C")}, {name:"Error",message:"EncodingError U+9D8C"});
assert.throws(() => {ms932Encoder.encode("\u9D8D")}, {name:"Error",message:"EncodingError U+9D8D"});
assert.throws(() => {ms932Encoder.encode("\u9D8E")}, {name:"Error",message:"EncodingError U+9D8E"});
r = r && ([...ms932Encoder.encode("鶏")].join(",") === "140,123"); // U+9D8F
assert.throws(() => {ms932Encoder.encode("\u9D90")}, {name:"Error",message:"EncodingError U+9D90"});
assert.throws(() => {ms932Encoder.encode("\u9D91")}, {name:"Error",message:"EncodingError U+9D91"});
assert.throws(() => {ms932Encoder.encode("\u9D92")}, {name:"Error",message:"EncodingError U+9D92"});
assert.throws(() => {ms932Encoder.encode("\u9D93")}, {name:"Error",message:"EncodingError U+9D93"});
assert.throws(() => {ms932Encoder.encode("\u9D94")}, {name:"Error",message:"EncodingError U+9D94"});
assert.throws(() => {ms932Encoder.encode("\u9D95")}, {name:"Error",message:"EncodingError U+9D95"});
assert.throws(() => {ms932Encoder.encode("\u9D96")}, {name:"Error",message:"EncodingError U+9D96"});
assert.throws(() => {ms932Encoder.encode("\u9D97")}, {name:"Error",message:"EncodingError U+9D97"});
assert.throws(() => {ms932Encoder.encode("\u9D98")}, {name:"Error",message:"EncodingError U+9D98"});
assert.throws(() => {ms932Encoder.encode("\u9D99")}, {name:"Error",message:"EncodingError U+9D99"});
r = r && ([...ms932Encoder.encode("鶚")].join(",") === "234,76"); // U+9D9A
assert.throws(() => {ms932Encoder.encode("\u9D9B")}, {name:"Error",message:"EncodingError U+9D9B"});
assert.throws(() => {ms932Encoder.encode("\u9D9C")}, {name:"Error",message:"EncodingError U+9D9C"});
assert.throws(() => {ms932Encoder.encode("\u9D9D")}, {name:"Error",message:"EncodingError U+9D9D"});
assert.throws(() => {ms932Encoder.encode("\u9D9E")}, {name:"Error",message:"EncodingError U+9D9E"});
assert.throws(() => {ms932Encoder.encode("\u9D9F")}, {name:"Error",message:"EncodingError U+9D9F"});
assert.throws(() => {ms932Encoder.encode("\u9DA0")}, {name:"Error",message:"EncodingError U+9DA0"});
assert.throws(() => {ms932Encoder.encode("\u9DA1")}, {name:"Error",message:"EncodingError U+9DA1"});
assert.throws(() => {ms932Encoder.encode("\u9DA2")}, {name:"Error",message:"EncodingError U+9DA2"});
assert.throws(() => {ms932Encoder.encode("\u9DA3")}, {name:"Error",message:"EncodingError U+9DA3"});
r = r && ([...ms932Encoder.encode("鶤")].join(",") === "234,77"); // U+9DA4
assert.throws(() => {ms932Encoder.encode("\u9DA5")}, {name:"Error",message:"EncodingError U+9DA5"});
assert.throws(() => {ms932Encoder.encode("\u9DA6")}, {name:"Error",message:"EncodingError U+9DA6"});
assert.throws(() => {ms932Encoder.encode("\u9DA7")}, {name:"Error",message:"EncodingError U+9DA7"});
assert.throws(() => {ms932Encoder.encode("\u9DA8")}, {name:"Error",message:"EncodingError U+9DA8"});
r = r && ([...ms932Encoder.encode("鶩")].join(",") === "234,78"); // U+9DA9
assert.throws(() => {ms932Encoder.encode("\u9DAA")}, {name:"Error",message:"EncodingError U+9DAA"});
r = r && ([...ms932Encoder.encode("鶫")].join(",") === "234,73"); // U+9DAB
assert.throws(() => {ms932Encoder.encode("\u9DAC")}, {name:"Error",message:"EncodingError U+9DAC"});
assert.throws(() => {ms932Encoder.encode("\u9DAD")}, {name:"Error",message:"EncodingError U+9DAD"});
assert.throws(() => {ms932Encoder.encode("\u9DAE")}, {name:"Error",message:"EncodingError U+9DAE"});
r = r && ([...ms932Encoder.encode("鶯")].join(",") === "233,242"); // U+9DAF
assert.throws(() => {ms932Encoder.encode("\u9DB0")}, {name:"Error",message:"EncodingError U+9DB0"});
assert.throws(() => {ms932Encoder.encode("\u9DB1")}, {name:"Error",message:"EncodingError U+9DB1"});
r = r && ([...ms932Encoder.encode("鶲")].join(",") === "234,79"); // U+9DB2
assert.throws(() => {ms932Encoder.encode("\u9DB3")}, {name:"Error",message:"EncodingError U+9DB3"});
r = r && ([...ms932Encoder.encode("鶴")].join(",") === "146,223"); // U+9DB4
assert.throws(() => {ms932Encoder.encode("\u9DB5")}, {name:"Error",message:"EncodingError U+9DB5"});
assert.throws(() => {ms932Encoder.encode("\u9DB6")}, {name:"Error",message:"EncodingError U+9DB6"});
assert.throws(() => {ms932Encoder.encode("\u9DB7")}, {name:"Error",message:"EncodingError U+9DB7"});
r = r && ([...ms932Encoder.encode("鶸")].join(",") === "234,83"); // U+9DB8
assert.throws(() => {ms932Encoder.encode("\u9DB9")}, {name:"Error",message:"EncodingError U+9DB9"});
r = r && ([...ms932Encoder.encode("鶺鶻")].join(",") === "234,84,234,82"); // U+9DBA
assert.throws(() => {ms932Encoder.encode("\u9DBC")}, {name:"Error",message:"EncodingError U+9DBC"});
assert.throws(() => {ms932Encoder.encode("\u9DBD")}, {name:"Error",message:"EncodingError U+9DBD"});
assert.throws(() => {ms932Encoder.encode("\u9DBE")}, {name:"Error",message:"EncodingError U+9DBE"});
assert.throws(() => {ms932Encoder.encode("\u9DBF")}, {name:"Error",message:"EncodingError U+9DBF"});
assert.throws(() => {ms932Encoder.encode("\u9DC0")}, {name:"Error",message:"EncodingError U+9DC0"});
r = r && ([...ms932Encoder.encode("鷁鷂")].join(",") === "234,81,234,87"); // U+9DC1
assert.throws(() => {ms932Encoder.encode("\u9DC3")}, {name:"Error",message:"EncodingError U+9DC3"});
r = r && ([...ms932Encoder.encode("鷄")].join(",") === "234,80"); // U+9DC4
assert.throws(() => {ms932Encoder.encode("\u9DC5")}, {name:"Error",message:"EncodingError U+9DC5"});
r = r && ([...ms932Encoder.encode("鷆")].join(",") === "234,85"); // U+9DC6
assert.throws(() => {ms932Encoder.encode("\u9DC7")}, {name:"Error",message:"EncodingError U+9DC7"});
assert.throws(() => {ms932Encoder.encode("\u9DC8")}, {name:"Error",message:"EncodingError U+9DC8"});
assert.throws(() => {ms932Encoder.encode("\u9DC9")}, {name:"Error",message:"EncodingError U+9DC9"});
assert.throws(() => {ms932Encoder.encode("\u9DCA")}, {name:"Error",message:"EncodingError U+9DCA"});
assert.throws(() => {ms932Encoder.encode("\u9DCB")}, {name:"Error",message:"EncodingError U+9DCB"});
assert.throws(() => {ms932Encoder.encode("\u9DCC")}, {name:"Error",message:"EncodingError U+9DCC"});
assert.throws(() => {ms932Encoder.encode("\u9DCD")}, {name:"Error",message:"EncodingError U+9DCD"});
assert.throws(() => {ms932Encoder.encode("\u9DCE")}, {name:"Error",message:"EncodingError U+9DCE"});
r = r && ([...ms932Encoder.encode("鷏")].join(",") === "234,86"); // U+9DCF
assert.throws(() => {ms932Encoder.encode("\u9DD0")}, {name:"Error",message:"EncodingError U+9DD0"});
assert.throws(() => {ms932Encoder.encode("\u9DD1")}, {name:"Error",message:"EncodingError U+9DD1"});
assert.throws(() => {ms932Encoder.encode("\u9DD2")}, {name:"Error",message:"EncodingError U+9DD2"});
r = r && ([...ms932Encoder.encode("鷓")].join(",") === "234,89"); // U+9DD3
assert.throws(() => {ms932Encoder.encode("\u9DD4")}, {name:"Error",message:"EncodingError U+9DD4"});
assert.throws(() => {ms932Encoder.encode("\u9DD5")}, {name:"Error",message:"EncodingError U+9DD5"});
assert.throws(() => {ms932Encoder.encode("\u9DD6")}, {name:"Error",message:"EncodingError U+9DD6"});
assert.throws(() => {ms932Encoder.encode("\u9DD7")}, {name:"Error",message:"EncodingError U+9DD7"});
assert.throws(() => {ms932Encoder.encode("\u9DD8")}, {name:"Error",message:"EncodingError U+9DD8"});
r = r && ([...ms932Encoder.encode("鷙")].join(",") === "234,88"); // U+9DD9
assert.throws(() => {ms932Encoder.encode("\u9DDA")}, {name:"Error",message:"EncodingError U+9DDA"});
assert.throws(() => {ms932Encoder.encode("\u9DDB")}, {name:"Error",message:"EncodingError U+9DDB"});
assert.throws(() => {ms932Encoder.encode("\u9DDC")}, {name:"Error",message:"EncodingError U+9DDC"});
assert.throws(() => {ms932Encoder.encode("\u9DDD")}, {name:"Error",message:"EncodingError U+9DDD"});
assert.throws(() => {ms932Encoder.encode("\u9DDE")}, {name:"Error",message:"EncodingError U+9DDE"});
assert.throws(() => {ms932Encoder.encode("\u9DDF")}, {name:"Error",message:"EncodingError U+9DDF"});
assert.throws(() => {ms932Encoder.encode("\u9DE0")}, {name:"Error",message:"EncodingError U+9DE0"});
assert.throws(() => {ms932Encoder.encode("\u9DE1")}, {name:"Error",message:"EncodingError U+9DE1"});
assert.throws(() => {ms932Encoder.encode("\u9DE2")}, {name:"Error",message:"EncodingError U+9DE2"});
assert.throws(() => {ms932Encoder.encode("\u9DE3")}, {name:"Error",message:"EncodingError U+9DE3"});
assert.throws(() => {ms932Encoder.encode("\u9DE4")}, {name:"Error",message:"EncodingError U+9DE4"});
assert.throws(() => {ms932Encoder.encode("\u9DE5")}, {name:"Error",message:"EncodingError U+9DE5"});
r = r && ([...ms932Encoder.encode("鷦")].join(",") === "234,91"); // U+9DE6
assert.throws(() => {ms932Encoder.encode("\u9DE7")}, {name:"Error",message:"EncodingError U+9DE7"});
assert.throws(() => {ms932Encoder.encode("\u9DE8")}, {name:"Error",message:"EncodingError U+9DE8"});
assert.throws(() => {ms932Encoder.encode("\u9DE9")}, {name:"Error",message:"EncodingError U+9DE9"});
assert.throws(() => {ms932Encoder.encode("\u9DEA")}, {name:"Error",message:"EncodingError U+9DEA"});
assert.throws(() => {ms932Encoder.encode("\u9DEB")}, {name:"Error",message:"EncodingError U+9DEB"});
assert.throws(() => {ms932Encoder.encode("\u9DEC")}, {name:"Error",message:"EncodingError U+9DEC"});
r = r && ([...ms932Encoder.encode("鷭")].join(",") === "234,92"); // U+9DED
assert.throws(() => {ms932Encoder.encode("\u9DEE")}, {name:"Error",message:"EncodingError U+9DEE"});
r = r && ([...ms932Encoder.encode("鷯")].join(",") === "234,93"); // U+9DEF
assert.throws(() => {ms932Encoder.encode("\u9DF0")}, {name:"Error",message:"EncodingError U+9DF0"});
assert.throws(() => {ms932Encoder.encode("\u9DF1")}, {name:"Error",message:"EncodingError U+9DF1"});
r = r && ([...ms932Encoder.encode("鷲")].join(",") === "152,104"); // U+9DF2
assert.throws(() => {ms932Encoder.encode("\u9DF3")}, {name:"Error",message:"EncodingError U+9DF3"});
assert.throws(() => {ms932Encoder.encode("\u9DF4")}, {name:"Error",message:"EncodingError U+9DF4"});
assert.throws(() => {ms932Encoder.encode("\u9DF5")}, {name:"Error",message:"EncodingError U+9DF5"});
assert.throws(() => {ms932Encoder.encode("\u9DF6")}, {name:"Error",message:"EncodingError U+9DF6"});
assert.throws(() => {ms932Encoder.encode("\u9DF7")}, {name:"Error",message:"EncodingError U+9DF7"});
r = r && ([...ms932Encoder.encode("鷸鷹鷺")].join(",") === "234,90,145,233,141,235"); // U+9DF8
assert.throws(() => {ms932Encoder.encode("\u9DFB")}, {name:"Error",message:"EncodingError U+9DFB"});
assert.throws(() => {ms932Encoder.encode("\u9DFC")}, {name:"Error",message:"EncodingError U+9DFC"});
r = r && ([...ms932Encoder.encode("鷽")].join(",") === "234,94"); // U+9DFD
assert.throws(() => {ms932Encoder.encode("\u9DFE")}, {name:"Error",message:"EncodingError U+9DFE"});
assert.throws(() => {ms932Encoder.encode("\u9DFF")}, {name:"Error",message:"EncodingError U+9DFF"});
assert.throws(() => {ms932Encoder.encode("\u9E00")}, {name:"Error",message:"EncodingError U+9E00"});
assert.throws(() => {ms932Encoder.encode("\u9E01")}, {name:"Error",message:"EncodingError U+9E01"});
assert.throws(() => {ms932Encoder.encode("\u9E02")}, {name:"Error",message:"EncodingError U+9E02"});
assert.throws(() => {ms932Encoder.encode("\u9E03")}, {name:"Error",message:"EncodingError U+9E03"});
assert.throws(() => {ms932Encoder.encode("\u9E04")}, {name:"Error",message:"EncodingError U+9E04"});
assert.throws(() => {ms932Encoder.encode("\u9E05")}, {name:"Error",message:"EncodingError U+9E05"});
assert.throws(() => {ms932Encoder.encode("\u9E06")}, {name:"Error",message:"EncodingError U+9E06"});
assert.throws(() => {ms932Encoder.encode("\u9E07")}, {name:"Error",message:"EncodingError U+9E07"});
assert.throws(() => {ms932Encoder.encode("\u9E08")}, {name:"Error",message:"EncodingError U+9E08"});
assert.throws(() => {ms932Encoder.encode("\u9E09")}, {name:"Error",message:"EncodingError U+9E09"});
assert.throws(() => {ms932Encoder.encode("\u9E0A")}, {name:"Error",message:"EncodingError U+9E0A"});
assert.throws(() => {ms932Encoder.encode("\u9E0B")}, {name:"Error",message:"EncodingError U+9E0B"});
assert.throws(() => {ms932Encoder.encode("\u9E0C")}, {name:"Error",message:"EncodingError U+9E0C"});
assert.throws(() => {ms932Encoder.encode("\u9E0D")}, {name:"Error",message:"EncodingError U+9E0D"});
assert.throws(() => {ms932Encoder.encode("\u9E0E")}, {name:"Error",message:"EncodingError U+9E0E"});
assert.throws(() => {ms932Encoder.encode("\u9E0F")}, {name:"Error",message:"EncodingError U+9E0F"});
assert.throws(() => {ms932Encoder.encode("\u9E10")}, {name:"Error",message:"EncodingError U+9E10"});
assert.throws(() => {ms932Encoder.encode("\u9E11")}, {name:"Error",message:"EncodingError U+9E11"});
assert.throws(() => {ms932Encoder.encode("\u9E12")}, {name:"Error",message:"EncodingError U+9E12"});
assert.throws(() => {ms932Encoder.encode("\u9E13")}, {name:"Error",message:"EncodingError U+9E13"});
assert.throws(() => {ms932Encoder.encode("\u9E14")}, {name:"Error",message:"EncodingError U+9E14"});
assert.throws(() => {ms932Encoder.encode("\u9E15")}, {name:"Error",message:"EncodingError U+9E15"});
assert.throws(() => {ms932Encoder.encode("\u9E16")}, {name:"Error",message:"EncodingError U+9E16"});
assert.throws(() => {ms932Encoder.encode("\u9E17")}, {name:"Error",message:"EncodingError U+9E17"});
assert.throws(() => {ms932Encoder.encode("\u9E18")}, {name:"Error",message:"EncodingError U+9E18"});
r = r && ([...ms932Encoder.encode("鸙鸚鸛")].join(",") === "252,74,234,95,234,96"); // U+9E19
assert.throws(() => {ms932Encoder.encode("\u9E1C")}, {name:"Error",message:"EncodingError U+9E1C"});
assert.throws(() => {ms932Encoder.encode("\u9E1D")}, {name:"Error",message:"EncodingError U+9E1D"});
r = r && ([...ms932Encoder.encode("鸞")].join(",") === "234,97"); // U+9E1E
assert.throws(() => {ms932Encoder.encode("\u9E1F")}, {name:"Error",message:"EncodingError U+9E1F"});
assert.throws(() => {ms932Encoder.encode("\u9E20")}, {name:"Error",message:"EncodingError U+9E20"});
assert.throws(() => {ms932Encoder.encode("\u9E21")}, {name:"Error",message:"EncodingError U+9E21"});
assert.throws(() => {ms932Encoder.encode("\u9E22")}, {name:"Error",message:"EncodingError U+9E22"});
assert.throws(() => {ms932Encoder.encode("\u9E23")}, {name:"Error",message:"EncodingError U+9E23"});
assert.throws(() => {ms932Encoder.encode("\u9E24")}, {name:"Error",message:"EncodingError U+9E24"});
assert.throws(() => {ms932Encoder.encode("\u9E25")}, {name:"Error",message:"EncodingError U+9E25"});
assert.throws(() => {ms932Encoder.encode("\u9E26")}, {name:"Error",message:"EncodingError U+9E26"});
assert.throws(() => {ms932Encoder.encode("\u9E27")}, {name:"Error",message:"EncodingError U+9E27"});
assert.throws(() => {ms932Encoder.encode("\u9E28")}, {name:"Error",message:"EncodingError U+9E28"});
assert.throws(() => {ms932Encoder.encode("\u9E29")}, {name:"Error",message:"EncodingError U+9E29"});
assert.throws(() => {ms932Encoder.encode("\u9E2A")}, {name:"Error",message:"EncodingError U+9E2A"});
assert.throws(() => {ms932Encoder.encode("\u9E2B")}, {name:"Error",message:"EncodingError U+9E2B"});
assert.throws(() => {ms932Encoder.encode("\u9E2C")}, {name:"Error",message:"EncodingError U+9E2C"});
assert.throws(() => {ms932Encoder.encode("\u9E2D")}, {name:"Error",message:"EncodingError U+9E2D"});
assert.throws(() => {ms932Encoder.encode("\u9E2E")}, {name:"Error",message:"EncodingError U+9E2E"});
assert.throws(() => {ms932Encoder.encode("\u9E2F")}, {name:"Error",message:"EncodingError U+9E2F"});
assert.throws(() => {ms932Encoder.encode("\u9E30")}, {name:"Error",message:"EncodingError U+9E30"});
assert.throws(() => {ms932Encoder.encode("\u9E31")}, {name:"Error",message:"EncodingError U+9E31"});
assert.throws(() => {ms932Encoder.encode("\u9E32")}, {name:"Error",message:"EncodingError U+9E32"});
assert.throws(() => {ms932Encoder.encode("\u9E33")}, {name:"Error",message:"EncodingError U+9E33"});
assert.throws(() => {ms932Encoder.encode("\u9E34")}, {name:"Error",message:"EncodingError U+9E34"});
assert.throws(() => {ms932Encoder.encode("\u9E35")}, {name:"Error",message:"EncodingError U+9E35"});
assert.throws(() => {ms932Encoder.encode("\u9E36")}, {name:"Error",message:"EncodingError U+9E36"});
assert.throws(() => {ms932Encoder.encode("\u9E37")}, {name:"Error",message:"EncodingError U+9E37"});
assert.throws(() => {ms932Encoder.encode("\u9E38")}, {name:"Error",message:"EncodingError U+9E38"});
assert.throws(() => {ms932Encoder.encode("\u9E39")}, {name:"Error",message:"EncodingError U+9E39"});
assert.throws(() => {ms932Encoder.encode("\u9E3A")}, {name:"Error",message:"EncodingError U+9E3A"});
assert.throws(() => {ms932Encoder.encode("\u9E3B")}, {name:"Error",message:"EncodingError U+9E3B"});
assert.throws(() => {ms932Encoder.encode("\u9E3C")}, {name:"Error",message:"EncodingError U+9E3C"});
assert.throws(() => {ms932Encoder.encode("\u9E3D")}, {name:"Error",message:"EncodingError U+9E3D"});
assert.throws(() => {ms932Encoder.encode("\u9E3E")}, {name:"Error",message:"EncodingError U+9E3E"});
assert.throws(() => {ms932Encoder.encode("\u9E3F")}, {name:"Error",message:"EncodingError U+9E3F"});
assert.throws(() => {ms932Encoder.encode("\u9E40")}, {name:"Error",message:"EncodingError U+9E40"});
assert.throws(() => {ms932Encoder.encode("\u9E41")}, {name:"Error",message:"EncodingError U+9E41"});
assert.throws(() => {ms932Encoder.encode("\u9E42")}, {name:"Error",message:"EncodingError U+9E42"});
assert.throws(() => {ms932Encoder.encode("\u9E43")}, {name:"Error",message:"EncodingError U+9E43"});
assert.throws(() => {ms932Encoder.encode("\u9E44")}, {name:"Error",message:"EncodingError U+9E44"});
assert.throws(() => {ms932Encoder.encode("\u9E45")}, {name:"Error",message:"EncodingError U+9E45"});
assert.throws(() => {ms932Encoder.encode("\u9E46")}, {name:"Error",message:"EncodingError U+9E46"});
assert.throws(() => {ms932Encoder.encode("\u9E47")}, {name:"Error",message:"EncodingError U+9E47"});
assert.throws(() => {ms932Encoder.encode("\u9E48")}, {name:"Error",message:"EncodingError U+9E48"});
assert.throws(() => {ms932Encoder.encode("\u9E49")}, {name:"Error",message:"EncodingError U+9E49"});
assert.throws(() => {ms932Encoder.encode("\u9E4A")}, {name:"Error",message:"EncodingError U+9E4A"});
assert.throws(() => {ms932Encoder.encode("\u9E4B")}, {name:"Error",message:"EncodingError U+9E4B"});
assert.throws(() => {ms932Encoder.encode("\u9E4C")}, {name:"Error",message:"EncodingError U+9E4C"});
assert.throws(() => {ms932Encoder.encode("\u9E4D")}, {name:"Error",message:"EncodingError U+9E4D"});
assert.throws(() => {ms932Encoder.encode("\u9E4E")}, {name:"Error",message:"EncodingError U+9E4E"});
assert.throws(() => {ms932Encoder.encode("\u9E4F")}, {name:"Error",message:"EncodingError U+9E4F"});
assert.throws(() => {ms932Encoder.encode("\u9E50")}, {name:"Error",message:"EncodingError U+9E50"});
assert.throws(() => {ms932Encoder.encode("\u9E51")}, {name:"Error",message:"EncodingError U+9E51"});
assert.throws(() => {ms932Encoder.encode("\u9E52")}, {name:"Error",message:"EncodingError U+9E52"});
assert.throws(() => {ms932Encoder.encode("\u9E53")}, {name:"Error",message:"EncodingError U+9E53"});
assert.throws(() => {ms932Encoder.encode("\u9E54")}, {name:"Error",message:"EncodingError U+9E54"});
assert.throws(() => {ms932Encoder.encode("\u9E55")}, {name:"Error",message:"EncodingError U+9E55"});
assert.throws(() => {ms932Encoder.encode("\u9E56")}, {name:"Error",message:"EncodingError U+9E56"});
assert.throws(() => {ms932Encoder.encode("\u9E57")}, {name:"Error",message:"EncodingError U+9E57"});
assert.throws(() => {ms932Encoder.encode("\u9E58")}, {name:"Error",message:"EncodingError U+9E58"});
assert.throws(() => {ms932Encoder.encode("\u9E59")}, {name:"Error",message:"EncodingError U+9E59"});
assert.throws(() => {ms932Encoder.encode("\u9E5A")}, {name:"Error",message:"EncodingError U+9E5A"});
assert.throws(() => {ms932Encoder.encode("\u9E5B")}, {name:"Error",message:"EncodingError U+9E5B"});
assert.throws(() => {ms932Encoder.encode("\u9E5C")}, {name:"Error",message:"EncodingError U+9E5C"});
assert.throws(() => {ms932Encoder.encode("\u9E5D")}, {name:"Error",message:"EncodingError U+9E5D"});
assert.throws(() => {ms932Encoder.encode("\u9E5E")}, {name:"Error",message:"EncodingError U+9E5E"});
assert.throws(() => {ms932Encoder.encode("\u9E5F")}, {name:"Error",message:"EncodingError U+9E5F"});
assert.throws(() => {ms932Encoder.encode("\u9E60")}, {name:"Error",message:"EncodingError U+9E60"});
assert.throws(() => {ms932Encoder.encode("\u9E61")}, {name:"Error",message:"EncodingError U+9E61"});
assert.throws(() => {ms932Encoder.encode("\u9E62")}, {name:"Error",message:"EncodingError U+9E62"});
assert.throws(() => {ms932Encoder.encode("\u9E63")}, {name:"Error",message:"EncodingError U+9E63"});
assert.throws(() => {ms932Encoder.encode("\u9E64")}, {name:"Error",message:"EncodingError U+9E64"});
assert.throws(() => {ms932Encoder.encode("\u9E65")}, {name:"Error",message:"EncodingError U+9E65"});
assert.throws(() => {ms932Encoder.encode("\u9E66")}, {name:"Error",message:"EncodingError U+9E66"});
assert.throws(() => {ms932Encoder.encode("\u9E67")}, {name:"Error",message:"EncodingError U+9E67"});
assert.throws(() => {ms932Encoder.encode("\u9E68")}, {name:"Error",message:"EncodingError U+9E68"});
assert.throws(() => {ms932Encoder.encode("\u9E69")}, {name:"Error",message:"EncodingError U+9E69"});
assert.throws(() => {ms932Encoder.encode("\u9E6A")}, {name:"Error",message:"EncodingError U+9E6A"});
assert.throws(() => {ms932Encoder.encode("\u9E6B")}, {name:"Error",message:"EncodingError U+9E6B"});
assert.throws(() => {ms932Encoder.encode("\u9E6C")}, {name:"Error",message:"EncodingError U+9E6C"});
assert.throws(() => {ms932Encoder.encode("\u9E6D")}, {name:"Error",message:"EncodingError U+9E6D"});
assert.throws(() => {ms932Encoder.encode("\u9E6E")}, {name:"Error",message:"EncodingError U+9E6E"});
assert.throws(() => {ms932Encoder.encode("\u9E6F")}, {name:"Error",message:"EncodingError U+9E6F"});
assert.throws(() => {ms932Encoder.encode("\u9E70")}, {name:"Error",message:"EncodingError U+9E70"});
assert.throws(() => {ms932Encoder.encode("\u9E71")}, {name:"Error",message:"EncodingError U+9E71"});
assert.throws(() => {ms932Encoder.encode("\u9E72")}, {name:"Error",message:"EncodingError U+9E72"});
assert.throws(() => {ms932Encoder.encode("\u9E73")}, {name:"Error",message:"EncodingError U+9E73"});
assert.throws(() => {ms932Encoder.encode("\u9E74")}, {name:"Error",message:"EncodingError U+9E74"});
r = r && ([...ms932Encoder.encode("鹵")].join(",") === "234,98"); // U+9E75
assert.throws(() => {ms932Encoder.encode("\u9E76")}, {name:"Error",message:"EncodingError U+9E76"});
assert.throws(() => {ms932Encoder.encode("\u9E77")}, {name:"Error",message:"EncodingError U+9E77"});
r = r && ([...ms932Encoder.encode("鹸鹹")].join(",") === "140,178,234,99"); // U+9E78
assert.throws(() => {ms932Encoder.encode("\u9E7A")}, {name:"Error",message:"EncodingError U+9E7A"});
assert.throws(() => {ms932Encoder.encode("\u9E7B")}, {name:"Error",message:"EncodingError U+9E7B"});
assert.throws(() => {ms932Encoder.encode("\u9E7C")}, {name:"Error",message:"EncodingError U+9E7C"});
r = r && ([...ms932Encoder.encode("鹽")].join(",") === "234,100"); // U+9E7D
assert.throws(() => {ms932Encoder.encode("\u9E7E")}, {name:"Error",message:"EncodingError U+9E7E"});
r = r && ([...ms932Encoder.encode("鹿")].join(",") === "142,173"); // U+9E7F
assert.throws(() => {ms932Encoder.encode("\u9E80")}, {name:"Error",message:"EncodingError U+9E80"});
r = r && ([...ms932Encoder.encode("麁")].join(",") === "234,101"); // U+9E81
assert.throws(() => {ms932Encoder.encode("\u9E82")}, {name:"Error",message:"EncodingError U+9E82"});
assert.throws(() => {ms932Encoder.encode("\u9E83")}, {name:"Error",message:"EncodingError U+9E83"});
assert.throws(() => {ms932Encoder.encode("\u9E84")}, {name:"Error",message:"EncodingError U+9E84"});
assert.throws(() => {ms932Encoder.encode("\u9E85")}, {name:"Error",message:"EncodingError U+9E85"});
assert.throws(() => {ms932Encoder.encode("\u9E86")}, {name:"Error",message:"EncodingError U+9E86"});
assert.throws(() => {ms932Encoder.encode("\u9E87")}, {name:"Error",message:"EncodingError U+9E87"});
r = r && ([...ms932Encoder.encode("麈")].join(",") === "234,102"); // U+9E88
assert.throws(() => {ms932Encoder.encode("\u9E89")}, {name:"Error",message:"EncodingError U+9E89"});
assert.throws(() => {ms932Encoder.encode("\u9E8A")}, {name:"Error",message:"EncodingError U+9E8A"});
r = r && ([...ms932Encoder.encode("麋麌")].join(",") === "234,103,234,104"); // U+9E8B
assert.throws(() => {ms932Encoder.encode("\u9E8D")}, {name:"Error",message:"EncodingError U+9E8D"});
assert.throws(() => {ms932Encoder.encode("\u9E8E")}, {name:"Error",message:"EncodingError U+9E8E"});
assert.throws(() => {ms932Encoder.encode("\u9E8F")}, {name:"Error",message:"EncodingError U+9E8F"});
assert.throws(() => {ms932Encoder.encode("\u9E90")}, {name:"Error",message:"EncodingError U+9E90"});
r = r && ([...ms932Encoder.encode("麑麒麓")].join(",") === "234,107,234,105,152,91"); // U+9E91
assert.throws(() => {ms932Encoder.encode("\u9E94")}, {name:"Error",message:"EncodingError U+9E94"});
r = r && ([...ms932Encoder.encode("麕")].join(",") === "234,106"); // U+9E95
assert.throws(() => {ms932Encoder.encode("\u9E96")}, {name:"Error",message:"EncodingError U+9E96"});
r = r && ([...ms932Encoder.encode("麗")].join(",") === "151,237"); // U+9E97
assert.throws(() => {ms932Encoder.encode("\u9E98")}, {name:"Error",message:"EncodingError U+9E98"});
assert.throws(() => {ms932Encoder.encode("\u9E99")}, {name:"Error",message:"EncodingError U+9E99"});
assert.throws(() => {ms932Encoder.encode("\u9E9A")}, {name:"Error",message:"EncodingError U+9E9A"});
assert.throws(() => {ms932Encoder.encode("\u9E9B")}, {name:"Error",message:"EncodingError U+9E9B"});
assert.throws(() => {ms932Encoder.encode("\u9E9C")}, {name:"Error",message:"EncodingError U+9E9C"});
r = r && ([...ms932Encoder.encode("麝")].join(",") === "234,108"); // U+9E9D
assert.throws(() => {ms932Encoder.encode("\u9E9E")}, {name:"Error",message:"EncodingError U+9E9E"});
r = r && ([...ms932Encoder.encode("麟")].join(",") === "151,217"); // U+9E9F
assert.throws(() => {ms932Encoder.encode("\u9EA0")}, {name:"Error",message:"EncodingError U+9EA0"});
assert.throws(() => {ms932Encoder.encode("\u9EA1")}, {name:"Error",message:"EncodingError U+9EA1"});
assert.throws(() => {ms932Encoder.encode("\u9EA2")}, {name:"Error",message:"EncodingError U+9EA2"});
assert.throws(() => {ms932Encoder.encode("\u9EA3")}, {name:"Error",message:"EncodingError U+9EA3"});
assert.throws(() => {ms932Encoder.encode("\u9EA4")}, {name:"Error",message:"EncodingError U+9EA4"});
r = r && ([...ms932Encoder.encode("麥麦")].join(",") === "234,109,148,158"); // U+9EA5
assert.throws(() => {ms932Encoder.encode("\u9EA7")}, {name:"Error",message:"EncodingError U+9EA7"});
assert.throws(() => {ms932Encoder.encode("\u9EA8")}, {name:"Error",message:"EncodingError U+9EA8"});
r = r && ([...ms932Encoder.encode("麩麪")].join(",") === "234,110,234,112"); // U+9EA9
assert.throws(() => {ms932Encoder.encode("\u9EAB")}, {name:"Error",message:"EncodingError U+9EAB"});
assert.throws(() => {ms932Encoder.encode("\u9EAC")}, {name:"Error",message:"EncodingError U+9EAC"});
r = r && ([...ms932Encoder.encode("麭")].join(",") === "234,113"); // U+9EAD
assert.throws(() => {ms932Encoder.encode("\u9EAE")}, {name:"Error",message:"EncodingError U+9EAE"});
assert.throws(() => {ms932Encoder.encode("\u9EAF")}, {name:"Error",message:"EncodingError U+9EAF"});
assert.throws(() => {ms932Encoder.encode("\u9EB0")}, {name:"Error",message:"EncodingError U+9EB0"});
assert.throws(() => {ms932Encoder.encode("\u9EB1")}, {name:"Error",message:"EncodingError U+9EB1"});
assert.throws(() => {ms932Encoder.encode("\u9EB2")}, {name:"Error",message:"EncodingError U+9EB2"});
assert.throws(() => {ms932Encoder.encode("\u9EB3")}, {name:"Error",message:"EncodingError U+9EB3"});
assert.throws(() => {ms932Encoder.encode("\u9EB4")}, {name:"Error",message:"EncodingError U+9EB4"});
assert.throws(() => {ms932Encoder.encode("\u9EB5")}, {name:"Error",message:"EncodingError U+9EB5"});
assert.throws(() => {ms932Encoder.encode("\u9EB6")}, {name:"Error",message:"EncodingError U+9EB6"});
assert.throws(() => {ms932Encoder.encode("\u9EB7")}, {name:"Error",message:"EncodingError U+9EB7"});
r = r && ([...ms932Encoder.encode("麸麹麺麻麼")].join(",") === "234,111,141,141,150,203,150,131,155,245"); // U+9EB8
assert.throws(() => {ms932Encoder.encode("\u9EBD")}, {name:"Error",message:"EncodingError U+9EBD"});
r = r && ([...ms932Encoder.encode("麾麿")].join(",") === "159,128,150,155"); // U+9EBE
assert.throws(() => {ms932Encoder.encode("\u9EC0")}, {name:"Error",message:"EncodingError U+9EC0"});
assert.throws(() => {ms932Encoder.encode("\u9EC1")}, {name:"Error",message:"EncodingError U+9EC1"});
assert.throws(() => {ms932Encoder.encode("\u9EC2")}, {name:"Error",message:"EncodingError U+9EC2"});
assert.throws(() => {ms932Encoder.encode("\u9EC3")}, {name:"Error",message:"EncodingError U+9EC3"});
r = r && ([...ms932Encoder.encode("黄")].join(",") === "137,169"); // U+9EC4
assert.throws(() => {ms932Encoder.encode("\u9EC5")}, {name:"Error",message:"EncodingError U+9EC5"});
assert.throws(() => {ms932Encoder.encode("\u9EC6")}, {name:"Error",message:"EncodingError U+9EC6"});
assert.throws(() => {ms932Encoder.encode("\u9EC7")}, {name:"Error",message:"EncodingError U+9EC7"});
assert.throws(() => {ms932Encoder.encode("\u9EC8")}, {name:"Error",message:"EncodingError U+9EC8"});
assert.throws(() => {ms932Encoder.encode("\u9EC9")}, {name:"Error",message:"EncodingError U+9EC9"});
assert.throws(() => {ms932Encoder.encode("\u9ECA")}, {name:"Error",message:"EncodingError U+9ECA"});
assert.throws(() => {ms932Encoder.encode("\u9ECB")}, {name:"Error",message:"EncodingError U+9ECB"});
r = r && ([...ms932Encoder.encode("黌黍黎黏黐黑黒")].join(",") === "234,115,139,111,234,116,234,117,234,118,252,75,141,149"); // U+9ECC
assert.throws(() => {ms932Encoder.encode("\u9ED3")}, {name:"Error",message:"EncodingError U+9ED3"});
r = r && ([...ms932Encoder.encode("黔")].join(",") === "234,119"); // U+9ED4
assert.throws(() => {ms932Encoder.encode("\u9ED5")}, {name:"Error",message:"EncodingError U+9ED5"});
assert.throws(() => {ms932Encoder.encode("\u9ED6")}, {name:"Error",message:"EncodingError U+9ED6"});
assert.throws(() => {ms932Encoder.encode("\u9ED7")}, {name:"Error",message:"EncodingError U+9ED7"});
r = r && ([...ms932Encoder.encode("默黙")].join(",") === "224,210,150,217"); // U+9ED8
assert.throws(() => {ms932Encoder.encode("\u9EDA")}, {name:"Error",message:"EncodingError U+9EDA"});
r = r && ([...ms932Encoder.encode("黛黜黝點")].join(",") === "145,225,234,120,234,122,234,121"); // U+9EDB
assert.throws(() => {ms932Encoder.encode("\u9EDF")}, {name:"Error",message:"EncodingError U+9EDF"});
r = r && ([...ms932Encoder.encode("黠")].join(",") === "234,123"); // U+9EE0
assert.throws(() => {ms932Encoder.encode("\u9EE1")}, {name:"Error",message:"EncodingError U+9EE1"});
assert.throws(() => {ms932Encoder.encode("\u9EE2")}, {name:"Error",message:"EncodingError U+9EE2"});
assert.throws(() => {ms932Encoder.encode("\u9EE3")}, {name:"Error",message:"EncodingError U+9EE3"});
assert.throws(() => {ms932Encoder.encode("\u9EE4")}, {name:"Error",message:"EncodingError U+9EE4"});
r = r && ([...ms932Encoder.encode("黥")].join(",") === "234,124"); // U+9EE5
assert.throws(() => {ms932Encoder.encode("\u9EE6")}, {name:"Error",message:"EncodingError U+9EE6"});
assert.throws(() => {ms932Encoder.encode("\u9EE7")}, {name:"Error",message:"EncodingError U+9EE7"});
r = r && ([...ms932Encoder.encode("黨")].join(",") === "234,125"); // U+9EE8
assert.throws(() => {ms932Encoder.encode("\u9EE9")}, {name:"Error",message:"EncodingError U+9EE9"});
assert.throws(() => {ms932Encoder.encode("\u9EEA")}, {name:"Error",message:"EncodingError U+9EEA"});
assert.throws(() => {ms932Encoder.encode("\u9EEB")}, {name:"Error",message:"EncodingError U+9EEB"});
assert.throws(() => {ms932Encoder.encode("\u9EEC")}, {name:"Error",message:"EncodingError U+9EEC"});
assert.throws(() => {ms932Encoder.encode("\u9EED")}, {name:"Error",message:"EncodingError U+9EED"});
assert.throws(() => {ms932Encoder.encode("\u9EEE")}, {name:"Error",message:"EncodingError U+9EEE"});
r = r && ([...ms932Encoder.encode("黯")].join(",") === "234,126"); // U+9EEF
assert.throws(() => {ms932Encoder.encode("\u9EF0")}, {name:"Error",message:"EncodingError U+9EF0"});
assert.throws(() => {ms932Encoder.encode("\u9EF1")}, {name:"Error",message:"EncodingError U+9EF1"});
assert.throws(() => {ms932Encoder.encode("\u9EF2")}, {name:"Error",message:"EncodingError U+9EF2"});
assert.throws(() => {ms932Encoder.encode("\u9EF3")}, {name:"Error",message:"EncodingError U+9EF3"});
r = r && ([...ms932Encoder.encode("黴")].join(",") === "234,128"); // U+9EF4
assert.throws(() => {ms932Encoder.encode("\u9EF5")}, {name:"Error",message:"EncodingError U+9EF5"});
r = r && ([...ms932Encoder.encode("黶黷")].join(",") === "234,129,234,130"); // U+9EF6
assert.throws(() => {ms932Encoder.encode("\u9EF8")}, {name:"Error",message:"EncodingError U+9EF8"});
r = r && ([...ms932Encoder.encode("黹")].join(",") === "234,131"); // U+9EF9
assert.throws(() => {ms932Encoder.encode("\u9EFA")}, {name:"Error",message:"EncodingError U+9EFA"});
r = r && ([...ms932Encoder.encode("黻黼黽")].join(",") === "234,132,234,133,234,134"); // U+9EFB
assert.throws(() => {ms932Encoder.encode("\u9EFE")}, {name:"Error",message:"EncodingError U+9EFE"});
assert.throws(() => {ms932Encoder.encode("\u9EFF")}, {name:"Error",message:"EncodingError U+9EFF"});
assert.throws(() => {ms932Encoder.encode("\u9F00")}, {name:"Error",message:"EncodingError U+9F00"});
assert.throws(() => {ms932Encoder.encode("\u9F01")}, {name:"Error",message:"EncodingError U+9F01"});
assert.throws(() => {ms932Encoder.encode("\u9F02")}, {name:"Error",message:"EncodingError U+9F02"});
assert.throws(() => {ms932Encoder.encode("\u9F03")}, {name:"Error",message:"EncodingError U+9F03"});
assert.throws(() => {ms932Encoder.encode("\u9F04")}, {name:"Error",message:"EncodingError U+9F04"});
assert.throws(() => {ms932Encoder.encode("\u9F05")}, {name:"Error",message:"EncodingError U+9F05"});
assert.throws(() => {ms932Encoder.encode("\u9F06")}, {name:"Error",message:"EncodingError U+9F06"});
r = r && ([...ms932Encoder.encode("鼇鼈")].join(",") === "234,135,234,136"); // U+9F07
assert.throws(() => {ms932Encoder.encode("\u9F09")}, {name:"Error",message:"EncodingError U+9F09"});
assert.throws(() => {ms932Encoder.encode("\u9F0A")}, {name:"Error",message:"EncodingError U+9F0A"});
assert.throws(() => {ms932Encoder.encode("\u9F0B")}, {name:"Error",message:"EncodingError U+9F0B"});
assert.throws(() => {ms932Encoder.encode("\u9F0C")}, {name:"Error",message:"EncodingError U+9F0C"});
assert.throws(() => {ms932Encoder.encode("\u9F0D")}, {name:"Error",message:"EncodingError U+9F0D"});
r = r && ([...ms932Encoder.encode("鼎")].join(",") === "147,67"); // U+9F0E
assert.throws(() => {ms932Encoder.encode("\u9F0F")}, {name:"Error",message:"EncodingError U+9F0F"});
assert.throws(() => {ms932Encoder.encode("\u9F10")}, {name:"Error",message:"EncodingError U+9F10"});
assert.throws(() => {ms932Encoder.encode("\u9F11")}, {name:"Error",message:"EncodingError U+9F11"});
assert.throws(() => {ms932Encoder.encode("\u9F12")}, {name:"Error",message:"EncodingError U+9F12"});
r = r && ([...ms932Encoder.encode("鼓")].join(",") === "140,219"); // U+9F13
assert.throws(() => {ms932Encoder.encode("\u9F14")}, {name:"Error",message:"EncodingError U+9F14"});
r = r && ([...ms932Encoder.encode("鼕")].join(",") === "234,138"); // U+9F15
assert.throws(() => {ms932Encoder.encode("\u9F16")}, {name:"Error",message:"EncodingError U+9F16"});
assert.throws(() => {ms932Encoder.encode("\u9F17")}, {name:"Error",message:"EncodingError U+9F17"});
assert.throws(() => {ms932Encoder.encode("\u9F18")}, {name:"Error",message:"EncodingError U+9F18"});
assert.throws(() => {ms932Encoder.encode("\u9F19")}, {name:"Error",message:"EncodingError U+9F19"});
assert.throws(() => {ms932Encoder.encode("\u9F1A")}, {name:"Error",message:"EncodingError U+9F1A"});
assert.throws(() => {ms932Encoder.encode("\u9F1B")}, {name:"Error",message:"EncodingError U+9F1B"});
assert.throws(() => {ms932Encoder.encode("\u9F1C")}, {name:"Error",message:"EncodingError U+9F1C"});
assert.throws(() => {ms932Encoder.encode("\u9F1D")}, {name:"Error",message:"EncodingError U+9F1D"});
assert.throws(() => {ms932Encoder.encode("\u9F1E")}, {name:"Error",message:"EncodingError U+9F1E"});
assert.throws(() => {ms932Encoder.encode("\u9F1F")}, {name:"Error",message:"EncodingError U+9F1F"});
r = r && ([...ms932Encoder.encode("鼠鼡")].join(",") === "145,108,234,139"); // U+9F20
assert.throws(() => {ms932Encoder.encode("\u9F22")}, {name:"Error",message:"EncodingError U+9F22"});
assert.throws(() => {ms932Encoder.encode("\u9F23")}, {name:"Error",message:"EncodingError U+9F23"});
assert.throws(() => {ms932Encoder.encode("\u9F24")}, {name:"Error",message:"EncodingError U+9F24"});
assert.throws(() => {ms932Encoder.encode("\u9F25")}, {name:"Error",message:"EncodingError U+9F25"});
assert.throws(() => {ms932Encoder.encode("\u9F26")}, {name:"Error",message:"EncodingError U+9F26"});
assert.throws(() => {ms932Encoder.encode("\u9F27")}, {name:"Error",message:"EncodingError U+9F27"});
assert.throws(() => {ms932Encoder.encode("\u9F28")}, {name:"Error",message:"EncodingError U+9F28"});
assert.throws(() => {ms932Encoder.encode("\u9F29")}, {name:"Error",message:"EncodingError U+9F29"});
assert.throws(() => {ms932Encoder.encode("\u9F2A")}, {name:"Error",message:"EncodingError U+9F2A"});
assert.throws(() => {ms932Encoder.encode("\u9F2B")}, {name:"Error",message:"EncodingError U+9F2B"});
r = r && ([...ms932Encoder.encode("鼬")].join(",") === "234,140"); // U+9F2C
assert.throws(() => {ms932Encoder.encode("\u9F2D")}, {name:"Error",message:"EncodingError U+9F2D"});
assert.throws(() => {ms932Encoder.encode("\u9F2E")}, {name:"Error",message:"EncodingError U+9F2E"});
assert.throws(() => {ms932Encoder.encode("\u9F2F")}, {name:"Error",message:"EncodingError U+9F2F"});
assert.throws(() => {ms932Encoder.encode("\u9F30")}, {name:"Error",message:"EncodingError U+9F30"});
assert.throws(() => {ms932Encoder.encode("\u9F31")}, {name:"Error",message:"EncodingError U+9F31"});
assert.throws(() => {ms932Encoder.encode("\u9F32")}, {name:"Error",message:"EncodingError U+9F32"});
assert.throws(() => {ms932Encoder.encode("\u9F33")}, {name:"Error",message:"EncodingError U+9F33"});
assert.throws(() => {ms932Encoder.encode("\u9F34")}, {name:"Error",message:"EncodingError U+9F34"});
assert.throws(() => {ms932Encoder.encode("\u9F35")}, {name:"Error",message:"EncodingError U+9F35"});
assert.throws(() => {ms932Encoder.encode("\u9F36")}, {name:"Error",message:"EncodingError U+9F36"});
assert.throws(() => {ms932Encoder.encode("\u9F37")}, {name:"Error",message:"EncodingError U+9F37"});
assert.throws(() => {ms932Encoder.encode("\u9F38")}, {name:"Error",message:"EncodingError U+9F38"});
assert.throws(() => {ms932Encoder.encode("\u9F39")}, {name:"Error",message:"EncodingError U+9F39"});
assert.throws(() => {ms932Encoder.encode("\u9F3A")}, {name:"Error",message:"EncodingError U+9F3A"});
r = r && ([...ms932Encoder.encode("鼻")].join(",") === "149,64"); // U+9F3B
assert.throws(() => {ms932Encoder.encode("\u9F3C")}, {name:"Error",message:"EncodingError U+9F3C"});
assert.throws(() => {ms932Encoder.encode("\u9F3D")}, {name:"Error",message:"EncodingError U+9F3D"});
r = r && ([...ms932Encoder.encode("鼾")].join(",") === "234,141"); // U+9F3E
assert.throws(() => {ms932Encoder.encode("\u9F3F")}, {name:"Error",message:"EncodingError U+9F3F"});
assert.throws(() => {ms932Encoder.encode("\u9F40")}, {name:"Error",message:"EncodingError U+9F40"});
assert.throws(() => {ms932Encoder.encode("\u9F41")}, {name:"Error",message:"EncodingError U+9F41"});
assert.throws(() => {ms932Encoder.encode("\u9F42")}, {name:"Error",message:"EncodingError U+9F42"});
assert.throws(() => {ms932Encoder.encode("\u9F43")}, {name:"Error",message:"EncodingError U+9F43"});
assert.throws(() => {ms932Encoder.encode("\u9F44")}, {name:"Error",message:"EncodingError U+9F44"});
assert.throws(() => {ms932Encoder.encode("\u9F45")}, {name:"Error",message:"EncodingError U+9F45"});
assert.throws(() => {ms932Encoder.encode("\u9F46")}, {name:"Error",message:"EncodingError U+9F46"});
assert.throws(() => {ms932Encoder.encode("\u9F47")}, {name:"Error",message:"EncodingError U+9F47"});
assert.throws(() => {ms932Encoder.encode("\u9F48")}, {name:"Error",message:"EncodingError U+9F48"});
assert.throws(() => {ms932Encoder.encode("\u9F49")}, {name:"Error",message:"EncodingError U+9F49"});
r = r && ([...ms932Encoder.encode("齊齋")].join(",") === "234,142,226,86"); // U+9F4A
assert.throws(() => {ms932Encoder.encode("\u9F4C")}, {name:"Error",message:"EncodingError U+9F4C"});
assert.throws(() => {ms932Encoder.encode("\u9F4D")}, {name:"Error",message:"EncodingError U+9F4D"});
r = r && ([...ms932Encoder.encode("齎齏")].join(",") === "230,216,232,235"); // U+9F4E
assert.throws(() => {ms932Encoder.encode("\u9F50")}, {name:"Error",message:"EncodingError U+9F50"});
assert.throws(() => {ms932Encoder.encode("\u9F51")}, {name:"Error",message:"EncodingError U+9F51"});
r = r && ([...ms932Encoder.encode("齒")].join(",") === "234,143"); // U+9F52
assert.throws(() => {ms932Encoder.encode("\u9F53")}, {name:"Error",message:"EncodingError U+9F53"});
r = r && ([...ms932Encoder.encode("齔")].join(",") === "234,144"); // U+9F54
assert.throws(() => {ms932Encoder.encode("\u9F55")}, {name:"Error",message:"EncodingError U+9F55"});
assert.throws(() => {ms932Encoder.encode("\u9F56")}, {name:"Error",message:"EncodingError U+9F56"});
assert.throws(() => {ms932Encoder.encode("\u9F57")}, {name:"Error",message:"EncodingError U+9F57"});
assert.throws(() => {ms932Encoder.encode("\u9F58")}, {name:"Error",message:"EncodingError U+9F58"});
assert.throws(() => {ms932Encoder.encode("\u9F59")}, {name:"Error",message:"EncodingError U+9F59"});
assert.throws(() => {ms932Encoder.encode("\u9F5A")}, {name:"Error",message:"EncodingError U+9F5A"});
assert.throws(() => {ms932Encoder.encode("\u9F5B")}, {name:"Error",message:"EncodingError U+9F5B"});
assert.throws(() => {ms932Encoder.encode("\u9F5C")}, {name:"Error",message:"EncodingError U+9F5C"});
assert.throws(() => {ms932Encoder.encode("\u9F5D")}, {name:"Error",message:"EncodingError U+9F5D"});
assert.throws(() => {ms932Encoder.encode("\u9F5E")}, {name:"Error",message:"EncodingError U+9F5E"});
r = r && ([...ms932Encoder.encode("齟齠齡齢齣")].join(",") === "234,146,234,147,234,148,151,238,234,145"); // U+9F5F
assert.throws(() => {ms932Encoder.encode("\u9F64")}, {name:"Error",message:"EncodingError U+9F64"});
assert.throws(() => {ms932Encoder.encode("\u9F65")}, {name:"Error",message:"EncodingError U+9F65"});
r = r && ([...ms932Encoder.encode("齦齧")].join(",") === "234,149,234,150"); // U+9F66
assert.throws(() => {ms932Encoder.encode("\u9F68")}, {name:"Error",message:"EncodingError U+9F68"});
assert.throws(() => {ms932Encoder.encode("\u9F69")}, {name:"Error",message:"EncodingError U+9F69"});
r = r && ([...ms932Encoder.encode("齪")].join(",") === "234,152"); // U+9F6A
assert.throws(() => {ms932Encoder.encode("\u9F6B")}, {name:"Error",message:"EncodingError U+9F6B"});
r = r && ([...ms932Encoder.encode("齬")].join(",") === "234,151"); // U+9F6C
assert.throws(() => {ms932Encoder.encode("\u9F6D")}, {name:"Error",message:"EncodingError U+9F6D"});
assert.throws(() => {ms932Encoder.encode("\u9F6E")}, {name:"Error",message:"EncodingError U+9F6E"});
assert.throws(() => {ms932Encoder.encode("\u9F6F")}, {name:"Error",message:"EncodingError U+9F6F"});
assert.throws(() => {ms932Encoder.encode("\u9F70")}, {name:"Error",message:"EncodingError U+9F70"});
assert.throws(() => {ms932Encoder.encode("\u9F71")}, {name:"Error",message:"EncodingError U+9F71"});
r = r && ([...ms932Encoder.encode("齲")].join(",") === "234,154"); // U+9F72
assert.throws(() => {ms932Encoder.encode("\u9F73")}, {name:"Error",message:"EncodingError U+9F73"});
assert.throws(() => {ms932Encoder.encode("\u9F74")}, {name:"Error",message:"EncodingError U+9F74"});
assert.throws(() => {ms932Encoder.encode("\u9F75")}, {name:"Error",message:"EncodingError U+9F75"});
r = r && ([...ms932Encoder.encode("齶齷")].join(",") === "234,155,234,153"); // U+9F76
assert.throws(() => {ms932Encoder.encode("\u9F78")}, {name:"Error",message:"EncodingError U+9F78"});
assert.throws(() => {ms932Encoder.encode("\u9F79")}, {name:"Error",message:"EncodingError U+9F79"});
assert.throws(() => {ms932Encoder.encode("\u9F7A")}, {name:"Error",message:"EncodingError U+9F7A"});
assert.throws(() => {ms932Encoder.encode("\u9F7B")}, {name:"Error",message:"EncodingError U+9F7B"});
assert.throws(() => {ms932Encoder.encode("\u9F7C")}, {name:"Error",message:"EncodingError U+9F7C"});
assert.throws(() => {ms932Encoder.encode("\u9F7D")}, {name:"Error",message:"EncodingError U+9F7D"});
assert.throws(() => {ms932Encoder.encode("\u9F7E")}, {name:"Error",message:"EncodingError U+9F7E"});
assert.throws(() => {ms932Encoder.encode("\u9F7F")}, {name:"Error",message:"EncodingError U+9F7F"});
assert.throws(() => {ms932Encoder.encode("\u9F80")}, {name:"Error",message:"EncodingError U+9F80"});
assert.throws(() => {ms932Encoder.encode("\u9F81")}, {name:"Error",message:"EncodingError U+9F81"});
assert.throws(() => {ms932Encoder.encode("\u9F82")}, {name:"Error",message:"EncodingError U+9F82"});
assert.throws(() => {ms932Encoder.encode("\u9F83")}, {name:"Error",message:"EncodingError U+9F83"});
assert.throws(() => {ms932Encoder.encode("\u9F84")}, {name:"Error",message:"EncodingError U+9F84"});
assert.throws(() => {ms932Encoder.encode("\u9F85")}, {name:"Error",message:"EncodingError U+9F85"});
assert.throws(() => {ms932Encoder.encode("\u9F86")}, {name:"Error",message:"EncodingError U+9F86"});
assert.throws(() => {ms932Encoder.encode("\u9F87")}, {name:"Error",message:"EncodingError U+9F87"});
assert.throws(() => {ms932Encoder.encode("\u9F88")}, {name:"Error",message:"EncodingError U+9F88"});
assert.throws(() => {ms932Encoder.encode("\u9F89")}, {name:"Error",message:"EncodingError U+9F89"});
assert.throws(() => {ms932Encoder.encode("\u9F8A")}, {name:"Error",message:"EncodingError U+9F8A"});
assert.throws(() => {ms932Encoder.encode("\u9F8B")}, {name:"Error",message:"EncodingError U+9F8B"});
assert.throws(() => {ms932Encoder.encode("\u9F8C")}, {name:"Error",message:"EncodingError U+9F8C"});
r = r && ([...ms932Encoder.encode("龍")].join(",") === "151,180"); // U+9F8D
assert.throws(() => {ms932Encoder.encode("\u9F8E")}, {name:"Error",message:"EncodingError U+9F8E"});
assert.throws(() => {ms932Encoder.encode("\u9F8F")}, {name:"Error",message:"EncodingError U+9F8F"});
assert.throws(() => {ms932Encoder.encode("\u9F90")}, {name:"Error",message:"EncodingError U+9F90"});
assert.throws(() => {ms932Encoder.encode("\u9F91")}, {name:"Error",message:"EncodingError U+9F91"});
assert.throws(() => {ms932Encoder.encode("\u9F92")}, {name:"Error",message:"EncodingError U+9F92"});
assert.throws(() => {ms932Encoder.encode("\u9F93")}, {name:"Error",message:"EncodingError U+9F93"});
assert.throws(() => {ms932Encoder.encode("\u9F94")}, {name:"Error",message:"EncodingError U+9F94"});
r = r && ([...ms932Encoder.encode("龕")].join(",") === "234,156"); // U+9F95
assert.throws(() => {ms932Encoder.encode("\u9F96")}, {name:"Error",message:"EncodingError U+9F96"});
assert.throws(() => {ms932Encoder.encode("\u9F97")}, {name:"Error",message:"EncodingError U+9F97"});
assert.throws(() => {ms932Encoder.encode("\u9F98")}, {name:"Error",message:"EncodingError U+9F98"});
assert.throws(() => {ms932Encoder.encode("\u9F99")}, {name:"Error",message:"EncodingError U+9F99"});
assert.throws(() => {ms932Encoder.encode("\u9F9A")}, {name:"Error",message:"EncodingError U+9F9A"});
assert.throws(() => {ms932Encoder.encode("\u9F9B")}, {name:"Error",message:"EncodingError U+9F9B"});
r = r && ([...ms932Encoder.encode("龜龝")].join(",") === "234,157,226,115"); // U+9F9C
assert.throws(() => {ms932Encoder.encode("\u9F9E")}, {name:"Error",message:"EncodingError U+9F9E"});
assert.throws(() => {ms932Encoder.encode("\u9F9F")}, {name:"Error",message:"EncodingError U+9F9F"});
r = r && ([...ms932Encoder.encode("龠")].join(",") === "234,158"); // U+9FA0
assert.throws(() => {ms932Encoder.encode("\u9FA1")}, {name:"Error",message:"EncodingError U+9FA1"});
assert.throws(() => {ms932Encoder.encode("\u9FA2")}, {name:"Error",message:"EncodingError U+9FA2"});
assert.throws(() => {ms932Encoder.encode("\u9FA3")}, {name:"Error",message:"EncodingError U+9FA3"});
assert.throws(() => {ms932Encoder.encode("\u9FA4")}, {name:"Error",message:"EncodingError U+9FA4"});
assert.throws(() => {ms932Encoder.encode("\u9FA5")}, {name:"Error",message:"EncodingError U+9FA5"});
assert.throws(() => {ms932Encoder.encode("\u9FA6")}, {name:"Error",message:"EncodingError U+9FA6"});
assert.throws(() => {ms932Encoder.encode("\u9FA7")}, {name:"Error",message:"EncodingError U+9FA7"});
assert.throws(() => {ms932Encoder.encode("\u9FA8")}, {name:"Error",message:"EncodingError U+9FA8"});
assert.throws(() => {ms932Encoder.encode("\u9FA9")}, {name:"Error",message:"EncodingError U+9FA9"});
assert.throws(() => {ms932Encoder.encode("\u9FAA")}, {name:"Error",message:"EncodingError U+9FAA"});
assert.throws(() => {ms932Encoder.encode("\u9FAB")}, {name:"Error",message:"EncodingError U+9FAB"});
assert.throws(() => {ms932Encoder.encode("\u9FAC")}, {name:"Error",message:"EncodingError U+9FAC"});
assert.throws(() => {ms932Encoder.encode("\u9FAD")}, {name:"Error",message:"EncodingError U+9FAD"});
assert.throws(() => {ms932Encoder.encode("\u9FAE")}, {name:"Error",message:"EncodingError U+9FAE"});
assert.throws(() => {ms932Encoder.encode("\u9FAF")}, {name:"Error",message:"EncodingError U+9FAF"});
assert.throws(() => {ms932Encoder.encode("\u9FB0")}, {name:"Error",message:"EncodingError U+9FB0"});
assert.throws(() => {ms932Encoder.encode("\u9FB1")}, {name:"Error",message:"EncodingError U+9FB1"});
assert.throws(() => {ms932Encoder.encode("\u9FB2")}, {name:"Error",message:"EncodingError U+9FB2"});
assert.throws(() => {ms932Encoder.encode("\u9FB3")}, {name:"Error",message:"EncodingError U+9FB3"});
assert.throws(() => {ms932Encoder.encode("\u9FB4")}, {name:"Error",message:"EncodingError U+9FB4"});
assert.throws(() => {ms932Encoder.encode("\u9FB5")}, {name:"Error",message:"EncodingError U+9FB5"});
assert.throws(() => {ms932Encoder.encode("\u9FB6")}, {name:"Error",message:"EncodingError U+9FB6"});
assert.throws(() => {ms932Encoder.encode("\u9FB7")}, {name:"Error",message:"EncodingError U+9FB7"});
assert.throws(() => {ms932Encoder.encode("\u9FB8")}, {name:"Error",message:"EncodingError U+9FB8"});
assert.throws(() => {ms932Encoder.encode("\u9FB9")}, {name:"Error",message:"EncodingError U+9FB9"});
assert.throws(() => {ms932Encoder.encode("\u9FBA")}, {name:"Error",message:"EncodingError U+9FBA"});
assert.throws(() => {ms932Encoder.encode("\u9FBB")}, {name:"Error",message:"EncodingError U+9FBB"});
assert.throws(() => {ms932Encoder.encode("\u9FBC")}, {name:"Error",message:"EncodingError U+9FBC"});
assert.throws(() => {ms932Encoder.encode("\u9FBD")}, {name:"Error",message:"EncodingError U+9FBD"});
assert.throws(() => {ms932Encoder.encode("\u9FBE")}, {name:"Error",message:"EncodingError U+9FBE"});
assert.throws(() => {ms932Encoder.encode("\u9FBF")}, {name:"Error",message:"EncodingError U+9FBF"});
assert.throws(() => {ms932Encoder.encode("\u9FC0")}, {name:"Error",message:"EncodingError U+9FC0"});
assert.throws(() => {ms932Encoder.encode("\u9FC1")}, {name:"Error",message:"EncodingError U+9FC1"});
assert.throws(() => {ms932Encoder.encode("\u9FC2")}, {name:"Error",message:"EncodingError U+9FC2"});
assert.throws(() => {ms932Encoder.encode("\u9FC3")}, {name:"Error",message:"EncodingError U+9FC3"});
assert.throws(() => {ms932Encoder.encode("\u9FC4")}, {name:"Error",message:"EncodingError U+9FC4"});
assert.throws(() => {ms932Encoder.encode("\u9FC5")}, {name:"Error",message:"EncodingError U+9FC5"});
assert.throws(() => {ms932Encoder.encode("\u9FC6")}, {name:"Error",message:"EncodingError U+9FC6"});
assert.throws(() => {ms932Encoder.encode("\u9FC7")}, {name:"Error",message:"EncodingError U+9FC7"});
assert.throws(() => {ms932Encoder.encode("\u9FC8")}, {name:"Error",message:"EncodingError U+9FC8"});
assert.throws(() => {ms932Encoder.encode("\u9FC9")}, {name:"Error",message:"EncodingError U+9FC9"});
assert.throws(() => {ms932Encoder.encode("\u9FCA")}, {name:"Error",message:"EncodingError U+9FCA"});
assert.throws(() => {ms932Encoder.encode("\u9FCB")}, {name:"Error",message:"EncodingError U+9FCB"});
assert.throws(() => {ms932Encoder.encode("\u9FCC")}, {name:"Error",message:"EncodingError U+9FCC"});
assert.throws(() => {ms932Encoder.encode("\u9FCD")}, {name:"Error",message:"EncodingError U+9FCD"});
assert.throws(() => {ms932Encoder.encode("\u9FCE")}, {name:"Error",message:"EncodingError U+9FCE"});
assert.throws(() => {ms932Encoder.encode("\u9FCF")}, {name:"Error",message:"EncodingError U+9FCF"});
assert.throws(() => {ms932Encoder.encode("\u9FD0")}, {name:"Error",message:"EncodingError U+9FD0"});
assert.throws(() => {ms932Encoder.encode("\u9FD1")}, {name:"Error",message:"EncodingError U+9FD1"});
assert.throws(() => {ms932Encoder.encode("\u9FD2")}, {name:"Error",message:"EncodingError U+9FD2"});
assert.throws(() => {ms932Encoder.encode("\u9FD3")}, {name:"Error",message:"EncodingError U+9FD3"});
assert.throws(() => {ms932Encoder.encode("\u9FD4")}, {name:"Error",message:"EncodingError U+9FD4"});
assert.throws(() => {ms932Encoder.encode("\u9FD5")}, {name:"Error",message:"EncodingError U+9FD5"});
assert.throws(() => {ms932Encoder.encode("\u9FD6")}, {name:"Error",message:"EncodingError U+9FD6"});
assert.throws(() => {ms932Encoder.encode("\u9FD7")}, {name:"Error",message:"EncodingError U+9FD7"});
assert.throws(() => {ms932Encoder.encode("\u9FD8")}, {name:"Error",message:"EncodingError U+9FD8"});
assert.throws(() => {ms932Encoder.encode("\u9FD9")}, {name:"Error",message:"EncodingError U+9FD9"});
assert.throws(() => {ms932Encoder.encode("\u9FDA")}, {name:"Error",message:"EncodingError U+9FDA"});
assert.throws(() => {ms932Encoder.encode("\u9FDB")}, {name:"Error",message:"EncodingError U+9FDB"});
assert.throws(() => {ms932Encoder.encode("\u9FDC")}, {name:"Error",message:"EncodingError U+9FDC"});
assert.throws(() => {ms932Encoder.encode("\u9FDD")}, {name:"Error",message:"EncodingError U+9FDD"});
assert.throws(() => {ms932Encoder.encode("\u9FDE")}, {name:"Error",message:"EncodingError U+9FDE"});
assert.throws(() => {ms932Encoder.encode("\u9FDF")}, {name:"Error",message:"EncodingError U+9FDF"});
assert.throws(() => {ms932Encoder.encode("\u9FE0")}, {name:"Error",message:"EncodingError U+9FE0"});
assert.throws(() => {ms932Encoder.encode("\u9FE1")}, {name:"Error",message:"EncodingError U+9FE1"});
assert.throws(() => {ms932Encoder.encode("\u9FE2")}, {name:"Error",message:"EncodingError U+9FE2"});
assert.throws(() => {ms932Encoder.encode("\u9FE3")}, {name:"Error",message:"EncodingError U+9FE3"});
assert.throws(() => {ms932Encoder.encode("\u9FE4")}, {name:"Error",message:"EncodingError U+9FE4"});
assert.throws(() => {ms932Encoder.encode("\u9FE5")}, {name:"Error",message:"EncodingError U+9FE5"});
assert.throws(() => {ms932Encoder.encode("\u9FE6")}, {name:"Error",message:"EncodingError U+9FE6"});
assert.throws(() => {ms932Encoder.encode("\u9FE7")}, {name:"Error",message:"EncodingError U+9FE7"});
assert.throws(() => {ms932Encoder.encode("\u9FE8")}, {name:"Error",message:"EncodingError U+9FE8"});
assert.throws(() => {ms932Encoder.encode("\u9FE9")}, {name:"Error",message:"EncodingError U+9FE9"});
assert.throws(() => {ms932Encoder.encode("\u9FEA")}, {name:"Error",message:"EncodingError U+9FEA"});
assert.throws(() => {ms932Encoder.encode("\u9FEB")}, {name:"Error",message:"EncodingError U+9FEB"});
assert.throws(() => {ms932Encoder.encode("\u9FEC")}, {name:"Error",message:"EncodingError U+9FEC"});
assert.throws(() => {ms932Encoder.encode("\u9FED")}, {name:"Error",message:"EncodingError U+9FED"});
assert.throws(() => {ms932Encoder.encode("\u9FEE")}, {name:"Error",message:"EncodingError U+9FEE"});
assert.throws(() => {ms932Encoder.encode("\u9FEF")}, {name:"Error",message:"EncodingError U+9FEF"});
assert.throws(() => {ms932Encoder.encode("\u9FF0")}, {name:"Error",message:"EncodingError U+9FF0"});
assert.throws(() => {ms932Encoder.encode("\u9FF1")}, {name:"Error",message:"EncodingError U+9FF1"});
assert.throws(() => {ms932Encoder.encode("\u9FF2")}, {name:"Error",message:"EncodingError U+9FF2"});
assert.throws(() => {ms932Encoder.encode("\u9FF3")}, {name:"Error",message:"EncodingError U+9FF3"});
assert.throws(() => {ms932Encoder.encode("\u9FF4")}, {name:"Error",message:"EncodingError U+9FF4"});
assert.throws(() => {ms932Encoder.encode("\u9FF5")}, {name:"Error",message:"EncodingError U+9FF5"});
assert.throws(() => {ms932Encoder.encode("\u9FF6")}, {name:"Error",message:"EncodingError U+9FF6"});
assert.throws(() => {ms932Encoder.encode("\u9FF7")}, {name:"Error",message:"EncodingError U+9FF7"});
assert.throws(() => {ms932Encoder.encode("\u9FF8")}, {name:"Error",message:"EncodingError U+9FF8"});
assert.throws(() => {ms932Encoder.encode("\u9FF9")}, {name:"Error",message:"EncodingError U+9FF9"});
assert.throws(() => {ms932Encoder.encode("\u9FFA")}, {name:"Error",message:"EncodingError U+9FFA"});
assert.throws(() => {ms932Encoder.encode("\u9FFB")}, {name:"Error",message:"EncodingError U+9FFB"});
assert.throws(() => {ms932Encoder.encode("\u9FFC")}, {name:"Error",message:"EncodingError U+9FFC"});
assert.throws(() => {ms932Encoder.encode("\u9FFD")}, {name:"Error",message:"EncodingError U+9FFD"});
assert.throws(() => {ms932Encoder.encode("\u9FFE")}, {name:"Error",message:"EncodingError U+9FFE"});
assert.throws(() => {ms932Encoder.encode("\u9FFF")}, {name:"Error",message:"EncodingError U+9FFF"});

assert.strictEqual(r, true);

  });

});
