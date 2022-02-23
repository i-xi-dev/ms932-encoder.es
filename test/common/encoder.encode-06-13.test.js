import assert from "node:assert";
import { Ms932Encoder } from "../../node/index.mjs";

describe("Ms932Encoder.prototype.encode 6", () => {

  it("encode(string) - U+5C00-U+5FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u5C00")}, {name:"Error",message:"EncodingError U+5C00"});
r = r && ([...ms932Encoder.encode("封専")].join(",") === "149,149,144,234"); // U+5C01
assert.throws(() => {ms932Encoder.encode("\u5C03")}, {name:"Error",message:"EncodingError U+5C03"});
r = r && ([...ms932Encoder.encode("射尅将將專尉尊尋")].join(",") === "142,203,155,145,143,171,155,146,155,147,136,209,145,184,144,113"); // U+5C04
assert.throws(() => {ms932Encoder.encode("\u5C0C")}, {name:"Error",message:"EncodingError U+5C0C"});
r = r && ([...ms932Encoder.encode("對導小")].join(",") === "155,148,147,177,143,172"); // U+5C0D
assert.throws(() => {ms932Encoder.encode("\u5C10")}, {name:"Error",message:"EncodingError U+5C10"});
r = r && ([...ms932Encoder.encode("少")].join(",") === "143,173"); // U+5C11
assert.throws(() => {ms932Encoder.encode("\u5C12")}, {name:"Error",message:"EncodingError U+5C12"});
r = r && ([...ms932Encoder.encode("尓")].join(",") === "155,149"); // U+5C13
assert.throws(() => {ms932Encoder.encode("\u5C14")}, {name:"Error",message:"EncodingError U+5C14"});
assert.throws(() => {ms932Encoder.encode("\u5C15")}, {name:"Error",message:"EncodingError U+5C15"});
r = r && ([...ms932Encoder.encode("尖")].join(",") === "144,235"); // U+5C16
assert.throws(() => {ms932Encoder.encode("\u5C17")}, {name:"Error",message:"EncodingError U+5C17"});
assert.throws(() => {ms932Encoder.encode("\u5C18")}, {name:"Error",message:"EncodingError U+5C18"});
assert.throws(() => {ms932Encoder.encode("\u5C19")}, {name:"Error",message:"EncodingError U+5C19"});
r = r && ([...ms932Encoder.encode("尚")].join(",") === "143,174"); // U+5C1A
assert.throws(() => {ms932Encoder.encode("\u5C1B")}, {name:"Error",message:"EncodingError U+5C1B"});
assert.throws(() => {ms932Encoder.encode("\u5C1C")}, {name:"Error",message:"EncodingError U+5C1C"});
assert.throws(() => {ms932Encoder.encode("\u5C1D")}, {name:"Error",message:"EncodingError U+5C1D"});
r = r && ([...ms932Encoder.encode("尞")].join(",") === "250,171"); // U+5C1E
assert.throws(() => {ms932Encoder.encode("\u5C1F")}, {name:"Error",message:"EncodingError U+5C1F"});
r = r && ([...ms932Encoder.encode("尠")].join(",") === "155,150"); // U+5C20
assert.throws(() => {ms932Encoder.encode("\u5C21")}, {name:"Error",message:"EncodingError U+5C21"});
r = r && ([...ms932Encoder.encode("尢")].join(",") === "155,151"); // U+5C22
assert.throws(() => {ms932Encoder.encode("\u5C23")}, {name:"Error",message:"EncodingError U+5C23"});
r = r && ([...ms932Encoder.encode("尤")].join(",") === "150,222"); // U+5C24
assert.throws(() => {ms932Encoder.encode("\u5C25")}, {name:"Error",message:"EncodingError U+5C25"});
assert.throws(() => {ms932Encoder.encode("\u5C26")}, {name:"Error",message:"EncodingError U+5C26"});
assert.throws(() => {ms932Encoder.encode("\u5C27")}, {name:"Error",message:"EncodingError U+5C27"});
r = r && ([...ms932Encoder.encode("尨")].join(",") === "155,152"); // U+5C28
assert.throws(() => {ms932Encoder.encode("\u5C29")}, {name:"Error",message:"EncodingError U+5C29"});
assert.throws(() => {ms932Encoder.encode("\u5C2A")}, {name:"Error",message:"EncodingError U+5C2A"});
assert.throws(() => {ms932Encoder.encode("\u5C2B")}, {name:"Error",message:"EncodingError U+5C2B"});
assert.throws(() => {ms932Encoder.encode("\u5C2C")}, {name:"Error",message:"EncodingError U+5C2C"});
r = r && ([...ms932Encoder.encode("尭")].join(",") === "139,196"); // U+5C2D
assert.throws(() => {ms932Encoder.encode("\u5C2E")}, {name:"Error",message:"EncodingError U+5C2E"});
assert.throws(() => {ms932Encoder.encode("\u5C2F")}, {name:"Error",message:"EncodingError U+5C2F"});
assert.throws(() => {ms932Encoder.encode("\u5C30")}, {name:"Error",message:"EncodingError U+5C30"});
r = r && ([...ms932Encoder.encode("就")].join(",") === "143,65"); // U+5C31
assert.throws(() => {ms932Encoder.encode("\u5C32")}, {name:"Error",message:"EncodingError U+5C32"});
assert.throws(() => {ms932Encoder.encode("\u5C33")}, {name:"Error",message:"EncodingError U+5C33"});
assert.throws(() => {ms932Encoder.encode("\u5C34")}, {name:"Error",message:"EncodingError U+5C34"});
assert.throws(() => {ms932Encoder.encode("\u5C35")}, {name:"Error",message:"EncodingError U+5C35"});
assert.throws(() => {ms932Encoder.encode("\u5C36")}, {name:"Error",message:"EncodingError U+5C36"});
assert.throws(() => {ms932Encoder.encode("\u5C37")}, {name:"Error",message:"EncodingError U+5C37"});
r = r && ([...ms932Encoder.encode("尸尹尺尻尼尽尾尿局屁")].join(",") === "155,153,155,154,142,218,144,75,147,242,144,115,148,246,148,65,139,199,155,155"); // U+5C38
assert.throws(() => {ms932Encoder.encode("\u5C42")}, {name:"Error",message:"EncodingError U+5C42"});
assert.throws(() => {ms932Encoder.encode("\u5C43")}, {name:"Error",message:"EncodingError U+5C43"});
assert.throws(() => {ms932Encoder.encode("\u5C44")}, {name:"Error",message:"EncodingError U+5C44"});
r = r && ([...ms932Encoder.encode("居屆")].join(",") === "139,143,155,156"); // U+5C45
assert.throws(() => {ms932Encoder.encode("\u5C47")}, {name:"Error",message:"EncodingError U+5C47"});
r = r && ([...ms932Encoder.encode("屈")].join(",") === "139,252"); // U+5C48
assert.throws(() => {ms932Encoder.encode("\u5C49")}, {name:"Error",message:"EncodingError U+5C49"});
r = r && ([...ms932Encoder.encode("届屋")].join(",") === "147,205,137,174"); // U+5C4A
assert.throws(() => {ms932Encoder.encode("\u5C4C")}, {name:"Error",message:"EncodingError U+5C4C"});
r = r && ([...ms932Encoder.encode("屍屎屏屐屑")].join(",") === "142,114,155,157,155,160,155,159,139,251"); // U+5C4D
assert.throws(() => {ms932Encoder.encode("\u5C52")}, {name:"Error",message:"EncodingError U+5C52"});
r = r && ([...ms932Encoder.encode("屓")].join(",") === "155,158"); // U+5C53
assert.throws(() => {ms932Encoder.encode("\u5C54")}, {name:"Error",message:"EncodingError U+5C54"});
r = r && ([...ms932Encoder.encode("展")].join(",") === "147,87"); // U+5C55
assert.throws(() => {ms932Encoder.encode("\u5C56")}, {name:"Error",message:"EncodingError U+5C56"});
assert.throws(() => {ms932Encoder.encode("\u5C57")}, {name:"Error",message:"EncodingError U+5C57"});
assert.throws(() => {ms932Encoder.encode("\u5C58")}, {name:"Error",message:"EncodingError U+5C58"});
assert.throws(() => {ms932Encoder.encode("\u5C59")}, {name:"Error",message:"EncodingError U+5C59"});
assert.throws(() => {ms932Encoder.encode("\u5C5A")}, {name:"Error",message:"EncodingError U+5C5A"});
assert.throws(() => {ms932Encoder.encode("\u5C5B")}, {name:"Error",message:"EncodingError U+5C5B"});
assert.throws(() => {ms932Encoder.encode("\u5C5C")}, {name:"Error",message:"EncodingError U+5C5C"});
assert.throws(() => {ms932Encoder.encode("\u5C5D")}, {name:"Error",message:"EncodingError U+5C5D"});
r = r && ([...ms932Encoder.encode("属")].join(",") === "145,174"); // U+5C5E
assert.throws(() => {ms932Encoder.encode("\u5C5F")}, {name:"Error",message:"EncodingError U+5C5F"});
r = r && ([...ms932Encoder.encode("屠屡")].join(",") === "147,106,142,198"); // U+5C60
assert.throws(() => {ms932Encoder.encode("\u5C62")}, {name:"Error",message:"EncodingError U+5C62"});
assert.throws(() => {ms932Encoder.encode("\u5C63")}, {name:"Error",message:"EncodingError U+5C63"});
r = r && ([...ms932Encoder.encode("層履")].join(",") === "145,119,151,154"); // U+5C64
assert.throws(() => {ms932Encoder.encode("\u5C66")}, {name:"Error",message:"EncodingError U+5C66"});
assert.throws(() => {ms932Encoder.encode("\u5C67")}, {name:"Error",message:"EncodingError U+5C67"});
assert.throws(() => {ms932Encoder.encode("\u5C68")}, {name:"Error",message:"EncodingError U+5C68"});
assert.throws(() => {ms932Encoder.encode("\u5C69")}, {name:"Error",message:"EncodingError U+5C69"});
assert.throws(() => {ms932Encoder.encode("\u5C6A")}, {name:"Error",message:"EncodingError U+5C6A"});
assert.throws(() => {ms932Encoder.encode("\u5C6B")}, {name:"Error",message:"EncodingError U+5C6B"});
r = r && ([...ms932Encoder.encode("屬")].join(",") === "155,162"); // U+5C6C
assert.throws(() => {ms932Encoder.encode("\u5C6D")}, {name:"Error",message:"EncodingError U+5C6D"});
r = r && ([...ms932Encoder.encode("屮屯")].join(",") === "155,163,147,212"); // U+5C6E
assert.throws(() => {ms932Encoder.encode("\u5C70")}, {name:"Error",message:"EncodingError U+5C70"});
r = r && ([...ms932Encoder.encode("山")].join(",") === "142,82"); // U+5C71
assert.throws(() => {ms932Encoder.encode("\u5C72")}, {name:"Error",message:"EncodingError U+5C72"});
assert.throws(() => {ms932Encoder.encode("\u5C73")}, {name:"Error",message:"EncodingError U+5C73"});
assert.throws(() => {ms932Encoder.encode("\u5C74")}, {name:"Error",message:"EncodingError U+5C74"});
assert.throws(() => {ms932Encoder.encode("\u5C75")}, {name:"Error",message:"EncodingError U+5C75"});
r = r && ([...ms932Encoder.encode("屶")].join(",") === "155,165"); // U+5C76
assert.throws(() => {ms932Encoder.encode("\u5C77")}, {name:"Error",message:"EncodingError U+5C77"});
assert.throws(() => {ms932Encoder.encode("\u5C78")}, {name:"Error",message:"EncodingError U+5C78"});
r = r && ([...ms932Encoder.encode("屹")].join(",") === "155,166"); // U+5C79
assert.throws(() => {ms932Encoder.encode("\u5C7A")}, {name:"Error",message:"EncodingError U+5C7A"});
assert.throws(() => {ms932Encoder.encode("\u5C7B")}, {name:"Error",message:"EncodingError U+5C7B"});
assert.throws(() => {ms932Encoder.encode("\u5C7C")}, {name:"Error",message:"EncodingError U+5C7C"});
assert.throws(() => {ms932Encoder.encode("\u5C7D")}, {name:"Error",message:"EncodingError U+5C7D"});
assert.throws(() => {ms932Encoder.encode("\u5C7E")}, {name:"Error",message:"EncodingError U+5C7E"});
assert.throws(() => {ms932Encoder.encode("\u5C7F")}, {name:"Error",message:"EncodingError U+5C7F"});
assert.throws(() => {ms932Encoder.encode("\u5C80")}, {name:"Error",message:"EncodingError U+5C80"});
assert.throws(() => {ms932Encoder.encode("\u5C81")}, {name:"Error",message:"EncodingError U+5C81"});
assert.throws(() => {ms932Encoder.encode("\u5C82")}, {name:"Error",message:"EncodingError U+5C82"});
assert.throws(() => {ms932Encoder.encode("\u5C83")}, {name:"Error",message:"EncodingError U+5C83"});
assert.throws(() => {ms932Encoder.encode("\u5C84")}, {name:"Error",message:"EncodingError U+5C84"});
assert.throws(() => {ms932Encoder.encode("\u5C85")}, {name:"Error",message:"EncodingError U+5C85"});
assert.throws(() => {ms932Encoder.encode("\u5C86")}, {name:"Error",message:"EncodingError U+5C86"});
assert.throws(() => {ms932Encoder.encode("\u5C87")}, {name:"Error",message:"EncodingError U+5C87"});
assert.throws(() => {ms932Encoder.encode("\u5C88")}, {name:"Error",message:"EncodingError U+5C88"});
assert.throws(() => {ms932Encoder.encode("\u5C89")}, {name:"Error",message:"EncodingError U+5C89"});
assert.throws(() => {ms932Encoder.encode("\u5C8A")}, {name:"Error",message:"EncodingError U+5C8A"});
assert.throws(() => {ms932Encoder.encode("\u5C8B")}, {name:"Error",message:"EncodingError U+5C8B"});
r = r && ([...ms932Encoder.encode("岌")].join(",") === "155,167"); // U+5C8C
assert.throws(() => {ms932Encoder.encode("\u5C8D")}, {name:"Error",message:"EncodingError U+5C8D"});
assert.throws(() => {ms932Encoder.encode("\u5C8E")}, {name:"Error",message:"EncodingError U+5C8E"});
assert.throws(() => {ms932Encoder.encode("\u5C8F")}, {name:"Error",message:"EncodingError U+5C8F"});
r = r && ([...ms932Encoder.encode("岐岑")].join(",") === "138,242,155,168"); // U+5C90
assert.throws(() => {ms932Encoder.encode("\u5C92")}, {name:"Error",message:"EncodingError U+5C92"});
assert.throws(() => {ms932Encoder.encode("\u5C93")}, {name:"Error",message:"EncodingError U+5C93"});
r = r && ([...ms932Encoder.encode("岔")].join(",") === "155,169"); // U+5C94
assert.throws(() => {ms932Encoder.encode("\u5C95")}, {name:"Error",message:"EncodingError U+5C95"});
assert.throws(() => {ms932Encoder.encode("\u5C96")}, {name:"Error",message:"EncodingError U+5C96"});
assert.throws(() => {ms932Encoder.encode("\u5C97")}, {name:"Error",message:"EncodingError U+5C97"});
assert.throws(() => {ms932Encoder.encode("\u5C98")}, {name:"Error",message:"EncodingError U+5C98"});
assert.throws(() => {ms932Encoder.encode("\u5C99")}, {name:"Error",message:"EncodingError U+5C99"});
assert.throws(() => {ms932Encoder.encode("\u5C9A")}, {name:"Error",message:"EncodingError U+5C9A"});
assert.throws(() => {ms932Encoder.encode("\u5C9B")}, {name:"Error",message:"EncodingError U+5C9B"});
assert.throws(() => {ms932Encoder.encode("\u5C9C")}, {name:"Error",message:"EncodingError U+5C9C"});
assert.throws(() => {ms932Encoder.encode("\u5C9D")}, {name:"Error",message:"EncodingError U+5C9D"});
assert.throws(() => {ms932Encoder.encode("\u5C9E")}, {name:"Error",message:"EncodingError U+5C9E"});
assert.throws(() => {ms932Encoder.encode("\u5C9F")}, {name:"Error",message:"EncodingError U+5C9F"});
assert.throws(() => {ms932Encoder.encode("\u5CA0")}, {name:"Error",message:"EncodingError U+5CA0"});
r = r && ([...ms932Encoder.encode("岡")].join(",") === "137,170"); // U+5CA1
assert.throws(() => {ms932Encoder.encode("\u5CA2")}, {name:"Error",message:"EncodingError U+5CA2"});
assert.throws(() => {ms932Encoder.encode("\u5CA3")}, {name:"Error",message:"EncodingError U+5CA3"});
assert.throws(() => {ms932Encoder.encode("\u5CA4")}, {name:"Error",message:"EncodingError U+5CA4"});
assert.throws(() => {ms932Encoder.encode("\u5CA5")}, {name:"Error",message:"EncodingError U+5CA5"});
r = r && ([...ms932Encoder.encode("岦")].join(",") === "250,172"); // U+5CA6
assert.throws(() => {ms932Encoder.encode("\u5CA7")}, {name:"Error",message:"EncodingError U+5CA7"});
r = r && ([...ms932Encoder.encode("岨岩")].join(",") === "145,90,138,226"); // U+5CA8
assert.throws(() => {ms932Encoder.encode("\u5CAA")}, {name:"Error",message:"EncodingError U+5CAA"});
r = r && ([...ms932Encoder.encode("岫岬")].join(",") === "155,171,150,166"); // U+5CAB
assert.throws(() => {ms932Encoder.encode("\u5CAD")}, {name:"Error",message:"EncodingError U+5CAD"});
assert.throws(() => {ms932Encoder.encode("\u5CAE")}, {name:"Error",message:"EncodingError U+5CAE"});
assert.throws(() => {ms932Encoder.encode("\u5CAF")}, {name:"Error",message:"EncodingError U+5CAF"});
assert.throws(() => {ms932Encoder.encode("\u5CB0")}, {name:"Error",message:"EncodingError U+5CB0"});
r = r && ([...ms932Encoder.encode("岱")].join(",") === "145,208"); // U+5CB1
assert.throws(() => {ms932Encoder.encode("\u5CB2")}, {name:"Error",message:"EncodingError U+5CB2"});
r = r && ([...ms932Encoder.encode("岳")].join(",") === "138,120"); // U+5CB3
assert.throws(() => {ms932Encoder.encode("\u5CB4")}, {name:"Error",message:"EncodingError U+5CB4"});
assert.throws(() => {ms932Encoder.encode("\u5CB5")}, {name:"Error",message:"EncodingError U+5CB5"});
r = r && ([...ms932Encoder.encode("岶岷岸")].join(",") === "155,173,155,175,138,221"); // U+5CB6
assert.throws(() => {ms932Encoder.encode("\u5CB9")}, {name:"Error",message:"EncodingError U+5CB9"});
r = r && ([...ms932Encoder.encode("岺岻岼")].join(",") === "250,173,155,172,155,174"); // U+5CBA
assert.throws(() => {ms932Encoder.encode("\u5CBD")}, {name:"Error",message:"EncodingError U+5CBD"});
r = r && ([...ms932Encoder.encode("岾")].join(",") === "155,177"); // U+5CBE
assert.throws(() => {ms932Encoder.encode("\u5CBF")}, {name:"Error",message:"EncodingError U+5CBF"});
assert.throws(() => {ms932Encoder.encode("\u5CC0")}, {name:"Error",message:"EncodingError U+5CC0"});
assert.throws(() => {ms932Encoder.encode("\u5CC1")}, {name:"Error",message:"EncodingError U+5CC1"});
assert.throws(() => {ms932Encoder.encode("\u5CC2")}, {name:"Error",message:"EncodingError U+5CC2"});
assert.throws(() => {ms932Encoder.encode("\u5CC3")}, {name:"Error",message:"EncodingError U+5CC3"});
assert.throws(() => {ms932Encoder.encode("\u5CC4")}, {name:"Error",message:"EncodingError U+5CC4"});
r = r && ([...ms932Encoder.encode("峅")].join(",") === "155,176"); // U+5CC5
assert.throws(() => {ms932Encoder.encode("\u5CC6")}, {name:"Error",message:"EncodingError U+5CC6"});
r = r && ([...ms932Encoder.encode("峇")].join(",") === "155,178"); // U+5CC7
assert.throws(() => {ms932Encoder.encode("\u5CC8")}, {name:"Error",message:"EncodingError U+5CC8"});
assert.throws(() => {ms932Encoder.encode("\u5CC9")}, {name:"Error",message:"EncodingError U+5CC9"});
assert.throws(() => {ms932Encoder.encode("\u5CCA")}, {name:"Error",message:"EncodingError U+5CCA"});
assert.throws(() => {ms932Encoder.encode("\u5CCB")}, {name:"Error",message:"EncodingError U+5CCB"});
assert.throws(() => {ms932Encoder.encode("\u5CCC")}, {name:"Error",message:"EncodingError U+5CCC"});
assert.throws(() => {ms932Encoder.encode("\u5CCD")}, {name:"Error",message:"EncodingError U+5CCD"});
assert.throws(() => {ms932Encoder.encode("\u5CCE")}, {name:"Error",message:"EncodingError U+5CCE"});
assert.throws(() => {ms932Encoder.encode("\u5CCF")}, {name:"Error",message:"EncodingError U+5CCF"});
assert.throws(() => {ms932Encoder.encode("\u5CD0")}, {name:"Error",message:"EncodingError U+5CD0"});
assert.throws(() => {ms932Encoder.encode("\u5CD1")}, {name:"Error",message:"EncodingError U+5CD1"});
assert.throws(() => {ms932Encoder.encode("\u5CD2")}, {name:"Error",message:"EncodingError U+5CD2"});
assert.throws(() => {ms932Encoder.encode("\u5CD3")}, {name:"Error",message:"EncodingError U+5CD3"});
assert.throws(() => {ms932Encoder.encode("\u5CD4")}, {name:"Error",message:"EncodingError U+5CD4"});
assert.throws(() => {ms932Encoder.encode("\u5CD5")}, {name:"Error",message:"EncodingError U+5CD5"});
assert.throws(() => {ms932Encoder.encode("\u5CD6")}, {name:"Error",message:"EncodingError U+5CD6"});
assert.throws(() => {ms932Encoder.encode("\u5CD7")}, {name:"Error",message:"EncodingError U+5CD7"});
assert.throws(() => {ms932Encoder.encode("\u5CD8")}, {name:"Error",message:"EncodingError U+5CD8"});
r = r && ([...ms932Encoder.encode("峙")].join(",") === "155,179"); // U+5CD9
assert.throws(() => {ms932Encoder.encode("\u5CDA")}, {name:"Error",message:"EncodingError U+5CDA"});
assert.throws(() => {ms932Encoder.encode("\u5CDB")}, {name:"Error",message:"EncodingError U+5CDB"});
assert.throws(() => {ms932Encoder.encode("\u5CDC")}, {name:"Error",message:"EncodingError U+5CDC"});
assert.throws(() => {ms932Encoder.encode("\u5CDD")}, {name:"Error",message:"EncodingError U+5CDD"});
assert.throws(() => {ms932Encoder.encode("\u5CDE")}, {name:"Error",message:"EncodingError U+5CDE"});
assert.throws(() => {ms932Encoder.encode("\u5CDF")}, {name:"Error",message:"EncodingError U+5CDF"});
r = r && ([...ms932Encoder.encode("峠峡")].join(",") === "147,187,139,172"); // U+5CE0
assert.throws(() => {ms932Encoder.encode("\u5CE2")}, {name:"Error",message:"EncodingError U+5CE2"});
assert.throws(() => {ms932Encoder.encode("\u5CE3")}, {name:"Error",message:"EncodingError U+5CE3"});
assert.throws(() => {ms932Encoder.encode("\u5CE4")}, {name:"Error",message:"EncodingError U+5CE4"});
assert.throws(() => {ms932Encoder.encode("\u5CE5")}, {name:"Error",message:"EncodingError U+5CE5"});
assert.throws(() => {ms932Encoder.encode("\u5CE6")}, {name:"Error",message:"EncodingError U+5CE6"});
assert.throws(() => {ms932Encoder.encode("\u5CE7")}, {name:"Error",message:"EncodingError U+5CE7"});
r = r && ([...ms932Encoder.encode("峨峩峪")].join(",") === "137,227,155,180,155,185"); // U+5CE8
assert.throws(() => {ms932Encoder.encode("\u5CEB")}, {name:"Error",message:"EncodingError U+5CEB"});
assert.throws(() => {ms932Encoder.encode("\u5CEC")}, {name:"Error",message:"EncodingError U+5CEC"});
r = r && ([...ms932Encoder.encode("峭")].join(",") === "155,183"); // U+5CED
assert.throws(() => {ms932Encoder.encode("\u5CEE")}, {name:"Error",message:"EncodingError U+5CEE"});
r = r && ([...ms932Encoder.encode("峯峰")].join(",") === "149,245,149,244"); // U+5CEF
assert.throws(() => {ms932Encoder.encode("\u5CF1")}, {name:"Error",message:"EncodingError U+5CF1"});
assert.throws(() => {ms932Encoder.encode("\u5CF2")}, {name:"Error",message:"EncodingError U+5CF2"});
assert.throws(() => {ms932Encoder.encode("\u5CF3")}, {name:"Error",message:"EncodingError U+5CF3"});
assert.throws(() => {ms932Encoder.encode("\u5CF4")}, {name:"Error",message:"EncodingError U+5CF4"});
r = r && ([...ms932Encoder.encode("峵島")].join(",") === "250,174,147,135"); // U+5CF5
assert.throws(() => {ms932Encoder.encode("\u5CF7")}, {name:"Error",message:"EncodingError U+5CF7"});
assert.throws(() => {ms932Encoder.encode("\u5CF8")}, {name:"Error",message:"EncodingError U+5CF8"});
assert.throws(() => {ms932Encoder.encode("\u5CF9")}, {name:"Error",message:"EncodingError U+5CF9"});
r = r && ([...ms932Encoder.encode("峺峻")].join(",") === "155,182,143,115"); // U+5CFA
assert.throws(() => {ms932Encoder.encode("\u5CFC")}, {name:"Error",message:"EncodingError U+5CFC"});
r = r && ([...ms932Encoder.encode("峽")].join(",") === "155,181"); // U+5CFD
assert.throws(() => {ms932Encoder.encode("\u5CFE")}, {name:"Error",message:"EncodingError U+5CFE"});
assert.throws(() => {ms932Encoder.encode("\u5CFF")}, {name:"Error",message:"EncodingError U+5CFF"});
assert.throws(() => {ms932Encoder.encode("\u5D00")}, {name:"Error",message:"EncodingError U+5D00"});
assert.throws(() => {ms932Encoder.encode("\u5D01")}, {name:"Error",message:"EncodingError U+5D01"});
assert.throws(() => {ms932Encoder.encode("\u5D02")}, {name:"Error",message:"EncodingError U+5D02"});
assert.throws(() => {ms932Encoder.encode("\u5D03")}, {name:"Error",message:"EncodingError U+5D03"});
assert.throws(() => {ms932Encoder.encode("\u5D04")}, {name:"Error",message:"EncodingError U+5D04"});
assert.throws(() => {ms932Encoder.encode("\u5D05")}, {name:"Error",message:"EncodingError U+5D05"});
assert.throws(() => {ms932Encoder.encode("\u5D06")}, {name:"Error",message:"EncodingError U+5D06"});
r = r && ([...ms932Encoder.encode("崇")].join(",") === "144,146"); // U+5D07
assert.throws(() => {ms932Encoder.encode("\u5D08")}, {name:"Error",message:"EncodingError U+5D08"});
assert.throws(() => {ms932Encoder.encode("\u5D09")}, {name:"Error",message:"EncodingError U+5D09"});
assert.throws(() => {ms932Encoder.encode("\u5D0A")}, {name:"Error",message:"EncodingError U+5D0A"});
r = r && ([...ms932Encoder.encode("崋")].join(",") === "155,186"); // U+5D0B
assert.throws(() => {ms932Encoder.encode("\u5D0C")}, {name:"Error",message:"EncodingError U+5D0C"});
assert.throws(() => {ms932Encoder.encode("\u5D0D")}, {name:"Error",message:"EncodingError U+5D0D"});
r = r && ([...ms932Encoder.encode("崎")].join(",") === "141,232"); // U+5D0E
assert.throws(() => {ms932Encoder.encode("\u5D0F")}, {name:"Error",message:"EncodingError U+5D0F"});
assert.throws(() => {ms932Encoder.encode("\u5D10")}, {name:"Error",message:"EncodingError U+5D10"});
r = r && ([...ms932Encoder.encode("崑")].join(",") === "155,192"); // U+5D11
assert.throws(() => {ms932Encoder.encode("\u5D12")}, {name:"Error",message:"EncodingError U+5D12"});
assert.throws(() => {ms932Encoder.encode("\u5D13")}, {name:"Error",message:"EncodingError U+5D13"});
r = r && ([...ms932Encoder.encode("崔崕崖崗崘崙崚崛")].join(",") === "155,193,155,187,138,82,155,188,155,197,155,196,155,195,155,191"); // U+5D14
assert.throws(() => {ms932Encoder.encode("\u5D1C")}, {name:"Error",message:"EncodingError U+5D1C"});
assert.throws(() => {ms932Encoder.encode("\u5D1D")}, {name:"Error",message:"EncodingError U+5D1D"});
assert.throws(() => {ms932Encoder.encode("\u5D1E")}, {name:"Error",message:"EncodingError U+5D1E"});
r = r && ([...ms932Encoder.encode("崟")].join(",") === "155,190"); // U+5D1F
assert.throws(() => {ms932Encoder.encode("\u5D20")}, {name:"Error",message:"EncodingError U+5D20"});
assert.throws(() => {ms932Encoder.encode("\u5D21")}, {name:"Error",message:"EncodingError U+5D21"});
r = r && ([...ms932Encoder.encode("崢")].join(",") === "155,194"); // U+5D22
assert.throws(() => {ms932Encoder.encode("\u5D23")}, {name:"Error",message:"EncodingError U+5D23"});
assert.throws(() => {ms932Encoder.encode("\u5D24")}, {name:"Error",message:"EncodingError U+5D24"});
assert.throws(() => {ms932Encoder.encode("\u5D25")}, {name:"Error",message:"EncodingError U+5D25"});
assert.throws(() => {ms932Encoder.encode("\u5D26")}, {name:"Error",message:"EncodingError U+5D26"});
r = r && ([...ms932Encoder.encode("崧")].join(",") === "250,175"); // U+5D27
assert.throws(() => {ms932Encoder.encode("\u5D28")}, {name:"Error",message:"EncodingError U+5D28"});
r = r && ([...ms932Encoder.encode("崩")].join(",") === "149,246"); // U+5D29
assert.throws(() => {ms932Encoder.encode("\u5D2A")}, {name:"Error",message:"EncodingError U+5D2A"});
assert.throws(() => {ms932Encoder.encode("\u5D2B")}, {name:"Error",message:"EncodingError U+5D2B"});
assert.throws(() => {ms932Encoder.encode("\u5D2C")}, {name:"Error",message:"EncodingError U+5D2C"});
assert.throws(() => {ms932Encoder.encode("\u5D2D")}, {name:"Error",message:"EncodingError U+5D2D"});
assert.throws(() => {ms932Encoder.encode("\u5D2E")}, {name:"Error",message:"EncodingError U+5D2E"});
assert.throws(() => {ms932Encoder.encode("\u5D2F")}, {name:"Error",message:"EncodingError U+5D2F"});
assert.throws(() => {ms932Encoder.encode("\u5D30")}, {name:"Error",message:"EncodingError U+5D30"});
assert.throws(() => {ms932Encoder.encode("\u5D31")}, {name:"Error",message:"EncodingError U+5D31"});
assert.throws(() => {ms932Encoder.encode("\u5D32")}, {name:"Error",message:"EncodingError U+5D32"});
assert.throws(() => {ms932Encoder.encode("\u5D33")}, {name:"Error",message:"EncodingError U+5D33"});
assert.throws(() => {ms932Encoder.encode("\u5D34")}, {name:"Error",message:"EncodingError U+5D34"});
assert.throws(() => {ms932Encoder.encode("\u5D35")}, {name:"Error",message:"EncodingError U+5D35"});
assert.throws(() => {ms932Encoder.encode("\u5D36")}, {name:"Error",message:"EncodingError U+5D36"});
assert.throws(() => {ms932Encoder.encode("\u5D37")}, {name:"Error",message:"EncodingError U+5D37"});
assert.throws(() => {ms932Encoder.encode("\u5D38")}, {name:"Error",message:"EncodingError U+5D38"});
assert.throws(() => {ms932Encoder.encode("\u5D39")}, {name:"Error",message:"EncodingError U+5D39"});
assert.throws(() => {ms932Encoder.encode("\u5D3A")}, {name:"Error",message:"EncodingError U+5D3A"});
assert.throws(() => {ms932Encoder.encode("\u5D3B")}, {name:"Error",message:"EncodingError U+5D3B"});
assert.throws(() => {ms932Encoder.encode("\u5D3C")}, {name:"Error",message:"EncodingError U+5D3C"});
assert.throws(() => {ms932Encoder.encode("\u5D3D")}, {name:"Error",message:"EncodingError U+5D3D"});
assert.throws(() => {ms932Encoder.encode("\u5D3E")}, {name:"Error",message:"EncodingError U+5D3E"});
assert.throws(() => {ms932Encoder.encode("\u5D3F")}, {name:"Error",message:"EncodingError U+5D3F"});
assert.throws(() => {ms932Encoder.encode("\u5D40")}, {name:"Error",message:"EncodingError U+5D40"});
assert.throws(() => {ms932Encoder.encode("\u5D41")}, {name:"Error",message:"EncodingError U+5D41"});
r = r && ([...ms932Encoder.encode("嵂")].join(",") === "250,178"); // U+5D42
assert.throws(() => {ms932Encoder.encode("\u5D43")}, {name:"Error",message:"EncodingError U+5D43"});
assert.throws(() => {ms932Encoder.encode("\u5D44")}, {name:"Error",message:"EncodingError U+5D44"});
assert.throws(() => {ms932Encoder.encode("\u5D45")}, {name:"Error",message:"EncodingError U+5D45"});
assert.throws(() => {ms932Encoder.encode("\u5D46")}, {name:"Error",message:"EncodingError U+5D46"});
assert.throws(() => {ms932Encoder.encode("\u5D47")}, {name:"Error",message:"EncodingError U+5D47"});
assert.throws(() => {ms932Encoder.encode("\u5D48")}, {name:"Error",message:"EncodingError U+5D48"});
assert.throws(() => {ms932Encoder.encode("\u5D49")}, {name:"Error",message:"EncodingError U+5D49"});
assert.throws(() => {ms932Encoder.encode("\u5D4A")}, {name:"Error",message:"EncodingError U+5D4A"});
r = r && ([...ms932Encoder.encode("嵋嵌")].join(",") === "155,201,155,198"); // U+5D4B
assert.throws(() => {ms932Encoder.encode("\u5D4D")}, {name:"Error",message:"EncodingError U+5D4D"});
r = r && ([...ms932Encoder.encode("嵎")].join(",") === "155,200"); // U+5D4E
assert.throws(() => {ms932Encoder.encode("\u5D4F")}, {name:"Error",message:"EncodingError U+5D4F"});
r = r && ([...ms932Encoder.encode("嵐")].join(",") === "151,146"); // U+5D50
assert.throws(() => {ms932Encoder.encode("\u5D51")}, {name:"Error",message:"EncodingError U+5D51"});
r = r && ([...ms932Encoder.encode("嵒嵓")].join(",") === "155,199,250,176"); // U+5D52
assert.throws(() => {ms932Encoder.encode("\u5D54")}, {name:"Error",message:"EncodingError U+5D54"});
assert.throws(() => {ms932Encoder.encode("\u5D55")}, {name:"Error",message:"EncodingError U+5D55"});
assert.throws(() => {ms932Encoder.encode("\u5D56")}, {name:"Error",message:"EncodingError U+5D56"});
assert.throws(() => {ms932Encoder.encode("\u5D57")}, {name:"Error",message:"EncodingError U+5D57"});
assert.throws(() => {ms932Encoder.encode("\u5D58")}, {name:"Error",message:"EncodingError U+5D58"});
assert.throws(() => {ms932Encoder.encode("\u5D59")}, {name:"Error",message:"EncodingError U+5D59"});
assert.throws(() => {ms932Encoder.encode("\u5D5A")}, {name:"Error",message:"EncodingError U+5D5A"});
assert.throws(() => {ms932Encoder.encode("\u5D5B")}, {name:"Error",message:"EncodingError U+5D5B"});
r = r && ([...ms932Encoder.encode("嵜")].join(",") === "155,189"); // U+5D5C
assert.throws(() => {ms932Encoder.encode("\u5D5D")}, {name:"Error",message:"EncodingError U+5D5D"});
assert.throws(() => {ms932Encoder.encode("\u5D5E")}, {name:"Error",message:"EncodingError U+5D5E"});
assert.throws(() => {ms932Encoder.encode("\u5D5F")}, {name:"Error",message:"EncodingError U+5D5F"});
assert.throws(() => {ms932Encoder.encode("\u5D60")}, {name:"Error",message:"EncodingError U+5D60"});
assert.throws(() => {ms932Encoder.encode("\u5D61")}, {name:"Error",message:"EncodingError U+5D61"});
assert.throws(() => {ms932Encoder.encode("\u5D62")}, {name:"Error",message:"EncodingError U+5D62"});
assert.throws(() => {ms932Encoder.encode("\u5D63")}, {name:"Error",message:"EncodingError U+5D63"});
assert.throws(() => {ms932Encoder.encode("\u5D64")}, {name:"Error",message:"EncodingError U+5D64"});
assert.throws(() => {ms932Encoder.encode("\u5D65")}, {name:"Error",message:"EncodingError U+5D65"});
assert.throws(() => {ms932Encoder.encode("\u5D66")}, {name:"Error",message:"EncodingError U+5D66"});
assert.throws(() => {ms932Encoder.encode("\u5D67")}, {name:"Error",message:"EncodingError U+5D67"});
assert.throws(() => {ms932Encoder.encode("\u5D68")}, {name:"Error",message:"EncodingError U+5D68"});
r = r && ([...ms932Encoder.encode("嵩")].join(",") === "144,147"); // U+5D69
assert.throws(() => {ms932Encoder.encode("\u5D6A")}, {name:"Error",message:"EncodingError U+5D6A"});
assert.throws(() => {ms932Encoder.encode("\u5D6B")}, {name:"Error",message:"EncodingError U+5D6B"});
r = r && ([...ms932Encoder.encode("嵬嵭")].join(",") === "155,202,250,179"); // U+5D6C
assert.throws(() => {ms932Encoder.encode("\u5D6E")}, {name:"Error",message:"EncodingError U+5D6E"});
r = r && ([...ms932Encoder.encode("嵯")].join(",") === "141,181"); // U+5D6F
assert.throws(() => {ms932Encoder.encode("\u5D70")}, {name:"Error",message:"EncodingError U+5D70"});
assert.throws(() => {ms932Encoder.encode("\u5D71")}, {name:"Error",message:"EncodingError U+5D71"});
assert.throws(() => {ms932Encoder.encode("\u5D72")}, {name:"Error",message:"EncodingError U+5D72"});
r = r && ([...ms932Encoder.encode("嵳")].join(",") === "155,203"); // U+5D73
assert.throws(() => {ms932Encoder.encode("\u5D74")}, {name:"Error",message:"EncodingError U+5D74"});
assert.throws(() => {ms932Encoder.encode("\u5D75")}, {name:"Error",message:"EncodingError U+5D75"});
r = r && ([...ms932Encoder.encode("嵶")].join(",") === "155,204"); // U+5D76
assert.throws(() => {ms932Encoder.encode("\u5D77")}, {name:"Error",message:"EncodingError U+5D77"});
assert.throws(() => {ms932Encoder.encode("\u5D78")}, {name:"Error",message:"EncodingError U+5D78"});
assert.throws(() => {ms932Encoder.encode("\u5D79")}, {name:"Error",message:"EncodingError U+5D79"});
assert.throws(() => {ms932Encoder.encode("\u5D7A")}, {name:"Error",message:"EncodingError U+5D7A"});
assert.throws(() => {ms932Encoder.encode("\u5D7B")}, {name:"Error",message:"EncodingError U+5D7B"});
assert.throws(() => {ms932Encoder.encode("\u5D7C")}, {name:"Error",message:"EncodingError U+5D7C"});
assert.throws(() => {ms932Encoder.encode("\u5D7D")}, {name:"Error",message:"EncodingError U+5D7D"});
assert.throws(() => {ms932Encoder.encode("\u5D7E")}, {name:"Error",message:"EncodingError U+5D7E"});
assert.throws(() => {ms932Encoder.encode("\u5D7F")}, {name:"Error",message:"EncodingError U+5D7F"});
assert.throws(() => {ms932Encoder.encode("\u5D80")}, {name:"Error",message:"EncodingError U+5D80"});
assert.throws(() => {ms932Encoder.encode("\u5D81")}, {name:"Error",message:"EncodingError U+5D81"});
r = r && ([...ms932Encoder.encode("嶂")].join(",") === "155,207"); // U+5D82
assert.throws(() => {ms932Encoder.encode("\u5D83")}, {name:"Error",message:"EncodingError U+5D83"});
r = r && ([...ms932Encoder.encode("嶄")].join(",") === "155,206"); // U+5D84
assert.throws(() => {ms932Encoder.encode("\u5D85")}, {name:"Error",message:"EncodingError U+5D85"});
assert.throws(() => {ms932Encoder.encode("\u5D86")}, {name:"Error",message:"EncodingError U+5D86"});
r = r && ([...ms932Encoder.encode("嶇")].join(",") === "155,205"); // U+5D87
assert.throws(() => {ms932Encoder.encode("\u5D88")}, {name:"Error",message:"EncodingError U+5D88"});
assert.throws(() => {ms932Encoder.encode("\u5D89")}, {name:"Error",message:"EncodingError U+5D89"});
assert.throws(() => {ms932Encoder.encode("\u5D8A")}, {name:"Error",message:"EncodingError U+5D8A"});
r = r && ([...ms932Encoder.encode("嶋嶌")].join(",") === "147,136,155,184"); // U+5D8B
assert.throws(() => {ms932Encoder.encode("\u5D8D")}, {name:"Error",message:"EncodingError U+5D8D"});
assert.throws(() => {ms932Encoder.encode("\u5D8E")}, {name:"Error",message:"EncodingError U+5D8E"});
assert.throws(() => {ms932Encoder.encode("\u5D8F")}, {name:"Error",message:"EncodingError U+5D8F"});
r = r && ([...ms932Encoder.encode("嶐")].join(",") === "155,213"); // U+5D90
assert.throws(() => {ms932Encoder.encode("\u5D91")}, {name:"Error",message:"EncodingError U+5D91"});
assert.throws(() => {ms932Encoder.encode("\u5D92")}, {name:"Error",message:"EncodingError U+5D92"});
assert.throws(() => {ms932Encoder.encode("\u5D93")}, {name:"Error",message:"EncodingError U+5D93"});
assert.throws(() => {ms932Encoder.encode("\u5D94")}, {name:"Error",message:"EncodingError U+5D94"});
assert.throws(() => {ms932Encoder.encode("\u5D95")}, {name:"Error",message:"EncodingError U+5D95"});
assert.throws(() => {ms932Encoder.encode("\u5D96")}, {name:"Error",message:"EncodingError U+5D96"});
assert.throws(() => {ms932Encoder.encode("\u5D97")}, {name:"Error",message:"EncodingError U+5D97"});
assert.throws(() => {ms932Encoder.encode("\u5D98")}, {name:"Error",message:"EncodingError U+5D98"});
assert.throws(() => {ms932Encoder.encode("\u5D99")}, {name:"Error",message:"EncodingError U+5D99"});
assert.throws(() => {ms932Encoder.encode("\u5D9A")}, {name:"Error",message:"EncodingError U+5D9A"});
assert.throws(() => {ms932Encoder.encode("\u5D9B")}, {name:"Error",message:"EncodingError U+5D9B"});
assert.throws(() => {ms932Encoder.encode("\u5D9C")}, {name:"Error",message:"EncodingError U+5D9C"});
r = r && ([...ms932Encoder.encode("嶝")].join(",") === "155,209"); // U+5D9D
assert.throws(() => {ms932Encoder.encode("\u5D9E")}, {name:"Error",message:"EncodingError U+5D9E"});
assert.throws(() => {ms932Encoder.encode("\u5D9F")}, {name:"Error",message:"EncodingError U+5D9F"});
assert.throws(() => {ms932Encoder.encode("\u5DA0")}, {name:"Error",message:"EncodingError U+5DA0"});
assert.throws(() => {ms932Encoder.encode("\u5DA1")}, {name:"Error",message:"EncodingError U+5DA1"});
r = r && ([...ms932Encoder.encode("嶢")].join(",") === "155,208"); // U+5DA2
assert.throws(() => {ms932Encoder.encode("\u5DA3")}, {name:"Error",message:"EncodingError U+5DA3"});
assert.throws(() => {ms932Encoder.encode("\u5DA4")}, {name:"Error",message:"EncodingError U+5DA4"});
assert.throws(() => {ms932Encoder.encode("\u5DA5")}, {name:"Error",message:"EncodingError U+5DA5"});
assert.throws(() => {ms932Encoder.encode("\u5DA6")}, {name:"Error",message:"EncodingError U+5DA6"});
assert.throws(() => {ms932Encoder.encode("\u5DA7")}, {name:"Error",message:"EncodingError U+5DA7"});
assert.throws(() => {ms932Encoder.encode("\u5DA8")}, {name:"Error",message:"EncodingError U+5DA8"});
assert.throws(() => {ms932Encoder.encode("\u5DA9")}, {name:"Error",message:"EncodingError U+5DA9"});
assert.throws(() => {ms932Encoder.encode("\u5DAA")}, {name:"Error",message:"EncodingError U+5DAA"});
assert.throws(() => {ms932Encoder.encode("\u5DAB")}, {name:"Error",message:"EncodingError U+5DAB"});
r = r && ([...ms932Encoder.encode("嶬")].join(",") === "155,210"); // U+5DAC
assert.throws(() => {ms932Encoder.encode("\u5DAD")}, {name:"Error",message:"EncodingError U+5DAD"});
r = r && ([...ms932Encoder.encode("嶮")].join(",") === "155,211"); // U+5DAE
assert.throws(() => {ms932Encoder.encode("\u5DAF")}, {name:"Error",message:"EncodingError U+5DAF"});
assert.throws(() => {ms932Encoder.encode("\u5DB0")}, {name:"Error",message:"EncodingError U+5DB0"});
assert.throws(() => {ms932Encoder.encode("\u5DB1")}, {name:"Error",message:"EncodingError U+5DB1"});
assert.throws(() => {ms932Encoder.encode("\u5DB2")}, {name:"Error",message:"EncodingError U+5DB2"});
assert.throws(() => {ms932Encoder.encode("\u5DB3")}, {name:"Error",message:"EncodingError U+5DB3"});
assert.throws(() => {ms932Encoder.encode("\u5DB4")}, {name:"Error",message:"EncodingError U+5DB4"});
assert.throws(() => {ms932Encoder.encode("\u5DB5")}, {name:"Error",message:"EncodingError U+5DB5"});
assert.throws(() => {ms932Encoder.encode("\u5DB6")}, {name:"Error",message:"EncodingError U+5DB6"});
r = r && ([...ms932Encoder.encode("嶷嶸嶹嶺")].join(",") === "155,214,250,180,250,181,151,228"); // U+5DB7
assert.throws(() => {ms932Encoder.encode("\u5DBB")}, {name:"Error",message:"EncodingError U+5DBB"});
r = r && ([...ms932Encoder.encode("嶼嶽")].join(",") === "155,215,155,212"); // U+5DBC
assert.throws(() => {ms932Encoder.encode("\u5DBE")}, {name:"Error",message:"EncodingError U+5DBE"});
assert.throws(() => {ms932Encoder.encode("\u5DBF")}, {name:"Error",message:"EncodingError U+5DBF"});
assert.throws(() => {ms932Encoder.encode("\u5DC0")}, {name:"Error",message:"EncodingError U+5DC0"});
assert.throws(() => {ms932Encoder.encode("\u5DC1")}, {name:"Error",message:"EncodingError U+5DC1"});
assert.throws(() => {ms932Encoder.encode("\u5DC2")}, {name:"Error",message:"EncodingError U+5DC2"});
assert.throws(() => {ms932Encoder.encode("\u5DC3")}, {name:"Error",message:"EncodingError U+5DC3"});
assert.throws(() => {ms932Encoder.encode("\u5DC4")}, {name:"Error",message:"EncodingError U+5DC4"});
assert.throws(() => {ms932Encoder.encode("\u5DC5")}, {name:"Error",message:"EncodingError U+5DC5"});
assert.throws(() => {ms932Encoder.encode("\u5DC6")}, {name:"Error",message:"EncodingError U+5DC6"});
assert.throws(() => {ms932Encoder.encode("\u5DC7")}, {name:"Error",message:"EncodingError U+5DC7"});
assert.throws(() => {ms932Encoder.encode("\u5DC8")}, {name:"Error",message:"EncodingError U+5DC8"});
r = r && ([...ms932Encoder.encode("巉")].join(",") === "155,216"); // U+5DC9
assert.throws(() => {ms932Encoder.encode("\u5DCA")}, {name:"Error",message:"EncodingError U+5DCA"});
assert.throws(() => {ms932Encoder.encode("\u5DCB")}, {name:"Error",message:"EncodingError U+5DCB"});
r = r && ([...ms932Encoder.encode("巌巍")].join(",") === "138,222,155,217"); // U+5DCC
assert.throws(() => {ms932Encoder.encode("\u5DCE")}, {name:"Error",message:"EncodingError U+5DCE"});
assert.throws(() => {ms932Encoder.encode("\u5DCF")}, {name:"Error",message:"EncodingError U+5DCF"});
r = r && ([...ms932Encoder.encode("巐")].join(",") === "250,182"); // U+5DD0
assert.throws(() => {ms932Encoder.encode("\u5DD1")}, {name:"Error",message:"EncodingError U+5DD1"});
r = r && ([...ms932Encoder.encode("巒巓")].join(",") === "155,219,155,218"); // U+5DD2
assert.throws(() => {ms932Encoder.encode("\u5DD4")}, {name:"Error",message:"EncodingError U+5DD4"});
assert.throws(() => {ms932Encoder.encode("\u5DD5")}, {name:"Error",message:"EncodingError U+5DD5"});
r = r && ([...ms932Encoder.encode("巖")].join(",") === "155,220"); // U+5DD6
assert.throws(() => {ms932Encoder.encode("\u5DD7")}, {name:"Error",message:"EncodingError U+5DD7"});
assert.throws(() => {ms932Encoder.encode("\u5DD8")}, {name:"Error",message:"EncodingError U+5DD8"});
assert.throws(() => {ms932Encoder.encode("\u5DD9")}, {name:"Error",message:"EncodingError U+5DD9"});
assert.throws(() => {ms932Encoder.encode("\u5DDA")}, {name:"Error",message:"EncodingError U+5DDA"});
r = r && ([...ms932Encoder.encode("巛")].join(",") === "155,221"); // U+5DDB
assert.throws(() => {ms932Encoder.encode("\u5DDC")}, {name:"Error",message:"EncodingError U+5DDC"});
r = r && ([...ms932Encoder.encode("川州")].join(",") === "144,236,143,66"); // U+5DDD
assert.throws(() => {ms932Encoder.encode("\u5DDF")}, {name:"Error",message:"EncodingError U+5DDF"});
assert.throws(() => {ms932Encoder.encode("\u5DE0")}, {name:"Error",message:"EncodingError U+5DE0"});
r = r && ([...ms932Encoder.encode("巡")].join(",") === "143,132"); // U+5DE1
assert.throws(() => {ms932Encoder.encode("\u5DE2")}, {name:"Error",message:"EncodingError U+5DE2"});
r = r && ([...ms932Encoder.encode("巣")].join(",") === "145,131"); // U+5DE3
assert.throws(() => {ms932Encoder.encode("\u5DE4")}, {name:"Error",message:"EncodingError U+5DE4"});
r = r && ([...ms932Encoder.encode("工左巧巨")].join(",") === "141,72,141,182,141,73,139,144"); // U+5DE5
assert.throws(() => {ms932Encoder.encode("\u5DE9")}, {name:"Error",message:"EncodingError U+5DE9"});
assert.throws(() => {ms932Encoder.encode("\u5DEA")}, {name:"Error",message:"EncodingError U+5DEA"});
r = r && ([...ms932Encoder.encode("巫")].join(",") === "155,222"); // U+5DEB
assert.throws(() => {ms932Encoder.encode("\u5DEC")}, {name:"Error",message:"EncodingError U+5DEC"});
assert.throws(() => {ms932Encoder.encode("\u5DED")}, {name:"Error",message:"EncodingError U+5DED"});
r = r && ([...ms932Encoder.encode("差")].join(",") === "141,183"); // U+5DEE
assert.throws(() => {ms932Encoder.encode("\u5DEF")}, {name:"Error",message:"EncodingError U+5DEF"});
assert.throws(() => {ms932Encoder.encode("\u5DF0")}, {name:"Error",message:"EncodingError U+5DF0"});
r = r && ([...ms932Encoder.encode("己已巳巴巵")].join(",") === "140,200,155,223,150,164,148,98,155,224"); // U+5DF1
assert.throws(() => {ms932Encoder.encode("\u5DF6")}, {name:"Error",message:"EncodingError U+5DF6"});
r = r && ([...ms932Encoder.encode("巷")].join(",") === "141,74"); // U+5DF7
assert.throws(() => {ms932Encoder.encode("\u5DF8")}, {name:"Error",message:"EncodingError U+5DF8"});
assert.throws(() => {ms932Encoder.encode("\u5DF9")}, {name:"Error",message:"EncodingError U+5DF9"});
assert.throws(() => {ms932Encoder.encode("\u5DFA")}, {name:"Error",message:"EncodingError U+5DFA"});
r = r && ([...ms932Encoder.encode("巻")].join(",") === "138,170"); // U+5DFB
assert.throws(() => {ms932Encoder.encode("\u5DFC")}, {name:"Error",message:"EncodingError U+5DFC"});
r = r && ([...ms932Encoder.encode("巽巾")].join(",") === "146,70,139,208"); // U+5DFD
assert.throws(() => {ms932Encoder.encode("\u5DFF")}, {name:"Error",message:"EncodingError U+5DFF"});
assert.throws(() => {ms932Encoder.encode("\u5E00")}, {name:"Error",message:"EncodingError U+5E00"});
assert.throws(() => {ms932Encoder.encode("\u5E01")}, {name:"Error",message:"EncodingError U+5E01"});
r = r && ([...ms932Encoder.encode("市布")].join(",") === "142,115,149,122"); // U+5E02
assert.throws(() => {ms932Encoder.encode("\u5E04")}, {name:"Error",message:"EncodingError U+5E04"});
assert.throws(() => {ms932Encoder.encode("\u5E05")}, {name:"Error",message:"EncodingError U+5E05"});
r = r && ([...ms932Encoder.encode("帆")].join(",") === "148,191"); // U+5E06
assert.throws(() => {ms932Encoder.encode("\u5E07")}, {name:"Error",message:"EncodingError U+5E07"});
assert.throws(() => {ms932Encoder.encode("\u5E08")}, {name:"Error",message:"EncodingError U+5E08"});
assert.throws(() => {ms932Encoder.encode("\u5E09")}, {name:"Error",message:"EncodingError U+5E09"});
assert.throws(() => {ms932Encoder.encode("\u5E0A")}, {name:"Error",message:"EncodingError U+5E0A"});
r = r && ([...ms932Encoder.encode("帋希")].join(",") === "155,225,138,243"); // U+5E0B
assert.throws(() => {ms932Encoder.encode("\u5E0D")}, {name:"Error",message:"EncodingError U+5E0D"});
assert.throws(() => {ms932Encoder.encode("\u5E0E")}, {name:"Error",message:"EncodingError U+5E0E"});
assert.throws(() => {ms932Encoder.encode("\u5E0F")}, {name:"Error",message:"EncodingError U+5E0F"});
assert.throws(() => {ms932Encoder.encode("\u5E10")}, {name:"Error",message:"EncodingError U+5E10"});
r = r && ([...ms932Encoder.encode("帑")].join(",") === "155,228"); // U+5E11
assert.throws(() => {ms932Encoder.encode("\u5E12")}, {name:"Error",message:"EncodingError U+5E12"});
assert.throws(() => {ms932Encoder.encode("\u5E13")}, {name:"Error",message:"EncodingError U+5E13"});
assert.throws(() => {ms932Encoder.encode("\u5E14")}, {name:"Error",message:"EncodingError U+5E14"});
assert.throws(() => {ms932Encoder.encode("\u5E15")}, {name:"Error",message:"EncodingError U+5E15"});
r = r && ([...ms932Encoder.encode("帖")].join(",") === "146,159"); // U+5E16
assert.throws(() => {ms932Encoder.encode("\u5E17")}, {name:"Error",message:"EncodingError U+5E17"});
assert.throws(() => {ms932Encoder.encode("\u5E18")}, {name:"Error",message:"EncodingError U+5E18"});
r = r && ([...ms932Encoder.encode("帙帚帛")].join(",") === "155,227,155,226,155,229"); // U+5E19
assert.throws(() => {ms932Encoder.encode("\u5E1C")}, {name:"Error",message:"EncodingError U+5E1C"});
r = r && ([...ms932Encoder.encode("帝")].join(",") === "146,233"); // U+5E1D
assert.throws(() => {ms932Encoder.encode("\u5E1E")}, {name:"Error",message:"EncodingError U+5E1E"});
assert.throws(() => {ms932Encoder.encode("\u5E1F")}, {name:"Error",message:"EncodingError U+5E1F"});
assert.throws(() => {ms932Encoder.encode("\u5E20")}, {name:"Error",message:"EncodingError U+5E20"});
assert.throws(() => {ms932Encoder.encode("\u5E21")}, {name:"Error",message:"EncodingError U+5E21"});
assert.throws(() => {ms932Encoder.encode("\u5E22")}, {name:"Error",message:"EncodingError U+5E22"});
assert.throws(() => {ms932Encoder.encode("\u5E23")}, {name:"Error",message:"EncodingError U+5E23"});
assert.throws(() => {ms932Encoder.encode("\u5E24")}, {name:"Error",message:"EncodingError U+5E24"});
r = r && ([...ms932Encoder.encode("帥")].join(",") === "144,131"); // U+5E25
assert.throws(() => {ms932Encoder.encode("\u5E26")}, {name:"Error",message:"EncodingError U+5E26"});
assert.throws(() => {ms932Encoder.encode("\u5E27")}, {name:"Error",message:"EncodingError U+5E27"});
assert.throws(() => {ms932Encoder.encode("\u5E28")}, {name:"Error",message:"EncodingError U+5E28"});
assert.throws(() => {ms932Encoder.encode("\u5E29")}, {name:"Error",message:"EncodingError U+5E29"});
assert.throws(() => {ms932Encoder.encode("\u5E2A")}, {name:"Error",message:"EncodingError U+5E2A"});
r = r && ([...ms932Encoder.encode("師")].join(",") === "142,116"); // U+5E2B
assert.throws(() => {ms932Encoder.encode("\u5E2C")}, {name:"Error",message:"EncodingError U+5E2C"});
r = r && ([...ms932Encoder.encode("席")].join(",") === "144,200"); // U+5E2D
assert.throws(() => {ms932Encoder.encode("\u5E2E")}, {name:"Error",message:"EncodingError U+5E2E"});
r = r && ([...ms932Encoder.encode("帯帰")].join(",") === "145,209,139,65"); // U+5E2F
assert.throws(() => {ms932Encoder.encode("\u5E31")}, {name:"Error",message:"EncodingError U+5E31"});
assert.throws(() => {ms932Encoder.encode("\u5E32")}, {name:"Error",message:"EncodingError U+5E32"});
r = r && ([...ms932Encoder.encode("帳")].join(",") === "146,160"); // U+5E33
assert.throws(() => {ms932Encoder.encode("\u5E34")}, {name:"Error",message:"EncodingError U+5E34"});
assert.throws(() => {ms932Encoder.encode("\u5E35")}, {name:"Error",message:"EncodingError U+5E35"});
r = r && ([...ms932Encoder.encode("帶帷常")].join(",") === "155,230,155,231,143,237"); // U+5E36
assert.throws(() => {ms932Encoder.encode("\u5E39")}, {name:"Error",message:"EncodingError U+5E39"});
assert.throws(() => {ms932Encoder.encode("\u5E3A")}, {name:"Error",message:"EncodingError U+5E3A"});
assert.throws(() => {ms932Encoder.encode("\u5E3B")}, {name:"Error",message:"EncodingError U+5E3B"});
assert.throws(() => {ms932Encoder.encode("\u5E3C")}, {name:"Error",message:"EncodingError U+5E3C"});
r = r && ([...ms932Encoder.encode("帽")].join(",") === "150,88"); // U+5E3D
assert.throws(() => {ms932Encoder.encode("\u5E3E")}, {name:"Error",message:"EncodingError U+5E3E"});
assert.throws(() => {ms932Encoder.encode("\u5E3F")}, {name:"Error",message:"EncodingError U+5E3F"});
r = r && ([...ms932Encoder.encode("幀")].join(",") === "155,234"); // U+5E40
assert.throws(() => {ms932Encoder.encode("\u5E41")}, {name:"Error",message:"EncodingError U+5E41"});
assert.throws(() => {ms932Encoder.encode("\u5E42")}, {name:"Error",message:"EncodingError U+5E42"});
r = r && ([...ms932Encoder.encode("幃幄幅")].join(",") === "155,233,155,232,149,157"); // U+5E43
assert.throws(() => {ms932Encoder.encode("\u5E46")}, {name:"Error",message:"EncodingError U+5E46"});
r = r && ([...ms932Encoder.encode("幇")].join(",") === "155,241"); // U+5E47
assert.throws(() => {ms932Encoder.encode("\u5E48")}, {name:"Error",message:"EncodingError U+5E48"});
assert.throws(() => {ms932Encoder.encode("\u5E49")}, {name:"Error",message:"EncodingError U+5E49"});
assert.throws(() => {ms932Encoder.encode("\u5E4A")}, {name:"Error",message:"EncodingError U+5E4A"});
assert.throws(() => {ms932Encoder.encode("\u5E4B")}, {name:"Error",message:"EncodingError U+5E4B"});
r = r && ([...ms932Encoder.encode("幌")].join(",") === "150,121"); // U+5E4C
assert.throws(() => {ms932Encoder.encode("\u5E4D")}, {name:"Error",message:"EncodingError U+5E4D"});
r = r && ([...ms932Encoder.encode("幎")].join(",") === "155,235"); // U+5E4E
assert.throws(() => {ms932Encoder.encode("\u5E4F")}, {name:"Error",message:"EncodingError U+5E4F"});
assert.throws(() => {ms932Encoder.encode("\u5E50")}, {name:"Error",message:"EncodingError U+5E50"});
assert.throws(() => {ms932Encoder.encode("\u5E51")}, {name:"Error",message:"EncodingError U+5E51"});
assert.throws(() => {ms932Encoder.encode("\u5E52")}, {name:"Error",message:"EncodingError U+5E52"});
assert.throws(() => {ms932Encoder.encode("\u5E53")}, {name:"Error",message:"EncodingError U+5E53"});
r = r && ([...ms932Encoder.encode("幔幕")].join(",") === "155,237,150,139"); // U+5E54
assert.throws(() => {ms932Encoder.encode("\u5E56")}, {name:"Error",message:"EncodingError U+5E56"});
r = r && ([...ms932Encoder.encode("幗")].join(",") === "155,236"); // U+5E57
assert.throws(() => {ms932Encoder.encode("\u5E58")}, {name:"Error",message:"EncodingError U+5E58"});
assert.throws(() => {ms932Encoder.encode("\u5E59")}, {name:"Error",message:"EncodingError U+5E59"});
assert.throws(() => {ms932Encoder.encode("\u5E5A")}, {name:"Error",message:"EncodingError U+5E5A"});
assert.throws(() => {ms932Encoder.encode("\u5E5B")}, {name:"Error",message:"EncodingError U+5E5B"});
assert.throws(() => {ms932Encoder.encode("\u5E5C")}, {name:"Error",message:"EncodingError U+5E5C"});
assert.throws(() => {ms932Encoder.encode("\u5E5D")}, {name:"Error",message:"EncodingError U+5E5D"});
assert.throws(() => {ms932Encoder.encode("\u5E5E")}, {name:"Error",message:"EncodingError U+5E5E"});
r = r && ([...ms932Encoder.encode("幟")].join(",") === "155,238"); // U+5E5F
assert.throws(() => {ms932Encoder.encode("\u5E60")}, {name:"Error",message:"EncodingError U+5E60"});
r = r && ([...ms932Encoder.encode("幡幢幣幤")].join(",") === "148,166,155,239,149,188,155,240"); // U+5E61
assert.throws(() => {ms932Encoder.encode("\u5E65")}, {name:"Error",message:"EncodingError U+5E65"});
assert.throws(() => {ms932Encoder.encode("\u5E66")}, {name:"Error",message:"EncodingError U+5E66"});
assert.throws(() => {ms932Encoder.encode("\u5E67")}, {name:"Error",message:"EncodingError U+5E67"});
assert.throws(() => {ms932Encoder.encode("\u5E68")}, {name:"Error",message:"EncodingError U+5E68"});
assert.throws(() => {ms932Encoder.encode("\u5E69")}, {name:"Error",message:"EncodingError U+5E69"});
assert.throws(() => {ms932Encoder.encode("\u5E6A")}, {name:"Error",message:"EncodingError U+5E6A"});
assert.throws(() => {ms932Encoder.encode("\u5E6B")}, {name:"Error",message:"EncodingError U+5E6B"});
assert.throws(() => {ms932Encoder.encode("\u5E6C")}, {name:"Error",message:"EncodingError U+5E6C"});
assert.throws(() => {ms932Encoder.encode("\u5E6D")}, {name:"Error",message:"EncodingError U+5E6D"});
assert.throws(() => {ms932Encoder.encode("\u5E6E")}, {name:"Error",message:"EncodingError U+5E6E"});
assert.throws(() => {ms932Encoder.encode("\u5E6F")}, {name:"Error",message:"EncodingError U+5E6F"});
assert.throws(() => {ms932Encoder.encode("\u5E70")}, {name:"Error",message:"EncodingError U+5E70"});
assert.throws(() => {ms932Encoder.encode("\u5E71")}, {name:"Error",message:"EncodingError U+5E71"});
r = r && ([...ms932Encoder.encode("干平年幵并")].join(",") === "138,177,149,189,148,78,155,242,155,243"); // U+5E72
assert.throws(() => {ms932Encoder.encode("\u5E77")}, {name:"Error",message:"EncodingError U+5E77"});
r = r && ([...ms932Encoder.encode("幸幹幺幻幼幽幾广")].join(",") === "141,75,138,178,155,244,140,182,151,99,151,72,138,244,155,246"); // U+5E78
assert.throws(() => {ms932Encoder.encode("\u5E80")}, {name:"Error",message:"EncodingError U+5E80"});
r = r && ([...ms932Encoder.encode("庁")].join(",") === "146,161"); // U+5E81
assert.throws(() => {ms932Encoder.encode("\u5E82")}, {name:"Error",message:"EncodingError U+5E82"});
r = r && ([...ms932Encoder.encode("広庄")].join(",") === "141,76,143,175"); // U+5E83
assert.throws(() => {ms932Encoder.encode("\u5E85")}, {name:"Error",message:"EncodingError U+5E85"});
assert.throws(() => {ms932Encoder.encode("\u5E86")}, {name:"Error",message:"EncodingError U+5E86"});
r = r && ([...ms932Encoder.encode("庇")].join(",") === "148,221"); // U+5E87
assert.throws(() => {ms932Encoder.encode("\u5E88")}, {name:"Error",message:"EncodingError U+5E88"});
assert.throws(() => {ms932Encoder.encode("\u5E89")}, {name:"Error",message:"EncodingError U+5E89"});
r = r && ([...ms932Encoder.encode("床")].join(",") === "143,176"); // U+5E8A
assert.throws(() => {ms932Encoder.encode("\u5E8B")}, {name:"Error",message:"EncodingError U+5E8B"});
assert.throws(() => {ms932Encoder.encode("\u5E8C")}, {name:"Error",message:"EncodingError U+5E8C"});
assert.throws(() => {ms932Encoder.encode("\u5E8D")}, {name:"Error",message:"EncodingError U+5E8D"});
assert.throws(() => {ms932Encoder.encode("\u5E8E")}, {name:"Error",message:"EncodingError U+5E8E"});
r = r && ([...ms932Encoder.encode("序")].join(",") === "143,152"); // U+5E8F
assert.throws(() => {ms932Encoder.encode("\u5E90")}, {name:"Error",message:"EncodingError U+5E90"});
assert.throws(() => {ms932Encoder.encode("\u5E91")}, {name:"Error",message:"EncodingError U+5E91"});
assert.throws(() => {ms932Encoder.encode("\u5E92")}, {name:"Error",message:"EncodingError U+5E92"});
assert.throws(() => {ms932Encoder.encode("\u5E93")}, {name:"Error",message:"EncodingError U+5E93"});
assert.throws(() => {ms932Encoder.encode("\u5E94")}, {name:"Error",message:"EncodingError U+5E94"});
r = r && ([...ms932Encoder.encode("底庖店")].join(",") === "146,234,149,247,147,88"); // U+5E95
assert.throws(() => {ms932Encoder.encode("\u5E98")}, {name:"Error",message:"EncodingError U+5E98"});
assert.throws(() => {ms932Encoder.encode("\u5E99")}, {name:"Error",message:"EncodingError U+5E99"});
r = r && ([...ms932Encoder.encode("庚")].join(",") === "141,77"); // U+5E9A
assert.throws(() => {ms932Encoder.encode("\u5E9B")}, {name:"Error",message:"EncodingError U+5E9B"});
r = r && ([...ms932Encoder.encode("府")].join(",") === "149,123"); // U+5E9C
assert.throws(() => {ms932Encoder.encode("\u5E9D")}, {name:"Error",message:"EncodingError U+5E9D"});
assert.throws(() => {ms932Encoder.encode("\u5E9E")}, {name:"Error",message:"EncodingError U+5E9E"});
assert.throws(() => {ms932Encoder.encode("\u5E9F")}, {name:"Error",message:"EncodingError U+5E9F"});
r = r && ([...ms932Encoder.encode("庠")].join(",") === "155,247"); // U+5EA0
assert.throws(() => {ms932Encoder.encode("\u5EA1")}, {name:"Error",message:"EncodingError U+5EA1"});
assert.throws(() => {ms932Encoder.encode("\u5EA2")}, {name:"Error",message:"EncodingError U+5EA2"});
assert.throws(() => {ms932Encoder.encode("\u5EA3")}, {name:"Error",message:"EncodingError U+5EA3"});
assert.throws(() => {ms932Encoder.encode("\u5EA4")}, {name:"Error",message:"EncodingError U+5EA4"});
assert.throws(() => {ms932Encoder.encode("\u5EA5")}, {name:"Error",message:"EncodingError U+5EA5"});
r = r && ([...ms932Encoder.encode("度座")].join(",") === "147,120,141,192"); // U+5EA6
assert.throws(() => {ms932Encoder.encode("\u5EA8")}, {name:"Error",message:"EncodingError U+5EA8"});
assert.throws(() => {ms932Encoder.encode("\u5EA9")}, {name:"Error",message:"EncodingError U+5EA9"});
assert.throws(() => {ms932Encoder.encode("\u5EAA")}, {name:"Error",message:"EncodingError U+5EAA"});
r = r && ([...ms932Encoder.encode("庫")].join(",") === "140,201"); // U+5EAB
assert.throws(() => {ms932Encoder.encode("\u5EAC")}, {name:"Error",message:"EncodingError U+5EAC"});
r = r && ([...ms932Encoder.encode("庭")].join(",") === "146,235"); // U+5EAD
assert.throws(() => {ms932Encoder.encode("\u5EAE")}, {name:"Error",message:"EncodingError U+5EAE"});
assert.throws(() => {ms932Encoder.encode("\u5EAF")}, {name:"Error",message:"EncodingError U+5EAF"});
assert.throws(() => {ms932Encoder.encode("\u5EB0")}, {name:"Error",message:"EncodingError U+5EB0"});
assert.throws(() => {ms932Encoder.encode("\u5EB1")}, {name:"Error",message:"EncodingError U+5EB1"});
assert.throws(() => {ms932Encoder.encode("\u5EB2")}, {name:"Error",message:"EncodingError U+5EB2"});
assert.throws(() => {ms932Encoder.encode("\u5EB3")}, {name:"Error",message:"EncodingError U+5EB3"});
assert.throws(() => {ms932Encoder.encode("\u5EB4")}, {name:"Error",message:"EncodingError U+5EB4"});
r = r && ([...ms932Encoder.encode("庵庶康庸")].join(",") === "136,193,143,142,141,78,151,102"); // U+5EB5
assert.throws(() => {ms932Encoder.encode("\u5EB9")}, {name:"Error",message:"EncodingError U+5EB9"});
assert.throws(() => {ms932Encoder.encode("\u5EBA")}, {name:"Error",message:"EncodingError U+5EBA"});
assert.throws(() => {ms932Encoder.encode("\u5EBB")}, {name:"Error",message:"EncodingError U+5EBB"});
assert.throws(() => {ms932Encoder.encode("\u5EBC")}, {name:"Error",message:"EncodingError U+5EBC"});
assert.throws(() => {ms932Encoder.encode("\u5EBD")}, {name:"Error",message:"EncodingError U+5EBD"});
assert.throws(() => {ms932Encoder.encode("\u5EBE")}, {name:"Error",message:"EncodingError U+5EBE"});
assert.throws(() => {ms932Encoder.encode("\u5EBF")}, {name:"Error",message:"EncodingError U+5EBF"});
assert.throws(() => {ms932Encoder.encode("\u5EC0")}, {name:"Error",message:"EncodingError U+5EC0"});
r = r && ([...ms932Encoder.encode("廁廂廃")].join(",") === "155,248,155,249,148,112"); // U+5EC1
assert.throws(() => {ms932Encoder.encode("\u5EC4")}, {name:"Error",message:"EncodingError U+5EC4"});
assert.throws(() => {ms932Encoder.encode("\u5EC5")}, {name:"Error",message:"EncodingError U+5EC5"});
assert.throws(() => {ms932Encoder.encode("\u5EC6")}, {name:"Error",message:"EncodingError U+5EC6"});
assert.throws(() => {ms932Encoder.encode("\u5EC7")}, {name:"Error",message:"EncodingError U+5EC7"});
r = r && ([...ms932Encoder.encode("廈廉廊")].join(",") === "155,250,151,245,152,76"); // U+5EC8
assert.throws(() => {ms932Encoder.encode("\u5ECB")}, {name:"Error",message:"EncodingError U+5ECB"});
assert.throws(() => {ms932Encoder.encode("\u5ECC")}, {name:"Error",message:"EncodingError U+5ECC"});
assert.throws(() => {ms932Encoder.encode("\u5ECD")}, {name:"Error",message:"EncodingError U+5ECD"});
assert.throws(() => {ms932Encoder.encode("\u5ECE")}, {name:"Error",message:"EncodingError U+5ECE"});
r = r && ([...ms932Encoder.encode("廏廐")].join(",") === "155,252,155,251"); // U+5ECF
assert.throws(() => {ms932Encoder.encode("\u5ED1")}, {name:"Error",message:"EncodingError U+5ED1"});
assert.throws(() => {ms932Encoder.encode("\u5ED2")}, {name:"Error",message:"EncodingError U+5ED2"});
r = r && ([...ms932Encoder.encode("廓")].join(",") === "138,102"); // U+5ED3
assert.throws(() => {ms932Encoder.encode("\u5ED4")}, {name:"Error",message:"EncodingError U+5ED4"});
assert.throws(() => {ms932Encoder.encode("\u5ED5")}, {name:"Error",message:"EncodingError U+5ED5"});
r = r && ([...ms932Encoder.encode("廖")].join(",") === "156,64"); // U+5ED6
assert.throws(() => {ms932Encoder.encode("\u5ED7")}, {name:"Error",message:"EncodingError U+5ED7"});
assert.throws(() => {ms932Encoder.encode("\u5ED8")}, {name:"Error",message:"EncodingError U+5ED8"});
assert.throws(() => {ms932Encoder.encode("\u5ED9")}, {name:"Error",message:"EncodingError U+5ED9"});
r = r && ([...ms932Encoder.encode("廚廛")].join(",") === "156,67,156,68"); // U+5EDA
assert.throws(() => {ms932Encoder.encode("\u5EDC")}, {name:"Error",message:"EncodingError U+5EDC"});
r = r && ([...ms932Encoder.encode("廝")].join(",") === "156,66"); // U+5EDD
assert.throws(() => {ms932Encoder.encode("\u5EDE")}, {name:"Error",message:"EncodingError U+5EDE"});
r = r && ([...ms932Encoder.encode("廟廠廡廢廣")].join(",") === "149,95,143,177,156,70,156,69,156,65"); // U+5EDF
assert.throws(() => {ms932Encoder.encode("\u5EE4")}, {name:"Error",message:"EncodingError U+5EE4"});
assert.throws(() => {ms932Encoder.encode("\u5EE5")}, {name:"Error",message:"EncodingError U+5EE5"});
assert.throws(() => {ms932Encoder.encode("\u5EE6")}, {name:"Error",message:"EncodingError U+5EE6"});
assert.throws(() => {ms932Encoder.encode("\u5EE7")}, {name:"Error",message:"EncodingError U+5EE7"});
r = r && ([...ms932Encoder.encode("廨廩")].join(",") === "156,71,156,72"); // U+5EE8
assert.throws(() => {ms932Encoder.encode("\u5EEA")}, {name:"Error",message:"EncodingError U+5EEA"});
assert.throws(() => {ms932Encoder.encode("\u5EEB")}, {name:"Error",message:"EncodingError U+5EEB"});
r = r && ([...ms932Encoder.encode("廬")].join(",") === "156,73"); // U+5EEC
assert.throws(() => {ms932Encoder.encode("\u5EED")}, {name:"Error",message:"EncodingError U+5EED"});
assert.throws(() => {ms932Encoder.encode("\u5EEE")}, {name:"Error",message:"EncodingError U+5EEE"});
assert.throws(() => {ms932Encoder.encode("\u5EEF")}, {name:"Error",message:"EncodingError U+5EEF"});
r = r && ([...ms932Encoder.encode("廰廱")].join(",") === "156,76,156,74"); // U+5EF0
assert.throws(() => {ms932Encoder.encode("\u5EF2")}, {name:"Error",message:"EncodingError U+5EF2"});
r = r && ([...ms932Encoder.encode("廳廴")].join(",") === "156,75,156,77"); // U+5EF3
assert.throws(() => {ms932Encoder.encode("\u5EF5")}, {name:"Error",message:"EncodingError U+5EF5"});
r = r && ([...ms932Encoder.encode("延廷廸")].join(",") === "137,132,146,236,156,78"); // U+5EF6
assert.throws(() => {ms932Encoder.encode("\u5EF9")}, {name:"Error",message:"EncodingError U+5EF9"});
r = r && ([...ms932Encoder.encode("建廻廼")].join(",") === "140,154,137,244,148,85"); // U+5EFA
assert.throws(() => {ms932Encoder.encode("\u5EFD")}, {name:"Error",message:"EncodingError U+5EFD"});
r = r && ([...ms932Encoder.encode("廾廿")].join(",") === "156,79,147,249"); // U+5EFE
assert.throws(() => {ms932Encoder.encode("\u5F00")}, {name:"Error",message:"EncodingError U+5F00"});
r = r && ([...ms932Encoder.encode("弁")].join(",") === "149,217"); // U+5F01
assert.throws(() => {ms932Encoder.encode("\u5F02")}, {name:"Error",message:"EncodingError U+5F02"});
r = r && ([...ms932Encoder.encode("弃弄")].join(",") === "156,80,152,77"); // U+5F03
assert.throws(() => {ms932Encoder.encode("\u5F05")}, {name:"Error",message:"EncodingError U+5F05"});
assert.throws(() => {ms932Encoder.encode("\u5F06")}, {name:"Error",message:"EncodingError U+5F06"});
assert.throws(() => {ms932Encoder.encode("\u5F07")}, {name:"Error",message:"EncodingError U+5F07"});
assert.throws(() => {ms932Encoder.encode("\u5F08")}, {name:"Error",message:"EncodingError U+5F08"});
r = r && ([...ms932Encoder.encode("弉弊弋弌弍")].join(",") === "156,81,149,190,156,84,152,159,152,175"); // U+5F09
assert.throws(() => {ms932Encoder.encode("\u5F0E")}, {name:"Error",message:"EncodingError U+5F0E"});
r = r && ([...ms932Encoder.encode("式弐弑")].join(",") === "142,174,147,243,156,85"); // U+5F0F
assert.throws(() => {ms932Encoder.encode("\u5F12")}, {name:"Error",message:"EncodingError U+5F12"});
r = r && ([...ms932Encoder.encode("弓弔引弖弗弘")].join(",") === "139,124,146,162,136,248,156,86,149,164,141,79"); // U+5F13
assert.throws(() => {ms932Encoder.encode("\u5F19")}, {name:"Error",message:"EncodingError U+5F19"});
assert.throws(() => {ms932Encoder.encode("\u5F1A")}, {name:"Error",message:"EncodingError U+5F1A"});
r = r && ([...ms932Encoder.encode("弛")].join(",") === "146,111"); // U+5F1B
assert.throws(() => {ms932Encoder.encode("\u5F1C")}, {name:"Error",message:"EncodingError U+5F1C"});
assert.throws(() => {ms932Encoder.encode("\u5F1D")}, {name:"Error",message:"EncodingError U+5F1D"});
assert.throws(() => {ms932Encoder.encode("\u5F1E")}, {name:"Error",message:"EncodingError U+5F1E"});
r = r && ([...ms932Encoder.encode("弟")].join(",") === "146,237"); // U+5F1F
assert.throws(() => {ms932Encoder.encode("\u5F20")}, {name:"Error",message:"EncodingError U+5F20"});
r = r && ([...ms932Encoder.encode("弡")].join(",") === "250,183"); // U+5F21
assert.throws(() => {ms932Encoder.encode("\u5F22")}, {name:"Error",message:"EncodingError U+5F22"});
assert.throws(() => {ms932Encoder.encode("\u5F23")}, {name:"Error",message:"EncodingError U+5F23"});
assert.throws(() => {ms932Encoder.encode("\u5F24")}, {name:"Error",message:"EncodingError U+5F24"});
r = r && ([...ms932Encoder.encode("弥弦弧")].join(",") === "150,237,140,183,140,202"); // U+5F25
assert.throws(() => {ms932Encoder.encode("\u5F28")}, {name:"Error",message:"EncodingError U+5F28"});
r = r && ([...ms932Encoder.encode("弩")].join(",") === "156,87"); // U+5F29
assert.throws(() => {ms932Encoder.encode("\u5F2A")}, {name:"Error",message:"EncodingError U+5F2A"});
assert.throws(() => {ms932Encoder.encode("\u5F2B")}, {name:"Error",message:"EncodingError U+5F2B"});
assert.throws(() => {ms932Encoder.encode("\u5F2C")}, {name:"Error",message:"EncodingError U+5F2C"});
r = r && ([...ms932Encoder.encode("弭")].join(",") === "156,88"); // U+5F2D
assert.throws(() => {ms932Encoder.encode("\u5F2E")}, {name:"Error",message:"EncodingError U+5F2E"});
r = r && ([...ms932Encoder.encode("弯")].join(",") === "156,94"); // U+5F2F
assert.throws(() => {ms932Encoder.encode("\u5F30")}, {name:"Error",message:"EncodingError U+5F30"});
r = r && ([...ms932Encoder.encode("弱")].join(",") === "142,227"); // U+5F31
assert.throws(() => {ms932Encoder.encode("\u5F32")}, {name:"Error",message:"EncodingError U+5F32"});
assert.throws(() => {ms932Encoder.encode("\u5F33")}, {name:"Error",message:"EncodingError U+5F33"});
r = r && ([...ms932Encoder.encode("弴張")].join(",") === "250,184,146,163"); // U+5F34
assert.throws(() => {ms932Encoder.encode("\u5F36")}, {name:"Error",message:"EncodingError U+5F36"});
r = r && ([...ms932Encoder.encode("強弸")].join(",") === "139,173,156,89"); // U+5F37
assert.throws(() => {ms932Encoder.encode("\u5F39")}, {name:"Error",message:"EncodingError U+5F39"});
assert.throws(() => {ms932Encoder.encode("\u5F3A")}, {name:"Error",message:"EncodingError U+5F3A"});
assert.throws(() => {ms932Encoder.encode("\u5F3B")}, {name:"Error",message:"EncodingError U+5F3B"});
r = r && ([...ms932Encoder.encode("弼")].join(",") === "149,74"); // U+5F3C
assert.throws(() => {ms932Encoder.encode("\u5F3D")}, {name:"Error",message:"EncodingError U+5F3D"});
r = r && ([...ms932Encoder.encode("弾")].join(",") === "146,101"); // U+5F3E
assert.throws(() => {ms932Encoder.encode("\u5F3F")}, {name:"Error",message:"EncodingError U+5F3F"});
assert.throws(() => {ms932Encoder.encode("\u5F40")}, {name:"Error",message:"EncodingError U+5F40"});
r = r && ([...ms932Encoder.encode("彁")].join(",") === "156,90"); // U+5F41
assert.throws(() => {ms932Encoder.encode("\u5F42")}, {name:"Error",message:"EncodingError U+5F42"});
assert.throws(() => {ms932Encoder.encode("\u5F43")}, {name:"Error",message:"EncodingError U+5F43"});
assert.throws(() => {ms932Encoder.encode("\u5F44")}, {name:"Error",message:"EncodingError U+5F44"});
r = r && ([...ms932Encoder.encode("彅")].join(",") === "250,103"); // U+5F45
assert.throws(() => {ms932Encoder.encode("\u5F46")}, {name:"Error",message:"EncodingError U+5F46"});
assert.throws(() => {ms932Encoder.encode("\u5F47")}, {name:"Error",message:"EncodingError U+5F47"});
r = r && ([...ms932Encoder.encode("彈")].join(",") === "156,91"); // U+5F48
assert.throws(() => {ms932Encoder.encode("\u5F49")}, {name:"Error",message:"EncodingError U+5F49"});
r = r && ([...ms932Encoder.encode("彊")].join(",") === "139,174"); // U+5F4A
assert.throws(() => {ms932Encoder.encode("\u5F4B")}, {name:"Error",message:"EncodingError U+5F4B"});
r = r && ([...ms932Encoder.encode("彌")].join(",") === "156,92"); // U+5F4C
assert.throws(() => {ms932Encoder.encode("\u5F4D")}, {name:"Error",message:"EncodingError U+5F4D"});
r = r && ([...ms932Encoder.encode("彎")].join(",") === "156,93"); // U+5F4E
assert.throws(() => {ms932Encoder.encode("\u5F4F")}, {name:"Error",message:"EncodingError U+5F4F"});
assert.throws(() => {ms932Encoder.encode("\u5F50")}, {name:"Error",message:"EncodingError U+5F50"});
r = r && ([...ms932Encoder.encode("彑")].join(",") === "156,95"); // U+5F51
assert.throws(() => {ms932Encoder.encode("\u5F52")}, {name:"Error",message:"EncodingError U+5F52"});
r = r && ([...ms932Encoder.encode("当")].join(",") === "147,150"); // U+5F53
assert.throws(() => {ms932Encoder.encode("\u5F54")}, {name:"Error",message:"EncodingError U+5F54"});
assert.throws(() => {ms932Encoder.encode("\u5F55")}, {name:"Error",message:"EncodingError U+5F55"});
r = r && ([...ms932Encoder.encode("彖彗")].join(",") === "156,96,156,97"); // U+5F56
assert.throws(() => {ms932Encoder.encode("\u5F58")}, {name:"Error",message:"EncodingError U+5F58"});
r = r && ([...ms932Encoder.encode("彙")].join(",") === "156,98"); // U+5F59
assert.throws(() => {ms932Encoder.encode("\u5F5A")}, {name:"Error",message:"EncodingError U+5F5A"});
assert.throws(() => {ms932Encoder.encode("\u5F5B")}, {name:"Error",message:"EncodingError U+5F5B"});
r = r && ([...ms932Encoder.encode("彜彝")].join(",") === "156,83,156,82"); // U+5F5C
assert.throws(() => {ms932Encoder.encode("\u5F5E")}, {name:"Error",message:"EncodingError U+5F5E"});
assert.throws(() => {ms932Encoder.encode("\u5F5F")}, {name:"Error",message:"EncodingError U+5F5F"});
assert.throws(() => {ms932Encoder.encode("\u5F60")}, {name:"Error",message:"EncodingError U+5F60"});
r = r && ([...ms932Encoder.encode("彡形")].join(",") === "156,99,140,96"); // U+5F61
assert.throws(() => {ms932Encoder.encode("\u5F63")}, {name:"Error",message:"EncodingError U+5F63"});
assert.throws(() => {ms932Encoder.encode("\u5F64")}, {name:"Error",message:"EncodingError U+5F64"});
assert.throws(() => {ms932Encoder.encode("\u5F65")}, {name:"Error",message:"EncodingError U+5F65"});
r = r && ([...ms932Encoder.encode("彦彧")].join(",") === "149,70,250,185"); // U+5F66
assert.throws(() => {ms932Encoder.encode("\u5F68")}, {name:"Error",message:"EncodingError U+5F68"});
r = r && ([...ms932Encoder.encode("彩彪彫彬彭")].join(",") === "141,202,149,86,146,164,149,106,156,100"); // U+5F69
assert.throws(() => {ms932Encoder.encode("\u5F6E")}, {name:"Error",message:"EncodingError U+5F6E"});
assert.throws(() => {ms932Encoder.encode("\u5F6F")}, {name:"Error",message:"EncodingError U+5F6F"});
r = r && ([...ms932Encoder.encode("彰影")].join(",") === "143,178,137,101"); // U+5F70
assert.throws(() => {ms932Encoder.encode("\u5F72")}, {name:"Error",message:"EncodingError U+5F72"});
r = r && ([...ms932Encoder.encode("彳")].join(",") === "156,101"); // U+5F73
assert.throws(() => {ms932Encoder.encode("\u5F74")}, {name:"Error",message:"EncodingError U+5F74"});
assert.throws(() => {ms932Encoder.encode("\u5F75")}, {name:"Error",message:"EncodingError U+5F75"});
assert.throws(() => {ms932Encoder.encode("\u5F76")}, {name:"Error",message:"EncodingError U+5F76"});
r = r && ([...ms932Encoder.encode("彷")].join(",") === "156,102"); // U+5F77
assert.throws(() => {ms932Encoder.encode("\u5F78")}, {name:"Error",message:"EncodingError U+5F78"});
r = r && ([...ms932Encoder.encode("役")].join(",") === "150,240"); // U+5F79
assert.throws(() => {ms932Encoder.encode("\u5F7A")}, {name:"Error",message:"EncodingError U+5F7A"});
assert.throws(() => {ms932Encoder.encode("\u5F7B")}, {name:"Error",message:"EncodingError U+5F7B"});
r = r && ([...ms932Encoder.encode("彼")].join(",") === "148,222"); // U+5F7C
assert.throws(() => {ms932Encoder.encode("\u5F7D")}, {name:"Error",message:"EncodingError U+5F7D"});
assert.throws(() => {ms932Encoder.encode("\u5F7E")}, {name:"Error",message:"EncodingError U+5F7E"});
r = r && ([...ms932Encoder.encode("彿往征徂徃径待")].join(",") === "156,105,137,157,144,170,156,104,156,103,140,97,145,210"); // U+5F7F
assert.throws(() => {ms932Encoder.encode("\u5F86")}, {name:"Error",message:"EncodingError U+5F86"});
r = r && ([...ms932Encoder.encode("徇很")].join(",") === "156,109,156,107"); // U+5F87
assert.throws(() => {ms932Encoder.encode("\u5F89")}, {name:"Error",message:"EncodingError U+5F89"});
r = r && ([...ms932Encoder.encode("徊律後")].join(",") === "156,106,151,165,140,227"); // U+5F8A
assert.throws(() => {ms932Encoder.encode("\u5F8D")}, {name:"Error",message:"EncodingError U+5F8D"});
assert.throws(() => {ms932Encoder.encode("\u5F8E")}, {name:"Error",message:"EncodingError U+5F8E"});
assert.throws(() => {ms932Encoder.encode("\u5F8F")}, {name:"Error",message:"EncodingError U+5F8F"});
r = r && ([...ms932Encoder.encode("徐徑徒従")].join(",") === "143,153,156,108,147,107,143,93"); // U+5F90
assert.throws(() => {ms932Encoder.encode("\u5F94")}, {name:"Error",message:"EncodingError U+5F94"});
assert.throws(() => {ms932Encoder.encode("\u5F95")}, {name:"Error",message:"EncodingError U+5F95"});
assert.throws(() => {ms932Encoder.encode("\u5F96")}, {name:"Error",message:"EncodingError U+5F96"});
r = r && ([...ms932Encoder.encode("得徘徙")].join(",") === "147,190,156,112,156,111"); // U+5F97
assert.throws(() => {ms932Encoder.encode("\u5F9A")}, {name:"Error",message:"EncodingError U+5F9A"});
assert.throws(() => {ms932Encoder.encode("\u5F9B")}, {name:"Error",message:"EncodingError U+5F9B"});
assert.throws(() => {ms932Encoder.encode("\u5F9C")}, {name:"Error",message:"EncodingError U+5F9C"});
assert.throws(() => {ms932Encoder.encode("\u5F9D")}, {name:"Error",message:"EncodingError U+5F9D"});
r = r && ([...ms932Encoder.encode("從")].join(",") === "156,110"); // U+5F9E
assert.throws(() => {ms932Encoder.encode("\u5F9F")}, {name:"Error",message:"EncodingError U+5F9F"});
r = r && ([...ms932Encoder.encode("徠御")].join(",") === "156,113,140,228"); // U+5FA0
assert.throws(() => {ms932Encoder.encode("\u5FA2")}, {name:"Error",message:"EncodingError U+5FA2"});
assert.throws(() => {ms932Encoder.encode("\u5FA3")}, {name:"Error",message:"EncodingError U+5FA3"});
assert.throws(() => {ms932Encoder.encode("\u5FA4")}, {name:"Error",message:"EncodingError U+5FA4"});
assert.throws(() => {ms932Encoder.encode("\u5FA5")}, {name:"Error",message:"EncodingError U+5FA5"});
assert.throws(() => {ms932Encoder.encode("\u5FA6")}, {name:"Error",message:"EncodingError U+5FA6"});
assert.throws(() => {ms932Encoder.encode("\u5FA7")}, {name:"Error",message:"EncodingError U+5FA7"});
r = r && ([...ms932Encoder.encode("徨復循")].join(",") === "156,114,149,156,143,122"); // U+5FA8
assert.throws(() => {ms932Encoder.encode("\u5FAB")}, {name:"Error",message:"EncodingError U+5FAB"});
assert.throws(() => {ms932Encoder.encode("\u5FAC")}, {name:"Error",message:"EncodingError U+5FAC"});
r = r && ([...ms932Encoder.encode("徭微")].join(",") === "156,115,148,247"); // U+5FAD
assert.throws(() => {ms932Encoder.encode("\u5FAF")}, {name:"Error",message:"EncodingError U+5FAF"});
assert.throws(() => {ms932Encoder.encode("\u5FB0")}, {name:"Error",message:"EncodingError U+5FB0"});
assert.throws(() => {ms932Encoder.encode("\u5FB1")}, {name:"Error",message:"EncodingError U+5FB1"});
assert.throws(() => {ms932Encoder.encode("\u5FB2")}, {name:"Error",message:"EncodingError U+5FB2"});
r = r && ([...ms932Encoder.encode("徳徴")].join(",") === "147,191,146,165"); // U+5FB3
assert.throws(() => {ms932Encoder.encode("\u5FB5")}, {name:"Error",message:"EncodingError U+5FB5"});
assert.throws(() => {ms932Encoder.encode("\u5FB6")}, {name:"Error",message:"EncodingError U+5FB6"});
r = r && ([...ms932Encoder.encode("德")].join(",") === "250,186"); // U+5FB7
assert.throws(() => {ms932Encoder.encode("\u5FB8")}, {name:"Error",message:"EncodingError U+5FB8"});
r = r && ([...ms932Encoder.encode("徹")].join(",") === "147,79"); // U+5FB9
assert.throws(() => {ms932Encoder.encode("\u5FBA")}, {name:"Error",message:"EncodingError U+5FBA"});
assert.throws(() => {ms932Encoder.encode("\u5FBB")}, {name:"Error",message:"EncodingError U+5FBB"});
r = r && ([...ms932Encoder.encode("徼徽")].join(",") === "156,116,139,74"); // U+5FBC
assert.throws(() => {ms932Encoder.encode("\u5FBE")}, {name:"Error",message:"EncodingError U+5FBE"});
assert.throws(() => {ms932Encoder.encode("\u5FBF")}, {name:"Error",message:"EncodingError U+5FBF"});
assert.throws(() => {ms932Encoder.encode("\u5FC0")}, {name:"Error",message:"EncodingError U+5FC0"});
assert.throws(() => {ms932Encoder.encode("\u5FC1")}, {name:"Error",message:"EncodingError U+5FC1"});
assert.throws(() => {ms932Encoder.encode("\u5FC2")}, {name:"Error",message:"EncodingError U+5FC2"});
r = r && ([...ms932Encoder.encode("心")].join(",") === "144,83"); // U+5FC3
assert.throws(() => {ms932Encoder.encode("\u5FC4")}, {name:"Error",message:"EncodingError U+5FC4"});
r = r && ([...ms932Encoder.encode("必")].join(",") === "149,75"); // U+5FC5
assert.throws(() => {ms932Encoder.encode("\u5FC6")}, {name:"Error",message:"EncodingError U+5FC6"});
assert.throws(() => {ms932Encoder.encode("\u5FC7")}, {name:"Error",message:"EncodingError U+5FC7"});
assert.throws(() => {ms932Encoder.encode("\u5FC8")}, {name:"Error",message:"EncodingError U+5FC8"});
assert.throws(() => {ms932Encoder.encode("\u5FC9")}, {name:"Error",message:"EncodingError U+5FC9"});
assert.throws(() => {ms932Encoder.encode("\u5FCA")}, {name:"Error",message:"EncodingError U+5FCA"});
assert.throws(() => {ms932Encoder.encode("\u5FCB")}, {name:"Error",message:"EncodingError U+5FCB"});
r = r && ([...ms932Encoder.encode("忌忍")].join(",") === "138,245,148,69"); // U+5FCC
assert.throws(() => {ms932Encoder.encode("\u5FCE")}, {name:"Error",message:"EncodingError U+5FCE"});
assert.throws(() => {ms932Encoder.encode("\u5FCF")}, {name:"Error",message:"EncodingError U+5FCF"});
assert.throws(() => {ms932Encoder.encode("\u5FD0")}, {name:"Error",message:"EncodingError U+5FD0"});
assert.throws(() => {ms932Encoder.encode("\u5FD1")}, {name:"Error",message:"EncodingError U+5FD1"});
assert.throws(() => {ms932Encoder.encode("\u5FD2")}, {name:"Error",message:"EncodingError U+5FD2"});
assert.throws(() => {ms932Encoder.encode("\u5FD3")}, {name:"Error",message:"EncodingError U+5FD3"});
assert.throws(() => {ms932Encoder.encode("\u5FD4")}, {name:"Error",message:"EncodingError U+5FD4"});
assert.throws(() => {ms932Encoder.encode("\u5FD5")}, {name:"Error",message:"EncodingError U+5FD5"});
r = r && ([...ms932Encoder.encode("忖志忘忙")].join(",") === "156,117,142,117,150,89,150,90"); // U+5FD6
assert.throws(() => {ms932Encoder.encode("\u5FDA")}, {name:"Error",message:"EncodingError U+5FDA"});
assert.throws(() => {ms932Encoder.encode("\u5FDB")}, {name:"Error",message:"EncodingError U+5FDB"});
r = r && ([...ms932Encoder.encode("応忝忞")].join(",") === "137,158,156,122,250,187"); // U+5FDC
assert.throws(() => {ms932Encoder.encode("\u5FDF")}, {name:"Error",message:"EncodingError U+5FDF"});
r = r && ([...ms932Encoder.encode("忠")].join(",") === "146,137"); // U+5FE0
assert.throws(() => {ms932Encoder.encode("\u5FE1")}, {name:"Error",message:"EncodingError U+5FE1"});
assert.throws(() => {ms932Encoder.encode("\u5FE2")}, {name:"Error",message:"EncodingError U+5FE2"});
assert.throws(() => {ms932Encoder.encode("\u5FE3")}, {name:"Error",message:"EncodingError U+5FE3"});
r = r && ([...ms932Encoder.encode("忤")].join(",") === "156,119"); // U+5FE4
assert.throws(() => {ms932Encoder.encode("\u5FE5")}, {name:"Error",message:"EncodingError U+5FE5"});
assert.throws(() => {ms932Encoder.encode("\u5FE6")}, {name:"Error",message:"EncodingError U+5FE6"});
assert.throws(() => {ms932Encoder.encode("\u5FE7")}, {name:"Error",message:"EncodingError U+5FE7"});
assert.throws(() => {ms932Encoder.encode("\u5FE8")}, {name:"Error",message:"EncodingError U+5FE8"});
assert.throws(() => {ms932Encoder.encode("\u5FE9")}, {name:"Error",message:"EncodingError U+5FE9"});
assert.throws(() => {ms932Encoder.encode("\u5FEA")}, {name:"Error",message:"EncodingError U+5FEA"});
r = r && ([...ms932Encoder.encode("快")].join(",") === "137,245"); // U+5FEB
assert.throws(() => {ms932Encoder.encode("\u5FEC")}, {name:"Error",message:"EncodingError U+5FEC"});
assert.throws(() => {ms932Encoder.encode("\u5FED")}, {name:"Error",message:"EncodingError U+5FED"});
assert.throws(() => {ms932Encoder.encode("\u5FEE")}, {name:"Error",message:"EncodingError U+5FEE"});
assert.throws(() => {ms932Encoder.encode("\u5FEF")}, {name:"Error",message:"EncodingError U+5FEF"});
r = r && ([...ms932Encoder.encode("忰忱")].join(",") === "156,171,156,121"); // U+5FF0
assert.throws(() => {ms932Encoder.encode("\u5FF2")}, {name:"Error",message:"EncodingError U+5FF2"});
assert.throws(() => {ms932Encoder.encode("\u5FF3")}, {name:"Error",message:"EncodingError U+5FF3"});
assert.throws(() => {ms932Encoder.encode("\u5FF4")}, {name:"Error",message:"EncodingError U+5FF4"});
r = r && ([...ms932Encoder.encode("念")].join(",") === "148,79"); // U+5FF5
assert.throws(() => {ms932Encoder.encode("\u5FF6")}, {name:"Error",message:"EncodingError U+5FF6"});
assert.throws(() => {ms932Encoder.encode("\u5FF7")}, {name:"Error",message:"EncodingError U+5FF7"});
r = r && ([...ms932Encoder.encode("忸")].join(",") === "156,120"); // U+5FF8
assert.throws(() => {ms932Encoder.encode("\u5FF9")}, {name:"Error",message:"EncodingError U+5FF9"});
assert.throws(() => {ms932Encoder.encode("\u5FFA")}, {name:"Error",message:"EncodingError U+5FFA"});
r = r && ([...ms932Encoder.encode("忻")].join(",") === "156,118"); // U+5FFB
assert.throws(() => {ms932Encoder.encode("\u5FFC")}, {name:"Error",message:"EncodingError U+5FFC"});
r = r && ([...ms932Encoder.encode("忽")].join(",") === "141,154"); // U+5FFD
assert.throws(() => {ms932Encoder.encode("\u5FFE")}, {name:"Error",message:"EncodingError U+5FFE"});
r = r && ([...ms932Encoder.encode("忿")].join(",") === "156,124"); // U+5FFF

assert.strictEqual(r, true);

  });

});
