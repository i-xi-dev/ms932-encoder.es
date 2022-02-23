import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 6", () => {

  it("encode(string) - U+5C00-U+5FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u5C00")}).to.throw(Error, "EncodingError U+5C00");
r = r && ([...ms932Encoder.encode("封専")].join(",") === "149,149,144,234"); // U+5C01
expect(() => {ms932Encoder.encode("\u5C03")}).to.throw(Error, "EncodingError U+5C03");
r = r && ([...ms932Encoder.encode("射尅将將專尉尊尋")].join(",") === "142,203,155,145,143,171,155,146,155,147,136,209,145,184,144,113"); // U+5C04
expect(() => {ms932Encoder.encode("\u5C0C")}).to.throw(Error, "EncodingError U+5C0C");
r = r && ([...ms932Encoder.encode("對導小")].join(",") === "155,148,147,177,143,172"); // U+5C0D
expect(() => {ms932Encoder.encode("\u5C10")}).to.throw(Error, "EncodingError U+5C10");
r = r && ([...ms932Encoder.encode("少")].join(",") === "143,173"); // U+5C11
expect(() => {ms932Encoder.encode("\u5C12")}).to.throw(Error, "EncodingError U+5C12");
r = r && ([...ms932Encoder.encode("尓")].join(",") === "155,149"); // U+5C13
expect(() => {ms932Encoder.encode("\u5C14")}).to.throw(Error, "EncodingError U+5C14");
expect(() => {ms932Encoder.encode("\u5C15")}).to.throw(Error, "EncodingError U+5C15");
r = r && ([...ms932Encoder.encode("尖")].join(",") === "144,235"); // U+5C16
expect(() => {ms932Encoder.encode("\u5C17")}).to.throw(Error, "EncodingError U+5C17");
expect(() => {ms932Encoder.encode("\u5C18")}).to.throw(Error, "EncodingError U+5C18");
expect(() => {ms932Encoder.encode("\u5C19")}).to.throw(Error, "EncodingError U+5C19");
r = r && ([...ms932Encoder.encode("尚")].join(",") === "143,174"); // U+5C1A
expect(() => {ms932Encoder.encode("\u5C1B")}).to.throw(Error, "EncodingError U+5C1B");
expect(() => {ms932Encoder.encode("\u5C1C")}).to.throw(Error, "EncodingError U+5C1C");
expect(() => {ms932Encoder.encode("\u5C1D")}).to.throw(Error, "EncodingError U+5C1D");
r = r && ([...ms932Encoder.encode("尞")].join(",") === "250,171"); // U+5C1E
expect(() => {ms932Encoder.encode("\u5C1F")}).to.throw(Error, "EncodingError U+5C1F");
r = r && ([...ms932Encoder.encode("尠")].join(",") === "155,150"); // U+5C20
expect(() => {ms932Encoder.encode("\u5C21")}).to.throw(Error, "EncodingError U+5C21");
r = r && ([...ms932Encoder.encode("尢")].join(",") === "155,151"); // U+5C22
expect(() => {ms932Encoder.encode("\u5C23")}).to.throw(Error, "EncodingError U+5C23");
r = r && ([...ms932Encoder.encode("尤")].join(",") === "150,222"); // U+5C24
expect(() => {ms932Encoder.encode("\u5C25")}).to.throw(Error, "EncodingError U+5C25");
expect(() => {ms932Encoder.encode("\u5C26")}).to.throw(Error, "EncodingError U+5C26");
expect(() => {ms932Encoder.encode("\u5C27")}).to.throw(Error, "EncodingError U+5C27");
r = r && ([...ms932Encoder.encode("尨")].join(",") === "155,152"); // U+5C28
expect(() => {ms932Encoder.encode("\u5C29")}).to.throw(Error, "EncodingError U+5C29");
expect(() => {ms932Encoder.encode("\u5C2A")}).to.throw(Error, "EncodingError U+5C2A");
expect(() => {ms932Encoder.encode("\u5C2B")}).to.throw(Error, "EncodingError U+5C2B");
expect(() => {ms932Encoder.encode("\u5C2C")}).to.throw(Error, "EncodingError U+5C2C");
r = r && ([...ms932Encoder.encode("尭")].join(",") === "139,196"); // U+5C2D
expect(() => {ms932Encoder.encode("\u5C2E")}).to.throw(Error, "EncodingError U+5C2E");
expect(() => {ms932Encoder.encode("\u5C2F")}).to.throw(Error, "EncodingError U+5C2F");
expect(() => {ms932Encoder.encode("\u5C30")}).to.throw(Error, "EncodingError U+5C30");
r = r && ([...ms932Encoder.encode("就")].join(",") === "143,65"); // U+5C31
expect(() => {ms932Encoder.encode("\u5C32")}).to.throw(Error, "EncodingError U+5C32");
expect(() => {ms932Encoder.encode("\u5C33")}).to.throw(Error, "EncodingError U+5C33");
expect(() => {ms932Encoder.encode("\u5C34")}).to.throw(Error, "EncodingError U+5C34");
expect(() => {ms932Encoder.encode("\u5C35")}).to.throw(Error, "EncodingError U+5C35");
expect(() => {ms932Encoder.encode("\u5C36")}).to.throw(Error, "EncodingError U+5C36");
expect(() => {ms932Encoder.encode("\u5C37")}).to.throw(Error, "EncodingError U+5C37");
r = r && ([...ms932Encoder.encode("尸尹尺尻尼尽尾尿局屁")].join(",") === "155,153,155,154,142,218,144,75,147,242,144,115,148,246,148,65,139,199,155,155"); // U+5C38
expect(() => {ms932Encoder.encode("\u5C42")}).to.throw(Error, "EncodingError U+5C42");
expect(() => {ms932Encoder.encode("\u5C43")}).to.throw(Error, "EncodingError U+5C43");
expect(() => {ms932Encoder.encode("\u5C44")}).to.throw(Error, "EncodingError U+5C44");
r = r && ([...ms932Encoder.encode("居屆")].join(",") === "139,143,155,156"); // U+5C45
expect(() => {ms932Encoder.encode("\u5C47")}).to.throw(Error, "EncodingError U+5C47");
r = r && ([...ms932Encoder.encode("屈")].join(",") === "139,252"); // U+5C48
expect(() => {ms932Encoder.encode("\u5C49")}).to.throw(Error, "EncodingError U+5C49");
r = r && ([...ms932Encoder.encode("届屋")].join(",") === "147,205,137,174"); // U+5C4A
expect(() => {ms932Encoder.encode("\u5C4C")}).to.throw(Error, "EncodingError U+5C4C");
r = r && ([...ms932Encoder.encode("屍屎屏屐屑")].join(",") === "142,114,155,157,155,160,155,159,139,251"); // U+5C4D
expect(() => {ms932Encoder.encode("\u5C52")}).to.throw(Error, "EncodingError U+5C52");
r = r && ([...ms932Encoder.encode("屓")].join(",") === "155,158"); // U+5C53
expect(() => {ms932Encoder.encode("\u5C54")}).to.throw(Error, "EncodingError U+5C54");
r = r && ([...ms932Encoder.encode("展")].join(",") === "147,87"); // U+5C55
expect(() => {ms932Encoder.encode("\u5C56")}).to.throw(Error, "EncodingError U+5C56");
expect(() => {ms932Encoder.encode("\u5C57")}).to.throw(Error, "EncodingError U+5C57");
expect(() => {ms932Encoder.encode("\u5C58")}).to.throw(Error, "EncodingError U+5C58");
expect(() => {ms932Encoder.encode("\u5C59")}).to.throw(Error, "EncodingError U+5C59");
expect(() => {ms932Encoder.encode("\u5C5A")}).to.throw(Error, "EncodingError U+5C5A");
expect(() => {ms932Encoder.encode("\u5C5B")}).to.throw(Error, "EncodingError U+5C5B");
expect(() => {ms932Encoder.encode("\u5C5C")}).to.throw(Error, "EncodingError U+5C5C");
expect(() => {ms932Encoder.encode("\u5C5D")}).to.throw(Error, "EncodingError U+5C5D");
r = r && ([...ms932Encoder.encode("属")].join(",") === "145,174"); // U+5C5E
expect(() => {ms932Encoder.encode("\u5C5F")}).to.throw(Error, "EncodingError U+5C5F");
r = r && ([...ms932Encoder.encode("屠屡")].join(",") === "147,106,142,198"); // U+5C60
expect(() => {ms932Encoder.encode("\u5C62")}).to.throw(Error, "EncodingError U+5C62");
expect(() => {ms932Encoder.encode("\u5C63")}).to.throw(Error, "EncodingError U+5C63");
r = r && ([...ms932Encoder.encode("層履")].join(",") === "145,119,151,154"); // U+5C64
expect(() => {ms932Encoder.encode("\u5C66")}).to.throw(Error, "EncodingError U+5C66");
expect(() => {ms932Encoder.encode("\u5C67")}).to.throw(Error, "EncodingError U+5C67");
expect(() => {ms932Encoder.encode("\u5C68")}).to.throw(Error, "EncodingError U+5C68");
expect(() => {ms932Encoder.encode("\u5C69")}).to.throw(Error, "EncodingError U+5C69");
expect(() => {ms932Encoder.encode("\u5C6A")}).to.throw(Error, "EncodingError U+5C6A");
expect(() => {ms932Encoder.encode("\u5C6B")}).to.throw(Error, "EncodingError U+5C6B");
r = r && ([...ms932Encoder.encode("屬")].join(",") === "155,162"); // U+5C6C
expect(() => {ms932Encoder.encode("\u5C6D")}).to.throw(Error, "EncodingError U+5C6D");
r = r && ([...ms932Encoder.encode("屮屯")].join(",") === "155,163,147,212"); // U+5C6E
expect(() => {ms932Encoder.encode("\u5C70")}).to.throw(Error, "EncodingError U+5C70");
r = r && ([...ms932Encoder.encode("山")].join(",") === "142,82"); // U+5C71
expect(() => {ms932Encoder.encode("\u5C72")}).to.throw(Error, "EncodingError U+5C72");
expect(() => {ms932Encoder.encode("\u5C73")}).to.throw(Error, "EncodingError U+5C73");
expect(() => {ms932Encoder.encode("\u5C74")}).to.throw(Error, "EncodingError U+5C74");
expect(() => {ms932Encoder.encode("\u5C75")}).to.throw(Error, "EncodingError U+5C75");
r = r && ([...ms932Encoder.encode("屶")].join(",") === "155,165"); // U+5C76
expect(() => {ms932Encoder.encode("\u5C77")}).to.throw(Error, "EncodingError U+5C77");
expect(() => {ms932Encoder.encode("\u5C78")}).to.throw(Error, "EncodingError U+5C78");
r = r && ([...ms932Encoder.encode("屹")].join(",") === "155,166"); // U+5C79
expect(() => {ms932Encoder.encode("\u5C7A")}).to.throw(Error, "EncodingError U+5C7A");
expect(() => {ms932Encoder.encode("\u5C7B")}).to.throw(Error, "EncodingError U+5C7B");
expect(() => {ms932Encoder.encode("\u5C7C")}).to.throw(Error, "EncodingError U+5C7C");
expect(() => {ms932Encoder.encode("\u5C7D")}).to.throw(Error, "EncodingError U+5C7D");
expect(() => {ms932Encoder.encode("\u5C7E")}).to.throw(Error, "EncodingError U+5C7E");
expect(() => {ms932Encoder.encode("\u5C7F")}).to.throw(Error, "EncodingError U+5C7F");
expect(() => {ms932Encoder.encode("\u5C80")}).to.throw(Error, "EncodingError U+5C80");
expect(() => {ms932Encoder.encode("\u5C81")}).to.throw(Error, "EncodingError U+5C81");
expect(() => {ms932Encoder.encode("\u5C82")}).to.throw(Error, "EncodingError U+5C82");
expect(() => {ms932Encoder.encode("\u5C83")}).to.throw(Error, "EncodingError U+5C83");
expect(() => {ms932Encoder.encode("\u5C84")}).to.throw(Error, "EncodingError U+5C84");
expect(() => {ms932Encoder.encode("\u5C85")}).to.throw(Error, "EncodingError U+5C85");
expect(() => {ms932Encoder.encode("\u5C86")}).to.throw(Error, "EncodingError U+5C86");
expect(() => {ms932Encoder.encode("\u5C87")}).to.throw(Error, "EncodingError U+5C87");
expect(() => {ms932Encoder.encode("\u5C88")}).to.throw(Error, "EncodingError U+5C88");
expect(() => {ms932Encoder.encode("\u5C89")}).to.throw(Error, "EncodingError U+5C89");
expect(() => {ms932Encoder.encode("\u5C8A")}).to.throw(Error, "EncodingError U+5C8A");
expect(() => {ms932Encoder.encode("\u5C8B")}).to.throw(Error, "EncodingError U+5C8B");
r = r && ([...ms932Encoder.encode("岌")].join(",") === "155,167"); // U+5C8C
expect(() => {ms932Encoder.encode("\u5C8D")}).to.throw(Error, "EncodingError U+5C8D");
expect(() => {ms932Encoder.encode("\u5C8E")}).to.throw(Error, "EncodingError U+5C8E");
expect(() => {ms932Encoder.encode("\u5C8F")}).to.throw(Error, "EncodingError U+5C8F");
r = r && ([...ms932Encoder.encode("岐岑")].join(",") === "138,242,155,168"); // U+5C90
expect(() => {ms932Encoder.encode("\u5C92")}).to.throw(Error, "EncodingError U+5C92");
expect(() => {ms932Encoder.encode("\u5C93")}).to.throw(Error, "EncodingError U+5C93");
r = r && ([...ms932Encoder.encode("岔")].join(",") === "155,169"); // U+5C94
expect(() => {ms932Encoder.encode("\u5C95")}).to.throw(Error, "EncodingError U+5C95");
expect(() => {ms932Encoder.encode("\u5C96")}).to.throw(Error, "EncodingError U+5C96");
expect(() => {ms932Encoder.encode("\u5C97")}).to.throw(Error, "EncodingError U+5C97");
expect(() => {ms932Encoder.encode("\u5C98")}).to.throw(Error, "EncodingError U+5C98");
expect(() => {ms932Encoder.encode("\u5C99")}).to.throw(Error, "EncodingError U+5C99");
expect(() => {ms932Encoder.encode("\u5C9A")}).to.throw(Error, "EncodingError U+5C9A");
expect(() => {ms932Encoder.encode("\u5C9B")}).to.throw(Error, "EncodingError U+5C9B");
expect(() => {ms932Encoder.encode("\u5C9C")}).to.throw(Error, "EncodingError U+5C9C");
expect(() => {ms932Encoder.encode("\u5C9D")}).to.throw(Error, "EncodingError U+5C9D");
expect(() => {ms932Encoder.encode("\u5C9E")}).to.throw(Error, "EncodingError U+5C9E");
expect(() => {ms932Encoder.encode("\u5C9F")}).to.throw(Error, "EncodingError U+5C9F");
expect(() => {ms932Encoder.encode("\u5CA0")}).to.throw(Error, "EncodingError U+5CA0");
r = r && ([...ms932Encoder.encode("岡")].join(",") === "137,170"); // U+5CA1
expect(() => {ms932Encoder.encode("\u5CA2")}).to.throw(Error, "EncodingError U+5CA2");
expect(() => {ms932Encoder.encode("\u5CA3")}).to.throw(Error, "EncodingError U+5CA3");
expect(() => {ms932Encoder.encode("\u5CA4")}).to.throw(Error, "EncodingError U+5CA4");
expect(() => {ms932Encoder.encode("\u5CA5")}).to.throw(Error, "EncodingError U+5CA5");
r = r && ([...ms932Encoder.encode("岦")].join(",") === "250,172"); // U+5CA6
expect(() => {ms932Encoder.encode("\u5CA7")}).to.throw(Error, "EncodingError U+5CA7");
r = r && ([...ms932Encoder.encode("岨岩")].join(",") === "145,90,138,226"); // U+5CA8
expect(() => {ms932Encoder.encode("\u5CAA")}).to.throw(Error, "EncodingError U+5CAA");
r = r && ([...ms932Encoder.encode("岫岬")].join(",") === "155,171,150,166"); // U+5CAB
expect(() => {ms932Encoder.encode("\u5CAD")}).to.throw(Error, "EncodingError U+5CAD");
expect(() => {ms932Encoder.encode("\u5CAE")}).to.throw(Error, "EncodingError U+5CAE");
expect(() => {ms932Encoder.encode("\u5CAF")}).to.throw(Error, "EncodingError U+5CAF");
expect(() => {ms932Encoder.encode("\u5CB0")}).to.throw(Error, "EncodingError U+5CB0");
r = r && ([...ms932Encoder.encode("岱")].join(",") === "145,208"); // U+5CB1
expect(() => {ms932Encoder.encode("\u5CB2")}).to.throw(Error, "EncodingError U+5CB2");
r = r && ([...ms932Encoder.encode("岳")].join(",") === "138,120"); // U+5CB3
expect(() => {ms932Encoder.encode("\u5CB4")}).to.throw(Error, "EncodingError U+5CB4");
expect(() => {ms932Encoder.encode("\u5CB5")}).to.throw(Error, "EncodingError U+5CB5");
r = r && ([...ms932Encoder.encode("岶岷岸")].join(",") === "155,173,155,175,138,221"); // U+5CB6
expect(() => {ms932Encoder.encode("\u5CB9")}).to.throw(Error, "EncodingError U+5CB9");
r = r && ([...ms932Encoder.encode("岺岻岼")].join(",") === "250,173,155,172,155,174"); // U+5CBA
expect(() => {ms932Encoder.encode("\u5CBD")}).to.throw(Error, "EncodingError U+5CBD");
r = r && ([...ms932Encoder.encode("岾")].join(",") === "155,177"); // U+5CBE
expect(() => {ms932Encoder.encode("\u5CBF")}).to.throw(Error, "EncodingError U+5CBF");
expect(() => {ms932Encoder.encode("\u5CC0")}).to.throw(Error, "EncodingError U+5CC0");
expect(() => {ms932Encoder.encode("\u5CC1")}).to.throw(Error, "EncodingError U+5CC1");
expect(() => {ms932Encoder.encode("\u5CC2")}).to.throw(Error, "EncodingError U+5CC2");
expect(() => {ms932Encoder.encode("\u5CC3")}).to.throw(Error, "EncodingError U+5CC3");
expect(() => {ms932Encoder.encode("\u5CC4")}).to.throw(Error, "EncodingError U+5CC4");
r = r && ([...ms932Encoder.encode("峅")].join(",") === "155,176"); // U+5CC5
expect(() => {ms932Encoder.encode("\u5CC6")}).to.throw(Error, "EncodingError U+5CC6");
r = r && ([...ms932Encoder.encode("峇")].join(",") === "155,178"); // U+5CC7
expect(() => {ms932Encoder.encode("\u5CC8")}).to.throw(Error, "EncodingError U+5CC8");
expect(() => {ms932Encoder.encode("\u5CC9")}).to.throw(Error, "EncodingError U+5CC9");
expect(() => {ms932Encoder.encode("\u5CCA")}).to.throw(Error, "EncodingError U+5CCA");
expect(() => {ms932Encoder.encode("\u5CCB")}).to.throw(Error, "EncodingError U+5CCB");
expect(() => {ms932Encoder.encode("\u5CCC")}).to.throw(Error, "EncodingError U+5CCC");
expect(() => {ms932Encoder.encode("\u5CCD")}).to.throw(Error, "EncodingError U+5CCD");
expect(() => {ms932Encoder.encode("\u5CCE")}).to.throw(Error, "EncodingError U+5CCE");
expect(() => {ms932Encoder.encode("\u5CCF")}).to.throw(Error, "EncodingError U+5CCF");
expect(() => {ms932Encoder.encode("\u5CD0")}).to.throw(Error, "EncodingError U+5CD0");
expect(() => {ms932Encoder.encode("\u5CD1")}).to.throw(Error, "EncodingError U+5CD1");
expect(() => {ms932Encoder.encode("\u5CD2")}).to.throw(Error, "EncodingError U+5CD2");
expect(() => {ms932Encoder.encode("\u5CD3")}).to.throw(Error, "EncodingError U+5CD3");
expect(() => {ms932Encoder.encode("\u5CD4")}).to.throw(Error, "EncodingError U+5CD4");
expect(() => {ms932Encoder.encode("\u5CD5")}).to.throw(Error, "EncodingError U+5CD5");
expect(() => {ms932Encoder.encode("\u5CD6")}).to.throw(Error, "EncodingError U+5CD6");
expect(() => {ms932Encoder.encode("\u5CD7")}).to.throw(Error, "EncodingError U+5CD7");
expect(() => {ms932Encoder.encode("\u5CD8")}).to.throw(Error, "EncodingError U+5CD8");
r = r && ([...ms932Encoder.encode("峙")].join(",") === "155,179"); // U+5CD9
expect(() => {ms932Encoder.encode("\u5CDA")}).to.throw(Error, "EncodingError U+5CDA");
expect(() => {ms932Encoder.encode("\u5CDB")}).to.throw(Error, "EncodingError U+5CDB");
expect(() => {ms932Encoder.encode("\u5CDC")}).to.throw(Error, "EncodingError U+5CDC");
expect(() => {ms932Encoder.encode("\u5CDD")}).to.throw(Error, "EncodingError U+5CDD");
expect(() => {ms932Encoder.encode("\u5CDE")}).to.throw(Error, "EncodingError U+5CDE");
expect(() => {ms932Encoder.encode("\u5CDF")}).to.throw(Error, "EncodingError U+5CDF");
r = r && ([...ms932Encoder.encode("峠峡")].join(",") === "147,187,139,172"); // U+5CE0
expect(() => {ms932Encoder.encode("\u5CE2")}).to.throw(Error, "EncodingError U+5CE2");
expect(() => {ms932Encoder.encode("\u5CE3")}).to.throw(Error, "EncodingError U+5CE3");
expect(() => {ms932Encoder.encode("\u5CE4")}).to.throw(Error, "EncodingError U+5CE4");
expect(() => {ms932Encoder.encode("\u5CE5")}).to.throw(Error, "EncodingError U+5CE5");
expect(() => {ms932Encoder.encode("\u5CE6")}).to.throw(Error, "EncodingError U+5CE6");
expect(() => {ms932Encoder.encode("\u5CE7")}).to.throw(Error, "EncodingError U+5CE7");
r = r && ([...ms932Encoder.encode("峨峩峪")].join(",") === "137,227,155,180,155,185"); // U+5CE8
expect(() => {ms932Encoder.encode("\u5CEB")}).to.throw(Error, "EncodingError U+5CEB");
expect(() => {ms932Encoder.encode("\u5CEC")}).to.throw(Error, "EncodingError U+5CEC");
r = r && ([...ms932Encoder.encode("峭")].join(",") === "155,183"); // U+5CED
expect(() => {ms932Encoder.encode("\u5CEE")}).to.throw(Error, "EncodingError U+5CEE");
r = r && ([...ms932Encoder.encode("峯峰")].join(",") === "149,245,149,244"); // U+5CEF
expect(() => {ms932Encoder.encode("\u5CF1")}).to.throw(Error, "EncodingError U+5CF1");
expect(() => {ms932Encoder.encode("\u5CF2")}).to.throw(Error, "EncodingError U+5CF2");
expect(() => {ms932Encoder.encode("\u5CF3")}).to.throw(Error, "EncodingError U+5CF3");
expect(() => {ms932Encoder.encode("\u5CF4")}).to.throw(Error, "EncodingError U+5CF4");
r = r && ([...ms932Encoder.encode("峵島")].join(",") === "250,174,147,135"); // U+5CF5
expect(() => {ms932Encoder.encode("\u5CF7")}).to.throw(Error, "EncodingError U+5CF7");
expect(() => {ms932Encoder.encode("\u5CF8")}).to.throw(Error, "EncodingError U+5CF8");
expect(() => {ms932Encoder.encode("\u5CF9")}).to.throw(Error, "EncodingError U+5CF9");
r = r && ([...ms932Encoder.encode("峺峻")].join(",") === "155,182,143,115"); // U+5CFA
expect(() => {ms932Encoder.encode("\u5CFC")}).to.throw(Error, "EncodingError U+5CFC");
r = r && ([...ms932Encoder.encode("峽")].join(",") === "155,181"); // U+5CFD
expect(() => {ms932Encoder.encode("\u5CFE")}).to.throw(Error, "EncodingError U+5CFE");
expect(() => {ms932Encoder.encode("\u5CFF")}).to.throw(Error, "EncodingError U+5CFF");
expect(() => {ms932Encoder.encode("\u5D00")}).to.throw(Error, "EncodingError U+5D00");
expect(() => {ms932Encoder.encode("\u5D01")}).to.throw(Error, "EncodingError U+5D01");
expect(() => {ms932Encoder.encode("\u5D02")}).to.throw(Error, "EncodingError U+5D02");
expect(() => {ms932Encoder.encode("\u5D03")}).to.throw(Error, "EncodingError U+5D03");
expect(() => {ms932Encoder.encode("\u5D04")}).to.throw(Error, "EncodingError U+5D04");
expect(() => {ms932Encoder.encode("\u5D05")}).to.throw(Error, "EncodingError U+5D05");
expect(() => {ms932Encoder.encode("\u5D06")}).to.throw(Error, "EncodingError U+5D06");
r = r && ([...ms932Encoder.encode("崇")].join(",") === "144,146"); // U+5D07
expect(() => {ms932Encoder.encode("\u5D08")}).to.throw(Error, "EncodingError U+5D08");
expect(() => {ms932Encoder.encode("\u5D09")}).to.throw(Error, "EncodingError U+5D09");
expect(() => {ms932Encoder.encode("\u5D0A")}).to.throw(Error, "EncodingError U+5D0A");
r = r && ([...ms932Encoder.encode("崋")].join(",") === "155,186"); // U+5D0B
expect(() => {ms932Encoder.encode("\u5D0C")}).to.throw(Error, "EncodingError U+5D0C");
expect(() => {ms932Encoder.encode("\u5D0D")}).to.throw(Error, "EncodingError U+5D0D");
r = r && ([...ms932Encoder.encode("崎")].join(",") === "141,232"); // U+5D0E
expect(() => {ms932Encoder.encode("\u5D0F")}).to.throw(Error, "EncodingError U+5D0F");
expect(() => {ms932Encoder.encode("\u5D10")}).to.throw(Error, "EncodingError U+5D10");
r = r && ([...ms932Encoder.encode("崑")].join(",") === "155,192"); // U+5D11
expect(() => {ms932Encoder.encode("\u5D12")}).to.throw(Error, "EncodingError U+5D12");
expect(() => {ms932Encoder.encode("\u5D13")}).to.throw(Error, "EncodingError U+5D13");
r = r && ([...ms932Encoder.encode("崔崕崖崗崘崙崚崛")].join(",") === "155,193,155,187,138,82,155,188,155,197,155,196,155,195,155,191"); // U+5D14
expect(() => {ms932Encoder.encode("\u5D1C")}).to.throw(Error, "EncodingError U+5D1C");
expect(() => {ms932Encoder.encode("\u5D1D")}).to.throw(Error, "EncodingError U+5D1D");
expect(() => {ms932Encoder.encode("\u5D1E")}).to.throw(Error, "EncodingError U+5D1E");
r = r && ([...ms932Encoder.encode("崟")].join(",") === "155,190"); // U+5D1F
expect(() => {ms932Encoder.encode("\u5D20")}).to.throw(Error, "EncodingError U+5D20");
expect(() => {ms932Encoder.encode("\u5D21")}).to.throw(Error, "EncodingError U+5D21");
r = r && ([...ms932Encoder.encode("崢")].join(",") === "155,194"); // U+5D22
expect(() => {ms932Encoder.encode("\u5D23")}).to.throw(Error, "EncodingError U+5D23");
expect(() => {ms932Encoder.encode("\u5D24")}).to.throw(Error, "EncodingError U+5D24");
expect(() => {ms932Encoder.encode("\u5D25")}).to.throw(Error, "EncodingError U+5D25");
expect(() => {ms932Encoder.encode("\u5D26")}).to.throw(Error, "EncodingError U+5D26");
r = r && ([...ms932Encoder.encode("崧")].join(",") === "250,175"); // U+5D27
expect(() => {ms932Encoder.encode("\u5D28")}).to.throw(Error, "EncodingError U+5D28");
r = r && ([...ms932Encoder.encode("崩")].join(",") === "149,246"); // U+5D29
expect(() => {ms932Encoder.encode("\u5D2A")}).to.throw(Error, "EncodingError U+5D2A");
expect(() => {ms932Encoder.encode("\u5D2B")}).to.throw(Error, "EncodingError U+5D2B");
expect(() => {ms932Encoder.encode("\u5D2C")}).to.throw(Error, "EncodingError U+5D2C");
expect(() => {ms932Encoder.encode("\u5D2D")}).to.throw(Error, "EncodingError U+5D2D");
expect(() => {ms932Encoder.encode("\u5D2E")}).to.throw(Error, "EncodingError U+5D2E");
expect(() => {ms932Encoder.encode("\u5D2F")}).to.throw(Error, "EncodingError U+5D2F");
expect(() => {ms932Encoder.encode("\u5D30")}).to.throw(Error, "EncodingError U+5D30");
expect(() => {ms932Encoder.encode("\u5D31")}).to.throw(Error, "EncodingError U+5D31");
expect(() => {ms932Encoder.encode("\u5D32")}).to.throw(Error, "EncodingError U+5D32");
expect(() => {ms932Encoder.encode("\u5D33")}).to.throw(Error, "EncodingError U+5D33");
expect(() => {ms932Encoder.encode("\u5D34")}).to.throw(Error, "EncodingError U+5D34");
expect(() => {ms932Encoder.encode("\u5D35")}).to.throw(Error, "EncodingError U+5D35");
expect(() => {ms932Encoder.encode("\u5D36")}).to.throw(Error, "EncodingError U+5D36");
expect(() => {ms932Encoder.encode("\u5D37")}).to.throw(Error, "EncodingError U+5D37");
expect(() => {ms932Encoder.encode("\u5D38")}).to.throw(Error, "EncodingError U+5D38");
expect(() => {ms932Encoder.encode("\u5D39")}).to.throw(Error, "EncodingError U+5D39");
expect(() => {ms932Encoder.encode("\u5D3A")}).to.throw(Error, "EncodingError U+5D3A");
expect(() => {ms932Encoder.encode("\u5D3B")}).to.throw(Error, "EncodingError U+5D3B");
expect(() => {ms932Encoder.encode("\u5D3C")}).to.throw(Error, "EncodingError U+5D3C");
expect(() => {ms932Encoder.encode("\u5D3D")}).to.throw(Error, "EncodingError U+5D3D");
expect(() => {ms932Encoder.encode("\u5D3E")}).to.throw(Error, "EncodingError U+5D3E");
expect(() => {ms932Encoder.encode("\u5D3F")}).to.throw(Error, "EncodingError U+5D3F");
expect(() => {ms932Encoder.encode("\u5D40")}).to.throw(Error, "EncodingError U+5D40");
expect(() => {ms932Encoder.encode("\u5D41")}).to.throw(Error, "EncodingError U+5D41");
r = r && ([...ms932Encoder.encode("嵂")].join(",") === "250,178"); // U+5D42
expect(() => {ms932Encoder.encode("\u5D43")}).to.throw(Error, "EncodingError U+5D43");
expect(() => {ms932Encoder.encode("\u5D44")}).to.throw(Error, "EncodingError U+5D44");
expect(() => {ms932Encoder.encode("\u5D45")}).to.throw(Error, "EncodingError U+5D45");
expect(() => {ms932Encoder.encode("\u5D46")}).to.throw(Error, "EncodingError U+5D46");
expect(() => {ms932Encoder.encode("\u5D47")}).to.throw(Error, "EncodingError U+5D47");
expect(() => {ms932Encoder.encode("\u5D48")}).to.throw(Error, "EncodingError U+5D48");
expect(() => {ms932Encoder.encode("\u5D49")}).to.throw(Error, "EncodingError U+5D49");
expect(() => {ms932Encoder.encode("\u5D4A")}).to.throw(Error, "EncodingError U+5D4A");
r = r && ([...ms932Encoder.encode("嵋嵌")].join(",") === "155,201,155,198"); // U+5D4B
expect(() => {ms932Encoder.encode("\u5D4D")}).to.throw(Error, "EncodingError U+5D4D");
r = r && ([...ms932Encoder.encode("嵎")].join(",") === "155,200"); // U+5D4E
expect(() => {ms932Encoder.encode("\u5D4F")}).to.throw(Error, "EncodingError U+5D4F");
r = r && ([...ms932Encoder.encode("嵐")].join(",") === "151,146"); // U+5D50
expect(() => {ms932Encoder.encode("\u5D51")}).to.throw(Error, "EncodingError U+5D51");
r = r && ([...ms932Encoder.encode("嵒嵓")].join(",") === "155,199,250,176"); // U+5D52
expect(() => {ms932Encoder.encode("\u5D54")}).to.throw(Error, "EncodingError U+5D54");
expect(() => {ms932Encoder.encode("\u5D55")}).to.throw(Error, "EncodingError U+5D55");
expect(() => {ms932Encoder.encode("\u5D56")}).to.throw(Error, "EncodingError U+5D56");
expect(() => {ms932Encoder.encode("\u5D57")}).to.throw(Error, "EncodingError U+5D57");
expect(() => {ms932Encoder.encode("\u5D58")}).to.throw(Error, "EncodingError U+5D58");
expect(() => {ms932Encoder.encode("\u5D59")}).to.throw(Error, "EncodingError U+5D59");
expect(() => {ms932Encoder.encode("\u5D5A")}).to.throw(Error, "EncodingError U+5D5A");
expect(() => {ms932Encoder.encode("\u5D5B")}).to.throw(Error, "EncodingError U+5D5B");
r = r && ([...ms932Encoder.encode("嵜")].join(",") === "155,189"); // U+5D5C
expect(() => {ms932Encoder.encode("\u5D5D")}).to.throw(Error, "EncodingError U+5D5D");
expect(() => {ms932Encoder.encode("\u5D5E")}).to.throw(Error, "EncodingError U+5D5E");
expect(() => {ms932Encoder.encode("\u5D5F")}).to.throw(Error, "EncodingError U+5D5F");
expect(() => {ms932Encoder.encode("\u5D60")}).to.throw(Error, "EncodingError U+5D60");
expect(() => {ms932Encoder.encode("\u5D61")}).to.throw(Error, "EncodingError U+5D61");
expect(() => {ms932Encoder.encode("\u5D62")}).to.throw(Error, "EncodingError U+5D62");
expect(() => {ms932Encoder.encode("\u5D63")}).to.throw(Error, "EncodingError U+5D63");
expect(() => {ms932Encoder.encode("\u5D64")}).to.throw(Error, "EncodingError U+5D64");
expect(() => {ms932Encoder.encode("\u5D65")}).to.throw(Error, "EncodingError U+5D65");
expect(() => {ms932Encoder.encode("\u5D66")}).to.throw(Error, "EncodingError U+5D66");
expect(() => {ms932Encoder.encode("\u5D67")}).to.throw(Error, "EncodingError U+5D67");
expect(() => {ms932Encoder.encode("\u5D68")}).to.throw(Error, "EncodingError U+5D68");
r = r && ([...ms932Encoder.encode("嵩")].join(",") === "144,147"); // U+5D69
expect(() => {ms932Encoder.encode("\u5D6A")}).to.throw(Error, "EncodingError U+5D6A");
expect(() => {ms932Encoder.encode("\u5D6B")}).to.throw(Error, "EncodingError U+5D6B");
r = r && ([...ms932Encoder.encode("嵬嵭")].join(",") === "155,202,250,179"); // U+5D6C
expect(() => {ms932Encoder.encode("\u5D6E")}).to.throw(Error, "EncodingError U+5D6E");
r = r && ([...ms932Encoder.encode("嵯")].join(",") === "141,181"); // U+5D6F
expect(() => {ms932Encoder.encode("\u5D70")}).to.throw(Error, "EncodingError U+5D70");
expect(() => {ms932Encoder.encode("\u5D71")}).to.throw(Error, "EncodingError U+5D71");
expect(() => {ms932Encoder.encode("\u5D72")}).to.throw(Error, "EncodingError U+5D72");
r = r && ([...ms932Encoder.encode("嵳")].join(",") === "155,203"); // U+5D73
expect(() => {ms932Encoder.encode("\u5D74")}).to.throw(Error, "EncodingError U+5D74");
expect(() => {ms932Encoder.encode("\u5D75")}).to.throw(Error, "EncodingError U+5D75");
r = r && ([...ms932Encoder.encode("嵶")].join(",") === "155,204"); // U+5D76
expect(() => {ms932Encoder.encode("\u5D77")}).to.throw(Error, "EncodingError U+5D77");
expect(() => {ms932Encoder.encode("\u5D78")}).to.throw(Error, "EncodingError U+5D78");
expect(() => {ms932Encoder.encode("\u5D79")}).to.throw(Error, "EncodingError U+5D79");
expect(() => {ms932Encoder.encode("\u5D7A")}).to.throw(Error, "EncodingError U+5D7A");
expect(() => {ms932Encoder.encode("\u5D7B")}).to.throw(Error, "EncodingError U+5D7B");
expect(() => {ms932Encoder.encode("\u5D7C")}).to.throw(Error, "EncodingError U+5D7C");
expect(() => {ms932Encoder.encode("\u5D7D")}).to.throw(Error, "EncodingError U+5D7D");
expect(() => {ms932Encoder.encode("\u5D7E")}).to.throw(Error, "EncodingError U+5D7E");
expect(() => {ms932Encoder.encode("\u5D7F")}).to.throw(Error, "EncodingError U+5D7F");
expect(() => {ms932Encoder.encode("\u5D80")}).to.throw(Error, "EncodingError U+5D80");
expect(() => {ms932Encoder.encode("\u5D81")}).to.throw(Error, "EncodingError U+5D81");
r = r && ([...ms932Encoder.encode("嶂")].join(",") === "155,207"); // U+5D82
expect(() => {ms932Encoder.encode("\u5D83")}).to.throw(Error, "EncodingError U+5D83");
r = r && ([...ms932Encoder.encode("嶄")].join(",") === "155,206"); // U+5D84
expect(() => {ms932Encoder.encode("\u5D85")}).to.throw(Error, "EncodingError U+5D85");
expect(() => {ms932Encoder.encode("\u5D86")}).to.throw(Error, "EncodingError U+5D86");
r = r && ([...ms932Encoder.encode("嶇")].join(",") === "155,205"); // U+5D87
expect(() => {ms932Encoder.encode("\u5D88")}).to.throw(Error, "EncodingError U+5D88");
expect(() => {ms932Encoder.encode("\u5D89")}).to.throw(Error, "EncodingError U+5D89");
expect(() => {ms932Encoder.encode("\u5D8A")}).to.throw(Error, "EncodingError U+5D8A");
r = r && ([...ms932Encoder.encode("嶋嶌")].join(",") === "147,136,155,184"); // U+5D8B
expect(() => {ms932Encoder.encode("\u5D8D")}).to.throw(Error, "EncodingError U+5D8D");
expect(() => {ms932Encoder.encode("\u5D8E")}).to.throw(Error, "EncodingError U+5D8E");
expect(() => {ms932Encoder.encode("\u5D8F")}).to.throw(Error, "EncodingError U+5D8F");
r = r && ([...ms932Encoder.encode("嶐")].join(",") === "155,213"); // U+5D90
expect(() => {ms932Encoder.encode("\u5D91")}).to.throw(Error, "EncodingError U+5D91");
expect(() => {ms932Encoder.encode("\u5D92")}).to.throw(Error, "EncodingError U+5D92");
expect(() => {ms932Encoder.encode("\u5D93")}).to.throw(Error, "EncodingError U+5D93");
expect(() => {ms932Encoder.encode("\u5D94")}).to.throw(Error, "EncodingError U+5D94");
expect(() => {ms932Encoder.encode("\u5D95")}).to.throw(Error, "EncodingError U+5D95");
expect(() => {ms932Encoder.encode("\u5D96")}).to.throw(Error, "EncodingError U+5D96");
expect(() => {ms932Encoder.encode("\u5D97")}).to.throw(Error, "EncodingError U+5D97");
expect(() => {ms932Encoder.encode("\u5D98")}).to.throw(Error, "EncodingError U+5D98");
expect(() => {ms932Encoder.encode("\u5D99")}).to.throw(Error, "EncodingError U+5D99");
expect(() => {ms932Encoder.encode("\u5D9A")}).to.throw(Error, "EncodingError U+5D9A");
expect(() => {ms932Encoder.encode("\u5D9B")}).to.throw(Error, "EncodingError U+5D9B");
expect(() => {ms932Encoder.encode("\u5D9C")}).to.throw(Error, "EncodingError U+5D9C");
r = r && ([...ms932Encoder.encode("嶝")].join(",") === "155,209"); // U+5D9D
expect(() => {ms932Encoder.encode("\u5D9E")}).to.throw(Error, "EncodingError U+5D9E");
expect(() => {ms932Encoder.encode("\u5D9F")}).to.throw(Error, "EncodingError U+5D9F");
expect(() => {ms932Encoder.encode("\u5DA0")}).to.throw(Error, "EncodingError U+5DA0");
expect(() => {ms932Encoder.encode("\u5DA1")}).to.throw(Error, "EncodingError U+5DA1");
r = r && ([...ms932Encoder.encode("嶢")].join(",") === "155,208"); // U+5DA2
expect(() => {ms932Encoder.encode("\u5DA3")}).to.throw(Error, "EncodingError U+5DA3");
expect(() => {ms932Encoder.encode("\u5DA4")}).to.throw(Error, "EncodingError U+5DA4");
expect(() => {ms932Encoder.encode("\u5DA5")}).to.throw(Error, "EncodingError U+5DA5");
expect(() => {ms932Encoder.encode("\u5DA6")}).to.throw(Error, "EncodingError U+5DA6");
expect(() => {ms932Encoder.encode("\u5DA7")}).to.throw(Error, "EncodingError U+5DA7");
expect(() => {ms932Encoder.encode("\u5DA8")}).to.throw(Error, "EncodingError U+5DA8");
expect(() => {ms932Encoder.encode("\u5DA9")}).to.throw(Error, "EncodingError U+5DA9");
expect(() => {ms932Encoder.encode("\u5DAA")}).to.throw(Error, "EncodingError U+5DAA");
expect(() => {ms932Encoder.encode("\u5DAB")}).to.throw(Error, "EncodingError U+5DAB");
r = r && ([...ms932Encoder.encode("嶬")].join(",") === "155,210"); // U+5DAC
expect(() => {ms932Encoder.encode("\u5DAD")}).to.throw(Error, "EncodingError U+5DAD");
r = r && ([...ms932Encoder.encode("嶮")].join(",") === "155,211"); // U+5DAE
expect(() => {ms932Encoder.encode("\u5DAF")}).to.throw(Error, "EncodingError U+5DAF");
expect(() => {ms932Encoder.encode("\u5DB0")}).to.throw(Error, "EncodingError U+5DB0");
expect(() => {ms932Encoder.encode("\u5DB1")}).to.throw(Error, "EncodingError U+5DB1");
expect(() => {ms932Encoder.encode("\u5DB2")}).to.throw(Error, "EncodingError U+5DB2");
expect(() => {ms932Encoder.encode("\u5DB3")}).to.throw(Error, "EncodingError U+5DB3");
expect(() => {ms932Encoder.encode("\u5DB4")}).to.throw(Error, "EncodingError U+5DB4");
expect(() => {ms932Encoder.encode("\u5DB5")}).to.throw(Error, "EncodingError U+5DB5");
expect(() => {ms932Encoder.encode("\u5DB6")}).to.throw(Error, "EncodingError U+5DB6");
r = r && ([...ms932Encoder.encode("嶷嶸嶹嶺")].join(",") === "155,214,250,180,250,181,151,228"); // U+5DB7
expect(() => {ms932Encoder.encode("\u5DBB")}).to.throw(Error, "EncodingError U+5DBB");
r = r && ([...ms932Encoder.encode("嶼嶽")].join(",") === "155,215,155,212"); // U+5DBC
expect(() => {ms932Encoder.encode("\u5DBE")}).to.throw(Error, "EncodingError U+5DBE");
expect(() => {ms932Encoder.encode("\u5DBF")}).to.throw(Error, "EncodingError U+5DBF");
expect(() => {ms932Encoder.encode("\u5DC0")}).to.throw(Error, "EncodingError U+5DC0");
expect(() => {ms932Encoder.encode("\u5DC1")}).to.throw(Error, "EncodingError U+5DC1");
expect(() => {ms932Encoder.encode("\u5DC2")}).to.throw(Error, "EncodingError U+5DC2");
expect(() => {ms932Encoder.encode("\u5DC3")}).to.throw(Error, "EncodingError U+5DC3");
expect(() => {ms932Encoder.encode("\u5DC4")}).to.throw(Error, "EncodingError U+5DC4");
expect(() => {ms932Encoder.encode("\u5DC5")}).to.throw(Error, "EncodingError U+5DC5");
expect(() => {ms932Encoder.encode("\u5DC6")}).to.throw(Error, "EncodingError U+5DC6");
expect(() => {ms932Encoder.encode("\u5DC7")}).to.throw(Error, "EncodingError U+5DC7");
expect(() => {ms932Encoder.encode("\u5DC8")}).to.throw(Error, "EncodingError U+5DC8");
r = r && ([...ms932Encoder.encode("巉")].join(",") === "155,216"); // U+5DC9
expect(() => {ms932Encoder.encode("\u5DCA")}).to.throw(Error, "EncodingError U+5DCA");
expect(() => {ms932Encoder.encode("\u5DCB")}).to.throw(Error, "EncodingError U+5DCB");
r = r && ([...ms932Encoder.encode("巌巍")].join(",") === "138,222,155,217"); // U+5DCC
expect(() => {ms932Encoder.encode("\u5DCE")}).to.throw(Error, "EncodingError U+5DCE");
expect(() => {ms932Encoder.encode("\u5DCF")}).to.throw(Error, "EncodingError U+5DCF");
r = r && ([...ms932Encoder.encode("巐")].join(",") === "250,182"); // U+5DD0
expect(() => {ms932Encoder.encode("\u5DD1")}).to.throw(Error, "EncodingError U+5DD1");
r = r && ([...ms932Encoder.encode("巒巓")].join(",") === "155,219,155,218"); // U+5DD2
expect(() => {ms932Encoder.encode("\u5DD4")}).to.throw(Error, "EncodingError U+5DD4");
expect(() => {ms932Encoder.encode("\u5DD5")}).to.throw(Error, "EncodingError U+5DD5");
r = r && ([...ms932Encoder.encode("巖")].join(",") === "155,220"); // U+5DD6
expect(() => {ms932Encoder.encode("\u5DD7")}).to.throw(Error, "EncodingError U+5DD7");
expect(() => {ms932Encoder.encode("\u5DD8")}).to.throw(Error, "EncodingError U+5DD8");
expect(() => {ms932Encoder.encode("\u5DD9")}).to.throw(Error, "EncodingError U+5DD9");
expect(() => {ms932Encoder.encode("\u5DDA")}).to.throw(Error, "EncodingError U+5DDA");
r = r && ([...ms932Encoder.encode("巛")].join(",") === "155,221"); // U+5DDB
expect(() => {ms932Encoder.encode("\u5DDC")}).to.throw(Error, "EncodingError U+5DDC");
r = r && ([...ms932Encoder.encode("川州")].join(",") === "144,236,143,66"); // U+5DDD
expect(() => {ms932Encoder.encode("\u5DDF")}).to.throw(Error, "EncodingError U+5DDF");
expect(() => {ms932Encoder.encode("\u5DE0")}).to.throw(Error, "EncodingError U+5DE0");
r = r && ([...ms932Encoder.encode("巡")].join(",") === "143,132"); // U+5DE1
expect(() => {ms932Encoder.encode("\u5DE2")}).to.throw(Error, "EncodingError U+5DE2");
r = r && ([...ms932Encoder.encode("巣")].join(",") === "145,131"); // U+5DE3
expect(() => {ms932Encoder.encode("\u5DE4")}).to.throw(Error, "EncodingError U+5DE4");
r = r && ([...ms932Encoder.encode("工左巧巨")].join(",") === "141,72,141,182,141,73,139,144"); // U+5DE5
expect(() => {ms932Encoder.encode("\u5DE9")}).to.throw(Error, "EncodingError U+5DE9");
expect(() => {ms932Encoder.encode("\u5DEA")}).to.throw(Error, "EncodingError U+5DEA");
r = r && ([...ms932Encoder.encode("巫")].join(",") === "155,222"); // U+5DEB
expect(() => {ms932Encoder.encode("\u5DEC")}).to.throw(Error, "EncodingError U+5DEC");
expect(() => {ms932Encoder.encode("\u5DED")}).to.throw(Error, "EncodingError U+5DED");
r = r && ([...ms932Encoder.encode("差")].join(",") === "141,183"); // U+5DEE
expect(() => {ms932Encoder.encode("\u5DEF")}).to.throw(Error, "EncodingError U+5DEF");
expect(() => {ms932Encoder.encode("\u5DF0")}).to.throw(Error, "EncodingError U+5DF0");
r = r && ([...ms932Encoder.encode("己已巳巴巵")].join(",") === "140,200,155,223,150,164,148,98,155,224"); // U+5DF1
expect(() => {ms932Encoder.encode("\u5DF6")}).to.throw(Error, "EncodingError U+5DF6");
r = r && ([...ms932Encoder.encode("巷")].join(",") === "141,74"); // U+5DF7
expect(() => {ms932Encoder.encode("\u5DF8")}).to.throw(Error, "EncodingError U+5DF8");
expect(() => {ms932Encoder.encode("\u5DF9")}).to.throw(Error, "EncodingError U+5DF9");
expect(() => {ms932Encoder.encode("\u5DFA")}).to.throw(Error, "EncodingError U+5DFA");
r = r && ([...ms932Encoder.encode("巻")].join(",") === "138,170"); // U+5DFB
expect(() => {ms932Encoder.encode("\u5DFC")}).to.throw(Error, "EncodingError U+5DFC");
r = r && ([...ms932Encoder.encode("巽巾")].join(",") === "146,70,139,208"); // U+5DFD
expect(() => {ms932Encoder.encode("\u5DFF")}).to.throw(Error, "EncodingError U+5DFF");
expect(() => {ms932Encoder.encode("\u5E00")}).to.throw(Error, "EncodingError U+5E00");
expect(() => {ms932Encoder.encode("\u5E01")}).to.throw(Error, "EncodingError U+5E01");
r = r && ([...ms932Encoder.encode("市布")].join(",") === "142,115,149,122"); // U+5E02
expect(() => {ms932Encoder.encode("\u5E04")}).to.throw(Error, "EncodingError U+5E04");
expect(() => {ms932Encoder.encode("\u5E05")}).to.throw(Error, "EncodingError U+5E05");
r = r && ([...ms932Encoder.encode("帆")].join(",") === "148,191"); // U+5E06
expect(() => {ms932Encoder.encode("\u5E07")}).to.throw(Error, "EncodingError U+5E07");
expect(() => {ms932Encoder.encode("\u5E08")}).to.throw(Error, "EncodingError U+5E08");
expect(() => {ms932Encoder.encode("\u5E09")}).to.throw(Error, "EncodingError U+5E09");
expect(() => {ms932Encoder.encode("\u5E0A")}).to.throw(Error, "EncodingError U+5E0A");
r = r && ([...ms932Encoder.encode("帋希")].join(",") === "155,225,138,243"); // U+5E0B
expect(() => {ms932Encoder.encode("\u5E0D")}).to.throw(Error, "EncodingError U+5E0D");
expect(() => {ms932Encoder.encode("\u5E0E")}).to.throw(Error, "EncodingError U+5E0E");
expect(() => {ms932Encoder.encode("\u5E0F")}).to.throw(Error, "EncodingError U+5E0F");
expect(() => {ms932Encoder.encode("\u5E10")}).to.throw(Error, "EncodingError U+5E10");
r = r && ([...ms932Encoder.encode("帑")].join(",") === "155,228"); // U+5E11
expect(() => {ms932Encoder.encode("\u5E12")}).to.throw(Error, "EncodingError U+5E12");
expect(() => {ms932Encoder.encode("\u5E13")}).to.throw(Error, "EncodingError U+5E13");
expect(() => {ms932Encoder.encode("\u5E14")}).to.throw(Error, "EncodingError U+5E14");
expect(() => {ms932Encoder.encode("\u5E15")}).to.throw(Error, "EncodingError U+5E15");
r = r && ([...ms932Encoder.encode("帖")].join(",") === "146,159"); // U+5E16
expect(() => {ms932Encoder.encode("\u5E17")}).to.throw(Error, "EncodingError U+5E17");
expect(() => {ms932Encoder.encode("\u5E18")}).to.throw(Error, "EncodingError U+5E18");
r = r && ([...ms932Encoder.encode("帙帚帛")].join(",") === "155,227,155,226,155,229"); // U+5E19
expect(() => {ms932Encoder.encode("\u5E1C")}).to.throw(Error, "EncodingError U+5E1C");
r = r && ([...ms932Encoder.encode("帝")].join(",") === "146,233"); // U+5E1D
expect(() => {ms932Encoder.encode("\u5E1E")}).to.throw(Error, "EncodingError U+5E1E");
expect(() => {ms932Encoder.encode("\u5E1F")}).to.throw(Error, "EncodingError U+5E1F");
expect(() => {ms932Encoder.encode("\u5E20")}).to.throw(Error, "EncodingError U+5E20");
expect(() => {ms932Encoder.encode("\u5E21")}).to.throw(Error, "EncodingError U+5E21");
expect(() => {ms932Encoder.encode("\u5E22")}).to.throw(Error, "EncodingError U+5E22");
expect(() => {ms932Encoder.encode("\u5E23")}).to.throw(Error, "EncodingError U+5E23");
expect(() => {ms932Encoder.encode("\u5E24")}).to.throw(Error, "EncodingError U+5E24");
r = r && ([...ms932Encoder.encode("帥")].join(",") === "144,131"); // U+5E25
expect(() => {ms932Encoder.encode("\u5E26")}).to.throw(Error, "EncodingError U+5E26");
expect(() => {ms932Encoder.encode("\u5E27")}).to.throw(Error, "EncodingError U+5E27");
expect(() => {ms932Encoder.encode("\u5E28")}).to.throw(Error, "EncodingError U+5E28");
expect(() => {ms932Encoder.encode("\u5E29")}).to.throw(Error, "EncodingError U+5E29");
expect(() => {ms932Encoder.encode("\u5E2A")}).to.throw(Error, "EncodingError U+5E2A");
r = r && ([...ms932Encoder.encode("師")].join(",") === "142,116"); // U+5E2B
expect(() => {ms932Encoder.encode("\u5E2C")}).to.throw(Error, "EncodingError U+5E2C");
r = r && ([...ms932Encoder.encode("席")].join(",") === "144,200"); // U+5E2D
expect(() => {ms932Encoder.encode("\u5E2E")}).to.throw(Error, "EncodingError U+5E2E");
r = r && ([...ms932Encoder.encode("帯帰")].join(",") === "145,209,139,65"); // U+5E2F
expect(() => {ms932Encoder.encode("\u5E31")}).to.throw(Error, "EncodingError U+5E31");
expect(() => {ms932Encoder.encode("\u5E32")}).to.throw(Error, "EncodingError U+5E32");
r = r && ([...ms932Encoder.encode("帳")].join(",") === "146,160"); // U+5E33
expect(() => {ms932Encoder.encode("\u5E34")}).to.throw(Error, "EncodingError U+5E34");
expect(() => {ms932Encoder.encode("\u5E35")}).to.throw(Error, "EncodingError U+5E35");
r = r && ([...ms932Encoder.encode("帶帷常")].join(",") === "155,230,155,231,143,237"); // U+5E36
expect(() => {ms932Encoder.encode("\u5E39")}).to.throw(Error, "EncodingError U+5E39");
expect(() => {ms932Encoder.encode("\u5E3A")}).to.throw(Error, "EncodingError U+5E3A");
expect(() => {ms932Encoder.encode("\u5E3B")}).to.throw(Error, "EncodingError U+5E3B");
expect(() => {ms932Encoder.encode("\u5E3C")}).to.throw(Error, "EncodingError U+5E3C");
r = r && ([...ms932Encoder.encode("帽")].join(",") === "150,88"); // U+5E3D
expect(() => {ms932Encoder.encode("\u5E3E")}).to.throw(Error, "EncodingError U+5E3E");
expect(() => {ms932Encoder.encode("\u5E3F")}).to.throw(Error, "EncodingError U+5E3F");
r = r && ([...ms932Encoder.encode("幀")].join(",") === "155,234"); // U+5E40
expect(() => {ms932Encoder.encode("\u5E41")}).to.throw(Error, "EncodingError U+5E41");
expect(() => {ms932Encoder.encode("\u5E42")}).to.throw(Error, "EncodingError U+5E42");
r = r && ([...ms932Encoder.encode("幃幄幅")].join(",") === "155,233,155,232,149,157"); // U+5E43
expect(() => {ms932Encoder.encode("\u5E46")}).to.throw(Error, "EncodingError U+5E46");
r = r && ([...ms932Encoder.encode("幇")].join(",") === "155,241"); // U+5E47
expect(() => {ms932Encoder.encode("\u5E48")}).to.throw(Error, "EncodingError U+5E48");
expect(() => {ms932Encoder.encode("\u5E49")}).to.throw(Error, "EncodingError U+5E49");
expect(() => {ms932Encoder.encode("\u5E4A")}).to.throw(Error, "EncodingError U+5E4A");
expect(() => {ms932Encoder.encode("\u5E4B")}).to.throw(Error, "EncodingError U+5E4B");
r = r && ([...ms932Encoder.encode("幌")].join(",") === "150,121"); // U+5E4C
expect(() => {ms932Encoder.encode("\u5E4D")}).to.throw(Error, "EncodingError U+5E4D");
r = r && ([...ms932Encoder.encode("幎")].join(",") === "155,235"); // U+5E4E
expect(() => {ms932Encoder.encode("\u5E4F")}).to.throw(Error, "EncodingError U+5E4F");
expect(() => {ms932Encoder.encode("\u5E50")}).to.throw(Error, "EncodingError U+5E50");
expect(() => {ms932Encoder.encode("\u5E51")}).to.throw(Error, "EncodingError U+5E51");
expect(() => {ms932Encoder.encode("\u5E52")}).to.throw(Error, "EncodingError U+5E52");
expect(() => {ms932Encoder.encode("\u5E53")}).to.throw(Error, "EncodingError U+5E53");
r = r && ([...ms932Encoder.encode("幔幕")].join(",") === "155,237,150,139"); // U+5E54
expect(() => {ms932Encoder.encode("\u5E56")}).to.throw(Error, "EncodingError U+5E56");
r = r && ([...ms932Encoder.encode("幗")].join(",") === "155,236"); // U+5E57
expect(() => {ms932Encoder.encode("\u5E58")}).to.throw(Error, "EncodingError U+5E58");
expect(() => {ms932Encoder.encode("\u5E59")}).to.throw(Error, "EncodingError U+5E59");
expect(() => {ms932Encoder.encode("\u5E5A")}).to.throw(Error, "EncodingError U+5E5A");
expect(() => {ms932Encoder.encode("\u5E5B")}).to.throw(Error, "EncodingError U+5E5B");
expect(() => {ms932Encoder.encode("\u5E5C")}).to.throw(Error, "EncodingError U+5E5C");
expect(() => {ms932Encoder.encode("\u5E5D")}).to.throw(Error, "EncodingError U+5E5D");
expect(() => {ms932Encoder.encode("\u5E5E")}).to.throw(Error, "EncodingError U+5E5E");
r = r && ([...ms932Encoder.encode("幟")].join(",") === "155,238"); // U+5E5F
expect(() => {ms932Encoder.encode("\u5E60")}).to.throw(Error, "EncodingError U+5E60");
r = r && ([...ms932Encoder.encode("幡幢幣幤")].join(",") === "148,166,155,239,149,188,155,240"); // U+5E61
expect(() => {ms932Encoder.encode("\u5E65")}).to.throw(Error, "EncodingError U+5E65");
expect(() => {ms932Encoder.encode("\u5E66")}).to.throw(Error, "EncodingError U+5E66");
expect(() => {ms932Encoder.encode("\u5E67")}).to.throw(Error, "EncodingError U+5E67");
expect(() => {ms932Encoder.encode("\u5E68")}).to.throw(Error, "EncodingError U+5E68");
expect(() => {ms932Encoder.encode("\u5E69")}).to.throw(Error, "EncodingError U+5E69");
expect(() => {ms932Encoder.encode("\u5E6A")}).to.throw(Error, "EncodingError U+5E6A");
expect(() => {ms932Encoder.encode("\u5E6B")}).to.throw(Error, "EncodingError U+5E6B");
expect(() => {ms932Encoder.encode("\u5E6C")}).to.throw(Error, "EncodingError U+5E6C");
expect(() => {ms932Encoder.encode("\u5E6D")}).to.throw(Error, "EncodingError U+5E6D");
expect(() => {ms932Encoder.encode("\u5E6E")}).to.throw(Error, "EncodingError U+5E6E");
expect(() => {ms932Encoder.encode("\u5E6F")}).to.throw(Error, "EncodingError U+5E6F");
expect(() => {ms932Encoder.encode("\u5E70")}).to.throw(Error, "EncodingError U+5E70");
expect(() => {ms932Encoder.encode("\u5E71")}).to.throw(Error, "EncodingError U+5E71");
r = r && ([...ms932Encoder.encode("干平年幵并")].join(",") === "138,177,149,189,148,78,155,242,155,243"); // U+5E72
expect(() => {ms932Encoder.encode("\u5E77")}).to.throw(Error, "EncodingError U+5E77");
r = r && ([...ms932Encoder.encode("幸幹幺幻幼幽幾广")].join(",") === "141,75,138,178,155,244,140,182,151,99,151,72,138,244,155,246"); // U+5E78
expect(() => {ms932Encoder.encode("\u5E80")}).to.throw(Error, "EncodingError U+5E80");
r = r && ([...ms932Encoder.encode("庁")].join(",") === "146,161"); // U+5E81
expect(() => {ms932Encoder.encode("\u5E82")}).to.throw(Error, "EncodingError U+5E82");
r = r && ([...ms932Encoder.encode("広庄")].join(",") === "141,76,143,175"); // U+5E83
expect(() => {ms932Encoder.encode("\u5E85")}).to.throw(Error, "EncodingError U+5E85");
expect(() => {ms932Encoder.encode("\u5E86")}).to.throw(Error, "EncodingError U+5E86");
r = r && ([...ms932Encoder.encode("庇")].join(",") === "148,221"); // U+5E87
expect(() => {ms932Encoder.encode("\u5E88")}).to.throw(Error, "EncodingError U+5E88");
expect(() => {ms932Encoder.encode("\u5E89")}).to.throw(Error, "EncodingError U+5E89");
r = r && ([...ms932Encoder.encode("床")].join(",") === "143,176"); // U+5E8A
expect(() => {ms932Encoder.encode("\u5E8B")}).to.throw(Error, "EncodingError U+5E8B");
expect(() => {ms932Encoder.encode("\u5E8C")}).to.throw(Error, "EncodingError U+5E8C");
expect(() => {ms932Encoder.encode("\u5E8D")}).to.throw(Error, "EncodingError U+5E8D");
expect(() => {ms932Encoder.encode("\u5E8E")}).to.throw(Error, "EncodingError U+5E8E");
r = r && ([...ms932Encoder.encode("序")].join(",") === "143,152"); // U+5E8F
expect(() => {ms932Encoder.encode("\u5E90")}).to.throw(Error, "EncodingError U+5E90");
expect(() => {ms932Encoder.encode("\u5E91")}).to.throw(Error, "EncodingError U+5E91");
expect(() => {ms932Encoder.encode("\u5E92")}).to.throw(Error, "EncodingError U+5E92");
expect(() => {ms932Encoder.encode("\u5E93")}).to.throw(Error, "EncodingError U+5E93");
expect(() => {ms932Encoder.encode("\u5E94")}).to.throw(Error, "EncodingError U+5E94");
r = r && ([...ms932Encoder.encode("底庖店")].join(",") === "146,234,149,247,147,88"); // U+5E95
expect(() => {ms932Encoder.encode("\u5E98")}).to.throw(Error, "EncodingError U+5E98");
expect(() => {ms932Encoder.encode("\u5E99")}).to.throw(Error, "EncodingError U+5E99");
r = r && ([...ms932Encoder.encode("庚")].join(",") === "141,77"); // U+5E9A
expect(() => {ms932Encoder.encode("\u5E9B")}).to.throw(Error, "EncodingError U+5E9B");
r = r && ([...ms932Encoder.encode("府")].join(",") === "149,123"); // U+5E9C
expect(() => {ms932Encoder.encode("\u5E9D")}).to.throw(Error, "EncodingError U+5E9D");
expect(() => {ms932Encoder.encode("\u5E9E")}).to.throw(Error, "EncodingError U+5E9E");
expect(() => {ms932Encoder.encode("\u5E9F")}).to.throw(Error, "EncodingError U+5E9F");
r = r && ([...ms932Encoder.encode("庠")].join(",") === "155,247"); // U+5EA0
expect(() => {ms932Encoder.encode("\u5EA1")}).to.throw(Error, "EncodingError U+5EA1");
expect(() => {ms932Encoder.encode("\u5EA2")}).to.throw(Error, "EncodingError U+5EA2");
expect(() => {ms932Encoder.encode("\u5EA3")}).to.throw(Error, "EncodingError U+5EA3");
expect(() => {ms932Encoder.encode("\u5EA4")}).to.throw(Error, "EncodingError U+5EA4");
expect(() => {ms932Encoder.encode("\u5EA5")}).to.throw(Error, "EncodingError U+5EA5");
r = r && ([...ms932Encoder.encode("度座")].join(",") === "147,120,141,192"); // U+5EA6
expect(() => {ms932Encoder.encode("\u5EA8")}).to.throw(Error, "EncodingError U+5EA8");
expect(() => {ms932Encoder.encode("\u5EA9")}).to.throw(Error, "EncodingError U+5EA9");
expect(() => {ms932Encoder.encode("\u5EAA")}).to.throw(Error, "EncodingError U+5EAA");
r = r && ([...ms932Encoder.encode("庫")].join(",") === "140,201"); // U+5EAB
expect(() => {ms932Encoder.encode("\u5EAC")}).to.throw(Error, "EncodingError U+5EAC");
r = r && ([...ms932Encoder.encode("庭")].join(",") === "146,235"); // U+5EAD
expect(() => {ms932Encoder.encode("\u5EAE")}).to.throw(Error, "EncodingError U+5EAE");
expect(() => {ms932Encoder.encode("\u5EAF")}).to.throw(Error, "EncodingError U+5EAF");
expect(() => {ms932Encoder.encode("\u5EB0")}).to.throw(Error, "EncodingError U+5EB0");
expect(() => {ms932Encoder.encode("\u5EB1")}).to.throw(Error, "EncodingError U+5EB1");
expect(() => {ms932Encoder.encode("\u5EB2")}).to.throw(Error, "EncodingError U+5EB2");
expect(() => {ms932Encoder.encode("\u5EB3")}).to.throw(Error, "EncodingError U+5EB3");
expect(() => {ms932Encoder.encode("\u5EB4")}).to.throw(Error, "EncodingError U+5EB4");
r = r && ([...ms932Encoder.encode("庵庶康庸")].join(",") === "136,193,143,142,141,78,151,102"); // U+5EB5
expect(() => {ms932Encoder.encode("\u5EB9")}).to.throw(Error, "EncodingError U+5EB9");
expect(() => {ms932Encoder.encode("\u5EBA")}).to.throw(Error, "EncodingError U+5EBA");
expect(() => {ms932Encoder.encode("\u5EBB")}).to.throw(Error, "EncodingError U+5EBB");
expect(() => {ms932Encoder.encode("\u5EBC")}).to.throw(Error, "EncodingError U+5EBC");
expect(() => {ms932Encoder.encode("\u5EBD")}).to.throw(Error, "EncodingError U+5EBD");
expect(() => {ms932Encoder.encode("\u5EBE")}).to.throw(Error, "EncodingError U+5EBE");
expect(() => {ms932Encoder.encode("\u5EBF")}).to.throw(Error, "EncodingError U+5EBF");
expect(() => {ms932Encoder.encode("\u5EC0")}).to.throw(Error, "EncodingError U+5EC0");
r = r && ([...ms932Encoder.encode("廁廂廃")].join(",") === "155,248,155,249,148,112"); // U+5EC1
expect(() => {ms932Encoder.encode("\u5EC4")}).to.throw(Error, "EncodingError U+5EC4");
expect(() => {ms932Encoder.encode("\u5EC5")}).to.throw(Error, "EncodingError U+5EC5");
expect(() => {ms932Encoder.encode("\u5EC6")}).to.throw(Error, "EncodingError U+5EC6");
expect(() => {ms932Encoder.encode("\u5EC7")}).to.throw(Error, "EncodingError U+5EC7");
r = r && ([...ms932Encoder.encode("廈廉廊")].join(",") === "155,250,151,245,152,76"); // U+5EC8
expect(() => {ms932Encoder.encode("\u5ECB")}).to.throw(Error, "EncodingError U+5ECB");
expect(() => {ms932Encoder.encode("\u5ECC")}).to.throw(Error, "EncodingError U+5ECC");
expect(() => {ms932Encoder.encode("\u5ECD")}).to.throw(Error, "EncodingError U+5ECD");
expect(() => {ms932Encoder.encode("\u5ECE")}).to.throw(Error, "EncodingError U+5ECE");
r = r && ([...ms932Encoder.encode("廏廐")].join(",") === "155,252,155,251"); // U+5ECF
expect(() => {ms932Encoder.encode("\u5ED1")}).to.throw(Error, "EncodingError U+5ED1");
expect(() => {ms932Encoder.encode("\u5ED2")}).to.throw(Error, "EncodingError U+5ED2");
r = r && ([...ms932Encoder.encode("廓")].join(",") === "138,102"); // U+5ED3
expect(() => {ms932Encoder.encode("\u5ED4")}).to.throw(Error, "EncodingError U+5ED4");
expect(() => {ms932Encoder.encode("\u5ED5")}).to.throw(Error, "EncodingError U+5ED5");
r = r && ([...ms932Encoder.encode("廖")].join(",") === "156,64"); // U+5ED6
expect(() => {ms932Encoder.encode("\u5ED7")}).to.throw(Error, "EncodingError U+5ED7");
expect(() => {ms932Encoder.encode("\u5ED8")}).to.throw(Error, "EncodingError U+5ED8");
expect(() => {ms932Encoder.encode("\u5ED9")}).to.throw(Error, "EncodingError U+5ED9");
r = r && ([...ms932Encoder.encode("廚廛")].join(",") === "156,67,156,68"); // U+5EDA
expect(() => {ms932Encoder.encode("\u5EDC")}).to.throw(Error, "EncodingError U+5EDC");
r = r && ([...ms932Encoder.encode("廝")].join(",") === "156,66"); // U+5EDD
expect(() => {ms932Encoder.encode("\u5EDE")}).to.throw(Error, "EncodingError U+5EDE");
r = r && ([...ms932Encoder.encode("廟廠廡廢廣")].join(",") === "149,95,143,177,156,70,156,69,156,65"); // U+5EDF
expect(() => {ms932Encoder.encode("\u5EE4")}).to.throw(Error, "EncodingError U+5EE4");
expect(() => {ms932Encoder.encode("\u5EE5")}).to.throw(Error, "EncodingError U+5EE5");
expect(() => {ms932Encoder.encode("\u5EE6")}).to.throw(Error, "EncodingError U+5EE6");
expect(() => {ms932Encoder.encode("\u5EE7")}).to.throw(Error, "EncodingError U+5EE7");
r = r && ([...ms932Encoder.encode("廨廩")].join(",") === "156,71,156,72"); // U+5EE8
expect(() => {ms932Encoder.encode("\u5EEA")}).to.throw(Error, "EncodingError U+5EEA");
expect(() => {ms932Encoder.encode("\u5EEB")}).to.throw(Error, "EncodingError U+5EEB");
r = r && ([...ms932Encoder.encode("廬")].join(",") === "156,73"); // U+5EEC
expect(() => {ms932Encoder.encode("\u5EED")}).to.throw(Error, "EncodingError U+5EED");
expect(() => {ms932Encoder.encode("\u5EEE")}).to.throw(Error, "EncodingError U+5EEE");
expect(() => {ms932Encoder.encode("\u5EEF")}).to.throw(Error, "EncodingError U+5EEF");
r = r && ([...ms932Encoder.encode("廰廱")].join(",") === "156,76,156,74"); // U+5EF0
expect(() => {ms932Encoder.encode("\u5EF2")}).to.throw(Error, "EncodingError U+5EF2");
r = r && ([...ms932Encoder.encode("廳廴")].join(",") === "156,75,156,77"); // U+5EF3
expect(() => {ms932Encoder.encode("\u5EF5")}).to.throw(Error, "EncodingError U+5EF5");
r = r && ([...ms932Encoder.encode("延廷廸")].join(",") === "137,132,146,236,156,78"); // U+5EF6
expect(() => {ms932Encoder.encode("\u5EF9")}).to.throw(Error, "EncodingError U+5EF9");
r = r && ([...ms932Encoder.encode("建廻廼")].join(",") === "140,154,137,244,148,85"); // U+5EFA
expect(() => {ms932Encoder.encode("\u5EFD")}).to.throw(Error, "EncodingError U+5EFD");
r = r && ([...ms932Encoder.encode("廾廿")].join(",") === "156,79,147,249"); // U+5EFE
expect(() => {ms932Encoder.encode("\u5F00")}).to.throw(Error, "EncodingError U+5F00");
r = r && ([...ms932Encoder.encode("弁")].join(",") === "149,217"); // U+5F01
expect(() => {ms932Encoder.encode("\u5F02")}).to.throw(Error, "EncodingError U+5F02");
r = r && ([...ms932Encoder.encode("弃弄")].join(",") === "156,80,152,77"); // U+5F03
expect(() => {ms932Encoder.encode("\u5F05")}).to.throw(Error, "EncodingError U+5F05");
expect(() => {ms932Encoder.encode("\u5F06")}).to.throw(Error, "EncodingError U+5F06");
expect(() => {ms932Encoder.encode("\u5F07")}).to.throw(Error, "EncodingError U+5F07");
expect(() => {ms932Encoder.encode("\u5F08")}).to.throw(Error, "EncodingError U+5F08");
r = r && ([...ms932Encoder.encode("弉弊弋弌弍")].join(",") === "156,81,149,190,156,84,152,159,152,175"); // U+5F09
expect(() => {ms932Encoder.encode("\u5F0E")}).to.throw(Error, "EncodingError U+5F0E");
r = r && ([...ms932Encoder.encode("式弐弑")].join(",") === "142,174,147,243,156,85"); // U+5F0F
expect(() => {ms932Encoder.encode("\u5F12")}).to.throw(Error, "EncodingError U+5F12");
r = r && ([...ms932Encoder.encode("弓弔引弖弗弘")].join(",") === "139,124,146,162,136,248,156,86,149,164,141,79"); // U+5F13
expect(() => {ms932Encoder.encode("\u5F19")}).to.throw(Error, "EncodingError U+5F19");
expect(() => {ms932Encoder.encode("\u5F1A")}).to.throw(Error, "EncodingError U+5F1A");
r = r && ([...ms932Encoder.encode("弛")].join(",") === "146,111"); // U+5F1B
expect(() => {ms932Encoder.encode("\u5F1C")}).to.throw(Error, "EncodingError U+5F1C");
expect(() => {ms932Encoder.encode("\u5F1D")}).to.throw(Error, "EncodingError U+5F1D");
expect(() => {ms932Encoder.encode("\u5F1E")}).to.throw(Error, "EncodingError U+5F1E");
r = r && ([...ms932Encoder.encode("弟")].join(",") === "146,237"); // U+5F1F
expect(() => {ms932Encoder.encode("\u5F20")}).to.throw(Error, "EncodingError U+5F20");
r = r && ([...ms932Encoder.encode("弡")].join(",") === "250,183"); // U+5F21
expect(() => {ms932Encoder.encode("\u5F22")}).to.throw(Error, "EncodingError U+5F22");
expect(() => {ms932Encoder.encode("\u5F23")}).to.throw(Error, "EncodingError U+5F23");
expect(() => {ms932Encoder.encode("\u5F24")}).to.throw(Error, "EncodingError U+5F24");
r = r && ([...ms932Encoder.encode("弥弦弧")].join(",") === "150,237,140,183,140,202"); // U+5F25
expect(() => {ms932Encoder.encode("\u5F28")}).to.throw(Error, "EncodingError U+5F28");
r = r && ([...ms932Encoder.encode("弩")].join(",") === "156,87"); // U+5F29
expect(() => {ms932Encoder.encode("\u5F2A")}).to.throw(Error, "EncodingError U+5F2A");
expect(() => {ms932Encoder.encode("\u5F2B")}).to.throw(Error, "EncodingError U+5F2B");
expect(() => {ms932Encoder.encode("\u5F2C")}).to.throw(Error, "EncodingError U+5F2C");
r = r && ([...ms932Encoder.encode("弭")].join(",") === "156,88"); // U+5F2D
expect(() => {ms932Encoder.encode("\u5F2E")}).to.throw(Error, "EncodingError U+5F2E");
r = r && ([...ms932Encoder.encode("弯")].join(",") === "156,94"); // U+5F2F
expect(() => {ms932Encoder.encode("\u5F30")}).to.throw(Error, "EncodingError U+5F30");
r = r && ([...ms932Encoder.encode("弱")].join(",") === "142,227"); // U+5F31
expect(() => {ms932Encoder.encode("\u5F32")}).to.throw(Error, "EncodingError U+5F32");
expect(() => {ms932Encoder.encode("\u5F33")}).to.throw(Error, "EncodingError U+5F33");
r = r && ([...ms932Encoder.encode("弴張")].join(",") === "250,184,146,163"); // U+5F34
expect(() => {ms932Encoder.encode("\u5F36")}).to.throw(Error, "EncodingError U+5F36");
r = r && ([...ms932Encoder.encode("強弸")].join(",") === "139,173,156,89"); // U+5F37
expect(() => {ms932Encoder.encode("\u5F39")}).to.throw(Error, "EncodingError U+5F39");
expect(() => {ms932Encoder.encode("\u5F3A")}).to.throw(Error, "EncodingError U+5F3A");
expect(() => {ms932Encoder.encode("\u5F3B")}).to.throw(Error, "EncodingError U+5F3B");
r = r && ([...ms932Encoder.encode("弼")].join(",") === "149,74"); // U+5F3C
expect(() => {ms932Encoder.encode("\u5F3D")}).to.throw(Error, "EncodingError U+5F3D");
r = r && ([...ms932Encoder.encode("弾")].join(",") === "146,101"); // U+5F3E
expect(() => {ms932Encoder.encode("\u5F3F")}).to.throw(Error, "EncodingError U+5F3F");
expect(() => {ms932Encoder.encode("\u5F40")}).to.throw(Error, "EncodingError U+5F40");
r = r && ([...ms932Encoder.encode("彁")].join(",") === "156,90"); // U+5F41
expect(() => {ms932Encoder.encode("\u5F42")}).to.throw(Error, "EncodingError U+5F42");
expect(() => {ms932Encoder.encode("\u5F43")}).to.throw(Error, "EncodingError U+5F43");
expect(() => {ms932Encoder.encode("\u5F44")}).to.throw(Error, "EncodingError U+5F44");
r = r && ([...ms932Encoder.encode("彅")].join(",") === "250,103"); // U+5F45
expect(() => {ms932Encoder.encode("\u5F46")}).to.throw(Error, "EncodingError U+5F46");
expect(() => {ms932Encoder.encode("\u5F47")}).to.throw(Error, "EncodingError U+5F47");
r = r && ([...ms932Encoder.encode("彈")].join(",") === "156,91"); // U+5F48
expect(() => {ms932Encoder.encode("\u5F49")}).to.throw(Error, "EncodingError U+5F49");
r = r && ([...ms932Encoder.encode("彊")].join(",") === "139,174"); // U+5F4A
expect(() => {ms932Encoder.encode("\u5F4B")}).to.throw(Error, "EncodingError U+5F4B");
r = r && ([...ms932Encoder.encode("彌")].join(",") === "156,92"); // U+5F4C
expect(() => {ms932Encoder.encode("\u5F4D")}).to.throw(Error, "EncodingError U+5F4D");
r = r && ([...ms932Encoder.encode("彎")].join(",") === "156,93"); // U+5F4E
expect(() => {ms932Encoder.encode("\u5F4F")}).to.throw(Error, "EncodingError U+5F4F");
expect(() => {ms932Encoder.encode("\u5F50")}).to.throw(Error, "EncodingError U+5F50");
r = r && ([...ms932Encoder.encode("彑")].join(",") === "156,95"); // U+5F51
expect(() => {ms932Encoder.encode("\u5F52")}).to.throw(Error, "EncodingError U+5F52");
r = r && ([...ms932Encoder.encode("当")].join(",") === "147,150"); // U+5F53
expect(() => {ms932Encoder.encode("\u5F54")}).to.throw(Error, "EncodingError U+5F54");
expect(() => {ms932Encoder.encode("\u5F55")}).to.throw(Error, "EncodingError U+5F55");
r = r && ([...ms932Encoder.encode("彖彗")].join(",") === "156,96,156,97"); // U+5F56
expect(() => {ms932Encoder.encode("\u5F58")}).to.throw(Error, "EncodingError U+5F58");
r = r && ([...ms932Encoder.encode("彙")].join(",") === "156,98"); // U+5F59
expect(() => {ms932Encoder.encode("\u5F5A")}).to.throw(Error, "EncodingError U+5F5A");
expect(() => {ms932Encoder.encode("\u5F5B")}).to.throw(Error, "EncodingError U+5F5B");
r = r && ([...ms932Encoder.encode("彜彝")].join(",") === "156,83,156,82"); // U+5F5C
expect(() => {ms932Encoder.encode("\u5F5E")}).to.throw(Error, "EncodingError U+5F5E");
expect(() => {ms932Encoder.encode("\u5F5F")}).to.throw(Error, "EncodingError U+5F5F");
expect(() => {ms932Encoder.encode("\u5F60")}).to.throw(Error, "EncodingError U+5F60");
r = r && ([...ms932Encoder.encode("彡形")].join(",") === "156,99,140,96"); // U+5F61
expect(() => {ms932Encoder.encode("\u5F63")}).to.throw(Error, "EncodingError U+5F63");
expect(() => {ms932Encoder.encode("\u5F64")}).to.throw(Error, "EncodingError U+5F64");
expect(() => {ms932Encoder.encode("\u5F65")}).to.throw(Error, "EncodingError U+5F65");
r = r && ([...ms932Encoder.encode("彦彧")].join(",") === "149,70,250,185"); // U+5F66
expect(() => {ms932Encoder.encode("\u5F68")}).to.throw(Error, "EncodingError U+5F68");
r = r && ([...ms932Encoder.encode("彩彪彫彬彭")].join(",") === "141,202,149,86,146,164,149,106,156,100"); // U+5F69
expect(() => {ms932Encoder.encode("\u5F6E")}).to.throw(Error, "EncodingError U+5F6E");
expect(() => {ms932Encoder.encode("\u5F6F")}).to.throw(Error, "EncodingError U+5F6F");
r = r && ([...ms932Encoder.encode("彰影")].join(",") === "143,178,137,101"); // U+5F70
expect(() => {ms932Encoder.encode("\u5F72")}).to.throw(Error, "EncodingError U+5F72");
r = r && ([...ms932Encoder.encode("彳")].join(",") === "156,101"); // U+5F73
expect(() => {ms932Encoder.encode("\u5F74")}).to.throw(Error, "EncodingError U+5F74");
expect(() => {ms932Encoder.encode("\u5F75")}).to.throw(Error, "EncodingError U+5F75");
expect(() => {ms932Encoder.encode("\u5F76")}).to.throw(Error, "EncodingError U+5F76");
r = r && ([...ms932Encoder.encode("彷")].join(",") === "156,102"); // U+5F77
expect(() => {ms932Encoder.encode("\u5F78")}).to.throw(Error, "EncodingError U+5F78");
r = r && ([...ms932Encoder.encode("役")].join(",") === "150,240"); // U+5F79
expect(() => {ms932Encoder.encode("\u5F7A")}).to.throw(Error, "EncodingError U+5F7A");
expect(() => {ms932Encoder.encode("\u5F7B")}).to.throw(Error, "EncodingError U+5F7B");
r = r && ([...ms932Encoder.encode("彼")].join(",") === "148,222"); // U+5F7C
expect(() => {ms932Encoder.encode("\u5F7D")}).to.throw(Error, "EncodingError U+5F7D");
expect(() => {ms932Encoder.encode("\u5F7E")}).to.throw(Error, "EncodingError U+5F7E");
r = r && ([...ms932Encoder.encode("彿往征徂徃径待")].join(",") === "156,105,137,157,144,170,156,104,156,103,140,97,145,210"); // U+5F7F
expect(() => {ms932Encoder.encode("\u5F86")}).to.throw(Error, "EncodingError U+5F86");
r = r && ([...ms932Encoder.encode("徇很")].join(",") === "156,109,156,107"); // U+5F87
expect(() => {ms932Encoder.encode("\u5F89")}).to.throw(Error, "EncodingError U+5F89");
r = r && ([...ms932Encoder.encode("徊律後")].join(",") === "156,106,151,165,140,227"); // U+5F8A
expect(() => {ms932Encoder.encode("\u5F8D")}).to.throw(Error, "EncodingError U+5F8D");
expect(() => {ms932Encoder.encode("\u5F8E")}).to.throw(Error, "EncodingError U+5F8E");
expect(() => {ms932Encoder.encode("\u5F8F")}).to.throw(Error, "EncodingError U+5F8F");
r = r && ([...ms932Encoder.encode("徐徑徒従")].join(",") === "143,153,156,108,147,107,143,93"); // U+5F90
expect(() => {ms932Encoder.encode("\u5F94")}).to.throw(Error, "EncodingError U+5F94");
expect(() => {ms932Encoder.encode("\u5F95")}).to.throw(Error, "EncodingError U+5F95");
expect(() => {ms932Encoder.encode("\u5F96")}).to.throw(Error, "EncodingError U+5F96");
r = r && ([...ms932Encoder.encode("得徘徙")].join(",") === "147,190,156,112,156,111"); // U+5F97
expect(() => {ms932Encoder.encode("\u5F9A")}).to.throw(Error, "EncodingError U+5F9A");
expect(() => {ms932Encoder.encode("\u5F9B")}).to.throw(Error, "EncodingError U+5F9B");
expect(() => {ms932Encoder.encode("\u5F9C")}).to.throw(Error, "EncodingError U+5F9C");
expect(() => {ms932Encoder.encode("\u5F9D")}).to.throw(Error, "EncodingError U+5F9D");
r = r && ([...ms932Encoder.encode("從")].join(",") === "156,110"); // U+5F9E
expect(() => {ms932Encoder.encode("\u5F9F")}).to.throw(Error, "EncodingError U+5F9F");
r = r && ([...ms932Encoder.encode("徠御")].join(",") === "156,113,140,228"); // U+5FA0
expect(() => {ms932Encoder.encode("\u5FA2")}).to.throw(Error, "EncodingError U+5FA2");
expect(() => {ms932Encoder.encode("\u5FA3")}).to.throw(Error, "EncodingError U+5FA3");
expect(() => {ms932Encoder.encode("\u5FA4")}).to.throw(Error, "EncodingError U+5FA4");
expect(() => {ms932Encoder.encode("\u5FA5")}).to.throw(Error, "EncodingError U+5FA5");
expect(() => {ms932Encoder.encode("\u5FA6")}).to.throw(Error, "EncodingError U+5FA6");
expect(() => {ms932Encoder.encode("\u5FA7")}).to.throw(Error, "EncodingError U+5FA7");
r = r && ([...ms932Encoder.encode("徨復循")].join(",") === "156,114,149,156,143,122"); // U+5FA8
expect(() => {ms932Encoder.encode("\u5FAB")}).to.throw(Error, "EncodingError U+5FAB");
expect(() => {ms932Encoder.encode("\u5FAC")}).to.throw(Error, "EncodingError U+5FAC");
r = r && ([...ms932Encoder.encode("徭微")].join(",") === "156,115,148,247"); // U+5FAD
expect(() => {ms932Encoder.encode("\u5FAF")}).to.throw(Error, "EncodingError U+5FAF");
expect(() => {ms932Encoder.encode("\u5FB0")}).to.throw(Error, "EncodingError U+5FB0");
expect(() => {ms932Encoder.encode("\u5FB1")}).to.throw(Error, "EncodingError U+5FB1");
expect(() => {ms932Encoder.encode("\u5FB2")}).to.throw(Error, "EncodingError U+5FB2");
r = r && ([...ms932Encoder.encode("徳徴")].join(",") === "147,191,146,165"); // U+5FB3
expect(() => {ms932Encoder.encode("\u5FB5")}).to.throw(Error, "EncodingError U+5FB5");
expect(() => {ms932Encoder.encode("\u5FB6")}).to.throw(Error, "EncodingError U+5FB6");
r = r && ([...ms932Encoder.encode("德")].join(",") === "250,186"); // U+5FB7
expect(() => {ms932Encoder.encode("\u5FB8")}).to.throw(Error, "EncodingError U+5FB8");
r = r && ([...ms932Encoder.encode("徹")].join(",") === "147,79"); // U+5FB9
expect(() => {ms932Encoder.encode("\u5FBA")}).to.throw(Error, "EncodingError U+5FBA");
expect(() => {ms932Encoder.encode("\u5FBB")}).to.throw(Error, "EncodingError U+5FBB");
r = r && ([...ms932Encoder.encode("徼徽")].join(",") === "156,116,139,74"); // U+5FBC
expect(() => {ms932Encoder.encode("\u5FBE")}).to.throw(Error, "EncodingError U+5FBE");
expect(() => {ms932Encoder.encode("\u5FBF")}).to.throw(Error, "EncodingError U+5FBF");
expect(() => {ms932Encoder.encode("\u5FC0")}).to.throw(Error, "EncodingError U+5FC0");
expect(() => {ms932Encoder.encode("\u5FC1")}).to.throw(Error, "EncodingError U+5FC1");
expect(() => {ms932Encoder.encode("\u5FC2")}).to.throw(Error, "EncodingError U+5FC2");
r = r && ([...ms932Encoder.encode("心")].join(",") === "144,83"); // U+5FC3
expect(() => {ms932Encoder.encode("\u5FC4")}).to.throw(Error, "EncodingError U+5FC4");
r = r && ([...ms932Encoder.encode("必")].join(",") === "149,75"); // U+5FC5
expect(() => {ms932Encoder.encode("\u5FC6")}).to.throw(Error, "EncodingError U+5FC6");
expect(() => {ms932Encoder.encode("\u5FC7")}).to.throw(Error, "EncodingError U+5FC7");
expect(() => {ms932Encoder.encode("\u5FC8")}).to.throw(Error, "EncodingError U+5FC8");
expect(() => {ms932Encoder.encode("\u5FC9")}).to.throw(Error, "EncodingError U+5FC9");
expect(() => {ms932Encoder.encode("\u5FCA")}).to.throw(Error, "EncodingError U+5FCA");
expect(() => {ms932Encoder.encode("\u5FCB")}).to.throw(Error, "EncodingError U+5FCB");
r = r && ([...ms932Encoder.encode("忌忍")].join(",") === "138,245,148,69"); // U+5FCC
expect(() => {ms932Encoder.encode("\u5FCE")}).to.throw(Error, "EncodingError U+5FCE");
expect(() => {ms932Encoder.encode("\u5FCF")}).to.throw(Error, "EncodingError U+5FCF");
expect(() => {ms932Encoder.encode("\u5FD0")}).to.throw(Error, "EncodingError U+5FD0");
expect(() => {ms932Encoder.encode("\u5FD1")}).to.throw(Error, "EncodingError U+5FD1");
expect(() => {ms932Encoder.encode("\u5FD2")}).to.throw(Error, "EncodingError U+5FD2");
expect(() => {ms932Encoder.encode("\u5FD3")}).to.throw(Error, "EncodingError U+5FD3");
expect(() => {ms932Encoder.encode("\u5FD4")}).to.throw(Error, "EncodingError U+5FD4");
expect(() => {ms932Encoder.encode("\u5FD5")}).to.throw(Error, "EncodingError U+5FD5");
r = r && ([...ms932Encoder.encode("忖志忘忙")].join(",") === "156,117,142,117,150,89,150,90"); // U+5FD6
expect(() => {ms932Encoder.encode("\u5FDA")}).to.throw(Error, "EncodingError U+5FDA");
expect(() => {ms932Encoder.encode("\u5FDB")}).to.throw(Error, "EncodingError U+5FDB");
r = r && ([...ms932Encoder.encode("応忝忞")].join(",") === "137,158,156,122,250,187"); // U+5FDC
expect(() => {ms932Encoder.encode("\u5FDF")}).to.throw(Error, "EncodingError U+5FDF");
r = r && ([...ms932Encoder.encode("忠")].join(",") === "146,137"); // U+5FE0
expect(() => {ms932Encoder.encode("\u5FE1")}).to.throw(Error, "EncodingError U+5FE1");
expect(() => {ms932Encoder.encode("\u5FE2")}).to.throw(Error, "EncodingError U+5FE2");
expect(() => {ms932Encoder.encode("\u5FE3")}).to.throw(Error, "EncodingError U+5FE3");
r = r && ([...ms932Encoder.encode("忤")].join(",") === "156,119"); // U+5FE4
expect(() => {ms932Encoder.encode("\u5FE5")}).to.throw(Error, "EncodingError U+5FE5");
expect(() => {ms932Encoder.encode("\u5FE6")}).to.throw(Error, "EncodingError U+5FE6");
expect(() => {ms932Encoder.encode("\u5FE7")}).to.throw(Error, "EncodingError U+5FE7");
expect(() => {ms932Encoder.encode("\u5FE8")}).to.throw(Error, "EncodingError U+5FE8");
expect(() => {ms932Encoder.encode("\u5FE9")}).to.throw(Error, "EncodingError U+5FE9");
expect(() => {ms932Encoder.encode("\u5FEA")}).to.throw(Error, "EncodingError U+5FEA");
r = r && ([...ms932Encoder.encode("快")].join(",") === "137,245"); // U+5FEB
expect(() => {ms932Encoder.encode("\u5FEC")}).to.throw(Error, "EncodingError U+5FEC");
expect(() => {ms932Encoder.encode("\u5FED")}).to.throw(Error, "EncodingError U+5FED");
expect(() => {ms932Encoder.encode("\u5FEE")}).to.throw(Error, "EncodingError U+5FEE");
expect(() => {ms932Encoder.encode("\u5FEF")}).to.throw(Error, "EncodingError U+5FEF");
r = r && ([...ms932Encoder.encode("忰忱")].join(",") === "156,171,156,121"); // U+5FF0
expect(() => {ms932Encoder.encode("\u5FF2")}).to.throw(Error, "EncodingError U+5FF2");
expect(() => {ms932Encoder.encode("\u5FF3")}).to.throw(Error, "EncodingError U+5FF3");
expect(() => {ms932Encoder.encode("\u5FF4")}).to.throw(Error, "EncodingError U+5FF4");
r = r && ([...ms932Encoder.encode("念")].join(",") === "148,79"); // U+5FF5
expect(() => {ms932Encoder.encode("\u5FF6")}).to.throw(Error, "EncodingError U+5FF6");
expect(() => {ms932Encoder.encode("\u5FF7")}).to.throw(Error, "EncodingError U+5FF7");
r = r && ([...ms932Encoder.encode("忸")].join(",") === "156,120"); // U+5FF8
expect(() => {ms932Encoder.encode("\u5FF9")}).to.throw(Error, "EncodingError U+5FF9");
expect(() => {ms932Encoder.encode("\u5FFA")}).to.throw(Error, "EncodingError U+5FFA");
r = r && ([...ms932Encoder.encode("忻")].join(",") === "156,118"); // U+5FFB
expect(() => {ms932Encoder.encode("\u5FFC")}).to.throw(Error, "EncodingError U+5FFC");
r = r && ([...ms932Encoder.encode("忽")].join(",") === "141,154"); // U+5FFD
expect(() => {ms932Encoder.encode("\u5FFE")}).to.throw(Error, "EncodingError U+5FFE");
r = r && ([...ms932Encoder.encode("忿")].join(",") === "156,124"); // U+5FFF

expect(r).to.equal(true);

  });

});
