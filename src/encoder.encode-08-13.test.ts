import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 8", () => {

  it("encode(string) - U+7C00-U+7FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
r = r && ([...ms932Encoder.encode("簀")].join(",") === "226,197"); // U+7C00
expect(() => {ms932Encoder.encode("\u7C01")}).to.throw(Error, "EncodingError U+7C01");
expect(() => {ms932Encoder.encode("\u7C02")}).to.throw(Error, "EncodingError U+7C02");
expect(() => {ms932Encoder.encode("\u7C03")}).to.throw(Error, "EncodingError U+7C03");
expect(() => {ms932Encoder.encode("\u7C04")}).to.throw(Error, "EncodingError U+7C04");
expect(() => {ms932Encoder.encode("\u7C05")}).to.throw(Error, "EncodingError U+7C05");
expect(() => {ms932Encoder.encode("\u7C06")}).to.throw(Error, "EncodingError U+7C06");
r = r && ([...ms932Encoder.encode("簇")].join(",") === "226,198"); // U+7C07
expect(() => {ms932Encoder.encode("\u7C08")}).to.throw(Error, "EncodingError U+7C08");
expect(() => {ms932Encoder.encode("\u7C09")}).to.throw(Error, "EncodingError U+7C09");
expect(() => {ms932Encoder.encode("\u7C0A")}).to.throw(Error, "EncodingError U+7C0A");
expect(() => {ms932Encoder.encode("\u7C0B")}).to.throw(Error, "EncodingError U+7C0B");
expect(() => {ms932Encoder.encode("\u7C0C")}).to.throw(Error, "EncodingError U+7C0C");
r = r && ([...ms932Encoder.encode("簍")].join(",") === "226,203"); // U+7C0D
expect(() => {ms932Encoder.encode("\u7C0E")}).to.throw(Error, "EncodingError U+7C0E");
expect(() => {ms932Encoder.encode("\u7C0F")}).to.throw(Error, "EncodingError U+7C0F");
expect(() => {ms932Encoder.encode("\u7C10")}).to.throw(Error, "EncodingError U+7C10");
r = r && ([...ms932Encoder.encode("簑簒簓簔")].join(",") === "226,192,153,211,226,199,226,193"); // U+7C11
expect(() => {ms932Encoder.encode("\u7C15")}).to.throw(Error, "EncodingError U+7C15");
expect(() => {ms932Encoder.encode("\u7C16")}).to.throw(Error, "EncodingError U+7C16");
r = r && ([...ms932Encoder.encode("簗")].join(",") === "226,202"); // U+7C17
expect(() => {ms932Encoder.encode("\u7C18")}).to.throw(Error, "EncodingError U+7C18");
expect(() => {ms932Encoder.encode("\u7C19")}).to.throw(Error, "EncodingError U+7C19");
expect(() => {ms932Encoder.encode("\u7C1A")}).to.throw(Error, "EncodingError U+7C1A");
expect(() => {ms932Encoder.encode("\u7C1B")}).to.throw(Error, "EncodingError U+7C1B");
expect(() => {ms932Encoder.encode("\u7C1C")}).to.throw(Error, "EncodingError U+7C1C");
expect(() => {ms932Encoder.encode("\u7C1D")}).to.throw(Error, "EncodingError U+7C1D");
expect(() => {ms932Encoder.encode("\u7C1E")}).to.throw(Error, "EncodingError U+7C1E");
r = r && ([...ms932Encoder.encode("簟")].join(",") === "226,208"); // U+7C1F
expect(() => {ms932Encoder.encode("\u7C20")}).to.throw(Error, "EncodingError U+7C20");
r = r && ([...ms932Encoder.encode("簡")].join(",") === "138,200"); // U+7C21
expect(() => {ms932Encoder.encode("\u7C22")}).to.throw(Error, "EncodingError U+7C22");
r = r && ([...ms932Encoder.encode("簣")].join(",") === "226,205"); // U+7C23
expect(() => {ms932Encoder.encode("\u7C24")}).to.throw(Error, "EncodingError U+7C24");
expect(() => {ms932Encoder.encode("\u7C25")}).to.throw(Error, "EncodingError U+7C25");
expect(() => {ms932Encoder.encode("\u7C26")}).to.throw(Error, "EncodingError U+7C26");
r = r && ([...ms932Encoder.encode("簧")].join(",") === "226,206"); // U+7C27
expect(() => {ms932Encoder.encode("\u7C28")}).to.throw(Error, "EncodingError U+7C28");
expect(() => {ms932Encoder.encode("\u7C29")}).to.throw(Error, "EncodingError U+7C29");
r = r && ([...ms932Encoder.encode("簪簫")].join(",") === "226,207,226,210"); // U+7C2A
expect(() => {ms932Encoder.encode("\u7C2C")}).to.throw(Error, "EncodingError U+7C2C");
expect(() => {ms932Encoder.encode("\u7C2D")}).to.throw(Error, "EncodingError U+7C2D");
expect(() => {ms932Encoder.encode("\u7C2E")}).to.throw(Error, "EncodingError U+7C2E");
expect(() => {ms932Encoder.encode("\u7C2F")}).to.throw(Error, "EncodingError U+7C2F");
expect(() => {ms932Encoder.encode("\u7C30")}).to.throw(Error, "EncodingError U+7C30");
expect(() => {ms932Encoder.encode("\u7C31")}).to.throw(Error, "EncodingError U+7C31");
expect(() => {ms932Encoder.encode("\u7C32")}).to.throw(Error, "EncodingError U+7C32");
expect(() => {ms932Encoder.encode("\u7C33")}).to.throw(Error, "EncodingError U+7C33");
expect(() => {ms932Encoder.encode("\u7C34")}).to.throw(Error, "EncodingError U+7C34");
expect(() => {ms932Encoder.encode("\u7C35")}).to.throw(Error, "EncodingError U+7C35");
expect(() => {ms932Encoder.encode("\u7C36")}).to.throw(Error, "EncodingError U+7C36");
r = r && ([...ms932Encoder.encode("簷簸")].join(",") === "226,209,148,244"); // U+7C37
expect(() => {ms932Encoder.encode("\u7C39")}).to.throw(Error, "EncodingError U+7C39");
expect(() => {ms932Encoder.encode("\u7C3A")}).to.throw(Error, "EncodingError U+7C3A");
expect(() => {ms932Encoder.encode("\u7C3B")}).to.throw(Error, "EncodingError U+7C3B");
expect(() => {ms932Encoder.encode("\u7C3C")}).to.throw(Error, "EncodingError U+7C3C");
r = r && ([...ms932Encoder.encode("簽簾簿籀")].join(",") === "226,211,151,250,149,235,226,216"); // U+7C3D
expect(() => {ms932Encoder.encode("\u7C41")}).to.throw(Error, "EncodingError U+7C41");
expect(() => {ms932Encoder.encode("\u7C42")}).to.throw(Error, "EncodingError U+7C42");
r = r && ([...ms932Encoder.encode("籃")].join(",") === "226,213"); // U+7C43
expect(() => {ms932Encoder.encode("\u7C44")}).to.throw(Error, "EncodingError U+7C44");
expect(() => {ms932Encoder.encode("\u7C45")}).to.throw(Error, "EncodingError U+7C45");
expect(() => {ms932Encoder.encode("\u7C46")}).to.throw(Error, "EncodingError U+7C46");
expect(() => {ms932Encoder.encode("\u7C47")}).to.throw(Error, "EncodingError U+7C47");
expect(() => {ms932Encoder.encode("\u7C48")}).to.throw(Error, "EncodingError U+7C48");
expect(() => {ms932Encoder.encode("\u7C49")}).to.throw(Error, "EncodingError U+7C49");
expect(() => {ms932Encoder.encode("\u7C4A")}).to.throw(Error, "EncodingError U+7C4A");
expect(() => {ms932Encoder.encode("\u7C4B")}).to.throw(Error, "EncodingError U+7C4B");
r = r && ([...ms932Encoder.encode("籌籍")].join(",") === "226,212,144,208"); // U+7C4C
expect(() => {ms932Encoder.encode("\u7C4E")}).to.throw(Error, "EncodingError U+7C4E");
r = r && ([...ms932Encoder.encode("籏籐")].join(",") === "226,215,226,217"); // U+7C4F
expect(() => {ms932Encoder.encode("\u7C51")}).to.throw(Error, "EncodingError U+7C51");
expect(() => {ms932Encoder.encode("\u7C52")}).to.throw(Error, "EncodingError U+7C52");
expect(() => {ms932Encoder.encode("\u7C53")}).to.throw(Error, "EncodingError U+7C53");
r = r && ([...ms932Encoder.encode("籔")].join(",") === "226,214"); // U+7C54
expect(() => {ms932Encoder.encode("\u7C55")}).to.throw(Error, "EncodingError U+7C55");
r = r && ([...ms932Encoder.encode("籖")].join(",") === "226,221"); // U+7C56
expect(() => {ms932Encoder.encode("\u7C57")}).to.throw(Error, "EncodingError U+7C57");
r = r && ([...ms932Encoder.encode("籘")].join(",") === "226,218"); // U+7C58
expect(() => {ms932Encoder.encode("\u7C59")}).to.throw(Error, "EncodingError U+7C59");
expect(() => {ms932Encoder.encode("\u7C5A")}).to.throw(Error, "EncodingError U+7C5A");
expect(() => {ms932Encoder.encode("\u7C5B")}).to.throw(Error, "EncodingError U+7C5B");
expect(() => {ms932Encoder.encode("\u7C5C")}).to.throw(Error, "EncodingError U+7C5C");
expect(() => {ms932Encoder.encode("\u7C5D")}).to.throw(Error, "EncodingError U+7C5D");
expect(() => {ms932Encoder.encode("\u7C5E")}).to.throw(Error, "EncodingError U+7C5E");
r = r && ([...ms932Encoder.encode("籟籠")].join(",") === "226,219,226,196"); // U+7C5F
expect(() => {ms932Encoder.encode("\u7C61")}).to.throw(Error, "EncodingError U+7C61");
expect(() => {ms932Encoder.encode("\u7C62")}).to.throw(Error, "EncodingError U+7C62");
expect(() => {ms932Encoder.encode("\u7C63")}).to.throw(Error, "EncodingError U+7C63");
r = r && ([...ms932Encoder.encode("籤籥")].join(",") === "226,220,226,222"); // U+7C64
expect(() => {ms932Encoder.encode("\u7C66")}).to.throw(Error, "EncodingError U+7C66");
expect(() => {ms932Encoder.encode("\u7C67")}).to.throw(Error, "EncodingError U+7C67");
expect(() => {ms932Encoder.encode("\u7C68")}).to.throw(Error, "EncodingError U+7C68");
expect(() => {ms932Encoder.encode("\u7C69")}).to.throw(Error, "EncodingError U+7C69");
expect(() => {ms932Encoder.encode("\u7C6A")}).to.throw(Error, "EncodingError U+7C6A");
expect(() => {ms932Encoder.encode("\u7C6B")}).to.throw(Error, "EncodingError U+7C6B");
r = r && ([...ms932Encoder.encode("籬")].join(",") === "226,223"); // U+7C6C
expect(() => {ms932Encoder.encode("\u7C6D")}).to.throw(Error, "EncodingError U+7C6D");
expect(() => {ms932Encoder.encode("\u7C6E")}).to.throw(Error, "EncodingError U+7C6E");
expect(() => {ms932Encoder.encode("\u7C6F")}).to.throw(Error, "EncodingError U+7C6F");
expect(() => {ms932Encoder.encode("\u7C70")}).to.throw(Error, "EncodingError U+7C70");
expect(() => {ms932Encoder.encode("\u7C71")}).to.throw(Error, "EncodingError U+7C71");
expect(() => {ms932Encoder.encode("\u7C72")}).to.throw(Error, "EncodingError U+7C72");
r = r && ([...ms932Encoder.encode("米")].join(",") === "149,196"); // U+7C73
expect(() => {ms932Encoder.encode("\u7C74")}).to.throw(Error, "EncodingError U+7C74");
r = r && ([...ms932Encoder.encode("籵")].join(",") === "226,224"); // U+7C75
expect(() => {ms932Encoder.encode("\u7C76")}).to.throw(Error, "EncodingError U+7C76");
expect(() => {ms932Encoder.encode("\u7C77")}).to.throw(Error, "EncodingError U+7C77");
expect(() => {ms932Encoder.encode("\u7C78")}).to.throw(Error, "EncodingError U+7C78");
expect(() => {ms932Encoder.encode("\u7C79")}).to.throw(Error, "EncodingError U+7C79");
expect(() => {ms932Encoder.encode("\u7C7A")}).to.throw(Error, "EncodingError U+7C7A");
expect(() => {ms932Encoder.encode("\u7C7B")}).to.throw(Error, "EncodingError U+7C7B");
expect(() => {ms932Encoder.encode("\u7C7C")}).to.throw(Error, "EncodingError U+7C7C");
expect(() => {ms932Encoder.encode("\u7C7D")}).to.throw(Error, "EncodingError U+7C7D");
r = r && ([...ms932Encoder.encode("籾")].join(",") === "150,224"); // U+7C7E
expect(() => {ms932Encoder.encode("\u7C7F")}).to.throw(Error, "EncodingError U+7C7F");
expect(() => {ms932Encoder.encode("\u7C80")}).to.throw(Error, "EncodingError U+7C80");
r = r && ([...ms932Encoder.encode("粁粂粃")].join(",") === "139,204,140,72,226,225"); // U+7C81
expect(() => {ms932Encoder.encode("\u7C84")}).to.throw(Error, "EncodingError U+7C84");
expect(() => {ms932Encoder.encode("\u7C85")}).to.throw(Error, "EncodingError U+7C85");
expect(() => {ms932Encoder.encode("\u7C86")}).to.throw(Error, "EncodingError U+7C86");
expect(() => {ms932Encoder.encode("\u7C87")}).to.throw(Error, "EncodingError U+7C87");
expect(() => {ms932Encoder.encode("\u7C88")}).to.throw(Error, "EncodingError U+7C88");
r = r && ([...ms932Encoder.encode("粉")].join(",") === "149,178"); // U+7C89
expect(() => {ms932Encoder.encode("\u7C8A")}).to.throw(Error, "EncodingError U+7C8A");
r = r && ([...ms932Encoder.encode("粋")].join(",") === "144,136"); // U+7C8B
expect(() => {ms932Encoder.encode("\u7C8C")}).to.throw(Error, "EncodingError U+7C8C");
r = r && ([...ms932Encoder.encode("粍")].join(",") === "150,174"); // U+7C8D
expect(() => {ms932Encoder.encode("\u7C8E")}).to.throw(Error, "EncodingError U+7C8E");
expect(() => {ms932Encoder.encode("\u7C8F")}).to.throw(Error, "EncodingError U+7C8F");
r = r && ([...ms932Encoder.encode("粐")].join(",") === "226,226"); // U+7C90
expect(() => {ms932Encoder.encode("\u7C91")}).to.throw(Error, "EncodingError U+7C91");
r = r && ([...ms932Encoder.encode("粒")].join(",") === "151,177"); // U+7C92
expect(() => {ms932Encoder.encode("\u7C93")}).to.throw(Error, "EncodingError U+7C93");
expect(() => {ms932Encoder.encode("\u7C94")}).to.throw(Error, "EncodingError U+7C94");
r = r && ([...ms932Encoder.encode("粕")].join(",") === "148,148"); // U+7C95
expect(() => {ms932Encoder.encode("\u7C96")}).to.throw(Error, "EncodingError U+7C96");
r = r && ([...ms932Encoder.encode("粗粘")].join(",") === "145,101,148,83"); // U+7C97
expect(() => {ms932Encoder.encode("\u7C99")}).to.throw(Error, "EncodingError U+7C99");
expect(() => {ms932Encoder.encode("\u7C9A")}).to.throw(Error, "EncodingError U+7C9A");
r = r && ([...ms932Encoder.encode("粛")].join(",") === "143,108"); // U+7C9B
expect(() => {ms932Encoder.encode("\u7C9C")}).to.throw(Error, "EncodingError U+7C9C");
expect(() => {ms932Encoder.encode("\u7C9D")}).to.throw(Error, "EncodingError U+7C9D");
expect(() => {ms932Encoder.encode("\u7C9E")}).to.throw(Error, "EncodingError U+7C9E");
r = r && ([...ms932Encoder.encode("粟")].join(",") === "136,190"); // U+7C9F
expect(() => {ms932Encoder.encode("\u7CA0")}).to.throw(Error, "EncodingError U+7CA0");
r = r && ([...ms932Encoder.encode("粡粢")].join(",") === "226,231,226,229"); // U+7CA1
expect(() => {ms932Encoder.encode("\u7CA3")}).to.throw(Error, "EncodingError U+7CA3");
r = r && ([...ms932Encoder.encode("粤粥")].join(",") === "226,227,138,159"); // U+7CA4
expect(() => {ms932Encoder.encode("\u7CA6")}).to.throw(Error, "EncodingError U+7CA6");
r = r && ([...ms932Encoder.encode("粧粨")].join(",") === "143,207,226,232"); // U+7CA7
expect(() => {ms932Encoder.encode("\u7CA9")}).to.throw(Error, "EncodingError U+7CA9");
expect(() => {ms932Encoder.encode("\u7CAA")}).to.throw(Error, "EncodingError U+7CAA");
r = r && ([...ms932Encoder.encode("粫")].join(",") === "226,230"); // U+7CAB
expect(() => {ms932Encoder.encode("\u7CAC")}).to.throw(Error, "EncodingError U+7CAC");
r = r && ([...ms932Encoder.encode("粭粮")].join(",") === "226,228,226,236"); // U+7CAD
expect(() => {ms932Encoder.encode("\u7CAF")}).to.throw(Error, "EncodingError U+7CAF");
expect(() => {ms932Encoder.encode("\u7CB0")}).to.throw(Error, "EncodingError U+7CB0");
r = r && ([...ms932Encoder.encode("粱粲粳")].join(",") === "226,235,226,234,226,233"); // U+7CB1
expect(() => {ms932Encoder.encode("\u7CB4")}).to.throw(Error, "EncodingError U+7CB4");
expect(() => {ms932Encoder.encode("\u7CB5")}).to.throw(Error, "EncodingError U+7CB5");
expect(() => {ms932Encoder.encode("\u7CB6")}).to.throw(Error, "EncodingError U+7CB6");
expect(() => {ms932Encoder.encode("\u7CB7")}).to.throw(Error, "EncodingError U+7CB7");
expect(() => {ms932Encoder.encode("\u7CB8")}).to.throw(Error, "EncodingError U+7CB8");
r = r && ([...ms932Encoder.encode("粹")].join(",") === "226,237"); // U+7CB9
expect(() => {ms932Encoder.encode("\u7CBA")}).to.throw(Error, "EncodingError U+7CBA");
expect(() => {ms932Encoder.encode("\u7CBB")}).to.throw(Error, "EncodingError U+7CBB");
expect(() => {ms932Encoder.encode("\u7CBC")}).to.throw(Error, "EncodingError U+7CBC");
r = r && ([...ms932Encoder.encode("粽精")].join(",") === "226,238,144,184"); // U+7CBD
expect(() => {ms932Encoder.encode("\u7CBF")}).to.throw(Error, "EncodingError U+7CBF");
r = r && ([...ms932Encoder.encode("糀")].join(",") === "226,239"); // U+7CC0
expect(() => {ms932Encoder.encode("\u7CC1")}).to.throw(Error, "EncodingError U+7CC1");
r = r && ([...ms932Encoder.encode("糂")].join(",") === "226,241"); // U+7CC2
expect(() => {ms932Encoder.encode("\u7CC3")}).to.throw(Error, "EncodingError U+7CC3");
expect(() => {ms932Encoder.encode("\u7CC4")}).to.throw(Error, "EncodingError U+7CC4");
r = r && ([...ms932Encoder.encode("糅")].join(",") === "226,240"); // U+7CC5
expect(() => {ms932Encoder.encode("\u7CC6")}).to.throw(Error, "EncodingError U+7CC6");
expect(() => {ms932Encoder.encode("\u7CC7")}).to.throw(Error, "EncodingError U+7CC7");
expect(() => {ms932Encoder.encode("\u7CC8")}).to.throw(Error, "EncodingError U+7CC8");
expect(() => {ms932Encoder.encode("\u7CC9")}).to.throw(Error, "EncodingError U+7CC9");
r = r && ([...ms932Encoder.encode("糊")].join(",") === "140,208"); // U+7CCA
expect(() => {ms932Encoder.encode("\u7CCB")}).to.throw(Error, "EncodingError U+7CCB");
expect(() => {ms932Encoder.encode("\u7CCC")}).to.throw(Error, "EncodingError U+7CCC");
expect(() => {ms932Encoder.encode("\u7CCD")}).to.throw(Error, "EncodingError U+7CCD");
r = r && ([...ms932Encoder.encode("糎")].join(",") === "145,87"); // U+7CCE
expect(() => {ms932Encoder.encode("\u7CCF")}).to.throw(Error, "EncodingError U+7CCF");
expect(() => {ms932Encoder.encode("\u7CD0")}).to.throw(Error, "EncodingError U+7CD0");
expect(() => {ms932Encoder.encode("\u7CD1")}).to.throw(Error, "EncodingError U+7CD1");
r = r && ([...ms932Encoder.encode("糒")].join(",") === "226,243"); // U+7CD2
expect(() => {ms932Encoder.encode("\u7CD3")}).to.throw(Error, "EncodingError U+7CD3");
expect(() => {ms932Encoder.encode("\u7CD4")}).to.throw(Error, "EncodingError U+7CD4");
expect(() => {ms932Encoder.encode("\u7CD5")}).to.throw(Error, "EncodingError U+7CD5");
r = r && ([...ms932Encoder.encode("糖")].join(",") === "147,156"); // U+7CD6
expect(() => {ms932Encoder.encode("\u7CD7")}).to.throw(Error, "EncodingError U+7CD7");
r = r && ([...ms932Encoder.encode("糘")].join(",") === "226,242"); // U+7CD8
expect(() => {ms932Encoder.encode("\u7CD9")}).to.throw(Error, "EncodingError U+7CD9");
expect(() => {ms932Encoder.encode("\u7CDA")}).to.throw(Error, "EncodingError U+7CDA");
expect(() => {ms932Encoder.encode("\u7CDB")}).to.throw(Error, "EncodingError U+7CDB");
r = r && ([...ms932Encoder.encode("糜")].join(",") === "226,244"); // U+7CDC
expect(() => {ms932Encoder.encode("\u7CDD")}).to.throw(Error, "EncodingError U+7CDD");
r = r && ([...ms932Encoder.encode("糞糟糠")].join(",") === "149,179,145,140,141,102"); // U+7CDE
expect(() => {ms932Encoder.encode("\u7CE1")}).to.throw(Error, "EncodingError U+7CE1");
r = r && ([...ms932Encoder.encode("糢")].join(",") === "226,245"); // U+7CE2
expect(() => {ms932Encoder.encode("\u7CE3")}).to.throw(Error, "EncodingError U+7CE3");
expect(() => {ms932Encoder.encode("\u7CE4")}).to.throw(Error, "EncodingError U+7CE4");
expect(() => {ms932Encoder.encode("\u7CE5")}).to.throw(Error, "EncodingError U+7CE5");
expect(() => {ms932Encoder.encode("\u7CE6")}).to.throw(Error, "EncodingError U+7CE6");
r = r && ([...ms932Encoder.encode("糧")].join(",") === "151,198"); // U+7CE7
expect(() => {ms932Encoder.encode("\u7CE8")}).to.throw(Error, "EncodingError U+7CE8");
expect(() => {ms932Encoder.encode("\u7CE9")}).to.throw(Error, "EncodingError U+7CE9");
expect(() => {ms932Encoder.encode("\u7CEA")}).to.throw(Error, "EncodingError U+7CEA");
expect(() => {ms932Encoder.encode("\u7CEB")}).to.throw(Error, "EncodingError U+7CEB");
expect(() => {ms932Encoder.encode("\u7CEC")}).to.throw(Error, "EncodingError U+7CEC");
expect(() => {ms932Encoder.encode("\u7CED")}).to.throw(Error, "EncodingError U+7CED");
expect(() => {ms932Encoder.encode("\u7CEE")}).to.throw(Error, "EncodingError U+7CEE");
r = r && ([...ms932Encoder.encode("糯")].join(",") === "226,247"); // U+7CEF
expect(() => {ms932Encoder.encode("\u7CF0")}).to.throw(Error, "EncodingError U+7CF0");
expect(() => {ms932Encoder.encode("\u7CF1")}).to.throw(Error, "EncodingError U+7CF1");
r = r && ([...ms932Encoder.encode("糲")].join(",") === "226,248"); // U+7CF2
expect(() => {ms932Encoder.encode("\u7CF3")}).to.throw(Error, "EncodingError U+7CF3");
r = r && ([...ms932Encoder.encode("糴")].join(",") === "226,249"); // U+7CF4
expect(() => {ms932Encoder.encode("\u7CF5")}).to.throw(Error, "EncodingError U+7CF5");
r = r && ([...ms932Encoder.encode("糶")].join(",") === "226,250"); // U+7CF6
expect(() => {ms932Encoder.encode("\u7CF7")}).to.throw(Error, "EncodingError U+7CF7");
r = r && ([...ms932Encoder.encode("糸")].join(",") === "142,133"); // U+7CF8
expect(() => {ms932Encoder.encode("\u7CF9")}).to.throw(Error, "EncodingError U+7CF9");
r = r && ([...ms932Encoder.encode("糺系")].join(",") === "226,251,140,110"); // U+7CFA
expect(() => {ms932Encoder.encode("\u7CFC")}).to.throw(Error, "EncodingError U+7CFC");
expect(() => {ms932Encoder.encode("\u7CFD")}).to.throw(Error, "EncodingError U+7CFD");
r = r && ([...ms932Encoder.encode("糾")].join(",") === "139,138"); // U+7CFE
expect(() => {ms932Encoder.encode("\u7CFF")}).to.throw(Error, "EncodingError U+7CFF");
r = r && ([...ms932Encoder.encode("紀")].join(",") === "139,73"); // U+7D00
expect(() => {ms932Encoder.encode("\u7D01")}).to.throw(Error, "EncodingError U+7D01");
r = r && ([...ms932Encoder.encode("紂")].join(",") === "227,64"); // U+7D02
expect(() => {ms932Encoder.encode("\u7D03")}).to.throw(Error, "EncodingError U+7D03");
r = r && ([...ms932Encoder.encode("約紅紆")].join(",") === "150,241,141,103,226,252"); // U+7D04
expect(() => {ms932Encoder.encode("\u7D07")}).to.throw(Error, "EncodingError U+7D07");
expect(() => {ms932Encoder.encode("\u7D08")}).to.throw(Error, "EncodingError U+7D08");
expect(() => {ms932Encoder.encode("\u7D09")}).to.throw(Error, "EncodingError U+7D09");
r = r && ([...ms932Encoder.encode("紊紋")].join(",") === "227,67,150,228"); // U+7D0A
expect(() => {ms932Encoder.encode("\u7D0C")}).to.throw(Error, "EncodingError U+7D0C");
r = r && ([...ms932Encoder.encode("納")].join(",") === "148,91"); // U+7D0D
expect(() => {ms932Encoder.encode("\u7D0E")}).to.throw(Error, "EncodingError U+7D0E");
expect(() => {ms932Encoder.encode("\u7D0F")}).to.throw(Error, "EncodingError U+7D0F");
r = r && ([...ms932Encoder.encode("紐")].join(",") === "149,82"); // U+7D10
expect(() => {ms932Encoder.encode("\u7D11")}).to.throw(Error, "EncodingError U+7D11");
expect(() => {ms932Encoder.encode("\u7D12")}).to.throw(Error, "EncodingError U+7D12");
expect(() => {ms932Encoder.encode("\u7D13")}).to.throw(Error, "EncodingError U+7D13");
r = r && ([...ms932Encoder.encode("純紕")].join(",") === "143,131,227,66"); // U+7D14
expect(() => {ms932Encoder.encode("\u7D16")}).to.throw(Error, "EncodingError U+7D16");
r = r && ([...ms932Encoder.encode("紗紘紙級紛紜")].join(",") === "142,209,141,104,142,134,139,137,149,180,227,65"); // U+7D17
expect(() => {ms932Encoder.encode("\u7D1D")}).to.throw(Error, "EncodingError U+7D1D");
expect(() => {ms932Encoder.encode("\u7D1E")}).to.throw(Error, "EncodingError U+7D1E");
expect(() => {ms932Encoder.encode("\u7D1F")}).to.throw(Error, "EncodingError U+7D1F");
r = r && ([...ms932Encoder.encode("素紡索")].join(",") === "145,102,150,97,141,245"); // U+7D20
expect(() => {ms932Encoder.encode("\u7D23")}).to.throw(Error, "EncodingError U+7D23");
expect(() => {ms932Encoder.encode("\u7D24")}).to.throw(Error, "EncodingError U+7D24");
expect(() => {ms932Encoder.encode("\u7D25")}).to.throw(Error, "EncodingError U+7D25");
expect(() => {ms932Encoder.encode("\u7D26")}).to.throw(Error, "EncodingError U+7D26");
expect(() => {ms932Encoder.encode("\u7D27")}).to.throw(Error, "EncodingError U+7D27");
expect(() => {ms932Encoder.encode("\u7D28")}).to.throw(Error, "EncodingError U+7D28");
expect(() => {ms932Encoder.encode("\u7D29")}).to.throw(Error, "EncodingError U+7D29");
expect(() => {ms932Encoder.encode("\u7D2A")}).to.throw(Error, "EncodingError U+7D2A");
r = r && ([...ms932Encoder.encode("紫紬")].join(",") === "142,135,146,219"); // U+7D2B
expect(() => {ms932Encoder.encode("\u7D2D")}).to.throw(Error, "EncodingError U+7D2D");
r = r && ([...ms932Encoder.encode("紮累細")].join(",") === "227,70,151,221,141,215"); // U+7D2E
expect(() => {ms932Encoder.encode("\u7D31")}).to.throw(Error, "EncodingError U+7D31");
r = r && ([...ms932Encoder.encode("紲紳")].join(",") === "227,71,144,97"); // U+7D32
expect(() => {ms932Encoder.encode("\u7D34")}).to.throw(Error, "EncodingError U+7D34");
r = r && ([...ms932Encoder.encode("紵")].join(",") === "227,73"); // U+7D35
expect(() => {ms932Encoder.encode("\u7D36")}).to.throw(Error, "EncodingError U+7D36");
expect(() => {ms932Encoder.encode("\u7D37")}).to.throw(Error, "EncodingError U+7D37");
expect(() => {ms932Encoder.encode("\u7D38")}).to.throw(Error, "EncodingError U+7D38");
r = r && ([...ms932Encoder.encode("紹紺")].join(",") === "143,208,141,174"); // U+7D39
expect(() => {ms932Encoder.encode("\u7D3B")}).to.throw(Error, "EncodingError U+7D3B");
expect(() => {ms932Encoder.encode("\u7D3C")}).to.throw(Error, "EncodingError U+7D3C");
expect(() => {ms932Encoder.encode("\u7D3D")}).to.throw(Error, "EncodingError U+7D3D");
expect(() => {ms932Encoder.encode("\u7D3E")}).to.throw(Error, "EncodingError U+7D3E");
r = r && ([...ms932Encoder.encode("紿")].join(",") === "227,72"); // U+7D3F
expect(() => {ms932Encoder.encode("\u7D40")}).to.throw(Error, "EncodingError U+7D40");
expect(() => {ms932Encoder.encode("\u7D41")}).to.throw(Error, "EncodingError U+7D41");
r = r && ([...ms932Encoder.encode("終絃組絅絆")].join(",") === "143,73,140,188,145,103,227,68,227,74"); // U+7D42
expect(() => {ms932Encoder.encode("\u7D47")}).to.throw(Error, "EncodingError U+7D47");
r = r && ([...ms932Encoder.encode("絈")].join(",") === "251,138"); // U+7D48
expect(() => {ms932Encoder.encode("\u7D49")}).to.throw(Error, "EncodingError U+7D49");
expect(() => {ms932Encoder.encode("\u7D4A")}).to.throw(Error, "EncodingError U+7D4A");
r = r && ([...ms932Encoder.encode("絋経")].join(",") === "227,69,140,111"); // U+7D4B
expect(() => {ms932Encoder.encode("\u7D4D")}).to.throw(Error, "EncodingError U+7D4D");
r = r && ([...ms932Encoder.encode("絎絏結")].join(",") === "227,77,227,81,140,139"); // U+7D4E
expect(() => {ms932Encoder.encode("\u7D51")}).to.throw(Error, "EncodingError U+7D51");
expect(() => {ms932Encoder.encode("\u7D52")}).to.throw(Error, "EncodingError U+7D52");
expect(() => {ms932Encoder.encode("\u7D53")}).to.throw(Error, "EncodingError U+7D53");
expect(() => {ms932Encoder.encode("\u7D54")}).to.throw(Error, "EncodingError U+7D54");
expect(() => {ms932Encoder.encode("\u7D55")}).to.throw(Error, "EncodingError U+7D55");
r = r && ([...ms932Encoder.encode("絖")].join(",") === "227,76"); // U+7D56
expect(() => {ms932Encoder.encode("\u7D57")}).to.throw(Error, "EncodingError U+7D57");
expect(() => {ms932Encoder.encode("\u7D58")}).to.throw(Error, "EncodingError U+7D58");
expect(() => {ms932Encoder.encode("\u7D59")}).to.throw(Error, "EncodingError U+7D59");
expect(() => {ms932Encoder.encode("\u7D5A")}).to.throw(Error, "EncodingError U+7D5A");
r = r && ([...ms932Encoder.encode("絛絜")].join(",") === "227,85,251,139"); // U+7D5B
expect(() => {ms932Encoder.encode("\u7D5D")}).to.throw(Error, "EncodingError U+7D5D");
r = r && ([...ms932Encoder.encode("絞")].join(",") === "141,105"); // U+7D5E
expect(() => {ms932Encoder.encode("\u7D5F")}).to.throw(Error, "EncodingError U+7D5F");
expect(() => {ms932Encoder.encode("\u7D60")}).to.throw(Error, "EncodingError U+7D60");
r = r && ([...ms932Encoder.encode("絡絢絣")].join(",") === "151,141,136,186,227,82"); // U+7D61
expect(() => {ms932Encoder.encode("\u7D64")}).to.throw(Error, "EncodingError U+7D64");
expect(() => {ms932Encoder.encode("\u7D65")}).to.throw(Error, "EncodingError U+7D65");
r = r && ([...ms932Encoder.encode("給")].join(",") === "139,139"); // U+7D66
expect(() => {ms932Encoder.encode("\u7D67")}).to.throw(Error, "EncodingError U+7D67");
r = r && ([...ms932Encoder.encode("絨")].join(",") === "227,79"); // U+7D68
expect(() => {ms932Encoder.encode("\u7D69")}).to.throw(Error, "EncodingError U+7D69");
expect(() => {ms932Encoder.encode("\u7D6A")}).to.throw(Error, "EncodingError U+7D6A");
expect(() => {ms932Encoder.encode("\u7D6B")}).to.throw(Error, "EncodingError U+7D6B");
expect(() => {ms932Encoder.encode("\u7D6C")}).to.throw(Error, "EncodingError U+7D6C");
expect(() => {ms932Encoder.encode("\u7D6D")}).to.throw(Error, "EncodingError U+7D6D");
r = r && ([...ms932Encoder.encode("絮")].join(",") === "227,80"); // U+7D6E
expect(() => {ms932Encoder.encode("\u7D6F")}).to.throw(Error, "EncodingError U+7D6F");
expect(() => {ms932Encoder.encode("\u7D70")}).to.throw(Error, "EncodingError U+7D70");
r = r && ([...ms932Encoder.encode("統絲絳")].join(",") === "147,157,227,78,227,75"); // U+7D71
expect(() => {ms932Encoder.encode("\u7D74")}).to.throw(Error, "EncodingError U+7D74");
r = r && ([...ms932Encoder.encode("絵絶")].join(",") === "138,71,144,226"); // U+7D75
expect(() => {ms932Encoder.encode("\u7D77")}).to.throw(Error, "EncodingError U+7D77");
expect(() => {ms932Encoder.encode("\u7D78")}).to.throw(Error, "EncodingError U+7D78");
r = r && ([...ms932Encoder.encode("絹")].join(",") === "140,166"); // U+7D79
expect(() => {ms932Encoder.encode("\u7D7A")}).to.throw(Error, "EncodingError U+7D7A");
expect(() => {ms932Encoder.encode("\u7D7B")}).to.throw(Error, "EncodingError U+7D7B");
expect(() => {ms932Encoder.encode("\u7D7C")}).to.throw(Error, "EncodingError U+7D7C");
r = r && ([...ms932Encoder.encode("絽")].join(",") === "227,87"); // U+7D7D
expect(() => {ms932Encoder.encode("\u7D7E")}).to.throw(Error, "EncodingError U+7D7E");
expect(() => {ms932Encoder.encode("\u7D7F")}).to.throw(Error, "EncodingError U+7D7F");
expect(() => {ms932Encoder.encode("\u7D80")}).to.throw(Error, "EncodingError U+7D80");
expect(() => {ms932Encoder.encode("\u7D81")}).to.throw(Error, "EncodingError U+7D81");
expect(() => {ms932Encoder.encode("\u7D82")}).to.throw(Error, "EncodingError U+7D82");
expect(() => {ms932Encoder.encode("\u7D83")}).to.throw(Error, "EncodingError U+7D83");
expect(() => {ms932Encoder.encode("\u7D84")}).to.throw(Error, "EncodingError U+7D84");
expect(() => {ms932Encoder.encode("\u7D85")}).to.throw(Error, "EncodingError U+7D85");
expect(() => {ms932Encoder.encode("\u7D86")}).to.throw(Error, "EncodingError U+7D86");
expect(() => {ms932Encoder.encode("\u7D87")}).to.throw(Error, "EncodingError U+7D87");
expect(() => {ms932Encoder.encode("\u7D88")}).to.throw(Error, "EncodingError U+7D88");
r = r && ([...ms932Encoder.encode("綉")].join(",") === "227,84"); // U+7D89
expect(() => {ms932Encoder.encode("\u7D8A")}).to.throw(Error, "EncodingError U+7D8A");
expect(() => {ms932Encoder.encode("\u7D8B")}).to.throw(Error, "EncodingError U+7D8B");
expect(() => {ms932Encoder.encode("\u7D8C")}).to.throw(Error, "EncodingError U+7D8C");
expect(() => {ms932Encoder.encode("\u7D8D")}).to.throw(Error, "EncodingError U+7D8D");
expect(() => {ms932Encoder.encode("\u7D8E")}).to.throw(Error, "EncodingError U+7D8E");
r = r && ([...ms932Encoder.encode("綏")].join(",") === "227,86"); // U+7D8F
expect(() => {ms932Encoder.encode("\u7D90")}).to.throw(Error, "EncodingError U+7D90");
expect(() => {ms932Encoder.encode("\u7D91")}).to.throw(Error, "EncodingError U+7D91");
expect(() => {ms932Encoder.encode("\u7D92")}).to.throw(Error, "EncodingError U+7D92");
r = r && ([...ms932Encoder.encode("經")].join(",") === "227,83"); // U+7D93
expect(() => {ms932Encoder.encode("\u7D94")}).to.throw(Error, "EncodingError U+7D94");
expect(() => {ms932Encoder.encode("\u7D95")}).to.throw(Error, "EncodingError U+7D95");
expect(() => {ms932Encoder.encode("\u7D96")}).to.throw(Error, "EncodingError U+7D96");
expect(() => {ms932Encoder.encode("\u7D97")}).to.throw(Error, "EncodingError U+7D97");
expect(() => {ms932Encoder.encode("\u7D98")}).to.throw(Error, "EncodingError U+7D98");
r = r && ([...ms932Encoder.encode("継続綛綜")].join(",") === "140,112,145,177,227,88,145,142"); // U+7D99
expect(() => {ms932Encoder.encode("\u7D9D")}).to.throw(Error, "EncodingError U+7D9D");
expect(() => {ms932Encoder.encode("\u7D9E")}).to.throw(Error, "EncodingError U+7D9E");
r = r && ([...ms932Encoder.encode("綟綠")].join(",") === "227,101,251,141"); // U+7D9F
expect(() => {ms932Encoder.encode("\u7DA1")}).to.throw(Error, "EncodingError U+7DA1");
r = r && ([...ms932Encoder.encode("綢綣")].join(",") === "227,97,227,91"); // U+7DA2
expect(() => {ms932Encoder.encode("\u7DA4")}).to.throw(Error, "EncodingError U+7DA4");
expect(() => {ms932Encoder.encode("\u7DA5")}).to.throw(Error, "EncodingError U+7DA5");
expect(() => {ms932Encoder.encode("\u7DA6")}).to.throw(Error, "EncodingError U+7DA6");
expect(() => {ms932Encoder.encode("\u7DA7")}).to.throw(Error, "EncodingError U+7DA7");
expect(() => {ms932Encoder.encode("\u7DA8")}).to.throw(Error, "EncodingError U+7DA8");
expect(() => {ms932Encoder.encode("\u7DA9")}).to.throw(Error, "EncodingError U+7DA9");
expect(() => {ms932Encoder.encode("\u7DAA")}).to.throw(Error, "EncodingError U+7DAA");
r = r && ([...ms932Encoder.encode("綫綬維綮綯綰綱網")].join(",") === "227,95,142,248,136,219,227,90,227,98,227,102,141,106,150,212"); // U+7DAB
expect(() => {ms932Encoder.encode("\u7DB3")}).to.throw(Error, "EncodingError U+7DB3");
r = r && ([...ms932Encoder.encode("綴綵")].join(",") === "146,212,227,92"); // U+7DB4
expect(() => {ms932Encoder.encode("\u7DB6")}).to.throw(Error, "EncodingError U+7DB6");
r = r && ([...ms932Encoder.encode("綷綸")].join(",") === "251,140,227,100"); // U+7DB7
expect(() => {ms932Encoder.encode("\u7DB9")}).to.throw(Error, "EncodingError U+7DB9");
r = r && ([...ms932Encoder.encode("綺綻")].join(",") === "227,89,146,93"); // U+7DBA
expect(() => {ms932Encoder.encode("\u7DBC")}).to.throw(Error, "EncodingError U+7DBC");
r = r && ([...ms932Encoder.encode("綽綾綿")].join(",") === "227,94,136,187,150,200"); // U+7DBD
expect(() => {ms932Encoder.encode("\u7DC0")}).to.throw(Error, "EncodingError U+7DC0");
expect(() => {ms932Encoder.encode("\u7DC1")}).to.throw(Error, "EncodingError U+7DC1");
expect(() => {ms932Encoder.encode("\u7DC2")}).to.throw(Error, "EncodingError U+7DC2");
expect(() => {ms932Encoder.encode("\u7DC3")}).to.throw(Error, "EncodingError U+7DC3");
expect(() => {ms932Encoder.encode("\u7DC4")}).to.throw(Error, "EncodingError U+7DC4");
expect(() => {ms932Encoder.encode("\u7DC5")}).to.throw(Error, "EncodingError U+7DC5");
expect(() => {ms932Encoder.encode("\u7DC6")}).to.throw(Error, "EncodingError U+7DC6");
r = r && ([...ms932Encoder.encode("緇")].join(",") === "227,93"); // U+7DC7
expect(() => {ms932Encoder.encode("\u7DC8")}).to.throw(Error, "EncodingError U+7DC8");
expect(() => {ms932Encoder.encode("\u7DC9")}).to.throw(Error, "EncodingError U+7DC9");
r = r && ([...ms932Encoder.encode("緊緋")].join(",") === "139,217,148,234"); // U+7DCA
expect(() => {ms932Encoder.encode("\u7DCC")}).to.throw(Error, "EncodingError U+7DCC");
expect(() => {ms932Encoder.encode("\u7DCD")}).to.throw(Error, "EncodingError U+7DCD");
expect(() => {ms932Encoder.encode("\u7DCE")}).to.throw(Error, "EncodingError U+7DCE");
r = r && ([...ms932Encoder.encode("総")].join(",") === "145,141"); // U+7DCF
expect(() => {ms932Encoder.encode("\u7DD0")}).to.throw(Error, "EncodingError U+7DD0");
r = r && ([...ms932Encoder.encode("緑緒")].join(",") === "151,206,143,143"); // U+7DD1
expect(() => {ms932Encoder.encode("\u7DD3")}).to.throw(Error, "EncodingError U+7DD3");
expect(() => {ms932Encoder.encode("\u7DD4")}).to.throw(Error, "EncodingError U+7DD4");
r = r && ([...ms932Encoder.encode("緕緖")].join(",") === "227,142,251,142"); // U+7DD5
expect(() => {ms932Encoder.encode("\u7DD7")}).to.throw(Error, "EncodingError U+7DD7");
r = r && ([...ms932Encoder.encode("緘")].join(",") === "227,103"); // U+7DD8
expect(() => {ms932Encoder.encode("\u7DD9")}).to.throw(Error, "EncodingError U+7DD9");
r = r && ([...ms932Encoder.encode("線")].join(",") === "144,252"); // U+7DDA
expect(() => {ms932Encoder.encode("\u7DDB")}).to.throw(Error, "EncodingError U+7DDB");
r = r && ([...ms932Encoder.encode("緜緝緞")].join(",") === "227,99,227,104,227,106"); // U+7DDC
expect(() => {ms932Encoder.encode("\u7DDF")}).to.throw(Error, "EncodingError U+7DDF");
r = r && ([...ms932Encoder.encode("締緡")].join(",") === "146,247,227,109"); // U+7DE0
expect(() => {ms932Encoder.encode("\u7DE2")}).to.throw(Error, "EncodingError U+7DE2");
expect(() => {ms932Encoder.encode("\u7DE3")}).to.throw(Error, "EncodingError U+7DE3");
r = r && ([...ms932Encoder.encode("緤")].join(",") === "227,105"); // U+7DE4
expect(() => {ms932Encoder.encode("\u7DE5")}).to.throw(Error, "EncodingError U+7DE5");
expect(() => {ms932Encoder.encode("\u7DE6")}).to.throw(Error, "EncodingError U+7DE6");
expect(() => {ms932Encoder.encode("\u7DE7")}).to.throw(Error, "EncodingError U+7DE7");
r = r && ([...ms932Encoder.encode("編緩")].join(",") === "149,210,138,201"); // U+7DE8
expect(() => {ms932Encoder.encode("\u7DEA")}).to.throw(Error, "EncodingError U+7DEA");
expect(() => {ms932Encoder.encode("\u7DEB")}).to.throw(Error, "EncodingError U+7DEB");
r = r && ([...ms932Encoder.encode("緬")].join(",") === "150,201"); // U+7DEC
expect(() => {ms932Encoder.encode("\u7DED")}).to.throw(Error, "EncodingError U+7DED");
expect(() => {ms932Encoder.encode("\u7DEE")}).to.throw(Error, "EncodingError U+7DEE");
r = r && ([...ms932Encoder.encode("緯")].join(",") === "136,220"); // U+7DEF
expect(() => {ms932Encoder.encode("\u7DF0")}).to.throw(Error, "EncodingError U+7DF0");
expect(() => {ms932Encoder.encode("\u7DF1")}).to.throw(Error, "EncodingError U+7DF1");
r = r && ([...ms932Encoder.encode("緲")].join(",") === "227,108"); // U+7DF2
expect(() => {ms932Encoder.encode("\u7DF3")}).to.throw(Error, "EncodingError U+7DF3");
r = r && ([...ms932Encoder.encode("練")].join(",") === "151,251"); // U+7DF4
expect(() => {ms932Encoder.encode("\u7DF5")}).to.throw(Error, "EncodingError U+7DF5");
expect(() => {ms932Encoder.encode("\u7DF6")}).to.throw(Error, "EncodingError U+7DF6");
expect(() => {ms932Encoder.encode("\u7DF7")}).to.throw(Error, "EncodingError U+7DF7");
expect(() => {ms932Encoder.encode("\u7DF8")}).to.throw(Error, "EncodingError U+7DF8");
expect(() => {ms932Encoder.encode("\u7DF9")}).to.throw(Error, "EncodingError U+7DF9");
expect(() => {ms932Encoder.encode("\u7DFA")}).to.throw(Error, "EncodingError U+7DFA");
r = r && ([...ms932Encoder.encode("緻")].join(",") === "227,107"); // U+7DFB
expect(() => {ms932Encoder.encode("\u7DFC")}).to.throw(Error, "EncodingError U+7DFC");
expect(() => {ms932Encoder.encode("\u7DFD")}).to.throw(Error, "EncodingError U+7DFD");
expect(() => {ms932Encoder.encode("\u7DFE")}).to.throw(Error, "EncodingError U+7DFE");
expect(() => {ms932Encoder.encode("\u7DFF")}).to.throw(Error, "EncodingError U+7DFF");
expect(() => {ms932Encoder.encode("\u7E00")}).to.throw(Error, "EncodingError U+7E00");
r = r && ([...ms932Encoder.encode("縁")].join(",") === "137,143"); // U+7E01
expect(() => {ms932Encoder.encode("\u7E02")}).to.throw(Error, "EncodingError U+7E02");
expect(() => {ms932Encoder.encode("\u7E03")}).to.throw(Error, "EncodingError U+7E03");
r = r && ([...ms932Encoder.encode("縄縅")].join(",") === "147,234,227,110"); // U+7E04
expect(() => {ms932Encoder.encode("\u7E06")}).to.throw(Error, "EncodingError U+7E06");
expect(() => {ms932Encoder.encode("\u7E07")}).to.throw(Error, "EncodingError U+7E07");
expect(() => {ms932Encoder.encode("\u7E08")}).to.throw(Error, "EncodingError U+7E08");
r = r && ([...ms932Encoder.encode("縉縊縋")].join(",") === "227,117,227,111,227,118"); // U+7E09
expect(() => {ms932Encoder.encode("\u7E0C")}).to.throw(Error, "EncodingError U+7E0C");
expect(() => {ms932Encoder.encode("\u7E0D")}).to.throw(Error, "EncodingError U+7E0D");
expect(() => {ms932Encoder.encode("\u7E0E")}).to.throw(Error, "EncodingError U+7E0E");
expect(() => {ms932Encoder.encode("\u7E0F")}).to.throw(Error, "EncodingError U+7E0F");
expect(() => {ms932Encoder.encode("\u7E10")}).to.throw(Error, "EncodingError U+7E10");
expect(() => {ms932Encoder.encode("\u7E11")}).to.throw(Error, "EncodingError U+7E11");
r = r && ([...ms932Encoder.encode("縒")].join(",") === "227,114"); // U+7E12
expect(() => {ms932Encoder.encode("\u7E13")}).to.throw(Error, "EncodingError U+7E13");
expect(() => {ms932Encoder.encode("\u7E14")}).to.throw(Error, "EncodingError U+7E14");
expect(() => {ms932Encoder.encode("\u7E15")}).to.throw(Error, "EncodingError U+7E15");
expect(() => {ms932Encoder.encode("\u7E16")}).to.throw(Error, "EncodingError U+7E16");
expect(() => {ms932Encoder.encode("\u7E17")}).to.throw(Error, "EncodingError U+7E17");
expect(() => {ms932Encoder.encode("\u7E18")}).to.throw(Error, "EncodingError U+7E18");
expect(() => {ms932Encoder.encode("\u7E19")}).to.throw(Error, "EncodingError U+7E19");
expect(() => {ms932Encoder.encode("\u7E1A")}).to.throw(Error, "EncodingError U+7E1A");
r = r && ([...ms932Encoder.encode("縛")].join(",") === "148,155"); // U+7E1B
expect(() => {ms932Encoder.encode("\u7E1C")}).to.throw(Error, "EncodingError U+7E1C");
expect(() => {ms932Encoder.encode("\u7E1D")}).to.throw(Error, "EncodingError U+7E1D");
r = r && ([...ms932Encoder.encode("縞縟")].join(",") === "142,200,227,116"); // U+7E1E
expect(() => {ms932Encoder.encode("\u7E20")}).to.throw(Error, "EncodingError U+7E20");
r = r && ([...ms932Encoder.encode("縡縢縣")].join(",") === "227,113,227,119,227,112"); // U+7E21
expect(() => {ms932Encoder.encode("\u7E24")}).to.throw(Error, "EncodingError U+7E24");
expect(() => {ms932Encoder.encode("\u7E25")}).to.throw(Error, "EncodingError U+7E25");
r = r && ([...ms932Encoder.encode("縦")].join(",") === "143,99"); // U+7E26
expect(() => {ms932Encoder.encode("\u7E27")}).to.throw(Error, "EncodingError U+7E27");
expect(() => {ms932Encoder.encode("\u7E28")}).to.throw(Error, "EncodingError U+7E28");
expect(() => {ms932Encoder.encode("\u7E29")}).to.throw(Error, "EncodingError U+7E29");
expect(() => {ms932Encoder.encode("\u7E2A")}).to.throw(Error, "EncodingError U+7E2A");
r = r && ([...ms932Encoder.encode("縫")].join(",") === "150,68"); // U+7E2B
expect(() => {ms932Encoder.encode("\u7E2C")}).to.throw(Error, "EncodingError U+7E2C");
expect(() => {ms932Encoder.encode("\u7E2D")}).to.throw(Error, "EncodingError U+7E2D");
r = r && ([...ms932Encoder.encode("縮")].join(",") === "143,107"); // U+7E2E
expect(() => {ms932Encoder.encode("\u7E2F")}).to.throw(Error, "EncodingError U+7E2F");
expect(() => {ms932Encoder.encode("\u7E30")}).to.throw(Error, "EncodingError U+7E30");
r = r && ([...ms932Encoder.encode("縱縲")].join(",") === "227,115,227,128"); // U+7E31
expect(() => {ms932Encoder.encode("\u7E33")}).to.throw(Error, "EncodingError U+7E33");
expect(() => {ms932Encoder.encode("\u7E34")}).to.throw(Error, "EncodingError U+7E34");
r = r && ([...ms932Encoder.encode("縵")].join(",") === "227,123"); // U+7E35
expect(() => {ms932Encoder.encode("\u7E36")}).to.throw(Error, "EncodingError U+7E36");
r = r && ([...ms932Encoder.encode("縷")].join(",") === "227,126"); // U+7E37
expect(() => {ms932Encoder.encode("\u7E38")}).to.throw(Error, "EncodingError U+7E38");
r = r && ([...ms932Encoder.encode("縹縺縻")].join(",") === "227,124,227,129,227,122"); // U+7E39
expect(() => {ms932Encoder.encode("\u7E3C")}).to.throw(Error, "EncodingError U+7E3C");
r = r && ([...ms932Encoder.encode("總績")].join(",") === "227,96,144,209"); // U+7E3D
expect(() => {ms932Encoder.encode("\u7E3F")}).to.throw(Error, "EncodingError U+7E3F");
expect(() => {ms932Encoder.encode("\u7E40")}).to.throw(Error, "EncodingError U+7E40");
r = r && ([...ms932Encoder.encode("繁")].join(",") === "148,201"); // U+7E41
expect(() => {ms932Encoder.encode("\u7E42")}).to.throw(Error, "EncodingError U+7E42");
r = r && ([...ms932Encoder.encode("繃")].join(",") === "227,125"); // U+7E43
expect(() => {ms932Encoder.encode("\u7E44")}).to.throw(Error, "EncodingError U+7E44");
expect(() => {ms932Encoder.encode("\u7E45")}).to.throw(Error, "EncodingError U+7E45");
r = r && ([...ms932Encoder.encode("繆")].join(",") === "227,120"); // U+7E46
expect(() => {ms932Encoder.encode("\u7E47")}).to.throw(Error, "EncodingError U+7E47");
expect(() => {ms932Encoder.encode("\u7E48")}).to.throw(Error, "EncodingError U+7E48");
expect(() => {ms932Encoder.encode("\u7E49")}).to.throw(Error, "EncodingError U+7E49");
r = r && ([...ms932Encoder.encode("繊繋")].join(",") === "145,64,140,113"); // U+7E4A
expect(() => {ms932Encoder.encode("\u7E4C")}).to.throw(Error, "EncodingError U+7E4C");
r = r && ([...ms932Encoder.encode("繍")].join(",") === "143,74"); // U+7E4D
expect(() => {ms932Encoder.encode("\u7E4E")}).to.throw(Error, "EncodingError U+7E4E");
expect(() => {ms932Encoder.encode("\u7E4F")}).to.throw(Error, "EncodingError U+7E4F");
expect(() => {ms932Encoder.encode("\u7E50")}).to.throw(Error, "EncodingError U+7E50");
expect(() => {ms932Encoder.encode("\u7E51")}).to.throw(Error, "EncodingError U+7E51");
r = r && ([...ms932Encoder.encode("繒")].join(",") === "251,143"); // U+7E52
expect(() => {ms932Encoder.encode("\u7E53")}).to.throw(Error, "EncodingError U+7E53");
r = r && ([...ms932Encoder.encode("織繕繖")].join(",") === "144,68,145,85,227,132"); // U+7E54
expect(() => {ms932Encoder.encode("\u7E57")}).to.throw(Error, "EncodingError U+7E57");
expect(() => {ms932Encoder.encode("\u7E58")}).to.throw(Error, "EncodingError U+7E58");
r = r && ([...ms932Encoder.encode("繙繚")].join(",") === "227,134,227,135"); // U+7E59
expect(() => {ms932Encoder.encode("\u7E5B")}).to.throw(Error, "EncodingError U+7E5B");
expect(() => {ms932Encoder.encode("\u7E5C")}).to.throw(Error, "EncodingError U+7E5C");
r = r && ([...ms932Encoder.encode("繝繞")].join(",") === "227,131,227,133"); // U+7E5D
expect(() => {ms932Encoder.encode("\u7E5F")}).to.throw(Error, "EncodingError U+7E5F");
expect(() => {ms932Encoder.encode("\u7E60")}).to.throw(Error, "EncodingError U+7E60");
expect(() => {ms932Encoder.encode("\u7E61")}).to.throw(Error, "EncodingError U+7E61");
expect(() => {ms932Encoder.encode("\u7E62")}).to.throw(Error, "EncodingError U+7E62");
expect(() => {ms932Encoder.encode("\u7E63")}).to.throw(Error, "EncodingError U+7E63");
expect(() => {ms932Encoder.encode("\u7E64")}).to.throw(Error, "EncodingError U+7E64");
expect(() => {ms932Encoder.encode("\u7E65")}).to.throw(Error, "EncodingError U+7E65");
r = r && ([...ms932Encoder.encode("繦繧")].join(",") === "227,121,227,130"); // U+7E66
expect(() => {ms932Encoder.encode("\u7E68")}).to.throw(Error, "EncodingError U+7E68");
r = r && ([...ms932Encoder.encode("繩繪")].join(",") === "227,138,227,137"); // U+7E69
expect(() => {ms932Encoder.encode("\u7E6B")}).to.throw(Error, "EncodingError U+7E6B");
expect(() => {ms932Encoder.encode("\u7E6C")}).to.throw(Error, "EncodingError U+7E6C");
r = r && ([...ms932Encoder.encode("繭")].join(",") === "150,154"); // U+7E6D
expect(() => {ms932Encoder.encode("\u7E6E")}).to.throw(Error, "EncodingError U+7E6E");
expect(() => {ms932Encoder.encode("\u7E6F")}).to.throw(Error, "EncodingError U+7E6F");
r = r && ([...ms932Encoder.encode("繰")].join(",") === "140,74"); // U+7E70
expect(() => {ms932Encoder.encode("\u7E71")}).to.throw(Error, "EncodingError U+7E71");
expect(() => {ms932Encoder.encode("\u7E72")}).to.throw(Error, "EncodingError U+7E72");
expect(() => {ms932Encoder.encode("\u7E73")}).to.throw(Error, "EncodingError U+7E73");
expect(() => {ms932Encoder.encode("\u7E74")}).to.throw(Error, "EncodingError U+7E74");
expect(() => {ms932Encoder.encode("\u7E75")}).to.throw(Error, "EncodingError U+7E75");
expect(() => {ms932Encoder.encode("\u7E76")}).to.throw(Error, "EncodingError U+7E76");
expect(() => {ms932Encoder.encode("\u7E77")}).to.throw(Error, "EncodingError U+7E77");
expect(() => {ms932Encoder.encode("\u7E78")}).to.throw(Error, "EncodingError U+7E78");
r = r && ([...ms932Encoder.encode("繹")].join(",") === "227,136"); // U+7E79
expect(() => {ms932Encoder.encode("\u7E7A")}).to.throw(Error, "EncodingError U+7E7A");
r = r && ([...ms932Encoder.encode("繻繼繽")].join(",") === "227,140,227,139,227,143"); // U+7E7B
expect(() => {ms932Encoder.encode("\u7E7E")}).to.throw(Error, "EncodingError U+7E7E");
r = r && ([...ms932Encoder.encode("繿")].join(",") === "227,145"); // U+7E7F
expect(() => {ms932Encoder.encode("\u7E80")}).to.throw(Error, "EncodingError U+7E80");
expect(() => {ms932Encoder.encode("\u7E81")}).to.throw(Error, "EncodingError U+7E81");
r = r && ([...ms932Encoder.encode("纂纃")].join(",") === "142,91,227,141"); // U+7E82
expect(() => {ms932Encoder.encode("\u7E84")}).to.throw(Error, "EncodingError U+7E84");
expect(() => {ms932Encoder.encode("\u7E85")}).to.throw(Error, "EncodingError U+7E85");
expect(() => {ms932Encoder.encode("\u7E86")}).to.throw(Error, "EncodingError U+7E86");
expect(() => {ms932Encoder.encode("\u7E87")}).to.throw(Error, "EncodingError U+7E87");
r = r && ([...ms932Encoder.encode("纈纉纊")].join(",") === "227,146,227,147,250,92"); // U+7E88
expect(() => {ms932Encoder.encode("\u7E8B")}).to.throw(Error, "EncodingError U+7E8B");
r = r && ([...ms932Encoder.encode("續")].join(",") === "227,148"); // U+7E8C
expect(() => {ms932Encoder.encode("\u7E8D")}).to.throw(Error, "EncodingError U+7E8D");
r = r && ([...ms932Encoder.encode("纎纏纐")].join(",") === "227,154,147,90,227,150"); // U+7E8E
expect(() => {ms932Encoder.encode("\u7E91")}).to.throw(Error, "EncodingError U+7E91");
r = r && ([...ms932Encoder.encode("纒纓纔")].join(",") === "227,149,227,151,227,152"); // U+7E92
expect(() => {ms932Encoder.encode("\u7E95")}).to.throw(Error, "EncodingError U+7E95");
r = r && ([...ms932Encoder.encode("纖")].join(",") === "227,153"); // U+7E96
expect(() => {ms932Encoder.encode("\u7E97")}).to.throw(Error, "EncodingError U+7E97");
expect(() => {ms932Encoder.encode("\u7E98")}).to.throw(Error, "EncodingError U+7E98");
expect(() => {ms932Encoder.encode("\u7E99")}).to.throw(Error, "EncodingError U+7E99");
expect(() => {ms932Encoder.encode("\u7E9A")}).to.throw(Error, "EncodingError U+7E9A");
r = r && ([...ms932Encoder.encode("纛纜")].join(",") === "227,155,227,156"); // U+7E9B
expect(() => {ms932Encoder.encode("\u7E9D")}).to.throw(Error, "EncodingError U+7E9D");
expect(() => {ms932Encoder.encode("\u7E9E")}).to.throw(Error, "EncodingError U+7E9E");
expect(() => {ms932Encoder.encode("\u7E9F")}).to.throw(Error, "EncodingError U+7E9F");
expect(() => {ms932Encoder.encode("\u7EA0")}).to.throw(Error, "EncodingError U+7EA0");
expect(() => {ms932Encoder.encode("\u7EA1")}).to.throw(Error, "EncodingError U+7EA1");
expect(() => {ms932Encoder.encode("\u7EA2")}).to.throw(Error, "EncodingError U+7EA2");
expect(() => {ms932Encoder.encode("\u7EA3")}).to.throw(Error, "EncodingError U+7EA3");
expect(() => {ms932Encoder.encode("\u7EA4")}).to.throw(Error, "EncodingError U+7EA4");
expect(() => {ms932Encoder.encode("\u7EA5")}).to.throw(Error, "EncodingError U+7EA5");
expect(() => {ms932Encoder.encode("\u7EA6")}).to.throw(Error, "EncodingError U+7EA6");
expect(() => {ms932Encoder.encode("\u7EA7")}).to.throw(Error, "EncodingError U+7EA7");
expect(() => {ms932Encoder.encode("\u7EA8")}).to.throw(Error, "EncodingError U+7EA8");
expect(() => {ms932Encoder.encode("\u7EA9")}).to.throw(Error, "EncodingError U+7EA9");
expect(() => {ms932Encoder.encode("\u7EAA")}).to.throw(Error, "EncodingError U+7EAA");
expect(() => {ms932Encoder.encode("\u7EAB")}).to.throw(Error, "EncodingError U+7EAB");
expect(() => {ms932Encoder.encode("\u7EAC")}).to.throw(Error, "EncodingError U+7EAC");
expect(() => {ms932Encoder.encode("\u7EAD")}).to.throw(Error, "EncodingError U+7EAD");
expect(() => {ms932Encoder.encode("\u7EAE")}).to.throw(Error, "EncodingError U+7EAE");
expect(() => {ms932Encoder.encode("\u7EAF")}).to.throw(Error, "EncodingError U+7EAF");
expect(() => {ms932Encoder.encode("\u7EB0")}).to.throw(Error, "EncodingError U+7EB0");
expect(() => {ms932Encoder.encode("\u7EB1")}).to.throw(Error, "EncodingError U+7EB1");
expect(() => {ms932Encoder.encode("\u7EB2")}).to.throw(Error, "EncodingError U+7EB2");
expect(() => {ms932Encoder.encode("\u7EB3")}).to.throw(Error, "EncodingError U+7EB3");
expect(() => {ms932Encoder.encode("\u7EB4")}).to.throw(Error, "EncodingError U+7EB4");
expect(() => {ms932Encoder.encode("\u7EB5")}).to.throw(Error, "EncodingError U+7EB5");
expect(() => {ms932Encoder.encode("\u7EB6")}).to.throw(Error, "EncodingError U+7EB6");
expect(() => {ms932Encoder.encode("\u7EB7")}).to.throw(Error, "EncodingError U+7EB7");
expect(() => {ms932Encoder.encode("\u7EB8")}).to.throw(Error, "EncodingError U+7EB8");
expect(() => {ms932Encoder.encode("\u7EB9")}).to.throw(Error, "EncodingError U+7EB9");
expect(() => {ms932Encoder.encode("\u7EBA")}).to.throw(Error, "EncodingError U+7EBA");
expect(() => {ms932Encoder.encode("\u7EBB")}).to.throw(Error, "EncodingError U+7EBB");
expect(() => {ms932Encoder.encode("\u7EBC")}).to.throw(Error, "EncodingError U+7EBC");
expect(() => {ms932Encoder.encode("\u7EBD")}).to.throw(Error, "EncodingError U+7EBD");
expect(() => {ms932Encoder.encode("\u7EBE")}).to.throw(Error, "EncodingError U+7EBE");
expect(() => {ms932Encoder.encode("\u7EBF")}).to.throw(Error, "EncodingError U+7EBF");
expect(() => {ms932Encoder.encode("\u7EC0")}).to.throw(Error, "EncodingError U+7EC0");
expect(() => {ms932Encoder.encode("\u7EC1")}).to.throw(Error, "EncodingError U+7EC1");
expect(() => {ms932Encoder.encode("\u7EC2")}).to.throw(Error, "EncodingError U+7EC2");
expect(() => {ms932Encoder.encode("\u7EC3")}).to.throw(Error, "EncodingError U+7EC3");
expect(() => {ms932Encoder.encode("\u7EC4")}).to.throw(Error, "EncodingError U+7EC4");
expect(() => {ms932Encoder.encode("\u7EC5")}).to.throw(Error, "EncodingError U+7EC5");
expect(() => {ms932Encoder.encode("\u7EC6")}).to.throw(Error, "EncodingError U+7EC6");
expect(() => {ms932Encoder.encode("\u7EC7")}).to.throw(Error, "EncodingError U+7EC7");
expect(() => {ms932Encoder.encode("\u7EC8")}).to.throw(Error, "EncodingError U+7EC8");
expect(() => {ms932Encoder.encode("\u7EC9")}).to.throw(Error, "EncodingError U+7EC9");
expect(() => {ms932Encoder.encode("\u7ECA")}).to.throw(Error, "EncodingError U+7ECA");
expect(() => {ms932Encoder.encode("\u7ECB")}).to.throw(Error, "EncodingError U+7ECB");
expect(() => {ms932Encoder.encode("\u7ECC")}).to.throw(Error, "EncodingError U+7ECC");
expect(() => {ms932Encoder.encode("\u7ECD")}).to.throw(Error, "EncodingError U+7ECD");
expect(() => {ms932Encoder.encode("\u7ECE")}).to.throw(Error, "EncodingError U+7ECE");
expect(() => {ms932Encoder.encode("\u7ECF")}).to.throw(Error, "EncodingError U+7ECF");
expect(() => {ms932Encoder.encode("\u7ED0")}).to.throw(Error, "EncodingError U+7ED0");
expect(() => {ms932Encoder.encode("\u7ED1")}).to.throw(Error, "EncodingError U+7ED1");
expect(() => {ms932Encoder.encode("\u7ED2")}).to.throw(Error, "EncodingError U+7ED2");
expect(() => {ms932Encoder.encode("\u7ED3")}).to.throw(Error, "EncodingError U+7ED3");
expect(() => {ms932Encoder.encode("\u7ED4")}).to.throw(Error, "EncodingError U+7ED4");
expect(() => {ms932Encoder.encode("\u7ED5")}).to.throw(Error, "EncodingError U+7ED5");
expect(() => {ms932Encoder.encode("\u7ED6")}).to.throw(Error, "EncodingError U+7ED6");
expect(() => {ms932Encoder.encode("\u7ED7")}).to.throw(Error, "EncodingError U+7ED7");
expect(() => {ms932Encoder.encode("\u7ED8")}).to.throw(Error, "EncodingError U+7ED8");
expect(() => {ms932Encoder.encode("\u7ED9")}).to.throw(Error, "EncodingError U+7ED9");
expect(() => {ms932Encoder.encode("\u7EDA")}).to.throw(Error, "EncodingError U+7EDA");
expect(() => {ms932Encoder.encode("\u7EDB")}).to.throw(Error, "EncodingError U+7EDB");
expect(() => {ms932Encoder.encode("\u7EDC")}).to.throw(Error, "EncodingError U+7EDC");
expect(() => {ms932Encoder.encode("\u7EDD")}).to.throw(Error, "EncodingError U+7EDD");
expect(() => {ms932Encoder.encode("\u7EDE")}).to.throw(Error, "EncodingError U+7EDE");
expect(() => {ms932Encoder.encode("\u7EDF")}).to.throw(Error, "EncodingError U+7EDF");
expect(() => {ms932Encoder.encode("\u7EE0")}).to.throw(Error, "EncodingError U+7EE0");
expect(() => {ms932Encoder.encode("\u7EE1")}).to.throw(Error, "EncodingError U+7EE1");
expect(() => {ms932Encoder.encode("\u7EE2")}).to.throw(Error, "EncodingError U+7EE2");
expect(() => {ms932Encoder.encode("\u7EE3")}).to.throw(Error, "EncodingError U+7EE3");
expect(() => {ms932Encoder.encode("\u7EE4")}).to.throw(Error, "EncodingError U+7EE4");
expect(() => {ms932Encoder.encode("\u7EE5")}).to.throw(Error, "EncodingError U+7EE5");
expect(() => {ms932Encoder.encode("\u7EE6")}).to.throw(Error, "EncodingError U+7EE6");
expect(() => {ms932Encoder.encode("\u7EE7")}).to.throw(Error, "EncodingError U+7EE7");
expect(() => {ms932Encoder.encode("\u7EE8")}).to.throw(Error, "EncodingError U+7EE8");
expect(() => {ms932Encoder.encode("\u7EE9")}).to.throw(Error, "EncodingError U+7EE9");
expect(() => {ms932Encoder.encode("\u7EEA")}).to.throw(Error, "EncodingError U+7EEA");
expect(() => {ms932Encoder.encode("\u7EEB")}).to.throw(Error, "EncodingError U+7EEB");
expect(() => {ms932Encoder.encode("\u7EEC")}).to.throw(Error, "EncodingError U+7EEC");
expect(() => {ms932Encoder.encode("\u7EED")}).to.throw(Error, "EncodingError U+7EED");
expect(() => {ms932Encoder.encode("\u7EEE")}).to.throw(Error, "EncodingError U+7EEE");
expect(() => {ms932Encoder.encode("\u7EEF")}).to.throw(Error, "EncodingError U+7EEF");
expect(() => {ms932Encoder.encode("\u7EF0")}).to.throw(Error, "EncodingError U+7EF0");
expect(() => {ms932Encoder.encode("\u7EF1")}).to.throw(Error, "EncodingError U+7EF1");
expect(() => {ms932Encoder.encode("\u7EF2")}).to.throw(Error, "EncodingError U+7EF2");
expect(() => {ms932Encoder.encode("\u7EF3")}).to.throw(Error, "EncodingError U+7EF3");
expect(() => {ms932Encoder.encode("\u7EF4")}).to.throw(Error, "EncodingError U+7EF4");
expect(() => {ms932Encoder.encode("\u7EF5")}).to.throw(Error, "EncodingError U+7EF5");
expect(() => {ms932Encoder.encode("\u7EF6")}).to.throw(Error, "EncodingError U+7EF6");
expect(() => {ms932Encoder.encode("\u7EF7")}).to.throw(Error, "EncodingError U+7EF7");
expect(() => {ms932Encoder.encode("\u7EF8")}).to.throw(Error, "EncodingError U+7EF8");
expect(() => {ms932Encoder.encode("\u7EF9")}).to.throw(Error, "EncodingError U+7EF9");
expect(() => {ms932Encoder.encode("\u7EFA")}).to.throw(Error, "EncodingError U+7EFA");
expect(() => {ms932Encoder.encode("\u7EFB")}).to.throw(Error, "EncodingError U+7EFB");
expect(() => {ms932Encoder.encode("\u7EFC")}).to.throw(Error, "EncodingError U+7EFC");
expect(() => {ms932Encoder.encode("\u7EFD")}).to.throw(Error, "EncodingError U+7EFD");
expect(() => {ms932Encoder.encode("\u7EFE")}).to.throw(Error, "EncodingError U+7EFE");
expect(() => {ms932Encoder.encode("\u7EFF")}).to.throw(Error, "EncodingError U+7EFF");
expect(() => {ms932Encoder.encode("\u7F00")}).to.throw(Error, "EncodingError U+7F00");
expect(() => {ms932Encoder.encode("\u7F01")}).to.throw(Error, "EncodingError U+7F01");
expect(() => {ms932Encoder.encode("\u7F02")}).to.throw(Error, "EncodingError U+7F02");
expect(() => {ms932Encoder.encode("\u7F03")}).to.throw(Error, "EncodingError U+7F03");
expect(() => {ms932Encoder.encode("\u7F04")}).to.throw(Error, "EncodingError U+7F04");
expect(() => {ms932Encoder.encode("\u7F05")}).to.throw(Error, "EncodingError U+7F05");
expect(() => {ms932Encoder.encode("\u7F06")}).to.throw(Error, "EncodingError U+7F06");
expect(() => {ms932Encoder.encode("\u7F07")}).to.throw(Error, "EncodingError U+7F07");
expect(() => {ms932Encoder.encode("\u7F08")}).to.throw(Error, "EncodingError U+7F08");
expect(() => {ms932Encoder.encode("\u7F09")}).to.throw(Error, "EncodingError U+7F09");
expect(() => {ms932Encoder.encode("\u7F0A")}).to.throw(Error, "EncodingError U+7F0A");
expect(() => {ms932Encoder.encode("\u7F0B")}).to.throw(Error, "EncodingError U+7F0B");
expect(() => {ms932Encoder.encode("\u7F0C")}).to.throw(Error, "EncodingError U+7F0C");
expect(() => {ms932Encoder.encode("\u7F0D")}).to.throw(Error, "EncodingError U+7F0D");
expect(() => {ms932Encoder.encode("\u7F0E")}).to.throw(Error, "EncodingError U+7F0E");
expect(() => {ms932Encoder.encode("\u7F0F")}).to.throw(Error, "EncodingError U+7F0F");
expect(() => {ms932Encoder.encode("\u7F10")}).to.throw(Error, "EncodingError U+7F10");
expect(() => {ms932Encoder.encode("\u7F11")}).to.throw(Error, "EncodingError U+7F11");
expect(() => {ms932Encoder.encode("\u7F12")}).to.throw(Error, "EncodingError U+7F12");
expect(() => {ms932Encoder.encode("\u7F13")}).to.throw(Error, "EncodingError U+7F13");
expect(() => {ms932Encoder.encode("\u7F14")}).to.throw(Error, "EncodingError U+7F14");
expect(() => {ms932Encoder.encode("\u7F15")}).to.throw(Error, "EncodingError U+7F15");
expect(() => {ms932Encoder.encode("\u7F16")}).to.throw(Error, "EncodingError U+7F16");
expect(() => {ms932Encoder.encode("\u7F17")}).to.throw(Error, "EncodingError U+7F17");
expect(() => {ms932Encoder.encode("\u7F18")}).to.throw(Error, "EncodingError U+7F18");
expect(() => {ms932Encoder.encode("\u7F19")}).to.throw(Error, "EncodingError U+7F19");
expect(() => {ms932Encoder.encode("\u7F1A")}).to.throw(Error, "EncodingError U+7F1A");
expect(() => {ms932Encoder.encode("\u7F1B")}).to.throw(Error, "EncodingError U+7F1B");
expect(() => {ms932Encoder.encode("\u7F1C")}).to.throw(Error, "EncodingError U+7F1C");
expect(() => {ms932Encoder.encode("\u7F1D")}).to.throw(Error, "EncodingError U+7F1D");
expect(() => {ms932Encoder.encode("\u7F1E")}).to.throw(Error, "EncodingError U+7F1E");
expect(() => {ms932Encoder.encode("\u7F1F")}).to.throw(Error, "EncodingError U+7F1F");
expect(() => {ms932Encoder.encode("\u7F20")}).to.throw(Error, "EncodingError U+7F20");
expect(() => {ms932Encoder.encode("\u7F21")}).to.throw(Error, "EncodingError U+7F21");
expect(() => {ms932Encoder.encode("\u7F22")}).to.throw(Error, "EncodingError U+7F22");
expect(() => {ms932Encoder.encode("\u7F23")}).to.throw(Error, "EncodingError U+7F23");
expect(() => {ms932Encoder.encode("\u7F24")}).to.throw(Error, "EncodingError U+7F24");
expect(() => {ms932Encoder.encode("\u7F25")}).to.throw(Error, "EncodingError U+7F25");
expect(() => {ms932Encoder.encode("\u7F26")}).to.throw(Error, "EncodingError U+7F26");
expect(() => {ms932Encoder.encode("\u7F27")}).to.throw(Error, "EncodingError U+7F27");
expect(() => {ms932Encoder.encode("\u7F28")}).to.throw(Error, "EncodingError U+7F28");
expect(() => {ms932Encoder.encode("\u7F29")}).to.throw(Error, "EncodingError U+7F29");
expect(() => {ms932Encoder.encode("\u7F2A")}).to.throw(Error, "EncodingError U+7F2A");
expect(() => {ms932Encoder.encode("\u7F2B")}).to.throw(Error, "EncodingError U+7F2B");
expect(() => {ms932Encoder.encode("\u7F2C")}).to.throw(Error, "EncodingError U+7F2C");
expect(() => {ms932Encoder.encode("\u7F2D")}).to.throw(Error, "EncodingError U+7F2D");
expect(() => {ms932Encoder.encode("\u7F2E")}).to.throw(Error, "EncodingError U+7F2E");
expect(() => {ms932Encoder.encode("\u7F2F")}).to.throw(Error, "EncodingError U+7F2F");
expect(() => {ms932Encoder.encode("\u7F30")}).to.throw(Error, "EncodingError U+7F30");
expect(() => {ms932Encoder.encode("\u7F31")}).to.throw(Error, "EncodingError U+7F31");
expect(() => {ms932Encoder.encode("\u7F32")}).to.throw(Error, "EncodingError U+7F32");
expect(() => {ms932Encoder.encode("\u7F33")}).to.throw(Error, "EncodingError U+7F33");
expect(() => {ms932Encoder.encode("\u7F34")}).to.throw(Error, "EncodingError U+7F34");
expect(() => {ms932Encoder.encode("\u7F35")}).to.throw(Error, "EncodingError U+7F35");
r = r && ([...ms932Encoder.encode("缶")].join(",") === "138,202"); // U+7F36
expect(() => {ms932Encoder.encode("\u7F37")}).to.throw(Error, "EncodingError U+7F37");
r = r && ([...ms932Encoder.encode("缸")].join(",") === "227,157"); // U+7F38
expect(() => {ms932Encoder.encode("\u7F39")}).to.throw(Error, "EncodingError U+7F39");
r = r && ([...ms932Encoder.encode("缺")].join(",") === "227,158"); // U+7F3A
expect(() => {ms932Encoder.encode("\u7F3B")}).to.throw(Error, "EncodingError U+7F3B");
expect(() => {ms932Encoder.encode("\u7F3C")}).to.throw(Error, "EncodingError U+7F3C");
expect(() => {ms932Encoder.encode("\u7F3D")}).to.throw(Error, "EncodingError U+7F3D");
expect(() => {ms932Encoder.encode("\u7F3E")}).to.throw(Error, "EncodingError U+7F3E");
expect(() => {ms932Encoder.encode("\u7F3F")}).to.throw(Error, "EncodingError U+7F3F");
expect(() => {ms932Encoder.encode("\u7F40")}).to.throw(Error, "EncodingError U+7F40");
expect(() => {ms932Encoder.encode("\u7F41")}).to.throw(Error, "EncodingError U+7F41");
expect(() => {ms932Encoder.encode("\u7F42")}).to.throw(Error, "EncodingError U+7F42");
expect(() => {ms932Encoder.encode("\u7F43")}).to.throw(Error, "EncodingError U+7F43");
expect(() => {ms932Encoder.encode("\u7F44")}).to.throw(Error, "EncodingError U+7F44");
r = r && ([...ms932Encoder.encode("罅")].join(",") === "227,159"); // U+7F45
expect(() => {ms932Encoder.encode("\u7F46")}).to.throw(Error, "EncodingError U+7F46");
r = r && ([...ms932Encoder.encode("罇")].join(",") === "251,144"); // U+7F47
expect(() => {ms932Encoder.encode("\u7F48")}).to.throw(Error, "EncodingError U+7F48");
expect(() => {ms932Encoder.encode("\u7F49")}).to.throw(Error, "EncodingError U+7F49");
expect(() => {ms932Encoder.encode("\u7F4A")}).to.throw(Error, "EncodingError U+7F4A");
expect(() => {ms932Encoder.encode("\u7F4B")}).to.throw(Error, "EncodingError U+7F4B");
r = r && ([...ms932Encoder.encode("罌罍罎")].join(",") === "227,160,227,161,227,162"); // U+7F4C
expect(() => {ms932Encoder.encode("\u7F4F")}).to.throw(Error, "EncodingError U+7F4F");
r = r && ([...ms932Encoder.encode("罐网")].join(",") === "227,163,227,164"); // U+7F50
expect(() => {ms932Encoder.encode("\u7F52")}).to.throw(Error, "EncodingError U+7F52");
expect(() => {ms932Encoder.encode("\u7F53")}).to.throw(Error, "EncodingError U+7F53");
r = r && ([...ms932Encoder.encode("罔罕")].join(",") === "227,166,227,165"); // U+7F54
expect(() => {ms932Encoder.encode("\u7F56")}).to.throw(Error, "EncodingError U+7F56");
expect(() => {ms932Encoder.encode("\u7F57")}).to.throw(Error, "EncodingError U+7F57");
r = r && ([...ms932Encoder.encode("罘")].join(",") === "227,167"); // U+7F58
expect(() => {ms932Encoder.encode("\u7F59")}).to.throw(Error, "EncodingError U+7F59");
expect(() => {ms932Encoder.encode("\u7F5A")}).to.throw(Error, "EncodingError U+7F5A");
expect(() => {ms932Encoder.encode("\u7F5B")}).to.throw(Error, "EncodingError U+7F5B");
expect(() => {ms932Encoder.encode("\u7F5C")}).to.throw(Error, "EncodingError U+7F5C");
expect(() => {ms932Encoder.encode("\u7F5D")}).to.throw(Error, "EncodingError U+7F5D");
expect(() => {ms932Encoder.encode("\u7F5E")}).to.throw(Error, "EncodingError U+7F5E");
r = r && ([...ms932Encoder.encode("罟罠")].join(",") === "227,168,227,169"); // U+7F5F
expect(() => {ms932Encoder.encode("\u7F61")}).to.throw(Error, "EncodingError U+7F61");
expect(() => {ms932Encoder.encode("\u7F62")}).to.throw(Error, "EncodingError U+7F62");
expect(() => {ms932Encoder.encode("\u7F63")}).to.throw(Error, "EncodingError U+7F63");
expect(() => {ms932Encoder.encode("\u7F64")}).to.throw(Error, "EncodingError U+7F64");
expect(() => {ms932Encoder.encode("\u7F65")}).to.throw(Error, "EncodingError U+7F65");
expect(() => {ms932Encoder.encode("\u7F66")}).to.throw(Error, "EncodingError U+7F66");
r = r && ([...ms932Encoder.encode("罧罨罩罪罫")].join(",") === "227,172,227,170,227,171,141,223,140,114"); // U+7F67
expect(() => {ms932Encoder.encode("\u7F6C")}).to.throw(Error, "EncodingError U+7F6C");
expect(() => {ms932Encoder.encode("\u7F6D")}).to.throw(Error, "EncodingError U+7F6D");
r = r && ([...ms932Encoder.encode("置")].join(",") === "146,117"); // U+7F6E
expect(() => {ms932Encoder.encode("\u7F6F")}).to.throw(Error, "EncodingError U+7F6F");
r = r && ([...ms932Encoder.encode("罰")].join(",") === "148,177"); // U+7F70
expect(() => {ms932Encoder.encode("\u7F71")}).to.throw(Error, "EncodingError U+7F71");
r = r && ([...ms932Encoder.encode("署")].join(",") === "143,144"); // U+7F72
expect(() => {ms932Encoder.encode("\u7F73")}).to.throw(Error, "EncodingError U+7F73");
expect(() => {ms932Encoder.encode("\u7F74")}).to.throw(Error, "EncodingError U+7F74");
r = r && ([...ms932Encoder.encode("罵")].join(",") === "148,108"); // U+7F75
expect(() => {ms932Encoder.encode("\u7F76")}).to.throw(Error, "EncodingError U+7F76");
r = r && ([...ms932Encoder.encode("罷罸罹")].join(",") === "148,235,227,173,156,235"); // U+7F77
expect(() => {ms932Encoder.encode("\u7F7A")}).to.throw(Error, "EncodingError U+7F7A");
expect(() => {ms932Encoder.encode("\u7F7B")}).to.throw(Error, "EncodingError U+7F7B");
expect(() => {ms932Encoder.encode("\u7F7C")}).to.throw(Error, "EncodingError U+7F7C");
expect(() => {ms932Encoder.encode("\u7F7D")}).to.throw(Error, "EncodingError U+7F7D");
expect(() => {ms932Encoder.encode("\u7F7E")}).to.throw(Error, "EncodingError U+7F7E");
expect(() => {ms932Encoder.encode("\u7F7F")}).to.throw(Error, "EncodingError U+7F7F");
expect(() => {ms932Encoder.encode("\u7F80")}).to.throw(Error, "EncodingError U+7F80");
expect(() => {ms932Encoder.encode("\u7F81")}).to.throw(Error, "EncodingError U+7F81");
r = r && ([...ms932Encoder.encode("羂羃")].join(",") === "227,174,227,176"); // U+7F82
expect(() => {ms932Encoder.encode("\u7F84")}).to.throw(Error, "EncodingError U+7F84");
r = r && ([...ms932Encoder.encode("羅羆羇羈")].join(",") === "151,133,227,175,227,178,227,177"); // U+7F85
expect(() => {ms932Encoder.encode("\u7F89")}).to.throw(Error, "EncodingError U+7F89");
r = r && ([...ms932Encoder.encode("羊")].join(",") === "151,114"); // U+7F8A
expect(() => {ms932Encoder.encode("\u7F8B")}).to.throw(Error, "EncodingError U+7F8B");
r = r && ([...ms932Encoder.encode("羌")].join(",") === "227,179"); // U+7F8C
expect(() => {ms932Encoder.encode("\u7F8D")}).to.throw(Error, "EncodingError U+7F8D");
r = r && ([...ms932Encoder.encode("美")].join(",") === "148,252"); // U+7F8E
expect(() => {ms932Encoder.encode("\u7F8F")}).to.throw(Error, "EncodingError U+7F8F");
expect(() => {ms932Encoder.encode("\u7F90")}).to.throw(Error, "EncodingError U+7F90");
expect(() => {ms932Encoder.encode("\u7F91")}).to.throw(Error, "EncodingError U+7F91");
expect(() => {ms932Encoder.encode("\u7F92")}).to.throw(Error, "EncodingError U+7F92");
expect(() => {ms932Encoder.encode("\u7F93")}).to.throw(Error, "EncodingError U+7F93");
r = r && ([...ms932Encoder.encode("羔")].join(",") === "227,180"); // U+7F94
expect(() => {ms932Encoder.encode("\u7F95")}).to.throw(Error, "EncodingError U+7F95");
expect(() => {ms932Encoder.encode("\u7F96")}).to.throw(Error, "EncodingError U+7F96");
expect(() => {ms932Encoder.encode("\u7F97")}).to.throw(Error, "EncodingError U+7F97");
expect(() => {ms932Encoder.encode("\u7F98")}).to.throw(Error, "EncodingError U+7F98");
expect(() => {ms932Encoder.encode("\u7F99")}).to.throw(Error, "EncodingError U+7F99");
r = r && ([...ms932Encoder.encode("羚")].join(",") === "227,183"); // U+7F9A
expect(() => {ms932Encoder.encode("\u7F9B")}).to.throw(Error, "EncodingError U+7F9B");
expect(() => {ms932Encoder.encode("\u7F9C")}).to.throw(Error, "EncodingError U+7F9C");
r = r && ([...ms932Encoder.encode("羝羞")].join(",") === "227,182,227,181"); // U+7F9D
expect(() => {ms932Encoder.encode("\u7F9F")}).to.throw(Error, "EncodingError U+7F9F");
expect(() => {ms932Encoder.encode("\u7FA0")}).to.throw(Error, "EncodingError U+7FA0");
r = r && ([...ms932Encoder.encode("羡")].join(",") === "251,145"); // U+7FA1
expect(() => {ms932Encoder.encode("\u7FA2")}).to.throw(Error, "EncodingError U+7FA2");
r = r && ([...ms932Encoder.encode("羣群")].join(",") === "227,184,140,81"); // U+7FA3
expect(() => {ms932Encoder.encode("\u7FA5")}).to.throw(Error, "EncodingError U+7FA5");
expect(() => {ms932Encoder.encode("\u7FA6")}).to.throw(Error, "EncodingError U+7FA6");
expect(() => {ms932Encoder.encode("\u7FA7")}).to.throw(Error, "EncodingError U+7FA7");
r = r && ([...ms932Encoder.encode("羨義")].join(",") === "145,65,139,96"); // U+7FA8
expect(() => {ms932Encoder.encode("\u7FAA")}).to.throw(Error, "EncodingError U+7FAA");
expect(() => {ms932Encoder.encode("\u7FAB")}).to.throw(Error, "EncodingError U+7FAB");
expect(() => {ms932Encoder.encode("\u7FAC")}).to.throw(Error, "EncodingError U+7FAC");
expect(() => {ms932Encoder.encode("\u7FAD")}).to.throw(Error, "EncodingError U+7FAD");
r = r && ([...ms932Encoder.encode("羮羯")].join(",") === "227,188,227,185"); // U+7FAE
expect(() => {ms932Encoder.encode("\u7FB0")}).to.throw(Error, "EncodingError U+7FB0");
expect(() => {ms932Encoder.encode("\u7FB1")}).to.throw(Error, "EncodingError U+7FB1");
r = r && ([...ms932Encoder.encode("羲")].join(",") === "227,186"); // U+7FB2
expect(() => {ms932Encoder.encode("\u7FB3")}).to.throw(Error, "EncodingError U+7FB3");
expect(() => {ms932Encoder.encode("\u7FB4")}).to.throw(Error, "EncodingError U+7FB4");
expect(() => {ms932Encoder.encode("\u7FB5")}).to.throw(Error, "EncodingError U+7FB5");
r = r && ([...ms932Encoder.encode("羶")].join(",") === "227,189"); // U+7FB6
expect(() => {ms932Encoder.encode("\u7FB7")}).to.throw(Error, "EncodingError U+7FB7");
r = r && ([...ms932Encoder.encode("羸羹")].join(",") === "227,190,227,187"); // U+7FB8
expect(() => {ms932Encoder.encode("\u7FBA")}).to.throw(Error, "EncodingError U+7FBA");
expect(() => {ms932Encoder.encode("\u7FBB")}).to.throw(Error, "EncodingError U+7FBB");
expect(() => {ms932Encoder.encode("\u7FBC")}).to.throw(Error, "EncodingError U+7FBC");
r = r && ([...ms932Encoder.encode("羽")].join(",") === "137,72"); // U+7FBD
expect(() => {ms932Encoder.encode("\u7FBE")}).to.throw(Error, "EncodingError U+7FBE");
expect(() => {ms932Encoder.encode("\u7FBF")}).to.throw(Error, "EncodingError U+7FBF");
expect(() => {ms932Encoder.encode("\u7FC0")}).to.throw(Error, "EncodingError U+7FC0");
r = r && ([...ms932Encoder.encode("翁")].join(",") === "137,165"); // U+7FC1
expect(() => {ms932Encoder.encode("\u7FC2")}).to.throw(Error, "EncodingError U+7FC2");
expect(() => {ms932Encoder.encode("\u7FC3")}).to.throw(Error, "EncodingError U+7FC3");
expect(() => {ms932Encoder.encode("\u7FC4")}).to.throw(Error, "EncodingError U+7FC4");
r = r && ([...ms932Encoder.encode("翅翆")].join(",") === "227,192,227,193"); // U+7FC5
expect(() => {ms932Encoder.encode("\u7FC7")}).to.throw(Error, "EncodingError U+7FC7");
expect(() => {ms932Encoder.encode("\u7FC8")}).to.throw(Error, "EncodingError U+7FC8");
expect(() => {ms932Encoder.encode("\u7FC9")}).to.throw(Error, "EncodingError U+7FC9");
r = r && ([...ms932Encoder.encode("翊")].join(",") === "227,194"); // U+7FCA
expect(() => {ms932Encoder.encode("\u7FCB")}).to.throw(Error, "EncodingError U+7FCB");
r = r && ([...ms932Encoder.encode("翌")].join(",") === "151,130"); // U+7FCC
expect(() => {ms932Encoder.encode("\u7FCD")}).to.throw(Error, "EncodingError U+7FCD");
expect(() => {ms932Encoder.encode("\u7FCE")}).to.throw(Error, "EncodingError U+7FCE");
expect(() => {ms932Encoder.encode("\u7FCF")}).to.throw(Error, "EncodingError U+7FCF");
expect(() => {ms932Encoder.encode("\u7FD0")}).to.throw(Error, "EncodingError U+7FD0");
expect(() => {ms932Encoder.encode("\u7FD1")}).to.throw(Error, "EncodingError U+7FD1");
r = r && ([...ms932Encoder.encode("習")].join(",") === "143,75"); // U+7FD2
expect(() => {ms932Encoder.encode("\u7FD3")}).to.throw(Error, "EncodingError U+7FD3");
r = r && ([...ms932Encoder.encode("翔翕")].join(",") === "227,196,227,195"); // U+7FD4
expect(() => {ms932Encoder.encode("\u7FD6")}).to.throw(Error, "EncodingError U+7FD6");
expect(() => {ms932Encoder.encode("\u7FD7")}).to.throw(Error, "EncodingError U+7FD7");
expect(() => {ms932Encoder.encode("\u7FD8")}).to.throw(Error, "EncodingError U+7FD8");
expect(() => {ms932Encoder.encode("\u7FD9")}).to.throw(Error, "EncodingError U+7FD9");
expect(() => {ms932Encoder.encode("\u7FDA")}).to.throw(Error, "EncodingError U+7FDA");
expect(() => {ms932Encoder.encode("\u7FDB")}).to.throw(Error, "EncodingError U+7FDB");
expect(() => {ms932Encoder.encode("\u7FDC")}).to.throw(Error, "EncodingError U+7FDC");
expect(() => {ms932Encoder.encode("\u7FDD")}).to.throw(Error, "EncodingError U+7FDD");
expect(() => {ms932Encoder.encode("\u7FDE")}).to.throw(Error, "EncodingError U+7FDE");
expect(() => {ms932Encoder.encode("\u7FDF")}).to.throw(Error, "EncodingError U+7FDF");
r = r && ([...ms932Encoder.encode("翠翡")].join(",") === "144,137,227,197"); // U+7FE0
expect(() => {ms932Encoder.encode("\u7FE2")}).to.throw(Error, "EncodingError U+7FE2");
expect(() => {ms932Encoder.encode("\u7FE3")}).to.throw(Error, "EncodingError U+7FE3");
expect(() => {ms932Encoder.encode("\u7FE4")}).to.throw(Error, "EncodingError U+7FE4");
expect(() => {ms932Encoder.encode("\u7FE5")}).to.throw(Error, "EncodingError U+7FE5");
r = r && ([...ms932Encoder.encode("翦")].join(",") === "227,198"); // U+7FE6
expect(() => {ms932Encoder.encode("\u7FE7")}).to.throw(Error, "EncodingError U+7FE7");
expect(() => {ms932Encoder.encode("\u7FE8")}).to.throw(Error, "EncodingError U+7FE8");
r = r && ([...ms932Encoder.encode("翩")].join(",") === "227,199"); // U+7FE9
expect(() => {ms932Encoder.encode("\u7FEA")}).to.throw(Error, "EncodingError U+7FEA");
r = r && ([...ms932Encoder.encode("翫")].join(",") === "138,227"); // U+7FEB
expect(() => {ms932Encoder.encode("\u7FEC")}).to.throw(Error, "EncodingError U+7FEC");
expect(() => {ms932Encoder.encode("\u7FED")}).to.throw(Error, "EncodingError U+7FED");
expect(() => {ms932Encoder.encode("\u7FEE")}).to.throw(Error, "EncodingError U+7FEE");
expect(() => {ms932Encoder.encode("\u7FEF")}).to.throw(Error, "EncodingError U+7FEF");
r = r && ([...ms932Encoder.encode("翰")].join(",") === "138,203"); // U+7FF0
expect(() => {ms932Encoder.encode("\u7FF1")}).to.throw(Error, "EncodingError U+7FF1");
expect(() => {ms932Encoder.encode("\u7FF2")}).to.throw(Error, "EncodingError U+7FF2");
r = r && ([...ms932Encoder.encode("翳")].join(",") === "227,200"); // U+7FF3
expect(() => {ms932Encoder.encode("\u7FF4")}).to.throw(Error, "EncodingError U+7FF4");
expect(() => {ms932Encoder.encode("\u7FF5")}).to.throw(Error, "EncodingError U+7FF5");
expect(() => {ms932Encoder.encode("\u7FF6")}).to.throw(Error, "EncodingError U+7FF6");
expect(() => {ms932Encoder.encode("\u7FF7")}).to.throw(Error, "EncodingError U+7FF7");
expect(() => {ms932Encoder.encode("\u7FF8")}).to.throw(Error, "EncodingError U+7FF8");
r = r && ([...ms932Encoder.encode("翹")].join(",") === "227,201"); // U+7FF9
expect(() => {ms932Encoder.encode("\u7FFA")}).to.throw(Error, "EncodingError U+7FFA");
r = r && ([...ms932Encoder.encode("翻翼")].join(",") === "150,124,151,131"); // U+7FFB
expect(() => {ms932Encoder.encode("\u7FFD")}).to.throw(Error, "EncodingError U+7FFD");
expect(() => {ms932Encoder.encode("\u7FFE")}).to.throw(Error, "EncodingError U+7FFE");
expect(() => {ms932Encoder.encode("\u7FFF")}).to.throw(Error, "EncodingError U+7FFF");

expect(r).to.equal(true);

  });

});
