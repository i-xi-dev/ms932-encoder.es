import { expect } from '@esm-bundle/chai';
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 7", () => {

  it("encode(string) - U+6000-U+63FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u6000")}).to.throw(Error, "EncodingError U+6000");
expect(() => {ms932Encoder.encode("\u6001")}).to.throw(Error, "EncodingError U+6001");
expect(() => {ms932Encoder.encode("\u6002")}).to.throw(Error, "EncodingError U+6002");
expect(() => {ms932Encoder.encode("\u6003")}).to.throw(Error, "EncodingError U+6003");
expect(() => {ms932Encoder.encode("\u6004")}).to.throw(Error, "EncodingError U+6004");
expect(() => {ms932Encoder.encode("\u6005")}).to.throw(Error, "EncodingError U+6005");
expect(() => {ms932Encoder.encode("\u6006")}).to.throw(Error, "EncodingError U+6006");
expect(() => {ms932Encoder.encode("\u6007")}).to.throw(Error, "EncodingError U+6007");
expect(() => {ms932Encoder.encode("\u6008")}).to.throw(Error, "EncodingError U+6008");
expect(() => {ms932Encoder.encode("\u6009")}).to.throw(Error, "EncodingError U+6009");
expect(() => {ms932Encoder.encode("\u600A")}).to.throw(Error, "EncodingError U+600A");
expect(() => {ms932Encoder.encode("\u600B")}).to.throw(Error, "EncodingError U+600B");
expect(() => {ms932Encoder.encode("\u600C")}).to.throw(Error, "EncodingError U+600C");
expect(() => {ms932Encoder.encode("\u600D")}).to.throw(Error, "EncodingError U+600D");
r = r && ([...ms932Encoder.encode("怎怏怐")].join(",") === "156,131,156,137,156,129"); // U+600E
expect(() => {ms932Encoder.encode("\u6011")}).to.throw(Error, "EncodingError U+6011");
r = r && ([...ms932Encoder.encode("怒")].join(",") === "147,123"); // U+6012
expect(() => {ms932Encoder.encode("\u6013")}).to.throw(Error, "EncodingError U+6013");
expect(() => {ms932Encoder.encode("\u6014")}).to.throw(Error, "EncodingError U+6014");
r = r && ([...ms932Encoder.encode("怕怖")].join(",") === "156,134,149,124"); // U+6015
expect(() => {ms932Encoder.encode("\u6017")}).to.throw(Error, "EncodingError U+6017");
expect(() => {ms932Encoder.encode("\u6018")}).to.throw(Error, "EncodingError U+6018");
r = r && ([...ms932Encoder.encode("怙")].join(",") === "156,128"); // U+6019
expect(() => {ms932Encoder.encode("\u601A")}).to.throw(Error, "EncodingError U+601A");
r = r && ([...ms932Encoder.encode("怛怜思")].join(",") === "156,133,151,229,142,118"); // U+601B
expect(() => {ms932Encoder.encode("\u601E")}).to.throw(Error, "EncodingError U+601E");
expect(() => {ms932Encoder.encode("\u601F")}).to.throw(Error, "EncodingError U+601F");
r = r && ([...ms932Encoder.encode("怠怡")].join(",") === "145,211,156,125"); // U+6020
expect(() => {ms932Encoder.encode("\u6022")}).to.throw(Error, "EncodingError U+6022");
expect(() => {ms932Encoder.encode("\u6023")}).to.throw(Error, "EncodingError U+6023");
expect(() => {ms932Encoder.encode("\u6024")}).to.throw(Error, "EncodingError U+6024");
r = r && ([...ms932Encoder.encode("急怦性怨怩怪怫")].join(",") === "139,125,156,136,144,171,137,133,156,130,137,246,156,135"); // U+6025
expect(() => {ms932Encoder.encode("\u602C")}).to.throw(Error, "EncodingError U+602C");
expect(() => {ms932Encoder.encode("\u602D")}).to.throw(Error, "EncodingError U+602D");
expect(() => {ms932Encoder.encode("\u602E")}).to.throw(Error, "EncodingError U+602E");
r = r && ([...ms932Encoder.encode("怯")].join(",") === "139,175"); // U+602F
expect(() => {ms932Encoder.encode("\u6030")}).to.throw(Error, "EncodingError U+6030");
r = r && ([...ms932Encoder.encode("怱")].join(",") === "156,132"); // U+6031
expect(() => {ms932Encoder.encode("\u6032")}).to.throw(Error, "EncodingError U+6032");
expect(() => {ms932Encoder.encode("\u6033")}).to.throw(Error, "EncodingError U+6033");
expect(() => {ms932Encoder.encode("\u6034")}).to.throw(Error, "EncodingError U+6034");
expect(() => {ms932Encoder.encode("\u6035")}).to.throw(Error, "EncodingError U+6035");
expect(() => {ms932Encoder.encode("\u6036")}).to.throw(Error, "EncodingError U+6036");
expect(() => {ms932Encoder.encode("\u6037")}).to.throw(Error, "EncodingError U+6037");
expect(() => {ms932Encoder.encode("\u6038")}).to.throw(Error, "EncodingError U+6038");
expect(() => {ms932Encoder.encode("\u6039")}).to.throw(Error, "EncodingError U+6039");
r = r && ([...ms932Encoder.encode("怺")].join(",") === "156,138"); // U+603A
expect(() => {ms932Encoder.encode("\u603B")}).to.throw(Error, "EncodingError U+603B");
expect(() => {ms932Encoder.encode("\u603C")}).to.throw(Error, "EncodingError U+603C");
expect(() => {ms932Encoder.encode("\u603D")}).to.throw(Error, "EncodingError U+603D");
expect(() => {ms932Encoder.encode("\u603E")}).to.throw(Error, "EncodingError U+603E");
expect(() => {ms932Encoder.encode("\u603F")}).to.throw(Error, "EncodingError U+603F");
expect(() => {ms932Encoder.encode("\u6040")}).to.throw(Error, "EncodingError U+6040");
r = r && ([...ms932Encoder.encode("恁恂恃")].join(",") === "156,140,156,150,156,148"); // U+6041
expect(() => {ms932Encoder.encode("\u6044")}).to.throw(Error, "EncodingError U+6044");
expect(() => {ms932Encoder.encode("\u6045")}).to.throw(Error, "EncodingError U+6045");
r = r && ([...ms932Encoder.encode("恆")].join(",") === "156,145"); // U+6046
expect(() => {ms932Encoder.encode("\u6047")}).to.throw(Error, "EncodingError U+6047");
expect(() => {ms932Encoder.encode("\u6048")}).to.throw(Error, "EncodingError U+6048");
expect(() => {ms932Encoder.encode("\u6049")}).to.throw(Error, "EncodingError U+6049");
r = r && ([...ms932Encoder.encode("恊恋")].join(",") === "156,144,151,246"); // U+604A
expect(() => {ms932Encoder.encode("\u604C")}).to.throw(Error, "EncodingError U+604C");
r = r && ([...ms932Encoder.encode("恍")].join(",") === "156,146"); // U+604D
expect(() => {ms932Encoder.encode("\u604E")}).to.throw(Error, "EncodingError U+604E");
expect(() => {ms932Encoder.encode("\u604F")}).to.throw(Error, "EncodingError U+604F");
r = r && ([...ms932Encoder.encode("恐")].join(",") === "139,176"); // U+6050
expect(() => {ms932Encoder.encode("\u6051")}).to.throw(Error, "EncodingError U+6051");
r = r && ([...ms932Encoder.encode("恒")].join(",") === "141,80"); // U+6052
expect(() => {ms932Encoder.encode("\u6053")}).to.throw(Error, "EncodingError U+6053");
expect(() => {ms932Encoder.encode("\u6054")}).to.throw(Error, "EncodingError U+6054");
r = r && ([...ms932Encoder.encode("恕")].join(",") === "143,154"); // U+6055
expect(() => {ms932Encoder.encode("\u6056")}).to.throw(Error, "EncodingError U+6056");
expect(() => {ms932Encoder.encode("\u6057")}).to.throw(Error, "EncodingError U+6057");
expect(() => {ms932Encoder.encode("\u6058")}).to.throw(Error, "EncodingError U+6058");
r = r && ([...ms932Encoder.encode("恙恚")].join(",") === "156,153,156,139"); // U+6059
expect(() => {ms932Encoder.encode("\u605B")}).to.throw(Error, "EncodingError U+605B");
expect(() => {ms932Encoder.encode("\u605C")}).to.throw(Error, "EncodingError U+605C");
r = r && ([...ms932Encoder.encode("恝")].join(",") === "250,188"); // U+605D
expect(() => {ms932Encoder.encode("\u605E")}).to.throw(Error, "EncodingError U+605E");
r = r && ([...ms932Encoder.encode("恟恠")].join(",") === "156,143,156,126"); // U+605F
expect(() => {ms932Encoder.encode("\u6061")}).to.throw(Error, "EncodingError U+6061");
r = r && ([...ms932Encoder.encode("恢恣恤恥")].join(",") === "137,248,156,147,156,149,146,112"); // U+6062
expect(() => {ms932Encoder.encode("\u6066")}).to.throw(Error, "EncodingError U+6066");
expect(() => {ms932Encoder.encode("\u6067")}).to.throw(Error, "EncodingError U+6067");
r = r && ([...ms932Encoder.encode("恨恩恪恫恬恭")].join(",") === "141,166,137,182,156,141,156,152,156,151,139,177"); // U+6068
expect(() => {ms932Encoder.encode("\u606E")}).to.throw(Error, "EncodingError U+606E");
r = r && ([...ms932Encoder.encode("息恰")].join(",") === "145,167,138,134"); // U+606F
expect(() => {ms932Encoder.encode("\u6071")}).to.throw(Error, "EncodingError U+6071");
expect(() => {ms932Encoder.encode("\u6072")}).to.throw(Error, "EncodingError U+6072");
expect(() => {ms932Encoder.encode("\u6073")}).to.throw(Error, "EncodingError U+6073");
expect(() => {ms932Encoder.encode("\u6074")}).to.throw(Error, "EncodingError U+6074");
r = r && ([...ms932Encoder.encode("恵")].join(",") === "140,98"); // U+6075
expect(() => {ms932Encoder.encode("\u6076")}).to.throw(Error, "EncodingError U+6076");
r = r && ([...ms932Encoder.encode("恷")].join(",") === "156,142"); // U+6077
expect(() => {ms932Encoder.encode("\u6078")}).to.throw(Error, "EncodingError U+6078");
expect(() => {ms932Encoder.encode("\u6079")}).to.throw(Error, "EncodingError U+6079");
expect(() => {ms932Encoder.encode("\u607A")}).to.throw(Error, "EncodingError U+607A");
expect(() => {ms932Encoder.encode("\u607B")}).to.throw(Error, "EncodingError U+607B");
expect(() => {ms932Encoder.encode("\u607C")}).to.throw(Error, "EncodingError U+607C");
expect(() => {ms932Encoder.encode("\u607D")}).to.throw(Error, "EncodingError U+607D");
expect(() => {ms932Encoder.encode("\u607E")}).to.throw(Error, "EncodingError U+607E");
expect(() => {ms932Encoder.encode("\u607F")}).to.throw(Error, "EncodingError U+607F");
expect(() => {ms932Encoder.encode("\u6080")}).to.throw(Error, "EncodingError U+6080");
r = r && ([...ms932Encoder.encode("悁")].join(",") === "156,154"); // U+6081
expect(() => {ms932Encoder.encode("\u6082")}).to.throw(Error, "EncodingError U+6082");
r = r && ([...ms932Encoder.encode("悃悄悅")].join(",") === "156,157,156,159,250,189"); // U+6083
expect(() => {ms932Encoder.encode("\u6086")}).to.throw(Error, "EncodingError U+6086");
expect(() => {ms932Encoder.encode("\u6087")}).to.throw(Error, "EncodingError U+6087");
expect(() => {ms932Encoder.encode("\u6088")}).to.throw(Error, "EncodingError U+6088");
r = r && ([...ms932Encoder.encode("悉悊悋悌悍")].join(",") === "142,187,250,190,156,165,146,238,156,155"); // U+6089
expect(() => {ms932Encoder.encode("\u608E")}).to.throw(Error, "EncodingError U+608E");
expect(() => {ms932Encoder.encode("\u608F")}).to.throw(Error, "EncodingError U+608F");
expect(() => {ms932Encoder.encode("\u6090")}).to.throw(Error, "EncodingError U+6090");
expect(() => {ms932Encoder.encode("\u6091")}).to.throw(Error, "EncodingError U+6091");
r = r && ([...ms932Encoder.encode("悒")].join(",") === "156,163"); // U+6092
expect(() => {ms932Encoder.encode("\u6093")}).to.throw(Error, "EncodingError U+6093");
r = r && ([...ms932Encoder.encode("悔")].join(",") === "137,247"); // U+6094
expect(() => {ms932Encoder.encode("\u6095")}).to.throw(Error, "EncodingError U+6095");
r = r && ([...ms932Encoder.encode("悖悗")].join(",") === "156,161,156,162"); // U+6096
expect(() => {ms932Encoder.encode("\u6098")}).to.throw(Error, "EncodingError U+6098");
expect(() => {ms932Encoder.encode("\u6099")}).to.throw(Error, "EncodingError U+6099");
r = r && ([...ms932Encoder.encode("悚悛")].join(",") === "156,158,156,160"); // U+609A
expect(() => {ms932Encoder.encode("\u609C")}).to.throw(Error, "EncodingError U+609C");
expect(() => {ms932Encoder.encode("\u609D")}).to.throw(Error, "EncodingError U+609D");
expect(() => {ms932Encoder.encode("\u609E")}).to.throw(Error, "EncodingError U+609E");
r = r && ([...ms932Encoder.encode("悟悠")].join(",") === "140,229,151,73"); // U+609F
expect(() => {ms932Encoder.encode("\u60A1")}).to.throw(Error, "EncodingError U+60A1");
expect(() => {ms932Encoder.encode("\u60A2")}).to.throw(Error, "EncodingError U+60A2");
r = r && ([...ms932Encoder.encode("患")].join(",") === "138,179"); // U+60A3
expect(() => {ms932Encoder.encode("\u60A4")}).to.throw(Error, "EncodingError U+60A4");
expect(() => {ms932Encoder.encode("\u60A5")}).to.throw(Error, "EncodingError U+60A5");
r = r && ([...ms932Encoder.encode("悦悧")].join(",") === "137,120,156,164"); // U+60A6
expect(() => {ms932Encoder.encode("\u60A8")}).to.throw(Error, "EncodingError U+60A8");
r = r && ([...ms932Encoder.encode("悩悪")].join(",") === "148,89,136,171"); // U+60A9
expect(() => {ms932Encoder.encode("\u60AB")}).to.throw(Error, "EncodingError U+60AB");
expect(() => {ms932Encoder.encode("\u60AC")}).to.throw(Error, "EncodingError U+60AC");
expect(() => {ms932Encoder.encode("\u60AD")}).to.throw(Error, "EncodingError U+60AD");
expect(() => {ms932Encoder.encode("\u60AE")}).to.throw(Error, "EncodingError U+60AE");
expect(() => {ms932Encoder.encode("\u60AF")}).to.throw(Error, "EncodingError U+60AF");
expect(() => {ms932Encoder.encode("\u60B0")}).to.throw(Error, "EncodingError U+60B0");
expect(() => {ms932Encoder.encode("\u60B1")}).to.throw(Error, "EncodingError U+60B1");
r = r && ([...ms932Encoder.encode("悲悳悴悵悶")].join(",") === "148,223,156,123,156,170,156,174,150,227"); // U+60B2
expect(() => {ms932Encoder.encode("\u60B7")}).to.throw(Error, "EncodingError U+60B7");
r = r && ([...ms932Encoder.encode("悸")].join(",") === "156,167"); // U+60B8
expect(() => {ms932Encoder.encode("\u60B9")}).to.throw(Error, "EncodingError U+60B9");
expect(() => {ms932Encoder.encode("\u60BA")}).to.throw(Error, "EncodingError U+60BA");
expect(() => {ms932Encoder.encode("\u60BB")}).to.throw(Error, "EncodingError U+60BB");
r = r && ([...ms932Encoder.encode("悼悽")].join(",") === "147,137,156,172"); // U+60BC
expect(() => {ms932Encoder.encode("\u60BE")}).to.throw(Error, "EncodingError U+60BE");
expect(() => {ms932Encoder.encode("\u60BF")}).to.throw(Error, "EncodingError U+60BF");
expect(() => {ms932Encoder.encode("\u60C0")}).to.throw(Error, "EncodingError U+60C0");
expect(() => {ms932Encoder.encode("\u60C1")}).to.throw(Error, "EncodingError U+60C1");
expect(() => {ms932Encoder.encode("\u60C2")}).to.throw(Error, "EncodingError U+60C2");
expect(() => {ms932Encoder.encode("\u60C3")}).to.throw(Error, "EncodingError U+60C3");
expect(() => {ms932Encoder.encode("\u60C4")}).to.throw(Error, "EncodingError U+60C4");
r = r && ([...ms932Encoder.encode("情惆惇")].join(",") === "143,238,156,173,147,213"); // U+60C5
expect(() => {ms932Encoder.encode("\u60C8")}).to.throw(Error, "EncodingError U+60C8");
expect(() => {ms932Encoder.encode("\u60C9")}).to.throw(Error, "EncodingError U+60C9");
expect(() => {ms932Encoder.encode("\u60CA")}).to.throw(Error, "EncodingError U+60CA");
expect(() => {ms932Encoder.encode("\u60CB")}).to.throw(Error, "EncodingError U+60CB");
expect(() => {ms932Encoder.encode("\u60CC")}).to.throw(Error, "EncodingError U+60CC");
expect(() => {ms932Encoder.encode("\u60CD")}).to.throw(Error, "EncodingError U+60CD");
expect(() => {ms932Encoder.encode("\u60CE")}).to.throw(Error, "EncodingError U+60CE");
expect(() => {ms932Encoder.encode("\u60CF")}).to.throw(Error, "EncodingError U+60CF");
expect(() => {ms932Encoder.encode("\u60D0")}).to.throw(Error, "EncodingError U+60D0");
r = r && ([...ms932Encoder.encode("惑")].join(",") === "152,102"); // U+60D1
expect(() => {ms932Encoder.encode("\u60D2")}).to.throw(Error, "EncodingError U+60D2");
r = r && ([...ms932Encoder.encode("惓")].join(",") === "156,169"); // U+60D3
expect(() => {ms932Encoder.encode("\u60D4")}).to.throw(Error, "EncodingError U+60D4");
r = r && ([...ms932Encoder.encode("惕")].join(",") === "250,192"); // U+60D5
expect(() => {ms932Encoder.encode("\u60D6")}).to.throw(Error, "EncodingError U+60D6");
expect(() => {ms932Encoder.encode("\u60D7")}).to.throw(Error, "EncodingError U+60D7");
r = r && ([...ms932Encoder.encode("惘")].join(",") === "156,175"); // U+60D8
expect(() => {ms932Encoder.encode("\u60D9")}).to.throw(Error, "EncodingError U+60D9");
r = r && ([...ms932Encoder.encode("惚")].join(",") === "141,155"); // U+60DA
expect(() => {ms932Encoder.encode("\u60DB")}).to.throw(Error, "EncodingError U+60DB");
r = r && ([...ms932Encoder.encode("惜")].join(",") === "144,201"); // U+60DC
expect(() => {ms932Encoder.encode("\u60DD")}).to.throw(Error, "EncodingError U+60DD");
r = r && ([...ms932Encoder.encode("惞惟惠惡")].join(",") === "250,191,136,210,156,168,156,166"); // U+60DE
expect(() => {ms932Encoder.encode("\u60E2")}).to.throw(Error, "EncodingError U+60E2");
r = r && ([...ms932Encoder.encode("惣")].join(",") === "145,121"); // U+60E3
expect(() => {ms932Encoder.encode("\u60E4")}).to.throw(Error, "EncodingError U+60E4");
expect(() => {ms932Encoder.encode("\u60E5")}).to.throw(Error, "EncodingError U+60E5");
expect(() => {ms932Encoder.encode("\u60E6")}).to.throw(Error, "EncodingError U+60E6");
r = r && ([...ms932Encoder.encode("惧惨")].join(",") === "156,156,142,83"); // U+60E7
expect(() => {ms932Encoder.encode("\u60E9")}).to.throw(Error, "EncodingError U+60E9");
expect(() => {ms932Encoder.encode("\u60EA")}).to.throw(Error, "EncodingError U+60EA");
expect(() => {ms932Encoder.encode("\u60EB")}).to.throw(Error, "EncodingError U+60EB");
expect(() => {ms932Encoder.encode("\u60EC")}).to.throw(Error, "EncodingError U+60EC");
expect(() => {ms932Encoder.encode("\u60ED")}).to.throw(Error, "EncodingError U+60ED");
expect(() => {ms932Encoder.encode("\u60EE")}).to.throw(Error, "EncodingError U+60EE");
expect(() => {ms932Encoder.encode("\u60EF")}).to.throw(Error, "EncodingError U+60EF");
r = r && ([...ms932Encoder.encode("惰惱惲想惴")].join(",") === "145,196,156,187,250,194,145,122,156,182"); // U+60F0
expect(() => {ms932Encoder.encode("\u60F5")}).to.throw(Error, "EncodingError U+60F5");
r = r && ([...ms932Encoder.encode("惶惷")].join(",") === "156,179,156,180"); // U+60F6
expect(() => {ms932Encoder.encode("\u60F8")}).to.throw(Error, "EncodingError U+60F8");
r = r && ([...ms932Encoder.encode("惹惺惻")].join(",") === "142,228,156,183,156,186"); // U+60F9
expect(() => {ms932Encoder.encode("\u60FC")}).to.throw(Error, "EncodingError U+60FC");
expect(() => {ms932Encoder.encode("\u60FD")}).to.throw(Error, "EncodingError U+60FD");
expect(() => {ms932Encoder.encode("\u60FE")}).to.throw(Error, "EncodingError U+60FE");
expect(() => {ms932Encoder.encode("\u60FF")}).to.throw(Error, "EncodingError U+60FF");
r = r && ([...ms932Encoder.encode("愀愁")].join(",") === "156,181,143,68"); // U+6100
expect(() => {ms932Encoder.encode("\u6102")}).to.throw(Error, "EncodingError U+6102");
r = r && ([...ms932Encoder.encode("愃")].join(",") === "156,184"); // U+6103
expect(() => {ms932Encoder.encode("\u6104")}).to.throw(Error, "EncodingError U+6104");
expect(() => {ms932Encoder.encode("\u6105")}).to.throw(Error, "EncodingError U+6105");
r = r && ([...ms932Encoder.encode("愆")].join(",") === "156,178"); // U+6106
expect(() => {ms932Encoder.encode("\u6107")}).to.throw(Error, "EncodingError U+6107");
r = r && ([...ms932Encoder.encode("愈愉")].join(",") === "150,250,150,249"); // U+6108
expect(() => {ms932Encoder.encode("\u610A")}).to.throw(Error, "EncodingError U+610A");
expect(() => {ms932Encoder.encode("\u610B")}).to.throw(Error, "EncodingError U+610B");
expect(() => {ms932Encoder.encode("\u610C")}).to.throw(Error, "EncodingError U+610C");
r = r && ([...ms932Encoder.encode("愍愎意")].join(",") === "156,188,156,189,136,211"); // U+610D
expect(() => {ms932Encoder.encode("\u6110")}).to.throw(Error, "EncodingError U+6110");
r = r && ([...ms932Encoder.encode("愑")].join(",") === "250,195"); // U+6111
expect(() => {ms932Encoder.encode("\u6112")}).to.throw(Error, "EncodingError U+6112");
expect(() => {ms932Encoder.encode("\u6113")}).to.throw(Error, "EncodingError U+6113");
expect(() => {ms932Encoder.encode("\u6114")}).to.throw(Error, "EncodingError U+6114");
r = r && ([...ms932Encoder.encode("愕")].join(",") === "156,177"); // U+6115
expect(() => {ms932Encoder.encode("\u6116")}).to.throw(Error, "EncodingError U+6116");
expect(() => {ms932Encoder.encode("\u6117")}).to.throw(Error, "EncodingError U+6117");
expect(() => {ms932Encoder.encode("\u6118")}).to.throw(Error, "EncodingError U+6118");
expect(() => {ms932Encoder.encode("\u6119")}).to.throw(Error, "EncodingError U+6119");
r = r && ([...ms932Encoder.encode("愚愛")].join(",") === "139,240,136,164"); // U+611A
expect(() => {ms932Encoder.encode("\u611C")}).to.throw(Error, "EncodingError U+611C");
expect(() => {ms932Encoder.encode("\u611D")}).to.throw(Error, "EncodingError U+611D");
expect(() => {ms932Encoder.encode("\u611E")}).to.throw(Error, "EncodingError U+611E");
r = r && ([...ms932Encoder.encode("感愠愡")].join(",") === "138,180,250,193,156,185"); // U+611F
expect(() => {ms932Encoder.encode("\u6122")}).to.throw(Error, "EncodingError U+6122");
expect(() => {ms932Encoder.encode("\u6123")}).to.throw(Error, "EncodingError U+6123");
expect(() => {ms932Encoder.encode("\u6124")}).to.throw(Error, "EncodingError U+6124");
expect(() => {ms932Encoder.encode("\u6125")}).to.throw(Error, "EncodingError U+6125");
expect(() => {ms932Encoder.encode("\u6126")}).to.throw(Error, "EncodingError U+6126");
r = r && ([...ms932Encoder.encode("愧愨")].join(",") === "156,193,156,192"); // U+6127
expect(() => {ms932Encoder.encode("\u6129")}).to.throw(Error, "EncodingError U+6129");
expect(() => {ms932Encoder.encode("\u612A")}).to.throw(Error, "EncodingError U+612A");
expect(() => {ms932Encoder.encode("\u612B")}).to.throw(Error, "EncodingError U+612B");
r = r && ([...ms932Encoder.encode("愬")].join(",") === "156,197"); // U+612C
expect(() => {ms932Encoder.encode("\u612D")}).to.throw(Error, "EncodingError U+612D");
expect(() => {ms932Encoder.encode("\u612E")}).to.throw(Error, "EncodingError U+612E");
expect(() => {ms932Encoder.encode("\u612F")}).to.throw(Error, "EncodingError U+612F");
r = r && ([...ms932Encoder.encode("愰")].join(",") === "250,197"); // U+6130
expect(() => {ms932Encoder.encode("\u6131")}).to.throw(Error, "EncodingError U+6131");
expect(() => {ms932Encoder.encode("\u6132")}).to.throw(Error, "EncodingError U+6132");
expect(() => {ms932Encoder.encode("\u6133")}).to.throw(Error, "EncodingError U+6133");
r = r && ([...ms932Encoder.encode("愴")].join(",") === "156,198"); // U+6134
expect(() => {ms932Encoder.encode("\u6135")}).to.throw(Error, "EncodingError U+6135");
expect(() => {ms932Encoder.encode("\u6136")}).to.throw(Error, "EncodingError U+6136");
r = r && ([...ms932Encoder.encode("愷")].join(",") === "250,196"); // U+6137
expect(() => {ms932Encoder.encode("\u6138")}).to.throw(Error, "EncodingError U+6138");
expect(() => {ms932Encoder.encode("\u6139")}).to.throw(Error, "EncodingError U+6139");
expect(() => {ms932Encoder.encode("\u613A")}).to.throw(Error, "EncodingError U+613A");
expect(() => {ms932Encoder.encode("\u613B")}).to.throw(Error, "EncodingError U+613B");
r = r && ([...ms932Encoder.encode("愼愽愾愿")].join(",") === "156,196,156,199,156,191,156,195"); // U+613C
expect(() => {ms932Encoder.encode("\u6140")}).to.throw(Error, "EncodingError U+6140");
expect(() => {ms932Encoder.encode("\u6141")}).to.throw(Error, "EncodingError U+6141");
r = r && ([...ms932Encoder.encode("慂")].join(",") === "156,200"); // U+6142
expect(() => {ms932Encoder.encode("\u6143")}).to.throw(Error, "EncodingError U+6143");
r = r && ([...ms932Encoder.encode("慄")].join(",") === "156,201"); // U+6144
expect(() => {ms932Encoder.encode("\u6145")}).to.throw(Error, "EncodingError U+6145");
expect(() => {ms932Encoder.encode("\u6146")}).to.throw(Error, "EncodingError U+6146");
r = r && ([...ms932Encoder.encode("慇慈")].join(",") === "156,190,142,156"); // U+6147
expect(() => {ms932Encoder.encode("\u6149")}).to.throw(Error, "EncodingError U+6149");
r = r && ([...ms932Encoder.encode("慊態慌慍慎")].join(",") === "156,194,145,212,141,81,156,176,144,84"); // U+614A
expect(() => {ms932Encoder.encode("\u614F")}).to.throw(Error, "EncodingError U+614F");
expect(() => {ms932Encoder.encode("\u6150")}).to.throw(Error, "EncodingError U+6150");
expect(() => {ms932Encoder.encode("\u6151")}).to.throw(Error, "EncodingError U+6151");
expect(() => {ms932Encoder.encode("\u6152")}).to.throw(Error, "EncodingError U+6152");
r = r && ([...ms932Encoder.encode("慓")].join(",") === "156,214"); // U+6153
expect(() => {ms932Encoder.encode("\u6154")}).to.throw(Error, "EncodingError U+6154");
r = r && ([...ms932Encoder.encode("慕")].join(",") === "149,231"); // U+6155
expect(() => {ms932Encoder.encode("\u6156")}).to.throw(Error, "EncodingError U+6156");
expect(() => {ms932Encoder.encode("\u6157")}).to.throw(Error, "EncodingError U+6157");
r = r && ([...ms932Encoder.encode("慘慙慚")].join(",") === "156,204,156,205,156,206"); // U+6158
expect(() => {ms932Encoder.encode("\u615B")}).to.throw(Error, "EncodingError U+615B");
expect(() => {ms932Encoder.encode("\u615C")}).to.throw(Error, "EncodingError U+615C");
r = r && ([...ms932Encoder.encode("慝")].join(",") === "156,213"); // U+615D
expect(() => {ms932Encoder.encode("\u615E")}).to.throw(Error, "EncodingError U+615E");
r = r && ([...ms932Encoder.encode("慟")].join(",") === "156,212"); // U+615F
expect(() => {ms932Encoder.encode("\u6160")}).to.throw(Error, "EncodingError U+6160");
expect(() => {ms932Encoder.encode("\u6161")}).to.throw(Error, "EncodingError U+6161");
r = r && ([...ms932Encoder.encode("慢慣")].join(",") === "150,157,138,181"); // U+6162
expect(() => {ms932Encoder.encode("\u6164")}).to.throw(Error, "EncodingError U+6164");
r = r && ([...ms932Encoder.encode("慥")].join(",") === "156,210"); // U+6165
expect(() => {ms932Encoder.encode("\u6166")}).to.throw(Error, "EncodingError U+6166");
r = r && ([...ms932Encoder.encode("慧慨")].join(",") === "140,100,138,83"); // U+6167
expect(() => {ms932Encoder.encode("\u6169")}).to.throw(Error, "EncodingError U+6169");
expect(() => {ms932Encoder.encode("\u616A")}).to.throw(Error, "EncodingError U+616A");
r = r && ([...ms932Encoder.encode("慫")].join(",") === "156,207"); // U+616B
expect(() => {ms932Encoder.encode("\u616C")}).to.throw(Error, "EncodingError U+616C");
expect(() => {ms932Encoder.encode("\u616D")}).to.throw(Error, "EncodingError U+616D");
r = r && ([...ms932Encoder.encode("慮慯慰慱")].join(",") === "151,182,156,209,136,212,156,211"); // U+616E
expect(() => {ms932Encoder.encode("\u6172")}).to.throw(Error, "EncodingError U+6172");
r = r && ([...ms932Encoder.encode("慳慴慵慶慷")].join(",") === "156,202,156,208,156,215,140,99,156,203"); // U+6173
expect(() => {ms932Encoder.encode("\u6178")}).to.throw(Error, "EncodingError U+6178");
expect(() => {ms932Encoder.encode("\u6179")}).to.throw(Error, "EncodingError U+6179");
expect(() => {ms932Encoder.encode("\u617A")}).to.throw(Error, "EncodingError U+617A");
expect(() => {ms932Encoder.encode("\u617B")}).to.throw(Error, "EncodingError U+617B");
expect(() => {ms932Encoder.encode("\u617C")}).to.throw(Error, "EncodingError U+617C");
expect(() => {ms932Encoder.encode("\u617D")}).to.throw(Error, "EncodingError U+617D");
r = r && ([...ms932Encoder.encode("慾")].join(",") === "151,124"); // U+617E
expect(() => {ms932Encoder.encode("\u617F")}).to.throw(Error, "EncodingError U+617F");
expect(() => {ms932Encoder.encode("\u6180")}).to.throw(Error, "EncodingError U+6180");
expect(() => {ms932Encoder.encode("\u6181")}).to.throw(Error, "EncodingError U+6181");
r = r && ([...ms932Encoder.encode("憂")].join(",") === "151,74"); // U+6182
expect(() => {ms932Encoder.encode("\u6183")}).to.throw(Error, "EncodingError U+6183");
expect(() => {ms932Encoder.encode("\u6184")}).to.throw(Error, "EncodingError U+6184");
expect(() => {ms932Encoder.encode("\u6185")}).to.throw(Error, "EncodingError U+6185");
expect(() => {ms932Encoder.encode("\u6186")}).to.throw(Error, "EncodingError U+6186");
r = r && ([...ms932Encoder.encode("憇")].join(",") === "156,218"); // U+6187
expect(() => {ms932Encoder.encode("\u6188")}).to.throw(Error, "EncodingError U+6188");
expect(() => {ms932Encoder.encode("\u6189")}).to.throw(Error, "EncodingError U+6189");
r = r && ([...ms932Encoder.encode("憊")].join(",") === "156,222"); // U+618A
expect(() => {ms932Encoder.encode("\u618B")}).to.throw(Error, "EncodingError U+618B");
expect(() => {ms932Encoder.encode("\u618C")}).to.throw(Error, "EncodingError U+618C");
expect(() => {ms932Encoder.encode("\u618D")}).to.throw(Error, "EncodingError U+618D");
r = r && ([...ms932Encoder.encode("憎")].join(",") === "145,158"); // U+618E
expect(() => {ms932Encoder.encode("\u618F")}).to.throw(Error, "EncodingError U+618F");
r = r && ([...ms932Encoder.encode("憐憑")].join(",") === "151,247,156,223"); // U+6190
expect(() => {ms932Encoder.encode("\u6192")}).to.throw(Error, "EncodingError U+6192");
expect(() => {ms932Encoder.encode("\u6193")}).to.throw(Error, "EncodingError U+6193");
r = r && ([...ms932Encoder.encode("憔")].join(",") === "156,220"); // U+6194
expect(() => {ms932Encoder.encode("\u6195")}).to.throw(Error, "EncodingError U+6195");
r = r && ([...ms932Encoder.encode("憖")].join(",") === "156,217"); // U+6196
expect(() => {ms932Encoder.encode("\u6197")}).to.throw(Error, "EncodingError U+6197");
r = r && ([...ms932Encoder.encode("憘憙憚")].join(",") === "250,198,156,216,156,221"); // U+6198
expect(() => {ms932Encoder.encode("\u619B")}).to.throw(Error, "EncodingError U+619B");
expect(() => {ms932Encoder.encode("\u619C")}).to.throw(Error, "EncodingError U+619C");
expect(() => {ms932Encoder.encode("\u619D")}).to.throw(Error, "EncodingError U+619D");
expect(() => {ms932Encoder.encode("\u619E")}).to.throw(Error, "EncodingError U+619E");
expect(() => {ms932Encoder.encode("\u619F")}).to.throw(Error, "EncodingError U+619F");
expect(() => {ms932Encoder.encode("\u61A0")}).to.throw(Error, "EncodingError U+61A0");
expect(() => {ms932Encoder.encode("\u61A1")}).to.throw(Error, "EncodingError U+61A1");
expect(() => {ms932Encoder.encode("\u61A2")}).to.throw(Error, "EncodingError U+61A2");
expect(() => {ms932Encoder.encode("\u61A3")}).to.throw(Error, "EncodingError U+61A3");
r = r && ([...ms932Encoder.encode("憤")].join(",") === "149,174"); // U+61A4
expect(() => {ms932Encoder.encode("\u61A5")}).to.throw(Error, "EncodingError U+61A5");
expect(() => {ms932Encoder.encode("\u61A6")}).to.throw(Error, "EncodingError U+61A6");
r = r && ([...ms932Encoder.encode("憧")].join(",") === "147,178"); // U+61A7
expect(() => {ms932Encoder.encode("\u61A8")}).to.throw(Error, "EncodingError U+61A8");
r = r && ([...ms932Encoder.encode("憩")].join(",") === "140,101"); // U+61A9
expect(() => {ms932Encoder.encode("\u61AA")}).to.throw(Error, "EncodingError U+61AA");
r = r && ([...ms932Encoder.encode("憫憬")].join(",") === "156,224,156,219"); // U+61AB
expect(() => {ms932Encoder.encode("\u61AD")}).to.throw(Error, "EncodingError U+61AD");
r = r && ([...ms932Encoder.encode("憮")].join(",") === "156,225"); // U+61AE
expect(() => {ms932Encoder.encode("\u61AF")}).to.throw(Error, "EncodingError U+61AF");
expect(() => {ms932Encoder.encode("\u61B0")}).to.throw(Error, "EncodingError U+61B0");
expect(() => {ms932Encoder.encode("\u61B1")}).to.throw(Error, "EncodingError U+61B1");
r = r && ([...ms932Encoder.encode("憲")].join(",") === "140,155"); // U+61B2
expect(() => {ms932Encoder.encode("\u61B3")}).to.throw(Error, "EncodingError U+61B3");
expect(() => {ms932Encoder.encode("\u61B4")}).to.throw(Error, "EncodingError U+61B4");
expect(() => {ms932Encoder.encode("\u61B5")}).to.throw(Error, "EncodingError U+61B5");
r = r && ([...ms932Encoder.encode("憶")].join(",") === "137,175"); // U+61B6
expect(() => {ms932Encoder.encode("\u61B7")}).to.throw(Error, "EncodingError U+61B7");
expect(() => {ms932Encoder.encode("\u61B8")}).to.throw(Error, "EncodingError U+61B8");
expect(() => {ms932Encoder.encode("\u61B9")}).to.throw(Error, "EncodingError U+61B9");
r = r && ([...ms932Encoder.encode("憺")].join(",") === "156,233"); // U+61BA
expect(() => {ms932Encoder.encode("\u61BB")}).to.throw(Error, "EncodingError U+61BB");
expect(() => {ms932Encoder.encode("\u61BC")}).to.throw(Error, "EncodingError U+61BC");
expect(() => {ms932Encoder.encode("\u61BD")}).to.throw(Error, "EncodingError U+61BD");
r = r && ([...ms932Encoder.encode("憾")].join(",") === "138,182"); // U+61BE
expect(() => {ms932Encoder.encode("\u61BF")}).to.throw(Error, "EncodingError U+61BF");
expect(() => {ms932Encoder.encode("\u61C0")}).to.throw(Error, "EncodingError U+61C0");
expect(() => {ms932Encoder.encode("\u61C1")}).to.throw(Error, "EncodingError U+61C1");
expect(() => {ms932Encoder.encode("\u61C2")}).to.throw(Error, "EncodingError U+61C2");
r = r && ([...ms932Encoder.encode("懃")].join(",") === "156,231"); // U+61C3
expect(() => {ms932Encoder.encode("\u61C4")}).to.throw(Error, "EncodingError U+61C4");
expect(() => {ms932Encoder.encode("\u61C5")}).to.throw(Error, "EncodingError U+61C5");
r = r && ([...ms932Encoder.encode("懆懇懈應懊懋懌懍")].join(",") === "156,232,141,167,156,230,156,228,156,227,156,234,156,226,156,236"); // U+61C6
expect(() => {ms932Encoder.encode("\u61CE")}).to.throw(Error, "EncodingError U+61CE");
expect(() => {ms932Encoder.encode("\u61CF")}).to.throw(Error, "EncodingError U+61CF");
r = r && ([...ms932Encoder.encode("懐")].join(",") === "137,249"); // U+61D0
expect(() => {ms932Encoder.encode("\u61D1")}).to.throw(Error, "EncodingError U+61D1");
expect(() => {ms932Encoder.encode("\u61D2")}).to.throw(Error, "EncodingError U+61D2");
expect(() => {ms932Encoder.encode("\u61D3")}).to.throw(Error, "EncodingError U+61D3");
expect(() => {ms932Encoder.encode("\u61D4")}).to.throw(Error, "EncodingError U+61D4");
expect(() => {ms932Encoder.encode("\u61D5")}).to.throw(Error, "EncodingError U+61D5");
expect(() => {ms932Encoder.encode("\u61D6")}).to.throw(Error, "EncodingError U+61D6");
expect(() => {ms932Encoder.encode("\u61D7")}).to.throw(Error, "EncodingError U+61D7");
expect(() => {ms932Encoder.encode("\u61D8")}).to.throw(Error, "EncodingError U+61D8");
expect(() => {ms932Encoder.encode("\u61D9")}).to.throw(Error, "EncodingError U+61D9");
expect(() => {ms932Encoder.encode("\u61DA")}).to.throw(Error, "EncodingError U+61DA");
expect(() => {ms932Encoder.encode("\u61DB")}).to.throw(Error, "EncodingError U+61DB");
expect(() => {ms932Encoder.encode("\u61DC")}).to.throw(Error, "EncodingError U+61DC");
expect(() => {ms932Encoder.encode("\u61DD")}).to.throw(Error, "EncodingError U+61DD");
expect(() => {ms932Encoder.encode("\u61DE")}).to.throw(Error, "EncodingError U+61DE");
expect(() => {ms932Encoder.encode("\u61DF")}).to.throw(Error, "EncodingError U+61DF");
expect(() => {ms932Encoder.encode("\u61E0")}).to.throw(Error, "EncodingError U+61E0");
expect(() => {ms932Encoder.encode("\u61E1")}).to.throw(Error, "EncodingError U+61E1");
expect(() => {ms932Encoder.encode("\u61E2")}).to.throw(Error, "EncodingError U+61E2");
r = r && ([...ms932Encoder.encode("懣")].join(",") === "156,238"); // U+61E3
expect(() => {ms932Encoder.encode("\u61E4")}).to.throw(Error, "EncodingError U+61E4");
expect(() => {ms932Encoder.encode("\u61E5")}).to.throw(Error, "EncodingError U+61E5");
r = r && ([...ms932Encoder.encode("懦")].join(",") === "156,237"); // U+61E6
expect(() => {ms932Encoder.encode("\u61E7")}).to.throw(Error, "EncodingError U+61E7");
expect(() => {ms932Encoder.encode("\u61E8")}).to.throw(Error, "EncodingError U+61E8");
expect(() => {ms932Encoder.encode("\u61E9")}).to.throw(Error, "EncodingError U+61E9");
expect(() => {ms932Encoder.encode("\u61EA")}).to.throw(Error, "EncodingError U+61EA");
expect(() => {ms932Encoder.encode("\u61EB")}).to.throw(Error, "EncodingError U+61EB");
expect(() => {ms932Encoder.encode("\u61EC")}).to.throw(Error, "EncodingError U+61EC");
expect(() => {ms932Encoder.encode("\u61ED")}).to.throw(Error, "EncodingError U+61ED");
expect(() => {ms932Encoder.encode("\u61EE")}).to.throw(Error, "EncodingError U+61EE");
expect(() => {ms932Encoder.encode("\u61EF")}).to.throw(Error, "EncodingError U+61EF");
expect(() => {ms932Encoder.encode("\u61F0")}).to.throw(Error, "EncodingError U+61F0");
expect(() => {ms932Encoder.encode("\u61F1")}).to.throw(Error, "EncodingError U+61F1");
r = r && ([...ms932Encoder.encode("懲")].join(",") === "146,166"); // U+61F2
expect(() => {ms932Encoder.encode("\u61F3")}).to.throw(Error, "EncodingError U+61F3");
r = r && ([...ms932Encoder.encode("懴")].join(",") === "156,241"); // U+61F4
expect(() => {ms932Encoder.encode("\u61F5")}).to.throw(Error, "EncodingError U+61F5");
r = r && ([...ms932Encoder.encode("懶懷懸")].join(",") === "156,239,156,229,140,156"); // U+61F6
expect(() => {ms932Encoder.encode("\u61F9")}).to.throw(Error, "EncodingError U+61F9");
r = r && ([...ms932Encoder.encode("懺")].join(",") === "156,240"); // U+61FA
expect(() => {ms932Encoder.encode("\u61FB")}).to.throw(Error, "EncodingError U+61FB");
r = r && ([...ms932Encoder.encode("懼懽懾懿戀")].join(",") === "156,244,156,243,156,245,156,242,156,246"); // U+61FC
expect(() => {ms932Encoder.encode("\u6201")}).to.throw(Error, "EncodingError U+6201");
expect(() => {ms932Encoder.encode("\u6202")}).to.throw(Error, "EncodingError U+6202");
expect(() => {ms932Encoder.encode("\u6203")}).to.throw(Error, "EncodingError U+6203");
expect(() => {ms932Encoder.encode("\u6204")}).to.throw(Error, "EncodingError U+6204");
expect(() => {ms932Encoder.encode("\u6205")}).to.throw(Error, "EncodingError U+6205");
expect(() => {ms932Encoder.encode("\u6206")}).to.throw(Error, "EncodingError U+6206");
expect(() => {ms932Encoder.encode("\u6207")}).to.throw(Error, "EncodingError U+6207");
r = r && ([...ms932Encoder.encode("戈戉戊")].join(",") === "156,247,156,248,149,232"); // U+6208
expect(() => {ms932Encoder.encode("\u620B")}).to.throw(Error, "EncodingError U+620B");
r = r && ([...ms932Encoder.encode("戌戍戎")].join(",") === "156,250,156,249,143,94"); // U+620C
expect(() => {ms932Encoder.encode("\u620F")}).to.throw(Error, "EncodingError U+620F");
r = r && ([...ms932Encoder.encode("成我戒戓戔")].join(",") === "144,172,137,228,137,250,250,199,156,251"); // U+6210
expect(() => {ms932Encoder.encode("\u6215")}).to.throw(Error, "EncodingError U+6215");
r = r && ([...ms932Encoder.encode("或")].join(",") === "136,189"); // U+6216
expect(() => {ms932Encoder.encode("\u6217")}).to.throw(Error, "EncodingError U+6217");
expect(() => {ms932Encoder.encode("\u6218")}).to.throw(Error, "EncodingError U+6218");
expect(() => {ms932Encoder.encode("\u6219")}).to.throw(Error, "EncodingError U+6219");
r = r && ([...ms932Encoder.encode("戚戛")].join(",") === "144,202,156,252"); // U+621A
expect(() => {ms932Encoder.encode("\u621C")}).to.throw(Error, "EncodingError U+621C");
r = r && ([...ms932Encoder.encode("戝戞戟")].join(",") === "230,193,157,64,140,129"); // U+621D
expect(() => {ms932Encoder.encode("\u6220")}).to.throw(Error, "EncodingError U+6220");
r = r && ([...ms932Encoder.encode("戡")].join(",") === "157,65"); // U+6221
expect(() => {ms932Encoder.encode("\u6222")}).to.throw(Error, "EncodingError U+6222");
expect(() => {ms932Encoder.encode("\u6223")}).to.throw(Error, "EncodingError U+6223");
expect(() => {ms932Encoder.encode("\u6224")}).to.throw(Error, "EncodingError U+6224");
expect(() => {ms932Encoder.encode("\u6225")}).to.throw(Error, "EncodingError U+6225");
r = r && ([...ms932Encoder.encode("戦")].join(",") === "144,237"); // U+6226
expect(() => {ms932Encoder.encode("\u6227")}).to.throw(Error, "EncodingError U+6227");
expect(() => {ms932Encoder.encode("\u6228")}).to.throw(Error, "EncodingError U+6228");
expect(() => {ms932Encoder.encode("\u6229")}).to.throw(Error, "EncodingError U+6229");
r = r && ([...ms932Encoder.encode("截")].join(",") === "157,66"); // U+622A
expect(() => {ms932Encoder.encode("\u622B")}).to.throw(Error, "EncodingError U+622B");
expect(() => {ms932Encoder.encode("\u622C")}).to.throw(Error, "EncodingError U+622C");
expect(() => {ms932Encoder.encode("\u622D")}).to.throw(Error, "EncodingError U+622D");
r = r && ([...ms932Encoder.encode("戮戯戰")].join(",") === "157,67,139,89,157,68"); // U+622E
expect(() => {ms932Encoder.encode("\u6231")}).to.throw(Error, "EncodingError U+6231");
r = r && ([...ms932Encoder.encode("戲戳戴")].join(",") === "157,69,157,70,145,213"); // U+6232
expect(() => {ms932Encoder.encode("\u6235")}).to.throw(Error, "EncodingError U+6235");
expect(() => {ms932Encoder.encode("\u6236")}).to.throw(Error, "EncodingError U+6236");
expect(() => {ms932Encoder.encode("\u6237")}).to.throw(Error, "EncodingError U+6237");
r = r && ([...ms932Encoder.encode("戸")].join(",") === "140,203"); // U+6238
expect(() => {ms932Encoder.encode("\u6239")}).to.throw(Error, "EncodingError U+6239");
expect(() => {ms932Encoder.encode("\u623A")}).to.throw(Error, "EncodingError U+623A");
r = r && ([...ms932Encoder.encode("戻")].join(",") === "150,223"); // U+623B
expect(() => {ms932Encoder.encode("\u623C")}).to.throw(Error, "EncodingError U+623C");
expect(() => {ms932Encoder.encode("\u623D")}).to.throw(Error, "EncodingError U+623D");
expect(() => {ms932Encoder.encode("\u623E")}).to.throw(Error, "EncodingError U+623E");
r = r && ([...ms932Encoder.encode("房所扁")].join(",") === "150,91,143,138,157,71"); // U+623F
expect(() => {ms932Encoder.encode("\u6242")}).to.throw(Error, "EncodingError U+6242");
expect(() => {ms932Encoder.encode("\u6243")}).to.throw(Error, "EncodingError U+6243");
expect(() => {ms932Encoder.encode("\u6244")}).to.throw(Error, "EncodingError U+6244");
expect(() => {ms932Encoder.encode("\u6245")}).to.throw(Error, "EncodingError U+6245");
expect(() => {ms932Encoder.encode("\u6246")}).to.throw(Error, "EncodingError U+6246");
r = r && ([...ms932Encoder.encode("扇扈扉")].join(",") === "144,238,231,187,148,224"); // U+6247
expect(() => {ms932Encoder.encode("\u624A")}).to.throw(Error, "EncodingError U+624A");
r = r && ([...ms932Encoder.encode("手")].join(",") === "142,232"); // U+624B
expect(() => {ms932Encoder.encode("\u624C")}).to.throw(Error, "EncodingError U+624C");
r = r && ([...ms932Encoder.encode("才扎")].join(",") === "141,203,157,72"); // U+624D
expect(() => {ms932Encoder.encode("\u624F")}).to.throw(Error, "EncodingError U+624F");
expect(() => {ms932Encoder.encode("\u6250")}).to.throw(Error, "EncodingError U+6250");
expect(() => {ms932Encoder.encode("\u6251")}).to.throw(Error, "EncodingError U+6251");
expect(() => {ms932Encoder.encode("\u6252")}).to.throw(Error, "EncodingError U+6252");
r = r && ([...ms932Encoder.encode("打")].join(",") === "145,197"); // U+6253
expect(() => {ms932Encoder.encode("\u6254")}).to.throw(Error, "EncodingError U+6254");
r = r && ([...ms932Encoder.encode("払")].join(",") === "149,165"); // U+6255
expect(() => {ms932Encoder.encode("\u6256")}).to.throw(Error, "EncodingError U+6256");
expect(() => {ms932Encoder.encode("\u6257")}).to.throw(Error, "EncodingError U+6257");
r = r && ([...ms932Encoder.encode("托")].join(",") === "145,239"); // U+6258
expect(() => {ms932Encoder.encode("\u6259")}).to.throw(Error, "EncodingError U+6259");
expect(() => {ms932Encoder.encode("\u625A")}).to.throw(Error, "EncodingError U+625A");
r = r && ([...ms932Encoder.encode("扛")].join(",") === "157,75"); // U+625B
expect(() => {ms932Encoder.encode("\u625C")}).to.throw(Error, "EncodingError U+625C");
expect(() => {ms932Encoder.encode("\u625D")}).to.throw(Error, "EncodingError U+625D");
r = r && ([...ms932Encoder.encode("扞")].join(",") === "157,73"); // U+625E
expect(() => {ms932Encoder.encode("\u625F")}).to.throw(Error, "EncodingError U+625F");
r = r && ([...ms932Encoder.encode("扠")].join(",") === "157,76"); // U+6260
expect(() => {ms932Encoder.encode("\u6261")}).to.throw(Error, "EncodingError U+6261");
expect(() => {ms932Encoder.encode("\u6262")}).to.throw(Error, "EncodingError U+6262");
r = r && ([...ms932Encoder.encode("扣")].join(",") === "157,74"); // U+6263
expect(() => {ms932Encoder.encode("\u6264")}).to.throw(Error, "EncodingError U+6264");
expect(() => {ms932Encoder.encode("\u6265")}).to.throw(Error, "EncodingError U+6265");
expect(() => {ms932Encoder.encode("\u6266")}).to.throw(Error, "EncodingError U+6266");
expect(() => {ms932Encoder.encode("\u6267")}).to.throw(Error, "EncodingError U+6267");
r = r && ([...ms932Encoder.encode("扨")].join(",") === "157,77"); // U+6268
expect(() => {ms932Encoder.encode("\u6269")}).to.throw(Error, "EncodingError U+6269");
expect(() => {ms932Encoder.encode("\u626A")}).to.throw(Error, "EncodingError U+626A");
expect(() => {ms932Encoder.encode("\u626B")}).to.throw(Error, "EncodingError U+626B");
expect(() => {ms932Encoder.encode("\u626C")}).to.throw(Error, "EncodingError U+626C");
expect(() => {ms932Encoder.encode("\u626D")}).to.throw(Error, "EncodingError U+626D");
r = r && ([...ms932Encoder.encode("扮")].join(",") === "149,175"); // U+626E
expect(() => {ms932Encoder.encode("\u626F")}).to.throw(Error, "EncodingError U+626F");
expect(() => {ms932Encoder.encode("\u6270")}).to.throw(Error, "EncodingError U+6270");
r = r && ([...ms932Encoder.encode("扱")].join(",") === "136,181"); // U+6271
expect(() => {ms932Encoder.encode("\u6272")}).to.throw(Error, "EncodingError U+6272");
expect(() => {ms932Encoder.encode("\u6273")}).to.throw(Error, "EncodingError U+6273");
expect(() => {ms932Encoder.encode("\u6274")}).to.throw(Error, "EncodingError U+6274");
expect(() => {ms932Encoder.encode("\u6275")}).to.throw(Error, "EncodingError U+6275");
r = r && ([...ms932Encoder.encode("扶")].join(",") === "149,125"); // U+6276
expect(() => {ms932Encoder.encode("\u6277")}).to.throw(Error, "EncodingError U+6277");
expect(() => {ms932Encoder.encode("\u6278")}).to.throw(Error, "EncodingError U+6278");
r = r && ([...ms932Encoder.encode("批")].join(",") === "148,225"); // U+6279
expect(() => {ms932Encoder.encode("\u627A")}).to.throw(Error, "EncodingError U+627A");
expect(() => {ms932Encoder.encode("\u627B")}).to.throw(Error, "EncodingError U+627B");
r = r && ([...ms932Encoder.encode("扼")].join(",") === "157,78"); // U+627C
expect(() => {ms932Encoder.encode("\u627D")}).to.throw(Error, "EncodingError U+627D");
r = r && ([...ms932Encoder.encode("找承技")].join(",") === "157,81,143,179,139,90"); // U+627E
expect(() => {ms932Encoder.encode("\u6281")}).to.throw(Error, "EncodingError U+6281");
r = r && ([...ms932Encoder.encode("抂抃抄")].join(",") === "157,79,157,86,143,180"); // U+6282
expect(() => {ms932Encoder.encode("\u6285")}).to.throw(Error, "EncodingError U+6285");
expect(() => {ms932Encoder.encode("\u6286")}).to.throw(Error, "EncodingError U+6286");
expect(() => {ms932Encoder.encode("\u6287")}).to.throw(Error, "EncodingError U+6287");
expect(() => {ms932Encoder.encode("\u6288")}).to.throw(Error, "EncodingError U+6288");
r = r && ([...ms932Encoder.encode("抉把")].join(",") === "157,80,148,99"); // U+6289
expect(() => {ms932Encoder.encode("\u628B")}).to.throw(Error, "EncodingError U+628B");
expect(() => {ms932Encoder.encode("\u628C")}).to.throw(Error, "EncodingError U+628C");
expect(() => {ms932Encoder.encode("\u628D")}).to.throw(Error, "EncodingError U+628D");
expect(() => {ms932Encoder.encode("\u628E")}).to.throw(Error, "EncodingError U+628E");
expect(() => {ms932Encoder.encode("\u628F")}).to.throw(Error, "EncodingError U+628F");
expect(() => {ms932Encoder.encode("\u6290")}).to.throw(Error, "EncodingError U+6290");
r = r && ([...ms932Encoder.encode("抑抒抓抔投抖抗折")].join(",") === "151,125,157,82,157,83,157,87,147,138,157,84,141,82,144,220"); // U+6291
expect(() => {ms932Encoder.encode("\u6299")}).to.throw(Error, "EncodingError U+6299");
expect(() => {ms932Encoder.encode("\u629A")}).to.throw(Error, "EncodingError U+629A");
r = r && ([...ms932Encoder.encode("抛抜")].join(",") === "157,101,148,178"); // U+629B
expect(() => {ms932Encoder.encode("\u629D")}).to.throw(Error, "EncodingError U+629D");
r = r && ([...ms932Encoder.encode("択")].join(",") === "145,240"); // U+629E
expect(() => {ms932Encoder.encode("\u629F")}).to.throw(Error, "EncodingError U+629F");
expect(() => {ms932Encoder.encode("\u62A0")}).to.throw(Error, "EncodingError U+62A0");
expect(() => {ms932Encoder.encode("\u62A1")}).to.throw(Error, "EncodingError U+62A1");
expect(() => {ms932Encoder.encode("\u62A2")}).to.throw(Error, "EncodingError U+62A2");
expect(() => {ms932Encoder.encode("\u62A3")}).to.throw(Error, "EncodingError U+62A3");
expect(() => {ms932Encoder.encode("\u62A4")}).to.throw(Error, "EncodingError U+62A4");
expect(() => {ms932Encoder.encode("\u62A5")}).to.throw(Error, "EncodingError U+62A5");
r = r && ([...ms932Encoder.encode("抦")].join(",") === "250,200"); // U+62A6
expect(() => {ms932Encoder.encode("\u62A7")}).to.throw(Error, "EncodingError U+62A7");
expect(() => {ms932Encoder.encode("\u62A8")}).to.throw(Error, "EncodingError U+62A8");
expect(() => {ms932Encoder.encode("\u62A9")}).to.throw(Error, "EncodingError U+62A9");
expect(() => {ms932Encoder.encode("\u62AA")}).to.throw(Error, "EncodingError U+62AA");
r = r && ([...ms932Encoder.encode("披抬")].join(",") === "148,226,157,171"); // U+62AB
expect(() => {ms932Encoder.encode("\u62AD")}).to.throw(Error, "EncodingError U+62AD");
expect(() => {ms932Encoder.encode("\u62AE")}).to.throw(Error, "EncodingError U+62AE");
expect(() => {ms932Encoder.encode("\u62AF")}).to.throw(Error, "EncodingError U+62AF");
expect(() => {ms932Encoder.encode("\u62B0")}).to.throw(Error, "EncodingError U+62B0");
r = r && ([...ms932Encoder.encode("抱")].join(",") === "149,248"); // U+62B1
expect(() => {ms932Encoder.encode("\u62B2")}).to.throw(Error, "EncodingError U+62B2");
expect(() => {ms932Encoder.encode("\u62B3")}).to.throw(Error, "EncodingError U+62B3");
expect(() => {ms932Encoder.encode("\u62B4")}).to.throw(Error, "EncodingError U+62B4");
r = r && ([...ms932Encoder.encode("抵")].join(",") === "146,239"); // U+62B5
expect(() => {ms932Encoder.encode("\u62B6")}).to.throw(Error, "EncodingError U+62B6");
expect(() => {ms932Encoder.encode("\u62B7")}).to.throw(Error, "EncodingError U+62B7");
expect(() => {ms932Encoder.encode("\u62B8")}).to.throw(Error, "EncodingError U+62B8");
r = r && ([...ms932Encoder.encode("抹")].join(",") === "150,149"); // U+62B9
expect(() => {ms932Encoder.encode("\u62BA")}).to.throw(Error, "EncodingError U+62BA");
r = r && ([...ms932Encoder.encode("抻押抽")].join(",") === "157,90,137,159,146,138"); // U+62BB
expect(() => {ms932Encoder.encode("\u62BE")}).to.throw(Error, "EncodingError U+62BE");
expect(() => {ms932Encoder.encode("\u62BF")}).to.throw(Error, "EncodingError U+62BF");
expect(() => {ms932Encoder.encode("\u62C0")}).to.throw(Error, "EncodingError U+62C0");
expect(() => {ms932Encoder.encode("\u62C1")}).to.throw(Error, "EncodingError U+62C1");
r = r && ([...ms932Encoder.encode("拂")].join(",") === "157,99"); // U+62C2
expect(() => {ms932Encoder.encode("\u62C3")}).to.throw(Error, "EncodingError U+62C3");
expect(() => {ms932Encoder.encode("\u62C4")}).to.throw(Error, "EncodingError U+62C4");
r = r && ([...ms932Encoder.encode("担拆拇拈拉拊")].join(",") === "146,83,157,93,157,100,157,95,157,102,157,98"); // U+62C5
expect(() => {ms932Encoder.encode("\u62CB")}).to.throw(Error, "EncodingError U+62CB");
r = r && ([...ms932Encoder.encode("拌拍")].join(",") === "157,97,148,143"); // U+62CC
expect(() => {ms932Encoder.encode("\u62CE")}).to.throw(Error, "EncodingError U+62CE");
r = r && ([...ms932Encoder.encode("拏拐拑拒拓拔")].join(",") === "157,91,137,251,157,89,139,145,145,241,157,85"); // U+62CF
expect(() => {ms932Encoder.encode("\u62D5")}).to.throw(Error, "EncodingError U+62D5");
expect(() => {ms932Encoder.encode("\u62D6")}).to.throw(Error, "EncodingError U+62D6");
r = r && ([...ms932Encoder.encode("拗拘拙")].join(",") === "157,88,141,83,144,217"); // U+62D7
expect(() => {ms932Encoder.encode("\u62DA")}).to.throw(Error, "EncodingError U+62DA");
r = r && ([...ms932Encoder.encode("招拜拝")].join(",") === "143,181,157,96,148,113"); // U+62DB
expect(() => {ms932Encoder.encode("\u62DE")}).to.throw(Error, "EncodingError U+62DE");
expect(() => {ms932Encoder.encode("\u62DF")}).to.throw(Error, "EncodingError U+62DF");
r = r && ([...ms932Encoder.encode("拠拡")].join(",") === "139,146,138,103"); // U+62E0
expect(() => {ms932Encoder.encode("\u62E2")}).to.throw(Error, "EncodingError U+62E2");
expect(() => {ms932Encoder.encode("\u62E3")}).to.throw(Error, "EncodingError U+62E3");
expect(() => {ms932Encoder.encode("\u62E4")}).to.throw(Error, "EncodingError U+62E4");
expect(() => {ms932Encoder.encode("\u62E5")}).to.throw(Error, "EncodingError U+62E5");
expect(() => {ms932Encoder.encode("\u62E6")}).to.throw(Error, "EncodingError U+62E6");
expect(() => {ms932Encoder.encode("\u62E7")}).to.throw(Error, "EncodingError U+62E7");
expect(() => {ms932Encoder.encode("\u62E8")}).to.throw(Error, "EncodingError U+62E8");
expect(() => {ms932Encoder.encode("\u62E9")}).to.throw(Error, "EncodingError U+62E9");
expect(() => {ms932Encoder.encode("\u62EA")}).to.throw(Error, "EncodingError U+62EA");
expect(() => {ms932Encoder.encode("\u62EB")}).to.throw(Error, "EncodingError U+62EB");
r = r && ([...ms932Encoder.encode("括拭拮拯")].join(",") === "138,135,144,64,157,104,157,109"); // U+62EC
expect(() => {ms932Encoder.encode("\u62F0")}).to.throw(Error, "EncodingError U+62F0");
r = r && ([...ms932Encoder.encode("拱")].join(",") === "157,105"); // U+62F1
expect(() => {ms932Encoder.encode("\u62F2")}).to.throw(Error, "EncodingError U+62F2");
r = r && ([...ms932Encoder.encode("拳")].join(",") === "140,157"); // U+62F3
expect(() => {ms932Encoder.encode("\u62F4")}).to.throw(Error, "EncodingError U+62F4");
r = r && ([...ms932Encoder.encode("拵拶拷")].join(",") === "157,110,142,65,141,137"); // U+62F5
expect(() => {ms932Encoder.encode("\u62F8")}).to.throw(Error, "EncodingError U+62F8");
expect(() => {ms932Encoder.encode("\u62F9")}).to.throw(Error, "EncodingError U+62F9");
expect(() => {ms932Encoder.encode("\u62FA")}).to.throw(Error, "EncodingError U+62FA");
expect(() => {ms932Encoder.encode("\u62FB")}).to.throw(Error, "EncodingError U+62FB");
expect(() => {ms932Encoder.encode("\u62FC")}).to.throw(Error, "EncodingError U+62FC");
expect(() => {ms932Encoder.encode("\u62FD")}).to.throw(Error, "EncodingError U+62FD");
r = r && ([...ms932Encoder.encode("拾拿")].join(",") === "143,69,157,92"); // U+62FE
expect(() => {ms932Encoder.encode("\u6300")}).to.throw(Error, "EncodingError U+6300");
r = r && ([...ms932Encoder.encode("持挂")].join(",") === "142,157,157,107"); // U+6301
expect(() => {ms932Encoder.encode("\u6303")}).to.throw(Error, "EncodingError U+6303");
expect(() => {ms932Encoder.encode("\u6304")}).to.throw(Error, "EncodingError U+6304");
expect(() => {ms932Encoder.encode("\u6305")}).to.throw(Error, "EncodingError U+6305");
expect(() => {ms932Encoder.encode("\u6306")}).to.throw(Error, "EncodingError U+6306");
r = r && ([...ms932Encoder.encode("指挈按")].join(",") === "142,119,157,108,136,194"); // U+6307
expect(() => {ms932Encoder.encode("\u630A")}).to.throw(Error, "EncodingError U+630A");
expect(() => {ms932Encoder.encode("\u630B")}).to.throw(Error, "EncodingError U+630B");
r = r && ([...ms932Encoder.encode("挌")].join(",") === "157,103"); // U+630C
expect(() => {ms932Encoder.encode("\u630D")}).to.throw(Error, "EncodingError U+630D");
expect(() => {ms932Encoder.encode("\u630E")}).to.throw(Error, "EncodingError U+630E");
expect(() => {ms932Encoder.encode("\u630F")}).to.throw(Error, "EncodingError U+630F");
expect(() => {ms932Encoder.encode("\u6310")}).to.throw(Error, "EncodingError U+6310");
r = r && ([...ms932Encoder.encode("挑")].join(",") === "146,167"); // U+6311
expect(() => {ms932Encoder.encode("\u6312")}).to.throw(Error, "EncodingError U+6312");
expect(() => {ms932Encoder.encode("\u6313")}).to.throw(Error, "EncodingError U+6313");
expect(() => {ms932Encoder.encode("\u6314")}).to.throw(Error, "EncodingError U+6314");
expect(() => {ms932Encoder.encode("\u6315")}).to.throw(Error, "EncodingError U+6315");
expect(() => {ms932Encoder.encode("\u6316")}).to.throw(Error, "EncodingError U+6316");
expect(() => {ms932Encoder.encode("\u6317")}).to.throw(Error, "EncodingError U+6317");
expect(() => {ms932Encoder.encode("\u6318")}).to.throw(Error, "EncodingError U+6318");
r = r && ([...ms932Encoder.encode("挙")].join(",") === "139,147"); // U+6319
expect(() => {ms932Encoder.encode("\u631A")}).to.throw(Error, "EncodingError U+631A");
expect(() => {ms932Encoder.encode("\u631B")}).to.throw(Error, "EncodingError U+631B");
expect(() => {ms932Encoder.encode("\u631C")}).to.throw(Error, "EncodingError U+631C");
expect(() => {ms932Encoder.encode("\u631D")}).to.throw(Error, "EncodingError U+631D");
expect(() => {ms932Encoder.encode("\u631E")}).to.throw(Error, "EncodingError U+631E");
r = r && ([...ms932Encoder.encode("挟")].join(",") === "139,178"); // U+631F
expect(() => {ms932Encoder.encode("\u6320")}).to.throw(Error, "EncodingError U+6320");
expect(() => {ms932Encoder.encode("\u6321")}).to.throw(Error, "EncodingError U+6321");
expect(() => {ms932Encoder.encode("\u6322")}).to.throw(Error, "EncodingError U+6322");
expect(() => {ms932Encoder.encode("\u6323")}).to.throw(Error, "EncodingError U+6323");
expect(() => {ms932Encoder.encode("\u6324")}).to.throw(Error, "EncodingError U+6324");
expect(() => {ms932Encoder.encode("\u6325")}).to.throw(Error, "EncodingError U+6325");
expect(() => {ms932Encoder.encode("\u6326")}).to.throw(Error, "EncodingError U+6326");
r = r && ([...ms932Encoder.encode("挧挨")].join(",") === "157,106,136,165"); // U+6327
expect(() => {ms932Encoder.encode("\u6329")}).to.throw(Error, "EncodingError U+6329");
expect(() => {ms932Encoder.encode("\u632A")}).to.throw(Error, "EncodingError U+632A");
r = r && ([...ms932Encoder.encode("挫")].join(",") === "141,193"); // U+632B
expect(() => {ms932Encoder.encode("\u632C")}).to.throw(Error, "EncodingError U+632C");
expect(() => {ms932Encoder.encode("\u632D")}).to.throw(Error, "EncodingError U+632D");
expect(() => {ms932Encoder.encode("\u632E")}).to.throw(Error, "EncodingError U+632E");
r = r && ([...ms932Encoder.encode("振")].join(",") === "144,85"); // U+632F
expect(() => {ms932Encoder.encode("\u6330")}).to.throw(Error, "EncodingError U+6330");
expect(() => {ms932Encoder.encode("\u6331")}).to.throw(Error, "EncodingError U+6331");
expect(() => {ms932Encoder.encode("\u6332")}).to.throw(Error, "EncodingError U+6332");
expect(() => {ms932Encoder.encode("\u6333")}).to.throw(Error, "EncodingError U+6333");
expect(() => {ms932Encoder.encode("\u6334")}).to.throw(Error, "EncodingError U+6334");
expect(() => {ms932Encoder.encode("\u6335")}).to.throw(Error, "EncodingError U+6335");
expect(() => {ms932Encoder.encode("\u6336")}).to.throw(Error, "EncodingError U+6336");
expect(() => {ms932Encoder.encode("\u6337")}).to.throw(Error, "EncodingError U+6337");
expect(() => {ms932Encoder.encode("\u6338")}).to.throw(Error, "EncodingError U+6338");
expect(() => {ms932Encoder.encode("\u6339")}).to.throw(Error, "EncodingError U+6339");
r = r && ([...ms932Encoder.encode("挺")].join(",") === "146,240"); // U+633A
expect(() => {ms932Encoder.encode("\u633B")}).to.throw(Error, "EncodingError U+633B");
expect(() => {ms932Encoder.encode("\u633C")}).to.throw(Error, "EncodingError U+633C");
r = r && ([...ms932Encoder.encode("挽挾挿")].join(",") === "148,210,157,112,145,125"); // U+633D
expect(() => {ms932Encoder.encode("\u6340")}).to.throw(Error, "EncodingError U+6340");
expect(() => {ms932Encoder.encode("\u6341")}).to.throw(Error, "EncodingError U+6341");
expect(() => {ms932Encoder.encode("\u6342")}).to.throw(Error, "EncodingError U+6342");
expect(() => {ms932Encoder.encode("\u6343")}).to.throw(Error, "EncodingError U+6343");
expect(() => {ms932Encoder.encode("\u6344")}).to.throw(Error, "EncodingError U+6344");
expect(() => {ms932Encoder.encode("\u6345")}).to.throw(Error, "EncodingError U+6345");
expect(() => {ms932Encoder.encode("\u6346")}).to.throw(Error, "EncodingError U+6346");
expect(() => {ms932Encoder.encode("\u6347")}).to.throw(Error, "EncodingError U+6347");
expect(() => {ms932Encoder.encode("\u6348")}).to.throw(Error, "EncodingError U+6348");
r = r && ([...ms932Encoder.encode("捉")].join(",") === "145,168"); // U+6349
expect(() => {ms932Encoder.encode("\u634A")}).to.throw(Error, "EncodingError U+634A");
expect(() => {ms932Encoder.encode("\u634B")}).to.throw(Error, "EncodingError U+634B");
r = r && ([...ms932Encoder.encode("捌捍")].join(",") === "142,74,157,113"); // U+634C
expect(() => {ms932Encoder.encode("\u634E")}).to.throw(Error, "EncodingError U+634E");
r = r && ([...ms932Encoder.encode("捏捐")].join(",") === "157,115,157,111"); // U+634F
expect(() => {ms932Encoder.encode("\u6351")}).to.throw(Error, "EncodingError U+6351");
expect(() => {ms932Encoder.encode("\u6352")}).to.throw(Error, "EncodingError U+6352");
expect(() => {ms932Encoder.encode("\u6353")}).to.throw(Error, "EncodingError U+6353");
expect(() => {ms932Encoder.encode("\u6354")}).to.throw(Error, "EncodingError U+6354");
r = r && ([...ms932Encoder.encode("捕")].join(",") === "149,223"); // U+6355
expect(() => {ms932Encoder.encode("\u6356")}).to.throw(Error, "EncodingError U+6356");
r = r && ([...ms932Encoder.encode("捗")].join(",") === "146,187"); // U+6357
expect(() => {ms932Encoder.encode("\u6358")}).to.throw(Error, "EncodingError U+6358");
expect(() => {ms932Encoder.encode("\u6359")}).to.throw(Error, "EncodingError U+6359");
expect(() => {ms932Encoder.encode("\u635A")}).to.throw(Error, "EncodingError U+635A");
expect(() => {ms932Encoder.encode("\u635B")}).to.throw(Error, "EncodingError U+635B");
r = r && ([...ms932Encoder.encode("捜")].join(",") === "145,123"); // U+635C
expect(() => {ms932Encoder.encode("\u635D")}).to.throw(Error, "EncodingError U+635D");
expect(() => {ms932Encoder.encode("\u635E")}).to.throw(Error, "EncodingError U+635E");
expect(() => {ms932Encoder.encode("\u635F")}).to.throw(Error, "EncodingError U+635F");
expect(() => {ms932Encoder.encode("\u6360")}).to.throw(Error, "EncodingError U+6360");
expect(() => {ms932Encoder.encode("\u6361")}).to.throw(Error, "EncodingError U+6361");
expect(() => {ms932Encoder.encode("\u6362")}).to.throw(Error, "EncodingError U+6362");
expect(() => {ms932Encoder.encode("\u6363")}).to.throw(Error, "EncodingError U+6363");
expect(() => {ms932Encoder.encode("\u6364")}).to.throw(Error, "EncodingError U+6364");
expect(() => {ms932Encoder.encode("\u6365")}).to.throw(Error, "EncodingError U+6365");
expect(() => {ms932Encoder.encode("\u6366")}).to.throw(Error, "EncodingError U+6366");
r = r && ([...ms932Encoder.encode("捧捨捩")].join(",") === "149,249,142,204,157,128"); // U+6367
expect(() => {ms932Encoder.encode("\u636A")}).to.throw(Error, "EncodingError U+636A");
r = r && ([...ms932Encoder.encode("捫")].join(",") === "157,126"); // U+636B
expect(() => {ms932Encoder.encode("\u636C")}).to.throw(Error, "EncodingError U+636C");
expect(() => {ms932Encoder.encode("\u636D")}).to.throw(Error, "EncodingError U+636D");
r = r && ([...ms932Encoder.encode("据")].join(",") === "144,152"); // U+636E
expect(() => {ms932Encoder.encode("\u636F")}).to.throw(Error, "EncodingError U+636F");
expect(() => {ms932Encoder.encode("\u6370")}).to.throw(Error, "EncodingError U+6370");
expect(() => {ms932Encoder.encode("\u6371")}).to.throw(Error, "EncodingError U+6371");
r = r && ([...ms932Encoder.encode("捲")].join(",") === "140,158"); // U+6372
expect(() => {ms932Encoder.encode("\u6373")}).to.throw(Error, "EncodingError U+6373");
expect(() => {ms932Encoder.encode("\u6374")}).to.throw(Error, "EncodingError U+6374");
expect(() => {ms932Encoder.encode("\u6375")}).to.throw(Error, "EncodingError U+6375");
r = r && ([...ms932Encoder.encode("捶捷")].join(",") === "157,120,143,183"); // U+6376
expect(() => {ms932Encoder.encode("\u6378")}).to.throw(Error, "EncodingError U+6378");
expect(() => {ms932Encoder.encode("\u6379")}).to.throw(Error, "EncodingError U+6379");
r = r && ([...ms932Encoder.encode("捺捻")].join(",") === "147,230,148,80"); // U+637A
expect(() => {ms932Encoder.encode("\u637C")}).to.throw(Error, "EncodingError U+637C");
expect(() => {ms932Encoder.encode("\u637D")}).to.throw(Error, "EncodingError U+637D");
expect(() => {ms932Encoder.encode("\u637E")}).to.throw(Error, "EncodingError U+637E");
expect(() => {ms932Encoder.encode("\u637F")}).to.throw(Error, "EncodingError U+637F");
r = r && ([...ms932Encoder.encode("掀")].join(",") === "157,118"); // U+6380
expect(() => {ms932Encoder.encode("\u6381")}).to.throw(Error, "EncodingError U+6381");
expect(() => {ms932Encoder.encode("\u6382")}).to.throw(Error, "EncodingError U+6382");
r = r && ([...ms932Encoder.encode("掃")].join(",") === "145,124"); // U+6383
expect(() => {ms932Encoder.encode("\u6384")}).to.throw(Error, "EncodingError U+6384");
expect(() => {ms932Encoder.encode("\u6385")}).to.throw(Error, "EncodingError U+6385");
expect(() => {ms932Encoder.encode("\u6386")}).to.throw(Error, "EncodingError U+6386");
expect(() => {ms932Encoder.encode("\u6387")}).to.throw(Error, "EncodingError U+6387");
r = r && ([...ms932Encoder.encode("授掉")].join(",") === "142,246,157,123"); // U+6388
expect(() => {ms932Encoder.encode("\u638A")}).to.throw(Error, "EncodingError U+638A");
expect(() => {ms932Encoder.encode("\u638B")}).to.throw(Error, "EncodingError U+638B");
r = r && ([...ms932Encoder.encode("掌")].join(",") === "143,182"); // U+638C
expect(() => {ms932Encoder.encode("\u638D")}).to.throw(Error, "EncodingError U+638D");
r = r && ([...ms932Encoder.encode("掎掏")].join(",") === "157,117,157,122"); // U+638E
expect(() => {ms932Encoder.encode("\u6390")}).to.throw(Error, "EncodingError U+6390");
expect(() => {ms932Encoder.encode("\u6391")}).to.throw(Error, "EncodingError U+6391");
r = r && ([...ms932Encoder.encode("排")].join(",") === "148,114"); // U+6392
expect(() => {ms932Encoder.encode("\u6393")}).to.throw(Error, "EncodingError U+6393");
expect(() => {ms932Encoder.encode("\u6394")}).to.throw(Error, "EncodingError U+6394");
expect(() => {ms932Encoder.encode("\u6395")}).to.throw(Error, "EncodingError U+6395");
r = r && ([...ms932Encoder.encode("掖")].join(",") === "157,116"); // U+6396
expect(() => {ms932Encoder.encode("\u6397")}).to.throw(Error, "EncodingError U+6397");
r = r && ([...ms932Encoder.encode("掘")].join(",") === "140,64"); // U+6398
expect(() => {ms932Encoder.encode("\u6399")}).to.throw(Error, "EncodingError U+6399");
expect(() => {ms932Encoder.encode("\u639A")}).to.throw(Error, "EncodingError U+639A");
r = r && ([...ms932Encoder.encode("掛")].join(",") === "138,124"); // U+639B
expect(() => {ms932Encoder.encode("\u639C")}).to.throw(Error, "EncodingError U+639C");
expect(() => {ms932Encoder.encode("\u639D")}).to.throw(Error, "EncodingError U+639D");
expect(() => {ms932Encoder.encode("\u639E")}).to.throw(Error, "EncodingError U+639E");
r = r && ([...ms932Encoder.encode("掟掠採探掣")].join(",") === "157,124,151,169,141,204,146,84,157,121"); // U+639F
expect(() => {ms932Encoder.encode("\u63A4")}).to.throw(Error, "EncodingError U+63A4");
r = r && ([...ms932Encoder.encode("接")].join(",") === "144,218"); // U+63A5
expect(() => {ms932Encoder.encode("\u63A6")}).to.throw(Error, "EncodingError U+63A6");
r = r && ([...ms932Encoder.encode("控推掩措掫掬")].join(",") === "141,84,144,132,137,134,145,91,157,119,139,100"); // U+63A7
expect(() => {ms932Encoder.encode("\u63AD")}).to.throw(Error, "EncodingError U+63AD");
expect(() => {ms932Encoder.encode("\u63AE")}).to.throw(Error, "EncodingError U+63AE");
expect(() => {ms932Encoder.encode("\u63AF")}).to.throw(Error, "EncodingError U+63AF");
expect(() => {ms932Encoder.encode("\u63B0")}).to.throw(Error, "EncodingError U+63B0");
expect(() => {ms932Encoder.encode("\u63B1")}).to.throw(Error, "EncodingError U+63B1");
r = r && ([...ms932Encoder.encode("掲")].join(",") === "140,102"); // U+63B2
expect(() => {ms932Encoder.encode("\u63B3")}).to.throw(Error, "EncodingError U+63B3");
r = r && ([...ms932Encoder.encode("掴掵")].join(",") === "146,205,157,125"); // U+63B4
expect(() => {ms932Encoder.encode("\u63B6")}).to.throw(Error, "EncodingError U+63B6");
expect(() => {ms932Encoder.encode("\u63B7")}).to.throw(Error, "EncodingError U+63B7");
expect(() => {ms932Encoder.encode("\u63B8")}).to.throw(Error, "EncodingError U+63B8");
expect(() => {ms932Encoder.encode("\u63B9")}).to.throw(Error, "EncodingError U+63B9");
expect(() => {ms932Encoder.encode("\u63BA")}).to.throw(Error, "EncodingError U+63BA");
r = r && ([...ms932Encoder.encode("掻")].join(",") === "145,126"); // U+63BB
expect(() => {ms932Encoder.encode("\u63BC")}).to.throw(Error, "EncodingError U+63BC");
expect(() => {ms932Encoder.encode("\u63BD")}).to.throw(Error, "EncodingError U+63BD");
r = r && ([...ms932Encoder.encode("掾")].join(",") === "157,129"); // U+63BE
expect(() => {ms932Encoder.encode("\u63BF")}).to.throw(Error, "EncodingError U+63BF");
r = r && ([...ms932Encoder.encode("揀")].join(",") === "157,131"); // U+63C0
expect(() => {ms932Encoder.encode("\u63C1")}).to.throw(Error, "EncodingError U+63C1");
expect(() => {ms932Encoder.encode("\u63C2")}).to.throw(Error, "EncodingError U+63C2");
r = r && ([...ms932Encoder.encode("揃揄")].join(",") === "145,181,157,137"); // U+63C3
expect(() => {ms932Encoder.encode("\u63C5")}).to.throw(Error, "EncodingError U+63C5");
r = r && ([...ms932Encoder.encode("揆")].join(",") === "157,132"); // U+63C6
expect(() => {ms932Encoder.encode("\u63C7")}).to.throw(Error, "EncodingError U+63C7");
expect(() => {ms932Encoder.encode("\u63C8")}).to.throw(Error, "EncodingError U+63C8");
r = r && ([...ms932Encoder.encode("揉")].join(",") === "157,134"); // U+63C9
expect(() => {ms932Encoder.encode("\u63CA")}).to.throw(Error, "EncodingError U+63CA");
expect(() => {ms932Encoder.encode("\u63CB")}).to.throw(Error, "EncodingError U+63CB");
expect(() => {ms932Encoder.encode("\u63CC")}).to.throw(Error, "EncodingError U+63CC");
expect(() => {ms932Encoder.encode("\u63CD")}).to.throw(Error, "EncodingError U+63CD");
expect(() => {ms932Encoder.encode("\u63CE")}).to.throw(Error, "EncodingError U+63CE");
r = r && ([...ms932Encoder.encode("描提")].join(",") === "149,96,146,241"); // U+63CF
expect(() => {ms932Encoder.encode("\u63D1")}).to.throw(Error, "EncodingError U+63D1");
r = r && ([...ms932Encoder.encode("插")].join(",") === "157,135"); // U+63D2
expect(() => {ms932Encoder.encode("\u63D3")}).to.throw(Error, "EncodingError U+63D3");
expect(() => {ms932Encoder.encode("\u63D4")}).to.throw(Error, "EncodingError U+63D4");
expect(() => {ms932Encoder.encode("\u63D5")}).to.throw(Error, "EncodingError U+63D5");
r = r && ([...ms932Encoder.encode("揖")].join(",") === "151,75"); // U+63D6
expect(() => {ms932Encoder.encode("\u63D7")}).to.throw(Error, "EncodingError U+63D7");
expect(() => {ms932Encoder.encode("\u63D8")}).to.throw(Error, "EncodingError U+63D8");
expect(() => {ms932Encoder.encode("\u63D9")}).to.throw(Error, "EncodingError U+63D9");
r = r && ([...ms932Encoder.encode("揚換")].join(",") === "151,103,138,183"); // U+63DA
expect(() => {ms932Encoder.encode("\u63DC")}).to.throw(Error, "EncodingError U+63DC");
expect(() => {ms932Encoder.encode("\u63DD")}).to.throw(Error, "EncodingError U+63DD");
expect(() => {ms932Encoder.encode("\u63DE")}).to.throw(Error, "EncodingError U+63DE");
expect(() => {ms932Encoder.encode("\u63DF")}).to.throw(Error, "EncodingError U+63DF");
expect(() => {ms932Encoder.encode("\u63E0")}).to.throw(Error, "EncodingError U+63E0");
r = r && ([...ms932Encoder.encode("握")].join(",") === "136,172"); // U+63E1
expect(() => {ms932Encoder.encode("\u63E2")}).to.throw(Error, "EncodingError U+63E2");
r = r && ([...ms932Encoder.encode("揣")].join(",") === "157,133"); // U+63E3
expect(() => {ms932Encoder.encode("\u63E4")}).to.throw(Error, "EncodingError U+63E4");
expect(() => {ms932Encoder.encode("\u63E5")}).to.throw(Error, "EncodingError U+63E5");
expect(() => {ms932Encoder.encode("\u63E6")}).to.throw(Error, "EncodingError U+63E6");
expect(() => {ms932Encoder.encode("\u63E7")}).to.throw(Error, "EncodingError U+63E7");
expect(() => {ms932Encoder.encode("\u63E8")}).to.throw(Error, "EncodingError U+63E8");
r = r && ([...ms932Encoder.encode("揩")].join(",") === "157,130"); // U+63E9
expect(() => {ms932Encoder.encode("\u63EA")}).to.throw(Error, "EncodingError U+63EA");
expect(() => {ms932Encoder.encode("\u63EB")}).to.throw(Error, "EncodingError U+63EB");
expect(() => {ms932Encoder.encode("\u63EC")}).to.throw(Error, "EncodingError U+63EC");
expect(() => {ms932Encoder.encode("\u63ED")}).to.throw(Error, "EncodingError U+63ED");
r = r && ([...ms932Encoder.encode("揮")].join(",") === "138,246"); // U+63EE
expect(() => {ms932Encoder.encode("\u63EF")}).to.throw(Error, "EncodingError U+63EF");
expect(() => {ms932Encoder.encode("\u63F0")}).to.throw(Error, "EncodingError U+63F0");
expect(() => {ms932Encoder.encode("\u63F1")}).to.throw(Error, "EncodingError U+63F1");
expect(() => {ms932Encoder.encode("\u63F2")}).to.throw(Error, "EncodingError U+63F2");
expect(() => {ms932Encoder.encode("\u63F3")}).to.throw(Error, "EncodingError U+63F3");
r = r && ([...ms932Encoder.encode("援揵揶")].join(",") === "137,135,250,201,157,136"); // U+63F4
expect(() => {ms932Encoder.encode("\u63F7")}).to.throw(Error, "EncodingError U+63F7");
expect(() => {ms932Encoder.encode("\u63F8")}).to.throw(Error, "EncodingError U+63F8");
expect(() => {ms932Encoder.encode("\u63F9")}).to.throw(Error, "EncodingError U+63F9");
r = r && ([...ms932Encoder.encode("揺")].join(",") === "151,104"); // U+63FA
expect(() => {ms932Encoder.encode("\u63FB")}).to.throw(Error, "EncodingError U+63FB");
expect(() => {ms932Encoder.encode("\u63FC")}).to.throw(Error, "EncodingError U+63FC");
expect(() => {ms932Encoder.encode("\u63FD")}).to.throw(Error, "EncodingError U+63FD");
expect(() => {ms932Encoder.encode("\u63FE")}).to.throw(Error, "EncodingError U+63FE");
expect(() => {ms932Encoder.encode("\u63FF")}).to.throw(Error, "EncodingError U+63FF");

expect(r).to.equal(true);

  });

});
