import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 7", () => {

  it("encode(string) - U+6C00-U+6FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u6C00")}, {name:"Error",message:"EncodingError U+6C00"});
assert.throws(() => {ms932Encoder.encode("\u6C01")}, {name:"Error",message:"EncodingError U+6C01"});
assert.throws(() => {ms932Encoder.encode("\u6C02")}, {name:"Error",message:"EncodingError U+6C02"});
assert.throws(() => {ms932Encoder.encode("\u6C03")}, {name:"Error",message:"EncodingError U+6C03"});
assert.throws(() => {ms932Encoder.encode("\u6C04")}, {name:"Error",message:"EncodingError U+6C04"});
assert.throws(() => {ms932Encoder.encode("\u6C05")}, {name:"Error",message:"EncodingError U+6C05"});
assert.throws(() => {ms932Encoder.encode("\u6C06")}, {name:"Error",message:"EncodingError U+6C06"});
assert.throws(() => {ms932Encoder.encode("\u6C07")}, {name:"Error",message:"EncodingError U+6C07"});
r = r && ([...ms932Encoder.encode("氈")].join(",") === "159,129"); // U+6C08
assert.throws(() => {ms932Encoder.encode("\u6C09")}, {name:"Error",message:"EncodingError U+6C09"});
assert.throws(() => {ms932Encoder.encode("\u6C0A")}, {name:"Error",message:"EncodingError U+6C0A"});
assert.throws(() => {ms932Encoder.encode("\u6C0B")}, {name:"Error",message:"EncodingError U+6C0B"});
assert.throws(() => {ms932Encoder.encode("\u6C0C")}, {name:"Error",message:"EncodingError U+6C0C"});
assert.throws(() => {ms932Encoder.encode("\u6C0D")}, {name:"Error",message:"EncodingError U+6C0D"});
assert.throws(() => {ms932Encoder.encode("\u6C0E")}, {name:"Error",message:"EncodingError U+6C0E"});
r = r && ([...ms932Encoder.encode("氏")].join(",") === "142,129"); // U+6C0F
assert.throws(() => {ms932Encoder.encode("\u6C10")}, {name:"Error",message:"EncodingError U+6C10"});
r = r && ([...ms932Encoder.encode("民")].join(",") === "150,175"); // U+6C11
assert.throws(() => {ms932Encoder.encode("\u6C12")}, {name:"Error",message:"EncodingError U+6C12"});
r = r && ([...ms932Encoder.encode("氓气")].join(",") === "159,130,159,131"); // U+6C13
assert.throws(() => {ms932Encoder.encode("\u6C15")}, {name:"Error",message:"EncodingError U+6C15"});
assert.throws(() => {ms932Encoder.encode("\u6C16")}, {name:"Error",message:"EncodingError U+6C16"});
r = r && ([...ms932Encoder.encode("気")].join(",") === "139,67"); // U+6C17
assert.throws(() => {ms932Encoder.encode("\u6C18")}, {name:"Error",message:"EncodingError U+6C18"});
assert.throws(() => {ms932Encoder.encode("\u6C19")}, {name:"Error",message:"EncodingError U+6C19"});
assert.throws(() => {ms932Encoder.encode("\u6C1A")}, {name:"Error",message:"EncodingError U+6C1A"});
r = r && ([...ms932Encoder.encode("氛")].join(",") === "159,132"); // U+6C1B
assert.throws(() => {ms932Encoder.encode("\u6C1C")}, {name:"Error",message:"EncodingError U+6C1C"});
assert.throws(() => {ms932Encoder.encode("\u6C1D")}, {name:"Error",message:"EncodingError U+6C1D"});
assert.throws(() => {ms932Encoder.encode("\u6C1E")}, {name:"Error",message:"EncodingError U+6C1E"});
assert.throws(() => {ms932Encoder.encode("\u6C1F")}, {name:"Error",message:"EncodingError U+6C1F"});
assert.throws(() => {ms932Encoder.encode("\u6C20")}, {name:"Error",message:"EncodingError U+6C20"});
assert.throws(() => {ms932Encoder.encode("\u6C21")}, {name:"Error",message:"EncodingError U+6C21"});
assert.throws(() => {ms932Encoder.encode("\u6C22")}, {name:"Error",message:"EncodingError U+6C22"});
r = r && ([...ms932Encoder.encode("氣氤")].join(",") === "159,134,159,133"); // U+6C23
assert.throws(() => {ms932Encoder.encode("\u6C25")}, {name:"Error",message:"EncodingError U+6C25"});
assert.throws(() => {ms932Encoder.encode("\u6C26")}, {name:"Error",message:"EncodingError U+6C26"});
assert.throws(() => {ms932Encoder.encode("\u6C27")}, {name:"Error",message:"EncodingError U+6C27"});
assert.throws(() => {ms932Encoder.encode("\u6C28")}, {name:"Error",message:"EncodingError U+6C28"});
assert.throws(() => {ms932Encoder.encode("\u6C29")}, {name:"Error",message:"EncodingError U+6C29"});
assert.throws(() => {ms932Encoder.encode("\u6C2A")}, {name:"Error",message:"EncodingError U+6C2A"});
assert.throws(() => {ms932Encoder.encode("\u6C2B")}, {name:"Error",message:"EncodingError U+6C2B"});
assert.throws(() => {ms932Encoder.encode("\u6C2C")}, {name:"Error",message:"EncodingError U+6C2C"});
assert.throws(() => {ms932Encoder.encode("\u6C2D")}, {name:"Error",message:"EncodingError U+6C2D"});
assert.throws(() => {ms932Encoder.encode("\u6C2E")}, {name:"Error",message:"EncodingError U+6C2E"});
assert.throws(() => {ms932Encoder.encode("\u6C2F")}, {name:"Error",message:"EncodingError U+6C2F"});
assert.throws(() => {ms932Encoder.encode("\u6C30")}, {name:"Error",message:"EncodingError U+6C30"});
assert.throws(() => {ms932Encoder.encode("\u6C31")}, {name:"Error",message:"EncodingError U+6C31"});
assert.throws(() => {ms932Encoder.encode("\u6C32")}, {name:"Error",message:"EncodingError U+6C32"});
assert.throws(() => {ms932Encoder.encode("\u6C33")}, {name:"Error",message:"EncodingError U+6C33"});
r = r && ([...ms932Encoder.encode("水")].join(",") === "144,133"); // U+6C34
assert.throws(() => {ms932Encoder.encode("\u6C35")}, {name:"Error",message:"EncodingError U+6C35"});
assert.throws(() => {ms932Encoder.encode("\u6C36")}, {name:"Error",message:"EncodingError U+6C36"});
r = r && ([...ms932Encoder.encode("氷永")].join(",") === "149,88,137,105"); // U+6C37
assert.throws(() => {ms932Encoder.encode("\u6C39")}, {name:"Error",message:"EncodingError U+6C39"});
assert.throws(() => {ms932Encoder.encode("\u6C3A")}, {name:"Error",message:"EncodingError U+6C3A"});
assert.throws(() => {ms932Encoder.encode("\u6C3B")}, {name:"Error",message:"EncodingError U+6C3B"});
assert.throws(() => {ms932Encoder.encode("\u6C3C")}, {name:"Error",message:"EncodingError U+6C3C"});
assert.throws(() => {ms932Encoder.encode("\u6C3D")}, {name:"Error",message:"EncodingError U+6C3D"});
r = r && ([...ms932Encoder.encode("氾氿汀汁求")].join(",") === "148,195,250,245,146,243,143,96,139,129"); // U+6C3E
assert.throws(() => {ms932Encoder.encode("\u6C43")}, {name:"Error",message:"EncodingError U+6C43"});
assert.throws(() => {ms932Encoder.encode("\u6C44")}, {name:"Error",message:"EncodingError U+6C44"});
assert.throws(() => {ms932Encoder.encode("\u6C45")}, {name:"Error",message:"EncodingError U+6C45"});
assert.throws(() => {ms932Encoder.encode("\u6C46")}, {name:"Error",message:"EncodingError U+6C46"});
assert.throws(() => {ms932Encoder.encode("\u6C47")}, {name:"Error",message:"EncodingError U+6C47"});
assert.throws(() => {ms932Encoder.encode("\u6C48")}, {name:"Error",message:"EncodingError U+6C48"});
assert.throws(() => {ms932Encoder.encode("\u6C49")}, {name:"Error",message:"EncodingError U+6C49"});
assert.throws(() => {ms932Encoder.encode("\u6C4A")}, {name:"Error",message:"EncodingError U+6C4A"});
assert.throws(() => {ms932Encoder.encode("\u6C4B")}, {name:"Error",message:"EncodingError U+6C4B"});
assert.throws(() => {ms932Encoder.encode("\u6C4C")}, {name:"Error",message:"EncodingError U+6C4C"});
assert.throws(() => {ms932Encoder.encode("\u6C4D")}, {name:"Error",message:"EncodingError U+6C4D"});
r = r && ([...ms932Encoder.encode("汎")].join(",") === "148,196"); // U+6C4E
assert.throws(() => {ms932Encoder.encode("\u6C4F")}, {name:"Error",message:"EncodingError U+6C4F"});
r = r && ([...ms932Encoder.encode("汐")].join(",") === "142,172"); // U+6C50
assert.throws(() => {ms932Encoder.encode("\u6C51")}, {name:"Error",message:"EncodingError U+6C51"});
assert.throws(() => {ms932Encoder.encode("\u6C52")}, {name:"Error",message:"EncodingError U+6C52"});
assert.throws(() => {ms932Encoder.encode("\u6C53")}, {name:"Error",message:"EncodingError U+6C53"});
assert.throws(() => {ms932Encoder.encode("\u6C54")}, {name:"Error",message:"EncodingError U+6C54"});
r = r && ([...ms932Encoder.encode("汕")].join(",") === "159,136"); // U+6C55
assert.throws(() => {ms932Encoder.encode("\u6C56")}, {name:"Error",message:"EncodingError U+6C56"});
r = r && ([...ms932Encoder.encode("汗")].join(",") === "138,190"); // U+6C57
assert.throws(() => {ms932Encoder.encode("\u6C58")}, {name:"Error",message:"EncodingError U+6C58"});
assert.throws(() => {ms932Encoder.encode("\u6C59")}, {name:"Error",message:"EncodingError U+6C59"});
r = r && ([...ms932Encoder.encode("汚")].join(",") === "137,152"); // U+6C5A
assert.throws(() => {ms932Encoder.encode("\u6C5B")}, {name:"Error",message:"EncodingError U+6C5B"});
r = r && ([...ms932Encoder.encode("汜汝汞江池")].join(",") === "250,246,147,240,159,135,141,93,146,114"); // U+6C5C
assert.throws(() => {ms932Encoder.encode("\u6C61")}, {name:"Error",message:"EncodingError U+6C61"});
r = r && ([...ms932Encoder.encode("汢")].join(",") === "159,137"); // U+6C62
assert.throws(() => {ms932Encoder.encode("\u6C63")}, {name:"Error",message:"EncodingError U+6C63"});
assert.throws(() => {ms932Encoder.encode("\u6C64")}, {name:"Error",message:"EncodingError U+6C64"});
assert.throws(() => {ms932Encoder.encode("\u6C65")}, {name:"Error",message:"EncodingError U+6C65"});
assert.throws(() => {ms932Encoder.encode("\u6C66")}, {name:"Error",message:"EncodingError U+6C66"});
assert.throws(() => {ms932Encoder.encode("\u6C67")}, {name:"Error",message:"EncodingError U+6C67"});
r = r && ([...ms932Encoder.encode("汨")].join(",") === "159,145"); // U+6C68
assert.throws(() => {ms932Encoder.encode("\u6C69")}, {name:"Error",message:"EncodingError U+6C69"});
r = r && ([...ms932Encoder.encode("汪")].join(",") === "159,138"); // U+6C6A
assert.throws(() => {ms932Encoder.encode("\u6C6B")}, {name:"Error",message:"EncodingError U+6C6B"});
assert.throws(() => {ms932Encoder.encode("\u6C6C")}, {name:"Error",message:"EncodingError U+6C6C"});
assert.throws(() => {ms932Encoder.encode("\u6C6D")}, {name:"Error",message:"EncodingError U+6C6D"});
assert.throws(() => {ms932Encoder.encode("\u6C6E")}, {name:"Error",message:"EncodingError U+6C6E"});
r = r && ([...ms932Encoder.encode("汯汰")].join(",") === "250,248,145,191"); // U+6C6F
assert.throws(() => {ms932Encoder.encode("\u6C71")}, {name:"Error",message:"EncodingError U+6C71"});
r = r && ([...ms932Encoder.encode("汲汳")].join(",") === "139,130,159,146"); // U+6C72
assert.throws(() => {ms932Encoder.encode("\u6C74")}, {name:"Error",message:"EncodingError U+6C74"});
assert.throws(() => {ms932Encoder.encode("\u6C75")}, {name:"Error",message:"EncodingError U+6C75"});
assert.throws(() => {ms932Encoder.encode("\u6C76")}, {name:"Error",message:"EncodingError U+6C76"});
assert.throws(() => {ms932Encoder.encode("\u6C77")}, {name:"Error",message:"EncodingError U+6C77"});
assert.throws(() => {ms932Encoder.encode("\u6C78")}, {name:"Error",message:"EncodingError U+6C78"});
assert.throws(() => {ms932Encoder.encode("\u6C79")}, {name:"Error",message:"EncodingError U+6C79"});
r = r && ([...ms932Encoder.encode("決")].join(",") === "140,136"); // U+6C7A
assert.throws(() => {ms932Encoder.encode("\u6C7B")}, {name:"Error",message:"EncodingError U+6C7B"});
assert.throws(() => {ms932Encoder.encode("\u6C7C")}, {name:"Error",message:"EncodingError U+6C7C"});
r = r && ([...ms932Encoder.encode("汽汾")].join(",") === "139,68,159,144"); // U+6C7D
assert.throws(() => {ms932Encoder.encode("\u6C7F")}, {name:"Error",message:"EncodingError U+6C7F"});
assert.throws(() => {ms932Encoder.encode("\u6C80")}, {name:"Error",message:"EncodingError U+6C80"});
r = r && ([...ms932Encoder.encode("沁沂沃")].join(",") === "159,142,159,139,151,128"); // U+6C81
assert.throws(() => {ms932Encoder.encode("\u6C84")}, {name:"Error",message:"EncodingError U+6C84"});
assert.throws(() => {ms932Encoder.encode("\u6C85")}, {name:"Error",message:"EncodingError U+6C85"});
r = r && ([...ms932Encoder.encode("沆")].join(",") === "250,247"); // U+6C86
assert.throws(() => {ms932Encoder.encode("\u6C87")}, {name:"Error",message:"EncodingError U+6C87"});
r = r && ([...ms932Encoder.encode("沈")].join(",") === "146,190"); // U+6C88
assert.throws(() => {ms932Encoder.encode("\u6C89")}, {name:"Error",message:"EncodingError U+6C89"});
assert.throws(() => {ms932Encoder.encode("\u6C8A")}, {name:"Error",message:"EncodingError U+6C8A"});
assert.throws(() => {ms932Encoder.encode("\u6C8B")}, {name:"Error",message:"EncodingError U+6C8B"});
r = r && ([...ms932Encoder.encode("沌沍")].join(",") === "147,215,159,140"); // U+6C8C
assert.throws(() => {ms932Encoder.encode("\u6C8E")}, {name:"Error",message:"EncodingError U+6C8E"});
assert.throws(() => {ms932Encoder.encode("\u6C8F")}, {name:"Error",message:"EncodingError U+6C8F"});
r = r && ([...ms932Encoder.encode("沐")].join(",") === "159,148"); // U+6C90
assert.throws(() => {ms932Encoder.encode("\u6C91")}, {name:"Error",message:"EncodingError U+6C91"});
r = r && ([...ms932Encoder.encode("沒沓")].join(",") === "159,147,140,66"); // U+6C92
assert.throws(() => {ms932Encoder.encode("\u6C94")}, {name:"Error",message:"EncodingError U+6C94"});
assert.throws(() => {ms932Encoder.encode("\u6C95")}, {name:"Error",message:"EncodingError U+6C95"});
r = r && ([...ms932Encoder.encode("沖")].join(",") === "137,171"); // U+6C96
assert.throws(() => {ms932Encoder.encode("\u6C97")}, {name:"Error",message:"EncodingError U+6C97"});
assert.throws(() => {ms932Encoder.encode("\u6C98")}, {name:"Error",message:"EncodingError U+6C98"});
r = r && ([...ms932Encoder.encode("沙沚沛")].join(",") === "141,185,159,141,159,143"); // U+6C99
assert.throws(() => {ms932Encoder.encode("\u6C9C")}, {name:"Error",message:"EncodingError U+6C9C"});
assert.throws(() => {ms932Encoder.encode("\u6C9D")}, {name:"Error",message:"EncodingError U+6C9D"});
assert.throws(() => {ms932Encoder.encode("\u6C9E")}, {name:"Error",message:"EncodingError U+6C9E"});
assert.throws(() => {ms932Encoder.encode("\u6C9F")}, {name:"Error",message:"EncodingError U+6C9F"});
assert.throws(() => {ms932Encoder.encode("\u6CA0")}, {name:"Error",message:"EncodingError U+6CA0"});
r = r && ([...ms932Encoder.encode("没沢")].join(",") === "150,118,145,242"); // U+6CA1
assert.throws(() => {ms932Encoder.encode("\u6CA3")}, {name:"Error",message:"EncodingError U+6CA3"});
assert.throws(() => {ms932Encoder.encode("\u6CA4")}, {name:"Error",message:"EncodingError U+6CA4"});
assert.throws(() => {ms932Encoder.encode("\u6CA5")}, {name:"Error",message:"EncodingError U+6CA5"});
assert.throws(() => {ms932Encoder.encode("\u6CA6")}, {name:"Error",message:"EncodingError U+6CA6"});
assert.throws(() => {ms932Encoder.encode("\u6CA7")}, {name:"Error",message:"EncodingError U+6CA7"});
assert.throws(() => {ms932Encoder.encode("\u6CA8")}, {name:"Error",message:"EncodingError U+6CA8"});
assert.throws(() => {ms932Encoder.encode("\u6CA9")}, {name:"Error",message:"EncodingError U+6CA9"});
assert.throws(() => {ms932Encoder.encode("\u6CAA")}, {name:"Error",message:"EncodingError U+6CAA"});
r = r && ([...ms932Encoder.encode("沫")].join(",") === "150,151"); // U+6CAB
assert.throws(() => {ms932Encoder.encode("\u6CAC")}, {name:"Error",message:"EncodingError U+6CAC"});
assert.throws(() => {ms932Encoder.encode("\u6CAD")}, {name:"Error",message:"EncodingError U+6CAD"});
r = r && ([...ms932Encoder.encode("沮")].join(",") === "159,156"); // U+6CAE
assert.throws(() => {ms932Encoder.encode("\u6CAF")}, {name:"Error",message:"EncodingError U+6CAF"});
assert.throws(() => {ms932Encoder.encode("\u6CB0")}, {name:"Error",message:"EncodingError U+6CB0"});
r = r && ([...ms932Encoder.encode("沱")].join(",") === "159,157"); // U+6CB1
assert.throws(() => {ms932Encoder.encode("\u6CB2")}, {name:"Error",message:"EncodingError U+6CB2"});
r = r && ([...ms932Encoder.encode("河")].join(",") === "137,205"); // U+6CB3
assert.throws(() => {ms932Encoder.encode("\u6CB4")}, {name:"Error",message:"EncodingError U+6CB4"});
assert.throws(() => {ms932Encoder.encode("\u6CB5")}, {name:"Error",message:"EncodingError U+6CB5"});
assert.throws(() => {ms932Encoder.encode("\u6CB6")}, {name:"Error",message:"EncodingError U+6CB6"});
assert.throws(() => {ms932Encoder.encode("\u6CB7")}, {name:"Error",message:"EncodingError U+6CB7"});
r = r && ([...ms932Encoder.encode("沸油沺治沼沽沾沿")].join(",") === "149,166,150,251,159,159,142,161,143,192,159,152,159,158,137,136"); // U+6CB8
assert.throws(() => {ms932Encoder.encode("\u6CC0")}, {name:"Error",message:"EncodingError U+6CC0"});
r = r && ([...ms932Encoder.encode("況")].join(",") === "139,181"); // U+6CC1
assert.throws(() => {ms932Encoder.encode("\u6CC2")}, {name:"Error",message:"EncodingError U+6CC2"});
assert.throws(() => {ms932Encoder.encode("\u6CC3")}, {name:"Error",message:"EncodingError U+6CC3"});
r = r && ([...ms932Encoder.encode("泄泅")].join(",") === "159,149,159,154"); // U+6CC4
assert.throws(() => {ms932Encoder.encode("\u6CC6")}, {name:"Error",message:"EncodingError U+6CC6"});
assert.throws(() => {ms932Encoder.encode("\u6CC7")}, {name:"Error",message:"EncodingError U+6CC7"});
assert.throws(() => {ms932Encoder.encode("\u6CC8")}, {name:"Error",message:"EncodingError U+6CC8"});
r = r && ([...ms932Encoder.encode("泉泊")].join(",") === "144,242,148,145"); // U+6CC9
assert.throws(() => {ms932Encoder.encode("\u6CCB")}, {name:"Error",message:"EncodingError U+6CCB"});
r = r && ([...ms932Encoder.encode("泌")].join(",") === "148,229"); // U+6CCC
assert.throws(() => {ms932Encoder.encode("\u6CCD")}, {name:"Error",message:"EncodingError U+6CCD"});
assert.throws(() => {ms932Encoder.encode("\u6CCE")}, {name:"Error",message:"EncodingError U+6CCE"});
assert.throws(() => {ms932Encoder.encode("\u6CCF")}, {name:"Error",message:"EncodingError U+6CCF"});
assert.throws(() => {ms932Encoder.encode("\u6CD0")}, {name:"Error",message:"EncodingError U+6CD0"});
assert.throws(() => {ms932Encoder.encode("\u6CD1")}, {name:"Error",message:"EncodingError U+6CD1"});
assert.throws(() => {ms932Encoder.encode("\u6CD2")}, {name:"Error",message:"EncodingError U+6CD2"});
r = r && ([...ms932Encoder.encode("泓")].join(",") === "159,151"); // U+6CD3
assert.throws(() => {ms932Encoder.encode("\u6CD4")}, {name:"Error",message:"EncodingError U+6CD4"});
r = r && ([...ms932Encoder.encode("法")].join(",") === "150,64"); // U+6CD5
assert.throws(() => {ms932Encoder.encode("\u6CD6")}, {name:"Error",message:"EncodingError U+6CD6"});
r = r && ([...ms932Encoder.encode("泗")].join(",") === "159,153"); // U+6CD7
assert.throws(() => {ms932Encoder.encode("\u6CD8")}, {name:"Error",message:"EncodingError U+6CD8"});
r = r && ([...ms932Encoder.encode("泙泚泛")].join(",") === "159,162,250,249,159,160"); // U+6CD9
assert.throws(() => {ms932Encoder.encode("\u6CDC")}, {name:"Error",message:"EncodingError U+6CDC"});
r = r && ([...ms932Encoder.encode("泝")].join(",") === "159,155"); // U+6CDD
assert.throws(() => {ms932Encoder.encode("\u6CDE")}, {name:"Error",message:"EncodingError U+6CDE"});
assert.throws(() => {ms932Encoder.encode("\u6CDF")}, {name:"Error",message:"EncodingError U+6CDF"});
assert.throws(() => {ms932Encoder.encode("\u6CE0")}, {name:"Error",message:"EncodingError U+6CE0"});
r = r && ([...ms932Encoder.encode("泡波泣")].join(",") === "150,65,148,103,139,131"); // U+6CE1
assert.throws(() => {ms932Encoder.encode("\u6CE4")}, {name:"Error",message:"EncodingError U+6CE4"});
r = r && ([...ms932Encoder.encode("泥")].join(",") === "147,68"); // U+6CE5
assert.throws(() => {ms932Encoder.encode("\u6CE6")}, {name:"Error",message:"EncodingError U+6CE6"});
assert.throws(() => {ms932Encoder.encode("\u6CE7")}, {name:"Error",message:"EncodingError U+6CE7"});
r = r && ([...ms932Encoder.encode("注")].join(",") === "146,141"); // U+6CE8
assert.throws(() => {ms932Encoder.encode("\u6CE9")}, {name:"Error",message:"EncodingError U+6CE9"});
r = r && ([...ms932Encoder.encode("泪")].join(",") === "159,163"); // U+6CEA
assert.throws(() => {ms932Encoder.encode("\u6CEB")}, {name:"Error",message:"EncodingError U+6CEB"});
assert.throws(() => {ms932Encoder.encode("\u6CEC")}, {name:"Error",message:"EncodingError U+6CEC"});
assert.throws(() => {ms932Encoder.encode("\u6CED")}, {name:"Error",message:"EncodingError U+6CED"});
assert.throws(() => {ms932Encoder.encode("\u6CEE")}, {name:"Error",message:"EncodingError U+6CEE"});
r = r && ([...ms932Encoder.encode("泯泰泱")].join(",") === "159,161,145,215,159,150"); // U+6CEF
assert.throws(() => {ms932Encoder.encode("\u6CF2")}, {name:"Error",message:"EncodingError U+6CF2"});
r = r && ([...ms932Encoder.encode("泳")].join(",") === "137,106"); // U+6CF3
assert.throws(() => {ms932Encoder.encode("\u6CF4")}, {name:"Error",message:"EncodingError U+6CF4"});
assert.throws(() => {ms932Encoder.encode("\u6CF5")}, {name:"Error",message:"EncodingError U+6CF5"});
assert.throws(() => {ms932Encoder.encode("\u6CF6")}, {name:"Error",message:"EncodingError U+6CF6"});
assert.throws(() => {ms932Encoder.encode("\u6CF7")}, {name:"Error",message:"EncodingError U+6CF7"});
assert.throws(() => {ms932Encoder.encode("\u6CF8")}, {name:"Error",message:"EncodingError U+6CF8"});
assert.throws(() => {ms932Encoder.encode("\u6CF9")}, {name:"Error",message:"EncodingError U+6CF9"});
assert.throws(() => {ms932Encoder.encode("\u6CFA")}, {name:"Error",message:"EncodingError U+6CFA"});
assert.throws(() => {ms932Encoder.encode("\u6CFB")}, {name:"Error",message:"EncodingError U+6CFB"});
assert.throws(() => {ms932Encoder.encode("\u6CFC")}, {name:"Error",message:"EncodingError U+6CFC"});
assert.throws(() => {ms932Encoder.encode("\u6CFD")}, {name:"Error",message:"EncodingError U+6CFD"});
assert.throws(() => {ms932Encoder.encode("\u6CFE")}, {name:"Error",message:"EncodingError U+6CFE"});
assert.throws(() => {ms932Encoder.encode("\u6CFF")}, {name:"Error",message:"EncodingError U+6CFF"});
assert.throws(() => {ms932Encoder.encode("\u6D00")}, {name:"Error",message:"EncodingError U+6D00"});
assert.throws(() => {ms932Encoder.encode("\u6D01")}, {name:"Error",message:"EncodingError U+6D01"});
assert.throws(() => {ms932Encoder.encode("\u6D02")}, {name:"Error",message:"EncodingError U+6D02"});
assert.throws(() => {ms932Encoder.encode("\u6D03")}, {name:"Error",message:"EncodingError U+6D03"});
r = r && ([...ms932Encoder.encode("洄")].join(",") === "250,250"); // U+6D04
assert.throws(() => {ms932Encoder.encode("\u6D05")}, {name:"Error",message:"EncodingError U+6D05"});
assert.throws(() => {ms932Encoder.encode("\u6D06")}, {name:"Error",message:"EncodingError U+6D06"});
assert.throws(() => {ms932Encoder.encode("\u6D07")}, {name:"Error",message:"EncodingError U+6D07"});
assert.throws(() => {ms932Encoder.encode("\u6D08")}, {name:"Error",message:"EncodingError U+6D08"});
assert.throws(() => {ms932Encoder.encode("\u6D09")}, {name:"Error",message:"EncodingError U+6D09"});
assert.throws(() => {ms932Encoder.encode("\u6D0A")}, {name:"Error",message:"EncodingError U+6D0A"});
r = r && ([...ms932Encoder.encode("洋洌")].join(",") === "151,109,159,174"); // U+6D0B
assert.throws(() => {ms932Encoder.encode("\u6D0D")}, {name:"Error",message:"EncodingError U+6D0D"});
assert.throws(() => {ms932Encoder.encode("\u6D0E")}, {name:"Error",message:"EncodingError U+6D0E"});
assert.throws(() => {ms932Encoder.encode("\u6D0F")}, {name:"Error",message:"EncodingError U+6D0F"});
assert.throws(() => {ms932Encoder.encode("\u6D10")}, {name:"Error",message:"EncodingError U+6D10"});
assert.throws(() => {ms932Encoder.encode("\u6D11")}, {name:"Error",message:"EncodingError U+6D11"});
r = r && ([...ms932Encoder.encode("洒")].join(",") === "159,173"); // U+6D12
assert.throws(() => {ms932Encoder.encode("\u6D13")}, {name:"Error",message:"EncodingError U+6D13"});
assert.throws(() => {ms932Encoder.encode("\u6D14")}, {name:"Error",message:"EncodingError U+6D14"});
assert.throws(() => {ms932Encoder.encode("\u6D15")}, {name:"Error",message:"EncodingError U+6D15"});
assert.throws(() => {ms932Encoder.encode("\u6D16")}, {name:"Error",message:"EncodingError U+6D16"});
r = r && ([...ms932Encoder.encode("洗")].join(",") === "144,244"); // U+6D17
assert.throws(() => {ms932Encoder.encode("\u6D18")}, {name:"Error",message:"EncodingError U+6D18"});
r = r && ([...ms932Encoder.encode("洙")].join(",") === "159,170"); // U+6D19
assert.throws(() => {ms932Encoder.encode("\u6D1A")}, {name:"Error",message:"EncodingError U+6D1A"});
r = r && ([...ms932Encoder.encode("洛")].join(",") === "151,140"); // U+6D1B
assert.throws(() => {ms932Encoder.encode("\u6D1C")}, {name:"Error",message:"EncodingError U+6D1C"});
assert.throws(() => {ms932Encoder.encode("\u6D1D")}, {name:"Error",message:"EncodingError U+6D1D"});
r = r && ([...ms932Encoder.encode("洞洟")].join(",") === "147,180,159,164"); // U+6D1E
assert.throws(() => {ms932Encoder.encode("\u6D20")}, {name:"Error",message:"EncodingError U+6D20"});
assert.throws(() => {ms932Encoder.encode("\u6D21")}, {name:"Error",message:"EncodingError U+6D21"});
assert.throws(() => {ms932Encoder.encode("\u6D22")}, {name:"Error",message:"EncodingError U+6D22"});
assert.throws(() => {ms932Encoder.encode("\u6D23")}, {name:"Error",message:"EncodingError U+6D23"});
assert.throws(() => {ms932Encoder.encode("\u6D24")}, {name:"Error",message:"EncodingError U+6D24"});
r = r && ([...ms932Encoder.encode("津")].join(",") === "146,195"); // U+6D25
assert.throws(() => {ms932Encoder.encode("\u6D26")}, {name:"Error",message:"EncodingError U+6D26"});
assert.throws(() => {ms932Encoder.encode("\u6D27")}, {name:"Error",message:"EncodingError U+6D27"});
assert.throws(() => {ms932Encoder.encode("\u6D28")}, {name:"Error",message:"EncodingError U+6D28"});
r = r && ([...ms932Encoder.encode("洩洪洫")].join(",") === "137,107,141,94,159,167"); // U+6D29
assert.throws(() => {ms932Encoder.encode("\u6D2C")}, {name:"Error",message:"EncodingError U+6D2C"});
assert.throws(() => {ms932Encoder.encode("\u6D2D")}, {name:"Error",message:"EncodingError U+6D2D"});
assert.throws(() => {ms932Encoder.encode("\u6D2E")}, {name:"Error",message:"EncodingError U+6D2E"});
assert.throws(() => {ms932Encoder.encode("\u6D2F")}, {name:"Error",message:"EncodingError U+6D2F"});
assert.throws(() => {ms932Encoder.encode("\u6D30")}, {name:"Error",message:"EncodingError U+6D30"});
assert.throws(() => {ms932Encoder.encode("\u6D31")}, {name:"Error",message:"EncodingError U+6D31"});
r = r && ([...ms932Encoder.encode("洲洳")].join(",") === "143,70,159,172"); // U+6D32
assert.throws(() => {ms932Encoder.encode("\u6D34")}, {name:"Error",message:"EncodingError U+6D34"});
r = r && ([...ms932Encoder.encode("洵洶")].join(",") === "159,171,159,166"); // U+6D35
assert.throws(() => {ms932Encoder.encode("\u6D37")}, {name:"Error",message:"EncodingError U+6D37"});
r = r && ([...ms932Encoder.encode("洸")].join(",") === "159,169"); // U+6D38
assert.throws(() => {ms932Encoder.encode("\u6D39")}, {name:"Error",message:"EncodingError U+6D39"});
assert.throws(() => {ms932Encoder.encode("\u6D3A")}, {name:"Error",message:"EncodingError U+6D3A"});
r = r && ([...ms932Encoder.encode("活")].join(",") === "138,136"); // U+6D3B
assert.throws(() => {ms932Encoder.encode("\u6D3C")}, {name:"Error",message:"EncodingError U+6D3C"});
r = r && ([...ms932Encoder.encode("洽派")].join(",") === "159,168,148,104"); // U+6D3D
assert.throws(() => {ms932Encoder.encode("\u6D3F")}, {name:"Error",message:"EncodingError U+6D3F"});
assert.throws(() => {ms932Encoder.encode("\u6D40")}, {name:"Error",message:"EncodingError U+6D40"});
r = r && ([...ms932Encoder.encode("流")].join(",") === "151,172"); // U+6D41
assert.throws(() => {ms932Encoder.encode("\u6D42")}, {name:"Error",message:"EncodingError U+6D42"});
assert.throws(() => {ms932Encoder.encode("\u6D43")}, {name:"Error",message:"EncodingError U+6D43"});
r = r && ([...ms932Encoder.encode("浄浅")].join(",") === "143,242,144,243"); // U+6D44
assert.throws(() => {ms932Encoder.encode("\u6D46")}, {name:"Error",message:"EncodingError U+6D46"});
assert.throws(() => {ms932Encoder.encode("\u6D47")}, {name:"Error",message:"EncodingError U+6D47"});
assert.throws(() => {ms932Encoder.encode("\u6D48")}, {name:"Error",message:"EncodingError U+6D48"});
assert.throws(() => {ms932Encoder.encode("\u6D49")}, {name:"Error",message:"EncodingError U+6D49"});
assert.throws(() => {ms932Encoder.encode("\u6D4A")}, {name:"Error",message:"EncodingError U+6D4A"});
assert.throws(() => {ms932Encoder.encode("\u6D4B")}, {name:"Error",message:"EncodingError U+6D4B"});
assert.throws(() => {ms932Encoder.encode("\u6D4C")}, {name:"Error",message:"EncodingError U+6D4C"});
assert.throws(() => {ms932Encoder.encode("\u6D4D")}, {name:"Error",message:"EncodingError U+6D4D"});
assert.throws(() => {ms932Encoder.encode("\u6D4E")}, {name:"Error",message:"EncodingError U+6D4E"});
assert.throws(() => {ms932Encoder.encode("\u6D4F")}, {name:"Error",message:"EncodingError U+6D4F"});
assert.throws(() => {ms932Encoder.encode("\u6D50")}, {name:"Error",message:"EncodingError U+6D50"});
assert.throws(() => {ms932Encoder.encode("\u6D51")}, {name:"Error",message:"EncodingError U+6D51"});
assert.throws(() => {ms932Encoder.encode("\u6D52")}, {name:"Error",message:"EncodingError U+6D52"});
assert.throws(() => {ms932Encoder.encode("\u6D53")}, {name:"Error",message:"EncodingError U+6D53"});
assert.throws(() => {ms932Encoder.encode("\u6D54")}, {name:"Error",message:"EncodingError U+6D54"});
assert.throws(() => {ms932Encoder.encode("\u6D55")}, {name:"Error",message:"EncodingError U+6D55"});
assert.throws(() => {ms932Encoder.encode("\u6D56")}, {name:"Error",message:"EncodingError U+6D56"});
assert.throws(() => {ms932Encoder.encode("\u6D57")}, {name:"Error",message:"EncodingError U+6D57"});
assert.throws(() => {ms932Encoder.encode("\u6D58")}, {name:"Error",message:"EncodingError U+6D58"});
r = r && ([...ms932Encoder.encode("浙浚")].join(",") === "159,180,159,178"); // U+6D59
assert.throws(() => {ms932Encoder.encode("\u6D5B")}, {name:"Error",message:"EncodingError U+6D5B"});
r = r && ([...ms932Encoder.encode("浜")].join(",") === "149,108"); // U+6D5C
assert.throws(() => {ms932Encoder.encode("\u6D5D")}, {name:"Error",message:"EncodingError U+6D5D"});
assert.throws(() => {ms932Encoder.encode("\u6D5E")}, {name:"Error",message:"EncodingError U+6D5E"});
assert.throws(() => {ms932Encoder.encode("\u6D5F")}, {name:"Error",message:"EncodingError U+6D5F"});
assert.throws(() => {ms932Encoder.encode("\u6D60")}, {name:"Error",message:"EncodingError U+6D60"});
assert.throws(() => {ms932Encoder.encode("\u6D61")}, {name:"Error",message:"EncodingError U+6D61"});
assert.throws(() => {ms932Encoder.encode("\u6D62")}, {name:"Error",message:"EncodingError U+6D62"});
r = r && ([...ms932Encoder.encode("浣浤")].join(",") === "159,175,159,177"); // U+6D63
assert.throws(() => {ms932Encoder.encode("\u6D65")}, {name:"Error",message:"EncodingError U+6D65"});
r = r && ([...ms932Encoder.encode("浦")].join(",") === "137,89"); // U+6D66
assert.throws(() => {ms932Encoder.encode("\u6D67")}, {name:"Error",message:"EncodingError U+6D67"});
assert.throws(() => {ms932Encoder.encode("\u6D68")}, {name:"Error",message:"EncodingError U+6D68"});
r = r && ([...ms932Encoder.encode("浩浪")].join(",") === "141,95,152,81"); // U+6D69
assert.throws(() => {ms932Encoder.encode("\u6D6B")}, {name:"Error",message:"EncodingError U+6D6B"});
r = r && ([...ms932Encoder.encode("浬")].join(",") === "138,92"); // U+6D6C
assert.throws(() => {ms932Encoder.encode("\u6D6D")}, {name:"Error",message:"EncodingError U+6D6D"});
r = r && ([...ms932Encoder.encode("浮浯")].join(",") === "149,130,250,252"); // U+6D6E
assert.throws(() => {ms932Encoder.encode("\u6D70")}, {name:"Error",message:"EncodingError U+6D70"});
assert.throws(() => {ms932Encoder.encode("\u6D71")}, {name:"Error",message:"EncodingError U+6D71"});
assert.throws(() => {ms932Encoder.encode("\u6D72")}, {name:"Error",message:"EncodingError U+6D72"});
assert.throws(() => {ms932Encoder.encode("\u6D73")}, {name:"Error",message:"EncodingError U+6D73"});
r = r && ([...ms932Encoder.encode("浴")].join(",") === "151,129"); // U+6D74
assert.throws(() => {ms932Encoder.encode("\u6D75")}, {name:"Error",message:"EncodingError U+6D75"});
assert.throws(() => {ms932Encoder.encode("\u6D76")}, {name:"Error",message:"EncodingError U+6D76"});
r = r && ([...ms932Encoder.encode("海浸浹")].join(",") === "138,67,144,90,159,179"); // U+6D77
assert.throws(() => {ms932Encoder.encode("\u6D7A")}, {name:"Error",message:"EncodingError U+6D7A"});
assert.throws(() => {ms932Encoder.encode("\u6D7B")}, {name:"Error",message:"EncodingError U+6D7B"});
assert.throws(() => {ms932Encoder.encode("\u6D7C")}, {name:"Error",message:"EncodingError U+6D7C"});
assert.throws(() => {ms932Encoder.encode("\u6D7D")}, {name:"Error",message:"EncodingError U+6D7D"});
assert.throws(() => {ms932Encoder.encode("\u6D7E")}, {name:"Error",message:"EncodingError U+6D7E"});
assert.throws(() => {ms932Encoder.encode("\u6D7F")}, {name:"Error",message:"EncodingError U+6D7F"});
assert.throws(() => {ms932Encoder.encode("\u6D80")}, {name:"Error",message:"EncodingError U+6D80"});
assert.throws(() => {ms932Encoder.encode("\u6D81")}, {name:"Error",message:"EncodingError U+6D81"});
assert.throws(() => {ms932Encoder.encode("\u6D82")}, {name:"Error",message:"EncodingError U+6D82"});
assert.throws(() => {ms932Encoder.encode("\u6D83")}, {name:"Error",message:"EncodingError U+6D83"});
assert.throws(() => {ms932Encoder.encode("\u6D84")}, {name:"Error",message:"EncodingError U+6D84"});
r = r && ([...ms932Encoder.encode("涅")].join(",") === "159,184"); // U+6D85
assert.throws(() => {ms932Encoder.encode("\u6D86")}, {name:"Error",message:"EncodingError U+6D86"});
r = r && ([...ms932Encoder.encode("涇消")].join(",") === "250,251,143,193"); // U+6D87
assert.throws(() => {ms932Encoder.encode("\u6D89")}, {name:"Error",message:"EncodingError U+6D89"});
assert.throws(() => {ms932Encoder.encode("\u6D8A")}, {name:"Error",message:"EncodingError U+6D8A"});
assert.throws(() => {ms932Encoder.encode("\u6D8B")}, {name:"Error",message:"EncodingError U+6D8B"});
r = r && ([...ms932Encoder.encode("涌")].join(",") === "151,79"); // U+6D8C
assert.throws(() => {ms932Encoder.encode("\u6D8D")}, {name:"Error",message:"EncodingError U+6D8D"});
r = r && ([...ms932Encoder.encode("涎")].join(",") === "159,181"); // U+6D8E
assert.throws(() => {ms932Encoder.encode("\u6D8F")}, {name:"Error",message:"EncodingError U+6D8F"});
assert.throws(() => {ms932Encoder.encode("\u6D90")}, {name:"Error",message:"EncodingError U+6D90"});
assert.throws(() => {ms932Encoder.encode("\u6D91")}, {name:"Error",message:"EncodingError U+6D91"});
assert.throws(() => {ms932Encoder.encode("\u6D92")}, {name:"Error",message:"EncodingError U+6D92"});
r = r && ([...ms932Encoder.encode("涓")].join(",") === "159,176"); // U+6D93
assert.throws(() => {ms932Encoder.encode("\u6D94")}, {name:"Error",message:"EncodingError U+6D94"});
r = r && ([...ms932Encoder.encode("涕涖")].join(",") === "159,182,251,64"); // U+6D95
assert.throws(() => {ms932Encoder.encode("\u6D97")}, {name:"Error",message:"EncodingError U+6D97"});
assert.throws(() => {ms932Encoder.encode("\u6D98")}, {name:"Error",message:"EncodingError U+6D98"});
r = r && ([...ms932Encoder.encode("涙")].join(",") === "151,220"); // U+6D99
assert.throws(() => {ms932Encoder.encode("\u6D9A")}, {name:"Error",message:"EncodingError U+6D9A"});
r = r && ([...ms932Encoder.encode("涛涜")].join(",") === "147,147,147,192"); // U+6D9B
assert.throws(() => {ms932Encoder.encode("\u6D9D")}, {name:"Error",message:"EncodingError U+6D9D"});
assert.throws(() => {ms932Encoder.encode("\u6D9E")}, {name:"Error",message:"EncodingError U+6D9E"});
assert.throws(() => {ms932Encoder.encode("\u6D9F")}, {name:"Error",message:"EncodingError U+6D9F"});
assert.throws(() => {ms932Encoder.encode("\u6DA0")}, {name:"Error",message:"EncodingError U+6DA0"});
assert.throws(() => {ms932Encoder.encode("\u6DA1")}, {name:"Error",message:"EncodingError U+6DA1"});
assert.throws(() => {ms932Encoder.encode("\u6DA2")}, {name:"Error",message:"EncodingError U+6DA2"});
assert.throws(() => {ms932Encoder.encode("\u6DA3")}, {name:"Error",message:"EncodingError U+6DA3"});
assert.throws(() => {ms932Encoder.encode("\u6DA4")}, {name:"Error",message:"EncodingError U+6DA4"});
assert.throws(() => {ms932Encoder.encode("\u6DA5")}, {name:"Error",message:"EncodingError U+6DA5"});
assert.throws(() => {ms932Encoder.encode("\u6DA6")}, {name:"Error",message:"EncodingError U+6DA6"});
assert.throws(() => {ms932Encoder.encode("\u6DA7")}, {name:"Error",message:"EncodingError U+6DA7"});
assert.throws(() => {ms932Encoder.encode("\u6DA8")}, {name:"Error",message:"EncodingError U+6DA8"});
assert.throws(() => {ms932Encoder.encode("\u6DA9")}, {name:"Error",message:"EncodingError U+6DA9"});
assert.throws(() => {ms932Encoder.encode("\u6DAA")}, {name:"Error",message:"EncodingError U+6DAA"});
assert.throws(() => {ms932Encoder.encode("\u6DAB")}, {name:"Error",message:"EncodingError U+6DAB"});
r = r && ([...ms932Encoder.encode("涬")].join(",") === "251,65"); // U+6DAC
assert.throws(() => {ms932Encoder.encode("\u6DAD")}, {name:"Error",message:"EncodingError U+6DAD"});
assert.throws(() => {ms932Encoder.encode("\u6DAE")}, {name:"Error",message:"EncodingError U+6DAE"});
r = r && ([...ms932Encoder.encode("涯")].join(",") === "138,85"); // U+6DAF
assert.throws(() => {ms932Encoder.encode("\u6DB0")}, {name:"Error",message:"EncodingError U+6DB0"});
assert.throws(() => {ms932Encoder.encode("\u6DB1")}, {name:"Error",message:"EncodingError U+6DB1"});
r = r && ([...ms932Encoder.encode("液")].join(",") === "137,116"); // U+6DB2
assert.throws(() => {ms932Encoder.encode("\u6DB3")}, {name:"Error",message:"EncodingError U+6DB3"});
assert.throws(() => {ms932Encoder.encode("\u6DB4")}, {name:"Error",message:"EncodingError U+6DB4"});
r = r && ([...ms932Encoder.encode("涵")].join(",") === "159,188"); // U+6DB5
assert.throws(() => {ms932Encoder.encode("\u6DB6")}, {name:"Error",message:"EncodingError U+6DB6"});
assert.throws(() => {ms932Encoder.encode("\u6DB7")}, {name:"Error",message:"EncodingError U+6DB7"});
r = r && ([...ms932Encoder.encode("涸")].join(",") === "159,191"); // U+6DB8
assert.throws(() => {ms932Encoder.encode("\u6DB9")}, {name:"Error",message:"EncodingError U+6DB9"});
assert.throws(() => {ms932Encoder.encode("\u6DBA")}, {name:"Error",message:"EncodingError U+6DBA"});
assert.throws(() => {ms932Encoder.encode("\u6DBB")}, {name:"Error",message:"EncodingError U+6DBB"});
r = r && ([...ms932Encoder.encode("涼")].join(",") === "151,193"); // U+6DBC
assert.throws(() => {ms932Encoder.encode("\u6DBD")}, {name:"Error",message:"EncodingError U+6DBD"});
assert.throws(() => {ms932Encoder.encode("\u6DBE")}, {name:"Error",message:"EncodingError U+6DBE"});
assert.throws(() => {ms932Encoder.encode("\u6DBF")}, {name:"Error",message:"EncodingError U+6DBF"});
r = r && ([...ms932Encoder.encode("淀")].join(",") === "151,132"); // U+6DC0
assert.throws(() => {ms932Encoder.encode("\u6DC1")}, {name:"Error",message:"EncodingError U+6DC1"});
assert.throws(() => {ms932Encoder.encode("\u6DC2")}, {name:"Error",message:"EncodingError U+6DC2"});
assert.throws(() => {ms932Encoder.encode("\u6DC3")}, {name:"Error",message:"EncodingError U+6DC3"});
assert.throws(() => {ms932Encoder.encode("\u6DC4")}, {name:"Error",message:"EncodingError U+6DC4"});
r = r && ([...ms932Encoder.encode("淅淆淇")].join(",") === "159,198,159,192,159,189"); // U+6DC5
assert.throws(() => {ms932Encoder.encode("\u6DC8")}, {name:"Error",message:"EncodingError U+6DC8"});
assert.throws(() => {ms932Encoder.encode("\u6DC9")}, {name:"Error",message:"EncodingError U+6DC9"});
assert.throws(() => {ms932Encoder.encode("\u6DCA")}, {name:"Error",message:"EncodingError U+6DCA"});
r = r && ([...ms932Encoder.encode("淋淌")].join(",") === "151,210,159,195"); // U+6DCB
assert.throws(() => {ms932Encoder.encode("\u6DCD")}, {name:"Error",message:"EncodingError U+6DCD"});
assert.throws(() => {ms932Encoder.encode("\u6DCE")}, {name:"Error",message:"EncodingError U+6DCE"});
r = r && ([...ms932Encoder.encode("淏")].join(",") === "251,66"); // U+6DCF
assert.throws(() => {ms932Encoder.encode("\u6DD0")}, {name:"Error",message:"EncodingError U+6DD0"});
r = r && ([...ms932Encoder.encode("淑淒")].join(",") === "143,105,159,197"); // U+6DD1
assert.throws(() => {ms932Encoder.encode("\u6DD3")}, {name:"Error",message:"EncodingError U+6DD3"});
assert.throws(() => {ms932Encoder.encode("\u6DD4")}, {name:"Error",message:"EncodingError U+6DD4"});
r = r && ([...ms932Encoder.encode("淕")].join(",") === "159,202"); // U+6DD5
assert.throws(() => {ms932Encoder.encode("\u6DD6")}, {name:"Error",message:"EncodingError U+6DD6"});
assert.throws(() => {ms932Encoder.encode("\u6DD7")}, {name:"Error",message:"EncodingError U+6DD7"});
r = r && ([...ms932Encoder.encode("淘淙")].join(",") === "147,145,159,200"); // U+6DD8
assert.throws(() => {ms932Encoder.encode("\u6DDA")}, {name:"Error",message:"EncodingError U+6DDA"});
assert.throws(() => {ms932Encoder.encode("\u6DDB")}, {name:"Error",message:"EncodingError U+6DDB"});
assert.throws(() => {ms932Encoder.encode("\u6DDC")}, {name:"Error",message:"EncodingError U+6DDC"});
assert.throws(() => {ms932Encoder.encode("\u6DDD")}, {name:"Error",message:"EncodingError U+6DDD"});
r = r && ([...ms932Encoder.encode("淞")].join(",") === "159,194"); // U+6DDE
assert.throws(() => {ms932Encoder.encode("\u6DDF")}, {name:"Error",message:"EncodingError U+6DDF"});
assert.throws(() => {ms932Encoder.encode("\u6DE0")}, {name:"Error",message:"EncodingError U+6DE0"});
r = r && ([...ms932Encoder.encode("淡")].join(",") === "146,87"); // U+6DE1
assert.throws(() => {ms932Encoder.encode("\u6DE2")}, {name:"Error",message:"EncodingError U+6DE2"});
assert.throws(() => {ms932Encoder.encode("\u6DE3")}, {name:"Error",message:"EncodingError U+6DE3"});
r = r && ([...ms932Encoder.encode("淤")].join(",") === "159,201"); // U+6DE4
assert.throws(() => {ms932Encoder.encode("\u6DE5")}, {name:"Error",message:"EncodingError U+6DE5"});
r = r && ([...ms932Encoder.encode("淦")].join(",") === "159,190"); // U+6DE6
assert.throws(() => {ms932Encoder.encode("\u6DE7")}, {name:"Error",message:"EncodingError U+6DE7"});
r = r && ([...ms932Encoder.encode("淨")].join(",") === "159,196"); // U+6DE8
assert.throws(() => {ms932Encoder.encode("\u6DE9")}, {name:"Error",message:"EncodingError U+6DE9"});
r = r && ([...ms932Encoder.encode("淪淫淬")].join(",") === "159,203,136,250,159,193"); // U+6DEA
assert.throws(() => {ms932Encoder.encode("\u6DED")}, {name:"Error",message:"EncodingError U+6DED"});
r = r && ([...ms932Encoder.encode("淮")].join(",") === "159,204"); // U+6DEE
assert.throws(() => {ms932Encoder.encode("\u6DEF")}, {name:"Error",message:"EncodingError U+6DEF"});
assert.throws(() => {ms932Encoder.encode("\u6DF0")}, {name:"Error",message:"EncodingError U+6DF0"});
r = r && ([...ms932Encoder.encode("深淲淳")].join(",") === "144,91,251,68,143,126"); // U+6DF1
assert.throws(() => {ms932Encoder.encode("\u6DF4")}, {name:"Error",message:"EncodingError U+6DF4"});
r = r && ([...ms932Encoder.encode("淵")].join(",") === "149,163"); // U+6DF5
assert.throws(() => {ms932Encoder.encode("\u6DF6")}, {name:"Error",message:"EncodingError U+6DF6"});
r = r && ([...ms932Encoder.encode("混淸淹淺添淼")].join(",") === "141,172,251,67,159,185,159,199,147,89,251,69"); // U+6DF7
assert.throws(() => {ms932Encoder.encode("\u6DFD")}, {name:"Error",message:"EncodingError U+6DFD"});
assert.throws(() => {ms932Encoder.encode("\u6DFE")}, {name:"Error",message:"EncodingError U+6DFE"});
assert.throws(() => {ms932Encoder.encode("\u6DFF")}, {name:"Error",message:"EncodingError U+6DFF"});
assert.throws(() => {ms932Encoder.encode("\u6E00")}, {name:"Error",message:"EncodingError U+6E00"});
assert.throws(() => {ms932Encoder.encode("\u6E01")}, {name:"Error",message:"EncodingError U+6E01"});
assert.throws(() => {ms932Encoder.encode("\u6E02")}, {name:"Error",message:"EncodingError U+6E02"});
assert.throws(() => {ms932Encoder.encode("\u6E03")}, {name:"Error",message:"EncodingError U+6E03"});
assert.throws(() => {ms932Encoder.encode("\u6E04")}, {name:"Error",message:"EncodingError U+6E04"});
r = r && ([...ms932Encoder.encode("清")].join(",") === "144,180"); // U+6E05
assert.throws(() => {ms932Encoder.encode("\u6E06")}, {name:"Error",message:"EncodingError U+6E06"});
r = r && ([...ms932Encoder.encode("渇済渉渊渋")].join(",") === "138,137,141,207,143,194,159,187,143,97"); // U+6E07
assert.throws(() => {ms932Encoder.encode("\u6E0C")}, {name:"Error",message:"EncodingError U+6E0C"});
assert.throws(() => {ms932Encoder.encode("\u6E0D")}, {name:"Error",message:"EncodingError U+6E0D"});
assert.throws(() => {ms932Encoder.encode("\u6E0E")}, {name:"Error",message:"EncodingError U+6E0E"});
assert.throws(() => {ms932Encoder.encode("\u6E0F")}, {name:"Error",message:"EncodingError U+6E0F"});
assert.throws(() => {ms932Encoder.encode("\u6E10")}, {name:"Error",message:"EncodingError U+6E10"});
assert.throws(() => {ms932Encoder.encode("\u6E11")}, {name:"Error",message:"EncodingError U+6E11"});
assert.throws(() => {ms932Encoder.encode("\u6E12")}, {name:"Error",message:"EncodingError U+6E12"});
r = r && ([...ms932Encoder.encode("渓")].join(",") === "140,107"); // U+6E13
assert.throws(() => {ms932Encoder.encode("\u6E14")}, {name:"Error",message:"EncodingError U+6E14"});
r = r && ([...ms932Encoder.encode("渕")].join(",") === "159,186"); // U+6E15
assert.throws(() => {ms932Encoder.encode("\u6E16")}, {name:"Error",message:"EncodingError U+6E16"});
assert.throws(() => {ms932Encoder.encode("\u6E17")}, {name:"Error",message:"EncodingError U+6E17"});
assert.throws(() => {ms932Encoder.encode("\u6E18")}, {name:"Error",message:"EncodingError U+6E18"});
r = r && ([...ms932Encoder.encode("渙渚減")].join(",") === "159,208,143,141,140,184"); // U+6E19
assert.throws(() => {ms932Encoder.encode("\u6E1C")}, {name:"Error",message:"EncodingError U+6E1C"});
r = r && ([...ms932Encoder.encode("渝")].join(",") === "159,223"); // U+6E1D
assert.throws(() => {ms932Encoder.encode("\u6E1E")}, {name:"Error",message:"EncodingError U+6E1E"});
r = r && ([...ms932Encoder.encode("渟渠渡")].join(",") === "159,217,139,148,147,110"); // U+6E1F
assert.throws(() => {ms932Encoder.encode("\u6E22")}, {name:"Error",message:"EncodingError U+6E22"});
r = r && ([...ms932Encoder.encode("渣渤渥渦渧")].join(",") === "159,212,159,221,136,173,137,81,251,72"); // U+6E23
assert.throws(() => {ms932Encoder.encode("\u6E28")}, {name:"Error",message:"EncodingError U+6E28"});
r = r && ([...ms932Encoder.encode("温")].join(",") === "137,183"); // U+6E29
assert.throws(() => {ms932Encoder.encode("\u6E2A")}, {name:"Error",message:"EncodingError U+6E2A"});
r = r && ([...ms932Encoder.encode("渫測渭渮港")].join(",") === "159,214,145,170,159,205,159,207,141,96"); // U+6E2B
assert.throws(() => {ms932Encoder.encode("\u6E30")}, {name:"Error",message:"EncodingError U+6E30"});
assert.throws(() => {ms932Encoder.encode("\u6E31")}, {name:"Error",message:"EncodingError U+6E31"});
assert.throws(() => {ms932Encoder.encode("\u6E32")}, {name:"Error",message:"EncodingError U+6E32"});
assert.throws(() => {ms932Encoder.encode("\u6E33")}, {name:"Error",message:"EncodingError U+6E33"});
assert.throws(() => {ms932Encoder.encode("\u6E34")}, {name:"Error",message:"EncodingError U+6E34"});
assert.throws(() => {ms932Encoder.encode("\u6E35")}, {name:"Error",message:"EncodingError U+6E35"});
assert.throws(() => {ms932Encoder.encode("\u6E36")}, {name:"Error",message:"EncodingError U+6E36"});
assert.throws(() => {ms932Encoder.encode("\u6E37")}, {name:"Error",message:"EncodingError U+6E37"});
r = r && ([...ms932Encoder.encode("游渹渺")].join(",") === "159,224,251,70,159,219"); // U+6E38
assert.throws(() => {ms932Encoder.encode("\u6E3B")}, {name:"Error",message:"EncodingError U+6E3B"});
r = r && ([...ms932Encoder.encode("渼")].join(",") === "251,73"); // U+6E3C
assert.throws(() => {ms932Encoder.encode("\u6E3D")}, {name:"Error",message:"EncodingError U+6E3D"});
r = r && ([...ms932Encoder.encode("渾")].join(",") === "159,211"); // U+6E3E
assert.throws(() => {ms932Encoder.encode("\u6E3F")}, {name:"Error",message:"EncodingError U+6E3F"});
assert.throws(() => {ms932Encoder.encode("\u6E40")}, {name:"Error",message:"EncodingError U+6E40"});
assert.throws(() => {ms932Encoder.encode("\u6E41")}, {name:"Error",message:"EncodingError U+6E41"});
assert.throws(() => {ms932Encoder.encode("\u6E42")}, {name:"Error",message:"EncodingError U+6E42"});
r = r && ([...ms932Encoder.encode("湃")].join(",") === "159,218"); // U+6E43
assert.throws(() => {ms932Encoder.encode("\u6E44")}, {name:"Error",message:"EncodingError U+6E44"});
assert.throws(() => {ms932Encoder.encode("\u6E45")}, {name:"Error",message:"EncodingError U+6E45"});
assert.throws(() => {ms932Encoder.encode("\u6E46")}, {name:"Error",message:"EncodingError U+6E46"});
assert.throws(() => {ms932Encoder.encode("\u6E47")}, {name:"Error",message:"EncodingError U+6E47"});
assert.throws(() => {ms932Encoder.encode("\u6E48")}, {name:"Error",message:"EncodingError U+6E48"});
assert.throws(() => {ms932Encoder.encode("\u6E49")}, {name:"Error",message:"EncodingError U+6E49"});
r = r && ([...ms932Encoder.encode("湊")].join(",") === "150,169"); // U+6E4A
assert.throws(() => {ms932Encoder.encode("\u6E4B")}, {name:"Error",message:"EncodingError U+6E4B"});
assert.throws(() => {ms932Encoder.encode("\u6E4C")}, {name:"Error",message:"EncodingError U+6E4C"});
r = r && ([...ms932Encoder.encode("湍湎")].join(",") === "159,216,159,220"); // U+6E4D
assert.throws(() => {ms932Encoder.encode("\u6E4F")}, {name:"Error",message:"EncodingError U+6E4F"});
assert.throws(() => {ms932Encoder.encode("\u6E50")}, {name:"Error",message:"EncodingError U+6E50"});
assert.throws(() => {ms932Encoder.encode("\u6E51")}, {name:"Error",message:"EncodingError U+6E51"});
assert.throws(() => {ms932Encoder.encode("\u6E52")}, {name:"Error",message:"EncodingError U+6E52"});
assert.throws(() => {ms932Encoder.encode("\u6E53")}, {name:"Error",message:"EncodingError U+6E53"});
assert.throws(() => {ms932Encoder.encode("\u6E54")}, {name:"Error",message:"EncodingError U+6E54"});
assert.throws(() => {ms932Encoder.encode("\u6E55")}, {name:"Error",message:"EncodingError U+6E55"});
r = r && ([...ms932Encoder.encode("湖")].join(",") === "140,206"); // U+6E56
assert.throws(() => {ms932Encoder.encode("\u6E57")}, {name:"Error",message:"EncodingError U+6E57"});
r = r && ([...ms932Encoder.encode("湘")].join(",") === "143,195"); // U+6E58
assert.throws(() => {ms932Encoder.encode("\u6E59")}, {name:"Error",message:"EncodingError U+6E59"});
assert.throws(() => {ms932Encoder.encode("\u6E5A")}, {name:"Error",message:"EncodingError U+6E5A"});
r = r && ([...ms932Encoder.encode("湛湜")].join(",") === "146,88,251,71"); // U+6E5B
assert.throws(() => {ms932Encoder.encode("\u6E5D")}, {name:"Error",message:"EncodingError U+6E5D"});
assert.throws(() => {ms932Encoder.encode("\u6E5E")}, {name:"Error",message:"EncodingError U+6E5E"});
r = r && ([...ms932Encoder.encode("湟")].join(",") === "159,210"); // U+6E5F
assert.throws(() => {ms932Encoder.encode("\u6E60")}, {name:"Error",message:"EncodingError U+6E60"});
assert.throws(() => {ms932Encoder.encode("\u6E61")}, {name:"Error",message:"EncodingError U+6E61"});
assert.throws(() => {ms932Encoder.encode("\u6E62")}, {name:"Error",message:"EncodingError U+6E62"});
assert.throws(() => {ms932Encoder.encode("\u6E63")}, {name:"Error",message:"EncodingError U+6E63"});
assert.throws(() => {ms932Encoder.encode("\u6E64")}, {name:"Error",message:"EncodingError U+6E64"});
assert.throws(() => {ms932Encoder.encode("\u6E65")}, {name:"Error",message:"EncodingError U+6E65"});
assert.throws(() => {ms932Encoder.encode("\u6E66")}, {name:"Error",message:"EncodingError U+6E66"});
r = r && ([...ms932Encoder.encode("湧")].join(",") === "151,78"); // U+6E67
assert.throws(() => {ms932Encoder.encode("\u6E68")}, {name:"Error",message:"EncodingError U+6E68"});
assert.throws(() => {ms932Encoder.encode("\u6E69")}, {name:"Error",message:"EncodingError U+6E69"});
assert.throws(() => {ms932Encoder.encode("\u6E6A")}, {name:"Error",message:"EncodingError U+6E6A"});
r = r && ([...ms932Encoder.encode("湫")].join(",") === "159,213"); // U+6E6B
assert.throws(() => {ms932Encoder.encode("\u6E6C")}, {name:"Error",message:"EncodingError U+6E6C"});
assert.throws(() => {ms932Encoder.encode("\u6E6D")}, {name:"Error",message:"EncodingError U+6E6D"});
r = r && ([...ms932Encoder.encode("湮湯")].join(",") === "159,206,147,146"); // U+6E6E
assert.throws(() => {ms932Encoder.encode("\u6E70")}, {name:"Error",message:"EncodingError U+6E70"});
assert.throws(() => {ms932Encoder.encode("\u6E71")}, {name:"Error",message:"EncodingError U+6E71"});
r = r && ([...ms932Encoder.encode("湲")].join(",") === "159,209"); // U+6E72
assert.throws(() => {ms932Encoder.encode("\u6E73")}, {name:"Error",message:"EncodingError U+6E73"});
assert.throws(() => {ms932Encoder.encode("\u6E74")}, {name:"Error",message:"EncodingError U+6E74"});
assert.throws(() => {ms932Encoder.encode("\u6E75")}, {name:"Error",message:"EncodingError U+6E75"});
r = r && ([...ms932Encoder.encode("湶")].join(",") === "159,215"); // U+6E76
assert.throws(() => {ms932Encoder.encode("\u6E77")}, {name:"Error",message:"EncodingError U+6E77"});
assert.throws(() => {ms932Encoder.encode("\u6E78")}, {name:"Error",message:"EncodingError U+6E78"});
assert.throws(() => {ms932Encoder.encode("\u6E79")}, {name:"Error",message:"EncodingError U+6E79"});
assert.throws(() => {ms932Encoder.encode("\u6E7A")}, {name:"Error",message:"EncodingError U+6E7A"});
assert.throws(() => {ms932Encoder.encode("\u6E7B")}, {name:"Error",message:"EncodingError U+6E7B"});
assert.throws(() => {ms932Encoder.encode("\u6E7C")}, {name:"Error",message:"EncodingError U+6E7C"});
assert.throws(() => {ms932Encoder.encode("\u6E7D")}, {name:"Error",message:"EncodingError U+6E7D"});
r = r && ([...ms932Encoder.encode("湾湿満")].join(",") === "152,112,142,188,150,158"); // U+6E7E
assert.throws(() => {ms932Encoder.encode("\u6E81")}, {name:"Error",message:"EncodingError U+6E81"});
r = r && ([...ms932Encoder.encode("溂")].join(",") === "159,225"); // U+6E82
assert.throws(() => {ms932Encoder.encode("\u6E83")}, {name:"Error",message:"EncodingError U+6E83"});
assert.throws(() => {ms932Encoder.encode("\u6E84")}, {name:"Error",message:"EncodingError U+6E84"});
assert.throws(() => {ms932Encoder.encode("\u6E85")}, {name:"Error",message:"EncodingError U+6E85"});
assert.throws(() => {ms932Encoder.encode("\u6E86")}, {name:"Error",message:"EncodingError U+6E86"});
assert.throws(() => {ms932Encoder.encode("\u6E87")}, {name:"Error",message:"EncodingError U+6E87"});
assert.throws(() => {ms932Encoder.encode("\u6E88")}, {name:"Error",message:"EncodingError U+6E88"});
assert.throws(() => {ms932Encoder.encode("\u6E89")}, {name:"Error",message:"EncodingError U+6E89"});
assert.throws(() => {ms932Encoder.encode("\u6E8A")}, {name:"Error",message:"EncodingError U+6E8A"});
assert.throws(() => {ms932Encoder.encode("\u6E8B")}, {name:"Error",message:"EncodingError U+6E8B"});
r = r && ([...ms932Encoder.encode("溌")].join(",") === "148,172"); // U+6E8C
assert.throws(() => {ms932Encoder.encode("\u6E8D")}, {name:"Error",message:"EncodingError U+6E8D"});
assert.throws(() => {ms932Encoder.encode("\u6E8E")}, {name:"Error",message:"EncodingError U+6E8E"});
r = r && ([...ms932Encoder.encode("溏源")].join(",") === "159,237,140,185"); // U+6E8F
assert.throws(() => {ms932Encoder.encode("\u6E91")}, {name:"Error",message:"EncodingError U+6E91"});
assert.throws(() => {ms932Encoder.encode("\u6E92")}, {name:"Error",message:"EncodingError U+6E92"});
assert.throws(() => {ms932Encoder.encode("\u6E93")}, {name:"Error",message:"EncodingError U+6E93"});
assert.throws(() => {ms932Encoder.encode("\u6E94")}, {name:"Error",message:"EncodingError U+6E94"});
assert.throws(() => {ms932Encoder.encode("\u6E95")}, {name:"Error",message:"EncodingError U+6E95"});
r = r && ([...ms932Encoder.encode("準")].join(",") === "143,128"); // U+6E96
assert.throws(() => {ms932Encoder.encode("\u6E97")}, {name:"Error",message:"EncodingError U+6E97"});
r = r && ([...ms932Encoder.encode("溘")].join(",") === "159,227"); // U+6E98
assert.throws(() => {ms932Encoder.encode("\u6E99")}, {name:"Error",message:"EncodingError U+6E99"});
assert.throws(() => {ms932Encoder.encode("\u6E9A")}, {name:"Error",message:"EncodingError U+6E9A"});
assert.throws(() => {ms932Encoder.encode("\u6E9B")}, {name:"Error",message:"EncodingError U+6E9B"});
r = r && ([...ms932Encoder.encode("溜溝")].join(",") === "151,173,141,97"); // U+6E9C
assert.throws(() => {ms932Encoder.encode("\u6E9E")}, {name:"Error",message:"EncodingError U+6E9E"});
r = r && ([...ms932Encoder.encode("溟")].join(",") === "159,240"); // U+6E9F
assert.throws(() => {ms932Encoder.encode("\u6EA0")}, {name:"Error",message:"EncodingError U+6EA0"});
assert.throws(() => {ms932Encoder.encode("\u6EA1")}, {name:"Error",message:"EncodingError U+6EA1"});
r = r && ([...ms932Encoder.encode("溢")].join(",") === "136,236"); // U+6EA2
assert.throws(() => {ms932Encoder.encode("\u6EA3")}, {name:"Error",message:"EncodingError U+6EA3"});
assert.throws(() => {ms932Encoder.encode("\u6EA4")}, {name:"Error",message:"EncodingError U+6EA4"});
r = r && ([...ms932Encoder.encode("溥")].join(",") === "159,238"); // U+6EA5
assert.throws(() => {ms932Encoder.encode("\u6EA6")}, {name:"Error",message:"EncodingError U+6EA6"});
assert.throws(() => {ms932Encoder.encode("\u6EA7")}, {name:"Error",message:"EncodingError U+6EA7"});
assert.throws(() => {ms932Encoder.encode("\u6EA8")}, {name:"Error",message:"EncodingError U+6EA8"});
assert.throws(() => {ms932Encoder.encode("\u6EA9")}, {name:"Error",message:"EncodingError U+6EA9"});
r = r && ([...ms932Encoder.encode("溪")].join(",") === "159,226"); // U+6EAA
assert.throws(() => {ms932Encoder.encode("\u6EAB")}, {name:"Error",message:"EncodingError U+6EAB"});
assert.throws(() => {ms932Encoder.encode("\u6EAC")}, {name:"Error",message:"EncodingError U+6EAC"});
assert.throws(() => {ms932Encoder.encode("\u6EAD")}, {name:"Error",message:"EncodingError U+6EAD"});
assert.throws(() => {ms932Encoder.encode("\u6EAE")}, {name:"Error",message:"EncodingError U+6EAE"});
r = r && ([...ms932Encoder.encode("溯")].join(",") === "159,232"); // U+6EAF
assert.throws(() => {ms932Encoder.encode("\u6EB0")}, {name:"Error",message:"EncodingError U+6EB0"});
assert.throws(() => {ms932Encoder.encode("\u6EB1")}, {name:"Error",message:"EncodingError U+6EB1"});
r = r && ([...ms932Encoder.encode("溲")].join(",") === "159,234"); // U+6EB2
assert.throws(() => {ms932Encoder.encode("\u6EB3")}, {name:"Error",message:"EncodingError U+6EB3"});
assert.throws(() => {ms932Encoder.encode("\u6EB4")}, {name:"Error",message:"EncodingError U+6EB4"});
assert.throws(() => {ms932Encoder.encode("\u6EB5")}, {name:"Error",message:"EncodingError U+6EB5"});
r = r && ([...ms932Encoder.encode("溶溷")].join(",") === "151,110,159,229"); // U+6EB6
assert.throws(() => {ms932Encoder.encode("\u6EB8")}, {name:"Error",message:"EncodingError U+6EB8"});
assert.throws(() => {ms932Encoder.encode("\u6EB9")}, {name:"Error",message:"EncodingError U+6EB9"});
r = r && ([...ms932Encoder.encode("溺")].join(",") === "147,77"); // U+6EBA
assert.throws(() => {ms932Encoder.encode("\u6EBB")}, {name:"Error",message:"EncodingError U+6EBB"});
assert.throws(() => {ms932Encoder.encode("\u6EBC")}, {name:"Error",message:"EncodingError U+6EBC"});
r = r && ([...ms932Encoder.encode("溽")].join(",") === "159,231"); // U+6EBD
assert.throws(() => {ms932Encoder.encode("\u6EBE")}, {name:"Error",message:"EncodingError U+6EBE"});
r = r && ([...ms932Encoder.encode("溿")].join(",") === "251,74"); // U+6EBF
assert.throws(() => {ms932Encoder.encode("\u6EC0")}, {name:"Error",message:"EncodingError U+6EC0"});
assert.throws(() => {ms932Encoder.encode("\u6EC1")}, {name:"Error",message:"EncodingError U+6EC1"});
r = r && ([...ms932Encoder.encode("滂")].join(",") === "159,239"); // U+6EC2
assert.throws(() => {ms932Encoder.encode("\u6EC3")}, {name:"Error",message:"EncodingError U+6EC3"});
r = r && ([...ms932Encoder.encode("滄滅")].join(",") === "159,233,150,197"); // U+6EC4
assert.throws(() => {ms932Encoder.encode("\u6EC6")}, {name:"Error",message:"EncodingError U+6EC6"});
assert.throws(() => {ms932Encoder.encode("\u6EC7")}, {name:"Error",message:"EncodingError U+6EC7"});
assert.throws(() => {ms932Encoder.encode("\u6EC8")}, {name:"Error",message:"EncodingError U+6EC8"});
r = r && ([...ms932Encoder.encode("滉")].join(",") === "159,228"); // U+6EC9
assert.throws(() => {ms932Encoder.encode("\u6ECA")}, {name:"Error",message:"EncodingError U+6ECA"});
r = r && ([...ms932Encoder.encode("滋滌")].join(",") === "142,160,159,252"); // U+6ECB
assert.throws(() => {ms932Encoder.encode("\u6ECD")}, {name:"Error",message:"EncodingError U+6ECD"});
assert.throws(() => {ms932Encoder.encode("\u6ECE")}, {name:"Error",message:"EncodingError U+6ECE"});
assert.throws(() => {ms932Encoder.encode("\u6ECF")}, {name:"Error",message:"EncodingError U+6ECF"});
assert.throws(() => {ms932Encoder.encode("\u6ED0")}, {name:"Error",message:"EncodingError U+6ED0"});
r = r && ([...ms932Encoder.encode("滑")].join(",") === "138,138"); // U+6ED1
assert.throws(() => {ms932Encoder.encode("\u6ED2")}, {name:"Error",message:"EncodingError U+6ED2"});
r = r && ([...ms932Encoder.encode("滓滔滕")].join(",") === "159,230,159,235,159,236"); // U+6ED3
assert.throws(() => {ms932Encoder.encode("\u6ED6")}, {name:"Error",message:"EncodingError U+6ED6"});
assert.throws(() => {ms932Encoder.encode("\u6ED7")}, {name:"Error",message:"EncodingError U+6ED7"});
assert.throws(() => {ms932Encoder.encode("\u6ED8")}, {name:"Error",message:"EncodingError U+6ED8"});
assert.throws(() => {ms932Encoder.encode("\u6ED9")}, {name:"Error",message:"EncodingError U+6ED9"});
assert.throws(() => {ms932Encoder.encode("\u6EDA")}, {name:"Error",message:"EncodingError U+6EDA"});
assert.throws(() => {ms932Encoder.encode("\u6EDB")}, {name:"Error",message:"EncodingError U+6EDB"});
assert.throws(() => {ms932Encoder.encode("\u6EDC")}, {name:"Error",message:"EncodingError U+6EDC"});
r = r && ([...ms932Encoder.encode("滝滞")].join(",") === "145,234,145,216"); // U+6EDD
assert.throws(() => {ms932Encoder.encode("\u6EDF")}, {name:"Error",message:"EncodingError U+6EDF"});
assert.throws(() => {ms932Encoder.encode("\u6EE0")}, {name:"Error",message:"EncodingError U+6EE0"});
assert.throws(() => {ms932Encoder.encode("\u6EE1")}, {name:"Error",message:"EncodingError U+6EE1"});
assert.throws(() => {ms932Encoder.encode("\u6EE2")}, {name:"Error",message:"EncodingError U+6EE2"});
assert.throws(() => {ms932Encoder.encode("\u6EE3")}, {name:"Error",message:"EncodingError U+6EE3"});
assert.throws(() => {ms932Encoder.encode("\u6EE4")}, {name:"Error",message:"EncodingError U+6EE4"});
assert.throws(() => {ms932Encoder.encode("\u6EE5")}, {name:"Error",message:"EncodingError U+6EE5"});
assert.throws(() => {ms932Encoder.encode("\u6EE6")}, {name:"Error",message:"EncodingError U+6EE6"});
assert.throws(() => {ms932Encoder.encode("\u6EE7")}, {name:"Error",message:"EncodingError U+6EE7"});
assert.throws(() => {ms932Encoder.encode("\u6EE8")}, {name:"Error",message:"EncodingError U+6EE8"});
assert.throws(() => {ms932Encoder.encode("\u6EE9")}, {name:"Error",message:"EncodingError U+6EE9"});
assert.throws(() => {ms932Encoder.encode("\u6EEA")}, {name:"Error",message:"EncodingError U+6EEA"});
assert.throws(() => {ms932Encoder.encode("\u6EEB")}, {name:"Error",message:"EncodingError U+6EEB"});
r = r && ([...ms932Encoder.encode("滬")].join(",") === "159,244"); // U+6EEC
assert.throws(() => {ms932Encoder.encode("\u6EED")}, {name:"Error",message:"EncodingError U+6EED"});
assert.throws(() => {ms932Encoder.encode("\u6EEE")}, {name:"Error",message:"EncodingError U+6EEE"});
r = r && ([...ms932Encoder.encode("滯")].join(",") === "159,250"); // U+6EEF
assert.throws(() => {ms932Encoder.encode("\u6EF0")}, {name:"Error",message:"EncodingError U+6EF0"});
assert.throws(() => {ms932Encoder.encode("\u6EF1")}, {name:"Error",message:"EncodingError U+6EF1"});
r = r && ([...ms932Encoder.encode("滲")].join(",") === "159,248"); // U+6EF2
assert.throws(() => {ms932Encoder.encode("\u6EF3")}, {name:"Error",message:"EncodingError U+6EF3"});
r = r && ([...ms932Encoder.encode("滴")].join(",") === "147,72"); // U+6EF4
assert.throws(() => {ms932Encoder.encode("\u6EF5")}, {name:"Error",message:"EncodingError U+6EF5"});
assert.throws(() => {ms932Encoder.encode("\u6EF6")}, {name:"Error",message:"EncodingError U+6EF6"});
r = r && ([...ms932Encoder.encode("滷滸")].join(",") === "224,66,159,245"); // U+6EF7
assert.throws(() => {ms932Encoder.encode("\u6EF9")}, {name:"Error",message:"EncodingError U+6EF9"});
assert.throws(() => {ms932Encoder.encode("\u6EFA")}, {name:"Error",message:"EncodingError U+6EFA"});
assert.throws(() => {ms932Encoder.encode("\u6EFB")}, {name:"Error",message:"EncodingError U+6EFB"});
assert.throws(() => {ms932Encoder.encode("\u6EFC")}, {name:"Error",message:"EncodingError U+6EFC"});
assert.throws(() => {ms932Encoder.encode("\u6EFD")}, {name:"Error",message:"EncodingError U+6EFD"});
r = r && ([...ms932Encoder.encode("滾滿")].join(",") === "159,246,159,222"); // U+6EFE
assert.throws(() => {ms932Encoder.encode("\u6F00")}, {name:"Error",message:"EncodingError U+6F00"});
r = r && ([...ms932Encoder.encode("漁漂")].join(",") === "139,153,149,89"); // U+6F01
assert.throws(() => {ms932Encoder.encode("\u6F03")}, {name:"Error",message:"EncodingError U+6F03"});
assert.throws(() => {ms932Encoder.encode("\u6F04")}, {name:"Error",message:"EncodingError U+6F04"});
assert.throws(() => {ms932Encoder.encode("\u6F05")}, {name:"Error",message:"EncodingError U+6F05"});
r = r && ([...ms932Encoder.encode("漆")].join(",") === "142,189"); // U+6F06
assert.throws(() => {ms932Encoder.encode("\u6F07")}, {name:"Error",message:"EncodingError U+6F07"});
assert.throws(() => {ms932Encoder.encode("\u6F08")}, {name:"Error",message:"EncodingError U+6F08"});
r = r && ([...ms932Encoder.encode("漉")].join(",") === "141,151"); // U+6F09
assert.throws(() => {ms932Encoder.encode("\u6F0A")}, {name:"Error",message:"EncodingError U+6F0A"});
assert.throws(() => {ms932Encoder.encode("\u6F0B")}, {name:"Error",message:"EncodingError U+6F0B"});
assert.throws(() => {ms932Encoder.encode("\u6F0C")}, {name:"Error",message:"EncodingError U+6F0C"});
assert.throws(() => {ms932Encoder.encode("\u6F0D")}, {name:"Error",message:"EncodingError U+6F0D"});
assert.throws(() => {ms932Encoder.encode("\u6F0E")}, {name:"Error",message:"EncodingError U+6F0E"});
r = r && ([...ms932Encoder.encode("漏")].join(",") === "152,82"); // U+6F0F
assert.throws(() => {ms932Encoder.encode("\u6F10")}, {name:"Error",message:"EncodingError U+6F10"});
r = r && ([...ms932Encoder.encode("漑")].join(",") === "159,242"); // U+6F11
assert.throws(() => {ms932Encoder.encode("\u6F12")}, {name:"Error",message:"EncodingError U+6F12"});
r = r && ([...ms932Encoder.encode("漓演漕")].join(",") === "224,65,137,137,145,134"); // U+6F13
assert.throws(() => {ms932Encoder.encode("\u6F16")}, {name:"Error",message:"EncodingError U+6F16"});
assert.throws(() => {ms932Encoder.encode("\u6F17")}, {name:"Error",message:"EncodingError U+6F17"});
assert.throws(() => {ms932Encoder.encode("\u6F18")}, {name:"Error",message:"EncodingError U+6F18"});
assert.throws(() => {ms932Encoder.encode("\u6F19")}, {name:"Error",message:"EncodingError U+6F19"});
assert.throws(() => {ms932Encoder.encode("\u6F1A")}, {name:"Error",message:"EncodingError U+6F1A"});
assert.throws(() => {ms932Encoder.encode("\u6F1B")}, {name:"Error",message:"EncodingError U+6F1B"});
assert.throws(() => {ms932Encoder.encode("\u6F1C")}, {name:"Error",message:"EncodingError U+6F1C"});
assert.throws(() => {ms932Encoder.encode("\u6F1D")}, {name:"Error",message:"EncodingError U+6F1D"});
assert.throws(() => {ms932Encoder.encode("\u6F1E")}, {name:"Error",message:"EncodingError U+6F1E"});
assert.throws(() => {ms932Encoder.encode("\u6F1F")}, {name:"Error",message:"EncodingError U+6F1F"});
r = r && ([...ms932Encoder.encode("漠")].join(",") === "148,153"); // U+6F20
assert.throws(() => {ms932Encoder.encode("\u6F21")}, {name:"Error",message:"EncodingError U+6F21"});
r = r && ([...ms932Encoder.encode("漢漣")].join(",") === "138,191,151,248"); // U+6F22
assert.throws(() => {ms932Encoder.encode("\u6F24")}, {name:"Error",message:"EncodingError U+6F24"});
assert.throws(() => {ms932Encoder.encode("\u6F25")}, {name:"Error",message:"EncodingError U+6F25"});
assert.throws(() => {ms932Encoder.encode("\u6F26")}, {name:"Error",message:"EncodingError U+6F26"});
assert.throws(() => {ms932Encoder.encode("\u6F27")}, {name:"Error",message:"EncodingError U+6F27"});
assert.throws(() => {ms932Encoder.encode("\u6F28")}, {name:"Error",message:"EncodingError U+6F28"});
assert.throws(() => {ms932Encoder.encode("\u6F29")}, {name:"Error",message:"EncodingError U+6F29"});
assert.throws(() => {ms932Encoder.encode("\u6F2A")}, {name:"Error",message:"EncodingError U+6F2A"});
r = r && ([...ms932Encoder.encode("漫漬")].join(",") === "150,159,146,208"); // U+6F2B
assert.throws(() => {ms932Encoder.encode("\u6F2D")}, {name:"Error",message:"EncodingError U+6F2D"});
assert.throws(() => {ms932Encoder.encode("\u6F2E")}, {name:"Error",message:"EncodingError U+6F2E"});
assert.throws(() => {ms932Encoder.encode("\u6F2F")}, {name:"Error",message:"EncodingError U+6F2F"});
assert.throws(() => {ms932Encoder.encode("\u6F30")}, {name:"Error",message:"EncodingError U+6F30"});
r = r && ([...ms932Encoder.encode("漱漲")].join(",") === "159,249,159,251"); // U+6F31
assert.throws(() => {ms932Encoder.encode("\u6F33")}, {name:"Error",message:"EncodingError U+6F33"});
assert.throws(() => {ms932Encoder.encode("\u6F34")}, {name:"Error",message:"EncodingError U+6F34"});
assert.throws(() => {ms932Encoder.encode("\u6F35")}, {name:"Error",message:"EncodingError U+6F35"});
assert.throws(() => {ms932Encoder.encode("\u6F36")}, {name:"Error",message:"EncodingError U+6F36"});
assert.throws(() => {ms932Encoder.encode("\u6F37")}, {name:"Error",message:"EncodingError U+6F37"});
r = r && ([...ms932Encoder.encode("漸")].join(",") === "145,81"); // U+6F38
assert.throws(() => {ms932Encoder.encode("\u6F39")}, {name:"Error",message:"EncodingError U+6F39"});
assert.throws(() => {ms932Encoder.encode("\u6F3A")}, {name:"Error",message:"EncodingError U+6F3A"});
assert.throws(() => {ms932Encoder.encode("\u6F3B")}, {name:"Error",message:"EncodingError U+6F3B"});
assert.throws(() => {ms932Encoder.encode("\u6F3C")}, {name:"Error",message:"EncodingError U+6F3C"});
assert.throws(() => {ms932Encoder.encode("\u6F3D")}, {name:"Error",message:"EncodingError U+6F3D"});
r = r && ([...ms932Encoder.encode("漾漿")].join(",") === "224,64,159,247"); // U+6F3E
assert.throws(() => {ms932Encoder.encode("\u6F40")}, {name:"Error",message:"EncodingError U+6F40"});
r = r && ([...ms932Encoder.encode("潁")].join(",") === "159,241"); // U+6F41
assert.throws(() => {ms932Encoder.encode("\u6F42")}, {name:"Error",message:"EncodingError U+6F42"});
assert.throws(() => {ms932Encoder.encode("\u6F43")}, {name:"Error",message:"EncodingError U+6F43"});
assert.throws(() => {ms932Encoder.encode("\u6F44")}, {name:"Error",message:"EncodingError U+6F44"});
r = r && ([...ms932Encoder.encode("潅")].join(",") === "138,193"); // U+6F45
assert.throws(() => {ms932Encoder.encode("\u6F46")}, {name:"Error",message:"EncodingError U+6F46"});
assert.throws(() => {ms932Encoder.encode("\u6F47")}, {name:"Error",message:"EncodingError U+6F47"});
assert.throws(() => {ms932Encoder.encode("\u6F48")}, {name:"Error",message:"EncodingError U+6F48"});
assert.throws(() => {ms932Encoder.encode("\u6F49")}, {name:"Error",message:"EncodingError U+6F49"});
assert.throws(() => {ms932Encoder.encode("\u6F4A")}, {name:"Error",message:"EncodingError U+6F4A"});
assert.throws(() => {ms932Encoder.encode("\u6F4B")}, {name:"Error",message:"EncodingError U+6F4B"});
assert.throws(() => {ms932Encoder.encode("\u6F4C")}, {name:"Error",message:"EncodingError U+6F4C"});
assert.throws(() => {ms932Encoder.encode("\u6F4D")}, {name:"Error",message:"EncodingError U+6F4D"});
assert.throws(() => {ms932Encoder.encode("\u6F4E")}, {name:"Error",message:"EncodingError U+6F4E"});
assert.throws(() => {ms932Encoder.encode("\u6F4F")}, {name:"Error",message:"EncodingError U+6F4F"});
assert.throws(() => {ms932Encoder.encode("\u6F50")}, {name:"Error",message:"EncodingError U+6F50"});
assert.throws(() => {ms932Encoder.encode("\u6F51")}, {name:"Error",message:"EncodingError U+6F51"});
assert.throws(() => {ms932Encoder.encode("\u6F52")}, {name:"Error",message:"EncodingError U+6F52"});
assert.throws(() => {ms932Encoder.encode("\u6F53")}, {name:"Error",message:"EncodingError U+6F53"});
r = r && ([...ms932Encoder.encode("潔")].join(",") === "140,137"); // U+6F54
assert.throws(() => {ms932Encoder.encode("\u6F55")}, {name:"Error",message:"EncodingError U+6F55"});
assert.throws(() => {ms932Encoder.encode("\u6F56")}, {name:"Error",message:"EncodingError U+6F56"});
assert.throws(() => {ms932Encoder.encode("\u6F57")}, {name:"Error",message:"EncodingError U+6F57"});
r = r && ([...ms932Encoder.encode("潘")].join(",") === "224,78"); // U+6F58
assert.throws(() => {ms932Encoder.encode("\u6F59")}, {name:"Error",message:"EncodingError U+6F59"});
assert.throws(() => {ms932Encoder.encode("\u6F5A")}, {name:"Error",message:"EncodingError U+6F5A"});
r = r && ([...ms932Encoder.encode("潛潜")].join(",") === "224,73,144,246"); // U+6F5B
assert.throws(() => {ms932Encoder.encode("\u6F5D")}, {name:"Error",message:"EncodingError U+6F5D"});
assert.throws(() => {ms932Encoder.encode("\u6F5E")}, {name:"Error",message:"EncodingError U+6F5E"});
r = r && ([...ms932Encoder.encode("潟")].join(",") === "138,131"); // U+6F5F
assert.throws(() => {ms932Encoder.encode("\u6F60")}, {name:"Error",message:"EncodingError U+6F60"});
assert.throws(() => {ms932Encoder.encode("\u6F61")}, {name:"Error",message:"EncodingError U+6F61"});
assert.throws(() => {ms932Encoder.encode("\u6F62")}, {name:"Error",message:"EncodingError U+6F62"});
assert.throws(() => {ms932Encoder.encode("\u6F63")}, {name:"Error",message:"EncodingError U+6F63"});
r = r && ([...ms932Encoder.encode("潤")].join(",") === "143,129"); // U+6F64
assert.throws(() => {ms932Encoder.encode("\u6F65")}, {name:"Error",message:"EncodingError U+6F65"});
r = r && ([...ms932Encoder.encode("潦")].join(",") === "224,82"); // U+6F66
assert.throws(() => {ms932Encoder.encode("\u6F67")}, {name:"Error",message:"EncodingError U+6F67"});
assert.throws(() => {ms932Encoder.encode("\u6F68")}, {name:"Error",message:"EncodingError U+6F68"});
assert.throws(() => {ms932Encoder.encode("\u6F69")}, {name:"Error",message:"EncodingError U+6F69"});
assert.throws(() => {ms932Encoder.encode("\u6F6A")}, {name:"Error",message:"EncodingError U+6F6A"});
assert.throws(() => {ms932Encoder.encode("\u6F6B")}, {name:"Error",message:"EncodingError U+6F6B"});
assert.throws(() => {ms932Encoder.encode("\u6F6C")}, {name:"Error",message:"EncodingError U+6F6C"});
r = r && ([...ms932Encoder.encode("潭潮潯潰")].join(",") === "224,75,146,170,224,72,146,215"); // U+6F6D
assert.throws(() => {ms932Encoder.encode("\u6F71")}, {name:"Error",message:"EncodingError U+6F71"});
assert.throws(() => {ms932Encoder.encode("\u6F72")}, {name:"Error",message:"EncodingError U+6F72"});
assert.throws(() => {ms932Encoder.encode("\u6F73")}, {name:"Error",message:"EncodingError U+6F73"});
r = r && ([...ms932Encoder.encode("潴")].join(",") === "224,107"); // U+6F74
assert.throws(() => {ms932Encoder.encode("\u6F75")}, {name:"Error",message:"EncodingError U+6F75"});
assert.throws(() => {ms932Encoder.encode("\u6F76")}, {name:"Error",message:"EncodingError U+6F76"});
assert.throws(() => {ms932Encoder.encode("\u6F77")}, {name:"Error",message:"EncodingError U+6F77"});
r = r && ([...ms932Encoder.encode("潸")].join(",") === "224,69"); // U+6F78
assert.throws(() => {ms932Encoder.encode("\u6F79")}, {name:"Error",message:"EncodingError U+6F79"});
r = r && ([...ms932Encoder.encode("潺")].join(",") === "224,68"); // U+6F7A
assert.throws(() => {ms932Encoder.encode("\u6F7B")}, {name:"Error",message:"EncodingError U+6F7B"});
r = r && ([...ms932Encoder.encode("潼")].join(",") === "224,77"); // U+6F7C
assert.throws(() => {ms932Encoder.encode("\u6F7D")}, {name:"Error",message:"EncodingError U+6F7D"});
assert.throws(() => {ms932Encoder.encode("\u6F7E")}, {name:"Error",message:"EncodingError U+6F7E"});
assert.throws(() => {ms932Encoder.encode("\u6F7F")}, {name:"Error",message:"EncodingError U+6F7F"});
r = r && ([...ms932Encoder.encode("澀澁澂")].join(",") === "224,71,224,70,224,76"); // U+6F80
assert.throws(() => {ms932Encoder.encode("\u6F83")}, {name:"Error",message:"EncodingError U+6F83"});
r = r && ([...ms932Encoder.encode("澄")].join(",") === "144,159"); // U+6F84
assert.throws(() => {ms932Encoder.encode("\u6F85")}, {name:"Error",message:"EncodingError U+6F85"});
r = r && ([...ms932Encoder.encode("澆")].join(",") === "224,67"); // U+6F86
assert.throws(() => {ms932Encoder.encode("\u6F87")}, {name:"Error",message:"EncodingError U+6F87"});
r = r && ([...ms932Encoder.encode("澈")].join(",") === "251,75"); // U+6F88
assert.throws(() => {ms932Encoder.encode("\u6F89")}, {name:"Error",message:"EncodingError U+6F89"});
assert.throws(() => {ms932Encoder.encode("\u6F8A")}, {name:"Error",message:"EncodingError U+6F8A"});
assert.throws(() => {ms932Encoder.encode("\u6F8B")}, {name:"Error",message:"EncodingError U+6F8B"});
assert.throws(() => {ms932Encoder.encode("\u6F8C")}, {name:"Error",message:"EncodingError U+6F8C"});
assert.throws(() => {ms932Encoder.encode("\u6F8D")}, {name:"Error",message:"EncodingError U+6F8D"});
r = r && ([...ms932Encoder.encode("澎")].join(",") === "224,79"); // U+6F8E
assert.throws(() => {ms932Encoder.encode("\u6F8F")}, {name:"Error",message:"EncodingError U+6F8F"});
assert.throws(() => {ms932Encoder.encode("\u6F90")}, {name:"Error",message:"EncodingError U+6F90"});
r = r && ([...ms932Encoder.encode("澑")].join(",") === "224,80"); // U+6F91
assert.throws(() => {ms932Encoder.encode("\u6F92")}, {name:"Error",message:"EncodingError U+6F92"});
assert.throws(() => {ms932Encoder.encode("\u6F93")}, {name:"Error",message:"EncodingError U+6F93"});
assert.throws(() => {ms932Encoder.encode("\u6F94")}, {name:"Error",message:"EncodingError U+6F94"});
assert.throws(() => {ms932Encoder.encode("\u6F95")}, {name:"Error",message:"EncodingError U+6F95"});
assert.throws(() => {ms932Encoder.encode("\u6F96")}, {name:"Error",message:"EncodingError U+6F96"});
r = r && ([...ms932Encoder.encode("澗")].join(",") === "138,192"); // U+6F97
assert.throws(() => {ms932Encoder.encode("\u6F98")}, {name:"Error",message:"EncodingError U+6F98"});
assert.throws(() => {ms932Encoder.encode("\u6F99")}, {name:"Error",message:"EncodingError U+6F99"});
assert.throws(() => {ms932Encoder.encode("\u6F9A")}, {name:"Error",message:"EncodingError U+6F9A"});
assert.throws(() => {ms932Encoder.encode("\u6F9B")}, {name:"Error",message:"EncodingError U+6F9B"});
assert.throws(() => {ms932Encoder.encode("\u6F9C")}, {name:"Error",message:"EncodingError U+6F9C"});
assert.throws(() => {ms932Encoder.encode("\u6F9D")}, {name:"Error",message:"EncodingError U+6F9D"});
assert.throws(() => {ms932Encoder.encode("\u6F9E")}, {name:"Error",message:"EncodingError U+6F9E"});
assert.throws(() => {ms932Encoder.encode("\u6F9F")}, {name:"Error",message:"EncodingError U+6F9F"});
assert.throws(() => {ms932Encoder.encode("\u6FA0")}, {name:"Error",message:"EncodingError U+6FA0"});
r = r && ([...ms932Encoder.encode("澡")].join(",") === "224,85"); // U+6FA1
assert.throws(() => {ms932Encoder.encode("\u6FA2")}, {name:"Error",message:"EncodingError U+6FA2"});
r = r && ([...ms932Encoder.encode("澣澤")].join(",") === "224,84,224,86"); // U+6FA3
assert.throws(() => {ms932Encoder.encode("\u6FA5")}, {name:"Error",message:"EncodingError U+6FA5"});
assert.throws(() => {ms932Encoder.encode("\u6FA6")}, {name:"Error",message:"EncodingError U+6FA6"});
assert.throws(() => {ms932Encoder.encode("\u6FA7")}, {name:"Error",message:"EncodingError U+6FA7"});
assert.throws(() => {ms932Encoder.encode("\u6FA8")}, {name:"Error",message:"EncodingError U+6FA8"});
assert.throws(() => {ms932Encoder.encode("\u6FA9")}, {name:"Error",message:"EncodingError U+6FA9"});
r = r && ([...ms932Encoder.encode("澪")].join(",") === "224,89"); // U+6FAA
assert.throws(() => {ms932Encoder.encode("\u6FAB")}, {name:"Error",message:"EncodingError U+6FAB"});
assert.throws(() => {ms932Encoder.encode("\u6FAC")}, {name:"Error",message:"EncodingError U+6FAC"});
assert.throws(() => {ms932Encoder.encode("\u6FAD")}, {name:"Error",message:"EncodingError U+6FAD"});
assert.throws(() => {ms932Encoder.encode("\u6FAE")}, {name:"Error",message:"EncodingError U+6FAE"});
assert.throws(() => {ms932Encoder.encode("\u6FAF")}, {name:"Error",message:"EncodingError U+6FAF"});
assert.throws(() => {ms932Encoder.encode("\u6FB0")}, {name:"Error",message:"EncodingError U+6FB0"});
r = r && ([...ms932Encoder.encode("澱")].join(",") === "147,98"); // U+6FB1
assert.throws(() => {ms932Encoder.encode("\u6FB2")}, {name:"Error",message:"EncodingError U+6FB2"});
r = r && ([...ms932Encoder.encode("澳")].join(",") === "224,83"); // U+6FB3
assert.throws(() => {ms932Encoder.encode("\u6FB4")}, {name:"Error",message:"EncodingError U+6FB4"});
r = r && ([...ms932Encoder.encode("澵")].join(",") === "251,76"); // U+6FB5
assert.throws(() => {ms932Encoder.encode("\u6FB6")}, {name:"Error",message:"EncodingError U+6FB6"});
assert.throws(() => {ms932Encoder.encode("\u6FB7")}, {name:"Error",message:"EncodingError U+6FB7"});
assert.throws(() => {ms932Encoder.encode("\u6FB8")}, {name:"Error",message:"EncodingError U+6FB8"});
r = r && ([...ms932Encoder.encode("澹")].join(",") === "224,87"); // U+6FB9
assert.throws(() => {ms932Encoder.encode("\u6FBA")}, {name:"Error",message:"EncodingError U+6FBA"});
assert.throws(() => {ms932Encoder.encode("\u6FBB")}, {name:"Error",message:"EncodingError U+6FBB"});
assert.throws(() => {ms932Encoder.encode("\u6FBC")}, {name:"Error",message:"EncodingError U+6FBC"});
assert.throws(() => {ms932Encoder.encode("\u6FBD")}, {name:"Error",message:"EncodingError U+6FBD"});
assert.throws(() => {ms932Encoder.encode("\u6FBE")}, {name:"Error",message:"EncodingError U+6FBE"});
assert.throws(() => {ms932Encoder.encode("\u6FBF")}, {name:"Error",message:"EncodingError U+6FBF"});
r = r && ([...ms932Encoder.encode("激濁濂濃")].join(",") === "140,131,145,247,224,81,148,90"); // U+6FC0
assert.throws(() => {ms932Encoder.encode("\u6FC4")}, {name:"Error",message:"EncodingError U+6FC4"});
assert.throws(() => {ms932Encoder.encode("\u6FC5")}, {name:"Error",message:"EncodingError U+6FC5"});
r = r && ([...ms932Encoder.encode("濆")].join(",") === "224,88"); // U+6FC6
assert.throws(() => {ms932Encoder.encode("\u6FC7")}, {name:"Error",message:"EncodingError U+6FC7"});
assert.throws(() => {ms932Encoder.encode("\u6FC8")}, {name:"Error",message:"EncodingError U+6FC8"});
assert.throws(() => {ms932Encoder.encode("\u6FC9")}, {name:"Error",message:"EncodingError U+6FC9"});
assert.throws(() => {ms932Encoder.encode("\u6FCA")}, {name:"Error",message:"EncodingError U+6FCA"});
assert.throws(() => {ms932Encoder.encode("\u6FCB")}, {name:"Error",message:"EncodingError U+6FCB"});
assert.throws(() => {ms932Encoder.encode("\u6FCC")}, {name:"Error",message:"EncodingError U+6FCC"});
assert.throws(() => {ms932Encoder.encode("\u6FCD")}, {name:"Error",message:"EncodingError U+6FCD"});
assert.throws(() => {ms932Encoder.encode("\u6FCE")}, {name:"Error",message:"EncodingError U+6FCE"});
assert.throws(() => {ms932Encoder.encode("\u6FCF")}, {name:"Error",message:"EncodingError U+6FCF"});
assert.throws(() => {ms932Encoder.encode("\u6FD0")}, {name:"Error",message:"EncodingError U+6FD0"});
assert.throws(() => {ms932Encoder.encode("\u6FD1")}, {name:"Error",message:"EncodingError U+6FD1"});
assert.throws(() => {ms932Encoder.encode("\u6FD2")}, {name:"Error",message:"EncodingError U+6FD2"});
assert.throws(() => {ms932Encoder.encode("\u6FD3")}, {name:"Error",message:"EncodingError U+6FD3"});
r = r && ([...ms932Encoder.encode("濔濕")].join(",") === "224,93,224,91"); // U+6FD4
assert.throws(() => {ms932Encoder.encode("\u6FD6")}, {name:"Error",message:"EncodingError U+6FD6"});
assert.throws(() => {ms932Encoder.encode("\u6FD7")}, {name:"Error",message:"EncodingError U+6FD7"});
r = r && ([...ms932Encoder.encode("濘")].join(",") === "224,94"); // U+6FD8
assert.throws(() => {ms932Encoder.encode("\u6FD9")}, {name:"Error",message:"EncodingError U+6FD9"});
assert.throws(() => {ms932Encoder.encode("\u6FDA")}, {name:"Error",message:"EncodingError U+6FDA"});
r = r && ([...ms932Encoder.encode("濛")].join(",") === "224,97"); // U+6FDB
assert.throws(() => {ms932Encoder.encode("\u6FDC")}, {name:"Error",message:"EncodingError U+6FDC"});
assert.throws(() => {ms932Encoder.encode("\u6FDD")}, {name:"Error",message:"EncodingError U+6FDD"});
assert.throws(() => {ms932Encoder.encode("\u6FDE")}, {name:"Error",message:"EncodingError U+6FDE"});
r = r && ([...ms932Encoder.encode("濟濠濡")].join(",") === "224,90,141,138,148,71"); // U+6FDF
assert.throws(() => {ms932Encoder.encode("\u6FE2")}, {name:"Error",message:"EncodingError U+6FE2"});
assert.throws(() => {ms932Encoder.encode("\u6FE3")}, {name:"Error",message:"EncodingError U+6FE3"});
r = r && ([...ms932Encoder.encode("濤")].join(",") === "159,183"); // U+6FE4
assert.throws(() => {ms932Encoder.encode("\u6FE5")}, {name:"Error",message:"EncodingError U+6FE5"});
assert.throws(() => {ms932Encoder.encode("\u6FE6")}, {name:"Error",message:"EncodingError U+6FE6"});
assert.throws(() => {ms932Encoder.encode("\u6FE7")}, {name:"Error",message:"EncodingError U+6FE7"});
assert.throws(() => {ms932Encoder.encode("\u6FE8")}, {name:"Error",message:"EncodingError U+6FE8"});
assert.throws(() => {ms932Encoder.encode("\u6FE9")}, {name:"Error",message:"EncodingError U+6FE9"});
assert.throws(() => {ms932Encoder.encode("\u6FEA")}, {name:"Error",message:"EncodingError U+6FEA"});
r = r && ([...ms932Encoder.encode("濫濬")].join(",") === "151,148,224,92"); // U+6FEB
assert.throws(() => {ms932Encoder.encode("\u6FED")}, {name:"Error",message:"EncodingError U+6FED"});
r = r && ([...ms932Encoder.encode("濮濯")].join(",") === "224,96,145,243"); // U+6FEE
assert.throws(() => {ms932Encoder.encode("\u6FF0")}, {name:"Error",message:"EncodingError U+6FF0"});
r = r && ([...ms932Encoder.encode("濱")].join(",") === "224,95"); // U+6FF1
assert.throws(() => {ms932Encoder.encode("\u6FF2")}, {name:"Error",message:"EncodingError U+6FF2"});
r = r && ([...ms932Encoder.encode("濳")].join(",") === "224,74"); // U+6FF3
assert.throws(() => {ms932Encoder.encode("\u6FF4")}, {name:"Error",message:"EncodingError U+6FF4"});
r = r && ([...ms932Encoder.encode("濵濶")].join(",") === "251,77,232,137"); // U+6FF5
assert.throws(() => {ms932Encoder.encode("\u6FF7")}, {name:"Error",message:"EncodingError U+6FF7"});
assert.throws(() => {ms932Encoder.encode("\u6FF8")}, {name:"Error",message:"EncodingError U+6FF8"});
assert.throws(() => {ms932Encoder.encode("\u6FF9")}, {name:"Error",message:"EncodingError U+6FF9"});
r = r && ([...ms932Encoder.encode("濺")].join(",") === "224,100"); // U+6FFA
assert.throws(() => {ms932Encoder.encode("\u6FFB")}, {name:"Error",message:"EncodingError U+6FFB"});
assert.throws(() => {ms932Encoder.encode("\u6FFC")}, {name:"Error",message:"EncodingError U+6FFC"});
assert.throws(() => {ms932Encoder.encode("\u6FFD")}, {name:"Error",message:"EncodingError U+6FFD"});
r = r && ([...ms932Encoder.encode("濾")].join(",") === "224,104"); // U+6FFE
assert.throws(() => {ms932Encoder.encode("\u6FFF")}, {name:"Error",message:"EncodingError U+6FFF"});

assert.strictEqual(r, true);

  });

});
