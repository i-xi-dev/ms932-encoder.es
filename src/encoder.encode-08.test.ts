import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 8", () => {

  it("encode(string) - U+7000-U+7FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

expect(() => {ms932Encoder.encode("\u7000")}).toThrowError({name:"TypeError",message:"EncodingError U+7000"});
expect([...ms932Encoder.encode("瀁")].join(",")).toBe("224,102"); // U+7001
expect(() => {ms932Encoder.encode("\u7002")}).toThrowError({name:"TypeError",message:"EncodingError U+7002"});
expect(() => {ms932Encoder.encode("\u7003")}).toThrowError({name:"TypeError",message:"EncodingError U+7003"});
expect(() => {ms932Encoder.encode("\u7004")}).toThrowError({name:"TypeError",message:"EncodingError U+7004"});
expect([...ms932Encoder.encode("瀅")].join(",")).toBe("251,78"); // U+7005
expect(() => {ms932Encoder.encode("\u7006")}).toThrowError({name:"TypeError",message:"EncodingError U+7006"});
expect([...ms932Encoder.encode("瀇")].join(",")).toBe("251,79"); // U+7007
expect(() => {ms932Encoder.encode("\u7008")}).toThrowError({name:"TypeError",message:"EncodingError U+7008"});
expect([...ms932Encoder.encode("瀉")].join(",")).toBe("224,98"); // U+7009
expect(() => {ms932Encoder.encode("\u700A")}).toThrowError({name:"TypeError",message:"EncodingError U+700A"});
expect([...ms932Encoder.encode("瀋")].join(",")).toBe("224,99"); // U+700B
expect(() => {ms932Encoder.encode("\u700C")}).toThrowError({name:"TypeError",message:"EncodingError U+700C"});
expect(() => {ms932Encoder.encode("\u700D")}).toThrowError({name:"TypeError",message:"EncodingError U+700D"});
expect(() => {ms932Encoder.encode("\u700E")}).toThrowError({name:"TypeError",message:"EncodingError U+700E"});
expect([...ms932Encoder.encode("瀏")].join(",")).toBe("224,103"); // U+700F
expect(() => {ms932Encoder.encode("\u7010")}).toThrowError({name:"TypeError",message:"EncodingError U+7010"});
expect([...ms932Encoder.encode("瀑")].join(",")).toBe("224,101"); // U+7011
expect(() => {ms932Encoder.encode("\u7012")}).toThrowError({name:"TypeError",message:"EncodingError U+7012"});
expect(() => {ms932Encoder.encode("\u7013")}).toThrowError({name:"TypeError",message:"EncodingError U+7013"});
expect(() => {ms932Encoder.encode("\u7014")}).toThrowError({name:"TypeError",message:"EncodingError U+7014"});
expect([...ms932Encoder.encode("瀕")].join(",")).toBe("149,109"); // U+7015
expect(() => {ms932Encoder.encode("\u7016")}).toThrowError({name:"TypeError",message:"EncodingError U+7016"});
expect(() => {ms932Encoder.encode("\u7017")}).toThrowError({name:"TypeError",message:"EncodingError U+7017"});
expect([...ms932Encoder.encode("瀘")].join(",")).toBe("224,109"); // U+7018
expect(() => {ms932Encoder.encode("\u7019")}).toThrowError({name:"TypeError",message:"EncodingError U+7019"});
expect([...ms932Encoder.encode("瀚瀛")].join(",")).toBe("224,106,224,105"); // U+701A
expect(() => {ms932Encoder.encode("\u701C")}).toThrowError({name:"TypeError",message:"EncodingError U+701C"});
expect([...ms932Encoder.encode("瀝瀞瀟")].join(",")).toBe("224,108,147,210,224,110"); // U+701D
expect(() => {ms932Encoder.encode("\u7020")}).toThrowError({name:"TypeError",message:"EncodingError U+7020"});
expect(() => {ms932Encoder.encode("\u7021")}).toThrowError({name:"TypeError",message:"EncodingError U+7021"});
expect(() => {ms932Encoder.encode("\u7022")}).toThrowError({name:"TypeError",message:"EncodingError U+7022"});
expect(() => {ms932Encoder.encode("\u7023")}).toThrowError({name:"TypeError",message:"EncodingError U+7023"});
expect(() => {ms932Encoder.encode("\u7024")}).toThrowError({name:"TypeError",message:"EncodingError U+7024"});
expect(() => {ms932Encoder.encode("\u7025")}).toThrowError({name:"TypeError",message:"EncodingError U+7025"});
expect([...ms932Encoder.encode("瀦瀧瀨")].join(",")).toBe("146,149,145,235,251,80"); // U+7026
expect(() => {ms932Encoder.encode("\u7029")}).toThrowError({name:"TypeError",message:"EncodingError U+7029"});
expect(() => {ms932Encoder.encode("\u702A")}).toThrowError({name:"TypeError",message:"EncodingError U+702A"});
expect(() => {ms932Encoder.encode("\u702B")}).toThrowError({name:"TypeError",message:"EncodingError U+702B"});
expect([...ms932Encoder.encode("瀬")].join(",")).toBe("144,163"); // U+702C
expect(() => {ms932Encoder.encode("\u702D")}).toThrowError({name:"TypeError",message:"EncodingError U+702D"});
expect(() => {ms932Encoder.encode("\u702E")}).toThrowError({name:"TypeError",message:"EncodingError U+702E"});
expect(() => {ms932Encoder.encode("\u702F")}).toThrowError({name:"TypeError",message:"EncodingError U+702F"});
expect([...ms932Encoder.encode("瀰")].join(",")).toBe("224,111"); // U+7030
expect(() => {ms932Encoder.encode("\u7031")}).toThrowError({name:"TypeError",message:"EncodingError U+7031"});
expect([...ms932Encoder.encode("瀲")].join(",")).toBe("224,113"); // U+7032
expect(() => {ms932Encoder.encode("\u7033")}).toThrowError({name:"TypeError",message:"EncodingError U+7033"});
expect(() => {ms932Encoder.encode("\u7034")}).toThrowError({name:"TypeError",message:"EncodingError U+7034"});
expect(() => {ms932Encoder.encode("\u7035")}).toThrowError({name:"TypeError",message:"EncodingError U+7035"});
expect(() => {ms932Encoder.encode("\u7036")}).toThrowError({name:"TypeError",message:"EncodingError U+7036"});
expect(() => {ms932Encoder.encode("\u7037")}).toThrowError({name:"TypeError",message:"EncodingError U+7037"});
expect(() => {ms932Encoder.encode("\u7038")}).toThrowError({name:"TypeError",message:"EncodingError U+7038"});
expect(() => {ms932Encoder.encode("\u7039")}).toThrowError({name:"TypeError",message:"EncodingError U+7039"});
expect(() => {ms932Encoder.encode("\u703A")}).toThrowError({name:"TypeError",message:"EncodingError U+703A"});
expect(() => {ms932Encoder.encode("\u703B")}).toThrowError({name:"TypeError",message:"EncodingError U+703B"});
expect(() => {ms932Encoder.encode("\u703C")}).toThrowError({name:"TypeError",message:"EncodingError U+703C"});
expect(() => {ms932Encoder.encode("\u703D")}).toThrowError({name:"TypeError",message:"EncodingError U+703D"});
expect([...ms932Encoder.encode("瀾")].join(",")).toBe("224,112"); // U+703E
expect(() => {ms932Encoder.encode("\u703F")}).toThrowError({name:"TypeError",message:"EncodingError U+703F"});
expect(() => {ms932Encoder.encode("\u7040")}).toThrowError({name:"TypeError",message:"EncodingError U+7040"});
expect(() => {ms932Encoder.encode("\u7041")}).toThrowError({name:"TypeError",message:"EncodingError U+7041"});
expect(() => {ms932Encoder.encode("\u7042")}).toThrowError({name:"TypeError",message:"EncodingError U+7042"});
expect(() => {ms932Encoder.encode("\u7043")}).toThrowError({name:"TypeError",message:"EncodingError U+7043"});
expect(() => {ms932Encoder.encode("\u7044")}).toThrowError({name:"TypeError",message:"EncodingError U+7044"});
expect(() => {ms932Encoder.encode("\u7045")}).toThrowError({name:"TypeError",message:"EncodingError U+7045"});
expect(() => {ms932Encoder.encode("\u7046")}).toThrowError({name:"TypeError",message:"EncodingError U+7046"});
expect(() => {ms932Encoder.encode("\u7047")}).toThrowError({name:"TypeError",message:"EncodingError U+7047"});
expect(() => {ms932Encoder.encode("\u7048")}).toThrowError({name:"TypeError",message:"EncodingError U+7048"});
expect(() => {ms932Encoder.encode("\u7049")}).toThrowError({name:"TypeError",message:"EncodingError U+7049"});
expect(() => {ms932Encoder.encode("\u704A")}).toThrowError({name:"TypeError",message:"EncodingError U+704A"});
expect(() => {ms932Encoder.encode("\u704B")}).toThrowError({name:"TypeError",message:"EncodingError U+704B"});
expect([...ms932Encoder.encode("灌")].join(",")).toBe("159,243"); // U+704C
expect(() => {ms932Encoder.encode("\u704D")}).toThrowError({name:"TypeError",message:"EncodingError U+704D"});
expect(() => {ms932Encoder.encode("\u704E")}).toThrowError({name:"TypeError",message:"EncodingError U+704E"});
expect(() => {ms932Encoder.encode("\u704F")}).toThrowError({name:"TypeError",message:"EncodingError U+704F"});
expect(() => {ms932Encoder.encode("\u7050")}).toThrowError({name:"TypeError",message:"EncodingError U+7050"});
expect([...ms932Encoder.encode("灑")].join(",")).toBe("224,114"); // U+7051
expect(() => {ms932Encoder.encode("\u7052")}).toThrowError({name:"TypeError",message:"EncodingError U+7052"});
expect(() => {ms932Encoder.encode("\u7053")}).toThrowError({name:"TypeError",message:"EncodingError U+7053"});
expect(() => {ms932Encoder.encode("\u7054")}).toThrowError({name:"TypeError",message:"EncodingError U+7054"});
expect(() => {ms932Encoder.encode("\u7055")}).toThrowError({name:"TypeError",message:"EncodingError U+7055"});
expect(() => {ms932Encoder.encode("\u7056")}).toThrowError({name:"TypeError",message:"EncodingError U+7056"});
expect(() => {ms932Encoder.encode("\u7057")}).toThrowError({name:"TypeError",message:"EncodingError U+7057"});
expect([...ms932Encoder.encode("灘")].join(",")).toBe("147,229"); // U+7058
expect(() => {ms932Encoder.encode("\u7059")}).toThrowError({name:"TypeError",message:"EncodingError U+7059"});
expect(() => {ms932Encoder.encode("\u705A")}).toThrowError({name:"TypeError",message:"EncodingError U+705A"});
expect(() => {ms932Encoder.encode("\u705B")}).toThrowError({name:"TypeError",message:"EncodingError U+705B"});
expect(() => {ms932Encoder.encode("\u705C")}).toThrowError({name:"TypeError",message:"EncodingError U+705C"});
expect(() => {ms932Encoder.encode("\u705D")}).toThrowError({name:"TypeError",message:"EncodingError U+705D"});
expect(() => {ms932Encoder.encode("\u705E")}).toThrowError({name:"TypeError",message:"EncodingError U+705E"});
expect(() => {ms932Encoder.encode("\u705F")}).toThrowError({name:"TypeError",message:"EncodingError U+705F"});
expect(() => {ms932Encoder.encode("\u7060")}).toThrowError({name:"TypeError",message:"EncodingError U+7060"});
expect(() => {ms932Encoder.encode("\u7061")}).toThrowError({name:"TypeError",message:"EncodingError U+7061"});
expect(() => {ms932Encoder.encode("\u7062")}).toThrowError({name:"TypeError",message:"EncodingError U+7062"});
expect([...ms932Encoder.encode("灣")].join(",")).toBe("224,115"); // U+7063
expect(() => {ms932Encoder.encode("\u7064")}).toThrowError({name:"TypeError",message:"EncodingError U+7064"});
expect(() => {ms932Encoder.encode("\u7065")}).toThrowError({name:"TypeError",message:"EncodingError U+7065"});
expect(() => {ms932Encoder.encode("\u7066")}).toThrowError({name:"TypeError",message:"EncodingError U+7066"});
expect(() => {ms932Encoder.encode("\u7067")}).toThrowError({name:"TypeError",message:"EncodingError U+7067"});
expect(() => {ms932Encoder.encode("\u7068")}).toThrowError({name:"TypeError",message:"EncodingError U+7068"});
expect(() => {ms932Encoder.encode("\u7069")}).toThrowError({name:"TypeError",message:"EncodingError U+7069"});
expect(() => {ms932Encoder.encode("\u706A")}).toThrowError({name:"TypeError",message:"EncodingError U+706A"});
expect([...ms932Encoder.encode("火")].join(",")).toBe("137,206"); // U+706B
expect(() => {ms932Encoder.encode("\u706C")}).toThrowError({name:"TypeError",message:"EncodingError U+706C"});
expect(() => {ms932Encoder.encode("\u706D")}).toThrowError({name:"TypeError",message:"EncodingError U+706D"});
expect(() => {ms932Encoder.encode("\u706E")}).toThrowError({name:"TypeError",message:"EncodingError U+706E"});
expect([...ms932Encoder.encode("灯灰")].join(",")).toBe("147,148,138,68"); // U+706F
expect(() => {ms932Encoder.encode("\u7071")}).toThrowError({name:"TypeError",message:"EncodingError U+7071"});
expect(() => {ms932Encoder.encode("\u7072")}).toThrowError({name:"TypeError",message:"EncodingError U+7072"});
expect(() => {ms932Encoder.encode("\u7073")}).toThrowError({name:"TypeError",message:"EncodingError U+7073"});
expect(() => {ms932Encoder.encode("\u7074")}).toThrowError({name:"TypeError",message:"EncodingError U+7074"});
expect(() => {ms932Encoder.encode("\u7075")}).toThrowError({name:"TypeError",message:"EncodingError U+7075"});
expect(() => {ms932Encoder.encode("\u7076")}).toThrowError({name:"TypeError",message:"EncodingError U+7076"});
expect(() => {ms932Encoder.encode("\u7077")}).toThrowError({name:"TypeError",message:"EncodingError U+7077"});
expect([...ms932Encoder.encode("灸")].join(",")).toBe("139,132"); // U+7078
expect(() => {ms932Encoder.encode("\u7079")}).toThrowError({name:"TypeError",message:"EncodingError U+7079"});
expect(() => {ms932Encoder.encode("\u707A")}).toThrowError({name:"TypeError",message:"EncodingError U+707A"});
expect(() => {ms932Encoder.encode("\u707B")}).toThrowError({name:"TypeError",message:"EncodingError U+707B"});
expect([...ms932Encoder.encode("灼災")].join(",")).toBe("142,220,141,208"); // U+707C
expect(() => {ms932Encoder.encode("\u707E")}).toThrowError({name:"TypeError",message:"EncodingError U+707E"});
expect(() => {ms932Encoder.encode("\u707F")}).toThrowError({name:"TypeError",message:"EncodingError U+707F"});
expect(() => {ms932Encoder.encode("\u7080")}).toThrowError({name:"TypeError",message:"EncodingError U+7080"});
expect(() => {ms932Encoder.encode("\u7081")}).toThrowError({name:"TypeError",message:"EncodingError U+7081"});
expect(() => {ms932Encoder.encode("\u7082")}).toThrowError({name:"TypeError",message:"EncodingError U+7082"});
expect(() => {ms932Encoder.encode("\u7083")}).toThrowError({name:"TypeError",message:"EncodingError U+7083"});
expect(() => {ms932Encoder.encode("\u7084")}).toThrowError({name:"TypeError",message:"EncodingError U+7084"});
expect([...ms932Encoder.encode("炅")].join(",")).toBe("251,81"); // U+7085
expect(() => {ms932Encoder.encode("\u7086")}).toThrowError({name:"TypeError",message:"EncodingError U+7086"});
expect(() => {ms932Encoder.encode("\u7087")}).toThrowError({name:"TypeError",message:"EncodingError U+7087"});
expect(() => {ms932Encoder.encode("\u7088")}).toThrowError({name:"TypeError",message:"EncodingError U+7088"});
expect([...ms932Encoder.encode("炉炊")].join(",")).toBe("152,70,144,134"); // U+7089
expect(() => {ms932Encoder.encode("\u708B")}).toThrowError({name:"TypeError",message:"EncodingError U+708B"});
expect(() => {ms932Encoder.encode("\u708C")}).toThrowError({name:"TypeError",message:"EncodingError U+708C"});
expect(() => {ms932Encoder.encode("\u708D")}).toThrowError({name:"TypeError",message:"EncodingError U+708D"});
expect([...ms932Encoder.encode("炎")].join(",")).toBe("137,138"); // U+708E
expect(() => {ms932Encoder.encode("\u708F")}).toThrowError({name:"TypeError",message:"EncodingError U+708F"});
expect(() => {ms932Encoder.encode("\u7090")}).toThrowError({name:"TypeError",message:"EncodingError U+7090"});
expect(() => {ms932Encoder.encode("\u7091")}).toThrowError({name:"TypeError",message:"EncodingError U+7091"});
expect([...ms932Encoder.encode("炒")].join(",")).toBe("224,117"); // U+7092
expect(() => {ms932Encoder.encode("\u7093")}).toThrowError({name:"TypeError",message:"EncodingError U+7093"});
expect(() => {ms932Encoder.encode("\u7094")}).toThrowError({name:"TypeError",message:"EncodingError U+7094"});
expect(() => {ms932Encoder.encode("\u7095")}).toThrowError({name:"TypeError",message:"EncodingError U+7095"});
expect(() => {ms932Encoder.encode("\u7096")}).toThrowError({name:"TypeError",message:"EncodingError U+7096"});
expect(() => {ms932Encoder.encode("\u7097")}).toThrowError({name:"TypeError",message:"EncodingError U+7097"});
expect(() => {ms932Encoder.encode("\u7098")}).toThrowError({name:"TypeError",message:"EncodingError U+7098"});
expect([...ms932Encoder.encode("炙")].join(",")).toBe("224,116"); // U+7099
expect(() => {ms932Encoder.encode("\u709A")}).toThrowError({name:"TypeError",message:"EncodingError U+709A"});
expect(() => {ms932Encoder.encode("\u709B")}).toThrowError({name:"TypeError",message:"EncodingError U+709B"});
expect(() => {ms932Encoder.encode("\u709C")}).toThrowError({name:"TypeError",message:"EncodingError U+709C"});
expect(() => {ms932Encoder.encode("\u709D")}).toThrowError({name:"TypeError",message:"EncodingError U+709D"});
expect(() => {ms932Encoder.encode("\u709E")}).toThrowError({name:"TypeError",message:"EncodingError U+709E"});
expect(() => {ms932Encoder.encode("\u709F")}).toThrowError({name:"TypeError",message:"EncodingError U+709F"});
expect(() => {ms932Encoder.encode("\u70A0")}).toThrowError({name:"TypeError",message:"EncodingError U+70A0"});
expect(() => {ms932Encoder.encode("\u70A1")}).toThrowError({name:"TypeError",message:"EncodingError U+70A1"});
expect(() => {ms932Encoder.encode("\u70A2")}).toThrowError({name:"TypeError",message:"EncodingError U+70A2"});
expect(() => {ms932Encoder.encode("\u70A3")}).toThrowError({name:"TypeError",message:"EncodingError U+70A3"});
expect(() => {ms932Encoder.encode("\u70A4")}).toThrowError({name:"TypeError",message:"EncodingError U+70A4"});
expect(() => {ms932Encoder.encode("\u70A5")}).toThrowError({name:"TypeError",message:"EncodingError U+70A5"});
expect(() => {ms932Encoder.encode("\u70A6")}).toThrowError({name:"TypeError",message:"EncodingError U+70A6"});
expect(() => {ms932Encoder.encode("\u70A7")}).toThrowError({name:"TypeError",message:"EncodingError U+70A7"});
expect(() => {ms932Encoder.encode("\u70A8")}).toThrowError({name:"TypeError",message:"EncodingError U+70A8"});
expect(() => {ms932Encoder.encode("\u70A9")}).toThrowError({name:"TypeError",message:"EncodingError U+70A9"});
expect(() => {ms932Encoder.encode("\u70AA")}).toThrowError({name:"TypeError",message:"EncodingError U+70AA"});
expect([...ms932Encoder.encode("炫炬炭炮炯")].join(",")).toBe("251,82,224,120,146,89,224,123,224,118"); // U+70AB
expect(() => {ms932Encoder.encode("\u70B0")}).toThrowError({name:"TypeError",message:"EncodingError U+70B0"});
expect(() => {ms932Encoder.encode("\u70B1")}).toThrowError({name:"TypeError",message:"EncodingError U+70B1"});
expect(() => {ms932Encoder.encode("\u70B2")}).toThrowError({name:"TypeError",message:"EncodingError U+70B2"});
expect([...ms932Encoder.encode("炳")].join(",")).toBe("224,122"); // U+70B3
expect(() => {ms932Encoder.encode("\u70B4")}).toThrowError({name:"TypeError",message:"EncodingError U+70B4"});
expect(() => {ms932Encoder.encode("\u70B5")}).toThrowError({name:"TypeError",message:"EncodingError U+70B5"});
expect(() => {ms932Encoder.encode("\u70B6")}).toThrowError({name:"TypeError",message:"EncodingError U+70B6"});
expect(() => {ms932Encoder.encode("\u70B7")}).toThrowError({name:"TypeError",message:"EncodingError U+70B7"});
expect([...ms932Encoder.encode("炸点為炻")].join(",")).toBe("224,121,147,95,136,215,250,98"); // U+70B8
expect(() => {ms932Encoder.encode("\u70BC")}).toThrowError({name:"TypeError",message:"EncodingError U+70BC"});
expect(() => {ms932Encoder.encode("\u70BD")}).toThrowError({name:"TypeError",message:"EncodingError U+70BD"});
expect(() => {ms932Encoder.encode("\u70BE")}).toThrowError({name:"TypeError",message:"EncodingError U+70BE"});
expect(() => {ms932Encoder.encode("\u70BF")}).toThrowError({name:"TypeError",message:"EncodingError U+70BF"});
expect(() => {ms932Encoder.encode("\u70C0")}).toThrowError({name:"TypeError",message:"EncodingError U+70C0"});
expect(() => {ms932Encoder.encode("\u70C1")}).toThrowError({name:"TypeError",message:"EncodingError U+70C1"});
expect(() => {ms932Encoder.encode("\u70C2")}).toThrowError({name:"TypeError",message:"EncodingError U+70C2"});
expect(() => {ms932Encoder.encode("\u70C3")}).toThrowError({name:"TypeError",message:"EncodingError U+70C3"});
expect(() => {ms932Encoder.encode("\u70C4")}).toThrowError({name:"TypeError",message:"EncodingError U+70C4"});
expect(() => {ms932Encoder.encode("\u70C5")}).toThrowError({name:"TypeError",message:"EncodingError U+70C5"});
expect(() => {ms932Encoder.encode("\u70C6")}).toThrowError({name:"TypeError",message:"EncodingError U+70C6"});
expect(() => {ms932Encoder.encode("\u70C7")}).toThrowError({name:"TypeError",message:"EncodingError U+70C7"});
expect([...ms932Encoder.encode("烈")].join(",")).toBe("151,243"); // U+70C8
expect(() => {ms932Encoder.encode("\u70C9")}).toThrowError({name:"TypeError",message:"EncodingError U+70C9"});
expect(() => {ms932Encoder.encode("\u70CA")}).toThrowError({name:"TypeError",message:"EncodingError U+70CA"});
expect([...ms932Encoder.encode("烋")].join(",")).toBe("224,125"); // U+70CB
expect(() => {ms932Encoder.encode("\u70CC")}).toThrowError({name:"TypeError",message:"EncodingError U+70CC"});
expect(() => {ms932Encoder.encode("\u70CD")}).toThrowError({name:"TypeError",message:"EncodingError U+70CD"});
expect(() => {ms932Encoder.encode("\u70CE")}).toThrowError({name:"TypeError",message:"EncodingError U+70CE"});
expect([...ms932Encoder.encode("烏")].join(",")).toBe("137,71"); // U+70CF
expect(() => {ms932Encoder.encode("\u70D0")}).toThrowError({name:"TypeError",message:"EncodingError U+70D0"});
expect(() => {ms932Encoder.encode("\u70D1")}).toThrowError({name:"TypeError",message:"EncodingError U+70D1"});
expect(() => {ms932Encoder.encode("\u70D2")}).toThrowError({name:"TypeError",message:"EncodingError U+70D2"});
expect(() => {ms932Encoder.encode("\u70D3")}).toThrowError({name:"TypeError",message:"EncodingError U+70D3"});
expect(() => {ms932Encoder.encode("\u70D4")}).toThrowError({name:"TypeError",message:"EncodingError U+70D4"});
expect(() => {ms932Encoder.encode("\u70D5")}).toThrowError({name:"TypeError",message:"EncodingError U+70D5"});
expect(() => {ms932Encoder.encode("\u70D6")}).toThrowError({name:"TypeError",message:"EncodingError U+70D6"});
expect(() => {ms932Encoder.encode("\u70D7")}).toThrowError({name:"TypeError",message:"EncodingError U+70D7"});
expect(() => {ms932Encoder.encode("\u70D8")}).toThrowError({name:"TypeError",message:"EncodingError U+70D8"});
expect([...ms932Encoder.encode("烙")].join(",")).toBe("224,128"); // U+70D9
expect(() => {ms932Encoder.encode("\u70DA")}).toThrowError({name:"TypeError",message:"EncodingError U+70DA"});
expect(() => {ms932Encoder.encode("\u70DB")}).toThrowError({name:"TypeError",message:"EncodingError U+70DB"});
expect(() => {ms932Encoder.encode("\u70DC")}).toThrowError({name:"TypeError",message:"EncodingError U+70DC"});
expect([...ms932Encoder.encode("烝")].join(",")).toBe("224,126"); // U+70DD
expect(() => {ms932Encoder.encode("\u70DE")}).toThrowError({name:"TypeError",message:"EncodingError U+70DE"});
expect([...ms932Encoder.encode("烟")].join(",")).toBe("224,124"); // U+70DF
expect(() => {ms932Encoder.encode("\u70E0")}).toThrowError({name:"TypeError",message:"EncodingError U+70E0"});
expect(() => {ms932Encoder.encode("\u70E1")}).toThrowError({name:"TypeError",message:"EncodingError U+70E1"});
expect(() => {ms932Encoder.encode("\u70E2")}).toThrowError({name:"TypeError",message:"EncodingError U+70E2"});
expect(() => {ms932Encoder.encode("\u70E3")}).toThrowError({name:"TypeError",message:"EncodingError U+70E3"});
expect(() => {ms932Encoder.encode("\u70E4")}).toThrowError({name:"TypeError",message:"EncodingError U+70E4"});
expect(() => {ms932Encoder.encode("\u70E5")}).toThrowError({name:"TypeError",message:"EncodingError U+70E5"});
expect(() => {ms932Encoder.encode("\u70E6")}).toThrowError({name:"TypeError",message:"EncodingError U+70E6"});
expect(() => {ms932Encoder.encode("\u70E7")}).toThrowError({name:"TypeError",message:"EncodingError U+70E7"});
expect(() => {ms932Encoder.encode("\u70E8")}).toThrowError({name:"TypeError",message:"EncodingError U+70E8"});
expect(() => {ms932Encoder.encode("\u70E9")}).toThrowError({name:"TypeError",message:"EncodingError U+70E9"});
expect(() => {ms932Encoder.encode("\u70EA")}).toThrowError({name:"TypeError",message:"EncodingError U+70EA"});
expect(() => {ms932Encoder.encode("\u70EB")}).toThrowError({name:"TypeError",message:"EncodingError U+70EB"});
expect(() => {ms932Encoder.encode("\u70EC")}).toThrowError({name:"TypeError",message:"EncodingError U+70EC"});
expect(() => {ms932Encoder.encode("\u70ED")}).toThrowError({name:"TypeError",message:"EncodingError U+70ED"});
expect(() => {ms932Encoder.encode("\u70EE")}).toThrowError({name:"TypeError",message:"EncodingError U+70EE"});
expect(() => {ms932Encoder.encode("\u70EF")}).toThrowError({name:"TypeError",message:"EncodingError U+70EF"});
expect(() => {ms932Encoder.encode("\u70F0")}).toThrowError({name:"TypeError",message:"EncodingError U+70F0"});
expect([...ms932Encoder.encode("烱")].join(",")).toBe("224,119"); // U+70F1
expect(() => {ms932Encoder.encode("\u70F2")}).toThrowError({name:"TypeError",message:"EncodingError U+70F2"});
expect(() => {ms932Encoder.encode("\u70F3")}).toThrowError({name:"TypeError",message:"EncodingError U+70F3"});
expect(() => {ms932Encoder.encode("\u70F4")}).toThrowError({name:"TypeError",message:"EncodingError U+70F4"});
expect(() => {ms932Encoder.encode("\u70F5")}).toThrowError({name:"TypeError",message:"EncodingError U+70F5"});
expect(() => {ms932Encoder.encode("\u70F6")}).toThrowError({name:"TypeError",message:"EncodingError U+70F6"});
expect(() => {ms932Encoder.encode("\u70F7")}).toThrowError({name:"TypeError",message:"EncodingError U+70F7"});
expect(() => {ms932Encoder.encode("\u70F8")}).toThrowError({name:"TypeError",message:"EncodingError U+70F8"});
expect([...ms932Encoder.encode("烹")].join(",")).toBe("150,66"); // U+70F9
expect(() => {ms932Encoder.encode("\u70FA")}).toThrowError({name:"TypeError",message:"EncodingError U+70FA"});
expect(() => {ms932Encoder.encode("\u70FB")}).toThrowError({name:"TypeError",message:"EncodingError U+70FB"});
expect(() => {ms932Encoder.encode("\u70FC")}).toThrowError({name:"TypeError",message:"EncodingError U+70FC"});
expect([...ms932Encoder.encode("烽")].join(",")).toBe("224,130"); // U+70FD
expect(() => {ms932Encoder.encode("\u70FE")}).toThrowError({name:"TypeError",message:"EncodingError U+70FE"});
expect(() => {ms932Encoder.encode("\u70FF")}).toThrowError({name:"TypeError",message:"EncodingError U+70FF"});
expect(() => {ms932Encoder.encode("\u7100")}).toThrowError({name:"TypeError",message:"EncodingError U+7100"});
expect(() => {ms932Encoder.encode("\u7101")}).toThrowError({name:"TypeError",message:"EncodingError U+7101"});
expect(() => {ms932Encoder.encode("\u7102")}).toThrowError({name:"TypeError",message:"EncodingError U+7102"});
expect(() => {ms932Encoder.encode("\u7103")}).toThrowError({name:"TypeError",message:"EncodingError U+7103"});
expect([...ms932Encoder.encode("焄")].join(",")).toBe("251,84"); // U+7104
expect(() => {ms932Encoder.encode("\u7105")}).toThrowError({name:"TypeError",message:"EncodingError U+7105"});
expect(() => {ms932Encoder.encode("\u7106")}).toThrowError({name:"TypeError",message:"EncodingError U+7106"});
expect(() => {ms932Encoder.encode("\u7107")}).toThrowError({name:"TypeError",message:"EncodingError U+7107"});
expect(() => {ms932Encoder.encode("\u7108")}).toThrowError({name:"TypeError",message:"EncodingError U+7108"});
expect([...ms932Encoder.encode("焉")].join(",")).toBe("224,129"); // U+7109
expect(() => {ms932Encoder.encode("\u710A")}).toThrowError({name:"TypeError",message:"EncodingError U+710A"});
expect(() => {ms932Encoder.encode("\u710B")}).toThrowError({name:"TypeError",message:"EncodingError U+710B"});
expect(() => {ms932Encoder.encode("\u710C")}).toThrowError({name:"TypeError",message:"EncodingError U+710C"});
expect(() => {ms932Encoder.encode("\u710D")}).toThrowError({name:"TypeError",message:"EncodingError U+710D"});
expect(() => {ms932Encoder.encode("\u710E")}).toThrowError({name:"TypeError",message:"EncodingError U+710E"});
expect([...ms932Encoder.encode("焏")].join(",")).toBe("251,83"); // U+710F
expect(() => {ms932Encoder.encode("\u7110")}).toThrowError({name:"TypeError",message:"EncodingError U+7110"});
expect(() => {ms932Encoder.encode("\u7111")}).toThrowError({name:"TypeError",message:"EncodingError U+7111"});
expect(() => {ms932Encoder.encode("\u7112")}).toThrowError({name:"TypeError",message:"EncodingError U+7112"});
expect(() => {ms932Encoder.encode("\u7113")}).toThrowError({name:"TypeError",message:"EncodingError U+7113"});
expect([...ms932Encoder.encode("焔")].join(",")).toBe("137,139"); // U+7114
expect(() => {ms932Encoder.encode("\u7115")}).toThrowError({name:"TypeError",message:"EncodingError U+7115"});
expect(() => {ms932Encoder.encode("\u7116")}).toThrowError({name:"TypeError",message:"EncodingError U+7116"});
expect(() => {ms932Encoder.encode("\u7117")}).toThrowError({name:"TypeError",message:"EncodingError U+7117"});
expect(() => {ms932Encoder.encode("\u7118")}).toThrowError({name:"TypeError",message:"EncodingError U+7118"});
expect([...ms932Encoder.encode("焙焚")].join(",")).toBe("224,132,149,176"); // U+7119
expect(() => {ms932Encoder.encode("\u711B")}).toThrowError({name:"TypeError",message:"EncodingError U+711B"});
expect([...ms932Encoder.encode("焜")].join(",")).toBe("224,131"); // U+711C
expect(() => {ms932Encoder.encode("\u711D")}).toThrowError({name:"TypeError",message:"EncodingError U+711D"});
expect(() => {ms932Encoder.encode("\u711E")}).toThrowError({name:"TypeError",message:"EncodingError U+711E"});
expect(() => {ms932Encoder.encode("\u711F")}).toThrowError({name:"TypeError",message:"EncodingError U+711F"});
expect(() => {ms932Encoder.encode("\u7120")}).toThrowError({name:"TypeError",message:"EncodingError U+7120"});
expect([...ms932Encoder.encode("無")].join(",")).toBe("150,179"); // U+7121
expect(() => {ms932Encoder.encode("\u7122")}).toThrowError({name:"TypeError",message:"EncodingError U+7122"});
expect(() => {ms932Encoder.encode("\u7123")}).toThrowError({name:"TypeError",message:"EncodingError U+7123"});
expect(() => {ms932Encoder.encode("\u7124")}).toThrowError({name:"TypeError",message:"EncodingError U+7124"});
expect(() => {ms932Encoder.encode("\u7125")}).toThrowError({name:"TypeError",message:"EncodingError U+7125"});
expect([...ms932Encoder.encode("焦")].join(",")).toBe("143,197"); // U+7126
expect(() => {ms932Encoder.encode("\u7127")}).toThrowError({name:"TypeError",message:"EncodingError U+7127"});
expect(() => {ms932Encoder.encode("\u7128")}).toThrowError({name:"TypeError",message:"EncodingError U+7128"});
expect(() => {ms932Encoder.encode("\u7129")}).toThrowError({name:"TypeError",message:"EncodingError U+7129"});
expect(() => {ms932Encoder.encode("\u712A")}).toThrowError({name:"TypeError",message:"EncodingError U+712A"});
expect(() => {ms932Encoder.encode("\u712B")}).toThrowError({name:"TypeError",message:"EncodingError U+712B"});
expect(() => {ms932Encoder.encode("\u712C")}).toThrowError({name:"TypeError",message:"EncodingError U+712C"});
expect(() => {ms932Encoder.encode("\u712D")}).toThrowError({name:"TypeError",message:"EncodingError U+712D"});
expect(() => {ms932Encoder.encode("\u712E")}).toThrowError({name:"TypeError",message:"EncodingError U+712E"});
expect(() => {ms932Encoder.encode("\u712F")}).toThrowError({name:"TypeError",message:"EncodingError U+712F"});
expect(() => {ms932Encoder.encode("\u7130")}).toThrowError({name:"TypeError",message:"EncodingError U+7130"});
expect(() => {ms932Encoder.encode("\u7131")}).toThrowError({name:"TypeError",message:"EncodingError U+7131"});
expect(() => {ms932Encoder.encode("\u7132")}).toThrowError({name:"TypeError",message:"EncodingError U+7132"});
expect(() => {ms932Encoder.encode("\u7133")}).toThrowError({name:"TypeError",message:"EncodingError U+7133"});
expect(() => {ms932Encoder.encode("\u7134")}).toThrowError({name:"TypeError",message:"EncodingError U+7134"});
expect(() => {ms932Encoder.encode("\u7135")}).toThrowError({name:"TypeError",message:"EncodingError U+7135"});
expect([...ms932Encoder.encode("然")].join(",")).toBe("145,82"); // U+7136
expect(() => {ms932Encoder.encode("\u7137")}).toThrowError({name:"TypeError",message:"EncodingError U+7137"});
expect(() => {ms932Encoder.encode("\u7138")}).toThrowError({name:"TypeError",message:"EncodingError U+7138"});
expect(() => {ms932Encoder.encode("\u7139")}).toThrowError({name:"TypeError",message:"EncodingError U+7139"});
expect(() => {ms932Encoder.encode("\u713A")}).toThrowError({name:"TypeError",message:"EncodingError U+713A"});
expect(() => {ms932Encoder.encode("\u713B")}).toThrowError({name:"TypeError",message:"EncodingError U+713B"});
expect([...ms932Encoder.encode("焼")].join(",")).toBe("143,196"); // U+713C
expect(() => {ms932Encoder.encode("\u713D")}).toThrowError({name:"TypeError",message:"EncodingError U+713D"});
expect(() => {ms932Encoder.encode("\u713E")}).toThrowError({name:"TypeError",message:"EncodingError U+713E"});
expect(() => {ms932Encoder.encode("\u713F")}).toThrowError({name:"TypeError",message:"EncodingError U+713F"});
expect(() => {ms932Encoder.encode("\u7140")}).toThrowError({name:"TypeError",message:"EncodingError U+7140"});
expect(() => {ms932Encoder.encode("\u7141")}).toThrowError({name:"TypeError",message:"EncodingError U+7141"});
expect(() => {ms932Encoder.encode("\u7142")}).toThrowError({name:"TypeError",message:"EncodingError U+7142"});
expect(() => {ms932Encoder.encode("\u7143")}).toThrowError({name:"TypeError",message:"EncodingError U+7143"});
expect(() => {ms932Encoder.encode("\u7144")}).toThrowError({name:"TypeError",message:"EncodingError U+7144"});
expect(() => {ms932Encoder.encode("\u7145")}).toThrowError({name:"TypeError",message:"EncodingError U+7145"});
expect([...ms932Encoder.encode("煆煇")].join(",")).toBe("251,86,251,87"); // U+7146
expect(() => {ms932Encoder.encode("\u7148")}).toThrowError({name:"TypeError",message:"EncodingError U+7148"});
expect([...ms932Encoder.encode("煉")].join(",")).toBe("151,249"); // U+7149
expect(() => {ms932Encoder.encode("\u714A")}).toThrowError({name:"TypeError",message:"EncodingError U+714A"});
expect(() => {ms932Encoder.encode("\u714B")}).toThrowError({name:"TypeError",message:"EncodingError U+714B"});
expect([...ms932Encoder.encode("煌")].join(",")).toBe("224,138"); // U+714C
expect(() => {ms932Encoder.encode("\u714D")}).toThrowError({name:"TypeError",message:"EncodingError U+714D"});
expect([...ms932Encoder.encode("煎")].join(",")).toBe("144,247"); // U+714E
expect(() => {ms932Encoder.encode("\u714F")}).toThrowError({name:"TypeError",message:"EncodingError U+714F"});
expect(() => {ms932Encoder.encode("\u7150")}).toThrowError({name:"TypeError",message:"EncodingError U+7150"});
expect(() => {ms932Encoder.encode("\u7151")}).toThrowError({name:"TypeError",message:"EncodingError U+7151"});
expect(() => {ms932Encoder.encode("\u7152")}).toThrowError({name:"TypeError",message:"EncodingError U+7152"});
expect(() => {ms932Encoder.encode("\u7153")}).toThrowError({name:"TypeError",message:"EncodingError U+7153"});
expect(() => {ms932Encoder.encode("\u7154")}).toThrowError({name:"TypeError",message:"EncodingError U+7154"});
expect([...ms932Encoder.encode("煕煖")].join(",")).toBe("224,134,224,139"); // U+7155
expect(() => {ms932Encoder.encode("\u7157")}).toThrowError({name:"TypeError",message:"EncodingError U+7157"});
expect(() => {ms932Encoder.encode("\u7158")}).toThrowError({name:"TypeError",message:"EncodingError U+7158"});
expect([...ms932Encoder.encode("煙")].join(",")).toBe("137,140"); // U+7159
expect(() => {ms932Encoder.encode("\u715A")}).toThrowError({name:"TypeError",message:"EncodingError U+715A"});
expect(() => {ms932Encoder.encode("\u715B")}).toThrowError({name:"TypeError",message:"EncodingError U+715B"});
expect([...ms932Encoder.encode("煜")].join(",")).toBe("251,85"); // U+715C
expect(() => {ms932Encoder.encode("\u715D")}).toThrowError({name:"TypeError",message:"EncodingError U+715D"});
expect(() => {ms932Encoder.encode("\u715E")}).toThrowError({name:"TypeError",message:"EncodingError U+715E"});
expect(() => {ms932Encoder.encode("\u715F")}).toThrowError({name:"TypeError",message:"EncodingError U+715F"});
expect(() => {ms932Encoder.encode("\u7160")}).toThrowError({name:"TypeError",message:"EncodingError U+7160"});
expect(() => {ms932Encoder.encode("\u7161")}).toThrowError({name:"TypeError",message:"EncodingError U+7161"});
expect([...ms932Encoder.encode("煢")].join(",")).toBe("224,137"); // U+7162
expect(() => {ms932Encoder.encode("\u7163")}).toThrowError({name:"TypeError",message:"EncodingError U+7163"});
expect([...ms932Encoder.encode("煤煥煦照")].join(",")).toBe("148,129,224,133,224,136,143,198"); // U+7164
expect(() => {ms932Encoder.encode("\u7168")}).toThrowError({name:"TypeError",message:"EncodingError U+7168"});
expect([...ms932Encoder.encode("煩")].join(",")).toBe("148,207"); // U+7169
expect(() => {ms932Encoder.encode("\u716A")}).toThrowError({name:"TypeError",message:"EncodingError U+716A"});
expect(() => {ms932Encoder.encode("\u716B")}).toThrowError({name:"TypeError",message:"EncodingError U+716B"});
expect([...ms932Encoder.encode("煬")].join(",")).toBe("224,140"); // U+716C
expect(() => {ms932Encoder.encode("\u716D")}).toThrowError({name:"TypeError",message:"EncodingError U+716D"});
expect([...ms932Encoder.encode("煮")].join(",")).toBe("142,207"); // U+716E
expect(() => {ms932Encoder.encode("\u716F")}).toThrowError({name:"TypeError",message:"EncodingError U+716F"});
expect(() => {ms932Encoder.encode("\u7170")}).toThrowError({name:"TypeError",message:"EncodingError U+7170"});
expect(() => {ms932Encoder.encode("\u7171")}).toThrowError({name:"TypeError",message:"EncodingError U+7171"});
expect(() => {ms932Encoder.encode("\u7172")}).toThrowError({name:"TypeError",message:"EncodingError U+7172"});
expect(() => {ms932Encoder.encode("\u7173")}).toThrowError({name:"TypeError",message:"EncodingError U+7173"});
expect(() => {ms932Encoder.encode("\u7174")}).toThrowError({name:"TypeError",message:"EncodingError U+7174"});
expect(() => {ms932Encoder.encode("\u7175")}).toThrowError({name:"TypeError",message:"EncodingError U+7175"});
expect(() => {ms932Encoder.encode("\u7176")}).toThrowError({name:"TypeError",message:"EncodingError U+7176"});
expect(() => {ms932Encoder.encode("\u7177")}).toThrowError({name:"TypeError",message:"EncodingError U+7177"});
expect(() => {ms932Encoder.encode("\u7178")}).toThrowError({name:"TypeError",message:"EncodingError U+7178"});
expect(() => {ms932Encoder.encode("\u7179")}).toThrowError({name:"TypeError",message:"EncodingError U+7179"});
expect(() => {ms932Encoder.encode("\u717A")}).toThrowError({name:"TypeError",message:"EncodingError U+717A"});
expect(() => {ms932Encoder.encode("\u717B")}).toThrowError({name:"TypeError",message:"EncodingError U+717B"});
expect(() => {ms932Encoder.encode("\u717C")}).toThrowError({name:"TypeError",message:"EncodingError U+717C"});
expect([...ms932Encoder.encode("煽")].join(",")).toBe("144,248"); // U+717D
expect(() => {ms932Encoder.encode("\u717E")}).toThrowError({name:"TypeError",message:"EncodingError U+717E"});
expect(() => {ms932Encoder.encode("\u717F")}).toThrowError({name:"TypeError",message:"EncodingError U+717F"});
expect(() => {ms932Encoder.encode("\u7180")}).toThrowError({name:"TypeError",message:"EncodingError U+7180"});
expect(() => {ms932Encoder.encode("\u7181")}).toThrowError({name:"TypeError",message:"EncodingError U+7181"});
expect(() => {ms932Encoder.encode("\u7182")}).toThrowError({name:"TypeError",message:"EncodingError U+7182"});
expect(() => {ms932Encoder.encode("\u7183")}).toThrowError({name:"TypeError",message:"EncodingError U+7183"});
expect([...ms932Encoder.encode("熄")].join(",")).toBe("224,143"); // U+7184
expect(() => {ms932Encoder.encode("\u7185")}).toThrowError({name:"TypeError",message:"EncodingError U+7185"});
expect(() => {ms932Encoder.encode("\u7186")}).toThrowError({name:"TypeError",message:"EncodingError U+7186"});
expect(() => {ms932Encoder.encode("\u7187")}).toThrowError({name:"TypeError",message:"EncodingError U+7187"});
expect([...ms932Encoder.encode("熈")].join(",")).toBe("224,135"); // U+7188
expect(() => {ms932Encoder.encode("\u7189")}).toThrowError({name:"TypeError",message:"EncodingError U+7189"});
expect([...ms932Encoder.encode("熊")].join(",")).toBe("140,70"); // U+718A
expect(() => {ms932Encoder.encode("\u718B")}).toThrowError({name:"TypeError",message:"EncodingError U+718B"});
expect(() => {ms932Encoder.encode("\u718C")}).toThrowError({name:"TypeError",message:"EncodingError U+718C"});
expect(() => {ms932Encoder.encode("\u718D")}).toThrowError({name:"TypeError",message:"EncodingError U+718D"});
expect(() => {ms932Encoder.encode("\u718E")}).toThrowError({name:"TypeError",message:"EncodingError U+718E"});
expect([...ms932Encoder.encode("熏")].join(",")).toBe("224,141"); // U+718F
expect(() => {ms932Encoder.encode("\u7190")}).toThrowError({name:"TypeError",message:"EncodingError U+7190"});
expect(() => {ms932Encoder.encode("\u7191")}).toThrowError({name:"TypeError",message:"EncodingError U+7191"});
expect(() => {ms932Encoder.encode("\u7192")}).toThrowError({name:"TypeError",message:"EncodingError U+7192"});
expect(() => {ms932Encoder.encode("\u7193")}).toThrowError({name:"TypeError",message:"EncodingError U+7193"});
expect([...ms932Encoder.encode("熔熕")].join(",")).toBe("151,111,224,144"); // U+7194
expect(() => {ms932Encoder.encode("\u7196")}).toThrowError({name:"TypeError",message:"EncodingError U+7196"});
expect(() => {ms932Encoder.encode("\u7197")}).toThrowError({name:"TypeError",message:"EncodingError U+7197"});
expect(() => {ms932Encoder.encode("\u7198")}).toThrowError({name:"TypeError",message:"EncodingError U+7198"});
expect([...ms932Encoder.encode("熙")].join(",")).toBe("234,164"); // U+7199
expect(() => {ms932Encoder.encode("\u719A")}).toThrowError({name:"TypeError",message:"EncodingError U+719A"});
expect(() => {ms932Encoder.encode("\u719B")}).toThrowError({name:"TypeError",message:"EncodingError U+719B"});
expect(() => {ms932Encoder.encode("\u719C")}).toThrowError({name:"TypeError",message:"EncodingError U+719C"});
expect(() => {ms932Encoder.encode("\u719D")}).toThrowError({name:"TypeError",message:"EncodingError U+719D"});
expect(() => {ms932Encoder.encode("\u719E")}).toThrowError({name:"TypeError",message:"EncodingError U+719E"});
expect([...ms932Encoder.encode("熟")].join(",")).toBe("143,110"); // U+719F
expect(() => {ms932Encoder.encode("\u71A0")}).toThrowError({name:"TypeError",message:"EncodingError U+71A0"});
expect(() => {ms932Encoder.encode("\u71A1")}).toThrowError({name:"TypeError",message:"EncodingError U+71A1"});
expect(() => {ms932Encoder.encode("\u71A2")}).toThrowError({name:"TypeError",message:"EncodingError U+71A2"});
expect(() => {ms932Encoder.encode("\u71A3")}).toThrowError({name:"TypeError",message:"EncodingError U+71A3"});
expect(() => {ms932Encoder.encode("\u71A4")}).toThrowError({name:"TypeError",message:"EncodingError U+71A4"});
expect(() => {ms932Encoder.encode("\u71A5")}).toThrowError({name:"TypeError",message:"EncodingError U+71A5"});
expect(() => {ms932Encoder.encode("\u71A6")}).toThrowError({name:"TypeError",message:"EncodingError U+71A6"});
expect(() => {ms932Encoder.encode("\u71A7")}).toThrowError({name:"TypeError",message:"EncodingError U+71A7"});
expect([...ms932Encoder.encode("熨")].join(",")).toBe("224,145"); // U+71A8
expect(() => {ms932Encoder.encode("\u71A9")}).toThrowError({name:"TypeError",message:"EncodingError U+71A9"});
expect(() => {ms932Encoder.encode("\u71AA")}).toThrowError({name:"TypeError",message:"EncodingError U+71AA"});
expect(() => {ms932Encoder.encode("\u71AB")}).toThrowError({name:"TypeError",message:"EncodingError U+71AB"});
expect([...ms932Encoder.encode("熬")].join(",")).toBe("224,146"); // U+71AC
expect(() => {ms932Encoder.encode("\u71AD")}).toThrowError({name:"TypeError",message:"EncodingError U+71AD"});
expect(() => {ms932Encoder.encode("\u71AE")}).toThrowError({name:"TypeError",message:"EncodingError U+71AE"});
expect(() => {ms932Encoder.encode("\u71AF")}).toThrowError({name:"TypeError",message:"EncodingError U+71AF"});
expect(() => {ms932Encoder.encode("\u71B0")}).toThrowError({name:"TypeError",message:"EncodingError U+71B0"});
expect([...ms932Encoder.encode("熱")].join(",")).toBe("148,77"); // U+71B1
expect(() => {ms932Encoder.encode("\u71B2")}).toThrowError({name:"TypeError",message:"EncodingError U+71B2"});
expect(() => {ms932Encoder.encode("\u71B3")}).toThrowError({name:"TypeError",message:"EncodingError U+71B3"});
expect(() => {ms932Encoder.encode("\u71B4")}).toThrowError({name:"TypeError",message:"EncodingError U+71B4"});
expect(() => {ms932Encoder.encode("\u71B5")}).toThrowError({name:"TypeError",message:"EncodingError U+71B5"});
expect(() => {ms932Encoder.encode("\u71B6")}).toThrowError({name:"TypeError",message:"EncodingError U+71B6"});
expect(() => {ms932Encoder.encode("\u71B7")}).toThrowError({name:"TypeError",message:"EncodingError U+71B7"});
expect(() => {ms932Encoder.encode("\u71B8")}).toThrowError({name:"TypeError",message:"EncodingError U+71B8"});
expect([...ms932Encoder.encode("熹")].join(",")).toBe("224,148"); // U+71B9
expect(() => {ms932Encoder.encode("\u71BA")}).toThrowError({name:"TypeError",message:"EncodingError U+71BA"});
expect(() => {ms932Encoder.encode("\u71BB")}).toThrowError({name:"TypeError",message:"EncodingError U+71BB"});
expect(() => {ms932Encoder.encode("\u71BC")}).toThrowError({name:"TypeError",message:"EncodingError U+71BC"});
expect(() => {ms932Encoder.encode("\u71BD")}).toThrowError({name:"TypeError",message:"EncodingError U+71BD"});
expect([...ms932Encoder.encode("熾")].join(",")).toBe("224,149"); // U+71BE
expect(() => {ms932Encoder.encode("\u71BF")}).toThrowError({name:"TypeError",message:"EncodingError U+71BF"});
expect(() => {ms932Encoder.encode("\u71C0")}).toThrowError({name:"TypeError",message:"EncodingError U+71C0"});
expect([...ms932Encoder.encode("燁")].join(",")).toBe("251,89"); // U+71C1
expect(() => {ms932Encoder.encode("\u71C2")}).toThrowError({name:"TypeError",message:"EncodingError U+71C2"});
expect([...ms932Encoder.encode("燃")].join(",")).toBe("148,82"); // U+71C3
expect(() => {ms932Encoder.encode("\u71C4")}).toThrowError({name:"TypeError",message:"EncodingError U+71C4"});
expect(() => {ms932Encoder.encode("\u71C5")}).toThrowError({name:"TypeError",message:"EncodingError U+71C5"});
expect(() => {ms932Encoder.encode("\u71C6")}).toThrowError({name:"TypeError",message:"EncodingError U+71C6"});
expect(() => {ms932Encoder.encode("\u71C7")}).toThrowError({name:"TypeError",message:"EncodingError U+71C7"});
expect([...ms932Encoder.encode("燈燉")].join(",")).toBe("147,149,224,151"); // U+71C8
expect(() => {ms932Encoder.encode("\u71CA")}).toThrowError({name:"TypeError",message:"EncodingError U+71CA"});
expect(() => {ms932Encoder.encode("\u71CB")}).toThrowError({name:"TypeError",message:"EncodingError U+71CB"});
expect(() => {ms932Encoder.encode("\u71CC")}).toThrowError({name:"TypeError",message:"EncodingError U+71CC"});
expect(() => {ms932Encoder.encode("\u71CD")}).toThrowError({name:"TypeError",message:"EncodingError U+71CD"});
expect([...ms932Encoder.encode("燎")].join(",")).toBe("224,153"); // U+71CE
expect(() => {ms932Encoder.encode("\u71CF")}).toThrowError({name:"TypeError",message:"EncodingError U+71CF"});
expect([...ms932Encoder.encode("燐")].join(",")).toBe("151,211"); // U+71D0
expect(() => {ms932Encoder.encode("\u71D1")}).toThrowError({name:"TypeError",message:"EncodingError U+71D1"});
expect([...ms932Encoder.encode("燒")].join(",")).toBe("224,150"); // U+71D2
expect(() => {ms932Encoder.encode("\u71D3")}).toThrowError({name:"TypeError",message:"EncodingError U+71D3"});
expect([...ms932Encoder.encode("燔燕")].join(",")).toBe("224,152,137,141"); // U+71D4
expect(() => {ms932Encoder.encode("\u71D6")}).toThrowError({name:"TypeError",message:"EncodingError U+71D6"});
expect([...ms932Encoder.encode("燗")].join(",")).toBe("224,147"); // U+71D7
expect(() => {ms932Encoder.encode("\u71D8")}).toThrowError({name:"TypeError",message:"EncodingError U+71D8"});
expect(() => {ms932Encoder.encode("\u71D9")}).toThrowError({name:"TypeError",message:"EncodingError U+71D9"});
expect(() => {ms932Encoder.encode("\u71DA")}).toThrowError({name:"TypeError",message:"EncodingError U+71DA"});
expect(() => {ms932Encoder.encode("\u71DB")}).toThrowError({name:"TypeError",message:"EncodingError U+71DB"});
expect(() => {ms932Encoder.encode("\u71DC")}).toThrowError({name:"TypeError",message:"EncodingError U+71DC"});
expect(() => {ms932Encoder.encode("\u71DD")}).toThrowError({name:"TypeError",message:"EncodingError U+71DD"});
expect(() => {ms932Encoder.encode("\u71DE")}).toThrowError({name:"TypeError",message:"EncodingError U+71DE"});
expect([...ms932Encoder.encode("營燠")].join(",")).toBe("154,122,224,154"); // U+71DF
expect(() => {ms932Encoder.encode("\u71E1")}).toThrowError({name:"TypeError",message:"EncodingError U+71E1"});
expect(() => {ms932Encoder.encode("\u71E2")}).toThrowError({name:"TypeError",message:"EncodingError U+71E2"});
expect(() => {ms932Encoder.encode("\u71E3")}).toThrowError({name:"TypeError",message:"EncodingError U+71E3"});
expect(() => {ms932Encoder.encode("\u71E4")}).toThrowError({name:"TypeError",message:"EncodingError U+71E4"});
expect([...ms932Encoder.encode("燥燦燧")].join(",")).toBe("145,135,142,87,224,156"); // U+71E5
expect(() => {ms932Encoder.encode("\u71E8")}).toThrowError({name:"TypeError",message:"EncodingError U+71E8"});
expect(() => {ms932Encoder.encode("\u71E9")}).toThrowError({name:"TypeError",message:"EncodingError U+71E9"});
expect(() => {ms932Encoder.encode("\u71EA")}).toThrowError({name:"TypeError",message:"EncodingError U+71EA"});
expect(() => {ms932Encoder.encode("\u71EB")}).toThrowError({name:"TypeError",message:"EncodingError U+71EB"});
expect([...ms932Encoder.encode("燬燭燮")].join(",")).toBe("224,155,144,67,153,215"); // U+71EC
expect(() => {ms932Encoder.encode("\u71EF")}).toThrowError({name:"TypeError",message:"EncodingError U+71EF"});
expect(() => {ms932Encoder.encode("\u71F0")}).toThrowError({name:"TypeError",message:"EncodingError U+71F0"});
expect(() => {ms932Encoder.encode("\u71F1")}).toThrowError({name:"TypeError",message:"EncodingError U+71F1"});
expect(() => {ms932Encoder.encode("\u71F2")}).toThrowError({name:"TypeError",message:"EncodingError U+71F2"});
expect(() => {ms932Encoder.encode("\u71F3")}).toThrowError({name:"TypeError",message:"EncodingError U+71F3"});
expect(() => {ms932Encoder.encode("\u71F4")}).toThrowError({name:"TypeError",message:"EncodingError U+71F4"});
expect([...ms932Encoder.encode("燵")].join(",")).toBe("224,157"); // U+71F5
expect(() => {ms932Encoder.encode("\u71F6")}).toThrowError({name:"TypeError",message:"EncodingError U+71F6"});
expect(() => {ms932Encoder.encode("\u71F7")}).toThrowError({name:"TypeError",message:"EncodingError U+71F7"});
expect(() => {ms932Encoder.encode("\u71F8")}).toThrowError({name:"TypeError",message:"EncodingError U+71F8"});
expect([...ms932Encoder.encode("燹")].join(",")).toBe("224,159"); // U+71F9
expect(() => {ms932Encoder.encode("\u71FA")}).toThrowError({name:"TypeError",message:"EncodingError U+71FA"});
expect([...ms932Encoder.encode("燻燼")].join(",")).toBe("224,142,224,158"); // U+71FB
expect(() => {ms932Encoder.encode("\u71FD")}).toThrowError({name:"TypeError",message:"EncodingError U+71FD"});
expect([...ms932Encoder.encode("燾燿")].join(",")).toBe("251,90,224,160"); // U+71FE
expect(() => {ms932Encoder.encode("\u7200")}).toThrowError({name:"TypeError",message:"EncodingError U+7200"});
expect(() => {ms932Encoder.encode("\u7201")}).toThrowError({name:"TypeError",message:"EncodingError U+7201"});
expect(() => {ms932Encoder.encode("\u7202")}).toThrowError({name:"TypeError",message:"EncodingError U+7202"});
expect(() => {ms932Encoder.encode("\u7203")}).toThrowError({name:"TypeError",message:"EncodingError U+7203"});
expect(() => {ms932Encoder.encode("\u7204")}).toThrowError({name:"TypeError",message:"EncodingError U+7204"});
expect(() => {ms932Encoder.encode("\u7205")}).toThrowError({name:"TypeError",message:"EncodingError U+7205"});
expect([...ms932Encoder.encode("爆")].join(",")).toBe("148,154"); // U+7206
expect(() => {ms932Encoder.encode("\u7207")}).toThrowError({name:"TypeError",message:"EncodingError U+7207"});
expect(() => {ms932Encoder.encode("\u7208")}).toThrowError({name:"TypeError",message:"EncodingError U+7208"});
expect(() => {ms932Encoder.encode("\u7209")}).toThrowError({name:"TypeError",message:"EncodingError U+7209"});
expect(() => {ms932Encoder.encode("\u720A")}).toThrowError({name:"TypeError",message:"EncodingError U+720A"});
expect(() => {ms932Encoder.encode("\u720B")}).toThrowError({name:"TypeError",message:"EncodingError U+720B"});
expect(() => {ms932Encoder.encode("\u720C")}).toThrowError({name:"TypeError",message:"EncodingError U+720C"});
expect([...ms932Encoder.encode("爍")].join(",")).toBe("224,161"); // U+720D
expect(() => {ms932Encoder.encode("\u720E")}).toThrowError({name:"TypeError",message:"EncodingError U+720E"});
expect(() => {ms932Encoder.encode("\u720F")}).toThrowError({name:"TypeError",message:"EncodingError U+720F"});
expect([...ms932Encoder.encode("爐")].join(",")).toBe("224,162"); // U+7210
expect(() => {ms932Encoder.encode("\u7211")}).toThrowError({name:"TypeError",message:"EncodingError U+7211"});
expect(() => {ms932Encoder.encode("\u7212")}).toThrowError({name:"TypeError",message:"EncodingError U+7212"});
expect(() => {ms932Encoder.encode("\u7213")}).toThrowError({name:"TypeError",message:"EncodingError U+7213"});
expect(() => {ms932Encoder.encode("\u7214")}).toThrowError({name:"TypeError",message:"EncodingError U+7214"});
expect(() => {ms932Encoder.encode("\u7215")}).toThrowError({name:"TypeError",message:"EncodingError U+7215"});
expect(() => {ms932Encoder.encode("\u7216")}).toThrowError({name:"TypeError",message:"EncodingError U+7216"});
expect(() => {ms932Encoder.encode("\u7217")}).toThrowError({name:"TypeError",message:"EncodingError U+7217"});
expect(() => {ms932Encoder.encode("\u7218")}).toThrowError({name:"TypeError",message:"EncodingError U+7218"});
expect(() => {ms932Encoder.encode("\u7219")}).toThrowError({name:"TypeError",message:"EncodingError U+7219"});
expect(() => {ms932Encoder.encode("\u721A")}).toThrowError({name:"TypeError",message:"EncodingError U+721A"});
expect([...ms932Encoder.encode("爛")].join(",")).toBe("224,163"); // U+721B
expect(() => {ms932Encoder.encode("\u721C")}).toThrowError({name:"TypeError",message:"EncodingError U+721C"});
expect(() => {ms932Encoder.encode("\u721D")}).toThrowError({name:"TypeError",message:"EncodingError U+721D"});
expect(() => {ms932Encoder.encode("\u721E")}).toThrowError({name:"TypeError",message:"EncodingError U+721E"});
expect(() => {ms932Encoder.encode("\u721F")}).toThrowError({name:"TypeError",message:"EncodingError U+721F"});
expect(() => {ms932Encoder.encode("\u7220")}).toThrowError({name:"TypeError",message:"EncodingError U+7220"});
expect(() => {ms932Encoder.encode("\u7221")}).toThrowError({name:"TypeError",message:"EncodingError U+7221"});
expect(() => {ms932Encoder.encode("\u7222")}).toThrowError({name:"TypeError",message:"EncodingError U+7222"});
expect(() => {ms932Encoder.encode("\u7223")}).toThrowError({name:"TypeError",message:"EncodingError U+7223"});
expect(() => {ms932Encoder.encode("\u7224")}).toThrowError({name:"TypeError",message:"EncodingError U+7224"});
expect(() => {ms932Encoder.encode("\u7225")}).toThrowError({name:"TypeError",message:"EncodingError U+7225"});
expect(() => {ms932Encoder.encode("\u7226")}).toThrowError({name:"TypeError",message:"EncodingError U+7226"});
expect(() => {ms932Encoder.encode("\u7227")}).toThrowError({name:"TypeError",message:"EncodingError U+7227"});
expect([...ms932Encoder.encode("爨")].join(",")).toBe("224,164"); // U+7228
expect(() => {ms932Encoder.encode("\u7229")}).toThrowError({name:"TypeError",message:"EncodingError U+7229"});
expect([...ms932Encoder.encode("爪")].join(",")).toBe("146,220"); // U+722A
expect(() => {ms932Encoder.encode("\u722B")}).toThrowError({name:"TypeError",message:"EncodingError U+722B"});
expect([...ms932Encoder.encode("爬爭")].join(",")).toBe("224,166,224,165"); // U+722C
expect(() => {ms932Encoder.encode("\u722E")}).toThrowError({name:"TypeError",message:"EncodingError U+722E"});
expect(() => {ms932Encoder.encode("\u722F")}).toThrowError({name:"TypeError",message:"EncodingError U+722F"});
expect([...ms932Encoder.encode("爰")].join(",")).toBe("224,167"); // U+7230
expect(() => {ms932Encoder.encode("\u7231")}).toThrowError({name:"TypeError",message:"EncodingError U+7231"});
expect([...ms932Encoder.encode("爲")].join(",")).toBe("224,168"); // U+7232
expect(() => {ms932Encoder.encode("\u7233")}).toThrowError({name:"TypeError",message:"EncodingError U+7233"});
expect(() => {ms932Encoder.encode("\u7234")}).toThrowError({name:"TypeError",message:"EncodingError U+7234"});
expect([...ms932Encoder.encode("爵父")].join(",")).toBe("142,221,149,131"); // U+7235
expect(() => {ms932Encoder.encode("\u7237")}).toThrowError({name:"TypeError",message:"EncodingError U+7237"});
expect(() => {ms932Encoder.encode("\u7238")}).toThrowError({name:"TypeError",message:"EncodingError U+7238"});
expect(() => {ms932Encoder.encode("\u7239")}).toThrowError({name:"TypeError",message:"EncodingError U+7239"});
expect([...ms932Encoder.encode("爺爻爼爽爾爿牀")].join(",")).toBe("150,234,224,169,224,170,145,117,142,162,224,171,224,172"); // U+723A
expect(() => {ms932Encoder.encode("\u7241")}).toThrowError({name:"TypeError",message:"EncodingError U+7241"});
expect(() => {ms932Encoder.encode("\u7242")}).toThrowError({name:"TypeError",message:"EncodingError U+7242"});
expect(() => {ms932Encoder.encode("\u7243")}).toThrowError({name:"TypeError",message:"EncodingError U+7243"});
expect(() => {ms932Encoder.encode("\u7244")}).toThrowError({name:"TypeError",message:"EncodingError U+7244"});
expect(() => {ms932Encoder.encode("\u7245")}).toThrowError({name:"TypeError",message:"EncodingError U+7245"});
expect([...ms932Encoder.encode("牆片版")].join(",")).toBe("224,173,149,208,148,197"); // U+7246
expect(() => {ms932Encoder.encode("\u7249")}).toThrowError({name:"TypeError",message:"EncodingError U+7249"});
expect(() => {ms932Encoder.encode("\u724A")}).toThrowError({name:"TypeError",message:"EncodingError U+724A"});
expect([...ms932Encoder.encode("牋牌")].join(",")).toBe("224,174,148,118"); // U+724B
expect(() => {ms932Encoder.encode("\u724D")}).toThrowError({name:"TypeError",message:"EncodingError U+724D"});
expect(() => {ms932Encoder.encode("\u724E")}).toThrowError({name:"TypeError",message:"EncodingError U+724E"});
expect(() => {ms932Encoder.encode("\u724F")}).toThrowError({name:"TypeError",message:"EncodingError U+724F"});
expect(() => {ms932Encoder.encode("\u7250")}).toThrowError({name:"TypeError",message:"EncodingError U+7250"});
expect(() => {ms932Encoder.encode("\u7251")}).toThrowError({name:"TypeError",message:"EncodingError U+7251"});
expect([...ms932Encoder.encode("牒")].join(",")).toBe("146,171"); // U+7252
expect(() => {ms932Encoder.encode("\u7253")}).toThrowError({name:"TypeError",message:"EncodingError U+7253"});
expect(() => {ms932Encoder.encode("\u7254")}).toThrowError({name:"TypeError",message:"EncodingError U+7254"});
expect(() => {ms932Encoder.encode("\u7255")}).toThrowError({name:"TypeError",message:"EncodingError U+7255"});
expect(() => {ms932Encoder.encode("\u7256")}).toThrowError({name:"TypeError",message:"EncodingError U+7256"});
expect(() => {ms932Encoder.encode("\u7257")}).toThrowError({name:"TypeError",message:"EncodingError U+7257"});
expect([...ms932Encoder.encode("牘牙")].join(",")).toBe("224,175,137,229"); // U+7258
expect(() => {ms932Encoder.encode("\u725A")}).toThrowError({name:"TypeError",message:"EncodingError U+725A"});
expect([...ms932Encoder.encode("牛")].join(",")).toBe("139,141"); // U+725B
expect(() => {ms932Encoder.encode("\u725C")}).toThrowError({name:"TypeError",message:"EncodingError U+725C"});
expect([...ms932Encoder.encode("牝")].join(",")).toBe("150,196"); // U+725D
expect(() => {ms932Encoder.encode("\u725E")}).toThrowError({name:"TypeError",message:"EncodingError U+725E"});
expect([...ms932Encoder.encode("牟")].join(",")).toBe("150,180"); // U+725F
expect(() => {ms932Encoder.encode("\u7260")}).toThrowError({name:"TypeError",message:"EncodingError U+7260"});
expect([...ms932Encoder.encode("牡牢")].join(",")).toBe("137,178,152,83"); // U+7261
expect(() => {ms932Encoder.encode("\u7263")}).toThrowError({name:"TypeError",message:"EncodingError U+7263"});
expect(() => {ms932Encoder.encode("\u7264")}).toThrowError({name:"TypeError",message:"EncodingError U+7264"});
expect(() => {ms932Encoder.encode("\u7265")}).toThrowError({name:"TypeError",message:"EncodingError U+7265"});
expect(() => {ms932Encoder.encode("\u7266")}).toThrowError({name:"TypeError",message:"EncodingError U+7266"});
expect([...ms932Encoder.encode("牧")].join(",")).toBe("150,113"); // U+7267
expect(() => {ms932Encoder.encode("\u7268")}).toThrowError({name:"TypeError",message:"EncodingError U+7268"});
expect([...ms932Encoder.encode("物")].join(",")).toBe("149,168"); // U+7269
expect(() => {ms932Encoder.encode("\u726A")}).toThrowError({name:"TypeError",message:"EncodingError U+726A"});
expect(() => {ms932Encoder.encode("\u726B")}).toThrowError({name:"TypeError",message:"EncodingError U+726B"});
expect(() => {ms932Encoder.encode("\u726C")}).toThrowError({name:"TypeError",message:"EncodingError U+726C"});
expect(() => {ms932Encoder.encode("\u726D")}).toThrowError({name:"TypeError",message:"EncodingError U+726D"});
expect(() => {ms932Encoder.encode("\u726E")}).toThrowError({name:"TypeError",message:"EncodingError U+726E"});
expect(() => {ms932Encoder.encode("\u726F")}).toThrowError({name:"TypeError",message:"EncodingError U+726F"});
expect(() => {ms932Encoder.encode("\u7270")}).toThrowError({name:"TypeError",message:"EncodingError U+7270"});
expect(() => {ms932Encoder.encode("\u7271")}).toThrowError({name:"TypeError",message:"EncodingError U+7271"});
expect([...ms932Encoder.encode("牲")].join(",")).toBe("144,181"); // U+7272
expect(() => {ms932Encoder.encode("\u7273")}).toThrowError({name:"TypeError",message:"EncodingError U+7273"});
expect([...ms932Encoder.encode("牴")].join(",")).toBe("224,176"); // U+7274
expect(() => {ms932Encoder.encode("\u7275")}).toThrowError({name:"TypeError",message:"EncodingError U+7275"});
expect(() => {ms932Encoder.encode("\u7276")}).toThrowError({name:"TypeError",message:"EncodingError U+7276"});
expect(() => {ms932Encoder.encode("\u7277")}).toThrowError({name:"TypeError",message:"EncodingError U+7277"});
expect(() => {ms932Encoder.encode("\u7278")}).toThrowError({name:"TypeError",message:"EncodingError U+7278"});
expect([...ms932Encoder.encode("特")].join(",")).toBe("147,193"); // U+7279
expect(() => {ms932Encoder.encode("\u727A")}).toThrowError({name:"TypeError",message:"EncodingError U+727A"});
expect(() => {ms932Encoder.encode("\u727B")}).toThrowError({name:"TypeError",message:"EncodingError U+727B"});
expect(() => {ms932Encoder.encode("\u727C")}).toThrowError({name:"TypeError",message:"EncodingError U+727C"});
expect([...ms932Encoder.encode("牽牾")].join(",")).toBe("140,161,224,177"); // U+727D
expect(() => {ms932Encoder.encode("\u727F")}).toThrowError({name:"TypeError",message:"EncodingError U+727F"});
expect([...ms932Encoder.encode("犀犁犂")].join(",")).toBe("141,210,224,179,224,178"); // U+7280
expect(() => {ms932Encoder.encode("\u7283")}).toThrowError({name:"TypeError",message:"EncodingError U+7283"});
expect(() => {ms932Encoder.encode("\u7284")}).toThrowError({name:"TypeError",message:"EncodingError U+7284"});
expect(() => {ms932Encoder.encode("\u7285")}).toThrowError({name:"TypeError",message:"EncodingError U+7285"});
expect(() => {ms932Encoder.encode("\u7286")}).toThrowError({name:"TypeError",message:"EncodingError U+7286"});
expect([...ms932Encoder.encode("犇")].join(",")).toBe("224,180"); // U+7287
expect(() => {ms932Encoder.encode("\u7288")}).toThrowError({name:"TypeError",message:"EncodingError U+7288"});
expect(() => {ms932Encoder.encode("\u7289")}).toThrowError({name:"TypeError",message:"EncodingError U+7289"});
expect(() => {ms932Encoder.encode("\u728A")}).toThrowError({name:"TypeError",message:"EncodingError U+728A"});
expect(() => {ms932Encoder.encode("\u728B")}).toThrowError({name:"TypeError",message:"EncodingError U+728B"});
expect(() => {ms932Encoder.encode("\u728C")}).toThrowError({name:"TypeError",message:"EncodingError U+728C"});
expect(() => {ms932Encoder.encode("\u728D")}).toThrowError({name:"TypeError",message:"EncodingError U+728D"});
expect(() => {ms932Encoder.encode("\u728E")}).toThrowError({name:"TypeError",message:"EncodingError U+728E"});
expect(() => {ms932Encoder.encode("\u728F")}).toThrowError({name:"TypeError",message:"EncodingError U+728F"});
expect(() => {ms932Encoder.encode("\u7290")}).toThrowError({name:"TypeError",message:"EncodingError U+7290"});
expect(() => {ms932Encoder.encode("\u7291")}).toThrowError({name:"TypeError",message:"EncodingError U+7291"});
expect([...ms932Encoder.encode("犒")].join(",")).toBe("224,181"); // U+7292
expect(() => {ms932Encoder.encode("\u7293")}).toThrowError({name:"TypeError",message:"EncodingError U+7293"});
expect(() => {ms932Encoder.encode("\u7294")}).toThrowError({name:"TypeError",message:"EncodingError U+7294"});
expect(() => {ms932Encoder.encode("\u7295")}).toThrowError({name:"TypeError",message:"EncodingError U+7295"});
expect([...ms932Encoder.encode("犖")].join(",")).toBe("224,182"); // U+7296
expect(() => {ms932Encoder.encode("\u7297")}).toThrowError({name:"TypeError",message:"EncodingError U+7297"});
expect(() => {ms932Encoder.encode("\u7298")}).toThrowError({name:"TypeError",message:"EncodingError U+7298"});
expect(() => {ms932Encoder.encode("\u7299")}).toThrowError({name:"TypeError",message:"EncodingError U+7299"});
expect(() => {ms932Encoder.encode("\u729A")}).toThrowError({name:"TypeError",message:"EncodingError U+729A"});
expect(() => {ms932Encoder.encode("\u729B")}).toThrowError({name:"TypeError",message:"EncodingError U+729B"});
expect(() => {ms932Encoder.encode("\u729C")}).toThrowError({name:"TypeError",message:"EncodingError U+729C"});
expect(() => {ms932Encoder.encode("\u729D")}).toThrowError({name:"TypeError",message:"EncodingError U+729D"});
expect(() => {ms932Encoder.encode("\u729E")}).toThrowError({name:"TypeError",message:"EncodingError U+729E"});
expect(() => {ms932Encoder.encode("\u729F")}).toThrowError({name:"TypeError",message:"EncodingError U+729F"});
expect([...ms932Encoder.encode("犠")].join(",")).toBe("139,93"); // U+72A0
expect(() => {ms932Encoder.encode("\u72A1")}).toThrowError({name:"TypeError",message:"EncodingError U+72A1"});
expect([...ms932Encoder.encode("犢")].join(",")).toBe("224,183"); // U+72A2
expect(() => {ms932Encoder.encode("\u72A3")}).toThrowError({name:"TypeError",message:"EncodingError U+72A3"});
expect(() => {ms932Encoder.encode("\u72A4")}).toThrowError({name:"TypeError",message:"EncodingError U+72A4"});
expect(() => {ms932Encoder.encode("\u72A5")}).toThrowError({name:"TypeError",message:"EncodingError U+72A5"});
expect(() => {ms932Encoder.encode("\u72A6")}).toThrowError({name:"TypeError",message:"EncodingError U+72A6"});
expect([...ms932Encoder.encode("犧")].join(",")).toBe("224,184"); // U+72A7
expect(() => {ms932Encoder.encode("\u72A8")}).toThrowError({name:"TypeError",message:"EncodingError U+72A8"});
expect(() => {ms932Encoder.encode("\u72A9")}).toThrowError({name:"TypeError",message:"EncodingError U+72A9"});
expect(() => {ms932Encoder.encode("\u72AA")}).toThrowError({name:"TypeError",message:"EncodingError U+72AA"});
expect(() => {ms932Encoder.encode("\u72AB")}).toThrowError({name:"TypeError",message:"EncodingError U+72AB"});
expect([...ms932Encoder.encode("犬")].join(",")).toBe("140,162"); // U+72AC
expect(() => {ms932Encoder.encode("\u72AD")}).toThrowError({name:"TypeError",message:"EncodingError U+72AD"});
expect(() => {ms932Encoder.encode("\u72AE")}).toThrowError({name:"TypeError",message:"EncodingError U+72AE"});
expect([...ms932Encoder.encode("犯")].join(",")).toBe("148,198"); // U+72AF
expect(() => {ms932Encoder.encode("\u72B0")}).toThrowError({name:"TypeError",message:"EncodingError U+72B0"});
expect([...ms932Encoder.encode("犱犲")].join(",")).toBe("251,91,224,186"); // U+72B1
expect(() => {ms932Encoder.encode("\u72B3")}).toThrowError({name:"TypeError",message:"EncodingError U+72B3"});
expect(() => {ms932Encoder.encode("\u72B4")}).toThrowError({name:"TypeError",message:"EncodingError U+72B4"});
expect(() => {ms932Encoder.encode("\u72B5")}).toThrowError({name:"TypeError",message:"EncodingError U+72B5"});
expect([...ms932Encoder.encode("状")].join(",")).toBe("143,243"); // U+72B6
expect(() => {ms932Encoder.encode("\u72B7")}).toThrowError({name:"TypeError",message:"EncodingError U+72B7"});
expect(() => {ms932Encoder.encode("\u72B8")}).toThrowError({name:"TypeError",message:"EncodingError U+72B8"});
expect([...ms932Encoder.encode("犹")].join(",")).toBe("224,185"); // U+72B9
expect(() => {ms932Encoder.encode("\u72BA")}).toThrowError({name:"TypeError",message:"EncodingError U+72BA"});
expect(() => {ms932Encoder.encode("\u72BB")}).toThrowError({name:"TypeError",message:"EncodingError U+72BB"});
expect(() => {ms932Encoder.encode("\u72BC")}).toThrowError({name:"TypeError",message:"EncodingError U+72BC"});
expect(() => {ms932Encoder.encode("\u72BD")}).toThrowError({name:"TypeError",message:"EncodingError U+72BD"});
expect([...ms932Encoder.encode("犾")].join(",")).toBe("251,92"); // U+72BE
expect(() => {ms932Encoder.encode("\u72BF")}).toThrowError({name:"TypeError",message:"EncodingError U+72BF"});
expect(() => {ms932Encoder.encode("\u72C0")}).toThrowError({name:"TypeError",message:"EncodingError U+72C0"});
expect(() => {ms932Encoder.encode("\u72C1")}).toThrowError({name:"TypeError",message:"EncodingError U+72C1"});
expect([...ms932Encoder.encode("狂狃狄")].join(",")).toBe("139,182,224,187,224,189"); // U+72C2
expect(() => {ms932Encoder.encode("\u72C5")}).toThrowError({name:"TypeError",message:"EncodingError U+72C5"});
expect([...ms932Encoder.encode("狆")].join(",")).toBe("224,188"); // U+72C6
expect(() => {ms932Encoder.encode("\u72C7")}).toThrowError({name:"TypeError",message:"EncodingError U+72C7"});
expect(() => {ms932Encoder.encode("\u72C8")}).toThrowError({name:"TypeError",message:"EncodingError U+72C8"});
expect(() => {ms932Encoder.encode("\u72C9")}).toThrowError({name:"TypeError",message:"EncodingError U+72C9"});
expect(() => {ms932Encoder.encode("\u72CA")}).toThrowError({name:"TypeError",message:"EncodingError U+72CA"});
expect(() => {ms932Encoder.encode("\u72CB")}).toThrowError({name:"TypeError",message:"EncodingError U+72CB"});
expect(() => {ms932Encoder.encode("\u72CC")}).toThrowError({name:"TypeError",message:"EncodingError U+72CC"});
expect(() => {ms932Encoder.encode("\u72CD")}).toThrowError({name:"TypeError",message:"EncodingError U+72CD"});
expect([...ms932Encoder.encode("狎")].join(",")).toBe("224,190"); // U+72CE
expect(() => {ms932Encoder.encode("\u72CF")}).toThrowError({name:"TypeError",message:"EncodingError U+72CF"});
expect([...ms932Encoder.encode("狐")].join(",")).toBe("140,207"); // U+72D0
expect(() => {ms932Encoder.encode("\u72D1")}).toThrowError({name:"TypeError",message:"EncodingError U+72D1"});
expect([...ms932Encoder.encode("狒")].join(",")).toBe("224,191"); // U+72D2
expect(() => {ms932Encoder.encode("\u72D3")}).toThrowError({name:"TypeError",message:"EncodingError U+72D3"});
expect(() => {ms932Encoder.encode("\u72D4")}).toThrowError({name:"TypeError",message:"EncodingError U+72D4"});
expect(() => {ms932Encoder.encode("\u72D5")}).toThrowError({name:"TypeError",message:"EncodingError U+72D5"});
expect(() => {ms932Encoder.encode("\u72D6")}).toThrowError({name:"TypeError",message:"EncodingError U+72D6"});
expect([...ms932Encoder.encode("狗")].join(",")).toBe("139,231"); // U+72D7
expect(() => {ms932Encoder.encode("\u72D8")}).toThrowError({name:"TypeError",message:"EncodingError U+72D8"});
expect([...ms932Encoder.encode("狙")].join(",")).toBe("145,95"); // U+72D9
expect(() => {ms932Encoder.encode("\u72DA")}).toThrowError({name:"TypeError",message:"EncodingError U+72DA"});
expect([...ms932Encoder.encode("狛")].join(",")).toBe("141,157"); // U+72DB
expect(() => {ms932Encoder.encode("\u72DC")}).toThrowError({name:"TypeError",message:"EncodingError U+72DC"});
expect(() => {ms932Encoder.encode("\u72DD")}).toThrowError({name:"TypeError",message:"EncodingError U+72DD"});
expect(() => {ms932Encoder.encode("\u72DE")}).toThrowError({name:"TypeError",message:"EncodingError U+72DE"});
expect(() => {ms932Encoder.encode("\u72DF")}).toThrowError({name:"TypeError",message:"EncodingError U+72DF"});
expect([...ms932Encoder.encode("狠狡狢")].join(",")).toBe("224,193,224,194,224,192"); // U+72E0
expect(() => {ms932Encoder.encode("\u72E3")}).toThrowError({name:"TypeError",message:"EncodingError U+72E3"});
expect(() => {ms932Encoder.encode("\u72E4")}).toThrowError({name:"TypeError",message:"EncodingError U+72E4"});
expect(() => {ms932Encoder.encode("\u72E5")}).toThrowError({name:"TypeError",message:"EncodingError U+72E5"});
expect(() => {ms932Encoder.encode("\u72E6")}).toThrowError({name:"TypeError",message:"EncodingError U+72E6"});
expect(() => {ms932Encoder.encode("\u72E7")}).toThrowError({name:"TypeError",message:"EncodingError U+72E7"});
expect(() => {ms932Encoder.encode("\u72E8")}).toThrowError({name:"TypeError",message:"EncodingError U+72E8"});
expect([...ms932Encoder.encode("狩")].join(",")).toBe("142,235"); // U+72E9
expect(() => {ms932Encoder.encode("\u72EA")}).toThrowError({name:"TypeError",message:"EncodingError U+72EA"});
expect(() => {ms932Encoder.encode("\u72EB")}).toThrowError({name:"TypeError",message:"EncodingError U+72EB"});
expect([...ms932Encoder.encode("独狭")].join(",")).toBe("147,198,139,183"); // U+72EC
expect(() => {ms932Encoder.encode("\u72EE")}).toThrowError({name:"TypeError",message:"EncodingError U+72EE"});
expect(() => {ms932Encoder.encode("\u72EF")}).toThrowError({name:"TypeError",message:"EncodingError U+72EF"});
expect(() => {ms932Encoder.encode("\u72F0")}).toThrowError({name:"TypeError",message:"EncodingError U+72F0"});
expect(() => {ms932Encoder.encode("\u72F1")}).toThrowError({name:"TypeError",message:"EncodingError U+72F1"});
expect(() => {ms932Encoder.encode("\u72F2")}).toThrowError({name:"TypeError",message:"EncodingError U+72F2"});
expect(() => {ms932Encoder.encode("\u72F3")}).toThrowError({name:"TypeError",message:"EncodingError U+72F3"});
expect(() => {ms932Encoder.encode("\u72F4")}).toThrowError({name:"TypeError",message:"EncodingError U+72F4"});
expect(() => {ms932Encoder.encode("\u72F5")}).toThrowError({name:"TypeError",message:"EncodingError U+72F5"});
expect(() => {ms932Encoder.encode("\u72F6")}).toThrowError({name:"TypeError",message:"EncodingError U+72F6"});
expect([...ms932Encoder.encode("狷狸狹")].join(",")).toBe("224,196,146,75,224,195"); // U+72F7
expect(() => {ms932Encoder.encode("\u72FA")}).toThrowError({name:"TypeError",message:"EncodingError U+72FA"});
expect(() => {ms932Encoder.encode("\u72FB")}).toThrowError({name:"TypeError",message:"EncodingError U+72FB"});
expect([...ms932Encoder.encode("狼狽")].join(",")).toBe("152,84,148,130"); // U+72FC
expect(() => {ms932Encoder.encode("\u72FE")}).toThrowError({name:"TypeError",message:"EncodingError U+72FE"});
expect(() => {ms932Encoder.encode("\u72FF")}).toThrowError({name:"TypeError",message:"EncodingError U+72FF"});
expect(() => {ms932Encoder.encode("\u7300")}).toThrowError({name:"TypeError",message:"EncodingError U+7300"});
expect(() => {ms932Encoder.encode("\u7301")}).toThrowError({name:"TypeError",message:"EncodingError U+7301"});
expect(() => {ms932Encoder.encode("\u7302")}).toThrowError({name:"TypeError",message:"EncodingError U+7302"});
expect(() => {ms932Encoder.encode("\u7303")}).toThrowError({name:"TypeError",message:"EncodingError U+7303"});
expect(() => {ms932Encoder.encode("\u7304")}).toThrowError({name:"TypeError",message:"EncodingError U+7304"});
expect(() => {ms932Encoder.encode("\u7305")}).toThrowError({name:"TypeError",message:"EncodingError U+7305"});
expect(() => {ms932Encoder.encode("\u7306")}).toThrowError({name:"TypeError",message:"EncodingError U+7306"});
expect(() => {ms932Encoder.encode("\u7307")}).toThrowError({name:"TypeError",message:"EncodingError U+7307"});
expect(() => {ms932Encoder.encode("\u7308")}).toThrowError({name:"TypeError",message:"EncodingError U+7308"});
expect(() => {ms932Encoder.encode("\u7309")}).toThrowError({name:"TypeError",message:"EncodingError U+7309"});
expect([...ms932Encoder.encode("猊")].join(",")).toBe("224,199"); // U+730A
expect(() => {ms932Encoder.encode("\u730B")}).toThrowError({name:"TypeError",message:"EncodingError U+730B"});
expect(() => {ms932Encoder.encode("\u730C")}).toThrowError({name:"TypeError",message:"EncodingError U+730C"});
expect(() => {ms932Encoder.encode("\u730D")}).toThrowError({name:"TypeError",message:"EncodingError U+730D"});
expect(() => {ms932Encoder.encode("\u730E")}).toThrowError({name:"TypeError",message:"EncodingError U+730E"});
expect(() => {ms932Encoder.encode("\u730F")}).toThrowError({name:"TypeError",message:"EncodingError U+730F"});
expect(() => {ms932Encoder.encode("\u7310")}).toThrowError({name:"TypeError",message:"EncodingError U+7310"});
expect(() => {ms932Encoder.encode("\u7311")}).toThrowError({name:"TypeError",message:"EncodingError U+7311"});
expect(() => {ms932Encoder.encode("\u7312")}).toThrowError({name:"TypeError",message:"EncodingError U+7312"});
expect(() => {ms932Encoder.encode("\u7313")}).toThrowError({name:"TypeError",message:"EncodingError U+7313"});
expect(() => {ms932Encoder.encode("\u7314")}).toThrowError({name:"TypeError",message:"EncodingError U+7314"});
expect(() => {ms932Encoder.encode("\u7315")}).toThrowError({name:"TypeError",message:"EncodingError U+7315"});
expect([...ms932Encoder.encode("猖猗")].join(",")).toBe("224,201,224,198"); // U+7316
expect(() => {ms932Encoder.encode("\u7318")}).toThrowError({name:"TypeError",message:"EncodingError U+7318"});
expect(() => {ms932Encoder.encode("\u7319")}).toThrowError({name:"TypeError",message:"EncodingError U+7319"});
expect(() => {ms932Encoder.encode("\u731A")}).toThrowError({name:"TypeError",message:"EncodingError U+731A"});
expect([...ms932Encoder.encode("猛猜猝")].join(",")).toBe("150,210,224,200,224,202"); // U+731B
expect(() => {ms932Encoder.encode("\u731E")}).toThrowError({name:"TypeError",message:"EncodingError U+731E"});
expect([...ms932Encoder.encode("猟")].join(",")).toBe("151,194"); // U+731F
expect(() => {ms932Encoder.encode("\u7320")}).toThrowError({name:"TypeError",message:"EncodingError U+7320"});
expect(() => {ms932Encoder.encode("\u7321")}).toThrowError({name:"TypeError",message:"EncodingError U+7321"});
expect(() => {ms932Encoder.encode("\u7322")}).toThrowError({name:"TypeError",message:"EncodingError U+7322"});
expect(() => {ms932Encoder.encode("\u7323")}).toThrowError({name:"TypeError",message:"EncodingError U+7323"});
expect([...ms932Encoder.encode("猤猥")].join(",")).toBe("251,93,224,206"); // U+7324
expect(() => {ms932Encoder.encode("\u7326")}).toThrowError({name:"TypeError",message:"EncodingError U+7326"});
expect(() => {ms932Encoder.encode("\u7327")}).toThrowError({name:"TypeError",message:"EncodingError U+7327"});
expect(() => {ms932Encoder.encode("\u7328")}).toThrowError({name:"TypeError",message:"EncodingError U+7328"});
expect([...ms932Encoder.encode("猩猪猫")].join(",")).toBe("224,205,146,150,148,76"); // U+7329
expect(() => {ms932Encoder.encode("\u732C")}).toThrowError({name:"TypeError",message:"EncodingError U+732C"});
expect(() => {ms932Encoder.encode("\u732D")}).toThrowError({name:"TypeError",message:"EncodingError U+732D"});
expect([...ms932Encoder.encode("献猯")].join(",")).toBe("140,163,224,204"); // U+732E
expect(() => {ms932Encoder.encode("\u7330")}).toThrowError({name:"TypeError",message:"EncodingError U+7330"});
expect(() => {ms932Encoder.encode("\u7331")}).toThrowError({name:"TypeError",message:"EncodingError U+7331"});
expect(() => {ms932Encoder.encode("\u7332")}).toThrowError({name:"TypeError",message:"EncodingError U+7332"});
expect(() => {ms932Encoder.encode("\u7333")}).toThrowError({name:"TypeError",message:"EncodingError U+7333"});
expect([...ms932Encoder.encode("猴")].join(",")).toBe("224,203"); // U+7334
expect(() => {ms932Encoder.encode("\u7335")}).toThrowError({name:"TypeError",message:"EncodingError U+7335"});
expect([...ms932Encoder.encode("猶猷")].join(",")).toBe("151,80,151,81"); // U+7336
expect(() => {ms932Encoder.encode("\u7338")}).toThrowError({name:"TypeError",message:"EncodingError U+7338"});
expect(() => {ms932Encoder.encode("\u7339")}).toThrowError({name:"TypeError",message:"EncodingError U+7339"});
expect(() => {ms932Encoder.encode("\u733A")}).toThrowError({name:"TypeError",message:"EncodingError U+733A"});
expect(() => {ms932Encoder.encode("\u733B")}).toThrowError({name:"TypeError",message:"EncodingError U+733B"});
expect(() => {ms932Encoder.encode("\u733C")}).toThrowError({name:"TypeError",message:"EncodingError U+733C"});
expect(() => {ms932Encoder.encode("\u733D")}).toThrowError({name:"TypeError",message:"EncodingError U+733D"});
expect([...ms932Encoder.encode("猾猿")].join(",")).toBe("224,207,137,142"); // U+733E
expect(() => {ms932Encoder.encode("\u7340")}).toThrowError({name:"TypeError",message:"EncodingError U+7340"});
expect(() => {ms932Encoder.encode("\u7341")}).toThrowError({name:"TypeError",message:"EncodingError U+7341"});
expect(() => {ms932Encoder.encode("\u7342")}).toThrowError({name:"TypeError",message:"EncodingError U+7342"});
expect(() => {ms932Encoder.encode("\u7343")}).toThrowError({name:"TypeError",message:"EncodingError U+7343"});
expect([...ms932Encoder.encode("獄獅")].join(",")).toBe("141,150,142,130"); // U+7344
expect(() => {ms932Encoder.encode("\u7346")}).toThrowError({name:"TypeError",message:"EncodingError U+7346"});
expect(() => {ms932Encoder.encode("\u7347")}).toThrowError({name:"TypeError",message:"EncodingError U+7347"});
expect(() => {ms932Encoder.encode("\u7348")}).toThrowError({name:"TypeError",message:"EncodingError U+7348"});
expect(() => {ms932Encoder.encode("\u7349")}).toThrowError({name:"TypeError",message:"EncodingError U+7349"});
expect(() => {ms932Encoder.encode("\u734A")}).toThrowError({name:"TypeError",message:"EncodingError U+734A"});
expect(() => {ms932Encoder.encode("\u734B")}).toThrowError({name:"TypeError",message:"EncodingError U+734B"});
expect(() => {ms932Encoder.encode("\u734C")}).toThrowError({name:"TypeError",message:"EncodingError U+734C"});
expect(() => {ms932Encoder.encode("\u734D")}).toThrowError({name:"TypeError",message:"EncodingError U+734D"});
expect([...ms932Encoder.encode("獎獏")].join(",")).toBe("224,208,224,209"); // U+734E
expect(() => {ms932Encoder.encode("\u7350")}).toThrowError({name:"TypeError",message:"EncodingError U+7350"});
expect(() => {ms932Encoder.encode("\u7351")}).toThrowError({name:"TypeError",message:"EncodingError U+7351"});
expect(() => {ms932Encoder.encode("\u7352")}).toThrowError({name:"TypeError",message:"EncodingError U+7352"});
expect(() => {ms932Encoder.encode("\u7353")}).toThrowError({name:"TypeError",message:"EncodingError U+7353"});
expect(() => {ms932Encoder.encode("\u7354")}).toThrowError({name:"TypeError",message:"EncodingError U+7354"});
expect(() => {ms932Encoder.encode("\u7355")}).toThrowError({name:"TypeError",message:"EncodingError U+7355"});
expect(() => {ms932Encoder.encode("\u7356")}).toThrowError({name:"TypeError",message:"EncodingError U+7356"});
expect([...ms932Encoder.encode("獗")].join(",")).toBe("224,211"); // U+7357
expect(() => {ms932Encoder.encode("\u7358")}).toThrowError({name:"TypeError",message:"EncodingError U+7358"});
expect(() => {ms932Encoder.encode("\u7359")}).toThrowError({name:"TypeError",message:"EncodingError U+7359"});
expect(() => {ms932Encoder.encode("\u735A")}).toThrowError({name:"TypeError",message:"EncodingError U+735A"});
expect(() => {ms932Encoder.encode("\u735B")}).toThrowError({name:"TypeError",message:"EncodingError U+735B"});
expect(() => {ms932Encoder.encode("\u735C")}).toThrowError({name:"TypeError",message:"EncodingError U+735C"});
expect(() => {ms932Encoder.encode("\u735D")}).toThrowError({name:"TypeError",message:"EncodingError U+735D"});
expect(() => {ms932Encoder.encode("\u735E")}).toThrowError({name:"TypeError",message:"EncodingError U+735E"});
expect(() => {ms932Encoder.encode("\u735F")}).toThrowError({name:"TypeError",message:"EncodingError U+735F"});
expect(() => {ms932Encoder.encode("\u7360")}).toThrowError({name:"TypeError",message:"EncodingError U+7360"});
expect(() => {ms932Encoder.encode("\u7361")}).toThrowError({name:"TypeError",message:"EncodingError U+7361"});
expect(() => {ms932Encoder.encode("\u7362")}).toThrowError({name:"TypeError",message:"EncodingError U+7362"});
expect([...ms932Encoder.encode("獣")].join(",")).toBe("143,98"); // U+7363
expect(() => {ms932Encoder.encode("\u7364")}).toThrowError({name:"TypeError",message:"EncodingError U+7364"});
expect(() => {ms932Encoder.encode("\u7365")}).toThrowError({name:"TypeError",message:"EncodingError U+7365"});
expect(() => {ms932Encoder.encode("\u7366")}).toThrowError({name:"TypeError",message:"EncodingError U+7366"});
expect(() => {ms932Encoder.encode("\u7367")}).toThrowError({name:"TypeError",message:"EncodingError U+7367"});
expect([...ms932Encoder.encode("獨")].join(",")).toBe("224,213"); // U+7368
expect(() => {ms932Encoder.encode("\u7369")}).toThrowError({name:"TypeError",message:"EncodingError U+7369"});
expect([...ms932Encoder.encode("獪")].join(",")).toBe("224,212"); // U+736A
expect(() => {ms932Encoder.encode("\u736B")}).toThrowError({name:"TypeError",message:"EncodingError U+736B"});
expect(() => {ms932Encoder.encode("\u736C")}).toThrowError({name:"TypeError",message:"EncodingError U+736C"});
expect(() => {ms932Encoder.encode("\u736D")}).toThrowError({name:"TypeError",message:"EncodingError U+736D"});
expect(() => {ms932Encoder.encode("\u736E")}).toThrowError({name:"TypeError",message:"EncodingError U+736E"});
expect(() => {ms932Encoder.encode("\u736F")}).toThrowError({name:"TypeError",message:"EncodingError U+736F"});
expect([...ms932Encoder.encode("獰")].join(",")).toBe("224,214"); // U+7370
expect(() => {ms932Encoder.encode("\u7371")}).toThrowError({name:"TypeError",message:"EncodingError U+7371"});
expect([...ms932Encoder.encode("獲")].join(",")).toBe("138,108"); // U+7372
expect(() => {ms932Encoder.encode("\u7373")}).toThrowError({name:"TypeError",message:"EncodingError U+7373"});
expect(() => {ms932Encoder.encode("\u7374")}).toThrowError({name:"TypeError",message:"EncodingError U+7374"});
expect([...ms932Encoder.encode("獵")].join(",")).toBe("224,216"); // U+7375
expect(() => {ms932Encoder.encode("\u7376")}).toThrowError({name:"TypeError",message:"EncodingError U+7376"});
expect([...ms932Encoder.encode("獷獸")].join(",")).toBe("251,95,224,215"); // U+7377
expect(() => {ms932Encoder.encode("\u7379")}).toThrowError({name:"TypeError",message:"EncodingError U+7379"});
expect([...ms932Encoder.encode("獺獻")].join(",")).toBe("224,218,224,217"); // U+737A
expect(() => {ms932Encoder.encode("\u737C")}).toThrowError({name:"TypeError",message:"EncodingError U+737C"});
expect(() => {ms932Encoder.encode("\u737D")}).toThrowError({name:"TypeError",message:"EncodingError U+737D"});
expect(() => {ms932Encoder.encode("\u737E")}).toThrowError({name:"TypeError",message:"EncodingError U+737E"});
expect(() => {ms932Encoder.encode("\u737F")}).toThrowError({name:"TypeError",message:"EncodingError U+737F"});
expect(() => {ms932Encoder.encode("\u7380")}).toThrowError({name:"TypeError",message:"EncodingError U+7380"});
expect(() => {ms932Encoder.encode("\u7381")}).toThrowError({name:"TypeError",message:"EncodingError U+7381"});
expect(() => {ms932Encoder.encode("\u7382")}).toThrowError({name:"TypeError",message:"EncodingError U+7382"});
expect(() => {ms932Encoder.encode("\u7383")}).toThrowError({name:"TypeError",message:"EncodingError U+7383"});
expect([...ms932Encoder.encode("玄")].join(",")).toBe("140,186"); // U+7384
expect(() => {ms932Encoder.encode("\u7385")}).toThrowError({name:"TypeError",message:"EncodingError U+7385"});
expect(() => {ms932Encoder.encode("\u7386")}).toThrowError({name:"TypeError",message:"EncodingError U+7386"});
expect([...ms932Encoder.encode("率")].join(",")).toBe("151,166"); // U+7387
expect(() => {ms932Encoder.encode("\u7388")}).toThrowError({name:"TypeError",message:"EncodingError U+7388"});
expect([...ms932Encoder.encode("玉")].join(",")).toBe("139,202"); // U+7389
expect(() => {ms932Encoder.encode("\u738A")}).toThrowError({name:"TypeError",message:"EncodingError U+738A"});
expect([...ms932Encoder.encode("王")].join(",")).toBe("137,164"); // U+738B
expect(() => {ms932Encoder.encode("\u738C")}).toThrowError({name:"TypeError",message:"EncodingError U+738C"});
expect(() => {ms932Encoder.encode("\u738D")}).toThrowError({name:"TypeError",message:"EncodingError U+738D"});
expect(() => {ms932Encoder.encode("\u738E")}).toThrowError({name:"TypeError",message:"EncodingError U+738E"});
expect(() => {ms932Encoder.encode("\u738F")}).toThrowError({name:"TypeError",message:"EncodingError U+738F"});
expect(() => {ms932Encoder.encode("\u7390")}).toThrowError({name:"TypeError",message:"EncodingError U+7390"});
expect(() => {ms932Encoder.encode("\u7391")}).toThrowError({name:"TypeError",message:"EncodingError U+7391"});
expect(() => {ms932Encoder.encode("\u7392")}).toThrowError({name:"TypeError",message:"EncodingError U+7392"});
expect(() => {ms932Encoder.encode("\u7393")}).toThrowError({name:"TypeError",message:"EncodingError U+7393"});
expect(() => {ms932Encoder.encode("\u7394")}).toThrowError({name:"TypeError",message:"EncodingError U+7394"});
expect(() => {ms932Encoder.encode("\u7395")}).toThrowError({name:"TypeError",message:"EncodingError U+7395"});
expect([...ms932Encoder.encode("玖")].join(",")).toBe("139,232"); // U+7396
expect(() => {ms932Encoder.encode("\u7397")}).toThrowError({name:"TypeError",message:"EncodingError U+7397"});
expect(() => {ms932Encoder.encode("\u7398")}).toThrowError({name:"TypeError",message:"EncodingError U+7398"});
expect(() => {ms932Encoder.encode("\u7399")}).toThrowError({name:"TypeError",message:"EncodingError U+7399"});
expect(() => {ms932Encoder.encode("\u739A")}).toThrowError({name:"TypeError",message:"EncodingError U+739A"});
expect(() => {ms932Encoder.encode("\u739B")}).toThrowError({name:"TypeError",message:"EncodingError U+739B"});
expect(() => {ms932Encoder.encode("\u739C")}).toThrowError({name:"TypeError",message:"EncodingError U+739C"});
expect(() => {ms932Encoder.encode("\u739D")}).toThrowError({name:"TypeError",message:"EncodingError U+739D"});
expect(() => {ms932Encoder.encode("\u739E")}).toThrowError({name:"TypeError",message:"EncodingError U+739E"});
expect(() => {ms932Encoder.encode("\u739F")}).toThrowError({name:"TypeError",message:"EncodingError U+739F"});
expect(() => {ms932Encoder.encode("\u73A0")}).toThrowError({name:"TypeError",message:"EncodingError U+73A0"});
expect(() => {ms932Encoder.encode("\u73A1")}).toThrowError({name:"TypeError",message:"EncodingError U+73A1"});
expect(() => {ms932Encoder.encode("\u73A2")}).toThrowError({name:"TypeError",message:"EncodingError U+73A2"});
expect(() => {ms932Encoder.encode("\u73A3")}).toThrowError({name:"TypeError",message:"EncodingError U+73A3"});
expect(() => {ms932Encoder.encode("\u73A4")}).toThrowError({name:"TypeError",message:"EncodingError U+73A4"});
expect(() => {ms932Encoder.encode("\u73A5")}).toThrowError({name:"TypeError",message:"EncodingError U+73A5"});
expect(() => {ms932Encoder.encode("\u73A6")}).toThrowError({name:"TypeError",message:"EncodingError U+73A6"});
expect(() => {ms932Encoder.encode("\u73A7")}).toThrowError({name:"TypeError",message:"EncodingError U+73A7"});
expect(() => {ms932Encoder.encode("\u73A8")}).toThrowError({name:"TypeError",message:"EncodingError U+73A8"});
expect([...ms932Encoder.encode("玩")].join(",")).toBe("138,223"); // U+73A9
expect(() => {ms932Encoder.encode("\u73AA")}).toThrowError({name:"TypeError",message:"EncodingError U+73AA"});
expect(() => {ms932Encoder.encode("\u73AB")}).toThrowError({name:"TypeError",message:"EncodingError U+73AB"});
expect(() => {ms932Encoder.encode("\u73AC")}).toThrowError({name:"TypeError",message:"EncodingError U+73AC"});
expect(() => {ms932Encoder.encode("\u73AD")}).toThrowError({name:"TypeError",message:"EncodingError U+73AD"});
expect(() => {ms932Encoder.encode("\u73AE")}).toThrowError({name:"TypeError",message:"EncodingError U+73AE"});
expect(() => {ms932Encoder.encode("\u73AF")}).toThrowError({name:"TypeError",message:"EncodingError U+73AF"});
expect(() => {ms932Encoder.encode("\u73B0")}).toThrowError({name:"TypeError",message:"EncodingError U+73B0"});
expect(() => {ms932Encoder.encode("\u73B1")}).toThrowError({name:"TypeError",message:"EncodingError U+73B1"});
expect([...ms932Encoder.encode("玲玳")].join(",")).toBe("151,230,224,220"); // U+73B2
expect(() => {ms932Encoder.encode("\u73B4")}).toThrowError({name:"TypeError",message:"EncodingError U+73B4"});
expect(() => {ms932Encoder.encode("\u73B5")}).toThrowError({name:"TypeError",message:"EncodingError U+73B5"});
expect(() => {ms932Encoder.encode("\u73B6")}).toThrowError({name:"TypeError",message:"EncodingError U+73B6"});
expect(() => {ms932Encoder.encode("\u73B7")}).toThrowError({name:"TypeError",message:"EncodingError U+73B7"});
expect(() => {ms932Encoder.encode("\u73B8")}).toThrowError({name:"TypeError",message:"EncodingError U+73B8"});
expect(() => {ms932Encoder.encode("\u73B9")}).toThrowError({name:"TypeError",message:"EncodingError U+73B9"});
expect(() => {ms932Encoder.encode("\u73BA")}).toThrowError({name:"TypeError",message:"EncodingError U+73BA"});
expect([...ms932Encoder.encode("玻")].join(",")).toBe("224,222"); // U+73BB
expect(() => {ms932Encoder.encode("\u73BC")}).toThrowError({name:"TypeError",message:"EncodingError U+73BC"});
expect([...ms932Encoder.encode("玽")].join(",")).toBe("251,96"); // U+73BD
expect(() => {ms932Encoder.encode("\u73BE")}).toThrowError({name:"TypeError",message:"EncodingError U+73BE"});
expect(() => {ms932Encoder.encode("\u73BF")}).toThrowError({name:"TypeError",message:"EncodingError U+73BF"});
expect([...ms932Encoder.encode("珀")].join(",")).toBe("224,223"); // U+73C0
expect(() => {ms932Encoder.encode("\u73C1")}).toThrowError({name:"TypeError",message:"EncodingError U+73C1"});
expect([...ms932Encoder.encode("珂")].join(",")).toBe("137,207"); // U+73C2
expect(() => {ms932Encoder.encode("\u73C3")}).toThrowError({name:"TypeError",message:"EncodingError U+73C3"});
expect(() => {ms932Encoder.encode("\u73C4")}).toThrowError({name:"TypeError",message:"EncodingError U+73C4"});
expect(() => {ms932Encoder.encode("\u73C5")}).toThrowError({name:"TypeError",message:"EncodingError U+73C5"});
expect(() => {ms932Encoder.encode("\u73C6")}).toThrowError({name:"TypeError",message:"EncodingError U+73C6"});
expect(() => {ms932Encoder.encode("\u73C7")}).toThrowError({name:"TypeError",message:"EncodingError U+73C7"});
expect([...ms932Encoder.encode("珈珉珊")].join(",")).toBe("224,219,251,97,142,88"); // U+73C8
expect(() => {ms932Encoder.encode("\u73CB")}).toThrowError({name:"TypeError",message:"EncodingError U+73CB"});
expect(() => {ms932Encoder.encode("\u73CC")}).toThrowError({name:"TypeError",message:"EncodingError U+73CC"});
expect([...ms932Encoder.encode("珍珎")].join(",")).toBe("146,191,224,221"); // U+73CD
expect(() => {ms932Encoder.encode("\u73CF")}).toThrowError({name:"TypeError",message:"EncodingError U+73CF"});
expect(() => {ms932Encoder.encode("\u73D0")}).toThrowError({name:"TypeError",message:"EncodingError U+73D0"});
expect(() => {ms932Encoder.encode("\u73D1")}).toThrowError({name:"TypeError",message:"EncodingError U+73D1"});
expect([...ms932Encoder.encode("珒")].join(",")).toBe("251,100"); // U+73D2
expect(() => {ms932Encoder.encode("\u73D3")}).toThrowError({name:"TypeError",message:"EncodingError U+73D3"});
expect(() => {ms932Encoder.encode("\u73D4")}).toThrowError({name:"TypeError",message:"EncodingError U+73D4"});
expect(() => {ms932Encoder.encode("\u73D5")}).toThrowError({name:"TypeError",message:"EncodingError U+73D5"});
expect([...ms932Encoder.encode("珖")].join(",")).toBe("251,98"); // U+73D6
expect(() => {ms932Encoder.encode("\u73D7")}).toThrowError({name:"TypeError",message:"EncodingError U+73D7"});
expect(() => {ms932Encoder.encode("\u73D8")}).toThrowError({name:"TypeError",message:"EncodingError U+73D8"});
expect(() => {ms932Encoder.encode("\u73D9")}).toThrowError({name:"TypeError",message:"EncodingError U+73D9"});
expect(() => {ms932Encoder.encode("\u73DA")}).toThrowError({name:"TypeError",message:"EncodingError U+73DA"});
expect(() => {ms932Encoder.encode("\u73DB")}).toThrowError({name:"TypeError",message:"EncodingError U+73DB"});
expect(() => {ms932Encoder.encode("\u73DC")}).toThrowError({name:"TypeError",message:"EncodingError U+73DC"});
expect(() => {ms932Encoder.encode("\u73DD")}).toThrowError({name:"TypeError",message:"EncodingError U+73DD"});
expect([...ms932Encoder.encode("珞")].join(",")).toBe("224,226"); // U+73DE
expect(() => {ms932Encoder.encode("\u73DF")}).toThrowError({name:"TypeError",message:"EncodingError U+73DF"});
expect([...ms932Encoder.encode("珠")].join(",")).toBe("142,236"); // U+73E0
expect(() => {ms932Encoder.encode("\u73E1")}).toThrowError({name:"TypeError",message:"EncodingError U+73E1"});
expect(() => {ms932Encoder.encode("\u73E2")}).toThrowError({name:"TypeError",message:"EncodingError U+73E2"});
expect([...ms932Encoder.encode("珣")].join(",")).toBe("251,99"); // U+73E3
expect(() => {ms932Encoder.encode("\u73E4")}).toThrowError({name:"TypeError",message:"EncodingError U+73E4"});
expect([...ms932Encoder.encode("珥")].join(",")).toBe("224,224"); // U+73E5
expect(() => {ms932Encoder.encode("\u73E6")}).toThrowError({name:"TypeError",message:"EncodingError U+73E6"});
expect(() => {ms932Encoder.encode("\u73E7")}).toThrowError({name:"TypeError",message:"EncodingError U+73E7"});
expect(() => {ms932Encoder.encode("\u73E8")}).toThrowError({name:"TypeError",message:"EncodingError U+73E8"});
expect(() => {ms932Encoder.encode("\u73E9")}).toThrowError({name:"TypeError",message:"EncodingError U+73E9"});
expect([...ms932Encoder.encode("珪")].join(",")).toBe("140,93"); // U+73EA
expect(() => {ms932Encoder.encode("\u73EB")}).toThrowError({name:"TypeError",message:"EncodingError U+73EB"});
expect(() => {ms932Encoder.encode("\u73EC")}).toThrowError({name:"TypeError",message:"EncodingError U+73EC"});
expect([...ms932Encoder.encode("班珮")].join(",")).toBe("148,199,224,225"); // U+73ED
expect(() => {ms932Encoder.encode("\u73EF")}).toThrowError({name:"TypeError",message:"EncodingError U+73EF"});
expect(() => {ms932Encoder.encode("\u73F0")}).toThrowError({name:"TypeError",message:"EncodingError U+73F0"});
expect([...ms932Encoder.encode("珱")].join(",")).toBe("224,252"); // U+73F1
expect(() => {ms932Encoder.encode("\u73F2")}).toThrowError({name:"TypeError",message:"EncodingError U+73F2"});
expect(() => {ms932Encoder.encode("\u73F3")}).toThrowError({name:"TypeError",message:"EncodingError U+73F3"});
expect(() => {ms932Encoder.encode("\u73F4")}).toThrowError({name:"TypeError",message:"EncodingError U+73F4"});
expect([...ms932Encoder.encode("珵")].join(",")).toBe("251,102"); // U+73F5
expect(() => {ms932Encoder.encode("\u73F6")}).toThrowError({name:"TypeError",message:"EncodingError U+73F6"});
expect(() => {ms932Encoder.encode("\u73F7")}).toThrowError({name:"TypeError",message:"EncodingError U+73F7"});
expect([...ms932Encoder.encode("珸")].join(",")).toBe("224,231"); // U+73F8
expect(() => {ms932Encoder.encode("\u73F9")}).toThrowError({name:"TypeError",message:"EncodingError U+73F9"});
expect(() => {ms932Encoder.encode("\u73FA")}).toThrowError({name:"TypeError",message:"EncodingError U+73FA"});
expect(() => {ms932Encoder.encode("\u73FB")}).toThrowError({name:"TypeError",message:"EncodingError U+73FB"});
expect(() => {ms932Encoder.encode("\u73FC")}).toThrowError({name:"TypeError",message:"EncodingError U+73FC"});
expect(() => {ms932Encoder.encode("\u73FD")}).toThrowError({name:"TypeError",message:"EncodingError U+73FD"});
expect([...ms932Encoder.encode("現")].join(",")).toBe("140,187"); // U+73FE
expect(() => {ms932Encoder.encode("\u73FF")}).toThrowError({name:"TypeError",message:"EncodingError U+73FF"});
expect(() => {ms932Encoder.encode("\u7400")}).toThrowError({name:"TypeError",message:"EncodingError U+7400"});
expect(() => {ms932Encoder.encode("\u7401")}).toThrowError({name:"TypeError",message:"EncodingError U+7401"});
expect(() => {ms932Encoder.encode("\u7402")}).toThrowError({name:"TypeError",message:"EncodingError U+7402"});
expect([...ms932Encoder.encode("球")].join(",")).toBe("139,133"); // U+7403
expect(() => {ms932Encoder.encode("\u7404")}).toThrowError({name:"TypeError",message:"EncodingError U+7404"});
expect([...ms932Encoder.encode("琅理琇")].join(",")).toBe("224,228,151,157,251,101"); // U+7405
expect(() => {ms932Encoder.encode("\u7408")}).toThrowError({name:"TypeError",message:"EncodingError U+7408"});
expect([...ms932Encoder.encode("琉")].join(",")).toBe("151,174"); // U+7409
expect(() => {ms932Encoder.encode("\u740A")}).toThrowError({name:"TypeError",message:"EncodingError U+740A"});
expect(() => {ms932Encoder.encode("\u740B")}).toThrowError({name:"TypeError",message:"EncodingError U+740B"});
expect(() => {ms932Encoder.encode("\u740C")}).toThrowError({name:"TypeError",message:"EncodingError U+740C"});
expect(() => {ms932Encoder.encode("\u740D")}).toThrowError({name:"TypeError",message:"EncodingError U+740D"});
expect(() => {ms932Encoder.encode("\u740E")}).toThrowError({name:"TypeError",message:"EncodingError U+740E"});
expect(() => {ms932Encoder.encode("\u740F")}).toThrowError({name:"TypeError",message:"EncodingError U+740F"});
expect(() => {ms932Encoder.encode("\u7410")}).toThrowError({name:"TypeError",message:"EncodingError U+7410"});
expect(() => {ms932Encoder.encode("\u7411")}).toThrowError({name:"TypeError",message:"EncodingError U+7411"});
expect(() => {ms932Encoder.encode("\u7412")}).toThrowError({name:"TypeError",message:"EncodingError U+7412"});
expect(() => {ms932Encoder.encode("\u7413")}).toThrowError({name:"TypeError",message:"EncodingError U+7413"});
expect(() => {ms932Encoder.encode("\u7414")}).toThrowError({name:"TypeError",message:"EncodingError U+7414"});
expect(() => {ms932Encoder.encode("\u7415")}).toThrowError({name:"TypeError",message:"EncodingError U+7415"});
expect(() => {ms932Encoder.encode("\u7416")}).toThrowError({name:"TypeError",message:"EncodingError U+7416"});
expect(() => {ms932Encoder.encode("\u7417")}).toThrowError({name:"TypeError",message:"EncodingError U+7417"});
expect(() => {ms932Encoder.encode("\u7418")}).toThrowError({name:"TypeError",message:"EncodingError U+7418"});
expect(() => {ms932Encoder.encode("\u7419")}).toThrowError({name:"TypeError",message:"EncodingError U+7419"});
expect(() => {ms932Encoder.encode("\u741A")}).toThrowError({name:"TypeError",message:"EncodingError U+741A"});
expect(() => {ms932Encoder.encode("\u741B")}).toThrowError({name:"TypeError",message:"EncodingError U+741B"});
expect(() => {ms932Encoder.encode("\u741C")}).toThrowError({name:"TypeError",message:"EncodingError U+741C"});
expect(() => {ms932Encoder.encode("\u741D")}).toThrowError({name:"TypeError",message:"EncodingError U+741D"});
expect(() => {ms932Encoder.encode("\u741E")}).toThrowError({name:"TypeError",message:"EncodingError U+741E"});
expect(() => {ms932Encoder.encode("\u741F")}).toThrowError({name:"TypeError",message:"EncodingError U+741F"});
expect(() => {ms932Encoder.encode("\u7420")}).toThrowError({name:"TypeError",message:"EncodingError U+7420"});
expect(() => {ms932Encoder.encode("\u7421")}).toThrowError({name:"TypeError",message:"EncodingError U+7421"});
expect([...ms932Encoder.encode("琢")].join(",")).toBe("145,244"); // U+7422
expect(() => {ms932Encoder.encode("\u7423")}).toThrowError({name:"TypeError",message:"EncodingError U+7423"});
expect(() => {ms932Encoder.encode("\u7424")}).toThrowError({name:"TypeError",message:"EncodingError U+7424"});
expect([...ms932Encoder.encode("琥琦")].join(",")).toBe("224,230,251,103"); // U+7425
expect(() => {ms932Encoder.encode("\u7427")}).toThrowError({name:"TypeError",message:"EncodingError U+7427"});
expect(() => {ms932Encoder.encode("\u7428")}).toThrowError({name:"TypeError",message:"EncodingError U+7428"});
expect([...ms932Encoder.encode("琩琪")].join(",")).toBe("251,105,251,104"); // U+7429
expect(() => {ms932Encoder.encode("\u742B")}).toThrowError({name:"TypeError",message:"EncodingError U+742B"});
expect(() => {ms932Encoder.encode("\u742C")}).toThrowError({name:"TypeError",message:"EncodingError U+742C"});
expect(() => {ms932Encoder.encode("\u742D")}).toThrowError({name:"TypeError",message:"EncodingError U+742D"});
expect([...ms932Encoder.encode("琮")].join(",")).toBe("251,106"); // U+742E
expect(() => {ms932Encoder.encode("\u742F")}).toThrowError({name:"TypeError",message:"EncodingError U+742F"});
expect(() => {ms932Encoder.encode("\u7430")}).toThrowError({name:"TypeError",message:"EncodingError U+7430"});
expect(() => {ms932Encoder.encode("\u7431")}).toThrowError({name:"TypeError",message:"EncodingError U+7431"});
expect([...ms932Encoder.encode("琲琳琴琵琶")].join(",")).toBe("224,232,151,212,139,213,148,250,148,105"); // U+7432
expect(() => {ms932Encoder.encode("\u7437")}).toThrowError({name:"TypeError",message:"EncodingError U+7437"});
expect(() => {ms932Encoder.encode("\u7438")}).toThrowError({name:"TypeError",message:"EncodingError U+7438"});
expect(() => {ms932Encoder.encode("\u7439")}).toThrowError({name:"TypeError",message:"EncodingError U+7439"});
expect([...ms932Encoder.encode("琺")].join(",")).toBe("224,233"); // U+743A
expect(() => {ms932Encoder.encode("\u743B")}).toThrowError({name:"TypeError",message:"EncodingError U+743B"});
expect(() => {ms932Encoder.encode("\u743C")}).toThrowError({name:"TypeError",message:"EncodingError U+743C"});
expect(() => {ms932Encoder.encode("\u743D")}).toThrowError({name:"TypeError",message:"EncodingError U+743D"});
expect(() => {ms932Encoder.encode("\u743E")}).toThrowError({name:"TypeError",message:"EncodingError U+743E"});
expect([...ms932Encoder.encode("琿")].join(",")).toBe("224,235"); // U+743F
expect(() => {ms932Encoder.encode("\u7440")}).toThrowError({name:"TypeError",message:"EncodingError U+7440"});
expect([...ms932Encoder.encode("瑁")].join(",")).toBe("224,238"); // U+7441
expect(() => {ms932Encoder.encode("\u7442")}).toThrowError({name:"TypeError",message:"EncodingError U+7442"});
expect(() => {ms932Encoder.encode("\u7443")}).toThrowError({name:"TypeError",message:"EncodingError U+7443"});
expect(() => {ms932Encoder.encode("\u7444")}).toThrowError({name:"TypeError",message:"EncodingError U+7444"});
expect(() => {ms932Encoder.encode("\u7445")}).toThrowError({name:"TypeError",message:"EncodingError U+7445"});
expect(() => {ms932Encoder.encode("\u7446")}).toThrowError({name:"TypeError",message:"EncodingError U+7446"});
expect(() => {ms932Encoder.encode("\u7447")}).toThrowError({name:"TypeError",message:"EncodingError U+7447"});
expect(() => {ms932Encoder.encode("\u7448")}).toThrowError({name:"TypeError",message:"EncodingError U+7448"});
expect(() => {ms932Encoder.encode("\u7449")}).toThrowError({name:"TypeError",message:"EncodingError U+7449"});
expect(() => {ms932Encoder.encode("\u744A")}).toThrowError({name:"TypeError",message:"EncodingError U+744A"});
expect(() => {ms932Encoder.encode("\u744B")}).toThrowError({name:"TypeError",message:"EncodingError U+744B"});
expect(() => {ms932Encoder.encode("\u744C")}).toThrowError({name:"TypeError",message:"EncodingError U+744C"});
expect(() => {ms932Encoder.encode("\u744D")}).toThrowError({name:"TypeError",message:"EncodingError U+744D"});
expect(() => {ms932Encoder.encode("\u744E")}).toThrowError({name:"TypeError",message:"EncodingError U+744E"});
expect(() => {ms932Encoder.encode("\u744F")}).toThrowError({name:"TypeError",message:"EncodingError U+744F"});
expect(() => {ms932Encoder.encode("\u7450")}).toThrowError({name:"TypeError",message:"EncodingError U+7450"});
expect(() => {ms932Encoder.encode("\u7451")}).toThrowError({name:"TypeError",message:"EncodingError U+7451"});
expect(() => {ms932Encoder.encode("\u7452")}).toThrowError({name:"TypeError",message:"EncodingError U+7452"});
expect(() => {ms932Encoder.encode("\u7453")}).toThrowError({name:"TypeError",message:"EncodingError U+7453"});
expect(() => {ms932Encoder.encode("\u7454")}).toThrowError({name:"TypeError",message:"EncodingError U+7454"});
expect([...ms932Encoder.encode("瑕")].join(",")).toBe("224,234"); // U+7455
expect(() => {ms932Encoder.encode("\u7456")}).toThrowError({name:"TypeError",message:"EncodingError U+7456"});
expect(() => {ms932Encoder.encode("\u7457")}).toThrowError({name:"TypeError",message:"EncodingError U+7457"});
expect(() => {ms932Encoder.encode("\u7458")}).toThrowError({name:"TypeError",message:"EncodingError U+7458"});
expect([...ms932Encoder.encode("瑙瑚瑛瑜")].join(",")).toBe("224,237,140,232,137,108,224,239"); // U+7459
expect(() => {ms932Encoder.encode("\u745D")}).toThrowError({name:"TypeError",message:"EncodingError U+745D"});
expect([...ms932Encoder.encode("瑞瑟瑠")].join(",")).toBe("144,144,224,236,151,218"); // U+745E
expect(() => {ms932Encoder.encode("\u7461")}).toThrowError({name:"TypeError",message:"EncodingError U+7461"});
expect([...ms932Encoder.encode("瑢瑣瑤")].join(",")).toBe("251,107,224,242,234,162"); // U+7462
expect(() => {ms932Encoder.encode("\u7465")}).toThrowError({name:"TypeError",message:"EncodingError U+7465"});
expect(() => {ms932Encoder.encode("\u7466")}).toThrowError({name:"TypeError",message:"EncodingError U+7466"});
expect(() => {ms932Encoder.encode("\u7467")}).toThrowError({name:"TypeError",message:"EncodingError U+7467"});
expect(() => {ms932Encoder.encode("\u7468")}).toThrowError({name:"TypeError",message:"EncodingError U+7468"});
expect([...ms932Encoder.encode("瑩瑪")].join(",")).toBe("224,240,224,243"); // U+7469
expect(() => {ms932Encoder.encode("\u746B")}).toThrowError({name:"TypeError",message:"EncodingError U+746B"});
expect(() => {ms932Encoder.encode("\u746C")}).toThrowError({name:"TypeError",message:"EncodingError U+746C"});
expect(() => {ms932Encoder.encode("\u746D")}).toThrowError({name:"TypeError",message:"EncodingError U+746D"});
expect(() => {ms932Encoder.encode("\u746E")}).toThrowError({name:"TypeError",message:"EncodingError U+746E"});
expect([...ms932Encoder.encode("瑯瑰")].join(",")).toBe("224,229,224,241"); // U+746F
expect(() => {ms932Encoder.encode("\u7471")}).toThrowError({name:"TypeError",message:"EncodingError U+7471"});
expect(() => {ms932Encoder.encode("\u7472")}).toThrowError({name:"TypeError",message:"EncodingError U+7472"});
expect([...ms932Encoder.encode("瑳")].join(",")).toBe("141,186"); // U+7473
expect(() => {ms932Encoder.encode("\u7474")}).toThrowError({name:"TypeError",message:"EncodingError U+7474"});
expect(() => {ms932Encoder.encode("\u7475")}).toThrowError({name:"TypeError",message:"EncodingError U+7475"});
expect([...ms932Encoder.encode("瑶")].join(",")).toBe("224,244"); // U+7476
expect(() => {ms932Encoder.encode("\u7477")}).toThrowError({name:"TypeError",message:"EncodingError U+7477"});
expect(() => {ms932Encoder.encode("\u7478")}).toThrowError({name:"TypeError",message:"EncodingError U+7478"});
expect(() => {ms932Encoder.encode("\u7479")}).toThrowError({name:"TypeError",message:"EncodingError U+7479"});
expect(() => {ms932Encoder.encode("\u747A")}).toThrowError({name:"TypeError",message:"EncodingError U+747A"});
expect(() => {ms932Encoder.encode("\u747B")}).toThrowError({name:"TypeError",message:"EncodingError U+747B"});
expect(() => {ms932Encoder.encode("\u747C")}).toThrowError({name:"TypeError",message:"EncodingError U+747C"});
expect(() => {ms932Encoder.encode("\u747D")}).toThrowError({name:"TypeError",message:"EncodingError U+747D"});
expect([...ms932Encoder.encode("瑾")].join(",")).toBe("224,245"); // U+747E
expect(() => {ms932Encoder.encode("\u747F")}).toThrowError({name:"TypeError",message:"EncodingError U+747F"});
expect(() => {ms932Encoder.encode("\u7480")}).toThrowError({name:"TypeError",message:"EncodingError U+7480"});
expect(() => {ms932Encoder.encode("\u7481")}).toThrowError({name:"TypeError",message:"EncodingError U+7481"});
expect(() => {ms932Encoder.encode("\u7482")}).toThrowError({name:"TypeError",message:"EncodingError U+7482"});
expect([...ms932Encoder.encode("璃")].join(",")).toBe("151,158"); // U+7483
expect(() => {ms932Encoder.encode("\u7484")}).toThrowError({name:"TypeError",message:"EncodingError U+7484"});
expect(() => {ms932Encoder.encode("\u7485")}).toThrowError({name:"TypeError",message:"EncodingError U+7485"});
expect(() => {ms932Encoder.encode("\u7486")}).toThrowError({name:"TypeError",message:"EncodingError U+7486"});
expect(() => {ms932Encoder.encode("\u7487")}).toThrowError({name:"TypeError",message:"EncodingError U+7487"});
expect(() => {ms932Encoder.encode("\u7488")}).toThrowError({name:"TypeError",message:"EncodingError U+7488"});
expect([...ms932Encoder.encode("璉")].join(",")).toBe("251,108"); // U+7489
expect(() => {ms932Encoder.encode("\u748A")}).toThrowError({name:"TypeError",message:"EncodingError U+748A"});
expect([...ms932Encoder.encode("璋")].join(",")).toBe("224,246"); // U+748B
expect(() => {ms932Encoder.encode("\u748C")}).toThrowError({name:"TypeError",message:"EncodingError U+748C"});
expect(() => {ms932Encoder.encode("\u748D")}).toThrowError({name:"TypeError",message:"EncodingError U+748D"});
expect(() => {ms932Encoder.encode("\u748E")}).toThrowError({name:"TypeError",message:"EncodingError U+748E"});
expect(() => {ms932Encoder.encode("\u748F")}).toThrowError({name:"TypeError",message:"EncodingError U+748F"});
expect(() => {ms932Encoder.encode("\u7490")}).toThrowError({name:"TypeError",message:"EncodingError U+7490"});
expect(() => {ms932Encoder.encode("\u7491")}).toThrowError({name:"TypeError",message:"EncodingError U+7491"});
expect(() => {ms932Encoder.encode("\u7492")}).toThrowError({name:"TypeError",message:"EncodingError U+7492"});
expect(() => {ms932Encoder.encode("\u7493")}).toThrowError({name:"TypeError",message:"EncodingError U+7493"});
expect(() => {ms932Encoder.encode("\u7494")}).toThrowError({name:"TypeError",message:"EncodingError U+7494"});
expect(() => {ms932Encoder.encode("\u7495")}).toThrowError({name:"TypeError",message:"EncodingError U+7495"});
expect(() => {ms932Encoder.encode("\u7496")}).toThrowError({name:"TypeError",message:"EncodingError U+7496"});
expect(() => {ms932Encoder.encode("\u7497")}).toThrowError({name:"TypeError",message:"EncodingError U+7497"});
expect(() => {ms932Encoder.encode("\u7498")}).toThrowError({name:"TypeError",message:"EncodingError U+7498"});
expect(() => {ms932Encoder.encode("\u7499")}).toThrowError({name:"TypeError",message:"EncodingError U+7499"});
expect(() => {ms932Encoder.encode("\u749A")}).toThrowError({name:"TypeError",message:"EncodingError U+749A"});
expect(() => {ms932Encoder.encode("\u749B")}).toThrowError({name:"TypeError",message:"EncodingError U+749B"});
expect(() => {ms932Encoder.encode("\u749C")}).toThrowError({name:"TypeError",message:"EncodingError U+749C"});
expect(() => {ms932Encoder.encode("\u749D")}).toThrowError({name:"TypeError",message:"EncodingError U+749D"});
expect([...ms932Encoder.encode("璞璟")].join(",")).toBe("224,247,251,109"); // U+749E
expect(() => {ms932Encoder.encode("\u74A0")}).toThrowError({name:"TypeError",message:"EncodingError U+74A0"});
expect(() => {ms932Encoder.encode("\u74A1")}).toThrowError({name:"TypeError",message:"EncodingError U+74A1"});
expect([...ms932Encoder.encode("璢")].join(",")).toBe("224,227"); // U+74A2
expect(() => {ms932Encoder.encode("\u74A3")}).toThrowError({name:"TypeError",message:"EncodingError U+74A3"});
expect(() => {ms932Encoder.encode("\u74A4")}).toThrowError({name:"TypeError",message:"EncodingError U+74A4"});
expect(() => {ms932Encoder.encode("\u74A5")}).toThrowError({name:"TypeError",message:"EncodingError U+74A5"});
expect(() => {ms932Encoder.encode("\u74A6")}).toThrowError({name:"TypeError",message:"EncodingError U+74A6"});
expect([...ms932Encoder.encode("璧")].join(",")).toBe("224,248"); // U+74A7
expect(() => {ms932Encoder.encode("\u74A8")}).toThrowError({name:"TypeError",message:"EncodingError U+74A8"});
expect(() => {ms932Encoder.encode("\u74A9")}).toThrowError({name:"TypeError",message:"EncodingError U+74A9"});
expect(() => {ms932Encoder.encode("\u74AA")}).toThrowError({name:"TypeError",message:"EncodingError U+74AA"});
expect(() => {ms932Encoder.encode("\u74AB")}).toThrowError({name:"TypeError",message:"EncodingError U+74AB"});
expect(() => {ms932Encoder.encode("\u74AC")}).toThrowError({name:"TypeError",message:"EncodingError U+74AC"});
expect(() => {ms932Encoder.encode("\u74AD")}).toThrowError({name:"TypeError",message:"EncodingError U+74AD"});
expect(() => {ms932Encoder.encode("\u74AE")}).toThrowError({name:"TypeError",message:"EncodingError U+74AE"});
expect(() => {ms932Encoder.encode("\u74AF")}).toThrowError({name:"TypeError",message:"EncodingError U+74AF"});
expect([...ms932Encoder.encode("環")].join(",")).toBe("138,194"); // U+74B0
expect(() => {ms932Encoder.encode("\u74B1")}).toThrowError({name:"TypeError",message:"EncodingError U+74B1"});
expect(() => {ms932Encoder.encode("\u74B2")}).toThrowError({name:"TypeError",message:"EncodingError U+74B2"});
expect(() => {ms932Encoder.encode("\u74B3")}).toThrowError({name:"TypeError",message:"EncodingError U+74B3"});
expect(() => {ms932Encoder.encode("\u74B4")}).toThrowError({name:"TypeError",message:"EncodingError U+74B4"});
expect(() => {ms932Encoder.encode("\u74B5")}).toThrowError({name:"TypeError",message:"EncodingError U+74B5"});
expect(() => {ms932Encoder.encode("\u74B6")}).toThrowError({name:"TypeError",message:"EncodingError U+74B6"});
expect(() => {ms932Encoder.encode("\u74B7")}).toThrowError({name:"TypeError",message:"EncodingError U+74B7"});
expect(() => {ms932Encoder.encode("\u74B8")}).toThrowError({name:"TypeError",message:"EncodingError U+74B8"});
expect(() => {ms932Encoder.encode("\u74B9")}).toThrowError({name:"TypeError",message:"EncodingError U+74B9"});
expect(() => {ms932Encoder.encode("\u74BA")}).toThrowError({name:"TypeError",message:"EncodingError U+74BA"});
expect(() => {ms932Encoder.encode("\u74BB")}).toThrowError({name:"TypeError",message:"EncodingError U+74BB"});
expect(() => {ms932Encoder.encode("\u74BC")}).toThrowError({name:"TypeError",message:"EncodingError U+74BC"});
expect([...ms932Encoder.encode("璽")].join(",")).toBe("142,163"); // U+74BD
expect(() => {ms932Encoder.encode("\u74BE")}).toThrowError({name:"TypeError",message:"EncodingError U+74BE"});
expect(() => {ms932Encoder.encode("\u74BF")}).toThrowError({name:"TypeError",message:"EncodingError U+74BF"});
expect(() => {ms932Encoder.encode("\u74C0")}).toThrowError({name:"TypeError",message:"EncodingError U+74C0"});
expect(() => {ms932Encoder.encode("\u74C1")}).toThrowError({name:"TypeError",message:"EncodingError U+74C1"});
expect(() => {ms932Encoder.encode("\u74C2")}).toThrowError({name:"TypeError",message:"EncodingError U+74C2"});
expect(() => {ms932Encoder.encode("\u74C3")}).toThrowError({name:"TypeError",message:"EncodingError U+74C3"});
expect(() => {ms932Encoder.encode("\u74C4")}).toThrowError({name:"TypeError",message:"EncodingError U+74C4"});
expect(() => {ms932Encoder.encode("\u74C5")}).toThrowError({name:"TypeError",message:"EncodingError U+74C5"});
expect(() => {ms932Encoder.encode("\u74C6")}).toThrowError({name:"TypeError",message:"EncodingError U+74C6"});
expect(() => {ms932Encoder.encode("\u74C7")}).toThrowError({name:"TypeError",message:"EncodingError U+74C7"});
expect(() => {ms932Encoder.encode("\u74C8")}).toThrowError({name:"TypeError",message:"EncodingError U+74C8"});
expect(() => {ms932Encoder.encode("\u74C9")}).toThrowError({name:"TypeError",message:"EncodingError U+74C9"});
expect([...ms932Encoder.encode("瓊")].join(",")).toBe("224,249"); // U+74CA
expect(() => {ms932Encoder.encode("\u74CB")}).toThrowError({name:"TypeError",message:"EncodingError U+74CB"});
expect(() => {ms932Encoder.encode("\u74CC")}).toThrowError({name:"TypeError",message:"EncodingError U+74CC"});
expect(() => {ms932Encoder.encode("\u74CD")}).toThrowError({name:"TypeError",message:"EncodingError U+74CD"});
expect(() => {ms932Encoder.encode("\u74CE")}).toThrowError({name:"TypeError",message:"EncodingError U+74CE"});
expect([...ms932Encoder.encode("瓏")].join(",")).toBe("224,250"); // U+74CF
expect(() => {ms932Encoder.encode("\u74D0")}).toThrowError({name:"TypeError",message:"EncodingError U+74D0"});
expect(() => {ms932Encoder.encode("\u74D1")}).toThrowError({name:"TypeError",message:"EncodingError U+74D1"});
expect(() => {ms932Encoder.encode("\u74D2")}).toThrowError({name:"TypeError",message:"EncodingError U+74D2"});
expect(() => {ms932Encoder.encode("\u74D3")}).toThrowError({name:"TypeError",message:"EncodingError U+74D3"});
expect([...ms932Encoder.encode("瓔")].join(",")).toBe("224,251"); // U+74D4
expect(() => {ms932Encoder.encode("\u74D5")}).toThrowError({name:"TypeError",message:"EncodingError U+74D5"});
expect(() => {ms932Encoder.encode("\u74D6")}).toThrowError({name:"TypeError",message:"EncodingError U+74D6"});
expect(() => {ms932Encoder.encode("\u74D7")}).toThrowError({name:"TypeError",message:"EncodingError U+74D7"});
expect(() => {ms932Encoder.encode("\u74D8")}).toThrowError({name:"TypeError",message:"EncodingError U+74D8"});
expect(() => {ms932Encoder.encode("\u74D9")}).toThrowError({name:"TypeError",message:"EncodingError U+74D9"});
expect(() => {ms932Encoder.encode("\u74DA")}).toThrowError({name:"TypeError",message:"EncodingError U+74DA"});
expect(() => {ms932Encoder.encode("\u74DB")}).toThrowError({name:"TypeError",message:"EncodingError U+74DB"});
expect([...ms932Encoder.encode("瓜")].join(",")).toBe("137,90"); // U+74DC
expect(() => {ms932Encoder.encode("\u74DD")}).toThrowError({name:"TypeError",message:"EncodingError U+74DD"});
expect(() => {ms932Encoder.encode("\u74DE")}).toThrowError({name:"TypeError",message:"EncodingError U+74DE"});
expect(() => {ms932Encoder.encode("\u74DF")}).toThrowError({name:"TypeError",message:"EncodingError U+74DF"});
expect([...ms932Encoder.encode("瓠")].join(",")).toBe("225,64"); // U+74E0
expect(() => {ms932Encoder.encode("\u74E1")}).toThrowError({name:"TypeError",message:"EncodingError U+74E1"});
expect([...ms932Encoder.encode("瓢瓣")].join(",")).toBe("149,90,225,65"); // U+74E2
expect(() => {ms932Encoder.encode("\u74E4")}).toThrowError({name:"TypeError",message:"EncodingError U+74E4"});
expect(() => {ms932Encoder.encode("\u74E5")}).toThrowError({name:"TypeError",message:"EncodingError U+74E5"});
expect([...ms932Encoder.encode("瓦瓧")].join(",")).toBe("138,162,225,66"); // U+74E6
expect(() => {ms932Encoder.encode("\u74E8")}).toThrowError({name:"TypeError",message:"EncodingError U+74E8"});
expect([...ms932Encoder.encode("瓩")].join(",")).toBe("225,67"); // U+74E9
expect(() => {ms932Encoder.encode("\u74EA")}).toThrowError({name:"TypeError",message:"EncodingError U+74EA"});
expect(() => {ms932Encoder.encode("\u74EB")}).toThrowError({name:"TypeError",message:"EncodingError U+74EB"});
expect(() => {ms932Encoder.encode("\u74EC")}).toThrowError({name:"TypeError",message:"EncodingError U+74EC"});
expect(() => {ms932Encoder.encode("\u74ED")}).toThrowError({name:"TypeError",message:"EncodingError U+74ED"});
expect([...ms932Encoder.encode("瓮")].join(",")).toBe("225,68"); // U+74EE
expect(() => {ms932Encoder.encode("\u74EF")}).toThrowError({name:"TypeError",message:"EncodingError U+74EF"});
expect([...ms932Encoder.encode("瓰瓱瓲")].join(",")).toBe("225,70,225,71,225,69"); // U+74F0
expect(() => {ms932Encoder.encode("\u74F3")}).toThrowError({name:"TypeError",message:"EncodingError U+74F3"});
expect(() => {ms932Encoder.encode("\u74F4")}).toThrowError({name:"TypeError",message:"EncodingError U+74F4"});
expect(() => {ms932Encoder.encode("\u74F5")}).toThrowError({name:"TypeError",message:"EncodingError U+74F5"});
expect([...ms932Encoder.encode("瓶瓷瓸")].join(",")).toBe("149,114,225,73,225,72"); // U+74F6
expect(() => {ms932Encoder.encode("\u74F9")}).toThrowError({name:"TypeError",message:"EncodingError U+74F9"});
expect(() => {ms932Encoder.encode("\u74FA")}).toThrowError({name:"TypeError",message:"EncodingError U+74FA"});
expect(() => {ms932Encoder.encode("\u74FB")}).toThrowError({name:"TypeError",message:"EncodingError U+74FB"});
expect(() => {ms932Encoder.encode("\u74FC")}).toThrowError({name:"TypeError",message:"EncodingError U+74FC"});
expect(() => {ms932Encoder.encode("\u74FD")}).toThrowError({name:"TypeError",message:"EncodingError U+74FD"});
expect(() => {ms932Encoder.encode("\u74FE")}).toThrowError({name:"TypeError",message:"EncodingError U+74FE"});
expect(() => {ms932Encoder.encode("\u74FF")}).toThrowError({name:"TypeError",message:"EncodingError U+74FF"});
expect(() => {ms932Encoder.encode("\u7500")}).toThrowError({name:"TypeError",message:"EncodingError U+7500"});
expect([...ms932Encoder.encode("甁")].join(",")).toBe("251,110"); // U+7501
expect(() => {ms932Encoder.encode("\u7502")}).toThrowError({name:"TypeError",message:"EncodingError U+7502"});
expect([...ms932Encoder.encode("甃甄甅")].join(",")).toBe("225,75,225,74,225,76"); // U+7503
expect(() => {ms932Encoder.encode("\u7506")}).toThrowError({name:"TypeError",message:"EncodingError U+7506"});
expect(() => {ms932Encoder.encode("\u7507")}).toThrowError({name:"TypeError",message:"EncodingError U+7507"});
expect(() => {ms932Encoder.encode("\u7508")}).toThrowError({name:"TypeError",message:"EncodingError U+7508"});
expect(() => {ms932Encoder.encode("\u7509")}).toThrowError({name:"TypeError",message:"EncodingError U+7509"});
expect(() => {ms932Encoder.encode("\u750A")}).toThrowError({name:"TypeError",message:"EncodingError U+750A"});
expect(() => {ms932Encoder.encode("\u750B")}).toThrowError({name:"TypeError",message:"EncodingError U+750B"});
expect([...ms932Encoder.encode("甌甍甎")].join(",")).toBe("225,77,225,79,225,78"); // U+750C
expect(() => {ms932Encoder.encode("\u750F")}).toThrowError({name:"TypeError",message:"EncodingError U+750F"});
expect(() => {ms932Encoder.encode("\u7510")}).toThrowError({name:"TypeError",message:"EncodingError U+7510"});
expect([...ms932Encoder.encode("甑")].join(",")).toBe("141,153"); // U+7511
expect(() => {ms932Encoder.encode("\u7512")}).toThrowError({name:"TypeError",message:"EncodingError U+7512"});
expect([...ms932Encoder.encode("甓")].join(",")).toBe("225,81"); // U+7513
expect(() => {ms932Encoder.encode("\u7514")}).toThrowError({name:"TypeError",message:"EncodingError U+7514"});
expect([...ms932Encoder.encode("甕")].join(",")).toBe("225,80"); // U+7515
expect(() => {ms932Encoder.encode("\u7516")}).toThrowError({name:"TypeError",message:"EncodingError U+7516"});
expect(() => {ms932Encoder.encode("\u7517")}).toThrowError({name:"TypeError",message:"EncodingError U+7517"});
expect([...ms932Encoder.encode("甘")].join(",")).toBe("138,195"); // U+7518
expect(() => {ms932Encoder.encode("\u7519")}).toThrowError({name:"TypeError",message:"EncodingError U+7519"});
expect([...ms932Encoder.encode("甚")].join(",")).toBe("144,114"); // U+751A
expect(() => {ms932Encoder.encode("\u751B")}).toThrowError({name:"TypeError",message:"EncodingError U+751B"});
expect([...ms932Encoder.encode("甜")].join(",")).toBe("147,91"); // U+751C
expect(() => {ms932Encoder.encode("\u751D")}).toThrowError({name:"TypeError",message:"EncodingError U+751D"});
expect([...ms932Encoder.encode("甞生")].join(",")).toBe("225,82,144,182"); // U+751E
expect(() => {ms932Encoder.encode("\u7520")}).toThrowError({name:"TypeError",message:"EncodingError U+7520"});
expect(() => {ms932Encoder.encode("\u7521")}).toThrowError({name:"TypeError",message:"EncodingError U+7521"});
expect(() => {ms932Encoder.encode("\u7522")}).toThrowError({name:"TypeError",message:"EncodingError U+7522"});
expect([...ms932Encoder.encode("産")].join(",")).toBe("142,89"); // U+7523
expect(() => {ms932Encoder.encode("\u7524")}).toThrowError({name:"TypeError",message:"EncodingError U+7524"});
expect([...ms932Encoder.encode("甥甦")].join(",")).toBe("137,153,225,83"); // U+7525
expect(() => {ms932Encoder.encode("\u7527")}).toThrowError({name:"TypeError",message:"EncodingError U+7527"});
expect([...ms932Encoder.encode("用")].join(",")).toBe("151,112"); // U+7528
expect(() => {ms932Encoder.encode("\u7529")}).toThrowError({name:"TypeError",message:"EncodingError U+7529"});
expect(() => {ms932Encoder.encode("\u752A")}).toThrowError({name:"TypeError",message:"EncodingError U+752A"});
expect([...ms932Encoder.encode("甫甬")].join(",")).toBe("149,225,225,84"); // U+752B
expect(() => {ms932Encoder.encode("\u752D")}).toThrowError({name:"TypeError",message:"EncodingError U+752D"});
expect(() => {ms932Encoder.encode("\u752E")}).toThrowError({name:"TypeError",message:"EncodingError U+752E"});
expect([...ms932Encoder.encode("甯田由甲申")].join(",")).toBe("250,168,147,99,151,82,141,98,144,92"); // U+752F
expect(() => {ms932Encoder.encode("\u7534")}).toThrowError({name:"TypeError",message:"EncodingError U+7534"});
expect(() => {ms932Encoder.encode("\u7535")}).toThrowError({name:"TypeError",message:"EncodingError U+7535"});
expect(() => {ms932Encoder.encode("\u7536")}).toThrowError({name:"TypeError",message:"EncodingError U+7536"});
expect([...ms932Encoder.encode("男甸")].join(",")).toBe("146,106,153,178"); // U+7537
expect(() => {ms932Encoder.encode("\u7539")}).toThrowError({name:"TypeError",message:"EncodingError U+7539"});
expect([...ms932Encoder.encode("町画甼")].join(",")).toBe("146,172,137,230,225,85"); // U+753A
expect(() => {ms932Encoder.encode("\u753D")}).toThrowError({name:"TypeError",message:"EncodingError U+753D"});
expect(() => {ms932Encoder.encode("\u753E")}).toThrowError({name:"TypeError",message:"EncodingError U+753E"});
expect(() => {ms932Encoder.encode("\u753F")}).toThrowError({name:"TypeError",message:"EncodingError U+753F"});
expect(() => {ms932Encoder.encode("\u7540")}).toThrowError({name:"TypeError",message:"EncodingError U+7540"});
expect(() => {ms932Encoder.encode("\u7541")}).toThrowError({name:"TypeError",message:"EncodingError U+7541"});
expect(() => {ms932Encoder.encode("\u7542")}).toThrowError({name:"TypeError",message:"EncodingError U+7542"});
expect(() => {ms932Encoder.encode("\u7543")}).toThrowError({name:"TypeError",message:"EncodingError U+7543"});
expect([...ms932Encoder.encode("畄")].join(",")).toBe("225,86"); // U+7544
expect(() => {ms932Encoder.encode("\u7545")}).toThrowError({name:"TypeError",message:"EncodingError U+7545"});
expect([...ms932Encoder.encode("畆")].join(",")).toBe("225,91"); // U+7546
expect(() => {ms932Encoder.encode("\u7547")}).toThrowError({name:"TypeError",message:"EncodingError U+7547"});
expect(() => {ms932Encoder.encode("\u7548")}).toThrowError({name:"TypeError",message:"EncodingError U+7548"});
expect([...ms932Encoder.encode("畉畊畋界畍")].join(",")).toBe("225,89,225,88,157,192,138,69,225,87"); // U+7549
expect(() => {ms932Encoder.encode("\u754E")}).toThrowError({name:"TypeError",message:"EncodingError U+754E"});
expect([...ms932Encoder.encode("畏")].join(",")).toBe("136,216"); // U+754F
expect(() => {ms932Encoder.encode("\u7550")}).toThrowError({name:"TypeError",message:"EncodingError U+7550"});
expect([...ms932Encoder.encode("畑")].join(",")).toBe("148,168"); // U+7551
expect(() => {ms932Encoder.encode("\u7552")}).toThrowError({name:"TypeError",message:"EncodingError U+7552"});
expect(() => {ms932Encoder.encode("\u7553")}).toThrowError({name:"TypeError",message:"EncodingError U+7553"});
expect([...ms932Encoder.encode("畔")].join(",")).toBe("148,200"); // U+7554
expect(() => {ms932Encoder.encode("\u7555")}).toThrowError({name:"TypeError",message:"EncodingError U+7555"});
expect(() => {ms932Encoder.encode("\u7556")}).toThrowError({name:"TypeError",message:"EncodingError U+7556"});
expect(() => {ms932Encoder.encode("\u7557")}).toThrowError({name:"TypeError",message:"EncodingError U+7557"});
expect(() => {ms932Encoder.encode("\u7558")}).toThrowError({name:"TypeError",message:"EncodingError U+7558"});
expect([...ms932Encoder.encode("留畚畛畜畝")].join(",")).toBe("151,175,225,92,225,90,146,123,144,164"); // U+7559
expect(() => {ms932Encoder.encode("\u755E")}).toThrowError({name:"TypeError",message:"EncodingError U+755E"});
expect(() => {ms932Encoder.encode("\u755F")}).toThrowError({name:"TypeError",message:"EncodingError U+755F"});
expect([...ms932Encoder.encode("畠")].join(",")).toBe("148,169"); // U+7560
expect(() => {ms932Encoder.encode("\u7561")}).toThrowError({name:"TypeError",message:"EncodingError U+7561"});
expect([...ms932Encoder.encode("畢")].join(",")).toBe("149,76"); // U+7562
expect(() => {ms932Encoder.encode("\u7563")}).toThrowError({name:"TypeError",message:"EncodingError U+7563"});
expect([...ms932Encoder.encode("畤略畦畧")].join(",")).toBe("225,94,151,170,140,108,225,95"); // U+7564
expect(() => {ms932Encoder.encode("\u7568")}).toThrowError({name:"TypeError",message:"EncodingError U+7568"});
expect([...ms932Encoder.encode("畩番畫")].join(",")).toBe("225,93,148,212,225,96"); // U+7569
expect(() => {ms932Encoder.encode("\u756C")}).toThrowError({name:"TypeError",message:"EncodingError U+756C"});
expect([...ms932Encoder.encode("畭")].join(",")).toBe("225,97"); // U+756D
expect(() => {ms932Encoder.encode("\u756E")}).toThrowError({name:"TypeError",message:"EncodingError U+756E"});
expect([...ms932Encoder.encode("畯異")].join(",")).toBe("251,111,136,217"); // U+756F
expect(() => {ms932Encoder.encode("\u7571")}).toThrowError({name:"TypeError",message:"EncodingError U+7571"});
expect(() => {ms932Encoder.encode("\u7572")}).toThrowError({name:"TypeError",message:"EncodingError U+7572"});
expect([...ms932Encoder.encode("畳畴")].join(",")).toBe("143,244,225,102"); // U+7573
expect(() => {ms932Encoder.encode("\u7575")}).toThrowError({name:"TypeError",message:"EncodingError U+7575"});
expect([...ms932Encoder.encode("當畷畸")].join(",")).toBe("225,99,147,235,225,98"); // U+7576
expect(() => {ms932Encoder.encode("\u7579")}).toThrowError({name:"TypeError",message:"EncodingError U+7579"});
expect(() => {ms932Encoder.encode("\u757A")}).toThrowError({name:"TypeError",message:"EncodingError U+757A"});
expect(() => {ms932Encoder.encode("\u757B")}).toThrowError({name:"TypeError",message:"EncodingError U+757B"});
expect(() => {ms932Encoder.encode("\u757C")}).toThrowError({name:"TypeError",message:"EncodingError U+757C"});
expect(() => {ms932Encoder.encode("\u757D")}).toThrowError({name:"TypeError",message:"EncodingError U+757D"});
expect(() => {ms932Encoder.encode("\u757E")}).toThrowError({name:"TypeError",message:"EncodingError U+757E"});
expect([...ms932Encoder.encode("畿")].join(",")).toBe("139,69"); // U+757F
expect(() => {ms932Encoder.encode("\u7580")}).toThrowError({name:"TypeError",message:"EncodingError U+7580"});
expect(() => {ms932Encoder.encode("\u7581")}).toThrowError({name:"TypeError",message:"EncodingError U+7581"});
expect([...ms932Encoder.encode("疂")].join(",")).toBe("225,105"); // U+7582
expect(() => {ms932Encoder.encode("\u7583")}).toThrowError({name:"TypeError",message:"EncodingError U+7583"});
expect(() => {ms932Encoder.encode("\u7584")}).toThrowError({name:"TypeError",message:"EncodingError U+7584"});
expect(() => {ms932Encoder.encode("\u7585")}).toThrowError({name:"TypeError",message:"EncodingError U+7585"});
expect([...ms932Encoder.encode("疆疇")].join(",")).toBe("225,100,225,101"); // U+7586
expect(() => {ms932Encoder.encode("\u7588")}).toThrowError({name:"TypeError",message:"EncodingError U+7588"});
expect([...ms932Encoder.encode("疉疊疋")].join(",")).toBe("225,104,225,103,149,68"); // U+7589
expect(() => {ms932Encoder.encode("\u758C")}).toThrowError({name:"TypeError",message:"EncodingError U+758C"});
expect(() => {ms932Encoder.encode("\u758D")}).toThrowError({name:"TypeError",message:"EncodingError U+758D"});
expect([...ms932Encoder.encode("疎疏")].join(",")).toBe("145,97,145,96"); // U+758E
expect(() => {ms932Encoder.encode("\u7590")}).toThrowError({name:"TypeError",message:"EncodingError U+7590"});
expect([...ms932Encoder.encode("疑")].join(",")).toBe("139,94"); // U+7591
expect(() => {ms932Encoder.encode("\u7592")}).toThrowError({name:"TypeError",message:"EncodingError U+7592"});
expect(() => {ms932Encoder.encode("\u7593")}).toThrowError({name:"TypeError",message:"EncodingError U+7593"});
expect([...ms932Encoder.encode("疔")].join(",")).toBe("225,106"); // U+7594
expect(() => {ms932Encoder.encode("\u7595")}).toThrowError({name:"TypeError",message:"EncodingError U+7595"});
expect(() => {ms932Encoder.encode("\u7596")}).toThrowError({name:"TypeError",message:"EncodingError U+7596"});
expect(() => {ms932Encoder.encode("\u7597")}).toThrowError({name:"TypeError",message:"EncodingError U+7597"});
expect(() => {ms932Encoder.encode("\u7598")}).toThrowError({name:"TypeError",message:"EncodingError U+7598"});
expect(() => {ms932Encoder.encode("\u7599")}).toThrowError({name:"TypeError",message:"EncodingError U+7599"});
expect([...ms932Encoder.encode("疚")].join(",")).toBe("225,107"); // U+759A
expect(() => {ms932Encoder.encode("\u759B")}).toThrowError({name:"TypeError",message:"EncodingError U+759B"});
expect(() => {ms932Encoder.encode("\u759C")}).toThrowError({name:"TypeError",message:"EncodingError U+759C"});
expect([...ms932Encoder.encode("疝")].join(",")).toBe("225,108"); // U+759D
expect(() => {ms932Encoder.encode("\u759E")}).toThrowError({name:"TypeError",message:"EncodingError U+759E"});
expect(() => {ms932Encoder.encode("\u759F")}).toThrowError({name:"TypeError",message:"EncodingError U+759F"});
expect(() => {ms932Encoder.encode("\u75A0")}).toThrowError({name:"TypeError",message:"EncodingError U+75A0"});
expect(() => {ms932Encoder.encode("\u75A1")}).toThrowError({name:"TypeError",message:"EncodingError U+75A1"});
expect(() => {ms932Encoder.encode("\u75A2")}).toThrowError({name:"TypeError",message:"EncodingError U+75A2"});
expect([...ms932Encoder.encode("疣")].join(",")).toBe("225,110"); // U+75A3
expect(() => {ms932Encoder.encode("\u75A4")}).toThrowError({name:"TypeError",message:"EncodingError U+75A4"});
expect([...ms932Encoder.encode("疥")].join(",")).toBe("225,109"); // U+75A5
expect(() => {ms932Encoder.encode("\u75A6")}).toThrowError({name:"TypeError",message:"EncodingError U+75A6"});
expect(() => {ms932Encoder.encode("\u75A7")}).toThrowError({name:"TypeError",message:"EncodingError U+75A7"});
expect(() => {ms932Encoder.encode("\u75A8")}).toThrowError({name:"TypeError",message:"EncodingError U+75A8"});
expect(() => {ms932Encoder.encode("\u75A9")}).toThrowError({name:"TypeError",message:"EncodingError U+75A9"});
expect(() => {ms932Encoder.encode("\u75AA")}).toThrowError({name:"TypeError",message:"EncodingError U+75AA"});
expect([...ms932Encoder.encode("疫")].join(",")).toBe("137,117"); // U+75AB
expect(() => {ms932Encoder.encode("\u75AC")}).toThrowError({name:"TypeError",message:"EncodingError U+75AC"});
expect(() => {ms932Encoder.encode("\u75AD")}).toThrowError({name:"TypeError",message:"EncodingError U+75AD"});
expect(() => {ms932Encoder.encode("\u75AE")}).toThrowError({name:"TypeError",message:"EncodingError U+75AE"});
expect(() => {ms932Encoder.encode("\u75AF")}).toThrowError({name:"TypeError",message:"EncodingError U+75AF"});
expect(() => {ms932Encoder.encode("\u75B0")}).toThrowError({name:"TypeError",message:"EncodingError U+75B0"});
expect([...ms932Encoder.encode("疱疲疳")].join(",")).toBe("225,118,148,230,225,112"); // U+75B1
expect(() => {ms932Encoder.encode("\u75B4")}).toThrowError({name:"TypeError",message:"EncodingError U+75B4"});
expect([...ms932Encoder.encode("疵")].join(",")).toBe("225,114"); // U+75B5
expect(() => {ms932Encoder.encode("\u75B6")}).toThrowError({name:"TypeError",message:"EncodingError U+75B6"});
expect(() => {ms932Encoder.encode("\u75B7")}).toThrowError({name:"TypeError",message:"EncodingError U+75B7"});
expect([...ms932Encoder.encode("疸疹")].join(",")).toBe("225,116,144,93"); // U+75B8
expect(() => {ms932Encoder.encode("\u75BA")}).toThrowError({name:"TypeError",message:"EncodingError U+75BA"});
expect(() => {ms932Encoder.encode("\u75BB")}).toThrowError({name:"TypeError",message:"EncodingError U+75BB"});
expect([...ms932Encoder.encode("疼疽疾")].join(",")).toBe("225,117,225,115,142,190"); // U+75BC
expect(() => {ms932Encoder.encode("\u75BF")}).toThrowError({name:"TypeError",message:"EncodingError U+75BF"});
expect(() => {ms932Encoder.encode("\u75C0")}).toThrowError({name:"TypeError",message:"EncodingError U+75C0"});
expect(() => {ms932Encoder.encode("\u75C1")}).toThrowError({name:"TypeError",message:"EncodingError U+75C1"});
expect([...ms932Encoder.encode("痂痃")].join(",")).toBe("225,111,225,113"); // U+75C2
expect(() => {ms932Encoder.encode("\u75C4")}).toThrowError({name:"TypeError",message:"EncodingError U+75C4"});
expect([...ms932Encoder.encode("病")].join(",")).toBe("149,97"); // U+75C5
expect(() => {ms932Encoder.encode("\u75C6")}).toThrowError({name:"TypeError",message:"EncodingError U+75C6"});
expect([...ms932Encoder.encode("症")].join(",")).toBe("143,199"); // U+75C7
expect(() => {ms932Encoder.encode("\u75C8")}).toThrowError({name:"TypeError",message:"EncodingError U+75C8"});
expect(() => {ms932Encoder.encode("\u75C9")}).toThrowError({name:"TypeError",message:"EncodingError U+75C9"});
expect([...ms932Encoder.encode("痊")].join(",")).toBe("225,120"); // U+75CA
expect(() => {ms932Encoder.encode("\u75CB")}).toThrowError({name:"TypeError",message:"EncodingError U+75CB"});
expect(() => {ms932Encoder.encode("\u75CC")}).toThrowError({name:"TypeError",message:"EncodingError U+75CC"});
expect([...ms932Encoder.encode("痍")].join(",")).toBe("225,119"); // U+75CD
expect(() => {ms932Encoder.encode("\u75CE")}).toThrowError({name:"TypeError",message:"EncodingError U+75CE"});
expect(() => {ms932Encoder.encode("\u75CF")}).toThrowError({name:"TypeError",message:"EncodingError U+75CF"});
expect(() => {ms932Encoder.encode("\u75D0")}).toThrowError({name:"TypeError",message:"EncodingError U+75D0"});
expect(() => {ms932Encoder.encode("\u75D1")}).toThrowError({name:"TypeError",message:"EncodingError U+75D1"});
expect([...ms932Encoder.encode("痒")].join(",")).toBe("225,121"); // U+75D2
expect(() => {ms932Encoder.encode("\u75D3")}).toThrowError({name:"TypeError",message:"EncodingError U+75D3"});
expect([...ms932Encoder.encode("痔痕")].join(",")).toBe("142,164,141,173"); // U+75D4
expect(() => {ms932Encoder.encode("\u75D6")}).toThrowError({name:"TypeError",message:"EncodingError U+75D6"});
expect(() => {ms932Encoder.encode("\u75D7")}).toThrowError({name:"TypeError",message:"EncodingError U+75D7"});
expect([...ms932Encoder.encode("痘痙")].join(",")).toBe("147,151,225,122"); // U+75D8
expect(() => {ms932Encoder.encode("\u75DA")}).toThrowError({name:"TypeError",message:"EncodingError U+75DA"});
expect([...ms932Encoder.encode("痛")].join(",")).toBe("146,201"); // U+75DB
expect(() => {ms932Encoder.encode("\u75DC")}).toThrowError({name:"TypeError",message:"EncodingError U+75DC"});
expect(() => {ms932Encoder.encode("\u75DD")}).toThrowError({name:"TypeError",message:"EncodingError U+75DD"});
expect([...ms932Encoder.encode("痞")].join(",")).toBe("225,124"); // U+75DE
expect(() => {ms932Encoder.encode("\u75DF")}).toThrowError({name:"TypeError",message:"EncodingError U+75DF"});
expect(() => {ms932Encoder.encode("\u75E0")}).toThrowError({name:"TypeError",message:"EncodingError U+75E0"});
expect(() => {ms932Encoder.encode("\u75E1")}).toThrowError({name:"TypeError",message:"EncodingError U+75E1"});
expect([...ms932Encoder.encode("痢痣")].join(",")).toBe("151,159,225,123"); // U+75E2
expect(() => {ms932Encoder.encode("\u75E4")}).toThrowError({name:"TypeError",message:"EncodingError U+75E4"});
expect(() => {ms932Encoder.encode("\u75E5")}).toThrowError({name:"TypeError",message:"EncodingError U+75E5"});
expect(() => {ms932Encoder.encode("\u75E6")}).toThrowError({name:"TypeError",message:"EncodingError U+75E6"});
expect(() => {ms932Encoder.encode("\u75E7")}).toThrowError({name:"TypeError",message:"EncodingError U+75E7"});
expect(() => {ms932Encoder.encode("\u75E8")}).toThrowError({name:"TypeError",message:"EncodingError U+75E8"});
expect([...ms932Encoder.encode("痩")].join(",")).toBe("145,137"); // U+75E9
expect(() => {ms932Encoder.encode("\u75EA")}).toThrowError({name:"TypeError",message:"EncodingError U+75EA"});
expect(() => {ms932Encoder.encode("\u75EB")}).toThrowError({name:"TypeError",message:"EncodingError U+75EB"});
expect(() => {ms932Encoder.encode("\u75EC")}).toThrowError({name:"TypeError",message:"EncodingError U+75EC"});
expect(() => {ms932Encoder.encode("\u75ED")}).toThrowError({name:"TypeError",message:"EncodingError U+75ED"});
expect(() => {ms932Encoder.encode("\u75EE")}).toThrowError({name:"TypeError",message:"EncodingError U+75EE"});
expect(() => {ms932Encoder.encode("\u75EF")}).toThrowError({name:"TypeError",message:"EncodingError U+75EF"});
expect([...ms932Encoder.encode("痰")].join(",")).toBe("225,130"); // U+75F0
expect(() => {ms932Encoder.encode("\u75F1")}).toThrowError({name:"TypeError",message:"EncodingError U+75F1"});
expect([...ms932Encoder.encode("痲痳痴")].join(",")).toBe("225,132,225,133,146,115"); // U+75F2
expect(() => {ms932Encoder.encode("\u75F5")}).toThrowError({name:"TypeError",message:"EncodingError U+75F5"});
expect(() => {ms932Encoder.encode("\u75F6")}).toThrowError({name:"TypeError",message:"EncodingError U+75F6"});
expect(() => {ms932Encoder.encode("\u75F7")}).toThrowError({name:"TypeError",message:"EncodingError U+75F7"});
expect(() => {ms932Encoder.encode("\u75F8")}).toThrowError({name:"TypeError",message:"EncodingError U+75F8"});
expect(() => {ms932Encoder.encode("\u75F9")}).toThrowError({name:"TypeError",message:"EncodingError U+75F9"});
expect([...ms932Encoder.encode("痺")].join(",")).toBe("225,131"); // U+75FA
expect(() => {ms932Encoder.encode("\u75FB")}).toThrowError({name:"TypeError",message:"EncodingError U+75FB"});
expect([...ms932Encoder.encode("痼")].join(",")).toBe("225,128"); // U+75FC
expect(() => {ms932Encoder.encode("\u75FD")}).toThrowError({name:"TypeError",message:"EncodingError U+75FD"});
expect([...ms932Encoder.encode("痾痿")].join(",")).toBe("225,125,225,126"); // U+75FE
expect(() => {ms932Encoder.encode("\u7600")}).toThrowError({name:"TypeError",message:"EncodingError U+7600"});
expect([...ms932Encoder.encode("瘁")].join(",")).toBe("225,129"); // U+7601
expect(() => {ms932Encoder.encode("\u7602")}).toThrowError({name:"TypeError",message:"EncodingError U+7602"});
expect(() => {ms932Encoder.encode("\u7603")}).toThrowError({name:"TypeError",message:"EncodingError U+7603"});
expect(() => {ms932Encoder.encode("\u7604")}).toThrowError({name:"TypeError",message:"EncodingError U+7604"});
expect(() => {ms932Encoder.encode("\u7605")}).toThrowError({name:"TypeError",message:"EncodingError U+7605"});
expect(() => {ms932Encoder.encode("\u7606")}).toThrowError({name:"TypeError",message:"EncodingError U+7606"});
expect(() => {ms932Encoder.encode("\u7607")}).toThrowError({name:"TypeError",message:"EncodingError U+7607"});
expect(() => {ms932Encoder.encode("\u7608")}).toThrowError({name:"TypeError",message:"EncodingError U+7608"});
expect([...ms932Encoder.encode("瘉")].join(",")).toBe("225,136"); // U+7609
expect(() => {ms932Encoder.encode("\u760A")}).toThrowError({name:"TypeError",message:"EncodingError U+760A"});
expect([...ms932Encoder.encode("瘋")].join(",")).toBe("225,134"); // U+760B
expect(() => {ms932Encoder.encode("\u760C")}).toThrowError({name:"TypeError",message:"EncodingError U+760C"});
expect([...ms932Encoder.encode("瘍")].join(",")).toBe("225,135"); // U+760D
expect(() => {ms932Encoder.encode("\u760E")}).toThrowError({name:"TypeError",message:"EncodingError U+760E"});
expect(() => {ms932Encoder.encode("\u760F")}).toThrowError({name:"TypeError",message:"EncodingError U+760F"});
expect(() => {ms932Encoder.encode("\u7610")}).toThrowError({name:"TypeError",message:"EncodingError U+7610"});
expect(() => {ms932Encoder.encode("\u7611")}).toThrowError({name:"TypeError",message:"EncodingError U+7611"});
expect(() => {ms932Encoder.encode("\u7612")}).toThrowError({name:"TypeError",message:"EncodingError U+7612"});
expect(() => {ms932Encoder.encode("\u7613")}).toThrowError({name:"TypeError",message:"EncodingError U+7613"});
expect(() => {ms932Encoder.encode("\u7614")}).toThrowError({name:"TypeError",message:"EncodingError U+7614"});
expect(() => {ms932Encoder.encode("\u7615")}).toThrowError({name:"TypeError",message:"EncodingError U+7615"});
expect(() => {ms932Encoder.encode("\u7616")}).toThrowError({name:"TypeError",message:"EncodingError U+7616"});
expect(() => {ms932Encoder.encode("\u7617")}).toThrowError({name:"TypeError",message:"EncodingError U+7617"});
expect(() => {ms932Encoder.encode("\u7618")}).toThrowError({name:"TypeError",message:"EncodingError U+7618"});
expect(() => {ms932Encoder.encode("\u7619")}).toThrowError({name:"TypeError",message:"EncodingError U+7619"});
expect(() => {ms932Encoder.encode("\u761A")}).toThrowError({name:"TypeError",message:"EncodingError U+761A"});
expect(() => {ms932Encoder.encode("\u761B")}).toThrowError({name:"TypeError",message:"EncodingError U+761B"});
expect(() => {ms932Encoder.encode("\u761C")}).toThrowError({name:"TypeError",message:"EncodingError U+761C"});
expect(() => {ms932Encoder.encode("\u761D")}).toThrowError({name:"TypeError",message:"EncodingError U+761D"});
expect(() => {ms932Encoder.encode("\u761E")}).toThrowError({name:"TypeError",message:"EncodingError U+761E"});
expect([...ms932Encoder.encode("瘟瘠瘡瘢")].join(",")).toBe("225,137,225,139,225,140,225,141"); // U+761F
expect(() => {ms932Encoder.encode("\u7623")}).toThrowError({name:"TypeError",message:"EncodingError U+7623"});
expect([...ms932Encoder.encode("瘤")].join(",")).toBe("225,142"); // U+7624
expect(() => {ms932Encoder.encode("\u7625")}).toThrowError({name:"TypeError",message:"EncodingError U+7625"});
expect(() => {ms932Encoder.encode("\u7626")}).toThrowError({name:"TypeError",message:"EncodingError U+7626"});
expect([...ms932Encoder.encode("瘧")].join(",")).toBe("225,138"); // U+7627
expect(() => {ms932Encoder.encode("\u7628")}).toThrowError({name:"TypeError",message:"EncodingError U+7628"});
expect(() => {ms932Encoder.encode("\u7629")}).toThrowError({name:"TypeError",message:"EncodingError U+7629"});
expect(() => {ms932Encoder.encode("\u762A")}).toThrowError({name:"TypeError",message:"EncodingError U+762A"});
expect(() => {ms932Encoder.encode("\u762B")}).toThrowError({name:"TypeError",message:"EncodingError U+762B"});
expect(() => {ms932Encoder.encode("\u762C")}).toThrowError({name:"TypeError",message:"EncodingError U+762C"});
expect(() => {ms932Encoder.encode("\u762D")}).toThrowError({name:"TypeError",message:"EncodingError U+762D"});
expect(() => {ms932Encoder.encode("\u762E")}).toThrowError({name:"TypeError",message:"EncodingError U+762E"});
expect(() => {ms932Encoder.encode("\u762F")}).toThrowError({name:"TypeError",message:"EncodingError U+762F"});
expect([...ms932Encoder.encode("瘰")].join(",")).toBe("225,144"); // U+7630
expect(() => {ms932Encoder.encode("\u7631")}).toThrowError({name:"TypeError",message:"EncodingError U+7631"});
expect(() => {ms932Encoder.encode("\u7632")}).toThrowError({name:"TypeError",message:"EncodingError U+7632"});
expect(() => {ms932Encoder.encode("\u7633")}).toThrowError({name:"TypeError",message:"EncodingError U+7633"});
expect([...ms932Encoder.encode("瘴")].join(",")).toBe("225,143"); // U+7634
expect(() => {ms932Encoder.encode("\u7635")}).toThrowError({name:"TypeError",message:"EncodingError U+7635"});
expect(() => {ms932Encoder.encode("\u7636")}).toThrowError({name:"TypeError",message:"EncodingError U+7636"});
expect(() => {ms932Encoder.encode("\u7637")}).toThrowError({name:"TypeError",message:"EncodingError U+7637"});
expect(() => {ms932Encoder.encode("\u7638")}).toThrowError({name:"TypeError",message:"EncodingError U+7638"});
expect(() => {ms932Encoder.encode("\u7639")}).toThrowError({name:"TypeError",message:"EncodingError U+7639"});
expect(() => {ms932Encoder.encode("\u763A")}).toThrowError({name:"TypeError",message:"EncodingError U+763A"});
expect([...ms932Encoder.encode("瘻")].join(",")).toBe("225,145"); // U+763B
expect(() => {ms932Encoder.encode("\u763C")}).toThrowError({name:"TypeError",message:"EncodingError U+763C"});
expect(() => {ms932Encoder.encode("\u763D")}).toThrowError({name:"TypeError",message:"EncodingError U+763D"});
expect(() => {ms932Encoder.encode("\u763E")}).toThrowError({name:"TypeError",message:"EncodingError U+763E"});
expect(() => {ms932Encoder.encode("\u763F")}).toThrowError({name:"TypeError",message:"EncodingError U+763F"});
expect(() => {ms932Encoder.encode("\u7640")}).toThrowError({name:"TypeError",message:"EncodingError U+7640"});
expect(() => {ms932Encoder.encode("\u7641")}).toThrowError({name:"TypeError",message:"EncodingError U+7641"});
expect([...ms932Encoder.encode("療")].join(",")).toBe("151,195"); // U+7642
expect(() => {ms932Encoder.encode("\u7643")}).toThrowError({name:"TypeError",message:"EncodingError U+7643"});
expect(() => {ms932Encoder.encode("\u7644")}).toThrowError({name:"TypeError",message:"EncodingError U+7644"});
expect(() => {ms932Encoder.encode("\u7645")}).toThrowError({name:"TypeError",message:"EncodingError U+7645"});
expect([...ms932Encoder.encode("癆癇癈")].join(",")).toBe("225,148,225,146,225,147"); // U+7646
expect(() => {ms932Encoder.encode("\u7649")}).toThrowError({name:"TypeError",message:"EncodingError U+7649"});
expect(() => {ms932Encoder.encode("\u764A")}).toThrowError({name:"TypeError",message:"EncodingError U+764A"});
expect(() => {ms932Encoder.encode("\u764B")}).toThrowError({name:"TypeError",message:"EncodingError U+764B"});
expect([...ms932Encoder.encode("癌")].join(",")).toBe("138,224"); // U+764C
expect(() => {ms932Encoder.encode("\u764D")}).toThrowError({name:"TypeError",message:"EncodingError U+764D"});
expect(() => {ms932Encoder.encode("\u764E")}).toThrowError({name:"TypeError",message:"EncodingError U+764E"});
expect(() => {ms932Encoder.encode("\u764F")}).toThrowError({name:"TypeError",message:"EncodingError U+764F"});
expect(() => {ms932Encoder.encode("\u7650")}).toThrowError({name:"TypeError",message:"EncodingError U+7650"});
expect(() => {ms932Encoder.encode("\u7651")}).toThrowError({name:"TypeError",message:"EncodingError U+7651"});
expect([...ms932Encoder.encode("癒")].join(",")).toBe("150,252"); // U+7652
expect(() => {ms932Encoder.encode("\u7653")}).toThrowError({name:"TypeError",message:"EncodingError U+7653"});
expect(() => {ms932Encoder.encode("\u7654")}).toThrowError({name:"TypeError",message:"EncodingError U+7654"});
expect(() => {ms932Encoder.encode("\u7655")}).toThrowError({name:"TypeError",message:"EncodingError U+7655"});
expect([...ms932Encoder.encode("癖")].join(",")).toBe("149,200"); // U+7656
expect(() => {ms932Encoder.encode("\u7657")}).toThrowError({name:"TypeError",message:"EncodingError U+7657"});
expect([...ms932Encoder.encode("癘")].join(",")).toBe("225,150"); // U+7658
expect(() => {ms932Encoder.encode("\u7659")}).toThrowError({name:"TypeError",message:"EncodingError U+7659"});
expect(() => {ms932Encoder.encode("\u765A")}).toThrowError({name:"TypeError",message:"EncodingError U+765A"});
expect(() => {ms932Encoder.encode("\u765B")}).toThrowError({name:"TypeError",message:"EncodingError U+765B"});
expect([...ms932Encoder.encode("癜")].join(",")).toBe("225,149"); // U+765C
expect(() => {ms932Encoder.encode("\u765D")}).toThrowError({name:"TypeError",message:"EncodingError U+765D"});
expect(() => {ms932Encoder.encode("\u765E")}).toThrowError({name:"TypeError",message:"EncodingError U+765E"});
expect(() => {ms932Encoder.encode("\u765F")}).toThrowError({name:"TypeError",message:"EncodingError U+765F"});
expect(() => {ms932Encoder.encode("\u7660")}).toThrowError({name:"TypeError",message:"EncodingError U+7660"});
expect([...ms932Encoder.encode("癡癢")].join(",")).toBe("225,151,225,152"); // U+7661
expect(() => {ms932Encoder.encode("\u7663")}).toThrowError({name:"TypeError",message:"EncodingError U+7663"});
expect(() => {ms932Encoder.encode("\u7664")}).toThrowError({name:"TypeError",message:"EncodingError U+7664"});
expect(() => {ms932Encoder.encode("\u7665")}).toThrowError({name:"TypeError",message:"EncodingError U+7665"});
expect(() => {ms932Encoder.encode("\u7666")}).toThrowError({name:"TypeError",message:"EncodingError U+7666"});
expect([...ms932Encoder.encode("癧癨癩癪")].join(",")).toBe("225,156,225,153,225,154,225,155"); // U+7667
expect(() => {ms932Encoder.encode("\u766B")}).toThrowError({name:"TypeError",message:"EncodingError U+766B"});
expect([...ms932Encoder.encode("癬")].join(",")).toBe("225,157"); // U+766C
expect(() => {ms932Encoder.encode("\u766D")}).toThrowError({name:"TypeError",message:"EncodingError U+766D"});
expect(() => {ms932Encoder.encode("\u766E")}).toThrowError({name:"TypeError",message:"EncodingError U+766E"});
expect(() => {ms932Encoder.encode("\u766F")}).toThrowError({name:"TypeError",message:"EncodingError U+766F"});
expect([...ms932Encoder.encode("癰")].join(",")).toBe("225,158"); // U+7670
expect(() => {ms932Encoder.encode("\u7671")}).toThrowError({name:"TypeError",message:"EncodingError U+7671"});
expect([...ms932Encoder.encode("癲")].join(",")).toBe("225,159"); // U+7672
expect(() => {ms932Encoder.encode("\u7673")}).toThrowError({name:"TypeError",message:"EncodingError U+7673"});
expect(() => {ms932Encoder.encode("\u7674")}).toThrowError({name:"TypeError",message:"EncodingError U+7674"});
expect(() => {ms932Encoder.encode("\u7675")}).toThrowError({name:"TypeError",message:"EncodingError U+7675"});
expect([...ms932Encoder.encode("癶")].join(",")).toBe("225,160"); // U+7676
expect(() => {ms932Encoder.encode("\u7677")}).toThrowError({name:"TypeError",message:"EncodingError U+7677"});
expect([...ms932Encoder.encode("癸")].join(",")).toBe("225,161"); // U+7678
expect(() => {ms932Encoder.encode("\u7679")}).toThrowError({name:"TypeError",message:"EncodingError U+7679"});
expect([...ms932Encoder.encode("発登發白百")].join(",")).toBe("148,173,147,111,225,162,148,146,149,83"); // U+767A
expect(() => {ms932Encoder.encode("\u767F")}).toThrowError({name:"TypeError",message:"EncodingError U+767F"});
expect([...ms932Encoder.encode("皀")].join(",")).toBe("225,163"); // U+7680
expect(() => {ms932Encoder.encode("\u7681")}).toThrowError({name:"TypeError",message:"EncodingError U+7681"});
expect([...ms932Encoder.encode("皂皃的")].join(",")).toBe("251,112,225,164,147,73"); // U+7682
expect(() => {ms932Encoder.encode("\u7685")}).toThrowError({name:"TypeError",message:"EncodingError U+7685"});
expect([...ms932Encoder.encode("皆皇皈")].join(",")).toBe("138,70,141,99,225,165"); // U+7686
expect(() => {ms932Encoder.encode("\u7689")}).toThrowError({name:"TypeError",message:"EncodingError U+7689"});
expect(() => {ms932Encoder.encode("\u768A")}).toThrowError({name:"TypeError",message:"EncodingError U+768A"});
expect([...ms932Encoder.encode("皋")].join(",")).toBe("225,166"); // U+768B
expect(() => {ms932Encoder.encode("\u768C")}).toThrowError({name:"TypeError",message:"EncodingError U+768C"});
expect(() => {ms932Encoder.encode("\u768D")}).toThrowError({name:"TypeError",message:"EncodingError U+768D"});
expect([...ms932Encoder.encode("皎")].join(",")).toBe("225,167"); // U+768E
expect(() => {ms932Encoder.encode("\u768F")}).toThrowError({name:"TypeError",message:"EncodingError U+768F"});
expect([...ms932Encoder.encode("皐")].join(",")).toBe("142,72"); // U+7690
expect(() => {ms932Encoder.encode("\u7691")}).toThrowError({name:"TypeError",message:"EncodingError U+7691"});
expect(() => {ms932Encoder.encode("\u7692")}).toThrowError({name:"TypeError",message:"EncodingError U+7692"});
expect([...ms932Encoder.encode("皓")].join(",")).toBe("225,169"); // U+7693
expect(() => {ms932Encoder.encode("\u7694")}).toThrowError({name:"TypeError",message:"EncodingError U+7694"});
expect(() => {ms932Encoder.encode("\u7695")}).toThrowError({name:"TypeError",message:"EncodingError U+7695"});
expect([...ms932Encoder.encode("皖")].join(",")).toBe("225,168"); // U+7696
expect(() => {ms932Encoder.encode("\u7697")}).toThrowError({name:"TypeError",message:"EncodingError U+7697"});
expect(() => {ms932Encoder.encode("\u7698")}).toThrowError({name:"TypeError",message:"EncodingError U+7698"});
expect([...ms932Encoder.encode("皙皚皛皜")].join(",")).toBe("225,170,225,171,251,115,251,113"); // U+7699
expect(() => {ms932Encoder.encode("\u769D")}).toThrowError({name:"TypeError",message:"EncodingError U+769D"});
expect([...ms932Encoder.encode("皞")].join(",")).toBe("251,114"); // U+769E
expect(() => {ms932Encoder.encode("\u769F")}).toThrowError({name:"TypeError",message:"EncodingError U+769F"});
expect(() => {ms932Encoder.encode("\u76A0")}).toThrowError({name:"TypeError",message:"EncodingError U+76A0"});
expect(() => {ms932Encoder.encode("\u76A1")}).toThrowError({name:"TypeError",message:"EncodingError U+76A1"});
expect(() => {ms932Encoder.encode("\u76A2")}).toThrowError({name:"TypeError",message:"EncodingError U+76A2"});
expect(() => {ms932Encoder.encode("\u76A3")}).toThrowError({name:"TypeError",message:"EncodingError U+76A3"});
expect(() => {ms932Encoder.encode("\u76A4")}).toThrowError({name:"TypeError",message:"EncodingError U+76A4"});
expect(() => {ms932Encoder.encode("\u76A5")}).toThrowError({name:"TypeError",message:"EncodingError U+76A5"});
expect([...ms932Encoder.encode("皦")].join(",")).toBe("251,116"); // U+76A6
expect(() => {ms932Encoder.encode("\u76A7")}).toThrowError({name:"TypeError",message:"EncodingError U+76A7"});
expect(() => {ms932Encoder.encode("\u76A8")}).toThrowError({name:"TypeError",message:"EncodingError U+76A8"});
expect(() => {ms932Encoder.encode("\u76A9")}).toThrowError({name:"TypeError",message:"EncodingError U+76A9"});
expect(() => {ms932Encoder.encode("\u76AA")}).toThrowError({name:"TypeError",message:"EncodingError U+76AA"});
expect(() => {ms932Encoder.encode("\u76AB")}).toThrowError({name:"TypeError",message:"EncodingError U+76AB"});
expect(() => {ms932Encoder.encode("\u76AC")}).toThrowError({name:"TypeError",message:"EncodingError U+76AC"});
expect(() => {ms932Encoder.encode("\u76AD")}).toThrowError({name:"TypeError",message:"EncodingError U+76AD"});
expect([...ms932Encoder.encode("皮")].join(",")).toBe("148,231"); // U+76AE
expect(() => {ms932Encoder.encode("\u76AF")}).toThrowError({name:"TypeError",message:"EncodingError U+76AF"});
expect([...ms932Encoder.encode("皰")].join(",")).toBe("225,172"); // U+76B0
expect(() => {ms932Encoder.encode("\u76B1")}).toThrowError({name:"TypeError",message:"EncodingError U+76B1"});
expect(() => {ms932Encoder.encode("\u76B2")}).toThrowError({name:"TypeError",message:"EncodingError U+76B2"});
expect(() => {ms932Encoder.encode("\u76B3")}).toThrowError({name:"TypeError",message:"EncodingError U+76B3"});
expect([...ms932Encoder.encode("皴")].join(",")).toBe("225,173"); // U+76B4
expect(() => {ms932Encoder.encode("\u76B5")}).toThrowError({name:"TypeError",message:"EncodingError U+76B5"});
expect(() => {ms932Encoder.encode("\u76B6")}).toThrowError({name:"TypeError",message:"EncodingError U+76B6"});
expect([...ms932Encoder.encode("皷皸皹皺")].join(",")).toBe("234,137,225,174,225,175,225,176"); // U+76B7
expect(() => {ms932Encoder.encode("\u76BB")}).toThrowError({name:"TypeError",message:"EncodingError U+76BB"});
expect(() => {ms932Encoder.encode("\u76BC")}).toThrowError({name:"TypeError",message:"EncodingError U+76BC"});
expect(() => {ms932Encoder.encode("\u76BD")}).toThrowError({name:"TypeError",message:"EncodingError U+76BD"});
expect(() => {ms932Encoder.encode("\u76BE")}).toThrowError({name:"TypeError",message:"EncodingError U+76BE"});
expect([...ms932Encoder.encode("皿")].join(",")).toBe("142,77"); // U+76BF
expect(() => {ms932Encoder.encode("\u76C0")}).toThrowError({name:"TypeError",message:"EncodingError U+76C0"});
expect(() => {ms932Encoder.encode("\u76C1")}).toThrowError({name:"TypeError",message:"EncodingError U+76C1"});
expect([...ms932Encoder.encode("盂盃")].join(",")).toBe("225,177,148,117"); // U+76C2
expect(() => {ms932Encoder.encode("\u76C4")}).toThrowError({name:"TypeError",message:"EncodingError U+76C4"});
expect(() => {ms932Encoder.encode("\u76C5")}).toThrowError({name:"TypeError",message:"EncodingError U+76C5"});
expect([...ms932Encoder.encode("盆")].join(",")).toBe("150,126"); // U+76C6
expect(() => {ms932Encoder.encode("\u76C7")}).toThrowError({name:"TypeError",message:"EncodingError U+76C7"});
expect([...ms932Encoder.encode("盈")].join(",")).toBe("137,109"); // U+76C8
expect(() => {ms932Encoder.encode("\u76C9")}).toThrowError({name:"TypeError",message:"EncodingError U+76C9"});
expect([...ms932Encoder.encode("益")].join(",")).toBe("137,118"); // U+76CA
expect(() => {ms932Encoder.encode("\u76CB")}).toThrowError({name:"TypeError",message:"EncodingError U+76CB"});
expect(() => {ms932Encoder.encode("\u76CC")}).toThrowError({name:"TypeError",message:"EncodingError U+76CC"});
expect([...ms932Encoder.encode("盍")].join(",")).toBe("225,178"); // U+76CD
expect(() => {ms932Encoder.encode("\u76CE")}).toThrowError({name:"TypeError",message:"EncodingError U+76CE"});
expect(() => {ms932Encoder.encode("\u76CF")}).toThrowError({name:"TypeError",message:"EncodingError U+76CF"});
expect(() => {ms932Encoder.encode("\u76D0")}).toThrowError({name:"TypeError",message:"EncodingError U+76D0"});
expect(() => {ms932Encoder.encode("\u76D1")}).toThrowError({name:"TypeError",message:"EncodingError U+76D1"});
expect([...ms932Encoder.encode("盒")].join(",")).toBe("225,180"); // U+76D2
expect(() => {ms932Encoder.encode("\u76D3")}).toThrowError({name:"TypeError",message:"EncodingError U+76D3"});
expect(() => {ms932Encoder.encode("\u76D4")}).toThrowError({name:"TypeError",message:"EncodingError U+76D4"});
expect(() => {ms932Encoder.encode("\u76D5")}).toThrowError({name:"TypeError",message:"EncodingError U+76D5"});
expect([...ms932Encoder.encode("盖盗")].join(",")).toBe("225,179,147,144"); // U+76D6
expect(() => {ms932Encoder.encode("\u76D8")}).toThrowError({name:"TypeError",message:"EncodingError U+76D8"});
expect(() => {ms932Encoder.encode("\u76D9")}).toThrowError({name:"TypeError",message:"EncodingError U+76D9"});
expect(() => {ms932Encoder.encode("\u76DA")}).toThrowError({name:"TypeError",message:"EncodingError U+76DA"});
expect([...ms932Encoder.encode("盛盜")].join(",")).toBe("144,183,159,88"); // U+76DB
expect(() => {ms932Encoder.encode("\u76DD")}).toThrowError({name:"TypeError",message:"EncodingError U+76DD"});
expect([...ms932Encoder.encode("盞盟")].join(",")).toBe("225,181,150,191"); // U+76DE
expect(() => {ms932Encoder.encode("\u76E0")}).toThrowError({name:"TypeError",message:"EncodingError U+76E0"});
expect([...ms932Encoder.encode("盡")].join(",")).toBe("225,182"); // U+76E1
expect(() => {ms932Encoder.encode("\u76E2")}).toThrowError({name:"TypeError",message:"EncodingError U+76E2"});
expect([...ms932Encoder.encode("監盤盥")].join(",")).toBe("138,196,148,213,225,183"); // U+76E3
expect(() => {ms932Encoder.encode("\u76E6")}).toThrowError({name:"TypeError",message:"EncodingError U+76E6"});
expect([...ms932Encoder.encode("盧")].join(",")).toBe("225,184"); // U+76E7
expect(() => {ms932Encoder.encode("\u76E8")}).toThrowError({name:"TypeError",message:"EncodingError U+76E8"});
expect(() => {ms932Encoder.encode("\u76E9")}).toThrowError({name:"TypeError",message:"EncodingError U+76E9"});
expect([...ms932Encoder.encode("盪")].join(",")).toBe("225,185"); // U+76EA
expect(() => {ms932Encoder.encode("\u76EB")}).toThrowError({name:"TypeError",message:"EncodingError U+76EB"});
expect(() => {ms932Encoder.encode("\u76EC")}).toThrowError({name:"TypeError",message:"EncodingError U+76EC"});
expect(() => {ms932Encoder.encode("\u76ED")}).toThrowError({name:"TypeError",message:"EncodingError U+76ED"});
expect([...ms932Encoder.encode("目")].join(",")).toBe("150,218"); // U+76EE
expect(() => {ms932Encoder.encode("\u76EF")}).toThrowError({name:"TypeError",message:"EncodingError U+76EF"});
expect(() => {ms932Encoder.encode("\u76F0")}).toThrowError({name:"TypeError",message:"EncodingError U+76F0"});
expect(() => {ms932Encoder.encode("\u76F1")}).toThrowError({name:"TypeError",message:"EncodingError U+76F1"});
expect([...ms932Encoder.encode("盲")].join(",")).toBe("150,211"); // U+76F2
expect(() => {ms932Encoder.encode("\u76F3")}).toThrowError({name:"TypeError",message:"EncodingError U+76F3"});
expect([...ms932Encoder.encode("直")].join(",")).toBe("146,188"); // U+76F4
expect(() => {ms932Encoder.encode("\u76F5")}).toThrowError({name:"TypeError",message:"EncodingError U+76F5"});
expect(() => {ms932Encoder.encode("\u76F6")}).toThrowError({name:"TypeError",message:"EncodingError U+76F6"});
expect(() => {ms932Encoder.encode("\u76F7")}).toThrowError({name:"TypeError",message:"EncodingError U+76F7"});
expect([...ms932Encoder.encode("相")].join(",")).toBe("145,138"); // U+76F8
expect(() => {ms932Encoder.encode("\u76F9")}).toThrowError({name:"TypeError",message:"EncodingError U+76F9"});
expect(() => {ms932Encoder.encode("\u76FA")}).toThrowError({name:"TypeError",message:"EncodingError U+76FA"});
expect([...ms932Encoder.encode("盻")].join(",")).toBe("225,187"); // U+76FB
expect(() => {ms932Encoder.encode("\u76FC")}).toThrowError({name:"TypeError",message:"EncodingError U+76FC"});
expect(() => {ms932Encoder.encode("\u76FD")}).toThrowError({name:"TypeError",message:"EncodingError U+76FD"});
expect([...ms932Encoder.encode("盾")].join(",")).toBe("143,130"); // U+76FE
expect(() => {ms932Encoder.encode("\u76FF")}).toThrowError({name:"TypeError",message:"EncodingError U+76FF"});
expect(() => {ms932Encoder.encode("\u7700")}).toThrowError({name:"TypeError",message:"EncodingError U+7700"});
expect([...ms932Encoder.encode("省")].join(",")).toBe("143,200"); // U+7701
expect(() => {ms932Encoder.encode("\u7702")}).toThrowError({name:"TypeError",message:"EncodingError U+7702"});
expect(() => {ms932Encoder.encode("\u7703")}).toThrowError({name:"TypeError",message:"EncodingError U+7703"});
expect([...ms932Encoder.encode("眄")].join(",")).toBe("225,190"); // U+7704
expect(() => {ms932Encoder.encode("\u7705")}).toThrowError({name:"TypeError",message:"EncodingError U+7705"});
expect(() => {ms932Encoder.encode("\u7706")}).toThrowError({name:"TypeError",message:"EncodingError U+7706"});
expect([...ms932Encoder.encode("眇眈眉")].join(",")).toBe("225,189,225,188,148,251"); // U+7707
expect(() => {ms932Encoder.encode("\u770A")}).toThrowError({name:"TypeError",message:"EncodingError U+770A"});
expect([...ms932Encoder.encode("看県")].join(",")).toBe("138,197,140,167"); // U+770B
expect(() => {ms932Encoder.encode("\u770D")}).toThrowError({name:"TypeError",message:"EncodingError U+770D"});
expect(() => {ms932Encoder.encode("\u770E")}).toThrowError({name:"TypeError",message:"EncodingError U+770E"});
expect(() => {ms932Encoder.encode("\u770F")}).toThrowError({name:"TypeError",message:"EncodingError U+770F"});
expect(() => {ms932Encoder.encode("\u7710")}).toThrowError({name:"TypeError",message:"EncodingError U+7710"});
expect(() => {ms932Encoder.encode("\u7711")}).toThrowError({name:"TypeError",message:"EncodingError U+7711"});
expect(() => {ms932Encoder.encode("\u7712")}).toThrowError({name:"TypeError",message:"EncodingError U+7712"});
expect(() => {ms932Encoder.encode("\u7713")}).toThrowError({name:"TypeError",message:"EncodingError U+7713"});
expect(() => {ms932Encoder.encode("\u7714")}).toThrowError({name:"TypeError",message:"EncodingError U+7714"});
expect(() => {ms932Encoder.encode("\u7715")}).toThrowError({name:"TypeError",message:"EncodingError U+7715"});
expect(() => {ms932Encoder.encode("\u7716")}).toThrowError({name:"TypeError",message:"EncodingError U+7716"});
expect(() => {ms932Encoder.encode("\u7717")}).toThrowError({name:"TypeError",message:"EncodingError U+7717"});
expect(() => {ms932Encoder.encode("\u7718")}).toThrowError({name:"TypeError",message:"EncodingError U+7718"});
expect(() => {ms932Encoder.encode("\u7719")}).toThrowError({name:"TypeError",message:"EncodingError U+7719"});
expect(() => {ms932Encoder.encode("\u771A")}).toThrowError({name:"TypeError",message:"EncodingError U+771A"});
expect([...ms932Encoder.encode("眛")].join(",")).toBe("225,196"); // U+771B
expect(() => {ms932Encoder.encode("\u771C")}).toThrowError({name:"TypeError",message:"EncodingError U+771C"});
expect(() => {ms932Encoder.encode("\u771D")}).toThrowError({name:"TypeError",message:"EncodingError U+771D"});
expect([...ms932Encoder.encode("眞真眠")].join(",")).toBe("225,193,144,94,150,176"); // U+771E
expect(() => {ms932Encoder.encode("\u7721")}).toThrowError({name:"TypeError",message:"EncodingError U+7721"});
expect(() => {ms932Encoder.encode("\u7722")}).toThrowError({name:"TypeError",message:"EncodingError U+7722"});
expect(() => {ms932Encoder.encode("\u7723")}).toThrowError({name:"TypeError",message:"EncodingError U+7723"});
expect([...ms932Encoder.encode("眤眥眦")].join(",")).toBe("225,192,225,194,225,195"); // U+7724
expect(() => {ms932Encoder.encode("\u7727")}).toThrowError({name:"TypeError",message:"EncodingError U+7727"});
expect(() => {ms932Encoder.encode("\u7728")}).toThrowError({name:"TypeError",message:"EncodingError U+7728"});
expect([...ms932Encoder.encode("眩")].join(",")).toBe("225,191"); // U+7729
expect(() => {ms932Encoder.encode("\u772A")}).toThrowError({name:"TypeError",message:"EncodingError U+772A"});
expect(() => {ms932Encoder.encode("\u772B")}).toThrowError({name:"TypeError",message:"EncodingError U+772B"});
expect(() => {ms932Encoder.encode("\u772C")}).toThrowError({name:"TypeError",message:"EncodingError U+772C"});
expect(() => {ms932Encoder.encode("\u772D")}).toThrowError({name:"TypeError",message:"EncodingError U+772D"});
expect(() => {ms932Encoder.encode("\u772E")}).toThrowError({name:"TypeError",message:"EncodingError U+772E"});
expect(() => {ms932Encoder.encode("\u772F")}).toThrowError({name:"TypeError",message:"EncodingError U+772F"});
expect(() => {ms932Encoder.encode("\u7730")}).toThrowError({name:"TypeError",message:"EncodingError U+7730"});
expect(() => {ms932Encoder.encode("\u7731")}).toThrowError({name:"TypeError",message:"EncodingError U+7731"});
expect(() => {ms932Encoder.encode("\u7732")}).toThrowError({name:"TypeError",message:"EncodingError U+7732"});
expect(() => {ms932Encoder.encode("\u7733")}).toThrowError({name:"TypeError",message:"EncodingError U+7733"});
expect(() => {ms932Encoder.encode("\u7734")}).toThrowError({name:"TypeError",message:"EncodingError U+7734"});
expect(() => {ms932Encoder.encode("\u7735")}).toThrowError({name:"TypeError",message:"EncodingError U+7735"});
expect(() => {ms932Encoder.encode("\u7736")}).toThrowError({name:"TypeError",message:"EncodingError U+7736"});
expect([...ms932Encoder.encode("眷眸")].join(",")).toBe("225,197,225,198"); // U+7737
expect(() => {ms932Encoder.encode("\u7739")}).toThrowError({name:"TypeError",message:"EncodingError U+7739"});
expect([...ms932Encoder.encode("眺")].join(",")).toBe("146,173"); // U+773A
expect(() => {ms932Encoder.encode("\u773B")}).toThrowError({name:"TypeError",message:"EncodingError U+773B"});
expect([...ms932Encoder.encode("眼")].join(",")).toBe("138,225"); // U+773C
expect(() => {ms932Encoder.encode("\u773D")}).toThrowError({name:"TypeError",message:"EncodingError U+773D"});
expect(() => {ms932Encoder.encode("\u773E")}).toThrowError({name:"TypeError",message:"EncodingError U+773E"});
expect(() => {ms932Encoder.encode("\u773F")}).toThrowError({name:"TypeError",message:"EncodingError U+773F"});
expect([...ms932Encoder.encode("着")].join(",")).toBe("146,133"); // U+7740
expect(() => {ms932Encoder.encode("\u7741")}).toThrowError({name:"TypeError",message:"EncodingError U+7741"});
expect(() => {ms932Encoder.encode("\u7742")}).toThrowError({name:"TypeError",message:"EncodingError U+7742"});
expect(() => {ms932Encoder.encode("\u7743")}).toThrowError({name:"TypeError",message:"EncodingError U+7743"});
expect(() => {ms932Encoder.encode("\u7744")}).toThrowError({name:"TypeError",message:"EncodingError U+7744"});
expect(() => {ms932Encoder.encode("\u7745")}).toThrowError({name:"TypeError",message:"EncodingError U+7745"});
expect([...ms932Encoder.encode("睆睇")].join(",")).toBe("251,118,225,199"); // U+7746
expect(() => {ms932Encoder.encode("\u7748")}).toThrowError({name:"TypeError",message:"EncodingError U+7748"});
expect(() => {ms932Encoder.encode("\u7749")}).toThrowError({name:"TypeError",message:"EncodingError U+7749"});
expect(() => {ms932Encoder.encode("\u774A")}).toThrowError({name:"TypeError",message:"EncodingError U+774A"});
expect(() => {ms932Encoder.encode("\u774B")}).toThrowError({name:"TypeError",message:"EncodingError U+774B"});
expect(() => {ms932Encoder.encode("\u774C")}).toThrowError({name:"TypeError",message:"EncodingError U+774C"});
expect(() => {ms932Encoder.encode("\u774D")}).toThrowError({name:"TypeError",message:"EncodingError U+774D"});
expect(() => {ms932Encoder.encode("\u774E")}).toThrowError({name:"TypeError",message:"EncodingError U+774E"});
expect(() => {ms932Encoder.encode("\u774F")}).toThrowError({name:"TypeError",message:"EncodingError U+774F"});
expect(() => {ms932Encoder.encode("\u7750")}).toThrowError({name:"TypeError",message:"EncodingError U+7750"});
expect(() => {ms932Encoder.encode("\u7751")}).toThrowError({name:"TypeError",message:"EncodingError U+7751"});
expect(() => {ms932Encoder.encode("\u7752")}).toThrowError({name:"TypeError",message:"EncodingError U+7752"});
expect(() => {ms932Encoder.encode("\u7753")}).toThrowError({name:"TypeError",message:"EncodingError U+7753"});
expect(() => {ms932Encoder.encode("\u7754")}).toThrowError({name:"TypeError",message:"EncodingError U+7754"});
expect(() => {ms932Encoder.encode("\u7755")}).toThrowError({name:"TypeError",message:"EncodingError U+7755"});
expect(() => {ms932Encoder.encode("\u7756")}).toThrowError({name:"TypeError",message:"EncodingError U+7756"});
expect(() => {ms932Encoder.encode("\u7757")}).toThrowError({name:"TypeError",message:"EncodingError U+7757"});
expect(() => {ms932Encoder.encode("\u7758")}).toThrowError({name:"TypeError",message:"EncodingError U+7758"});
expect(() => {ms932Encoder.encode("\u7759")}).toThrowError({name:"TypeError",message:"EncodingError U+7759"});
expect([...ms932Encoder.encode("睚睛")].join(",")).toBe("225,200,225,203"); // U+775A
expect(() => {ms932Encoder.encode("\u775C")}).toThrowError({name:"TypeError",message:"EncodingError U+775C"});
expect(() => {ms932Encoder.encode("\u775D")}).toThrowError({name:"TypeError",message:"EncodingError U+775D"});
expect(() => {ms932Encoder.encode("\u775E")}).toThrowError({name:"TypeError",message:"EncodingError U+775E"});
expect(() => {ms932Encoder.encode("\u775F")}).toThrowError({name:"TypeError",message:"EncodingError U+775F"});
expect(() => {ms932Encoder.encode("\u7760")}).toThrowError({name:"TypeError",message:"EncodingError U+7760"});
expect([...ms932Encoder.encode("睡")].join(",")).toBe("144,135"); // U+7761
expect(() => {ms932Encoder.encode("\u7762")}).toThrowError({name:"TypeError",message:"EncodingError U+7762"});
expect([...ms932Encoder.encode("督")].join(",")).toBe("147,194"); // U+7763
expect(() => {ms932Encoder.encode("\u7764")}).toThrowError({name:"TypeError",message:"EncodingError U+7764"});
expect([...ms932Encoder.encode("睥睦")].join(",")).toBe("225,204,150,114"); // U+7765
expect(() => {ms932Encoder.encode("\u7767")}).toThrowError({name:"TypeError",message:"EncodingError U+7767"});
expect([...ms932Encoder.encode("睨")].join(",")).toBe("225,201"); // U+7768
expect(() => {ms932Encoder.encode("\u7769")}).toThrowError({name:"TypeError",message:"EncodingError U+7769"});
expect(() => {ms932Encoder.encode("\u776A")}).toThrowError({name:"TypeError",message:"EncodingError U+776A"});
expect([...ms932Encoder.encode("睫")].join(",")).toBe("225,202"); // U+776B
expect(() => {ms932Encoder.encode("\u776C")}).toThrowError({name:"TypeError",message:"EncodingError U+776C"});
expect(() => {ms932Encoder.encode("\u776D")}).toThrowError({name:"TypeError",message:"EncodingError U+776D"});
expect(() => {ms932Encoder.encode("\u776E")}).toThrowError({name:"TypeError",message:"EncodingError U+776E"});
expect(() => {ms932Encoder.encode("\u776F")}).toThrowError({name:"TypeError",message:"EncodingError U+776F"});
expect(() => {ms932Encoder.encode("\u7770")}).toThrowError({name:"TypeError",message:"EncodingError U+7770"});
expect(() => {ms932Encoder.encode("\u7771")}).toThrowError({name:"TypeError",message:"EncodingError U+7771"});
expect(() => {ms932Encoder.encode("\u7772")}).toThrowError({name:"TypeError",message:"EncodingError U+7772"});
expect(() => {ms932Encoder.encode("\u7773")}).toThrowError({name:"TypeError",message:"EncodingError U+7773"});
expect(() => {ms932Encoder.encode("\u7774")}).toThrowError({name:"TypeError",message:"EncodingError U+7774"});
expect(() => {ms932Encoder.encode("\u7775")}).toThrowError({name:"TypeError",message:"EncodingError U+7775"});
expect(() => {ms932Encoder.encode("\u7776")}).toThrowError({name:"TypeError",message:"EncodingError U+7776"});
expect(() => {ms932Encoder.encode("\u7777")}).toThrowError({name:"TypeError",message:"EncodingError U+7777"});
expect(() => {ms932Encoder.encode("\u7778")}).toThrowError({name:"TypeError",message:"EncodingError U+7778"});
expect([...ms932Encoder.encode("睹")].join(",")).toBe("225,207"); // U+7779
expect(() => {ms932Encoder.encode("\u777A")}).toThrowError({name:"TypeError",message:"EncodingError U+777A"});
expect(() => {ms932Encoder.encode("\u777B")}).toThrowError({name:"TypeError",message:"EncodingError U+777B"});
expect(() => {ms932Encoder.encode("\u777C")}).toThrowError({name:"TypeError",message:"EncodingError U+777C"});
expect(() => {ms932Encoder.encode("\u777D")}).toThrowError({name:"TypeError",message:"EncodingError U+777D"});
expect([...ms932Encoder.encode("睾睿")].join(",")).toBe("225,206,225,205"); // U+777E
expect(() => {ms932Encoder.encode("\u7780")}).toThrowError({name:"TypeError",message:"EncodingError U+7780"});
expect(() => {ms932Encoder.encode("\u7781")}).toThrowError({name:"TypeError",message:"EncodingError U+7781"});
expect(() => {ms932Encoder.encode("\u7782")}).toThrowError({name:"TypeError",message:"EncodingError U+7782"});
expect(() => {ms932Encoder.encode("\u7783")}).toThrowError({name:"TypeError",message:"EncodingError U+7783"});
expect(() => {ms932Encoder.encode("\u7784")}).toThrowError({name:"TypeError",message:"EncodingError U+7784"});
expect(() => {ms932Encoder.encode("\u7785")}).toThrowError({name:"TypeError",message:"EncodingError U+7785"});
expect(() => {ms932Encoder.encode("\u7786")}).toThrowError({name:"TypeError",message:"EncodingError U+7786"});
expect(() => {ms932Encoder.encode("\u7787")}).toThrowError({name:"TypeError",message:"EncodingError U+7787"});
expect(() => {ms932Encoder.encode("\u7788")}).toThrowError({name:"TypeError",message:"EncodingError U+7788"});
expect(() => {ms932Encoder.encode("\u7789")}).toThrowError({name:"TypeError",message:"EncodingError U+7789"});
expect(() => {ms932Encoder.encode("\u778A")}).toThrowError({name:"TypeError",message:"EncodingError U+778A"});
expect([...ms932Encoder.encode("瞋")].join(",")).toBe("225,209"); // U+778B
expect(() => {ms932Encoder.encode("\u778C")}).toThrowError({name:"TypeError",message:"EncodingError U+778C"});
expect(() => {ms932Encoder.encode("\u778D")}).toThrowError({name:"TypeError",message:"EncodingError U+778D"});
expect([...ms932Encoder.encode("瞎")].join(",")).toBe("225,208"); // U+778E
expect(() => {ms932Encoder.encode("\u778F")}).toThrowError({name:"TypeError",message:"EncodingError U+778F"});
expect(() => {ms932Encoder.encode("\u7790")}).toThrowError({name:"TypeError",message:"EncodingError U+7790"});
expect([...ms932Encoder.encode("瞑")].join(",")).toBe("225,210"); // U+7791
expect(() => {ms932Encoder.encode("\u7792")}).toThrowError({name:"TypeError",message:"EncodingError U+7792"});
expect(() => {ms932Encoder.encode("\u7793")}).toThrowError({name:"TypeError",message:"EncodingError U+7793"});
expect(() => {ms932Encoder.encode("\u7794")}).toThrowError({name:"TypeError",message:"EncodingError U+7794"});
expect(() => {ms932Encoder.encode("\u7795")}).toThrowError({name:"TypeError",message:"EncodingError U+7795"});
expect(() => {ms932Encoder.encode("\u7796")}).toThrowError({name:"TypeError",message:"EncodingError U+7796"});
expect(() => {ms932Encoder.encode("\u7797")}).toThrowError({name:"TypeError",message:"EncodingError U+7797"});
expect(() => {ms932Encoder.encode("\u7798")}).toThrowError({name:"TypeError",message:"EncodingError U+7798"});
expect(() => {ms932Encoder.encode("\u7799")}).toThrowError({name:"TypeError",message:"EncodingError U+7799"});
expect(() => {ms932Encoder.encode("\u779A")}).toThrowError({name:"TypeError",message:"EncodingError U+779A"});
expect(() => {ms932Encoder.encode("\u779B")}).toThrowError({name:"TypeError",message:"EncodingError U+779B"});
expect(() => {ms932Encoder.encode("\u779C")}).toThrowError({name:"TypeError",message:"EncodingError U+779C"});
expect(() => {ms932Encoder.encode("\u779D")}).toThrowError({name:"TypeError",message:"EncodingError U+779D"});
expect([...ms932Encoder.encode("瞞")].join(",")).toBe("225,212"); // U+779E
expect(() => {ms932Encoder.encode("\u779F")}).toThrowError({name:"TypeError",message:"EncodingError U+779F"});
expect([...ms932Encoder.encode("瞠")].join(",")).toBe("225,211"); // U+77A0
expect(() => {ms932Encoder.encode("\u77A1")}).toThrowError({name:"TypeError",message:"EncodingError U+77A1"});
expect(() => {ms932Encoder.encode("\u77A2")}).toThrowError({name:"TypeError",message:"EncodingError U+77A2"});
expect(() => {ms932Encoder.encode("\u77A3")}).toThrowError({name:"TypeError",message:"EncodingError U+77A3"});
expect(() => {ms932Encoder.encode("\u77A4")}).toThrowError({name:"TypeError",message:"EncodingError U+77A4"});
expect([...ms932Encoder.encode("瞥")].join(",")).toBe("149,203"); // U+77A5
expect(() => {ms932Encoder.encode("\u77A6")}).toThrowError({name:"TypeError",message:"EncodingError U+77A6"});
expect(() => {ms932Encoder.encode("\u77A7")}).toThrowError({name:"TypeError",message:"EncodingError U+77A7"});
expect(() => {ms932Encoder.encode("\u77A8")}).toThrowError({name:"TypeError",message:"EncodingError U+77A8"});
expect(() => {ms932Encoder.encode("\u77A9")}).toThrowError({name:"TypeError",message:"EncodingError U+77A9"});
expect(() => {ms932Encoder.encode("\u77AA")}).toThrowError({name:"TypeError",message:"EncodingError U+77AA"});
expect(() => {ms932Encoder.encode("\u77AB")}).toThrowError({name:"TypeError",message:"EncodingError U+77AB"});
expect([...ms932Encoder.encode("瞬瞭")].join(",")).toBe("143,117,151,196"); // U+77AC
expect(() => {ms932Encoder.encode("\u77AE")}).toThrowError({name:"TypeError",message:"EncodingError U+77AE"});
expect(() => {ms932Encoder.encode("\u77AF")}).toThrowError({name:"TypeError",message:"EncodingError U+77AF"});
expect([...ms932Encoder.encode("瞰")].join(",")).toBe("225,213"); // U+77B0
expect(() => {ms932Encoder.encode("\u77B1")}).toThrowError({name:"TypeError",message:"EncodingError U+77B1"});
expect(() => {ms932Encoder.encode("\u77B2")}).toThrowError({name:"TypeError",message:"EncodingError U+77B2"});
expect([...ms932Encoder.encode("瞳")].join(",")).toBe("147,181"); // U+77B3
expect(() => {ms932Encoder.encode("\u77B4")}).toThrowError({name:"TypeError",message:"EncodingError U+77B4"});
expect(() => {ms932Encoder.encode("\u77B5")}).toThrowError({name:"TypeError",message:"EncodingError U+77B5"});
expect([...ms932Encoder.encode("瞶")].join(",")).toBe("225,214"); // U+77B6
expect(() => {ms932Encoder.encode("\u77B7")}).toThrowError({name:"TypeError",message:"EncodingError U+77B7"});
expect(() => {ms932Encoder.encode("\u77B8")}).toThrowError({name:"TypeError",message:"EncodingError U+77B8"});
expect([...ms932Encoder.encode("瞹")].join(",")).toBe("225,215"); // U+77B9
expect(() => {ms932Encoder.encode("\u77BA")}).toThrowError({name:"TypeError",message:"EncodingError U+77BA"});
expect([...ms932Encoder.encode("瞻瞼瞽")].join(",")).toBe("225,219,225,217,225,218"); // U+77BB
expect(() => {ms932Encoder.encode("\u77BE")}).toThrowError({name:"TypeError",message:"EncodingError U+77BE"});
expect([...ms932Encoder.encode("瞿")].join(",")).toBe("225,216"); // U+77BF
expect(() => {ms932Encoder.encode("\u77C0")}).toThrowError({name:"TypeError",message:"EncodingError U+77C0"});
expect(() => {ms932Encoder.encode("\u77C1")}).toThrowError({name:"TypeError",message:"EncodingError U+77C1"});
expect(() => {ms932Encoder.encode("\u77C2")}).toThrowError({name:"TypeError",message:"EncodingError U+77C2"});
expect(() => {ms932Encoder.encode("\u77C3")}).toThrowError({name:"TypeError",message:"EncodingError U+77C3"});
expect(() => {ms932Encoder.encode("\u77C4")}).toThrowError({name:"TypeError",message:"EncodingError U+77C4"});
expect(() => {ms932Encoder.encode("\u77C5")}).toThrowError({name:"TypeError",message:"EncodingError U+77C5"});
expect(() => {ms932Encoder.encode("\u77C6")}).toThrowError({name:"TypeError",message:"EncodingError U+77C6"});
expect([...ms932Encoder.encode("矇")].join(",")).toBe("225,220"); // U+77C7
expect(() => {ms932Encoder.encode("\u77C8")}).toThrowError({name:"TypeError",message:"EncodingError U+77C8"});
expect(() => {ms932Encoder.encode("\u77C9")}).toThrowError({name:"TypeError",message:"EncodingError U+77C9"});
expect(() => {ms932Encoder.encode("\u77CA")}).toThrowError({name:"TypeError",message:"EncodingError U+77CA"});
expect(() => {ms932Encoder.encode("\u77CB")}).toThrowError({name:"TypeError",message:"EncodingError U+77CB"});
expect(() => {ms932Encoder.encode("\u77CC")}).toThrowError({name:"TypeError",message:"EncodingError U+77CC"});
expect([...ms932Encoder.encode("矍")].join(",")).toBe("225,221"); // U+77CD
expect(() => {ms932Encoder.encode("\u77CE")}).toThrowError({name:"TypeError",message:"EncodingError U+77CE"});
expect(() => {ms932Encoder.encode("\u77CF")}).toThrowError({name:"TypeError",message:"EncodingError U+77CF"});
expect(() => {ms932Encoder.encode("\u77D0")}).toThrowError({name:"TypeError",message:"EncodingError U+77D0"});
expect(() => {ms932Encoder.encode("\u77D1")}).toThrowError({name:"TypeError",message:"EncodingError U+77D1"});
expect(() => {ms932Encoder.encode("\u77D2")}).toThrowError({name:"TypeError",message:"EncodingError U+77D2"});
expect(() => {ms932Encoder.encode("\u77D3")}).toThrowError({name:"TypeError",message:"EncodingError U+77D3"});
expect(() => {ms932Encoder.encode("\u77D4")}).toThrowError({name:"TypeError",message:"EncodingError U+77D4"});
expect(() => {ms932Encoder.encode("\u77D5")}).toThrowError({name:"TypeError",message:"EncodingError U+77D5"});
expect(() => {ms932Encoder.encode("\u77D6")}).toThrowError({name:"TypeError",message:"EncodingError U+77D6"});
expect([...ms932Encoder.encode("矗")].join(",")).toBe("225,222"); // U+77D7
expect(() => {ms932Encoder.encode("\u77D8")}).toThrowError({name:"TypeError",message:"EncodingError U+77D8"});
expect(() => {ms932Encoder.encode("\u77D9")}).toThrowError({name:"TypeError",message:"EncodingError U+77D9"});
expect([...ms932Encoder.encode("矚矛矜")].join(",")).toBe("225,223,150,181,225,224"); // U+77DA
expect(() => {ms932Encoder.encode("\u77DD")}).toThrowError({name:"TypeError",message:"EncodingError U+77DD"});
expect(() => {ms932Encoder.encode("\u77DE")}).toThrowError({name:"TypeError",message:"EncodingError U+77DE"});
expect(() => {ms932Encoder.encode("\u77DF")}).toThrowError({name:"TypeError",message:"EncodingError U+77DF"});
expect(() => {ms932Encoder.encode("\u77E0")}).toThrowError({name:"TypeError",message:"EncodingError U+77E0"});
expect(() => {ms932Encoder.encode("\u77E1")}).toThrowError({name:"TypeError",message:"EncodingError U+77E1"});
expect([...ms932Encoder.encode("矢矣")].join(",")).toBe("150,238,225,225"); // U+77E2
expect(() => {ms932Encoder.encode("\u77E4")}).toThrowError({name:"TypeError",message:"EncodingError U+77E4"});
expect([...ms932Encoder.encode("知")].join(",")).toBe("146,109"); // U+77E5
expect(() => {ms932Encoder.encode("\u77E6")}).toThrowError({name:"TypeError",message:"EncodingError U+77E6"});
expect([...ms932Encoder.encode("矧")].join(",")).toBe("148,138"); // U+77E7
expect(() => {ms932Encoder.encode("\u77E8")}).toThrowError({name:"TypeError",message:"EncodingError U+77E8"});
expect([...ms932Encoder.encode("矩")].join(",")).toBe("139,233"); // U+77E9
expect(() => {ms932Encoder.encode("\u77EA")}).toThrowError({name:"TypeError",message:"EncodingError U+77EA"});
expect(() => {ms932Encoder.encode("\u77EB")}).toThrowError({name:"TypeError",message:"EncodingError U+77EB"});
expect(() => {ms932Encoder.encode("\u77EC")}).toThrowError({name:"TypeError",message:"EncodingError U+77EC"});
expect([...ms932Encoder.encode("短矮矯")].join(",")).toBe("146,90,225,226,139,184"); // U+77ED
expect(() => {ms932Encoder.encode("\u77F0")}).toThrowError({name:"TypeError",message:"EncodingError U+77F0"});
expect(() => {ms932Encoder.encode("\u77F1")}).toThrowError({name:"TypeError",message:"EncodingError U+77F1"});
expect(() => {ms932Encoder.encode("\u77F2")}).toThrowError({name:"TypeError",message:"EncodingError U+77F2"});
expect([...ms932Encoder.encode("石")].join(",")).toBe("144,206"); // U+77F3
expect(() => {ms932Encoder.encode("\u77F4")}).toThrowError({name:"TypeError",message:"EncodingError U+77F4"});
expect(() => {ms932Encoder.encode("\u77F5")}).toThrowError({name:"TypeError",message:"EncodingError U+77F5"});
expect(() => {ms932Encoder.encode("\u77F6")}).toThrowError({name:"TypeError",message:"EncodingError U+77F6"});
expect(() => {ms932Encoder.encode("\u77F7")}).toThrowError({name:"TypeError",message:"EncodingError U+77F7"});
expect(() => {ms932Encoder.encode("\u77F8")}).toThrowError({name:"TypeError",message:"EncodingError U+77F8"});
expect(() => {ms932Encoder.encode("\u77F9")}).toThrowError({name:"TypeError",message:"EncodingError U+77F9"});
expect(() => {ms932Encoder.encode("\u77FA")}).toThrowError({name:"TypeError",message:"EncodingError U+77FA"});
expect(() => {ms932Encoder.encode("\u77FB")}).toThrowError({name:"TypeError",message:"EncodingError U+77FB"});
expect([...ms932Encoder.encode("矼")].join(",")).toBe("225,227"); // U+77FC
expect(() => {ms932Encoder.encode("\u77FD")}).toThrowError({name:"TypeError",message:"EncodingError U+77FD"});
expect(() => {ms932Encoder.encode("\u77FE")}).toThrowError({name:"TypeError",message:"EncodingError U+77FE"});
expect(() => {ms932Encoder.encode("\u77FF")}).toThrowError({name:"TypeError",message:"EncodingError U+77FF"});
expect(() => {ms932Encoder.encode("\u7800")}).toThrowError({name:"TypeError",message:"EncodingError U+7800"});
expect(() => {ms932Encoder.encode("\u7801")}).toThrowError({name:"TypeError",message:"EncodingError U+7801"});
expect([...ms932Encoder.encode("砂")].join(",")).toBe("141,187"); // U+7802
expect(() => {ms932Encoder.encode("\u7803")}).toThrowError({name:"TypeError",message:"EncodingError U+7803"});
expect(() => {ms932Encoder.encode("\u7804")}).toThrowError({name:"TypeError",message:"EncodingError U+7804"});
expect(() => {ms932Encoder.encode("\u7805")}).toThrowError({name:"TypeError",message:"EncodingError U+7805"});
expect(() => {ms932Encoder.encode("\u7806")}).toThrowError({name:"TypeError",message:"EncodingError U+7806"});
expect(() => {ms932Encoder.encode("\u7807")}).toThrowError({name:"TypeError",message:"EncodingError U+7807"});
expect(() => {ms932Encoder.encode("\u7808")}).toThrowError({name:"TypeError",message:"EncodingError U+7808"});
expect(() => {ms932Encoder.encode("\u7809")}).toThrowError({name:"TypeError",message:"EncodingError U+7809"});
expect(() => {ms932Encoder.encode("\u780A")}).toThrowError({name:"TypeError",message:"EncodingError U+780A"});
expect(() => {ms932Encoder.encode("\u780B")}).toThrowError({name:"TypeError",message:"EncodingError U+780B"});
expect([...ms932Encoder.encode("砌")].join(",")).toBe("225,228"); // U+780C
expect(() => {ms932Encoder.encode("\u780D")}).toThrowError({name:"TypeError",message:"EncodingError U+780D"});
expect(() => {ms932Encoder.encode("\u780E")}).toThrowError({name:"TypeError",message:"EncodingError U+780E"});
expect(() => {ms932Encoder.encode("\u780F")}).toThrowError({name:"TypeError",message:"EncodingError U+780F"});
expect(() => {ms932Encoder.encode("\u7810")}).toThrowError({name:"TypeError",message:"EncodingError U+7810"});
expect(() => {ms932Encoder.encode("\u7811")}).toThrowError({name:"TypeError",message:"EncodingError U+7811"});
expect([...ms932Encoder.encode("砒")].join(",")).toBe("225,229"); // U+7812
expect(() => {ms932Encoder.encode("\u7813")}).toThrowError({name:"TypeError",message:"EncodingError U+7813"});
expect([...ms932Encoder.encode("研砕")].join(",")).toBe("140,164,141,211"); // U+7814
expect(() => {ms932Encoder.encode("\u7816")}).toThrowError({name:"TypeError",message:"EncodingError U+7816"});
expect(() => {ms932Encoder.encode("\u7817")}).toThrowError({name:"TypeError",message:"EncodingError U+7817"});
expect(() => {ms932Encoder.encode("\u7818")}).toThrowError({name:"TypeError",message:"EncodingError U+7818"});
expect(() => {ms932Encoder.encode("\u7819")}).toThrowError({name:"TypeError",message:"EncodingError U+7819"});
expect(() => {ms932Encoder.encode("\u781A")}).toThrowError({name:"TypeError",message:"EncodingError U+781A"});
expect(() => {ms932Encoder.encode("\u781B")}).toThrowError({name:"TypeError",message:"EncodingError U+781B"});
expect(() => {ms932Encoder.encode("\u781C")}).toThrowError({name:"TypeError",message:"EncodingError U+781C"});
expect(() => {ms932Encoder.encode("\u781D")}).toThrowError({name:"TypeError",message:"EncodingError U+781D"});
expect(() => {ms932Encoder.encode("\u781E")}).toThrowError({name:"TypeError",message:"EncodingError U+781E"});
expect(() => {ms932Encoder.encode("\u781F")}).toThrowError({name:"TypeError",message:"EncodingError U+781F"});
expect([...ms932Encoder.encode("砠砡")].join(",")).toBe("225,231,251,120"); // U+7820
expect(() => {ms932Encoder.encode("\u7822")}).toThrowError({name:"TypeError",message:"EncodingError U+7822"});
expect(() => {ms932Encoder.encode("\u7823")}).toThrowError({name:"TypeError",message:"EncodingError U+7823"});
expect(() => {ms932Encoder.encode("\u7824")}).toThrowError({name:"TypeError",message:"EncodingError U+7824"});
expect([...ms932Encoder.encode("砥砦砧")].join(",")).toBe("147,117,141,212,139,109"); // U+7825
expect(() => {ms932Encoder.encode("\u7828")}).toThrowError({name:"TypeError",message:"EncodingError U+7828"});
expect(() => {ms932Encoder.encode("\u7829")}).toThrowError({name:"TypeError",message:"EncodingError U+7829"});
expect(() => {ms932Encoder.encode("\u782A")}).toThrowError({name:"TypeError",message:"EncodingError U+782A"});
expect(() => {ms932Encoder.encode("\u782B")}).toThrowError({name:"TypeError",message:"EncodingError U+782B"});
expect(() => {ms932Encoder.encode("\u782C")}).toThrowError({name:"TypeError",message:"EncodingError U+782C"});
expect(() => {ms932Encoder.encode("\u782D")}).toThrowError({name:"TypeError",message:"EncodingError U+782D"});
expect(() => {ms932Encoder.encode("\u782E")}).toThrowError({name:"TypeError",message:"EncodingError U+782E"});
expect(() => {ms932Encoder.encode("\u782F")}).toThrowError({name:"TypeError",message:"EncodingError U+782F"});
expect(() => {ms932Encoder.encode("\u7830")}).toThrowError({name:"TypeError",message:"EncodingError U+7830"});
expect(() => {ms932Encoder.encode("\u7831")}).toThrowError({name:"TypeError",message:"EncodingError U+7831"});
expect([...ms932Encoder.encode("砲")].join(",")).toBe("150,67"); // U+7832
expect(() => {ms932Encoder.encode("\u7833")}).toThrowError({name:"TypeError",message:"EncodingError U+7833"});
expect([...ms932Encoder.encode("破")].join(",")).toBe("148,106"); // U+7834
expect(() => {ms932Encoder.encode("\u7835")}).toThrowError({name:"TypeError",message:"EncodingError U+7835"});
expect(() => {ms932Encoder.encode("\u7836")}).toThrowError({name:"TypeError",message:"EncodingError U+7836"});
expect(() => {ms932Encoder.encode("\u7837")}).toThrowError({name:"TypeError",message:"EncodingError U+7837"});
expect(() => {ms932Encoder.encode("\u7838")}).toThrowError({name:"TypeError",message:"EncodingError U+7838"});
expect(() => {ms932Encoder.encode("\u7839")}).toThrowError({name:"TypeError",message:"EncodingError U+7839"});
expect([...ms932Encoder.encode("砺")].join(",")).toBe("147,118"); // U+783A
expect(() => {ms932Encoder.encode("\u783B")}).toThrowError({name:"TypeError",message:"EncodingError U+783B"});
expect(() => {ms932Encoder.encode("\u783C")}).toThrowError({name:"TypeError",message:"EncodingError U+783C"});
expect(() => {ms932Encoder.encode("\u783D")}).toThrowError({name:"TypeError",message:"EncodingError U+783D"});
expect(() => {ms932Encoder.encode("\u783E")}).toThrowError({name:"TypeError",message:"EncodingError U+783E"});
expect([...ms932Encoder.encode("砿")].join(",")).toBe("141,123"); // U+783F
expect(() => {ms932Encoder.encode("\u7840")}).toThrowError({name:"TypeError",message:"EncodingError U+7840"});
expect(() => {ms932Encoder.encode("\u7841")}).toThrowError({name:"TypeError",message:"EncodingError U+7841"});
expect(() => {ms932Encoder.encode("\u7842")}).toThrowError({name:"TypeError",message:"EncodingError U+7842"});
expect(() => {ms932Encoder.encode("\u7843")}).toThrowError({name:"TypeError",message:"EncodingError U+7843"});
expect(() => {ms932Encoder.encode("\u7844")}).toThrowError({name:"TypeError",message:"EncodingError U+7844"});
expect([...ms932Encoder.encode("硅")].join(",")).toBe("225,233"); // U+7845
expect(() => {ms932Encoder.encode("\u7846")}).toThrowError({name:"TypeError",message:"EncodingError U+7846"});
expect(() => {ms932Encoder.encode("\u7847")}).toThrowError({name:"TypeError",message:"EncodingError U+7847"});
expect(() => {ms932Encoder.encode("\u7848")}).toThrowError({name:"TypeError",message:"EncodingError U+7848"});
expect(() => {ms932Encoder.encode("\u7849")}).toThrowError({name:"TypeError",message:"EncodingError U+7849"});
expect(() => {ms932Encoder.encode("\u784A")}).toThrowError({name:"TypeError",message:"EncodingError U+784A"});
expect(() => {ms932Encoder.encode("\u784B")}).toThrowError({name:"TypeError",message:"EncodingError U+784B"});
expect(() => {ms932Encoder.encode("\u784C")}).toThrowError({name:"TypeError",message:"EncodingError U+784C"});
expect(() => {ms932Encoder.encode("\u784D")}).toThrowError({name:"TypeError",message:"EncodingError U+784D"});
expect([...ms932Encoder.encode("硎")].join(",")).toBe("251,121"); // U+784E
expect(() => {ms932Encoder.encode("\u784F")}).toThrowError({name:"TypeError",message:"EncodingError U+784F"});
expect(() => {ms932Encoder.encode("\u7850")}).toThrowError({name:"TypeError",message:"EncodingError U+7850"});
expect(() => {ms932Encoder.encode("\u7851")}).toThrowError({name:"TypeError",message:"EncodingError U+7851"});
expect(() => {ms932Encoder.encode("\u7852")}).toThrowError({name:"TypeError",message:"EncodingError U+7852"});
expect(() => {ms932Encoder.encode("\u7853")}).toThrowError({name:"TypeError",message:"EncodingError U+7853"});
expect(() => {ms932Encoder.encode("\u7854")}).toThrowError({name:"TypeError",message:"EncodingError U+7854"});
expect(() => {ms932Encoder.encode("\u7855")}).toThrowError({name:"TypeError",message:"EncodingError U+7855"});
expect(() => {ms932Encoder.encode("\u7856")}).toThrowError({name:"TypeError",message:"EncodingError U+7856"});
expect(() => {ms932Encoder.encode("\u7857")}).toThrowError({name:"TypeError",message:"EncodingError U+7857"});
expect(() => {ms932Encoder.encode("\u7858")}).toThrowError({name:"TypeError",message:"EncodingError U+7858"});
expect(() => {ms932Encoder.encode("\u7859")}).toThrowError({name:"TypeError",message:"EncodingError U+7859"});
expect(() => {ms932Encoder.encode("\u785A")}).toThrowError({name:"TypeError",message:"EncodingError U+785A"});
expect(() => {ms932Encoder.encode("\u785B")}).toThrowError({name:"TypeError",message:"EncodingError U+785B"});
expect(() => {ms932Encoder.encode("\u785C")}).toThrowError({name:"TypeError",message:"EncodingError U+785C"});
expect([...ms932Encoder.encode("硝")].join(",")).toBe("143,201"); // U+785D
expect(() => {ms932Encoder.encode("\u785E")}).toThrowError({name:"TypeError",message:"EncodingError U+785E"});
expect(() => {ms932Encoder.encode("\u785F")}).toThrowError({name:"TypeError",message:"EncodingError U+785F"});
expect(() => {ms932Encoder.encode("\u7860")}).toThrowError({name:"TypeError",message:"EncodingError U+7860"});
expect(() => {ms932Encoder.encode("\u7861")}).toThrowError({name:"TypeError",message:"EncodingError U+7861"});
expect(() => {ms932Encoder.encode("\u7862")}).toThrowError({name:"TypeError",message:"EncodingError U+7862"});
expect(() => {ms932Encoder.encode("\u7863")}).toThrowError({name:"TypeError",message:"EncodingError U+7863"});
expect([...ms932Encoder.encode("硤")].join(",")).toBe("251,122"); // U+7864
expect(() => {ms932Encoder.encode("\u7865")}).toThrowError({name:"TypeError",message:"EncodingError U+7865"});
expect(() => {ms932Encoder.encode("\u7866")}).toThrowError({name:"TypeError",message:"EncodingError U+7866"});
expect(() => {ms932Encoder.encode("\u7867")}).toThrowError({name:"TypeError",message:"EncodingError U+7867"});
expect(() => {ms932Encoder.encode("\u7868")}).toThrowError({name:"TypeError",message:"EncodingError U+7868"});
expect(() => {ms932Encoder.encode("\u7869")}).toThrowError({name:"TypeError",message:"EncodingError U+7869"});
expect(() => {ms932Encoder.encode("\u786A")}).toThrowError({name:"TypeError",message:"EncodingError U+786A"});
expect([...ms932Encoder.encode("硫硬")].join(",")).toBe("151,176,141,100"); // U+786B
expect(() => {ms932Encoder.encode("\u786D")}).toThrowError({name:"TypeError",message:"EncodingError U+786D"});
expect(() => {ms932Encoder.encode("\u786E")}).toThrowError({name:"TypeError",message:"EncodingError U+786E"});
expect([...ms932Encoder.encode("硯")].join(",")).toBe("140,165"); // U+786F
expect(() => {ms932Encoder.encode("\u7870")}).toThrowError({name:"TypeError",message:"EncodingError U+7870"});
expect(() => {ms932Encoder.encode("\u7871")}).toThrowError({name:"TypeError",message:"EncodingError U+7871"});
expect([...ms932Encoder.encode("硲")].join(",")).toBe("148,161"); // U+7872
expect(() => {ms932Encoder.encode("\u7873")}).toThrowError({name:"TypeError",message:"EncodingError U+7873"});
expect([...ms932Encoder.encode("硴")].join(",")).toBe("225,235"); // U+7874
expect(() => {ms932Encoder.encode("\u7875")}).toThrowError({name:"TypeError",message:"EncodingError U+7875"});
expect(() => {ms932Encoder.encode("\u7876")}).toThrowError({name:"TypeError",message:"EncodingError U+7876"});
expect(() => {ms932Encoder.encode("\u7877")}).toThrowError({name:"TypeError",message:"EncodingError U+7877"});
expect(() => {ms932Encoder.encode("\u7878")}).toThrowError({name:"TypeError",message:"EncodingError U+7878"});
expect(() => {ms932Encoder.encode("\u7879")}).toThrowError({name:"TypeError",message:"EncodingError U+7879"});
expect([...ms932Encoder.encode("硺")].join(",")).toBe("251,123"); // U+787A
expect(() => {ms932Encoder.encode("\u787B")}).toThrowError({name:"TypeError",message:"EncodingError U+787B"});
expect([...ms932Encoder.encode("硼")].join(",")).toBe("225,237"); // U+787C
expect(() => {ms932Encoder.encode("\u787D")}).toThrowError({name:"TypeError",message:"EncodingError U+787D"});
expect(() => {ms932Encoder.encode("\u787E")}).toThrowError({name:"TypeError",message:"EncodingError U+787E"});
expect(() => {ms932Encoder.encode("\u787F")}).toThrowError({name:"TypeError",message:"EncodingError U+787F"});
expect(() => {ms932Encoder.encode("\u7880")}).toThrowError({name:"TypeError",message:"EncodingError U+7880"});
expect([...ms932Encoder.encode("碁")].join(",")).toBe("140,233"); // U+7881
expect(() => {ms932Encoder.encode("\u7882")}).toThrowError({name:"TypeError",message:"EncodingError U+7882"});
expect(() => {ms932Encoder.encode("\u7883")}).toThrowError({name:"TypeError",message:"EncodingError U+7883"});
expect(() => {ms932Encoder.encode("\u7884")}).toThrowError({name:"TypeError",message:"EncodingError U+7884"});
expect(() => {ms932Encoder.encode("\u7885")}).toThrowError({name:"TypeError",message:"EncodingError U+7885"});
expect([...ms932Encoder.encode("碆碇")].join(",")).toBe("225,236,146,244"); // U+7886
expect(() => {ms932Encoder.encode("\u7888")}).toThrowError({name:"TypeError",message:"EncodingError U+7888"});
expect(() => {ms932Encoder.encode("\u7889")}).toThrowError({name:"TypeError",message:"EncodingError U+7889"});
expect(() => {ms932Encoder.encode("\u788A")}).toThrowError({name:"TypeError",message:"EncodingError U+788A"});
expect(() => {ms932Encoder.encode("\u788B")}).toThrowError({name:"TypeError",message:"EncodingError U+788B"});
expect([...ms932Encoder.encode("碌碍碎")].join(",")).toBe("225,239,138,86,225,234"); // U+788C
expect(() => {ms932Encoder.encode("\u788F")}).toThrowError({name:"TypeError",message:"EncodingError U+788F"});
expect(() => {ms932Encoder.encode("\u7890")}).toThrowError({name:"TypeError",message:"EncodingError U+7890"});
expect([...ms932Encoder.encode("碑")].join(",")).toBe("148,232"); // U+7891
expect(() => {ms932Encoder.encode("\u7892")}).toThrowError({name:"TypeError",message:"EncodingError U+7892"});
expect([...ms932Encoder.encode("碓")].join(",")).toBe("137,79"); // U+7893
expect(() => {ms932Encoder.encode("\u7894")}).toThrowError({name:"TypeError",message:"EncodingError U+7894"});
expect([...ms932Encoder.encode("碕")].join(",")).toBe("141,234"); // U+7895
expect(() => {ms932Encoder.encode("\u7896")}).toThrowError({name:"TypeError",message:"EncodingError U+7896"});
expect([...ms932Encoder.encode("碗")].join(",")).toBe("152,113"); // U+7897
expect(() => {ms932Encoder.encode("\u7898")}).toThrowError({name:"TypeError",message:"EncodingError U+7898"});
expect(() => {ms932Encoder.encode("\u7899")}).toThrowError({name:"TypeError",message:"EncodingError U+7899"});
expect([...ms932Encoder.encode("碚")].join(",")).toBe("225,238"); // U+789A
expect(() => {ms932Encoder.encode("\u789B")}).toThrowError({name:"TypeError",message:"EncodingError U+789B"});
expect(() => {ms932Encoder.encode("\u789C")}).toThrowError({name:"TypeError",message:"EncodingError U+789C"});
expect(() => {ms932Encoder.encode("\u789D")}).toThrowError({name:"TypeError",message:"EncodingError U+789D"});
expect(() => {ms932Encoder.encode("\u789E")}).toThrowError({name:"TypeError",message:"EncodingError U+789E"});
expect(() => {ms932Encoder.encode("\u789F")}).toThrowError({name:"TypeError",message:"EncodingError U+789F"});
expect(() => {ms932Encoder.encode("\u78A0")}).toThrowError({name:"TypeError",message:"EncodingError U+78A0"});
expect(() => {ms932Encoder.encode("\u78A1")}).toThrowError({name:"TypeError",message:"EncodingError U+78A1"});
expect(() => {ms932Encoder.encode("\u78A2")}).toThrowError({name:"TypeError",message:"EncodingError U+78A2"});
expect([...ms932Encoder.encode("碣")].join(",")).toBe("225,240"); // U+78A3
expect(() => {ms932Encoder.encode("\u78A4")}).toThrowError({name:"TypeError",message:"EncodingError U+78A4"});
expect(() => {ms932Encoder.encode("\u78A5")}).toThrowError({name:"TypeError",message:"EncodingError U+78A5"});
expect(() => {ms932Encoder.encode("\u78A6")}).toThrowError({name:"TypeError",message:"EncodingError U+78A6"});
expect([...ms932Encoder.encode("碧")].join(",")).toBe("149,201"); // U+78A7
expect(() => {ms932Encoder.encode("\u78A8")}).toThrowError({name:"TypeError",message:"EncodingError U+78A8"});
expect([...ms932Encoder.encode("碩碪")].join(",")).toBe("144,215,225,242"); // U+78A9
expect(() => {ms932Encoder.encode("\u78AB")}).toThrowError({name:"TypeError",message:"EncodingError U+78AB"});
expect(() => {ms932Encoder.encode("\u78AC")}).toThrowError({name:"TypeError",message:"EncodingError U+78AC"});
expect(() => {ms932Encoder.encode("\u78AD")}).toThrowError({name:"TypeError",message:"EncodingError U+78AD"});
expect(() => {ms932Encoder.encode("\u78AE")}).toThrowError({name:"TypeError",message:"EncodingError U+78AE"});
expect([...ms932Encoder.encode("碯")].join(",")).toBe("225,243"); // U+78AF
expect(() => {ms932Encoder.encode("\u78B0")}).toThrowError({name:"TypeError",message:"EncodingError U+78B0"});
expect(() => {ms932Encoder.encode("\u78B1")}).toThrowError({name:"TypeError",message:"EncodingError U+78B1"});
expect(() => {ms932Encoder.encode("\u78B2")}).toThrowError({name:"TypeError",message:"EncodingError U+78B2"});
expect(() => {ms932Encoder.encode("\u78B3")}).toThrowError({name:"TypeError",message:"EncodingError U+78B3"});
expect(() => {ms932Encoder.encode("\u78B4")}).toThrowError({name:"TypeError",message:"EncodingError U+78B4"});
expect([...ms932Encoder.encode("碵")].join(",")).toBe("225,241"); // U+78B5
expect(() => {ms932Encoder.encode("\u78B6")}).toThrowError({name:"TypeError",message:"EncodingError U+78B6"});
expect(() => {ms932Encoder.encode("\u78B7")}).toThrowError({name:"TypeError",message:"EncodingError U+78B7"});
expect(() => {ms932Encoder.encode("\u78B8")}).toThrowError({name:"TypeError",message:"EncodingError U+78B8"});
expect(() => {ms932Encoder.encode("\u78B9")}).toThrowError({name:"TypeError",message:"EncodingError U+78B9"});
expect([...ms932Encoder.encode("確")].join(",")).toBe("138,109"); // U+78BA
expect(() => {ms932Encoder.encode("\u78BB")}).toThrowError({name:"TypeError",message:"EncodingError U+78BB"});
expect([...ms932Encoder.encode("碼")].join(",")).toBe("225,249"); // U+78BC
expect(() => {ms932Encoder.encode("\u78BD")}).toThrowError({name:"TypeError",message:"EncodingError U+78BD"});
expect([...ms932Encoder.encode("碾")].join(",")).toBe("225,248"); // U+78BE
expect(() => {ms932Encoder.encode("\u78BF")}).toThrowError({name:"TypeError",message:"EncodingError U+78BF"});
expect(() => {ms932Encoder.encode("\u78C0")}).toThrowError({name:"TypeError",message:"EncodingError U+78C0"});
expect([...ms932Encoder.encode("磁")].join(",")).toBe("142,165"); // U+78C1
expect(() => {ms932Encoder.encode("\u78C2")}).toThrowError({name:"TypeError",message:"EncodingError U+78C2"});
expect(() => {ms932Encoder.encode("\u78C3")}).toThrowError({name:"TypeError",message:"EncodingError U+78C3"});
expect(() => {ms932Encoder.encode("\u78C4")}).toThrowError({name:"TypeError",message:"EncodingError U+78C4"});
expect([...ms932Encoder.encode("磅磆")].join(",")).toBe("225,250,225,245"); // U+78C5
expect(() => {ms932Encoder.encode("\u78C7")}).toThrowError({name:"TypeError",message:"EncodingError U+78C7"});
expect(() => {ms932Encoder.encode("\u78C8")}).toThrowError({name:"TypeError",message:"EncodingError U+78C8"});
expect(() => {ms932Encoder.encode("\u78C9")}).toThrowError({name:"TypeError",message:"EncodingError U+78C9"});
expect([...ms932Encoder.encode("磊磋")].join(",")).toBe("225,251,225,246"); // U+78CA
expect(() => {ms932Encoder.encode("\u78CC")}).toThrowError({name:"TypeError",message:"EncodingError U+78CC"});
expect(() => {ms932Encoder.encode("\u78CD")}).toThrowError({name:"TypeError",message:"EncodingError U+78CD"});
expect(() => {ms932Encoder.encode("\u78CE")}).toThrowError({name:"TypeError",message:"EncodingError U+78CE"});
expect(() => {ms932Encoder.encode("\u78CF")}).toThrowError({name:"TypeError",message:"EncodingError U+78CF"});
expect([...ms932Encoder.encode("磐磑")].join(",")).toBe("148,214,225,244"); // U+78D0
expect(() => {ms932Encoder.encode("\u78D2")}).toThrowError({name:"TypeError",message:"EncodingError U+78D2"});
expect(() => {ms932Encoder.encode("\u78D3")}).toThrowError({name:"TypeError",message:"EncodingError U+78D3"});
expect([...ms932Encoder.encode("磔")].join(",")).toBe("225,247"); // U+78D4
expect(() => {ms932Encoder.encode("\u78D5")}).toThrowError({name:"TypeError",message:"EncodingError U+78D5"});
expect(() => {ms932Encoder.encode("\u78D6")}).toThrowError({name:"TypeError",message:"EncodingError U+78D6"});
expect(() => {ms932Encoder.encode("\u78D7")}).toThrowError({name:"TypeError",message:"EncodingError U+78D7"});
expect(() => {ms932Encoder.encode("\u78D8")}).toThrowError({name:"TypeError",message:"EncodingError U+78D8"});
expect(() => {ms932Encoder.encode("\u78D9")}).toThrowError({name:"TypeError",message:"EncodingError U+78D9"});
expect([...ms932Encoder.encode("磚")].join(",")).toBe("226,65"); // U+78DA
expect(() => {ms932Encoder.encode("\u78DB")}).toThrowError({name:"TypeError",message:"EncodingError U+78DB"});
expect(() => {ms932Encoder.encode("\u78DC")}).toThrowError({name:"TypeError",message:"EncodingError U+78DC"});
expect(() => {ms932Encoder.encode("\u78DD")}).toThrowError({name:"TypeError",message:"EncodingError U+78DD"});
expect(() => {ms932Encoder.encode("\u78DE")}).toThrowError({name:"TypeError",message:"EncodingError U+78DE"});
expect(() => {ms932Encoder.encode("\u78DF")}).toThrowError({name:"TypeError",message:"EncodingError U+78DF"});
expect(() => {ms932Encoder.encode("\u78E0")}).toThrowError({name:"TypeError",message:"EncodingError U+78E0"});
expect(() => {ms932Encoder.encode("\u78E1")}).toThrowError({name:"TypeError",message:"EncodingError U+78E1"});
expect(() => {ms932Encoder.encode("\u78E2")}).toThrowError({name:"TypeError",message:"EncodingError U+78E2"});
expect(() => {ms932Encoder.encode("\u78E3")}).toThrowError({name:"TypeError",message:"EncodingError U+78E3"});
expect(() => {ms932Encoder.encode("\u78E4")}).toThrowError({name:"TypeError",message:"EncodingError U+78E4"});
expect(() => {ms932Encoder.encode("\u78E5")}).toThrowError({name:"TypeError",message:"EncodingError U+78E5"});
expect(() => {ms932Encoder.encode("\u78E6")}).toThrowError({name:"TypeError",message:"EncodingError U+78E6"});
expect([...ms932Encoder.encode("磧磨")].join(",")).toBe("226,64,150,129"); // U+78E7
expect(() => {ms932Encoder.encode("\u78E9")}).toThrowError({name:"TypeError",message:"EncodingError U+78E9"});
expect(() => {ms932Encoder.encode("\u78EA")}).toThrowError({name:"TypeError",message:"EncodingError U+78EA"});
expect(() => {ms932Encoder.encode("\u78EB")}).toThrowError({name:"TypeError",message:"EncodingError U+78EB"});
expect([...ms932Encoder.encode("磬")].join(",")).toBe("225,252"); // U+78EC
expect(() => {ms932Encoder.encode("\u78ED")}).toThrowError({name:"TypeError",message:"EncodingError U+78ED"});
expect(() => {ms932Encoder.encode("\u78EE")}).toThrowError({name:"TypeError",message:"EncodingError U+78EE"});
expect([...ms932Encoder.encode("磯")].join(",")).toBe("136,233"); // U+78EF
expect(() => {ms932Encoder.encode("\u78F0")}).toThrowError({name:"TypeError",message:"EncodingError U+78F0"});
expect(() => {ms932Encoder.encode("\u78F1")}).toThrowError({name:"TypeError",message:"EncodingError U+78F1"});
expect(() => {ms932Encoder.encode("\u78F2")}).toThrowError({name:"TypeError",message:"EncodingError U+78F2"});
expect(() => {ms932Encoder.encode("\u78F3")}).toThrowError({name:"TypeError",message:"EncodingError U+78F3"});
expect([...ms932Encoder.encode("磴")].join(",")).toBe("226,67"); // U+78F4
expect(() => {ms932Encoder.encode("\u78F5")}).toThrowError({name:"TypeError",message:"EncodingError U+78F5"});
expect(() => {ms932Encoder.encode("\u78F6")}).toThrowError({name:"TypeError",message:"EncodingError U+78F6"});
expect(() => {ms932Encoder.encode("\u78F7")}).toThrowError({name:"TypeError",message:"EncodingError U+78F7"});
expect(() => {ms932Encoder.encode("\u78F8")}).toThrowError({name:"TypeError",message:"EncodingError U+78F8"});
expect(() => {ms932Encoder.encode("\u78F9")}).toThrowError({name:"TypeError",message:"EncodingError U+78F9"});
expect(() => {ms932Encoder.encode("\u78FA")}).toThrowError({name:"TypeError",message:"EncodingError U+78FA"});
expect(() => {ms932Encoder.encode("\u78FB")}).toThrowError({name:"TypeError",message:"EncodingError U+78FB"});
expect(() => {ms932Encoder.encode("\u78FC")}).toThrowError({name:"TypeError",message:"EncodingError U+78FC"});
expect([...ms932Encoder.encode("磽")].join(",")).toBe("226,66"); // U+78FD
expect(() => {ms932Encoder.encode("\u78FE")}).toThrowError({name:"TypeError",message:"EncodingError U+78FE"});
expect(() => {ms932Encoder.encode("\u78FF")}).toThrowError({name:"TypeError",message:"EncodingError U+78FF"});
expect(() => {ms932Encoder.encode("\u7900")}).toThrowError({name:"TypeError",message:"EncodingError U+7900"});
expect([...ms932Encoder.encode("礁")].join(",")).toBe("143,202"); // U+7901
expect(() => {ms932Encoder.encode("\u7902")}).toThrowError({name:"TypeError",message:"EncodingError U+7902"});
expect(() => {ms932Encoder.encode("\u7903")}).toThrowError({name:"TypeError",message:"EncodingError U+7903"});
expect(() => {ms932Encoder.encode("\u7904")}).toThrowError({name:"TypeError",message:"EncodingError U+7904"});
expect(() => {ms932Encoder.encode("\u7905")}).toThrowError({name:"TypeError",message:"EncodingError U+7905"});
expect(() => {ms932Encoder.encode("\u7906")}).toThrowError({name:"TypeError",message:"EncodingError U+7906"});
expect([...ms932Encoder.encode("礇")].join(",")).toBe("226,68"); // U+7907
expect(() => {ms932Encoder.encode("\u7908")}).toThrowError({name:"TypeError",message:"EncodingError U+7908"});
expect(() => {ms932Encoder.encode("\u7909")}).toThrowError({name:"TypeError",message:"EncodingError U+7909"});
expect(() => {ms932Encoder.encode("\u790A")}).toThrowError({name:"TypeError",message:"EncodingError U+790A"});
expect(() => {ms932Encoder.encode("\u790B")}).toThrowError({name:"TypeError",message:"EncodingError U+790B"});
expect(() => {ms932Encoder.encode("\u790C")}).toThrowError({name:"TypeError",message:"EncodingError U+790C"});
expect(() => {ms932Encoder.encode("\u790D")}).toThrowError({name:"TypeError",message:"EncodingError U+790D"});
expect([...ms932Encoder.encode("礎")].join(",")).toBe("145,98"); // U+790E
expect(() => {ms932Encoder.encode("\u790F")}).toThrowError({name:"TypeError",message:"EncodingError U+790F"});
expect(() => {ms932Encoder.encode("\u7910")}).toThrowError({name:"TypeError",message:"EncodingError U+7910"});
expect([...ms932Encoder.encode("礑礒")].join(",")).toBe("226,70,226,69"); // U+7911
expect(() => {ms932Encoder.encode("\u7913")}).toThrowError({name:"TypeError",message:"EncodingError U+7913"});
expect(() => {ms932Encoder.encode("\u7914")}).toThrowError({name:"TypeError",message:"EncodingError U+7914"});
expect(() => {ms932Encoder.encode("\u7915")}).toThrowError({name:"TypeError",message:"EncodingError U+7915"});
expect(() => {ms932Encoder.encode("\u7916")}).toThrowError({name:"TypeError",message:"EncodingError U+7916"});
expect(() => {ms932Encoder.encode("\u7917")}).toThrowError({name:"TypeError",message:"EncodingError U+7917"});
expect(() => {ms932Encoder.encode("\u7918")}).toThrowError({name:"TypeError",message:"EncodingError U+7918"});
expect([...ms932Encoder.encode("礙")].join(",")).toBe("226,71"); // U+7919
expect(() => {ms932Encoder.encode("\u791A")}).toThrowError({name:"TypeError",message:"EncodingError U+791A"});
expect(() => {ms932Encoder.encode("\u791B")}).toThrowError({name:"TypeError",message:"EncodingError U+791B"});
expect(() => {ms932Encoder.encode("\u791C")}).toThrowError({name:"TypeError",message:"EncodingError U+791C"});
expect(() => {ms932Encoder.encode("\u791D")}).toThrowError({name:"TypeError",message:"EncodingError U+791D"});
expect(() => {ms932Encoder.encode("\u791E")}).toThrowError({name:"TypeError",message:"EncodingError U+791E"});
expect(() => {ms932Encoder.encode("\u791F")}).toThrowError({name:"TypeError",message:"EncodingError U+791F"});
expect(() => {ms932Encoder.encode("\u7920")}).toThrowError({name:"TypeError",message:"EncodingError U+7920"});
expect(() => {ms932Encoder.encode("\u7921")}).toThrowError({name:"TypeError",message:"EncodingError U+7921"});
expect(() => {ms932Encoder.encode("\u7922")}).toThrowError({name:"TypeError",message:"EncodingError U+7922"});
expect(() => {ms932Encoder.encode("\u7923")}).toThrowError({name:"TypeError",message:"EncodingError U+7923"});
expect(() => {ms932Encoder.encode("\u7924")}).toThrowError({name:"TypeError",message:"EncodingError U+7924"});
expect(() => {ms932Encoder.encode("\u7925")}).toThrowError({name:"TypeError",message:"EncodingError U+7925"});
expect([...ms932Encoder.encode("礦")].join(",")).toBe("225,230"); // U+7926
expect(() => {ms932Encoder.encode("\u7927")}).toThrowError({name:"TypeError",message:"EncodingError U+7927"});
expect(() => {ms932Encoder.encode("\u7928")}).toThrowError({name:"TypeError",message:"EncodingError U+7928"});
expect(() => {ms932Encoder.encode("\u7929")}).toThrowError({name:"TypeError",message:"EncodingError U+7929"});
expect([...ms932Encoder.encode("礪礫礬")].join(",")).toBe("225,232,226,73,226,72"); // U+792A
expect(() => {ms932Encoder.encode("\u792D")}).toThrowError({name:"TypeError",message:"EncodingError U+792D"});
expect(() => {ms932Encoder.encode("\u792E")}).toThrowError({name:"TypeError",message:"EncodingError U+792E"});
expect(() => {ms932Encoder.encode("\u792F")}).toThrowError({name:"TypeError",message:"EncodingError U+792F"});
expect([...ms932Encoder.encode("礰")].join(",")).toBe("251,124"); // U+7930
expect(() => {ms932Encoder.encode("\u7931")}).toThrowError({name:"TypeError",message:"EncodingError U+7931"});
expect(() => {ms932Encoder.encode("\u7932")}).toThrowError({name:"TypeError",message:"EncodingError U+7932"});
expect(() => {ms932Encoder.encode("\u7933")}).toThrowError({name:"TypeError",message:"EncodingError U+7933"});
expect(() => {ms932Encoder.encode("\u7934")}).toThrowError({name:"TypeError",message:"EncodingError U+7934"});
expect(() => {ms932Encoder.encode("\u7935")}).toThrowError({name:"TypeError",message:"EncodingError U+7935"});
expect(() => {ms932Encoder.encode("\u7936")}).toThrowError({name:"TypeError",message:"EncodingError U+7936"});
expect(() => {ms932Encoder.encode("\u7937")}).toThrowError({name:"TypeError",message:"EncodingError U+7937"});
expect(() => {ms932Encoder.encode("\u7938")}).toThrowError({name:"TypeError",message:"EncodingError U+7938"});
expect(() => {ms932Encoder.encode("\u7939")}).toThrowError({name:"TypeError",message:"EncodingError U+7939"});
expect([...ms932Encoder.encode("示")].join(",")).toBe("142,166"); // U+793A
expect(() => {ms932Encoder.encode("\u793B")}).toThrowError({name:"TypeError",message:"EncodingError U+793B"});
expect([...ms932Encoder.encode("礼")].join(",")).toBe("151,231"); // U+793C
expect(() => {ms932Encoder.encode("\u793D")}).toThrowError({name:"TypeError",message:"EncodingError U+793D"});
expect([...ms932Encoder.encode("社")].join(",")).toBe("142,208"); // U+793E
expect(() => {ms932Encoder.encode("\u793F")}).toThrowError({name:"TypeError",message:"EncodingError U+793F"});
expect([...ms932Encoder.encode("祀祁")].join(",")).toBe("226,74,140,86"); // U+7940
expect(() => {ms932Encoder.encode("\u7942")}).toThrowError({name:"TypeError",message:"EncodingError U+7942"});
expect(() => {ms932Encoder.encode("\u7943")}).toThrowError({name:"TypeError",message:"EncodingError U+7943"});
expect(() => {ms932Encoder.encode("\u7944")}).toThrowError({name:"TypeError",message:"EncodingError U+7944"});
expect(() => {ms932Encoder.encode("\u7945")}).toThrowError({name:"TypeError",message:"EncodingError U+7945"});
expect(() => {ms932Encoder.encode("\u7946")}).toThrowError({name:"TypeError",message:"EncodingError U+7946"});
expect([...ms932Encoder.encode("祇祈祉")].join(",")).toBe("139,95,139,70,142,131"); // U+7947
expect(() => {ms932Encoder.encode("\u794A")}).toThrowError({name:"TypeError",message:"EncodingError U+794A"});
expect(() => {ms932Encoder.encode("\u794B")}).toThrowError({name:"TypeError",message:"EncodingError U+794B"});
expect(() => {ms932Encoder.encode("\u794C")}).toThrowError({name:"TypeError",message:"EncodingError U+794C"});
expect(() => {ms932Encoder.encode("\u794D")}).toThrowError({name:"TypeError",message:"EncodingError U+794D"});
expect(() => {ms932Encoder.encode("\u794E")}).toThrowError({name:"TypeError",message:"EncodingError U+794E"});
expect(() => {ms932Encoder.encode("\u794F")}).toThrowError({name:"TypeError",message:"EncodingError U+794F"});
expect([...ms932Encoder.encode("祐")].join(",")).toBe("151,83"); // U+7950
expect(() => {ms932Encoder.encode("\u7951")}).toThrowError({name:"TypeError",message:"EncodingError U+7951"});
expect(() => {ms932Encoder.encode("\u7952")}).toThrowError({name:"TypeError",message:"EncodingError U+7952"});
expect([...ms932Encoder.encode("祓")].join(",")).toBe("226,80"); // U+7953
expect(() => {ms932Encoder.encode("\u7954")}).toThrowError({name:"TypeError",message:"EncodingError U+7954"});
expect([...ms932Encoder.encode("祕祖祗")].join(",")).toBe("226,79,145,99,226,76"); // U+7955
expect(() => {ms932Encoder.encode("\u7958")}).toThrowError({name:"TypeError",message:"EncodingError U+7958"});
expect(() => {ms932Encoder.encode("\u7959")}).toThrowError({name:"TypeError",message:"EncodingError U+7959"});
expect([...ms932Encoder.encode("祚")].join(",")).toBe("226,78"); // U+795A
expect(() => {ms932Encoder.encode("\u795B")}).toThrowError({name:"TypeError",message:"EncodingError U+795B"});
expect(() => {ms932Encoder.encode("\u795C")}).toThrowError({name:"TypeError",message:"EncodingError U+795C"});
expect([...ms932Encoder.encode("祝神祟祠")].join(",")).toBe("143,106,144,95,226,77,226,75"); // U+795D
expect(() => {ms932Encoder.encode("\u7961")}).toThrowError({name:"TypeError",message:"EncodingError U+7961"});
expect([...ms932Encoder.encode("祢")].join(",")).toBe("148,73"); // U+7962
expect(() => {ms932Encoder.encode("\u7963")}).toThrowError({name:"TypeError",message:"EncodingError U+7963"});
expect(() => {ms932Encoder.encode("\u7964")}).toThrowError({name:"TypeError",message:"EncodingError U+7964"});
expect([...ms932Encoder.encode("祥")].join(",")).toBe("143,203"); // U+7965
expect(() => {ms932Encoder.encode("\u7966")}).toThrowError({name:"TypeError",message:"EncodingError U+7966"});
expect(() => {ms932Encoder.encode("\u7967")}).toThrowError({name:"TypeError",message:"EncodingError U+7967"});
expect([...ms932Encoder.encode("票")].join(",")).toBe("149,91"); // U+7968
expect(() => {ms932Encoder.encode("\u7969")}).toThrowError({name:"TypeError",message:"EncodingError U+7969"});
expect(() => {ms932Encoder.encode("\u796A")}).toThrowError({name:"TypeError",message:"EncodingError U+796A"});
expect(() => {ms932Encoder.encode("\u796B")}).toThrowError({name:"TypeError",message:"EncodingError U+796B"});
expect(() => {ms932Encoder.encode("\u796C")}).toThrowError({name:"TypeError",message:"EncodingError U+796C"});
expect([...ms932Encoder.encode("祭")].join(",")).toBe("141,213"); // U+796D
expect(() => {ms932Encoder.encode("\u796E")}).toThrowError({name:"TypeError",message:"EncodingError U+796E"});
expect(() => {ms932Encoder.encode("\u796F")}).toThrowError({name:"TypeError",message:"EncodingError U+796F"});
expect(() => {ms932Encoder.encode("\u7970")}).toThrowError({name:"TypeError",message:"EncodingError U+7970"});
expect(() => {ms932Encoder.encode("\u7971")}).toThrowError({name:"TypeError",message:"EncodingError U+7971"});
expect(() => {ms932Encoder.encode("\u7972")}).toThrowError({name:"TypeError",message:"EncodingError U+7972"});
expect(() => {ms932Encoder.encode("\u7973")}).toThrowError({name:"TypeError",message:"EncodingError U+7973"});
expect(() => {ms932Encoder.encode("\u7974")}).toThrowError({name:"TypeError",message:"EncodingError U+7974"});
expect(() => {ms932Encoder.encode("\u7975")}).toThrowError({name:"TypeError",message:"EncodingError U+7975"});
expect(() => {ms932Encoder.encode("\u7976")}).toThrowError({name:"TypeError",message:"EncodingError U+7976"});
expect([...ms932Encoder.encode("祷")].join(",")).toBe("147,152"); // U+7977
expect(() => {ms932Encoder.encode("\u7978")}).toThrowError({name:"TypeError",message:"EncodingError U+7978"});
expect(() => {ms932Encoder.encode("\u7979")}).toThrowError({name:"TypeError",message:"EncodingError U+7979"});
expect([...ms932Encoder.encode("祺")].join(",")).toBe("226,81"); // U+797A
expect(() => {ms932Encoder.encode("\u797B")}).toThrowError({name:"TypeError",message:"EncodingError U+797B"});
expect(() => {ms932Encoder.encode("\u797C")}).toThrowError({name:"TypeError",message:"EncodingError U+797C"});
expect(() => {ms932Encoder.encode("\u797D")}).toThrowError({name:"TypeError",message:"EncodingError U+797D"});
expect(() => {ms932Encoder.encode("\u797E")}).toThrowError({name:"TypeError",message:"EncodingError U+797E"});
expect([...ms932Encoder.encode("祿禀禁")].join(",")).toBe("226,82,226,104,139,214"); // U+797F
expect(() => {ms932Encoder.encode("\u7982")}).toThrowError({name:"TypeError",message:"EncodingError U+7982"});
expect(() => {ms932Encoder.encode("\u7983")}).toThrowError({name:"TypeError",message:"EncodingError U+7983"});
expect([...ms932Encoder.encode("禄禅")].join(",")).toBe("152,92,145,84"); // U+7984
expect(() => {ms932Encoder.encode("\u7986")}).toThrowError({name:"TypeError",message:"EncodingError U+7986"});
expect(() => {ms932Encoder.encode("\u7987")}).toThrowError({name:"TypeError",message:"EncodingError U+7987"});
expect(() => {ms932Encoder.encode("\u7988")}).toThrowError({name:"TypeError",message:"EncodingError U+7988"});
expect(() => {ms932Encoder.encode("\u7989")}).toThrowError({name:"TypeError",message:"EncodingError U+7989"});
expect([...ms932Encoder.encode("禊")].join(",")).toBe("226,83"); // U+798A
expect(() => {ms932Encoder.encode("\u798B")}).toThrowError({name:"TypeError",message:"EncodingError U+798B"});
expect(() => {ms932Encoder.encode("\u798C")}).toThrowError({name:"TypeError",message:"EncodingError U+798C"});
expect([...ms932Encoder.encode("禍禎福")].join(",")).toBe("137,208,146,245,149,159"); // U+798D
expect(() => {ms932Encoder.encode("\u7990")}).toThrowError({name:"TypeError",message:"EncodingError U+7990"});
expect(() => {ms932Encoder.encode("\u7991")}).toThrowError({name:"TypeError",message:"EncodingError U+7991"});
expect(() => {ms932Encoder.encode("\u7992")}).toThrowError({name:"TypeError",message:"EncodingError U+7992"});
expect(() => {ms932Encoder.encode("\u7993")}).toThrowError({name:"TypeError",message:"EncodingError U+7993"});
expect([...ms932Encoder.encode("禔")].join(",")).toBe("251,129"); // U+7994
expect(() => {ms932Encoder.encode("\u7995")}).toThrowError({name:"TypeError",message:"EncodingError U+7995"});
expect(() => {ms932Encoder.encode("\u7996")}).toThrowError({name:"TypeError",message:"EncodingError U+7996"});
expect(() => {ms932Encoder.encode("\u7997")}).toThrowError({name:"TypeError",message:"EncodingError U+7997"});
expect(() => {ms932Encoder.encode("\u7998")}).toThrowError({name:"TypeError",message:"EncodingError U+7998"});
expect(() => {ms932Encoder.encode("\u7999")}).toThrowError({name:"TypeError",message:"EncodingError U+7999"});
expect(() => {ms932Encoder.encode("\u799A")}).toThrowError({name:"TypeError",message:"EncodingError U+799A"});
expect([...ms932Encoder.encode("禛")].join(",")).toBe("251,131"); // U+799B
expect(() => {ms932Encoder.encode("\u799C")}).toThrowError({name:"TypeError",message:"EncodingError U+799C"});
expect([...ms932Encoder.encode("禝")].join(",")).toBe("226,84"); // U+799D
expect(() => {ms932Encoder.encode("\u799E")}).toThrowError({name:"TypeError",message:"EncodingError U+799E"});
expect(() => {ms932Encoder.encode("\u799F")}).toThrowError({name:"TypeError",message:"EncodingError U+799F"});
expect(() => {ms932Encoder.encode("\u79A0")}).toThrowError({name:"TypeError",message:"EncodingError U+79A0"});
expect(() => {ms932Encoder.encode("\u79A1")}).toThrowError({name:"TypeError",message:"EncodingError U+79A1"});
expect(() => {ms932Encoder.encode("\u79A2")}).toThrowError({name:"TypeError",message:"EncodingError U+79A2"});
expect(() => {ms932Encoder.encode("\u79A3")}).toThrowError({name:"TypeError",message:"EncodingError U+79A3"});
expect(() => {ms932Encoder.encode("\u79A4")}).toThrowError({name:"TypeError",message:"EncodingError U+79A4"});
expect(() => {ms932Encoder.encode("\u79A5")}).toThrowError({name:"TypeError",message:"EncodingError U+79A5"});
expect([...ms932Encoder.encode("禦禧")].join(",")).toBe("139,154,226,85"); // U+79A6
expect(() => {ms932Encoder.encode("\u79A8")}).toThrowError({name:"TypeError",message:"EncodingError U+79A8"});
expect(() => {ms932Encoder.encode("\u79A9")}).toThrowError({name:"TypeError",message:"EncodingError U+79A9"});
expect([...ms932Encoder.encode("禪")].join(",")).toBe("226,87"); // U+79AA
expect(() => {ms932Encoder.encode("\u79AB")}).toThrowError({name:"TypeError",message:"EncodingError U+79AB"});
expect(() => {ms932Encoder.encode("\u79AC")}).toThrowError({name:"TypeError",message:"EncodingError U+79AC"});
expect(() => {ms932Encoder.encode("\u79AD")}).toThrowError({name:"TypeError",message:"EncodingError U+79AD"});
expect([...ms932Encoder.encode("禮")].join(",")).toBe("226,88"); // U+79AE
expect(() => {ms932Encoder.encode("\u79AF")}).toThrowError({name:"TypeError",message:"EncodingError U+79AF"});
expect([...ms932Encoder.encode("禰")].join(",")).toBe("148,72"); // U+79B0
expect(() => {ms932Encoder.encode("\u79B1")}).toThrowError({name:"TypeError",message:"EncodingError U+79B1"});
expect(() => {ms932Encoder.encode("\u79B2")}).toThrowError({name:"TypeError",message:"EncodingError U+79B2"});
expect([...ms932Encoder.encode("禳")].join(",")).toBe("226,89"); // U+79B3
expect(() => {ms932Encoder.encode("\u79B4")}).toThrowError({name:"TypeError",message:"EncodingError U+79B4"});
expect(() => {ms932Encoder.encode("\u79B5")}).toThrowError({name:"TypeError",message:"EncodingError U+79B5"});
expect(() => {ms932Encoder.encode("\u79B6")}).toThrowError({name:"TypeError",message:"EncodingError U+79B6"});
expect(() => {ms932Encoder.encode("\u79B7")}).toThrowError({name:"TypeError",message:"EncodingError U+79B7"});
expect(() => {ms932Encoder.encode("\u79B8")}).toThrowError({name:"TypeError",message:"EncodingError U+79B8"});
expect([...ms932Encoder.encode("禹禺")].join(",")).toBe("226,90,226,91"); // U+79B9
expect(() => {ms932Encoder.encode("\u79BB")}).toThrowError({name:"TypeError",message:"EncodingError U+79BB"});
expect(() => {ms932Encoder.encode("\u79BC")}).toThrowError({name:"TypeError",message:"EncodingError U+79BC"});
expect([...ms932Encoder.encode("禽禾禿秀私")].join(",")).toBe("139,215,137,209,147,195,143,71,142,132"); // U+79BD
expect(() => {ms932Encoder.encode("\u79C2")}).toThrowError({name:"TypeError",message:"EncodingError U+79C2"});
expect(() => {ms932Encoder.encode("\u79C3")}).toThrowError({name:"TypeError",message:"EncodingError U+79C3"});
expect(() => {ms932Encoder.encode("\u79C4")}).toThrowError({name:"TypeError",message:"EncodingError U+79C4"});
expect(() => {ms932Encoder.encode("\u79C5")}).toThrowError({name:"TypeError",message:"EncodingError U+79C5"});
expect(() => {ms932Encoder.encode("\u79C6")}).toThrowError({name:"TypeError",message:"EncodingError U+79C6"});
expect(() => {ms932Encoder.encode("\u79C7")}).toThrowError({name:"TypeError",message:"EncodingError U+79C7"});
expect(() => {ms932Encoder.encode("\u79C8")}).toThrowError({name:"TypeError",message:"EncodingError U+79C8"});
expect([...ms932Encoder.encode("秉")].join(",")).toBe("226,92"); // U+79C9
expect(() => {ms932Encoder.encode("\u79CA")}).toThrowError({name:"TypeError",message:"EncodingError U+79CA"});
expect([...ms932Encoder.encode("秋")].join(",")).toBe("143,72"); // U+79CB
expect(() => {ms932Encoder.encode("\u79CC")}).toThrowError({name:"TypeError",message:"EncodingError U+79CC"});
expect(() => {ms932Encoder.encode("\u79CD")}).toThrowError({name:"TypeError",message:"EncodingError U+79CD"});
expect(() => {ms932Encoder.encode("\u79CE")}).toThrowError({name:"TypeError",message:"EncodingError U+79CE"});
expect(() => {ms932Encoder.encode("\u79CF")}).toThrowError({name:"TypeError",message:"EncodingError U+79CF"});
expect(() => {ms932Encoder.encode("\u79D0")}).toThrowError({name:"TypeError",message:"EncodingError U+79D0"});
expect([...ms932Encoder.encode("科秒")].join(",")).toBe("137,200,149,98"); // U+79D1
expect(() => {ms932Encoder.encode("\u79D3")}).toThrowError({name:"TypeError",message:"EncodingError U+79D3"});
expect(() => {ms932Encoder.encode("\u79D4")}).toThrowError({name:"TypeError",message:"EncodingError U+79D4"});
expect([...ms932Encoder.encode("秕")].join(",")).toBe("226,93"); // U+79D5
expect(() => {ms932Encoder.encode("\u79D6")}).toThrowError({name:"TypeError",message:"EncodingError U+79D6"});
expect(() => {ms932Encoder.encode("\u79D7")}).toThrowError({name:"TypeError",message:"EncodingError U+79D7"});
expect([...ms932Encoder.encode("秘")].join(",")).toBe("148,233"); // U+79D8
expect(() => {ms932Encoder.encode("\u79D9")}).toThrowError({name:"TypeError",message:"EncodingError U+79D9"});
expect(() => {ms932Encoder.encode("\u79DA")}).toThrowError({name:"TypeError",message:"EncodingError U+79DA"});
expect(() => {ms932Encoder.encode("\u79DB")}).toThrowError({name:"TypeError",message:"EncodingError U+79DB"});
expect(() => {ms932Encoder.encode("\u79DC")}).toThrowError({name:"TypeError",message:"EncodingError U+79DC"});
expect(() => {ms932Encoder.encode("\u79DD")}).toThrowError({name:"TypeError",message:"EncodingError U+79DD"});
expect(() => {ms932Encoder.encode("\u79DE")}).toThrowError({name:"TypeError",message:"EncodingError U+79DE"});
expect([...ms932Encoder.encode("租")].join(",")).toBe("145,100"); // U+79DF
expect(() => {ms932Encoder.encode("\u79E0")}).toThrowError({name:"TypeError",message:"EncodingError U+79E0"});
expect([...ms932Encoder.encode("秡")].join(",")).toBe("226,96"); // U+79E1
expect(() => {ms932Encoder.encode("\u79E2")}).toThrowError({name:"TypeError",message:"EncodingError U+79E2"});
expect([...ms932Encoder.encode("秣秤")].join(",")).toBe("226,97,148,137"); // U+79E3
expect(() => {ms932Encoder.encode("\u79E5")}).toThrowError({name:"TypeError",message:"EncodingError U+79E5"});
expect([...ms932Encoder.encode("秦秧")].join(",")).toBe("144,96,226,94"); // U+79E6
expect(() => {ms932Encoder.encode("\u79E8")}).toThrowError({name:"TypeError",message:"EncodingError U+79E8"});
expect([...ms932Encoder.encode("秩")].join(",")).toBe("146,129"); // U+79E9
expect(() => {ms932Encoder.encode("\u79EA")}).toThrowError({name:"TypeError",message:"EncodingError U+79EA"});
expect(() => {ms932Encoder.encode("\u79EB")}).toThrowError({name:"TypeError",message:"EncodingError U+79EB"});
expect([...ms932Encoder.encode("秬")].join(",")).toBe("226,95"); // U+79EC
expect(() => {ms932Encoder.encode("\u79ED")}).toThrowError({name:"TypeError",message:"EncodingError U+79ED"});
expect(() => {ms932Encoder.encode("\u79EE")}).toThrowError({name:"TypeError",message:"EncodingError U+79EE"});
expect(() => {ms932Encoder.encode("\u79EF")}).toThrowError({name:"TypeError",message:"EncodingError U+79EF"});
expect([...ms932Encoder.encode("称")].join(",")).toBe("143,204"); // U+79F0
expect(() => {ms932Encoder.encode("\u79F1")}).toThrowError({name:"TypeError",message:"EncodingError U+79F1"});
expect(() => {ms932Encoder.encode("\u79F2")}).toThrowError({name:"TypeError",message:"EncodingError U+79F2"});
expect(() => {ms932Encoder.encode("\u79F3")}).toThrowError({name:"TypeError",message:"EncodingError U+79F3"});
expect(() => {ms932Encoder.encode("\u79F4")}).toThrowError({name:"TypeError",message:"EncodingError U+79F4"});
expect(() => {ms932Encoder.encode("\u79F5")}).toThrowError({name:"TypeError",message:"EncodingError U+79F5"});
expect(() => {ms932Encoder.encode("\u79F6")}).toThrowError({name:"TypeError",message:"EncodingError U+79F6"});
expect(() => {ms932Encoder.encode("\u79F7")}).toThrowError({name:"TypeError",message:"EncodingError U+79F7"});
expect(() => {ms932Encoder.encode("\u79F8")}).toThrowError({name:"TypeError",message:"EncodingError U+79F8"});
expect(() => {ms932Encoder.encode("\u79F9")}).toThrowError({name:"TypeError",message:"EncodingError U+79F9"});
expect(() => {ms932Encoder.encode("\u79FA")}).toThrowError({name:"TypeError",message:"EncodingError U+79FA"});
expect([...ms932Encoder.encode("移")].join(",")).toBe("136,218"); // U+79FB
expect(() => {ms932Encoder.encode("\u79FC")}).toThrowError({name:"TypeError",message:"EncodingError U+79FC"});
expect(() => {ms932Encoder.encode("\u79FD")}).toThrowError({name:"TypeError",message:"EncodingError U+79FD"});
expect(() => {ms932Encoder.encode("\u79FE")}).toThrowError({name:"TypeError",message:"EncodingError U+79FE"});
expect(() => {ms932Encoder.encode("\u79FF")}).toThrowError({name:"TypeError",message:"EncodingError U+79FF"});
expect([...ms932Encoder.encode("稀")].join(",")).toBe("139,72"); // U+7A00
expect(() => {ms932Encoder.encode("\u7A01")}).toThrowError({name:"TypeError",message:"EncodingError U+7A01"});
expect(() => {ms932Encoder.encode("\u7A02")}).toThrowError({name:"TypeError",message:"EncodingError U+7A02"});
expect(() => {ms932Encoder.encode("\u7A03")}).toThrowError({name:"TypeError",message:"EncodingError U+7A03"});
expect(() => {ms932Encoder.encode("\u7A04")}).toThrowError({name:"TypeError",message:"EncodingError U+7A04"});
expect(() => {ms932Encoder.encode("\u7A05")}).toThrowError({name:"TypeError",message:"EncodingError U+7A05"});
expect(() => {ms932Encoder.encode("\u7A06")}).toThrowError({name:"TypeError",message:"EncodingError U+7A06"});
expect(() => {ms932Encoder.encode("\u7A07")}).toThrowError({name:"TypeError",message:"EncodingError U+7A07"});
expect([...ms932Encoder.encode("稈")].join(",")).toBe("226,98"); // U+7A08
expect(() => {ms932Encoder.encode("\u7A09")}).toThrowError({name:"TypeError",message:"EncodingError U+7A09"});
expect(() => {ms932Encoder.encode("\u7A0A")}).toThrowError({name:"TypeError",message:"EncodingError U+7A0A"});
expect([...ms932Encoder.encode("程")].join(",")).toBe("146,246"); // U+7A0B
expect(() => {ms932Encoder.encode("\u7A0C")}).toThrowError({name:"TypeError",message:"EncodingError U+7A0C"});
expect([...ms932Encoder.encode("稍税")].join(",")).toBe("226,99,144,197"); // U+7A0D
expect(() => {ms932Encoder.encode("\u7A0F")}).toThrowError({name:"TypeError",message:"EncodingError U+7A0F"});
expect(() => {ms932Encoder.encode("\u7A10")}).toThrowError({name:"TypeError",message:"EncodingError U+7A10"});
expect(() => {ms932Encoder.encode("\u7A11")}).toThrowError({name:"TypeError",message:"EncodingError U+7A11"});
expect(() => {ms932Encoder.encode("\u7A12")}).toThrowError({name:"TypeError",message:"EncodingError U+7A12"});
expect(() => {ms932Encoder.encode("\u7A13")}).toThrowError({name:"TypeError",message:"EncodingError U+7A13"});
expect([...ms932Encoder.encode("稔")].join(",")).toBe("150,171"); // U+7A14
expect(() => {ms932Encoder.encode("\u7A15")}).toThrowError({name:"TypeError",message:"EncodingError U+7A15"});
expect(() => {ms932Encoder.encode("\u7A16")}).toThrowError({name:"TypeError",message:"EncodingError U+7A16"});
expect([...ms932Encoder.encode("稗稘稙稚")].join(",")).toBe("149,66,226,100,226,101,146,116"); // U+7A17
expect(() => {ms932Encoder.encode("\u7A1B")}).toThrowError({name:"TypeError",message:"EncodingError U+7A1B"});
expect([...ms932Encoder.encode("稜")].join(",")).toBe("151,197"); // U+7A1C
expect(() => {ms932Encoder.encode("\u7A1D")}).toThrowError({name:"TypeError",message:"EncodingError U+7A1D"});
expect(() => {ms932Encoder.encode("\u7A1E")}).toThrowError({name:"TypeError",message:"EncodingError U+7A1E"});
expect([...ms932Encoder.encode("稟稠")].join(",")).toBe("226,103,226,102"); // U+7A1F
expect(() => {ms932Encoder.encode("\u7A21")}).toThrowError({name:"TypeError",message:"EncodingError U+7A21"});
expect(() => {ms932Encoder.encode("\u7A22")}).toThrowError({name:"TypeError",message:"EncodingError U+7A22"});
expect(() => {ms932Encoder.encode("\u7A23")}).toThrowError({name:"TypeError",message:"EncodingError U+7A23"});
expect(() => {ms932Encoder.encode("\u7A24")}).toThrowError({name:"TypeError",message:"EncodingError U+7A24"});
expect(() => {ms932Encoder.encode("\u7A25")}).toThrowError({name:"TypeError",message:"EncodingError U+7A25"});
expect(() => {ms932Encoder.encode("\u7A26")}).toThrowError({name:"TypeError",message:"EncodingError U+7A26"});
expect(() => {ms932Encoder.encode("\u7A27")}).toThrowError({name:"TypeError",message:"EncodingError U+7A27"});
expect(() => {ms932Encoder.encode("\u7A28")}).toThrowError({name:"TypeError",message:"EncodingError U+7A28"});
expect(() => {ms932Encoder.encode("\u7A29")}).toThrowError({name:"TypeError",message:"EncodingError U+7A29"});
expect(() => {ms932Encoder.encode("\u7A2A")}).toThrowError({name:"TypeError",message:"EncodingError U+7A2A"});
expect(() => {ms932Encoder.encode("\u7A2B")}).toThrowError({name:"TypeError",message:"EncodingError U+7A2B"});
expect(() => {ms932Encoder.encode("\u7A2C")}).toThrowError({name:"TypeError",message:"EncodingError U+7A2C"});
expect(() => {ms932Encoder.encode("\u7A2D")}).toThrowError({name:"TypeError",message:"EncodingError U+7A2D"});
expect([...ms932Encoder.encode("種")].join(",")).toBe("142,237"); // U+7A2E
expect(() => {ms932Encoder.encode("\u7A2F")}).toThrowError({name:"TypeError",message:"EncodingError U+7A2F"});
expect(() => {ms932Encoder.encode("\u7A30")}).toThrowError({name:"TypeError",message:"EncodingError U+7A30"});
expect([...ms932Encoder.encode("稱稲")].join(",")).toBe("226,105,136,238"); // U+7A31
expect(() => {ms932Encoder.encode("\u7A33")}).toThrowError({name:"TypeError",message:"EncodingError U+7A33"});
expect(() => {ms932Encoder.encode("\u7A34")}).toThrowError({name:"TypeError",message:"EncodingError U+7A34"});
expect(() => {ms932Encoder.encode("\u7A35")}).toThrowError({name:"TypeError",message:"EncodingError U+7A35"});
expect(() => {ms932Encoder.encode("\u7A36")}).toThrowError({name:"TypeError",message:"EncodingError U+7A36"});
expect([...ms932Encoder.encode("稷")].join(",")).toBe("226,108"); // U+7A37
expect(() => {ms932Encoder.encode("\u7A38")}).toThrowError({name:"TypeError",message:"EncodingError U+7A38"});
expect(() => {ms932Encoder.encode("\u7A39")}).toThrowError({name:"TypeError",message:"EncodingError U+7A39"});
expect(() => {ms932Encoder.encode("\u7A3A")}).toThrowError({name:"TypeError",message:"EncodingError U+7A3A"});
expect([...ms932Encoder.encode("稻稼稽稾稿穀")].join(",")).toBe("226,106,137,210,140,109,226,107,141,101,141,146"); // U+7A3B
expect(() => {ms932Encoder.encode("\u7A41")}).toThrowError({name:"TypeError",message:"EncodingError U+7A41"});
expect([...ms932Encoder.encode("穂穃")].join(",")).toBe("149,228,226,109"); // U+7A42
expect(() => {ms932Encoder.encode("\u7A44")}).toThrowError({name:"TypeError",message:"EncodingError U+7A44"});
expect(() => {ms932Encoder.encode("\u7A45")}).toThrowError({name:"TypeError",message:"EncodingError U+7A45"});
expect([...ms932Encoder.encode("穆")].join(",")).toBe("150,115"); // U+7A46
expect(() => {ms932Encoder.encode("\u7A47")}).toThrowError({name:"TypeError",message:"EncodingError U+7A47"});
expect(() => {ms932Encoder.encode("\u7A48")}).toThrowError({name:"TypeError",message:"EncodingError U+7A48"});
expect([...ms932Encoder.encode("穉")].join(",")).toBe("226,111"); // U+7A49
expect(() => {ms932Encoder.encode("\u7A4A")}).toThrowError({name:"TypeError",message:"EncodingError U+7A4A"});
expect(() => {ms932Encoder.encode("\u7A4B")}).toThrowError({name:"TypeError",message:"EncodingError U+7A4B"});
expect(() => {ms932Encoder.encode("\u7A4C")}).toThrowError({name:"TypeError",message:"EncodingError U+7A4C"});
expect([...ms932Encoder.encode("積穎穏穐")].join(",")).toBe("144,207,137,110,137,184,136,170"); // U+7A4D
expect(() => {ms932Encoder.encode("\u7A51")}).toThrowError({name:"TypeError",message:"EncodingError U+7A51"});
expect(() => {ms932Encoder.encode("\u7A52")}).toThrowError({name:"TypeError",message:"EncodingError U+7A52"});
expect(() => {ms932Encoder.encode("\u7A53")}).toThrowError({name:"TypeError",message:"EncodingError U+7A53"});
expect(() => {ms932Encoder.encode("\u7A54")}).toThrowError({name:"TypeError",message:"EncodingError U+7A54"});
expect(() => {ms932Encoder.encode("\u7A55")}).toThrowError({name:"TypeError",message:"EncodingError U+7A55"});
expect(() => {ms932Encoder.encode("\u7A56")}).toThrowError({name:"TypeError",message:"EncodingError U+7A56"});
expect([...ms932Encoder.encode("穗")].join(",")).toBe("226,110"); // U+7A57
expect(() => {ms932Encoder.encode("\u7A58")}).toThrowError({name:"TypeError",message:"EncodingError U+7A58"});
expect(() => {ms932Encoder.encode("\u7A59")}).toThrowError({name:"TypeError",message:"EncodingError U+7A59"});
expect(() => {ms932Encoder.encode("\u7A5A")}).toThrowError({name:"TypeError",message:"EncodingError U+7A5A"});
expect(() => {ms932Encoder.encode("\u7A5B")}).toThrowError({name:"TypeError",message:"EncodingError U+7A5B"});
expect(() => {ms932Encoder.encode("\u7A5C")}).toThrowError({name:"TypeError",message:"EncodingError U+7A5C"});
expect(() => {ms932Encoder.encode("\u7A5D")}).toThrowError({name:"TypeError",message:"EncodingError U+7A5D"});
expect(() => {ms932Encoder.encode("\u7A5E")}).toThrowError({name:"TypeError",message:"EncodingError U+7A5E"});
expect(() => {ms932Encoder.encode("\u7A5F")}).toThrowError({name:"TypeError",message:"EncodingError U+7A5F"});
expect(() => {ms932Encoder.encode("\u7A60")}).toThrowError({name:"TypeError",message:"EncodingError U+7A60"});
expect([...ms932Encoder.encode("穡穢穣")].join(",")).toBe("226,112,226,113,143,245"); // U+7A61
expect(() => {ms932Encoder.encode("\u7A64")}).toThrowError({name:"TypeError",message:"EncodingError U+7A64"});
expect(() => {ms932Encoder.encode("\u7A65")}).toThrowError({name:"TypeError",message:"EncodingError U+7A65"});
expect(() => {ms932Encoder.encode("\u7A66")}).toThrowError({name:"TypeError",message:"EncodingError U+7A66"});
expect(() => {ms932Encoder.encode("\u7A67")}).toThrowError({name:"TypeError",message:"EncodingError U+7A67"});
expect(() => {ms932Encoder.encode("\u7A68")}).toThrowError({name:"TypeError",message:"EncodingError U+7A68"});
expect([...ms932Encoder.encode("穩")].join(",")).toBe("226,114"); // U+7A69
expect(() => {ms932Encoder.encode("\u7A6A")}).toThrowError({name:"TypeError",message:"EncodingError U+7A6A"});
expect([...ms932Encoder.encode("穫")].join(",")).toBe("138,110"); // U+7A6B
expect(() => {ms932Encoder.encode("\u7A6C")}).toThrowError({name:"TypeError",message:"EncodingError U+7A6C"});
expect(() => {ms932Encoder.encode("\u7A6D")}).toThrowError({name:"TypeError",message:"EncodingError U+7A6D"});
expect(() => {ms932Encoder.encode("\u7A6E")}).toThrowError({name:"TypeError",message:"EncodingError U+7A6E"});
expect(() => {ms932Encoder.encode("\u7A6F")}).toThrowError({name:"TypeError",message:"EncodingError U+7A6F"});
expect([...ms932Encoder.encode("穰")].join(",")).toBe("226,116"); // U+7A70
expect(() => {ms932Encoder.encode("\u7A71")}).toThrowError({name:"TypeError",message:"EncodingError U+7A71"});
expect(() => {ms932Encoder.encode("\u7A72")}).toThrowError({name:"TypeError",message:"EncodingError U+7A72"});
expect(() => {ms932Encoder.encode("\u7A73")}).toThrowError({name:"TypeError",message:"EncodingError U+7A73"});
expect([...ms932Encoder.encode("穴")].join(",")).toBe("140,138"); // U+7A74
expect(() => {ms932Encoder.encode("\u7A75")}).toThrowError({name:"TypeError",message:"EncodingError U+7A75"});
expect([...ms932Encoder.encode("究")].join(",")).toBe("139,134"); // U+7A76
expect(() => {ms932Encoder.encode("\u7A77")}).toThrowError({name:"TypeError",message:"EncodingError U+7A77"});
expect(() => {ms932Encoder.encode("\u7A78")}).toThrowError({name:"TypeError",message:"EncodingError U+7A78"});
expect([...ms932Encoder.encode("穹空")].join(",")).toBe("226,117,139,243"); // U+7A79
expect(() => {ms932Encoder.encode("\u7A7B")}).toThrowError({name:"TypeError",message:"EncodingError U+7A7B"});
expect(() => {ms932Encoder.encode("\u7A7C")}).toThrowError({name:"TypeError",message:"EncodingError U+7A7C"});
expect([...ms932Encoder.encode("穽")].join(",")).toBe("226,118"); // U+7A7D
expect(() => {ms932Encoder.encode("\u7A7E")}).toThrowError({name:"TypeError",message:"EncodingError U+7A7E"});
expect([...ms932Encoder.encode("穿")].join(",")).toBe("144,250"); // U+7A7F
expect(() => {ms932Encoder.encode("\u7A80")}).toThrowError({name:"TypeError",message:"EncodingError U+7A80"});
expect([...ms932Encoder.encode("突")].join(",")).toBe("147,203"); // U+7A81
expect(() => {ms932Encoder.encode("\u7A82")}).toThrowError({name:"TypeError",message:"EncodingError U+7A82"});
expect([...ms932Encoder.encode("窃窄")].join(",")).toBe("144,222,141,243"); // U+7A83
expect(() => {ms932Encoder.encode("\u7A85")}).toThrowError({name:"TypeError",message:"EncodingError U+7A85"});
expect(() => {ms932Encoder.encode("\u7A86")}).toThrowError({name:"TypeError",message:"EncodingError U+7A86"});
expect(() => {ms932Encoder.encode("\u7A87")}).toThrowError({name:"TypeError",message:"EncodingError U+7A87"});
expect([...ms932Encoder.encode("窈")].join(",")).toBe("226,119"); // U+7A88
expect(() => {ms932Encoder.encode("\u7A89")}).toThrowError({name:"TypeError",message:"EncodingError U+7A89"});
expect(() => {ms932Encoder.encode("\u7A8A")}).toThrowError({name:"TypeError",message:"EncodingError U+7A8A"});
expect(() => {ms932Encoder.encode("\u7A8B")}).toThrowError({name:"TypeError",message:"EncodingError U+7A8B"});
expect(() => {ms932Encoder.encode("\u7A8C")}).toThrowError({name:"TypeError",message:"EncodingError U+7A8C"});
expect(() => {ms932Encoder.encode("\u7A8D")}).toThrowError({name:"TypeError",message:"EncodingError U+7A8D"});
expect(() => {ms932Encoder.encode("\u7A8E")}).toThrowError({name:"TypeError",message:"EncodingError U+7A8E"});
expect(() => {ms932Encoder.encode("\u7A8F")}).toThrowError({name:"TypeError",message:"EncodingError U+7A8F"});
expect(() => {ms932Encoder.encode("\u7A90")}).toThrowError({name:"TypeError",message:"EncodingError U+7A90"});
expect(() => {ms932Encoder.encode("\u7A91")}).toThrowError({name:"TypeError",message:"EncodingError U+7A91"});
expect([...ms932Encoder.encode("窒窓")].join(",")).toBe("146,130,145,139"); // U+7A92
expect(() => {ms932Encoder.encode("\u7A94")}).toThrowError({name:"TypeError",message:"EncodingError U+7A94"});
expect([...ms932Encoder.encode("窕窖窗窘")].join(",")).toBe("226,121,226,123,226,120,226,122"); // U+7A95
expect(() => {ms932Encoder.encode("\u7A99")}).toThrowError({name:"TypeError",message:"EncodingError U+7A99"});
expect(() => {ms932Encoder.encode("\u7A9A")}).toThrowError({name:"TypeError",message:"EncodingError U+7A9A"});
expect(() => {ms932Encoder.encode("\u7A9B")}).toThrowError({name:"TypeError",message:"EncodingError U+7A9B"});
expect(() => {ms932Encoder.encode("\u7A9C")}).toThrowError({name:"TypeError",message:"EncodingError U+7A9C"});
expect(() => {ms932Encoder.encode("\u7A9D")}).toThrowError({name:"TypeError",message:"EncodingError U+7A9D"});
expect(() => {ms932Encoder.encode("\u7A9E")}).toThrowError({name:"TypeError",message:"EncodingError U+7A9E"});
expect([...ms932Encoder.encode("窟")].join(",")).toBe("140,65"); // U+7A9F
expect(() => {ms932Encoder.encode("\u7AA0")}).toThrowError({name:"TypeError",message:"EncodingError U+7AA0"});
expect(() => {ms932Encoder.encode("\u7AA1")}).toThrowError({name:"TypeError",message:"EncodingError U+7AA1"});
expect(() => {ms932Encoder.encode("\u7AA2")}).toThrowError({name:"TypeError",message:"EncodingError U+7AA2"});
expect(() => {ms932Encoder.encode("\u7AA3")}).toThrowError({name:"TypeError",message:"EncodingError U+7AA3"});
expect(() => {ms932Encoder.encode("\u7AA4")}).toThrowError({name:"TypeError",message:"EncodingError U+7AA4"});
expect(() => {ms932Encoder.encode("\u7AA5")}).toThrowError({name:"TypeError",message:"EncodingError U+7AA5"});
expect(() => {ms932Encoder.encode("\u7AA6")}).toThrowError({name:"TypeError",message:"EncodingError U+7AA6"});
expect(() => {ms932Encoder.encode("\u7AA7")}).toThrowError({name:"TypeError",message:"EncodingError U+7AA7"});
expect(() => {ms932Encoder.encode("\u7AA8")}).toThrowError({name:"TypeError",message:"EncodingError U+7AA8"});
expect([...ms932Encoder.encode("窩窪")].join(",")).toBe("226,124,140,69"); // U+7AA9
expect(() => {ms932Encoder.encode("\u7AAB")}).toThrowError({name:"TypeError",message:"EncodingError U+7AAB"});
expect(() => {ms932Encoder.encode("\u7AAC")}).toThrowError({name:"TypeError",message:"EncodingError U+7AAC"});
expect(() => {ms932Encoder.encode("\u7AAD")}).toThrowError({name:"TypeError",message:"EncodingError U+7AAD"});
expect([...ms932Encoder.encode("窮窯窰")].join(",")).toBe("139,135,151,113,226,126"); // U+7AAE
expect(() => {ms932Encoder.encode("\u7AB1")}).toThrowError({name:"TypeError",message:"EncodingError U+7AB1"});
expect(() => {ms932Encoder.encode("\u7AB2")}).toThrowError({name:"TypeError",message:"EncodingError U+7AB2"});
expect(() => {ms932Encoder.encode("\u7AB3")}).toThrowError({name:"TypeError",message:"EncodingError U+7AB3"});
expect(() => {ms932Encoder.encode("\u7AB4")}).toThrowError({name:"TypeError",message:"EncodingError U+7AB4"});
expect(() => {ms932Encoder.encode("\u7AB5")}).toThrowError({name:"TypeError",message:"EncodingError U+7AB5"});
expect([...ms932Encoder.encode("窶")].join(",")).toBe("226,128"); // U+7AB6
expect(() => {ms932Encoder.encode("\u7AB7")}).toThrowError({name:"TypeError",message:"EncodingError U+7AB7"});
expect(() => {ms932Encoder.encode("\u7AB8")}).toThrowError({name:"TypeError",message:"EncodingError U+7AB8"});
expect(() => {ms932Encoder.encode("\u7AB9")}).toThrowError({name:"TypeError",message:"EncodingError U+7AB9"});
expect([...ms932Encoder.encode("窺")].join(",")).toBe("137,77"); // U+7ABA
expect(() => {ms932Encoder.encode("\u7ABB")}).toThrowError({name:"TypeError",message:"EncodingError U+7ABB"});
expect(() => {ms932Encoder.encode("\u7ABC")}).toThrowError({name:"TypeError",message:"EncodingError U+7ABC"});
expect(() => {ms932Encoder.encode("\u7ABD")}).toThrowError({name:"TypeError",message:"EncodingError U+7ABD"});
expect(() => {ms932Encoder.encode("\u7ABE")}).toThrowError({name:"TypeError",message:"EncodingError U+7ABE"});
expect([...ms932Encoder.encode("窿")].join(",")).toBe("226,131"); // U+7ABF
expect(() => {ms932Encoder.encode("\u7AC0")}).toThrowError({name:"TypeError",message:"EncodingError U+7AC0"});
expect(() => {ms932Encoder.encode("\u7AC1")}).toThrowError({name:"TypeError",message:"EncodingError U+7AC1"});
expect(() => {ms932Encoder.encode("\u7AC2")}).toThrowError({name:"TypeError",message:"EncodingError U+7AC2"});
expect([...ms932Encoder.encode("竃竄竅")].join(",")).toBe("138,150,226,130,226,129"); // U+7AC3
expect(() => {ms932Encoder.encode("\u7AC6")}).toThrowError({name:"TypeError",message:"EncodingError U+7AC6"});
expect([...ms932Encoder.encode("竇竈")].join(",")).toBe("226,133,226,125"); // U+7AC7
expect(() => {ms932Encoder.encode("\u7AC9")}).toThrowError({name:"TypeError",message:"EncodingError U+7AC9"});
expect([...ms932Encoder.encode("竊立")].join(",")).toBe("226,134,151,167"); // U+7ACA
expect(() => {ms932Encoder.encode("\u7ACC")}).toThrowError({name:"TypeError",message:"EncodingError U+7ACC"});
expect([...ms932Encoder.encode("竍")].join(",")).toBe("226,135"); // U+7ACD
expect(() => {ms932Encoder.encode("\u7ACE")}).toThrowError({name:"TypeError",message:"EncodingError U+7ACE"});
expect([...ms932Encoder.encode("竏")].join(",")).toBe("226,136"); // U+7ACF
expect(() => {ms932Encoder.encode("\u7AD0")}).toThrowError({name:"TypeError",message:"EncodingError U+7AD0"});
expect([...ms932Encoder.encode("竑竒竓")].join(",")).toBe("251,132,154,242,226,138"); // U+7AD1
expect(() => {ms932Encoder.encode("\u7AD4")}).toThrowError({name:"TypeError",message:"EncodingError U+7AD4"});
expect([...ms932Encoder.encode("竕")].join(",")).toBe("226,137"); // U+7AD5
expect(() => {ms932Encoder.encode("\u7AD6")}).toThrowError({name:"TypeError",message:"EncodingError U+7AD6"});
expect(() => {ms932Encoder.encode("\u7AD7")}).toThrowError({name:"TypeError",message:"EncodingError U+7AD7"});
expect(() => {ms932Encoder.encode("\u7AD8")}).toThrowError({name:"TypeError",message:"EncodingError U+7AD8"});
expect([...ms932Encoder.encode("站竚")].join(",")).toBe("226,139,226,140"); // U+7AD9
expect(() => {ms932Encoder.encode("\u7ADB")}).toThrowError({name:"TypeError",message:"EncodingError U+7ADB"});
expect([...ms932Encoder.encode("竜竝")].join(",")).toBe("151,179,226,141"); // U+7ADC
expect(() => {ms932Encoder.encode("\u7ADE")}).toThrowError({name:"TypeError",message:"EncodingError U+7ADE"});
expect([...ms932Encoder.encode("竟章竡竢竣")].join(",")).toBe("232,237,143,205,226,142,226,143,143,118"); // U+7ADF
expect(() => {ms932Encoder.encode("\u7AE4")}).toThrowError({name:"TypeError",message:"EncodingError U+7AE4"});
expect([...ms932Encoder.encode("童竦竧")].join(",")).toBe("147,182,226,144,251,133"); // U+7AE5
expect(() => {ms932Encoder.encode("\u7AE8")}).toThrowError({name:"TypeError",message:"EncodingError U+7AE8"});
expect(() => {ms932Encoder.encode("\u7AE9")}).toThrowError({name:"TypeError",message:"EncodingError U+7AE9"});
expect([...ms932Encoder.encode("竪竫")].join(",")).toBe("146,71,251,135"); // U+7AEA
expect(() => {ms932Encoder.encode("\u7AEC")}).toThrowError({name:"TypeError",message:"EncodingError U+7AEC"});
expect([...ms932Encoder.encode("竭")].join(",")).toBe("226,145"); // U+7AED
expect(() => {ms932Encoder.encode("\u7AEE")}).toThrowError({name:"TypeError",message:"EncodingError U+7AEE"});
expect([...ms932Encoder.encode("端竰")].join(",")).toBe("146,91,226,146"); // U+7AEF
expect(() => {ms932Encoder.encode("\u7AF1")}).toThrowError({name:"TypeError",message:"EncodingError U+7AF1"});
expect(() => {ms932Encoder.encode("\u7AF2")}).toThrowError({name:"TypeError",message:"EncodingError U+7AF2"});
expect(() => {ms932Encoder.encode("\u7AF3")}).toThrowError({name:"TypeError",message:"EncodingError U+7AF3"});
expect(() => {ms932Encoder.encode("\u7AF4")}).toThrowError({name:"TypeError",message:"EncodingError U+7AF4"});
expect(() => {ms932Encoder.encode("\u7AF5")}).toThrowError({name:"TypeError",message:"EncodingError U+7AF5"});
expect([...ms932Encoder.encode("競")].join(",")).toBe("139,163"); // U+7AF6
expect(() => {ms932Encoder.encode("\u7AF7")}).toThrowError({name:"TypeError",message:"EncodingError U+7AF7"});
expect([...ms932Encoder.encode("竸竹竺")].join(",")).toBe("153,94,146,124,142,177"); // U+7AF8
expect(() => {ms932Encoder.encode("\u7AFB")}).toThrowError({name:"TypeError",message:"EncodingError U+7AFB"});
expect(() => {ms932Encoder.encode("\u7AFC")}).toThrowError({name:"TypeError",message:"EncodingError U+7AFC"});
expect(() => {ms932Encoder.encode("\u7AFD")}).toThrowError({name:"TypeError",message:"EncodingError U+7AFD"});
expect(() => {ms932Encoder.encode("\u7AFE")}).toThrowError({name:"TypeError",message:"EncodingError U+7AFE"});
expect([...ms932Encoder.encode("竿")].join(",")).toBe("138,198"); // U+7AFF
expect(() => {ms932Encoder.encode("\u7B00")}).toThrowError({name:"TypeError",message:"EncodingError U+7B00"});
expect(() => {ms932Encoder.encode("\u7B01")}).toThrowError({name:"TypeError",message:"EncodingError U+7B01"});
expect([...ms932Encoder.encode("笂")].join(",")).toBe("226,147"); // U+7B02
expect(() => {ms932Encoder.encode("\u7B03")}).toThrowError({name:"TypeError",message:"EncodingError U+7B03"});
expect([...ms932Encoder.encode("笄")].join(",")).toBe("226,160"); // U+7B04
expect(() => {ms932Encoder.encode("\u7B05")}).toThrowError({name:"TypeError",message:"EncodingError U+7B05"});
expect([...ms932Encoder.encode("笆")].join(",")).toBe("226,150"); // U+7B06
expect(() => {ms932Encoder.encode("\u7B07")}).toThrowError({name:"TypeError",message:"EncodingError U+7B07"});
expect([...ms932Encoder.encode("笈")].join(",")).toBe("139,136"); // U+7B08
expect(() => {ms932Encoder.encode("\u7B09")}).toThrowError({name:"TypeError",message:"EncodingError U+7B09"});
expect([...ms932Encoder.encode("笊笋")].join(",")).toBe("226,149,226,162"); // U+7B0A
expect(() => {ms932Encoder.encode("\u7B0C")}).toThrowError({name:"TypeError",message:"EncodingError U+7B0C"});
expect(() => {ms932Encoder.encode("\u7B0D")}).toThrowError({name:"TypeError",message:"EncodingError U+7B0D"});
expect(() => {ms932Encoder.encode("\u7B0E")}).toThrowError({name:"TypeError",message:"EncodingError U+7B0E"});
expect([...ms932Encoder.encode("笏")].join(",")).toBe("226,148"); // U+7B0F
expect(() => {ms932Encoder.encode("\u7B10")}).toThrowError({name:"TypeError",message:"EncodingError U+7B10"});
expect([...ms932Encoder.encode("笑")].join(",")).toBe("143,206"); // U+7B11
expect(() => {ms932Encoder.encode("\u7B12")}).toThrowError({name:"TypeError",message:"EncodingError U+7B12"});
expect(() => {ms932Encoder.encode("\u7B13")}).toThrowError({name:"TypeError",message:"EncodingError U+7B13"});
expect(() => {ms932Encoder.encode("\u7B14")}).toThrowError({name:"TypeError",message:"EncodingError U+7B14"});
expect(() => {ms932Encoder.encode("\u7B15")}).toThrowError({name:"TypeError",message:"EncodingError U+7B15"});
expect(() => {ms932Encoder.encode("\u7B16")}).toThrowError({name:"TypeError",message:"EncodingError U+7B16"});
expect(() => {ms932Encoder.encode("\u7B17")}).toThrowError({name:"TypeError",message:"EncodingError U+7B17"});
expect([...ms932Encoder.encode("笘笙")].join(",")).toBe("226,152,226,153"); // U+7B18
expect(() => {ms932Encoder.encode("\u7B1A")}).toThrowError({name:"TypeError",message:"EncodingError U+7B1A"});
expect([...ms932Encoder.encode("笛")].join(",")).toBe("147,74"); // U+7B1B
expect(() => {ms932Encoder.encode("\u7B1C")}).toThrowError({name:"TypeError",message:"EncodingError U+7B1C"});
expect(() => {ms932Encoder.encode("\u7B1D")}).toThrowError({name:"TypeError",message:"EncodingError U+7B1D"});
expect([...ms932Encoder.encode("笞")].join(",")).toBe("226,154"); // U+7B1E
expect(() => {ms932Encoder.encode("\u7B1F")}).toThrowError({name:"TypeError",message:"EncodingError U+7B1F"});
expect([...ms932Encoder.encode("笠")].join(",")).toBe("138,125"); // U+7B20
expect(() => {ms932Encoder.encode("\u7B21")}).toThrowError({name:"TypeError",message:"EncodingError U+7B21"});
expect(() => {ms932Encoder.encode("\u7B22")}).toThrowError({name:"TypeError",message:"EncodingError U+7B22"});
expect(() => {ms932Encoder.encode("\u7B23")}).toThrowError({name:"TypeError",message:"EncodingError U+7B23"});
expect(() => {ms932Encoder.encode("\u7B24")}).toThrowError({name:"TypeError",message:"EncodingError U+7B24"});
expect([...ms932Encoder.encode("笥符")].join(",")).toBe("144,121,149,132"); // U+7B25
expect(() => {ms932Encoder.encode("\u7B27")}).toThrowError({name:"TypeError",message:"EncodingError U+7B27"});
expect([...ms932Encoder.encode("笨")].join(",")).toBe("226,156"); // U+7B28
expect(() => {ms932Encoder.encode("\u7B29")}).toThrowError({name:"TypeError",message:"EncodingError U+7B29"});
expect(() => {ms932Encoder.encode("\u7B2A")}).toThrowError({name:"TypeError",message:"EncodingError U+7B2A"});
expect(() => {ms932Encoder.encode("\u7B2B")}).toThrowError({name:"TypeError",message:"EncodingError U+7B2B"});
expect([...ms932Encoder.encode("第")].join(",")).toBe("145,230"); // U+7B2C
expect(() => {ms932Encoder.encode("\u7B2D")}).toThrowError({name:"TypeError",message:"EncodingError U+7B2D"});
expect(() => {ms932Encoder.encode("\u7B2E")}).toThrowError({name:"TypeError",message:"EncodingError U+7B2E"});
expect(() => {ms932Encoder.encode("\u7B2F")}).toThrowError({name:"TypeError",message:"EncodingError U+7B2F"});
expect(() => {ms932Encoder.encode("\u7B30")}).toThrowError({name:"TypeError",message:"EncodingError U+7B30"});
expect(() => {ms932Encoder.encode("\u7B31")}).toThrowError({name:"TypeError",message:"EncodingError U+7B31"});
expect(() => {ms932Encoder.encode("\u7B32")}).toThrowError({name:"TypeError",message:"EncodingError U+7B32"});
expect([...ms932Encoder.encode("笳")].join(",")).toBe("226,151"); // U+7B33
expect(() => {ms932Encoder.encode("\u7B34")}).toThrowError({name:"TypeError",message:"EncodingError U+7B34"});
expect([...ms932Encoder.encode("笵笶")].join(",")).toBe("226,155,226,157"); // U+7B35
expect(() => {ms932Encoder.encode("\u7B37")}).toThrowError({name:"TypeError",message:"EncodingError U+7B37"});
expect(() => {ms932Encoder.encode("\u7B38")}).toThrowError({name:"TypeError",message:"EncodingError U+7B38"});
expect([...ms932Encoder.encode("笹")].join(",")).toBe("141,249"); // U+7B39
expect(() => {ms932Encoder.encode("\u7B3A")}).toThrowError({name:"TypeError",message:"EncodingError U+7B3A"});
expect(() => {ms932Encoder.encode("\u7B3B")}).toThrowError({name:"TypeError",message:"EncodingError U+7B3B"});
expect(() => {ms932Encoder.encode("\u7B3C")}).toThrowError({name:"TypeError",message:"EncodingError U+7B3C"});
expect(() => {ms932Encoder.encode("\u7B3D")}).toThrowError({name:"TypeError",message:"EncodingError U+7B3D"});
expect(() => {ms932Encoder.encode("\u7B3E")}).toThrowError({name:"TypeError",message:"EncodingError U+7B3E"});
expect(() => {ms932Encoder.encode("\u7B3F")}).toThrowError({name:"TypeError",message:"EncodingError U+7B3F"});
expect(() => {ms932Encoder.encode("\u7B40")}).toThrowError({name:"TypeError",message:"EncodingError U+7B40"});
expect(() => {ms932Encoder.encode("\u7B41")}).toThrowError({name:"TypeError",message:"EncodingError U+7B41"});
expect(() => {ms932Encoder.encode("\u7B42")}).toThrowError({name:"TypeError",message:"EncodingError U+7B42"});
expect(() => {ms932Encoder.encode("\u7B43")}).toThrowError({name:"TypeError",message:"EncodingError U+7B43"});
expect(() => {ms932Encoder.encode("\u7B44")}).toThrowError({name:"TypeError",message:"EncodingError U+7B44"});
expect([...ms932Encoder.encode("筅筆")].join(",")).toBe("226,164,149,77"); // U+7B45
expect(() => {ms932Encoder.encode("\u7B47")}).toThrowError({name:"TypeError",message:"EncodingError U+7B47"});
expect([...ms932Encoder.encode("筈等")].join(",")).toBe("148,164,147,153"); // U+7B48
expect(() => {ms932Encoder.encode("\u7B4A")}).toThrowError({name:"TypeError",message:"EncodingError U+7B4A"});
expect([...ms932Encoder.encode("筋筌筍")].join(",")).toBe("139,216,226,163,226,161"); // U+7B4B
expect(() => {ms932Encoder.encode("\u7B4E")}).toThrowError({name:"TypeError",message:"EncodingError U+7B4E"});
expect([...ms932Encoder.encode("筏筐筑筒")].join(",")).toBe("148,179,226,158,146,125,147,155"); // U+7B4F
expect(() => {ms932Encoder.encode("\u7B53")}).toThrowError({name:"TypeError",message:"EncodingError U+7B53"});
expect([...ms932Encoder.encode("答")].join(",")).toBe("147,154"); // U+7B54
expect(() => {ms932Encoder.encode("\u7B55")}).toThrowError({name:"TypeError",message:"EncodingError U+7B55"});
expect([...ms932Encoder.encode("策")].join(",")).toBe("141,244"); // U+7B56
expect(() => {ms932Encoder.encode("\u7B57")}).toThrowError({name:"TypeError",message:"EncodingError U+7B57"});
expect(() => {ms932Encoder.encode("\u7B58")}).toThrowError({name:"TypeError",message:"EncodingError U+7B58"});
expect(() => {ms932Encoder.encode("\u7B59")}).toThrowError({name:"TypeError",message:"EncodingError U+7B59"});
expect(() => {ms932Encoder.encode("\u7B5A")}).toThrowError({name:"TypeError",message:"EncodingError U+7B5A"});
expect(() => {ms932Encoder.encode("\u7B5B")}).toThrowError({name:"TypeError",message:"EncodingError U+7B5B"});
expect(() => {ms932Encoder.encode("\u7B5C")}).toThrowError({name:"TypeError",message:"EncodingError U+7B5C"});
expect([...ms932Encoder.encode("筝")].join(",")).toBe("226,182"); // U+7B5D
expect(() => {ms932Encoder.encode("\u7B5E")}).toThrowError({name:"TypeError",message:"EncodingError U+7B5E"});
expect(() => {ms932Encoder.encode("\u7B5F")}).toThrowError({name:"TypeError",message:"EncodingError U+7B5F"});
expect(() => {ms932Encoder.encode("\u7B60")}).toThrowError({name:"TypeError",message:"EncodingError U+7B60"});
expect(() => {ms932Encoder.encode("\u7B61")}).toThrowError({name:"TypeError",message:"EncodingError U+7B61"});
expect(() => {ms932Encoder.encode("\u7B62")}).toThrowError({name:"TypeError",message:"EncodingError U+7B62"});
expect(() => {ms932Encoder.encode("\u7B63")}).toThrowError({name:"TypeError",message:"EncodingError U+7B63"});
expect(() => {ms932Encoder.encode("\u7B64")}).toThrowError({name:"TypeError",message:"EncodingError U+7B64"});
expect([...ms932Encoder.encode("筥")].join(",")).toBe("226,166"); // U+7B65
expect(() => {ms932Encoder.encode("\u7B66")}).toThrowError({name:"TypeError",message:"EncodingError U+7B66"});
expect([...ms932Encoder.encode("筧")].join(",")).toBe("226,168"); // U+7B67
expect(() => {ms932Encoder.encode("\u7B68")}).toThrowError({name:"TypeError",message:"EncodingError U+7B68"});
expect(() => {ms932Encoder.encode("\u7B69")}).toThrowError({name:"TypeError",message:"EncodingError U+7B69"});
expect(() => {ms932Encoder.encode("\u7B6A")}).toThrowError({name:"TypeError",message:"EncodingError U+7B6A"});
expect(() => {ms932Encoder.encode("\u7B6B")}).toThrowError({name:"TypeError",message:"EncodingError U+7B6B"});
expect([...ms932Encoder.encode("筬")].join(",")).toBe("226,171"); // U+7B6C
expect(() => {ms932Encoder.encode("\u7B6D")}).toThrowError({name:"TypeError",message:"EncodingError U+7B6D"});
expect([...ms932Encoder.encode("筮")].join(",")).toBe("226,172"); // U+7B6E
expect(() => {ms932Encoder.encode("\u7B6F")}).toThrowError({name:"TypeError",message:"EncodingError U+7B6F"});
expect([...ms932Encoder.encode("筰筱")].join(",")).toBe("226,169,226,170"); // U+7B70
expect(() => {ms932Encoder.encode("\u7B72")}).toThrowError({name:"TypeError",message:"EncodingError U+7B72"});
expect(() => {ms932Encoder.encode("\u7B73")}).toThrowError({name:"TypeError",message:"EncodingError U+7B73"});
expect([...ms932Encoder.encode("筴筵")].join(",")).toBe("226,167,226,165"); // U+7B74
expect(() => {ms932Encoder.encode("\u7B76")}).toThrowError({name:"TypeError",message:"EncodingError U+7B76"});
expect(() => {ms932Encoder.encode("\u7B77")}).toThrowError({name:"TypeError",message:"EncodingError U+7B77"});
expect(() => {ms932Encoder.encode("\u7B78")}).toThrowError({name:"TypeError",message:"EncodingError U+7B78"});
expect(() => {ms932Encoder.encode("\u7B79")}).toThrowError({name:"TypeError",message:"EncodingError U+7B79"});
expect([...ms932Encoder.encode("筺")].join(",")).toBe("226,159"); // U+7B7A
expect(() => {ms932Encoder.encode("\u7B7B")}).toThrowError({name:"TypeError",message:"EncodingError U+7B7B"});
expect(() => {ms932Encoder.encode("\u7B7C")}).toThrowError({name:"TypeError",message:"EncodingError U+7B7C"});
expect(() => {ms932Encoder.encode("\u7B7D")}).toThrowError({name:"TypeError",message:"EncodingError U+7B7D"});
expect(() => {ms932Encoder.encode("\u7B7E")}).toThrowError({name:"TypeError",message:"EncodingError U+7B7E"});
expect(() => {ms932Encoder.encode("\u7B7F")}).toThrowError({name:"TypeError",message:"EncodingError U+7B7F"});
expect(() => {ms932Encoder.encode("\u7B80")}).toThrowError({name:"TypeError",message:"EncodingError U+7B80"});
expect(() => {ms932Encoder.encode("\u7B81")}).toThrowError({name:"TypeError",message:"EncodingError U+7B81"});
expect(() => {ms932Encoder.encode("\u7B82")}).toThrowError({name:"TypeError",message:"EncodingError U+7B82"});
expect(() => {ms932Encoder.encode("\u7B83")}).toThrowError({name:"TypeError",message:"EncodingError U+7B83"});
expect(() => {ms932Encoder.encode("\u7B84")}).toThrowError({name:"TypeError",message:"EncodingError U+7B84"});
expect(() => {ms932Encoder.encode("\u7B85")}).toThrowError({name:"TypeError",message:"EncodingError U+7B85"});
expect([...ms932Encoder.encode("箆箇")].join(",")).toBe("149,205,137,211"); // U+7B86
expect(() => {ms932Encoder.encode("\u7B88")}).toThrowError({name:"TypeError",message:"EncodingError U+7B88"});
expect(() => {ms932Encoder.encode("\u7B89")}).toThrowError({name:"TypeError",message:"EncodingError U+7B89"});
expect(() => {ms932Encoder.encode("\u7B8A")}).toThrowError({name:"TypeError",message:"EncodingError U+7B8A"});
expect([...ms932Encoder.encode("箋")].join(",")).toBe("226,179"); // U+7B8B
expect(() => {ms932Encoder.encode("\u7B8C")}).toThrowError({name:"TypeError",message:"EncodingError U+7B8C"});
expect([...ms932Encoder.encode("箍")].join(",")).toBe("226,176"); // U+7B8D
expect(() => {ms932Encoder.encode("\u7B8E")}).toThrowError({name:"TypeError",message:"EncodingError U+7B8E"});
expect([...ms932Encoder.encode("箏")].join(",")).toBe("226,181"); // U+7B8F
expect(() => {ms932Encoder.encode("\u7B90")}).toThrowError({name:"TypeError",message:"EncodingError U+7B90"});
expect(() => {ms932Encoder.encode("\u7B91")}).toThrowError({name:"TypeError",message:"EncodingError U+7B91"});
expect([...ms932Encoder.encode("箒")].join(",")).toBe("226,180"); // U+7B92
expect(() => {ms932Encoder.encode("\u7B93")}).toThrowError({name:"TypeError",message:"EncodingError U+7B93"});
expect([...ms932Encoder.encode("箔箕")].join(",")).toBe("148,147,150,165"); // U+7B94
expect(() => {ms932Encoder.encode("\u7B96")}).toThrowError({name:"TypeError",message:"EncodingError U+7B96"});
expect([...ms932Encoder.encode("算箘箙箚")].join(",")).toBe("142,90,226,174,226,183,226,178"); // U+7B97
expect(() => {ms932Encoder.encode("\u7B9B")}).toThrowError({name:"TypeError",message:"EncodingError U+7B9B"});
expect([...ms932Encoder.encode("箜箝箞箟")].join(",")).toBe("226,177,226,173,251,136,226,175"); // U+7B9C
expect(() => {ms932Encoder.encode("\u7BA0")}).toThrowError({name:"TypeError",message:"EncodingError U+7BA0"});
expect([...ms932Encoder.encode("管")].join(",")).toBe("138,199"); // U+7BA1
expect(() => {ms932Encoder.encode("\u7BA2")}).toThrowError({name:"TypeError",message:"EncodingError U+7BA2"});
expect(() => {ms932Encoder.encode("\u7BA3")}).toThrowError({name:"TypeError",message:"EncodingError U+7BA3"});
expect(() => {ms932Encoder.encode("\u7BA4")}).toThrowError({name:"TypeError",message:"EncodingError U+7BA4"});
expect(() => {ms932Encoder.encode("\u7BA5")}).toThrowError({name:"TypeError",message:"EncodingError U+7BA5"});
expect(() => {ms932Encoder.encode("\u7BA6")}).toThrowError({name:"TypeError",message:"EncodingError U+7BA6"});
expect(() => {ms932Encoder.encode("\u7BA7")}).toThrowError({name:"TypeError",message:"EncodingError U+7BA7"});
expect(() => {ms932Encoder.encode("\u7BA8")}).toThrowError({name:"TypeError",message:"EncodingError U+7BA8"});
expect(() => {ms932Encoder.encode("\u7BA9")}).toThrowError({name:"TypeError",message:"EncodingError U+7BA9"});
expect([...ms932Encoder.encode("箪")].join(",")).toBe("146,92"); // U+7BAA
expect(() => {ms932Encoder.encode("\u7BAB")}).toThrowError({name:"TypeError",message:"EncodingError U+7BAB"});
expect(() => {ms932Encoder.encode("\u7BAC")}).toThrowError({name:"TypeError",message:"EncodingError U+7BAC"});
expect([...ms932Encoder.encode("箭")].join(",")).toBe("144,251"); // U+7BAD
expect(() => {ms932Encoder.encode("\u7BAE")}).toThrowError({name:"TypeError",message:"EncodingError U+7BAE"});
expect(() => {ms932Encoder.encode("\u7BAF")}).toThrowError({name:"TypeError",message:"EncodingError U+7BAF"});
expect(() => {ms932Encoder.encode("\u7BB0")}).toThrowError({name:"TypeError",message:"EncodingError U+7BB0"});
expect([...ms932Encoder.encode("箱")].join(",")).toBe("148,160"); // U+7BB1
expect(() => {ms932Encoder.encode("\u7BB2")}).toThrowError({name:"TypeError",message:"EncodingError U+7BB2"});
expect(() => {ms932Encoder.encode("\u7BB3")}).toThrowError({name:"TypeError",message:"EncodingError U+7BB3"});
expect([...ms932Encoder.encode("箴")].join(",")).toBe("226,188"); // U+7BB4
expect(() => {ms932Encoder.encode("\u7BB5")}).toThrowError({name:"TypeError",message:"EncodingError U+7BB5"});
expect(() => {ms932Encoder.encode("\u7BB6")}).toThrowError({name:"TypeError",message:"EncodingError U+7BB6"});
expect(() => {ms932Encoder.encode("\u7BB7")}).toThrowError({name:"TypeError",message:"EncodingError U+7BB7"});
expect([...ms932Encoder.encode("箸")].join(",")).toBe("148,162"); // U+7BB8
expect(() => {ms932Encoder.encode("\u7BB9")}).toThrowError({name:"TypeError",message:"EncodingError U+7BB9"});
expect(() => {ms932Encoder.encode("\u7BBA")}).toThrowError({name:"TypeError",message:"EncodingError U+7BBA"});
expect(() => {ms932Encoder.encode("\u7BBB")}).toThrowError({name:"TypeError",message:"EncodingError U+7BBB"});
expect(() => {ms932Encoder.encode("\u7BBC")}).toThrowError({name:"TypeError",message:"EncodingError U+7BBC"});
expect(() => {ms932Encoder.encode("\u7BBD")}).toThrowError({name:"TypeError",message:"EncodingError U+7BBD"});
expect(() => {ms932Encoder.encode("\u7BBE")}).toThrowError({name:"TypeError",message:"EncodingError U+7BBE"});
expect(() => {ms932Encoder.encode("\u7BBF")}).toThrowError({name:"TypeError",message:"EncodingError U+7BBF"});
expect([...ms932Encoder.encode("節篁")].join(",")).toBe("144,223,226,185"); // U+7BC0
expect(() => {ms932Encoder.encode("\u7BC2")}).toThrowError({name:"TypeError",message:"EncodingError U+7BC2"});
expect(() => {ms932Encoder.encode("\u7BC3")}).toThrowError({name:"TypeError",message:"EncodingError U+7BC3"});
expect([...ms932Encoder.encode("範")].join(",")).toBe("148,205"); // U+7BC4
expect(() => {ms932Encoder.encode("\u7BC5")}).toThrowError({name:"TypeError",message:"EncodingError U+7BC5"});
expect([...ms932Encoder.encode("篆篇")].join(",")).toBe("226,189,149,209"); // U+7BC6
expect(() => {ms932Encoder.encode("\u7BC8")}).toThrowError({name:"TypeError",message:"EncodingError U+7BC8"});
expect([...ms932Encoder.encode("築")].join(",")).toBe("146,122"); // U+7BC9
expect(() => {ms932Encoder.encode("\u7BCA")}).toThrowError({name:"TypeError",message:"EncodingError U+7BCA"});
expect([...ms932Encoder.encode("篋篌")].join(",")).toBe("226,184,226,186"); // U+7BCB
expect(() => {ms932Encoder.encode("\u7BCD")}).toThrowError({name:"TypeError",message:"EncodingError U+7BCD"});
expect(() => {ms932Encoder.encode("\u7BCE")}).toThrowError({name:"TypeError",message:"EncodingError U+7BCE"});
expect([...ms932Encoder.encode("篏")].join(",")).toBe("226,187"); // U+7BCF
expect(() => {ms932Encoder.encode("\u7BD0")}).toThrowError({name:"TypeError",message:"EncodingError U+7BD0"});
expect(() => {ms932Encoder.encode("\u7BD1")}).toThrowError({name:"TypeError",message:"EncodingError U+7BD1"});
expect(() => {ms932Encoder.encode("\u7BD2")}).toThrowError({name:"TypeError",message:"EncodingError U+7BD2"});
expect(() => {ms932Encoder.encode("\u7BD3")}).toThrowError({name:"TypeError",message:"EncodingError U+7BD3"});
expect(() => {ms932Encoder.encode("\u7BD4")}).toThrowError({name:"TypeError",message:"EncodingError U+7BD4"});
expect(() => {ms932Encoder.encode("\u7BD5")}).toThrowError({name:"TypeError",message:"EncodingError U+7BD5"});
expect(() => {ms932Encoder.encode("\u7BD6")}).toThrowError({name:"TypeError",message:"EncodingError U+7BD6"});
expect(() => {ms932Encoder.encode("\u7BD7")}).toThrowError({name:"TypeError",message:"EncodingError U+7BD7"});
expect(() => {ms932Encoder.encode("\u7BD8")}).toThrowError({name:"TypeError",message:"EncodingError U+7BD8"});
expect(() => {ms932Encoder.encode("\u7BD9")}).toThrowError({name:"TypeError",message:"EncodingError U+7BD9"});
expect(() => {ms932Encoder.encode("\u7BDA")}).toThrowError({name:"TypeError",message:"EncodingError U+7BDA"});
expect(() => {ms932Encoder.encode("\u7BDB")}).toThrowError({name:"TypeError",message:"EncodingError U+7BDB"});
expect(() => {ms932Encoder.encode("\u7BDC")}).toThrowError({name:"TypeError",message:"EncodingError U+7BDC"});
expect([...ms932Encoder.encode("篝")].join(",")).toBe("226,190"); // U+7BDD
expect(() => {ms932Encoder.encode("\u7BDE")}).toThrowError({name:"TypeError",message:"EncodingError U+7BDE"});
expect(() => {ms932Encoder.encode("\u7BDF")}).toThrowError({name:"TypeError",message:"EncodingError U+7BDF"});
expect([...ms932Encoder.encode("篠")].join(",")).toBe("142,194"); // U+7BE0
expect(() => {ms932Encoder.encode("\u7BE1")}).toThrowError({name:"TypeError",message:"EncodingError U+7BE1"});
expect(() => {ms932Encoder.encode("\u7BE2")}).toThrowError({name:"TypeError",message:"EncodingError U+7BE2"});
expect(() => {ms932Encoder.encode("\u7BE3")}).toThrowError({name:"TypeError",message:"EncodingError U+7BE3"});
expect([...ms932Encoder.encode("篤篥篦")].join(",")).toBe("147,196,226,195,226,194"); // U+7BE4
expect(() => {ms932Encoder.encode("\u7BE7")}).toThrowError({name:"TypeError",message:"EncodingError U+7BE7"});
expect(() => {ms932Encoder.encode("\u7BE8")}).toThrowError({name:"TypeError",message:"EncodingError U+7BE8"});
expect([...ms932Encoder.encode("篩")].join(",")).toBe("226,191"); // U+7BE9
expect(() => {ms932Encoder.encode("\u7BEA")}).toThrowError({name:"TypeError",message:"EncodingError U+7BEA"});
expect(() => {ms932Encoder.encode("\u7BEB")}).toThrowError({name:"TypeError",message:"EncodingError U+7BEB"});
expect(() => {ms932Encoder.encode("\u7BEC")}).toThrowError({name:"TypeError",message:"EncodingError U+7BEC"});
expect([...ms932Encoder.encode("篭")].join(",")).toBe("152,85"); // U+7BED
expect(() => {ms932Encoder.encode("\u7BEE")}).toThrowError({name:"TypeError",message:"EncodingError U+7BEE"});
expect(() => {ms932Encoder.encode("\u7BEF")}).toThrowError({name:"TypeError",message:"EncodingError U+7BEF"});
expect(() => {ms932Encoder.encode("\u7BF0")}).toThrowError({name:"TypeError",message:"EncodingError U+7BF0"});
expect(() => {ms932Encoder.encode("\u7BF1")}).toThrowError({name:"TypeError",message:"EncodingError U+7BF1"});
expect(() => {ms932Encoder.encode("\u7BF2")}).toThrowError({name:"TypeError",message:"EncodingError U+7BF2"});
expect([...ms932Encoder.encode("篳")].join(",")).toBe("226,200"); // U+7BF3
expect(() => {ms932Encoder.encode("\u7BF4")}).toThrowError({name:"TypeError",message:"EncodingError U+7BF4"});
expect(() => {ms932Encoder.encode("\u7BF5")}).toThrowError({name:"TypeError",message:"EncodingError U+7BF5"});
expect([...ms932Encoder.encode("篶篷")].join(",")).toBe("226,204,226,201"); // U+7BF6
expect(() => {ms932Encoder.encode("\u7BF8")}).toThrowError({name:"TypeError",message:"EncodingError U+7BF8"});
expect(() => {ms932Encoder.encode("\u7BF9")}).toThrowError({name:"TypeError",message:"EncodingError U+7BF9"});
expect(() => {ms932Encoder.encode("\u7BFA")}).toThrowError({name:"TypeError",message:"EncodingError U+7BFA"});
expect(() => {ms932Encoder.encode("\u7BFB")}).toThrowError({name:"TypeError",message:"EncodingError U+7BFB"});
expect(() => {ms932Encoder.encode("\u7BFC")}).toThrowError({name:"TypeError",message:"EncodingError U+7BFC"});
expect(() => {ms932Encoder.encode("\u7BFD")}).toThrowError({name:"TypeError",message:"EncodingError U+7BFD"});
expect(() => {ms932Encoder.encode("\u7BFE")}).toThrowError({name:"TypeError",message:"EncodingError U+7BFE"});
expect(() => {ms932Encoder.encode("\u7BFF")}).toThrowError({name:"TypeError",message:"EncodingError U+7BFF"});
expect([...ms932Encoder.encode("簀")].join(",")).toBe("226,197"); // U+7C00
expect(() => {ms932Encoder.encode("\u7C01")}).toThrowError({name:"TypeError",message:"EncodingError U+7C01"});
expect(() => {ms932Encoder.encode("\u7C02")}).toThrowError({name:"TypeError",message:"EncodingError U+7C02"});
expect(() => {ms932Encoder.encode("\u7C03")}).toThrowError({name:"TypeError",message:"EncodingError U+7C03"});
expect(() => {ms932Encoder.encode("\u7C04")}).toThrowError({name:"TypeError",message:"EncodingError U+7C04"});
expect(() => {ms932Encoder.encode("\u7C05")}).toThrowError({name:"TypeError",message:"EncodingError U+7C05"});
expect(() => {ms932Encoder.encode("\u7C06")}).toThrowError({name:"TypeError",message:"EncodingError U+7C06"});
expect([...ms932Encoder.encode("簇")].join(",")).toBe("226,198"); // U+7C07
expect(() => {ms932Encoder.encode("\u7C08")}).toThrowError({name:"TypeError",message:"EncodingError U+7C08"});
expect(() => {ms932Encoder.encode("\u7C09")}).toThrowError({name:"TypeError",message:"EncodingError U+7C09"});
expect(() => {ms932Encoder.encode("\u7C0A")}).toThrowError({name:"TypeError",message:"EncodingError U+7C0A"});
expect(() => {ms932Encoder.encode("\u7C0B")}).toThrowError({name:"TypeError",message:"EncodingError U+7C0B"});
expect(() => {ms932Encoder.encode("\u7C0C")}).toThrowError({name:"TypeError",message:"EncodingError U+7C0C"});
expect([...ms932Encoder.encode("簍")].join(",")).toBe("226,203"); // U+7C0D
expect(() => {ms932Encoder.encode("\u7C0E")}).toThrowError({name:"TypeError",message:"EncodingError U+7C0E"});
expect(() => {ms932Encoder.encode("\u7C0F")}).toThrowError({name:"TypeError",message:"EncodingError U+7C0F"});
expect(() => {ms932Encoder.encode("\u7C10")}).toThrowError({name:"TypeError",message:"EncodingError U+7C10"});
expect([...ms932Encoder.encode("簑簒簓簔")].join(",")).toBe("226,192,153,211,226,199,226,193"); // U+7C11
expect(() => {ms932Encoder.encode("\u7C15")}).toThrowError({name:"TypeError",message:"EncodingError U+7C15"});
expect(() => {ms932Encoder.encode("\u7C16")}).toThrowError({name:"TypeError",message:"EncodingError U+7C16"});
expect([...ms932Encoder.encode("簗")].join(",")).toBe("226,202"); // U+7C17
expect(() => {ms932Encoder.encode("\u7C18")}).toThrowError({name:"TypeError",message:"EncodingError U+7C18"});
expect(() => {ms932Encoder.encode("\u7C19")}).toThrowError({name:"TypeError",message:"EncodingError U+7C19"});
expect(() => {ms932Encoder.encode("\u7C1A")}).toThrowError({name:"TypeError",message:"EncodingError U+7C1A"});
expect(() => {ms932Encoder.encode("\u7C1B")}).toThrowError({name:"TypeError",message:"EncodingError U+7C1B"});
expect(() => {ms932Encoder.encode("\u7C1C")}).toThrowError({name:"TypeError",message:"EncodingError U+7C1C"});
expect(() => {ms932Encoder.encode("\u7C1D")}).toThrowError({name:"TypeError",message:"EncodingError U+7C1D"});
expect(() => {ms932Encoder.encode("\u7C1E")}).toThrowError({name:"TypeError",message:"EncodingError U+7C1E"});
expect([...ms932Encoder.encode("簟")].join(",")).toBe("226,208"); // U+7C1F
expect(() => {ms932Encoder.encode("\u7C20")}).toThrowError({name:"TypeError",message:"EncodingError U+7C20"});
expect([...ms932Encoder.encode("簡")].join(",")).toBe("138,200"); // U+7C21
expect(() => {ms932Encoder.encode("\u7C22")}).toThrowError({name:"TypeError",message:"EncodingError U+7C22"});
expect([...ms932Encoder.encode("簣")].join(",")).toBe("226,205"); // U+7C23
expect(() => {ms932Encoder.encode("\u7C24")}).toThrowError({name:"TypeError",message:"EncodingError U+7C24"});
expect(() => {ms932Encoder.encode("\u7C25")}).toThrowError({name:"TypeError",message:"EncodingError U+7C25"});
expect(() => {ms932Encoder.encode("\u7C26")}).toThrowError({name:"TypeError",message:"EncodingError U+7C26"});
expect([...ms932Encoder.encode("簧")].join(",")).toBe("226,206"); // U+7C27
expect(() => {ms932Encoder.encode("\u7C28")}).toThrowError({name:"TypeError",message:"EncodingError U+7C28"});
expect(() => {ms932Encoder.encode("\u7C29")}).toThrowError({name:"TypeError",message:"EncodingError U+7C29"});
expect([...ms932Encoder.encode("簪簫")].join(",")).toBe("226,207,226,210"); // U+7C2A
expect(() => {ms932Encoder.encode("\u7C2C")}).toThrowError({name:"TypeError",message:"EncodingError U+7C2C"});
expect(() => {ms932Encoder.encode("\u7C2D")}).toThrowError({name:"TypeError",message:"EncodingError U+7C2D"});
expect(() => {ms932Encoder.encode("\u7C2E")}).toThrowError({name:"TypeError",message:"EncodingError U+7C2E"});
expect(() => {ms932Encoder.encode("\u7C2F")}).toThrowError({name:"TypeError",message:"EncodingError U+7C2F"});
expect(() => {ms932Encoder.encode("\u7C30")}).toThrowError({name:"TypeError",message:"EncodingError U+7C30"});
expect(() => {ms932Encoder.encode("\u7C31")}).toThrowError({name:"TypeError",message:"EncodingError U+7C31"});
expect(() => {ms932Encoder.encode("\u7C32")}).toThrowError({name:"TypeError",message:"EncodingError U+7C32"});
expect(() => {ms932Encoder.encode("\u7C33")}).toThrowError({name:"TypeError",message:"EncodingError U+7C33"});
expect(() => {ms932Encoder.encode("\u7C34")}).toThrowError({name:"TypeError",message:"EncodingError U+7C34"});
expect(() => {ms932Encoder.encode("\u7C35")}).toThrowError({name:"TypeError",message:"EncodingError U+7C35"});
expect(() => {ms932Encoder.encode("\u7C36")}).toThrowError({name:"TypeError",message:"EncodingError U+7C36"});
expect([...ms932Encoder.encode("簷簸")].join(",")).toBe("226,209,148,244"); // U+7C37
expect(() => {ms932Encoder.encode("\u7C39")}).toThrowError({name:"TypeError",message:"EncodingError U+7C39"});
expect(() => {ms932Encoder.encode("\u7C3A")}).toThrowError({name:"TypeError",message:"EncodingError U+7C3A"});
expect(() => {ms932Encoder.encode("\u7C3B")}).toThrowError({name:"TypeError",message:"EncodingError U+7C3B"});
expect(() => {ms932Encoder.encode("\u7C3C")}).toThrowError({name:"TypeError",message:"EncodingError U+7C3C"});
expect([...ms932Encoder.encode("簽簾簿籀")].join(",")).toBe("226,211,151,250,149,235,226,216"); // U+7C3D
expect(() => {ms932Encoder.encode("\u7C41")}).toThrowError({name:"TypeError",message:"EncodingError U+7C41"});
expect(() => {ms932Encoder.encode("\u7C42")}).toThrowError({name:"TypeError",message:"EncodingError U+7C42"});
expect([...ms932Encoder.encode("籃")].join(",")).toBe("226,213"); // U+7C43
expect(() => {ms932Encoder.encode("\u7C44")}).toThrowError({name:"TypeError",message:"EncodingError U+7C44"});
expect(() => {ms932Encoder.encode("\u7C45")}).toThrowError({name:"TypeError",message:"EncodingError U+7C45"});
expect(() => {ms932Encoder.encode("\u7C46")}).toThrowError({name:"TypeError",message:"EncodingError U+7C46"});
expect(() => {ms932Encoder.encode("\u7C47")}).toThrowError({name:"TypeError",message:"EncodingError U+7C47"});
expect(() => {ms932Encoder.encode("\u7C48")}).toThrowError({name:"TypeError",message:"EncodingError U+7C48"});
expect(() => {ms932Encoder.encode("\u7C49")}).toThrowError({name:"TypeError",message:"EncodingError U+7C49"});
expect(() => {ms932Encoder.encode("\u7C4A")}).toThrowError({name:"TypeError",message:"EncodingError U+7C4A"});
expect(() => {ms932Encoder.encode("\u7C4B")}).toThrowError({name:"TypeError",message:"EncodingError U+7C4B"});
expect([...ms932Encoder.encode("籌籍")].join(",")).toBe("226,212,144,208"); // U+7C4C
expect(() => {ms932Encoder.encode("\u7C4E")}).toThrowError({name:"TypeError",message:"EncodingError U+7C4E"});
expect([...ms932Encoder.encode("籏籐")].join(",")).toBe("226,215,226,217"); // U+7C4F
expect(() => {ms932Encoder.encode("\u7C51")}).toThrowError({name:"TypeError",message:"EncodingError U+7C51"});
expect(() => {ms932Encoder.encode("\u7C52")}).toThrowError({name:"TypeError",message:"EncodingError U+7C52"});
expect(() => {ms932Encoder.encode("\u7C53")}).toThrowError({name:"TypeError",message:"EncodingError U+7C53"});
expect([...ms932Encoder.encode("籔")].join(",")).toBe("226,214"); // U+7C54
expect(() => {ms932Encoder.encode("\u7C55")}).toThrowError({name:"TypeError",message:"EncodingError U+7C55"});
expect([...ms932Encoder.encode("籖")].join(",")).toBe("226,221"); // U+7C56
expect(() => {ms932Encoder.encode("\u7C57")}).toThrowError({name:"TypeError",message:"EncodingError U+7C57"});
expect([...ms932Encoder.encode("籘")].join(",")).toBe("226,218"); // U+7C58
expect(() => {ms932Encoder.encode("\u7C59")}).toThrowError({name:"TypeError",message:"EncodingError U+7C59"});
expect(() => {ms932Encoder.encode("\u7C5A")}).toThrowError({name:"TypeError",message:"EncodingError U+7C5A"});
expect(() => {ms932Encoder.encode("\u7C5B")}).toThrowError({name:"TypeError",message:"EncodingError U+7C5B"});
expect(() => {ms932Encoder.encode("\u7C5C")}).toThrowError({name:"TypeError",message:"EncodingError U+7C5C"});
expect(() => {ms932Encoder.encode("\u7C5D")}).toThrowError({name:"TypeError",message:"EncodingError U+7C5D"});
expect(() => {ms932Encoder.encode("\u7C5E")}).toThrowError({name:"TypeError",message:"EncodingError U+7C5E"});
expect([...ms932Encoder.encode("籟籠")].join(",")).toBe("226,219,226,196"); // U+7C5F
expect(() => {ms932Encoder.encode("\u7C61")}).toThrowError({name:"TypeError",message:"EncodingError U+7C61"});
expect(() => {ms932Encoder.encode("\u7C62")}).toThrowError({name:"TypeError",message:"EncodingError U+7C62"});
expect(() => {ms932Encoder.encode("\u7C63")}).toThrowError({name:"TypeError",message:"EncodingError U+7C63"});
expect([...ms932Encoder.encode("籤籥")].join(",")).toBe("226,220,226,222"); // U+7C64
expect(() => {ms932Encoder.encode("\u7C66")}).toThrowError({name:"TypeError",message:"EncodingError U+7C66"});
expect(() => {ms932Encoder.encode("\u7C67")}).toThrowError({name:"TypeError",message:"EncodingError U+7C67"});
expect(() => {ms932Encoder.encode("\u7C68")}).toThrowError({name:"TypeError",message:"EncodingError U+7C68"});
expect(() => {ms932Encoder.encode("\u7C69")}).toThrowError({name:"TypeError",message:"EncodingError U+7C69"});
expect(() => {ms932Encoder.encode("\u7C6A")}).toThrowError({name:"TypeError",message:"EncodingError U+7C6A"});
expect(() => {ms932Encoder.encode("\u7C6B")}).toThrowError({name:"TypeError",message:"EncodingError U+7C6B"});
expect([...ms932Encoder.encode("籬")].join(",")).toBe("226,223"); // U+7C6C
expect(() => {ms932Encoder.encode("\u7C6D")}).toThrowError({name:"TypeError",message:"EncodingError U+7C6D"});
expect(() => {ms932Encoder.encode("\u7C6E")}).toThrowError({name:"TypeError",message:"EncodingError U+7C6E"});
expect(() => {ms932Encoder.encode("\u7C6F")}).toThrowError({name:"TypeError",message:"EncodingError U+7C6F"});
expect(() => {ms932Encoder.encode("\u7C70")}).toThrowError({name:"TypeError",message:"EncodingError U+7C70"});
expect(() => {ms932Encoder.encode("\u7C71")}).toThrowError({name:"TypeError",message:"EncodingError U+7C71"});
expect(() => {ms932Encoder.encode("\u7C72")}).toThrowError({name:"TypeError",message:"EncodingError U+7C72"});
expect([...ms932Encoder.encode("米")].join(",")).toBe("149,196"); // U+7C73
expect(() => {ms932Encoder.encode("\u7C74")}).toThrowError({name:"TypeError",message:"EncodingError U+7C74"});
expect([...ms932Encoder.encode("籵")].join(",")).toBe("226,224"); // U+7C75
expect(() => {ms932Encoder.encode("\u7C76")}).toThrowError({name:"TypeError",message:"EncodingError U+7C76"});
expect(() => {ms932Encoder.encode("\u7C77")}).toThrowError({name:"TypeError",message:"EncodingError U+7C77"});
expect(() => {ms932Encoder.encode("\u7C78")}).toThrowError({name:"TypeError",message:"EncodingError U+7C78"});
expect(() => {ms932Encoder.encode("\u7C79")}).toThrowError({name:"TypeError",message:"EncodingError U+7C79"});
expect(() => {ms932Encoder.encode("\u7C7A")}).toThrowError({name:"TypeError",message:"EncodingError U+7C7A"});
expect(() => {ms932Encoder.encode("\u7C7B")}).toThrowError({name:"TypeError",message:"EncodingError U+7C7B"});
expect(() => {ms932Encoder.encode("\u7C7C")}).toThrowError({name:"TypeError",message:"EncodingError U+7C7C"});
expect(() => {ms932Encoder.encode("\u7C7D")}).toThrowError({name:"TypeError",message:"EncodingError U+7C7D"});
expect([...ms932Encoder.encode("籾")].join(",")).toBe("150,224"); // U+7C7E
expect(() => {ms932Encoder.encode("\u7C7F")}).toThrowError({name:"TypeError",message:"EncodingError U+7C7F"});
expect(() => {ms932Encoder.encode("\u7C80")}).toThrowError({name:"TypeError",message:"EncodingError U+7C80"});
expect([...ms932Encoder.encode("粁粂粃")].join(",")).toBe("139,204,140,72,226,225"); // U+7C81
expect(() => {ms932Encoder.encode("\u7C84")}).toThrowError({name:"TypeError",message:"EncodingError U+7C84"});
expect(() => {ms932Encoder.encode("\u7C85")}).toThrowError({name:"TypeError",message:"EncodingError U+7C85"});
expect(() => {ms932Encoder.encode("\u7C86")}).toThrowError({name:"TypeError",message:"EncodingError U+7C86"});
expect(() => {ms932Encoder.encode("\u7C87")}).toThrowError({name:"TypeError",message:"EncodingError U+7C87"});
expect(() => {ms932Encoder.encode("\u7C88")}).toThrowError({name:"TypeError",message:"EncodingError U+7C88"});
expect([...ms932Encoder.encode("粉")].join(",")).toBe("149,178"); // U+7C89
expect(() => {ms932Encoder.encode("\u7C8A")}).toThrowError({name:"TypeError",message:"EncodingError U+7C8A"});
expect([...ms932Encoder.encode("粋")].join(",")).toBe("144,136"); // U+7C8B
expect(() => {ms932Encoder.encode("\u7C8C")}).toThrowError({name:"TypeError",message:"EncodingError U+7C8C"});
expect([...ms932Encoder.encode("粍")].join(",")).toBe("150,174"); // U+7C8D
expect(() => {ms932Encoder.encode("\u7C8E")}).toThrowError({name:"TypeError",message:"EncodingError U+7C8E"});
expect(() => {ms932Encoder.encode("\u7C8F")}).toThrowError({name:"TypeError",message:"EncodingError U+7C8F"});
expect([...ms932Encoder.encode("粐")].join(",")).toBe("226,226"); // U+7C90
expect(() => {ms932Encoder.encode("\u7C91")}).toThrowError({name:"TypeError",message:"EncodingError U+7C91"});
expect([...ms932Encoder.encode("粒")].join(",")).toBe("151,177"); // U+7C92
expect(() => {ms932Encoder.encode("\u7C93")}).toThrowError({name:"TypeError",message:"EncodingError U+7C93"});
expect(() => {ms932Encoder.encode("\u7C94")}).toThrowError({name:"TypeError",message:"EncodingError U+7C94"});
expect([...ms932Encoder.encode("粕")].join(",")).toBe("148,148"); // U+7C95
expect(() => {ms932Encoder.encode("\u7C96")}).toThrowError({name:"TypeError",message:"EncodingError U+7C96"});
expect([...ms932Encoder.encode("粗粘")].join(",")).toBe("145,101,148,83"); // U+7C97
expect(() => {ms932Encoder.encode("\u7C99")}).toThrowError({name:"TypeError",message:"EncodingError U+7C99"});
expect(() => {ms932Encoder.encode("\u7C9A")}).toThrowError({name:"TypeError",message:"EncodingError U+7C9A"});
expect([...ms932Encoder.encode("粛")].join(",")).toBe("143,108"); // U+7C9B
expect(() => {ms932Encoder.encode("\u7C9C")}).toThrowError({name:"TypeError",message:"EncodingError U+7C9C"});
expect(() => {ms932Encoder.encode("\u7C9D")}).toThrowError({name:"TypeError",message:"EncodingError U+7C9D"});
expect(() => {ms932Encoder.encode("\u7C9E")}).toThrowError({name:"TypeError",message:"EncodingError U+7C9E"});
expect([...ms932Encoder.encode("粟")].join(",")).toBe("136,190"); // U+7C9F
expect(() => {ms932Encoder.encode("\u7CA0")}).toThrowError({name:"TypeError",message:"EncodingError U+7CA0"});
expect([...ms932Encoder.encode("粡粢")].join(",")).toBe("226,231,226,229"); // U+7CA1
expect(() => {ms932Encoder.encode("\u7CA3")}).toThrowError({name:"TypeError",message:"EncodingError U+7CA3"});
expect([...ms932Encoder.encode("粤粥")].join(",")).toBe("226,227,138,159"); // U+7CA4
expect(() => {ms932Encoder.encode("\u7CA6")}).toThrowError({name:"TypeError",message:"EncodingError U+7CA6"});
expect([...ms932Encoder.encode("粧粨")].join(",")).toBe("143,207,226,232"); // U+7CA7
expect(() => {ms932Encoder.encode("\u7CA9")}).toThrowError({name:"TypeError",message:"EncodingError U+7CA9"});
expect(() => {ms932Encoder.encode("\u7CAA")}).toThrowError({name:"TypeError",message:"EncodingError U+7CAA"});
expect([...ms932Encoder.encode("粫")].join(",")).toBe("226,230"); // U+7CAB
expect(() => {ms932Encoder.encode("\u7CAC")}).toThrowError({name:"TypeError",message:"EncodingError U+7CAC"});
expect([...ms932Encoder.encode("粭粮")].join(",")).toBe("226,228,226,236"); // U+7CAD
expect(() => {ms932Encoder.encode("\u7CAF")}).toThrowError({name:"TypeError",message:"EncodingError U+7CAF"});
expect(() => {ms932Encoder.encode("\u7CB0")}).toThrowError({name:"TypeError",message:"EncodingError U+7CB0"});
expect([...ms932Encoder.encode("粱粲粳")].join(",")).toBe("226,235,226,234,226,233"); // U+7CB1
expect(() => {ms932Encoder.encode("\u7CB4")}).toThrowError({name:"TypeError",message:"EncodingError U+7CB4"});
expect(() => {ms932Encoder.encode("\u7CB5")}).toThrowError({name:"TypeError",message:"EncodingError U+7CB5"});
expect(() => {ms932Encoder.encode("\u7CB6")}).toThrowError({name:"TypeError",message:"EncodingError U+7CB6"});
expect(() => {ms932Encoder.encode("\u7CB7")}).toThrowError({name:"TypeError",message:"EncodingError U+7CB7"});
expect(() => {ms932Encoder.encode("\u7CB8")}).toThrowError({name:"TypeError",message:"EncodingError U+7CB8"});
expect([...ms932Encoder.encode("粹")].join(",")).toBe("226,237"); // U+7CB9
expect(() => {ms932Encoder.encode("\u7CBA")}).toThrowError({name:"TypeError",message:"EncodingError U+7CBA"});
expect(() => {ms932Encoder.encode("\u7CBB")}).toThrowError({name:"TypeError",message:"EncodingError U+7CBB"});
expect(() => {ms932Encoder.encode("\u7CBC")}).toThrowError({name:"TypeError",message:"EncodingError U+7CBC"});
expect([...ms932Encoder.encode("粽精")].join(",")).toBe("226,238,144,184"); // U+7CBD
expect(() => {ms932Encoder.encode("\u7CBF")}).toThrowError({name:"TypeError",message:"EncodingError U+7CBF"});
expect([...ms932Encoder.encode("糀")].join(",")).toBe("226,239"); // U+7CC0
expect(() => {ms932Encoder.encode("\u7CC1")}).toThrowError({name:"TypeError",message:"EncodingError U+7CC1"});
expect([...ms932Encoder.encode("糂")].join(",")).toBe("226,241"); // U+7CC2
expect(() => {ms932Encoder.encode("\u7CC3")}).toThrowError({name:"TypeError",message:"EncodingError U+7CC3"});
expect(() => {ms932Encoder.encode("\u7CC4")}).toThrowError({name:"TypeError",message:"EncodingError U+7CC4"});
expect([...ms932Encoder.encode("糅")].join(",")).toBe("226,240"); // U+7CC5
expect(() => {ms932Encoder.encode("\u7CC6")}).toThrowError({name:"TypeError",message:"EncodingError U+7CC6"});
expect(() => {ms932Encoder.encode("\u7CC7")}).toThrowError({name:"TypeError",message:"EncodingError U+7CC7"});
expect(() => {ms932Encoder.encode("\u7CC8")}).toThrowError({name:"TypeError",message:"EncodingError U+7CC8"});
expect(() => {ms932Encoder.encode("\u7CC9")}).toThrowError({name:"TypeError",message:"EncodingError U+7CC9"});
expect([...ms932Encoder.encode("糊")].join(",")).toBe("140,208"); // U+7CCA
expect(() => {ms932Encoder.encode("\u7CCB")}).toThrowError({name:"TypeError",message:"EncodingError U+7CCB"});
expect(() => {ms932Encoder.encode("\u7CCC")}).toThrowError({name:"TypeError",message:"EncodingError U+7CCC"});
expect(() => {ms932Encoder.encode("\u7CCD")}).toThrowError({name:"TypeError",message:"EncodingError U+7CCD"});
expect([...ms932Encoder.encode("糎")].join(",")).toBe("145,87"); // U+7CCE
expect(() => {ms932Encoder.encode("\u7CCF")}).toThrowError({name:"TypeError",message:"EncodingError U+7CCF"});
expect(() => {ms932Encoder.encode("\u7CD0")}).toThrowError({name:"TypeError",message:"EncodingError U+7CD0"});
expect(() => {ms932Encoder.encode("\u7CD1")}).toThrowError({name:"TypeError",message:"EncodingError U+7CD1"});
expect([...ms932Encoder.encode("糒")].join(",")).toBe("226,243"); // U+7CD2
expect(() => {ms932Encoder.encode("\u7CD3")}).toThrowError({name:"TypeError",message:"EncodingError U+7CD3"});
expect(() => {ms932Encoder.encode("\u7CD4")}).toThrowError({name:"TypeError",message:"EncodingError U+7CD4"});
expect(() => {ms932Encoder.encode("\u7CD5")}).toThrowError({name:"TypeError",message:"EncodingError U+7CD5"});
expect([...ms932Encoder.encode("糖")].join(",")).toBe("147,156"); // U+7CD6
expect(() => {ms932Encoder.encode("\u7CD7")}).toThrowError({name:"TypeError",message:"EncodingError U+7CD7"});
expect([...ms932Encoder.encode("糘")].join(",")).toBe("226,242"); // U+7CD8
expect(() => {ms932Encoder.encode("\u7CD9")}).toThrowError({name:"TypeError",message:"EncodingError U+7CD9"});
expect(() => {ms932Encoder.encode("\u7CDA")}).toThrowError({name:"TypeError",message:"EncodingError U+7CDA"});
expect(() => {ms932Encoder.encode("\u7CDB")}).toThrowError({name:"TypeError",message:"EncodingError U+7CDB"});
expect([...ms932Encoder.encode("糜")].join(",")).toBe("226,244"); // U+7CDC
expect(() => {ms932Encoder.encode("\u7CDD")}).toThrowError({name:"TypeError",message:"EncodingError U+7CDD"});
expect([...ms932Encoder.encode("糞糟糠")].join(",")).toBe("149,179,145,140,141,102"); // U+7CDE
expect(() => {ms932Encoder.encode("\u7CE1")}).toThrowError({name:"TypeError",message:"EncodingError U+7CE1"});
expect([...ms932Encoder.encode("糢")].join(",")).toBe("226,245"); // U+7CE2
expect(() => {ms932Encoder.encode("\u7CE3")}).toThrowError({name:"TypeError",message:"EncodingError U+7CE3"});
expect(() => {ms932Encoder.encode("\u7CE4")}).toThrowError({name:"TypeError",message:"EncodingError U+7CE4"});
expect(() => {ms932Encoder.encode("\u7CE5")}).toThrowError({name:"TypeError",message:"EncodingError U+7CE5"});
expect(() => {ms932Encoder.encode("\u7CE6")}).toThrowError({name:"TypeError",message:"EncodingError U+7CE6"});
expect([...ms932Encoder.encode("糧")].join(",")).toBe("151,198"); // U+7CE7
expect(() => {ms932Encoder.encode("\u7CE8")}).toThrowError({name:"TypeError",message:"EncodingError U+7CE8"});
expect(() => {ms932Encoder.encode("\u7CE9")}).toThrowError({name:"TypeError",message:"EncodingError U+7CE9"});
expect(() => {ms932Encoder.encode("\u7CEA")}).toThrowError({name:"TypeError",message:"EncodingError U+7CEA"});
expect(() => {ms932Encoder.encode("\u7CEB")}).toThrowError({name:"TypeError",message:"EncodingError U+7CEB"});
expect(() => {ms932Encoder.encode("\u7CEC")}).toThrowError({name:"TypeError",message:"EncodingError U+7CEC"});
expect(() => {ms932Encoder.encode("\u7CED")}).toThrowError({name:"TypeError",message:"EncodingError U+7CED"});
expect(() => {ms932Encoder.encode("\u7CEE")}).toThrowError({name:"TypeError",message:"EncodingError U+7CEE"});
expect([...ms932Encoder.encode("糯")].join(",")).toBe("226,247"); // U+7CEF
expect(() => {ms932Encoder.encode("\u7CF0")}).toThrowError({name:"TypeError",message:"EncodingError U+7CF0"});
expect(() => {ms932Encoder.encode("\u7CF1")}).toThrowError({name:"TypeError",message:"EncodingError U+7CF1"});
expect([...ms932Encoder.encode("糲")].join(",")).toBe("226,248"); // U+7CF2
expect(() => {ms932Encoder.encode("\u7CF3")}).toThrowError({name:"TypeError",message:"EncodingError U+7CF3"});
expect([...ms932Encoder.encode("糴")].join(",")).toBe("226,249"); // U+7CF4
expect(() => {ms932Encoder.encode("\u7CF5")}).toThrowError({name:"TypeError",message:"EncodingError U+7CF5"});
expect([...ms932Encoder.encode("糶")].join(",")).toBe("226,250"); // U+7CF6
expect(() => {ms932Encoder.encode("\u7CF7")}).toThrowError({name:"TypeError",message:"EncodingError U+7CF7"});
expect([...ms932Encoder.encode("糸")].join(",")).toBe("142,133"); // U+7CF8
expect(() => {ms932Encoder.encode("\u7CF9")}).toThrowError({name:"TypeError",message:"EncodingError U+7CF9"});
expect([...ms932Encoder.encode("糺系")].join(",")).toBe("226,251,140,110"); // U+7CFA
expect(() => {ms932Encoder.encode("\u7CFC")}).toThrowError({name:"TypeError",message:"EncodingError U+7CFC"});
expect(() => {ms932Encoder.encode("\u7CFD")}).toThrowError({name:"TypeError",message:"EncodingError U+7CFD"});
expect([...ms932Encoder.encode("糾")].join(",")).toBe("139,138"); // U+7CFE
expect(() => {ms932Encoder.encode("\u7CFF")}).toThrowError({name:"TypeError",message:"EncodingError U+7CFF"});
expect([...ms932Encoder.encode("紀")].join(",")).toBe("139,73"); // U+7D00
expect(() => {ms932Encoder.encode("\u7D01")}).toThrowError({name:"TypeError",message:"EncodingError U+7D01"});
expect([...ms932Encoder.encode("紂")].join(",")).toBe("227,64"); // U+7D02
expect(() => {ms932Encoder.encode("\u7D03")}).toThrowError({name:"TypeError",message:"EncodingError U+7D03"});
expect([...ms932Encoder.encode("約紅紆")].join(",")).toBe("150,241,141,103,226,252"); // U+7D04
expect(() => {ms932Encoder.encode("\u7D07")}).toThrowError({name:"TypeError",message:"EncodingError U+7D07"});
expect(() => {ms932Encoder.encode("\u7D08")}).toThrowError({name:"TypeError",message:"EncodingError U+7D08"});
expect(() => {ms932Encoder.encode("\u7D09")}).toThrowError({name:"TypeError",message:"EncodingError U+7D09"});
expect([...ms932Encoder.encode("紊紋")].join(",")).toBe("227,67,150,228"); // U+7D0A
expect(() => {ms932Encoder.encode("\u7D0C")}).toThrowError({name:"TypeError",message:"EncodingError U+7D0C"});
expect([...ms932Encoder.encode("納")].join(",")).toBe("148,91"); // U+7D0D
expect(() => {ms932Encoder.encode("\u7D0E")}).toThrowError({name:"TypeError",message:"EncodingError U+7D0E"});
expect(() => {ms932Encoder.encode("\u7D0F")}).toThrowError({name:"TypeError",message:"EncodingError U+7D0F"});
expect([...ms932Encoder.encode("紐")].join(",")).toBe("149,82"); // U+7D10
expect(() => {ms932Encoder.encode("\u7D11")}).toThrowError({name:"TypeError",message:"EncodingError U+7D11"});
expect(() => {ms932Encoder.encode("\u7D12")}).toThrowError({name:"TypeError",message:"EncodingError U+7D12"});
expect(() => {ms932Encoder.encode("\u7D13")}).toThrowError({name:"TypeError",message:"EncodingError U+7D13"});
expect([...ms932Encoder.encode("純紕")].join(",")).toBe("143,131,227,66"); // U+7D14
expect(() => {ms932Encoder.encode("\u7D16")}).toThrowError({name:"TypeError",message:"EncodingError U+7D16"});
expect([...ms932Encoder.encode("紗紘紙級紛紜")].join(",")).toBe("142,209,141,104,142,134,139,137,149,180,227,65"); // U+7D17
expect(() => {ms932Encoder.encode("\u7D1D")}).toThrowError({name:"TypeError",message:"EncodingError U+7D1D"});
expect(() => {ms932Encoder.encode("\u7D1E")}).toThrowError({name:"TypeError",message:"EncodingError U+7D1E"});
expect(() => {ms932Encoder.encode("\u7D1F")}).toThrowError({name:"TypeError",message:"EncodingError U+7D1F"});
expect([...ms932Encoder.encode("素紡索")].join(",")).toBe("145,102,150,97,141,245"); // U+7D20
expect(() => {ms932Encoder.encode("\u7D23")}).toThrowError({name:"TypeError",message:"EncodingError U+7D23"});
expect(() => {ms932Encoder.encode("\u7D24")}).toThrowError({name:"TypeError",message:"EncodingError U+7D24"});
expect(() => {ms932Encoder.encode("\u7D25")}).toThrowError({name:"TypeError",message:"EncodingError U+7D25"});
expect(() => {ms932Encoder.encode("\u7D26")}).toThrowError({name:"TypeError",message:"EncodingError U+7D26"});
expect(() => {ms932Encoder.encode("\u7D27")}).toThrowError({name:"TypeError",message:"EncodingError U+7D27"});
expect(() => {ms932Encoder.encode("\u7D28")}).toThrowError({name:"TypeError",message:"EncodingError U+7D28"});
expect(() => {ms932Encoder.encode("\u7D29")}).toThrowError({name:"TypeError",message:"EncodingError U+7D29"});
expect(() => {ms932Encoder.encode("\u7D2A")}).toThrowError({name:"TypeError",message:"EncodingError U+7D2A"});
expect([...ms932Encoder.encode("紫紬")].join(",")).toBe("142,135,146,219"); // U+7D2B
expect(() => {ms932Encoder.encode("\u7D2D")}).toThrowError({name:"TypeError",message:"EncodingError U+7D2D"});
expect([...ms932Encoder.encode("紮累細")].join(",")).toBe("227,70,151,221,141,215"); // U+7D2E
expect(() => {ms932Encoder.encode("\u7D31")}).toThrowError({name:"TypeError",message:"EncodingError U+7D31"});
expect([...ms932Encoder.encode("紲紳")].join(",")).toBe("227,71,144,97"); // U+7D32
expect(() => {ms932Encoder.encode("\u7D34")}).toThrowError({name:"TypeError",message:"EncodingError U+7D34"});
expect([...ms932Encoder.encode("紵")].join(",")).toBe("227,73"); // U+7D35
expect(() => {ms932Encoder.encode("\u7D36")}).toThrowError({name:"TypeError",message:"EncodingError U+7D36"});
expect(() => {ms932Encoder.encode("\u7D37")}).toThrowError({name:"TypeError",message:"EncodingError U+7D37"});
expect(() => {ms932Encoder.encode("\u7D38")}).toThrowError({name:"TypeError",message:"EncodingError U+7D38"});
expect([...ms932Encoder.encode("紹紺")].join(",")).toBe("143,208,141,174"); // U+7D39
expect(() => {ms932Encoder.encode("\u7D3B")}).toThrowError({name:"TypeError",message:"EncodingError U+7D3B"});
expect(() => {ms932Encoder.encode("\u7D3C")}).toThrowError({name:"TypeError",message:"EncodingError U+7D3C"});
expect(() => {ms932Encoder.encode("\u7D3D")}).toThrowError({name:"TypeError",message:"EncodingError U+7D3D"});
expect(() => {ms932Encoder.encode("\u7D3E")}).toThrowError({name:"TypeError",message:"EncodingError U+7D3E"});
expect([...ms932Encoder.encode("紿")].join(",")).toBe("227,72"); // U+7D3F
expect(() => {ms932Encoder.encode("\u7D40")}).toThrowError({name:"TypeError",message:"EncodingError U+7D40"});
expect(() => {ms932Encoder.encode("\u7D41")}).toThrowError({name:"TypeError",message:"EncodingError U+7D41"});
expect([...ms932Encoder.encode("終絃組絅絆")].join(",")).toBe("143,73,140,188,145,103,227,68,227,74"); // U+7D42
expect(() => {ms932Encoder.encode("\u7D47")}).toThrowError({name:"TypeError",message:"EncodingError U+7D47"});
expect([...ms932Encoder.encode("絈")].join(",")).toBe("251,138"); // U+7D48
expect(() => {ms932Encoder.encode("\u7D49")}).toThrowError({name:"TypeError",message:"EncodingError U+7D49"});
expect(() => {ms932Encoder.encode("\u7D4A")}).toThrowError({name:"TypeError",message:"EncodingError U+7D4A"});
expect([...ms932Encoder.encode("絋経")].join(",")).toBe("227,69,140,111"); // U+7D4B
expect(() => {ms932Encoder.encode("\u7D4D")}).toThrowError({name:"TypeError",message:"EncodingError U+7D4D"});
expect([...ms932Encoder.encode("絎絏結")].join(",")).toBe("227,77,227,81,140,139"); // U+7D4E
expect(() => {ms932Encoder.encode("\u7D51")}).toThrowError({name:"TypeError",message:"EncodingError U+7D51"});
expect(() => {ms932Encoder.encode("\u7D52")}).toThrowError({name:"TypeError",message:"EncodingError U+7D52"});
expect(() => {ms932Encoder.encode("\u7D53")}).toThrowError({name:"TypeError",message:"EncodingError U+7D53"});
expect(() => {ms932Encoder.encode("\u7D54")}).toThrowError({name:"TypeError",message:"EncodingError U+7D54"});
expect(() => {ms932Encoder.encode("\u7D55")}).toThrowError({name:"TypeError",message:"EncodingError U+7D55"});
expect([...ms932Encoder.encode("絖")].join(",")).toBe("227,76"); // U+7D56
expect(() => {ms932Encoder.encode("\u7D57")}).toThrowError({name:"TypeError",message:"EncodingError U+7D57"});
expect(() => {ms932Encoder.encode("\u7D58")}).toThrowError({name:"TypeError",message:"EncodingError U+7D58"});
expect(() => {ms932Encoder.encode("\u7D59")}).toThrowError({name:"TypeError",message:"EncodingError U+7D59"});
expect(() => {ms932Encoder.encode("\u7D5A")}).toThrowError({name:"TypeError",message:"EncodingError U+7D5A"});
expect([...ms932Encoder.encode("絛絜")].join(",")).toBe("227,85,251,139"); // U+7D5B
expect(() => {ms932Encoder.encode("\u7D5D")}).toThrowError({name:"TypeError",message:"EncodingError U+7D5D"});
expect([...ms932Encoder.encode("絞")].join(",")).toBe("141,105"); // U+7D5E
expect(() => {ms932Encoder.encode("\u7D5F")}).toThrowError({name:"TypeError",message:"EncodingError U+7D5F"});
expect(() => {ms932Encoder.encode("\u7D60")}).toThrowError({name:"TypeError",message:"EncodingError U+7D60"});
expect([...ms932Encoder.encode("絡絢絣")].join(",")).toBe("151,141,136,186,227,82"); // U+7D61
expect(() => {ms932Encoder.encode("\u7D64")}).toThrowError({name:"TypeError",message:"EncodingError U+7D64"});
expect(() => {ms932Encoder.encode("\u7D65")}).toThrowError({name:"TypeError",message:"EncodingError U+7D65"});
expect([...ms932Encoder.encode("給")].join(",")).toBe("139,139"); // U+7D66
expect(() => {ms932Encoder.encode("\u7D67")}).toThrowError({name:"TypeError",message:"EncodingError U+7D67"});
expect([...ms932Encoder.encode("絨")].join(",")).toBe("227,79"); // U+7D68
expect(() => {ms932Encoder.encode("\u7D69")}).toThrowError({name:"TypeError",message:"EncodingError U+7D69"});
expect(() => {ms932Encoder.encode("\u7D6A")}).toThrowError({name:"TypeError",message:"EncodingError U+7D6A"});
expect(() => {ms932Encoder.encode("\u7D6B")}).toThrowError({name:"TypeError",message:"EncodingError U+7D6B"});
expect(() => {ms932Encoder.encode("\u7D6C")}).toThrowError({name:"TypeError",message:"EncodingError U+7D6C"});
expect(() => {ms932Encoder.encode("\u7D6D")}).toThrowError({name:"TypeError",message:"EncodingError U+7D6D"});
expect([...ms932Encoder.encode("絮")].join(",")).toBe("227,80"); // U+7D6E
expect(() => {ms932Encoder.encode("\u7D6F")}).toThrowError({name:"TypeError",message:"EncodingError U+7D6F"});
expect(() => {ms932Encoder.encode("\u7D70")}).toThrowError({name:"TypeError",message:"EncodingError U+7D70"});
expect([...ms932Encoder.encode("統絲絳")].join(",")).toBe("147,157,227,78,227,75"); // U+7D71
expect(() => {ms932Encoder.encode("\u7D74")}).toThrowError({name:"TypeError",message:"EncodingError U+7D74"});
expect([...ms932Encoder.encode("絵絶")].join(",")).toBe("138,71,144,226"); // U+7D75
expect(() => {ms932Encoder.encode("\u7D77")}).toThrowError({name:"TypeError",message:"EncodingError U+7D77"});
expect(() => {ms932Encoder.encode("\u7D78")}).toThrowError({name:"TypeError",message:"EncodingError U+7D78"});
expect([...ms932Encoder.encode("絹")].join(",")).toBe("140,166"); // U+7D79
expect(() => {ms932Encoder.encode("\u7D7A")}).toThrowError({name:"TypeError",message:"EncodingError U+7D7A"});
expect(() => {ms932Encoder.encode("\u7D7B")}).toThrowError({name:"TypeError",message:"EncodingError U+7D7B"});
expect(() => {ms932Encoder.encode("\u7D7C")}).toThrowError({name:"TypeError",message:"EncodingError U+7D7C"});
expect([...ms932Encoder.encode("絽")].join(",")).toBe("227,87"); // U+7D7D
expect(() => {ms932Encoder.encode("\u7D7E")}).toThrowError({name:"TypeError",message:"EncodingError U+7D7E"});
expect(() => {ms932Encoder.encode("\u7D7F")}).toThrowError({name:"TypeError",message:"EncodingError U+7D7F"});
expect(() => {ms932Encoder.encode("\u7D80")}).toThrowError({name:"TypeError",message:"EncodingError U+7D80"});
expect(() => {ms932Encoder.encode("\u7D81")}).toThrowError({name:"TypeError",message:"EncodingError U+7D81"});
expect(() => {ms932Encoder.encode("\u7D82")}).toThrowError({name:"TypeError",message:"EncodingError U+7D82"});
expect(() => {ms932Encoder.encode("\u7D83")}).toThrowError({name:"TypeError",message:"EncodingError U+7D83"});
expect(() => {ms932Encoder.encode("\u7D84")}).toThrowError({name:"TypeError",message:"EncodingError U+7D84"});
expect(() => {ms932Encoder.encode("\u7D85")}).toThrowError({name:"TypeError",message:"EncodingError U+7D85"});
expect(() => {ms932Encoder.encode("\u7D86")}).toThrowError({name:"TypeError",message:"EncodingError U+7D86"});
expect(() => {ms932Encoder.encode("\u7D87")}).toThrowError({name:"TypeError",message:"EncodingError U+7D87"});
expect(() => {ms932Encoder.encode("\u7D88")}).toThrowError({name:"TypeError",message:"EncodingError U+7D88"});
expect([...ms932Encoder.encode("綉")].join(",")).toBe("227,84"); // U+7D89
expect(() => {ms932Encoder.encode("\u7D8A")}).toThrowError({name:"TypeError",message:"EncodingError U+7D8A"});
expect(() => {ms932Encoder.encode("\u7D8B")}).toThrowError({name:"TypeError",message:"EncodingError U+7D8B"});
expect(() => {ms932Encoder.encode("\u7D8C")}).toThrowError({name:"TypeError",message:"EncodingError U+7D8C"});
expect(() => {ms932Encoder.encode("\u7D8D")}).toThrowError({name:"TypeError",message:"EncodingError U+7D8D"});
expect(() => {ms932Encoder.encode("\u7D8E")}).toThrowError({name:"TypeError",message:"EncodingError U+7D8E"});
expect([...ms932Encoder.encode("綏")].join(",")).toBe("227,86"); // U+7D8F
expect(() => {ms932Encoder.encode("\u7D90")}).toThrowError({name:"TypeError",message:"EncodingError U+7D90"});
expect(() => {ms932Encoder.encode("\u7D91")}).toThrowError({name:"TypeError",message:"EncodingError U+7D91"});
expect(() => {ms932Encoder.encode("\u7D92")}).toThrowError({name:"TypeError",message:"EncodingError U+7D92"});
expect([...ms932Encoder.encode("經")].join(",")).toBe("227,83"); // U+7D93
expect(() => {ms932Encoder.encode("\u7D94")}).toThrowError({name:"TypeError",message:"EncodingError U+7D94"});
expect(() => {ms932Encoder.encode("\u7D95")}).toThrowError({name:"TypeError",message:"EncodingError U+7D95"});
expect(() => {ms932Encoder.encode("\u7D96")}).toThrowError({name:"TypeError",message:"EncodingError U+7D96"});
expect(() => {ms932Encoder.encode("\u7D97")}).toThrowError({name:"TypeError",message:"EncodingError U+7D97"});
expect(() => {ms932Encoder.encode("\u7D98")}).toThrowError({name:"TypeError",message:"EncodingError U+7D98"});
expect([...ms932Encoder.encode("継続綛綜")].join(",")).toBe("140,112,145,177,227,88,145,142"); // U+7D99
expect(() => {ms932Encoder.encode("\u7D9D")}).toThrowError({name:"TypeError",message:"EncodingError U+7D9D"});
expect(() => {ms932Encoder.encode("\u7D9E")}).toThrowError({name:"TypeError",message:"EncodingError U+7D9E"});
expect([...ms932Encoder.encode("綟綠")].join(",")).toBe("227,101,251,141"); // U+7D9F
expect(() => {ms932Encoder.encode("\u7DA1")}).toThrowError({name:"TypeError",message:"EncodingError U+7DA1"});
expect([...ms932Encoder.encode("綢綣")].join(",")).toBe("227,97,227,91"); // U+7DA2
expect(() => {ms932Encoder.encode("\u7DA4")}).toThrowError({name:"TypeError",message:"EncodingError U+7DA4"});
expect(() => {ms932Encoder.encode("\u7DA5")}).toThrowError({name:"TypeError",message:"EncodingError U+7DA5"});
expect(() => {ms932Encoder.encode("\u7DA6")}).toThrowError({name:"TypeError",message:"EncodingError U+7DA6"});
expect(() => {ms932Encoder.encode("\u7DA7")}).toThrowError({name:"TypeError",message:"EncodingError U+7DA7"});
expect(() => {ms932Encoder.encode("\u7DA8")}).toThrowError({name:"TypeError",message:"EncodingError U+7DA8"});
expect(() => {ms932Encoder.encode("\u7DA9")}).toThrowError({name:"TypeError",message:"EncodingError U+7DA9"});
expect(() => {ms932Encoder.encode("\u7DAA")}).toThrowError({name:"TypeError",message:"EncodingError U+7DAA"});
expect([...ms932Encoder.encode("綫綬維綮綯綰綱網")].join(",")).toBe("227,95,142,248,136,219,227,90,227,98,227,102,141,106,150,212"); // U+7DAB
expect(() => {ms932Encoder.encode("\u7DB3")}).toThrowError({name:"TypeError",message:"EncodingError U+7DB3"});
expect([...ms932Encoder.encode("綴綵")].join(",")).toBe("146,212,227,92"); // U+7DB4
expect(() => {ms932Encoder.encode("\u7DB6")}).toThrowError({name:"TypeError",message:"EncodingError U+7DB6"});
expect([...ms932Encoder.encode("綷綸")].join(",")).toBe("251,140,227,100"); // U+7DB7
expect(() => {ms932Encoder.encode("\u7DB9")}).toThrowError({name:"TypeError",message:"EncodingError U+7DB9"});
expect([...ms932Encoder.encode("綺綻")].join(",")).toBe("227,89,146,93"); // U+7DBA
expect(() => {ms932Encoder.encode("\u7DBC")}).toThrowError({name:"TypeError",message:"EncodingError U+7DBC"});
expect([...ms932Encoder.encode("綽綾綿")].join(",")).toBe("227,94,136,187,150,200"); // U+7DBD
expect(() => {ms932Encoder.encode("\u7DC0")}).toThrowError({name:"TypeError",message:"EncodingError U+7DC0"});
expect(() => {ms932Encoder.encode("\u7DC1")}).toThrowError({name:"TypeError",message:"EncodingError U+7DC1"});
expect(() => {ms932Encoder.encode("\u7DC2")}).toThrowError({name:"TypeError",message:"EncodingError U+7DC2"});
expect(() => {ms932Encoder.encode("\u7DC3")}).toThrowError({name:"TypeError",message:"EncodingError U+7DC3"});
expect(() => {ms932Encoder.encode("\u7DC4")}).toThrowError({name:"TypeError",message:"EncodingError U+7DC4"});
expect(() => {ms932Encoder.encode("\u7DC5")}).toThrowError({name:"TypeError",message:"EncodingError U+7DC5"});
expect(() => {ms932Encoder.encode("\u7DC6")}).toThrowError({name:"TypeError",message:"EncodingError U+7DC6"});
expect([...ms932Encoder.encode("緇")].join(",")).toBe("227,93"); // U+7DC7
expect(() => {ms932Encoder.encode("\u7DC8")}).toThrowError({name:"TypeError",message:"EncodingError U+7DC8"});
expect(() => {ms932Encoder.encode("\u7DC9")}).toThrowError({name:"TypeError",message:"EncodingError U+7DC9"});
expect([...ms932Encoder.encode("緊緋")].join(",")).toBe("139,217,148,234"); // U+7DCA
expect(() => {ms932Encoder.encode("\u7DCC")}).toThrowError({name:"TypeError",message:"EncodingError U+7DCC"});
expect(() => {ms932Encoder.encode("\u7DCD")}).toThrowError({name:"TypeError",message:"EncodingError U+7DCD"});
expect(() => {ms932Encoder.encode("\u7DCE")}).toThrowError({name:"TypeError",message:"EncodingError U+7DCE"});
expect([...ms932Encoder.encode("総")].join(",")).toBe("145,141"); // U+7DCF
expect(() => {ms932Encoder.encode("\u7DD0")}).toThrowError({name:"TypeError",message:"EncodingError U+7DD0"});
expect([...ms932Encoder.encode("緑緒")].join(",")).toBe("151,206,143,143"); // U+7DD1
expect(() => {ms932Encoder.encode("\u7DD3")}).toThrowError({name:"TypeError",message:"EncodingError U+7DD3"});
expect(() => {ms932Encoder.encode("\u7DD4")}).toThrowError({name:"TypeError",message:"EncodingError U+7DD4"});
expect([...ms932Encoder.encode("緕緖")].join(",")).toBe("227,142,251,142"); // U+7DD5
expect(() => {ms932Encoder.encode("\u7DD7")}).toThrowError({name:"TypeError",message:"EncodingError U+7DD7"});
expect([...ms932Encoder.encode("緘")].join(",")).toBe("227,103"); // U+7DD8
expect(() => {ms932Encoder.encode("\u7DD9")}).toThrowError({name:"TypeError",message:"EncodingError U+7DD9"});
expect([...ms932Encoder.encode("線")].join(",")).toBe("144,252"); // U+7DDA
expect(() => {ms932Encoder.encode("\u7DDB")}).toThrowError({name:"TypeError",message:"EncodingError U+7DDB"});
expect([...ms932Encoder.encode("緜緝緞")].join(",")).toBe("227,99,227,104,227,106"); // U+7DDC
expect(() => {ms932Encoder.encode("\u7DDF")}).toThrowError({name:"TypeError",message:"EncodingError U+7DDF"});
expect([...ms932Encoder.encode("締緡")].join(",")).toBe("146,247,227,109"); // U+7DE0
expect(() => {ms932Encoder.encode("\u7DE2")}).toThrowError({name:"TypeError",message:"EncodingError U+7DE2"});
expect(() => {ms932Encoder.encode("\u7DE3")}).toThrowError({name:"TypeError",message:"EncodingError U+7DE3"});
expect([...ms932Encoder.encode("緤")].join(",")).toBe("227,105"); // U+7DE4
expect(() => {ms932Encoder.encode("\u7DE5")}).toThrowError({name:"TypeError",message:"EncodingError U+7DE5"});
expect(() => {ms932Encoder.encode("\u7DE6")}).toThrowError({name:"TypeError",message:"EncodingError U+7DE6"});
expect(() => {ms932Encoder.encode("\u7DE7")}).toThrowError({name:"TypeError",message:"EncodingError U+7DE7"});
expect([...ms932Encoder.encode("編緩")].join(",")).toBe("149,210,138,201"); // U+7DE8
expect(() => {ms932Encoder.encode("\u7DEA")}).toThrowError({name:"TypeError",message:"EncodingError U+7DEA"});
expect(() => {ms932Encoder.encode("\u7DEB")}).toThrowError({name:"TypeError",message:"EncodingError U+7DEB"});
expect([...ms932Encoder.encode("緬")].join(",")).toBe("150,201"); // U+7DEC
expect(() => {ms932Encoder.encode("\u7DED")}).toThrowError({name:"TypeError",message:"EncodingError U+7DED"});
expect(() => {ms932Encoder.encode("\u7DEE")}).toThrowError({name:"TypeError",message:"EncodingError U+7DEE"});
expect([...ms932Encoder.encode("緯")].join(",")).toBe("136,220"); // U+7DEF
expect(() => {ms932Encoder.encode("\u7DF0")}).toThrowError({name:"TypeError",message:"EncodingError U+7DF0"});
expect(() => {ms932Encoder.encode("\u7DF1")}).toThrowError({name:"TypeError",message:"EncodingError U+7DF1"});
expect([...ms932Encoder.encode("緲")].join(",")).toBe("227,108"); // U+7DF2
expect(() => {ms932Encoder.encode("\u7DF3")}).toThrowError({name:"TypeError",message:"EncodingError U+7DF3"});
expect([...ms932Encoder.encode("練")].join(",")).toBe("151,251"); // U+7DF4
expect(() => {ms932Encoder.encode("\u7DF5")}).toThrowError({name:"TypeError",message:"EncodingError U+7DF5"});
expect(() => {ms932Encoder.encode("\u7DF6")}).toThrowError({name:"TypeError",message:"EncodingError U+7DF6"});
expect(() => {ms932Encoder.encode("\u7DF7")}).toThrowError({name:"TypeError",message:"EncodingError U+7DF7"});
expect(() => {ms932Encoder.encode("\u7DF8")}).toThrowError({name:"TypeError",message:"EncodingError U+7DF8"});
expect(() => {ms932Encoder.encode("\u7DF9")}).toThrowError({name:"TypeError",message:"EncodingError U+7DF9"});
expect(() => {ms932Encoder.encode("\u7DFA")}).toThrowError({name:"TypeError",message:"EncodingError U+7DFA"});
expect([...ms932Encoder.encode("緻")].join(",")).toBe("227,107"); // U+7DFB
expect(() => {ms932Encoder.encode("\u7DFC")}).toThrowError({name:"TypeError",message:"EncodingError U+7DFC"});
expect(() => {ms932Encoder.encode("\u7DFD")}).toThrowError({name:"TypeError",message:"EncodingError U+7DFD"});
expect(() => {ms932Encoder.encode("\u7DFE")}).toThrowError({name:"TypeError",message:"EncodingError U+7DFE"});
expect(() => {ms932Encoder.encode("\u7DFF")}).toThrowError({name:"TypeError",message:"EncodingError U+7DFF"});
expect(() => {ms932Encoder.encode("\u7E00")}).toThrowError({name:"TypeError",message:"EncodingError U+7E00"});
expect([...ms932Encoder.encode("縁")].join(",")).toBe("137,143"); // U+7E01
expect(() => {ms932Encoder.encode("\u7E02")}).toThrowError({name:"TypeError",message:"EncodingError U+7E02"});
expect(() => {ms932Encoder.encode("\u7E03")}).toThrowError({name:"TypeError",message:"EncodingError U+7E03"});
expect([...ms932Encoder.encode("縄縅")].join(",")).toBe("147,234,227,110"); // U+7E04
expect(() => {ms932Encoder.encode("\u7E06")}).toThrowError({name:"TypeError",message:"EncodingError U+7E06"});
expect(() => {ms932Encoder.encode("\u7E07")}).toThrowError({name:"TypeError",message:"EncodingError U+7E07"});
expect(() => {ms932Encoder.encode("\u7E08")}).toThrowError({name:"TypeError",message:"EncodingError U+7E08"});
expect([...ms932Encoder.encode("縉縊縋")].join(",")).toBe("227,117,227,111,227,118"); // U+7E09
expect(() => {ms932Encoder.encode("\u7E0C")}).toThrowError({name:"TypeError",message:"EncodingError U+7E0C"});
expect(() => {ms932Encoder.encode("\u7E0D")}).toThrowError({name:"TypeError",message:"EncodingError U+7E0D"});
expect(() => {ms932Encoder.encode("\u7E0E")}).toThrowError({name:"TypeError",message:"EncodingError U+7E0E"});
expect(() => {ms932Encoder.encode("\u7E0F")}).toThrowError({name:"TypeError",message:"EncodingError U+7E0F"});
expect(() => {ms932Encoder.encode("\u7E10")}).toThrowError({name:"TypeError",message:"EncodingError U+7E10"});
expect(() => {ms932Encoder.encode("\u7E11")}).toThrowError({name:"TypeError",message:"EncodingError U+7E11"});
expect([...ms932Encoder.encode("縒")].join(",")).toBe("227,114"); // U+7E12
expect(() => {ms932Encoder.encode("\u7E13")}).toThrowError({name:"TypeError",message:"EncodingError U+7E13"});
expect(() => {ms932Encoder.encode("\u7E14")}).toThrowError({name:"TypeError",message:"EncodingError U+7E14"});
expect(() => {ms932Encoder.encode("\u7E15")}).toThrowError({name:"TypeError",message:"EncodingError U+7E15"});
expect(() => {ms932Encoder.encode("\u7E16")}).toThrowError({name:"TypeError",message:"EncodingError U+7E16"});
expect(() => {ms932Encoder.encode("\u7E17")}).toThrowError({name:"TypeError",message:"EncodingError U+7E17"});
expect(() => {ms932Encoder.encode("\u7E18")}).toThrowError({name:"TypeError",message:"EncodingError U+7E18"});
expect(() => {ms932Encoder.encode("\u7E19")}).toThrowError({name:"TypeError",message:"EncodingError U+7E19"});
expect(() => {ms932Encoder.encode("\u7E1A")}).toThrowError({name:"TypeError",message:"EncodingError U+7E1A"});
expect([...ms932Encoder.encode("縛")].join(",")).toBe("148,155"); // U+7E1B
expect(() => {ms932Encoder.encode("\u7E1C")}).toThrowError({name:"TypeError",message:"EncodingError U+7E1C"});
expect(() => {ms932Encoder.encode("\u7E1D")}).toThrowError({name:"TypeError",message:"EncodingError U+7E1D"});
expect([...ms932Encoder.encode("縞縟")].join(",")).toBe("142,200,227,116"); // U+7E1E
expect(() => {ms932Encoder.encode("\u7E20")}).toThrowError({name:"TypeError",message:"EncodingError U+7E20"});
expect([...ms932Encoder.encode("縡縢縣")].join(",")).toBe("227,113,227,119,227,112"); // U+7E21
expect(() => {ms932Encoder.encode("\u7E24")}).toThrowError({name:"TypeError",message:"EncodingError U+7E24"});
expect(() => {ms932Encoder.encode("\u7E25")}).toThrowError({name:"TypeError",message:"EncodingError U+7E25"});
expect([...ms932Encoder.encode("縦")].join(",")).toBe("143,99"); // U+7E26
expect(() => {ms932Encoder.encode("\u7E27")}).toThrowError({name:"TypeError",message:"EncodingError U+7E27"});
expect(() => {ms932Encoder.encode("\u7E28")}).toThrowError({name:"TypeError",message:"EncodingError U+7E28"});
expect(() => {ms932Encoder.encode("\u7E29")}).toThrowError({name:"TypeError",message:"EncodingError U+7E29"});
expect(() => {ms932Encoder.encode("\u7E2A")}).toThrowError({name:"TypeError",message:"EncodingError U+7E2A"});
expect([...ms932Encoder.encode("縫")].join(",")).toBe("150,68"); // U+7E2B
expect(() => {ms932Encoder.encode("\u7E2C")}).toThrowError({name:"TypeError",message:"EncodingError U+7E2C"});
expect(() => {ms932Encoder.encode("\u7E2D")}).toThrowError({name:"TypeError",message:"EncodingError U+7E2D"});
expect([...ms932Encoder.encode("縮")].join(",")).toBe("143,107"); // U+7E2E
expect(() => {ms932Encoder.encode("\u7E2F")}).toThrowError({name:"TypeError",message:"EncodingError U+7E2F"});
expect(() => {ms932Encoder.encode("\u7E30")}).toThrowError({name:"TypeError",message:"EncodingError U+7E30"});
expect([...ms932Encoder.encode("縱縲")].join(",")).toBe("227,115,227,128"); // U+7E31
expect(() => {ms932Encoder.encode("\u7E33")}).toThrowError({name:"TypeError",message:"EncodingError U+7E33"});
expect(() => {ms932Encoder.encode("\u7E34")}).toThrowError({name:"TypeError",message:"EncodingError U+7E34"});
expect([...ms932Encoder.encode("縵")].join(",")).toBe("227,123"); // U+7E35
expect(() => {ms932Encoder.encode("\u7E36")}).toThrowError({name:"TypeError",message:"EncodingError U+7E36"});
expect([...ms932Encoder.encode("縷")].join(",")).toBe("227,126"); // U+7E37
expect(() => {ms932Encoder.encode("\u7E38")}).toThrowError({name:"TypeError",message:"EncodingError U+7E38"});
expect([...ms932Encoder.encode("縹縺縻")].join(",")).toBe("227,124,227,129,227,122"); // U+7E39
expect(() => {ms932Encoder.encode("\u7E3C")}).toThrowError({name:"TypeError",message:"EncodingError U+7E3C"});
expect([...ms932Encoder.encode("總績")].join(",")).toBe("227,96,144,209"); // U+7E3D
expect(() => {ms932Encoder.encode("\u7E3F")}).toThrowError({name:"TypeError",message:"EncodingError U+7E3F"});
expect(() => {ms932Encoder.encode("\u7E40")}).toThrowError({name:"TypeError",message:"EncodingError U+7E40"});
expect([...ms932Encoder.encode("繁")].join(",")).toBe("148,201"); // U+7E41
expect(() => {ms932Encoder.encode("\u7E42")}).toThrowError({name:"TypeError",message:"EncodingError U+7E42"});
expect([...ms932Encoder.encode("繃")].join(",")).toBe("227,125"); // U+7E43
expect(() => {ms932Encoder.encode("\u7E44")}).toThrowError({name:"TypeError",message:"EncodingError U+7E44"});
expect(() => {ms932Encoder.encode("\u7E45")}).toThrowError({name:"TypeError",message:"EncodingError U+7E45"});
expect([...ms932Encoder.encode("繆")].join(",")).toBe("227,120"); // U+7E46
expect(() => {ms932Encoder.encode("\u7E47")}).toThrowError({name:"TypeError",message:"EncodingError U+7E47"});
expect(() => {ms932Encoder.encode("\u7E48")}).toThrowError({name:"TypeError",message:"EncodingError U+7E48"});
expect(() => {ms932Encoder.encode("\u7E49")}).toThrowError({name:"TypeError",message:"EncodingError U+7E49"});
expect([...ms932Encoder.encode("繊繋")].join(",")).toBe("145,64,140,113"); // U+7E4A
expect(() => {ms932Encoder.encode("\u7E4C")}).toThrowError({name:"TypeError",message:"EncodingError U+7E4C"});
expect([...ms932Encoder.encode("繍")].join(",")).toBe("143,74"); // U+7E4D
expect(() => {ms932Encoder.encode("\u7E4E")}).toThrowError({name:"TypeError",message:"EncodingError U+7E4E"});
expect(() => {ms932Encoder.encode("\u7E4F")}).toThrowError({name:"TypeError",message:"EncodingError U+7E4F"});
expect(() => {ms932Encoder.encode("\u7E50")}).toThrowError({name:"TypeError",message:"EncodingError U+7E50"});
expect(() => {ms932Encoder.encode("\u7E51")}).toThrowError({name:"TypeError",message:"EncodingError U+7E51"});
expect([...ms932Encoder.encode("繒")].join(",")).toBe("251,143"); // U+7E52
expect(() => {ms932Encoder.encode("\u7E53")}).toThrowError({name:"TypeError",message:"EncodingError U+7E53"});
expect([...ms932Encoder.encode("織繕繖")].join(",")).toBe("144,68,145,85,227,132"); // U+7E54
expect(() => {ms932Encoder.encode("\u7E57")}).toThrowError({name:"TypeError",message:"EncodingError U+7E57"});
expect(() => {ms932Encoder.encode("\u7E58")}).toThrowError({name:"TypeError",message:"EncodingError U+7E58"});
expect([...ms932Encoder.encode("繙繚")].join(",")).toBe("227,134,227,135"); // U+7E59
expect(() => {ms932Encoder.encode("\u7E5B")}).toThrowError({name:"TypeError",message:"EncodingError U+7E5B"});
expect(() => {ms932Encoder.encode("\u7E5C")}).toThrowError({name:"TypeError",message:"EncodingError U+7E5C"});
expect([...ms932Encoder.encode("繝繞")].join(",")).toBe("227,131,227,133"); // U+7E5D
expect(() => {ms932Encoder.encode("\u7E5F")}).toThrowError({name:"TypeError",message:"EncodingError U+7E5F"});
expect(() => {ms932Encoder.encode("\u7E60")}).toThrowError({name:"TypeError",message:"EncodingError U+7E60"});
expect(() => {ms932Encoder.encode("\u7E61")}).toThrowError({name:"TypeError",message:"EncodingError U+7E61"});
expect(() => {ms932Encoder.encode("\u7E62")}).toThrowError({name:"TypeError",message:"EncodingError U+7E62"});
expect(() => {ms932Encoder.encode("\u7E63")}).toThrowError({name:"TypeError",message:"EncodingError U+7E63"});
expect(() => {ms932Encoder.encode("\u7E64")}).toThrowError({name:"TypeError",message:"EncodingError U+7E64"});
expect(() => {ms932Encoder.encode("\u7E65")}).toThrowError({name:"TypeError",message:"EncodingError U+7E65"});
expect([...ms932Encoder.encode("繦繧")].join(",")).toBe("227,121,227,130"); // U+7E66
expect(() => {ms932Encoder.encode("\u7E68")}).toThrowError({name:"TypeError",message:"EncodingError U+7E68"});
expect([...ms932Encoder.encode("繩繪")].join(",")).toBe("227,138,227,137"); // U+7E69
expect(() => {ms932Encoder.encode("\u7E6B")}).toThrowError({name:"TypeError",message:"EncodingError U+7E6B"});
expect(() => {ms932Encoder.encode("\u7E6C")}).toThrowError({name:"TypeError",message:"EncodingError U+7E6C"});
expect([...ms932Encoder.encode("繭")].join(",")).toBe("150,154"); // U+7E6D
expect(() => {ms932Encoder.encode("\u7E6E")}).toThrowError({name:"TypeError",message:"EncodingError U+7E6E"});
expect(() => {ms932Encoder.encode("\u7E6F")}).toThrowError({name:"TypeError",message:"EncodingError U+7E6F"});
expect([...ms932Encoder.encode("繰")].join(",")).toBe("140,74"); // U+7E70
expect(() => {ms932Encoder.encode("\u7E71")}).toThrowError({name:"TypeError",message:"EncodingError U+7E71"});
expect(() => {ms932Encoder.encode("\u7E72")}).toThrowError({name:"TypeError",message:"EncodingError U+7E72"});
expect(() => {ms932Encoder.encode("\u7E73")}).toThrowError({name:"TypeError",message:"EncodingError U+7E73"});
expect(() => {ms932Encoder.encode("\u7E74")}).toThrowError({name:"TypeError",message:"EncodingError U+7E74"});
expect(() => {ms932Encoder.encode("\u7E75")}).toThrowError({name:"TypeError",message:"EncodingError U+7E75"});
expect(() => {ms932Encoder.encode("\u7E76")}).toThrowError({name:"TypeError",message:"EncodingError U+7E76"});
expect(() => {ms932Encoder.encode("\u7E77")}).toThrowError({name:"TypeError",message:"EncodingError U+7E77"});
expect(() => {ms932Encoder.encode("\u7E78")}).toThrowError({name:"TypeError",message:"EncodingError U+7E78"});
expect([...ms932Encoder.encode("繹")].join(",")).toBe("227,136"); // U+7E79
expect(() => {ms932Encoder.encode("\u7E7A")}).toThrowError({name:"TypeError",message:"EncodingError U+7E7A"});
expect([...ms932Encoder.encode("繻繼繽")].join(",")).toBe("227,140,227,139,227,143"); // U+7E7B
expect(() => {ms932Encoder.encode("\u7E7E")}).toThrowError({name:"TypeError",message:"EncodingError U+7E7E"});
expect([...ms932Encoder.encode("繿")].join(",")).toBe("227,145"); // U+7E7F
expect(() => {ms932Encoder.encode("\u7E80")}).toThrowError({name:"TypeError",message:"EncodingError U+7E80"});
expect(() => {ms932Encoder.encode("\u7E81")}).toThrowError({name:"TypeError",message:"EncodingError U+7E81"});
expect([...ms932Encoder.encode("纂纃")].join(",")).toBe("142,91,227,141"); // U+7E82
expect(() => {ms932Encoder.encode("\u7E84")}).toThrowError({name:"TypeError",message:"EncodingError U+7E84"});
expect(() => {ms932Encoder.encode("\u7E85")}).toThrowError({name:"TypeError",message:"EncodingError U+7E85"});
expect(() => {ms932Encoder.encode("\u7E86")}).toThrowError({name:"TypeError",message:"EncodingError U+7E86"});
expect(() => {ms932Encoder.encode("\u7E87")}).toThrowError({name:"TypeError",message:"EncodingError U+7E87"});
expect([...ms932Encoder.encode("纈纉纊")].join(",")).toBe("227,146,227,147,250,92"); // U+7E88
expect(() => {ms932Encoder.encode("\u7E8B")}).toThrowError({name:"TypeError",message:"EncodingError U+7E8B"});
expect([...ms932Encoder.encode("續")].join(",")).toBe("227,148"); // U+7E8C
expect(() => {ms932Encoder.encode("\u7E8D")}).toThrowError({name:"TypeError",message:"EncodingError U+7E8D"});
expect([...ms932Encoder.encode("纎纏纐")].join(",")).toBe("227,154,147,90,227,150"); // U+7E8E
expect(() => {ms932Encoder.encode("\u7E91")}).toThrowError({name:"TypeError",message:"EncodingError U+7E91"});
expect([...ms932Encoder.encode("纒纓纔")].join(",")).toBe("227,149,227,151,227,152"); // U+7E92
expect(() => {ms932Encoder.encode("\u7E95")}).toThrowError({name:"TypeError",message:"EncodingError U+7E95"});
expect([...ms932Encoder.encode("纖")].join(",")).toBe("227,153"); // U+7E96
expect(() => {ms932Encoder.encode("\u7E97")}).toThrowError({name:"TypeError",message:"EncodingError U+7E97"});
expect(() => {ms932Encoder.encode("\u7E98")}).toThrowError({name:"TypeError",message:"EncodingError U+7E98"});
expect(() => {ms932Encoder.encode("\u7E99")}).toThrowError({name:"TypeError",message:"EncodingError U+7E99"});
expect(() => {ms932Encoder.encode("\u7E9A")}).toThrowError({name:"TypeError",message:"EncodingError U+7E9A"});
expect([...ms932Encoder.encode("纛纜")].join(",")).toBe("227,155,227,156"); // U+7E9B
expect(() => {ms932Encoder.encode("\u7E9D")}).toThrowError({name:"TypeError",message:"EncodingError U+7E9D"});
expect(() => {ms932Encoder.encode("\u7E9E")}).toThrowError({name:"TypeError",message:"EncodingError U+7E9E"});
expect(() => {ms932Encoder.encode("\u7E9F")}).toThrowError({name:"TypeError",message:"EncodingError U+7E9F"});
expect(() => {ms932Encoder.encode("\u7EA0")}).toThrowError({name:"TypeError",message:"EncodingError U+7EA0"});
expect(() => {ms932Encoder.encode("\u7EA1")}).toThrowError({name:"TypeError",message:"EncodingError U+7EA1"});
expect(() => {ms932Encoder.encode("\u7EA2")}).toThrowError({name:"TypeError",message:"EncodingError U+7EA2"});
expect(() => {ms932Encoder.encode("\u7EA3")}).toThrowError({name:"TypeError",message:"EncodingError U+7EA3"});
expect(() => {ms932Encoder.encode("\u7EA4")}).toThrowError({name:"TypeError",message:"EncodingError U+7EA4"});
expect(() => {ms932Encoder.encode("\u7EA5")}).toThrowError({name:"TypeError",message:"EncodingError U+7EA5"});
expect(() => {ms932Encoder.encode("\u7EA6")}).toThrowError({name:"TypeError",message:"EncodingError U+7EA6"});
expect(() => {ms932Encoder.encode("\u7EA7")}).toThrowError({name:"TypeError",message:"EncodingError U+7EA7"});
expect(() => {ms932Encoder.encode("\u7EA8")}).toThrowError({name:"TypeError",message:"EncodingError U+7EA8"});
expect(() => {ms932Encoder.encode("\u7EA9")}).toThrowError({name:"TypeError",message:"EncodingError U+7EA9"});
expect(() => {ms932Encoder.encode("\u7EAA")}).toThrowError({name:"TypeError",message:"EncodingError U+7EAA"});
expect(() => {ms932Encoder.encode("\u7EAB")}).toThrowError({name:"TypeError",message:"EncodingError U+7EAB"});
expect(() => {ms932Encoder.encode("\u7EAC")}).toThrowError({name:"TypeError",message:"EncodingError U+7EAC"});
expect(() => {ms932Encoder.encode("\u7EAD")}).toThrowError({name:"TypeError",message:"EncodingError U+7EAD"});
expect(() => {ms932Encoder.encode("\u7EAE")}).toThrowError({name:"TypeError",message:"EncodingError U+7EAE"});
expect(() => {ms932Encoder.encode("\u7EAF")}).toThrowError({name:"TypeError",message:"EncodingError U+7EAF"});
expect(() => {ms932Encoder.encode("\u7EB0")}).toThrowError({name:"TypeError",message:"EncodingError U+7EB0"});
expect(() => {ms932Encoder.encode("\u7EB1")}).toThrowError({name:"TypeError",message:"EncodingError U+7EB1"});
expect(() => {ms932Encoder.encode("\u7EB2")}).toThrowError({name:"TypeError",message:"EncodingError U+7EB2"});
expect(() => {ms932Encoder.encode("\u7EB3")}).toThrowError({name:"TypeError",message:"EncodingError U+7EB3"});
expect(() => {ms932Encoder.encode("\u7EB4")}).toThrowError({name:"TypeError",message:"EncodingError U+7EB4"});
expect(() => {ms932Encoder.encode("\u7EB5")}).toThrowError({name:"TypeError",message:"EncodingError U+7EB5"});
expect(() => {ms932Encoder.encode("\u7EB6")}).toThrowError({name:"TypeError",message:"EncodingError U+7EB6"});
expect(() => {ms932Encoder.encode("\u7EB7")}).toThrowError({name:"TypeError",message:"EncodingError U+7EB7"});
expect(() => {ms932Encoder.encode("\u7EB8")}).toThrowError({name:"TypeError",message:"EncodingError U+7EB8"});
expect(() => {ms932Encoder.encode("\u7EB9")}).toThrowError({name:"TypeError",message:"EncodingError U+7EB9"});
expect(() => {ms932Encoder.encode("\u7EBA")}).toThrowError({name:"TypeError",message:"EncodingError U+7EBA"});
expect(() => {ms932Encoder.encode("\u7EBB")}).toThrowError({name:"TypeError",message:"EncodingError U+7EBB"});
expect(() => {ms932Encoder.encode("\u7EBC")}).toThrowError({name:"TypeError",message:"EncodingError U+7EBC"});
expect(() => {ms932Encoder.encode("\u7EBD")}).toThrowError({name:"TypeError",message:"EncodingError U+7EBD"});
expect(() => {ms932Encoder.encode("\u7EBE")}).toThrowError({name:"TypeError",message:"EncodingError U+7EBE"});
expect(() => {ms932Encoder.encode("\u7EBF")}).toThrowError({name:"TypeError",message:"EncodingError U+7EBF"});
expect(() => {ms932Encoder.encode("\u7EC0")}).toThrowError({name:"TypeError",message:"EncodingError U+7EC0"});
expect(() => {ms932Encoder.encode("\u7EC1")}).toThrowError({name:"TypeError",message:"EncodingError U+7EC1"});
expect(() => {ms932Encoder.encode("\u7EC2")}).toThrowError({name:"TypeError",message:"EncodingError U+7EC2"});
expect(() => {ms932Encoder.encode("\u7EC3")}).toThrowError({name:"TypeError",message:"EncodingError U+7EC3"});
expect(() => {ms932Encoder.encode("\u7EC4")}).toThrowError({name:"TypeError",message:"EncodingError U+7EC4"});
expect(() => {ms932Encoder.encode("\u7EC5")}).toThrowError({name:"TypeError",message:"EncodingError U+7EC5"});
expect(() => {ms932Encoder.encode("\u7EC6")}).toThrowError({name:"TypeError",message:"EncodingError U+7EC6"});
expect(() => {ms932Encoder.encode("\u7EC7")}).toThrowError({name:"TypeError",message:"EncodingError U+7EC7"});
expect(() => {ms932Encoder.encode("\u7EC8")}).toThrowError({name:"TypeError",message:"EncodingError U+7EC8"});
expect(() => {ms932Encoder.encode("\u7EC9")}).toThrowError({name:"TypeError",message:"EncodingError U+7EC9"});
expect(() => {ms932Encoder.encode("\u7ECA")}).toThrowError({name:"TypeError",message:"EncodingError U+7ECA"});
expect(() => {ms932Encoder.encode("\u7ECB")}).toThrowError({name:"TypeError",message:"EncodingError U+7ECB"});
expect(() => {ms932Encoder.encode("\u7ECC")}).toThrowError({name:"TypeError",message:"EncodingError U+7ECC"});
expect(() => {ms932Encoder.encode("\u7ECD")}).toThrowError({name:"TypeError",message:"EncodingError U+7ECD"});
expect(() => {ms932Encoder.encode("\u7ECE")}).toThrowError({name:"TypeError",message:"EncodingError U+7ECE"});
expect(() => {ms932Encoder.encode("\u7ECF")}).toThrowError({name:"TypeError",message:"EncodingError U+7ECF"});
expect(() => {ms932Encoder.encode("\u7ED0")}).toThrowError({name:"TypeError",message:"EncodingError U+7ED0"});
expect(() => {ms932Encoder.encode("\u7ED1")}).toThrowError({name:"TypeError",message:"EncodingError U+7ED1"});
expect(() => {ms932Encoder.encode("\u7ED2")}).toThrowError({name:"TypeError",message:"EncodingError U+7ED2"});
expect(() => {ms932Encoder.encode("\u7ED3")}).toThrowError({name:"TypeError",message:"EncodingError U+7ED3"});
expect(() => {ms932Encoder.encode("\u7ED4")}).toThrowError({name:"TypeError",message:"EncodingError U+7ED4"});
expect(() => {ms932Encoder.encode("\u7ED5")}).toThrowError({name:"TypeError",message:"EncodingError U+7ED5"});
expect(() => {ms932Encoder.encode("\u7ED6")}).toThrowError({name:"TypeError",message:"EncodingError U+7ED6"});
expect(() => {ms932Encoder.encode("\u7ED7")}).toThrowError({name:"TypeError",message:"EncodingError U+7ED7"});
expect(() => {ms932Encoder.encode("\u7ED8")}).toThrowError({name:"TypeError",message:"EncodingError U+7ED8"});
expect(() => {ms932Encoder.encode("\u7ED9")}).toThrowError({name:"TypeError",message:"EncodingError U+7ED9"});
expect(() => {ms932Encoder.encode("\u7EDA")}).toThrowError({name:"TypeError",message:"EncodingError U+7EDA"});
expect(() => {ms932Encoder.encode("\u7EDB")}).toThrowError({name:"TypeError",message:"EncodingError U+7EDB"});
expect(() => {ms932Encoder.encode("\u7EDC")}).toThrowError({name:"TypeError",message:"EncodingError U+7EDC"});
expect(() => {ms932Encoder.encode("\u7EDD")}).toThrowError({name:"TypeError",message:"EncodingError U+7EDD"});
expect(() => {ms932Encoder.encode("\u7EDE")}).toThrowError({name:"TypeError",message:"EncodingError U+7EDE"});
expect(() => {ms932Encoder.encode("\u7EDF")}).toThrowError({name:"TypeError",message:"EncodingError U+7EDF"});
expect(() => {ms932Encoder.encode("\u7EE0")}).toThrowError({name:"TypeError",message:"EncodingError U+7EE0"});
expect(() => {ms932Encoder.encode("\u7EE1")}).toThrowError({name:"TypeError",message:"EncodingError U+7EE1"});
expect(() => {ms932Encoder.encode("\u7EE2")}).toThrowError({name:"TypeError",message:"EncodingError U+7EE2"});
expect(() => {ms932Encoder.encode("\u7EE3")}).toThrowError({name:"TypeError",message:"EncodingError U+7EE3"});
expect(() => {ms932Encoder.encode("\u7EE4")}).toThrowError({name:"TypeError",message:"EncodingError U+7EE4"});
expect(() => {ms932Encoder.encode("\u7EE5")}).toThrowError({name:"TypeError",message:"EncodingError U+7EE5"});
expect(() => {ms932Encoder.encode("\u7EE6")}).toThrowError({name:"TypeError",message:"EncodingError U+7EE6"});
expect(() => {ms932Encoder.encode("\u7EE7")}).toThrowError({name:"TypeError",message:"EncodingError U+7EE7"});
expect(() => {ms932Encoder.encode("\u7EE8")}).toThrowError({name:"TypeError",message:"EncodingError U+7EE8"});
expect(() => {ms932Encoder.encode("\u7EE9")}).toThrowError({name:"TypeError",message:"EncodingError U+7EE9"});
expect(() => {ms932Encoder.encode("\u7EEA")}).toThrowError({name:"TypeError",message:"EncodingError U+7EEA"});
expect(() => {ms932Encoder.encode("\u7EEB")}).toThrowError({name:"TypeError",message:"EncodingError U+7EEB"});
expect(() => {ms932Encoder.encode("\u7EEC")}).toThrowError({name:"TypeError",message:"EncodingError U+7EEC"});
expect(() => {ms932Encoder.encode("\u7EED")}).toThrowError({name:"TypeError",message:"EncodingError U+7EED"});
expect(() => {ms932Encoder.encode("\u7EEE")}).toThrowError({name:"TypeError",message:"EncodingError U+7EEE"});
expect(() => {ms932Encoder.encode("\u7EEF")}).toThrowError({name:"TypeError",message:"EncodingError U+7EEF"});
expect(() => {ms932Encoder.encode("\u7EF0")}).toThrowError({name:"TypeError",message:"EncodingError U+7EF0"});
expect(() => {ms932Encoder.encode("\u7EF1")}).toThrowError({name:"TypeError",message:"EncodingError U+7EF1"});
expect(() => {ms932Encoder.encode("\u7EF2")}).toThrowError({name:"TypeError",message:"EncodingError U+7EF2"});
expect(() => {ms932Encoder.encode("\u7EF3")}).toThrowError({name:"TypeError",message:"EncodingError U+7EF3"});
expect(() => {ms932Encoder.encode("\u7EF4")}).toThrowError({name:"TypeError",message:"EncodingError U+7EF4"});
expect(() => {ms932Encoder.encode("\u7EF5")}).toThrowError({name:"TypeError",message:"EncodingError U+7EF5"});
expect(() => {ms932Encoder.encode("\u7EF6")}).toThrowError({name:"TypeError",message:"EncodingError U+7EF6"});
expect(() => {ms932Encoder.encode("\u7EF7")}).toThrowError({name:"TypeError",message:"EncodingError U+7EF7"});
expect(() => {ms932Encoder.encode("\u7EF8")}).toThrowError({name:"TypeError",message:"EncodingError U+7EF8"});
expect(() => {ms932Encoder.encode("\u7EF9")}).toThrowError({name:"TypeError",message:"EncodingError U+7EF9"});
expect(() => {ms932Encoder.encode("\u7EFA")}).toThrowError({name:"TypeError",message:"EncodingError U+7EFA"});
expect(() => {ms932Encoder.encode("\u7EFB")}).toThrowError({name:"TypeError",message:"EncodingError U+7EFB"});
expect(() => {ms932Encoder.encode("\u7EFC")}).toThrowError({name:"TypeError",message:"EncodingError U+7EFC"});
expect(() => {ms932Encoder.encode("\u7EFD")}).toThrowError({name:"TypeError",message:"EncodingError U+7EFD"});
expect(() => {ms932Encoder.encode("\u7EFE")}).toThrowError({name:"TypeError",message:"EncodingError U+7EFE"});
expect(() => {ms932Encoder.encode("\u7EFF")}).toThrowError({name:"TypeError",message:"EncodingError U+7EFF"});
expect(() => {ms932Encoder.encode("\u7F00")}).toThrowError({name:"TypeError",message:"EncodingError U+7F00"});
expect(() => {ms932Encoder.encode("\u7F01")}).toThrowError({name:"TypeError",message:"EncodingError U+7F01"});
expect(() => {ms932Encoder.encode("\u7F02")}).toThrowError({name:"TypeError",message:"EncodingError U+7F02"});
expect(() => {ms932Encoder.encode("\u7F03")}).toThrowError({name:"TypeError",message:"EncodingError U+7F03"});
expect(() => {ms932Encoder.encode("\u7F04")}).toThrowError({name:"TypeError",message:"EncodingError U+7F04"});
expect(() => {ms932Encoder.encode("\u7F05")}).toThrowError({name:"TypeError",message:"EncodingError U+7F05"});
expect(() => {ms932Encoder.encode("\u7F06")}).toThrowError({name:"TypeError",message:"EncodingError U+7F06"});
expect(() => {ms932Encoder.encode("\u7F07")}).toThrowError({name:"TypeError",message:"EncodingError U+7F07"});
expect(() => {ms932Encoder.encode("\u7F08")}).toThrowError({name:"TypeError",message:"EncodingError U+7F08"});
expect(() => {ms932Encoder.encode("\u7F09")}).toThrowError({name:"TypeError",message:"EncodingError U+7F09"});
expect(() => {ms932Encoder.encode("\u7F0A")}).toThrowError({name:"TypeError",message:"EncodingError U+7F0A"});
expect(() => {ms932Encoder.encode("\u7F0B")}).toThrowError({name:"TypeError",message:"EncodingError U+7F0B"});
expect(() => {ms932Encoder.encode("\u7F0C")}).toThrowError({name:"TypeError",message:"EncodingError U+7F0C"});
expect(() => {ms932Encoder.encode("\u7F0D")}).toThrowError({name:"TypeError",message:"EncodingError U+7F0D"});
expect(() => {ms932Encoder.encode("\u7F0E")}).toThrowError({name:"TypeError",message:"EncodingError U+7F0E"});
expect(() => {ms932Encoder.encode("\u7F0F")}).toThrowError({name:"TypeError",message:"EncodingError U+7F0F"});
expect(() => {ms932Encoder.encode("\u7F10")}).toThrowError({name:"TypeError",message:"EncodingError U+7F10"});
expect(() => {ms932Encoder.encode("\u7F11")}).toThrowError({name:"TypeError",message:"EncodingError U+7F11"});
expect(() => {ms932Encoder.encode("\u7F12")}).toThrowError({name:"TypeError",message:"EncodingError U+7F12"});
expect(() => {ms932Encoder.encode("\u7F13")}).toThrowError({name:"TypeError",message:"EncodingError U+7F13"});
expect(() => {ms932Encoder.encode("\u7F14")}).toThrowError({name:"TypeError",message:"EncodingError U+7F14"});
expect(() => {ms932Encoder.encode("\u7F15")}).toThrowError({name:"TypeError",message:"EncodingError U+7F15"});
expect(() => {ms932Encoder.encode("\u7F16")}).toThrowError({name:"TypeError",message:"EncodingError U+7F16"});
expect(() => {ms932Encoder.encode("\u7F17")}).toThrowError({name:"TypeError",message:"EncodingError U+7F17"});
expect(() => {ms932Encoder.encode("\u7F18")}).toThrowError({name:"TypeError",message:"EncodingError U+7F18"});
expect(() => {ms932Encoder.encode("\u7F19")}).toThrowError({name:"TypeError",message:"EncodingError U+7F19"});
expect(() => {ms932Encoder.encode("\u7F1A")}).toThrowError({name:"TypeError",message:"EncodingError U+7F1A"});
expect(() => {ms932Encoder.encode("\u7F1B")}).toThrowError({name:"TypeError",message:"EncodingError U+7F1B"});
expect(() => {ms932Encoder.encode("\u7F1C")}).toThrowError({name:"TypeError",message:"EncodingError U+7F1C"});
expect(() => {ms932Encoder.encode("\u7F1D")}).toThrowError({name:"TypeError",message:"EncodingError U+7F1D"});
expect(() => {ms932Encoder.encode("\u7F1E")}).toThrowError({name:"TypeError",message:"EncodingError U+7F1E"});
expect(() => {ms932Encoder.encode("\u7F1F")}).toThrowError({name:"TypeError",message:"EncodingError U+7F1F"});
expect(() => {ms932Encoder.encode("\u7F20")}).toThrowError({name:"TypeError",message:"EncodingError U+7F20"});
expect(() => {ms932Encoder.encode("\u7F21")}).toThrowError({name:"TypeError",message:"EncodingError U+7F21"});
expect(() => {ms932Encoder.encode("\u7F22")}).toThrowError({name:"TypeError",message:"EncodingError U+7F22"});
expect(() => {ms932Encoder.encode("\u7F23")}).toThrowError({name:"TypeError",message:"EncodingError U+7F23"});
expect(() => {ms932Encoder.encode("\u7F24")}).toThrowError({name:"TypeError",message:"EncodingError U+7F24"});
expect(() => {ms932Encoder.encode("\u7F25")}).toThrowError({name:"TypeError",message:"EncodingError U+7F25"});
expect(() => {ms932Encoder.encode("\u7F26")}).toThrowError({name:"TypeError",message:"EncodingError U+7F26"});
expect(() => {ms932Encoder.encode("\u7F27")}).toThrowError({name:"TypeError",message:"EncodingError U+7F27"});
expect(() => {ms932Encoder.encode("\u7F28")}).toThrowError({name:"TypeError",message:"EncodingError U+7F28"});
expect(() => {ms932Encoder.encode("\u7F29")}).toThrowError({name:"TypeError",message:"EncodingError U+7F29"});
expect(() => {ms932Encoder.encode("\u7F2A")}).toThrowError({name:"TypeError",message:"EncodingError U+7F2A"});
expect(() => {ms932Encoder.encode("\u7F2B")}).toThrowError({name:"TypeError",message:"EncodingError U+7F2B"});
expect(() => {ms932Encoder.encode("\u7F2C")}).toThrowError({name:"TypeError",message:"EncodingError U+7F2C"});
expect(() => {ms932Encoder.encode("\u7F2D")}).toThrowError({name:"TypeError",message:"EncodingError U+7F2D"});
expect(() => {ms932Encoder.encode("\u7F2E")}).toThrowError({name:"TypeError",message:"EncodingError U+7F2E"});
expect(() => {ms932Encoder.encode("\u7F2F")}).toThrowError({name:"TypeError",message:"EncodingError U+7F2F"});
expect(() => {ms932Encoder.encode("\u7F30")}).toThrowError({name:"TypeError",message:"EncodingError U+7F30"});
expect(() => {ms932Encoder.encode("\u7F31")}).toThrowError({name:"TypeError",message:"EncodingError U+7F31"});
expect(() => {ms932Encoder.encode("\u7F32")}).toThrowError({name:"TypeError",message:"EncodingError U+7F32"});
expect(() => {ms932Encoder.encode("\u7F33")}).toThrowError({name:"TypeError",message:"EncodingError U+7F33"});
expect(() => {ms932Encoder.encode("\u7F34")}).toThrowError({name:"TypeError",message:"EncodingError U+7F34"});
expect(() => {ms932Encoder.encode("\u7F35")}).toThrowError({name:"TypeError",message:"EncodingError U+7F35"});
expect([...ms932Encoder.encode("缶")].join(",")).toBe("138,202"); // U+7F36
expect(() => {ms932Encoder.encode("\u7F37")}).toThrowError({name:"TypeError",message:"EncodingError U+7F37"});
expect([...ms932Encoder.encode("缸")].join(",")).toBe("227,157"); // U+7F38
expect(() => {ms932Encoder.encode("\u7F39")}).toThrowError({name:"TypeError",message:"EncodingError U+7F39"});
expect([...ms932Encoder.encode("缺")].join(",")).toBe("227,158"); // U+7F3A
expect(() => {ms932Encoder.encode("\u7F3B")}).toThrowError({name:"TypeError",message:"EncodingError U+7F3B"});
expect(() => {ms932Encoder.encode("\u7F3C")}).toThrowError({name:"TypeError",message:"EncodingError U+7F3C"});
expect(() => {ms932Encoder.encode("\u7F3D")}).toThrowError({name:"TypeError",message:"EncodingError U+7F3D"});
expect(() => {ms932Encoder.encode("\u7F3E")}).toThrowError({name:"TypeError",message:"EncodingError U+7F3E"});
expect(() => {ms932Encoder.encode("\u7F3F")}).toThrowError({name:"TypeError",message:"EncodingError U+7F3F"});
expect(() => {ms932Encoder.encode("\u7F40")}).toThrowError({name:"TypeError",message:"EncodingError U+7F40"});
expect(() => {ms932Encoder.encode("\u7F41")}).toThrowError({name:"TypeError",message:"EncodingError U+7F41"});
expect(() => {ms932Encoder.encode("\u7F42")}).toThrowError({name:"TypeError",message:"EncodingError U+7F42"});
expect(() => {ms932Encoder.encode("\u7F43")}).toThrowError({name:"TypeError",message:"EncodingError U+7F43"});
expect(() => {ms932Encoder.encode("\u7F44")}).toThrowError({name:"TypeError",message:"EncodingError U+7F44"});
expect([...ms932Encoder.encode("罅")].join(",")).toBe("227,159"); // U+7F45
expect(() => {ms932Encoder.encode("\u7F46")}).toThrowError({name:"TypeError",message:"EncodingError U+7F46"});
expect([...ms932Encoder.encode("罇")].join(",")).toBe("251,144"); // U+7F47
expect(() => {ms932Encoder.encode("\u7F48")}).toThrowError({name:"TypeError",message:"EncodingError U+7F48"});
expect(() => {ms932Encoder.encode("\u7F49")}).toThrowError({name:"TypeError",message:"EncodingError U+7F49"});
expect(() => {ms932Encoder.encode("\u7F4A")}).toThrowError({name:"TypeError",message:"EncodingError U+7F4A"});
expect(() => {ms932Encoder.encode("\u7F4B")}).toThrowError({name:"TypeError",message:"EncodingError U+7F4B"});
expect([...ms932Encoder.encode("罌罍罎")].join(",")).toBe("227,160,227,161,227,162"); // U+7F4C
expect(() => {ms932Encoder.encode("\u7F4F")}).toThrowError({name:"TypeError",message:"EncodingError U+7F4F"});
expect([...ms932Encoder.encode("罐网")].join(",")).toBe("227,163,227,164"); // U+7F50
expect(() => {ms932Encoder.encode("\u7F52")}).toThrowError({name:"TypeError",message:"EncodingError U+7F52"});
expect(() => {ms932Encoder.encode("\u7F53")}).toThrowError({name:"TypeError",message:"EncodingError U+7F53"});
expect([...ms932Encoder.encode("罔罕")].join(",")).toBe("227,166,227,165"); // U+7F54
expect(() => {ms932Encoder.encode("\u7F56")}).toThrowError({name:"TypeError",message:"EncodingError U+7F56"});
expect(() => {ms932Encoder.encode("\u7F57")}).toThrowError({name:"TypeError",message:"EncodingError U+7F57"});
expect([...ms932Encoder.encode("罘")].join(",")).toBe("227,167"); // U+7F58
expect(() => {ms932Encoder.encode("\u7F59")}).toThrowError({name:"TypeError",message:"EncodingError U+7F59"});
expect(() => {ms932Encoder.encode("\u7F5A")}).toThrowError({name:"TypeError",message:"EncodingError U+7F5A"});
expect(() => {ms932Encoder.encode("\u7F5B")}).toThrowError({name:"TypeError",message:"EncodingError U+7F5B"});
expect(() => {ms932Encoder.encode("\u7F5C")}).toThrowError({name:"TypeError",message:"EncodingError U+7F5C"});
expect(() => {ms932Encoder.encode("\u7F5D")}).toThrowError({name:"TypeError",message:"EncodingError U+7F5D"});
expect(() => {ms932Encoder.encode("\u7F5E")}).toThrowError({name:"TypeError",message:"EncodingError U+7F5E"});
expect([...ms932Encoder.encode("罟罠")].join(",")).toBe("227,168,227,169"); // U+7F5F
expect(() => {ms932Encoder.encode("\u7F61")}).toThrowError({name:"TypeError",message:"EncodingError U+7F61"});
expect(() => {ms932Encoder.encode("\u7F62")}).toThrowError({name:"TypeError",message:"EncodingError U+7F62"});
expect(() => {ms932Encoder.encode("\u7F63")}).toThrowError({name:"TypeError",message:"EncodingError U+7F63"});
expect(() => {ms932Encoder.encode("\u7F64")}).toThrowError({name:"TypeError",message:"EncodingError U+7F64"});
expect(() => {ms932Encoder.encode("\u7F65")}).toThrowError({name:"TypeError",message:"EncodingError U+7F65"});
expect(() => {ms932Encoder.encode("\u7F66")}).toThrowError({name:"TypeError",message:"EncodingError U+7F66"});
expect([...ms932Encoder.encode("罧罨罩罪罫")].join(",")).toBe("227,172,227,170,227,171,141,223,140,114"); // U+7F67
expect(() => {ms932Encoder.encode("\u7F6C")}).toThrowError({name:"TypeError",message:"EncodingError U+7F6C"});
expect(() => {ms932Encoder.encode("\u7F6D")}).toThrowError({name:"TypeError",message:"EncodingError U+7F6D"});
expect([...ms932Encoder.encode("置")].join(",")).toBe("146,117"); // U+7F6E
expect(() => {ms932Encoder.encode("\u7F6F")}).toThrowError({name:"TypeError",message:"EncodingError U+7F6F"});
expect([...ms932Encoder.encode("罰")].join(",")).toBe("148,177"); // U+7F70
expect(() => {ms932Encoder.encode("\u7F71")}).toThrowError({name:"TypeError",message:"EncodingError U+7F71"});
expect([...ms932Encoder.encode("署")].join(",")).toBe("143,144"); // U+7F72
expect(() => {ms932Encoder.encode("\u7F73")}).toThrowError({name:"TypeError",message:"EncodingError U+7F73"});
expect(() => {ms932Encoder.encode("\u7F74")}).toThrowError({name:"TypeError",message:"EncodingError U+7F74"});
expect([...ms932Encoder.encode("罵")].join(",")).toBe("148,108"); // U+7F75
expect(() => {ms932Encoder.encode("\u7F76")}).toThrowError({name:"TypeError",message:"EncodingError U+7F76"});
expect([...ms932Encoder.encode("罷罸罹")].join(",")).toBe("148,235,227,173,156,235"); // U+7F77
expect(() => {ms932Encoder.encode("\u7F7A")}).toThrowError({name:"TypeError",message:"EncodingError U+7F7A"});
expect(() => {ms932Encoder.encode("\u7F7B")}).toThrowError({name:"TypeError",message:"EncodingError U+7F7B"});
expect(() => {ms932Encoder.encode("\u7F7C")}).toThrowError({name:"TypeError",message:"EncodingError U+7F7C"});
expect(() => {ms932Encoder.encode("\u7F7D")}).toThrowError({name:"TypeError",message:"EncodingError U+7F7D"});
expect(() => {ms932Encoder.encode("\u7F7E")}).toThrowError({name:"TypeError",message:"EncodingError U+7F7E"});
expect(() => {ms932Encoder.encode("\u7F7F")}).toThrowError({name:"TypeError",message:"EncodingError U+7F7F"});
expect(() => {ms932Encoder.encode("\u7F80")}).toThrowError({name:"TypeError",message:"EncodingError U+7F80"});
expect(() => {ms932Encoder.encode("\u7F81")}).toThrowError({name:"TypeError",message:"EncodingError U+7F81"});
expect([...ms932Encoder.encode("羂羃")].join(",")).toBe("227,174,227,176"); // U+7F82
expect(() => {ms932Encoder.encode("\u7F84")}).toThrowError({name:"TypeError",message:"EncodingError U+7F84"});
expect([...ms932Encoder.encode("羅羆羇羈")].join(",")).toBe("151,133,227,175,227,178,227,177"); // U+7F85
expect(() => {ms932Encoder.encode("\u7F89")}).toThrowError({name:"TypeError",message:"EncodingError U+7F89"});
expect([...ms932Encoder.encode("羊")].join(",")).toBe("151,114"); // U+7F8A
expect(() => {ms932Encoder.encode("\u7F8B")}).toThrowError({name:"TypeError",message:"EncodingError U+7F8B"});
expect([...ms932Encoder.encode("羌")].join(",")).toBe("227,179"); // U+7F8C
expect(() => {ms932Encoder.encode("\u7F8D")}).toThrowError({name:"TypeError",message:"EncodingError U+7F8D"});
expect([...ms932Encoder.encode("美")].join(",")).toBe("148,252"); // U+7F8E
expect(() => {ms932Encoder.encode("\u7F8F")}).toThrowError({name:"TypeError",message:"EncodingError U+7F8F"});
expect(() => {ms932Encoder.encode("\u7F90")}).toThrowError({name:"TypeError",message:"EncodingError U+7F90"});
expect(() => {ms932Encoder.encode("\u7F91")}).toThrowError({name:"TypeError",message:"EncodingError U+7F91"});
expect(() => {ms932Encoder.encode("\u7F92")}).toThrowError({name:"TypeError",message:"EncodingError U+7F92"});
expect(() => {ms932Encoder.encode("\u7F93")}).toThrowError({name:"TypeError",message:"EncodingError U+7F93"});
expect([...ms932Encoder.encode("羔")].join(",")).toBe("227,180"); // U+7F94
expect(() => {ms932Encoder.encode("\u7F95")}).toThrowError({name:"TypeError",message:"EncodingError U+7F95"});
expect(() => {ms932Encoder.encode("\u7F96")}).toThrowError({name:"TypeError",message:"EncodingError U+7F96"});
expect(() => {ms932Encoder.encode("\u7F97")}).toThrowError({name:"TypeError",message:"EncodingError U+7F97"});
expect(() => {ms932Encoder.encode("\u7F98")}).toThrowError({name:"TypeError",message:"EncodingError U+7F98"});
expect(() => {ms932Encoder.encode("\u7F99")}).toThrowError({name:"TypeError",message:"EncodingError U+7F99"});
expect([...ms932Encoder.encode("羚")].join(",")).toBe("227,183"); // U+7F9A
expect(() => {ms932Encoder.encode("\u7F9B")}).toThrowError({name:"TypeError",message:"EncodingError U+7F9B"});
expect(() => {ms932Encoder.encode("\u7F9C")}).toThrowError({name:"TypeError",message:"EncodingError U+7F9C"});
expect([...ms932Encoder.encode("羝羞")].join(",")).toBe("227,182,227,181"); // U+7F9D
expect(() => {ms932Encoder.encode("\u7F9F")}).toThrowError({name:"TypeError",message:"EncodingError U+7F9F"});
expect(() => {ms932Encoder.encode("\u7FA0")}).toThrowError({name:"TypeError",message:"EncodingError U+7FA0"});
expect([...ms932Encoder.encode("羡")].join(",")).toBe("251,145"); // U+7FA1
expect(() => {ms932Encoder.encode("\u7FA2")}).toThrowError({name:"TypeError",message:"EncodingError U+7FA2"});
expect([...ms932Encoder.encode("羣群")].join(",")).toBe("227,184,140,81"); // U+7FA3
expect(() => {ms932Encoder.encode("\u7FA5")}).toThrowError({name:"TypeError",message:"EncodingError U+7FA5"});
expect(() => {ms932Encoder.encode("\u7FA6")}).toThrowError({name:"TypeError",message:"EncodingError U+7FA6"});
expect(() => {ms932Encoder.encode("\u7FA7")}).toThrowError({name:"TypeError",message:"EncodingError U+7FA7"});
expect([...ms932Encoder.encode("羨義")].join(",")).toBe("145,65,139,96"); // U+7FA8
expect(() => {ms932Encoder.encode("\u7FAA")}).toThrowError({name:"TypeError",message:"EncodingError U+7FAA"});
expect(() => {ms932Encoder.encode("\u7FAB")}).toThrowError({name:"TypeError",message:"EncodingError U+7FAB"});
expect(() => {ms932Encoder.encode("\u7FAC")}).toThrowError({name:"TypeError",message:"EncodingError U+7FAC"});
expect(() => {ms932Encoder.encode("\u7FAD")}).toThrowError({name:"TypeError",message:"EncodingError U+7FAD"});
expect([...ms932Encoder.encode("羮羯")].join(",")).toBe("227,188,227,185"); // U+7FAE
expect(() => {ms932Encoder.encode("\u7FB0")}).toThrowError({name:"TypeError",message:"EncodingError U+7FB0"});
expect(() => {ms932Encoder.encode("\u7FB1")}).toThrowError({name:"TypeError",message:"EncodingError U+7FB1"});
expect([...ms932Encoder.encode("羲")].join(",")).toBe("227,186"); // U+7FB2
expect(() => {ms932Encoder.encode("\u7FB3")}).toThrowError({name:"TypeError",message:"EncodingError U+7FB3"});
expect(() => {ms932Encoder.encode("\u7FB4")}).toThrowError({name:"TypeError",message:"EncodingError U+7FB4"});
expect(() => {ms932Encoder.encode("\u7FB5")}).toThrowError({name:"TypeError",message:"EncodingError U+7FB5"});
expect([...ms932Encoder.encode("羶")].join(",")).toBe("227,189"); // U+7FB6
expect(() => {ms932Encoder.encode("\u7FB7")}).toThrowError({name:"TypeError",message:"EncodingError U+7FB7"});
expect([...ms932Encoder.encode("羸羹")].join(",")).toBe("227,190,227,187"); // U+7FB8
expect(() => {ms932Encoder.encode("\u7FBA")}).toThrowError({name:"TypeError",message:"EncodingError U+7FBA"});
expect(() => {ms932Encoder.encode("\u7FBB")}).toThrowError({name:"TypeError",message:"EncodingError U+7FBB"});
expect(() => {ms932Encoder.encode("\u7FBC")}).toThrowError({name:"TypeError",message:"EncodingError U+7FBC"});
expect([...ms932Encoder.encode("羽")].join(",")).toBe("137,72"); // U+7FBD
expect(() => {ms932Encoder.encode("\u7FBE")}).toThrowError({name:"TypeError",message:"EncodingError U+7FBE"});
expect(() => {ms932Encoder.encode("\u7FBF")}).toThrowError({name:"TypeError",message:"EncodingError U+7FBF"});
expect(() => {ms932Encoder.encode("\u7FC0")}).toThrowError({name:"TypeError",message:"EncodingError U+7FC0"});
expect([...ms932Encoder.encode("翁")].join(",")).toBe("137,165"); // U+7FC1
expect(() => {ms932Encoder.encode("\u7FC2")}).toThrowError({name:"TypeError",message:"EncodingError U+7FC2"});
expect(() => {ms932Encoder.encode("\u7FC3")}).toThrowError({name:"TypeError",message:"EncodingError U+7FC3"});
expect(() => {ms932Encoder.encode("\u7FC4")}).toThrowError({name:"TypeError",message:"EncodingError U+7FC4"});
expect([...ms932Encoder.encode("翅翆")].join(",")).toBe("227,192,227,193"); // U+7FC5
expect(() => {ms932Encoder.encode("\u7FC7")}).toThrowError({name:"TypeError",message:"EncodingError U+7FC7"});
expect(() => {ms932Encoder.encode("\u7FC8")}).toThrowError({name:"TypeError",message:"EncodingError U+7FC8"});
expect(() => {ms932Encoder.encode("\u7FC9")}).toThrowError({name:"TypeError",message:"EncodingError U+7FC9"});
expect([...ms932Encoder.encode("翊")].join(",")).toBe("227,194"); // U+7FCA
expect(() => {ms932Encoder.encode("\u7FCB")}).toThrowError({name:"TypeError",message:"EncodingError U+7FCB"});
expect([...ms932Encoder.encode("翌")].join(",")).toBe("151,130"); // U+7FCC
expect(() => {ms932Encoder.encode("\u7FCD")}).toThrowError({name:"TypeError",message:"EncodingError U+7FCD"});
expect(() => {ms932Encoder.encode("\u7FCE")}).toThrowError({name:"TypeError",message:"EncodingError U+7FCE"});
expect(() => {ms932Encoder.encode("\u7FCF")}).toThrowError({name:"TypeError",message:"EncodingError U+7FCF"});
expect(() => {ms932Encoder.encode("\u7FD0")}).toThrowError({name:"TypeError",message:"EncodingError U+7FD0"});
expect(() => {ms932Encoder.encode("\u7FD1")}).toThrowError({name:"TypeError",message:"EncodingError U+7FD1"});
expect([...ms932Encoder.encode("習")].join(",")).toBe("143,75"); // U+7FD2
expect(() => {ms932Encoder.encode("\u7FD3")}).toThrowError({name:"TypeError",message:"EncodingError U+7FD3"});
expect([...ms932Encoder.encode("翔翕")].join(",")).toBe("227,196,227,195"); // U+7FD4
expect(() => {ms932Encoder.encode("\u7FD6")}).toThrowError({name:"TypeError",message:"EncodingError U+7FD6"});
expect(() => {ms932Encoder.encode("\u7FD7")}).toThrowError({name:"TypeError",message:"EncodingError U+7FD7"});
expect(() => {ms932Encoder.encode("\u7FD8")}).toThrowError({name:"TypeError",message:"EncodingError U+7FD8"});
expect(() => {ms932Encoder.encode("\u7FD9")}).toThrowError({name:"TypeError",message:"EncodingError U+7FD9"});
expect(() => {ms932Encoder.encode("\u7FDA")}).toThrowError({name:"TypeError",message:"EncodingError U+7FDA"});
expect(() => {ms932Encoder.encode("\u7FDB")}).toThrowError({name:"TypeError",message:"EncodingError U+7FDB"});
expect(() => {ms932Encoder.encode("\u7FDC")}).toThrowError({name:"TypeError",message:"EncodingError U+7FDC"});
expect(() => {ms932Encoder.encode("\u7FDD")}).toThrowError({name:"TypeError",message:"EncodingError U+7FDD"});
expect(() => {ms932Encoder.encode("\u7FDE")}).toThrowError({name:"TypeError",message:"EncodingError U+7FDE"});
expect(() => {ms932Encoder.encode("\u7FDF")}).toThrowError({name:"TypeError",message:"EncodingError U+7FDF"});
expect([...ms932Encoder.encode("翠翡")].join(",")).toBe("144,137,227,197"); // U+7FE0
expect(() => {ms932Encoder.encode("\u7FE2")}).toThrowError({name:"TypeError",message:"EncodingError U+7FE2"});
expect(() => {ms932Encoder.encode("\u7FE3")}).toThrowError({name:"TypeError",message:"EncodingError U+7FE3"});
expect(() => {ms932Encoder.encode("\u7FE4")}).toThrowError({name:"TypeError",message:"EncodingError U+7FE4"});
expect(() => {ms932Encoder.encode("\u7FE5")}).toThrowError({name:"TypeError",message:"EncodingError U+7FE5"});
expect([...ms932Encoder.encode("翦")].join(",")).toBe("227,198"); // U+7FE6
expect(() => {ms932Encoder.encode("\u7FE7")}).toThrowError({name:"TypeError",message:"EncodingError U+7FE7"});
expect(() => {ms932Encoder.encode("\u7FE8")}).toThrowError({name:"TypeError",message:"EncodingError U+7FE8"});
expect([...ms932Encoder.encode("翩")].join(",")).toBe("227,199"); // U+7FE9
expect(() => {ms932Encoder.encode("\u7FEA")}).toThrowError({name:"TypeError",message:"EncodingError U+7FEA"});
expect([...ms932Encoder.encode("翫")].join(",")).toBe("138,227"); // U+7FEB
expect(() => {ms932Encoder.encode("\u7FEC")}).toThrowError({name:"TypeError",message:"EncodingError U+7FEC"});
expect(() => {ms932Encoder.encode("\u7FED")}).toThrowError({name:"TypeError",message:"EncodingError U+7FED"});
expect(() => {ms932Encoder.encode("\u7FEE")}).toThrowError({name:"TypeError",message:"EncodingError U+7FEE"});
expect(() => {ms932Encoder.encode("\u7FEF")}).toThrowError({name:"TypeError",message:"EncodingError U+7FEF"});
expect([...ms932Encoder.encode("翰")].join(",")).toBe("138,203"); // U+7FF0
expect(() => {ms932Encoder.encode("\u7FF1")}).toThrowError({name:"TypeError",message:"EncodingError U+7FF1"});
expect(() => {ms932Encoder.encode("\u7FF2")}).toThrowError({name:"TypeError",message:"EncodingError U+7FF2"});
expect([...ms932Encoder.encode("翳")].join(",")).toBe("227,200"); // U+7FF3
expect(() => {ms932Encoder.encode("\u7FF4")}).toThrowError({name:"TypeError",message:"EncodingError U+7FF4"});
expect(() => {ms932Encoder.encode("\u7FF5")}).toThrowError({name:"TypeError",message:"EncodingError U+7FF5"});
expect(() => {ms932Encoder.encode("\u7FF6")}).toThrowError({name:"TypeError",message:"EncodingError U+7FF6"});
expect(() => {ms932Encoder.encode("\u7FF7")}).toThrowError({name:"TypeError",message:"EncodingError U+7FF7"});
expect(() => {ms932Encoder.encode("\u7FF8")}).toThrowError({name:"TypeError",message:"EncodingError U+7FF8"});
expect([...ms932Encoder.encode("翹")].join(",")).toBe("227,201"); // U+7FF9
expect(() => {ms932Encoder.encode("\u7FFA")}).toThrowError({name:"TypeError",message:"EncodingError U+7FFA"});
expect([...ms932Encoder.encode("翻翼")].join(",")).toBe("150,124,151,131"); // U+7FFB
expect(() => {ms932Encoder.encode("\u7FFD")}).toThrowError({name:"TypeError",message:"EncodingError U+7FFD"});
expect(() => {ms932Encoder.encode("\u7FFE")}).toThrowError({name:"TypeError",message:"EncodingError U+7FFE"});
expect(() => {ms932Encoder.encode("\u7FFF")}).toThrowError({name:"TypeError",message:"EncodingError U+7FFF"});

  });

});
