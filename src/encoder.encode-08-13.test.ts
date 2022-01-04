import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 8", () => {

  it("encode(string) - U+7C00-U+7FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
r = r && ([...ms932Encoder.encode("簀")].join(",") === "226,197"); // U+7C00
assert.throws(() => {ms932Encoder.encode("\u7C01")}, {name:"Error",message:"EncodingError U+7C01"});
assert.throws(() => {ms932Encoder.encode("\u7C02")}, {name:"Error",message:"EncodingError U+7C02"});
assert.throws(() => {ms932Encoder.encode("\u7C03")}, {name:"Error",message:"EncodingError U+7C03"});
assert.throws(() => {ms932Encoder.encode("\u7C04")}, {name:"Error",message:"EncodingError U+7C04"});
assert.throws(() => {ms932Encoder.encode("\u7C05")}, {name:"Error",message:"EncodingError U+7C05"});
assert.throws(() => {ms932Encoder.encode("\u7C06")}, {name:"Error",message:"EncodingError U+7C06"});
r = r && ([...ms932Encoder.encode("簇")].join(",") === "226,198"); // U+7C07
assert.throws(() => {ms932Encoder.encode("\u7C08")}, {name:"Error",message:"EncodingError U+7C08"});
assert.throws(() => {ms932Encoder.encode("\u7C09")}, {name:"Error",message:"EncodingError U+7C09"});
assert.throws(() => {ms932Encoder.encode("\u7C0A")}, {name:"Error",message:"EncodingError U+7C0A"});
assert.throws(() => {ms932Encoder.encode("\u7C0B")}, {name:"Error",message:"EncodingError U+7C0B"});
assert.throws(() => {ms932Encoder.encode("\u7C0C")}, {name:"Error",message:"EncodingError U+7C0C"});
r = r && ([...ms932Encoder.encode("簍")].join(",") === "226,203"); // U+7C0D
assert.throws(() => {ms932Encoder.encode("\u7C0E")}, {name:"Error",message:"EncodingError U+7C0E"});
assert.throws(() => {ms932Encoder.encode("\u7C0F")}, {name:"Error",message:"EncodingError U+7C0F"});
assert.throws(() => {ms932Encoder.encode("\u7C10")}, {name:"Error",message:"EncodingError U+7C10"});
r = r && ([...ms932Encoder.encode("簑簒簓簔")].join(",") === "226,192,153,211,226,199,226,193"); // U+7C11
assert.throws(() => {ms932Encoder.encode("\u7C15")}, {name:"Error",message:"EncodingError U+7C15"});
assert.throws(() => {ms932Encoder.encode("\u7C16")}, {name:"Error",message:"EncodingError U+7C16"});
r = r && ([...ms932Encoder.encode("簗")].join(",") === "226,202"); // U+7C17
assert.throws(() => {ms932Encoder.encode("\u7C18")}, {name:"Error",message:"EncodingError U+7C18"});
assert.throws(() => {ms932Encoder.encode("\u7C19")}, {name:"Error",message:"EncodingError U+7C19"});
assert.throws(() => {ms932Encoder.encode("\u7C1A")}, {name:"Error",message:"EncodingError U+7C1A"});
assert.throws(() => {ms932Encoder.encode("\u7C1B")}, {name:"Error",message:"EncodingError U+7C1B"});
assert.throws(() => {ms932Encoder.encode("\u7C1C")}, {name:"Error",message:"EncodingError U+7C1C"});
assert.throws(() => {ms932Encoder.encode("\u7C1D")}, {name:"Error",message:"EncodingError U+7C1D"});
assert.throws(() => {ms932Encoder.encode("\u7C1E")}, {name:"Error",message:"EncodingError U+7C1E"});
r = r && ([...ms932Encoder.encode("簟")].join(",") === "226,208"); // U+7C1F
assert.throws(() => {ms932Encoder.encode("\u7C20")}, {name:"Error",message:"EncodingError U+7C20"});
r = r && ([...ms932Encoder.encode("簡")].join(",") === "138,200"); // U+7C21
assert.throws(() => {ms932Encoder.encode("\u7C22")}, {name:"Error",message:"EncodingError U+7C22"});
r = r && ([...ms932Encoder.encode("簣")].join(",") === "226,205"); // U+7C23
assert.throws(() => {ms932Encoder.encode("\u7C24")}, {name:"Error",message:"EncodingError U+7C24"});
assert.throws(() => {ms932Encoder.encode("\u7C25")}, {name:"Error",message:"EncodingError U+7C25"});
assert.throws(() => {ms932Encoder.encode("\u7C26")}, {name:"Error",message:"EncodingError U+7C26"});
r = r && ([...ms932Encoder.encode("簧")].join(",") === "226,206"); // U+7C27
assert.throws(() => {ms932Encoder.encode("\u7C28")}, {name:"Error",message:"EncodingError U+7C28"});
assert.throws(() => {ms932Encoder.encode("\u7C29")}, {name:"Error",message:"EncodingError U+7C29"});
r = r && ([...ms932Encoder.encode("簪簫")].join(",") === "226,207,226,210"); // U+7C2A
assert.throws(() => {ms932Encoder.encode("\u7C2C")}, {name:"Error",message:"EncodingError U+7C2C"});
assert.throws(() => {ms932Encoder.encode("\u7C2D")}, {name:"Error",message:"EncodingError U+7C2D"});
assert.throws(() => {ms932Encoder.encode("\u7C2E")}, {name:"Error",message:"EncodingError U+7C2E"});
assert.throws(() => {ms932Encoder.encode("\u7C2F")}, {name:"Error",message:"EncodingError U+7C2F"});
assert.throws(() => {ms932Encoder.encode("\u7C30")}, {name:"Error",message:"EncodingError U+7C30"});
assert.throws(() => {ms932Encoder.encode("\u7C31")}, {name:"Error",message:"EncodingError U+7C31"});
assert.throws(() => {ms932Encoder.encode("\u7C32")}, {name:"Error",message:"EncodingError U+7C32"});
assert.throws(() => {ms932Encoder.encode("\u7C33")}, {name:"Error",message:"EncodingError U+7C33"});
assert.throws(() => {ms932Encoder.encode("\u7C34")}, {name:"Error",message:"EncodingError U+7C34"});
assert.throws(() => {ms932Encoder.encode("\u7C35")}, {name:"Error",message:"EncodingError U+7C35"});
assert.throws(() => {ms932Encoder.encode("\u7C36")}, {name:"Error",message:"EncodingError U+7C36"});
r = r && ([...ms932Encoder.encode("簷簸")].join(",") === "226,209,148,244"); // U+7C37
assert.throws(() => {ms932Encoder.encode("\u7C39")}, {name:"Error",message:"EncodingError U+7C39"});
assert.throws(() => {ms932Encoder.encode("\u7C3A")}, {name:"Error",message:"EncodingError U+7C3A"});
assert.throws(() => {ms932Encoder.encode("\u7C3B")}, {name:"Error",message:"EncodingError U+7C3B"});
assert.throws(() => {ms932Encoder.encode("\u7C3C")}, {name:"Error",message:"EncodingError U+7C3C"});
r = r && ([...ms932Encoder.encode("簽簾簿籀")].join(",") === "226,211,151,250,149,235,226,216"); // U+7C3D
assert.throws(() => {ms932Encoder.encode("\u7C41")}, {name:"Error",message:"EncodingError U+7C41"});
assert.throws(() => {ms932Encoder.encode("\u7C42")}, {name:"Error",message:"EncodingError U+7C42"});
r = r && ([...ms932Encoder.encode("籃")].join(",") === "226,213"); // U+7C43
assert.throws(() => {ms932Encoder.encode("\u7C44")}, {name:"Error",message:"EncodingError U+7C44"});
assert.throws(() => {ms932Encoder.encode("\u7C45")}, {name:"Error",message:"EncodingError U+7C45"});
assert.throws(() => {ms932Encoder.encode("\u7C46")}, {name:"Error",message:"EncodingError U+7C46"});
assert.throws(() => {ms932Encoder.encode("\u7C47")}, {name:"Error",message:"EncodingError U+7C47"});
assert.throws(() => {ms932Encoder.encode("\u7C48")}, {name:"Error",message:"EncodingError U+7C48"});
assert.throws(() => {ms932Encoder.encode("\u7C49")}, {name:"Error",message:"EncodingError U+7C49"});
assert.throws(() => {ms932Encoder.encode("\u7C4A")}, {name:"Error",message:"EncodingError U+7C4A"});
assert.throws(() => {ms932Encoder.encode("\u7C4B")}, {name:"Error",message:"EncodingError U+7C4B"});
r = r && ([...ms932Encoder.encode("籌籍")].join(",") === "226,212,144,208"); // U+7C4C
assert.throws(() => {ms932Encoder.encode("\u7C4E")}, {name:"Error",message:"EncodingError U+7C4E"});
r = r && ([...ms932Encoder.encode("籏籐")].join(",") === "226,215,226,217"); // U+7C4F
assert.throws(() => {ms932Encoder.encode("\u7C51")}, {name:"Error",message:"EncodingError U+7C51"});
assert.throws(() => {ms932Encoder.encode("\u7C52")}, {name:"Error",message:"EncodingError U+7C52"});
assert.throws(() => {ms932Encoder.encode("\u7C53")}, {name:"Error",message:"EncodingError U+7C53"});
r = r && ([...ms932Encoder.encode("籔")].join(",") === "226,214"); // U+7C54
assert.throws(() => {ms932Encoder.encode("\u7C55")}, {name:"Error",message:"EncodingError U+7C55"});
r = r && ([...ms932Encoder.encode("籖")].join(",") === "226,221"); // U+7C56
assert.throws(() => {ms932Encoder.encode("\u7C57")}, {name:"Error",message:"EncodingError U+7C57"});
r = r && ([...ms932Encoder.encode("籘")].join(",") === "226,218"); // U+7C58
assert.throws(() => {ms932Encoder.encode("\u7C59")}, {name:"Error",message:"EncodingError U+7C59"});
assert.throws(() => {ms932Encoder.encode("\u7C5A")}, {name:"Error",message:"EncodingError U+7C5A"});
assert.throws(() => {ms932Encoder.encode("\u7C5B")}, {name:"Error",message:"EncodingError U+7C5B"});
assert.throws(() => {ms932Encoder.encode("\u7C5C")}, {name:"Error",message:"EncodingError U+7C5C"});
assert.throws(() => {ms932Encoder.encode("\u7C5D")}, {name:"Error",message:"EncodingError U+7C5D"});
assert.throws(() => {ms932Encoder.encode("\u7C5E")}, {name:"Error",message:"EncodingError U+7C5E"});
r = r && ([...ms932Encoder.encode("籟籠")].join(",") === "226,219,226,196"); // U+7C5F
assert.throws(() => {ms932Encoder.encode("\u7C61")}, {name:"Error",message:"EncodingError U+7C61"});
assert.throws(() => {ms932Encoder.encode("\u7C62")}, {name:"Error",message:"EncodingError U+7C62"});
assert.throws(() => {ms932Encoder.encode("\u7C63")}, {name:"Error",message:"EncodingError U+7C63"});
r = r && ([...ms932Encoder.encode("籤籥")].join(",") === "226,220,226,222"); // U+7C64
assert.throws(() => {ms932Encoder.encode("\u7C66")}, {name:"Error",message:"EncodingError U+7C66"});
assert.throws(() => {ms932Encoder.encode("\u7C67")}, {name:"Error",message:"EncodingError U+7C67"});
assert.throws(() => {ms932Encoder.encode("\u7C68")}, {name:"Error",message:"EncodingError U+7C68"});
assert.throws(() => {ms932Encoder.encode("\u7C69")}, {name:"Error",message:"EncodingError U+7C69"});
assert.throws(() => {ms932Encoder.encode("\u7C6A")}, {name:"Error",message:"EncodingError U+7C6A"});
assert.throws(() => {ms932Encoder.encode("\u7C6B")}, {name:"Error",message:"EncodingError U+7C6B"});
r = r && ([...ms932Encoder.encode("籬")].join(",") === "226,223"); // U+7C6C
assert.throws(() => {ms932Encoder.encode("\u7C6D")}, {name:"Error",message:"EncodingError U+7C6D"});
assert.throws(() => {ms932Encoder.encode("\u7C6E")}, {name:"Error",message:"EncodingError U+7C6E"});
assert.throws(() => {ms932Encoder.encode("\u7C6F")}, {name:"Error",message:"EncodingError U+7C6F"});
assert.throws(() => {ms932Encoder.encode("\u7C70")}, {name:"Error",message:"EncodingError U+7C70"});
assert.throws(() => {ms932Encoder.encode("\u7C71")}, {name:"Error",message:"EncodingError U+7C71"});
assert.throws(() => {ms932Encoder.encode("\u7C72")}, {name:"Error",message:"EncodingError U+7C72"});
r = r && ([...ms932Encoder.encode("米")].join(",") === "149,196"); // U+7C73
assert.throws(() => {ms932Encoder.encode("\u7C74")}, {name:"Error",message:"EncodingError U+7C74"});
r = r && ([...ms932Encoder.encode("籵")].join(",") === "226,224"); // U+7C75
assert.throws(() => {ms932Encoder.encode("\u7C76")}, {name:"Error",message:"EncodingError U+7C76"});
assert.throws(() => {ms932Encoder.encode("\u7C77")}, {name:"Error",message:"EncodingError U+7C77"});
assert.throws(() => {ms932Encoder.encode("\u7C78")}, {name:"Error",message:"EncodingError U+7C78"});
assert.throws(() => {ms932Encoder.encode("\u7C79")}, {name:"Error",message:"EncodingError U+7C79"});
assert.throws(() => {ms932Encoder.encode("\u7C7A")}, {name:"Error",message:"EncodingError U+7C7A"});
assert.throws(() => {ms932Encoder.encode("\u7C7B")}, {name:"Error",message:"EncodingError U+7C7B"});
assert.throws(() => {ms932Encoder.encode("\u7C7C")}, {name:"Error",message:"EncodingError U+7C7C"});
assert.throws(() => {ms932Encoder.encode("\u7C7D")}, {name:"Error",message:"EncodingError U+7C7D"});
r = r && ([...ms932Encoder.encode("籾")].join(",") === "150,224"); // U+7C7E
assert.throws(() => {ms932Encoder.encode("\u7C7F")}, {name:"Error",message:"EncodingError U+7C7F"});
assert.throws(() => {ms932Encoder.encode("\u7C80")}, {name:"Error",message:"EncodingError U+7C80"});
r = r && ([...ms932Encoder.encode("粁粂粃")].join(",") === "139,204,140,72,226,225"); // U+7C81
assert.throws(() => {ms932Encoder.encode("\u7C84")}, {name:"Error",message:"EncodingError U+7C84"});
assert.throws(() => {ms932Encoder.encode("\u7C85")}, {name:"Error",message:"EncodingError U+7C85"});
assert.throws(() => {ms932Encoder.encode("\u7C86")}, {name:"Error",message:"EncodingError U+7C86"});
assert.throws(() => {ms932Encoder.encode("\u7C87")}, {name:"Error",message:"EncodingError U+7C87"});
assert.throws(() => {ms932Encoder.encode("\u7C88")}, {name:"Error",message:"EncodingError U+7C88"});
r = r && ([...ms932Encoder.encode("粉")].join(",") === "149,178"); // U+7C89
assert.throws(() => {ms932Encoder.encode("\u7C8A")}, {name:"Error",message:"EncodingError U+7C8A"});
r = r && ([...ms932Encoder.encode("粋")].join(",") === "144,136"); // U+7C8B
assert.throws(() => {ms932Encoder.encode("\u7C8C")}, {name:"Error",message:"EncodingError U+7C8C"});
r = r && ([...ms932Encoder.encode("粍")].join(",") === "150,174"); // U+7C8D
assert.throws(() => {ms932Encoder.encode("\u7C8E")}, {name:"Error",message:"EncodingError U+7C8E"});
assert.throws(() => {ms932Encoder.encode("\u7C8F")}, {name:"Error",message:"EncodingError U+7C8F"});
r = r && ([...ms932Encoder.encode("粐")].join(",") === "226,226"); // U+7C90
assert.throws(() => {ms932Encoder.encode("\u7C91")}, {name:"Error",message:"EncodingError U+7C91"});
r = r && ([...ms932Encoder.encode("粒")].join(",") === "151,177"); // U+7C92
assert.throws(() => {ms932Encoder.encode("\u7C93")}, {name:"Error",message:"EncodingError U+7C93"});
assert.throws(() => {ms932Encoder.encode("\u7C94")}, {name:"Error",message:"EncodingError U+7C94"});
r = r && ([...ms932Encoder.encode("粕")].join(",") === "148,148"); // U+7C95
assert.throws(() => {ms932Encoder.encode("\u7C96")}, {name:"Error",message:"EncodingError U+7C96"});
r = r && ([...ms932Encoder.encode("粗粘")].join(",") === "145,101,148,83"); // U+7C97
assert.throws(() => {ms932Encoder.encode("\u7C99")}, {name:"Error",message:"EncodingError U+7C99"});
assert.throws(() => {ms932Encoder.encode("\u7C9A")}, {name:"Error",message:"EncodingError U+7C9A"});
r = r && ([...ms932Encoder.encode("粛")].join(",") === "143,108"); // U+7C9B
assert.throws(() => {ms932Encoder.encode("\u7C9C")}, {name:"Error",message:"EncodingError U+7C9C"});
assert.throws(() => {ms932Encoder.encode("\u7C9D")}, {name:"Error",message:"EncodingError U+7C9D"});
assert.throws(() => {ms932Encoder.encode("\u7C9E")}, {name:"Error",message:"EncodingError U+7C9E"});
r = r && ([...ms932Encoder.encode("粟")].join(",") === "136,190"); // U+7C9F
assert.throws(() => {ms932Encoder.encode("\u7CA0")}, {name:"Error",message:"EncodingError U+7CA0"});
r = r && ([...ms932Encoder.encode("粡粢")].join(",") === "226,231,226,229"); // U+7CA1
assert.throws(() => {ms932Encoder.encode("\u7CA3")}, {name:"Error",message:"EncodingError U+7CA3"});
r = r && ([...ms932Encoder.encode("粤粥")].join(",") === "226,227,138,159"); // U+7CA4
assert.throws(() => {ms932Encoder.encode("\u7CA6")}, {name:"Error",message:"EncodingError U+7CA6"});
r = r && ([...ms932Encoder.encode("粧粨")].join(",") === "143,207,226,232"); // U+7CA7
assert.throws(() => {ms932Encoder.encode("\u7CA9")}, {name:"Error",message:"EncodingError U+7CA9"});
assert.throws(() => {ms932Encoder.encode("\u7CAA")}, {name:"Error",message:"EncodingError U+7CAA"});
r = r && ([...ms932Encoder.encode("粫")].join(",") === "226,230"); // U+7CAB
assert.throws(() => {ms932Encoder.encode("\u7CAC")}, {name:"Error",message:"EncodingError U+7CAC"});
r = r && ([...ms932Encoder.encode("粭粮")].join(",") === "226,228,226,236"); // U+7CAD
assert.throws(() => {ms932Encoder.encode("\u7CAF")}, {name:"Error",message:"EncodingError U+7CAF"});
assert.throws(() => {ms932Encoder.encode("\u7CB0")}, {name:"Error",message:"EncodingError U+7CB0"});
r = r && ([...ms932Encoder.encode("粱粲粳")].join(",") === "226,235,226,234,226,233"); // U+7CB1
assert.throws(() => {ms932Encoder.encode("\u7CB4")}, {name:"Error",message:"EncodingError U+7CB4"});
assert.throws(() => {ms932Encoder.encode("\u7CB5")}, {name:"Error",message:"EncodingError U+7CB5"});
assert.throws(() => {ms932Encoder.encode("\u7CB6")}, {name:"Error",message:"EncodingError U+7CB6"});
assert.throws(() => {ms932Encoder.encode("\u7CB7")}, {name:"Error",message:"EncodingError U+7CB7"});
assert.throws(() => {ms932Encoder.encode("\u7CB8")}, {name:"Error",message:"EncodingError U+7CB8"});
r = r && ([...ms932Encoder.encode("粹")].join(",") === "226,237"); // U+7CB9
assert.throws(() => {ms932Encoder.encode("\u7CBA")}, {name:"Error",message:"EncodingError U+7CBA"});
assert.throws(() => {ms932Encoder.encode("\u7CBB")}, {name:"Error",message:"EncodingError U+7CBB"});
assert.throws(() => {ms932Encoder.encode("\u7CBC")}, {name:"Error",message:"EncodingError U+7CBC"});
r = r && ([...ms932Encoder.encode("粽精")].join(",") === "226,238,144,184"); // U+7CBD
assert.throws(() => {ms932Encoder.encode("\u7CBF")}, {name:"Error",message:"EncodingError U+7CBF"});
r = r && ([...ms932Encoder.encode("糀")].join(",") === "226,239"); // U+7CC0
assert.throws(() => {ms932Encoder.encode("\u7CC1")}, {name:"Error",message:"EncodingError U+7CC1"});
r = r && ([...ms932Encoder.encode("糂")].join(",") === "226,241"); // U+7CC2
assert.throws(() => {ms932Encoder.encode("\u7CC3")}, {name:"Error",message:"EncodingError U+7CC3"});
assert.throws(() => {ms932Encoder.encode("\u7CC4")}, {name:"Error",message:"EncodingError U+7CC4"});
r = r && ([...ms932Encoder.encode("糅")].join(",") === "226,240"); // U+7CC5
assert.throws(() => {ms932Encoder.encode("\u7CC6")}, {name:"Error",message:"EncodingError U+7CC6"});
assert.throws(() => {ms932Encoder.encode("\u7CC7")}, {name:"Error",message:"EncodingError U+7CC7"});
assert.throws(() => {ms932Encoder.encode("\u7CC8")}, {name:"Error",message:"EncodingError U+7CC8"});
assert.throws(() => {ms932Encoder.encode("\u7CC9")}, {name:"Error",message:"EncodingError U+7CC9"});
r = r && ([...ms932Encoder.encode("糊")].join(",") === "140,208"); // U+7CCA
assert.throws(() => {ms932Encoder.encode("\u7CCB")}, {name:"Error",message:"EncodingError U+7CCB"});
assert.throws(() => {ms932Encoder.encode("\u7CCC")}, {name:"Error",message:"EncodingError U+7CCC"});
assert.throws(() => {ms932Encoder.encode("\u7CCD")}, {name:"Error",message:"EncodingError U+7CCD"});
r = r && ([...ms932Encoder.encode("糎")].join(",") === "145,87"); // U+7CCE
assert.throws(() => {ms932Encoder.encode("\u7CCF")}, {name:"Error",message:"EncodingError U+7CCF"});
assert.throws(() => {ms932Encoder.encode("\u7CD0")}, {name:"Error",message:"EncodingError U+7CD0"});
assert.throws(() => {ms932Encoder.encode("\u7CD1")}, {name:"Error",message:"EncodingError U+7CD1"});
r = r && ([...ms932Encoder.encode("糒")].join(",") === "226,243"); // U+7CD2
assert.throws(() => {ms932Encoder.encode("\u7CD3")}, {name:"Error",message:"EncodingError U+7CD3"});
assert.throws(() => {ms932Encoder.encode("\u7CD4")}, {name:"Error",message:"EncodingError U+7CD4"});
assert.throws(() => {ms932Encoder.encode("\u7CD5")}, {name:"Error",message:"EncodingError U+7CD5"});
r = r && ([...ms932Encoder.encode("糖")].join(",") === "147,156"); // U+7CD6
assert.throws(() => {ms932Encoder.encode("\u7CD7")}, {name:"Error",message:"EncodingError U+7CD7"});
r = r && ([...ms932Encoder.encode("糘")].join(",") === "226,242"); // U+7CD8
assert.throws(() => {ms932Encoder.encode("\u7CD9")}, {name:"Error",message:"EncodingError U+7CD9"});
assert.throws(() => {ms932Encoder.encode("\u7CDA")}, {name:"Error",message:"EncodingError U+7CDA"});
assert.throws(() => {ms932Encoder.encode("\u7CDB")}, {name:"Error",message:"EncodingError U+7CDB"});
r = r && ([...ms932Encoder.encode("糜")].join(",") === "226,244"); // U+7CDC
assert.throws(() => {ms932Encoder.encode("\u7CDD")}, {name:"Error",message:"EncodingError U+7CDD"});
r = r && ([...ms932Encoder.encode("糞糟糠")].join(",") === "149,179,145,140,141,102"); // U+7CDE
assert.throws(() => {ms932Encoder.encode("\u7CE1")}, {name:"Error",message:"EncodingError U+7CE1"});
r = r && ([...ms932Encoder.encode("糢")].join(",") === "226,245"); // U+7CE2
assert.throws(() => {ms932Encoder.encode("\u7CE3")}, {name:"Error",message:"EncodingError U+7CE3"});
assert.throws(() => {ms932Encoder.encode("\u7CE4")}, {name:"Error",message:"EncodingError U+7CE4"});
assert.throws(() => {ms932Encoder.encode("\u7CE5")}, {name:"Error",message:"EncodingError U+7CE5"});
assert.throws(() => {ms932Encoder.encode("\u7CE6")}, {name:"Error",message:"EncodingError U+7CE6"});
r = r && ([...ms932Encoder.encode("糧")].join(",") === "151,198"); // U+7CE7
assert.throws(() => {ms932Encoder.encode("\u7CE8")}, {name:"Error",message:"EncodingError U+7CE8"});
assert.throws(() => {ms932Encoder.encode("\u7CE9")}, {name:"Error",message:"EncodingError U+7CE9"});
assert.throws(() => {ms932Encoder.encode("\u7CEA")}, {name:"Error",message:"EncodingError U+7CEA"});
assert.throws(() => {ms932Encoder.encode("\u7CEB")}, {name:"Error",message:"EncodingError U+7CEB"});
assert.throws(() => {ms932Encoder.encode("\u7CEC")}, {name:"Error",message:"EncodingError U+7CEC"});
assert.throws(() => {ms932Encoder.encode("\u7CED")}, {name:"Error",message:"EncodingError U+7CED"});
assert.throws(() => {ms932Encoder.encode("\u7CEE")}, {name:"Error",message:"EncodingError U+7CEE"});
r = r && ([...ms932Encoder.encode("糯")].join(",") === "226,247"); // U+7CEF
assert.throws(() => {ms932Encoder.encode("\u7CF0")}, {name:"Error",message:"EncodingError U+7CF0"});
assert.throws(() => {ms932Encoder.encode("\u7CF1")}, {name:"Error",message:"EncodingError U+7CF1"});
r = r && ([...ms932Encoder.encode("糲")].join(",") === "226,248"); // U+7CF2
assert.throws(() => {ms932Encoder.encode("\u7CF3")}, {name:"Error",message:"EncodingError U+7CF3"});
r = r && ([...ms932Encoder.encode("糴")].join(",") === "226,249"); // U+7CF4
assert.throws(() => {ms932Encoder.encode("\u7CF5")}, {name:"Error",message:"EncodingError U+7CF5"});
r = r && ([...ms932Encoder.encode("糶")].join(",") === "226,250"); // U+7CF6
assert.throws(() => {ms932Encoder.encode("\u7CF7")}, {name:"Error",message:"EncodingError U+7CF7"});
r = r && ([...ms932Encoder.encode("糸")].join(",") === "142,133"); // U+7CF8
assert.throws(() => {ms932Encoder.encode("\u7CF9")}, {name:"Error",message:"EncodingError U+7CF9"});
r = r && ([...ms932Encoder.encode("糺系")].join(",") === "226,251,140,110"); // U+7CFA
assert.throws(() => {ms932Encoder.encode("\u7CFC")}, {name:"Error",message:"EncodingError U+7CFC"});
assert.throws(() => {ms932Encoder.encode("\u7CFD")}, {name:"Error",message:"EncodingError U+7CFD"});
r = r && ([...ms932Encoder.encode("糾")].join(",") === "139,138"); // U+7CFE
assert.throws(() => {ms932Encoder.encode("\u7CFF")}, {name:"Error",message:"EncodingError U+7CFF"});
r = r && ([...ms932Encoder.encode("紀")].join(",") === "139,73"); // U+7D00
assert.throws(() => {ms932Encoder.encode("\u7D01")}, {name:"Error",message:"EncodingError U+7D01"});
r = r && ([...ms932Encoder.encode("紂")].join(",") === "227,64"); // U+7D02
assert.throws(() => {ms932Encoder.encode("\u7D03")}, {name:"Error",message:"EncodingError U+7D03"});
r = r && ([...ms932Encoder.encode("約紅紆")].join(",") === "150,241,141,103,226,252"); // U+7D04
assert.throws(() => {ms932Encoder.encode("\u7D07")}, {name:"Error",message:"EncodingError U+7D07"});
assert.throws(() => {ms932Encoder.encode("\u7D08")}, {name:"Error",message:"EncodingError U+7D08"});
assert.throws(() => {ms932Encoder.encode("\u7D09")}, {name:"Error",message:"EncodingError U+7D09"});
r = r && ([...ms932Encoder.encode("紊紋")].join(",") === "227,67,150,228"); // U+7D0A
assert.throws(() => {ms932Encoder.encode("\u7D0C")}, {name:"Error",message:"EncodingError U+7D0C"});
r = r && ([...ms932Encoder.encode("納")].join(",") === "148,91"); // U+7D0D
assert.throws(() => {ms932Encoder.encode("\u7D0E")}, {name:"Error",message:"EncodingError U+7D0E"});
assert.throws(() => {ms932Encoder.encode("\u7D0F")}, {name:"Error",message:"EncodingError U+7D0F"});
r = r && ([...ms932Encoder.encode("紐")].join(",") === "149,82"); // U+7D10
assert.throws(() => {ms932Encoder.encode("\u7D11")}, {name:"Error",message:"EncodingError U+7D11"});
assert.throws(() => {ms932Encoder.encode("\u7D12")}, {name:"Error",message:"EncodingError U+7D12"});
assert.throws(() => {ms932Encoder.encode("\u7D13")}, {name:"Error",message:"EncodingError U+7D13"});
r = r && ([...ms932Encoder.encode("純紕")].join(",") === "143,131,227,66"); // U+7D14
assert.throws(() => {ms932Encoder.encode("\u7D16")}, {name:"Error",message:"EncodingError U+7D16"});
r = r && ([...ms932Encoder.encode("紗紘紙級紛紜")].join(",") === "142,209,141,104,142,134,139,137,149,180,227,65"); // U+7D17
assert.throws(() => {ms932Encoder.encode("\u7D1D")}, {name:"Error",message:"EncodingError U+7D1D"});
assert.throws(() => {ms932Encoder.encode("\u7D1E")}, {name:"Error",message:"EncodingError U+7D1E"});
assert.throws(() => {ms932Encoder.encode("\u7D1F")}, {name:"Error",message:"EncodingError U+7D1F"});
r = r && ([...ms932Encoder.encode("素紡索")].join(",") === "145,102,150,97,141,245"); // U+7D20
assert.throws(() => {ms932Encoder.encode("\u7D23")}, {name:"Error",message:"EncodingError U+7D23"});
assert.throws(() => {ms932Encoder.encode("\u7D24")}, {name:"Error",message:"EncodingError U+7D24"});
assert.throws(() => {ms932Encoder.encode("\u7D25")}, {name:"Error",message:"EncodingError U+7D25"});
assert.throws(() => {ms932Encoder.encode("\u7D26")}, {name:"Error",message:"EncodingError U+7D26"});
assert.throws(() => {ms932Encoder.encode("\u7D27")}, {name:"Error",message:"EncodingError U+7D27"});
assert.throws(() => {ms932Encoder.encode("\u7D28")}, {name:"Error",message:"EncodingError U+7D28"});
assert.throws(() => {ms932Encoder.encode("\u7D29")}, {name:"Error",message:"EncodingError U+7D29"});
assert.throws(() => {ms932Encoder.encode("\u7D2A")}, {name:"Error",message:"EncodingError U+7D2A"});
r = r && ([...ms932Encoder.encode("紫紬")].join(",") === "142,135,146,219"); // U+7D2B
assert.throws(() => {ms932Encoder.encode("\u7D2D")}, {name:"Error",message:"EncodingError U+7D2D"});
r = r && ([...ms932Encoder.encode("紮累細")].join(",") === "227,70,151,221,141,215"); // U+7D2E
assert.throws(() => {ms932Encoder.encode("\u7D31")}, {name:"Error",message:"EncodingError U+7D31"});
r = r && ([...ms932Encoder.encode("紲紳")].join(",") === "227,71,144,97"); // U+7D32
assert.throws(() => {ms932Encoder.encode("\u7D34")}, {name:"Error",message:"EncodingError U+7D34"});
r = r && ([...ms932Encoder.encode("紵")].join(",") === "227,73"); // U+7D35
assert.throws(() => {ms932Encoder.encode("\u7D36")}, {name:"Error",message:"EncodingError U+7D36"});
assert.throws(() => {ms932Encoder.encode("\u7D37")}, {name:"Error",message:"EncodingError U+7D37"});
assert.throws(() => {ms932Encoder.encode("\u7D38")}, {name:"Error",message:"EncodingError U+7D38"});
r = r && ([...ms932Encoder.encode("紹紺")].join(",") === "143,208,141,174"); // U+7D39
assert.throws(() => {ms932Encoder.encode("\u7D3B")}, {name:"Error",message:"EncodingError U+7D3B"});
assert.throws(() => {ms932Encoder.encode("\u7D3C")}, {name:"Error",message:"EncodingError U+7D3C"});
assert.throws(() => {ms932Encoder.encode("\u7D3D")}, {name:"Error",message:"EncodingError U+7D3D"});
assert.throws(() => {ms932Encoder.encode("\u7D3E")}, {name:"Error",message:"EncodingError U+7D3E"});
r = r && ([...ms932Encoder.encode("紿")].join(",") === "227,72"); // U+7D3F
assert.throws(() => {ms932Encoder.encode("\u7D40")}, {name:"Error",message:"EncodingError U+7D40"});
assert.throws(() => {ms932Encoder.encode("\u7D41")}, {name:"Error",message:"EncodingError U+7D41"});
r = r && ([...ms932Encoder.encode("終絃組絅絆")].join(",") === "143,73,140,188,145,103,227,68,227,74"); // U+7D42
assert.throws(() => {ms932Encoder.encode("\u7D47")}, {name:"Error",message:"EncodingError U+7D47"});
r = r && ([...ms932Encoder.encode("絈")].join(",") === "251,138"); // U+7D48
assert.throws(() => {ms932Encoder.encode("\u7D49")}, {name:"Error",message:"EncodingError U+7D49"});
assert.throws(() => {ms932Encoder.encode("\u7D4A")}, {name:"Error",message:"EncodingError U+7D4A"});
r = r && ([...ms932Encoder.encode("絋経")].join(",") === "227,69,140,111"); // U+7D4B
assert.throws(() => {ms932Encoder.encode("\u7D4D")}, {name:"Error",message:"EncodingError U+7D4D"});
r = r && ([...ms932Encoder.encode("絎絏結")].join(",") === "227,77,227,81,140,139"); // U+7D4E
assert.throws(() => {ms932Encoder.encode("\u7D51")}, {name:"Error",message:"EncodingError U+7D51"});
assert.throws(() => {ms932Encoder.encode("\u7D52")}, {name:"Error",message:"EncodingError U+7D52"});
assert.throws(() => {ms932Encoder.encode("\u7D53")}, {name:"Error",message:"EncodingError U+7D53"});
assert.throws(() => {ms932Encoder.encode("\u7D54")}, {name:"Error",message:"EncodingError U+7D54"});
assert.throws(() => {ms932Encoder.encode("\u7D55")}, {name:"Error",message:"EncodingError U+7D55"});
r = r && ([...ms932Encoder.encode("絖")].join(",") === "227,76"); // U+7D56
assert.throws(() => {ms932Encoder.encode("\u7D57")}, {name:"Error",message:"EncodingError U+7D57"});
assert.throws(() => {ms932Encoder.encode("\u7D58")}, {name:"Error",message:"EncodingError U+7D58"});
assert.throws(() => {ms932Encoder.encode("\u7D59")}, {name:"Error",message:"EncodingError U+7D59"});
assert.throws(() => {ms932Encoder.encode("\u7D5A")}, {name:"Error",message:"EncodingError U+7D5A"});
r = r && ([...ms932Encoder.encode("絛絜")].join(",") === "227,85,251,139"); // U+7D5B
assert.throws(() => {ms932Encoder.encode("\u7D5D")}, {name:"Error",message:"EncodingError U+7D5D"});
r = r && ([...ms932Encoder.encode("絞")].join(",") === "141,105"); // U+7D5E
assert.throws(() => {ms932Encoder.encode("\u7D5F")}, {name:"Error",message:"EncodingError U+7D5F"});
assert.throws(() => {ms932Encoder.encode("\u7D60")}, {name:"Error",message:"EncodingError U+7D60"});
r = r && ([...ms932Encoder.encode("絡絢絣")].join(",") === "151,141,136,186,227,82"); // U+7D61
assert.throws(() => {ms932Encoder.encode("\u7D64")}, {name:"Error",message:"EncodingError U+7D64"});
assert.throws(() => {ms932Encoder.encode("\u7D65")}, {name:"Error",message:"EncodingError U+7D65"});
r = r && ([...ms932Encoder.encode("給")].join(",") === "139,139"); // U+7D66
assert.throws(() => {ms932Encoder.encode("\u7D67")}, {name:"Error",message:"EncodingError U+7D67"});
r = r && ([...ms932Encoder.encode("絨")].join(",") === "227,79"); // U+7D68
assert.throws(() => {ms932Encoder.encode("\u7D69")}, {name:"Error",message:"EncodingError U+7D69"});
assert.throws(() => {ms932Encoder.encode("\u7D6A")}, {name:"Error",message:"EncodingError U+7D6A"});
assert.throws(() => {ms932Encoder.encode("\u7D6B")}, {name:"Error",message:"EncodingError U+7D6B"});
assert.throws(() => {ms932Encoder.encode("\u7D6C")}, {name:"Error",message:"EncodingError U+7D6C"});
assert.throws(() => {ms932Encoder.encode("\u7D6D")}, {name:"Error",message:"EncodingError U+7D6D"});
r = r && ([...ms932Encoder.encode("絮")].join(",") === "227,80"); // U+7D6E
assert.throws(() => {ms932Encoder.encode("\u7D6F")}, {name:"Error",message:"EncodingError U+7D6F"});
assert.throws(() => {ms932Encoder.encode("\u7D70")}, {name:"Error",message:"EncodingError U+7D70"});
r = r && ([...ms932Encoder.encode("統絲絳")].join(",") === "147,157,227,78,227,75"); // U+7D71
assert.throws(() => {ms932Encoder.encode("\u7D74")}, {name:"Error",message:"EncodingError U+7D74"});
r = r && ([...ms932Encoder.encode("絵絶")].join(",") === "138,71,144,226"); // U+7D75
assert.throws(() => {ms932Encoder.encode("\u7D77")}, {name:"Error",message:"EncodingError U+7D77"});
assert.throws(() => {ms932Encoder.encode("\u7D78")}, {name:"Error",message:"EncodingError U+7D78"});
r = r && ([...ms932Encoder.encode("絹")].join(",") === "140,166"); // U+7D79
assert.throws(() => {ms932Encoder.encode("\u7D7A")}, {name:"Error",message:"EncodingError U+7D7A"});
assert.throws(() => {ms932Encoder.encode("\u7D7B")}, {name:"Error",message:"EncodingError U+7D7B"});
assert.throws(() => {ms932Encoder.encode("\u7D7C")}, {name:"Error",message:"EncodingError U+7D7C"});
r = r && ([...ms932Encoder.encode("絽")].join(",") === "227,87"); // U+7D7D
assert.throws(() => {ms932Encoder.encode("\u7D7E")}, {name:"Error",message:"EncodingError U+7D7E"});
assert.throws(() => {ms932Encoder.encode("\u7D7F")}, {name:"Error",message:"EncodingError U+7D7F"});
assert.throws(() => {ms932Encoder.encode("\u7D80")}, {name:"Error",message:"EncodingError U+7D80"});
assert.throws(() => {ms932Encoder.encode("\u7D81")}, {name:"Error",message:"EncodingError U+7D81"});
assert.throws(() => {ms932Encoder.encode("\u7D82")}, {name:"Error",message:"EncodingError U+7D82"});
assert.throws(() => {ms932Encoder.encode("\u7D83")}, {name:"Error",message:"EncodingError U+7D83"});
assert.throws(() => {ms932Encoder.encode("\u7D84")}, {name:"Error",message:"EncodingError U+7D84"});
assert.throws(() => {ms932Encoder.encode("\u7D85")}, {name:"Error",message:"EncodingError U+7D85"});
assert.throws(() => {ms932Encoder.encode("\u7D86")}, {name:"Error",message:"EncodingError U+7D86"});
assert.throws(() => {ms932Encoder.encode("\u7D87")}, {name:"Error",message:"EncodingError U+7D87"});
assert.throws(() => {ms932Encoder.encode("\u7D88")}, {name:"Error",message:"EncodingError U+7D88"});
r = r && ([...ms932Encoder.encode("綉")].join(",") === "227,84"); // U+7D89
assert.throws(() => {ms932Encoder.encode("\u7D8A")}, {name:"Error",message:"EncodingError U+7D8A"});
assert.throws(() => {ms932Encoder.encode("\u7D8B")}, {name:"Error",message:"EncodingError U+7D8B"});
assert.throws(() => {ms932Encoder.encode("\u7D8C")}, {name:"Error",message:"EncodingError U+7D8C"});
assert.throws(() => {ms932Encoder.encode("\u7D8D")}, {name:"Error",message:"EncodingError U+7D8D"});
assert.throws(() => {ms932Encoder.encode("\u7D8E")}, {name:"Error",message:"EncodingError U+7D8E"});
r = r && ([...ms932Encoder.encode("綏")].join(",") === "227,86"); // U+7D8F
assert.throws(() => {ms932Encoder.encode("\u7D90")}, {name:"Error",message:"EncodingError U+7D90"});
assert.throws(() => {ms932Encoder.encode("\u7D91")}, {name:"Error",message:"EncodingError U+7D91"});
assert.throws(() => {ms932Encoder.encode("\u7D92")}, {name:"Error",message:"EncodingError U+7D92"});
r = r && ([...ms932Encoder.encode("經")].join(",") === "227,83"); // U+7D93
assert.throws(() => {ms932Encoder.encode("\u7D94")}, {name:"Error",message:"EncodingError U+7D94"});
assert.throws(() => {ms932Encoder.encode("\u7D95")}, {name:"Error",message:"EncodingError U+7D95"});
assert.throws(() => {ms932Encoder.encode("\u7D96")}, {name:"Error",message:"EncodingError U+7D96"});
assert.throws(() => {ms932Encoder.encode("\u7D97")}, {name:"Error",message:"EncodingError U+7D97"});
assert.throws(() => {ms932Encoder.encode("\u7D98")}, {name:"Error",message:"EncodingError U+7D98"});
r = r && ([...ms932Encoder.encode("継続綛綜")].join(",") === "140,112,145,177,227,88,145,142"); // U+7D99
assert.throws(() => {ms932Encoder.encode("\u7D9D")}, {name:"Error",message:"EncodingError U+7D9D"});
assert.throws(() => {ms932Encoder.encode("\u7D9E")}, {name:"Error",message:"EncodingError U+7D9E"});
r = r && ([...ms932Encoder.encode("綟綠")].join(",") === "227,101,251,141"); // U+7D9F
assert.throws(() => {ms932Encoder.encode("\u7DA1")}, {name:"Error",message:"EncodingError U+7DA1"});
r = r && ([...ms932Encoder.encode("綢綣")].join(",") === "227,97,227,91"); // U+7DA2
assert.throws(() => {ms932Encoder.encode("\u7DA4")}, {name:"Error",message:"EncodingError U+7DA4"});
assert.throws(() => {ms932Encoder.encode("\u7DA5")}, {name:"Error",message:"EncodingError U+7DA5"});
assert.throws(() => {ms932Encoder.encode("\u7DA6")}, {name:"Error",message:"EncodingError U+7DA6"});
assert.throws(() => {ms932Encoder.encode("\u7DA7")}, {name:"Error",message:"EncodingError U+7DA7"});
assert.throws(() => {ms932Encoder.encode("\u7DA8")}, {name:"Error",message:"EncodingError U+7DA8"});
assert.throws(() => {ms932Encoder.encode("\u7DA9")}, {name:"Error",message:"EncodingError U+7DA9"});
assert.throws(() => {ms932Encoder.encode("\u7DAA")}, {name:"Error",message:"EncodingError U+7DAA"});
r = r && ([...ms932Encoder.encode("綫綬維綮綯綰綱網")].join(",") === "227,95,142,248,136,219,227,90,227,98,227,102,141,106,150,212"); // U+7DAB
assert.throws(() => {ms932Encoder.encode("\u7DB3")}, {name:"Error",message:"EncodingError U+7DB3"});
r = r && ([...ms932Encoder.encode("綴綵")].join(",") === "146,212,227,92"); // U+7DB4
assert.throws(() => {ms932Encoder.encode("\u7DB6")}, {name:"Error",message:"EncodingError U+7DB6"});
r = r && ([...ms932Encoder.encode("綷綸")].join(",") === "251,140,227,100"); // U+7DB7
assert.throws(() => {ms932Encoder.encode("\u7DB9")}, {name:"Error",message:"EncodingError U+7DB9"});
r = r && ([...ms932Encoder.encode("綺綻")].join(",") === "227,89,146,93"); // U+7DBA
assert.throws(() => {ms932Encoder.encode("\u7DBC")}, {name:"Error",message:"EncodingError U+7DBC"});
r = r && ([...ms932Encoder.encode("綽綾綿")].join(",") === "227,94,136,187,150,200"); // U+7DBD
assert.throws(() => {ms932Encoder.encode("\u7DC0")}, {name:"Error",message:"EncodingError U+7DC0"});
assert.throws(() => {ms932Encoder.encode("\u7DC1")}, {name:"Error",message:"EncodingError U+7DC1"});
assert.throws(() => {ms932Encoder.encode("\u7DC2")}, {name:"Error",message:"EncodingError U+7DC2"});
assert.throws(() => {ms932Encoder.encode("\u7DC3")}, {name:"Error",message:"EncodingError U+7DC3"});
assert.throws(() => {ms932Encoder.encode("\u7DC4")}, {name:"Error",message:"EncodingError U+7DC4"});
assert.throws(() => {ms932Encoder.encode("\u7DC5")}, {name:"Error",message:"EncodingError U+7DC5"});
assert.throws(() => {ms932Encoder.encode("\u7DC6")}, {name:"Error",message:"EncodingError U+7DC6"});
r = r && ([...ms932Encoder.encode("緇")].join(",") === "227,93"); // U+7DC7
assert.throws(() => {ms932Encoder.encode("\u7DC8")}, {name:"Error",message:"EncodingError U+7DC8"});
assert.throws(() => {ms932Encoder.encode("\u7DC9")}, {name:"Error",message:"EncodingError U+7DC9"});
r = r && ([...ms932Encoder.encode("緊緋")].join(",") === "139,217,148,234"); // U+7DCA
assert.throws(() => {ms932Encoder.encode("\u7DCC")}, {name:"Error",message:"EncodingError U+7DCC"});
assert.throws(() => {ms932Encoder.encode("\u7DCD")}, {name:"Error",message:"EncodingError U+7DCD"});
assert.throws(() => {ms932Encoder.encode("\u7DCE")}, {name:"Error",message:"EncodingError U+7DCE"});
r = r && ([...ms932Encoder.encode("総")].join(",") === "145,141"); // U+7DCF
assert.throws(() => {ms932Encoder.encode("\u7DD0")}, {name:"Error",message:"EncodingError U+7DD0"});
r = r && ([...ms932Encoder.encode("緑緒")].join(",") === "151,206,143,143"); // U+7DD1
assert.throws(() => {ms932Encoder.encode("\u7DD3")}, {name:"Error",message:"EncodingError U+7DD3"});
assert.throws(() => {ms932Encoder.encode("\u7DD4")}, {name:"Error",message:"EncodingError U+7DD4"});
r = r && ([...ms932Encoder.encode("緕緖")].join(",") === "227,142,251,142"); // U+7DD5
assert.throws(() => {ms932Encoder.encode("\u7DD7")}, {name:"Error",message:"EncodingError U+7DD7"});
r = r && ([...ms932Encoder.encode("緘")].join(",") === "227,103"); // U+7DD8
assert.throws(() => {ms932Encoder.encode("\u7DD9")}, {name:"Error",message:"EncodingError U+7DD9"});
r = r && ([...ms932Encoder.encode("線")].join(",") === "144,252"); // U+7DDA
assert.throws(() => {ms932Encoder.encode("\u7DDB")}, {name:"Error",message:"EncodingError U+7DDB"});
r = r && ([...ms932Encoder.encode("緜緝緞")].join(",") === "227,99,227,104,227,106"); // U+7DDC
assert.throws(() => {ms932Encoder.encode("\u7DDF")}, {name:"Error",message:"EncodingError U+7DDF"});
r = r && ([...ms932Encoder.encode("締緡")].join(",") === "146,247,227,109"); // U+7DE0
assert.throws(() => {ms932Encoder.encode("\u7DE2")}, {name:"Error",message:"EncodingError U+7DE2"});
assert.throws(() => {ms932Encoder.encode("\u7DE3")}, {name:"Error",message:"EncodingError U+7DE3"});
r = r && ([...ms932Encoder.encode("緤")].join(",") === "227,105"); // U+7DE4
assert.throws(() => {ms932Encoder.encode("\u7DE5")}, {name:"Error",message:"EncodingError U+7DE5"});
assert.throws(() => {ms932Encoder.encode("\u7DE6")}, {name:"Error",message:"EncodingError U+7DE6"});
assert.throws(() => {ms932Encoder.encode("\u7DE7")}, {name:"Error",message:"EncodingError U+7DE7"});
r = r && ([...ms932Encoder.encode("編緩")].join(",") === "149,210,138,201"); // U+7DE8
assert.throws(() => {ms932Encoder.encode("\u7DEA")}, {name:"Error",message:"EncodingError U+7DEA"});
assert.throws(() => {ms932Encoder.encode("\u7DEB")}, {name:"Error",message:"EncodingError U+7DEB"});
r = r && ([...ms932Encoder.encode("緬")].join(",") === "150,201"); // U+7DEC
assert.throws(() => {ms932Encoder.encode("\u7DED")}, {name:"Error",message:"EncodingError U+7DED"});
assert.throws(() => {ms932Encoder.encode("\u7DEE")}, {name:"Error",message:"EncodingError U+7DEE"});
r = r && ([...ms932Encoder.encode("緯")].join(",") === "136,220"); // U+7DEF
assert.throws(() => {ms932Encoder.encode("\u7DF0")}, {name:"Error",message:"EncodingError U+7DF0"});
assert.throws(() => {ms932Encoder.encode("\u7DF1")}, {name:"Error",message:"EncodingError U+7DF1"});
r = r && ([...ms932Encoder.encode("緲")].join(",") === "227,108"); // U+7DF2
assert.throws(() => {ms932Encoder.encode("\u7DF3")}, {name:"Error",message:"EncodingError U+7DF3"});
r = r && ([...ms932Encoder.encode("練")].join(",") === "151,251"); // U+7DF4
assert.throws(() => {ms932Encoder.encode("\u7DF5")}, {name:"Error",message:"EncodingError U+7DF5"});
assert.throws(() => {ms932Encoder.encode("\u7DF6")}, {name:"Error",message:"EncodingError U+7DF6"});
assert.throws(() => {ms932Encoder.encode("\u7DF7")}, {name:"Error",message:"EncodingError U+7DF7"});
assert.throws(() => {ms932Encoder.encode("\u7DF8")}, {name:"Error",message:"EncodingError U+7DF8"});
assert.throws(() => {ms932Encoder.encode("\u7DF9")}, {name:"Error",message:"EncodingError U+7DF9"});
assert.throws(() => {ms932Encoder.encode("\u7DFA")}, {name:"Error",message:"EncodingError U+7DFA"});
r = r && ([...ms932Encoder.encode("緻")].join(",") === "227,107"); // U+7DFB
assert.throws(() => {ms932Encoder.encode("\u7DFC")}, {name:"Error",message:"EncodingError U+7DFC"});
assert.throws(() => {ms932Encoder.encode("\u7DFD")}, {name:"Error",message:"EncodingError U+7DFD"});
assert.throws(() => {ms932Encoder.encode("\u7DFE")}, {name:"Error",message:"EncodingError U+7DFE"});
assert.throws(() => {ms932Encoder.encode("\u7DFF")}, {name:"Error",message:"EncodingError U+7DFF"});
assert.throws(() => {ms932Encoder.encode("\u7E00")}, {name:"Error",message:"EncodingError U+7E00"});
r = r && ([...ms932Encoder.encode("縁")].join(",") === "137,143"); // U+7E01
assert.throws(() => {ms932Encoder.encode("\u7E02")}, {name:"Error",message:"EncodingError U+7E02"});
assert.throws(() => {ms932Encoder.encode("\u7E03")}, {name:"Error",message:"EncodingError U+7E03"});
r = r && ([...ms932Encoder.encode("縄縅")].join(",") === "147,234,227,110"); // U+7E04
assert.throws(() => {ms932Encoder.encode("\u7E06")}, {name:"Error",message:"EncodingError U+7E06"});
assert.throws(() => {ms932Encoder.encode("\u7E07")}, {name:"Error",message:"EncodingError U+7E07"});
assert.throws(() => {ms932Encoder.encode("\u7E08")}, {name:"Error",message:"EncodingError U+7E08"});
r = r && ([...ms932Encoder.encode("縉縊縋")].join(",") === "227,117,227,111,227,118"); // U+7E09
assert.throws(() => {ms932Encoder.encode("\u7E0C")}, {name:"Error",message:"EncodingError U+7E0C"});
assert.throws(() => {ms932Encoder.encode("\u7E0D")}, {name:"Error",message:"EncodingError U+7E0D"});
assert.throws(() => {ms932Encoder.encode("\u7E0E")}, {name:"Error",message:"EncodingError U+7E0E"});
assert.throws(() => {ms932Encoder.encode("\u7E0F")}, {name:"Error",message:"EncodingError U+7E0F"});
assert.throws(() => {ms932Encoder.encode("\u7E10")}, {name:"Error",message:"EncodingError U+7E10"});
assert.throws(() => {ms932Encoder.encode("\u7E11")}, {name:"Error",message:"EncodingError U+7E11"});
r = r && ([...ms932Encoder.encode("縒")].join(",") === "227,114"); // U+7E12
assert.throws(() => {ms932Encoder.encode("\u7E13")}, {name:"Error",message:"EncodingError U+7E13"});
assert.throws(() => {ms932Encoder.encode("\u7E14")}, {name:"Error",message:"EncodingError U+7E14"});
assert.throws(() => {ms932Encoder.encode("\u7E15")}, {name:"Error",message:"EncodingError U+7E15"});
assert.throws(() => {ms932Encoder.encode("\u7E16")}, {name:"Error",message:"EncodingError U+7E16"});
assert.throws(() => {ms932Encoder.encode("\u7E17")}, {name:"Error",message:"EncodingError U+7E17"});
assert.throws(() => {ms932Encoder.encode("\u7E18")}, {name:"Error",message:"EncodingError U+7E18"});
assert.throws(() => {ms932Encoder.encode("\u7E19")}, {name:"Error",message:"EncodingError U+7E19"});
assert.throws(() => {ms932Encoder.encode("\u7E1A")}, {name:"Error",message:"EncodingError U+7E1A"});
r = r && ([...ms932Encoder.encode("縛")].join(",") === "148,155"); // U+7E1B
assert.throws(() => {ms932Encoder.encode("\u7E1C")}, {name:"Error",message:"EncodingError U+7E1C"});
assert.throws(() => {ms932Encoder.encode("\u7E1D")}, {name:"Error",message:"EncodingError U+7E1D"});
r = r && ([...ms932Encoder.encode("縞縟")].join(",") === "142,200,227,116"); // U+7E1E
assert.throws(() => {ms932Encoder.encode("\u7E20")}, {name:"Error",message:"EncodingError U+7E20"});
r = r && ([...ms932Encoder.encode("縡縢縣")].join(",") === "227,113,227,119,227,112"); // U+7E21
assert.throws(() => {ms932Encoder.encode("\u7E24")}, {name:"Error",message:"EncodingError U+7E24"});
assert.throws(() => {ms932Encoder.encode("\u7E25")}, {name:"Error",message:"EncodingError U+7E25"});
r = r && ([...ms932Encoder.encode("縦")].join(",") === "143,99"); // U+7E26
assert.throws(() => {ms932Encoder.encode("\u7E27")}, {name:"Error",message:"EncodingError U+7E27"});
assert.throws(() => {ms932Encoder.encode("\u7E28")}, {name:"Error",message:"EncodingError U+7E28"});
assert.throws(() => {ms932Encoder.encode("\u7E29")}, {name:"Error",message:"EncodingError U+7E29"});
assert.throws(() => {ms932Encoder.encode("\u7E2A")}, {name:"Error",message:"EncodingError U+7E2A"});
r = r && ([...ms932Encoder.encode("縫")].join(",") === "150,68"); // U+7E2B
assert.throws(() => {ms932Encoder.encode("\u7E2C")}, {name:"Error",message:"EncodingError U+7E2C"});
assert.throws(() => {ms932Encoder.encode("\u7E2D")}, {name:"Error",message:"EncodingError U+7E2D"});
r = r && ([...ms932Encoder.encode("縮")].join(",") === "143,107"); // U+7E2E
assert.throws(() => {ms932Encoder.encode("\u7E2F")}, {name:"Error",message:"EncodingError U+7E2F"});
assert.throws(() => {ms932Encoder.encode("\u7E30")}, {name:"Error",message:"EncodingError U+7E30"});
r = r && ([...ms932Encoder.encode("縱縲")].join(",") === "227,115,227,128"); // U+7E31
assert.throws(() => {ms932Encoder.encode("\u7E33")}, {name:"Error",message:"EncodingError U+7E33"});
assert.throws(() => {ms932Encoder.encode("\u7E34")}, {name:"Error",message:"EncodingError U+7E34"});
r = r && ([...ms932Encoder.encode("縵")].join(",") === "227,123"); // U+7E35
assert.throws(() => {ms932Encoder.encode("\u7E36")}, {name:"Error",message:"EncodingError U+7E36"});
r = r && ([...ms932Encoder.encode("縷")].join(",") === "227,126"); // U+7E37
assert.throws(() => {ms932Encoder.encode("\u7E38")}, {name:"Error",message:"EncodingError U+7E38"});
r = r && ([...ms932Encoder.encode("縹縺縻")].join(",") === "227,124,227,129,227,122"); // U+7E39
assert.throws(() => {ms932Encoder.encode("\u7E3C")}, {name:"Error",message:"EncodingError U+7E3C"});
r = r && ([...ms932Encoder.encode("總績")].join(",") === "227,96,144,209"); // U+7E3D
assert.throws(() => {ms932Encoder.encode("\u7E3F")}, {name:"Error",message:"EncodingError U+7E3F"});
assert.throws(() => {ms932Encoder.encode("\u7E40")}, {name:"Error",message:"EncodingError U+7E40"});
r = r && ([...ms932Encoder.encode("繁")].join(",") === "148,201"); // U+7E41
assert.throws(() => {ms932Encoder.encode("\u7E42")}, {name:"Error",message:"EncodingError U+7E42"});
r = r && ([...ms932Encoder.encode("繃")].join(",") === "227,125"); // U+7E43
assert.throws(() => {ms932Encoder.encode("\u7E44")}, {name:"Error",message:"EncodingError U+7E44"});
assert.throws(() => {ms932Encoder.encode("\u7E45")}, {name:"Error",message:"EncodingError U+7E45"});
r = r && ([...ms932Encoder.encode("繆")].join(",") === "227,120"); // U+7E46
assert.throws(() => {ms932Encoder.encode("\u7E47")}, {name:"Error",message:"EncodingError U+7E47"});
assert.throws(() => {ms932Encoder.encode("\u7E48")}, {name:"Error",message:"EncodingError U+7E48"});
assert.throws(() => {ms932Encoder.encode("\u7E49")}, {name:"Error",message:"EncodingError U+7E49"});
r = r && ([...ms932Encoder.encode("繊繋")].join(",") === "145,64,140,113"); // U+7E4A
assert.throws(() => {ms932Encoder.encode("\u7E4C")}, {name:"Error",message:"EncodingError U+7E4C"});
r = r && ([...ms932Encoder.encode("繍")].join(",") === "143,74"); // U+7E4D
assert.throws(() => {ms932Encoder.encode("\u7E4E")}, {name:"Error",message:"EncodingError U+7E4E"});
assert.throws(() => {ms932Encoder.encode("\u7E4F")}, {name:"Error",message:"EncodingError U+7E4F"});
assert.throws(() => {ms932Encoder.encode("\u7E50")}, {name:"Error",message:"EncodingError U+7E50"});
assert.throws(() => {ms932Encoder.encode("\u7E51")}, {name:"Error",message:"EncodingError U+7E51"});
r = r && ([...ms932Encoder.encode("繒")].join(",") === "251,143"); // U+7E52
assert.throws(() => {ms932Encoder.encode("\u7E53")}, {name:"Error",message:"EncodingError U+7E53"});
r = r && ([...ms932Encoder.encode("織繕繖")].join(",") === "144,68,145,85,227,132"); // U+7E54
assert.throws(() => {ms932Encoder.encode("\u7E57")}, {name:"Error",message:"EncodingError U+7E57"});
assert.throws(() => {ms932Encoder.encode("\u7E58")}, {name:"Error",message:"EncodingError U+7E58"});
r = r && ([...ms932Encoder.encode("繙繚")].join(",") === "227,134,227,135"); // U+7E59
assert.throws(() => {ms932Encoder.encode("\u7E5B")}, {name:"Error",message:"EncodingError U+7E5B"});
assert.throws(() => {ms932Encoder.encode("\u7E5C")}, {name:"Error",message:"EncodingError U+7E5C"});
r = r && ([...ms932Encoder.encode("繝繞")].join(",") === "227,131,227,133"); // U+7E5D
assert.throws(() => {ms932Encoder.encode("\u7E5F")}, {name:"Error",message:"EncodingError U+7E5F"});
assert.throws(() => {ms932Encoder.encode("\u7E60")}, {name:"Error",message:"EncodingError U+7E60"});
assert.throws(() => {ms932Encoder.encode("\u7E61")}, {name:"Error",message:"EncodingError U+7E61"});
assert.throws(() => {ms932Encoder.encode("\u7E62")}, {name:"Error",message:"EncodingError U+7E62"});
assert.throws(() => {ms932Encoder.encode("\u7E63")}, {name:"Error",message:"EncodingError U+7E63"});
assert.throws(() => {ms932Encoder.encode("\u7E64")}, {name:"Error",message:"EncodingError U+7E64"});
assert.throws(() => {ms932Encoder.encode("\u7E65")}, {name:"Error",message:"EncodingError U+7E65"});
r = r && ([...ms932Encoder.encode("繦繧")].join(",") === "227,121,227,130"); // U+7E66
assert.throws(() => {ms932Encoder.encode("\u7E68")}, {name:"Error",message:"EncodingError U+7E68"});
r = r && ([...ms932Encoder.encode("繩繪")].join(",") === "227,138,227,137"); // U+7E69
assert.throws(() => {ms932Encoder.encode("\u7E6B")}, {name:"Error",message:"EncodingError U+7E6B"});
assert.throws(() => {ms932Encoder.encode("\u7E6C")}, {name:"Error",message:"EncodingError U+7E6C"});
r = r && ([...ms932Encoder.encode("繭")].join(",") === "150,154"); // U+7E6D
assert.throws(() => {ms932Encoder.encode("\u7E6E")}, {name:"Error",message:"EncodingError U+7E6E"});
assert.throws(() => {ms932Encoder.encode("\u7E6F")}, {name:"Error",message:"EncodingError U+7E6F"});
r = r && ([...ms932Encoder.encode("繰")].join(",") === "140,74"); // U+7E70
assert.throws(() => {ms932Encoder.encode("\u7E71")}, {name:"Error",message:"EncodingError U+7E71"});
assert.throws(() => {ms932Encoder.encode("\u7E72")}, {name:"Error",message:"EncodingError U+7E72"});
assert.throws(() => {ms932Encoder.encode("\u7E73")}, {name:"Error",message:"EncodingError U+7E73"});
assert.throws(() => {ms932Encoder.encode("\u7E74")}, {name:"Error",message:"EncodingError U+7E74"});
assert.throws(() => {ms932Encoder.encode("\u7E75")}, {name:"Error",message:"EncodingError U+7E75"});
assert.throws(() => {ms932Encoder.encode("\u7E76")}, {name:"Error",message:"EncodingError U+7E76"});
assert.throws(() => {ms932Encoder.encode("\u7E77")}, {name:"Error",message:"EncodingError U+7E77"});
assert.throws(() => {ms932Encoder.encode("\u7E78")}, {name:"Error",message:"EncodingError U+7E78"});
r = r && ([...ms932Encoder.encode("繹")].join(",") === "227,136"); // U+7E79
assert.throws(() => {ms932Encoder.encode("\u7E7A")}, {name:"Error",message:"EncodingError U+7E7A"});
r = r && ([...ms932Encoder.encode("繻繼繽")].join(",") === "227,140,227,139,227,143"); // U+7E7B
assert.throws(() => {ms932Encoder.encode("\u7E7E")}, {name:"Error",message:"EncodingError U+7E7E"});
r = r && ([...ms932Encoder.encode("繿")].join(",") === "227,145"); // U+7E7F
assert.throws(() => {ms932Encoder.encode("\u7E80")}, {name:"Error",message:"EncodingError U+7E80"});
assert.throws(() => {ms932Encoder.encode("\u7E81")}, {name:"Error",message:"EncodingError U+7E81"});
r = r && ([...ms932Encoder.encode("纂纃")].join(",") === "142,91,227,141"); // U+7E82
assert.throws(() => {ms932Encoder.encode("\u7E84")}, {name:"Error",message:"EncodingError U+7E84"});
assert.throws(() => {ms932Encoder.encode("\u7E85")}, {name:"Error",message:"EncodingError U+7E85"});
assert.throws(() => {ms932Encoder.encode("\u7E86")}, {name:"Error",message:"EncodingError U+7E86"});
assert.throws(() => {ms932Encoder.encode("\u7E87")}, {name:"Error",message:"EncodingError U+7E87"});
r = r && ([...ms932Encoder.encode("纈纉纊")].join(",") === "227,146,227,147,250,92"); // U+7E88
assert.throws(() => {ms932Encoder.encode("\u7E8B")}, {name:"Error",message:"EncodingError U+7E8B"});
r = r && ([...ms932Encoder.encode("續")].join(",") === "227,148"); // U+7E8C
assert.throws(() => {ms932Encoder.encode("\u7E8D")}, {name:"Error",message:"EncodingError U+7E8D"});
r = r && ([...ms932Encoder.encode("纎纏纐")].join(",") === "227,154,147,90,227,150"); // U+7E8E
assert.throws(() => {ms932Encoder.encode("\u7E91")}, {name:"Error",message:"EncodingError U+7E91"});
r = r && ([...ms932Encoder.encode("纒纓纔")].join(",") === "227,149,227,151,227,152"); // U+7E92
assert.throws(() => {ms932Encoder.encode("\u7E95")}, {name:"Error",message:"EncodingError U+7E95"});
r = r && ([...ms932Encoder.encode("纖")].join(",") === "227,153"); // U+7E96
assert.throws(() => {ms932Encoder.encode("\u7E97")}, {name:"Error",message:"EncodingError U+7E97"});
assert.throws(() => {ms932Encoder.encode("\u7E98")}, {name:"Error",message:"EncodingError U+7E98"});
assert.throws(() => {ms932Encoder.encode("\u7E99")}, {name:"Error",message:"EncodingError U+7E99"});
assert.throws(() => {ms932Encoder.encode("\u7E9A")}, {name:"Error",message:"EncodingError U+7E9A"});
r = r && ([...ms932Encoder.encode("纛纜")].join(",") === "227,155,227,156"); // U+7E9B
assert.throws(() => {ms932Encoder.encode("\u7E9D")}, {name:"Error",message:"EncodingError U+7E9D"});
assert.throws(() => {ms932Encoder.encode("\u7E9E")}, {name:"Error",message:"EncodingError U+7E9E"});
assert.throws(() => {ms932Encoder.encode("\u7E9F")}, {name:"Error",message:"EncodingError U+7E9F"});
assert.throws(() => {ms932Encoder.encode("\u7EA0")}, {name:"Error",message:"EncodingError U+7EA0"});
assert.throws(() => {ms932Encoder.encode("\u7EA1")}, {name:"Error",message:"EncodingError U+7EA1"});
assert.throws(() => {ms932Encoder.encode("\u7EA2")}, {name:"Error",message:"EncodingError U+7EA2"});
assert.throws(() => {ms932Encoder.encode("\u7EA3")}, {name:"Error",message:"EncodingError U+7EA3"});
assert.throws(() => {ms932Encoder.encode("\u7EA4")}, {name:"Error",message:"EncodingError U+7EA4"});
assert.throws(() => {ms932Encoder.encode("\u7EA5")}, {name:"Error",message:"EncodingError U+7EA5"});
assert.throws(() => {ms932Encoder.encode("\u7EA6")}, {name:"Error",message:"EncodingError U+7EA6"});
assert.throws(() => {ms932Encoder.encode("\u7EA7")}, {name:"Error",message:"EncodingError U+7EA7"});
assert.throws(() => {ms932Encoder.encode("\u7EA8")}, {name:"Error",message:"EncodingError U+7EA8"});
assert.throws(() => {ms932Encoder.encode("\u7EA9")}, {name:"Error",message:"EncodingError U+7EA9"});
assert.throws(() => {ms932Encoder.encode("\u7EAA")}, {name:"Error",message:"EncodingError U+7EAA"});
assert.throws(() => {ms932Encoder.encode("\u7EAB")}, {name:"Error",message:"EncodingError U+7EAB"});
assert.throws(() => {ms932Encoder.encode("\u7EAC")}, {name:"Error",message:"EncodingError U+7EAC"});
assert.throws(() => {ms932Encoder.encode("\u7EAD")}, {name:"Error",message:"EncodingError U+7EAD"});
assert.throws(() => {ms932Encoder.encode("\u7EAE")}, {name:"Error",message:"EncodingError U+7EAE"});
assert.throws(() => {ms932Encoder.encode("\u7EAF")}, {name:"Error",message:"EncodingError U+7EAF"});
assert.throws(() => {ms932Encoder.encode("\u7EB0")}, {name:"Error",message:"EncodingError U+7EB0"});
assert.throws(() => {ms932Encoder.encode("\u7EB1")}, {name:"Error",message:"EncodingError U+7EB1"});
assert.throws(() => {ms932Encoder.encode("\u7EB2")}, {name:"Error",message:"EncodingError U+7EB2"});
assert.throws(() => {ms932Encoder.encode("\u7EB3")}, {name:"Error",message:"EncodingError U+7EB3"});
assert.throws(() => {ms932Encoder.encode("\u7EB4")}, {name:"Error",message:"EncodingError U+7EB4"});
assert.throws(() => {ms932Encoder.encode("\u7EB5")}, {name:"Error",message:"EncodingError U+7EB5"});
assert.throws(() => {ms932Encoder.encode("\u7EB6")}, {name:"Error",message:"EncodingError U+7EB6"});
assert.throws(() => {ms932Encoder.encode("\u7EB7")}, {name:"Error",message:"EncodingError U+7EB7"});
assert.throws(() => {ms932Encoder.encode("\u7EB8")}, {name:"Error",message:"EncodingError U+7EB8"});
assert.throws(() => {ms932Encoder.encode("\u7EB9")}, {name:"Error",message:"EncodingError U+7EB9"});
assert.throws(() => {ms932Encoder.encode("\u7EBA")}, {name:"Error",message:"EncodingError U+7EBA"});
assert.throws(() => {ms932Encoder.encode("\u7EBB")}, {name:"Error",message:"EncodingError U+7EBB"});
assert.throws(() => {ms932Encoder.encode("\u7EBC")}, {name:"Error",message:"EncodingError U+7EBC"});
assert.throws(() => {ms932Encoder.encode("\u7EBD")}, {name:"Error",message:"EncodingError U+7EBD"});
assert.throws(() => {ms932Encoder.encode("\u7EBE")}, {name:"Error",message:"EncodingError U+7EBE"});
assert.throws(() => {ms932Encoder.encode("\u7EBF")}, {name:"Error",message:"EncodingError U+7EBF"});
assert.throws(() => {ms932Encoder.encode("\u7EC0")}, {name:"Error",message:"EncodingError U+7EC0"});
assert.throws(() => {ms932Encoder.encode("\u7EC1")}, {name:"Error",message:"EncodingError U+7EC1"});
assert.throws(() => {ms932Encoder.encode("\u7EC2")}, {name:"Error",message:"EncodingError U+7EC2"});
assert.throws(() => {ms932Encoder.encode("\u7EC3")}, {name:"Error",message:"EncodingError U+7EC3"});
assert.throws(() => {ms932Encoder.encode("\u7EC4")}, {name:"Error",message:"EncodingError U+7EC4"});
assert.throws(() => {ms932Encoder.encode("\u7EC5")}, {name:"Error",message:"EncodingError U+7EC5"});
assert.throws(() => {ms932Encoder.encode("\u7EC6")}, {name:"Error",message:"EncodingError U+7EC6"});
assert.throws(() => {ms932Encoder.encode("\u7EC7")}, {name:"Error",message:"EncodingError U+7EC7"});
assert.throws(() => {ms932Encoder.encode("\u7EC8")}, {name:"Error",message:"EncodingError U+7EC8"});
assert.throws(() => {ms932Encoder.encode("\u7EC9")}, {name:"Error",message:"EncodingError U+7EC9"});
assert.throws(() => {ms932Encoder.encode("\u7ECA")}, {name:"Error",message:"EncodingError U+7ECA"});
assert.throws(() => {ms932Encoder.encode("\u7ECB")}, {name:"Error",message:"EncodingError U+7ECB"});
assert.throws(() => {ms932Encoder.encode("\u7ECC")}, {name:"Error",message:"EncodingError U+7ECC"});
assert.throws(() => {ms932Encoder.encode("\u7ECD")}, {name:"Error",message:"EncodingError U+7ECD"});
assert.throws(() => {ms932Encoder.encode("\u7ECE")}, {name:"Error",message:"EncodingError U+7ECE"});
assert.throws(() => {ms932Encoder.encode("\u7ECF")}, {name:"Error",message:"EncodingError U+7ECF"});
assert.throws(() => {ms932Encoder.encode("\u7ED0")}, {name:"Error",message:"EncodingError U+7ED0"});
assert.throws(() => {ms932Encoder.encode("\u7ED1")}, {name:"Error",message:"EncodingError U+7ED1"});
assert.throws(() => {ms932Encoder.encode("\u7ED2")}, {name:"Error",message:"EncodingError U+7ED2"});
assert.throws(() => {ms932Encoder.encode("\u7ED3")}, {name:"Error",message:"EncodingError U+7ED3"});
assert.throws(() => {ms932Encoder.encode("\u7ED4")}, {name:"Error",message:"EncodingError U+7ED4"});
assert.throws(() => {ms932Encoder.encode("\u7ED5")}, {name:"Error",message:"EncodingError U+7ED5"});
assert.throws(() => {ms932Encoder.encode("\u7ED6")}, {name:"Error",message:"EncodingError U+7ED6"});
assert.throws(() => {ms932Encoder.encode("\u7ED7")}, {name:"Error",message:"EncodingError U+7ED7"});
assert.throws(() => {ms932Encoder.encode("\u7ED8")}, {name:"Error",message:"EncodingError U+7ED8"});
assert.throws(() => {ms932Encoder.encode("\u7ED9")}, {name:"Error",message:"EncodingError U+7ED9"});
assert.throws(() => {ms932Encoder.encode("\u7EDA")}, {name:"Error",message:"EncodingError U+7EDA"});
assert.throws(() => {ms932Encoder.encode("\u7EDB")}, {name:"Error",message:"EncodingError U+7EDB"});
assert.throws(() => {ms932Encoder.encode("\u7EDC")}, {name:"Error",message:"EncodingError U+7EDC"});
assert.throws(() => {ms932Encoder.encode("\u7EDD")}, {name:"Error",message:"EncodingError U+7EDD"});
assert.throws(() => {ms932Encoder.encode("\u7EDE")}, {name:"Error",message:"EncodingError U+7EDE"});
assert.throws(() => {ms932Encoder.encode("\u7EDF")}, {name:"Error",message:"EncodingError U+7EDF"});
assert.throws(() => {ms932Encoder.encode("\u7EE0")}, {name:"Error",message:"EncodingError U+7EE0"});
assert.throws(() => {ms932Encoder.encode("\u7EE1")}, {name:"Error",message:"EncodingError U+7EE1"});
assert.throws(() => {ms932Encoder.encode("\u7EE2")}, {name:"Error",message:"EncodingError U+7EE2"});
assert.throws(() => {ms932Encoder.encode("\u7EE3")}, {name:"Error",message:"EncodingError U+7EE3"});
assert.throws(() => {ms932Encoder.encode("\u7EE4")}, {name:"Error",message:"EncodingError U+7EE4"});
assert.throws(() => {ms932Encoder.encode("\u7EE5")}, {name:"Error",message:"EncodingError U+7EE5"});
assert.throws(() => {ms932Encoder.encode("\u7EE6")}, {name:"Error",message:"EncodingError U+7EE6"});
assert.throws(() => {ms932Encoder.encode("\u7EE7")}, {name:"Error",message:"EncodingError U+7EE7"});
assert.throws(() => {ms932Encoder.encode("\u7EE8")}, {name:"Error",message:"EncodingError U+7EE8"});
assert.throws(() => {ms932Encoder.encode("\u7EE9")}, {name:"Error",message:"EncodingError U+7EE9"});
assert.throws(() => {ms932Encoder.encode("\u7EEA")}, {name:"Error",message:"EncodingError U+7EEA"});
assert.throws(() => {ms932Encoder.encode("\u7EEB")}, {name:"Error",message:"EncodingError U+7EEB"});
assert.throws(() => {ms932Encoder.encode("\u7EEC")}, {name:"Error",message:"EncodingError U+7EEC"});
assert.throws(() => {ms932Encoder.encode("\u7EED")}, {name:"Error",message:"EncodingError U+7EED"});
assert.throws(() => {ms932Encoder.encode("\u7EEE")}, {name:"Error",message:"EncodingError U+7EEE"});
assert.throws(() => {ms932Encoder.encode("\u7EEF")}, {name:"Error",message:"EncodingError U+7EEF"});
assert.throws(() => {ms932Encoder.encode("\u7EF0")}, {name:"Error",message:"EncodingError U+7EF0"});
assert.throws(() => {ms932Encoder.encode("\u7EF1")}, {name:"Error",message:"EncodingError U+7EF1"});
assert.throws(() => {ms932Encoder.encode("\u7EF2")}, {name:"Error",message:"EncodingError U+7EF2"});
assert.throws(() => {ms932Encoder.encode("\u7EF3")}, {name:"Error",message:"EncodingError U+7EF3"});
assert.throws(() => {ms932Encoder.encode("\u7EF4")}, {name:"Error",message:"EncodingError U+7EF4"});
assert.throws(() => {ms932Encoder.encode("\u7EF5")}, {name:"Error",message:"EncodingError U+7EF5"});
assert.throws(() => {ms932Encoder.encode("\u7EF6")}, {name:"Error",message:"EncodingError U+7EF6"});
assert.throws(() => {ms932Encoder.encode("\u7EF7")}, {name:"Error",message:"EncodingError U+7EF7"});
assert.throws(() => {ms932Encoder.encode("\u7EF8")}, {name:"Error",message:"EncodingError U+7EF8"});
assert.throws(() => {ms932Encoder.encode("\u7EF9")}, {name:"Error",message:"EncodingError U+7EF9"});
assert.throws(() => {ms932Encoder.encode("\u7EFA")}, {name:"Error",message:"EncodingError U+7EFA"});
assert.throws(() => {ms932Encoder.encode("\u7EFB")}, {name:"Error",message:"EncodingError U+7EFB"});
assert.throws(() => {ms932Encoder.encode("\u7EFC")}, {name:"Error",message:"EncodingError U+7EFC"});
assert.throws(() => {ms932Encoder.encode("\u7EFD")}, {name:"Error",message:"EncodingError U+7EFD"});
assert.throws(() => {ms932Encoder.encode("\u7EFE")}, {name:"Error",message:"EncodingError U+7EFE"});
assert.throws(() => {ms932Encoder.encode("\u7EFF")}, {name:"Error",message:"EncodingError U+7EFF"});
assert.throws(() => {ms932Encoder.encode("\u7F00")}, {name:"Error",message:"EncodingError U+7F00"});
assert.throws(() => {ms932Encoder.encode("\u7F01")}, {name:"Error",message:"EncodingError U+7F01"});
assert.throws(() => {ms932Encoder.encode("\u7F02")}, {name:"Error",message:"EncodingError U+7F02"});
assert.throws(() => {ms932Encoder.encode("\u7F03")}, {name:"Error",message:"EncodingError U+7F03"});
assert.throws(() => {ms932Encoder.encode("\u7F04")}, {name:"Error",message:"EncodingError U+7F04"});
assert.throws(() => {ms932Encoder.encode("\u7F05")}, {name:"Error",message:"EncodingError U+7F05"});
assert.throws(() => {ms932Encoder.encode("\u7F06")}, {name:"Error",message:"EncodingError U+7F06"});
assert.throws(() => {ms932Encoder.encode("\u7F07")}, {name:"Error",message:"EncodingError U+7F07"});
assert.throws(() => {ms932Encoder.encode("\u7F08")}, {name:"Error",message:"EncodingError U+7F08"});
assert.throws(() => {ms932Encoder.encode("\u7F09")}, {name:"Error",message:"EncodingError U+7F09"});
assert.throws(() => {ms932Encoder.encode("\u7F0A")}, {name:"Error",message:"EncodingError U+7F0A"});
assert.throws(() => {ms932Encoder.encode("\u7F0B")}, {name:"Error",message:"EncodingError U+7F0B"});
assert.throws(() => {ms932Encoder.encode("\u7F0C")}, {name:"Error",message:"EncodingError U+7F0C"});
assert.throws(() => {ms932Encoder.encode("\u7F0D")}, {name:"Error",message:"EncodingError U+7F0D"});
assert.throws(() => {ms932Encoder.encode("\u7F0E")}, {name:"Error",message:"EncodingError U+7F0E"});
assert.throws(() => {ms932Encoder.encode("\u7F0F")}, {name:"Error",message:"EncodingError U+7F0F"});
assert.throws(() => {ms932Encoder.encode("\u7F10")}, {name:"Error",message:"EncodingError U+7F10"});
assert.throws(() => {ms932Encoder.encode("\u7F11")}, {name:"Error",message:"EncodingError U+7F11"});
assert.throws(() => {ms932Encoder.encode("\u7F12")}, {name:"Error",message:"EncodingError U+7F12"});
assert.throws(() => {ms932Encoder.encode("\u7F13")}, {name:"Error",message:"EncodingError U+7F13"});
assert.throws(() => {ms932Encoder.encode("\u7F14")}, {name:"Error",message:"EncodingError U+7F14"});
assert.throws(() => {ms932Encoder.encode("\u7F15")}, {name:"Error",message:"EncodingError U+7F15"});
assert.throws(() => {ms932Encoder.encode("\u7F16")}, {name:"Error",message:"EncodingError U+7F16"});
assert.throws(() => {ms932Encoder.encode("\u7F17")}, {name:"Error",message:"EncodingError U+7F17"});
assert.throws(() => {ms932Encoder.encode("\u7F18")}, {name:"Error",message:"EncodingError U+7F18"});
assert.throws(() => {ms932Encoder.encode("\u7F19")}, {name:"Error",message:"EncodingError U+7F19"});
assert.throws(() => {ms932Encoder.encode("\u7F1A")}, {name:"Error",message:"EncodingError U+7F1A"});
assert.throws(() => {ms932Encoder.encode("\u7F1B")}, {name:"Error",message:"EncodingError U+7F1B"});
assert.throws(() => {ms932Encoder.encode("\u7F1C")}, {name:"Error",message:"EncodingError U+7F1C"});
assert.throws(() => {ms932Encoder.encode("\u7F1D")}, {name:"Error",message:"EncodingError U+7F1D"});
assert.throws(() => {ms932Encoder.encode("\u7F1E")}, {name:"Error",message:"EncodingError U+7F1E"});
assert.throws(() => {ms932Encoder.encode("\u7F1F")}, {name:"Error",message:"EncodingError U+7F1F"});
assert.throws(() => {ms932Encoder.encode("\u7F20")}, {name:"Error",message:"EncodingError U+7F20"});
assert.throws(() => {ms932Encoder.encode("\u7F21")}, {name:"Error",message:"EncodingError U+7F21"});
assert.throws(() => {ms932Encoder.encode("\u7F22")}, {name:"Error",message:"EncodingError U+7F22"});
assert.throws(() => {ms932Encoder.encode("\u7F23")}, {name:"Error",message:"EncodingError U+7F23"});
assert.throws(() => {ms932Encoder.encode("\u7F24")}, {name:"Error",message:"EncodingError U+7F24"});
assert.throws(() => {ms932Encoder.encode("\u7F25")}, {name:"Error",message:"EncodingError U+7F25"});
assert.throws(() => {ms932Encoder.encode("\u7F26")}, {name:"Error",message:"EncodingError U+7F26"});
assert.throws(() => {ms932Encoder.encode("\u7F27")}, {name:"Error",message:"EncodingError U+7F27"});
assert.throws(() => {ms932Encoder.encode("\u7F28")}, {name:"Error",message:"EncodingError U+7F28"});
assert.throws(() => {ms932Encoder.encode("\u7F29")}, {name:"Error",message:"EncodingError U+7F29"});
assert.throws(() => {ms932Encoder.encode("\u7F2A")}, {name:"Error",message:"EncodingError U+7F2A"});
assert.throws(() => {ms932Encoder.encode("\u7F2B")}, {name:"Error",message:"EncodingError U+7F2B"});
assert.throws(() => {ms932Encoder.encode("\u7F2C")}, {name:"Error",message:"EncodingError U+7F2C"});
assert.throws(() => {ms932Encoder.encode("\u7F2D")}, {name:"Error",message:"EncodingError U+7F2D"});
assert.throws(() => {ms932Encoder.encode("\u7F2E")}, {name:"Error",message:"EncodingError U+7F2E"});
assert.throws(() => {ms932Encoder.encode("\u7F2F")}, {name:"Error",message:"EncodingError U+7F2F"});
assert.throws(() => {ms932Encoder.encode("\u7F30")}, {name:"Error",message:"EncodingError U+7F30"});
assert.throws(() => {ms932Encoder.encode("\u7F31")}, {name:"Error",message:"EncodingError U+7F31"});
assert.throws(() => {ms932Encoder.encode("\u7F32")}, {name:"Error",message:"EncodingError U+7F32"});
assert.throws(() => {ms932Encoder.encode("\u7F33")}, {name:"Error",message:"EncodingError U+7F33"});
assert.throws(() => {ms932Encoder.encode("\u7F34")}, {name:"Error",message:"EncodingError U+7F34"});
assert.throws(() => {ms932Encoder.encode("\u7F35")}, {name:"Error",message:"EncodingError U+7F35"});
r = r && ([...ms932Encoder.encode("缶")].join(",") === "138,202"); // U+7F36
assert.throws(() => {ms932Encoder.encode("\u7F37")}, {name:"Error",message:"EncodingError U+7F37"});
r = r && ([...ms932Encoder.encode("缸")].join(",") === "227,157"); // U+7F38
assert.throws(() => {ms932Encoder.encode("\u7F39")}, {name:"Error",message:"EncodingError U+7F39"});
r = r && ([...ms932Encoder.encode("缺")].join(",") === "227,158"); // U+7F3A
assert.throws(() => {ms932Encoder.encode("\u7F3B")}, {name:"Error",message:"EncodingError U+7F3B"});
assert.throws(() => {ms932Encoder.encode("\u7F3C")}, {name:"Error",message:"EncodingError U+7F3C"});
assert.throws(() => {ms932Encoder.encode("\u7F3D")}, {name:"Error",message:"EncodingError U+7F3D"});
assert.throws(() => {ms932Encoder.encode("\u7F3E")}, {name:"Error",message:"EncodingError U+7F3E"});
assert.throws(() => {ms932Encoder.encode("\u7F3F")}, {name:"Error",message:"EncodingError U+7F3F"});
assert.throws(() => {ms932Encoder.encode("\u7F40")}, {name:"Error",message:"EncodingError U+7F40"});
assert.throws(() => {ms932Encoder.encode("\u7F41")}, {name:"Error",message:"EncodingError U+7F41"});
assert.throws(() => {ms932Encoder.encode("\u7F42")}, {name:"Error",message:"EncodingError U+7F42"});
assert.throws(() => {ms932Encoder.encode("\u7F43")}, {name:"Error",message:"EncodingError U+7F43"});
assert.throws(() => {ms932Encoder.encode("\u7F44")}, {name:"Error",message:"EncodingError U+7F44"});
r = r && ([...ms932Encoder.encode("罅")].join(",") === "227,159"); // U+7F45
assert.throws(() => {ms932Encoder.encode("\u7F46")}, {name:"Error",message:"EncodingError U+7F46"});
r = r && ([...ms932Encoder.encode("罇")].join(",") === "251,144"); // U+7F47
assert.throws(() => {ms932Encoder.encode("\u7F48")}, {name:"Error",message:"EncodingError U+7F48"});
assert.throws(() => {ms932Encoder.encode("\u7F49")}, {name:"Error",message:"EncodingError U+7F49"});
assert.throws(() => {ms932Encoder.encode("\u7F4A")}, {name:"Error",message:"EncodingError U+7F4A"});
assert.throws(() => {ms932Encoder.encode("\u7F4B")}, {name:"Error",message:"EncodingError U+7F4B"});
r = r && ([...ms932Encoder.encode("罌罍罎")].join(",") === "227,160,227,161,227,162"); // U+7F4C
assert.throws(() => {ms932Encoder.encode("\u7F4F")}, {name:"Error",message:"EncodingError U+7F4F"});
r = r && ([...ms932Encoder.encode("罐网")].join(",") === "227,163,227,164"); // U+7F50
assert.throws(() => {ms932Encoder.encode("\u7F52")}, {name:"Error",message:"EncodingError U+7F52"});
assert.throws(() => {ms932Encoder.encode("\u7F53")}, {name:"Error",message:"EncodingError U+7F53"});
r = r && ([...ms932Encoder.encode("罔罕")].join(",") === "227,166,227,165"); // U+7F54
assert.throws(() => {ms932Encoder.encode("\u7F56")}, {name:"Error",message:"EncodingError U+7F56"});
assert.throws(() => {ms932Encoder.encode("\u7F57")}, {name:"Error",message:"EncodingError U+7F57"});
r = r && ([...ms932Encoder.encode("罘")].join(",") === "227,167"); // U+7F58
assert.throws(() => {ms932Encoder.encode("\u7F59")}, {name:"Error",message:"EncodingError U+7F59"});
assert.throws(() => {ms932Encoder.encode("\u7F5A")}, {name:"Error",message:"EncodingError U+7F5A"});
assert.throws(() => {ms932Encoder.encode("\u7F5B")}, {name:"Error",message:"EncodingError U+7F5B"});
assert.throws(() => {ms932Encoder.encode("\u7F5C")}, {name:"Error",message:"EncodingError U+7F5C"});
assert.throws(() => {ms932Encoder.encode("\u7F5D")}, {name:"Error",message:"EncodingError U+7F5D"});
assert.throws(() => {ms932Encoder.encode("\u7F5E")}, {name:"Error",message:"EncodingError U+7F5E"});
r = r && ([...ms932Encoder.encode("罟罠")].join(",") === "227,168,227,169"); // U+7F5F
assert.throws(() => {ms932Encoder.encode("\u7F61")}, {name:"Error",message:"EncodingError U+7F61"});
assert.throws(() => {ms932Encoder.encode("\u7F62")}, {name:"Error",message:"EncodingError U+7F62"});
assert.throws(() => {ms932Encoder.encode("\u7F63")}, {name:"Error",message:"EncodingError U+7F63"});
assert.throws(() => {ms932Encoder.encode("\u7F64")}, {name:"Error",message:"EncodingError U+7F64"});
assert.throws(() => {ms932Encoder.encode("\u7F65")}, {name:"Error",message:"EncodingError U+7F65"});
assert.throws(() => {ms932Encoder.encode("\u7F66")}, {name:"Error",message:"EncodingError U+7F66"});
r = r && ([...ms932Encoder.encode("罧罨罩罪罫")].join(",") === "227,172,227,170,227,171,141,223,140,114"); // U+7F67
assert.throws(() => {ms932Encoder.encode("\u7F6C")}, {name:"Error",message:"EncodingError U+7F6C"});
assert.throws(() => {ms932Encoder.encode("\u7F6D")}, {name:"Error",message:"EncodingError U+7F6D"});
r = r && ([...ms932Encoder.encode("置")].join(",") === "146,117"); // U+7F6E
assert.throws(() => {ms932Encoder.encode("\u7F6F")}, {name:"Error",message:"EncodingError U+7F6F"});
r = r && ([...ms932Encoder.encode("罰")].join(",") === "148,177"); // U+7F70
assert.throws(() => {ms932Encoder.encode("\u7F71")}, {name:"Error",message:"EncodingError U+7F71"});
r = r && ([...ms932Encoder.encode("署")].join(",") === "143,144"); // U+7F72
assert.throws(() => {ms932Encoder.encode("\u7F73")}, {name:"Error",message:"EncodingError U+7F73"});
assert.throws(() => {ms932Encoder.encode("\u7F74")}, {name:"Error",message:"EncodingError U+7F74"});
r = r && ([...ms932Encoder.encode("罵")].join(",") === "148,108"); // U+7F75
assert.throws(() => {ms932Encoder.encode("\u7F76")}, {name:"Error",message:"EncodingError U+7F76"});
r = r && ([...ms932Encoder.encode("罷罸罹")].join(",") === "148,235,227,173,156,235"); // U+7F77
assert.throws(() => {ms932Encoder.encode("\u7F7A")}, {name:"Error",message:"EncodingError U+7F7A"});
assert.throws(() => {ms932Encoder.encode("\u7F7B")}, {name:"Error",message:"EncodingError U+7F7B"});
assert.throws(() => {ms932Encoder.encode("\u7F7C")}, {name:"Error",message:"EncodingError U+7F7C"});
assert.throws(() => {ms932Encoder.encode("\u7F7D")}, {name:"Error",message:"EncodingError U+7F7D"});
assert.throws(() => {ms932Encoder.encode("\u7F7E")}, {name:"Error",message:"EncodingError U+7F7E"});
assert.throws(() => {ms932Encoder.encode("\u7F7F")}, {name:"Error",message:"EncodingError U+7F7F"});
assert.throws(() => {ms932Encoder.encode("\u7F80")}, {name:"Error",message:"EncodingError U+7F80"});
assert.throws(() => {ms932Encoder.encode("\u7F81")}, {name:"Error",message:"EncodingError U+7F81"});
r = r && ([...ms932Encoder.encode("羂羃")].join(",") === "227,174,227,176"); // U+7F82
assert.throws(() => {ms932Encoder.encode("\u7F84")}, {name:"Error",message:"EncodingError U+7F84"});
r = r && ([...ms932Encoder.encode("羅羆羇羈")].join(",") === "151,133,227,175,227,178,227,177"); // U+7F85
assert.throws(() => {ms932Encoder.encode("\u7F89")}, {name:"Error",message:"EncodingError U+7F89"});
r = r && ([...ms932Encoder.encode("羊")].join(",") === "151,114"); // U+7F8A
assert.throws(() => {ms932Encoder.encode("\u7F8B")}, {name:"Error",message:"EncodingError U+7F8B"});
r = r && ([...ms932Encoder.encode("羌")].join(",") === "227,179"); // U+7F8C
assert.throws(() => {ms932Encoder.encode("\u7F8D")}, {name:"Error",message:"EncodingError U+7F8D"});
r = r && ([...ms932Encoder.encode("美")].join(",") === "148,252"); // U+7F8E
assert.throws(() => {ms932Encoder.encode("\u7F8F")}, {name:"Error",message:"EncodingError U+7F8F"});
assert.throws(() => {ms932Encoder.encode("\u7F90")}, {name:"Error",message:"EncodingError U+7F90"});
assert.throws(() => {ms932Encoder.encode("\u7F91")}, {name:"Error",message:"EncodingError U+7F91"});
assert.throws(() => {ms932Encoder.encode("\u7F92")}, {name:"Error",message:"EncodingError U+7F92"});
assert.throws(() => {ms932Encoder.encode("\u7F93")}, {name:"Error",message:"EncodingError U+7F93"});
r = r && ([...ms932Encoder.encode("羔")].join(",") === "227,180"); // U+7F94
assert.throws(() => {ms932Encoder.encode("\u7F95")}, {name:"Error",message:"EncodingError U+7F95"});
assert.throws(() => {ms932Encoder.encode("\u7F96")}, {name:"Error",message:"EncodingError U+7F96"});
assert.throws(() => {ms932Encoder.encode("\u7F97")}, {name:"Error",message:"EncodingError U+7F97"});
assert.throws(() => {ms932Encoder.encode("\u7F98")}, {name:"Error",message:"EncodingError U+7F98"});
assert.throws(() => {ms932Encoder.encode("\u7F99")}, {name:"Error",message:"EncodingError U+7F99"});
r = r && ([...ms932Encoder.encode("羚")].join(",") === "227,183"); // U+7F9A
assert.throws(() => {ms932Encoder.encode("\u7F9B")}, {name:"Error",message:"EncodingError U+7F9B"});
assert.throws(() => {ms932Encoder.encode("\u7F9C")}, {name:"Error",message:"EncodingError U+7F9C"});
r = r && ([...ms932Encoder.encode("羝羞")].join(",") === "227,182,227,181"); // U+7F9D
assert.throws(() => {ms932Encoder.encode("\u7F9F")}, {name:"Error",message:"EncodingError U+7F9F"});
assert.throws(() => {ms932Encoder.encode("\u7FA0")}, {name:"Error",message:"EncodingError U+7FA0"});
r = r && ([...ms932Encoder.encode("羡")].join(",") === "251,145"); // U+7FA1
assert.throws(() => {ms932Encoder.encode("\u7FA2")}, {name:"Error",message:"EncodingError U+7FA2"});
r = r && ([...ms932Encoder.encode("羣群")].join(",") === "227,184,140,81"); // U+7FA3
assert.throws(() => {ms932Encoder.encode("\u7FA5")}, {name:"Error",message:"EncodingError U+7FA5"});
assert.throws(() => {ms932Encoder.encode("\u7FA6")}, {name:"Error",message:"EncodingError U+7FA6"});
assert.throws(() => {ms932Encoder.encode("\u7FA7")}, {name:"Error",message:"EncodingError U+7FA7"});
r = r && ([...ms932Encoder.encode("羨義")].join(",") === "145,65,139,96"); // U+7FA8
assert.throws(() => {ms932Encoder.encode("\u7FAA")}, {name:"Error",message:"EncodingError U+7FAA"});
assert.throws(() => {ms932Encoder.encode("\u7FAB")}, {name:"Error",message:"EncodingError U+7FAB"});
assert.throws(() => {ms932Encoder.encode("\u7FAC")}, {name:"Error",message:"EncodingError U+7FAC"});
assert.throws(() => {ms932Encoder.encode("\u7FAD")}, {name:"Error",message:"EncodingError U+7FAD"});
r = r && ([...ms932Encoder.encode("羮羯")].join(",") === "227,188,227,185"); // U+7FAE
assert.throws(() => {ms932Encoder.encode("\u7FB0")}, {name:"Error",message:"EncodingError U+7FB0"});
assert.throws(() => {ms932Encoder.encode("\u7FB1")}, {name:"Error",message:"EncodingError U+7FB1"});
r = r && ([...ms932Encoder.encode("羲")].join(",") === "227,186"); // U+7FB2
assert.throws(() => {ms932Encoder.encode("\u7FB3")}, {name:"Error",message:"EncodingError U+7FB3"});
assert.throws(() => {ms932Encoder.encode("\u7FB4")}, {name:"Error",message:"EncodingError U+7FB4"});
assert.throws(() => {ms932Encoder.encode("\u7FB5")}, {name:"Error",message:"EncodingError U+7FB5"});
r = r && ([...ms932Encoder.encode("羶")].join(",") === "227,189"); // U+7FB6
assert.throws(() => {ms932Encoder.encode("\u7FB7")}, {name:"Error",message:"EncodingError U+7FB7"});
r = r && ([...ms932Encoder.encode("羸羹")].join(",") === "227,190,227,187"); // U+7FB8
assert.throws(() => {ms932Encoder.encode("\u7FBA")}, {name:"Error",message:"EncodingError U+7FBA"});
assert.throws(() => {ms932Encoder.encode("\u7FBB")}, {name:"Error",message:"EncodingError U+7FBB"});
assert.throws(() => {ms932Encoder.encode("\u7FBC")}, {name:"Error",message:"EncodingError U+7FBC"});
r = r && ([...ms932Encoder.encode("羽")].join(",") === "137,72"); // U+7FBD
assert.throws(() => {ms932Encoder.encode("\u7FBE")}, {name:"Error",message:"EncodingError U+7FBE"});
assert.throws(() => {ms932Encoder.encode("\u7FBF")}, {name:"Error",message:"EncodingError U+7FBF"});
assert.throws(() => {ms932Encoder.encode("\u7FC0")}, {name:"Error",message:"EncodingError U+7FC0"});
r = r && ([...ms932Encoder.encode("翁")].join(",") === "137,165"); // U+7FC1
assert.throws(() => {ms932Encoder.encode("\u7FC2")}, {name:"Error",message:"EncodingError U+7FC2"});
assert.throws(() => {ms932Encoder.encode("\u7FC3")}, {name:"Error",message:"EncodingError U+7FC3"});
assert.throws(() => {ms932Encoder.encode("\u7FC4")}, {name:"Error",message:"EncodingError U+7FC4"});
r = r && ([...ms932Encoder.encode("翅翆")].join(",") === "227,192,227,193"); // U+7FC5
assert.throws(() => {ms932Encoder.encode("\u7FC7")}, {name:"Error",message:"EncodingError U+7FC7"});
assert.throws(() => {ms932Encoder.encode("\u7FC8")}, {name:"Error",message:"EncodingError U+7FC8"});
assert.throws(() => {ms932Encoder.encode("\u7FC9")}, {name:"Error",message:"EncodingError U+7FC9"});
r = r && ([...ms932Encoder.encode("翊")].join(",") === "227,194"); // U+7FCA
assert.throws(() => {ms932Encoder.encode("\u7FCB")}, {name:"Error",message:"EncodingError U+7FCB"});
r = r && ([...ms932Encoder.encode("翌")].join(",") === "151,130"); // U+7FCC
assert.throws(() => {ms932Encoder.encode("\u7FCD")}, {name:"Error",message:"EncodingError U+7FCD"});
assert.throws(() => {ms932Encoder.encode("\u7FCE")}, {name:"Error",message:"EncodingError U+7FCE"});
assert.throws(() => {ms932Encoder.encode("\u7FCF")}, {name:"Error",message:"EncodingError U+7FCF"});
assert.throws(() => {ms932Encoder.encode("\u7FD0")}, {name:"Error",message:"EncodingError U+7FD0"});
assert.throws(() => {ms932Encoder.encode("\u7FD1")}, {name:"Error",message:"EncodingError U+7FD1"});
r = r && ([...ms932Encoder.encode("習")].join(",") === "143,75"); // U+7FD2
assert.throws(() => {ms932Encoder.encode("\u7FD3")}, {name:"Error",message:"EncodingError U+7FD3"});
r = r && ([...ms932Encoder.encode("翔翕")].join(",") === "227,196,227,195"); // U+7FD4
assert.throws(() => {ms932Encoder.encode("\u7FD6")}, {name:"Error",message:"EncodingError U+7FD6"});
assert.throws(() => {ms932Encoder.encode("\u7FD7")}, {name:"Error",message:"EncodingError U+7FD7"});
assert.throws(() => {ms932Encoder.encode("\u7FD8")}, {name:"Error",message:"EncodingError U+7FD8"});
assert.throws(() => {ms932Encoder.encode("\u7FD9")}, {name:"Error",message:"EncodingError U+7FD9"});
assert.throws(() => {ms932Encoder.encode("\u7FDA")}, {name:"Error",message:"EncodingError U+7FDA"});
assert.throws(() => {ms932Encoder.encode("\u7FDB")}, {name:"Error",message:"EncodingError U+7FDB"});
assert.throws(() => {ms932Encoder.encode("\u7FDC")}, {name:"Error",message:"EncodingError U+7FDC"});
assert.throws(() => {ms932Encoder.encode("\u7FDD")}, {name:"Error",message:"EncodingError U+7FDD"});
assert.throws(() => {ms932Encoder.encode("\u7FDE")}, {name:"Error",message:"EncodingError U+7FDE"});
assert.throws(() => {ms932Encoder.encode("\u7FDF")}, {name:"Error",message:"EncodingError U+7FDF"});
r = r && ([...ms932Encoder.encode("翠翡")].join(",") === "144,137,227,197"); // U+7FE0
assert.throws(() => {ms932Encoder.encode("\u7FE2")}, {name:"Error",message:"EncodingError U+7FE2"});
assert.throws(() => {ms932Encoder.encode("\u7FE3")}, {name:"Error",message:"EncodingError U+7FE3"});
assert.throws(() => {ms932Encoder.encode("\u7FE4")}, {name:"Error",message:"EncodingError U+7FE4"});
assert.throws(() => {ms932Encoder.encode("\u7FE5")}, {name:"Error",message:"EncodingError U+7FE5"});
r = r && ([...ms932Encoder.encode("翦")].join(",") === "227,198"); // U+7FE6
assert.throws(() => {ms932Encoder.encode("\u7FE7")}, {name:"Error",message:"EncodingError U+7FE7"});
assert.throws(() => {ms932Encoder.encode("\u7FE8")}, {name:"Error",message:"EncodingError U+7FE8"});
r = r && ([...ms932Encoder.encode("翩")].join(",") === "227,199"); // U+7FE9
assert.throws(() => {ms932Encoder.encode("\u7FEA")}, {name:"Error",message:"EncodingError U+7FEA"});
r = r && ([...ms932Encoder.encode("翫")].join(",") === "138,227"); // U+7FEB
assert.throws(() => {ms932Encoder.encode("\u7FEC")}, {name:"Error",message:"EncodingError U+7FEC"});
assert.throws(() => {ms932Encoder.encode("\u7FED")}, {name:"Error",message:"EncodingError U+7FED"});
assert.throws(() => {ms932Encoder.encode("\u7FEE")}, {name:"Error",message:"EncodingError U+7FEE"});
assert.throws(() => {ms932Encoder.encode("\u7FEF")}, {name:"Error",message:"EncodingError U+7FEF"});
r = r && ([...ms932Encoder.encode("翰")].join(",") === "138,203"); // U+7FF0
assert.throws(() => {ms932Encoder.encode("\u7FF1")}, {name:"Error",message:"EncodingError U+7FF1"});
assert.throws(() => {ms932Encoder.encode("\u7FF2")}, {name:"Error",message:"EncodingError U+7FF2"});
r = r && ([...ms932Encoder.encode("翳")].join(",") === "227,200"); // U+7FF3
assert.throws(() => {ms932Encoder.encode("\u7FF4")}, {name:"Error",message:"EncodingError U+7FF4"});
assert.throws(() => {ms932Encoder.encode("\u7FF5")}, {name:"Error",message:"EncodingError U+7FF5"});
assert.throws(() => {ms932Encoder.encode("\u7FF6")}, {name:"Error",message:"EncodingError U+7FF6"});
assert.throws(() => {ms932Encoder.encode("\u7FF7")}, {name:"Error",message:"EncodingError U+7FF7"});
assert.throws(() => {ms932Encoder.encode("\u7FF8")}, {name:"Error",message:"EncodingError U+7FF8"});
r = r && ([...ms932Encoder.encode("翹")].join(",") === "227,201"); // U+7FF9
assert.throws(() => {ms932Encoder.encode("\u7FFA")}, {name:"Error",message:"EncodingError U+7FFA"});
r = r && ([...ms932Encoder.encode("翻翼")].join(",") === "150,124,151,131"); // U+7FFB
assert.throws(() => {ms932Encoder.encode("\u7FFD")}, {name:"Error",message:"EncodingError U+7FFD"});
assert.throws(() => {ms932Encoder.encode("\u7FFE")}, {name:"Error",message:"EncodingError U+7FFE"});
assert.throws(() => {ms932Encoder.encode("\u7FFF")}, {name:"Error",message:"EncodingError U+7FFF"});

assert.strictEqual(r, true);

  });

});
