import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 9", () => {

  it("encode(string) - U+8C00-U+8FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u8C00")}).to.throw(Error, "EncodingError U+8C00");
expect(() => {ms932Encoder.encode("\u8C01")}).to.throw(Error, "EncodingError U+8C01");
expect(() => {ms932Encoder.encode("\u8C02")}).to.throw(Error, "EncodingError U+8C02");
expect(() => {ms932Encoder.encode("\u8C03")}).to.throw(Error, "EncodingError U+8C03");
expect(() => {ms932Encoder.encode("\u8C04")}).to.throw(Error, "EncodingError U+8C04");
expect(() => {ms932Encoder.encode("\u8C05")}).to.throw(Error, "EncodingError U+8C05");
expect(() => {ms932Encoder.encode("\u8C06")}).to.throw(Error, "EncodingError U+8C06");
expect(() => {ms932Encoder.encode("\u8C07")}).to.throw(Error, "EncodingError U+8C07");
expect(() => {ms932Encoder.encode("\u8C08")}).to.throw(Error, "EncodingError U+8C08");
expect(() => {ms932Encoder.encode("\u8C09")}).to.throw(Error, "EncodingError U+8C09");
expect(() => {ms932Encoder.encode("\u8C0A")}).to.throw(Error, "EncodingError U+8C0A");
expect(() => {ms932Encoder.encode("\u8C0B")}).to.throw(Error, "EncodingError U+8C0B");
expect(() => {ms932Encoder.encode("\u8C0C")}).to.throw(Error, "EncodingError U+8C0C");
expect(() => {ms932Encoder.encode("\u8C0D")}).to.throw(Error, "EncodingError U+8C0D");
expect(() => {ms932Encoder.encode("\u8C0E")}).to.throw(Error, "EncodingError U+8C0E");
expect(() => {ms932Encoder.encode("\u8C0F")}).to.throw(Error, "EncodingError U+8C0F");
expect(() => {ms932Encoder.encode("\u8C10")}).to.throw(Error, "EncodingError U+8C10");
expect(() => {ms932Encoder.encode("\u8C11")}).to.throw(Error, "EncodingError U+8C11");
expect(() => {ms932Encoder.encode("\u8C12")}).to.throw(Error, "EncodingError U+8C12");
expect(() => {ms932Encoder.encode("\u8C13")}).to.throw(Error, "EncodingError U+8C13");
expect(() => {ms932Encoder.encode("\u8C14")}).to.throw(Error, "EncodingError U+8C14");
expect(() => {ms932Encoder.encode("\u8C15")}).to.throw(Error, "EncodingError U+8C15");
expect(() => {ms932Encoder.encode("\u8C16")}).to.throw(Error, "EncodingError U+8C16");
expect(() => {ms932Encoder.encode("\u8C17")}).to.throw(Error, "EncodingError U+8C17");
expect(() => {ms932Encoder.encode("\u8C18")}).to.throw(Error, "EncodingError U+8C18");
expect(() => {ms932Encoder.encode("\u8C19")}).to.throw(Error, "EncodingError U+8C19");
expect(() => {ms932Encoder.encode("\u8C1A")}).to.throw(Error, "EncodingError U+8C1A");
expect(() => {ms932Encoder.encode("\u8C1B")}).to.throw(Error, "EncodingError U+8C1B");
expect(() => {ms932Encoder.encode("\u8C1C")}).to.throw(Error, "EncodingError U+8C1C");
expect(() => {ms932Encoder.encode("\u8C1D")}).to.throw(Error, "EncodingError U+8C1D");
expect(() => {ms932Encoder.encode("\u8C1E")}).to.throw(Error, "EncodingError U+8C1E");
expect(() => {ms932Encoder.encode("\u8C1F")}).to.throw(Error, "EncodingError U+8C1F");
expect(() => {ms932Encoder.encode("\u8C20")}).to.throw(Error, "EncodingError U+8C20");
expect(() => {ms932Encoder.encode("\u8C21")}).to.throw(Error, "EncodingError U+8C21");
expect(() => {ms932Encoder.encode("\u8C22")}).to.throw(Error, "EncodingError U+8C22");
expect(() => {ms932Encoder.encode("\u8C23")}).to.throw(Error, "EncodingError U+8C23");
expect(() => {ms932Encoder.encode("\u8C24")}).to.throw(Error, "EncodingError U+8C24");
expect(() => {ms932Encoder.encode("\u8C25")}).to.throw(Error, "EncodingError U+8C25");
expect(() => {ms932Encoder.encode("\u8C26")}).to.throw(Error, "EncodingError U+8C26");
expect(() => {ms932Encoder.encode("\u8C27")}).to.throw(Error, "EncodingError U+8C27");
expect(() => {ms932Encoder.encode("\u8C28")}).to.throw(Error, "EncodingError U+8C28");
expect(() => {ms932Encoder.encode("\u8C29")}).to.throw(Error, "EncodingError U+8C29");
expect(() => {ms932Encoder.encode("\u8C2A")}).to.throw(Error, "EncodingError U+8C2A");
expect(() => {ms932Encoder.encode("\u8C2B")}).to.throw(Error, "EncodingError U+8C2B");
expect(() => {ms932Encoder.encode("\u8C2C")}).to.throw(Error, "EncodingError U+8C2C");
expect(() => {ms932Encoder.encode("\u8C2D")}).to.throw(Error, "EncodingError U+8C2D");
expect(() => {ms932Encoder.encode("\u8C2E")}).to.throw(Error, "EncodingError U+8C2E");
expect(() => {ms932Encoder.encode("\u8C2F")}).to.throw(Error, "EncodingError U+8C2F");
expect(() => {ms932Encoder.encode("\u8C30")}).to.throw(Error, "EncodingError U+8C30");
expect(() => {ms932Encoder.encode("\u8C31")}).to.throw(Error, "EncodingError U+8C31");
expect(() => {ms932Encoder.encode("\u8C32")}).to.throw(Error, "EncodingError U+8C32");
expect(() => {ms932Encoder.encode("\u8C33")}).to.throw(Error, "EncodingError U+8C33");
expect(() => {ms932Encoder.encode("\u8C34")}).to.throw(Error, "EncodingError U+8C34");
expect(() => {ms932Encoder.encode("\u8C35")}).to.throw(Error, "EncodingError U+8C35");
expect(() => {ms932Encoder.encode("\u8C36")}).to.throw(Error, "EncodingError U+8C36");
r = r && ([...ms932Encoder.encode("谷")].join(",") === "146,74"); // U+8C37
expect(() => {ms932Encoder.encode("\u8C38")}).to.throw(Error, "EncodingError U+8C38");
expect(() => {ms932Encoder.encode("\u8C39")}).to.throw(Error, "EncodingError U+8C39");
r = r && ([...ms932Encoder.encode("谺")].join(",") === "230,172"); // U+8C3A
expect(() => {ms932Encoder.encode("\u8C3B")}).to.throw(Error, "EncodingError U+8C3B");
expect(() => {ms932Encoder.encode("\u8C3C")}).to.throw(Error, "EncodingError U+8C3C");
expect(() => {ms932Encoder.encode("\u8C3D")}).to.throw(Error, "EncodingError U+8C3D");
expect(() => {ms932Encoder.encode("\u8C3E")}).to.throw(Error, "EncodingError U+8C3E");
r = r && ([...ms932Encoder.encode("谿")].join(",") === "230,174"); // U+8C3F
expect(() => {ms932Encoder.encode("\u8C40")}).to.throw(Error, "EncodingError U+8C40");
r = r && ([...ms932Encoder.encode("豁")].join(",") === "230,173"); // U+8C41
expect(() => {ms932Encoder.encode("\u8C42")}).to.throw(Error, "EncodingError U+8C42");
expect(() => {ms932Encoder.encode("\u8C43")}).to.throw(Error, "EncodingError U+8C43");
expect(() => {ms932Encoder.encode("\u8C44")}).to.throw(Error, "EncodingError U+8C44");
expect(() => {ms932Encoder.encode("\u8C45")}).to.throw(Error, "EncodingError U+8C45");
r = r && ([...ms932Encoder.encode("豆")].join(",") === "147,164"); // U+8C46
expect(() => {ms932Encoder.encode("\u8C47")}).to.throw(Error, "EncodingError U+8C47");
r = r && ([...ms932Encoder.encode("豈")].join(",") === "230,175"); // U+8C48
expect(() => {ms932Encoder.encode("\u8C49")}).to.throw(Error, "EncodingError U+8C49");
r = r && ([...ms932Encoder.encode("豊")].join(",") === "150,76"); // U+8C4A
expect(() => {ms932Encoder.encode("\u8C4B")}).to.throw(Error, "EncodingError U+8C4B");
r = r && ([...ms932Encoder.encode("豌")].join(",") === "230,176"); // U+8C4C
expect(() => {ms932Encoder.encode("\u8C4D")}).to.throw(Error, "EncodingError U+8C4D");
r = r && ([...ms932Encoder.encode("豎")].join(",") === "230,177"); // U+8C4E
expect(() => {ms932Encoder.encode("\u8C4F")}).to.throw(Error, "EncodingError U+8C4F");
r = r && ([...ms932Encoder.encode("豐")].join(",") === "230,178"); // U+8C50
expect(() => {ms932Encoder.encode("\u8C51")}).to.throw(Error, "EncodingError U+8C51");
expect(() => {ms932Encoder.encode("\u8C52")}).to.throw(Error, "EncodingError U+8C52");
expect(() => {ms932Encoder.encode("\u8C53")}).to.throw(Error, "EncodingError U+8C53");
expect(() => {ms932Encoder.encode("\u8C54")}).to.throw(Error, "EncodingError U+8C54");
r = r && ([...ms932Encoder.encode("豕")].join(",") === "230,179"); // U+8C55
expect(() => {ms932Encoder.encode("\u8C56")}).to.throw(Error, "EncodingError U+8C56");
expect(() => {ms932Encoder.encode("\u8C57")}).to.throw(Error, "EncodingError U+8C57");
expect(() => {ms932Encoder.encode("\u8C58")}).to.throw(Error, "EncodingError U+8C58");
expect(() => {ms932Encoder.encode("\u8C59")}).to.throw(Error, "EncodingError U+8C59");
r = r && ([...ms932Encoder.encode("豚")].join(",") === "147,216"); // U+8C5A
expect(() => {ms932Encoder.encode("\u8C5B")}).to.throw(Error, "EncodingError U+8C5B");
expect(() => {ms932Encoder.encode("\u8C5C")}).to.throw(Error, "EncodingError U+8C5C");
expect(() => {ms932Encoder.encode("\u8C5D")}).to.throw(Error, "EncodingError U+8C5D");
expect(() => {ms932Encoder.encode("\u8C5E")}).to.throw(Error, "EncodingError U+8C5E");
expect(() => {ms932Encoder.encode("\u8C5F")}).to.throw(Error, "EncodingError U+8C5F");
expect(() => {ms932Encoder.encode("\u8C60")}).to.throw(Error, "EncodingError U+8C60");
r = r && ([...ms932Encoder.encode("象豢")].join(",") === "143,219,230,180"); // U+8C61
expect(() => {ms932Encoder.encode("\u8C63")}).to.throw(Error, "EncodingError U+8C63");
expect(() => {ms932Encoder.encode("\u8C64")}).to.throw(Error, "EncodingError U+8C64");
expect(() => {ms932Encoder.encode("\u8C65")}).to.throw(Error, "EncodingError U+8C65");
expect(() => {ms932Encoder.encode("\u8C66")}).to.throw(Error, "EncodingError U+8C66");
expect(() => {ms932Encoder.encode("\u8C67")}).to.throw(Error, "EncodingError U+8C67");
expect(() => {ms932Encoder.encode("\u8C68")}).to.throw(Error, "EncodingError U+8C68");
expect(() => {ms932Encoder.encode("\u8C69")}).to.throw(Error, "EncodingError U+8C69");
r = r && ([...ms932Encoder.encode("豪豫豬")].join(",") === "141,139,152,172,230,181"); // U+8C6A
expect(() => {ms932Encoder.encode("\u8C6D")}).to.throw(Error, "EncodingError U+8C6D");
expect(() => {ms932Encoder.encode("\u8C6E")}).to.throw(Error, "EncodingError U+8C6E");
expect(() => {ms932Encoder.encode("\u8C6F")}).to.throw(Error, "EncodingError U+8C6F");
expect(() => {ms932Encoder.encode("\u8C70")}).to.throw(Error, "EncodingError U+8C70");
expect(() => {ms932Encoder.encode("\u8C71")}).to.throw(Error, "EncodingError U+8C71");
expect(() => {ms932Encoder.encode("\u8C72")}).to.throw(Error, "EncodingError U+8C72");
expect(() => {ms932Encoder.encode("\u8C73")}).to.throw(Error, "EncodingError U+8C73");
expect(() => {ms932Encoder.encode("\u8C74")}).to.throw(Error, "EncodingError U+8C74");
expect(() => {ms932Encoder.encode("\u8C75")}).to.throw(Error, "EncodingError U+8C75");
expect(() => {ms932Encoder.encode("\u8C76")}).to.throw(Error, "EncodingError U+8C76");
expect(() => {ms932Encoder.encode("\u8C77")}).to.throw(Error, "EncodingError U+8C77");
r = r && ([...ms932Encoder.encode("豸豹豺")].join(",") === "230,182,149,94,230,183"); // U+8C78
expect(() => {ms932Encoder.encode("\u8C7B")}).to.throw(Error, "EncodingError U+8C7B");
r = r && ([...ms932Encoder.encode("豼")].join(",") === "230,191"); // U+8C7C
expect(() => {ms932Encoder.encode("\u8C7D")}).to.throw(Error, "EncodingError U+8C7D");
expect(() => {ms932Encoder.encode("\u8C7E")}).to.throw(Error, "EncodingError U+8C7E");
expect(() => {ms932Encoder.encode("\u8C7F")}).to.throw(Error, "EncodingError U+8C7F");
expect(() => {ms932Encoder.encode("\u8C80")}).to.throw(Error, "EncodingError U+8C80");
expect(() => {ms932Encoder.encode("\u8C81")}).to.throw(Error, "EncodingError U+8C81");
r = r && ([...ms932Encoder.encode("貂")].join(",") === "230,184"); // U+8C82
expect(() => {ms932Encoder.encode("\u8C83")}).to.throw(Error, "EncodingError U+8C83");
expect(() => {ms932Encoder.encode("\u8C84")}).to.throw(Error, "EncodingError U+8C84");
r = r && ([...ms932Encoder.encode("貅")].join(",") === "230,186"); // U+8C85
expect(() => {ms932Encoder.encode("\u8C86")}).to.throw(Error, "EncodingError U+8C86");
expect(() => {ms932Encoder.encode("\u8C87")}).to.throw(Error, "EncodingError U+8C87");
expect(() => {ms932Encoder.encode("\u8C88")}).to.throw(Error, "EncodingError U+8C88");
r = r && ([...ms932Encoder.encode("貉貊")].join(",") === "230,185,230,187"); // U+8C89
expect(() => {ms932Encoder.encode("\u8C8B")}).to.throw(Error, "EncodingError U+8C8B");
r = r && ([...ms932Encoder.encode("貌貍貎")].join(",") === "150,101,230,188,230,189"); // U+8C8C
expect(() => {ms932Encoder.encode("\u8C8F")}).to.throw(Error, "EncodingError U+8C8F");
expect(() => {ms932Encoder.encode("\u8C90")}).to.throw(Error, "EncodingError U+8C90");
expect(() => {ms932Encoder.encode("\u8C91")}).to.throw(Error, "EncodingError U+8C91");
expect(() => {ms932Encoder.encode("\u8C92")}).to.throw(Error, "EncodingError U+8C92");
expect(() => {ms932Encoder.encode("\u8C93")}).to.throw(Error, "EncodingError U+8C93");
r = r && ([...ms932Encoder.encode("貔")].join(",") === "230,190"); // U+8C94
expect(() => {ms932Encoder.encode("\u8C95")}).to.throw(Error, "EncodingError U+8C95");
expect(() => {ms932Encoder.encode("\u8C96")}).to.throw(Error, "EncodingError U+8C96");
expect(() => {ms932Encoder.encode("\u8C97")}).to.throw(Error, "EncodingError U+8C97");
r = r && ([...ms932Encoder.encode("貘")].join(",") === "230,192"); // U+8C98
expect(() => {ms932Encoder.encode("\u8C99")}).to.throw(Error, "EncodingError U+8C99");
expect(() => {ms932Encoder.encode("\u8C9A")}).to.throw(Error, "EncodingError U+8C9A");
expect(() => {ms932Encoder.encode("\u8C9B")}).to.throw(Error, "EncodingError U+8C9B");
expect(() => {ms932Encoder.encode("\u8C9C")}).to.throw(Error, "EncodingError U+8C9C");
r = r && ([...ms932Encoder.encode("貝貞")].join(",") === "138,76,146,229"); // U+8C9D
expect(() => {ms932Encoder.encode("\u8C9F")}).to.throw(Error, "EncodingError U+8C9F");
r = r && ([...ms932Encoder.encode("負財貢")].join(",") === "149,137,141,224,141,118"); // U+8CA0
expect(() => {ms932Encoder.encode("\u8CA3")}).to.throw(Error, "EncodingError U+8CA3");
expect(() => {ms932Encoder.encode("\u8CA4")}).to.throw(Error, "EncodingError U+8CA4");
expect(() => {ms932Encoder.encode("\u8CA5")}).to.throw(Error, "EncodingError U+8CA5");
expect(() => {ms932Encoder.encode("\u8CA6")}).to.throw(Error, "EncodingError U+8CA6");
r = r && ([...ms932Encoder.encode("貧貨販貪貫責貭貮貯貰")].join(",") === "149,110,137,221,148,204,230,195,138,209,144,211,230,194,230,199,146,153,150,225"); // U+8CA7
expect(() => {ms932Encoder.encode("\u8CB1")}).to.throw(Error, "EncodingError U+8CB1");
r = r && ([...ms932Encoder.encode("貲貳貴")].join(",") === "230,197,230,198,139,77"); // U+8CB2
expect(() => {ms932Encoder.encode("\u8CB5")}).to.throw(Error, "EncodingError U+8CB5");
r = r && ([...ms932Encoder.encode("貶買貸")].join(",") === "230,200,148,131,145,221"); // U+8CB6
expect(() => {ms932Encoder.encode("\u8CB9")}).to.throw(Error, "EncodingError U+8CB9");
expect(() => {ms932Encoder.encode("\u8CBA")}).to.throw(Error, "EncodingError U+8CBA");
r = r && ([...ms932Encoder.encode("費貼貽")].join(",") === "148,239,147,92,230,196"); // U+8CBB
expect(() => {ms932Encoder.encode("\u8CBE")}).to.throw(Error, "EncodingError U+8CBE");
r = r && ([...ms932Encoder.encode("貿賀賁賂賃賄")].join(",") === "150,102,137,234,230,202,152,71,146,192,152,100"); // U+8CBF
expect(() => {ms932Encoder.encode("\u8CC5")}).to.throw(Error, "EncodingError U+8CC5");
expect(() => {ms932Encoder.encode("\u8CC6")}).to.throw(Error, "EncodingError U+8CC6");
r = r && ([...ms932Encoder.encode("資賈")].join(",") === "142,145,230,201"); // U+8CC7
expect(() => {ms932Encoder.encode("\u8CC9")}).to.throw(Error, "EncodingError U+8CC9");
r = r && ([...ms932Encoder.encode("賊")].join(",") === "145,175"); // U+8CCA
expect(() => {ms932Encoder.encode("\u8CCB")}).to.throw(Error, "EncodingError U+8CCB");
expect(() => {ms932Encoder.encode("\u8CCC")}).to.throw(Error, "EncodingError U+8CCC");
r = r && ([...ms932Encoder.encode("賍賎")].join(",") === "230,218,145,71"); // U+8CCD
expect(() => {ms932Encoder.encode("\u8CCF")}).to.throw(Error, "EncodingError U+8CCF");
expect(() => {ms932Encoder.encode("\u8CD0")}).to.throw(Error, "EncodingError U+8CD0");
r = r && ([...ms932Encoder.encode("賑")].join(",") === "147,246"); // U+8CD1
expect(() => {ms932Encoder.encode("\u8CD2")}).to.throw(Error, "EncodingError U+8CD2");
r = r && ([...ms932Encoder.encode("賓")].join(",") === "149,111"); // U+8CD3
expect(() => {ms932Encoder.encode("\u8CD4")}).to.throw(Error, "EncodingError U+8CD4");
expect(() => {ms932Encoder.encode("\u8CD5")}).to.throw(Error, "EncodingError U+8CD5");
expect(() => {ms932Encoder.encode("\u8CD6")}).to.throw(Error, "EncodingError U+8CD6");
expect(() => {ms932Encoder.encode("\u8CD7")}).to.throw(Error, "EncodingError U+8CD7");
expect(() => {ms932Encoder.encode("\u8CD8")}).to.throw(Error, "EncodingError U+8CD8");
expect(() => {ms932Encoder.encode("\u8CD9")}).to.throw(Error, "EncodingError U+8CD9");
r = r && ([...ms932Encoder.encode("賚賛賜")].join(",") === "230,205,142,94,142,146"); // U+8CDA
expect(() => {ms932Encoder.encode("\u8CDD")}).to.throw(Error, "EncodingError U+8CDD");
r = r && ([...ms932Encoder.encode("賞")].join(",") === "143,220"); // U+8CDE
expect(() => {ms932Encoder.encode("\u8CDF")}).to.throw(Error, "EncodingError U+8CDF");
r = r && ([...ms932Encoder.encode("賠")].join(",") === "148,133"); // U+8CE0
expect(() => {ms932Encoder.encode("\u8CE1")}).to.throw(Error, "EncodingError U+8CE1");
r = r && ([...ms932Encoder.encode("賢賣賤")].join(",") === "140,171,230,204,230,203"); // U+8CE2
expect(() => {ms932Encoder.encode("\u8CE5")}).to.throw(Error, "EncodingError U+8CE5");
r = r && ([...ms932Encoder.encode("賦")].join(",") === "149,138"); // U+8CE6
expect(() => {ms932Encoder.encode("\u8CE7")}).to.throw(Error, "EncodingError U+8CE7");
expect(() => {ms932Encoder.encode("\u8CE8")}).to.throw(Error, "EncodingError U+8CE8");
expect(() => {ms932Encoder.encode("\u8CE9")}).to.throw(Error, "EncodingError U+8CE9");
r = r && ([...ms932Encoder.encode("質")].join(",") === "142,191"); // U+8CEA
expect(() => {ms932Encoder.encode("\u8CEB")}).to.throw(Error, "EncodingError U+8CEB");
expect(() => {ms932Encoder.encode("\u8CEC")}).to.throw(Error, "EncodingError U+8CEC");
r = r && ([...ms932Encoder.encode("賭")].join(",") === "147,113"); // U+8CED
expect(() => {ms932Encoder.encode("\u8CEE")}).to.throw(Error, "EncodingError U+8CEE");
expect(() => {ms932Encoder.encode("\u8CEF")}).to.throw(Error, "EncodingError U+8CEF");
r = r && ([...ms932Encoder.encode("賰")].join(",") === "251,173"); // U+8CF0
expect(() => {ms932Encoder.encode("\u8CF1")}).to.throw(Error, "EncodingError U+8CF1");
expect(() => {ms932Encoder.encode("\u8CF2")}).to.throw(Error, "EncodingError U+8CF2");
expect(() => {ms932Encoder.encode("\u8CF3")}).to.throw(Error, "EncodingError U+8CF3");
r = r && ([...ms932Encoder.encode("賴")].join(",") === "251,174"); // U+8CF4
expect(() => {ms932Encoder.encode("\u8CF5")}).to.throw(Error, "EncodingError U+8CF5");
expect(() => {ms932Encoder.encode("\u8CF6")}).to.throw(Error, "EncodingError U+8CF6");
expect(() => {ms932Encoder.encode("\u8CF7")}).to.throw(Error, "EncodingError U+8CF7");
expect(() => {ms932Encoder.encode("\u8CF8")}).to.throw(Error, "EncodingError U+8CF8");
expect(() => {ms932Encoder.encode("\u8CF9")}).to.throw(Error, "EncodingError U+8CF9");
r = r && ([...ms932Encoder.encode("賺賻購賽")].join(",") === "230,207,230,208,141,119,230,206"); // U+8CFA
expect(() => {ms932Encoder.encode("\u8CFE")}).to.throw(Error, "EncodingError U+8CFE");
expect(() => {ms932Encoder.encode("\u8CFF")}).to.throw(Error, "EncodingError U+8CFF");
expect(() => {ms932Encoder.encode("\u8D00")}).to.throw(Error, "EncodingError U+8D00");
expect(() => {ms932Encoder.encode("\u8D01")}).to.throw(Error, "EncodingError U+8D01");
expect(() => {ms932Encoder.encode("\u8D02")}).to.throw(Error, "EncodingError U+8D02");
expect(() => {ms932Encoder.encode("\u8D03")}).to.throw(Error, "EncodingError U+8D03");
r = r && ([...ms932Encoder.encode("贄贅")].join(",") === "230,209,230,210"); // U+8D04
expect(() => {ms932Encoder.encode("\u8D06")}).to.throw(Error, "EncodingError U+8D06");
r = r && ([...ms932Encoder.encode("贇贈")].join(",") === "230,212,145,161"); // U+8D07
expect(() => {ms932Encoder.encode("\u8D09")}).to.throw(Error, "EncodingError U+8D09");
r = r && ([...ms932Encoder.encode("贊贋")].join(",") === "230,211,138,228"); // U+8D0A
expect(() => {ms932Encoder.encode("\u8D0C")}).to.throw(Error, "EncodingError U+8D0C");
r = r && ([...ms932Encoder.encode("贍")].join(",") === "230,214"); // U+8D0D
expect(() => {ms932Encoder.encode("\u8D0E")}).to.throw(Error, "EncodingError U+8D0E");
r = r && ([...ms932Encoder.encode("贏贐")].join(",") === "230,213,230,215"); // U+8D0F
expect(() => {ms932Encoder.encode("\u8D11")}).to.throw(Error, "EncodingError U+8D11");
r = r && ([...ms932Encoder.encode("贒贓贔")].join(",") === "251,175,230,217,230,219"); // U+8D12
expect(() => {ms932Encoder.encode("\u8D15")}).to.throw(Error, "EncodingError U+8D15");
r = r && ([...ms932Encoder.encode("贖")].join(",") === "230,220"); // U+8D16
expect(() => {ms932Encoder.encode("\u8D17")}).to.throw(Error, "EncodingError U+8D17");
expect(() => {ms932Encoder.encode("\u8D18")}).to.throw(Error, "EncodingError U+8D18");
expect(() => {ms932Encoder.encode("\u8D19")}).to.throw(Error, "EncodingError U+8D19");
expect(() => {ms932Encoder.encode("\u8D1A")}).to.throw(Error, "EncodingError U+8D1A");
expect(() => {ms932Encoder.encode("\u8D1B")}).to.throw(Error, "EncodingError U+8D1B");
expect(() => {ms932Encoder.encode("\u8D1C")}).to.throw(Error, "EncodingError U+8D1C");
expect(() => {ms932Encoder.encode("\u8D1D")}).to.throw(Error, "EncodingError U+8D1D");
expect(() => {ms932Encoder.encode("\u8D1E")}).to.throw(Error, "EncodingError U+8D1E");
expect(() => {ms932Encoder.encode("\u8D1F")}).to.throw(Error, "EncodingError U+8D1F");
expect(() => {ms932Encoder.encode("\u8D20")}).to.throw(Error, "EncodingError U+8D20");
expect(() => {ms932Encoder.encode("\u8D21")}).to.throw(Error, "EncodingError U+8D21");
expect(() => {ms932Encoder.encode("\u8D22")}).to.throw(Error, "EncodingError U+8D22");
expect(() => {ms932Encoder.encode("\u8D23")}).to.throw(Error, "EncodingError U+8D23");
expect(() => {ms932Encoder.encode("\u8D24")}).to.throw(Error, "EncodingError U+8D24");
expect(() => {ms932Encoder.encode("\u8D25")}).to.throw(Error, "EncodingError U+8D25");
expect(() => {ms932Encoder.encode("\u8D26")}).to.throw(Error, "EncodingError U+8D26");
expect(() => {ms932Encoder.encode("\u8D27")}).to.throw(Error, "EncodingError U+8D27");
expect(() => {ms932Encoder.encode("\u8D28")}).to.throw(Error, "EncodingError U+8D28");
expect(() => {ms932Encoder.encode("\u8D29")}).to.throw(Error, "EncodingError U+8D29");
expect(() => {ms932Encoder.encode("\u8D2A")}).to.throw(Error, "EncodingError U+8D2A");
expect(() => {ms932Encoder.encode("\u8D2B")}).to.throw(Error, "EncodingError U+8D2B");
expect(() => {ms932Encoder.encode("\u8D2C")}).to.throw(Error, "EncodingError U+8D2C");
expect(() => {ms932Encoder.encode("\u8D2D")}).to.throw(Error, "EncodingError U+8D2D");
expect(() => {ms932Encoder.encode("\u8D2E")}).to.throw(Error, "EncodingError U+8D2E");
expect(() => {ms932Encoder.encode("\u8D2F")}).to.throw(Error, "EncodingError U+8D2F");
expect(() => {ms932Encoder.encode("\u8D30")}).to.throw(Error, "EncodingError U+8D30");
expect(() => {ms932Encoder.encode("\u8D31")}).to.throw(Error, "EncodingError U+8D31");
expect(() => {ms932Encoder.encode("\u8D32")}).to.throw(Error, "EncodingError U+8D32");
expect(() => {ms932Encoder.encode("\u8D33")}).to.throw(Error, "EncodingError U+8D33");
expect(() => {ms932Encoder.encode("\u8D34")}).to.throw(Error, "EncodingError U+8D34");
expect(() => {ms932Encoder.encode("\u8D35")}).to.throw(Error, "EncodingError U+8D35");
expect(() => {ms932Encoder.encode("\u8D36")}).to.throw(Error, "EncodingError U+8D36");
expect(() => {ms932Encoder.encode("\u8D37")}).to.throw(Error, "EncodingError U+8D37");
expect(() => {ms932Encoder.encode("\u8D38")}).to.throw(Error, "EncodingError U+8D38");
expect(() => {ms932Encoder.encode("\u8D39")}).to.throw(Error, "EncodingError U+8D39");
expect(() => {ms932Encoder.encode("\u8D3A")}).to.throw(Error, "EncodingError U+8D3A");
expect(() => {ms932Encoder.encode("\u8D3B")}).to.throw(Error, "EncodingError U+8D3B");
expect(() => {ms932Encoder.encode("\u8D3C")}).to.throw(Error, "EncodingError U+8D3C");
expect(() => {ms932Encoder.encode("\u8D3D")}).to.throw(Error, "EncodingError U+8D3D");
expect(() => {ms932Encoder.encode("\u8D3E")}).to.throw(Error, "EncodingError U+8D3E");
expect(() => {ms932Encoder.encode("\u8D3F")}).to.throw(Error, "EncodingError U+8D3F");
expect(() => {ms932Encoder.encode("\u8D40")}).to.throw(Error, "EncodingError U+8D40");
expect(() => {ms932Encoder.encode("\u8D41")}).to.throw(Error, "EncodingError U+8D41");
expect(() => {ms932Encoder.encode("\u8D42")}).to.throw(Error, "EncodingError U+8D42");
expect(() => {ms932Encoder.encode("\u8D43")}).to.throw(Error, "EncodingError U+8D43");
expect(() => {ms932Encoder.encode("\u8D44")}).to.throw(Error, "EncodingError U+8D44");
expect(() => {ms932Encoder.encode("\u8D45")}).to.throw(Error, "EncodingError U+8D45");
expect(() => {ms932Encoder.encode("\u8D46")}).to.throw(Error, "EncodingError U+8D46");
expect(() => {ms932Encoder.encode("\u8D47")}).to.throw(Error, "EncodingError U+8D47");
expect(() => {ms932Encoder.encode("\u8D48")}).to.throw(Error, "EncodingError U+8D48");
expect(() => {ms932Encoder.encode("\u8D49")}).to.throw(Error, "EncodingError U+8D49");
expect(() => {ms932Encoder.encode("\u8D4A")}).to.throw(Error, "EncodingError U+8D4A");
expect(() => {ms932Encoder.encode("\u8D4B")}).to.throw(Error, "EncodingError U+8D4B");
expect(() => {ms932Encoder.encode("\u8D4C")}).to.throw(Error, "EncodingError U+8D4C");
expect(() => {ms932Encoder.encode("\u8D4D")}).to.throw(Error, "EncodingError U+8D4D");
expect(() => {ms932Encoder.encode("\u8D4E")}).to.throw(Error, "EncodingError U+8D4E");
expect(() => {ms932Encoder.encode("\u8D4F")}).to.throw(Error, "EncodingError U+8D4F");
expect(() => {ms932Encoder.encode("\u8D50")}).to.throw(Error, "EncodingError U+8D50");
expect(() => {ms932Encoder.encode("\u8D51")}).to.throw(Error, "EncodingError U+8D51");
expect(() => {ms932Encoder.encode("\u8D52")}).to.throw(Error, "EncodingError U+8D52");
expect(() => {ms932Encoder.encode("\u8D53")}).to.throw(Error, "EncodingError U+8D53");
expect(() => {ms932Encoder.encode("\u8D54")}).to.throw(Error, "EncodingError U+8D54");
expect(() => {ms932Encoder.encode("\u8D55")}).to.throw(Error, "EncodingError U+8D55");
expect(() => {ms932Encoder.encode("\u8D56")}).to.throw(Error, "EncodingError U+8D56");
expect(() => {ms932Encoder.encode("\u8D57")}).to.throw(Error, "EncodingError U+8D57");
expect(() => {ms932Encoder.encode("\u8D58")}).to.throw(Error, "EncodingError U+8D58");
expect(() => {ms932Encoder.encode("\u8D59")}).to.throw(Error, "EncodingError U+8D59");
expect(() => {ms932Encoder.encode("\u8D5A")}).to.throw(Error, "EncodingError U+8D5A");
expect(() => {ms932Encoder.encode("\u8D5B")}).to.throw(Error, "EncodingError U+8D5B");
expect(() => {ms932Encoder.encode("\u8D5C")}).to.throw(Error, "EncodingError U+8D5C");
expect(() => {ms932Encoder.encode("\u8D5D")}).to.throw(Error, "EncodingError U+8D5D");
expect(() => {ms932Encoder.encode("\u8D5E")}).to.throw(Error, "EncodingError U+8D5E");
expect(() => {ms932Encoder.encode("\u8D5F")}).to.throw(Error, "EncodingError U+8D5F");
expect(() => {ms932Encoder.encode("\u8D60")}).to.throw(Error, "EncodingError U+8D60");
expect(() => {ms932Encoder.encode("\u8D61")}).to.throw(Error, "EncodingError U+8D61");
expect(() => {ms932Encoder.encode("\u8D62")}).to.throw(Error, "EncodingError U+8D62");
expect(() => {ms932Encoder.encode("\u8D63")}).to.throw(Error, "EncodingError U+8D63");
r = r && ([...ms932Encoder.encode("赤")].join(",") === "144,212"); // U+8D64
expect(() => {ms932Encoder.encode("\u8D65")}).to.throw(Error, "EncodingError U+8D65");
r = r && ([...ms932Encoder.encode("赦赧")].join(",") === "142,205,230,221"); // U+8D66
expect(() => {ms932Encoder.encode("\u8D68")}).to.throw(Error, "EncodingError U+8D68");
expect(() => {ms932Encoder.encode("\u8D69")}).to.throw(Error, "EncodingError U+8D69");
expect(() => {ms932Encoder.encode("\u8D6A")}).to.throw(Error, "EncodingError U+8D6A");
r = r && ([...ms932Encoder.encode("赫")].join(",") === "138,113"); // U+8D6B
expect(() => {ms932Encoder.encode("\u8D6C")}).to.throw(Error, "EncodingError U+8D6C");
r = r && ([...ms932Encoder.encode("赭")].join(",") === "230,222"); // U+8D6D
expect(() => {ms932Encoder.encode("\u8D6E")}).to.throw(Error, "EncodingError U+8D6E");
expect(() => {ms932Encoder.encode("\u8D6F")}).to.throw(Error, "EncodingError U+8D6F");
r = r && ([...ms932Encoder.encode("走赱")].join(",") === "145,150,230,223"); // U+8D70
expect(() => {ms932Encoder.encode("\u8D72")}).to.throw(Error, "EncodingError U+8D72");
r = r && ([...ms932Encoder.encode("赳赴")].join(",") === "230,224,149,139"); // U+8D73
expect(() => {ms932Encoder.encode("\u8D75")}).to.throw(Error, "EncodingError U+8D75");
r = r && ([...ms932Encoder.encode("赶起")].join(",") === "251,176,139,78"); // U+8D76
expect(() => {ms932Encoder.encode("\u8D78")}).to.throw(Error, "EncodingError U+8D78");
expect(() => {ms932Encoder.encode("\u8D79")}).to.throw(Error, "EncodingError U+8D79");
expect(() => {ms932Encoder.encode("\u8D7A")}).to.throw(Error, "EncodingError U+8D7A");
expect(() => {ms932Encoder.encode("\u8D7B")}).to.throw(Error, "EncodingError U+8D7B");
expect(() => {ms932Encoder.encode("\u8D7C")}).to.throw(Error, "EncodingError U+8D7C");
expect(() => {ms932Encoder.encode("\u8D7D")}).to.throw(Error, "EncodingError U+8D7D");
expect(() => {ms932Encoder.encode("\u8D7E")}).to.throw(Error, "EncodingError U+8D7E");
expect(() => {ms932Encoder.encode("\u8D7F")}).to.throw(Error, "EncodingError U+8D7F");
expect(() => {ms932Encoder.encode("\u8D80")}).to.throw(Error, "EncodingError U+8D80");
r = r && ([...ms932Encoder.encode("趁")].join(",") === "230,225"); // U+8D81
expect(() => {ms932Encoder.encode("\u8D82")}).to.throw(Error, "EncodingError U+8D82");
expect(() => {ms932Encoder.encode("\u8D83")}).to.throw(Error, "EncodingError U+8D83");
expect(() => {ms932Encoder.encode("\u8D84")}).to.throw(Error, "EncodingError U+8D84");
r = r && ([...ms932Encoder.encode("超")].join(",") === "146,180"); // U+8D85
expect(() => {ms932Encoder.encode("\u8D86")}).to.throw(Error, "EncodingError U+8D86");
expect(() => {ms932Encoder.encode("\u8D87")}).to.throw(Error, "EncodingError U+8D87");
expect(() => {ms932Encoder.encode("\u8D88")}).to.throw(Error, "EncodingError U+8D88");
expect(() => {ms932Encoder.encode("\u8D89")}).to.throw(Error, "EncodingError U+8D89");
r = r && ([...ms932Encoder.encode("越")].join(",") === "137,122"); // U+8D8A
expect(() => {ms932Encoder.encode("\u8D8B")}).to.throw(Error, "EncodingError U+8D8B");
expect(() => {ms932Encoder.encode("\u8D8C")}).to.throw(Error, "EncodingError U+8D8C");
expect(() => {ms932Encoder.encode("\u8D8D")}).to.throw(Error, "EncodingError U+8D8D");
expect(() => {ms932Encoder.encode("\u8D8E")}).to.throw(Error, "EncodingError U+8D8E");
expect(() => {ms932Encoder.encode("\u8D8F")}).to.throw(Error, "EncodingError U+8D8F");
expect(() => {ms932Encoder.encode("\u8D90")}).to.throw(Error, "EncodingError U+8D90");
expect(() => {ms932Encoder.encode("\u8D91")}).to.throw(Error, "EncodingError U+8D91");
expect(() => {ms932Encoder.encode("\u8D92")}).to.throw(Error, "EncodingError U+8D92");
expect(() => {ms932Encoder.encode("\u8D93")}).to.throw(Error, "EncodingError U+8D93");
expect(() => {ms932Encoder.encode("\u8D94")}).to.throw(Error, "EncodingError U+8D94");
expect(() => {ms932Encoder.encode("\u8D95")}).to.throw(Error, "EncodingError U+8D95");
expect(() => {ms932Encoder.encode("\u8D96")}).to.throw(Error, "EncodingError U+8D96");
expect(() => {ms932Encoder.encode("\u8D97")}).to.throw(Error, "EncodingError U+8D97");
expect(() => {ms932Encoder.encode("\u8D98")}).to.throw(Error, "EncodingError U+8D98");
r = r && ([...ms932Encoder.encode("趙")].join(",") === "230,226"); // U+8D99
expect(() => {ms932Encoder.encode("\u8D9A")}).to.throw(Error, "EncodingError U+8D9A");
expect(() => {ms932Encoder.encode("\u8D9B")}).to.throw(Error, "EncodingError U+8D9B");
expect(() => {ms932Encoder.encode("\u8D9C")}).to.throw(Error, "EncodingError U+8D9C");
expect(() => {ms932Encoder.encode("\u8D9D")}).to.throw(Error, "EncodingError U+8D9D");
expect(() => {ms932Encoder.encode("\u8D9E")}).to.throw(Error, "EncodingError U+8D9E");
expect(() => {ms932Encoder.encode("\u8D9F")}).to.throw(Error, "EncodingError U+8D9F");
expect(() => {ms932Encoder.encode("\u8DA0")}).to.throw(Error, "EncodingError U+8DA0");
expect(() => {ms932Encoder.encode("\u8DA1")}).to.throw(Error, "EncodingError U+8DA1");
expect(() => {ms932Encoder.encode("\u8DA2")}).to.throw(Error, "EncodingError U+8DA2");
r = r && ([...ms932Encoder.encode("趣")].join(",") === "142,239"); // U+8DA3
expect(() => {ms932Encoder.encode("\u8DA4")}).to.throw(Error, "EncodingError U+8DA4");
expect(() => {ms932Encoder.encode("\u8DA5")}).to.throw(Error, "EncodingError U+8DA5");
expect(() => {ms932Encoder.encode("\u8DA6")}).to.throw(Error, "EncodingError U+8DA6");
expect(() => {ms932Encoder.encode("\u8DA7")}).to.throw(Error, "EncodingError U+8DA7");
r = r && ([...ms932Encoder.encode("趨")].join(",") === "144,150"); // U+8DA8
expect(() => {ms932Encoder.encode("\u8DA9")}).to.throw(Error, "EncodingError U+8DA9");
expect(() => {ms932Encoder.encode("\u8DAA")}).to.throw(Error, "EncodingError U+8DAA");
expect(() => {ms932Encoder.encode("\u8DAB")}).to.throw(Error, "EncodingError U+8DAB");
expect(() => {ms932Encoder.encode("\u8DAC")}).to.throw(Error, "EncodingError U+8DAC");
expect(() => {ms932Encoder.encode("\u8DAD")}).to.throw(Error, "EncodingError U+8DAD");
expect(() => {ms932Encoder.encode("\u8DAE")}).to.throw(Error, "EncodingError U+8DAE");
expect(() => {ms932Encoder.encode("\u8DAF")}).to.throw(Error, "EncodingError U+8DAF");
expect(() => {ms932Encoder.encode("\u8DB0")}).to.throw(Error, "EncodingError U+8DB0");
expect(() => {ms932Encoder.encode("\u8DB1")}).to.throw(Error, "EncodingError U+8DB1");
expect(() => {ms932Encoder.encode("\u8DB2")}).to.throw(Error, "EncodingError U+8DB2");
r = r && ([...ms932Encoder.encode("足")].join(",") === "145,171"); // U+8DB3
expect(() => {ms932Encoder.encode("\u8DB4")}).to.throw(Error, "EncodingError U+8DB4");
expect(() => {ms932Encoder.encode("\u8DB5")}).to.throw(Error, "EncodingError U+8DB5");
expect(() => {ms932Encoder.encode("\u8DB6")}).to.throw(Error, "EncodingError U+8DB6");
expect(() => {ms932Encoder.encode("\u8DB7")}).to.throw(Error, "EncodingError U+8DB7");
expect(() => {ms932Encoder.encode("\u8DB8")}).to.throw(Error, "EncodingError U+8DB8");
expect(() => {ms932Encoder.encode("\u8DB9")}).to.throw(Error, "EncodingError U+8DB9");
r = r && ([...ms932Encoder.encode("趺")].join(",") === "230,229"); // U+8DBA
expect(() => {ms932Encoder.encode("\u8DBB")}).to.throw(Error, "EncodingError U+8DBB");
expect(() => {ms932Encoder.encode("\u8DBC")}).to.throw(Error, "EncodingError U+8DBC");
expect(() => {ms932Encoder.encode("\u8DBD")}).to.throw(Error, "EncodingError U+8DBD");
r = r && ([...ms932Encoder.encode("趾")].join(",") === "230,228"); // U+8DBE
expect(() => {ms932Encoder.encode("\u8DBF")}).to.throw(Error, "EncodingError U+8DBF");
expect(() => {ms932Encoder.encode("\u8DC0")}).to.throw(Error, "EncodingError U+8DC0");
expect(() => {ms932Encoder.encode("\u8DC1")}).to.throw(Error, "EncodingError U+8DC1");
r = r && ([...ms932Encoder.encode("跂")].join(",") === "230,227"); // U+8DC2
expect(() => {ms932Encoder.encode("\u8DC3")}).to.throw(Error, "EncodingError U+8DC3");
expect(() => {ms932Encoder.encode("\u8DC4")}).to.throw(Error, "EncodingError U+8DC4");
expect(() => {ms932Encoder.encode("\u8DC5")}).to.throw(Error, "EncodingError U+8DC5");
expect(() => {ms932Encoder.encode("\u8DC6")}).to.throw(Error, "EncodingError U+8DC6");
expect(() => {ms932Encoder.encode("\u8DC7")}).to.throw(Error, "EncodingError U+8DC7");
expect(() => {ms932Encoder.encode("\u8DC8")}).to.throw(Error, "EncodingError U+8DC8");
expect(() => {ms932Encoder.encode("\u8DC9")}).to.throw(Error, "EncodingError U+8DC9");
expect(() => {ms932Encoder.encode("\u8DCA")}).to.throw(Error, "EncodingError U+8DCA");
r = r && ([...ms932Encoder.encode("跋跌")].join(",") === "230,235,230,233"); // U+8DCB
expect(() => {ms932Encoder.encode("\u8DCD")}).to.throw(Error, "EncodingError U+8DCD");
expect(() => {ms932Encoder.encode("\u8DCE")}).to.throw(Error, "EncodingError U+8DCE");
r = r && ([...ms932Encoder.encode("跏")].join(",") === "230,230"); // U+8DCF
expect(() => {ms932Encoder.encode("\u8DD0")}).to.throw(Error, "EncodingError U+8DD0");
expect(() => {ms932Encoder.encode("\u8DD1")}).to.throw(Error, "EncodingError U+8DD1");
expect(() => {ms932Encoder.encode("\u8DD2")}).to.throw(Error, "EncodingError U+8DD2");
expect(() => {ms932Encoder.encode("\u8DD3")}).to.throw(Error, "EncodingError U+8DD3");
expect(() => {ms932Encoder.encode("\u8DD4")}).to.throw(Error, "EncodingError U+8DD4");
expect(() => {ms932Encoder.encode("\u8DD5")}).to.throw(Error, "EncodingError U+8DD5");
r = r && ([...ms932Encoder.encode("跖")].join(",") === "230,232"); // U+8DD6
expect(() => {ms932Encoder.encode("\u8DD7")}).to.throw(Error, "EncodingError U+8DD7");
expect(() => {ms932Encoder.encode("\u8DD8")}).to.throw(Error, "EncodingError U+8DD8");
expect(() => {ms932Encoder.encode("\u8DD9")}).to.throw(Error, "EncodingError U+8DD9");
r = r && ([...ms932Encoder.encode("跚跛")].join(",") === "230,231,230,234"); // U+8DDA
expect(() => {ms932Encoder.encode("\u8DDC")}).to.throw(Error, "EncodingError U+8DDC");
r = r && ([...ms932Encoder.encode("距")].join(",") === "139,151"); // U+8DDD
expect(() => {ms932Encoder.encode("\u8DDE")}).to.throw(Error, "EncodingError U+8DDE");
r = r && ([...ms932Encoder.encode("跟")].join(",") === "230,238"); // U+8DDF
expect(() => {ms932Encoder.encode("\u8DE0")}).to.throw(Error, "EncodingError U+8DE0");
r = r && ([...ms932Encoder.encode("跡")].join(",") === "144,213"); // U+8DE1
expect(() => {ms932Encoder.encode("\u8DE2")}).to.throw(Error, "EncodingError U+8DE2");
r = r && ([...ms932Encoder.encode("跣")].join(",") === "230,239"); // U+8DE3
expect(() => {ms932Encoder.encode("\u8DE4")}).to.throw(Error, "EncodingError U+8DE4");
expect(() => {ms932Encoder.encode("\u8DE5")}).to.throw(Error, "EncodingError U+8DE5");
expect(() => {ms932Encoder.encode("\u8DE6")}).to.throw(Error, "EncodingError U+8DE6");
expect(() => {ms932Encoder.encode("\u8DE7")}).to.throw(Error, "EncodingError U+8DE7");
r = r && ([...ms932Encoder.encode("跨")].join(",") === "140,215"); // U+8DE8
expect(() => {ms932Encoder.encode("\u8DE9")}).to.throw(Error, "EncodingError U+8DE9");
r = r && ([...ms932Encoder.encode("跪跫")].join(",") === "230,236,230,237"); // U+8DEA
expect(() => {ms932Encoder.encode("\u8DEC")}).to.throw(Error, "EncodingError U+8DEC");
expect(() => {ms932Encoder.encode("\u8DED")}).to.throw(Error, "EncodingError U+8DED");
expect(() => {ms932Encoder.encode("\u8DEE")}).to.throw(Error, "EncodingError U+8DEE");
r = r && ([...ms932Encoder.encode("路")].join(",") === "152,72"); // U+8DEF
expect(() => {ms932Encoder.encode("\u8DF0")}).to.throw(Error, "EncodingError U+8DF0");
expect(() => {ms932Encoder.encode("\u8DF1")}).to.throw(Error, "EncodingError U+8DF1");
expect(() => {ms932Encoder.encode("\u8DF2")}).to.throw(Error, "EncodingError U+8DF2");
r = r && ([...ms932Encoder.encode("跳")].join(",") === "146,181"); // U+8DF3
expect(() => {ms932Encoder.encode("\u8DF4")}).to.throw(Error, "EncodingError U+8DF4");
r = r && ([...ms932Encoder.encode("践")].join(",") === "145,72"); // U+8DF5
expect(() => {ms932Encoder.encode("\u8DF6")}).to.throw(Error, "EncodingError U+8DF6");
expect(() => {ms932Encoder.encode("\u8DF7")}).to.throw(Error, "EncodingError U+8DF7");
expect(() => {ms932Encoder.encode("\u8DF8")}).to.throw(Error, "EncodingError U+8DF8");
expect(() => {ms932Encoder.encode("\u8DF9")}).to.throw(Error, "EncodingError U+8DF9");
expect(() => {ms932Encoder.encode("\u8DFA")}).to.throw(Error, "EncodingError U+8DFA");
expect(() => {ms932Encoder.encode("\u8DFB")}).to.throw(Error, "EncodingError U+8DFB");
r = r && ([...ms932Encoder.encode("跼")].join(",") === "230,240"); // U+8DFC
expect(() => {ms932Encoder.encode("\u8DFD")}).to.throw(Error, "EncodingError U+8DFD");
expect(() => {ms932Encoder.encode("\u8DFE")}).to.throw(Error, "EncodingError U+8DFE");
r = r && ([...ms932Encoder.encode("跿")].join(",") === "230,243"); // U+8DFF
expect(() => {ms932Encoder.encode("\u8E00")}).to.throw(Error, "EncodingError U+8E00");
expect(() => {ms932Encoder.encode("\u8E01")}).to.throw(Error, "EncodingError U+8E01");
expect(() => {ms932Encoder.encode("\u8E02")}).to.throw(Error, "EncodingError U+8E02");
expect(() => {ms932Encoder.encode("\u8E03")}).to.throw(Error, "EncodingError U+8E03");
expect(() => {ms932Encoder.encode("\u8E04")}).to.throw(Error, "EncodingError U+8E04");
expect(() => {ms932Encoder.encode("\u8E05")}).to.throw(Error, "EncodingError U+8E05");
expect(() => {ms932Encoder.encode("\u8E06")}).to.throw(Error, "EncodingError U+8E06");
expect(() => {ms932Encoder.encode("\u8E07")}).to.throw(Error, "EncodingError U+8E07");
r = r && ([...ms932Encoder.encode("踈踉踊")].join(",") === "230,241,230,242,151,120"); // U+8E08
expect(() => {ms932Encoder.encode("\u8E0B")}).to.throw(Error, "EncodingError U+8E0B");
expect(() => {ms932Encoder.encode("\u8E0C")}).to.throw(Error, "EncodingError U+8E0C");
expect(() => {ms932Encoder.encode("\u8E0D")}).to.throw(Error, "EncodingError U+8E0D");
expect(() => {ms932Encoder.encode("\u8E0E")}).to.throw(Error, "EncodingError U+8E0E");
r = r && ([...ms932Encoder.encode("踏踐")].join(",") === "147,165,230,246"); // U+8E0F
expect(() => {ms932Encoder.encode("\u8E11")}).to.throw(Error, "EncodingError U+8E11");
expect(() => {ms932Encoder.encode("\u8E12")}).to.throw(Error, "EncodingError U+8E12");
expect(() => {ms932Encoder.encode("\u8E13")}).to.throw(Error, "EncodingError U+8E13");
expect(() => {ms932Encoder.encode("\u8E14")}).to.throw(Error, "EncodingError U+8E14");
expect(() => {ms932Encoder.encode("\u8E15")}).to.throw(Error, "EncodingError U+8E15");
expect(() => {ms932Encoder.encode("\u8E16")}).to.throw(Error, "EncodingError U+8E16");
expect(() => {ms932Encoder.encode("\u8E17")}).to.throw(Error, "EncodingError U+8E17");
expect(() => {ms932Encoder.encode("\u8E18")}).to.throw(Error, "EncodingError U+8E18");
expect(() => {ms932Encoder.encode("\u8E19")}).to.throw(Error, "EncodingError U+8E19");
expect(() => {ms932Encoder.encode("\u8E1A")}).to.throw(Error, "EncodingError U+8E1A");
expect(() => {ms932Encoder.encode("\u8E1B")}).to.throw(Error, "EncodingError U+8E1B");
expect(() => {ms932Encoder.encode("\u8E1C")}).to.throw(Error, "EncodingError U+8E1C");
r = r && ([...ms932Encoder.encode("踝踞踟")].join(",") === "230,244,230,245,230,247"); // U+8E1D
expect(() => {ms932Encoder.encode("\u8E20")}).to.throw(Error, "EncodingError U+8E20");
expect(() => {ms932Encoder.encode("\u8E21")}).to.throw(Error, "EncodingError U+8E21");
expect(() => {ms932Encoder.encode("\u8E22")}).to.throw(Error, "EncodingError U+8E22");
expect(() => {ms932Encoder.encode("\u8E23")}).to.throw(Error, "EncodingError U+8E23");
expect(() => {ms932Encoder.encode("\u8E24")}).to.throw(Error, "EncodingError U+8E24");
expect(() => {ms932Encoder.encode("\u8E25")}).to.throw(Error, "EncodingError U+8E25");
expect(() => {ms932Encoder.encode("\u8E26")}).to.throw(Error, "EncodingError U+8E26");
expect(() => {ms932Encoder.encode("\u8E27")}).to.throw(Error, "EncodingError U+8E27");
expect(() => {ms932Encoder.encode("\u8E28")}).to.throw(Error, "EncodingError U+8E28");
expect(() => {ms932Encoder.encode("\u8E29")}).to.throw(Error, "EncodingError U+8E29");
r = r && ([...ms932Encoder.encode("踪")].join(",") === "231,72"); // U+8E2A
expect(() => {ms932Encoder.encode("\u8E2B")}).to.throw(Error, "EncodingError U+8E2B");
expect(() => {ms932Encoder.encode("\u8E2C")}).to.throw(Error, "EncodingError U+8E2C");
expect(() => {ms932Encoder.encode("\u8E2D")}).to.throw(Error, "EncodingError U+8E2D");
expect(() => {ms932Encoder.encode("\u8E2E")}).to.throw(Error, "EncodingError U+8E2E");
expect(() => {ms932Encoder.encode("\u8E2F")}).to.throw(Error, "EncodingError U+8E2F");
r = r && ([...ms932Encoder.encode("踰")].join(",") === "230,250"); // U+8E30
expect(() => {ms932Encoder.encode("\u8E31")}).to.throw(Error, "EncodingError U+8E31");
expect(() => {ms932Encoder.encode("\u8E32")}).to.throw(Error, "EncodingError U+8E32");
expect(() => {ms932Encoder.encode("\u8E33")}).to.throw(Error, "EncodingError U+8E33");
r = r && ([...ms932Encoder.encode("踴踵")].join(",") === "230,251,230,249"); // U+8E34
expect(() => {ms932Encoder.encode("\u8E36")}).to.throw(Error, "EncodingError U+8E36");
expect(() => {ms932Encoder.encode("\u8E37")}).to.throw(Error, "EncodingError U+8E37");
expect(() => {ms932Encoder.encode("\u8E38")}).to.throw(Error, "EncodingError U+8E38");
expect(() => {ms932Encoder.encode("\u8E39")}).to.throw(Error, "EncodingError U+8E39");
expect(() => {ms932Encoder.encode("\u8E3A")}).to.throw(Error, "EncodingError U+8E3A");
expect(() => {ms932Encoder.encode("\u8E3B")}).to.throw(Error, "EncodingError U+8E3B");
expect(() => {ms932Encoder.encode("\u8E3C")}).to.throw(Error, "EncodingError U+8E3C");
expect(() => {ms932Encoder.encode("\u8E3D")}).to.throw(Error, "EncodingError U+8E3D");
expect(() => {ms932Encoder.encode("\u8E3E")}).to.throw(Error, "EncodingError U+8E3E");
expect(() => {ms932Encoder.encode("\u8E3F")}).to.throw(Error, "EncodingError U+8E3F");
expect(() => {ms932Encoder.encode("\u8E40")}).to.throw(Error, "EncodingError U+8E40");
expect(() => {ms932Encoder.encode("\u8E41")}).to.throw(Error, "EncodingError U+8E41");
r = r && ([...ms932Encoder.encode("蹂")].join(",") === "230,248"); // U+8E42
expect(() => {ms932Encoder.encode("\u8E43")}).to.throw(Error, "EncodingError U+8E43");
r = r && ([...ms932Encoder.encode("蹄")].join(",") === "146,251"); // U+8E44
expect(() => {ms932Encoder.encode("\u8E45")}).to.throw(Error, "EncodingError U+8E45");
expect(() => {ms932Encoder.encode("\u8E46")}).to.throw(Error, "EncodingError U+8E46");
r = r && ([...ms932Encoder.encode("蹇蹈蹉蹊")].join(",") === "231,64,231,68,231,65,230,252"); // U+8E47
expect(() => {ms932Encoder.encode("\u8E4B")}).to.throw(Error, "EncodingError U+8E4B");
r = r && ([...ms932Encoder.encode("蹌")].join(",") === "231,66"); // U+8E4C
expect(() => {ms932Encoder.encode("\u8E4D")}).to.throw(Error, "EncodingError U+8E4D");
expect(() => {ms932Encoder.encode("\u8E4E")}).to.throw(Error, "EncodingError U+8E4E");
expect(() => {ms932Encoder.encode("\u8E4F")}).to.throw(Error, "EncodingError U+8E4F");
r = r && ([...ms932Encoder.encode("蹐")].join(",") === "231,67"); // U+8E50
expect(() => {ms932Encoder.encode("\u8E51")}).to.throw(Error, "EncodingError U+8E51");
expect(() => {ms932Encoder.encode("\u8E52")}).to.throw(Error, "EncodingError U+8E52");
expect(() => {ms932Encoder.encode("\u8E53")}).to.throw(Error, "EncodingError U+8E53");
expect(() => {ms932Encoder.encode("\u8E54")}).to.throw(Error, "EncodingError U+8E54");
r = r && ([...ms932Encoder.encode("蹕")].join(",") === "231,74"); // U+8E55
expect(() => {ms932Encoder.encode("\u8E56")}).to.throw(Error, "EncodingError U+8E56");
expect(() => {ms932Encoder.encode("\u8E57")}).to.throw(Error, "EncodingError U+8E57");
expect(() => {ms932Encoder.encode("\u8E58")}).to.throw(Error, "EncodingError U+8E58");
r = r && ([...ms932Encoder.encode("蹙")].join(",") === "231,69"); // U+8E59
expect(() => {ms932Encoder.encode("\u8E5A")}).to.throw(Error, "EncodingError U+8E5A");
expect(() => {ms932Encoder.encode("\u8E5B")}).to.throw(Error, "EncodingError U+8E5B");
expect(() => {ms932Encoder.encode("\u8E5C")}).to.throw(Error, "EncodingError U+8E5C");
expect(() => {ms932Encoder.encode("\u8E5D")}).to.throw(Error, "EncodingError U+8E5D");
expect(() => {ms932Encoder.encode("\u8E5E")}).to.throw(Error, "EncodingError U+8E5E");
r = r && ([...ms932Encoder.encode("蹟蹠")].join(",") === "144,214,231,71"); // U+8E5F
expect(() => {ms932Encoder.encode("\u8E61")}).to.throw(Error, "EncodingError U+8E61");
expect(() => {ms932Encoder.encode("\u8E62")}).to.throw(Error, "EncodingError U+8E62");
r = r && ([...ms932Encoder.encode("蹣蹤")].join(",") === "231,73,231,70"); // U+8E63
expect(() => {ms932Encoder.encode("\u8E65")}).to.throw(Error, "EncodingError U+8E65");
expect(() => {ms932Encoder.encode("\u8E66")}).to.throw(Error, "EncodingError U+8E66");
expect(() => {ms932Encoder.encode("\u8E67")}).to.throw(Error, "EncodingError U+8E67");
expect(() => {ms932Encoder.encode("\u8E68")}).to.throw(Error, "EncodingError U+8E68");
expect(() => {ms932Encoder.encode("\u8E69")}).to.throw(Error, "EncodingError U+8E69");
expect(() => {ms932Encoder.encode("\u8E6A")}).to.throw(Error, "EncodingError U+8E6A");
expect(() => {ms932Encoder.encode("\u8E6B")}).to.throw(Error, "EncodingError U+8E6B");
expect(() => {ms932Encoder.encode("\u8E6C")}).to.throw(Error, "EncodingError U+8E6C");
expect(() => {ms932Encoder.encode("\u8E6D")}).to.throw(Error, "EncodingError U+8E6D");
expect(() => {ms932Encoder.encode("\u8E6E")}).to.throw(Error, "EncodingError U+8E6E");
expect(() => {ms932Encoder.encode("\u8E6F")}).to.throw(Error, "EncodingError U+8E6F");
expect(() => {ms932Encoder.encode("\u8E70")}).to.throw(Error, "EncodingError U+8E70");
expect(() => {ms932Encoder.encode("\u8E71")}).to.throw(Error, "EncodingError U+8E71");
r = r && ([...ms932Encoder.encode("蹲")].join(",") === "231,76"); // U+8E72
expect(() => {ms932Encoder.encode("\u8E73")}).to.throw(Error, "EncodingError U+8E73");
r = r && ([...ms932Encoder.encode("蹴")].join(",") === "143,82"); // U+8E74
expect(() => {ms932Encoder.encode("\u8E75")}).to.throw(Error, "EncodingError U+8E75");
r = r && ([...ms932Encoder.encode("蹶")].join(",") === "231,75"); // U+8E76
expect(() => {ms932Encoder.encode("\u8E77")}).to.throw(Error, "EncodingError U+8E77");
expect(() => {ms932Encoder.encode("\u8E78")}).to.throw(Error, "EncodingError U+8E78");
expect(() => {ms932Encoder.encode("\u8E79")}).to.throw(Error, "EncodingError U+8E79");
expect(() => {ms932Encoder.encode("\u8E7A")}).to.throw(Error, "EncodingError U+8E7A");
expect(() => {ms932Encoder.encode("\u8E7B")}).to.throw(Error, "EncodingError U+8E7B");
r = r && ([...ms932Encoder.encode("蹼")].join(",") === "231,77"); // U+8E7C
expect(() => {ms932Encoder.encode("\u8E7D")}).to.throw(Error, "EncodingError U+8E7D");
expect(() => {ms932Encoder.encode("\u8E7E")}).to.throw(Error, "EncodingError U+8E7E");
expect(() => {ms932Encoder.encode("\u8E7F")}).to.throw(Error, "EncodingError U+8E7F");
expect(() => {ms932Encoder.encode("\u8E80")}).to.throw(Error, "EncodingError U+8E80");
r = r && ([...ms932Encoder.encode("躁")].join(",") === "231,78"); // U+8E81
expect(() => {ms932Encoder.encode("\u8E82")}).to.throw(Error, "EncodingError U+8E82");
expect(() => {ms932Encoder.encode("\u8E83")}).to.throw(Error, "EncodingError U+8E83");
r = r && ([...ms932Encoder.encode("躄躅")].join(",") === "231,81,231,80"); // U+8E84
expect(() => {ms932Encoder.encode("\u8E86")}).to.throw(Error, "EncodingError U+8E86");
r = r && ([...ms932Encoder.encode("躇")].join(",") === "231,79"); // U+8E87
expect(() => {ms932Encoder.encode("\u8E88")}).to.throw(Error, "EncodingError U+8E88");
expect(() => {ms932Encoder.encode("\u8E89")}).to.throw(Error, "EncodingError U+8E89");
r = r && ([...ms932Encoder.encode("躊躋")].join(",") === "231,83,231,82"); // U+8E8A
expect(() => {ms932Encoder.encode("\u8E8C")}).to.throw(Error, "EncodingError U+8E8C");
r = r && ([...ms932Encoder.encode("躍")].join(",") === "150,244"); // U+8E8D
expect(() => {ms932Encoder.encode("\u8E8E")}).to.throw(Error, "EncodingError U+8E8E");
expect(() => {ms932Encoder.encode("\u8E8F")}).to.throw(Error, "EncodingError U+8E8F");
expect(() => {ms932Encoder.encode("\u8E90")}).to.throw(Error, "EncodingError U+8E90");
r = r && ([...ms932Encoder.encode("躑")].join(",") === "231,85"); // U+8E91
expect(() => {ms932Encoder.encode("\u8E92")}).to.throw(Error, "EncodingError U+8E92");
r = r && ([...ms932Encoder.encode("躓躔")].join(",") === "231,84,231,86"); // U+8E93
expect(() => {ms932Encoder.encode("\u8E95")}).to.throw(Error, "EncodingError U+8E95");
expect(() => {ms932Encoder.encode("\u8E96")}).to.throw(Error, "EncodingError U+8E96");
expect(() => {ms932Encoder.encode("\u8E97")}).to.throw(Error, "EncodingError U+8E97");
expect(() => {ms932Encoder.encode("\u8E98")}).to.throw(Error, "EncodingError U+8E98");
r = r && ([...ms932Encoder.encode("躙")].join(",") === "231,87"); // U+8E99
expect(() => {ms932Encoder.encode("\u8E9A")}).to.throw(Error, "EncodingError U+8E9A");
expect(() => {ms932Encoder.encode("\u8E9B")}).to.throw(Error, "EncodingError U+8E9B");
expect(() => {ms932Encoder.encode("\u8E9C")}).to.throw(Error, "EncodingError U+8E9C");
expect(() => {ms932Encoder.encode("\u8E9D")}).to.throw(Error, "EncodingError U+8E9D");
expect(() => {ms932Encoder.encode("\u8E9E")}).to.throw(Error, "EncodingError U+8E9E");
expect(() => {ms932Encoder.encode("\u8E9F")}).to.throw(Error, "EncodingError U+8E9F");
expect(() => {ms932Encoder.encode("\u8EA0")}).to.throw(Error, "EncodingError U+8EA0");
r = r && ([...ms932Encoder.encode("躡")].join(",") === "231,89"); // U+8EA1
expect(() => {ms932Encoder.encode("\u8EA2")}).to.throw(Error, "EncodingError U+8EA2");
expect(() => {ms932Encoder.encode("\u8EA3")}).to.throw(Error, "EncodingError U+8EA3");
expect(() => {ms932Encoder.encode("\u8EA4")}).to.throw(Error, "EncodingError U+8EA4");
expect(() => {ms932Encoder.encode("\u8EA5")}).to.throw(Error, "EncodingError U+8EA5");
expect(() => {ms932Encoder.encode("\u8EA6")}).to.throw(Error, "EncodingError U+8EA6");
expect(() => {ms932Encoder.encode("\u8EA7")}).to.throw(Error, "EncodingError U+8EA7");
expect(() => {ms932Encoder.encode("\u8EA8")}).to.throw(Error, "EncodingError U+8EA8");
expect(() => {ms932Encoder.encode("\u8EA9")}).to.throw(Error, "EncodingError U+8EA9");
r = r && ([...ms932Encoder.encode("躪身躬")].join(",") === "231,88,144,103,231,90"); // U+8EAA
expect(() => {ms932Encoder.encode("\u8EAD")}).to.throw(Error, "EncodingError U+8EAD");
expect(() => {ms932Encoder.encode("\u8EAE")}).to.throw(Error, "EncodingError U+8EAE");
r = r && ([...ms932Encoder.encode("躯躰躱")].join(",") === "139,235,231,91,231,93"); // U+8EAF
expect(() => {ms932Encoder.encode("\u8EB2")}).to.throw(Error, "EncodingError U+8EB2");
expect(() => {ms932Encoder.encode("\u8EB3")}).to.throw(Error, "EncodingError U+8EB3");
expect(() => {ms932Encoder.encode("\u8EB4")}).to.throw(Error, "EncodingError U+8EB4");
expect(() => {ms932Encoder.encode("\u8EB5")}).to.throw(Error, "EncodingError U+8EB5");
expect(() => {ms932Encoder.encode("\u8EB6")}).to.throw(Error, "EncodingError U+8EB6");
expect(() => {ms932Encoder.encode("\u8EB7")}).to.throw(Error, "EncodingError U+8EB7");
expect(() => {ms932Encoder.encode("\u8EB8")}).to.throw(Error, "EncodingError U+8EB8");
expect(() => {ms932Encoder.encode("\u8EB9")}).to.throw(Error, "EncodingError U+8EB9");
expect(() => {ms932Encoder.encode("\u8EBA")}).to.throw(Error, "EncodingError U+8EBA");
expect(() => {ms932Encoder.encode("\u8EBB")}).to.throw(Error, "EncodingError U+8EBB");
expect(() => {ms932Encoder.encode("\u8EBC")}).to.throw(Error, "EncodingError U+8EBC");
expect(() => {ms932Encoder.encode("\u8EBD")}).to.throw(Error, "EncodingError U+8EBD");
r = r && ([...ms932Encoder.encode("躾")].join(",") === "231,94"); // U+8EBE
expect(() => {ms932Encoder.encode("\u8EBF")}).to.throw(Error, "EncodingError U+8EBF");
expect(() => {ms932Encoder.encode("\u8EC0")}).to.throw(Error, "EncodingError U+8EC0");
expect(() => {ms932Encoder.encode("\u8EC1")}).to.throw(Error, "EncodingError U+8EC1");
expect(() => {ms932Encoder.encode("\u8EC2")}).to.throw(Error, "EncodingError U+8EC2");
expect(() => {ms932Encoder.encode("\u8EC3")}).to.throw(Error, "EncodingError U+8EC3");
expect(() => {ms932Encoder.encode("\u8EC4")}).to.throw(Error, "EncodingError U+8EC4");
r = r && ([...ms932Encoder.encode("軅軆")].join(",") === "231,95,231,92"); // U+8EC5
expect(() => {ms932Encoder.encode("\u8EC7")}).to.throw(Error, "EncodingError U+8EC7");
r = r && ([...ms932Encoder.encode("軈")].join(",") === "231,96"); // U+8EC8
expect(() => {ms932Encoder.encode("\u8EC9")}).to.throw(Error, "EncodingError U+8EC9");
r = r && ([...ms932Encoder.encode("車軋軌軍")].join(",") === "142,212,231,97,139,79,140,82"); // U+8ECA
expect(() => {ms932Encoder.encode("\u8ECE")}).to.throw(Error, "EncodingError U+8ECE");
r = r && ([...ms932Encoder.encode("軏")].join(",") === "251,178"); // U+8ECF
expect(() => {ms932Encoder.encode("\u8ED0")}).to.throw(Error, "EncodingError U+8ED0");
expect(() => {ms932Encoder.encode("\u8ED1")}).to.throw(Error, "EncodingError U+8ED1");
r = r && ([...ms932Encoder.encode("軒")].join(",") === "140,172"); // U+8ED2
expect(() => {ms932Encoder.encode("\u8ED3")}).to.throw(Error, "EncodingError U+8ED3");
expect(() => {ms932Encoder.encode("\u8ED4")}).to.throw(Error, "EncodingError U+8ED4");
expect(() => {ms932Encoder.encode("\u8ED5")}).to.throw(Error, "EncodingError U+8ED5");
expect(() => {ms932Encoder.encode("\u8ED6")}).to.throw(Error, "EncodingError U+8ED6");
expect(() => {ms932Encoder.encode("\u8ED7")}).to.throw(Error, "EncodingError U+8ED7");
expect(() => {ms932Encoder.encode("\u8ED8")}).to.throw(Error, "EncodingError U+8ED8");
expect(() => {ms932Encoder.encode("\u8ED9")}).to.throw(Error, "EncodingError U+8ED9");
expect(() => {ms932Encoder.encode("\u8EDA")}).to.throw(Error, "EncodingError U+8EDA");
r = r && ([...ms932Encoder.encode("軛")].join(",") === "231,98"); // U+8EDB
expect(() => {ms932Encoder.encode("\u8EDC")}).to.throw(Error, "EncodingError U+8EDC");
expect(() => {ms932Encoder.encode("\u8EDD")}).to.throw(Error, "EncodingError U+8EDD");
expect(() => {ms932Encoder.encode("\u8EDE")}).to.throw(Error, "EncodingError U+8EDE");
r = r && ([...ms932Encoder.encode("軟")].join(",") === "147,238"); // U+8EDF
expect(() => {ms932Encoder.encode("\u8EE0")}).to.throw(Error, "EncodingError U+8EE0");
expect(() => {ms932Encoder.encode("\u8EE1")}).to.throw(Error, "EncodingError U+8EE1");
r = r && ([...ms932Encoder.encode("転軣")].join(",") === "147,93,231,99"); // U+8EE2
expect(() => {ms932Encoder.encode("\u8EE4")}).to.throw(Error, "EncodingError U+8EE4");
expect(() => {ms932Encoder.encode("\u8EE5")}).to.throw(Error, "EncodingError U+8EE5");
expect(() => {ms932Encoder.encode("\u8EE6")}).to.throw(Error, "EncodingError U+8EE6");
expect(() => {ms932Encoder.encode("\u8EE7")}).to.throw(Error, "EncodingError U+8EE7");
expect(() => {ms932Encoder.encode("\u8EE8")}).to.throw(Error, "EncodingError U+8EE8");
expect(() => {ms932Encoder.encode("\u8EE9")}).to.throw(Error, "EncodingError U+8EE9");
expect(() => {ms932Encoder.encode("\u8EEA")}).to.throw(Error, "EncodingError U+8EEA");
r = r && ([...ms932Encoder.encode("軫")].join(",") === "231,102"); // U+8EEB
expect(() => {ms932Encoder.encode("\u8EEC")}).to.throw(Error, "EncodingError U+8EEC");
expect(() => {ms932Encoder.encode("\u8EED")}).to.throw(Error, "EncodingError U+8EED");
expect(() => {ms932Encoder.encode("\u8EEE")}).to.throw(Error, "EncodingError U+8EEE");
expect(() => {ms932Encoder.encode("\u8EEF")}).to.throw(Error, "EncodingError U+8EEF");
expect(() => {ms932Encoder.encode("\u8EF0")}).to.throw(Error, "EncodingError U+8EF0");
expect(() => {ms932Encoder.encode("\u8EF1")}).to.throw(Error, "EncodingError U+8EF1");
expect(() => {ms932Encoder.encode("\u8EF2")}).to.throw(Error, "EncodingError U+8EF2");
expect(() => {ms932Encoder.encode("\u8EF3")}).to.throw(Error, "EncodingError U+8EF3");
expect(() => {ms932Encoder.encode("\u8EF4")}).to.throw(Error, "EncodingError U+8EF4");
expect(() => {ms932Encoder.encode("\u8EF5")}).to.throw(Error, "EncodingError U+8EF5");
expect(() => {ms932Encoder.encode("\u8EF6")}).to.throw(Error, "EncodingError U+8EF6");
expect(() => {ms932Encoder.encode("\u8EF7")}).to.throw(Error, "EncodingError U+8EF7");
r = r && ([...ms932Encoder.encode("軸")].join(",") === "142,178"); // U+8EF8
expect(() => {ms932Encoder.encode("\u8EF9")}).to.throw(Error, "EncodingError U+8EF9");
expect(() => {ms932Encoder.encode("\u8EFA")}).to.throw(Error, "EncodingError U+8EFA");
r = r && ([...ms932Encoder.encode("軻軼軽軾")].join(",") === "231,101,231,100,140,121,231,103"); // U+8EFB
expect(() => {ms932Encoder.encode("\u8EFF")}).to.throw(Error, "EncodingError U+8EFF");
expect(() => {ms932Encoder.encode("\u8F00")}).to.throw(Error, "EncodingError U+8F00");
expect(() => {ms932Encoder.encode("\u8F01")}).to.throw(Error, "EncodingError U+8F01");
expect(() => {ms932Encoder.encode("\u8F02")}).to.throw(Error, "EncodingError U+8F02");
r = r && ([...ms932Encoder.encode("較")].join(",") === "138,114"); // U+8F03
expect(() => {ms932Encoder.encode("\u8F04")}).to.throw(Error, "EncodingError U+8F04");
r = r && ([...ms932Encoder.encode("輅")].join(",") === "231,105"); // U+8F05
expect(() => {ms932Encoder.encode("\u8F06")}).to.throw(Error, "EncodingError U+8F06");
expect(() => {ms932Encoder.encode("\u8F07")}).to.throw(Error, "EncodingError U+8F07");
expect(() => {ms932Encoder.encode("\u8F08")}).to.throw(Error, "EncodingError U+8F08");
r = r && ([...ms932Encoder.encode("載輊")].join(",") === "141,218,231,104"); // U+8F09
expect(() => {ms932Encoder.encode("\u8F0B")}).to.throw(Error, "EncodingError U+8F0B");
r = r && ([...ms932Encoder.encode("輌")].join(",") === "231,113"); // U+8F0C
expect(() => {ms932Encoder.encode("\u8F0D")}).to.throw(Error, "EncodingError U+8F0D");
expect(() => {ms932Encoder.encode("\u8F0E")}).to.throw(Error, "EncodingError U+8F0E");
expect(() => {ms932Encoder.encode("\u8F0F")}).to.throw(Error, "EncodingError U+8F0F");
expect(() => {ms932Encoder.encode("\u8F10")}).to.throw(Error, "EncodingError U+8F10");
expect(() => {ms932Encoder.encode("\u8F11")}).to.throw(Error, "EncodingError U+8F11");
r = r && ([...ms932Encoder.encode("輒輓輔輕")].join(",") === "231,107,231,109,149,227,231,106"); // U+8F12
expect(() => {ms932Encoder.encode("\u8F16")}).to.throw(Error, "EncodingError U+8F16");
expect(() => {ms932Encoder.encode("\u8F17")}).to.throw(Error, "EncodingError U+8F17");
expect(() => {ms932Encoder.encode("\u8F18")}).to.throw(Error, "EncodingError U+8F18");
r = r && ([...ms932Encoder.encode("輙")].join(",") === "231,108"); // U+8F19
expect(() => {ms932Encoder.encode("\u8F1A")}).to.throw(Error, "EncodingError U+8F1A");
r = r && ([...ms932Encoder.encode("輛輜輝")].join(",") === "231,112,231,110,139,80"); // U+8F1B
expect(() => {ms932Encoder.encode("\u8F1E")}).to.throw(Error, "EncodingError U+8F1E");
r = r && ([...ms932Encoder.encode("輟")].join(",") === "231,111"); // U+8F1F
expect(() => {ms932Encoder.encode("\u8F20")}).to.throw(Error, "EncodingError U+8F20");
expect(() => {ms932Encoder.encode("\u8F21")}).to.throw(Error, "EncodingError U+8F21");
expect(() => {ms932Encoder.encode("\u8F22")}).to.throw(Error, "EncodingError U+8F22");
expect(() => {ms932Encoder.encode("\u8F23")}).to.throw(Error, "EncodingError U+8F23");
expect(() => {ms932Encoder.encode("\u8F24")}).to.throw(Error, "EncodingError U+8F24");
expect(() => {ms932Encoder.encode("\u8F25")}).to.throw(Error, "EncodingError U+8F25");
r = r && ([...ms932Encoder.encode("輦")].join(",") === "231,114"); // U+8F26
expect(() => {ms932Encoder.encode("\u8F27")}).to.throw(Error, "EncodingError U+8F27");
expect(() => {ms932Encoder.encode("\u8F28")}).to.throw(Error, "EncodingError U+8F28");
r = r && ([...ms932Encoder.encode("輩輪")].join(",") === "148,121,151,214"); // U+8F29
expect(() => {ms932Encoder.encode("\u8F2B")}).to.throw(Error, "EncodingError U+8F2B");
expect(() => {ms932Encoder.encode("\u8F2C")}).to.throw(Error, "EncodingError U+8F2C");
expect(() => {ms932Encoder.encode("\u8F2D")}).to.throw(Error, "EncodingError U+8F2D");
expect(() => {ms932Encoder.encode("\u8F2E")}).to.throw(Error, "EncodingError U+8F2E");
r = r && ([...ms932Encoder.encode("輯")].join(",") === "143,83"); // U+8F2F
expect(() => {ms932Encoder.encode("\u8F30")}).to.throw(Error, "EncodingError U+8F30");
expect(() => {ms932Encoder.encode("\u8F31")}).to.throw(Error, "EncodingError U+8F31");
expect(() => {ms932Encoder.encode("\u8F32")}).to.throw(Error, "EncodingError U+8F32");
r = r && ([...ms932Encoder.encode("輳")].join(",") === "231,115"); // U+8F33
expect(() => {ms932Encoder.encode("\u8F34")}).to.throw(Error, "EncodingError U+8F34");
expect(() => {ms932Encoder.encode("\u8F35")}).to.throw(Error, "EncodingError U+8F35");
expect(() => {ms932Encoder.encode("\u8F36")}).to.throw(Error, "EncodingError U+8F36");
expect(() => {ms932Encoder.encode("\u8F37")}).to.throw(Error, "EncodingError U+8F37");
r = r && ([...ms932Encoder.encode("輸輹")].join(",") === "151,65,231,117"); // U+8F38
expect(() => {ms932Encoder.encode("\u8F3A")}).to.throw(Error, "EncodingError U+8F3A");
r = r && ([...ms932Encoder.encode("輻")].join(",") === "231,116"); // U+8F3B
expect(() => {ms932Encoder.encode("\u8F3C")}).to.throw(Error, "EncodingError U+8F3C");
expect(() => {ms932Encoder.encode("\u8F3D")}).to.throw(Error, "EncodingError U+8F3D");
r = r && ([...ms932Encoder.encode("輾輿")].join(",") === "231,120,151,96"); // U+8F3E
expect(() => {ms932Encoder.encode("\u8F40")}).to.throw(Error, "EncodingError U+8F40");
expect(() => {ms932Encoder.encode("\u8F41")}).to.throw(Error, "EncodingError U+8F41");
r = r && ([...ms932Encoder.encode("轂")].join(",") === "231,119"); // U+8F42
expect(() => {ms932Encoder.encode("\u8F43")}).to.throw(Error, "EncodingError U+8F43");
r = r && ([...ms932Encoder.encode("轄轅轆")].join(",") === "138,141,231,118,231,123"); // U+8F44
expect(() => {ms932Encoder.encode("\u8F47")}).to.throw(Error, "EncodingError U+8F47");
expect(() => {ms932Encoder.encode("\u8F48")}).to.throw(Error, "EncodingError U+8F48");
r = r && ([...ms932Encoder.encode("轉")].join(",") === "231,122"); // U+8F49
expect(() => {ms932Encoder.encode("\u8F4A")}).to.throw(Error, "EncodingError U+8F4A");
expect(() => {ms932Encoder.encode("\u8F4B")}).to.throw(Error, "EncodingError U+8F4B");
r = r && ([...ms932Encoder.encode("轌轍轎")].join(",") === "231,121,147,81,231,124"); // U+8F4C
expect(() => {ms932Encoder.encode("\u8F4F")}).to.throw(Error, "EncodingError U+8F4F");
expect(() => {ms932Encoder.encode("\u8F50")}).to.throw(Error, "EncodingError U+8F50");
expect(() => {ms932Encoder.encode("\u8F51")}).to.throw(Error, "EncodingError U+8F51");
expect(() => {ms932Encoder.encode("\u8F52")}).to.throw(Error, "EncodingError U+8F52");
expect(() => {ms932Encoder.encode("\u8F53")}).to.throw(Error, "EncodingError U+8F53");
expect(() => {ms932Encoder.encode("\u8F54")}).to.throw(Error, "EncodingError U+8F54");
expect(() => {ms932Encoder.encode("\u8F55")}).to.throw(Error, "EncodingError U+8F55");
expect(() => {ms932Encoder.encode("\u8F56")}).to.throw(Error, "EncodingError U+8F56");
r = r && ([...ms932Encoder.encode("轗")].join(",") === "231,125"); // U+8F57
expect(() => {ms932Encoder.encode("\u8F58")}).to.throw(Error, "EncodingError U+8F58");
expect(() => {ms932Encoder.encode("\u8F59")}).to.throw(Error, "EncodingError U+8F59");
expect(() => {ms932Encoder.encode("\u8F5A")}).to.throw(Error, "EncodingError U+8F5A");
expect(() => {ms932Encoder.encode("\u8F5B")}).to.throw(Error, "EncodingError U+8F5B");
r = r && ([...ms932Encoder.encode("轜")].join(",") === "231,126"); // U+8F5C
expect(() => {ms932Encoder.encode("\u8F5D")}).to.throw(Error, "EncodingError U+8F5D");
expect(() => {ms932Encoder.encode("\u8F5E")}).to.throw(Error, "EncodingError U+8F5E");
r = r && ([...ms932Encoder.encode("轟")].join(",") === "141,140"); // U+8F5F
expect(() => {ms932Encoder.encode("\u8F60")}).to.throw(Error, "EncodingError U+8F60");
r = r && ([...ms932Encoder.encode("轡轢轣轤")].join(",") === "140,68,231,128,231,129,231,130"); // U+8F61
expect(() => {ms932Encoder.encode("\u8F65")}).to.throw(Error, "EncodingError U+8F65");
expect(() => {ms932Encoder.encode("\u8F66")}).to.throw(Error, "EncodingError U+8F66");
expect(() => {ms932Encoder.encode("\u8F67")}).to.throw(Error, "EncodingError U+8F67");
expect(() => {ms932Encoder.encode("\u8F68")}).to.throw(Error, "EncodingError U+8F68");
expect(() => {ms932Encoder.encode("\u8F69")}).to.throw(Error, "EncodingError U+8F69");
expect(() => {ms932Encoder.encode("\u8F6A")}).to.throw(Error, "EncodingError U+8F6A");
expect(() => {ms932Encoder.encode("\u8F6B")}).to.throw(Error, "EncodingError U+8F6B");
expect(() => {ms932Encoder.encode("\u8F6C")}).to.throw(Error, "EncodingError U+8F6C");
expect(() => {ms932Encoder.encode("\u8F6D")}).to.throw(Error, "EncodingError U+8F6D");
expect(() => {ms932Encoder.encode("\u8F6E")}).to.throw(Error, "EncodingError U+8F6E");
expect(() => {ms932Encoder.encode("\u8F6F")}).to.throw(Error, "EncodingError U+8F6F");
expect(() => {ms932Encoder.encode("\u8F70")}).to.throw(Error, "EncodingError U+8F70");
expect(() => {ms932Encoder.encode("\u8F71")}).to.throw(Error, "EncodingError U+8F71");
expect(() => {ms932Encoder.encode("\u8F72")}).to.throw(Error, "EncodingError U+8F72");
expect(() => {ms932Encoder.encode("\u8F73")}).to.throw(Error, "EncodingError U+8F73");
expect(() => {ms932Encoder.encode("\u8F74")}).to.throw(Error, "EncodingError U+8F74");
expect(() => {ms932Encoder.encode("\u8F75")}).to.throw(Error, "EncodingError U+8F75");
expect(() => {ms932Encoder.encode("\u8F76")}).to.throw(Error, "EncodingError U+8F76");
expect(() => {ms932Encoder.encode("\u8F77")}).to.throw(Error, "EncodingError U+8F77");
expect(() => {ms932Encoder.encode("\u8F78")}).to.throw(Error, "EncodingError U+8F78");
expect(() => {ms932Encoder.encode("\u8F79")}).to.throw(Error, "EncodingError U+8F79");
expect(() => {ms932Encoder.encode("\u8F7A")}).to.throw(Error, "EncodingError U+8F7A");
expect(() => {ms932Encoder.encode("\u8F7B")}).to.throw(Error, "EncodingError U+8F7B");
expect(() => {ms932Encoder.encode("\u8F7C")}).to.throw(Error, "EncodingError U+8F7C");
expect(() => {ms932Encoder.encode("\u8F7D")}).to.throw(Error, "EncodingError U+8F7D");
expect(() => {ms932Encoder.encode("\u8F7E")}).to.throw(Error, "EncodingError U+8F7E");
expect(() => {ms932Encoder.encode("\u8F7F")}).to.throw(Error, "EncodingError U+8F7F");
expect(() => {ms932Encoder.encode("\u8F80")}).to.throw(Error, "EncodingError U+8F80");
expect(() => {ms932Encoder.encode("\u8F81")}).to.throw(Error, "EncodingError U+8F81");
expect(() => {ms932Encoder.encode("\u8F82")}).to.throw(Error, "EncodingError U+8F82");
expect(() => {ms932Encoder.encode("\u8F83")}).to.throw(Error, "EncodingError U+8F83");
expect(() => {ms932Encoder.encode("\u8F84")}).to.throw(Error, "EncodingError U+8F84");
expect(() => {ms932Encoder.encode("\u8F85")}).to.throw(Error, "EncodingError U+8F85");
expect(() => {ms932Encoder.encode("\u8F86")}).to.throw(Error, "EncodingError U+8F86");
expect(() => {ms932Encoder.encode("\u8F87")}).to.throw(Error, "EncodingError U+8F87");
expect(() => {ms932Encoder.encode("\u8F88")}).to.throw(Error, "EncodingError U+8F88");
expect(() => {ms932Encoder.encode("\u8F89")}).to.throw(Error, "EncodingError U+8F89");
expect(() => {ms932Encoder.encode("\u8F8A")}).to.throw(Error, "EncodingError U+8F8A");
expect(() => {ms932Encoder.encode("\u8F8B")}).to.throw(Error, "EncodingError U+8F8B");
expect(() => {ms932Encoder.encode("\u8F8C")}).to.throw(Error, "EncodingError U+8F8C");
expect(() => {ms932Encoder.encode("\u8F8D")}).to.throw(Error, "EncodingError U+8F8D");
expect(() => {ms932Encoder.encode("\u8F8E")}).to.throw(Error, "EncodingError U+8F8E");
expect(() => {ms932Encoder.encode("\u8F8F")}).to.throw(Error, "EncodingError U+8F8F");
expect(() => {ms932Encoder.encode("\u8F90")}).to.throw(Error, "EncodingError U+8F90");
expect(() => {ms932Encoder.encode("\u8F91")}).to.throw(Error, "EncodingError U+8F91");
expect(() => {ms932Encoder.encode("\u8F92")}).to.throw(Error, "EncodingError U+8F92");
expect(() => {ms932Encoder.encode("\u8F93")}).to.throw(Error, "EncodingError U+8F93");
expect(() => {ms932Encoder.encode("\u8F94")}).to.throw(Error, "EncodingError U+8F94");
expect(() => {ms932Encoder.encode("\u8F95")}).to.throw(Error, "EncodingError U+8F95");
expect(() => {ms932Encoder.encode("\u8F96")}).to.throw(Error, "EncodingError U+8F96");
expect(() => {ms932Encoder.encode("\u8F97")}).to.throw(Error, "EncodingError U+8F97");
expect(() => {ms932Encoder.encode("\u8F98")}).to.throw(Error, "EncodingError U+8F98");
expect(() => {ms932Encoder.encode("\u8F99")}).to.throw(Error, "EncodingError U+8F99");
expect(() => {ms932Encoder.encode("\u8F9A")}).to.throw(Error, "EncodingError U+8F9A");
r = r && ([...ms932Encoder.encode("辛辜")].join(",") === "144,104,231,131"); // U+8F9B
expect(() => {ms932Encoder.encode("\u8F9D")}).to.throw(Error, "EncodingError U+8F9D");
r = r && ([...ms932Encoder.encode("辞辟")].join(",") === "142,171,231,132"); // U+8F9E
expect(() => {ms932Encoder.encode("\u8FA0")}).to.throw(Error, "EncodingError U+8FA0");
expect(() => {ms932Encoder.encode("\u8FA1")}).to.throw(Error, "EncodingError U+8FA1");
expect(() => {ms932Encoder.encode("\u8FA2")}).to.throw(Error, "EncodingError U+8FA2");
r = r && ([...ms932Encoder.encode("辣")].join(",") === "231,133"); // U+8FA3
expect(() => {ms932Encoder.encode("\u8FA4")}).to.throw(Error, "EncodingError U+8FA4");
expect(() => {ms932Encoder.encode("\u8FA5")}).to.throw(Error, "EncodingError U+8FA5");
expect(() => {ms932Encoder.encode("\u8FA6")}).to.throw(Error, "EncodingError U+8FA6");
r = r && ([...ms932Encoder.encode("辧辨")].join(",") === "153,159,153,158"); // U+8FA7
expect(() => {ms932Encoder.encode("\u8FA9")}).to.throw(Error, "EncodingError U+8FA9");
expect(() => {ms932Encoder.encode("\u8FAA")}).to.throw(Error, "EncodingError U+8FAA");
expect(() => {ms932Encoder.encode("\u8FAB")}).to.throw(Error, "EncodingError U+8FAB");
expect(() => {ms932Encoder.encode("\u8FAC")}).to.throw(Error, "EncodingError U+8FAC");
r = r && ([...ms932Encoder.encode("辭辮辯辰辱農")].join(",") === "231,134,227,144,231,135,146,67,144,74,148,95"); // U+8FAD
expect(() => {ms932Encoder.encode("\u8FB3")}).to.throw(Error, "EncodingError U+8FB3");
expect(() => {ms932Encoder.encode("\u8FB4")}).to.throw(Error, "EncodingError U+8FB4");
expect(() => {ms932Encoder.encode("\u8FB5")}).to.throw(Error, "EncodingError U+8FB5");
expect(() => {ms932Encoder.encode("\u8FB6")}).to.throw(Error, "EncodingError U+8FB6");
r = r && ([...ms932Encoder.encode("辷")].join(",") === "231,136"); // U+8FB7
expect(() => {ms932Encoder.encode("\u8FB8")}).to.throw(Error, "EncodingError U+8FB8");
expect(() => {ms932Encoder.encode("\u8FB9")}).to.throw(Error, "EncodingError U+8FB9");
r = r && ([...ms932Encoder.encode("辺辻込")].join(",") === "149,211,146,210,141,158"); // U+8FBA
expect(() => {ms932Encoder.encode("\u8FBD")}).to.throw(Error, "EncodingError U+8FBD");
expect(() => {ms932Encoder.encode("\u8FBE")}).to.throw(Error, "EncodingError U+8FBE");
r = r && ([...ms932Encoder.encode("辿")].join(",") === "146,72"); // U+8FBF
expect(() => {ms932Encoder.encode("\u8FC0")}).to.throw(Error, "EncodingError U+8FC0");
expect(() => {ms932Encoder.encode("\u8FC1")}).to.throw(Error, "EncodingError U+8FC1");
r = r && ([...ms932Encoder.encode("迂")].join(",") === "137,73"); // U+8FC2
expect(() => {ms932Encoder.encode("\u8FC3")}).to.throw(Error, "EncodingError U+8FC3");
r = r && ([...ms932Encoder.encode("迄迅")].join(",") === "150,152,144,118"); // U+8FC4
expect(() => {ms932Encoder.encode("\u8FC6")}).to.throw(Error, "EncodingError U+8FC6");
expect(() => {ms932Encoder.encode("\u8FC7")}).to.throw(Error, "EncodingError U+8FC7");
expect(() => {ms932Encoder.encode("\u8FC8")}).to.throw(Error, "EncodingError U+8FC8");
expect(() => {ms932Encoder.encode("\u8FC9")}).to.throw(Error, "EncodingError U+8FC9");
expect(() => {ms932Encoder.encode("\u8FCA")}).to.throw(Error, "EncodingError U+8FCA");
expect(() => {ms932Encoder.encode("\u8FCB")}).to.throw(Error, "EncodingError U+8FCB");
expect(() => {ms932Encoder.encode("\u8FCC")}).to.throw(Error, "EncodingError U+8FCC");
expect(() => {ms932Encoder.encode("\u8FCD")}).to.throw(Error, "EncodingError U+8FCD");
r = r && ([...ms932Encoder.encode("迎")].join(",") === "140,125"); // U+8FCE
expect(() => {ms932Encoder.encode("\u8FCF")}).to.throw(Error, "EncodingError U+8FCF");
expect(() => {ms932Encoder.encode("\u8FD0")}).to.throw(Error, "EncodingError U+8FD0");
r = r && ([...ms932Encoder.encode("近")].join(",") === "139,223"); // U+8FD1
expect(() => {ms932Encoder.encode("\u8FD2")}).to.throw(Error, "EncodingError U+8FD2");
expect(() => {ms932Encoder.encode("\u8FD3")}).to.throw(Error, "EncodingError U+8FD3");
r = r && ([...ms932Encoder.encode("返")].join(",") === "149,212"); // U+8FD4
expect(() => {ms932Encoder.encode("\u8FD5")}).to.throw(Error, "EncodingError U+8FD5");
expect(() => {ms932Encoder.encode("\u8FD6")}).to.throw(Error, "EncodingError U+8FD6");
expect(() => {ms932Encoder.encode("\u8FD7")}).to.throw(Error, "EncodingError U+8FD7");
expect(() => {ms932Encoder.encode("\u8FD8")}).to.throw(Error, "EncodingError U+8FD8");
expect(() => {ms932Encoder.encode("\u8FD9")}).to.throw(Error, "EncodingError U+8FD9");
r = r && ([...ms932Encoder.encode("迚")].join(",") === "231,137"); // U+8FDA
expect(() => {ms932Encoder.encode("\u8FDB")}).to.throw(Error, "EncodingError U+8FDB");
expect(() => {ms932Encoder.encode("\u8FDC")}).to.throw(Error, "EncodingError U+8FDC");
expect(() => {ms932Encoder.encode("\u8FDD")}).to.throw(Error, "EncodingError U+8FDD");
expect(() => {ms932Encoder.encode("\u8FDE")}).to.throw(Error, "EncodingError U+8FDE");
expect(() => {ms932Encoder.encode("\u8FDF")}).to.throw(Error, "EncodingError U+8FDF");
expect(() => {ms932Encoder.encode("\u8FE0")}).to.throw(Error, "EncodingError U+8FE0");
expect(() => {ms932Encoder.encode("\u8FE1")}).to.throw(Error, "EncodingError U+8FE1");
r = r && ([...ms932Encoder.encode("迢")].join(",") === "231,139"); // U+8FE2
expect(() => {ms932Encoder.encode("\u8FE3")}).to.throw(Error, "EncodingError U+8FE3");
expect(() => {ms932Encoder.encode("\u8FE4")}).to.throw(Error, "EncodingError U+8FE4");
r = r && ([...ms932Encoder.encode("迥迦")].join(",") === "231,138,137,222"); // U+8FE5
expect(() => {ms932Encoder.encode("\u8FE7")}).to.throw(Error, "EncodingError U+8FE7");
expect(() => {ms932Encoder.encode("\u8FE8")}).to.throw(Error, "EncodingError U+8FE8");
r = r && ([...ms932Encoder.encode("迩迪迫")].join(",") === "147,244,231,140,148,151"); // U+8FE9
expect(() => {ms932Encoder.encode("\u8FEC")}).to.throw(Error, "EncodingError U+8FEC");
r = r && ([...ms932Encoder.encode("迭")].join(",") === "147,82"); // U+8FED
expect(() => {ms932Encoder.encode("\u8FEE")}).to.throw(Error, "EncodingError U+8FEE");
r = r && ([...ms932Encoder.encode("迯述")].join(",") === "231,141,143,113"); // U+8FEF
expect(() => {ms932Encoder.encode("\u8FF1")}).to.throw(Error, "EncodingError U+8FF1");
expect(() => {ms932Encoder.encode("\u8FF2")}).to.throw(Error, "EncodingError U+8FF2");
expect(() => {ms932Encoder.encode("\u8FF3")}).to.throw(Error, "EncodingError U+8FF3");
r = r && ([...ms932Encoder.encode("迴")].join(",") === "231,143"); // U+8FF4
expect(() => {ms932Encoder.encode("\u8FF5")}).to.throw(Error, "EncodingError U+8FF5");
expect(() => {ms932Encoder.encode("\u8FF6")}).to.throw(Error, "EncodingError U+8FF6");
r = r && ([...ms932Encoder.encode("迷迸迹迺")].join(",") === "150,192,231,158,231,145,231,146"); // U+8FF7
expect(() => {ms932Encoder.encode("\u8FFB")}).to.throw(Error, "EncodingError U+8FFB");
expect(() => {ms932Encoder.encode("\u8FFC")}).to.throw(Error, "EncodingError U+8FFC");
r = r && ([...ms932Encoder.encode("追")].join(",") === "146,199"); // U+8FFD
expect(() => {ms932Encoder.encode("\u8FFE")}).to.throw(Error, "EncodingError U+8FFE");
expect(() => {ms932Encoder.encode("\u8FFF")}).to.throw(Error, "EncodingError U+8FFF");

expect(r).to.equal(true);

  });

});
