import assert from "node:assert";
import { Ms932Encoder } from "../../node/index.mjs";

describe("Ms932Encoder.prototype.encode 10", () => {

  it("encode(string) - U+9000-U+93FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
r = r && ([...ms932Encoder.encode("退送")].join(",") === "145,222,145,151"); // U+9000
assert.throws(() => {ms932Encoder.encode("\u9002")}, {name:"Error",message:"EncodingError U+9002"});
r = r && ([...ms932Encoder.encode("逃")].join(",") === "147,166"); // U+9003
assert.throws(() => {ms932Encoder.encode("\u9004")}, {name:"Error",message:"EncodingError U+9004"});
r = r && ([...ms932Encoder.encode("逅逆")].join(",") === "231,144,139,116"); // U+9005
assert.throws(() => {ms932Encoder.encode("\u9007")}, {name:"Error",message:"EncodingError U+9007"});
assert.throws(() => {ms932Encoder.encode("\u9008")}, {name:"Error",message:"EncodingError U+9008"});
assert.throws(() => {ms932Encoder.encode("\u9009")}, {name:"Error",message:"EncodingError U+9009"});
assert.throws(() => {ms932Encoder.encode("\u900A")}, {name:"Error",message:"EncodingError U+900A"});
r = r && ([...ms932Encoder.encode("逋")].join(",") === "231,153"); // U+900B
assert.throws(() => {ms932Encoder.encode("\u900C")}, {name:"Error",message:"EncodingError U+900C"});
r = r && ([...ms932Encoder.encode("逍逎透逐逑")].join(",") === "231,150,231,163,147,167,146,128,231,147"); // U+900D
assert.throws(() => {ms932Encoder.encode("\u9012")}, {name:"Error",message:"EncodingError U+9012"});
r = r && ([...ms932Encoder.encode("逓途逕逖逗")].join(",") === "146,252,147,114,231,148,231,152,144,128"); // U+9013
assert.throws(() => {ms932Encoder.encode("\u9018")}, {name:"Error",message:"EncodingError U+9018"});
r = r && ([...ms932Encoder.encode("這通")].join(",") === "148,135,146,202"); // U+9019
assert.throws(() => {ms932Encoder.encode("\u901B")}, {name:"Error",message:"EncodingError U+901B"});
assert.throws(() => {ms932Encoder.encode("\u901C")}, {name:"Error",message:"EncodingError U+901C"});
r = r && ([...ms932Encoder.encode("逝逞速造逡逢連")].join(",") === "144,192,231,151,145,172,145,162,231,149,136,167,152,65"); // U+901D
assert.throws(() => {ms932Encoder.encode("\u9024")}, {name:"Error",message:"EncodingError U+9024"});
assert.throws(() => {ms932Encoder.encode("\u9025")}, {name:"Error",message:"EncodingError U+9025"});
assert.throws(() => {ms932Encoder.encode("\u9026")}, {name:"Error",message:"EncodingError U+9026"});
r = r && ([...ms932Encoder.encode("逧")].join(",") === "231,154"); // U+9027
assert.throws(() => {ms932Encoder.encode("\u9028")}, {name:"Error",message:"EncodingError U+9028"});
assert.throws(() => {ms932Encoder.encode("\u9029")}, {name:"Error",message:"EncodingError U+9029"});
assert.throws(() => {ms932Encoder.encode("\u902A")}, {name:"Error",message:"EncodingError U+902A"});
assert.throws(() => {ms932Encoder.encode("\u902B")}, {name:"Error",message:"EncodingError U+902B"});
assert.throws(() => {ms932Encoder.encode("\u902C")}, {name:"Error",message:"EncodingError U+902C"});
assert.throws(() => {ms932Encoder.encode("\u902D")}, {name:"Error",message:"EncodingError U+902D"});
r = r && ([...ms932Encoder.encode("逮")].join(",") === "145,223"); // U+902E
assert.throws(() => {ms932Encoder.encode("\u902F")}, {name:"Error",message:"EncodingError U+902F"});
assert.throws(() => {ms932Encoder.encode("\u9030")}, {name:"Error",message:"EncodingError U+9030"});
r = r && ([...ms932Encoder.encode("週進")].join(",") === "143,84,144,105"); // U+9031
assert.throws(() => {ms932Encoder.encode("\u9033")}, {name:"Error",message:"EncodingError U+9033"});
assert.throws(() => {ms932Encoder.encode("\u9034")}, {name:"Error",message:"EncodingError U+9034"});
r = r && ([...ms932Encoder.encode("逵逶")].join(",") === "231,156,231,155"); // U+9035
assert.throws(() => {ms932Encoder.encode("\u9037")}, {name:"Error",message:"EncodingError U+9037"});
r = r && ([...ms932Encoder.encode("逸逹")].join(",") === "136,237,231,157"); // U+9038
assert.throws(() => {ms932Encoder.encode("\u903A")}, {name:"Error",message:"EncodingError U+903A"});
assert.throws(() => {ms932Encoder.encode("\u903B")}, {name:"Error",message:"EncodingError U+903B"});
r = r && ([...ms932Encoder.encode("逼")].join(",") === "149,78"); // U+903C
assert.throws(() => {ms932Encoder.encode("\u903D")}, {name:"Error",message:"EncodingError U+903D"});
r = r && ([...ms932Encoder.encode("逾")].join(",") === "231,165"); // U+903E
assert.throws(() => {ms932Encoder.encode("\u903F")}, {name:"Error",message:"EncodingError U+903F"});
assert.throws(() => {ms932Encoder.encode("\u9040")}, {name:"Error",message:"EncodingError U+9040"});
r = r && ([...ms932Encoder.encode("遁遂")].join(",") === "147,217,144,139"); // U+9041
assert.throws(() => {ms932Encoder.encode("\u9043")}, {name:"Error",message:"EncodingError U+9043"});
assert.throws(() => {ms932Encoder.encode("\u9044")}, {name:"Error",message:"EncodingError U+9044"});
r = r && ([...ms932Encoder.encode("遅")].join(",") === "146,120"); // U+9045
assert.throws(() => {ms932Encoder.encode("\u9046")}, {name:"Error",message:"EncodingError U+9046"});
r = r && ([...ms932Encoder.encode("遇")].join(",") === "139,246"); // U+9047
assert.throws(() => {ms932Encoder.encode("\u9048")}, {name:"Error",message:"EncodingError U+9048"});
r = r && ([...ms932Encoder.encode("遉遊運")].join(",") === "231,164,151,86,137,94"); // U+9049
assert.throws(() => {ms932Encoder.encode("\u904C")}, {name:"Error",message:"EncodingError U+904C"});
r = r && ([...ms932Encoder.encode("遍過遏遐遑遒道達違遖")].join(",") === "149,213,137,223,231,159,231,160,231,161,231,162,147,185,146,66,136,225,231,166"); // U+904D
assert.throws(() => {ms932Encoder.encode("\u9057")}, {name:"Error",message:"EncodingError U+9057"});
r = r && ([...ms932Encoder.encode("遘遙")].join(",") === "231,167,234,161"); // U+9058
assert.throws(() => {ms932Encoder.encode("\u905A")}, {name:"Error",message:"EncodingError U+905A"});
assert.throws(() => {ms932Encoder.encode("\u905B")}, {name:"Error",message:"EncodingError U+905B"});
r = r && ([...ms932Encoder.encode("遜")].join(",") === "145,187"); // U+905C
assert.throws(() => {ms932Encoder.encode("\u905D")}, {name:"Error",message:"EncodingError U+905D"});
r = r && ([...ms932Encoder.encode("遞")].join(",") === "231,168"); // U+905E
assert.throws(() => {ms932Encoder.encode("\u905F")}, {name:"Error",message:"EncodingError U+905F"});
r = r && ([...ms932Encoder.encode("遠遡")].join(",") === "137,147,145,107"); // U+9060
assert.throws(() => {ms932Encoder.encode("\u9062")}, {name:"Error",message:"EncodingError U+9062"});
r = r && ([...ms932Encoder.encode("遣")].join(",") === "140,173"); // U+9063
assert.throws(() => {ms932Encoder.encode("\u9064")}, {name:"Error",message:"EncodingError U+9064"});
r = r && ([...ms932Encoder.encode("遥")].join(",") === "151,121"); // U+9065
assert.throws(() => {ms932Encoder.encode("\u9066")}, {name:"Error",message:"EncodingError U+9066"});
r = r && ([...ms932Encoder.encode("遧遨適")].join(",") === "251,181,231,169,147,75"); // U+9067
assert.throws(() => {ms932Encoder.encode("\u906A")}, {name:"Error",message:"EncodingError U+906A"});
assert.throws(() => {ms932Encoder.encode("\u906B")}, {name:"Error",message:"EncodingError U+906B"});
assert.throws(() => {ms932Encoder.encode("\u906C")}, {name:"Error",message:"EncodingError U+906C"});
r = r && ([...ms932Encoder.encode("遭遮遯")].join(",") === "145,152,142,213,231,170"); // U+906D
assert.throws(() => {ms932Encoder.encode("\u9070")}, {name:"Error",message:"EncodingError U+9070"});
assert.throws(() => {ms932Encoder.encode("\u9071")}, {name:"Error",message:"EncodingError U+9071"});
r = r && ([...ms932Encoder.encode("遲")].join(",") === "231,173"); // U+9072
assert.throws(() => {ms932Encoder.encode("\u9073")}, {name:"Error",message:"EncodingError U+9073"});
assert.throws(() => {ms932Encoder.encode("\u9074")}, {name:"Error",message:"EncodingError U+9074"});
r = r && ([...ms932Encoder.encode("遵遶遷選")].join(",") === "143,133,231,171,145,74,145,73"); // U+9075
assert.throws(() => {ms932Encoder.encode("\u9079")}, {name:"Error",message:"EncodingError U+9079"});
r = r && ([...ms932Encoder.encode("遺")].join(",") === "136,226"); // U+907A
assert.throws(() => {ms932Encoder.encode("\u907B")}, {name:"Error",message:"EncodingError U+907B"});
r = r && ([...ms932Encoder.encode("遼遽")].join(",") === "151,201,231,175"); // U+907C
assert.throws(() => {ms932Encoder.encode("\u907E")}, {name:"Error",message:"EncodingError U+907E"});
r = r && ([...ms932Encoder.encode("避邀邁邂邃還")].join(",") === "148,240,231,177,231,176,231,174,226,132,138,210"); // U+907F
assert.throws(() => {ms932Encoder.encode("\u9085")}, {name:"Error",message:"EncodingError U+9085"});
assert.throws(() => {ms932Encoder.encode("\u9086")}, {name:"Error",message:"EncodingError U+9086"});
r = r && ([...ms932Encoder.encode("邇")].join(",") === "231,142"); // U+9087
assert.throws(() => {ms932Encoder.encode("\u9088")}, {name:"Error",message:"EncodingError U+9088"});
r = r && ([...ms932Encoder.encode("邉邊")].join(",") === "231,179,231,178"); // U+9089
assert.throws(() => {ms932Encoder.encode("\u908B")}, {name:"Error",message:"EncodingError U+908B"});
assert.throws(() => {ms932Encoder.encode("\u908C")}, {name:"Error",message:"EncodingError U+908C"});
assert.throws(() => {ms932Encoder.encode("\u908D")}, {name:"Error",message:"EncodingError U+908D"});
assert.throws(() => {ms932Encoder.encode("\u908E")}, {name:"Error",message:"EncodingError U+908E"});
r = r && ([...ms932Encoder.encode("邏")].join(",") === "231,180"); // U+908F
assert.throws(() => {ms932Encoder.encode("\u9090")}, {name:"Error",message:"EncodingError U+9090"});
r = r && ([...ms932Encoder.encode("邑")].join(",") === "151,87"); // U+9091
assert.throws(() => {ms932Encoder.encode("\u9092")}, {name:"Error",message:"EncodingError U+9092"});
assert.throws(() => {ms932Encoder.encode("\u9093")}, {name:"Error",message:"EncodingError U+9093"});
assert.throws(() => {ms932Encoder.encode("\u9094")}, {name:"Error",message:"EncodingError U+9094"});
assert.throws(() => {ms932Encoder.encode("\u9095")}, {name:"Error",message:"EncodingError U+9095"});
assert.throws(() => {ms932Encoder.encode("\u9096")}, {name:"Error",message:"EncodingError U+9096"});
assert.throws(() => {ms932Encoder.encode("\u9097")}, {name:"Error",message:"EncodingError U+9097"});
assert.throws(() => {ms932Encoder.encode("\u9098")}, {name:"Error",message:"EncodingError U+9098"});
assert.throws(() => {ms932Encoder.encode("\u9099")}, {name:"Error",message:"EncodingError U+9099"});
assert.throws(() => {ms932Encoder.encode("\u909A")}, {name:"Error",message:"EncodingError U+909A"});
assert.throws(() => {ms932Encoder.encode("\u909B")}, {name:"Error",message:"EncodingError U+909B"});
assert.throws(() => {ms932Encoder.encode("\u909C")}, {name:"Error",message:"EncodingError U+909C"});
assert.throws(() => {ms932Encoder.encode("\u909D")}, {name:"Error",message:"EncodingError U+909D"});
assert.throws(() => {ms932Encoder.encode("\u909E")}, {name:"Error",message:"EncodingError U+909E"});
assert.throws(() => {ms932Encoder.encode("\u909F")}, {name:"Error",message:"EncodingError U+909F"});
assert.throws(() => {ms932Encoder.encode("\u90A0")}, {name:"Error",message:"EncodingError U+90A0"});
assert.throws(() => {ms932Encoder.encode("\u90A1")}, {name:"Error",message:"EncodingError U+90A1"});
assert.throws(() => {ms932Encoder.encode("\u90A2")}, {name:"Error",message:"EncodingError U+90A2"});
r = r && ([...ms932Encoder.encode("那")].join(",") === "147,223"); // U+90A3
assert.throws(() => {ms932Encoder.encode("\u90A4")}, {name:"Error",message:"EncodingError U+90A4"});
assert.throws(() => {ms932Encoder.encode("\u90A5")}, {name:"Error",message:"EncodingError U+90A5"});
r = r && ([...ms932Encoder.encode("邦")].join(",") === "150,77"); // U+90A6
assert.throws(() => {ms932Encoder.encode("\u90A7")}, {name:"Error",message:"EncodingError U+90A7"});
r = r && ([...ms932Encoder.encode("邨")].join(",") === "231,181"); // U+90A8
assert.throws(() => {ms932Encoder.encode("\u90A9")}, {name:"Error",message:"EncodingError U+90A9"});
r = r && ([...ms932Encoder.encode("邪")].join(",") === "142,215"); // U+90AA
assert.throws(() => {ms932Encoder.encode("\u90AB")}, {name:"Error",message:"EncodingError U+90AB"});
assert.throws(() => {ms932Encoder.encode("\u90AC")}, {name:"Error",message:"EncodingError U+90AC"});
assert.throws(() => {ms932Encoder.encode("\u90AD")}, {name:"Error",message:"EncodingError U+90AD"});
assert.throws(() => {ms932Encoder.encode("\u90AE")}, {name:"Error",message:"EncodingError U+90AE"});
r = r && ([...ms932Encoder.encode("邯")].join(",") === "231,182"); // U+90AF
assert.throws(() => {ms932Encoder.encode("\u90B0")}, {name:"Error",message:"EncodingError U+90B0"});
r = r && ([...ms932Encoder.encode("邱")].join(",") === "231,183"); // U+90B1
assert.throws(() => {ms932Encoder.encode("\u90B2")}, {name:"Error",message:"EncodingError U+90B2"});
assert.throws(() => {ms932Encoder.encode("\u90B3")}, {name:"Error",message:"EncodingError U+90B3"});
assert.throws(() => {ms932Encoder.encode("\u90B4")}, {name:"Error",message:"EncodingError U+90B4"});
r = r && ([...ms932Encoder.encode("邵")].join(",") === "231,184"); // U+90B5
assert.throws(() => {ms932Encoder.encode("\u90B6")}, {name:"Error",message:"EncodingError U+90B6"});
assert.throws(() => {ms932Encoder.encode("\u90B7")}, {name:"Error",message:"EncodingError U+90B7"});
r = r && ([...ms932Encoder.encode("邸")].join(",") === "147,64"); // U+90B8
assert.throws(() => {ms932Encoder.encode("\u90B9")}, {name:"Error",message:"EncodingError U+90B9"});
assert.throws(() => {ms932Encoder.encode("\u90BA")}, {name:"Error",message:"EncodingError U+90BA"});
assert.throws(() => {ms932Encoder.encode("\u90BB")}, {name:"Error",message:"EncodingError U+90BB"});
assert.throws(() => {ms932Encoder.encode("\u90BC")}, {name:"Error",message:"EncodingError U+90BC"});
assert.throws(() => {ms932Encoder.encode("\u90BD")}, {name:"Error",message:"EncodingError U+90BD"});
assert.throws(() => {ms932Encoder.encode("\u90BE")}, {name:"Error",message:"EncodingError U+90BE"});
assert.throws(() => {ms932Encoder.encode("\u90BF")}, {name:"Error",message:"EncodingError U+90BF"});
assert.throws(() => {ms932Encoder.encode("\u90C0")}, {name:"Error",message:"EncodingError U+90C0"});
r = r && ([...ms932Encoder.encode("郁")].join(",") === "136,232"); // U+90C1
assert.throws(() => {ms932Encoder.encode("\u90C2")}, {name:"Error",message:"EncodingError U+90C2"});
assert.throws(() => {ms932Encoder.encode("\u90C3")}, {name:"Error",message:"EncodingError U+90C3"});
assert.throws(() => {ms932Encoder.encode("\u90C4")}, {name:"Error",message:"EncodingError U+90C4"});
assert.throws(() => {ms932Encoder.encode("\u90C5")}, {name:"Error",message:"EncodingError U+90C5"});
assert.throws(() => {ms932Encoder.encode("\u90C6")}, {name:"Error",message:"EncodingError U+90C6"});
assert.throws(() => {ms932Encoder.encode("\u90C7")}, {name:"Error",message:"EncodingError U+90C7"});
assert.throws(() => {ms932Encoder.encode("\u90C8")}, {name:"Error",message:"EncodingError U+90C8"});
assert.throws(() => {ms932Encoder.encode("\u90C9")}, {name:"Error",message:"EncodingError U+90C9"});
r = r && ([...ms932Encoder.encode("郊")].join(",") === "141,120"); // U+90CA
assert.throws(() => {ms932Encoder.encode("\u90CB")}, {name:"Error",message:"EncodingError U+90CB"});
assert.throws(() => {ms932Encoder.encode("\u90CC")}, {name:"Error",message:"EncodingError U+90CC"});
assert.throws(() => {ms932Encoder.encode("\u90CD")}, {name:"Error",message:"EncodingError U+90CD"});
r = r && ([...ms932Encoder.encode("郎")].join(",") === "152,89"); // U+90CE
assert.throws(() => {ms932Encoder.encode("\u90CF")}, {name:"Error",message:"EncodingError U+90CF"});
assert.throws(() => {ms932Encoder.encode("\u90D0")}, {name:"Error",message:"EncodingError U+90D0"});
assert.throws(() => {ms932Encoder.encode("\u90D1")}, {name:"Error",message:"EncodingError U+90D1"});
assert.throws(() => {ms932Encoder.encode("\u90D2")}, {name:"Error",message:"EncodingError U+90D2"});
assert.throws(() => {ms932Encoder.encode("\u90D3")}, {name:"Error",message:"EncodingError U+90D3"});
assert.throws(() => {ms932Encoder.encode("\u90D4")}, {name:"Error",message:"EncodingError U+90D4"});
assert.throws(() => {ms932Encoder.encode("\u90D5")}, {name:"Error",message:"EncodingError U+90D5"});
assert.throws(() => {ms932Encoder.encode("\u90D6")}, {name:"Error",message:"EncodingError U+90D6"});
assert.throws(() => {ms932Encoder.encode("\u90D7")}, {name:"Error",message:"EncodingError U+90D7"});
assert.throws(() => {ms932Encoder.encode("\u90D8")}, {name:"Error",message:"EncodingError U+90D8"});
assert.throws(() => {ms932Encoder.encode("\u90D9")}, {name:"Error",message:"EncodingError U+90D9"});
assert.throws(() => {ms932Encoder.encode("\u90DA")}, {name:"Error",message:"EncodingError U+90DA"});
r = r && ([...ms932Encoder.encode("郛")].join(",") === "231,188"); // U+90DB
assert.throws(() => {ms932Encoder.encode("\u90DC")}, {name:"Error",message:"EncodingError U+90DC"});
assert.throws(() => {ms932Encoder.encode("\u90DD")}, {name:"Error",message:"EncodingError U+90DD"});
r = r && ([...ms932Encoder.encode("郞")].join(",") === "251,182"); // U+90DE
assert.throws(() => {ms932Encoder.encode("\u90DF")}, {name:"Error",message:"EncodingError U+90DF"});
assert.throws(() => {ms932Encoder.encode("\u90E0")}, {name:"Error",message:"EncodingError U+90E0"});
r = r && ([...ms932Encoder.encode("郡郢")].join(",") === "140,83,231,185"); // U+90E1
assert.throws(() => {ms932Encoder.encode("\u90E3")}, {name:"Error",message:"EncodingError U+90E3"});
r = r && ([...ms932Encoder.encode("郤")].join(",") === "231,186"); // U+90E4
assert.throws(() => {ms932Encoder.encode("\u90E5")}, {name:"Error",message:"EncodingError U+90E5"});
assert.throws(() => {ms932Encoder.encode("\u90E6")}, {name:"Error",message:"EncodingError U+90E6"});
assert.throws(() => {ms932Encoder.encode("\u90E7")}, {name:"Error",message:"EncodingError U+90E7"});
r = r && ([...ms932Encoder.encode("部")].join(",") === "149,148"); // U+90E8
assert.throws(() => {ms932Encoder.encode("\u90E9")}, {name:"Error",message:"EncodingError U+90E9"});
assert.throws(() => {ms932Encoder.encode("\u90EA")}, {name:"Error",message:"EncodingError U+90EA"});
assert.throws(() => {ms932Encoder.encode("\u90EB")}, {name:"Error",message:"EncodingError U+90EB"});
assert.throws(() => {ms932Encoder.encode("\u90EC")}, {name:"Error",message:"EncodingError U+90EC"});
r = r && ([...ms932Encoder.encode("郭")].join(",") === "138,115"); // U+90ED
assert.throws(() => {ms932Encoder.encode("\u90EE")}, {name:"Error",message:"EncodingError U+90EE"});
assert.throws(() => {ms932Encoder.encode("\u90EF")}, {name:"Error",message:"EncodingError U+90EF"});
assert.throws(() => {ms932Encoder.encode("\u90F0")}, {name:"Error",message:"EncodingError U+90F0"});
assert.throws(() => {ms932Encoder.encode("\u90F1")}, {name:"Error",message:"EncodingError U+90F1"});
assert.throws(() => {ms932Encoder.encode("\u90F2")}, {name:"Error",message:"EncodingError U+90F2"});
assert.throws(() => {ms932Encoder.encode("\u90F3")}, {name:"Error",message:"EncodingError U+90F3"});
assert.throws(() => {ms932Encoder.encode("\u90F4")}, {name:"Error",message:"EncodingError U+90F4"});
r = r && ([...ms932Encoder.encode("郵")].join(",") === "151,88"); // U+90F5
assert.throws(() => {ms932Encoder.encode("\u90F6")}, {name:"Error",message:"EncodingError U+90F6"});
r = r && ([...ms932Encoder.encode("郷")].join(",") === "139,189"); // U+90F7
assert.throws(() => {ms932Encoder.encode("\u90F8")}, {name:"Error",message:"EncodingError U+90F8"});
assert.throws(() => {ms932Encoder.encode("\u90F9")}, {name:"Error",message:"EncodingError U+90F9"});
assert.throws(() => {ms932Encoder.encode("\u90FA")}, {name:"Error",message:"EncodingError U+90FA"});
assert.throws(() => {ms932Encoder.encode("\u90FB")}, {name:"Error",message:"EncodingError U+90FB"});
assert.throws(() => {ms932Encoder.encode("\u90FC")}, {name:"Error",message:"EncodingError U+90FC"});
r = r && ([...ms932Encoder.encode("都")].join(",") === "147,115"); // U+90FD
assert.throws(() => {ms932Encoder.encode("\u90FE")}, {name:"Error",message:"EncodingError U+90FE"});
assert.throws(() => {ms932Encoder.encode("\u90FF")}, {name:"Error",message:"EncodingError U+90FF"});
assert.throws(() => {ms932Encoder.encode("\u9100")}, {name:"Error",message:"EncodingError U+9100"});
assert.throws(() => {ms932Encoder.encode("\u9101")}, {name:"Error",message:"EncodingError U+9101"});
r = r && ([...ms932Encoder.encode("鄂")].join(",") === "231,189"); // U+9102
assert.throws(() => {ms932Encoder.encode("\u9103")}, {name:"Error",message:"EncodingError U+9103"});
assert.throws(() => {ms932Encoder.encode("\u9104")}, {name:"Error",message:"EncodingError U+9104"});
assert.throws(() => {ms932Encoder.encode("\u9105")}, {name:"Error",message:"EncodingError U+9105"});
assert.throws(() => {ms932Encoder.encode("\u9106")}, {name:"Error",message:"EncodingError U+9106"});
assert.throws(() => {ms932Encoder.encode("\u9107")}, {name:"Error",message:"EncodingError U+9107"});
assert.throws(() => {ms932Encoder.encode("\u9108")}, {name:"Error",message:"EncodingError U+9108"});
assert.throws(() => {ms932Encoder.encode("\u9109")}, {name:"Error",message:"EncodingError U+9109"});
assert.throws(() => {ms932Encoder.encode("\u910A")}, {name:"Error",message:"EncodingError U+910A"});
assert.throws(() => {ms932Encoder.encode("\u910B")}, {name:"Error",message:"EncodingError U+910B"});
assert.throws(() => {ms932Encoder.encode("\u910C")}, {name:"Error",message:"EncodingError U+910C"});
assert.throws(() => {ms932Encoder.encode("\u910D")}, {name:"Error",message:"EncodingError U+910D"});
assert.throws(() => {ms932Encoder.encode("\u910E")}, {name:"Error",message:"EncodingError U+910E"});
assert.throws(() => {ms932Encoder.encode("\u910F")}, {name:"Error",message:"EncodingError U+910F"});
assert.throws(() => {ms932Encoder.encode("\u9110")}, {name:"Error",message:"EncodingError U+9110"});
assert.throws(() => {ms932Encoder.encode("\u9111")}, {name:"Error",message:"EncodingError U+9111"});
r = r && ([...ms932Encoder.encode("鄒")].join(",") === "231,190"); // U+9112
assert.throws(() => {ms932Encoder.encode("\u9113")}, {name:"Error",message:"EncodingError U+9113"});
assert.throws(() => {ms932Encoder.encode("\u9114")}, {name:"Error",message:"EncodingError U+9114"});
r = r && ([...ms932Encoder.encode("鄕")].join(",") === "251,184"); // U+9115
assert.throws(() => {ms932Encoder.encode("\u9116")}, {name:"Error",message:"EncodingError U+9116"});
assert.throws(() => {ms932Encoder.encode("\u9117")}, {name:"Error",message:"EncodingError U+9117"});
assert.throws(() => {ms932Encoder.encode("\u9118")}, {name:"Error",message:"EncodingError U+9118"});
r = r && ([...ms932Encoder.encode("鄙")].join(",") === "231,191"); // U+9119
assert.throws(() => {ms932Encoder.encode("\u911A")}, {name:"Error",message:"EncodingError U+911A"});
assert.throws(() => {ms932Encoder.encode("\u911B")}, {name:"Error",message:"EncodingError U+911B"});
assert.throws(() => {ms932Encoder.encode("\u911C")}, {name:"Error",message:"EncodingError U+911C"});
assert.throws(() => {ms932Encoder.encode("\u911D")}, {name:"Error",message:"EncodingError U+911D"});
assert.throws(() => {ms932Encoder.encode("\u911E")}, {name:"Error",message:"EncodingError U+911E"});
assert.throws(() => {ms932Encoder.encode("\u911F")}, {name:"Error",message:"EncodingError U+911F"});
assert.throws(() => {ms932Encoder.encode("\u9120")}, {name:"Error",message:"EncodingError U+9120"});
assert.throws(() => {ms932Encoder.encode("\u9121")}, {name:"Error",message:"EncodingError U+9121"});
assert.throws(() => {ms932Encoder.encode("\u9122")}, {name:"Error",message:"EncodingError U+9122"});
assert.throws(() => {ms932Encoder.encode("\u9123")}, {name:"Error",message:"EncodingError U+9123"});
assert.throws(() => {ms932Encoder.encode("\u9124")}, {name:"Error",message:"EncodingError U+9124"});
assert.throws(() => {ms932Encoder.encode("\u9125")}, {name:"Error",message:"EncodingError U+9125"});
assert.throws(() => {ms932Encoder.encode("\u9126")}, {name:"Error",message:"EncodingError U+9126"});
r = r && ([...ms932Encoder.encode("鄧")].join(",") === "251,185"); // U+9127
assert.throws(() => {ms932Encoder.encode("\u9128")}, {name:"Error",message:"EncodingError U+9128"});
assert.throws(() => {ms932Encoder.encode("\u9129")}, {name:"Error",message:"EncodingError U+9129"});
assert.throws(() => {ms932Encoder.encode("\u912A")}, {name:"Error",message:"EncodingError U+912A"});
assert.throws(() => {ms932Encoder.encode("\u912B")}, {name:"Error",message:"EncodingError U+912B"});
assert.throws(() => {ms932Encoder.encode("\u912C")}, {name:"Error",message:"EncodingError U+912C"});
r = r && ([...ms932Encoder.encode("鄭")].join(",") === "147,65"); // U+912D
assert.throws(() => {ms932Encoder.encode("\u912E")}, {name:"Error",message:"EncodingError U+912E"});
assert.throws(() => {ms932Encoder.encode("\u912F")}, {name:"Error",message:"EncodingError U+912F"});
r = r && ([...ms932Encoder.encode("鄰")].join(",") === "231,193"); // U+9130
assert.throws(() => {ms932Encoder.encode("\u9131")}, {name:"Error",message:"EncodingError U+9131"});
r = r && ([...ms932Encoder.encode("鄲")].join(",") === "231,192"); // U+9132
assert.throws(() => {ms932Encoder.encode("\u9133")}, {name:"Error",message:"EncodingError U+9133"});
assert.throws(() => {ms932Encoder.encode("\u9134")}, {name:"Error",message:"EncodingError U+9134"});
assert.throws(() => {ms932Encoder.encode("\u9135")}, {name:"Error",message:"EncodingError U+9135"});
assert.throws(() => {ms932Encoder.encode("\u9136")}, {name:"Error",message:"EncodingError U+9136"});
assert.throws(() => {ms932Encoder.encode("\u9137")}, {name:"Error",message:"EncodingError U+9137"});
assert.throws(() => {ms932Encoder.encode("\u9138")}, {name:"Error",message:"EncodingError U+9138"});
assert.throws(() => {ms932Encoder.encode("\u9139")}, {name:"Error",message:"EncodingError U+9139"});
assert.throws(() => {ms932Encoder.encode("\u913A")}, {name:"Error",message:"EncodingError U+913A"});
assert.throws(() => {ms932Encoder.encode("\u913B")}, {name:"Error",message:"EncodingError U+913B"});
assert.throws(() => {ms932Encoder.encode("\u913C")}, {name:"Error",message:"EncodingError U+913C"});
assert.throws(() => {ms932Encoder.encode("\u913D")}, {name:"Error",message:"EncodingError U+913D"});
assert.throws(() => {ms932Encoder.encode("\u913E")}, {name:"Error",message:"EncodingError U+913E"});
assert.throws(() => {ms932Encoder.encode("\u913F")}, {name:"Error",message:"EncodingError U+913F"});
assert.throws(() => {ms932Encoder.encode("\u9140")}, {name:"Error",message:"EncodingError U+9140"});
assert.throws(() => {ms932Encoder.encode("\u9141")}, {name:"Error",message:"EncodingError U+9141"});
assert.throws(() => {ms932Encoder.encode("\u9142")}, {name:"Error",message:"EncodingError U+9142"});
assert.throws(() => {ms932Encoder.encode("\u9143")}, {name:"Error",message:"EncodingError U+9143"});
assert.throws(() => {ms932Encoder.encode("\u9144")}, {name:"Error",message:"EncodingError U+9144"});
assert.throws(() => {ms932Encoder.encode("\u9145")}, {name:"Error",message:"EncodingError U+9145"});
assert.throws(() => {ms932Encoder.encode("\u9146")}, {name:"Error",message:"EncodingError U+9146"});
assert.throws(() => {ms932Encoder.encode("\u9147")}, {name:"Error",message:"EncodingError U+9147"});
assert.throws(() => {ms932Encoder.encode("\u9148")}, {name:"Error",message:"EncodingError U+9148"});
r = r && ([...ms932Encoder.encode("酉酊酋酌配酎")].join(",") === "147,209,231,194,143,85,142,222,148,122,146,145"); // U+9149
assert.throws(() => {ms932Encoder.encode("\u914F")}, {name:"Error",message:"EncodingError U+914F"});
assert.throws(() => {ms932Encoder.encode("\u9150")}, {name:"Error",message:"EncodingError U+9150"});
assert.throws(() => {ms932Encoder.encode("\u9151")}, {name:"Error",message:"EncodingError U+9151"});
r = r && ([...ms932Encoder.encode("酒")].join(",") === "142,240"); // U+9152
assert.throws(() => {ms932Encoder.encode("\u9153")}, {name:"Error",message:"EncodingError U+9153"});
r = r && ([...ms932Encoder.encode("酔")].join(",") === "144,140"); // U+9154
assert.throws(() => {ms932Encoder.encode("\u9155")}, {name:"Error",message:"EncodingError U+9155"});
r = r && ([...ms932Encoder.encode("酖")].join(",") === "231,195"); // U+9156
assert.throws(() => {ms932Encoder.encode("\u9157")}, {name:"Error",message:"EncodingError U+9157"});
r = r && ([...ms932Encoder.encode("酘")].join(",") === "231,196"); // U+9158
assert.throws(() => {ms932Encoder.encode("\u9159")}, {name:"Error",message:"EncodingError U+9159"});
assert.throws(() => {ms932Encoder.encode("\u915A")}, {name:"Error",message:"EncodingError U+915A"});
assert.throws(() => {ms932Encoder.encode("\u915B")}, {name:"Error",message:"EncodingError U+915B"});
assert.throws(() => {ms932Encoder.encode("\u915C")}, {name:"Error",message:"EncodingError U+915C"});
assert.throws(() => {ms932Encoder.encode("\u915D")}, {name:"Error",message:"EncodingError U+915D"});
assert.throws(() => {ms932Encoder.encode("\u915E")}, {name:"Error",message:"EncodingError U+915E"});
assert.throws(() => {ms932Encoder.encode("\u915F")}, {name:"Error",message:"EncodingError U+915F"});
assert.throws(() => {ms932Encoder.encode("\u9160")}, {name:"Error",message:"EncodingError U+9160"});
assert.throws(() => {ms932Encoder.encode("\u9161")}, {name:"Error",message:"EncodingError U+9161"});
r = r && ([...ms932Encoder.encode("酢酣")].join(",") === "144,124,231,197"); // U+9162
assert.throws(() => {ms932Encoder.encode("\u9164")}, {name:"Error",message:"EncodingError U+9164"});
r = r && ([...ms932Encoder.encode("酥")].join(",") === "231,198"); // U+9165
assert.throws(() => {ms932Encoder.encode("\u9166")}, {name:"Error",message:"EncodingError U+9166"});
assert.throws(() => {ms932Encoder.encode("\u9167")}, {name:"Error",message:"EncodingError U+9167"});
assert.throws(() => {ms932Encoder.encode("\u9168")}, {name:"Error",message:"EncodingError U+9168"});
r = r && ([...ms932Encoder.encode("酩酪")].join(",") === "231,199,151,143"); // U+9169
assert.throws(() => {ms932Encoder.encode("\u916B")}, {name:"Error",message:"EncodingError U+916B"});
r = r && ([...ms932Encoder.encode("酬")].join(",") === "143,86"); // U+916C
assert.throws(() => {ms932Encoder.encode("\u916D")}, {name:"Error",message:"EncodingError U+916D"});
assert.throws(() => {ms932Encoder.encode("\u916E")}, {name:"Error",message:"EncodingError U+916E"});
assert.throws(() => {ms932Encoder.encode("\u916F")}, {name:"Error",message:"EncodingError U+916F"});
assert.throws(() => {ms932Encoder.encode("\u9170")}, {name:"Error",message:"EncodingError U+9170"});
assert.throws(() => {ms932Encoder.encode("\u9171")}, {name:"Error",message:"EncodingError U+9171"});
r = r && ([...ms932Encoder.encode("酲酳")].join(",") === "231,201,231,200"); // U+9172
assert.throws(() => {ms932Encoder.encode("\u9174")}, {name:"Error",message:"EncodingError U+9174"});
r = r && ([...ms932Encoder.encode("酵")].join(",") === "141,121"); // U+9175
assert.throws(() => {ms932Encoder.encode("\u9176")}, {name:"Error",message:"EncodingError U+9176"});
r = r && ([...ms932Encoder.encode("酷酸")].join(",") === "141,147,142,95"); // U+9177
assert.throws(() => {ms932Encoder.encode("\u9179")}, {name:"Error",message:"EncodingError U+9179"});
assert.throws(() => {ms932Encoder.encode("\u917A")}, {name:"Error",message:"EncodingError U+917A"});
assert.throws(() => {ms932Encoder.encode("\u917B")}, {name:"Error",message:"EncodingError U+917B"});
assert.throws(() => {ms932Encoder.encode("\u917C")}, {name:"Error",message:"EncodingError U+917C"});
assert.throws(() => {ms932Encoder.encode("\u917D")}, {name:"Error",message:"EncodingError U+917D"});
assert.throws(() => {ms932Encoder.encode("\u917E")}, {name:"Error",message:"EncodingError U+917E"});
assert.throws(() => {ms932Encoder.encode("\u917F")}, {name:"Error",message:"EncodingError U+917F"});
assert.throws(() => {ms932Encoder.encode("\u9180")}, {name:"Error",message:"EncodingError U+9180"});
assert.throws(() => {ms932Encoder.encode("\u9181")}, {name:"Error",message:"EncodingError U+9181"});
r = r && ([...ms932Encoder.encode("醂")].join(",") === "231,204"); // U+9182
assert.throws(() => {ms932Encoder.encode("\u9183")}, {name:"Error",message:"EncodingError U+9183"});
assert.throws(() => {ms932Encoder.encode("\u9184")}, {name:"Error",message:"EncodingError U+9184"});
assert.throws(() => {ms932Encoder.encode("\u9185")}, {name:"Error",message:"EncodingError U+9185"});
assert.throws(() => {ms932Encoder.encode("\u9186")}, {name:"Error",message:"EncodingError U+9186"});
r = r && ([...ms932Encoder.encode("醇")].join(",") === "143,134"); // U+9187
assert.throws(() => {ms932Encoder.encode("\u9188")}, {name:"Error",message:"EncodingError U+9188"});
r = r && ([...ms932Encoder.encode("醉")].join(",") === "231,203"); // U+9189
assert.throws(() => {ms932Encoder.encode("\u918A")}, {name:"Error",message:"EncodingError U+918A"});
r = r && ([...ms932Encoder.encode("醋")].join(",") === "231,202"); // U+918B
assert.throws(() => {ms932Encoder.encode("\u918C")}, {name:"Error",message:"EncodingError U+918C"});
r = r && ([...ms932Encoder.encode("醍")].join(",") === "145,231"); // U+918D
assert.throws(() => {ms932Encoder.encode("\u918E")}, {name:"Error",message:"EncodingError U+918E"});
assert.throws(() => {ms932Encoder.encode("\u918F")}, {name:"Error",message:"EncodingError U+918F"});
r = r && ([...ms932Encoder.encode("醐")].join(",") === "140,237"); // U+9190
assert.throws(() => {ms932Encoder.encode("\u9191")}, {name:"Error",message:"EncodingError U+9191"});
r = r && ([...ms932Encoder.encode("醒")].join(",") === "144,193"); // U+9192
assert.throws(() => {ms932Encoder.encode("\u9193")}, {name:"Error",message:"EncodingError U+9193"});
assert.throws(() => {ms932Encoder.encode("\u9194")}, {name:"Error",message:"EncodingError U+9194"});
assert.throws(() => {ms932Encoder.encode("\u9195")}, {name:"Error",message:"EncodingError U+9195"});
assert.throws(() => {ms932Encoder.encode("\u9196")}, {name:"Error",message:"EncodingError U+9196"});
r = r && ([...ms932Encoder.encode("醗")].join(",") === "148,174"); // U+9197
assert.throws(() => {ms932Encoder.encode("\u9198")}, {name:"Error",message:"EncodingError U+9198"});
assert.throws(() => {ms932Encoder.encode("\u9199")}, {name:"Error",message:"EncodingError U+9199"});
assert.throws(() => {ms932Encoder.encode("\u919A")}, {name:"Error",message:"EncodingError U+919A"});
assert.throws(() => {ms932Encoder.encode("\u919B")}, {name:"Error",message:"EncodingError U+919B"});
r = r && ([...ms932Encoder.encode("醜")].join(",") === "143,88"); // U+919C
assert.throws(() => {ms932Encoder.encode("\u919D")}, {name:"Error",message:"EncodingError U+919D"});
assert.throws(() => {ms932Encoder.encode("\u919E")}, {name:"Error",message:"EncodingError U+919E"});
assert.throws(() => {ms932Encoder.encode("\u919F")}, {name:"Error",message:"EncodingError U+919F"});
assert.throws(() => {ms932Encoder.encode("\u91A0")}, {name:"Error",message:"EncodingError U+91A0"});
assert.throws(() => {ms932Encoder.encode("\u91A1")}, {name:"Error",message:"EncodingError U+91A1"});
r = r && ([...ms932Encoder.encode("醢")].join(",") === "231,205"); // U+91A2
assert.throws(() => {ms932Encoder.encode("\u91A3")}, {name:"Error",message:"EncodingError U+91A3"});
r = r && ([...ms932Encoder.encode("醤")].join(",") === "143,221"); // U+91A4
assert.throws(() => {ms932Encoder.encode("\u91A5")}, {name:"Error",message:"EncodingError U+91A5"});
assert.throws(() => {ms932Encoder.encode("\u91A6")}, {name:"Error",message:"EncodingError U+91A6"});
assert.throws(() => {ms932Encoder.encode("\u91A7")}, {name:"Error",message:"EncodingError U+91A7"});
assert.throws(() => {ms932Encoder.encode("\u91A8")}, {name:"Error",message:"EncodingError U+91A8"});
assert.throws(() => {ms932Encoder.encode("\u91A9")}, {name:"Error",message:"EncodingError U+91A9"});
r = r && ([...ms932Encoder.encode("醪醫")].join(",") === "231,208,231,206"); // U+91AA
assert.throws(() => {ms932Encoder.encode("\u91AC")}, {name:"Error",message:"EncodingError U+91AC"});
assert.throws(() => {ms932Encoder.encode("\u91AD")}, {name:"Error",message:"EncodingError U+91AD"});
assert.throws(() => {ms932Encoder.encode("\u91AE")}, {name:"Error",message:"EncodingError U+91AE"});
r = r && ([...ms932Encoder.encode("醯")].join(",") === "231,207"); // U+91AF
assert.throws(() => {ms932Encoder.encode("\u91B0")}, {name:"Error",message:"EncodingError U+91B0"});
assert.throws(() => {ms932Encoder.encode("\u91B1")}, {name:"Error",message:"EncodingError U+91B1"});
assert.throws(() => {ms932Encoder.encode("\u91B2")}, {name:"Error",message:"EncodingError U+91B2"});
assert.throws(() => {ms932Encoder.encode("\u91B3")}, {name:"Error",message:"EncodingError U+91B3"});
r = r && ([...ms932Encoder.encode("醴醵")].join(",") === "231,210,231,209"); // U+91B4
assert.throws(() => {ms932Encoder.encode("\u91B6")}, {name:"Error",message:"EncodingError U+91B6"});
assert.throws(() => {ms932Encoder.encode("\u91B7")}, {name:"Error",message:"EncodingError U+91B7"});
r = r && ([...ms932Encoder.encode("醸")].join(",") === "143,248"); // U+91B8
assert.throws(() => {ms932Encoder.encode("\u91B9")}, {name:"Error",message:"EncodingError U+91B9"});
r = r && ([...ms932Encoder.encode("醺")].join(",") === "231,211"); // U+91BA
assert.throws(() => {ms932Encoder.encode("\u91BB")}, {name:"Error",message:"EncodingError U+91BB"});
assert.throws(() => {ms932Encoder.encode("\u91BC")}, {name:"Error",message:"EncodingError U+91BC"});
assert.throws(() => {ms932Encoder.encode("\u91BD")}, {name:"Error",message:"EncodingError U+91BD"});
assert.throws(() => {ms932Encoder.encode("\u91BE")}, {name:"Error",message:"EncodingError U+91BE"});
assert.throws(() => {ms932Encoder.encode("\u91BF")}, {name:"Error",message:"EncodingError U+91BF"});
r = r && ([...ms932Encoder.encode("釀釁")].join(",") === "231,212,231,213"); // U+91C0
assert.throws(() => {ms932Encoder.encode("\u91C2")}, {name:"Error",message:"EncodingError U+91C2"});
assert.throws(() => {ms932Encoder.encode("\u91C3")}, {name:"Error",message:"EncodingError U+91C3"});
assert.throws(() => {ms932Encoder.encode("\u91C4")}, {name:"Error",message:"EncodingError U+91C4"});
assert.throws(() => {ms932Encoder.encode("\u91C5")}, {name:"Error",message:"EncodingError U+91C5"});
r = r && ([...ms932Encoder.encode("釆采釈釉")].join(",") === "148,206,141,209,142,223,231,214"); // U+91C6
assert.throws(() => {ms932Encoder.encode("\u91CA")}, {name:"Error",message:"EncodingError U+91CA"});
r = r && ([...ms932Encoder.encode("釋里重野量釐金")].join(",") === "231,215,151,162,143,100,150,236,151,202,231,216,139,224"); // U+91CB
assert.throws(() => {ms932Encoder.encode("\u91D2")}, {name:"Error",message:"EncodingError U+91D2"});
assert.throws(() => {ms932Encoder.encode("\u91D3")}, {name:"Error",message:"EncodingError U+91D3"});
assert.throws(() => {ms932Encoder.encode("\u91D4")}, {name:"Error",message:"EncodingError U+91D4"});
assert.throws(() => {ms932Encoder.encode("\u91D5")}, {name:"Error",message:"EncodingError U+91D5"});
r = r && ([...ms932Encoder.encode("釖釗釘")].join(",") === "231,217,251,187,147,66"); // U+91D6
assert.throws(() => {ms932Encoder.encode("\u91D9")}, {name:"Error",message:"EncodingError U+91D9"});
r = r && ([...ms932Encoder.encode("釚釛釜針釞釟")].join(",") === "251,186,231,220,138,152,144,106,251,188,231,218"); // U+91DA
assert.throws(() => {ms932Encoder.encode("\u91E0")}, {name:"Error",message:"EncodingError U+91E0"});
r = r && ([...ms932Encoder.encode("釡")].join(",") === "231,219"); // U+91E1
assert.throws(() => {ms932Encoder.encode("\u91E2")}, {name:"Error",message:"EncodingError U+91E2"});
r = r && ([...ms932Encoder.encode("釣釤釥釦釧")].join(",") === "146,222,251,191,251,192,150,116,139,250"); // U+91E3
assert.throws(() => {ms932Encoder.encode("\u91E8")}, {name:"Error",message:"EncodingError U+91E8"});
assert.throws(() => {ms932Encoder.encode("\u91E9")}, {name:"Error",message:"EncodingError U+91E9"});
assert.throws(() => {ms932Encoder.encode("\u91EA")}, {name:"Error",message:"EncodingError U+91EA"});
assert.throws(() => {ms932Encoder.encode("\u91EB")}, {name:"Error",message:"EncodingError U+91EB"});
assert.throws(() => {ms932Encoder.encode("\u91EC")}, {name:"Error",message:"EncodingError U+91EC"});
r = r && ([...ms932Encoder.encode("釭釮")].join(",") === "251,189,251,190"); // U+91ED
assert.throws(() => {ms932Encoder.encode("\u91EF")}, {name:"Error",message:"EncodingError U+91EF"});
assert.throws(() => {ms932Encoder.encode("\u91F0")}, {name:"Error",message:"EncodingError U+91F0"});
assert.throws(() => {ms932Encoder.encode("\u91F1")}, {name:"Error",message:"EncodingError U+91F1"});
assert.throws(() => {ms932Encoder.encode("\u91F2")}, {name:"Error",message:"EncodingError U+91F2"});
assert.throws(() => {ms932Encoder.encode("\u91F3")}, {name:"Error",message:"EncodingError U+91F3"});
assert.throws(() => {ms932Encoder.encode("\u91F4")}, {name:"Error",message:"EncodingError U+91F4"});
r = r && ([...ms932Encoder.encode("釵釶")].join(",") === "231,222,231,223"); // U+91F5
assert.throws(() => {ms932Encoder.encode("\u91F7")}, {name:"Error",message:"EncodingError U+91F7"});
assert.throws(() => {ms932Encoder.encode("\u91F8")}, {name:"Error",message:"EncodingError U+91F8"});
assert.throws(() => {ms932Encoder.encode("\u91F9")}, {name:"Error",message:"EncodingError U+91F9"});
assert.throws(() => {ms932Encoder.encode("\u91FA")}, {name:"Error",message:"EncodingError U+91FA"});
assert.throws(() => {ms932Encoder.encode("\u91FB")}, {name:"Error",message:"EncodingError U+91FB"});
r = r && ([...ms932Encoder.encode("釼")].join(",") === "231,221"); // U+91FC
assert.throws(() => {ms932Encoder.encode("\u91FD")}, {name:"Error",message:"EncodingError U+91FD"});
assert.throws(() => {ms932Encoder.encode("\u91FE")}, {name:"Error",message:"EncodingError U+91FE"});
r = r && ([...ms932Encoder.encode("釿")].join(",") === "231,225"); // U+91FF
assert.throws(() => {ms932Encoder.encode("\u9200")}, {name:"Error",message:"EncodingError U+9200"});
assert.throws(() => {ms932Encoder.encode("\u9201")}, {name:"Error",message:"EncodingError U+9201"});
assert.throws(() => {ms932Encoder.encode("\u9202")}, {name:"Error",message:"EncodingError U+9202"});
assert.throws(() => {ms932Encoder.encode("\u9203")}, {name:"Error",message:"EncodingError U+9203"});
assert.throws(() => {ms932Encoder.encode("\u9204")}, {name:"Error",message:"EncodingError U+9204"});
assert.throws(() => {ms932Encoder.encode("\u9205")}, {name:"Error",message:"EncodingError U+9205"});
r = r && ([...ms932Encoder.encode("鈆")].join(",") === "251,193"); // U+9206
assert.throws(() => {ms932Encoder.encode("\u9207")}, {name:"Error",message:"EncodingError U+9207"});
assert.throws(() => {ms932Encoder.encode("\u9208")}, {name:"Error",message:"EncodingError U+9208"});
assert.throws(() => {ms932Encoder.encode("\u9209")}, {name:"Error",message:"EncodingError U+9209"});
r = r && ([...ms932Encoder.encode("鈊")].join(",") === "251,195"); // U+920A
assert.throws(() => {ms932Encoder.encode("\u920B")}, {name:"Error",message:"EncodingError U+920B"});
assert.throws(() => {ms932Encoder.encode("\u920C")}, {name:"Error",message:"EncodingError U+920C"});
r = r && ([...ms932Encoder.encode("鈍鈎")].join(",") === "147,221,138,98"); // U+920D
assert.throws(() => {ms932Encoder.encode("\u920F")}, {name:"Error",message:"EncodingError U+920F"});
r = r && ([...ms932Encoder.encode("鈐鈑")].join(",") === "251,194,231,229"); // U+9210
assert.throws(() => {ms932Encoder.encode("\u9212")}, {name:"Error",message:"EncodingError U+9212"});
assert.throws(() => {ms932Encoder.encode("\u9213")}, {name:"Error",message:"EncodingError U+9213"});
r = r && ([...ms932Encoder.encode("鈔鈕")].join(",") === "231,226,231,228"); // U+9214
assert.throws(() => {ms932Encoder.encode("\u9216")}, {name:"Error",message:"EncodingError U+9216"});
assert.throws(() => {ms932Encoder.encode("\u9217")}, {name:"Error",message:"EncodingError U+9217"});
assert.throws(() => {ms932Encoder.encode("\u9218")}, {name:"Error",message:"EncodingError U+9218"});
assert.throws(() => {ms932Encoder.encode("\u9219")}, {name:"Error",message:"EncodingError U+9219"});
assert.throws(() => {ms932Encoder.encode("\u921A")}, {name:"Error",message:"EncodingError U+921A"});
assert.throws(() => {ms932Encoder.encode("\u921B")}, {name:"Error",message:"EncodingError U+921B"});
assert.throws(() => {ms932Encoder.encode("\u921C")}, {name:"Error",message:"EncodingError U+921C"});
assert.throws(() => {ms932Encoder.encode("\u921D")}, {name:"Error",message:"EncodingError U+921D"});
r = r && ([...ms932Encoder.encode("鈞")].join(",") === "231,224"); // U+921E
assert.throws(() => {ms932Encoder.encode("\u921F")}, {name:"Error",message:"EncodingError U+921F"});
assert.throws(() => {ms932Encoder.encode("\u9220")}, {name:"Error",message:"EncodingError U+9220"});
assert.throws(() => {ms932Encoder.encode("\u9221")}, {name:"Error",message:"EncodingError U+9221"});
assert.throws(() => {ms932Encoder.encode("\u9222")}, {name:"Error",message:"EncodingError U+9222"});
assert.throws(() => {ms932Encoder.encode("\u9223")}, {name:"Error",message:"EncodingError U+9223"});
assert.throws(() => {ms932Encoder.encode("\u9224")}, {name:"Error",message:"EncodingError U+9224"});
assert.throws(() => {ms932Encoder.encode("\u9225")}, {name:"Error",message:"EncodingError U+9225"});
assert.throws(() => {ms932Encoder.encode("\u9226")}, {name:"Error",message:"EncodingError U+9226"});
assert.throws(() => {ms932Encoder.encode("\u9227")}, {name:"Error",message:"EncodingError U+9227"});
assert.throws(() => {ms932Encoder.encode("\u9228")}, {name:"Error",message:"EncodingError U+9228"});
r = r && ([...ms932Encoder.encode("鈩")].join(",") === "232,110"); // U+9229
assert.throws(() => {ms932Encoder.encode("\u922A")}, {name:"Error",message:"EncodingError U+922A"});
assert.throws(() => {ms932Encoder.encode("\u922B")}, {name:"Error",message:"EncodingError U+922B"});
r = r && ([...ms932Encoder.encode("鈬")].join(",") === "231,227"); // U+922C
assert.throws(() => {ms932Encoder.encode("\u922D")}, {name:"Error",message:"EncodingError U+922D"});
assert.throws(() => {ms932Encoder.encode("\u922E")}, {name:"Error",message:"EncodingError U+922E"});
assert.throws(() => {ms932Encoder.encode("\u922F")}, {name:"Error",message:"EncodingError U+922F"});
assert.throws(() => {ms932Encoder.encode("\u9230")}, {name:"Error",message:"EncodingError U+9230"});
assert.throws(() => {ms932Encoder.encode("\u9231")}, {name:"Error",message:"EncodingError U+9231"});
assert.throws(() => {ms932Encoder.encode("\u9232")}, {name:"Error",message:"EncodingError U+9232"});
assert.throws(() => {ms932Encoder.encode("\u9233")}, {name:"Error",message:"EncodingError U+9233"});
r = r && ([...ms932Encoder.encode("鈴")].join(",") === "151,233"); // U+9234
assert.throws(() => {ms932Encoder.encode("\u9235")}, {name:"Error",message:"EncodingError U+9235"});
assert.throws(() => {ms932Encoder.encode("\u9236")}, {name:"Error",message:"EncodingError U+9236"});
r = r && ([...ms932Encoder.encode("鈷")].join(",") === "140,216"); // U+9237
assert.throws(() => {ms932Encoder.encode("\u9238")}, {name:"Error",message:"EncodingError U+9238"});
r = r && ([...ms932Encoder.encode("鈹鈺")].join(",") === "251,202,251,196"); // U+9239
assert.throws(() => {ms932Encoder.encode("\u923B")}, {name:"Error",message:"EncodingError U+923B"});
r = r && ([...ms932Encoder.encode("鈼")].join(",") === "251,198"); // U+923C
assert.throws(() => {ms932Encoder.encode("\u923D")}, {name:"Error",message:"EncodingError U+923D"});
assert.throws(() => {ms932Encoder.encode("\u923E")}, {name:"Error",message:"EncodingError U+923E"});
r = r && ([...ms932Encoder.encode("鈿鉀")].join(",") === "231,237,251,197"); // U+923F
assert.throws(() => {ms932Encoder.encode("\u9241")}, {name:"Error",message:"EncodingError U+9241"});
assert.throws(() => {ms932Encoder.encode("\u9242")}, {name:"Error",message:"EncodingError U+9242"});
assert.throws(() => {ms932Encoder.encode("\u9243")}, {name:"Error",message:"EncodingError U+9243"});
r = r && ([...ms932Encoder.encode("鉄鉅")].join(",") === "147,83,231,232"); // U+9244
assert.throws(() => {ms932Encoder.encode("\u9246")}, {name:"Error",message:"EncodingError U+9246"});
assert.throws(() => {ms932Encoder.encode("\u9247")}, {name:"Error",message:"EncodingError U+9247"});
r = r && ([...ms932Encoder.encode("鉈鉉")].join(",") === "231,235,231,233"); // U+9248
assert.throws(() => {ms932Encoder.encode("\u924A")}, {name:"Error",message:"EncodingError U+924A"});
r = r && ([...ms932Encoder.encode("鉋")].join(",") === "231,238"); // U+924B
assert.throws(() => {ms932Encoder.encode("\u924C")}, {name:"Error",message:"EncodingError U+924C"});
assert.throws(() => {ms932Encoder.encode("\u924D")}, {name:"Error",message:"EncodingError U+924D"});
r = r && ([...ms932Encoder.encode("鉎")].join(",") === "251,199"); // U+924E
assert.throws(() => {ms932Encoder.encode("\u924F")}, {name:"Error",message:"EncodingError U+924F"});
r = r && ([...ms932Encoder.encode("鉐鉑")].join(",") === "231,239,251,201"); // U+9250
assert.throws(() => {ms932Encoder.encode("\u9252")}, {name:"Error",message:"EncodingError U+9252"});
assert.throws(() => {ms932Encoder.encode("\u9253")}, {name:"Error",message:"EncodingError U+9253"});
assert.throws(() => {ms932Encoder.encode("\u9254")}, {name:"Error",message:"EncodingError U+9254"});
assert.throws(() => {ms932Encoder.encode("\u9255")}, {name:"Error",message:"EncodingError U+9255"});
assert.throws(() => {ms932Encoder.encode("\u9256")}, {name:"Error",message:"EncodingError U+9256"});
r = r && ([...ms932Encoder.encode("鉗")].join(",") === "231,231"); // U+9257
assert.throws(() => {ms932Encoder.encode("\u9258")}, {name:"Error",message:"EncodingError U+9258"});
r = r && ([...ms932Encoder.encode("鉙鉚鉛")].join(",") === "251,200,231,244,137,148"); // U+9259
assert.throws(() => {ms932Encoder.encode("\u925C")}, {name:"Error",message:"EncodingError U+925C"});
assert.throws(() => {ms932Encoder.encode("\u925D")}, {name:"Error",message:"EncodingError U+925D"});
r = r && ([...ms932Encoder.encode("鉞")].join(",") === "231,230"); // U+925E
assert.throws(() => {ms932Encoder.encode("\u925F")}, {name:"Error",message:"EncodingError U+925F"});
assert.throws(() => {ms932Encoder.encode("\u9260")}, {name:"Error",message:"EncodingError U+9260"});
assert.throws(() => {ms932Encoder.encode("\u9261")}, {name:"Error",message:"EncodingError U+9261"});
r = r && ([...ms932Encoder.encode("鉢")].join(",") === "148,171"); // U+9262
assert.throws(() => {ms932Encoder.encode("\u9263")}, {name:"Error",message:"EncodingError U+9263"});
r = r && ([...ms932Encoder.encode("鉤")].join(",") === "231,234"); // U+9264
assert.throws(() => {ms932Encoder.encode("\u9265")}, {name:"Error",message:"EncodingError U+9265"});
r = r && ([...ms932Encoder.encode("鉦鉧")].join(",") === "143,222,251,203"); // U+9266
assert.throws(() => {ms932Encoder.encode("\u9268")}, {name:"Error",message:"EncodingError U+9268"});
assert.throws(() => {ms932Encoder.encode("\u9269")}, {name:"Error",message:"EncodingError U+9269"});
assert.throws(() => {ms932Encoder.encode("\u926A")}, {name:"Error",message:"EncodingError U+926A"});
assert.throws(() => {ms932Encoder.encode("\u926B")}, {name:"Error",message:"EncodingError U+926B"});
assert.throws(() => {ms932Encoder.encode("\u926C")}, {name:"Error",message:"EncodingError U+926C"});
assert.throws(() => {ms932Encoder.encode("\u926D")}, {name:"Error",message:"EncodingError U+926D"});
assert.throws(() => {ms932Encoder.encode("\u926E")}, {name:"Error",message:"EncodingError U+926E"});
assert.throws(() => {ms932Encoder.encode("\u926F")}, {name:"Error",message:"EncodingError U+926F"});
assert.throws(() => {ms932Encoder.encode("\u9270")}, {name:"Error",message:"EncodingError U+9270"});
r = r && ([...ms932Encoder.encode("鉱")].join(",") === "141,122"); // U+9271
assert.throws(() => {ms932Encoder.encode("\u9272")}, {name:"Error",message:"EncodingError U+9272"});
assert.throws(() => {ms932Encoder.encode("\u9273")}, {name:"Error",message:"EncodingError U+9273"});
assert.throws(() => {ms932Encoder.encode("\u9274")}, {name:"Error",message:"EncodingError U+9274"});
assert.throws(() => {ms932Encoder.encode("\u9275")}, {name:"Error",message:"EncodingError U+9275"});
assert.throws(() => {ms932Encoder.encode("\u9276")}, {name:"Error",message:"EncodingError U+9276"});
r = r && ([...ms932Encoder.encode("鉷鉸")].join(",") === "251,205,251,206"); // U+9277
assert.throws(() => {ms932Encoder.encode("\u9279")}, {name:"Error",message:"EncodingError U+9279"});
assert.throws(() => {ms932Encoder.encode("\u927A")}, {name:"Error",message:"EncodingError U+927A"});
assert.throws(() => {ms932Encoder.encode("\u927B")}, {name:"Error",message:"EncodingError U+927B"});
assert.throws(() => {ms932Encoder.encode("\u927C")}, {name:"Error",message:"EncodingError U+927C"});
assert.throws(() => {ms932Encoder.encode("\u927D")}, {name:"Error",message:"EncodingError U+927D"});
r = r && ([...ms932Encoder.encode("鉾")].join(",") === "150,103"); // U+927E
assert.throws(() => {ms932Encoder.encode("\u927F")}, {name:"Error",message:"EncodingError U+927F"});
r = r && ([...ms932Encoder.encode("銀")].join(",") === "139,226"); // U+9280
assert.throws(() => {ms932Encoder.encode("\u9281")}, {name:"Error",message:"EncodingError U+9281"});
assert.throws(() => {ms932Encoder.encode("\u9282")}, {name:"Error",message:"EncodingError U+9282"});
r = r && ([...ms932Encoder.encode("銃")].join(",") === "143,101"); // U+9283
assert.throws(() => {ms932Encoder.encode("\u9284")}, {name:"Error",message:"EncodingError U+9284"});
r = r && ([...ms932Encoder.encode("銅")].join(",") === "147,186"); // U+9285
assert.throws(() => {ms932Encoder.encode("\u9286")}, {name:"Error",message:"EncodingError U+9286"});
assert.throws(() => {ms932Encoder.encode("\u9287")}, {name:"Error",message:"EncodingError U+9287"});
r = r && ([...ms932Encoder.encode("銈")].join(",") === "250,95"); // U+9288
assert.throws(() => {ms932Encoder.encode("\u9289")}, {name:"Error",message:"EncodingError U+9289"});
assert.throws(() => {ms932Encoder.encode("\u928A")}, {name:"Error",message:"EncodingError U+928A"});
assert.throws(() => {ms932Encoder.encode("\u928B")}, {name:"Error",message:"EncodingError U+928B"});
assert.throws(() => {ms932Encoder.encode("\u928C")}, {name:"Error",message:"EncodingError U+928C"});
assert.throws(() => {ms932Encoder.encode("\u928D")}, {name:"Error",message:"EncodingError U+928D"});
assert.throws(() => {ms932Encoder.encode("\u928E")}, {name:"Error",message:"EncodingError U+928E"});
assert.throws(() => {ms932Encoder.encode("\u928F")}, {name:"Error",message:"EncodingError U+928F"});
assert.throws(() => {ms932Encoder.encode("\u9290")}, {name:"Error",message:"EncodingError U+9290"});
r = r && ([...ms932Encoder.encode("銑")].join(",") === "145,76"); // U+9291
assert.throws(() => {ms932Encoder.encode("\u9292")}, {name:"Error",message:"EncodingError U+9292"});
r = r && ([...ms932Encoder.encode("銓")].join(",") === "231,242"); // U+9293
assert.throws(() => {ms932Encoder.encode("\u9294")}, {name:"Error",message:"EncodingError U+9294"});
r = r && ([...ms932Encoder.encode("銕銖")].join(",") === "231,236,231,241"); // U+9295
assert.throws(() => {ms932Encoder.encode("\u9297")}, {name:"Error",message:"EncodingError U+9297"});
r = r && ([...ms932Encoder.encode("銘")].join(",") === "150,193"); // U+9298
assert.throws(() => {ms932Encoder.encode("\u9299")}, {name:"Error",message:"EncodingError U+9299"});
r = r && ([...ms932Encoder.encode("銚銛銜")].join(",") === "146,182,231,243,231,240"); // U+929A
assert.throws(() => {ms932Encoder.encode("\u929D")}, {name:"Error",message:"EncodingError U+929D"});
assert.throws(() => {ms932Encoder.encode("\u929E")}, {name:"Error",message:"EncodingError U+929E"});
assert.throws(() => {ms932Encoder.encode("\u929F")}, {name:"Error",message:"EncodingError U+929F"});
assert.throws(() => {ms932Encoder.encode("\u92A0")}, {name:"Error",message:"EncodingError U+92A0"});
assert.throws(() => {ms932Encoder.encode("\u92A1")}, {name:"Error",message:"EncodingError U+92A1"});
assert.throws(() => {ms932Encoder.encode("\u92A2")}, {name:"Error",message:"EncodingError U+92A2"});
assert.throws(() => {ms932Encoder.encode("\u92A3")}, {name:"Error",message:"EncodingError U+92A3"});
assert.throws(() => {ms932Encoder.encode("\u92A4")}, {name:"Error",message:"EncodingError U+92A4"});
assert.throws(() => {ms932Encoder.encode("\u92A5")}, {name:"Error",message:"EncodingError U+92A5"});
assert.throws(() => {ms932Encoder.encode("\u92A6")}, {name:"Error",message:"EncodingError U+92A6"});
r = r && ([...ms932Encoder.encode("銧")].join(",") === "251,204"); // U+92A7
assert.throws(() => {ms932Encoder.encode("\u92A8")}, {name:"Error",message:"EncodingError U+92A8"});
assert.throws(() => {ms932Encoder.encode("\u92A9")}, {name:"Error",message:"EncodingError U+92A9"});
assert.throws(() => {ms932Encoder.encode("\u92AA")}, {name:"Error",message:"EncodingError U+92AA"});
assert.throws(() => {ms932Encoder.encode("\u92AB")}, {name:"Error",message:"EncodingError U+92AB"});
assert.throws(() => {ms932Encoder.encode("\u92AC")}, {name:"Error",message:"EncodingError U+92AC"});
r = r && ([...ms932Encoder.encode("銭")].join(",") === "145,75"); // U+92AD
assert.throws(() => {ms932Encoder.encode("\u92AE")}, {name:"Error",message:"EncodingError U+92AE"});
assert.throws(() => {ms932Encoder.encode("\u92AF")}, {name:"Error",message:"EncodingError U+92AF"});
assert.throws(() => {ms932Encoder.encode("\u92B0")}, {name:"Error",message:"EncodingError U+92B0"});
assert.throws(() => {ms932Encoder.encode("\u92B1")}, {name:"Error",message:"EncodingError U+92B1"});
assert.throws(() => {ms932Encoder.encode("\u92B2")}, {name:"Error",message:"EncodingError U+92B2"});
assert.throws(() => {ms932Encoder.encode("\u92B3")}, {name:"Error",message:"EncodingError U+92B3"});
assert.throws(() => {ms932Encoder.encode("\u92B4")}, {name:"Error",message:"EncodingError U+92B4"});
assert.throws(() => {ms932Encoder.encode("\u92B5")}, {name:"Error",message:"EncodingError U+92B5"});
assert.throws(() => {ms932Encoder.encode("\u92B6")}, {name:"Error",message:"EncodingError U+92B6"});
r = r && ([...ms932Encoder.encode("銷")].join(",") === "231,247"); // U+92B7
assert.throws(() => {ms932Encoder.encode("\u92B8")}, {name:"Error",message:"EncodingError U+92B8"});
r = r && ([...ms932Encoder.encode("銹")].join(",") === "231,246"); // U+92B9
assert.throws(() => {ms932Encoder.encode("\u92BA")}, {name:"Error",message:"EncodingError U+92BA"});
assert.throws(() => {ms932Encoder.encode("\u92BB")}, {name:"Error",message:"EncodingError U+92BB"});
assert.throws(() => {ms932Encoder.encode("\u92BC")}, {name:"Error",message:"EncodingError U+92BC"});
assert.throws(() => {ms932Encoder.encode("\u92BD")}, {name:"Error",message:"EncodingError U+92BD"});
assert.throws(() => {ms932Encoder.encode("\u92BE")}, {name:"Error",message:"EncodingError U+92BE"});
assert.throws(() => {ms932Encoder.encode("\u92BF")}, {name:"Error",message:"EncodingError U+92BF"});
assert.throws(() => {ms932Encoder.encode("\u92C0")}, {name:"Error",message:"EncodingError U+92C0"});
assert.throws(() => {ms932Encoder.encode("\u92C1")}, {name:"Error",message:"EncodingError U+92C1"});
assert.throws(() => {ms932Encoder.encode("\u92C2")}, {name:"Error",message:"EncodingError U+92C2"});
assert.throws(() => {ms932Encoder.encode("\u92C3")}, {name:"Error",message:"EncodingError U+92C3"});
assert.throws(() => {ms932Encoder.encode("\u92C4")}, {name:"Error",message:"EncodingError U+92C4"});
assert.throws(() => {ms932Encoder.encode("\u92C5")}, {name:"Error",message:"EncodingError U+92C5"});
assert.throws(() => {ms932Encoder.encode("\u92C6")}, {name:"Error",message:"EncodingError U+92C6"});
assert.throws(() => {ms932Encoder.encode("\u92C7")}, {name:"Error",message:"EncodingError U+92C7"});
assert.throws(() => {ms932Encoder.encode("\u92C8")}, {name:"Error",message:"EncodingError U+92C8"});
assert.throws(() => {ms932Encoder.encode("\u92C9")}, {name:"Error",message:"EncodingError U+92C9"});
assert.throws(() => {ms932Encoder.encode("\u92CA")}, {name:"Error",message:"EncodingError U+92CA"});
assert.throws(() => {ms932Encoder.encode("\u92CB")}, {name:"Error",message:"EncodingError U+92CB"});
assert.throws(() => {ms932Encoder.encode("\u92CC")}, {name:"Error",message:"EncodingError U+92CC"});
assert.throws(() => {ms932Encoder.encode("\u92CD")}, {name:"Error",message:"EncodingError U+92CD"});
assert.throws(() => {ms932Encoder.encode("\u92CE")}, {name:"Error",message:"EncodingError U+92CE"});
r = r && ([...ms932Encoder.encode("鋏鋐")].join(",") === "231,245,251,210"); // U+92CF
assert.throws(() => {ms932Encoder.encode("\u92D1")}, {name:"Error",message:"EncodingError U+92D1"});
r = r && ([...ms932Encoder.encode("鋒鋓")].join(",") === "150,78,251,214"); // U+92D2
assert.throws(() => {ms932Encoder.encode("\u92D4")}, {name:"Error",message:"EncodingError U+92D4"});
r = r && ([...ms932Encoder.encode("鋕")].join(",") === "251,212"); // U+92D5
assert.throws(() => {ms932Encoder.encode("\u92D6")}, {name:"Error",message:"EncodingError U+92D6"});
r = r && ([...ms932Encoder.encode("鋗")].join(",") === "251,208"); // U+92D7
assert.throws(() => {ms932Encoder.encode("\u92D8")}, {name:"Error",message:"EncodingError U+92D8"});
r = r && ([...ms932Encoder.encode("鋙")].join(",") === "251,209"); // U+92D9
assert.throws(() => {ms932Encoder.encode("\u92DA")}, {name:"Error",message:"EncodingError U+92DA"});
assert.throws(() => {ms932Encoder.encode("\u92DB")}, {name:"Error",message:"EncodingError U+92DB"});
assert.throws(() => {ms932Encoder.encode("\u92DC")}, {name:"Error",message:"EncodingError U+92DC"});
assert.throws(() => {ms932Encoder.encode("\u92DD")}, {name:"Error",message:"EncodingError U+92DD"});
assert.throws(() => {ms932Encoder.encode("\u92DE")}, {name:"Error",message:"EncodingError U+92DE"});
assert.throws(() => {ms932Encoder.encode("\u92DF")}, {name:"Error",message:"EncodingError U+92DF"});
r = r && ([...ms932Encoder.encode("鋠")].join(",") === "251,213"); // U+92E0
assert.throws(() => {ms932Encoder.encode("\u92E1")}, {name:"Error",message:"EncodingError U+92E1"});
assert.throws(() => {ms932Encoder.encode("\u92E2")}, {name:"Error",message:"EncodingError U+92E2"});
assert.throws(() => {ms932Encoder.encode("\u92E3")}, {name:"Error",message:"EncodingError U+92E3"});
r = r && ([...ms932Encoder.encode("鋤")].join(",") === "143,155"); // U+92E4
assert.throws(() => {ms932Encoder.encode("\u92E5")}, {name:"Error",message:"EncodingError U+92E5"});
assert.throws(() => {ms932Encoder.encode("\u92E6")}, {name:"Error",message:"EncodingError U+92E6"});
r = r && ([...ms932Encoder.encode("鋧")].join(",") === "251,207"); // U+92E7
assert.throws(() => {ms932Encoder.encode("\u92E8")}, {name:"Error",message:"EncodingError U+92E8"});
r = r && ([...ms932Encoder.encode("鋩鋪")].join(",") === "231,248,149,221"); // U+92E9
assert.throws(() => {ms932Encoder.encode("\u92EB")}, {name:"Error",message:"EncodingError U+92EB"});
assert.throws(() => {ms932Encoder.encode("\u92EC")}, {name:"Error",message:"EncodingError U+92EC"});
r = r && ([...ms932Encoder.encode("鋭")].join(",") === "137,115"); // U+92ED
assert.throws(() => {ms932Encoder.encode("\u92EE")}, {name:"Error",message:"EncodingError U+92EE"});
assert.throws(() => {ms932Encoder.encode("\u92EF")}, {name:"Error",message:"EncodingError U+92EF"});
assert.throws(() => {ms932Encoder.encode("\u92F0")}, {name:"Error",message:"EncodingError U+92F0"});
assert.throws(() => {ms932Encoder.encode("\u92F1")}, {name:"Error",message:"EncodingError U+92F1"});
r = r && ([...ms932Encoder.encode("鋲鋳")].join(",") === "149,101,146,146"); // U+92F2
assert.throws(() => {ms932Encoder.encode("\u92F4")}, {name:"Error",message:"EncodingError U+92F4"});
assert.throws(() => {ms932Encoder.encode("\u92F5")}, {name:"Error",message:"EncodingError U+92F5"});
assert.throws(() => {ms932Encoder.encode("\u92F6")}, {name:"Error",message:"EncodingError U+92F6"});
assert.throws(() => {ms932Encoder.encode("\u92F7")}, {name:"Error",message:"EncodingError U+92F7"});
r = r && ([...ms932Encoder.encode("鋸鋹鋺鋻鋼")].join(",") === "139,152,250,101,231,250,251,217,141,124"); // U+92F8
assert.throws(() => {ms932Encoder.encode("\u92FD")}, {name:"Error",message:"EncodingError U+92FD"});
assert.throws(() => {ms932Encoder.encode("\u92FE")}, {name:"Error",message:"EncodingError U+92FE"});
r = r && ([...ms932Encoder.encode("鋿")].join(",") === "251,220"); // U+92FF
assert.throws(() => {ms932Encoder.encode("\u9300")}, {name:"Error",message:"EncodingError U+9300"});
assert.throws(() => {ms932Encoder.encode("\u9301")}, {name:"Error",message:"EncodingError U+9301"});
r = r && ([...ms932Encoder.encode("錂")].join(",") === "251,222"); // U+9302
assert.throws(() => {ms932Encoder.encode("\u9303")}, {name:"Error",message:"EncodingError U+9303"});
assert.throws(() => {ms932Encoder.encode("\u9304")}, {name:"Error",message:"EncodingError U+9304"});
assert.throws(() => {ms932Encoder.encode("\u9305")}, {name:"Error",message:"EncodingError U+9305"});
r = r && ([...ms932Encoder.encode("錆")].join(",") === "142,75"); // U+9306
assert.throws(() => {ms932Encoder.encode("\u9307")}, {name:"Error",message:"EncodingError U+9307"});
assert.throws(() => {ms932Encoder.encode("\u9308")}, {name:"Error",message:"EncodingError U+9308"});
assert.throws(() => {ms932Encoder.encode("\u9309")}, {name:"Error",message:"EncodingError U+9309"});
assert.throws(() => {ms932Encoder.encode("\u930A")}, {name:"Error",message:"EncodingError U+930A"});
assert.throws(() => {ms932Encoder.encode("\u930B")}, {name:"Error",message:"EncodingError U+930B"});
assert.throws(() => {ms932Encoder.encode("\u930C")}, {name:"Error",message:"EncodingError U+930C"});
assert.throws(() => {ms932Encoder.encode("\u930D")}, {name:"Error",message:"EncodingError U+930D"});
assert.throws(() => {ms932Encoder.encode("\u930E")}, {name:"Error",message:"EncodingError U+930E"});
r = r && ([...ms932Encoder.encode("錏錐")].join(",") === "231,249,144,141"); // U+930F
assert.throws(() => {ms932Encoder.encode("\u9311")}, {name:"Error",message:"EncodingError U+9311"});
assert.throws(() => {ms932Encoder.encode("\u9312")}, {name:"Error",message:"EncodingError U+9312"});
assert.throws(() => {ms932Encoder.encode("\u9313")}, {name:"Error",message:"EncodingError U+9313"});
assert.throws(() => {ms932Encoder.encode("\u9314")}, {name:"Error",message:"EncodingError U+9314"});
assert.throws(() => {ms932Encoder.encode("\u9315")}, {name:"Error",message:"EncodingError U+9315"});
assert.throws(() => {ms932Encoder.encode("\u9316")}, {name:"Error",message:"EncodingError U+9316"});
assert.throws(() => {ms932Encoder.encode("\u9317")}, {name:"Error",message:"EncodingError U+9317"});
r = r && ([...ms932Encoder.encode("錘錙錚")].join(",") === "144,142,232,64,232,66"); // U+9318
assert.throws(() => {ms932Encoder.encode("\u931B")}, {name:"Error",message:"EncodingError U+931B"});
assert.throws(() => {ms932Encoder.encode("\u931C")}, {name:"Error",message:"EncodingError U+931C"});
r = r && ([...ms932Encoder.encode("錝錞")].join(",") === "251,221,251,219"); // U+931D
assert.throws(() => {ms932Encoder.encode("\u931F")}, {name:"Error",message:"EncodingError U+931F"});
r = r && ([...ms932Encoder.encode("錠錡錢錣")].join(",") === "143,249,251,216,232,65,232,67"); // U+9320
assert.throws(() => {ms932Encoder.encode("\u9324")}, {name:"Error",message:"EncodingError U+9324"});
r = r && ([...ms932Encoder.encode("錥錦")].join(",") === "251,215,139,209"); // U+9325
assert.throws(() => {ms932Encoder.encode("\u9327")}, {name:"Error",message:"EncodingError U+9327"});
r = r && ([...ms932Encoder.encode("錨")].join(",") === "149,100"); // U+9328
assert.throws(() => {ms932Encoder.encode("\u9329")}, {name:"Error",message:"EncodingError U+9329"});
assert.throws(() => {ms932Encoder.encode("\u932A")}, {name:"Error",message:"EncodingError U+932A"});
r = r && ([...ms932Encoder.encode("錫錬")].join(",") === "142,224,152,66"); // U+932B
assert.throws(() => {ms932Encoder.encode("\u932D")}, {name:"Error",message:"EncodingError U+932D"});
r = r && ([...ms932Encoder.encode("錮錯")].join(",") === "231,252,141,246"); // U+932E
assert.throws(() => {ms932Encoder.encode("\u9330")}, {name:"Error",message:"EncodingError U+9330"});
assert.throws(() => {ms932Encoder.encode("\u9331")}, {name:"Error",message:"EncodingError U+9331"});
r = r && ([...ms932Encoder.encode("録")].join(",") === "152,94"); // U+9332
assert.throws(() => {ms932Encoder.encode("\u9333")}, {name:"Error",message:"EncodingError U+9333"});
assert.throws(() => {ms932Encoder.encode("\u9334")}, {name:"Error",message:"EncodingError U+9334"});
r = r && ([...ms932Encoder.encode("錵")].join(",") === "232,69"); // U+9335
assert.throws(() => {ms932Encoder.encode("\u9336")}, {name:"Error",message:"EncodingError U+9336"});
assert.throws(() => {ms932Encoder.encode("\u9337")}, {name:"Error",message:"EncodingError U+9337"});
assert.throws(() => {ms932Encoder.encode("\u9338")}, {name:"Error",message:"EncodingError U+9338"});
assert.throws(() => {ms932Encoder.encode("\u9339")}, {name:"Error",message:"EncodingError U+9339"});
r = r && ([...ms932Encoder.encode("錺錻")].join(",") === "232,68,232,70"); // U+933A
assert.throws(() => {ms932Encoder.encode("\u933C")}, {name:"Error",message:"EncodingError U+933C"});
assert.throws(() => {ms932Encoder.encode("\u933D")}, {name:"Error",message:"EncodingError U+933D"});
assert.throws(() => {ms932Encoder.encode("\u933E")}, {name:"Error",message:"EncodingError U+933E"});
assert.throws(() => {ms932Encoder.encode("\u933F")}, {name:"Error",message:"EncodingError U+933F"});
assert.throws(() => {ms932Encoder.encode("\u9340")}, {name:"Error",message:"EncodingError U+9340"});
assert.throws(() => {ms932Encoder.encode("\u9341")}, {name:"Error",message:"EncodingError U+9341"});
assert.throws(() => {ms932Encoder.encode("\u9342")}, {name:"Error",message:"EncodingError U+9342"});
assert.throws(() => {ms932Encoder.encode("\u9343")}, {name:"Error",message:"EncodingError U+9343"});
r = r && ([...ms932Encoder.encode("鍄")].join(",") === "231,251"); // U+9344
assert.throws(() => {ms932Encoder.encode("\u9345")}, {name:"Error",message:"EncodingError U+9345"});
assert.throws(() => {ms932Encoder.encode("\u9346")}, {name:"Error",message:"EncodingError U+9346"});
assert.throws(() => {ms932Encoder.encode("\u9347")}, {name:"Error",message:"EncodingError U+9347"});
r = r && ([...ms932Encoder.encode("鍈")].join(",") === "250,94"); // U+9348
assert.throws(() => {ms932Encoder.encode("\u9349")}, {name:"Error",message:"EncodingError U+9349"});
assert.throws(() => {ms932Encoder.encode("\u934A")}, {name:"Error",message:"EncodingError U+934A"});
r = r && ([...ms932Encoder.encode("鍋")].join(",") === "147,231"); // U+934B
assert.throws(() => {ms932Encoder.encode("\u934C")}, {name:"Error",message:"EncodingError U+934C"});
r = r && ([...ms932Encoder.encode("鍍")].join(",") === "147,116"); // U+934D
assert.throws(() => {ms932Encoder.encode("\u934E")}, {name:"Error",message:"EncodingError U+934E"});
assert.throws(() => {ms932Encoder.encode("\u934F")}, {name:"Error",message:"EncodingError U+934F"});
assert.throws(() => {ms932Encoder.encode("\u9350")}, {name:"Error",message:"EncodingError U+9350"});
assert.throws(() => {ms932Encoder.encode("\u9351")}, {name:"Error",message:"EncodingError U+9351"});
assert.throws(() => {ms932Encoder.encode("\u9352")}, {name:"Error",message:"EncodingError U+9352"});
assert.throws(() => {ms932Encoder.encode("\u9353")}, {name:"Error",message:"EncodingError U+9353"});
r = r && ([...ms932Encoder.encode("鍔")].join(",") === "146,213"); // U+9354
assert.throws(() => {ms932Encoder.encode("\u9355")}, {name:"Error",message:"EncodingError U+9355"});
r = r && ([...ms932Encoder.encode("鍖鍗")].join(",") === "232,75,251,224"); // U+9356
assert.throws(() => {ms932Encoder.encode("\u9358")}, {name:"Error",message:"EncodingError U+9358"});
assert.throws(() => {ms932Encoder.encode("\u9359")}, {name:"Error",message:"EncodingError U+9359"});
assert.throws(() => {ms932Encoder.encode("\u935A")}, {name:"Error",message:"EncodingError U+935A"});
r = r && ([...ms932Encoder.encode("鍛鍜")].join(",") === "146,98,232,71"); // U+935B
assert.throws(() => {ms932Encoder.encode("\u935D")}, {name:"Error",message:"EncodingError U+935D"});
assert.throws(() => {ms932Encoder.encode("\u935E")}, {name:"Error",message:"EncodingError U+935E"});
assert.throws(() => {ms932Encoder.encode("\u935F")}, {name:"Error",message:"EncodingError U+935F"});
r = r && ([...ms932Encoder.encode("鍠")].join(",") === "232,72"); // U+9360
assert.throws(() => {ms932Encoder.encode("\u9361")}, {name:"Error",message:"EncodingError U+9361"});
assert.throws(() => {ms932Encoder.encode("\u9362")}, {name:"Error",message:"EncodingError U+9362"});
assert.throws(() => {ms932Encoder.encode("\u9363")}, {name:"Error",message:"EncodingError U+9363"});
assert.throws(() => {ms932Encoder.encode("\u9364")}, {name:"Error",message:"EncodingError U+9364"});
assert.throws(() => {ms932Encoder.encode("\u9365")}, {name:"Error",message:"EncodingError U+9365"});
assert.throws(() => {ms932Encoder.encode("\u9366")}, {name:"Error",message:"EncodingError U+9366"});
assert.throws(() => {ms932Encoder.encode("\u9367")}, {name:"Error",message:"EncodingError U+9367"});
assert.throws(() => {ms932Encoder.encode("\u9368")}, {name:"Error",message:"EncodingError U+9368"});
assert.throws(() => {ms932Encoder.encode("\u9369")}, {name:"Error",message:"EncodingError U+9369"});
assert.throws(() => {ms932Encoder.encode("\u936A")}, {name:"Error",message:"EncodingError U+936A"});
assert.throws(() => {ms932Encoder.encode("\u936B")}, {name:"Error",message:"EncodingError U+936B"});
r = r && ([...ms932Encoder.encode("鍬")].join(",") === "140,76"); // U+936C
assert.throws(() => {ms932Encoder.encode("\u936D")}, {name:"Error",message:"EncodingError U+936D"});
r = r && ([...ms932Encoder.encode("鍮")].join(",") === "232,74"); // U+936E
assert.throws(() => {ms932Encoder.encode("\u936F")}, {name:"Error",message:"EncodingError U+936F"});
r = r && ([...ms932Encoder.encode("鍰")].join(",") === "251,223"); // U+9370
assert.throws(() => {ms932Encoder.encode("\u9371")}, {name:"Error",message:"EncodingError U+9371"});
assert.throws(() => {ms932Encoder.encode("\u9372")}, {name:"Error",message:"EncodingError U+9372"});
assert.throws(() => {ms932Encoder.encode("\u9373")}, {name:"Error",message:"EncodingError U+9373"});
assert.throws(() => {ms932Encoder.encode("\u9374")}, {name:"Error",message:"EncodingError U+9374"});
r = r && ([...ms932Encoder.encode("鍵")].join(",") === "140,174"); // U+9375
assert.throws(() => {ms932Encoder.encode("\u9376")}, {name:"Error",message:"EncodingError U+9376"});
assert.throws(() => {ms932Encoder.encode("\u9377")}, {name:"Error",message:"EncodingError U+9377"});
assert.throws(() => {ms932Encoder.encode("\u9378")}, {name:"Error",message:"EncodingError U+9378"});
assert.throws(() => {ms932Encoder.encode("\u9379")}, {name:"Error",message:"EncodingError U+9379"});
assert.throws(() => {ms932Encoder.encode("\u937A")}, {name:"Error",message:"EncodingError U+937A"});
assert.throws(() => {ms932Encoder.encode("\u937B")}, {name:"Error",message:"EncodingError U+937B"});
r = r && ([...ms932Encoder.encode("鍼")].join(",") === "232,73"); // U+937C
assert.throws(() => {ms932Encoder.encode("\u937D")}, {name:"Error",message:"EncodingError U+937D"});
r = r && ([...ms932Encoder.encode("鍾")].join(",") === "143,223"); // U+937E
assert.throws(() => {ms932Encoder.encode("\u937F")}, {name:"Error",message:"EncodingError U+937F"});
assert.throws(() => {ms932Encoder.encode("\u9380")}, {name:"Error",message:"EncodingError U+9380"});
assert.throws(() => {ms932Encoder.encode("\u9381")}, {name:"Error",message:"EncodingError U+9381"});
assert.throws(() => {ms932Encoder.encode("\u9382")}, {name:"Error",message:"EncodingError U+9382"});
assert.throws(() => {ms932Encoder.encode("\u9383")}, {name:"Error",message:"EncodingError U+9383"});
assert.throws(() => {ms932Encoder.encode("\u9384")}, {name:"Error",message:"EncodingError U+9384"});
assert.throws(() => {ms932Encoder.encode("\u9385")}, {name:"Error",message:"EncodingError U+9385"});
assert.throws(() => {ms932Encoder.encode("\u9386")}, {name:"Error",message:"EncodingError U+9386"});
assert.throws(() => {ms932Encoder.encode("\u9387")}, {name:"Error",message:"EncodingError U+9387"});
assert.throws(() => {ms932Encoder.encode("\u9388")}, {name:"Error",message:"EncodingError U+9388"});
assert.throws(() => {ms932Encoder.encode("\u9389")}, {name:"Error",message:"EncodingError U+9389"});
assert.throws(() => {ms932Encoder.encode("\u938A")}, {name:"Error",message:"EncodingError U+938A"});
assert.throws(() => {ms932Encoder.encode("\u938B")}, {name:"Error",message:"EncodingError U+938B"});
r = r && ([...ms932Encoder.encode("鎌")].join(",") === "138,153"); // U+938C
assert.throws(() => {ms932Encoder.encode("\u938D")}, {name:"Error",message:"EncodingError U+938D"});
assert.throws(() => {ms932Encoder.encode("\u938E")}, {name:"Error",message:"EncodingError U+938E"});
assert.throws(() => {ms932Encoder.encode("\u938F")}, {name:"Error",message:"EncodingError U+938F"});
assert.throws(() => {ms932Encoder.encode("\u9390")}, {name:"Error",message:"EncodingError U+9390"});
assert.throws(() => {ms932Encoder.encode("\u9391")}, {name:"Error",message:"EncodingError U+9391"});
assert.throws(() => {ms932Encoder.encode("\u9392")}, {name:"Error",message:"EncodingError U+9392"});
assert.throws(() => {ms932Encoder.encode("\u9393")}, {name:"Error",message:"EncodingError U+9393"});
r = r && ([...ms932Encoder.encode("鎔")].join(",") === "232,79"); // U+9394
assert.throws(() => {ms932Encoder.encode("\u9395")}, {name:"Error",message:"EncodingError U+9395"});
r = r && ([...ms932Encoder.encode("鎖鎗")].join(",") === "141,189,145,153"); // U+9396
assert.throws(() => {ms932Encoder.encode("\u9398")}, {name:"Error",message:"EncodingError U+9398"});
assert.throws(() => {ms932Encoder.encode("\u9399")}, {name:"Error",message:"EncodingError U+9399"});
r = r && ([...ms932Encoder.encode("鎚")].join(",") === "146,200"); // U+939A
assert.throws(() => {ms932Encoder.encode("\u939B")}, {name:"Error",message:"EncodingError U+939B"});
assert.throws(() => {ms932Encoder.encode("\u939C")}, {name:"Error",message:"EncodingError U+939C"});
assert.throws(() => {ms932Encoder.encode("\u939D")}, {name:"Error",message:"EncodingError U+939D"});
assert.throws(() => {ms932Encoder.encode("\u939E")}, {name:"Error",message:"EncodingError U+939E"});
assert.throws(() => {ms932Encoder.encode("\u939F")}, {name:"Error",message:"EncodingError U+939F"});
assert.throws(() => {ms932Encoder.encode("\u93A0")}, {name:"Error",message:"EncodingError U+93A0"});
assert.throws(() => {ms932Encoder.encode("\u93A1")}, {name:"Error",message:"EncodingError U+93A1"});
assert.throws(() => {ms932Encoder.encode("\u93A2")}, {name:"Error",message:"EncodingError U+93A2"});
assert.throws(() => {ms932Encoder.encode("\u93A3")}, {name:"Error",message:"EncodingError U+93A3"});
r = r && ([...ms932Encoder.encode("鎤")].join(",") === "251,225"); // U+93A4
assert.throws(() => {ms932Encoder.encode("\u93A5")}, {name:"Error",message:"EncodingError U+93A5"});
assert.throws(() => {ms932Encoder.encode("\u93A6")}, {name:"Error",message:"EncodingError U+93A6"});
r = r && ([...ms932Encoder.encode("鎧")].join(",") === "138,90"); // U+93A7
assert.throws(() => {ms932Encoder.encode("\u93A8")}, {name:"Error",message:"EncodingError U+93A8"});
assert.throws(() => {ms932Encoder.encode("\u93A9")}, {name:"Error",message:"EncodingError U+93A9"});
assert.throws(() => {ms932Encoder.encode("\u93AA")}, {name:"Error",message:"EncodingError U+93AA"});
assert.throws(() => {ms932Encoder.encode("\u93AB")}, {name:"Error",message:"EncodingError U+93AB"});
r = r && ([...ms932Encoder.encode("鎬鎭鎮")].join(",") === "232,77,232,78,146,193"); // U+93AC
assert.throws(() => {ms932Encoder.encode("\u93AF")}, {name:"Error",message:"EncodingError U+93AF"});
r = r && ([...ms932Encoder.encode("鎰")].join(",") === "232,76"); // U+93B0
assert.throws(() => {ms932Encoder.encode("\u93B1")}, {name:"Error",message:"EncodingError U+93B1"});
assert.throws(() => {ms932Encoder.encode("\u93B2")}, {name:"Error",message:"EncodingError U+93B2"});
assert.throws(() => {ms932Encoder.encode("\u93B3")}, {name:"Error",message:"EncodingError U+93B3"});
assert.throws(() => {ms932Encoder.encode("\u93B4")}, {name:"Error",message:"EncodingError U+93B4"});
assert.throws(() => {ms932Encoder.encode("\u93B5")}, {name:"Error",message:"EncodingError U+93B5"});
assert.throws(() => {ms932Encoder.encode("\u93B6")}, {name:"Error",message:"EncodingError U+93B6"});
assert.throws(() => {ms932Encoder.encode("\u93B7")}, {name:"Error",message:"EncodingError U+93B7"});
assert.throws(() => {ms932Encoder.encode("\u93B8")}, {name:"Error",message:"EncodingError U+93B8"});
r = r && ([...ms932Encoder.encode("鎹")].join(",") === "232,80"); // U+93B9
assert.throws(() => {ms932Encoder.encode("\u93BA")}, {name:"Error",message:"EncodingError U+93BA"});
assert.throws(() => {ms932Encoder.encode("\u93BB")}, {name:"Error",message:"EncodingError U+93BB"});
assert.throws(() => {ms932Encoder.encode("\u93BC")}, {name:"Error",message:"EncodingError U+93BC"});
assert.throws(() => {ms932Encoder.encode("\u93BD")}, {name:"Error",message:"EncodingError U+93BD"});
assert.throws(() => {ms932Encoder.encode("\u93BE")}, {name:"Error",message:"EncodingError U+93BE"});
assert.throws(() => {ms932Encoder.encode("\u93BF")}, {name:"Error",message:"EncodingError U+93BF"});
assert.throws(() => {ms932Encoder.encode("\u93C0")}, {name:"Error",message:"EncodingError U+93C0"});
assert.throws(() => {ms932Encoder.encode("\u93C1")}, {name:"Error",message:"EncodingError U+93C1"});
assert.throws(() => {ms932Encoder.encode("\u93C2")}, {name:"Error",message:"EncodingError U+93C2"});
r = r && ([...ms932Encoder.encode("鏃")].join(",") === "232,86"); // U+93C3
assert.throws(() => {ms932Encoder.encode("\u93C4")}, {name:"Error",message:"EncodingError U+93C4"});
assert.throws(() => {ms932Encoder.encode("\u93C5")}, {name:"Error",message:"EncodingError U+93C5"});
r = r && ([...ms932Encoder.encode("鏆")].join(",") === "251,226"); // U+93C6
assert.throws(() => {ms932Encoder.encode("\u93C7")}, {name:"Error",message:"EncodingError U+93C7"});
r = r && ([...ms932Encoder.encode("鏈")].join(",") === "232,89"); // U+93C8
assert.throws(() => {ms932Encoder.encode("\u93C9")}, {name:"Error",message:"EncodingError U+93C9"});
assert.throws(() => {ms932Encoder.encode("\u93CA")}, {name:"Error",message:"EncodingError U+93CA"});
assert.throws(() => {ms932Encoder.encode("\u93CB")}, {name:"Error",message:"EncodingError U+93CB"});
assert.throws(() => {ms932Encoder.encode("\u93CC")}, {name:"Error",message:"EncodingError U+93CC"});
assert.throws(() => {ms932Encoder.encode("\u93CD")}, {name:"Error",message:"EncodingError U+93CD"});
assert.throws(() => {ms932Encoder.encode("\u93CE")}, {name:"Error",message:"EncodingError U+93CE"});
assert.throws(() => {ms932Encoder.encode("\u93CF")}, {name:"Error",message:"EncodingError U+93CF"});
r = r && ([...ms932Encoder.encode("鏐鏑")].join(",") === "232,88,147,76"); // U+93D0
assert.throws(() => {ms932Encoder.encode("\u93D2")}, {name:"Error",message:"EncodingError U+93D2"});
assert.throws(() => {ms932Encoder.encode("\u93D3")}, {name:"Error",message:"EncodingError U+93D3"});
assert.throws(() => {ms932Encoder.encode("\u93D4")}, {name:"Error",message:"EncodingError U+93D4"});
assert.throws(() => {ms932Encoder.encode("\u93D5")}, {name:"Error",message:"EncodingError U+93D5"});
r = r && ([...ms932Encoder.encode("鏖鏗鏘")].join(",") === "232,81,232,82,232,85"); // U+93D6
assert.throws(() => {ms932Encoder.encode("\u93D9")}, {name:"Error",message:"EncodingError U+93D9"});
assert.throws(() => {ms932Encoder.encode("\u93DA")}, {name:"Error",message:"EncodingError U+93DA"});
assert.throws(() => {ms932Encoder.encode("\u93DB")}, {name:"Error",message:"EncodingError U+93DB"});
assert.throws(() => {ms932Encoder.encode("\u93DC")}, {name:"Error",message:"EncodingError U+93DC"});
r = r && ([...ms932Encoder.encode("鏝鏞")].join(",") === "232,87,251,227"); // U+93DD
assert.throws(() => {ms932Encoder.encode("\u93DF")}, {name:"Error",message:"EncodingError U+93DF"});
assert.throws(() => {ms932Encoder.encode("\u93E0")}, {name:"Error",message:"EncodingError U+93E0"});
r = r && ([...ms932Encoder.encode("鏡")].join(",") === "139,190"); // U+93E1
assert.throws(() => {ms932Encoder.encode("\u93E2")}, {name:"Error",message:"EncodingError U+93E2"});
assert.throws(() => {ms932Encoder.encode("\u93E3")}, {name:"Error",message:"EncodingError U+93E3"});
r = r && ([...ms932Encoder.encode("鏤鏥")].join(",") === "232,90,232,84"); // U+93E4
assert.throws(() => {ms932Encoder.encode("\u93E6")}, {name:"Error",message:"EncodingError U+93E6"});
assert.throws(() => {ms932Encoder.encode("\u93E7")}, {name:"Error",message:"EncodingError U+93E7"});
r = r && ([...ms932Encoder.encode("鏨")].join(",") === "232,83"); // U+93E8
assert.throws(() => {ms932Encoder.encode("\u93E9")}, {name:"Error",message:"EncodingError U+93E9"});
assert.throws(() => {ms932Encoder.encode("\u93EA")}, {name:"Error",message:"EncodingError U+93EA"});
assert.throws(() => {ms932Encoder.encode("\u93EB")}, {name:"Error",message:"EncodingError U+93EB"});
assert.throws(() => {ms932Encoder.encode("\u93EC")}, {name:"Error",message:"EncodingError U+93EC"});
assert.throws(() => {ms932Encoder.encode("\u93ED")}, {name:"Error",message:"EncodingError U+93ED"});
assert.throws(() => {ms932Encoder.encode("\u93EE")}, {name:"Error",message:"EncodingError U+93EE"});
assert.throws(() => {ms932Encoder.encode("\u93EF")}, {name:"Error",message:"EncodingError U+93EF"});
assert.throws(() => {ms932Encoder.encode("\u93F0")}, {name:"Error",message:"EncodingError U+93F0"});
assert.throws(() => {ms932Encoder.encode("\u93F1")}, {name:"Error",message:"EncodingError U+93F1"});
assert.throws(() => {ms932Encoder.encode("\u93F2")}, {name:"Error",message:"EncodingError U+93F2"});
assert.throws(() => {ms932Encoder.encode("\u93F3")}, {name:"Error",message:"EncodingError U+93F3"});
assert.throws(() => {ms932Encoder.encode("\u93F4")}, {name:"Error",message:"EncodingError U+93F4"});
assert.throws(() => {ms932Encoder.encode("\u93F5")}, {name:"Error",message:"EncodingError U+93F5"});
assert.throws(() => {ms932Encoder.encode("\u93F6")}, {name:"Error",message:"EncodingError U+93F6"});
assert.throws(() => {ms932Encoder.encode("\u93F7")}, {name:"Error",message:"EncodingError U+93F7"});
r = r && ([...ms932Encoder.encode("鏸")].join(",") === "251,228"); // U+93F8
assert.throws(() => {ms932Encoder.encode("\u93F9")}, {name:"Error",message:"EncodingError U+93F9"});
assert.throws(() => {ms932Encoder.encode("\u93FA")}, {name:"Error",message:"EncodingError U+93FA"});
assert.throws(() => {ms932Encoder.encode("\u93FB")}, {name:"Error",message:"EncodingError U+93FB"});
assert.throws(() => {ms932Encoder.encode("\u93FC")}, {name:"Error",message:"EncodingError U+93FC"});
assert.throws(() => {ms932Encoder.encode("\u93FD")}, {name:"Error",message:"EncodingError U+93FD"});
assert.throws(() => {ms932Encoder.encode("\u93FE")}, {name:"Error",message:"EncodingError U+93FE"});
assert.throws(() => {ms932Encoder.encode("\u93FF")}, {name:"Error",message:"EncodingError U+93FF"});

assert.strictEqual(r, true);

  });

});
