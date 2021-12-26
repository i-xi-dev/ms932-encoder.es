import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 7", () => {

  it("encode(string) - U+6000-U+6FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

expect(() => {ms932Encoder.encode("\u6000")}).toThrowError({name:"TypeError",message:"EncodingError U+6000"});
expect(() => {ms932Encoder.encode("\u6001")}).toThrowError({name:"TypeError",message:"EncodingError U+6001"});
expect(() => {ms932Encoder.encode("\u6002")}).toThrowError({name:"TypeError",message:"EncodingError U+6002"});
expect(() => {ms932Encoder.encode("\u6003")}).toThrowError({name:"TypeError",message:"EncodingError U+6003"});
expect(() => {ms932Encoder.encode("\u6004")}).toThrowError({name:"TypeError",message:"EncodingError U+6004"});
expect(() => {ms932Encoder.encode("\u6005")}).toThrowError({name:"TypeError",message:"EncodingError U+6005"});
expect(() => {ms932Encoder.encode("\u6006")}).toThrowError({name:"TypeError",message:"EncodingError U+6006"});
expect(() => {ms932Encoder.encode("\u6007")}).toThrowError({name:"TypeError",message:"EncodingError U+6007"});
expect(() => {ms932Encoder.encode("\u6008")}).toThrowError({name:"TypeError",message:"EncodingError U+6008"});
expect(() => {ms932Encoder.encode("\u6009")}).toThrowError({name:"TypeError",message:"EncodingError U+6009"});
expect(() => {ms932Encoder.encode("\u600A")}).toThrowError({name:"TypeError",message:"EncodingError U+600A"});
expect(() => {ms932Encoder.encode("\u600B")}).toThrowError({name:"TypeError",message:"EncodingError U+600B"});
expect(() => {ms932Encoder.encode("\u600C")}).toThrowError({name:"TypeError",message:"EncodingError U+600C"});
expect(() => {ms932Encoder.encode("\u600D")}).toThrowError({name:"TypeError",message:"EncodingError U+600D"});
expect([...ms932Encoder.encode("怎怏怐")].join(",")).toBe("156,131,156,137,156,129"); // U+600E
expect(() => {ms932Encoder.encode("\u6011")}).toThrowError({name:"TypeError",message:"EncodingError U+6011"});
expect([...ms932Encoder.encode("怒")].join(",")).toBe("147,123"); // U+6012
expect(() => {ms932Encoder.encode("\u6013")}).toThrowError({name:"TypeError",message:"EncodingError U+6013"});
expect(() => {ms932Encoder.encode("\u6014")}).toThrowError({name:"TypeError",message:"EncodingError U+6014"});
expect([...ms932Encoder.encode("怕怖")].join(",")).toBe("156,134,149,124"); // U+6015
expect(() => {ms932Encoder.encode("\u6017")}).toThrowError({name:"TypeError",message:"EncodingError U+6017"});
expect(() => {ms932Encoder.encode("\u6018")}).toThrowError({name:"TypeError",message:"EncodingError U+6018"});
expect([...ms932Encoder.encode("怙")].join(",")).toBe("156,128"); // U+6019
expect(() => {ms932Encoder.encode("\u601A")}).toThrowError({name:"TypeError",message:"EncodingError U+601A"});
expect([...ms932Encoder.encode("怛怜思")].join(",")).toBe("156,133,151,229,142,118"); // U+601B
expect(() => {ms932Encoder.encode("\u601E")}).toThrowError({name:"TypeError",message:"EncodingError U+601E"});
expect(() => {ms932Encoder.encode("\u601F")}).toThrowError({name:"TypeError",message:"EncodingError U+601F"});
expect([...ms932Encoder.encode("怠怡")].join(",")).toBe("145,211,156,125"); // U+6020
expect(() => {ms932Encoder.encode("\u6022")}).toThrowError({name:"TypeError",message:"EncodingError U+6022"});
expect(() => {ms932Encoder.encode("\u6023")}).toThrowError({name:"TypeError",message:"EncodingError U+6023"});
expect(() => {ms932Encoder.encode("\u6024")}).toThrowError({name:"TypeError",message:"EncodingError U+6024"});
expect([...ms932Encoder.encode("急怦性怨怩怪怫")].join(",")).toBe("139,125,156,136,144,171,137,133,156,130,137,246,156,135"); // U+6025
expect(() => {ms932Encoder.encode("\u602C")}).toThrowError({name:"TypeError",message:"EncodingError U+602C"});
expect(() => {ms932Encoder.encode("\u602D")}).toThrowError({name:"TypeError",message:"EncodingError U+602D"});
expect(() => {ms932Encoder.encode("\u602E")}).toThrowError({name:"TypeError",message:"EncodingError U+602E"});
expect([...ms932Encoder.encode("怯")].join(",")).toBe("139,175"); // U+602F
expect(() => {ms932Encoder.encode("\u6030")}).toThrowError({name:"TypeError",message:"EncodingError U+6030"});
expect([...ms932Encoder.encode("怱")].join(",")).toBe("156,132"); // U+6031
expect(() => {ms932Encoder.encode("\u6032")}).toThrowError({name:"TypeError",message:"EncodingError U+6032"});
expect(() => {ms932Encoder.encode("\u6033")}).toThrowError({name:"TypeError",message:"EncodingError U+6033"});
expect(() => {ms932Encoder.encode("\u6034")}).toThrowError({name:"TypeError",message:"EncodingError U+6034"});
expect(() => {ms932Encoder.encode("\u6035")}).toThrowError({name:"TypeError",message:"EncodingError U+6035"});
expect(() => {ms932Encoder.encode("\u6036")}).toThrowError({name:"TypeError",message:"EncodingError U+6036"});
expect(() => {ms932Encoder.encode("\u6037")}).toThrowError({name:"TypeError",message:"EncodingError U+6037"});
expect(() => {ms932Encoder.encode("\u6038")}).toThrowError({name:"TypeError",message:"EncodingError U+6038"});
expect(() => {ms932Encoder.encode("\u6039")}).toThrowError({name:"TypeError",message:"EncodingError U+6039"});
expect([...ms932Encoder.encode("怺")].join(",")).toBe("156,138"); // U+603A
expect(() => {ms932Encoder.encode("\u603B")}).toThrowError({name:"TypeError",message:"EncodingError U+603B"});
expect(() => {ms932Encoder.encode("\u603C")}).toThrowError({name:"TypeError",message:"EncodingError U+603C"});
expect(() => {ms932Encoder.encode("\u603D")}).toThrowError({name:"TypeError",message:"EncodingError U+603D"});
expect(() => {ms932Encoder.encode("\u603E")}).toThrowError({name:"TypeError",message:"EncodingError U+603E"});
expect(() => {ms932Encoder.encode("\u603F")}).toThrowError({name:"TypeError",message:"EncodingError U+603F"});
expect(() => {ms932Encoder.encode("\u6040")}).toThrowError({name:"TypeError",message:"EncodingError U+6040"});
expect([...ms932Encoder.encode("恁恂恃")].join(",")).toBe("156,140,156,150,156,148"); // U+6041
expect(() => {ms932Encoder.encode("\u6044")}).toThrowError({name:"TypeError",message:"EncodingError U+6044"});
expect(() => {ms932Encoder.encode("\u6045")}).toThrowError({name:"TypeError",message:"EncodingError U+6045"});
expect([...ms932Encoder.encode("恆")].join(",")).toBe("156,145"); // U+6046
expect(() => {ms932Encoder.encode("\u6047")}).toThrowError({name:"TypeError",message:"EncodingError U+6047"});
expect(() => {ms932Encoder.encode("\u6048")}).toThrowError({name:"TypeError",message:"EncodingError U+6048"});
expect(() => {ms932Encoder.encode("\u6049")}).toThrowError({name:"TypeError",message:"EncodingError U+6049"});
expect([...ms932Encoder.encode("恊恋")].join(",")).toBe("156,144,151,246"); // U+604A
expect(() => {ms932Encoder.encode("\u604C")}).toThrowError({name:"TypeError",message:"EncodingError U+604C"});
expect([...ms932Encoder.encode("恍")].join(",")).toBe("156,146"); // U+604D
expect(() => {ms932Encoder.encode("\u604E")}).toThrowError({name:"TypeError",message:"EncodingError U+604E"});
expect(() => {ms932Encoder.encode("\u604F")}).toThrowError({name:"TypeError",message:"EncodingError U+604F"});
expect([...ms932Encoder.encode("恐")].join(",")).toBe("139,176"); // U+6050
expect(() => {ms932Encoder.encode("\u6051")}).toThrowError({name:"TypeError",message:"EncodingError U+6051"});
expect([...ms932Encoder.encode("恒")].join(",")).toBe("141,80"); // U+6052
expect(() => {ms932Encoder.encode("\u6053")}).toThrowError({name:"TypeError",message:"EncodingError U+6053"});
expect(() => {ms932Encoder.encode("\u6054")}).toThrowError({name:"TypeError",message:"EncodingError U+6054"});
expect([...ms932Encoder.encode("恕")].join(",")).toBe("143,154"); // U+6055
expect(() => {ms932Encoder.encode("\u6056")}).toThrowError({name:"TypeError",message:"EncodingError U+6056"});
expect(() => {ms932Encoder.encode("\u6057")}).toThrowError({name:"TypeError",message:"EncodingError U+6057"});
expect(() => {ms932Encoder.encode("\u6058")}).toThrowError({name:"TypeError",message:"EncodingError U+6058"});
expect([...ms932Encoder.encode("恙恚")].join(",")).toBe("156,153,156,139"); // U+6059
expect(() => {ms932Encoder.encode("\u605B")}).toThrowError({name:"TypeError",message:"EncodingError U+605B"});
expect(() => {ms932Encoder.encode("\u605C")}).toThrowError({name:"TypeError",message:"EncodingError U+605C"});
expect([...ms932Encoder.encode("恝")].join(",")).toBe("250,188"); // U+605D
expect(() => {ms932Encoder.encode("\u605E")}).toThrowError({name:"TypeError",message:"EncodingError U+605E"});
expect([...ms932Encoder.encode("恟恠")].join(",")).toBe("156,143,156,126"); // U+605F
expect(() => {ms932Encoder.encode("\u6061")}).toThrowError({name:"TypeError",message:"EncodingError U+6061"});
expect([...ms932Encoder.encode("恢恣恤恥")].join(",")).toBe("137,248,156,147,156,149,146,112"); // U+6062
expect(() => {ms932Encoder.encode("\u6066")}).toThrowError({name:"TypeError",message:"EncodingError U+6066"});
expect(() => {ms932Encoder.encode("\u6067")}).toThrowError({name:"TypeError",message:"EncodingError U+6067"});
expect([...ms932Encoder.encode("恨恩恪恫恬恭")].join(",")).toBe("141,166,137,182,156,141,156,152,156,151,139,177"); // U+6068
expect(() => {ms932Encoder.encode("\u606E")}).toThrowError({name:"TypeError",message:"EncodingError U+606E"});
expect([...ms932Encoder.encode("息恰")].join(",")).toBe("145,167,138,134"); // U+606F
expect(() => {ms932Encoder.encode("\u6071")}).toThrowError({name:"TypeError",message:"EncodingError U+6071"});
expect(() => {ms932Encoder.encode("\u6072")}).toThrowError({name:"TypeError",message:"EncodingError U+6072"});
expect(() => {ms932Encoder.encode("\u6073")}).toThrowError({name:"TypeError",message:"EncodingError U+6073"});
expect(() => {ms932Encoder.encode("\u6074")}).toThrowError({name:"TypeError",message:"EncodingError U+6074"});
expect([...ms932Encoder.encode("恵")].join(",")).toBe("140,98"); // U+6075
expect(() => {ms932Encoder.encode("\u6076")}).toThrowError({name:"TypeError",message:"EncodingError U+6076"});
expect([...ms932Encoder.encode("恷")].join(",")).toBe("156,142"); // U+6077
expect(() => {ms932Encoder.encode("\u6078")}).toThrowError({name:"TypeError",message:"EncodingError U+6078"});
expect(() => {ms932Encoder.encode("\u6079")}).toThrowError({name:"TypeError",message:"EncodingError U+6079"});
expect(() => {ms932Encoder.encode("\u607A")}).toThrowError({name:"TypeError",message:"EncodingError U+607A"});
expect(() => {ms932Encoder.encode("\u607B")}).toThrowError({name:"TypeError",message:"EncodingError U+607B"});
expect(() => {ms932Encoder.encode("\u607C")}).toThrowError({name:"TypeError",message:"EncodingError U+607C"});
expect(() => {ms932Encoder.encode("\u607D")}).toThrowError({name:"TypeError",message:"EncodingError U+607D"});
expect(() => {ms932Encoder.encode("\u607E")}).toThrowError({name:"TypeError",message:"EncodingError U+607E"});
expect(() => {ms932Encoder.encode("\u607F")}).toThrowError({name:"TypeError",message:"EncodingError U+607F"});
expect(() => {ms932Encoder.encode("\u6080")}).toThrowError({name:"TypeError",message:"EncodingError U+6080"});
expect([...ms932Encoder.encode("悁")].join(",")).toBe("156,154"); // U+6081
expect(() => {ms932Encoder.encode("\u6082")}).toThrowError({name:"TypeError",message:"EncodingError U+6082"});
expect([...ms932Encoder.encode("悃悄悅")].join(",")).toBe("156,157,156,159,250,189"); // U+6083
expect(() => {ms932Encoder.encode("\u6086")}).toThrowError({name:"TypeError",message:"EncodingError U+6086"});
expect(() => {ms932Encoder.encode("\u6087")}).toThrowError({name:"TypeError",message:"EncodingError U+6087"});
expect(() => {ms932Encoder.encode("\u6088")}).toThrowError({name:"TypeError",message:"EncodingError U+6088"});
expect([...ms932Encoder.encode("悉悊悋悌悍")].join(",")).toBe("142,187,250,190,156,165,146,238,156,155"); // U+6089
expect(() => {ms932Encoder.encode("\u608E")}).toThrowError({name:"TypeError",message:"EncodingError U+608E"});
expect(() => {ms932Encoder.encode("\u608F")}).toThrowError({name:"TypeError",message:"EncodingError U+608F"});
expect(() => {ms932Encoder.encode("\u6090")}).toThrowError({name:"TypeError",message:"EncodingError U+6090"});
expect(() => {ms932Encoder.encode("\u6091")}).toThrowError({name:"TypeError",message:"EncodingError U+6091"});
expect([...ms932Encoder.encode("悒")].join(",")).toBe("156,163"); // U+6092
expect(() => {ms932Encoder.encode("\u6093")}).toThrowError({name:"TypeError",message:"EncodingError U+6093"});
expect([...ms932Encoder.encode("悔")].join(",")).toBe("137,247"); // U+6094
expect(() => {ms932Encoder.encode("\u6095")}).toThrowError({name:"TypeError",message:"EncodingError U+6095"});
expect([...ms932Encoder.encode("悖悗")].join(",")).toBe("156,161,156,162"); // U+6096
expect(() => {ms932Encoder.encode("\u6098")}).toThrowError({name:"TypeError",message:"EncodingError U+6098"});
expect(() => {ms932Encoder.encode("\u6099")}).toThrowError({name:"TypeError",message:"EncodingError U+6099"});
expect([...ms932Encoder.encode("悚悛")].join(",")).toBe("156,158,156,160"); // U+609A
expect(() => {ms932Encoder.encode("\u609C")}).toThrowError({name:"TypeError",message:"EncodingError U+609C"});
expect(() => {ms932Encoder.encode("\u609D")}).toThrowError({name:"TypeError",message:"EncodingError U+609D"});
expect(() => {ms932Encoder.encode("\u609E")}).toThrowError({name:"TypeError",message:"EncodingError U+609E"});
expect([...ms932Encoder.encode("悟悠")].join(",")).toBe("140,229,151,73"); // U+609F
expect(() => {ms932Encoder.encode("\u60A1")}).toThrowError({name:"TypeError",message:"EncodingError U+60A1"});
expect(() => {ms932Encoder.encode("\u60A2")}).toThrowError({name:"TypeError",message:"EncodingError U+60A2"});
expect([...ms932Encoder.encode("患")].join(",")).toBe("138,179"); // U+60A3
expect(() => {ms932Encoder.encode("\u60A4")}).toThrowError({name:"TypeError",message:"EncodingError U+60A4"});
expect(() => {ms932Encoder.encode("\u60A5")}).toThrowError({name:"TypeError",message:"EncodingError U+60A5"});
expect([...ms932Encoder.encode("悦悧")].join(",")).toBe("137,120,156,164"); // U+60A6
expect(() => {ms932Encoder.encode("\u60A8")}).toThrowError({name:"TypeError",message:"EncodingError U+60A8"});
expect([...ms932Encoder.encode("悩悪")].join(",")).toBe("148,89,136,171"); // U+60A9
expect(() => {ms932Encoder.encode("\u60AB")}).toThrowError({name:"TypeError",message:"EncodingError U+60AB"});
expect(() => {ms932Encoder.encode("\u60AC")}).toThrowError({name:"TypeError",message:"EncodingError U+60AC"});
expect(() => {ms932Encoder.encode("\u60AD")}).toThrowError({name:"TypeError",message:"EncodingError U+60AD"});
expect(() => {ms932Encoder.encode("\u60AE")}).toThrowError({name:"TypeError",message:"EncodingError U+60AE"});
expect(() => {ms932Encoder.encode("\u60AF")}).toThrowError({name:"TypeError",message:"EncodingError U+60AF"});
expect(() => {ms932Encoder.encode("\u60B0")}).toThrowError({name:"TypeError",message:"EncodingError U+60B0"});
expect(() => {ms932Encoder.encode("\u60B1")}).toThrowError({name:"TypeError",message:"EncodingError U+60B1"});
expect([...ms932Encoder.encode("悲悳悴悵悶")].join(",")).toBe("148,223,156,123,156,170,156,174,150,227"); // U+60B2
expect(() => {ms932Encoder.encode("\u60B7")}).toThrowError({name:"TypeError",message:"EncodingError U+60B7"});
expect([...ms932Encoder.encode("悸")].join(",")).toBe("156,167"); // U+60B8
expect(() => {ms932Encoder.encode("\u60B9")}).toThrowError({name:"TypeError",message:"EncodingError U+60B9"});
expect(() => {ms932Encoder.encode("\u60BA")}).toThrowError({name:"TypeError",message:"EncodingError U+60BA"});
expect(() => {ms932Encoder.encode("\u60BB")}).toThrowError({name:"TypeError",message:"EncodingError U+60BB"});
expect([...ms932Encoder.encode("悼悽")].join(",")).toBe("147,137,156,172"); // U+60BC
expect(() => {ms932Encoder.encode("\u60BE")}).toThrowError({name:"TypeError",message:"EncodingError U+60BE"});
expect(() => {ms932Encoder.encode("\u60BF")}).toThrowError({name:"TypeError",message:"EncodingError U+60BF"});
expect(() => {ms932Encoder.encode("\u60C0")}).toThrowError({name:"TypeError",message:"EncodingError U+60C0"});
expect(() => {ms932Encoder.encode("\u60C1")}).toThrowError({name:"TypeError",message:"EncodingError U+60C1"});
expect(() => {ms932Encoder.encode("\u60C2")}).toThrowError({name:"TypeError",message:"EncodingError U+60C2"});
expect(() => {ms932Encoder.encode("\u60C3")}).toThrowError({name:"TypeError",message:"EncodingError U+60C3"});
expect(() => {ms932Encoder.encode("\u60C4")}).toThrowError({name:"TypeError",message:"EncodingError U+60C4"});
expect([...ms932Encoder.encode("情惆惇")].join(",")).toBe("143,238,156,173,147,213"); // U+60C5
expect(() => {ms932Encoder.encode("\u60C8")}).toThrowError({name:"TypeError",message:"EncodingError U+60C8"});
expect(() => {ms932Encoder.encode("\u60C9")}).toThrowError({name:"TypeError",message:"EncodingError U+60C9"});
expect(() => {ms932Encoder.encode("\u60CA")}).toThrowError({name:"TypeError",message:"EncodingError U+60CA"});
expect(() => {ms932Encoder.encode("\u60CB")}).toThrowError({name:"TypeError",message:"EncodingError U+60CB"});
expect(() => {ms932Encoder.encode("\u60CC")}).toThrowError({name:"TypeError",message:"EncodingError U+60CC"});
expect(() => {ms932Encoder.encode("\u60CD")}).toThrowError({name:"TypeError",message:"EncodingError U+60CD"});
expect(() => {ms932Encoder.encode("\u60CE")}).toThrowError({name:"TypeError",message:"EncodingError U+60CE"});
expect(() => {ms932Encoder.encode("\u60CF")}).toThrowError({name:"TypeError",message:"EncodingError U+60CF"});
expect(() => {ms932Encoder.encode("\u60D0")}).toThrowError({name:"TypeError",message:"EncodingError U+60D0"});
expect([...ms932Encoder.encode("惑")].join(",")).toBe("152,102"); // U+60D1
expect(() => {ms932Encoder.encode("\u60D2")}).toThrowError({name:"TypeError",message:"EncodingError U+60D2"});
expect([...ms932Encoder.encode("惓")].join(",")).toBe("156,169"); // U+60D3
expect(() => {ms932Encoder.encode("\u60D4")}).toThrowError({name:"TypeError",message:"EncodingError U+60D4"});
expect([...ms932Encoder.encode("惕")].join(",")).toBe("250,192"); // U+60D5
expect(() => {ms932Encoder.encode("\u60D6")}).toThrowError({name:"TypeError",message:"EncodingError U+60D6"});
expect(() => {ms932Encoder.encode("\u60D7")}).toThrowError({name:"TypeError",message:"EncodingError U+60D7"});
expect([...ms932Encoder.encode("惘")].join(",")).toBe("156,175"); // U+60D8
expect(() => {ms932Encoder.encode("\u60D9")}).toThrowError({name:"TypeError",message:"EncodingError U+60D9"});
expect([...ms932Encoder.encode("惚")].join(",")).toBe("141,155"); // U+60DA
expect(() => {ms932Encoder.encode("\u60DB")}).toThrowError({name:"TypeError",message:"EncodingError U+60DB"});
expect([...ms932Encoder.encode("惜")].join(",")).toBe("144,201"); // U+60DC
expect(() => {ms932Encoder.encode("\u60DD")}).toThrowError({name:"TypeError",message:"EncodingError U+60DD"});
expect([...ms932Encoder.encode("惞惟惠惡")].join(",")).toBe("250,191,136,210,156,168,156,166"); // U+60DE
expect(() => {ms932Encoder.encode("\u60E2")}).toThrowError({name:"TypeError",message:"EncodingError U+60E2"});
expect([...ms932Encoder.encode("惣")].join(",")).toBe("145,121"); // U+60E3
expect(() => {ms932Encoder.encode("\u60E4")}).toThrowError({name:"TypeError",message:"EncodingError U+60E4"});
expect(() => {ms932Encoder.encode("\u60E5")}).toThrowError({name:"TypeError",message:"EncodingError U+60E5"});
expect(() => {ms932Encoder.encode("\u60E6")}).toThrowError({name:"TypeError",message:"EncodingError U+60E6"});
expect([...ms932Encoder.encode("惧惨")].join(",")).toBe("156,156,142,83"); // U+60E7
expect(() => {ms932Encoder.encode("\u60E9")}).toThrowError({name:"TypeError",message:"EncodingError U+60E9"});
expect(() => {ms932Encoder.encode("\u60EA")}).toThrowError({name:"TypeError",message:"EncodingError U+60EA"});
expect(() => {ms932Encoder.encode("\u60EB")}).toThrowError({name:"TypeError",message:"EncodingError U+60EB"});
expect(() => {ms932Encoder.encode("\u60EC")}).toThrowError({name:"TypeError",message:"EncodingError U+60EC"});
expect(() => {ms932Encoder.encode("\u60ED")}).toThrowError({name:"TypeError",message:"EncodingError U+60ED"});
expect(() => {ms932Encoder.encode("\u60EE")}).toThrowError({name:"TypeError",message:"EncodingError U+60EE"});
expect(() => {ms932Encoder.encode("\u60EF")}).toThrowError({name:"TypeError",message:"EncodingError U+60EF"});
expect([...ms932Encoder.encode("惰惱惲想惴")].join(",")).toBe("145,196,156,187,250,194,145,122,156,182"); // U+60F0
expect(() => {ms932Encoder.encode("\u60F5")}).toThrowError({name:"TypeError",message:"EncodingError U+60F5"});
expect([...ms932Encoder.encode("惶惷")].join(",")).toBe("156,179,156,180"); // U+60F6
expect(() => {ms932Encoder.encode("\u60F8")}).toThrowError({name:"TypeError",message:"EncodingError U+60F8"});
expect([...ms932Encoder.encode("惹惺惻")].join(",")).toBe("142,228,156,183,156,186"); // U+60F9
expect(() => {ms932Encoder.encode("\u60FC")}).toThrowError({name:"TypeError",message:"EncodingError U+60FC"});
expect(() => {ms932Encoder.encode("\u60FD")}).toThrowError({name:"TypeError",message:"EncodingError U+60FD"});
expect(() => {ms932Encoder.encode("\u60FE")}).toThrowError({name:"TypeError",message:"EncodingError U+60FE"});
expect(() => {ms932Encoder.encode("\u60FF")}).toThrowError({name:"TypeError",message:"EncodingError U+60FF"});
expect([...ms932Encoder.encode("愀愁")].join(",")).toBe("156,181,143,68"); // U+6100
expect(() => {ms932Encoder.encode("\u6102")}).toThrowError({name:"TypeError",message:"EncodingError U+6102"});
expect([...ms932Encoder.encode("愃")].join(",")).toBe("156,184"); // U+6103
expect(() => {ms932Encoder.encode("\u6104")}).toThrowError({name:"TypeError",message:"EncodingError U+6104"});
expect(() => {ms932Encoder.encode("\u6105")}).toThrowError({name:"TypeError",message:"EncodingError U+6105"});
expect([...ms932Encoder.encode("愆")].join(",")).toBe("156,178"); // U+6106
expect(() => {ms932Encoder.encode("\u6107")}).toThrowError({name:"TypeError",message:"EncodingError U+6107"});
expect([...ms932Encoder.encode("愈愉")].join(",")).toBe("150,250,150,249"); // U+6108
expect(() => {ms932Encoder.encode("\u610A")}).toThrowError({name:"TypeError",message:"EncodingError U+610A"});
expect(() => {ms932Encoder.encode("\u610B")}).toThrowError({name:"TypeError",message:"EncodingError U+610B"});
expect(() => {ms932Encoder.encode("\u610C")}).toThrowError({name:"TypeError",message:"EncodingError U+610C"});
expect([...ms932Encoder.encode("愍愎意")].join(",")).toBe("156,188,156,189,136,211"); // U+610D
expect(() => {ms932Encoder.encode("\u6110")}).toThrowError({name:"TypeError",message:"EncodingError U+6110"});
expect([...ms932Encoder.encode("愑")].join(",")).toBe("250,195"); // U+6111
expect(() => {ms932Encoder.encode("\u6112")}).toThrowError({name:"TypeError",message:"EncodingError U+6112"});
expect(() => {ms932Encoder.encode("\u6113")}).toThrowError({name:"TypeError",message:"EncodingError U+6113"});
expect(() => {ms932Encoder.encode("\u6114")}).toThrowError({name:"TypeError",message:"EncodingError U+6114"});
expect([...ms932Encoder.encode("愕")].join(",")).toBe("156,177"); // U+6115
expect(() => {ms932Encoder.encode("\u6116")}).toThrowError({name:"TypeError",message:"EncodingError U+6116"});
expect(() => {ms932Encoder.encode("\u6117")}).toThrowError({name:"TypeError",message:"EncodingError U+6117"});
expect(() => {ms932Encoder.encode("\u6118")}).toThrowError({name:"TypeError",message:"EncodingError U+6118"});
expect(() => {ms932Encoder.encode("\u6119")}).toThrowError({name:"TypeError",message:"EncodingError U+6119"});
expect([...ms932Encoder.encode("愚愛")].join(",")).toBe("139,240,136,164"); // U+611A
expect(() => {ms932Encoder.encode("\u611C")}).toThrowError({name:"TypeError",message:"EncodingError U+611C"});
expect(() => {ms932Encoder.encode("\u611D")}).toThrowError({name:"TypeError",message:"EncodingError U+611D"});
expect(() => {ms932Encoder.encode("\u611E")}).toThrowError({name:"TypeError",message:"EncodingError U+611E"});
expect([...ms932Encoder.encode("感愠愡")].join(",")).toBe("138,180,250,193,156,185"); // U+611F
expect(() => {ms932Encoder.encode("\u6122")}).toThrowError({name:"TypeError",message:"EncodingError U+6122"});
expect(() => {ms932Encoder.encode("\u6123")}).toThrowError({name:"TypeError",message:"EncodingError U+6123"});
expect(() => {ms932Encoder.encode("\u6124")}).toThrowError({name:"TypeError",message:"EncodingError U+6124"});
expect(() => {ms932Encoder.encode("\u6125")}).toThrowError({name:"TypeError",message:"EncodingError U+6125"});
expect(() => {ms932Encoder.encode("\u6126")}).toThrowError({name:"TypeError",message:"EncodingError U+6126"});
expect([...ms932Encoder.encode("愧愨")].join(",")).toBe("156,193,156,192"); // U+6127
expect(() => {ms932Encoder.encode("\u6129")}).toThrowError({name:"TypeError",message:"EncodingError U+6129"});
expect(() => {ms932Encoder.encode("\u612A")}).toThrowError({name:"TypeError",message:"EncodingError U+612A"});
expect(() => {ms932Encoder.encode("\u612B")}).toThrowError({name:"TypeError",message:"EncodingError U+612B"});
expect([...ms932Encoder.encode("愬")].join(",")).toBe("156,197"); // U+612C
expect(() => {ms932Encoder.encode("\u612D")}).toThrowError({name:"TypeError",message:"EncodingError U+612D"});
expect(() => {ms932Encoder.encode("\u612E")}).toThrowError({name:"TypeError",message:"EncodingError U+612E"});
expect(() => {ms932Encoder.encode("\u612F")}).toThrowError({name:"TypeError",message:"EncodingError U+612F"});
expect([...ms932Encoder.encode("愰")].join(",")).toBe("250,197"); // U+6130
expect(() => {ms932Encoder.encode("\u6131")}).toThrowError({name:"TypeError",message:"EncodingError U+6131"});
expect(() => {ms932Encoder.encode("\u6132")}).toThrowError({name:"TypeError",message:"EncodingError U+6132"});
expect(() => {ms932Encoder.encode("\u6133")}).toThrowError({name:"TypeError",message:"EncodingError U+6133"});
expect([...ms932Encoder.encode("愴")].join(",")).toBe("156,198"); // U+6134
expect(() => {ms932Encoder.encode("\u6135")}).toThrowError({name:"TypeError",message:"EncodingError U+6135"});
expect(() => {ms932Encoder.encode("\u6136")}).toThrowError({name:"TypeError",message:"EncodingError U+6136"});
expect([...ms932Encoder.encode("愷")].join(",")).toBe("250,196"); // U+6137
expect(() => {ms932Encoder.encode("\u6138")}).toThrowError({name:"TypeError",message:"EncodingError U+6138"});
expect(() => {ms932Encoder.encode("\u6139")}).toThrowError({name:"TypeError",message:"EncodingError U+6139"});
expect(() => {ms932Encoder.encode("\u613A")}).toThrowError({name:"TypeError",message:"EncodingError U+613A"});
expect(() => {ms932Encoder.encode("\u613B")}).toThrowError({name:"TypeError",message:"EncodingError U+613B"});
expect([...ms932Encoder.encode("愼愽愾愿")].join(",")).toBe("156,196,156,199,156,191,156,195"); // U+613C
expect(() => {ms932Encoder.encode("\u6140")}).toThrowError({name:"TypeError",message:"EncodingError U+6140"});
expect(() => {ms932Encoder.encode("\u6141")}).toThrowError({name:"TypeError",message:"EncodingError U+6141"});
expect([...ms932Encoder.encode("慂")].join(",")).toBe("156,200"); // U+6142
expect(() => {ms932Encoder.encode("\u6143")}).toThrowError({name:"TypeError",message:"EncodingError U+6143"});
expect([...ms932Encoder.encode("慄")].join(",")).toBe("156,201"); // U+6144
expect(() => {ms932Encoder.encode("\u6145")}).toThrowError({name:"TypeError",message:"EncodingError U+6145"});
expect(() => {ms932Encoder.encode("\u6146")}).toThrowError({name:"TypeError",message:"EncodingError U+6146"});
expect([...ms932Encoder.encode("慇慈")].join(",")).toBe("156,190,142,156"); // U+6147
expect(() => {ms932Encoder.encode("\u6149")}).toThrowError({name:"TypeError",message:"EncodingError U+6149"});
expect([...ms932Encoder.encode("慊態慌慍慎")].join(",")).toBe("156,194,145,212,141,81,156,176,144,84"); // U+614A
expect(() => {ms932Encoder.encode("\u614F")}).toThrowError({name:"TypeError",message:"EncodingError U+614F"});
expect(() => {ms932Encoder.encode("\u6150")}).toThrowError({name:"TypeError",message:"EncodingError U+6150"});
expect(() => {ms932Encoder.encode("\u6151")}).toThrowError({name:"TypeError",message:"EncodingError U+6151"});
expect(() => {ms932Encoder.encode("\u6152")}).toThrowError({name:"TypeError",message:"EncodingError U+6152"});
expect([...ms932Encoder.encode("慓")].join(",")).toBe("156,214"); // U+6153
expect(() => {ms932Encoder.encode("\u6154")}).toThrowError({name:"TypeError",message:"EncodingError U+6154"});
expect([...ms932Encoder.encode("慕")].join(",")).toBe("149,231"); // U+6155
expect(() => {ms932Encoder.encode("\u6156")}).toThrowError({name:"TypeError",message:"EncodingError U+6156"});
expect(() => {ms932Encoder.encode("\u6157")}).toThrowError({name:"TypeError",message:"EncodingError U+6157"});
expect([...ms932Encoder.encode("慘慙慚")].join(",")).toBe("156,204,156,205,156,206"); // U+6158
expect(() => {ms932Encoder.encode("\u615B")}).toThrowError({name:"TypeError",message:"EncodingError U+615B"});
expect(() => {ms932Encoder.encode("\u615C")}).toThrowError({name:"TypeError",message:"EncodingError U+615C"});
expect([...ms932Encoder.encode("慝")].join(",")).toBe("156,213"); // U+615D
expect(() => {ms932Encoder.encode("\u615E")}).toThrowError({name:"TypeError",message:"EncodingError U+615E"});
expect([...ms932Encoder.encode("慟")].join(",")).toBe("156,212"); // U+615F
expect(() => {ms932Encoder.encode("\u6160")}).toThrowError({name:"TypeError",message:"EncodingError U+6160"});
expect(() => {ms932Encoder.encode("\u6161")}).toThrowError({name:"TypeError",message:"EncodingError U+6161"});
expect([...ms932Encoder.encode("慢慣")].join(",")).toBe("150,157,138,181"); // U+6162
expect(() => {ms932Encoder.encode("\u6164")}).toThrowError({name:"TypeError",message:"EncodingError U+6164"});
expect([...ms932Encoder.encode("慥")].join(",")).toBe("156,210"); // U+6165
expect(() => {ms932Encoder.encode("\u6166")}).toThrowError({name:"TypeError",message:"EncodingError U+6166"});
expect([...ms932Encoder.encode("慧慨")].join(",")).toBe("140,100,138,83"); // U+6167
expect(() => {ms932Encoder.encode("\u6169")}).toThrowError({name:"TypeError",message:"EncodingError U+6169"});
expect(() => {ms932Encoder.encode("\u616A")}).toThrowError({name:"TypeError",message:"EncodingError U+616A"});
expect([...ms932Encoder.encode("慫")].join(",")).toBe("156,207"); // U+616B
expect(() => {ms932Encoder.encode("\u616C")}).toThrowError({name:"TypeError",message:"EncodingError U+616C"});
expect(() => {ms932Encoder.encode("\u616D")}).toThrowError({name:"TypeError",message:"EncodingError U+616D"});
expect([...ms932Encoder.encode("慮慯慰慱")].join(",")).toBe("151,182,156,209,136,212,156,211"); // U+616E
expect(() => {ms932Encoder.encode("\u6172")}).toThrowError({name:"TypeError",message:"EncodingError U+6172"});
expect([...ms932Encoder.encode("慳慴慵慶慷")].join(",")).toBe("156,202,156,208,156,215,140,99,156,203"); // U+6173
expect(() => {ms932Encoder.encode("\u6178")}).toThrowError({name:"TypeError",message:"EncodingError U+6178"});
expect(() => {ms932Encoder.encode("\u6179")}).toThrowError({name:"TypeError",message:"EncodingError U+6179"});
expect(() => {ms932Encoder.encode("\u617A")}).toThrowError({name:"TypeError",message:"EncodingError U+617A"});
expect(() => {ms932Encoder.encode("\u617B")}).toThrowError({name:"TypeError",message:"EncodingError U+617B"});
expect(() => {ms932Encoder.encode("\u617C")}).toThrowError({name:"TypeError",message:"EncodingError U+617C"});
expect(() => {ms932Encoder.encode("\u617D")}).toThrowError({name:"TypeError",message:"EncodingError U+617D"});
expect([...ms932Encoder.encode("慾")].join(",")).toBe("151,124"); // U+617E
expect(() => {ms932Encoder.encode("\u617F")}).toThrowError({name:"TypeError",message:"EncodingError U+617F"});
expect(() => {ms932Encoder.encode("\u6180")}).toThrowError({name:"TypeError",message:"EncodingError U+6180"});
expect(() => {ms932Encoder.encode("\u6181")}).toThrowError({name:"TypeError",message:"EncodingError U+6181"});
expect([...ms932Encoder.encode("憂")].join(",")).toBe("151,74"); // U+6182
expect(() => {ms932Encoder.encode("\u6183")}).toThrowError({name:"TypeError",message:"EncodingError U+6183"});
expect(() => {ms932Encoder.encode("\u6184")}).toThrowError({name:"TypeError",message:"EncodingError U+6184"});
expect(() => {ms932Encoder.encode("\u6185")}).toThrowError({name:"TypeError",message:"EncodingError U+6185"});
expect(() => {ms932Encoder.encode("\u6186")}).toThrowError({name:"TypeError",message:"EncodingError U+6186"});
expect([...ms932Encoder.encode("憇")].join(",")).toBe("156,218"); // U+6187
expect(() => {ms932Encoder.encode("\u6188")}).toThrowError({name:"TypeError",message:"EncodingError U+6188"});
expect(() => {ms932Encoder.encode("\u6189")}).toThrowError({name:"TypeError",message:"EncodingError U+6189"});
expect([...ms932Encoder.encode("憊")].join(",")).toBe("156,222"); // U+618A
expect(() => {ms932Encoder.encode("\u618B")}).toThrowError({name:"TypeError",message:"EncodingError U+618B"});
expect(() => {ms932Encoder.encode("\u618C")}).toThrowError({name:"TypeError",message:"EncodingError U+618C"});
expect(() => {ms932Encoder.encode("\u618D")}).toThrowError({name:"TypeError",message:"EncodingError U+618D"});
expect([...ms932Encoder.encode("憎")].join(",")).toBe("145,158"); // U+618E
expect(() => {ms932Encoder.encode("\u618F")}).toThrowError({name:"TypeError",message:"EncodingError U+618F"});
expect([...ms932Encoder.encode("憐憑")].join(",")).toBe("151,247,156,223"); // U+6190
expect(() => {ms932Encoder.encode("\u6192")}).toThrowError({name:"TypeError",message:"EncodingError U+6192"});
expect(() => {ms932Encoder.encode("\u6193")}).toThrowError({name:"TypeError",message:"EncodingError U+6193"});
expect([...ms932Encoder.encode("憔")].join(",")).toBe("156,220"); // U+6194
expect(() => {ms932Encoder.encode("\u6195")}).toThrowError({name:"TypeError",message:"EncodingError U+6195"});
expect([...ms932Encoder.encode("憖")].join(",")).toBe("156,217"); // U+6196
expect(() => {ms932Encoder.encode("\u6197")}).toThrowError({name:"TypeError",message:"EncodingError U+6197"});
expect([...ms932Encoder.encode("憘憙憚")].join(",")).toBe("250,198,156,216,156,221"); // U+6198
expect(() => {ms932Encoder.encode("\u619B")}).toThrowError({name:"TypeError",message:"EncodingError U+619B"});
expect(() => {ms932Encoder.encode("\u619C")}).toThrowError({name:"TypeError",message:"EncodingError U+619C"});
expect(() => {ms932Encoder.encode("\u619D")}).toThrowError({name:"TypeError",message:"EncodingError U+619D"});
expect(() => {ms932Encoder.encode("\u619E")}).toThrowError({name:"TypeError",message:"EncodingError U+619E"});
expect(() => {ms932Encoder.encode("\u619F")}).toThrowError({name:"TypeError",message:"EncodingError U+619F"});
expect(() => {ms932Encoder.encode("\u61A0")}).toThrowError({name:"TypeError",message:"EncodingError U+61A0"});
expect(() => {ms932Encoder.encode("\u61A1")}).toThrowError({name:"TypeError",message:"EncodingError U+61A1"});
expect(() => {ms932Encoder.encode("\u61A2")}).toThrowError({name:"TypeError",message:"EncodingError U+61A2"});
expect(() => {ms932Encoder.encode("\u61A3")}).toThrowError({name:"TypeError",message:"EncodingError U+61A3"});
expect([...ms932Encoder.encode("憤")].join(",")).toBe("149,174"); // U+61A4
expect(() => {ms932Encoder.encode("\u61A5")}).toThrowError({name:"TypeError",message:"EncodingError U+61A5"});
expect(() => {ms932Encoder.encode("\u61A6")}).toThrowError({name:"TypeError",message:"EncodingError U+61A6"});
expect([...ms932Encoder.encode("憧")].join(",")).toBe("147,178"); // U+61A7
expect(() => {ms932Encoder.encode("\u61A8")}).toThrowError({name:"TypeError",message:"EncodingError U+61A8"});
expect([...ms932Encoder.encode("憩")].join(",")).toBe("140,101"); // U+61A9
expect(() => {ms932Encoder.encode("\u61AA")}).toThrowError({name:"TypeError",message:"EncodingError U+61AA"});
expect([...ms932Encoder.encode("憫憬")].join(",")).toBe("156,224,156,219"); // U+61AB
expect(() => {ms932Encoder.encode("\u61AD")}).toThrowError({name:"TypeError",message:"EncodingError U+61AD"});
expect([...ms932Encoder.encode("憮")].join(",")).toBe("156,225"); // U+61AE
expect(() => {ms932Encoder.encode("\u61AF")}).toThrowError({name:"TypeError",message:"EncodingError U+61AF"});
expect(() => {ms932Encoder.encode("\u61B0")}).toThrowError({name:"TypeError",message:"EncodingError U+61B0"});
expect(() => {ms932Encoder.encode("\u61B1")}).toThrowError({name:"TypeError",message:"EncodingError U+61B1"});
expect([...ms932Encoder.encode("憲")].join(",")).toBe("140,155"); // U+61B2
expect(() => {ms932Encoder.encode("\u61B3")}).toThrowError({name:"TypeError",message:"EncodingError U+61B3"});
expect(() => {ms932Encoder.encode("\u61B4")}).toThrowError({name:"TypeError",message:"EncodingError U+61B4"});
expect(() => {ms932Encoder.encode("\u61B5")}).toThrowError({name:"TypeError",message:"EncodingError U+61B5"});
expect([...ms932Encoder.encode("憶")].join(",")).toBe("137,175"); // U+61B6
expect(() => {ms932Encoder.encode("\u61B7")}).toThrowError({name:"TypeError",message:"EncodingError U+61B7"});
expect(() => {ms932Encoder.encode("\u61B8")}).toThrowError({name:"TypeError",message:"EncodingError U+61B8"});
expect(() => {ms932Encoder.encode("\u61B9")}).toThrowError({name:"TypeError",message:"EncodingError U+61B9"});
expect([...ms932Encoder.encode("憺")].join(",")).toBe("156,233"); // U+61BA
expect(() => {ms932Encoder.encode("\u61BB")}).toThrowError({name:"TypeError",message:"EncodingError U+61BB"});
expect(() => {ms932Encoder.encode("\u61BC")}).toThrowError({name:"TypeError",message:"EncodingError U+61BC"});
expect(() => {ms932Encoder.encode("\u61BD")}).toThrowError({name:"TypeError",message:"EncodingError U+61BD"});
expect([...ms932Encoder.encode("憾")].join(",")).toBe("138,182"); // U+61BE
expect(() => {ms932Encoder.encode("\u61BF")}).toThrowError({name:"TypeError",message:"EncodingError U+61BF"});
expect(() => {ms932Encoder.encode("\u61C0")}).toThrowError({name:"TypeError",message:"EncodingError U+61C0"});
expect(() => {ms932Encoder.encode("\u61C1")}).toThrowError({name:"TypeError",message:"EncodingError U+61C1"});
expect(() => {ms932Encoder.encode("\u61C2")}).toThrowError({name:"TypeError",message:"EncodingError U+61C2"});
expect([...ms932Encoder.encode("懃")].join(",")).toBe("156,231"); // U+61C3
expect(() => {ms932Encoder.encode("\u61C4")}).toThrowError({name:"TypeError",message:"EncodingError U+61C4"});
expect(() => {ms932Encoder.encode("\u61C5")}).toThrowError({name:"TypeError",message:"EncodingError U+61C5"});
expect([...ms932Encoder.encode("懆懇懈應懊懋懌懍")].join(",")).toBe("156,232,141,167,156,230,156,228,156,227,156,234,156,226,156,236"); // U+61C6
expect(() => {ms932Encoder.encode("\u61CE")}).toThrowError({name:"TypeError",message:"EncodingError U+61CE"});
expect(() => {ms932Encoder.encode("\u61CF")}).toThrowError({name:"TypeError",message:"EncodingError U+61CF"});
expect([...ms932Encoder.encode("懐")].join(",")).toBe("137,249"); // U+61D0
expect(() => {ms932Encoder.encode("\u61D1")}).toThrowError({name:"TypeError",message:"EncodingError U+61D1"});
expect(() => {ms932Encoder.encode("\u61D2")}).toThrowError({name:"TypeError",message:"EncodingError U+61D2"});
expect(() => {ms932Encoder.encode("\u61D3")}).toThrowError({name:"TypeError",message:"EncodingError U+61D3"});
expect(() => {ms932Encoder.encode("\u61D4")}).toThrowError({name:"TypeError",message:"EncodingError U+61D4"});
expect(() => {ms932Encoder.encode("\u61D5")}).toThrowError({name:"TypeError",message:"EncodingError U+61D5"});
expect(() => {ms932Encoder.encode("\u61D6")}).toThrowError({name:"TypeError",message:"EncodingError U+61D6"});
expect(() => {ms932Encoder.encode("\u61D7")}).toThrowError({name:"TypeError",message:"EncodingError U+61D7"});
expect(() => {ms932Encoder.encode("\u61D8")}).toThrowError({name:"TypeError",message:"EncodingError U+61D8"});
expect(() => {ms932Encoder.encode("\u61D9")}).toThrowError({name:"TypeError",message:"EncodingError U+61D9"});
expect(() => {ms932Encoder.encode("\u61DA")}).toThrowError({name:"TypeError",message:"EncodingError U+61DA"});
expect(() => {ms932Encoder.encode("\u61DB")}).toThrowError({name:"TypeError",message:"EncodingError U+61DB"});
expect(() => {ms932Encoder.encode("\u61DC")}).toThrowError({name:"TypeError",message:"EncodingError U+61DC"});
expect(() => {ms932Encoder.encode("\u61DD")}).toThrowError({name:"TypeError",message:"EncodingError U+61DD"});
expect(() => {ms932Encoder.encode("\u61DE")}).toThrowError({name:"TypeError",message:"EncodingError U+61DE"});
expect(() => {ms932Encoder.encode("\u61DF")}).toThrowError({name:"TypeError",message:"EncodingError U+61DF"});
expect(() => {ms932Encoder.encode("\u61E0")}).toThrowError({name:"TypeError",message:"EncodingError U+61E0"});
expect(() => {ms932Encoder.encode("\u61E1")}).toThrowError({name:"TypeError",message:"EncodingError U+61E1"});
expect(() => {ms932Encoder.encode("\u61E2")}).toThrowError({name:"TypeError",message:"EncodingError U+61E2"});
expect([...ms932Encoder.encode("懣")].join(",")).toBe("156,238"); // U+61E3
expect(() => {ms932Encoder.encode("\u61E4")}).toThrowError({name:"TypeError",message:"EncodingError U+61E4"});
expect(() => {ms932Encoder.encode("\u61E5")}).toThrowError({name:"TypeError",message:"EncodingError U+61E5"});
expect([...ms932Encoder.encode("懦")].join(",")).toBe("156,237"); // U+61E6
expect(() => {ms932Encoder.encode("\u61E7")}).toThrowError({name:"TypeError",message:"EncodingError U+61E7"});
expect(() => {ms932Encoder.encode("\u61E8")}).toThrowError({name:"TypeError",message:"EncodingError U+61E8"});
expect(() => {ms932Encoder.encode("\u61E9")}).toThrowError({name:"TypeError",message:"EncodingError U+61E9"});
expect(() => {ms932Encoder.encode("\u61EA")}).toThrowError({name:"TypeError",message:"EncodingError U+61EA"});
expect(() => {ms932Encoder.encode("\u61EB")}).toThrowError({name:"TypeError",message:"EncodingError U+61EB"});
expect(() => {ms932Encoder.encode("\u61EC")}).toThrowError({name:"TypeError",message:"EncodingError U+61EC"});
expect(() => {ms932Encoder.encode("\u61ED")}).toThrowError({name:"TypeError",message:"EncodingError U+61ED"});
expect(() => {ms932Encoder.encode("\u61EE")}).toThrowError({name:"TypeError",message:"EncodingError U+61EE"});
expect(() => {ms932Encoder.encode("\u61EF")}).toThrowError({name:"TypeError",message:"EncodingError U+61EF"});
expect(() => {ms932Encoder.encode("\u61F0")}).toThrowError({name:"TypeError",message:"EncodingError U+61F0"});
expect(() => {ms932Encoder.encode("\u61F1")}).toThrowError({name:"TypeError",message:"EncodingError U+61F1"});
expect([...ms932Encoder.encode("懲")].join(",")).toBe("146,166"); // U+61F2
expect(() => {ms932Encoder.encode("\u61F3")}).toThrowError({name:"TypeError",message:"EncodingError U+61F3"});
expect([...ms932Encoder.encode("懴")].join(",")).toBe("156,241"); // U+61F4
expect(() => {ms932Encoder.encode("\u61F5")}).toThrowError({name:"TypeError",message:"EncodingError U+61F5"});
expect([...ms932Encoder.encode("懶懷懸")].join(",")).toBe("156,239,156,229,140,156"); // U+61F6
expect(() => {ms932Encoder.encode("\u61F9")}).toThrowError({name:"TypeError",message:"EncodingError U+61F9"});
expect([...ms932Encoder.encode("懺")].join(",")).toBe("156,240"); // U+61FA
expect(() => {ms932Encoder.encode("\u61FB")}).toThrowError({name:"TypeError",message:"EncodingError U+61FB"});
expect([...ms932Encoder.encode("懼懽懾懿戀")].join(",")).toBe("156,244,156,243,156,245,156,242,156,246"); // U+61FC
expect(() => {ms932Encoder.encode("\u6201")}).toThrowError({name:"TypeError",message:"EncodingError U+6201"});
expect(() => {ms932Encoder.encode("\u6202")}).toThrowError({name:"TypeError",message:"EncodingError U+6202"});
expect(() => {ms932Encoder.encode("\u6203")}).toThrowError({name:"TypeError",message:"EncodingError U+6203"});
expect(() => {ms932Encoder.encode("\u6204")}).toThrowError({name:"TypeError",message:"EncodingError U+6204"});
expect(() => {ms932Encoder.encode("\u6205")}).toThrowError({name:"TypeError",message:"EncodingError U+6205"});
expect(() => {ms932Encoder.encode("\u6206")}).toThrowError({name:"TypeError",message:"EncodingError U+6206"});
expect(() => {ms932Encoder.encode("\u6207")}).toThrowError({name:"TypeError",message:"EncodingError U+6207"});
expect([...ms932Encoder.encode("戈戉戊")].join(",")).toBe("156,247,156,248,149,232"); // U+6208
expect(() => {ms932Encoder.encode("\u620B")}).toThrowError({name:"TypeError",message:"EncodingError U+620B"});
expect([...ms932Encoder.encode("戌戍戎")].join(",")).toBe("156,250,156,249,143,94"); // U+620C
expect(() => {ms932Encoder.encode("\u620F")}).toThrowError({name:"TypeError",message:"EncodingError U+620F"});
expect([...ms932Encoder.encode("成我戒戓戔")].join(",")).toBe("144,172,137,228,137,250,250,199,156,251"); // U+6210
expect(() => {ms932Encoder.encode("\u6215")}).toThrowError({name:"TypeError",message:"EncodingError U+6215"});
expect([...ms932Encoder.encode("或")].join(",")).toBe("136,189"); // U+6216
expect(() => {ms932Encoder.encode("\u6217")}).toThrowError({name:"TypeError",message:"EncodingError U+6217"});
expect(() => {ms932Encoder.encode("\u6218")}).toThrowError({name:"TypeError",message:"EncodingError U+6218"});
expect(() => {ms932Encoder.encode("\u6219")}).toThrowError({name:"TypeError",message:"EncodingError U+6219"});
expect([...ms932Encoder.encode("戚戛")].join(",")).toBe("144,202,156,252"); // U+621A
expect(() => {ms932Encoder.encode("\u621C")}).toThrowError({name:"TypeError",message:"EncodingError U+621C"});
expect([...ms932Encoder.encode("戝戞戟")].join(",")).toBe("230,193,157,64,140,129"); // U+621D
expect(() => {ms932Encoder.encode("\u6220")}).toThrowError({name:"TypeError",message:"EncodingError U+6220"});
expect([...ms932Encoder.encode("戡")].join(",")).toBe("157,65"); // U+6221
expect(() => {ms932Encoder.encode("\u6222")}).toThrowError({name:"TypeError",message:"EncodingError U+6222"});
expect(() => {ms932Encoder.encode("\u6223")}).toThrowError({name:"TypeError",message:"EncodingError U+6223"});
expect(() => {ms932Encoder.encode("\u6224")}).toThrowError({name:"TypeError",message:"EncodingError U+6224"});
expect(() => {ms932Encoder.encode("\u6225")}).toThrowError({name:"TypeError",message:"EncodingError U+6225"});
expect([...ms932Encoder.encode("戦")].join(",")).toBe("144,237"); // U+6226
expect(() => {ms932Encoder.encode("\u6227")}).toThrowError({name:"TypeError",message:"EncodingError U+6227"});
expect(() => {ms932Encoder.encode("\u6228")}).toThrowError({name:"TypeError",message:"EncodingError U+6228"});
expect(() => {ms932Encoder.encode("\u6229")}).toThrowError({name:"TypeError",message:"EncodingError U+6229"});
expect([...ms932Encoder.encode("截")].join(",")).toBe("157,66"); // U+622A
expect(() => {ms932Encoder.encode("\u622B")}).toThrowError({name:"TypeError",message:"EncodingError U+622B"});
expect(() => {ms932Encoder.encode("\u622C")}).toThrowError({name:"TypeError",message:"EncodingError U+622C"});
expect(() => {ms932Encoder.encode("\u622D")}).toThrowError({name:"TypeError",message:"EncodingError U+622D"});
expect([...ms932Encoder.encode("戮戯戰")].join(",")).toBe("157,67,139,89,157,68"); // U+622E
expect(() => {ms932Encoder.encode("\u6231")}).toThrowError({name:"TypeError",message:"EncodingError U+6231"});
expect([...ms932Encoder.encode("戲戳戴")].join(",")).toBe("157,69,157,70,145,213"); // U+6232
expect(() => {ms932Encoder.encode("\u6235")}).toThrowError({name:"TypeError",message:"EncodingError U+6235"});
expect(() => {ms932Encoder.encode("\u6236")}).toThrowError({name:"TypeError",message:"EncodingError U+6236"});
expect(() => {ms932Encoder.encode("\u6237")}).toThrowError({name:"TypeError",message:"EncodingError U+6237"});
expect([...ms932Encoder.encode("戸")].join(",")).toBe("140,203"); // U+6238
expect(() => {ms932Encoder.encode("\u6239")}).toThrowError({name:"TypeError",message:"EncodingError U+6239"});
expect(() => {ms932Encoder.encode("\u623A")}).toThrowError({name:"TypeError",message:"EncodingError U+623A"});
expect([...ms932Encoder.encode("戻")].join(",")).toBe("150,223"); // U+623B
expect(() => {ms932Encoder.encode("\u623C")}).toThrowError({name:"TypeError",message:"EncodingError U+623C"});
expect(() => {ms932Encoder.encode("\u623D")}).toThrowError({name:"TypeError",message:"EncodingError U+623D"});
expect(() => {ms932Encoder.encode("\u623E")}).toThrowError({name:"TypeError",message:"EncodingError U+623E"});
expect([...ms932Encoder.encode("房所扁")].join(",")).toBe("150,91,143,138,157,71"); // U+623F
expect(() => {ms932Encoder.encode("\u6242")}).toThrowError({name:"TypeError",message:"EncodingError U+6242"});
expect(() => {ms932Encoder.encode("\u6243")}).toThrowError({name:"TypeError",message:"EncodingError U+6243"});
expect(() => {ms932Encoder.encode("\u6244")}).toThrowError({name:"TypeError",message:"EncodingError U+6244"});
expect(() => {ms932Encoder.encode("\u6245")}).toThrowError({name:"TypeError",message:"EncodingError U+6245"});
expect(() => {ms932Encoder.encode("\u6246")}).toThrowError({name:"TypeError",message:"EncodingError U+6246"});
expect([...ms932Encoder.encode("扇扈扉")].join(",")).toBe("144,238,231,187,148,224"); // U+6247
expect(() => {ms932Encoder.encode("\u624A")}).toThrowError({name:"TypeError",message:"EncodingError U+624A"});
expect([...ms932Encoder.encode("手")].join(",")).toBe("142,232"); // U+624B
expect(() => {ms932Encoder.encode("\u624C")}).toThrowError({name:"TypeError",message:"EncodingError U+624C"});
expect([...ms932Encoder.encode("才扎")].join(",")).toBe("141,203,157,72"); // U+624D
expect(() => {ms932Encoder.encode("\u624F")}).toThrowError({name:"TypeError",message:"EncodingError U+624F"});
expect(() => {ms932Encoder.encode("\u6250")}).toThrowError({name:"TypeError",message:"EncodingError U+6250"});
expect(() => {ms932Encoder.encode("\u6251")}).toThrowError({name:"TypeError",message:"EncodingError U+6251"});
expect(() => {ms932Encoder.encode("\u6252")}).toThrowError({name:"TypeError",message:"EncodingError U+6252"});
expect([...ms932Encoder.encode("打")].join(",")).toBe("145,197"); // U+6253
expect(() => {ms932Encoder.encode("\u6254")}).toThrowError({name:"TypeError",message:"EncodingError U+6254"});
expect([...ms932Encoder.encode("払")].join(",")).toBe("149,165"); // U+6255
expect(() => {ms932Encoder.encode("\u6256")}).toThrowError({name:"TypeError",message:"EncodingError U+6256"});
expect(() => {ms932Encoder.encode("\u6257")}).toThrowError({name:"TypeError",message:"EncodingError U+6257"});
expect([...ms932Encoder.encode("托")].join(",")).toBe("145,239"); // U+6258
expect(() => {ms932Encoder.encode("\u6259")}).toThrowError({name:"TypeError",message:"EncodingError U+6259"});
expect(() => {ms932Encoder.encode("\u625A")}).toThrowError({name:"TypeError",message:"EncodingError U+625A"});
expect([...ms932Encoder.encode("扛")].join(",")).toBe("157,75"); // U+625B
expect(() => {ms932Encoder.encode("\u625C")}).toThrowError({name:"TypeError",message:"EncodingError U+625C"});
expect(() => {ms932Encoder.encode("\u625D")}).toThrowError({name:"TypeError",message:"EncodingError U+625D"});
expect([...ms932Encoder.encode("扞")].join(",")).toBe("157,73"); // U+625E
expect(() => {ms932Encoder.encode("\u625F")}).toThrowError({name:"TypeError",message:"EncodingError U+625F"});
expect([...ms932Encoder.encode("扠")].join(",")).toBe("157,76"); // U+6260
expect(() => {ms932Encoder.encode("\u6261")}).toThrowError({name:"TypeError",message:"EncodingError U+6261"});
expect(() => {ms932Encoder.encode("\u6262")}).toThrowError({name:"TypeError",message:"EncodingError U+6262"});
expect([...ms932Encoder.encode("扣")].join(",")).toBe("157,74"); // U+6263
expect(() => {ms932Encoder.encode("\u6264")}).toThrowError({name:"TypeError",message:"EncodingError U+6264"});
expect(() => {ms932Encoder.encode("\u6265")}).toThrowError({name:"TypeError",message:"EncodingError U+6265"});
expect(() => {ms932Encoder.encode("\u6266")}).toThrowError({name:"TypeError",message:"EncodingError U+6266"});
expect(() => {ms932Encoder.encode("\u6267")}).toThrowError({name:"TypeError",message:"EncodingError U+6267"});
expect([...ms932Encoder.encode("扨")].join(",")).toBe("157,77"); // U+6268
expect(() => {ms932Encoder.encode("\u6269")}).toThrowError({name:"TypeError",message:"EncodingError U+6269"});
expect(() => {ms932Encoder.encode("\u626A")}).toThrowError({name:"TypeError",message:"EncodingError U+626A"});
expect(() => {ms932Encoder.encode("\u626B")}).toThrowError({name:"TypeError",message:"EncodingError U+626B"});
expect(() => {ms932Encoder.encode("\u626C")}).toThrowError({name:"TypeError",message:"EncodingError U+626C"});
expect(() => {ms932Encoder.encode("\u626D")}).toThrowError({name:"TypeError",message:"EncodingError U+626D"});
expect([...ms932Encoder.encode("扮")].join(",")).toBe("149,175"); // U+626E
expect(() => {ms932Encoder.encode("\u626F")}).toThrowError({name:"TypeError",message:"EncodingError U+626F"});
expect(() => {ms932Encoder.encode("\u6270")}).toThrowError({name:"TypeError",message:"EncodingError U+6270"});
expect([...ms932Encoder.encode("扱")].join(",")).toBe("136,181"); // U+6271
expect(() => {ms932Encoder.encode("\u6272")}).toThrowError({name:"TypeError",message:"EncodingError U+6272"});
expect(() => {ms932Encoder.encode("\u6273")}).toThrowError({name:"TypeError",message:"EncodingError U+6273"});
expect(() => {ms932Encoder.encode("\u6274")}).toThrowError({name:"TypeError",message:"EncodingError U+6274"});
expect(() => {ms932Encoder.encode("\u6275")}).toThrowError({name:"TypeError",message:"EncodingError U+6275"});
expect([...ms932Encoder.encode("扶")].join(",")).toBe("149,125"); // U+6276
expect(() => {ms932Encoder.encode("\u6277")}).toThrowError({name:"TypeError",message:"EncodingError U+6277"});
expect(() => {ms932Encoder.encode("\u6278")}).toThrowError({name:"TypeError",message:"EncodingError U+6278"});
expect([...ms932Encoder.encode("批")].join(",")).toBe("148,225"); // U+6279
expect(() => {ms932Encoder.encode("\u627A")}).toThrowError({name:"TypeError",message:"EncodingError U+627A"});
expect(() => {ms932Encoder.encode("\u627B")}).toThrowError({name:"TypeError",message:"EncodingError U+627B"});
expect([...ms932Encoder.encode("扼")].join(",")).toBe("157,78"); // U+627C
expect(() => {ms932Encoder.encode("\u627D")}).toThrowError({name:"TypeError",message:"EncodingError U+627D"});
expect([...ms932Encoder.encode("找承技")].join(",")).toBe("157,81,143,179,139,90"); // U+627E
expect(() => {ms932Encoder.encode("\u6281")}).toThrowError({name:"TypeError",message:"EncodingError U+6281"});
expect([...ms932Encoder.encode("抂抃抄")].join(",")).toBe("157,79,157,86,143,180"); // U+6282
expect(() => {ms932Encoder.encode("\u6285")}).toThrowError({name:"TypeError",message:"EncodingError U+6285"});
expect(() => {ms932Encoder.encode("\u6286")}).toThrowError({name:"TypeError",message:"EncodingError U+6286"});
expect(() => {ms932Encoder.encode("\u6287")}).toThrowError({name:"TypeError",message:"EncodingError U+6287"});
expect(() => {ms932Encoder.encode("\u6288")}).toThrowError({name:"TypeError",message:"EncodingError U+6288"});
expect([...ms932Encoder.encode("抉把")].join(",")).toBe("157,80,148,99"); // U+6289
expect(() => {ms932Encoder.encode("\u628B")}).toThrowError({name:"TypeError",message:"EncodingError U+628B"});
expect(() => {ms932Encoder.encode("\u628C")}).toThrowError({name:"TypeError",message:"EncodingError U+628C"});
expect(() => {ms932Encoder.encode("\u628D")}).toThrowError({name:"TypeError",message:"EncodingError U+628D"});
expect(() => {ms932Encoder.encode("\u628E")}).toThrowError({name:"TypeError",message:"EncodingError U+628E"});
expect(() => {ms932Encoder.encode("\u628F")}).toThrowError({name:"TypeError",message:"EncodingError U+628F"});
expect(() => {ms932Encoder.encode("\u6290")}).toThrowError({name:"TypeError",message:"EncodingError U+6290"});
expect([...ms932Encoder.encode("抑抒抓抔投抖抗折")].join(",")).toBe("151,125,157,82,157,83,157,87,147,138,157,84,141,82,144,220"); // U+6291
expect(() => {ms932Encoder.encode("\u6299")}).toThrowError({name:"TypeError",message:"EncodingError U+6299"});
expect(() => {ms932Encoder.encode("\u629A")}).toThrowError({name:"TypeError",message:"EncodingError U+629A"});
expect([...ms932Encoder.encode("抛抜")].join(",")).toBe("157,101,148,178"); // U+629B
expect(() => {ms932Encoder.encode("\u629D")}).toThrowError({name:"TypeError",message:"EncodingError U+629D"});
expect([...ms932Encoder.encode("択")].join(",")).toBe("145,240"); // U+629E
expect(() => {ms932Encoder.encode("\u629F")}).toThrowError({name:"TypeError",message:"EncodingError U+629F"});
expect(() => {ms932Encoder.encode("\u62A0")}).toThrowError({name:"TypeError",message:"EncodingError U+62A0"});
expect(() => {ms932Encoder.encode("\u62A1")}).toThrowError({name:"TypeError",message:"EncodingError U+62A1"});
expect(() => {ms932Encoder.encode("\u62A2")}).toThrowError({name:"TypeError",message:"EncodingError U+62A2"});
expect(() => {ms932Encoder.encode("\u62A3")}).toThrowError({name:"TypeError",message:"EncodingError U+62A3"});
expect(() => {ms932Encoder.encode("\u62A4")}).toThrowError({name:"TypeError",message:"EncodingError U+62A4"});
expect(() => {ms932Encoder.encode("\u62A5")}).toThrowError({name:"TypeError",message:"EncodingError U+62A5"});
expect([...ms932Encoder.encode("抦")].join(",")).toBe("250,200"); // U+62A6
expect(() => {ms932Encoder.encode("\u62A7")}).toThrowError({name:"TypeError",message:"EncodingError U+62A7"});
expect(() => {ms932Encoder.encode("\u62A8")}).toThrowError({name:"TypeError",message:"EncodingError U+62A8"});
expect(() => {ms932Encoder.encode("\u62A9")}).toThrowError({name:"TypeError",message:"EncodingError U+62A9"});
expect(() => {ms932Encoder.encode("\u62AA")}).toThrowError({name:"TypeError",message:"EncodingError U+62AA"});
expect([...ms932Encoder.encode("披抬")].join(",")).toBe("148,226,157,171"); // U+62AB
expect(() => {ms932Encoder.encode("\u62AD")}).toThrowError({name:"TypeError",message:"EncodingError U+62AD"});
expect(() => {ms932Encoder.encode("\u62AE")}).toThrowError({name:"TypeError",message:"EncodingError U+62AE"});
expect(() => {ms932Encoder.encode("\u62AF")}).toThrowError({name:"TypeError",message:"EncodingError U+62AF"});
expect(() => {ms932Encoder.encode("\u62B0")}).toThrowError({name:"TypeError",message:"EncodingError U+62B0"});
expect([...ms932Encoder.encode("抱")].join(",")).toBe("149,248"); // U+62B1
expect(() => {ms932Encoder.encode("\u62B2")}).toThrowError({name:"TypeError",message:"EncodingError U+62B2"});
expect(() => {ms932Encoder.encode("\u62B3")}).toThrowError({name:"TypeError",message:"EncodingError U+62B3"});
expect(() => {ms932Encoder.encode("\u62B4")}).toThrowError({name:"TypeError",message:"EncodingError U+62B4"});
expect([...ms932Encoder.encode("抵")].join(",")).toBe("146,239"); // U+62B5
expect(() => {ms932Encoder.encode("\u62B6")}).toThrowError({name:"TypeError",message:"EncodingError U+62B6"});
expect(() => {ms932Encoder.encode("\u62B7")}).toThrowError({name:"TypeError",message:"EncodingError U+62B7"});
expect(() => {ms932Encoder.encode("\u62B8")}).toThrowError({name:"TypeError",message:"EncodingError U+62B8"});
expect([...ms932Encoder.encode("抹")].join(",")).toBe("150,149"); // U+62B9
expect(() => {ms932Encoder.encode("\u62BA")}).toThrowError({name:"TypeError",message:"EncodingError U+62BA"});
expect([...ms932Encoder.encode("抻押抽")].join(",")).toBe("157,90,137,159,146,138"); // U+62BB
expect(() => {ms932Encoder.encode("\u62BE")}).toThrowError({name:"TypeError",message:"EncodingError U+62BE"});
expect(() => {ms932Encoder.encode("\u62BF")}).toThrowError({name:"TypeError",message:"EncodingError U+62BF"});
expect(() => {ms932Encoder.encode("\u62C0")}).toThrowError({name:"TypeError",message:"EncodingError U+62C0"});
expect(() => {ms932Encoder.encode("\u62C1")}).toThrowError({name:"TypeError",message:"EncodingError U+62C1"});
expect([...ms932Encoder.encode("拂")].join(",")).toBe("157,99"); // U+62C2
expect(() => {ms932Encoder.encode("\u62C3")}).toThrowError({name:"TypeError",message:"EncodingError U+62C3"});
expect(() => {ms932Encoder.encode("\u62C4")}).toThrowError({name:"TypeError",message:"EncodingError U+62C4"});
expect([...ms932Encoder.encode("担拆拇拈拉拊")].join(",")).toBe("146,83,157,93,157,100,157,95,157,102,157,98"); // U+62C5
expect(() => {ms932Encoder.encode("\u62CB")}).toThrowError({name:"TypeError",message:"EncodingError U+62CB"});
expect([...ms932Encoder.encode("拌拍")].join(",")).toBe("157,97,148,143"); // U+62CC
expect(() => {ms932Encoder.encode("\u62CE")}).toThrowError({name:"TypeError",message:"EncodingError U+62CE"});
expect([...ms932Encoder.encode("拏拐拑拒拓拔")].join(",")).toBe("157,91,137,251,157,89,139,145,145,241,157,85"); // U+62CF
expect(() => {ms932Encoder.encode("\u62D5")}).toThrowError({name:"TypeError",message:"EncodingError U+62D5"});
expect(() => {ms932Encoder.encode("\u62D6")}).toThrowError({name:"TypeError",message:"EncodingError U+62D6"});
expect([...ms932Encoder.encode("拗拘拙")].join(",")).toBe("157,88,141,83,144,217"); // U+62D7
expect(() => {ms932Encoder.encode("\u62DA")}).toThrowError({name:"TypeError",message:"EncodingError U+62DA"});
expect([...ms932Encoder.encode("招拜拝")].join(",")).toBe("143,181,157,96,148,113"); // U+62DB
expect(() => {ms932Encoder.encode("\u62DE")}).toThrowError({name:"TypeError",message:"EncodingError U+62DE"});
expect(() => {ms932Encoder.encode("\u62DF")}).toThrowError({name:"TypeError",message:"EncodingError U+62DF"});
expect([...ms932Encoder.encode("拠拡")].join(",")).toBe("139,146,138,103"); // U+62E0
expect(() => {ms932Encoder.encode("\u62E2")}).toThrowError({name:"TypeError",message:"EncodingError U+62E2"});
expect(() => {ms932Encoder.encode("\u62E3")}).toThrowError({name:"TypeError",message:"EncodingError U+62E3"});
expect(() => {ms932Encoder.encode("\u62E4")}).toThrowError({name:"TypeError",message:"EncodingError U+62E4"});
expect(() => {ms932Encoder.encode("\u62E5")}).toThrowError({name:"TypeError",message:"EncodingError U+62E5"});
expect(() => {ms932Encoder.encode("\u62E6")}).toThrowError({name:"TypeError",message:"EncodingError U+62E6"});
expect(() => {ms932Encoder.encode("\u62E7")}).toThrowError({name:"TypeError",message:"EncodingError U+62E7"});
expect(() => {ms932Encoder.encode("\u62E8")}).toThrowError({name:"TypeError",message:"EncodingError U+62E8"});
expect(() => {ms932Encoder.encode("\u62E9")}).toThrowError({name:"TypeError",message:"EncodingError U+62E9"});
expect(() => {ms932Encoder.encode("\u62EA")}).toThrowError({name:"TypeError",message:"EncodingError U+62EA"});
expect(() => {ms932Encoder.encode("\u62EB")}).toThrowError({name:"TypeError",message:"EncodingError U+62EB"});
expect([...ms932Encoder.encode("括拭拮拯")].join(",")).toBe("138,135,144,64,157,104,157,109"); // U+62EC
expect(() => {ms932Encoder.encode("\u62F0")}).toThrowError({name:"TypeError",message:"EncodingError U+62F0"});
expect([...ms932Encoder.encode("拱")].join(",")).toBe("157,105"); // U+62F1
expect(() => {ms932Encoder.encode("\u62F2")}).toThrowError({name:"TypeError",message:"EncodingError U+62F2"});
expect([...ms932Encoder.encode("拳")].join(",")).toBe("140,157"); // U+62F3
expect(() => {ms932Encoder.encode("\u62F4")}).toThrowError({name:"TypeError",message:"EncodingError U+62F4"});
expect([...ms932Encoder.encode("拵拶拷")].join(",")).toBe("157,110,142,65,141,137"); // U+62F5
expect(() => {ms932Encoder.encode("\u62F8")}).toThrowError({name:"TypeError",message:"EncodingError U+62F8"});
expect(() => {ms932Encoder.encode("\u62F9")}).toThrowError({name:"TypeError",message:"EncodingError U+62F9"});
expect(() => {ms932Encoder.encode("\u62FA")}).toThrowError({name:"TypeError",message:"EncodingError U+62FA"});
expect(() => {ms932Encoder.encode("\u62FB")}).toThrowError({name:"TypeError",message:"EncodingError U+62FB"});
expect(() => {ms932Encoder.encode("\u62FC")}).toThrowError({name:"TypeError",message:"EncodingError U+62FC"});
expect(() => {ms932Encoder.encode("\u62FD")}).toThrowError({name:"TypeError",message:"EncodingError U+62FD"});
expect([...ms932Encoder.encode("拾拿")].join(",")).toBe("143,69,157,92"); // U+62FE
expect(() => {ms932Encoder.encode("\u6300")}).toThrowError({name:"TypeError",message:"EncodingError U+6300"});
expect([...ms932Encoder.encode("持挂")].join(",")).toBe("142,157,157,107"); // U+6301
expect(() => {ms932Encoder.encode("\u6303")}).toThrowError({name:"TypeError",message:"EncodingError U+6303"});
expect(() => {ms932Encoder.encode("\u6304")}).toThrowError({name:"TypeError",message:"EncodingError U+6304"});
expect(() => {ms932Encoder.encode("\u6305")}).toThrowError({name:"TypeError",message:"EncodingError U+6305"});
expect(() => {ms932Encoder.encode("\u6306")}).toThrowError({name:"TypeError",message:"EncodingError U+6306"});
expect([...ms932Encoder.encode("指挈按")].join(",")).toBe("142,119,157,108,136,194"); // U+6307
expect(() => {ms932Encoder.encode("\u630A")}).toThrowError({name:"TypeError",message:"EncodingError U+630A"});
expect(() => {ms932Encoder.encode("\u630B")}).toThrowError({name:"TypeError",message:"EncodingError U+630B"});
expect([...ms932Encoder.encode("挌")].join(",")).toBe("157,103"); // U+630C
expect(() => {ms932Encoder.encode("\u630D")}).toThrowError({name:"TypeError",message:"EncodingError U+630D"});
expect(() => {ms932Encoder.encode("\u630E")}).toThrowError({name:"TypeError",message:"EncodingError U+630E"});
expect(() => {ms932Encoder.encode("\u630F")}).toThrowError({name:"TypeError",message:"EncodingError U+630F"});
expect(() => {ms932Encoder.encode("\u6310")}).toThrowError({name:"TypeError",message:"EncodingError U+6310"});
expect([...ms932Encoder.encode("挑")].join(",")).toBe("146,167"); // U+6311
expect(() => {ms932Encoder.encode("\u6312")}).toThrowError({name:"TypeError",message:"EncodingError U+6312"});
expect(() => {ms932Encoder.encode("\u6313")}).toThrowError({name:"TypeError",message:"EncodingError U+6313"});
expect(() => {ms932Encoder.encode("\u6314")}).toThrowError({name:"TypeError",message:"EncodingError U+6314"});
expect(() => {ms932Encoder.encode("\u6315")}).toThrowError({name:"TypeError",message:"EncodingError U+6315"});
expect(() => {ms932Encoder.encode("\u6316")}).toThrowError({name:"TypeError",message:"EncodingError U+6316"});
expect(() => {ms932Encoder.encode("\u6317")}).toThrowError({name:"TypeError",message:"EncodingError U+6317"});
expect(() => {ms932Encoder.encode("\u6318")}).toThrowError({name:"TypeError",message:"EncodingError U+6318"});
expect([...ms932Encoder.encode("挙")].join(",")).toBe("139,147"); // U+6319
expect(() => {ms932Encoder.encode("\u631A")}).toThrowError({name:"TypeError",message:"EncodingError U+631A"});
expect(() => {ms932Encoder.encode("\u631B")}).toThrowError({name:"TypeError",message:"EncodingError U+631B"});
expect(() => {ms932Encoder.encode("\u631C")}).toThrowError({name:"TypeError",message:"EncodingError U+631C"});
expect(() => {ms932Encoder.encode("\u631D")}).toThrowError({name:"TypeError",message:"EncodingError U+631D"});
expect(() => {ms932Encoder.encode("\u631E")}).toThrowError({name:"TypeError",message:"EncodingError U+631E"});
expect([...ms932Encoder.encode("挟")].join(",")).toBe("139,178"); // U+631F
expect(() => {ms932Encoder.encode("\u6320")}).toThrowError({name:"TypeError",message:"EncodingError U+6320"});
expect(() => {ms932Encoder.encode("\u6321")}).toThrowError({name:"TypeError",message:"EncodingError U+6321"});
expect(() => {ms932Encoder.encode("\u6322")}).toThrowError({name:"TypeError",message:"EncodingError U+6322"});
expect(() => {ms932Encoder.encode("\u6323")}).toThrowError({name:"TypeError",message:"EncodingError U+6323"});
expect(() => {ms932Encoder.encode("\u6324")}).toThrowError({name:"TypeError",message:"EncodingError U+6324"});
expect(() => {ms932Encoder.encode("\u6325")}).toThrowError({name:"TypeError",message:"EncodingError U+6325"});
expect(() => {ms932Encoder.encode("\u6326")}).toThrowError({name:"TypeError",message:"EncodingError U+6326"});
expect([...ms932Encoder.encode("挧挨")].join(",")).toBe("157,106,136,165"); // U+6327
expect(() => {ms932Encoder.encode("\u6329")}).toThrowError({name:"TypeError",message:"EncodingError U+6329"});
expect(() => {ms932Encoder.encode("\u632A")}).toThrowError({name:"TypeError",message:"EncodingError U+632A"});
expect([...ms932Encoder.encode("挫")].join(",")).toBe("141,193"); // U+632B
expect(() => {ms932Encoder.encode("\u632C")}).toThrowError({name:"TypeError",message:"EncodingError U+632C"});
expect(() => {ms932Encoder.encode("\u632D")}).toThrowError({name:"TypeError",message:"EncodingError U+632D"});
expect(() => {ms932Encoder.encode("\u632E")}).toThrowError({name:"TypeError",message:"EncodingError U+632E"});
expect([...ms932Encoder.encode("振")].join(",")).toBe("144,85"); // U+632F
expect(() => {ms932Encoder.encode("\u6330")}).toThrowError({name:"TypeError",message:"EncodingError U+6330"});
expect(() => {ms932Encoder.encode("\u6331")}).toThrowError({name:"TypeError",message:"EncodingError U+6331"});
expect(() => {ms932Encoder.encode("\u6332")}).toThrowError({name:"TypeError",message:"EncodingError U+6332"});
expect(() => {ms932Encoder.encode("\u6333")}).toThrowError({name:"TypeError",message:"EncodingError U+6333"});
expect(() => {ms932Encoder.encode("\u6334")}).toThrowError({name:"TypeError",message:"EncodingError U+6334"});
expect(() => {ms932Encoder.encode("\u6335")}).toThrowError({name:"TypeError",message:"EncodingError U+6335"});
expect(() => {ms932Encoder.encode("\u6336")}).toThrowError({name:"TypeError",message:"EncodingError U+6336"});
expect(() => {ms932Encoder.encode("\u6337")}).toThrowError({name:"TypeError",message:"EncodingError U+6337"});
expect(() => {ms932Encoder.encode("\u6338")}).toThrowError({name:"TypeError",message:"EncodingError U+6338"});
expect(() => {ms932Encoder.encode("\u6339")}).toThrowError({name:"TypeError",message:"EncodingError U+6339"});
expect([...ms932Encoder.encode("挺")].join(",")).toBe("146,240"); // U+633A
expect(() => {ms932Encoder.encode("\u633B")}).toThrowError({name:"TypeError",message:"EncodingError U+633B"});
expect(() => {ms932Encoder.encode("\u633C")}).toThrowError({name:"TypeError",message:"EncodingError U+633C"});
expect([...ms932Encoder.encode("挽挾挿")].join(",")).toBe("148,210,157,112,145,125"); // U+633D
expect(() => {ms932Encoder.encode("\u6340")}).toThrowError({name:"TypeError",message:"EncodingError U+6340"});
expect(() => {ms932Encoder.encode("\u6341")}).toThrowError({name:"TypeError",message:"EncodingError U+6341"});
expect(() => {ms932Encoder.encode("\u6342")}).toThrowError({name:"TypeError",message:"EncodingError U+6342"});
expect(() => {ms932Encoder.encode("\u6343")}).toThrowError({name:"TypeError",message:"EncodingError U+6343"});
expect(() => {ms932Encoder.encode("\u6344")}).toThrowError({name:"TypeError",message:"EncodingError U+6344"});
expect(() => {ms932Encoder.encode("\u6345")}).toThrowError({name:"TypeError",message:"EncodingError U+6345"});
expect(() => {ms932Encoder.encode("\u6346")}).toThrowError({name:"TypeError",message:"EncodingError U+6346"});
expect(() => {ms932Encoder.encode("\u6347")}).toThrowError({name:"TypeError",message:"EncodingError U+6347"});
expect(() => {ms932Encoder.encode("\u6348")}).toThrowError({name:"TypeError",message:"EncodingError U+6348"});
expect([...ms932Encoder.encode("捉")].join(",")).toBe("145,168"); // U+6349
expect(() => {ms932Encoder.encode("\u634A")}).toThrowError({name:"TypeError",message:"EncodingError U+634A"});
expect(() => {ms932Encoder.encode("\u634B")}).toThrowError({name:"TypeError",message:"EncodingError U+634B"});
expect([...ms932Encoder.encode("捌捍")].join(",")).toBe("142,74,157,113"); // U+634C
expect(() => {ms932Encoder.encode("\u634E")}).toThrowError({name:"TypeError",message:"EncodingError U+634E"});
expect([...ms932Encoder.encode("捏捐")].join(",")).toBe("157,115,157,111"); // U+634F
expect(() => {ms932Encoder.encode("\u6351")}).toThrowError({name:"TypeError",message:"EncodingError U+6351"});
expect(() => {ms932Encoder.encode("\u6352")}).toThrowError({name:"TypeError",message:"EncodingError U+6352"});
expect(() => {ms932Encoder.encode("\u6353")}).toThrowError({name:"TypeError",message:"EncodingError U+6353"});
expect(() => {ms932Encoder.encode("\u6354")}).toThrowError({name:"TypeError",message:"EncodingError U+6354"});
expect([...ms932Encoder.encode("捕")].join(",")).toBe("149,223"); // U+6355
expect(() => {ms932Encoder.encode("\u6356")}).toThrowError({name:"TypeError",message:"EncodingError U+6356"});
expect([...ms932Encoder.encode("捗")].join(",")).toBe("146,187"); // U+6357
expect(() => {ms932Encoder.encode("\u6358")}).toThrowError({name:"TypeError",message:"EncodingError U+6358"});
expect(() => {ms932Encoder.encode("\u6359")}).toThrowError({name:"TypeError",message:"EncodingError U+6359"});
expect(() => {ms932Encoder.encode("\u635A")}).toThrowError({name:"TypeError",message:"EncodingError U+635A"});
expect(() => {ms932Encoder.encode("\u635B")}).toThrowError({name:"TypeError",message:"EncodingError U+635B"});
expect([...ms932Encoder.encode("捜")].join(",")).toBe("145,123"); // U+635C
expect(() => {ms932Encoder.encode("\u635D")}).toThrowError({name:"TypeError",message:"EncodingError U+635D"});
expect(() => {ms932Encoder.encode("\u635E")}).toThrowError({name:"TypeError",message:"EncodingError U+635E"});
expect(() => {ms932Encoder.encode("\u635F")}).toThrowError({name:"TypeError",message:"EncodingError U+635F"});
expect(() => {ms932Encoder.encode("\u6360")}).toThrowError({name:"TypeError",message:"EncodingError U+6360"});
expect(() => {ms932Encoder.encode("\u6361")}).toThrowError({name:"TypeError",message:"EncodingError U+6361"});
expect(() => {ms932Encoder.encode("\u6362")}).toThrowError({name:"TypeError",message:"EncodingError U+6362"});
expect(() => {ms932Encoder.encode("\u6363")}).toThrowError({name:"TypeError",message:"EncodingError U+6363"});
expect(() => {ms932Encoder.encode("\u6364")}).toThrowError({name:"TypeError",message:"EncodingError U+6364"});
expect(() => {ms932Encoder.encode("\u6365")}).toThrowError({name:"TypeError",message:"EncodingError U+6365"});
expect(() => {ms932Encoder.encode("\u6366")}).toThrowError({name:"TypeError",message:"EncodingError U+6366"});
expect([...ms932Encoder.encode("捧捨捩")].join(",")).toBe("149,249,142,204,157,128"); // U+6367
expect(() => {ms932Encoder.encode("\u636A")}).toThrowError({name:"TypeError",message:"EncodingError U+636A"});
expect([...ms932Encoder.encode("捫")].join(",")).toBe("157,126"); // U+636B
expect(() => {ms932Encoder.encode("\u636C")}).toThrowError({name:"TypeError",message:"EncodingError U+636C"});
expect(() => {ms932Encoder.encode("\u636D")}).toThrowError({name:"TypeError",message:"EncodingError U+636D"});
expect([...ms932Encoder.encode("据")].join(",")).toBe("144,152"); // U+636E
expect(() => {ms932Encoder.encode("\u636F")}).toThrowError({name:"TypeError",message:"EncodingError U+636F"});
expect(() => {ms932Encoder.encode("\u6370")}).toThrowError({name:"TypeError",message:"EncodingError U+6370"});
expect(() => {ms932Encoder.encode("\u6371")}).toThrowError({name:"TypeError",message:"EncodingError U+6371"});
expect([...ms932Encoder.encode("捲")].join(",")).toBe("140,158"); // U+6372
expect(() => {ms932Encoder.encode("\u6373")}).toThrowError({name:"TypeError",message:"EncodingError U+6373"});
expect(() => {ms932Encoder.encode("\u6374")}).toThrowError({name:"TypeError",message:"EncodingError U+6374"});
expect(() => {ms932Encoder.encode("\u6375")}).toThrowError({name:"TypeError",message:"EncodingError U+6375"});
expect([...ms932Encoder.encode("捶捷")].join(",")).toBe("157,120,143,183"); // U+6376
expect(() => {ms932Encoder.encode("\u6378")}).toThrowError({name:"TypeError",message:"EncodingError U+6378"});
expect(() => {ms932Encoder.encode("\u6379")}).toThrowError({name:"TypeError",message:"EncodingError U+6379"});
expect([...ms932Encoder.encode("捺捻")].join(",")).toBe("147,230,148,80"); // U+637A
expect(() => {ms932Encoder.encode("\u637C")}).toThrowError({name:"TypeError",message:"EncodingError U+637C"});
expect(() => {ms932Encoder.encode("\u637D")}).toThrowError({name:"TypeError",message:"EncodingError U+637D"});
expect(() => {ms932Encoder.encode("\u637E")}).toThrowError({name:"TypeError",message:"EncodingError U+637E"});
expect(() => {ms932Encoder.encode("\u637F")}).toThrowError({name:"TypeError",message:"EncodingError U+637F"});
expect([...ms932Encoder.encode("掀")].join(",")).toBe("157,118"); // U+6380
expect(() => {ms932Encoder.encode("\u6381")}).toThrowError({name:"TypeError",message:"EncodingError U+6381"});
expect(() => {ms932Encoder.encode("\u6382")}).toThrowError({name:"TypeError",message:"EncodingError U+6382"});
expect([...ms932Encoder.encode("掃")].join(",")).toBe("145,124"); // U+6383
expect(() => {ms932Encoder.encode("\u6384")}).toThrowError({name:"TypeError",message:"EncodingError U+6384"});
expect(() => {ms932Encoder.encode("\u6385")}).toThrowError({name:"TypeError",message:"EncodingError U+6385"});
expect(() => {ms932Encoder.encode("\u6386")}).toThrowError({name:"TypeError",message:"EncodingError U+6386"});
expect(() => {ms932Encoder.encode("\u6387")}).toThrowError({name:"TypeError",message:"EncodingError U+6387"});
expect([...ms932Encoder.encode("授掉")].join(",")).toBe("142,246,157,123"); // U+6388
expect(() => {ms932Encoder.encode("\u638A")}).toThrowError({name:"TypeError",message:"EncodingError U+638A"});
expect(() => {ms932Encoder.encode("\u638B")}).toThrowError({name:"TypeError",message:"EncodingError U+638B"});
expect([...ms932Encoder.encode("掌")].join(",")).toBe("143,182"); // U+638C
expect(() => {ms932Encoder.encode("\u638D")}).toThrowError({name:"TypeError",message:"EncodingError U+638D"});
expect([...ms932Encoder.encode("掎掏")].join(",")).toBe("157,117,157,122"); // U+638E
expect(() => {ms932Encoder.encode("\u6390")}).toThrowError({name:"TypeError",message:"EncodingError U+6390"});
expect(() => {ms932Encoder.encode("\u6391")}).toThrowError({name:"TypeError",message:"EncodingError U+6391"});
expect([...ms932Encoder.encode("排")].join(",")).toBe("148,114"); // U+6392
expect(() => {ms932Encoder.encode("\u6393")}).toThrowError({name:"TypeError",message:"EncodingError U+6393"});
expect(() => {ms932Encoder.encode("\u6394")}).toThrowError({name:"TypeError",message:"EncodingError U+6394"});
expect(() => {ms932Encoder.encode("\u6395")}).toThrowError({name:"TypeError",message:"EncodingError U+6395"});
expect([...ms932Encoder.encode("掖")].join(",")).toBe("157,116"); // U+6396
expect(() => {ms932Encoder.encode("\u6397")}).toThrowError({name:"TypeError",message:"EncodingError U+6397"});
expect([...ms932Encoder.encode("掘")].join(",")).toBe("140,64"); // U+6398
expect(() => {ms932Encoder.encode("\u6399")}).toThrowError({name:"TypeError",message:"EncodingError U+6399"});
expect(() => {ms932Encoder.encode("\u639A")}).toThrowError({name:"TypeError",message:"EncodingError U+639A"});
expect([...ms932Encoder.encode("掛")].join(",")).toBe("138,124"); // U+639B
expect(() => {ms932Encoder.encode("\u639C")}).toThrowError({name:"TypeError",message:"EncodingError U+639C"});
expect(() => {ms932Encoder.encode("\u639D")}).toThrowError({name:"TypeError",message:"EncodingError U+639D"});
expect(() => {ms932Encoder.encode("\u639E")}).toThrowError({name:"TypeError",message:"EncodingError U+639E"});
expect([...ms932Encoder.encode("掟掠採探掣")].join(",")).toBe("157,124,151,169,141,204,146,84,157,121"); // U+639F
expect(() => {ms932Encoder.encode("\u63A4")}).toThrowError({name:"TypeError",message:"EncodingError U+63A4"});
expect([...ms932Encoder.encode("接")].join(",")).toBe("144,218"); // U+63A5
expect(() => {ms932Encoder.encode("\u63A6")}).toThrowError({name:"TypeError",message:"EncodingError U+63A6"});
expect([...ms932Encoder.encode("控推掩措掫掬")].join(",")).toBe("141,84,144,132,137,134,145,91,157,119,139,100"); // U+63A7
expect(() => {ms932Encoder.encode("\u63AD")}).toThrowError({name:"TypeError",message:"EncodingError U+63AD"});
expect(() => {ms932Encoder.encode("\u63AE")}).toThrowError({name:"TypeError",message:"EncodingError U+63AE"});
expect(() => {ms932Encoder.encode("\u63AF")}).toThrowError({name:"TypeError",message:"EncodingError U+63AF"});
expect(() => {ms932Encoder.encode("\u63B0")}).toThrowError({name:"TypeError",message:"EncodingError U+63B0"});
expect(() => {ms932Encoder.encode("\u63B1")}).toThrowError({name:"TypeError",message:"EncodingError U+63B1"});
expect([...ms932Encoder.encode("掲")].join(",")).toBe("140,102"); // U+63B2
expect(() => {ms932Encoder.encode("\u63B3")}).toThrowError({name:"TypeError",message:"EncodingError U+63B3"});
expect([...ms932Encoder.encode("掴掵")].join(",")).toBe("146,205,157,125"); // U+63B4
expect(() => {ms932Encoder.encode("\u63B6")}).toThrowError({name:"TypeError",message:"EncodingError U+63B6"});
expect(() => {ms932Encoder.encode("\u63B7")}).toThrowError({name:"TypeError",message:"EncodingError U+63B7"});
expect(() => {ms932Encoder.encode("\u63B8")}).toThrowError({name:"TypeError",message:"EncodingError U+63B8"});
expect(() => {ms932Encoder.encode("\u63B9")}).toThrowError({name:"TypeError",message:"EncodingError U+63B9"});
expect(() => {ms932Encoder.encode("\u63BA")}).toThrowError({name:"TypeError",message:"EncodingError U+63BA"});
expect([...ms932Encoder.encode("掻")].join(",")).toBe("145,126"); // U+63BB
expect(() => {ms932Encoder.encode("\u63BC")}).toThrowError({name:"TypeError",message:"EncodingError U+63BC"});
expect(() => {ms932Encoder.encode("\u63BD")}).toThrowError({name:"TypeError",message:"EncodingError U+63BD"});
expect([...ms932Encoder.encode("掾")].join(",")).toBe("157,129"); // U+63BE
expect(() => {ms932Encoder.encode("\u63BF")}).toThrowError({name:"TypeError",message:"EncodingError U+63BF"});
expect([...ms932Encoder.encode("揀")].join(",")).toBe("157,131"); // U+63C0
expect(() => {ms932Encoder.encode("\u63C1")}).toThrowError({name:"TypeError",message:"EncodingError U+63C1"});
expect(() => {ms932Encoder.encode("\u63C2")}).toThrowError({name:"TypeError",message:"EncodingError U+63C2"});
expect([...ms932Encoder.encode("揃揄")].join(",")).toBe("145,181,157,137"); // U+63C3
expect(() => {ms932Encoder.encode("\u63C5")}).toThrowError({name:"TypeError",message:"EncodingError U+63C5"});
expect([...ms932Encoder.encode("揆")].join(",")).toBe("157,132"); // U+63C6
expect(() => {ms932Encoder.encode("\u63C7")}).toThrowError({name:"TypeError",message:"EncodingError U+63C7"});
expect(() => {ms932Encoder.encode("\u63C8")}).toThrowError({name:"TypeError",message:"EncodingError U+63C8"});
expect([...ms932Encoder.encode("揉")].join(",")).toBe("157,134"); // U+63C9
expect(() => {ms932Encoder.encode("\u63CA")}).toThrowError({name:"TypeError",message:"EncodingError U+63CA"});
expect(() => {ms932Encoder.encode("\u63CB")}).toThrowError({name:"TypeError",message:"EncodingError U+63CB"});
expect(() => {ms932Encoder.encode("\u63CC")}).toThrowError({name:"TypeError",message:"EncodingError U+63CC"});
expect(() => {ms932Encoder.encode("\u63CD")}).toThrowError({name:"TypeError",message:"EncodingError U+63CD"});
expect(() => {ms932Encoder.encode("\u63CE")}).toThrowError({name:"TypeError",message:"EncodingError U+63CE"});
expect([...ms932Encoder.encode("描提")].join(",")).toBe("149,96,146,241"); // U+63CF
expect(() => {ms932Encoder.encode("\u63D1")}).toThrowError({name:"TypeError",message:"EncodingError U+63D1"});
expect([...ms932Encoder.encode("插")].join(",")).toBe("157,135"); // U+63D2
expect(() => {ms932Encoder.encode("\u63D3")}).toThrowError({name:"TypeError",message:"EncodingError U+63D3"});
expect(() => {ms932Encoder.encode("\u63D4")}).toThrowError({name:"TypeError",message:"EncodingError U+63D4"});
expect(() => {ms932Encoder.encode("\u63D5")}).toThrowError({name:"TypeError",message:"EncodingError U+63D5"});
expect([...ms932Encoder.encode("揖")].join(",")).toBe("151,75"); // U+63D6
expect(() => {ms932Encoder.encode("\u63D7")}).toThrowError({name:"TypeError",message:"EncodingError U+63D7"});
expect(() => {ms932Encoder.encode("\u63D8")}).toThrowError({name:"TypeError",message:"EncodingError U+63D8"});
expect(() => {ms932Encoder.encode("\u63D9")}).toThrowError({name:"TypeError",message:"EncodingError U+63D9"});
expect([...ms932Encoder.encode("揚換")].join(",")).toBe("151,103,138,183"); // U+63DA
expect(() => {ms932Encoder.encode("\u63DC")}).toThrowError({name:"TypeError",message:"EncodingError U+63DC"});
expect(() => {ms932Encoder.encode("\u63DD")}).toThrowError({name:"TypeError",message:"EncodingError U+63DD"});
expect(() => {ms932Encoder.encode("\u63DE")}).toThrowError({name:"TypeError",message:"EncodingError U+63DE"});
expect(() => {ms932Encoder.encode("\u63DF")}).toThrowError({name:"TypeError",message:"EncodingError U+63DF"});
expect(() => {ms932Encoder.encode("\u63E0")}).toThrowError({name:"TypeError",message:"EncodingError U+63E0"});
expect([...ms932Encoder.encode("握")].join(",")).toBe("136,172"); // U+63E1
expect(() => {ms932Encoder.encode("\u63E2")}).toThrowError({name:"TypeError",message:"EncodingError U+63E2"});
expect([...ms932Encoder.encode("揣")].join(",")).toBe("157,133"); // U+63E3
expect(() => {ms932Encoder.encode("\u63E4")}).toThrowError({name:"TypeError",message:"EncodingError U+63E4"});
expect(() => {ms932Encoder.encode("\u63E5")}).toThrowError({name:"TypeError",message:"EncodingError U+63E5"});
expect(() => {ms932Encoder.encode("\u63E6")}).toThrowError({name:"TypeError",message:"EncodingError U+63E6"});
expect(() => {ms932Encoder.encode("\u63E7")}).toThrowError({name:"TypeError",message:"EncodingError U+63E7"});
expect(() => {ms932Encoder.encode("\u63E8")}).toThrowError({name:"TypeError",message:"EncodingError U+63E8"});
expect([...ms932Encoder.encode("揩")].join(",")).toBe("157,130"); // U+63E9
expect(() => {ms932Encoder.encode("\u63EA")}).toThrowError({name:"TypeError",message:"EncodingError U+63EA"});
expect(() => {ms932Encoder.encode("\u63EB")}).toThrowError({name:"TypeError",message:"EncodingError U+63EB"});
expect(() => {ms932Encoder.encode("\u63EC")}).toThrowError({name:"TypeError",message:"EncodingError U+63EC"});
expect(() => {ms932Encoder.encode("\u63ED")}).toThrowError({name:"TypeError",message:"EncodingError U+63ED"});
expect([...ms932Encoder.encode("揮")].join(",")).toBe("138,246"); // U+63EE
expect(() => {ms932Encoder.encode("\u63EF")}).toThrowError({name:"TypeError",message:"EncodingError U+63EF"});
expect(() => {ms932Encoder.encode("\u63F0")}).toThrowError({name:"TypeError",message:"EncodingError U+63F0"});
expect(() => {ms932Encoder.encode("\u63F1")}).toThrowError({name:"TypeError",message:"EncodingError U+63F1"});
expect(() => {ms932Encoder.encode("\u63F2")}).toThrowError({name:"TypeError",message:"EncodingError U+63F2"});
expect(() => {ms932Encoder.encode("\u63F3")}).toThrowError({name:"TypeError",message:"EncodingError U+63F3"});
expect([...ms932Encoder.encode("援揵揶")].join(",")).toBe("137,135,250,201,157,136"); // U+63F4
expect(() => {ms932Encoder.encode("\u63F7")}).toThrowError({name:"TypeError",message:"EncodingError U+63F7"});
expect(() => {ms932Encoder.encode("\u63F8")}).toThrowError({name:"TypeError",message:"EncodingError U+63F8"});
expect(() => {ms932Encoder.encode("\u63F9")}).toThrowError({name:"TypeError",message:"EncodingError U+63F9"});
expect([...ms932Encoder.encode("揺")].join(",")).toBe("151,104"); // U+63FA
expect(() => {ms932Encoder.encode("\u63FB")}).toThrowError({name:"TypeError",message:"EncodingError U+63FB"});
expect(() => {ms932Encoder.encode("\u63FC")}).toThrowError({name:"TypeError",message:"EncodingError U+63FC"});
expect(() => {ms932Encoder.encode("\u63FD")}).toThrowError({name:"TypeError",message:"EncodingError U+63FD"});
expect(() => {ms932Encoder.encode("\u63FE")}).toThrowError({name:"TypeError",message:"EncodingError U+63FE"});
expect(() => {ms932Encoder.encode("\u63FF")}).toThrowError({name:"TypeError",message:"EncodingError U+63FF"});
expect(() => {ms932Encoder.encode("\u6400")}).toThrowError({name:"TypeError",message:"EncodingError U+6400"});
expect(() => {ms932Encoder.encode("\u6401")}).toThrowError({name:"TypeError",message:"EncodingError U+6401"});
expect(() => {ms932Encoder.encode("\u6402")}).toThrowError({name:"TypeError",message:"EncodingError U+6402"});
expect(() => {ms932Encoder.encode("\u6403")}).toThrowError({name:"TypeError",message:"EncodingError U+6403"});
expect(() => {ms932Encoder.encode("\u6404")}).toThrowError({name:"TypeError",message:"EncodingError U+6404"});
expect(() => {ms932Encoder.encode("\u6405")}).toThrowError({name:"TypeError",message:"EncodingError U+6405"});
expect([...ms932Encoder.encode("搆")].join(",")).toBe("157,140"); // U+6406
expect(() => {ms932Encoder.encode("\u6407")}).toThrowError({name:"TypeError",message:"EncodingError U+6407"});
expect(() => {ms932Encoder.encode("\u6408")}).toThrowError({name:"TypeError",message:"EncodingError U+6408"});
expect(() => {ms932Encoder.encode("\u6409")}).toThrowError({name:"TypeError",message:"EncodingError U+6409"});
expect(() => {ms932Encoder.encode("\u640A")}).toThrowError({name:"TypeError",message:"EncodingError U+640A"});
expect(() => {ms932Encoder.encode("\u640B")}).toThrowError({name:"TypeError",message:"EncodingError U+640B"});
expect(() => {ms932Encoder.encode("\u640C")}).toThrowError({name:"TypeError",message:"EncodingError U+640C"});
expect([...ms932Encoder.encode("損")].join(",")).toBe("145,185"); // U+640D
expect(() => {ms932Encoder.encode("\u640E")}).toThrowError({name:"TypeError",message:"EncodingError U+640E"});
expect([...ms932Encoder.encode("搏")].join(",")).toBe("157,147"); // U+640F
expect(() => {ms932Encoder.encode("\u6410")}).toThrowError({name:"TypeError",message:"EncodingError U+6410"});
expect(() => {ms932Encoder.encode("\u6411")}).toThrowError({name:"TypeError",message:"EncodingError U+6411"});
expect(() => {ms932Encoder.encode("\u6412")}).toThrowError({name:"TypeError",message:"EncodingError U+6412"});
expect([...ms932Encoder.encode("搓")].join(",")).toBe("157,141"); // U+6413
expect(() => {ms932Encoder.encode("\u6414")}).toThrowError({name:"TypeError",message:"EncodingError U+6414"});
expect(() => {ms932Encoder.encode("\u6415")}).toThrowError({name:"TypeError",message:"EncodingError U+6415"});
expect([...ms932Encoder.encode("搖搗")].join(",")).toBe("157,138,157,145"); // U+6416
expect(() => {ms932Encoder.encode("\u6418")}).toThrowError({name:"TypeError",message:"EncodingError U+6418"});
expect(() => {ms932Encoder.encode("\u6419")}).toThrowError({name:"TypeError",message:"EncodingError U+6419"});
expect(() => {ms932Encoder.encode("\u641A")}).toThrowError({name:"TypeError",message:"EncodingError U+641A"});
expect(() => {ms932Encoder.encode("\u641B")}).toThrowError({name:"TypeError",message:"EncodingError U+641B"});
expect([...ms932Encoder.encode("搜")].join(",")).toBe("157,114"); // U+641C
expect(() => {ms932Encoder.encode("\u641D")}).toThrowError({name:"TypeError",message:"EncodingError U+641D"});
expect(() => {ms932Encoder.encode("\u641E")}).toThrowError({name:"TypeError",message:"EncodingError U+641E"});
expect(() => {ms932Encoder.encode("\u641F")}).toThrowError({name:"TypeError",message:"EncodingError U+641F"});
expect(() => {ms932Encoder.encode("\u6420")}).toThrowError({name:"TypeError",message:"EncodingError U+6420"});
expect(() => {ms932Encoder.encode("\u6421")}).toThrowError({name:"TypeError",message:"EncodingError U+6421"});
expect(() => {ms932Encoder.encode("\u6422")}).toThrowError({name:"TypeError",message:"EncodingError U+6422"});
expect(() => {ms932Encoder.encode("\u6423")}).toThrowError({name:"TypeError",message:"EncodingError U+6423"});
expect(() => {ms932Encoder.encode("\u6424")}).toThrowError({name:"TypeError",message:"EncodingError U+6424"});
expect(() => {ms932Encoder.encode("\u6425")}).toThrowError({name:"TypeError",message:"EncodingError U+6425"});
expect([...ms932Encoder.encode("搦")].join(",")).toBe("157,142"); // U+6426
expect(() => {ms932Encoder.encode("\u6427")}).toThrowError({name:"TypeError",message:"EncodingError U+6427"});
expect([...ms932Encoder.encode("搨")].join(",")).toBe("157,146"); // U+6428
expect(() => {ms932Encoder.encode("\u6429")}).toThrowError({name:"TypeError",message:"EncodingError U+6429"});
expect(() => {ms932Encoder.encode("\u642A")}).toThrowError({name:"TypeError",message:"EncodingError U+642A"});
expect(() => {ms932Encoder.encode("\u642B")}).toThrowError({name:"TypeError",message:"EncodingError U+642B"});
expect([...ms932Encoder.encode("搬搭")].join(",")).toBe("148,192,147,139"); // U+642C
expect(() => {ms932Encoder.encode("\u642E")}).toThrowError({name:"TypeError",message:"EncodingError U+642E"});
expect(() => {ms932Encoder.encode("\u642F")}).toThrowError({name:"TypeError",message:"EncodingError U+642F"});
expect(() => {ms932Encoder.encode("\u6430")}).toThrowError({name:"TypeError",message:"EncodingError U+6430"});
expect(() => {ms932Encoder.encode("\u6431")}).toThrowError({name:"TypeError",message:"EncodingError U+6431"});
expect(() => {ms932Encoder.encode("\u6432")}).toThrowError({name:"TypeError",message:"EncodingError U+6432"});
expect(() => {ms932Encoder.encode("\u6433")}).toThrowError({name:"TypeError",message:"EncodingError U+6433"});
expect([...ms932Encoder.encode("搴")].join(",")).toBe("157,139"); // U+6434
expect(() => {ms932Encoder.encode("\u6435")}).toThrowError({name:"TypeError",message:"EncodingError U+6435"});
expect([...ms932Encoder.encode("搶")].join(",")).toBe("157,143"); // U+6436
expect(() => {ms932Encoder.encode("\u6437")}).toThrowError({name:"TypeError",message:"EncodingError U+6437"});
expect(() => {ms932Encoder.encode("\u6438")}).toThrowError({name:"TypeError",message:"EncodingError U+6438"});
expect(() => {ms932Encoder.encode("\u6439")}).toThrowError({name:"TypeError",message:"EncodingError U+6439"});
expect([...ms932Encoder.encode("携")].join(",")).toBe("140,103"); // U+643A
expect(() => {ms932Encoder.encode("\u643B")}).toThrowError({name:"TypeError",message:"EncodingError U+643B"});
expect(() => {ms932Encoder.encode("\u643C")}).toThrowError({name:"TypeError",message:"EncodingError U+643C"});
expect(() => {ms932Encoder.encode("\u643D")}).toThrowError({name:"TypeError",message:"EncodingError U+643D"});
expect([...ms932Encoder.encode("搾")].join(",")).toBe("141,239"); // U+643E
expect(() => {ms932Encoder.encode("\u643F")}).toThrowError({name:"TypeError",message:"EncodingError U+643F"});
expect(() => {ms932Encoder.encode("\u6440")}).toThrowError({name:"TypeError",message:"EncodingError U+6440"});
expect(() => {ms932Encoder.encode("\u6441")}).toThrowError({name:"TypeError",message:"EncodingError U+6441"});
expect([...ms932Encoder.encode("摂")].join(",")).toBe("144,219"); // U+6442
expect(() => {ms932Encoder.encode("\u6443")}).toThrowError({name:"TypeError",message:"EncodingError U+6443"});
expect(() => {ms932Encoder.encode("\u6444")}).toThrowError({name:"TypeError",message:"EncodingError U+6444"});
expect(() => {ms932Encoder.encode("\u6445")}).toThrowError({name:"TypeError",message:"EncodingError U+6445"});
expect(() => {ms932Encoder.encode("\u6446")}).toThrowError({name:"TypeError",message:"EncodingError U+6446"});
expect(() => {ms932Encoder.encode("\u6447")}).toThrowError({name:"TypeError",message:"EncodingError U+6447"});
expect(() => {ms932Encoder.encode("\u6448")}).toThrowError({name:"TypeError",message:"EncodingError U+6448"});
expect(() => {ms932Encoder.encode("\u6449")}).toThrowError({name:"TypeError",message:"EncodingError U+6449"});
expect(() => {ms932Encoder.encode("\u644A")}).toThrowError({name:"TypeError",message:"EncodingError U+644A"});
expect(() => {ms932Encoder.encode("\u644B")}).toThrowError({name:"TypeError",message:"EncodingError U+644B"});
expect(() => {ms932Encoder.encode("\u644C")}).toThrowError({name:"TypeError",message:"EncodingError U+644C"});
expect(() => {ms932Encoder.encode("\u644D")}).toThrowError({name:"TypeError",message:"EncodingError U+644D"});
expect([...ms932Encoder.encode("摎")].join(",")).toBe("157,151"); // U+644E
expect(() => {ms932Encoder.encode("\u644F")}).toThrowError({name:"TypeError",message:"EncodingError U+644F"});
expect(() => {ms932Encoder.encode("\u6450")}).toThrowError({name:"TypeError",message:"EncodingError U+6450"});
expect(() => {ms932Encoder.encode("\u6451")}).toThrowError({name:"TypeError",message:"EncodingError U+6451"});
expect(() => {ms932Encoder.encode("\u6452")}).toThrowError({name:"TypeError",message:"EncodingError U+6452"});
expect(() => {ms932Encoder.encode("\u6453")}).toThrowError({name:"TypeError",message:"EncodingError U+6453"});
expect(() => {ms932Encoder.encode("\u6454")}).toThrowError({name:"TypeError",message:"EncodingError U+6454"});
expect(() => {ms932Encoder.encode("\u6455")}).toThrowError({name:"TypeError",message:"EncodingError U+6455"});
expect(() => {ms932Encoder.encode("\u6456")}).toThrowError({name:"TypeError",message:"EncodingError U+6456"});
expect(() => {ms932Encoder.encode("\u6457")}).toThrowError({name:"TypeError",message:"EncodingError U+6457"});
expect([...ms932Encoder.encode("摘")].join(",")).toBe("147,69"); // U+6458
expect(() => {ms932Encoder.encode("\u6459")}).toThrowError({name:"TypeError",message:"EncodingError U+6459"});
expect(() => {ms932Encoder.encode("\u645A")}).toThrowError({name:"TypeError",message:"EncodingError U+645A"});
expect(() => {ms932Encoder.encode("\u645B")}).toThrowError({name:"TypeError",message:"EncodingError U+645B"});
expect(() => {ms932Encoder.encode("\u645C")}).toThrowError({name:"TypeError",message:"EncodingError U+645C"});
expect(() => {ms932Encoder.encode("\u645D")}).toThrowError({name:"TypeError",message:"EncodingError U+645D"});
expect(() => {ms932Encoder.encode("\u645E")}).toThrowError({name:"TypeError",message:"EncodingError U+645E"});
expect(() => {ms932Encoder.encode("\u645F")}).toThrowError({name:"TypeError",message:"EncodingError U+645F"});
expect([...ms932Encoder.encode("摠")].join(",")).toBe("250,202"); // U+6460
expect(() => {ms932Encoder.encode("\u6461")}).toThrowError({name:"TypeError",message:"EncodingError U+6461"});
expect(() => {ms932Encoder.encode("\u6462")}).toThrowError({name:"TypeError",message:"EncodingError U+6462"});
expect(() => {ms932Encoder.encode("\u6463")}).toThrowError({name:"TypeError",message:"EncodingError U+6463"});
expect(() => {ms932Encoder.encode("\u6464")}).toThrowError({name:"TypeError",message:"EncodingError U+6464"});
expect(() => {ms932Encoder.encode("\u6465")}).toThrowError({name:"TypeError",message:"EncodingError U+6465"});
expect(() => {ms932Encoder.encode("\u6466")}).toThrowError({name:"TypeError",message:"EncodingError U+6466"});
expect([...ms932Encoder.encode("摧")].join(",")).toBe("157,148"); // U+6467
expect(() => {ms932Encoder.encode("\u6468")}).toThrowError({name:"TypeError",message:"EncodingError U+6468"});
expect([...ms932Encoder.encode("摩")].join(",")).toBe("150,128"); // U+6469
expect(() => {ms932Encoder.encode("\u646A")}).toThrowError({name:"TypeError",message:"EncodingError U+646A"});
expect(() => {ms932Encoder.encode("\u646B")}).toThrowError({name:"TypeError",message:"EncodingError U+646B"});
expect(() => {ms932Encoder.encode("\u646C")}).toThrowError({name:"TypeError",message:"EncodingError U+646C"});
expect(() => {ms932Encoder.encode("\u646D")}).toThrowError({name:"TypeError",message:"EncodingError U+646D"});
expect(() => {ms932Encoder.encode("\u646E")}).toThrowError({name:"TypeError",message:"EncodingError U+646E"});
expect([...ms932Encoder.encode("摯")].join(",")).toBe("157,149"); // U+646F
expect(() => {ms932Encoder.encode("\u6470")}).toThrowError({name:"TypeError",message:"EncodingError U+6470"});
expect(() => {ms932Encoder.encode("\u6471")}).toThrowError({name:"TypeError",message:"EncodingError U+6471"});
expect(() => {ms932Encoder.encode("\u6472")}).toThrowError({name:"TypeError",message:"EncodingError U+6472"});
expect(() => {ms932Encoder.encode("\u6473")}).toThrowError({name:"TypeError",message:"EncodingError U+6473"});
expect(() => {ms932Encoder.encode("\u6474")}).toThrowError({name:"TypeError",message:"EncodingError U+6474"});
expect(() => {ms932Encoder.encode("\u6475")}).toThrowError({name:"TypeError",message:"EncodingError U+6475"});
expect([...ms932Encoder.encode("摶")].join(",")).toBe("157,150"); // U+6476
expect(() => {ms932Encoder.encode("\u6477")}).toThrowError({name:"TypeError",message:"EncodingError U+6477"});
expect([...ms932Encoder.encode("摸")].join(",")).toBe("150,204"); // U+6478
expect(() => {ms932Encoder.encode("\u6479")}).toThrowError({name:"TypeError",message:"EncodingError U+6479"});
expect([...ms932Encoder.encode("摺")].join(",")).toBe("144,160"); // U+647A
expect(() => {ms932Encoder.encode("\u647B")}).toThrowError({name:"TypeError",message:"EncodingError U+647B"});
expect(() => {ms932Encoder.encode("\u647C")}).toThrowError({name:"TypeError",message:"EncodingError U+647C"});
expect(() => {ms932Encoder.encode("\u647D")}).toThrowError({name:"TypeError",message:"EncodingError U+647D"});
expect(() => {ms932Encoder.encode("\u647E")}).toThrowError({name:"TypeError",message:"EncodingError U+647E"});
expect(() => {ms932Encoder.encode("\u647F")}).toThrowError({name:"TypeError",message:"EncodingError U+647F"});
expect(() => {ms932Encoder.encode("\u6480")}).toThrowError({name:"TypeError",message:"EncodingError U+6480"});
expect(() => {ms932Encoder.encode("\u6481")}).toThrowError({name:"TypeError",message:"EncodingError U+6481"});
expect(() => {ms932Encoder.encode("\u6482")}).toThrowError({name:"TypeError",message:"EncodingError U+6482"});
expect([...ms932Encoder.encode("撃")].join(",")).toBe("140,130"); // U+6483
expect(() => {ms932Encoder.encode("\u6484")}).toThrowError({name:"TypeError",message:"EncodingError U+6484"});
expect(() => {ms932Encoder.encode("\u6485")}).toThrowError({name:"TypeError",message:"EncodingError U+6485"});
expect(() => {ms932Encoder.encode("\u6486")}).toThrowError({name:"TypeError",message:"EncodingError U+6486"});
expect(() => {ms932Encoder.encode("\u6487")}).toThrowError({name:"TypeError",message:"EncodingError U+6487"});
expect([...ms932Encoder.encode("撈")].join(",")).toBe("157,157"); // U+6488
expect(() => {ms932Encoder.encode("\u6489")}).toThrowError({name:"TypeError",message:"EncodingError U+6489"});
expect(() => {ms932Encoder.encode("\u648A")}).toThrowError({name:"TypeError",message:"EncodingError U+648A"});
expect(() => {ms932Encoder.encode("\u648B")}).toThrowError({name:"TypeError",message:"EncodingError U+648B"});
expect(() => {ms932Encoder.encode("\u648C")}).toThrowError({name:"TypeError",message:"EncodingError U+648C"});
expect(() => {ms932Encoder.encode("\u648D")}).toThrowError({name:"TypeError",message:"EncodingError U+648D"});
expect(() => {ms932Encoder.encode("\u648E")}).toThrowError({name:"TypeError",message:"EncodingError U+648E"});
expect(() => {ms932Encoder.encode("\u648F")}).toThrowError({name:"TypeError",message:"EncodingError U+648F"});
expect(() => {ms932Encoder.encode("\u6490")}).toThrowError({name:"TypeError",message:"EncodingError U+6490"});
expect(() => {ms932Encoder.encode("\u6491")}).toThrowError({name:"TypeError",message:"EncodingError U+6491"});
expect([...ms932Encoder.encode("撒撓")].join(",")).toBe("142,84,157,154"); // U+6492
expect(() => {ms932Encoder.encode("\u6494")}).toThrowError({name:"TypeError",message:"EncodingError U+6494"});
expect([...ms932Encoder.encode("撕")].join(",")).toBe("157,153"); // U+6495
expect(() => {ms932Encoder.encode("\u6496")}).toThrowError({name:"TypeError",message:"EncodingError U+6496"});
expect(() => {ms932Encoder.encode("\u6497")}).toThrowError({name:"TypeError",message:"EncodingError U+6497"});
expect(() => {ms932Encoder.encode("\u6498")}).toThrowError({name:"TypeError",message:"EncodingError U+6498"});
expect(() => {ms932Encoder.encode("\u6499")}).toThrowError({name:"TypeError",message:"EncodingError U+6499"});
expect([...ms932Encoder.encode("撚")].join(",")).toBe("148,81"); // U+649A
expect(() => {ms932Encoder.encode("\u649B")}).toThrowError({name:"TypeError",message:"EncodingError U+649B"});
expect(() => {ms932Encoder.encode("\u649C")}).toThrowError({name:"TypeError",message:"EncodingError U+649C"});
expect([...ms932Encoder.encode("撝撞")].join(",")).toBe("250,203,147,179"); // U+649D
expect(() => {ms932Encoder.encode("\u649F")}).toThrowError({name:"TypeError",message:"EncodingError U+649F"});
expect(() => {ms932Encoder.encode("\u64A0")}).toThrowError({name:"TypeError",message:"EncodingError U+64A0"});
expect(() => {ms932Encoder.encode("\u64A1")}).toThrowError({name:"TypeError",message:"EncodingError U+64A1"});
expect(() => {ms932Encoder.encode("\u64A2")}).toThrowError({name:"TypeError",message:"EncodingError U+64A2"});
expect(() => {ms932Encoder.encode("\u64A3")}).toThrowError({name:"TypeError",message:"EncodingError U+64A3"});
expect([...ms932Encoder.encode("撤撥")].join(",")).toBe("147,80,157,155"); // U+64A4
expect(() => {ms932Encoder.encode("\u64A6")}).toThrowError({name:"TypeError",message:"EncodingError U+64A6"});
expect(() => {ms932Encoder.encode("\u64A7")}).toThrowError({name:"TypeError",message:"EncodingError U+64A7"});
expect(() => {ms932Encoder.encode("\u64A8")}).toThrowError({name:"TypeError",message:"EncodingError U+64A8"});
expect([...ms932Encoder.encode("撩")].join(",")).toBe("157,156"); // U+64A9
expect(() => {ms932Encoder.encode("\u64AA")}).toThrowError({name:"TypeError",message:"EncodingError U+64AA"});
expect([...ms932Encoder.encode("撫")].join(",")).toBe("149,143"); // U+64AB
expect(() => {ms932Encoder.encode("\u64AC")}).toThrowError({name:"TypeError",message:"EncodingError U+64AC"});
expect([...ms932Encoder.encode("播撮")].join(",")).toBe("148,100,142,66"); // U+64AD
expect(() => {ms932Encoder.encode("\u64AF")}).toThrowError({name:"TypeError",message:"EncodingError U+64AF"});
expect([...ms932Encoder.encode("撰")].join(",")).toBe("144,239"); // U+64B0
expect(() => {ms932Encoder.encode("\u64B1")}).toThrowError({name:"TypeError",message:"EncodingError U+64B1"});
expect([...ms932Encoder.encode("撲")].join(",")).toBe("150,111"); // U+64B2
expect(() => {ms932Encoder.encode("\u64B3")}).toThrowError({name:"TypeError",message:"EncodingError U+64B3"});
expect(() => {ms932Encoder.encode("\u64B4")}).toThrowError({name:"TypeError",message:"EncodingError U+64B4"});
expect(() => {ms932Encoder.encode("\u64B5")}).toThrowError({name:"TypeError",message:"EncodingError U+64B5"});
expect(() => {ms932Encoder.encode("\u64B6")}).toThrowError({name:"TypeError",message:"EncodingError U+64B6"});
expect(() => {ms932Encoder.encode("\u64B7")}).toThrowError({name:"TypeError",message:"EncodingError U+64B7"});
expect(() => {ms932Encoder.encode("\u64B8")}).toThrowError({name:"TypeError",message:"EncodingError U+64B8"});
expect([...ms932Encoder.encode("撹")].join(",")).toBe("138,104"); // U+64B9
expect(() => {ms932Encoder.encode("\u64BA")}).toThrowError({name:"TypeError",message:"EncodingError U+64BA"});
expect([...ms932Encoder.encode("撻撼")].join(",")).toBe("157,163,157,158"); // U+64BB
expect(() => {ms932Encoder.encode("\u64BD")}).toThrowError({name:"TypeError",message:"EncodingError U+64BD"});
expect(() => {ms932Encoder.encode("\u64BE")}).toThrowError({name:"TypeError",message:"EncodingError U+64BE"});
expect(() => {ms932Encoder.encode("\u64BF")}).toThrowError({name:"TypeError",message:"EncodingError U+64BF"});
expect(() => {ms932Encoder.encode("\u64C0")}).toThrowError({name:"TypeError",message:"EncodingError U+64C0"});
expect([...ms932Encoder.encode("擁擂")].join(",")).toBe("151,105,157,165"); // U+64C1
expect(() => {ms932Encoder.encode("\u64C3")}).toThrowError({name:"TypeError",message:"EncodingError U+64C3"});
expect(() => {ms932Encoder.encode("\u64C4")}).toThrowError({name:"TypeError",message:"EncodingError U+64C4"});
expect([...ms932Encoder.encode("擅")].join(",")).toBe("157,161"); // U+64C5
expect(() => {ms932Encoder.encode("\u64C6")}).toThrowError({name:"TypeError",message:"EncodingError U+64C6"});
expect([...ms932Encoder.encode("擇")].join(",")).toBe("157,162"); // U+64C7
expect(() => {ms932Encoder.encode("\u64C8")}).toThrowError({name:"TypeError",message:"EncodingError U+64C8"});
expect(() => {ms932Encoder.encode("\u64C9")}).toThrowError({name:"TypeError",message:"EncodingError U+64C9"});
expect(() => {ms932Encoder.encode("\u64CA")}).toThrowError({name:"TypeError",message:"EncodingError U+64CA"});
expect(() => {ms932Encoder.encode("\u64CB")}).toThrowError({name:"TypeError",message:"EncodingError U+64CB"});
expect(() => {ms932Encoder.encode("\u64CC")}).toThrowError({name:"TypeError",message:"EncodingError U+64CC"});
expect([...ms932Encoder.encode("操擎")].join(",")).toBe("145,128,250,204"); // U+64CD
expect(() => {ms932Encoder.encode("\u64CF")}).toThrowError({name:"TypeError",message:"EncodingError U+64CF"});
expect(() => {ms932Encoder.encode("\u64D0")}).toThrowError({name:"TypeError",message:"EncodingError U+64D0"});
expect(() => {ms932Encoder.encode("\u64D1")}).toThrowError({name:"TypeError",message:"EncodingError U+64D1"});
expect([...ms932Encoder.encode("擒")].join(",")).toBe("157,160"); // U+64D2
expect(() => {ms932Encoder.encode("\u64D3")}).toThrowError({name:"TypeError",message:"EncodingError U+64D3"});
expect([...ms932Encoder.encode("擔")].join(",")).toBe("157,94"); // U+64D4
expect(() => {ms932Encoder.encode("\u64D5")}).toThrowError({name:"TypeError",message:"EncodingError U+64D5"});
expect(() => {ms932Encoder.encode("\u64D6")}).toThrowError({name:"TypeError",message:"EncodingError U+64D6"});
expect(() => {ms932Encoder.encode("\u64D7")}).toThrowError({name:"TypeError",message:"EncodingError U+64D7"});
expect([...ms932Encoder.encode("擘")].join(",")).toBe("157,164"); // U+64D8
expect(() => {ms932Encoder.encode("\u64D9")}).toThrowError({name:"TypeError",message:"EncodingError U+64D9"});
expect([...ms932Encoder.encode("據")].join(",")).toBe("157,159"); // U+64DA
expect(() => {ms932Encoder.encode("\u64DB")}).toThrowError({name:"TypeError",message:"EncodingError U+64DB"});
expect(() => {ms932Encoder.encode("\u64DC")}).toThrowError({name:"TypeError",message:"EncodingError U+64DC"});
expect(() => {ms932Encoder.encode("\u64DD")}).toThrowError({name:"TypeError",message:"EncodingError U+64DD"});
expect(() => {ms932Encoder.encode("\u64DE")}).toThrowError({name:"TypeError",message:"EncodingError U+64DE"});
expect(() => {ms932Encoder.encode("\u64DF")}).toThrowError({name:"TypeError",message:"EncodingError U+64DF"});
expect([...ms932Encoder.encode("擠擡擢擣")].join(",")).toBe("157,169,157,170,147,70,157,172"); // U+64E0
expect(() => {ms932Encoder.encode("\u64E4")}).toThrowError({name:"TypeError",message:"EncodingError U+64E4"});
expect(() => {ms932Encoder.encode("\u64E5")}).toThrowError({name:"TypeError",message:"EncodingError U+64E5"});
expect([...ms932Encoder.encode("擦擧")].join(",")).toBe("142,67,157,167"); // U+64E6
expect(() => {ms932Encoder.encode("\u64E8")}).toThrowError({name:"TypeError",message:"EncodingError U+64E8"});
expect(() => {ms932Encoder.encode("\u64E9")}).toThrowError({name:"TypeError",message:"EncodingError U+64E9"});
expect(() => {ms932Encoder.encode("\u64EA")}).toThrowError({name:"TypeError",message:"EncodingError U+64EA"});
expect(() => {ms932Encoder.encode("\u64EB")}).toThrowError({name:"TypeError",message:"EncodingError U+64EB"});
expect([...ms932Encoder.encode("擬")].join(",")).toBe("139,91"); // U+64EC
expect(() => {ms932Encoder.encode("\u64ED")}).toThrowError({name:"TypeError",message:"EncodingError U+64ED"});
expect(() => {ms932Encoder.encode("\u64EE")}).toThrowError({name:"TypeError",message:"EncodingError U+64EE"});
expect([...ms932Encoder.encode("擯")].join(",")).toBe("157,173"); // U+64EF
expect(() => {ms932Encoder.encode("\u64F0")}).toThrowError({name:"TypeError",message:"EncodingError U+64F0"});
expect([...ms932Encoder.encode("擱擲")].join(",")).toBe("157,166,157,177"); // U+64F1
expect(() => {ms932Encoder.encode("\u64F3")}).toThrowError({name:"TypeError",message:"EncodingError U+64F3"});
expect([...ms932Encoder.encode("擴")].join(",")).toBe("157,176"); // U+64F4
expect(() => {ms932Encoder.encode("\u64F5")}).toThrowError({name:"TypeError",message:"EncodingError U+64F5"});
expect([...ms932Encoder.encode("擶")].join(",")).toBe("157,175"); // U+64F6
expect(() => {ms932Encoder.encode("\u64F7")}).toThrowError({name:"TypeError",message:"EncodingError U+64F7"});
expect(() => {ms932Encoder.encode("\u64F8")}).toThrowError({name:"TypeError",message:"EncodingError U+64F8"});
expect(() => {ms932Encoder.encode("\u64F9")}).toThrowError({name:"TypeError",message:"EncodingError U+64F9"});
expect([...ms932Encoder.encode("擺")].join(",")).toBe("157,178"); // U+64FA
expect(() => {ms932Encoder.encode("\u64FB")}).toThrowError({name:"TypeError",message:"EncodingError U+64FB"});
expect(() => {ms932Encoder.encode("\u64FC")}).toThrowError({name:"TypeError",message:"EncodingError U+64FC"});
expect([...ms932Encoder.encode("擽擾")].join(",")).toBe("157,180,143,239"); // U+64FD
expect(() => {ms932Encoder.encode("\u64FF")}).toThrowError({name:"TypeError",message:"EncodingError U+64FF"});
expect([...ms932Encoder.encode("攀")].join(",")).toBe("157,179"); // U+6500
expect(() => {ms932Encoder.encode("\u6501")}).toThrowError({name:"TypeError",message:"EncodingError U+6501"});
expect(() => {ms932Encoder.encode("\u6502")}).toThrowError({name:"TypeError",message:"EncodingError U+6502"});
expect(() => {ms932Encoder.encode("\u6503")}).toThrowError({name:"TypeError",message:"EncodingError U+6503"});
expect(() => {ms932Encoder.encode("\u6504")}).toThrowError({name:"TypeError",message:"EncodingError U+6504"});
expect([...ms932Encoder.encode("攅")].join(",")).toBe("157,183"); // U+6505
expect(() => {ms932Encoder.encode("\u6506")}).toThrowError({name:"TypeError",message:"EncodingError U+6506"});
expect(() => {ms932Encoder.encode("\u6507")}).toThrowError({name:"TypeError",message:"EncodingError U+6507"});
expect(() => {ms932Encoder.encode("\u6508")}).toThrowError({name:"TypeError",message:"EncodingError U+6508"});
expect(() => {ms932Encoder.encode("\u6509")}).toThrowError({name:"TypeError",message:"EncodingError U+6509"});
expect(() => {ms932Encoder.encode("\u650A")}).toThrowError({name:"TypeError",message:"EncodingError U+650A"});
expect(() => {ms932Encoder.encode("\u650B")}).toThrowError({name:"TypeError",message:"EncodingError U+650B"});
expect(() => {ms932Encoder.encode("\u650C")}).toThrowError({name:"TypeError",message:"EncodingError U+650C"});
expect(() => {ms932Encoder.encode("\u650D")}).toThrowError({name:"TypeError",message:"EncodingError U+650D"});
expect(() => {ms932Encoder.encode("\u650E")}).toThrowError({name:"TypeError",message:"EncodingError U+650E"});
expect(() => {ms932Encoder.encode("\u650F")}).toThrowError({name:"TypeError",message:"EncodingError U+650F"});
expect(() => {ms932Encoder.encode("\u6510")}).toThrowError({name:"TypeError",message:"EncodingError U+6510"});
expect(() => {ms932Encoder.encode("\u6511")}).toThrowError({name:"TypeError",message:"EncodingError U+6511"});
expect(() => {ms932Encoder.encode("\u6512")}).toThrowError({name:"TypeError",message:"EncodingError U+6512"});
expect(() => {ms932Encoder.encode("\u6513")}).toThrowError({name:"TypeError",message:"EncodingError U+6513"});
expect(() => {ms932Encoder.encode("\u6514")}).toThrowError({name:"TypeError",message:"EncodingError U+6514"});
expect(() => {ms932Encoder.encode("\u6515")}).toThrowError({name:"TypeError",message:"EncodingError U+6515"});
expect(() => {ms932Encoder.encode("\u6516")}).toThrowError({name:"TypeError",message:"EncodingError U+6516"});
expect(() => {ms932Encoder.encode("\u6517")}).toThrowError({name:"TypeError",message:"EncodingError U+6517"});
expect([...ms932Encoder.encode("攘")].join(",")).toBe("157,181"); // U+6518
expect(() => {ms932Encoder.encode("\u6519")}).toThrowError({name:"TypeError",message:"EncodingError U+6519"});
expect(() => {ms932Encoder.encode("\u651A")}).toThrowError({name:"TypeError",message:"EncodingError U+651A"});
expect(() => {ms932Encoder.encode("\u651B")}).toThrowError({name:"TypeError",message:"EncodingError U+651B"});
expect([...ms932Encoder.encode("攜攝")].join(",")).toBe("157,182,157,144"); // U+651C
expect(() => {ms932Encoder.encode("\u651E")}).toThrowError({name:"TypeError",message:"EncodingError U+651E"});
expect(() => {ms932Encoder.encode("\u651F")}).toThrowError({name:"TypeError",message:"EncodingError U+651F"});
expect(() => {ms932Encoder.encode("\u6520")}).toThrowError({name:"TypeError",message:"EncodingError U+6520"});
expect(() => {ms932Encoder.encode("\u6521")}).toThrowError({name:"TypeError",message:"EncodingError U+6521"});
expect(() => {ms932Encoder.encode("\u6522")}).toThrowError({name:"TypeError",message:"EncodingError U+6522"});
expect([...ms932Encoder.encode("攣攤")].join(",")).toBe("157,185,157,184"); // U+6523
expect(() => {ms932Encoder.encode("\u6525")}).toThrowError({name:"TypeError",message:"EncodingError U+6525"});
expect(() => {ms932Encoder.encode("\u6526")}).toThrowError({name:"TypeError",message:"EncodingError U+6526"});
expect(() => {ms932Encoder.encode("\u6527")}).toThrowError({name:"TypeError",message:"EncodingError U+6527"});
expect(() => {ms932Encoder.encode("\u6528")}).toThrowError({name:"TypeError",message:"EncodingError U+6528"});
expect(() => {ms932Encoder.encode("\u6529")}).toThrowError({name:"TypeError",message:"EncodingError U+6529"});
expect([...ms932Encoder.encode("攪攫攬")].join(",")).toBe("157,152,157,186,157,174"); // U+652A
expect(() => {ms932Encoder.encode("\u652D")}).toThrowError({name:"TypeError",message:"EncodingError U+652D"});
expect(() => {ms932Encoder.encode("\u652E")}).toThrowError({name:"TypeError",message:"EncodingError U+652E"});
expect([...ms932Encoder.encode("支")].join(",")).toBe("142,120"); // U+652F
expect(() => {ms932Encoder.encode("\u6530")}).toThrowError({name:"TypeError",message:"EncodingError U+6530"});
expect(() => {ms932Encoder.encode("\u6531")}).toThrowError({name:"TypeError",message:"EncodingError U+6531"});
expect(() => {ms932Encoder.encode("\u6532")}).toThrowError({name:"TypeError",message:"EncodingError U+6532"});
expect(() => {ms932Encoder.encode("\u6533")}).toThrowError({name:"TypeError",message:"EncodingError U+6533"});
expect([...ms932Encoder.encode("攴攵收攷攸改")].join(",")).toBe("157,187,157,188,157,190,157,189,157,191,137,252"); // U+6534
expect(() => {ms932Encoder.encode("\u653A")}).toThrowError({name:"TypeError",message:"EncodingError U+653A"});
expect([...ms932Encoder.encode("攻")].join(",")).toBe("141,85"); // U+653B
expect(() => {ms932Encoder.encode("\u653C")}).toThrowError({name:"TypeError",message:"EncodingError U+653C"});
expect(() => {ms932Encoder.encode("\u653D")}).toThrowError({name:"TypeError",message:"EncodingError U+653D"});
expect([...ms932Encoder.encode("放政")].join(",")).toBe("149,250,144,173"); // U+653E
expect(() => {ms932Encoder.encode("\u6540")}).toThrowError({name:"TypeError",message:"EncodingError U+6540"});
expect(() => {ms932Encoder.encode("\u6541")}).toThrowError({name:"TypeError",message:"EncodingError U+6541"});
expect(() => {ms932Encoder.encode("\u6542")}).toThrowError({name:"TypeError",message:"EncodingError U+6542"});
expect(() => {ms932Encoder.encode("\u6543")}).toThrowError({name:"TypeError",message:"EncodingError U+6543"});
expect(() => {ms932Encoder.encode("\u6544")}).toThrowError({name:"TypeError",message:"EncodingError U+6544"});
expect([...ms932Encoder.encode("故")].join(",")).toBe("140,204"); // U+6545
expect(() => {ms932Encoder.encode("\u6546")}).toThrowError({name:"TypeError",message:"EncodingError U+6546"});
expect(() => {ms932Encoder.encode("\u6547")}).toThrowError({name:"TypeError",message:"EncodingError U+6547"});
expect([...ms932Encoder.encode("效")].join(",")).toBe("157,193"); // U+6548
expect(() => {ms932Encoder.encode("\u6549")}).toThrowError({name:"TypeError",message:"EncodingError U+6549"});
expect(() => {ms932Encoder.encode("\u654A")}).toThrowError({name:"TypeError",message:"EncodingError U+654A"});
expect(() => {ms932Encoder.encode("\u654B")}).toThrowError({name:"TypeError",message:"EncodingError U+654B"});
expect(() => {ms932Encoder.encode("\u654C")}).toThrowError({name:"TypeError",message:"EncodingError U+654C"});
expect([...ms932Encoder.encode("敍敎敏")].join(",")).toBe("157,196,250,205,149,113"); // U+654D
expect(() => {ms932Encoder.encode("\u6550")}).toThrowError({name:"TypeError",message:"EncodingError U+6550"});
expect([...ms932Encoder.encode("救")].join(",")).toBe("139,126"); // U+6551
expect(() => {ms932Encoder.encode("\u6552")}).toThrowError({name:"TypeError",message:"EncodingError U+6552"});
expect(() => {ms932Encoder.encode("\u6553")}).toThrowError({name:"TypeError",message:"EncodingError U+6553"});
expect(() => {ms932Encoder.encode("\u6554")}).toThrowError({name:"TypeError",message:"EncodingError U+6554"});
expect([...ms932Encoder.encode("敕敖敗敘教")].join(",")).toBe("157,195,157,194,148,115,157,197,139,179"); // U+6555
expect(() => {ms932Encoder.encode("\u655A")}).toThrowError({name:"TypeError",message:"EncodingError U+655A"});
expect(() => {ms932Encoder.encode("\u655B")}).toThrowError({name:"TypeError",message:"EncodingError U+655B"});
expect(() => {ms932Encoder.encode("\u655C")}).toThrowError({name:"TypeError",message:"EncodingError U+655C"});
expect([...ms932Encoder.encode("敝敞")].join(",")).toBe("157,199,157,198"); // U+655D
expect(() => {ms932Encoder.encode("\u655F")}).toThrowError({name:"TypeError",message:"EncodingError U+655F"});
expect(() => {ms932Encoder.encode("\u6560")}).toThrowError({name:"TypeError",message:"EncodingError U+6560"});
expect(() => {ms932Encoder.encode("\u6561")}).toThrowError({name:"TypeError",message:"EncodingError U+6561"});
expect([...ms932Encoder.encode("敢散")].join(",")).toBe("138,184,142,85"); // U+6562
expect(() => {ms932Encoder.encode("\u6564")}).toThrowError({name:"TypeError",message:"EncodingError U+6564"});
expect(() => {ms932Encoder.encode("\u6565")}).toThrowError({name:"TypeError",message:"EncodingError U+6565"});
expect([...ms932Encoder.encode("敦")].join(",")).toBe("147,214"); // U+6566
expect(() => {ms932Encoder.encode("\u6567")}).toThrowError({name:"TypeError",message:"EncodingError U+6567"});
expect(() => {ms932Encoder.encode("\u6568")}).toThrowError({name:"TypeError",message:"EncodingError U+6568"});
expect(() => {ms932Encoder.encode("\u6569")}).toThrowError({name:"TypeError",message:"EncodingError U+6569"});
expect(() => {ms932Encoder.encode("\u656A")}).toThrowError({name:"TypeError",message:"EncodingError U+656A"});
expect(() => {ms932Encoder.encode("\u656B")}).toThrowError({name:"TypeError",message:"EncodingError U+656B"});
expect([...ms932Encoder.encode("敬")].join(",")).toBe("140,104"); // U+656C
expect(() => {ms932Encoder.encode("\u656D")}).toThrowError({name:"TypeError",message:"EncodingError U+656D"});
expect(() => {ms932Encoder.encode("\u656E")}).toThrowError({name:"TypeError",message:"EncodingError U+656E"});
expect(() => {ms932Encoder.encode("\u656F")}).toThrowError({name:"TypeError",message:"EncodingError U+656F"});
expect([...ms932Encoder.encode("数")].join(",")).toBe("144,148"); // U+6570
expect(() => {ms932Encoder.encode("\u6571")}).toThrowError({name:"TypeError",message:"EncodingError U+6571"});
expect([...ms932Encoder.encode("敲")].join(",")).toBe("157,200"); // U+6572
expect(() => {ms932Encoder.encode("\u6573")}).toThrowError({name:"TypeError",message:"EncodingError U+6573"});
expect([...ms932Encoder.encode("整敵")].join(",")).toBe("144,174,147,71"); // U+6574
expect(() => {ms932Encoder.encode("\u6576")}).toThrowError({name:"TypeError",message:"EncodingError U+6576"});
expect([...ms932Encoder.encode("敷數")].join(",")).toBe("149,126,157,201"); // U+6577
expect(() => {ms932Encoder.encode("\u6579")}).toThrowError({name:"TypeError",message:"EncodingError U+6579"});
expect(() => {ms932Encoder.encode("\u657A")}).toThrowError({name:"TypeError",message:"EncodingError U+657A"});
expect(() => {ms932Encoder.encode("\u657B")}).toThrowError({name:"TypeError",message:"EncodingError U+657B"});
expect(() => {ms932Encoder.encode("\u657C")}).toThrowError({name:"TypeError",message:"EncodingError U+657C"});
expect(() => {ms932Encoder.encode("\u657D")}).toThrowError({name:"TypeError",message:"EncodingError U+657D"});
expect(() => {ms932Encoder.encode("\u657E")}).toThrowError({name:"TypeError",message:"EncodingError U+657E"});
expect(() => {ms932Encoder.encode("\u657F")}).toThrowError({name:"TypeError",message:"EncodingError U+657F"});
expect(() => {ms932Encoder.encode("\u6580")}).toThrowError({name:"TypeError",message:"EncodingError U+6580"});
expect(() => {ms932Encoder.encode("\u6581")}).toThrowError({name:"TypeError",message:"EncodingError U+6581"});
expect([...ms932Encoder.encode("斂斃")].join(",")).toBe("157,202,157,203"); // U+6582
expect(() => {ms932Encoder.encode("\u6584")}).toThrowError({name:"TypeError",message:"EncodingError U+6584"});
expect(() => {ms932Encoder.encode("\u6585")}).toThrowError({name:"TypeError",message:"EncodingError U+6585"});
expect(() => {ms932Encoder.encode("\u6586")}).toThrowError({name:"TypeError",message:"EncodingError U+6586"});
expect([...ms932Encoder.encode("文斈斉")].join(",")).toBe("149,182,155,124,144,196"); // U+6587
expect(() => {ms932Encoder.encode("\u658A")}).toThrowError({name:"TypeError",message:"EncodingError U+658A"});
expect(() => {ms932Encoder.encode("\u658B")}).toThrowError({name:"TypeError",message:"EncodingError U+658B"});
expect([...ms932Encoder.encode("斌")].join(",")).toBe("149,107"); // U+658C
expect(() => {ms932Encoder.encode("\u658D")}).toThrowError({name:"TypeError",message:"EncodingError U+658D"});
expect([...ms932Encoder.encode("斎")].join(",")).toBe("141,214"); // U+658E
expect(() => {ms932Encoder.encode("\u658F")}).toThrowError({name:"TypeError",message:"EncodingError U+658F"});
expect([...ms932Encoder.encode("斐斑")].join(",")).toBe("148,227,148,193"); // U+6590
expect(() => {ms932Encoder.encode("\u6592")}).toThrowError({name:"TypeError",message:"EncodingError U+6592"});
expect(() => {ms932Encoder.encode("\u6593")}).toThrowError({name:"TypeError",message:"EncodingError U+6593"});
expect(() => {ms932Encoder.encode("\u6594")}).toThrowError({name:"TypeError",message:"EncodingError U+6594"});
expect(() => {ms932Encoder.encode("\u6595")}).toThrowError({name:"TypeError",message:"EncodingError U+6595"});
expect(() => {ms932Encoder.encode("\u6596")}).toThrowError({name:"TypeError",message:"EncodingError U+6596"});
expect([...ms932Encoder.encode("斗")].join(",")).toBe("147,108"); // U+6597
expect(() => {ms932Encoder.encode("\u6598")}).toThrowError({name:"TypeError",message:"EncodingError U+6598"});
expect([...ms932Encoder.encode("料")].join(",")).toBe("151,191"); // U+6599
expect(() => {ms932Encoder.encode("\u659A")}).toThrowError({name:"TypeError",message:"EncodingError U+659A"});
expect([...ms932Encoder.encode("斛斜")].join(",")).toBe("157,205,142,206"); // U+659B
expect(() => {ms932Encoder.encode("\u659D")}).toThrowError({name:"TypeError",message:"EncodingError U+659D"});
expect(() => {ms932Encoder.encode("\u659E")}).toThrowError({name:"TypeError",message:"EncodingError U+659E"});
expect([...ms932Encoder.encode("斟")].join(",")).toBe("157,206"); // U+659F
expect(() => {ms932Encoder.encode("\u65A0")}).toThrowError({name:"TypeError",message:"EncodingError U+65A0"});
expect([...ms932Encoder.encode("斡")].join(",")).toBe("136,180"); // U+65A1
expect(() => {ms932Encoder.encode("\u65A2")}).toThrowError({name:"TypeError",message:"EncodingError U+65A2"});
expect(() => {ms932Encoder.encode("\u65A3")}).toThrowError({name:"TypeError",message:"EncodingError U+65A3"});
expect([...ms932Encoder.encode("斤斥")].join(",")).toBe("139,210,144,203"); // U+65A4
expect(() => {ms932Encoder.encode("\u65A6")}).toThrowError({name:"TypeError",message:"EncodingError U+65A6"});
expect([...ms932Encoder.encode("斧")].join(",")).toBe("149,128"); // U+65A7
expect(() => {ms932Encoder.encode("\u65A8")}).toThrowError({name:"TypeError",message:"EncodingError U+65A8"});
expect(() => {ms932Encoder.encode("\u65A9")}).toThrowError({name:"TypeError",message:"EncodingError U+65A9"});
expect(() => {ms932Encoder.encode("\u65AA")}).toThrowError({name:"TypeError",message:"EncodingError U+65AA"});
expect([...ms932Encoder.encode("斫斬断")].join(",")).toBe("157,207,142,97,146,102"); // U+65AB
expect(() => {ms932Encoder.encode("\u65AE")}).toThrowError({name:"TypeError",message:"EncodingError U+65AE"});
expect([...ms932Encoder.encode("斯新")].join(",")).toBe("142,122,144,86"); // U+65AF
expect(() => {ms932Encoder.encode("\u65B1")}).toThrowError({name:"TypeError",message:"EncodingError U+65B1"});
expect(() => {ms932Encoder.encode("\u65B2")}).toThrowError({name:"TypeError",message:"EncodingError U+65B2"});
expect(() => {ms932Encoder.encode("\u65B3")}).toThrowError({name:"TypeError",message:"EncodingError U+65B3"});
expect(() => {ms932Encoder.encode("\u65B4")}).toThrowError({name:"TypeError",message:"EncodingError U+65B4"});
expect(() => {ms932Encoder.encode("\u65B5")}).toThrowError({name:"TypeError",message:"EncodingError U+65B5"});
expect(() => {ms932Encoder.encode("\u65B6")}).toThrowError({name:"TypeError",message:"EncodingError U+65B6"});
expect([...ms932Encoder.encode("斷")].join(",")).toBe("157,208"); // U+65B7
expect(() => {ms932Encoder.encode("\u65B8")}).toThrowError({name:"TypeError",message:"EncodingError U+65B8"});
expect([...ms932Encoder.encode("方")].join(",")).toBe("149,251"); // U+65B9
expect(() => {ms932Encoder.encode("\u65BA")}).toThrowError({name:"TypeError",message:"EncodingError U+65BA"});
expect(() => {ms932Encoder.encode("\u65BB")}).toThrowError({name:"TypeError",message:"EncodingError U+65BB"});
expect([...ms932Encoder.encode("於施")].join(",")).toBe("137,151,142,123"); // U+65BC
expect(() => {ms932Encoder.encode("\u65BE")}).toThrowError({name:"TypeError",message:"EncodingError U+65BE"});
expect(() => {ms932Encoder.encode("\u65BF")}).toThrowError({name:"TypeError",message:"EncodingError U+65BF"});
expect(() => {ms932Encoder.encode("\u65C0")}).toThrowError({name:"TypeError",message:"EncodingError U+65C0"});
expect([...ms932Encoder.encode("旁")].join(",")).toBe("157,211"); // U+65C1
expect(() => {ms932Encoder.encode("\u65C2")}).toThrowError({name:"TypeError",message:"EncodingError U+65C2"});
expect([...ms932Encoder.encode("旃旄旅旆")].join(",")).toBe("157,209,157,212,151,183,157,210"); // U+65C3
expect(() => {ms932Encoder.encode("\u65C7")}).toThrowError({name:"TypeError",message:"EncodingError U+65C7"});
expect(() => {ms932Encoder.encode("\u65C8")}).toThrowError({name:"TypeError",message:"EncodingError U+65C8"});
expect(() => {ms932Encoder.encode("\u65C9")}).toThrowError({name:"TypeError",message:"EncodingError U+65C9"});
expect(() => {ms932Encoder.encode("\u65CA")}).toThrowError({name:"TypeError",message:"EncodingError U+65CA"});
expect([...ms932Encoder.encode("旋旌")].join(",")).toBe("144,249,157,213"); // U+65CB
expect(() => {ms932Encoder.encode("\u65CD")}).toThrowError({name:"TypeError",message:"EncodingError U+65CD"});
expect(() => {ms932Encoder.encode("\u65CE")}).toThrowError({name:"TypeError",message:"EncodingError U+65CE"});
expect([...ms932Encoder.encode("族")].join(",")).toBe("145,176"); // U+65CF
expect(() => {ms932Encoder.encode("\u65D0")}).toThrowError({name:"TypeError",message:"EncodingError U+65D0"});
expect(() => {ms932Encoder.encode("\u65D1")}).toThrowError({name:"TypeError",message:"EncodingError U+65D1"});
expect([...ms932Encoder.encode("旒")].join(",")).toBe("157,214"); // U+65D2
expect(() => {ms932Encoder.encode("\u65D3")}).toThrowError({name:"TypeError",message:"EncodingError U+65D3"});
expect(() => {ms932Encoder.encode("\u65D4")}).toThrowError({name:"TypeError",message:"EncodingError U+65D4"});
expect(() => {ms932Encoder.encode("\u65D5")}).toThrowError({name:"TypeError",message:"EncodingError U+65D5"});
expect(() => {ms932Encoder.encode("\u65D6")}).toThrowError({name:"TypeError",message:"EncodingError U+65D6"});
expect([...ms932Encoder.encode("旗")].join(",")).toBe("138,248"); // U+65D7
expect(() => {ms932Encoder.encode("\u65D8")}).toThrowError({name:"TypeError",message:"EncodingError U+65D8"});
expect([...ms932Encoder.encode("旙")].join(",")).toBe("157,216"); // U+65D9
expect(() => {ms932Encoder.encode("\u65DA")}).toThrowError({name:"TypeError",message:"EncodingError U+65DA"});
expect([...ms932Encoder.encode("旛")].join(",")).toBe("157,215"); // U+65DB
expect(() => {ms932Encoder.encode("\u65DC")}).toThrowError({name:"TypeError",message:"EncodingError U+65DC"});
expect(() => {ms932Encoder.encode("\u65DD")}).toThrowError({name:"TypeError",message:"EncodingError U+65DD"});
expect(() => {ms932Encoder.encode("\u65DE")}).toThrowError({name:"TypeError",message:"EncodingError U+65DE"});
expect(() => {ms932Encoder.encode("\u65DF")}).toThrowError({name:"TypeError",message:"EncodingError U+65DF"});
expect([...ms932Encoder.encode("无旡既")].join(",")).toBe("157,217,157,218,138,249"); // U+65E0
expect(() => {ms932Encoder.encode("\u65E3")}).toThrowError({name:"TypeError",message:"EncodingError U+65E3"});
expect(() => {ms932Encoder.encode("\u65E4")}).toThrowError({name:"TypeError",message:"EncodingError U+65E4"});
expect([...ms932Encoder.encode("日旦旧旨早")].join(",")).toBe("147,250,146,85,139,140,142,124,145,129"); // U+65E5
expect(() => {ms932Encoder.encode("\u65EA")}).toThrowError({name:"TypeError",message:"EncodingError U+65EA"});
expect(() => {ms932Encoder.encode("\u65EB")}).toThrowError({name:"TypeError",message:"EncodingError U+65EB"});
expect([...ms932Encoder.encode("旬旭")].join(",")).toBe("143,123,136,174"); // U+65EC
expect(() => {ms932Encoder.encode("\u65EE")}).toThrowError({name:"TypeError",message:"EncodingError U+65EE"});
expect(() => {ms932Encoder.encode("\u65EF")}).toThrowError({name:"TypeError",message:"EncodingError U+65EF"});
expect(() => {ms932Encoder.encode("\u65F0")}).toThrowError({name:"TypeError",message:"EncodingError U+65F0"});
expect([...ms932Encoder.encode("旱")].join(",")).toBe("157,219"); // U+65F1
expect(() => {ms932Encoder.encode("\u65F2")}).toThrowError({name:"TypeError",message:"EncodingError U+65F2"});
expect(() => {ms932Encoder.encode("\u65F3")}).toThrowError({name:"TypeError",message:"EncodingError U+65F3"});
expect(() => {ms932Encoder.encode("\u65F4")}).toThrowError({name:"TypeError",message:"EncodingError U+65F4"});
expect(() => {ms932Encoder.encode("\u65F5")}).toThrowError({name:"TypeError",message:"EncodingError U+65F5"});
expect(() => {ms932Encoder.encode("\u65F6")}).toThrowError({name:"TypeError",message:"EncodingError U+65F6"});
expect(() => {ms932Encoder.encode("\u65F7")}).toThrowError({name:"TypeError",message:"EncodingError U+65F7"});
expect(() => {ms932Encoder.encode("\u65F8")}).toThrowError({name:"TypeError",message:"EncodingError U+65F8"});
expect(() => {ms932Encoder.encode("\u65F9")}).toThrowError({name:"TypeError",message:"EncodingError U+65F9"});
expect([...ms932Encoder.encode("旺旻")].join(",")).toBe("137,160,157,223"); // U+65FA
expect(() => {ms932Encoder.encode("\u65FC")}).toThrowError({name:"TypeError",message:"EncodingError U+65FC"});
expect(() => {ms932Encoder.encode("\u65FD")}).toThrowError({name:"TypeError",message:"EncodingError U+65FD"});
expect(() => {ms932Encoder.encode("\u65FE")}).toThrowError({name:"TypeError",message:"EncodingError U+65FE"});
expect(() => {ms932Encoder.encode("\u65FF")}).toThrowError({name:"TypeError",message:"EncodingError U+65FF"});
expect([...ms932Encoder.encode("昀")].join(",")).toBe("250,206"); // U+6600
expect(() => {ms932Encoder.encode("\u6601")}).toThrowError({name:"TypeError",message:"EncodingError U+6601"});
expect([...ms932Encoder.encode("昂昃")].join(",")).toBe("141,86,157,222"); // U+6602
expect(() => {ms932Encoder.encode("\u6604")}).toThrowError({name:"TypeError",message:"EncodingError U+6604"});
expect(() => {ms932Encoder.encode("\u6605")}).toThrowError({name:"TypeError",message:"EncodingError U+6605"});
expect([...ms932Encoder.encode("昆昇")].join(",")).toBe("141,169,143,184"); // U+6606
expect(() => {ms932Encoder.encode("\u6608")}).toThrowError({name:"TypeError",message:"EncodingError U+6608"});
expect([...ms932Encoder.encode("昉昊")].join(",")).toBe("250,209,157,221"); // U+6609
expect(() => {ms932Encoder.encode("\u660B")}).toThrowError({name:"TypeError",message:"EncodingError U+660B"});
expect([...ms932Encoder.encode("昌")].join(",")).toBe("143,185"); // U+660C
expect(() => {ms932Encoder.encode("\u660D")}).toThrowError({name:"TypeError",message:"EncodingError U+660D"});
expect([...ms932Encoder.encode("明昏")].join(",")).toBe("150,190,141,168"); // U+660E
expect(() => {ms932Encoder.encode("\u6610")}).toThrowError({name:"TypeError",message:"EncodingError U+6610"});
expect(() => {ms932Encoder.encode("\u6611")}).toThrowError({name:"TypeError",message:"EncodingError U+6611"});
expect(() => {ms932Encoder.encode("\u6612")}).toThrowError({name:"TypeError",message:"EncodingError U+6612"});
expect([...ms932Encoder.encode("易昔昕")].join(",")).toBe("136,213,144,204,250,207"); // U+6613
expect(() => {ms932Encoder.encode("\u6616")}).toThrowError({name:"TypeError",message:"EncodingError U+6616"});
expect(() => {ms932Encoder.encode("\u6617")}).toThrowError({name:"TypeError",message:"EncodingError U+6617"});
expect(() => {ms932Encoder.encode("\u6618")}).toThrowError({name:"TypeError",message:"EncodingError U+6618"});
expect(() => {ms932Encoder.encode("\u6619")}).toThrowError({name:"TypeError",message:"EncodingError U+6619"});
expect(() => {ms932Encoder.encode("\u661A")}).toThrowError({name:"TypeError",message:"EncodingError U+661A"});
expect(() => {ms932Encoder.encode("\u661B")}).toThrowError({name:"TypeError",message:"EncodingError U+661B"});
expect([...ms932Encoder.encode("昜")].join(",")).toBe("157,228"); // U+661C
expect(() => {ms932Encoder.encode("\u661D")}).toThrowError({name:"TypeError",message:"EncodingError U+661D"});
expect([...ms932Encoder.encode("昞星映")].join(",")).toBe("250,211,144,175,137,102"); // U+661E
expect(() => {ms932Encoder.encode("\u6621")}).toThrowError({name:"TypeError",message:"EncodingError U+6621"});
expect(() => {ms932Encoder.encode("\u6622")}).toThrowError({name:"TypeError",message:"EncodingError U+6622"});
expect(() => {ms932Encoder.encode("\u6623")}).toThrowError({name:"TypeError",message:"EncodingError U+6623"});
expect([...ms932Encoder.encode("昤春")].join(",")).toBe("250,212,143,116"); // U+6624
expect(() => {ms932Encoder.encode("\u6626")}).toThrowError({name:"TypeError",message:"EncodingError U+6626"});
expect([...ms932Encoder.encode("昧昨")].join(",")).toBe("150,134,141,240"); // U+6627
expect(() => {ms932Encoder.encode("\u6629")}).toThrowError({name:"TypeError",message:"EncodingError U+6629"});
expect(() => {ms932Encoder.encode("\u662A")}).toThrowError({name:"TypeError",message:"EncodingError U+662A"});
expect(() => {ms932Encoder.encode("\u662B")}).toThrowError({name:"TypeError",message:"EncodingError U+662B"});
expect(() => {ms932Encoder.encode("\u662C")}).toThrowError({name:"TypeError",message:"EncodingError U+662C"});
expect([...ms932Encoder.encode("昭昮是")].join(",")).toBe("143,186,250,210,144,165"); // U+662D
expect(() => {ms932Encoder.encode("\u6630")}).toThrowError({name:"TypeError",message:"EncodingError U+6630"});
expect([...ms932Encoder.encode("昱")].join(",")).toBe("250,99"); // U+6631
expect(() => {ms932Encoder.encode("\u6632")}).toThrowError({name:"TypeError",message:"EncodingError U+6632"});
expect(() => {ms932Encoder.encode("\u6633")}).toThrowError({name:"TypeError",message:"EncodingError U+6633"});
expect([...ms932Encoder.encode("昴昵昶")].join(",")).toBe("157,227,157,225,157,226"); // U+6634
expect(() => {ms932Encoder.encode("\u6637")}).toThrowError({name:"TypeError",message:"EncodingError U+6637"});
expect(() => {ms932Encoder.encode("\u6638")}).toThrowError({name:"TypeError",message:"EncodingError U+6638"});
expect(() => {ms932Encoder.encode("\u6639")}).toThrowError({name:"TypeError",message:"EncodingError U+6639"});
expect(() => {ms932Encoder.encode("\u663A")}).toThrowError({name:"TypeError",message:"EncodingError U+663A"});
expect([...ms932Encoder.encode("昻昼")].join(",")).toBe("250,208,146,139"); // U+663B
expect(() => {ms932Encoder.encode("\u663D")}).toThrowError({name:"TypeError",message:"EncodingError U+663D"});
expect(() => {ms932Encoder.encode("\u663E")}).toThrowError({name:"TypeError",message:"EncodingError U+663E"});
expect([...ms932Encoder.encode("昿")].join(",")).toBe("158,69"); // U+663F
expect(() => {ms932Encoder.encode("\u6640")}).toThrowError({name:"TypeError",message:"EncodingError U+6640"});
expect([...ms932Encoder.encode("晁時晃晄")].join(",")).toBe("157,232,142,158,141,87,157,230"); // U+6641
expect(() => {ms932Encoder.encode("\u6645")}).toThrowError({name:"TypeError",message:"EncodingError U+6645"});
expect(() => {ms932Encoder.encode("\u6646")}).toThrowError({name:"TypeError",message:"EncodingError U+6646"});
expect(() => {ms932Encoder.encode("\u6647")}).toThrowError({name:"TypeError",message:"EncodingError U+6647"});
expect(() => {ms932Encoder.encode("\u6648")}).toThrowError({name:"TypeError",message:"EncodingError U+6648"});
expect([...ms932Encoder.encode("晉")].join(",")).toBe("157,231"); // U+6649
expect(() => {ms932Encoder.encode("\u664A")}).toThrowError({name:"TypeError",message:"EncodingError U+664A"});
expect([...ms932Encoder.encode("晋")].join(",")).toBe("144,87"); // U+664B
expect(() => {ms932Encoder.encode("\u664C")}).toThrowError({name:"TypeError",message:"EncodingError U+664C"});
expect(() => {ms932Encoder.encode("\u664D")}).toThrowError({name:"TypeError",message:"EncodingError U+664D"});
expect(() => {ms932Encoder.encode("\u664E")}).toThrowError({name:"TypeError",message:"EncodingError U+664E"});
expect([...ms932Encoder.encode("晏")].join(",")).toBe("157,229"); // U+664F
expect(() => {ms932Encoder.encode("\u6650")}).toThrowError({name:"TypeError",message:"EncodingError U+6650"});
expect(() => {ms932Encoder.encode("\u6651")}).toThrowError({name:"TypeError",message:"EncodingError U+6651"});
expect([...ms932Encoder.encode("晒")].join(",")).toBe("142,78"); // U+6652
expect(() => {ms932Encoder.encode("\u6653")}).toThrowError({name:"TypeError",message:"EncodingError U+6653"});
expect(() => {ms932Encoder.encode("\u6654")}).toThrowError({name:"TypeError",message:"EncodingError U+6654"});
expect(() => {ms932Encoder.encode("\u6655")}).toThrowError({name:"TypeError",message:"EncodingError U+6655"});
expect(() => {ms932Encoder.encode("\u6656")}).toThrowError({name:"TypeError",message:"EncodingError U+6656"});
expect([...ms932Encoder.encode("晗")].join(",")).toBe("250,214"); // U+6657
expect(() => {ms932Encoder.encode("\u6658")}).toThrowError({name:"TypeError",message:"EncodingError U+6658"});
expect([...ms932Encoder.encode("晙")].join(",")).toBe("250,215"); // U+6659
expect(() => {ms932Encoder.encode("\u665A")}).toThrowError({name:"TypeError",message:"EncodingError U+665A"});
expect(() => {ms932Encoder.encode("\u665B")}).toThrowError({name:"TypeError",message:"EncodingError U+665B"});
expect(() => {ms932Encoder.encode("\u665C")}).toThrowError({name:"TypeError",message:"EncodingError U+665C"});
expect([...ms932Encoder.encode("晝晞晟")].join(",")).toBe("157,234,157,233,157,238"); // U+665D
expect(() => {ms932Encoder.encode("\u6660")}).toThrowError({name:"TypeError",message:"EncodingError U+6660"});
expect(() => {ms932Encoder.encode("\u6661")}).toThrowError({name:"TypeError",message:"EncodingError U+6661"});
expect([...ms932Encoder.encode("晢")].join(",")).toBe("157,239"); // U+6662
expect(() => {ms932Encoder.encode("\u6663")}).toThrowError({name:"TypeError",message:"EncodingError U+6663"});
expect([...ms932Encoder.encode("晤晥晦晧晨晩")].join(",")).toBe("157,235,250,213,138,65,157,236,157,237,148,211"); // U+6664
expect(() => {ms932Encoder.encode("\u666A")}).toThrowError({name:"TypeError",message:"EncodingError U+666A"});
expect(() => {ms932Encoder.encode("\u666B")}).toThrowError({name:"TypeError",message:"EncodingError U+666B"});
expect(() => {ms932Encoder.encode("\u666C")}).toThrowError({name:"TypeError",message:"EncodingError U+666C"});
expect(() => {ms932Encoder.encode("\u666D")}).toThrowError({name:"TypeError",message:"EncodingError U+666D"});
expect([...ms932Encoder.encode("普景晰")].join(",")).toBe("149,129,140,105,157,240"); // U+666E
expect(() => {ms932Encoder.encode("\u6671")}).toThrowError({name:"TypeError",message:"EncodingError U+6671"});
expect(() => {ms932Encoder.encode("\u6672")}).toThrowError({name:"TypeError",message:"EncodingError U+6672"});
expect([...ms932Encoder.encode("晳晴")].join(",")).toBe("250,217,144,176"); // U+6673
expect(() => {ms932Encoder.encode("\u6675")}).toThrowError({name:"TypeError",message:"EncodingError U+6675"});
expect([...ms932Encoder.encode("晶")].join(",")).toBe("143,187"); // U+6676
expect(() => {ms932Encoder.encode("\u6677")}).toThrowError({name:"TypeError",message:"EncodingError U+6677"});
expect(() => {ms932Encoder.encode("\u6678")}).toThrowError({name:"TypeError",message:"EncodingError U+6678"});
expect(() => {ms932Encoder.encode("\u6679")}).toThrowError({name:"TypeError",message:"EncodingError U+6679"});
expect([...ms932Encoder.encode("智")].join(",")).toBe("146,113"); // U+667A
expect(() => {ms932Encoder.encode("\u667B")}).toThrowError({name:"TypeError",message:"EncodingError U+667B"});
expect(() => {ms932Encoder.encode("\u667C")}).toThrowError({name:"TypeError",message:"EncodingError U+667C"});
expect(() => {ms932Encoder.encode("\u667D")}).toThrowError({name:"TypeError",message:"EncodingError U+667D"});
expect(() => {ms932Encoder.encode("\u667E")}).toThrowError({name:"TypeError",message:"EncodingError U+667E"});
expect(() => {ms932Encoder.encode("\u667F")}).toThrowError({name:"TypeError",message:"EncodingError U+667F"});
expect(() => {ms932Encoder.encode("\u6680")}).toThrowError({name:"TypeError",message:"EncodingError U+6680"});
expect([...ms932Encoder.encode("暁")].join(",")).toBe("139,197"); // U+6681
expect(() => {ms932Encoder.encode("\u6682")}).toThrowError({name:"TypeError",message:"EncodingError U+6682"});
expect([...ms932Encoder.encode("暃暄")].join(",")).toBe("157,241,157,245"); // U+6683
expect(() => {ms932Encoder.encode("\u6685")}).toThrowError({name:"TypeError",message:"EncodingError U+6685"});
expect(() => {ms932Encoder.encode("\u6686")}).toThrowError({name:"TypeError",message:"EncodingError U+6686"});
expect([...ms932Encoder.encode("暇暈暉")].join(",")).toBe("137,201,157,242,157,244"); // U+6687
expect(() => {ms932Encoder.encode("\u668A")}).toThrowError({name:"TypeError",message:"EncodingError U+668A"});
expect(() => {ms932Encoder.encode("\u668B")}).toThrowError({name:"TypeError",message:"EncodingError U+668B"});
expect(() => {ms932Encoder.encode("\u668C")}).toThrowError({name:"TypeError",message:"EncodingError U+668C"});
expect(() => {ms932Encoder.encode("\u668D")}).toThrowError({name:"TypeError",message:"EncodingError U+668D"});
expect([...ms932Encoder.encode("暎")].join(",")).toBe("157,243"); // U+668E
expect(() => {ms932Encoder.encode("\u668F")}).toThrowError({name:"TypeError",message:"EncodingError U+668F"});
expect(() => {ms932Encoder.encode("\u6690")}).toThrowError({name:"TypeError",message:"EncodingError U+6690"});
expect([...ms932Encoder.encode("暑")].join(",")).toBe("143,139"); // U+6691
expect(() => {ms932Encoder.encode("\u6692")}).toThrowError({name:"TypeError",message:"EncodingError U+6692"});
expect(() => {ms932Encoder.encode("\u6693")}).toThrowError({name:"TypeError",message:"EncodingError U+6693"});
expect(() => {ms932Encoder.encode("\u6694")}).toThrowError({name:"TypeError",message:"EncodingError U+6694"});
expect(() => {ms932Encoder.encode("\u6695")}).toThrowError({name:"TypeError",message:"EncodingError U+6695"});
expect([...ms932Encoder.encode("暖暗暘暙")].join(",")).toBe("146,103,136,195,157,246,250,218"); // U+6696
expect(() => {ms932Encoder.encode("\u669A")}).toThrowError({name:"TypeError",message:"EncodingError U+669A"});
expect(() => {ms932Encoder.encode("\u669B")}).toThrowError({name:"TypeError",message:"EncodingError U+669B"});
expect(() => {ms932Encoder.encode("\u669C")}).toThrowError({name:"TypeError",message:"EncodingError U+669C"});
expect([...ms932Encoder.encode("暝")].join(",")).toBe("157,247"); // U+669D
expect(() => {ms932Encoder.encode("\u669E")}).toThrowError({name:"TypeError",message:"EncodingError U+669E"});
expect(() => {ms932Encoder.encode("\u669F")}).toThrowError({name:"TypeError",message:"EncodingError U+669F"});
expect([...ms932Encoder.encode("暠")].join(",")).toBe("250,219"); // U+66A0
expect(() => {ms932Encoder.encode("\u66A1")}).toThrowError({name:"TypeError",message:"EncodingError U+66A1"});
expect([...ms932Encoder.encode("暢")].join(",")).toBe("146,168"); // U+66A2
expect(() => {ms932Encoder.encode("\u66A3")}).toThrowError({name:"TypeError",message:"EncodingError U+66A3"});
expect(() => {ms932Encoder.encode("\u66A4")}).toThrowError({name:"TypeError",message:"EncodingError U+66A4"});
expect(() => {ms932Encoder.encode("\u66A5")}).toThrowError({name:"TypeError",message:"EncodingError U+66A5"});
expect([...ms932Encoder.encode("暦")].join(",")).toBe("151,239"); // U+66A6
expect(() => {ms932Encoder.encode("\u66A7")}).toThrowError({name:"TypeError",message:"EncodingError U+66A7"});
expect(() => {ms932Encoder.encode("\u66A8")}).toThrowError({name:"TypeError",message:"EncodingError U+66A8"});
expect(() => {ms932Encoder.encode("\u66A9")}).toThrowError({name:"TypeError",message:"EncodingError U+66A9"});
expect(() => {ms932Encoder.encode("\u66AA")}).toThrowError({name:"TypeError",message:"EncodingError U+66AA"});
expect([...ms932Encoder.encode("暫")].join(",")).toBe("142,98"); // U+66AB
expect(() => {ms932Encoder.encode("\u66AC")}).toThrowError({name:"TypeError",message:"EncodingError U+66AC"});
expect(() => {ms932Encoder.encode("\u66AD")}).toThrowError({name:"TypeError",message:"EncodingError U+66AD"});
expect([...ms932Encoder.encode("暮")].join(",")).toBe("149,233"); // U+66AE
expect(() => {ms932Encoder.encode("\u66AF")}).toThrowError({name:"TypeError",message:"EncodingError U+66AF"});
expect(() => {ms932Encoder.encode("\u66B0")}).toThrowError({name:"TypeError",message:"EncodingError U+66B0"});
expect(() => {ms932Encoder.encode("\u66B1")}).toThrowError({name:"TypeError",message:"EncodingError U+66B1"});
expect([...ms932Encoder.encode("暲")].join(",")).toBe("250,220"); // U+66B2
expect(() => {ms932Encoder.encode("\u66B3")}).toThrowError({name:"TypeError",message:"EncodingError U+66B3"});
expect([...ms932Encoder.encode("暴")].join(",")).toBe("150,92"); // U+66B4
expect(() => {ms932Encoder.encode("\u66B5")}).toThrowError({name:"TypeError",message:"EncodingError U+66B5"});
expect(() => {ms932Encoder.encode("\u66B6")}).toThrowError({name:"TypeError",message:"EncodingError U+66B6"});
expect(() => {ms932Encoder.encode("\u66B7")}).toThrowError({name:"TypeError",message:"EncodingError U+66B7"});
expect([...ms932Encoder.encode("暸暹")].join(",")).toBe("158,65,157,249"); // U+66B8
expect(() => {ms932Encoder.encode("\u66BA")}).toThrowError({name:"TypeError",message:"EncodingError U+66BA"});
expect(() => {ms932Encoder.encode("\u66BB")}).toThrowError({name:"TypeError",message:"EncodingError U+66BB"});
expect([...ms932Encoder.encode("暼")].join(",")).toBe("157,252"); // U+66BC
expect(() => {ms932Encoder.encode("\u66BD")}).toThrowError({name:"TypeError",message:"EncodingError U+66BD"});
expect([...ms932Encoder.encode("暾暿")].join(",")).toBe("157,251,250,221"); // U+66BE
expect(() => {ms932Encoder.encode("\u66C0")}).toThrowError({name:"TypeError",message:"EncodingError U+66C0"});
expect([...ms932Encoder.encode("曁")].join(",")).toBe("157,248"); // U+66C1
expect(() => {ms932Encoder.encode("\u66C2")}).toThrowError({name:"TypeError",message:"EncodingError U+66C2"});
expect(() => {ms932Encoder.encode("\u66C3")}).toThrowError({name:"TypeError",message:"EncodingError U+66C3"});
expect([...ms932Encoder.encode("曄")].join(",")).toBe("158,64"); // U+66C4
expect(() => {ms932Encoder.encode("\u66C5")}).toThrowError({name:"TypeError",message:"EncodingError U+66C5"});
expect(() => {ms932Encoder.encode("\u66C6")}).toThrowError({name:"TypeError",message:"EncodingError U+66C6"});
expect([...ms932Encoder.encode("曇")].join(",")).toBe("147,220"); // U+66C7
expect(() => {ms932Encoder.encode("\u66C8")}).toThrowError({name:"TypeError",message:"EncodingError U+66C8"});
expect([...ms932Encoder.encode("曉")].join(",")).toBe("157,250"); // U+66C9
expect(() => {ms932Encoder.encode("\u66CA")}).toThrowError({name:"TypeError",message:"EncodingError U+66CA"});
expect(() => {ms932Encoder.encode("\u66CB")}).toThrowError({name:"TypeError",message:"EncodingError U+66CB"});
expect(() => {ms932Encoder.encode("\u66CC")}).toThrowError({name:"TypeError",message:"EncodingError U+66CC"});
expect(() => {ms932Encoder.encode("\u66CD")}).toThrowError({name:"TypeError",message:"EncodingError U+66CD"});
expect(() => {ms932Encoder.encode("\u66CE")}).toThrowError({name:"TypeError",message:"EncodingError U+66CE"});
expect(() => {ms932Encoder.encode("\u66CF")}).toThrowError({name:"TypeError",message:"EncodingError U+66CF"});
expect(() => {ms932Encoder.encode("\u66D0")}).toThrowError({name:"TypeError",message:"EncodingError U+66D0"});
expect(() => {ms932Encoder.encode("\u66D1")}).toThrowError({name:"TypeError",message:"EncodingError U+66D1"});
expect(() => {ms932Encoder.encode("\u66D2")}).toThrowError({name:"TypeError",message:"EncodingError U+66D2"});
expect(() => {ms932Encoder.encode("\u66D3")}).toThrowError({name:"TypeError",message:"EncodingError U+66D3"});
expect(() => {ms932Encoder.encode("\u66D4")}).toThrowError({name:"TypeError",message:"EncodingError U+66D4"});
expect(() => {ms932Encoder.encode("\u66D5")}).toThrowError({name:"TypeError",message:"EncodingError U+66D5"});
expect([...ms932Encoder.encode("曖")].join(",")).toBe("158,66"); // U+66D6
expect(() => {ms932Encoder.encode("\u66D7")}).toThrowError({name:"TypeError",message:"EncodingError U+66D7"});
expect(() => {ms932Encoder.encode("\u66D8")}).toThrowError({name:"TypeError",message:"EncodingError U+66D8"});
expect([...ms932Encoder.encode("曙曚")].join(",")).toBe("143,140,158,67"); // U+66D9
expect(() => {ms932Encoder.encode("\u66DB")}).toThrowError({name:"TypeError",message:"EncodingError U+66DB"});
expect([...ms932Encoder.encode("曜曝")].join(",")).toBe("151,106,148,152"); // U+66DC
expect(() => {ms932Encoder.encode("\u66DE")}).toThrowError({name:"TypeError",message:"EncodingError U+66DE"});
expect(() => {ms932Encoder.encode("\u66DF")}).toThrowError({name:"TypeError",message:"EncodingError U+66DF"});
expect([...ms932Encoder.encode("曠")].join(",")).toBe("158,68"); // U+66E0
expect(() => {ms932Encoder.encode("\u66E1")}).toThrowError({name:"TypeError",message:"EncodingError U+66E1"});
expect(() => {ms932Encoder.encode("\u66E2")}).toThrowError({name:"TypeError",message:"EncodingError U+66E2"});
expect(() => {ms932Encoder.encode("\u66E3")}).toThrowError({name:"TypeError",message:"EncodingError U+66E3"});
expect(() => {ms932Encoder.encode("\u66E4")}).toThrowError({name:"TypeError",message:"EncodingError U+66E4"});
expect(() => {ms932Encoder.encode("\u66E5")}).toThrowError({name:"TypeError",message:"EncodingError U+66E5"});
expect([...ms932Encoder.encode("曦")].join(",")).toBe("158,70"); // U+66E6
expect(() => {ms932Encoder.encode("\u66E7")}).toThrowError({name:"TypeError",message:"EncodingError U+66E7"});
expect(() => {ms932Encoder.encode("\u66E8")}).toThrowError({name:"TypeError",message:"EncodingError U+66E8"});
expect([...ms932Encoder.encode("曩")].join(",")).toBe("158,71"); // U+66E9
expect(() => {ms932Encoder.encode("\u66EA")}).toThrowError({name:"TypeError",message:"EncodingError U+66EA"});
expect(() => {ms932Encoder.encode("\u66EB")}).toThrowError({name:"TypeError",message:"EncodingError U+66EB"});
expect(() => {ms932Encoder.encode("\u66EC")}).toThrowError({name:"TypeError",message:"EncodingError U+66EC"});
expect(() => {ms932Encoder.encode("\u66ED")}).toThrowError({name:"TypeError",message:"EncodingError U+66ED"});
expect(() => {ms932Encoder.encode("\u66EE")}).toThrowError({name:"TypeError",message:"EncodingError U+66EE"});
expect(() => {ms932Encoder.encode("\u66EF")}).toThrowError({name:"TypeError",message:"EncodingError U+66EF"});
expect([...ms932Encoder.encode("曰")].join(",")).toBe("158,72"); // U+66F0
expect(() => {ms932Encoder.encode("\u66F1")}).toThrowError({name:"TypeError",message:"EncodingError U+66F1"});
expect([...ms932Encoder.encode("曲曳更曵")].join(",")).toBe("139,200,137,103,141,88,158,73"); // U+66F2
expect(() => {ms932Encoder.encode("\u66F6")}).toThrowError({name:"TypeError",message:"EncodingError U+66F6"});
expect([...ms932Encoder.encode("曷書曹曺曻曼曽曾替最")].join(",")).toBe("158,74,143,145,145,130,250,222,250,102,153,214,145,93,145,92,145,214,141,197"); // U+66F7
expect(() => {ms932Encoder.encode("\u6701")}).toThrowError({name:"TypeError",message:"EncodingError U+6701"});
expect(() => {ms932Encoder.encode("\u6702")}).toThrowError({name:"TypeError",message:"EncodingError U+6702"});
expect([...ms932Encoder.encode("會")].join(",")).toBe("152,240"); // U+6703
expect(() => {ms932Encoder.encode("\u6704")}).toThrowError({name:"TypeError",message:"EncodingError U+6704"});
expect(() => {ms932Encoder.encode("\u6705")}).toThrowError({name:"TypeError",message:"EncodingError U+6705"});
expect(() => {ms932Encoder.encode("\u6706")}).toThrowError({name:"TypeError",message:"EncodingError U+6706"});
expect(() => {ms932Encoder.encode("\u6707")}).toThrowError({name:"TypeError",message:"EncodingError U+6707"});
expect([...ms932Encoder.encode("月有")].join(",")).toBe("140,142,151,76"); // U+6708
expect(() => {ms932Encoder.encode("\u670A")}).toThrowError({name:"TypeError",message:"EncodingError U+670A"});
expect([...ms932Encoder.encode("朋")].join(",")).toBe("149,252"); // U+670B
expect(() => {ms932Encoder.encode("\u670C")}).toThrowError({name:"TypeError",message:"EncodingError U+670C"});
expect([...ms932Encoder.encode("服朎朏")].join(",")).toBe("149,158,250,223,158,75"); // U+670D
expect(() => {ms932Encoder.encode("\u6710")}).toThrowError({name:"TypeError",message:"EncodingError U+6710"});
expect(() => {ms932Encoder.encode("\u6711")}).toThrowError({name:"TypeError",message:"EncodingError U+6711"});
expect(() => {ms932Encoder.encode("\u6712")}).toThrowError({name:"TypeError",message:"EncodingError U+6712"});
expect(() => {ms932Encoder.encode("\u6713")}).toThrowError({name:"TypeError",message:"EncodingError U+6713"});
expect([...ms932Encoder.encode("朔朕朖朗")].join(",")).toBe("141,241,146,189,158,76,152,78"); // U+6714
expect(() => {ms932Encoder.encode("\u6718")}).toThrowError({name:"TypeError",message:"EncodingError U+6718"});
expect(() => {ms932Encoder.encode("\u6719")}).toThrowError({name:"TypeError",message:"EncodingError U+6719"});
expect(() => {ms932Encoder.encode("\u671A")}).toThrowError({name:"TypeError",message:"EncodingError U+671A"});
expect([...ms932Encoder.encode("望")].join(",")).toBe("150,93"); // U+671B
expect(() => {ms932Encoder.encode("\u671C")}).toThrowError({name:"TypeError",message:"EncodingError U+671C"});
expect([...ms932Encoder.encode("朝朞期")].join(",")).toBe("146,169,158,77,138,250"); // U+671D
expect(() => {ms932Encoder.encode("\u6720")}).toThrowError({name:"TypeError",message:"EncodingError U+6720"});
expect(() => {ms932Encoder.encode("\u6721")}).toThrowError({name:"TypeError",message:"EncodingError U+6721"});
expect(() => {ms932Encoder.encode("\u6722")}).toThrowError({name:"TypeError",message:"EncodingError U+6722"});
expect(() => {ms932Encoder.encode("\u6723")}).toThrowError({name:"TypeError",message:"EncodingError U+6723"});
expect(() => {ms932Encoder.encode("\u6724")}).toThrowError({name:"TypeError",message:"EncodingError U+6724"});
expect(() => {ms932Encoder.encode("\u6725")}).toThrowError({name:"TypeError",message:"EncodingError U+6725"});
expect([...ms932Encoder.encode("朦朧木")].join(",")).toBe("158,78,158,79,150,216"); // U+6726
expect(() => {ms932Encoder.encode("\u6729")}).toThrowError({name:"TypeError",message:"EncodingError U+6729"});
expect([...ms932Encoder.encode("未末本札朮")].join(",")).toBe("150,162,150,150,150,123,142,68,158,81"); // U+672A
expect(() => {ms932Encoder.encode("\u672F")}).toThrowError({name:"TypeError",message:"EncodingError U+672F"});
expect(() => {ms932Encoder.encode("\u6730")}).toThrowError({name:"TypeError",message:"EncodingError U+6730"});
expect([...ms932Encoder.encode("朱")].join(",")).toBe("142,233"); // U+6731
expect(() => {ms932Encoder.encode("\u6732")}).toThrowError({name:"TypeError",message:"EncodingError U+6732"});
expect(() => {ms932Encoder.encode("\u6733")}).toThrowError({name:"TypeError",message:"EncodingError U+6733"});
expect([...ms932Encoder.encode("朴")].join(",")).toBe("150,112"); // U+6734
expect(() => {ms932Encoder.encode("\u6735")}).toThrowError({name:"TypeError",message:"EncodingError U+6735"});
expect([...ms932Encoder.encode("朶朷朸")].join(",")).toBe("158,83,158,86,158,85"); // U+6736
expect(() => {ms932Encoder.encode("\u6739")}).toThrowError({name:"TypeError",message:"EncodingError U+6739"});
expect([...ms932Encoder.encode("机")].join(",")).toBe("138,247"); // U+673A
expect(() => {ms932Encoder.encode("\u673B")}).toThrowError({name:"TypeError",message:"EncodingError U+673B"});
expect(() => {ms932Encoder.encode("\u673C")}).toThrowError({name:"TypeError",message:"EncodingError U+673C"});
expect([...ms932Encoder.encode("朽")].join(",")).toBe("139,128"); // U+673D
expect(() => {ms932Encoder.encode("\u673E")}).toThrowError({name:"TypeError",message:"EncodingError U+673E"});
expect([...ms932Encoder.encode("朿")].join(",")).toBe("158,82"); // U+673F
expect(() => {ms932Encoder.encode("\u6740")}).toThrowError({name:"TypeError",message:"EncodingError U+6740"});
expect([...ms932Encoder.encode("杁")].join(",")).toBe("158,84"); // U+6741
expect(() => {ms932Encoder.encode("\u6742")}).toThrowError({name:"TypeError",message:"EncodingError U+6742"});
expect(() => {ms932Encoder.encode("\u6743")}).toThrowError({name:"TypeError",message:"EncodingError U+6743"});
expect(() => {ms932Encoder.encode("\u6744")}).toThrowError({name:"TypeError",message:"EncodingError U+6744"});
expect(() => {ms932Encoder.encode("\u6745")}).toThrowError({name:"TypeError",message:"EncodingError U+6745"});
expect([...ms932Encoder.encode("杆")].join(",")).toBe("158,87"); // U+6746
expect(() => {ms932Encoder.encode("\u6747")}).toThrowError({name:"TypeError",message:"EncodingError U+6747"});
expect(() => {ms932Encoder.encode("\u6748")}).toThrowError({name:"TypeError",message:"EncodingError U+6748"});
expect([...ms932Encoder.encode("杉")].join(",")).toBe("144,153"); // U+6749
expect(() => {ms932Encoder.encode("\u674A")}).toThrowError({name:"TypeError",message:"EncodingError U+674A"});
expect(() => {ms932Encoder.encode("\u674B")}).toThrowError({name:"TypeError",message:"EncodingError U+674B"});
expect(() => {ms932Encoder.encode("\u674C")}).toThrowError({name:"TypeError",message:"EncodingError U+674C"});
expect(() => {ms932Encoder.encode("\u674D")}).toThrowError({name:"TypeError",message:"EncodingError U+674D"});
expect([...ms932Encoder.encode("李杏材村")].join(",")).toBe("151,155,136,199,141,222,145,186"); // U+674E
expect(() => {ms932Encoder.encode("\u6752")}).toThrowError({name:"TypeError",message:"EncodingError U+6752"});
expect([...ms932Encoder.encode("杓")].join(",")).toBe("142,219"); // U+6753
expect(() => {ms932Encoder.encode("\u6754")}).toThrowError({name:"TypeError",message:"EncodingError U+6754"});
expect(() => {ms932Encoder.encode("\u6755")}).toThrowError({name:"TypeError",message:"EncodingError U+6755"});
expect([...ms932Encoder.encode("杖")].join(",")).toBe("143,241"); // U+6756
expect(() => {ms932Encoder.encode("\u6757")}).toThrowError({name:"TypeError",message:"EncodingError U+6757"});
expect(() => {ms932Encoder.encode("\u6758")}).toThrowError({name:"TypeError",message:"EncodingError U+6758"});
expect([...ms932Encoder.encode("杙")].join(",")).toBe("158,90"); // U+6759
expect(() => {ms932Encoder.encode("\u675A")}).toThrowError({name:"TypeError",message:"EncodingError U+675A"});
expect(() => {ms932Encoder.encode("\u675B")}).toThrowError({name:"TypeError",message:"EncodingError U+675B"});
expect([...ms932Encoder.encode("杜")].join(",")).toBe("147,109"); // U+675C
expect(() => {ms932Encoder.encode("\u675D")}).toThrowError({name:"TypeError",message:"EncodingError U+675D"});
expect([...ms932Encoder.encode("杞束杠条杢杣杤来杦")].join(",")).toBe("158,88,145,169,158,89,143,240,150,219,158,91,158,92,151,136,250,225"); // U+675E
expect(() => {ms932Encoder.encode("\u6767")}).toThrowError({name:"TypeError",message:"EncodingError U+6767"});
expect(() => {ms932Encoder.encode("\u6768")}).toThrowError({name:"TypeError",message:"EncodingError U+6768"});
expect(() => {ms932Encoder.encode("\u6769")}).toThrowError({name:"TypeError",message:"EncodingError U+6769"});
expect([...ms932Encoder.encode("杪")].join(",")).toBe("158,97"); // U+676A
expect(() => {ms932Encoder.encode("\u676B")}).toThrowError({name:"TypeError",message:"EncodingError U+676B"});
expect(() => {ms932Encoder.encode("\u676C")}).toThrowError({name:"TypeError",message:"EncodingError U+676C"});
expect([...ms932Encoder.encode("杭")].join(",")).toBe("141,89"); // U+676D
expect(() => {ms932Encoder.encode("\u676E")}).toThrowError({name:"TypeError",message:"EncodingError U+676E"});
expect([...ms932Encoder.encode("杯杰東杲杳")].join(",")).toBe("148,116,158,94,147,140,157,220,157,224"); // U+676F
expect(() => {ms932Encoder.encode("\u6774")}).toThrowError({name:"TypeError",message:"EncodingError U+6774"});
expect([...ms932Encoder.encode("杵")].join(",")).toBe("139,110"); // U+6775
expect(() => {ms932Encoder.encode("\u6776")}).toThrowError({name:"TypeError",message:"EncodingError U+6776"});
expect([...ms932Encoder.encode("杷")].join(",")).toBe("148,102"); // U+6777
expect(() => {ms932Encoder.encode("\u6778")}).toThrowError({name:"TypeError",message:"EncodingError U+6778"});
expect(() => {ms932Encoder.encode("\u6779")}).toThrowError({name:"TypeError",message:"EncodingError U+6779"});
expect(() => {ms932Encoder.encode("\u677A")}).toThrowError({name:"TypeError",message:"EncodingError U+677A"});
expect(() => {ms932Encoder.encode("\u677B")}).toThrowError({name:"TypeError",message:"EncodingError U+677B"});
expect([...ms932Encoder.encode("杼")].join(",")).toBe("158,96"); // U+677C
expect(() => {ms932Encoder.encode("\u677D")}).toThrowError({name:"TypeError",message:"EncodingError U+677D"});
expect([...ms932Encoder.encode("松板")].join(",")).toBe("143,188,148,194"); // U+677E
expect(() => {ms932Encoder.encode("\u6780")}).toThrowError({name:"TypeError",message:"EncodingError U+6780"});
expect(() => {ms932Encoder.encode("\u6781")}).toThrowError({name:"TypeError",message:"EncodingError U+6781"});
expect(() => {ms932Encoder.encode("\u6782")}).toThrowError({name:"TypeError",message:"EncodingError U+6782"});
expect(() => {ms932Encoder.encode("\u6783")}).toThrowError({name:"TypeError",message:"EncodingError U+6783"});
expect(() => {ms932Encoder.encode("\u6784")}).toThrowError({name:"TypeError",message:"EncodingError U+6784"});
expect([...ms932Encoder.encode("枅")].join(",")).toBe("158,102"); // U+6785
expect(() => {ms932Encoder.encode("\u6786")}).toThrowError({name:"TypeError",message:"EncodingError U+6786"});
expect([...ms932Encoder.encode("枇")].join(",")).toBe("148,248"); // U+6787
expect(() => {ms932Encoder.encode("\u6788")}).toThrowError({name:"TypeError",message:"EncodingError U+6788"});
expect([...ms932Encoder.encode("枉")].join(",")).toBe("158,93"); // U+6789
expect(() => {ms932Encoder.encode("\u678A")}).toThrowError({name:"TypeError",message:"EncodingError U+678A"});
expect([...ms932Encoder.encode("枋枌")].join(",")).toBe("158,99,158,98"); // U+678B
expect(() => {ms932Encoder.encode("\u678D")}).toThrowError({name:"TypeError",message:"EncodingError U+678D"});
expect(() => {ms932Encoder.encode("\u678E")}).toThrowError({name:"TypeError",message:"EncodingError U+678E"});
expect(() => {ms932Encoder.encode("\u678F")}).toThrowError({name:"TypeError",message:"EncodingError U+678F"});
expect([...ms932Encoder.encode("析")].join(",")).toBe("144,205"); // U+6790
expect(() => {ms932Encoder.encode("\u6791")}).toThrowError({name:"TypeError",message:"EncodingError U+6791"});
expect(() => {ms932Encoder.encode("\u6792")}).toThrowError({name:"TypeError",message:"EncodingError U+6792"});
expect(() => {ms932Encoder.encode("\u6793")}).toThrowError({name:"TypeError",message:"EncodingError U+6793"});
expect(() => {ms932Encoder.encode("\u6794")}).toThrowError({name:"TypeError",message:"EncodingError U+6794"});
expect([...ms932Encoder.encode("枕")].join(",")).toBe("150,141"); // U+6795
expect(() => {ms932Encoder.encode("\u6796")}).toThrowError({name:"TypeError",message:"EncodingError U+6796"});
expect([...ms932Encoder.encode("林")].join(",")).toBe("151,209"); // U+6797
expect(() => {ms932Encoder.encode("\u6798")}).toThrowError({name:"TypeError",message:"EncodingError U+6798"});
expect(() => {ms932Encoder.encode("\u6799")}).toThrowError({name:"TypeError",message:"EncodingError U+6799"});
expect([...ms932Encoder.encode("枚")].join(",")).toBe("150,135"); // U+679A
expect(() => {ms932Encoder.encode("\u679B")}).toThrowError({name:"TypeError",message:"EncodingError U+679B"});
expect([...ms932Encoder.encode("果枝")].join(",")).toBe("137,202,142,125"); // U+679C
expect(() => {ms932Encoder.encode("\u679E")}).toThrowError({name:"TypeError",message:"EncodingError U+679E"});
expect(() => {ms932Encoder.encode("\u679F")}).toThrowError({name:"TypeError",message:"EncodingError U+679F"});
expect([...ms932Encoder.encode("枠枡枢")].join(",")).toBe("152,103,158,101,144,149"); // U+67A0
expect(() => {ms932Encoder.encode("\u67A3")}).toThrowError({name:"TypeError",message:"EncodingError U+67A3"});
expect(() => {ms932Encoder.encode("\u67A4")}).toThrowError({name:"TypeError",message:"EncodingError U+67A4"});
expect(() => {ms932Encoder.encode("\u67A5")}).toThrowError({name:"TypeError",message:"EncodingError U+67A5"});
expect([...ms932Encoder.encode("枦")].join(",")).toBe("158,100"); // U+67A6
expect(() => {ms932Encoder.encode("\u67A7")}).toThrowError({name:"TypeError",message:"EncodingError U+67A7"});
expect(() => {ms932Encoder.encode("\u67A8")}).toThrowError({name:"TypeError",message:"EncodingError U+67A8"});
expect([...ms932Encoder.encode("枩")].join(",")).toBe("158,95"); // U+67A9
expect(() => {ms932Encoder.encode("\u67AA")}).toThrowError({name:"TypeError",message:"EncodingError U+67AA"});
expect(() => {ms932Encoder.encode("\u67AB")}).toThrowError({name:"TypeError",message:"EncodingError U+67AB"});
expect(() => {ms932Encoder.encode("\u67AC")}).toThrowError({name:"TypeError",message:"EncodingError U+67AC"});
expect(() => {ms932Encoder.encode("\u67AD")}).toThrowError({name:"TypeError",message:"EncodingError U+67AD"});
expect(() => {ms932Encoder.encode("\u67AE")}).toThrowError({name:"TypeError",message:"EncodingError U+67AE"});
expect([...ms932Encoder.encode("枯")].join(",")).toBe("140,205"); // U+67AF
expect(() => {ms932Encoder.encode("\u67B0")}).toThrowError({name:"TypeError",message:"EncodingError U+67B0"});
expect(() => {ms932Encoder.encode("\u67B1")}).toThrowError({name:"TypeError",message:"EncodingError U+67B1"});
expect(() => {ms932Encoder.encode("\u67B2")}).toThrowError({name:"TypeError",message:"EncodingError U+67B2"});
expect([...ms932Encoder.encode("枳枴")].join(",")).toBe("158,107,158,105"); // U+67B3
expect(() => {ms932Encoder.encode("\u67B5")}).toThrowError({name:"TypeError",message:"EncodingError U+67B5"});
expect([...ms932Encoder.encode("架枷枸枹")].join(",")).toBe("137,203,158,103,158,109,158,115"); // U+67B6
expect(() => {ms932Encoder.encode("\u67BA")}).toThrowError({name:"TypeError",message:"EncodingError U+67BA"});
expect([...ms932Encoder.encode("枻")].join(",")).toBe("250,226"); // U+67BB
expect(() => {ms932Encoder.encode("\u67BC")}).toThrowError({name:"TypeError",message:"EncodingError U+67BC"});
expect(() => {ms932Encoder.encode("\u67BD")}).toThrowError({name:"TypeError",message:"EncodingError U+67BD"});
expect(() => {ms932Encoder.encode("\u67BE")}).toThrowError({name:"TypeError",message:"EncodingError U+67BE"});
expect(() => {ms932Encoder.encode("\u67BF")}).toThrowError({name:"TypeError",message:"EncodingError U+67BF"});
expect([...ms932Encoder.encode("柀柁")].join(",")).toBe("250,228,145,198"); // U+67C0
expect(() => {ms932Encoder.encode("\u67C2")}).toThrowError({name:"TypeError",message:"EncodingError U+67C2"});
expect(() => {ms932Encoder.encode("\u67C3")}).toThrowError({name:"TypeError",message:"EncodingError U+67C3"});
expect([...ms932Encoder.encode("柄")].join(",")).toBe("149,191"); // U+67C4
expect(() => {ms932Encoder.encode("\u67C5")}).toThrowError({name:"TypeError",message:"EncodingError U+67C5"});
expect([...ms932Encoder.encode("柆")].join(",")).toBe("158,117"); // U+67C6
expect(() => {ms932Encoder.encode("\u67C7")}).toThrowError({name:"TypeError",message:"EncodingError U+67C7"});
expect(() => {ms932Encoder.encode("\u67C8")}).toThrowError({name:"TypeError",message:"EncodingError U+67C8"});
expect(() => {ms932Encoder.encode("\u67C9")}).toThrowError({name:"TypeError",message:"EncodingError U+67C9"});
expect([...ms932Encoder.encode("柊")].join(",")).toBe("149,65"); // U+67CA
expect(() => {ms932Encoder.encode("\u67CB")}).toThrowError({name:"TypeError",message:"EncodingError U+67CB"});
expect(() => {ms932Encoder.encode("\u67CC")}).toThrowError({name:"TypeError",message:"EncodingError U+67CC"});
expect(() => {ms932Encoder.encode("\u67CD")}).toThrowError({name:"TypeError",message:"EncodingError U+67CD"});
expect([...ms932Encoder.encode("柎柏某柑")].join(",")).toBe("158,116,148,144,150,94,138,185"); // U+67CE
expect(() => {ms932Encoder.encode("\u67D2")}).toThrowError({name:"TypeError",message:"EncodingError U+67D2"});
expect([...ms932Encoder.encode("染柔")].join(",")).toBe("144,245,143,95"); // U+67D3
expect(() => {ms932Encoder.encode("\u67D5")}).toThrowError({name:"TypeError",message:"EncodingError U+67D5"});
expect(() => {ms932Encoder.encode("\u67D6")}).toThrowError({name:"TypeError",message:"EncodingError U+67D6"});
expect(() => {ms932Encoder.encode("\u67D7")}).toThrowError({name:"TypeError",message:"EncodingError U+67D7"});
expect([...ms932Encoder.encode("柘")].join(",")).toBe("146,209"); // U+67D8
expect(() => {ms932Encoder.encode("\u67D9")}).toThrowError({name:"TypeError",message:"EncodingError U+67D9"});
expect([...ms932Encoder.encode("柚")].join(",")).toBe("151,77"); // U+67DA
expect(() => {ms932Encoder.encode("\u67DB")}).toThrowError({name:"TypeError",message:"EncodingError U+67DB"});
expect(() => {ms932Encoder.encode("\u67DC")}).toThrowError({name:"TypeError",message:"EncodingError U+67DC"});
expect([...ms932Encoder.encode("柝柞")].join(",")).toBe("158,112,158,111"); // U+67DD
expect(() => {ms932Encoder.encode("\u67DF")}).toThrowError({name:"TypeError",message:"EncodingError U+67DF"});
expect(() => {ms932Encoder.encode("\u67E0")}).toThrowError({name:"TypeError",message:"EncodingError U+67E0"});
expect(() => {ms932Encoder.encode("\u67E1")}).toThrowError({name:"TypeError",message:"EncodingError U+67E1"});
expect([...ms932Encoder.encode("柢")].join(",")).toBe("158,113"); // U+67E2
expect(() => {ms932Encoder.encode("\u67E3")}).toThrowError({name:"TypeError",message:"EncodingError U+67E3"});
expect([...ms932Encoder.encode("柤")].join(",")).toBe("158,110"); // U+67E4
expect(() => {ms932Encoder.encode("\u67E5")}).toThrowError({name:"TypeError",message:"EncodingError U+67E5"});
expect(() => {ms932Encoder.encode("\u67E6")}).toThrowError({name:"TypeError",message:"EncodingError U+67E6"});
expect([...ms932Encoder.encode("柧")].join(",")).toBe("158,118"); // U+67E7
expect(() => {ms932Encoder.encode("\u67E8")}).toThrowError({name:"TypeError",message:"EncodingError U+67E8"});
expect([...ms932Encoder.encode("柩")].join(",")).toBe("158,108"); // U+67E9
expect(() => {ms932Encoder.encode("\u67EA")}).toThrowError({name:"TypeError",message:"EncodingError U+67EA"});
expect(() => {ms932Encoder.encode("\u67EB")}).toThrowError({name:"TypeError",message:"EncodingError U+67EB"});
expect([...ms932Encoder.encode("柬")].join(",")).toBe("158,106"); // U+67EC
expect(() => {ms932Encoder.encode("\u67ED")}).toThrowError({name:"TypeError",message:"EncodingError U+67ED"});
expect([...ms932Encoder.encode("柮柯")].join(",")).toBe("158,114,158,104"); // U+67EE
expect(() => {ms932Encoder.encode("\u67F0")}).toThrowError({name:"TypeError",message:"EncodingError U+67F0"});
expect([...ms932Encoder.encode("柱")].join(",")).toBe("146,140"); // U+67F1
expect(() => {ms932Encoder.encode("\u67F2")}).toThrowError({name:"TypeError",message:"EncodingError U+67F2"});
expect([...ms932Encoder.encode("柳柴柵")].join(",")).toBe("150,246,142,196,141,242"); // U+67F3
expect(() => {ms932Encoder.encode("\u67F6")}).toThrowError({name:"TypeError",message:"EncodingError U+67F6"});
expect(() => {ms932Encoder.encode("\u67F7")}).toThrowError({name:"TypeError",message:"EncodingError U+67F7"});
expect(() => {ms932Encoder.encode("\u67F8")}).toThrowError({name:"TypeError",message:"EncodingError U+67F8"});
expect(() => {ms932Encoder.encode("\u67F9")}).toThrowError({name:"TypeError",message:"EncodingError U+67F9"});
expect(() => {ms932Encoder.encode("\u67FA")}).toThrowError({name:"TypeError",message:"EncodingError U+67FA"});
expect([...ms932Encoder.encode("査")].join(",")).toBe("141,184"); // U+67FB
expect(() => {ms932Encoder.encode("\u67FC")}).toThrowError({name:"TypeError",message:"EncodingError U+67FC"});
expect(() => {ms932Encoder.encode("\u67FD")}).toThrowError({name:"TypeError",message:"EncodingError U+67FD"});
expect([...ms932Encoder.encode("柾柿")].join(",")).toBe("150,143,138,96"); // U+67FE
expect(() => {ms932Encoder.encode("\u6800")}).toThrowError({name:"TypeError",message:"EncodingError U+6800"});
expect([...ms932Encoder.encode("栁栂栃栄")].join(",")).toBe("250,229,146,204,147,200,137,104"); // U+6801
expect(() => {ms932Encoder.encode("\u6805")}).toThrowError({name:"TypeError",message:"EncodingError U+6805"});
expect(() => {ms932Encoder.encode("\u6806")}).toThrowError({name:"TypeError",message:"EncodingError U+6806"});
expect(() => {ms932Encoder.encode("\u6807")}).toThrowError({name:"TypeError",message:"EncodingError U+6807"});
expect(() => {ms932Encoder.encode("\u6808")}).toThrowError({name:"TypeError",message:"EncodingError U+6808"});
expect(() => {ms932Encoder.encode("\u6809")}).toThrowError({name:"TypeError",message:"EncodingError U+6809"});
expect(() => {ms932Encoder.encode("\u680A")}).toThrowError({name:"TypeError",message:"EncodingError U+680A"});
expect(() => {ms932Encoder.encode("\u680B")}).toThrowError({name:"TypeError",message:"EncodingError U+680B"});
expect(() => {ms932Encoder.encode("\u680C")}).toThrowError({name:"TypeError",message:"EncodingError U+680C"});
expect(() => {ms932Encoder.encode("\u680D")}).toThrowError({name:"TypeError",message:"EncodingError U+680D"});
expect(() => {ms932Encoder.encode("\u680E")}).toThrowError({name:"TypeError",message:"EncodingError U+680E"});
expect(() => {ms932Encoder.encode("\u680F")}).toThrowError({name:"TypeError",message:"EncodingError U+680F"});
expect(() => {ms932Encoder.encode("\u6810")}).toThrowError({name:"TypeError",message:"EncodingError U+6810"});
expect(() => {ms932Encoder.encode("\u6811")}).toThrowError({name:"TypeError",message:"EncodingError U+6811"});
expect(() => {ms932Encoder.encode("\u6812")}).toThrowError({name:"TypeError",message:"EncodingError U+6812"});
expect([...ms932Encoder.encode("栓")].join(",")).toBe("144,240"); // U+6813
expect(() => {ms932Encoder.encode("\u6814")}).toThrowError({name:"TypeError",message:"EncodingError U+6814"});
expect(() => {ms932Encoder.encode("\u6815")}).toThrowError({name:"TypeError",message:"EncodingError U+6815"});
expect([...ms932Encoder.encode("栖栗")].join(",")).toBe("144,178,140,73"); // U+6816
expect(() => {ms932Encoder.encode("\u6818")}).toThrowError({name:"TypeError",message:"EncodingError U+6818"});
expect(() => {ms932Encoder.encode("\u6819")}).toThrowError({name:"TypeError",message:"EncodingError U+6819"});
expect(() => {ms932Encoder.encode("\u681A")}).toThrowError({name:"TypeError",message:"EncodingError U+681A"});
expect(() => {ms932Encoder.encode("\u681B")}).toThrowError({name:"TypeError",message:"EncodingError U+681B"});
expect(() => {ms932Encoder.encode("\u681C")}).toThrowError({name:"TypeError",message:"EncodingError U+681C"});
expect(() => {ms932Encoder.encode("\u681D")}).toThrowError({name:"TypeError",message:"EncodingError U+681D"});
expect([...ms932Encoder.encode("栞")].join(",")).toBe("158,120"); // U+681E
expect(() => {ms932Encoder.encode("\u681F")}).toThrowError({name:"TypeError",message:"EncodingError U+681F"});
expect(() => {ms932Encoder.encode("\u6820")}).toThrowError({name:"TypeError",message:"EncodingError U+6820"});
expect([...ms932Encoder.encode("校栢")].join(",")).toBe("141,90,138,156"); // U+6821
expect(() => {ms932Encoder.encode("\u6823")}).toThrowError({name:"TypeError",message:"EncodingError U+6823"});
expect(() => {ms932Encoder.encode("\u6824")}).toThrowError({name:"TypeError",message:"EncodingError U+6824"});
expect(() => {ms932Encoder.encode("\u6825")}).toThrowError({name:"TypeError",message:"EncodingError U+6825"});
expect(() => {ms932Encoder.encode("\u6826")}).toThrowError({name:"TypeError",message:"EncodingError U+6826"});
expect(() => {ms932Encoder.encode("\u6827")}).toThrowError({name:"TypeError",message:"EncodingError U+6827"});
expect(() => {ms932Encoder.encode("\u6828")}).toThrowError({name:"TypeError",message:"EncodingError U+6828"});
expect([...ms932Encoder.encode("栩株栫")].join(",")).toBe("158,122,138,148,158,129"); // U+6829
expect(() => {ms932Encoder.encode("\u682C")}).toThrowError({name:"TypeError",message:"EncodingError U+682C"});
expect(() => {ms932Encoder.encode("\u682D")}).toThrowError({name:"TypeError",message:"EncodingError U+682D"});
expect(() => {ms932Encoder.encode("\u682E")}).toThrowError({name:"TypeError",message:"EncodingError U+682E"});
expect(() => {ms932Encoder.encode("\u682F")}).toThrowError({name:"TypeError",message:"EncodingError U+682F"});
expect(() => {ms932Encoder.encode("\u6830")}).toThrowError({name:"TypeError",message:"EncodingError U+6830"});
expect(() => {ms932Encoder.encode("\u6831")}).toThrowError({name:"TypeError",message:"EncodingError U+6831"});
expect([...ms932Encoder.encode("栲")].join(",")).toBe("158,125"); // U+6832
expect(() => {ms932Encoder.encode("\u6833")}).toThrowError({name:"TypeError",message:"EncodingError U+6833"});
expect([...ms932Encoder.encode("栴")].join(",")).toBe("144,241"); // U+6834
expect(() => {ms932Encoder.encode("\u6835")}).toThrowError({name:"TypeError",message:"EncodingError U+6835"});
expect(() => {ms932Encoder.encode("\u6836")}).toThrowError({name:"TypeError",message:"EncodingError U+6836"});
expect(() => {ms932Encoder.encode("\u6837")}).toThrowError({name:"TypeError",message:"EncodingError U+6837"});
expect([...ms932Encoder.encode("核根")].join(",")).toBe("138,106,141,170"); // U+6838
expect(() => {ms932Encoder.encode("\u683A")}).toThrowError({name:"TypeError",message:"EncodingError U+683A"});
expect(() => {ms932Encoder.encode("\u683B")}).toThrowError({name:"TypeError",message:"EncodingError U+683B"});
expect([...ms932Encoder.encode("格栽")].join(",")).toBe("138,105,141,205"); // U+683C
expect(() => {ms932Encoder.encode("\u683E")}).toThrowError({name:"TypeError",message:"EncodingError U+683E"});
expect(() => {ms932Encoder.encode("\u683F")}).toThrowError({name:"TypeError",message:"EncodingError U+683F"});
expect([...ms932Encoder.encode("桀桁桂桃桄")].join(",")).toBe("158,123,140,133,140,106,147,141,250,230"); // U+6840
expect(() => {ms932Encoder.encode("\u6845")}).toThrowError({name:"TypeError",message:"EncodingError U+6845"});
expect([...ms932Encoder.encode("框")].join(",")).toBe("158,121"); // U+6846
expect(() => {ms932Encoder.encode("\u6847")}).toThrowError({name:"TypeError",message:"EncodingError U+6847"});
expect([...ms932Encoder.encode("案")].join(",")).toBe("136,196"); // U+6848
expect(() => {ms932Encoder.encode("\u6849")}).toThrowError({name:"TypeError",message:"EncodingError U+6849"});
expect(() => {ms932Encoder.encode("\u684A")}).toThrowError({name:"TypeError",message:"EncodingError U+684A"});
expect(() => {ms932Encoder.encode("\u684B")}).toThrowError({name:"TypeError",message:"EncodingError U+684B"});
expect(() => {ms932Encoder.encode("\u684C")}).toThrowError({name:"TypeError",message:"EncodingError U+684C"});
expect([...ms932Encoder.encode("桍桎")].join(",")).toBe("158,124,158,126"); // U+684D
expect(() => {ms932Encoder.encode("\u684F")}).toThrowError({name:"TypeError",message:"EncodingError U+684F"});
expect([...ms932Encoder.encode("桐桑桒桓桔")].join(",")).toBe("139,203,140,75,250,227,138,186,139,106"); // U+6850
expect(() => {ms932Encoder.encode("\u6855")}).toThrowError({name:"TypeError",message:"EncodingError U+6855"});
expect(() => {ms932Encoder.encode("\u6856")}).toThrowError({name:"TypeError",message:"EncodingError U+6856"});
expect(() => {ms932Encoder.encode("\u6857")}).toThrowError({name:"TypeError",message:"EncodingError U+6857"});
expect(() => {ms932Encoder.encode("\u6858")}).toThrowError({name:"TypeError",message:"EncodingError U+6858"});
expect([...ms932Encoder.encode("桙")].join(",")).toBe("158,130"); // U+6859
expect(() => {ms932Encoder.encode("\u685A")}).toThrowError({name:"TypeError",message:"EncodingError U+685A"});
expect(() => {ms932Encoder.encode("\u685B")}).toThrowError({name:"TypeError",message:"EncodingError U+685B"});
expect([...ms932Encoder.encode("桜桝")].join(",")).toBe("141,247,150,145"); // U+685C
expect(() => {ms932Encoder.encode("\u685E")}).toThrowError({name:"TypeError",message:"EncodingError U+685E"});
expect([...ms932Encoder.encode("桟")].join(",")).toBe("142,86"); // U+685F
expect(() => {ms932Encoder.encode("\u6860")}).toThrowError({name:"TypeError",message:"EncodingError U+6860"});
expect(() => {ms932Encoder.encode("\u6861")}).toThrowError({name:"TypeError",message:"EncodingError U+6861"});
expect(() => {ms932Encoder.encode("\u6862")}).toThrowError({name:"TypeError",message:"EncodingError U+6862"});
expect([...ms932Encoder.encode("档")].join(",")).toBe("158,131"); // U+6863
expect(() => {ms932Encoder.encode("\u6864")}).toThrowError({name:"TypeError",message:"EncodingError U+6864"});
expect(() => {ms932Encoder.encode("\u6865")}).toThrowError({name:"TypeError",message:"EncodingError U+6865"});
expect(() => {ms932Encoder.encode("\u6866")}).toThrowError({name:"TypeError",message:"EncodingError U+6866"});
expect([...ms932Encoder.encode("桧")].join(",")).toBe("149,79"); // U+6867
expect(() => {ms932Encoder.encode("\u6868")}).toThrowError({name:"TypeError",message:"EncodingError U+6868"});
expect(() => {ms932Encoder.encode("\u6869")}).toThrowError({name:"TypeError",message:"EncodingError U+6869"});
expect(() => {ms932Encoder.encode("\u686A")}).toThrowError({name:"TypeError",message:"EncodingError U+686A"});
expect(() => {ms932Encoder.encode("\u686B")}).toThrowError({name:"TypeError",message:"EncodingError U+686B"});
expect(() => {ms932Encoder.encode("\u686C")}).toThrowError({name:"TypeError",message:"EncodingError U+686C"});
expect(() => {ms932Encoder.encode("\u686D")}).toThrowError({name:"TypeError",message:"EncodingError U+686D"});
expect(() => {ms932Encoder.encode("\u686E")}).toThrowError({name:"TypeError",message:"EncodingError U+686E"});
expect(() => {ms932Encoder.encode("\u686F")}).toThrowError({name:"TypeError",message:"EncodingError U+686F"});
expect(() => {ms932Encoder.encode("\u6870")}).toThrowError({name:"TypeError",message:"EncodingError U+6870"});
expect(() => {ms932Encoder.encode("\u6871")}).toThrowError({name:"TypeError",message:"EncodingError U+6871"});
expect(() => {ms932Encoder.encode("\u6872")}).toThrowError({name:"TypeError",message:"EncodingError U+6872"});
expect(() => {ms932Encoder.encode("\u6873")}).toThrowError({name:"TypeError",message:"EncodingError U+6873"});
expect([...ms932Encoder.encode("桴")].join(",")).toBe("158,143"); // U+6874
expect(() => {ms932Encoder.encode("\u6875")}).toThrowError({name:"TypeError",message:"EncodingError U+6875"});
expect([...ms932Encoder.encode("桶桷")].join(",")).toBe("137,177,158,132"); // U+6876
expect(() => {ms932Encoder.encode("\u6878")}).toThrowError({name:"TypeError",message:"EncodingError U+6878"});
expect(() => {ms932Encoder.encode("\u6879")}).toThrowError({name:"TypeError",message:"EncodingError U+6879"});
expect(() => {ms932Encoder.encode("\u687A")}).toThrowError({name:"TypeError",message:"EncodingError U+687A"});
expect(() => {ms932Encoder.encode("\u687B")}).toThrowError({name:"TypeError",message:"EncodingError U+687B"});
expect(() => {ms932Encoder.encode("\u687C")}).toThrowError({name:"TypeError",message:"EncodingError U+687C"});
expect(() => {ms932Encoder.encode("\u687D")}).toThrowError({name:"TypeError",message:"EncodingError U+687D"});
expect([...ms932Encoder.encode("桾桿")].join(",")).toBe("158,149,158,133"); // U+687E
expect(() => {ms932Encoder.encode("\u6880")}).toThrowError({name:"TypeError",message:"EncodingError U+6880"});
expect([...ms932Encoder.encode("梁")].join(",")).toBe("151,192"); // U+6881
expect(() => {ms932Encoder.encode("\u6882")}).toThrowError({name:"TypeError",message:"EncodingError U+6882"});
expect([...ms932Encoder.encode("梃")].join(",")).toBe("158,140"); // U+6883
expect(() => {ms932Encoder.encode("\u6884")}).toThrowError({name:"TypeError",message:"EncodingError U+6884"});
expect([...ms932Encoder.encode("梅")].join(",")).toBe("148,126"); // U+6885
expect(() => {ms932Encoder.encode("\u6886")}).toThrowError({name:"TypeError",message:"EncodingError U+6886"});
expect(() => {ms932Encoder.encode("\u6887")}).toThrowError({name:"TypeError",message:"EncodingError U+6887"});
expect(() => {ms932Encoder.encode("\u6888")}).toThrowError({name:"TypeError",message:"EncodingError U+6888"});
expect(() => {ms932Encoder.encode("\u6889")}).toThrowError({name:"TypeError",message:"EncodingError U+6889"});
expect(() => {ms932Encoder.encode("\u688A")}).toThrowError({name:"TypeError",message:"EncodingError U+688A"});
expect(() => {ms932Encoder.encode("\u688B")}).toThrowError({name:"TypeError",message:"EncodingError U+688B"});
expect(() => {ms932Encoder.encode("\u688C")}).toThrowError({name:"TypeError",message:"EncodingError U+688C"});
expect([...ms932Encoder.encode("梍")].join(",")).toBe("158,148"); // U+688D
expect(() => {ms932Encoder.encode("\u688E")}).toThrowError({name:"TypeError",message:"EncodingError U+688E"});
expect([...ms932Encoder.encode("梏")].join(",")).toBe("158,135"); // U+688F
expect(() => {ms932Encoder.encode("\u6890")}).toThrowError({name:"TypeError",message:"EncodingError U+6890"});
expect(() => {ms932Encoder.encode("\u6891")}).toThrowError({name:"TypeError",message:"EncodingError U+6891"});
expect(() => {ms932Encoder.encode("\u6892")}).toThrowError({name:"TypeError",message:"EncodingError U+6892"});
expect([...ms932Encoder.encode("梓梔")].join(",")).toBe("136,178,158,137"); // U+6893
expect(() => {ms932Encoder.encode("\u6895")}).toThrowError({name:"TypeError",message:"EncodingError U+6895"});
expect(() => {ms932Encoder.encode("\u6896")}).toThrowError({name:"TypeError",message:"EncodingError U+6896"});
expect([...ms932Encoder.encode("梗")].join(",")).toBe("141,91"); // U+6897
expect(() => {ms932Encoder.encode("\u6898")}).toThrowError({name:"TypeError",message:"EncodingError U+6898"});
expect(() => {ms932Encoder.encode("\u6899")}).toThrowError({name:"TypeError",message:"EncodingError U+6899"});
expect(() => {ms932Encoder.encode("\u689A")}).toThrowError({name:"TypeError",message:"EncodingError U+689A"});
expect([...ms932Encoder.encode("梛")].join(",")).toBe("158,139"); // U+689B
expect(() => {ms932Encoder.encode("\u689C")}).toThrowError({name:"TypeError",message:"EncodingError U+689C"});
expect([...ms932Encoder.encode("條")].join(",")).toBe("158,138"); // U+689D
expect(() => {ms932Encoder.encode("\u689E")}).toThrowError({name:"TypeError",message:"EncodingError U+689E"});
expect([...ms932Encoder.encode("梟梠")].join(",")).toBe("158,134,158,145"); // U+689F
expect(() => {ms932Encoder.encode("\u68A1")}).toThrowError({name:"TypeError",message:"EncodingError U+68A1"});
expect([...ms932Encoder.encode("梢")].join(",")).toBe("143,189"); // U+68A2
expect(() => {ms932Encoder.encode("\u68A3")}).toThrowError({name:"TypeError",message:"EncodingError U+68A3"});
expect(() => {ms932Encoder.encode("\u68A4")}).toThrowError({name:"TypeError",message:"EncodingError U+68A4"});
expect(() => {ms932Encoder.encode("\u68A5")}).toThrowError({name:"TypeError",message:"EncodingError U+68A5"});
expect([...ms932Encoder.encode("梦梧梨")].join(",")).toBe("154,235,140,230,151,156"); // U+68A6
expect(() => {ms932Encoder.encode("\u68A9")}).toThrowError({name:"TypeError",message:"EncodingError U+68A9"});
expect(() => {ms932Encoder.encode("\u68AA")}).toThrowError({name:"TypeError",message:"EncodingError U+68AA"});
expect(() => {ms932Encoder.encode("\u68AB")}).toThrowError({name:"TypeError",message:"EncodingError U+68AB"});
expect(() => {ms932Encoder.encode("\u68AC")}).toThrowError({name:"TypeError",message:"EncodingError U+68AC"});
expect([...ms932Encoder.encode("梭")].join(",")).toBe("158,136"); // U+68AD
expect(() => {ms932Encoder.encode("\u68AE")}).toThrowError({name:"TypeError",message:"EncodingError U+68AE"});
expect([...ms932Encoder.encode("梯械梱")].join(",")).toBe("146,242,138,66,141,171"); // U+68AF
expect(() => {ms932Encoder.encode("\u68B2")}).toThrowError({name:"TypeError",message:"EncodingError U+68B2"});
expect([...ms932Encoder.encode("梳")].join(",")).toBe("158,128"); // U+68B3
expect(() => {ms932Encoder.encode("\u68B4")}).toThrowError({name:"TypeError",message:"EncodingError U+68B4"});
expect([...ms932Encoder.encode("梵梶")].join(",")).toBe("158,144,138,129"); // U+68B5
expect(() => {ms932Encoder.encode("\u68B7")}).toThrowError({name:"TypeError",message:"EncodingError U+68B7"});
expect(() => {ms932Encoder.encode("\u68B8")}).toThrowError({name:"TypeError",message:"EncodingError U+68B8"});
expect([...ms932Encoder.encode("梹梺")].join(",")).toBe("158,142,158,146"); // U+68B9
expect(() => {ms932Encoder.encode("\u68BB")}).toThrowError({name:"TypeError",message:"EncodingError U+68BB"});
expect([...ms932Encoder.encode("梼")].join(",")).toBe("147,142"); // U+68BC
expect(() => {ms932Encoder.encode("\u68BD")}).toThrowError({name:"TypeError",message:"EncodingError U+68BD"});
expect(() => {ms932Encoder.encode("\u68BE")}).toThrowError({name:"TypeError",message:"EncodingError U+68BE"});
expect(() => {ms932Encoder.encode("\u68BF")}).toThrowError({name:"TypeError",message:"EncodingError U+68BF"});
expect(() => {ms932Encoder.encode("\u68C0")}).toThrowError({name:"TypeError",message:"EncodingError U+68C0"});
expect(() => {ms932Encoder.encode("\u68C1")}).toThrowError({name:"TypeError",message:"EncodingError U+68C1"});
expect(() => {ms932Encoder.encode("\u68C2")}).toThrowError({name:"TypeError",message:"EncodingError U+68C2"});
expect(() => {ms932Encoder.encode("\u68C3")}).toThrowError({name:"TypeError",message:"EncodingError U+68C3"});
expect([...ms932Encoder.encode("棄")].join(",")).toBe("138,252"); // U+68C4
expect(() => {ms932Encoder.encode("\u68C5")}).toThrowError({name:"TypeError",message:"EncodingError U+68C5"});
expect([...ms932Encoder.encode("棆")].join(",")).toBe("158,176"); // U+68C6
expect(() => {ms932Encoder.encode("\u68C7")}).toThrowError({name:"TypeError",message:"EncodingError U+68C7"});
expect([...ms932Encoder.encode("棈棉棊棋")].join(",")).toBe("250,100,150,199,158,151,138,251"); // U+68C8
expect(() => {ms932Encoder.encode("\u68CC")}).toThrowError({name:"TypeError",message:"EncodingError U+68CC"});
expect([...ms932Encoder.encode("棍")].join(",")).toBe("158,158"); // U+68CD
expect(() => {ms932Encoder.encode("\u68CE")}).toThrowError({name:"TypeError",message:"EncodingError U+68CE"});
expect([...ms932Encoder.encode("棏")].join(",")).toBe("250,231"); // U+68CF
expect(() => {ms932Encoder.encode("\u68D0")}).toThrowError({name:"TypeError",message:"EncodingError U+68D0"});
expect(() => {ms932Encoder.encode("\u68D1")}).toThrowError({name:"TypeError",message:"EncodingError U+68D1"});
expect([...ms932Encoder.encode("棒")].join(",")).toBe("150,95"); // U+68D2
expect(() => {ms932Encoder.encode("\u68D3")}).toThrowError({name:"TypeError",message:"EncodingError U+68D3"});
expect([...ms932Encoder.encode("棔棕")].join(",")).toBe("158,159,158,161"); // U+68D4
expect(() => {ms932Encoder.encode("\u68D6")}).toThrowError({name:"TypeError",message:"EncodingError U+68D6"});
expect([...ms932Encoder.encode("棗棘")].join(",")).toBe("158,165,158,153"); // U+68D7
expect(() => {ms932Encoder.encode("\u68D9")}).toThrowError({name:"TypeError",message:"EncodingError U+68D9"});
expect([...ms932Encoder.encode("棚")].join(",")).toBe("146,73"); // U+68DA
expect(() => {ms932Encoder.encode("\u68DB")}).toThrowError({name:"TypeError",message:"EncodingError U+68DB"});
expect(() => {ms932Encoder.encode("\u68DC")}).toThrowError({name:"TypeError",message:"EncodingError U+68DC"});
expect(() => {ms932Encoder.encode("\u68DD")}).toThrowError({name:"TypeError",message:"EncodingError U+68DD"});
expect(() => {ms932Encoder.encode("\u68DE")}).toThrowError({name:"TypeError",message:"EncodingError U+68DE"});
expect([...ms932Encoder.encode("棟棠棡")].join(",")).toBe("147,143,158,169,158,156"); // U+68DF
expect(() => {ms932Encoder.encode("\u68E2")}).toThrowError({name:"TypeError",message:"EncodingError U+68E2"});
expect([...ms932Encoder.encode("棣")].join(",")).toBe("158,166"); // U+68E3
expect(() => {ms932Encoder.encode("\u68E4")}).toThrowError({name:"TypeError",message:"EncodingError U+68E4"});
expect(() => {ms932Encoder.encode("\u68E5")}).toThrowError({name:"TypeError",message:"EncodingError U+68E5"});
expect(() => {ms932Encoder.encode("\u68E6")}).toThrowError({name:"TypeError",message:"EncodingError U+68E6"});
expect([...ms932Encoder.encode("棧")].join(",")).toBe("158,160"); // U+68E7
expect(() => {ms932Encoder.encode("\u68E8")}).toThrowError({name:"TypeError",message:"EncodingError U+68E8"});
expect(() => {ms932Encoder.encode("\u68E9")}).toThrowError({name:"TypeError",message:"EncodingError U+68E9"});
expect(() => {ms932Encoder.encode("\u68EA")}).toThrowError({name:"TypeError",message:"EncodingError U+68EA"});
expect(() => {ms932Encoder.encode("\u68EB")}).toThrowError({name:"TypeError",message:"EncodingError U+68EB"});
expect(() => {ms932Encoder.encode("\u68EC")}).toThrowError({name:"TypeError",message:"EncodingError U+68EC"});
expect(() => {ms932Encoder.encode("\u68ED")}).toThrowError({name:"TypeError",message:"EncodingError U+68ED"});
expect([...ms932Encoder.encode("森棯")].join(",")).toBe("144,88,158,170"); // U+68EE
expect(() => {ms932Encoder.encode("\u68F0")}).toThrowError({name:"TypeError",message:"EncodingError U+68F0"});
expect(() => {ms932Encoder.encode("\u68F1")}).toThrowError({name:"TypeError",message:"EncodingError U+68F1"});
expect([...ms932Encoder.encode("棲")].join(",")).toBe("144,177"); // U+68F2
expect(() => {ms932Encoder.encode("\u68F3")}).toThrowError({name:"TypeError",message:"EncodingError U+68F3"});
expect(() => {ms932Encoder.encode("\u68F4")}).toThrowError({name:"TypeError",message:"EncodingError U+68F4"});
expect(() => {ms932Encoder.encode("\u68F5")}).toThrowError({name:"TypeError",message:"EncodingError U+68F5"});
expect(() => {ms932Encoder.encode("\u68F6")}).toThrowError({name:"TypeError",message:"EncodingError U+68F6"});
expect(() => {ms932Encoder.encode("\u68F7")}).toThrowError({name:"TypeError",message:"EncodingError U+68F7"});
expect(() => {ms932Encoder.encode("\u68F8")}).toThrowError({name:"TypeError",message:"EncodingError U+68F8"});
expect([...ms932Encoder.encode("棹棺")].join(",")).toBe("158,168,138,187"); // U+68F9
expect(() => {ms932Encoder.encode("\u68FB")}).toThrowError({name:"TypeError",message:"EncodingError U+68FB"});
expect(() => {ms932Encoder.encode("\u68FC")}).toThrowError({name:"TypeError",message:"EncodingError U+68FC"});
expect(() => {ms932Encoder.encode("\u68FD")}).toThrowError({name:"TypeError",message:"EncodingError U+68FD"});
expect(() => {ms932Encoder.encode("\u68FE")}).toThrowError({name:"TypeError",message:"EncodingError U+68FE"});
expect(() => {ms932Encoder.encode("\u68FF")}).toThrowError({name:"TypeError",message:"EncodingError U+68FF"});
expect([...ms932Encoder.encode("椀椁")].join(",")).toBe("152,111,158,150"); // U+6900
expect(() => {ms932Encoder.encode("\u6902")}).toThrowError({name:"TypeError",message:"EncodingError U+6902"});
expect(() => {ms932Encoder.encode("\u6903")}).toThrowError({name:"TypeError",message:"EncodingError U+6903"});
expect([...ms932Encoder.encode("椄椅")].join(",")).toBe("158,164,136,214"); // U+6904
expect(() => {ms932Encoder.encode("\u6906")}).toThrowError({name:"TypeError",message:"EncodingError U+6906"});
expect(() => {ms932Encoder.encode("\u6907")}).toThrowError({name:"TypeError",message:"EncodingError U+6907"});
expect([...ms932Encoder.encode("椈")].join(",")).toBe("158,152"); // U+6908
expect(() => {ms932Encoder.encode("\u6909")}).toThrowError({name:"TypeError",message:"EncodingError U+6909"});
expect(() => {ms932Encoder.encode("\u690A")}).toThrowError({name:"TypeError",message:"EncodingError U+690A"});
expect([...ms932Encoder.encode("椋椌植椎椏")].join(",")).toBe("150,184,158,157,144,65,146,197,158,147"); // U+690B
expect(() => {ms932Encoder.encode("\u6910")}).toThrowError({name:"TypeError",message:"EncodingError U+6910"});
expect(() => {ms932Encoder.encode("\u6911")}).toThrowError({name:"TypeError",message:"EncodingError U+6911"});
expect([...ms932Encoder.encode("椒")].join(",")).toBe("158,163"); // U+6912
expect(() => {ms932Encoder.encode("\u6913")}).toThrowError({name:"TypeError",message:"EncodingError U+6913"});
expect(() => {ms932Encoder.encode("\u6914")}).toThrowError({name:"TypeError",message:"EncodingError U+6914"});
expect(() => {ms932Encoder.encode("\u6915")}).toThrowError({name:"TypeError",message:"EncodingError U+6915"});
expect(() => {ms932Encoder.encode("\u6916")}).toThrowError({name:"TypeError",message:"EncodingError U+6916"});
expect(() => {ms932Encoder.encode("\u6917")}).toThrowError({name:"TypeError",message:"EncodingError U+6917"});
expect(() => {ms932Encoder.encode("\u6918")}).toThrowError({name:"TypeError",message:"EncodingError U+6918"});
expect([...ms932Encoder.encode("椙椚椛検")].join(",")).toBe("144,154,158,173,138,145,140,159"); // U+6919
expect(() => {ms932Encoder.encode("\u691D")}).toThrowError({name:"TypeError",message:"EncodingError U+691D"});
expect(() => {ms932Encoder.encode("\u691E")}).toThrowError({name:"TypeError",message:"EncodingError U+691E"});
expect(() => {ms932Encoder.encode("\u691F")}).toThrowError({name:"TypeError",message:"EncodingError U+691F"});
expect(() => {ms932Encoder.encode("\u6920")}).toThrowError({name:"TypeError",message:"EncodingError U+6920"});
expect([...ms932Encoder.encode("椡椢椣")].join(",")).toBe("158,175,158,154,158,174"); // U+6921
expect(() => {ms932Encoder.encode("\u6924")}).toThrowError({name:"TypeError",message:"EncodingError U+6924"});
expect([...ms932Encoder.encode("椥椦")].join(",")).toBe("158,167,158,155"); // U+6925
expect(() => {ms932Encoder.encode("\u6927")}).toThrowError({name:"TypeError",message:"EncodingError U+6927"});
expect([...ms932Encoder.encode("椨")].join(",")).toBe("158,171"); // U+6928
expect(() => {ms932Encoder.encode("\u6929")}).toThrowError({name:"TypeError",message:"EncodingError U+6929"});
expect([...ms932Encoder.encode("椪")].join(",")).toBe("158,172"); // U+692A
expect(() => {ms932Encoder.encode("\u692B")}).toThrowError({name:"TypeError",message:"EncodingError U+692B"});
expect(() => {ms932Encoder.encode("\u692C")}).toThrowError({name:"TypeError",message:"EncodingError U+692C"});
expect(() => {ms932Encoder.encode("\u692D")}).toThrowError({name:"TypeError",message:"EncodingError U+692D"});
expect(() => {ms932Encoder.encode("\u692E")}).toThrowError({name:"TypeError",message:"EncodingError U+692E"});
expect(() => {ms932Encoder.encode("\u692F")}).toThrowError({name:"TypeError",message:"EncodingError U+692F"});
expect([...ms932Encoder.encode("椰")].join(",")).toBe("158,189"); // U+6930
expect(() => {ms932Encoder.encode("\u6931")}).toThrowError({name:"TypeError",message:"EncodingError U+6931"});
expect(() => {ms932Encoder.encode("\u6932")}).toThrowError({name:"TypeError",message:"EncodingError U+6932"});
expect(() => {ms932Encoder.encode("\u6933")}).toThrowError({name:"TypeError",message:"EncodingError U+6933"});
expect([...ms932Encoder.encode("椴")].join(",")).toBe("147,204"); // U+6934
expect(() => {ms932Encoder.encode("\u6935")}).toThrowError({name:"TypeError",message:"EncodingError U+6935"});
expect([...ms932Encoder.encode("椶")].join(",")).toBe("158,162"); // U+6936
expect(() => {ms932Encoder.encode("\u6937")}).toThrowError({name:"TypeError",message:"EncodingError U+6937"});
expect(() => {ms932Encoder.encode("\u6938")}).toThrowError({name:"TypeError",message:"EncodingError U+6938"});
expect([...ms932Encoder.encode("椹")].join(",")).toBe("158,185"); // U+6939
expect(() => {ms932Encoder.encode("\u693A")}).toThrowError({name:"TypeError",message:"EncodingError U+693A"});
expect(() => {ms932Encoder.encode("\u693B")}).toThrowError({name:"TypeError",message:"EncodingError U+693B"});
expect(() => {ms932Encoder.encode("\u693C")}).toThrowError({name:"TypeError",message:"EncodingError U+693C"});
expect([...ms932Encoder.encode("椽")].join(",")).toBe("158,187"); // U+693D
expect(() => {ms932Encoder.encode("\u693E")}).toThrowError({name:"TypeError",message:"EncodingError U+693E"});
expect([...ms932Encoder.encode("椿")].join(",")).toBe("146,214"); // U+693F
expect(() => {ms932Encoder.encode("\u6940")}).toThrowError({name:"TypeError",message:"EncodingError U+6940"});
expect(() => {ms932Encoder.encode("\u6941")}).toThrowError({name:"TypeError",message:"EncodingError U+6941"});
expect(() => {ms932Encoder.encode("\u6942")}).toThrowError({name:"TypeError",message:"EncodingError U+6942"});
expect(() => {ms932Encoder.encode("\u6943")}).toThrowError({name:"TypeError",message:"EncodingError U+6943"});
expect(() => {ms932Encoder.encode("\u6944")}).toThrowError({name:"TypeError",message:"EncodingError U+6944"});
expect(() => {ms932Encoder.encode("\u6945")}).toThrowError({name:"TypeError",message:"EncodingError U+6945"});
expect(() => {ms932Encoder.encode("\u6946")}).toThrowError({name:"TypeError",message:"EncodingError U+6946"});
expect(() => {ms932Encoder.encode("\u6947")}).toThrowError({name:"TypeError",message:"EncodingError U+6947"});
expect(() => {ms932Encoder.encode("\u6948")}).toThrowError({name:"TypeError",message:"EncodingError U+6948"});
expect(() => {ms932Encoder.encode("\u6949")}).toThrowError({name:"TypeError",message:"EncodingError U+6949"});
expect([...ms932Encoder.encode("楊")].join(",")).toBe("151,107"); // U+694A
expect(() => {ms932Encoder.encode("\u694B")}).toThrowError({name:"TypeError",message:"EncodingError U+694B"});
expect(() => {ms932Encoder.encode("\u694C")}).toThrowError({name:"TypeError",message:"EncodingError U+694C"});
expect(() => {ms932Encoder.encode("\u694D")}).toThrowError({name:"TypeError",message:"EncodingError U+694D"});
expect(() => {ms932Encoder.encode("\u694E")}).toThrowError({name:"TypeError",message:"EncodingError U+694E"});
expect(() => {ms932Encoder.encode("\u694F")}).toThrowError({name:"TypeError",message:"EncodingError U+694F"});
expect(() => {ms932Encoder.encode("\u6950")}).toThrowError({name:"TypeError",message:"EncodingError U+6950"});
expect(() => {ms932Encoder.encode("\u6951")}).toThrowError({name:"TypeError",message:"EncodingError U+6951"});
expect(() => {ms932Encoder.encode("\u6952")}).toThrowError({name:"TypeError",message:"EncodingError U+6952"});
expect([...ms932Encoder.encode("楓楔楕")].join(",")).toBe("149,150,158,182,145,200"); // U+6953
expect(() => {ms932Encoder.encode("\u6956")}).toThrowError({name:"TypeError",message:"EncodingError U+6956"});
expect(() => {ms932Encoder.encode("\u6957")}).toThrowError({name:"TypeError",message:"EncodingError U+6957"});
expect(() => {ms932Encoder.encode("\u6958")}).toThrowError({name:"TypeError",message:"EncodingError U+6958"});
expect([...ms932Encoder.encode("楙楚")].join(",")).toBe("158,188,145,94"); // U+6959
expect(() => {ms932Encoder.encode("\u695B")}).toThrowError({name:"TypeError",message:"EncodingError U+695B"});
expect([...ms932Encoder.encode("楜楝楞")].join(",")).toBe("158,179,158,192,158,191"); // U+695C
expect(() => {ms932Encoder.encode("\u695F")}).toThrowError({name:"TypeError",message:"EncodingError U+695F"});
expect([...ms932Encoder.encode("楠楡楢")].join(",")).toBe("147,237,158,190,147,232"); // U+6960
expect(() => {ms932Encoder.encode("\u6963")}).toThrowError({name:"TypeError",message:"EncodingError U+6963"});
expect(() => {ms932Encoder.encode("\u6964")}).toThrowError({name:"TypeError",message:"EncodingError U+6964"});
expect(() => {ms932Encoder.encode("\u6965")}).toThrowError({name:"TypeError",message:"EncodingError U+6965"});
expect(() => {ms932Encoder.encode("\u6966")}).toThrowError({name:"TypeError",message:"EncodingError U+6966"});
expect(() => {ms932Encoder.encode("\u6967")}).toThrowError({name:"TypeError",message:"EncodingError U+6967"});
expect([...ms932Encoder.encode("楨")].join(",")).toBe("250,233"); // U+6968
expect(() => {ms932Encoder.encode("\u6969")}).toThrowError({name:"TypeError",message:"EncodingError U+6969"});
expect([...ms932Encoder.encode("楪楫")].join(",")).toBe("158,194,158,181"); // U+696A
expect(() => {ms932Encoder.encode("\u696C")}).toThrowError({name:"TypeError",message:"EncodingError U+696C"});
expect([...ms932Encoder.encode("業楮楯")].join(",")).toBe("139,198,158,184,143,124"); // U+696D
expect(() => {ms932Encoder.encode("\u6970")}).toThrowError({name:"TypeError",message:"EncodingError U+6970"});
expect(() => {ms932Encoder.encode("\u6971")}).toThrowError({name:"TypeError",message:"EncodingError U+6971"});
expect(() => {ms932Encoder.encode("\u6972")}).toThrowError({name:"TypeError",message:"EncodingError U+6972"});
expect([...ms932Encoder.encode("楳楴極")].join(",")).toBe("148,128,158,186,139,201"); // U+6973
expect(() => {ms932Encoder.encode("\u6976")}).toThrowError({name:"TypeError",message:"EncodingError U+6976"});
expect([...ms932Encoder.encode("楷楸楹")].join(",")).toBe("158,178,158,180,158,177"); // U+6977
expect(() => {ms932Encoder.encode("\u697A")}).toThrowError({name:"TypeError",message:"EncodingError U+697A"});
expect(() => {ms932Encoder.encode("\u697B")}).toThrowError({name:"TypeError",message:"EncodingError U+697B"});
expect([...ms932Encoder.encode("楼楽楾")].join(",")).toBe("152,79,138,121,158,183"); // U+697C
expect(() => {ms932Encoder.encode("\u697F")}).toThrowError({name:"TypeError",message:"EncodingError U+697F"});
expect(() => {ms932Encoder.encode("\u6980")}).toThrowError({name:"TypeError",message:"EncodingError U+6980"});
expect([...ms932Encoder.encode("榁概")].join(",")).toBe("158,193,138,84"); // U+6981
expect(() => {ms932Encoder.encode("\u6983")}).toThrowError({name:"TypeError",message:"EncodingError U+6983"});
expect(() => {ms932Encoder.encode("\u6984")}).toThrowError({name:"TypeError",message:"EncodingError U+6984"});
expect(() => {ms932Encoder.encode("\u6985")}).toThrowError({name:"TypeError",message:"EncodingError U+6985"});
expect(() => {ms932Encoder.encode("\u6986")}).toThrowError({name:"TypeError",message:"EncodingError U+6986"});
expect(() => {ms932Encoder.encode("\u6987")}).toThrowError({name:"TypeError",message:"EncodingError U+6987"});
expect(() => {ms932Encoder.encode("\u6988")}).toThrowError({name:"TypeError",message:"EncodingError U+6988"});
expect(() => {ms932Encoder.encode("\u6989")}).toThrowError({name:"TypeError",message:"EncodingError U+6989"});
expect([...ms932Encoder.encode("榊")].join(",")).toBe("141,229"); // U+698A
expect(() => {ms932Encoder.encode("\u698B")}).toThrowError({name:"TypeError",message:"EncodingError U+698B"});
expect(() => {ms932Encoder.encode("\u698C")}).toThrowError({name:"TypeError",message:"EncodingError U+698C"});
expect(() => {ms932Encoder.encode("\u698D")}).toThrowError({name:"TypeError",message:"EncodingError U+698D"});
expect([...ms932Encoder.encode("榎")].join(",")).toBe("137,124"); // U+698E
expect(() => {ms932Encoder.encode("\u698F")}).toThrowError({name:"TypeError",message:"EncodingError U+698F"});
expect(() => {ms932Encoder.encode("\u6990")}).toThrowError({name:"TypeError",message:"EncodingError U+6990"});
expect([...ms932Encoder.encode("榑")].join(",")).toBe("158,210"); // U+6991
expect(() => {ms932Encoder.encode("\u6992")}).toThrowError({name:"TypeError",message:"EncodingError U+6992"});
expect(() => {ms932Encoder.encode("\u6993")}).toThrowError({name:"TypeError",message:"EncodingError U+6993"});
expect([...ms932Encoder.encode("榔榕")].join(",")).toBe("152,80,158,213"); // U+6994
expect(() => {ms932Encoder.encode("\u6996")}).toThrowError({name:"TypeError",message:"EncodingError U+6996"});
expect(() => {ms932Encoder.encode("\u6997")}).toThrowError({name:"TypeError",message:"EncodingError U+6997"});
expect([...ms932Encoder.encode("榘")].join(",")).toBe("250,235"); // U+6998
expect(() => {ms932Encoder.encode("\u6999")}).toThrowError({name:"TypeError",message:"EncodingError U+6999"});
expect(() => {ms932Encoder.encode("\u699A")}).toThrowError({name:"TypeError",message:"EncodingError U+699A"});
expect([...ms932Encoder.encode("榛榜")].join(",")).toBe("144,89,158,212"); // U+699B
expect(() => {ms932Encoder.encode("\u699D")}).toThrowError({name:"TypeError",message:"EncodingError U+699D"});
expect(() => {ms932Encoder.encode("\u699E")}).toThrowError({name:"TypeError",message:"EncodingError U+699E"});
expect(() => {ms932Encoder.encode("\u699F")}).toThrowError({name:"TypeError",message:"EncodingError U+699F"});
expect([...ms932Encoder.encode("榠")].join(",")).toBe("158,211"); // U+69A0
expect(() => {ms932Encoder.encode("\u69A1")}).toThrowError({name:"TypeError",message:"EncodingError U+69A1"});
expect(() => {ms932Encoder.encode("\u69A2")}).toThrowError({name:"TypeError",message:"EncodingError U+69A2"});
expect(() => {ms932Encoder.encode("\u69A3")}).toThrowError({name:"TypeError",message:"EncodingError U+69A3"});
expect(() => {ms932Encoder.encode("\u69A4")}).toThrowError({name:"TypeError",message:"EncodingError U+69A4"});
expect(() => {ms932Encoder.encode("\u69A5")}).toThrowError({name:"TypeError",message:"EncodingError U+69A5"});
expect(() => {ms932Encoder.encode("\u69A6")}).toThrowError({name:"TypeError",message:"EncodingError U+69A6"});
expect([...ms932Encoder.encode("榧")].join(",")).toBe("158,208"); // U+69A7
expect(() => {ms932Encoder.encode("\u69A8")}).toThrowError({name:"TypeError",message:"EncodingError U+69A8"});
expect(() => {ms932Encoder.encode("\u69A9")}).toThrowError({name:"TypeError",message:"EncodingError U+69A9"});
expect(() => {ms932Encoder.encode("\u69AA")}).toThrowError({name:"TypeError",message:"EncodingError U+69AA"});
expect(() => {ms932Encoder.encode("\u69AB")}).toThrowError({name:"TypeError",message:"EncodingError U+69AB"});
expect(() => {ms932Encoder.encode("\u69AC")}).toThrowError({name:"TypeError",message:"EncodingError U+69AC"});
expect(() => {ms932Encoder.encode("\u69AD")}).toThrowError({name:"TypeError",message:"EncodingError U+69AD"});
expect([...ms932Encoder.encode("榮")].join(",")).toBe("158,196"); // U+69AE
expect(() => {ms932Encoder.encode("\u69AF")}).toThrowError({name:"TypeError",message:"EncodingError U+69AF"});
expect(() => {ms932Encoder.encode("\u69B0")}).toThrowError({name:"TypeError",message:"EncodingError U+69B0"});
expect([...ms932Encoder.encode("榱榲")].join(",")).toBe("158,225,158,195"); // U+69B1
expect(() => {ms932Encoder.encode("\u69B3")}).toThrowError({name:"TypeError",message:"EncodingError U+69B3"});
expect([...ms932Encoder.encode("榴")].join(",")).toBe("158,214"); // U+69B4
expect(() => {ms932Encoder.encode("\u69B5")}).toThrowError({name:"TypeError",message:"EncodingError U+69B5"});
expect(() => {ms932Encoder.encode("\u69B6")}).toThrowError({name:"TypeError",message:"EncodingError U+69B6"});
expect(() => {ms932Encoder.encode("\u69B7")}).toThrowError({name:"TypeError",message:"EncodingError U+69B7"});
expect(() => {ms932Encoder.encode("\u69B8")}).toThrowError({name:"TypeError",message:"EncodingError U+69B8"});
expect(() => {ms932Encoder.encode("\u69B9")}).toThrowError({name:"TypeError",message:"EncodingError U+69B9"});
expect(() => {ms932Encoder.encode("\u69BA")}).toThrowError({name:"TypeError",message:"EncodingError U+69BA"});
expect([...ms932Encoder.encode("榻")].join(",")).toBe("158,206"); // U+69BB
expect(() => {ms932Encoder.encode("\u69BC")}).toThrowError({name:"TypeError",message:"EncodingError U+69BC"});
expect(() => {ms932Encoder.encode("\u69BD")}).toThrowError({name:"TypeError",message:"EncodingError U+69BD"});
expect([...ms932Encoder.encode("榾榿")].join(",")).toBe("158,201,158,198"); // U+69BE
expect(() => {ms932Encoder.encode("\u69C0")}).toThrowError({name:"TypeError",message:"EncodingError U+69C0"});
expect([...ms932Encoder.encode("槁")].join(",")).toBe("158,199"); // U+69C1
expect(() => {ms932Encoder.encode("\u69C2")}).toThrowError({name:"TypeError",message:"EncodingError U+69C2"});
expect([...ms932Encoder.encode("槃")].join(",")).toBe("158,207"); // U+69C3
expect(() => {ms932Encoder.encode("\u69C4")}).toThrowError({name:"TypeError",message:"EncodingError U+69C4"});
expect(() => {ms932Encoder.encode("\u69C5")}).toThrowError({name:"TypeError",message:"EncodingError U+69C5"});
expect(() => {ms932Encoder.encode("\u69C6")}).toThrowError({name:"TypeError",message:"EncodingError U+69C6"});
expect([...ms932Encoder.encode("槇")].join(",")).toBe("234,160"); // U+69C7
expect(() => {ms932Encoder.encode("\u69C8")}).toThrowError({name:"TypeError",message:"EncodingError U+69C8"});
expect(() => {ms932Encoder.encode("\u69C9")}).toThrowError({name:"TypeError",message:"EncodingError U+69C9"});
expect([...ms932Encoder.encode("槊構槌槍槎")].join(",")).toBe("158,204,141,92,146,198,145,132,158,202"); // U+69CA
expect(() => {ms932Encoder.encode("\u69CF")}).toThrowError({name:"TypeError",message:"EncodingError U+69CF"});
expect([...ms932Encoder.encode("槐")].join(",")).toBe("158,197"); // U+69D0
expect(() => {ms932Encoder.encode("\u69D1")}).toThrowError({name:"TypeError",message:"EncodingError U+69D1"});
expect(() => {ms932Encoder.encode("\u69D2")}).toThrowError({name:"TypeError",message:"EncodingError U+69D2"});
expect([...ms932Encoder.encode("槓")].join(",")).toBe("158,200"); // U+69D3
expect(() => {ms932Encoder.encode("\u69D4")}).toThrowError({name:"TypeError",message:"EncodingError U+69D4"});
expect(() => {ms932Encoder.encode("\u69D5")}).toThrowError({name:"TypeError",message:"EncodingError U+69D5"});
expect(() => {ms932Encoder.encode("\u69D6")}).toThrowError({name:"TypeError",message:"EncodingError U+69D6"});
expect(() => {ms932Encoder.encode("\u69D7")}).toThrowError({name:"TypeError",message:"EncodingError U+69D7"});
expect([...ms932Encoder.encode("様槙")].join(",")).toBe("151,108,150,138"); // U+69D8
expect(() => {ms932Encoder.encode("\u69DA")}).toThrowError({name:"TypeError",message:"EncodingError U+69DA"});
expect(() => {ms932Encoder.encode("\u69DB")}).toThrowError({name:"TypeError",message:"EncodingError U+69DB"});
expect(() => {ms932Encoder.encode("\u69DC")}).toThrowError({name:"TypeError",message:"EncodingError U+69DC"});
expect([...ms932Encoder.encode("槝槞")].join(",")).toBe("158,205,158,215"); // U+69DD
expect(() => {ms932Encoder.encode("\u69DF")}).toThrowError({name:"TypeError",message:"EncodingError U+69DF"});
expect(() => {ms932Encoder.encode("\u69E0")}).toThrowError({name:"TypeError",message:"EncodingError U+69E0"});
expect(() => {ms932Encoder.encode("\u69E1")}).toThrowError({name:"TypeError",message:"EncodingError U+69E1"});
expect([...ms932Encoder.encode("槢")].join(",")).toBe("250,236"); // U+69E2
expect(() => {ms932Encoder.encode("\u69E3")}).toThrowError({name:"TypeError",message:"EncodingError U+69E3"});
expect(() => {ms932Encoder.encode("\u69E4")}).toThrowError({name:"TypeError",message:"EncodingError U+69E4"});
expect(() => {ms932Encoder.encode("\u69E5")}).toThrowError({name:"TypeError",message:"EncodingError U+69E5"});
expect(() => {ms932Encoder.encode("\u69E6")}).toThrowError({name:"TypeError",message:"EncodingError U+69E6"});
expect([...ms932Encoder.encode("槧槨")].join(",")).toBe("158,223,158,216"); // U+69E7
expect(() => {ms932Encoder.encode("\u69E9")}).toThrowError({name:"TypeError",message:"EncodingError U+69E9"});
expect(() => {ms932Encoder.encode("\u69EA")}).toThrowError({name:"TypeError",message:"EncodingError U+69EA"});
expect([...ms932Encoder.encode("槫")].join(",")).toBe("158,229"); // U+69EB
expect(() => {ms932Encoder.encode("\u69EC")}).toThrowError({name:"TypeError",message:"EncodingError U+69EC"});
expect([...ms932Encoder.encode("槭")].join(",")).toBe("158,227"); // U+69ED
expect(() => {ms932Encoder.encode("\u69EE")}).toThrowError({name:"TypeError",message:"EncodingError U+69EE"});
expect(() => {ms932Encoder.encode("\u69EF")}).toThrowError({name:"TypeError",message:"EncodingError U+69EF"});
expect(() => {ms932Encoder.encode("\u69F0")}).toThrowError({name:"TypeError",message:"EncodingError U+69F0"});
expect(() => {ms932Encoder.encode("\u69F1")}).toThrowError({name:"TypeError",message:"EncodingError U+69F1"});
expect([...ms932Encoder.encode("槲")].join(",")).toBe("158,222"); // U+69F2
expect(() => {ms932Encoder.encode("\u69F3")}).toThrowError({name:"TypeError",message:"EncodingError U+69F3"});
expect(() => {ms932Encoder.encode("\u69F4")}).toThrowError({name:"TypeError",message:"EncodingError U+69F4"});
expect(() => {ms932Encoder.encode("\u69F5")}).toThrowError({name:"TypeError",message:"EncodingError U+69F5"});
expect(() => {ms932Encoder.encode("\u69F6")}).toThrowError({name:"TypeError",message:"EncodingError U+69F6"});
expect(() => {ms932Encoder.encode("\u69F7")}).toThrowError({name:"TypeError",message:"EncodingError U+69F7"});
expect(() => {ms932Encoder.encode("\u69F8")}).toThrowError({name:"TypeError",message:"EncodingError U+69F8"});
expect([...ms932Encoder.encode("槹")].join(",")).toBe("158,221"); // U+69F9
expect(() => {ms932Encoder.encode("\u69FA")}).toThrowError({name:"TypeError",message:"EncodingError U+69FA"});
expect([...ms932Encoder.encode("槻")].join(",")).toBe("146,206"); // U+69FB
expect(() => {ms932Encoder.encode("\u69FC")}).toThrowError({name:"TypeError",message:"EncodingError U+69FC"});
expect([...ms932Encoder.encode("槽")].join(",")).toBe("145,133"); // U+69FD
expect(() => {ms932Encoder.encode("\u69FE")}).toThrowError({name:"TypeError",message:"EncodingError U+69FE"});
expect([...ms932Encoder.encode("槿")].join(",")).toBe("158,219"); // U+69FF
expect(() => {ms932Encoder.encode("\u6A00")}).toThrowError({name:"TypeError",message:"EncodingError U+6A00"});
expect(() => {ms932Encoder.encode("\u6A01")}).toThrowError({name:"TypeError",message:"EncodingError U+6A01"});
expect([...ms932Encoder.encode("樂")].join(",")).toBe("158,217"); // U+6A02
expect(() => {ms932Encoder.encode("\u6A03")}).toThrowError({name:"TypeError",message:"EncodingError U+6A03"});
expect(() => {ms932Encoder.encode("\u6A04")}).toThrowError({name:"TypeError",message:"EncodingError U+6A04"});
expect([...ms932Encoder.encode("樅")].join(",")).toBe("158,224"); // U+6A05
expect(() => {ms932Encoder.encode("\u6A06")}).toThrowError({name:"TypeError",message:"EncodingError U+6A06"});
expect(() => {ms932Encoder.encode("\u6A07")}).toThrowError({name:"TypeError",message:"EncodingError U+6A07"});
expect(() => {ms932Encoder.encode("\u6A08")}).toThrowError({name:"TypeError",message:"EncodingError U+6A08"});
expect(() => {ms932Encoder.encode("\u6A09")}).toThrowError({name:"TypeError",message:"EncodingError U+6A09"});
expect([...ms932Encoder.encode("樊樋樌")].join(",")).toBe("158,230,148,243,158,236"); // U+6A0A
expect(() => {ms932Encoder.encode("\u6A0D")}).toThrowError({name:"TypeError",message:"EncodingError U+6A0D"});
expect(() => {ms932Encoder.encode("\u6A0E")}).toThrowError({name:"TypeError",message:"EncodingError U+6A0E"});
expect(() => {ms932Encoder.encode("\u6A0F")}).toThrowError({name:"TypeError",message:"EncodingError U+6A0F"});
expect(() => {ms932Encoder.encode("\u6A10")}).toThrowError({name:"TypeError",message:"EncodingError U+6A10"});
expect(() => {ms932Encoder.encode("\u6A11")}).toThrowError({name:"TypeError",message:"EncodingError U+6A11"});
expect([...ms932Encoder.encode("樒樓樔")].join(",")).toBe("158,231,158,234,158,228"); // U+6A12
expect(() => {ms932Encoder.encode("\u6A15")}).toThrowError({name:"TypeError",message:"EncodingError U+6A15"});
expect(() => {ms932Encoder.encode("\u6A16")}).toThrowError({name:"TypeError",message:"EncodingError U+6A16"});
expect([...ms932Encoder.encode("樗")].join(",")).toBe("146,148"); // U+6A17
expect(() => {ms932Encoder.encode("\u6A18")}).toThrowError({name:"TypeError",message:"EncodingError U+6A18"});
expect([...ms932Encoder.encode("標")].join(",")).toBe("149,87"); // U+6A19
expect(() => {ms932Encoder.encode("\u6A1A")}).toThrowError({name:"TypeError",message:"EncodingError U+6A1A"});
expect([...ms932Encoder.encode("樛")].join(",")).toBe("158,218"); // U+6A1B
expect(() => {ms932Encoder.encode("\u6A1C")}).toThrowError({name:"TypeError",message:"EncodingError U+6A1C"});
expect(() => {ms932Encoder.encode("\u6A1D")}).toThrowError({name:"TypeError",message:"EncodingError U+6A1D"});
expect([...ms932Encoder.encode("樞樟")].join(",")).toBe("158,226,143,190"); // U+6A1E
expect(() => {ms932Encoder.encode("\u6A20")}).toThrowError({name:"TypeError",message:"EncodingError U+6A20"});
expect([...ms932Encoder.encode("模樢樣")].join(",")).toBe("150,205,158,246,158,233"); // U+6A21
expect(() => {ms932Encoder.encode("\u6A24")}).toThrowError({name:"TypeError",message:"EncodingError U+6A24"});
expect(() => {ms932Encoder.encode("\u6A25")}).toThrowError({name:"TypeError",message:"EncodingError U+6A25"});
expect(() => {ms932Encoder.encode("\u6A26")}).toThrowError({name:"TypeError",message:"EncodingError U+6A26"});
expect(() => {ms932Encoder.encode("\u6A27")}).toThrowError({name:"TypeError",message:"EncodingError U+6A27"});
expect(() => {ms932Encoder.encode("\u6A28")}).toThrowError({name:"TypeError",message:"EncodingError U+6A28"});
expect([...ms932Encoder.encode("権横樫")].join(",")).toBe("140,160,137,161,138,126"); // U+6A29
expect(() => {ms932Encoder.encode("\u6A2C")}).toThrowError({name:"TypeError",message:"EncodingError U+6A2C"});
expect(() => {ms932Encoder.encode("\u6A2D")}).toThrowError({name:"TypeError",message:"EncodingError U+6A2D"});
expect([...ms932Encoder.encode("樮")].join(",")).toBe("158,209"); // U+6A2E
expect(() => {ms932Encoder.encode("\u6A2F")}).toThrowError({name:"TypeError",message:"EncodingError U+6A2F"});
expect([...ms932Encoder.encode("樰")].join(",")).toBe("250,237"); // U+6A30
expect(() => {ms932Encoder.encode("\u6A31")}).toThrowError({name:"TypeError",message:"EncodingError U+6A31"});
expect(() => {ms932Encoder.encode("\u6A32")}).toThrowError({name:"TypeError",message:"EncodingError U+6A32"});
expect(() => {ms932Encoder.encode("\u6A33")}).toThrowError({name:"TypeError",message:"EncodingError U+6A33"});
expect(() => {ms932Encoder.encode("\u6A34")}).toThrowError({name:"TypeError",message:"EncodingError U+6A34"});
expect([...ms932Encoder.encode("樵樶")].join(",")).toBe("143,191,158,238"); // U+6A35
expect(() => {ms932Encoder.encode("\u6A37")}).toThrowError({name:"TypeError",message:"EncodingError U+6A37"});
expect([...ms932Encoder.encode("樸樹樺")].join(",")).toBe("158,245,142,247,138,146"); // U+6A38
expect(() => {ms932Encoder.encode("\u6A3B")}).toThrowError({name:"TypeError",message:"EncodingError U+6A3B"});
expect(() => {ms932Encoder.encode("\u6A3C")}).toThrowError({name:"TypeError",message:"EncodingError U+6A3C"});
expect([...ms932Encoder.encode("樽")].join(",")).toBe("146,77"); // U+6A3D
expect(() => {ms932Encoder.encode("\u6A3E")}).toThrowError({name:"TypeError",message:"EncodingError U+6A3E"});
expect(() => {ms932Encoder.encode("\u6A3F")}).toThrowError({name:"TypeError",message:"EncodingError U+6A3F"});
expect(() => {ms932Encoder.encode("\u6A40")}).toThrowError({name:"TypeError",message:"EncodingError U+6A40"});
expect(() => {ms932Encoder.encode("\u6A41")}).toThrowError({name:"TypeError",message:"EncodingError U+6A41"});
expect(() => {ms932Encoder.encode("\u6A42")}).toThrowError({name:"TypeError",message:"EncodingError U+6A42"});
expect(() => {ms932Encoder.encode("\u6A43")}).toThrowError({name:"TypeError",message:"EncodingError U+6A43"});
expect([...ms932Encoder.encode("橄")].join(",")).toBe("158,235"); // U+6A44
expect(() => {ms932Encoder.encode("\u6A45")}).toThrowError({name:"TypeError",message:"EncodingError U+6A45"});
expect([...ms932Encoder.encode("橆橇橈")].join(",")).toBe("250,239,158,240,158,244"); // U+6A46
expect(() => {ms932Encoder.encode("\u6A49")}).toThrowError({name:"TypeError",message:"EncodingError U+6A49"});
expect(() => {ms932Encoder.encode("\u6A4A")}).toThrowError({name:"TypeError",message:"EncodingError U+6A4A"});
expect([...ms932Encoder.encode("橋")].join(",")).toBe("139,180"); // U+6A4B
expect(() => {ms932Encoder.encode("\u6A4C")}).toThrowError({name:"TypeError",message:"EncodingError U+6A4C"});
expect(() => {ms932Encoder.encode("\u6A4D")}).toThrowError({name:"TypeError",message:"EncodingError U+6A4D"});
expect(() => {ms932Encoder.encode("\u6A4E")}).toThrowError({name:"TypeError",message:"EncodingError U+6A4E"});
expect(() => {ms932Encoder.encode("\u6A4F")}).toThrowError({name:"TypeError",message:"EncodingError U+6A4F"});
expect(() => {ms932Encoder.encode("\u6A50")}).toThrowError({name:"TypeError",message:"EncodingError U+6A50"});
expect(() => {ms932Encoder.encode("\u6A51")}).toThrowError({name:"TypeError",message:"EncodingError U+6A51"});
expect(() => {ms932Encoder.encode("\u6A52")}).toThrowError({name:"TypeError",message:"EncodingError U+6A52"});
expect(() => {ms932Encoder.encode("\u6A53")}).toThrowError({name:"TypeError",message:"EncodingError U+6A53"});
expect(() => {ms932Encoder.encode("\u6A54")}).toThrowError({name:"TypeError",message:"EncodingError U+6A54"});
expect(() => {ms932Encoder.encode("\u6A55")}).toThrowError({name:"TypeError",message:"EncodingError U+6A55"});
expect(() => {ms932Encoder.encode("\u6A56")}).toThrowError({name:"TypeError",message:"EncodingError U+6A56"});
expect(() => {ms932Encoder.encode("\u6A57")}).toThrowError({name:"TypeError",message:"EncodingError U+6A57"});
expect([...ms932Encoder.encode("橘橙")].join(",")).toBe("139,107,158,242"); // U+6A58
expect(() => {ms932Encoder.encode("\u6A5A")}).toThrowError({name:"TypeError",message:"EncodingError U+6A5A"});
expect(() => {ms932Encoder.encode("\u6A5B")}).toThrowError({name:"TypeError",message:"EncodingError U+6A5B"});
expect(() => {ms932Encoder.encode("\u6A5C")}).toThrowError({name:"TypeError",message:"EncodingError U+6A5C"});
expect(() => {ms932Encoder.encode("\u6A5D")}).toThrowError({name:"TypeError",message:"EncodingError U+6A5D"});
expect(() => {ms932Encoder.encode("\u6A5E")}).toThrowError({name:"TypeError",message:"EncodingError U+6A5E"});
expect([...ms932Encoder.encode("機")].join(",")).toBe("139,64"); // U+6A5F
expect(() => {ms932Encoder.encode("\u6A60")}).toThrowError({name:"TypeError",message:"EncodingError U+6A60"});
expect([...ms932Encoder.encode("橡橢")].join(",")).toBe("147,201,158,241"); // U+6A61
expect(() => {ms932Encoder.encode("\u6A63")}).toThrowError({name:"TypeError",message:"EncodingError U+6A63"});
expect(() => {ms932Encoder.encode("\u6A64")}).toThrowError({name:"TypeError",message:"EncodingError U+6A64"});
expect(() => {ms932Encoder.encode("\u6A65")}).toThrowError({name:"TypeError",message:"EncodingError U+6A65"});
expect([...ms932Encoder.encode("橦")].join(",")).toBe("158,243"); // U+6A66
expect(() => {ms932Encoder.encode("\u6A67")}).toThrowError({name:"TypeError",message:"EncodingError U+6A67"});
expect(() => {ms932Encoder.encode("\u6A68")}).toThrowError({name:"TypeError",message:"EncodingError U+6A68"});
expect(() => {ms932Encoder.encode("\u6A69")}).toThrowError({name:"TypeError",message:"EncodingError U+6A69"});
expect(() => {ms932Encoder.encode("\u6A6A")}).toThrowError({name:"TypeError",message:"EncodingError U+6A6A"});
expect([...ms932Encoder.encode("橫")].join(",")).toBe("250,238"); // U+6A6B
expect(() => {ms932Encoder.encode("\u6A6C")}).toThrowError({name:"TypeError",message:"EncodingError U+6A6C"});
expect(() => {ms932Encoder.encode("\u6A6D")}).toThrowError({name:"TypeError",message:"EncodingError U+6A6D"});
expect(() => {ms932Encoder.encode("\u6A6E")}).toThrowError({name:"TypeError",message:"EncodingError U+6A6E"});
expect(() => {ms932Encoder.encode("\u6A6F")}).toThrowError({name:"TypeError",message:"EncodingError U+6A6F"});
expect(() => {ms932Encoder.encode("\u6A70")}).toThrowError({name:"TypeError",message:"EncodingError U+6A70"});
expect(() => {ms932Encoder.encode("\u6A71")}).toThrowError({name:"TypeError",message:"EncodingError U+6A71"});
expect([...ms932Encoder.encode("橲橳")].join(",")).toBe("158,237,250,240"); // U+6A72
expect(() => {ms932Encoder.encode("\u6A74")}).toThrowError({name:"TypeError",message:"EncodingError U+6A74"});
expect(() => {ms932Encoder.encode("\u6A75")}).toThrowError({name:"TypeError",message:"EncodingError U+6A75"});
expect(() => {ms932Encoder.encode("\u6A76")}).toThrowError({name:"TypeError",message:"EncodingError U+6A76"});
expect(() => {ms932Encoder.encode("\u6A77")}).toThrowError({name:"TypeError",message:"EncodingError U+6A77"});
expect([...ms932Encoder.encode("橸")].join(",")).toBe("158,239"); // U+6A78
expect(() => {ms932Encoder.encode("\u6A79")}).toThrowError({name:"TypeError",message:"EncodingError U+6A79"});
expect(() => {ms932Encoder.encode("\u6A7A")}).toThrowError({name:"TypeError",message:"EncodingError U+6A7A"});
expect(() => {ms932Encoder.encode("\u6A7B")}).toThrowError({name:"TypeError",message:"EncodingError U+6A7B"});
expect(() => {ms932Encoder.encode("\u6A7C")}).toThrowError({name:"TypeError",message:"EncodingError U+6A7C"});
expect(() => {ms932Encoder.encode("\u6A7D")}).toThrowError({name:"TypeError",message:"EncodingError U+6A7D"});
expect([...ms932Encoder.encode("橾橿檀")].join(",")).toBe("250,241,138,128,146,104"); // U+6A7E
expect(() => {ms932Encoder.encode("\u6A81")}).toThrowError({name:"TypeError",message:"EncodingError U+6A81"});
expect(() => {ms932Encoder.encode("\u6A82")}).toThrowError({name:"TypeError",message:"EncodingError U+6A82"});
expect(() => {ms932Encoder.encode("\u6A83")}).toThrowError({name:"TypeError",message:"EncodingError U+6A83"});
expect([...ms932Encoder.encode("檄")].join(",")).toBe("158,250"); // U+6A84
expect(() => {ms932Encoder.encode("\u6A85")}).toThrowError({name:"TypeError",message:"EncodingError U+6A85"});
expect(() => {ms932Encoder.encode("\u6A86")}).toThrowError({name:"TypeError",message:"EncodingError U+6A86"});
expect(() => {ms932Encoder.encode("\u6A87")}).toThrowError({name:"TypeError",message:"EncodingError U+6A87"});
expect(() => {ms932Encoder.encode("\u6A88")}).toThrowError({name:"TypeError",message:"EncodingError U+6A88"});
expect(() => {ms932Encoder.encode("\u6A89")}).toThrowError({name:"TypeError",message:"EncodingError U+6A89"});
expect(() => {ms932Encoder.encode("\u6A8A")}).toThrowError({name:"TypeError",message:"EncodingError U+6A8A"});
expect(() => {ms932Encoder.encode("\u6A8B")}).toThrowError({name:"TypeError",message:"EncodingError U+6A8B"});
expect(() => {ms932Encoder.encode("\u6A8C")}).toThrowError({name:"TypeError",message:"EncodingError U+6A8C"});
expect([...ms932Encoder.encode("檍檎")].join(",")).toBe("158,248,140,231"); // U+6A8D
expect(() => {ms932Encoder.encode("\u6A8F")}).toThrowError({name:"TypeError",message:"EncodingError U+6A8F"});
expect([...ms932Encoder.encode("檐")].join(",")).toBe("158,247"); // U+6A90
expect(() => {ms932Encoder.encode("\u6A91")}).toThrowError({name:"TypeError",message:"EncodingError U+6A91"});
expect(() => {ms932Encoder.encode("\u6A92")}).toThrowError({name:"TypeError",message:"EncodingError U+6A92"});
expect(() => {ms932Encoder.encode("\u6A93")}).toThrowError({name:"TypeError",message:"EncodingError U+6A93"});
expect(() => {ms932Encoder.encode("\u6A94")}).toThrowError({name:"TypeError",message:"EncodingError U+6A94"});
expect(() => {ms932Encoder.encode("\u6A95")}).toThrowError({name:"TypeError",message:"EncodingError U+6A95"});
expect(() => {ms932Encoder.encode("\u6A96")}).toThrowError({name:"TypeError",message:"EncodingError U+6A96"});
expect([...ms932Encoder.encode("檗")].join(",")).toBe("159,64"); // U+6A97
expect(() => {ms932Encoder.encode("\u6A98")}).toThrowError({name:"TypeError",message:"EncodingError U+6A98"});
expect(() => {ms932Encoder.encode("\u6A99")}).toThrowError({name:"TypeError",message:"EncodingError U+6A99"});
expect(() => {ms932Encoder.encode("\u6A9A")}).toThrowError({name:"TypeError",message:"EncodingError U+6A9A"});
expect(() => {ms932Encoder.encode("\u6A9B")}).toThrowError({name:"TypeError",message:"EncodingError U+6A9B"});
expect([...ms932Encoder.encode("檜")].join(",")).toBe("158,119"); // U+6A9C
expect(() => {ms932Encoder.encode("\u6A9D")}).toThrowError({name:"TypeError",message:"EncodingError U+6A9D"});
expect(() => {ms932Encoder.encode("\u6A9E")}).toThrowError({name:"TypeError",message:"EncodingError U+6A9E"});
expect(() => {ms932Encoder.encode("\u6A9F")}).toThrowError({name:"TypeError",message:"EncodingError U+6A9F"});
expect([...ms932Encoder.encode("檠")].join(",")).toBe("158,249"); // U+6AA0
expect(() => {ms932Encoder.encode("\u6AA1")}).toThrowError({name:"TypeError",message:"EncodingError U+6AA1"});
expect([...ms932Encoder.encode("檢檣")].join(",")).toBe("158,251,158,252"); // U+6AA2
expect(() => {ms932Encoder.encode("\u6AA4")}).toThrowError({name:"TypeError",message:"EncodingError U+6AA4"});
expect(() => {ms932Encoder.encode("\u6AA5")}).toThrowError({name:"TypeError",message:"EncodingError U+6AA5"});
expect(() => {ms932Encoder.encode("\u6AA6")}).toThrowError({name:"TypeError",message:"EncodingError U+6AA6"});
expect(() => {ms932Encoder.encode("\u6AA7")}).toThrowError({name:"TypeError",message:"EncodingError U+6AA7"});
expect(() => {ms932Encoder.encode("\u6AA8")}).toThrowError({name:"TypeError",message:"EncodingError U+6AA8"});
expect(() => {ms932Encoder.encode("\u6AA9")}).toThrowError({name:"TypeError",message:"EncodingError U+6AA9"});
expect([...ms932Encoder.encode("檪")].join(",")).toBe("159,75"); // U+6AAA
expect(() => {ms932Encoder.encode("\u6AAB")}).toThrowError({name:"TypeError",message:"EncodingError U+6AAB"});
expect([...ms932Encoder.encode("檬")].join(",")).toBe("159,71"); // U+6AAC
expect(() => {ms932Encoder.encode("\u6AAD")}).toThrowError({name:"TypeError",message:"EncodingError U+6AAD"});
expect([...ms932Encoder.encode("檮")].join(",")).toBe("158,141"); // U+6AAE
expect(() => {ms932Encoder.encode("\u6AAF")}).toThrowError({name:"TypeError",message:"EncodingError U+6AAF"});
expect(() => {ms932Encoder.encode("\u6AB0")}).toThrowError({name:"TypeError",message:"EncodingError U+6AB0"});
expect(() => {ms932Encoder.encode("\u6AB1")}).toThrowError({name:"TypeError",message:"EncodingError U+6AB1"});
expect(() => {ms932Encoder.encode("\u6AB2")}).toThrowError({name:"TypeError",message:"EncodingError U+6AB2"});
expect([...ms932Encoder.encode("檳")].join(",")).toBe("159,70"); // U+6AB3
expect(() => {ms932Encoder.encode("\u6AB4")}).toThrowError({name:"TypeError",message:"EncodingError U+6AB4"});
expect(() => {ms932Encoder.encode("\u6AB5")}).toThrowError({name:"TypeError",message:"EncodingError U+6AB5"});
expect(() => {ms932Encoder.encode("\u6AB6")}).toThrowError({name:"TypeError",message:"EncodingError U+6AB6"});
expect(() => {ms932Encoder.encode("\u6AB7")}).toThrowError({name:"TypeError",message:"EncodingError U+6AB7"});
expect([...ms932Encoder.encode("檸")].join(",")).toBe("159,69"); // U+6AB8
expect(() => {ms932Encoder.encode("\u6AB9")}).toThrowError({name:"TypeError",message:"EncodingError U+6AB9"});
expect(() => {ms932Encoder.encode("\u6ABA")}).toThrowError({name:"TypeError",message:"EncodingError U+6ABA"});
expect([...ms932Encoder.encode("檻")].join(",")).toBe("159,66"); // U+6ABB
expect(() => {ms932Encoder.encode("\u6ABC")}).toThrowError({name:"TypeError",message:"EncodingError U+6ABC"});
expect(() => {ms932Encoder.encode("\u6ABD")}).toThrowError({name:"TypeError",message:"EncodingError U+6ABD"});
expect(() => {ms932Encoder.encode("\u6ABE")}).toThrowError({name:"TypeError",message:"EncodingError U+6ABE"});
expect(() => {ms932Encoder.encode("\u6ABF")}).toThrowError({name:"TypeError",message:"EncodingError U+6ABF"});
expect(() => {ms932Encoder.encode("\u6AC0")}).toThrowError({name:"TypeError",message:"EncodingError U+6AC0"});
expect([...ms932Encoder.encode("櫁櫂櫃")].join(",")).toBe("158,232,159,68,159,67"); // U+6AC1
expect(() => {ms932Encoder.encode("\u6AC4")}).toThrowError({name:"TypeError",message:"EncodingError U+6AC4"});
expect(() => {ms932Encoder.encode("\u6AC5")}).toThrowError({name:"TypeError",message:"EncodingError U+6AC5"});
expect(() => {ms932Encoder.encode("\u6AC6")}).toThrowError({name:"TypeError",message:"EncodingError U+6AC6"});
expect(() => {ms932Encoder.encode("\u6AC7")}).toThrowError({name:"TypeError",message:"EncodingError U+6AC7"});
expect(() => {ms932Encoder.encode("\u6AC8")}).toThrowError({name:"TypeError",message:"EncodingError U+6AC8"});
expect(() => {ms932Encoder.encode("\u6AC9")}).toThrowError({name:"TypeError",message:"EncodingError U+6AC9"});
expect(() => {ms932Encoder.encode("\u6ACA")}).toThrowError({name:"TypeError",message:"EncodingError U+6ACA"});
expect(() => {ms932Encoder.encode("\u6ACB")}).toThrowError({name:"TypeError",message:"EncodingError U+6ACB"});
expect(() => {ms932Encoder.encode("\u6ACC")}).toThrowError({name:"TypeError",message:"EncodingError U+6ACC"});
expect(() => {ms932Encoder.encode("\u6ACD")}).toThrowError({name:"TypeError",message:"EncodingError U+6ACD"});
expect(() => {ms932Encoder.encode("\u6ACE")}).toThrowError({name:"TypeError",message:"EncodingError U+6ACE"});
expect(() => {ms932Encoder.encode("\u6ACF")}).toThrowError({name:"TypeError",message:"EncodingError U+6ACF"});
expect(() => {ms932Encoder.encode("\u6AD0")}).toThrowError({name:"TypeError",message:"EncodingError U+6AD0"});
expect([...ms932Encoder.encode("櫑")].join(",")).toBe("159,73"); // U+6AD1
expect(() => {ms932Encoder.encode("\u6AD2")}).toThrowError({name:"TypeError",message:"EncodingError U+6AD2"});
expect([...ms932Encoder.encode("櫓")].join(",")).toBe("152,69"); // U+6AD3
expect(() => {ms932Encoder.encode("\u6AD4")}).toThrowError({name:"TypeError",message:"EncodingError U+6AD4"});
expect(() => {ms932Encoder.encode("\u6AD5")}).toThrowError({name:"TypeError",message:"EncodingError U+6AD5"});
expect(() => {ms932Encoder.encode("\u6AD6")}).toThrowError({name:"TypeError",message:"EncodingError U+6AD6"});
expect(() => {ms932Encoder.encode("\u6AD7")}).toThrowError({name:"TypeError",message:"EncodingError U+6AD7"});
expect(() => {ms932Encoder.encode("\u6AD8")}).toThrowError({name:"TypeError",message:"EncodingError U+6AD8"});
expect(() => {ms932Encoder.encode("\u6AD9")}).toThrowError({name:"TypeError",message:"EncodingError U+6AD9"});
expect([...ms932Encoder.encode("櫚櫛")].join(",")).toBe("159,76,139,249"); // U+6ADA
expect(() => {ms932Encoder.encode("\u6ADC")}).toThrowError({name:"TypeError",message:"EncodingError U+6ADC"});
expect(() => {ms932Encoder.encode("\u6ADD")}).toThrowError({name:"TypeError",message:"EncodingError U+6ADD"});
expect([...ms932Encoder.encode("櫞櫟")].join(",")).toBe("159,72,159,74"); // U+6ADE
expect(() => {ms932Encoder.encode("\u6AE0")}).toThrowError({name:"TypeError",message:"EncodingError U+6AE0"});
expect(() => {ms932Encoder.encode("\u6AE1")}).toThrowError({name:"TypeError",message:"EncodingError U+6AE1"});
expect([...ms932Encoder.encode("櫢")].join(",")).toBe("250,242"); // U+6AE2
expect(() => {ms932Encoder.encode("\u6AE3")}).toThrowError({name:"TypeError",message:"EncodingError U+6AE3"});
expect([...ms932Encoder.encode("櫤")].join(",")).toBe("250,243"); // U+6AE4
expect(() => {ms932Encoder.encode("\u6AE5")}).toThrowError({name:"TypeError",message:"EncodingError U+6AE5"});
expect(() => {ms932Encoder.encode("\u6AE6")}).toThrowError({name:"TypeError",message:"EncodingError U+6AE6"});
expect(() => {ms932Encoder.encode("\u6AE7")}).toThrowError({name:"TypeError",message:"EncodingError U+6AE7"});
expect([...ms932Encoder.encode("櫨")].join(",")).toBe("148,165"); // U+6AE8
expect(() => {ms932Encoder.encode("\u6AE9")}).toThrowError({name:"TypeError",message:"EncodingError U+6AE9"});
expect([...ms932Encoder.encode("櫪")].join(",")).toBe("159,77"); // U+6AEA
expect(() => {ms932Encoder.encode("\u6AEB")}).toThrowError({name:"TypeError",message:"EncodingError U+6AEB"});
expect(() => {ms932Encoder.encode("\u6AEC")}).toThrowError({name:"TypeError",message:"EncodingError U+6AEC"});
expect(() => {ms932Encoder.encode("\u6AED")}).toThrowError({name:"TypeError",message:"EncodingError U+6AED"});
expect(() => {ms932Encoder.encode("\u6AEE")}).toThrowError({name:"TypeError",message:"EncodingError U+6AEE"});
expect(() => {ms932Encoder.encode("\u6AEF")}).toThrowError({name:"TypeError",message:"EncodingError U+6AEF"});
expect(() => {ms932Encoder.encode("\u6AF0")}).toThrowError({name:"TypeError",message:"EncodingError U+6AF0"});
expect(() => {ms932Encoder.encode("\u6AF1")}).toThrowError({name:"TypeError",message:"EncodingError U+6AF1"});
expect(() => {ms932Encoder.encode("\u6AF2")}).toThrowError({name:"TypeError",message:"EncodingError U+6AF2"});
expect(() => {ms932Encoder.encode("\u6AF3")}).toThrowError({name:"TypeError",message:"EncodingError U+6AF3"});
expect(() => {ms932Encoder.encode("\u6AF4")}).toThrowError({name:"TypeError",message:"EncodingError U+6AF4"});
expect(() => {ms932Encoder.encode("\u6AF5")}).toThrowError({name:"TypeError",message:"EncodingError U+6AF5"});
expect(() => {ms932Encoder.encode("\u6AF6")}).toThrowError({name:"TypeError",message:"EncodingError U+6AF6"});
expect(() => {ms932Encoder.encode("\u6AF7")}).toThrowError({name:"TypeError",message:"EncodingError U+6AF7"});
expect(() => {ms932Encoder.encode("\u6AF8")}).toThrowError({name:"TypeError",message:"EncodingError U+6AF8"});
expect(() => {ms932Encoder.encode("\u6AF9")}).toThrowError({name:"TypeError",message:"EncodingError U+6AF9"});
expect([...ms932Encoder.encode("櫺櫻")].join(",")).toBe("159,81,159,78"); // U+6AFA
expect(() => {ms932Encoder.encode("\u6AFC")}).toThrowError({name:"TypeError",message:"EncodingError U+6AFC"});
expect(() => {ms932Encoder.encode("\u6AFD")}).toThrowError({name:"TypeError",message:"EncodingError U+6AFD"});
expect(() => {ms932Encoder.encode("\u6AFE")}).toThrowError({name:"TypeError",message:"EncodingError U+6AFE"});
expect(() => {ms932Encoder.encode("\u6AFF")}).toThrowError({name:"TypeError",message:"EncodingError U+6AFF"});
expect(() => {ms932Encoder.encode("\u6B00")}).toThrowError({name:"TypeError",message:"EncodingError U+6B00"});
expect(() => {ms932Encoder.encode("\u6B01")}).toThrowError({name:"TypeError",message:"EncodingError U+6B01"});
expect(() => {ms932Encoder.encode("\u6B02")}).toThrowError({name:"TypeError",message:"EncodingError U+6B02"});
expect(() => {ms932Encoder.encode("\u6B03")}).toThrowError({name:"TypeError",message:"EncodingError U+6B03"});
expect([...ms932Encoder.encode("欄欅")].join(",")).toBe("151,147,159,79"); // U+6B04
expect(() => {ms932Encoder.encode("\u6B06")}).toThrowError({name:"TypeError",message:"EncodingError U+6B06"});
expect(() => {ms932Encoder.encode("\u6B07")}).toThrowError({name:"TypeError",message:"EncodingError U+6B07"});
expect(() => {ms932Encoder.encode("\u6B08")}).toThrowError({name:"TypeError",message:"EncodingError U+6B08"});
expect(() => {ms932Encoder.encode("\u6B09")}).toThrowError({name:"TypeError",message:"EncodingError U+6B09"});
expect([...ms932Encoder.encode("權")].join(",")).toBe("158,220"); // U+6B0A
expect(() => {ms932Encoder.encode("\u6B0B")}).toThrowError({name:"TypeError",message:"EncodingError U+6B0B"});
expect(() => {ms932Encoder.encode("\u6B0C")}).toThrowError({name:"TypeError",message:"EncodingError U+6B0C"});
expect(() => {ms932Encoder.encode("\u6B0D")}).toThrowError({name:"TypeError",message:"EncodingError U+6B0D"});
expect(() => {ms932Encoder.encode("\u6B0E")}).toThrowError({name:"TypeError",message:"EncodingError U+6B0E"});
expect(() => {ms932Encoder.encode("\u6B0F")}).toThrowError({name:"TypeError",message:"EncodingError U+6B0F"});
expect(() => {ms932Encoder.encode("\u6B10")}).toThrowError({name:"TypeError",message:"EncodingError U+6B10"});
expect(() => {ms932Encoder.encode("\u6B11")}).toThrowError({name:"TypeError",message:"EncodingError U+6B11"});
expect([...ms932Encoder.encode("欒")].join(",")).toBe("159,82"); // U+6B12
expect(() => {ms932Encoder.encode("\u6B13")}).toThrowError({name:"TypeError",message:"EncodingError U+6B13"});
expect(() => {ms932Encoder.encode("\u6B14")}).toThrowError({name:"TypeError",message:"EncodingError U+6B14"});
expect(() => {ms932Encoder.encode("\u6B15")}).toThrowError({name:"TypeError",message:"EncodingError U+6B15"});
expect([...ms932Encoder.encode("欖")].join(",")).toBe("159,83"); // U+6B16
expect(() => {ms932Encoder.encode("\u6B17")}).toThrowError({name:"TypeError",message:"EncodingError U+6B17"});
expect(() => {ms932Encoder.encode("\u6B18")}).toThrowError({name:"TypeError",message:"EncodingError U+6B18"});
expect(() => {ms932Encoder.encode("\u6B19")}).toThrowError({name:"TypeError",message:"EncodingError U+6B19"});
expect(() => {ms932Encoder.encode("\u6B1A")}).toThrowError({name:"TypeError",message:"EncodingError U+6B1A"});
expect(() => {ms932Encoder.encode("\u6B1B")}).toThrowError({name:"TypeError",message:"EncodingError U+6B1B"});
expect(() => {ms932Encoder.encode("\u6B1C")}).toThrowError({name:"TypeError",message:"EncodingError U+6B1C"});
expect([...ms932Encoder.encode("欝")].join(",")).toBe("137,84"); // U+6B1D
expect(() => {ms932Encoder.encode("\u6B1E")}).toThrowError({name:"TypeError",message:"EncodingError U+6B1E"});
expect([...ms932Encoder.encode("欟欠次")].join(",")).toBe("159,85,140,135,142,159"); // U+6B1F
expect(() => {ms932Encoder.encode("\u6B22")}).toThrowError({name:"TypeError",message:"EncodingError U+6B22"});
expect([...ms932Encoder.encode("欣")].join(",")).toBe("139,211"); // U+6B23
expect(() => {ms932Encoder.encode("\u6B24")}).toThrowError({name:"TypeError",message:"EncodingError U+6B24"});
expect(() => {ms932Encoder.encode("\u6B25")}).toThrowError({name:"TypeError",message:"EncodingError U+6B25"});
expect(() => {ms932Encoder.encode("\u6B26")}).toThrowError({name:"TypeError",message:"EncodingError U+6B26"});
expect([...ms932Encoder.encode("欧")].join(",")).toBe("137,162"); // U+6B27
expect(() => {ms932Encoder.encode("\u6B28")}).toThrowError({name:"TypeError",message:"EncodingError U+6B28"});
expect(() => {ms932Encoder.encode("\u6B29")}).toThrowError({name:"TypeError",message:"EncodingError U+6B29"});
expect(() => {ms932Encoder.encode("\u6B2A")}).toThrowError({name:"TypeError",message:"EncodingError U+6B2A"});
expect(() => {ms932Encoder.encode("\u6B2B")}).toThrowError({name:"TypeError",message:"EncodingError U+6B2B"});
expect(() => {ms932Encoder.encode("\u6B2C")}).toThrowError({name:"TypeError",message:"EncodingError U+6B2C"});
expect(() => {ms932Encoder.encode("\u6B2D")}).toThrowError({name:"TypeError",message:"EncodingError U+6B2D"});
expect(() => {ms932Encoder.encode("\u6B2E")}).toThrowError({name:"TypeError",message:"EncodingError U+6B2E"});
expect(() => {ms932Encoder.encode("\u6B2F")}).toThrowError({name:"TypeError",message:"EncodingError U+6B2F"});
expect(() => {ms932Encoder.encode("\u6B30")}).toThrowError({name:"TypeError",message:"EncodingError U+6B30"});
expect(() => {ms932Encoder.encode("\u6B31")}).toThrowError({name:"TypeError",message:"EncodingError U+6B31"});
expect([...ms932Encoder.encode("欲")].join(",")).toBe("151,126"); // U+6B32
expect(() => {ms932Encoder.encode("\u6B33")}).toThrowError({name:"TypeError",message:"EncodingError U+6B33"});
expect(() => {ms932Encoder.encode("\u6B34")}).toThrowError({name:"TypeError",message:"EncodingError U+6B34"});
expect(() => {ms932Encoder.encode("\u6B35")}).toThrowError({name:"TypeError",message:"EncodingError U+6B35"});
expect(() => {ms932Encoder.encode("\u6B36")}).toThrowError({name:"TypeError",message:"EncodingError U+6B36"});
expect([...ms932Encoder.encode("欷欸欹欺")].join(",")).toBe("159,87,159,86,159,89,139,92"); // U+6B37
expect(() => {ms932Encoder.encode("\u6B3B")}).toThrowError({name:"TypeError",message:"EncodingError U+6B3B"});
expect(() => {ms932Encoder.encode("\u6B3C")}).toThrowError({name:"TypeError",message:"EncodingError U+6B3C"});
expect([...ms932Encoder.encode("欽款")].join(",")).toBe("139,212,138,188"); // U+6B3D
expect(() => {ms932Encoder.encode("\u6B3F")}).toThrowError({name:"TypeError",message:"EncodingError U+6B3F"});
expect(() => {ms932Encoder.encode("\u6B40")}).toThrowError({name:"TypeError",message:"EncodingError U+6B40"});
expect(() => {ms932Encoder.encode("\u6B41")}).toThrowError({name:"TypeError",message:"EncodingError U+6B41"});
expect(() => {ms932Encoder.encode("\u6B42")}).toThrowError({name:"TypeError",message:"EncodingError U+6B42"});
expect([...ms932Encoder.encode("歃")].join(",")).toBe("159,92"); // U+6B43
expect(() => {ms932Encoder.encode("\u6B44")}).toThrowError({name:"TypeError",message:"EncodingError U+6B44"});
expect(() => {ms932Encoder.encode("\u6B45")}).toThrowError({name:"TypeError",message:"EncodingError U+6B45"});
expect(() => {ms932Encoder.encode("\u6B46")}).toThrowError({name:"TypeError",message:"EncodingError U+6B46"});
expect([...ms932Encoder.encode("歇")].join(",")).toBe("159,91"); // U+6B47
expect(() => {ms932Encoder.encode("\u6B48")}).toThrowError({name:"TypeError",message:"EncodingError U+6B48"});
expect([...ms932Encoder.encode("歉")].join(",")).toBe("159,93"); // U+6B49
expect(() => {ms932Encoder.encode("\u6B4A")}).toThrowError({name:"TypeError",message:"EncodingError U+6B4A"});
expect(() => {ms932Encoder.encode("\u6B4B")}).toThrowError({name:"TypeError",message:"EncodingError U+6B4B"});
expect([...ms932Encoder.encode("歌")].join(",")).toBe("137,204"); // U+6B4C
expect(() => {ms932Encoder.encode("\u6B4D")}).toThrowError({name:"TypeError",message:"EncodingError U+6B4D"});
expect([...ms932Encoder.encode("歎")].join(",")).toBe("146,86"); // U+6B4E
expect(() => {ms932Encoder.encode("\u6B4F")}).toThrowError({name:"TypeError",message:"EncodingError U+6B4F"});
expect([...ms932Encoder.encode("歐")].join(",")).toBe("159,94"); // U+6B50
expect(() => {ms932Encoder.encode("\u6B51")}).toThrowError({name:"TypeError",message:"EncodingError U+6B51"});
expect(() => {ms932Encoder.encode("\u6B52")}).toThrowError({name:"TypeError",message:"EncodingError U+6B52"});
expect([...ms932Encoder.encode("歓歔")].join(",")).toBe("138,189,159,96"); // U+6B53
expect(() => {ms932Encoder.encode("\u6B55")}).toThrowError({name:"TypeError",message:"EncodingError U+6B55"});
expect(() => {ms932Encoder.encode("\u6B56")}).toThrowError({name:"TypeError",message:"EncodingError U+6B56"});
expect(() => {ms932Encoder.encode("\u6B57")}).toThrowError({name:"TypeError",message:"EncodingError U+6B57"});
expect(() => {ms932Encoder.encode("\u6B58")}).toThrowError({name:"TypeError",message:"EncodingError U+6B58"});
expect([...ms932Encoder.encode("歙")].join(",")).toBe("159,95"); // U+6B59
expect(() => {ms932Encoder.encode("\u6B5A")}).toThrowError({name:"TypeError",message:"EncodingError U+6B5A"});
expect([...ms932Encoder.encode("歛")].join(",")).toBe("159,97"); // U+6B5B
expect(() => {ms932Encoder.encode("\u6B5C")}).toThrowError({name:"TypeError",message:"EncodingError U+6B5C"});
expect(() => {ms932Encoder.encode("\u6B5D")}).toThrowError({name:"TypeError",message:"EncodingError U+6B5D"});
expect(() => {ms932Encoder.encode("\u6B5E")}).toThrowError({name:"TypeError",message:"EncodingError U+6B5E"});
expect([...ms932Encoder.encode("歟")].join(",")).toBe("159,98"); // U+6B5F
expect(() => {ms932Encoder.encode("\u6B60")}).toThrowError({name:"TypeError",message:"EncodingError U+6B60"});
expect([...ms932Encoder.encode("歡止正此")].join(",")).toBe("159,99,142,126,144,179,141,159"); // U+6B61
expect(() => {ms932Encoder.encode("\u6B65")}).toThrowError({name:"TypeError",message:"EncodingError U+6B65"});
expect([...ms932Encoder.encode("武")].join(",")).toBe("149,144"); // U+6B66
expect(() => {ms932Encoder.encode("\u6B67")}).toThrowError({name:"TypeError",message:"EncodingError U+6B67"});
expect(() => {ms932Encoder.encode("\u6B68")}).toThrowError({name:"TypeError",message:"EncodingError U+6B68"});
expect([...ms932Encoder.encode("歩歪")].join(",")).toBe("149,224,152,99"); // U+6B69
expect(() => {ms932Encoder.encode("\u6B6B")}).toThrowError({name:"TypeError",message:"EncodingError U+6B6B"});
expect(() => {ms932Encoder.encode("\u6B6C")}).toThrowError({name:"TypeError",message:"EncodingError U+6B6C"});
expect(() => {ms932Encoder.encode("\u6B6D")}).toThrowError({name:"TypeError",message:"EncodingError U+6B6D"});
expect(() => {ms932Encoder.encode("\u6B6E")}).toThrowError({name:"TypeError",message:"EncodingError U+6B6E"});
expect([...ms932Encoder.encode("歯")].join(",")).toBe("142,149"); // U+6B6F
expect(() => {ms932Encoder.encode("\u6B70")}).toThrowError({name:"TypeError",message:"EncodingError U+6B70"});
expect(() => {ms932Encoder.encode("\u6B71")}).toThrowError({name:"TypeError",message:"EncodingError U+6B71"});
expect(() => {ms932Encoder.encode("\u6B72")}).toThrowError({name:"TypeError",message:"EncodingError U+6B72"});
expect([...ms932Encoder.encode("歳歴")].join(",")).toBe("141,206,151,240"); // U+6B73
expect(() => {ms932Encoder.encode("\u6B75")}).toThrowError({name:"TypeError",message:"EncodingError U+6B75"});
expect(() => {ms932Encoder.encode("\u6B76")}).toThrowError({name:"TypeError",message:"EncodingError U+6B76"});
expect(() => {ms932Encoder.encode("\u6B77")}).toThrowError({name:"TypeError",message:"EncodingError U+6B77"});
expect([...ms932Encoder.encode("歸歹")].join(",")).toBe("159,100,159,101"); // U+6B78
expect(() => {ms932Encoder.encode("\u6B7A")}).toThrowError({name:"TypeError",message:"EncodingError U+6B7A"});
expect([...ms932Encoder.encode("死")].join(",")).toBe("142,128"); // U+6B7B
expect(() => {ms932Encoder.encode("\u6B7C")}).toThrowError({name:"TypeError",message:"EncodingError U+6B7C"});
expect(() => {ms932Encoder.encode("\u6B7D")}).toThrowError({name:"TypeError",message:"EncodingError U+6B7D"});
expect(() => {ms932Encoder.encode("\u6B7E")}).toThrowError({name:"TypeError",message:"EncodingError U+6B7E"});
expect([...ms932Encoder.encode("歿殀")].join(",")).toBe("159,102,159,103"); // U+6B7F
expect(() => {ms932Encoder.encode("\u6B81")}).toThrowError({name:"TypeError",message:"EncodingError U+6B81"});
expect(() => {ms932Encoder.encode("\u6B82")}).toThrowError({name:"TypeError",message:"EncodingError U+6B82"});
expect([...ms932Encoder.encode("殃殄")].join(",")).toBe("159,105,159,104"); // U+6B83
expect(() => {ms932Encoder.encode("\u6B85")}).toThrowError({name:"TypeError",message:"EncodingError U+6B85"});
expect([...ms932Encoder.encode("殆")].join(",")).toBe("150,119"); // U+6B86
expect(() => {ms932Encoder.encode("\u6B87")}).toThrowError({name:"TypeError",message:"EncodingError U+6B87"});
expect(() => {ms932Encoder.encode("\u6B88")}).toThrowError({name:"TypeError",message:"EncodingError U+6B88"});
expect([...ms932Encoder.encode("殉殊残")].join(",")).toBe("143,125,142,234,142,99"); // U+6B89
expect(() => {ms932Encoder.encode("\u6B8C")}).toThrowError({name:"TypeError",message:"EncodingError U+6B8C"});
expect([...ms932Encoder.encode("殍")].join(",")).toBe("159,106"); // U+6B8D
expect(() => {ms932Encoder.encode("\u6B8E")}).toThrowError({name:"TypeError",message:"EncodingError U+6B8E"});
expect(() => {ms932Encoder.encode("\u6B8F")}).toThrowError({name:"TypeError",message:"EncodingError U+6B8F"});
expect(() => {ms932Encoder.encode("\u6B90")}).toThrowError({name:"TypeError",message:"EncodingError U+6B90"});
expect(() => {ms932Encoder.encode("\u6B91")}).toThrowError({name:"TypeError",message:"EncodingError U+6B91"});
expect(() => {ms932Encoder.encode("\u6B92")}).toThrowError({name:"TypeError",message:"EncodingError U+6B92"});
expect(() => {ms932Encoder.encode("\u6B93")}).toThrowError({name:"TypeError",message:"EncodingError U+6B93"});
expect(() => {ms932Encoder.encode("\u6B94")}).toThrowError({name:"TypeError",message:"EncodingError U+6B94"});
expect([...ms932Encoder.encode("殕殖")].join(",")).toBe("159,108,144,66"); // U+6B95
expect(() => {ms932Encoder.encode("\u6B97")}).toThrowError({name:"TypeError",message:"EncodingError U+6B97"});
expect([...ms932Encoder.encode("殘")].join(",")).toBe("159,107"); // U+6B98
expect(() => {ms932Encoder.encode("\u6B99")}).toThrowError({name:"TypeError",message:"EncodingError U+6B99"});
expect(() => {ms932Encoder.encode("\u6B9A")}).toThrowError({name:"TypeError",message:"EncodingError U+6B9A"});
expect(() => {ms932Encoder.encode("\u6B9B")}).toThrowError({name:"TypeError",message:"EncodingError U+6B9B"});
expect(() => {ms932Encoder.encode("\u6B9C")}).toThrowError({name:"TypeError",message:"EncodingError U+6B9C"});
expect(() => {ms932Encoder.encode("\u6B9D")}).toThrowError({name:"TypeError",message:"EncodingError U+6B9D"});
expect([...ms932Encoder.encode("殞")].join(",")).toBe("159,109"); // U+6B9E
expect(() => {ms932Encoder.encode("\u6B9F")}).toThrowError({name:"TypeError",message:"EncodingError U+6B9F"});
expect(() => {ms932Encoder.encode("\u6BA0")}).toThrowError({name:"TypeError",message:"EncodingError U+6BA0"});
expect(() => {ms932Encoder.encode("\u6BA1")}).toThrowError({name:"TypeError",message:"EncodingError U+6BA1"});
expect(() => {ms932Encoder.encode("\u6BA2")}).toThrowError({name:"TypeError",message:"EncodingError U+6BA2"});
expect(() => {ms932Encoder.encode("\u6BA3")}).toThrowError({name:"TypeError",message:"EncodingError U+6BA3"});
expect([...ms932Encoder.encode("殤")].join(",")).toBe("159,110"); // U+6BA4
expect(() => {ms932Encoder.encode("\u6BA5")}).toThrowError({name:"TypeError",message:"EncodingError U+6BA5"});
expect(() => {ms932Encoder.encode("\u6BA6")}).toThrowError({name:"TypeError",message:"EncodingError U+6BA6"});
expect(() => {ms932Encoder.encode("\u6BA7")}).toThrowError({name:"TypeError",message:"EncodingError U+6BA7"});
expect(() => {ms932Encoder.encode("\u6BA8")}).toThrowError({name:"TypeError",message:"EncodingError U+6BA8"});
expect(() => {ms932Encoder.encode("\u6BA9")}).toThrowError({name:"TypeError",message:"EncodingError U+6BA9"});
expect([...ms932Encoder.encode("殪殫")].join(",")).toBe("159,111,159,112"); // U+6BAA
expect(() => {ms932Encoder.encode("\u6BAC")}).toThrowError({name:"TypeError",message:"EncodingError U+6BAC"});
expect(() => {ms932Encoder.encode("\u6BAD")}).toThrowError({name:"TypeError",message:"EncodingError U+6BAD"});
expect(() => {ms932Encoder.encode("\u6BAE")}).toThrowError({name:"TypeError",message:"EncodingError U+6BAE"});
expect([...ms932Encoder.encode("殯")].join(",")).toBe("159,113"); // U+6BAF
expect(() => {ms932Encoder.encode("\u6BB0")}).toThrowError({name:"TypeError",message:"EncodingError U+6BB0"});
expect([...ms932Encoder.encode("殱殲殳殴段")].join(",")).toBe("159,115,159,114,159,116,137,163,146,105"); // U+6BB1
expect(() => {ms932Encoder.encode("\u6BB6")}).toThrowError({name:"TypeError",message:"EncodingError U+6BB6"});
expect([...ms932Encoder.encode("殷")].join(",")).toBe("159,117"); // U+6BB7
expect(() => {ms932Encoder.encode("\u6BB8")}).toThrowError({name:"TypeError",message:"EncodingError U+6BB8"});
expect(() => {ms932Encoder.encode("\u6BB9")}).toThrowError({name:"TypeError",message:"EncodingError U+6BB9"});
expect([...ms932Encoder.encode("殺殻殼")].join(",")).toBe("142,69,138,107,159,118"); // U+6BBA
expect(() => {ms932Encoder.encode("\u6BBD")}).toThrowError({name:"TypeError",message:"EncodingError U+6BBD"});
expect(() => {ms932Encoder.encode("\u6BBE")}).toThrowError({name:"TypeError",message:"EncodingError U+6BBE"});
expect([...ms932Encoder.encode("殿毀")].join(",")).toBe("147,97,154,202"); // U+6BBF
expect(() => {ms932Encoder.encode("\u6BC1")}).toThrowError({name:"TypeError",message:"EncodingError U+6BC1"});
expect(() => {ms932Encoder.encode("\u6BC2")}).toThrowError({name:"TypeError",message:"EncodingError U+6BC2"});
expect(() => {ms932Encoder.encode("\u6BC3")}).toThrowError({name:"TypeError",message:"EncodingError U+6BC3"});
expect(() => {ms932Encoder.encode("\u6BC4")}).toThrowError({name:"TypeError",message:"EncodingError U+6BC4"});
expect([...ms932Encoder.encode("毅毆")].join(",")).toBe("139,66,159,119"); // U+6BC5
expect(() => {ms932Encoder.encode("\u6BC7")}).toThrowError({name:"TypeError",message:"EncodingError U+6BC7"});
expect(() => {ms932Encoder.encode("\u6BC8")}).toThrowError({name:"TypeError",message:"EncodingError U+6BC8"});
expect(() => {ms932Encoder.encode("\u6BC9")}).toThrowError({name:"TypeError",message:"EncodingError U+6BC9"});
expect(() => {ms932Encoder.encode("\u6BCA")}).toThrowError({name:"TypeError",message:"EncodingError U+6BCA"});
expect([...ms932Encoder.encode("毋")].join(",")).toBe("159,120"); // U+6BCB
expect(() => {ms932Encoder.encode("\u6BCC")}).toThrowError({name:"TypeError",message:"EncodingError U+6BCC"});
expect([...ms932Encoder.encode("母毎")].join(",")).toBe("149,234,150,136"); // U+6BCD
expect(() => {ms932Encoder.encode("\u6BCF")}).toThrowError({name:"TypeError",message:"EncodingError U+6BCF"});
expect(() => {ms932Encoder.encode("\u6BD0")}).toThrowError({name:"TypeError",message:"EncodingError U+6BD0"});
expect(() => {ms932Encoder.encode("\u6BD1")}).toThrowError({name:"TypeError",message:"EncodingError U+6BD1"});
expect([...ms932Encoder.encode("毒毓比")].join(",")).toBe("147,197,159,121,148,228"); // U+6BD2
expect(() => {ms932Encoder.encode("\u6BD5")}).toThrowError({name:"TypeError",message:"EncodingError U+6BD5"});
expect([...ms932Encoder.encode("毖")].join(",")).toBe("250,244"); // U+6BD6
expect(() => {ms932Encoder.encode("\u6BD7")}).toThrowError({name:"TypeError",message:"EncodingError U+6BD7"});
expect([...ms932Encoder.encode("毘")].join(",")).toBe("148,249"); // U+6BD8
expect(() => {ms932Encoder.encode("\u6BD9")}).toThrowError({name:"TypeError",message:"EncodingError U+6BD9"});
expect(() => {ms932Encoder.encode("\u6BDA")}).toThrowError({name:"TypeError",message:"EncodingError U+6BDA"});
expect([...ms932Encoder.encode("毛")].join(",")).toBe("150,209"); // U+6BDB
expect(() => {ms932Encoder.encode("\u6BDC")}).toThrowError({name:"TypeError",message:"EncodingError U+6BDC"});
expect(() => {ms932Encoder.encode("\u6BDD")}).toThrowError({name:"TypeError",message:"EncodingError U+6BDD"});
expect(() => {ms932Encoder.encode("\u6BDE")}).toThrowError({name:"TypeError",message:"EncodingError U+6BDE"});
expect([...ms932Encoder.encode("毟")].join(",")).toBe("159,122"); // U+6BDF
expect(() => {ms932Encoder.encode("\u6BE0")}).toThrowError({name:"TypeError",message:"EncodingError U+6BE0"});
expect(() => {ms932Encoder.encode("\u6BE1")}).toThrowError({name:"TypeError",message:"EncodingError U+6BE1"});
expect(() => {ms932Encoder.encode("\u6BE2")}).toThrowError({name:"TypeError",message:"EncodingError U+6BE2"});
expect(() => {ms932Encoder.encode("\u6BE3")}).toThrowError({name:"TypeError",message:"EncodingError U+6BE3"});
expect(() => {ms932Encoder.encode("\u6BE4")}).toThrowError({name:"TypeError",message:"EncodingError U+6BE4"});
expect(() => {ms932Encoder.encode("\u6BE5")}).toThrowError({name:"TypeError",message:"EncodingError U+6BE5"});
expect(() => {ms932Encoder.encode("\u6BE6")}).toThrowError({name:"TypeError",message:"EncodingError U+6BE6"});
expect(() => {ms932Encoder.encode("\u6BE7")}).toThrowError({name:"TypeError",message:"EncodingError U+6BE7"});
expect(() => {ms932Encoder.encode("\u6BE8")}).toThrowError({name:"TypeError",message:"EncodingError U+6BE8"});
expect(() => {ms932Encoder.encode("\u6BE9")}).toThrowError({name:"TypeError",message:"EncodingError U+6BE9"});
expect(() => {ms932Encoder.encode("\u6BEA")}).toThrowError({name:"TypeError",message:"EncodingError U+6BEA"});
expect([...ms932Encoder.encode("毫毬")].join(",")).toBe("159,124,159,123"); // U+6BEB
expect(() => {ms932Encoder.encode("\u6BED")}).toThrowError({name:"TypeError",message:"EncodingError U+6BED"});
expect(() => {ms932Encoder.encode("\u6BEE")}).toThrowError({name:"TypeError",message:"EncodingError U+6BEE"});
expect([...ms932Encoder.encode("毯")].join(",")).toBe("159,126"); // U+6BEF
expect(() => {ms932Encoder.encode("\u6BF0")}).toThrowError({name:"TypeError",message:"EncodingError U+6BF0"});
expect(() => {ms932Encoder.encode("\u6BF1")}).toThrowError({name:"TypeError",message:"EncodingError U+6BF1"});
expect(() => {ms932Encoder.encode("\u6BF2")}).toThrowError({name:"TypeError",message:"EncodingError U+6BF2"});
expect([...ms932Encoder.encode("毳")].join(",")).toBe("159,125"); // U+6BF3
expect(() => {ms932Encoder.encode("\u6BF4")}).toThrowError({name:"TypeError",message:"EncodingError U+6BF4"});
expect(() => {ms932Encoder.encode("\u6BF5")}).toThrowError({name:"TypeError",message:"EncodingError U+6BF5"});
expect(() => {ms932Encoder.encode("\u6BF6")}).toThrowError({name:"TypeError",message:"EncodingError U+6BF6"});
expect(() => {ms932Encoder.encode("\u6BF7")}).toThrowError({name:"TypeError",message:"EncodingError U+6BF7"});
expect(() => {ms932Encoder.encode("\u6BF8")}).toThrowError({name:"TypeError",message:"EncodingError U+6BF8"});
expect(() => {ms932Encoder.encode("\u6BF9")}).toThrowError({name:"TypeError",message:"EncodingError U+6BF9"});
expect(() => {ms932Encoder.encode("\u6BFA")}).toThrowError({name:"TypeError",message:"EncodingError U+6BFA"});
expect(() => {ms932Encoder.encode("\u6BFB")}).toThrowError({name:"TypeError",message:"EncodingError U+6BFB"});
expect(() => {ms932Encoder.encode("\u6BFC")}).toThrowError({name:"TypeError",message:"EncodingError U+6BFC"});
expect(() => {ms932Encoder.encode("\u6BFD")}).toThrowError({name:"TypeError",message:"EncodingError U+6BFD"});
expect(() => {ms932Encoder.encode("\u6BFE")}).toThrowError({name:"TypeError",message:"EncodingError U+6BFE"});
expect(() => {ms932Encoder.encode("\u6BFF")}).toThrowError({name:"TypeError",message:"EncodingError U+6BFF"});
expect(() => {ms932Encoder.encode("\u6C00")}).toThrowError({name:"TypeError",message:"EncodingError U+6C00"});
expect(() => {ms932Encoder.encode("\u6C01")}).toThrowError({name:"TypeError",message:"EncodingError U+6C01"});
expect(() => {ms932Encoder.encode("\u6C02")}).toThrowError({name:"TypeError",message:"EncodingError U+6C02"});
expect(() => {ms932Encoder.encode("\u6C03")}).toThrowError({name:"TypeError",message:"EncodingError U+6C03"});
expect(() => {ms932Encoder.encode("\u6C04")}).toThrowError({name:"TypeError",message:"EncodingError U+6C04"});
expect(() => {ms932Encoder.encode("\u6C05")}).toThrowError({name:"TypeError",message:"EncodingError U+6C05"});
expect(() => {ms932Encoder.encode("\u6C06")}).toThrowError({name:"TypeError",message:"EncodingError U+6C06"});
expect(() => {ms932Encoder.encode("\u6C07")}).toThrowError({name:"TypeError",message:"EncodingError U+6C07"});
expect([...ms932Encoder.encode("氈")].join(",")).toBe("159,129"); // U+6C08
expect(() => {ms932Encoder.encode("\u6C09")}).toThrowError({name:"TypeError",message:"EncodingError U+6C09"});
expect(() => {ms932Encoder.encode("\u6C0A")}).toThrowError({name:"TypeError",message:"EncodingError U+6C0A"});
expect(() => {ms932Encoder.encode("\u6C0B")}).toThrowError({name:"TypeError",message:"EncodingError U+6C0B"});
expect(() => {ms932Encoder.encode("\u6C0C")}).toThrowError({name:"TypeError",message:"EncodingError U+6C0C"});
expect(() => {ms932Encoder.encode("\u6C0D")}).toThrowError({name:"TypeError",message:"EncodingError U+6C0D"});
expect(() => {ms932Encoder.encode("\u6C0E")}).toThrowError({name:"TypeError",message:"EncodingError U+6C0E"});
expect([...ms932Encoder.encode("氏")].join(",")).toBe("142,129"); // U+6C0F
expect(() => {ms932Encoder.encode("\u6C10")}).toThrowError({name:"TypeError",message:"EncodingError U+6C10"});
expect([...ms932Encoder.encode("民")].join(",")).toBe("150,175"); // U+6C11
expect(() => {ms932Encoder.encode("\u6C12")}).toThrowError({name:"TypeError",message:"EncodingError U+6C12"});
expect([...ms932Encoder.encode("氓气")].join(",")).toBe("159,130,159,131"); // U+6C13
expect(() => {ms932Encoder.encode("\u6C15")}).toThrowError({name:"TypeError",message:"EncodingError U+6C15"});
expect(() => {ms932Encoder.encode("\u6C16")}).toThrowError({name:"TypeError",message:"EncodingError U+6C16"});
expect([...ms932Encoder.encode("気")].join(",")).toBe("139,67"); // U+6C17
expect(() => {ms932Encoder.encode("\u6C18")}).toThrowError({name:"TypeError",message:"EncodingError U+6C18"});
expect(() => {ms932Encoder.encode("\u6C19")}).toThrowError({name:"TypeError",message:"EncodingError U+6C19"});
expect(() => {ms932Encoder.encode("\u6C1A")}).toThrowError({name:"TypeError",message:"EncodingError U+6C1A"});
expect([...ms932Encoder.encode("氛")].join(",")).toBe("159,132"); // U+6C1B
expect(() => {ms932Encoder.encode("\u6C1C")}).toThrowError({name:"TypeError",message:"EncodingError U+6C1C"});
expect(() => {ms932Encoder.encode("\u6C1D")}).toThrowError({name:"TypeError",message:"EncodingError U+6C1D"});
expect(() => {ms932Encoder.encode("\u6C1E")}).toThrowError({name:"TypeError",message:"EncodingError U+6C1E"});
expect(() => {ms932Encoder.encode("\u6C1F")}).toThrowError({name:"TypeError",message:"EncodingError U+6C1F"});
expect(() => {ms932Encoder.encode("\u6C20")}).toThrowError({name:"TypeError",message:"EncodingError U+6C20"});
expect(() => {ms932Encoder.encode("\u6C21")}).toThrowError({name:"TypeError",message:"EncodingError U+6C21"});
expect(() => {ms932Encoder.encode("\u6C22")}).toThrowError({name:"TypeError",message:"EncodingError U+6C22"});
expect([...ms932Encoder.encode("氣氤")].join(",")).toBe("159,134,159,133"); // U+6C23
expect(() => {ms932Encoder.encode("\u6C25")}).toThrowError({name:"TypeError",message:"EncodingError U+6C25"});
expect(() => {ms932Encoder.encode("\u6C26")}).toThrowError({name:"TypeError",message:"EncodingError U+6C26"});
expect(() => {ms932Encoder.encode("\u6C27")}).toThrowError({name:"TypeError",message:"EncodingError U+6C27"});
expect(() => {ms932Encoder.encode("\u6C28")}).toThrowError({name:"TypeError",message:"EncodingError U+6C28"});
expect(() => {ms932Encoder.encode("\u6C29")}).toThrowError({name:"TypeError",message:"EncodingError U+6C29"});
expect(() => {ms932Encoder.encode("\u6C2A")}).toThrowError({name:"TypeError",message:"EncodingError U+6C2A"});
expect(() => {ms932Encoder.encode("\u6C2B")}).toThrowError({name:"TypeError",message:"EncodingError U+6C2B"});
expect(() => {ms932Encoder.encode("\u6C2C")}).toThrowError({name:"TypeError",message:"EncodingError U+6C2C"});
expect(() => {ms932Encoder.encode("\u6C2D")}).toThrowError({name:"TypeError",message:"EncodingError U+6C2D"});
expect(() => {ms932Encoder.encode("\u6C2E")}).toThrowError({name:"TypeError",message:"EncodingError U+6C2E"});
expect(() => {ms932Encoder.encode("\u6C2F")}).toThrowError({name:"TypeError",message:"EncodingError U+6C2F"});
expect(() => {ms932Encoder.encode("\u6C30")}).toThrowError({name:"TypeError",message:"EncodingError U+6C30"});
expect(() => {ms932Encoder.encode("\u6C31")}).toThrowError({name:"TypeError",message:"EncodingError U+6C31"});
expect(() => {ms932Encoder.encode("\u6C32")}).toThrowError({name:"TypeError",message:"EncodingError U+6C32"});
expect(() => {ms932Encoder.encode("\u6C33")}).toThrowError({name:"TypeError",message:"EncodingError U+6C33"});
expect([...ms932Encoder.encode("水")].join(",")).toBe("144,133"); // U+6C34
expect(() => {ms932Encoder.encode("\u6C35")}).toThrowError({name:"TypeError",message:"EncodingError U+6C35"});
expect(() => {ms932Encoder.encode("\u6C36")}).toThrowError({name:"TypeError",message:"EncodingError U+6C36"});
expect([...ms932Encoder.encode("氷永")].join(",")).toBe("149,88,137,105"); // U+6C37
expect(() => {ms932Encoder.encode("\u6C39")}).toThrowError({name:"TypeError",message:"EncodingError U+6C39"});
expect(() => {ms932Encoder.encode("\u6C3A")}).toThrowError({name:"TypeError",message:"EncodingError U+6C3A"});
expect(() => {ms932Encoder.encode("\u6C3B")}).toThrowError({name:"TypeError",message:"EncodingError U+6C3B"});
expect(() => {ms932Encoder.encode("\u6C3C")}).toThrowError({name:"TypeError",message:"EncodingError U+6C3C"});
expect(() => {ms932Encoder.encode("\u6C3D")}).toThrowError({name:"TypeError",message:"EncodingError U+6C3D"});
expect([...ms932Encoder.encode("氾氿汀汁求")].join(",")).toBe("148,195,250,245,146,243,143,96,139,129"); // U+6C3E
expect(() => {ms932Encoder.encode("\u6C43")}).toThrowError({name:"TypeError",message:"EncodingError U+6C43"});
expect(() => {ms932Encoder.encode("\u6C44")}).toThrowError({name:"TypeError",message:"EncodingError U+6C44"});
expect(() => {ms932Encoder.encode("\u6C45")}).toThrowError({name:"TypeError",message:"EncodingError U+6C45"});
expect(() => {ms932Encoder.encode("\u6C46")}).toThrowError({name:"TypeError",message:"EncodingError U+6C46"});
expect(() => {ms932Encoder.encode("\u6C47")}).toThrowError({name:"TypeError",message:"EncodingError U+6C47"});
expect(() => {ms932Encoder.encode("\u6C48")}).toThrowError({name:"TypeError",message:"EncodingError U+6C48"});
expect(() => {ms932Encoder.encode("\u6C49")}).toThrowError({name:"TypeError",message:"EncodingError U+6C49"});
expect(() => {ms932Encoder.encode("\u6C4A")}).toThrowError({name:"TypeError",message:"EncodingError U+6C4A"});
expect(() => {ms932Encoder.encode("\u6C4B")}).toThrowError({name:"TypeError",message:"EncodingError U+6C4B"});
expect(() => {ms932Encoder.encode("\u6C4C")}).toThrowError({name:"TypeError",message:"EncodingError U+6C4C"});
expect(() => {ms932Encoder.encode("\u6C4D")}).toThrowError({name:"TypeError",message:"EncodingError U+6C4D"});
expect([...ms932Encoder.encode("汎")].join(",")).toBe("148,196"); // U+6C4E
expect(() => {ms932Encoder.encode("\u6C4F")}).toThrowError({name:"TypeError",message:"EncodingError U+6C4F"});
expect([...ms932Encoder.encode("汐")].join(",")).toBe("142,172"); // U+6C50
expect(() => {ms932Encoder.encode("\u6C51")}).toThrowError({name:"TypeError",message:"EncodingError U+6C51"});
expect(() => {ms932Encoder.encode("\u6C52")}).toThrowError({name:"TypeError",message:"EncodingError U+6C52"});
expect(() => {ms932Encoder.encode("\u6C53")}).toThrowError({name:"TypeError",message:"EncodingError U+6C53"});
expect(() => {ms932Encoder.encode("\u6C54")}).toThrowError({name:"TypeError",message:"EncodingError U+6C54"});
expect([...ms932Encoder.encode("汕")].join(",")).toBe("159,136"); // U+6C55
expect(() => {ms932Encoder.encode("\u6C56")}).toThrowError({name:"TypeError",message:"EncodingError U+6C56"});
expect([...ms932Encoder.encode("汗")].join(",")).toBe("138,190"); // U+6C57
expect(() => {ms932Encoder.encode("\u6C58")}).toThrowError({name:"TypeError",message:"EncodingError U+6C58"});
expect(() => {ms932Encoder.encode("\u6C59")}).toThrowError({name:"TypeError",message:"EncodingError U+6C59"});
expect([...ms932Encoder.encode("汚")].join(",")).toBe("137,152"); // U+6C5A
expect(() => {ms932Encoder.encode("\u6C5B")}).toThrowError({name:"TypeError",message:"EncodingError U+6C5B"});
expect([...ms932Encoder.encode("汜汝汞江池")].join(",")).toBe("250,246,147,240,159,135,141,93,146,114"); // U+6C5C
expect(() => {ms932Encoder.encode("\u6C61")}).toThrowError({name:"TypeError",message:"EncodingError U+6C61"});
expect([...ms932Encoder.encode("汢")].join(",")).toBe("159,137"); // U+6C62
expect(() => {ms932Encoder.encode("\u6C63")}).toThrowError({name:"TypeError",message:"EncodingError U+6C63"});
expect(() => {ms932Encoder.encode("\u6C64")}).toThrowError({name:"TypeError",message:"EncodingError U+6C64"});
expect(() => {ms932Encoder.encode("\u6C65")}).toThrowError({name:"TypeError",message:"EncodingError U+6C65"});
expect(() => {ms932Encoder.encode("\u6C66")}).toThrowError({name:"TypeError",message:"EncodingError U+6C66"});
expect(() => {ms932Encoder.encode("\u6C67")}).toThrowError({name:"TypeError",message:"EncodingError U+6C67"});
expect([...ms932Encoder.encode("汨")].join(",")).toBe("159,145"); // U+6C68
expect(() => {ms932Encoder.encode("\u6C69")}).toThrowError({name:"TypeError",message:"EncodingError U+6C69"});
expect([...ms932Encoder.encode("汪")].join(",")).toBe("159,138"); // U+6C6A
expect(() => {ms932Encoder.encode("\u6C6B")}).toThrowError({name:"TypeError",message:"EncodingError U+6C6B"});
expect(() => {ms932Encoder.encode("\u6C6C")}).toThrowError({name:"TypeError",message:"EncodingError U+6C6C"});
expect(() => {ms932Encoder.encode("\u6C6D")}).toThrowError({name:"TypeError",message:"EncodingError U+6C6D"});
expect(() => {ms932Encoder.encode("\u6C6E")}).toThrowError({name:"TypeError",message:"EncodingError U+6C6E"});
expect([...ms932Encoder.encode("汯汰")].join(",")).toBe("250,248,145,191"); // U+6C6F
expect(() => {ms932Encoder.encode("\u6C71")}).toThrowError({name:"TypeError",message:"EncodingError U+6C71"});
expect([...ms932Encoder.encode("汲汳")].join(",")).toBe("139,130,159,146"); // U+6C72
expect(() => {ms932Encoder.encode("\u6C74")}).toThrowError({name:"TypeError",message:"EncodingError U+6C74"});
expect(() => {ms932Encoder.encode("\u6C75")}).toThrowError({name:"TypeError",message:"EncodingError U+6C75"});
expect(() => {ms932Encoder.encode("\u6C76")}).toThrowError({name:"TypeError",message:"EncodingError U+6C76"});
expect(() => {ms932Encoder.encode("\u6C77")}).toThrowError({name:"TypeError",message:"EncodingError U+6C77"});
expect(() => {ms932Encoder.encode("\u6C78")}).toThrowError({name:"TypeError",message:"EncodingError U+6C78"});
expect(() => {ms932Encoder.encode("\u6C79")}).toThrowError({name:"TypeError",message:"EncodingError U+6C79"});
expect([...ms932Encoder.encode("決")].join(",")).toBe("140,136"); // U+6C7A
expect(() => {ms932Encoder.encode("\u6C7B")}).toThrowError({name:"TypeError",message:"EncodingError U+6C7B"});
expect(() => {ms932Encoder.encode("\u6C7C")}).toThrowError({name:"TypeError",message:"EncodingError U+6C7C"});
expect([...ms932Encoder.encode("汽汾")].join(",")).toBe("139,68,159,144"); // U+6C7D
expect(() => {ms932Encoder.encode("\u6C7F")}).toThrowError({name:"TypeError",message:"EncodingError U+6C7F"});
expect(() => {ms932Encoder.encode("\u6C80")}).toThrowError({name:"TypeError",message:"EncodingError U+6C80"});
expect([...ms932Encoder.encode("沁沂沃")].join(",")).toBe("159,142,159,139,151,128"); // U+6C81
expect(() => {ms932Encoder.encode("\u6C84")}).toThrowError({name:"TypeError",message:"EncodingError U+6C84"});
expect(() => {ms932Encoder.encode("\u6C85")}).toThrowError({name:"TypeError",message:"EncodingError U+6C85"});
expect([...ms932Encoder.encode("沆")].join(",")).toBe("250,247"); // U+6C86
expect(() => {ms932Encoder.encode("\u6C87")}).toThrowError({name:"TypeError",message:"EncodingError U+6C87"});
expect([...ms932Encoder.encode("沈")].join(",")).toBe("146,190"); // U+6C88
expect(() => {ms932Encoder.encode("\u6C89")}).toThrowError({name:"TypeError",message:"EncodingError U+6C89"});
expect(() => {ms932Encoder.encode("\u6C8A")}).toThrowError({name:"TypeError",message:"EncodingError U+6C8A"});
expect(() => {ms932Encoder.encode("\u6C8B")}).toThrowError({name:"TypeError",message:"EncodingError U+6C8B"});
expect([...ms932Encoder.encode("沌沍")].join(",")).toBe("147,215,159,140"); // U+6C8C
expect(() => {ms932Encoder.encode("\u6C8E")}).toThrowError({name:"TypeError",message:"EncodingError U+6C8E"});
expect(() => {ms932Encoder.encode("\u6C8F")}).toThrowError({name:"TypeError",message:"EncodingError U+6C8F"});
expect([...ms932Encoder.encode("沐")].join(",")).toBe("159,148"); // U+6C90
expect(() => {ms932Encoder.encode("\u6C91")}).toThrowError({name:"TypeError",message:"EncodingError U+6C91"});
expect([...ms932Encoder.encode("沒沓")].join(",")).toBe("159,147,140,66"); // U+6C92
expect(() => {ms932Encoder.encode("\u6C94")}).toThrowError({name:"TypeError",message:"EncodingError U+6C94"});
expect(() => {ms932Encoder.encode("\u6C95")}).toThrowError({name:"TypeError",message:"EncodingError U+6C95"});
expect([...ms932Encoder.encode("沖")].join(",")).toBe("137,171"); // U+6C96
expect(() => {ms932Encoder.encode("\u6C97")}).toThrowError({name:"TypeError",message:"EncodingError U+6C97"});
expect(() => {ms932Encoder.encode("\u6C98")}).toThrowError({name:"TypeError",message:"EncodingError U+6C98"});
expect([...ms932Encoder.encode("沙沚沛")].join(",")).toBe("141,185,159,141,159,143"); // U+6C99
expect(() => {ms932Encoder.encode("\u6C9C")}).toThrowError({name:"TypeError",message:"EncodingError U+6C9C"});
expect(() => {ms932Encoder.encode("\u6C9D")}).toThrowError({name:"TypeError",message:"EncodingError U+6C9D"});
expect(() => {ms932Encoder.encode("\u6C9E")}).toThrowError({name:"TypeError",message:"EncodingError U+6C9E"});
expect(() => {ms932Encoder.encode("\u6C9F")}).toThrowError({name:"TypeError",message:"EncodingError U+6C9F"});
expect(() => {ms932Encoder.encode("\u6CA0")}).toThrowError({name:"TypeError",message:"EncodingError U+6CA0"});
expect([...ms932Encoder.encode("没沢")].join(",")).toBe("150,118,145,242"); // U+6CA1
expect(() => {ms932Encoder.encode("\u6CA3")}).toThrowError({name:"TypeError",message:"EncodingError U+6CA3"});
expect(() => {ms932Encoder.encode("\u6CA4")}).toThrowError({name:"TypeError",message:"EncodingError U+6CA4"});
expect(() => {ms932Encoder.encode("\u6CA5")}).toThrowError({name:"TypeError",message:"EncodingError U+6CA5"});
expect(() => {ms932Encoder.encode("\u6CA6")}).toThrowError({name:"TypeError",message:"EncodingError U+6CA6"});
expect(() => {ms932Encoder.encode("\u6CA7")}).toThrowError({name:"TypeError",message:"EncodingError U+6CA7"});
expect(() => {ms932Encoder.encode("\u6CA8")}).toThrowError({name:"TypeError",message:"EncodingError U+6CA8"});
expect(() => {ms932Encoder.encode("\u6CA9")}).toThrowError({name:"TypeError",message:"EncodingError U+6CA9"});
expect(() => {ms932Encoder.encode("\u6CAA")}).toThrowError({name:"TypeError",message:"EncodingError U+6CAA"});
expect([...ms932Encoder.encode("沫")].join(",")).toBe("150,151"); // U+6CAB
expect(() => {ms932Encoder.encode("\u6CAC")}).toThrowError({name:"TypeError",message:"EncodingError U+6CAC"});
expect(() => {ms932Encoder.encode("\u6CAD")}).toThrowError({name:"TypeError",message:"EncodingError U+6CAD"});
expect([...ms932Encoder.encode("沮")].join(",")).toBe("159,156"); // U+6CAE
expect(() => {ms932Encoder.encode("\u6CAF")}).toThrowError({name:"TypeError",message:"EncodingError U+6CAF"});
expect(() => {ms932Encoder.encode("\u6CB0")}).toThrowError({name:"TypeError",message:"EncodingError U+6CB0"});
expect([...ms932Encoder.encode("沱")].join(",")).toBe("159,157"); // U+6CB1
expect(() => {ms932Encoder.encode("\u6CB2")}).toThrowError({name:"TypeError",message:"EncodingError U+6CB2"});
expect([...ms932Encoder.encode("河")].join(",")).toBe("137,205"); // U+6CB3
expect(() => {ms932Encoder.encode("\u6CB4")}).toThrowError({name:"TypeError",message:"EncodingError U+6CB4"});
expect(() => {ms932Encoder.encode("\u6CB5")}).toThrowError({name:"TypeError",message:"EncodingError U+6CB5"});
expect(() => {ms932Encoder.encode("\u6CB6")}).toThrowError({name:"TypeError",message:"EncodingError U+6CB6"});
expect(() => {ms932Encoder.encode("\u6CB7")}).toThrowError({name:"TypeError",message:"EncodingError U+6CB7"});
expect([...ms932Encoder.encode("沸油沺治沼沽沾沿")].join(",")).toBe("149,166,150,251,159,159,142,161,143,192,159,152,159,158,137,136"); // U+6CB8
expect(() => {ms932Encoder.encode("\u6CC0")}).toThrowError({name:"TypeError",message:"EncodingError U+6CC0"});
expect([...ms932Encoder.encode("況")].join(",")).toBe("139,181"); // U+6CC1
expect(() => {ms932Encoder.encode("\u6CC2")}).toThrowError({name:"TypeError",message:"EncodingError U+6CC2"});
expect(() => {ms932Encoder.encode("\u6CC3")}).toThrowError({name:"TypeError",message:"EncodingError U+6CC3"});
expect([...ms932Encoder.encode("泄泅")].join(",")).toBe("159,149,159,154"); // U+6CC4
expect(() => {ms932Encoder.encode("\u6CC6")}).toThrowError({name:"TypeError",message:"EncodingError U+6CC6"});
expect(() => {ms932Encoder.encode("\u6CC7")}).toThrowError({name:"TypeError",message:"EncodingError U+6CC7"});
expect(() => {ms932Encoder.encode("\u6CC8")}).toThrowError({name:"TypeError",message:"EncodingError U+6CC8"});
expect([...ms932Encoder.encode("泉泊")].join(",")).toBe("144,242,148,145"); // U+6CC9
expect(() => {ms932Encoder.encode("\u6CCB")}).toThrowError({name:"TypeError",message:"EncodingError U+6CCB"});
expect([...ms932Encoder.encode("泌")].join(",")).toBe("148,229"); // U+6CCC
expect(() => {ms932Encoder.encode("\u6CCD")}).toThrowError({name:"TypeError",message:"EncodingError U+6CCD"});
expect(() => {ms932Encoder.encode("\u6CCE")}).toThrowError({name:"TypeError",message:"EncodingError U+6CCE"});
expect(() => {ms932Encoder.encode("\u6CCF")}).toThrowError({name:"TypeError",message:"EncodingError U+6CCF"});
expect(() => {ms932Encoder.encode("\u6CD0")}).toThrowError({name:"TypeError",message:"EncodingError U+6CD0"});
expect(() => {ms932Encoder.encode("\u6CD1")}).toThrowError({name:"TypeError",message:"EncodingError U+6CD1"});
expect(() => {ms932Encoder.encode("\u6CD2")}).toThrowError({name:"TypeError",message:"EncodingError U+6CD2"});
expect([...ms932Encoder.encode("泓")].join(",")).toBe("159,151"); // U+6CD3
expect(() => {ms932Encoder.encode("\u6CD4")}).toThrowError({name:"TypeError",message:"EncodingError U+6CD4"});
expect([...ms932Encoder.encode("法")].join(",")).toBe("150,64"); // U+6CD5
expect(() => {ms932Encoder.encode("\u6CD6")}).toThrowError({name:"TypeError",message:"EncodingError U+6CD6"});
expect([...ms932Encoder.encode("泗")].join(",")).toBe("159,153"); // U+6CD7
expect(() => {ms932Encoder.encode("\u6CD8")}).toThrowError({name:"TypeError",message:"EncodingError U+6CD8"});
expect([...ms932Encoder.encode("泙泚泛")].join(",")).toBe("159,162,250,249,159,160"); // U+6CD9
expect(() => {ms932Encoder.encode("\u6CDC")}).toThrowError({name:"TypeError",message:"EncodingError U+6CDC"});
expect([...ms932Encoder.encode("泝")].join(",")).toBe("159,155"); // U+6CDD
expect(() => {ms932Encoder.encode("\u6CDE")}).toThrowError({name:"TypeError",message:"EncodingError U+6CDE"});
expect(() => {ms932Encoder.encode("\u6CDF")}).toThrowError({name:"TypeError",message:"EncodingError U+6CDF"});
expect(() => {ms932Encoder.encode("\u6CE0")}).toThrowError({name:"TypeError",message:"EncodingError U+6CE0"});
expect([...ms932Encoder.encode("泡波泣")].join(",")).toBe("150,65,148,103,139,131"); // U+6CE1
expect(() => {ms932Encoder.encode("\u6CE4")}).toThrowError({name:"TypeError",message:"EncodingError U+6CE4"});
expect([...ms932Encoder.encode("泥")].join(",")).toBe("147,68"); // U+6CE5
expect(() => {ms932Encoder.encode("\u6CE6")}).toThrowError({name:"TypeError",message:"EncodingError U+6CE6"});
expect(() => {ms932Encoder.encode("\u6CE7")}).toThrowError({name:"TypeError",message:"EncodingError U+6CE7"});
expect([...ms932Encoder.encode("注")].join(",")).toBe("146,141"); // U+6CE8
expect(() => {ms932Encoder.encode("\u6CE9")}).toThrowError({name:"TypeError",message:"EncodingError U+6CE9"});
expect([...ms932Encoder.encode("泪")].join(",")).toBe("159,163"); // U+6CEA
expect(() => {ms932Encoder.encode("\u6CEB")}).toThrowError({name:"TypeError",message:"EncodingError U+6CEB"});
expect(() => {ms932Encoder.encode("\u6CEC")}).toThrowError({name:"TypeError",message:"EncodingError U+6CEC"});
expect(() => {ms932Encoder.encode("\u6CED")}).toThrowError({name:"TypeError",message:"EncodingError U+6CED"});
expect(() => {ms932Encoder.encode("\u6CEE")}).toThrowError({name:"TypeError",message:"EncodingError U+6CEE"});
expect([...ms932Encoder.encode("泯泰泱")].join(",")).toBe("159,161,145,215,159,150"); // U+6CEF
expect(() => {ms932Encoder.encode("\u6CF2")}).toThrowError({name:"TypeError",message:"EncodingError U+6CF2"});
expect([...ms932Encoder.encode("泳")].join(",")).toBe("137,106"); // U+6CF3
expect(() => {ms932Encoder.encode("\u6CF4")}).toThrowError({name:"TypeError",message:"EncodingError U+6CF4"});
expect(() => {ms932Encoder.encode("\u6CF5")}).toThrowError({name:"TypeError",message:"EncodingError U+6CF5"});
expect(() => {ms932Encoder.encode("\u6CF6")}).toThrowError({name:"TypeError",message:"EncodingError U+6CF6"});
expect(() => {ms932Encoder.encode("\u6CF7")}).toThrowError({name:"TypeError",message:"EncodingError U+6CF7"});
expect(() => {ms932Encoder.encode("\u6CF8")}).toThrowError({name:"TypeError",message:"EncodingError U+6CF8"});
expect(() => {ms932Encoder.encode("\u6CF9")}).toThrowError({name:"TypeError",message:"EncodingError U+6CF9"});
expect(() => {ms932Encoder.encode("\u6CFA")}).toThrowError({name:"TypeError",message:"EncodingError U+6CFA"});
expect(() => {ms932Encoder.encode("\u6CFB")}).toThrowError({name:"TypeError",message:"EncodingError U+6CFB"});
expect(() => {ms932Encoder.encode("\u6CFC")}).toThrowError({name:"TypeError",message:"EncodingError U+6CFC"});
expect(() => {ms932Encoder.encode("\u6CFD")}).toThrowError({name:"TypeError",message:"EncodingError U+6CFD"});
expect(() => {ms932Encoder.encode("\u6CFE")}).toThrowError({name:"TypeError",message:"EncodingError U+6CFE"});
expect(() => {ms932Encoder.encode("\u6CFF")}).toThrowError({name:"TypeError",message:"EncodingError U+6CFF"});
expect(() => {ms932Encoder.encode("\u6D00")}).toThrowError({name:"TypeError",message:"EncodingError U+6D00"});
expect(() => {ms932Encoder.encode("\u6D01")}).toThrowError({name:"TypeError",message:"EncodingError U+6D01"});
expect(() => {ms932Encoder.encode("\u6D02")}).toThrowError({name:"TypeError",message:"EncodingError U+6D02"});
expect(() => {ms932Encoder.encode("\u6D03")}).toThrowError({name:"TypeError",message:"EncodingError U+6D03"});
expect([...ms932Encoder.encode("洄")].join(",")).toBe("250,250"); // U+6D04
expect(() => {ms932Encoder.encode("\u6D05")}).toThrowError({name:"TypeError",message:"EncodingError U+6D05"});
expect(() => {ms932Encoder.encode("\u6D06")}).toThrowError({name:"TypeError",message:"EncodingError U+6D06"});
expect(() => {ms932Encoder.encode("\u6D07")}).toThrowError({name:"TypeError",message:"EncodingError U+6D07"});
expect(() => {ms932Encoder.encode("\u6D08")}).toThrowError({name:"TypeError",message:"EncodingError U+6D08"});
expect(() => {ms932Encoder.encode("\u6D09")}).toThrowError({name:"TypeError",message:"EncodingError U+6D09"});
expect(() => {ms932Encoder.encode("\u6D0A")}).toThrowError({name:"TypeError",message:"EncodingError U+6D0A"});
expect([...ms932Encoder.encode("洋洌")].join(",")).toBe("151,109,159,174"); // U+6D0B
expect(() => {ms932Encoder.encode("\u6D0D")}).toThrowError({name:"TypeError",message:"EncodingError U+6D0D"});
expect(() => {ms932Encoder.encode("\u6D0E")}).toThrowError({name:"TypeError",message:"EncodingError U+6D0E"});
expect(() => {ms932Encoder.encode("\u6D0F")}).toThrowError({name:"TypeError",message:"EncodingError U+6D0F"});
expect(() => {ms932Encoder.encode("\u6D10")}).toThrowError({name:"TypeError",message:"EncodingError U+6D10"});
expect(() => {ms932Encoder.encode("\u6D11")}).toThrowError({name:"TypeError",message:"EncodingError U+6D11"});
expect([...ms932Encoder.encode("洒")].join(",")).toBe("159,173"); // U+6D12
expect(() => {ms932Encoder.encode("\u6D13")}).toThrowError({name:"TypeError",message:"EncodingError U+6D13"});
expect(() => {ms932Encoder.encode("\u6D14")}).toThrowError({name:"TypeError",message:"EncodingError U+6D14"});
expect(() => {ms932Encoder.encode("\u6D15")}).toThrowError({name:"TypeError",message:"EncodingError U+6D15"});
expect(() => {ms932Encoder.encode("\u6D16")}).toThrowError({name:"TypeError",message:"EncodingError U+6D16"});
expect([...ms932Encoder.encode("洗")].join(",")).toBe("144,244"); // U+6D17
expect(() => {ms932Encoder.encode("\u6D18")}).toThrowError({name:"TypeError",message:"EncodingError U+6D18"});
expect([...ms932Encoder.encode("洙")].join(",")).toBe("159,170"); // U+6D19
expect(() => {ms932Encoder.encode("\u6D1A")}).toThrowError({name:"TypeError",message:"EncodingError U+6D1A"});
expect([...ms932Encoder.encode("洛")].join(",")).toBe("151,140"); // U+6D1B
expect(() => {ms932Encoder.encode("\u6D1C")}).toThrowError({name:"TypeError",message:"EncodingError U+6D1C"});
expect(() => {ms932Encoder.encode("\u6D1D")}).toThrowError({name:"TypeError",message:"EncodingError U+6D1D"});
expect([...ms932Encoder.encode("洞洟")].join(",")).toBe("147,180,159,164"); // U+6D1E
expect(() => {ms932Encoder.encode("\u6D20")}).toThrowError({name:"TypeError",message:"EncodingError U+6D20"});
expect(() => {ms932Encoder.encode("\u6D21")}).toThrowError({name:"TypeError",message:"EncodingError U+6D21"});
expect(() => {ms932Encoder.encode("\u6D22")}).toThrowError({name:"TypeError",message:"EncodingError U+6D22"});
expect(() => {ms932Encoder.encode("\u6D23")}).toThrowError({name:"TypeError",message:"EncodingError U+6D23"});
expect(() => {ms932Encoder.encode("\u6D24")}).toThrowError({name:"TypeError",message:"EncodingError U+6D24"});
expect([...ms932Encoder.encode("津")].join(",")).toBe("146,195"); // U+6D25
expect(() => {ms932Encoder.encode("\u6D26")}).toThrowError({name:"TypeError",message:"EncodingError U+6D26"});
expect(() => {ms932Encoder.encode("\u6D27")}).toThrowError({name:"TypeError",message:"EncodingError U+6D27"});
expect(() => {ms932Encoder.encode("\u6D28")}).toThrowError({name:"TypeError",message:"EncodingError U+6D28"});
expect([...ms932Encoder.encode("洩洪洫")].join(",")).toBe("137,107,141,94,159,167"); // U+6D29
expect(() => {ms932Encoder.encode("\u6D2C")}).toThrowError({name:"TypeError",message:"EncodingError U+6D2C"});
expect(() => {ms932Encoder.encode("\u6D2D")}).toThrowError({name:"TypeError",message:"EncodingError U+6D2D"});
expect(() => {ms932Encoder.encode("\u6D2E")}).toThrowError({name:"TypeError",message:"EncodingError U+6D2E"});
expect(() => {ms932Encoder.encode("\u6D2F")}).toThrowError({name:"TypeError",message:"EncodingError U+6D2F"});
expect(() => {ms932Encoder.encode("\u6D30")}).toThrowError({name:"TypeError",message:"EncodingError U+6D30"});
expect(() => {ms932Encoder.encode("\u6D31")}).toThrowError({name:"TypeError",message:"EncodingError U+6D31"});
expect([...ms932Encoder.encode("洲洳")].join(",")).toBe("143,70,159,172"); // U+6D32
expect(() => {ms932Encoder.encode("\u6D34")}).toThrowError({name:"TypeError",message:"EncodingError U+6D34"});
expect([...ms932Encoder.encode("洵洶")].join(",")).toBe("159,171,159,166"); // U+6D35
expect(() => {ms932Encoder.encode("\u6D37")}).toThrowError({name:"TypeError",message:"EncodingError U+6D37"});
expect([...ms932Encoder.encode("洸")].join(",")).toBe("159,169"); // U+6D38
expect(() => {ms932Encoder.encode("\u6D39")}).toThrowError({name:"TypeError",message:"EncodingError U+6D39"});
expect(() => {ms932Encoder.encode("\u6D3A")}).toThrowError({name:"TypeError",message:"EncodingError U+6D3A"});
expect([...ms932Encoder.encode("活")].join(",")).toBe("138,136"); // U+6D3B
expect(() => {ms932Encoder.encode("\u6D3C")}).toThrowError({name:"TypeError",message:"EncodingError U+6D3C"});
expect([...ms932Encoder.encode("洽派")].join(",")).toBe("159,168,148,104"); // U+6D3D
expect(() => {ms932Encoder.encode("\u6D3F")}).toThrowError({name:"TypeError",message:"EncodingError U+6D3F"});
expect(() => {ms932Encoder.encode("\u6D40")}).toThrowError({name:"TypeError",message:"EncodingError U+6D40"});
expect([...ms932Encoder.encode("流")].join(",")).toBe("151,172"); // U+6D41
expect(() => {ms932Encoder.encode("\u6D42")}).toThrowError({name:"TypeError",message:"EncodingError U+6D42"});
expect(() => {ms932Encoder.encode("\u6D43")}).toThrowError({name:"TypeError",message:"EncodingError U+6D43"});
expect([...ms932Encoder.encode("浄浅")].join(",")).toBe("143,242,144,243"); // U+6D44
expect(() => {ms932Encoder.encode("\u6D46")}).toThrowError({name:"TypeError",message:"EncodingError U+6D46"});
expect(() => {ms932Encoder.encode("\u6D47")}).toThrowError({name:"TypeError",message:"EncodingError U+6D47"});
expect(() => {ms932Encoder.encode("\u6D48")}).toThrowError({name:"TypeError",message:"EncodingError U+6D48"});
expect(() => {ms932Encoder.encode("\u6D49")}).toThrowError({name:"TypeError",message:"EncodingError U+6D49"});
expect(() => {ms932Encoder.encode("\u6D4A")}).toThrowError({name:"TypeError",message:"EncodingError U+6D4A"});
expect(() => {ms932Encoder.encode("\u6D4B")}).toThrowError({name:"TypeError",message:"EncodingError U+6D4B"});
expect(() => {ms932Encoder.encode("\u6D4C")}).toThrowError({name:"TypeError",message:"EncodingError U+6D4C"});
expect(() => {ms932Encoder.encode("\u6D4D")}).toThrowError({name:"TypeError",message:"EncodingError U+6D4D"});
expect(() => {ms932Encoder.encode("\u6D4E")}).toThrowError({name:"TypeError",message:"EncodingError U+6D4E"});
expect(() => {ms932Encoder.encode("\u6D4F")}).toThrowError({name:"TypeError",message:"EncodingError U+6D4F"});
expect(() => {ms932Encoder.encode("\u6D50")}).toThrowError({name:"TypeError",message:"EncodingError U+6D50"});
expect(() => {ms932Encoder.encode("\u6D51")}).toThrowError({name:"TypeError",message:"EncodingError U+6D51"});
expect(() => {ms932Encoder.encode("\u6D52")}).toThrowError({name:"TypeError",message:"EncodingError U+6D52"});
expect(() => {ms932Encoder.encode("\u6D53")}).toThrowError({name:"TypeError",message:"EncodingError U+6D53"});
expect(() => {ms932Encoder.encode("\u6D54")}).toThrowError({name:"TypeError",message:"EncodingError U+6D54"});
expect(() => {ms932Encoder.encode("\u6D55")}).toThrowError({name:"TypeError",message:"EncodingError U+6D55"});
expect(() => {ms932Encoder.encode("\u6D56")}).toThrowError({name:"TypeError",message:"EncodingError U+6D56"});
expect(() => {ms932Encoder.encode("\u6D57")}).toThrowError({name:"TypeError",message:"EncodingError U+6D57"});
expect(() => {ms932Encoder.encode("\u6D58")}).toThrowError({name:"TypeError",message:"EncodingError U+6D58"});
expect([...ms932Encoder.encode("浙浚")].join(",")).toBe("159,180,159,178"); // U+6D59
expect(() => {ms932Encoder.encode("\u6D5B")}).toThrowError({name:"TypeError",message:"EncodingError U+6D5B"});
expect([...ms932Encoder.encode("浜")].join(",")).toBe("149,108"); // U+6D5C
expect(() => {ms932Encoder.encode("\u6D5D")}).toThrowError({name:"TypeError",message:"EncodingError U+6D5D"});
expect(() => {ms932Encoder.encode("\u6D5E")}).toThrowError({name:"TypeError",message:"EncodingError U+6D5E"});
expect(() => {ms932Encoder.encode("\u6D5F")}).toThrowError({name:"TypeError",message:"EncodingError U+6D5F"});
expect(() => {ms932Encoder.encode("\u6D60")}).toThrowError({name:"TypeError",message:"EncodingError U+6D60"});
expect(() => {ms932Encoder.encode("\u6D61")}).toThrowError({name:"TypeError",message:"EncodingError U+6D61"});
expect(() => {ms932Encoder.encode("\u6D62")}).toThrowError({name:"TypeError",message:"EncodingError U+6D62"});
expect([...ms932Encoder.encode("浣浤")].join(",")).toBe("159,175,159,177"); // U+6D63
expect(() => {ms932Encoder.encode("\u6D65")}).toThrowError({name:"TypeError",message:"EncodingError U+6D65"});
expect([...ms932Encoder.encode("浦")].join(",")).toBe("137,89"); // U+6D66
expect(() => {ms932Encoder.encode("\u6D67")}).toThrowError({name:"TypeError",message:"EncodingError U+6D67"});
expect(() => {ms932Encoder.encode("\u6D68")}).toThrowError({name:"TypeError",message:"EncodingError U+6D68"});
expect([...ms932Encoder.encode("浩浪")].join(",")).toBe("141,95,152,81"); // U+6D69
expect(() => {ms932Encoder.encode("\u6D6B")}).toThrowError({name:"TypeError",message:"EncodingError U+6D6B"});
expect([...ms932Encoder.encode("浬")].join(",")).toBe("138,92"); // U+6D6C
expect(() => {ms932Encoder.encode("\u6D6D")}).toThrowError({name:"TypeError",message:"EncodingError U+6D6D"});
expect([...ms932Encoder.encode("浮浯")].join(",")).toBe("149,130,250,252"); // U+6D6E
expect(() => {ms932Encoder.encode("\u6D70")}).toThrowError({name:"TypeError",message:"EncodingError U+6D70"});
expect(() => {ms932Encoder.encode("\u6D71")}).toThrowError({name:"TypeError",message:"EncodingError U+6D71"});
expect(() => {ms932Encoder.encode("\u6D72")}).toThrowError({name:"TypeError",message:"EncodingError U+6D72"});
expect(() => {ms932Encoder.encode("\u6D73")}).toThrowError({name:"TypeError",message:"EncodingError U+6D73"});
expect([...ms932Encoder.encode("浴")].join(",")).toBe("151,129"); // U+6D74
expect(() => {ms932Encoder.encode("\u6D75")}).toThrowError({name:"TypeError",message:"EncodingError U+6D75"});
expect(() => {ms932Encoder.encode("\u6D76")}).toThrowError({name:"TypeError",message:"EncodingError U+6D76"});
expect([...ms932Encoder.encode("海浸浹")].join(",")).toBe("138,67,144,90,159,179"); // U+6D77
expect(() => {ms932Encoder.encode("\u6D7A")}).toThrowError({name:"TypeError",message:"EncodingError U+6D7A"});
expect(() => {ms932Encoder.encode("\u6D7B")}).toThrowError({name:"TypeError",message:"EncodingError U+6D7B"});
expect(() => {ms932Encoder.encode("\u6D7C")}).toThrowError({name:"TypeError",message:"EncodingError U+6D7C"});
expect(() => {ms932Encoder.encode("\u6D7D")}).toThrowError({name:"TypeError",message:"EncodingError U+6D7D"});
expect(() => {ms932Encoder.encode("\u6D7E")}).toThrowError({name:"TypeError",message:"EncodingError U+6D7E"});
expect(() => {ms932Encoder.encode("\u6D7F")}).toThrowError({name:"TypeError",message:"EncodingError U+6D7F"});
expect(() => {ms932Encoder.encode("\u6D80")}).toThrowError({name:"TypeError",message:"EncodingError U+6D80"});
expect(() => {ms932Encoder.encode("\u6D81")}).toThrowError({name:"TypeError",message:"EncodingError U+6D81"});
expect(() => {ms932Encoder.encode("\u6D82")}).toThrowError({name:"TypeError",message:"EncodingError U+6D82"});
expect(() => {ms932Encoder.encode("\u6D83")}).toThrowError({name:"TypeError",message:"EncodingError U+6D83"});
expect(() => {ms932Encoder.encode("\u6D84")}).toThrowError({name:"TypeError",message:"EncodingError U+6D84"});
expect([...ms932Encoder.encode("涅")].join(",")).toBe("159,184"); // U+6D85
expect(() => {ms932Encoder.encode("\u6D86")}).toThrowError({name:"TypeError",message:"EncodingError U+6D86"});
expect([...ms932Encoder.encode("涇消")].join(",")).toBe("250,251,143,193"); // U+6D87
expect(() => {ms932Encoder.encode("\u6D89")}).toThrowError({name:"TypeError",message:"EncodingError U+6D89"});
expect(() => {ms932Encoder.encode("\u6D8A")}).toThrowError({name:"TypeError",message:"EncodingError U+6D8A"});
expect(() => {ms932Encoder.encode("\u6D8B")}).toThrowError({name:"TypeError",message:"EncodingError U+6D8B"});
expect([...ms932Encoder.encode("涌")].join(",")).toBe("151,79"); // U+6D8C
expect(() => {ms932Encoder.encode("\u6D8D")}).toThrowError({name:"TypeError",message:"EncodingError U+6D8D"});
expect([...ms932Encoder.encode("涎")].join(",")).toBe("159,181"); // U+6D8E
expect(() => {ms932Encoder.encode("\u6D8F")}).toThrowError({name:"TypeError",message:"EncodingError U+6D8F"});
expect(() => {ms932Encoder.encode("\u6D90")}).toThrowError({name:"TypeError",message:"EncodingError U+6D90"});
expect(() => {ms932Encoder.encode("\u6D91")}).toThrowError({name:"TypeError",message:"EncodingError U+6D91"});
expect(() => {ms932Encoder.encode("\u6D92")}).toThrowError({name:"TypeError",message:"EncodingError U+6D92"});
expect([...ms932Encoder.encode("涓")].join(",")).toBe("159,176"); // U+6D93
expect(() => {ms932Encoder.encode("\u6D94")}).toThrowError({name:"TypeError",message:"EncodingError U+6D94"});
expect([...ms932Encoder.encode("涕涖")].join(",")).toBe("159,182,251,64"); // U+6D95
expect(() => {ms932Encoder.encode("\u6D97")}).toThrowError({name:"TypeError",message:"EncodingError U+6D97"});
expect(() => {ms932Encoder.encode("\u6D98")}).toThrowError({name:"TypeError",message:"EncodingError U+6D98"});
expect([...ms932Encoder.encode("涙")].join(",")).toBe("151,220"); // U+6D99
expect(() => {ms932Encoder.encode("\u6D9A")}).toThrowError({name:"TypeError",message:"EncodingError U+6D9A"});
expect([...ms932Encoder.encode("涛涜")].join(",")).toBe("147,147,147,192"); // U+6D9B
expect(() => {ms932Encoder.encode("\u6D9D")}).toThrowError({name:"TypeError",message:"EncodingError U+6D9D"});
expect(() => {ms932Encoder.encode("\u6D9E")}).toThrowError({name:"TypeError",message:"EncodingError U+6D9E"});
expect(() => {ms932Encoder.encode("\u6D9F")}).toThrowError({name:"TypeError",message:"EncodingError U+6D9F"});
expect(() => {ms932Encoder.encode("\u6DA0")}).toThrowError({name:"TypeError",message:"EncodingError U+6DA0"});
expect(() => {ms932Encoder.encode("\u6DA1")}).toThrowError({name:"TypeError",message:"EncodingError U+6DA1"});
expect(() => {ms932Encoder.encode("\u6DA2")}).toThrowError({name:"TypeError",message:"EncodingError U+6DA2"});
expect(() => {ms932Encoder.encode("\u6DA3")}).toThrowError({name:"TypeError",message:"EncodingError U+6DA3"});
expect(() => {ms932Encoder.encode("\u6DA4")}).toThrowError({name:"TypeError",message:"EncodingError U+6DA4"});
expect(() => {ms932Encoder.encode("\u6DA5")}).toThrowError({name:"TypeError",message:"EncodingError U+6DA5"});
expect(() => {ms932Encoder.encode("\u6DA6")}).toThrowError({name:"TypeError",message:"EncodingError U+6DA6"});
expect(() => {ms932Encoder.encode("\u6DA7")}).toThrowError({name:"TypeError",message:"EncodingError U+6DA7"});
expect(() => {ms932Encoder.encode("\u6DA8")}).toThrowError({name:"TypeError",message:"EncodingError U+6DA8"});
expect(() => {ms932Encoder.encode("\u6DA9")}).toThrowError({name:"TypeError",message:"EncodingError U+6DA9"});
expect(() => {ms932Encoder.encode("\u6DAA")}).toThrowError({name:"TypeError",message:"EncodingError U+6DAA"});
expect(() => {ms932Encoder.encode("\u6DAB")}).toThrowError({name:"TypeError",message:"EncodingError U+6DAB"});
expect([...ms932Encoder.encode("涬")].join(",")).toBe("251,65"); // U+6DAC
expect(() => {ms932Encoder.encode("\u6DAD")}).toThrowError({name:"TypeError",message:"EncodingError U+6DAD"});
expect(() => {ms932Encoder.encode("\u6DAE")}).toThrowError({name:"TypeError",message:"EncodingError U+6DAE"});
expect([...ms932Encoder.encode("涯")].join(",")).toBe("138,85"); // U+6DAF
expect(() => {ms932Encoder.encode("\u6DB0")}).toThrowError({name:"TypeError",message:"EncodingError U+6DB0"});
expect(() => {ms932Encoder.encode("\u6DB1")}).toThrowError({name:"TypeError",message:"EncodingError U+6DB1"});
expect([...ms932Encoder.encode("液")].join(",")).toBe("137,116"); // U+6DB2
expect(() => {ms932Encoder.encode("\u6DB3")}).toThrowError({name:"TypeError",message:"EncodingError U+6DB3"});
expect(() => {ms932Encoder.encode("\u6DB4")}).toThrowError({name:"TypeError",message:"EncodingError U+6DB4"});
expect([...ms932Encoder.encode("涵")].join(",")).toBe("159,188"); // U+6DB5
expect(() => {ms932Encoder.encode("\u6DB6")}).toThrowError({name:"TypeError",message:"EncodingError U+6DB6"});
expect(() => {ms932Encoder.encode("\u6DB7")}).toThrowError({name:"TypeError",message:"EncodingError U+6DB7"});
expect([...ms932Encoder.encode("涸")].join(",")).toBe("159,191"); // U+6DB8
expect(() => {ms932Encoder.encode("\u6DB9")}).toThrowError({name:"TypeError",message:"EncodingError U+6DB9"});
expect(() => {ms932Encoder.encode("\u6DBA")}).toThrowError({name:"TypeError",message:"EncodingError U+6DBA"});
expect(() => {ms932Encoder.encode("\u6DBB")}).toThrowError({name:"TypeError",message:"EncodingError U+6DBB"});
expect([...ms932Encoder.encode("涼")].join(",")).toBe("151,193"); // U+6DBC
expect(() => {ms932Encoder.encode("\u6DBD")}).toThrowError({name:"TypeError",message:"EncodingError U+6DBD"});
expect(() => {ms932Encoder.encode("\u6DBE")}).toThrowError({name:"TypeError",message:"EncodingError U+6DBE"});
expect(() => {ms932Encoder.encode("\u6DBF")}).toThrowError({name:"TypeError",message:"EncodingError U+6DBF"});
expect([...ms932Encoder.encode("淀")].join(",")).toBe("151,132"); // U+6DC0
expect(() => {ms932Encoder.encode("\u6DC1")}).toThrowError({name:"TypeError",message:"EncodingError U+6DC1"});
expect(() => {ms932Encoder.encode("\u6DC2")}).toThrowError({name:"TypeError",message:"EncodingError U+6DC2"});
expect(() => {ms932Encoder.encode("\u6DC3")}).toThrowError({name:"TypeError",message:"EncodingError U+6DC3"});
expect(() => {ms932Encoder.encode("\u6DC4")}).toThrowError({name:"TypeError",message:"EncodingError U+6DC4"});
expect([...ms932Encoder.encode("淅淆淇")].join(",")).toBe("159,198,159,192,159,189"); // U+6DC5
expect(() => {ms932Encoder.encode("\u6DC8")}).toThrowError({name:"TypeError",message:"EncodingError U+6DC8"});
expect(() => {ms932Encoder.encode("\u6DC9")}).toThrowError({name:"TypeError",message:"EncodingError U+6DC9"});
expect(() => {ms932Encoder.encode("\u6DCA")}).toThrowError({name:"TypeError",message:"EncodingError U+6DCA"});
expect([...ms932Encoder.encode("淋淌")].join(",")).toBe("151,210,159,195"); // U+6DCB
expect(() => {ms932Encoder.encode("\u6DCD")}).toThrowError({name:"TypeError",message:"EncodingError U+6DCD"});
expect(() => {ms932Encoder.encode("\u6DCE")}).toThrowError({name:"TypeError",message:"EncodingError U+6DCE"});
expect([...ms932Encoder.encode("淏")].join(",")).toBe("251,66"); // U+6DCF
expect(() => {ms932Encoder.encode("\u6DD0")}).toThrowError({name:"TypeError",message:"EncodingError U+6DD0"});
expect([...ms932Encoder.encode("淑淒")].join(",")).toBe("143,105,159,197"); // U+6DD1
expect(() => {ms932Encoder.encode("\u6DD3")}).toThrowError({name:"TypeError",message:"EncodingError U+6DD3"});
expect(() => {ms932Encoder.encode("\u6DD4")}).toThrowError({name:"TypeError",message:"EncodingError U+6DD4"});
expect([...ms932Encoder.encode("淕")].join(",")).toBe("159,202"); // U+6DD5
expect(() => {ms932Encoder.encode("\u6DD6")}).toThrowError({name:"TypeError",message:"EncodingError U+6DD6"});
expect(() => {ms932Encoder.encode("\u6DD7")}).toThrowError({name:"TypeError",message:"EncodingError U+6DD7"});
expect([...ms932Encoder.encode("淘淙")].join(",")).toBe("147,145,159,200"); // U+6DD8
expect(() => {ms932Encoder.encode("\u6DDA")}).toThrowError({name:"TypeError",message:"EncodingError U+6DDA"});
expect(() => {ms932Encoder.encode("\u6DDB")}).toThrowError({name:"TypeError",message:"EncodingError U+6DDB"});
expect(() => {ms932Encoder.encode("\u6DDC")}).toThrowError({name:"TypeError",message:"EncodingError U+6DDC"});
expect(() => {ms932Encoder.encode("\u6DDD")}).toThrowError({name:"TypeError",message:"EncodingError U+6DDD"});
expect([...ms932Encoder.encode("淞")].join(",")).toBe("159,194"); // U+6DDE
expect(() => {ms932Encoder.encode("\u6DDF")}).toThrowError({name:"TypeError",message:"EncodingError U+6DDF"});
expect(() => {ms932Encoder.encode("\u6DE0")}).toThrowError({name:"TypeError",message:"EncodingError U+6DE0"});
expect([...ms932Encoder.encode("淡")].join(",")).toBe("146,87"); // U+6DE1
expect(() => {ms932Encoder.encode("\u6DE2")}).toThrowError({name:"TypeError",message:"EncodingError U+6DE2"});
expect(() => {ms932Encoder.encode("\u6DE3")}).toThrowError({name:"TypeError",message:"EncodingError U+6DE3"});
expect([...ms932Encoder.encode("淤")].join(",")).toBe("159,201"); // U+6DE4
expect(() => {ms932Encoder.encode("\u6DE5")}).toThrowError({name:"TypeError",message:"EncodingError U+6DE5"});
expect([...ms932Encoder.encode("淦")].join(",")).toBe("159,190"); // U+6DE6
expect(() => {ms932Encoder.encode("\u6DE7")}).toThrowError({name:"TypeError",message:"EncodingError U+6DE7"});
expect([...ms932Encoder.encode("淨")].join(",")).toBe("159,196"); // U+6DE8
expect(() => {ms932Encoder.encode("\u6DE9")}).toThrowError({name:"TypeError",message:"EncodingError U+6DE9"});
expect([...ms932Encoder.encode("淪淫淬")].join(",")).toBe("159,203,136,250,159,193"); // U+6DEA
expect(() => {ms932Encoder.encode("\u6DED")}).toThrowError({name:"TypeError",message:"EncodingError U+6DED"});
expect([...ms932Encoder.encode("淮")].join(",")).toBe("159,204"); // U+6DEE
expect(() => {ms932Encoder.encode("\u6DEF")}).toThrowError({name:"TypeError",message:"EncodingError U+6DEF"});
expect(() => {ms932Encoder.encode("\u6DF0")}).toThrowError({name:"TypeError",message:"EncodingError U+6DF0"});
expect([...ms932Encoder.encode("深淲淳")].join(",")).toBe("144,91,251,68,143,126"); // U+6DF1
expect(() => {ms932Encoder.encode("\u6DF4")}).toThrowError({name:"TypeError",message:"EncodingError U+6DF4"});
expect([...ms932Encoder.encode("淵")].join(",")).toBe("149,163"); // U+6DF5
expect(() => {ms932Encoder.encode("\u6DF6")}).toThrowError({name:"TypeError",message:"EncodingError U+6DF6"});
expect([...ms932Encoder.encode("混淸淹淺添淼")].join(",")).toBe("141,172,251,67,159,185,159,199,147,89,251,69"); // U+6DF7
expect(() => {ms932Encoder.encode("\u6DFD")}).toThrowError({name:"TypeError",message:"EncodingError U+6DFD"});
expect(() => {ms932Encoder.encode("\u6DFE")}).toThrowError({name:"TypeError",message:"EncodingError U+6DFE"});
expect(() => {ms932Encoder.encode("\u6DFF")}).toThrowError({name:"TypeError",message:"EncodingError U+6DFF"});
expect(() => {ms932Encoder.encode("\u6E00")}).toThrowError({name:"TypeError",message:"EncodingError U+6E00"});
expect(() => {ms932Encoder.encode("\u6E01")}).toThrowError({name:"TypeError",message:"EncodingError U+6E01"});
expect(() => {ms932Encoder.encode("\u6E02")}).toThrowError({name:"TypeError",message:"EncodingError U+6E02"});
expect(() => {ms932Encoder.encode("\u6E03")}).toThrowError({name:"TypeError",message:"EncodingError U+6E03"});
expect(() => {ms932Encoder.encode("\u6E04")}).toThrowError({name:"TypeError",message:"EncodingError U+6E04"});
expect([...ms932Encoder.encode("清")].join(",")).toBe("144,180"); // U+6E05
expect(() => {ms932Encoder.encode("\u6E06")}).toThrowError({name:"TypeError",message:"EncodingError U+6E06"});
expect([...ms932Encoder.encode("渇済渉渊渋")].join(",")).toBe("138,137,141,207,143,194,159,187,143,97"); // U+6E07
expect(() => {ms932Encoder.encode("\u6E0C")}).toThrowError({name:"TypeError",message:"EncodingError U+6E0C"});
expect(() => {ms932Encoder.encode("\u6E0D")}).toThrowError({name:"TypeError",message:"EncodingError U+6E0D"});
expect(() => {ms932Encoder.encode("\u6E0E")}).toThrowError({name:"TypeError",message:"EncodingError U+6E0E"});
expect(() => {ms932Encoder.encode("\u6E0F")}).toThrowError({name:"TypeError",message:"EncodingError U+6E0F"});
expect(() => {ms932Encoder.encode("\u6E10")}).toThrowError({name:"TypeError",message:"EncodingError U+6E10"});
expect(() => {ms932Encoder.encode("\u6E11")}).toThrowError({name:"TypeError",message:"EncodingError U+6E11"});
expect(() => {ms932Encoder.encode("\u6E12")}).toThrowError({name:"TypeError",message:"EncodingError U+6E12"});
expect([...ms932Encoder.encode("渓")].join(",")).toBe("140,107"); // U+6E13
expect(() => {ms932Encoder.encode("\u6E14")}).toThrowError({name:"TypeError",message:"EncodingError U+6E14"});
expect([...ms932Encoder.encode("渕")].join(",")).toBe("159,186"); // U+6E15
expect(() => {ms932Encoder.encode("\u6E16")}).toThrowError({name:"TypeError",message:"EncodingError U+6E16"});
expect(() => {ms932Encoder.encode("\u6E17")}).toThrowError({name:"TypeError",message:"EncodingError U+6E17"});
expect(() => {ms932Encoder.encode("\u6E18")}).toThrowError({name:"TypeError",message:"EncodingError U+6E18"});
expect([...ms932Encoder.encode("渙渚減")].join(",")).toBe("159,208,143,141,140,184"); // U+6E19
expect(() => {ms932Encoder.encode("\u6E1C")}).toThrowError({name:"TypeError",message:"EncodingError U+6E1C"});
expect([...ms932Encoder.encode("渝")].join(",")).toBe("159,223"); // U+6E1D
expect(() => {ms932Encoder.encode("\u6E1E")}).toThrowError({name:"TypeError",message:"EncodingError U+6E1E"});
expect([...ms932Encoder.encode("渟渠渡")].join(",")).toBe("159,217,139,148,147,110"); // U+6E1F
expect(() => {ms932Encoder.encode("\u6E22")}).toThrowError({name:"TypeError",message:"EncodingError U+6E22"});
expect([...ms932Encoder.encode("渣渤渥渦渧")].join(",")).toBe("159,212,159,221,136,173,137,81,251,72"); // U+6E23
expect(() => {ms932Encoder.encode("\u6E28")}).toThrowError({name:"TypeError",message:"EncodingError U+6E28"});
expect([...ms932Encoder.encode("温")].join(",")).toBe("137,183"); // U+6E29
expect(() => {ms932Encoder.encode("\u6E2A")}).toThrowError({name:"TypeError",message:"EncodingError U+6E2A"});
expect([...ms932Encoder.encode("渫測渭渮港")].join(",")).toBe("159,214,145,170,159,205,159,207,141,96"); // U+6E2B
expect(() => {ms932Encoder.encode("\u6E30")}).toThrowError({name:"TypeError",message:"EncodingError U+6E30"});
expect(() => {ms932Encoder.encode("\u6E31")}).toThrowError({name:"TypeError",message:"EncodingError U+6E31"});
expect(() => {ms932Encoder.encode("\u6E32")}).toThrowError({name:"TypeError",message:"EncodingError U+6E32"});
expect(() => {ms932Encoder.encode("\u6E33")}).toThrowError({name:"TypeError",message:"EncodingError U+6E33"});
expect(() => {ms932Encoder.encode("\u6E34")}).toThrowError({name:"TypeError",message:"EncodingError U+6E34"});
expect(() => {ms932Encoder.encode("\u6E35")}).toThrowError({name:"TypeError",message:"EncodingError U+6E35"});
expect(() => {ms932Encoder.encode("\u6E36")}).toThrowError({name:"TypeError",message:"EncodingError U+6E36"});
expect(() => {ms932Encoder.encode("\u6E37")}).toThrowError({name:"TypeError",message:"EncodingError U+6E37"});
expect([...ms932Encoder.encode("游渹渺")].join(",")).toBe("159,224,251,70,159,219"); // U+6E38
expect(() => {ms932Encoder.encode("\u6E3B")}).toThrowError({name:"TypeError",message:"EncodingError U+6E3B"});
expect([...ms932Encoder.encode("渼")].join(",")).toBe("251,73"); // U+6E3C
expect(() => {ms932Encoder.encode("\u6E3D")}).toThrowError({name:"TypeError",message:"EncodingError U+6E3D"});
expect([...ms932Encoder.encode("渾")].join(",")).toBe("159,211"); // U+6E3E
expect(() => {ms932Encoder.encode("\u6E3F")}).toThrowError({name:"TypeError",message:"EncodingError U+6E3F"});
expect(() => {ms932Encoder.encode("\u6E40")}).toThrowError({name:"TypeError",message:"EncodingError U+6E40"});
expect(() => {ms932Encoder.encode("\u6E41")}).toThrowError({name:"TypeError",message:"EncodingError U+6E41"});
expect(() => {ms932Encoder.encode("\u6E42")}).toThrowError({name:"TypeError",message:"EncodingError U+6E42"});
expect([...ms932Encoder.encode("湃")].join(",")).toBe("159,218"); // U+6E43
expect(() => {ms932Encoder.encode("\u6E44")}).toThrowError({name:"TypeError",message:"EncodingError U+6E44"});
expect(() => {ms932Encoder.encode("\u6E45")}).toThrowError({name:"TypeError",message:"EncodingError U+6E45"});
expect(() => {ms932Encoder.encode("\u6E46")}).toThrowError({name:"TypeError",message:"EncodingError U+6E46"});
expect(() => {ms932Encoder.encode("\u6E47")}).toThrowError({name:"TypeError",message:"EncodingError U+6E47"});
expect(() => {ms932Encoder.encode("\u6E48")}).toThrowError({name:"TypeError",message:"EncodingError U+6E48"});
expect(() => {ms932Encoder.encode("\u6E49")}).toThrowError({name:"TypeError",message:"EncodingError U+6E49"});
expect([...ms932Encoder.encode("湊")].join(",")).toBe("150,169"); // U+6E4A
expect(() => {ms932Encoder.encode("\u6E4B")}).toThrowError({name:"TypeError",message:"EncodingError U+6E4B"});
expect(() => {ms932Encoder.encode("\u6E4C")}).toThrowError({name:"TypeError",message:"EncodingError U+6E4C"});
expect([...ms932Encoder.encode("湍湎")].join(",")).toBe("159,216,159,220"); // U+6E4D
expect(() => {ms932Encoder.encode("\u6E4F")}).toThrowError({name:"TypeError",message:"EncodingError U+6E4F"});
expect(() => {ms932Encoder.encode("\u6E50")}).toThrowError({name:"TypeError",message:"EncodingError U+6E50"});
expect(() => {ms932Encoder.encode("\u6E51")}).toThrowError({name:"TypeError",message:"EncodingError U+6E51"});
expect(() => {ms932Encoder.encode("\u6E52")}).toThrowError({name:"TypeError",message:"EncodingError U+6E52"});
expect(() => {ms932Encoder.encode("\u6E53")}).toThrowError({name:"TypeError",message:"EncodingError U+6E53"});
expect(() => {ms932Encoder.encode("\u6E54")}).toThrowError({name:"TypeError",message:"EncodingError U+6E54"});
expect(() => {ms932Encoder.encode("\u6E55")}).toThrowError({name:"TypeError",message:"EncodingError U+6E55"});
expect([...ms932Encoder.encode("湖")].join(",")).toBe("140,206"); // U+6E56
expect(() => {ms932Encoder.encode("\u6E57")}).toThrowError({name:"TypeError",message:"EncodingError U+6E57"});
expect([...ms932Encoder.encode("湘")].join(",")).toBe("143,195"); // U+6E58
expect(() => {ms932Encoder.encode("\u6E59")}).toThrowError({name:"TypeError",message:"EncodingError U+6E59"});
expect(() => {ms932Encoder.encode("\u6E5A")}).toThrowError({name:"TypeError",message:"EncodingError U+6E5A"});
expect([...ms932Encoder.encode("湛湜")].join(",")).toBe("146,88,251,71"); // U+6E5B
expect(() => {ms932Encoder.encode("\u6E5D")}).toThrowError({name:"TypeError",message:"EncodingError U+6E5D"});
expect(() => {ms932Encoder.encode("\u6E5E")}).toThrowError({name:"TypeError",message:"EncodingError U+6E5E"});
expect([...ms932Encoder.encode("湟")].join(",")).toBe("159,210"); // U+6E5F
expect(() => {ms932Encoder.encode("\u6E60")}).toThrowError({name:"TypeError",message:"EncodingError U+6E60"});
expect(() => {ms932Encoder.encode("\u6E61")}).toThrowError({name:"TypeError",message:"EncodingError U+6E61"});
expect(() => {ms932Encoder.encode("\u6E62")}).toThrowError({name:"TypeError",message:"EncodingError U+6E62"});
expect(() => {ms932Encoder.encode("\u6E63")}).toThrowError({name:"TypeError",message:"EncodingError U+6E63"});
expect(() => {ms932Encoder.encode("\u6E64")}).toThrowError({name:"TypeError",message:"EncodingError U+6E64"});
expect(() => {ms932Encoder.encode("\u6E65")}).toThrowError({name:"TypeError",message:"EncodingError U+6E65"});
expect(() => {ms932Encoder.encode("\u6E66")}).toThrowError({name:"TypeError",message:"EncodingError U+6E66"});
expect([...ms932Encoder.encode("湧")].join(",")).toBe("151,78"); // U+6E67
expect(() => {ms932Encoder.encode("\u6E68")}).toThrowError({name:"TypeError",message:"EncodingError U+6E68"});
expect(() => {ms932Encoder.encode("\u6E69")}).toThrowError({name:"TypeError",message:"EncodingError U+6E69"});
expect(() => {ms932Encoder.encode("\u6E6A")}).toThrowError({name:"TypeError",message:"EncodingError U+6E6A"});
expect([...ms932Encoder.encode("湫")].join(",")).toBe("159,213"); // U+6E6B
expect(() => {ms932Encoder.encode("\u6E6C")}).toThrowError({name:"TypeError",message:"EncodingError U+6E6C"});
expect(() => {ms932Encoder.encode("\u6E6D")}).toThrowError({name:"TypeError",message:"EncodingError U+6E6D"});
expect([...ms932Encoder.encode("湮湯")].join(",")).toBe("159,206,147,146"); // U+6E6E
expect(() => {ms932Encoder.encode("\u6E70")}).toThrowError({name:"TypeError",message:"EncodingError U+6E70"});
expect(() => {ms932Encoder.encode("\u6E71")}).toThrowError({name:"TypeError",message:"EncodingError U+6E71"});
expect([...ms932Encoder.encode("湲")].join(",")).toBe("159,209"); // U+6E72
expect(() => {ms932Encoder.encode("\u6E73")}).toThrowError({name:"TypeError",message:"EncodingError U+6E73"});
expect(() => {ms932Encoder.encode("\u6E74")}).toThrowError({name:"TypeError",message:"EncodingError U+6E74"});
expect(() => {ms932Encoder.encode("\u6E75")}).toThrowError({name:"TypeError",message:"EncodingError U+6E75"});
expect([...ms932Encoder.encode("湶")].join(",")).toBe("159,215"); // U+6E76
expect(() => {ms932Encoder.encode("\u6E77")}).toThrowError({name:"TypeError",message:"EncodingError U+6E77"});
expect(() => {ms932Encoder.encode("\u6E78")}).toThrowError({name:"TypeError",message:"EncodingError U+6E78"});
expect(() => {ms932Encoder.encode("\u6E79")}).toThrowError({name:"TypeError",message:"EncodingError U+6E79"});
expect(() => {ms932Encoder.encode("\u6E7A")}).toThrowError({name:"TypeError",message:"EncodingError U+6E7A"});
expect(() => {ms932Encoder.encode("\u6E7B")}).toThrowError({name:"TypeError",message:"EncodingError U+6E7B"});
expect(() => {ms932Encoder.encode("\u6E7C")}).toThrowError({name:"TypeError",message:"EncodingError U+6E7C"});
expect(() => {ms932Encoder.encode("\u6E7D")}).toThrowError({name:"TypeError",message:"EncodingError U+6E7D"});
expect([...ms932Encoder.encode("湾湿満")].join(",")).toBe("152,112,142,188,150,158"); // U+6E7E
expect(() => {ms932Encoder.encode("\u6E81")}).toThrowError({name:"TypeError",message:"EncodingError U+6E81"});
expect([...ms932Encoder.encode("溂")].join(",")).toBe("159,225"); // U+6E82
expect(() => {ms932Encoder.encode("\u6E83")}).toThrowError({name:"TypeError",message:"EncodingError U+6E83"});
expect(() => {ms932Encoder.encode("\u6E84")}).toThrowError({name:"TypeError",message:"EncodingError U+6E84"});
expect(() => {ms932Encoder.encode("\u6E85")}).toThrowError({name:"TypeError",message:"EncodingError U+6E85"});
expect(() => {ms932Encoder.encode("\u6E86")}).toThrowError({name:"TypeError",message:"EncodingError U+6E86"});
expect(() => {ms932Encoder.encode("\u6E87")}).toThrowError({name:"TypeError",message:"EncodingError U+6E87"});
expect(() => {ms932Encoder.encode("\u6E88")}).toThrowError({name:"TypeError",message:"EncodingError U+6E88"});
expect(() => {ms932Encoder.encode("\u6E89")}).toThrowError({name:"TypeError",message:"EncodingError U+6E89"});
expect(() => {ms932Encoder.encode("\u6E8A")}).toThrowError({name:"TypeError",message:"EncodingError U+6E8A"});
expect(() => {ms932Encoder.encode("\u6E8B")}).toThrowError({name:"TypeError",message:"EncodingError U+6E8B"});
expect([...ms932Encoder.encode("溌")].join(",")).toBe("148,172"); // U+6E8C
expect(() => {ms932Encoder.encode("\u6E8D")}).toThrowError({name:"TypeError",message:"EncodingError U+6E8D"});
expect(() => {ms932Encoder.encode("\u6E8E")}).toThrowError({name:"TypeError",message:"EncodingError U+6E8E"});
expect([...ms932Encoder.encode("溏源")].join(",")).toBe("159,237,140,185"); // U+6E8F
expect(() => {ms932Encoder.encode("\u6E91")}).toThrowError({name:"TypeError",message:"EncodingError U+6E91"});
expect(() => {ms932Encoder.encode("\u6E92")}).toThrowError({name:"TypeError",message:"EncodingError U+6E92"});
expect(() => {ms932Encoder.encode("\u6E93")}).toThrowError({name:"TypeError",message:"EncodingError U+6E93"});
expect(() => {ms932Encoder.encode("\u6E94")}).toThrowError({name:"TypeError",message:"EncodingError U+6E94"});
expect(() => {ms932Encoder.encode("\u6E95")}).toThrowError({name:"TypeError",message:"EncodingError U+6E95"});
expect([...ms932Encoder.encode("準")].join(",")).toBe("143,128"); // U+6E96
expect(() => {ms932Encoder.encode("\u6E97")}).toThrowError({name:"TypeError",message:"EncodingError U+6E97"});
expect([...ms932Encoder.encode("溘")].join(",")).toBe("159,227"); // U+6E98
expect(() => {ms932Encoder.encode("\u6E99")}).toThrowError({name:"TypeError",message:"EncodingError U+6E99"});
expect(() => {ms932Encoder.encode("\u6E9A")}).toThrowError({name:"TypeError",message:"EncodingError U+6E9A"});
expect(() => {ms932Encoder.encode("\u6E9B")}).toThrowError({name:"TypeError",message:"EncodingError U+6E9B"});
expect([...ms932Encoder.encode("溜溝")].join(",")).toBe("151,173,141,97"); // U+6E9C
expect(() => {ms932Encoder.encode("\u6E9E")}).toThrowError({name:"TypeError",message:"EncodingError U+6E9E"});
expect([...ms932Encoder.encode("溟")].join(",")).toBe("159,240"); // U+6E9F
expect(() => {ms932Encoder.encode("\u6EA0")}).toThrowError({name:"TypeError",message:"EncodingError U+6EA0"});
expect(() => {ms932Encoder.encode("\u6EA1")}).toThrowError({name:"TypeError",message:"EncodingError U+6EA1"});
expect([...ms932Encoder.encode("溢")].join(",")).toBe("136,236"); // U+6EA2
expect(() => {ms932Encoder.encode("\u6EA3")}).toThrowError({name:"TypeError",message:"EncodingError U+6EA3"});
expect(() => {ms932Encoder.encode("\u6EA4")}).toThrowError({name:"TypeError",message:"EncodingError U+6EA4"});
expect([...ms932Encoder.encode("溥")].join(",")).toBe("159,238"); // U+6EA5
expect(() => {ms932Encoder.encode("\u6EA6")}).toThrowError({name:"TypeError",message:"EncodingError U+6EA6"});
expect(() => {ms932Encoder.encode("\u6EA7")}).toThrowError({name:"TypeError",message:"EncodingError U+6EA7"});
expect(() => {ms932Encoder.encode("\u6EA8")}).toThrowError({name:"TypeError",message:"EncodingError U+6EA8"});
expect(() => {ms932Encoder.encode("\u6EA9")}).toThrowError({name:"TypeError",message:"EncodingError U+6EA9"});
expect([...ms932Encoder.encode("溪")].join(",")).toBe("159,226"); // U+6EAA
expect(() => {ms932Encoder.encode("\u6EAB")}).toThrowError({name:"TypeError",message:"EncodingError U+6EAB"});
expect(() => {ms932Encoder.encode("\u6EAC")}).toThrowError({name:"TypeError",message:"EncodingError U+6EAC"});
expect(() => {ms932Encoder.encode("\u6EAD")}).toThrowError({name:"TypeError",message:"EncodingError U+6EAD"});
expect(() => {ms932Encoder.encode("\u6EAE")}).toThrowError({name:"TypeError",message:"EncodingError U+6EAE"});
expect([...ms932Encoder.encode("溯")].join(",")).toBe("159,232"); // U+6EAF
expect(() => {ms932Encoder.encode("\u6EB0")}).toThrowError({name:"TypeError",message:"EncodingError U+6EB0"});
expect(() => {ms932Encoder.encode("\u6EB1")}).toThrowError({name:"TypeError",message:"EncodingError U+6EB1"});
expect([...ms932Encoder.encode("溲")].join(",")).toBe("159,234"); // U+6EB2
expect(() => {ms932Encoder.encode("\u6EB3")}).toThrowError({name:"TypeError",message:"EncodingError U+6EB3"});
expect(() => {ms932Encoder.encode("\u6EB4")}).toThrowError({name:"TypeError",message:"EncodingError U+6EB4"});
expect(() => {ms932Encoder.encode("\u6EB5")}).toThrowError({name:"TypeError",message:"EncodingError U+6EB5"});
expect([...ms932Encoder.encode("溶溷")].join(",")).toBe("151,110,159,229"); // U+6EB6
expect(() => {ms932Encoder.encode("\u6EB8")}).toThrowError({name:"TypeError",message:"EncodingError U+6EB8"});
expect(() => {ms932Encoder.encode("\u6EB9")}).toThrowError({name:"TypeError",message:"EncodingError U+6EB9"});
expect([...ms932Encoder.encode("溺")].join(",")).toBe("147,77"); // U+6EBA
expect(() => {ms932Encoder.encode("\u6EBB")}).toThrowError({name:"TypeError",message:"EncodingError U+6EBB"});
expect(() => {ms932Encoder.encode("\u6EBC")}).toThrowError({name:"TypeError",message:"EncodingError U+6EBC"});
expect([...ms932Encoder.encode("溽")].join(",")).toBe("159,231"); // U+6EBD
expect(() => {ms932Encoder.encode("\u6EBE")}).toThrowError({name:"TypeError",message:"EncodingError U+6EBE"});
expect([...ms932Encoder.encode("溿")].join(",")).toBe("251,74"); // U+6EBF
expect(() => {ms932Encoder.encode("\u6EC0")}).toThrowError({name:"TypeError",message:"EncodingError U+6EC0"});
expect(() => {ms932Encoder.encode("\u6EC1")}).toThrowError({name:"TypeError",message:"EncodingError U+6EC1"});
expect([...ms932Encoder.encode("滂")].join(",")).toBe("159,239"); // U+6EC2
expect(() => {ms932Encoder.encode("\u6EC3")}).toThrowError({name:"TypeError",message:"EncodingError U+6EC3"});
expect([...ms932Encoder.encode("滄滅")].join(",")).toBe("159,233,150,197"); // U+6EC4
expect(() => {ms932Encoder.encode("\u6EC6")}).toThrowError({name:"TypeError",message:"EncodingError U+6EC6"});
expect(() => {ms932Encoder.encode("\u6EC7")}).toThrowError({name:"TypeError",message:"EncodingError U+6EC7"});
expect(() => {ms932Encoder.encode("\u6EC8")}).toThrowError({name:"TypeError",message:"EncodingError U+6EC8"});
expect([...ms932Encoder.encode("滉")].join(",")).toBe("159,228"); // U+6EC9
expect(() => {ms932Encoder.encode("\u6ECA")}).toThrowError({name:"TypeError",message:"EncodingError U+6ECA"});
expect([...ms932Encoder.encode("滋滌")].join(",")).toBe("142,160,159,252"); // U+6ECB
expect(() => {ms932Encoder.encode("\u6ECD")}).toThrowError({name:"TypeError",message:"EncodingError U+6ECD"});
expect(() => {ms932Encoder.encode("\u6ECE")}).toThrowError({name:"TypeError",message:"EncodingError U+6ECE"});
expect(() => {ms932Encoder.encode("\u6ECF")}).toThrowError({name:"TypeError",message:"EncodingError U+6ECF"});
expect(() => {ms932Encoder.encode("\u6ED0")}).toThrowError({name:"TypeError",message:"EncodingError U+6ED0"});
expect([...ms932Encoder.encode("滑")].join(",")).toBe("138,138"); // U+6ED1
expect(() => {ms932Encoder.encode("\u6ED2")}).toThrowError({name:"TypeError",message:"EncodingError U+6ED2"});
expect([...ms932Encoder.encode("滓滔滕")].join(",")).toBe("159,230,159,235,159,236"); // U+6ED3
expect(() => {ms932Encoder.encode("\u6ED6")}).toThrowError({name:"TypeError",message:"EncodingError U+6ED6"});
expect(() => {ms932Encoder.encode("\u6ED7")}).toThrowError({name:"TypeError",message:"EncodingError U+6ED7"});
expect(() => {ms932Encoder.encode("\u6ED8")}).toThrowError({name:"TypeError",message:"EncodingError U+6ED8"});
expect(() => {ms932Encoder.encode("\u6ED9")}).toThrowError({name:"TypeError",message:"EncodingError U+6ED9"});
expect(() => {ms932Encoder.encode("\u6EDA")}).toThrowError({name:"TypeError",message:"EncodingError U+6EDA"});
expect(() => {ms932Encoder.encode("\u6EDB")}).toThrowError({name:"TypeError",message:"EncodingError U+6EDB"});
expect(() => {ms932Encoder.encode("\u6EDC")}).toThrowError({name:"TypeError",message:"EncodingError U+6EDC"});
expect([...ms932Encoder.encode("滝滞")].join(",")).toBe("145,234,145,216"); // U+6EDD
expect(() => {ms932Encoder.encode("\u6EDF")}).toThrowError({name:"TypeError",message:"EncodingError U+6EDF"});
expect(() => {ms932Encoder.encode("\u6EE0")}).toThrowError({name:"TypeError",message:"EncodingError U+6EE0"});
expect(() => {ms932Encoder.encode("\u6EE1")}).toThrowError({name:"TypeError",message:"EncodingError U+6EE1"});
expect(() => {ms932Encoder.encode("\u6EE2")}).toThrowError({name:"TypeError",message:"EncodingError U+6EE2"});
expect(() => {ms932Encoder.encode("\u6EE3")}).toThrowError({name:"TypeError",message:"EncodingError U+6EE3"});
expect(() => {ms932Encoder.encode("\u6EE4")}).toThrowError({name:"TypeError",message:"EncodingError U+6EE4"});
expect(() => {ms932Encoder.encode("\u6EE5")}).toThrowError({name:"TypeError",message:"EncodingError U+6EE5"});
expect(() => {ms932Encoder.encode("\u6EE6")}).toThrowError({name:"TypeError",message:"EncodingError U+6EE6"});
expect(() => {ms932Encoder.encode("\u6EE7")}).toThrowError({name:"TypeError",message:"EncodingError U+6EE7"});
expect(() => {ms932Encoder.encode("\u6EE8")}).toThrowError({name:"TypeError",message:"EncodingError U+6EE8"});
expect(() => {ms932Encoder.encode("\u6EE9")}).toThrowError({name:"TypeError",message:"EncodingError U+6EE9"});
expect(() => {ms932Encoder.encode("\u6EEA")}).toThrowError({name:"TypeError",message:"EncodingError U+6EEA"});
expect(() => {ms932Encoder.encode("\u6EEB")}).toThrowError({name:"TypeError",message:"EncodingError U+6EEB"});
expect([...ms932Encoder.encode("滬")].join(",")).toBe("159,244"); // U+6EEC
expect(() => {ms932Encoder.encode("\u6EED")}).toThrowError({name:"TypeError",message:"EncodingError U+6EED"});
expect(() => {ms932Encoder.encode("\u6EEE")}).toThrowError({name:"TypeError",message:"EncodingError U+6EEE"});
expect([...ms932Encoder.encode("滯")].join(",")).toBe("159,250"); // U+6EEF
expect(() => {ms932Encoder.encode("\u6EF0")}).toThrowError({name:"TypeError",message:"EncodingError U+6EF0"});
expect(() => {ms932Encoder.encode("\u6EF1")}).toThrowError({name:"TypeError",message:"EncodingError U+6EF1"});
expect([...ms932Encoder.encode("滲")].join(",")).toBe("159,248"); // U+6EF2
expect(() => {ms932Encoder.encode("\u6EF3")}).toThrowError({name:"TypeError",message:"EncodingError U+6EF3"});
expect([...ms932Encoder.encode("滴")].join(",")).toBe("147,72"); // U+6EF4
expect(() => {ms932Encoder.encode("\u6EF5")}).toThrowError({name:"TypeError",message:"EncodingError U+6EF5"});
expect(() => {ms932Encoder.encode("\u6EF6")}).toThrowError({name:"TypeError",message:"EncodingError U+6EF6"});
expect([...ms932Encoder.encode("滷滸")].join(",")).toBe("224,66,159,245"); // U+6EF7
expect(() => {ms932Encoder.encode("\u6EF9")}).toThrowError({name:"TypeError",message:"EncodingError U+6EF9"});
expect(() => {ms932Encoder.encode("\u6EFA")}).toThrowError({name:"TypeError",message:"EncodingError U+6EFA"});
expect(() => {ms932Encoder.encode("\u6EFB")}).toThrowError({name:"TypeError",message:"EncodingError U+6EFB"});
expect(() => {ms932Encoder.encode("\u6EFC")}).toThrowError({name:"TypeError",message:"EncodingError U+6EFC"});
expect(() => {ms932Encoder.encode("\u6EFD")}).toThrowError({name:"TypeError",message:"EncodingError U+6EFD"});
expect([...ms932Encoder.encode("滾滿")].join(",")).toBe("159,246,159,222"); // U+6EFE
expect(() => {ms932Encoder.encode("\u6F00")}).toThrowError({name:"TypeError",message:"EncodingError U+6F00"});
expect([...ms932Encoder.encode("漁漂")].join(",")).toBe("139,153,149,89"); // U+6F01
expect(() => {ms932Encoder.encode("\u6F03")}).toThrowError({name:"TypeError",message:"EncodingError U+6F03"});
expect(() => {ms932Encoder.encode("\u6F04")}).toThrowError({name:"TypeError",message:"EncodingError U+6F04"});
expect(() => {ms932Encoder.encode("\u6F05")}).toThrowError({name:"TypeError",message:"EncodingError U+6F05"});
expect([...ms932Encoder.encode("漆")].join(",")).toBe("142,189"); // U+6F06
expect(() => {ms932Encoder.encode("\u6F07")}).toThrowError({name:"TypeError",message:"EncodingError U+6F07"});
expect(() => {ms932Encoder.encode("\u6F08")}).toThrowError({name:"TypeError",message:"EncodingError U+6F08"});
expect([...ms932Encoder.encode("漉")].join(",")).toBe("141,151"); // U+6F09
expect(() => {ms932Encoder.encode("\u6F0A")}).toThrowError({name:"TypeError",message:"EncodingError U+6F0A"});
expect(() => {ms932Encoder.encode("\u6F0B")}).toThrowError({name:"TypeError",message:"EncodingError U+6F0B"});
expect(() => {ms932Encoder.encode("\u6F0C")}).toThrowError({name:"TypeError",message:"EncodingError U+6F0C"});
expect(() => {ms932Encoder.encode("\u6F0D")}).toThrowError({name:"TypeError",message:"EncodingError U+6F0D"});
expect(() => {ms932Encoder.encode("\u6F0E")}).toThrowError({name:"TypeError",message:"EncodingError U+6F0E"});
expect([...ms932Encoder.encode("漏")].join(",")).toBe("152,82"); // U+6F0F
expect(() => {ms932Encoder.encode("\u6F10")}).toThrowError({name:"TypeError",message:"EncodingError U+6F10"});
expect([...ms932Encoder.encode("漑")].join(",")).toBe("159,242"); // U+6F11
expect(() => {ms932Encoder.encode("\u6F12")}).toThrowError({name:"TypeError",message:"EncodingError U+6F12"});
expect([...ms932Encoder.encode("漓演漕")].join(",")).toBe("224,65,137,137,145,134"); // U+6F13
expect(() => {ms932Encoder.encode("\u6F16")}).toThrowError({name:"TypeError",message:"EncodingError U+6F16"});
expect(() => {ms932Encoder.encode("\u6F17")}).toThrowError({name:"TypeError",message:"EncodingError U+6F17"});
expect(() => {ms932Encoder.encode("\u6F18")}).toThrowError({name:"TypeError",message:"EncodingError U+6F18"});
expect(() => {ms932Encoder.encode("\u6F19")}).toThrowError({name:"TypeError",message:"EncodingError U+6F19"});
expect(() => {ms932Encoder.encode("\u6F1A")}).toThrowError({name:"TypeError",message:"EncodingError U+6F1A"});
expect(() => {ms932Encoder.encode("\u6F1B")}).toThrowError({name:"TypeError",message:"EncodingError U+6F1B"});
expect(() => {ms932Encoder.encode("\u6F1C")}).toThrowError({name:"TypeError",message:"EncodingError U+6F1C"});
expect(() => {ms932Encoder.encode("\u6F1D")}).toThrowError({name:"TypeError",message:"EncodingError U+6F1D"});
expect(() => {ms932Encoder.encode("\u6F1E")}).toThrowError({name:"TypeError",message:"EncodingError U+6F1E"});
expect(() => {ms932Encoder.encode("\u6F1F")}).toThrowError({name:"TypeError",message:"EncodingError U+6F1F"});
expect([...ms932Encoder.encode("漠")].join(",")).toBe("148,153"); // U+6F20
expect(() => {ms932Encoder.encode("\u6F21")}).toThrowError({name:"TypeError",message:"EncodingError U+6F21"});
expect([...ms932Encoder.encode("漢漣")].join(",")).toBe("138,191,151,248"); // U+6F22
expect(() => {ms932Encoder.encode("\u6F24")}).toThrowError({name:"TypeError",message:"EncodingError U+6F24"});
expect(() => {ms932Encoder.encode("\u6F25")}).toThrowError({name:"TypeError",message:"EncodingError U+6F25"});
expect(() => {ms932Encoder.encode("\u6F26")}).toThrowError({name:"TypeError",message:"EncodingError U+6F26"});
expect(() => {ms932Encoder.encode("\u6F27")}).toThrowError({name:"TypeError",message:"EncodingError U+6F27"});
expect(() => {ms932Encoder.encode("\u6F28")}).toThrowError({name:"TypeError",message:"EncodingError U+6F28"});
expect(() => {ms932Encoder.encode("\u6F29")}).toThrowError({name:"TypeError",message:"EncodingError U+6F29"});
expect(() => {ms932Encoder.encode("\u6F2A")}).toThrowError({name:"TypeError",message:"EncodingError U+6F2A"});
expect([...ms932Encoder.encode("漫漬")].join(",")).toBe("150,159,146,208"); // U+6F2B
expect(() => {ms932Encoder.encode("\u6F2D")}).toThrowError({name:"TypeError",message:"EncodingError U+6F2D"});
expect(() => {ms932Encoder.encode("\u6F2E")}).toThrowError({name:"TypeError",message:"EncodingError U+6F2E"});
expect(() => {ms932Encoder.encode("\u6F2F")}).toThrowError({name:"TypeError",message:"EncodingError U+6F2F"});
expect(() => {ms932Encoder.encode("\u6F30")}).toThrowError({name:"TypeError",message:"EncodingError U+6F30"});
expect([...ms932Encoder.encode("漱漲")].join(",")).toBe("159,249,159,251"); // U+6F31
expect(() => {ms932Encoder.encode("\u6F33")}).toThrowError({name:"TypeError",message:"EncodingError U+6F33"});
expect(() => {ms932Encoder.encode("\u6F34")}).toThrowError({name:"TypeError",message:"EncodingError U+6F34"});
expect(() => {ms932Encoder.encode("\u6F35")}).toThrowError({name:"TypeError",message:"EncodingError U+6F35"});
expect(() => {ms932Encoder.encode("\u6F36")}).toThrowError({name:"TypeError",message:"EncodingError U+6F36"});
expect(() => {ms932Encoder.encode("\u6F37")}).toThrowError({name:"TypeError",message:"EncodingError U+6F37"});
expect([...ms932Encoder.encode("漸")].join(",")).toBe("145,81"); // U+6F38
expect(() => {ms932Encoder.encode("\u6F39")}).toThrowError({name:"TypeError",message:"EncodingError U+6F39"});
expect(() => {ms932Encoder.encode("\u6F3A")}).toThrowError({name:"TypeError",message:"EncodingError U+6F3A"});
expect(() => {ms932Encoder.encode("\u6F3B")}).toThrowError({name:"TypeError",message:"EncodingError U+6F3B"});
expect(() => {ms932Encoder.encode("\u6F3C")}).toThrowError({name:"TypeError",message:"EncodingError U+6F3C"});
expect(() => {ms932Encoder.encode("\u6F3D")}).toThrowError({name:"TypeError",message:"EncodingError U+6F3D"});
expect([...ms932Encoder.encode("漾漿")].join(",")).toBe("224,64,159,247"); // U+6F3E
expect(() => {ms932Encoder.encode("\u6F40")}).toThrowError({name:"TypeError",message:"EncodingError U+6F40"});
expect([...ms932Encoder.encode("潁")].join(",")).toBe("159,241"); // U+6F41
expect(() => {ms932Encoder.encode("\u6F42")}).toThrowError({name:"TypeError",message:"EncodingError U+6F42"});
expect(() => {ms932Encoder.encode("\u6F43")}).toThrowError({name:"TypeError",message:"EncodingError U+6F43"});
expect(() => {ms932Encoder.encode("\u6F44")}).toThrowError({name:"TypeError",message:"EncodingError U+6F44"});
expect([...ms932Encoder.encode("潅")].join(",")).toBe("138,193"); // U+6F45
expect(() => {ms932Encoder.encode("\u6F46")}).toThrowError({name:"TypeError",message:"EncodingError U+6F46"});
expect(() => {ms932Encoder.encode("\u6F47")}).toThrowError({name:"TypeError",message:"EncodingError U+6F47"});
expect(() => {ms932Encoder.encode("\u6F48")}).toThrowError({name:"TypeError",message:"EncodingError U+6F48"});
expect(() => {ms932Encoder.encode("\u6F49")}).toThrowError({name:"TypeError",message:"EncodingError U+6F49"});
expect(() => {ms932Encoder.encode("\u6F4A")}).toThrowError({name:"TypeError",message:"EncodingError U+6F4A"});
expect(() => {ms932Encoder.encode("\u6F4B")}).toThrowError({name:"TypeError",message:"EncodingError U+6F4B"});
expect(() => {ms932Encoder.encode("\u6F4C")}).toThrowError({name:"TypeError",message:"EncodingError U+6F4C"});
expect(() => {ms932Encoder.encode("\u6F4D")}).toThrowError({name:"TypeError",message:"EncodingError U+6F4D"});
expect(() => {ms932Encoder.encode("\u6F4E")}).toThrowError({name:"TypeError",message:"EncodingError U+6F4E"});
expect(() => {ms932Encoder.encode("\u6F4F")}).toThrowError({name:"TypeError",message:"EncodingError U+6F4F"});
expect(() => {ms932Encoder.encode("\u6F50")}).toThrowError({name:"TypeError",message:"EncodingError U+6F50"});
expect(() => {ms932Encoder.encode("\u6F51")}).toThrowError({name:"TypeError",message:"EncodingError U+6F51"});
expect(() => {ms932Encoder.encode("\u6F52")}).toThrowError({name:"TypeError",message:"EncodingError U+6F52"});
expect(() => {ms932Encoder.encode("\u6F53")}).toThrowError({name:"TypeError",message:"EncodingError U+6F53"});
expect([...ms932Encoder.encode("潔")].join(",")).toBe("140,137"); // U+6F54
expect(() => {ms932Encoder.encode("\u6F55")}).toThrowError({name:"TypeError",message:"EncodingError U+6F55"});
expect(() => {ms932Encoder.encode("\u6F56")}).toThrowError({name:"TypeError",message:"EncodingError U+6F56"});
expect(() => {ms932Encoder.encode("\u6F57")}).toThrowError({name:"TypeError",message:"EncodingError U+6F57"});
expect([...ms932Encoder.encode("潘")].join(",")).toBe("224,78"); // U+6F58
expect(() => {ms932Encoder.encode("\u6F59")}).toThrowError({name:"TypeError",message:"EncodingError U+6F59"});
expect(() => {ms932Encoder.encode("\u6F5A")}).toThrowError({name:"TypeError",message:"EncodingError U+6F5A"});
expect([...ms932Encoder.encode("潛潜")].join(",")).toBe("224,73,144,246"); // U+6F5B
expect(() => {ms932Encoder.encode("\u6F5D")}).toThrowError({name:"TypeError",message:"EncodingError U+6F5D"});
expect(() => {ms932Encoder.encode("\u6F5E")}).toThrowError({name:"TypeError",message:"EncodingError U+6F5E"});
expect([...ms932Encoder.encode("潟")].join(",")).toBe("138,131"); // U+6F5F
expect(() => {ms932Encoder.encode("\u6F60")}).toThrowError({name:"TypeError",message:"EncodingError U+6F60"});
expect(() => {ms932Encoder.encode("\u6F61")}).toThrowError({name:"TypeError",message:"EncodingError U+6F61"});
expect(() => {ms932Encoder.encode("\u6F62")}).toThrowError({name:"TypeError",message:"EncodingError U+6F62"});
expect(() => {ms932Encoder.encode("\u6F63")}).toThrowError({name:"TypeError",message:"EncodingError U+6F63"});
expect([...ms932Encoder.encode("潤")].join(",")).toBe("143,129"); // U+6F64
expect(() => {ms932Encoder.encode("\u6F65")}).toThrowError({name:"TypeError",message:"EncodingError U+6F65"});
expect([...ms932Encoder.encode("潦")].join(",")).toBe("224,82"); // U+6F66
expect(() => {ms932Encoder.encode("\u6F67")}).toThrowError({name:"TypeError",message:"EncodingError U+6F67"});
expect(() => {ms932Encoder.encode("\u6F68")}).toThrowError({name:"TypeError",message:"EncodingError U+6F68"});
expect(() => {ms932Encoder.encode("\u6F69")}).toThrowError({name:"TypeError",message:"EncodingError U+6F69"});
expect(() => {ms932Encoder.encode("\u6F6A")}).toThrowError({name:"TypeError",message:"EncodingError U+6F6A"});
expect(() => {ms932Encoder.encode("\u6F6B")}).toThrowError({name:"TypeError",message:"EncodingError U+6F6B"});
expect(() => {ms932Encoder.encode("\u6F6C")}).toThrowError({name:"TypeError",message:"EncodingError U+6F6C"});
expect([...ms932Encoder.encode("潭潮潯潰")].join(",")).toBe("224,75,146,170,224,72,146,215"); // U+6F6D
expect(() => {ms932Encoder.encode("\u6F71")}).toThrowError({name:"TypeError",message:"EncodingError U+6F71"});
expect(() => {ms932Encoder.encode("\u6F72")}).toThrowError({name:"TypeError",message:"EncodingError U+6F72"});
expect(() => {ms932Encoder.encode("\u6F73")}).toThrowError({name:"TypeError",message:"EncodingError U+6F73"});
expect([...ms932Encoder.encode("潴")].join(",")).toBe("224,107"); // U+6F74
expect(() => {ms932Encoder.encode("\u6F75")}).toThrowError({name:"TypeError",message:"EncodingError U+6F75"});
expect(() => {ms932Encoder.encode("\u6F76")}).toThrowError({name:"TypeError",message:"EncodingError U+6F76"});
expect(() => {ms932Encoder.encode("\u6F77")}).toThrowError({name:"TypeError",message:"EncodingError U+6F77"});
expect([...ms932Encoder.encode("潸")].join(",")).toBe("224,69"); // U+6F78
expect(() => {ms932Encoder.encode("\u6F79")}).toThrowError({name:"TypeError",message:"EncodingError U+6F79"});
expect([...ms932Encoder.encode("潺")].join(",")).toBe("224,68"); // U+6F7A
expect(() => {ms932Encoder.encode("\u6F7B")}).toThrowError({name:"TypeError",message:"EncodingError U+6F7B"});
expect([...ms932Encoder.encode("潼")].join(",")).toBe("224,77"); // U+6F7C
expect(() => {ms932Encoder.encode("\u6F7D")}).toThrowError({name:"TypeError",message:"EncodingError U+6F7D"});
expect(() => {ms932Encoder.encode("\u6F7E")}).toThrowError({name:"TypeError",message:"EncodingError U+6F7E"});
expect(() => {ms932Encoder.encode("\u6F7F")}).toThrowError({name:"TypeError",message:"EncodingError U+6F7F"});
expect([...ms932Encoder.encode("澀澁澂")].join(",")).toBe("224,71,224,70,224,76"); // U+6F80
expect(() => {ms932Encoder.encode("\u6F83")}).toThrowError({name:"TypeError",message:"EncodingError U+6F83"});
expect([...ms932Encoder.encode("澄")].join(",")).toBe("144,159"); // U+6F84
expect(() => {ms932Encoder.encode("\u6F85")}).toThrowError({name:"TypeError",message:"EncodingError U+6F85"});
expect([...ms932Encoder.encode("澆")].join(",")).toBe("224,67"); // U+6F86
expect(() => {ms932Encoder.encode("\u6F87")}).toThrowError({name:"TypeError",message:"EncodingError U+6F87"});
expect([...ms932Encoder.encode("澈")].join(",")).toBe("251,75"); // U+6F88
expect(() => {ms932Encoder.encode("\u6F89")}).toThrowError({name:"TypeError",message:"EncodingError U+6F89"});
expect(() => {ms932Encoder.encode("\u6F8A")}).toThrowError({name:"TypeError",message:"EncodingError U+6F8A"});
expect(() => {ms932Encoder.encode("\u6F8B")}).toThrowError({name:"TypeError",message:"EncodingError U+6F8B"});
expect(() => {ms932Encoder.encode("\u6F8C")}).toThrowError({name:"TypeError",message:"EncodingError U+6F8C"});
expect(() => {ms932Encoder.encode("\u6F8D")}).toThrowError({name:"TypeError",message:"EncodingError U+6F8D"});
expect([...ms932Encoder.encode("澎")].join(",")).toBe("224,79"); // U+6F8E
expect(() => {ms932Encoder.encode("\u6F8F")}).toThrowError({name:"TypeError",message:"EncodingError U+6F8F"});
expect(() => {ms932Encoder.encode("\u6F90")}).toThrowError({name:"TypeError",message:"EncodingError U+6F90"});
expect([...ms932Encoder.encode("澑")].join(",")).toBe("224,80"); // U+6F91
expect(() => {ms932Encoder.encode("\u6F92")}).toThrowError({name:"TypeError",message:"EncodingError U+6F92"});
expect(() => {ms932Encoder.encode("\u6F93")}).toThrowError({name:"TypeError",message:"EncodingError U+6F93"});
expect(() => {ms932Encoder.encode("\u6F94")}).toThrowError({name:"TypeError",message:"EncodingError U+6F94"});
expect(() => {ms932Encoder.encode("\u6F95")}).toThrowError({name:"TypeError",message:"EncodingError U+6F95"});
expect(() => {ms932Encoder.encode("\u6F96")}).toThrowError({name:"TypeError",message:"EncodingError U+6F96"});
expect([...ms932Encoder.encode("澗")].join(",")).toBe("138,192"); // U+6F97
expect(() => {ms932Encoder.encode("\u6F98")}).toThrowError({name:"TypeError",message:"EncodingError U+6F98"});
expect(() => {ms932Encoder.encode("\u6F99")}).toThrowError({name:"TypeError",message:"EncodingError U+6F99"});
expect(() => {ms932Encoder.encode("\u6F9A")}).toThrowError({name:"TypeError",message:"EncodingError U+6F9A"});
expect(() => {ms932Encoder.encode("\u6F9B")}).toThrowError({name:"TypeError",message:"EncodingError U+6F9B"});
expect(() => {ms932Encoder.encode("\u6F9C")}).toThrowError({name:"TypeError",message:"EncodingError U+6F9C"});
expect(() => {ms932Encoder.encode("\u6F9D")}).toThrowError({name:"TypeError",message:"EncodingError U+6F9D"});
expect(() => {ms932Encoder.encode("\u6F9E")}).toThrowError({name:"TypeError",message:"EncodingError U+6F9E"});
expect(() => {ms932Encoder.encode("\u6F9F")}).toThrowError({name:"TypeError",message:"EncodingError U+6F9F"});
expect(() => {ms932Encoder.encode("\u6FA0")}).toThrowError({name:"TypeError",message:"EncodingError U+6FA0"});
expect([...ms932Encoder.encode("澡")].join(",")).toBe("224,85"); // U+6FA1
expect(() => {ms932Encoder.encode("\u6FA2")}).toThrowError({name:"TypeError",message:"EncodingError U+6FA2"});
expect([...ms932Encoder.encode("澣澤")].join(",")).toBe("224,84,224,86"); // U+6FA3
expect(() => {ms932Encoder.encode("\u6FA5")}).toThrowError({name:"TypeError",message:"EncodingError U+6FA5"});
expect(() => {ms932Encoder.encode("\u6FA6")}).toThrowError({name:"TypeError",message:"EncodingError U+6FA6"});
expect(() => {ms932Encoder.encode("\u6FA7")}).toThrowError({name:"TypeError",message:"EncodingError U+6FA7"});
expect(() => {ms932Encoder.encode("\u6FA8")}).toThrowError({name:"TypeError",message:"EncodingError U+6FA8"});
expect(() => {ms932Encoder.encode("\u6FA9")}).toThrowError({name:"TypeError",message:"EncodingError U+6FA9"});
expect([...ms932Encoder.encode("澪")].join(",")).toBe("224,89"); // U+6FAA
expect(() => {ms932Encoder.encode("\u6FAB")}).toThrowError({name:"TypeError",message:"EncodingError U+6FAB"});
expect(() => {ms932Encoder.encode("\u6FAC")}).toThrowError({name:"TypeError",message:"EncodingError U+6FAC"});
expect(() => {ms932Encoder.encode("\u6FAD")}).toThrowError({name:"TypeError",message:"EncodingError U+6FAD"});
expect(() => {ms932Encoder.encode("\u6FAE")}).toThrowError({name:"TypeError",message:"EncodingError U+6FAE"});
expect(() => {ms932Encoder.encode("\u6FAF")}).toThrowError({name:"TypeError",message:"EncodingError U+6FAF"});
expect(() => {ms932Encoder.encode("\u6FB0")}).toThrowError({name:"TypeError",message:"EncodingError U+6FB0"});
expect([...ms932Encoder.encode("澱")].join(",")).toBe("147,98"); // U+6FB1
expect(() => {ms932Encoder.encode("\u6FB2")}).toThrowError({name:"TypeError",message:"EncodingError U+6FB2"});
expect([...ms932Encoder.encode("澳")].join(",")).toBe("224,83"); // U+6FB3
expect(() => {ms932Encoder.encode("\u6FB4")}).toThrowError({name:"TypeError",message:"EncodingError U+6FB4"});
expect([...ms932Encoder.encode("澵")].join(",")).toBe("251,76"); // U+6FB5
expect(() => {ms932Encoder.encode("\u6FB6")}).toThrowError({name:"TypeError",message:"EncodingError U+6FB6"});
expect(() => {ms932Encoder.encode("\u6FB7")}).toThrowError({name:"TypeError",message:"EncodingError U+6FB7"});
expect(() => {ms932Encoder.encode("\u6FB8")}).toThrowError({name:"TypeError",message:"EncodingError U+6FB8"});
expect([...ms932Encoder.encode("澹")].join(",")).toBe("224,87"); // U+6FB9
expect(() => {ms932Encoder.encode("\u6FBA")}).toThrowError({name:"TypeError",message:"EncodingError U+6FBA"});
expect(() => {ms932Encoder.encode("\u6FBB")}).toThrowError({name:"TypeError",message:"EncodingError U+6FBB"});
expect(() => {ms932Encoder.encode("\u6FBC")}).toThrowError({name:"TypeError",message:"EncodingError U+6FBC"});
expect(() => {ms932Encoder.encode("\u6FBD")}).toThrowError({name:"TypeError",message:"EncodingError U+6FBD"});
expect(() => {ms932Encoder.encode("\u6FBE")}).toThrowError({name:"TypeError",message:"EncodingError U+6FBE"});
expect(() => {ms932Encoder.encode("\u6FBF")}).toThrowError({name:"TypeError",message:"EncodingError U+6FBF"});
expect([...ms932Encoder.encode("激濁濂濃")].join(",")).toBe("140,131,145,247,224,81,148,90"); // U+6FC0
expect(() => {ms932Encoder.encode("\u6FC4")}).toThrowError({name:"TypeError",message:"EncodingError U+6FC4"});
expect(() => {ms932Encoder.encode("\u6FC5")}).toThrowError({name:"TypeError",message:"EncodingError U+6FC5"});
expect([...ms932Encoder.encode("濆")].join(",")).toBe("224,88"); // U+6FC6
expect(() => {ms932Encoder.encode("\u6FC7")}).toThrowError({name:"TypeError",message:"EncodingError U+6FC7"});
expect(() => {ms932Encoder.encode("\u6FC8")}).toThrowError({name:"TypeError",message:"EncodingError U+6FC8"});
expect(() => {ms932Encoder.encode("\u6FC9")}).toThrowError({name:"TypeError",message:"EncodingError U+6FC9"});
expect(() => {ms932Encoder.encode("\u6FCA")}).toThrowError({name:"TypeError",message:"EncodingError U+6FCA"});
expect(() => {ms932Encoder.encode("\u6FCB")}).toThrowError({name:"TypeError",message:"EncodingError U+6FCB"});
expect(() => {ms932Encoder.encode("\u6FCC")}).toThrowError({name:"TypeError",message:"EncodingError U+6FCC"});
expect(() => {ms932Encoder.encode("\u6FCD")}).toThrowError({name:"TypeError",message:"EncodingError U+6FCD"});
expect(() => {ms932Encoder.encode("\u6FCE")}).toThrowError({name:"TypeError",message:"EncodingError U+6FCE"});
expect(() => {ms932Encoder.encode("\u6FCF")}).toThrowError({name:"TypeError",message:"EncodingError U+6FCF"});
expect(() => {ms932Encoder.encode("\u6FD0")}).toThrowError({name:"TypeError",message:"EncodingError U+6FD0"});
expect(() => {ms932Encoder.encode("\u6FD1")}).toThrowError({name:"TypeError",message:"EncodingError U+6FD1"});
expect(() => {ms932Encoder.encode("\u6FD2")}).toThrowError({name:"TypeError",message:"EncodingError U+6FD2"});
expect(() => {ms932Encoder.encode("\u6FD3")}).toThrowError({name:"TypeError",message:"EncodingError U+6FD3"});
expect([...ms932Encoder.encode("濔濕")].join(",")).toBe("224,93,224,91"); // U+6FD4
expect(() => {ms932Encoder.encode("\u6FD6")}).toThrowError({name:"TypeError",message:"EncodingError U+6FD6"});
expect(() => {ms932Encoder.encode("\u6FD7")}).toThrowError({name:"TypeError",message:"EncodingError U+6FD7"});
expect([...ms932Encoder.encode("濘")].join(",")).toBe("224,94"); // U+6FD8
expect(() => {ms932Encoder.encode("\u6FD9")}).toThrowError({name:"TypeError",message:"EncodingError U+6FD9"});
expect(() => {ms932Encoder.encode("\u6FDA")}).toThrowError({name:"TypeError",message:"EncodingError U+6FDA"});
expect([...ms932Encoder.encode("濛")].join(",")).toBe("224,97"); // U+6FDB
expect(() => {ms932Encoder.encode("\u6FDC")}).toThrowError({name:"TypeError",message:"EncodingError U+6FDC"});
expect(() => {ms932Encoder.encode("\u6FDD")}).toThrowError({name:"TypeError",message:"EncodingError U+6FDD"});
expect(() => {ms932Encoder.encode("\u6FDE")}).toThrowError({name:"TypeError",message:"EncodingError U+6FDE"});
expect([...ms932Encoder.encode("濟濠濡")].join(",")).toBe("224,90,141,138,148,71"); // U+6FDF
expect(() => {ms932Encoder.encode("\u6FE2")}).toThrowError({name:"TypeError",message:"EncodingError U+6FE2"});
expect(() => {ms932Encoder.encode("\u6FE3")}).toThrowError({name:"TypeError",message:"EncodingError U+6FE3"});
expect([...ms932Encoder.encode("濤")].join(",")).toBe("159,183"); // U+6FE4
expect(() => {ms932Encoder.encode("\u6FE5")}).toThrowError({name:"TypeError",message:"EncodingError U+6FE5"});
expect(() => {ms932Encoder.encode("\u6FE6")}).toThrowError({name:"TypeError",message:"EncodingError U+6FE6"});
expect(() => {ms932Encoder.encode("\u6FE7")}).toThrowError({name:"TypeError",message:"EncodingError U+6FE7"});
expect(() => {ms932Encoder.encode("\u6FE8")}).toThrowError({name:"TypeError",message:"EncodingError U+6FE8"});
expect(() => {ms932Encoder.encode("\u6FE9")}).toThrowError({name:"TypeError",message:"EncodingError U+6FE9"});
expect(() => {ms932Encoder.encode("\u6FEA")}).toThrowError({name:"TypeError",message:"EncodingError U+6FEA"});
expect([...ms932Encoder.encode("濫濬")].join(",")).toBe("151,148,224,92"); // U+6FEB
expect(() => {ms932Encoder.encode("\u6FED")}).toThrowError({name:"TypeError",message:"EncodingError U+6FED"});
expect([...ms932Encoder.encode("濮濯")].join(",")).toBe("224,96,145,243"); // U+6FEE
expect(() => {ms932Encoder.encode("\u6FF0")}).toThrowError({name:"TypeError",message:"EncodingError U+6FF0"});
expect([...ms932Encoder.encode("濱")].join(",")).toBe("224,95"); // U+6FF1
expect(() => {ms932Encoder.encode("\u6FF2")}).toThrowError({name:"TypeError",message:"EncodingError U+6FF2"});
expect([...ms932Encoder.encode("濳")].join(",")).toBe("224,74"); // U+6FF3
expect(() => {ms932Encoder.encode("\u6FF4")}).toThrowError({name:"TypeError",message:"EncodingError U+6FF4"});
expect([...ms932Encoder.encode("濵濶")].join(",")).toBe("251,77,232,137"); // U+6FF5
expect(() => {ms932Encoder.encode("\u6FF7")}).toThrowError({name:"TypeError",message:"EncodingError U+6FF7"});
expect(() => {ms932Encoder.encode("\u6FF8")}).toThrowError({name:"TypeError",message:"EncodingError U+6FF8"});
expect(() => {ms932Encoder.encode("\u6FF9")}).toThrowError({name:"TypeError",message:"EncodingError U+6FF9"});
expect([...ms932Encoder.encode("濺")].join(",")).toBe("224,100"); // U+6FFA
expect(() => {ms932Encoder.encode("\u6FFB")}).toThrowError({name:"TypeError",message:"EncodingError U+6FFB"});
expect(() => {ms932Encoder.encode("\u6FFC")}).toThrowError({name:"TypeError",message:"EncodingError U+6FFC"});
expect(() => {ms932Encoder.encode("\u6FFD")}).toThrowError({name:"TypeError",message:"EncodingError U+6FFD"});
expect([...ms932Encoder.encode("濾")].join(",")).toBe("224,104"); // U+6FFE
expect(() => {ms932Encoder.encode("\u6FFF")}).toThrowError({name:"TypeError",message:"EncodingError U+6FFF"});

  });

});
