import { expect } from '@esm-bundle/chai';
import { Ms932 } from "../../dist/index.js";

describe("Ms932.Encoder.prototype.encode 8", () => {

  it("encode(string) - U+7000-U+73FF", () => {
    const ms932Encoder = new Ms932.Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u7000")}).to.throw(Error, "EncodingError U+7000");
r = r && ([...ms932Encoder.encode("瀁")].join(",") === "224,102"); // U+7001
expect(() => {ms932Encoder.encode("\u7002")}).to.throw(Error, "EncodingError U+7002");
expect(() => {ms932Encoder.encode("\u7003")}).to.throw(Error, "EncodingError U+7003");
expect(() => {ms932Encoder.encode("\u7004")}).to.throw(Error, "EncodingError U+7004");
r = r && ([...ms932Encoder.encode("瀅")].join(",") === "251,78"); // U+7005
expect(() => {ms932Encoder.encode("\u7006")}).to.throw(Error, "EncodingError U+7006");
r = r && ([...ms932Encoder.encode("瀇")].join(",") === "251,79"); // U+7007
expect(() => {ms932Encoder.encode("\u7008")}).to.throw(Error, "EncodingError U+7008");
r = r && ([...ms932Encoder.encode("瀉")].join(",") === "224,98"); // U+7009
expect(() => {ms932Encoder.encode("\u700A")}).to.throw(Error, "EncodingError U+700A");
r = r && ([...ms932Encoder.encode("瀋")].join(",") === "224,99"); // U+700B
expect(() => {ms932Encoder.encode("\u700C")}).to.throw(Error, "EncodingError U+700C");
expect(() => {ms932Encoder.encode("\u700D")}).to.throw(Error, "EncodingError U+700D");
expect(() => {ms932Encoder.encode("\u700E")}).to.throw(Error, "EncodingError U+700E");
r = r && ([...ms932Encoder.encode("瀏")].join(",") === "224,103"); // U+700F
expect(() => {ms932Encoder.encode("\u7010")}).to.throw(Error, "EncodingError U+7010");
r = r && ([...ms932Encoder.encode("瀑")].join(",") === "224,101"); // U+7011
expect(() => {ms932Encoder.encode("\u7012")}).to.throw(Error, "EncodingError U+7012");
expect(() => {ms932Encoder.encode("\u7013")}).to.throw(Error, "EncodingError U+7013");
expect(() => {ms932Encoder.encode("\u7014")}).to.throw(Error, "EncodingError U+7014");
r = r && ([...ms932Encoder.encode("瀕")].join(",") === "149,109"); // U+7015
expect(() => {ms932Encoder.encode("\u7016")}).to.throw(Error, "EncodingError U+7016");
expect(() => {ms932Encoder.encode("\u7017")}).to.throw(Error, "EncodingError U+7017");
r = r && ([...ms932Encoder.encode("瀘")].join(",") === "224,109"); // U+7018
expect(() => {ms932Encoder.encode("\u7019")}).to.throw(Error, "EncodingError U+7019");
r = r && ([...ms932Encoder.encode("瀚瀛")].join(",") === "224,106,224,105"); // U+701A
expect(() => {ms932Encoder.encode("\u701C")}).to.throw(Error, "EncodingError U+701C");
r = r && ([...ms932Encoder.encode("瀝瀞瀟")].join(",") === "224,108,147,210,224,110"); // U+701D
expect(() => {ms932Encoder.encode("\u7020")}).to.throw(Error, "EncodingError U+7020");
expect(() => {ms932Encoder.encode("\u7021")}).to.throw(Error, "EncodingError U+7021");
expect(() => {ms932Encoder.encode("\u7022")}).to.throw(Error, "EncodingError U+7022");
expect(() => {ms932Encoder.encode("\u7023")}).to.throw(Error, "EncodingError U+7023");
expect(() => {ms932Encoder.encode("\u7024")}).to.throw(Error, "EncodingError U+7024");
expect(() => {ms932Encoder.encode("\u7025")}).to.throw(Error, "EncodingError U+7025");
r = r && ([...ms932Encoder.encode("瀦瀧瀨")].join(",") === "146,149,145,235,251,80"); // U+7026
expect(() => {ms932Encoder.encode("\u7029")}).to.throw(Error, "EncodingError U+7029");
expect(() => {ms932Encoder.encode("\u702A")}).to.throw(Error, "EncodingError U+702A");
expect(() => {ms932Encoder.encode("\u702B")}).to.throw(Error, "EncodingError U+702B");
r = r && ([...ms932Encoder.encode("瀬")].join(",") === "144,163"); // U+702C
expect(() => {ms932Encoder.encode("\u702D")}).to.throw(Error, "EncodingError U+702D");
expect(() => {ms932Encoder.encode("\u702E")}).to.throw(Error, "EncodingError U+702E");
expect(() => {ms932Encoder.encode("\u702F")}).to.throw(Error, "EncodingError U+702F");
r = r && ([...ms932Encoder.encode("瀰")].join(",") === "224,111"); // U+7030
expect(() => {ms932Encoder.encode("\u7031")}).to.throw(Error, "EncodingError U+7031");
r = r && ([...ms932Encoder.encode("瀲")].join(",") === "224,113"); // U+7032
expect(() => {ms932Encoder.encode("\u7033")}).to.throw(Error, "EncodingError U+7033");
expect(() => {ms932Encoder.encode("\u7034")}).to.throw(Error, "EncodingError U+7034");
expect(() => {ms932Encoder.encode("\u7035")}).to.throw(Error, "EncodingError U+7035");
expect(() => {ms932Encoder.encode("\u7036")}).to.throw(Error, "EncodingError U+7036");
expect(() => {ms932Encoder.encode("\u7037")}).to.throw(Error, "EncodingError U+7037");
expect(() => {ms932Encoder.encode("\u7038")}).to.throw(Error, "EncodingError U+7038");
expect(() => {ms932Encoder.encode("\u7039")}).to.throw(Error, "EncodingError U+7039");
expect(() => {ms932Encoder.encode("\u703A")}).to.throw(Error, "EncodingError U+703A");
expect(() => {ms932Encoder.encode("\u703B")}).to.throw(Error, "EncodingError U+703B");
expect(() => {ms932Encoder.encode("\u703C")}).to.throw(Error, "EncodingError U+703C");
expect(() => {ms932Encoder.encode("\u703D")}).to.throw(Error, "EncodingError U+703D");
r = r && ([...ms932Encoder.encode("瀾")].join(",") === "224,112"); // U+703E
expect(() => {ms932Encoder.encode("\u703F")}).to.throw(Error, "EncodingError U+703F");
expect(() => {ms932Encoder.encode("\u7040")}).to.throw(Error, "EncodingError U+7040");
expect(() => {ms932Encoder.encode("\u7041")}).to.throw(Error, "EncodingError U+7041");
expect(() => {ms932Encoder.encode("\u7042")}).to.throw(Error, "EncodingError U+7042");
expect(() => {ms932Encoder.encode("\u7043")}).to.throw(Error, "EncodingError U+7043");
expect(() => {ms932Encoder.encode("\u7044")}).to.throw(Error, "EncodingError U+7044");
expect(() => {ms932Encoder.encode("\u7045")}).to.throw(Error, "EncodingError U+7045");
expect(() => {ms932Encoder.encode("\u7046")}).to.throw(Error, "EncodingError U+7046");
expect(() => {ms932Encoder.encode("\u7047")}).to.throw(Error, "EncodingError U+7047");
expect(() => {ms932Encoder.encode("\u7048")}).to.throw(Error, "EncodingError U+7048");
expect(() => {ms932Encoder.encode("\u7049")}).to.throw(Error, "EncodingError U+7049");
expect(() => {ms932Encoder.encode("\u704A")}).to.throw(Error, "EncodingError U+704A");
expect(() => {ms932Encoder.encode("\u704B")}).to.throw(Error, "EncodingError U+704B");
r = r && ([...ms932Encoder.encode("灌")].join(",") === "159,243"); // U+704C
expect(() => {ms932Encoder.encode("\u704D")}).to.throw(Error, "EncodingError U+704D");
expect(() => {ms932Encoder.encode("\u704E")}).to.throw(Error, "EncodingError U+704E");
expect(() => {ms932Encoder.encode("\u704F")}).to.throw(Error, "EncodingError U+704F");
expect(() => {ms932Encoder.encode("\u7050")}).to.throw(Error, "EncodingError U+7050");
r = r && ([...ms932Encoder.encode("灑")].join(",") === "224,114"); // U+7051
expect(() => {ms932Encoder.encode("\u7052")}).to.throw(Error, "EncodingError U+7052");
expect(() => {ms932Encoder.encode("\u7053")}).to.throw(Error, "EncodingError U+7053");
expect(() => {ms932Encoder.encode("\u7054")}).to.throw(Error, "EncodingError U+7054");
expect(() => {ms932Encoder.encode("\u7055")}).to.throw(Error, "EncodingError U+7055");
expect(() => {ms932Encoder.encode("\u7056")}).to.throw(Error, "EncodingError U+7056");
expect(() => {ms932Encoder.encode("\u7057")}).to.throw(Error, "EncodingError U+7057");
r = r && ([...ms932Encoder.encode("灘")].join(",") === "147,229"); // U+7058
expect(() => {ms932Encoder.encode("\u7059")}).to.throw(Error, "EncodingError U+7059");
expect(() => {ms932Encoder.encode("\u705A")}).to.throw(Error, "EncodingError U+705A");
expect(() => {ms932Encoder.encode("\u705B")}).to.throw(Error, "EncodingError U+705B");
expect(() => {ms932Encoder.encode("\u705C")}).to.throw(Error, "EncodingError U+705C");
expect(() => {ms932Encoder.encode("\u705D")}).to.throw(Error, "EncodingError U+705D");
expect(() => {ms932Encoder.encode("\u705E")}).to.throw(Error, "EncodingError U+705E");
expect(() => {ms932Encoder.encode("\u705F")}).to.throw(Error, "EncodingError U+705F");
expect(() => {ms932Encoder.encode("\u7060")}).to.throw(Error, "EncodingError U+7060");
expect(() => {ms932Encoder.encode("\u7061")}).to.throw(Error, "EncodingError U+7061");
expect(() => {ms932Encoder.encode("\u7062")}).to.throw(Error, "EncodingError U+7062");
r = r && ([...ms932Encoder.encode("灣")].join(",") === "224,115"); // U+7063
expect(() => {ms932Encoder.encode("\u7064")}).to.throw(Error, "EncodingError U+7064");
expect(() => {ms932Encoder.encode("\u7065")}).to.throw(Error, "EncodingError U+7065");
expect(() => {ms932Encoder.encode("\u7066")}).to.throw(Error, "EncodingError U+7066");
expect(() => {ms932Encoder.encode("\u7067")}).to.throw(Error, "EncodingError U+7067");
expect(() => {ms932Encoder.encode("\u7068")}).to.throw(Error, "EncodingError U+7068");
expect(() => {ms932Encoder.encode("\u7069")}).to.throw(Error, "EncodingError U+7069");
expect(() => {ms932Encoder.encode("\u706A")}).to.throw(Error, "EncodingError U+706A");
r = r && ([...ms932Encoder.encode("火")].join(",") === "137,206"); // U+706B
expect(() => {ms932Encoder.encode("\u706C")}).to.throw(Error, "EncodingError U+706C");
expect(() => {ms932Encoder.encode("\u706D")}).to.throw(Error, "EncodingError U+706D");
expect(() => {ms932Encoder.encode("\u706E")}).to.throw(Error, "EncodingError U+706E");
r = r && ([...ms932Encoder.encode("灯灰")].join(",") === "147,148,138,68"); // U+706F
expect(() => {ms932Encoder.encode("\u7071")}).to.throw(Error, "EncodingError U+7071");
expect(() => {ms932Encoder.encode("\u7072")}).to.throw(Error, "EncodingError U+7072");
expect(() => {ms932Encoder.encode("\u7073")}).to.throw(Error, "EncodingError U+7073");
expect(() => {ms932Encoder.encode("\u7074")}).to.throw(Error, "EncodingError U+7074");
expect(() => {ms932Encoder.encode("\u7075")}).to.throw(Error, "EncodingError U+7075");
expect(() => {ms932Encoder.encode("\u7076")}).to.throw(Error, "EncodingError U+7076");
expect(() => {ms932Encoder.encode("\u7077")}).to.throw(Error, "EncodingError U+7077");
r = r && ([...ms932Encoder.encode("灸")].join(",") === "139,132"); // U+7078
expect(() => {ms932Encoder.encode("\u7079")}).to.throw(Error, "EncodingError U+7079");
expect(() => {ms932Encoder.encode("\u707A")}).to.throw(Error, "EncodingError U+707A");
expect(() => {ms932Encoder.encode("\u707B")}).to.throw(Error, "EncodingError U+707B");
r = r && ([...ms932Encoder.encode("灼災")].join(",") === "142,220,141,208"); // U+707C
expect(() => {ms932Encoder.encode("\u707E")}).to.throw(Error, "EncodingError U+707E");
expect(() => {ms932Encoder.encode("\u707F")}).to.throw(Error, "EncodingError U+707F");
expect(() => {ms932Encoder.encode("\u7080")}).to.throw(Error, "EncodingError U+7080");
expect(() => {ms932Encoder.encode("\u7081")}).to.throw(Error, "EncodingError U+7081");
expect(() => {ms932Encoder.encode("\u7082")}).to.throw(Error, "EncodingError U+7082");
expect(() => {ms932Encoder.encode("\u7083")}).to.throw(Error, "EncodingError U+7083");
expect(() => {ms932Encoder.encode("\u7084")}).to.throw(Error, "EncodingError U+7084");
r = r && ([...ms932Encoder.encode("炅")].join(",") === "251,81"); // U+7085
expect(() => {ms932Encoder.encode("\u7086")}).to.throw(Error, "EncodingError U+7086");
expect(() => {ms932Encoder.encode("\u7087")}).to.throw(Error, "EncodingError U+7087");
expect(() => {ms932Encoder.encode("\u7088")}).to.throw(Error, "EncodingError U+7088");
r = r && ([...ms932Encoder.encode("炉炊")].join(",") === "152,70,144,134"); // U+7089
expect(() => {ms932Encoder.encode("\u708B")}).to.throw(Error, "EncodingError U+708B");
expect(() => {ms932Encoder.encode("\u708C")}).to.throw(Error, "EncodingError U+708C");
expect(() => {ms932Encoder.encode("\u708D")}).to.throw(Error, "EncodingError U+708D");
r = r && ([...ms932Encoder.encode("炎")].join(",") === "137,138"); // U+708E
expect(() => {ms932Encoder.encode("\u708F")}).to.throw(Error, "EncodingError U+708F");
expect(() => {ms932Encoder.encode("\u7090")}).to.throw(Error, "EncodingError U+7090");
expect(() => {ms932Encoder.encode("\u7091")}).to.throw(Error, "EncodingError U+7091");
r = r && ([...ms932Encoder.encode("炒")].join(",") === "224,117"); // U+7092
expect(() => {ms932Encoder.encode("\u7093")}).to.throw(Error, "EncodingError U+7093");
expect(() => {ms932Encoder.encode("\u7094")}).to.throw(Error, "EncodingError U+7094");
expect(() => {ms932Encoder.encode("\u7095")}).to.throw(Error, "EncodingError U+7095");
expect(() => {ms932Encoder.encode("\u7096")}).to.throw(Error, "EncodingError U+7096");
expect(() => {ms932Encoder.encode("\u7097")}).to.throw(Error, "EncodingError U+7097");
expect(() => {ms932Encoder.encode("\u7098")}).to.throw(Error, "EncodingError U+7098");
r = r && ([...ms932Encoder.encode("炙")].join(",") === "224,116"); // U+7099
expect(() => {ms932Encoder.encode("\u709A")}).to.throw(Error, "EncodingError U+709A");
expect(() => {ms932Encoder.encode("\u709B")}).to.throw(Error, "EncodingError U+709B");
expect(() => {ms932Encoder.encode("\u709C")}).to.throw(Error, "EncodingError U+709C");
expect(() => {ms932Encoder.encode("\u709D")}).to.throw(Error, "EncodingError U+709D");
expect(() => {ms932Encoder.encode("\u709E")}).to.throw(Error, "EncodingError U+709E");
expect(() => {ms932Encoder.encode("\u709F")}).to.throw(Error, "EncodingError U+709F");
expect(() => {ms932Encoder.encode("\u70A0")}).to.throw(Error, "EncodingError U+70A0");
expect(() => {ms932Encoder.encode("\u70A1")}).to.throw(Error, "EncodingError U+70A1");
expect(() => {ms932Encoder.encode("\u70A2")}).to.throw(Error, "EncodingError U+70A2");
expect(() => {ms932Encoder.encode("\u70A3")}).to.throw(Error, "EncodingError U+70A3");
expect(() => {ms932Encoder.encode("\u70A4")}).to.throw(Error, "EncodingError U+70A4");
expect(() => {ms932Encoder.encode("\u70A5")}).to.throw(Error, "EncodingError U+70A5");
expect(() => {ms932Encoder.encode("\u70A6")}).to.throw(Error, "EncodingError U+70A6");
expect(() => {ms932Encoder.encode("\u70A7")}).to.throw(Error, "EncodingError U+70A7");
expect(() => {ms932Encoder.encode("\u70A8")}).to.throw(Error, "EncodingError U+70A8");
expect(() => {ms932Encoder.encode("\u70A9")}).to.throw(Error, "EncodingError U+70A9");
expect(() => {ms932Encoder.encode("\u70AA")}).to.throw(Error, "EncodingError U+70AA");
r = r && ([...ms932Encoder.encode("炫炬炭炮炯")].join(",") === "251,82,224,120,146,89,224,123,224,118"); // U+70AB
expect(() => {ms932Encoder.encode("\u70B0")}).to.throw(Error, "EncodingError U+70B0");
expect(() => {ms932Encoder.encode("\u70B1")}).to.throw(Error, "EncodingError U+70B1");
expect(() => {ms932Encoder.encode("\u70B2")}).to.throw(Error, "EncodingError U+70B2");
r = r && ([...ms932Encoder.encode("炳")].join(",") === "224,122"); // U+70B3
expect(() => {ms932Encoder.encode("\u70B4")}).to.throw(Error, "EncodingError U+70B4");
expect(() => {ms932Encoder.encode("\u70B5")}).to.throw(Error, "EncodingError U+70B5");
expect(() => {ms932Encoder.encode("\u70B6")}).to.throw(Error, "EncodingError U+70B6");
expect(() => {ms932Encoder.encode("\u70B7")}).to.throw(Error, "EncodingError U+70B7");
r = r && ([...ms932Encoder.encode("炸点為炻")].join(",") === "224,121,147,95,136,215,250,98"); // U+70B8
expect(() => {ms932Encoder.encode("\u70BC")}).to.throw(Error, "EncodingError U+70BC");
expect(() => {ms932Encoder.encode("\u70BD")}).to.throw(Error, "EncodingError U+70BD");
expect(() => {ms932Encoder.encode("\u70BE")}).to.throw(Error, "EncodingError U+70BE");
expect(() => {ms932Encoder.encode("\u70BF")}).to.throw(Error, "EncodingError U+70BF");
expect(() => {ms932Encoder.encode("\u70C0")}).to.throw(Error, "EncodingError U+70C0");
expect(() => {ms932Encoder.encode("\u70C1")}).to.throw(Error, "EncodingError U+70C1");
expect(() => {ms932Encoder.encode("\u70C2")}).to.throw(Error, "EncodingError U+70C2");
expect(() => {ms932Encoder.encode("\u70C3")}).to.throw(Error, "EncodingError U+70C3");
expect(() => {ms932Encoder.encode("\u70C4")}).to.throw(Error, "EncodingError U+70C4");
expect(() => {ms932Encoder.encode("\u70C5")}).to.throw(Error, "EncodingError U+70C5");
expect(() => {ms932Encoder.encode("\u70C6")}).to.throw(Error, "EncodingError U+70C6");
expect(() => {ms932Encoder.encode("\u70C7")}).to.throw(Error, "EncodingError U+70C7");
r = r && ([...ms932Encoder.encode("烈")].join(",") === "151,243"); // U+70C8
expect(() => {ms932Encoder.encode("\u70C9")}).to.throw(Error, "EncodingError U+70C9");
expect(() => {ms932Encoder.encode("\u70CA")}).to.throw(Error, "EncodingError U+70CA");
r = r && ([...ms932Encoder.encode("烋")].join(",") === "224,125"); // U+70CB
expect(() => {ms932Encoder.encode("\u70CC")}).to.throw(Error, "EncodingError U+70CC");
expect(() => {ms932Encoder.encode("\u70CD")}).to.throw(Error, "EncodingError U+70CD");
expect(() => {ms932Encoder.encode("\u70CE")}).to.throw(Error, "EncodingError U+70CE");
r = r && ([...ms932Encoder.encode("烏")].join(",") === "137,71"); // U+70CF
expect(() => {ms932Encoder.encode("\u70D0")}).to.throw(Error, "EncodingError U+70D0");
expect(() => {ms932Encoder.encode("\u70D1")}).to.throw(Error, "EncodingError U+70D1");
expect(() => {ms932Encoder.encode("\u70D2")}).to.throw(Error, "EncodingError U+70D2");
expect(() => {ms932Encoder.encode("\u70D3")}).to.throw(Error, "EncodingError U+70D3");
expect(() => {ms932Encoder.encode("\u70D4")}).to.throw(Error, "EncodingError U+70D4");
expect(() => {ms932Encoder.encode("\u70D5")}).to.throw(Error, "EncodingError U+70D5");
expect(() => {ms932Encoder.encode("\u70D6")}).to.throw(Error, "EncodingError U+70D6");
expect(() => {ms932Encoder.encode("\u70D7")}).to.throw(Error, "EncodingError U+70D7");
expect(() => {ms932Encoder.encode("\u70D8")}).to.throw(Error, "EncodingError U+70D8");
r = r && ([...ms932Encoder.encode("烙")].join(",") === "224,128"); // U+70D9
expect(() => {ms932Encoder.encode("\u70DA")}).to.throw(Error, "EncodingError U+70DA");
expect(() => {ms932Encoder.encode("\u70DB")}).to.throw(Error, "EncodingError U+70DB");
expect(() => {ms932Encoder.encode("\u70DC")}).to.throw(Error, "EncodingError U+70DC");
r = r && ([...ms932Encoder.encode("烝")].join(",") === "224,126"); // U+70DD
expect(() => {ms932Encoder.encode("\u70DE")}).to.throw(Error, "EncodingError U+70DE");
r = r && ([...ms932Encoder.encode("烟")].join(",") === "224,124"); // U+70DF
expect(() => {ms932Encoder.encode("\u70E0")}).to.throw(Error, "EncodingError U+70E0");
expect(() => {ms932Encoder.encode("\u70E1")}).to.throw(Error, "EncodingError U+70E1");
expect(() => {ms932Encoder.encode("\u70E2")}).to.throw(Error, "EncodingError U+70E2");
expect(() => {ms932Encoder.encode("\u70E3")}).to.throw(Error, "EncodingError U+70E3");
expect(() => {ms932Encoder.encode("\u70E4")}).to.throw(Error, "EncodingError U+70E4");
expect(() => {ms932Encoder.encode("\u70E5")}).to.throw(Error, "EncodingError U+70E5");
expect(() => {ms932Encoder.encode("\u70E6")}).to.throw(Error, "EncodingError U+70E6");
expect(() => {ms932Encoder.encode("\u70E7")}).to.throw(Error, "EncodingError U+70E7");
expect(() => {ms932Encoder.encode("\u70E8")}).to.throw(Error, "EncodingError U+70E8");
expect(() => {ms932Encoder.encode("\u70E9")}).to.throw(Error, "EncodingError U+70E9");
expect(() => {ms932Encoder.encode("\u70EA")}).to.throw(Error, "EncodingError U+70EA");
expect(() => {ms932Encoder.encode("\u70EB")}).to.throw(Error, "EncodingError U+70EB");
expect(() => {ms932Encoder.encode("\u70EC")}).to.throw(Error, "EncodingError U+70EC");
expect(() => {ms932Encoder.encode("\u70ED")}).to.throw(Error, "EncodingError U+70ED");
expect(() => {ms932Encoder.encode("\u70EE")}).to.throw(Error, "EncodingError U+70EE");
expect(() => {ms932Encoder.encode("\u70EF")}).to.throw(Error, "EncodingError U+70EF");
expect(() => {ms932Encoder.encode("\u70F0")}).to.throw(Error, "EncodingError U+70F0");
r = r && ([...ms932Encoder.encode("烱")].join(",") === "224,119"); // U+70F1
expect(() => {ms932Encoder.encode("\u70F2")}).to.throw(Error, "EncodingError U+70F2");
expect(() => {ms932Encoder.encode("\u70F3")}).to.throw(Error, "EncodingError U+70F3");
expect(() => {ms932Encoder.encode("\u70F4")}).to.throw(Error, "EncodingError U+70F4");
expect(() => {ms932Encoder.encode("\u70F5")}).to.throw(Error, "EncodingError U+70F5");
expect(() => {ms932Encoder.encode("\u70F6")}).to.throw(Error, "EncodingError U+70F6");
expect(() => {ms932Encoder.encode("\u70F7")}).to.throw(Error, "EncodingError U+70F7");
expect(() => {ms932Encoder.encode("\u70F8")}).to.throw(Error, "EncodingError U+70F8");
r = r && ([...ms932Encoder.encode("烹")].join(",") === "150,66"); // U+70F9
expect(() => {ms932Encoder.encode("\u70FA")}).to.throw(Error, "EncodingError U+70FA");
expect(() => {ms932Encoder.encode("\u70FB")}).to.throw(Error, "EncodingError U+70FB");
expect(() => {ms932Encoder.encode("\u70FC")}).to.throw(Error, "EncodingError U+70FC");
r = r && ([...ms932Encoder.encode("烽")].join(",") === "224,130"); // U+70FD
expect(() => {ms932Encoder.encode("\u70FE")}).to.throw(Error, "EncodingError U+70FE");
expect(() => {ms932Encoder.encode("\u70FF")}).to.throw(Error, "EncodingError U+70FF");
expect(() => {ms932Encoder.encode("\u7100")}).to.throw(Error, "EncodingError U+7100");
expect(() => {ms932Encoder.encode("\u7101")}).to.throw(Error, "EncodingError U+7101");
expect(() => {ms932Encoder.encode("\u7102")}).to.throw(Error, "EncodingError U+7102");
expect(() => {ms932Encoder.encode("\u7103")}).to.throw(Error, "EncodingError U+7103");
r = r && ([...ms932Encoder.encode("焄")].join(",") === "251,84"); // U+7104
expect(() => {ms932Encoder.encode("\u7105")}).to.throw(Error, "EncodingError U+7105");
expect(() => {ms932Encoder.encode("\u7106")}).to.throw(Error, "EncodingError U+7106");
expect(() => {ms932Encoder.encode("\u7107")}).to.throw(Error, "EncodingError U+7107");
expect(() => {ms932Encoder.encode("\u7108")}).to.throw(Error, "EncodingError U+7108");
r = r && ([...ms932Encoder.encode("焉")].join(",") === "224,129"); // U+7109
expect(() => {ms932Encoder.encode("\u710A")}).to.throw(Error, "EncodingError U+710A");
expect(() => {ms932Encoder.encode("\u710B")}).to.throw(Error, "EncodingError U+710B");
expect(() => {ms932Encoder.encode("\u710C")}).to.throw(Error, "EncodingError U+710C");
expect(() => {ms932Encoder.encode("\u710D")}).to.throw(Error, "EncodingError U+710D");
expect(() => {ms932Encoder.encode("\u710E")}).to.throw(Error, "EncodingError U+710E");
r = r && ([...ms932Encoder.encode("焏")].join(",") === "251,83"); // U+710F
expect(() => {ms932Encoder.encode("\u7110")}).to.throw(Error, "EncodingError U+7110");
expect(() => {ms932Encoder.encode("\u7111")}).to.throw(Error, "EncodingError U+7111");
expect(() => {ms932Encoder.encode("\u7112")}).to.throw(Error, "EncodingError U+7112");
expect(() => {ms932Encoder.encode("\u7113")}).to.throw(Error, "EncodingError U+7113");
r = r && ([...ms932Encoder.encode("焔")].join(",") === "137,139"); // U+7114
expect(() => {ms932Encoder.encode("\u7115")}).to.throw(Error, "EncodingError U+7115");
expect(() => {ms932Encoder.encode("\u7116")}).to.throw(Error, "EncodingError U+7116");
expect(() => {ms932Encoder.encode("\u7117")}).to.throw(Error, "EncodingError U+7117");
expect(() => {ms932Encoder.encode("\u7118")}).to.throw(Error, "EncodingError U+7118");
r = r && ([...ms932Encoder.encode("焙焚")].join(",") === "224,132,149,176"); // U+7119
expect(() => {ms932Encoder.encode("\u711B")}).to.throw(Error, "EncodingError U+711B");
r = r && ([...ms932Encoder.encode("焜")].join(",") === "224,131"); // U+711C
expect(() => {ms932Encoder.encode("\u711D")}).to.throw(Error, "EncodingError U+711D");
expect(() => {ms932Encoder.encode("\u711E")}).to.throw(Error, "EncodingError U+711E");
expect(() => {ms932Encoder.encode("\u711F")}).to.throw(Error, "EncodingError U+711F");
expect(() => {ms932Encoder.encode("\u7120")}).to.throw(Error, "EncodingError U+7120");
r = r && ([...ms932Encoder.encode("無")].join(",") === "150,179"); // U+7121
expect(() => {ms932Encoder.encode("\u7122")}).to.throw(Error, "EncodingError U+7122");
expect(() => {ms932Encoder.encode("\u7123")}).to.throw(Error, "EncodingError U+7123");
expect(() => {ms932Encoder.encode("\u7124")}).to.throw(Error, "EncodingError U+7124");
expect(() => {ms932Encoder.encode("\u7125")}).to.throw(Error, "EncodingError U+7125");
r = r && ([...ms932Encoder.encode("焦")].join(",") === "143,197"); // U+7126
expect(() => {ms932Encoder.encode("\u7127")}).to.throw(Error, "EncodingError U+7127");
expect(() => {ms932Encoder.encode("\u7128")}).to.throw(Error, "EncodingError U+7128");
expect(() => {ms932Encoder.encode("\u7129")}).to.throw(Error, "EncodingError U+7129");
expect(() => {ms932Encoder.encode("\u712A")}).to.throw(Error, "EncodingError U+712A");
expect(() => {ms932Encoder.encode("\u712B")}).to.throw(Error, "EncodingError U+712B");
expect(() => {ms932Encoder.encode("\u712C")}).to.throw(Error, "EncodingError U+712C");
expect(() => {ms932Encoder.encode("\u712D")}).to.throw(Error, "EncodingError U+712D");
expect(() => {ms932Encoder.encode("\u712E")}).to.throw(Error, "EncodingError U+712E");
expect(() => {ms932Encoder.encode("\u712F")}).to.throw(Error, "EncodingError U+712F");
expect(() => {ms932Encoder.encode("\u7130")}).to.throw(Error, "EncodingError U+7130");
expect(() => {ms932Encoder.encode("\u7131")}).to.throw(Error, "EncodingError U+7131");
expect(() => {ms932Encoder.encode("\u7132")}).to.throw(Error, "EncodingError U+7132");
expect(() => {ms932Encoder.encode("\u7133")}).to.throw(Error, "EncodingError U+7133");
expect(() => {ms932Encoder.encode("\u7134")}).to.throw(Error, "EncodingError U+7134");
expect(() => {ms932Encoder.encode("\u7135")}).to.throw(Error, "EncodingError U+7135");
r = r && ([...ms932Encoder.encode("然")].join(",") === "145,82"); // U+7136
expect(() => {ms932Encoder.encode("\u7137")}).to.throw(Error, "EncodingError U+7137");
expect(() => {ms932Encoder.encode("\u7138")}).to.throw(Error, "EncodingError U+7138");
expect(() => {ms932Encoder.encode("\u7139")}).to.throw(Error, "EncodingError U+7139");
expect(() => {ms932Encoder.encode("\u713A")}).to.throw(Error, "EncodingError U+713A");
expect(() => {ms932Encoder.encode("\u713B")}).to.throw(Error, "EncodingError U+713B");
r = r && ([...ms932Encoder.encode("焼")].join(",") === "143,196"); // U+713C
expect(() => {ms932Encoder.encode("\u713D")}).to.throw(Error, "EncodingError U+713D");
expect(() => {ms932Encoder.encode("\u713E")}).to.throw(Error, "EncodingError U+713E");
expect(() => {ms932Encoder.encode("\u713F")}).to.throw(Error, "EncodingError U+713F");
expect(() => {ms932Encoder.encode("\u7140")}).to.throw(Error, "EncodingError U+7140");
expect(() => {ms932Encoder.encode("\u7141")}).to.throw(Error, "EncodingError U+7141");
expect(() => {ms932Encoder.encode("\u7142")}).to.throw(Error, "EncodingError U+7142");
expect(() => {ms932Encoder.encode("\u7143")}).to.throw(Error, "EncodingError U+7143");
expect(() => {ms932Encoder.encode("\u7144")}).to.throw(Error, "EncodingError U+7144");
expect(() => {ms932Encoder.encode("\u7145")}).to.throw(Error, "EncodingError U+7145");
r = r && ([...ms932Encoder.encode("煆煇")].join(",") === "251,86,251,87"); // U+7146
expect(() => {ms932Encoder.encode("\u7148")}).to.throw(Error, "EncodingError U+7148");
r = r && ([...ms932Encoder.encode("煉")].join(",") === "151,249"); // U+7149
expect(() => {ms932Encoder.encode("\u714A")}).to.throw(Error, "EncodingError U+714A");
expect(() => {ms932Encoder.encode("\u714B")}).to.throw(Error, "EncodingError U+714B");
r = r && ([...ms932Encoder.encode("煌")].join(",") === "224,138"); // U+714C
expect(() => {ms932Encoder.encode("\u714D")}).to.throw(Error, "EncodingError U+714D");
r = r && ([...ms932Encoder.encode("煎")].join(",") === "144,247"); // U+714E
expect(() => {ms932Encoder.encode("\u714F")}).to.throw(Error, "EncodingError U+714F");
expect(() => {ms932Encoder.encode("\u7150")}).to.throw(Error, "EncodingError U+7150");
expect(() => {ms932Encoder.encode("\u7151")}).to.throw(Error, "EncodingError U+7151");
expect(() => {ms932Encoder.encode("\u7152")}).to.throw(Error, "EncodingError U+7152");
expect(() => {ms932Encoder.encode("\u7153")}).to.throw(Error, "EncodingError U+7153");
expect(() => {ms932Encoder.encode("\u7154")}).to.throw(Error, "EncodingError U+7154");
r = r && ([...ms932Encoder.encode("煕煖")].join(",") === "224,134,224,139"); // U+7155
expect(() => {ms932Encoder.encode("\u7157")}).to.throw(Error, "EncodingError U+7157");
expect(() => {ms932Encoder.encode("\u7158")}).to.throw(Error, "EncodingError U+7158");
r = r && ([...ms932Encoder.encode("煙")].join(",") === "137,140"); // U+7159
expect(() => {ms932Encoder.encode("\u715A")}).to.throw(Error, "EncodingError U+715A");
expect(() => {ms932Encoder.encode("\u715B")}).to.throw(Error, "EncodingError U+715B");
r = r && ([...ms932Encoder.encode("煜")].join(",") === "251,85"); // U+715C
expect(() => {ms932Encoder.encode("\u715D")}).to.throw(Error, "EncodingError U+715D");
expect(() => {ms932Encoder.encode("\u715E")}).to.throw(Error, "EncodingError U+715E");
expect(() => {ms932Encoder.encode("\u715F")}).to.throw(Error, "EncodingError U+715F");
expect(() => {ms932Encoder.encode("\u7160")}).to.throw(Error, "EncodingError U+7160");
expect(() => {ms932Encoder.encode("\u7161")}).to.throw(Error, "EncodingError U+7161");
r = r && ([...ms932Encoder.encode("煢")].join(",") === "224,137"); // U+7162
expect(() => {ms932Encoder.encode("\u7163")}).to.throw(Error, "EncodingError U+7163");
r = r && ([...ms932Encoder.encode("煤煥煦照")].join(",") === "148,129,224,133,224,136,143,198"); // U+7164
expect(() => {ms932Encoder.encode("\u7168")}).to.throw(Error, "EncodingError U+7168");
r = r && ([...ms932Encoder.encode("煩")].join(",") === "148,207"); // U+7169
expect(() => {ms932Encoder.encode("\u716A")}).to.throw(Error, "EncodingError U+716A");
expect(() => {ms932Encoder.encode("\u716B")}).to.throw(Error, "EncodingError U+716B");
r = r && ([...ms932Encoder.encode("煬")].join(",") === "224,140"); // U+716C
expect(() => {ms932Encoder.encode("\u716D")}).to.throw(Error, "EncodingError U+716D");
r = r && ([...ms932Encoder.encode("煮")].join(",") === "142,207"); // U+716E
expect(() => {ms932Encoder.encode("\u716F")}).to.throw(Error, "EncodingError U+716F");
expect(() => {ms932Encoder.encode("\u7170")}).to.throw(Error, "EncodingError U+7170");
expect(() => {ms932Encoder.encode("\u7171")}).to.throw(Error, "EncodingError U+7171");
expect(() => {ms932Encoder.encode("\u7172")}).to.throw(Error, "EncodingError U+7172");
expect(() => {ms932Encoder.encode("\u7173")}).to.throw(Error, "EncodingError U+7173");
expect(() => {ms932Encoder.encode("\u7174")}).to.throw(Error, "EncodingError U+7174");
expect(() => {ms932Encoder.encode("\u7175")}).to.throw(Error, "EncodingError U+7175");
expect(() => {ms932Encoder.encode("\u7176")}).to.throw(Error, "EncodingError U+7176");
expect(() => {ms932Encoder.encode("\u7177")}).to.throw(Error, "EncodingError U+7177");
expect(() => {ms932Encoder.encode("\u7178")}).to.throw(Error, "EncodingError U+7178");
expect(() => {ms932Encoder.encode("\u7179")}).to.throw(Error, "EncodingError U+7179");
expect(() => {ms932Encoder.encode("\u717A")}).to.throw(Error, "EncodingError U+717A");
expect(() => {ms932Encoder.encode("\u717B")}).to.throw(Error, "EncodingError U+717B");
expect(() => {ms932Encoder.encode("\u717C")}).to.throw(Error, "EncodingError U+717C");
r = r && ([...ms932Encoder.encode("煽")].join(",") === "144,248"); // U+717D
expect(() => {ms932Encoder.encode("\u717E")}).to.throw(Error, "EncodingError U+717E");
expect(() => {ms932Encoder.encode("\u717F")}).to.throw(Error, "EncodingError U+717F");
expect(() => {ms932Encoder.encode("\u7180")}).to.throw(Error, "EncodingError U+7180");
expect(() => {ms932Encoder.encode("\u7181")}).to.throw(Error, "EncodingError U+7181");
expect(() => {ms932Encoder.encode("\u7182")}).to.throw(Error, "EncodingError U+7182");
expect(() => {ms932Encoder.encode("\u7183")}).to.throw(Error, "EncodingError U+7183");
r = r && ([...ms932Encoder.encode("熄")].join(",") === "224,143"); // U+7184
expect(() => {ms932Encoder.encode("\u7185")}).to.throw(Error, "EncodingError U+7185");
expect(() => {ms932Encoder.encode("\u7186")}).to.throw(Error, "EncodingError U+7186");
expect(() => {ms932Encoder.encode("\u7187")}).to.throw(Error, "EncodingError U+7187");
r = r && ([...ms932Encoder.encode("熈")].join(",") === "224,135"); // U+7188
expect(() => {ms932Encoder.encode("\u7189")}).to.throw(Error, "EncodingError U+7189");
r = r && ([...ms932Encoder.encode("熊")].join(",") === "140,70"); // U+718A
expect(() => {ms932Encoder.encode("\u718B")}).to.throw(Error, "EncodingError U+718B");
expect(() => {ms932Encoder.encode("\u718C")}).to.throw(Error, "EncodingError U+718C");
expect(() => {ms932Encoder.encode("\u718D")}).to.throw(Error, "EncodingError U+718D");
expect(() => {ms932Encoder.encode("\u718E")}).to.throw(Error, "EncodingError U+718E");
r = r && ([...ms932Encoder.encode("熏")].join(",") === "224,141"); // U+718F
expect(() => {ms932Encoder.encode("\u7190")}).to.throw(Error, "EncodingError U+7190");
expect(() => {ms932Encoder.encode("\u7191")}).to.throw(Error, "EncodingError U+7191");
expect(() => {ms932Encoder.encode("\u7192")}).to.throw(Error, "EncodingError U+7192");
expect(() => {ms932Encoder.encode("\u7193")}).to.throw(Error, "EncodingError U+7193");
r = r && ([...ms932Encoder.encode("熔熕")].join(",") === "151,111,224,144"); // U+7194
expect(() => {ms932Encoder.encode("\u7196")}).to.throw(Error, "EncodingError U+7196");
expect(() => {ms932Encoder.encode("\u7197")}).to.throw(Error, "EncodingError U+7197");
expect(() => {ms932Encoder.encode("\u7198")}).to.throw(Error, "EncodingError U+7198");
r = r && ([...ms932Encoder.encode("熙")].join(",") === "234,164"); // U+7199
expect(() => {ms932Encoder.encode("\u719A")}).to.throw(Error, "EncodingError U+719A");
expect(() => {ms932Encoder.encode("\u719B")}).to.throw(Error, "EncodingError U+719B");
expect(() => {ms932Encoder.encode("\u719C")}).to.throw(Error, "EncodingError U+719C");
expect(() => {ms932Encoder.encode("\u719D")}).to.throw(Error, "EncodingError U+719D");
expect(() => {ms932Encoder.encode("\u719E")}).to.throw(Error, "EncodingError U+719E");
r = r && ([...ms932Encoder.encode("熟")].join(",") === "143,110"); // U+719F
expect(() => {ms932Encoder.encode("\u71A0")}).to.throw(Error, "EncodingError U+71A0");
expect(() => {ms932Encoder.encode("\u71A1")}).to.throw(Error, "EncodingError U+71A1");
expect(() => {ms932Encoder.encode("\u71A2")}).to.throw(Error, "EncodingError U+71A2");
expect(() => {ms932Encoder.encode("\u71A3")}).to.throw(Error, "EncodingError U+71A3");
expect(() => {ms932Encoder.encode("\u71A4")}).to.throw(Error, "EncodingError U+71A4");
expect(() => {ms932Encoder.encode("\u71A5")}).to.throw(Error, "EncodingError U+71A5");
expect(() => {ms932Encoder.encode("\u71A6")}).to.throw(Error, "EncodingError U+71A6");
expect(() => {ms932Encoder.encode("\u71A7")}).to.throw(Error, "EncodingError U+71A7");
r = r && ([...ms932Encoder.encode("熨")].join(",") === "224,145"); // U+71A8
expect(() => {ms932Encoder.encode("\u71A9")}).to.throw(Error, "EncodingError U+71A9");
expect(() => {ms932Encoder.encode("\u71AA")}).to.throw(Error, "EncodingError U+71AA");
expect(() => {ms932Encoder.encode("\u71AB")}).to.throw(Error, "EncodingError U+71AB");
r = r && ([...ms932Encoder.encode("熬")].join(",") === "224,146"); // U+71AC
expect(() => {ms932Encoder.encode("\u71AD")}).to.throw(Error, "EncodingError U+71AD");
expect(() => {ms932Encoder.encode("\u71AE")}).to.throw(Error, "EncodingError U+71AE");
expect(() => {ms932Encoder.encode("\u71AF")}).to.throw(Error, "EncodingError U+71AF");
expect(() => {ms932Encoder.encode("\u71B0")}).to.throw(Error, "EncodingError U+71B0");
r = r && ([...ms932Encoder.encode("熱")].join(",") === "148,77"); // U+71B1
expect(() => {ms932Encoder.encode("\u71B2")}).to.throw(Error, "EncodingError U+71B2");
expect(() => {ms932Encoder.encode("\u71B3")}).to.throw(Error, "EncodingError U+71B3");
expect(() => {ms932Encoder.encode("\u71B4")}).to.throw(Error, "EncodingError U+71B4");
expect(() => {ms932Encoder.encode("\u71B5")}).to.throw(Error, "EncodingError U+71B5");
expect(() => {ms932Encoder.encode("\u71B6")}).to.throw(Error, "EncodingError U+71B6");
expect(() => {ms932Encoder.encode("\u71B7")}).to.throw(Error, "EncodingError U+71B7");
expect(() => {ms932Encoder.encode("\u71B8")}).to.throw(Error, "EncodingError U+71B8");
r = r && ([...ms932Encoder.encode("熹")].join(",") === "224,148"); // U+71B9
expect(() => {ms932Encoder.encode("\u71BA")}).to.throw(Error, "EncodingError U+71BA");
expect(() => {ms932Encoder.encode("\u71BB")}).to.throw(Error, "EncodingError U+71BB");
expect(() => {ms932Encoder.encode("\u71BC")}).to.throw(Error, "EncodingError U+71BC");
expect(() => {ms932Encoder.encode("\u71BD")}).to.throw(Error, "EncodingError U+71BD");
r = r && ([...ms932Encoder.encode("熾")].join(",") === "224,149"); // U+71BE
expect(() => {ms932Encoder.encode("\u71BF")}).to.throw(Error, "EncodingError U+71BF");
expect(() => {ms932Encoder.encode("\u71C0")}).to.throw(Error, "EncodingError U+71C0");
r = r && ([...ms932Encoder.encode("燁")].join(",") === "251,89"); // U+71C1
expect(() => {ms932Encoder.encode("\u71C2")}).to.throw(Error, "EncodingError U+71C2");
r = r && ([...ms932Encoder.encode("燃")].join(",") === "148,82"); // U+71C3
expect(() => {ms932Encoder.encode("\u71C4")}).to.throw(Error, "EncodingError U+71C4");
expect(() => {ms932Encoder.encode("\u71C5")}).to.throw(Error, "EncodingError U+71C5");
expect(() => {ms932Encoder.encode("\u71C6")}).to.throw(Error, "EncodingError U+71C6");
expect(() => {ms932Encoder.encode("\u71C7")}).to.throw(Error, "EncodingError U+71C7");
r = r && ([...ms932Encoder.encode("燈燉")].join(",") === "147,149,224,151"); // U+71C8
expect(() => {ms932Encoder.encode("\u71CA")}).to.throw(Error, "EncodingError U+71CA");
expect(() => {ms932Encoder.encode("\u71CB")}).to.throw(Error, "EncodingError U+71CB");
expect(() => {ms932Encoder.encode("\u71CC")}).to.throw(Error, "EncodingError U+71CC");
expect(() => {ms932Encoder.encode("\u71CD")}).to.throw(Error, "EncodingError U+71CD");
r = r && ([...ms932Encoder.encode("燎")].join(",") === "224,153"); // U+71CE
expect(() => {ms932Encoder.encode("\u71CF")}).to.throw(Error, "EncodingError U+71CF");
r = r && ([...ms932Encoder.encode("燐")].join(",") === "151,211"); // U+71D0
expect(() => {ms932Encoder.encode("\u71D1")}).to.throw(Error, "EncodingError U+71D1");
r = r && ([...ms932Encoder.encode("燒")].join(",") === "224,150"); // U+71D2
expect(() => {ms932Encoder.encode("\u71D3")}).to.throw(Error, "EncodingError U+71D3");
r = r && ([...ms932Encoder.encode("燔燕")].join(",") === "224,152,137,141"); // U+71D4
expect(() => {ms932Encoder.encode("\u71D6")}).to.throw(Error, "EncodingError U+71D6");
r = r && ([...ms932Encoder.encode("燗")].join(",") === "224,147"); // U+71D7
expect(() => {ms932Encoder.encode("\u71D8")}).to.throw(Error, "EncodingError U+71D8");
expect(() => {ms932Encoder.encode("\u71D9")}).to.throw(Error, "EncodingError U+71D9");
expect(() => {ms932Encoder.encode("\u71DA")}).to.throw(Error, "EncodingError U+71DA");
expect(() => {ms932Encoder.encode("\u71DB")}).to.throw(Error, "EncodingError U+71DB");
expect(() => {ms932Encoder.encode("\u71DC")}).to.throw(Error, "EncodingError U+71DC");
expect(() => {ms932Encoder.encode("\u71DD")}).to.throw(Error, "EncodingError U+71DD");
expect(() => {ms932Encoder.encode("\u71DE")}).to.throw(Error, "EncodingError U+71DE");
r = r && ([...ms932Encoder.encode("營燠")].join(",") === "154,122,224,154"); // U+71DF
expect(() => {ms932Encoder.encode("\u71E1")}).to.throw(Error, "EncodingError U+71E1");
expect(() => {ms932Encoder.encode("\u71E2")}).to.throw(Error, "EncodingError U+71E2");
expect(() => {ms932Encoder.encode("\u71E3")}).to.throw(Error, "EncodingError U+71E3");
expect(() => {ms932Encoder.encode("\u71E4")}).to.throw(Error, "EncodingError U+71E4");
r = r && ([...ms932Encoder.encode("燥燦燧")].join(",") === "145,135,142,87,224,156"); // U+71E5
expect(() => {ms932Encoder.encode("\u71E8")}).to.throw(Error, "EncodingError U+71E8");
expect(() => {ms932Encoder.encode("\u71E9")}).to.throw(Error, "EncodingError U+71E9");
expect(() => {ms932Encoder.encode("\u71EA")}).to.throw(Error, "EncodingError U+71EA");
expect(() => {ms932Encoder.encode("\u71EB")}).to.throw(Error, "EncodingError U+71EB");
r = r && ([...ms932Encoder.encode("燬燭燮")].join(",") === "224,155,144,67,153,215"); // U+71EC
expect(() => {ms932Encoder.encode("\u71EF")}).to.throw(Error, "EncodingError U+71EF");
expect(() => {ms932Encoder.encode("\u71F0")}).to.throw(Error, "EncodingError U+71F0");
expect(() => {ms932Encoder.encode("\u71F1")}).to.throw(Error, "EncodingError U+71F1");
expect(() => {ms932Encoder.encode("\u71F2")}).to.throw(Error, "EncodingError U+71F2");
expect(() => {ms932Encoder.encode("\u71F3")}).to.throw(Error, "EncodingError U+71F3");
expect(() => {ms932Encoder.encode("\u71F4")}).to.throw(Error, "EncodingError U+71F4");
r = r && ([...ms932Encoder.encode("燵")].join(",") === "224,157"); // U+71F5
expect(() => {ms932Encoder.encode("\u71F6")}).to.throw(Error, "EncodingError U+71F6");
expect(() => {ms932Encoder.encode("\u71F7")}).to.throw(Error, "EncodingError U+71F7");
expect(() => {ms932Encoder.encode("\u71F8")}).to.throw(Error, "EncodingError U+71F8");
r = r && ([...ms932Encoder.encode("燹")].join(",") === "224,159"); // U+71F9
expect(() => {ms932Encoder.encode("\u71FA")}).to.throw(Error, "EncodingError U+71FA");
r = r && ([...ms932Encoder.encode("燻燼")].join(",") === "224,142,224,158"); // U+71FB
expect(() => {ms932Encoder.encode("\u71FD")}).to.throw(Error, "EncodingError U+71FD");
r = r && ([...ms932Encoder.encode("燾燿")].join(",") === "251,90,224,160"); // U+71FE
expect(() => {ms932Encoder.encode("\u7200")}).to.throw(Error, "EncodingError U+7200");
expect(() => {ms932Encoder.encode("\u7201")}).to.throw(Error, "EncodingError U+7201");
expect(() => {ms932Encoder.encode("\u7202")}).to.throw(Error, "EncodingError U+7202");
expect(() => {ms932Encoder.encode("\u7203")}).to.throw(Error, "EncodingError U+7203");
expect(() => {ms932Encoder.encode("\u7204")}).to.throw(Error, "EncodingError U+7204");
expect(() => {ms932Encoder.encode("\u7205")}).to.throw(Error, "EncodingError U+7205");
r = r && ([...ms932Encoder.encode("爆")].join(",") === "148,154"); // U+7206
expect(() => {ms932Encoder.encode("\u7207")}).to.throw(Error, "EncodingError U+7207");
expect(() => {ms932Encoder.encode("\u7208")}).to.throw(Error, "EncodingError U+7208");
expect(() => {ms932Encoder.encode("\u7209")}).to.throw(Error, "EncodingError U+7209");
expect(() => {ms932Encoder.encode("\u720A")}).to.throw(Error, "EncodingError U+720A");
expect(() => {ms932Encoder.encode("\u720B")}).to.throw(Error, "EncodingError U+720B");
expect(() => {ms932Encoder.encode("\u720C")}).to.throw(Error, "EncodingError U+720C");
r = r && ([...ms932Encoder.encode("爍")].join(",") === "224,161"); // U+720D
expect(() => {ms932Encoder.encode("\u720E")}).to.throw(Error, "EncodingError U+720E");
expect(() => {ms932Encoder.encode("\u720F")}).to.throw(Error, "EncodingError U+720F");
r = r && ([...ms932Encoder.encode("爐")].join(",") === "224,162"); // U+7210
expect(() => {ms932Encoder.encode("\u7211")}).to.throw(Error, "EncodingError U+7211");
expect(() => {ms932Encoder.encode("\u7212")}).to.throw(Error, "EncodingError U+7212");
expect(() => {ms932Encoder.encode("\u7213")}).to.throw(Error, "EncodingError U+7213");
expect(() => {ms932Encoder.encode("\u7214")}).to.throw(Error, "EncodingError U+7214");
expect(() => {ms932Encoder.encode("\u7215")}).to.throw(Error, "EncodingError U+7215");
expect(() => {ms932Encoder.encode("\u7216")}).to.throw(Error, "EncodingError U+7216");
expect(() => {ms932Encoder.encode("\u7217")}).to.throw(Error, "EncodingError U+7217");
expect(() => {ms932Encoder.encode("\u7218")}).to.throw(Error, "EncodingError U+7218");
expect(() => {ms932Encoder.encode("\u7219")}).to.throw(Error, "EncodingError U+7219");
expect(() => {ms932Encoder.encode("\u721A")}).to.throw(Error, "EncodingError U+721A");
r = r && ([...ms932Encoder.encode("爛")].join(",") === "224,163"); // U+721B
expect(() => {ms932Encoder.encode("\u721C")}).to.throw(Error, "EncodingError U+721C");
expect(() => {ms932Encoder.encode("\u721D")}).to.throw(Error, "EncodingError U+721D");
expect(() => {ms932Encoder.encode("\u721E")}).to.throw(Error, "EncodingError U+721E");
expect(() => {ms932Encoder.encode("\u721F")}).to.throw(Error, "EncodingError U+721F");
expect(() => {ms932Encoder.encode("\u7220")}).to.throw(Error, "EncodingError U+7220");
expect(() => {ms932Encoder.encode("\u7221")}).to.throw(Error, "EncodingError U+7221");
expect(() => {ms932Encoder.encode("\u7222")}).to.throw(Error, "EncodingError U+7222");
expect(() => {ms932Encoder.encode("\u7223")}).to.throw(Error, "EncodingError U+7223");
expect(() => {ms932Encoder.encode("\u7224")}).to.throw(Error, "EncodingError U+7224");
expect(() => {ms932Encoder.encode("\u7225")}).to.throw(Error, "EncodingError U+7225");
expect(() => {ms932Encoder.encode("\u7226")}).to.throw(Error, "EncodingError U+7226");
expect(() => {ms932Encoder.encode("\u7227")}).to.throw(Error, "EncodingError U+7227");
r = r && ([...ms932Encoder.encode("爨")].join(",") === "224,164"); // U+7228
expect(() => {ms932Encoder.encode("\u7229")}).to.throw(Error, "EncodingError U+7229");
r = r && ([...ms932Encoder.encode("爪")].join(",") === "146,220"); // U+722A
expect(() => {ms932Encoder.encode("\u722B")}).to.throw(Error, "EncodingError U+722B");
r = r && ([...ms932Encoder.encode("爬爭")].join(",") === "224,166,224,165"); // U+722C
expect(() => {ms932Encoder.encode("\u722E")}).to.throw(Error, "EncodingError U+722E");
expect(() => {ms932Encoder.encode("\u722F")}).to.throw(Error, "EncodingError U+722F");
r = r && ([...ms932Encoder.encode("爰")].join(",") === "224,167"); // U+7230
expect(() => {ms932Encoder.encode("\u7231")}).to.throw(Error, "EncodingError U+7231");
r = r && ([...ms932Encoder.encode("爲")].join(",") === "224,168"); // U+7232
expect(() => {ms932Encoder.encode("\u7233")}).to.throw(Error, "EncodingError U+7233");
expect(() => {ms932Encoder.encode("\u7234")}).to.throw(Error, "EncodingError U+7234");
r = r && ([...ms932Encoder.encode("爵父")].join(",") === "142,221,149,131"); // U+7235
expect(() => {ms932Encoder.encode("\u7237")}).to.throw(Error, "EncodingError U+7237");
expect(() => {ms932Encoder.encode("\u7238")}).to.throw(Error, "EncodingError U+7238");
expect(() => {ms932Encoder.encode("\u7239")}).to.throw(Error, "EncodingError U+7239");
r = r && ([...ms932Encoder.encode("爺爻爼爽爾爿牀")].join(",") === "150,234,224,169,224,170,145,117,142,162,224,171,224,172"); // U+723A
expect(() => {ms932Encoder.encode("\u7241")}).to.throw(Error, "EncodingError U+7241");
expect(() => {ms932Encoder.encode("\u7242")}).to.throw(Error, "EncodingError U+7242");
expect(() => {ms932Encoder.encode("\u7243")}).to.throw(Error, "EncodingError U+7243");
expect(() => {ms932Encoder.encode("\u7244")}).to.throw(Error, "EncodingError U+7244");
expect(() => {ms932Encoder.encode("\u7245")}).to.throw(Error, "EncodingError U+7245");
r = r && ([...ms932Encoder.encode("牆片版")].join(",") === "224,173,149,208,148,197"); // U+7246
expect(() => {ms932Encoder.encode("\u7249")}).to.throw(Error, "EncodingError U+7249");
expect(() => {ms932Encoder.encode("\u724A")}).to.throw(Error, "EncodingError U+724A");
r = r && ([...ms932Encoder.encode("牋牌")].join(",") === "224,174,148,118"); // U+724B
expect(() => {ms932Encoder.encode("\u724D")}).to.throw(Error, "EncodingError U+724D");
expect(() => {ms932Encoder.encode("\u724E")}).to.throw(Error, "EncodingError U+724E");
expect(() => {ms932Encoder.encode("\u724F")}).to.throw(Error, "EncodingError U+724F");
expect(() => {ms932Encoder.encode("\u7250")}).to.throw(Error, "EncodingError U+7250");
expect(() => {ms932Encoder.encode("\u7251")}).to.throw(Error, "EncodingError U+7251");
r = r && ([...ms932Encoder.encode("牒")].join(",") === "146,171"); // U+7252
expect(() => {ms932Encoder.encode("\u7253")}).to.throw(Error, "EncodingError U+7253");
expect(() => {ms932Encoder.encode("\u7254")}).to.throw(Error, "EncodingError U+7254");
expect(() => {ms932Encoder.encode("\u7255")}).to.throw(Error, "EncodingError U+7255");
expect(() => {ms932Encoder.encode("\u7256")}).to.throw(Error, "EncodingError U+7256");
expect(() => {ms932Encoder.encode("\u7257")}).to.throw(Error, "EncodingError U+7257");
r = r && ([...ms932Encoder.encode("牘牙")].join(",") === "224,175,137,229"); // U+7258
expect(() => {ms932Encoder.encode("\u725A")}).to.throw(Error, "EncodingError U+725A");
r = r && ([...ms932Encoder.encode("牛")].join(",") === "139,141"); // U+725B
expect(() => {ms932Encoder.encode("\u725C")}).to.throw(Error, "EncodingError U+725C");
r = r && ([...ms932Encoder.encode("牝")].join(",") === "150,196"); // U+725D
expect(() => {ms932Encoder.encode("\u725E")}).to.throw(Error, "EncodingError U+725E");
r = r && ([...ms932Encoder.encode("牟")].join(",") === "150,180"); // U+725F
expect(() => {ms932Encoder.encode("\u7260")}).to.throw(Error, "EncodingError U+7260");
r = r && ([...ms932Encoder.encode("牡牢")].join(",") === "137,178,152,83"); // U+7261
expect(() => {ms932Encoder.encode("\u7263")}).to.throw(Error, "EncodingError U+7263");
expect(() => {ms932Encoder.encode("\u7264")}).to.throw(Error, "EncodingError U+7264");
expect(() => {ms932Encoder.encode("\u7265")}).to.throw(Error, "EncodingError U+7265");
expect(() => {ms932Encoder.encode("\u7266")}).to.throw(Error, "EncodingError U+7266");
r = r && ([...ms932Encoder.encode("牧")].join(",") === "150,113"); // U+7267
expect(() => {ms932Encoder.encode("\u7268")}).to.throw(Error, "EncodingError U+7268");
r = r && ([...ms932Encoder.encode("物")].join(",") === "149,168"); // U+7269
expect(() => {ms932Encoder.encode("\u726A")}).to.throw(Error, "EncodingError U+726A");
expect(() => {ms932Encoder.encode("\u726B")}).to.throw(Error, "EncodingError U+726B");
expect(() => {ms932Encoder.encode("\u726C")}).to.throw(Error, "EncodingError U+726C");
expect(() => {ms932Encoder.encode("\u726D")}).to.throw(Error, "EncodingError U+726D");
expect(() => {ms932Encoder.encode("\u726E")}).to.throw(Error, "EncodingError U+726E");
expect(() => {ms932Encoder.encode("\u726F")}).to.throw(Error, "EncodingError U+726F");
expect(() => {ms932Encoder.encode("\u7270")}).to.throw(Error, "EncodingError U+7270");
expect(() => {ms932Encoder.encode("\u7271")}).to.throw(Error, "EncodingError U+7271");
r = r && ([...ms932Encoder.encode("牲")].join(",") === "144,181"); // U+7272
expect(() => {ms932Encoder.encode("\u7273")}).to.throw(Error, "EncodingError U+7273");
r = r && ([...ms932Encoder.encode("牴")].join(",") === "224,176"); // U+7274
expect(() => {ms932Encoder.encode("\u7275")}).to.throw(Error, "EncodingError U+7275");
expect(() => {ms932Encoder.encode("\u7276")}).to.throw(Error, "EncodingError U+7276");
expect(() => {ms932Encoder.encode("\u7277")}).to.throw(Error, "EncodingError U+7277");
expect(() => {ms932Encoder.encode("\u7278")}).to.throw(Error, "EncodingError U+7278");
r = r && ([...ms932Encoder.encode("特")].join(",") === "147,193"); // U+7279
expect(() => {ms932Encoder.encode("\u727A")}).to.throw(Error, "EncodingError U+727A");
expect(() => {ms932Encoder.encode("\u727B")}).to.throw(Error, "EncodingError U+727B");
expect(() => {ms932Encoder.encode("\u727C")}).to.throw(Error, "EncodingError U+727C");
r = r && ([...ms932Encoder.encode("牽牾")].join(",") === "140,161,224,177"); // U+727D
expect(() => {ms932Encoder.encode("\u727F")}).to.throw(Error, "EncodingError U+727F");
r = r && ([...ms932Encoder.encode("犀犁犂")].join(",") === "141,210,224,179,224,178"); // U+7280
expect(() => {ms932Encoder.encode("\u7283")}).to.throw(Error, "EncodingError U+7283");
expect(() => {ms932Encoder.encode("\u7284")}).to.throw(Error, "EncodingError U+7284");
expect(() => {ms932Encoder.encode("\u7285")}).to.throw(Error, "EncodingError U+7285");
expect(() => {ms932Encoder.encode("\u7286")}).to.throw(Error, "EncodingError U+7286");
r = r && ([...ms932Encoder.encode("犇")].join(",") === "224,180"); // U+7287
expect(() => {ms932Encoder.encode("\u7288")}).to.throw(Error, "EncodingError U+7288");
expect(() => {ms932Encoder.encode("\u7289")}).to.throw(Error, "EncodingError U+7289");
expect(() => {ms932Encoder.encode("\u728A")}).to.throw(Error, "EncodingError U+728A");
expect(() => {ms932Encoder.encode("\u728B")}).to.throw(Error, "EncodingError U+728B");
expect(() => {ms932Encoder.encode("\u728C")}).to.throw(Error, "EncodingError U+728C");
expect(() => {ms932Encoder.encode("\u728D")}).to.throw(Error, "EncodingError U+728D");
expect(() => {ms932Encoder.encode("\u728E")}).to.throw(Error, "EncodingError U+728E");
expect(() => {ms932Encoder.encode("\u728F")}).to.throw(Error, "EncodingError U+728F");
expect(() => {ms932Encoder.encode("\u7290")}).to.throw(Error, "EncodingError U+7290");
expect(() => {ms932Encoder.encode("\u7291")}).to.throw(Error, "EncodingError U+7291");
r = r && ([...ms932Encoder.encode("犒")].join(",") === "224,181"); // U+7292
expect(() => {ms932Encoder.encode("\u7293")}).to.throw(Error, "EncodingError U+7293");
expect(() => {ms932Encoder.encode("\u7294")}).to.throw(Error, "EncodingError U+7294");
expect(() => {ms932Encoder.encode("\u7295")}).to.throw(Error, "EncodingError U+7295");
r = r && ([...ms932Encoder.encode("犖")].join(",") === "224,182"); // U+7296
expect(() => {ms932Encoder.encode("\u7297")}).to.throw(Error, "EncodingError U+7297");
expect(() => {ms932Encoder.encode("\u7298")}).to.throw(Error, "EncodingError U+7298");
expect(() => {ms932Encoder.encode("\u7299")}).to.throw(Error, "EncodingError U+7299");
expect(() => {ms932Encoder.encode("\u729A")}).to.throw(Error, "EncodingError U+729A");
expect(() => {ms932Encoder.encode("\u729B")}).to.throw(Error, "EncodingError U+729B");
expect(() => {ms932Encoder.encode("\u729C")}).to.throw(Error, "EncodingError U+729C");
expect(() => {ms932Encoder.encode("\u729D")}).to.throw(Error, "EncodingError U+729D");
expect(() => {ms932Encoder.encode("\u729E")}).to.throw(Error, "EncodingError U+729E");
expect(() => {ms932Encoder.encode("\u729F")}).to.throw(Error, "EncodingError U+729F");
r = r && ([...ms932Encoder.encode("犠")].join(",") === "139,93"); // U+72A0
expect(() => {ms932Encoder.encode("\u72A1")}).to.throw(Error, "EncodingError U+72A1");
r = r && ([...ms932Encoder.encode("犢")].join(",") === "224,183"); // U+72A2
expect(() => {ms932Encoder.encode("\u72A3")}).to.throw(Error, "EncodingError U+72A3");
expect(() => {ms932Encoder.encode("\u72A4")}).to.throw(Error, "EncodingError U+72A4");
expect(() => {ms932Encoder.encode("\u72A5")}).to.throw(Error, "EncodingError U+72A5");
expect(() => {ms932Encoder.encode("\u72A6")}).to.throw(Error, "EncodingError U+72A6");
r = r && ([...ms932Encoder.encode("犧")].join(",") === "224,184"); // U+72A7
expect(() => {ms932Encoder.encode("\u72A8")}).to.throw(Error, "EncodingError U+72A8");
expect(() => {ms932Encoder.encode("\u72A9")}).to.throw(Error, "EncodingError U+72A9");
expect(() => {ms932Encoder.encode("\u72AA")}).to.throw(Error, "EncodingError U+72AA");
expect(() => {ms932Encoder.encode("\u72AB")}).to.throw(Error, "EncodingError U+72AB");
r = r && ([...ms932Encoder.encode("犬")].join(",") === "140,162"); // U+72AC
expect(() => {ms932Encoder.encode("\u72AD")}).to.throw(Error, "EncodingError U+72AD");
expect(() => {ms932Encoder.encode("\u72AE")}).to.throw(Error, "EncodingError U+72AE");
r = r && ([...ms932Encoder.encode("犯")].join(",") === "148,198"); // U+72AF
expect(() => {ms932Encoder.encode("\u72B0")}).to.throw(Error, "EncodingError U+72B0");
r = r && ([...ms932Encoder.encode("犱犲")].join(",") === "251,91,224,186"); // U+72B1
expect(() => {ms932Encoder.encode("\u72B3")}).to.throw(Error, "EncodingError U+72B3");
expect(() => {ms932Encoder.encode("\u72B4")}).to.throw(Error, "EncodingError U+72B4");
expect(() => {ms932Encoder.encode("\u72B5")}).to.throw(Error, "EncodingError U+72B5");
r = r && ([...ms932Encoder.encode("状")].join(",") === "143,243"); // U+72B6
expect(() => {ms932Encoder.encode("\u72B7")}).to.throw(Error, "EncodingError U+72B7");
expect(() => {ms932Encoder.encode("\u72B8")}).to.throw(Error, "EncodingError U+72B8");
r = r && ([...ms932Encoder.encode("犹")].join(",") === "224,185"); // U+72B9
expect(() => {ms932Encoder.encode("\u72BA")}).to.throw(Error, "EncodingError U+72BA");
expect(() => {ms932Encoder.encode("\u72BB")}).to.throw(Error, "EncodingError U+72BB");
expect(() => {ms932Encoder.encode("\u72BC")}).to.throw(Error, "EncodingError U+72BC");
expect(() => {ms932Encoder.encode("\u72BD")}).to.throw(Error, "EncodingError U+72BD");
r = r && ([...ms932Encoder.encode("犾")].join(",") === "251,92"); // U+72BE
expect(() => {ms932Encoder.encode("\u72BF")}).to.throw(Error, "EncodingError U+72BF");
expect(() => {ms932Encoder.encode("\u72C0")}).to.throw(Error, "EncodingError U+72C0");
expect(() => {ms932Encoder.encode("\u72C1")}).to.throw(Error, "EncodingError U+72C1");
r = r && ([...ms932Encoder.encode("狂狃狄")].join(",") === "139,182,224,187,224,189"); // U+72C2
expect(() => {ms932Encoder.encode("\u72C5")}).to.throw(Error, "EncodingError U+72C5");
r = r && ([...ms932Encoder.encode("狆")].join(",") === "224,188"); // U+72C6
expect(() => {ms932Encoder.encode("\u72C7")}).to.throw(Error, "EncodingError U+72C7");
expect(() => {ms932Encoder.encode("\u72C8")}).to.throw(Error, "EncodingError U+72C8");
expect(() => {ms932Encoder.encode("\u72C9")}).to.throw(Error, "EncodingError U+72C9");
expect(() => {ms932Encoder.encode("\u72CA")}).to.throw(Error, "EncodingError U+72CA");
expect(() => {ms932Encoder.encode("\u72CB")}).to.throw(Error, "EncodingError U+72CB");
expect(() => {ms932Encoder.encode("\u72CC")}).to.throw(Error, "EncodingError U+72CC");
expect(() => {ms932Encoder.encode("\u72CD")}).to.throw(Error, "EncodingError U+72CD");
r = r && ([...ms932Encoder.encode("狎")].join(",") === "224,190"); // U+72CE
expect(() => {ms932Encoder.encode("\u72CF")}).to.throw(Error, "EncodingError U+72CF");
r = r && ([...ms932Encoder.encode("狐")].join(",") === "140,207"); // U+72D0
expect(() => {ms932Encoder.encode("\u72D1")}).to.throw(Error, "EncodingError U+72D1");
r = r && ([...ms932Encoder.encode("狒")].join(",") === "224,191"); // U+72D2
expect(() => {ms932Encoder.encode("\u72D3")}).to.throw(Error, "EncodingError U+72D3");
expect(() => {ms932Encoder.encode("\u72D4")}).to.throw(Error, "EncodingError U+72D4");
expect(() => {ms932Encoder.encode("\u72D5")}).to.throw(Error, "EncodingError U+72D5");
expect(() => {ms932Encoder.encode("\u72D6")}).to.throw(Error, "EncodingError U+72D6");
r = r && ([...ms932Encoder.encode("狗")].join(",") === "139,231"); // U+72D7
expect(() => {ms932Encoder.encode("\u72D8")}).to.throw(Error, "EncodingError U+72D8");
r = r && ([...ms932Encoder.encode("狙")].join(",") === "145,95"); // U+72D9
expect(() => {ms932Encoder.encode("\u72DA")}).to.throw(Error, "EncodingError U+72DA");
r = r && ([...ms932Encoder.encode("狛")].join(",") === "141,157"); // U+72DB
expect(() => {ms932Encoder.encode("\u72DC")}).to.throw(Error, "EncodingError U+72DC");
expect(() => {ms932Encoder.encode("\u72DD")}).to.throw(Error, "EncodingError U+72DD");
expect(() => {ms932Encoder.encode("\u72DE")}).to.throw(Error, "EncodingError U+72DE");
expect(() => {ms932Encoder.encode("\u72DF")}).to.throw(Error, "EncodingError U+72DF");
r = r && ([...ms932Encoder.encode("狠狡狢")].join(",") === "224,193,224,194,224,192"); // U+72E0
expect(() => {ms932Encoder.encode("\u72E3")}).to.throw(Error, "EncodingError U+72E3");
expect(() => {ms932Encoder.encode("\u72E4")}).to.throw(Error, "EncodingError U+72E4");
expect(() => {ms932Encoder.encode("\u72E5")}).to.throw(Error, "EncodingError U+72E5");
expect(() => {ms932Encoder.encode("\u72E6")}).to.throw(Error, "EncodingError U+72E6");
expect(() => {ms932Encoder.encode("\u72E7")}).to.throw(Error, "EncodingError U+72E7");
expect(() => {ms932Encoder.encode("\u72E8")}).to.throw(Error, "EncodingError U+72E8");
r = r && ([...ms932Encoder.encode("狩")].join(",") === "142,235"); // U+72E9
expect(() => {ms932Encoder.encode("\u72EA")}).to.throw(Error, "EncodingError U+72EA");
expect(() => {ms932Encoder.encode("\u72EB")}).to.throw(Error, "EncodingError U+72EB");
r = r && ([...ms932Encoder.encode("独狭")].join(",") === "147,198,139,183"); // U+72EC
expect(() => {ms932Encoder.encode("\u72EE")}).to.throw(Error, "EncodingError U+72EE");
expect(() => {ms932Encoder.encode("\u72EF")}).to.throw(Error, "EncodingError U+72EF");
expect(() => {ms932Encoder.encode("\u72F0")}).to.throw(Error, "EncodingError U+72F0");
expect(() => {ms932Encoder.encode("\u72F1")}).to.throw(Error, "EncodingError U+72F1");
expect(() => {ms932Encoder.encode("\u72F2")}).to.throw(Error, "EncodingError U+72F2");
expect(() => {ms932Encoder.encode("\u72F3")}).to.throw(Error, "EncodingError U+72F3");
expect(() => {ms932Encoder.encode("\u72F4")}).to.throw(Error, "EncodingError U+72F4");
expect(() => {ms932Encoder.encode("\u72F5")}).to.throw(Error, "EncodingError U+72F5");
expect(() => {ms932Encoder.encode("\u72F6")}).to.throw(Error, "EncodingError U+72F6");
r = r && ([...ms932Encoder.encode("狷狸狹")].join(",") === "224,196,146,75,224,195"); // U+72F7
expect(() => {ms932Encoder.encode("\u72FA")}).to.throw(Error, "EncodingError U+72FA");
expect(() => {ms932Encoder.encode("\u72FB")}).to.throw(Error, "EncodingError U+72FB");
r = r && ([...ms932Encoder.encode("狼狽")].join(",") === "152,84,148,130"); // U+72FC
expect(() => {ms932Encoder.encode("\u72FE")}).to.throw(Error, "EncodingError U+72FE");
expect(() => {ms932Encoder.encode("\u72FF")}).to.throw(Error, "EncodingError U+72FF");
expect(() => {ms932Encoder.encode("\u7300")}).to.throw(Error, "EncodingError U+7300");
expect(() => {ms932Encoder.encode("\u7301")}).to.throw(Error, "EncodingError U+7301");
expect(() => {ms932Encoder.encode("\u7302")}).to.throw(Error, "EncodingError U+7302");
expect(() => {ms932Encoder.encode("\u7303")}).to.throw(Error, "EncodingError U+7303");
expect(() => {ms932Encoder.encode("\u7304")}).to.throw(Error, "EncodingError U+7304");
expect(() => {ms932Encoder.encode("\u7305")}).to.throw(Error, "EncodingError U+7305");
expect(() => {ms932Encoder.encode("\u7306")}).to.throw(Error, "EncodingError U+7306");
expect(() => {ms932Encoder.encode("\u7307")}).to.throw(Error, "EncodingError U+7307");
expect(() => {ms932Encoder.encode("\u7308")}).to.throw(Error, "EncodingError U+7308");
expect(() => {ms932Encoder.encode("\u7309")}).to.throw(Error, "EncodingError U+7309");
r = r && ([...ms932Encoder.encode("猊")].join(",") === "224,199"); // U+730A
expect(() => {ms932Encoder.encode("\u730B")}).to.throw(Error, "EncodingError U+730B");
expect(() => {ms932Encoder.encode("\u730C")}).to.throw(Error, "EncodingError U+730C");
expect(() => {ms932Encoder.encode("\u730D")}).to.throw(Error, "EncodingError U+730D");
expect(() => {ms932Encoder.encode("\u730E")}).to.throw(Error, "EncodingError U+730E");
expect(() => {ms932Encoder.encode("\u730F")}).to.throw(Error, "EncodingError U+730F");
expect(() => {ms932Encoder.encode("\u7310")}).to.throw(Error, "EncodingError U+7310");
expect(() => {ms932Encoder.encode("\u7311")}).to.throw(Error, "EncodingError U+7311");
expect(() => {ms932Encoder.encode("\u7312")}).to.throw(Error, "EncodingError U+7312");
expect(() => {ms932Encoder.encode("\u7313")}).to.throw(Error, "EncodingError U+7313");
expect(() => {ms932Encoder.encode("\u7314")}).to.throw(Error, "EncodingError U+7314");
expect(() => {ms932Encoder.encode("\u7315")}).to.throw(Error, "EncodingError U+7315");
r = r && ([...ms932Encoder.encode("猖猗")].join(",") === "224,201,224,198"); // U+7316
expect(() => {ms932Encoder.encode("\u7318")}).to.throw(Error, "EncodingError U+7318");
expect(() => {ms932Encoder.encode("\u7319")}).to.throw(Error, "EncodingError U+7319");
expect(() => {ms932Encoder.encode("\u731A")}).to.throw(Error, "EncodingError U+731A");
r = r && ([...ms932Encoder.encode("猛猜猝")].join(",") === "150,210,224,200,224,202"); // U+731B
expect(() => {ms932Encoder.encode("\u731E")}).to.throw(Error, "EncodingError U+731E");
r = r && ([...ms932Encoder.encode("猟")].join(",") === "151,194"); // U+731F
expect(() => {ms932Encoder.encode("\u7320")}).to.throw(Error, "EncodingError U+7320");
expect(() => {ms932Encoder.encode("\u7321")}).to.throw(Error, "EncodingError U+7321");
expect(() => {ms932Encoder.encode("\u7322")}).to.throw(Error, "EncodingError U+7322");
expect(() => {ms932Encoder.encode("\u7323")}).to.throw(Error, "EncodingError U+7323");
r = r && ([...ms932Encoder.encode("猤猥")].join(",") === "251,93,224,206"); // U+7324
expect(() => {ms932Encoder.encode("\u7326")}).to.throw(Error, "EncodingError U+7326");
expect(() => {ms932Encoder.encode("\u7327")}).to.throw(Error, "EncodingError U+7327");
expect(() => {ms932Encoder.encode("\u7328")}).to.throw(Error, "EncodingError U+7328");
r = r && ([...ms932Encoder.encode("猩猪猫")].join(",") === "224,205,146,150,148,76"); // U+7329
expect(() => {ms932Encoder.encode("\u732C")}).to.throw(Error, "EncodingError U+732C");
expect(() => {ms932Encoder.encode("\u732D")}).to.throw(Error, "EncodingError U+732D");
r = r && ([...ms932Encoder.encode("献猯")].join(",") === "140,163,224,204"); // U+732E
expect(() => {ms932Encoder.encode("\u7330")}).to.throw(Error, "EncodingError U+7330");
expect(() => {ms932Encoder.encode("\u7331")}).to.throw(Error, "EncodingError U+7331");
expect(() => {ms932Encoder.encode("\u7332")}).to.throw(Error, "EncodingError U+7332");
expect(() => {ms932Encoder.encode("\u7333")}).to.throw(Error, "EncodingError U+7333");
r = r && ([...ms932Encoder.encode("猴")].join(",") === "224,203"); // U+7334
expect(() => {ms932Encoder.encode("\u7335")}).to.throw(Error, "EncodingError U+7335");
r = r && ([...ms932Encoder.encode("猶猷")].join(",") === "151,80,151,81"); // U+7336
expect(() => {ms932Encoder.encode("\u7338")}).to.throw(Error, "EncodingError U+7338");
expect(() => {ms932Encoder.encode("\u7339")}).to.throw(Error, "EncodingError U+7339");
expect(() => {ms932Encoder.encode("\u733A")}).to.throw(Error, "EncodingError U+733A");
expect(() => {ms932Encoder.encode("\u733B")}).to.throw(Error, "EncodingError U+733B");
expect(() => {ms932Encoder.encode("\u733C")}).to.throw(Error, "EncodingError U+733C");
expect(() => {ms932Encoder.encode("\u733D")}).to.throw(Error, "EncodingError U+733D");
r = r && ([...ms932Encoder.encode("猾猿")].join(",") === "224,207,137,142"); // U+733E
expect(() => {ms932Encoder.encode("\u7340")}).to.throw(Error, "EncodingError U+7340");
expect(() => {ms932Encoder.encode("\u7341")}).to.throw(Error, "EncodingError U+7341");
expect(() => {ms932Encoder.encode("\u7342")}).to.throw(Error, "EncodingError U+7342");
expect(() => {ms932Encoder.encode("\u7343")}).to.throw(Error, "EncodingError U+7343");
r = r && ([...ms932Encoder.encode("獄獅")].join(",") === "141,150,142,130"); // U+7344
expect(() => {ms932Encoder.encode("\u7346")}).to.throw(Error, "EncodingError U+7346");
expect(() => {ms932Encoder.encode("\u7347")}).to.throw(Error, "EncodingError U+7347");
expect(() => {ms932Encoder.encode("\u7348")}).to.throw(Error, "EncodingError U+7348");
expect(() => {ms932Encoder.encode("\u7349")}).to.throw(Error, "EncodingError U+7349");
expect(() => {ms932Encoder.encode("\u734A")}).to.throw(Error, "EncodingError U+734A");
expect(() => {ms932Encoder.encode("\u734B")}).to.throw(Error, "EncodingError U+734B");
expect(() => {ms932Encoder.encode("\u734C")}).to.throw(Error, "EncodingError U+734C");
expect(() => {ms932Encoder.encode("\u734D")}).to.throw(Error, "EncodingError U+734D");
r = r && ([...ms932Encoder.encode("獎獏")].join(",") === "224,208,224,209"); // U+734E
expect(() => {ms932Encoder.encode("\u7350")}).to.throw(Error, "EncodingError U+7350");
expect(() => {ms932Encoder.encode("\u7351")}).to.throw(Error, "EncodingError U+7351");
expect(() => {ms932Encoder.encode("\u7352")}).to.throw(Error, "EncodingError U+7352");
expect(() => {ms932Encoder.encode("\u7353")}).to.throw(Error, "EncodingError U+7353");
expect(() => {ms932Encoder.encode("\u7354")}).to.throw(Error, "EncodingError U+7354");
expect(() => {ms932Encoder.encode("\u7355")}).to.throw(Error, "EncodingError U+7355");
expect(() => {ms932Encoder.encode("\u7356")}).to.throw(Error, "EncodingError U+7356");
r = r && ([...ms932Encoder.encode("獗")].join(",") === "224,211"); // U+7357
expect(() => {ms932Encoder.encode("\u7358")}).to.throw(Error, "EncodingError U+7358");
expect(() => {ms932Encoder.encode("\u7359")}).to.throw(Error, "EncodingError U+7359");
expect(() => {ms932Encoder.encode("\u735A")}).to.throw(Error, "EncodingError U+735A");
expect(() => {ms932Encoder.encode("\u735B")}).to.throw(Error, "EncodingError U+735B");
expect(() => {ms932Encoder.encode("\u735C")}).to.throw(Error, "EncodingError U+735C");
expect(() => {ms932Encoder.encode("\u735D")}).to.throw(Error, "EncodingError U+735D");
expect(() => {ms932Encoder.encode("\u735E")}).to.throw(Error, "EncodingError U+735E");
expect(() => {ms932Encoder.encode("\u735F")}).to.throw(Error, "EncodingError U+735F");
expect(() => {ms932Encoder.encode("\u7360")}).to.throw(Error, "EncodingError U+7360");
expect(() => {ms932Encoder.encode("\u7361")}).to.throw(Error, "EncodingError U+7361");
expect(() => {ms932Encoder.encode("\u7362")}).to.throw(Error, "EncodingError U+7362");
r = r && ([...ms932Encoder.encode("獣")].join(",") === "143,98"); // U+7363
expect(() => {ms932Encoder.encode("\u7364")}).to.throw(Error, "EncodingError U+7364");
expect(() => {ms932Encoder.encode("\u7365")}).to.throw(Error, "EncodingError U+7365");
expect(() => {ms932Encoder.encode("\u7366")}).to.throw(Error, "EncodingError U+7366");
expect(() => {ms932Encoder.encode("\u7367")}).to.throw(Error, "EncodingError U+7367");
r = r && ([...ms932Encoder.encode("獨")].join(",") === "224,213"); // U+7368
expect(() => {ms932Encoder.encode("\u7369")}).to.throw(Error, "EncodingError U+7369");
r = r && ([...ms932Encoder.encode("獪")].join(",") === "224,212"); // U+736A
expect(() => {ms932Encoder.encode("\u736B")}).to.throw(Error, "EncodingError U+736B");
expect(() => {ms932Encoder.encode("\u736C")}).to.throw(Error, "EncodingError U+736C");
expect(() => {ms932Encoder.encode("\u736D")}).to.throw(Error, "EncodingError U+736D");
expect(() => {ms932Encoder.encode("\u736E")}).to.throw(Error, "EncodingError U+736E");
expect(() => {ms932Encoder.encode("\u736F")}).to.throw(Error, "EncodingError U+736F");
r = r && ([...ms932Encoder.encode("獰")].join(",") === "224,214"); // U+7370
expect(() => {ms932Encoder.encode("\u7371")}).to.throw(Error, "EncodingError U+7371");
r = r && ([...ms932Encoder.encode("獲")].join(",") === "138,108"); // U+7372
expect(() => {ms932Encoder.encode("\u7373")}).to.throw(Error, "EncodingError U+7373");
expect(() => {ms932Encoder.encode("\u7374")}).to.throw(Error, "EncodingError U+7374");
r = r && ([...ms932Encoder.encode("獵")].join(",") === "224,216"); // U+7375
expect(() => {ms932Encoder.encode("\u7376")}).to.throw(Error, "EncodingError U+7376");
r = r && ([...ms932Encoder.encode("獷獸")].join(",") === "251,95,224,215"); // U+7377
expect(() => {ms932Encoder.encode("\u7379")}).to.throw(Error, "EncodingError U+7379");
r = r && ([...ms932Encoder.encode("獺獻")].join(",") === "224,218,224,217"); // U+737A
expect(() => {ms932Encoder.encode("\u737C")}).to.throw(Error, "EncodingError U+737C");
expect(() => {ms932Encoder.encode("\u737D")}).to.throw(Error, "EncodingError U+737D");
expect(() => {ms932Encoder.encode("\u737E")}).to.throw(Error, "EncodingError U+737E");
expect(() => {ms932Encoder.encode("\u737F")}).to.throw(Error, "EncodingError U+737F");
expect(() => {ms932Encoder.encode("\u7380")}).to.throw(Error, "EncodingError U+7380");
expect(() => {ms932Encoder.encode("\u7381")}).to.throw(Error, "EncodingError U+7381");
expect(() => {ms932Encoder.encode("\u7382")}).to.throw(Error, "EncodingError U+7382");
expect(() => {ms932Encoder.encode("\u7383")}).to.throw(Error, "EncodingError U+7383");
r = r && ([...ms932Encoder.encode("玄")].join(",") === "140,186"); // U+7384
expect(() => {ms932Encoder.encode("\u7385")}).to.throw(Error, "EncodingError U+7385");
expect(() => {ms932Encoder.encode("\u7386")}).to.throw(Error, "EncodingError U+7386");
r = r && ([...ms932Encoder.encode("率")].join(",") === "151,166"); // U+7387
expect(() => {ms932Encoder.encode("\u7388")}).to.throw(Error, "EncodingError U+7388");
r = r && ([...ms932Encoder.encode("玉")].join(",") === "139,202"); // U+7389
expect(() => {ms932Encoder.encode("\u738A")}).to.throw(Error, "EncodingError U+738A");
r = r && ([...ms932Encoder.encode("王")].join(",") === "137,164"); // U+738B
expect(() => {ms932Encoder.encode("\u738C")}).to.throw(Error, "EncodingError U+738C");
expect(() => {ms932Encoder.encode("\u738D")}).to.throw(Error, "EncodingError U+738D");
expect(() => {ms932Encoder.encode("\u738E")}).to.throw(Error, "EncodingError U+738E");
expect(() => {ms932Encoder.encode("\u738F")}).to.throw(Error, "EncodingError U+738F");
expect(() => {ms932Encoder.encode("\u7390")}).to.throw(Error, "EncodingError U+7390");
expect(() => {ms932Encoder.encode("\u7391")}).to.throw(Error, "EncodingError U+7391");
expect(() => {ms932Encoder.encode("\u7392")}).to.throw(Error, "EncodingError U+7392");
expect(() => {ms932Encoder.encode("\u7393")}).to.throw(Error, "EncodingError U+7393");
expect(() => {ms932Encoder.encode("\u7394")}).to.throw(Error, "EncodingError U+7394");
expect(() => {ms932Encoder.encode("\u7395")}).to.throw(Error, "EncodingError U+7395");
r = r && ([...ms932Encoder.encode("玖")].join(",") === "139,232"); // U+7396
expect(() => {ms932Encoder.encode("\u7397")}).to.throw(Error, "EncodingError U+7397");
expect(() => {ms932Encoder.encode("\u7398")}).to.throw(Error, "EncodingError U+7398");
expect(() => {ms932Encoder.encode("\u7399")}).to.throw(Error, "EncodingError U+7399");
expect(() => {ms932Encoder.encode("\u739A")}).to.throw(Error, "EncodingError U+739A");
expect(() => {ms932Encoder.encode("\u739B")}).to.throw(Error, "EncodingError U+739B");
expect(() => {ms932Encoder.encode("\u739C")}).to.throw(Error, "EncodingError U+739C");
expect(() => {ms932Encoder.encode("\u739D")}).to.throw(Error, "EncodingError U+739D");
expect(() => {ms932Encoder.encode("\u739E")}).to.throw(Error, "EncodingError U+739E");
expect(() => {ms932Encoder.encode("\u739F")}).to.throw(Error, "EncodingError U+739F");
expect(() => {ms932Encoder.encode("\u73A0")}).to.throw(Error, "EncodingError U+73A0");
expect(() => {ms932Encoder.encode("\u73A1")}).to.throw(Error, "EncodingError U+73A1");
expect(() => {ms932Encoder.encode("\u73A2")}).to.throw(Error, "EncodingError U+73A2");
expect(() => {ms932Encoder.encode("\u73A3")}).to.throw(Error, "EncodingError U+73A3");
expect(() => {ms932Encoder.encode("\u73A4")}).to.throw(Error, "EncodingError U+73A4");
expect(() => {ms932Encoder.encode("\u73A5")}).to.throw(Error, "EncodingError U+73A5");
expect(() => {ms932Encoder.encode("\u73A6")}).to.throw(Error, "EncodingError U+73A6");
expect(() => {ms932Encoder.encode("\u73A7")}).to.throw(Error, "EncodingError U+73A7");
expect(() => {ms932Encoder.encode("\u73A8")}).to.throw(Error, "EncodingError U+73A8");
r = r && ([...ms932Encoder.encode("玩")].join(",") === "138,223"); // U+73A9
expect(() => {ms932Encoder.encode("\u73AA")}).to.throw(Error, "EncodingError U+73AA");
expect(() => {ms932Encoder.encode("\u73AB")}).to.throw(Error, "EncodingError U+73AB");
expect(() => {ms932Encoder.encode("\u73AC")}).to.throw(Error, "EncodingError U+73AC");
expect(() => {ms932Encoder.encode("\u73AD")}).to.throw(Error, "EncodingError U+73AD");
expect(() => {ms932Encoder.encode("\u73AE")}).to.throw(Error, "EncodingError U+73AE");
expect(() => {ms932Encoder.encode("\u73AF")}).to.throw(Error, "EncodingError U+73AF");
expect(() => {ms932Encoder.encode("\u73B0")}).to.throw(Error, "EncodingError U+73B0");
expect(() => {ms932Encoder.encode("\u73B1")}).to.throw(Error, "EncodingError U+73B1");
r = r && ([...ms932Encoder.encode("玲玳")].join(",") === "151,230,224,220"); // U+73B2
expect(() => {ms932Encoder.encode("\u73B4")}).to.throw(Error, "EncodingError U+73B4");
expect(() => {ms932Encoder.encode("\u73B5")}).to.throw(Error, "EncodingError U+73B5");
expect(() => {ms932Encoder.encode("\u73B6")}).to.throw(Error, "EncodingError U+73B6");
expect(() => {ms932Encoder.encode("\u73B7")}).to.throw(Error, "EncodingError U+73B7");
expect(() => {ms932Encoder.encode("\u73B8")}).to.throw(Error, "EncodingError U+73B8");
expect(() => {ms932Encoder.encode("\u73B9")}).to.throw(Error, "EncodingError U+73B9");
expect(() => {ms932Encoder.encode("\u73BA")}).to.throw(Error, "EncodingError U+73BA");
r = r && ([...ms932Encoder.encode("玻")].join(",") === "224,222"); // U+73BB
expect(() => {ms932Encoder.encode("\u73BC")}).to.throw(Error, "EncodingError U+73BC");
r = r && ([...ms932Encoder.encode("玽")].join(",") === "251,96"); // U+73BD
expect(() => {ms932Encoder.encode("\u73BE")}).to.throw(Error, "EncodingError U+73BE");
expect(() => {ms932Encoder.encode("\u73BF")}).to.throw(Error, "EncodingError U+73BF");
r = r && ([...ms932Encoder.encode("珀")].join(",") === "224,223"); // U+73C0
expect(() => {ms932Encoder.encode("\u73C1")}).to.throw(Error, "EncodingError U+73C1");
r = r && ([...ms932Encoder.encode("珂")].join(",") === "137,207"); // U+73C2
expect(() => {ms932Encoder.encode("\u73C3")}).to.throw(Error, "EncodingError U+73C3");
expect(() => {ms932Encoder.encode("\u73C4")}).to.throw(Error, "EncodingError U+73C4");
expect(() => {ms932Encoder.encode("\u73C5")}).to.throw(Error, "EncodingError U+73C5");
expect(() => {ms932Encoder.encode("\u73C6")}).to.throw(Error, "EncodingError U+73C6");
expect(() => {ms932Encoder.encode("\u73C7")}).to.throw(Error, "EncodingError U+73C7");
r = r && ([...ms932Encoder.encode("珈珉珊")].join(",") === "224,219,251,97,142,88"); // U+73C8
expect(() => {ms932Encoder.encode("\u73CB")}).to.throw(Error, "EncodingError U+73CB");
expect(() => {ms932Encoder.encode("\u73CC")}).to.throw(Error, "EncodingError U+73CC");
r = r && ([...ms932Encoder.encode("珍珎")].join(",") === "146,191,224,221"); // U+73CD
expect(() => {ms932Encoder.encode("\u73CF")}).to.throw(Error, "EncodingError U+73CF");
expect(() => {ms932Encoder.encode("\u73D0")}).to.throw(Error, "EncodingError U+73D0");
expect(() => {ms932Encoder.encode("\u73D1")}).to.throw(Error, "EncodingError U+73D1");
r = r && ([...ms932Encoder.encode("珒")].join(",") === "251,100"); // U+73D2
expect(() => {ms932Encoder.encode("\u73D3")}).to.throw(Error, "EncodingError U+73D3");
expect(() => {ms932Encoder.encode("\u73D4")}).to.throw(Error, "EncodingError U+73D4");
expect(() => {ms932Encoder.encode("\u73D5")}).to.throw(Error, "EncodingError U+73D5");
r = r && ([...ms932Encoder.encode("珖")].join(",") === "251,98"); // U+73D6
expect(() => {ms932Encoder.encode("\u73D7")}).to.throw(Error, "EncodingError U+73D7");
expect(() => {ms932Encoder.encode("\u73D8")}).to.throw(Error, "EncodingError U+73D8");
expect(() => {ms932Encoder.encode("\u73D9")}).to.throw(Error, "EncodingError U+73D9");
expect(() => {ms932Encoder.encode("\u73DA")}).to.throw(Error, "EncodingError U+73DA");
expect(() => {ms932Encoder.encode("\u73DB")}).to.throw(Error, "EncodingError U+73DB");
expect(() => {ms932Encoder.encode("\u73DC")}).to.throw(Error, "EncodingError U+73DC");
expect(() => {ms932Encoder.encode("\u73DD")}).to.throw(Error, "EncodingError U+73DD");
r = r && ([...ms932Encoder.encode("珞")].join(",") === "224,226"); // U+73DE
expect(() => {ms932Encoder.encode("\u73DF")}).to.throw(Error, "EncodingError U+73DF");
r = r && ([...ms932Encoder.encode("珠")].join(",") === "142,236"); // U+73E0
expect(() => {ms932Encoder.encode("\u73E1")}).to.throw(Error, "EncodingError U+73E1");
expect(() => {ms932Encoder.encode("\u73E2")}).to.throw(Error, "EncodingError U+73E2");
r = r && ([...ms932Encoder.encode("珣")].join(",") === "251,99"); // U+73E3
expect(() => {ms932Encoder.encode("\u73E4")}).to.throw(Error, "EncodingError U+73E4");
r = r && ([...ms932Encoder.encode("珥")].join(",") === "224,224"); // U+73E5
expect(() => {ms932Encoder.encode("\u73E6")}).to.throw(Error, "EncodingError U+73E6");
expect(() => {ms932Encoder.encode("\u73E7")}).to.throw(Error, "EncodingError U+73E7");
expect(() => {ms932Encoder.encode("\u73E8")}).to.throw(Error, "EncodingError U+73E8");
expect(() => {ms932Encoder.encode("\u73E9")}).to.throw(Error, "EncodingError U+73E9");
r = r && ([...ms932Encoder.encode("珪")].join(",") === "140,93"); // U+73EA
expect(() => {ms932Encoder.encode("\u73EB")}).to.throw(Error, "EncodingError U+73EB");
expect(() => {ms932Encoder.encode("\u73EC")}).to.throw(Error, "EncodingError U+73EC");
r = r && ([...ms932Encoder.encode("班珮")].join(",") === "148,199,224,225"); // U+73ED
expect(() => {ms932Encoder.encode("\u73EF")}).to.throw(Error, "EncodingError U+73EF");
expect(() => {ms932Encoder.encode("\u73F0")}).to.throw(Error, "EncodingError U+73F0");
r = r && ([...ms932Encoder.encode("珱")].join(",") === "224,252"); // U+73F1
expect(() => {ms932Encoder.encode("\u73F2")}).to.throw(Error, "EncodingError U+73F2");
expect(() => {ms932Encoder.encode("\u73F3")}).to.throw(Error, "EncodingError U+73F3");
expect(() => {ms932Encoder.encode("\u73F4")}).to.throw(Error, "EncodingError U+73F4");
r = r && ([...ms932Encoder.encode("珵")].join(",") === "251,102"); // U+73F5
expect(() => {ms932Encoder.encode("\u73F6")}).to.throw(Error, "EncodingError U+73F6");
expect(() => {ms932Encoder.encode("\u73F7")}).to.throw(Error, "EncodingError U+73F7");
r = r && ([...ms932Encoder.encode("珸")].join(",") === "224,231"); // U+73F8
expect(() => {ms932Encoder.encode("\u73F9")}).to.throw(Error, "EncodingError U+73F9");
expect(() => {ms932Encoder.encode("\u73FA")}).to.throw(Error, "EncodingError U+73FA");
expect(() => {ms932Encoder.encode("\u73FB")}).to.throw(Error, "EncodingError U+73FB");
expect(() => {ms932Encoder.encode("\u73FC")}).to.throw(Error, "EncodingError U+73FC");
expect(() => {ms932Encoder.encode("\u73FD")}).to.throw(Error, "EncodingError U+73FD");
r = r && ([...ms932Encoder.encode("現")].join(",") === "140,187"); // U+73FE
expect(() => {ms932Encoder.encode("\u73FF")}).to.throw(Error, "EncodingError U+73FF");

expect(r).to.equal(true);

  });

});
