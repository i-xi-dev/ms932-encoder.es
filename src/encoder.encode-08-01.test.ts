import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 8", () => {

  it("encode(string) - U+7000-U+73FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u7000")}, {name:"Error",message:"EncodingError U+7000"});
r = r && ([...ms932Encoder.encode("瀁")].join(",") === "224,102"); // U+7001
assert.throws(() => {ms932Encoder.encode("\u7002")}, {name:"Error",message:"EncodingError U+7002"});
assert.throws(() => {ms932Encoder.encode("\u7003")}, {name:"Error",message:"EncodingError U+7003"});
assert.throws(() => {ms932Encoder.encode("\u7004")}, {name:"Error",message:"EncodingError U+7004"});
r = r && ([...ms932Encoder.encode("瀅")].join(",") === "251,78"); // U+7005
assert.throws(() => {ms932Encoder.encode("\u7006")}, {name:"Error",message:"EncodingError U+7006"});
r = r && ([...ms932Encoder.encode("瀇")].join(",") === "251,79"); // U+7007
assert.throws(() => {ms932Encoder.encode("\u7008")}, {name:"Error",message:"EncodingError U+7008"});
r = r && ([...ms932Encoder.encode("瀉")].join(",") === "224,98"); // U+7009
assert.throws(() => {ms932Encoder.encode("\u700A")}, {name:"Error",message:"EncodingError U+700A"});
r = r && ([...ms932Encoder.encode("瀋")].join(",") === "224,99"); // U+700B
assert.throws(() => {ms932Encoder.encode("\u700C")}, {name:"Error",message:"EncodingError U+700C"});
assert.throws(() => {ms932Encoder.encode("\u700D")}, {name:"Error",message:"EncodingError U+700D"});
assert.throws(() => {ms932Encoder.encode("\u700E")}, {name:"Error",message:"EncodingError U+700E"});
r = r && ([...ms932Encoder.encode("瀏")].join(",") === "224,103"); // U+700F
assert.throws(() => {ms932Encoder.encode("\u7010")}, {name:"Error",message:"EncodingError U+7010"});
r = r && ([...ms932Encoder.encode("瀑")].join(",") === "224,101"); // U+7011
assert.throws(() => {ms932Encoder.encode("\u7012")}, {name:"Error",message:"EncodingError U+7012"});
assert.throws(() => {ms932Encoder.encode("\u7013")}, {name:"Error",message:"EncodingError U+7013"});
assert.throws(() => {ms932Encoder.encode("\u7014")}, {name:"Error",message:"EncodingError U+7014"});
r = r && ([...ms932Encoder.encode("瀕")].join(",") === "149,109"); // U+7015
assert.throws(() => {ms932Encoder.encode("\u7016")}, {name:"Error",message:"EncodingError U+7016"});
assert.throws(() => {ms932Encoder.encode("\u7017")}, {name:"Error",message:"EncodingError U+7017"});
r = r && ([...ms932Encoder.encode("瀘")].join(",") === "224,109"); // U+7018
assert.throws(() => {ms932Encoder.encode("\u7019")}, {name:"Error",message:"EncodingError U+7019"});
r = r && ([...ms932Encoder.encode("瀚瀛")].join(",") === "224,106,224,105"); // U+701A
assert.throws(() => {ms932Encoder.encode("\u701C")}, {name:"Error",message:"EncodingError U+701C"});
r = r && ([...ms932Encoder.encode("瀝瀞瀟")].join(",") === "224,108,147,210,224,110"); // U+701D
assert.throws(() => {ms932Encoder.encode("\u7020")}, {name:"Error",message:"EncodingError U+7020"});
assert.throws(() => {ms932Encoder.encode("\u7021")}, {name:"Error",message:"EncodingError U+7021"});
assert.throws(() => {ms932Encoder.encode("\u7022")}, {name:"Error",message:"EncodingError U+7022"});
assert.throws(() => {ms932Encoder.encode("\u7023")}, {name:"Error",message:"EncodingError U+7023"});
assert.throws(() => {ms932Encoder.encode("\u7024")}, {name:"Error",message:"EncodingError U+7024"});
assert.throws(() => {ms932Encoder.encode("\u7025")}, {name:"Error",message:"EncodingError U+7025"});
r = r && ([...ms932Encoder.encode("瀦瀧瀨")].join(",") === "146,149,145,235,251,80"); // U+7026
assert.throws(() => {ms932Encoder.encode("\u7029")}, {name:"Error",message:"EncodingError U+7029"});
assert.throws(() => {ms932Encoder.encode("\u702A")}, {name:"Error",message:"EncodingError U+702A"});
assert.throws(() => {ms932Encoder.encode("\u702B")}, {name:"Error",message:"EncodingError U+702B"});
r = r && ([...ms932Encoder.encode("瀬")].join(",") === "144,163"); // U+702C
assert.throws(() => {ms932Encoder.encode("\u702D")}, {name:"Error",message:"EncodingError U+702D"});
assert.throws(() => {ms932Encoder.encode("\u702E")}, {name:"Error",message:"EncodingError U+702E"});
assert.throws(() => {ms932Encoder.encode("\u702F")}, {name:"Error",message:"EncodingError U+702F"});
r = r && ([...ms932Encoder.encode("瀰")].join(",") === "224,111"); // U+7030
assert.throws(() => {ms932Encoder.encode("\u7031")}, {name:"Error",message:"EncodingError U+7031"});
r = r && ([...ms932Encoder.encode("瀲")].join(",") === "224,113"); // U+7032
assert.throws(() => {ms932Encoder.encode("\u7033")}, {name:"Error",message:"EncodingError U+7033"});
assert.throws(() => {ms932Encoder.encode("\u7034")}, {name:"Error",message:"EncodingError U+7034"});
assert.throws(() => {ms932Encoder.encode("\u7035")}, {name:"Error",message:"EncodingError U+7035"});
assert.throws(() => {ms932Encoder.encode("\u7036")}, {name:"Error",message:"EncodingError U+7036"});
assert.throws(() => {ms932Encoder.encode("\u7037")}, {name:"Error",message:"EncodingError U+7037"});
assert.throws(() => {ms932Encoder.encode("\u7038")}, {name:"Error",message:"EncodingError U+7038"});
assert.throws(() => {ms932Encoder.encode("\u7039")}, {name:"Error",message:"EncodingError U+7039"});
assert.throws(() => {ms932Encoder.encode("\u703A")}, {name:"Error",message:"EncodingError U+703A"});
assert.throws(() => {ms932Encoder.encode("\u703B")}, {name:"Error",message:"EncodingError U+703B"});
assert.throws(() => {ms932Encoder.encode("\u703C")}, {name:"Error",message:"EncodingError U+703C"});
assert.throws(() => {ms932Encoder.encode("\u703D")}, {name:"Error",message:"EncodingError U+703D"});
r = r && ([...ms932Encoder.encode("瀾")].join(",") === "224,112"); // U+703E
assert.throws(() => {ms932Encoder.encode("\u703F")}, {name:"Error",message:"EncodingError U+703F"});
assert.throws(() => {ms932Encoder.encode("\u7040")}, {name:"Error",message:"EncodingError U+7040"});
assert.throws(() => {ms932Encoder.encode("\u7041")}, {name:"Error",message:"EncodingError U+7041"});
assert.throws(() => {ms932Encoder.encode("\u7042")}, {name:"Error",message:"EncodingError U+7042"});
assert.throws(() => {ms932Encoder.encode("\u7043")}, {name:"Error",message:"EncodingError U+7043"});
assert.throws(() => {ms932Encoder.encode("\u7044")}, {name:"Error",message:"EncodingError U+7044"});
assert.throws(() => {ms932Encoder.encode("\u7045")}, {name:"Error",message:"EncodingError U+7045"});
assert.throws(() => {ms932Encoder.encode("\u7046")}, {name:"Error",message:"EncodingError U+7046"});
assert.throws(() => {ms932Encoder.encode("\u7047")}, {name:"Error",message:"EncodingError U+7047"});
assert.throws(() => {ms932Encoder.encode("\u7048")}, {name:"Error",message:"EncodingError U+7048"});
assert.throws(() => {ms932Encoder.encode("\u7049")}, {name:"Error",message:"EncodingError U+7049"});
assert.throws(() => {ms932Encoder.encode("\u704A")}, {name:"Error",message:"EncodingError U+704A"});
assert.throws(() => {ms932Encoder.encode("\u704B")}, {name:"Error",message:"EncodingError U+704B"});
r = r && ([...ms932Encoder.encode("灌")].join(",") === "159,243"); // U+704C
assert.throws(() => {ms932Encoder.encode("\u704D")}, {name:"Error",message:"EncodingError U+704D"});
assert.throws(() => {ms932Encoder.encode("\u704E")}, {name:"Error",message:"EncodingError U+704E"});
assert.throws(() => {ms932Encoder.encode("\u704F")}, {name:"Error",message:"EncodingError U+704F"});
assert.throws(() => {ms932Encoder.encode("\u7050")}, {name:"Error",message:"EncodingError U+7050"});
r = r && ([...ms932Encoder.encode("灑")].join(",") === "224,114"); // U+7051
assert.throws(() => {ms932Encoder.encode("\u7052")}, {name:"Error",message:"EncodingError U+7052"});
assert.throws(() => {ms932Encoder.encode("\u7053")}, {name:"Error",message:"EncodingError U+7053"});
assert.throws(() => {ms932Encoder.encode("\u7054")}, {name:"Error",message:"EncodingError U+7054"});
assert.throws(() => {ms932Encoder.encode("\u7055")}, {name:"Error",message:"EncodingError U+7055"});
assert.throws(() => {ms932Encoder.encode("\u7056")}, {name:"Error",message:"EncodingError U+7056"});
assert.throws(() => {ms932Encoder.encode("\u7057")}, {name:"Error",message:"EncodingError U+7057"});
r = r && ([...ms932Encoder.encode("灘")].join(",") === "147,229"); // U+7058
assert.throws(() => {ms932Encoder.encode("\u7059")}, {name:"Error",message:"EncodingError U+7059"});
assert.throws(() => {ms932Encoder.encode("\u705A")}, {name:"Error",message:"EncodingError U+705A"});
assert.throws(() => {ms932Encoder.encode("\u705B")}, {name:"Error",message:"EncodingError U+705B"});
assert.throws(() => {ms932Encoder.encode("\u705C")}, {name:"Error",message:"EncodingError U+705C"});
assert.throws(() => {ms932Encoder.encode("\u705D")}, {name:"Error",message:"EncodingError U+705D"});
assert.throws(() => {ms932Encoder.encode("\u705E")}, {name:"Error",message:"EncodingError U+705E"});
assert.throws(() => {ms932Encoder.encode("\u705F")}, {name:"Error",message:"EncodingError U+705F"});
assert.throws(() => {ms932Encoder.encode("\u7060")}, {name:"Error",message:"EncodingError U+7060"});
assert.throws(() => {ms932Encoder.encode("\u7061")}, {name:"Error",message:"EncodingError U+7061"});
assert.throws(() => {ms932Encoder.encode("\u7062")}, {name:"Error",message:"EncodingError U+7062"});
r = r && ([...ms932Encoder.encode("灣")].join(",") === "224,115"); // U+7063
assert.throws(() => {ms932Encoder.encode("\u7064")}, {name:"Error",message:"EncodingError U+7064"});
assert.throws(() => {ms932Encoder.encode("\u7065")}, {name:"Error",message:"EncodingError U+7065"});
assert.throws(() => {ms932Encoder.encode("\u7066")}, {name:"Error",message:"EncodingError U+7066"});
assert.throws(() => {ms932Encoder.encode("\u7067")}, {name:"Error",message:"EncodingError U+7067"});
assert.throws(() => {ms932Encoder.encode("\u7068")}, {name:"Error",message:"EncodingError U+7068"});
assert.throws(() => {ms932Encoder.encode("\u7069")}, {name:"Error",message:"EncodingError U+7069"});
assert.throws(() => {ms932Encoder.encode("\u706A")}, {name:"Error",message:"EncodingError U+706A"});
r = r && ([...ms932Encoder.encode("火")].join(",") === "137,206"); // U+706B
assert.throws(() => {ms932Encoder.encode("\u706C")}, {name:"Error",message:"EncodingError U+706C"});
assert.throws(() => {ms932Encoder.encode("\u706D")}, {name:"Error",message:"EncodingError U+706D"});
assert.throws(() => {ms932Encoder.encode("\u706E")}, {name:"Error",message:"EncodingError U+706E"});
r = r && ([...ms932Encoder.encode("灯灰")].join(",") === "147,148,138,68"); // U+706F
assert.throws(() => {ms932Encoder.encode("\u7071")}, {name:"Error",message:"EncodingError U+7071"});
assert.throws(() => {ms932Encoder.encode("\u7072")}, {name:"Error",message:"EncodingError U+7072"});
assert.throws(() => {ms932Encoder.encode("\u7073")}, {name:"Error",message:"EncodingError U+7073"});
assert.throws(() => {ms932Encoder.encode("\u7074")}, {name:"Error",message:"EncodingError U+7074"});
assert.throws(() => {ms932Encoder.encode("\u7075")}, {name:"Error",message:"EncodingError U+7075"});
assert.throws(() => {ms932Encoder.encode("\u7076")}, {name:"Error",message:"EncodingError U+7076"});
assert.throws(() => {ms932Encoder.encode("\u7077")}, {name:"Error",message:"EncodingError U+7077"});
r = r && ([...ms932Encoder.encode("灸")].join(",") === "139,132"); // U+7078
assert.throws(() => {ms932Encoder.encode("\u7079")}, {name:"Error",message:"EncodingError U+7079"});
assert.throws(() => {ms932Encoder.encode("\u707A")}, {name:"Error",message:"EncodingError U+707A"});
assert.throws(() => {ms932Encoder.encode("\u707B")}, {name:"Error",message:"EncodingError U+707B"});
r = r && ([...ms932Encoder.encode("灼災")].join(",") === "142,220,141,208"); // U+707C
assert.throws(() => {ms932Encoder.encode("\u707E")}, {name:"Error",message:"EncodingError U+707E"});
assert.throws(() => {ms932Encoder.encode("\u707F")}, {name:"Error",message:"EncodingError U+707F"});
assert.throws(() => {ms932Encoder.encode("\u7080")}, {name:"Error",message:"EncodingError U+7080"});
assert.throws(() => {ms932Encoder.encode("\u7081")}, {name:"Error",message:"EncodingError U+7081"});
assert.throws(() => {ms932Encoder.encode("\u7082")}, {name:"Error",message:"EncodingError U+7082"});
assert.throws(() => {ms932Encoder.encode("\u7083")}, {name:"Error",message:"EncodingError U+7083"});
assert.throws(() => {ms932Encoder.encode("\u7084")}, {name:"Error",message:"EncodingError U+7084"});
r = r && ([...ms932Encoder.encode("炅")].join(",") === "251,81"); // U+7085
assert.throws(() => {ms932Encoder.encode("\u7086")}, {name:"Error",message:"EncodingError U+7086"});
assert.throws(() => {ms932Encoder.encode("\u7087")}, {name:"Error",message:"EncodingError U+7087"});
assert.throws(() => {ms932Encoder.encode("\u7088")}, {name:"Error",message:"EncodingError U+7088"});
r = r && ([...ms932Encoder.encode("炉炊")].join(",") === "152,70,144,134"); // U+7089
assert.throws(() => {ms932Encoder.encode("\u708B")}, {name:"Error",message:"EncodingError U+708B"});
assert.throws(() => {ms932Encoder.encode("\u708C")}, {name:"Error",message:"EncodingError U+708C"});
assert.throws(() => {ms932Encoder.encode("\u708D")}, {name:"Error",message:"EncodingError U+708D"});
r = r && ([...ms932Encoder.encode("炎")].join(",") === "137,138"); // U+708E
assert.throws(() => {ms932Encoder.encode("\u708F")}, {name:"Error",message:"EncodingError U+708F"});
assert.throws(() => {ms932Encoder.encode("\u7090")}, {name:"Error",message:"EncodingError U+7090"});
assert.throws(() => {ms932Encoder.encode("\u7091")}, {name:"Error",message:"EncodingError U+7091"});
r = r && ([...ms932Encoder.encode("炒")].join(",") === "224,117"); // U+7092
assert.throws(() => {ms932Encoder.encode("\u7093")}, {name:"Error",message:"EncodingError U+7093"});
assert.throws(() => {ms932Encoder.encode("\u7094")}, {name:"Error",message:"EncodingError U+7094"});
assert.throws(() => {ms932Encoder.encode("\u7095")}, {name:"Error",message:"EncodingError U+7095"});
assert.throws(() => {ms932Encoder.encode("\u7096")}, {name:"Error",message:"EncodingError U+7096"});
assert.throws(() => {ms932Encoder.encode("\u7097")}, {name:"Error",message:"EncodingError U+7097"});
assert.throws(() => {ms932Encoder.encode("\u7098")}, {name:"Error",message:"EncodingError U+7098"});
r = r && ([...ms932Encoder.encode("炙")].join(",") === "224,116"); // U+7099
assert.throws(() => {ms932Encoder.encode("\u709A")}, {name:"Error",message:"EncodingError U+709A"});
assert.throws(() => {ms932Encoder.encode("\u709B")}, {name:"Error",message:"EncodingError U+709B"});
assert.throws(() => {ms932Encoder.encode("\u709C")}, {name:"Error",message:"EncodingError U+709C"});
assert.throws(() => {ms932Encoder.encode("\u709D")}, {name:"Error",message:"EncodingError U+709D"});
assert.throws(() => {ms932Encoder.encode("\u709E")}, {name:"Error",message:"EncodingError U+709E"});
assert.throws(() => {ms932Encoder.encode("\u709F")}, {name:"Error",message:"EncodingError U+709F"});
assert.throws(() => {ms932Encoder.encode("\u70A0")}, {name:"Error",message:"EncodingError U+70A0"});
assert.throws(() => {ms932Encoder.encode("\u70A1")}, {name:"Error",message:"EncodingError U+70A1"});
assert.throws(() => {ms932Encoder.encode("\u70A2")}, {name:"Error",message:"EncodingError U+70A2"});
assert.throws(() => {ms932Encoder.encode("\u70A3")}, {name:"Error",message:"EncodingError U+70A3"});
assert.throws(() => {ms932Encoder.encode("\u70A4")}, {name:"Error",message:"EncodingError U+70A4"});
assert.throws(() => {ms932Encoder.encode("\u70A5")}, {name:"Error",message:"EncodingError U+70A5"});
assert.throws(() => {ms932Encoder.encode("\u70A6")}, {name:"Error",message:"EncodingError U+70A6"});
assert.throws(() => {ms932Encoder.encode("\u70A7")}, {name:"Error",message:"EncodingError U+70A7"});
assert.throws(() => {ms932Encoder.encode("\u70A8")}, {name:"Error",message:"EncodingError U+70A8"});
assert.throws(() => {ms932Encoder.encode("\u70A9")}, {name:"Error",message:"EncodingError U+70A9"});
assert.throws(() => {ms932Encoder.encode("\u70AA")}, {name:"Error",message:"EncodingError U+70AA"});
r = r && ([...ms932Encoder.encode("炫炬炭炮炯")].join(",") === "251,82,224,120,146,89,224,123,224,118"); // U+70AB
assert.throws(() => {ms932Encoder.encode("\u70B0")}, {name:"Error",message:"EncodingError U+70B0"});
assert.throws(() => {ms932Encoder.encode("\u70B1")}, {name:"Error",message:"EncodingError U+70B1"});
assert.throws(() => {ms932Encoder.encode("\u70B2")}, {name:"Error",message:"EncodingError U+70B2"});
r = r && ([...ms932Encoder.encode("炳")].join(",") === "224,122"); // U+70B3
assert.throws(() => {ms932Encoder.encode("\u70B4")}, {name:"Error",message:"EncodingError U+70B4"});
assert.throws(() => {ms932Encoder.encode("\u70B5")}, {name:"Error",message:"EncodingError U+70B5"});
assert.throws(() => {ms932Encoder.encode("\u70B6")}, {name:"Error",message:"EncodingError U+70B6"});
assert.throws(() => {ms932Encoder.encode("\u70B7")}, {name:"Error",message:"EncodingError U+70B7"});
r = r && ([...ms932Encoder.encode("炸点為炻")].join(",") === "224,121,147,95,136,215,250,98"); // U+70B8
assert.throws(() => {ms932Encoder.encode("\u70BC")}, {name:"Error",message:"EncodingError U+70BC"});
assert.throws(() => {ms932Encoder.encode("\u70BD")}, {name:"Error",message:"EncodingError U+70BD"});
assert.throws(() => {ms932Encoder.encode("\u70BE")}, {name:"Error",message:"EncodingError U+70BE"});
assert.throws(() => {ms932Encoder.encode("\u70BF")}, {name:"Error",message:"EncodingError U+70BF"});
assert.throws(() => {ms932Encoder.encode("\u70C0")}, {name:"Error",message:"EncodingError U+70C0"});
assert.throws(() => {ms932Encoder.encode("\u70C1")}, {name:"Error",message:"EncodingError U+70C1"});
assert.throws(() => {ms932Encoder.encode("\u70C2")}, {name:"Error",message:"EncodingError U+70C2"});
assert.throws(() => {ms932Encoder.encode("\u70C3")}, {name:"Error",message:"EncodingError U+70C3"});
assert.throws(() => {ms932Encoder.encode("\u70C4")}, {name:"Error",message:"EncodingError U+70C4"});
assert.throws(() => {ms932Encoder.encode("\u70C5")}, {name:"Error",message:"EncodingError U+70C5"});
assert.throws(() => {ms932Encoder.encode("\u70C6")}, {name:"Error",message:"EncodingError U+70C6"});
assert.throws(() => {ms932Encoder.encode("\u70C7")}, {name:"Error",message:"EncodingError U+70C7"});
r = r && ([...ms932Encoder.encode("烈")].join(",") === "151,243"); // U+70C8
assert.throws(() => {ms932Encoder.encode("\u70C9")}, {name:"Error",message:"EncodingError U+70C9"});
assert.throws(() => {ms932Encoder.encode("\u70CA")}, {name:"Error",message:"EncodingError U+70CA"});
r = r && ([...ms932Encoder.encode("烋")].join(",") === "224,125"); // U+70CB
assert.throws(() => {ms932Encoder.encode("\u70CC")}, {name:"Error",message:"EncodingError U+70CC"});
assert.throws(() => {ms932Encoder.encode("\u70CD")}, {name:"Error",message:"EncodingError U+70CD"});
assert.throws(() => {ms932Encoder.encode("\u70CE")}, {name:"Error",message:"EncodingError U+70CE"});
r = r && ([...ms932Encoder.encode("烏")].join(",") === "137,71"); // U+70CF
assert.throws(() => {ms932Encoder.encode("\u70D0")}, {name:"Error",message:"EncodingError U+70D0"});
assert.throws(() => {ms932Encoder.encode("\u70D1")}, {name:"Error",message:"EncodingError U+70D1"});
assert.throws(() => {ms932Encoder.encode("\u70D2")}, {name:"Error",message:"EncodingError U+70D2"});
assert.throws(() => {ms932Encoder.encode("\u70D3")}, {name:"Error",message:"EncodingError U+70D3"});
assert.throws(() => {ms932Encoder.encode("\u70D4")}, {name:"Error",message:"EncodingError U+70D4"});
assert.throws(() => {ms932Encoder.encode("\u70D5")}, {name:"Error",message:"EncodingError U+70D5"});
assert.throws(() => {ms932Encoder.encode("\u70D6")}, {name:"Error",message:"EncodingError U+70D6"});
assert.throws(() => {ms932Encoder.encode("\u70D7")}, {name:"Error",message:"EncodingError U+70D7"});
assert.throws(() => {ms932Encoder.encode("\u70D8")}, {name:"Error",message:"EncodingError U+70D8"});
r = r && ([...ms932Encoder.encode("烙")].join(",") === "224,128"); // U+70D9
assert.throws(() => {ms932Encoder.encode("\u70DA")}, {name:"Error",message:"EncodingError U+70DA"});
assert.throws(() => {ms932Encoder.encode("\u70DB")}, {name:"Error",message:"EncodingError U+70DB"});
assert.throws(() => {ms932Encoder.encode("\u70DC")}, {name:"Error",message:"EncodingError U+70DC"});
r = r && ([...ms932Encoder.encode("烝")].join(",") === "224,126"); // U+70DD
assert.throws(() => {ms932Encoder.encode("\u70DE")}, {name:"Error",message:"EncodingError U+70DE"});
r = r && ([...ms932Encoder.encode("烟")].join(",") === "224,124"); // U+70DF
assert.throws(() => {ms932Encoder.encode("\u70E0")}, {name:"Error",message:"EncodingError U+70E0"});
assert.throws(() => {ms932Encoder.encode("\u70E1")}, {name:"Error",message:"EncodingError U+70E1"});
assert.throws(() => {ms932Encoder.encode("\u70E2")}, {name:"Error",message:"EncodingError U+70E2"});
assert.throws(() => {ms932Encoder.encode("\u70E3")}, {name:"Error",message:"EncodingError U+70E3"});
assert.throws(() => {ms932Encoder.encode("\u70E4")}, {name:"Error",message:"EncodingError U+70E4"});
assert.throws(() => {ms932Encoder.encode("\u70E5")}, {name:"Error",message:"EncodingError U+70E5"});
assert.throws(() => {ms932Encoder.encode("\u70E6")}, {name:"Error",message:"EncodingError U+70E6"});
assert.throws(() => {ms932Encoder.encode("\u70E7")}, {name:"Error",message:"EncodingError U+70E7"});
assert.throws(() => {ms932Encoder.encode("\u70E8")}, {name:"Error",message:"EncodingError U+70E8"});
assert.throws(() => {ms932Encoder.encode("\u70E9")}, {name:"Error",message:"EncodingError U+70E9"});
assert.throws(() => {ms932Encoder.encode("\u70EA")}, {name:"Error",message:"EncodingError U+70EA"});
assert.throws(() => {ms932Encoder.encode("\u70EB")}, {name:"Error",message:"EncodingError U+70EB"});
assert.throws(() => {ms932Encoder.encode("\u70EC")}, {name:"Error",message:"EncodingError U+70EC"});
assert.throws(() => {ms932Encoder.encode("\u70ED")}, {name:"Error",message:"EncodingError U+70ED"});
assert.throws(() => {ms932Encoder.encode("\u70EE")}, {name:"Error",message:"EncodingError U+70EE"});
assert.throws(() => {ms932Encoder.encode("\u70EF")}, {name:"Error",message:"EncodingError U+70EF"});
assert.throws(() => {ms932Encoder.encode("\u70F0")}, {name:"Error",message:"EncodingError U+70F0"});
r = r && ([...ms932Encoder.encode("烱")].join(",") === "224,119"); // U+70F1
assert.throws(() => {ms932Encoder.encode("\u70F2")}, {name:"Error",message:"EncodingError U+70F2"});
assert.throws(() => {ms932Encoder.encode("\u70F3")}, {name:"Error",message:"EncodingError U+70F3"});
assert.throws(() => {ms932Encoder.encode("\u70F4")}, {name:"Error",message:"EncodingError U+70F4"});
assert.throws(() => {ms932Encoder.encode("\u70F5")}, {name:"Error",message:"EncodingError U+70F5"});
assert.throws(() => {ms932Encoder.encode("\u70F6")}, {name:"Error",message:"EncodingError U+70F6"});
assert.throws(() => {ms932Encoder.encode("\u70F7")}, {name:"Error",message:"EncodingError U+70F7"});
assert.throws(() => {ms932Encoder.encode("\u70F8")}, {name:"Error",message:"EncodingError U+70F8"});
r = r && ([...ms932Encoder.encode("烹")].join(",") === "150,66"); // U+70F9
assert.throws(() => {ms932Encoder.encode("\u70FA")}, {name:"Error",message:"EncodingError U+70FA"});
assert.throws(() => {ms932Encoder.encode("\u70FB")}, {name:"Error",message:"EncodingError U+70FB"});
assert.throws(() => {ms932Encoder.encode("\u70FC")}, {name:"Error",message:"EncodingError U+70FC"});
r = r && ([...ms932Encoder.encode("烽")].join(",") === "224,130"); // U+70FD
assert.throws(() => {ms932Encoder.encode("\u70FE")}, {name:"Error",message:"EncodingError U+70FE"});
assert.throws(() => {ms932Encoder.encode("\u70FF")}, {name:"Error",message:"EncodingError U+70FF"});
assert.throws(() => {ms932Encoder.encode("\u7100")}, {name:"Error",message:"EncodingError U+7100"});
assert.throws(() => {ms932Encoder.encode("\u7101")}, {name:"Error",message:"EncodingError U+7101"});
assert.throws(() => {ms932Encoder.encode("\u7102")}, {name:"Error",message:"EncodingError U+7102"});
assert.throws(() => {ms932Encoder.encode("\u7103")}, {name:"Error",message:"EncodingError U+7103"});
r = r && ([...ms932Encoder.encode("焄")].join(",") === "251,84"); // U+7104
assert.throws(() => {ms932Encoder.encode("\u7105")}, {name:"Error",message:"EncodingError U+7105"});
assert.throws(() => {ms932Encoder.encode("\u7106")}, {name:"Error",message:"EncodingError U+7106"});
assert.throws(() => {ms932Encoder.encode("\u7107")}, {name:"Error",message:"EncodingError U+7107"});
assert.throws(() => {ms932Encoder.encode("\u7108")}, {name:"Error",message:"EncodingError U+7108"});
r = r && ([...ms932Encoder.encode("焉")].join(",") === "224,129"); // U+7109
assert.throws(() => {ms932Encoder.encode("\u710A")}, {name:"Error",message:"EncodingError U+710A"});
assert.throws(() => {ms932Encoder.encode("\u710B")}, {name:"Error",message:"EncodingError U+710B"});
assert.throws(() => {ms932Encoder.encode("\u710C")}, {name:"Error",message:"EncodingError U+710C"});
assert.throws(() => {ms932Encoder.encode("\u710D")}, {name:"Error",message:"EncodingError U+710D"});
assert.throws(() => {ms932Encoder.encode("\u710E")}, {name:"Error",message:"EncodingError U+710E"});
r = r && ([...ms932Encoder.encode("焏")].join(",") === "251,83"); // U+710F
assert.throws(() => {ms932Encoder.encode("\u7110")}, {name:"Error",message:"EncodingError U+7110"});
assert.throws(() => {ms932Encoder.encode("\u7111")}, {name:"Error",message:"EncodingError U+7111"});
assert.throws(() => {ms932Encoder.encode("\u7112")}, {name:"Error",message:"EncodingError U+7112"});
assert.throws(() => {ms932Encoder.encode("\u7113")}, {name:"Error",message:"EncodingError U+7113"});
r = r && ([...ms932Encoder.encode("焔")].join(",") === "137,139"); // U+7114
assert.throws(() => {ms932Encoder.encode("\u7115")}, {name:"Error",message:"EncodingError U+7115"});
assert.throws(() => {ms932Encoder.encode("\u7116")}, {name:"Error",message:"EncodingError U+7116"});
assert.throws(() => {ms932Encoder.encode("\u7117")}, {name:"Error",message:"EncodingError U+7117"});
assert.throws(() => {ms932Encoder.encode("\u7118")}, {name:"Error",message:"EncodingError U+7118"});
r = r && ([...ms932Encoder.encode("焙焚")].join(",") === "224,132,149,176"); // U+7119
assert.throws(() => {ms932Encoder.encode("\u711B")}, {name:"Error",message:"EncodingError U+711B"});
r = r && ([...ms932Encoder.encode("焜")].join(",") === "224,131"); // U+711C
assert.throws(() => {ms932Encoder.encode("\u711D")}, {name:"Error",message:"EncodingError U+711D"});
assert.throws(() => {ms932Encoder.encode("\u711E")}, {name:"Error",message:"EncodingError U+711E"});
assert.throws(() => {ms932Encoder.encode("\u711F")}, {name:"Error",message:"EncodingError U+711F"});
assert.throws(() => {ms932Encoder.encode("\u7120")}, {name:"Error",message:"EncodingError U+7120"});
r = r && ([...ms932Encoder.encode("無")].join(",") === "150,179"); // U+7121
assert.throws(() => {ms932Encoder.encode("\u7122")}, {name:"Error",message:"EncodingError U+7122"});
assert.throws(() => {ms932Encoder.encode("\u7123")}, {name:"Error",message:"EncodingError U+7123"});
assert.throws(() => {ms932Encoder.encode("\u7124")}, {name:"Error",message:"EncodingError U+7124"});
assert.throws(() => {ms932Encoder.encode("\u7125")}, {name:"Error",message:"EncodingError U+7125"});
r = r && ([...ms932Encoder.encode("焦")].join(",") === "143,197"); // U+7126
assert.throws(() => {ms932Encoder.encode("\u7127")}, {name:"Error",message:"EncodingError U+7127"});
assert.throws(() => {ms932Encoder.encode("\u7128")}, {name:"Error",message:"EncodingError U+7128"});
assert.throws(() => {ms932Encoder.encode("\u7129")}, {name:"Error",message:"EncodingError U+7129"});
assert.throws(() => {ms932Encoder.encode("\u712A")}, {name:"Error",message:"EncodingError U+712A"});
assert.throws(() => {ms932Encoder.encode("\u712B")}, {name:"Error",message:"EncodingError U+712B"});
assert.throws(() => {ms932Encoder.encode("\u712C")}, {name:"Error",message:"EncodingError U+712C"});
assert.throws(() => {ms932Encoder.encode("\u712D")}, {name:"Error",message:"EncodingError U+712D"});
assert.throws(() => {ms932Encoder.encode("\u712E")}, {name:"Error",message:"EncodingError U+712E"});
assert.throws(() => {ms932Encoder.encode("\u712F")}, {name:"Error",message:"EncodingError U+712F"});
assert.throws(() => {ms932Encoder.encode("\u7130")}, {name:"Error",message:"EncodingError U+7130"});
assert.throws(() => {ms932Encoder.encode("\u7131")}, {name:"Error",message:"EncodingError U+7131"});
assert.throws(() => {ms932Encoder.encode("\u7132")}, {name:"Error",message:"EncodingError U+7132"});
assert.throws(() => {ms932Encoder.encode("\u7133")}, {name:"Error",message:"EncodingError U+7133"});
assert.throws(() => {ms932Encoder.encode("\u7134")}, {name:"Error",message:"EncodingError U+7134"});
assert.throws(() => {ms932Encoder.encode("\u7135")}, {name:"Error",message:"EncodingError U+7135"});
r = r && ([...ms932Encoder.encode("然")].join(",") === "145,82"); // U+7136
assert.throws(() => {ms932Encoder.encode("\u7137")}, {name:"Error",message:"EncodingError U+7137"});
assert.throws(() => {ms932Encoder.encode("\u7138")}, {name:"Error",message:"EncodingError U+7138"});
assert.throws(() => {ms932Encoder.encode("\u7139")}, {name:"Error",message:"EncodingError U+7139"});
assert.throws(() => {ms932Encoder.encode("\u713A")}, {name:"Error",message:"EncodingError U+713A"});
assert.throws(() => {ms932Encoder.encode("\u713B")}, {name:"Error",message:"EncodingError U+713B"});
r = r && ([...ms932Encoder.encode("焼")].join(",") === "143,196"); // U+713C
assert.throws(() => {ms932Encoder.encode("\u713D")}, {name:"Error",message:"EncodingError U+713D"});
assert.throws(() => {ms932Encoder.encode("\u713E")}, {name:"Error",message:"EncodingError U+713E"});
assert.throws(() => {ms932Encoder.encode("\u713F")}, {name:"Error",message:"EncodingError U+713F"});
assert.throws(() => {ms932Encoder.encode("\u7140")}, {name:"Error",message:"EncodingError U+7140"});
assert.throws(() => {ms932Encoder.encode("\u7141")}, {name:"Error",message:"EncodingError U+7141"});
assert.throws(() => {ms932Encoder.encode("\u7142")}, {name:"Error",message:"EncodingError U+7142"});
assert.throws(() => {ms932Encoder.encode("\u7143")}, {name:"Error",message:"EncodingError U+7143"});
assert.throws(() => {ms932Encoder.encode("\u7144")}, {name:"Error",message:"EncodingError U+7144"});
assert.throws(() => {ms932Encoder.encode("\u7145")}, {name:"Error",message:"EncodingError U+7145"});
r = r && ([...ms932Encoder.encode("煆煇")].join(",") === "251,86,251,87"); // U+7146
assert.throws(() => {ms932Encoder.encode("\u7148")}, {name:"Error",message:"EncodingError U+7148"});
r = r && ([...ms932Encoder.encode("煉")].join(",") === "151,249"); // U+7149
assert.throws(() => {ms932Encoder.encode("\u714A")}, {name:"Error",message:"EncodingError U+714A"});
assert.throws(() => {ms932Encoder.encode("\u714B")}, {name:"Error",message:"EncodingError U+714B"});
r = r && ([...ms932Encoder.encode("煌")].join(",") === "224,138"); // U+714C
assert.throws(() => {ms932Encoder.encode("\u714D")}, {name:"Error",message:"EncodingError U+714D"});
r = r && ([...ms932Encoder.encode("煎")].join(",") === "144,247"); // U+714E
assert.throws(() => {ms932Encoder.encode("\u714F")}, {name:"Error",message:"EncodingError U+714F"});
assert.throws(() => {ms932Encoder.encode("\u7150")}, {name:"Error",message:"EncodingError U+7150"});
assert.throws(() => {ms932Encoder.encode("\u7151")}, {name:"Error",message:"EncodingError U+7151"});
assert.throws(() => {ms932Encoder.encode("\u7152")}, {name:"Error",message:"EncodingError U+7152"});
assert.throws(() => {ms932Encoder.encode("\u7153")}, {name:"Error",message:"EncodingError U+7153"});
assert.throws(() => {ms932Encoder.encode("\u7154")}, {name:"Error",message:"EncodingError U+7154"});
r = r && ([...ms932Encoder.encode("煕煖")].join(",") === "224,134,224,139"); // U+7155
assert.throws(() => {ms932Encoder.encode("\u7157")}, {name:"Error",message:"EncodingError U+7157"});
assert.throws(() => {ms932Encoder.encode("\u7158")}, {name:"Error",message:"EncodingError U+7158"});
r = r && ([...ms932Encoder.encode("煙")].join(",") === "137,140"); // U+7159
assert.throws(() => {ms932Encoder.encode("\u715A")}, {name:"Error",message:"EncodingError U+715A"});
assert.throws(() => {ms932Encoder.encode("\u715B")}, {name:"Error",message:"EncodingError U+715B"});
r = r && ([...ms932Encoder.encode("煜")].join(",") === "251,85"); // U+715C
assert.throws(() => {ms932Encoder.encode("\u715D")}, {name:"Error",message:"EncodingError U+715D"});
assert.throws(() => {ms932Encoder.encode("\u715E")}, {name:"Error",message:"EncodingError U+715E"});
assert.throws(() => {ms932Encoder.encode("\u715F")}, {name:"Error",message:"EncodingError U+715F"});
assert.throws(() => {ms932Encoder.encode("\u7160")}, {name:"Error",message:"EncodingError U+7160"});
assert.throws(() => {ms932Encoder.encode("\u7161")}, {name:"Error",message:"EncodingError U+7161"});
r = r && ([...ms932Encoder.encode("煢")].join(",") === "224,137"); // U+7162
assert.throws(() => {ms932Encoder.encode("\u7163")}, {name:"Error",message:"EncodingError U+7163"});
r = r && ([...ms932Encoder.encode("煤煥煦照")].join(",") === "148,129,224,133,224,136,143,198"); // U+7164
assert.throws(() => {ms932Encoder.encode("\u7168")}, {name:"Error",message:"EncodingError U+7168"});
r = r && ([...ms932Encoder.encode("煩")].join(",") === "148,207"); // U+7169
assert.throws(() => {ms932Encoder.encode("\u716A")}, {name:"Error",message:"EncodingError U+716A"});
assert.throws(() => {ms932Encoder.encode("\u716B")}, {name:"Error",message:"EncodingError U+716B"});
r = r && ([...ms932Encoder.encode("煬")].join(",") === "224,140"); // U+716C
assert.throws(() => {ms932Encoder.encode("\u716D")}, {name:"Error",message:"EncodingError U+716D"});
r = r && ([...ms932Encoder.encode("煮")].join(",") === "142,207"); // U+716E
assert.throws(() => {ms932Encoder.encode("\u716F")}, {name:"Error",message:"EncodingError U+716F"});
assert.throws(() => {ms932Encoder.encode("\u7170")}, {name:"Error",message:"EncodingError U+7170"});
assert.throws(() => {ms932Encoder.encode("\u7171")}, {name:"Error",message:"EncodingError U+7171"});
assert.throws(() => {ms932Encoder.encode("\u7172")}, {name:"Error",message:"EncodingError U+7172"});
assert.throws(() => {ms932Encoder.encode("\u7173")}, {name:"Error",message:"EncodingError U+7173"});
assert.throws(() => {ms932Encoder.encode("\u7174")}, {name:"Error",message:"EncodingError U+7174"});
assert.throws(() => {ms932Encoder.encode("\u7175")}, {name:"Error",message:"EncodingError U+7175"});
assert.throws(() => {ms932Encoder.encode("\u7176")}, {name:"Error",message:"EncodingError U+7176"});
assert.throws(() => {ms932Encoder.encode("\u7177")}, {name:"Error",message:"EncodingError U+7177"});
assert.throws(() => {ms932Encoder.encode("\u7178")}, {name:"Error",message:"EncodingError U+7178"});
assert.throws(() => {ms932Encoder.encode("\u7179")}, {name:"Error",message:"EncodingError U+7179"});
assert.throws(() => {ms932Encoder.encode("\u717A")}, {name:"Error",message:"EncodingError U+717A"});
assert.throws(() => {ms932Encoder.encode("\u717B")}, {name:"Error",message:"EncodingError U+717B"});
assert.throws(() => {ms932Encoder.encode("\u717C")}, {name:"Error",message:"EncodingError U+717C"});
r = r && ([...ms932Encoder.encode("煽")].join(",") === "144,248"); // U+717D
assert.throws(() => {ms932Encoder.encode("\u717E")}, {name:"Error",message:"EncodingError U+717E"});
assert.throws(() => {ms932Encoder.encode("\u717F")}, {name:"Error",message:"EncodingError U+717F"});
assert.throws(() => {ms932Encoder.encode("\u7180")}, {name:"Error",message:"EncodingError U+7180"});
assert.throws(() => {ms932Encoder.encode("\u7181")}, {name:"Error",message:"EncodingError U+7181"});
assert.throws(() => {ms932Encoder.encode("\u7182")}, {name:"Error",message:"EncodingError U+7182"});
assert.throws(() => {ms932Encoder.encode("\u7183")}, {name:"Error",message:"EncodingError U+7183"});
r = r && ([...ms932Encoder.encode("熄")].join(",") === "224,143"); // U+7184
assert.throws(() => {ms932Encoder.encode("\u7185")}, {name:"Error",message:"EncodingError U+7185"});
assert.throws(() => {ms932Encoder.encode("\u7186")}, {name:"Error",message:"EncodingError U+7186"});
assert.throws(() => {ms932Encoder.encode("\u7187")}, {name:"Error",message:"EncodingError U+7187"});
r = r && ([...ms932Encoder.encode("熈")].join(",") === "224,135"); // U+7188
assert.throws(() => {ms932Encoder.encode("\u7189")}, {name:"Error",message:"EncodingError U+7189"});
r = r && ([...ms932Encoder.encode("熊")].join(",") === "140,70"); // U+718A
assert.throws(() => {ms932Encoder.encode("\u718B")}, {name:"Error",message:"EncodingError U+718B"});
assert.throws(() => {ms932Encoder.encode("\u718C")}, {name:"Error",message:"EncodingError U+718C"});
assert.throws(() => {ms932Encoder.encode("\u718D")}, {name:"Error",message:"EncodingError U+718D"});
assert.throws(() => {ms932Encoder.encode("\u718E")}, {name:"Error",message:"EncodingError U+718E"});
r = r && ([...ms932Encoder.encode("熏")].join(",") === "224,141"); // U+718F
assert.throws(() => {ms932Encoder.encode("\u7190")}, {name:"Error",message:"EncodingError U+7190"});
assert.throws(() => {ms932Encoder.encode("\u7191")}, {name:"Error",message:"EncodingError U+7191"});
assert.throws(() => {ms932Encoder.encode("\u7192")}, {name:"Error",message:"EncodingError U+7192"});
assert.throws(() => {ms932Encoder.encode("\u7193")}, {name:"Error",message:"EncodingError U+7193"});
r = r && ([...ms932Encoder.encode("熔熕")].join(",") === "151,111,224,144"); // U+7194
assert.throws(() => {ms932Encoder.encode("\u7196")}, {name:"Error",message:"EncodingError U+7196"});
assert.throws(() => {ms932Encoder.encode("\u7197")}, {name:"Error",message:"EncodingError U+7197"});
assert.throws(() => {ms932Encoder.encode("\u7198")}, {name:"Error",message:"EncodingError U+7198"});
r = r && ([...ms932Encoder.encode("熙")].join(",") === "234,164"); // U+7199
assert.throws(() => {ms932Encoder.encode("\u719A")}, {name:"Error",message:"EncodingError U+719A"});
assert.throws(() => {ms932Encoder.encode("\u719B")}, {name:"Error",message:"EncodingError U+719B"});
assert.throws(() => {ms932Encoder.encode("\u719C")}, {name:"Error",message:"EncodingError U+719C"});
assert.throws(() => {ms932Encoder.encode("\u719D")}, {name:"Error",message:"EncodingError U+719D"});
assert.throws(() => {ms932Encoder.encode("\u719E")}, {name:"Error",message:"EncodingError U+719E"});
r = r && ([...ms932Encoder.encode("熟")].join(",") === "143,110"); // U+719F
assert.throws(() => {ms932Encoder.encode("\u71A0")}, {name:"Error",message:"EncodingError U+71A0"});
assert.throws(() => {ms932Encoder.encode("\u71A1")}, {name:"Error",message:"EncodingError U+71A1"});
assert.throws(() => {ms932Encoder.encode("\u71A2")}, {name:"Error",message:"EncodingError U+71A2"});
assert.throws(() => {ms932Encoder.encode("\u71A3")}, {name:"Error",message:"EncodingError U+71A3"});
assert.throws(() => {ms932Encoder.encode("\u71A4")}, {name:"Error",message:"EncodingError U+71A4"});
assert.throws(() => {ms932Encoder.encode("\u71A5")}, {name:"Error",message:"EncodingError U+71A5"});
assert.throws(() => {ms932Encoder.encode("\u71A6")}, {name:"Error",message:"EncodingError U+71A6"});
assert.throws(() => {ms932Encoder.encode("\u71A7")}, {name:"Error",message:"EncodingError U+71A7"});
r = r && ([...ms932Encoder.encode("熨")].join(",") === "224,145"); // U+71A8
assert.throws(() => {ms932Encoder.encode("\u71A9")}, {name:"Error",message:"EncodingError U+71A9"});
assert.throws(() => {ms932Encoder.encode("\u71AA")}, {name:"Error",message:"EncodingError U+71AA"});
assert.throws(() => {ms932Encoder.encode("\u71AB")}, {name:"Error",message:"EncodingError U+71AB"});
r = r && ([...ms932Encoder.encode("熬")].join(",") === "224,146"); // U+71AC
assert.throws(() => {ms932Encoder.encode("\u71AD")}, {name:"Error",message:"EncodingError U+71AD"});
assert.throws(() => {ms932Encoder.encode("\u71AE")}, {name:"Error",message:"EncodingError U+71AE"});
assert.throws(() => {ms932Encoder.encode("\u71AF")}, {name:"Error",message:"EncodingError U+71AF"});
assert.throws(() => {ms932Encoder.encode("\u71B0")}, {name:"Error",message:"EncodingError U+71B0"});
r = r && ([...ms932Encoder.encode("熱")].join(",") === "148,77"); // U+71B1
assert.throws(() => {ms932Encoder.encode("\u71B2")}, {name:"Error",message:"EncodingError U+71B2"});
assert.throws(() => {ms932Encoder.encode("\u71B3")}, {name:"Error",message:"EncodingError U+71B3"});
assert.throws(() => {ms932Encoder.encode("\u71B4")}, {name:"Error",message:"EncodingError U+71B4"});
assert.throws(() => {ms932Encoder.encode("\u71B5")}, {name:"Error",message:"EncodingError U+71B5"});
assert.throws(() => {ms932Encoder.encode("\u71B6")}, {name:"Error",message:"EncodingError U+71B6"});
assert.throws(() => {ms932Encoder.encode("\u71B7")}, {name:"Error",message:"EncodingError U+71B7"});
assert.throws(() => {ms932Encoder.encode("\u71B8")}, {name:"Error",message:"EncodingError U+71B8"});
r = r && ([...ms932Encoder.encode("熹")].join(",") === "224,148"); // U+71B9
assert.throws(() => {ms932Encoder.encode("\u71BA")}, {name:"Error",message:"EncodingError U+71BA"});
assert.throws(() => {ms932Encoder.encode("\u71BB")}, {name:"Error",message:"EncodingError U+71BB"});
assert.throws(() => {ms932Encoder.encode("\u71BC")}, {name:"Error",message:"EncodingError U+71BC"});
assert.throws(() => {ms932Encoder.encode("\u71BD")}, {name:"Error",message:"EncodingError U+71BD"});
r = r && ([...ms932Encoder.encode("熾")].join(",") === "224,149"); // U+71BE
assert.throws(() => {ms932Encoder.encode("\u71BF")}, {name:"Error",message:"EncodingError U+71BF"});
assert.throws(() => {ms932Encoder.encode("\u71C0")}, {name:"Error",message:"EncodingError U+71C0"});
r = r && ([...ms932Encoder.encode("燁")].join(",") === "251,89"); // U+71C1
assert.throws(() => {ms932Encoder.encode("\u71C2")}, {name:"Error",message:"EncodingError U+71C2"});
r = r && ([...ms932Encoder.encode("燃")].join(",") === "148,82"); // U+71C3
assert.throws(() => {ms932Encoder.encode("\u71C4")}, {name:"Error",message:"EncodingError U+71C4"});
assert.throws(() => {ms932Encoder.encode("\u71C5")}, {name:"Error",message:"EncodingError U+71C5"});
assert.throws(() => {ms932Encoder.encode("\u71C6")}, {name:"Error",message:"EncodingError U+71C6"});
assert.throws(() => {ms932Encoder.encode("\u71C7")}, {name:"Error",message:"EncodingError U+71C7"});
r = r && ([...ms932Encoder.encode("燈燉")].join(",") === "147,149,224,151"); // U+71C8
assert.throws(() => {ms932Encoder.encode("\u71CA")}, {name:"Error",message:"EncodingError U+71CA"});
assert.throws(() => {ms932Encoder.encode("\u71CB")}, {name:"Error",message:"EncodingError U+71CB"});
assert.throws(() => {ms932Encoder.encode("\u71CC")}, {name:"Error",message:"EncodingError U+71CC"});
assert.throws(() => {ms932Encoder.encode("\u71CD")}, {name:"Error",message:"EncodingError U+71CD"});
r = r && ([...ms932Encoder.encode("燎")].join(",") === "224,153"); // U+71CE
assert.throws(() => {ms932Encoder.encode("\u71CF")}, {name:"Error",message:"EncodingError U+71CF"});
r = r && ([...ms932Encoder.encode("燐")].join(",") === "151,211"); // U+71D0
assert.throws(() => {ms932Encoder.encode("\u71D1")}, {name:"Error",message:"EncodingError U+71D1"});
r = r && ([...ms932Encoder.encode("燒")].join(",") === "224,150"); // U+71D2
assert.throws(() => {ms932Encoder.encode("\u71D3")}, {name:"Error",message:"EncodingError U+71D3"});
r = r && ([...ms932Encoder.encode("燔燕")].join(",") === "224,152,137,141"); // U+71D4
assert.throws(() => {ms932Encoder.encode("\u71D6")}, {name:"Error",message:"EncodingError U+71D6"});
r = r && ([...ms932Encoder.encode("燗")].join(",") === "224,147"); // U+71D7
assert.throws(() => {ms932Encoder.encode("\u71D8")}, {name:"Error",message:"EncodingError U+71D8"});
assert.throws(() => {ms932Encoder.encode("\u71D9")}, {name:"Error",message:"EncodingError U+71D9"});
assert.throws(() => {ms932Encoder.encode("\u71DA")}, {name:"Error",message:"EncodingError U+71DA"});
assert.throws(() => {ms932Encoder.encode("\u71DB")}, {name:"Error",message:"EncodingError U+71DB"});
assert.throws(() => {ms932Encoder.encode("\u71DC")}, {name:"Error",message:"EncodingError U+71DC"});
assert.throws(() => {ms932Encoder.encode("\u71DD")}, {name:"Error",message:"EncodingError U+71DD"});
assert.throws(() => {ms932Encoder.encode("\u71DE")}, {name:"Error",message:"EncodingError U+71DE"});
r = r && ([...ms932Encoder.encode("營燠")].join(",") === "154,122,224,154"); // U+71DF
assert.throws(() => {ms932Encoder.encode("\u71E1")}, {name:"Error",message:"EncodingError U+71E1"});
assert.throws(() => {ms932Encoder.encode("\u71E2")}, {name:"Error",message:"EncodingError U+71E2"});
assert.throws(() => {ms932Encoder.encode("\u71E3")}, {name:"Error",message:"EncodingError U+71E3"});
assert.throws(() => {ms932Encoder.encode("\u71E4")}, {name:"Error",message:"EncodingError U+71E4"});
r = r && ([...ms932Encoder.encode("燥燦燧")].join(",") === "145,135,142,87,224,156"); // U+71E5
assert.throws(() => {ms932Encoder.encode("\u71E8")}, {name:"Error",message:"EncodingError U+71E8"});
assert.throws(() => {ms932Encoder.encode("\u71E9")}, {name:"Error",message:"EncodingError U+71E9"});
assert.throws(() => {ms932Encoder.encode("\u71EA")}, {name:"Error",message:"EncodingError U+71EA"});
assert.throws(() => {ms932Encoder.encode("\u71EB")}, {name:"Error",message:"EncodingError U+71EB"});
r = r && ([...ms932Encoder.encode("燬燭燮")].join(",") === "224,155,144,67,153,215"); // U+71EC
assert.throws(() => {ms932Encoder.encode("\u71EF")}, {name:"Error",message:"EncodingError U+71EF"});
assert.throws(() => {ms932Encoder.encode("\u71F0")}, {name:"Error",message:"EncodingError U+71F0"});
assert.throws(() => {ms932Encoder.encode("\u71F1")}, {name:"Error",message:"EncodingError U+71F1"});
assert.throws(() => {ms932Encoder.encode("\u71F2")}, {name:"Error",message:"EncodingError U+71F2"});
assert.throws(() => {ms932Encoder.encode("\u71F3")}, {name:"Error",message:"EncodingError U+71F3"});
assert.throws(() => {ms932Encoder.encode("\u71F4")}, {name:"Error",message:"EncodingError U+71F4"});
r = r && ([...ms932Encoder.encode("燵")].join(",") === "224,157"); // U+71F5
assert.throws(() => {ms932Encoder.encode("\u71F6")}, {name:"Error",message:"EncodingError U+71F6"});
assert.throws(() => {ms932Encoder.encode("\u71F7")}, {name:"Error",message:"EncodingError U+71F7"});
assert.throws(() => {ms932Encoder.encode("\u71F8")}, {name:"Error",message:"EncodingError U+71F8"});
r = r && ([...ms932Encoder.encode("燹")].join(",") === "224,159"); // U+71F9
assert.throws(() => {ms932Encoder.encode("\u71FA")}, {name:"Error",message:"EncodingError U+71FA"});
r = r && ([...ms932Encoder.encode("燻燼")].join(",") === "224,142,224,158"); // U+71FB
assert.throws(() => {ms932Encoder.encode("\u71FD")}, {name:"Error",message:"EncodingError U+71FD"});
r = r && ([...ms932Encoder.encode("燾燿")].join(",") === "251,90,224,160"); // U+71FE
assert.throws(() => {ms932Encoder.encode("\u7200")}, {name:"Error",message:"EncodingError U+7200"});
assert.throws(() => {ms932Encoder.encode("\u7201")}, {name:"Error",message:"EncodingError U+7201"});
assert.throws(() => {ms932Encoder.encode("\u7202")}, {name:"Error",message:"EncodingError U+7202"});
assert.throws(() => {ms932Encoder.encode("\u7203")}, {name:"Error",message:"EncodingError U+7203"});
assert.throws(() => {ms932Encoder.encode("\u7204")}, {name:"Error",message:"EncodingError U+7204"});
assert.throws(() => {ms932Encoder.encode("\u7205")}, {name:"Error",message:"EncodingError U+7205"});
r = r && ([...ms932Encoder.encode("爆")].join(",") === "148,154"); // U+7206
assert.throws(() => {ms932Encoder.encode("\u7207")}, {name:"Error",message:"EncodingError U+7207"});
assert.throws(() => {ms932Encoder.encode("\u7208")}, {name:"Error",message:"EncodingError U+7208"});
assert.throws(() => {ms932Encoder.encode("\u7209")}, {name:"Error",message:"EncodingError U+7209"});
assert.throws(() => {ms932Encoder.encode("\u720A")}, {name:"Error",message:"EncodingError U+720A"});
assert.throws(() => {ms932Encoder.encode("\u720B")}, {name:"Error",message:"EncodingError U+720B"});
assert.throws(() => {ms932Encoder.encode("\u720C")}, {name:"Error",message:"EncodingError U+720C"});
r = r && ([...ms932Encoder.encode("爍")].join(",") === "224,161"); // U+720D
assert.throws(() => {ms932Encoder.encode("\u720E")}, {name:"Error",message:"EncodingError U+720E"});
assert.throws(() => {ms932Encoder.encode("\u720F")}, {name:"Error",message:"EncodingError U+720F"});
r = r && ([...ms932Encoder.encode("爐")].join(",") === "224,162"); // U+7210
assert.throws(() => {ms932Encoder.encode("\u7211")}, {name:"Error",message:"EncodingError U+7211"});
assert.throws(() => {ms932Encoder.encode("\u7212")}, {name:"Error",message:"EncodingError U+7212"});
assert.throws(() => {ms932Encoder.encode("\u7213")}, {name:"Error",message:"EncodingError U+7213"});
assert.throws(() => {ms932Encoder.encode("\u7214")}, {name:"Error",message:"EncodingError U+7214"});
assert.throws(() => {ms932Encoder.encode("\u7215")}, {name:"Error",message:"EncodingError U+7215"});
assert.throws(() => {ms932Encoder.encode("\u7216")}, {name:"Error",message:"EncodingError U+7216"});
assert.throws(() => {ms932Encoder.encode("\u7217")}, {name:"Error",message:"EncodingError U+7217"});
assert.throws(() => {ms932Encoder.encode("\u7218")}, {name:"Error",message:"EncodingError U+7218"});
assert.throws(() => {ms932Encoder.encode("\u7219")}, {name:"Error",message:"EncodingError U+7219"});
assert.throws(() => {ms932Encoder.encode("\u721A")}, {name:"Error",message:"EncodingError U+721A"});
r = r && ([...ms932Encoder.encode("爛")].join(",") === "224,163"); // U+721B
assert.throws(() => {ms932Encoder.encode("\u721C")}, {name:"Error",message:"EncodingError U+721C"});
assert.throws(() => {ms932Encoder.encode("\u721D")}, {name:"Error",message:"EncodingError U+721D"});
assert.throws(() => {ms932Encoder.encode("\u721E")}, {name:"Error",message:"EncodingError U+721E"});
assert.throws(() => {ms932Encoder.encode("\u721F")}, {name:"Error",message:"EncodingError U+721F"});
assert.throws(() => {ms932Encoder.encode("\u7220")}, {name:"Error",message:"EncodingError U+7220"});
assert.throws(() => {ms932Encoder.encode("\u7221")}, {name:"Error",message:"EncodingError U+7221"});
assert.throws(() => {ms932Encoder.encode("\u7222")}, {name:"Error",message:"EncodingError U+7222"});
assert.throws(() => {ms932Encoder.encode("\u7223")}, {name:"Error",message:"EncodingError U+7223"});
assert.throws(() => {ms932Encoder.encode("\u7224")}, {name:"Error",message:"EncodingError U+7224"});
assert.throws(() => {ms932Encoder.encode("\u7225")}, {name:"Error",message:"EncodingError U+7225"});
assert.throws(() => {ms932Encoder.encode("\u7226")}, {name:"Error",message:"EncodingError U+7226"});
assert.throws(() => {ms932Encoder.encode("\u7227")}, {name:"Error",message:"EncodingError U+7227"});
r = r && ([...ms932Encoder.encode("爨")].join(",") === "224,164"); // U+7228
assert.throws(() => {ms932Encoder.encode("\u7229")}, {name:"Error",message:"EncodingError U+7229"});
r = r && ([...ms932Encoder.encode("爪")].join(",") === "146,220"); // U+722A
assert.throws(() => {ms932Encoder.encode("\u722B")}, {name:"Error",message:"EncodingError U+722B"});
r = r && ([...ms932Encoder.encode("爬爭")].join(",") === "224,166,224,165"); // U+722C
assert.throws(() => {ms932Encoder.encode("\u722E")}, {name:"Error",message:"EncodingError U+722E"});
assert.throws(() => {ms932Encoder.encode("\u722F")}, {name:"Error",message:"EncodingError U+722F"});
r = r && ([...ms932Encoder.encode("爰")].join(",") === "224,167"); // U+7230
assert.throws(() => {ms932Encoder.encode("\u7231")}, {name:"Error",message:"EncodingError U+7231"});
r = r && ([...ms932Encoder.encode("爲")].join(",") === "224,168"); // U+7232
assert.throws(() => {ms932Encoder.encode("\u7233")}, {name:"Error",message:"EncodingError U+7233"});
assert.throws(() => {ms932Encoder.encode("\u7234")}, {name:"Error",message:"EncodingError U+7234"});
r = r && ([...ms932Encoder.encode("爵父")].join(",") === "142,221,149,131"); // U+7235
assert.throws(() => {ms932Encoder.encode("\u7237")}, {name:"Error",message:"EncodingError U+7237"});
assert.throws(() => {ms932Encoder.encode("\u7238")}, {name:"Error",message:"EncodingError U+7238"});
assert.throws(() => {ms932Encoder.encode("\u7239")}, {name:"Error",message:"EncodingError U+7239"});
r = r && ([...ms932Encoder.encode("爺爻爼爽爾爿牀")].join(",") === "150,234,224,169,224,170,145,117,142,162,224,171,224,172"); // U+723A
assert.throws(() => {ms932Encoder.encode("\u7241")}, {name:"Error",message:"EncodingError U+7241"});
assert.throws(() => {ms932Encoder.encode("\u7242")}, {name:"Error",message:"EncodingError U+7242"});
assert.throws(() => {ms932Encoder.encode("\u7243")}, {name:"Error",message:"EncodingError U+7243"});
assert.throws(() => {ms932Encoder.encode("\u7244")}, {name:"Error",message:"EncodingError U+7244"});
assert.throws(() => {ms932Encoder.encode("\u7245")}, {name:"Error",message:"EncodingError U+7245"});
r = r && ([...ms932Encoder.encode("牆片版")].join(",") === "224,173,149,208,148,197"); // U+7246
assert.throws(() => {ms932Encoder.encode("\u7249")}, {name:"Error",message:"EncodingError U+7249"});
assert.throws(() => {ms932Encoder.encode("\u724A")}, {name:"Error",message:"EncodingError U+724A"});
r = r && ([...ms932Encoder.encode("牋牌")].join(",") === "224,174,148,118"); // U+724B
assert.throws(() => {ms932Encoder.encode("\u724D")}, {name:"Error",message:"EncodingError U+724D"});
assert.throws(() => {ms932Encoder.encode("\u724E")}, {name:"Error",message:"EncodingError U+724E"});
assert.throws(() => {ms932Encoder.encode("\u724F")}, {name:"Error",message:"EncodingError U+724F"});
assert.throws(() => {ms932Encoder.encode("\u7250")}, {name:"Error",message:"EncodingError U+7250"});
assert.throws(() => {ms932Encoder.encode("\u7251")}, {name:"Error",message:"EncodingError U+7251"});
r = r && ([...ms932Encoder.encode("牒")].join(",") === "146,171"); // U+7252
assert.throws(() => {ms932Encoder.encode("\u7253")}, {name:"Error",message:"EncodingError U+7253"});
assert.throws(() => {ms932Encoder.encode("\u7254")}, {name:"Error",message:"EncodingError U+7254"});
assert.throws(() => {ms932Encoder.encode("\u7255")}, {name:"Error",message:"EncodingError U+7255"});
assert.throws(() => {ms932Encoder.encode("\u7256")}, {name:"Error",message:"EncodingError U+7256"});
assert.throws(() => {ms932Encoder.encode("\u7257")}, {name:"Error",message:"EncodingError U+7257"});
r = r && ([...ms932Encoder.encode("牘牙")].join(",") === "224,175,137,229"); // U+7258
assert.throws(() => {ms932Encoder.encode("\u725A")}, {name:"Error",message:"EncodingError U+725A"});
r = r && ([...ms932Encoder.encode("牛")].join(",") === "139,141"); // U+725B
assert.throws(() => {ms932Encoder.encode("\u725C")}, {name:"Error",message:"EncodingError U+725C"});
r = r && ([...ms932Encoder.encode("牝")].join(",") === "150,196"); // U+725D
assert.throws(() => {ms932Encoder.encode("\u725E")}, {name:"Error",message:"EncodingError U+725E"});
r = r && ([...ms932Encoder.encode("牟")].join(",") === "150,180"); // U+725F
assert.throws(() => {ms932Encoder.encode("\u7260")}, {name:"Error",message:"EncodingError U+7260"});
r = r && ([...ms932Encoder.encode("牡牢")].join(",") === "137,178,152,83"); // U+7261
assert.throws(() => {ms932Encoder.encode("\u7263")}, {name:"Error",message:"EncodingError U+7263"});
assert.throws(() => {ms932Encoder.encode("\u7264")}, {name:"Error",message:"EncodingError U+7264"});
assert.throws(() => {ms932Encoder.encode("\u7265")}, {name:"Error",message:"EncodingError U+7265"});
assert.throws(() => {ms932Encoder.encode("\u7266")}, {name:"Error",message:"EncodingError U+7266"});
r = r && ([...ms932Encoder.encode("牧")].join(",") === "150,113"); // U+7267
assert.throws(() => {ms932Encoder.encode("\u7268")}, {name:"Error",message:"EncodingError U+7268"});
r = r && ([...ms932Encoder.encode("物")].join(",") === "149,168"); // U+7269
assert.throws(() => {ms932Encoder.encode("\u726A")}, {name:"Error",message:"EncodingError U+726A"});
assert.throws(() => {ms932Encoder.encode("\u726B")}, {name:"Error",message:"EncodingError U+726B"});
assert.throws(() => {ms932Encoder.encode("\u726C")}, {name:"Error",message:"EncodingError U+726C"});
assert.throws(() => {ms932Encoder.encode("\u726D")}, {name:"Error",message:"EncodingError U+726D"});
assert.throws(() => {ms932Encoder.encode("\u726E")}, {name:"Error",message:"EncodingError U+726E"});
assert.throws(() => {ms932Encoder.encode("\u726F")}, {name:"Error",message:"EncodingError U+726F"});
assert.throws(() => {ms932Encoder.encode("\u7270")}, {name:"Error",message:"EncodingError U+7270"});
assert.throws(() => {ms932Encoder.encode("\u7271")}, {name:"Error",message:"EncodingError U+7271"});
r = r && ([...ms932Encoder.encode("牲")].join(",") === "144,181"); // U+7272
assert.throws(() => {ms932Encoder.encode("\u7273")}, {name:"Error",message:"EncodingError U+7273"});
r = r && ([...ms932Encoder.encode("牴")].join(",") === "224,176"); // U+7274
assert.throws(() => {ms932Encoder.encode("\u7275")}, {name:"Error",message:"EncodingError U+7275"});
assert.throws(() => {ms932Encoder.encode("\u7276")}, {name:"Error",message:"EncodingError U+7276"});
assert.throws(() => {ms932Encoder.encode("\u7277")}, {name:"Error",message:"EncodingError U+7277"});
assert.throws(() => {ms932Encoder.encode("\u7278")}, {name:"Error",message:"EncodingError U+7278"});
r = r && ([...ms932Encoder.encode("特")].join(",") === "147,193"); // U+7279
assert.throws(() => {ms932Encoder.encode("\u727A")}, {name:"Error",message:"EncodingError U+727A"});
assert.throws(() => {ms932Encoder.encode("\u727B")}, {name:"Error",message:"EncodingError U+727B"});
assert.throws(() => {ms932Encoder.encode("\u727C")}, {name:"Error",message:"EncodingError U+727C"});
r = r && ([...ms932Encoder.encode("牽牾")].join(",") === "140,161,224,177"); // U+727D
assert.throws(() => {ms932Encoder.encode("\u727F")}, {name:"Error",message:"EncodingError U+727F"});
r = r && ([...ms932Encoder.encode("犀犁犂")].join(",") === "141,210,224,179,224,178"); // U+7280
assert.throws(() => {ms932Encoder.encode("\u7283")}, {name:"Error",message:"EncodingError U+7283"});
assert.throws(() => {ms932Encoder.encode("\u7284")}, {name:"Error",message:"EncodingError U+7284"});
assert.throws(() => {ms932Encoder.encode("\u7285")}, {name:"Error",message:"EncodingError U+7285"});
assert.throws(() => {ms932Encoder.encode("\u7286")}, {name:"Error",message:"EncodingError U+7286"});
r = r && ([...ms932Encoder.encode("犇")].join(",") === "224,180"); // U+7287
assert.throws(() => {ms932Encoder.encode("\u7288")}, {name:"Error",message:"EncodingError U+7288"});
assert.throws(() => {ms932Encoder.encode("\u7289")}, {name:"Error",message:"EncodingError U+7289"});
assert.throws(() => {ms932Encoder.encode("\u728A")}, {name:"Error",message:"EncodingError U+728A"});
assert.throws(() => {ms932Encoder.encode("\u728B")}, {name:"Error",message:"EncodingError U+728B"});
assert.throws(() => {ms932Encoder.encode("\u728C")}, {name:"Error",message:"EncodingError U+728C"});
assert.throws(() => {ms932Encoder.encode("\u728D")}, {name:"Error",message:"EncodingError U+728D"});
assert.throws(() => {ms932Encoder.encode("\u728E")}, {name:"Error",message:"EncodingError U+728E"});
assert.throws(() => {ms932Encoder.encode("\u728F")}, {name:"Error",message:"EncodingError U+728F"});
assert.throws(() => {ms932Encoder.encode("\u7290")}, {name:"Error",message:"EncodingError U+7290"});
assert.throws(() => {ms932Encoder.encode("\u7291")}, {name:"Error",message:"EncodingError U+7291"});
r = r && ([...ms932Encoder.encode("犒")].join(",") === "224,181"); // U+7292
assert.throws(() => {ms932Encoder.encode("\u7293")}, {name:"Error",message:"EncodingError U+7293"});
assert.throws(() => {ms932Encoder.encode("\u7294")}, {name:"Error",message:"EncodingError U+7294"});
assert.throws(() => {ms932Encoder.encode("\u7295")}, {name:"Error",message:"EncodingError U+7295"});
r = r && ([...ms932Encoder.encode("犖")].join(",") === "224,182"); // U+7296
assert.throws(() => {ms932Encoder.encode("\u7297")}, {name:"Error",message:"EncodingError U+7297"});
assert.throws(() => {ms932Encoder.encode("\u7298")}, {name:"Error",message:"EncodingError U+7298"});
assert.throws(() => {ms932Encoder.encode("\u7299")}, {name:"Error",message:"EncodingError U+7299"});
assert.throws(() => {ms932Encoder.encode("\u729A")}, {name:"Error",message:"EncodingError U+729A"});
assert.throws(() => {ms932Encoder.encode("\u729B")}, {name:"Error",message:"EncodingError U+729B"});
assert.throws(() => {ms932Encoder.encode("\u729C")}, {name:"Error",message:"EncodingError U+729C"});
assert.throws(() => {ms932Encoder.encode("\u729D")}, {name:"Error",message:"EncodingError U+729D"});
assert.throws(() => {ms932Encoder.encode("\u729E")}, {name:"Error",message:"EncodingError U+729E"});
assert.throws(() => {ms932Encoder.encode("\u729F")}, {name:"Error",message:"EncodingError U+729F"});
r = r && ([...ms932Encoder.encode("犠")].join(",") === "139,93"); // U+72A0
assert.throws(() => {ms932Encoder.encode("\u72A1")}, {name:"Error",message:"EncodingError U+72A1"});
r = r && ([...ms932Encoder.encode("犢")].join(",") === "224,183"); // U+72A2
assert.throws(() => {ms932Encoder.encode("\u72A3")}, {name:"Error",message:"EncodingError U+72A3"});
assert.throws(() => {ms932Encoder.encode("\u72A4")}, {name:"Error",message:"EncodingError U+72A4"});
assert.throws(() => {ms932Encoder.encode("\u72A5")}, {name:"Error",message:"EncodingError U+72A5"});
assert.throws(() => {ms932Encoder.encode("\u72A6")}, {name:"Error",message:"EncodingError U+72A6"});
r = r && ([...ms932Encoder.encode("犧")].join(",") === "224,184"); // U+72A7
assert.throws(() => {ms932Encoder.encode("\u72A8")}, {name:"Error",message:"EncodingError U+72A8"});
assert.throws(() => {ms932Encoder.encode("\u72A9")}, {name:"Error",message:"EncodingError U+72A9"});
assert.throws(() => {ms932Encoder.encode("\u72AA")}, {name:"Error",message:"EncodingError U+72AA"});
assert.throws(() => {ms932Encoder.encode("\u72AB")}, {name:"Error",message:"EncodingError U+72AB"});
r = r && ([...ms932Encoder.encode("犬")].join(",") === "140,162"); // U+72AC
assert.throws(() => {ms932Encoder.encode("\u72AD")}, {name:"Error",message:"EncodingError U+72AD"});
assert.throws(() => {ms932Encoder.encode("\u72AE")}, {name:"Error",message:"EncodingError U+72AE"});
r = r && ([...ms932Encoder.encode("犯")].join(",") === "148,198"); // U+72AF
assert.throws(() => {ms932Encoder.encode("\u72B0")}, {name:"Error",message:"EncodingError U+72B0"});
r = r && ([...ms932Encoder.encode("犱犲")].join(",") === "251,91,224,186"); // U+72B1
assert.throws(() => {ms932Encoder.encode("\u72B3")}, {name:"Error",message:"EncodingError U+72B3"});
assert.throws(() => {ms932Encoder.encode("\u72B4")}, {name:"Error",message:"EncodingError U+72B4"});
assert.throws(() => {ms932Encoder.encode("\u72B5")}, {name:"Error",message:"EncodingError U+72B5"});
r = r && ([...ms932Encoder.encode("状")].join(",") === "143,243"); // U+72B6
assert.throws(() => {ms932Encoder.encode("\u72B7")}, {name:"Error",message:"EncodingError U+72B7"});
assert.throws(() => {ms932Encoder.encode("\u72B8")}, {name:"Error",message:"EncodingError U+72B8"});
r = r && ([...ms932Encoder.encode("犹")].join(",") === "224,185"); // U+72B9
assert.throws(() => {ms932Encoder.encode("\u72BA")}, {name:"Error",message:"EncodingError U+72BA"});
assert.throws(() => {ms932Encoder.encode("\u72BB")}, {name:"Error",message:"EncodingError U+72BB"});
assert.throws(() => {ms932Encoder.encode("\u72BC")}, {name:"Error",message:"EncodingError U+72BC"});
assert.throws(() => {ms932Encoder.encode("\u72BD")}, {name:"Error",message:"EncodingError U+72BD"});
r = r && ([...ms932Encoder.encode("犾")].join(",") === "251,92"); // U+72BE
assert.throws(() => {ms932Encoder.encode("\u72BF")}, {name:"Error",message:"EncodingError U+72BF"});
assert.throws(() => {ms932Encoder.encode("\u72C0")}, {name:"Error",message:"EncodingError U+72C0"});
assert.throws(() => {ms932Encoder.encode("\u72C1")}, {name:"Error",message:"EncodingError U+72C1"});
r = r && ([...ms932Encoder.encode("狂狃狄")].join(",") === "139,182,224,187,224,189"); // U+72C2
assert.throws(() => {ms932Encoder.encode("\u72C5")}, {name:"Error",message:"EncodingError U+72C5"});
r = r && ([...ms932Encoder.encode("狆")].join(",") === "224,188"); // U+72C6
assert.throws(() => {ms932Encoder.encode("\u72C7")}, {name:"Error",message:"EncodingError U+72C7"});
assert.throws(() => {ms932Encoder.encode("\u72C8")}, {name:"Error",message:"EncodingError U+72C8"});
assert.throws(() => {ms932Encoder.encode("\u72C9")}, {name:"Error",message:"EncodingError U+72C9"});
assert.throws(() => {ms932Encoder.encode("\u72CA")}, {name:"Error",message:"EncodingError U+72CA"});
assert.throws(() => {ms932Encoder.encode("\u72CB")}, {name:"Error",message:"EncodingError U+72CB"});
assert.throws(() => {ms932Encoder.encode("\u72CC")}, {name:"Error",message:"EncodingError U+72CC"});
assert.throws(() => {ms932Encoder.encode("\u72CD")}, {name:"Error",message:"EncodingError U+72CD"});
r = r && ([...ms932Encoder.encode("狎")].join(",") === "224,190"); // U+72CE
assert.throws(() => {ms932Encoder.encode("\u72CF")}, {name:"Error",message:"EncodingError U+72CF"});
r = r && ([...ms932Encoder.encode("狐")].join(",") === "140,207"); // U+72D0
assert.throws(() => {ms932Encoder.encode("\u72D1")}, {name:"Error",message:"EncodingError U+72D1"});
r = r && ([...ms932Encoder.encode("狒")].join(",") === "224,191"); // U+72D2
assert.throws(() => {ms932Encoder.encode("\u72D3")}, {name:"Error",message:"EncodingError U+72D3"});
assert.throws(() => {ms932Encoder.encode("\u72D4")}, {name:"Error",message:"EncodingError U+72D4"});
assert.throws(() => {ms932Encoder.encode("\u72D5")}, {name:"Error",message:"EncodingError U+72D5"});
assert.throws(() => {ms932Encoder.encode("\u72D6")}, {name:"Error",message:"EncodingError U+72D6"});
r = r && ([...ms932Encoder.encode("狗")].join(",") === "139,231"); // U+72D7
assert.throws(() => {ms932Encoder.encode("\u72D8")}, {name:"Error",message:"EncodingError U+72D8"});
r = r && ([...ms932Encoder.encode("狙")].join(",") === "145,95"); // U+72D9
assert.throws(() => {ms932Encoder.encode("\u72DA")}, {name:"Error",message:"EncodingError U+72DA"});
r = r && ([...ms932Encoder.encode("狛")].join(",") === "141,157"); // U+72DB
assert.throws(() => {ms932Encoder.encode("\u72DC")}, {name:"Error",message:"EncodingError U+72DC"});
assert.throws(() => {ms932Encoder.encode("\u72DD")}, {name:"Error",message:"EncodingError U+72DD"});
assert.throws(() => {ms932Encoder.encode("\u72DE")}, {name:"Error",message:"EncodingError U+72DE"});
assert.throws(() => {ms932Encoder.encode("\u72DF")}, {name:"Error",message:"EncodingError U+72DF"});
r = r && ([...ms932Encoder.encode("狠狡狢")].join(",") === "224,193,224,194,224,192"); // U+72E0
assert.throws(() => {ms932Encoder.encode("\u72E3")}, {name:"Error",message:"EncodingError U+72E3"});
assert.throws(() => {ms932Encoder.encode("\u72E4")}, {name:"Error",message:"EncodingError U+72E4"});
assert.throws(() => {ms932Encoder.encode("\u72E5")}, {name:"Error",message:"EncodingError U+72E5"});
assert.throws(() => {ms932Encoder.encode("\u72E6")}, {name:"Error",message:"EncodingError U+72E6"});
assert.throws(() => {ms932Encoder.encode("\u72E7")}, {name:"Error",message:"EncodingError U+72E7"});
assert.throws(() => {ms932Encoder.encode("\u72E8")}, {name:"Error",message:"EncodingError U+72E8"});
r = r && ([...ms932Encoder.encode("狩")].join(",") === "142,235"); // U+72E9
assert.throws(() => {ms932Encoder.encode("\u72EA")}, {name:"Error",message:"EncodingError U+72EA"});
assert.throws(() => {ms932Encoder.encode("\u72EB")}, {name:"Error",message:"EncodingError U+72EB"});
r = r && ([...ms932Encoder.encode("独狭")].join(",") === "147,198,139,183"); // U+72EC
assert.throws(() => {ms932Encoder.encode("\u72EE")}, {name:"Error",message:"EncodingError U+72EE"});
assert.throws(() => {ms932Encoder.encode("\u72EF")}, {name:"Error",message:"EncodingError U+72EF"});
assert.throws(() => {ms932Encoder.encode("\u72F0")}, {name:"Error",message:"EncodingError U+72F0"});
assert.throws(() => {ms932Encoder.encode("\u72F1")}, {name:"Error",message:"EncodingError U+72F1"});
assert.throws(() => {ms932Encoder.encode("\u72F2")}, {name:"Error",message:"EncodingError U+72F2"});
assert.throws(() => {ms932Encoder.encode("\u72F3")}, {name:"Error",message:"EncodingError U+72F3"});
assert.throws(() => {ms932Encoder.encode("\u72F4")}, {name:"Error",message:"EncodingError U+72F4"});
assert.throws(() => {ms932Encoder.encode("\u72F5")}, {name:"Error",message:"EncodingError U+72F5"});
assert.throws(() => {ms932Encoder.encode("\u72F6")}, {name:"Error",message:"EncodingError U+72F6"});
r = r && ([...ms932Encoder.encode("狷狸狹")].join(",") === "224,196,146,75,224,195"); // U+72F7
assert.throws(() => {ms932Encoder.encode("\u72FA")}, {name:"Error",message:"EncodingError U+72FA"});
assert.throws(() => {ms932Encoder.encode("\u72FB")}, {name:"Error",message:"EncodingError U+72FB"});
r = r && ([...ms932Encoder.encode("狼狽")].join(",") === "152,84,148,130"); // U+72FC
assert.throws(() => {ms932Encoder.encode("\u72FE")}, {name:"Error",message:"EncodingError U+72FE"});
assert.throws(() => {ms932Encoder.encode("\u72FF")}, {name:"Error",message:"EncodingError U+72FF"});
assert.throws(() => {ms932Encoder.encode("\u7300")}, {name:"Error",message:"EncodingError U+7300"});
assert.throws(() => {ms932Encoder.encode("\u7301")}, {name:"Error",message:"EncodingError U+7301"});
assert.throws(() => {ms932Encoder.encode("\u7302")}, {name:"Error",message:"EncodingError U+7302"});
assert.throws(() => {ms932Encoder.encode("\u7303")}, {name:"Error",message:"EncodingError U+7303"});
assert.throws(() => {ms932Encoder.encode("\u7304")}, {name:"Error",message:"EncodingError U+7304"});
assert.throws(() => {ms932Encoder.encode("\u7305")}, {name:"Error",message:"EncodingError U+7305"});
assert.throws(() => {ms932Encoder.encode("\u7306")}, {name:"Error",message:"EncodingError U+7306"});
assert.throws(() => {ms932Encoder.encode("\u7307")}, {name:"Error",message:"EncodingError U+7307"});
assert.throws(() => {ms932Encoder.encode("\u7308")}, {name:"Error",message:"EncodingError U+7308"});
assert.throws(() => {ms932Encoder.encode("\u7309")}, {name:"Error",message:"EncodingError U+7309"});
r = r && ([...ms932Encoder.encode("猊")].join(",") === "224,199"); // U+730A
assert.throws(() => {ms932Encoder.encode("\u730B")}, {name:"Error",message:"EncodingError U+730B"});
assert.throws(() => {ms932Encoder.encode("\u730C")}, {name:"Error",message:"EncodingError U+730C"});
assert.throws(() => {ms932Encoder.encode("\u730D")}, {name:"Error",message:"EncodingError U+730D"});
assert.throws(() => {ms932Encoder.encode("\u730E")}, {name:"Error",message:"EncodingError U+730E"});
assert.throws(() => {ms932Encoder.encode("\u730F")}, {name:"Error",message:"EncodingError U+730F"});
assert.throws(() => {ms932Encoder.encode("\u7310")}, {name:"Error",message:"EncodingError U+7310"});
assert.throws(() => {ms932Encoder.encode("\u7311")}, {name:"Error",message:"EncodingError U+7311"});
assert.throws(() => {ms932Encoder.encode("\u7312")}, {name:"Error",message:"EncodingError U+7312"});
assert.throws(() => {ms932Encoder.encode("\u7313")}, {name:"Error",message:"EncodingError U+7313"});
assert.throws(() => {ms932Encoder.encode("\u7314")}, {name:"Error",message:"EncodingError U+7314"});
assert.throws(() => {ms932Encoder.encode("\u7315")}, {name:"Error",message:"EncodingError U+7315"});
r = r && ([...ms932Encoder.encode("猖猗")].join(",") === "224,201,224,198"); // U+7316
assert.throws(() => {ms932Encoder.encode("\u7318")}, {name:"Error",message:"EncodingError U+7318"});
assert.throws(() => {ms932Encoder.encode("\u7319")}, {name:"Error",message:"EncodingError U+7319"});
assert.throws(() => {ms932Encoder.encode("\u731A")}, {name:"Error",message:"EncodingError U+731A"});
r = r && ([...ms932Encoder.encode("猛猜猝")].join(",") === "150,210,224,200,224,202"); // U+731B
assert.throws(() => {ms932Encoder.encode("\u731E")}, {name:"Error",message:"EncodingError U+731E"});
r = r && ([...ms932Encoder.encode("猟")].join(",") === "151,194"); // U+731F
assert.throws(() => {ms932Encoder.encode("\u7320")}, {name:"Error",message:"EncodingError U+7320"});
assert.throws(() => {ms932Encoder.encode("\u7321")}, {name:"Error",message:"EncodingError U+7321"});
assert.throws(() => {ms932Encoder.encode("\u7322")}, {name:"Error",message:"EncodingError U+7322"});
assert.throws(() => {ms932Encoder.encode("\u7323")}, {name:"Error",message:"EncodingError U+7323"});
r = r && ([...ms932Encoder.encode("猤猥")].join(",") === "251,93,224,206"); // U+7324
assert.throws(() => {ms932Encoder.encode("\u7326")}, {name:"Error",message:"EncodingError U+7326"});
assert.throws(() => {ms932Encoder.encode("\u7327")}, {name:"Error",message:"EncodingError U+7327"});
assert.throws(() => {ms932Encoder.encode("\u7328")}, {name:"Error",message:"EncodingError U+7328"});
r = r && ([...ms932Encoder.encode("猩猪猫")].join(",") === "224,205,146,150,148,76"); // U+7329
assert.throws(() => {ms932Encoder.encode("\u732C")}, {name:"Error",message:"EncodingError U+732C"});
assert.throws(() => {ms932Encoder.encode("\u732D")}, {name:"Error",message:"EncodingError U+732D"});
r = r && ([...ms932Encoder.encode("献猯")].join(",") === "140,163,224,204"); // U+732E
assert.throws(() => {ms932Encoder.encode("\u7330")}, {name:"Error",message:"EncodingError U+7330"});
assert.throws(() => {ms932Encoder.encode("\u7331")}, {name:"Error",message:"EncodingError U+7331"});
assert.throws(() => {ms932Encoder.encode("\u7332")}, {name:"Error",message:"EncodingError U+7332"});
assert.throws(() => {ms932Encoder.encode("\u7333")}, {name:"Error",message:"EncodingError U+7333"});
r = r && ([...ms932Encoder.encode("猴")].join(",") === "224,203"); // U+7334
assert.throws(() => {ms932Encoder.encode("\u7335")}, {name:"Error",message:"EncodingError U+7335"});
r = r && ([...ms932Encoder.encode("猶猷")].join(",") === "151,80,151,81"); // U+7336
assert.throws(() => {ms932Encoder.encode("\u7338")}, {name:"Error",message:"EncodingError U+7338"});
assert.throws(() => {ms932Encoder.encode("\u7339")}, {name:"Error",message:"EncodingError U+7339"});
assert.throws(() => {ms932Encoder.encode("\u733A")}, {name:"Error",message:"EncodingError U+733A"});
assert.throws(() => {ms932Encoder.encode("\u733B")}, {name:"Error",message:"EncodingError U+733B"});
assert.throws(() => {ms932Encoder.encode("\u733C")}, {name:"Error",message:"EncodingError U+733C"});
assert.throws(() => {ms932Encoder.encode("\u733D")}, {name:"Error",message:"EncodingError U+733D"});
r = r && ([...ms932Encoder.encode("猾猿")].join(",") === "224,207,137,142"); // U+733E
assert.throws(() => {ms932Encoder.encode("\u7340")}, {name:"Error",message:"EncodingError U+7340"});
assert.throws(() => {ms932Encoder.encode("\u7341")}, {name:"Error",message:"EncodingError U+7341"});
assert.throws(() => {ms932Encoder.encode("\u7342")}, {name:"Error",message:"EncodingError U+7342"});
assert.throws(() => {ms932Encoder.encode("\u7343")}, {name:"Error",message:"EncodingError U+7343"});
r = r && ([...ms932Encoder.encode("獄獅")].join(",") === "141,150,142,130"); // U+7344
assert.throws(() => {ms932Encoder.encode("\u7346")}, {name:"Error",message:"EncodingError U+7346"});
assert.throws(() => {ms932Encoder.encode("\u7347")}, {name:"Error",message:"EncodingError U+7347"});
assert.throws(() => {ms932Encoder.encode("\u7348")}, {name:"Error",message:"EncodingError U+7348"});
assert.throws(() => {ms932Encoder.encode("\u7349")}, {name:"Error",message:"EncodingError U+7349"});
assert.throws(() => {ms932Encoder.encode("\u734A")}, {name:"Error",message:"EncodingError U+734A"});
assert.throws(() => {ms932Encoder.encode("\u734B")}, {name:"Error",message:"EncodingError U+734B"});
assert.throws(() => {ms932Encoder.encode("\u734C")}, {name:"Error",message:"EncodingError U+734C"});
assert.throws(() => {ms932Encoder.encode("\u734D")}, {name:"Error",message:"EncodingError U+734D"});
r = r && ([...ms932Encoder.encode("獎獏")].join(",") === "224,208,224,209"); // U+734E
assert.throws(() => {ms932Encoder.encode("\u7350")}, {name:"Error",message:"EncodingError U+7350"});
assert.throws(() => {ms932Encoder.encode("\u7351")}, {name:"Error",message:"EncodingError U+7351"});
assert.throws(() => {ms932Encoder.encode("\u7352")}, {name:"Error",message:"EncodingError U+7352"});
assert.throws(() => {ms932Encoder.encode("\u7353")}, {name:"Error",message:"EncodingError U+7353"});
assert.throws(() => {ms932Encoder.encode("\u7354")}, {name:"Error",message:"EncodingError U+7354"});
assert.throws(() => {ms932Encoder.encode("\u7355")}, {name:"Error",message:"EncodingError U+7355"});
assert.throws(() => {ms932Encoder.encode("\u7356")}, {name:"Error",message:"EncodingError U+7356"});
r = r && ([...ms932Encoder.encode("獗")].join(",") === "224,211"); // U+7357
assert.throws(() => {ms932Encoder.encode("\u7358")}, {name:"Error",message:"EncodingError U+7358"});
assert.throws(() => {ms932Encoder.encode("\u7359")}, {name:"Error",message:"EncodingError U+7359"});
assert.throws(() => {ms932Encoder.encode("\u735A")}, {name:"Error",message:"EncodingError U+735A"});
assert.throws(() => {ms932Encoder.encode("\u735B")}, {name:"Error",message:"EncodingError U+735B"});
assert.throws(() => {ms932Encoder.encode("\u735C")}, {name:"Error",message:"EncodingError U+735C"});
assert.throws(() => {ms932Encoder.encode("\u735D")}, {name:"Error",message:"EncodingError U+735D"});
assert.throws(() => {ms932Encoder.encode("\u735E")}, {name:"Error",message:"EncodingError U+735E"});
assert.throws(() => {ms932Encoder.encode("\u735F")}, {name:"Error",message:"EncodingError U+735F"});
assert.throws(() => {ms932Encoder.encode("\u7360")}, {name:"Error",message:"EncodingError U+7360"});
assert.throws(() => {ms932Encoder.encode("\u7361")}, {name:"Error",message:"EncodingError U+7361"});
assert.throws(() => {ms932Encoder.encode("\u7362")}, {name:"Error",message:"EncodingError U+7362"});
r = r && ([...ms932Encoder.encode("獣")].join(",") === "143,98"); // U+7363
assert.throws(() => {ms932Encoder.encode("\u7364")}, {name:"Error",message:"EncodingError U+7364"});
assert.throws(() => {ms932Encoder.encode("\u7365")}, {name:"Error",message:"EncodingError U+7365"});
assert.throws(() => {ms932Encoder.encode("\u7366")}, {name:"Error",message:"EncodingError U+7366"});
assert.throws(() => {ms932Encoder.encode("\u7367")}, {name:"Error",message:"EncodingError U+7367"});
r = r && ([...ms932Encoder.encode("獨")].join(",") === "224,213"); // U+7368
assert.throws(() => {ms932Encoder.encode("\u7369")}, {name:"Error",message:"EncodingError U+7369"});
r = r && ([...ms932Encoder.encode("獪")].join(",") === "224,212"); // U+736A
assert.throws(() => {ms932Encoder.encode("\u736B")}, {name:"Error",message:"EncodingError U+736B"});
assert.throws(() => {ms932Encoder.encode("\u736C")}, {name:"Error",message:"EncodingError U+736C"});
assert.throws(() => {ms932Encoder.encode("\u736D")}, {name:"Error",message:"EncodingError U+736D"});
assert.throws(() => {ms932Encoder.encode("\u736E")}, {name:"Error",message:"EncodingError U+736E"});
assert.throws(() => {ms932Encoder.encode("\u736F")}, {name:"Error",message:"EncodingError U+736F"});
r = r && ([...ms932Encoder.encode("獰")].join(",") === "224,214"); // U+7370
assert.throws(() => {ms932Encoder.encode("\u7371")}, {name:"Error",message:"EncodingError U+7371"});
r = r && ([...ms932Encoder.encode("獲")].join(",") === "138,108"); // U+7372
assert.throws(() => {ms932Encoder.encode("\u7373")}, {name:"Error",message:"EncodingError U+7373"});
assert.throws(() => {ms932Encoder.encode("\u7374")}, {name:"Error",message:"EncodingError U+7374"});
r = r && ([...ms932Encoder.encode("獵")].join(",") === "224,216"); // U+7375
assert.throws(() => {ms932Encoder.encode("\u7376")}, {name:"Error",message:"EncodingError U+7376"});
r = r && ([...ms932Encoder.encode("獷獸")].join(",") === "251,95,224,215"); // U+7377
assert.throws(() => {ms932Encoder.encode("\u7379")}, {name:"Error",message:"EncodingError U+7379"});
r = r && ([...ms932Encoder.encode("獺獻")].join(",") === "224,218,224,217"); // U+737A
assert.throws(() => {ms932Encoder.encode("\u737C")}, {name:"Error",message:"EncodingError U+737C"});
assert.throws(() => {ms932Encoder.encode("\u737D")}, {name:"Error",message:"EncodingError U+737D"});
assert.throws(() => {ms932Encoder.encode("\u737E")}, {name:"Error",message:"EncodingError U+737E"});
assert.throws(() => {ms932Encoder.encode("\u737F")}, {name:"Error",message:"EncodingError U+737F"});
assert.throws(() => {ms932Encoder.encode("\u7380")}, {name:"Error",message:"EncodingError U+7380"});
assert.throws(() => {ms932Encoder.encode("\u7381")}, {name:"Error",message:"EncodingError U+7381"});
assert.throws(() => {ms932Encoder.encode("\u7382")}, {name:"Error",message:"EncodingError U+7382"});
assert.throws(() => {ms932Encoder.encode("\u7383")}, {name:"Error",message:"EncodingError U+7383"});
r = r && ([...ms932Encoder.encode("玄")].join(",") === "140,186"); // U+7384
assert.throws(() => {ms932Encoder.encode("\u7385")}, {name:"Error",message:"EncodingError U+7385"});
assert.throws(() => {ms932Encoder.encode("\u7386")}, {name:"Error",message:"EncodingError U+7386"});
r = r && ([...ms932Encoder.encode("率")].join(",") === "151,166"); // U+7387
assert.throws(() => {ms932Encoder.encode("\u7388")}, {name:"Error",message:"EncodingError U+7388"});
r = r && ([...ms932Encoder.encode("玉")].join(",") === "139,202"); // U+7389
assert.throws(() => {ms932Encoder.encode("\u738A")}, {name:"Error",message:"EncodingError U+738A"});
r = r && ([...ms932Encoder.encode("王")].join(",") === "137,164"); // U+738B
assert.throws(() => {ms932Encoder.encode("\u738C")}, {name:"Error",message:"EncodingError U+738C"});
assert.throws(() => {ms932Encoder.encode("\u738D")}, {name:"Error",message:"EncodingError U+738D"});
assert.throws(() => {ms932Encoder.encode("\u738E")}, {name:"Error",message:"EncodingError U+738E"});
assert.throws(() => {ms932Encoder.encode("\u738F")}, {name:"Error",message:"EncodingError U+738F"});
assert.throws(() => {ms932Encoder.encode("\u7390")}, {name:"Error",message:"EncodingError U+7390"});
assert.throws(() => {ms932Encoder.encode("\u7391")}, {name:"Error",message:"EncodingError U+7391"});
assert.throws(() => {ms932Encoder.encode("\u7392")}, {name:"Error",message:"EncodingError U+7392"});
assert.throws(() => {ms932Encoder.encode("\u7393")}, {name:"Error",message:"EncodingError U+7393"});
assert.throws(() => {ms932Encoder.encode("\u7394")}, {name:"Error",message:"EncodingError U+7394"});
assert.throws(() => {ms932Encoder.encode("\u7395")}, {name:"Error",message:"EncodingError U+7395"});
r = r && ([...ms932Encoder.encode("玖")].join(",") === "139,232"); // U+7396
assert.throws(() => {ms932Encoder.encode("\u7397")}, {name:"Error",message:"EncodingError U+7397"});
assert.throws(() => {ms932Encoder.encode("\u7398")}, {name:"Error",message:"EncodingError U+7398"});
assert.throws(() => {ms932Encoder.encode("\u7399")}, {name:"Error",message:"EncodingError U+7399"});
assert.throws(() => {ms932Encoder.encode("\u739A")}, {name:"Error",message:"EncodingError U+739A"});
assert.throws(() => {ms932Encoder.encode("\u739B")}, {name:"Error",message:"EncodingError U+739B"});
assert.throws(() => {ms932Encoder.encode("\u739C")}, {name:"Error",message:"EncodingError U+739C"});
assert.throws(() => {ms932Encoder.encode("\u739D")}, {name:"Error",message:"EncodingError U+739D"});
assert.throws(() => {ms932Encoder.encode("\u739E")}, {name:"Error",message:"EncodingError U+739E"});
assert.throws(() => {ms932Encoder.encode("\u739F")}, {name:"Error",message:"EncodingError U+739F"});
assert.throws(() => {ms932Encoder.encode("\u73A0")}, {name:"Error",message:"EncodingError U+73A0"});
assert.throws(() => {ms932Encoder.encode("\u73A1")}, {name:"Error",message:"EncodingError U+73A1"});
assert.throws(() => {ms932Encoder.encode("\u73A2")}, {name:"Error",message:"EncodingError U+73A2"});
assert.throws(() => {ms932Encoder.encode("\u73A3")}, {name:"Error",message:"EncodingError U+73A3"});
assert.throws(() => {ms932Encoder.encode("\u73A4")}, {name:"Error",message:"EncodingError U+73A4"});
assert.throws(() => {ms932Encoder.encode("\u73A5")}, {name:"Error",message:"EncodingError U+73A5"});
assert.throws(() => {ms932Encoder.encode("\u73A6")}, {name:"Error",message:"EncodingError U+73A6"});
assert.throws(() => {ms932Encoder.encode("\u73A7")}, {name:"Error",message:"EncodingError U+73A7"});
assert.throws(() => {ms932Encoder.encode("\u73A8")}, {name:"Error",message:"EncodingError U+73A8"});
r = r && ([...ms932Encoder.encode("玩")].join(",") === "138,223"); // U+73A9
assert.throws(() => {ms932Encoder.encode("\u73AA")}, {name:"Error",message:"EncodingError U+73AA"});
assert.throws(() => {ms932Encoder.encode("\u73AB")}, {name:"Error",message:"EncodingError U+73AB"});
assert.throws(() => {ms932Encoder.encode("\u73AC")}, {name:"Error",message:"EncodingError U+73AC"});
assert.throws(() => {ms932Encoder.encode("\u73AD")}, {name:"Error",message:"EncodingError U+73AD"});
assert.throws(() => {ms932Encoder.encode("\u73AE")}, {name:"Error",message:"EncodingError U+73AE"});
assert.throws(() => {ms932Encoder.encode("\u73AF")}, {name:"Error",message:"EncodingError U+73AF"});
assert.throws(() => {ms932Encoder.encode("\u73B0")}, {name:"Error",message:"EncodingError U+73B0"});
assert.throws(() => {ms932Encoder.encode("\u73B1")}, {name:"Error",message:"EncodingError U+73B1"});
r = r && ([...ms932Encoder.encode("玲玳")].join(",") === "151,230,224,220"); // U+73B2
assert.throws(() => {ms932Encoder.encode("\u73B4")}, {name:"Error",message:"EncodingError U+73B4"});
assert.throws(() => {ms932Encoder.encode("\u73B5")}, {name:"Error",message:"EncodingError U+73B5"});
assert.throws(() => {ms932Encoder.encode("\u73B6")}, {name:"Error",message:"EncodingError U+73B6"});
assert.throws(() => {ms932Encoder.encode("\u73B7")}, {name:"Error",message:"EncodingError U+73B7"});
assert.throws(() => {ms932Encoder.encode("\u73B8")}, {name:"Error",message:"EncodingError U+73B8"});
assert.throws(() => {ms932Encoder.encode("\u73B9")}, {name:"Error",message:"EncodingError U+73B9"});
assert.throws(() => {ms932Encoder.encode("\u73BA")}, {name:"Error",message:"EncodingError U+73BA"});
r = r && ([...ms932Encoder.encode("玻")].join(",") === "224,222"); // U+73BB
assert.throws(() => {ms932Encoder.encode("\u73BC")}, {name:"Error",message:"EncodingError U+73BC"});
r = r && ([...ms932Encoder.encode("玽")].join(",") === "251,96"); // U+73BD
assert.throws(() => {ms932Encoder.encode("\u73BE")}, {name:"Error",message:"EncodingError U+73BE"});
assert.throws(() => {ms932Encoder.encode("\u73BF")}, {name:"Error",message:"EncodingError U+73BF"});
r = r && ([...ms932Encoder.encode("珀")].join(",") === "224,223"); // U+73C0
assert.throws(() => {ms932Encoder.encode("\u73C1")}, {name:"Error",message:"EncodingError U+73C1"});
r = r && ([...ms932Encoder.encode("珂")].join(",") === "137,207"); // U+73C2
assert.throws(() => {ms932Encoder.encode("\u73C3")}, {name:"Error",message:"EncodingError U+73C3"});
assert.throws(() => {ms932Encoder.encode("\u73C4")}, {name:"Error",message:"EncodingError U+73C4"});
assert.throws(() => {ms932Encoder.encode("\u73C5")}, {name:"Error",message:"EncodingError U+73C5"});
assert.throws(() => {ms932Encoder.encode("\u73C6")}, {name:"Error",message:"EncodingError U+73C6"});
assert.throws(() => {ms932Encoder.encode("\u73C7")}, {name:"Error",message:"EncodingError U+73C7"});
r = r && ([...ms932Encoder.encode("珈珉珊")].join(",") === "224,219,251,97,142,88"); // U+73C8
assert.throws(() => {ms932Encoder.encode("\u73CB")}, {name:"Error",message:"EncodingError U+73CB"});
assert.throws(() => {ms932Encoder.encode("\u73CC")}, {name:"Error",message:"EncodingError U+73CC"});
r = r && ([...ms932Encoder.encode("珍珎")].join(",") === "146,191,224,221"); // U+73CD
assert.throws(() => {ms932Encoder.encode("\u73CF")}, {name:"Error",message:"EncodingError U+73CF"});
assert.throws(() => {ms932Encoder.encode("\u73D0")}, {name:"Error",message:"EncodingError U+73D0"});
assert.throws(() => {ms932Encoder.encode("\u73D1")}, {name:"Error",message:"EncodingError U+73D1"});
r = r && ([...ms932Encoder.encode("珒")].join(",") === "251,100"); // U+73D2
assert.throws(() => {ms932Encoder.encode("\u73D3")}, {name:"Error",message:"EncodingError U+73D3"});
assert.throws(() => {ms932Encoder.encode("\u73D4")}, {name:"Error",message:"EncodingError U+73D4"});
assert.throws(() => {ms932Encoder.encode("\u73D5")}, {name:"Error",message:"EncodingError U+73D5"});
r = r && ([...ms932Encoder.encode("珖")].join(",") === "251,98"); // U+73D6
assert.throws(() => {ms932Encoder.encode("\u73D7")}, {name:"Error",message:"EncodingError U+73D7"});
assert.throws(() => {ms932Encoder.encode("\u73D8")}, {name:"Error",message:"EncodingError U+73D8"});
assert.throws(() => {ms932Encoder.encode("\u73D9")}, {name:"Error",message:"EncodingError U+73D9"});
assert.throws(() => {ms932Encoder.encode("\u73DA")}, {name:"Error",message:"EncodingError U+73DA"});
assert.throws(() => {ms932Encoder.encode("\u73DB")}, {name:"Error",message:"EncodingError U+73DB"});
assert.throws(() => {ms932Encoder.encode("\u73DC")}, {name:"Error",message:"EncodingError U+73DC"});
assert.throws(() => {ms932Encoder.encode("\u73DD")}, {name:"Error",message:"EncodingError U+73DD"});
r = r && ([...ms932Encoder.encode("珞")].join(",") === "224,226"); // U+73DE
assert.throws(() => {ms932Encoder.encode("\u73DF")}, {name:"Error",message:"EncodingError U+73DF"});
r = r && ([...ms932Encoder.encode("珠")].join(",") === "142,236"); // U+73E0
assert.throws(() => {ms932Encoder.encode("\u73E1")}, {name:"Error",message:"EncodingError U+73E1"});
assert.throws(() => {ms932Encoder.encode("\u73E2")}, {name:"Error",message:"EncodingError U+73E2"});
r = r && ([...ms932Encoder.encode("珣")].join(",") === "251,99"); // U+73E3
assert.throws(() => {ms932Encoder.encode("\u73E4")}, {name:"Error",message:"EncodingError U+73E4"});
r = r && ([...ms932Encoder.encode("珥")].join(",") === "224,224"); // U+73E5
assert.throws(() => {ms932Encoder.encode("\u73E6")}, {name:"Error",message:"EncodingError U+73E6"});
assert.throws(() => {ms932Encoder.encode("\u73E7")}, {name:"Error",message:"EncodingError U+73E7"});
assert.throws(() => {ms932Encoder.encode("\u73E8")}, {name:"Error",message:"EncodingError U+73E8"});
assert.throws(() => {ms932Encoder.encode("\u73E9")}, {name:"Error",message:"EncodingError U+73E9"});
r = r && ([...ms932Encoder.encode("珪")].join(",") === "140,93"); // U+73EA
assert.throws(() => {ms932Encoder.encode("\u73EB")}, {name:"Error",message:"EncodingError U+73EB"});
assert.throws(() => {ms932Encoder.encode("\u73EC")}, {name:"Error",message:"EncodingError U+73EC"});
r = r && ([...ms932Encoder.encode("班珮")].join(",") === "148,199,224,225"); // U+73ED
assert.throws(() => {ms932Encoder.encode("\u73EF")}, {name:"Error",message:"EncodingError U+73EF"});
assert.throws(() => {ms932Encoder.encode("\u73F0")}, {name:"Error",message:"EncodingError U+73F0"});
r = r && ([...ms932Encoder.encode("珱")].join(",") === "224,252"); // U+73F1
assert.throws(() => {ms932Encoder.encode("\u73F2")}, {name:"Error",message:"EncodingError U+73F2"});
assert.throws(() => {ms932Encoder.encode("\u73F3")}, {name:"Error",message:"EncodingError U+73F3"});
assert.throws(() => {ms932Encoder.encode("\u73F4")}, {name:"Error",message:"EncodingError U+73F4"});
r = r && ([...ms932Encoder.encode("珵")].join(",") === "251,102"); // U+73F5
assert.throws(() => {ms932Encoder.encode("\u73F6")}, {name:"Error",message:"EncodingError U+73F6"});
assert.throws(() => {ms932Encoder.encode("\u73F7")}, {name:"Error",message:"EncodingError U+73F7"});
r = r && ([...ms932Encoder.encode("珸")].join(",") === "224,231"); // U+73F8
assert.throws(() => {ms932Encoder.encode("\u73F9")}, {name:"Error",message:"EncodingError U+73F9"});
assert.throws(() => {ms932Encoder.encode("\u73FA")}, {name:"Error",message:"EncodingError U+73FA"});
assert.throws(() => {ms932Encoder.encode("\u73FB")}, {name:"Error",message:"EncodingError U+73FB"});
assert.throws(() => {ms932Encoder.encode("\u73FC")}, {name:"Error",message:"EncodingError U+73FC"});
assert.throws(() => {ms932Encoder.encode("\u73FD")}, {name:"Error",message:"EncodingError U+73FD"});
r = r && ([...ms932Encoder.encode("現")].join(",") === "140,187"); // U+73FE
assert.throws(() => {ms932Encoder.encode("\u73FF")}, {name:"Error",message:"EncodingError U+73FF"});

assert.strictEqual(r, true);

  });

});
