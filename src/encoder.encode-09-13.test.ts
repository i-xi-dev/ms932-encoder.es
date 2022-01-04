import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 9", () => {

  it("encode(string) - U+8C00-U+8FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u8C00")}, {name:"Error",message:"EncodingError U+8C00"});
assert.throws(() => {ms932Encoder.encode("\u8C01")}, {name:"Error",message:"EncodingError U+8C01"});
assert.throws(() => {ms932Encoder.encode("\u8C02")}, {name:"Error",message:"EncodingError U+8C02"});
assert.throws(() => {ms932Encoder.encode("\u8C03")}, {name:"Error",message:"EncodingError U+8C03"});
assert.throws(() => {ms932Encoder.encode("\u8C04")}, {name:"Error",message:"EncodingError U+8C04"});
assert.throws(() => {ms932Encoder.encode("\u8C05")}, {name:"Error",message:"EncodingError U+8C05"});
assert.throws(() => {ms932Encoder.encode("\u8C06")}, {name:"Error",message:"EncodingError U+8C06"});
assert.throws(() => {ms932Encoder.encode("\u8C07")}, {name:"Error",message:"EncodingError U+8C07"});
assert.throws(() => {ms932Encoder.encode("\u8C08")}, {name:"Error",message:"EncodingError U+8C08"});
assert.throws(() => {ms932Encoder.encode("\u8C09")}, {name:"Error",message:"EncodingError U+8C09"});
assert.throws(() => {ms932Encoder.encode("\u8C0A")}, {name:"Error",message:"EncodingError U+8C0A"});
assert.throws(() => {ms932Encoder.encode("\u8C0B")}, {name:"Error",message:"EncodingError U+8C0B"});
assert.throws(() => {ms932Encoder.encode("\u8C0C")}, {name:"Error",message:"EncodingError U+8C0C"});
assert.throws(() => {ms932Encoder.encode("\u8C0D")}, {name:"Error",message:"EncodingError U+8C0D"});
assert.throws(() => {ms932Encoder.encode("\u8C0E")}, {name:"Error",message:"EncodingError U+8C0E"});
assert.throws(() => {ms932Encoder.encode("\u8C0F")}, {name:"Error",message:"EncodingError U+8C0F"});
assert.throws(() => {ms932Encoder.encode("\u8C10")}, {name:"Error",message:"EncodingError U+8C10"});
assert.throws(() => {ms932Encoder.encode("\u8C11")}, {name:"Error",message:"EncodingError U+8C11"});
assert.throws(() => {ms932Encoder.encode("\u8C12")}, {name:"Error",message:"EncodingError U+8C12"});
assert.throws(() => {ms932Encoder.encode("\u8C13")}, {name:"Error",message:"EncodingError U+8C13"});
assert.throws(() => {ms932Encoder.encode("\u8C14")}, {name:"Error",message:"EncodingError U+8C14"});
assert.throws(() => {ms932Encoder.encode("\u8C15")}, {name:"Error",message:"EncodingError U+8C15"});
assert.throws(() => {ms932Encoder.encode("\u8C16")}, {name:"Error",message:"EncodingError U+8C16"});
assert.throws(() => {ms932Encoder.encode("\u8C17")}, {name:"Error",message:"EncodingError U+8C17"});
assert.throws(() => {ms932Encoder.encode("\u8C18")}, {name:"Error",message:"EncodingError U+8C18"});
assert.throws(() => {ms932Encoder.encode("\u8C19")}, {name:"Error",message:"EncodingError U+8C19"});
assert.throws(() => {ms932Encoder.encode("\u8C1A")}, {name:"Error",message:"EncodingError U+8C1A"});
assert.throws(() => {ms932Encoder.encode("\u8C1B")}, {name:"Error",message:"EncodingError U+8C1B"});
assert.throws(() => {ms932Encoder.encode("\u8C1C")}, {name:"Error",message:"EncodingError U+8C1C"});
assert.throws(() => {ms932Encoder.encode("\u8C1D")}, {name:"Error",message:"EncodingError U+8C1D"});
assert.throws(() => {ms932Encoder.encode("\u8C1E")}, {name:"Error",message:"EncodingError U+8C1E"});
assert.throws(() => {ms932Encoder.encode("\u8C1F")}, {name:"Error",message:"EncodingError U+8C1F"});
assert.throws(() => {ms932Encoder.encode("\u8C20")}, {name:"Error",message:"EncodingError U+8C20"});
assert.throws(() => {ms932Encoder.encode("\u8C21")}, {name:"Error",message:"EncodingError U+8C21"});
assert.throws(() => {ms932Encoder.encode("\u8C22")}, {name:"Error",message:"EncodingError U+8C22"});
assert.throws(() => {ms932Encoder.encode("\u8C23")}, {name:"Error",message:"EncodingError U+8C23"});
assert.throws(() => {ms932Encoder.encode("\u8C24")}, {name:"Error",message:"EncodingError U+8C24"});
assert.throws(() => {ms932Encoder.encode("\u8C25")}, {name:"Error",message:"EncodingError U+8C25"});
assert.throws(() => {ms932Encoder.encode("\u8C26")}, {name:"Error",message:"EncodingError U+8C26"});
assert.throws(() => {ms932Encoder.encode("\u8C27")}, {name:"Error",message:"EncodingError U+8C27"});
assert.throws(() => {ms932Encoder.encode("\u8C28")}, {name:"Error",message:"EncodingError U+8C28"});
assert.throws(() => {ms932Encoder.encode("\u8C29")}, {name:"Error",message:"EncodingError U+8C29"});
assert.throws(() => {ms932Encoder.encode("\u8C2A")}, {name:"Error",message:"EncodingError U+8C2A"});
assert.throws(() => {ms932Encoder.encode("\u8C2B")}, {name:"Error",message:"EncodingError U+8C2B"});
assert.throws(() => {ms932Encoder.encode("\u8C2C")}, {name:"Error",message:"EncodingError U+8C2C"});
assert.throws(() => {ms932Encoder.encode("\u8C2D")}, {name:"Error",message:"EncodingError U+8C2D"});
assert.throws(() => {ms932Encoder.encode("\u8C2E")}, {name:"Error",message:"EncodingError U+8C2E"});
assert.throws(() => {ms932Encoder.encode("\u8C2F")}, {name:"Error",message:"EncodingError U+8C2F"});
assert.throws(() => {ms932Encoder.encode("\u8C30")}, {name:"Error",message:"EncodingError U+8C30"});
assert.throws(() => {ms932Encoder.encode("\u8C31")}, {name:"Error",message:"EncodingError U+8C31"});
assert.throws(() => {ms932Encoder.encode("\u8C32")}, {name:"Error",message:"EncodingError U+8C32"});
assert.throws(() => {ms932Encoder.encode("\u8C33")}, {name:"Error",message:"EncodingError U+8C33"});
assert.throws(() => {ms932Encoder.encode("\u8C34")}, {name:"Error",message:"EncodingError U+8C34"});
assert.throws(() => {ms932Encoder.encode("\u8C35")}, {name:"Error",message:"EncodingError U+8C35"});
assert.throws(() => {ms932Encoder.encode("\u8C36")}, {name:"Error",message:"EncodingError U+8C36"});
r = r && ([...ms932Encoder.encode("谷")].join(",") === "146,74"); // U+8C37
assert.throws(() => {ms932Encoder.encode("\u8C38")}, {name:"Error",message:"EncodingError U+8C38"});
assert.throws(() => {ms932Encoder.encode("\u8C39")}, {name:"Error",message:"EncodingError U+8C39"});
r = r && ([...ms932Encoder.encode("谺")].join(",") === "230,172"); // U+8C3A
assert.throws(() => {ms932Encoder.encode("\u8C3B")}, {name:"Error",message:"EncodingError U+8C3B"});
assert.throws(() => {ms932Encoder.encode("\u8C3C")}, {name:"Error",message:"EncodingError U+8C3C"});
assert.throws(() => {ms932Encoder.encode("\u8C3D")}, {name:"Error",message:"EncodingError U+8C3D"});
assert.throws(() => {ms932Encoder.encode("\u8C3E")}, {name:"Error",message:"EncodingError U+8C3E"});
r = r && ([...ms932Encoder.encode("谿")].join(",") === "230,174"); // U+8C3F
assert.throws(() => {ms932Encoder.encode("\u8C40")}, {name:"Error",message:"EncodingError U+8C40"});
r = r && ([...ms932Encoder.encode("豁")].join(",") === "230,173"); // U+8C41
assert.throws(() => {ms932Encoder.encode("\u8C42")}, {name:"Error",message:"EncodingError U+8C42"});
assert.throws(() => {ms932Encoder.encode("\u8C43")}, {name:"Error",message:"EncodingError U+8C43"});
assert.throws(() => {ms932Encoder.encode("\u8C44")}, {name:"Error",message:"EncodingError U+8C44"});
assert.throws(() => {ms932Encoder.encode("\u8C45")}, {name:"Error",message:"EncodingError U+8C45"});
r = r && ([...ms932Encoder.encode("豆")].join(",") === "147,164"); // U+8C46
assert.throws(() => {ms932Encoder.encode("\u8C47")}, {name:"Error",message:"EncodingError U+8C47"});
r = r && ([...ms932Encoder.encode("豈")].join(",") === "230,175"); // U+8C48
assert.throws(() => {ms932Encoder.encode("\u8C49")}, {name:"Error",message:"EncodingError U+8C49"});
r = r && ([...ms932Encoder.encode("豊")].join(",") === "150,76"); // U+8C4A
assert.throws(() => {ms932Encoder.encode("\u8C4B")}, {name:"Error",message:"EncodingError U+8C4B"});
r = r && ([...ms932Encoder.encode("豌")].join(",") === "230,176"); // U+8C4C
assert.throws(() => {ms932Encoder.encode("\u8C4D")}, {name:"Error",message:"EncodingError U+8C4D"});
r = r && ([...ms932Encoder.encode("豎")].join(",") === "230,177"); // U+8C4E
assert.throws(() => {ms932Encoder.encode("\u8C4F")}, {name:"Error",message:"EncodingError U+8C4F"});
r = r && ([...ms932Encoder.encode("豐")].join(",") === "230,178"); // U+8C50
assert.throws(() => {ms932Encoder.encode("\u8C51")}, {name:"Error",message:"EncodingError U+8C51"});
assert.throws(() => {ms932Encoder.encode("\u8C52")}, {name:"Error",message:"EncodingError U+8C52"});
assert.throws(() => {ms932Encoder.encode("\u8C53")}, {name:"Error",message:"EncodingError U+8C53"});
assert.throws(() => {ms932Encoder.encode("\u8C54")}, {name:"Error",message:"EncodingError U+8C54"});
r = r && ([...ms932Encoder.encode("豕")].join(",") === "230,179"); // U+8C55
assert.throws(() => {ms932Encoder.encode("\u8C56")}, {name:"Error",message:"EncodingError U+8C56"});
assert.throws(() => {ms932Encoder.encode("\u8C57")}, {name:"Error",message:"EncodingError U+8C57"});
assert.throws(() => {ms932Encoder.encode("\u8C58")}, {name:"Error",message:"EncodingError U+8C58"});
assert.throws(() => {ms932Encoder.encode("\u8C59")}, {name:"Error",message:"EncodingError U+8C59"});
r = r && ([...ms932Encoder.encode("豚")].join(",") === "147,216"); // U+8C5A
assert.throws(() => {ms932Encoder.encode("\u8C5B")}, {name:"Error",message:"EncodingError U+8C5B"});
assert.throws(() => {ms932Encoder.encode("\u8C5C")}, {name:"Error",message:"EncodingError U+8C5C"});
assert.throws(() => {ms932Encoder.encode("\u8C5D")}, {name:"Error",message:"EncodingError U+8C5D"});
assert.throws(() => {ms932Encoder.encode("\u8C5E")}, {name:"Error",message:"EncodingError U+8C5E"});
assert.throws(() => {ms932Encoder.encode("\u8C5F")}, {name:"Error",message:"EncodingError U+8C5F"});
assert.throws(() => {ms932Encoder.encode("\u8C60")}, {name:"Error",message:"EncodingError U+8C60"});
r = r && ([...ms932Encoder.encode("象豢")].join(",") === "143,219,230,180"); // U+8C61
assert.throws(() => {ms932Encoder.encode("\u8C63")}, {name:"Error",message:"EncodingError U+8C63"});
assert.throws(() => {ms932Encoder.encode("\u8C64")}, {name:"Error",message:"EncodingError U+8C64"});
assert.throws(() => {ms932Encoder.encode("\u8C65")}, {name:"Error",message:"EncodingError U+8C65"});
assert.throws(() => {ms932Encoder.encode("\u8C66")}, {name:"Error",message:"EncodingError U+8C66"});
assert.throws(() => {ms932Encoder.encode("\u8C67")}, {name:"Error",message:"EncodingError U+8C67"});
assert.throws(() => {ms932Encoder.encode("\u8C68")}, {name:"Error",message:"EncodingError U+8C68"});
assert.throws(() => {ms932Encoder.encode("\u8C69")}, {name:"Error",message:"EncodingError U+8C69"});
r = r && ([...ms932Encoder.encode("豪豫豬")].join(",") === "141,139,152,172,230,181"); // U+8C6A
assert.throws(() => {ms932Encoder.encode("\u8C6D")}, {name:"Error",message:"EncodingError U+8C6D"});
assert.throws(() => {ms932Encoder.encode("\u8C6E")}, {name:"Error",message:"EncodingError U+8C6E"});
assert.throws(() => {ms932Encoder.encode("\u8C6F")}, {name:"Error",message:"EncodingError U+8C6F"});
assert.throws(() => {ms932Encoder.encode("\u8C70")}, {name:"Error",message:"EncodingError U+8C70"});
assert.throws(() => {ms932Encoder.encode("\u8C71")}, {name:"Error",message:"EncodingError U+8C71"});
assert.throws(() => {ms932Encoder.encode("\u8C72")}, {name:"Error",message:"EncodingError U+8C72"});
assert.throws(() => {ms932Encoder.encode("\u8C73")}, {name:"Error",message:"EncodingError U+8C73"});
assert.throws(() => {ms932Encoder.encode("\u8C74")}, {name:"Error",message:"EncodingError U+8C74"});
assert.throws(() => {ms932Encoder.encode("\u8C75")}, {name:"Error",message:"EncodingError U+8C75"});
assert.throws(() => {ms932Encoder.encode("\u8C76")}, {name:"Error",message:"EncodingError U+8C76"});
assert.throws(() => {ms932Encoder.encode("\u8C77")}, {name:"Error",message:"EncodingError U+8C77"});
r = r && ([...ms932Encoder.encode("豸豹豺")].join(",") === "230,182,149,94,230,183"); // U+8C78
assert.throws(() => {ms932Encoder.encode("\u8C7B")}, {name:"Error",message:"EncodingError U+8C7B"});
r = r && ([...ms932Encoder.encode("豼")].join(",") === "230,191"); // U+8C7C
assert.throws(() => {ms932Encoder.encode("\u8C7D")}, {name:"Error",message:"EncodingError U+8C7D"});
assert.throws(() => {ms932Encoder.encode("\u8C7E")}, {name:"Error",message:"EncodingError U+8C7E"});
assert.throws(() => {ms932Encoder.encode("\u8C7F")}, {name:"Error",message:"EncodingError U+8C7F"});
assert.throws(() => {ms932Encoder.encode("\u8C80")}, {name:"Error",message:"EncodingError U+8C80"});
assert.throws(() => {ms932Encoder.encode("\u8C81")}, {name:"Error",message:"EncodingError U+8C81"});
r = r && ([...ms932Encoder.encode("貂")].join(",") === "230,184"); // U+8C82
assert.throws(() => {ms932Encoder.encode("\u8C83")}, {name:"Error",message:"EncodingError U+8C83"});
assert.throws(() => {ms932Encoder.encode("\u8C84")}, {name:"Error",message:"EncodingError U+8C84"});
r = r && ([...ms932Encoder.encode("貅")].join(",") === "230,186"); // U+8C85
assert.throws(() => {ms932Encoder.encode("\u8C86")}, {name:"Error",message:"EncodingError U+8C86"});
assert.throws(() => {ms932Encoder.encode("\u8C87")}, {name:"Error",message:"EncodingError U+8C87"});
assert.throws(() => {ms932Encoder.encode("\u8C88")}, {name:"Error",message:"EncodingError U+8C88"});
r = r && ([...ms932Encoder.encode("貉貊")].join(",") === "230,185,230,187"); // U+8C89
assert.throws(() => {ms932Encoder.encode("\u8C8B")}, {name:"Error",message:"EncodingError U+8C8B"});
r = r && ([...ms932Encoder.encode("貌貍貎")].join(",") === "150,101,230,188,230,189"); // U+8C8C
assert.throws(() => {ms932Encoder.encode("\u8C8F")}, {name:"Error",message:"EncodingError U+8C8F"});
assert.throws(() => {ms932Encoder.encode("\u8C90")}, {name:"Error",message:"EncodingError U+8C90"});
assert.throws(() => {ms932Encoder.encode("\u8C91")}, {name:"Error",message:"EncodingError U+8C91"});
assert.throws(() => {ms932Encoder.encode("\u8C92")}, {name:"Error",message:"EncodingError U+8C92"});
assert.throws(() => {ms932Encoder.encode("\u8C93")}, {name:"Error",message:"EncodingError U+8C93"});
r = r && ([...ms932Encoder.encode("貔")].join(",") === "230,190"); // U+8C94
assert.throws(() => {ms932Encoder.encode("\u8C95")}, {name:"Error",message:"EncodingError U+8C95"});
assert.throws(() => {ms932Encoder.encode("\u8C96")}, {name:"Error",message:"EncodingError U+8C96"});
assert.throws(() => {ms932Encoder.encode("\u8C97")}, {name:"Error",message:"EncodingError U+8C97"});
r = r && ([...ms932Encoder.encode("貘")].join(",") === "230,192"); // U+8C98
assert.throws(() => {ms932Encoder.encode("\u8C99")}, {name:"Error",message:"EncodingError U+8C99"});
assert.throws(() => {ms932Encoder.encode("\u8C9A")}, {name:"Error",message:"EncodingError U+8C9A"});
assert.throws(() => {ms932Encoder.encode("\u8C9B")}, {name:"Error",message:"EncodingError U+8C9B"});
assert.throws(() => {ms932Encoder.encode("\u8C9C")}, {name:"Error",message:"EncodingError U+8C9C"});
r = r && ([...ms932Encoder.encode("貝貞")].join(",") === "138,76,146,229"); // U+8C9D
assert.throws(() => {ms932Encoder.encode("\u8C9F")}, {name:"Error",message:"EncodingError U+8C9F"});
r = r && ([...ms932Encoder.encode("負財貢")].join(",") === "149,137,141,224,141,118"); // U+8CA0
assert.throws(() => {ms932Encoder.encode("\u8CA3")}, {name:"Error",message:"EncodingError U+8CA3"});
assert.throws(() => {ms932Encoder.encode("\u8CA4")}, {name:"Error",message:"EncodingError U+8CA4"});
assert.throws(() => {ms932Encoder.encode("\u8CA5")}, {name:"Error",message:"EncodingError U+8CA5"});
assert.throws(() => {ms932Encoder.encode("\u8CA6")}, {name:"Error",message:"EncodingError U+8CA6"});
r = r && ([...ms932Encoder.encode("貧貨販貪貫責貭貮貯貰")].join(",") === "149,110,137,221,148,204,230,195,138,209,144,211,230,194,230,199,146,153,150,225"); // U+8CA7
assert.throws(() => {ms932Encoder.encode("\u8CB1")}, {name:"Error",message:"EncodingError U+8CB1"});
r = r && ([...ms932Encoder.encode("貲貳貴")].join(",") === "230,197,230,198,139,77"); // U+8CB2
assert.throws(() => {ms932Encoder.encode("\u8CB5")}, {name:"Error",message:"EncodingError U+8CB5"});
r = r && ([...ms932Encoder.encode("貶買貸")].join(",") === "230,200,148,131,145,221"); // U+8CB6
assert.throws(() => {ms932Encoder.encode("\u8CB9")}, {name:"Error",message:"EncodingError U+8CB9"});
assert.throws(() => {ms932Encoder.encode("\u8CBA")}, {name:"Error",message:"EncodingError U+8CBA"});
r = r && ([...ms932Encoder.encode("費貼貽")].join(",") === "148,239,147,92,230,196"); // U+8CBB
assert.throws(() => {ms932Encoder.encode("\u8CBE")}, {name:"Error",message:"EncodingError U+8CBE"});
r = r && ([...ms932Encoder.encode("貿賀賁賂賃賄")].join(",") === "150,102,137,234,230,202,152,71,146,192,152,100"); // U+8CBF
assert.throws(() => {ms932Encoder.encode("\u8CC5")}, {name:"Error",message:"EncodingError U+8CC5"});
assert.throws(() => {ms932Encoder.encode("\u8CC6")}, {name:"Error",message:"EncodingError U+8CC6"});
r = r && ([...ms932Encoder.encode("資賈")].join(",") === "142,145,230,201"); // U+8CC7
assert.throws(() => {ms932Encoder.encode("\u8CC9")}, {name:"Error",message:"EncodingError U+8CC9"});
r = r && ([...ms932Encoder.encode("賊")].join(",") === "145,175"); // U+8CCA
assert.throws(() => {ms932Encoder.encode("\u8CCB")}, {name:"Error",message:"EncodingError U+8CCB"});
assert.throws(() => {ms932Encoder.encode("\u8CCC")}, {name:"Error",message:"EncodingError U+8CCC"});
r = r && ([...ms932Encoder.encode("賍賎")].join(",") === "230,218,145,71"); // U+8CCD
assert.throws(() => {ms932Encoder.encode("\u8CCF")}, {name:"Error",message:"EncodingError U+8CCF"});
assert.throws(() => {ms932Encoder.encode("\u8CD0")}, {name:"Error",message:"EncodingError U+8CD0"});
r = r && ([...ms932Encoder.encode("賑")].join(",") === "147,246"); // U+8CD1
assert.throws(() => {ms932Encoder.encode("\u8CD2")}, {name:"Error",message:"EncodingError U+8CD2"});
r = r && ([...ms932Encoder.encode("賓")].join(",") === "149,111"); // U+8CD3
assert.throws(() => {ms932Encoder.encode("\u8CD4")}, {name:"Error",message:"EncodingError U+8CD4"});
assert.throws(() => {ms932Encoder.encode("\u8CD5")}, {name:"Error",message:"EncodingError U+8CD5"});
assert.throws(() => {ms932Encoder.encode("\u8CD6")}, {name:"Error",message:"EncodingError U+8CD6"});
assert.throws(() => {ms932Encoder.encode("\u8CD7")}, {name:"Error",message:"EncodingError U+8CD7"});
assert.throws(() => {ms932Encoder.encode("\u8CD8")}, {name:"Error",message:"EncodingError U+8CD8"});
assert.throws(() => {ms932Encoder.encode("\u8CD9")}, {name:"Error",message:"EncodingError U+8CD9"});
r = r && ([...ms932Encoder.encode("賚賛賜")].join(",") === "230,205,142,94,142,146"); // U+8CDA
assert.throws(() => {ms932Encoder.encode("\u8CDD")}, {name:"Error",message:"EncodingError U+8CDD"});
r = r && ([...ms932Encoder.encode("賞")].join(",") === "143,220"); // U+8CDE
assert.throws(() => {ms932Encoder.encode("\u8CDF")}, {name:"Error",message:"EncodingError U+8CDF"});
r = r && ([...ms932Encoder.encode("賠")].join(",") === "148,133"); // U+8CE0
assert.throws(() => {ms932Encoder.encode("\u8CE1")}, {name:"Error",message:"EncodingError U+8CE1"});
r = r && ([...ms932Encoder.encode("賢賣賤")].join(",") === "140,171,230,204,230,203"); // U+8CE2
assert.throws(() => {ms932Encoder.encode("\u8CE5")}, {name:"Error",message:"EncodingError U+8CE5"});
r = r && ([...ms932Encoder.encode("賦")].join(",") === "149,138"); // U+8CE6
assert.throws(() => {ms932Encoder.encode("\u8CE7")}, {name:"Error",message:"EncodingError U+8CE7"});
assert.throws(() => {ms932Encoder.encode("\u8CE8")}, {name:"Error",message:"EncodingError U+8CE8"});
assert.throws(() => {ms932Encoder.encode("\u8CE9")}, {name:"Error",message:"EncodingError U+8CE9"});
r = r && ([...ms932Encoder.encode("質")].join(",") === "142,191"); // U+8CEA
assert.throws(() => {ms932Encoder.encode("\u8CEB")}, {name:"Error",message:"EncodingError U+8CEB"});
assert.throws(() => {ms932Encoder.encode("\u8CEC")}, {name:"Error",message:"EncodingError U+8CEC"});
r = r && ([...ms932Encoder.encode("賭")].join(",") === "147,113"); // U+8CED
assert.throws(() => {ms932Encoder.encode("\u8CEE")}, {name:"Error",message:"EncodingError U+8CEE"});
assert.throws(() => {ms932Encoder.encode("\u8CEF")}, {name:"Error",message:"EncodingError U+8CEF"});
r = r && ([...ms932Encoder.encode("賰")].join(",") === "251,173"); // U+8CF0
assert.throws(() => {ms932Encoder.encode("\u8CF1")}, {name:"Error",message:"EncodingError U+8CF1"});
assert.throws(() => {ms932Encoder.encode("\u8CF2")}, {name:"Error",message:"EncodingError U+8CF2"});
assert.throws(() => {ms932Encoder.encode("\u8CF3")}, {name:"Error",message:"EncodingError U+8CF3"});
r = r && ([...ms932Encoder.encode("賴")].join(",") === "251,174"); // U+8CF4
assert.throws(() => {ms932Encoder.encode("\u8CF5")}, {name:"Error",message:"EncodingError U+8CF5"});
assert.throws(() => {ms932Encoder.encode("\u8CF6")}, {name:"Error",message:"EncodingError U+8CF6"});
assert.throws(() => {ms932Encoder.encode("\u8CF7")}, {name:"Error",message:"EncodingError U+8CF7"});
assert.throws(() => {ms932Encoder.encode("\u8CF8")}, {name:"Error",message:"EncodingError U+8CF8"});
assert.throws(() => {ms932Encoder.encode("\u8CF9")}, {name:"Error",message:"EncodingError U+8CF9"});
r = r && ([...ms932Encoder.encode("賺賻購賽")].join(",") === "230,207,230,208,141,119,230,206"); // U+8CFA
assert.throws(() => {ms932Encoder.encode("\u8CFE")}, {name:"Error",message:"EncodingError U+8CFE"});
assert.throws(() => {ms932Encoder.encode("\u8CFF")}, {name:"Error",message:"EncodingError U+8CFF"});
assert.throws(() => {ms932Encoder.encode("\u8D00")}, {name:"Error",message:"EncodingError U+8D00"});
assert.throws(() => {ms932Encoder.encode("\u8D01")}, {name:"Error",message:"EncodingError U+8D01"});
assert.throws(() => {ms932Encoder.encode("\u8D02")}, {name:"Error",message:"EncodingError U+8D02"});
assert.throws(() => {ms932Encoder.encode("\u8D03")}, {name:"Error",message:"EncodingError U+8D03"});
r = r && ([...ms932Encoder.encode("贄贅")].join(",") === "230,209,230,210"); // U+8D04
assert.throws(() => {ms932Encoder.encode("\u8D06")}, {name:"Error",message:"EncodingError U+8D06"});
r = r && ([...ms932Encoder.encode("贇贈")].join(",") === "230,212,145,161"); // U+8D07
assert.throws(() => {ms932Encoder.encode("\u8D09")}, {name:"Error",message:"EncodingError U+8D09"});
r = r && ([...ms932Encoder.encode("贊贋")].join(",") === "230,211,138,228"); // U+8D0A
assert.throws(() => {ms932Encoder.encode("\u8D0C")}, {name:"Error",message:"EncodingError U+8D0C"});
r = r && ([...ms932Encoder.encode("贍")].join(",") === "230,214"); // U+8D0D
assert.throws(() => {ms932Encoder.encode("\u8D0E")}, {name:"Error",message:"EncodingError U+8D0E"});
r = r && ([...ms932Encoder.encode("贏贐")].join(",") === "230,213,230,215"); // U+8D0F
assert.throws(() => {ms932Encoder.encode("\u8D11")}, {name:"Error",message:"EncodingError U+8D11"});
r = r && ([...ms932Encoder.encode("贒贓贔")].join(",") === "251,175,230,217,230,219"); // U+8D12
assert.throws(() => {ms932Encoder.encode("\u8D15")}, {name:"Error",message:"EncodingError U+8D15"});
r = r && ([...ms932Encoder.encode("贖")].join(",") === "230,220"); // U+8D16
assert.throws(() => {ms932Encoder.encode("\u8D17")}, {name:"Error",message:"EncodingError U+8D17"});
assert.throws(() => {ms932Encoder.encode("\u8D18")}, {name:"Error",message:"EncodingError U+8D18"});
assert.throws(() => {ms932Encoder.encode("\u8D19")}, {name:"Error",message:"EncodingError U+8D19"});
assert.throws(() => {ms932Encoder.encode("\u8D1A")}, {name:"Error",message:"EncodingError U+8D1A"});
assert.throws(() => {ms932Encoder.encode("\u8D1B")}, {name:"Error",message:"EncodingError U+8D1B"});
assert.throws(() => {ms932Encoder.encode("\u8D1C")}, {name:"Error",message:"EncodingError U+8D1C"});
assert.throws(() => {ms932Encoder.encode("\u8D1D")}, {name:"Error",message:"EncodingError U+8D1D"});
assert.throws(() => {ms932Encoder.encode("\u8D1E")}, {name:"Error",message:"EncodingError U+8D1E"});
assert.throws(() => {ms932Encoder.encode("\u8D1F")}, {name:"Error",message:"EncodingError U+8D1F"});
assert.throws(() => {ms932Encoder.encode("\u8D20")}, {name:"Error",message:"EncodingError U+8D20"});
assert.throws(() => {ms932Encoder.encode("\u8D21")}, {name:"Error",message:"EncodingError U+8D21"});
assert.throws(() => {ms932Encoder.encode("\u8D22")}, {name:"Error",message:"EncodingError U+8D22"});
assert.throws(() => {ms932Encoder.encode("\u8D23")}, {name:"Error",message:"EncodingError U+8D23"});
assert.throws(() => {ms932Encoder.encode("\u8D24")}, {name:"Error",message:"EncodingError U+8D24"});
assert.throws(() => {ms932Encoder.encode("\u8D25")}, {name:"Error",message:"EncodingError U+8D25"});
assert.throws(() => {ms932Encoder.encode("\u8D26")}, {name:"Error",message:"EncodingError U+8D26"});
assert.throws(() => {ms932Encoder.encode("\u8D27")}, {name:"Error",message:"EncodingError U+8D27"});
assert.throws(() => {ms932Encoder.encode("\u8D28")}, {name:"Error",message:"EncodingError U+8D28"});
assert.throws(() => {ms932Encoder.encode("\u8D29")}, {name:"Error",message:"EncodingError U+8D29"});
assert.throws(() => {ms932Encoder.encode("\u8D2A")}, {name:"Error",message:"EncodingError U+8D2A"});
assert.throws(() => {ms932Encoder.encode("\u8D2B")}, {name:"Error",message:"EncodingError U+8D2B"});
assert.throws(() => {ms932Encoder.encode("\u8D2C")}, {name:"Error",message:"EncodingError U+8D2C"});
assert.throws(() => {ms932Encoder.encode("\u8D2D")}, {name:"Error",message:"EncodingError U+8D2D"});
assert.throws(() => {ms932Encoder.encode("\u8D2E")}, {name:"Error",message:"EncodingError U+8D2E"});
assert.throws(() => {ms932Encoder.encode("\u8D2F")}, {name:"Error",message:"EncodingError U+8D2F"});
assert.throws(() => {ms932Encoder.encode("\u8D30")}, {name:"Error",message:"EncodingError U+8D30"});
assert.throws(() => {ms932Encoder.encode("\u8D31")}, {name:"Error",message:"EncodingError U+8D31"});
assert.throws(() => {ms932Encoder.encode("\u8D32")}, {name:"Error",message:"EncodingError U+8D32"});
assert.throws(() => {ms932Encoder.encode("\u8D33")}, {name:"Error",message:"EncodingError U+8D33"});
assert.throws(() => {ms932Encoder.encode("\u8D34")}, {name:"Error",message:"EncodingError U+8D34"});
assert.throws(() => {ms932Encoder.encode("\u8D35")}, {name:"Error",message:"EncodingError U+8D35"});
assert.throws(() => {ms932Encoder.encode("\u8D36")}, {name:"Error",message:"EncodingError U+8D36"});
assert.throws(() => {ms932Encoder.encode("\u8D37")}, {name:"Error",message:"EncodingError U+8D37"});
assert.throws(() => {ms932Encoder.encode("\u8D38")}, {name:"Error",message:"EncodingError U+8D38"});
assert.throws(() => {ms932Encoder.encode("\u8D39")}, {name:"Error",message:"EncodingError U+8D39"});
assert.throws(() => {ms932Encoder.encode("\u8D3A")}, {name:"Error",message:"EncodingError U+8D3A"});
assert.throws(() => {ms932Encoder.encode("\u8D3B")}, {name:"Error",message:"EncodingError U+8D3B"});
assert.throws(() => {ms932Encoder.encode("\u8D3C")}, {name:"Error",message:"EncodingError U+8D3C"});
assert.throws(() => {ms932Encoder.encode("\u8D3D")}, {name:"Error",message:"EncodingError U+8D3D"});
assert.throws(() => {ms932Encoder.encode("\u8D3E")}, {name:"Error",message:"EncodingError U+8D3E"});
assert.throws(() => {ms932Encoder.encode("\u8D3F")}, {name:"Error",message:"EncodingError U+8D3F"});
assert.throws(() => {ms932Encoder.encode("\u8D40")}, {name:"Error",message:"EncodingError U+8D40"});
assert.throws(() => {ms932Encoder.encode("\u8D41")}, {name:"Error",message:"EncodingError U+8D41"});
assert.throws(() => {ms932Encoder.encode("\u8D42")}, {name:"Error",message:"EncodingError U+8D42"});
assert.throws(() => {ms932Encoder.encode("\u8D43")}, {name:"Error",message:"EncodingError U+8D43"});
assert.throws(() => {ms932Encoder.encode("\u8D44")}, {name:"Error",message:"EncodingError U+8D44"});
assert.throws(() => {ms932Encoder.encode("\u8D45")}, {name:"Error",message:"EncodingError U+8D45"});
assert.throws(() => {ms932Encoder.encode("\u8D46")}, {name:"Error",message:"EncodingError U+8D46"});
assert.throws(() => {ms932Encoder.encode("\u8D47")}, {name:"Error",message:"EncodingError U+8D47"});
assert.throws(() => {ms932Encoder.encode("\u8D48")}, {name:"Error",message:"EncodingError U+8D48"});
assert.throws(() => {ms932Encoder.encode("\u8D49")}, {name:"Error",message:"EncodingError U+8D49"});
assert.throws(() => {ms932Encoder.encode("\u8D4A")}, {name:"Error",message:"EncodingError U+8D4A"});
assert.throws(() => {ms932Encoder.encode("\u8D4B")}, {name:"Error",message:"EncodingError U+8D4B"});
assert.throws(() => {ms932Encoder.encode("\u8D4C")}, {name:"Error",message:"EncodingError U+8D4C"});
assert.throws(() => {ms932Encoder.encode("\u8D4D")}, {name:"Error",message:"EncodingError U+8D4D"});
assert.throws(() => {ms932Encoder.encode("\u8D4E")}, {name:"Error",message:"EncodingError U+8D4E"});
assert.throws(() => {ms932Encoder.encode("\u8D4F")}, {name:"Error",message:"EncodingError U+8D4F"});
assert.throws(() => {ms932Encoder.encode("\u8D50")}, {name:"Error",message:"EncodingError U+8D50"});
assert.throws(() => {ms932Encoder.encode("\u8D51")}, {name:"Error",message:"EncodingError U+8D51"});
assert.throws(() => {ms932Encoder.encode("\u8D52")}, {name:"Error",message:"EncodingError U+8D52"});
assert.throws(() => {ms932Encoder.encode("\u8D53")}, {name:"Error",message:"EncodingError U+8D53"});
assert.throws(() => {ms932Encoder.encode("\u8D54")}, {name:"Error",message:"EncodingError U+8D54"});
assert.throws(() => {ms932Encoder.encode("\u8D55")}, {name:"Error",message:"EncodingError U+8D55"});
assert.throws(() => {ms932Encoder.encode("\u8D56")}, {name:"Error",message:"EncodingError U+8D56"});
assert.throws(() => {ms932Encoder.encode("\u8D57")}, {name:"Error",message:"EncodingError U+8D57"});
assert.throws(() => {ms932Encoder.encode("\u8D58")}, {name:"Error",message:"EncodingError U+8D58"});
assert.throws(() => {ms932Encoder.encode("\u8D59")}, {name:"Error",message:"EncodingError U+8D59"});
assert.throws(() => {ms932Encoder.encode("\u8D5A")}, {name:"Error",message:"EncodingError U+8D5A"});
assert.throws(() => {ms932Encoder.encode("\u8D5B")}, {name:"Error",message:"EncodingError U+8D5B"});
assert.throws(() => {ms932Encoder.encode("\u8D5C")}, {name:"Error",message:"EncodingError U+8D5C"});
assert.throws(() => {ms932Encoder.encode("\u8D5D")}, {name:"Error",message:"EncodingError U+8D5D"});
assert.throws(() => {ms932Encoder.encode("\u8D5E")}, {name:"Error",message:"EncodingError U+8D5E"});
assert.throws(() => {ms932Encoder.encode("\u8D5F")}, {name:"Error",message:"EncodingError U+8D5F"});
assert.throws(() => {ms932Encoder.encode("\u8D60")}, {name:"Error",message:"EncodingError U+8D60"});
assert.throws(() => {ms932Encoder.encode("\u8D61")}, {name:"Error",message:"EncodingError U+8D61"});
assert.throws(() => {ms932Encoder.encode("\u8D62")}, {name:"Error",message:"EncodingError U+8D62"});
assert.throws(() => {ms932Encoder.encode("\u8D63")}, {name:"Error",message:"EncodingError U+8D63"});
r = r && ([...ms932Encoder.encode("赤")].join(",") === "144,212"); // U+8D64
assert.throws(() => {ms932Encoder.encode("\u8D65")}, {name:"Error",message:"EncodingError U+8D65"});
r = r && ([...ms932Encoder.encode("赦赧")].join(",") === "142,205,230,221"); // U+8D66
assert.throws(() => {ms932Encoder.encode("\u8D68")}, {name:"Error",message:"EncodingError U+8D68"});
assert.throws(() => {ms932Encoder.encode("\u8D69")}, {name:"Error",message:"EncodingError U+8D69"});
assert.throws(() => {ms932Encoder.encode("\u8D6A")}, {name:"Error",message:"EncodingError U+8D6A"});
r = r && ([...ms932Encoder.encode("赫")].join(",") === "138,113"); // U+8D6B
assert.throws(() => {ms932Encoder.encode("\u8D6C")}, {name:"Error",message:"EncodingError U+8D6C"});
r = r && ([...ms932Encoder.encode("赭")].join(",") === "230,222"); // U+8D6D
assert.throws(() => {ms932Encoder.encode("\u8D6E")}, {name:"Error",message:"EncodingError U+8D6E"});
assert.throws(() => {ms932Encoder.encode("\u8D6F")}, {name:"Error",message:"EncodingError U+8D6F"});
r = r && ([...ms932Encoder.encode("走赱")].join(",") === "145,150,230,223"); // U+8D70
assert.throws(() => {ms932Encoder.encode("\u8D72")}, {name:"Error",message:"EncodingError U+8D72"});
r = r && ([...ms932Encoder.encode("赳赴")].join(",") === "230,224,149,139"); // U+8D73
assert.throws(() => {ms932Encoder.encode("\u8D75")}, {name:"Error",message:"EncodingError U+8D75"});
r = r && ([...ms932Encoder.encode("赶起")].join(",") === "251,176,139,78"); // U+8D76
assert.throws(() => {ms932Encoder.encode("\u8D78")}, {name:"Error",message:"EncodingError U+8D78"});
assert.throws(() => {ms932Encoder.encode("\u8D79")}, {name:"Error",message:"EncodingError U+8D79"});
assert.throws(() => {ms932Encoder.encode("\u8D7A")}, {name:"Error",message:"EncodingError U+8D7A"});
assert.throws(() => {ms932Encoder.encode("\u8D7B")}, {name:"Error",message:"EncodingError U+8D7B"});
assert.throws(() => {ms932Encoder.encode("\u8D7C")}, {name:"Error",message:"EncodingError U+8D7C"});
assert.throws(() => {ms932Encoder.encode("\u8D7D")}, {name:"Error",message:"EncodingError U+8D7D"});
assert.throws(() => {ms932Encoder.encode("\u8D7E")}, {name:"Error",message:"EncodingError U+8D7E"});
assert.throws(() => {ms932Encoder.encode("\u8D7F")}, {name:"Error",message:"EncodingError U+8D7F"});
assert.throws(() => {ms932Encoder.encode("\u8D80")}, {name:"Error",message:"EncodingError U+8D80"});
r = r && ([...ms932Encoder.encode("趁")].join(",") === "230,225"); // U+8D81
assert.throws(() => {ms932Encoder.encode("\u8D82")}, {name:"Error",message:"EncodingError U+8D82"});
assert.throws(() => {ms932Encoder.encode("\u8D83")}, {name:"Error",message:"EncodingError U+8D83"});
assert.throws(() => {ms932Encoder.encode("\u8D84")}, {name:"Error",message:"EncodingError U+8D84"});
r = r && ([...ms932Encoder.encode("超")].join(",") === "146,180"); // U+8D85
assert.throws(() => {ms932Encoder.encode("\u8D86")}, {name:"Error",message:"EncodingError U+8D86"});
assert.throws(() => {ms932Encoder.encode("\u8D87")}, {name:"Error",message:"EncodingError U+8D87"});
assert.throws(() => {ms932Encoder.encode("\u8D88")}, {name:"Error",message:"EncodingError U+8D88"});
assert.throws(() => {ms932Encoder.encode("\u8D89")}, {name:"Error",message:"EncodingError U+8D89"});
r = r && ([...ms932Encoder.encode("越")].join(",") === "137,122"); // U+8D8A
assert.throws(() => {ms932Encoder.encode("\u8D8B")}, {name:"Error",message:"EncodingError U+8D8B"});
assert.throws(() => {ms932Encoder.encode("\u8D8C")}, {name:"Error",message:"EncodingError U+8D8C"});
assert.throws(() => {ms932Encoder.encode("\u8D8D")}, {name:"Error",message:"EncodingError U+8D8D"});
assert.throws(() => {ms932Encoder.encode("\u8D8E")}, {name:"Error",message:"EncodingError U+8D8E"});
assert.throws(() => {ms932Encoder.encode("\u8D8F")}, {name:"Error",message:"EncodingError U+8D8F"});
assert.throws(() => {ms932Encoder.encode("\u8D90")}, {name:"Error",message:"EncodingError U+8D90"});
assert.throws(() => {ms932Encoder.encode("\u8D91")}, {name:"Error",message:"EncodingError U+8D91"});
assert.throws(() => {ms932Encoder.encode("\u8D92")}, {name:"Error",message:"EncodingError U+8D92"});
assert.throws(() => {ms932Encoder.encode("\u8D93")}, {name:"Error",message:"EncodingError U+8D93"});
assert.throws(() => {ms932Encoder.encode("\u8D94")}, {name:"Error",message:"EncodingError U+8D94"});
assert.throws(() => {ms932Encoder.encode("\u8D95")}, {name:"Error",message:"EncodingError U+8D95"});
assert.throws(() => {ms932Encoder.encode("\u8D96")}, {name:"Error",message:"EncodingError U+8D96"});
assert.throws(() => {ms932Encoder.encode("\u8D97")}, {name:"Error",message:"EncodingError U+8D97"});
assert.throws(() => {ms932Encoder.encode("\u8D98")}, {name:"Error",message:"EncodingError U+8D98"});
r = r && ([...ms932Encoder.encode("趙")].join(",") === "230,226"); // U+8D99
assert.throws(() => {ms932Encoder.encode("\u8D9A")}, {name:"Error",message:"EncodingError U+8D9A"});
assert.throws(() => {ms932Encoder.encode("\u8D9B")}, {name:"Error",message:"EncodingError U+8D9B"});
assert.throws(() => {ms932Encoder.encode("\u8D9C")}, {name:"Error",message:"EncodingError U+8D9C"});
assert.throws(() => {ms932Encoder.encode("\u8D9D")}, {name:"Error",message:"EncodingError U+8D9D"});
assert.throws(() => {ms932Encoder.encode("\u8D9E")}, {name:"Error",message:"EncodingError U+8D9E"});
assert.throws(() => {ms932Encoder.encode("\u8D9F")}, {name:"Error",message:"EncodingError U+8D9F"});
assert.throws(() => {ms932Encoder.encode("\u8DA0")}, {name:"Error",message:"EncodingError U+8DA0"});
assert.throws(() => {ms932Encoder.encode("\u8DA1")}, {name:"Error",message:"EncodingError U+8DA1"});
assert.throws(() => {ms932Encoder.encode("\u8DA2")}, {name:"Error",message:"EncodingError U+8DA2"});
r = r && ([...ms932Encoder.encode("趣")].join(",") === "142,239"); // U+8DA3
assert.throws(() => {ms932Encoder.encode("\u8DA4")}, {name:"Error",message:"EncodingError U+8DA4"});
assert.throws(() => {ms932Encoder.encode("\u8DA5")}, {name:"Error",message:"EncodingError U+8DA5"});
assert.throws(() => {ms932Encoder.encode("\u8DA6")}, {name:"Error",message:"EncodingError U+8DA6"});
assert.throws(() => {ms932Encoder.encode("\u8DA7")}, {name:"Error",message:"EncodingError U+8DA7"});
r = r && ([...ms932Encoder.encode("趨")].join(",") === "144,150"); // U+8DA8
assert.throws(() => {ms932Encoder.encode("\u8DA9")}, {name:"Error",message:"EncodingError U+8DA9"});
assert.throws(() => {ms932Encoder.encode("\u8DAA")}, {name:"Error",message:"EncodingError U+8DAA"});
assert.throws(() => {ms932Encoder.encode("\u8DAB")}, {name:"Error",message:"EncodingError U+8DAB"});
assert.throws(() => {ms932Encoder.encode("\u8DAC")}, {name:"Error",message:"EncodingError U+8DAC"});
assert.throws(() => {ms932Encoder.encode("\u8DAD")}, {name:"Error",message:"EncodingError U+8DAD"});
assert.throws(() => {ms932Encoder.encode("\u8DAE")}, {name:"Error",message:"EncodingError U+8DAE"});
assert.throws(() => {ms932Encoder.encode("\u8DAF")}, {name:"Error",message:"EncodingError U+8DAF"});
assert.throws(() => {ms932Encoder.encode("\u8DB0")}, {name:"Error",message:"EncodingError U+8DB0"});
assert.throws(() => {ms932Encoder.encode("\u8DB1")}, {name:"Error",message:"EncodingError U+8DB1"});
assert.throws(() => {ms932Encoder.encode("\u8DB2")}, {name:"Error",message:"EncodingError U+8DB2"});
r = r && ([...ms932Encoder.encode("足")].join(",") === "145,171"); // U+8DB3
assert.throws(() => {ms932Encoder.encode("\u8DB4")}, {name:"Error",message:"EncodingError U+8DB4"});
assert.throws(() => {ms932Encoder.encode("\u8DB5")}, {name:"Error",message:"EncodingError U+8DB5"});
assert.throws(() => {ms932Encoder.encode("\u8DB6")}, {name:"Error",message:"EncodingError U+8DB6"});
assert.throws(() => {ms932Encoder.encode("\u8DB7")}, {name:"Error",message:"EncodingError U+8DB7"});
assert.throws(() => {ms932Encoder.encode("\u8DB8")}, {name:"Error",message:"EncodingError U+8DB8"});
assert.throws(() => {ms932Encoder.encode("\u8DB9")}, {name:"Error",message:"EncodingError U+8DB9"});
r = r && ([...ms932Encoder.encode("趺")].join(",") === "230,229"); // U+8DBA
assert.throws(() => {ms932Encoder.encode("\u8DBB")}, {name:"Error",message:"EncodingError U+8DBB"});
assert.throws(() => {ms932Encoder.encode("\u8DBC")}, {name:"Error",message:"EncodingError U+8DBC"});
assert.throws(() => {ms932Encoder.encode("\u8DBD")}, {name:"Error",message:"EncodingError U+8DBD"});
r = r && ([...ms932Encoder.encode("趾")].join(",") === "230,228"); // U+8DBE
assert.throws(() => {ms932Encoder.encode("\u8DBF")}, {name:"Error",message:"EncodingError U+8DBF"});
assert.throws(() => {ms932Encoder.encode("\u8DC0")}, {name:"Error",message:"EncodingError U+8DC0"});
assert.throws(() => {ms932Encoder.encode("\u8DC1")}, {name:"Error",message:"EncodingError U+8DC1"});
r = r && ([...ms932Encoder.encode("跂")].join(",") === "230,227"); // U+8DC2
assert.throws(() => {ms932Encoder.encode("\u8DC3")}, {name:"Error",message:"EncodingError U+8DC3"});
assert.throws(() => {ms932Encoder.encode("\u8DC4")}, {name:"Error",message:"EncodingError U+8DC4"});
assert.throws(() => {ms932Encoder.encode("\u8DC5")}, {name:"Error",message:"EncodingError U+8DC5"});
assert.throws(() => {ms932Encoder.encode("\u8DC6")}, {name:"Error",message:"EncodingError U+8DC6"});
assert.throws(() => {ms932Encoder.encode("\u8DC7")}, {name:"Error",message:"EncodingError U+8DC7"});
assert.throws(() => {ms932Encoder.encode("\u8DC8")}, {name:"Error",message:"EncodingError U+8DC8"});
assert.throws(() => {ms932Encoder.encode("\u8DC9")}, {name:"Error",message:"EncodingError U+8DC9"});
assert.throws(() => {ms932Encoder.encode("\u8DCA")}, {name:"Error",message:"EncodingError U+8DCA"});
r = r && ([...ms932Encoder.encode("跋跌")].join(",") === "230,235,230,233"); // U+8DCB
assert.throws(() => {ms932Encoder.encode("\u8DCD")}, {name:"Error",message:"EncodingError U+8DCD"});
assert.throws(() => {ms932Encoder.encode("\u8DCE")}, {name:"Error",message:"EncodingError U+8DCE"});
r = r && ([...ms932Encoder.encode("跏")].join(",") === "230,230"); // U+8DCF
assert.throws(() => {ms932Encoder.encode("\u8DD0")}, {name:"Error",message:"EncodingError U+8DD0"});
assert.throws(() => {ms932Encoder.encode("\u8DD1")}, {name:"Error",message:"EncodingError U+8DD1"});
assert.throws(() => {ms932Encoder.encode("\u8DD2")}, {name:"Error",message:"EncodingError U+8DD2"});
assert.throws(() => {ms932Encoder.encode("\u8DD3")}, {name:"Error",message:"EncodingError U+8DD3"});
assert.throws(() => {ms932Encoder.encode("\u8DD4")}, {name:"Error",message:"EncodingError U+8DD4"});
assert.throws(() => {ms932Encoder.encode("\u8DD5")}, {name:"Error",message:"EncodingError U+8DD5"});
r = r && ([...ms932Encoder.encode("跖")].join(",") === "230,232"); // U+8DD6
assert.throws(() => {ms932Encoder.encode("\u8DD7")}, {name:"Error",message:"EncodingError U+8DD7"});
assert.throws(() => {ms932Encoder.encode("\u8DD8")}, {name:"Error",message:"EncodingError U+8DD8"});
assert.throws(() => {ms932Encoder.encode("\u8DD9")}, {name:"Error",message:"EncodingError U+8DD9"});
r = r && ([...ms932Encoder.encode("跚跛")].join(",") === "230,231,230,234"); // U+8DDA
assert.throws(() => {ms932Encoder.encode("\u8DDC")}, {name:"Error",message:"EncodingError U+8DDC"});
r = r && ([...ms932Encoder.encode("距")].join(",") === "139,151"); // U+8DDD
assert.throws(() => {ms932Encoder.encode("\u8DDE")}, {name:"Error",message:"EncodingError U+8DDE"});
r = r && ([...ms932Encoder.encode("跟")].join(",") === "230,238"); // U+8DDF
assert.throws(() => {ms932Encoder.encode("\u8DE0")}, {name:"Error",message:"EncodingError U+8DE0"});
r = r && ([...ms932Encoder.encode("跡")].join(",") === "144,213"); // U+8DE1
assert.throws(() => {ms932Encoder.encode("\u8DE2")}, {name:"Error",message:"EncodingError U+8DE2"});
r = r && ([...ms932Encoder.encode("跣")].join(",") === "230,239"); // U+8DE3
assert.throws(() => {ms932Encoder.encode("\u8DE4")}, {name:"Error",message:"EncodingError U+8DE4"});
assert.throws(() => {ms932Encoder.encode("\u8DE5")}, {name:"Error",message:"EncodingError U+8DE5"});
assert.throws(() => {ms932Encoder.encode("\u8DE6")}, {name:"Error",message:"EncodingError U+8DE6"});
assert.throws(() => {ms932Encoder.encode("\u8DE7")}, {name:"Error",message:"EncodingError U+8DE7"});
r = r && ([...ms932Encoder.encode("跨")].join(",") === "140,215"); // U+8DE8
assert.throws(() => {ms932Encoder.encode("\u8DE9")}, {name:"Error",message:"EncodingError U+8DE9"});
r = r && ([...ms932Encoder.encode("跪跫")].join(",") === "230,236,230,237"); // U+8DEA
assert.throws(() => {ms932Encoder.encode("\u8DEC")}, {name:"Error",message:"EncodingError U+8DEC"});
assert.throws(() => {ms932Encoder.encode("\u8DED")}, {name:"Error",message:"EncodingError U+8DED"});
assert.throws(() => {ms932Encoder.encode("\u8DEE")}, {name:"Error",message:"EncodingError U+8DEE"});
r = r && ([...ms932Encoder.encode("路")].join(",") === "152,72"); // U+8DEF
assert.throws(() => {ms932Encoder.encode("\u8DF0")}, {name:"Error",message:"EncodingError U+8DF0"});
assert.throws(() => {ms932Encoder.encode("\u8DF1")}, {name:"Error",message:"EncodingError U+8DF1"});
assert.throws(() => {ms932Encoder.encode("\u8DF2")}, {name:"Error",message:"EncodingError U+8DF2"});
r = r && ([...ms932Encoder.encode("跳")].join(",") === "146,181"); // U+8DF3
assert.throws(() => {ms932Encoder.encode("\u8DF4")}, {name:"Error",message:"EncodingError U+8DF4"});
r = r && ([...ms932Encoder.encode("践")].join(",") === "145,72"); // U+8DF5
assert.throws(() => {ms932Encoder.encode("\u8DF6")}, {name:"Error",message:"EncodingError U+8DF6"});
assert.throws(() => {ms932Encoder.encode("\u8DF7")}, {name:"Error",message:"EncodingError U+8DF7"});
assert.throws(() => {ms932Encoder.encode("\u8DF8")}, {name:"Error",message:"EncodingError U+8DF8"});
assert.throws(() => {ms932Encoder.encode("\u8DF9")}, {name:"Error",message:"EncodingError U+8DF9"});
assert.throws(() => {ms932Encoder.encode("\u8DFA")}, {name:"Error",message:"EncodingError U+8DFA"});
assert.throws(() => {ms932Encoder.encode("\u8DFB")}, {name:"Error",message:"EncodingError U+8DFB"});
r = r && ([...ms932Encoder.encode("跼")].join(",") === "230,240"); // U+8DFC
assert.throws(() => {ms932Encoder.encode("\u8DFD")}, {name:"Error",message:"EncodingError U+8DFD"});
assert.throws(() => {ms932Encoder.encode("\u8DFE")}, {name:"Error",message:"EncodingError U+8DFE"});
r = r && ([...ms932Encoder.encode("跿")].join(",") === "230,243"); // U+8DFF
assert.throws(() => {ms932Encoder.encode("\u8E00")}, {name:"Error",message:"EncodingError U+8E00"});
assert.throws(() => {ms932Encoder.encode("\u8E01")}, {name:"Error",message:"EncodingError U+8E01"});
assert.throws(() => {ms932Encoder.encode("\u8E02")}, {name:"Error",message:"EncodingError U+8E02"});
assert.throws(() => {ms932Encoder.encode("\u8E03")}, {name:"Error",message:"EncodingError U+8E03"});
assert.throws(() => {ms932Encoder.encode("\u8E04")}, {name:"Error",message:"EncodingError U+8E04"});
assert.throws(() => {ms932Encoder.encode("\u8E05")}, {name:"Error",message:"EncodingError U+8E05"});
assert.throws(() => {ms932Encoder.encode("\u8E06")}, {name:"Error",message:"EncodingError U+8E06"});
assert.throws(() => {ms932Encoder.encode("\u8E07")}, {name:"Error",message:"EncodingError U+8E07"});
r = r && ([...ms932Encoder.encode("踈踉踊")].join(",") === "230,241,230,242,151,120"); // U+8E08
assert.throws(() => {ms932Encoder.encode("\u8E0B")}, {name:"Error",message:"EncodingError U+8E0B"});
assert.throws(() => {ms932Encoder.encode("\u8E0C")}, {name:"Error",message:"EncodingError U+8E0C"});
assert.throws(() => {ms932Encoder.encode("\u8E0D")}, {name:"Error",message:"EncodingError U+8E0D"});
assert.throws(() => {ms932Encoder.encode("\u8E0E")}, {name:"Error",message:"EncodingError U+8E0E"});
r = r && ([...ms932Encoder.encode("踏踐")].join(",") === "147,165,230,246"); // U+8E0F
assert.throws(() => {ms932Encoder.encode("\u8E11")}, {name:"Error",message:"EncodingError U+8E11"});
assert.throws(() => {ms932Encoder.encode("\u8E12")}, {name:"Error",message:"EncodingError U+8E12"});
assert.throws(() => {ms932Encoder.encode("\u8E13")}, {name:"Error",message:"EncodingError U+8E13"});
assert.throws(() => {ms932Encoder.encode("\u8E14")}, {name:"Error",message:"EncodingError U+8E14"});
assert.throws(() => {ms932Encoder.encode("\u8E15")}, {name:"Error",message:"EncodingError U+8E15"});
assert.throws(() => {ms932Encoder.encode("\u8E16")}, {name:"Error",message:"EncodingError U+8E16"});
assert.throws(() => {ms932Encoder.encode("\u8E17")}, {name:"Error",message:"EncodingError U+8E17"});
assert.throws(() => {ms932Encoder.encode("\u8E18")}, {name:"Error",message:"EncodingError U+8E18"});
assert.throws(() => {ms932Encoder.encode("\u8E19")}, {name:"Error",message:"EncodingError U+8E19"});
assert.throws(() => {ms932Encoder.encode("\u8E1A")}, {name:"Error",message:"EncodingError U+8E1A"});
assert.throws(() => {ms932Encoder.encode("\u8E1B")}, {name:"Error",message:"EncodingError U+8E1B"});
assert.throws(() => {ms932Encoder.encode("\u8E1C")}, {name:"Error",message:"EncodingError U+8E1C"});
r = r && ([...ms932Encoder.encode("踝踞踟")].join(",") === "230,244,230,245,230,247"); // U+8E1D
assert.throws(() => {ms932Encoder.encode("\u8E20")}, {name:"Error",message:"EncodingError U+8E20"});
assert.throws(() => {ms932Encoder.encode("\u8E21")}, {name:"Error",message:"EncodingError U+8E21"});
assert.throws(() => {ms932Encoder.encode("\u8E22")}, {name:"Error",message:"EncodingError U+8E22"});
assert.throws(() => {ms932Encoder.encode("\u8E23")}, {name:"Error",message:"EncodingError U+8E23"});
assert.throws(() => {ms932Encoder.encode("\u8E24")}, {name:"Error",message:"EncodingError U+8E24"});
assert.throws(() => {ms932Encoder.encode("\u8E25")}, {name:"Error",message:"EncodingError U+8E25"});
assert.throws(() => {ms932Encoder.encode("\u8E26")}, {name:"Error",message:"EncodingError U+8E26"});
assert.throws(() => {ms932Encoder.encode("\u8E27")}, {name:"Error",message:"EncodingError U+8E27"});
assert.throws(() => {ms932Encoder.encode("\u8E28")}, {name:"Error",message:"EncodingError U+8E28"});
assert.throws(() => {ms932Encoder.encode("\u8E29")}, {name:"Error",message:"EncodingError U+8E29"});
r = r && ([...ms932Encoder.encode("踪")].join(",") === "231,72"); // U+8E2A
assert.throws(() => {ms932Encoder.encode("\u8E2B")}, {name:"Error",message:"EncodingError U+8E2B"});
assert.throws(() => {ms932Encoder.encode("\u8E2C")}, {name:"Error",message:"EncodingError U+8E2C"});
assert.throws(() => {ms932Encoder.encode("\u8E2D")}, {name:"Error",message:"EncodingError U+8E2D"});
assert.throws(() => {ms932Encoder.encode("\u8E2E")}, {name:"Error",message:"EncodingError U+8E2E"});
assert.throws(() => {ms932Encoder.encode("\u8E2F")}, {name:"Error",message:"EncodingError U+8E2F"});
r = r && ([...ms932Encoder.encode("踰")].join(",") === "230,250"); // U+8E30
assert.throws(() => {ms932Encoder.encode("\u8E31")}, {name:"Error",message:"EncodingError U+8E31"});
assert.throws(() => {ms932Encoder.encode("\u8E32")}, {name:"Error",message:"EncodingError U+8E32"});
assert.throws(() => {ms932Encoder.encode("\u8E33")}, {name:"Error",message:"EncodingError U+8E33"});
r = r && ([...ms932Encoder.encode("踴踵")].join(",") === "230,251,230,249"); // U+8E34
assert.throws(() => {ms932Encoder.encode("\u8E36")}, {name:"Error",message:"EncodingError U+8E36"});
assert.throws(() => {ms932Encoder.encode("\u8E37")}, {name:"Error",message:"EncodingError U+8E37"});
assert.throws(() => {ms932Encoder.encode("\u8E38")}, {name:"Error",message:"EncodingError U+8E38"});
assert.throws(() => {ms932Encoder.encode("\u8E39")}, {name:"Error",message:"EncodingError U+8E39"});
assert.throws(() => {ms932Encoder.encode("\u8E3A")}, {name:"Error",message:"EncodingError U+8E3A"});
assert.throws(() => {ms932Encoder.encode("\u8E3B")}, {name:"Error",message:"EncodingError U+8E3B"});
assert.throws(() => {ms932Encoder.encode("\u8E3C")}, {name:"Error",message:"EncodingError U+8E3C"});
assert.throws(() => {ms932Encoder.encode("\u8E3D")}, {name:"Error",message:"EncodingError U+8E3D"});
assert.throws(() => {ms932Encoder.encode("\u8E3E")}, {name:"Error",message:"EncodingError U+8E3E"});
assert.throws(() => {ms932Encoder.encode("\u8E3F")}, {name:"Error",message:"EncodingError U+8E3F"});
assert.throws(() => {ms932Encoder.encode("\u8E40")}, {name:"Error",message:"EncodingError U+8E40"});
assert.throws(() => {ms932Encoder.encode("\u8E41")}, {name:"Error",message:"EncodingError U+8E41"});
r = r && ([...ms932Encoder.encode("蹂")].join(",") === "230,248"); // U+8E42
assert.throws(() => {ms932Encoder.encode("\u8E43")}, {name:"Error",message:"EncodingError U+8E43"});
r = r && ([...ms932Encoder.encode("蹄")].join(",") === "146,251"); // U+8E44
assert.throws(() => {ms932Encoder.encode("\u8E45")}, {name:"Error",message:"EncodingError U+8E45"});
assert.throws(() => {ms932Encoder.encode("\u8E46")}, {name:"Error",message:"EncodingError U+8E46"});
r = r && ([...ms932Encoder.encode("蹇蹈蹉蹊")].join(",") === "231,64,231,68,231,65,230,252"); // U+8E47
assert.throws(() => {ms932Encoder.encode("\u8E4B")}, {name:"Error",message:"EncodingError U+8E4B"});
r = r && ([...ms932Encoder.encode("蹌")].join(",") === "231,66"); // U+8E4C
assert.throws(() => {ms932Encoder.encode("\u8E4D")}, {name:"Error",message:"EncodingError U+8E4D"});
assert.throws(() => {ms932Encoder.encode("\u8E4E")}, {name:"Error",message:"EncodingError U+8E4E"});
assert.throws(() => {ms932Encoder.encode("\u8E4F")}, {name:"Error",message:"EncodingError U+8E4F"});
r = r && ([...ms932Encoder.encode("蹐")].join(",") === "231,67"); // U+8E50
assert.throws(() => {ms932Encoder.encode("\u8E51")}, {name:"Error",message:"EncodingError U+8E51"});
assert.throws(() => {ms932Encoder.encode("\u8E52")}, {name:"Error",message:"EncodingError U+8E52"});
assert.throws(() => {ms932Encoder.encode("\u8E53")}, {name:"Error",message:"EncodingError U+8E53"});
assert.throws(() => {ms932Encoder.encode("\u8E54")}, {name:"Error",message:"EncodingError U+8E54"});
r = r && ([...ms932Encoder.encode("蹕")].join(",") === "231,74"); // U+8E55
assert.throws(() => {ms932Encoder.encode("\u8E56")}, {name:"Error",message:"EncodingError U+8E56"});
assert.throws(() => {ms932Encoder.encode("\u8E57")}, {name:"Error",message:"EncodingError U+8E57"});
assert.throws(() => {ms932Encoder.encode("\u8E58")}, {name:"Error",message:"EncodingError U+8E58"});
r = r && ([...ms932Encoder.encode("蹙")].join(",") === "231,69"); // U+8E59
assert.throws(() => {ms932Encoder.encode("\u8E5A")}, {name:"Error",message:"EncodingError U+8E5A"});
assert.throws(() => {ms932Encoder.encode("\u8E5B")}, {name:"Error",message:"EncodingError U+8E5B"});
assert.throws(() => {ms932Encoder.encode("\u8E5C")}, {name:"Error",message:"EncodingError U+8E5C"});
assert.throws(() => {ms932Encoder.encode("\u8E5D")}, {name:"Error",message:"EncodingError U+8E5D"});
assert.throws(() => {ms932Encoder.encode("\u8E5E")}, {name:"Error",message:"EncodingError U+8E5E"});
r = r && ([...ms932Encoder.encode("蹟蹠")].join(",") === "144,214,231,71"); // U+8E5F
assert.throws(() => {ms932Encoder.encode("\u8E61")}, {name:"Error",message:"EncodingError U+8E61"});
assert.throws(() => {ms932Encoder.encode("\u8E62")}, {name:"Error",message:"EncodingError U+8E62"});
r = r && ([...ms932Encoder.encode("蹣蹤")].join(",") === "231,73,231,70"); // U+8E63
assert.throws(() => {ms932Encoder.encode("\u8E65")}, {name:"Error",message:"EncodingError U+8E65"});
assert.throws(() => {ms932Encoder.encode("\u8E66")}, {name:"Error",message:"EncodingError U+8E66"});
assert.throws(() => {ms932Encoder.encode("\u8E67")}, {name:"Error",message:"EncodingError U+8E67"});
assert.throws(() => {ms932Encoder.encode("\u8E68")}, {name:"Error",message:"EncodingError U+8E68"});
assert.throws(() => {ms932Encoder.encode("\u8E69")}, {name:"Error",message:"EncodingError U+8E69"});
assert.throws(() => {ms932Encoder.encode("\u8E6A")}, {name:"Error",message:"EncodingError U+8E6A"});
assert.throws(() => {ms932Encoder.encode("\u8E6B")}, {name:"Error",message:"EncodingError U+8E6B"});
assert.throws(() => {ms932Encoder.encode("\u8E6C")}, {name:"Error",message:"EncodingError U+8E6C"});
assert.throws(() => {ms932Encoder.encode("\u8E6D")}, {name:"Error",message:"EncodingError U+8E6D"});
assert.throws(() => {ms932Encoder.encode("\u8E6E")}, {name:"Error",message:"EncodingError U+8E6E"});
assert.throws(() => {ms932Encoder.encode("\u8E6F")}, {name:"Error",message:"EncodingError U+8E6F"});
assert.throws(() => {ms932Encoder.encode("\u8E70")}, {name:"Error",message:"EncodingError U+8E70"});
assert.throws(() => {ms932Encoder.encode("\u8E71")}, {name:"Error",message:"EncodingError U+8E71"});
r = r && ([...ms932Encoder.encode("蹲")].join(",") === "231,76"); // U+8E72
assert.throws(() => {ms932Encoder.encode("\u8E73")}, {name:"Error",message:"EncodingError U+8E73"});
r = r && ([...ms932Encoder.encode("蹴")].join(",") === "143,82"); // U+8E74
assert.throws(() => {ms932Encoder.encode("\u8E75")}, {name:"Error",message:"EncodingError U+8E75"});
r = r && ([...ms932Encoder.encode("蹶")].join(",") === "231,75"); // U+8E76
assert.throws(() => {ms932Encoder.encode("\u8E77")}, {name:"Error",message:"EncodingError U+8E77"});
assert.throws(() => {ms932Encoder.encode("\u8E78")}, {name:"Error",message:"EncodingError U+8E78"});
assert.throws(() => {ms932Encoder.encode("\u8E79")}, {name:"Error",message:"EncodingError U+8E79"});
assert.throws(() => {ms932Encoder.encode("\u8E7A")}, {name:"Error",message:"EncodingError U+8E7A"});
assert.throws(() => {ms932Encoder.encode("\u8E7B")}, {name:"Error",message:"EncodingError U+8E7B"});
r = r && ([...ms932Encoder.encode("蹼")].join(",") === "231,77"); // U+8E7C
assert.throws(() => {ms932Encoder.encode("\u8E7D")}, {name:"Error",message:"EncodingError U+8E7D"});
assert.throws(() => {ms932Encoder.encode("\u8E7E")}, {name:"Error",message:"EncodingError U+8E7E"});
assert.throws(() => {ms932Encoder.encode("\u8E7F")}, {name:"Error",message:"EncodingError U+8E7F"});
assert.throws(() => {ms932Encoder.encode("\u8E80")}, {name:"Error",message:"EncodingError U+8E80"});
r = r && ([...ms932Encoder.encode("躁")].join(",") === "231,78"); // U+8E81
assert.throws(() => {ms932Encoder.encode("\u8E82")}, {name:"Error",message:"EncodingError U+8E82"});
assert.throws(() => {ms932Encoder.encode("\u8E83")}, {name:"Error",message:"EncodingError U+8E83"});
r = r && ([...ms932Encoder.encode("躄躅")].join(",") === "231,81,231,80"); // U+8E84
assert.throws(() => {ms932Encoder.encode("\u8E86")}, {name:"Error",message:"EncodingError U+8E86"});
r = r && ([...ms932Encoder.encode("躇")].join(",") === "231,79"); // U+8E87
assert.throws(() => {ms932Encoder.encode("\u8E88")}, {name:"Error",message:"EncodingError U+8E88"});
assert.throws(() => {ms932Encoder.encode("\u8E89")}, {name:"Error",message:"EncodingError U+8E89"});
r = r && ([...ms932Encoder.encode("躊躋")].join(",") === "231,83,231,82"); // U+8E8A
assert.throws(() => {ms932Encoder.encode("\u8E8C")}, {name:"Error",message:"EncodingError U+8E8C"});
r = r && ([...ms932Encoder.encode("躍")].join(",") === "150,244"); // U+8E8D
assert.throws(() => {ms932Encoder.encode("\u8E8E")}, {name:"Error",message:"EncodingError U+8E8E"});
assert.throws(() => {ms932Encoder.encode("\u8E8F")}, {name:"Error",message:"EncodingError U+8E8F"});
assert.throws(() => {ms932Encoder.encode("\u8E90")}, {name:"Error",message:"EncodingError U+8E90"});
r = r && ([...ms932Encoder.encode("躑")].join(",") === "231,85"); // U+8E91
assert.throws(() => {ms932Encoder.encode("\u8E92")}, {name:"Error",message:"EncodingError U+8E92"});
r = r && ([...ms932Encoder.encode("躓躔")].join(",") === "231,84,231,86"); // U+8E93
assert.throws(() => {ms932Encoder.encode("\u8E95")}, {name:"Error",message:"EncodingError U+8E95"});
assert.throws(() => {ms932Encoder.encode("\u8E96")}, {name:"Error",message:"EncodingError U+8E96"});
assert.throws(() => {ms932Encoder.encode("\u8E97")}, {name:"Error",message:"EncodingError U+8E97"});
assert.throws(() => {ms932Encoder.encode("\u8E98")}, {name:"Error",message:"EncodingError U+8E98"});
r = r && ([...ms932Encoder.encode("躙")].join(",") === "231,87"); // U+8E99
assert.throws(() => {ms932Encoder.encode("\u8E9A")}, {name:"Error",message:"EncodingError U+8E9A"});
assert.throws(() => {ms932Encoder.encode("\u8E9B")}, {name:"Error",message:"EncodingError U+8E9B"});
assert.throws(() => {ms932Encoder.encode("\u8E9C")}, {name:"Error",message:"EncodingError U+8E9C"});
assert.throws(() => {ms932Encoder.encode("\u8E9D")}, {name:"Error",message:"EncodingError U+8E9D"});
assert.throws(() => {ms932Encoder.encode("\u8E9E")}, {name:"Error",message:"EncodingError U+8E9E"});
assert.throws(() => {ms932Encoder.encode("\u8E9F")}, {name:"Error",message:"EncodingError U+8E9F"});
assert.throws(() => {ms932Encoder.encode("\u8EA0")}, {name:"Error",message:"EncodingError U+8EA0"});
r = r && ([...ms932Encoder.encode("躡")].join(",") === "231,89"); // U+8EA1
assert.throws(() => {ms932Encoder.encode("\u8EA2")}, {name:"Error",message:"EncodingError U+8EA2"});
assert.throws(() => {ms932Encoder.encode("\u8EA3")}, {name:"Error",message:"EncodingError U+8EA3"});
assert.throws(() => {ms932Encoder.encode("\u8EA4")}, {name:"Error",message:"EncodingError U+8EA4"});
assert.throws(() => {ms932Encoder.encode("\u8EA5")}, {name:"Error",message:"EncodingError U+8EA5"});
assert.throws(() => {ms932Encoder.encode("\u8EA6")}, {name:"Error",message:"EncodingError U+8EA6"});
assert.throws(() => {ms932Encoder.encode("\u8EA7")}, {name:"Error",message:"EncodingError U+8EA7"});
assert.throws(() => {ms932Encoder.encode("\u8EA8")}, {name:"Error",message:"EncodingError U+8EA8"});
assert.throws(() => {ms932Encoder.encode("\u8EA9")}, {name:"Error",message:"EncodingError U+8EA9"});
r = r && ([...ms932Encoder.encode("躪身躬")].join(",") === "231,88,144,103,231,90"); // U+8EAA
assert.throws(() => {ms932Encoder.encode("\u8EAD")}, {name:"Error",message:"EncodingError U+8EAD"});
assert.throws(() => {ms932Encoder.encode("\u8EAE")}, {name:"Error",message:"EncodingError U+8EAE"});
r = r && ([...ms932Encoder.encode("躯躰躱")].join(",") === "139,235,231,91,231,93"); // U+8EAF
assert.throws(() => {ms932Encoder.encode("\u8EB2")}, {name:"Error",message:"EncodingError U+8EB2"});
assert.throws(() => {ms932Encoder.encode("\u8EB3")}, {name:"Error",message:"EncodingError U+8EB3"});
assert.throws(() => {ms932Encoder.encode("\u8EB4")}, {name:"Error",message:"EncodingError U+8EB4"});
assert.throws(() => {ms932Encoder.encode("\u8EB5")}, {name:"Error",message:"EncodingError U+8EB5"});
assert.throws(() => {ms932Encoder.encode("\u8EB6")}, {name:"Error",message:"EncodingError U+8EB6"});
assert.throws(() => {ms932Encoder.encode("\u8EB7")}, {name:"Error",message:"EncodingError U+8EB7"});
assert.throws(() => {ms932Encoder.encode("\u8EB8")}, {name:"Error",message:"EncodingError U+8EB8"});
assert.throws(() => {ms932Encoder.encode("\u8EB9")}, {name:"Error",message:"EncodingError U+8EB9"});
assert.throws(() => {ms932Encoder.encode("\u8EBA")}, {name:"Error",message:"EncodingError U+8EBA"});
assert.throws(() => {ms932Encoder.encode("\u8EBB")}, {name:"Error",message:"EncodingError U+8EBB"});
assert.throws(() => {ms932Encoder.encode("\u8EBC")}, {name:"Error",message:"EncodingError U+8EBC"});
assert.throws(() => {ms932Encoder.encode("\u8EBD")}, {name:"Error",message:"EncodingError U+8EBD"});
r = r && ([...ms932Encoder.encode("躾")].join(",") === "231,94"); // U+8EBE
assert.throws(() => {ms932Encoder.encode("\u8EBF")}, {name:"Error",message:"EncodingError U+8EBF"});
assert.throws(() => {ms932Encoder.encode("\u8EC0")}, {name:"Error",message:"EncodingError U+8EC0"});
assert.throws(() => {ms932Encoder.encode("\u8EC1")}, {name:"Error",message:"EncodingError U+8EC1"});
assert.throws(() => {ms932Encoder.encode("\u8EC2")}, {name:"Error",message:"EncodingError U+8EC2"});
assert.throws(() => {ms932Encoder.encode("\u8EC3")}, {name:"Error",message:"EncodingError U+8EC3"});
assert.throws(() => {ms932Encoder.encode("\u8EC4")}, {name:"Error",message:"EncodingError U+8EC4"});
r = r && ([...ms932Encoder.encode("軅軆")].join(",") === "231,95,231,92"); // U+8EC5
assert.throws(() => {ms932Encoder.encode("\u8EC7")}, {name:"Error",message:"EncodingError U+8EC7"});
r = r && ([...ms932Encoder.encode("軈")].join(",") === "231,96"); // U+8EC8
assert.throws(() => {ms932Encoder.encode("\u8EC9")}, {name:"Error",message:"EncodingError U+8EC9"});
r = r && ([...ms932Encoder.encode("車軋軌軍")].join(",") === "142,212,231,97,139,79,140,82"); // U+8ECA
assert.throws(() => {ms932Encoder.encode("\u8ECE")}, {name:"Error",message:"EncodingError U+8ECE"});
r = r && ([...ms932Encoder.encode("軏")].join(",") === "251,178"); // U+8ECF
assert.throws(() => {ms932Encoder.encode("\u8ED0")}, {name:"Error",message:"EncodingError U+8ED0"});
assert.throws(() => {ms932Encoder.encode("\u8ED1")}, {name:"Error",message:"EncodingError U+8ED1"});
r = r && ([...ms932Encoder.encode("軒")].join(",") === "140,172"); // U+8ED2
assert.throws(() => {ms932Encoder.encode("\u8ED3")}, {name:"Error",message:"EncodingError U+8ED3"});
assert.throws(() => {ms932Encoder.encode("\u8ED4")}, {name:"Error",message:"EncodingError U+8ED4"});
assert.throws(() => {ms932Encoder.encode("\u8ED5")}, {name:"Error",message:"EncodingError U+8ED5"});
assert.throws(() => {ms932Encoder.encode("\u8ED6")}, {name:"Error",message:"EncodingError U+8ED6"});
assert.throws(() => {ms932Encoder.encode("\u8ED7")}, {name:"Error",message:"EncodingError U+8ED7"});
assert.throws(() => {ms932Encoder.encode("\u8ED8")}, {name:"Error",message:"EncodingError U+8ED8"});
assert.throws(() => {ms932Encoder.encode("\u8ED9")}, {name:"Error",message:"EncodingError U+8ED9"});
assert.throws(() => {ms932Encoder.encode("\u8EDA")}, {name:"Error",message:"EncodingError U+8EDA"});
r = r && ([...ms932Encoder.encode("軛")].join(",") === "231,98"); // U+8EDB
assert.throws(() => {ms932Encoder.encode("\u8EDC")}, {name:"Error",message:"EncodingError U+8EDC"});
assert.throws(() => {ms932Encoder.encode("\u8EDD")}, {name:"Error",message:"EncodingError U+8EDD"});
assert.throws(() => {ms932Encoder.encode("\u8EDE")}, {name:"Error",message:"EncodingError U+8EDE"});
r = r && ([...ms932Encoder.encode("軟")].join(",") === "147,238"); // U+8EDF
assert.throws(() => {ms932Encoder.encode("\u8EE0")}, {name:"Error",message:"EncodingError U+8EE0"});
assert.throws(() => {ms932Encoder.encode("\u8EE1")}, {name:"Error",message:"EncodingError U+8EE1"});
r = r && ([...ms932Encoder.encode("転軣")].join(",") === "147,93,231,99"); // U+8EE2
assert.throws(() => {ms932Encoder.encode("\u8EE4")}, {name:"Error",message:"EncodingError U+8EE4"});
assert.throws(() => {ms932Encoder.encode("\u8EE5")}, {name:"Error",message:"EncodingError U+8EE5"});
assert.throws(() => {ms932Encoder.encode("\u8EE6")}, {name:"Error",message:"EncodingError U+8EE6"});
assert.throws(() => {ms932Encoder.encode("\u8EE7")}, {name:"Error",message:"EncodingError U+8EE7"});
assert.throws(() => {ms932Encoder.encode("\u8EE8")}, {name:"Error",message:"EncodingError U+8EE8"});
assert.throws(() => {ms932Encoder.encode("\u8EE9")}, {name:"Error",message:"EncodingError U+8EE9"});
assert.throws(() => {ms932Encoder.encode("\u8EEA")}, {name:"Error",message:"EncodingError U+8EEA"});
r = r && ([...ms932Encoder.encode("軫")].join(",") === "231,102"); // U+8EEB
assert.throws(() => {ms932Encoder.encode("\u8EEC")}, {name:"Error",message:"EncodingError U+8EEC"});
assert.throws(() => {ms932Encoder.encode("\u8EED")}, {name:"Error",message:"EncodingError U+8EED"});
assert.throws(() => {ms932Encoder.encode("\u8EEE")}, {name:"Error",message:"EncodingError U+8EEE"});
assert.throws(() => {ms932Encoder.encode("\u8EEF")}, {name:"Error",message:"EncodingError U+8EEF"});
assert.throws(() => {ms932Encoder.encode("\u8EF0")}, {name:"Error",message:"EncodingError U+8EF0"});
assert.throws(() => {ms932Encoder.encode("\u8EF1")}, {name:"Error",message:"EncodingError U+8EF1"});
assert.throws(() => {ms932Encoder.encode("\u8EF2")}, {name:"Error",message:"EncodingError U+8EF2"});
assert.throws(() => {ms932Encoder.encode("\u8EF3")}, {name:"Error",message:"EncodingError U+8EF3"});
assert.throws(() => {ms932Encoder.encode("\u8EF4")}, {name:"Error",message:"EncodingError U+8EF4"});
assert.throws(() => {ms932Encoder.encode("\u8EF5")}, {name:"Error",message:"EncodingError U+8EF5"});
assert.throws(() => {ms932Encoder.encode("\u8EF6")}, {name:"Error",message:"EncodingError U+8EF6"});
assert.throws(() => {ms932Encoder.encode("\u8EF7")}, {name:"Error",message:"EncodingError U+8EF7"});
r = r && ([...ms932Encoder.encode("軸")].join(",") === "142,178"); // U+8EF8
assert.throws(() => {ms932Encoder.encode("\u8EF9")}, {name:"Error",message:"EncodingError U+8EF9"});
assert.throws(() => {ms932Encoder.encode("\u8EFA")}, {name:"Error",message:"EncodingError U+8EFA"});
r = r && ([...ms932Encoder.encode("軻軼軽軾")].join(",") === "231,101,231,100,140,121,231,103"); // U+8EFB
assert.throws(() => {ms932Encoder.encode("\u8EFF")}, {name:"Error",message:"EncodingError U+8EFF"});
assert.throws(() => {ms932Encoder.encode("\u8F00")}, {name:"Error",message:"EncodingError U+8F00"});
assert.throws(() => {ms932Encoder.encode("\u8F01")}, {name:"Error",message:"EncodingError U+8F01"});
assert.throws(() => {ms932Encoder.encode("\u8F02")}, {name:"Error",message:"EncodingError U+8F02"});
r = r && ([...ms932Encoder.encode("較")].join(",") === "138,114"); // U+8F03
assert.throws(() => {ms932Encoder.encode("\u8F04")}, {name:"Error",message:"EncodingError U+8F04"});
r = r && ([...ms932Encoder.encode("輅")].join(",") === "231,105"); // U+8F05
assert.throws(() => {ms932Encoder.encode("\u8F06")}, {name:"Error",message:"EncodingError U+8F06"});
assert.throws(() => {ms932Encoder.encode("\u8F07")}, {name:"Error",message:"EncodingError U+8F07"});
assert.throws(() => {ms932Encoder.encode("\u8F08")}, {name:"Error",message:"EncodingError U+8F08"});
r = r && ([...ms932Encoder.encode("載輊")].join(",") === "141,218,231,104"); // U+8F09
assert.throws(() => {ms932Encoder.encode("\u8F0B")}, {name:"Error",message:"EncodingError U+8F0B"});
r = r && ([...ms932Encoder.encode("輌")].join(",") === "231,113"); // U+8F0C
assert.throws(() => {ms932Encoder.encode("\u8F0D")}, {name:"Error",message:"EncodingError U+8F0D"});
assert.throws(() => {ms932Encoder.encode("\u8F0E")}, {name:"Error",message:"EncodingError U+8F0E"});
assert.throws(() => {ms932Encoder.encode("\u8F0F")}, {name:"Error",message:"EncodingError U+8F0F"});
assert.throws(() => {ms932Encoder.encode("\u8F10")}, {name:"Error",message:"EncodingError U+8F10"});
assert.throws(() => {ms932Encoder.encode("\u8F11")}, {name:"Error",message:"EncodingError U+8F11"});
r = r && ([...ms932Encoder.encode("輒輓輔輕")].join(",") === "231,107,231,109,149,227,231,106"); // U+8F12
assert.throws(() => {ms932Encoder.encode("\u8F16")}, {name:"Error",message:"EncodingError U+8F16"});
assert.throws(() => {ms932Encoder.encode("\u8F17")}, {name:"Error",message:"EncodingError U+8F17"});
assert.throws(() => {ms932Encoder.encode("\u8F18")}, {name:"Error",message:"EncodingError U+8F18"});
r = r && ([...ms932Encoder.encode("輙")].join(",") === "231,108"); // U+8F19
assert.throws(() => {ms932Encoder.encode("\u8F1A")}, {name:"Error",message:"EncodingError U+8F1A"});
r = r && ([...ms932Encoder.encode("輛輜輝")].join(",") === "231,112,231,110,139,80"); // U+8F1B
assert.throws(() => {ms932Encoder.encode("\u8F1E")}, {name:"Error",message:"EncodingError U+8F1E"});
r = r && ([...ms932Encoder.encode("輟")].join(",") === "231,111"); // U+8F1F
assert.throws(() => {ms932Encoder.encode("\u8F20")}, {name:"Error",message:"EncodingError U+8F20"});
assert.throws(() => {ms932Encoder.encode("\u8F21")}, {name:"Error",message:"EncodingError U+8F21"});
assert.throws(() => {ms932Encoder.encode("\u8F22")}, {name:"Error",message:"EncodingError U+8F22"});
assert.throws(() => {ms932Encoder.encode("\u8F23")}, {name:"Error",message:"EncodingError U+8F23"});
assert.throws(() => {ms932Encoder.encode("\u8F24")}, {name:"Error",message:"EncodingError U+8F24"});
assert.throws(() => {ms932Encoder.encode("\u8F25")}, {name:"Error",message:"EncodingError U+8F25"});
r = r && ([...ms932Encoder.encode("輦")].join(",") === "231,114"); // U+8F26
assert.throws(() => {ms932Encoder.encode("\u8F27")}, {name:"Error",message:"EncodingError U+8F27"});
assert.throws(() => {ms932Encoder.encode("\u8F28")}, {name:"Error",message:"EncodingError U+8F28"});
r = r && ([...ms932Encoder.encode("輩輪")].join(",") === "148,121,151,214"); // U+8F29
assert.throws(() => {ms932Encoder.encode("\u8F2B")}, {name:"Error",message:"EncodingError U+8F2B"});
assert.throws(() => {ms932Encoder.encode("\u8F2C")}, {name:"Error",message:"EncodingError U+8F2C"});
assert.throws(() => {ms932Encoder.encode("\u8F2D")}, {name:"Error",message:"EncodingError U+8F2D"});
assert.throws(() => {ms932Encoder.encode("\u8F2E")}, {name:"Error",message:"EncodingError U+8F2E"});
r = r && ([...ms932Encoder.encode("輯")].join(",") === "143,83"); // U+8F2F
assert.throws(() => {ms932Encoder.encode("\u8F30")}, {name:"Error",message:"EncodingError U+8F30"});
assert.throws(() => {ms932Encoder.encode("\u8F31")}, {name:"Error",message:"EncodingError U+8F31"});
assert.throws(() => {ms932Encoder.encode("\u8F32")}, {name:"Error",message:"EncodingError U+8F32"});
r = r && ([...ms932Encoder.encode("輳")].join(",") === "231,115"); // U+8F33
assert.throws(() => {ms932Encoder.encode("\u8F34")}, {name:"Error",message:"EncodingError U+8F34"});
assert.throws(() => {ms932Encoder.encode("\u8F35")}, {name:"Error",message:"EncodingError U+8F35"});
assert.throws(() => {ms932Encoder.encode("\u8F36")}, {name:"Error",message:"EncodingError U+8F36"});
assert.throws(() => {ms932Encoder.encode("\u8F37")}, {name:"Error",message:"EncodingError U+8F37"});
r = r && ([...ms932Encoder.encode("輸輹")].join(",") === "151,65,231,117"); // U+8F38
assert.throws(() => {ms932Encoder.encode("\u8F3A")}, {name:"Error",message:"EncodingError U+8F3A"});
r = r && ([...ms932Encoder.encode("輻")].join(",") === "231,116"); // U+8F3B
assert.throws(() => {ms932Encoder.encode("\u8F3C")}, {name:"Error",message:"EncodingError U+8F3C"});
assert.throws(() => {ms932Encoder.encode("\u8F3D")}, {name:"Error",message:"EncodingError U+8F3D"});
r = r && ([...ms932Encoder.encode("輾輿")].join(",") === "231,120,151,96"); // U+8F3E
assert.throws(() => {ms932Encoder.encode("\u8F40")}, {name:"Error",message:"EncodingError U+8F40"});
assert.throws(() => {ms932Encoder.encode("\u8F41")}, {name:"Error",message:"EncodingError U+8F41"});
r = r && ([...ms932Encoder.encode("轂")].join(",") === "231,119"); // U+8F42
assert.throws(() => {ms932Encoder.encode("\u8F43")}, {name:"Error",message:"EncodingError U+8F43"});
r = r && ([...ms932Encoder.encode("轄轅轆")].join(",") === "138,141,231,118,231,123"); // U+8F44
assert.throws(() => {ms932Encoder.encode("\u8F47")}, {name:"Error",message:"EncodingError U+8F47"});
assert.throws(() => {ms932Encoder.encode("\u8F48")}, {name:"Error",message:"EncodingError U+8F48"});
r = r && ([...ms932Encoder.encode("轉")].join(",") === "231,122"); // U+8F49
assert.throws(() => {ms932Encoder.encode("\u8F4A")}, {name:"Error",message:"EncodingError U+8F4A"});
assert.throws(() => {ms932Encoder.encode("\u8F4B")}, {name:"Error",message:"EncodingError U+8F4B"});
r = r && ([...ms932Encoder.encode("轌轍轎")].join(",") === "231,121,147,81,231,124"); // U+8F4C
assert.throws(() => {ms932Encoder.encode("\u8F4F")}, {name:"Error",message:"EncodingError U+8F4F"});
assert.throws(() => {ms932Encoder.encode("\u8F50")}, {name:"Error",message:"EncodingError U+8F50"});
assert.throws(() => {ms932Encoder.encode("\u8F51")}, {name:"Error",message:"EncodingError U+8F51"});
assert.throws(() => {ms932Encoder.encode("\u8F52")}, {name:"Error",message:"EncodingError U+8F52"});
assert.throws(() => {ms932Encoder.encode("\u8F53")}, {name:"Error",message:"EncodingError U+8F53"});
assert.throws(() => {ms932Encoder.encode("\u8F54")}, {name:"Error",message:"EncodingError U+8F54"});
assert.throws(() => {ms932Encoder.encode("\u8F55")}, {name:"Error",message:"EncodingError U+8F55"});
assert.throws(() => {ms932Encoder.encode("\u8F56")}, {name:"Error",message:"EncodingError U+8F56"});
r = r && ([...ms932Encoder.encode("轗")].join(",") === "231,125"); // U+8F57
assert.throws(() => {ms932Encoder.encode("\u8F58")}, {name:"Error",message:"EncodingError U+8F58"});
assert.throws(() => {ms932Encoder.encode("\u8F59")}, {name:"Error",message:"EncodingError U+8F59"});
assert.throws(() => {ms932Encoder.encode("\u8F5A")}, {name:"Error",message:"EncodingError U+8F5A"});
assert.throws(() => {ms932Encoder.encode("\u8F5B")}, {name:"Error",message:"EncodingError U+8F5B"});
r = r && ([...ms932Encoder.encode("轜")].join(",") === "231,126"); // U+8F5C
assert.throws(() => {ms932Encoder.encode("\u8F5D")}, {name:"Error",message:"EncodingError U+8F5D"});
assert.throws(() => {ms932Encoder.encode("\u8F5E")}, {name:"Error",message:"EncodingError U+8F5E"});
r = r && ([...ms932Encoder.encode("轟")].join(",") === "141,140"); // U+8F5F
assert.throws(() => {ms932Encoder.encode("\u8F60")}, {name:"Error",message:"EncodingError U+8F60"});
r = r && ([...ms932Encoder.encode("轡轢轣轤")].join(",") === "140,68,231,128,231,129,231,130"); // U+8F61
assert.throws(() => {ms932Encoder.encode("\u8F65")}, {name:"Error",message:"EncodingError U+8F65"});
assert.throws(() => {ms932Encoder.encode("\u8F66")}, {name:"Error",message:"EncodingError U+8F66"});
assert.throws(() => {ms932Encoder.encode("\u8F67")}, {name:"Error",message:"EncodingError U+8F67"});
assert.throws(() => {ms932Encoder.encode("\u8F68")}, {name:"Error",message:"EncodingError U+8F68"});
assert.throws(() => {ms932Encoder.encode("\u8F69")}, {name:"Error",message:"EncodingError U+8F69"});
assert.throws(() => {ms932Encoder.encode("\u8F6A")}, {name:"Error",message:"EncodingError U+8F6A"});
assert.throws(() => {ms932Encoder.encode("\u8F6B")}, {name:"Error",message:"EncodingError U+8F6B"});
assert.throws(() => {ms932Encoder.encode("\u8F6C")}, {name:"Error",message:"EncodingError U+8F6C"});
assert.throws(() => {ms932Encoder.encode("\u8F6D")}, {name:"Error",message:"EncodingError U+8F6D"});
assert.throws(() => {ms932Encoder.encode("\u8F6E")}, {name:"Error",message:"EncodingError U+8F6E"});
assert.throws(() => {ms932Encoder.encode("\u8F6F")}, {name:"Error",message:"EncodingError U+8F6F"});
assert.throws(() => {ms932Encoder.encode("\u8F70")}, {name:"Error",message:"EncodingError U+8F70"});
assert.throws(() => {ms932Encoder.encode("\u8F71")}, {name:"Error",message:"EncodingError U+8F71"});
assert.throws(() => {ms932Encoder.encode("\u8F72")}, {name:"Error",message:"EncodingError U+8F72"});
assert.throws(() => {ms932Encoder.encode("\u8F73")}, {name:"Error",message:"EncodingError U+8F73"});
assert.throws(() => {ms932Encoder.encode("\u8F74")}, {name:"Error",message:"EncodingError U+8F74"});
assert.throws(() => {ms932Encoder.encode("\u8F75")}, {name:"Error",message:"EncodingError U+8F75"});
assert.throws(() => {ms932Encoder.encode("\u8F76")}, {name:"Error",message:"EncodingError U+8F76"});
assert.throws(() => {ms932Encoder.encode("\u8F77")}, {name:"Error",message:"EncodingError U+8F77"});
assert.throws(() => {ms932Encoder.encode("\u8F78")}, {name:"Error",message:"EncodingError U+8F78"});
assert.throws(() => {ms932Encoder.encode("\u8F79")}, {name:"Error",message:"EncodingError U+8F79"});
assert.throws(() => {ms932Encoder.encode("\u8F7A")}, {name:"Error",message:"EncodingError U+8F7A"});
assert.throws(() => {ms932Encoder.encode("\u8F7B")}, {name:"Error",message:"EncodingError U+8F7B"});
assert.throws(() => {ms932Encoder.encode("\u8F7C")}, {name:"Error",message:"EncodingError U+8F7C"});
assert.throws(() => {ms932Encoder.encode("\u8F7D")}, {name:"Error",message:"EncodingError U+8F7D"});
assert.throws(() => {ms932Encoder.encode("\u8F7E")}, {name:"Error",message:"EncodingError U+8F7E"});
assert.throws(() => {ms932Encoder.encode("\u8F7F")}, {name:"Error",message:"EncodingError U+8F7F"});
assert.throws(() => {ms932Encoder.encode("\u8F80")}, {name:"Error",message:"EncodingError U+8F80"});
assert.throws(() => {ms932Encoder.encode("\u8F81")}, {name:"Error",message:"EncodingError U+8F81"});
assert.throws(() => {ms932Encoder.encode("\u8F82")}, {name:"Error",message:"EncodingError U+8F82"});
assert.throws(() => {ms932Encoder.encode("\u8F83")}, {name:"Error",message:"EncodingError U+8F83"});
assert.throws(() => {ms932Encoder.encode("\u8F84")}, {name:"Error",message:"EncodingError U+8F84"});
assert.throws(() => {ms932Encoder.encode("\u8F85")}, {name:"Error",message:"EncodingError U+8F85"});
assert.throws(() => {ms932Encoder.encode("\u8F86")}, {name:"Error",message:"EncodingError U+8F86"});
assert.throws(() => {ms932Encoder.encode("\u8F87")}, {name:"Error",message:"EncodingError U+8F87"});
assert.throws(() => {ms932Encoder.encode("\u8F88")}, {name:"Error",message:"EncodingError U+8F88"});
assert.throws(() => {ms932Encoder.encode("\u8F89")}, {name:"Error",message:"EncodingError U+8F89"});
assert.throws(() => {ms932Encoder.encode("\u8F8A")}, {name:"Error",message:"EncodingError U+8F8A"});
assert.throws(() => {ms932Encoder.encode("\u8F8B")}, {name:"Error",message:"EncodingError U+8F8B"});
assert.throws(() => {ms932Encoder.encode("\u8F8C")}, {name:"Error",message:"EncodingError U+8F8C"});
assert.throws(() => {ms932Encoder.encode("\u8F8D")}, {name:"Error",message:"EncodingError U+8F8D"});
assert.throws(() => {ms932Encoder.encode("\u8F8E")}, {name:"Error",message:"EncodingError U+8F8E"});
assert.throws(() => {ms932Encoder.encode("\u8F8F")}, {name:"Error",message:"EncodingError U+8F8F"});
assert.throws(() => {ms932Encoder.encode("\u8F90")}, {name:"Error",message:"EncodingError U+8F90"});
assert.throws(() => {ms932Encoder.encode("\u8F91")}, {name:"Error",message:"EncodingError U+8F91"});
assert.throws(() => {ms932Encoder.encode("\u8F92")}, {name:"Error",message:"EncodingError U+8F92"});
assert.throws(() => {ms932Encoder.encode("\u8F93")}, {name:"Error",message:"EncodingError U+8F93"});
assert.throws(() => {ms932Encoder.encode("\u8F94")}, {name:"Error",message:"EncodingError U+8F94"});
assert.throws(() => {ms932Encoder.encode("\u8F95")}, {name:"Error",message:"EncodingError U+8F95"});
assert.throws(() => {ms932Encoder.encode("\u8F96")}, {name:"Error",message:"EncodingError U+8F96"});
assert.throws(() => {ms932Encoder.encode("\u8F97")}, {name:"Error",message:"EncodingError U+8F97"});
assert.throws(() => {ms932Encoder.encode("\u8F98")}, {name:"Error",message:"EncodingError U+8F98"});
assert.throws(() => {ms932Encoder.encode("\u8F99")}, {name:"Error",message:"EncodingError U+8F99"});
assert.throws(() => {ms932Encoder.encode("\u8F9A")}, {name:"Error",message:"EncodingError U+8F9A"});
r = r && ([...ms932Encoder.encode("辛辜")].join(",") === "144,104,231,131"); // U+8F9B
assert.throws(() => {ms932Encoder.encode("\u8F9D")}, {name:"Error",message:"EncodingError U+8F9D"});
r = r && ([...ms932Encoder.encode("辞辟")].join(",") === "142,171,231,132"); // U+8F9E
assert.throws(() => {ms932Encoder.encode("\u8FA0")}, {name:"Error",message:"EncodingError U+8FA0"});
assert.throws(() => {ms932Encoder.encode("\u8FA1")}, {name:"Error",message:"EncodingError U+8FA1"});
assert.throws(() => {ms932Encoder.encode("\u8FA2")}, {name:"Error",message:"EncodingError U+8FA2"});
r = r && ([...ms932Encoder.encode("辣")].join(",") === "231,133"); // U+8FA3
assert.throws(() => {ms932Encoder.encode("\u8FA4")}, {name:"Error",message:"EncodingError U+8FA4"});
assert.throws(() => {ms932Encoder.encode("\u8FA5")}, {name:"Error",message:"EncodingError U+8FA5"});
assert.throws(() => {ms932Encoder.encode("\u8FA6")}, {name:"Error",message:"EncodingError U+8FA6"});
r = r && ([...ms932Encoder.encode("辧辨")].join(",") === "153,159,153,158"); // U+8FA7
assert.throws(() => {ms932Encoder.encode("\u8FA9")}, {name:"Error",message:"EncodingError U+8FA9"});
assert.throws(() => {ms932Encoder.encode("\u8FAA")}, {name:"Error",message:"EncodingError U+8FAA"});
assert.throws(() => {ms932Encoder.encode("\u8FAB")}, {name:"Error",message:"EncodingError U+8FAB"});
assert.throws(() => {ms932Encoder.encode("\u8FAC")}, {name:"Error",message:"EncodingError U+8FAC"});
r = r && ([...ms932Encoder.encode("辭辮辯辰辱農")].join(",") === "231,134,227,144,231,135,146,67,144,74,148,95"); // U+8FAD
assert.throws(() => {ms932Encoder.encode("\u8FB3")}, {name:"Error",message:"EncodingError U+8FB3"});
assert.throws(() => {ms932Encoder.encode("\u8FB4")}, {name:"Error",message:"EncodingError U+8FB4"});
assert.throws(() => {ms932Encoder.encode("\u8FB5")}, {name:"Error",message:"EncodingError U+8FB5"});
assert.throws(() => {ms932Encoder.encode("\u8FB6")}, {name:"Error",message:"EncodingError U+8FB6"});
r = r && ([...ms932Encoder.encode("辷")].join(",") === "231,136"); // U+8FB7
assert.throws(() => {ms932Encoder.encode("\u8FB8")}, {name:"Error",message:"EncodingError U+8FB8"});
assert.throws(() => {ms932Encoder.encode("\u8FB9")}, {name:"Error",message:"EncodingError U+8FB9"});
r = r && ([...ms932Encoder.encode("辺辻込")].join(",") === "149,211,146,210,141,158"); // U+8FBA
assert.throws(() => {ms932Encoder.encode("\u8FBD")}, {name:"Error",message:"EncodingError U+8FBD"});
assert.throws(() => {ms932Encoder.encode("\u8FBE")}, {name:"Error",message:"EncodingError U+8FBE"});
r = r && ([...ms932Encoder.encode("辿")].join(",") === "146,72"); // U+8FBF
assert.throws(() => {ms932Encoder.encode("\u8FC0")}, {name:"Error",message:"EncodingError U+8FC0"});
assert.throws(() => {ms932Encoder.encode("\u8FC1")}, {name:"Error",message:"EncodingError U+8FC1"});
r = r && ([...ms932Encoder.encode("迂")].join(",") === "137,73"); // U+8FC2
assert.throws(() => {ms932Encoder.encode("\u8FC3")}, {name:"Error",message:"EncodingError U+8FC3"});
r = r && ([...ms932Encoder.encode("迄迅")].join(",") === "150,152,144,118"); // U+8FC4
assert.throws(() => {ms932Encoder.encode("\u8FC6")}, {name:"Error",message:"EncodingError U+8FC6"});
assert.throws(() => {ms932Encoder.encode("\u8FC7")}, {name:"Error",message:"EncodingError U+8FC7"});
assert.throws(() => {ms932Encoder.encode("\u8FC8")}, {name:"Error",message:"EncodingError U+8FC8"});
assert.throws(() => {ms932Encoder.encode("\u8FC9")}, {name:"Error",message:"EncodingError U+8FC9"});
assert.throws(() => {ms932Encoder.encode("\u8FCA")}, {name:"Error",message:"EncodingError U+8FCA"});
assert.throws(() => {ms932Encoder.encode("\u8FCB")}, {name:"Error",message:"EncodingError U+8FCB"});
assert.throws(() => {ms932Encoder.encode("\u8FCC")}, {name:"Error",message:"EncodingError U+8FCC"});
assert.throws(() => {ms932Encoder.encode("\u8FCD")}, {name:"Error",message:"EncodingError U+8FCD"});
r = r && ([...ms932Encoder.encode("迎")].join(",") === "140,125"); // U+8FCE
assert.throws(() => {ms932Encoder.encode("\u8FCF")}, {name:"Error",message:"EncodingError U+8FCF"});
assert.throws(() => {ms932Encoder.encode("\u8FD0")}, {name:"Error",message:"EncodingError U+8FD0"});
r = r && ([...ms932Encoder.encode("近")].join(",") === "139,223"); // U+8FD1
assert.throws(() => {ms932Encoder.encode("\u8FD2")}, {name:"Error",message:"EncodingError U+8FD2"});
assert.throws(() => {ms932Encoder.encode("\u8FD3")}, {name:"Error",message:"EncodingError U+8FD3"});
r = r && ([...ms932Encoder.encode("返")].join(",") === "149,212"); // U+8FD4
assert.throws(() => {ms932Encoder.encode("\u8FD5")}, {name:"Error",message:"EncodingError U+8FD5"});
assert.throws(() => {ms932Encoder.encode("\u8FD6")}, {name:"Error",message:"EncodingError U+8FD6"});
assert.throws(() => {ms932Encoder.encode("\u8FD7")}, {name:"Error",message:"EncodingError U+8FD7"});
assert.throws(() => {ms932Encoder.encode("\u8FD8")}, {name:"Error",message:"EncodingError U+8FD8"});
assert.throws(() => {ms932Encoder.encode("\u8FD9")}, {name:"Error",message:"EncodingError U+8FD9"});
r = r && ([...ms932Encoder.encode("迚")].join(",") === "231,137"); // U+8FDA
assert.throws(() => {ms932Encoder.encode("\u8FDB")}, {name:"Error",message:"EncodingError U+8FDB"});
assert.throws(() => {ms932Encoder.encode("\u8FDC")}, {name:"Error",message:"EncodingError U+8FDC"});
assert.throws(() => {ms932Encoder.encode("\u8FDD")}, {name:"Error",message:"EncodingError U+8FDD"});
assert.throws(() => {ms932Encoder.encode("\u8FDE")}, {name:"Error",message:"EncodingError U+8FDE"});
assert.throws(() => {ms932Encoder.encode("\u8FDF")}, {name:"Error",message:"EncodingError U+8FDF"});
assert.throws(() => {ms932Encoder.encode("\u8FE0")}, {name:"Error",message:"EncodingError U+8FE0"});
assert.throws(() => {ms932Encoder.encode("\u8FE1")}, {name:"Error",message:"EncodingError U+8FE1"});
r = r && ([...ms932Encoder.encode("迢")].join(",") === "231,139"); // U+8FE2
assert.throws(() => {ms932Encoder.encode("\u8FE3")}, {name:"Error",message:"EncodingError U+8FE3"});
assert.throws(() => {ms932Encoder.encode("\u8FE4")}, {name:"Error",message:"EncodingError U+8FE4"});
r = r && ([...ms932Encoder.encode("迥迦")].join(",") === "231,138,137,222"); // U+8FE5
assert.throws(() => {ms932Encoder.encode("\u8FE7")}, {name:"Error",message:"EncodingError U+8FE7"});
assert.throws(() => {ms932Encoder.encode("\u8FE8")}, {name:"Error",message:"EncodingError U+8FE8"});
r = r && ([...ms932Encoder.encode("迩迪迫")].join(",") === "147,244,231,140,148,151"); // U+8FE9
assert.throws(() => {ms932Encoder.encode("\u8FEC")}, {name:"Error",message:"EncodingError U+8FEC"});
r = r && ([...ms932Encoder.encode("迭")].join(",") === "147,82"); // U+8FED
assert.throws(() => {ms932Encoder.encode("\u8FEE")}, {name:"Error",message:"EncodingError U+8FEE"});
r = r && ([...ms932Encoder.encode("迯述")].join(",") === "231,141,143,113"); // U+8FEF
assert.throws(() => {ms932Encoder.encode("\u8FF1")}, {name:"Error",message:"EncodingError U+8FF1"});
assert.throws(() => {ms932Encoder.encode("\u8FF2")}, {name:"Error",message:"EncodingError U+8FF2"});
assert.throws(() => {ms932Encoder.encode("\u8FF3")}, {name:"Error",message:"EncodingError U+8FF3"});
r = r && ([...ms932Encoder.encode("迴")].join(",") === "231,143"); // U+8FF4
assert.throws(() => {ms932Encoder.encode("\u8FF5")}, {name:"Error",message:"EncodingError U+8FF5"});
assert.throws(() => {ms932Encoder.encode("\u8FF6")}, {name:"Error",message:"EncodingError U+8FF6"});
r = r && ([...ms932Encoder.encode("迷迸迹迺")].join(",") === "150,192,231,158,231,145,231,146"); // U+8FF7
assert.throws(() => {ms932Encoder.encode("\u8FFB")}, {name:"Error",message:"EncodingError U+8FFB"});
assert.throws(() => {ms932Encoder.encode("\u8FFC")}, {name:"Error",message:"EncodingError U+8FFC"});
r = r && ([...ms932Encoder.encode("追")].join(",") === "146,199"); // U+8FFD
assert.throws(() => {ms932Encoder.encode("\u8FFE")}, {name:"Error",message:"EncodingError U+8FFE"});
assert.throws(() => {ms932Encoder.encode("\u8FFF")}, {name:"Error",message:"EncodingError U+8FFF"});

assert.strictEqual(r, true);

  });

});
