import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "../../dist/index.js";

describe("Ms932Encoder.prototype.encode 10", () => {

  it("encode(string) - U+9C00-U+9FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
r = r && ([...ms932Encoder.encode("鰀")].join(",") === "252,70"); // U+9C00
expect(() => {ms932Encoder.encode("\u9C01")}).to.throw(Error, "EncodingError U+9C01");
expect(() => {ms932Encoder.encode("\u9C02")}).to.throw(Error, "EncodingError U+9C02");
expect(() => {ms932Encoder.encode("\u9C03")}).to.throw(Error, "EncodingError U+9C03");
r = r && ([...ms932Encoder.encode("鰄")].join(",") === "233,216"); // U+9C04
expect(() => {ms932Encoder.encode("\u9C05")}).to.throw(Error, "EncodingError U+9C05");
r = r && ([...ms932Encoder.encode("鰆")].join(",") === "233,212"); // U+9C06
expect(() => {ms932Encoder.encode("\u9C07")}).to.throw(Error, "EncodingError U+9C07");
r = r && ([...ms932Encoder.encode("鰈鰉鰊")].join(",") === "233,213,233,209,233,215"); // U+9C08
expect(() => {ms932Encoder.encode("\u9C0B")}).to.throw(Error, "EncodingError U+9C0B");
r = r && ([...ms932Encoder.encode("鰌鰍")].join(",") === "233,211,138,130"); // U+9C0C
expect(() => {ms932Encoder.encode("\u9C0E")}).to.throw(Error, "EncodingError U+9C0E");
expect(() => {ms932Encoder.encode("\u9C0F")}).to.throw(Error, "EncodingError U+9C0F");
r = r && ([...ms932Encoder.encode("鰐")].join(",") === "152,107"); // U+9C10
expect(() => {ms932Encoder.encode("\u9C11")}).to.throw(Error, "EncodingError U+9C11");
r = r && ([...ms932Encoder.encode("鰒鰓鰔鰕")].join(",") === "233,214,233,210,233,208,233,207"); // U+9C12
expect(() => {ms932Encoder.encode("\u9C16")}).to.throw(Error, "EncodingError U+9C16");
expect(() => {ms932Encoder.encode("\u9C17")}).to.throw(Error, "EncodingError U+9C17");
expect(() => {ms932Encoder.encode("\u9C18")}).to.throw(Error, "EncodingError U+9C18");
expect(() => {ms932Encoder.encode("\u9C19")}).to.throw(Error, "EncodingError U+9C19");
expect(() => {ms932Encoder.encode("\u9C1A")}).to.throw(Error, "EncodingError U+9C1A");
r = r && ([...ms932Encoder.encode("鰛")].join(",") === "233,218"); // U+9C1B
expect(() => {ms932Encoder.encode("\u9C1C")}).to.throw(Error, "EncodingError U+9C1C");
expect(() => {ms932Encoder.encode("\u9C1D")}).to.throw(Error, "EncodingError U+9C1D");
expect(() => {ms932Encoder.encode("\u9C1E")}).to.throw(Error, "EncodingError U+9C1E");
expect(() => {ms932Encoder.encode("\u9C1F")}).to.throw(Error, "EncodingError U+9C1F");
expect(() => {ms932Encoder.encode("\u9C20")}).to.throw(Error, "EncodingError U+9C20");
r = r && ([...ms932Encoder.encode("鰡")].join(",") === "233,221"); // U+9C21
expect(() => {ms932Encoder.encode("\u9C22")}).to.throw(Error, "EncodingError U+9C22");
expect(() => {ms932Encoder.encode("\u9C23")}).to.throw(Error, "EncodingError U+9C23");
r = r && ([...ms932Encoder.encode("鰤鰥")].join(",") === "233,220,233,219"); // U+9C24
expect(() => {ms932Encoder.encode("\u9C26")}).to.throw(Error, "EncodingError U+9C26");
expect(() => {ms932Encoder.encode("\u9C27")}).to.throw(Error, "EncodingError U+9C27");
expect(() => {ms932Encoder.encode("\u9C28")}).to.throw(Error, "EncodingError U+9C28");
expect(() => {ms932Encoder.encode("\u9C29")}).to.throw(Error, "EncodingError U+9C29");
expect(() => {ms932Encoder.encode("\u9C2A")}).to.throw(Error, "EncodingError U+9C2A");
expect(() => {ms932Encoder.encode("\u9C2B")}).to.throw(Error, "EncodingError U+9C2B");
expect(() => {ms932Encoder.encode("\u9C2C")}).to.throw(Error, "EncodingError U+9C2C");
r = r && ([...ms932Encoder.encode("鰭鰮鰯鰰")].join(",") === "149,104,233,217,136,241,233,222"); // U+9C2D
expect(() => {ms932Encoder.encode("\u9C31")}).to.throw(Error, "EncodingError U+9C31");
r = r && ([...ms932Encoder.encode("鰲")].join(",") === "233,224"); // U+9C32
expect(() => {ms932Encoder.encode("\u9C33")}).to.throw(Error, "EncodingError U+9C33");
expect(() => {ms932Encoder.encode("\u9C34")}).to.throw(Error, "EncodingError U+9C34");
expect(() => {ms932Encoder.encode("\u9C35")}).to.throw(Error, "EncodingError U+9C35");
expect(() => {ms932Encoder.encode("\u9C36")}).to.throw(Error, "EncodingError U+9C36");
expect(() => {ms932Encoder.encode("\u9C37")}).to.throw(Error, "EncodingError U+9C37");
expect(() => {ms932Encoder.encode("\u9C38")}).to.throw(Error, "EncodingError U+9C38");
r = r && ([...ms932Encoder.encode("鰹鰺鰻")].join(",") === "138,143,233,203,137,86"); // U+9C39
expect(() => {ms932Encoder.encode("\u9C3C")}).to.throw(Error, "EncodingError U+9C3C");
expect(() => {ms932Encoder.encode("\u9C3D")}).to.throw(Error, "EncodingError U+9C3D");
r = r && ([...ms932Encoder.encode("鰾")].join(",") === "233,226"); // U+9C3E
expect(() => {ms932Encoder.encode("\u9C3F")}).to.throw(Error, "EncodingError U+9C3F");
expect(() => {ms932Encoder.encode("\u9C40")}).to.throw(Error, "EncodingError U+9C40");
expect(() => {ms932Encoder.encode("\u9C41")}).to.throw(Error, "EncodingError U+9C41");
expect(() => {ms932Encoder.encode("\u9C42")}).to.throw(Error, "EncodingError U+9C42");
expect(() => {ms932Encoder.encode("\u9C43")}).to.throw(Error, "EncodingError U+9C43");
expect(() => {ms932Encoder.encode("\u9C44")}).to.throw(Error, "EncodingError U+9C44");
expect(() => {ms932Encoder.encode("\u9C45")}).to.throw(Error, "EncodingError U+9C45");
r = r && ([...ms932Encoder.encode("鱆鱇鱈")].join(",") === "233,225,233,223,146,76"); // U+9C46
expect(() => {ms932Encoder.encode("\u9C49")}).to.throw(Error, "EncodingError U+9C49");
expect(() => {ms932Encoder.encode("\u9C4A")}).to.throw(Error, "EncodingError U+9C4A");
expect(() => {ms932Encoder.encode("\u9C4B")}).to.throw(Error, "EncodingError U+9C4B");
expect(() => {ms932Encoder.encode("\u9C4C")}).to.throw(Error, "EncodingError U+9C4C");
expect(() => {ms932Encoder.encode("\u9C4D")}).to.throw(Error, "EncodingError U+9C4D");
expect(() => {ms932Encoder.encode("\u9C4E")}).to.throw(Error, "EncodingError U+9C4E");
expect(() => {ms932Encoder.encode("\u9C4F")}).to.throw(Error, "EncodingError U+9C4F");
expect(() => {ms932Encoder.encode("\u9C50")}).to.throw(Error, "EncodingError U+9C50");
expect(() => {ms932Encoder.encode("\u9C51")}).to.throw(Error, "EncodingError U+9C51");
r = r && ([...ms932Encoder.encode("鱒")].join(",") === "150,144"); // U+9C52
expect(() => {ms932Encoder.encode("\u9C53")}).to.throw(Error, "EncodingError U+9C53");
expect(() => {ms932Encoder.encode("\u9C54")}).to.throw(Error, "EncodingError U+9C54");
expect(() => {ms932Encoder.encode("\u9C55")}).to.throw(Error, "EncodingError U+9C55");
expect(() => {ms932Encoder.encode("\u9C56")}).to.throw(Error, "EncodingError U+9C56");
r = r && ([...ms932Encoder.encode("鱗")].join(",") === "151,216"); // U+9C57
expect(() => {ms932Encoder.encode("\u9C58")}).to.throw(Error, "EncodingError U+9C58");
expect(() => {ms932Encoder.encode("\u9C59")}).to.throw(Error, "EncodingError U+9C59");
r = r && ([...ms932Encoder.encode("鱚")].join(",") === "233,227"); // U+9C5A
expect(() => {ms932Encoder.encode("\u9C5B")}).to.throw(Error, "EncodingError U+9C5B");
expect(() => {ms932Encoder.encode("\u9C5C")}).to.throw(Error, "EncodingError U+9C5C");
expect(() => {ms932Encoder.encode("\u9C5D")}).to.throw(Error, "EncodingError U+9C5D");
expect(() => {ms932Encoder.encode("\u9C5E")}).to.throw(Error, "EncodingError U+9C5E");
expect(() => {ms932Encoder.encode("\u9C5F")}).to.throw(Error, "EncodingError U+9C5F");
r = r && ([...ms932Encoder.encode("鱠")].join(",") === "233,228"); // U+9C60
expect(() => {ms932Encoder.encode("\u9C61")}).to.throw(Error, "EncodingError U+9C61");
expect(() => {ms932Encoder.encode("\u9C62")}).to.throw(Error, "EncodingError U+9C62");
expect(() => {ms932Encoder.encode("\u9C63")}).to.throw(Error, "EncodingError U+9C63");
expect(() => {ms932Encoder.encode("\u9C64")}).to.throw(Error, "EncodingError U+9C64");
expect(() => {ms932Encoder.encode("\u9C65")}).to.throw(Error, "EncodingError U+9C65");
expect(() => {ms932Encoder.encode("\u9C66")}).to.throw(Error, "EncodingError U+9C66");
r = r && ([...ms932Encoder.encode("鱧")].join(",") === "233,229"); // U+9C67
expect(() => {ms932Encoder.encode("\u9C68")}).to.throw(Error, "EncodingError U+9C68");
expect(() => {ms932Encoder.encode("\u9C69")}).to.throw(Error, "EncodingError U+9C69");
expect(() => {ms932Encoder.encode("\u9C6A")}).to.throw(Error, "EncodingError U+9C6A");
expect(() => {ms932Encoder.encode("\u9C6B")}).to.throw(Error, "EncodingError U+9C6B");
expect(() => {ms932Encoder.encode("\u9C6C")}).to.throw(Error, "EncodingError U+9C6C");
expect(() => {ms932Encoder.encode("\u9C6D")}).to.throw(Error, "EncodingError U+9C6D");
expect(() => {ms932Encoder.encode("\u9C6E")}).to.throw(Error, "EncodingError U+9C6E");
expect(() => {ms932Encoder.encode("\u9C6F")}).to.throw(Error, "EncodingError U+9C6F");
expect(() => {ms932Encoder.encode("\u9C70")}).to.throw(Error, "EncodingError U+9C70");
expect(() => {ms932Encoder.encode("\u9C71")}).to.throw(Error, "EncodingError U+9C71");
expect(() => {ms932Encoder.encode("\u9C72")}).to.throw(Error, "EncodingError U+9C72");
expect(() => {ms932Encoder.encode("\u9C73")}).to.throw(Error, "EncodingError U+9C73");
expect(() => {ms932Encoder.encode("\u9C74")}).to.throw(Error, "EncodingError U+9C74");
expect(() => {ms932Encoder.encode("\u9C75")}).to.throw(Error, "EncodingError U+9C75");
r = r && ([...ms932Encoder.encode("鱶")].join(",") === "233,230"); // U+9C76
expect(() => {ms932Encoder.encode("\u9C77")}).to.throw(Error, "EncodingError U+9C77");
r = r && ([...ms932Encoder.encode("鱸")].join(",") === "233,231"); // U+9C78
expect(() => {ms932Encoder.encode("\u9C79")}).to.throw(Error, "EncodingError U+9C79");
expect(() => {ms932Encoder.encode("\u9C7A")}).to.throw(Error, "EncodingError U+9C7A");
expect(() => {ms932Encoder.encode("\u9C7B")}).to.throw(Error, "EncodingError U+9C7B");
expect(() => {ms932Encoder.encode("\u9C7C")}).to.throw(Error, "EncodingError U+9C7C");
expect(() => {ms932Encoder.encode("\u9C7D")}).to.throw(Error, "EncodingError U+9C7D");
expect(() => {ms932Encoder.encode("\u9C7E")}).to.throw(Error, "EncodingError U+9C7E");
expect(() => {ms932Encoder.encode("\u9C7F")}).to.throw(Error, "EncodingError U+9C7F");
expect(() => {ms932Encoder.encode("\u9C80")}).to.throw(Error, "EncodingError U+9C80");
expect(() => {ms932Encoder.encode("\u9C81")}).to.throw(Error, "EncodingError U+9C81");
expect(() => {ms932Encoder.encode("\u9C82")}).to.throw(Error, "EncodingError U+9C82");
expect(() => {ms932Encoder.encode("\u9C83")}).to.throw(Error, "EncodingError U+9C83");
expect(() => {ms932Encoder.encode("\u9C84")}).to.throw(Error, "EncodingError U+9C84");
expect(() => {ms932Encoder.encode("\u9C85")}).to.throw(Error, "EncodingError U+9C85");
expect(() => {ms932Encoder.encode("\u9C86")}).to.throw(Error, "EncodingError U+9C86");
expect(() => {ms932Encoder.encode("\u9C87")}).to.throw(Error, "EncodingError U+9C87");
expect(() => {ms932Encoder.encode("\u9C88")}).to.throw(Error, "EncodingError U+9C88");
expect(() => {ms932Encoder.encode("\u9C89")}).to.throw(Error, "EncodingError U+9C89");
expect(() => {ms932Encoder.encode("\u9C8A")}).to.throw(Error, "EncodingError U+9C8A");
expect(() => {ms932Encoder.encode("\u9C8B")}).to.throw(Error, "EncodingError U+9C8B");
expect(() => {ms932Encoder.encode("\u9C8C")}).to.throw(Error, "EncodingError U+9C8C");
expect(() => {ms932Encoder.encode("\u9C8D")}).to.throw(Error, "EncodingError U+9C8D");
expect(() => {ms932Encoder.encode("\u9C8E")}).to.throw(Error, "EncodingError U+9C8E");
expect(() => {ms932Encoder.encode("\u9C8F")}).to.throw(Error, "EncodingError U+9C8F");
expect(() => {ms932Encoder.encode("\u9C90")}).to.throw(Error, "EncodingError U+9C90");
expect(() => {ms932Encoder.encode("\u9C91")}).to.throw(Error, "EncodingError U+9C91");
expect(() => {ms932Encoder.encode("\u9C92")}).to.throw(Error, "EncodingError U+9C92");
expect(() => {ms932Encoder.encode("\u9C93")}).to.throw(Error, "EncodingError U+9C93");
expect(() => {ms932Encoder.encode("\u9C94")}).to.throw(Error, "EncodingError U+9C94");
expect(() => {ms932Encoder.encode("\u9C95")}).to.throw(Error, "EncodingError U+9C95");
expect(() => {ms932Encoder.encode("\u9C96")}).to.throw(Error, "EncodingError U+9C96");
expect(() => {ms932Encoder.encode("\u9C97")}).to.throw(Error, "EncodingError U+9C97");
expect(() => {ms932Encoder.encode("\u9C98")}).to.throw(Error, "EncodingError U+9C98");
expect(() => {ms932Encoder.encode("\u9C99")}).to.throw(Error, "EncodingError U+9C99");
expect(() => {ms932Encoder.encode("\u9C9A")}).to.throw(Error, "EncodingError U+9C9A");
expect(() => {ms932Encoder.encode("\u9C9B")}).to.throw(Error, "EncodingError U+9C9B");
expect(() => {ms932Encoder.encode("\u9C9C")}).to.throw(Error, "EncodingError U+9C9C");
expect(() => {ms932Encoder.encode("\u9C9D")}).to.throw(Error, "EncodingError U+9C9D");
expect(() => {ms932Encoder.encode("\u9C9E")}).to.throw(Error, "EncodingError U+9C9E");
expect(() => {ms932Encoder.encode("\u9C9F")}).to.throw(Error, "EncodingError U+9C9F");
expect(() => {ms932Encoder.encode("\u9CA0")}).to.throw(Error, "EncodingError U+9CA0");
expect(() => {ms932Encoder.encode("\u9CA1")}).to.throw(Error, "EncodingError U+9CA1");
expect(() => {ms932Encoder.encode("\u9CA2")}).to.throw(Error, "EncodingError U+9CA2");
expect(() => {ms932Encoder.encode("\u9CA3")}).to.throw(Error, "EncodingError U+9CA3");
expect(() => {ms932Encoder.encode("\u9CA4")}).to.throw(Error, "EncodingError U+9CA4");
expect(() => {ms932Encoder.encode("\u9CA5")}).to.throw(Error, "EncodingError U+9CA5");
expect(() => {ms932Encoder.encode("\u9CA6")}).to.throw(Error, "EncodingError U+9CA6");
expect(() => {ms932Encoder.encode("\u9CA7")}).to.throw(Error, "EncodingError U+9CA7");
expect(() => {ms932Encoder.encode("\u9CA8")}).to.throw(Error, "EncodingError U+9CA8");
expect(() => {ms932Encoder.encode("\u9CA9")}).to.throw(Error, "EncodingError U+9CA9");
expect(() => {ms932Encoder.encode("\u9CAA")}).to.throw(Error, "EncodingError U+9CAA");
expect(() => {ms932Encoder.encode("\u9CAB")}).to.throw(Error, "EncodingError U+9CAB");
expect(() => {ms932Encoder.encode("\u9CAC")}).to.throw(Error, "EncodingError U+9CAC");
expect(() => {ms932Encoder.encode("\u9CAD")}).to.throw(Error, "EncodingError U+9CAD");
expect(() => {ms932Encoder.encode("\u9CAE")}).to.throw(Error, "EncodingError U+9CAE");
expect(() => {ms932Encoder.encode("\u9CAF")}).to.throw(Error, "EncodingError U+9CAF");
expect(() => {ms932Encoder.encode("\u9CB0")}).to.throw(Error, "EncodingError U+9CB0");
expect(() => {ms932Encoder.encode("\u9CB1")}).to.throw(Error, "EncodingError U+9CB1");
expect(() => {ms932Encoder.encode("\u9CB2")}).to.throw(Error, "EncodingError U+9CB2");
expect(() => {ms932Encoder.encode("\u9CB3")}).to.throw(Error, "EncodingError U+9CB3");
expect(() => {ms932Encoder.encode("\u9CB4")}).to.throw(Error, "EncodingError U+9CB4");
expect(() => {ms932Encoder.encode("\u9CB5")}).to.throw(Error, "EncodingError U+9CB5");
expect(() => {ms932Encoder.encode("\u9CB6")}).to.throw(Error, "EncodingError U+9CB6");
expect(() => {ms932Encoder.encode("\u9CB7")}).to.throw(Error, "EncodingError U+9CB7");
expect(() => {ms932Encoder.encode("\u9CB8")}).to.throw(Error, "EncodingError U+9CB8");
expect(() => {ms932Encoder.encode("\u9CB9")}).to.throw(Error, "EncodingError U+9CB9");
expect(() => {ms932Encoder.encode("\u9CBA")}).to.throw(Error, "EncodingError U+9CBA");
expect(() => {ms932Encoder.encode("\u9CBB")}).to.throw(Error, "EncodingError U+9CBB");
expect(() => {ms932Encoder.encode("\u9CBC")}).to.throw(Error, "EncodingError U+9CBC");
expect(() => {ms932Encoder.encode("\u9CBD")}).to.throw(Error, "EncodingError U+9CBD");
expect(() => {ms932Encoder.encode("\u9CBE")}).to.throw(Error, "EncodingError U+9CBE");
expect(() => {ms932Encoder.encode("\u9CBF")}).to.throw(Error, "EncodingError U+9CBF");
expect(() => {ms932Encoder.encode("\u9CC0")}).to.throw(Error, "EncodingError U+9CC0");
expect(() => {ms932Encoder.encode("\u9CC1")}).to.throw(Error, "EncodingError U+9CC1");
expect(() => {ms932Encoder.encode("\u9CC2")}).to.throw(Error, "EncodingError U+9CC2");
expect(() => {ms932Encoder.encode("\u9CC3")}).to.throw(Error, "EncodingError U+9CC3");
expect(() => {ms932Encoder.encode("\u9CC4")}).to.throw(Error, "EncodingError U+9CC4");
expect(() => {ms932Encoder.encode("\u9CC5")}).to.throw(Error, "EncodingError U+9CC5");
expect(() => {ms932Encoder.encode("\u9CC6")}).to.throw(Error, "EncodingError U+9CC6");
expect(() => {ms932Encoder.encode("\u9CC7")}).to.throw(Error, "EncodingError U+9CC7");
expect(() => {ms932Encoder.encode("\u9CC8")}).to.throw(Error, "EncodingError U+9CC8");
expect(() => {ms932Encoder.encode("\u9CC9")}).to.throw(Error, "EncodingError U+9CC9");
expect(() => {ms932Encoder.encode("\u9CCA")}).to.throw(Error, "EncodingError U+9CCA");
expect(() => {ms932Encoder.encode("\u9CCB")}).to.throw(Error, "EncodingError U+9CCB");
expect(() => {ms932Encoder.encode("\u9CCC")}).to.throw(Error, "EncodingError U+9CCC");
expect(() => {ms932Encoder.encode("\u9CCD")}).to.throw(Error, "EncodingError U+9CCD");
expect(() => {ms932Encoder.encode("\u9CCE")}).to.throw(Error, "EncodingError U+9CCE");
expect(() => {ms932Encoder.encode("\u9CCF")}).to.throw(Error, "EncodingError U+9CCF");
expect(() => {ms932Encoder.encode("\u9CD0")}).to.throw(Error, "EncodingError U+9CD0");
expect(() => {ms932Encoder.encode("\u9CD1")}).to.throw(Error, "EncodingError U+9CD1");
expect(() => {ms932Encoder.encode("\u9CD2")}).to.throw(Error, "EncodingError U+9CD2");
expect(() => {ms932Encoder.encode("\u9CD3")}).to.throw(Error, "EncodingError U+9CD3");
expect(() => {ms932Encoder.encode("\u9CD4")}).to.throw(Error, "EncodingError U+9CD4");
expect(() => {ms932Encoder.encode("\u9CD5")}).to.throw(Error, "EncodingError U+9CD5");
expect(() => {ms932Encoder.encode("\u9CD6")}).to.throw(Error, "EncodingError U+9CD6");
expect(() => {ms932Encoder.encode("\u9CD7")}).to.throw(Error, "EncodingError U+9CD7");
expect(() => {ms932Encoder.encode("\u9CD8")}).to.throw(Error, "EncodingError U+9CD8");
expect(() => {ms932Encoder.encode("\u9CD9")}).to.throw(Error, "EncodingError U+9CD9");
expect(() => {ms932Encoder.encode("\u9CDA")}).to.throw(Error, "EncodingError U+9CDA");
expect(() => {ms932Encoder.encode("\u9CDB")}).to.throw(Error, "EncodingError U+9CDB");
expect(() => {ms932Encoder.encode("\u9CDC")}).to.throw(Error, "EncodingError U+9CDC");
expect(() => {ms932Encoder.encode("\u9CDD")}).to.throw(Error, "EncodingError U+9CDD");
expect(() => {ms932Encoder.encode("\u9CDE")}).to.throw(Error, "EncodingError U+9CDE");
expect(() => {ms932Encoder.encode("\u9CDF")}).to.throw(Error, "EncodingError U+9CDF");
expect(() => {ms932Encoder.encode("\u9CE0")}).to.throw(Error, "EncodingError U+9CE0");
expect(() => {ms932Encoder.encode("\u9CE1")}).to.throw(Error, "EncodingError U+9CE1");
expect(() => {ms932Encoder.encode("\u9CE2")}).to.throw(Error, "EncodingError U+9CE2");
expect(() => {ms932Encoder.encode("\u9CE3")}).to.throw(Error, "EncodingError U+9CE3");
expect(() => {ms932Encoder.encode("\u9CE4")}).to.throw(Error, "EncodingError U+9CE4");
r = r && ([...ms932Encoder.encode("鳥")].join(",") === "146,185"); // U+9CE5
expect(() => {ms932Encoder.encode("\u9CE6")}).to.throw(Error, "EncodingError U+9CE6");
r = r && ([...ms932Encoder.encode("鳧")].join(",") === "233,232"); // U+9CE7
expect(() => {ms932Encoder.encode("\u9CE8")}).to.throw(Error, "EncodingError U+9CE8");
r = r && ([...ms932Encoder.encode("鳩")].join(",") === "148,181"); // U+9CE9
expect(() => {ms932Encoder.encode("\u9CEA")}).to.throw(Error, "EncodingError U+9CEA");
r = r && ([...ms932Encoder.encode("鳫鳬")].join(",") === "233,237,233,233"); // U+9CEB
expect(() => {ms932Encoder.encode("\u9CED")}).to.throw(Error, "EncodingError U+9CED");
expect(() => {ms932Encoder.encode("\u9CEE")}).to.throw(Error, "EncodingError U+9CEE");
expect(() => {ms932Encoder.encode("\u9CEF")}).to.throw(Error, "EncodingError U+9CEF");
r = r && ([...ms932Encoder.encode("鳰")].join(",") === "233,234"); // U+9CF0
expect(() => {ms932Encoder.encode("\u9CF1")}).to.throw(Error, "EncodingError U+9CF1");
expect(() => {ms932Encoder.encode("\u9CF2")}).to.throw(Error, "EncodingError U+9CF2");
r = r && ([...ms932Encoder.encode("鳳鳴")].join(",") === "150,80,150,194"); // U+9CF3
expect(() => {ms932Encoder.encode("\u9CF5")}).to.throw(Error, "EncodingError U+9CF5");
r = r && ([...ms932Encoder.encode("鳶")].join(",") === "147,206"); // U+9CF6
expect(() => {ms932Encoder.encode("\u9CF7")}).to.throw(Error, "EncodingError U+9CF7");
expect(() => {ms932Encoder.encode("\u9CF8")}).to.throw(Error, "EncodingError U+9CF8");
expect(() => {ms932Encoder.encode("\u9CF9")}).to.throw(Error, "EncodingError U+9CF9");
expect(() => {ms932Encoder.encode("\u9CFA")}).to.throw(Error, "EncodingError U+9CFA");
expect(() => {ms932Encoder.encode("\u9CFB")}).to.throw(Error, "EncodingError U+9CFB");
expect(() => {ms932Encoder.encode("\u9CFC")}).to.throw(Error, "EncodingError U+9CFC");
expect(() => {ms932Encoder.encode("\u9CFD")}).to.throw(Error, "EncodingError U+9CFD");
expect(() => {ms932Encoder.encode("\u9CFE")}).to.throw(Error, "EncodingError U+9CFE");
expect(() => {ms932Encoder.encode("\u9CFF")}).to.throw(Error, "EncodingError U+9CFF");
expect(() => {ms932Encoder.encode("\u9D00")}).to.throw(Error, "EncodingError U+9D00");
expect(() => {ms932Encoder.encode("\u9D01")}).to.throw(Error, "EncodingError U+9D01");
expect(() => {ms932Encoder.encode("\u9D02")}).to.throw(Error, "EncodingError U+9D02");
r = r && ([...ms932Encoder.encode("鴃")].join(",") === "233,238"); // U+9D03
expect(() => {ms932Encoder.encode("\u9D04")}).to.throw(Error, "EncodingError U+9D04");
expect(() => {ms932Encoder.encode("\u9D05")}).to.throw(Error, "EncodingError U+9D05");
r = r && ([...ms932Encoder.encode("鴆鴇鴈鴉")].join(",") === "233,239,147,188,233,236,233,235"); // U+9D06
expect(() => {ms932Encoder.encode("\u9D0A")}).to.throw(Error, "EncodingError U+9D0A");
expect(() => {ms932Encoder.encode("\u9D0B")}).to.throw(Error, "EncodingError U+9D0B");
expect(() => {ms932Encoder.encode("\u9D0C")}).to.throw(Error, "EncodingError U+9D0C");
expect(() => {ms932Encoder.encode("\u9D0D")}).to.throw(Error, "EncodingError U+9D0D");
r = r && ([...ms932Encoder.encode("鴎")].join(",") === "137,168"); // U+9D0E
expect(() => {ms932Encoder.encode("\u9D0F")}).to.throw(Error, "EncodingError U+9D0F");
expect(() => {ms932Encoder.encode("\u9D10")}).to.throw(Error, "EncodingError U+9D10");
expect(() => {ms932Encoder.encode("\u9D11")}).to.throw(Error, "EncodingError U+9D11");
r = r && ([...ms932Encoder.encode("鴒")].join(",") === "233,247"); // U+9D12
expect(() => {ms932Encoder.encode("\u9D13")}).to.throw(Error, "EncodingError U+9D13");
expect(() => {ms932Encoder.encode("\u9D14")}).to.throw(Error, "EncodingError U+9D14");
r = r && ([...ms932Encoder.encode("鴕")].join(",") === "233,246"); // U+9D15
expect(() => {ms932Encoder.encode("\u9D16")}).to.throw(Error, "EncodingError U+9D16");
expect(() => {ms932Encoder.encode("\u9D17")}).to.throw(Error, "EncodingError U+9D17");
expect(() => {ms932Encoder.encode("\u9D18")}).to.throw(Error, "EncodingError U+9D18");
expect(() => {ms932Encoder.encode("\u9D19")}).to.throw(Error, "EncodingError U+9D19");
expect(() => {ms932Encoder.encode("\u9D1A")}).to.throw(Error, "EncodingError U+9D1A");
r = r && ([...ms932Encoder.encode("鴛")].join(",") === "137,149"); // U+9D1B
expect(() => {ms932Encoder.encode("\u9D1C")}).to.throw(Error, "EncodingError U+9D1C");
expect(() => {ms932Encoder.encode("\u9D1D")}).to.throw(Error, "EncodingError U+9D1D");
expect(() => {ms932Encoder.encode("\u9D1E")}).to.throw(Error, "EncodingError U+9D1E");
r = r && ([...ms932Encoder.encode("鴟")].join(",") === "233,244"); // U+9D1F
expect(() => {ms932Encoder.encode("\u9D20")}).to.throw(Error, "EncodingError U+9D20");
expect(() => {ms932Encoder.encode("\u9D21")}).to.throw(Error, "EncodingError U+9D21");
expect(() => {ms932Encoder.encode("\u9D22")}).to.throw(Error, "EncodingError U+9D22");
r = r && ([...ms932Encoder.encode("鴣")].join(",") === "233,243"); // U+9D23
expect(() => {ms932Encoder.encode("\u9D24")}).to.throw(Error, "EncodingError U+9D24");
expect(() => {ms932Encoder.encode("\u9D25")}).to.throw(Error, "EncodingError U+9D25");
r = r && ([...ms932Encoder.encode("鴦")].join(",") === "233,241"); // U+9D26
expect(() => {ms932Encoder.encode("\u9D27")}).to.throw(Error, "EncodingError U+9D27");
r = r && ([...ms932Encoder.encode("鴨")].join(",") === "138,155"); // U+9D28
expect(() => {ms932Encoder.encode("\u9D29")}).to.throw(Error, "EncodingError U+9D29");
r = r && ([...ms932Encoder.encode("鴪鴫鴬")].join(",") === "233,240,142,176,137,167"); // U+9D2A
expect(() => {ms932Encoder.encode("\u9D2D")}).to.throw(Error, "EncodingError U+9D2D");
expect(() => {ms932Encoder.encode("\u9D2E")}).to.throw(Error, "EncodingError U+9D2E");
expect(() => {ms932Encoder.encode("\u9D2F")}).to.throw(Error, "EncodingError U+9D2F");
expect(() => {ms932Encoder.encode("\u9D30")}).to.throw(Error, "EncodingError U+9D30");
expect(() => {ms932Encoder.encode("\u9D31")}).to.throw(Error, "EncodingError U+9D31");
expect(() => {ms932Encoder.encode("\u9D32")}).to.throw(Error, "EncodingError U+9D32");
expect(() => {ms932Encoder.encode("\u9D33")}).to.throw(Error, "EncodingError U+9D33");
expect(() => {ms932Encoder.encode("\u9D34")}).to.throw(Error, "EncodingError U+9D34");
expect(() => {ms932Encoder.encode("\u9D35")}).to.throw(Error, "EncodingError U+9D35");
expect(() => {ms932Encoder.encode("\u9D36")}).to.throw(Error, "EncodingError U+9D36");
expect(() => {ms932Encoder.encode("\u9D37")}).to.throw(Error, "EncodingError U+9D37");
expect(() => {ms932Encoder.encode("\u9D38")}).to.throw(Error, "EncodingError U+9D38");
expect(() => {ms932Encoder.encode("\u9D39")}).to.throw(Error, "EncodingError U+9D39");
expect(() => {ms932Encoder.encode("\u9D3A")}).to.throw(Error, "EncodingError U+9D3A");
r = r && ([...ms932Encoder.encode("鴻")].join(",") === "141,131"); // U+9D3B
expect(() => {ms932Encoder.encode("\u9D3C")}).to.throw(Error, "EncodingError U+9D3C");
expect(() => {ms932Encoder.encode("\u9D3D")}).to.throw(Error, "EncodingError U+9D3D");
r = r && ([...ms932Encoder.encode("鴾鴿")].join(",") === "233,250,233,249"); // U+9D3E
expect(() => {ms932Encoder.encode("\u9D40")}).to.throw(Error, "EncodingError U+9D40");
r = r && ([...ms932Encoder.encode("鵁")].join(",") === "233,248"); // U+9D41
expect(() => {ms932Encoder.encode("\u9D42")}).to.throw(Error, "EncodingError U+9D42");
expect(() => {ms932Encoder.encode("\u9D43")}).to.throw(Error, "EncodingError U+9D43");
r = r && ([...ms932Encoder.encode("鵄")].join(",") === "233,245"); // U+9D44
expect(() => {ms932Encoder.encode("\u9D45")}).to.throw(Error, "EncodingError U+9D45");
r = r && ([...ms932Encoder.encode("鵆")].join(",") === "233,251"); // U+9D46
expect(() => {ms932Encoder.encode("\u9D47")}).to.throw(Error, "EncodingError U+9D47");
r = r && ([...ms932Encoder.encode("鵈")].join(",") === "233,252"); // U+9D48
expect(() => {ms932Encoder.encode("\u9D49")}).to.throw(Error, "EncodingError U+9D49");
expect(() => {ms932Encoder.encode("\u9D4A")}).to.throw(Error, "EncodingError U+9D4A");
expect(() => {ms932Encoder.encode("\u9D4B")}).to.throw(Error, "EncodingError U+9D4B");
expect(() => {ms932Encoder.encode("\u9D4C")}).to.throw(Error, "EncodingError U+9D4C");
expect(() => {ms932Encoder.encode("\u9D4D")}).to.throw(Error, "EncodingError U+9D4D");
expect(() => {ms932Encoder.encode("\u9D4E")}).to.throw(Error, "EncodingError U+9D4E");
expect(() => {ms932Encoder.encode("\u9D4F")}).to.throw(Error, "EncodingError U+9D4F");
r = r && ([...ms932Encoder.encode("鵐鵑")].join(",") === "234,68,234,67"); // U+9D50
expect(() => {ms932Encoder.encode("\u9D52")}).to.throw(Error, "EncodingError U+9D52");
expect(() => {ms932Encoder.encode("\u9D53")}).to.throw(Error, "EncodingError U+9D53");
expect(() => {ms932Encoder.encode("\u9D54")}).to.throw(Error, "EncodingError U+9D54");
expect(() => {ms932Encoder.encode("\u9D55")}).to.throw(Error, "EncodingError U+9D55");
expect(() => {ms932Encoder.encode("\u9D56")}).to.throw(Error, "EncodingError U+9D56");
expect(() => {ms932Encoder.encode("\u9D57")}).to.throw(Error, "EncodingError U+9D57");
expect(() => {ms932Encoder.encode("\u9D58")}).to.throw(Error, "EncodingError U+9D58");
r = r && ([...ms932Encoder.encode("鵙")].join(",") === "234,69"); // U+9D59
expect(() => {ms932Encoder.encode("\u9D5A")}).to.throw(Error, "EncodingError U+9D5A");
expect(() => {ms932Encoder.encode("\u9D5B")}).to.throw(Error, "EncodingError U+9D5B");
r = r && ([...ms932Encoder.encode("鵜鵝鵞")].join(",") === "137,76,234,64,234,65"); // U+9D5C
expect(() => {ms932Encoder.encode("\u9D5F")}).to.throw(Error, "EncodingError U+9D5F");
r = r && ([...ms932Encoder.encode("鵠鵡")].join(",") === "141,148,150,183"); // U+9D60
expect(() => {ms932Encoder.encode("\u9D62")}).to.throw(Error, "EncodingError U+9D62");
expect(() => {ms932Encoder.encode("\u9D63")}).to.throw(Error, "EncodingError U+9D63");
r = r && ([...ms932Encoder.encode("鵤")].join(",") === "234,66"); // U+9D64
expect(() => {ms932Encoder.encode("\u9D65")}).to.throw(Error, "EncodingError U+9D65");
expect(() => {ms932Encoder.encode("\u9D66")}).to.throw(Error, "EncodingError U+9D66");
expect(() => {ms932Encoder.encode("\u9D67")}).to.throw(Error, "EncodingError U+9D67");
expect(() => {ms932Encoder.encode("\u9D68")}).to.throw(Error, "EncodingError U+9D68");
expect(() => {ms932Encoder.encode("\u9D69")}).to.throw(Error, "EncodingError U+9D69");
expect(() => {ms932Encoder.encode("\u9D6A")}).to.throw(Error, "EncodingError U+9D6A");
r = r && ([...ms932Encoder.encode("鵫鵬")].join(",") === "252,72,150,81"); // U+9D6B
expect(() => {ms932Encoder.encode("\u9D6D")}).to.throw(Error, "EncodingError U+9D6D");
expect(() => {ms932Encoder.encode("\u9D6E")}).to.throw(Error, "EncodingError U+9D6E");
r = r && ([...ms932Encoder.encode("鵯鵰")].join(",") === "234,74,252,71"); // U+9D6F
expect(() => {ms932Encoder.encode("\u9D71")}).to.throw(Error, "EncodingError U+9D71");
r = r && ([...ms932Encoder.encode("鵲")].join(",") === "234,70"); // U+9D72
expect(() => {ms932Encoder.encode("\u9D73")}).to.throw(Error, "EncodingError U+9D73");
expect(() => {ms932Encoder.encode("\u9D74")}).to.throw(Error, "EncodingError U+9D74");
expect(() => {ms932Encoder.encode("\u9D75")}).to.throw(Error, "EncodingError U+9D75");
expect(() => {ms932Encoder.encode("\u9D76")}).to.throw(Error, "EncodingError U+9D76");
expect(() => {ms932Encoder.encode("\u9D77")}).to.throw(Error, "EncodingError U+9D77");
expect(() => {ms932Encoder.encode("\u9D78")}).to.throw(Error, "EncodingError U+9D78");
expect(() => {ms932Encoder.encode("\u9D79")}).to.throw(Error, "EncodingError U+9D79");
r = r && ([...ms932Encoder.encode("鵺")].join(",") === "234,75"); // U+9D7A
expect(() => {ms932Encoder.encode("\u9D7B")}).to.throw(Error, "EncodingError U+9D7B");
expect(() => {ms932Encoder.encode("\u9D7C")}).to.throw(Error, "EncodingError U+9D7C");
expect(() => {ms932Encoder.encode("\u9D7D")}).to.throw(Error, "EncodingError U+9D7D");
expect(() => {ms932Encoder.encode("\u9D7E")}).to.throw(Error, "EncodingError U+9D7E");
expect(() => {ms932Encoder.encode("\u9D7F")}).to.throw(Error, "EncodingError U+9D7F");
expect(() => {ms932Encoder.encode("\u9D80")}).to.throw(Error, "EncodingError U+9D80");
expect(() => {ms932Encoder.encode("\u9D81")}).to.throw(Error, "EncodingError U+9D81");
expect(() => {ms932Encoder.encode("\u9D82")}).to.throw(Error, "EncodingError U+9D82");
expect(() => {ms932Encoder.encode("\u9D83")}).to.throw(Error, "EncodingError U+9D83");
expect(() => {ms932Encoder.encode("\u9D84")}).to.throw(Error, "EncodingError U+9D84");
expect(() => {ms932Encoder.encode("\u9D85")}).to.throw(Error, "EncodingError U+9D85");
expect(() => {ms932Encoder.encode("\u9D86")}).to.throw(Error, "EncodingError U+9D86");
r = r && ([...ms932Encoder.encode("鶇")].join(",") === "234,72"); // U+9D87
expect(() => {ms932Encoder.encode("\u9D88")}).to.throw(Error, "EncodingError U+9D88");
r = r && ([...ms932Encoder.encode("鶉")].join(",") === "234,71"); // U+9D89
expect(() => {ms932Encoder.encode("\u9D8A")}).to.throw(Error, "EncodingError U+9D8A");
expect(() => {ms932Encoder.encode("\u9D8B")}).to.throw(Error, "EncodingError U+9D8B");
expect(() => {ms932Encoder.encode("\u9D8C")}).to.throw(Error, "EncodingError U+9D8C");
expect(() => {ms932Encoder.encode("\u9D8D")}).to.throw(Error, "EncodingError U+9D8D");
expect(() => {ms932Encoder.encode("\u9D8E")}).to.throw(Error, "EncodingError U+9D8E");
r = r && ([...ms932Encoder.encode("鶏")].join(",") === "140,123"); // U+9D8F
expect(() => {ms932Encoder.encode("\u9D90")}).to.throw(Error, "EncodingError U+9D90");
expect(() => {ms932Encoder.encode("\u9D91")}).to.throw(Error, "EncodingError U+9D91");
expect(() => {ms932Encoder.encode("\u9D92")}).to.throw(Error, "EncodingError U+9D92");
expect(() => {ms932Encoder.encode("\u9D93")}).to.throw(Error, "EncodingError U+9D93");
expect(() => {ms932Encoder.encode("\u9D94")}).to.throw(Error, "EncodingError U+9D94");
expect(() => {ms932Encoder.encode("\u9D95")}).to.throw(Error, "EncodingError U+9D95");
expect(() => {ms932Encoder.encode("\u9D96")}).to.throw(Error, "EncodingError U+9D96");
expect(() => {ms932Encoder.encode("\u9D97")}).to.throw(Error, "EncodingError U+9D97");
expect(() => {ms932Encoder.encode("\u9D98")}).to.throw(Error, "EncodingError U+9D98");
expect(() => {ms932Encoder.encode("\u9D99")}).to.throw(Error, "EncodingError U+9D99");
r = r && ([...ms932Encoder.encode("鶚")].join(",") === "234,76"); // U+9D9A
expect(() => {ms932Encoder.encode("\u9D9B")}).to.throw(Error, "EncodingError U+9D9B");
expect(() => {ms932Encoder.encode("\u9D9C")}).to.throw(Error, "EncodingError U+9D9C");
expect(() => {ms932Encoder.encode("\u9D9D")}).to.throw(Error, "EncodingError U+9D9D");
expect(() => {ms932Encoder.encode("\u9D9E")}).to.throw(Error, "EncodingError U+9D9E");
expect(() => {ms932Encoder.encode("\u9D9F")}).to.throw(Error, "EncodingError U+9D9F");
expect(() => {ms932Encoder.encode("\u9DA0")}).to.throw(Error, "EncodingError U+9DA0");
expect(() => {ms932Encoder.encode("\u9DA1")}).to.throw(Error, "EncodingError U+9DA1");
expect(() => {ms932Encoder.encode("\u9DA2")}).to.throw(Error, "EncodingError U+9DA2");
expect(() => {ms932Encoder.encode("\u9DA3")}).to.throw(Error, "EncodingError U+9DA3");
r = r && ([...ms932Encoder.encode("鶤")].join(",") === "234,77"); // U+9DA4
expect(() => {ms932Encoder.encode("\u9DA5")}).to.throw(Error, "EncodingError U+9DA5");
expect(() => {ms932Encoder.encode("\u9DA6")}).to.throw(Error, "EncodingError U+9DA6");
expect(() => {ms932Encoder.encode("\u9DA7")}).to.throw(Error, "EncodingError U+9DA7");
expect(() => {ms932Encoder.encode("\u9DA8")}).to.throw(Error, "EncodingError U+9DA8");
r = r && ([...ms932Encoder.encode("鶩")].join(",") === "234,78"); // U+9DA9
expect(() => {ms932Encoder.encode("\u9DAA")}).to.throw(Error, "EncodingError U+9DAA");
r = r && ([...ms932Encoder.encode("鶫")].join(",") === "234,73"); // U+9DAB
expect(() => {ms932Encoder.encode("\u9DAC")}).to.throw(Error, "EncodingError U+9DAC");
expect(() => {ms932Encoder.encode("\u9DAD")}).to.throw(Error, "EncodingError U+9DAD");
expect(() => {ms932Encoder.encode("\u9DAE")}).to.throw(Error, "EncodingError U+9DAE");
r = r && ([...ms932Encoder.encode("鶯")].join(",") === "233,242"); // U+9DAF
expect(() => {ms932Encoder.encode("\u9DB0")}).to.throw(Error, "EncodingError U+9DB0");
expect(() => {ms932Encoder.encode("\u9DB1")}).to.throw(Error, "EncodingError U+9DB1");
r = r && ([...ms932Encoder.encode("鶲")].join(",") === "234,79"); // U+9DB2
expect(() => {ms932Encoder.encode("\u9DB3")}).to.throw(Error, "EncodingError U+9DB3");
r = r && ([...ms932Encoder.encode("鶴")].join(",") === "146,223"); // U+9DB4
expect(() => {ms932Encoder.encode("\u9DB5")}).to.throw(Error, "EncodingError U+9DB5");
expect(() => {ms932Encoder.encode("\u9DB6")}).to.throw(Error, "EncodingError U+9DB6");
expect(() => {ms932Encoder.encode("\u9DB7")}).to.throw(Error, "EncodingError U+9DB7");
r = r && ([...ms932Encoder.encode("鶸")].join(",") === "234,83"); // U+9DB8
expect(() => {ms932Encoder.encode("\u9DB9")}).to.throw(Error, "EncodingError U+9DB9");
r = r && ([...ms932Encoder.encode("鶺鶻")].join(",") === "234,84,234,82"); // U+9DBA
expect(() => {ms932Encoder.encode("\u9DBC")}).to.throw(Error, "EncodingError U+9DBC");
expect(() => {ms932Encoder.encode("\u9DBD")}).to.throw(Error, "EncodingError U+9DBD");
expect(() => {ms932Encoder.encode("\u9DBE")}).to.throw(Error, "EncodingError U+9DBE");
expect(() => {ms932Encoder.encode("\u9DBF")}).to.throw(Error, "EncodingError U+9DBF");
expect(() => {ms932Encoder.encode("\u9DC0")}).to.throw(Error, "EncodingError U+9DC0");
r = r && ([...ms932Encoder.encode("鷁鷂")].join(",") === "234,81,234,87"); // U+9DC1
expect(() => {ms932Encoder.encode("\u9DC3")}).to.throw(Error, "EncodingError U+9DC3");
r = r && ([...ms932Encoder.encode("鷄")].join(",") === "234,80"); // U+9DC4
expect(() => {ms932Encoder.encode("\u9DC5")}).to.throw(Error, "EncodingError U+9DC5");
r = r && ([...ms932Encoder.encode("鷆")].join(",") === "234,85"); // U+9DC6
expect(() => {ms932Encoder.encode("\u9DC7")}).to.throw(Error, "EncodingError U+9DC7");
expect(() => {ms932Encoder.encode("\u9DC8")}).to.throw(Error, "EncodingError U+9DC8");
expect(() => {ms932Encoder.encode("\u9DC9")}).to.throw(Error, "EncodingError U+9DC9");
expect(() => {ms932Encoder.encode("\u9DCA")}).to.throw(Error, "EncodingError U+9DCA");
expect(() => {ms932Encoder.encode("\u9DCB")}).to.throw(Error, "EncodingError U+9DCB");
expect(() => {ms932Encoder.encode("\u9DCC")}).to.throw(Error, "EncodingError U+9DCC");
expect(() => {ms932Encoder.encode("\u9DCD")}).to.throw(Error, "EncodingError U+9DCD");
expect(() => {ms932Encoder.encode("\u9DCE")}).to.throw(Error, "EncodingError U+9DCE");
r = r && ([...ms932Encoder.encode("鷏")].join(",") === "234,86"); // U+9DCF
expect(() => {ms932Encoder.encode("\u9DD0")}).to.throw(Error, "EncodingError U+9DD0");
expect(() => {ms932Encoder.encode("\u9DD1")}).to.throw(Error, "EncodingError U+9DD1");
expect(() => {ms932Encoder.encode("\u9DD2")}).to.throw(Error, "EncodingError U+9DD2");
r = r && ([...ms932Encoder.encode("鷓")].join(",") === "234,89"); // U+9DD3
expect(() => {ms932Encoder.encode("\u9DD4")}).to.throw(Error, "EncodingError U+9DD4");
expect(() => {ms932Encoder.encode("\u9DD5")}).to.throw(Error, "EncodingError U+9DD5");
expect(() => {ms932Encoder.encode("\u9DD6")}).to.throw(Error, "EncodingError U+9DD6");
expect(() => {ms932Encoder.encode("\u9DD7")}).to.throw(Error, "EncodingError U+9DD7");
expect(() => {ms932Encoder.encode("\u9DD8")}).to.throw(Error, "EncodingError U+9DD8");
r = r && ([...ms932Encoder.encode("鷙")].join(",") === "234,88"); // U+9DD9
expect(() => {ms932Encoder.encode("\u9DDA")}).to.throw(Error, "EncodingError U+9DDA");
expect(() => {ms932Encoder.encode("\u9DDB")}).to.throw(Error, "EncodingError U+9DDB");
expect(() => {ms932Encoder.encode("\u9DDC")}).to.throw(Error, "EncodingError U+9DDC");
expect(() => {ms932Encoder.encode("\u9DDD")}).to.throw(Error, "EncodingError U+9DDD");
expect(() => {ms932Encoder.encode("\u9DDE")}).to.throw(Error, "EncodingError U+9DDE");
expect(() => {ms932Encoder.encode("\u9DDF")}).to.throw(Error, "EncodingError U+9DDF");
expect(() => {ms932Encoder.encode("\u9DE0")}).to.throw(Error, "EncodingError U+9DE0");
expect(() => {ms932Encoder.encode("\u9DE1")}).to.throw(Error, "EncodingError U+9DE1");
expect(() => {ms932Encoder.encode("\u9DE2")}).to.throw(Error, "EncodingError U+9DE2");
expect(() => {ms932Encoder.encode("\u9DE3")}).to.throw(Error, "EncodingError U+9DE3");
expect(() => {ms932Encoder.encode("\u9DE4")}).to.throw(Error, "EncodingError U+9DE4");
expect(() => {ms932Encoder.encode("\u9DE5")}).to.throw(Error, "EncodingError U+9DE5");
r = r && ([...ms932Encoder.encode("鷦")].join(",") === "234,91"); // U+9DE6
expect(() => {ms932Encoder.encode("\u9DE7")}).to.throw(Error, "EncodingError U+9DE7");
expect(() => {ms932Encoder.encode("\u9DE8")}).to.throw(Error, "EncodingError U+9DE8");
expect(() => {ms932Encoder.encode("\u9DE9")}).to.throw(Error, "EncodingError U+9DE9");
expect(() => {ms932Encoder.encode("\u9DEA")}).to.throw(Error, "EncodingError U+9DEA");
expect(() => {ms932Encoder.encode("\u9DEB")}).to.throw(Error, "EncodingError U+9DEB");
expect(() => {ms932Encoder.encode("\u9DEC")}).to.throw(Error, "EncodingError U+9DEC");
r = r && ([...ms932Encoder.encode("鷭")].join(",") === "234,92"); // U+9DED
expect(() => {ms932Encoder.encode("\u9DEE")}).to.throw(Error, "EncodingError U+9DEE");
r = r && ([...ms932Encoder.encode("鷯")].join(",") === "234,93"); // U+9DEF
expect(() => {ms932Encoder.encode("\u9DF0")}).to.throw(Error, "EncodingError U+9DF0");
expect(() => {ms932Encoder.encode("\u9DF1")}).to.throw(Error, "EncodingError U+9DF1");
r = r && ([...ms932Encoder.encode("鷲")].join(",") === "152,104"); // U+9DF2
expect(() => {ms932Encoder.encode("\u9DF3")}).to.throw(Error, "EncodingError U+9DF3");
expect(() => {ms932Encoder.encode("\u9DF4")}).to.throw(Error, "EncodingError U+9DF4");
expect(() => {ms932Encoder.encode("\u9DF5")}).to.throw(Error, "EncodingError U+9DF5");
expect(() => {ms932Encoder.encode("\u9DF6")}).to.throw(Error, "EncodingError U+9DF6");
expect(() => {ms932Encoder.encode("\u9DF7")}).to.throw(Error, "EncodingError U+9DF7");
r = r && ([...ms932Encoder.encode("鷸鷹鷺")].join(",") === "234,90,145,233,141,235"); // U+9DF8
expect(() => {ms932Encoder.encode("\u9DFB")}).to.throw(Error, "EncodingError U+9DFB");
expect(() => {ms932Encoder.encode("\u9DFC")}).to.throw(Error, "EncodingError U+9DFC");
r = r && ([...ms932Encoder.encode("鷽")].join(",") === "234,94"); // U+9DFD
expect(() => {ms932Encoder.encode("\u9DFE")}).to.throw(Error, "EncodingError U+9DFE");
expect(() => {ms932Encoder.encode("\u9DFF")}).to.throw(Error, "EncodingError U+9DFF");
expect(() => {ms932Encoder.encode("\u9E00")}).to.throw(Error, "EncodingError U+9E00");
expect(() => {ms932Encoder.encode("\u9E01")}).to.throw(Error, "EncodingError U+9E01");
expect(() => {ms932Encoder.encode("\u9E02")}).to.throw(Error, "EncodingError U+9E02");
expect(() => {ms932Encoder.encode("\u9E03")}).to.throw(Error, "EncodingError U+9E03");
expect(() => {ms932Encoder.encode("\u9E04")}).to.throw(Error, "EncodingError U+9E04");
expect(() => {ms932Encoder.encode("\u9E05")}).to.throw(Error, "EncodingError U+9E05");
expect(() => {ms932Encoder.encode("\u9E06")}).to.throw(Error, "EncodingError U+9E06");
expect(() => {ms932Encoder.encode("\u9E07")}).to.throw(Error, "EncodingError U+9E07");
expect(() => {ms932Encoder.encode("\u9E08")}).to.throw(Error, "EncodingError U+9E08");
expect(() => {ms932Encoder.encode("\u9E09")}).to.throw(Error, "EncodingError U+9E09");
expect(() => {ms932Encoder.encode("\u9E0A")}).to.throw(Error, "EncodingError U+9E0A");
expect(() => {ms932Encoder.encode("\u9E0B")}).to.throw(Error, "EncodingError U+9E0B");
expect(() => {ms932Encoder.encode("\u9E0C")}).to.throw(Error, "EncodingError U+9E0C");
expect(() => {ms932Encoder.encode("\u9E0D")}).to.throw(Error, "EncodingError U+9E0D");
expect(() => {ms932Encoder.encode("\u9E0E")}).to.throw(Error, "EncodingError U+9E0E");
expect(() => {ms932Encoder.encode("\u9E0F")}).to.throw(Error, "EncodingError U+9E0F");
expect(() => {ms932Encoder.encode("\u9E10")}).to.throw(Error, "EncodingError U+9E10");
expect(() => {ms932Encoder.encode("\u9E11")}).to.throw(Error, "EncodingError U+9E11");
expect(() => {ms932Encoder.encode("\u9E12")}).to.throw(Error, "EncodingError U+9E12");
expect(() => {ms932Encoder.encode("\u9E13")}).to.throw(Error, "EncodingError U+9E13");
expect(() => {ms932Encoder.encode("\u9E14")}).to.throw(Error, "EncodingError U+9E14");
expect(() => {ms932Encoder.encode("\u9E15")}).to.throw(Error, "EncodingError U+9E15");
expect(() => {ms932Encoder.encode("\u9E16")}).to.throw(Error, "EncodingError U+9E16");
expect(() => {ms932Encoder.encode("\u9E17")}).to.throw(Error, "EncodingError U+9E17");
expect(() => {ms932Encoder.encode("\u9E18")}).to.throw(Error, "EncodingError U+9E18");
r = r && ([...ms932Encoder.encode("鸙鸚鸛")].join(",") === "252,74,234,95,234,96"); // U+9E19
expect(() => {ms932Encoder.encode("\u9E1C")}).to.throw(Error, "EncodingError U+9E1C");
expect(() => {ms932Encoder.encode("\u9E1D")}).to.throw(Error, "EncodingError U+9E1D");
r = r && ([...ms932Encoder.encode("鸞")].join(",") === "234,97"); // U+9E1E
expect(() => {ms932Encoder.encode("\u9E1F")}).to.throw(Error, "EncodingError U+9E1F");
expect(() => {ms932Encoder.encode("\u9E20")}).to.throw(Error, "EncodingError U+9E20");
expect(() => {ms932Encoder.encode("\u9E21")}).to.throw(Error, "EncodingError U+9E21");
expect(() => {ms932Encoder.encode("\u9E22")}).to.throw(Error, "EncodingError U+9E22");
expect(() => {ms932Encoder.encode("\u9E23")}).to.throw(Error, "EncodingError U+9E23");
expect(() => {ms932Encoder.encode("\u9E24")}).to.throw(Error, "EncodingError U+9E24");
expect(() => {ms932Encoder.encode("\u9E25")}).to.throw(Error, "EncodingError U+9E25");
expect(() => {ms932Encoder.encode("\u9E26")}).to.throw(Error, "EncodingError U+9E26");
expect(() => {ms932Encoder.encode("\u9E27")}).to.throw(Error, "EncodingError U+9E27");
expect(() => {ms932Encoder.encode("\u9E28")}).to.throw(Error, "EncodingError U+9E28");
expect(() => {ms932Encoder.encode("\u9E29")}).to.throw(Error, "EncodingError U+9E29");
expect(() => {ms932Encoder.encode("\u9E2A")}).to.throw(Error, "EncodingError U+9E2A");
expect(() => {ms932Encoder.encode("\u9E2B")}).to.throw(Error, "EncodingError U+9E2B");
expect(() => {ms932Encoder.encode("\u9E2C")}).to.throw(Error, "EncodingError U+9E2C");
expect(() => {ms932Encoder.encode("\u9E2D")}).to.throw(Error, "EncodingError U+9E2D");
expect(() => {ms932Encoder.encode("\u9E2E")}).to.throw(Error, "EncodingError U+9E2E");
expect(() => {ms932Encoder.encode("\u9E2F")}).to.throw(Error, "EncodingError U+9E2F");
expect(() => {ms932Encoder.encode("\u9E30")}).to.throw(Error, "EncodingError U+9E30");
expect(() => {ms932Encoder.encode("\u9E31")}).to.throw(Error, "EncodingError U+9E31");
expect(() => {ms932Encoder.encode("\u9E32")}).to.throw(Error, "EncodingError U+9E32");
expect(() => {ms932Encoder.encode("\u9E33")}).to.throw(Error, "EncodingError U+9E33");
expect(() => {ms932Encoder.encode("\u9E34")}).to.throw(Error, "EncodingError U+9E34");
expect(() => {ms932Encoder.encode("\u9E35")}).to.throw(Error, "EncodingError U+9E35");
expect(() => {ms932Encoder.encode("\u9E36")}).to.throw(Error, "EncodingError U+9E36");
expect(() => {ms932Encoder.encode("\u9E37")}).to.throw(Error, "EncodingError U+9E37");
expect(() => {ms932Encoder.encode("\u9E38")}).to.throw(Error, "EncodingError U+9E38");
expect(() => {ms932Encoder.encode("\u9E39")}).to.throw(Error, "EncodingError U+9E39");
expect(() => {ms932Encoder.encode("\u9E3A")}).to.throw(Error, "EncodingError U+9E3A");
expect(() => {ms932Encoder.encode("\u9E3B")}).to.throw(Error, "EncodingError U+9E3B");
expect(() => {ms932Encoder.encode("\u9E3C")}).to.throw(Error, "EncodingError U+9E3C");
expect(() => {ms932Encoder.encode("\u9E3D")}).to.throw(Error, "EncodingError U+9E3D");
expect(() => {ms932Encoder.encode("\u9E3E")}).to.throw(Error, "EncodingError U+9E3E");
expect(() => {ms932Encoder.encode("\u9E3F")}).to.throw(Error, "EncodingError U+9E3F");
expect(() => {ms932Encoder.encode("\u9E40")}).to.throw(Error, "EncodingError U+9E40");
expect(() => {ms932Encoder.encode("\u9E41")}).to.throw(Error, "EncodingError U+9E41");
expect(() => {ms932Encoder.encode("\u9E42")}).to.throw(Error, "EncodingError U+9E42");
expect(() => {ms932Encoder.encode("\u9E43")}).to.throw(Error, "EncodingError U+9E43");
expect(() => {ms932Encoder.encode("\u9E44")}).to.throw(Error, "EncodingError U+9E44");
expect(() => {ms932Encoder.encode("\u9E45")}).to.throw(Error, "EncodingError U+9E45");
expect(() => {ms932Encoder.encode("\u9E46")}).to.throw(Error, "EncodingError U+9E46");
expect(() => {ms932Encoder.encode("\u9E47")}).to.throw(Error, "EncodingError U+9E47");
expect(() => {ms932Encoder.encode("\u9E48")}).to.throw(Error, "EncodingError U+9E48");
expect(() => {ms932Encoder.encode("\u9E49")}).to.throw(Error, "EncodingError U+9E49");
expect(() => {ms932Encoder.encode("\u9E4A")}).to.throw(Error, "EncodingError U+9E4A");
expect(() => {ms932Encoder.encode("\u9E4B")}).to.throw(Error, "EncodingError U+9E4B");
expect(() => {ms932Encoder.encode("\u9E4C")}).to.throw(Error, "EncodingError U+9E4C");
expect(() => {ms932Encoder.encode("\u9E4D")}).to.throw(Error, "EncodingError U+9E4D");
expect(() => {ms932Encoder.encode("\u9E4E")}).to.throw(Error, "EncodingError U+9E4E");
expect(() => {ms932Encoder.encode("\u9E4F")}).to.throw(Error, "EncodingError U+9E4F");
expect(() => {ms932Encoder.encode("\u9E50")}).to.throw(Error, "EncodingError U+9E50");
expect(() => {ms932Encoder.encode("\u9E51")}).to.throw(Error, "EncodingError U+9E51");
expect(() => {ms932Encoder.encode("\u9E52")}).to.throw(Error, "EncodingError U+9E52");
expect(() => {ms932Encoder.encode("\u9E53")}).to.throw(Error, "EncodingError U+9E53");
expect(() => {ms932Encoder.encode("\u9E54")}).to.throw(Error, "EncodingError U+9E54");
expect(() => {ms932Encoder.encode("\u9E55")}).to.throw(Error, "EncodingError U+9E55");
expect(() => {ms932Encoder.encode("\u9E56")}).to.throw(Error, "EncodingError U+9E56");
expect(() => {ms932Encoder.encode("\u9E57")}).to.throw(Error, "EncodingError U+9E57");
expect(() => {ms932Encoder.encode("\u9E58")}).to.throw(Error, "EncodingError U+9E58");
expect(() => {ms932Encoder.encode("\u9E59")}).to.throw(Error, "EncodingError U+9E59");
expect(() => {ms932Encoder.encode("\u9E5A")}).to.throw(Error, "EncodingError U+9E5A");
expect(() => {ms932Encoder.encode("\u9E5B")}).to.throw(Error, "EncodingError U+9E5B");
expect(() => {ms932Encoder.encode("\u9E5C")}).to.throw(Error, "EncodingError U+9E5C");
expect(() => {ms932Encoder.encode("\u9E5D")}).to.throw(Error, "EncodingError U+9E5D");
expect(() => {ms932Encoder.encode("\u9E5E")}).to.throw(Error, "EncodingError U+9E5E");
expect(() => {ms932Encoder.encode("\u9E5F")}).to.throw(Error, "EncodingError U+9E5F");
expect(() => {ms932Encoder.encode("\u9E60")}).to.throw(Error, "EncodingError U+9E60");
expect(() => {ms932Encoder.encode("\u9E61")}).to.throw(Error, "EncodingError U+9E61");
expect(() => {ms932Encoder.encode("\u9E62")}).to.throw(Error, "EncodingError U+9E62");
expect(() => {ms932Encoder.encode("\u9E63")}).to.throw(Error, "EncodingError U+9E63");
expect(() => {ms932Encoder.encode("\u9E64")}).to.throw(Error, "EncodingError U+9E64");
expect(() => {ms932Encoder.encode("\u9E65")}).to.throw(Error, "EncodingError U+9E65");
expect(() => {ms932Encoder.encode("\u9E66")}).to.throw(Error, "EncodingError U+9E66");
expect(() => {ms932Encoder.encode("\u9E67")}).to.throw(Error, "EncodingError U+9E67");
expect(() => {ms932Encoder.encode("\u9E68")}).to.throw(Error, "EncodingError U+9E68");
expect(() => {ms932Encoder.encode("\u9E69")}).to.throw(Error, "EncodingError U+9E69");
expect(() => {ms932Encoder.encode("\u9E6A")}).to.throw(Error, "EncodingError U+9E6A");
expect(() => {ms932Encoder.encode("\u9E6B")}).to.throw(Error, "EncodingError U+9E6B");
expect(() => {ms932Encoder.encode("\u9E6C")}).to.throw(Error, "EncodingError U+9E6C");
expect(() => {ms932Encoder.encode("\u9E6D")}).to.throw(Error, "EncodingError U+9E6D");
expect(() => {ms932Encoder.encode("\u9E6E")}).to.throw(Error, "EncodingError U+9E6E");
expect(() => {ms932Encoder.encode("\u9E6F")}).to.throw(Error, "EncodingError U+9E6F");
expect(() => {ms932Encoder.encode("\u9E70")}).to.throw(Error, "EncodingError U+9E70");
expect(() => {ms932Encoder.encode("\u9E71")}).to.throw(Error, "EncodingError U+9E71");
expect(() => {ms932Encoder.encode("\u9E72")}).to.throw(Error, "EncodingError U+9E72");
expect(() => {ms932Encoder.encode("\u9E73")}).to.throw(Error, "EncodingError U+9E73");
expect(() => {ms932Encoder.encode("\u9E74")}).to.throw(Error, "EncodingError U+9E74");
r = r && ([...ms932Encoder.encode("鹵")].join(",") === "234,98"); // U+9E75
expect(() => {ms932Encoder.encode("\u9E76")}).to.throw(Error, "EncodingError U+9E76");
expect(() => {ms932Encoder.encode("\u9E77")}).to.throw(Error, "EncodingError U+9E77");
r = r && ([...ms932Encoder.encode("鹸鹹")].join(",") === "140,178,234,99"); // U+9E78
expect(() => {ms932Encoder.encode("\u9E7A")}).to.throw(Error, "EncodingError U+9E7A");
expect(() => {ms932Encoder.encode("\u9E7B")}).to.throw(Error, "EncodingError U+9E7B");
expect(() => {ms932Encoder.encode("\u9E7C")}).to.throw(Error, "EncodingError U+9E7C");
r = r && ([...ms932Encoder.encode("鹽")].join(",") === "234,100"); // U+9E7D
expect(() => {ms932Encoder.encode("\u9E7E")}).to.throw(Error, "EncodingError U+9E7E");
r = r && ([...ms932Encoder.encode("鹿")].join(",") === "142,173"); // U+9E7F
expect(() => {ms932Encoder.encode("\u9E80")}).to.throw(Error, "EncodingError U+9E80");
r = r && ([...ms932Encoder.encode("麁")].join(",") === "234,101"); // U+9E81
expect(() => {ms932Encoder.encode("\u9E82")}).to.throw(Error, "EncodingError U+9E82");
expect(() => {ms932Encoder.encode("\u9E83")}).to.throw(Error, "EncodingError U+9E83");
expect(() => {ms932Encoder.encode("\u9E84")}).to.throw(Error, "EncodingError U+9E84");
expect(() => {ms932Encoder.encode("\u9E85")}).to.throw(Error, "EncodingError U+9E85");
expect(() => {ms932Encoder.encode("\u9E86")}).to.throw(Error, "EncodingError U+9E86");
expect(() => {ms932Encoder.encode("\u9E87")}).to.throw(Error, "EncodingError U+9E87");
r = r && ([...ms932Encoder.encode("麈")].join(",") === "234,102"); // U+9E88
expect(() => {ms932Encoder.encode("\u9E89")}).to.throw(Error, "EncodingError U+9E89");
expect(() => {ms932Encoder.encode("\u9E8A")}).to.throw(Error, "EncodingError U+9E8A");
r = r && ([...ms932Encoder.encode("麋麌")].join(",") === "234,103,234,104"); // U+9E8B
expect(() => {ms932Encoder.encode("\u9E8D")}).to.throw(Error, "EncodingError U+9E8D");
expect(() => {ms932Encoder.encode("\u9E8E")}).to.throw(Error, "EncodingError U+9E8E");
expect(() => {ms932Encoder.encode("\u9E8F")}).to.throw(Error, "EncodingError U+9E8F");
expect(() => {ms932Encoder.encode("\u9E90")}).to.throw(Error, "EncodingError U+9E90");
r = r && ([...ms932Encoder.encode("麑麒麓")].join(",") === "234,107,234,105,152,91"); // U+9E91
expect(() => {ms932Encoder.encode("\u9E94")}).to.throw(Error, "EncodingError U+9E94");
r = r && ([...ms932Encoder.encode("麕")].join(",") === "234,106"); // U+9E95
expect(() => {ms932Encoder.encode("\u9E96")}).to.throw(Error, "EncodingError U+9E96");
r = r && ([...ms932Encoder.encode("麗")].join(",") === "151,237"); // U+9E97
expect(() => {ms932Encoder.encode("\u9E98")}).to.throw(Error, "EncodingError U+9E98");
expect(() => {ms932Encoder.encode("\u9E99")}).to.throw(Error, "EncodingError U+9E99");
expect(() => {ms932Encoder.encode("\u9E9A")}).to.throw(Error, "EncodingError U+9E9A");
expect(() => {ms932Encoder.encode("\u9E9B")}).to.throw(Error, "EncodingError U+9E9B");
expect(() => {ms932Encoder.encode("\u9E9C")}).to.throw(Error, "EncodingError U+9E9C");
r = r && ([...ms932Encoder.encode("麝")].join(",") === "234,108"); // U+9E9D
expect(() => {ms932Encoder.encode("\u9E9E")}).to.throw(Error, "EncodingError U+9E9E");
r = r && ([...ms932Encoder.encode("麟")].join(",") === "151,217"); // U+9E9F
expect(() => {ms932Encoder.encode("\u9EA0")}).to.throw(Error, "EncodingError U+9EA0");
expect(() => {ms932Encoder.encode("\u9EA1")}).to.throw(Error, "EncodingError U+9EA1");
expect(() => {ms932Encoder.encode("\u9EA2")}).to.throw(Error, "EncodingError U+9EA2");
expect(() => {ms932Encoder.encode("\u9EA3")}).to.throw(Error, "EncodingError U+9EA3");
expect(() => {ms932Encoder.encode("\u9EA4")}).to.throw(Error, "EncodingError U+9EA4");
r = r && ([...ms932Encoder.encode("麥麦")].join(",") === "234,109,148,158"); // U+9EA5
expect(() => {ms932Encoder.encode("\u9EA7")}).to.throw(Error, "EncodingError U+9EA7");
expect(() => {ms932Encoder.encode("\u9EA8")}).to.throw(Error, "EncodingError U+9EA8");
r = r && ([...ms932Encoder.encode("麩麪")].join(",") === "234,110,234,112"); // U+9EA9
expect(() => {ms932Encoder.encode("\u9EAB")}).to.throw(Error, "EncodingError U+9EAB");
expect(() => {ms932Encoder.encode("\u9EAC")}).to.throw(Error, "EncodingError U+9EAC");
r = r && ([...ms932Encoder.encode("麭")].join(",") === "234,113"); // U+9EAD
expect(() => {ms932Encoder.encode("\u9EAE")}).to.throw(Error, "EncodingError U+9EAE");
expect(() => {ms932Encoder.encode("\u9EAF")}).to.throw(Error, "EncodingError U+9EAF");
expect(() => {ms932Encoder.encode("\u9EB0")}).to.throw(Error, "EncodingError U+9EB0");
expect(() => {ms932Encoder.encode("\u9EB1")}).to.throw(Error, "EncodingError U+9EB1");
expect(() => {ms932Encoder.encode("\u9EB2")}).to.throw(Error, "EncodingError U+9EB2");
expect(() => {ms932Encoder.encode("\u9EB3")}).to.throw(Error, "EncodingError U+9EB3");
expect(() => {ms932Encoder.encode("\u9EB4")}).to.throw(Error, "EncodingError U+9EB4");
expect(() => {ms932Encoder.encode("\u9EB5")}).to.throw(Error, "EncodingError U+9EB5");
expect(() => {ms932Encoder.encode("\u9EB6")}).to.throw(Error, "EncodingError U+9EB6");
expect(() => {ms932Encoder.encode("\u9EB7")}).to.throw(Error, "EncodingError U+9EB7");
r = r && ([...ms932Encoder.encode("麸麹麺麻麼")].join(",") === "234,111,141,141,150,203,150,131,155,245"); // U+9EB8
expect(() => {ms932Encoder.encode("\u9EBD")}).to.throw(Error, "EncodingError U+9EBD");
r = r && ([...ms932Encoder.encode("麾麿")].join(",") === "159,128,150,155"); // U+9EBE
expect(() => {ms932Encoder.encode("\u9EC0")}).to.throw(Error, "EncodingError U+9EC0");
expect(() => {ms932Encoder.encode("\u9EC1")}).to.throw(Error, "EncodingError U+9EC1");
expect(() => {ms932Encoder.encode("\u9EC2")}).to.throw(Error, "EncodingError U+9EC2");
expect(() => {ms932Encoder.encode("\u9EC3")}).to.throw(Error, "EncodingError U+9EC3");
r = r && ([...ms932Encoder.encode("黄")].join(",") === "137,169"); // U+9EC4
expect(() => {ms932Encoder.encode("\u9EC5")}).to.throw(Error, "EncodingError U+9EC5");
expect(() => {ms932Encoder.encode("\u9EC6")}).to.throw(Error, "EncodingError U+9EC6");
expect(() => {ms932Encoder.encode("\u9EC7")}).to.throw(Error, "EncodingError U+9EC7");
expect(() => {ms932Encoder.encode("\u9EC8")}).to.throw(Error, "EncodingError U+9EC8");
expect(() => {ms932Encoder.encode("\u9EC9")}).to.throw(Error, "EncodingError U+9EC9");
expect(() => {ms932Encoder.encode("\u9ECA")}).to.throw(Error, "EncodingError U+9ECA");
expect(() => {ms932Encoder.encode("\u9ECB")}).to.throw(Error, "EncodingError U+9ECB");
r = r && ([...ms932Encoder.encode("黌黍黎黏黐黑黒")].join(",") === "234,115,139,111,234,116,234,117,234,118,252,75,141,149"); // U+9ECC
expect(() => {ms932Encoder.encode("\u9ED3")}).to.throw(Error, "EncodingError U+9ED3");
r = r && ([...ms932Encoder.encode("黔")].join(",") === "234,119"); // U+9ED4
expect(() => {ms932Encoder.encode("\u9ED5")}).to.throw(Error, "EncodingError U+9ED5");
expect(() => {ms932Encoder.encode("\u9ED6")}).to.throw(Error, "EncodingError U+9ED6");
expect(() => {ms932Encoder.encode("\u9ED7")}).to.throw(Error, "EncodingError U+9ED7");
r = r && ([...ms932Encoder.encode("默黙")].join(",") === "224,210,150,217"); // U+9ED8
expect(() => {ms932Encoder.encode("\u9EDA")}).to.throw(Error, "EncodingError U+9EDA");
r = r && ([...ms932Encoder.encode("黛黜黝點")].join(",") === "145,225,234,120,234,122,234,121"); // U+9EDB
expect(() => {ms932Encoder.encode("\u9EDF")}).to.throw(Error, "EncodingError U+9EDF");
r = r && ([...ms932Encoder.encode("黠")].join(",") === "234,123"); // U+9EE0
expect(() => {ms932Encoder.encode("\u9EE1")}).to.throw(Error, "EncodingError U+9EE1");
expect(() => {ms932Encoder.encode("\u9EE2")}).to.throw(Error, "EncodingError U+9EE2");
expect(() => {ms932Encoder.encode("\u9EE3")}).to.throw(Error, "EncodingError U+9EE3");
expect(() => {ms932Encoder.encode("\u9EE4")}).to.throw(Error, "EncodingError U+9EE4");
r = r && ([...ms932Encoder.encode("黥")].join(",") === "234,124"); // U+9EE5
expect(() => {ms932Encoder.encode("\u9EE6")}).to.throw(Error, "EncodingError U+9EE6");
expect(() => {ms932Encoder.encode("\u9EE7")}).to.throw(Error, "EncodingError U+9EE7");
r = r && ([...ms932Encoder.encode("黨")].join(",") === "234,125"); // U+9EE8
expect(() => {ms932Encoder.encode("\u9EE9")}).to.throw(Error, "EncodingError U+9EE9");
expect(() => {ms932Encoder.encode("\u9EEA")}).to.throw(Error, "EncodingError U+9EEA");
expect(() => {ms932Encoder.encode("\u9EEB")}).to.throw(Error, "EncodingError U+9EEB");
expect(() => {ms932Encoder.encode("\u9EEC")}).to.throw(Error, "EncodingError U+9EEC");
expect(() => {ms932Encoder.encode("\u9EED")}).to.throw(Error, "EncodingError U+9EED");
expect(() => {ms932Encoder.encode("\u9EEE")}).to.throw(Error, "EncodingError U+9EEE");
r = r && ([...ms932Encoder.encode("黯")].join(",") === "234,126"); // U+9EEF
expect(() => {ms932Encoder.encode("\u9EF0")}).to.throw(Error, "EncodingError U+9EF0");
expect(() => {ms932Encoder.encode("\u9EF1")}).to.throw(Error, "EncodingError U+9EF1");
expect(() => {ms932Encoder.encode("\u9EF2")}).to.throw(Error, "EncodingError U+9EF2");
expect(() => {ms932Encoder.encode("\u9EF3")}).to.throw(Error, "EncodingError U+9EF3");
r = r && ([...ms932Encoder.encode("黴")].join(",") === "234,128"); // U+9EF4
expect(() => {ms932Encoder.encode("\u9EF5")}).to.throw(Error, "EncodingError U+9EF5");
r = r && ([...ms932Encoder.encode("黶黷")].join(",") === "234,129,234,130"); // U+9EF6
expect(() => {ms932Encoder.encode("\u9EF8")}).to.throw(Error, "EncodingError U+9EF8");
r = r && ([...ms932Encoder.encode("黹")].join(",") === "234,131"); // U+9EF9
expect(() => {ms932Encoder.encode("\u9EFA")}).to.throw(Error, "EncodingError U+9EFA");
r = r && ([...ms932Encoder.encode("黻黼黽")].join(",") === "234,132,234,133,234,134"); // U+9EFB
expect(() => {ms932Encoder.encode("\u9EFE")}).to.throw(Error, "EncodingError U+9EFE");
expect(() => {ms932Encoder.encode("\u9EFF")}).to.throw(Error, "EncodingError U+9EFF");
expect(() => {ms932Encoder.encode("\u9F00")}).to.throw(Error, "EncodingError U+9F00");
expect(() => {ms932Encoder.encode("\u9F01")}).to.throw(Error, "EncodingError U+9F01");
expect(() => {ms932Encoder.encode("\u9F02")}).to.throw(Error, "EncodingError U+9F02");
expect(() => {ms932Encoder.encode("\u9F03")}).to.throw(Error, "EncodingError U+9F03");
expect(() => {ms932Encoder.encode("\u9F04")}).to.throw(Error, "EncodingError U+9F04");
expect(() => {ms932Encoder.encode("\u9F05")}).to.throw(Error, "EncodingError U+9F05");
expect(() => {ms932Encoder.encode("\u9F06")}).to.throw(Error, "EncodingError U+9F06");
r = r && ([...ms932Encoder.encode("鼇鼈")].join(",") === "234,135,234,136"); // U+9F07
expect(() => {ms932Encoder.encode("\u9F09")}).to.throw(Error, "EncodingError U+9F09");
expect(() => {ms932Encoder.encode("\u9F0A")}).to.throw(Error, "EncodingError U+9F0A");
expect(() => {ms932Encoder.encode("\u9F0B")}).to.throw(Error, "EncodingError U+9F0B");
expect(() => {ms932Encoder.encode("\u9F0C")}).to.throw(Error, "EncodingError U+9F0C");
expect(() => {ms932Encoder.encode("\u9F0D")}).to.throw(Error, "EncodingError U+9F0D");
r = r && ([...ms932Encoder.encode("鼎")].join(",") === "147,67"); // U+9F0E
expect(() => {ms932Encoder.encode("\u9F0F")}).to.throw(Error, "EncodingError U+9F0F");
expect(() => {ms932Encoder.encode("\u9F10")}).to.throw(Error, "EncodingError U+9F10");
expect(() => {ms932Encoder.encode("\u9F11")}).to.throw(Error, "EncodingError U+9F11");
expect(() => {ms932Encoder.encode("\u9F12")}).to.throw(Error, "EncodingError U+9F12");
r = r && ([...ms932Encoder.encode("鼓")].join(",") === "140,219"); // U+9F13
expect(() => {ms932Encoder.encode("\u9F14")}).to.throw(Error, "EncodingError U+9F14");
r = r && ([...ms932Encoder.encode("鼕")].join(",") === "234,138"); // U+9F15
expect(() => {ms932Encoder.encode("\u9F16")}).to.throw(Error, "EncodingError U+9F16");
expect(() => {ms932Encoder.encode("\u9F17")}).to.throw(Error, "EncodingError U+9F17");
expect(() => {ms932Encoder.encode("\u9F18")}).to.throw(Error, "EncodingError U+9F18");
expect(() => {ms932Encoder.encode("\u9F19")}).to.throw(Error, "EncodingError U+9F19");
expect(() => {ms932Encoder.encode("\u9F1A")}).to.throw(Error, "EncodingError U+9F1A");
expect(() => {ms932Encoder.encode("\u9F1B")}).to.throw(Error, "EncodingError U+9F1B");
expect(() => {ms932Encoder.encode("\u9F1C")}).to.throw(Error, "EncodingError U+9F1C");
expect(() => {ms932Encoder.encode("\u9F1D")}).to.throw(Error, "EncodingError U+9F1D");
expect(() => {ms932Encoder.encode("\u9F1E")}).to.throw(Error, "EncodingError U+9F1E");
expect(() => {ms932Encoder.encode("\u9F1F")}).to.throw(Error, "EncodingError U+9F1F");
r = r && ([...ms932Encoder.encode("鼠鼡")].join(",") === "145,108,234,139"); // U+9F20
expect(() => {ms932Encoder.encode("\u9F22")}).to.throw(Error, "EncodingError U+9F22");
expect(() => {ms932Encoder.encode("\u9F23")}).to.throw(Error, "EncodingError U+9F23");
expect(() => {ms932Encoder.encode("\u9F24")}).to.throw(Error, "EncodingError U+9F24");
expect(() => {ms932Encoder.encode("\u9F25")}).to.throw(Error, "EncodingError U+9F25");
expect(() => {ms932Encoder.encode("\u9F26")}).to.throw(Error, "EncodingError U+9F26");
expect(() => {ms932Encoder.encode("\u9F27")}).to.throw(Error, "EncodingError U+9F27");
expect(() => {ms932Encoder.encode("\u9F28")}).to.throw(Error, "EncodingError U+9F28");
expect(() => {ms932Encoder.encode("\u9F29")}).to.throw(Error, "EncodingError U+9F29");
expect(() => {ms932Encoder.encode("\u9F2A")}).to.throw(Error, "EncodingError U+9F2A");
expect(() => {ms932Encoder.encode("\u9F2B")}).to.throw(Error, "EncodingError U+9F2B");
r = r && ([...ms932Encoder.encode("鼬")].join(",") === "234,140"); // U+9F2C
expect(() => {ms932Encoder.encode("\u9F2D")}).to.throw(Error, "EncodingError U+9F2D");
expect(() => {ms932Encoder.encode("\u9F2E")}).to.throw(Error, "EncodingError U+9F2E");
expect(() => {ms932Encoder.encode("\u9F2F")}).to.throw(Error, "EncodingError U+9F2F");
expect(() => {ms932Encoder.encode("\u9F30")}).to.throw(Error, "EncodingError U+9F30");
expect(() => {ms932Encoder.encode("\u9F31")}).to.throw(Error, "EncodingError U+9F31");
expect(() => {ms932Encoder.encode("\u9F32")}).to.throw(Error, "EncodingError U+9F32");
expect(() => {ms932Encoder.encode("\u9F33")}).to.throw(Error, "EncodingError U+9F33");
expect(() => {ms932Encoder.encode("\u9F34")}).to.throw(Error, "EncodingError U+9F34");
expect(() => {ms932Encoder.encode("\u9F35")}).to.throw(Error, "EncodingError U+9F35");
expect(() => {ms932Encoder.encode("\u9F36")}).to.throw(Error, "EncodingError U+9F36");
expect(() => {ms932Encoder.encode("\u9F37")}).to.throw(Error, "EncodingError U+9F37");
expect(() => {ms932Encoder.encode("\u9F38")}).to.throw(Error, "EncodingError U+9F38");
expect(() => {ms932Encoder.encode("\u9F39")}).to.throw(Error, "EncodingError U+9F39");
expect(() => {ms932Encoder.encode("\u9F3A")}).to.throw(Error, "EncodingError U+9F3A");
r = r && ([...ms932Encoder.encode("鼻")].join(",") === "149,64"); // U+9F3B
expect(() => {ms932Encoder.encode("\u9F3C")}).to.throw(Error, "EncodingError U+9F3C");
expect(() => {ms932Encoder.encode("\u9F3D")}).to.throw(Error, "EncodingError U+9F3D");
r = r && ([...ms932Encoder.encode("鼾")].join(",") === "234,141"); // U+9F3E
expect(() => {ms932Encoder.encode("\u9F3F")}).to.throw(Error, "EncodingError U+9F3F");
expect(() => {ms932Encoder.encode("\u9F40")}).to.throw(Error, "EncodingError U+9F40");
expect(() => {ms932Encoder.encode("\u9F41")}).to.throw(Error, "EncodingError U+9F41");
expect(() => {ms932Encoder.encode("\u9F42")}).to.throw(Error, "EncodingError U+9F42");
expect(() => {ms932Encoder.encode("\u9F43")}).to.throw(Error, "EncodingError U+9F43");
expect(() => {ms932Encoder.encode("\u9F44")}).to.throw(Error, "EncodingError U+9F44");
expect(() => {ms932Encoder.encode("\u9F45")}).to.throw(Error, "EncodingError U+9F45");
expect(() => {ms932Encoder.encode("\u9F46")}).to.throw(Error, "EncodingError U+9F46");
expect(() => {ms932Encoder.encode("\u9F47")}).to.throw(Error, "EncodingError U+9F47");
expect(() => {ms932Encoder.encode("\u9F48")}).to.throw(Error, "EncodingError U+9F48");
expect(() => {ms932Encoder.encode("\u9F49")}).to.throw(Error, "EncodingError U+9F49");
r = r && ([...ms932Encoder.encode("齊齋")].join(",") === "234,142,226,86"); // U+9F4A
expect(() => {ms932Encoder.encode("\u9F4C")}).to.throw(Error, "EncodingError U+9F4C");
expect(() => {ms932Encoder.encode("\u9F4D")}).to.throw(Error, "EncodingError U+9F4D");
r = r && ([...ms932Encoder.encode("齎齏")].join(",") === "230,216,232,235"); // U+9F4E
expect(() => {ms932Encoder.encode("\u9F50")}).to.throw(Error, "EncodingError U+9F50");
expect(() => {ms932Encoder.encode("\u9F51")}).to.throw(Error, "EncodingError U+9F51");
r = r && ([...ms932Encoder.encode("齒")].join(",") === "234,143"); // U+9F52
expect(() => {ms932Encoder.encode("\u9F53")}).to.throw(Error, "EncodingError U+9F53");
r = r && ([...ms932Encoder.encode("齔")].join(",") === "234,144"); // U+9F54
expect(() => {ms932Encoder.encode("\u9F55")}).to.throw(Error, "EncodingError U+9F55");
expect(() => {ms932Encoder.encode("\u9F56")}).to.throw(Error, "EncodingError U+9F56");
expect(() => {ms932Encoder.encode("\u9F57")}).to.throw(Error, "EncodingError U+9F57");
expect(() => {ms932Encoder.encode("\u9F58")}).to.throw(Error, "EncodingError U+9F58");
expect(() => {ms932Encoder.encode("\u9F59")}).to.throw(Error, "EncodingError U+9F59");
expect(() => {ms932Encoder.encode("\u9F5A")}).to.throw(Error, "EncodingError U+9F5A");
expect(() => {ms932Encoder.encode("\u9F5B")}).to.throw(Error, "EncodingError U+9F5B");
expect(() => {ms932Encoder.encode("\u9F5C")}).to.throw(Error, "EncodingError U+9F5C");
expect(() => {ms932Encoder.encode("\u9F5D")}).to.throw(Error, "EncodingError U+9F5D");
expect(() => {ms932Encoder.encode("\u9F5E")}).to.throw(Error, "EncodingError U+9F5E");
r = r && ([...ms932Encoder.encode("齟齠齡齢齣")].join(",") === "234,146,234,147,234,148,151,238,234,145"); // U+9F5F
expect(() => {ms932Encoder.encode("\u9F64")}).to.throw(Error, "EncodingError U+9F64");
expect(() => {ms932Encoder.encode("\u9F65")}).to.throw(Error, "EncodingError U+9F65");
r = r && ([...ms932Encoder.encode("齦齧")].join(",") === "234,149,234,150"); // U+9F66
expect(() => {ms932Encoder.encode("\u9F68")}).to.throw(Error, "EncodingError U+9F68");
expect(() => {ms932Encoder.encode("\u9F69")}).to.throw(Error, "EncodingError U+9F69");
r = r && ([...ms932Encoder.encode("齪")].join(",") === "234,152"); // U+9F6A
expect(() => {ms932Encoder.encode("\u9F6B")}).to.throw(Error, "EncodingError U+9F6B");
r = r && ([...ms932Encoder.encode("齬")].join(",") === "234,151"); // U+9F6C
expect(() => {ms932Encoder.encode("\u9F6D")}).to.throw(Error, "EncodingError U+9F6D");
expect(() => {ms932Encoder.encode("\u9F6E")}).to.throw(Error, "EncodingError U+9F6E");
expect(() => {ms932Encoder.encode("\u9F6F")}).to.throw(Error, "EncodingError U+9F6F");
expect(() => {ms932Encoder.encode("\u9F70")}).to.throw(Error, "EncodingError U+9F70");
expect(() => {ms932Encoder.encode("\u9F71")}).to.throw(Error, "EncodingError U+9F71");
r = r && ([...ms932Encoder.encode("齲")].join(",") === "234,154"); // U+9F72
expect(() => {ms932Encoder.encode("\u9F73")}).to.throw(Error, "EncodingError U+9F73");
expect(() => {ms932Encoder.encode("\u9F74")}).to.throw(Error, "EncodingError U+9F74");
expect(() => {ms932Encoder.encode("\u9F75")}).to.throw(Error, "EncodingError U+9F75");
r = r && ([...ms932Encoder.encode("齶齷")].join(",") === "234,155,234,153"); // U+9F76
expect(() => {ms932Encoder.encode("\u9F78")}).to.throw(Error, "EncodingError U+9F78");
expect(() => {ms932Encoder.encode("\u9F79")}).to.throw(Error, "EncodingError U+9F79");
expect(() => {ms932Encoder.encode("\u9F7A")}).to.throw(Error, "EncodingError U+9F7A");
expect(() => {ms932Encoder.encode("\u9F7B")}).to.throw(Error, "EncodingError U+9F7B");
expect(() => {ms932Encoder.encode("\u9F7C")}).to.throw(Error, "EncodingError U+9F7C");
expect(() => {ms932Encoder.encode("\u9F7D")}).to.throw(Error, "EncodingError U+9F7D");
expect(() => {ms932Encoder.encode("\u9F7E")}).to.throw(Error, "EncodingError U+9F7E");
expect(() => {ms932Encoder.encode("\u9F7F")}).to.throw(Error, "EncodingError U+9F7F");
expect(() => {ms932Encoder.encode("\u9F80")}).to.throw(Error, "EncodingError U+9F80");
expect(() => {ms932Encoder.encode("\u9F81")}).to.throw(Error, "EncodingError U+9F81");
expect(() => {ms932Encoder.encode("\u9F82")}).to.throw(Error, "EncodingError U+9F82");
expect(() => {ms932Encoder.encode("\u9F83")}).to.throw(Error, "EncodingError U+9F83");
expect(() => {ms932Encoder.encode("\u9F84")}).to.throw(Error, "EncodingError U+9F84");
expect(() => {ms932Encoder.encode("\u9F85")}).to.throw(Error, "EncodingError U+9F85");
expect(() => {ms932Encoder.encode("\u9F86")}).to.throw(Error, "EncodingError U+9F86");
expect(() => {ms932Encoder.encode("\u9F87")}).to.throw(Error, "EncodingError U+9F87");
expect(() => {ms932Encoder.encode("\u9F88")}).to.throw(Error, "EncodingError U+9F88");
expect(() => {ms932Encoder.encode("\u9F89")}).to.throw(Error, "EncodingError U+9F89");
expect(() => {ms932Encoder.encode("\u9F8A")}).to.throw(Error, "EncodingError U+9F8A");
expect(() => {ms932Encoder.encode("\u9F8B")}).to.throw(Error, "EncodingError U+9F8B");
expect(() => {ms932Encoder.encode("\u9F8C")}).to.throw(Error, "EncodingError U+9F8C");
r = r && ([...ms932Encoder.encode("龍")].join(",") === "151,180"); // U+9F8D
expect(() => {ms932Encoder.encode("\u9F8E")}).to.throw(Error, "EncodingError U+9F8E");
expect(() => {ms932Encoder.encode("\u9F8F")}).to.throw(Error, "EncodingError U+9F8F");
expect(() => {ms932Encoder.encode("\u9F90")}).to.throw(Error, "EncodingError U+9F90");
expect(() => {ms932Encoder.encode("\u9F91")}).to.throw(Error, "EncodingError U+9F91");
expect(() => {ms932Encoder.encode("\u9F92")}).to.throw(Error, "EncodingError U+9F92");
expect(() => {ms932Encoder.encode("\u9F93")}).to.throw(Error, "EncodingError U+9F93");
expect(() => {ms932Encoder.encode("\u9F94")}).to.throw(Error, "EncodingError U+9F94");
r = r && ([...ms932Encoder.encode("龕")].join(",") === "234,156"); // U+9F95
expect(() => {ms932Encoder.encode("\u9F96")}).to.throw(Error, "EncodingError U+9F96");
expect(() => {ms932Encoder.encode("\u9F97")}).to.throw(Error, "EncodingError U+9F97");
expect(() => {ms932Encoder.encode("\u9F98")}).to.throw(Error, "EncodingError U+9F98");
expect(() => {ms932Encoder.encode("\u9F99")}).to.throw(Error, "EncodingError U+9F99");
expect(() => {ms932Encoder.encode("\u9F9A")}).to.throw(Error, "EncodingError U+9F9A");
expect(() => {ms932Encoder.encode("\u9F9B")}).to.throw(Error, "EncodingError U+9F9B");
r = r && ([...ms932Encoder.encode("龜龝")].join(",") === "234,157,226,115"); // U+9F9C
expect(() => {ms932Encoder.encode("\u9F9E")}).to.throw(Error, "EncodingError U+9F9E");
expect(() => {ms932Encoder.encode("\u9F9F")}).to.throw(Error, "EncodingError U+9F9F");
r = r && ([...ms932Encoder.encode("龠")].join(",") === "234,158"); // U+9FA0
expect(() => {ms932Encoder.encode("\u9FA1")}).to.throw(Error, "EncodingError U+9FA1");
expect(() => {ms932Encoder.encode("\u9FA2")}).to.throw(Error, "EncodingError U+9FA2");
expect(() => {ms932Encoder.encode("\u9FA3")}).to.throw(Error, "EncodingError U+9FA3");
expect(() => {ms932Encoder.encode("\u9FA4")}).to.throw(Error, "EncodingError U+9FA4");
expect(() => {ms932Encoder.encode("\u9FA5")}).to.throw(Error, "EncodingError U+9FA5");
expect(() => {ms932Encoder.encode("\u9FA6")}).to.throw(Error, "EncodingError U+9FA6");
expect(() => {ms932Encoder.encode("\u9FA7")}).to.throw(Error, "EncodingError U+9FA7");
expect(() => {ms932Encoder.encode("\u9FA8")}).to.throw(Error, "EncodingError U+9FA8");
expect(() => {ms932Encoder.encode("\u9FA9")}).to.throw(Error, "EncodingError U+9FA9");
expect(() => {ms932Encoder.encode("\u9FAA")}).to.throw(Error, "EncodingError U+9FAA");
expect(() => {ms932Encoder.encode("\u9FAB")}).to.throw(Error, "EncodingError U+9FAB");
expect(() => {ms932Encoder.encode("\u9FAC")}).to.throw(Error, "EncodingError U+9FAC");
expect(() => {ms932Encoder.encode("\u9FAD")}).to.throw(Error, "EncodingError U+9FAD");
expect(() => {ms932Encoder.encode("\u9FAE")}).to.throw(Error, "EncodingError U+9FAE");
expect(() => {ms932Encoder.encode("\u9FAF")}).to.throw(Error, "EncodingError U+9FAF");
expect(() => {ms932Encoder.encode("\u9FB0")}).to.throw(Error, "EncodingError U+9FB0");
expect(() => {ms932Encoder.encode("\u9FB1")}).to.throw(Error, "EncodingError U+9FB1");
expect(() => {ms932Encoder.encode("\u9FB2")}).to.throw(Error, "EncodingError U+9FB2");
expect(() => {ms932Encoder.encode("\u9FB3")}).to.throw(Error, "EncodingError U+9FB3");
expect(() => {ms932Encoder.encode("\u9FB4")}).to.throw(Error, "EncodingError U+9FB4");
expect(() => {ms932Encoder.encode("\u9FB5")}).to.throw(Error, "EncodingError U+9FB5");
expect(() => {ms932Encoder.encode("\u9FB6")}).to.throw(Error, "EncodingError U+9FB6");
expect(() => {ms932Encoder.encode("\u9FB7")}).to.throw(Error, "EncodingError U+9FB7");
expect(() => {ms932Encoder.encode("\u9FB8")}).to.throw(Error, "EncodingError U+9FB8");
expect(() => {ms932Encoder.encode("\u9FB9")}).to.throw(Error, "EncodingError U+9FB9");
expect(() => {ms932Encoder.encode("\u9FBA")}).to.throw(Error, "EncodingError U+9FBA");
expect(() => {ms932Encoder.encode("\u9FBB")}).to.throw(Error, "EncodingError U+9FBB");
expect(() => {ms932Encoder.encode("\u9FBC")}).to.throw(Error, "EncodingError U+9FBC");
expect(() => {ms932Encoder.encode("\u9FBD")}).to.throw(Error, "EncodingError U+9FBD");
expect(() => {ms932Encoder.encode("\u9FBE")}).to.throw(Error, "EncodingError U+9FBE");
expect(() => {ms932Encoder.encode("\u9FBF")}).to.throw(Error, "EncodingError U+9FBF");
expect(() => {ms932Encoder.encode("\u9FC0")}).to.throw(Error, "EncodingError U+9FC0");
expect(() => {ms932Encoder.encode("\u9FC1")}).to.throw(Error, "EncodingError U+9FC1");
expect(() => {ms932Encoder.encode("\u9FC2")}).to.throw(Error, "EncodingError U+9FC2");
expect(() => {ms932Encoder.encode("\u9FC3")}).to.throw(Error, "EncodingError U+9FC3");
expect(() => {ms932Encoder.encode("\u9FC4")}).to.throw(Error, "EncodingError U+9FC4");
expect(() => {ms932Encoder.encode("\u9FC5")}).to.throw(Error, "EncodingError U+9FC5");
expect(() => {ms932Encoder.encode("\u9FC6")}).to.throw(Error, "EncodingError U+9FC6");
expect(() => {ms932Encoder.encode("\u9FC7")}).to.throw(Error, "EncodingError U+9FC7");
expect(() => {ms932Encoder.encode("\u9FC8")}).to.throw(Error, "EncodingError U+9FC8");
expect(() => {ms932Encoder.encode("\u9FC9")}).to.throw(Error, "EncodingError U+9FC9");
expect(() => {ms932Encoder.encode("\u9FCA")}).to.throw(Error, "EncodingError U+9FCA");
expect(() => {ms932Encoder.encode("\u9FCB")}).to.throw(Error, "EncodingError U+9FCB");
expect(() => {ms932Encoder.encode("\u9FCC")}).to.throw(Error, "EncodingError U+9FCC");
expect(() => {ms932Encoder.encode("\u9FCD")}).to.throw(Error, "EncodingError U+9FCD");
expect(() => {ms932Encoder.encode("\u9FCE")}).to.throw(Error, "EncodingError U+9FCE");
expect(() => {ms932Encoder.encode("\u9FCF")}).to.throw(Error, "EncodingError U+9FCF");
expect(() => {ms932Encoder.encode("\u9FD0")}).to.throw(Error, "EncodingError U+9FD0");
expect(() => {ms932Encoder.encode("\u9FD1")}).to.throw(Error, "EncodingError U+9FD1");
expect(() => {ms932Encoder.encode("\u9FD2")}).to.throw(Error, "EncodingError U+9FD2");
expect(() => {ms932Encoder.encode("\u9FD3")}).to.throw(Error, "EncodingError U+9FD3");
expect(() => {ms932Encoder.encode("\u9FD4")}).to.throw(Error, "EncodingError U+9FD4");
expect(() => {ms932Encoder.encode("\u9FD5")}).to.throw(Error, "EncodingError U+9FD5");
expect(() => {ms932Encoder.encode("\u9FD6")}).to.throw(Error, "EncodingError U+9FD6");
expect(() => {ms932Encoder.encode("\u9FD7")}).to.throw(Error, "EncodingError U+9FD7");
expect(() => {ms932Encoder.encode("\u9FD8")}).to.throw(Error, "EncodingError U+9FD8");
expect(() => {ms932Encoder.encode("\u9FD9")}).to.throw(Error, "EncodingError U+9FD9");
expect(() => {ms932Encoder.encode("\u9FDA")}).to.throw(Error, "EncodingError U+9FDA");
expect(() => {ms932Encoder.encode("\u9FDB")}).to.throw(Error, "EncodingError U+9FDB");
expect(() => {ms932Encoder.encode("\u9FDC")}).to.throw(Error, "EncodingError U+9FDC");
expect(() => {ms932Encoder.encode("\u9FDD")}).to.throw(Error, "EncodingError U+9FDD");
expect(() => {ms932Encoder.encode("\u9FDE")}).to.throw(Error, "EncodingError U+9FDE");
expect(() => {ms932Encoder.encode("\u9FDF")}).to.throw(Error, "EncodingError U+9FDF");
expect(() => {ms932Encoder.encode("\u9FE0")}).to.throw(Error, "EncodingError U+9FE0");
expect(() => {ms932Encoder.encode("\u9FE1")}).to.throw(Error, "EncodingError U+9FE1");
expect(() => {ms932Encoder.encode("\u9FE2")}).to.throw(Error, "EncodingError U+9FE2");
expect(() => {ms932Encoder.encode("\u9FE3")}).to.throw(Error, "EncodingError U+9FE3");
expect(() => {ms932Encoder.encode("\u9FE4")}).to.throw(Error, "EncodingError U+9FE4");
expect(() => {ms932Encoder.encode("\u9FE5")}).to.throw(Error, "EncodingError U+9FE5");
expect(() => {ms932Encoder.encode("\u9FE6")}).to.throw(Error, "EncodingError U+9FE6");
expect(() => {ms932Encoder.encode("\u9FE7")}).to.throw(Error, "EncodingError U+9FE7");
expect(() => {ms932Encoder.encode("\u9FE8")}).to.throw(Error, "EncodingError U+9FE8");
expect(() => {ms932Encoder.encode("\u9FE9")}).to.throw(Error, "EncodingError U+9FE9");
expect(() => {ms932Encoder.encode("\u9FEA")}).to.throw(Error, "EncodingError U+9FEA");
expect(() => {ms932Encoder.encode("\u9FEB")}).to.throw(Error, "EncodingError U+9FEB");
expect(() => {ms932Encoder.encode("\u9FEC")}).to.throw(Error, "EncodingError U+9FEC");
expect(() => {ms932Encoder.encode("\u9FED")}).to.throw(Error, "EncodingError U+9FED");
expect(() => {ms932Encoder.encode("\u9FEE")}).to.throw(Error, "EncodingError U+9FEE");
expect(() => {ms932Encoder.encode("\u9FEF")}).to.throw(Error, "EncodingError U+9FEF");
expect(() => {ms932Encoder.encode("\u9FF0")}).to.throw(Error, "EncodingError U+9FF0");
expect(() => {ms932Encoder.encode("\u9FF1")}).to.throw(Error, "EncodingError U+9FF1");
expect(() => {ms932Encoder.encode("\u9FF2")}).to.throw(Error, "EncodingError U+9FF2");
expect(() => {ms932Encoder.encode("\u9FF3")}).to.throw(Error, "EncodingError U+9FF3");
expect(() => {ms932Encoder.encode("\u9FF4")}).to.throw(Error, "EncodingError U+9FF4");
expect(() => {ms932Encoder.encode("\u9FF5")}).to.throw(Error, "EncodingError U+9FF5");
expect(() => {ms932Encoder.encode("\u9FF6")}).to.throw(Error, "EncodingError U+9FF6");
expect(() => {ms932Encoder.encode("\u9FF7")}).to.throw(Error, "EncodingError U+9FF7");
expect(() => {ms932Encoder.encode("\u9FF8")}).to.throw(Error, "EncodingError U+9FF8");
expect(() => {ms932Encoder.encode("\u9FF9")}).to.throw(Error, "EncodingError U+9FF9");
expect(() => {ms932Encoder.encode("\u9FFA")}).to.throw(Error, "EncodingError U+9FFA");
expect(() => {ms932Encoder.encode("\u9FFB")}).to.throw(Error, "EncodingError U+9FFB");
expect(() => {ms932Encoder.encode("\u9FFC")}).to.throw(Error, "EncodingError U+9FFC");
expect(() => {ms932Encoder.encode("\u9FFD")}).to.throw(Error, "EncodingError U+9FFD");
expect(() => {ms932Encoder.encode("\u9FFE")}).to.throw(Error, "EncodingError U+9FFE");
expect(() => {ms932Encoder.encode("\u9FFF")}).to.throw(Error, "EncodingError U+9FFF");

expect(r).to.equal(true);

  });

});
