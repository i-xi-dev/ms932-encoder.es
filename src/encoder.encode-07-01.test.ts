import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 7", () => {

  it("encode(string) - U+6000-U+63FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u6000")}, {name:"Error",message:"EncodingError U+6000"});
assert.throws(() => {ms932Encoder.encode("\u6001")}, {name:"Error",message:"EncodingError U+6001"});
assert.throws(() => {ms932Encoder.encode("\u6002")}, {name:"Error",message:"EncodingError U+6002"});
assert.throws(() => {ms932Encoder.encode("\u6003")}, {name:"Error",message:"EncodingError U+6003"});
assert.throws(() => {ms932Encoder.encode("\u6004")}, {name:"Error",message:"EncodingError U+6004"});
assert.throws(() => {ms932Encoder.encode("\u6005")}, {name:"Error",message:"EncodingError U+6005"});
assert.throws(() => {ms932Encoder.encode("\u6006")}, {name:"Error",message:"EncodingError U+6006"});
assert.throws(() => {ms932Encoder.encode("\u6007")}, {name:"Error",message:"EncodingError U+6007"});
assert.throws(() => {ms932Encoder.encode("\u6008")}, {name:"Error",message:"EncodingError U+6008"});
assert.throws(() => {ms932Encoder.encode("\u6009")}, {name:"Error",message:"EncodingError U+6009"});
assert.throws(() => {ms932Encoder.encode("\u600A")}, {name:"Error",message:"EncodingError U+600A"});
assert.throws(() => {ms932Encoder.encode("\u600B")}, {name:"Error",message:"EncodingError U+600B"});
assert.throws(() => {ms932Encoder.encode("\u600C")}, {name:"Error",message:"EncodingError U+600C"});
assert.throws(() => {ms932Encoder.encode("\u600D")}, {name:"Error",message:"EncodingError U+600D"});
r = r && ([...ms932Encoder.encode("怎怏怐")].join(",") === "156,131,156,137,156,129"); // U+600E
assert.throws(() => {ms932Encoder.encode("\u6011")}, {name:"Error",message:"EncodingError U+6011"});
r = r && ([...ms932Encoder.encode("怒")].join(",") === "147,123"); // U+6012
assert.throws(() => {ms932Encoder.encode("\u6013")}, {name:"Error",message:"EncodingError U+6013"});
assert.throws(() => {ms932Encoder.encode("\u6014")}, {name:"Error",message:"EncodingError U+6014"});
r = r && ([...ms932Encoder.encode("怕怖")].join(",") === "156,134,149,124"); // U+6015
assert.throws(() => {ms932Encoder.encode("\u6017")}, {name:"Error",message:"EncodingError U+6017"});
assert.throws(() => {ms932Encoder.encode("\u6018")}, {name:"Error",message:"EncodingError U+6018"});
r = r && ([...ms932Encoder.encode("怙")].join(",") === "156,128"); // U+6019
assert.throws(() => {ms932Encoder.encode("\u601A")}, {name:"Error",message:"EncodingError U+601A"});
r = r && ([...ms932Encoder.encode("怛怜思")].join(",") === "156,133,151,229,142,118"); // U+601B
assert.throws(() => {ms932Encoder.encode("\u601E")}, {name:"Error",message:"EncodingError U+601E"});
assert.throws(() => {ms932Encoder.encode("\u601F")}, {name:"Error",message:"EncodingError U+601F"});
r = r && ([...ms932Encoder.encode("怠怡")].join(",") === "145,211,156,125"); // U+6020
assert.throws(() => {ms932Encoder.encode("\u6022")}, {name:"Error",message:"EncodingError U+6022"});
assert.throws(() => {ms932Encoder.encode("\u6023")}, {name:"Error",message:"EncodingError U+6023"});
assert.throws(() => {ms932Encoder.encode("\u6024")}, {name:"Error",message:"EncodingError U+6024"});
r = r && ([...ms932Encoder.encode("急怦性怨怩怪怫")].join(",") === "139,125,156,136,144,171,137,133,156,130,137,246,156,135"); // U+6025
assert.throws(() => {ms932Encoder.encode("\u602C")}, {name:"Error",message:"EncodingError U+602C"});
assert.throws(() => {ms932Encoder.encode("\u602D")}, {name:"Error",message:"EncodingError U+602D"});
assert.throws(() => {ms932Encoder.encode("\u602E")}, {name:"Error",message:"EncodingError U+602E"});
r = r && ([...ms932Encoder.encode("怯")].join(",") === "139,175"); // U+602F
assert.throws(() => {ms932Encoder.encode("\u6030")}, {name:"Error",message:"EncodingError U+6030"});
r = r && ([...ms932Encoder.encode("怱")].join(",") === "156,132"); // U+6031
assert.throws(() => {ms932Encoder.encode("\u6032")}, {name:"Error",message:"EncodingError U+6032"});
assert.throws(() => {ms932Encoder.encode("\u6033")}, {name:"Error",message:"EncodingError U+6033"});
assert.throws(() => {ms932Encoder.encode("\u6034")}, {name:"Error",message:"EncodingError U+6034"});
assert.throws(() => {ms932Encoder.encode("\u6035")}, {name:"Error",message:"EncodingError U+6035"});
assert.throws(() => {ms932Encoder.encode("\u6036")}, {name:"Error",message:"EncodingError U+6036"});
assert.throws(() => {ms932Encoder.encode("\u6037")}, {name:"Error",message:"EncodingError U+6037"});
assert.throws(() => {ms932Encoder.encode("\u6038")}, {name:"Error",message:"EncodingError U+6038"});
assert.throws(() => {ms932Encoder.encode("\u6039")}, {name:"Error",message:"EncodingError U+6039"});
r = r && ([...ms932Encoder.encode("怺")].join(",") === "156,138"); // U+603A
assert.throws(() => {ms932Encoder.encode("\u603B")}, {name:"Error",message:"EncodingError U+603B"});
assert.throws(() => {ms932Encoder.encode("\u603C")}, {name:"Error",message:"EncodingError U+603C"});
assert.throws(() => {ms932Encoder.encode("\u603D")}, {name:"Error",message:"EncodingError U+603D"});
assert.throws(() => {ms932Encoder.encode("\u603E")}, {name:"Error",message:"EncodingError U+603E"});
assert.throws(() => {ms932Encoder.encode("\u603F")}, {name:"Error",message:"EncodingError U+603F"});
assert.throws(() => {ms932Encoder.encode("\u6040")}, {name:"Error",message:"EncodingError U+6040"});
r = r && ([...ms932Encoder.encode("恁恂恃")].join(",") === "156,140,156,150,156,148"); // U+6041
assert.throws(() => {ms932Encoder.encode("\u6044")}, {name:"Error",message:"EncodingError U+6044"});
assert.throws(() => {ms932Encoder.encode("\u6045")}, {name:"Error",message:"EncodingError U+6045"});
r = r && ([...ms932Encoder.encode("恆")].join(",") === "156,145"); // U+6046
assert.throws(() => {ms932Encoder.encode("\u6047")}, {name:"Error",message:"EncodingError U+6047"});
assert.throws(() => {ms932Encoder.encode("\u6048")}, {name:"Error",message:"EncodingError U+6048"});
assert.throws(() => {ms932Encoder.encode("\u6049")}, {name:"Error",message:"EncodingError U+6049"});
r = r && ([...ms932Encoder.encode("恊恋")].join(",") === "156,144,151,246"); // U+604A
assert.throws(() => {ms932Encoder.encode("\u604C")}, {name:"Error",message:"EncodingError U+604C"});
r = r && ([...ms932Encoder.encode("恍")].join(",") === "156,146"); // U+604D
assert.throws(() => {ms932Encoder.encode("\u604E")}, {name:"Error",message:"EncodingError U+604E"});
assert.throws(() => {ms932Encoder.encode("\u604F")}, {name:"Error",message:"EncodingError U+604F"});
r = r && ([...ms932Encoder.encode("恐")].join(",") === "139,176"); // U+6050
assert.throws(() => {ms932Encoder.encode("\u6051")}, {name:"Error",message:"EncodingError U+6051"});
r = r && ([...ms932Encoder.encode("恒")].join(",") === "141,80"); // U+6052
assert.throws(() => {ms932Encoder.encode("\u6053")}, {name:"Error",message:"EncodingError U+6053"});
assert.throws(() => {ms932Encoder.encode("\u6054")}, {name:"Error",message:"EncodingError U+6054"});
r = r && ([...ms932Encoder.encode("恕")].join(",") === "143,154"); // U+6055
assert.throws(() => {ms932Encoder.encode("\u6056")}, {name:"Error",message:"EncodingError U+6056"});
assert.throws(() => {ms932Encoder.encode("\u6057")}, {name:"Error",message:"EncodingError U+6057"});
assert.throws(() => {ms932Encoder.encode("\u6058")}, {name:"Error",message:"EncodingError U+6058"});
r = r && ([...ms932Encoder.encode("恙恚")].join(",") === "156,153,156,139"); // U+6059
assert.throws(() => {ms932Encoder.encode("\u605B")}, {name:"Error",message:"EncodingError U+605B"});
assert.throws(() => {ms932Encoder.encode("\u605C")}, {name:"Error",message:"EncodingError U+605C"});
r = r && ([...ms932Encoder.encode("恝")].join(",") === "250,188"); // U+605D
assert.throws(() => {ms932Encoder.encode("\u605E")}, {name:"Error",message:"EncodingError U+605E"});
r = r && ([...ms932Encoder.encode("恟恠")].join(",") === "156,143,156,126"); // U+605F
assert.throws(() => {ms932Encoder.encode("\u6061")}, {name:"Error",message:"EncodingError U+6061"});
r = r && ([...ms932Encoder.encode("恢恣恤恥")].join(",") === "137,248,156,147,156,149,146,112"); // U+6062
assert.throws(() => {ms932Encoder.encode("\u6066")}, {name:"Error",message:"EncodingError U+6066"});
assert.throws(() => {ms932Encoder.encode("\u6067")}, {name:"Error",message:"EncodingError U+6067"});
r = r && ([...ms932Encoder.encode("恨恩恪恫恬恭")].join(",") === "141,166,137,182,156,141,156,152,156,151,139,177"); // U+6068
assert.throws(() => {ms932Encoder.encode("\u606E")}, {name:"Error",message:"EncodingError U+606E"});
r = r && ([...ms932Encoder.encode("息恰")].join(",") === "145,167,138,134"); // U+606F
assert.throws(() => {ms932Encoder.encode("\u6071")}, {name:"Error",message:"EncodingError U+6071"});
assert.throws(() => {ms932Encoder.encode("\u6072")}, {name:"Error",message:"EncodingError U+6072"});
assert.throws(() => {ms932Encoder.encode("\u6073")}, {name:"Error",message:"EncodingError U+6073"});
assert.throws(() => {ms932Encoder.encode("\u6074")}, {name:"Error",message:"EncodingError U+6074"});
r = r && ([...ms932Encoder.encode("恵")].join(",") === "140,98"); // U+6075
assert.throws(() => {ms932Encoder.encode("\u6076")}, {name:"Error",message:"EncodingError U+6076"});
r = r && ([...ms932Encoder.encode("恷")].join(",") === "156,142"); // U+6077
assert.throws(() => {ms932Encoder.encode("\u6078")}, {name:"Error",message:"EncodingError U+6078"});
assert.throws(() => {ms932Encoder.encode("\u6079")}, {name:"Error",message:"EncodingError U+6079"});
assert.throws(() => {ms932Encoder.encode("\u607A")}, {name:"Error",message:"EncodingError U+607A"});
assert.throws(() => {ms932Encoder.encode("\u607B")}, {name:"Error",message:"EncodingError U+607B"});
assert.throws(() => {ms932Encoder.encode("\u607C")}, {name:"Error",message:"EncodingError U+607C"});
assert.throws(() => {ms932Encoder.encode("\u607D")}, {name:"Error",message:"EncodingError U+607D"});
assert.throws(() => {ms932Encoder.encode("\u607E")}, {name:"Error",message:"EncodingError U+607E"});
assert.throws(() => {ms932Encoder.encode("\u607F")}, {name:"Error",message:"EncodingError U+607F"});
assert.throws(() => {ms932Encoder.encode("\u6080")}, {name:"Error",message:"EncodingError U+6080"});
r = r && ([...ms932Encoder.encode("悁")].join(",") === "156,154"); // U+6081
assert.throws(() => {ms932Encoder.encode("\u6082")}, {name:"Error",message:"EncodingError U+6082"});
r = r && ([...ms932Encoder.encode("悃悄悅")].join(",") === "156,157,156,159,250,189"); // U+6083
assert.throws(() => {ms932Encoder.encode("\u6086")}, {name:"Error",message:"EncodingError U+6086"});
assert.throws(() => {ms932Encoder.encode("\u6087")}, {name:"Error",message:"EncodingError U+6087"});
assert.throws(() => {ms932Encoder.encode("\u6088")}, {name:"Error",message:"EncodingError U+6088"});
r = r && ([...ms932Encoder.encode("悉悊悋悌悍")].join(",") === "142,187,250,190,156,165,146,238,156,155"); // U+6089
assert.throws(() => {ms932Encoder.encode("\u608E")}, {name:"Error",message:"EncodingError U+608E"});
assert.throws(() => {ms932Encoder.encode("\u608F")}, {name:"Error",message:"EncodingError U+608F"});
assert.throws(() => {ms932Encoder.encode("\u6090")}, {name:"Error",message:"EncodingError U+6090"});
assert.throws(() => {ms932Encoder.encode("\u6091")}, {name:"Error",message:"EncodingError U+6091"});
r = r && ([...ms932Encoder.encode("悒")].join(",") === "156,163"); // U+6092
assert.throws(() => {ms932Encoder.encode("\u6093")}, {name:"Error",message:"EncodingError U+6093"});
r = r && ([...ms932Encoder.encode("悔")].join(",") === "137,247"); // U+6094
assert.throws(() => {ms932Encoder.encode("\u6095")}, {name:"Error",message:"EncodingError U+6095"});
r = r && ([...ms932Encoder.encode("悖悗")].join(",") === "156,161,156,162"); // U+6096
assert.throws(() => {ms932Encoder.encode("\u6098")}, {name:"Error",message:"EncodingError U+6098"});
assert.throws(() => {ms932Encoder.encode("\u6099")}, {name:"Error",message:"EncodingError U+6099"});
r = r && ([...ms932Encoder.encode("悚悛")].join(",") === "156,158,156,160"); // U+609A
assert.throws(() => {ms932Encoder.encode("\u609C")}, {name:"Error",message:"EncodingError U+609C"});
assert.throws(() => {ms932Encoder.encode("\u609D")}, {name:"Error",message:"EncodingError U+609D"});
assert.throws(() => {ms932Encoder.encode("\u609E")}, {name:"Error",message:"EncodingError U+609E"});
r = r && ([...ms932Encoder.encode("悟悠")].join(",") === "140,229,151,73"); // U+609F
assert.throws(() => {ms932Encoder.encode("\u60A1")}, {name:"Error",message:"EncodingError U+60A1"});
assert.throws(() => {ms932Encoder.encode("\u60A2")}, {name:"Error",message:"EncodingError U+60A2"});
r = r && ([...ms932Encoder.encode("患")].join(",") === "138,179"); // U+60A3
assert.throws(() => {ms932Encoder.encode("\u60A4")}, {name:"Error",message:"EncodingError U+60A4"});
assert.throws(() => {ms932Encoder.encode("\u60A5")}, {name:"Error",message:"EncodingError U+60A5"});
r = r && ([...ms932Encoder.encode("悦悧")].join(",") === "137,120,156,164"); // U+60A6
assert.throws(() => {ms932Encoder.encode("\u60A8")}, {name:"Error",message:"EncodingError U+60A8"});
r = r && ([...ms932Encoder.encode("悩悪")].join(",") === "148,89,136,171"); // U+60A9
assert.throws(() => {ms932Encoder.encode("\u60AB")}, {name:"Error",message:"EncodingError U+60AB"});
assert.throws(() => {ms932Encoder.encode("\u60AC")}, {name:"Error",message:"EncodingError U+60AC"});
assert.throws(() => {ms932Encoder.encode("\u60AD")}, {name:"Error",message:"EncodingError U+60AD"});
assert.throws(() => {ms932Encoder.encode("\u60AE")}, {name:"Error",message:"EncodingError U+60AE"});
assert.throws(() => {ms932Encoder.encode("\u60AF")}, {name:"Error",message:"EncodingError U+60AF"});
assert.throws(() => {ms932Encoder.encode("\u60B0")}, {name:"Error",message:"EncodingError U+60B0"});
assert.throws(() => {ms932Encoder.encode("\u60B1")}, {name:"Error",message:"EncodingError U+60B1"});
r = r && ([...ms932Encoder.encode("悲悳悴悵悶")].join(",") === "148,223,156,123,156,170,156,174,150,227"); // U+60B2
assert.throws(() => {ms932Encoder.encode("\u60B7")}, {name:"Error",message:"EncodingError U+60B7"});
r = r && ([...ms932Encoder.encode("悸")].join(",") === "156,167"); // U+60B8
assert.throws(() => {ms932Encoder.encode("\u60B9")}, {name:"Error",message:"EncodingError U+60B9"});
assert.throws(() => {ms932Encoder.encode("\u60BA")}, {name:"Error",message:"EncodingError U+60BA"});
assert.throws(() => {ms932Encoder.encode("\u60BB")}, {name:"Error",message:"EncodingError U+60BB"});
r = r && ([...ms932Encoder.encode("悼悽")].join(",") === "147,137,156,172"); // U+60BC
assert.throws(() => {ms932Encoder.encode("\u60BE")}, {name:"Error",message:"EncodingError U+60BE"});
assert.throws(() => {ms932Encoder.encode("\u60BF")}, {name:"Error",message:"EncodingError U+60BF"});
assert.throws(() => {ms932Encoder.encode("\u60C0")}, {name:"Error",message:"EncodingError U+60C0"});
assert.throws(() => {ms932Encoder.encode("\u60C1")}, {name:"Error",message:"EncodingError U+60C1"});
assert.throws(() => {ms932Encoder.encode("\u60C2")}, {name:"Error",message:"EncodingError U+60C2"});
assert.throws(() => {ms932Encoder.encode("\u60C3")}, {name:"Error",message:"EncodingError U+60C3"});
assert.throws(() => {ms932Encoder.encode("\u60C4")}, {name:"Error",message:"EncodingError U+60C4"});
r = r && ([...ms932Encoder.encode("情惆惇")].join(",") === "143,238,156,173,147,213"); // U+60C5
assert.throws(() => {ms932Encoder.encode("\u60C8")}, {name:"Error",message:"EncodingError U+60C8"});
assert.throws(() => {ms932Encoder.encode("\u60C9")}, {name:"Error",message:"EncodingError U+60C9"});
assert.throws(() => {ms932Encoder.encode("\u60CA")}, {name:"Error",message:"EncodingError U+60CA"});
assert.throws(() => {ms932Encoder.encode("\u60CB")}, {name:"Error",message:"EncodingError U+60CB"});
assert.throws(() => {ms932Encoder.encode("\u60CC")}, {name:"Error",message:"EncodingError U+60CC"});
assert.throws(() => {ms932Encoder.encode("\u60CD")}, {name:"Error",message:"EncodingError U+60CD"});
assert.throws(() => {ms932Encoder.encode("\u60CE")}, {name:"Error",message:"EncodingError U+60CE"});
assert.throws(() => {ms932Encoder.encode("\u60CF")}, {name:"Error",message:"EncodingError U+60CF"});
assert.throws(() => {ms932Encoder.encode("\u60D0")}, {name:"Error",message:"EncodingError U+60D0"});
r = r && ([...ms932Encoder.encode("惑")].join(",") === "152,102"); // U+60D1
assert.throws(() => {ms932Encoder.encode("\u60D2")}, {name:"Error",message:"EncodingError U+60D2"});
r = r && ([...ms932Encoder.encode("惓")].join(",") === "156,169"); // U+60D3
assert.throws(() => {ms932Encoder.encode("\u60D4")}, {name:"Error",message:"EncodingError U+60D4"});
r = r && ([...ms932Encoder.encode("惕")].join(",") === "250,192"); // U+60D5
assert.throws(() => {ms932Encoder.encode("\u60D6")}, {name:"Error",message:"EncodingError U+60D6"});
assert.throws(() => {ms932Encoder.encode("\u60D7")}, {name:"Error",message:"EncodingError U+60D7"});
r = r && ([...ms932Encoder.encode("惘")].join(",") === "156,175"); // U+60D8
assert.throws(() => {ms932Encoder.encode("\u60D9")}, {name:"Error",message:"EncodingError U+60D9"});
r = r && ([...ms932Encoder.encode("惚")].join(",") === "141,155"); // U+60DA
assert.throws(() => {ms932Encoder.encode("\u60DB")}, {name:"Error",message:"EncodingError U+60DB"});
r = r && ([...ms932Encoder.encode("惜")].join(",") === "144,201"); // U+60DC
assert.throws(() => {ms932Encoder.encode("\u60DD")}, {name:"Error",message:"EncodingError U+60DD"});
r = r && ([...ms932Encoder.encode("惞惟惠惡")].join(",") === "250,191,136,210,156,168,156,166"); // U+60DE
assert.throws(() => {ms932Encoder.encode("\u60E2")}, {name:"Error",message:"EncodingError U+60E2"});
r = r && ([...ms932Encoder.encode("惣")].join(",") === "145,121"); // U+60E3
assert.throws(() => {ms932Encoder.encode("\u60E4")}, {name:"Error",message:"EncodingError U+60E4"});
assert.throws(() => {ms932Encoder.encode("\u60E5")}, {name:"Error",message:"EncodingError U+60E5"});
assert.throws(() => {ms932Encoder.encode("\u60E6")}, {name:"Error",message:"EncodingError U+60E6"});
r = r && ([...ms932Encoder.encode("惧惨")].join(",") === "156,156,142,83"); // U+60E7
assert.throws(() => {ms932Encoder.encode("\u60E9")}, {name:"Error",message:"EncodingError U+60E9"});
assert.throws(() => {ms932Encoder.encode("\u60EA")}, {name:"Error",message:"EncodingError U+60EA"});
assert.throws(() => {ms932Encoder.encode("\u60EB")}, {name:"Error",message:"EncodingError U+60EB"});
assert.throws(() => {ms932Encoder.encode("\u60EC")}, {name:"Error",message:"EncodingError U+60EC"});
assert.throws(() => {ms932Encoder.encode("\u60ED")}, {name:"Error",message:"EncodingError U+60ED"});
assert.throws(() => {ms932Encoder.encode("\u60EE")}, {name:"Error",message:"EncodingError U+60EE"});
assert.throws(() => {ms932Encoder.encode("\u60EF")}, {name:"Error",message:"EncodingError U+60EF"});
r = r && ([...ms932Encoder.encode("惰惱惲想惴")].join(",") === "145,196,156,187,250,194,145,122,156,182"); // U+60F0
assert.throws(() => {ms932Encoder.encode("\u60F5")}, {name:"Error",message:"EncodingError U+60F5"});
r = r && ([...ms932Encoder.encode("惶惷")].join(",") === "156,179,156,180"); // U+60F6
assert.throws(() => {ms932Encoder.encode("\u60F8")}, {name:"Error",message:"EncodingError U+60F8"});
r = r && ([...ms932Encoder.encode("惹惺惻")].join(",") === "142,228,156,183,156,186"); // U+60F9
assert.throws(() => {ms932Encoder.encode("\u60FC")}, {name:"Error",message:"EncodingError U+60FC"});
assert.throws(() => {ms932Encoder.encode("\u60FD")}, {name:"Error",message:"EncodingError U+60FD"});
assert.throws(() => {ms932Encoder.encode("\u60FE")}, {name:"Error",message:"EncodingError U+60FE"});
assert.throws(() => {ms932Encoder.encode("\u60FF")}, {name:"Error",message:"EncodingError U+60FF"});
r = r && ([...ms932Encoder.encode("愀愁")].join(",") === "156,181,143,68"); // U+6100
assert.throws(() => {ms932Encoder.encode("\u6102")}, {name:"Error",message:"EncodingError U+6102"});
r = r && ([...ms932Encoder.encode("愃")].join(",") === "156,184"); // U+6103
assert.throws(() => {ms932Encoder.encode("\u6104")}, {name:"Error",message:"EncodingError U+6104"});
assert.throws(() => {ms932Encoder.encode("\u6105")}, {name:"Error",message:"EncodingError U+6105"});
r = r && ([...ms932Encoder.encode("愆")].join(",") === "156,178"); // U+6106
assert.throws(() => {ms932Encoder.encode("\u6107")}, {name:"Error",message:"EncodingError U+6107"});
r = r && ([...ms932Encoder.encode("愈愉")].join(",") === "150,250,150,249"); // U+6108
assert.throws(() => {ms932Encoder.encode("\u610A")}, {name:"Error",message:"EncodingError U+610A"});
assert.throws(() => {ms932Encoder.encode("\u610B")}, {name:"Error",message:"EncodingError U+610B"});
assert.throws(() => {ms932Encoder.encode("\u610C")}, {name:"Error",message:"EncodingError U+610C"});
r = r && ([...ms932Encoder.encode("愍愎意")].join(",") === "156,188,156,189,136,211"); // U+610D
assert.throws(() => {ms932Encoder.encode("\u6110")}, {name:"Error",message:"EncodingError U+6110"});
r = r && ([...ms932Encoder.encode("愑")].join(",") === "250,195"); // U+6111
assert.throws(() => {ms932Encoder.encode("\u6112")}, {name:"Error",message:"EncodingError U+6112"});
assert.throws(() => {ms932Encoder.encode("\u6113")}, {name:"Error",message:"EncodingError U+6113"});
assert.throws(() => {ms932Encoder.encode("\u6114")}, {name:"Error",message:"EncodingError U+6114"});
r = r && ([...ms932Encoder.encode("愕")].join(",") === "156,177"); // U+6115
assert.throws(() => {ms932Encoder.encode("\u6116")}, {name:"Error",message:"EncodingError U+6116"});
assert.throws(() => {ms932Encoder.encode("\u6117")}, {name:"Error",message:"EncodingError U+6117"});
assert.throws(() => {ms932Encoder.encode("\u6118")}, {name:"Error",message:"EncodingError U+6118"});
assert.throws(() => {ms932Encoder.encode("\u6119")}, {name:"Error",message:"EncodingError U+6119"});
r = r && ([...ms932Encoder.encode("愚愛")].join(",") === "139,240,136,164"); // U+611A
assert.throws(() => {ms932Encoder.encode("\u611C")}, {name:"Error",message:"EncodingError U+611C"});
assert.throws(() => {ms932Encoder.encode("\u611D")}, {name:"Error",message:"EncodingError U+611D"});
assert.throws(() => {ms932Encoder.encode("\u611E")}, {name:"Error",message:"EncodingError U+611E"});
r = r && ([...ms932Encoder.encode("感愠愡")].join(",") === "138,180,250,193,156,185"); // U+611F
assert.throws(() => {ms932Encoder.encode("\u6122")}, {name:"Error",message:"EncodingError U+6122"});
assert.throws(() => {ms932Encoder.encode("\u6123")}, {name:"Error",message:"EncodingError U+6123"});
assert.throws(() => {ms932Encoder.encode("\u6124")}, {name:"Error",message:"EncodingError U+6124"});
assert.throws(() => {ms932Encoder.encode("\u6125")}, {name:"Error",message:"EncodingError U+6125"});
assert.throws(() => {ms932Encoder.encode("\u6126")}, {name:"Error",message:"EncodingError U+6126"});
r = r && ([...ms932Encoder.encode("愧愨")].join(",") === "156,193,156,192"); // U+6127
assert.throws(() => {ms932Encoder.encode("\u6129")}, {name:"Error",message:"EncodingError U+6129"});
assert.throws(() => {ms932Encoder.encode("\u612A")}, {name:"Error",message:"EncodingError U+612A"});
assert.throws(() => {ms932Encoder.encode("\u612B")}, {name:"Error",message:"EncodingError U+612B"});
r = r && ([...ms932Encoder.encode("愬")].join(",") === "156,197"); // U+612C
assert.throws(() => {ms932Encoder.encode("\u612D")}, {name:"Error",message:"EncodingError U+612D"});
assert.throws(() => {ms932Encoder.encode("\u612E")}, {name:"Error",message:"EncodingError U+612E"});
assert.throws(() => {ms932Encoder.encode("\u612F")}, {name:"Error",message:"EncodingError U+612F"});
r = r && ([...ms932Encoder.encode("愰")].join(",") === "250,197"); // U+6130
assert.throws(() => {ms932Encoder.encode("\u6131")}, {name:"Error",message:"EncodingError U+6131"});
assert.throws(() => {ms932Encoder.encode("\u6132")}, {name:"Error",message:"EncodingError U+6132"});
assert.throws(() => {ms932Encoder.encode("\u6133")}, {name:"Error",message:"EncodingError U+6133"});
r = r && ([...ms932Encoder.encode("愴")].join(",") === "156,198"); // U+6134
assert.throws(() => {ms932Encoder.encode("\u6135")}, {name:"Error",message:"EncodingError U+6135"});
assert.throws(() => {ms932Encoder.encode("\u6136")}, {name:"Error",message:"EncodingError U+6136"});
r = r && ([...ms932Encoder.encode("愷")].join(",") === "250,196"); // U+6137
assert.throws(() => {ms932Encoder.encode("\u6138")}, {name:"Error",message:"EncodingError U+6138"});
assert.throws(() => {ms932Encoder.encode("\u6139")}, {name:"Error",message:"EncodingError U+6139"});
assert.throws(() => {ms932Encoder.encode("\u613A")}, {name:"Error",message:"EncodingError U+613A"});
assert.throws(() => {ms932Encoder.encode("\u613B")}, {name:"Error",message:"EncodingError U+613B"});
r = r && ([...ms932Encoder.encode("愼愽愾愿")].join(",") === "156,196,156,199,156,191,156,195"); // U+613C
assert.throws(() => {ms932Encoder.encode("\u6140")}, {name:"Error",message:"EncodingError U+6140"});
assert.throws(() => {ms932Encoder.encode("\u6141")}, {name:"Error",message:"EncodingError U+6141"});
r = r && ([...ms932Encoder.encode("慂")].join(",") === "156,200"); // U+6142
assert.throws(() => {ms932Encoder.encode("\u6143")}, {name:"Error",message:"EncodingError U+6143"});
r = r && ([...ms932Encoder.encode("慄")].join(",") === "156,201"); // U+6144
assert.throws(() => {ms932Encoder.encode("\u6145")}, {name:"Error",message:"EncodingError U+6145"});
assert.throws(() => {ms932Encoder.encode("\u6146")}, {name:"Error",message:"EncodingError U+6146"});
r = r && ([...ms932Encoder.encode("慇慈")].join(",") === "156,190,142,156"); // U+6147
assert.throws(() => {ms932Encoder.encode("\u6149")}, {name:"Error",message:"EncodingError U+6149"});
r = r && ([...ms932Encoder.encode("慊態慌慍慎")].join(",") === "156,194,145,212,141,81,156,176,144,84"); // U+614A
assert.throws(() => {ms932Encoder.encode("\u614F")}, {name:"Error",message:"EncodingError U+614F"});
assert.throws(() => {ms932Encoder.encode("\u6150")}, {name:"Error",message:"EncodingError U+6150"});
assert.throws(() => {ms932Encoder.encode("\u6151")}, {name:"Error",message:"EncodingError U+6151"});
assert.throws(() => {ms932Encoder.encode("\u6152")}, {name:"Error",message:"EncodingError U+6152"});
r = r && ([...ms932Encoder.encode("慓")].join(",") === "156,214"); // U+6153
assert.throws(() => {ms932Encoder.encode("\u6154")}, {name:"Error",message:"EncodingError U+6154"});
r = r && ([...ms932Encoder.encode("慕")].join(",") === "149,231"); // U+6155
assert.throws(() => {ms932Encoder.encode("\u6156")}, {name:"Error",message:"EncodingError U+6156"});
assert.throws(() => {ms932Encoder.encode("\u6157")}, {name:"Error",message:"EncodingError U+6157"});
r = r && ([...ms932Encoder.encode("慘慙慚")].join(",") === "156,204,156,205,156,206"); // U+6158
assert.throws(() => {ms932Encoder.encode("\u615B")}, {name:"Error",message:"EncodingError U+615B"});
assert.throws(() => {ms932Encoder.encode("\u615C")}, {name:"Error",message:"EncodingError U+615C"});
r = r && ([...ms932Encoder.encode("慝")].join(",") === "156,213"); // U+615D
assert.throws(() => {ms932Encoder.encode("\u615E")}, {name:"Error",message:"EncodingError U+615E"});
r = r && ([...ms932Encoder.encode("慟")].join(",") === "156,212"); // U+615F
assert.throws(() => {ms932Encoder.encode("\u6160")}, {name:"Error",message:"EncodingError U+6160"});
assert.throws(() => {ms932Encoder.encode("\u6161")}, {name:"Error",message:"EncodingError U+6161"});
r = r && ([...ms932Encoder.encode("慢慣")].join(",") === "150,157,138,181"); // U+6162
assert.throws(() => {ms932Encoder.encode("\u6164")}, {name:"Error",message:"EncodingError U+6164"});
r = r && ([...ms932Encoder.encode("慥")].join(",") === "156,210"); // U+6165
assert.throws(() => {ms932Encoder.encode("\u6166")}, {name:"Error",message:"EncodingError U+6166"});
r = r && ([...ms932Encoder.encode("慧慨")].join(",") === "140,100,138,83"); // U+6167
assert.throws(() => {ms932Encoder.encode("\u6169")}, {name:"Error",message:"EncodingError U+6169"});
assert.throws(() => {ms932Encoder.encode("\u616A")}, {name:"Error",message:"EncodingError U+616A"});
r = r && ([...ms932Encoder.encode("慫")].join(",") === "156,207"); // U+616B
assert.throws(() => {ms932Encoder.encode("\u616C")}, {name:"Error",message:"EncodingError U+616C"});
assert.throws(() => {ms932Encoder.encode("\u616D")}, {name:"Error",message:"EncodingError U+616D"});
r = r && ([...ms932Encoder.encode("慮慯慰慱")].join(",") === "151,182,156,209,136,212,156,211"); // U+616E
assert.throws(() => {ms932Encoder.encode("\u6172")}, {name:"Error",message:"EncodingError U+6172"});
r = r && ([...ms932Encoder.encode("慳慴慵慶慷")].join(",") === "156,202,156,208,156,215,140,99,156,203"); // U+6173
assert.throws(() => {ms932Encoder.encode("\u6178")}, {name:"Error",message:"EncodingError U+6178"});
assert.throws(() => {ms932Encoder.encode("\u6179")}, {name:"Error",message:"EncodingError U+6179"});
assert.throws(() => {ms932Encoder.encode("\u617A")}, {name:"Error",message:"EncodingError U+617A"});
assert.throws(() => {ms932Encoder.encode("\u617B")}, {name:"Error",message:"EncodingError U+617B"});
assert.throws(() => {ms932Encoder.encode("\u617C")}, {name:"Error",message:"EncodingError U+617C"});
assert.throws(() => {ms932Encoder.encode("\u617D")}, {name:"Error",message:"EncodingError U+617D"});
r = r && ([...ms932Encoder.encode("慾")].join(",") === "151,124"); // U+617E
assert.throws(() => {ms932Encoder.encode("\u617F")}, {name:"Error",message:"EncodingError U+617F"});
assert.throws(() => {ms932Encoder.encode("\u6180")}, {name:"Error",message:"EncodingError U+6180"});
assert.throws(() => {ms932Encoder.encode("\u6181")}, {name:"Error",message:"EncodingError U+6181"});
r = r && ([...ms932Encoder.encode("憂")].join(",") === "151,74"); // U+6182
assert.throws(() => {ms932Encoder.encode("\u6183")}, {name:"Error",message:"EncodingError U+6183"});
assert.throws(() => {ms932Encoder.encode("\u6184")}, {name:"Error",message:"EncodingError U+6184"});
assert.throws(() => {ms932Encoder.encode("\u6185")}, {name:"Error",message:"EncodingError U+6185"});
assert.throws(() => {ms932Encoder.encode("\u6186")}, {name:"Error",message:"EncodingError U+6186"});
r = r && ([...ms932Encoder.encode("憇")].join(",") === "156,218"); // U+6187
assert.throws(() => {ms932Encoder.encode("\u6188")}, {name:"Error",message:"EncodingError U+6188"});
assert.throws(() => {ms932Encoder.encode("\u6189")}, {name:"Error",message:"EncodingError U+6189"});
r = r && ([...ms932Encoder.encode("憊")].join(",") === "156,222"); // U+618A
assert.throws(() => {ms932Encoder.encode("\u618B")}, {name:"Error",message:"EncodingError U+618B"});
assert.throws(() => {ms932Encoder.encode("\u618C")}, {name:"Error",message:"EncodingError U+618C"});
assert.throws(() => {ms932Encoder.encode("\u618D")}, {name:"Error",message:"EncodingError U+618D"});
r = r && ([...ms932Encoder.encode("憎")].join(",") === "145,158"); // U+618E
assert.throws(() => {ms932Encoder.encode("\u618F")}, {name:"Error",message:"EncodingError U+618F"});
r = r && ([...ms932Encoder.encode("憐憑")].join(",") === "151,247,156,223"); // U+6190
assert.throws(() => {ms932Encoder.encode("\u6192")}, {name:"Error",message:"EncodingError U+6192"});
assert.throws(() => {ms932Encoder.encode("\u6193")}, {name:"Error",message:"EncodingError U+6193"});
r = r && ([...ms932Encoder.encode("憔")].join(",") === "156,220"); // U+6194
assert.throws(() => {ms932Encoder.encode("\u6195")}, {name:"Error",message:"EncodingError U+6195"});
r = r && ([...ms932Encoder.encode("憖")].join(",") === "156,217"); // U+6196
assert.throws(() => {ms932Encoder.encode("\u6197")}, {name:"Error",message:"EncodingError U+6197"});
r = r && ([...ms932Encoder.encode("憘憙憚")].join(",") === "250,198,156,216,156,221"); // U+6198
assert.throws(() => {ms932Encoder.encode("\u619B")}, {name:"Error",message:"EncodingError U+619B"});
assert.throws(() => {ms932Encoder.encode("\u619C")}, {name:"Error",message:"EncodingError U+619C"});
assert.throws(() => {ms932Encoder.encode("\u619D")}, {name:"Error",message:"EncodingError U+619D"});
assert.throws(() => {ms932Encoder.encode("\u619E")}, {name:"Error",message:"EncodingError U+619E"});
assert.throws(() => {ms932Encoder.encode("\u619F")}, {name:"Error",message:"EncodingError U+619F"});
assert.throws(() => {ms932Encoder.encode("\u61A0")}, {name:"Error",message:"EncodingError U+61A0"});
assert.throws(() => {ms932Encoder.encode("\u61A1")}, {name:"Error",message:"EncodingError U+61A1"});
assert.throws(() => {ms932Encoder.encode("\u61A2")}, {name:"Error",message:"EncodingError U+61A2"});
assert.throws(() => {ms932Encoder.encode("\u61A3")}, {name:"Error",message:"EncodingError U+61A3"});
r = r && ([...ms932Encoder.encode("憤")].join(",") === "149,174"); // U+61A4
assert.throws(() => {ms932Encoder.encode("\u61A5")}, {name:"Error",message:"EncodingError U+61A5"});
assert.throws(() => {ms932Encoder.encode("\u61A6")}, {name:"Error",message:"EncodingError U+61A6"});
r = r && ([...ms932Encoder.encode("憧")].join(",") === "147,178"); // U+61A7
assert.throws(() => {ms932Encoder.encode("\u61A8")}, {name:"Error",message:"EncodingError U+61A8"});
r = r && ([...ms932Encoder.encode("憩")].join(",") === "140,101"); // U+61A9
assert.throws(() => {ms932Encoder.encode("\u61AA")}, {name:"Error",message:"EncodingError U+61AA"});
r = r && ([...ms932Encoder.encode("憫憬")].join(",") === "156,224,156,219"); // U+61AB
assert.throws(() => {ms932Encoder.encode("\u61AD")}, {name:"Error",message:"EncodingError U+61AD"});
r = r && ([...ms932Encoder.encode("憮")].join(",") === "156,225"); // U+61AE
assert.throws(() => {ms932Encoder.encode("\u61AF")}, {name:"Error",message:"EncodingError U+61AF"});
assert.throws(() => {ms932Encoder.encode("\u61B0")}, {name:"Error",message:"EncodingError U+61B0"});
assert.throws(() => {ms932Encoder.encode("\u61B1")}, {name:"Error",message:"EncodingError U+61B1"});
r = r && ([...ms932Encoder.encode("憲")].join(",") === "140,155"); // U+61B2
assert.throws(() => {ms932Encoder.encode("\u61B3")}, {name:"Error",message:"EncodingError U+61B3"});
assert.throws(() => {ms932Encoder.encode("\u61B4")}, {name:"Error",message:"EncodingError U+61B4"});
assert.throws(() => {ms932Encoder.encode("\u61B5")}, {name:"Error",message:"EncodingError U+61B5"});
r = r && ([...ms932Encoder.encode("憶")].join(",") === "137,175"); // U+61B6
assert.throws(() => {ms932Encoder.encode("\u61B7")}, {name:"Error",message:"EncodingError U+61B7"});
assert.throws(() => {ms932Encoder.encode("\u61B8")}, {name:"Error",message:"EncodingError U+61B8"});
assert.throws(() => {ms932Encoder.encode("\u61B9")}, {name:"Error",message:"EncodingError U+61B9"});
r = r && ([...ms932Encoder.encode("憺")].join(",") === "156,233"); // U+61BA
assert.throws(() => {ms932Encoder.encode("\u61BB")}, {name:"Error",message:"EncodingError U+61BB"});
assert.throws(() => {ms932Encoder.encode("\u61BC")}, {name:"Error",message:"EncodingError U+61BC"});
assert.throws(() => {ms932Encoder.encode("\u61BD")}, {name:"Error",message:"EncodingError U+61BD"});
r = r && ([...ms932Encoder.encode("憾")].join(",") === "138,182"); // U+61BE
assert.throws(() => {ms932Encoder.encode("\u61BF")}, {name:"Error",message:"EncodingError U+61BF"});
assert.throws(() => {ms932Encoder.encode("\u61C0")}, {name:"Error",message:"EncodingError U+61C0"});
assert.throws(() => {ms932Encoder.encode("\u61C1")}, {name:"Error",message:"EncodingError U+61C1"});
assert.throws(() => {ms932Encoder.encode("\u61C2")}, {name:"Error",message:"EncodingError U+61C2"});
r = r && ([...ms932Encoder.encode("懃")].join(",") === "156,231"); // U+61C3
assert.throws(() => {ms932Encoder.encode("\u61C4")}, {name:"Error",message:"EncodingError U+61C4"});
assert.throws(() => {ms932Encoder.encode("\u61C5")}, {name:"Error",message:"EncodingError U+61C5"});
r = r && ([...ms932Encoder.encode("懆懇懈應懊懋懌懍")].join(",") === "156,232,141,167,156,230,156,228,156,227,156,234,156,226,156,236"); // U+61C6
assert.throws(() => {ms932Encoder.encode("\u61CE")}, {name:"Error",message:"EncodingError U+61CE"});
assert.throws(() => {ms932Encoder.encode("\u61CF")}, {name:"Error",message:"EncodingError U+61CF"});
r = r && ([...ms932Encoder.encode("懐")].join(",") === "137,249"); // U+61D0
assert.throws(() => {ms932Encoder.encode("\u61D1")}, {name:"Error",message:"EncodingError U+61D1"});
assert.throws(() => {ms932Encoder.encode("\u61D2")}, {name:"Error",message:"EncodingError U+61D2"});
assert.throws(() => {ms932Encoder.encode("\u61D3")}, {name:"Error",message:"EncodingError U+61D3"});
assert.throws(() => {ms932Encoder.encode("\u61D4")}, {name:"Error",message:"EncodingError U+61D4"});
assert.throws(() => {ms932Encoder.encode("\u61D5")}, {name:"Error",message:"EncodingError U+61D5"});
assert.throws(() => {ms932Encoder.encode("\u61D6")}, {name:"Error",message:"EncodingError U+61D6"});
assert.throws(() => {ms932Encoder.encode("\u61D7")}, {name:"Error",message:"EncodingError U+61D7"});
assert.throws(() => {ms932Encoder.encode("\u61D8")}, {name:"Error",message:"EncodingError U+61D8"});
assert.throws(() => {ms932Encoder.encode("\u61D9")}, {name:"Error",message:"EncodingError U+61D9"});
assert.throws(() => {ms932Encoder.encode("\u61DA")}, {name:"Error",message:"EncodingError U+61DA"});
assert.throws(() => {ms932Encoder.encode("\u61DB")}, {name:"Error",message:"EncodingError U+61DB"});
assert.throws(() => {ms932Encoder.encode("\u61DC")}, {name:"Error",message:"EncodingError U+61DC"});
assert.throws(() => {ms932Encoder.encode("\u61DD")}, {name:"Error",message:"EncodingError U+61DD"});
assert.throws(() => {ms932Encoder.encode("\u61DE")}, {name:"Error",message:"EncodingError U+61DE"});
assert.throws(() => {ms932Encoder.encode("\u61DF")}, {name:"Error",message:"EncodingError U+61DF"});
assert.throws(() => {ms932Encoder.encode("\u61E0")}, {name:"Error",message:"EncodingError U+61E0"});
assert.throws(() => {ms932Encoder.encode("\u61E1")}, {name:"Error",message:"EncodingError U+61E1"});
assert.throws(() => {ms932Encoder.encode("\u61E2")}, {name:"Error",message:"EncodingError U+61E2"});
r = r && ([...ms932Encoder.encode("懣")].join(",") === "156,238"); // U+61E3
assert.throws(() => {ms932Encoder.encode("\u61E4")}, {name:"Error",message:"EncodingError U+61E4"});
assert.throws(() => {ms932Encoder.encode("\u61E5")}, {name:"Error",message:"EncodingError U+61E5"});
r = r && ([...ms932Encoder.encode("懦")].join(",") === "156,237"); // U+61E6
assert.throws(() => {ms932Encoder.encode("\u61E7")}, {name:"Error",message:"EncodingError U+61E7"});
assert.throws(() => {ms932Encoder.encode("\u61E8")}, {name:"Error",message:"EncodingError U+61E8"});
assert.throws(() => {ms932Encoder.encode("\u61E9")}, {name:"Error",message:"EncodingError U+61E9"});
assert.throws(() => {ms932Encoder.encode("\u61EA")}, {name:"Error",message:"EncodingError U+61EA"});
assert.throws(() => {ms932Encoder.encode("\u61EB")}, {name:"Error",message:"EncodingError U+61EB"});
assert.throws(() => {ms932Encoder.encode("\u61EC")}, {name:"Error",message:"EncodingError U+61EC"});
assert.throws(() => {ms932Encoder.encode("\u61ED")}, {name:"Error",message:"EncodingError U+61ED"});
assert.throws(() => {ms932Encoder.encode("\u61EE")}, {name:"Error",message:"EncodingError U+61EE"});
assert.throws(() => {ms932Encoder.encode("\u61EF")}, {name:"Error",message:"EncodingError U+61EF"});
assert.throws(() => {ms932Encoder.encode("\u61F0")}, {name:"Error",message:"EncodingError U+61F0"});
assert.throws(() => {ms932Encoder.encode("\u61F1")}, {name:"Error",message:"EncodingError U+61F1"});
r = r && ([...ms932Encoder.encode("懲")].join(",") === "146,166"); // U+61F2
assert.throws(() => {ms932Encoder.encode("\u61F3")}, {name:"Error",message:"EncodingError U+61F3"});
r = r && ([...ms932Encoder.encode("懴")].join(",") === "156,241"); // U+61F4
assert.throws(() => {ms932Encoder.encode("\u61F5")}, {name:"Error",message:"EncodingError U+61F5"});
r = r && ([...ms932Encoder.encode("懶懷懸")].join(",") === "156,239,156,229,140,156"); // U+61F6
assert.throws(() => {ms932Encoder.encode("\u61F9")}, {name:"Error",message:"EncodingError U+61F9"});
r = r && ([...ms932Encoder.encode("懺")].join(",") === "156,240"); // U+61FA
assert.throws(() => {ms932Encoder.encode("\u61FB")}, {name:"Error",message:"EncodingError U+61FB"});
r = r && ([...ms932Encoder.encode("懼懽懾懿戀")].join(",") === "156,244,156,243,156,245,156,242,156,246"); // U+61FC
assert.throws(() => {ms932Encoder.encode("\u6201")}, {name:"Error",message:"EncodingError U+6201"});
assert.throws(() => {ms932Encoder.encode("\u6202")}, {name:"Error",message:"EncodingError U+6202"});
assert.throws(() => {ms932Encoder.encode("\u6203")}, {name:"Error",message:"EncodingError U+6203"});
assert.throws(() => {ms932Encoder.encode("\u6204")}, {name:"Error",message:"EncodingError U+6204"});
assert.throws(() => {ms932Encoder.encode("\u6205")}, {name:"Error",message:"EncodingError U+6205"});
assert.throws(() => {ms932Encoder.encode("\u6206")}, {name:"Error",message:"EncodingError U+6206"});
assert.throws(() => {ms932Encoder.encode("\u6207")}, {name:"Error",message:"EncodingError U+6207"});
r = r && ([...ms932Encoder.encode("戈戉戊")].join(",") === "156,247,156,248,149,232"); // U+6208
assert.throws(() => {ms932Encoder.encode("\u620B")}, {name:"Error",message:"EncodingError U+620B"});
r = r && ([...ms932Encoder.encode("戌戍戎")].join(",") === "156,250,156,249,143,94"); // U+620C
assert.throws(() => {ms932Encoder.encode("\u620F")}, {name:"Error",message:"EncodingError U+620F"});
r = r && ([...ms932Encoder.encode("成我戒戓戔")].join(",") === "144,172,137,228,137,250,250,199,156,251"); // U+6210
assert.throws(() => {ms932Encoder.encode("\u6215")}, {name:"Error",message:"EncodingError U+6215"});
r = r && ([...ms932Encoder.encode("或")].join(",") === "136,189"); // U+6216
assert.throws(() => {ms932Encoder.encode("\u6217")}, {name:"Error",message:"EncodingError U+6217"});
assert.throws(() => {ms932Encoder.encode("\u6218")}, {name:"Error",message:"EncodingError U+6218"});
assert.throws(() => {ms932Encoder.encode("\u6219")}, {name:"Error",message:"EncodingError U+6219"});
r = r && ([...ms932Encoder.encode("戚戛")].join(",") === "144,202,156,252"); // U+621A
assert.throws(() => {ms932Encoder.encode("\u621C")}, {name:"Error",message:"EncodingError U+621C"});
r = r && ([...ms932Encoder.encode("戝戞戟")].join(",") === "230,193,157,64,140,129"); // U+621D
assert.throws(() => {ms932Encoder.encode("\u6220")}, {name:"Error",message:"EncodingError U+6220"});
r = r && ([...ms932Encoder.encode("戡")].join(",") === "157,65"); // U+6221
assert.throws(() => {ms932Encoder.encode("\u6222")}, {name:"Error",message:"EncodingError U+6222"});
assert.throws(() => {ms932Encoder.encode("\u6223")}, {name:"Error",message:"EncodingError U+6223"});
assert.throws(() => {ms932Encoder.encode("\u6224")}, {name:"Error",message:"EncodingError U+6224"});
assert.throws(() => {ms932Encoder.encode("\u6225")}, {name:"Error",message:"EncodingError U+6225"});
r = r && ([...ms932Encoder.encode("戦")].join(",") === "144,237"); // U+6226
assert.throws(() => {ms932Encoder.encode("\u6227")}, {name:"Error",message:"EncodingError U+6227"});
assert.throws(() => {ms932Encoder.encode("\u6228")}, {name:"Error",message:"EncodingError U+6228"});
assert.throws(() => {ms932Encoder.encode("\u6229")}, {name:"Error",message:"EncodingError U+6229"});
r = r && ([...ms932Encoder.encode("截")].join(",") === "157,66"); // U+622A
assert.throws(() => {ms932Encoder.encode("\u622B")}, {name:"Error",message:"EncodingError U+622B"});
assert.throws(() => {ms932Encoder.encode("\u622C")}, {name:"Error",message:"EncodingError U+622C"});
assert.throws(() => {ms932Encoder.encode("\u622D")}, {name:"Error",message:"EncodingError U+622D"});
r = r && ([...ms932Encoder.encode("戮戯戰")].join(",") === "157,67,139,89,157,68"); // U+622E
assert.throws(() => {ms932Encoder.encode("\u6231")}, {name:"Error",message:"EncodingError U+6231"});
r = r && ([...ms932Encoder.encode("戲戳戴")].join(",") === "157,69,157,70,145,213"); // U+6232
assert.throws(() => {ms932Encoder.encode("\u6235")}, {name:"Error",message:"EncodingError U+6235"});
assert.throws(() => {ms932Encoder.encode("\u6236")}, {name:"Error",message:"EncodingError U+6236"});
assert.throws(() => {ms932Encoder.encode("\u6237")}, {name:"Error",message:"EncodingError U+6237"});
r = r && ([...ms932Encoder.encode("戸")].join(",") === "140,203"); // U+6238
assert.throws(() => {ms932Encoder.encode("\u6239")}, {name:"Error",message:"EncodingError U+6239"});
assert.throws(() => {ms932Encoder.encode("\u623A")}, {name:"Error",message:"EncodingError U+623A"});
r = r && ([...ms932Encoder.encode("戻")].join(",") === "150,223"); // U+623B
assert.throws(() => {ms932Encoder.encode("\u623C")}, {name:"Error",message:"EncodingError U+623C"});
assert.throws(() => {ms932Encoder.encode("\u623D")}, {name:"Error",message:"EncodingError U+623D"});
assert.throws(() => {ms932Encoder.encode("\u623E")}, {name:"Error",message:"EncodingError U+623E"});
r = r && ([...ms932Encoder.encode("房所扁")].join(",") === "150,91,143,138,157,71"); // U+623F
assert.throws(() => {ms932Encoder.encode("\u6242")}, {name:"Error",message:"EncodingError U+6242"});
assert.throws(() => {ms932Encoder.encode("\u6243")}, {name:"Error",message:"EncodingError U+6243"});
assert.throws(() => {ms932Encoder.encode("\u6244")}, {name:"Error",message:"EncodingError U+6244"});
assert.throws(() => {ms932Encoder.encode("\u6245")}, {name:"Error",message:"EncodingError U+6245"});
assert.throws(() => {ms932Encoder.encode("\u6246")}, {name:"Error",message:"EncodingError U+6246"});
r = r && ([...ms932Encoder.encode("扇扈扉")].join(",") === "144,238,231,187,148,224"); // U+6247
assert.throws(() => {ms932Encoder.encode("\u624A")}, {name:"Error",message:"EncodingError U+624A"});
r = r && ([...ms932Encoder.encode("手")].join(",") === "142,232"); // U+624B
assert.throws(() => {ms932Encoder.encode("\u624C")}, {name:"Error",message:"EncodingError U+624C"});
r = r && ([...ms932Encoder.encode("才扎")].join(",") === "141,203,157,72"); // U+624D
assert.throws(() => {ms932Encoder.encode("\u624F")}, {name:"Error",message:"EncodingError U+624F"});
assert.throws(() => {ms932Encoder.encode("\u6250")}, {name:"Error",message:"EncodingError U+6250"});
assert.throws(() => {ms932Encoder.encode("\u6251")}, {name:"Error",message:"EncodingError U+6251"});
assert.throws(() => {ms932Encoder.encode("\u6252")}, {name:"Error",message:"EncodingError U+6252"});
r = r && ([...ms932Encoder.encode("打")].join(",") === "145,197"); // U+6253
assert.throws(() => {ms932Encoder.encode("\u6254")}, {name:"Error",message:"EncodingError U+6254"});
r = r && ([...ms932Encoder.encode("払")].join(",") === "149,165"); // U+6255
assert.throws(() => {ms932Encoder.encode("\u6256")}, {name:"Error",message:"EncodingError U+6256"});
assert.throws(() => {ms932Encoder.encode("\u6257")}, {name:"Error",message:"EncodingError U+6257"});
r = r && ([...ms932Encoder.encode("托")].join(",") === "145,239"); // U+6258
assert.throws(() => {ms932Encoder.encode("\u6259")}, {name:"Error",message:"EncodingError U+6259"});
assert.throws(() => {ms932Encoder.encode("\u625A")}, {name:"Error",message:"EncodingError U+625A"});
r = r && ([...ms932Encoder.encode("扛")].join(",") === "157,75"); // U+625B
assert.throws(() => {ms932Encoder.encode("\u625C")}, {name:"Error",message:"EncodingError U+625C"});
assert.throws(() => {ms932Encoder.encode("\u625D")}, {name:"Error",message:"EncodingError U+625D"});
r = r && ([...ms932Encoder.encode("扞")].join(",") === "157,73"); // U+625E
assert.throws(() => {ms932Encoder.encode("\u625F")}, {name:"Error",message:"EncodingError U+625F"});
r = r && ([...ms932Encoder.encode("扠")].join(",") === "157,76"); // U+6260
assert.throws(() => {ms932Encoder.encode("\u6261")}, {name:"Error",message:"EncodingError U+6261"});
assert.throws(() => {ms932Encoder.encode("\u6262")}, {name:"Error",message:"EncodingError U+6262"});
r = r && ([...ms932Encoder.encode("扣")].join(",") === "157,74"); // U+6263
assert.throws(() => {ms932Encoder.encode("\u6264")}, {name:"Error",message:"EncodingError U+6264"});
assert.throws(() => {ms932Encoder.encode("\u6265")}, {name:"Error",message:"EncodingError U+6265"});
assert.throws(() => {ms932Encoder.encode("\u6266")}, {name:"Error",message:"EncodingError U+6266"});
assert.throws(() => {ms932Encoder.encode("\u6267")}, {name:"Error",message:"EncodingError U+6267"});
r = r && ([...ms932Encoder.encode("扨")].join(",") === "157,77"); // U+6268
assert.throws(() => {ms932Encoder.encode("\u6269")}, {name:"Error",message:"EncodingError U+6269"});
assert.throws(() => {ms932Encoder.encode("\u626A")}, {name:"Error",message:"EncodingError U+626A"});
assert.throws(() => {ms932Encoder.encode("\u626B")}, {name:"Error",message:"EncodingError U+626B"});
assert.throws(() => {ms932Encoder.encode("\u626C")}, {name:"Error",message:"EncodingError U+626C"});
assert.throws(() => {ms932Encoder.encode("\u626D")}, {name:"Error",message:"EncodingError U+626D"});
r = r && ([...ms932Encoder.encode("扮")].join(",") === "149,175"); // U+626E
assert.throws(() => {ms932Encoder.encode("\u626F")}, {name:"Error",message:"EncodingError U+626F"});
assert.throws(() => {ms932Encoder.encode("\u6270")}, {name:"Error",message:"EncodingError U+6270"});
r = r && ([...ms932Encoder.encode("扱")].join(",") === "136,181"); // U+6271
assert.throws(() => {ms932Encoder.encode("\u6272")}, {name:"Error",message:"EncodingError U+6272"});
assert.throws(() => {ms932Encoder.encode("\u6273")}, {name:"Error",message:"EncodingError U+6273"});
assert.throws(() => {ms932Encoder.encode("\u6274")}, {name:"Error",message:"EncodingError U+6274"});
assert.throws(() => {ms932Encoder.encode("\u6275")}, {name:"Error",message:"EncodingError U+6275"});
r = r && ([...ms932Encoder.encode("扶")].join(",") === "149,125"); // U+6276
assert.throws(() => {ms932Encoder.encode("\u6277")}, {name:"Error",message:"EncodingError U+6277"});
assert.throws(() => {ms932Encoder.encode("\u6278")}, {name:"Error",message:"EncodingError U+6278"});
r = r && ([...ms932Encoder.encode("批")].join(",") === "148,225"); // U+6279
assert.throws(() => {ms932Encoder.encode("\u627A")}, {name:"Error",message:"EncodingError U+627A"});
assert.throws(() => {ms932Encoder.encode("\u627B")}, {name:"Error",message:"EncodingError U+627B"});
r = r && ([...ms932Encoder.encode("扼")].join(",") === "157,78"); // U+627C
assert.throws(() => {ms932Encoder.encode("\u627D")}, {name:"Error",message:"EncodingError U+627D"});
r = r && ([...ms932Encoder.encode("找承技")].join(",") === "157,81,143,179,139,90"); // U+627E
assert.throws(() => {ms932Encoder.encode("\u6281")}, {name:"Error",message:"EncodingError U+6281"});
r = r && ([...ms932Encoder.encode("抂抃抄")].join(",") === "157,79,157,86,143,180"); // U+6282
assert.throws(() => {ms932Encoder.encode("\u6285")}, {name:"Error",message:"EncodingError U+6285"});
assert.throws(() => {ms932Encoder.encode("\u6286")}, {name:"Error",message:"EncodingError U+6286"});
assert.throws(() => {ms932Encoder.encode("\u6287")}, {name:"Error",message:"EncodingError U+6287"});
assert.throws(() => {ms932Encoder.encode("\u6288")}, {name:"Error",message:"EncodingError U+6288"});
r = r && ([...ms932Encoder.encode("抉把")].join(",") === "157,80,148,99"); // U+6289
assert.throws(() => {ms932Encoder.encode("\u628B")}, {name:"Error",message:"EncodingError U+628B"});
assert.throws(() => {ms932Encoder.encode("\u628C")}, {name:"Error",message:"EncodingError U+628C"});
assert.throws(() => {ms932Encoder.encode("\u628D")}, {name:"Error",message:"EncodingError U+628D"});
assert.throws(() => {ms932Encoder.encode("\u628E")}, {name:"Error",message:"EncodingError U+628E"});
assert.throws(() => {ms932Encoder.encode("\u628F")}, {name:"Error",message:"EncodingError U+628F"});
assert.throws(() => {ms932Encoder.encode("\u6290")}, {name:"Error",message:"EncodingError U+6290"});
r = r && ([...ms932Encoder.encode("抑抒抓抔投抖抗折")].join(",") === "151,125,157,82,157,83,157,87,147,138,157,84,141,82,144,220"); // U+6291
assert.throws(() => {ms932Encoder.encode("\u6299")}, {name:"Error",message:"EncodingError U+6299"});
assert.throws(() => {ms932Encoder.encode("\u629A")}, {name:"Error",message:"EncodingError U+629A"});
r = r && ([...ms932Encoder.encode("抛抜")].join(",") === "157,101,148,178"); // U+629B
assert.throws(() => {ms932Encoder.encode("\u629D")}, {name:"Error",message:"EncodingError U+629D"});
r = r && ([...ms932Encoder.encode("択")].join(",") === "145,240"); // U+629E
assert.throws(() => {ms932Encoder.encode("\u629F")}, {name:"Error",message:"EncodingError U+629F"});
assert.throws(() => {ms932Encoder.encode("\u62A0")}, {name:"Error",message:"EncodingError U+62A0"});
assert.throws(() => {ms932Encoder.encode("\u62A1")}, {name:"Error",message:"EncodingError U+62A1"});
assert.throws(() => {ms932Encoder.encode("\u62A2")}, {name:"Error",message:"EncodingError U+62A2"});
assert.throws(() => {ms932Encoder.encode("\u62A3")}, {name:"Error",message:"EncodingError U+62A3"});
assert.throws(() => {ms932Encoder.encode("\u62A4")}, {name:"Error",message:"EncodingError U+62A4"});
assert.throws(() => {ms932Encoder.encode("\u62A5")}, {name:"Error",message:"EncodingError U+62A5"});
r = r && ([...ms932Encoder.encode("抦")].join(",") === "250,200"); // U+62A6
assert.throws(() => {ms932Encoder.encode("\u62A7")}, {name:"Error",message:"EncodingError U+62A7"});
assert.throws(() => {ms932Encoder.encode("\u62A8")}, {name:"Error",message:"EncodingError U+62A8"});
assert.throws(() => {ms932Encoder.encode("\u62A9")}, {name:"Error",message:"EncodingError U+62A9"});
assert.throws(() => {ms932Encoder.encode("\u62AA")}, {name:"Error",message:"EncodingError U+62AA"});
r = r && ([...ms932Encoder.encode("披抬")].join(",") === "148,226,157,171"); // U+62AB
assert.throws(() => {ms932Encoder.encode("\u62AD")}, {name:"Error",message:"EncodingError U+62AD"});
assert.throws(() => {ms932Encoder.encode("\u62AE")}, {name:"Error",message:"EncodingError U+62AE"});
assert.throws(() => {ms932Encoder.encode("\u62AF")}, {name:"Error",message:"EncodingError U+62AF"});
assert.throws(() => {ms932Encoder.encode("\u62B0")}, {name:"Error",message:"EncodingError U+62B0"});
r = r && ([...ms932Encoder.encode("抱")].join(",") === "149,248"); // U+62B1
assert.throws(() => {ms932Encoder.encode("\u62B2")}, {name:"Error",message:"EncodingError U+62B2"});
assert.throws(() => {ms932Encoder.encode("\u62B3")}, {name:"Error",message:"EncodingError U+62B3"});
assert.throws(() => {ms932Encoder.encode("\u62B4")}, {name:"Error",message:"EncodingError U+62B4"});
r = r && ([...ms932Encoder.encode("抵")].join(",") === "146,239"); // U+62B5
assert.throws(() => {ms932Encoder.encode("\u62B6")}, {name:"Error",message:"EncodingError U+62B6"});
assert.throws(() => {ms932Encoder.encode("\u62B7")}, {name:"Error",message:"EncodingError U+62B7"});
assert.throws(() => {ms932Encoder.encode("\u62B8")}, {name:"Error",message:"EncodingError U+62B8"});
r = r && ([...ms932Encoder.encode("抹")].join(",") === "150,149"); // U+62B9
assert.throws(() => {ms932Encoder.encode("\u62BA")}, {name:"Error",message:"EncodingError U+62BA"});
r = r && ([...ms932Encoder.encode("抻押抽")].join(",") === "157,90,137,159,146,138"); // U+62BB
assert.throws(() => {ms932Encoder.encode("\u62BE")}, {name:"Error",message:"EncodingError U+62BE"});
assert.throws(() => {ms932Encoder.encode("\u62BF")}, {name:"Error",message:"EncodingError U+62BF"});
assert.throws(() => {ms932Encoder.encode("\u62C0")}, {name:"Error",message:"EncodingError U+62C0"});
assert.throws(() => {ms932Encoder.encode("\u62C1")}, {name:"Error",message:"EncodingError U+62C1"});
r = r && ([...ms932Encoder.encode("拂")].join(",") === "157,99"); // U+62C2
assert.throws(() => {ms932Encoder.encode("\u62C3")}, {name:"Error",message:"EncodingError U+62C3"});
assert.throws(() => {ms932Encoder.encode("\u62C4")}, {name:"Error",message:"EncodingError U+62C4"});
r = r && ([...ms932Encoder.encode("担拆拇拈拉拊")].join(",") === "146,83,157,93,157,100,157,95,157,102,157,98"); // U+62C5
assert.throws(() => {ms932Encoder.encode("\u62CB")}, {name:"Error",message:"EncodingError U+62CB"});
r = r && ([...ms932Encoder.encode("拌拍")].join(",") === "157,97,148,143"); // U+62CC
assert.throws(() => {ms932Encoder.encode("\u62CE")}, {name:"Error",message:"EncodingError U+62CE"});
r = r && ([...ms932Encoder.encode("拏拐拑拒拓拔")].join(",") === "157,91,137,251,157,89,139,145,145,241,157,85"); // U+62CF
assert.throws(() => {ms932Encoder.encode("\u62D5")}, {name:"Error",message:"EncodingError U+62D5"});
assert.throws(() => {ms932Encoder.encode("\u62D6")}, {name:"Error",message:"EncodingError U+62D6"});
r = r && ([...ms932Encoder.encode("拗拘拙")].join(",") === "157,88,141,83,144,217"); // U+62D7
assert.throws(() => {ms932Encoder.encode("\u62DA")}, {name:"Error",message:"EncodingError U+62DA"});
r = r && ([...ms932Encoder.encode("招拜拝")].join(",") === "143,181,157,96,148,113"); // U+62DB
assert.throws(() => {ms932Encoder.encode("\u62DE")}, {name:"Error",message:"EncodingError U+62DE"});
assert.throws(() => {ms932Encoder.encode("\u62DF")}, {name:"Error",message:"EncodingError U+62DF"});
r = r && ([...ms932Encoder.encode("拠拡")].join(",") === "139,146,138,103"); // U+62E0
assert.throws(() => {ms932Encoder.encode("\u62E2")}, {name:"Error",message:"EncodingError U+62E2"});
assert.throws(() => {ms932Encoder.encode("\u62E3")}, {name:"Error",message:"EncodingError U+62E3"});
assert.throws(() => {ms932Encoder.encode("\u62E4")}, {name:"Error",message:"EncodingError U+62E4"});
assert.throws(() => {ms932Encoder.encode("\u62E5")}, {name:"Error",message:"EncodingError U+62E5"});
assert.throws(() => {ms932Encoder.encode("\u62E6")}, {name:"Error",message:"EncodingError U+62E6"});
assert.throws(() => {ms932Encoder.encode("\u62E7")}, {name:"Error",message:"EncodingError U+62E7"});
assert.throws(() => {ms932Encoder.encode("\u62E8")}, {name:"Error",message:"EncodingError U+62E8"});
assert.throws(() => {ms932Encoder.encode("\u62E9")}, {name:"Error",message:"EncodingError U+62E9"});
assert.throws(() => {ms932Encoder.encode("\u62EA")}, {name:"Error",message:"EncodingError U+62EA"});
assert.throws(() => {ms932Encoder.encode("\u62EB")}, {name:"Error",message:"EncodingError U+62EB"});
r = r && ([...ms932Encoder.encode("括拭拮拯")].join(",") === "138,135,144,64,157,104,157,109"); // U+62EC
assert.throws(() => {ms932Encoder.encode("\u62F0")}, {name:"Error",message:"EncodingError U+62F0"});
r = r && ([...ms932Encoder.encode("拱")].join(",") === "157,105"); // U+62F1
assert.throws(() => {ms932Encoder.encode("\u62F2")}, {name:"Error",message:"EncodingError U+62F2"});
r = r && ([...ms932Encoder.encode("拳")].join(",") === "140,157"); // U+62F3
assert.throws(() => {ms932Encoder.encode("\u62F4")}, {name:"Error",message:"EncodingError U+62F4"});
r = r && ([...ms932Encoder.encode("拵拶拷")].join(",") === "157,110,142,65,141,137"); // U+62F5
assert.throws(() => {ms932Encoder.encode("\u62F8")}, {name:"Error",message:"EncodingError U+62F8"});
assert.throws(() => {ms932Encoder.encode("\u62F9")}, {name:"Error",message:"EncodingError U+62F9"});
assert.throws(() => {ms932Encoder.encode("\u62FA")}, {name:"Error",message:"EncodingError U+62FA"});
assert.throws(() => {ms932Encoder.encode("\u62FB")}, {name:"Error",message:"EncodingError U+62FB"});
assert.throws(() => {ms932Encoder.encode("\u62FC")}, {name:"Error",message:"EncodingError U+62FC"});
assert.throws(() => {ms932Encoder.encode("\u62FD")}, {name:"Error",message:"EncodingError U+62FD"});
r = r && ([...ms932Encoder.encode("拾拿")].join(",") === "143,69,157,92"); // U+62FE
assert.throws(() => {ms932Encoder.encode("\u6300")}, {name:"Error",message:"EncodingError U+6300"});
r = r && ([...ms932Encoder.encode("持挂")].join(",") === "142,157,157,107"); // U+6301
assert.throws(() => {ms932Encoder.encode("\u6303")}, {name:"Error",message:"EncodingError U+6303"});
assert.throws(() => {ms932Encoder.encode("\u6304")}, {name:"Error",message:"EncodingError U+6304"});
assert.throws(() => {ms932Encoder.encode("\u6305")}, {name:"Error",message:"EncodingError U+6305"});
assert.throws(() => {ms932Encoder.encode("\u6306")}, {name:"Error",message:"EncodingError U+6306"});
r = r && ([...ms932Encoder.encode("指挈按")].join(",") === "142,119,157,108,136,194"); // U+6307
assert.throws(() => {ms932Encoder.encode("\u630A")}, {name:"Error",message:"EncodingError U+630A"});
assert.throws(() => {ms932Encoder.encode("\u630B")}, {name:"Error",message:"EncodingError U+630B"});
r = r && ([...ms932Encoder.encode("挌")].join(",") === "157,103"); // U+630C
assert.throws(() => {ms932Encoder.encode("\u630D")}, {name:"Error",message:"EncodingError U+630D"});
assert.throws(() => {ms932Encoder.encode("\u630E")}, {name:"Error",message:"EncodingError U+630E"});
assert.throws(() => {ms932Encoder.encode("\u630F")}, {name:"Error",message:"EncodingError U+630F"});
assert.throws(() => {ms932Encoder.encode("\u6310")}, {name:"Error",message:"EncodingError U+6310"});
r = r && ([...ms932Encoder.encode("挑")].join(",") === "146,167"); // U+6311
assert.throws(() => {ms932Encoder.encode("\u6312")}, {name:"Error",message:"EncodingError U+6312"});
assert.throws(() => {ms932Encoder.encode("\u6313")}, {name:"Error",message:"EncodingError U+6313"});
assert.throws(() => {ms932Encoder.encode("\u6314")}, {name:"Error",message:"EncodingError U+6314"});
assert.throws(() => {ms932Encoder.encode("\u6315")}, {name:"Error",message:"EncodingError U+6315"});
assert.throws(() => {ms932Encoder.encode("\u6316")}, {name:"Error",message:"EncodingError U+6316"});
assert.throws(() => {ms932Encoder.encode("\u6317")}, {name:"Error",message:"EncodingError U+6317"});
assert.throws(() => {ms932Encoder.encode("\u6318")}, {name:"Error",message:"EncodingError U+6318"});
r = r && ([...ms932Encoder.encode("挙")].join(",") === "139,147"); // U+6319
assert.throws(() => {ms932Encoder.encode("\u631A")}, {name:"Error",message:"EncodingError U+631A"});
assert.throws(() => {ms932Encoder.encode("\u631B")}, {name:"Error",message:"EncodingError U+631B"});
assert.throws(() => {ms932Encoder.encode("\u631C")}, {name:"Error",message:"EncodingError U+631C"});
assert.throws(() => {ms932Encoder.encode("\u631D")}, {name:"Error",message:"EncodingError U+631D"});
assert.throws(() => {ms932Encoder.encode("\u631E")}, {name:"Error",message:"EncodingError U+631E"});
r = r && ([...ms932Encoder.encode("挟")].join(",") === "139,178"); // U+631F
assert.throws(() => {ms932Encoder.encode("\u6320")}, {name:"Error",message:"EncodingError U+6320"});
assert.throws(() => {ms932Encoder.encode("\u6321")}, {name:"Error",message:"EncodingError U+6321"});
assert.throws(() => {ms932Encoder.encode("\u6322")}, {name:"Error",message:"EncodingError U+6322"});
assert.throws(() => {ms932Encoder.encode("\u6323")}, {name:"Error",message:"EncodingError U+6323"});
assert.throws(() => {ms932Encoder.encode("\u6324")}, {name:"Error",message:"EncodingError U+6324"});
assert.throws(() => {ms932Encoder.encode("\u6325")}, {name:"Error",message:"EncodingError U+6325"});
assert.throws(() => {ms932Encoder.encode("\u6326")}, {name:"Error",message:"EncodingError U+6326"});
r = r && ([...ms932Encoder.encode("挧挨")].join(",") === "157,106,136,165"); // U+6327
assert.throws(() => {ms932Encoder.encode("\u6329")}, {name:"Error",message:"EncodingError U+6329"});
assert.throws(() => {ms932Encoder.encode("\u632A")}, {name:"Error",message:"EncodingError U+632A"});
r = r && ([...ms932Encoder.encode("挫")].join(",") === "141,193"); // U+632B
assert.throws(() => {ms932Encoder.encode("\u632C")}, {name:"Error",message:"EncodingError U+632C"});
assert.throws(() => {ms932Encoder.encode("\u632D")}, {name:"Error",message:"EncodingError U+632D"});
assert.throws(() => {ms932Encoder.encode("\u632E")}, {name:"Error",message:"EncodingError U+632E"});
r = r && ([...ms932Encoder.encode("振")].join(",") === "144,85"); // U+632F
assert.throws(() => {ms932Encoder.encode("\u6330")}, {name:"Error",message:"EncodingError U+6330"});
assert.throws(() => {ms932Encoder.encode("\u6331")}, {name:"Error",message:"EncodingError U+6331"});
assert.throws(() => {ms932Encoder.encode("\u6332")}, {name:"Error",message:"EncodingError U+6332"});
assert.throws(() => {ms932Encoder.encode("\u6333")}, {name:"Error",message:"EncodingError U+6333"});
assert.throws(() => {ms932Encoder.encode("\u6334")}, {name:"Error",message:"EncodingError U+6334"});
assert.throws(() => {ms932Encoder.encode("\u6335")}, {name:"Error",message:"EncodingError U+6335"});
assert.throws(() => {ms932Encoder.encode("\u6336")}, {name:"Error",message:"EncodingError U+6336"});
assert.throws(() => {ms932Encoder.encode("\u6337")}, {name:"Error",message:"EncodingError U+6337"});
assert.throws(() => {ms932Encoder.encode("\u6338")}, {name:"Error",message:"EncodingError U+6338"});
assert.throws(() => {ms932Encoder.encode("\u6339")}, {name:"Error",message:"EncodingError U+6339"});
r = r && ([...ms932Encoder.encode("挺")].join(",") === "146,240"); // U+633A
assert.throws(() => {ms932Encoder.encode("\u633B")}, {name:"Error",message:"EncodingError U+633B"});
assert.throws(() => {ms932Encoder.encode("\u633C")}, {name:"Error",message:"EncodingError U+633C"});
r = r && ([...ms932Encoder.encode("挽挾挿")].join(",") === "148,210,157,112,145,125"); // U+633D
assert.throws(() => {ms932Encoder.encode("\u6340")}, {name:"Error",message:"EncodingError U+6340"});
assert.throws(() => {ms932Encoder.encode("\u6341")}, {name:"Error",message:"EncodingError U+6341"});
assert.throws(() => {ms932Encoder.encode("\u6342")}, {name:"Error",message:"EncodingError U+6342"});
assert.throws(() => {ms932Encoder.encode("\u6343")}, {name:"Error",message:"EncodingError U+6343"});
assert.throws(() => {ms932Encoder.encode("\u6344")}, {name:"Error",message:"EncodingError U+6344"});
assert.throws(() => {ms932Encoder.encode("\u6345")}, {name:"Error",message:"EncodingError U+6345"});
assert.throws(() => {ms932Encoder.encode("\u6346")}, {name:"Error",message:"EncodingError U+6346"});
assert.throws(() => {ms932Encoder.encode("\u6347")}, {name:"Error",message:"EncodingError U+6347"});
assert.throws(() => {ms932Encoder.encode("\u6348")}, {name:"Error",message:"EncodingError U+6348"});
r = r && ([...ms932Encoder.encode("捉")].join(",") === "145,168"); // U+6349
assert.throws(() => {ms932Encoder.encode("\u634A")}, {name:"Error",message:"EncodingError U+634A"});
assert.throws(() => {ms932Encoder.encode("\u634B")}, {name:"Error",message:"EncodingError U+634B"});
r = r && ([...ms932Encoder.encode("捌捍")].join(",") === "142,74,157,113"); // U+634C
assert.throws(() => {ms932Encoder.encode("\u634E")}, {name:"Error",message:"EncodingError U+634E"});
r = r && ([...ms932Encoder.encode("捏捐")].join(",") === "157,115,157,111"); // U+634F
assert.throws(() => {ms932Encoder.encode("\u6351")}, {name:"Error",message:"EncodingError U+6351"});
assert.throws(() => {ms932Encoder.encode("\u6352")}, {name:"Error",message:"EncodingError U+6352"});
assert.throws(() => {ms932Encoder.encode("\u6353")}, {name:"Error",message:"EncodingError U+6353"});
assert.throws(() => {ms932Encoder.encode("\u6354")}, {name:"Error",message:"EncodingError U+6354"});
r = r && ([...ms932Encoder.encode("捕")].join(",") === "149,223"); // U+6355
assert.throws(() => {ms932Encoder.encode("\u6356")}, {name:"Error",message:"EncodingError U+6356"});
r = r && ([...ms932Encoder.encode("捗")].join(",") === "146,187"); // U+6357
assert.throws(() => {ms932Encoder.encode("\u6358")}, {name:"Error",message:"EncodingError U+6358"});
assert.throws(() => {ms932Encoder.encode("\u6359")}, {name:"Error",message:"EncodingError U+6359"});
assert.throws(() => {ms932Encoder.encode("\u635A")}, {name:"Error",message:"EncodingError U+635A"});
assert.throws(() => {ms932Encoder.encode("\u635B")}, {name:"Error",message:"EncodingError U+635B"});
r = r && ([...ms932Encoder.encode("捜")].join(",") === "145,123"); // U+635C
assert.throws(() => {ms932Encoder.encode("\u635D")}, {name:"Error",message:"EncodingError U+635D"});
assert.throws(() => {ms932Encoder.encode("\u635E")}, {name:"Error",message:"EncodingError U+635E"});
assert.throws(() => {ms932Encoder.encode("\u635F")}, {name:"Error",message:"EncodingError U+635F"});
assert.throws(() => {ms932Encoder.encode("\u6360")}, {name:"Error",message:"EncodingError U+6360"});
assert.throws(() => {ms932Encoder.encode("\u6361")}, {name:"Error",message:"EncodingError U+6361"});
assert.throws(() => {ms932Encoder.encode("\u6362")}, {name:"Error",message:"EncodingError U+6362"});
assert.throws(() => {ms932Encoder.encode("\u6363")}, {name:"Error",message:"EncodingError U+6363"});
assert.throws(() => {ms932Encoder.encode("\u6364")}, {name:"Error",message:"EncodingError U+6364"});
assert.throws(() => {ms932Encoder.encode("\u6365")}, {name:"Error",message:"EncodingError U+6365"});
assert.throws(() => {ms932Encoder.encode("\u6366")}, {name:"Error",message:"EncodingError U+6366"});
r = r && ([...ms932Encoder.encode("捧捨捩")].join(",") === "149,249,142,204,157,128"); // U+6367
assert.throws(() => {ms932Encoder.encode("\u636A")}, {name:"Error",message:"EncodingError U+636A"});
r = r && ([...ms932Encoder.encode("捫")].join(",") === "157,126"); // U+636B
assert.throws(() => {ms932Encoder.encode("\u636C")}, {name:"Error",message:"EncodingError U+636C"});
assert.throws(() => {ms932Encoder.encode("\u636D")}, {name:"Error",message:"EncodingError U+636D"});
r = r && ([...ms932Encoder.encode("据")].join(",") === "144,152"); // U+636E
assert.throws(() => {ms932Encoder.encode("\u636F")}, {name:"Error",message:"EncodingError U+636F"});
assert.throws(() => {ms932Encoder.encode("\u6370")}, {name:"Error",message:"EncodingError U+6370"});
assert.throws(() => {ms932Encoder.encode("\u6371")}, {name:"Error",message:"EncodingError U+6371"});
r = r && ([...ms932Encoder.encode("捲")].join(",") === "140,158"); // U+6372
assert.throws(() => {ms932Encoder.encode("\u6373")}, {name:"Error",message:"EncodingError U+6373"});
assert.throws(() => {ms932Encoder.encode("\u6374")}, {name:"Error",message:"EncodingError U+6374"});
assert.throws(() => {ms932Encoder.encode("\u6375")}, {name:"Error",message:"EncodingError U+6375"});
r = r && ([...ms932Encoder.encode("捶捷")].join(",") === "157,120,143,183"); // U+6376
assert.throws(() => {ms932Encoder.encode("\u6378")}, {name:"Error",message:"EncodingError U+6378"});
assert.throws(() => {ms932Encoder.encode("\u6379")}, {name:"Error",message:"EncodingError U+6379"});
r = r && ([...ms932Encoder.encode("捺捻")].join(",") === "147,230,148,80"); // U+637A
assert.throws(() => {ms932Encoder.encode("\u637C")}, {name:"Error",message:"EncodingError U+637C"});
assert.throws(() => {ms932Encoder.encode("\u637D")}, {name:"Error",message:"EncodingError U+637D"});
assert.throws(() => {ms932Encoder.encode("\u637E")}, {name:"Error",message:"EncodingError U+637E"});
assert.throws(() => {ms932Encoder.encode("\u637F")}, {name:"Error",message:"EncodingError U+637F"});
r = r && ([...ms932Encoder.encode("掀")].join(",") === "157,118"); // U+6380
assert.throws(() => {ms932Encoder.encode("\u6381")}, {name:"Error",message:"EncodingError U+6381"});
assert.throws(() => {ms932Encoder.encode("\u6382")}, {name:"Error",message:"EncodingError U+6382"});
r = r && ([...ms932Encoder.encode("掃")].join(",") === "145,124"); // U+6383
assert.throws(() => {ms932Encoder.encode("\u6384")}, {name:"Error",message:"EncodingError U+6384"});
assert.throws(() => {ms932Encoder.encode("\u6385")}, {name:"Error",message:"EncodingError U+6385"});
assert.throws(() => {ms932Encoder.encode("\u6386")}, {name:"Error",message:"EncodingError U+6386"});
assert.throws(() => {ms932Encoder.encode("\u6387")}, {name:"Error",message:"EncodingError U+6387"});
r = r && ([...ms932Encoder.encode("授掉")].join(",") === "142,246,157,123"); // U+6388
assert.throws(() => {ms932Encoder.encode("\u638A")}, {name:"Error",message:"EncodingError U+638A"});
assert.throws(() => {ms932Encoder.encode("\u638B")}, {name:"Error",message:"EncodingError U+638B"});
r = r && ([...ms932Encoder.encode("掌")].join(",") === "143,182"); // U+638C
assert.throws(() => {ms932Encoder.encode("\u638D")}, {name:"Error",message:"EncodingError U+638D"});
r = r && ([...ms932Encoder.encode("掎掏")].join(",") === "157,117,157,122"); // U+638E
assert.throws(() => {ms932Encoder.encode("\u6390")}, {name:"Error",message:"EncodingError U+6390"});
assert.throws(() => {ms932Encoder.encode("\u6391")}, {name:"Error",message:"EncodingError U+6391"});
r = r && ([...ms932Encoder.encode("排")].join(",") === "148,114"); // U+6392
assert.throws(() => {ms932Encoder.encode("\u6393")}, {name:"Error",message:"EncodingError U+6393"});
assert.throws(() => {ms932Encoder.encode("\u6394")}, {name:"Error",message:"EncodingError U+6394"});
assert.throws(() => {ms932Encoder.encode("\u6395")}, {name:"Error",message:"EncodingError U+6395"});
r = r && ([...ms932Encoder.encode("掖")].join(",") === "157,116"); // U+6396
assert.throws(() => {ms932Encoder.encode("\u6397")}, {name:"Error",message:"EncodingError U+6397"});
r = r && ([...ms932Encoder.encode("掘")].join(",") === "140,64"); // U+6398
assert.throws(() => {ms932Encoder.encode("\u6399")}, {name:"Error",message:"EncodingError U+6399"});
assert.throws(() => {ms932Encoder.encode("\u639A")}, {name:"Error",message:"EncodingError U+639A"});
r = r && ([...ms932Encoder.encode("掛")].join(",") === "138,124"); // U+639B
assert.throws(() => {ms932Encoder.encode("\u639C")}, {name:"Error",message:"EncodingError U+639C"});
assert.throws(() => {ms932Encoder.encode("\u639D")}, {name:"Error",message:"EncodingError U+639D"});
assert.throws(() => {ms932Encoder.encode("\u639E")}, {name:"Error",message:"EncodingError U+639E"});
r = r && ([...ms932Encoder.encode("掟掠採探掣")].join(",") === "157,124,151,169,141,204,146,84,157,121"); // U+639F
assert.throws(() => {ms932Encoder.encode("\u63A4")}, {name:"Error",message:"EncodingError U+63A4"});
r = r && ([...ms932Encoder.encode("接")].join(",") === "144,218"); // U+63A5
assert.throws(() => {ms932Encoder.encode("\u63A6")}, {name:"Error",message:"EncodingError U+63A6"});
r = r && ([...ms932Encoder.encode("控推掩措掫掬")].join(",") === "141,84,144,132,137,134,145,91,157,119,139,100"); // U+63A7
assert.throws(() => {ms932Encoder.encode("\u63AD")}, {name:"Error",message:"EncodingError U+63AD"});
assert.throws(() => {ms932Encoder.encode("\u63AE")}, {name:"Error",message:"EncodingError U+63AE"});
assert.throws(() => {ms932Encoder.encode("\u63AF")}, {name:"Error",message:"EncodingError U+63AF"});
assert.throws(() => {ms932Encoder.encode("\u63B0")}, {name:"Error",message:"EncodingError U+63B0"});
assert.throws(() => {ms932Encoder.encode("\u63B1")}, {name:"Error",message:"EncodingError U+63B1"});
r = r && ([...ms932Encoder.encode("掲")].join(",") === "140,102"); // U+63B2
assert.throws(() => {ms932Encoder.encode("\u63B3")}, {name:"Error",message:"EncodingError U+63B3"});
r = r && ([...ms932Encoder.encode("掴掵")].join(",") === "146,205,157,125"); // U+63B4
assert.throws(() => {ms932Encoder.encode("\u63B6")}, {name:"Error",message:"EncodingError U+63B6"});
assert.throws(() => {ms932Encoder.encode("\u63B7")}, {name:"Error",message:"EncodingError U+63B7"});
assert.throws(() => {ms932Encoder.encode("\u63B8")}, {name:"Error",message:"EncodingError U+63B8"});
assert.throws(() => {ms932Encoder.encode("\u63B9")}, {name:"Error",message:"EncodingError U+63B9"});
assert.throws(() => {ms932Encoder.encode("\u63BA")}, {name:"Error",message:"EncodingError U+63BA"});
r = r && ([...ms932Encoder.encode("掻")].join(",") === "145,126"); // U+63BB
assert.throws(() => {ms932Encoder.encode("\u63BC")}, {name:"Error",message:"EncodingError U+63BC"});
assert.throws(() => {ms932Encoder.encode("\u63BD")}, {name:"Error",message:"EncodingError U+63BD"});
r = r && ([...ms932Encoder.encode("掾")].join(",") === "157,129"); // U+63BE
assert.throws(() => {ms932Encoder.encode("\u63BF")}, {name:"Error",message:"EncodingError U+63BF"});
r = r && ([...ms932Encoder.encode("揀")].join(",") === "157,131"); // U+63C0
assert.throws(() => {ms932Encoder.encode("\u63C1")}, {name:"Error",message:"EncodingError U+63C1"});
assert.throws(() => {ms932Encoder.encode("\u63C2")}, {name:"Error",message:"EncodingError U+63C2"});
r = r && ([...ms932Encoder.encode("揃揄")].join(",") === "145,181,157,137"); // U+63C3
assert.throws(() => {ms932Encoder.encode("\u63C5")}, {name:"Error",message:"EncodingError U+63C5"});
r = r && ([...ms932Encoder.encode("揆")].join(",") === "157,132"); // U+63C6
assert.throws(() => {ms932Encoder.encode("\u63C7")}, {name:"Error",message:"EncodingError U+63C7"});
assert.throws(() => {ms932Encoder.encode("\u63C8")}, {name:"Error",message:"EncodingError U+63C8"});
r = r && ([...ms932Encoder.encode("揉")].join(",") === "157,134"); // U+63C9
assert.throws(() => {ms932Encoder.encode("\u63CA")}, {name:"Error",message:"EncodingError U+63CA"});
assert.throws(() => {ms932Encoder.encode("\u63CB")}, {name:"Error",message:"EncodingError U+63CB"});
assert.throws(() => {ms932Encoder.encode("\u63CC")}, {name:"Error",message:"EncodingError U+63CC"});
assert.throws(() => {ms932Encoder.encode("\u63CD")}, {name:"Error",message:"EncodingError U+63CD"});
assert.throws(() => {ms932Encoder.encode("\u63CE")}, {name:"Error",message:"EncodingError U+63CE"});
r = r && ([...ms932Encoder.encode("描提")].join(",") === "149,96,146,241"); // U+63CF
assert.throws(() => {ms932Encoder.encode("\u63D1")}, {name:"Error",message:"EncodingError U+63D1"});
r = r && ([...ms932Encoder.encode("插")].join(",") === "157,135"); // U+63D2
assert.throws(() => {ms932Encoder.encode("\u63D3")}, {name:"Error",message:"EncodingError U+63D3"});
assert.throws(() => {ms932Encoder.encode("\u63D4")}, {name:"Error",message:"EncodingError U+63D4"});
assert.throws(() => {ms932Encoder.encode("\u63D5")}, {name:"Error",message:"EncodingError U+63D5"});
r = r && ([...ms932Encoder.encode("揖")].join(",") === "151,75"); // U+63D6
assert.throws(() => {ms932Encoder.encode("\u63D7")}, {name:"Error",message:"EncodingError U+63D7"});
assert.throws(() => {ms932Encoder.encode("\u63D8")}, {name:"Error",message:"EncodingError U+63D8"});
assert.throws(() => {ms932Encoder.encode("\u63D9")}, {name:"Error",message:"EncodingError U+63D9"});
r = r && ([...ms932Encoder.encode("揚換")].join(",") === "151,103,138,183"); // U+63DA
assert.throws(() => {ms932Encoder.encode("\u63DC")}, {name:"Error",message:"EncodingError U+63DC"});
assert.throws(() => {ms932Encoder.encode("\u63DD")}, {name:"Error",message:"EncodingError U+63DD"});
assert.throws(() => {ms932Encoder.encode("\u63DE")}, {name:"Error",message:"EncodingError U+63DE"});
assert.throws(() => {ms932Encoder.encode("\u63DF")}, {name:"Error",message:"EncodingError U+63DF"});
assert.throws(() => {ms932Encoder.encode("\u63E0")}, {name:"Error",message:"EncodingError U+63E0"});
r = r && ([...ms932Encoder.encode("握")].join(",") === "136,172"); // U+63E1
assert.throws(() => {ms932Encoder.encode("\u63E2")}, {name:"Error",message:"EncodingError U+63E2"});
r = r && ([...ms932Encoder.encode("揣")].join(",") === "157,133"); // U+63E3
assert.throws(() => {ms932Encoder.encode("\u63E4")}, {name:"Error",message:"EncodingError U+63E4"});
assert.throws(() => {ms932Encoder.encode("\u63E5")}, {name:"Error",message:"EncodingError U+63E5"});
assert.throws(() => {ms932Encoder.encode("\u63E6")}, {name:"Error",message:"EncodingError U+63E6"});
assert.throws(() => {ms932Encoder.encode("\u63E7")}, {name:"Error",message:"EncodingError U+63E7"});
assert.throws(() => {ms932Encoder.encode("\u63E8")}, {name:"Error",message:"EncodingError U+63E8"});
r = r && ([...ms932Encoder.encode("揩")].join(",") === "157,130"); // U+63E9
assert.throws(() => {ms932Encoder.encode("\u63EA")}, {name:"Error",message:"EncodingError U+63EA"});
assert.throws(() => {ms932Encoder.encode("\u63EB")}, {name:"Error",message:"EncodingError U+63EB"});
assert.throws(() => {ms932Encoder.encode("\u63EC")}, {name:"Error",message:"EncodingError U+63EC"});
assert.throws(() => {ms932Encoder.encode("\u63ED")}, {name:"Error",message:"EncodingError U+63ED"});
r = r && ([...ms932Encoder.encode("揮")].join(",") === "138,246"); // U+63EE
assert.throws(() => {ms932Encoder.encode("\u63EF")}, {name:"Error",message:"EncodingError U+63EF"});
assert.throws(() => {ms932Encoder.encode("\u63F0")}, {name:"Error",message:"EncodingError U+63F0"});
assert.throws(() => {ms932Encoder.encode("\u63F1")}, {name:"Error",message:"EncodingError U+63F1"});
assert.throws(() => {ms932Encoder.encode("\u63F2")}, {name:"Error",message:"EncodingError U+63F2"});
assert.throws(() => {ms932Encoder.encode("\u63F3")}, {name:"Error",message:"EncodingError U+63F3"});
r = r && ([...ms932Encoder.encode("援揵揶")].join(",") === "137,135,250,201,157,136"); // U+63F4
assert.throws(() => {ms932Encoder.encode("\u63F7")}, {name:"Error",message:"EncodingError U+63F7"});
assert.throws(() => {ms932Encoder.encode("\u63F8")}, {name:"Error",message:"EncodingError U+63F8"});
assert.throws(() => {ms932Encoder.encode("\u63F9")}, {name:"Error",message:"EncodingError U+63F9"});
r = r && ([...ms932Encoder.encode("揺")].join(",") === "151,104"); // U+63FA
assert.throws(() => {ms932Encoder.encode("\u63FB")}, {name:"Error",message:"EncodingError U+63FB"});
assert.throws(() => {ms932Encoder.encode("\u63FC")}, {name:"Error",message:"EncodingError U+63FC"});
assert.throws(() => {ms932Encoder.encode("\u63FD")}, {name:"Error",message:"EncodingError U+63FD"});
assert.throws(() => {ms932Encoder.encode("\u63FE")}, {name:"Error",message:"EncodingError U+63FE"});
assert.throws(() => {ms932Encoder.encode("\u63FF")}, {name:"Error",message:"EncodingError U+63FF"});

assert.strictEqual(r, true);

  });

});
