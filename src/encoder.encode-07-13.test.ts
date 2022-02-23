import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 7", () => {

  it("encode(string) - U+6C00-U+6FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u6C00")}).to.throw(Error, "EncodingError U+6C00");
expect(() => {ms932Encoder.encode("\u6C01")}).to.throw(Error, "EncodingError U+6C01");
expect(() => {ms932Encoder.encode("\u6C02")}).to.throw(Error, "EncodingError U+6C02");
expect(() => {ms932Encoder.encode("\u6C03")}).to.throw(Error, "EncodingError U+6C03");
expect(() => {ms932Encoder.encode("\u6C04")}).to.throw(Error, "EncodingError U+6C04");
expect(() => {ms932Encoder.encode("\u6C05")}).to.throw(Error, "EncodingError U+6C05");
expect(() => {ms932Encoder.encode("\u6C06")}).to.throw(Error, "EncodingError U+6C06");
expect(() => {ms932Encoder.encode("\u6C07")}).to.throw(Error, "EncodingError U+6C07");
r = r && ([...ms932Encoder.encode("氈")].join(",") === "159,129"); // U+6C08
expect(() => {ms932Encoder.encode("\u6C09")}).to.throw(Error, "EncodingError U+6C09");
expect(() => {ms932Encoder.encode("\u6C0A")}).to.throw(Error, "EncodingError U+6C0A");
expect(() => {ms932Encoder.encode("\u6C0B")}).to.throw(Error, "EncodingError U+6C0B");
expect(() => {ms932Encoder.encode("\u6C0C")}).to.throw(Error, "EncodingError U+6C0C");
expect(() => {ms932Encoder.encode("\u6C0D")}).to.throw(Error, "EncodingError U+6C0D");
expect(() => {ms932Encoder.encode("\u6C0E")}).to.throw(Error, "EncodingError U+6C0E");
r = r && ([...ms932Encoder.encode("氏")].join(",") === "142,129"); // U+6C0F
expect(() => {ms932Encoder.encode("\u6C10")}).to.throw(Error, "EncodingError U+6C10");
r = r && ([...ms932Encoder.encode("民")].join(",") === "150,175"); // U+6C11
expect(() => {ms932Encoder.encode("\u6C12")}).to.throw(Error, "EncodingError U+6C12");
r = r && ([...ms932Encoder.encode("氓气")].join(",") === "159,130,159,131"); // U+6C13
expect(() => {ms932Encoder.encode("\u6C15")}).to.throw(Error, "EncodingError U+6C15");
expect(() => {ms932Encoder.encode("\u6C16")}).to.throw(Error, "EncodingError U+6C16");
r = r && ([...ms932Encoder.encode("気")].join(",") === "139,67"); // U+6C17
expect(() => {ms932Encoder.encode("\u6C18")}).to.throw(Error, "EncodingError U+6C18");
expect(() => {ms932Encoder.encode("\u6C19")}).to.throw(Error, "EncodingError U+6C19");
expect(() => {ms932Encoder.encode("\u6C1A")}).to.throw(Error, "EncodingError U+6C1A");
r = r && ([...ms932Encoder.encode("氛")].join(",") === "159,132"); // U+6C1B
expect(() => {ms932Encoder.encode("\u6C1C")}).to.throw(Error, "EncodingError U+6C1C");
expect(() => {ms932Encoder.encode("\u6C1D")}).to.throw(Error, "EncodingError U+6C1D");
expect(() => {ms932Encoder.encode("\u6C1E")}).to.throw(Error, "EncodingError U+6C1E");
expect(() => {ms932Encoder.encode("\u6C1F")}).to.throw(Error, "EncodingError U+6C1F");
expect(() => {ms932Encoder.encode("\u6C20")}).to.throw(Error, "EncodingError U+6C20");
expect(() => {ms932Encoder.encode("\u6C21")}).to.throw(Error, "EncodingError U+6C21");
expect(() => {ms932Encoder.encode("\u6C22")}).to.throw(Error, "EncodingError U+6C22");
r = r && ([...ms932Encoder.encode("氣氤")].join(",") === "159,134,159,133"); // U+6C23
expect(() => {ms932Encoder.encode("\u6C25")}).to.throw(Error, "EncodingError U+6C25");
expect(() => {ms932Encoder.encode("\u6C26")}).to.throw(Error, "EncodingError U+6C26");
expect(() => {ms932Encoder.encode("\u6C27")}).to.throw(Error, "EncodingError U+6C27");
expect(() => {ms932Encoder.encode("\u6C28")}).to.throw(Error, "EncodingError U+6C28");
expect(() => {ms932Encoder.encode("\u6C29")}).to.throw(Error, "EncodingError U+6C29");
expect(() => {ms932Encoder.encode("\u6C2A")}).to.throw(Error, "EncodingError U+6C2A");
expect(() => {ms932Encoder.encode("\u6C2B")}).to.throw(Error, "EncodingError U+6C2B");
expect(() => {ms932Encoder.encode("\u6C2C")}).to.throw(Error, "EncodingError U+6C2C");
expect(() => {ms932Encoder.encode("\u6C2D")}).to.throw(Error, "EncodingError U+6C2D");
expect(() => {ms932Encoder.encode("\u6C2E")}).to.throw(Error, "EncodingError U+6C2E");
expect(() => {ms932Encoder.encode("\u6C2F")}).to.throw(Error, "EncodingError U+6C2F");
expect(() => {ms932Encoder.encode("\u6C30")}).to.throw(Error, "EncodingError U+6C30");
expect(() => {ms932Encoder.encode("\u6C31")}).to.throw(Error, "EncodingError U+6C31");
expect(() => {ms932Encoder.encode("\u6C32")}).to.throw(Error, "EncodingError U+6C32");
expect(() => {ms932Encoder.encode("\u6C33")}).to.throw(Error, "EncodingError U+6C33");
r = r && ([...ms932Encoder.encode("水")].join(",") === "144,133"); // U+6C34
expect(() => {ms932Encoder.encode("\u6C35")}).to.throw(Error, "EncodingError U+6C35");
expect(() => {ms932Encoder.encode("\u6C36")}).to.throw(Error, "EncodingError U+6C36");
r = r && ([...ms932Encoder.encode("氷永")].join(",") === "149,88,137,105"); // U+6C37
expect(() => {ms932Encoder.encode("\u6C39")}).to.throw(Error, "EncodingError U+6C39");
expect(() => {ms932Encoder.encode("\u6C3A")}).to.throw(Error, "EncodingError U+6C3A");
expect(() => {ms932Encoder.encode("\u6C3B")}).to.throw(Error, "EncodingError U+6C3B");
expect(() => {ms932Encoder.encode("\u6C3C")}).to.throw(Error, "EncodingError U+6C3C");
expect(() => {ms932Encoder.encode("\u6C3D")}).to.throw(Error, "EncodingError U+6C3D");
r = r && ([...ms932Encoder.encode("氾氿汀汁求")].join(",") === "148,195,250,245,146,243,143,96,139,129"); // U+6C3E
expect(() => {ms932Encoder.encode("\u6C43")}).to.throw(Error, "EncodingError U+6C43");
expect(() => {ms932Encoder.encode("\u6C44")}).to.throw(Error, "EncodingError U+6C44");
expect(() => {ms932Encoder.encode("\u6C45")}).to.throw(Error, "EncodingError U+6C45");
expect(() => {ms932Encoder.encode("\u6C46")}).to.throw(Error, "EncodingError U+6C46");
expect(() => {ms932Encoder.encode("\u6C47")}).to.throw(Error, "EncodingError U+6C47");
expect(() => {ms932Encoder.encode("\u6C48")}).to.throw(Error, "EncodingError U+6C48");
expect(() => {ms932Encoder.encode("\u6C49")}).to.throw(Error, "EncodingError U+6C49");
expect(() => {ms932Encoder.encode("\u6C4A")}).to.throw(Error, "EncodingError U+6C4A");
expect(() => {ms932Encoder.encode("\u6C4B")}).to.throw(Error, "EncodingError U+6C4B");
expect(() => {ms932Encoder.encode("\u6C4C")}).to.throw(Error, "EncodingError U+6C4C");
expect(() => {ms932Encoder.encode("\u6C4D")}).to.throw(Error, "EncodingError U+6C4D");
r = r && ([...ms932Encoder.encode("汎")].join(",") === "148,196"); // U+6C4E
expect(() => {ms932Encoder.encode("\u6C4F")}).to.throw(Error, "EncodingError U+6C4F");
r = r && ([...ms932Encoder.encode("汐")].join(",") === "142,172"); // U+6C50
expect(() => {ms932Encoder.encode("\u6C51")}).to.throw(Error, "EncodingError U+6C51");
expect(() => {ms932Encoder.encode("\u6C52")}).to.throw(Error, "EncodingError U+6C52");
expect(() => {ms932Encoder.encode("\u6C53")}).to.throw(Error, "EncodingError U+6C53");
expect(() => {ms932Encoder.encode("\u6C54")}).to.throw(Error, "EncodingError U+6C54");
r = r && ([...ms932Encoder.encode("汕")].join(",") === "159,136"); // U+6C55
expect(() => {ms932Encoder.encode("\u6C56")}).to.throw(Error, "EncodingError U+6C56");
r = r && ([...ms932Encoder.encode("汗")].join(",") === "138,190"); // U+6C57
expect(() => {ms932Encoder.encode("\u6C58")}).to.throw(Error, "EncodingError U+6C58");
expect(() => {ms932Encoder.encode("\u6C59")}).to.throw(Error, "EncodingError U+6C59");
r = r && ([...ms932Encoder.encode("汚")].join(",") === "137,152"); // U+6C5A
expect(() => {ms932Encoder.encode("\u6C5B")}).to.throw(Error, "EncodingError U+6C5B");
r = r && ([...ms932Encoder.encode("汜汝汞江池")].join(",") === "250,246,147,240,159,135,141,93,146,114"); // U+6C5C
expect(() => {ms932Encoder.encode("\u6C61")}).to.throw(Error, "EncodingError U+6C61");
r = r && ([...ms932Encoder.encode("汢")].join(",") === "159,137"); // U+6C62
expect(() => {ms932Encoder.encode("\u6C63")}).to.throw(Error, "EncodingError U+6C63");
expect(() => {ms932Encoder.encode("\u6C64")}).to.throw(Error, "EncodingError U+6C64");
expect(() => {ms932Encoder.encode("\u6C65")}).to.throw(Error, "EncodingError U+6C65");
expect(() => {ms932Encoder.encode("\u6C66")}).to.throw(Error, "EncodingError U+6C66");
expect(() => {ms932Encoder.encode("\u6C67")}).to.throw(Error, "EncodingError U+6C67");
r = r && ([...ms932Encoder.encode("汨")].join(",") === "159,145"); // U+6C68
expect(() => {ms932Encoder.encode("\u6C69")}).to.throw(Error, "EncodingError U+6C69");
r = r && ([...ms932Encoder.encode("汪")].join(",") === "159,138"); // U+6C6A
expect(() => {ms932Encoder.encode("\u6C6B")}).to.throw(Error, "EncodingError U+6C6B");
expect(() => {ms932Encoder.encode("\u6C6C")}).to.throw(Error, "EncodingError U+6C6C");
expect(() => {ms932Encoder.encode("\u6C6D")}).to.throw(Error, "EncodingError U+6C6D");
expect(() => {ms932Encoder.encode("\u6C6E")}).to.throw(Error, "EncodingError U+6C6E");
r = r && ([...ms932Encoder.encode("汯汰")].join(",") === "250,248,145,191"); // U+6C6F
expect(() => {ms932Encoder.encode("\u6C71")}).to.throw(Error, "EncodingError U+6C71");
r = r && ([...ms932Encoder.encode("汲汳")].join(",") === "139,130,159,146"); // U+6C72
expect(() => {ms932Encoder.encode("\u6C74")}).to.throw(Error, "EncodingError U+6C74");
expect(() => {ms932Encoder.encode("\u6C75")}).to.throw(Error, "EncodingError U+6C75");
expect(() => {ms932Encoder.encode("\u6C76")}).to.throw(Error, "EncodingError U+6C76");
expect(() => {ms932Encoder.encode("\u6C77")}).to.throw(Error, "EncodingError U+6C77");
expect(() => {ms932Encoder.encode("\u6C78")}).to.throw(Error, "EncodingError U+6C78");
expect(() => {ms932Encoder.encode("\u6C79")}).to.throw(Error, "EncodingError U+6C79");
r = r && ([...ms932Encoder.encode("決")].join(",") === "140,136"); // U+6C7A
expect(() => {ms932Encoder.encode("\u6C7B")}).to.throw(Error, "EncodingError U+6C7B");
expect(() => {ms932Encoder.encode("\u6C7C")}).to.throw(Error, "EncodingError U+6C7C");
r = r && ([...ms932Encoder.encode("汽汾")].join(",") === "139,68,159,144"); // U+6C7D
expect(() => {ms932Encoder.encode("\u6C7F")}).to.throw(Error, "EncodingError U+6C7F");
expect(() => {ms932Encoder.encode("\u6C80")}).to.throw(Error, "EncodingError U+6C80");
r = r && ([...ms932Encoder.encode("沁沂沃")].join(",") === "159,142,159,139,151,128"); // U+6C81
expect(() => {ms932Encoder.encode("\u6C84")}).to.throw(Error, "EncodingError U+6C84");
expect(() => {ms932Encoder.encode("\u6C85")}).to.throw(Error, "EncodingError U+6C85");
r = r && ([...ms932Encoder.encode("沆")].join(",") === "250,247"); // U+6C86
expect(() => {ms932Encoder.encode("\u6C87")}).to.throw(Error, "EncodingError U+6C87");
r = r && ([...ms932Encoder.encode("沈")].join(",") === "146,190"); // U+6C88
expect(() => {ms932Encoder.encode("\u6C89")}).to.throw(Error, "EncodingError U+6C89");
expect(() => {ms932Encoder.encode("\u6C8A")}).to.throw(Error, "EncodingError U+6C8A");
expect(() => {ms932Encoder.encode("\u6C8B")}).to.throw(Error, "EncodingError U+6C8B");
r = r && ([...ms932Encoder.encode("沌沍")].join(",") === "147,215,159,140"); // U+6C8C
expect(() => {ms932Encoder.encode("\u6C8E")}).to.throw(Error, "EncodingError U+6C8E");
expect(() => {ms932Encoder.encode("\u6C8F")}).to.throw(Error, "EncodingError U+6C8F");
r = r && ([...ms932Encoder.encode("沐")].join(",") === "159,148"); // U+6C90
expect(() => {ms932Encoder.encode("\u6C91")}).to.throw(Error, "EncodingError U+6C91");
r = r && ([...ms932Encoder.encode("沒沓")].join(",") === "159,147,140,66"); // U+6C92
expect(() => {ms932Encoder.encode("\u6C94")}).to.throw(Error, "EncodingError U+6C94");
expect(() => {ms932Encoder.encode("\u6C95")}).to.throw(Error, "EncodingError U+6C95");
r = r && ([...ms932Encoder.encode("沖")].join(",") === "137,171"); // U+6C96
expect(() => {ms932Encoder.encode("\u6C97")}).to.throw(Error, "EncodingError U+6C97");
expect(() => {ms932Encoder.encode("\u6C98")}).to.throw(Error, "EncodingError U+6C98");
r = r && ([...ms932Encoder.encode("沙沚沛")].join(",") === "141,185,159,141,159,143"); // U+6C99
expect(() => {ms932Encoder.encode("\u6C9C")}).to.throw(Error, "EncodingError U+6C9C");
expect(() => {ms932Encoder.encode("\u6C9D")}).to.throw(Error, "EncodingError U+6C9D");
expect(() => {ms932Encoder.encode("\u6C9E")}).to.throw(Error, "EncodingError U+6C9E");
expect(() => {ms932Encoder.encode("\u6C9F")}).to.throw(Error, "EncodingError U+6C9F");
expect(() => {ms932Encoder.encode("\u6CA0")}).to.throw(Error, "EncodingError U+6CA0");
r = r && ([...ms932Encoder.encode("没沢")].join(",") === "150,118,145,242"); // U+6CA1
expect(() => {ms932Encoder.encode("\u6CA3")}).to.throw(Error, "EncodingError U+6CA3");
expect(() => {ms932Encoder.encode("\u6CA4")}).to.throw(Error, "EncodingError U+6CA4");
expect(() => {ms932Encoder.encode("\u6CA5")}).to.throw(Error, "EncodingError U+6CA5");
expect(() => {ms932Encoder.encode("\u6CA6")}).to.throw(Error, "EncodingError U+6CA6");
expect(() => {ms932Encoder.encode("\u6CA7")}).to.throw(Error, "EncodingError U+6CA7");
expect(() => {ms932Encoder.encode("\u6CA8")}).to.throw(Error, "EncodingError U+6CA8");
expect(() => {ms932Encoder.encode("\u6CA9")}).to.throw(Error, "EncodingError U+6CA9");
expect(() => {ms932Encoder.encode("\u6CAA")}).to.throw(Error, "EncodingError U+6CAA");
r = r && ([...ms932Encoder.encode("沫")].join(",") === "150,151"); // U+6CAB
expect(() => {ms932Encoder.encode("\u6CAC")}).to.throw(Error, "EncodingError U+6CAC");
expect(() => {ms932Encoder.encode("\u6CAD")}).to.throw(Error, "EncodingError U+6CAD");
r = r && ([...ms932Encoder.encode("沮")].join(",") === "159,156"); // U+6CAE
expect(() => {ms932Encoder.encode("\u6CAF")}).to.throw(Error, "EncodingError U+6CAF");
expect(() => {ms932Encoder.encode("\u6CB0")}).to.throw(Error, "EncodingError U+6CB0");
r = r && ([...ms932Encoder.encode("沱")].join(",") === "159,157"); // U+6CB1
expect(() => {ms932Encoder.encode("\u6CB2")}).to.throw(Error, "EncodingError U+6CB2");
r = r && ([...ms932Encoder.encode("河")].join(",") === "137,205"); // U+6CB3
expect(() => {ms932Encoder.encode("\u6CB4")}).to.throw(Error, "EncodingError U+6CB4");
expect(() => {ms932Encoder.encode("\u6CB5")}).to.throw(Error, "EncodingError U+6CB5");
expect(() => {ms932Encoder.encode("\u6CB6")}).to.throw(Error, "EncodingError U+6CB6");
expect(() => {ms932Encoder.encode("\u6CB7")}).to.throw(Error, "EncodingError U+6CB7");
r = r && ([...ms932Encoder.encode("沸油沺治沼沽沾沿")].join(",") === "149,166,150,251,159,159,142,161,143,192,159,152,159,158,137,136"); // U+6CB8
expect(() => {ms932Encoder.encode("\u6CC0")}).to.throw(Error, "EncodingError U+6CC0");
r = r && ([...ms932Encoder.encode("況")].join(",") === "139,181"); // U+6CC1
expect(() => {ms932Encoder.encode("\u6CC2")}).to.throw(Error, "EncodingError U+6CC2");
expect(() => {ms932Encoder.encode("\u6CC3")}).to.throw(Error, "EncodingError U+6CC3");
r = r && ([...ms932Encoder.encode("泄泅")].join(",") === "159,149,159,154"); // U+6CC4
expect(() => {ms932Encoder.encode("\u6CC6")}).to.throw(Error, "EncodingError U+6CC6");
expect(() => {ms932Encoder.encode("\u6CC7")}).to.throw(Error, "EncodingError U+6CC7");
expect(() => {ms932Encoder.encode("\u6CC8")}).to.throw(Error, "EncodingError U+6CC8");
r = r && ([...ms932Encoder.encode("泉泊")].join(",") === "144,242,148,145"); // U+6CC9
expect(() => {ms932Encoder.encode("\u6CCB")}).to.throw(Error, "EncodingError U+6CCB");
r = r && ([...ms932Encoder.encode("泌")].join(",") === "148,229"); // U+6CCC
expect(() => {ms932Encoder.encode("\u6CCD")}).to.throw(Error, "EncodingError U+6CCD");
expect(() => {ms932Encoder.encode("\u6CCE")}).to.throw(Error, "EncodingError U+6CCE");
expect(() => {ms932Encoder.encode("\u6CCF")}).to.throw(Error, "EncodingError U+6CCF");
expect(() => {ms932Encoder.encode("\u6CD0")}).to.throw(Error, "EncodingError U+6CD0");
expect(() => {ms932Encoder.encode("\u6CD1")}).to.throw(Error, "EncodingError U+6CD1");
expect(() => {ms932Encoder.encode("\u6CD2")}).to.throw(Error, "EncodingError U+6CD2");
r = r && ([...ms932Encoder.encode("泓")].join(",") === "159,151"); // U+6CD3
expect(() => {ms932Encoder.encode("\u6CD4")}).to.throw(Error, "EncodingError U+6CD4");
r = r && ([...ms932Encoder.encode("法")].join(",") === "150,64"); // U+6CD5
expect(() => {ms932Encoder.encode("\u6CD6")}).to.throw(Error, "EncodingError U+6CD6");
r = r && ([...ms932Encoder.encode("泗")].join(",") === "159,153"); // U+6CD7
expect(() => {ms932Encoder.encode("\u6CD8")}).to.throw(Error, "EncodingError U+6CD8");
r = r && ([...ms932Encoder.encode("泙泚泛")].join(",") === "159,162,250,249,159,160"); // U+6CD9
expect(() => {ms932Encoder.encode("\u6CDC")}).to.throw(Error, "EncodingError U+6CDC");
r = r && ([...ms932Encoder.encode("泝")].join(",") === "159,155"); // U+6CDD
expect(() => {ms932Encoder.encode("\u6CDE")}).to.throw(Error, "EncodingError U+6CDE");
expect(() => {ms932Encoder.encode("\u6CDF")}).to.throw(Error, "EncodingError U+6CDF");
expect(() => {ms932Encoder.encode("\u6CE0")}).to.throw(Error, "EncodingError U+6CE0");
r = r && ([...ms932Encoder.encode("泡波泣")].join(",") === "150,65,148,103,139,131"); // U+6CE1
expect(() => {ms932Encoder.encode("\u6CE4")}).to.throw(Error, "EncodingError U+6CE4");
r = r && ([...ms932Encoder.encode("泥")].join(",") === "147,68"); // U+6CE5
expect(() => {ms932Encoder.encode("\u6CE6")}).to.throw(Error, "EncodingError U+6CE6");
expect(() => {ms932Encoder.encode("\u6CE7")}).to.throw(Error, "EncodingError U+6CE7");
r = r && ([...ms932Encoder.encode("注")].join(",") === "146,141"); // U+6CE8
expect(() => {ms932Encoder.encode("\u6CE9")}).to.throw(Error, "EncodingError U+6CE9");
r = r && ([...ms932Encoder.encode("泪")].join(",") === "159,163"); // U+6CEA
expect(() => {ms932Encoder.encode("\u6CEB")}).to.throw(Error, "EncodingError U+6CEB");
expect(() => {ms932Encoder.encode("\u6CEC")}).to.throw(Error, "EncodingError U+6CEC");
expect(() => {ms932Encoder.encode("\u6CED")}).to.throw(Error, "EncodingError U+6CED");
expect(() => {ms932Encoder.encode("\u6CEE")}).to.throw(Error, "EncodingError U+6CEE");
r = r && ([...ms932Encoder.encode("泯泰泱")].join(",") === "159,161,145,215,159,150"); // U+6CEF
expect(() => {ms932Encoder.encode("\u6CF2")}).to.throw(Error, "EncodingError U+6CF2");
r = r && ([...ms932Encoder.encode("泳")].join(",") === "137,106"); // U+6CF3
expect(() => {ms932Encoder.encode("\u6CF4")}).to.throw(Error, "EncodingError U+6CF4");
expect(() => {ms932Encoder.encode("\u6CF5")}).to.throw(Error, "EncodingError U+6CF5");
expect(() => {ms932Encoder.encode("\u6CF6")}).to.throw(Error, "EncodingError U+6CF6");
expect(() => {ms932Encoder.encode("\u6CF7")}).to.throw(Error, "EncodingError U+6CF7");
expect(() => {ms932Encoder.encode("\u6CF8")}).to.throw(Error, "EncodingError U+6CF8");
expect(() => {ms932Encoder.encode("\u6CF9")}).to.throw(Error, "EncodingError U+6CF9");
expect(() => {ms932Encoder.encode("\u6CFA")}).to.throw(Error, "EncodingError U+6CFA");
expect(() => {ms932Encoder.encode("\u6CFB")}).to.throw(Error, "EncodingError U+6CFB");
expect(() => {ms932Encoder.encode("\u6CFC")}).to.throw(Error, "EncodingError U+6CFC");
expect(() => {ms932Encoder.encode("\u6CFD")}).to.throw(Error, "EncodingError U+6CFD");
expect(() => {ms932Encoder.encode("\u6CFE")}).to.throw(Error, "EncodingError U+6CFE");
expect(() => {ms932Encoder.encode("\u6CFF")}).to.throw(Error, "EncodingError U+6CFF");
expect(() => {ms932Encoder.encode("\u6D00")}).to.throw(Error, "EncodingError U+6D00");
expect(() => {ms932Encoder.encode("\u6D01")}).to.throw(Error, "EncodingError U+6D01");
expect(() => {ms932Encoder.encode("\u6D02")}).to.throw(Error, "EncodingError U+6D02");
expect(() => {ms932Encoder.encode("\u6D03")}).to.throw(Error, "EncodingError U+6D03");
r = r && ([...ms932Encoder.encode("洄")].join(",") === "250,250"); // U+6D04
expect(() => {ms932Encoder.encode("\u6D05")}).to.throw(Error, "EncodingError U+6D05");
expect(() => {ms932Encoder.encode("\u6D06")}).to.throw(Error, "EncodingError U+6D06");
expect(() => {ms932Encoder.encode("\u6D07")}).to.throw(Error, "EncodingError U+6D07");
expect(() => {ms932Encoder.encode("\u6D08")}).to.throw(Error, "EncodingError U+6D08");
expect(() => {ms932Encoder.encode("\u6D09")}).to.throw(Error, "EncodingError U+6D09");
expect(() => {ms932Encoder.encode("\u6D0A")}).to.throw(Error, "EncodingError U+6D0A");
r = r && ([...ms932Encoder.encode("洋洌")].join(",") === "151,109,159,174"); // U+6D0B
expect(() => {ms932Encoder.encode("\u6D0D")}).to.throw(Error, "EncodingError U+6D0D");
expect(() => {ms932Encoder.encode("\u6D0E")}).to.throw(Error, "EncodingError U+6D0E");
expect(() => {ms932Encoder.encode("\u6D0F")}).to.throw(Error, "EncodingError U+6D0F");
expect(() => {ms932Encoder.encode("\u6D10")}).to.throw(Error, "EncodingError U+6D10");
expect(() => {ms932Encoder.encode("\u6D11")}).to.throw(Error, "EncodingError U+6D11");
r = r && ([...ms932Encoder.encode("洒")].join(",") === "159,173"); // U+6D12
expect(() => {ms932Encoder.encode("\u6D13")}).to.throw(Error, "EncodingError U+6D13");
expect(() => {ms932Encoder.encode("\u6D14")}).to.throw(Error, "EncodingError U+6D14");
expect(() => {ms932Encoder.encode("\u6D15")}).to.throw(Error, "EncodingError U+6D15");
expect(() => {ms932Encoder.encode("\u6D16")}).to.throw(Error, "EncodingError U+6D16");
r = r && ([...ms932Encoder.encode("洗")].join(",") === "144,244"); // U+6D17
expect(() => {ms932Encoder.encode("\u6D18")}).to.throw(Error, "EncodingError U+6D18");
r = r && ([...ms932Encoder.encode("洙")].join(",") === "159,170"); // U+6D19
expect(() => {ms932Encoder.encode("\u6D1A")}).to.throw(Error, "EncodingError U+6D1A");
r = r && ([...ms932Encoder.encode("洛")].join(",") === "151,140"); // U+6D1B
expect(() => {ms932Encoder.encode("\u6D1C")}).to.throw(Error, "EncodingError U+6D1C");
expect(() => {ms932Encoder.encode("\u6D1D")}).to.throw(Error, "EncodingError U+6D1D");
r = r && ([...ms932Encoder.encode("洞洟")].join(",") === "147,180,159,164"); // U+6D1E
expect(() => {ms932Encoder.encode("\u6D20")}).to.throw(Error, "EncodingError U+6D20");
expect(() => {ms932Encoder.encode("\u6D21")}).to.throw(Error, "EncodingError U+6D21");
expect(() => {ms932Encoder.encode("\u6D22")}).to.throw(Error, "EncodingError U+6D22");
expect(() => {ms932Encoder.encode("\u6D23")}).to.throw(Error, "EncodingError U+6D23");
expect(() => {ms932Encoder.encode("\u6D24")}).to.throw(Error, "EncodingError U+6D24");
r = r && ([...ms932Encoder.encode("津")].join(",") === "146,195"); // U+6D25
expect(() => {ms932Encoder.encode("\u6D26")}).to.throw(Error, "EncodingError U+6D26");
expect(() => {ms932Encoder.encode("\u6D27")}).to.throw(Error, "EncodingError U+6D27");
expect(() => {ms932Encoder.encode("\u6D28")}).to.throw(Error, "EncodingError U+6D28");
r = r && ([...ms932Encoder.encode("洩洪洫")].join(",") === "137,107,141,94,159,167"); // U+6D29
expect(() => {ms932Encoder.encode("\u6D2C")}).to.throw(Error, "EncodingError U+6D2C");
expect(() => {ms932Encoder.encode("\u6D2D")}).to.throw(Error, "EncodingError U+6D2D");
expect(() => {ms932Encoder.encode("\u6D2E")}).to.throw(Error, "EncodingError U+6D2E");
expect(() => {ms932Encoder.encode("\u6D2F")}).to.throw(Error, "EncodingError U+6D2F");
expect(() => {ms932Encoder.encode("\u6D30")}).to.throw(Error, "EncodingError U+6D30");
expect(() => {ms932Encoder.encode("\u6D31")}).to.throw(Error, "EncodingError U+6D31");
r = r && ([...ms932Encoder.encode("洲洳")].join(",") === "143,70,159,172"); // U+6D32
expect(() => {ms932Encoder.encode("\u6D34")}).to.throw(Error, "EncodingError U+6D34");
r = r && ([...ms932Encoder.encode("洵洶")].join(",") === "159,171,159,166"); // U+6D35
expect(() => {ms932Encoder.encode("\u6D37")}).to.throw(Error, "EncodingError U+6D37");
r = r && ([...ms932Encoder.encode("洸")].join(",") === "159,169"); // U+6D38
expect(() => {ms932Encoder.encode("\u6D39")}).to.throw(Error, "EncodingError U+6D39");
expect(() => {ms932Encoder.encode("\u6D3A")}).to.throw(Error, "EncodingError U+6D3A");
r = r && ([...ms932Encoder.encode("活")].join(",") === "138,136"); // U+6D3B
expect(() => {ms932Encoder.encode("\u6D3C")}).to.throw(Error, "EncodingError U+6D3C");
r = r && ([...ms932Encoder.encode("洽派")].join(",") === "159,168,148,104"); // U+6D3D
expect(() => {ms932Encoder.encode("\u6D3F")}).to.throw(Error, "EncodingError U+6D3F");
expect(() => {ms932Encoder.encode("\u6D40")}).to.throw(Error, "EncodingError U+6D40");
r = r && ([...ms932Encoder.encode("流")].join(",") === "151,172"); // U+6D41
expect(() => {ms932Encoder.encode("\u6D42")}).to.throw(Error, "EncodingError U+6D42");
expect(() => {ms932Encoder.encode("\u6D43")}).to.throw(Error, "EncodingError U+6D43");
r = r && ([...ms932Encoder.encode("浄浅")].join(",") === "143,242,144,243"); // U+6D44
expect(() => {ms932Encoder.encode("\u6D46")}).to.throw(Error, "EncodingError U+6D46");
expect(() => {ms932Encoder.encode("\u6D47")}).to.throw(Error, "EncodingError U+6D47");
expect(() => {ms932Encoder.encode("\u6D48")}).to.throw(Error, "EncodingError U+6D48");
expect(() => {ms932Encoder.encode("\u6D49")}).to.throw(Error, "EncodingError U+6D49");
expect(() => {ms932Encoder.encode("\u6D4A")}).to.throw(Error, "EncodingError U+6D4A");
expect(() => {ms932Encoder.encode("\u6D4B")}).to.throw(Error, "EncodingError U+6D4B");
expect(() => {ms932Encoder.encode("\u6D4C")}).to.throw(Error, "EncodingError U+6D4C");
expect(() => {ms932Encoder.encode("\u6D4D")}).to.throw(Error, "EncodingError U+6D4D");
expect(() => {ms932Encoder.encode("\u6D4E")}).to.throw(Error, "EncodingError U+6D4E");
expect(() => {ms932Encoder.encode("\u6D4F")}).to.throw(Error, "EncodingError U+6D4F");
expect(() => {ms932Encoder.encode("\u6D50")}).to.throw(Error, "EncodingError U+6D50");
expect(() => {ms932Encoder.encode("\u6D51")}).to.throw(Error, "EncodingError U+6D51");
expect(() => {ms932Encoder.encode("\u6D52")}).to.throw(Error, "EncodingError U+6D52");
expect(() => {ms932Encoder.encode("\u6D53")}).to.throw(Error, "EncodingError U+6D53");
expect(() => {ms932Encoder.encode("\u6D54")}).to.throw(Error, "EncodingError U+6D54");
expect(() => {ms932Encoder.encode("\u6D55")}).to.throw(Error, "EncodingError U+6D55");
expect(() => {ms932Encoder.encode("\u6D56")}).to.throw(Error, "EncodingError U+6D56");
expect(() => {ms932Encoder.encode("\u6D57")}).to.throw(Error, "EncodingError U+6D57");
expect(() => {ms932Encoder.encode("\u6D58")}).to.throw(Error, "EncodingError U+6D58");
r = r && ([...ms932Encoder.encode("浙浚")].join(",") === "159,180,159,178"); // U+6D59
expect(() => {ms932Encoder.encode("\u6D5B")}).to.throw(Error, "EncodingError U+6D5B");
r = r && ([...ms932Encoder.encode("浜")].join(",") === "149,108"); // U+6D5C
expect(() => {ms932Encoder.encode("\u6D5D")}).to.throw(Error, "EncodingError U+6D5D");
expect(() => {ms932Encoder.encode("\u6D5E")}).to.throw(Error, "EncodingError U+6D5E");
expect(() => {ms932Encoder.encode("\u6D5F")}).to.throw(Error, "EncodingError U+6D5F");
expect(() => {ms932Encoder.encode("\u6D60")}).to.throw(Error, "EncodingError U+6D60");
expect(() => {ms932Encoder.encode("\u6D61")}).to.throw(Error, "EncodingError U+6D61");
expect(() => {ms932Encoder.encode("\u6D62")}).to.throw(Error, "EncodingError U+6D62");
r = r && ([...ms932Encoder.encode("浣浤")].join(",") === "159,175,159,177"); // U+6D63
expect(() => {ms932Encoder.encode("\u6D65")}).to.throw(Error, "EncodingError U+6D65");
r = r && ([...ms932Encoder.encode("浦")].join(",") === "137,89"); // U+6D66
expect(() => {ms932Encoder.encode("\u6D67")}).to.throw(Error, "EncodingError U+6D67");
expect(() => {ms932Encoder.encode("\u6D68")}).to.throw(Error, "EncodingError U+6D68");
r = r && ([...ms932Encoder.encode("浩浪")].join(",") === "141,95,152,81"); // U+6D69
expect(() => {ms932Encoder.encode("\u6D6B")}).to.throw(Error, "EncodingError U+6D6B");
r = r && ([...ms932Encoder.encode("浬")].join(",") === "138,92"); // U+6D6C
expect(() => {ms932Encoder.encode("\u6D6D")}).to.throw(Error, "EncodingError U+6D6D");
r = r && ([...ms932Encoder.encode("浮浯")].join(",") === "149,130,250,252"); // U+6D6E
expect(() => {ms932Encoder.encode("\u6D70")}).to.throw(Error, "EncodingError U+6D70");
expect(() => {ms932Encoder.encode("\u6D71")}).to.throw(Error, "EncodingError U+6D71");
expect(() => {ms932Encoder.encode("\u6D72")}).to.throw(Error, "EncodingError U+6D72");
expect(() => {ms932Encoder.encode("\u6D73")}).to.throw(Error, "EncodingError U+6D73");
r = r && ([...ms932Encoder.encode("浴")].join(",") === "151,129"); // U+6D74
expect(() => {ms932Encoder.encode("\u6D75")}).to.throw(Error, "EncodingError U+6D75");
expect(() => {ms932Encoder.encode("\u6D76")}).to.throw(Error, "EncodingError U+6D76");
r = r && ([...ms932Encoder.encode("海浸浹")].join(",") === "138,67,144,90,159,179"); // U+6D77
expect(() => {ms932Encoder.encode("\u6D7A")}).to.throw(Error, "EncodingError U+6D7A");
expect(() => {ms932Encoder.encode("\u6D7B")}).to.throw(Error, "EncodingError U+6D7B");
expect(() => {ms932Encoder.encode("\u6D7C")}).to.throw(Error, "EncodingError U+6D7C");
expect(() => {ms932Encoder.encode("\u6D7D")}).to.throw(Error, "EncodingError U+6D7D");
expect(() => {ms932Encoder.encode("\u6D7E")}).to.throw(Error, "EncodingError U+6D7E");
expect(() => {ms932Encoder.encode("\u6D7F")}).to.throw(Error, "EncodingError U+6D7F");
expect(() => {ms932Encoder.encode("\u6D80")}).to.throw(Error, "EncodingError U+6D80");
expect(() => {ms932Encoder.encode("\u6D81")}).to.throw(Error, "EncodingError U+6D81");
expect(() => {ms932Encoder.encode("\u6D82")}).to.throw(Error, "EncodingError U+6D82");
expect(() => {ms932Encoder.encode("\u6D83")}).to.throw(Error, "EncodingError U+6D83");
expect(() => {ms932Encoder.encode("\u6D84")}).to.throw(Error, "EncodingError U+6D84");
r = r && ([...ms932Encoder.encode("涅")].join(",") === "159,184"); // U+6D85
expect(() => {ms932Encoder.encode("\u6D86")}).to.throw(Error, "EncodingError U+6D86");
r = r && ([...ms932Encoder.encode("涇消")].join(",") === "250,251,143,193"); // U+6D87
expect(() => {ms932Encoder.encode("\u6D89")}).to.throw(Error, "EncodingError U+6D89");
expect(() => {ms932Encoder.encode("\u6D8A")}).to.throw(Error, "EncodingError U+6D8A");
expect(() => {ms932Encoder.encode("\u6D8B")}).to.throw(Error, "EncodingError U+6D8B");
r = r && ([...ms932Encoder.encode("涌")].join(",") === "151,79"); // U+6D8C
expect(() => {ms932Encoder.encode("\u6D8D")}).to.throw(Error, "EncodingError U+6D8D");
r = r && ([...ms932Encoder.encode("涎")].join(",") === "159,181"); // U+6D8E
expect(() => {ms932Encoder.encode("\u6D8F")}).to.throw(Error, "EncodingError U+6D8F");
expect(() => {ms932Encoder.encode("\u6D90")}).to.throw(Error, "EncodingError U+6D90");
expect(() => {ms932Encoder.encode("\u6D91")}).to.throw(Error, "EncodingError U+6D91");
expect(() => {ms932Encoder.encode("\u6D92")}).to.throw(Error, "EncodingError U+6D92");
r = r && ([...ms932Encoder.encode("涓")].join(",") === "159,176"); // U+6D93
expect(() => {ms932Encoder.encode("\u6D94")}).to.throw(Error, "EncodingError U+6D94");
r = r && ([...ms932Encoder.encode("涕涖")].join(",") === "159,182,251,64"); // U+6D95
expect(() => {ms932Encoder.encode("\u6D97")}).to.throw(Error, "EncodingError U+6D97");
expect(() => {ms932Encoder.encode("\u6D98")}).to.throw(Error, "EncodingError U+6D98");
r = r && ([...ms932Encoder.encode("涙")].join(",") === "151,220"); // U+6D99
expect(() => {ms932Encoder.encode("\u6D9A")}).to.throw(Error, "EncodingError U+6D9A");
r = r && ([...ms932Encoder.encode("涛涜")].join(",") === "147,147,147,192"); // U+6D9B
expect(() => {ms932Encoder.encode("\u6D9D")}).to.throw(Error, "EncodingError U+6D9D");
expect(() => {ms932Encoder.encode("\u6D9E")}).to.throw(Error, "EncodingError U+6D9E");
expect(() => {ms932Encoder.encode("\u6D9F")}).to.throw(Error, "EncodingError U+6D9F");
expect(() => {ms932Encoder.encode("\u6DA0")}).to.throw(Error, "EncodingError U+6DA0");
expect(() => {ms932Encoder.encode("\u6DA1")}).to.throw(Error, "EncodingError U+6DA1");
expect(() => {ms932Encoder.encode("\u6DA2")}).to.throw(Error, "EncodingError U+6DA2");
expect(() => {ms932Encoder.encode("\u6DA3")}).to.throw(Error, "EncodingError U+6DA3");
expect(() => {ms932Encoder.encode("\u6DA4")}).to.throw(Error, "EncodingError U+6DA4");
expect(() => {ms932Encoder.encode("\u6DA5")}).to.throw(Error, "EncodingError U+6DA5");
expect(() => {ms932Encoder.encode("\u6DA6")}).to.throw(Error, "EncodingError U+6DA6");
expect(() => {ms932Encoder.encode("\u6DA7")}).to.throw(Error, "EncodingError U+6DA7");
expect(() => {ms932Encoder.encode("\u6DA8")}).to.throw(Error, "EncodingError U+6DA8");
expect(() => {ms932Encoder.encode("\u6DA9")}).to.throw(Error, "EncodingError U+6DA9");
expect(() => {ms932Encoder.encode("\u6DAA")}).to.throw(Error, "EncodingError U+6DAA");
expect(() => {ms932Encoder.encode("\u6DAB")}).to.throw(Error, "EncodingError U+6DAB");
r = r && ([...ms932Encoder.encode("涬")].join(",") === "251,65"); // U+6DAC
expect(() => {ms932Encoder.encode("\u6DAD")}).to.throw(Error, "EncodingError U+6DAD");
expect(() => {ms932Encoder.encode("\u6DAE")}).to.throw(Error, "EncodingError U+6DAE");
r = r && ([...ms932Encoder.encode("涯")].join(",") === "138,85"); // U+6DAF
expect(() => {ms932Encoder.encode("\u6DB0")}).to.throw(Error, "EncodingError U+6DB0");
expect(() => {ms932Encoder.encode("\u6DB1")}).to.throw(Error, "EncodingError U+6DB1");
r = r && ([...ms932Encoder.encode("液")].join(",") === "137,116"); // U+6DB2
expect(() => {ms932Encoder.encode("\u6DB3")}).to.throw(Error, "EncodingError U+6DB3");
expect(() => {ms932Encoder.encode("\u6DB4")}).to.throw(Error, "EncodingError U+6DB4");
r = r && ([...ms932Encoder.encode("涵")].join(",") === "159,188"); // U+6DB5
expect(() => {ms932Encoder.encode("\u6DB6")}).to.throw(Error, "EncodingError U+6DB6");
expect(() => {ms932Encoder.encode("\u6DB7")}).to.throw(Error, "EncodingError U+6DB7");
r = r && ([...ms932Encoder.encode("涸")].join(",") === "159,191"); // U+6DB8
expect(() => {ms932Encoder.encode("\u6DB9")}).to.throw(Error, "EncodingError U+6DB9");
expect(() => {ms932Encoder.encode("\u6DBA")}).to.throw(Error, "EncodingError U+6DBA");
expect(() => {ms932Encoder.encode("\u6DBB")}).to.throw(Error, "EncodingError U+6DBB");
r = r && ([...ms932Encoder.encode("涼")].join(",") === "151,193"); // U+6DBC
expect(() => {ms932Encoder.encode("\u6DBD")}).to.throw(Error, "EncodingError U+6DBD");
expect(() => {ms932Encoder.encode("\u6DBE")}).to.throw(Error, "EncodingError U+6DBE");
expect(() => {ms932Encoder.encode("\u6DBF")}).to.throw(Error, "EncodingError U+6DBF");
r = r && ([...ms932Encoder.encode("淀")].join(",") === "151,132"); // U+6DC0
expect(() => {ms932Encoder.encode("\u6DC1")}).to.throw(Error, "EncodingError U+6DC1");
expect(() => {ms932Encoder.encode("\u6DC2")}).to.throw(Error, "EncodingError U+6DC2");
expect(() => {ms932Encoder.encode("\u6DC3")}).to.throw(Error, "EncodingError U+6DC3");
expect(() => {ms932Encoder.encode("\u6DC4")}).to.throw(Error, "EncodingError U+6DC4");
r = r && ([...ms932Encoder.encode("淅淆淇")].join(",") === "159,198,159,192,159,189"); // U+6DC5
expect(() => {ms932Encoder.encode("\u6DC8")}).to.throw(Error, "EncodingError U+6DC8");
expect(() => {ms932Encoder.encode("\u6DC9")}).to.throw(Error, "EncodingError U+6DC9");
expect(() => {ms932Encoder.encode("\u6DCA")}).to.throw(Error, "EncodingError U+6DCA");
r = r && ([...ms932Encoder.encode("淋淌")].join(",") === "151,210,159,195"); // U+6DCB
expect(() => {ms932Encoder.encode("\u6DCD")}).to.throw(Error, "EncodingError U+6DCD");
expect(() => {ms932Encoder.encode("\u6DCE")}).to.throw(Error, "EncodingError U+6DCE");
r = r && ([...ms932Encoder.encode("淏")].join(",") === "251,66"); // U+6DCF
expect(() => {ms932Encoder.encode("\u6DD0")}).to.throw(Error, "EncodingError U+6DD0");
r = r && ([...ms932Encoder.encode("淑淒")].join(",") === "143,105,159,197"); // U+6DD1
expect(() => {ms932Encoder.encode("\u6DD3")}).to.throw(Error, "EncodingError U+6DD3");
expect(() => {ms932Encoder.encode("\u6DD4")}).to.throw(Error, "EncodingError U+6DD4");
r = r && ([...ms932Encoder.encode("淕")].join(",") === "159,202"); // U+6DD5
expect(() => {ms932Encoder.encode("\u6DD6")}).to.throw(Error, "EncodingError U+6DD6");
expect(() => {ms932Encoder.encode("\u6DD7")}).to.throw(Error, "EncodingError U+6DD7");
r = r && ([...ms932Encoder.encode("淘淙")].join(",") === "147,145,159,200"); // U+6DD8
expect(() => {ms932Encoder.encode("\u6DDA")}).to.throw(Error, "EncodingError U+6DDA");
expect(() => {ms932Encoder.encode("\u6DDB")}).to.throw(Error, "EncodingError U+6DDB");
expect(() => {ms932Encoder.encode("\u6DDC")}).to.throw(Error, "EncodingError U+6DDC");
expect(() => {ms932Encoder.encode("\u6DDD")}).to.throw(Error, "EncodingError U+6DDD");
r = r && ([...ms932Encoder.encode("淞")].join(",") === "159,194"); // U+6DDE
expect(() => {ms932Encoder.encode("\u6DDF")}).to.throw(Error, "EncodingError U+6DDF");
expect(() => {ms932Encoder.encode("\u6DE0")}).to.throw(Error, "EncodingError U+6DE0");
r = r && ([...ms932Encoder.encode("淡")].join(",") === "146,87"); // U+6DE1
expect(() => {ms932Encoder.encode("\u6DE2")}).to.throw(Error, "EncodingError U+6DE2");
expect(() => {ms932Encoder.encode("\u6DE3")}).to.throw(Error, "EncodingError U+6DE3");
r = r && ([...ms932Encoder.encode("淤")].join(",") === "159,201"); // U+6DE4
expect(() => {ms932Encoder.encode("\u6DE5")}).to.throw(Error, "EncodingError U+6DE5");
r = r && ([...ms932Encoder.encode("淦")].join(",") === "159,190"); // U+6DE6
expect(() => {ms932Encoder.encode("\u6DE7")}).to.throw(Error, "EncodingError U+6DE7");
r = r && ([...ms932Encoder.encode("淨")].join(",") === "159,196"); // U+6DE8
expect(() => {ms932Encoder.encode("\u6DE9")}).to.throw(Error, "EncodingError U+6DE9");
r = r && ([...ms932Encoder.encode("淪淫淬")].join(",") === "159,203,136,250,159,193"); // U+6DEA
expect(() => {ms932Encoder.encode("\u6DED")}).to.throw(Error, "EncodingError U+6DED");
r = r && ([...ms932Encoder.encode("淮")].join(",") === "159,204"); // U+6DEE
expect(() => {ms932Encoder.encode("\u6DEF")}).to.throw(Error, "EncodingError U+6DEF");
expect(() => {ms932Encoder.encode("\u6DF0")}).to.throw(Error, "EncodingError U+6DF0");
r = r && ([...ms932Encoder.encode("深淲淳")].join(",") === "144,91,251,68,143,126"); // U+6DF1
expect(() => {ms932Encoder.encode("\u6DF4")}).to.throw(Error, "EncodingError U+6DF4");
r = r && ([...ms932Encoder.encode("淵")].join(",") === "149,163"); // U+6DF5
expect(() => {ms932Encoder.encode("\u6DF6")}).to.throw(Error, "EncodingError U+6DF6");
r = r && ([...ms932Encoder.encode("混淸淹淺添淼")].join(",") === "141,172,251,67,159,185,159,199,147,89,251,69"); // U+6DF7
expect(() => {ms932Encoder.encode("\u6DFD")}).to.throw(Error, "EncodingError U+6DFD");
expect(() => {ms932Encoder.encode("\u6DFE")}).to.throw(Error, "EncodingError U+6DFE");
expect(() => {ms932Encoder.encode("\u6DFF")}).to.throw(Error, "EncodingError U+6DFF");
expect(() => {ms932Encoder.encode("\u6E00")}).to.throw(Error, "EncodingError U+6E00");
expect(() => {ms932Encoder.encode("\u6E01")}).to.throw(Error, "EncodingError U+6E01");
expect(() => {ms932Encoder.encode("\u6E02")}).to.throw(Error, "EncodingError U+6E02");
expect(() => {ms932Encoder.encode("\u6E03")}).to.throw(Error, "EncodingError U+6E03");
expect(() => {ms932Encoder.encode("\u6E04")}).to.throw(Error, "EncodingError U+6E04");
r = r && ([...ms932Encoder.encode("清")].join(",") === "144,180"); // U+6E05
expect(() => {ms932Encoder.encode("\u6E06")}).to.throw(Error, "EncodingError U+6E06");
r = r && ([...ms932Encoder.encode("渇済渉渊渋")].join(",") === "138,137,141,207,143,194,159,187,143,97"); // U+6E07
expect(() => {ms932Encoder.encode("\u6E0C")}).to.throw(Error, "EncodingError U+6E0C");
expect(() => {ms932Encoder.encode("\u6E0D")}).to.throw(Error, "EncodingError U+6E0D");
expect(() => {ms932Encoder.encode("\u6E0E")}).to.throw(Error, "EncodingError U+6E0E");
expect(() => {ms932Encoder.encode("\u6E0F")}).to.throw(Error, "EncodingError U+6E0F");
expect(() => {ms932Encoder.encode("\u6E10")}).to.throw(Error, "EncodingError U+6E10");
expect(() => {ms932Encoder.encode("\u6E11")}).to.throw(Error, "EncodingError U+6E11");
expect(() => {ms932Encoder.encode("\u6E12")}).to.throw(Error, "EncodingError U+6E12");
r = r && ([...ms932Encoder.encode("渓")].join(",") === "140,107"); // U+6E13
expect(() => {ms932Encoder.encode("\u6E14")}).to.throw(Error, "EncodingError U+6E14");
r = r && ([...ms932Encoder.encode("渕")].join(",") === "159,186"); // U+6E15
expect(() => {ms932Encoder.encode("\u6E16")}).to.throw(Error, "EncodingError U+6E16");
expect(() => {ms932Encoder.encode("\u6E17")}).to.throw(Error, "EncodingError U+6E17");
expect(() => {ms932Encoder.encode("\u6E18")}).to.throw(Error, "EncodingError U+6E18");
r = r && ([...ms932Encoder.encode("渙渚減")].join(",") === "159,208,143,141,140,184"); // U+6E19
expect(() => {ms932Encoder.encode("\u6E1C")}).to.throw(Error, "EncodingError U+6E1C");
r = r && ([...ms932Encoder.encode("渝")].join(",") === "159,223"); // U+6E1D
expect(() => {ms932Encoder.encode("\u6E1E")}).to.throw(Error, "EncodingError U+6E1E");
r = r && ([...ms932Encoder.encode("渟渠渡")].join(",") === "159,217,139,148,147,110"); // U+6E1F
expect(() => {ms932Encoder.encode("\u6E22")}).to.throw(Error, "EncodingError U+6E22");
r = r && ([...ms932Encoder.encode("渣渤渥渦渧")].join(",") === "159,212,159,221,136,173,137,81,251,72"); // U+6E23
expect(() => {ms932Encoder.encode("\u6E28")}).to.throw(Error, "EncodingError U+6E28");
r = r && ([...ms932Encoder.encode("温")].join(",") === "137,183"); // U+6E29
expect(() => {ms932Encoder.encode("\u6E2A")}).to.throw(Error, "EncodingError U+6E2A");
r = r && ([...ms932Encoder.encode("渫測渭渮港")].join(",") === "159,214,145,170,159,205,159,207,141,96"); // U+6E2B
expect(() => {ms932Encoder.encode("\u6E30")}).to.throw(Error, "EncodingError U+6E30");
expect(() => {ms932Encoder.encode("\u6E31")}).to.throw(Error, "EncodingError U+6E31");
expect(() => {ms932Encoder.encode("\u6E32")}).to.throw(Error, "EncodingError U+6E32");
expect(() => {ms932Encoder.encode("\u6E33")}).to.throw(Error, "EncodingError U+6E33");
expect(() => {ms932Encoder.encode("\u6E34")}).to.throw(Error, "EncodingError U+6E34");
expect(() => {ms932Encoder.encode("\u6E35")}).to.throw(Error, "EncodingError U+6E35");
expect(() => {ms932Encoder.encode("\u6E36")}).to.throw(Error, "EncodingError U+6E36");
expect(() => {ms932Encoder.encode("\u6E37")}).to.throw(Error, "EncodingError U+6E37");
r = r && ([...ms932Encoder.encode("游渹渺")].join(",") === "159,224,251,70,159,219"); // U+6E38
expect(() => {ms932Encoder.encode("\u6E3B")}).to.throw(Error, "EncodingError U+6E3B");
r = r && ([...ms932Encoder.encode("渼")].join(",") === "251,73"); // U+6E3C
expect(() => {ms932Encoder.encode("\u6E3D")}).to.throw(Error, "EncodingError U+6E3D");
r = r && ([...ms932Encoder.encode("渾")].join(",") === "159,211"); // U+6E3E
expect(() => {ms932Encoder.encode("\u6E3F")}).to.throw(Error, "EncodingError U+6E3F");
expect(() => {ms932Encoder.encode("\u6E40")}).to.throw(Error, "EncodingError U+6E40");
expect(() => {ms932Encoder.encode("\u6E41")}).to.throw(Error, "EncodingError U+6E41");
expect(() => {ms932Encoder.encode("\u6E42")}).to.throw(Error, "EncodingError U+6E42");
r = r && ([...ms932Encoder.encode("湃")].join(",") === "159,218"); // U+6E43
expect(() => {ms932Encoder.encode("\u6E44")}).to.throw(Error, "EncodingError U+6E44");
expect(() => {ms932Encoder.encode("\u6E45")}).to.throw(Error, "EncodingError U+6E45");
expect(() => {ms932Encoder.encode("\u6E46")}).to.throw(Error, "EncodingError U+6E46");
expect(() => {ms932Encoder.encode("\u6E47")}).to.throw(Error, "EncodingError U+6E47");
expect(() => {ms932Encoder.encode("\u6E48")}).to.throw(Error, "EncodingError U+6E48");
expect(() => {ms932Encoder.encode("\u6E49")}).to.throw(Error, "EncodingError U+6E49");
r = r && ([...ms932Encoder.encode("湊")].join(",") === "150,169"); // U+6E4A
expect(() => {ms932Encoder.encode("\u6E4B")}).to.throw(Error, "EncodingError U+6E4B");
expect(() => {ms932Encoder.encode("\u6E4C")}).to.throw(Error, "EncodingError U+6E4C");
r = r && ([...ms932Encoder.encode("湍湎")].join(",") === "159,216,159,220"); // U+6E4D
expect(() => {ms932Encoder.encode("\u6E4F")}).to.throw(Error, "EncodingError U+6E4F");
expect(() => {ms932Encoder.encode("\u6E50")}).to.throw(Error, "EncodingError U+6E50");
expect(() => {ms932Encoder.encode("\u6E51")}).to.throw(Error, "EncodingError U+6E51");
expect(() => {ms932Encoder.encode("\u6E52")}).to.throw(Error, "EncodingError U+6E52");
expect(() => {ms932Encoder.encode("\u6E53")}).to.throw(Error, "EncodingError U+6E53");
expect(() => {ms932Encoder.encode("\u6E54")}).to.throw(Error, "EncodingError U+6E54");
expect(() => {ms932Encoder.encode("\u6E55")}).to.throw(Error, "EncodingError U+6E55");
r = r && ([...ms932Encoder.encode("湖")].join(",") === "140,206"); // U+6E56
expect(() => {ms932Encoder.encode("\u6E57")}).to.throw(Error, "EncodingError U+6E57");
r = r && ([...ms932Encoder.encode("湘")].join(",") === "143,195"); // U+6E58
expect(() => {ms932Encoder.encode("\u6E59")}).to.throw(Error, "EncodingError U+6E59");
expect(() => {ms932Encoder.encode("\u6E5A")}).to.throw(Error, "EncodingError U+6E5A");
r = r && ([...ms932Encoder.encode("湛湜")].join(",") === "146,88,251,71"); // U+6E5B
expect(() => {ms932Encoder.encode("\u6E5D")}).to.throw(Error, "EncodingError U+6E5D");
expect(() => {ms932Encoder.encode("\u6E5E")}).to.throw(Error, "EncodingError U+6E5E");
r = r && ([...ms932Encoder.encode("湟")].join(",") === "159,210"); // U+6E5F
expect(() => {ms932Encoder.encode("\u6E60")}).to.throw(Error, "EncodingError U+6E60");
expect(() => {ms932Encoder.encode("\u6E61")}).to.throw(Error, "EncodingError U+6E61");
expect(() => {ms932Encoder.encode("\u6E62")}).to.throw(Error, "EncodingError U+6E62");
expect(() => {ms932Encoder.encode("\u6E63")}).to.throw(Error, "EncodingError U+6E63");
expect(() => {ms932Encoder.encode("\u6E64")}).to.throw(Error, "EncodingError U+6E64");
expect(() => {ms932Encoder.encode("\u6E65")}).to.throw(Error, "EncodingError U+6E65");
expect(() => {ms932Encoder.encode("\u6E66")}).to.throw(Error, "EncodingError U+6E66");
r = r && ([...ms932Encoder.encode("湧")].join(",") === "151,78"); // U+6E67
expect(() => {ms932Encoder.encode("\u6E68")}).to.throw(Error, "EncodingError U+6E68");
expect(() => {ms932Encoder.encode("\u6E69")}).to.throw(Error, "EncodingError U+6E69");
expect(() => {ms932Encoder.encode("\u6E6A")}).to.throw(Error, "EncodingError U+6E6A");
r = r && ([...ms932Encoder.encode("湫")].join(",") === "159,213"); // U+6E6B
expect(() => {ms932Encoder.encode("\u6E6C")}).to.throw(Error, "EncodingError U+6E6C");
expect(() => {ms932Encoder.encode("\u6E6D")}).to.throw(Error, "EncodingError U+6E6D");
r = r && ([...ms932Encoder.encode("湮湯")].join(",") === "159,206,147,146"); // U+6E6E
expect(() => {ms932Encoder.encode("\u6E70")}).to.throw(Error, "EncodingError U+6E70");
expect(() => {ms932Encoder.encode("\u6E71")}).to.throw(Error, "EncodingError U+6E71");
r = r && ([...ms932Encoder.encode("湲")].join(",") === "159,209"); // U+6E72
expect(() => {ms932Encoder.encode("\u6E73")}).to.throw(Error, "EncodingError U+6E73");
expect(() => {ms932Encoder.encode("\u6E74")}).to.throw(Error, "EncodingError U+6E74");
expect(() => {ms932Encoder.encode("\u6E75")}).to.throw(Error, "EncodingError U+6E75");
r = r && ([...ms932Encoder.encode("湶")].join(",") === "159,215"); // U+6E76
expect(() => {ms932Encoder.encode("\u6E77")}).to.throw(Error, "EncodingError U+6E77");
expect(() => {ms932Encoder.encode("\u6E78")}).to.throw(Error, "EncodingError U+6E78");
expect(() => {ms932Encoder.encode("\u6E79")}).to.throw(Error, "EncodingError U+6E79");
expect(() => {ms932Encoder.encode("\u6E7A")}).to.throw(Error, "EncodingError U+6E7A");
expect(() => {ms932Encoder.encode("\u6E7B")}).to.throw(Error, "EncodingError U+6E7B");
expect(() => {ms932Encoder.encode("\u6E7C")}).to.throw(Error, "EncodingError U+6E7C");
expect(() => {ms932Encoder.encode("\u6E7D")}).to.throw(Error, "EncodingError U+6E7D");
r = r && ([...ms932Encoder.encode("湾湿満")].join(",") === "152,112,142,188,150,158"); // U+6E7E
expect(() => {ms932Encoder.encode("\u6E81")}).to.throw(Error, "EncodingError U+6E81");
r = r && ([...ms932Encoder.encode("溂")].join(",") === "159,225"); // U+6E82
expect(() => {ms932Encoder.encode("\u6E83")}).to.throw(Error, "EncodingError U+6E83");
expect(() => {ms932Encoder.encode("\u6E84")}).to.throw(Error, "EncodingError U+6E84");
expect(() => {ms932Encoder.encode("\u6E85")}).to.throw(Error, "EncodingError U+6E85");
expect(() => {ms932Encoder.encode("\u6E86")}).to.throw(Error, "EncodingError U+6E86");
expect(() => {ms932Encoder.encode("\u6E87")}).to.throw(Error, "EncodingError U+6E87");
expect(() => {ms932Encoder.encode("\u6E88")}).to.throw(Error, "EncodingError U+6E88");
expect(() => {ms932Encoder.encode("\u6E89")}).to.throw(Error, "EncodingError U+6E89");
expect(() => {ms932Encoder.encode("\u6E8A")}).to.throw(Error, "EncodingError U+6E8A");
expect(() => {ms932Encoder.encode("\u6E8B")}).to.throw(Error, "EncodingError U+6E8B");
r = r && ([...ms932Encoder.encode("溌")].join(",") === "148,172"); // U+6E8C
expect(() => {ms932Encoder.encode("\u6E8D")}).to.throw(Error, "EncodingError U+6E8D");
expect(() => {ms932Encoder.encode("\u6E8E")}).to.throw(Error, "EncodingError U+6E8E");
r = r && ([...ms932Encoder.encode("溏源")].join(",") === "159,237,140,185"); // U+6E8F
expect(() => {ms932Encoder.encode("\u6E91")}).to.throw(Error, "EncodingError U+6E91");
expect(() => {ms932Encoder.encode("\u6E92")}).to.throw(Error, "EncodingError U+6E92");
expect(() => {ms932Encoder.encode("\u6E93")}).to.throw(Error, "EncodingError U+6E93");
expect(() => {ms932Encoder.encode("\u6E94")}).to.throw(Error, "EncodingError U+6E94");
expect(() => {ms932Encoder.encode("\u6E95")}).to.throw(Error, "EncodingError U+6E95");
r = r && ([...ms932Encoder.encode("準")].join(",") === "143,128"); // U+6E96
expect(() => {ms932Encoder.encode("\u6E97")}).to.throw(Error, "EncodingError U+6E97");
r = r && ([...ms932Encoder.encode("溘")].join(",") === "159,227"); // U+6E98
expect(() => {ms932Encoder.encode("\u6E99")}).to.throw(Error, "EncodingError U+6E99");
expect(() => {ms932Encoder.encode("\u6E9A")}).to.throw(Error, "EncodingError U+6E9A");
expect(() => {ms932Encoder.encode("\u6E9B")}).to.throw(Error, "EncodingError U+6E9B");
r = r && ([...ms932Encoder.encode("溜溝")].join(",") === "151,173,141,97"); // U+6E9C
expect(() => {ms932Encoder.encode("\u6E9E")}).to.throw(Error, "EncodingError U+6E9E");
r = r && ([...ms932Encoder.encode("溟")].join(",") === "159,240"); // U+6E9F
expect(() => {ms932Encoder.encode("\u6EA0")}).to.throw(Error, "EncodingError U+6EA0");
expect(() => {ms932Encoder.encode("\u6EA1")}).to.throw(Error, "EncodingError U+6EA1");
r = r && ([...ms932Encoder.encode("溢")].join(",") === "136,236"); // U+6EA2
expect(() => {ms932Encoder.encode("\u6EA3")}).to.throw(Error, "EncodingError U+6EA3");
expect(() => {ms932Encoder.encode("\u6EA4")}).to.throw(Error, "EncodingError U+6EA4");
r = r && ([...ms932Encoder.encode("溥")].join(",") === "159,238"); // U+6EA5
expect(() => {ms932Encoder.encode("\u6EA6")}).to.throw(Error, "EncodingError U+6EA6");
expect(() => {ms932Encoder.encode("\u6EA7")}).to.throw(Error, "EncodingError U+6EA7");
expect(() => {ms932Encoder.encode("\u6EA8")}).to.throw(Error, "EncodingError U+6EA8");
expect(() => {ms932Encoder.encode("\u6EA9")}).to.throw(Error, "EncodingError U+6EA9");
r = r && ([...ms932Encoder.encode("溪")].join(",") === "159,226"); // U+6EAA
expect(() => {ms932Encoder.encode("\u6EAB")}).to.throw(Error, "EncodingError U+6EAB");
expect(() => {ms932Encoder.encode("\u6EAC")}).to.throw(Error, "EncodingError U+6EAC");
expect(() => {ms932Encoder.encode("\u6EAD")}).to.throw(Error, "EncodingError U+6EAD");
expect(() => {ms932Encoder.encode("\u6EAE")}).to.throw(Error, "EncodingError U+6EAE");
r = r && ([...ms932Encoder.encode("溯")].join(",") === "159,232"); // U+6EAF
expect(() => {ms932Encoder.encode("\u6EB0")}).to.throw(Error, "EncodingError U+6EB0");
expect(() => {ms932Encoder.encode("\u6EB1")}).to.throw(Error, "EncodingError U+6EB1");
r = r && ([...ms932Encoder.encode("溲")].join(",") === "159,234"); // U+6EB2
expect(() => {ms932Encoder.encode("\u6EB3")}).to.throw(Error, "EncodingError U+6EB3");
expect(() => {ms932Encoder.encode("\u6EB4")}).to.throw(Error, "EncodingError U+6EB4");
expect(() => {ms932Encoder.encode("\u6EB5")}).to.throw(Error, "EncodingError U+6EB5");
r = r && ([...ms932Encoder.encode("溶溷")].join(",") === "151,110,159,229"); // U+6EB6
expect(() => {ms932Encoder.encode("\u6EB8")}).to.throw(Error, "EncodingError U+6EB8");
expect(() => {ms932Encoder.encode("\u6EB9")}).to.throw(Error, "EncodingError U+6EB9");
r = r && ([...ms932Encoder.encode("溺")].join(",") === "147,77"); // U+6EBA
expect(() => {ms932Encoder.encode("\u6EBB")}).to.throw(Error, "EncodingError U+6EBB");
expect(() => {ms932Encoder.encode("\u6EBC")}).to.throw(Error, "EncodingError U+6EBC");
r = r && ([...ms932Encoder.encode("溽")].join(",") === "159,231"); // U+6EBD
expect(() => {ms932Encoder.encode("\u6EBE")}).to.throw(Error, "EncodingError U+6EBE");
r = r && ([...ms932Encoder.encode("溿")].join(",") === "251,74"); // U+6EBF
expect(() => {ms932Encoder.encode("\u6EC0")}).to.throw(Error, "EncodingError U+6EC0");
expect(() => {ms932Encoder.encode("\u6EC1")}).to.throw(Error, "EncodingError U+6EC1");
r = r && ([...ms932Encoder.encode("滂")].join(",") === "159,239"); // U+6EC2
expect(() => {ms932Encoder.encode("\u6EC3")}).to.throw(Error, "EncodingError U+6EC3");
r = r && ([...ms932Encoder.encode("滄滅")].join(",") === "159,233,150,197"); // U+6EC4
expect(() => {ms932Encoder.encode("\u6EC6")}).to.throw(Error, "EncodingError U+6EC6");
expect(() => {ms932Encoder.encode("\u6EC7")}).to.throw(Error, "EncodingError U+6EC7");
expect(() => {ms932Encoder.encode("\u6EC8")}).to.throw(Error, "EncodingError U+6EC8");
r = r && ([...ms932Encoder.encode("滉")].join(",") === "159,228"); // U+6EC9
expect(() => {ms932Encoder.encode("\u6ECA")}).to.throw(Error, "EncodingError U+6ECA");
r = r && ([...ms932Encoder.encode("滋滌")].join(",") === "142,160,159,252"); // U+6ECB
expect(() => {ms932Encoder.encode("\u6ECD")}).to.throw(Error, "EncodingError U+6ECD");
expect(() => {ms932Encoder.encode("\u6ECE")}).to.throw(Error, "EncodingError U+6ECE");
expect(() => {ms932Encoder.encode("\u6ECF")}).to.throw(Error, "EncodingError U+6ECF");
expect(() => {ms932Encoder.encode("\u6ED0")}).to.throw(Error, "EncodingError U+6ED0");
r = r && ([...ms932Encoder.encode("滑")].join(",") === "138,138"); // U+6ED1
expect(() => {ms932Encoder.encode("\u6ED2")}).to.throw(Error, "EncodingError U+6ED2");
r = r && ([...ms932Encoder.encode("滓滔滕")].join(",") === "159,230,159,235,159,236"); // U+6ED3
expect(() => {ms932Encoder.encode("\u6ED6")}).to.throw(Error, "EncodingError U+6ED6");
expect(() => {ms932Encoder.encode("\u6ED7")}).to.throw(Error, "EncodingError U+6ED7");
expect(() => {ms932Encoder.encode("\u6ED8")}).to.throw(Error, "EncodingError U+6ED8");
expect(() => {ms932Encoder.encode("\u6ED9")}).to.throw(Error, "EncodingError U+6ED9");
expect(() => {ms932Encoder.encode("\u6EDA")}).to.throw(Error, "EncodingError U+6EDA");
expect(() => {ms932Encoder.encode("\u6EDB")}).to.throw(Error, "EncodingError U+6EDB");
expect(() => {ms932Encoder.encode("\u6EDC")}).to.throw(Error, "EncodingError U+6EDC");
r = r && ([...ms932Encoder.encode("滝滞")].join(",") === "145,234,145,216"); // U+6EDD
expect(() => {ms932Encoder.encode("\u6EDF")}).to.throw(Error, "EncodingError U+6EDF");
expect(() => {ms932Encoder.encode("\u6EE0")}).to.throw(Error, "EncodingError U+6EE0");
expect(() => {ms932Encoder.encode("\u6EE1")}).to.throw(Error, "EncodingError U+6EE1");
expect(() => {ms932Encoder.encode("\u6EE2")}).to.throw(Error, "EncodingError U+6EE2");
expect(() => {ms932Encoder.encode("\u6EE3")}).to.throw(Error, "EncodingError U+6EE3");
expect(() => {ms932Encoder.encode("\u6EE4")}).to.throw(Error, "EncodingError U+6EE4");
expect(() => {ms932Encoder.encode("\u6EE5")}).to.throw(Error, "EncodingError U+6EE5");
expect(() => {ms932Encoder.encode("\u6EE6")}).to.throw(Error, "EncodingError U+6EE6");
expect(() => {ms932Encoder.encode("\u6EE7")}).to.throw(Error, "EncodingError U+6EE7");
expect(() => {ms932Encoder.encode("\u6EE8")}).to.throw(Error, "EncodingError U+6EE8");
expect(() => {ms932Encoder.encode("\u6EE9")}).to.throw(Error, "EncodingError U+6EE9");
expect(() => {ms932Encoder.encode("\u6EEA")}).to.throw(Error, "EncodingError U+6EEA");
expect(() => {ms932Encoder.encode("\u6EEB")}).to.throw(Error, "EncodingError U+6EEB");
r = r && ([...ms932Encoder.encode("滬")].join(",") === "159,244"); // U+6EEC
expect(() => {ms932Encoder.encode("\u6EED")}).to.throw(Error, "EncodingError U+6EED");
expect(() => {ms932Encoder.encode("\u6EEE")}).to.throw(Error, "EncodingError U+6EEE");
r = r && ([...ms932Encoder.encode("滯")].join(",") === "159,250"); // U+6EEF
expect(() => {ms932Encoder.encode("\u6EF0")}).to.throw(Error, "EncodingError U+6EF0");
expect(() => {ms932Encoder.encode("\u6EF1")}).to.throw(Error, "EncodingError U+6EF1");
r = r && ([...ms932Encoder.encode("滲")].join(",") === "159,248"); // U+6EF2
expect(() => {ms932Encoder.encode("\u6EF3")}).to.throw(Error, "EncodingError U+6EF3");
r = r && ([...ms932Encoder.encode("滴")].join(",") === "147,72"); // U+6EF4
expect(() => {ms932Encoder.encode("\u6EF5")}).to.throw(Error, "EncodingError U+6EF5");
expect(() => {ms932Encoder.encode("\u6EF6")}).to.throw(Error, "EncodingError U+6EF6");
r = r && ([...ms932Encoder.encode("滷滸")].join(",") === "224,66,159,245"); // U+6EF7
expect(() => {ms932Encoder.encode("\u6EF9")}).to.throw(Error, "EncodingError U+6EF9");
expect(() => {ms932Encoder.encode("\u6EFA")}).to.throw(Error, "EncodingError U+6EFA");
expect(() => {ms932Encoder.encode("\u6EFB")}).to.throw(Error, "EncodingError U+6EFB");
expect(() => {ms932Encoder.encode("\u6EFC")}).to.throw(Error, "EncodingError U+6EFC");
expect(() => {ms932Encoder.encode("\u6EFD")}).to.throw(Error, "EncodingError U+6EFD");
r = r && ([...ms932Encoder.encode("滾滿")].join(",") === "159,246,159,222"); // U+6EFE
expect(() => {ms932Encoder.encode("\u6F00")}).to.throw(Error, "EncodingError U+6F00");
r = r && ([...ms932Encoder.encode("漁漂")].join(",") === "139,153,149,89"); // U+6F01
expect(() => {ms932Encoder.encode("\u6F03")}).to.throw(Error, "EncodingError U+6F03");
expect(() => {ms932Encoder.encode("\u6F04")}).to.throw(Error, "EncodingError U+6F04");
expect(() => {ms932Encoder.encode("\u6F05")}).to.throw(Error, "EncodingError U+6F05");
r = r && ([...ms932Encoder.encode("漆")].join(",") === "142,189"); // U+6F06
expect(() => {ms932Encoder.encode("\u6F07")}).to.throw(Error, "EncodingError U+6F07");
expect(() => {ms932Encoder.encode("\u6F08")}).to.throw(Error, "EncodingError U+6F08");
r = r && ([...ms932Encoder.encode("漉")].join(",") === "141,151"); // U+6F09
expect(() => {ms932Encoder.encode("\u6F0A")}).to.throw(Error, "EncodingError U+6F0A");
expect(() => {ms932Encoder.encode("\u6F0B")}).to.throw(Error, "EncodingError U+6F0B");
expect(() => {ms932Encoder.encode("\u6F0C")}).to.throw(Error, "EncodingError U+6F0C");
expect(() => {ms932Encoder.encode("\u6F0D")}).to.throw(Error, "EncodingError U+6F0D");
expect(() => {ms932Encoder.encode("\u6F0E")}).to.throw(Error, "EncodingError U+6F0E");
r = r && ([...ms932Encoder.encode("漏")].join(",") === "152,82"); // U+6F0F
expect(() => {ms932Encoder.encode("\u6F10")}).to.throw(Error, "EncodingError U+6F10");
r = r && ([...ms932Encoder.encode("漑")].join(",") === "159,242"); // U+6F11
expect(() => {ms932Encoder.encode("\u6F12")}).to.throw(Error, "EncodingError U+6F12");
r = r && ([...ms932Encoder.encode("漓演漕")].join(",") === "224,65,137,137,145,134"); // U+6F13
expect(() => {ms932Encoder.encode("\u6F16")}).to.throw(Error, "EncodingError U+6F16");
expect(() => {ms932Encoder.encode("\u6F17")}).to.throw(Error, "EncodingError U+6F17");
expect(() => {ms932Encoder.encode("\u6F18")}).to.throw(Error, "EncodingError U+6F18");
expect(() => {ms932Encoder.encode("\u6F19")}).to.throw(Error, "EncodingError U+6F19");
expect(() => {ms932Encoder.encode("\u6F1A")}).to.throw(Error, "EncodingError U+6F1A");
expect(() => {ms932Encoder.encode("\u6F1B")}).to.throw(Error, "EncodingError U+6F1B");
expect(() => {ms932Encoder.encode("\u6F1C")}).to.throw(Error, "EncodingError U+6F1C");
expect(() => {ms932Encoder.encode("\u6F1D")}).to.throw(Error, "EncodingError U+6F1D");
expect(() => {ms932Encoder.encode("\u6F1E")}).to.throw(Error, "EncodingError U+6F1E");
expect(() => {ms932Encoder.encode("\u6F1F")}).to.throw(Error, "EncodingError U+6F1F");
r = r && ([...ms932Encoder.encode("漠")].join(",") === "148,153"); // U+6F20
expect(() => {ms932Encoder.encode("\u6F21")}).to.throw(Error, "EncodingError U+6F21");
r = r && ([...ms932Encoder.encode("漢漣")].join(",") === "138,191,151,248"); // U+6F22
expect(() => {ms932Encoder.encode("\u6F24")}).to.throw(Error, "EncodingError U+6F24");
expect(() => {ms932Encoder.encode("\u6F25")}).to.throw(Error, "EncodingError U+6F25");
expect(() => {ms932Encoder.encode("\u6F26")}).to.throw(Error, "EncodingError U+6F26");
expect(() => {ms932Encoder.encode("\u6F27")}).to.throw(Error, "EncodingError U+6F27");
expect(() => {ms932Encoder.encode("\u6F28")}).to.throw(Error, "EncodingError U+6F28");
expect(() => {ms932Encoder.encode("\u6F29")}).to.throw(Error, "EncodingError U+6F29");
expect(() => {ms932Encoder.encode("\u6F2A")}).to.throw(Error, "EncodingError U+6F2A");
r = r && ([...ms932Encoder.encode("漫漬")].join(",") === "150,159,146,208"); // U+6F2B
expect(() => {ms932Encoder.encode("\u6F2D")}).to.throw(Error, "EncodingError U+6F2D");
expect(() => {ms932Encoder.encode("\u6F2E")}).to.throw(Error, "EncodingError U+6F2E");
expect(() => {ms932Encoder.encode("\u6F2F")}).to.throw(Error, "EncodingError U+6F2F");
expect(() => {ms932Encoder.encode("\u6F30")}).to.throw(Error, "EncodingError U+6F30");
r = r && ([...ms932Encoder.encode("漱漲")].join(",") === "159,249,159,251"); // U+6F31
expect(() => {ms932Encoder.encode("\u6F33")}).to.throw(Error, "EncodingError U+6F33");
expect(() => {ms932Encoder.encode("\u6F34")}).to.throw(Error, "EncodingError U+6F34");
expect(() => {ms932Encoder.encode("\u6F35")}).to.throw(Error, "EncodingError U+6F35");
expect(() => {ms932Encoder.encode("\u6F36")}).to.throw(Error, "EncodingError U+6F36");
expect(() => {ms932Encoder.encode("\u6F37")}).to.throw(Error, "EncodingError U+6F37");
r = r && ([...ms932Encoder.encode("漸")].join(",") === "145,81"); // U+6F38
expect(() => {ms932Encoder.encode("\u6F39")}).to.throw(Error, "EncodingError U+6F39");
expect(() => {ms932Encoder.encode("\u6F3A")}).to.throw(Error, "EncodingError U+6F3A");
expect(() => {ms932Encoder.encode("\u6F3B")}).to.throw(Error, "EncodingError U+6F3B");
expect(() => {ms932Encoder.encode("\u6F3C")}).to.throw(Error, "EncodingError U+6F3C");
expect(() => {ms932Encoder.encode("\u6F3D")}).to.throw(Error, "EncodingError U+6F3D");
r = r && ([...ms932Encoder.encode("漾漿")].join(",") === "224,64,159,247"); // U+6F3E
expect(() => {ms932Encoder.encode("\u6F40")}).to.throw(Error, "EncodingError U+6F40");
r = r && ([...ms932Encoder.encode("潁")].join(",") === "159,241"); // U+6F41
expect(() => {ms932Encoder.encode("\u6F42")}).to.throw(Error, "EncodingError U+6F42");
expect(() => {ms932Encoder.encode("\u6F43")}).to.throw(Error, "EncodingError U+6F43");
expect(() => {ms932Encoder.encode("\u6F44")}).to.throw(Error, "EncodingError U+6F44");
r = r && ([...ms932Encoder.encode("潅")].join(",") === "138,193"); // U+6F45
expect(() => {ms932Encoder.encode("\u6F46")}).to.throw(Error, "EncodingError U+6F46");
expect(() => {ms932Encoder.encode("\u6F47")}).to.throw(Error, "EncodingError U+6F47");
expect(() => {ms932Encoder.encode("\u6F48")}).to.throw(Error, "EncodingError U+6F48");
expect(() => {ms932Encoder.encode("\u6F49")}).to.throw(Error, "EncodingError U+6F49");
expect(() => {ms932Encoder.encode("\u6F4A")}).to.throw(Error, "EncodingError U+6F4A");
expect(() => {ms932Encoder.encode("\u6F4B")}).to.throw(Error, "EncodingError U+6F4B");
expect(() => {ms932Encoder.encode("\u6F4C")}).to.throw(Error, "EncodingError U+6F4C");
expect(() => {ms932Encoder.encode("\u6F4D")}).to.throw(Error, "EncodingError U+6F4D");
expect(() => {ms932Encoder.encode("\u6F4E")}).to.throw(Error, "EncodingError U+6F4E");
expect(() => {ms932Encoder.encode("\u6F4F")}).to.throw(Error, "EncodingError U+6F4F");
expect(() => {ms932Encoder.encode("\u6F50")}).to.throw(Error, "EncodingError U+6F50");
expect(() => {ms932Encoder.encode("\u6F51")}).to.throw(Error, "EncodingError U+6F51");
expect(() => {ms932Encoder.encode("\u6F52")}).to.throw(Error, "EncodingError U+6F52");
expect(() => {ms932Encoder.encode("\u6F53")}).to.throw(Error, "EncodingError U+6F53");
r = r && ([...ms932Encoder.encode("潔")].join(",") === "140,137"); // U+6F54
expect(() => {ms932Encoder.encode("\u6F55")}).to.throw(Error, "EncodingError U+6F55");
expect(() => {ms932Encoder.encode("\u6F56")}).to.throw(Error, "EncodingError U+6F56");
expect(() => {ms932Encoder.encode("\u6F57")}).to.throw(Error, "EncodingError U+6F57");
r = r && ([...ms932Encoder.encode("潘")].join(",") === "224,78"); // U+6F58
expect(() => {ms932Encoder.encode("\u6F59")}).to.throw(Error, "EncodingError U+6F59");
expect(() => {ms932Encoder.encode("\u6F5A")}).to.throw(Error, "EncodingError U+6F5A");
r = r && ([...ms932Encoder.encode("潛潜")].join(",") === "224,73,144,246"); // U+6F5B
expect(() => {ms932Encoder.encode("\u6F5D")}).to.throw(Error, "EncodingError U+6F5D");
expect(() => {ms932Encoder.encode("\u6F5E")}).to.throw(Error, "EncodingError U+6F5E");
r = r && ([...ms932Encoder.encode("潟")].join(",") === "138,131"); // U+6F5F
expect(() => {ms932Encoder.encode("\u6F60")}).to.throw(Error, "EncodingError U+6F60");
expect(() => {ms932Encoder.encode("\u6F61")}).to.throw(Error, "EncodingError U+6F61");
expect(() => {ms932Encoder.encode("\u6F62")}).to.throw(Error, "EncodingError U+6F62");
expect(() => {ms932Encoder.encode("\u6F63")}).to.throw(Error, "EncodingError U+6F63");
r = r && ([...ms932Encoder.encode("潤")].join(",") === "143,129"); // U+6F64
expect(() => {ms932Encoder.encode("\u6F65")}).to.throw(Error, "EncodingError U+6F65");
r = r && ([...ms932Encoder.encode("潦")].join(",") === "224,82"); // U+6F66
expect(() => {ms932Encoder.encode("\u6F67")}).to.throw(Error, "EncodingError U+6F67");
expect(() => {ms932Encoder.encode("\u6F68")}).to.throw(Error, "EncodingError U+6F68");
expect(() => {ms932Encoder.encode("\u6F69")}).to.throw(Error, "EncodingError U+6F69");
expect(() => {ms932Encoder.encode("\u6F6A")}).to.throw(Error, "EncodingError U+6F6A");
expect(() => {ms932Encoder.encode("\u6F6B")}).to.throw(Error, "EncodingError U+6F6B");
expect(() => {ms932Encoder.encode("\u6F6C")}).to.throw(Error, "EncodingError U+6F6C");
r = r && ([...ms932Encoder.encode("潭潮潯潰")].join(",") === "224,75,146,170,224,72,146,215"); // U+6F6D
expect(() => {ms932Encoder.encode("\u6F71")}).to.throw(Error, "EncodingError U+6F71");
expect(() => {ms932Encoder.encode("\u6F72")}).to.throw(Error, "EncodingError U+6F72");
expect(() => {ms932Encoder.encode("\u6F73")}).to.throw(Error, "EncodingError U+6F73");
r = r && ([...ms932Encoder.encode("潴")].join(",") === "224,107"); // U+6F74
expect(() => {ms932Encoder.encode("\u6F75")}).to.throw(Error, "EncodingError U+6F75");
expect(() => {ms932Encoder.encode("\u6F76")}).to.throw(Error, "EncodingError U+6F76");
expect(() => {ms932Encoder.encode("\u6F77")}).to.throw(Error, "EncodingError U+6F77");
r = r && ([...ms932Encoder.encode("潸")].join(",") === "224,69"); // U+6F78
expect(() => {ms932Encoder.encode("\u6F79")}).to.throw(Error, "EncodingError U+6F79");
r = r && ([...ms932Encoder.encode("潺")].join(",") === "224,68"); // U+6F7A
expect(() => {ms932Encoder.encode("\u6F7B")}).to.throw(Error, "EncodingError U+6F7B");
r = r && ([...ms932Encoder.encode("潼")].join(",") === "224,77"); // U+6F7C
expect(() => {ms932Encoder.encode("\u6F7D")}).to.throw(Error, "EncodingError U+6F7D");
expect(() => {ms932Encoder.encode("\u6F7E")}).to.throw(Error, "EncodingError U+6F7E");
expect(() => {ms932Encoder.encode("\u6F7F")}).to.throw(Error, "EncodingError U+6F7F");
r = r && ([...ms932Encoder.encode("澀澁澂")].join(",") === "224,71,224,70,224,76"); // U+6F80
expect(() => {ms932Encoder.encode("\u6F83")}).to.throw(Error, "EncodingError U+6F83");
r = r && ([...ms932Encoder.encode("澄")].join(",") === "144,159"); // U+6F84
expect(() => {ms932Encoder.encode("\u6F85")}).to.throw(Error, "EncodingError U+6F85");
r = r && ([...ms932Encoder.encode("澆")].join(",") === "224,67"); // U+6F86
expect(() => {ms932Encoder.encode("\u6F87")}).to.throw(Error, "EncodingError U+6F87");
r = r && ([...ms932Encoder.encode("澈")].join(",") === "251,75"); // U+6F88
expect(() => {ms932Encoder.encode("\u6F89")}).to.throw(Error, "EncodingError U+6F89");
expect(() => {ms932Encoder.encode("\u6F8A")}).to.throw(Error, "EncodingError U+6F8A");
expect(() => {ms932Encoder.encode("\u6F8B")}).to.throw(Error, "EncodingError U+6F8B");
expect(() => {ms932Encoder.encode("\u6F8C")}).to.throw(Error, "EncodingError U+6F8C");
expect(() => {ms932Encoder.encode("\u6F8D")}).to.throw(Error, "EncodingError U+6F8D");
r = r && ([...ms932Encoder.encode("澎")].join(",") === "224,79"); // U+6F8E
expect(() => {ms932Encoder.encode("\u6F8F")}).to.throw(Error, "EncodingError U+6F8F");
expect(() => {ms932Encoder.encode("\u6F90")}).to.throw(Error, "EncodingError U+6F90");
r = r && ([...ms932Encoder.encode("澑")].join(",") === "224,80"); // U+6F91
expect(() => {ms932Encoder.encode("\u6F92")}).to.throw(Error, "EncodingError U+6F92");
expect(() => {ms932Encoder.encode("\u6F93")}).to.throw(Error, "EncodingError U+6F93");
expect(() => {ms932Encoder.encode("\u6F94")}).to.throw(Error, "EncodingError U+6F94");
expect(() => {ms932Encoder.encode("\u6F95")}).to.throw(Error, "EncodingError U+6F95");
expect(() => {ms932Encoder.encode("\u6F96")}).to.throw(Error, "EncodingError U+6F96");
r = r && ([...ms932Encoder.encode("澗")].join(",") === "138,192"); // U+6F97
expect(() => {ms932Encoder.encode("\u6F98")}).to.throw(Error, "EncodingError U+6F98");
expect(() => {ms932Encoder.encode("\u6F99")}).to.throw(Error, "EncodingError U+6F99");
expect(() => {ms932Encoder.encode("\u6F9A")}).to.throw(Error, "EncodingError U+6F9A");
expect(() => {ms932Encoder.encode("\u6F9B")}).to.throw(Error, "EncodingError U+6F9B");
expect(() => {ms932Encoder.encode("\u6F9C")}).to.throw(Error, "EncodingError U+6F9C");
expect(() => {ms932Encoder.encode("\u6F9D")}).to.throw(Error, "EncodingError U+6F9D");
expect(() => {ms932Encoder.encode("\u6F9E")}).to.throw(Error, "EncodingError U+6F9E");
expect(() => {ms932Encoder.encode("\u6F9F")}).to.throw(Error, "EncodingError U+6F9F");
expect(() => {ms932Encoder.encode("\u6FA0")}).to.throw(Error, "EncodingError U+6FA0");
r = r && ([...ms932Encoder.encode("澡")].join(",") === "224,85"); // U+6FA1
expect(() => {ms932Encoder.encode("\u6FA2")}).to.throw(Error, "EncodingError U+6FA2");
r = r && ([...ms932Encoder.encode("澣澤")].join(",") === "224,84,224,86"); // U+6FA3
expect(() => {ms932Encoder.encode("\u6FA5")}).to.throw(Error, "EncodingError U+6FA5");
expect(() => {ms932Encoder.encode("\u6FA6")}).to.throw(Error, "EncodingError U+6FA6");
expect(() => {ms932Encoder.encode("\u6FA7")}).to.throw(Error, "EncodingError U+6FA7");
expect(() => {ms932Encoder.encode("\u6FA8")}).to.throw(Error, "EncodingError U+6FA8");
expect(() => {ms932Encoder.encode("\u6FA9")}).to.throw(Error, "EncodingError U+6FA9");
r = r && ([...ms932Encoder.encode("澪")].join(",") === "224,89"); // U+6FAA
expect(() => {ms932Encoder.encode("\u6FAB")}).to.throw(Error, "EncodingError U+6FAB");
expect(() => {ms932Encoder.encode("\u6FAC")}).to.throw(Error, "EncodingError U+6FAC");
expect(() => {ms932Encoder.encode("\u6FAD")}).to.throw(Error, "EncodingError U+6FAD");
expect(() => {ms932Encoder.encode("\u6FAE")}).to.throw(Error, "EncodingError U+6FAE");
expect(() => {ms932Encoder.encode("\u6FAF")}).to.throw(Error, "EncodingError U+6FAF");
expect(() => {ms932Encoder.encode("\u6FB0")}).to.throw(Error, "EncodingError U+6FB0");
r = r && ([...ms932Encoder.encode("澱")].join(",") === "147,98"); // U+6FB1
expect(() => {ms932Encoder.encode("\u6FB2")}).to.throw(Error, "EncodingError U+6FB2");
r = r && ([...ms932Encoder.encode("澳")].join(",") === "224,83"); // U+6FB3
expect(() => {ms932Encoder.encode("\u6FB4")}).to.throw(Error, "EncodingError U+6FB4");
r = r && ([...ms932Encoder.encode("澵")].join(",") === "251,76"); // U+6FB5
expect(() => {ms932Encoder.encode("\u6FB6")}).to.throw(Error, "EncodingError U+6FB6");
expect(() => {ms932Encoder.encode("\u6FB7")}).to.throw(Error, "EncodingError U+6FB7");
expect(() => {ms932Encoder.encode("\u6FB8")}).to.throw(Error, "EncodingError U+6FB8");
r = r && ([...ms932Encoder.encode("澹")].join(",") === "224,87"); // U+6FB9
expect(() => {ms932Encoder.encode("\u6FBA")}).to.throw(Error, "EncodingError U+6FBA");
expect(() => {ms932Encoder.encode("\u6FBB")}).to.throw(Error, "EncodingError U+6FBB");
expect(() => {ms932Encoder.encode("\u6FBC")}).to.throw(Error, "EncodingError U+6FBC");
expect(() => {ms932Encoder.encode("\u6FBD")}).to.throw(Error, "EncodingError U+6FBD");
expect(() => {ms932Encoder.encode("\u6FBE")}).to.throw(Error, "EncodingError U+6FBE");
expect(() => {ms932Encoder.encode("\u6FBF")}).to.throw(Error, "EncodingError U+6FBF");
r = r && ([...ms932Encoder.encode("激濁濂濃")].join(",") === "140,131,145,247,224,81,148,90"); // U+6FC0
expect(() => {ms932Encoder.encode("\u6FC4")}).to.throw(Error, "EncodingError U+6FC4");
expect(() => {ms932Encoder.encode("\u6FC5")}).to.throw(Error, "EncodingError U+6FC5");
r = r && ([...ms932Encoder.encode("濆")].join(",") === "224,88"); // U+6FC6
expect(() => {ms932Encoder.encode("\u6FC7")}).to.throw(Error, "EncodingError U+6FC7");
expect(() => {ms932Encoder.encode("\u6FC8")}).to.throw(Error, "EncodingError U+6FC8");
expect(() => {ms932Encoder.encode("\u6FC9")}).to.throw(Error, "EncodingError U+6FC9");
expect(() => {ms932Encoder.encode("\u6FCA")}).to.throw(Error, "EncodingError U+6FCA");
expect(() => {ms932Encoder.encode("\u6FCB")}).to.throw(Error, "EncodingError U+6FCB");
expect(() => {ms932Encoder.encode("\u6FCC")}).to.throw(Error, "EncodingError U+6FCC");
expect(() => {ms932Encoder.encode("\u6FCD")}).to.throw(Error, "EncodingError U+6FCD");
expect(() => {ms932Encoder.encode("\u6FCE")}).to.throw(Error, "EncodingError U+6FCE");
expect(() => {ms932Encoder.encode("\u6FCF")}).to.throw(Error, "EncodingError U+6FCF");
expect(() => {ms932Encoder.encode("\u6FD0")}).to.throw(Error, "EncodingError U+6FD0");
expect(() => {ms932Encoder.encode("\u6FD1")}).to.throw(Error, "EncodingError U+6FD1");
expect(() => {ms932Encoder.encode("\u6FD2")}).to.throw(Error, "EncodingError U+6FD2");
expect(() => {ms932Encoder.encode("\u6FD3")}).to.throw(Error, "EncodingError U+6FD3");
r = r && ([...ms932Encoder.encode("濔濕")].join(",") === "224,93,224,91"); // U+6FD4
expect(() => {ms932Encoder.encode("\u6FD6")}).to.throw(Error, "EncodingError U+6FD6");
expect(() => {ms932Encoder.encode("\u6FD7")}).to.throw(Error, "EncodingError U+6FD7");
r = r && ([...ms932Encoder.encode("濘")].join(",") === "224,94"); // U+6FD8
expect(() => {ms932Encoder.encode("\u6FD9")}).to.throw(Error, "EncodingError U+6FD9");
expect(() => {ms932Encoder.encode("\u6FDA")}).to.throw(Error, "EncodingError U+6FDA");
r = r && ([...ms932Encoder.encode("濛")].join(",") === "224,97"); // U+6FDB
expect(() => {ms932Encoder.encode("\u6FDC")}).to.throw(Error, "EncodingError U+6FDC");
expect(() => {ms932Encoder.encode("\u6FDD")}).to.throw(Error, "EncodingError U+6FDD");
expect(() => {ms932Encoder.encode("\u6FDE")}).to.throw(Error, "EncodingError U+6FDE");
r = r && ([...ms932Encoder.encode("濟濠濡")].join(",") === "224,90,141,138,148,71"); // U+6FDF
expect(() => {ms932Encoder.encode("\u6FE2")}).to.throw(Error, "EncodingError U+6FE2");
expect(() => {ms932Encoder.encode("\u6FE3")}).to.throw(Error, "EncodingError U+6FE3");
r = r && ([...ms932Encoder.encode("濤")].join(",") === "159,183"); // U+6FE4
expect(() => {ms932Encoder.encode("\u6FE5")}).to.throw(Error, "EncodingError U+6FE5");
expect(() => {ms932Encoder.encode("\u6FE6")}).to.throw(Error, "EncodingError U+6FE6");
expect(() => {ms932Encoder.encode("\u6FE7")}).to.throw(Error, "EncodingError U+6FE7");
expect(() => {ms932Encoder.encode("\u6FE8")}).to.throw(Error, "EncodingError U+6FE8");
expect(() => {ms932Encoder.encode("\u6FE9")}).to.throw(Error, "EncodingError U+6FE9");
expect(() => {ms932Encoder.encode("\u6FEA")}).to.throw(Error, "EncodingError U+6FEA");
r = r && ([...ms932Encoder.encode("濫濬")].join(",") === "151,148,224,92"); // U+6FEB
expect(() => {ms932Encoder.encode("\u6FED")}).to.throw(Error, "EncodingError U+6FED");
r = r && ([...ms932Encoder.encode("濮濯")].join(",") === "224,96,145,243"); // U+6FEE
expect(() => {ms932Encoder.encode("\u6FF0")}).to.throw(Error, "EncodingError U+6FF0");
r = r && ([...ms932Encoder.encode("濱")].join(",") === "224,95"); // U+6FF1
expect(() => {ms932Encoder.encode("\u6FF2")}).to.throw(Error, "EncodingError U+6FF2");
r = r && ([...ms932Encoder.encode("濳")].join(",") === "224,74"); // U+6FF3
expect(() => {ms932Encoder.encode("\u6FF4")}).to.throw(Error, "EncodingError U+6FF4");
r = r && ([...ms932Encoder.encode("濵濶")].join(",") === "251,77,232,137"); // U+6FF5
expect(() => {ms932Encoder.encode("\u6FF7")}).to.throw(Error, "EncodingError U+6FF7");
expect(() => {ms932Encoder.encode("\u6FF8")}).to.throw(Error, "EncodingError U+6FF8");
expect(() => {ms932Encoder.encode("\u6FF9")}).to.throw(Error, "EncodingError U+6FF9");
r = r && ([...ms932Encoder.encode("濺")].join(",") === "224,100"); // U+6FFA
expect(() => {ms932Encoder.encode("\u6FFB")}).to.throw(Error, "EncodingError U+6FFB");
expect(() => {ms932Encoder.encode("\u6FFC")}).to.throw(Error, "EncodingError U+6FFC");
expect(() => {ms932Encoder.encode("\u6FFD")}).to.throw(Error, "EncodingError U+6FFD");
r = r && ([...ms932Encoder.encode("濾")].join(",") === "224,104"); // U+6FFE
expect(() => {ms932Encoder.encode("\u6FFF")}).to.throw(Error, "EncodingError U+6FFF");

expect(r).to.equal(true);

  });

});
