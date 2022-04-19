import { expect } from '@esm-bundle/chai';
import { Ms932 } from "../../dist/index.js";

describe("Ms932.Encoder.prototype.encode 10", () => {

  it("encode(string) - U+9000-U+93FF", () => {
    const ms932Encoder = new Ms932.Encoder({fatal:true});

    let r = true;
r = r && ([...ms932Encoder.encode("退送")].join(",") === "145,222,145,151"); // U+9000
expect(() => {ms932Encoder.encode("\u9002")}).to.throw(Error, "EncodingError U+9002");
r = r && ([...ms932Encoder.encode("逃")].join(",") === "147,166"); // U+9003
expect(() => {ms932Encoder.encode("\u9004")}).to.throw(Error, "EncodingError U+9004");
r = r && ([...ms932Encoder.encode("逅逆")].join(",") === "231,144,139,116"); // U+9005
expect(() => {ms932Encoder.encode("\u9007")}).to.throw(Error, "EncodingError U+9007");
expect(() => {ms932Encoder.encode("\u9008")}).to.throw(Error, "EncodingError U+9008");
expect(() => {ms932Encoder.encode("\u9009")}).to.throw(Error, "EncodingError U+9009");
expect(() => {ms932Encoder.encode("\u900A")}).to.throw(Error, "EncodingError U+900A");
r = r && ([...ms932Encoder.encode("逋")].join(",") === "231,153"); // U+900B
expect(() => {ms932Encoder.encode("\u900C")}).to.throw(Error, "EncodingError U+900C");
r = r && ([...ms932Encoder.encode("逍逎透逐逑")].join(",") === "231,150,231,163,147,167,146,128,231,147"); // U+900D
expect(() => {ms932Encoder.encode("\u9012")}).to.throw(Error, "EncodingError U+9012");
r = r && ([...ms932Encoder.encode("逓途逕逖逗")].join(",") === "146,252,147,114,231,148,231,152,144,128"); // U+9013
expect(() => {ms932Encoder.encode("\u9018")}).to.throw(Error, "EncodingError U+9018");
r = r && ([...ms932Encoder.encode("這通")].join(",") === "148,135,146,202"); // U+9019
expect(() => {ms932Encoder.encode("\u901B")}).to.throw(Error, "EncodingError U+901B");
expect(() => {ms932Encoder.encode("\u901C")}).to.throw(Error, "EncodingError U+901C");
r = r && ([...ms932Encoder.encode("逝逞速造逡逢連")].join(",") === "144,192,231,151,145,172,145,162,231,149,136,167,152,65"); // U+901D
expect(() => {ms932Encoder.encode("\u9024")}).to.throw(Error, "EncodingError U+9024");
expect(() => {ms932Encoder.encode("\u9025")}).to.throw(Error, "EncodingError U+9025");
expect(() => {ms932Encoder.encode("\u9026")}).to.throw(Error, "EncodingError U+9026");
r = r && ([...ms932Encoder.encode("逧")].join(",") === "231,154"); // U+9027
expect(() => {ms932Encoder.encode("\u9028")}).to.throw(Error, "EncodingError U+9028");
expect(() => {ms932Encoder.encode("\u9029")}).to.throw(Error, "EncodingError U+9029");
expect(() => {ms932Encoder.encode("\u902A")}).to.throw(Error, "EncodingError U+902A");
expect(() => {ms932Encoder.encode("\u902B")}).to.throw(Error, "EncodingError U+902B");
expect(() => {ms932Encoder.encode("\u902C")}).to.throw(Error, "EncodingError U+902C");
expect(() => {ms932Encoder.encode("\u902D")}).to.throw(Error, "EncodingError U+902D");
r = r && ([...ms932Encoder.encode("逮")].join(",") === "145,223"); // U+902E
expect(() => {ms932Encoder.encode("\u902F")}).to.throw(Error, "EncodingError U+902F");
expect(() => {ms932Encoder.encode("\u9030")}).to.throw(Error, "EncodingError U+9030");
r = r && ([...ms932Encoder.encode("週進")].join(",") === "143,84,144,105"); // U+9031
expect(() => {ms932Encoder.encode("\u9033")}).to.throw(Error, "EncodingError U+9033");
expect(() => {ms932Encoder.encode("\u9034")}).to.throw(Error, "EncodingError U+9034");
r = r && ([...ms932Encoder.encode("逵逶")].join(",") === "231,156,231,155"); // U+9035
expect(() => {ms932Encoder.encode("\u9037")}).to.throw(Error, "EncodingError U+9037");
r = r && ([...ms932Encoder.encode("逸逹")].join(",") === "136,237,231,157"); // U+9038
expect(() => {ms932Encoder.encode("\u903A")}).to.throw(Error, "EncodingError U+903A");
expect(() => {ms932Encoder.encode("\u903B")}).to.throw(Error, "EncodingError U+903B");
r = r && ([...ms932Encoder.encode("逼")].join(",") === "149,78"); // U+903C
expect(() => {ms932Encoder.encode("\u903D")}).to.throw(Error, "EncodingError U+903D");
r = r && ([...ms932Encoder.encode("逾")].join(",") === "231,165"); // U+903E
expect(() => {ms932Encoder.encode("\u903F")}).to.throw(Error, "EncodingError U+903F");
expect(() => {ms932Encoder.encode("\u9040")}).to.throw(Error, "EncodingError U+9040");
r = r && ([...ms932Encoder.encode("遁遂")].join(",") === "147,217,144,139"); // U+9041
expect(() => {ms932Encoder.encode("\u9043")}).to.throw(Error, "EncodingError U+9043");
expect(() => {ms932Encoder.encode("\u9044")}).to.throw(Error, "EncodingError U+9044");
r = r && ([...ms932Encoder.encode("遅")].join(",") === "146,120"); // U+9045
expect(() => {ms932Encoder.encode("\u9046")}).to.throw(Error, "EncodingError U+9046");
r = r && ([...ms932Encoder.encode("遇")].join(",") === "139,246"); // U+9047
expect(() => {ms932Encoder.encode("\u9048")}).to.throw(Error, "EncodingError U+9048");
r = r && ([...ms932Encoder.encode("遉遊運")].join(",") === "231,164,151,86,137,94"); // U+9049
expect(() => {ms932Encoder.encode("\u904C")}).to.throw(Error, "EncodingError U+904C");
r = r && ([...ms932Encoder.encode("遍過遏遐遑遒道達違遖")].join(",") === "149,213,137,223,231,159,231,160,231,161,231,162,147,185,146,66,136,225,231,166"); // U+904D
expect(() => {ms932Encoder.encode("\u9057")}).to.throw(Error, "EncodingError U+9057");
r = r && ([...ms932Encoder.encode("遘遙")].join(",") === "231,167,234,161"); // U+9058
expect(() => {ms932Encoder.encode("\u905A")}).to.throw(Error, "EncodingError U+905A");
expect(() => {ms932Encoder.encode("\u905B")}).to.throw(Error, "EncodingError U+905B");
r = r && ([...ms932Encoder.encode("遜")].join(",") === "145,187"); // U+905C
expect(() => {ms932Encoder.encode("\u905D")}).to.throw(Error, "EncodingError U+905D");
r = r && ([...ms932Encoder.encode("遞")].join(",") === "231,168"); // U+905E
expect(() => {ms932Encoder.encode("\u905F")}).to.throw(Error, "EncodingError U+905F");
r = r && ([...ms932Encoder.encode("遠遡")].join(",") === "137,147,145,107"); // U+9060
expect(() => {ms932Encoder.encode("\u9062")}).to.throw(Error, "EncodingError U+9062");
r = r && ([...ms932Encoder.encode("遣")].join(",") === "140,173"); // U+9063
expect(() => {ms932Encoder.encode("\u9064")}).to.throw(Error, "EncodingError U+9064");
r = r && ([...ms932Encoder.encode("遥")].join(",") === "151,121"); // U+9065
expect(() => {ms932Encoder.encode("\u9066")}).to.throw(Error, "EncodingError U+9066");
r = r && ([...ms932Encoder.encode("遧遨適")].join(",") === "251,181,231,169,147,75"); // U+9067
expect(() => {ms932Encoder.encode("\u906A")}).to.throw(Error, "EncodingError U+906A");
expect(() => {ms932Encoder.encode("\u906B")}).to.throw(Error, "EncodingError U+906B");
expect(() => {ms932Encoder.encode("\u906C")}).to.throw(Error, "EncodingError U+906C");
r = r && ([...ms932Encoder.encode("遭遮遯")].join(",") === "145,152,142,213,231,170"); // U+906D
expect(() => {ms932Encoder.encode("\u9070")}).to.throw(Error, "EncodingError U+9070");
expect(() => {ms932Encoder.encode("\u9071")}).to.throw(Error, "EncodingError U+9071");
r = r && ([...ms932Encoder.encode("遲")].join(",") === "231,173"); // U+9072
expect(() => {ms932Encoder.encode("\u9073")}).to.throw(Error, "EncodingError U+9073");
expect(() => {ms932Encoder.encode("\u9074")}).to.throw(Error, "EncodingError U+9074");
r = r && ([...ms932Encoder.encode("遵遶遷選")].join(",") === "143,133,231,171,145,74,145,73"); // U+9075
expect(() => {ms932Encoder.encode("\u9079")}).to.throw(Error, "EncodingError U+9079");
r = r && ([...ms932Encoder.encode("遺")].join(",") === "136,226"); // U+907A
expect(() => {ms932Encoder.encode("\u907B")}).to.throw(Error, "EncodingError U+907B");
r = r && ([...ms932Encoder.encode("遼遽")].join(",") === "151,201,231,175"); // U+907C
expect(() => {ms932Encoder.encode("\u907E")}).to.throw(Error, "EncodingError U+907E");
r = r && ([...ms932Encoder.encode("避邀邁邂邃還")].join(",") === "148,240,231,177,231,176,231,174,226,132,138,210"); // U+907F
expect(() => {ms932Encoder.encode("\u9085")}).to.throw(Error, "EncodingError U+9085");
expect(() => {ms932Encoder.encode("\u9086")}).to.throw(Error, "EncodingError U+9086");
r = r && ([...ms932Encoder.encode("邇")].join(",") === "231,142"); // U+9087
expect(() => {ms932Encoder.encode("\u9088")}).to.throw(Error, "EncodingError U+9088");
r = r && ([...ms932Encoder.encode("邉邊")].join(",") === "231,179,231,178"); // U+9089
expect(() => {ms932Encoder.encode("\u908B")}).to.throw(Error, "EncodingError U+908B");
expect(() => {ms932Encoder.encode("\u908C")}).to.throw(Error, "EncodingError U+908C");
expect(() => {ms932Encoder.encode("\u908D")}).to.throw(Error, "EncodingError U+908D");
expect(() => {ms932Encoder.encode("\u908E")}).to.throw(Error, "EncodingError U+908E");
r = r && ([...ms932Encoder.encode("邏")].join(",") === "231,180"); // U+908F
expect(() => {ms932Encoder.encode("\u9090")}).to.throw(Error, "EncodingError U+9090");
r = r && ([...ms932Encoder.encode("邑")].join(",") === "151,87"); // U+9091
expect(() => {ms932Encoder.encode("\u9092")}).to.throw(Error, "EncodingError U+9092");
expect(() => {ms932Encoder.encode("\u9093")}).to.throw(Error, "EncodingError U+9093");
expect(() => {ms932Encoder.encode("\u9094")}).to.throw(Error, "EncodingError U+9094");
expect(() => {ms932Encoder.encode("\u9095")}).to.throw(Error, "EncodingError U+9095");
expect(() => {ms932Encoder.encode("\u9096")}).to.throw(Error, "EncodingError U+9096");
expect(() => {ms932Encoder.encode("\u9097")}).to.throw(Error, "EncodingError U+9097");
expect(() => {ms932Encoder.encode("\u9098")}).to.throw(Error, "EncodingError U+9098");
expect(() => {ms932Encoder.encode("\u9099")}).to.throw(Error, "EncodingError U+9099");
expect(() => {ms932Encoder.encode("\u909A")}).to.throw(Error, "EncodingError U+909A");
expect(() => {ms932Encoder.encode("\u909B")}).to.throw(Error, "EncodingError U+909B");
expect(() => {ms932Encoder.encode("\u909C")}).to.throw(Error, "EncodingError U+909C");
expect(() => {ms932Encoder.encode("\u909D")}).to.throw(Error, "EncodingError U+909D");
expect(() => {ms932Encoder.encode("\u909E")}).to.throw(Error, "EncodingError U+909E");
expect(() => {ms932Encoder.encode("\u909F")}).to.throw(Error, "EncodingError U+909F");
expect(() => {ms932Encoder.encode("\u90A0")}).to.throw(Error, "EncodingError U+90A0");
expect(() => {ms932Encoder.encode("\u90A1")}).to.throw(Error, "EncodingError U+90A1");
expect(() => {ms932Encoder.encode("\u90A2")}).to.throw(Error, "EncodingError U+90A2");
r = r && ([...ms932Encoder.encode("那")].join(",") === "147,223"); // U+90A3
expect(() => {ms932Encoder.encode("\u90A4")}).to.throw(Error, "EncodingError U+90A4");
expect(() => {ms932Encoder.encode("\u90A5")}).to.throw(Error, "EncodingError U+90A5");
r = r && ([...ms932Encoder.encode("邦")].join(",") === "150,77"); // U+90A6
expect(() => {ms932Encoder.encode("\u90A7")}).to.throw(Error, "EncodingError U+90A7");
r = r && ([...ms932Encoder.encode("邨")].join(",") === "231,181"); // U+90A8
expect(() => {ms932Encoder.encode("\u90A9")}).to.throw(Error, "EncodingError U+90A9");
r = r && ([...ms932Encoder.encode("邪")].join(",") === "142,215"); // U+90AA
expect(() => {ms932Encoder.encode("\u90AB")}).to.throw(Error, "EncodingError U+90AB");
expect(() => {ms932Encoder.encode("\u90AC")}).to.throw(Error, "EncodingError U+90AC");
expect(() => {ms932Encoder.encode("\u90AD")}).to.throw(Error, "EncodingError U+90AD");
expect(() => {ms932Encoder.encode("\u90AE")}).to.throw(Error, "EncodingError U+90AE");
r = r && ([...ms932Encoder.encode("邯")].join(",") === "231,182"); // U+90AF
expect(() => {ms932Encoder.encode("\u90B0")}).to.throw(Error, "EncodingError U+90B0");
r = r && ([...ms932Encoder.encode("邱")].join(",") === "231,183"); // U+90B1
expect(() => {ms932Encoder.encode("\u90B2")}).to.throw(Error, "EncodingError U+90B2");
expect(() => {ms932Encoder.encode("\u90B3")}).to.throw(Error, "EncodingError U+90B3");
expect(() => {ms932Encoder.encode("\u90B4")}).to.throw(Error, "EncodingError U+90B4");
r = r && ([...ms932Encoder.encode("邵")].join(",") === "231,184"); // U+90B5
expect(() => {ms932Encoder.encode("\u90B6")}).to.throw(Error, "EncodingError U+90B6");
expect(() => {ms932Encoder.encode("\u90B7")}).to.throw(Error, "EncodingError U+90B7");
r = r && ([...ms932Encoder.encode("邸")].join(",") === "147,64"); // U+90B8
expect(() => {ms932Encoder.encode("\u90B9")}).to.throw(Error, "EncodingError U+90B9");
expect(() => {ms932Encoder.encode("\u90BA")}).to.throw(Error, "EncodingError U+90BA");
expect(() => {ms932Encoder.encode("\u90BB")}).to.throw(Error, "EncodingError U+90BB");
expect(() => {ms932Encoder.encode("\u90BC")}).to.throw(Error, "EncodingError U+90BC");
expect(() => {ms932Encoder.encode("\u90BD")}).to.throw(Error, "EncodingError U+90BD");
expect(() => {ms932Encoder.encode("\u90BE")}).to.throw(Error, "EncodingError U+90BE");
expect(() => {ms932Encoder.encode("\u90BF")}).to.throw(Error, "EncodingError U+90BF");
expect(() => {ms932Encoder.encode("\u90C0")}).to.throw(Error, "EncodingError U+90C0");
r = r && ([...ms932Encoder.encode("郁")].join(",") === "136,232"); // U+90C1
expect(() => {ms932Encoder.encode("\u90C2")}).to.throw(Error, "EncodingError U+90C2");
expect(() => {ms932Encoder.encode("\u90C3")}).to.throw(Error, "EncodingError U+90C3");
expect(() => {ms932Encoder.encode("\u90C4")}).to.throw(Error, "EncodingError U+90C4");
expect(() => {ms932Encoder.encode("\u90C5")}).to.throw(Error, "EncodingError U+90C5");
expect(() => {ms932Encoder.encode("\u90C6")}).to.throw(Error, "EncodingError U+90C6");
expect(() => {ms932Encoder.encode("\u90C7")}).to.throw(Error, "EncodingError U+90C7");
expect(() => {ms932Encoder.encode("\u90C8")}).to.throw(Error, "EncodingError U+90C8");
expect(() => {ms932Encoder.encode("\u90C9")}).to.throw(Error, "EncodingError U+90C9");
r = r && ([...ms932Encoder.encode("郊")].join(",") === "141,120"); // U+90CA
expect(() => {ms932Encoder.encode("\u90CB")}).to.throw(Error, "EncodingError U+90CB");
expect(() => {ms932Encoder.encode("\u90CC")}).to.throw(Error, "EncodingError U+90CC");
expect(() => {ms932Encoder.encode("\u90CD")}).to.throw(Error, "EncodingError U+90CD");
r = r && ([...ms932Encoder.encode("郎")].join(",") === "152,89"); // U+90CE
expect(() => {ms932Encoder.encode("\u90CF")}).to.throw(Error, "EncodingError U+90CF");
expect(() => {ms932Encoder.encode("\u90D0")}).to.throw(Error, "EncodingError U+90D0");
expect(() => {ms932Encoder.encode("\u90D1")}).to.throw(Error, "EncodingError U+90D1");
expect(() => {ms932Encoder.encode("\u90D2")}).to.throw(Error, "EncodingError U+90D2");
expect(() => {ms932Encoder.encode("\u90D3")}).to.throw(Error, "EncodingError U+90D3");
expect(() => {ms932Encoder.encode("\u90D4")}).to.throw(Error, "EncodingError U+90D4");
expect(() => {ms932Encoder.encode("\u90D5")}).to.throw(Error, "EncodingError U+90D5");
expect(() => {ms932Encoder.encode("\u90D6")}).to.throw(Error, "EncodingError U+90D6");
expect(() => {ms932Encoder.encode("\u90D7")}).to.throw(Error, "EncodingError U+90D7");
expect(() => {ms932Encoder.encode("\u90D8")}).to.throw(Error, "EncodingError U+90D8");
expect(() => {ms932Encoder.encode("\u90D9")}).to.throw(Error, "EncodingError U+90D9");
expect(() => {ms932Encoder.encode("\u90DA")}).to.throw(Error, "EncodingError U+90DA");
r = r && ([...ms932Encoder.encode("郛")].join(",") === "231,188"); // U+90DB
expect(() => {ms932Encoder.encode("\u90DC")}).to.throw(Error, "EncodingError U+90DC");
expect(() => {ms932Encoder.encode("\u90DD")}).to.throw(Error, "EncodingError U+90DD");
r = r && ([...ms932Encoder.encode("郞")].join(",") === "251,182"); // U+90DE
expect(() => {ms932Encoder.encode("\u90DF")}).to.throw(Error, "EncodingError U+90DF");
expect(() => {ms932Encoder.encode("\u90E0")}).to.throw(Error, "EncodingError U+90E0");
r = r && ([...ms932Encoder.encode("郡郢")].join(",") === "140,83,231,185"); // U+90E1
expect(() => {ms932Encoder.encode("\u90E3")}).to.throw(Error, "EncodingError U+90E3");
r = r && ([...ms932Encoder.encode("郤")].join(",") === "231,186"); // U+90E4
expect(() => {ms932Encoder.encode("\u90E5")}).to.throw(Error, "EncodingError U+90E5");
expect(() => {ms932Encoder.encode("\u90E6")}).to.throw(Error, "EncodingError U+90E6");
expect(() => {ms932Encoder.encode("\u90E7")}).to.throw(Error, "EncodingError U+90E7");
r = r && ([...ms932Encoder.encode("部")].join(",") === "149,148"); // U+90E8
expect(() => {ms932Encoder.encode("\u90E9")}).to.throw(Error, "EncodingError U+90E9");
expect(() => {ms932Encoder.encode("\u90EA")}).to.throw(Error, "EncodingError U+90EA");
expect(() => {ms932Encoder.encode("\u90EB")}).to.throw(Error, "EncodingError U+90EB");
expect(() => {ms932Encoder.encode("\u90EC")}).to.throw(Error, "EncodingError U+90EC");
r = r && ([...ms932Encoder.encode("郭")].join(",") === "138,115"); // U+90ED
expect(() => {ms932Encoder.encode("\u90EE")}).to.throw(Error, "EncodingError U+90EE");
expect(() => {ms932Encoder.encode("\u90EF")}).to.throw(Error, "EncodingError U+90EF");
expect(() => {ms932Encoder.encode("\u90F0")}).to.throw(Error, "EncodingError U+90F0");
expect(() => {ms932Encoder.encode("\u90F1")}).to.throw(Error, "EncodingError U+90F1");
expect(() => {ms932Encoder.encode("\u90F2")}).to.throw(Error, "EncodingError U+90F2");
expect(() => {ms932Encoder.encode("\u90F3")}).to.throw(Error, "EncodingError U+90F3");
expect(() => {ms932Encoder.encode("\u90F4")}).to.throw(Error, "EncodingError U+90F4");
r = r && ([...ms932Encoder.encode("郵")].join(",") === "151,88"); // U+90F5
expect(() => {ms932Encoder.encode("\u90F6")}).to.throw(Error, "EncodingError U+90F6");
r = r && ([...ms932Encoder.encode("郷")].join(",") === "139,189"); // U+90F7
expect(() => {ms932Encoder.encode("\u90F8")}).to.throw(Error, "EncodingError U+90F8");
expect(() => {ms932Encoder.encode("\u90F9")}).to.throw(Error, "EncodingError U+90F9");
expect(() => {ms932Encoder.encode("\u90FA")}).to.throw(Error, "EncodingError U+90FA");
expect(() => {ms932Encoder.encode("\u90FB")}).to.throw(Error, "EncodingError U+90FB");
expect(() => {ms932Encoder.encode("\u90FC")}).to.throw(Error, "EncodingError U+90FC");
r = r && ([...ms932Encoder.encode("都")].join(",") === "147,115"); // U+90FD
expect(() => {ms932Encoder.encode("\u90FE")}).to.throw(Error, "EncodingError U+90FE");
expect(() => {ms932Encoder.encode("\u90FF")}).to.throw(Error, "EncodingError U+90FF");
expect(() => {ms932Encoder.encode("\u9100")}).to.throw(Error, "EncodingError U+9100");
expect(() => {ms932Encoder.encode("\u9101")}).to.throw(Error, "EncodingError U+9101");
r = r && ([...ms932Encoder.encode("鄂")].join(",") === "231,189"); // U+9102
expect(() => {ms932Encoder.encode("\u9103")}).to.throw(Error, "EncodingError U+9103");
expect(() => {ms932Encoder.encode("\u9104")}).to.throw(Error, "EncodingError U+9104");
expect(() => {ms932Encoder.encode("\u9105")}).to.throw(Error, "EncodingError U+9105");
expect(() => {ms932Encoder.encode("\u9106")}).to.throw(Error, "EncodingError U+9106");
expect(() => {ms932Encoder.encode("\u9107")}).to.throw(Error, "EncodingError U+9107");
expect(() => {ms932Encoder.encode("\u9108")}).to.throw(Error, "EncodingError U+9108");
expect(() => {ms932Encoder.encode("\u9109")}).to.throw(Error, "EncodingError U+9109");
expect(() => {ms932Encoder.encode("\u910A")}).to.throw(Error, "EncodingError U+910A");
expect(() => {ms932Encoder.encode("\u910B")}).to.throw(Error, "EncodingError U+910B");
expect(() => {ms932Encoder.encode("\u910C")}).to.throw(Error, "EncodingError U+910C");
expect(() => {ms932Encoder.encode("\u910D")}).to.throw(Error, "EncodingError U+910D");
expect(() => {ms932Encoder.encode("\u910E")}).to.throw(Error, "EncodingError U+910E");
expect(() => {ms932Encoder.encode("\u910F")}).to.throw(Error, "EncodingError U+910F");
expect(() => {ms932Encoder.encode("\u9110")}).to.throw(Error, "EncodingError U+9110");
expect(() => {ms932Encoder.encode("\u9111")}).to.throw(Error, "EncodingError U+9111");
r = r && ([...ms932Encoder.encode("鄒")].join(",") === "231,190"); // U+9112
expect(() => {ms932Encoder.encode("\u9113")}).to.throw(Error, "EncodingError U+9113");
expect(() => {ms932Encoder.encode("\u9114")}).to.throw(Error, "EncodingError U+9114");
r = r && ([...ms932Encoder.encode("鄕")].join(",") === "251,184"); // U+9115
expect(() => {ms932Encoder.encode("\u9116")}).to.throw(Error, "EncodingError U+9116");
expect(() => {ms932Encoder.encode("\u9117")}).to.throw(Error, "EncodingError U+9117");
expect(() => {ms932Encoder.encode("\u9118")}).to.throw(Error, "EncodingError U+9118");
r = r && ([...ms932Encoder.encode("鄙")].join(",") === "231,191"); // U+9119
expect(() => {ms932Encoder.encode("\u911A")}).to.throw(Error, "EncodingError U+911A");
expect(() => {ms932Encoder.encode("\u911B")}).to.throw(Error, "EncodingError U+911B");
expect(() => {ms932Encoder.encode("\u911C")}).to.throw(Error, "EncodingError U+911C");
expect(() => {ms932Encoder.encode("\u911D")}).to.throw(Error, "EncodingError U+911D");
expect(() => {ms932Encoder.encode("\u911E")}).to.throw(Error, "EncodingError U+911E");
expect(() => {ms932Encoder.encode("\u911F")}).to.throw(Error, "EncodingError U+911F");
expect(() => {ms932Encoder.encode("\u9120")}).to.throw(Error, "EncodingError U+9120");
expect(() => {ms932Encoder.encode("\u9121")}).to.throw(Error, "EncodingError U+9121");
expect(() => {ms932Encoder.encode("\u9122")}).to.throw(Error, "EncodingError U+9122");
expect(() => {ms932Encoder.encode("\u9123")}).to.throw(Error, "EncodingError U+9123");
expect(() => {ms932Encoder.encode("\u9124")}).to.throw(Error, "EncodingError U+9124");
expect(() => {ms932Encoder.encode("\u9125")}).to.throw(Error, "EncodingError U+9125");
expect(() => {ms932Encoder.encode("\u9126")}).to.throw(Error, "EncodingError U+9126");
r = r && ([...ms932Encoder.encode("鄧")].join(",") === "251,185"); // U+9127
expect(() => {ms932Encoder.encode("\u9128")}).to.throw(Error, "EncodingError U+9128");
expect(() => {ms932Encoder.encode("\u9129")}).to.throw(Error, "EncodingError U+9129");
expect(() => {ms932Encoder.encode("\u912A")}).to.throw(Error, "EncodingError U+912A");
expect(() => {ms932Encoder.encode("\u912B")}).to.throw(Error, "EncodingError U+912B");
expect(() => {ms932Encoder.encode("\u912C")}).to.throw(Error, "EncodingError U+912C");
r = r && ([...ms932Encoder.encode("鄭")].join(",") === "147,65"); // U+912D
expect(() => {ms932Encoder.encode("\u912E")}).to.throw(Error, "EncodingError U+912E");
expect(() => {ms932Encoder.encode("\u912F")}).to.throw(Error, "EncodingError U+912F");
r = r && ([...ms932Encoder.encode("鄰")].join(",") === "231,193"); // U+9130
expect(() => {ms932Encoder.encode("\u9131")}).to.throw(Error, "EncodingError U+9131");
r = r && ([...ms932Encoder.encode("鄲")].join(",") === "231,192"); // U+9132
expect(() => {ms932Encoder.encode("\u9133")}).to.throw(Error, "EncodingError U+9133");
expect(() => {ms932Encoder.encode("\u9134")}).to.throw(Error, "EncodingError U+9134");
expect(() => {ms932Encoder.encode("\u9135")}).to.throw(Error, "EncodingError U+9135");
expect(() => {ms932Encoder.encode("\u9136")}).to.throw(Error, "EncodingError U+9136");
expect(() => {ms932Encoder.encode("\u9137")}).to.throw(Error, "EncodingError U+9137");
expect(() => {ms932Encoder.encode("\u9138")}).to.throw(Error, "EncodingError U+9138");
expect(() => {ms932Encoder.encode("\u9139")}).to.throw(Error, "EncodingError U+9139");
expect(() => {ms932Encoder.encode("\u913A")}).to.throw(Error, "EncodingError U+913A");
expect(() => {ms932Encoder.encode("\u913B")}).to.throw(Error, "EncodingError U+913B");
expect(() => {ms932Encoder.encode("\u913C")}).to.throw(Error, "EncodingError U+913C");
expect(() => {ms932Encoder.encode("\u913D")}).to.throw(Error, "EncodingError U+913D");
expect(() => {ms932Encoder.encode("\u913E")}).to.throw(Error, "EncodingError U+913E");
expect(() => {ms932Encoder.encode("\u913F")}).to.throw(Error, "EncodingError U+913F");
expect(() => {ms932Encoder.encode("\u9140")}).to.throw(Error, "EncodingError U+9140");
expect(() => {ms932Encoder.encode("\u9141")}).to.throw(Error, "EncodingError U+9141");
expect(() => {ms932Encoder.encode("\u9142")}).to.throw(Error, "EncodingError U+9142");
expect(() => {ms932Encoder.encode("\u9143")}).to.throw(Error, "EncodingError U+9143");
expect(() => {ms932Encoder.encode("\u9144")}).to.throw(Error, "EncodingError U+9144");
expect(() => {ms932Encoder.encode("\u9145")}).to.throw(Error, "EncodingError U+9145");
expect(() => {ms932Encoder.encode("\u9146")}).to.throw(Error, "EncodingError U+9146");
expect(() => {ms932Encoder.encode("\u9147")}).to.throw(Error, "EncodingError U+9147");
expect(() => {ms932Encoder.encode("\u9148")}).to.throw(Error, "EncodingError U+9148");
r = r && ([...ms932Encoder.encode("酉酊酋酌配酎")].join(",") === "147,209,231,194,143,85,142,222,148,122,146,145"); // U+9149
expect(() => {ms932Encoder.encode("\u914F")}).to.throw(Error, "EncodingError U+914F");
expect(() => {ms932Encoder.encode("\u9150")}).to.throw(Error, "EncodingError U+9150");
expect(() => {ms932Encoder.encode("\u9151")}).to.throw(Error, "EncodingError U+9151");
r = r && ([...ms932Encoder.encode("酒")].join(",") === "142,240"); // U+9152
expect(() => {ms932Encoder.encode("\u9153")}).to.throw(Error, "EncodingError U+9153");
r = r && ([...ms932Encoder.encode("酔")].join(",") === "144,140"); // U+9154
expect(() => {ms932Encoder.encode("\u9155")}).to.throw(Error, "EncodingError U+9155");
r = r && ([...ms932Encoder.encode("酖")].join(",") === "231,195"); // U+9156
expect(() => {ms932Encoder.encode("\u9157")}).to.throw(Error, "EncodingError U+9157");
r = r && ([...ms932Encoder.encode("酘")].join(",") === "231,196"); // U+9158
expect(() => {ms932Encoder.encode("\u9159")}).to.throw(Error, "EncodingError U+9159");
expect(() => {ms932Encoder.encode("\u915A")}).to.throw(Error, "EncodingError U+915A");
expect(() => {ms932Encoder.encode("\u915B")}).to.throw(Error, "EncodingError U+915B");
expect(() => {ms932Encoder.encode("\u915C")}).to.throw(Error, "EncodingError U+915C");
expect(() => {ms932Encoder.encode("\u915D")}).to.throw(Error, "EncodingError U+915D");
expect(() => {ms932Encoder.encode("\u915E")}).to.throw(Error, "EncodingError U+915E");
expect(() => {ms932Encoder.encode("\u915F")}).to.throw(Error, "EncodingError U+915F");
expect(() => {ms932Encoder.encode("\u9160")}).to.throw(Error, "EncodingError U+9160");
expect(() => {ms932Encoder.encode("\u9161")}).to.throw(Error, "EncodingError U+9161");
r = r && ([...ms932Encoder.encode("酢酣")].join(",") === "144,124,231,197"); // U+9162
expect(() => {ms932Encoder.encode("\u9164")}).to.throw(Error, "EncodingError U+9164");
r = r && ([...ms932Encoder.encode("酥")].join(",") === "231,198"); // U+9165
expect(() => {ms932Encoder.encode("\u9166")}).to.throw(Error, "EncodingError U+9166");
expect(() => {ms932Encoder.encode("\u9167")}).to.throw(Error, "EncodingError U+9167");
expect(() => {ms932Encoder.encode("\u9168")}).to.throw(Error, "EncodingError U+9168");
r = r && ([...ms932Encoder.encode("酩酪")].join(",") === "231,199,151,143"); // U+9169
expect(() => {ms932Encoder.encode("\u916B")}).to.throw(Error, "EncodingError U+916B");
r = r && ([...ms932Encoder.encode("酬")].join(",") === "143,86"); // U+916C
expect(() => {ms932Encoder.encode("\u916D")}).to.throw(Error, "EncodingError U+916D");
expect(() => {ms932Encoder.encode("\u916E")}).to.throw(Error, "EncodingError U+916E");
expect(() => {ms932Encoder.encode("\u916F")}).to.throw(Error, "EncodingError U+916F");
expect(() => {ms932Encoder.encode("\u9170")}).to.throw(Error, "EncodingError U+9170");
expect(() => {ms932Encoder.encode("\u9171")}).to.throw(Error, "EncodingError U+9171");
r = r && ([...ms932Encoder.encode("酲酳")].join(",") === "231,201,231,200"); // U+9172
expect(() => {ms932Encoder.encode("\u9174")}).to.throw(Error, "EncodingError U+9174");
r = r && ([...ms932Encoder.encode("酵")].join(",") === "141,121"); // U+9175
expect(() => {ms932Encoder.encode("\u9176")}).to.throw(Error, "EncodingError U+9176");
r = r && ([...ms932Encoder.encode("酷酸")].join(",") === "141,147,142,95"); // U+9177
expect(() => {ms932Encoder.encode("\u9179")}).to.throw(Error, "EncodingError U+9179");
expect(() => {ms932Encoder.encode("\u917A")}).to.throw(Error, "EncodingError U+917A");
expect(() => {ms932Encoder.encode("\u917B")}).to.throw(Error, "EncodingError U+917B");
expect(() => {ms932Encoder.encode("\u917C")}).to.throw(Error, "EncodingError U+917C");
expect(() => {ms932Encoder.encode("\u917D")}).to.throw(Error, "EncodingError U+917D");
expect(() => {ms932Encoder.encode("\u917E")}).to.throw(Error, "EncodingError U+917E");
expect(() => {ms932Encoder.encode("\u917F")}).to.throw(Error, "EncodingError U+917F");
expect(() => {ms932Encoder.encode("\u9180")}).to.throw(Error, "EncodingError U+9180");
expect(() => {ms932Encoder.encode("\u9181")}).to.throw(Error, "EncodingError U+9181");
r = r && ([...ms932Encoder.encode("醂")].join(",") === "231,204"); // U+9182
expect(() => {ms932Encoder.encode("\u9183")}).to.throw(Error, "EncodingError U+9183");
expect(() => {ms932Encoder.encode("\u9184")}).to.throw(Error, "EncodingError U+9184");
expect(() => {ms932Encoder.encode("\u9185")}).to.throw(Error, "EncodingError U+9185");
expect(() => {ms932Encoder.encode("\u9186")}).to.throw(Error, "EncodingError U+9186");
r = r && ([...ms932Encoder.encode("醇")].join(",") === "143,134"); // U+9187
expect(() => {ms932Encoder.encode("\u9188")}).to.throw(Error, "EncodingError U+9188");
r = r && ([...ms932Encoder.encode("醉")].join(",") === "231,203"); // U+9189
expect(() => {ms932Encoder.encode("\u918A")}).to.throw(Error, "EncodingError U+918A");
r = r && ([...ms932Encoder.encode("醋")].join(",") === "231,202"); // U+918B
expect(() => {ms932Encoder.encode("\u918C")}).to.throw(Error, "EncodingError U+918C");
r = r && ([...ms932Encoder.encode("醍")].join(",") === "145,231"); // U+918D
expect(() => {ms932Encoder.encode("\u918E")}).to.throw(Error, "EncodingError U+918E");
expect(() => {ms932Encoder.encode("\u918F")}).to.throw(Error, "EncodingError U+918F");
r = r && ([...ms932Encoder.encode("醐")].join(",") === "140,237"); // U+9190
expect(() => {ms932Encoder.encode("\u9191")}).to.throw(Error, "EncodingError U+9191");
r = r && ([...ms932Encoder.encode("醒")].join(",") === "144,193"); // U+9192
expect(() => {ms932Encoder.encode("\u9193")}).to.throw(Error, "EncodingError U+9193");
expect(() => {ms932Encoder.encode("\u9194")}).to.throw(Error, "EncodingError U+9194");
expect(() => {ms932Encoder.encode("\u9195")}).to.throw(Error, "EncodingError U+9195");
expect(() => {ms932Encoder.encode("\u9196")}).to.throw(Error, "EncodingError U+9196");
r = r && ([...ms932Encoder.encode("醗")].join(",") === "148,174"); // U+9197
expect(() => {ms932Encoder.encode("\u9198")}).to.throw(Error, "EncodingError U+9198");
expect(() => {ms932Encoder.encode("\u9199")}).to.throw(Error, "EncodingError U+9199");
expect(() => {ms932Encoder.encode("\u919A")}).to.throw(Error, "EncodingError U+919A");
expect(() => {ms932Encoder.encode("\u919B")}).to.throw(Error, "EncodingError U+919B");
r = r && ([...ms932Encoder.encode("醜")].join(",") === "143,88"); // U+919C
expect(() => {ms932Encoder.encode("\u919D")}).to.throw(Error, "EncodingError U+919D");
expect(() => {ms932Encoder.encode("\u919E")}).to.throw(Error, "EncodingError U+919E");
expect(() => {ms932Encoder.encode("\u919F")}).to.throw(Error, "EncodingError U+919F");
expect(() => {ms932Encoder.encode("\u91A0")}).to.throw(Error, "EncodingError U+91A0");
expect(() => {ms932Encoder.encode("\u91A1")}).to.throw(Error, "EncodingError U+91A1");
r = r && ([...ms932Encoder.encode("醢")].join(",") === "231,205"); // U+91A2
expect(() => {ms932Encoder.encode("\u91A3")}).to.throw(Error, "EncodingError U+91A3");
r = r && ([...ms932Encoder.encode("醤")].join(",") === "143,221"); // U+91A4
expect(() => {ms932Encoder.encode("\u91A5")}).to.throw(Error, "EncodingError U+91A5");
expect(() => {ms932Encoder.encode("\u91A6")}).to.throw(Error, "EncodingError U+91A6");
expect(() => {ms932Encoder.encode("\u91A7")}).to.throw(Error, "EncodingError U+91A7");
expect(() => {ms932Encoder.encode("\u91A8")}).to.throw(Error, "EncodingError U+91A8");
expect(() => {ms932Encoder.encode("\u91A9")}).to.throw(Error, "EncodingError U+91A9");
r = r && ([...ms932Encoder.encode("醪醫")].join(",") === "231,208,231,206"); // U+91AA
expect(() => {ms932Encoder.encode("\u91AC")}).to.throw(Error, "EncodingError U+91AC");
expect(() => {ms932Encoder.encode("\u91AD")}).to.throw(Error, "EncodingError U+91AD");
expect(() => {ms932Encoder.encode("\u91AE")}).to.throw(Error, "EncodingError U+91AE");
r = r && ([...ms932Encoder.encode("醯")].join(",") === "231,207"); // U+91AF
expect(() => {ms932Encoder.encode("\u91B0")}).to.throw(Error, "EncodingError U+91B0");
expect(() => {ms932Encoder.encode("\u91B1")}).to.throw(Error, "EncodingError U+91B1");
expect(() => {ms932Encoder.encode("\u91B2")}).to.throw(Error, "EncodingError U+91B2");
expect(() => {ms932Encoder.encode("\u91B3")}).to.throw(Error, "EncodingError U+91B3");
r = r && ([...ms932Encoder.encode("醴醵")].join(",") === "231,210,231,209"); // U+91B4
expect(() => {ms932Encoder.encode("\u91B6")}).to.throw(Error, "EncodingError U+91B6");
expect(() => {ms932Encoder.encode("\u91B7")}).to.throw(Error, "EncodingError U+91B7");
r = r && ([...ms932Encoder.encode("醸")].join(",") === "143,248"); // U+91B8
expect(() => {ms932Encoder.encode("\u91B9")}).to.throw(Error, "EncodingError U+91B9");
r = r && ([...ms932Encoder.encode("醺")].join(",") === "231,211"); // U+91BA
expect(() => {ms932Encoder.encode("\u91BB")}).to.throw(Error, "EncodingError U+91BB");
expect(() => {ms932Encoder.encode("\u91BC")}).to.throw(Error, "EncodingError U+91BC");
expect(() => {ms932Encoder.encode("\u91BD")}).to.throw(Error, "EncodingError U+91BD");
expect(() => {ms932Encoder.encode("\u91BE")}).to.throw(Error, "EncodingError U+91BE");
expect(() => {ms932Encoder.encode("\u91BF")}).to.throw(Error, "EncodingError U+91BF");
r = r && ([...ms932Encoder.encode("釀釁")].join(",") === "231,212,231,213"); // U+91C0
expect(() => {ms932Encoder.encode("\u91C2")}).to.throw(Error, "EncodingError U+91C2");
expect(() => {ms932Encoder.encode("\u91C3")}).to.throw(Error, "EncodingError U+91C3");
expect(() => {ms932Encoder.encode("\u91C4")}).to.throw(Error, "EncodingError U+91C4");
expect(() => {ms932Encoder.encode("\u91C5")}).to.throw(Error, "EncodingError U+91C5");
r = r && ([...ms932Encoder.encode("釆采釈釉")].join(",") === "148,206,141,209,142,223,231,214"); // U+91C6
expect(() => {ms932Encoder.encode("\u91CA")}).to.throw(Error, "EncodingError U+91CA");
r = r && ([...ms932Encoder.encode("釋里重野量釐金")].join(",") === "231,215,151,162,143,100,150,236,151,202,231,216,139,224"); // U+91CB
expect(() => {ms932Encoder.encode("\u91D2")}).to.throw(Error, "EncodingError U+91D2");
expect(() => {ms932Encoder.encode("\u91D3")}).to.throw(Error, "EncodingError U+91D3");
expect(() => {ms932Encoder.encode("\u91D4")}).to.throw(Error, "EncodingError U+91D4");
expect(() => {ms932Encoder.encode("\u91D5")}).to.throw(Error, "EncodingError U+91D5");
r = r && ([...ms932Encoder.encode("釖釗釘")].join(",") === "231,217,251,187,147,66"); // U+91D6
expect(() => {ms932Encoder.encode("\u91D9")}).to.throw(Error, "EncodingError U+91D9");
r = r && ([...ms932Encoder.encode("釚釛釜針釞釟")].join(",") === "251,186,231,220,138,152,144,106,251,188,231,218"); // U+91DA
expect(() => {ms932Encoder.encode("\u91E0")}).to.throw(Error, "EncodingError U+91E0");
r = r && ([...ms932Encoder.encode("釡")].join(",") === "231,219"); // U+91E1
expect(() => {ms932Encoder.encode("\u91E2")}).to.throw(Error, "EncodingError U+91E2");
r = r && ([...ms932Encoder.encode("釣釤釥釦釧")].join(",") === "146,222,251,191,251,192,150,116,139,250"); // U+91E3
expect(() => {ms932Encoder.encode("\u91E8")}).to.throw(Error, "EncodingError U+91E8");
expect(() => {ms932Encoder.encode("\u91E9")}).to.throw(Error, "EncodingError U+91E9");
expect(() => {ms932Encoder.encode("\u91EA")}).to.throw(Error, "EncodingError U+91EA");
expect(() => {ms932Encoder.encode("\u91EB")}).to.throw(Error, "EncodingError U+91EB");
expect(() => {ms932Encoder.encode("\u91EC")}).to.throw(Error, "EncodingError U+91EC");
r = r && ([...ms932Encoder.encode("釭釮")].join(",") === "251,189,251,190"); // U+91ED
expect(() => {ms932Encoder.encode("\u91EF")}).to.throw(Error, "EncodingError U+91EF");
expect(() => {ms932Encoder.encode("\u91F0")}).to.throw(Error, "EncodingError U+91F0");
expect(() => {ms932Encoder.encode("\u91F1")}).to.throw(Error, "EncodingError U+91F1");
expect(() => {ms932Encoder.encode("\u91F2")}).to.throw(Error, "EncodingError U+91F2");
expect(() => {ms932Encoder.encode("\u91F3")}).to.throw(Error, "EncodingError U+91F3");
expect(() => {ms932Encoder.encode("\u91F4")}).to.throw(Error, "EncodingError U+91F4");
r = r && ([...ms932Encoder.encode("釵釶")].join(",") === "231,222,231,223"); // U+91F5
expect(() => {ms932Encoder.encode("\u91F7")}).to.throw(Error, "EncodingError U+91F7");
expect(() => {ms932Encoder.encode("\u91F8")}).to.throw(Error, "EncodingError U+91F8");
expect(() => {ms932Encoder.encode("\u91F9")}).to.throw(Error, "EncodingError U+91F9");
expect(() => {ms932Encoder.encode("\u91FA")}).to.throw(Error, "EncodingError U+91FA");
expect(() => {ms932Encoder.encode("\u91FB")}).to.throw(Error, "EncodingError U+91FB");
r = r && ([...ms932Encoder.encode("釼")].join(",") === "231,221"); // U+91FC
expect(() => {ms932Encoder.encode("\u91FD")}).to.throw(Error, "EncodingError U+91FD");
expect(() => {ms932Encoder.encode("\u91FE")}).to.throw(Error, "EncodingError U+91FE");
r = r && ([...ms932Encoder.encode("釿")].join(",") === "231,225"); // U+91FF
expect(() => {ms932Encoder.encode("\u9200")}).to.throw(Error, "EncodingError U+9200");
expect(() => {ms932Encoder.encode("\u9201")}).to.throw(Error, "EncodingError U+9201");
expect(() => {ms932Encoder.encode("\u9202")}).to.throw(Error, "EncodingError U+9202");
expect(() => {ms932Encoder.encode("\u9203")}).to.throw(Error, "EncodingError U+9203");
expect(() => {ms932Encoder.encode("\u9204")}).to.throw(Error, "EncodingError U+9204");
expect(() => {ms932Encoder.encode("\u9205")}).to.throw(Error, "EncodingError U+9205");
r = r && ([...ms932Encoder.encode("鈆")].join(",") === "251,193"); // U+9206
expect(() => {ms932Encoder.encode("\u9207")}).to.throw(Error, "EncodingError U+9207");
expect(() => {ms932Encoder.encode("\u9208")}).to.throw(Error, "EncodingError U+9208");
expect(() => {ms932Encoder.encode("\u9209")}).to.throw(Error, "EncodingError U+9209");
r = r && ([...ms932Encoder.encode("鈊")].join(",") === "251,195"); // U+920A
expect(() => {ms932Encoder.encode("\u920B")}).to.throw(Error, "EncodingError U+920B");
expect(() => {ms932Encoder.encode("\u920C")}).to.throw(Error, "EncodingError U+920C");
r = r && ([...ms932Encoder.encode("鈍鈎")].join(",") === "147,221,138,98"); // U+920D
expect(() => {ms932Encoder.encode("\u920F")}).to.throw(Error, "EncodingError U+920F");
r = r && ([...ms932Encoder.encode("鈐鈑")].join(",") === "251,194,231,229"); // U+9210
expect(() => {ms932Encoder.encode("\u9212")}).to.throw(Error, "EncodingError U+9212");
expect(() => {ms932Encoder.encode("\u9213")}).to.throw(Error, "EncodingError U+9213");
r = r && ([...ms932Encoder.encode("鈔鈕")].join(",") === "231,226,231,228"); // U+9214
expect(() => {ms932Encoder.encode("\u9216")}).to.throw(Error, "EncodingError U+9216");
expect(() => {ms932Encoder.encode("\u9217")}).to.throw(Error, "EncodingError U+9217");
expect(() => {ms932Encoder.encode("\u9218")}).to.throw(Error, "EncodingError U+9218");
expect(() => {ms932Encoder.encode("\u9219")}).to.throw(Error, "EncodingError U+9219");
expect(() => {ms932Encoder.encode("\u921A")}).to.throw(Error, "EncodingError U+921A");
expect(() => {ms932Encoder.encode("\u921B")}).to.throw(Error, "EncodingError U+921B");
expect(() => {ms932Encoder.encode("\u921C")}).to.throw(Error, "EncodingError U+921C");
expect(() => {ms932Encoder.encode("\u921D")}).to.throw(Error, "EncodingError U+921D");
r = r && ([...ms932Encoder.encode("鈞")].join(",") === "231,224"); // U+921E
expect(() => {ms932Encoder.encode("\u921F")}).to.throw(Error, "EncodingError U+921F");
expect(() => {ms932Encoder.encode("\u9220")}).to.throw(Error, "EncodingError U+9220");
expect(() => {ms932Encoder.encode("\u9221")}).to.throw(Error, "EncodingError U+9221");
expect(() => {ms932Encoder.encode("\u9222")}).to.throw(Error, "EncodingError U+9222");
expect(() => {ms932Encoder.encode("\u9223")}).to.throw(Error, "EncodingError U+9223");
expect(() => {ms932Encoder.encode("\u9224")}).to.throw(Error, "EncodingError U+9224");
expect(() => {ms932Encoder.encode("\u9225")}).to.throw(Error, "EncodingError U+9225");
expect(() => {ms932Encoder.encode("\u9226")}).to.throw(Error, "EncodingError U+9226");
expect(() => {ms932Encoder.encode("\u9227")}).to.throw(Error, "EncodingError U+9227");
expect(() => {ms932Encoder.encode("\u9228")}).to.throw(Error, "EncodingError U+9228");
r = r && ([...ms932Encoder.encode("鈩")].join(",") === "232,110"); // U+9229
expect(() => {ms932Encoder.encode("\u922A")}).to.throw(Error, "EncodingError U+922A");
expect(() => {ms932Encoder.encode("\u922B")}).to.throw(Error, "EncodingError U+922B");
r = r && ([...ms932Encoder.encode("鈬")].join(",") === "231,227"); // U+922C
expect(() => {ms932Encoder.encode("\u922D")}).to.throw(Error, "EncodingError U+922D");
expect(() => {ms932Encoder.encode("\u922E")}).to.throw(Error, "EncodingError U+922E");
expect(() => {ms932Encoder.encode("\u922F")}).to.throw(Error, "EncodingError U+922F");
expect(() => {ms932Encoder.encode("\u9230")}).to.throw(Error, "EncodingError U+9230");
expect(() => {ms932Encoder.encode("\u9231")}).to.throw(Error, "EncodingError U+9231");
expect(() => {ms932Encoder.encode("\u9232")}).to.throw(Error, "EncodingError U+9232");
expect(() => {ms932Encoder.encode("\u9233")}).to.throw(Error, "EncodingError U+9233");
r = r && ([...ms932Encoder.encode("鈴")].join(",") === "151,233"); // U+9234
expect(() => {ms932Encoder.encode("\u9235")}).to.throw(Error, "EncodingError U+9235");
expect(() => {ms932Encoder.encode("\u9236")}).to.throw(Error, "EncodingError U+9236");
r = r && ([...ms932Encoder.encode("鈷")].join(",") === "140,216"); // U+9237
expect(() => {ms932Encoder.encode("\u9238")}).to.throw(Error, "EncodingError U+9238");
r = r && ([...ms932Encoder.encode("鈹鈺")].join(",") === "251,202,251,196"); // U+9239
expect(() => {ms932Encoder.encode("\u923B")}).to.throw(Error, "EncodingError U+923B");
r = r && ([...ms932Encoder.encode("鈼")].join(",") === "251,198"); // U+923C
expect(() => {ms932Encoder.encode("\u923D")}).to.throw(Error, "EncodingError U+923D");
expect(() => {ms932Encoder.encode("\u923E")}).to.throw(Error, "EncodingError U+923E");
r = r && ([...ms932Encoder.encode("鈿鉀")].join(",") === "231,237,251,197"); // U+923F
expect(() => {ms932Encoder.encode("\u9241")}).to.throw(Error, "EncodingError U+9241");
expect(() => {ms932Encoder.encode("\u9242")}).to.throw(Error, "EncodingError U+9242");
expect(() => {ms932Encoder.encode("\u9243")}).to.throw(Error, "EncodingError U+9243");
r = r && ([...ms932Encoder.encode("鉄鉅")].join(",") === "147,83,231,232"); // U+9244
expect(() => {ms932Encoder.encode("\u9246")}).to.throw(Error, "EncodingError U+9246");
expect(() => {ms932Encoder.encode("\u9247")}).to.throw(Error, "EncodingError U+9247");
r = r && ([...ms932Encoder.encode("鉈鉉")].join(",") === "231,235,231,233"); // U+9248
expect(() => {ms932Encoder.encode("\u924A")}).to.throw(Error, "EncodingError U+924A");
r = r && ([...ms932Encoder.encode("鉋")].join(",") === "231,238"); // U+924B
expect(() => {ms932Encoder.encode("\u924C")}).to.throw(Error, "EncodingError U+924C");
expect(() => {ms932Encoder.encode("\u924D")}).to.throw(Error, "EncodingError U+924D");
r = r && ([...ms932Encoder.encode("鉎")].join(",") === "251,199"); // U+924E
expect(() => {ms932Encoder.encode("\u924F")}).to.throw(Error, "EncodingError U+924F");
r = r && ([...ms932Encoder.encode("鉐鉑")].join(",") === "231,239,251,201"); // U+9250
expect(() => {ms932Encoder.encode("\u9252")}).to.throw(Error, "EncodingError U+9252");
expect(() => {ms932Encoder.encode("\u9253")}).to.throw(Error, "EncodingError U+9253");
expect(() => {ms932Encoder.encode("\u9254")}).to.throw(Error, "EncodingError U+9254");
expect(() => {ms932Encoder.encode("\u9255")}).to.throw(Error, "EncodingError U+9255");
expect(() => {ms932Encoder.encode("\u9256")}).to.throw(Error, "EncodingError U+9256");
r = r && ([...ms932Encoder.encode("鉗")].join(",") === "231,231"); // U+9257
expect(() => {ms932Encoder.encode("\u9258")}).to.throw(Error, "EncodingError U+9258");
r = r && ([...ms932Encoder.encode("鉙鉚鉛")].join(",") === "251,200,231,244,137,148"); // U+9259
expect(() => {ms932Encoder.encode("\u925C")}).to.throw(Error, "EncodingError U+925C");
expect(() => {ms932Encoder.encode("\u925D")}).to.throw(Error, "EncodingError U+925D");
r = r && ([...ms932Encoder.encode("鉞")].join(",") === "231,230"); // U+925E
expect(() => {ms932Encoder.encode("\u925F")}).to.throw(Error, "EncodingError U+925F");
expect(() => {ms932Encoder.encode("\u9260")}).to.throw(Error, "EncodingError U+9260");
expect(() => {ms932Encoder.encode("\u9261")}).to.throw(Error, "EncodingError U+9261");
r = r && ([...ms932Encoder.encode("鉢")].join(",") === "148,171"); // U+9262
expect(() => {ms932Encoder.encode("\u9263")}).to.throw(Error, "EncodingError U+9263");
r = r && ([...ms932Encoder.encode("鉤")].join(",") === "231,234"); // U+9264
expect(() => {ms932Encoder.encode("\u9265")}).to.throw(Error, "EncodingError U+9265");
r = r && ([...ms932Encoder.encode("鉦鉧")].join(",") === "143,222,251,203"); // U+9266
expect(() => {ms932Encoder.encode("\u9268")}).to.throw(Error, "EncodingError U+9268");
expect(() => {ms932Encoder.encode("\u9269")}).to.throw(Error, "EncodingError U+9269");
expect(() => {ms932Encoder.encode("\u926A")}).to.throw(Error, "EncodingError U+926A");
expect(() => {ms932Encoder.encode("\u926B")}).to.throw(Error, "EncodingError U+926B");
expect(() => {ms932Encoder.encode("\u926C")}).to.throw(Error, "EncodingError U+926C");
expect(() => {ms932Encoder.encode("\u926D")}).to.throw(Error, "EncodingError U+926D");
expect(() => {ms932Encoder.encode("\u926E")}).to.throw(Error, "EncodingError U+926E");
expect(() => {ms932Encoder.encode("\u926F")}).to.throw(Error, "EncodingError U+926F");
expect(() => {ms932Encoder.encode("\u9270")}).to.throw(Error, "EncodingError U+9270");
r = r && ([...ms932Encoder.encode("鉱")].join(",") === "141,122"); // U+9271
expect(() => {ms932Encoder.encode("\u9272")}).to.throw(Error, "EncodingError U+9272");
expect(() => {ms932Encoder.encode("\u9273")}).to.throw(Error, "EncodingError U+9273");
expect(() => {ms932Encoder.encode("\u9274")}).to.throw(Error, "EncodingError U+9274");
expect(() => {ms932Encoder.encode("\u9275")}).to.throw(Error, "EncodingError U+9275");
expect(() => {ms932Encoder.encode("\u9276")}).to.throw(Error, "EncodingError U+9276");
r = r && ([...ms932Encoder.encode("鉷鉸")].join(",") === "251,205,251,206"); // U+9277
expect(() => {ms932Encoder.encode("\u9279")}).to.throw(Error, "EncodingError U+9279");
expect(() => {ms932Encoder.encode("\u927A")}).to.throw(Error, "EncodingError U+927A");
expect(() => {ms932Encoder.encode("\u927B")}).to.throw(Error, "EncodingError U+927B");
expect(() => {ms932Encoder.encode("\u927C")}).to.throw(Error, "EncodingError U+927C");
expect(() => {ms932Encoder.encode("\u927D")}).to.throw(Error, "EncodingError U+927D");
r = r && ([...ms932Encoder.encode("鉾")].join(",") === "150,103"); // U+927E
expect(() => {ms932Encoder.encode("\u927F")}).to.throw(Error, "EncodingError U+927F");
r = r && ([...ms932Encoder.encode("銀")].join(",") === "139,226"); // U+9280
expect(() => {ms932Encoder.encode("\u9281")}).to.throw(Error, "EncodingError U+9281");
expect(() => {ms932Encoder.encode("\u9282")}).to.throw(Error, "EncodingError U+9282");
r = r && ([...ms932Encoder.encode("銃")].join(",") === "143,101"); // U+9283
expect(() => {ms932Encoder.encode("\u9284")}).to.throw(Error, "EncodingError U+9284");
r = r && ([...ms932Encoder.encode("銅")].join(",") === "147,186"); // U+9285
expect(() => {ms932Encoder.encode("\u9286")}).to.throw(Error, "EncodingError U+9286");
expect(() => {ms932Encoder.encode("\u9287")}).to.throw(Error, "EncodingError U+9287");
r = r && ([...ms932Encoder.encode("銈")].join(",") === "250,95"); // U+9288
expect(() => {ms932Encoder.encode("\u9289")}).to.throw(Error, "EncodingError U+9289");
expect(() => {ms932Encoder.encode("\u928A")}).to.throw(Error, "EncodingError U+928A");
expect(() => {ms932Encoder.encode("\u928B")}).to.throw(Error, "EncodingError U+928B");
expect(() => {ms932Encoder.encode("\u928C")}).to.throw(Error, "EncodingError U+928C");
expect(() => {ms932Encoder.encode("\u928D")}).to.throw(Error, "EncodingError U+928D");
expect(() => {ms932Encoder.encode("\u928E")}).to.throw(Error, "EncodingError U+928E");
expect(() => {ms932Encoder.encode("\u928F")}).to.throw(Error, "EncodingError U+928F");
expect(() => {ms932Encoder.encode("\u9290")}).to.throw(Error, "EncodingError U+9290");
r = r && ([...ms932Encoder.encode("銑")].join(",") === "145,76"); // U+9291
expect(() => {ms932Encoder.encode("\u9292")}).to.throw(Error, "EncodingError U+9292");
r = r && ([...ms932Encoder.encode("銓")].join(",") === "231,242"); // U+9293
expect(() => {ms932Encoder.encode("\u9294")}).to.throw(Error, "EncodingError U+9294");
r = r && ([...ms932Encoder.encode("銕銖")].join(",") === "231,236,231,241"); // U+9295
expect(() => {ms932Encoder.encode("\u9297")}).to.throw(Error, "EncodingError U+9297");
r = r && ([...ms932Encoder.encode("銘")].join(",") === "150,193"); // U+9298
expect(() => {ms932Encoder.encode("\u9299")}).to.throw(Error, "EncodingError U+9299");
r = r && ([...ms932Encoder.encode("銚銛銜")].join(",") === "146,182,231,243,231,240"); // U+929A
expect(() => {ms932Encoder.encode("\u929D")}).to.throw(Error, "EncodingError U+929D");
expect(() => {ms932Encoder.encode("\u929E")}).to.throw(Error, "EncodingError U+929E");
expect(() => {ms932Encoder.encode("\u929F")}).to.throw(Error, "EncodingError U+929F");
expect(() => {ms932Encoder.encode("\u92A0")}).to.throw(Error, "EncodingError U+92A0");
expect(() => {ms932Encoder.encode("\u92A1")}).to.throw(Error, "EncodingError U+92A1");
expect(() => {ms932Encoder.encode("\u92A2")}).to.throw(Error, "EncodingError U+92A2");
expect(() => {ms932Encoder.encode("\u92A3")}).to.throw(Error, "EncodingError U+92A3");
expect(() => {ms932Encoder.encode("\u92A4")}).to.throw(Error, "EncodingError U+92A4");
expect(() => {ms932Encoder.encode("\u92A5")}).to.throw(Error, "EncodingError U+92A5");
expect(() => {ms932Encoder.encode("\u92A6")}).to.throw(Error, "EncodingError U+92A6");
r = r && ([...ms932Encoder.encode("銧")].join(",") === "251,204"); // U+92A7
expect(() => {ms932Encoder.encode("\u92A8")}).to.throw(Error, "EncodingError U+92A8");
expect(() => {ms932Encoder.encode("\u92A9")}).to.throw(Error, "EncodingError U+92A9");
expect(() => {ms932Encoder.encode("\u92AA")}).to.throw(Error, "EncodingError U+92AA");
expect(() => {ms932Encoder.encode("\u92AB")}).to.throw(Error, "EncodingError U+92AB");
expect(() => {ms932Encoder.encode("\u92AC")}).to.throw(Error, "EncodingError U+92AC");
r = r && ([...ms932Encoder.encode("銭")].join(",") === "145,75"); // U+92AD
expect(() => {ms932Encoder.encode("\u92AE")}).to.throw(Error, "EncodingError U+92AE");
expect(() => {ms932Encoder.encode("\u92AF")}).to.throw(Error, "EncodingError U+92AF");
expect(() => {ms932Encoder.encode("\u92B0")}).to.throw(Error, "EncodingError U+92B0");
expect(() => {ms932Encoder.encode("\u92B1")}).to.throw(Error, "EncodingError U+92B1");
expect(() => {ms932Encoder.encode("\u92B2")}).to.throw(Error, "EncodingError U+92B2");
expect(() => {ms932Encoder.encode("\u92B3")}).to.throw(Error, "EncodingError U+92B3");
expect(() => {ms932Encoder.encode("\u92B4")}).to.throw(Error, "EncodingError U+92B4");
expect(() => {ms932Encoder.encode("\u92B5")}).to.throw(Error, "EncodingError U+92B5");
expect(() => {ms932Encoder.encode("\u92B6")}).to.throw(Error, "EncodingError U+92B6");
r = r && ([...ms932Encoder.encode("銷")].join(",") === "231,247"); // U+92B7
expect(() => {ms932Encoder.encode("\u92B8")}).to.throw(Error, "EncodingError U+92B8");
r = r && ([...ms932Encoder.encode("銹")].join(",") === "231,246"); // U+92B9
expect(() => {ms932Encoder.encode("\u92BA")}).to.throw(Error, "EncodingError U+92BA");
expect(() => {ms932Encoder.encode("\u92BB")}).to.throw(Error, "EncodingError U+92BB");
expect(() => {ms932Encoder.encode("\u92BC")}).to.throw(Error, "EncodingError U+92BC");
expect(() => {ms932Encoder.encode("\u92BD")}).to.throw(Error, "EncodingError U+92BD");
expect(() => {ms932Encoder.encode("\u92BE")}).to.throw(Error, "EncodingError U+92BE");
expect(() => {ms932Encoder.encode("\u92BF")}).to.throw(Error, "EncodingError U+92BF");
expect(() => {ms932Encoder.encode("\u92C0")}).to.throw(Error, "EncodingError U+92C0");
expect(() => {ms932Encoder.encode("\u92C1")}).to.throw(Error, "EncodingError U+92C1");
expect(() => {ms932Encoder.encode("\u92C2")}).to.throw(Error, "EncodingError U+92C2");
expect(() => {ms932Encoder.encode("\u92C3")}).to.throw(Error, "EncodingError U+92C3");
expect(() => {ms932Encoder.encode("\u92C4")}).to.throw(Error, "EncodingError U+92C4");
expect(() => {ms932Encoder.encode("\u92C5")}).to.throw(Error, "EncodingError U+92C5");
expect(() => {ms932Encoder.encode("\u92C6")}).to.throw(Error, "EncodingError U+92C6");
expect(() => {ms932Encoder.encode("\u92C7")}).to.throw(Error, "EncodingError U+92C7");
expect(() => {ms932Encoder.encode("\u92C8")}).to.throw(Error, "EncodingError U+92C8");
expect(() => {ms932Encoder.encode("\u92C9")}).to.throw(Error, "EncodingError U+92C9");
expect(() => {ms932Encoder.encode("\u92CA")}).to.throw(Error, "EncodingError U+92CA");
expect(() => {ms932Encoder.encode("\u92CB")}).to.throw(Error, "EncodingError U+92CB");
expect(() => {ms932Encoder.encode("\u92CC")}).to.throw(Error, "EncodingError U+92CC");
expect(() => {ms932Encoder.encode("\u92CD")}).to.throw(Error, "EncodingError U+92CD");
expect(() => {ms932Encoder.encode("\u92CE")}).to.throw(Error, "EncodingError U+92CE");
r = r && ([...ms932Encoder.encode("鋏鋐")].join(",") === "231,245,251,210"); // U+92CF
expect(() => {ms932Encoder.encode("\u92D1")}).to.throw(Error, "EncodingError U+92D1");
r = r && ([...ms932Encoder.encode("鋒鋓")].join(",") === "150,78,251,214"); // U+92D2
expect(() => {ms932Encoder.encode("\u92D4")}).to.throw(Error, "EncodingError U+92D4");
r = r && ([...ms932Encoder.encode("鋕")].join(",") === "251,212"); // U+92D5
expect(() => {ms932Encoder.encode("\u92D6")}).to.throw(Error, "EncodingError U+92D6");
r = r && ([...ms932Encoder.encode("鋗")].join(",") === "251,208"); // U+92D7
expect(() => {ms932Encoder.encode("\u92D8")}).to.throw(Error, "EncodingError U+92D8");
r = r && ([...ms932Encoder.encode("鋙")].join(",") === "251,209"); // U+92D9
expect(() => {ms932Encoder.encode("\u92DA")}).to.throw(Error, "EncodingError U+92DA");
expect(() => {ms932Encoder.encode("\u92DB")}).to.throw(Error, "EncodingError U+92DB");
expect(() => {ms932Encoder.encode("\u92DC")}).to.throw(Error, "EncodingError U+92DC");
expect(() => {ms932Encoder.encode("\u92DD")}).to.throw(Error, "EncodingError U+92DD");
expect(() => {ms932Encoder.encode("\u92DE")}).to.throw(Error, "EncodingError U+92DE");
expect(() => {ms932Encoder.encode("\u92DF")}).to.throw(Error, "EncodingError U+92DF");
r = r && ([...ms932Encoder.encode("鋠")].join(",") === "251,213"); // U+92E0
expect(() => {ms932Encoder.encode("\u92E1")}).to.throw(Error, "EncodingError U+92E1");
expect(() => {ms932Encoder.encode("\u92E2")}).to.throw(Error, "EncodingError U+92E2");
expect(() => {ms932Encoder.encode("\u92E3")}).to.throw(Error, "EncodingError U+92E3");
r = r && ([...ms932Encoder.encode("鋤")].join(",") === "143,155"); // U+92E4
expect(() => {ms932Encoder.encode("\u92E5")}).to.throw(Error, "EncodingError U+92E5");
expect(() => {ms932Encoder.encode("\u92E6")}).to.throw(Error, "EncodingError U+92E6");
r = r && ([...ms932Encoder.encode("鋧")].join(",") === "251,207"); // U+92E7
expect(() => {ms932Encoder.encode("\u92E8")}).to.throw(Error, "EncodingError U+92E8");
r = r && ([...ms932Encoder.encode("鋩鋪")].join(",") === "231,248,149,221"); // U+92E9
expect(() => {ms932Encoder.encode("\u92EB")}).to.throw(Error, "EncodingError U+92EB");
expect(() => {ms932Encoder.encode("\u92EC")}).to.throw(Error, "EncodingError U+92EC");
r = r && ([...ms932Encoder.encode("鋭")].join(",") === "137,115"); // U+92ED
expect(() => {ms932Encoder.encode("\u92EE")}).to.throw(Error, "EncodingError U+92EE");
expect(() => {ms932Encoder.encode("\u92EF")}).to.throw(Error, "EncodingError U+92EF");
expect(() => {ms932Encoder.encode("\u92F0")}).to.throw(Error, "EncodingError U+92F0");
expect(() => {ms932Encoder.encode("\u92F1")}).to.throw(Error, "EncodingError U+92F1");
r = r && ([...ms932Encoder.encode("鋲鋳")].join(",") === "149,101,146,146"); // U+92F2
expect(() => {ms932Encoder.encode("\u92F4")}).to.throw(Error, "EncodingError U+92F4");
expect(() => {ms932Encoder.encode("\u92F5")}).to.throw(Error, "EncodingError U+92F5");
expect(() => {ms932Encoder.encode("\u92F6")}).to.throw(Error, "EncodingError U+92F6");
expect(() => {ms932Encoder.encode("\u92F7")}).to.throw(Error, "EncodingError U+92F7");
r = r && ([...ms932Encoder.encode("鋸鋹鋺鋻鋼")].join(",") === "139,152,250,101,231,250,251,217,141,124"); // U+92F8
expect(() => {ms932Encoder.encode("\u92FD")}).to.throw(Error, "EncodingError U+92FD");
expect(() => {ms932Encoder.encode("\u92FE")}).to.throw(Error, "EncodingError U+92FE");
r = r && ([...ms932Encoder.encode("鋿")].join(",") === "251,220"); // U+92FF
expect(() => {ms932Encoder.encode("\u9300")}).to.throw(Error, "EncodingError U+9300");
expect(() => {ms932Encoder.encode("\u9301")}).to.throw(Error, "EncodingError U+9301");
r = r && ([...ms932Encoder.encode("錂")].join(",") === "251,222"); // U+9302
expect(() => {ms932Encoder.encode("\u9303")}).to.throw(Error, "EncodingError U+9303");
expect(() => {ms932Encoder.encode("\u9304")}).to.throw(Error, "EncodingError U+9304");
expect(() => {ms932Encoder.encode("\u9305")}).to.throw(Error, "EncodingError U+9305");
r = r && ([...ms932Encoder.encode("錆")].join(",") === "142,75"); // U+9306
expect(() => {ms932Encoder.encode("\u9307")}).to.throw(Error, "EncodingError U+9307");
expect(() => {ms932Encoder.encode("\u9308")}).to.throw(Error, "EncodingError U+9308");
expect(() => {ms932Encoder.encode("\u9309")}).to.throw(Error, "EncodingError U+9309");
expect(() => {ms932Encoder.encode("\u930A")}).to.throw(Error, "EncodingError U+930A");
expect(() => {ms932Encoder.encode("\u930B")}).to.throw(Error, "EncodingError U+930B");
expect(() => {ms932Encoder.encode("\u930C")}).to.throw(Error, "EncodingError U+930C");
expect(() => {ms932Encoder.encode("\u930D")}).to.throw(Error, "EncodingError U+930D");
expect(() => {ms932Encoder.encode("\u930E")}).to.throw(Error, "EncodingError U+930E");
r = r && ([...ms932Encoder.encode("錏錐")].join(",") === "231,249,144,141"); // U+930F
expect(() => {ms932Encoder.encode("\u9311")}).to.throw(Error, "EncodingError U+9311");
expect(() => {ms932Encoder.encode("\u9312")}).to.throw(Error, "EncodingError U+9312");
expect(() => {ms932Encoder.encode("\u9313")}).to.throw(Error, "EncodingError U+9313");
expect(() => {ms932Encoder.encode("\u9314")}).to.throw(Error, "EncodingError U+9314");
expect(() => {ms932Encoder.encode("\u9315")}).to.throw(Error, "EncodingError U+9315");
expect(() => {ms932Encoder.encode("\u9316")}).to.throw(Error, "EncodingError U+9316");
expect(() => {ms932Encoder.encode("\u9317")}).to.throw(Error, "EncodingError U+9317");
r = r && ([...ms932Encoder.encode("錘錙錚")].join(",") === "144,142,232,64,232,66"); // U+9318
expect(() => {ms932Encoder.encode("\u931B")}).to.throw(Error, "EncodingError U+931B");
expect(() => {ms932Encoder.encode("\u931C")}).to.throw(Error, "EncodingError U+931C");
r = r && ([...ms932Encoder.encode("錝錞")].join(",") === "251,221,251,219"); // U+931D
expect(() => {ms932Encoder.encode("\u931F")}).to.throw(Error, "EncodingError U+931F");
r = r && ([...ms932Encoder.encode("錠錡錢錣")].join(",") === "143,249,251,216,232,65,232,67"); // U+9320
expect(() => {ms932Encoder.encode("\u9324")}).to.throw(Error, "EncodingError U+9324");
r = r && ([...ms932Encoder.encode("錥錦")].join(",") === "251,215,139,209"); // U+9325
expect(() => {ms932Encoder.encode("\u9327")}).to.throw(Error, "EncodingError U+9327");
r = r && ([...ms932Encoder.encode("錨")].join(",") === "149,100"); // U+9328
expect(() => {ms932Encoder.encode("\u9329")}).to.throw(Error, "EncodingError U+9329");
expect(() => {ms932Encoder.encode("\u932A")}).to.throw(Error, "EncodingError U+932A");
r = r && ([...ms932Encoder.encode("錫錬")].join(",") === "142,224,152,66"); // U+932B
expect(() => {ms932Encoder.encode("\u932D")}).to.throw(Error, "EncodingError U+932D");
r = r && ([...ms932Encoder.encode("錮錯")].join(",") === "231,252,141,246"); // U+932E
expect(() => {ms932Encoder.encode("\u9330")}).to.throw(Error, "EncodingError U+9330");
expect(() => {ms932Encoder.encode("\u9331")}).to.throw(Error, "EncodingError U+9331");
r = r && ([...ms932Encoder.encode("録")].join(",") === "152,94"); // U+9332
expect(() => {ms932Encoder.encode("\u9333")}).to.throw(Error, "EncodingError U+9333");
expect(() => {ms932Encoder.encode("\u9334")}).to.throw(Error, "EncodingError U+9334");
r = r && ([...ms932Encoder.encode("錵")].join(",") === "232,69"); // U+9335
expect(() => {ms932Encoder.encode("\u9336")}).to.throw(Error, "EncodingError U+9336");
expect(() => {ms932Encoder.encode("\u9337")}).to.throw(Error, "EncodingError U+9337");
expect(() => {ms932Encoder.encode("\u9338")}).to.throw(Error, "EncodingError U+9338");
expect(() => {ms932Encoder.encode("\u9339")}).to.throw(Error, "EncodingError U+9339");
r = r && ([...ms932Encoder.encode("錺錻")].join(",") === "232,68,232,70"); // U+933A
expect(() => {ms932Encoder.encode("\u933C")}).to.throw(Error, "EncodingError U+933C");
expect(() => {ms932Encoder.encode("\u933D")}).to.throw(Error, "EncodingError U+933D");
expect(() => {ms932Encoder.encode("\u933E")}).to.throw(Error, "EncodingError U+933E");
expect(() => {ms932Encoder.encode("\u933F")}).to.throw(Error, "EncodingError U+933F");
expect(() => {ms932Encoder.encode("\u9340")}).to.throw(Error, "EncodingError U+9340");
expect(() => {ms932Encoder.encode("\u9341")}).to.throw(Error, "EncodingError U+9341");
expect(() => {ms932Encoder.encode("\u9342")}).to.throw(Error, "EncodingError U+9342");
expect(() => {ms932Encoder.encode("\u9343")}).to.throw(Error, "EncodingError U+9343");
r = r && ([...ms932Encoder.encode("鍄")].join(",") === "231,251"); // U+9344
expect(() => {ms932Encoder.encode("\u9345")}).to.throw(Error, "EncodingError U+9345");
expect(() => {ms932Encoder.encode("\u9346")}).to.throw(Error, "EncodingError U+9346");
expect(() => {ms932Encoder.encode("\u9347")}).to.throw(Error, "EncodingError U+9347");
r = r && ([...ms932Encoder.encode("鍈")].join(",") === "250,94"); // U+9348
expect(() => {ms932Encoder.encode("\u9349")}).to.throw(Error, "EncodingError U+9349");
expect(() => {ms932Encoder.encode("\u934A")}).to.throw(Error, "EncodingError U+934A");
r = r && ([...ms932Encoder.encode("鍋")].join(",") === "147,231"); // U+934B
expect(() => {ms932Encoder.encode("\u934C")}).to.throw(Error, "EncodingError U+934C");
r = r && ([...ms932Encoder.encode("鍍")].join(",") === "147,116"); // U+934D
expect(() => {ms932Encoder.encode("\u934E")}).to.throw(Error, "EncodingError U+934E");
expect(() => {ms932Encoder.encode("\u934F")}).to.throw(Error, "EncodingError U+934F");
expect(() => {ms932Encoder.encode("\u9350")}).to.throw(Error, "EncodingError U+9350");
expect(() => {ms932Encoder.encode("\u9351")}).to.throw(Error, "EncodingError U+9351");
expect(() => {ms932Encoder.encode("\u9352")}).to.throw(Error, "EncodingError U+9352");
expect(() => {ms932Encoder.encode("\u9353")}).to.throw(Error, "EncodingError U+9353");
r = r && ([...ms932Encoder.encode("鍔")].join(",") === "146,213"); // U+9354
expect(() => {ms932Encoder.encode("\u9355")}).to.throw(Error, "EncodingError U+9355");
r = r && ([...ms932Encoder.encode("鍖鍗")].join(",") === "232,75,251,224"); // U+9356
expect(() => {ms932Encoder.encode("\u9358")}).to.throw(Error, "EncodingError U+9358");
expect(() => {ms932Encoder.encode("\u9359")}).to.throw(Error, "EncodingError U+9359");
expect(() => {ms932Encoder.encode("\u935A")}).to.throw(Error, "EncodingError U+935A");
r = r && ([...ms932Encoder.encode("鍛鍜")].join(",") === "146,98,232,71"); // U+935B
expect(() => {ms932Encoder.encode("\u935D")}).to.throw(Error, "EncodingError U+935D");
expect(() => {ms932Encoder.encode("\u935E")}).to.throw(Error, "EncodingError U+935E");
expect(() => {ms932Encoder.encode("\u935F")}).to.throw(Error, "EncodingError U+935F");
r = r && ([...ms932Encoder.encode("鍠")].join(",") === "232,72"); // U+9360
expect(() => {ms932Encoder.encode("\u9361")}).to.throw(Error, "EncodingError U+9361");
expect(() => {ms932Encoder.encode("\u9362")}).to.throw(Error, "EncodingError U+9362");
expect(() => {ms932Encoder.encode("\u9363")}).to.throw(Error, "EncodingError U+9363");
expect(() => {ms932Encoder.encode("\u9364")}).to.throw(Error, "EncodingError U+9364");
expect(() => {ms932Encoder.encode("\u9365")}).to.throw(Error, "EncodingError U+9365");
expect(() => {ms932Encoder.encode("\u9366")}).to.throw(Error, "EncodingError U+9366");
expect(() => {ms932Encoder.encode("\u9367")}).to.throw(Error, "EncodingError U+9367");
expect(() => {ms932Encoder.encode("\u9368")}).to.throw(Error, "EncodingError U+9368");
expect(() => {ms932Encoder.encode("\u9369")}).to.throw(Error, "EncodingError U+9369");
expect(() => {ms932Encoder.encode("\u936A")}).to.throw(Error, "EncodingError U+936A");
expect(() => {ms932Encoder.encode("\u936B")}).to.throw(Error, "EncodingError U+936B");
r = r && ([...ms932Encoder.encode("鍬")].join(",") === "140,76"); // U+936C
expect(() => {ms932Encoder.encode("\u936D")}).to.throw(Error, "EncodingError U+936D");
r = r && ([...ms932Encoder.encode("鍮")].join(",") === "232,74"); // U+936E
expect(() => {ms932Encoder.encode("\u936F")}).to.throw(Error, "EncodingError U+936F");
r = r && ([...ms932Encoder.encode("鍰")].join(",") === "251,223"); // U+9370
expect(() => {ms932Encoder.encode("\u9371")}).to.throw(Error, "EncodingError U+9371");
expect(() => {ms932Encoder.encode("\u9372")}).to.throw(Error, "EncodingError U+9372");
expect(() => {ms932Encoder.encode("\u9373")}).to.throw(Error, "EncodingError U+9373");
expect(() => {ms932Encoder.encode("\u9374")}).to.throw(Error, "EncodingError U+9374");
r = r && ([...ms932Encoder.encode("鍵")].join(",") === "140,174"); // U+9375
expect(() => {ms932Encoder.encode("\u9376")}).to.throw(Error, "EncodingError U+9376");
expect(() => {ms932Encoder.encode("\u9377")}).to.throw(Error, "EncodingError U+9377");
expect(() => {ms932Encoder.encode("\u9378")}).to.throw(Error, "EncodingError U+9378");
expect(() => {ms932Encoder.encode("\u9379")}).to.throw(Error, "EncodingError U+9379");
expect(() => {ms932Encoder.encode("\u937A")}).to.throw(Error, "EncodingError U+937A");
expect(() => {ms932Encoder.encode("\u937B")}).to.throw(Error, "EncodingError U+937B");
r = r && ([...ms932Encoder.encode("鍼")].join(",") === "232,73"); // U+937C
expect(() => {ms932Encoder.encode("\u937D")}).to.throw(Error, "EncodingError U+937D");
r = r && ([...ms932Encoder.encode("鍾")].join(",") === "143,223"); // U+937E
expect(() => {ms932Encoder.encode("\u937F")}).to.throw(Error, "EncodingError U+937F");
expect(() => {ms932Encoder.encode("\u9380")}).to.throw(Error, "EncodingError U+9380");
expect(() => {ms932Encoder.encode("\u9381")}).to.throw(Error, "EncodingError U+9381");
expect(() => {ms932Encoder.encode("\u9382")}).to.throw(Error, "EncodingError U+9382");
expect(() => {ms932Encoder.encode("\u9383")}).to.throw(Error, "EncodingError U+9383");
expect(() => {ms932Encoder.encode("\u9384")}).to.throw(Error, "EncodingError U+9384");
expect(() => {ms932Encoder.encode("\u9385")}).to.throw(Error, "EncodingError U+9385");
expect(() => {ms932Encoder.encode("\u9386")}).to.throw(Error, "EncodingError U+9386");
expect(() => {ms932Encoder.encode("\u9387")}).to.throw(Error, "EncodingError U+9387");
expect(() => {ms932Encoder.encode("\u9388")}).to.throw(Error, "EncodingError U+9388");
expect(() => {ms932Encoder.encode("\u9389")}).to.throw(Error, "EncodingError U+9389");
expect(() => {ms932Encoder.encode("\u938A")}).to.throw(Error, "EncodingError U+938A");
expect(() => {ms932Encoder.encode("\u938B")}).to.throw(Error, "EncodingError U+938B");
r = r && ([...ms932Encoder.encode("鎌")].join(",") === "138,153"); // U+938C
expect(() => {ms932Encoder.encode("\u938D")}).to.throw(Error, "EncodingError U+938D");
expect(() => {ms932Encoder.encode("\u938E")}).to.throw(Error, "EncodingError U+938E");
expect(() => {ms932Encoder.encode("\u938F")}).to.throw(Error, "EncodingError U+938F");
expect(() => {ms932Encoder.encode("\u9390")}).to.throw(Error, "EncodingError U+9390");
expect(() => {ms932Encoder.encode("\u9391")}).to.throw(Error, "EncodingError U+9391");
expect(() => {ms932Encoder.encode("\u9392")}).to.throw(Error, "EncodingError U+9392");
expect(() => {ms932Encoder.encode("\u9393")}).to.throw(Error, "EncodingError U+9393");
r = r && ([...ms932Encoder.encode("鎔")].join(",") === "232,79"); // U+9394
expect(() => {ms932Encoder.encode("\u9395")}).to.throw(Error, "EncodingError U+9395");
r = r && ([...ms932Encoder.encode("鎖鎗")].join(",") === "141,189,145,153"); // U+9396
expect(() => {ms932Encoder.encode("\u9398")}).to.throw(Error, "EncodingError U+9398");
expect(() => {ms932Encoder.encode("\u9399")}).to.throw(Error, "EncodingError U+9399");
r = r && ([...ms932Encoder.encode("鎚")].join(",") === "146,200"); // U+939A
expect(() => {ms932Encoder.encode("\u939B")}).to.throw(Error, "EncodingError U+939B");
expect(() => {ms932Encoder.encode("\u939C")}).to.throw(Error, "EncodingError U+939C");
expect(() => {ms932Encoder.encode("\u939D")}).to.throw(Error, "EncodingError U+939D");
expect(() => {ms932Encoder.encode("\u939E")}).to.throw(Error, "EncodingError U+939E");
expect(() => {ms932Encoder.encode("\u939F")}).to.throw(Error, "EncodingError U+939F");
expect(() => {ms932Encoder.encode("\u93A0")}).to.throw(Error, "EncodingError U+93A0");
expect(() => {ms932Encoder.encode("\u93A1")}).to.throw(Error, "EncodingError U+93A1");
expect(() => {ms932Encoder.encode("\u93A2")}).to.throw(Error, "EncodingError U+93A2");
expect(() => {ms932Encoder.encode("\u93A3")}).to.throw(Error, "EncodingError U+93A3");
r = r && ([...ms932Encoder.encode("鎤")].join(",") === "251,225"); // U+93A4
expect(() => {ms932Encoder.encode("\u93A5")}).to.throw(Error, "EncodingError U+93A5");
expect(() => {ms932Encoder.encode("\u93A6")}).to.throw(Error, "EncodingError U+93A6");
r = r && ([...ms932Encoder.encode("鎧")].join(",") === "138,90"); // U+93A7
expect(() => {ms932Encoder.encode("\u93A8")}).to.throw(Error, "EncodingError U+93A8");
expect(() => {ms932Encoder.encode("\u93A9")}).to.throw(Error, "EncodingError U+93A9");
expect(() => {ms932Encoder.encode("\u93AA")}).to.throw(Error, "EncodingError U+93AA");
expect(() => {ms932Encoder.encode("\u93AB")}).to.throw(Error, "EncodingError U+93AB");
r = r && ([...ms932Encoder.encode("鎬鎭鎮")].join(",") === "232,77,232,78,146,193"); // U+93AC
expect(() => {ms932Encoder.encode("\u93AF")}).to.throw(Error, "EncodingError U+93AF");
r = r && ([...ms932Encoder.encode("鎰")].join(",") === "232,76"); // U+93B0
expect(() => {ms932Encoder.encode("\u93B1")}).to.throw(Error, "EncodingError U+93B1");
expect(() => {ms932Encoder.encode("\u93B2")}).to.throw(Error, "EncodingError U+93B2");
expect(() => {ms932Encoder.encode("\u93B3")}).to.throw(Error, "EncodingError U+93B3");
expect(() => {ms932Encoder.encode("\u93B4")}).to.throw(Error, "EncodingError U+93B4");
expect(() => {ms932Encoder.encode("\u93B5")}).to.throw(Error, "EncodingError U+93B5");
expect(() => {ms932Encoder.encode("\u93B6")}).to.throw(Error, "EncodingError U+93B6");
expect(() => {ms932Encoder.encode("\u93B7")}).to.throw(Error, "EncodingError U+93B7");
expect(() => {ms932Encoder.encode("\u93B8")}).to.throw(Error, "EncodingError U+93B8");
r = r && ([...ms932Encoder.encode("鎹")].join(",") === "232,80"); // U+93B9
expect(() => {ms932Encoder.encode("\u93BA")}).to.throw(Error, "EncodingError U+93BA");
expect(() => {ms932Encoder.encode("\u93BB")}).to.throw(Error, "EncodingError U+93BB");
expect(() => {ms932Encoder.encode("\u93BC")}).to.throw(Error, "EncodingError U+93BC");
expect(() => {ms932Encoder.encode("\u93BD")}).to.throw(Error, "EncodingError U+93BD");
expect(() => {ms932Encoder.encode("\u93BE")}).to.throw(Error, "EncodingError U+93BE");
expect(() => {ms932Encoder.encode("\u93BF")}).to.throw(Error, "EncodingError U+93BF");
expect(() => {ms932Encoder.encode("\u93C0")}).to.throw(Error, "EncodingError U+93C0");
expect(() => {ms932Encoder.encode("\u93C1")}).to.throw(Error, "EncodingError U+93C1");
expect(() => {ms932Encoder.encode("\u93C2")}).to.throw(Error, "EncodingError U+93C2");
r = r && ([...ms932Encoder.encode("鏃")].join(",") === "232,86"); // U+93C3
expect(() => {ms932Encoder.encode("\u93C4")}).to.throw(Error, "EncodingError U+93C4");
expect(() => {ms932Encoder.encode("\u93C5")}).to.throw(Error, "EncodingError U+93C5");
r = r && ([...ms932Encoder.encode("鏆")].join(",") === "251,226"); // U+93C6
expect(() => {ms932Encoder.encode("\u93C7")}).to.throw(Error, "EncodingError U+93C7");
r = r && ([...ms932Encoder.encode("鏈")].join(",") === "232,89"); // U+93C8
expect(() => {ms932Encoder.encode("\u93C9")}).to.throw(Error, "EncodingError U+93C9");
expect(() => {ms932Encoder.encode("\u93CA")}).to.throw(Error, "EncodingError U+93CA");
expect(() => {ms932Encoder.encode("\u93CB")}).to.throw(Error, "EncodingError U+93CB");
expect(() => {ms932Encoder.encode("\u93CC")}).to.throw(Error, "EncodingError U+93CC");
expect(() => {ms932Encoder.encode("\u93CD")}).to.throw(Error, "EncodingError U+93CD");
expect(() => {ms932Encoder.encode("\u93CE")}).to.throw(Error, "EncodingError U+93CE");
expect(() => {ms932Encoder.encode("\u93CF")}).to.throw(Error, "EncodingError U+93CF");
r = r && ([...ms932Encoder.encode("鏐鏑")].join(",") === "232,88,147,76"); // U+93D0
expect(() => {ms932Encoder.encode("\u93D2")}).to.throw(Error, "EncodingError U+93D2");
expect(() => {ms932Encoder.encode("\u93D3")}).to.throw(Error, "EncodingError U+93D3");
expect(() => {ms932Encoder.encode("\u93D4")}).to.throw(Error, "EncodingError U+93D4");
expect(() => {ms932Encoder.encode("\u93D5")}).to.throw(Error, "EncodingError U+93D5");
r = r && ([...ms932Encoder.encode("鏖鏗鏘")].join(",") === "232,81,232,82,232,85"); // U+93D6
expect(() => {ms932Encoder.encode("\u93D9")}).to.throw(Error, "EncodingError U+93D9");
expect(() => {ms932Encoder.encode("\u93DA")}).to.throw(Error, "EncodingError U+93DA");
expect(() => {ms932Encoder.encode("\u93DB")}).to.throw(Error, "EncodingError U+93DB");
expect(() => {ms932Encoder.encode("\u93DC")}).to.throw(Error, "EncodingError U+93DC");
r = r && ([...ms932Encoder.encode("鏝鏞")].join(",") === "232,87,251,227"); // U+93DD
expect(() => {ms932Encoder.encode("\u93DF")}).to.throw(Error, "EncodingError U+93DF");
expect(() => {ms932Encoder.encode("\u93E0")}).to.throw(Error, "EncodingError U+93E0");
r = r && ([...ms932Encoder.encode("鏡")].join(",") === "139,190"); // U+93E1
expect(() => {ms932Encoder.encode("\u93E2")}).to.throw(Error, "EncodingError U+93E2");
expect(() => {ms932Encoder.encode("\u93E3")}).to.throw(Error, "EncodingError U+93E3");
r = r && ([...ms932Encoder.encode("鏤鏥")].join(",") === "232,90,232,84"); // U+93E4
expect(() => {ms932Encoder.encode("\u93E6")}).to.throw(Error, "EncodingError U+93E6");
expect(() => {ms932Encoder.encode("\u93E7")}).to.throw(Error, "EncodingError U+93E7");
r = r && ([...ms932Encoder.encode("鏨")].join(",") === "232,83"); // U+93E8
expect(() => {ms932Encoder.encode("\u93E9")}).to.throw(Error, "EncodingError U+93E9");
expect(() => {ms932Encoder.encode("\u93EA")}).to.throw(Error, "EncodingError U+93EA");
expect(() => {ms932Encoder.encode("\u93EB")}).to.throw(Error, "EncodingError U+93EB");
expect(() => {ms932Encoder.encode("\u93EC")}).to.throw(Error, "EncodingError U+93EC");
expect(() => {ms932Encoder.encode("\u93ED")}).to.throw(Error, "EncodingError U+93ED");
expect(() => {ms932Encoder.encode("\u93EE")}).to.throw(Error, "EncodingError U+93EE");
expect(() => {ms932Encoder.encode("\u93EF")}).to.throw(Error, "EncodingError U+93EF");
expect(() => {ms932Encoder.encode("\u93F0")}).to.throw(Error, "EncodingError U+93F0");
expect(() => {ms932Encoder.encode("\u93F1")}).to.throw(Error, "EncodingError U+93F1");
expect(() => {ms932Encoder.encode("\u93F2")}).to.throw(Error, "EncodingError U+93F2");
expect(() => {ms932Encoder.encode("\u93F3")}).to.throw(Error, "EncodingError U+93F3");
expect(() => {ms932Encoder.encode("\u93F4")}).to.throw(Error, "EncodingError U+93F4");
expect(() => {ms932Encoder.encode("\u93F5")}).to.throw(Error, "EncodingError U+93F5");
expect(() => {ms932Encoder.encode("\u93F6")}).to.throw(Error, "EncodingError U+93F6");
expect(() => {ms932Encoder.encode("\u93F7")}).to.throw(Error, "EncodingError U+93F7");
r = r && ([...ms932Encoder.encode("鏸")].join(",") === "251,228"); // U+93F8
expect(() => {ms932Encoder.encode("\u93F9")}).to.throw(Error, "EncodingError U+93F9");
expect(() => {ms932Encoder.encode("\u93FA")}).to.throw(Error, "EncodingError U+93FA");
expect(() => {ms932Encoder.encode("\u93FB")}).to.throw(Error, "EncodingError U+93FB");
expect(() => {ms932Encoder.encode("\u93FC")}).to.throw(Error, "EncodingError U+93FC");
expect(() => {ms932Encoder.encode("\u93FD")}).to.throw(Error, "EncodingError U+93FD");
expect(() => {ms932Encoder.encode("\u93FE")}).to.throw(Error, "EncodingError U+93FE");
expect(() => {ms932Encoder.encode("\u93FF")}).to.throw(Error, "EncodingError U+93FF");

expect(r).to.equal(true);

  });

});
