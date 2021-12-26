import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 10", () => {

  it("encode(string) - U+9000-U+9FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

expect([...ms932Encoder.encode("退送")].join(",")).toBe("145,222,145,151"); // U+9000
expect(() => {ms932Encoder.encode("\u9002")}).toThrowError({name:"TypeError",message:"EncodingError U+9002"});
expect([...ms932Encoder.encode("逃")].join(",")).toBe("147,166"); // U+9003
expect(() => {ms932Encoder.encode("\u9004")}).toThrowError({name:"TypeError",message:"EncodingError U+9004"});
expect([...ms932Encoder.encode("逅逆")].join(",")).toBe("231,144,139,116"); // U+9005
expect(() => {ms932Encoder.encode("\u9007")}).toThrowError({name:"TypeError",message:"EncodingError U+9007"});
expect(() => {ms932Encoder.encode("\u9008")}).toThrowError({name:"TypeError",message:"EncodingError U+9008"});
expect(() => {ms932Encoder.encode("\u9009")}).toThrowError({name:"TypeError",message:"EncodingError U+9009"});
expect(() => {ms932Encoder.encode("\u900A")}).toThrowError({name:"TypeError",message:"EncodingError U+900A"});
expect([...ms932Encoder.encode("逋")].join(",")).toBe("231,153"); // U+900B
expect(() => {ms932Encoder.encode("\u900C")}).toThrowError({name:"TypeError",message:"EncodingError U+900C"});
expect([...ms932Encoder.encode("逍逎透逐逑")].join(",")).toBe("231,150,231,163,147,167,146,128,231,147"); // U+900D
expect(() => {ms932Encoder.encode("\u9012")}).toThrowError({name:"TypeError",message:"EncodingError U+9012"});
expect([...ms932Encoder.encode("逓途逕逖逗")].join(",")).toBe("146,252,147,114,231,148,231,152,144,128"); // U+9013
expect(() => {ms932Encoder.encode("\u9018")}).toThrowError({name:"TypeError",message:"EncodingError U+9018"});
expect([...ms932Encoder.encode("這通")].join(",")).toBe("148,135,146,202"); // U+9019
expect(() => {ms932Encoder.encode("\u901B")}).toThrowError({name:"TypeError",message:"EncodingError U+901B"});
expect(() => {ms932Encoder.encode("\u901C")}).toThrowError({name:"TypeError",message:"EncodingError U+901C"});
expect([...ms932Encoder.encode("逝逞速造逡逢連")].join(",")).toBe("144,192,231,151,145,172,145,162,231,149,136,167,152,65"); // U+901D
expect(() => {ms932Encoder.encode("\u9024")}).toThrowError({name:"TypeError",message:"EncodingError U+9024"});
expect(() => {ms932Encoder.encode("\u9025")}).toThrowError({name:"TypeError",message:"EncodingError U+9025"});
expect(() => {ms932Encoder.encode("\u9026")}).toThrowError({name:"TypeError",message:"EncodingError U+9026"});
expect([...ms932Encoder.encode("逧")].join(",")).toBe("231,154"); // U+9027
expect(() => {ms932Encoder.encode("\u9028")}).toThrowError({name:"TypeError",message:"EncodingError U+9028"});
expect(() => {ms932Encoder.encode("\u9029")}).toThrowError({name:"TypeError",message:"EncodingError U+9029"});
expect(() => {ms932Encoder.encode("\u902A")}).toThrowError({name:"TypeError",message:"EncodingError U+902A"});
expect(() => {ms932Encoder.encode("\u902B")}).toThrowError({name:"TypeError",message:"EncodingError U+902B"});
expect(() => {ms932Encoder.encode("\u902C")}).toThrowError({name:"TypeError",message:"EncodingError U+902C"});
expect(() => {ms932Encoder.encode("\u902D")}).toThrowError({name:"TypeError",message:"EncodingError U+902D"});
expect([...ms932Encoder.encode("逮")].join(",")).toBe("145,223"); // U+902E
expect(() => {ms932Encoder.encode("\u902F")}).toThrowError({name:"TypeError",message:"EncodingError U+902F"});
expect(() => {ms932Encoder.encode("\u9030")}).toThrowError({name:"TypeError",message:"EncodingError U+9030"});
expect([...ms932Encoder.encode("週進")].join(",")).toBe("143,84,144,105"); // U+9031
expect(() => {ms932Encoder.encode("\u9033")}).toThrowError({name:"TypeError",message:"EncodingError U+9033"});
expect(() => {ms932Encoder.encode("\u9034")}).toThrowError({name:"TypeError",message:"EncodingError U+9034"});
expect([...ms932Encoder.encode("逵逶")].join(",")).toBe("231,156,231,155"); // U+9035
expect(() => {ms932Encoder.encode("\u9037")}).toThrowError({name:"TypeError",message:"EncodingError U+9037"});
expect([...ms932Encoder.encode("逸逹")].join(",")).toBe("136,237,231,157"); // U+9038
expect(() => {ms932Encoder.encode("\u903A")}).toThrowError({name:"TypeError",message:"EncodingError U+903A"});
expect(() => {ms932Encoder.encode("\u903B")}).toThrowError({name:"TypeError",message:"EncodingError U+903B"});
expect([...ms932Encoder.encode("逼")].join(",")).toBe("149,78"); // U+903C
expect(() => {ms932Encoder.encode("\u903D")}).toThrowError({name:"TypeError",message:"EncodingError U+903D"});
expect([...ms932Encoder.encode("逾")].join(",")).toBe("231,165"); // U+903E
expect(() => {ms932Encoder.encode("\u903F")}).toThrowError({name:"TypeError",message:"EncodingError U+903F"});
expect(() => {ms932Encoder.encode("\u9040")}).toThrowError({name:"TypeError",message:"EncodingError U+9040"});
expect([...ms932Encoder.encode("遁遂")].join(",")).toBe("147,217,144,139"); // U+9041
expect(() => {ms932Encoder.encode("\u9043")}).toThrowError({name:"TypeError",message:"EncodingError U+9043"});
expect(() => {ms932Encoder.encode("\u9044")}).toThrowError({name:"TypeError",message:"EncodingError U+9044"});
expect([...ms932Encoder.encode("遅")].join(",")).toBe("146,120"); // U+9045
expect(() => {ms932Encoder.encode("\u9046")}).toThrowError({name:"TypeError",message:"EncodingError U+9046"});
expect([...ms932Encoder.encode("遇")].join(",")).toBe("139,246"); // U+9047
expect(() => {ms932Encoder.encode("\u9048")}).toThrowError({name:"TypeError",message:"EncodingError U+9048"});
expect([...ms932Encoder.encode("遉遊運")].join(",")).toBe("231,164,151,86,137,94"); // U+9049
expect(() => {ms932Encoder.encode("\u904C")}).toThrowError({name:"TypeError",message:"EncodingError U+904C"});
expect([...ms932Encoder.encode("遍過遏遐遑遒道達違遖")].join(",")).toBe("149,213,137,223,231,159,231,160,231,161,231,162,147,185,146,66,136,225,231,166"); // U+904D
expect(() => {ms932Encoder.encode("\u9057")}).toThrowError({name:"TypeError",message:"EncodingError U+9057"});
expect([...ms932Encoder.encode("遘遙")].join(",")).toBe("231,167,234,161"); // U+9058
expect(() => {ms932Encoder.encode("\u905A")}).toThrowError({name:"TypeError",message:"EncodingError U+905A"});
expect(() => {ms932Encoder.encode("\u905B")}).toThrowError({name:"TypeError",message:"EncodingError U+905B"});
expect([...ms932Encoder.encode("遜")].join(",")).toBe("145,187"); // U+905C
expect(() => {ms932Encoder.encode("\u905D")}).toThrowError({name:"TypeError",message:"EncodingError U+905D"});
expect([...ms932Encoder.encode("遞")].join(",")).toBe("231,168"); // U+905E
expect(() => {ms932Encoder.encode("\u905F")}).toThrowError({name:"TypeError",message:"EncodingError U+905F"});
expect([...ms932Encoder.encode("遠遡")].join(",")).toBe("137,147,145,107"); // U+9060
expect(() => {ms932Encoder.encode("\u9062")}).toThrowError({name:"TypeError",message:"EncodingError U+9062"});
expect([...ms932Encoder.encode("遣")].join(",")).toBe("140,173"); // U+9063
expect(() => {ms932Encoder.encode("\u9064")}).toThrowError({name:"TypeError",message:"EncodingError U+9064"});
expect([...ms932Encoder.encode("遥")].join(",")).toBe("151,121"); // U+9065
expect(() => {ms932Encoder.encode("\u9066")}).toThrowError({name:"TypeError",message:"EncodingError U+9066"});
expect([...ms932Encoder.encode("遧遨適")].join(",")).toBe("251,181,231,169,147,75"); // U+9067
expect(() => {ms932Encoder.encode("\u906A")}).toThrowError({name:"TypeError",message:"EncodingError U+906A"});
expect(() => {ms932Encoder.encode("\u906B")}).toThrowError({name:"TypeError",message:"EncodingError U+906B"});
expect(() => {ms932Encoder.encode("\u906C")}).toThrowError({name:"TypeError",message:"EncodingError U+906C"});
expect([...ms932Encoder.encode("遭遮遯")].join(",")).toBe("145,152,142,213,231,170"); // U+906D
expect(() => {ms932Encoder.encode("\u9070")}).toThrowError({name:"TypeError",message:"EncodingError U+9070"});
expect(() => {ms932Encoder.encode("\u9071")}).toThrowError({name:"TypeError",message:"EncodingError U+9071"});
expect([...ms932Encoder.encode("遲")].join(",")).toBe("231,173"); // U+9072
expect(() => {ms932Encoder.encode("\u9073")}).toThrowError({name:"TypeError",message:"EncodingError U+9073"});
expect(() => {ms932Encoder.encode("\u9074")}).toThrowError({name:"TypeError",message:"EncodingError U+9074"});
expect([...ms932Encoder.encode("遵遶遷選")].join(",")).toBe("143,133,231,171,145,74,145,73"); // U+9075
expect(() => {ms932Encoder.encode("\u9079")}).toThrowError({name:"TypeError",message:"EncodingError U+9079"});
expect([...ms932Encoder.encode("遺")].join(",")).toBe("136,226"); // U+907A
expect(() => {ms932Encoder.encode("\u907B")}).toThrowError({name:"TypeError",message:"EncodingError U+907B"});
expect([...ms932Encoder.encode("遼遽")].join(",")).toBe("151,201,231,175"); // U+907C
expect(() => {ms932Encoder.encode("\u907E")}).toThrowError({name:"TypeError",message:"EncodingError U+907E"});
expect([...ms932Encoder.encode("避邀邁邂邃還")].join(",")).toBe("148,240,231,177,231,176,231,174,226,132,138,210"); // U+907F
expect(() => {ms932Encoder.encode("\u9085")}).toThrowError({name:"TypeError",message:"EncodingError U+9085"});
expect(() => {ms932Encoder.encode("\u9086")}).toThrowError({name:"TypeError",message:"EncodingError U+9086"});
expect([...ms932Encoder.encode("邇")].join(",")).toBe("231,142"); // U+9087
expect(() => {ms932Encoder.encode("\u9088")}).toThrowError({name:"TypeError",message:"EncodingError U+9088"});
expect([...ms932Encoder.encode("邉邊")].join(",")).toBe("231,179,231,178"); // U+9089
expect(() => {ms932Encoder.encode("\u908B")}).toThrowError({name:"TypeError",message:"EncodingError U+908B"});
expect(() => {ms932Encoder.encode("\u908C")}).toThrowError({name:"TypeError",message:"EncodingError U+908C"});
expect(() => {ms932Encoder.encode("\u908D")}).toThrowError({name:"TypeError",message:"EncodingError U+908D"});
expect(() => {ms932Encoder.encode("\u908E")}).toThrowError({name:"TypeError",message:"EncodingError U+908E"});
expect([...ms932Encoder.encode("邏")].join(",")).toBe("231,180"); // U+908F
expect(() => {ms932Encoder.encode("\u9090")}).toThrowError({name:"TypeError",message:"EncodingError U+9090"});
expect([...ms932Encoder.encode("邑")].join(",")).toBe("151,87"); // U+9091
expect(() => {ms932Encoder.encode("\u9092")}).toThrowError({name:"TypeError",message:"EncodingError U+9092"});
expect(() => {ms932Encoder.encode("\u9093")}).toThrowError({name:"TypeError",message:"EncodingError U+9093"});
expect(() => {ms932Encoder.encode("\u9094")}).toThrowError({name:"TypeError",message:"EncodingError U+9094"});
expect(() => {ms932Encoder.encode("\u9095")}).toThrowError({name:"TypeError",message:"EncodingError U+9095"});
expect(() => {ms932Encoder.encode("\u9096")}).toThrowError({name:"TypeError",message:"EncodingError U+9096"});
expect(() => {ms932Encoder.encode("\u9097")}).toThrowError({name:"TypeError",message:"EncodingError U+9097"});
expect(() => {ms932Encoder.encode("\u9098")}).toThrowError({name:"TypeError",message:"EncodingError U+9098"});
expect(() => {ms932Encoder.encode("\u9099")}).toThrowError({name:"TypeError",message:"EncodingError U+9099"});
expect(() => {ms932Encoder.encode("\u909A")}).toThrowError({name:"TypeError",message:"EncodingError U+909A"});
expect(() => {ms932Encoder.encode("\u909B")}).toThrowError({name:"TypeError",message:"EncodingError U+909B"});
expect(() => {ms932Encoder.encode("\u909C")}).toThrowError({name:"TypeError",message:"EncodingError U+909C"});
expect(() => {ms932Encoder.encode("\u909D")}).toThrowError({name:"TypeError",message:"EncodingError U+909D"});
expect(() => {ms932Encoder.encode("\u909E")}).toThrowError({name:"TypeError",message:"EncodingError U+909E"});
expect(() => {ms932Encoder.encode("\u909F")}).toThrowError({name:"TypeError",message:"EncodingError U+909F"});
expect(() => {ms932Encoder.encode("\u90A0")}).toThrowError({name:"TypeError",message:"EncodingError U+90A0"});
expect(() => {ms932Encoder.encode("\u90A1")}).toThrowError({name:"TypeError",message:"EncodingError U+90A1"});
expect(() => {ms932Encoder.encode("\u90A2")}).toThrowError({name:"TypeError",message:"EncodingError U+90A2"});
expect([...ms932Encoder.encode("那")].join(",")).toBe("147,223"); // U+90A3
expect(() => {ms932Encoder.encode("\u90A4")}).toThrowError({name:"TypeError",message:"EncodingError U+90A4"});
expect(() => {ms932Encoder.encode("\u90A5")}).toThrowError({name:"TypeError",message:"EncodingError U+90A5"});
expect([...ms932Encoder.encode("邦")].join(",")).toBe("150,77"); // U+90A6
expect(() => {ms932Encoder.encode("\u90A7")}).toThrowError({name:"TypeError",message:"EncodingError U+90A7"});
expect([...ms932Encoder.encode("邨")].join(",")).toBe("231,181"); // U+90A8
expect(() => {ms932Encoder.encode("\u90A9")}).toThrowError({name:"TypeError",message:"EncodingError U+90A9"});
expect([...ms932Encoder.encode("邪")].join(",")).toBe("142,215"); // U+90AA
expect(() => {ms932Encoder.encode("\u90AB")}).toThrowError({name:"TypeError",message:"EncodingError U+90AB"});
expect(() => {ms932Encoder.encode("\u90AC")}).toThrowError({name:"TypeError",message:"EncodingError U+90AC"});
expect(() => {ms932Encoder.encode("\u90AD")}).toThrowError({name:"TypeError",message:"EncodingError U+90AD"});
expect(() => {ms932Encoder.encode("\u90AE")}).toThrowError({name:"TypeError",message:"EncodingError U+90AE"});
expect([...ms932Encoder.encode("邯")].join(",")).toBe("231,182"); // U+90AF
expect(() => {ms932Encoder.encode("\u90B0")}).toThrowError({name:"TypeError",message:"EncodingError U+90B0"});
expect([...ms932Encoder.encode("邱")].join(",")).toBe("231,183"); // U+90B1
expect(() => {ms932Encoder.encode("\u90B2")}).toThrowError({name:"TypeError",message:"EncodingError U+90B2"});
expect(() => {ms932Encoder.encode("\u90B3")}).toThrowError({name:"TypeError",message:"EncodingError U+90B3"});
expect(() => {ms932Encoder.encode("\u90B4")}).toThrowError({name:"TypeError",message:"EncodingError U+90B4"});
expect([...ms932Encoder.encode("邵")].join(",")).toBe("231,184"); // U+90B5
expect(() => {ms932Encoder.encode("\u90B6")}).toThrowError({name:"TypeError",message:"EncodingError U+90B6"});
expect(() => {ms932Encoder.encode("\u90B7")}).toThrowError({name:"TypeError",message:"EncodingError U+90B7"});
expect([...ms932Encoder.encode("邸")].join(",")).toBe("147,64"); // U+90B8
expect(() => {ms932Encoder.encode("\u90B9")}).toThrowError({name:"TypeError",message:"EncodingError U+90B9"});
expect(() => {ms932Encoder.encode("\u90BA")}).toThrowError({name:"TypeError",message:"EncodingError U+90BA"});
expect(() => {ms932Encoder.encode("\u90BB")}).toThrowError({name:"TypeError",message:"EncodingError U+90BB"});
expect(() => {ms932Encoder.encode("\u90BC")}).toThrowError({name:"TypeError",message:"EncodingError U+90BC"});
expect(() => {ms932Encoder.encode("\u90BD")}).toThrowError({name:"TypeError",message:"EncodingError U+90BD"});
expect(() => {ms932Encoder.encode("\u90BE")}).toThrowError({name:"TypeError",message:"EncodingError U+90BE"});
expect(() => {ms932Encoder.encode("\u90BF")}).toThrowError({name:"TypeError",message:"EncodingError U+90BF"});
expect(() => {ms932Encoder.encode("\u90C0")}).toThrowError({name:"TypeError",message:"EncodingError U+90C0"});
expect([...ms932Encoder.encode("郁")].join(",")).toBe("136,232"); // U+90C1
expect(() => {ms932Encoder.encode("\u90C2")}).toThrowError({name:"TypeError",message:"EncodingError U+90C2"});
expect(() => {ms932Encoder.encode("\u90C3")}).toThrowError({name:"TypeError",message:"EncodingError U+90C3"});
expect(() => {ms932Encoder.encode("\u90C4")}).toThrowError({name:"TypeError",message:"EncodingError U+90C4"});
expect(() => {ms932Encoder.encode("\u90C5")}).toThrowError({name:"TypeError",message:"EncodingError U+90C5"});
expect(() => {ms932Encoder.encode("\u90C6")}).toThrowError({name:"TypeError",message:"EncodingError U+90C6"});
expect(() => {ms932Encoder.encode("\u90C7")}).toThrowError({name:"TypeError",message:"EncodingError U+90C7"});
expect(() => {ms932Encoder.encode("\u90C8")}).toThrowError({name:"TypeError",message:"EncodingError U+90C8"});
expect(() => {ms932Encoder.encode("\u90C9")}).toThrowError({name:"TypeError",message:"EncodingError U+90C9"});
expect([...ms932Encoder.encode("郊")].join(",")).toBe("141,120"); // U+90CA
expect(() => {ms932Encoder.encode("\u90CB")}).toThrowError({name:"TypeError",message:"EncodingError U+90CB"});
expect(() => {ms932Encoder.encode("\u90CC")}).toThrowError({name:"TypeError",message:"EncodingError U+90CC"});
expect(() => {ms932Encoder.encode("\u90CD")}).toThrowError({name:"TypeError",message:"EncodingError U+90CD"});
expect([...ms932Encoder.encode("郎")].join(",")).toBe("152,89"); // U+90CE
expect(() => {ms932Encoder.encode("\u90CF")}).toThrowError({name:"TypeError",message:"EncodingError U+90CF"});
expect(() => {ms932Encoder.encode("\u90D0")}).toThrowError({name:"TypeError",message:"EncodingError U+90D0"});
expect(() => {ms932Encoder.encode("\u90D1")}).toThrowError({name:"TypeError",message:"EncodingError U+90D1"});
expect(() => {ms932Encoder.encode("\u90D2")}).toThrowError({name:"TypeError",message:"EncodingError U+90D2"});
expect(() => {ms932Encoder.encode("\u90D3")}).toThrowError({name:"TypeError",message:"EncodingError U+90D3"});
expect(() => {ms932Encoder.encode("\u90D4")}).toThrowError({name:"TypeError",message:"EncodingError U+90D4"});
expect(() => {ms932Encoder.encode("\u90D5")}).toThrowError({name:"TypeError",message:"EncodingError U+90D5"});
expect(() => {ms932Encoder.encode("\u90D6")}).toThrowError({name:"TypeError",message:"EncodingError U+90D6"});
expect(() => {ms932Encoder.encode("\u90D7")}).toThrowError({name:"TypeError",message:"EncodingError U+90D7"});
expect(() => {ms932Encoder.encode("\u90D8")}).toThrowError({name:"TypeError",message:"EncodingError U+90D8"});
expect(() => {ms932Encoder.encode("\u90D9")}).toThrowError({name:"TypeError",message:"EncodingError U+90D9"});
expect(() => {ms932Encoder.encode("\u90DA")}).toThrowError({name:"TypeError",message:"EncodingError U+90DA"});
expect([...ms932Encoder.encode("郛")].join(",")).toBe("231,188"); // U+90DB
expect(() => {ms932Encoder.encode("\u90DC")}).toThrowError({name:"TypeError",message:"EncodingError U+90DC"});
expect(() => {ms932Encoder.encode("\u90DD")}).toThrowError({name:"TypeError",message:"EncodingError U+90DD"});
expect([...ms932Encoder.encode("郞")].join(",")).toBe("251,182"); // U+90DE
expect(() => {ms932Encoder.encode("\u90DF")}).toThrowError({name:"TypeError",message:"EncodingError U+90DF"});
expect(() => {ms932Encoder.encode("\u90E0")}).toThrowError({name:"TypeError",message:"EncodingError U+90E0"});
expect([...ms932Encoder.encode("郡郢")].join(",")).toBe("140,83,231,185"); // U+90E1
expect(() => {ms932Encoder.encode("\u90E3")}).toThrowError({name:"TypeError",message:"EncodingError U+90E3"});
expect([...ms932Encoder.encode("郤")].join(",")).toBe("231,186"); // U+90E4
expect(() => {ms932Encoder.encode("\u90E5")}).toThrowError({name:"TypeError",message:"EncodingError U+90E5"});
expect(() => {ms932Encoder.encode("\u90E6")}).toThrowError({name:"TypeError",message:"EncodingError U+90E6"});
expect(() => {ms932Encoder.encode("\u90E7")}).toThrowError({name:"TypeError",message:"EncodingError U+90E7"});
expect([...ms932Encoder.encode("部")].join(",")).toBe("149,148"); // U+90E8
expect(() => {ms932Encoder.encode("\u90E9")}).toThrowError({name:"TypeError",message:"EncodingError U+90E9"});
expect(() => {ms932Encoder.encode("\u90EA")}).toThrowError({name:"TypeError",message:"EncodingError U+90EA"});
expect(() => {ms932Encoder.encode("\u90EB")}).toThrowError({name:"TypeError",message:"EncodingError U+90EB"});
expect(() => {ms932Encoder.encode("\u90EC")}).toThrowError({name:"TypeError",message:"EncodingError U+90EC"});
expect([...ms932Encoder.encode("郭")].join(",")).toBe("138,115"); // U+90ED
expect(() => {ms932Encoder.encode("\u90EE")}).toThrowError({name:"TypeError",message:"EncodingError U+90EE"});
expect(() => {ms932Encoder.encode("\u90EF")}).toThrowError({name:"TypeError",message:"EncodingError U+90EF"});
expect(() => {ms932Encoder.encode("\u90F0")}).toThrowError({name:"TypeError",message:"EncodingError U+90F0"});
expect(() => {ms932Encoder.encode("\u90F1")}).toThrowError({name:"TypeError",message:"EncodingError U+90F1"});
expect(() => {ms932Encoder.encode("\u90F2")}).toThrowError({name:"TypeError",message:"EncodingError U+90F2"});
expect(() => {ms932Encoder.encode("\u90F3")}).toThrowError({name:"TypeError",message:"EncodingError U+90F3"});
expect(() => {ms932Encoder.encode("\u90F4")}).toThrowError({name:"TypeError",message:"EncodingError U+90F4"});
expect([...ms932Encoder.encode("郵")].join(",")).toBe("151,88"); // U+90F5
expect(() => {ms932Encoder.encode("\u90F6")}).toThrowError({name:"TypeError",message:"EncodingError U+90F6"});
expect([...ms932Encoder.encode("郷")].join(",")).toBe("139,189"); // U+90F7
expect(() => {ms932Encoder.encode("\u90F8")}).toThrowError({name:"TypeError",message:"EncodingError U+90F8"});
expect(() => {ms932Encoder.encode("\u90F9")}).toThrowError({name:"TypeError",message:"EncodingError U+90F9"});
expect(() => {ms932Encoder.encode("\u90FA")}).toThrowError({name:"TypeError",message:"EncodingError U+90FA"});
expect(() => {ms932Encoder.encode("\u90FB")}).toThrowError({name:"TypeError",message:"EncodingError U+90FB"});
expect(() => {ms932Encoder.encode("\u90FC")}).toThrowError({name:"TypeError",message:"EncodingError U+90FC"});
expect([...ms932Encoder.encode("都")].join(",")).toBe("147,115"); // U+90FD
expect(() => {ms932Encoder.encode("\u90FE")}).toThrowError({name:"TypeError",message:"EncodingError U+90FE"});
expect(() => {ms932Encoder.encode("\u90FF")}).toThrowError({name:"TypeError",message:"EncodingError U+90FF"});
expect(() => {ms932Encoder.encode("\u9100")}).toThrowError({name:"TypeError",message:"EncodingError U+9100"});
expect(() => {ms932Encoder.encode("\u9101")}).toThrowError({name:"TypeError",message:"EncodingError U+9101"});
expect([...ms932Encoder.encode("鄂")].join(",")).toBe("231,189"); // U+9102
expect(() => {ms932Encoder.encode("\u9103")}).toThrowError({name:"TypeError",message:"EncodingError U+9103"});
expect(() => {ms932Encoder.encode("\u9104")}).toThrowError({name:"TypeError",message:"EncodingError U+9104"});
expect(() => {ms932Encoder.encode("\u9105")}).toThrowError({name:"TypeError",message:"EncodingError U+9105"});
expect(() => {ms932Encoder.encode("\u9106")}).toThrowError({name:"TypeError",message:"EncodingError U+9106"});
expect(() => {ms932Encoder.encode("\u9107")}).toThrowError({name:"TypeError",message:"EncodingError U+9107"});
expect(() => {ms932Encoder.encode("\u9108")}).toThrowError({name:"TypeError",message:"EncodingError U+9108"});
expect(() => {ms932Encoder.encode("\u9109")}).toThrowError({name:"TypeError",message:"EncodingError U+9109"});
expect(() => {ms932Encoder.encode("\u910A")}).toThrowError({name:"TypeError",message:"EncodingError U+910A"});
expect(() => {ms932Encoder.encode("\u910B")}).toThrowError({name:"TypeError",message:"EncodingError U+910B"});
expect(() => {ms932Encoder.encode("\u910C")}).toThrowError({name:"TypeError",message:"EncodingError U+910C"});
expect(() => {ms932Encoder.encode("\u910D")}).toThrowError({name:"TypeError",message:"EncodingError U+910D"});
expect(() => {ms932Encoder.encode("\u910E")}).toThrowError({name:"TypeError",message:"EncodingError U+910E"});
expect(() => {ms932Encoder.encode("\u910F")}).toThrowError({name:"TypeError",message:"EncodingError U+910F"});
expect(() => {ms932Encoder.encode("\u9110")}).toThrowError({name:"TypeError",message:"EncodingError U+9110"});
expect(() => {ms932Encoder.encode("\u9111")}).toThrowError({name:"TypeError",message:"EncodingError U+9111"});
expect([...ms932Encoder.encode("鄒")].join(",")).toBe("231,190"); // U+9112
expect(() => {ms932Encoder.encode("\u9113")}).toThrowError({name:"TypeError",message:"EncodingError U+9113"});
expect(() => {ms932Encoder.encode("\u9114")}).toThrowError({name:"TypeError",message:"EncodingError U+9114"});
expect([...ms932Encoder.encode("鄕")].join(",")).toBe("251,184"); // U+9115
expect(() => {ms932Encoder.encode("\u9116")}).toThrowError({name:"TypeError",message:"EncodingError U+9116"});
expect(() => {ms932Encoder.encode("\u9117")}).toThrowError({name:"TypeError",message:"EncodingError U+9117"});
expect(() => {ms932Encoder.encode("\u9118")}).toThrowError({name:"TypeError",message:"EncodingError U+9118"});
expect([...ms932Encoder.encode("鄙")].join(",")).toBe("231,191"); // U+9119
expect(() => {ms932Encoder.encode("\u911A")}).toThrowError({name:"TypeError",message:"EncodingError U+911A"});
expect(() => {ms932Encoder.encode("\u911B")}).toThrowError({name:"TypeError",message:"EncodingError U+911B"});
expect(() => {ms932Encoder.encode("\u911C")}).toThrowError({name:"TypeError",message:"EncodingError U+911C"});
expect(() => {ms932Encoder.encode("\u911D")}).toThrowError({name:"TypeError",message:"EncodingError U+911D"});
expect(() => {ms932Encoder.encode("\u911E")}).toThrowError({name:"TypeError",message:"EncodingError U+911E"});
expect(() => {ms932Encoder.encode("\u911F")}).toThrowError({name:"TypeError",message:"EncodingError U+911F"});
expect(() => {ms932Encoder.encode("\u9120")}).toThrowError({name:"TypeError",message:"EncodingError U+9120"});
expect(() => {ms932Encoder.encode("\u9121")}).toThrowError({name:"TypeError",message:"EncodingError U+9121"});
expect(() => {ms932Encoder.encode("\u9122")}).toThrowError({name:"TypeError",message:"EncodingError U+9122"});
expect(() => {ms932Encoder.encode("\u9123")}).toThrowError({name:"TypeError",message:"EncodingError U+9123"});
expect(() => {ms932Encoder.encode("\u9124")}).toThrowError({name:"TypeError",message:"EncodingError U+9124"});
expect(() => {ms932Encoder.encode("\u9125")}).toThrowError({name:"TypeError",message:"EncodingError U+9125"});
expect(() => {ms932Encoder.encode("\u9126")}).toThrowError({name:"TypeError",message:"EncodingError U+9126"});
expect([...ms932Encoder.encode("鄧")].join(",")).toBe("251,185"); // U+9127
expect(() => {ms932Encoder.encode("\u9128")}).toThrowError({name:"TypeError",message:"EncodingError U+9128"});
expect(() => {ms932Encoder.encode("\u9129")}).toThrowError({name:"TypeError",message:"EncodingError U+9129"});
expect(() => {ms932Encoder.encode("\u912A")}).toThrowError({name:"TypeError",message:"EncodingError U+912A"});
expect(() => {ms932Encoder.encode("\u912B")}).toThrowError({name:"TypeError",message:"EncodingError U+912B"});
expect(() => {ms932Encoder.encode("\u912C")}).toThrowError({name:"TypeError",message:"EncodingError U+912C"});
expect([...ms932Encoder.encode("鄭")].join(",")).toBe("147,65"); // U+912D
expect(() => {ms932Encoder.encode("\u912E")}).toThrowError({name:"TypeError",message:"EncodingError U+912E"});
expect(() => {ms932Encoder.encode("\u912F")}).toThrowError({name:"TypeError",message:"EncodingError U+912F"});
expect([...ms932Encoder.encode("鄰")].join(",")).toBe("231,193"); // U+9130
expect(() => {ms932Encoder.encode("\u9131")}).toThrowError({name:"TypeError",message:"EncodingError U+9131"});
expect([...ms932Encoder.encode("鄲")].join(",")).toBe("231,192"); // U+9132
expect(() => {ms932Encoder.encode("\u9133")}).toThrowError({name:"TypeError",message:"EncodingError U+9133"});
expect(() => {ms932Encoder.encode("\u9134")}).toThrowError({name:"TypeError",message:"EncodingError U+9134"});
expect(() => {ms932Encoder.encode("\u9135")}).toThrowError({name:"TypeError",message:"EncodingError U+9135"});
expect(() => {ms932Encoder.encode("\u9136")}).toThrowError({name:"TypeError",message:"EncodingError U+9136"});
expect(() => {ms932Encoder.encode("\u9137")}).toThrowError({name:"TypeError",message:"EncodingError U+9137"});
expect(() => {ms932Encoder.encode("\u9138")}).toThrowError({name:"TypeError",message:"EncodingError U+9138"});
expect(() => {ms932Encoder.encode("\u9139")}).toThrowError({name:"TypeError",message:"EncodingError U+9139"});
expect(() => {ms932Encoder.encode("\u913A")}).toThrowError({name:"TypeError",message:"EncodingError U+913A"});
expect(() => {ms932Encoder.encode("\u913B")}).toThrowError({name:"TypeError",message:"EncodingError U+913B"});
expect(() => {ms932Encoder.encode("\u913C")}).toThrowError({name:"TypeError",message:"EncodingError U+913C"});
expect(() => {ms932Encoder.encode("\u913D")}).toThrowError({name:"TypeError",message:"EncodingError U+913D"});
expect(() => {ms932Encoder.encode("\u913E")}).toThrowError({name:"TypeError",message:"EncodingError U+913E"});
expect(() => {ms932Encoder.encode("\u913F")}).toThrowError({name:"TypeError",message:"EncodingError U+913F"});
expect(() => {ms932Encoder.encode("\u9140")}).toThrowError({name:"TypeError",message:"EncodingError U+9140"});
expect(() => {ms932Encoder.encode("\u9141")}).toThrowError({name:"TypeError",message:"EncodingError U+9141"});
expect(() => {ms932Encoder.encode("\u9142")}).toThrowError({name:"TypeError",message:"EncodingError U+9142"});
expect(() => {ms932Encoder.encode("\u9143")}).toThrowError({name:"TypeError",message:"EncodingError U+9143"});
expect(() => {ms932Encoder.encode("\u9144")}).toThrowError({name:"TypeError",message:"EncodingError U+9144"});
expect(() => {ms932Encoder.encode("\u9145")}).toThrowError({name:"TypeError",message:"EncodingError U+9145"});
expect(() => {ms932Encoder.encode("\u9146")}).toThrowError({name:"TypeError",message:"EncodingError U+9146"});
expect(() => {ms932Encoder.encode("\u9147")}).toThrowError({name:"TypeError",message:"EncodingError U+9147"});
expect(() => {ms932Encoder.encode("\u9148")}).toThrowError({name:"TypeError",message:"EncodingError U+9148"});
expect([...ms932Encoder.encode("酉酊酋酌配酎")].join(",")).toBe("147,209,231,194,143,85,142,222,148,122,146,145"); // U+9149
expect(() => {ms932Encoder.encode("\u914F")}).toThrowError({name:"TypeError",message:"EncodingError U+914F"});
expect(() => {ms932Encoder.encode("\u9150")}).toThrowError({name:"TypeError",message:"EncodingError U+9150"});
expect(() => {ms932Encoder.encode("\u9151")}).toThrowError({name:"TypeError",message:"EncodingError U+9151"});
expect([...ms932Encoder.encode("酒")].join(",")).toBe("142,240"); // U+9152
expect(() => {ms932Encoder.encode("\u9153")}).toThrowError({name:"TypeError",message:"EncodingError U+9153"});
expect([...ms932Encoder.encode("酔")].join(",")).toBe("144,140"); // U+9154
expect(() => {ms932Encoder.encode("\u9155")}).toThrowError({name:"TypeError",message:"EncodingError U+9155"});
expect([...ms932Encoder.encode("酖")].join(",")).toBe("231,195"); // U+9156
expect(() => {ms932Encoder.encode("\u9157")}).toThrowError({name:"TypeError",message:"EncodingError U+9157"});
expect([...ms932Encoder.encode("酘")].join(",")).toBe("231,196"); // U+9158
expect(() => {ms932Encoder.encode("\u9159")}).toThrowError({name:"TypeError",message:"EncodingError U+9159"});
expect(() => {ms932Encoder.encode("\u915A")}).toThrowError({name:"TypeError",message:"EncodingError U+915A"});
expect(() => {ms932Encoder.encode("\u915B")}).toThrowError({name:"TypeError",message:"EncodingError U+915B"});
expect(() => {ms932Encoder.encode("\u915C")}).toThrowError({name:"TypeError",message:"EncodingError U+915C"});
expect(() => {ms932Encoder.encode("\u915D")}).toThrowError({name:"TypeError",message:"EncodingError U+915D"});
expect(() => {ms932Encoder.encode("\u915E")}).toThrowError({name:"TypeError",message:"EncodingError U+915E"});
expect(() => {ms932Encoder.encode("\u915F")}).toThrowError({name:"TypeError",message:"EncodingError U+915F"});
expect(() => {ms932Encoder.encode("\u9160")}).toThrowError({name:"TypeError",message:"EncodingError U+9160"});
expect(() => {ms932Encoder.encode("\u9161")}).toThrowError({name:"TypeError",message:"EncodingError U+9161"});
expect([...ms932Encoder.encode("酢酣")].join(",")).toBe("144,124,231,197"); // U+9162
expect(() => {ms932Encoder.encode("\u9164")}).toThrowError({name:"TypeError",message:"EncodingError U+9164"});
expect([...ms932Encoder.encode("酥")].join(",")).toBe("231,198"); // U+9165
expect(() => {ms932Encoder.encode("\u9166")}).toThrowError({name:"TypeError",message:"EncodingError U+9166"});
expect(() => {ms932Encoder.encode("\u9167")}).toThrowError({name:"TypeError",message:"EncodingError U+9167"});
expect(() => {ms932Encoder.encode("\u9168")}).toThrowError({name:"TypeError",message:"EncodingError U+9168"});
expect([...ms932Encoder.encode("酩酪")].join(",")).toBe("231,199,151,143"); // U+9169
expect(() => {ms932Encoder.encode("\u916B")}).toThrowError({name:"TypeError",message:"EncodingError U+916B"});
expect([...ms932Encoder.encode("酬")].join(",")).toBe("143,86"); // U+916C
expect(() => {ms932Encoder.encode("\u916D")}).toThrowError({name:"TypeError",message:"EncodingError U+916D"});
expect(() => {ms932Encoder.encode("\u916E")}).toThrowError({name:"TypeError",message:"EncodingError U+916E"});
expect(() => {ms932Encoder.encode("\u916F")}).toThrowError({name:"TypeError",message:"EncodingError U+916F"});
expect(() => {ms932Encoder.encode("\u9170")}).toThrowError({name:"TypeError",message:"EncodingError U+9170"});
expect(() => {ms932Encoder.encode("\u9171")}).toThrowError({name:"TypeError",message:"EncodingError U+9171"});
expect([...ms932Encoder.encode("酲酳")].join(",")).toBe("231,201,231,200"); // U+9172
expect(() => {ms932Encoder.encode("\u9174")}).toThrowError({name:"TypeError",message:"EncodingError U+9174"});
expect([...ms932Encoder.encode("酵")].join(",")).toBe("141,121"); // U+9175
expect(() => {ms932Encoder.encode("\u9176")}).toThrowError({name:"TypeError",message:"EncodingError U+9176"});
expect([...ms932Encoder.encode("酷酸")].join(",")).toBe("141,147,142,95"); // U+9177
expect(() => {ms932Encoder.encode("\u9179")}).toThrowError({name:"TypeError",message:"EncodingError U+9179"});
expect(() => {ms932Encoder.encode("\u917A")}).toThrowError({name:"TypeError",message:"EncodingError U+917A"});
expect(() => {ms932Encoder.encode("\u917B")}).toThrowError({name:"TypeError",message:"EncodingError U+917B"});
expect(() => {ms932Encoder.encode("\u917C")}).toThrowError({name:"TypeError",message:"EncodingError U+917C"});
expect(() => {ms932Encoder.encode("\u917D")}).toThrowError({name:"TypeError",message:"EncodingError U+917D"});
expect(() => {ms932Encoder.encode("\u917E")}).toThrowError({name:"TypeError",message:"EncodingError U+917E"});
expect(() => {ms932Encoder.encode("\u917F")}).toThrowError({name:"TypeError",message:"EncodingError U+917F"});
expect(() => {ms932Encoder.encode("\u9180")}).toThrowError({name:"TypeError",message:"EncodingError U+9180"});
expect(() => {ms932Encoder.encode("\u9181")}).toThrowError({name:"TypeError",message:"EncodingError U+9181"});
expect([...ms932Encoder.encode("醂")].join(",")).toBe("231,204"); // U+9182
expect(() => {ms932Encoder.encode("\u9183")}).toThrowError({name:"TypeError",message:"EncodingError U+9183"});
expect(() => {ms932Encoder.encode("\u9184")}).toThrowError({name:"TypeError",message:"EncodingError U+9184"});
expect(() => {ms932Encoder.encode("\u9185")}).toThrowError({name:"TypeError",message:"EncodingError U+9185"});
expect(() => {ms932Encoder.encode("\u9186")}).toThrowError({name:"TypeError",message:"EncodingError U+9186"});
expect([...ms932Encoder.encode("醇")].join(",")).toBe("143,134"); // U+9187
expect(() => {ms932Encoder.encode("\u9188")}).toThrowError({name:"TypeError",message:"EncodingError U+9188"});
expect([...ms932Encoder.encode("醉")].join(",")).toBe("231,203"); // U+9189
expect(() => {ms932Encoder.encode("\u918A")}).toThrowError({name:"TypeError",message:"EncodingError U+918A"});
expect([...ms932Encoder.encode("醋")].join(",")).toBe("231,202"); // U+918B
expect(() => {ms932Encoder.encode("\u918C")}).toThrowError({name:"TypeError",message:"EncodingError U+918C"});
expect([...ms932Encoder.encode("醍")].join(",")).toBe("145,231"); // U+918D
expect(() => {ms932Encoder.encode("\u918E")}).toThrowError({name:"TypeError",message:"EncodingError U+918E"});
expect(() => {ms932Encoder.encode("\u918F")}).toThrowError({name:"TypeError",message:"EncodingError U+918F"});
expect([...ms932Encoder.encode("醐")].join(",")).toBe("140,237"); // U+9190
expect(() => {ms932Encoder.encode("\u9191")}).toThrowError({name:"TypeError",message:"EncodingError U+9191"});
expect([...ms932Encoder.encode("醒")].join(",")).toBe("144,193"); // U+9192
expect(() => {ms932Encoder.encode("\u9193")}).toThrowError({name:"TypeError",message:"EncodingError U+9193"});
expect(() => {ms932Encoder.encode("\u9194")}).toThrowError({name:"TypeError",message:"EncodingError U+9194"});
expect(() => {ms932Encoder.encode("\u9195")}).toThrowError({name:"TypeError",message:"EncodingError U+9195"});
expect(() => {ms932Encoder.encode("\u9196")}).toThrowError({name:"TypeError",message:"EncodingError U+9196"});
expect([...ms932Encoder.encode("醗")].join(",")).toBe("148,174"); // U+9197
expect(() => {ms932Encoder.encode("\u9198")}).toThrowError({name:"TypeError",message:"EncodingError U+9198"});
expect(() => {ms932Encoder.encode("\u9199")}).toThrowError({name:"TypeError",message:"EncodingError U+9199"});
expect(() => {ms932Encoder.encode("\u919A")}).toThrowError({name:"TypeError",message:"EncodingError U+919A"});
expect(() => {ms932Encoder.encode("\u919B")}).toThrowError({name:"TypeError",message:"EncodingError U+919B"});
expect([...ms932Encoder.encode("醜")].join(",")).toBe("143,88"); // U+919C
expect(() => {ms932Encoder.encode("\u919D")}).toThrowError({name:"TypeError",message:"EncodingError U+919D"});
expect(() => {ms932Encoder.encode("\u919E")}).toThrowError({name:"TypeError",message:"EncodingError U+919E"});
expect(() => {ms932Encoder.encode("\u919F")}).toThrowError({name:"TypeError",message:"EncodingError U+919F"});
expect(() => {ms932Encoder.encode("\u91A0")}).toThrowError({name:"TypeError",message:"EncodingError U+91A0"});
expect(() => {ms932Encoder.encode("\u91A1")}).toThrowError({name:"TypeError",message:"EncodingError U+91A1"});
expect([...ms932Encoder.encode("醢")].join(",")).toBe("231,205"); // U+91A2
expect(() => {ms932Encoder.encode("\u91A3")}).toThrowError({name:"TypeError",message:"EncodingError U+91A3"});
expect([...ms932Encoder.encode("醤")].join(",")).toBe("143,221"); // U+91A4
expect(() => {ms932Encoder.encode("\u91A5")}).toThrowError({name:"TypeError",message:"EncodingError U+91A5"});
expect(() => {ms932Encoder.encode("\u91A6")}).toThrowError({name:"TypeError",message:"EncodingError U+91A6"});
expect(() => {ms932Encoder.encode("\u91A7")}).toThrowError({name:"TypeError",message:"EncodingError U+91A7"});
expect(() => {ms932Encoder.encode("\u91A8")}).toThrowError({name:"TypeError",message:"EncodingError U+91A8"});
expect(() => {ms932Encoder.encode("\u91A9")}).toThrowError({name:"TypeError",message:"EncodingError U+91A9"});
expect([...ms932Encoder.encode("醪醫")].join(",")).toBe("231,208,231,206"); // U+91AA
expect(() => {ms932Encoder.encode("\u91AC")}).toThrowError({name:"TypeError",message:"EncodingError U+91AC"});
expect(() => {ms932Encoder.encode("\u91AD")}).toThrowError({name:"TypeError",message:"EncodingError U+91AD"});
expect(() => {ms932Encoder.encode("\u91AE")}).toThrowError({name:"TypeError",message:"EncodingError U+91AE"});
expect([...ms932Encoder.encode("醯")].join(",")).toBe("231,207"); // U+91AF
expect(() => {ms932Encoder.encode("\u91B0")}).toThrowError({name:"TypeError",message:"EncodingError U+91B0"});
expect(() => {ms932Encoder.encode("\u91B1")}).toThrowError({name:"TypeError",message:"EncodingError U+91B1"});
expect(() => {ms932Encoder.encode("\u91B2")}).toThrowError({name:"TypeError",message:"EncodingError U+91B2"});
expect(() => {ms932Encoder.encode("\u91B3")}).toThrowError({name:"TypeError",message:"EncodingError U+91B3"});
expect([...ms932Encoder.encode("醴醵")].join(",")).toBe("231,210,231,209"); // U+91B4
expect(() => {ms932Encoder.encode("\u91B6")}).toThrowError({name:"TypeError",message:"EncodingError U+91B6"});
expect(() => {ms932Encoder.encode("\u91B7")}).toThrowError({name:"TypeError",message:"EncodingError U+91B7"});
expect([...ms932Encoder.encode("醸")].join(",")).toBe("143,248"); // U+91B8
expect(() => {ms932Encoder.encode("\u91B9")}).toThrowError({name:"TypeError",message:"EncodingError U+91B9"});
expect([...ms932Encoder.encode("醺")].join(",")).toBe("231,211"); // U+91BA
expect(() => {ms932Encoder.encode("\u91BB")}).toThrowError({name:"TypeError",message:"EncodingError U+91BB"});
expect(() => {ms932Encoder.encode("\u91BC")}).toThrowError({name:"TypeError",message:"EncodingError U+91BC"});
expect(() => {ms932Encoder.encode("\u91BD")}).toThrowError({name:"TypeError",message:"EncodingError U+91BD"});
expect(() => {ms932Encoder.encode("\u91BE")}).toThrowError({name:"TypeError",message:"EncodingError U+91BE"});
expect(() => {ms932Encoder.encode("\u91BF")}).toThrowError({name:"TypeError",message:"EncodingError U+91BF"});
expect([...ms932Encoder.encode("釀釁")].join(",")).toBe("231,212,231,213"); // U+91C0
expect(() => {ms932Encoder.encode("\u91C2")}).toThrowError({name:"TypeError",message:"EncodingError U+91C2"});
expect(() => {ms932Encoder.encode("\u91C3")}).toThrowError({name:"TypeError",message:"EncodingError U+91C3"});
expect(() => {ms932Encoder.encode("\u91C4")}).toThrowError({name:"TypeError",message:"EncodingError U+91C4"});
expect(() => {ms932Encoder.encode("\u91C5")}).toThrowError({name:"TypeError",message:"EncodingError U+91C5"});
expect([...ms932Encoder.encode("釆采釈釉")].join(",")).toBe("148,206,141,209,142,223,231,214"); // U+91C6
expect(() => {ms932Encoder.encode("\u91CA")}).toThrowError({name:"TypeError",message:"EncodingError U+91CA"});
expect([...ms932Encoder.encode("釋里重野量釐金")].join(",")).toBe("231,215,151,162,143,100,150,236,151,202,231,216,139,224"); // U+91CB
expect(() => {ms932Encoder.encode("\u91D2")}).toThrowError({name:"TypeError",message:"EncodingError U+91D2"});
expect(() => {ms932Encoder.encode("\u91D3")}).toThrowError({name:"TypeError",message:"EncodingError U+91D3"});
expect(() => {ms932Encoder.encode("\u91D4")}).toThrowError({name:"TypeError",message:"EncodingError U+91D4"});
expect(() => {ms932Encoder.encode("\u91D5")}).toThrowError({name:"TypeError",message:"EncodingError U+91D5"});
expect([...ms932Encoder.encode("釖釗釘")].join(",")).toBe("231,217,251,187,147,66"); // U+91D6
expect(() => {ms932Encoder.encode("\u91D9")}).toThrowError({name:"TypeError",message:"EncodingError U+91D9"});
expect([...ms932Encoder.encode("釚釛釜針釞釟")].join(",")).toBe("251,186,231,220,138,152,144,106,251,188,231,218"); // U+91DA
expect(() => {ms932Encoder.encode("\u91E0")}).toThrowError({name:"TypeError",message:"EncodingError U+91E0"});
expect([...ms932Encoder.encode("釡")].join(",")).toBe("231,219"); // U+91E1
expect(() => {ms932Encoder.encode("\u91E2")}).toThrowError({name:"TypeError",message:"EncodingError U+91E2"});
expect([...ms932Encoder.encode("釣釤釥釦釧")].join(",")).toBe("146,222,251,191,251,192,150,116,139,250"); // U+91E3
expect(() => {ms932Encoder.encode("\u91E8")}).toThrowError({name:"TypeError",message:"EncodingError U+91E8"});
expect(() => {ms932Encoder.encode("\u91E9")}).toThrowError({name:"TypeError",message:"EncodingError U+91E9"});
expect(() => {ms932Encoder.encode("\u91EA")}).toThrowError({name:"TypeError",message:"EncodingError U+91EA"});
expect(() => {ms932Encoder.encode("\u91EB")}).toThrowError({name:"TypeError",message:"EncodingError U+91EB"});
expect(() => {ms932Encoder.encode("\u91EC")}).toThrowError({name:"TypeError",message:"EncodingError U+91EC"});
expect([...ms932Encoder.encode("釭釮")].join(",")).toBe("251,189,251,190"); // U+91ED
expect(() => {ms932Encoder.encode("\u91EF")}).toThrowError({name:"TypeError",message:"EncodingError U+91EF"});
expect(() => {ms932Encoder.encode("\u91F0")}).toThrowError({name:"TypeError",message:"EncodingError U+91F0"});
expect(() => {ms932Encoder.encode("\u91F1")}).toThrowError({name:"TypeError",message:"EncodingError U+91F1"});
expect(() => {ms932Encoder.encode("\u91F2")}).toThrowError({name:"TypeError",message:"EncodingError U+91F2"});
expect(() => {ms932Encoder.encode("\u91F3")}).toThrowError({name:"TypeError",message:"EncodingError U+91F3"});
expect(() => {ms932Encoder.encode("\u91F4")}).toThrowError({name:"TypeError",message:"EncodingError U+91F4"});
expect([...ms932Encoder.encode("釵釶")].join(",")).toBe("231,222,231,223"); // U+91F5
expect(() => {ms932Encoder.encode("\u91F7")}).toThrowError({name:"TypeError",message:"EncodingError U+91F7"});
expect(() => {ms932Encoder.encode("\u91F8")}).toThrowError({name:"TypeError",message:"EncodingError U+91F8"});
expect(() => {ms932Encoder.encode("\u91F9")}).toThrowError({name:"TypeError",message:"EncodingError U+91F9"});
expect(() => {ms932Encoder.encode("\u91FA")}).toThrowError({name:"TypeError",message:"EncodingError U+91FA"});
expect(() => {ms932Encoder.encode("\u91FB")}).toThrowError({name:"TypeError",message:"EncodingError U+91FB"});
expect([...ms932Encoder.encode("釼")].join(",")).toBe("231,221"); // U+91FC
expect(() => {ms932Encoder.encode("\u91FD")}).toThrowError({name:"TypeError",message:"EncodingError U+91FD"});
expect(() => {ms932Encoder.encode("\u91FE")}).toThrowError({name:"TypeError",message:"EncodingError U+91FE"});
expect([...ms932Encoder.encode("釿")].join(",")).toBe("231,225"); // U+91FF
expect(() => {ms932Encoder.encode("\u9200")}).toThrowError({name:"TypeError",message:"EncodingError U+9200"});
expect(() => {ms932Encoder.encode("\u9201")}).toThrowError({name:"TypeError",message:"EncodingError U+9201"});
expect(() => {ms932Encoder.encode("\u9202")}).toThrowError({name:"TypeError",message:"EncodingError U+9202"});
expect(() => {ms932Encoder.encode("\u9203")}).toThrowError({name:"TypeError",message:"EncodingError U+9203"});
expect(() => {ms932Encoder.encode("\u9204")}).toThrowError({name:"TypeError",message:"EncodingError U+9204"});
expect(() => {ms932Encoder.encode("\u9205")}).toThrowError({name:"TypeError",message:"EncodingError U+9205"});
expect([...ms932Encoder.encode("鈆")].join(",")).toBe("251,193"); // U+9206
expect(() => {ms932Encoder.encode("\u9207")}).toThrowError({name:"TypeError",message:"EncodingError U+9207"});
expect(() => {ms932Encoder.encode("\u9208")}).toThrowError({name:"TypeError",message:"EncodingError U+9208"});
expect(() => {ms932Encoder.encode("\u9209")}).toThrowError({name:"TypeError",message:"EncodingError U+9209"});
expect([...ms932Encoder.encode("鈊")].join(",")).toBe("251,195"); // U+920A
expect(() => {ms932Encoder.encode("\u920B")}).toThrowError({name:"TypeError",message:"EncodingError U+920B"});
expect(() => {ms932Encoder.encode("\u920C")}).toThrowError({name:"TypeError",message:"EncodingError U+920C"});
expect([...ms932Encoder.encode("鈍鈎")].join(",")).toBe("147,221,138,98"); // U+920D
expect(() => {ms932Encoder.encode("\u920F")}).toThrowError({name:"TypeError",message:"EncodingError U+920F"});
expect([...ms932Encoder.encode("鈐鈑")].join(",")).toBe("251,194,231,229"); // U+9210
expect(() => {ms932Encoder.encode("\u9212")}).toThrowError({name:"TypeError",message:"EncodingError U+9212"});
expect(() => {ms932Encoder.encode("\u9213")}).toThrowError({name:"TypeError",message:"EncodingError U+9213"});
expect([...ms932Encoder.encode("鈔鈕")].join(",")).toBe("231,226,231,228"); // U+9214
expect(() => {ms932Encoder.encode("\u9216")}).toThrowError({name:"TypeError",message:"EncodingError U+9216"});
expect(() => {ms932Encoder.encode("\u9217")}).toThrowError({name:"TypeError",message:"EncodingError U+9217"});
expect(() => {ms932Encoder.encode("\u9218")}).toThrowError({name:"TypeError",message:"EncodingError U+9218"});
expect(() => {ms932Encoder.encode("\u9219")}).toThrowError({name:"TypeError",message:"EncodingError U+9219"});
expect(() => {ms932Encoder.encode("\u921A")}).toThrowError({name:"TypeError",message:"EncodingError U+921A"});
expect(() => {ms932Encoder.encode("\u921B")}).toThrowError({name:"TypeError",message:"EncodingError U+921B"});
expect(() => {ms932Encoder.encode("\u921C")}).toThrowError({name:"TypeError",message:"EncodingError U+921C"});
expect(() => {ms932Encoder.encode("\u921D")}).toThrowError({name:"TypeError",message:"EncodingError U+921D"});
expect([...ms932Encoder.encode("鈞")].join(",")).toBe("231,224"); // U+921E
expect(() => {ms932Encoder.encode("\u921F")}).toThrowError({name:"TypeError",message:"EncodingError U+921F"});
expect(() => {ms932Encoder.encode("\u9220")}).toThrowError({name:"TypeError",message:"EncodingError U+9220"});
expect(() => {ms932Encoder.encode("\u9221")}).toThrowError({name:"TypeError",message:"EncodingError U+9221"});
expect(() => {ms932Encoder.encode("\u9222")}).toThrowError({name:"TypeError",message:"EncodingError U+9222"});
expect(() => {ms932Encoder.encode("\u9223")}).toThrowError({name:"TypeError",message:"EncodingError U+9223"});
expect(() => {ms932Encoder.encode("\u9224")}).toThrowError({name:"TypeError",message:"EncodingError U+9224"});
expect(() => {ms932Encoder.encode("\u9225")}).toThrowError({name:"TypeError",message:"EncodingError U+9225"});
expect(() => {ms932Encoder.encode("\u9226")}).toThrowError({name:"TypeError",message:"EncodingError U+9226"});
expect(() => {ms932Encoder.encode("\u9227")}).toThrowError({name:"TypeError",message:"EncodingError U+9227"});
expect(() => {ms932Encoder.encode("\u9228")}).toThrowError({name:"TypeError",message:"EncodingError U+9228"});
expect([...ms932Encoder.encode("鈩")].join(",")).toBe("232,110"); // U+9229
expect(() => {ms932Encoder.encode("\u922A")}).toThrowError({name:"TypeError",message:"EncodingError U+922A"});
expect(() => {ms932Encoder.encode("\u922B")}).toThrowError({name:"TypeError",message:"EncodingError U+922B"});
expect([...ms932Encoder.encode("鈬")].join(",")).toBe("231,227"); // U+922C
expect(() => {ms932Encoder.encode("\u922D")}).toThrowError({name:"TypeError",message:"EncodingError U+922D"});
expect(() => {ms932Encoder.encode("\u922E")}).toThrowError({name:"TypeError",message:"EncodingError U+922E"});
expect(() => {ms932Encoder.encode("\u922F")}).toThrowError({name:"TypeError",message:"EncodingError U+922F"});
expect(() => {ms932Encoder.encode("\u9230")}).toThrowError({name:"TypeError",message:"EncodingError U+9230"});
expect(() => {ms932Encoder.encode("\u9231")}).toThrowError({name:"TypeError",message:"EncodingError U+9231"});
expect(() => {ms932Encoder.encode("\u9232")}).toThrowError({name:"TypeError",message:"EncodingError U+9232"});
expect(() => {ms932Encoder.encode("\u9233")}).toThrowError({name:"TypeError",message:"EncodingError U+9233"});
expect([...ms932Encoder.encode("鈴")].join(",")).toBe("151,233"); // U+9234
expect(() => {ms932Encoder.encode("\u9235")}).toThrowError({name:"TypeError",message:"EncodingError U+9235"});
expect(() => {ms932Encoder.encode("\u9236")}).toThrowError({name:"TypeError",message:"EncodingError U+9236"});
expect([...ms932Encoder.encode("鈷")].join(",")).toBe("140,216"); // U+9237
expect(() => {ms932Encoder.encode("\u9238")}).toThrowError({name:"TypeError",message:"EncodingError U+9238"});
expect([...ms932Encoder.encode("鈹鈺")].join(",")).toBe("251,202,251,196"); // U+9239
expect(() => {ms932Encoder.encode("\u923B")}).toThrowError({name:"TypeError",message:"EncodingError U+923B"});
expect([...ms932Encoder.encode("鈼")].join(",")).toBe("251,198"); // U+923C
expect(() => {ms932Encoder.encode("\u923D")}).toThrowError({name:"TypeError",message:"EncodingError U+923D"});
expect(() => {ms932Encoder.encode("\u923E")}).toThrowError({name:"TypeError",message:"EncodingError U+923E"});
expect([...ms932Encoder.encode("鈿鉀")].join(",")).toBe("231,237,251,197"); // U+923F
expect(() => {ms932Encoder.encode("\u9241")}).toThrowError({name:"TypeError",message:"EncodingError U+9241"});
expect(() => {ms932Encoder.encode("\u9242")}).toThrowError({name:"TypeError",message:"EncodingError U+9242"});
expect(() => {ms932Encoder.encode("\u9243")}).toThrowError({name:"TypeError",message:"EncodingError U+9243"});
expect([...ms932Encoder.encode("鉄鉅")].join(",")).toBe("147,83,231,232"); // U+9244
expect(() => {ms932Encoder.encode("\u9246")}).toThrowError({name:"TypeError",message:"EncodingError U+9246"});
expect(() => {ms932Encoder.encode("\u9247")}).toThrowError({name:"TypeError",message:"EncodingError U+9247"});
expect([...ms932Encoder.encode("鉈鉉")].join(",")).toBe("231,235,231,233"); // U+9248
expect(() => {ms932Encoder.encode("\u924A")}).toThrowError({name:"TypeError",message:"EncodingError U+924A"});
expect([...ms932Encoder.encode("鉋")].join(",")).toBe("231,238"); // U+924B
expect(() => {ms932Encoder.encode("\u924C")}).toThrowError({name:"TypeError",message:"EncodingError U+924C"});
expect(() => {ms932Encoder.encode("\u924D")}).toThrowError({name:"TypeError",message:"EncodingError U+924D"});
expect([...ms932Encoder.encode("鉎")].join(",")).toBe("251,199"); // U+924E
expect(() => {ms932Encoder.encode("\u924F")}).toThrowError({name:"TypeError",message:"EncodingError U+924F"});
expect([...ms932Encoder.encode("鉐鉑")].join(",")).toBe("231,239,251,201"); // U+9250
expect(() => {ms932Encoder.encode("\u9252")}).toThrowError({name:"TypeError",message:"EncodingError U+9252"});
expect(() => {ms932Encoder.encode("\u9253")}).toThrowError({name:"TypeError",message:"EncodingError U+9253"});
expect(() => {ms932Encoder.encode("\u9254")}).toThrowError({name:"TypeError",message:"EncodingError U+9254"});
expect(() => {ms932Encoder.encode("\u9255")}).toThrowError({name:"TypeError",message:"EncodingError U+9255"});
expect(() => {ms932Encoder.encode("\u9256")}).toThrowError({name:"TypeError",message:"EncodingError U+9256"});
expect([...ms932Encoder.encode("鉗")].join(",")).toBe("231,231"); // U+9257
expect(() => {ms932Encoder.encode("\u9258")}).toThrowError({name:"TypeError",message:"EncodingError U+9258"});
expect([...ms932Encoder.encode("鉙鉚鉛")].join(",")).toBe("251,200,231,244,137,148"); // U+9259
expect(() => {ms932Encoder.encode("\u925C")}).toThrowError({name:"TypeError",message:"EncodingError U+925C"});
expect(() => {ms932Encoder.encode("\u925D")}).toThrowError({name:"TypeError",message:"EncodingError U+925D"});
expect([...ms932Encoder.encode("鉞")].join(",")).toBe("231,230"); // U+925E
expect(() => {ms932Encoder.encode("\u925F")}).toThrowError({name:"TypeError",message:"EncodingError U+925F"});
expect(() => {ms932Encoder.encode("\u9260")}).toThrowError({name:"TypeError",message:"EncodingError U+9260"});
expect(() => {ms932Encoder.encode("\u9261")}).toThrowError({name:"TypeError",message:"EncodingError U+9261"});
expect([...ms932Encoder.encode("鉢")].join(",")).toBe("148,171"); // U+9262
expect(() => {ms932Encoder.encode("\u9263")}).toThrowError({name:"TypeError",message:"EncodingError U+9263"});
expect([...ms932Encoder.encode("鉤")].join(",")).toBe("231,234"); // U+9264
expect(() => {ms932Encoder.encode("\u9265")}).toThrowError({name:"TypeError",message:"EncodingError U+9265"});
expect([...ms932Encoder.encode("鉦鉧")].join(",")).toBe("143,222,251,203"); // U+9266
expect(() => {ms932Encoder.encode("\u9268")}).toThrowError({name:"TypeError",message:"EncodingError U+9268"});
expect(() => {ms932Encoder.encode("\u9269")}).toThrowError({name:"TypeError",message:"EncodingError U+9269"});
expect(() => {ms932Encoder.encode("\u926A")}).toThrowError({name:"TypeError",message:"EncodingError U+926A"});
expect(() => {ms932Encoder.encode("\u926B")}).toThrowError({name:"TypeError",message:"EncodingError U+926B"});
expect(() => {ms932Encoder.encode("\u926C")}).toThrowError({name:"TypeError",message:"EncodingError U+926C"});
expect(() => {ms932Encoder.encode("\u926D")}).toThrowError({name:"TypeError",message:"EncodingError U+926D"});
expect(() => {ms932Encoder.encode("\u926E")}).toThrowError({name:"TypeError",message:"EncodingError U+926E"});
expect(() => {ms932Encoder.encode("\u926F")}).toThrowError({name:"TypeError",message:"EncodingError U+926F"});
expect(() => {ms932Encoder.encode("\u9270")}).toThrowError({name:"TypeError",message:"EncodingError U+9270"});
expect([...ms932Encoder.encode("鉱")].join(",")).toBe("141,122"); // U+9271
expect(() => {ms932Encoder.encode("\u9272")}).toThrowError({name:"TypeError",message:"EncodingError U+9272"});
expect(() => {ms932Encoder.encode("\u9273")}).toThrowError({name:"TypeError",message:"EncodingError U+9273"});
expect(() => {ms932Encoder.encode("\u9274")}).toThrowError({name:"TypeError",message:"EncodingError U+9274"});
expect(() => {ms932Encoder.encode("\u9275")}).toThrowError({name:"TypeError",message:"EncodingError U+9275"});
expect(() => {ms932Encoder.encode("\u9276")}).toThrowError({name:"TypeError",message:"EncodingError U+9276"});
expect([...ms932Encoder.encode("鉷鉸")].join(",")).toBe("251,205,251,206"); // U+9277
expect(() => {ms932Encoder.encode("\u9279")}).toThrowError({name:"TypeError",message:"EncodingError U+9279"});
expect(() => {ms932Encoder.encode("\u927A")}).toThrowError({name:"TypeError",message:"EncodingError U+927A"});
expect(() => {ms932Encoder.encode("\u927B")}).toThrowError({name:"TypeError",message:"EncodingError U+927B"});
expect(() => {ms932Encoder.encode("\u927C")}).toThrowError({name:"TypeError",message:"EncodingError U+927C"});
expect(() => {ms932Encoder.encode("\u927D")}).toThrowError({name:"TypeError",message:"EncodingError U+927D"});
expect([...ms932Encoder.encode("鉾")].join(",")).toBe("150,103"); // U+927E
expect(() => {ms932Encoder.encode("\u927F")}).toThrowError({name:"TypeError",message:"EncodingError U+927F"});
expect([...ms932Encoder.encode("銀")].join(",")).toBe("139,226"); // U+9280
expect(() => {ms932Encoder.encode("\u9281")}).toThrowError({name:"TypeError",message:"EncodingError U+9281"});
expect(() => {ms932Encoder.encode("\u9282")}).toThrowError({name:"TypeError",message:"EncodingError U+9282"});
expect([...ms932Encoder.encode("銃")].join(",")).toBe("143,101"); // U+9283
expect(() => {ms932Encoder.encode("\u9284")}).toThrowError({name:"TypeError",message:"EncodingError U+9284"});
expect([...ms932Encoder.encode("銅")].join(",")).toBe("147,186"); // U+9285
expect(() => {ms932Encoder.encode("\u9286")}).toThrowError({name:"TypeError",message:"EncodingError U+9286"});
expect(() => {ms932Encoder.encode("\u9287")}).toThrowError({name:"TypeError",message:"EncodingError U+9287"});
expect([...ms932Encoder.encode("銈")].join(",")).toBe("250,95"); // U+9288
expect(() => {ms932Encoder.encode("\u9289")}).toThrowError({name:"TypeError",message:"EncodingError U+9289"});
expect(() => {ms932Encoder.encode("\u928A")}).toThrowError({name:"TypeError",message:"EncodingError U+928A"});
expect(() => {ms932Encoder.encode("\u928B")}).toThrowError({name:"TypeError",message:"EncodingError U+928B"});
expect(() => {ms932Encoder.encode("\u928C")}).toThrowError({name:"TypeError",message:"EncodingError U+928C"});
expect(() => {ms932Encoder.encode("\u928D")}).toThrowError({name:"TypeError",message:"EncodingError U+928D"});
expect(() => {ms932Encoder.encode("\u928E")}).toThrowError({name:"TypeError",message:"EncodingError U+928E"});
expect(() => {ms932Encoder.encode("\u928F")}).toThrowError({name:"TypeError",message:"EncodingError U+928F"});
expect(() => {ms932Encoder.encode("\u9290")}).toThrowError({name:"TypeError",message:"EncodingError U+9290"});
expect([...ms932Encoder.encode("銑")].join(",")).toBe("145,76"); // U+9291
expect(() => {ms932Encoder.encode("\u9292")}).toThrowError({name:"TypeError",message:"EncodingError U+9292"});
expect([...ms932Encoder.encode("銓")].join(",")).toBe("231,242"); // U+9293
expect(() => {ms932Encoder.encode("\u9294")}).toThrowError({name:"TypeError",message:"EncodingError U+9294"});
expect([...ms932Encoder.encode("銕銖")].join(",")).toBe("231,236,231,241"); // U+9295
expect(() => {ms932Encoder.encode("\u9297")}).toThrowError({name:"TypeError",message:"EncodingError U+9297"});
expect([...ms932Encoder.encode("銘")].join(",")).toBe("150,193"); // U+9298
expect(() => {ms932Encoder.encode("\u9299")}).toThrowError({name:"TypeError",message:"EncodingError U+9299"});
expect([...ms932Encoder.encode("銚銛銜")].join(",")).toBe("146,182,231,243,231,240"); // U+929A
expect(() => {ms932Encoder.encode("\u929D")}).toThrowError({name:"TypeError",message:"EncodingError U+929D"});
expect(() => {ms932Encoder.encode("\u929E")}).toThrowError({name:"TypeError",message:"EncodingError U+929E"});
expect(() => {ms932Encoder.encode("\u929F")}).toThrowError({name:"TypeError",message:"EncodingError U+929F"});
expect(() => {ms932Encoder.encode("\u92A0")}).toThrowError({name:"TypeError",message:"EncodingError U+92A0"});
expect(() => {ms932Encoder.encode("\u92A1")}).toThrowError({name:"TypeError",message:"EncodingError U+92A1"});
expect(() => {ms932Encoder.encode("\u92A2")}).toThrowError({name:"TypeError",message:"EncodingError U+92A2"});
expect(() => {ms932Encoder.encode("\u92A3")}).toThrowError({name:"TypeError",message:"EncodingError U+92A3"});
expect(() => {ms932Encoder.encode("\u92A4")}).toThrowError({name:"TypeError",message:"EncodingError U+92A4"});
expect(() => {ms932Encoder.encode("\u92A5")}).toThrowError({name:"TypeError",message:"EncodingError U+92A5"});
expect(() => {ms932Encoder.encode("\u92A6")}).toThrowError({name:"TypeError",message:"EncodingError U+92A6"});
expect([...ms932Encoder.encode("銧")].join(",")).toBe("251,204"); // U+92A7
expect(() => {ms932Encoder.encode("\u92A8")}).toThrowError({name:"TypeError",message:"EncodingError U+92A8"});
expect(() => {ms932Encoder.encode("\u92A9")}).toThrowError({name:"TypeError",message:"EncodingError U+92A9"});
expect(() => {ms932Encoder.encode("\u92AA")}).toThrowError({name:"TypeError",message:"EncodingError U+92AA"});
expect(() => {ms932Encoder.encode("\u92AB")}).toThrowError({name:"TypeError",message:"EncodingError U+92AB"});
expect(() => {ms932Encoder.encode("\u92AC")}).toThrowError({name:"TypeError",message:"EncodingError U+92AC"});
expect([...ms932Encoder.encode("銭")].join(",")).toBe("145,75"); // U+92AD
expect(() => {ms932Encoder.encode("\u92AE")}).toThrowError({name:"TypeError",message:"EncodingError U+92AE"});
expect(() => {ms932Encoder.encode("\u92AF")}).toThrowError({name:"TypeError",message:"EncodingError U+92AF"});
expect(() => {ms932Encoder.encode("\u92B0")}).toThrowError({name:"TypeError",message:"EncodingError U+92B0"});
expect(() => {ms932Encoder.encode("\u92B1")}).toThrowError({name:"TypeError",message:"EncodingError U+92B1"});
expect(() => {ms932Encoder.encode("\u92B2")}).toThrowError({name:"TypeError",message:"EncodingError U+92B2"});
expect(() => {ms932Encoder.encode("\u92B3")}).toThrowError({name:"TypeError",message:"EncodingError U+92B3"});
expect(() => {ms932Encoder.encode("\u92B4")}).toThrowError({name:"TypeError",message:"EncodingError U+92B4"});
expect(() => {ms932Encoder.encode("\u92B5")}).toThrowError({name:"TypeError",message:"EncodingError U+92B5"});
expect(() => {ms932Encoder.encode("\u92B6")}).toThrowError({name:"TypeError",message:"EncodingError U+92B6"});
expect([...ms932Encoder.encode("銷")].join(",")).toBe("231,247"); // U+92B7
expect(() => {ms932Encoder.encode("\u92B8")}).toThrowError({name:"TypeError",message:"EncodingError U+92B8"});
expect([...ms932Encoder.encode("銹")].join(",")).toBe("231,246"); // U+92B9
expect(() => {ms932Encoder.encode("\u92BA")}).toThrowError({name:"TypeError",message:"EncodingError U+92BA"});
expect(() => {ms932Encoder.encode("\u92BB")}).toThrowError({name:"TypeError",message:"EncodingError U+92BB"});
expect(() => {ms932Encoder.encode("\u92BC")}).toThrowError({name:"TypeError",message:"EncodingError U+92BC"});
expect(() => {ms932Encoder.encode("\u92BD")}).toThrowError({name:"TypeError",message:"EncodingError U+92BD"});
expect(() => {ms932Encoder.encode("\u92BE")}).toThrowError({name:"TypeError",message:"EncodingError U+92BE"});
expect(() => {ms932Encoder.encode("\u92BF")}).toThrowError({name:"TypeError",message:"EncodingError U+92BF"});
expect(() => {ms932Encoder.encode("\u92C0")}).toThrowError({name:"TypeError",message:"EncodingError U+92C0"});
expect(() => {ms932Encoder.encode("\u92C1")}).toThrowError({name:"TypeError",message:"EncodingError U+92C1"});
expect(() => {ms932Encoder.encode("\u92C2")}).toThrowError({name:"TypeError",message:"EncodingError U+92C2"});
expect(() => {ms932Encoder.encode("\u92C3")}).toThrowError({name:"TypeError",message:"EncodingError U+92C3"});
expect(() => {ms932Encoder.encode("\u92C4")}).toThrowError({name:"TypeError",message:"EncodingError U+92C4"});
expect(() => {ms932Encoder.encode("\u92C5")}).toThrowError({name:"TypeError",message:"EncodingError U+92C5"});
expect(() => {ms932Encoder.encode("\u92C6")}).toThrowError({name:"TypeError",message:"EncodingError U+92C6"});
expect(() => {ms932Encoder.encode("\u92C7")}).toThrowError({name:"TypeError",message:"EncodingError U+92C7"});
expect(() => {ms932Encoder.encode("\u92C8")}).toThrowError({name:"TypeError",message:"EncodingError U+92C8"});
expect(() => {ms932Encoder.encode("\u92C9")}).toThrowError({name:"TypeError",message:"EncodingError U+92C9"});
expect(() => {ms932Encoder.encode("\u92CA")}).toThrowError({name:"TypeError",message:"EncodingError U+92CA"});
expect(() => {ms932Encoder.encode("\u92CB")}).toThrowError({name:"TypeError",message:"EncodingError U+92CB"});
expect(() => {ms932Encoder.encode("\u92CC")}).toThrowError({name:"TypeError",message:"EncodingError U+92CC"});
expect(() => {ms932Encoder.encode("\u92CD")}).toThrowError({name:"TypeError",message:"EncodingError U+92CD"});
expect(() => {ms932Encoder.encode("\u92CE")}).toThrowError({name:"TypeError",message:"EncodingError U+92CE"});
expect([...ms932Encoder.encode("鋏鋐")].join(",")).toBe("231,245,251,210"); // U+92CF
expect(() => {ms932Encoder.encode("\u92D1")}).toThrowError({name:"TypeError",message:"EncodingError U+92D1"});
expect([...ms932Encoder.encode("鋒鋓")].join(",")).toBe("150,78,251,214"); // U+92D2
expect(() => {ms932Encoder.encode("\u92D4")}).toThrowError({name:"TypeError",message:"EncodingError U+92D4"});
expect([...ms932Encoder.encode("鋕")].join(",")).toBe("251,212"); // U+92D5
expect(() => {ms932Encoder.encode("\u92D6")}).toThrowError({name:"TypeError",message:"EncodingError U+92D6"});
expect([...ms932Encoder.encode("鋗")].join(",")).toBe("251,208"); // U+92D7
expect(() => {ms932Encoder.encode("\u92D8")}).toThrowError({name:"TypeError",message:"EncodingError U+92D8"});
expect([...ms932Encoder.encode("鋙")].join(",")).toBe("251,209"); // U+92D9
expect(() => {ms932Encoder.encode("\u92DA")}).toThrowError({name:"TypeError",message:"EncodingError U+92DA"});
expect(() => {ms932Encoder.encode("\u92DB")}).toThrowError({name:"TypeError",message:"EncodingError U+92DB"});
expect(() => {ms932Encoder.encode("\u92DC")}).toThrowError({name:"TypeError",message:"EncodingError U+92DC"});
expect(() => {ms932Encoder.encode("\u92DD")}).toThrowError({name:"TypeError",message:"EncodingError U+92DD"});
expect(() => {ms932Encoder.encode("\u92DE")}).toThrowError({name:"TypeError",message:"EncodingError U+92DE"});
expect(() => {ms932Encoder.encode("\u92DF")}).toThrowError({name:"TypeError",message:"EncodingError U+92DF"});
expect([...ms932Encoder.encode("鋠")].join(",")).toBe("251,213"); // U+92E0
expect(() => {ms932Encoder.encode("\u92E1")}).toThrowError({name:"TypeError",message:"EncodingError U+92E1"});
expect(() => {ms932Encoder.encode("\u92E2")}).toThrowError({name:"TypeError",message:"EncodingError U+92E2"});
expect(() => {ms932Encoder.encode("\u92E3")}).toThrowError({name:"TypeError",message:"EncodingError U+92E3"});
expect([...ms932Encoder.encode("鋤")].join(",")).toBe("143,155"); // U+92E4
expect(() => {ms932Encoder.encode("\u92E5")}).toThrowError({name:"TypeError",message:"EncodingError U+92E5"});
expect(() => {ms932Encoder.encode("\u92E6")}).toThrowError({name:"TypeError",message:"EncodingError U+92E6"});
expect([...ms932Encoder.encode("鋧")].join(",")).toBe("251,207"); // U+92E7
expect(() => {ms932Encoder.encode("\u92E8")}).toThrowError({name:"TypeError",message:"EncodingError U+92E8"});
expect([...ms932Encoder.encode("鋩鋪")].join(",")).toBe("231,248,149,221"); // U+92E9
expect(() => {ms932Encoder.encode("\u92EB")}).toThrowError({name:"TypeError",message:"EncodingError U+92EB"});
expect(() => {ms932Encoder.encode("\u92EC")}).toThrowError({name:"TypeError",message:"EncodingError U+92EC"});
expect([...ms932Encoder.encode("鋭")].join(",")).toBe("137,115"); // U+92ED
expect(() => {ms932Encoder.encode("\u92EE")}).toThrowError({name:"TypeError",message:"EncodingError U+92EE"});
expect(() => {ms932Encoder.encode("\u92EF")}).toThrowError({name:"TypeError",message:"EncodingError U+92EF"});
expect(() => {ms932Encoder.encode("\u92F0")}).toThrowError({name:"TypeError",message:"EncodingError U+92F0"});
expect(() => {ms932Encoder.encode("\u92F1")}).toThrowError({name:"TypeError",message:"EncodingError U+92F1"});
expect([...ms932Encoder.encode("鋲鋳")].join(",")).toBe("149,101,146,146"); // U+92F2
expect(() => {ms932Encoder.encode("\u92F4")}).toThrowError({name:"TypeError",message:"EncodingError U+92F4"});
expect(() => {ms932Encoder.encode("\u92F5")}).toThrowError({name:"TypeError",message:"EncodingError U+92F5"});
expect(() => {ms932Encoder.encode("\u92F6")}).toThrowError({name:"TypeError",message:"EncodingError U+92F6"});
expect(() => {ms932Encoder.encode("\u92F7")}).toThrowError({name:"TypeError",message:"EncodingError U+92F7"});
expect([...ms932Encoder.encode("鋸鋹鋺鋻鋼")].join(",")).toBe("139,152,250,101,231,250,251,217,141,124"); // U+92F8
expect(() => {ms932Encoder.encode("\u92FD")}).toThrowError({name:"TypeError",message:"EncodingError U+92FD"});
expect(() => {ms932Encoder.encode("\u92FE")}).toThrowError({name:"TypeError",message:"EncodingError U+92FE"});
expect([...ms932Encoder.encode("鋿")].join(",")).toBe("251,220"); // U+92FF
expect(() => {ms932Encoder.encode("\u9300")}).toThrowError({name:"TypeError",message:"EncodingError U+9300"});
expect(() => {ms932Encoder.encode("\u9301")}).toThrowError({name:"TypeError",message:"EncodingError U+9301"});
expect([...ms932Encoder.encode("錂")].join(",")).toBe("251,222"); // U+9302
expect(() => {ms932Encoder.encode("\u9303")}).toThrowError({name:"TypeError",message:"EncodingError U+9303"});
expect(() => {ms932Encoder.encode("\u9304")}).toThrowError({name:"TypeError",message:"EncodingError U+9304"});
expect(() => {ms932Encoder.encode("\u9305")}).toThrowError({name:"TypeError",message:"EncodingError U+9305"});
expect([...ms932Encoder.encode("錆")].join(",")).toBe("142,75"); // U+9306
expect(() => {ms932Encoder.encode("\u9307")}).toThrowError({name:"TypeError",message:"EncodingError U+9307"});
expect(() => {ms932Encoder.encode("\u9308")}).toThrowError({name:"TypeError",message:"EncodingError U+9308"});
expect(() => {ms932Encoder.encode("\u9309")}).toThrowError({name:"TypeError",message:"EncodingError U+9309"});
expect(() => {ms932Encoder.encode("\u930A")}).toThrowError({name:"TypeError",message:"EncodingError U+930A"});
expect(() => {ms932Encoder.encode("\u930B")}).toThrowError({name:"TypeError",message:"EncodingError U+930B"});
expect(() => {ms932Encoder.encode("\u930C")}).toThrowError({name:"TypeError",message:"EncodingError U+930C"});
expect(() => {ms932Encoder.encode("\u930D")}).toThrowError({name:"TypeError",message:"EncodingError U+930D"});
expect(() => {ms932Encoder.encode("\u930E")}).toThrowError({name:"TypeError",message:"EncodingError U+930E"});
expect([...ms932Encoder.encode("錏錐")].join(",")).toBe("231,249,144,141"); // U+930F
expect(() => {ms932Encoder.encode("\u9311")}).toThrowError({name:"TypeError",message:"EncodingError U+9311"});
expect(() => {ms932Encoder.encode("\u9312")}).toThrowError({name:"TypeError",message:"EncodingError U+9312"});
expect(() => {ms932Encoder.encode("\u9313")}).toThrowError({name:"TypeError",message:"EncodingError U+9313"});
expect(() => {ms932Encoder.encode("\u9314")}).toThrowError({name:"TypeError",message:"EncodingError U+9314"});
expect(() => {ms932Encoder.encode("\u9315")}).toThrowError({name:"TypeError",message:"EncodingError U+9315"});
expect(() => {ms932Encoder.encode("\u9316")}).toThrowError({name:"TypeError",message:"EncodingError U+9316"});
expect(() => {ms932Encoder.encode("\u9317")}).toThrowError({name:"TypeError",message:"EncodingError U+9317"});
expect([...ms932Encoder.encode("錘錙錚")].join(",")).toBe("144,142,232,64,232,66"); // U+9318
expect(() => {ms932Encoder.encode("\u931B")}).toThrowError({name:"TypeError",message:"EncodingError U+931B"});
expect(() => {ms932Encoder.encode("\u931C")}).toThrowError({name:"TypeError",message:"EncodingError U+931C"});
expect([...ms932Encoder.encode("錝錞")].join(",")).toBe("251,221,251,219"); // U+931D
expect(() => {ms932Encoder.encode("\u931F")}).toThrowError({name:"TypeError",message:"EncodingError U+931F"});
expect([...ms932Encoder.encode("錠錡錢錣")].join(",")).toBe("143,249,251,216,232,65,232,67"); // U+9320
expect(() => {ms932Encoder.encode("\u9324")}).toThrowError({name:"TypeError",message:"EncodingError U+9324"});
expect([...ms932Encoder.encode("錥錦")].join(",")).toBe("251,215,139,209"); // U+9325
expect(() => {ms932Encoder.encode("\u9327")}).toThrowError({name:"TypeError",message:"EncodingError U+9327"});
expect([...ms932Encoder.encode("錨")].join(",")).toBe("149,100"); // U+9328
expect(() => {ms932Encoder.encode("\u9329")}).toThrowError({name:"TypeError",message:"EncodingError U+9329"});
expect(() => {ms932Encoder.encode("\u932A")}).toThrowError({name:"TypeError",message:"EncodingError U+932A"});
expect([...ms932Encoder.encode("錫錬")].join(",")).toBe("142,224,152,66"); // U+932B
expect(() => {ms932Encoder.encode("\u932D")}).toThrowError({name:"TypeError",message:"EncodingError U+932D"});
expect([...ms932Encoder.encode("錮錯")].join(",")).toBe("231,252,141,246"); // U+932E
expect(() => {ms932Encoder.encode("\u9330")}).toThrowError({name:"TypeError",message:"EncodingError U+9330"});
expect(() => {ms932Encoder.encode("\u9331")}).toThrowError({name:"TypeError",message:"EncodingError U+9331"});
expect([...ms932Encoder.encode("録")].join(",")).toBe("152,94"); // U+9332
expect(() => {ms932Encoder.encode("\u9333")}).toThrowError({name:"TypeError",message:"EncodingError U+9333"});
expect(() => {ms932Encoder.encode("\u9334")}).toThrowError({name:"TypeError",message:"EncodingError U+9334"});
expect([...ms932Encoder.encode("錵")].join(",")).toBe("232,69"); // U+9335
expect(() => {ms932Encoder.encode("\u9336")}).toThrowError({name:"TypeError",message:"EncodingError U+9336"});
expect(() => {ms932Encoder.encode("\u9337")}).toThrowError({name:"TypeError",message:"EncodingError U+9337"});
expect(() => {ms932Encoder.encode("\u9338")}).toThrowError({name:"TypeError",message:"EncodingError U+9338"});
expect(() => {ms932Encoder.encode("\u9339")}).toThrowError({name:"TypeError",message:"EncodingError U+9339"});
expect([...ms932Encoder.encode("錺錻")].join(",")).toBe("232,68,232,70"); // U+933A
expect(() => {ms932Encoder.encode("\u933C")}).toThrowError({name:"TypeError",message:"EncodingError U+933C"});
expect(() => {ms932Encoder.encode("\u933D")}).toThrowError({name:"TypeError",message:"EncodingError U+933D"});
expect(() => {ms932Encoder.encode("\u933E")}).toThrowError({name:"TypeError",message:"EncodingError U+933E"});
expect(() => {ms932Encoder.encode("\u933F")}).toThrowError({name:"TypeError",message:"EncodingError U+933F"});
expect(() => {ms932Encoder.encode("\u9340")}).toThrowError({name:"TypeError",message:"EncodingError U+9340"});
expect(() => {ms932Encoder.encode("\u9341")}).toThrowError({name:"TypeError",message:"EncodingError U+9341"});
expect(() => {ms932Encoder.encode("\u9342")}).toThrowError({name:"TypeError",message:"EncodingError U+9342"});
expect(() => {ms932Encoder.encode("\u9343")}).toThrowError({name:"TypeError",message:"EncodingError U+9343"});
expect([...ms932Encoder.encode("鍄")].join(",")).toBe("231,251"); // U+9344
expect(() => {ms932Encoder.encode("\u9345")}).toThrowError({name:"TypeError",message:"EncodingError U+9345"});
expect(() => {ms932Encoder.encode("\u9346")}).toThrowError({name:"TypeError",message:"EncodingError U+9346"});
expect(() => {ms932Encoder.encode("\u9347")}).toThrowError({name:"TypeError",message:"EncodingError U+9347"});
expect([...ms932Encoder.encode("鍈")].join(",")).toBe("250,94"); // U+9348
expect(() => {ms932Encoder.encode("\u9349")}).toThrowError({name:"TypeError",message:"EncodingError U+9349"});
expect(() => {ms932Encoder.encode("\u934A")}).toThrowError({name:"TypeError",message:"EncodingError U+934A"});
expect([...ms932Encoder.encode("鍋")].join(",")).toBe("147,231"); // U+934B
expect(() => {ms932Encoder.encode("\u934C")}).toThrowError({name:"TypeError",message:"EncodingError U+934C"});
expect([...ms932Encoder.encode("鍍")].join(",")).toBe("147,116"); // U+934D
expect(() => {ms932Encoder.encode("\u934E")}).toThrowError({name:"TypeError",message:"EncodingError U+934E"});
expect(() => {ms932Encoder.encode("\u934F")}).toThrowError({name:"TypeError",message:"EncodingError U+934F"});
expect(() => {ms932Encoder.encode("\u9350")}).toThrowError({name:"TypeError",message:"EncodingError U+9350"});
expect(() => {ms932Encoder.encode("\u9351")}).toThrowError({name:"TypeError",message:"EncodingError U+9351"});
expect(() => {ms932Encoder.encode("\u9352")}).toThrowError({name:"TypeError",message:"EncodingError U+9352"});
expect(() => {ms932Encoder.encode("\u9353")}).toThrowError({name:"TypeError",message:"EncodingError U+9353"});
expect([...ms932Encoder.encode("鍔")].join(",")).toBe("146,213"); // U+9354
expect(() => {ms932Encoder.encode("\u9355")}).toThrowError({name:"TypeError",message:"EncodingError U+9355"});
expect([...ms932Encoder.encode("鍖鍗")].join(",")).toBe("232,75,251,224"); // U+9356
expect(() => {ms932Encoder.encode("\u9358")}).toThrowError({name:"TypeError",message:"EncodingError U+9358"});
expect(() => {ms932Encoder.encode("\u9359")}).toThrowError({name:"TypeError",message:"EncodingError U+9359"});
expect(() => {ms932Encoder.encode("\u935A")}).toThrowError({name:"TypeError",message:"EncodingError U+935A"});
expect([...ms932Encoder.encode("鍛鍜")].join(",")).toBe("146,98,232,71"); // U+935B
expect(() => {ms932Encoder.encode("\u935D")}).toThrowError({name:"TypeError",message:"EncodingError U+935D"});
expect(() => {ms932Encoder.encode("\u935E")}).toThrowError({name:"TypeError",message:"EncodingError U+935E"});
expect(() => {ms932Encoder.encode("\u935F")}).toThrowError({name:"TypeError",message:"EncodingError U+935F"});
expect([...ms932Encoder.encode("鍠")].join(",")).toBe("232,72"); // U+9360
expect(() => {ms932Encoder.encode("\u9361")}).toThrowError({name:"TypeError",message:"EncodingError U+9361"});
expect(() => {ms932Encoder.encode("\u9362")}).toThrowError({name:"TypeError",message:"EncodingError U+9362"});
expect(() => {ms932Encoder.encode("\u9363")}).toThrowError({name:"TypeError",message:"EncodingError U+9363"});
expect(() => {ms932Encoder.encode("\u9364")}).toThrowError({name:"TypeError",message:"EncodingError U+9364"});
expect(() => {ms932Encoder.encode("\u9365")}).toThrowError({name:"TypeError",message:"EncodingError U+9365"});
expect(() => {ms932Encoder.encode("\u9366")}).toThrowError({name:"TypeError",message:"EncodingError U+9366"});
expect(() => {ms932Encoder.encode("\u9367")}).toThrowError({name:"TypeError",message:"EncodingError U+9367"});
expect(() => {ms932Encoder.encode("\u9368")}).toThrowError({name:"TypeError",message:"EncodingError U+9368"});
expect(() => {ms932Encoder.encode("\u9369")}).toThrowError({name:"TypeError",message:"EncodingError U+9369"});
expect(() => {ms932Encoder.encode("\u936A")}).toThrowError({name:"TypeError",message:"EncodingError U+936A"});
expect(() => {ms932Encoder.encode("\u936B")}).toThrowError({name:"TypeError",message:"EncodingError U+936B"});
expect([...ms932Encoder.encode("鍬")].join(",")).toBe("140,76"); // U+936C
expect(() => {ms932Encoder.encode("\u936D")}).toThrowError({name:"TypeError",message:"EncodingError U+936D"});
expect([...ms932Encoder.encode("鍮")].join(",")).toBe("232,74"); // U+936E
expect(() => {ms932Encoder.encode("\u936F")}).toThrowError({name:"TypeError",message:"EncodingError U+936F"});
expect([...ms932Encoder.encode("鍰")].join(",")).toBe("251,223"); // U+9370
expect(() => {ms932Encoder.encode("\u9371")}).toThrowError({name:"TypeError",message:"EncodingError U+9371"});
expect(() => {ms932Encoder.encode("\u9372")}).toThrowError({name:"TypeError",message:"EncodingError U+9372"});
expect(() => {ms932Encoder.encode("\u9373")}).toThrowError({name:"TypeError",message:"EncodingError U+9373"});
expect(() => {ms932Encoder.encode("\u9374")}).toThrowError({name:"TypeError",message:"EncodingError U+9374"});
expect([...ms932Encoder.encode("鍵")].join(",")).toBe("140,174"); // U+9375
expect(() => {ms932Encoder.encode("\u9376")}).toThrowError({name:"TypeError",message:"EncodingError U+9376"});
expect(() => {ms932Encoder.encode("\u9377")}).toThrowError({name:"TypeError",message:"EncodingError U+9377"});
expect(() => {ms932Encoder.encode("\u9378")}).toThrowError({name:"TypeError",message:"EncodingError U+9378"});
expect(() => {ms932Encoder.encode("\u9379")}).toThrowError({name:"TypeError",message:"EncodingError U+9379"});
expect(() => {ms932Encoder.encode("\u937A")}).toThrowError({name:"TypeError",message:"EncodingError U+937A"});
expect(() => {ms932Encoder.encode("\u937B")}).toThrowError({name:"TypeError",message:"EncodingError U+937B"});
expect([...ms932Encoder.encode("鍼")].join(",")).toBe("232,73"); // U+937C
expect(() => {ms932Encoder.encode("\u937D")}).toThrowError({name:"TypeError",message:"EncodingError U+937D"});
expect([...ms932Encoder.encode("鍾")].join(",")).toBe("143,223"); // U+937E
expect(() => {ms932Encoder.encode("\u937F")}).toThrowError({name:"TypeError",message:"EncodingError U+937F"});
expect(() => {ms932Encoder.encode("\u9380")}).toThrowError({name:"TypeError",message:"EncodingError U+9380"});
expect(() => {ms932Encoder.encode("\u9381")}).toThrowError({name:"TypeError",message:"EncodingError U+9381"});
expect(() => {ms932Encoder.encode("\u9382")}).toThrowError({name:"TypeError",message:"EncodingError U+9382"});
expect(() => {ms932Encoder.encode("\u9383")}).toThrowError({name:"TypeError",message:"EncodingError U+9383"});
expect(() => {ms932Encoder.encode("\u9384")}).toThrowError({name:"TypeError",message:"EncodingError U+9384"});
expect(() => {ms932Encoder.encode("\u9385")}).toThrowError({name:"TypeError",message:"EncodingError U+9385"});
expect(() => {ms932Encoder.encode("\u9386")}).toThrowError({name:"TypeError",message:"EncodingError U+9386"});
expect(() => {ms932Encoder.encode("\u9387")}).toThrowError({name:"TypeError",message:"EncodingError U+9387"});
expect(() => {ms932Encoder.encode("\u9388")}).toThrowError({name:"TypeError",message:"EncodingError U+9388"});
expect(() => {ms932Encoder.encode("\u9389")}).toThrowError({name:"TypeError",message:"EncodingError U+9389"});
expect(() => {ms932Encoder.encode("\u938A")}).toThrowError({name:"TypeError",message:"EncodingError U+938A"});
expect(() => {ms932Encoder.encode("\u938B")}).toThrowError({name:"TypeError",message:"EncodingError U+938B"});
expect([...ms932Encoder.encode("鎌")].join(",")).toBe("138,153"); // U+938C
expect(() => {ms932Encoder.encode("\u938D")}).toThrowError({name:"TypeError",message:"EncodingError U+938D"});
expect(() => {ms932Encoder.encode("\u938E")}).toThrowError({name:"TypeError",message:"EncodingError U+938E"});
expect(() => {ms932Encoder.encode("\u938F")}).toThrowError({name:"TypeError",message:"EncodingError U+938F"});
expect(() => {ms932Encoder.encode("\u9390")}).toThrowError({name:"TypeError",message:"EncodingError U+9390"});
expect(() => {ms932Encoder.encode("\u9391")}).toThrowError({name:"TypeError",message:"EncodingError U+9391"});
expect(() => {ms932Encoder.encode("\u9392")}).toThrowError({name:"TypeError",message:"EncodingError U+9392"});
expect(() => {ms932Encoder.encode("\u9393")}).toThrowError({name:"TypeError",message:"EncodingError U+9393"});
expect([...ms932Encoder.encode("鎔")].join(",")).toBe("232,79"); // U+9394
expect(() => {ms932Encoder.encode("\u9395")}).toThrowError({name:"TypeError",message:"EncodingError U+9395"});
expect([...ms932Encoder.encode("鎖鎗")].join(",")).toBe("141,189,145,153"); // U+9396
expect(() => {ms932Encoder.encode("\u9398")}).toThrowError({name:"TypeError",message:"EncodingError U+9398"});
expect(() => {ms932Encoder.encode("\u9399")}).toThrowError({name:"TypeError",message:"EncodingError U+9399"});
expect([...ms932Encoder.encode("鎚")].join(",")).toBe("146,200"); // U+939A
expect(() => {ms932Encoder.encode("\u939B")}).toThrowError({name:"TypeError",message:"EncodingError U+939B"});
expect(() => {ms932Encoder.encode("\u939C")}).toThrowError({name:"TypeError",message:"EncodingError U+939C"});
expect(() => {ms932Encoder.encode("\u939D")}).toThrowError({name:"TypeError",message:"EncodingError U+939D"});
expect(() => {ms932Encoder.encode("\u939E")}).toThrowError({name:"TypeError",message:"EncodingError U+939E"});
expect(() => {ms932Encoder.encode("\u939F")}).toThrowError({name:"TypeError",message:"EncodingError U+939F"});
expect(() => {ms932Encoder.encode("\u93A0")}).toThrowError({name:"TypeError",message:"EncodingError U+93A0"});
expect(() => {ms932Encoder.encode("\u93A1")}).toThrowError({name:"TypeError",message:"EncodingError U+93A1"});
expect(() => {ms932Encoder.encode("\u93A2")}).toThrowError({name:"TypeError",message:"EncodingError U+93A2"});
expect(() => {ms932Encoder.encode("\u93A3")}).toThrowError({name:"TypeError",message:"EncodingError U+93A3"});
expect([...ms932Encoder.encode("鎤")].join(",")).toBe("251,225"); // U+93A4
expect(() => {ms932Encoder.encode("\u93A5")}).toThrowError({name:"TypeError",message:"EncodingError U+93A5"});
expect(() => {ms932Encoder.encode("\u93A6")}).toThrowError({name:"TypeError",message:"EncodingError U+93A6"});
expect([...ms932Encoder.encode("鎧")].join(",")).toBe("138,90"); // U+93A7
expect(() => {ms932Encoder.encode("\u93A8")}).toThrowError({name:"TypeError",message:"EncodingError U+93A8"});
expect(() => {ms932Encoder.encode("\u93A9")}).toThrowError({name:"TypeError",message:"EncodingError U+93A9"});
expect(() => {ms932Encoder.encode("\u93AA")}).toThrowError({name:"TypeError",message:"EncodingError U+93AA"});
expect(() => {ms932Encoder.encode("\u93AB")}).toThrowError({name:"TypeError",message:"EncodingError U+93AB"});
expect([...ms932Encoder.encode("鎬鎭鎮")].join(",")).toBe("232,77,232,78,146,193"); // U+93AC
expect(() => {ms932Encoder.encode("\u93AF")}).toThrowError({name:"TypeError",message:"EncodingError U+93AF"});
expect([...ms932Encoder.encode("鎰")].join(",")).toBe("232,76"); // U+93B0
expect(() => {ms932Encoder.encode("\u93B1")}).toThrowError({name:"TypeError",message:"EncodingError U+93B1"});
expect(() => {ms932Encoder.encode("\u93B2")}).toThrowError({name:"TypeError",message:"EncodingError U+93B2"});
expect(() => {ms932Encoder.encode("\u93B3")}).toThrowError({name:"TypeError",message:"EncodingError U+93B3"});
expect(() => {ms932Encoder.encode("\u93B4")}).toThrowError({name:"TypeError",message:"EncodingError U+93B4"});
expect(() => {ms932Encoder.encode("\u93B5")}).toThrowError({name:"TypeError",message:"EncodingError U+93B5"});
expect(() => {ms932Encoder.encode("\u93B6")}).toThrowError({name:"TypeError",message:"EncodingError U+93B6"});
expect(() => {ms932Encoder.encode("\u93B7")}).toThrowError({name:"TypeError",message:"EncodingError U+93B7"});
expect(() => {ms932Encoder.encode("\u93B8")}).toThrowError({name:"TypeError",message:"EncodingError U+93B8"});
expect([...ms932Encoder.encode("鎹")].join(",")).toBe("232,80"); // U+93B9
expect(() => {ms932Encoder.encode("\u93BA")}).toThrowError({name:"TypeError",message:"EncodingError U+93BA"});
expect(() => {ms932Encoder.encode("\u93BB")}).toThrowError({name:"TypeError",message:"EncodingError U+93BB"});
expect(() => {ms932Encoder.encode("\u93BC")}).toThrowError({name:"TypeError",message:"EncodingError U+93BC"});
expect(() => {ms932Encoder.encode("\u93BD")}).toThrowError({name:"TypeError",message:"EncodingError U+93BD"});
expect(() => {ms932Encoder.encode("\u93BE")}).toThrowError({name:"TypeError",message:"EncodingError U+93BE"});
expect(() => {ms932Encoder.encode("\u93BF")}).toThrowError({name:"TypeError",message:"EncodingError U+93BF"});
expect(() => {ms932Encoder.encode("\u93C0")}).toThrowError({name:"TypeError",message:"EncodingError U+93C0"});
expect(() => {ms932Encoder.encode("\u93C1")}).toThrowError({name:"TypeError",message:"EncodingError U+93C1"});
expect(() => {ms932Encoder.encode("\u93C2")}).toThrowError({name:"TypeError",message:"EncodingError U+93C2"});
expect([...ms932Encoder.encode("鏃")].join(",")).toBe("232,86"); // U+93C3
expect(() => {ms932Encoder.encode("\u93C4")}).toThrowError({name:"TypeError",message:"EncodingError U+93C4"});
expect(() => {ms932Encoder.encode("\u93C5")}).toThrowError({name:"TypeError",message:"EncodingError U+93C5"});
expect([...ms932Encoder.encode("鏆")].join(",")).toBe("251,226"); // U+93C6
expect(() => {ms932Encoder.encode("\u93C7")}).toThrowError({name:"TypeError",message:"EncodingError U+93C7"});
expect([...ms932Encoder.encode("鏈")].join(",")).toBe("232,89"); // U+93C8
expect(() => {ms932Encoder.encode("\u93C9")}).toThrowError({name:"TypeError",message:"EncodingError U+93C9"});
expect(() => {ms932Encoder.encode("\u93CA")}).toThrowError({name:"TypeError",message:"EncodingError U+93CA"});
expect(() => {ms932Encoder.encode("\u93CB")}).toThrowError({name:"TypeError",message:"EncodingError U+93CB"});
expect(() => {ms932Encoder.encode("\u93CC")}).toThrowError({name:"TypeError",message:"EncodingError U+93CC"});
expect(() => {ms932Encoder.encode("\u93CD")}).toThrowError({name:"TypeError",message:"EncodingError U+93CD"});
expect(() => {ms932Encoder.encode("\u93CE")}).toThrowError({name:"TypeError",message:"EncodingError U+93CE"});
expect(() => {ms932Encoder.encode("\u93CF")}).toThrowError({name:"TypeError",message:"EncodingError U+93CF"});
expect([...ms932Encoder.encode("鏐鏑")].join(",")).toBe("232,88,147,76"); // U+93D0
expect(() => {ms932Encoder.encode("\u93D2")}).toThrowError({name:"TypeError",message:"EncodingError U+93D2"});
expect(() => {ms932Encoder.encode("\u93D3")}).toThrowError({name:"TypeError",message:"EncodingError U+93D3"});
expect(() => {ms932Encoder.encode("\u93D4")}).toThrowError({name:"TypeError",message:"EncodingError U+93D4"});
expect(() => {ms932Encoder.encode("\u93D5")}).toThrowError({name:"TypeError",message:"EncodingError U+93D5"});
expect([...ms932Encoder.encode("鏖鏗鏘")].join(",")).toBe("232,81,232,82,232,85"); // U+93D6
expect(() => {ms932Encoder.encode("\u93D9")}).toThrowError({name:"TypeError",message:"EncodingError U+93D9"});
expect(() => {ms932Encoder.encode("\u93DA")}).toThrowError({name:"TypeError",message:"EncodingError U+93DA"});
expect(() => {ms932Encoder.encode("\u93DB")}).toThrowError({name:"TypeError",message:"EncodingError U+93DB"});
expect(() => {ms932Encoder.encode("\u93DC")}).toThrowError({name:"TypeError",message:"EncodingError U+93DC"});
expect([...ms932Encoder.encode("鏝鏞")].join(",")).toBe("232,87,251,227"); // U+93DD
expect(() => {ms932Encoder.encode("\u93DF")}).toThrowError({name:"TypeError",message:"EncodingError U+93DF"});
expect(() => {ms932Encoder.encode("\u93E0")}).toThrowError({name:"TypeError",message:"EncodingError U+93E0"});
expect([...ms932Encoder.encode("鏡")].join(",")).toBe("139,190"); // U+93E1
expect(() => {ms932Encoder.encode("\u93E2")}).toThrowError({name:"TypeError",message:"EncodingError U+93E2"});
expect(() => {ms932Encoder.encode("\u93E3")}).toThrowError({name:"TypeError",message:"EncodingError U+93E3"});
expect([...ms932Encoder.encode("鏤鏥")].join(",")).toBe("232,90,232,84"); // U+93E4
expect(() => {ms932Encoder.encode("\u93E6")}).toThrowError({name:"TypeError",message:"EncodingError U+93E6"});
expect(() => {ms932Encoder.encode("\u93E7")}).toThrowError({name:"TypeError",message:"EncodingError U+93E7"});
expect([...ms932Encoder.encode("鏨")].join(",")).toBe("232,83"); // U+93E8
expect(() => {ms932Encoder.encode("\u93E9")}).toThrowError({name:"TypeError",message:"EncodingError U+93E9"});
expect(() => {ms932Encoder.encode("\u93EA")}).toThrowError({name:"TypeError",message:"EncodingError U+93EA"});
expect(() => {ms932Encoder.encode("\u93EB")}).toThrowError({name:"TypeError",message:"EncodingError U+93EB"});
expect(() => {ms932Encoder.encode("\u93EC")}).toThrowError({name:"TypeError",message:"EncodingError U+93EC"});
expect(() => {ms932Encoder.encode("\u93ED")}).toThrowError({name:"TypeError",message:"EncodingError U+93ED"});
expect(() => {ms932Encoder.encode("\u93EE")}).toThrowError({name:"TypeError",message:"EncodingError U+93EE"});
expect(() => {ms932Encoder.encode("\u93EF")}).toThrowError({name:"TypeError",message:"EncodingError U+93EF"});
expect(() => {ms932Encoder.encode("\u93F0")}).toThrowError({name:"TypeError",message:"EncodingError U+93F0"});
expect(() => {ms932Encoder.encode("\u93F1")}).toThrowError({name:"TypeError",message:"EncodingError U+93F1"});
expect(() => {ms932Encoder.encode("\u93F2")}).toThrowError({name:"TypeError",message:"EncodingError U+93F2"});
expect(() => {ms932Encoder.encode("\u93F3")}).toThrowError({name:"TypeError",message:"EncodingError U+93F3"});
expect(() => {ms932Encoder.encode("\u93F4")}).toThrowError({name:"TypeError",message:"EncodingError U+93F4"});
expect(() => {ms932Encoder.encode("\u93F5")}).toThrowError({name:"TypeError",message:"EncodingError U+93F5"});
expect(() => {ms932Encoder.encode("\u93F6")}).toThrowError({name:"TypeError",message:"EncodingError U+93F6"});
expect(() => {ms932Encoder.encode("\u93F7")}).toThrowError({name:"TypeError",message:"EncodingError U+93F7"});
expect([...ms932Encoder.encode("鏸")].join(",")).toBe("251,228"); // U+93F8
expect(() => {ms932Encoder.encode("\u93F9")}).toThrowError({name:"TypeError",message:"EncodingError U+93F9"});
expect(() => {ms932Encoder.encode("\u93FA")}).toThrowError({name:"TypeError",message:"EncodingError U+93FA"});
expect(() => {ms932Encoder.encode("\u93FB")}).toThrowError({name:"TypeError",message:"EncodingError U+93FB"});
expect(() => {ms932Encoder.encode("\u93FC")}).toThrowError({name:"TypeError",message:"EncodingError U+93FC"});
expect(() => {ms932Encoder.encode("\u93FD")}).toThrowError({name:"TypeError",message:"EncodingError U+93FD"});
expect(() => {ms932Encoder.encode("\u93FE")}).toThrowError({name:"TypeError",message:"EncodingError U+93FE"});
expect(() => {ms932Encoder.encode("\u93FF")}).toThrowError({name:"TypeError",message:"EncodingError U+93FF"});
expect(() => {ms932Encoder.encode("\u9400")}).toThrowError({name:"TypeError",message:"EncodingError U+9400"});
expect(() => {ms932Encoder.encode("\u9401")}).toThrowError({name:"TypeError",message:"EncodingError U+9401"});
expect(() => {ms932Encoder.encode("\u9402")}).toThrowError({name:"TypeError",message:"EncodingError U+9402"});
expect([...ms932Encoder.encode("鐃")].join(",")).toBe("232,94"); // U+9403
expect(() => {ms932Encoder.encode("\u9404")}).toThrowError({name:"TypeError",message:"EncodingError U+9404"});
expect(() => {ms932Encoder.encode("\u9405")}).toThrowError({name:"TypeError",message:"EncodingError U+9405"});
expect(() => {ms932Encoder.encode("\u9406")}).toThrowError({name:"TypeError",message:"EncodingError U+9406"});
expect([...ms932Encoder.encode("鐇")].join(",")).toBe("232,95"); // U+9407
expect(() => {ms932Encoder.encode("\u9408")}).toThrowError({name:"TypeError",message:"EncodingError U+9408"});
expect(() => {ms932Encoder.encode("\u9409")}).toThrowError({name:"TypeError",message:"EncodingError U+9409"});
expect(() => {ms932Encoder.encode("\u940A")}).toThrowError({name:"TypeError",message:"EncodingError U+940A"});
expect(() => {ms932Encoder.encode("\u940B")}).toThrowError({name:"TypeError",message:"EncodingError U+940B"});
expect(() => {ms932Encoder.encode("\u940C")}).toThrowError({name:"TypeError",message:"EncodingError U+940C"});
expect(() => {ms932Encoder.encode("\u940D")}).toThrowError({name:"TypeError",message:"EncodingError U+940D"});
expect(() => {ms932Encoder.encode("\u940E")}).toThrowError({name:"TypeError",message:"EncodingError U+940E"});
expect(() => {ms932Encoder.encode("\u940F")}).toThrowError({name:"TypeError",message:"EncodingError U+940F"});
expect([...ms932Encoder.encode("鐐")].join(",")).toBe("232,96"); // U+9410
expect(() => {ms932Encoder.encode("\u9411")}).toThrowError({name:"TypeError",message:"EncodingError U+9411"});
expect(() => {ms932Encoder.encode("\u9412")}).toThrowError({name:"TypeError",message:"EncodingError U+9412"});
expect([...ms932Encoder.encode("鐓鐔")].join(",")).toBe("232,93,232,92"); // U+9413
expect(() => {ms932Encoder.encode("\u9415")}).toThrowError({name:"TypeError",message:"EncodingError U+9415"});
expect(() => {ms932Encoder.encode("\u9416")}).toThrowError({name:"TypeError",message:"EncodingError U+9416"});
expect(() => {ms932Encoder.encode("\u9417")}).toThrowError({name:"TypeError",message:"EncodingError U+9417"});
expect([...ms932Encoder.encode("鐘鐙鐚")].join(",")).toBe("143,224,147,168,232,91"); // U+9418
expect(() => {ms932Encoder.encode("\u941B")}).toThrowError({name:"TypeError",message:"EncodingError U+941B"});
expect(() => {ms932Encoder.encode("\u941C")}).toThrowError({name:"TypeError",message:"EncodingError U+941C"});
expect(() => {ms932Encoder.encode("\u941D")}).toThrowError({name:"TypeError",message:"EncodingError U+941D"});
expect(() => {ms932Encoder.encode("\u941E")}).toThrowError({name:"TypeError",message:"EncodingError U+941E"});
expect(() => {ms932Encoder.encode("\u941F")}).toThrowError({name:"TypeError",message:"EncodingError U+941F"});
expect(() => {ms932Encoder.encode("\u9420")}).toThrowError({name:"TypeError",message:"EncodingError U+9420"});
expect([...ms932Encoder.encode("鐡")].join(",")).toBe("232,100"); // U+9421
expect(() => {ms932Encoder.encode("\u9422")}).toThrowError({name:"TypeError",message:"EncodingError U+9422"});
expect(() => {ms932Encoder.encode("\u9423")}).toThrowError({name:"TypeError",message:"EncodingError U+9423"});
expect(() => {ms932Encoder.encode("\u9424")}).toThrowError({name:"TypeError",message:"EncodingError U+9424"});
expect(() => {ms932Encoder.encode("\u9425")}).toThrowError({name:"TypeError",message:"EncodingError U+9425"});
expect(() => {ms932Encoder.encode("\u9426")}).toThrowError({name:"TypeError",message:"EncodingError U+9426"});
expect(() => {ms932Encoder.encode("\u9427")}).toThrowError({name:"TypeError",message:"EncodingError U+9427"});
expect(() => {ms932Encoder.encode("\u9428")}).toThrowError({name:"TypeError",message:"EncodingError U+9428"});
expect(() => {ms932Encoder.encode("\u9429")}).toThrowError({name:"TypeError",message:"EncodingError U+9429"});
expect(() => {ms932Encoder.encode("\u942A")}).toThrowError({name:"TypeError",message:"EncodingError U+942A"});
expect([...ms932Encoder.encode("鐫")].join(",")).toBe("232,98"); // U+942B
expect(() => {ms932Encoder.encode("\u942C")}).toThrowError({name:"TypeError",message:"EncodingError U+942C"});
expect(() => {ms932Encoder.encode("\u942D")}).toThrowError({name:"TypeError",message:"EncodingError U+942D"});
expect(() => {ms932Encoder.encode("\u942E")}).toThrowError({name:"TypeError",message:"EncodingError U+942E"});
expect(() => {ms932Encoder.encode("\u942F")}).toThrowError({name:"TypeError",message:"EncodingError U+942F"});
expect(() => {ms932Encoder.encode("\u9430")}).toThrowError({name:"TypeError",message:"EncodingError U+9430"});
expect([...ms932Encoder.encode("鐱")].join(",")).toBe("251,229"); // U+9431
expect(() => {ms932Encoder.encode("\u9432")}).toThrowError({name:"TypeError",message:"EncodingError U+9432"});
expect(() => {ms932Encoder.encode("\u9433")}).toThrowError({name:"TypeError",message:"EncodingError U+9433"});
expect(() => {ms932Encoder.encode("\u9434")}).toThrowError({name:"TypeError",message:"EncodingError U+9434"});
expect([...ms932Encoder.encode("鐵鐶")].join(",")).toBe("232,99,232,97"); // U+9435
expect(() => {ms932Encoder.encode("\u9437")}).toThrowError({name:"TypeError",message:"EncodingError U+9437"});
expect([...ms932Encoder.encode("鐸")].join(",")).toBe("145,246"); // U+9438
expect(() => {ms932Encoder.encode("\u9439")}).toThrowError({name:"TypeError",message:"EncodingError U+9439"});
expect([...ms932Encoder.encode("鐺")].join(",")).toBe("232,101"); // U+943A
expect(() => {ms932Encoder.encode("\u943B")}).toThrowError({name:"TypeError",message:"EncodingError U+943B"});
expect(() => {ms932Encoder.encode("\u943C")}).toThrowError({name:"TypeError",message:"EncodingError U+943C"});
expect(() => {ms932Encoder.encode("\u943D")}).toThrowError({name:"TypeError",message:"EncodingError U+943D"});
expect(() => {ms932Encoder.encode("\u943E")}).toThrowError({name:"TypeError",message:"EncodingError U+943E"});
expect(() => {ms932Encoder.encode("\u943F")}).toThrowError({name:"TypeError",message:"EncodingError U+943F"});
expect(() => {ms932Encoder.encode("\u9440")}).toThrowError({name:"TypeError",message:"EncodingError U+9440"});
expect([...ms932Encoder.encode("鑁")].join(",")).toBe("232,102"); // U+9441
expect(() => {ms932Encoder.encode("\u9442")}).toThrowError({name:"TypeError",message:"EncodingError U+9442"});
expect(() => {ms932Encoder.encode("\u9443")}).toThrowError({name:"TypeError",message:"EncodingError U+9443"});
expect([...ms932Encoder.encode("鑄鑅")].join(",")).toBe("232,104,251,230"); // U+9444
expect(() => {ms932Encoder.encode("\u9446")}).toThrowError({name:"TypeError",message:"EncodingError U+9446"});
expect(() => {ms932Encoder.encode("\u9447")}).toThrowError({name:"TypeError",message:"EncodingError U+9447"});
expect([...ms932Encoder.encode("鑈")].join(",")).toBe("251,231"); // U+9448
expect(() => {ms932Encoder.encode("\u9449")}).toThrowError({name:"TypeError",message:"EncodingError U+9449"});
expect(() => {ms932Encoder.encode("\u944A")}).toThrowError({name:"TypeError",message:"EncodingError U+944A"});
expect(() => {ms932Encoder.encode("\u944B")}).toThrowError({name:"TypeError",message:"EncodingError U+944B"});
expect(() => {ms932Encoder.encode("\u944C")}).toThrowError({name:"TypeError",message:"EncodingError U+944C"});
expect(() => {ms932Encoder.encode("\u944D")}).toThrowError({name:"TypeError",message:"EncodingError U+944D"});
expect(() => {ms932Encoder.encode("\u944E")}).toThrowError({name:"TypeError",message:"EncodingError U+944E"});
expect(() => {ms932Encoder.encode("\u944F")}).toThrowError({name:"TypeError",message:"EncodingError U+944F"});
expect(() => {ms932Encoder.encode("\u9450")}).toThrowError({name:"TypeError",message:"EncodingError U+9450"});
expect([...ms932Encoder.encode("鑑鑒鑓")].join(",")).toBe("138,211,232,103,150,248"); // U+9451
expect(() => {ms932Encoder.encode("\u9454")}).toThrowError({name:"TypeError",message:"EncodingError U+9454"});
expect(() => {ms932Encoder.encode("\u9455")}).toThrowError({name:"TypeError",message:"EncodingError U+9455"});
expect(() => {ms932Encoder.encode("\u9456")}).toThrowError({name:"TypeError",message:"EncodingError U+9456"});
expect(() => {ms932Encoder.encode("\u9457")}).toThrowError({name:"TypeError",message:"EncodingError U+9457"});
expect(() => {ms932Encoder.encode("\u9458")}).toThrowError({name:"TypeError",message:"EncodingError U+9458"});
expect(() => {ms932Encoder.encode("\u9459")}).toThrowError({name:"TypeError",message:"EncodingError U+9459"});
expect([...ms932Encoder.encode("鑚鑛")].join(",")).toBe("232,115,232,105"); // U+945A
expect(() => {ms932Encoder.encode("\u945C")}).toThrowError({name:"TypeError",message:"EncodingError U+945C"});
expect(() => {ms932Encoder.encode("\u945D")}).toThrowError({name:"TypeError",message:"EncodingError U+945D"});
expect([...ms932Encoder.encode("鑞")].join(",")).toBe("232,108"); // U+945E
expect(() => {ms932Encoder.encode("\u945F")}).toThrowError({name:"TypeError",message:"EncodingError U+945F"});
expect([...ms932Encoder.encode("鑠")].join(",")).toBe("232,106"); // U+9460
expect(() => {ms932Encoder.encode("\u9461")}).toThrowError({name:"TypeError",message:"EncodingError U+9461"});
expect([...ms932Encoder.encode("鑢")].join(",")).toBe("232,107"); // U+9462
expect(() => {ms932Encoder.encode("\u9463")}).toThrowError({name:"TypeError",message:"EncodingError U+9463"});
expect(() => {ms932Encoder.encode("\u9464")}).toThrowError({name:"TypeError",message:"EncodingError U+9464"});
expect(() => {ms932Encoder.encode("\u9465")}).toThrowError({name:"TypeError",message:"EncodingError U+9465"});
expect(() => {ms932Encoder.encode("\u9466")}).toThrowError({name:"TypeError",message:"EncodingError U+9466"});
expect(() => {ms932Encoder.encode("\u9467")}).toThrowError({name:"TypeError",message:"EncodingError U+9467"});
expect(() => {ms932Encoder.encode("\u9468")}).toThrowError({name:"TypeError",message:"EncodingError U+9468"});
expect(() => {ms932Encoder.encode("\u9469")}).toThrowError({name:"TypeError",message:"EncodingError U+9469"});
expect([...ms932Encoder.encode("鑪")].join(",")).toBe("232,109"); // U+946A
expect(() => {ms932Encoder.encode("\u946B")}).toThrowError({name:"TypeError",message:"EncodingError U+946B"});
expect(() => {ms932Encoder.encode("\u946C")}).toThrowError({name:"TypeError",message:"EncodingError U+946C"});
expect(() => {ms932Encoder.encode("\u946D")}).toThrowError({name:"TypeError",message:"EncodingError U+946D"});
expect(() => {ms932Encoder.encode("\u946E")}).toThrowError({name:"TypeError",message:"EncodingError U+946E"});
expect(() => {ms932Encoder.encode("\u946F")}).toThrowError({name:"TypeError",message:"EncodingError U+946F"});
expect([...ms932Encoder.encode("鑰")].join(",")).toBe("232,111"); // U+9470
expect(() => {ms932Encoder.encode("\u9471")}).toThrowError({name:"TypeError",message:"EncodingError U+9471"});
expect(() => {ms932Encoder.encode("\u9472")}).toThrowError({name:"TypeError",message:"EncodingError U+9472"});
expect(() => {ms932Encoder.encode("\u9473")}).toThrowError({name:"TypeError",message:"EncodingError U+9473"});
expect(() => {ms932Encoder.encode("\u9474")}).toThrowError({name:"TypeError",message:"EncodingError U+9474"});
expect([...ms932Encoder.encode("鑵")].join(",")).toBe("232,112"); // U+9475
expect(() => {ms932Encoder.encode("\u9476")}).toThrowError({name:"TypeError",message:"EncodingError U+9476"});
expect([...ms932Encoder.encode("鑷")].join(",")).toBe("232,113"); // U+9477
expect(() => {ms932Encoder.encode("\u9478")}).toThrowError({name:"TypeError",message:"EncodingError U+9478"});
expect(() => {ms932Encoder.encode("\u9479")}).toThrowError({name:"TypeError",message:"EncodingError U+9479"});
expect(() => {ms932Encoder.encode("\u947A")}).toThrowError({name:"TypeError",message:"EncodingError U+947A"});
expect(() => {ms932Encoder.encode("\u947B")}).toThrowError({name:"TypeError",message:"EncodingError U+947B"});
expect([...ms932Encoder.encode("鑼鑽鑾鑿")].join(",")).toBe("232,116,232,114,232,117,232,119"); // U+947C
expect(() => {ms932Encoder.encode("\u9480")}).toThrowError({name:"TypeError",message:"EncodingError U+9480"});
expect([...ms932Encoder.encode("钁")].join(",")).toBe("232,118"); // U+9481
expect(() => {ms932Encoder.encode("\u9482")}).toThrowError({name:"TypeError",message:"EncodingError U+9482"});
expect(() => {ms932Encoder.encode("\u9483")}).toThrowError({name:"TypeError",message:"EncodingError U+9483"});
expect(() => {ms932Encoder.encode("\u9484")}).toThrowError({name:"TypeError",message:"EncodingError U+9484"});
expect(() => {ms932Encoder.encode("\u9485")}).toThrowError({name:"TypeError",message:"EncodingError U+9485"});
expect(() => {ms932Encoder.encode("\u9486")}).toThrowError({name:"TypeError",message:"EncodingError U+9486"});
expect(() => {ms932Encoder.encode("\u9487")}).toThrowError({name:"TypeError",message:"EncodingError U+9487"});
expect(() => {ms932Encoder.encode("\u9488")}).toThrowError({name:"TypeError",message:"EncodingError U+9488"});
expect(() => {ms932Encoder.encode("\u9489")}).toThrowError({name:"TypeError",message:"EncodingError U+9489"});
expect(() => {ms932Encoder.encode("\u948A")}).toThrowError({name:"TypeError",message:"EncodingError U+948A"});
expect(() => {ms932Encoder.encode("\u948B")}).toThrowError({name:"TypeError",message:"EncodingError U+948B"});
expect(() => {ms932Encoder.encode("\u948C")}).toThrowError({name:"TypeError",message:"EncodingError U+948C"});
expect(() => {ms932Encoder.encode("\u948D")}).toThrowError({name:"TypeError",message:"EncodingError U+948D"});
expect(() => {ms932Encoder.encode("\u948E")}).toThrowError({name:"TypeError",message:"EncodingError U+948E"});
expect(() => {ms932Encoder.encode("\u948F")}).toThrowError({name:"TypeError",message:"EncodingError U+948F"});
expect(() => {ms932Encoder.encode("\u9490")}).toThrowError({name:"TypeError",message:"EncodingError U+9490"});
expect(() => {ms932Encoder.encode("\u9491")}).toThrowError({name:"TypeError",message:"EncodingError U+9491"});
expect(() => {ms932Encoder.encode("\u9492")}).toThrowError({name:"TypeError",message:"EncodingError U+9492"});
expect(() => {ms932Encoder.encode("\u9493")}).toThrowError({name:"TypeError",message:"EncodingError U+9493"});
expect(() => {ms932Encoder.encode("\u9494")}).toThrowError({name:"TypeError",message:"EncodingError U+9494"});
expect(() => {ms932Encoder.encode("\u9495")}).toThrowError({name:"TypeError",message:"EncodingError U+9495"});
expect(() => {ms932Encoder.encode("\u9496")}).toThrowError({name:"TypeError",message:"EncodingError U+9496"});
expect(() => {ms932Encoder.encode("\u9497")}).toThrowError({name:"TypeError",message:"EncodingError U+9497"});
expect(() => {ms932Encoder.encode("\u9498")}).toThrowError({name:"TypeError",message:"EncodingError U+9498"});
expect(() => {ms932Encoder.encode("\u9499")}).toThrowError({name:"TypeError",message:"EncodingError U+9499"});
expect(() => {ms932Encoder.encode("\u949A")}).toThrowError({name:"TypeError",message:"EncodingError U+949A"});
expect(() => {ms932Encoder.encode("\u949B")}).toThrowError({name:"TypeError",message:"EncodingError U+949B"});
expect(() => {ms932Encoder.encode("\u949C")}).toThrowError({name:"TypeError",message:"EncodingError U+949C"});
expect(() => {ms932Encoder.encode("\u949D")}).toThrowError({name:"TypeError",message:"EncodingError U+949D"});
expect(() => {ms932Encoder.encode("\u949E")}).toThrowError({name:"TypeError",message:"EncodingError U+949E"});
expect(() => {ms932Encoder.encode("\u949F")}).toThrowError({name:"TypeError",message:"EncodingError U+949F"});
expect(() => {ms932Encoder.encode("\u94A0")}).toThrowError({name:"TypeError",message:"EncodingError U+94A0"});
expect(() => {ms932Encoder.encode("\u94A1")}).toThrowError({name:"TypeError",message:"EncodingError U+94A1"});
expect(() => {ms932Encoder.encode("\u94A2")}).toThrowError({name:"TypeError",message:"EncodingError U+94A2"});
expect(() => {ms932Encoder.encode("\u94A3")}).toThrowError({name:"TypeError",message:"EncodingError U+94A3"});
expect(() => {ms932Encoder.encode("\u94A4")}).toThrowError({name:"TypeError",message:"EncodingError U+94A4"});
expect(() => {ms932Encoder.encode("\u94A5")}).toThrowError({name:"TypeError",message:"EncodingError U+94A5"});
expect(() => {ms932Encoder.encode("\u94A6")}).toThrowError({name:"TypeError",message:"EncodingError U+94A6"});
expect(() => {ms932Encoder.encode("\u94A7")}).toThrowError({name:"TypeError",message:"EncodingError U+94A7"});
expect(() => {ms932Encoder.encode("\u94A8")}).toThrowError({name:"TypeError",message:"EncodingError U+94A8"});
expect(() => {ms932Encoder.encode("\u94A9")}).toThrowError({name:"TypeError",message:"EncodingError U+94A9"});
expect(() => {ms932Encoder.encode("\u94AA")}).toThrowError({name:"TypeError",message:"EncodingError U+94AA"});
expect(() => {ms932Encoder.encode("\u94AB")}).toThrowError({name:"TypeError",message:"EncodingError U+94AB"});
expect(() => {ms932Encoder.encode("\u94AC")}).toThrowError({name:"TypeError",message:"EncodingError U+94AC"});
expect(() => {ms932Encoder.encode("\u94AD")}).toThrowError({name:"TypeError",message:"EncodingError U+94AD"});
expect(() => {ms932Encoder.encode("\u94AE")}).toThrowError({name:"TypeError",message:"EncodingError U+94AE"});
expect(() => {ms932Encoder.encode("\u94AF")}).toThrowError({name:"TypeError",message:"EncodingError U+94AF"});
expect(() => {ms932Encoder.encode("\u94B0")}).toThrowError({name:"TypeError",message:"EncodingError U+94B0"});
expect(() => {ms932Encoder.encode("\u94B1")}).toThrowError({name:"TypeError",message:"EncodingError U+94B1"});
expect(() => {ms932Encoder.encode("\u94B2")}).toThrowError({name:"TypeError",message:"EncodingError U+94B2"});
expect(() => {ms932Encoder.encode("\u94B3")}).toThrowError({name:"TypeError",message:"EncodingError U+94B3"});
expect(() => {ms932Encoder.encode("\u94B4")}).toThrowError({name:"TypeError",message:"EncodingError U+94B4"});
expect(() => {ms932Encoder.encode("\u94B5")}).toThrowError({name:"TypeError",message:"EncodingError U+94B5"});
expect(() => {ms932Encoder.encode("\u94B6")}).toThrowError({name:"TypeError",message:"EncodingError U+94B6"});
expect(() => {ms932Encoder.encode("\u94B7")}).toThrowError({name:"TypeError",message:"EncodingError U+94B7"});
expect(() => {ms932Encoder.encode("\u94B8")}).toThrowError({name:"TypeError",message:"EncodingError U+94B8"});
expect(() => {ms932Encoder.encode("\u94B9")}).toThrowError({name:"TypeError",message:"EncodingError U+94B9"});
expect(() => {ms932Encoder.encode("\u94BA")}).toThrowError({name:"TypeError",message:"EncodingError U+94BA"});
expect(() => {ms932Encoder.encode("\u94BB")}).toThrowError({name:"TypeError",message:"EncodingError U+94BB"});
expect(() => {ms932Encoder.encode("\u94BC")}).toThrowError({name:"TypeError",message:"EncodingError U+94BC"});
expect(() => {ms932Encoder.encode("\u94BD")}).toThrowError({name:"TypeError",message:"EncodingError U+94BD"});
expect(() => {ms932Encoder.encode("\u94BE")}).toThrowError({name:"TypeError",message:"EncodingError U+94BE"});
expect(() => {ms932Encoder.encode("\u94BF")}).toThrowError({name:"TypeError",message:"EncodingError U+94BF"});
expect(() => {ms932Encoder.encode("\u94C0")}).toThrowError({name:"TypeError",message:"EncodingError U+94C0"});
expect(() => {ms932Encoder.encode("\u94C1")}).toThrowError({name:"TypeError",message:"EncodingError U+94C1"});
expect(() => {ms932Encoder.encode("\u94C2")}).toThrowError({name:"TypeError",message:"EncodingError U+94C2"});
expect(() => {ms932Encoder.encode("\u94C3")}).toThrowError({name:"TypeError",message:"EncodingError U+94C3"});
expect(() => {ms932Encoder.encode("\u94C4")}).toThrowError({name:"TypeError",message:"EncodingError U+94C4"});
expect(() => {ms932Encoder.encode("\u94C5")}).toThrowError({name:"TypeError",message:"EncodingError U+94C5"});
expect(() => {ms932Encoder.encode("\u94C6")}).toThrowError({name:"TypeError",message:"EncodingError U+94C6"});
expect(() => {ms932Encoder.encode("\u94C7")}).toThrowError({name:"TypeError",message:"EncodingError U+94C7"});
expect(() => {ms932Encoder.encode("\u94C8")}).toThrowError({name:"TypeError",message:"EncodingError U+94C8"});
expect(() => {ms932Encoder.encode("\u94C9")}).toThrowError({name:"TypeError",message:"EncodingError U+94C9"});
expect(() => {ms932Encoder.encode("\u94CA")}).toThrowError({name:"TypeError",message:"EncodingError U+94CA"});
expect(() => {ms932Encoder.encode("\u94CB")}).toThrowError({name:"TypeError",message:"EncodingError U+94CB"});
expect(() => {ms932Encoder.encode("\u94CC")}).toThrowError({name:"TypeError",message:"EncodingError U+94CC"});
expect(() => {ms932Encoder.encode("\u94CD")}).toThrowError({name:"TypeError",message:"EncodingError U+94CD"});
expect(() => {ms932Encoder.encode("\u94CE")}).toThrowError({name:"TypeError",message:"EncodingError U+94CE"});
expect(() => {ms932Encoder.encode("\u94CF")}).toThrowError({name:"TypeError",message:"EncodingError U+94CF"});
expect(() => {ms932Encoder.encode("\u94D0")}).toThrowError({name:"TypeError",message:"EncodingError U+94D0"});
expect(() => {ms932Encoder.encode("\u94D1")}).toThrowError({name:"TypeError",message:"EncodingError U+94D1"});
expect(() => {ms932Encoder.encode("\u94D2")}).toThrowError({name:"TypeError",message:"EncodingError U+94D2"});
expect(() => {ms932Encoder.encode("\u94D3")}).toThrowError({name:"TypeError",message:"EncodingError U+94D3"});
expect(() => {ms932Encoder.encode("\u94D4")}).toThrowError({name:"TypeError",message:"EncodingError U+94D4"});
expect(() => {ms932Encoder.encode("\u94D5")}).toThrowError({name:"TypeError",message:"EncodingError U+94D5"});
expect(() => {ms932Encoder.encode("\u94D6")}).toThrowError({name:"TypeError",message:"EncodingError U+94D6"});
expect(() => {ms932Encoder.encode("\u94D7")}).toThrowError({name:"TypeError",message:"EncodingError U+94D7"});
expect(() => {ms932Encoder.encode("\u94D8")}).toThrowError({name:"TypeError",message:"EncodingError U+94D8"});
expect(() => {ms932Encoder.encode("\u94D9")}).toThrowError({name:"TypeError",message:"EncodingError U+94D9"});
expect(() => {ms932Encoder.encode("\u94DA")}).toThrowError({name:"TypeError",message:"EncodingError U+94DA"});
expect(() => {ms932Encoder.encode("\u94DB")}).toThrowError({name:"TypeError",message:"EncodingError U+94DB"});
expect(() => {ms932Encoder.encode("\u94DC")}).toThrowError({name:"TypeError",message:"EncodingError U+94DC"});
expect(() => {ms932Encoder.encode("\u94DD")}).toThrowError({name:"TypeError",message:"EncodingError U+94DD"});
expect(() => {ms932Encoder.encode("\u94DE")}).toThrowError({name:"TypeError",message:"EncodingError U+94DE"});
expect(() => {ms932Encoder.encode("\u94DF")}).toThrowError({name:"TypeError",message:"EncodingError U+94DF"});
expect(() => {ms932Encoder.encode("\u94E0")}).toThrowError({name:"TypeError",message:"EncodingError U+94E0"});
expect(() => {ms932Encoder.encode("\u94E1")}).toThrowError({name:"TypeError",message:"EncodingError U+94E1"});
expect(() => {ms932Encoder.encode("\u94E2")}).toThrowError({name:"TypeError",message:"EncodingError U+94E2"});
expect(() => {ms932Encoder.encode("\u94E3")}).toThrowError({name:"TypeError",message:"EncodingError U+94E3"});
expect(() => {ms932Encoder.encode("\u94E4")}).toThrowError({name:"TypeError",message:"EncodingError U+94E4"});
expect(() => {ms932Encoder.encode("\u94E5")}).toThrowError({name:"TypeError",message:"EncodingError U+94E5"});
expect(() => {ms932Encoder.encode("\u94E6")}).toThrowError({name:"TypeError",message:"EncodingError U+94E6"});
expect(() => {ms932Encoder.encode("\u94E7")}).toThrowError({name:"TypeError",message:"EncodingError U+94E7"});
expect(() => {ms932Encoder.encode("\u94E8")}).toThrowError({name:"TypeError",message:"EncodingError U+94E8"});
expect(() => {ms932Encoder.encode("\u94E9")}).toThrowError({name:"TypeError",message:"EncodingError U+94E9"});
expect(() => {ms932Encoder.encode("\u94EA")}).toThrowError({name:"TypeError",message:"EncodingError U+94EA"});
expect(() => {ms932Encoder.encode("\u94EB")}).toThrowError({name:"TypeError",message:"EncodingError U+94EB"});
expect(() => {ms932Encoder.encode("\u94EC")}).toThrowError({name:"TypeError",message:"EncodingError U+94EC"});
expect(() => {ms932Encoder.encode("\u94ED")}).toThrowError({name:"TypeError",message:"EncodingError U+94ED"});
expect(() => {ms932Encoder.encode("\u94EE")}).toThrowError({name:"TypeError",message:"EncodingError U+94EE"});
expect(() => {ms932Encoder.encode("\u94EF")}).toThrowError({name:"TypeError",message:"EncodingError U+94EF"});
expect(() => {ms932Encoder.encode("\u94F0")}).toThrowError({name:"TypeError",message:"EncodingError U+94F0"});
expect(() => {ms932Encoder.encode("\u94F1")}).toThrowError({name:"TypeError",message:"EncodingError U+94F1"});
expect(() => {ms932Encoder.encode("\u94F2")}).toThrowError({name:"TypeError",message:"EncodingError U+94F2"});
expect(() => {ms932Encoder.encode("\u94F3")}).toThrowError({name:"TypeError",message:"EncodingError U+94F3"});
expect(() => {ms932Encoder.encode("\u94F4")}).toThrowError({name:"TypeError",message:"EncodingError U+94F4"});
expect(() => {ms932Encoder.encode("\u94F5")}).toThrowError({name:"TypeError",message:"EncodingError U+94F5"});
expect(() => {ms932Encoder.encode("\u94F6")}).toThrowError({name:"TypeError",message:"EncodingError U+94F6"});
expect(() => {ms932Encoder.encode("\u94F7")}).toThrowError({name:"TypeError",message:"EncodingError U+94F7"});
expect(() => {ms932Encoder.encode("\u94F8")}).toThrowError({name:"TypeError",message:"EncodingError U+94F8"});
expect(() => {ms932Encoder.encode("\u94F9")}).toThrowError({name:"TypeError",message:"EncodingError U+94F9"});
expect(() => {ms932Encoder.encode("\u94FA")}).toThrowError({name:"TypeError",message:"EncodingError U+94FA"});
expect(() => {ms932Encoder.encode("\u94FB")}).toThrowError({name:"TypeError",message:"EncodingError U+94FB"});
expect(() => {ms932Encoder.encode("\u94FC")}).toThrowError({name:"TypeError",message:"EncodingError U+94FC"});
expect(() => {ms932Encoder.encode("\u94FD")}).toThrowError({name:"TypeError",message:"EncodingError U+94FD"});
expect(() => {ms932Encoder.encode("\u94FE")}).toThrowError({name:"TypeError",message:"EncodingError U+94FE"});
expect(() => {ms932Encoder.encode("\u94FF")}).toThrowError({name:"TypeError",message:"EncodingError U+94FF"});
expect(() => {ms932Encoder.encode("\u9500")}).toThrowError({name:"TypeError",message:"EncodingError U+9500"});
expect(() => {ms932Encoder.encode("\u9501")}).toThrowError({name:"TypeError",message:"EncodingError U+9501"});
expect(() => {ms932Encoder.encode("\u9502")}).toThrowError({name:"TypeError",message:"EncodingError U+9502"});
expect(() => {ms932Encoder.encode("\u9503")}).toThrowError({name:"TypeError",message:"EncodingError U+9503"});
expect(() => {ms932Encoder.encode("\u9504")}).toThrowError({name:"TypeError",message:"EncodingError U+9504"});
expect(() => {ms932Encoder.encode("\u9505")}).toThrowError({name:"TypeError",message:"EncodingError U+9505"});
expect(() => {ms932Encoder.encode("\u9506")}).toThrowError({name:"TypeError",message:"EncodingError U+9506"});
expect(() => {ms932Encoder.encode("\u9507")}).toThrowError({name:"TypeError",message:"EncodingError U+9507"});
expect(() => {ms932Encoder.encode("\u9508")}).toThrowError({name:"TypeError",message:"EncodingError U+9508"});
expect(() => {ms932Encoder.encode("\u9509")}).toThrowError({name:"TypeError",message:"EncodingError U+9509"});
expect(() => {ms932Encoder.encode("\u950A")}).toThrowError({name:"TypeError",message:"EncodingError U+950A"});
expect(() => {ms932Encoder.encode("\u950B")}).toThrowError({name:"TypeError",message:"EncodingError U+950B"});
expect(() => {ms932Encoder.encode("\u950C")}).toThrowError({name:"TypeError",message:"EncodingError U+950C"});
expect(() => {ms932Encoder.encode("\u950D")}).toThrowError({name:"TypeError",message:"EncodingError U+950D"});
expect(() => {ms932Encoder.encode("\u950E")}).toThrowError({name:"TypeError",message:"EncodingError U+950E"});
expect(() => {ms932Encoder.encode("\u950F")}).toThrowError({name:"TypeError",message:"EncodingError U+950F"});
expect(() => {ms932Encoder.encode("\u9510")}).toThrowError({name:"TypeError",message:"EncodingError U+9510"});
expect(() => {ms932Encoder.encode("\u9511")}).toThrowError({name:"TypeError",message:"EncodingError U+9511"});
expect(() => {ms932Encoder.encode("\u9512")}).toThrowError({name:"TypeError",message:"EncodingError U+9512"});
expect(() => {ms932Encoder.encode("\u9513")}).toThrowError({name:"TypeError",message:"EncodingError U+9513"});
expect(() => {ms932Encoder.encode("\u9514")}).toThrowError({name:"TypeError",message:"EncodingError U+9514"});
expect(() => {ms932Encoder.encode("\u9515")}).toThrowError({name:"TypeError",message:"EncodingError U+9515"});
expect(() => {ms932Encoder.encode("\u9516")}).toThrowError({name:"TypeError",message:"EncodingError U+9516"});
expect(() => {ms932Encoder.encode("\u9517")}).toThrowError({name:"TypeError",message:"EncodingError U+9517"});
expect(() => {ms932Encoder.encode("\u9518")}).toThrowError({name:"TypeError",message:"EncodingError U+9518"});
expect(() => {ms932Encoder.encode("\u9519")}).toThrowError({name:"TypeError",message:"EncodingError U+9519"});
expect(() => {ms932Encoder.encode("\u951A")}).toThrowError({name:"TypeError",message:"EncodingError U+951A"});
expect(() => {ms932Encoder.encode("\u951B")}).toThrowError({name:"TypeError",message:"EncodingError U+951B"});
expect(() => {ms932Encoder.encode("\u951C")}).toThrowError({name:"TypeError",message:"EncodingError U+951C"});
expect(() => {ms932Encoder.encode("\u951D")}).toThrowError({name:"TypeError",message:"EncodingError U+951D"});
expect(() => {ms932Encoder.encode("\u951E")}).toThrowError({name:"TypeError",message:"EncodingError U+951E"});
expect(() => {ms932Encoder.encode("\u951F")}).toThrowError({name:"TypeError",message:"EncodingError U+951F"});
expect(() => {ms932Encoder.encode("\u9520")}).toThrowError({name:"TypeError",message:"EncodingError U+9520"});
expect(() => {ms932Encoder.encode("\u9521")}).toThrowError({name:"TypeError",message:"EncodingError U+9521"});
expect(() => {ms932Encoder.encode("\u9522")}).toThrowError({name:"TypeError",message:"EncodingError U+9522"});
expect(() => {ms932Encoder.encode("\u9523")}).toThrowError({name:"TypeError",message:"EncodingError U+9523"});
expect(() => {ms932Encoder.encode("\u9524")}).toThrowError({name:"TypeError",message:"EncodingError U+9524"});
expect(() => {ms932Encoder.encode("\u9525")}).toThrowError({name:"TypeError",message:"EncodingError U+9525"});
expect(() => {ms932Encoder.encode("\u9526")}).toThrowError({name:"TypeError",message:"EncodingError U+9526"});
expect(() => {ms932Encoder.encode("\u9527")}).toThrowError({name:"TypeError",message:"EncodingError U+9527"});
expect(() => {ms932Encoder.encode("\u9528")}).toThrowError({name:"TypeError",message:"EncodingError U+9528"});
expect(() => {ms932Encoder.encode("\u9529")}).toThrowError({name:"TypeError",message:"EncodingError U+9529"});
expect(() => {ms932Encoder.encode("\u952A")}).toThrowError({name:"TypeError",message:"EncodingError U+952A"});
expect(() => {ms932Encoder.encode("\u952B")}).toThrowError({name:"TypeError",message:"EncodingError U+952B"});
expect(() => {ms932Encoder.encode("\u952C")}).toThrowError({name:"TypeError",message:"EncodingError U+952C"});
expect(() => {ms932Encoder.encode("\u952D")}).toThrowError({name:"TypeError",message:"EncodingError U+952D"});
expect(() => {ms932Encoder.encode("\u952E")}).toThrowError({name:"TypeError",message:"EncodingError U+952E"});
expect(() => {ms932Encoder.encode("\u952F")}).toThrowError({name:"TypeError",message:"EncodingError U+952F"});
expect(() => {ms932Encoder.encode("\u9530")}).toThrowError({name:"TypeError",message:"EncodingError U+9530"});
expect(() => {ms932Encoder.encode("\u9531")}).toThrowError({name:"TypeError",message:"EncodingError U+9531"});
expect(() => {ms932Encoder.encode("\u9532")}).toThrowError({name:"TypeError",message:"EncodingError U+9532"});
expect(() => {ms932Encoder.encode("\u9533")}).toThrowError({name:"TypeError",message:"EncodingError U+9533"});
expect(() => {ms932Encoder.encode("\u9534")}).toThrowError({name:"TypeError",message:"EncodingError U+9534"});
expect(() => {ms932Encoder.encode("\u9535")}).toThrowError({name:"TypeError",message:"EncodingError U+9535"});
expect(() => {ms932Encoder.encode("\u9536")}).toThrowError({name:"TypeError",message:"EncodingError U+9536"});
expect(() => {ms932Encoder.encode("\u9537")}).toThrowError({name:"TypeError",message:"EncodingError U+9537"});
expect(() => {ms932Encoder.encode("\u9538")}).toThrowError({name:"TypeError",message:"EncodingError U+9538"});
expect(() => {ms932Encoder.encode("\u9539")}).toThrowError({name:"TypeError",message:"EncodingError U+9539"});
expect(() => {ms932Encoder.encode("\u953A")}).toThrowError({name:"TypeError",message:"EncodingError U+953A"});
expect(() => {ms932Encoder.encode("\u953B")}).toThrowError({name:"TypeError",message:"EncodingError U+953B"});
expect(() => {ms932Encoder.encode("\u953C")}).toThrowError({name:"TypeError",message:"EncodingError U+953C"});
expect(() => {ms932Encoder.encode("\u953D")}).toThrowError({name:"TypeError",message:"EncodingError U+953D"});
expect(() => {ms932Encoder.encode("\u953E")}).toThrowError({name:"TypeError",message:"EncodingError U+953E"});
expect(() => {ms932Encoder.encode("\u953F")}).toThrowError({name:"TypeError",message:"EncodingError U+953F"});
expect(() => {ms932Encoder.encode("\u9540")}).toThrowError({name:"TypeError",message:"EncodingError U+9540"});
expect(() => {ms932Encoder.encode("\u9541")}).toThrowError({name:"TypeError",message:"EncodingError U+9541"});
expect(() => {ms932Encoder.encode("\u9542")}).toThrowError({name:"TypeError",message:"EncodingError U+9542"});
expect(() => {ms932Encoder.encode("\u9543")}).toThrowError({name:"TypeError",message:"EncodingError U+9543"});
expect(() => {ms932Encoder.encode("\u9544")}).toThrowError({name:"TypeError",message:"EncodingError U+9544"});
expect(() => {ms932Encoder.encode("\u9545")}).toThrowError({name:"TypeError",message:"EncodingError U+9545"});
expect(() => {ms932Encoder.encode("\u9546")}).toThrowError({name:"TypeError",message:"EncodingError U+9546"});
expect(() => {ms932Encoder.encode("\u9547")}).toThrowError({name:"TypeError",message:"EncodingError U+9547"});
expect(() => {ms932Encoder.encode("\u9548")}).toThrowError({name:"TypeError",message:"EncodingError U+9548"});
expect(() => {ms932Encoder.encode("\u9549")}).toThrowError({name:"TypeError",message:"EncodingError U+9549"});
expect(() => {ms932Encoder.encode("\u954A")}).toThrowError({name:"TypeError",message:"EncodingError U+954A"});
expect(() => {ms932Encoder.encode("\u954B")}).toThrowError({name:"TypeError",message:"EncodingError U+954B"});
expect(() => {ms932Encoder.encode("\u954C")}).toThrowError({name:"TypeError",message:"EncodingError U+954C"});
expect(() => {ms932Encoder.encode("\u954D")}).toThrowError({name:"TypeError",message:"EncodingError U+954D"});
expect(() => {ms932Encoder.encode("\u954E")}).toThrowError({name:"TypeError",message:"EncodingError U+954E"});
expect(() => {ms932Encoder.encode("\u954F")}).toThrowError({name:"TypeError",message:"EncodingError U+954F"});
expect(() => {ms932Encoder.encode("\u9550")}).toThrowError({name:"TypeError",message:"EncodingError U+9550"});
expect(() => {ms932Encoder.encode("\u9551")}).toThrowError({name:"TypeError",message:"EncodingError U+9551"});
expect(() => {ms932Encoder.encode("\u9552")}).toThrowError({name:"TypeError",message:"EncodingError U+9552"});
expect(() => {ms932Encoder.encode("\u9553")}).toThrowError({name:"TypeError",message:"EncodingError U+9553"});
expect(() => {ms932Encoder.encode("\u9554")}).toThrowError({name:"TypeError",message:"EncodingError U+9554"});
expect(() => {ms932Encoder.encode("\u9555")}).toThrowError({name:"TypeError",message:"EncodingError U+9555"});
expect(() => {ms932Encoder.encode("\u9556")}).toThrowError({name:"TypeError",message:"EncodingError U+9556"});
expect(() => {ms932Encoder.encode("\u9557")}).toThrowError({name:"TypeError",message:"EncodingError U+9557"});
expect(() => {ms932Encoder.encode("\u9558")}).toThrowError({name:"TypeError",message:"EncodingError U+9558"});
expect(() => {ms932Encoder.encode("\u9559")}).toThrowError({name:"TypeError",message:"EncodingError U+9559"});
expect(() => {ms932Encoder.encode("\u955A")}).toThrowError({name:"TypeError",message:"EncodingError U+955A"});
expect(() => {ms932Encoder.encode("\u955B")}).toThrowError({name:"TypeError",message:"EncodingError U+955B"});
expect(() => {ms932Encoder.encode("\u955C")}).toThrowError({name:"TypeError",message:"EncodingError U+955C"});
expect(() => {ms932Encoder.encode("\u955D")}).toThrowError({name:"TypeError",message:"EncodingError U+955D"});
expect(() => {ms932Encoder.encode("\u955E")}).toThrowError({name:"TypeError",message:"EncodingError U+955E"});
expect(() => {ms932Encoder.encode("\u955F")}).toThrowError({name:"TypeError",message:"EncodingError U+955F"});
expect(() => {ms932Encoder.encode("\u9560")}).toThrowError({name:"TypeError",message:"EncodingError U+9560"});
expect(() => {ms932Encoder.encode("\u9561")}).toThrowError({name:"TypeError",message:"EncodingError U+9561"});
expect(() => {ms932Encoder.encode("\u9562")}).toThrowError({name:"TypeError",message:"EncodingError U+9562"});
expect(() => {ms932Encoder.encode("\u9563")}).toThrowError({name:"TypeError",message:"EncodingError U+9563"});
expect(() => {ms932Encoder.encode("\u9564")}).toThrowError({name:"TypeError",message:"EncodingError U+9564"});
expect(() => {ms932Encoder.encode("\u9565")}).toThrowError({name:"TypeError",message:"EncodingError U+9565"});
expect(() => {ms932Encoder.encode("\u9566")}).toThrowError({name:"TypeError",message:"EncodingError U+9566"});
expect(() => {ms932Encoder.encode("\u9567")}).toThrowError({name:"TypeError",message:"EncodingError U+9567"});
expect(() => {ms932Encoder.encode("\u9568")}).toThrowError({name:"TypeError",message:"EncodingError U+9568"});
expect(() => {ms932Encoder.encode("\u9569")}).toThrowError({name:"TypeError",message:"EncodingError U+9569"});
expect(() => {ms932Encoder.encode("\u956A")}).toThrowError({name:"TypeError",message:"EncodingError U+956A"});
expect(() => {ms932Encoder.encode("\u956B")}).toThrowError({name:"TypeError",message:"EncodingError U+956B"});
expect(() => {ms932Encoder.encode("\u956C")}).toThrowError({name:"TypeError",message:"EncodingError U+956C"});
expect(() => {ms932Encoder.encode("\u956D")}).toThrowError({name:"TypeError",message:"EncodingError U+956D"});
expect(() => {ms932Encoder.encode("\u956E")}).toThrowError({name:"TypeError",message:"EncodingError U+956E"});
expect(() => {ms932Encoder.encode("\u956F")}).toThrowError({name:"TypeError",message:"EncodingError U+956F"});
expect(() => {ms932Encoder.encode("\u9570")}).toThrowError({name:"TypeError",message:"EncodingError U+9570"});
expect(() => {ms932Encoder.encode("\u9571")}).toThrowError({name:"TypeError",message:"EncodingError U+9571"});
expect(() => {ms932Encoder.encode("\u9572")}).toThrowError({name:"TypeError",message:"EncodingError U+9572"});
expect(() => {ms932Encoder.encode("\u9573")}).toThrowError({name:"TypeError",message:"EncodingError U+9573"});
expect(() => {ms932Encoder.encode("\u9574")}).toThrowError({name:"TypeError",message:"EncodingError U+9574"});
expect(() => {ms932Encoder.encode("\u9575")}).toThrowError({name:"TypeError",message:"EncodingError U+9575"});
expect(() => {ms932Encoder.encode("\u9576")}).toThrowError({name:"TypeError",message:"EncodingError U+9576"});
expect([...ms932Encoder.encode("長")].join(",")).toBe("146,183"); // U+9577
expect(() => {ms932Encoder.encode("\u9578")}).toThrowError({name:"TypeError",message:"EncodingError U+9578"});
expect(() => {ms932Encoder.encode("\u9579")}).toThrowError({name:"TypeError",message:"EncodingError U+9579"});
expect(() => {ms932Encoder.encode("\u957A")}).toThrowError({name:"TypeError",message:"EncodingError U+957A"});
expect(() => {ms932Encoder.encode("\u957B")}).toThrowError({name:"TypeError",message:"EncodingError U+957B"});
expect(() => {ms932Encoder.encode("\u957C")}).toThrowError({name:"TypeError",message:"EncodingError U+957C"});
expect(() => {ms932Encoder.encode("\u957D")}).toThrowError({name:"TypeError",message:"EncodingError U+957D"});
expect(() => {ms932Encoder.encode("\u957E")}).toThrowError({name:"TypeError",message:"EncodingError U+957E"});
expect(() => {ms932Encoder.encode("\u957F")}).toThrowError({name:"TypeError",message:"EncodingError U+957F"});
expect([...ms932Encoder.encode("門")].join(",")).toBe("150,229"); // U+9580
expect(() => {ms932Encoder.encode("\u9581")}).toThrowError({name:"TypeError",message:"EncodingError U+9581"});
expect([...ms932Encoder.encode("閂閃")].join(",")).toBe("232,120,145,77"); // U+9582
expect(() => {ms932Encoder.encode("\u9584")}).toThrowError({name:"TypeError",message:"EncodingError U+9584"});
expect(() => {ms932Encoder.encode("\u9585")}).toThrowError({name:"TypeError",message:"EncodingError U+9585"});
expect(() => {ms932Encoder.encode("\u9586")}).toThrowError({name:"TypeError",message:"EncodingError U+9586"});
expect([...ms932Encoder.encode("閇")].join(",")).toBe("232,121"); // U+9587
expect(() => {ms932Encoder.encode("\u9588")}).toThrowError({name:"TypeError",message:"EncodingError U+9588"});
expect([...ms932Encoder.encode("閉閊開")].join(",")).toBe("149,194,232,122,138,74"); // U+9589
expect(() => {ms932Encoder.encode("\u958C")}).toThrowError({name:"TypeError",message:"EncodingError U+958C"});
expect(() => {ms932Encoder.encode("\u958D")}).toThrowError({name:"TypeError",message:"EncodingError U+958D"});
expect(() => {ms932Encoder.encode("\u958E")}).toThrowError({name:"TypeError",message:"EncodingError U+958E"});
expect([...ms932Encoder.encode("閏")].join(",")).toBe("137,91"); // U+958F
expect(() => {ms932Encoder.encode("\u9590")}).toThrowError({name:"TypeError",message:"EncodingError U+9590"});
expect([...ms932Encoder.encode("閑閒間閔")].join(",")).toBe("138,213,251,232,138,212,232,123"); // U+9591
expect(() => {ms932Encoder.encode("\u9595")}).toThrowError({name:"TypeError",message:"EncodingError U+9595"});
expect([...ms932Encoder.encode("閖")].join(",")).toBe("232,124"); // U+9596
expect(() => {ms932Encoder.encode("\u9597")}).toThrowError({name:"TypeError",message:"EncodingError U+9597"});
expect([...ms932Encoder.encode("閘閙")].join(",")).toBe("232,125,232,126"); // U+9598
expect(() => {ms932Encoder.encode("\u959A")}).toThrowError({name:"TypeError",message:"EncodingError U+959A"});
expect(() => {ms932Encoder.encode("\u959B")}).toThrowError({name:"TypeError",message:"EncodingError U+959B"});
expect(() => {ms932Encoder.encode("\u959C")}).toThrowError({name:"TypeError",message:"EncodingError U+959C"});
expect(() => {ms932Encoder.encode("\u959D")}).toThrowError({name:"TypeError",message:"EncodingError U+959D"});
expect(() => {ms932Encoder.encode("\u959E")}).toThrowError({name:"TypeError",message:"EncodingError U+959E"});
expect(() => {ms932Encoder.encode("\u959F")}).toThrowError({name:"TypeError",message:"EncodingError U+959F"});
expect([...ms932Encoder.encode("閠")].join(",")).toBe("232,128"); // U+95A0
expect(() => {ms932Encoder.encode("\u95A1")}).toThrowError({name:"TypeError",message:"EncodingError U+95A1"});
expect([...ms932Encoder.encode("関閣閤閥")].join(",")).toBe("138,214,138,116,141,125,148,180"); // U+95A2
expect(() => {ms932Encoder.encode("\u95A6")}).toThrowError({name:"TypeError",message:"EncodingError U+95A6"});
expect([...ms932Encoder.encode("閧閨")].join(",")).toBe("232,130,232,129"); // U+95A7
expect(() => {ms932Encoder.encode("\u95A9")}).toThrowError({name:"TypeError",message:"EncodingError U+95A9"});
expect(() => {ms932Encoder.encode("\u95AA")}).toThrowError({name:"TypeError",message:"EncodingError U+95AA"});
expect(() => {ms932Encoder.encode("\u95AB")}).toThrowError({name:"TypeError",message:"EncodingError U+95AB"});
expect(() => {ms932Encoder.encode("\u95AC")}).toThrowError({name:"TypeError",message:"EncodingError U+95AC"});
expect([...ms932Encoder.encode("閭")].join(",")).toBe("232,131"); // U+95AD
expect(() => {ms932Encoder.encode("\u95AE")}).toThrowError({name:"TypeError",message:"EncodingError U+95AE"});
expect(() => {ms932Encoder.encode("\u95AF")}).toThrowError({name:"TypeError",message:"EncodingError U+95AF"});
expect(() => {ms932Encoder.encode("\u95B0")}).toThrowError({name:"TypeError",message:"EncodingError U+95B0"});
expect(() => {ms932Encoder.encode("\u95B1")}).toThrowError({name:"TypeError",message:"EncodingError U+95B1"});
expect([...ms932Encoder.encode("閲")].join(",")).toBe("137,123"); // U+95B2
expect(() => {ms932Encoder.encode("\u95B3")}).toThrowError({name:"TypeError",message:"EncodingError U+95B3"});
expect(() => {ms932Encoder.encode("\u95B4")}).toThrowError({name:"TypeError",message:"EncodingError U+95B4"});
expect(() => {ms932Encoder.encode("\u95B5")}).toThrowError({name:"TypeError",message:"EncodingError U+95B5"});
expect(() => {ms932Encoder.encode("\u95B6")}).toThrowError({name:"TypeError",message:"EncodingError U+95B6"});
expect(() => {ms932Encoder.encode("\u95B7")}).toThrowError({name:"TypeError",message:"EncodingError U+95B7"});
expect(() => {ms932Encoder.encode("\u95B8")}).toThrowError({name:"TypeError",message:"EncodingError U+95B8"});
expect([...ms932Encoder.encode("閹")].join(",")).toBe("232,134"); // U+95B9
expect(() => {ms932Encoder.encode("\u95BA")}).toThrowError({name:"TypeError",message:"EncodingError U+95BA"});
expect([...ms932Encoder.encode("閻閼")].join(",")).toBe("232,133,232,132"); // U+95BB
expect(() => {ms932Encoder.encode("\u95BD")}).toThrowError({name:"TypeError",message:"EncodingError U+95BD"});
expect([...ms932Encoder.encode("閾")].join(",")).toBe("232,135"); // U+95BE
expect(() => {ms932Encoder.encode("\u95BF")}).toThrowError({name:"TypeError",message:"EncodingError U+95BF"});
expect(() => {ms932Encoder.encode("\u95C0")}).toThrowError({name:"TypeError",message:"EncodingError U+95C0"});
expect(() => {ms932Encoder.encode("\u95C1")}).toThrowError({name:"TypeError",message:"EncodingError U+95C1"});
expect(() => {ms932Encoder.encode("\u95C2")}).toThrowError({name:"TypeError",message:"EncodingError U+95C2"});
expect([...ms932Encoder.encode("闃")].join(",")).toBe("232,138"); // U+95C3
expect(() => {ms932Encoder.encode("\u95C4")}).toThrowError({name:"TypeError",message:"EncodingError U+95C4"});
expect(() => {ms932Encoder.encode("\u95C5")}).toThrowError({name:"TypeError",message:"EncodingError U+95C5"});
expect(() => {ms932Encoder.encode("\u95C6")}).toThrowError({name:"TypeError",message:"EncodingError U+95C6"});
expect([...ms932Encoder.encode("闇")].join(",")).toBe("136,197"); // U+95C7
expect(() => {ms932Encoder.encode("\u95C8")}).toThrowError({name:"TypeError",message:"EncodingError U+95C8"});
expect(() => {ms932Encoder.encode("\u95C9")}).toThrowError({name:"TypeError",message:"EncodingError U+95C9"});
expect([...ms932Encoder.encode("闊")].join(",")).toBe("232,136"); // U+95CA
expect(() => {ms932Encoder.encode("\u95CB")}).toThrowError({name:"TypeError",message:"EncodingError U+95CB"});
expect([...ms932Encoder.encode("闌闍")].join(",")).toBe("232,140,232,139"); // U+95CC
expect(() => {ms932Encoder.encode("\u95CE")}).toThrowError({name:"TypeError",message:"EncodingError U+95CE"});
expect(() => {ms932Encoder.encode("\u95CF")}).toThrowError({name:"TypeError",message:"EncodingError U+95CF"});
expect(() => {ms932Encoder.encode("\u95D0")}).toThrowError({name:"TypeError",message:"EncodingError U+95D0"});
expect(() => {ms932Encoder.encode("\u95D1")}).toThrowError({name:"TypeError",message:"EncodingError U+95D1"});
expect(() => {ms932Encoder.encode("\u95D2")}).toThrowError({name:"TypeError",message:"EncodingError U+95D2"});
expect(() => {ms932Encoder.encode("\u95D3")}).toThrowError({name:"TypeError",message:"EncodingError U+95D3"});
expect([...ms932Encoder.encode("闔闕闖")].join(",")).toBe("232,142,232,141,232,143"); // U+95D4
expect(() => {ms932Encoder.encode("\u95D7")}).toThrowError({name:"TypeError",message:"EncodingError U+95D7"});
expect([...ms932Encoder.encode("闘")].join(",")).toBe("147,172"); // U+95D8
expect(() => {ms932Encoder.encode("\u95D9")}).toThrowError({name:"TypeError",message:"EncodingError U+95D9"});
expect(() => {ms932Encoder.encode("\u95DA")}).toThrowError({name:"TypeError",message:"EncodingError U+95DA"});
expect(() => {ms932Encoder.encode("\u95DB")}).toThrowError({name:"TypeError",message:"EncodingError U+95DB"});
expect([...ms932Encoder.encode("關")].join(",")).toBe("232,144"); // U+95DC
expect(() => {ms932Encoder.encode("\u95DD")}).toThrowError({name:"TypeError",message:"EncodingError U+95DD"});
expect(() => {ms932Encoder.encode("\u95DE")}).toThrowError({name:"TypeError",message:"EncodingError U+95DE"});
expect(() => {ms932Encoder.encode("\u95DF")}).toThrowError({name:"TypeError",message:"EncodingError U+95DF"});
expect(() => {ms932Encoder.encode("\u95E0")}).toThrowError({name:"TypeError",message:"EncodingError U+95E0"});
expect([...ms932Encoder.encode("闡闢")].join(",")).toBe("232,145,232,147"); // U+95E1
expect(() => {ms932Encoder.encode("\u95E3")}).toThrowError({name:"TypeError",message:"EncodingError U+95E3"});
expect(() => {ms932Encoder.encode("\u95E4")}).toThrowError({name:"TypeError",message:"EncodingError U+95E4"});
expect([...ms932Encoder.encode("闥")].join(",")).toBe("232,146"); // U+95E5
expect(() => {ms932Encoder.encode("\u95E6")}).toThrowError({name:"TypeError",message:"EncodingError U+95E6"});
expect(() => {ms932Encoder.encode("\u95E7")}).toThrowError({name:"TypeError",message:"EncodingError U+95E7"});
expect(() => {ms932Encoder.encode("\u95E8")}).toThrowError({name:"TypeError",message:"EncodingError U+95E8"});
expect(() => {ms932Encoder.encode("\u95E9")}).toThrowError({name:"TypeError",message:"EncodingError U+95E9"});
expect(() => {ms932Encoder.encode("\u95EA")}).toThrowError({name:"TypeError",message:"EncodingError U+95EA"});
expect(() => {ms932Encoder.encode("\u95EB")}).toThrowError({name:"TypeError",message:"EncodingError U+95EB"});
expect(() => {ms932Encoder.encode("\u95EC")}).toThrowError({name:"TypeError",message:"EncodingError U+95EC"});
expect(() => {ms932Encoder.encode("\u95ED")}).toThrowError({name:"TypeError",message:"EncodingError U+95ED"});
expect(() => {ms932Encoder.encode("\u95EE")}).toThrowError({name:"TypeError",message:"EncodingError U+95EE"});
expect(() => {ms932Encoder.encode("\u95EF")}).toThrowError({name:"TypeError",message:"EncodingError U+95EF"});
expect(() => {ms932Encoder.encode("\u95F0")}).toThrowError({name:"TypeError",message:"EncodingError U+95F0"});
expect(() => {ms932Encoder.encode("\u95F1")}).toThrowError({name:"TypeError",message:"EncodingError U+95F1"});
expect(() => {ms932Encoder.encode("\u95F2")}).toThrowError({name:"TypeError",message:"EncodingError U+95F2"});
expect(() => {ms932Encoder.encode("\u95F3")}).toThrowError({name:"TypeError",message:"EncodingError U+95F3"});
expect(() => {ms932Encoder.encode("\u95F4")}).toThrowError({name:"TypeError",message:"EncodingError U+95F4"});
expect(() => {ms932Encoder.encode("\u95F5")}).toThrowError({name:"TypeError",message:"EncodingError U+95F5"});
expect(() => {ms932Encoder.encode("\u95F6")}).toThrowError({name:"TypeError",message:"EncodingError U+95F6"});
expect(() => {ms932Encoder.encode("\u95F7")}).toThrowError({name:"TypeError",message:"EncodingError U+95F7"});
expect(() => {ms932Encoder.encode("\u95F8")}).toThrowError({name:"TypeError",message:"EncodingError U+95F8"});
expect(() => {ms932Encoder.encode("\u95F9")}).toThrowError({name:"TypeError",message:"EncodingError U+95F9"});
expect(() => {ms932Encoder.encode("\u95FA")}).toThrowError({name:"TypeError",message:"EncodingError U+95FA"});
expect(() => {ms932Encoder.encode("\u95FB")}).toThrowError({name:"TypeError",message:"EncodingError U+95FB"});
expect(() => {ms932Encoder.encode("\u95FC")}).toThrowError({name:"TypeError",message:"EncodingError U+95FC"});
expect(() => {ms932Encoder.encode("\u95FD")}).toThrowError({name:"TypeError",message:"EncodingError U+95FD"});
expect(() => {ms932Encoder.encode("\u95FE")}).toThrowError({name:"TypeError",message:"EncodingError U+95FE"});
expect(() => {ms932Encoder.encode("\u95FF")}).toThrowError({name:"TypeError",message:"EncodingError U+95FF"});
expect(() => {ms932Encoder.encode("\u9600")}).toThrowError({name:"TypeError",message:"EncodingError U+9600"});
expect(() => {ms932Encoder.encode("\u9601")}).toThrowError({name:"TypeError",message:"EncodingError U+9601"});
expect(() => {ms932Encoder.encode("\u9602")}).toThrowError({name:"TypeError",message:"EncodingError U+9602"});
expect(() => {ms932Encoder.encode("\u9603")}).toThrowError({name:"TypeError",message:"EncodingError U+9603"});
expect(() => {ms932Encoder.encode("\u9604")}).toThrowError({name:"TypeError",message:"EncodingError U+9604"});
expect(() => {ms932Encoder.encode("\u9605")}).toThrowError({name:"TypeError",message:"EncodingError U+9605"});
expect(() => {ms932Encoder.encode("\u9606")}).toThrowError({name:"TypeError",message:"EncodingError U+9606"});
expect(() => {ms932Encoder.encode("\u9607")}).toThrowError({name:"TypeError",message:"EncodingError U+9607"});
expect(() => {ms932Encoder.encode("\u9608")}).toThrowError({name:"TypeError",message:"EncodingError U+9608"});
expect(() => {ms932Encoder.encode("\u9609")}).toThrowError({name:"TypeError",message:"EncodingError U+9609"});
expect(() => {ms932Encoder.encode("\u960A")}).toThrowError({name:"TypeError",message:"EncodingError U+960A"});
expect(() => {ms932Encoder.encode("\u960B")}).toThrowError({name:"TypeError",message:"EncodingError U+960B"});
expect(() => {ms932Encoder.encode("\u960C")}).toThrowError({name:"TypeError",message:"EncodingError U+960C"});
expect(() => {ms932Encoder.encode("\u960D")}).toThrowError({name:"TypeError",message:"EncodingError U+960D"});
expect(() => {ms932Encoder.encode("\u960E")}).toThrowError({name:"TypeError",message:"EncodingError U+960E"});
expect(() => {ms932Encoder.encode("\u960F")}).toThrowError({name:"TypeError",message:"EncodingError U+960F"});
expect(() => {ms932Encoder.encode("\u9610")}).toThrowError({name:"TypeError",message:"EncodingError U+9610"});
expect(() => {ms932Encoder.encode("\u9611")}).toThrowError({name:"TypeError",message:"EncodingError U+9611"});
expect(() => {ms932Encoder.encode("\u9612")}).toThrowError({name:"TypeError",message:"EncodingError U+9612"});
expect(() => {ms932Encoder.encode("\u9613")}).toThrowError({name:"TypeError",message:"EncodingError U+9613"});
expect(() => {ms932Encoder.encode("\u9614")}).toThrowError({name:"TypeError",message:"EncodingError U+9614"});
expect(() => {ms932Encoder.encode("\u9615")}).toThrowError({name:"TypeError",message:"EncodingError U+9615"});
expect(() => {ms932Encoder.encode("\u9616")}).toThrowError({name:"TypeError",message:"EncodingError U+9616"});
expect(() => {ms932Encoder.encode("\u9617")}).toThrowError({name:"TypeError",message:"EncodingError U+9617"});
expect(() => {ms932Encoder.encode("\u9618")}).toThrowError({name:"TypeError",message:"EncodingError U+9618"});
expect(() => {ms932Encoder.encode("\u9619")}).toThrowError({name:"TypeError",message:"EncodingError U+9619"});
expect(() => {ms932Encoder.encode("\u961A")}).toThrowError({name:"TypeError",message:"EncodingError U+961A"});
expect(() => {ms932Encoder.encode("\u961B")}).toThrowError({name:"TypeError",message:"EncodingError U+961B"});
expect([...ms932Encoder.encode("阜")].join(",")).toBe("149,140"); // U+961C
expect(() => {ms932Encoder.encode("\u961D")}).toThrowError({name:"TypeError",message:"EncodingError U+961D"});
expect(() => {ms932Encoder.encode("\u961E")}).toThrowError({name:"TypeError",message:"EncodingError U+961E"});
expect(() => {ms932Encoder.encode("\u961F")}).toThrowError({name:"TypeError",message:"EncodingError U+961F"});
expect(() => {ms932Encoder.encode("\u9620")}).toThrowError({name:"TypeError",message:"EncodingError U+9620"});
expect([...ms932Encoder.encode("阡")].join(",")).toBe("232,148"); // U+9621
expect(() => {ms932Encoder.encode("\u9622")}).toThrowError({name:"TypeError",message:"EncodingError U+9622"});
expect(() => {ms932Encoder.encode("\u9623")}).toThrowError({name:"TypeError",message:"EncodingError U+9623"});
expect(() => {ms932Encoder.encode("\u9624")}).toThrowError({name:"TypeError",message:"EncodingError U+9624"});
expect(() => {ms932Encoder.encode("\u9625")}).toThrowError({name:"TypeError",message:"EncodingError U+9625"});
expect(() => {ms932Encoder.encode("\u9626")}).toThrowError({name:"TypeError",message:"EncodingError U+9626"});
expect(() => {ms932Encoder.encode("\u9627")}).toThrowError({name:"TypeError",message:"EncodingError U+9627"});
expect([...ms932Encoder.encode("阨")].join(",")).toBe("232,149"); // U+9628
expect(() => {ms932Encoder.encode("\u9629")}).toThrowError({name:"TypeError",message:"EncodingError U+9629"});
expect([...ms932Encoder.encode("阪")].join(",")).toBe("141,227"); // U+962A
expect(() => {ms932Encoder.encode("\u962B")}).toThrowError({name:"TypeError",message:"EncodingError U+962B"});
expect(() => {ms932Encoder.encode("\u962C")}).toThrowError({name:"TypeError",message:"EncodingError U+962C"});
expect(() => {ms932Encoder.encode("\u962D")}).toThrowError({name:"TypeError",message:"EncodingError U+962D"});
expect([...ms932Encoder.encode("阮阯")].join(",")).toBe("232,150,232,151"); // U+962E
expect(() => {ms932Encoder.encode("\u9630")}).toThrowError({name:"TypeError",message:"EncodingError U+9630"});
expect(() => {ms932Encoder.encode("\u9631")}).toThrowError({name:"TypeError",message:"EncodingError U+9631"});
expect([...ms932Encoder.encode("防")].join(",")).toBe("150,104"); // U+9632
expect(() => {ms932Encoder.encode("\u9633")}).toThrowError({name:"TypeError",message:"EncodingError U+9633"});
expect(() => {ms932Encoder.encode("\u9634")}).toThrowError({name:"TypeError",message:"EncodingError U+9634"});
expect(() => {ms932Encoder.encode("\u9635")}).toThrowError({name:"TypeError",message:"EncodingError U+9635"});
expect(() => {ms932Encoder.encode("\u9636")}).toThrowError({name:"TypeError",message:"EncodingError U+9636"});
expect(() => {ms932Encoder.encode("\u9637")}).toThrowError({name:"TypeError",message:"EncodingError U+9637"});
expect(() => {ms932Encoder.encode("\u9638")}).toThrowError({name:"TypeError",message:"EncodingError U+9638"});
expect(() => {ms932Encoder.encode("\u9639")}).toThrowError({name:"TypeError",message:"EncodingError U+9639"});
expect(() => {ms932Encoder.encode("\u963A")}).toThrowError({name:"TypeError",message:"EncodingError U+963A"});
expect([...ms932Encoder.encode("阻")].join(",")).toBe("145,106"); // U+963B
expect(() => {ms932Encoder.encode("\u963C")}).toThrowError({name:"TypeError",message:"EncodingError U+963C"});
expect(() => {ms932Encoder.encode("\u963D")}).toThrowError({name:"TypeError",message:"EncodingError U+963D"});
expect(() => {ms932Encoder.encode("\u963E")}).toThrowError({name:"TypeError",message:"EncodingError U+963E"});
expect([...ms932Encoder.encode("阿陀")].join(",")).toBe("136,162,145,201"); // U+963F
expect(() => {ms932Encoder.encode("\u9641")}).toThrowError({name:"TypeError",message:"EncodingError U+9641"});
expect([...ms932Encoder.encode("陂")].join(",")).toBe("232,152"); // U+9642
expect(() => {ms932Encoder.encode("\u9643")}).toThrowError({name:"TypeError",message:"EncodingError U+9643"});
expect([...ms932Encoder.encode("附")].join(",")).toBe("149,141"); // U+9644
expect(() => {ms932Encoder.encode("\u9645")}).toThrowError({name:"TypeError",message:"EncodingError U+9645"});
expect(() => {ms932Encoder.encode("\u9646")}).toThrowError({name:"TypeError",message:"EncodingError U+9646"});
expect(() => {ms932Encoder.encode("\u9647")}).toThrowError({name:"TypeError",message:"EncodingError U+9647"});
expect(() => {ms932Encoder.encode("\u9648")}).toThrowError({name:"TypeError",message:"EncodingError U+9648"});
expect(() => {ms932Encoder.encode("\u9649")}).toThrowError({name:"TypeError",message:"EncodingError U+9649"});
expect(() => {ms932Encoder.encode("\u964A")}).toThrowError({name:"TypeError",message:"EncodingError U+964A"});
expect([...ms932Encoder.encode("陋陌降")].join(",")).toBe("232,155,232,153,141,126"); // U+964B
expect(() => {ms932Encoder.encode("\u964E")}).toThrowError({name:"TypeError",message:"EncodingError U+964E"});
expect([...ms932Encoder.encode("陏限")].join(",")).toBe("232,154,140,192"); // U+964F
expect(() => {ms932Encoder.encode("\u9651")}).toThrowError({name:"TypeError",message:"EncodingError U+9651"});
expect(() => {ms932Encoder.encode("\u9652")}).toThrowError({name:"TypeError",message:"EncodingError U+9652"});
expect(() => {ms932Encoder.encode("\u9653")}).toThrowError({name:"TypeError",message:"EncodingError U+9653"});
expect(() => {ms932Encoder.encode("\u9654")}).toThrowError({name:"TypeError",message:"EncodingError U+9654"});
expect(() => {ms932Encoder.encode("\u9655")}).toThrowError({name:"TypeError",message:"EncodingError U+9655"});
expect(() => {ms932Encoder.encode("\u9656")}).toThrowError({name:"TypeError",message:"EncodingError U+9656"});
expect(() => {ms932Encoder.encode("\u9657")}).toThrowError({name:"TypeError",message:"EncodingError U+9657"});
expect(() => {ms932Encoder.encode("\u9658")}).toThrowError({name:"TypeError",message:"EncodingError U+9658"});
expect(() => {ms932Encoder.encode("\u9659")}).toThrowError({name:"TypeError",message:"EncodingError U+9659"});
expect(() => {ms932Encoder.encode("\u965A")}).toThrowError({name:"TypeError",message:"EncodingError U+965A"});
expect([...ms932Encoder.encode("陛陜陝陞陟")].join(",")).toBe("149,195,232,157,232,159,232,158,232,160"); // U+965B
expect(() => {ms932Encoder.encode("\u9660")}).toThrowError({name:"TypeError",message:"EncodingError U+9660"});
expect(() => {ms932Encoder.encode("\u9661")}).toThrowError({name:"TypeError",message:"EncodingError U+9661"});
expect([...ms932Encoder.encode("院陣除陥陦")].join(",")).toBe("137,64,144,119,143,156,138,215,232,161"); // U+9662
expect(() => {ms932Encoder.encode("\u9667")}).toThrowError({name:"TypeError",message:"EncodingError U+9667"});
expect(() => {ms932Encoder.encode("\u9668")}).toThrowError({name:"TypeError",message:"EncodingError U+9668"});
expect(() => {ms932Encoder.encode("\u9669")}).toThrowError({name:"TypeError",message:"EncodingError U+9669"});
expect([...ms932Encoder.encode("陪")].join(",")).toBe("148,134"); // U+966A
expect(() => {ms932Encoder.encode("\u966B")}).toThrowError({name:"TypeError",message:"EncodingError U+966B"});
expect([...ms932Encoder.encode("陬")].join(",")).toBe("232,163"); // U+966C
expect(() => {ms932Encoder.encode("\u966D")}).toThrowError({name:"TypeError",message:"EncodingError U+966D"});
expect(() => {ms932Encoder.encode("\u966E")}).toThrowError({name:"TypeError",message:"EncodingError U+966E"});
expect(() => {ms932Encoder.encode("\u966F")}).toThrowError({name:"TypeError",message:"EncodingError U+966F"});
expect([...ms932Encoder.encode("陰")].join(",")).toBe("137,65"); // U+9670
expect(() => {ms932Encoder.encode("\u9671")}).toThrowError({name:"TypeError",message:"EncodingError U+9671"});
expect([...ms932Encoder.encode("陲陳")].join(",")).toBe("232,162,146,194"); // U+9672
expect(() => {ms932Encoder.encode("\u9674")}).toThrowError({name:"TypeError",message:"EncodingError U+9674"});
expect([...ms932Encoder.encode("陵陶陷陸")].join(",")).toBe("151,203,147,169,232,156,151,164"); // U+9675
expect(() => {ms932Encoder.encode("\u9679")}).toThrowError({name:"TypeError",message:"EncodingError U+9679"});
expect([...ms932Encoder.encode("険")].join(",")).toBe("140,175"); // U+967A
expect(() => {ms932Encoder.encode("\u967B")}).toThrowError({name:"TypeError",message:"EncodingError U+967B"});
expect(() => {ms932Encoder.encode("\u967C")}).toThrowError({name:"TypeError",message:"EncodingError U+967C"});
expect([...ms932Encoder.encode("陽")].join(",")).toBe("151,122"); // U+967D
expect(() => {ms932Encoder.encode("\u967E")}).toThrowError({name:"TypeError",message:"EncodingError U+967E"});
expect(() => {ms932Encoder.encode("\u967F")}).toThrowError({name:"TypeError",message:"EncodingError U+967F"});
expect(() => {ms932Encoder.encode("\u9680")}).toThrowError({name:"TypeError",message:"EncodingError U+9680"});
expect(() => {ms932Encoder.encode("\u9681")}).toThrowError({name:"TypeError",message:"EncodingError U+9681"});
expect(() => {ms932Encoder.encode("\u9682")}).toThrowError({name:"TypeError",message:"EncodingError U+9682"});
expect(() => {ms932Encoder.encode("\u9683")}).toThrowError({name:"TypeError",message:"EncodingError U+9683"});
expect(() => {ms932Encoder.encode("\u9684")}).toThrowError({name:"TypeError",message:"EncodingError U+9684"});
expect([...ms932Encoder.encode("隅隆")].join(",")).toBe("139,247,151,178"); // U+9685
expect(() => {ms932Encoder.encode("\u9687")}).toThrowError({name:"TypeError",message:"EncodingError U+9687"});
expect([...ms932Encoder.encode("隈")].join(",")).toBe("140,71"); // U+9688
expect(() => {ms932Encoder.encode("\u9689")}).toThrowError({name:"TypeError",message:"EncodingError U+9689"});
expect([...ms932Encoder.encode("隊隋")].join(",")).toBe("145,224,228,64"); // U+968A
expect(() => {ms932Encoder.encode("\u968C")}).toThrowError({name:"TypeError",message:"EncodingError U+968C"});
expect([...ms932Encoder.encode("隍階随")].join(",")).toBe("232,164,138,75,144,143"); // U+968D
expect(() => {ms932Encoder.encode("\u9690")}).toThrowError({name:"TypeError",message:"EncodingError U+9690"});
expect(() => {ms932Encoder.encode("\u9691")}).toThrowError({name:"TypeError",message:"EncodingError U+9691"});
expect(() => {ms932Encoder.encode("\u9692")}).toThrowError({name:"TypeError",message:"EncodingError U+9692"});
expect(() => {ms932Encoder.encode("\u9693")}).toThrowError({name:"TypeError",message:"EncodingError U+9693"});
expect([...ms932Encoder.encode("隔隕")].join(",")).toBe("138,117,232,166"); // U+9694
expect(() => {ms932Encoder.encode("\u9696")}).toThrowError({name:"TypeError",message:"EncodingError U+9696"});
expect([...ms932Encoder.encode("隗隘隙")].join(",")).toBe("232,167,232,165,140,132"); // U+9697
expect(() => {ms932Encoder.encode("\u969A")}).toThrowError({name:"TypeError",message:"EncodingError U+969A"});
expect([...ms932Encoder.encode("際障隝")].join(",")).toBe("141,219,143,225,251,235"); // U+969B
expect(() => {ms932Encoder.encode("\u969E")}).toThrowError({name:"TypeError",message:"EncodingError U+969E"});
expect(() => {ms932Encoder.encode("\u969F")}).toThrowError({name:"TypeError",message:"EncodingError U+969F"});
expect([...ms932Encoder.encode("隠")].join(",")).toBe("137,66"); // U+96A0
expect(() => {ms932Encoder.encode("\u96A1")}).toThrowError({name:"TypeError",message:"EncodingError U+96A1"});
expect(() => {ms932Encoder.encode("\u96A2")}).toThrowError({name:"TypeError",message:"EncodingError U+96A2"});
expect([...ms932Encoder.encode("隣")].join(",")).toBe("151,215"); // U+96A3
expect(() => {ms932Encoder.encode("\u96A4")}).toThrowError({name:"TypeError",message:"EncodingError U+96A4"});
expect(() => {ms932Encoder.encode("\u96A5")}).toThrowError({name:"TypeError",message:"EncodingError U+96A5"});
expect(() => {ms932Encoder.encode("\u96A6")}).toThrowError({name:"TypeError",message:"EncodingError U+96A6"});
expect([...ms932Encoder.encode("隧隨")].join(",")).toBe("232,169,231,172"); // U+96A7
expect(() => {ms932Encoder.encode("\u96A9")}).toThrowError({name:"TypeError",message:"EncodingError U+96A9"});
expect([...ms932Encoder.encode("險")].join(",")).toBe("232,168"); // U+96AA
expect(() => {ms932Encoder.encode("\u96AB")}).toThrowError({name:"TypeError",message:"EncodingError U+96AB"});
expect(() => {ms932Encoder.encode("\u96AC")}).toThrowError({name:"TypeError",message:"EncodingError U+96AC"});
expect(() => {ms932Encoder.encode("\u96AD")}).toThrowError({name:"TypeError",message:"EncodingError U+96AD"});
expect(() => {ms932Encoder.encode("\u96AE")}).toThrowError({name:"TypeError",message:"EncodingError U+96AE"});
expect([...ms932Encoder.encode("隯隰隱隲")].join(",")).toBe("251,236,232,172,232,170,232,171"); // U+96AF
expect(() => {ms932Encoder.encode("\u96B3")}).toThrowError({name:"TypeError",message:"EncodingError U+96B3"});
expect([...ms932Encoder.encode("隴")].join(",")).toBe("232,173"); // U+96B4
expect(() => {ms932Encoder.encode("\u96B5")}).toThrowError({name:"TypeError",message:"EncodingError U+96B5"});
expect([...ms932Encoder.encode("隶隷隸隹")].join(",")).toBe("232,174,151,234,232,175,232,176"); // U+96B6
expect(() => {ms932Encoder.encode("\u96BA")}).toThrowError({name:"TypeError",message:"EncodingError U+96BA"});
expect([...ms932Encoder.encode("隻隼")].join(",")).toBe("144,199,148,185"); // U+96BB
expect(() => {ms932Encoder.encode("\u96BD")}).toThrowError({name:"TypeError",message:"EncodingError U+96BD"});
expect(() => {ms932Encoder.encode("\u96BE")}).toThrowError({name:"TypeError",message:"EncodingError U+96BE"});
expect(() => {ms932Encoder.encode("\u96BF")}).toThrowError({name:"TypeError",message:"EncodingError U+96BF"});
expect([...ms932Encoder.encode("雀雁")].join(",")).toBe("144,157,138,229"); // U+96C0
expect(() => {ms932Encoder.encode("\u96C2")}).toThrowError({name:"TypeError",message:"EncodingError U+96C2"});
expect(() => {ms932Encoder.encode("\u96C3")}).toThrowError({name:"TypeError",message:"EncodingError U+96C3"});
expect([...ms932Encoder.encode("雄雅集雇")].join(",")).toBe("151,89,137,235,143,87,140,217"); // U+96C4
expect(() => {ms932Encoder.encode("\u96C8")}).toThrowError({name:"TypeError",message:"EncodingError U+96C8"});
expect([...ms932Encoder.encode("雉")].join(",")).toBe("232,179"); // U+96C9
expect(() => {ms932Encoder.encode("\u96CA")}).toThrowError({name:"TypeError",message:"EncodingError U+96CA"});
expect([...ms932Encoder.encode("雋雌雍雎")].join(",")).toBe("232,178,142,147,232,180,232,177"); // U+96CB
expect(() => {ms932Encoder.encode("\u96CF")}).toThrowError({name:"TypeError",message:"EncodingError U+96CF"});
expect(() => {ms932Encoder.encode("\u96D0")}).toThrowError({name:"TypeError",message:"EncodingError U+96D0"});
expect([...ms932Encoder.encode("雑")].join(",")).toBe("142,71"); // U+96D1
expect(() => {ms932Encoder.encode("\u96D2")}).toThrowError({name:"TypeError",message:"EncodingError U+96D2"});
expect(() => {ms932Encoder.encode("\u96D3")}).toThrowError({name:"TypeError",message:"EncodingError U+96D3"});
expect(() => {ms932Encoder.encode("\u96D4")}).toThrowError({name:"TypeError",message:"EncodingError U+96D4"});
expect([...ms932Encoder.encode("雕雖")].join(",")).toBe("232,184,229,171"); // U+96D5
expect(() => {ms932Encoder.encode("\u96D7")}).toThrowError({name:"TypeError",message:"EncodingError U+96D7"});
expect(() => {ms932Encoder.encode("\u96D8")}).toThrowError({name:"TypeError",message:"EncodingError U+96D8"});
expect([...ms932Encoder.encode("雙")].join(",")).toBe("153,212"); // U+96D9
expect(() => {ms932Encoder.encode("\u96DA")}).toThrowError({name:"TypeError",message:"EncodingError U+96DA"});
expect([...ms932Encoder.encode("雛雜")].join(",")).toBe("144,151,232,182"); // U+96DB
expect(() => {ms932Encoder.encode("\u96DD")}).toThrowError({name:"TypeError",message:"EncodingError U+96DD"});
expect(() => {ms932Encoder.encode("\u96DE")}).toThrowError({name:"TypeError",message:"EncodingError U+96DE"});
expect(() => {ms932Encoder.encode("\u96DF")}).toThrowError({name:"TypeError",message:"EncodingError U+96DF"});
expect(() => {ms932Encoder.encode("\u96E0")}).toThrowError({name:"TypeError",message:"EncodingError U+96E0"});
expect(() => {ms932Encoder.encode("\u96E1")}).toThrowError({name:"TypeError",message:"EncodingError U+96E1"});
expect([...ms932Encoder.encode("離難")].join(",")).toBe("151,163,147,239"); // U+96E2
expect(() => {ms932Encoder.encode("\u96E4")}).toThrowError({name:"TypeError",message:"EncodingError U+96E4"});
expect(() => {ms932Encoder.encode("\u96E5")}).toThrowError({name:"TypeError",message:"EncodingError U+96E5"});
expect(() => {ms932Encoder.encode("\u96E6")}).toThrowError({name:"TypeError",message:"EncodingError U+96E6"});
expect(() => {ms932Encoder.encode("\u96E7")}).toThrowError({name:"TypeError",message:"EncodingError U+96E7"});
expect([...ms932Encoder.encode("雨")].join(",")).toBe("137,74"); // U+96E8
expect(() => {ms932Encoder.encode("\u96E9")}).toThrowError({name:"TypeError",message:"EncodingError U+96E9"});
expect([...ms932Encoder.encode("雪雫")].join(",")).toBe("144,225,142,180"); // U+96EA
expect(() => {ms932Encoder.encode("\u96EC")}).toThrowError({name:"TypeError",message:"EncodingError U+96EC"});
expect(() => {ms932Encoder.encode("\u96ED")}).toThrowError({name:"TypeError",message:"EncodingError U+96ED"});
expect(() => {ms932Encoder.encode("\u96EE")}).toThrowError({name:"TypeError",message:"EncodingError U+96EE"});
expect(() => {ms932Encoder.encode("\u96EF")}).toThrowError({name:"TypeError",message:"EncodingError U+96EF"});
expect([...ms932Encoder.encode("雰")].join(",")).toBe("149,181"); // U+96F0
expect(() => {ms932Encoder.encode("\u96F1")}).toThrowError({name:"TypeError",message:"EncodingError U+96F1"});
expect([...ms932Encoder.encode("雲")].join(",")).toBe("137,95"); // U+96F2
expect(() => {ms932Encoder.encode("\u96F3")}).toThrowError({name:"TypeError",message:"EncodingError U+96F3"});
expect(() => {ms932Encoder.encode("\u96F4")}).toThrowError({name:"TypeError",message:"EncodingError U+96F4"});
expect(() => {ms932Encoder.encode("\u96F5")}).toThrowError({name:"TypeError",message:"EncodingError U+96F5"});
expect([...ms932Encoder.encode("零雷")].join(",")).toBe("151,235,151,139"); // U+96F6
expect(() => {ms932Encoder.encode("\u96F8")}).toThrowError({name:"TypeError",message:"EncodingError U+96F8"});
expect([...ms932Encoder.encode("雹")].join(",")).toBe("232,185"); // U+96F9
expect(() => {ms932Encoder.encode("\u96FA")}).toThrowError({name:"TypeError",message:"EncodingError U+96FA"});
expect([...ms932Encoder.encode("電")].join(",")).toBe("147,100"); // U+96FB
expect(() => {ms932Encoder.encode("\u96FC")}).toThrowError({name:"TypeError",message:"EncodingError U+96FC"});
expect(() => {ms932Encoder.encode("\u96FD")}).toThrowError({name:"TypeError",message:"EncodingError U+96FD"});
expect(() => {ms932Encoder.encode("\u96FE")}).toThrowError({name:"TypeError",message:"EncodingError U+96FE"});
expect(() => {ms932Encoder.encode("\u96FF")}).toThrowError({name:"TypeError",message:"EncodingError U+96FF"});
expect([...ms932Encoder.encode("需")].join(",")).toBe("142,249"); // U+9700
expect(() => {ms932Encoder.encode("\u9701")}).toThrowError({name:"TypeError",message:"EncodingError U+9701"});
expect(() => {ms932Encoder.encode("\u9702")}).toThrowError({name:"TypeError",message:"EncodingError U+9702"});
expect(() => {ms932Encoder.encode("\u9703")}).toThrowError({name:"TypeError",message:"EncodingError U+9703"});
expect([...ms932Encoder.encode("霄")].join(",")).toBe("232,186"); // U+9704
expect(() => {ms932Encoder.encode("\u9705")}).toThrowError({name:"TypeError",message:"EncodingError U+9705"});
expect([...ms932Encoder.encode("霆震霈")].join(",")).toBe("232,187,144,107,232,188"); // U+9706
expect(() => {ms932Encoder.encode("\u9709")}).toThrowError({name:"TypeError",message:"EncodingError U+9709"});
expect([...ms932Encoder.encode("霊")].join(",")).toBe("151,236"); // U+970A
expect(() => {ms932Encoder.encode("\u970B")}).toThrowError({name:"TypeError",message:"EncodingError U+970B"});
expect(() => {ms932Encoder.encode("\u970C")}).toThrowError({name:"TypeError",message:"EncodingError U+970C"});
expect([...ms932Encoder.encode("霍霎霏")].join(",")).toBe("232,183,232,190,232,192"); // U+970D
expect(() => {ms932Encoder.encode("\u9710")}).toThrowError({name:"TypeError",message:"EncodingError U+9710"});
expect([...ms932Encoder.encode("霑")].join(",")).toBe("232,191"); // U+9711
expect(() => {ms932Encoder.encode("\u9712")}).toThrowError({name:"TypeError",message:"EncodingError U+9712"});
expect([...ms932Encoder.encode("霓")].join(",")).toBe("232,189"); // U+9713
expect(() => {ms932Encoder.encode("\u9714")}).toThrowError({name:"TypeError",message:"EncodingError U+9714"});
expect(() => {ms932Encoder.encode("\u9715")}).toThrowError({name:"TypeError",message:"EncodingError U+9715"});
expect([...ms932Encoder.encode("霖")].join(",")).toBe("232,193"); // U+9716
expect(() => {ms932Encoder.encode("\u9717")}).toThrowError({name:"TypeError",message:"EncodingError U+9717"});
expect(() => {ms932Encoder.encode("\u9718")}).toThrowError({name:"TypeError",message:"EncodingError U+9718"});
expect([...ms932Encoder.encode("霙")].join(",")).toBe("232,194"); // U+9719
expect(() => {ms932Encoder.encode("\u971A")}).toThrowError({name:"TypeError",message:"EncodingError U+971A"});
expect(() => {ms932Encoder.encode("\u971B")}).toThrowError({name:"TypeError",message:"EncodingError U+971B"});
expect([...ms932Encoder.encode("霜")].join(",")).toBe("145,154"); // U+971C
expect(() => {ms932Encoder.encode("\u971D")}).toThrowError({name:"TypeError",message:"EncodingError U+971D"});
expect([...ms932Encoder.encode("霞")].join(",")).toBe("137,224"); // U+971E
expect(() => {ms932Encoder.encode("\u971F")}).toThrowError({name:"TypeError",message:"EncodingError U+971F"});
expect(() => {ms932Encoder.encode("\u9720")}).toThrowError({name:"TypeError",message:"EncodingError U+9720"});
expect(() => {ms932Encoder.encode("\u9721")}).toThrowError({name:"TypeError",message:"EncodingError U+9721"});
expect(() => {ms932Encoder.encode("\u9722")}).toThrowError({name:"TypeError",message:"EncodingError U+9722"});
expect(() => {ms932Encoder.encode("\u9723")}).toThrowError({name:"TypeError",message:"EncodingError U+9723"});
expect([...ms932Encoder.encode("霤")].join(",")).toBe("232,195"); // U+9724
expect(() => {ms932Encoder.encode("\u9725")}).toThrowError({name:"TypeError",message:"EncodingError U+9725"});
expect(() => {ms932Encoder.encode("\u9726")}).toThrowError({name:"TypeError",message:"EncodingError U+9726"});
expect([...ms932Encoder.encode("霧")].join(",")).toBe("150,182"); // U+9727
expect(() => {ms932Encoder.encode("\u9728")}).toThrowError({name:"TypeError",message:"EncodingError U+9728"});
expect(() => {ms932Encoder.encode("\u9729")}).toThrowError({name:"TypeError",message:"EncodingError U+9729"});
expect([...ms932Encoder.encode("霪")].join(",")).toBe("232,196"); // U+972A
expect(() => {ms932Encoder.encode("\u972B")}).toThrowError({name:"TypeError",message:"EncodingError U+972B"});
expect(() => {ms932Encoder.encode("\u972C")}).toThrowError({name:"TypeError",message:"EncodingError U+972C"});
expect(() => {ms932Encoder.encode("\u972D")}).toThrowError({name:"TypeError",message:"EncodingError U+972D"});
expect(() => {ms932Encoder.encode("\u972E")}).toThrowError({name:"TypeError",message:"EncodingError U+972E"});
expect(() => {ms932Encoder.encode("\u972F")}).toThrowError({name:"TypeError",message:"EncodingError U+972F"});
expect([...ms932Encoder.encode("霰")].join(",")).toBe("232,197"); // U+9730
expect(() => {ms932Encoder.encode("\u9731")}).toThrowError({name:"TypeError",message:"EncodingError U+9731"});
expect([...ms932Encoder.encode("露霳")].join(",")).toBe("152,73,251,237"); // U+9732
expect(() => {ms932Encoder.encode("\u9734")}).toThrowError({name:"TypeError",message:"EncodingError U+9734"});
expect(() => {ms932Encoder.encode("\u9735")}).toThrowError({name:"TypeError",message:"EncodingError U+9735"});
expect(() => {ms932Encoder.encode("\u9736")}).toThrowError({name:"TypeError",message:"EncodingError U+9736"});
expect(() => {ms932Encoder.encode("\u9737")}).toThrowError({name:"TypeError",message:"EncodingError U+9737"});
expect([...ms932Encoder.encode("霸霹")].join(",")).toBe("158,80,232,198"); // U+9738
expect(() => {ms932Encoder.encode("\u973A")}).toThrowError({name:"TypeError",message:"EncodingError U+973A"});
expect([...ms932Encoder.encode("霻")].join(",")).toBe("251,238"); // U+973B
expect(() => {ms932Encoder.encode("\u973C")}).toThrowError({name:"TypeError",message:"EncodingError U+973C"});
expect([...ms932Encoder.encode("霽霾")].join(",")).toBe("232,199,232,200"); // U+973D
expect(() => {ms932Encoder.encode("\u973F")}).toThrowError({name:"TypeError",message:"EncodingError U+973F"});
expect(() => {ms932Encoder.encode("\u9740")}).toThrowError({name:"TypeError",message:"EncodingError U+9740"});
expect(() => {ms932Encoder.encode("\u9741")}).toThrowError({name:"TypeError",message:"EncodingError U+9741"});
expect([...ms932Encoder.encode("靂靃靄")].join(",")).toBe("232,204,251,239,232,201"); // U+9742
expect(() => {ms932Encoder.encode("\u9745")}).toThrowError({name:"TypeError",message:"EncodingError U+9745"});
expect([...ms932Encoder.encode("靆")].join(",")).toBe("232,202"); // U+9746
expect(() => {ms932Encoder.encode("\u9747")}).toThrowError({name:"TypeError",message:"EncodingError U+9747"});
expect([...ms932Encoder.encode("靈靉")].join(",")).toBe("232,203,232,205"); // U+9748
expect(() => {ms932Encoder.encode("\u974A")}).toThrowError({name:"TypeError",message:"EncodingError U+974A"});
expect(() => {ms932Encoder.encode("\u974B")}).toThrowError({name:"TypeError",message:"EncodingError U+974B"});
expect(() => {ms932Encoder.encode("\u974C")}).toThrowError({name:"TypeError",message:"EncodingError U+974C"});
expect([...ms932Encoder.encode("靍")].join(",")).toBe("251,240"); // U+974D
expect(() => {ms932Encoder.encode("\u974E")}).toThrowError({name:"TypeError",message:"EncodingError U+974E"});
expect([...ms932Encoder.encode("靏")].join(",")).toBe("251,241"); // U+974F
expect(() => {ms932Encoder.encode("\u9750")}).toThrowError({name:"TypeError",message:"EncodingError U+9750"});
expect([...ms932Encoder.encode("靑青")].join(",")).toBe("251,242,144,194"); // U+9751
expect(() => {ms932Encoder.encode("\u9753")}).toThrowError({name:"TypeError",message:"EncodingError U+9753"});
expect(() => {ms932Encoder.encode("\u9754")}).toThrowError({name:"TypeError",message:"EncodingError U+9754"});
expect([...ms932Encoder.encode("靕靖")].join(",")).toBe("251,243,150,245"); // U+9755
expect(() => {ms932Encoder.encode("\u9757")}).toThrowError({name:"TypeError",message:"EncodingError U+9757"});
expect(() => {ms932Encoder.encode("\u9758")}).toThrowError({name:"TypeError",message:"EncodingError U+9758"});
expect([...ms932Encoder.encode("静")].join(",")).toBe("144,195"); // U+9759
expect(() => {ms932Encoder.encode("\u975A")}).toThrowError({name:"TypeError",message:"EncodingError U+975A"});
expect(() => {ms932Encoder.encode("\u975B")}).toThrowError({name:"TypeError",message:"EncodingError U+975B"});
expect([...ms932Encoder.encode("靜")].join(",")).toBe("232,206"); // U+975C
expect(() => {ms932Encoder.encode("\u975D")}).toThrowError({name:"TypeError",message:"EncodingError U+975D"});
expect([...ms932Encoder.encode("非")].join(",")).toBe("148,241"); // U+975E
expect(() => {ms932Encoder.encode("\u975F")}).toThrowError({name:"TypeError",message:"EncodingError U+975F"});
expect([...ms932Encoder.encode("靠靡面")].join(",")).toBe("232,207,234,114,150,202"); // U+9760
expect(() => {ms932Encoder.encode("\u9763")}).toThrowError({name:"TypeError",message:"EncodingError U+9763"});
expect([...ms932Encoder.encode("靤")].join(",")).toBe("232,208"); // U+9764
expect(() => {ms932Encoder.encode("\u9765")}).toThrowError({name:"TypeError",message:"EncodingError U+9765"});
expect([...ms932Encoder.encode("靦")].join(",")).toBe("232,209"); // U+9766
expect(() => {ms932Encoder.encode("\u9767")}).toThrowError({name:"TypeError",message:"EncodingError U+9767"});
expect([...ms932Encoder.encode("靨革")].join(",")).toBe("232,210,138,118"); // U+9768
expect(() => {ms932Encoder.encode("\u976A")}).toThrowError({name:"TypeError",message:"EncodingError U+976A"});
expect([...ms932Encoder.encode("靫")].join(",")).toBe("232,212"); // U+976B
expect(() => {ms932Encoder.encode("\u976C")}).toThrowError({name:"TypeError",message:"EncodingError U+976C"});
expect([...ms932Encoder.encode("靭")].join(",")).toBe("144,120"); // U+976D
expect(() => {ms932Encoder.encode("\u976E")}).toThrowError({name:"TypeError",message:"EncodingError U+976E"});
expect(() => {ms932Encoder.encode("\u976F")}).toThrowError({name:"TypeError",message:"EncodingError U+976F"});
expect(() => {ms932Encoder.encode("\u9770")}).toThrowError({name:"TypeError",message:"EncodingError U+9770"});
expect([...ms932Encoder.encode("靱")].join(",")).toBe("232,213"); // U+9771
expect(() => {ms932Encoder.encode("\u9772")}).toThrowError({name:"TypeError",message:"EncodingError U+9772"});
expect(() => {ms932Encoder.encode("\u9773")}).toThrowError({name:"TypeError",message:"EncodingError U+9773"});
expect([...ms932Encoder.encode("靴")].join(",")).toBe("140,67"); // U+9774
expect(() => {ms932Encoder.encode("\u9775")}).toThrowError({name:"TypeError",message:"EncodingError U+9775"});
expect(() => {ms932Encoder.encode("\u9776")}).toThrowError({name:"TypeError",message:"EncodingError U+9776"});
expect(() => {ms932Encoder.encode("\u9777")}).toThrowError({name:"TypeError",message:"EncodingError U+9777"});
expect(() => {ms932Encoder.encode("\u9778")}).toThrowError({name:"TypeError",message:"EncodingError U+9778"});
expect([...ms932Encoder.encode("靹靺")].join(",")).toBe("232,214,232,218"); // U+9779
expect(() => {ms932Encoder.encode("\u977B")}).toThrowError({name:"TypeError",message:"EncodingError U+977B"});
expect([...ms932Encoder.encode("靼")].join(",")).toBe("232,216"); // U+977C
expect(() => {ms932Encoder.encode("\u977D")}).toThrowError({name:"TypeError",message:"EncodingError U+977D"});
expect(() => {ms932Encoder.encode("\u977E")}).toThrowError({name:"TypeError",message:"EncodingError U+977E"});
expect(() => {ms932Encoder.encode("\u977F")}).toThrowError({name:"TypeError",message:"EncodingError U+977F"});
expect(() => {ms932Encoder.encode("\u9780")}).toThrowError({name:"TypeError",message:"EncodingError U+9780"});
expect([...ms932Encoder.encode("鞁")].join(",")).toBe("232,217"); // U+9781
expect(() => {ms932Encoder.encode("\u9782")}).toThrowError({name:"TypeError",message:"EncodingError U+9782"});
expect(() => {ms932Encoder.encode("\u9783")}).toThrowError({name:"TypeError",message:"EncodingError U+9783"});
expect([...ms932Encoder.encode("鞄鞅鞆")].join(",")).toBe("138,147,232,215,232,219"); // U+9784
expect(() => {ms932Encoder.encode("\u9787")}).toThrowError({name:"TypeError",message:"EncodingError U+9787"});
expect(() => {ms932Encoder.encode("\u9788")}).toThrowError({name:"TypeError",message:"EncodingError U+9788"});
expect(() => {ms932Encoder.encode("\u9789")}).toThrowError({name:"TypeError",message:"EncodingError U+9789"});
expect(() => {ms932Encoder.encode("\u978A")}).toThrowError({name:"TypeError",message:"EncodingError U+978A"});
expect([...ms932Encoder.encode("鞋")].join(",")).toBe("232,220"); // U+978B
expect(() => {ms932Encoder.encode("\u978C")}).toThrowError({name:"TypeError",message:"EncodingError U+978C"});
expect([...ms932Encoder.encode("鞍")].join(",")).toBe("136,198"); // U+978D
expect(() => {ms932Encoder.encode("\u978E")}).toThrowError({name:"TypeError",message:"EncodingError U+978E"});
expect([...ms932Encoder.encode("鞏鞐")].join(",")).toBe("232,221,232,222"); // U+978F
expect(() => {ms932Encoder.encode("\u9791")}).toThrowError({name:"TypeError",message:"EncodingError U+9791"});
expect(() => {ms932Encoder.encode("\u9792")}).toThrowError({name:"TypeError",message:"EncodingError U+9792"});
expect(() => {ms932Encoder.encode("\u9793")}).toThrowError({name:"TypeError",message:"EncodingError U+9793"});
expect(() => {ms932Encoder.encode("\u9794")}).toThrowError({name:"TypeError",message:"EncodingError U+9794"});
expect(() => {ms932Encoder.encode("\u9795")}).toThrowError({name:"TypeError",message:"EncodingError U+9795"});
expect(() => {ms932Encoder.encode("\u9796")}).toThrowError({name:"TypeError",message:"EncodingError U+9796"});
expect(() => {ms932Encoder.encode("\u9797")}).toThrowError({name:"TypeError",message:"EncodingError U+9797"});
expect([...ms932Encoder.encode("鞘")].join(",")).toBe("143,226"); // U+9798
expect(() => {ms932Encoder.encode("\u9799")}).toThrowError({name:"TypeError",message:"EncodingError U+9799"});
expect(() => {ms932Encoder.encode("\u979A")}).toThrowError({name:"TypeError",message:"EncodingError U+979A"});
expect(() => {ms932Encoder.encode("\u979B")}).toThrowError({name:"TypeError",message:"EncodingError U+979B"});
expect([...ms932Encoder.encode("鞜")].join(",")).toBe("232,223"); // U+979C
expect(() => {ms932Encoder.encode("\u979D")}).toThrowError({name:"TypeError",message:"EncodingError U+979D"});
expect(() => {ms932Encoder.encode("\u979E")}).toThrowError({name:"TypeError",message:"EncodingError U+979E"});
expect(() => {ms932Encoder.encode("\u979F")}).toThrowError({name:"TypeError",message:"EncodingError U+979F"});
expect([...ms932Encoder.encode("鞠")].join(",")).toBe("139,102"); // U+97A0
expect(() => {ms932Encoder.encode("\u97A1")}).toThrowError({name:"TypeError",message:"EncodingError U+97A1"});
expect(() => {ms932Encoder.encode("\u97A2")}).toThrowError({name:"TypeError",message:"EncodingError U+97A2"});
expect([...ms932Encoder.encode("鞣")].join(",")).toBe("232,226"); // U+97A3
expect(() => {ms932Encoder.encode("\u97A4")}).toThrowError({name:"TypeError",message:"EncodingError U+97A4"});
expect(() => {ms932Encoder.encode("\u97A5")}).toThrowError({name:"TypeError",message:"EncodingError U+97A5"});
expect([...ms932Encoder.encode("鞦")].join(",")).toBe("232,225"); // U+97A6
expect(() => {ms932Encoder.encode("\u97A7")}).toThrowError({name:"TypeError",message:"EncodingError U+97A7"});
expect([...ms932Encoder.encode("鞨")].join(",")).toBe("232,224"); // U+97A8
expect(() => {ms932Encoder.encode("\u97A9")}).toThrowError({name:"TypeError",message:"EncodingError U+97A9"});
expect(() => {ms932Encoder.encode("\u97AA")}).toThrowError({name:"TypeError",message:"EncodingError U+97AA"});
expect([...ms932Encoder.encode("鞫")].join(",")).toBe("230,145"); // U+97AB
expect(() => {ms932Encoder.encode("\u97AC")}).toThrowError({name:"TypeError",message:"EncodingError U+97AC"});
expect([...ms932Encoder.encode("鞭")].join(",")).toBe("149,218"); // U+97AD
expect(() => {ms932Encoder.encode("\u97AE")}).toThrowError({name:"TypeError",message:"EncodingError U+97AE"});
expect(() => {ms932Encoder.encode("\u97AF")}).toThrowError({name:"TypeError",message:"EncodingError U+97AF"});
expect(() => {ms932Encoder.encode("\u97B0")}).toThrowError({name:"TypeError",message:"EncodingError U+97B0"});
expect(() => {ms932Encoder.encode("\u97B1")}).toThrowError({name:"TypeError",message:"EncodingError U+97B1"});
expect(() => {ms932Encoder.encode("\u97B2")}).toThrowError({name:"TypeError",message:"EncodingError U+97B2"});
expect([...ms932Encoder.encode("鞳鞴")].join(",")).toBe("232,227,232,228"); // U+97B3
expect(() => {ms932Encoder.encode("\u97B5")}).toThrowError({name:"TypeError",message:"EncodingError U+97B5"});
expect(() => {ms932Encoder.encode("\u97B6")}).toThrowError({name:"TypeError",message:"EncodingError U+97B6"});
expect(() => {ms932Encoder.encode("\u97B7")}).toThrowError({name:"TypeError",message:"EncodingError U+97B7"});
expect(() => {ms932Encoder.encode("\u97B8")}).toThrowError({name:"TypeError",message:"EncodingError U+97B8"});
expect(() => {ms932Encoder.encode("\u97B9")}).toThrowError({name:"TypeError",message:"EncodingError U+97B9"});
expect(() => {ms932Encoder.encode("\u97BA")}).toThrowError({name:"TypeError",message:"EncodingError U+97BA"});
expect(() => {ms932Encoder.encode("\u97BB")}).toThrowError({name:"TypeError",message:"EncodingError U+97BB"});
expect(() => {ms932Encoder.encode("\u97BC")}).toThrowError({name:"TypeError",message:"EncodingError U+97BC"});
expect(() => {ms932Encoder.encode("\u97BD")}).toThrowError({name:"TypeError",message:"EncodingError U+97BD"});
expect(() => {ms932Encoder.encode("\u97BE")}).toThrowError({name:"TypeError",message:"EncodingError U+97BE"});
expect(() => {ms932Encoder.encode("\u97BF")}).toThrowError({name:"TypeError",message:"EncodingError U+97BF"});
expect(() => {ms932Encoder.encode("\u97C0")}).toThrowError({name:"TypeError",message:"EncodingError U+97C0"});
expect(() => {ms932Encoder.encode("\u97C1")}).toThrowError({name:"TypeError",message:"EncodingError U+97C1"});
expect(() => {ms932Encoder.encode("\u97C2")}).toThrowError({name:"TypeError",message:"EncodingError U+97C2"});
expect([...ms932Encoder.encode("韃")].join(",")).toBe("232,229"); // U+97C3
expect(() => {ms932Encoder.encode("\u97C4")}).toThrowError({name:"TypeError",message:"EncodingError U+97C4"});
expect(() => {ms932Encoder.encode("\u97C5")}).toThrowError({name:"TypeError",message:"EncodingError U+97C5"});
expect([...ms932Encoder.encode("韆")].join(",")).toBe("232,230"); // U+97C6
expect(() => {ms932Encoder.encode("\u97C7")}).toThrowError({name:"TypeError",message:"EncodingError U+97C7"});
expect([...ms932Encoder.encode("韈")].join(",")).toBe("232,231"); // U+97C8
expect(() => {ms932Encoder.encode("\u97C9")}).toThrowError({name:"TypeError",message:"EncodingError U+97C9"});
expect(() => {ms932Encoder.encode("\u97CA")}).toThrowError({name:"TypeError",message:"EncodingError U+97CA"});
expect([...ms932Encoder.encode("韋")].join(",")).toBe("232,232"); // U+97CB
expect(() => {ms932Encoder.encode("\u97CC")}).toThrowError({name:"TypeError",message:"EncodingError U+97CC"});
expect(() => {ms932Encoder.encode("\u97CD")}).toThrowError({name:"TypeError",message:"EncodingError U+97CD"});
expect(() => {ms932Encoder.encode("\u97CE")}).toThrowError({name:"TypeError",message:"EncodingError U+97CE"});
expect(() => {ms932Encoder.encode("\u97CF")}).toThrowError({name:"TypeError",message:"EncodingError U+97CF"});
expect(() => {ms932Encoder.encode("\u97D0")}).toThrowError({name:"TypeError",message:"EncodingError U+97D0"});
expect(() => {ms932Encoder.encode("\u97D1")}).toThrowError({name:"TypeError",message:"EncodingError U+97D1"});
expect(() => {ms932Encoder.encode("\u97D2")}).toThrowError({name:"TypeError",message:"EncodingError U+97D2"});
expect([...ms932Encoder.encode("韓")].join(",")).toBe("138,216"); // U+97D3
expect(() => {ms932Encoder.encode("\u97D4")}).toThrowError({name:"TypeError",message:"EncodingError U+97D4"});
expect(() => {ms932Encoder.encode("\u97D5")}).toThrowError({name:"TypeError",message:"EncodingError U+97D5"});
expect(() => {ms932Encoder.encode("\u97D6")}).toThrowError({name:"TypeError",message:"EncodingError U+97D6"});
expect(() => {ms932Encoder.encode("\u97D7")}).toThrowError({name:"TypeError",message:"EncodingError U+97D7"});
expect(() => {ms932Encoder.encode("\u97D8")}).toThrowError({name:"TypeError",message:"EncodingError U+97D8"});
expect(() => {ms932Encoder.encode("\u97D9")}).toThrowError({name:"TypeError",message:"EncodingError U+97D9"});
expect(() => {ms932Encoder.encode("\u97DA")}).toThrowError({name:"TypeError",message:"EncodingError U+97DA"});
expect(() => {ms932Encoder.encode("\u97DB")}).toThrowError({name:"TypeError",message:"EncodingError U+97DB"});
expect([...ms932Encoder.encode("韜")].join(",")).toBe("232,233"); // U+97DC
expect(() => {ms932Encoder.encode("\u97DD")}).toThrowError({name:"TypeError",message:"EncodingError U+97DD"});
expect(() => {ms932Encoder.encode("\u97DE")}).toThrowError({name:"TypeError",message:"EncodingError U+97DE"});
expect(() => {ms932Encoder.encode("\u97DF")}).toThrowError({name:"TypeError",message:"EncodingError U+97DF"});
expect(() => {ms932Encoder.encode("\u97E0")}).toThrowError({name:"TypeError",message:"EncodingError U+97E0"});
expect(() => {ms932Encoder.encode("\u97E1")}).toThrowError({name:"TypeError",message:"EncodingError U+97E1"});
expect(() => {ms932Encoder.encode("\u97E2")}).toThrowError({name:"TypeError",message:"EncodingError U+97E2"});
expect(() => {ms932Encoder.encode("\u97E3")}).toThrowError({name:"TypeError",message:"EncodingError U+97E3"});
expect(() => {ms932Encoder.encode("\u97E4")}).toThrowError({name:"TypeError",message:"EncodingError U+97E4"});
expect(() => {ms932Encoder.encode("\u97E5")}).toThrowError({name:"TypeError",message:"EncodingError U+97E5"});
expect(() => {ms932Encoder.encode("\u97E6")}).toThrowError({name:"TypeError",message:"EncodingError U+97E6"});
expect(() => {ms932Encoder.encode("\u97E7")}).toThrowError({name:"TypeError",message:"EncodingError U+97E7"});
expect(() => {ms932Encoder.encode("\u97E8")}).toThrowError({name:"TypeError",message:"EncodingError U+97E8"});
expect(() => {ms932Encoder.encode("\u97E9")}).toThrowError({name:"TypeError",message:"EncodingError U+97E9"});
expect(() => {ms932Encoder.encode("\u97EA")}).toThrowError({name:"TypeError",message:"EncodingError U+97EA"});
expect(() => {ms932Encoder.encode("\u97EB")}).toThrowError({name:"TypeError",message:"EncodingError U+97EB"});
expect(() => {ms932Encoder.encode("\u97EC")}).toThrowError({name:"TypeError",message:"EncodingError U+97EC"});
expect([...ms932Encoder.encode("韭韮")].join(",")).toBe("232,234,148,66"); // U+97ED
expect(() => {ms932Encoder.encode("\u97EF")}).toThrowError({name:"TypeError",message:"EncodingError U+97EF"});
expect(() => {ms932Encoder.encode("\u97F0")}).toThrowError({name:"TypeError",message:"EncodingError U+97F0"});
expect(() => {ms932Encoder.encode("\u97F1")}).toThrowError({name:"TypeError",message:"EncodingError U+97F1"});
expect([...ms932Encoder.encode("韲音")].join(",")).toBe("232,236,137,185"); // U+97F2
expect(() => {ms932Encoder.encode("\u97F4")}).toThrowError({name:"TypeError",message:"EncodingError U+97F4"});
expect([...ms932Encoder.encode("韵韶")].join(",")).toBe("232,239,232,238"); // U+97F5
expect(() => {ms932Encoder.encode("\u97F7")}).toThrowError({name:"TypeError",message:"EncodingError U+97F7"});
expect(() => {ms932Encoder.encode("\u97F8")}).toThrowError({name:"TypeError",message:"EncodingError U+97F8"});
expect(() => {ms932Encoder.encode("\u97F9")}).toThrowError({name:"TypeError",message:"EncodingError U+97F9"});
expect(() => {ms932Encoder.encode("\u97FA")}).toThrowError({name:"TypeError",message:"EncodingError U+97FA"});
expect([...ms932Encoder.encode("韻")].join(",")).toBe("137,67"); // U+97FB
expect(() => {ms932Encoder.encode("\u97FC")}).toThrowError({name:"TypeError",message:"EncodingError U+97FC"});
expect(() => {ms932Encoder.encode("\u97FD")}).toThrowError({name:"TypeError",message:"EncodingError U+97FD"});
expect(() => {ms932Encoder.encode("\u97FE")}).toThrowError({name:"TypeError",message:"EncodingError U+97FE"});
expect([...ms932Encoder.encode("響")].join(",")).toBe("139,191"); // U+97FF
expect(() => {ms932Encoder.encode("\u9800")}).toThrowError({name:"TypeError",message:"EncodingError U+9800"});
expect([...ms932Encoder.encode("頁頂頃")].join(",")).toBe("149,197,146,184,141,160"); // U+9801
expect(() => {ms932Encoder.encode("\u9804")}).toThrowError({name:"TypeError",message:"EncodingError U+9804"});
expect([...ms932Encoder.encode("項順")].join(",")).toBe("141,128,143,135"); // U+9805
expect(() => {ms932Encoder.encode("\u9807")}).toThrowError({name:"TypeError",message:"EncodingError U+9807"});
expect([...ms932Encoder.encode("須")].join(",")).toBe("144,123"); // U+9808
expect(() => {ms932Encoder.encode("\u9809")}).toThrowError({name:"TypeError",message:"EncodingError U+9809"});
expect(() => {ms932Encoder.encode("\u980A")}).toThrowError({name:"TypeError",message:"EncodingError U+980A"});
expect(() => {ms932Encoder.encode("\u980B")}).toThrowError({name:"TypeError",message:"EncodingError U+980B"});
expect([...ms932Encoder.encode("頌")].join(",")).toBe("232,241"); // U+980C
expect(() => {ms932Encoder.encode("\u980D")}).toThrowError({name:"TypeError",message:"EncodingError U+980D"});
expect(() => {ms932Encoder.encode("\u980E")}).toThrowError({name:"TypeError",message:"EncodingError U+980E"});
expect([...ms932Encoder.encode("頏預頑頒頓")].join(",")).toBe("232,240,151,97,138,230,148,208,147,218"); // U+980F
expect(() => {ms932Encoder.encode("\u9814")}).toThrowError({name:"TypeError",message:"EncodingError U+9814"});
expect(() => {ms932Encoder.encode("\u9815")}).toThrowError({name:"TypeError",message:"EncodingError U+9815"});
expect(() => {ms932Encoder.encode("\u9816")}).toThrowError({name:"TypeError",message:"EncodingError U+9816"});
expect([...ms932Encoder.encode("頗領")].join(",")).toBe("144,156,151,204"); // U+9817
expect(() => {ms932Encoder.encode("\u9819")}).toThrowError({name:"TypeError",message:"EncodingError U+9819"});
expect([...ms932Encoder.encode("頚")].join(",")).toBe("140,122"); // U+981A
expect(() => {ms932Encoder.encode("\u981B")}).toThrowError({name:"TypeError",message:"EncodingError U+981B"});
expect(() => {ms932Encoder.encode("\u981C")}).toThrowError({name:"TypeError",message:"EncodingError U+981C"});
expect(() => {ms932Encoder.encode("\u981D")}).toThrowError({name:"TypeError",message:"EncodingError U+981D"});
expect(() => {ms932Encoder.encode("\u981E")}).toThrowError({name:"TypeError",message:"EncodingError U+981E"});
expect(() => {ms932Encoder.encode("\u981F")}).toThrowError({name:"TypeError",message:"EncodingError U+981F"});
expect(() => {ms932Encoder.encode("\u9820")}).toThrowError({name:"TypeError",message:"EncodingError U+9820"});
expect([...ms932Encoder.encode("頡")].join(",")).toBe("232,244"); // U+9821
expect(() => {ms932Encoder.encode("\u9822")}).toThrowError({name:"TypeError",message:"EncodingError U+9822"});
expect(() => {ms932Encoder.encode("\u9823")}).toThrowError({name:"TypeError",message:"EncodingError U+9823"});
expect([...ms932Encoder.encode("頤")].join(",")).toBe("232,243"); // U+9824
expect(() => {ms932Encoder.encode("\u9825")}).toThrowError({name:"TypeError",message:"EncodingError U+9825"});
expect(() => {ms932Encoder.encode("\u9826")}).toThrowError({name:"TypeError",message:"EncodingError U+9826"});
expect(() => {ms932Encoder.encode("\u9827")}).toThrowError({name:"TypeError",message:"EncodingError U+9827"});
expect(() => {ms932Encoder.encode("\u9828")}).toThrowError({name:"TypeError",message:"EncodingError U+9828"});
expect(() => {ms932Encoder.encode("\u9829")}).toThrowError({name:"TypeError",message:"EncodingError U+9829"});
expect(() => {ms932Encoder.encode("\u982A")}).toThrowError({name:"TypeError",message:"EncodingError U+982A"});
expect(() => {ms932Encoder.encode("\u982B")}).toThrowError({name:"TypeError",message:"EncodingError U+982B"});
expect([...ms932Encoder.encode("頬頭")].join(",")).toBe("150,106,147,170"); // U+982C
expect(() => {ms932Encoder.encode("\u982E")}).toThrowError({name:"TypeError",message:"EncodingError U+982E"});
expect(() => {ms932Encoder.encode("\u982F")}).toThrowError({name:"TypeError",message:"EncodingError U+982F"});
expect(() => {ms932Encoder.encode("\u9830")}).toThrowError({name:"TypeError",message:"EncodingError U+9830"});
expect(() => {ms932Encoder.encode("\u9831")}).toThrowError({name:"TypeError",message:"EncodingError U+9831"});
expect(() => {ms932Encoder.encode("\u9832")}).toThrowError({name:"TypeError",message:"EncodingError U+9832"});
expect(() => {ms932Encoder.encode("\u9833")}).toThrowError({name:"TypeError",message:"EncodingError U+9833"});
expect([...ms932Encoder.encode("頴")].join(",")).toBe("137,111"); // U+9834
expect(() => {ms932Encoder.encode("\u9835")}).toThrowError({name:"TypeError",message:"EncodingError U+9835"});
expect(() => {ms932Encoder.encode("\u9836")}).toThrowError({name:"TypeError",message:"EncodingError U+9836"});
expect([...ms932Encoder.encode("頷頸")].join(",")).toBe("232,245,232,242"); // U+9837
expect(() => {ms932Encoder.encode("\u9839")}).toThrowError({name:"TypeError",message:"EncodingError U+9839"});
expect(() => {ms932Encoder.encode("\u983A")}).toThrowError({name:"TypeError",message:"EncodingError U+983A"});
expect([...ms932Encoder.encode("頻頼頽")].join(",")).toBe("149,112,151,138,232,246"); // U+983B
expect(() => {ms932Encoder.encode("\u983E")}).toThrowError({name:"TypeError",message:"EncodingError U+983E"});
expect(() => {ms932Encoder.encode("\u983F")}).toThrowError({name:"TypeError",message:"EncodingError U+983F"});
expect(() => {ms932Encoder.encode("\u9840")}).toThrowError({name:"TypeError",message:"EncodingError U+9840"});
expect(() => {ms932Encoder.encode("\u9841")}).toThrowError({name:"TypeError",message:"EncodingError U+9841"});
expect(() => {ms932Encoder.encode("\u9842")}).toThrowError({name:"TypeError",message:"EncodingError U+9842"});
expect(() => {ms932Encoder.encode("\u9843")}).toThrowError({name:"TypeError",message:"EncodingError U+9843"});
expect(() => {ms932Encoder.encode("\u9844")}).toThrowError({name:"TypeError",message:"EncodingError U+9844"});
expect(() => {ms932Encoder.encode("\u9845")}).toThrowError({name:"TypeError",message:"EncodingError U+9845"});
expect([...ms932Encoder.encode("顆")].join(",")).toBe("232,247"); // U+9846
expect(() => {ms932Encoder.encode("\u9847")}).toThrowError({name:"TypeError",message:"EncodingError U+9847"});
expect(() => {ms932Encoder.encode("\u9848")}).toThrowError({name:"TypeError",message:"EncodingError U+9848"});
expect(() => {ms932Encoder.encode("\u9849")}).toThrowError({name:"TypeError",message:"EncodingError U+9849"});
expect(() => {ms932Encoder.encode("\u984A")}).toThrowError({name:"TypeError",message:"EncodingError U+984A"});
expect([...ms932Encoder.encode("顋題額顎顏")].join(",")).toBe("232,249,145,232,138,122,138,123,232,248"); // U+984B
expect(() => {ms932Encoder.encode("\u9850")}).toThrowError({name:"TypeError",message:"EncodingError U+9850"});
expect(() => {ms932Encoder.encode("\u9851")}).toThrowError({name:"TypeError",message:"EncodingError U+9851"});
expect(() => {ms932Encoder.encode("\u9852")}).toThrowError({name:"TypeError",message:"EncodingError U+9852"});
expect(() => {ms932Encoder.encode("\u9853")}).toThrowError({name:"TypeError",message:"EncodingError U+9853"});
expect([...ms932Encoder.encode("顔顕")].join(",")).toBe("138,231,140,176"); // U+9854
expect(() => {ms932Encoder.encode("\u9856")}).toThrowError({name:"TypeError",message:"EncodingError U+9856"});
expect([...ms932Encoder.encode("顗願")].join(",")).toBe("251,244,138,232"); // U+9857
expect(() => {ms932Encoder.encode("\u9859")}).toThrowError({name:"TypeError",message:"EncodingError U+9859"});
expect(() => {ms932Encoder.encode("\u985A")}).toThrowError({name:"TypeError",message:"EncodingError U+985A"});
expect([...ms932Encoder.encode("顛")].join(",")).toBe("147,94"); // U+985B
expect(() => {ms932Encoder.encode("\u985C")}).toThrowError({name:"TypeError",message:"EncodingError U+985C"});
expect(() => {ms932Encoder.encode("\u985D")}).toThrowError({name:"TypeError",message:"EncodingError U+985D"});
expect([...ms932Encoder.encode("類")].join(",")).toBe("151,222"); // U+985E
expect(() => {ms932Encoder.encode("\u985F")}).toThrowError({name:"TypeError",message:"EncodingError U+985F"});
expect(() => {ms932Encoder.encode("\u9860")}).toThrowError({name:"TypeError",message:"EncodingError U+9860"});
expect(() => {ms932Encoder.encode("\u9861")}).toThrowError({name:"TypeError",message:"EncodingError U+9861"});
expect(() => {ms932Encoder.encode("\u9862")}).toThrowError({name:"TypeError",message:"EncodingError U+9862"});
expect(() => {ms932Encoder.encode("\u9863")}).toThrowError({name:"TypeError",message:"EncodingError U+9863"});
expect(() => {ms932Encoder.encode("\u9864")}).toThrowError({name:"TypeError",message:"EncodingError U+9864"});
expect([...ms932Encoder.encode("顥")].join(",")).toBe("251,245"); // U+9865
expect(() => {ms932Encoder.encode("\u9866")}).toThrowError({name:"TypeError",message:"EncodingError U+9866"});
expect([...ms932Encoder.encode("顧")].join(",")).toBe("140,218"); // U+9867
expect(() => {ms932Encoder.encode("\u9868")}).toThrowError({name:"TypeError",message:"EncodingError U+9868"});
expect(() => {ms932Encoder.encode("\u9869")}).toThrowError({name:"TypeError",message:"EncodingError U+9869"});
expect(() => {ms932Encoder.encode("\u986A")}).toThrowError({name:"TypeError",message:"EncodingError U+986A"});
expect([...ms932Encoder.encode("顫")].join(",")).toBe("232,250"); // U+986B
expect(() => {ms932Encoder.encode("\u986C")}).toThrowError({name:"TypeError",message:"EncodingError U+986C"});
expect(() => {ms932Encoder.encode("\u986D")}).toThrowError({name:"TypeError",message:"EncodingError U+986D"});
expect(() => {ms932Encoder.encode("\u986E")}).toThrowError({name:"TypeError",message:"EncodingError U+986E"});
expect([...ms932Encoder.encode("顯顰顱")].join(",")).toBe("232,251,232,252,233,64"); // U+986F
expect(() => {ms932Encoder.encode("\u9872")}).toThrowError({name:"TypeError",message:"EncodingError U+9872"});
expect([...ms932Encoder.encode("顳顴")].join(",")).toBe("233,66,233,65"); // U+9873
expect(() => {ms932Encoder.encode("\u9875")}).toThrowError({name:"TypeError",message:"EncodingError U+9875"});
expect(() => {ms932Encoder.encode("\u9876")}).toThrowError({name:"TypeError",message:"EncodingError U+9876"});
expect(() => {ms932Encoder.encode("\u9877")}).toThrowError({name:"TypeError",message:"EncodingError U+9877"});
expect(() => {ms932Encoder.encode("\u9878")}).toThrowError({name:"TypeError",message:"EncodingError U+9878"});
expect(() => {ms932Encoder.encode("\u9879")}).toThrowError({name:"TypeError",message:"EncodingError U+9879"});
expect(() => {ms932Encoder.encode("\u987A")}).toThrowError({name:"TypeError",message:"EncodingError U+987A"});
expect(() => {ms932Encoder.encode("\u987B")}).toThrowError({name:"TypeError",message:"EncodingError U+987B"});
expect(() => {ms932Encoder.encode("\u987C")}).toThrowError({name:"TypeError",message:"EncodingError U+987C"});
expect(() => {ms932Encoder.encode("\u987D")}).toThrowError({name:"TypeError",message:"EncodingError U+987D"});
expect(() => {ms932Encoder.encode("\u987E")}).toThrowError({name:"TypeError",message:"EncodingError U+987E"});
expect(() => {ms932Encoder.encode("\u987F")}).toThrowError({name:"TypeError",message:"EncodingError U+987F"});
expect(() => {ms932Encoder.encode("\u9880")}).toThrowError({name:"TypeError",message:"EncodingError U+9880"});
expect(() => {ms932Encoder.encode("\u9881")}).toThrowError({name:"TypeError",message:"EncodingError U+9881"});
expect(() => {ms932Encoder.encode("\u9882")}).toThrowError({name:"TypeError",message:"EncodingError U+9882"});
expect(() => {ms932Encoder.encode("\u9883")}).toThrowError({name:"TypeError",message:"EncodingError U+9883"});
expect(() => {ms932Encoder.encode("\u9884")}).toThrowError({name:"TypeError",message:"EncodingError U+9884"});
expect(() => {ms932Encoder.encode("\u9885")}).toThrowError({name:"TypeError",message:"EncodingError U+9885"});
expect(() => {ms932Encoder.encode("\u9886")}).toThrowError({name:"TypeError",message:"EncodingError U+9886"});
expect(() => {ms932Encoder.encode("\u9887")}).toThrowError({name:"TypeError",message:"EncodingError U+9887"});
expect(() => {ms932Encoder.encode("\u9888")}).toThrowError({name:"TypeError",message:"EncodingError U+9888"});
expect(() => {ms932Encoder.encode("\u9889")}).toThrowError({name:"TypeError",message:"EncodingError U+9889"});
expect(() => {ms932Encoder.encode("\u988A")}).toThrowError({name:"TypeError",message:"EncodingError U+988A"});
expect(() => {ms932Encoder.encode("\u988B")}).toThrowError({name:"TypeError",message:"EncodingError U+988B"});
expect(() => {ms932Encoder.encode("\u988C")}).toThrowError({name:"TypeError",message:"EncodingError U+988C"});
expect(() => {ms932Encoder.encode("\u988D")}).toThrowError({name:"TypeError",message:"EncodingError U+988D"});
expect(() => {ms932Encoder.encode("\u988E")}).toThrowError({name:"TypeError",message:"EncodingError U+988E"});
expect(() => {ms932Encoder.encode("\u988F")}).toThrowError({name:"TypeError",message:"EncodingError U+988F"});
expect(() => {ms932Encoder.encode("\u9890")}).toThrowError({name:"TypeError",message:"EncodingError U+9890"});
expect(() => {ms932Encoder.encode("\u9891")}).toThrowError({name:"TypeError",message:"EncodingError U+9891"});
expect(() => {ms932Encoder.encode("\u9892")}).toThrowError({name:"TypeError",message:"EncodingError U+9892"});
expect(() => {ms932Encoder.encode("\u9893")}).toThrowError({name:"TypeError",message:"EncodingError U+9893"});
expect(() => {ms932Encoder.encode("\u9894")}).toThrowError({name:"TypeError",message:"EncodingError U+9894"});
expect(() => {ms932Encoder.encode("\u9895")}).toThrowError({name:"TypeError",message:"EncodingError U+9895"});
expect(() => {ms932Encoder.encode("\u9896")}).toThrowError({name:"TypeError",message:"EncodingError U+9896"});
expect(() => {ms932Encoder.encode("\u9897")}).toThrowError({name:"TypeError",message:"EncodingError U+9897"});
expect(() => {ms932Encoder.encode("\u9898")}).toThrowError({name:"TypeError",message:"EncodingError U+9898"});
expect(() => {ms932Encoder.encode("\u9899")}).toThrowError({name:"TypeError",message:"EncodingError U+9899"});
expect(() => {ms932Encoder.encode("\u989A")}).toThrowError({name:"TypeError",message:"EncodingError U+989A"});
expect(() => {ms932Encoder.encode("\u989B")}).toThrowError({name:"TypeError",message:"EncodingError U+989B"});
expect(() => {ms932Encoder.encode("\u989C")}).toThrowError({name:"TypeError",message:"EncodingError U+989C"});
expect(() => {ms932Encoder.encode("\u989D")}).toThrowError({name:"TypeError",message:"EncodingError U+989D"});
expect(() => {ms932Encoder.encode("\u989E")}).toThrowError({name:"TypeError",message:"EncodingError U+989E"});
expect(() => {ms932Encoder.encode("\u989F")}).toThrowError({name:"TypeError",message:"EncodingError U+989F"});
expect(() => {ms932Encoder.encode("\u98A0")}).toThrowError({name:"TypeError",message:"EncodingError U+98A0"});
expect(() => {ms932Encoder.encode("\u98A1")}).toThrowError({name:"TypeError",message:"EncodingError U+98A1"});
expect(() => {ms932Encoder.encode("\u98A2")}).toThrowError({name:"TypeError",message:"EncodingError U+98A2"});
expect(() => {ms932Encoder.encode("\u98A3")}).toThrowError({name:"TypeError",message:"EncodingError U+98A3"});
expect(() => {ms932Encoder.encode("\u98A4")}).toThrowError({name:"TypeError",message:"EncodingError U+98A4"});
expect(() => {ms932Encoder.encode("\u98A5")}).toThrowError({name:"TypeError",message:"EncodingError U+98A5"});
expect(() => {ms932Encoder.encode("\u98A6")}).toThrowError({name:"TypeError",message:"EncodingError U+98A6"});
expect(() => {ms932Encoder.encode("\u98A7")}).toThrowError({name:"TypeError",message:"EncodingError U+98A7"});
expect([...ms932Encoder.encode("風")].join(",")).toBe("149,151"); // U+98A8
expect(() => {ms932Encoder.encode("\u98A9")}).toThrowError({name:"TypeError",message:"EncodingError U+98A9"});
expect([...ms932Encoder.encode("颪")].join(",")).toBe("233,67"); // U+98AA
expect(() => {ms932Encoder.encode("\u98AB")}).toThrowError({name:"TypeError",message:"EncodingError U+98AB"});
expect(() => {ms932Encoder.encode("\u98AC")}).toThrowError({name:"TypeError",message:"EncodingError U+98AC"});
expect(() => {ms932Encoder.encode("\u98AD")}).toThrowError({name:"TypeError",message:"EncodingError U+98AD"});
expect(() => {ms932Encoder.encode("\u98AE")}).toThrowError({name:"TypeError",message:"EncodingError U+98AE"});
expect([...ms932Encoder.encode("颯")].join(",")).toBe("233,68"); // U+98AF
expect(() => {ms932Encoder.encode("\u98B0")}).toThrowError({name:"TypeError",message:"EncodingError U+98B0"});
expect([...ms932Encoder.encode("颱")].join(",")).toBe("233,69"); // U+98B1
expect(() => {ms932Encoder.encode("\u98B2")}).toThrowError({name:"TypeError",message:"EncodingError U+98B2"});
expect(() => {ms932Encoder.encode("\u98B3")}).toThrowError({name:"TypeError",message:"EncodingError U+98B3"});
expect(() => {ms932Encoder.encode("\u98B4")}).toThrowError({name:"TypeError",message:"EncodingError U+98B4"});
expect(() => {ms932Encoder.encode("\u98B5")}).toThrowError({name:"TypeError",message:"EncodingError U+98B5"});
expect([...ms932Encoder.encode("颶")].join(",")).toBe("233,70"); // U+98B6
expect(() => {ms932Encoder.encode("\u98B7")}).toThrowError({name:"TypeError",message:"EncodingError U+98B7"});
expect(() => {ms932Encoder.encode("\u98B8")}).toThrowError({name:"TypeError",message:"EncodingError U+98B8"});
expect(() => {ms932Encoder.encode("\u98B9")}).toThrowError({name:"TypeError",message:"EncodingError U+98B9"});
expect(() => {ms932Encoder.encode("\u98BA")}).toThrowError({name:"TypeError",message:"EncodingError U+98BA"});
expect(() => {ms932Encoder.encode("\u98BB")}).toThrowError({name:"TypeError",message:"EncodingError U+98BB"});
expect(() => {ms932Encoder.encode("\u98BC")}).toThrowError({name:"TypeError",message:"EncodingError U+98BC"});
expect(() => {ms932Encoder.encode("\u98BD")}).toThrowError({name:"TypeError",message:"EncodingError U+98BD"});
expect(() => {ms932Encoder.encode("\u98BE")}).toThrowError({name:"TypeError",message:"EncodingError U+98BE"});
expect(() => {ms932Encoder.encode("\u98BF")}).toThrowError({name:"TypeError",message:"EncodingError U+98BF"});
expect(() => {ms932Encoder.encode("\u98C0")}).toThrowError({name:"TypeError",message:"EncodingError U+98C0"});
expect(() => {ms932Encoder.encode("\u98C1")}).toThrowError({name:"TypeError",message:"EncodingError U+98C1"});
expect(() => {ms932Encoder.encode("\u98C2")}).toThrowError({name:"TypeError",message:"EncodingError U+98C2"});
expect([...ms932Encoder.encode("飃飄")].join(",")).toBe("233,72,233,71"); // U+98C3
expect(() => {ms932Encoder.encode("\u98C5")}).toThrowError({name:"TypeError",message:"EncodingError U+98C5"});
expect([...ms932Encoder.encode("飆")].join(",")).toBe("233,73"); // U+98C6
expect(() => {ms932Encoder.encode("\u98C7")}).toThrowError({name:"TypeError",message:"EncodingError U+98C7"});
expect(() => {ms932Encoder.encode("\u98C8")}).toThrowError({name:"TypeError",message:"EncodingError U+98C8"});
expect(() => {ms932Encoder.encode("\u98C9")}).toThrowError({name:"TypeError",message:"EncodingError U+98C9"});
expect(() => {ms932Encoder.encode("\u98CA")}).toThrowError({name:"TypeError",message:"EncodingError U+98CA"});
expect(() => {ms932Encoder.encode("\u98CB")}).toThrowError({name:"TypeError",message:"EncodingError U+98CB"});
expect(() => {ms932Encoder.encode("\u98CC")}).toThrowError({name:"TypeError",message:"EncodingError U+98CC"});
expect(() => {ms932Encoder.encode("\u98CD")}).toThrowError({name:"TypeError",message:"EncodingError U+98CD"});
expect(() => {ms932Encoder.encode("\u98CE")}).toThrowError({name:"TypeError",message:"EncodingError U+98CE"});
expect(() => {ms932Encoder.encode("\u98CF")}).toThrowError({name:"TypeError",message:"EncodingError U+98CF"});
expect(() => {ms932Encoder.encode("\u98D0")}).toThrowError({name:"TypeError",message:"EncodingError U+98D0"});
expect(() => {ms932Encoder.encode("\u98D1")}).toThrowError({name:"TypeError",message:"EncodingError U+98D1"});
expect(() => {ms932Encoder.encode("\u98D2")}).toThrowError({name:"TypeError",message:"EncodingError U+98D2"});
expect(() => {ms932Encoder.encode("\u98D3")}).toThrowError({name:"TypeError",message:"EncodingError U+98D3"});
expect(() => {ms932Encoder.encode("\u98D4")}).toThrowError({name:"TypeError",message:"EncodingError U+98D4"});
expect(() => {ms932Encoder.encode("\u98D5")}).toThrowError({name:"TypeError",message:"EncodingError U+98D5"});
expect(() => {ms932Encoder.encode("\u98D6")}).toThrowError({name:"TypeError",message:"EncodingError U+98D6"});
expect(() => {ms932Encoder.encode("\u98D7")}).toThrowError({name:"TypeError",message:"EncodingError U+98D7"});
expect(() => {ms932Encoder.encode("\u98D8")}).toThrowError({name:"TypeError",message:"EncodingError U+98D8"});
expect(() => {ms932Encoder.encode("\u98D9")}).toThrowError({name:"TypeError",message:"EncodingError U+98D9"});
expect(() => {ms932Encoder.encode("\u98DA")}).toThrowError({name:"TypeError",message:"EncodingError U+98DA"});
expect([...ms932Encoder.encode("飛飜")].join(",")).toBe("148,242,227,202"); // U+98DB
expect(() => {ms932Encoder.encode("\u98DD")}).toThrowError({name:"TypeError",message:"EncodingError U+98DD"});
expect(() => {ms932Encoder.encode("\u98DE")}).toThrowError({name:"TypeError",message:"EncodingError U+98DE"});
expect([...ms932Encoder.encode("食")].join(",")).toBe("144,72"); // U+98DF
expect(() => {ms932Encoder.encode("\u98E0")}).toThrowError({name:"TypeError",message:"EncodingError U+98E0"});
expect(() => {ms932Encoder.encode("\u98E1")}).toThrowError({name:"TypeError",message:"EncodingError U+98E1"});
expect([...ms932Encoder.encode("飢")].join(",")).toBe("139,81"); // U+98E2
expect(() => {ms932Encoder.encode("\u98E3")}).toThrowError({name:"TypeError",message:"EncodingError U+98E3"});
expect(() => {ms932Encoder.encode("\u98E4")}).toThrowError({name:"TypeError",message:"EncodingError U+98E4"});
expect(() => {ms932Encoder.encode("\u98E5")}).toThrowError({name:"TypeError",message:"EncodingError U+98E5"});
expect(() => {ms932Encoder.encode("\u98E6")}).toThrowError({name:"TypeError",message:"EncodingError U+98E6"});
expect(() => {ms932Encoder.encode("\u98E7")}).toThrowError({name:"TypeError",message:"EncodingError U+98E7"});
expect(() => {ms932Encoder.encode("\u98E8")}).toThrowError({name:"TypeError",message:"EncodingError U+98E8"});
expect([...ms932Encoder.encode("飩")].join(",")).toBe("233,74"); // U+98E9
expect(() => {ms932Encoder.encode("\u98EA")}).toThrowError({name:"TypeError",message:"EncodingError U+98EA"});
expect([...ms932Encoder.encode("飫")].join(",")).toBe("233,75"); // U+98EB
expect(() => {ms932Encoder.encode("\u98EC")}).toThrowError({name:"TypeError",message:"EncodingError U+98EC"});
expect([...ms932Encoder.encode("飭飮飯")].join(",")).toBe("153,170,159,90,148,209"); // U+98ED
expect(() => {ms932Encoder.encode("\u98F0")}).toThrowError({name:"TypeError",message:"EncodingError U+98F0"});
expect(() => {ms932Encoder.encode("\u98F1")}).toThrowError({name:"TypeError",message:"EncodingError U+98F1"});
expect([...ms932Encoder.encode("飲")].join(",")).toBe("136,249"); // U+98F2
expect(() => {ms932Encoder.encode("\u98F3")}).toThrowError({name:"TypeError",message:"EncodingError U+98F3"});
expect([...ms932Encoder.encode("飴")].join(",")).toBe("136,185"); // U+98F4
expect(() => {ms932Encoder.encode("\u98F5")}).toThrowError({name:"TypeError",message:"EncodingError U+98F5"});
expect(() => {ms932Encoder.encode("\u98F6")}).toThrowError({name:"TypeError",message:"EncodingError U+98F6"});
expect(() => {ms932Encoder.encode("\u98F7")}).toThrowError({name:"TypeError",message:"EncodingError U+98F7"});
expect(() => {ms932Encoder.encode("\u98F8")}).toThrowError({name:"TypeError",message:"EncodingError U+98F8"});
expect(() => {ms932Encoder.encode("\u98F9")}).toThrowError({name:"TypeError",message:"EncodingError U+98F9"});
expect(() => {ms932Encoder.encode("\u98FA")}).toThrowError({name:"TypeError",message:"EncodingError U+98FA"});
expect(() => {ms932Encoder.encode("\u98FB")}).toThrowError({name:"TypeError",message:"EncodingError U+98FB"});
expect([...ms932Encoder.encode("飼飽飾")].join(",")).toBe("142,148,150,79,143,252"); // U+98FC
expect(() => {ms932Encoder.encode("\u98FF")}).toThrowError({name:"TypeError",message:"EncodingError U+98FF"});
expect(() => {ms932Encoder.encode("\u9900")}).toThrowError({name:"TypeError",message:"EncodingError U+9900"});
expect(() => {ms932Encoder.encode("\u9901")}).toThrowError({name:"TypeError",message:"EncodingError U+9901"});
expect(() => {ms932Encoder.encode("\u9902")}).toThrowError({name:"TypeError",message:"EncodingError U+9902"});
expect([...ms932Encoder.encode("餃")].join(",")).toBe("233,76"); // U+9903
expect(() => {ms932Encoder.encode("\u9904")}).toThrowError({name:"TypeError",message:"EncodingError U+9904"});
expect([...ms932Encoder.encode("餅")].join(",")).toBe("150,221"); // U+9905
expect(() => {ms932Encoder.encode("\u9906")}).toThrowError({name:"TypeError",message:"EncodingError U+9906"});
expect(() => {ms932Encoder.encode("\u9907")}).toThrowError({name:"TypeError",message:"EncodingError U+9907"});
expect(() => {ms932Encoder.encode("\u9908")}).toThrowError({name:"TypeError",message:"EncodingError U+9908"});
expect([...ms932Encoder.encode("餉養")].join(",")).toBe("233,77,151,123"); // U+9909
expect(() => {ms932Encoder.encode("\u990B")}).toThrowError({name:"TypeError",message:"EncodingError U+990B"});
expect([...ms932Encoder.encode("餌")].join(",")).toBe("137,97"); // U+990C
expect(() => {ms932Encoder.encode("\u990D")}).toThrowError({name:"TypeError",message:"EncodingError U+990D"});
expect(() => {ms932Encoder.encode("\u990E")}).toThrowError({name:"TypeError",message:"EncodingError U+990E"});
expect(() => {ms932Encoder.encode("\u990F")}).toThrowError({name:"TypeError",message:"EncodingError U+990F"});
expect([...ms932Encoder.encode("餐")].join(",")).toBe("142,96"); // U+9910
expect(() => {ms932Encoder.encode("\u9911")}).toThrowError({name:"TypeError",message:"EncodingError U+9911"});
expect([...ms932Encoder.encode("餒餓餔")].join(",")).toBe("233,78,137,236,233,79"); // U+9912
expect(() => {ms932Encoder.encode("\u9915")}).toThrowError({name:"TypeError",message:"EncodingError U+9915"});
expect(() => {ms932Encoder.encode("\u9916")}).toThrowError({name:"TypeError",message:"EncodingError U+9916"});
expect(() => {ms932Encoder.encode("\u9917")}).toThrowError({name:"TypeError",message:"EncodingError U+9917"});
expect([...ms932Encoder.encode("餘")].join(",")).toBe("233,80"); // U+9918
expect(() => {ms932Encoder.encode("\u9919")}).toThrowError({name:"TypeError",message:"EncodingError U+9919"});
expect(() => {ms932Encoder.encode("\u991A")}).toThrowError({name:"TypeError",message:"EncodingError U+991A"});
expect(() => {ms932Encoder.encode("\u991B")}).toThrowError({name:"TypeError",message:"EncodingError U+991B"});
expect(() => {ms932Encoder.encode("\u991C")}).toThrowError({name:"TypeError",message:"EncodingError U+991C"});
expect([...ms932Encoder.encode("餝餞")].join(",")).toBe("233,82,233,83"); // U+991D
expect(() => {ms932Encoder.encode("\u991F")}).toThrowError({name:"TypeError",message:"EncodingError U+991F"});
expect([...ms932Encoder.encode("餠餡")].join(",")).toBe("233,85,233,81"); // U+9920
expect(() => {ms932Encoder.encode("\u9922")}).toThrowError({name:"TypeError",message:"EncodingError U+9922"});
expect(() => {ms932Encoder.encode("\u9923")}).toThrowError({name:"TypeError",message:"EncodingError U+9923"});
expect([...ms932Encoder.encode("餤")].join(",")).toBe("233,84"); // U+9924
expect(() => {ms932Encoder.encode("\u9925")}).toThrowError({name:"TypeError",message:"EncodingError U+9925"});
expect(() => {ms932Encoder.encode("\u9926")}).toThrowError({name:"TypeError",message:"EncodingError U+9926"});
expect([...ms932Encoder.encode("餧館")].join(",")).toBe("251,248,138,217"); // U+9927
expect(() => {ms932Encoder.encode("\u9929")}).toThrowError({name:"TypeError",message:"EncodingError U+9929"});
expect(() => {ms932Encoder.encode("\u992A")}).toThrowError({name:"TypeError",message:"EncodingError U+992A"});
expect(() => {ms932Encoder.encode("\u992B")}).toThrowError({name:"TypeError",message:"EncodingError U+992B"});
expect([...ms932Encoder.encode("餬")].join(",")).toBe("233,86"); // U+992C
expect(() => {ms932Encoder.encode("\u992D")}).toThrowError({name:"TypeError",message:"EncodingError U+992D"});
expect([...ms932Encoder.encode("餮")].join(",")).toBe("233,87"); // U+992E
expect(() => {ms932Encoder.encode("\u992F")}).toThrowError({name:"TypeError",message:"EncodingError U+992F"});
expect(() => {ms932Encoder.encode("\u9930")}).toThrowError({name:"TypeError",message:"EncodingError U+9930"});
expect(() => {ms932Encoder.encode("\u9931")}).toThrowError({name:"TypeError",message:"EncodingError U+9931"});
expect(() => {ms932Encoder.encode("\u9932")}).toThrowError({name:"TypeError",message:"EncodingError U+9932"});
expect(() => {ms932Encoder.encode("\u9933")}).toThrowError({name:"TypeError",message:"EncodingError U+9933"});
expect(() => {ms932Encoder.encode("\u9934")}).toThrowError({name:"TypeError",message:"EncodingError U+9934"});
expect(() => {ms932Encoder.encode("\u9935")}).toThrowError({name:"TypeError",message:"EncodingError U+9935"});
expect(() => {ms932Encoder.encode("\u9936")}).toThrowError({name:"TypeError",message:"EncodingError U+9936"});
expect(() => {ms932Encoder.encode("\u9937")}).toThrowError({name:"TypeError",message:"EncodingError U+9937"});
expect(() => {ms932Encoder.encode("\u9938")}).toThrowError({name:"TypeError",message:"EncodingError U+9938"});
expect(() => {ms932Encoder.encode("\u9939")}).toThrowError({name:"TypeError",message:"EncodingError U+9939"});
expect(() => {ms932Encoder.encode("\u993A")}).toThrowError({name:"TypeError",message:"EncodingError U+993A"});
expect(() => {ms932Encoder.encode("\u993B")}).toThrowError({name:"TypeError",message:"EncodingError U+993B"});
expect(() => {ms932Encoder.encode("\u993C")}).toThrowError({name:"TypeError",message:"EncodingError U+993C"});
expect([...ms932Encoder.encode("餽餾")].join(",")).toBe("233,88,233,89"); // U+993D
expect(() => {ms932Encoder.encode("\u993F")}).toThrowError({name:"TypeError",message:"EncodingError U+993F"});
expect(() => {ms932Encoder.encode("\u9940")}).toThrowError({name:"TypeError",message:"EncodingError U+9940"});
expect(() => {ms932Encoder.encode("\u9941")}).toThrowError({name:"TypeError",message:"EncodingError U+9941"});
expect([...ms932Encoder.encode("饂")].join(",")).toBe("233,90"); // U+9942
expect(() => {ms932Encoder.encode("\u9943")}).toThrowError({name:"TypeError",message:"EncodingError U+9943"});
expect(() => {ms932Encoder.encode("\u9944")}).toThrowError({name:"TypeError",message:"EncodingError U+9944"});
expect([...ms932Encoder.encode("饅")].join(",")).toBe("233,92"); // U+9945
expect(() => {ms932Encoder.encode("\u9946")}).toThrowError({name:"TypeError",message:"EncodingError U+9946"});
expect(() => {ms932Encoder.encode("\u9947")}).toThrowError({name:"TypeError",message:"EncodingError U+9947"});
expect(() => {ms932Encoder.encode("\u9948")}).toThrowError({name:"TypeError",message:"EncodingError U+9948"});
expect([...ms932Encoder.encode("饉")].join(",")).toBe("233,91"); // U+9949
expect(() => {ms932Encoder.encode("\u994A")}).toThrowError({name:"TypeError",message:"EncodingError U+994A"});
expect([...ms932Encoder.encode("饋饌")].join(",")).toBe("233,94,233,97"); // U+994B
expect(() => {ms932Encoder.encode("\u994D")}).toThrowError({name:"TypeError",message:"EncodingError U+994D"});
expect(() => {ms932Encoder.encode("\u994E")}).toThrowError({name:"TypeError",message:"EncodingError U+994E"});
expect(() => {ms932Encoder.encode("\u994F")}).toThrowError({name:"TypeError",message:"EncodingError U+994F"});
expect([...ms932Encoder.encode("饐饑饒")].join(",")).toBe("233,93,233,95,233,96"); // U+9950
expect(() => {ms932Encoder.encode("\u9953")}).toThrowError({name:"TypeError",message:"EncodingError U+9953"});
expect(() => {ms932Encoder.encode("\u9954")}).toThrowError({name:"TypeError",message:"EncodingError U+9954"});
expect([...ms932Encoder.encode("饕")].join(",")).toBe("233,98"); // U+9955
expect(() => {ms932Encoder.encode("\u9956")}).toThrowError({name:"TypeError",message:"EncodingError U+9956"});
expect([...ms932Encoder.encode("饗")].join(",")).toBe("139,192"); // U+9957
expect(() => {ms932Encoder.encode("\u9958")}).toThrowError({name:"TypeError",message:"EncodingError U+9958"});
expect(() => {ms932Encoder.encode("\u9959")}).toThrowError({name:"TypeError",message:"EncodingError U+9959"});
expect(() => {ms932Encoder.encode("\u995A")}).toThrowError({name:"TypeError",message:"EncodingError U+995A"});
expect(() => {ms932Encoder.encode("\u995B")}).toThrowError({name:"TypeError",message:"EncodingError U+995B"});
expect(() => {ms932Encoder.encode("\u995C")}).toThrowError({name:"TypeError",message:"EncodingError U+995C"});
expect(() => {ms932Encoder.encode("\u995D")}).toThrowError({name:"TypeError",message:"EncodingError U+995D"});
expect(() => {ms932Encoder.encode("\u995E")}).toThrowError({name:"TypeError",message:"EncodingError U+995E"});
expect(() => {ms932Encoder.encode("\u995F")}).toThrowError({name:"TypeError",message:"EncodingError U+995F"});
expect(() => {ms932Encoder.encode("\u9960")}).toThrowError({name:"TypeError",message:"EncodingError U+9960"});
expect(() => {ms932Encoder.encode("\u9961")}).toThrowError({name:"TypeError",message:"EncodingError U+9961"});
expect(() => {ms932Encoder.encode("\u9962")}).toThrowError({name:"TypeError",message:"EncodingError U+9962"});
expect(() => {ms932Encoder.encode("\u9963")}).toThrowError({name:"TypeError",message:"EncodingError U+9963"});
expect(() => {ms932Encoder.encode("\u9964")}).toThrowError({name:"TypeError",message:"EncodingError U+9964"});
expect(() => {ms932Encoder.encode("\u9965")}).toThrowError({name:"TypeError",message:"EncodingError U+9965"});
expect(() => {ms932Encoder.encode("\u9966")}).toThrowError({name:"TypeError",message:"EncodingError U+9966"});
expect(() => {ms932Encoder.encode("\u9967")}).toThrowError({name:"TypeError",message:"EncodingError U+9967"});
expect(() => {ms932Encoder.encode("\u9968")}).toThrowError({name:"TypeError",message:"EncodingError U+9968"});
expect(() => {ms932Encoder.encode("\u9969")}).toThrowError({name:"TypeError",message:"EncodingError U+9969"});
expect(() => {ms932Encoder.encode("\u996A")}).toThrowError({name:"TypeError",message:"EncodingError U+996A"});
expect(() => {ms932Encoder.encode("\u996B")}).toThrowError({name:"TypeError",message:"EncodingError U+996B"});
expect(() => {ms932Encoder.encode("\u996C")}).toThrowError({name:"TypeError",message:"EncodingError U+996C"});
expect(() => {ms932Encoder.encode("\u996D")}).toThrowError({name:"TypeError",message:"EncodingError U+996D"});
expect(() => {ms932Encoder.encode("\u996E")}).toThrowError({name:"TypeError",message:"EncodingError U+996E"});
expect(() => {ms932Encoder.encode("\u996F")}).toThrowError({name:"TypeError",message:"EncodingError U+996F"});
expect(() => {ms932Encoder.encode("\u9970")}).toThrowError({name:"TypeError",message:"EncodingError U+9970"});
expect(() => {ms932Encoder.encode("\u9971")}).toThrowError({name:"TypeError",message:"EncodingError U+9971"});
expect(() => {ms932Encoder.encode("\u9972")}).toThrowError({name:"TypeError",message:"EncodingError U+9972"});
expect(() => {ms932Encoder.encode("\u9973")}).toThrowError({name:"TypeError",message:"EncodingError U+9973"});
expect(() => {ms932Encoder.encode("\u9974")}).toThrowError({name:"TypeError",message:"EncodingError U+9974"});
expect(() => {ms932Encoder.encode("\u9975")}).toThrowError({name:"TypeError",message:"EncodingError U+9975"});
expect(() => {ms932Encoder.encode("\u9976")}).toThrowError({name:"TypeError",message:"EncodingError U+9976"});
expect(() => {ms932Encoder.encode("\u9977")}).toThrowError({name:"TypeError",message:"EncodingError U+9977"});
expect(() => {ms932Encoder.encode("\u9978")}).toThrowError({name:"TypeError",message:"EncodingError U+9978"});
expect(() => {ms932Encoder.encode("\u9979")}).toThrowError({name:"TypeError",message:"EncodingError U+9979"});
expect(() => {ms932Encoder.encode("\u997A")}).toThrowError({name:"TypeError",message:"EncodingError U+997A"});
expect(() => {ms932Encoder.encode("\u997B")}).toThrowError({name:"TypeError",message:"EncodingError U+997B"});
expect(() => {ms932Encoder.encode("\u997C")}).toThrowError({name:"TypeError",message:"EncodingError U+997C"});
expect(() => {ms932Encoder.encode("\u997D")}).toThrowError({name:"TypeError",message:"EncodingError U+997D"});
expect(() => {ms932Encoder.encode("\u997E")}).toThrowError({name:"TypeError",message:"EncodingError U+997E"});
expect(() => {ms932Encoder.encode("\u997F")}).toThrowError({name:"TypeError",message:"EncodingError U+997F"});
expect(() => {ms932Encoder.encode("\u9980")}).toThrowError({name:"TypeError",message:"EncodingError U+9980"});
expect(() => {ms932Encoder.encode("\u9981")}).toThrowError({name:"TypeError",message:"EncodingError U+9981"});
expect(() => {ms932Encoder.encode("\u9982")}).toThrowError({name:"TypeError",message:"EncodingError U+9982"});
expect(() => {ms932Encoder.encode("\u9983")}).toThrowError({name:"TypeError",message:"EncodingError U+9983"});
expect(() => {ms932Encoder.encode("\u9984")}).toThrowError({name:"TypeError",message:"EncodingError U+9984"});
expect(() => {ms932Encoder.encode("\u9985")}).toThrowError({name:"TypeError",message:"EncodingError U+9985"});
expect(() => {ms932Encoder.encode("\u9986")}).toThrowError({name:"TypeError",message:"EncodingError U+9986"});
expect(() => {ms932Encoder.encode("\u9987")}).toThrowError({name:"TypeError",message:"EncodingError U+9987"});
expect(() => {ms932Encoder.encode("\u9988")}).toThrowError({name:"TypeError",message:"EncodingError U+9988"});
expect(() => {ms932Encoder.encode("\u9989")}).toThrowError({name:"TypeError",message:"EncodingError U+9989"});
expect(() => {ms932Encoder.encode("\u998A")}).toThrowError({name:"TypeError",message:"EncodingError U+998A"});
expect(() => {ms932Encoder.encode("\u998B")}).toThrowError({name:"TypeError",message:"EncodingError U+998B"});
expect(() => {ms932Encoder.encode("\u998C")}).toThrowError({name:"TypeError",message:"EncodingError U+998C"});
expect(() => {ms932Encoder.encode("\u998D")}).toThrowError({name:"TypeError",message:"EncodingError U+998D"});
expect(() => {ms932Encoder.encode("\u998E")}).toThrowError({name:"TypeError",message:"EncodingError U+998E"});
expect(() => {ms932Encoder.encode("\u998F")}).toThrowError({name:"TypeError",message:"EncodingError U+998F"});
expect(() => {ms932Encoder.encode("\u9990")}).toThrowError({name:"TypeError",message:"EncodingError U+9990"});
expect(() => {ms932Encoder.encode("\u9991")}).toThrowError({name:"TypeError",message:"EncodingError U+9991"});
expect(() => {ms932Encoder.encode("\u9992")}).toThrowError({name:"TypeError",message:"EncodingError U+9992"});
expect(() => {ms932Encoder.encode("\u9993")}).toThrowError({name:"TypeError",message:"EncodingError U+9993"});
expect(() => {ms932Encoder.encode("\u9994")}).toThrowError({name:"TypeError",message:"EncodingError U+9994"});
expect(() => {ms932Encoder.encode("\u9995")}).toThrowError({name:"TypeError",message:"EncodingError U+9995"});
expect([...ms932Encoder.encode("首馗馘香")].join(",")).toBe("142,241,233,99,233,100,141,129"); // U+9996
expect(() => {ms932Encoder.encode("\u999A")}).toThrowError({name:"TypeError",message:"EncodingError U+999A"});
expect(() => {ms932Encoder.encode("\u999B")}).toThrowError({name:"TypeError",message:"EncodingError U+999B"});
expect(() => {ms932Encoder.encode("\u999C")}).toThrowError({name:"TypeError",message:"EncodingError U+999C"});
expect(() => {ms932Encoder.encode("\u999D")}).toThrowError({name:"TypeError",message:"EncodingError U+999D"});
expect([...ms932Encoder.encode("馞")].join(",")).toBe("251,250"); // U+999E
expect(() => {ms932Encoder.encode("\u999F")}).toThrowError({name:"TypeError",message:"EncodingError U+999F"});
expect(() => {ms932Encoder.encode("\u99A0")}).toThrowError({name:"TypeError",message:"EncodingError U+99A0"});
expect(() => {ms932Encoder.encode("\u99A1")}).toThrowError({name:"TypeError",message:"EncodingError U+99A1"});
expect(() => {ms932Encoder.encode("\u99A2")}).toThrowError({name:"TypeError",message:"EncodingError U+99A2"});
expect(() => {ms932Encoder.encode("\u99A3")}).toThrowError({name:"TypeError",message:"EncodingError U+99A3"});
expect(() => {ms932Encoder.encode("\u99A4")}).toThrowError({name:"TypeError",message:"EncodingError U+99A4"});
expect([...ms932Encoder.encode("馥")].join(",")).toBe("233,101"); // U+99A5
expect(() => {ms932Encoder.encode("\u99A6")}).toThrowError({name:"TypeError",message:"EncodingError U+99A6"});
expect(() => {ms932Encoder.encode("\u99A7")}).toThrowError({name:"TypeError",message:"EncodingError U+99A7"});
expect([...ms932Encoder.encode("馨")].join(",")).toBe("138,93"); // U+99A8
expect(() => {ms932Encoder.encode("\u99A9")}).toThrowError({name:"TypeError",message:"EncodingError U+99A9"});
expect(() => {ms932Encoder.encode("\u99AA")}).toThrowError({name:"TypeError",message:"EncodingError U+99AA"});
expect(() => {ms932Encoder.encode("\u99AB")}).toThrowError({name:"TypeError",message:"EncodingError U+99AB"});
expect([...ms932Encoder.encode("馬馭馮")].join(",")).toBe("148,110,233,102,233,103"); // U+99AC
expect(() => {ms932Encoder.encode("\u99AF")}).toThrowError({name:"TypeError",message:"EncodingError U+99AF"});
expect(() => {ms932Encoder.encode("\u99B0")}).toThrowError({name:"TypeError",message:"EncodingError U+99B0"});
expect(() => {ms932Encoder.encode("\u99B1")}).toThrowError({name:"TypeError",message:"EncodingError U+99B1"});
expect(() => {ms932Encoder.encode("\u99B2")}).toThrowError({name:"TypeError",message:"EncodingError U+99B2"});
expect([...ms932Encoder.encode("馳馴")].join(",")).toBe("146,121,147,233"); // U+99B3
expect(() => {ms932Encoder.encode("\u99B5")}).toThrowError({name:"TypeError",message:"EncodingError U+99B5"});
expect(() => {ms932Encoder.encode("\u99B6")}).toThrowError({name:"TypeError",message:"EncodingError U+99B6"});
expect(() => {ms932Encoder.encode("\u99B7")}).toThrowError({name:"TypeError",message:"EncodingError U+99B7"});
expect(() => {ms932Encoder.encode("\u99B8")}).toThrowError({name:"TypeError",message:"EncodingError U+99B8"});
expect(() => {ms932Encoder.encode("\u99B9")}).toThrowError({name:"TypeError",message:"EncodingError U+99B9"});
expect(() => {ms932Encoder.encode("\u99BA")}).toThrowError({name:"TypeError",message:"EncodingError U+99BA"});
expect(() => {ms932Encoder.encode("\u99BB")}).toThrowError({name:"TypeError",message:"EncodingError U+99BB"});
expect([...ms932Encoder.encode("馼")].join(",")).toBe("233,104"); // U+99BC
expect(() => {ms932Encoder.encode("\u99BD")}).toThrowError({name:"TypeError",message:"EncodingError U+99BD"});
expect(() => {ms932Encoder.encode("\u99BE")}).toThrowError({name:"TypeError",message:"EncodingError U+99BE"});
expect(() => {ms932Encoder.encode("\u99BF")}).toThrowError({name:"TypeError",message:"EncodingError U+99BF"});
expect(() => {ms932Encoder.encode("\u99C0")}).toThrowError({name:"TypeError",message:"EncodingError U+99C0"});
expect([...ms932Encoder.encode("駁")].join(",")).toBe("148,157"); // U+99C1
expect(() => {ms932Encoder.encode("\u99C2")}).toThrowError({name:"TypeError",message:"EncodingError U+99C2"});
expect(() => {ms932Encoder.encode("\u99C3")}).toThrowError({name:"TypeError",message:"EncodingError U+99C3"});
expect([...ms932Encoder.encode("駄駅駆")].join(",")).toBe("145,202,137,119,139,236"); // U+99C4
expect(() => {ms932Encoder.encode("\u99C7")}).toThrowError({name:"TypeError",message:"EncodingError U+99C7"});
expect([...ms932Encoder.encode("駈")].join(",")).toBe("139,237"); // U+99C8
expect(() => {ms932Encoder.encode("\u99C9")}).toThrowError({name:"TypeError",message:"EncodingError U+99C9"});
expect(() => {ms932Encoder.encode("\u99CA")}).toThrowError({name:"TypeError",message:"EncodingError U+99CA"});
expect(() => {ms932Encoder.encode("\u99CB")}).toThrowError({name:"TypeError",message:"EncodingError U+99CB"});
expect(() => {ms932Encoder.encode("\u99CC")}).toThrowError({name:"TypeError",message:"EncodingError U+99CC"});
expect(() => {ms932Encoder.encode("\u99CD")}).toThrowError({name:"TypeError",message:"EncodingError U+99CD"});
expect(() => {ms932Encoder.encode("\u99CE")}).toThrowError({name:"TypeError",message:"EncodingError U+99CE"});
expect(() => {ms932Encoder.encode("\u99CF")}).toThrowError({name:"TypeError",message:"EncodingError U+99CF"});
expect([...ms932Encoder.encode("駐駑駒")].join(",")).toBe("146,147,233,109,139,238"); // U+99D0
expect(() => {ms932Encoder.encode("\u99D3")}).toThrowError({name:"TypeError",message:"EncodingError U+99D3"});
expect(() => {ms932Encoder.encode("\u99D4")}).toThrowError({name:"TypeError",message:"EncodingError U+99D4"});
expect([...ms932Encoder.encode("駕")].join(",")).toBe("137,237"); // U+99D5
expect(() => {ms932Encoder.encode("\u99D6")}).toThrowError({name:"TypeError",message:"EncodingError U+99D6"});
expect(() => {ms932Encoder.encode("\u99D7")}).toThrowError({name:"TypeError",message:"EncodingError U+99D7"});
expect([...ms932Encoder.encode("駘")].join(",")).toBe("233,108"); // U+99D8
expect(() => {ms932Encoder.encode("\u99D9")}).toThrowError({name:"TypeError",message:"EncodingError U+99D9"});
expect(() => {ms932Encoder.encode("\u99DA")}).toThrowError({name:"TypeError",message:"EncodingError U+99DA"});
expect([...ms932Encoder.encode("駛")].join(",")).toBe("233,106"); // U+99DB
expect(() => {ms932Encoder.encode("\u99DC")}).toThrowError({name:"TypeError",message:"EncodingError U+99DC"});
expect([...ms932Encoder.encode("駝")].join(",")).toBe("233,107"); // U+99DD
expect(() => {ms932Encoder.encode("\u99DE")}).toThrowError({name:"TypeError",message:"EncodingError U+99DE"});
expect([...ms932Encoder.encode("駟")].join(",")).toBe("233,105"); // U+99DF
expect(() => {ms932Encoder.encode("\u99E0")}).toThrowError({name:"TypeError",message:"EncodingError U+99E0"});
expect(() => {ms932Encoder.encode("\u99E1")}).toThrowError({name:"TypeError",message:"EncodingError U+99E1"});
expect([...ms932Encoder.encode("駢")].join(",")).toBe("233,119"); // U+99E2
expect(() => {ms932Encoder.encode("\u99E3")}).toThrowError({name:"TypeError",message:"EncodingError U+99E3"});
expect(() => {ms932Encoder.encode("\u99E4")}).toThrowError({name:"TypeError",message:"EncodingError U+99E4"});
expect(() => {ms932Encoder.encode("\u99E5")}).toThrowError({name:"TypeError",message:"EncodingError U+99E5"});
expect(() => {ms932Encoder.encode("\u99E6")}).toThrowError({name:"TypeError",message:"EncodingError U+99E6"});
expect(() => {ms932Encoder.encode("\u99E7")}).toThrowError({name:"TypeError",message:"EncodingError U+99E7"});
expect(() => {ms932Encoder.encode("\u99E8")}).toThrowError({name:"TypeError",message:"EncodingError U+99E8"});
expect(() => {ms932Encoder.encode("\u99E9")}).toThrowError({name:"TypeError",message:"EncodingError U+99E9"});
expect(() => {ms932Encoder.encode("\u99EA")}).toThrowError({name:"TypeError",message:"EncodingError U+99EA"});
expect(() => {ms932Encoder.encode("\u99EB")}).toThrowError({name:"TypeError",message:"EncodingError U+99EB"});
expect(() => {ms932Encoder.encode("\u99EC")}).toThrowError({name:"TypeError",message:"EncodingError U+99EC"});
expect([...ms932Encoder.encode("駭駮")].join(",")).toBe("233,110,233,111"); // U+99ED
expect(() => {ms932Encoder.encode("\u99EF")}).toThrowError({name:"TypeError",message:"EncodingError U+99EF"});
expect(() => {ms932Encoder.encode("\u99F0")}).toThrowError({name:"TypeError",message:"EncodingError U+99F0"});
expect([...ms932Encoder.encode("駱駲")].join(",")).toBe("233,112,233,113"); // U+99F1
expect(() => {ms932Encoder.encode("\u99F3")}).toThrowError({name:"TypeError",message:"EncodingError U+99F3"});
expect(() => {ms932Encoder.encode("\u99F4")}).toThrowError({name:"TypeError",message:"EncodingError U+99F4"});
expect(() => {ms932Encoder.encode("\u99F5")}).toThrowError({name:"TypeError",message:"EncodingError U+99F5"});
expect(() => {ms932Encoder.encode("\u99F6")}).toThrowError({name:"TypeError",message:"EncodingError U+99F6"});
expect(() => {ms932Encoder.encode("\u99F7")}).toThrowError({name:"TypeError",message:"EncodingError U+99F7"});
expect([...ms932Encoder.encode("駸")].join(",")).toBe("233,115"); // U+99F8
expect(() => {ms932Encoder.encode("\u99F9")}).toThrowError({name:"TypeError",message:"EncodingError U+99F9"});
expect(() => {ms932Encoder.encode("\u99FA")}).toThrowError({name:"TypeError",message:"EncodingError U+99FA"});
expect([...ms932Encoder.encode("駻")].join(",")).toBe("233,114"); // U+99FB
expect(() => {ms932Encoder.encode("\u99FC")}).toThrowError({name:"TypeError",message:"EncodingError U+99FC"});
expect(() => {ms932Encoder.encode("\u99FD")}).toThrowError({name:"TypeError",message:"EncodingError U+99FD"});
expect(() => {ms932Encoder.encode("\u99FE")}).toThrowError({name:"TypeError",message:"EncodingError U+99FE"});
expect([...ms932Encoder.encode("駿")].join(",")).toBe("143,120"); // U+99FF
expect(() => {ms932Encoder.encode("\u9A00")}).toThrowError({name:"TypeError",message:"EncodingError U+9A00"});
expect([...ms932Encoder.encode("騁")].join(",")).toBe("233,116"); // U+9A01
expect(() => {ms932Encoder.encode("\u9A02")}).toThrowError({name:"TypeError",message:"EncodingError U+9A02"});
expect(() => {ms932Encoder.encode("\u9A03")}).toThrowError({name:"TypeError",message:"EncodingError U+9A03"});
expect(() => {ms932Encoder.encode("\u9A04")}).toThrowError({name:"TypeError",message:"EncodingError U+9A04"});
expect([...ms932Encoder.encode("騅")].join(",")).toBe("233,118"); // U+9A05
expect(() => {ms932Encoder.encode("\u9A06")}).toThrowError({name:"TypeError",message:"EncodingError U+9A06"});
expect(() => {ms932Encoder.encode("\u9A07")}).toThrowError({name:"TypeError",message:"EncodingError U+9A07"});
expect(() => {ms932Encoder.encode("\u9A08")}).toThrowError({name:"TypeError",message:"EncodingError U+9A08"});
expect(() => {ms932Encoder.encode("\u9A09")}).toThrowError({name:"TypeError",message:"EncodingError U+9A09"});
expect(() => {ms932Encoder.encode("\u9A0A")}).toThrowError({name:"TypeError",message:"EncodingError U+9A0A"});
expect(() => {ms932Encoder.encode("\u9A0B")}).toThrowError({name:"TypeError",message:"EncodingError U+9A0B"});
expect(() => {ms932Encoder.encode("\u9A0C")}).toThrowError({name:"TypeError",message:"EncodingError U+9A0C"});
expect(() => {ms932Encoder.encode("\u9A0D")}).toThrowError({name:"TypeError",message:"EncodingError U+9A0D"});
expect([...ms932Encoder.encode("騎騏")].join(",")).toBe("139,82,233,117"); // U+9A0E
expect(() => {ms932Encoder.encode("\u9A10")}).toThrowError({name:"TypeError",message:"EncodingError U+9A10"});
expect(() => {ms932Encoder.encode("\u9A11")}).toThrowError({name:"TypeError",message:"EncodingError U+9A11"});
expect([...ms932Encoder.encode("騒験")].join(",")).toBe("145,155,140,177"); // U+9A12
expect(() => {ms932Encoder.encode("\u9A14")}).toThrowError({name:"TypeError",message:"EncodingError U+9A14"});
expect(() => {ms932Encoder.encode("\u9A15")}).toThrowError({name:"TypeError",message:"EncodingError U+9A15"});
expect(() => {ms932Encoder.encode("\u9A16")}).toThrowError({name:"TypeError",message:"EncodingError U+9A16"});
expect(() => {ms932Encoder.encode("\u9A17")}).toThrowError({name:"TypeError",message:"EncodingError U+9A17"});
expect(() => {ms932Encoder.encode("\u9A18")}).toThrowError({name:"TypeError",message:"EncodingError U+9A18"});
expect([...ms932Encoder.encode("騙")].join(",")).toBe("233,120"); // U+9A19
expect(() => {ms932Encoder.encode("\u9A1A")}).toThrowError({name:"TypeError",message:"EncodingError U+9A1A"});
expect(() => {ms932Encoder.encode("\u9A1B")}).toThrowError({name:"TypeError",message:"EncodingError U+9A1B"});
expect(() => {ms932Encoder.encode("\u9A1C")}).toThrowError({name:"TypeError",message:"EncodingError U+9A1C"});
expect(() => {ms932Encoder.encode("\u9A1D")}).toThrowError({name:"TypeError",message:"EncodingError U+9A1D"});
expect(() => {ms932Encoder.encode("\u9A1E")}).toThrowError({name:"TypeError",message:"EncodingError U+9A1E"});
expect(() => {ms932Encoder.encode("\u9A1F")}).toThrowError({name:"TypeError",message:"EncodingError U+9A1F"});
expect(() => {ms932Encoder.encode("\u9A20")}).toThrowError({name:"TypeError",message:"EncodingError U+9A20"});
expect(() => {ms932Encoder.encode("\u9A21")}).toThrowError({name:"TypeError",message:"EncodingError U+9A21"});
expect(() => {ms932Encoder.encode("\u9A22")}).toThrowError({name:"TypeError",message:"EncodingError U+9A22"});
expect(() => {ms932Encoder.encode("\u9A23")}).toThrowError({name:"TypeError",message:"EncodingError U+9A23"});
expect(() => {ms932Encoder.encode("\u9A24")}).toThrowError({name:"TypeError",message:"EncodingError U+9A24"});
expect(() => {ms932Encoder.encode("\u9A25")}).toThrowError({name:"TypeError",message:"EncodingError U+9A25"});
expect(() => {ms932Encoder.encode("\u9A26")}).toThrowError({name:"TypeError",message:"EncodingError U+9A26"});
expect(() => {ms932Encoder.encode("\u9A27")}).toThrowError({name:"TypeError",message:"EncodingError U+9A27"});
expect([...ms932Encoder.encode("騨")].join(",")).toBe("145,203"); // U+9A28
expect(() => {ms932Encoder.encode("\u9A29")}).toThrowError({name:"TypeError",message:"EncodingError U+9A29"});
expect(() => {ms932Encoder.encode("\u9A2A")}).toThrowError({name:"TypeError",message:"EncodingError U+9A2A"});
expect([...ms932Encoder.encode("騫")].join(",")).toBe("233,121"); // U+9A2B
expect(() => {ms932Encoder.encode("\u9A2C")}).toThrowError({name:"TypeError",message:"EncodingError U+9A2C"});
expect(() => {ms932Encoder.encode("\u9A2D")}).toThrowError({name:"TypeError",message:"EncodingError U+9A2D"});
expect(() => {ms932Encoder.encode("\u9A2E")}).toThrowError({name:"TypeError",message:"EncodingError U+9A2E"});
expect(() => {ms932Encoder.encode("\u9A2F")}).toThrowError({name:"TypeError",message:"EncodingError U+9A2F"});
expect([...ms932Encoder.encode("騰")].join(",")).toBe("147,171"); // U+9A30
expect(() => {ms932Encoder.encode("\u9A31")}).toThrowError({name:"TypeError",message:"EncodingError U+9A31"});
expect(() => {ms932Encoder.encode("\u9A32")}).toThrowError({name:"TypeError",message:"EncodingError U+9A32"});
expect(() => {ms932Encoder.encode("\u9A33")}).toThrowError({name:"TypeError",message:"EncodingError U+9A33"});
expect(() => {ms932Encoder.encode("\u9A34")}).toThrowError({name:"TypeError",message:"EncodingError U+9A34"});
expect(() => {ms932Encoder.encode("\u9A35")}).toThrowError({name:"TypeError",message:"EncodingError U+9A35"});
expect(() => {ms932Encoder.encode("\u9A36")}).toThrowError({name:"TypeError",message:"EncodingError U+9A36"});
expect([...ms932Encoder.encode("騷")].join(",")).toBe("233,122"); // U+9A37
expect(() => {ms932Encoder.encode("\u9A38")}).toThrowError({name:"TypeError",message:"EncodingError U+9A38"});
expect(() => {ms932Encoder.encode("\u9A39")}).toThrowError({name:"TypeError",message:"EncodingError U+9A39"});
expect(() => {ms932Encoder.encode("\u9A3A")}).toThrowError({name:"TypeError",message:"EncodingError U+9A3A"});
expect(() => {ms932Encoder.encode("\u9A3B")}).toThrowError({name:"TypeError",message:"EncodingError U+9A3B"});
expect(() => {ms932Encoder.encode("\u9A3C")}).toThrowError({name:"TypeError",message:"EncodingError U+9A3C"});
expect(() => {ms932Encoder.encode("\u9A3D")}).toThrowError({name:"TypeError",message:"EncodingError U+9A3D"});
expect([...ms932Encoder.encode("騾")].join(",")).toBe("233,128"); // U+9A3E
expect(() => {ms932Encoder.encode("\u9A3F")}).toThrowError({name:"TypeError",message:"EncodingError U+9A3F"});
expect([...ms932Encoder.encode("驀")].join(",")).toBe("233,125"); // U+9A40
expect(() => {ms932Encoder.encode("\u9A41")}).toThrowError({name:"TypeError",message:"EncodingError U+9A41"});
expect([...ms932Encoder.encode("驂驃")].join(",")).toBe("233,124,233,126"); // U+9A42
expect(() => {ms932Encoder.encode("\u9A44")}).toThrowError({name:"TypeError",message:"EncodingError U+9A44"});
expect([...ms932Encoder.encode("驅")].join(",")).toBe("233,123"); // U+9A45
expect(() => {ms932Encoder.encode("\u9A46")}).toThrowError({name:"TypeError",message:"EncodingError U+9A46"});
expect(() => {ms932Encoder.encode("\u9A47")}).toThrowError({name:"TypeError",message:"EncodingError U+9A47"});
expect(() => {ms932Encoder.encode("\u9A48")}).toThrowError({name:"TypeError",message:"EncodingError U+9A48"});
expect(() => {ms932Encoder.encode("\u9A49")}).toThrowError({name:"TypeError",message:"EncodingError U+9A49"});
expect(() => {ms932Encoder.encode("\u9A4A")}).toThrowError({name:"TypeError",message:"EncodingError U+9A4A"});
expect(() => {ms932Encoder.encode("\u9A4B")}).toThrowError({name:"TypeError",message:"EncodingError U+9A4B"});
expect(() => {ms932Encoder.encode("\u9A4C")}).toThrowError({name:"TypeError",message:"EncodingError U+9A4C"});
expect([...ms932Encoder.encode("驍驎")].join(",")).toBe("233,130,251,251"); // U+9A4D
expect(() => {ms932Encoder.encode("\u9A4F")}).toThrowError({name:"TypeError",message:"EncodingError U+9A4F"});
expect(() => {ms932Encoder.encode("\u9A50")}).toThrowError({name:"TypeError",message:"EncodingError U+9A50"});
expect(() => {ms932Encoder.encode("\u9A51")}).toThrowError({name:"TypeError",message:"EncodingError U+9A51"});
expect(() => {ms932Encoder.encode("\u9A52")}).toThrowError({name:"TypeError",message:"EncodingError U+9A52"});
expect(() => {ms932Encoder.encode("\u9A53")}).toThrowError({name:"TypeError",message:"EncodingError U+9A53"});
expect(() => {ms932Encoder.encode("\u9A54")}).toThrowError({name:"TypeError",message:"EncodingError U+9A54"});
expect([...ms932Encoder.encode("驕")].join(",")).toBe("233,129"); // U+9A55
expect(() => {ms932Encoder.encode("\u9A56")}).toThrowError({name:"TypeError",message:"EncodingError U+9A56"});
expect([...ms932Encoder.encode("驗")].join(",")).toBe("233,132"); // U+9A57
expect(() => {ms932Encoder.encode("\u9A58")}).toThrowError({name:"TypeError",message:"EncodingError U+9A58"});
expect(() => {ms932Encoder.encode("\u9A59")}).toThrowError({name:"TypeError",message:"EncodingError U+9A59"});
expect([...ms932Encoder.encode("驚驛")].join(",")).toBe("139,193,233,131"); // U+9A5A
expect(() => {ms932Encoder.encode("\u9A5C")}).toThrowError({name:"TypeError",message:"EncodingError U+9A5C"});
expect(() => {ms932Encoder.encode("\u9A5D")}).toThrowError({name:"TypeError",message:"EncodingError U+9A5D"});
expect(() => {ms932Encoder.encode("\u9A5E")}).toThrowError({name:"TypeError",message:"EncodingError U+9A5E"});
expect([...ms932Encoder.encode("驟")].join(",")).toBe("233,133"); // U+9A5F
expect(() => {ms932Encoder.encode("\u9A60")}).toThrowError({name:"TypeError",message:"EncodingError U+9A60"});
expect(() => {ms932Encoder.encode("\u9A61")}).toThrowError({name:"TypeError",message:"EncodingError U+9A61"});
expect([...ms932Encoder.encode("驢")].join(",")).toBe("233,134"); // U+9A62
expect(() => {ms932Encoder.encode("\u9A63")}).toThrowError({name:"TypeError",message:"EncodingError U+9A63"});
expect([...ms932Encoder.encode("驤驥")].join(",")).toBe("233,136,233,135"); // U+9A64
expect(() => {ms932Encoder.encode("\u9A66")}).toThrowError({name:"TypeError",message:"EncodingError U+9A66"});
expect(() => {ms932Encoder.encode("\u9A67")}).toThrowError({name:"TypeError",message:"EncodingError U+9A67"});
expect(() => {ms932Encoder.encode("\u9A68")}).toThrowError({name:"TypeError",message:"EncodingError U+9A68"});
expect([...ms932Encoder.encode("驩驪驫")].join(",")).toBe("233,137,233,139,233,138"); // U+9A69
expect(() => {ms932Encoder.encode("\u9A6C")}).toThrowError({name:"TypeError",message:"EncodingError U+9A6C"});
expect(() => {ms932Encoder.encode("\u9A6D")}).toThrowError({name:"TypeError",message:"EncodingError U+9A6D"});
expect(() => {ms932Encoder.encode("\u9A6E")}).toThrowError({name:"TypeError",message:"EncodingError U+9A6E"});
expect(() => {ms932Encoder.encode("\u9A6F")}).toThrowError({name:"TypeError",message:"EncodingError U+9A6F"});
expect(() => {ms932Encoder.encode("\u9A70")}).toThrowError({name:"TypeError",message:"EncodingError U+9A70"});
expect(() => {ms932Encoder.encode("\u9A71")}).toThrowError({name:"TypeError",message:"EncodingError U+9A71"});
expect(() => {ms932Encoder.encode("\u9A72")}).toThrowError({name:"TypeError",message:"EncodingError U+9A72"});
expect(() => {ms932Encoder.encode("\u9A73")}).toThrowError({name:"TypeError",message:"EncodingError U+9A73"});
expect(() => {ms932Encoder.encode("\u9A74")}).toThrowError({name:"TypeError",message:"EncodingError U+9A74"});
expect(() => {ms932Encoder.encode("\u9A75")}).toThrowError({name:"TypeError",message:"EncodingError U+9A75"});
expect(() => {ms932Encoder.encode("\u9A76")}).toThrowError({name:"TypeError",message:"EncodingError U+9A76"});
expect(() => {ms932Encoder.encode("\u9A77")}).toThrowError({name:"TypeError",message:"EncodingError U+9A77"});
expect(() => {ms932Encoder.encode("\u9A78")}).toThrowError({name:"TypeError",message:"EncodingError U+9A78"});
expect(() => {ms932Encoder.encode("\u9A79")}).toThrowError({name:"TypeError",message:"EncodingError U+9A79"});
expect(() => {ms932Encoder.encode("\u9A7A")}).toThrowError({name:"TypeError",message:"EncodingError U+9A7A"});
expect(() => {ms932Encoder.encode("\u9A7B")}).toThrowError({name:"TypeError",message:"EncodingError U+9A7B"});
expect(() => {ms932Encoder.encode("\u9A7C")}).toThrowError({name:"TypeError",message:"EncodingError U+9A7C"});
expect(() => {ms932Encoder.encode("\u9A7D")}).toThrowError({name:"TypeError",message:"EncodingError U+9A7D"});
expect(() => {ms932Encoder.encode("\u9A7E")}).toThrowError({name:"TypeError",message:"EncodingError U+9A7E"});
expect(() => {ms932Encoder.encode("\u9A7F")}).toThrowError({name:"TypeError",message:"EncodingError U+9A7F"});
expect(() => {ms932Encoder.encode("\u9A80")}).toThrowError({name:"TypeError",message:"EncodingError U+9A80"});
expect(() => {ms932Encoder.encode("\u9A81")}).toThrowError({name:"TypeError",message:"EncodingError U+9A81"});
expect(() => {ms932Encoder.encode("\u9A82")}).toThrowError({name:"TypeError",message:"EncodingError U+9A82"});
expect(() => {ms932Encoder.encode("\u9A83")}).toThrowError({name:"TypeError",message:"EncodingError U+9A83"});
expect(() => {ms932Encoder.encode("\u9A84")}).toThrowError({name:"TypeError",message:"EncodingError U+9A84"});
expect(() => {ms932Encoder.encode("\u9A85")}).toThrowError({name:"TypeError",message:"EncodingError U+9A85"});
expect(() => {ms932Encoder.encode("\u9A86")}).toThrowError({name:"TypeError",message:"EncodingError U+9A86"});
expect(() => {ms932Encoder.encode("\u9A87")}).toThrowError({name:"TypeError",message:"EncodingError U+9A87"});
expect(() => {ms932Encoder.encode("\u9A88")}).toThrowError({name:"TypeError",message:"EncodingError U+9A88"});
expect(() => {ms932Encoder.encode("\u9A89")}).toThrowError({name:"TypeError",message:"EncodingError U+9A89"});
expect(() => {ms932Encoder.encode("\u9A8A")}).toThrowError({name:"TypeError",message:"EncodingError U+9A8A"});
expect(() => {ms932Encoder.encode("\u9A8B")}).toThrowError({name:"TypeError",message:"EncodingError U+9A8B"});
expect(() => {ms932Encoder.encode("\u9A8C")}).toThrowError({name:"TypeError",message:"EncodingError U+9A8C"});
expect(() => {ms932Encoder.encode("\u9A8D")}).toThrowError({name:"TypeError",message:"EncodingError U+9A8D"});
expect(() => {ms932Encoder.encode("\u9A8E")}).toThrowError({name:"TypeError",message:"EncodingError U+9A8E"});
expect(() => {ms932Encoder.encode("\u9A8F")}).toThrowError({name:"TypeError",message:"EncodingError U+9A8F"});
expect(() => {ms932Encoder.encode("\u9A90")}).toThrowError({name:"TypeError",message:"EncodingError U+9A90"});
expect(() => {ms932Encoder.encode("\u9A91")}).toThrowError({name:"TypeError",message:"EncodingError U+9A91"});
expect(() => {ms932Encoder.encode("\u9A92")}).toThrowError({name:"TypeError",message:"EncodingError U+9A92"});
expect(() => {ms932Encoder.encode("\u9A93")}).toThrowError({name:"TypeError",message:"EncodingError U+9A93"});
expect(() => {ms932Encoder.encode("\u9A94")}).toThrowError({name:"TypeError",message:"EncodingError U+9A94"});
expect(() => {ms932Encoder.encode("\u9A95")}).toThrowError({name:"TypeError",message:"EncodingError U+9A95"});
expect(() => {ms932Encoder.encode("\u9A96")}).toThrowError({name:"TypeError",message:"EncodingError U+9A96"});
expect(() => {ms932Encoder.encode("\u9A97")}).toThrowError({name:"TypeError",message:"EncodingError U+9A97"});
expect(() => {ms932Encoder.encode("\u9A98")}).toThrowError({name:"TypeError",message:"EncodingError U+9A98"});
expect(() => {ms932Encoder.encode("\u9A99")}).toThrowError({name:"TypeError",message:"EncodingError U+9A99"});
expect(() => {ms932Encoder.encode("\u9A9A")}).toThrowError({name:"TypeError",message:"EncodingError U+9A9A"});
expect(() => {ms932Encoder.encode("\u9A9B")}).toThrowError({name:"TypeError",message:"EncodingError U+9A9B"});
expect(() => {ms932Encoder.encode("\u9A9C")}).toThrowError({name:"TypeError",message:"EncodingError U+9A9C"});
expect(() => {ms932Encoder.encode("\u9A9D")}).toThrowError({name:"TypeError",message:"EncodingError U+9A9D"});
expect(() => {ms932Encoder.encode("\u9A9E")}).toThrowError({name:"TypeError",message:"EncodingError U+9A9E"});
expect(() => {ms932Encoder.encode("\u9A9F")}).toThrowError({name:"TypeError",message:"EncodingError U+9A9F"});
expect(() => {ms932Encoder.encode("\u9AA0")}).toThrowError({name:"TypeError",message:"EncodingError U+9AA0"});
expect(() => {ms932Encoder.encode("\u9AA1")}).toThrowError({name:"TypeError",message:"EncodingError U+9AA1"});
expect(() => {ms932Encoder.encode("\u9AA2")}).toThrowError({name:"TypeError",message:"EncodingError U+9AA2"});
expect(() => {ms932Encoder.encode("\u9AA3")}).toThrowError({name:"TypeError",message:"EncodingError U+9AA3"});
expect(() => {ms932Encoder.encode("\u9AA4")}).toThrowError({name:"TypeError",message:"EncodingError U+9AA4"});
expect(() => {ms932Encoder.encode("\u9AA5")}).toThrowError({name:"TypeError",message:"EncodingError U+9AA5"});
expect(() => {ms932Encoder.encode("\u9AA6")}).toThrowError({name:"TypeError",message:"EncodingError U+9AA6"});
expect(() => {ms932Encoder.encode("\u9AA7")}).toThrowError({name:"TypeError",message:"EncodingError U+9AA7"});
expect([...ms932Encoder.encode("骨")].join(",")).toBe("141,156"); // U+9AA8
expect(() => {ms932Encoder.encode("\u9AA9")}).toThrowError({name:"TypeError",message:"EncodingError U+9AA9"});
expect(() => {ms932Encoder.encode("\u9AAA")}).toThrowError({name:"TypeError",message:"EncodingError U+9AAA"});
expect(() => {ms932Encoder.encode("\u9AAB")}).toThrowError({name:"TypeError",message:"EncodingError U+9AAB"});
expect(() => {ms932Encoder.encode("\u9AAC")}).toThrowError({name:"TypeError",message:"EncodingError U+9AAC"});
expect([...ms932Encoder.encode("骭")].join(",")).toBe("233,140"); // U+9AAD
expect(() => {ms932Encoder.encode("\u9AAE")}).toThrowError({name:"TypeError",message:"EncodingError U+9AAE"});
expect(() => {ms932Encoder.encode("\u9AAF")}).toThrowError({name:"TypeError",message:"EncodingError U+9AAF"});
expect([...ms932Encoder.encode("骰")].join(",")).toBe("233,141"); // U+9AB0
expect(() => {ms932Encoder.encode("\u9AB1")}).toThrowError({name:"TypeError",message:"EncodingError U+9AB1"});
expect(() => {ms932Encoder.encode("\u9AB2")}).toThrowError({name:"TypeError",message:"EncodingError U+9AB2"});
expect(() => {ms932Encoder.encode("\u9AB3")}).toThrowError({name:"TypeError",message:"EncodingError U+9AB3"});
expect(() => {ms932Encoder.encode("\u9AB4")}).toThrowError({name:"TypeError",message:"EncodingError U+9AB4"});
expect(() => {ms932Encoder.encode("\u9AB5")}).toThrowError({name:"TypeError",message:"EncodingError U+9AB5"});
expect(() => {ms932Encoder.encode("\u9AB6")}).toThrowError({name:"TypeError",message:"EncodingError U+9AB6"});
expect(() => {ms932Encoder.encode("\u9AB7")}).toThrowError({name:"TypeError",message:"EncodingError U+9AB7"});
expect([...ms932Encoder.encode("骸")].join(",")).toBe("138,91"); // U+9AB8
expect(() => {ms932Encoder.encode("\u9AB9")}).toThrowError({name:"TypeError",message:"EncodingError U+9AB9"});
expect(() => {ms932Encoder.encode("\u9ABA")}).toThrowError({name:"TypeError",message:"EncodingError U+9ABA"});
expect(() => {ms932Encoder.encode("\u9ABB")}).toThrowError({name:"TypeError",message:"EncodingError U+9ABB"});
expect([...ms932Encoder.encode("骼")].join(",")).toBe("233,142"); // U+9ABC
expect(() => {ms932Encoder.encode("\u9ABD")}).toThrowError({name:"TypeError",message:"EncodingError U+9ABD"});
expect(() => {ms932Encoder.encode("\u9ABE")}).toThrowError({name:"TypeError",message:"EncodingError U+9ABE"});
expect(() => {ms932Encoder.encode("\u9ABF")}).toThrowError({name:"TypeError",message:"EncodingError U+9ABF"});
expect([...ms932Encoder.encode("髀")].join(",")).toBe("233,143"); // U+9AC0
expect(() => {ms932Encoder.encode("\u9AC1")}).toThrowError({name:"TypeError",message:"EncodingError U+9AC1"});
expect(() => {ms932Encoder.encode("\u9AC2")}).toThrowError({name:"TypeError",message:"EncodingError U+9AC2"});
expect(() => {ms932Encoder.encode("\u9AC3")}).toThrowError({name:"TypeError",message:"EncodingError U+9AC3"});
expect([...ms932Encoder.encode("髄")].join(",")).toBe("144,145"); // U+9AC4
expect(() => {ms932Encoder.encode("\u9AC5")}).toThrowError({name:"TypeError",message:"EncodingError U+9AC5"});
expect(() => {ms932Encoder.encode("\u9AC6")}).toThrowError({name:"TypeError",message:"EncodingError U+9AC6"});
expect(() => {ms932Encoder.encode("\u9AC7")}).toThrowError({name:"TypeError",message:"EncodingError U+9AC7"});
expect(() => {ms932Encoder.encode("\u9AC8")}).toThrowError({name:"TypeError",message:"EncodingError U+9AC8"});
expect(() => {ms932Encoder.encode("\u9AC9")}).toThrowError({name:"TypeError",message:"EncodingError U+9AC9"});
expect(() => {ms932Encoder.encode("\u9ACA")}).toThrowError({name:"TypeError",message:"EncodingError U+9ACA"});
expect(() => {ms932Encoder.encode("\u9ACB")}).toThrowError({name:"TypeError",message:"EncodingError U+9ACB"});
expect(() => {ms932Encoder.encode("\u9ACC")}).toThrowError({name:"TypeError",message:"EncodingError U+9ACC"});
expect(() => {ms932Encoder.encode("\u9ACD")}).toThrowError({name:"TypeError",message:"EncodingError U+9ACD"});
expect(() => {ms932Encoder.encode("\u9ACE")}).toThrowError({name:"TypeError",message:"EncodingError U+9ACE"});
expect([...ms932Encoder.encode("髏")].join(",")).toBe("233,144"); // U+9ACF
expect(() => {ms932Encoder.encode("\u9AD0")}).toThrowError({name:"TypeError",message:"EncodingError U+9AD0"});
expect([...ms932Encoder.encode("髑")].join(",")).toBe("233,145"); // U+9AD1
expect(() => {ms932Encoder.encode("\u9AD2")}).toThrowError({name:"TypeError",message:"EncodingError U+9AD2"});
expect([...ms932Encoder.encode("髓體")].join(",")).toBe("233,146,233,147"); // U+9AD3
expect(() => {ms932Encoder.encode("\u9AD5")}).toThrowError({name:"TypeError",message:"EncodingError U+9AD5"});
expect(() => {ms932Encoder.encode("\u9AD6")}).toThrowError({name:"TypeError",message:"EncodingError U+9AD6"});
expect(() => {ms932Encoder.encode("\u9AD7")}).toThrowError({name:"TypeError",message:"EncodingError U+9AD7"});
expect([...ms932Encoder.encode("高髙")].join(",")).toBe("141,130,251,252"); // U+9AD8
expect(() => {ms932Encoder.encode("\u9ADA")}).toThrowError({name:"TypeError",message:"EncodingError U+9ADA"});
expect(() => {ms932Encoder.encode("\u9ADB")}).toThrowError({name:"TypeError",message:"EncodingError U+9ADB"});
expect([...ms932Encoder.encode("髜")].join(",")).toBe("252,64"); // U+9ADC
expect(() => {ms932Encoder.encode("\u9ADD")}).toThrowError({name:"TypeError",message:"EncodingError U+9ADD"});
expect([...ms932Encoder.encode("髞髟")].join(",")).toBe("233,148,233,149"); // U+9ADE
expect(() => {ms932Encoder.encode("\u9AE0")}).toThrowError({name:"TypeError",message:"EncodingError U+9AE0"});
expect(() => {ms932Encoder.encode("\u9AE1")}).toThrowError({name:"TypeError",message:"EncodingError U+9AE1"});
expect([...ms932Encoder.encode("髢髣")].join(",")).toBe("233,150,233,151"); // U+9AE2
expect(() => {ms932Encoder.encode("\u9AE4")}).toThrowError({name:"TypeError",message:"EncodingError U+9AE4"});
expect(() => {ms932Encoder.encode("\u9AE5")}).toThrowError({name:"TypeError",message:"EncodingError U+9AE5"});
expect([...ms932Encoder.encode("髦")].join(",")).toBe("233,152"); // U+9AE6
expect(() => {ms932Encoder.encode("\u9AE7")}).toThrowError({name:"TypeError",message:"EncodingError U+9AE7"});
expect(() => {ms932Encoder.encode("\u9AE8")}).toThrowError({name:"TypeError",message:"EncodingError U+9AE8"});
expect(() => {ms932Encoder.encode("\u9AE9")}).toThrowError({name:"TypeError",message:"EncodingError U+9AE9"});
expect([...ms932Encoder.encode("髪髫")].join(",")).toBe("148,175,233,154"); // U+9AEA
expect(() => {ms932Encoder.encode("\u9AEC")}).toThrowError({name:"TypeError",message:"EncodingError U+9AEC"});
expect([...ms932Encoder.encode("髭髮髯")].join(",")).toBe("149,69,233,155,233,153"); // U+9AED
expect(() => {ms932Encoder.encode("\u9AF0")}).toThrowError({name:"TypeError",message:"EncodingError U+9AF0"});
expect([...ms932Encoder.encode("髱")].join(",")).toBe("233,157"); // U+9AF1
expect(() => {ms932Encoder.encode("\u9AF2")}).toThrowError({name:"TypeError",message:"EncodingError U+9AF2"});
expect(() => {ms932Encoder.encode("\u9AF3")}).toThrowError({name:"TypeError",message:"EncodingError U+9AF3"});
expect([...ms932Encoder.encode("髴")].join(",")).toBe("233,156"); // U+9AF4
expect(() => {ms932Encoder.encode("\u9AF5")}).toThrowError({name:"TypeError",message:"EncodingError U+9AF5"});
expect(() => {ms932Encoder.encode("\u9AF6")}).toThrowError({name:"TypeError",message:"EncodingError U+9AF6"});
expect([...ms932Encoder.encode("髷")].join(",")).toBe("233,158"); // U+9AF7
expect(() => {ms932Encoder.encode("\u9AF8")}).toThrowError({name:"TypeError",message:"EncodingError U+9AF8"});
expect(() => {ms932Encoder.encode("\u9AF9")}).toThrowError({name:"TypeError",message:"EncodingError U+9AF9"});
expect(() => {ms932Encoder.encode("\u9AFA")}).toThrowError({name:"TypeError",message:"EncodingError U+9AFA"});
expect([...ms932Encoder.encode("髻")].join(",")).toBe("233,159"); // U+9AFB
expect(() => {ms932Encoder.encode("\u9AFC")}).toThrowError({name:"TypeError",message:"EncodingError U+9AFC"});
expect(() => {ms932Encoder.encode("\u9AFD")}).toThrowError({name:"TypeError",message:"EncodingError U+9AFD"});
expect(() => {ms932Encoder.encode("\u9AFE")}).toThrowError({name:"TypeError",message:"EncodingError U+9AFE"});
expect(() => {ms932Encoder.encode("\u9AFF")}).toThrowError({name:"TypeError",message:"EncodingError U+9AFF"});
expect(() => {ms932Encoder.encode("\u9B00")}).toThrowError({name:"TypeError",message:"EncodingError U+9B00"});
expect(() => {ms932Encoder.encode("\u9B01")}).toThrowError({name:"TypeError",message:"EncodingError U+9B01"});
expect(() => {ms932Encoder.encode("\u9B02")}).toThrowError({name:"TypeError",message:"EncodingError U+9B02"});
expect(() => {ms932Encoder.encode("\u9B03")}).toThrowError({name:"TypeError",message:"EncodingError U+9B03"});
expect(() => {ms932Encoder.encode("\u9B04")}).toThrowError({name:"TypeError",message:"EncodingError U+9B04"});
expect(() => {ms932Encoder.encode("\u9B05")}).toThrowError({name:"TypeError",message:"EncodingError U+9B05"});
expect([...ms932Encoder.encode("鬆")].join(",")).toBe("233,160"); // U+9B06
expect(() => {ms932Encoder.encode("\u9B07")}).toThrowError({name:"TypeError",message:"EncodingError U+9B07"});
expect(() => {ms932Encoder.encode("\u9B08")}).toThrowError({name:"TypeError",message:"EncodingError U+9B08"});
expect(() => {ms932Encoder.encode("\u9B09")}).toThrowError({name:"TypeError",message:"EncodingError U+9B09"});
expect(() => {ms932Encoder.encode("\u9B0A")}).toThrowError({name:"TypeError",message:"EncodingError U+9B0A"});
expect(() => {ms932Encoder.encode("\u9B0B")}).toThrowError({name:"TypeError",message:"EncodingError U+9B0B"});
expect(() => {ms932Encoder.encode("\u9B0C")}).toThrowError({name:"TypeError",message:"EncodingError U+9B0C"});
expect(() => {ms932Encoder.encode("\u9B0D")}).toThrowError({name:"TypeError",message:"EncodingError U+9B0D"});
expect(() => {ms932Encoder.encode("\u9B0E")}).toThrowError({name:"TypeError",message:"EncodingError U+9B0E"});
expect(() => {ms932Encoder.encode("\u9B0F")}).toThrowError({name:"TypeError",message:"EncodingError U+9B0F"});
expect(() => {ms932Encoder.encode("\u9B10")}).toThrowError({name:"TypeError",message:"EncodingError U+9B10"});
expect(() => {ms932Encoder.encode("\u9B11")}).toThrowError({name:"TypeError",message:"EncodingError U+9B11"});
expect(() => {ms932Encoder.encode("\u9B12")}).toThrowError({name:"TypeError",message:"EncodingError U+9B12"});
expect(() => {ms932Encoder.encode("\u9B13")}).toThrowError({name:"TypeError",message:"EncodingError U+9B13"});
expect(() => {ms932Encoder.encode("\u9B14")}).toThrowError({name:"TypeError",message:"EncodingError U+9B14"});
expect(() => {ms932Encoder.encode("\u9B15")}).toThrowError({name:"TypeError",message:"EncodingError U+9B15"});
expect(() => {ms932Encoder.encode("\u9B16")}).toThrowError({name:"TypeError",message:"EncodingError U+9B16"});
expect(() => {ms932Encoder.encode("\u9B17")}).toThrowError({name:"TypeError",message:"EncodingError U+9B17"});
expect([...ms932Encoder.encode("鬘")].join(",")).toBe("233,161"); // U+9B18
expect(() => {ms932Encoder.encode("\u9B19")}).toThrowError({name:"TypeError",message:"EncodingError U+9B19"});
expect([...ms932Encoder.encode("鬚")].join(",")).toBe("233,162"); // U+9B1A
expect(() => {ms932Encoder.encode("\u9B1B")}).toThrowError({name:"TypeError",message:"EncodingError U+9B1B"});
expect(() => {ms932Encoder.encode("\u9B1C")}).toThrowError({name:"TypeError",message:"EncodingError U+9B1C"});
expect(() => {ms932Encoder.encode("\u9B1D")}).toThrowError({name:"TypeError",message:"EncodingError U+9B1D"});
expect(() => {ms932Encoder.encode("\u9B1E")}).toThrowError({name:"TypeError",message:"EncodingError U+9B1E"});
expect([...ms932Encoder.encode("鬟")].join(",")).toBe("233,163"); // U+9B1F
expect(() => {ms932Encoder.encode("\u9B20")}).toThrowError({name:"TypeError",message:"EncodingError U+9B20"});
expect(() => {ms932Encoder.encode("\u9B21")}).toThrowError({name:"TypeError",message:"EncodingError U+9B21"});
expect([...ms932Encoder.encode("鬢鬣")].join(",")).toBe("233,164,233,165"); // U+9B22
expect(() => {ms932Encoder.encode("\u9B24")}).toThrowError({name:"TypeError",message:"EncodingError U+9B24"});
expect([...ms932Encoder.encode("鬥")].join(",")).toBe("233,166"); // U+9B25
expect(() => {ms932Encoder.encode("\u9B26")}).toThrowError({name:"TypeError",message:"EncodingError U+9B26"});
expect([...ms932Encoder.encode("鬧鬨鬩鬪")].join(",")).toBe("233,167,233,168,233,169,233,170"); // U+9B27
expect(() => {ms932Encoder.encode("\u9B2B")}).toThrowError({name:"TypeError",message:"EncodingError U+9B2B"});
expect(() => {ms932Encoder.encode("\u9B2C")}).toThrowError({name:"TypeError",message:"EncodingError U+9B2C"});
expect(() => {ms932Encoder.encode("\u9B2D")}).toThrowError({name:"TypeError",message:"EncodingError U+9B2D"});
expect([...ms932Encoder.encode("鬮鬯")].join(",")).toBe("233,171,233,172"); // U+9B2E
expect(() => {ms932Encoder.encode("\u9B30")}).toThrowError({name:"TypeError",message:"EncodingError U+9B30"});
expect([...ms932Encoder.encode("鬱鬲")].join(",")).toBe("159,84,233,173"); // U+9B31
expect(() => {ms932Encoder.encode("\u9B33")}).toThrowError({name:"TypeError",message:"EncodingError U+9B33"});
expect(() => {ms932Encoder.encode("\u9B34")}).toThrowError({name:"TypeError",message:"EncodingError U+9B34"});
expect(() => {ms932Encoder.encode("\u9B35")}).toThrowError({name:"TypeError",message:"EncodingError U+9B35"});
expect(() => {ms932Encoder.encode("\u9B36")}).toThrowError({name:"TypeError",message:"EncodingError U+9B36"});
expect(() => {ms932Encoder.encode("\u9B37")}).toThrowError({name:"TypeError",message:"EncodingError U+9B37"});
expect(() => {ms932Encoder.encode("\u9B38")}).toThrowError({name:"TypeError",message:"EncodingError U+9B38"});
expect(() => {ms932Encoder.encode("\u9B39")}).toThrowError({name:"TypeError",message:"EncodingError U+9B39"});
expect(() => {ms932Encoder.encode("\u9B3A")}).toThrowError({name:"TypeError",message:"EncodingError U+9B3A"});
expect([...ms932Encoder.encode("鬻鬼")].join(",")).toBe("226,246,139,83"); // U+9B3B
expect(() => {ms932Encoder.encode("\u9B3D")}).toThrowError({name:"TypeError",message:"EncodingError U+9B3D"});
expect(() => {ms932Encoder.encode("\u9B3E")}).toThrowError({name:"TypeError",message:"EncodingError U+9B3E"});
expect(() => {ms932Encoder.encode("\u9B3F")}).toThrowError({name:"TypeError",message:"EncodingError U+9B3F"});
expect(() => {ms932Encoder.encode("\u9B40")}).toThrowError({name:"TypeError",message:"EncodingError U+9B40"});
expect([...ms932Encoder.encode("魁魂魃魄魅")].join(",")).toBe("138,64,141,176,233,175,233,174,150,163"); // U+9B41
expect(() => {ms932Encoder.encode("\u9B46")}).toThrowError({name:"TypeError",message:"EncodingError U+9B46"});
expect(() => {ms932Encoder.encode("\u9B47")}).toThrowError({name:"TypeError",message:"EncodingError U+9B47"});
expect(() => {ms932Encoder.encode("\u9B48")}).toThrowError({name:"TypeError",message:"EncodingError U+9B48"});
expect(() => {ms932Encoder.encode("\u9B49")}).toThrowError({name:"TypeError",message:"EncodingError U+9B49"});
expect(() => {ms932Encoder.encode("\u9B4A")}).toThrowError({name:"TypeError",message:"EncodingError U+9B4A"});
expect(() => {ms932Encoder.encode("\u9B4B")}).toThrowError({name:"TypeError",message:"EncodingError U+9B4B"});
expect(() => {ms932Encoder.encode("\u9B4C")}).toThrowError({name:"TypeError",message:"EncodingError U+9B4C"});
expect([...ms932Encoder.encode("魍魎魏")].join(",")).toBe("233,177,233,178,233,176"); // U+9B4D
expect(() => {ms932Encoder.encode("\u9B50")}).toThrowError({name:"TypeError",message:"EncodingError U+9B50"});
expect([...ms932Encoder.encode("魑")].join(",")).toBe("233,179"); // U+9B51
expect(() => {ms932Encoder.encode("\u9B52")}).toThrowError({name:"TypeError",message:"EncodingError U+9B52"});
expect(() => {ms932Encoder.encode("\u9B53")}).toThrowError({name:"TypeError",message:"EncodingError U+9B53"});
expect([...ms932Encoder.encode("魔")].join(",")).toBe("150,130"); // U+9B54
expect(() => {ms932Encoder.encode("\u9B55")}).toThrowError({name:"TypeError",message:"EncodingError U+9B55"});
expect(() => {ms932Encoder.encode("\u9B56")}).toThrowError({name:"TypeError",message:"EncodingError U+9B56"});
expect(() => {ms932Encoder.encode("\u9B57")}).toThrowError({name:"TypeError",message:"EncodingError U+9B57"});
expect([...ms932Encoder.encode("魘")].join(",")).toBe("233,180"); // U+9B58
expect(() => {ms932Encoder.encode("\u9B59")}).toThrowError({name:"TypeError",message:"EncodingError U+9B59"});
expect([...ms932Encoder.encode("魚")].join(",")).toBe("139,155"); // U+9B5A
expect(() => {ms932Encoder.encode("\u9B5B")}).toThrowError({name:"TypeError",message:"EncodingError U+9B5B"});
expect(() => {ms932Encoder.encode("\u9B5C")}).toThrowError({name:"TypeError",message:"EncodingError U+9B5C"});
expect(() => {ms932Encoder.encode("\u9B5D")}).toThrowError({name:"TypeError",message:"EncodingError U+9B5D"});
expect(() => {ms932Encoder.encode("\u9B5E")}).toThrowError({name:"TypeError",message:"EncodingError U+9B5E"});
expect(() => {ms932Encoder.encode("\u9B5F")}).toThrowError({name:"TypeError",message:"EncodingError U+9B5F"});
expect(() => {ms932Encoder.encode("\u9B60")}).toThrowError({name:"TypeError",message:"EncodingError U+9B60"});
expect(() => {ms932Encoder.encode("\u9B61")}).toThrowError({name:"TypeError",message:"EncodingError U+9B61"});
expect(() => {ms932Encoder.encode("\u9B62")}).toThrowError({name:"TypeError",message:"EncodingError U+9B62"});
expect(() => {ms932Encoder.encode("\u9B63")}).toThrowError({name:"TypeError",message:"EncodingError U+9B63"});
expect(() => {ms932Encoder.encode("\u9B64")}).toThrowError({name:"TypeError",message:"EncodingError U+9B64"});
expect(() => {ms932Encoder.encode("\u9B65")}).toThrowError({name:"TypeError",message:"EncodingError U+9B65"});
expect(() => {ms932Encoder.encode("\u9B66")}).toThrowError({name:"TypeError",message:"EncodingError U+9B66"});
expect(() => {ms932Encoder.encode("\u9B67")}).toThrowError({name:"TypeError",message:"EncodingError U+9B67"});
expect(() => {ms932Encoder.encode("\u9B68")}).toThrowError({name:"TypeError",message:"EncodingError U+9B68"});
expect(() => {ms932Encoder.encode("\u9B69")}).toThrowError({name:"TypeError",message:"EncodingError U+9B69"});
expect(() => {ms932Encoder.encode("\u9B6A")}).toThrowError({name:"TypeError",message:"EncodingError U+9B6A"});
expect(() => {ms932Encoder.encode("\u9B6B")}).toThrowError({name:"TypeError",message:"EncodingError U+9B6B"});
expect(() => {ms932Encoder.encode("\u9B6C")}).toThrowError({name:"TypeError",message:"EncodingError U+9B6C"});
expect(() => {ms932Encoder.encode("\u9B6D")}).toThrowError({name:"TypeError",message:"EncodingError U+9B6D"});
expect(() => {ms932Encoder.encode("\u9B6E")}).toThrowError({name:"TypeError",message:"EncodingError U+9B6E"});
expect([...ms932Encoder.encode("魯")].join(",")).toBe("152,68"); // U+9B6F
expect(() => {ms932Encoder.encode("\u9B70")}).toThrowError({name:"TypeError",message:"EncodingError U+9B70"});
expect(() => {ms932Encoder.encode("\u9B71")}).toThrowError({name:"TypeError",message:"EncodingError U+9B71"});
expect([...ms932Encoder.encode("魲")].join(",")).toBe("252,66"); // U+9B72
expect(() => {ms932Encoder.encode("\u9B73")}).toThrowError({name:"TypeError",message:"EncodingError U+9B73"});
expect([...ms932Encoder.encode("魴魵")].join(",")).toBe("233,181,252,65"); // U+9B74
expect(() => {ms932Encoder.encode("\u9B76")}).toThrowError({name:"TypeError",message:"EncodingError U+9B76"});
expect(() => {ms932Encoder.encode("\u9B77")}).toThrowError({name:"TypeError",message:"EncodingError U+9B77"});
expect(() => {ms932Encoder.encode("\u9B78")}).toThrowError({name:"TypeError",message:"EncodingError U+9B78"});
expect(() => {ms932Encoder.encode("\u9B79")}).toThrowError({name:"TypeError",message:"EncodingError U+9B79"});
expect(() => {ms932Encoder.encode("\u9B7A")}).toThrowError({name:"TypeError",message:"EncodingError U+9B7A"});
expect(() => {ms932Encoder.encode("\u9B7B")}).toThrowError({name:"TypeError",message:"EncodingError U+9B7B"});
expect(() => {ms932Encoder.encode("\u9B7C")}).toThrowError({name:"TypeError",message:"EncodingError U+9B7C"});
expect(() => {ms932Encoder.encode("\u9B7D")}).toThrowError({name:"TypeError",message:"EncodingError U+9B7D"});
expect(() => {ms932Encoder.encode("\u9B7E")}).toThrowError({name:"TypeError",message:"EncodingError U+9B7E"});
expect(() => {ms932Encoder.encode("\u9B7F")}).toThrowError({name:"TypeError",message:"EncodingError U+9B7F"});
expect(() => {ms932Encoder.encode("\u9B80")}).toThrowError({name:"TypeError",message:"EncodingError U+9B80"});
expect(() => {ms932Encoder.encode("\u9B81")}).toThrowError({name:"TypeError",message:"EncodingError U+9B81"});
expect(() => {ms932Encoder.encode("\u9B82")}).toThrowError({name:"TypeError",message:"EncodingError U+9B82"});
expect([...ms932Encoder.encode("鮃")].join(",")).toBe("233,183"); // U+9B83
expect(() => {ms932Encoder.encode("\u9B84")}).toThrowError({name:"TypeError",message:"EncodingError U+9B84"});
expect(() => {ms932Encoder.encode("\u9B85")}).toThrowError({name:"TypeError",message:"EncodingError U+9B85"});
expect(() => {ms932Encoder.encode("\u9B86")}).toThrowError({name:"TypeError",message:"EncodingError U+9B86"});
expect(() => {ms932Encoder.encode("\u9B87")}).toThrowError({name:"TypeError",message:"EncodingError U+9B87"});
expect(() => {ms932Encoder.encode("\u9B88")}).toThrowError({name:"TypeError",message:"EncodingError U+9B88"});
expect(() => {ms932Encoder.encode("\u9B89")}).toThrowError({name:"TypeError",message:"EncodingError U+9B89"});
expect(() => {ms932Encoder.encode("\u9B8A")}).toThrowError({name:"TypeError",message:"EncodingError U+9B8A"});
expect(() => {ms932Encoder.encode("\u9B8B")}).toThrowError({name:"TypeError",message:"EncodingError U+9B8B"});
expect(() => {ms932Encoder.encode("\u9B8C")}).toThrowError({name:"TypeError",message:"EncodingError U+9B8C"});
expect(() => {ms932Encoder.encode("\u9B8D")}).toThrowError({name:"TypeError",message:"EncodingError U+9B8D"});
expect([...ms932Encoder.encode("鮎鮏")].join(",")).toBe("136,188,252,67"); // U+9B8E
expect(() => {ms932Encoder.encode("\u9B90")}).toThrowError({name:"TypeError",message:"EncodingError U+9B90"});
expect([...ms932Encoder.encode("鮑鮒鮓")].join(",")).toBe("233,184,149,169,233,182"); // U+9B91
expect(() => {ms932Encoder.encode("\u9B94")}).toThrowError({name:"TypeError",message:"EncodingError U+9B94"});
expect(() => {ms932Encoder.encode("\u9B95")}).toThrowError({name:"TypeError",message:"EncodingError U+9B95"});
expect([...ms932Encoder.encode("鮖鮗")].join(",")).toBe("233,185,233,186"); // U+9B96
expect(() => {ms932Encoder.encode("\u9B98")}).toThrowError({name:"TypeError",message:"EncodingError U+9B98"});
expect(() => {ms932Encoder.encode("\u9B99")}).toThrowError({name:"TypeError",message:"EncodingError U+9B99"});
expect(() => {ms932Encoder.encode("\u9B9A")}).toThrowError({name:"TypeError",message:"EncodingError U+9B9A"});
expect(() => {ms932Encoder.encode("\u9B9B")}).toThrowError({name:"TypeError",message:"EncodingError U+9B9B"});
expect(() => {ms932Encoder.encode("\u9B9C")}).toThrowError({name:"TypeError",message:"EncodingError U+9B9C"});
expect(() => {ms932Encoder.encode("\u9B9D")}).toThrowError({name:"TypeError",message:"EncodingError U+9B9D"});
expect(() => {ms932Encoder.encode("\u9B9E")}).toThrowError({name:"TypeError",message:"EncodingError U+9B9E"});
expect([...ms932Encoder.encode("鮟鮠")].join(",")).toBe("233,187,233,188"); // U+9B9F
expect(() => {ms932Encoder.encode("\u9BA1")}).toThrowError({name:"TypeError",message:"EncodingError U+9BA1"});
expect(() => {ms932Encoder.encode("\u9BA2")}).toThrowError({name:"TypeError",message:"EncodingError U+9BA2"});
expect(() => {ms932Encoder.encode("\u9BA3")}).toThrowError({name:"TypeError",message:"EncodingError U+9BA3"});
expect(() => {ms932Encoder.encode("\u9BA4")}).toThrowError({name:"TypeError",message:"EncodingError U+9BA4"});
expect(() => {ms932Encoder.encode("\u9BA5")}).toThrowError({name:"TypeError",message:"EncodingError U+9BA5"});
expect(() => {ms932Encoder.encode("\u9BA6")}).toThrowError({name:"TypeError",message:"EncodingError U+9BA6"});
expect(() => {ms932Encoder.encode("\u9BA7")}).toThrowError({name:"TypeError",message:"EncodingError U+9BA7"});
expect([...ms932Encoder.encode("鮨")].join(",")).toBe("233,189"); // U+9BA8
expect(() => {ms932Encoder.encode("\u9BA9")}).toThrowError({name:"TypeError",message:"EncodingError U+9BA9"});
expect([...ms932Encoder.encode("鮪鮫")].join(",")).toBe("150,142,142,76"); // U+9BAA
expect(() => {ms932Encoder.encode("\u9BAC")}).toThrowError({name:"TypeError",message:"EncodingError U+9BAC"});
expect([...ms932Encoder.encode("鮭鮮")].join(",")).toBe("141,248,145,78"); // U+9BAD
expect(() => {ms932Encoder.encode("\u9BAF")}).toThrowError({name:"TypeError",message:"EncodingError U+9BAF"});
expect(() => {ms932Encoder.encode("\u9BB0")}).toThrowError({name:"TypeError",message:"EncodingError U+9BB0"});
expect([...ms932Encoder.encode("鮱")].join(",")).toBe("252,68"); // U+9BB1
expect(() => {ms932Encoder.encode("\u9BB2")}).toThrowError({name:"TypeError",message:"EncodingError U+9BB2"});
expect(() => {ms932Encoder.encode("\u9BB3")}).toThrowError({name:"TypeError",message:"EncodingError U+9BB3"});
expect([...ms932Encoder.encode("鮴")].join(",")).toBe("233,190"); // U+9BB4
expect(() => {ms932Encoder.encode("\u9BB5")}).toThrowError({name:"TypeError",message:"EncodingError U+9BB5"});
expect(() => {ms932Encoder.encode("\u9BB6")}).toThrowError({name:"TypeError",message:"EncodingError U+9BB6"});
expect(() => {ms932Encoder.encode("\u9BB7")}).toThrowError({name:"TypeError",message:"EncodingError U+9BB7"});
expect(() => {ms932Encoder.encode("\u9BB8")}).toThrowError({name:"TypeError",message:"EncodingError U+9BB8"});
expect([...ms932Encoder.encode("鮹")].join(",")).toBe("233,193"); // U+9BB9
expect(() => {ms932Encoder.encode("\u9BBA")}).toThrowError({name:"TypeError",message:"EncodingError U+9BBA"});
expect([...ms932Encoder.encode("鮻")].join(",")).toBe("252,69"); // U+9BBB
expect(() => {ms932Encoder.encode("\u9BBC")}).toThrowError({name:"TypeError",message:"EncodingError U+9BBC"});
expect(() => {ms932Encoder.encode("\u9BBD")}).toThrowError({name:"TypeError",message:"EncodingError U+9BBD"});
expect(() => {ms932Encoder.encode("\u9BBE")}).toThrowError({name:"TypeError",message:"EncodingError U+9BBE"});
expect(() => {ms932Encoder.encode("\u9BBF")}).toThrowError({name:"TypeError",message:"EncodingError U+9BBF"});
expect([...ms932Encoder.encode("鯀")].join(",")).toBe("233,191"); // U+9BC0
expect(() => {ms932Encoder.encode("\u9BC1")}).toThrowError({name:"TypeError",message:"EncodingError U+9BC1"});
expect(() => {ms932Encoder.encode("\u9BC2")}).toThrowError({name:"TypeError",message:"EncodingError U+9BC2"});
expect(() => {ms932Encoder.encode("\u9BC3")}).toThrowError({name:"TypeError",message:"EncodingError U+9BC3"});
expect(() => {ms932Encoder.encode("\u9BC4")}).toThrowError({name:"TypeError",message:"EncodingError U+9BC4"});
expect(() => {ms932Encoder.encode("\u9BC5")}).toThrowError({name:"TypeError",message:"EncodingError U+9BC5"});
expect([...ms932Encoder.encode("鯆")].join(",")).toBe("233,194"); // U+9BC6
expect(() => {ms932Encoder.encode("\u9BC7")}).toThrowError({name:"TypeError",message:"EncodingError U+9BC7"});
expect(() => {ms932Encoder.encode("\u9BC8")}).toThrowError({name:"TypeError",message:"EncodingError U+9BC8"});
expect([...ms932Encoder.encode("鯉鯊")].join(",")).toBe("140,239,233,192"); // U+9BC9
expect(() => {ms932Encoder.encode("\u9BCB")}).toThrowError({name:"TypeError",message:"EncodingError U+9BCB"});
expect(() => {ms932Encoder.encode("\u9BCC")}).toThrowError({name:"TypeError",message:"EncodingError U+9BCC"});
expect(() => {ms932Encoder.encode("\u9BCD")}).toThrowError({name:"TypeError",message:"EncodingError U+9BCD"});
expect(() => {ms932Encoder.encode("\u9BCE")}).toThrowError({name:"TypeError",message:"EncodingError U+9BCE"});
expect([...ms932Encoder.encode("鯏")].join(",")).toBe("233,195"); // U+9BCF
expect(() => {ms932Encoder.encode("\u9BD0")}).toThrowError({name:"TypeError",message:"EncodingError U+9BD0"});
expect([...ms932Encoder.encode("鯑鯒")].join(",")).toBe("233,196,233,197"); // U+9BD1
expect(() => {ms932Encoder.encode("\u9BD3")}).toThrowError({name:"TypeError",message:"EncodingError U+9BD3"});
expect([...ms932Encoder.encode("鯔")].join(",")).toBe("233,201"); // U+9BD4
expect(() => {ms932Encoder.encode("\u9BD5")}).toThrowError({name:"TypeError",message:"EncodingError U+9BD5"});
expect([...ms932Encoder.encode("鯖")].join(",")).toBe("142,73"); // U+9BD6
expect(() => {ms932Encoder.encode("\u9BD7")}).toThrowError({name:"TypeError",message:"EncodingError U+9BD7"});
expect(() => {ms932Encoder.encode("\u9BD8")}).toThrowError({name:"TypeError",message:"EncodingError U+9BD8"});
expect(() => {ms932Encoder.encode("\u9BD9")}).toThrowError({name:"TypeError",message:"EncodingError U+9BD9"});
expect(() => {ms932Encoder.encode("\u9BDA")}).toThrowError({name:"TypeError",message:"EncodingError U+9BDA"});
expect([...ms932Encoder.encode("鯛")].join(",")).toBe("145,226"); // U+9BDB
expect(() => {ms932Encoder.encode("\u9BDC")}).toThrowError({name:"TypeError",message:"EncodingError U+9BDC"});
expect(() => {ms932Encoder.encode("\u9BDD")}).toThrowError({name:"TypeError",message:"EncodingError U+9BDD"});
expect(() => {ms932Encoder.encode("\u9BDE")}).toThrowError({name:"TypeError",message:"EncodingError U+9BDE"});
expect(() => {ms932Encoder.encode("\u9BDF")}).toThrowError({name:"TypeError",message:"EncodingError U+9BDF"});
expect(() => {ms932Encoder.encode("\u9BE0")}).toThrowError({name:"TypeError",message:"EncodingError U+9BE0"});
expect([...ms932Encoder.encode("鯡鯢鯣鯤")].join(",")).toBe("233,202,233,199,233,198,233,200"); // U+9BE1
expect(() => {ms932Encoder.encode("\u9BE5")}).toThrowError({name:"TypeError",message:"EncodingError U+9BE5"});
expect(() => {ms932Encoder.encode("\u9BE6")}).toThrowError({name:"TypeError",message:"EncodingError U+9BE6"});
expect(() => {ms932Encoder.encode("\u9BE7")}).toThrowError({name:"TypeError",message:"EncodingError U+9BE7"});
expect([...ms932Encoder.encode("鯨")].join(",")).toBe("140,126"); // U+9BE8
expect(() => {ms932Encoder.encode("\u9BE9")}).toThrowError({name:"TypeError",message:"EncodingError U+9BE9"});
expect(() => {ms932Encoder.encode("\u9BEA")}).toThrowError({name:"TypeError",message:"EncodingError U+9BEA"});
expect(() => {ms932Encoder.encode("\u9BEB")}).toThrowError({name:"TypeError",message:"EncodingError U+9BEB"});
expect(() => {ms932Encoder.encode("\u9BEC")}).toThrowError({name:"TypeError",message:"EncodingError U+9BEC"});
expect(() => {ms932Encoder.encode("\u9BED")}).toThrowError({name:"TypeError",message:"EncodingError U+9BED"});
expect(() => {ms932Encoder.encode("\u9BEE")}).toThrowError({name:"TypeError",message:"EncodingError U+9BEE"});
expect(() => {ms932Encoder.encode("\u9BEF")}).toThrowError({name:"TypeError",message:"EncodingError U+9BEF"});
expect([...ms932Encoder.encode("鯰鯱鯲")].join(",")).toBe("233,206,233,205,233,204"); // U+9BF0
expect(() => {ms932Encoder.encode("\u9BF3")}).toThrowError({name:"TypeError",message:"EncodingError U+9BF3"});
expect(() => {ms932Encoder.encode("\u9BF4")}).toThrowError({name:"TypeError",message:"EncodingError U+9BF4"});
expect([...ms932Encoder.encode("鯵")].join(",")).toBe("136,177"); // U+9BF5
expect(() => {ms932Encoder.encode("\u9BF6")}).toThrowError({name:"TypeError",message:"EncodingError U+9BF6"});
expect(() => {ms932Encoder.encode("\u9BF7")}).toThrowError({name:"TypeError",message:"EncodingError U+9BF7"});
expect(() => {ms932Encoder.encode("\u9BF8")}).toThrowError({name:"TypeError",message:"EncodingError U+9BF8"});
expect(() => {ms932Encoder.encode("\u9BF9")}).toThrowError({name:"TypeError",message:"EncodingError U+9BF9"});
expect(() => {ms932Encoder.encode("\u9BFA")}).toThrowError({name:"TypeError",message:"EncodingError U+9BFA"});
expect(() => {ms932Encoder.encode("\u9BFB")}).toThrowError({name:"TypeError",message:"EncodingError U+9BFB"});
expect(() => {ms932Encoder.encode("\u9BFC")}).toThrowError({name:"TypeError",message:"EncodingError U+9BFC"});
expect(() => {ms932Encoder.encode("\u9BFD")}).toThrowError({name:"TypeError",message:"EncodingError U+9BFD"});
expect(() => {ms932Encoder.encode("\u9BFE")}).toThrowError({name:"TypeError",message:"EncodingError U+9BFE"});
expect(() => {ms932Encoder.encode("\u9BFF")}).toThrowError({name:"TypeError",message:"EncodingError U+9BFF"});
expect([...ms932Encoder.encode("鰀")].join(",")).toBe("252,70"); // U+9C00
expect(() => {ms932Encoder.encode("\u9C01")}).toThrowError({name:"TypeError",message:"EncodingError U+9C01"});
expect(() => {ms932Encoder.encode("\u9C02")}).toThrowError({name:"TypeError",message:"EncodingError U+9C02"});
expect(() => {ms932Encoder.encode("\u9C03")}).toThrowError({name:"TypeError",message:"EncodingError U+9C03"});
expect([...ms932Encoder.encode("鰄")].join(",")).toBe("233,216"); // U+9C04
expect(() => {ms932Encoder.encode("\u9C05")}).toThrowError({name:"TypeError",message:"EncodingError U+9C05"});
expect([...ms932Encoder.encode("鰆")].join(",")).toBe("233,212"); // U+9C06
expect(() => {ms932Encoder.encode("\u9C07")}).toThrowError({name:"TypeError",message:"EncodingError U+9C07"});
expect([...ms932Encoder.encode("鰈鰉鰊")].join(",")).toBe("233,213,233,209,233,215"); // U+9C08
expect(() => {ms932Encoder.encode("\u9C0B")}).toThrowError({name:"TypeError",message:"EncodingError U+9C0B"});
expect([...ms932Encoder.encode("鰌鰍")].join(",")).toBe("233,211,138,130"); // U+9C0C
expect(() => {ms932Encoder.encode("\u9C0E")}).toThrowError({name:"TypeError",message:"EncodingError U+9C0E"});
expect(() => {ms932Encoder.encode("\u9C0F")}).toThrowError({name:"TypeError",message:"EncodingError U+9C0F"});
expect([...ms932Encoder.encode("鰐")].join(",")).toBe("152,107"); // U+9C10
expect(() => {ms932Encoder.encode("\u9C11")}).toThrowError({name:"TypeError",message:"EncodingError U+9C11"});
expect([...ms932Encoder.encode("鰒鰓鰔鰕")].join(",")).toBe("233,214,233,210,233,208,233,207"); // U+9C12
expect(() => {ms932Encoder.encode("\u9C16")}).toThrowError({name:"TypeError",message:"EncodingError U+9C16"});
expect(() => {ms932Encoder.encode("\u9C17")}).toThrowError({name:"TypeError",message:"EncodingError U+9C17"});
expect(() => {ms932Encoder.encode("\u9C18")}).toThrowError({name:"TypeError",message:"EncodingError U+9C18"});
expect(() => {ms932Encoder.encode("\u9C19")}).toThrowError({name:"TypeError",message:"EncodingError U+9C19"});
expect(() => {ms932Encoder.encode("\u9C1A")}).toThrowError({name:"TypeError",message:"EncodingError U+9C1A"});
expect([...ms932Encoder.encode("鰛")].join(",")).toBe("233,218"); // U+9C1B
expect(() => {ms932Encoder.encode("\u9C1C")}).toThrowError({name:"TypeError",message:"EncodingError U+9C1C"});
expect(() => {ms932Encoder.encode("\u9C1D")}).toThrowError({name:"TypeError",message:"EncodingError U+9C1D"});
expect(() => {ms932Encoder.encode("\u9C1E")}).toThrowError({name:"TypeError",message:"EncodingError U+9C1E"});
expect(() => {ms932Encoder.encode("\u9C1F")}).toThrowError({name:"TypeError",message:"EncodingError U+9C1F"});
expect(() => {ms932Encoder.encode("\u9C20")}).toThrowError({name:"TypeError",message:"EncodingError U+9C20"});
expect([...ms932Encoder.encode("鰡")].join(",")).toBe("233,221"); // U+9C21
expect(() => {ms932Encoder.encode("\u9C22")}).toThrowError({name:"TypeError",message:"EncodingError U+9C22"});
expect(() => {ms932Encoder.encode("\u9C23")}).toThrowError({name:"TypeError",message:"EncodingError U+9C23"});
expect([...ms932Encoder.encode("鰤鰥")].join(",")).toBe("233,220,233,219"); // U+9C24
expect(() => {ms932Encoder.encode("\u9C26")}).toThrowError({name:"TypeError",message:"EncodingError U+9C26"});
expect(() => {ms932Encoder.encode("\u9C27")}).toThrowError({name:"TypeError",message:"EncodingError U+9C27"});
expect(() => {ms932Encoder.encode("\u9C28")}).toThrowError({name:"TypeError",message:"EncodingError U+9C28"});
expect(() => {ms932Encoder.encode("\u9C29")}).toThrowError({name:"TypeError",message:"EncodingError U+9C29"});
expect(() => {ms932Encoder.encode("\u9C2A")}).toThrowError({name:"TypeError",message:"EncodingError U+9C2A"});
expect(() => {ms932Encoder.encode("\u9C2B")}).toThrowError({name:"TypeError",message:"EncodingError U+9C2B"});
expect(() => {ms932Encoder.encode("\u9C2C")}).toThrowError({name:"TypeError",message:"EncodingError U+9C2C"});
expect([...ms932Encoder.encode("鰭鰮鰯鰰")].join(",")).toBe("149,104,233,217,136,241,233,222"); // U+9C2D
expect(() => {ms932Encoder.encode("\u9C31")}).toThrowError({name:"TypeError",message:"EncodingError U+9C31"});
expect([...ms932Encoder.encode("鰲")].join(",")).toBe("233,224"); // U+9C32
expect(() => {ms932Encoder.encode("\u9C33")}).toThrowError({name:"TypeError",message:"EncodingError U+9C33"});
expect(() => {ms932Encoder.encode("\u9C34")}).toThrowError({name:"TypeError",message:"EncodingError U+9C34"});
expect(() => {ms932Encoder.encode("\u9C35")}).toThrowError({name:"TypeError",message:"EncodingError U+9C35"});
expect(() => {ms932Encoder.encode("\u9C36")}).toThrowError({name:"TypeError",message:"EncodingError U+9C36"});
expect(() => {ms932Encoder.encode("\u9C37")}).toThrowError({name:"TypeError",message:"EncodingError U+9C37"});
expect(() => {ms932Encoder.encode("\u9C38")}).toThrowError({name:"TypeError",message:"EncodingError U+9C38"});
expect([...ms932Encoder.encode("鰹鰺鰻")].join(",")).toBe("138,143,233,203,137,86"); // U+9C39
expect(() => {ms932Encoder.encode("\u9C3C")}).toThrowError({name:"TypeError",message:"EncodingError U+9C3C"});
expect(() => {ms932Encoder.encode("\u9C3D")}).toThrowError({name:"TypeError",message:"EncodingError U+9C3D"});
expect([...ms932Encoder.encode("鰾")].join(",")).toBe("233,226"); // U+9C3E
expect(() => {ms932Encoder.encode("\u9C3F")}).toThrowError({name:"TypeError",message:"EncodingError U+9C3F"});
expect(() => {ms932Encoder.encode("\u9C40")}).toThrowError({name:"TypeError",message:"EncodingError U+9C40"});
expect(() => {ms932Encoder.encode("\u9C41")}).toThrowError({name:"TypeError",message:"EncodingError U+9C41"});
expect(() => {ms932Encoder.encode("\u9C42")}).toThrowError({name:"TypeError",message:"EncodingError U+9C42"});
expect(() => {ms932Encoder.encode("\u9C43")}).toThrowError({name:"TypeError",message:"EncodingError U+9C43"});
expect(() => {ms932Encoder.encode("\u9C44")}).toThrowError({name:"TypeError",message:"EncodingError U+9C44"});
expect(() => {ms932Encoder.encode("\u9C45")}).toThrowError({name:"TypeError",message:"EncodingError U+9C45"});
expect([...ms932Encoder.encode("鱆鱇鱈")].join(",")).toBe("233,225,233,223,146,76"); // U+9C46
expect(() => {ms932Encoder.encode("\u9C49")}).toThrowError({name:"TypeError",message:"EncodingError U+9C49"});
expect(() => {ms932Encoder.encode("\u9C4A")}).toThrowError({name:"TypeError",message:"EncodingError U+9C4A"});
expect(() => {ms932Encoder.encode("\u9C4B")}).toThrowError({name:"TypeError",message:"EncodingError U+9C4B"});
expect(() => {ms932Encoder.encode("\u9C4C")}).toThrowError({name:"TypeError",message:"EncodingError U+9C4C"});
expect(() => {ms932Encoder.encode("\u9C4D")}).toThrowError({name:"TypeError",message:"EncodingError U+9C4D"});
expect(() => {ms932Encoder.encode("\u9C4E")}).toThrowError({name:"TypeError",message:"EncodingError U+9C4E"});
expect(() => {ms932Encoder.encode("\u9C4F")}).toThrowError({name:"TypeError",message:"EncodingError U+9C4F"});
expect(() => {ms932Encoder.encode("\u9C50")}).toThrowError({name:"TypeError",message:"EncodingError U+9C50"});
expect(() => {ms932Encoder.encode("\u9C51")}).toThrowError({name:"TypeError",message:"EncodingError U+9C51"});
expect([...ms932Encoder.encode("鱒")].join(",")).toBe("150,144"); // U+9C52
expect(() => {ms932Encoder.encode("\u9C53")}).toThrowError({name:"TypeError",message:"EncodingError U+9C53"});
expect(() => {ms932Encoder.encode("\u9C54")}).toThrowError({name:"TypeError",message:"EncodingError U+9C54"});
expect(() => {ms932Encoder.encode("\u9C55")}).toThrowError({name:"TypeError",message:"EncodingError U+9C55"});
expect(() => {ms932Encoder.encode("\u9C56")}).toThrowError({name:"TypeError",message:"EncodingError U+9C56"});
expect([...ms932Encoder.encode("鱗")].join(",")).toBe("151,216"); // U+9C57
expect(() => {ms932Encoder.encode("\u9C58")}).toThrowError({name:"TypeError",message:"EncodingError U+9C58"});
expect(() => {ms932Encoder.encode("\u9C59")}).toThrowError({name:"TypeError",message:"EncodingError U+9C59"});
expect([...ms932Encoder.encode("鱚")].join(",")).toBe("233,227"); // U+9C5A
expect(() => {ms932Encoder.encode("\u9C5B")}).toThrowError({name:"TypeError",message:"EncodingError U+9C5B"});
expect(() => {ms932Encoder.encode("\u9C5C")}).toThrowError({name:"TypeError",message:"EncodingError U+9C5C"});
expect(() => {ms932Encoder.encode("\u9C5D")}).toThrowError({name:"TypeError",message:"EncodingError U+9C5D"});
expect(() => {ms932Encoder.encode("\u9C5E")}).toThrowError({name:"TypeError",message:"EncodingError U+9C5E"});
expect(() => {ms932Encoder.encode("\u9C5F")}).toThrowError({name:"TypeError",message:"EncodingError U+9C5F"});
expect([...ms932Encoder.encode("鱠")].join(",")).toBe("233,228"); // U+9C60
expect(() => {ms932Encoder.encode("\u9C61")}).toThrowError({name:"TypeError",message:"EncodingError U+9C61"});
expect(() => {ms932Encoder.encode("\u9C62")}).toThrowError({name:"TypeError",message:"EncodingError U+9C62"});
expect(() => {ms932Encoder.encode("\u9C63")}).toThrowError({name:"TypeError",message:"EncodingError U+9C63"});
expect(() => {ms932Encoder.encode("\u9C64")}).toThrowError({name:"TypeError",message:"EncodingError U+9C64"});
expect(() => {ms932Encoder.encode("\u9C65")}).toThrowError({name:"TypeError",message:"EncodingError U+9C65"});
expect(() => {ms932Encoder.encode("\u9C66")}).toThrowError({name:"TypeError",message:"EncodingError U+9C66"});
expect([...ms932Encoder.encode("鱧")].join(",")).toBe("233,229"); // U+9C67
expect(() => {ms932Encoder.encode("\u9C68")}).toThrowError({name:"TypeError",message:"EncodingError U+9C68"});
expect(() => {ms932Encoder.encode("\u9C69")}).toThrowError({name:"TypeError",message:"EncodingError U+9C69"});
expect(() => {ms932Encoder.encode("\u9C6A")}).toThrowError({name:"TypeError",message:"EncodingError U+9C6A"});
expect(() => {ms932Encoder.encode("\u9C6B")}).toThrowError({name:"TypeError",message:"EncodingError U+9C6B"});
expect(() => {ms932Encoder.encode("\u9C6C")}).toThrowError({name:"TypeError",message:"EncodingError U+9C6C"});
expect(() => {ms932Encoder.encode("\u9C6D")}).toThrowError({name:"TypeError",message:"EncodingError U+9C6D"});
expect(() => {ms932Encoder.encode("\u9C6E")}).toThrowError({name:"TypeError",message:"EncodingError U+9C6E"});
expect(() => {ms932Encoder.encode("\u9C6F")}).toThrowError({name:"TypeError",message:"EncodingError U+9C6F"});
expect(() => {ms932Encoder.encode("\u9C70")}).toThrowError({name:"TypeError",message:"EncodingError U+9C70"});
expect(() => {ms932Encoder.encode("\u9C71")}).toThrowError({name:"TypeError",message:"EncodingError U+9C71"});
expect(() => {ms932Encoder.encode("\u9C72")}).toThrowError({name:"TypeError",message:"EncodingError U+9C72"});
expect(() => {ms932Encoder.encode("\u9C73")}).toThrowError({name:"TypeError",message:"EncodingError U+9C73"});
expect(() => {ms932Encoder.encode("\u9C74")}).toThrowError({name:"TypeError",message:"EncodingError U+9C74"});
expect(() => {ms932Encoder.encode("\u9C75")}).toThrowError({name:"TypeError",message:"EncodingError U+9C75"});
expect([...ms932Encoder.encode("鱶")].join(",")).toBe("233,230"); // U+9C76
expect(() => {ms932Encoder.encode("\u9C77")}).toThrowError({name:"TypeError",message:"EncodingError U+9C77"});
expect([...ms932Encoder.encode("鱸")].join(",")).toBe("233,231"); // U+9C78
expect(() => {ms932Encoder.encode("\u9C79")}).toThrowError({name:"TypeError",message:"EncodingError U+9C79"});
expect(() => {ms932Encoder.encode("\u9C7A")}).toThrowError({name:"TypeError",message:"EncodingError U+9C7A"});
expect(() => {ms932Encoder.encode("\u9C7B")}).toThrowError({name:"TypeError",message:"EncodingError U+9C7B"});
expect(() => {ms932Encoder.encode("\u9C7C")}).toThrowError({name:"TypeError",message:"EncodingError U+9C7C"});
expect(() => {ms932Encoder.encode("\u9C7D")}).toThrowError({name:"TypeError",message:"EncodingError U+9C7D"});
expect(() => {ms932Encoder.encode("\u9C7E")}).toThrowError({name:"TypeError",message:"EncodingError U+9C7E"});
expect(() => {ms932Encoder.encode("\u9C7F")}).toThrowError({name:"TypeError",message:"EncodingError U+9C7F"});
expect(() => {ms932Encoder.encode("\u9C80")}).toThrowError({name:"TypeError",message:"EncodingError U+9C80"});
expect(() => {ms932Encoder.encode("\u9C81")}).toThrowError({name:"TypeError",message:"EncodingError U+9C81"});
expect(() => {ms932Encoder.encode("\u9C82")}).toThrowError({name:"TypeError",message:"EncodingError U+9C82"});
expect(() => {ms932Encoder.encode("\u9C83")}).toThrowError({name:"TypeError",message:"EncodingError U+9C83"});
expect(() => {ms932Encoder.encode("\u9C84")}).toThrowError({name:"TypeError",message:"EncodingError U+9C84"});
expect(() => {ms932Encoder.encode("\u9C85")}).toThrowError({name:"TypeError",message:"EncodingError U+9C85"});
expect(() => {ms932Encoder.encode("\u9C86")}).toThrowError({name:"TypeError",message:"EncodingError U+9C86"});
expect(() => {ms932Encoder.encode("\u9C87")}).toThrowError({name:"TypeError",message:"EncodingError U+9C87"});
expect(() => {ms932Encoder.encode("\u9C88")}).toThrowError({name:"TypeError",message:"EncodingError U+9C88"});
expect(() => {ms932Encoder.encode("\u9C89")}).toThrowError({name:"TypeError",message:"EncodingError U+9C89"});
expect(() => {ms932Encoder.encode("\u9C8A")}).toThrowError({name:"TypeError",message:"EncodingError U+9C8A"});
expect(() => {ms932Encoder.encode("\u9C8B")}).toThrowError({name:"TypeError",message:"EncodingError U+9C8B"});
expect(() => {ms932Encoder.encode("\u9C8C")}).toThrowError({name:"TypeError",message:"EncodingError U+9C8C"});
expect(() => {ms932Encoder.encode("\u9C8D")}).toThrowError({name:"TypeError",message:"EncodingError U+9C8D"});
expect(() => {ms932Encoder.encode("\u9C8E")}).toThrowError({name:"TypeError",message:"EncodingError U+9C8E"});
expect(() => {ms932Encoder.encode("\u9C8F")}).toThrowError({name:"TypeError",message:"EncodingError U+9C8F"});
expect(() => {ms932Encoder.encode("\u9C90")}).toThrowError({name:"TypeError",message:"EncodingError U+9C90"});
expect(() => {ms932Encoder.encode("\u9C91")}).toThrowError({name:"TypeError",message:"EncodingError U+9C91"});
expect(() => {ms932Encoder.encode("\u9C92")}).toThrowError({name:"TypeError",message:"EncodingError U+9C92"});
expect(() => {ms932Encoder.encode("\u9C93")}).toThrowError({name:"TypeError",message:"EncodingError U+9C93"});
expect(() => {ms932Encoder.encode("\u9C94")}).toThrowError({name:"TypeError",message:"EncodingError U+9C94"});
expect(() => {ms932Encoder.encode("\u9C95")}).toThrowError({name:"TypeError",message:"EncodingError U+9C95"});
expect(() => {ms932Encoder.encode("\u9C96")}).toThrowError({name:"TypeError",message:"EncodingError U+9C96"});
expect(() => {ms932Encoder.encode("\u9C97")}).toThrowError({name:"TypeError",message:"EncodingError U+9C97"});
expect(() => {ms932Encoder.encode("\u9C98")}).toThrowError({name:"TypeError",message:"EncodingError U+9C98"});
expect(() => {ms932Encoder.encode("\u9C99")}).toThrowError({name:"TypeError",message:"EncodingError U+9C99"});
expect(() => {ms932Encoder.encode("\u9C9A")}).toThrowError({name:"TypeError",message:"EncodingError U+9C9A"});
expect(() => {ms932Encoder.encode("\u9C9B")}).toThrowError({name:"TypeError",message:"EncodingError U+9C9B"});
expect(() => {ms932Encoder.encode("\u9C9C")}).toThrowError({name:"TypeError",message:"EncodingError U+9C9C"});
expect(() => {ms932Encoder.encode("\u9C9D")}).toThrowError({name:"TypeError",message:"EncodingError U+9C9D"});
expect(() => {ms932Encoder.encode("\u9C9E")}).toThrowError({name:"TypeError",message:"EncodingError U+9C9E"});
expect(() => {ms932Encoder.encode("\u9C9F")}).toThrowError({name:"TypeError",message:"EncodingError U+9C9F"});
expect(() => {ms932Encoder.encode("\u9CA0")}).toThrowError({name:"TypeError",message:"EncodingError U+9CA0"});
expect(() => {ms932Encoder.encode("\u9CA1")}).toThrowError({name:"TypeError",message:"EncodingError U+9CA1"});
expect(() => {ms932Encoder.encode("\u9CA2")}).toThrowError({name:"TypeError",message:"EncodingError U+9CA2"});
expect(() => {ms932Encoder.encode("\u9CA3")}).toThrowError({name:"TypeError",message:"EncodingError U+9CA3"});
expect(() => {ms932Encoder.encode("\u9CA4")}).toThrowError({name:"TypeError",message:"EncodingError U+9CA4"});
expect(() => {ms932Encoder.encode("\u9CA5")}).toThrowError({name:"TypeError",message:"EncodingError U+9CA5"});
expect(() => {ms932Encoder.encode("\u9CA6")}).toThrowError({name:"TypeError",message:"EncodingError U+9CA6"});
expect(() => {ms932Encoder.encode("\u9CA7")}).toThrowError({name:"TypeError",message:"EncodingError U+9CA7"});
expect(() => {ms932Encoder.encode("\u9CA8")}).toThrowError({name:"TypeError",message:"EncodingError U+9CA8"});
expect(() => {ms932Encoder.encode("\u9CA9")}).toThrowError({name:"TypeError",message:"EncodingError U+9CA9"});
expect(() => {ms932Encoder.encode("\u9CAA")}).toThrowError({name:"TypeError",message:"EncodingError U+9CAA"});
expect(() => {ms932Encoder.encode("\u9CAB")}).toThrowError({name:"TypeError",message:"EncodingError U+9CAB"});
expect(() => {ms932Encoder.encode("\u9CAC")}).toThrowError({name:"TypeError",message:"EncodingError U+9CAC"});
expect(() => {ms932Encoder.encode("\u9CAD")}).toThrowError({name:"TypeError",message:"EncodingError U+9CAD"});
expect(() => {ms932Encoder.encode("\u9CAE")}).toThrowError({name:"TypeError",message:"EncodingError U+9CAE"});
expect(() => {ms932Encoder.encode("\u9CAF")}).toThrowError({name:"TypeError",message:"EncodingError U+9CAF"});
expect(() => {ms932Encoder.encode("\u9CB0")}).toThrowError({name:"TypeError",message:"EncodingError U+9CB0"});
expect(() => {ms932Encoder.encode("\u9CB1")}).toThrowError({name:"TypeError",message:"EncodingError U+9CB1"});
expect(() => {ms932Encoder.encode("\u9CB2")}).toThrowError({name:"TypeError",message:"EncodingError U+9CB2"});
expect(() => {ms932Encoder.encode("\u9CB3")}).toThrowError({name:"TypeError",message:"EncodingError U+9CB3"});
expect(() => {ms932Encoder.encode("\u9CB4")}).toThrowError({name:"TypeError",message:"EncodingError U+9CB4"});
expect(() => {ms932Encoder.encode("\u9CB5")}).toThrowError({name:"TypeError",message:"EncodingError U+9CB5"});
expect(() => {ms932Encoder.encode("\u9CB6")}).toThrowError({name:"TypeError",message:"EncodingError U+9CB6"});
expect(() => {ms932Encoder.encode("\u9CB7")}).toThrowError({name:"TypeError",message:"EncodingError U+9CB7"});
expect(() => {ms932Encoder.encode("\u9CB8")}).toThrowError({name:"TypeError",message:"EncodingError U+9CB8"});
expect(() => {ms932Encoder.encode("\u9CB9")}).toThrowError({name:"TypeError",message:"EncodingError U+9CB9"});
expect(() => {ms932Encoder.encode("\u9CBA")}).toThrowError({name:"TypeError",message:"EncodingError U+9CBA"});
expect(() => {ms932Encoder.encode("\u9CBB")}).toThrowError({name:"TypeError",message:"EncodingError U+9CBB"});
expect(() => {ms932Encoder.encode("\u9CBC")}).toThrowError({name:"TypeError",message:"EncodingError U+9CBC"});
expect(() => {ms932Encoder.encode("\u9CBD")}).toThrowError({name:"TypeError",message:"EncodingError U+9CBD"});
expect(() => {ms932Encoder.encode("\u9CBE")}).toThrowError({name:"TypeError",message:"EncodingError U+9CBE"});
expect(() => {ms932Encoder.encode("\u9CBF")}).toThrowError({name:"TypeError",message:"EncodingError U+9CBF"});
expect(() => {ms932Encoder.encode("\u9CC0")}).toThrowError({name:"TypeError",message:"EncodingError U+9CC0"});
expect(() => {ms932Encoder.encode("\u9CC1")}).toThrowError({name:"TypeError",message:"EncodingError U+9CC1"});
expect(() => {ms932Encoder.encode("\u9CC2")}).toThrowError({name:"TypeError",message:"EncodingError U+9CC2"});
expect(() => {ms932Encoder.encode("\u9CC3")}).toThrowError({name:"TypeError",message:"EncodingError U+9CC3"});
expect(() => {ms932Encoder.encode("\u9CC4")}).toThrowError({name:"TypeError",message:"EncodingError U+9CC4"});
expect(() => {ms932Encoder.encode("\u9CC5")}).toThrowError({name:"TypeError",message:"EncodingError U+9CC5"});
expect(() => {ms932Encoder.encode("\u9CC6")}).toThrowError({name:"TypeError",message:"EncodingError U+9CC6"});
expect(() => {ms932Encoder.encode("\u9CC7")}).toThrowError({name:"TypeError",message:"EncodingError U+9CC7"});
expect(() => {ms932Encoder.encode("\u9CC8")}).toThrowError({name:"TypeError",message:"EncodingError U+9CC8"});
expect(() => {ms932Encoder.encode("\u9CC9")}).toThrowError({name:"TypeError",message:"EncodingError U+9CC9"});
expect(() => {ms932Encoder.encode("\u9CCA")}).toThrowError({name:"TypeError",message:"EncodingError U+9CCA"});
expect(() => {ms932Encoder.encode("\u9CCB")}).toThrowError({name:"TypeError",message:"EncodingError U+9CCB"});
expect(() => {ms932Encoder.encode("\u9CCC")}).toThrowError({name:"TypeError",message:"EncodingError U+9CCC"});
expect(() => {ms932Encoder.encode("\u9CCD")}).toThrowError({name:"TypeError",message:"EncodingError U+9CCD"});
expect(() => {ms932Encoder.encode("\u9CCE")}).toThrowError({name:"TypeError",message:"EncodingError U+9CCE"});
expect(() => {ms932Encoder.encode("\u9CCF")}).toThrowError({name:"TypeError",message:"EncodingError U+9CCF"});
expect(() => {ms932Encoder.encode("\u9CD0")}).toThrowError({name:"TypeError",message:"EncodingError U+9CD0"});
expect(() => {ms932Encoder.encode("\u9CD1")}).toThrowError({name:"TypeError",message:"EncodingError U+9CD1"});
expect(() => {ms932Encoder.encode("\u9CD2")}).toThrowError({name:"TypeError",message:"EncodingError U+9CD2"});
expect(() => {ms932Encoder.encode("\u9CD3")}).toThrowError({name:"TypeError",message:"EncodingError U+9CD3"});
expect(() => {ms932Encoder.encode("\u9CD4")}).toThrowError({name:"TypeError",message:"EncodingError U+9CD4"});
expect(() => {ms932Encoder.encode("\u9CD5")}).toThrowError({name:"TypeError",message:"EncodingError U+9CD5"});
expect(() => {ms932Encoder.encode("\u9CD6")}).toThrowError({name:"TypeError",message:"EncodingError U+9CD6"});
expect(() => {ms932Encoder.encode("\u9CD7")}).toThrowError({name:"TypeError",message:"EncodingError U+9CD7"});
expect(() => {ms932Encoder.encode("\u9CD8")}).toThrowError({name:"TypeError",message:"EncodingError U+9CD8"});
expect(() => {ms932Encoder.encode("\u9CD9")}).toThrowError({name:"TypeError",message:"EncodingError U+9CD9"});
expect(() => {ms932Encoder.encode("\u9CDA")}).toThrowError({name:"TypeError",message:"EncodingError U+9CDA"});
expect(() => {ms932Encoder.encode("\u9CDB")}).toThrowError({name:"TypeError",message:"EncodingError U+9CDB"});
expect(() => {ms932Encoder.encode("\u9CDC")}).toThrowError({name:"TypeError",message:"EncodingError U+9CDC"});
expect(() => {ms932Encoder.encode("\u9CDD")}).toThrowError({name:"TypeError",message:"EncodingError U+9CDD"});
expect(() => {ms932Encoder.encode("\u9CDE")}).toThrowError({name:"TypeError",message:"EncodingError U+9CDE"});
expect(() => {ms932Encoder.encode("\u9CDF")}).toThrowError({name:"TypeError",message:"EncodingError U+9CDF"});
expect(() => {ms932Encoder.encode("\u9CE0")}).toThrowError({name:"TypeError",message:"EncodingError U+9CE0"});
expect(() => {ms932Encoder.encode("\u9CE1")}).toThrowError({name:"TypeError",message:"EncodingError U+9CE1"});
expect(() => {ms932Encoder.encode("\u9CE2")}).toThrowError({name:"TypeError",message:"EncodingError U+9CE2"});
expect(() => {ms932Encoder.encode("\u9CE3")}).toThrowError({name:"TypeError",message:"EncodingError U+9CE3"});
expect(() => {ms932Encoder.encode("\u9CE4")}).toThrowError({name:"TypeError",message:"EncodingError U+9CE4"});
expect([...ms932Encoder.encode("鳥")].join(",")).toBe("146,185"); // U+9CE5
expect(() => {ms932Encoder.encode("\u9CE6")}).toThrowError({name:"TypeError",message:"EncodingError U+9CE6"});
expect([...ms932Encoder.encode("鳧")].join(",")).toBe("233,232"); // U+9CE7
expect(() => {ms932Encoder.encode("\u9CE8")}).toThrowError({name:"TypeError",message:"EncodingError U+9CE8"});
expect([...ms932Encoder.encode("鳩")].join(",")).toBe("148,181"); // U+9CE9
expect(() => {ms932Encoder.encode("\u9CEA")}).toThrowError({name:"TypeError",message:"EncodingError U+9CEA"});
expect([...ms932Encoder.encode("鳫鳬")].join(",")).toBe("233,237,233,233"); // U+9CEB
expect(() => {ms932Encoder.encode("\u9CED")}).toThrowError({name:"TypeError",message:"EncodingError U+9CED"});
expect(() => {ms932Encoder.encode("\u9CEE")}).toThrowError({name:"TypeError",message:"EncodingError U+9CEE"});
expect(() => {ms932Encoder.encode("\u9CEF")}).toThrowError({name:"TypeError",message:"EncodingError U+9CEF"});
expect([...ms932Encoder.encode("鳰")].join(",")).toBe("233,234"); // U+9CF0
expect(() => {ms932Encoder.encode("\u9CF1")}).toThrowError({name:"TypeError",message:"EncodingError U+9CF1"});
expect(() => {ms932Encoder.encode("\u9CF2")}).toThrowError({name:"TypeError",message:"EncodingError U+9CF2"});
expect([...ms932Encoder.encode("鳳鳴")].join(",")).toBe("150,80,150,194"); // U+9CF3
expect(() => {ms932Encoder.encode("\u9CF5")}).toThrowError({name:"TypeError",message:"EncodingError U+9CF5"});
expect([...ms932Encoder.encode("鳶")].join(",")).toBe("147,206"); // U+9CF6
expect(() => {ms932Encoder.encode("\u9CF7")}).toThrowError({name:"TypeError",message:"EncodingError U+9CF7"});
expect(() => {ms932Encoder.encode("\u9CF8")}).toThrowError({name:"TypeError",message:"EncodingError U+9CF8"});
expect(() => {ms932Encoder.encode("\u9CF9")}).toThrowError({name:"TypeError",message:"EncodingError U+9CF9"});
expect(() => {ms932Encoder.encode("\u9CFA")}).toThrowError({name:"TypeError",message:"EncodingError U+9CFA"});
expect(() => {ms932Encoder.encode("\u9CFB")}).toThrowError({name:"TypeError",message:"EncodingError U+9CFB"});
expect(() => {ms932Encoder.encode("\u9CFC")}).toThrowError({name:"TypeError",message:"EncodingError U+9CFC"});
expect(() => {ms932Encoder.encode("\u9CFD")}).toThrowError({name:"TypeError",message:"EncodingError U+9CFD"});
expect(() => {ms932Encoder.encode("\u9CFE")}).toThrowError({name:"TypeError",message:"EncodingError U+9CFE"});
expect(() => {ms932Encoder.encode("\u9CFF")}).toThrowError({name:"TypeError",message:"EncodingError U+9CFF"});
expect(() => {ms932Encoder.encode("\u9D00")}).toThrowError({name:"TypeError",message:"EncodingError U+9D00"});
expect(() => {ms932Encoder.encode("\u9D01")}).toThrowError({name:"TypeError",message:"EncodingError U+9D01"});
expect(() => {ms932Encoder.encode("\u9D02")}).toThrowError({name:"TypeError",message:"EncodingError U+9D02"});
expect([...ms932Encoder.encode("鴃")].join(",")).toBe("233,238"); // U+9D03
expect(() => {ms932Encoder.encode("\u9D04")}).toThrowError({name:"TypeError",message:"EncodingError U+9D04"});
expect(() => {ms932Encoder.encode("\u9D05")}).toThrowError({name:"TypeError",message:"EncodingError U+9D05"});
expect([...ms932Encoder.encode("鴆鴇鴈鴉")].join(",")).toBe("233,239,147,188,233,236,233,235"); // U+9D06
expect(() => {ms932Encoder.encode("\u9D0A")}).toThrowError({name:"TypeError",message:"EncodingError U+9D0A"});
expect(() => {ms932Encoder.encode("\u9D0B")}).toThrowError({name:"TypeError",message:"EncodingError U+9D0B"});
expect(() => {ms932Encoder.encode("\u9D0C")}).toThrowError({name:"TypeError",message:"EncodingError U+9D0C"});
expect(() => {ms932Encoder.encode("\u9D0D")}).toThrowError({name:"TypeError",message:"EncodingError U+9D0D"});
expect([...ms932Encoder.encode("鴎")].join(",")).toBe("137,168"); // U+9D0E
expect(() => {ms932Encoder.encode("\u9D0F")}).toThrowError({name:"TypeError",message:"EncodingError U+9D0F"});
expect(() => {ms932Encoder.encode("\u9D10")}).toThrowError({name:"TypeError",message:"EncodingError U+9D10"});
expect(() => {ms932Encoder.encode("\u9D11")}).toThrowError({name:"TypeError",message:"EncodingError U+9D11"});
expect([...ms932Encoder.encode("鴒")].join(",")).toBe("233,247"); // U+9D12
expect(() => {ms932Encoder.encode("\u9D13")}).toThrowError({name:"TypeError",message:"EncodingError U+9D13"});
expect(() => {ms932Encoder.encode("\u9D14")}).toThrowError({name:"TypeError",message:"EncodingError U+9D14"});
expect([...ms932Encoder.encode("鴕")].join(",")).toBe("233,246"); // U+9D15
expect(() => {ms932Encoder.encode("\u9D16")}).toThrowError({name:"TypeError",message:"EncodingError U+9D16"});
expect(() => {ms932Encoder.encode("\u9D17")}).toThrowError({name:"TypeError",message:"EncodingError U+9D17"});
expect(() => {ms932Encoder.encode("\u9D18")}).toThrowError({name:"TypeError",message:"EncodingError U+9D18"});
expect(() => {ms932Encoder.encode("\u9D19")}).toThrowError({name:"TypeError",message:"EncodingError U+9D19"});
expect(() => {ms932Encoder.encode("\u9D1A")}).toThrowError({name:"TypeError",message:"EncodingError U+9D1A"});
expect([...ms932Encoder.encode("鴛")].join(",")).toBe("137,149"); // U+9D1B
expect(() => {ms932Encoder.encode("\u9D1C")}).toThrowError({name:"TypeError",message:"EncodingError U+9D1C"});
expect(() => {ms932Encoder.encode("\u9D1D")}).toThrowError({name:"TypeError",message:"EncodingError U+9D1D"});
expect(() => {ms932Encoder.encode("\u9D1E")}).toThrowError({name:"TypeError",message:"EncodingError U+9D1E"});
expect([...ms932Encoder.encode("鴟")].join(",")).toBe("233,244"); // U+9D1F
expect(() => {ms932Encoder.encode("\u9D20")}).toThrowError({name:"TypeError",message:"EncodingError U+9D20"});
expect(() => {ms932Encoder.encode("\u9D21")}).toThrowError({name:"TypeError",message:"EncodingError U+9D21"});
expect(() => {ms932Encoder.encode("\u9D22")}).toThrowError({name:"TypeError",message:"EncodingError U+9D22"});
expect([...ms932Encoder.encode("鴣")].join(",")).toBe("233,243"); // U+9D23
expect(() => {ms932Encoder.encode("\u9D24")}).toThrowError({name:"TypeError",message:"EncodingError U+9D24"});
expect(() => {ms932Encoder.encode("\u9D25")}).toThrowError({name:"TypeError",message:"EncodingError U+9D25"});
expect([...ms932Encoder.encode("鴦")].join(",")).toBe("233,241"); // U+9D26
expect(() => {ms932Encoder.encode("\u9D27")}).toThrowError({name:"TypeError",message:"EncodingError U+9D27"});
expect([...ms932Encoder.encode("鴨")].join(",")).toBe("138,155"); // U+9D28
expect(() => {ms932Encoder.encode("\u9D29")}).toThrowError({name:"TypeError",message:"EncodingError U+9D29"});
expect([...ms932Encoder.encode("鴪鴫鴬")].join(",")).toBe("233,240,142,176,137,167"); // U+9D2A
expect(() => {ms932Encoder.encode("\u9D2D")}).toThrowError({name:"TypeError",message:"EncodingError U+9D2D"});
expect(() => {ms932Encoder.encode("\u9D2E")}).toThrowError({name:"TypeError",message:"EncodingError U+9D2E"});
expect(() => {ms932Encoder.encode("\u9D2F")}).toThrowError({name:"TypeError",message:"EncodingError U+9D2F"});
expect(() => {ms932Encoder.encode("\u9D30")}).toThrowError({name:"TypeError",message:"EncodingError U+9D30"});
expect(() => {ms932Encoder.encode("\u9D31")}).toThrowError({name:"TypeError",message:"EncodingError U+9D31"});
expect(() => {ms932Encoder.encode("\u9D32")}).toThrowError({name:"TypeError",message:"EncodingError U+9D32"});
expect(() => {ms932Encoder.encode("\u9D33")}).toThrowError({name:"TypeError",message:"EncodingError U+9D33"});
expect(() => {ms932Encoder.encode("\u9D34")}).toThrowError({name:"TypeError",message:"EncodingError U+9D34"});
expect(() => {ms932Encoder.encode("\u9D35")}).toThrowError({name:"TypeError",message:"EncodingError U+9D35"});
expect(() => {ms932Encoder.encode("\u9D36")}).toThrowError({name:"TypeError",message:"EncodingError U+9D36"});
expect(() => {ms932Encoder.encode("\u9D37")}).toThrowError({name:"TypeError",message:"EncodingError U+9D37"});
expect(() => {ms932Encoder.encode("\u9D38")}).toThrowError({name:"TypeError",message:"EncodingError U+9D38"});
expect(() => {ms932Encoder.encode("\u9D39")}).toThrowError({name:"TypeError",message:"EncodingError U+9D39"});
expect(() => {ms932Encoder.encode("\u9D3A")}).toThrowError({name:"TypeError",message:"EncodingError U+9D3A"});
expect([...ms932Encoder.encode("鴻")].join(",")).toBe("141,131"); // U+9D3B
expect(() => {ms932Encoder.encode("\u9D3C")}).toThrowError({name:"TypeError",message:"EncodingError U+9D3C"});
expect(() => {ms932Encoder.encode("\u9D3D")}).toThrowError({name:"TypeError",message:"EncodingError U+9D3D"});
expect([...ms932Encoder.encode("鴾鴿")].join(",")).toBe("233,250,233,249"); // U+9D3E
expect(() => {ms932Encoder.encode("\u9D40")}).toThrowError({name:"TypeError",message:"EncodingError U+9D40"});
expect([...ms932Encoder.encode("鵁")].join(",")).toBe("233,248"); // U+9D41
expect(() => {ms932Encoder.encode("\u9D42")}).toThrowError({name:"TypeError",message:"EncodingError U+9D42"});
expect(() => {ms932Encoder.encode("\u9D43")}).toThrowError({name:"TypeError",message:"EncodingError U+9D43"});
expect([...ms932Encoder.encode("鵄")].join(",")).toBe("233,245"); // U+9D44
expect(() => {ms932Encoder.encode("\u9D45")}).toThrowError({name:"TypeError",message:"EncodingError U+9D45"});
expect([...ms932Encoder.encode("鵆")].join(",")).toBe("233,251"); // U+9D46
expect(() => {ms932Encoder.encode("\u9D47")}).toThrowError({name:"TypeError",message:"EncodingError U+9D47"});
expect([...ms932Encoder.encode("鵈")].join(",")).toBe("233,252"); // U+9D48
expect(() => {ms932Encoder.encode("\u9D49")}).toThrowError({name:"TypeError",message:"EncodingError U+9D49"});
expect(() => {ms932Encoder.encode("\u9D4A")}).toThrowError({name:"TypeError",message:"EncodingError U+9D4A"});
expect(() => {ms932Encoder.encode("\u9D4B")}).toThrowError({name:"TypeError",message:"EncodingError U+9D4B"});
expect(() => {ms932Encoder.encode("\u9D4C")}).toThrowError({name:"TypeError",message:"EncodingError U+9D4C"});
expect(() => {ms932Encoder.encode("\u9D4D")}).toThrowError({name:"TypeError",message:"EncodingError U+9D4D"});
expect(() => {ms932Encoder.encode("\u9D4E")}).toThrowError({name:"TypeError",message:"EncodingError U+9D4E"});
expect(() => {ms932Encoder.encode("\u9D4F")}).toThrowError({name:"TypeError",message:"EncodingError U+9D4F"});
expect([...ms932Encoder.encode("鵐鵑")].join(",")).toBe("234,68,234,67"); // U+9D50
expect(() => {ms932Encoder.encode("\u9D52")}).toThrowError({name:"TypeError",message:"EncodingError U+9D52"});
expect(() => {ms932Encoder.encode("\u9D53")}).toThrowError({name:"TypeError",message:"EncodingError U+9D53"});
expect(() => {ms932Encoder.encode("\u9D54")}).toThrowError({name:"TypeError",message:"EncodingError U+9D54"});
expect(() => {ms932Encoder.encode("\u9D55")}).toThrowError({name:"TypeError",message:"EncodingError U+9D55"});
expect(() => {ms932Encoder.encode("\u9D56")}).toThrowError({name:"TypeError",message:"EncodingError U+9D56"});
expect(() => {ms932Encoder.encode("\u9D57")}).toThrowError({name:"TypeError",message:"EncodingError U+9D57"});
expect(() => {ms932Encoder.encode("\u9D58")}).toThrowError({name:"TypeError",message:"EncodingError U+9D58"});
expect([...ms932Encoder.encode("鵙")].join(",")).toBe("234,69"); // U+9D59
expect(() => {ms932Encoder.encode("\u9D5A")}).toThrowError({name:"TypeError",message:"EncodingError U+9D5A"});
expect(() => {ms932Encoder.encode("\u9D5B")}).toThrowError({name:"TypeError",message:"EncodingError U+9D5B"});
expect([...ms932Encoder.encode("鵜鵝鵞")].join(",")).toBe("137,76,234,64,234,65"); // U+9D5C
expect(() => {ms932Encoder.encode("\u9D5F")}).toThrowError({name:"TypeError",message:"EncodingError U+9D5F"});
expect([...ms932Encoder.encode("鵠鵡")].join(",")).toBe("141,148,150,183"); // U+9D60
expect(() => {ms932Encoder.encode("\u9D62")}).toThrowError({name:"TypeError",message:"EncodingError U+9D62"});
expect(() => {ms932Encoder.encode("\u9D63")}).toThrowError({name:"TypeError",message:"EncodingError U+9D63"});
expect([...ms932Encoder.encode("鵤")].join(",")).toBe("234,66"); // U+9D64
expect(() => {ms932Encoder.encode("\u9D65")}).toThrowError({name:"TypeError",message:"EncodingError U+9D65"});
expect(() => {ms932Encoder.encode("\u9D66")}).toThrowError({name:"TypeError",message:"EncodingError U+9D66"});
expect(() => {ms932Encoder.encode("\u9D67")}).toThrowError({name:"TypeError",message:"EncodingError U+9D67"});
expect(() => {ms932Encoder.encode("\u9D68")}).toThrowError({name:"TypeError",message:"EncodingError U+9D68"});
expect(() => {ms932Encoder.encode("\u9D69")}).toThrowError({name:"TypeError",message:"EncodingError U+9D69"});
expect(() => {ms932Encoder.encode("\u9D6A")}).toThrowError({name:"TypeError",message:"EncodingError U+9D6A"});
expect([...ms932Encoder.encode("鵫鵬")].join(",")).toBe("252,72,150,81"); // U+9D6B
expect(() => {ms932Encoder.encode("\u9D6D")}).toThrowError({name:"TypeError",message:"EncodingError U+9D6D"});
expect(() => {ms932Encoder.encode("\u9D6E")}).toThrowError({name:"TypeError",message:"EncodingError U+9D6E"});
expect([...ms932Encoder.encode("鵯鵰")].join(",")).toBe("234,74,252,71"); // U+9D6F
expect(() => {ms932Encoder.encode("\u9D71")}).toThrowError({name:"TypeError",message:"EncodingError U+9D71"});
expect([...ms932Encoder.encode("鵲")].join(",")).toBe("234,70"); // U+9D72
expect(() => {ms932Encoder.encode("\u9D73")}).toThrowError({name:"TypeError",message:"EncodingError U+9D73"});
expect(() => {ms932Encoder.encode("\u9D74")}).toThrowError({name:"TypeError",message:"EncodingError U+9D74"});
expect(() => {ms932Encoder.encode("\u9D75")}).toThrowError({name:"TypeError",message:"EncodingError U+9D75"});
expect(() => {ms932Encoder.encode("\u9D76")}).toThrowError({name:"TypeError",message:"EncodingError U+9D76"});
expect(() => {ms932Encoder.encode("\u9D77")}).toThrowError({name:"TypeError",message:"EncodingError U+9D77"});
expect(() => {ms932Encoder.encode("\u9D78")}).toThrowError({name:"TypeError",message:"EncodingError U+9D78"});
expect(() => {ms932Encoder.encode("\u9D79")}).toThrowError({name:"TypeError",message:"EncodingError U+9D79"});
expect([...ms932Encoder.encode("鵺")].join(",")).toBe("234,75"); // U+9D7A
expect(() => {ms932Encoder.encode("\u9D7B")}).toThrowError({name:"TypeError",message:"EncodingError U+9D7B"});
expect(() => {ms932Encoder.encode("\u9D7C")}).toThrowError({name:"TypeError",message:"EncodingError U+9D7C"});
expect(() => {ms932Encoder.encode("\u9D7D")}).toThrowError({name:"TypeError",message:"EncodingError U+9D7D"});
expect(() => {ms932Encoder.encode("\u9D7E")}).toThrowError({name:"TypeError",message:"EncodingError U+9D7E"});
expect(() => {ms932Encoder.encode("\u9D7F")}).toThrowError({name:"TypeError",message:"EncodingError U+9D7F"});
expect(() => {ms932Encoder.encode("\u9D80")}).toThrowError({name:"TypeError",message:"EncodingError U+9D80"});
expect(() => {ms932Encoder.encode("\u9D81")}).toThrowError({name:"TypeError",message:"EncodingError U+9D81"});
expect(() => {ms932Encoder.encode("\u9D82")}).toThrowError({name:"TypeError",message:"EncodingError U+9D82"});
expect(() => {ms932Encoder.encode("\u9D83")}).toThrowError({name:"TypeError",message:"EncodingError U+9D83"});
expect(() => {ms932Encoder.encode("\u9D84")}).toThrowError({name:"TypeError",message:"EncodingError U+9D84"});
expect(() => {ms932Encoder.encode("\u9D85")}).toThrowError({name:"TypeError",message:"EncodingError U+9D85"});
expect(() => {ms932Encoder.encode("\u9D86")}).toThrowError({name:"TypeError",message:"EncodingError U+9D86"});
expect([...ms932Encoder.encode("鶇")].join(",")).toBe("234,72"); // U+9D87
expect(() => {ms932Encoder.encode("\u9D88")}).toThrowError({name:"TypeError",message:"EncodingError U+9D88"});
expect([...ms932Encoder.encode("鶉")].join(",")).toBe("234,71"); // U+9D89
expect(() => {ms932Encoder.encode("\u9D8A")}).toThrowError({name:"TypeError",message:"EncodingError U+9D8A"});
expect(() => {ms932Encoder.encode("\u9D8B")}).toThrowError({name:"TypeError",message:"EncodingError U+9D8B"});
expect(() => {ms932Encoder.encode("\u9D8C")}).toThrowError({name:"TypeError",message:"EncodingError U+9D8C"});
expect(() => {ms932Encoder.encode("\u9D8D")}).toThrowError({name:"TypeError",message:"EncodingError U+9D8D"});
expect(() => {ms932Encoder.encode("\u9D8E")}).toThrowError({name:"TypeError",message:"EncodingError U+9D8E"});
expect([...ms932Encoder.encode("鶏")].join(",")).toBe("140,123"); // U+9D8F
expect(() => {ms932Encoder.encode("\u9D90")}).toThrowError({name:"TypeError",message:"EncodingError U+9D90"});
expect(() => {ms932Encoder.encode("\u9D91")}).toThrowError({name:"TypeError",message:"EncodingError U+9D91"});
expect(() => {ms932Encoder.encode("\u9D92")}).toThrowError({name:"TypeError",message:"EncodingError U+9D92"});
expect(() => {ms932Encoder.encode("\u9D93")}).toThrowError({name:"TypeError",message:"EncodingError U+9D93"});
expect(() => {ms932Encoder.encode("\u9D94")}).toThrowError({name:"TypeError",message:"EncodingError U+9D94"});
expect(() => {ms932Encoder.encode("\u9D95")}).toThrowError({name:"TypeError",message:"EncodingError U+9D95"});
expect(() => {ms932Encoder.encode("\u9D96")}).toThrowError({name:"TypeError",message:"EncodingError U+9D96"});
expect(() => {ms932Encoder.encode("\u9D97")}).toThrowError({name:"TypeError",message:"EncodingError U+9D97"});
expect(() => {ms932Encoder.encode("\u9D98")}).toThrowError({name:"TypeError",message:"EncodingError U+9D98"});
expect(() => {ms932Encoder.encode("\u9D99")}).toThrowError({name:"TypeError",message:"EncodingError U+9D99"});
expect([...ms932Encoder.encode("鶚")].join(",")).toBe("234,76"); // U+9D9A
expect(() => {ms932Encoder.encode("\u9D9B")}).toThrowError({name:"TypeError",message:"EncodingError U+9D9B"});
expect(() => {ms932Encoder.encode("\u9D9C")}).toThrowError({name:"TypeError",message:"EncodingError U+9D9C"});
expect(() => {ms932Encoder.encode("\u9D9D")}).toThrowError({name:"TypeError",message:"EncodingError U+9D9D"});
expect(() => {ms932Encoder.encode("\u9D9E")}).toThrowError({name:"TypeError",message:"EncodingError U+9D9E"});
expect(() => {ms932Encoder.encode("\u9D9F")}).toThrowError({name:"TypeError",message:"EncodingError U+9D9F"});
expect(() => {ms932Encoder.encode("\u9DA0")}).toThrowError({name:"TypeError",message:"EncodingError U+9DA0"});
expect(() => {ms932Encoder.encode("\u9DA1")}).toThrowError({name:"TypeError",message:"EncodingError U+9DA1"});
expect(() => {ms932Encoder.encode("\u9DA2")}).toThrowError({name:"TypeError",message:"EncodingError U+9DA2"});
expect(() => {ms932Encoder.encode("\u9DA3")}).toThrowError({name:"TypeError",message:"EncodingError U+9DA3"});
expect([...ms932Encoder.encode("鶤")].join(",")).toBe("234,77"); // U+9DA4
expect(() => {ms932Encoder.encode("\u9DA5")}).toThrowError({name:"TypeError",message:"EncodingError U+9DA5"});
expect(() => {ms932Encoder.encode("\u9DA6")}).toThrowError({name:"TypeError",message:"EncodingError U+9DA6"});
expect(() => {ms932Encoder.encode("\u9DA7")}).toThrowError({name:"TypeError",message:"EncodingError U+9DA7"});
expect(() => {ms932Encoder.encode("\u9DA8")}).toThrowError({name:"TypeError",message:"EncodingError U+9DA8"});
expect([...ms932Encoder.encode("鶩")].join(",")).toBe("234,78"); // U+9DA9
expect(() => {ms932Encoder.encode("\u9DAA")}).toThrowError({name:"TypeError",message:"EncodingError U+9DAA"});
expect([...ms932Encoder.encode("鶫")].join(",")).toBe("234,73"); // U+9DAB
expect(() => {ms932Encoder.encode("\u9DAC")}).toThrowError({name:"TypeError",message:"EncodingError U+9DAC"});
expect(() => {ms932Encoder.encode("\u9DAD")}).toThrowError({name:"TypeError",message:"EncodingError U+9DAD"});
expect(() => {ms932Encoder.encode("\u9DAE")}).toThrowError({name:"TypeError",message:"EncodingError U+9DAE"});
expect([...ms932Encoder.encode("鶯")].join(",")).toBe("233,242"); // U+9DAF
expect(() => {ms932Encoder.encode("\u9DB0")}).toThrowError({name:"TypeError",message:"EncodingError U+9DB0"});
expect(() => {ms932Encoder.encode("\u9DB1")}).toThrowError({name:"TypeError",message:"EncodingError U+9DB1"});
expect([...ms932Encoder.encode("鶲")].join(",")).toBe("234,79"); // U+9DB2
expect(() => {ms932Encoder.encode("\u9DB3")}).toThrowError({name:"TypeError",message:"EncodingError U+9DB3"});
expect([...ms932Encoder.encode("鶴")].join(",")).toBe("146,223"); // U+9DB4
expect(() => {ms932Encoder.encode("\u9DB5")}).toThrowError({name:"TypeError",message:"EncodingError U+9DB5"});
expect(() => {ms932Encoder.encode("\u9DB6")}).toThrowError({name:"TypeError",message:"EncodingError U+9DB6"});
expect(() => {ms932Encoder.encode("\u9DB7")}).toThrowError({name:"TypeError",message:"EncodingError U+9DB7"});
expect([...ms932Encoder.encode("鶸")].join(",")).toBe("234,83"); // U+9DB8
expect(() => {ms932Encoder.encode("\u9DB9")}).toThrowError({name:"TypeError",message:"EncodingError U+9DB9"});
expect([...ms932Encoder.encode("鶺鶻")].join(",")).toBe("234,84,234,82"); // U+9DBA
expect(() => {ms932Encoder.encode("\u9DBC")}).toThrowError({name:"TypeError",message:"EncodingError U+9DBC"});
expect(() => {ms932Encoder.encode("\u9DBD")}).toThrowError({name:"TypeError",message:"EncodingError U+9DBD"});
expect(() => {ms932Encoder.encode("\u9DBE")}).toThrowError({name:"TypeError",message:"EncodingError U+9DBE"});
expect(() => {ms932Encoder.encode("\u9DBF")}).toThrowError({name:"TypeError",message:"EncodingError U+9DBF"});
expect(() => {ms932Encoder.encode("\u9DC0")}).toThrowError({name:"TypeError",message:"EncodingError U+9DC0"});
expect([...ms932Encoder.encode("鷁鷂")].join(",")).toBe("234,81,234,87"); // U+9DC1
expect(() => {ms932Encoder.encode("\u9DC3")}).toThrowError({name:"TypeError",message:"EncodingError U+9DC3"});
expect([...ms932Encoder.encode("鷄")].join(",")).toBe("234,80"); // U+9DC4
expect(() => {ms932Encoder.encode("\u9DC5")}).toThrowError({name:"TypeError",message:"EncodingError U+9DC5"});
expect([...ms932Encoder.encode("鷆")].join(",")).toBe("234,85"); // U+9DC6
expect(() => {ms932Encoder.encode("\u9DC7")}).toThrowError({name:"TypeError",message:"EncodingError U+9DC7"});
expect(() => {ms932Encoder.encode("\u9DC8")}).toThrowError({name:"TypeError",message:"EncodingError U+9DC8"});
expect(() => {ms932Encoder.encode("\u9DC9")}).toThrowError({name:"TypeError",message:"EncodingError U+9DC9"});
expect(() => {ms932Encoder.encode("\u9DCA")}).toThrowError({name:"TypeError",message:"EncodingError U+9DCA"});
expect(() => {ms932Encoder.encode("\u9DCB")}).toThrowError({name:"TypeError",message:"EncodingError U+9DCB"});
expect(() => {ms932Encoder.encode("\u9DCC")}).toThrowError({name:"TypeError",message:"EncodingError U+9DCC"});
expect(() => {ms932Encoder.encode("\u9DCD")}).toThrowError({name:"TypeError",message:"EncodingError U+9DCD"});
expect(() => {ms932Encoder.encode("\u9DCE")}).toThrowError({name:"TypeError",message:"EncodingError U+9DCE"});
expect([...ms932Encoder.encode("鷏")].join(",")).toBe("234,86"); // U+9DCF
expect(() => {ms932Encoder.encode("\u9DD0")}).toThrowError({name:"TypeError",message:"EncodingError U+9DD0"});
expect(() => {ms932Encoder.encode("\u9DD1")}).toThrowError({name:"TypeError",message:"EncodingError U+9DD1"});
expect(() => {ms932Encoder.encode("\u9DD2")}).toThrowError({name:"TypeError",message:"EncodingError U+9DD2"});
expect([...ms932Encoder.encode("鷓")].join(",")).toBe("234,89"); // U+9DD3
expect(() => {ms932Encoder.encode("\u9DD4")}).toThrowError({name:"TypeError",message:"EncodingError U+9DD4"});
expect(() => {ms932Encoder.encode("\u9DD5")}).toThrowError({name:"TypeError",message:"EncodingError U+9DD5"});
expect(() => {ms932Encoder.encode("\u9DD6")}).toThrowError({name:"TypeError",message:"EncodingError U+9DD6"});
expect(() => {ms932Encoder.encode("\u9DD7")}).toThrowError({name:"TypeError",message:"EncodingError U+9DD7"});
expect(() => {ms932Encoder.encode("\u9DD8")}).toThrowError({name:"TypeError",message:"EncodingError U+9DD8"});
expect([...ms932Encoder.encode("鷙")].join(",")).toBe("234,88"); // U+9DD9
expect(() => {ms932Encoder.encode("\u9DDA")}).toThrowError({name:"TypeError",message:"EncodingError U+9DDA"});
expect(() => {ms932Encoder.encode("\u9DDB")}).toThrowError({name:"TypeError",message:"EncodingError U+9DDB"});
expect(() => {ms932Encoder.encode("\u9DDC")}).toThrowError({name:"TypeError",message:"EncodingError U+9DDC"});
expect(() => {ms932Encoder.encode("\u9DDD")}).toThrowError({name:"TypeError",message:"EncodingError U+9DDD"});
expect(() => {ms932Encoder.encode("\u9DDE")}).toThrowError({name:"TypeError",message:"EncodingError U+9DDE"});
expect(() => {ms932Encoder.encode("\u9DDF")}).toThrowError({name:"TypeError",message:"EncodingError U+9DDF"});
expect(() => {ms932Encoder.encode("\u9DE0")}).toThrowError({name:"TypeError",message:"EncodingError U+9DE0"});
expect(() => {ms932Encoder.encode("\u9DE1")}).toThrowError({name:"TypeError",message:"EncodingError U+9DE1"});
expect(() => {ms932Encoder.encode("\u9DE2")}).toThrowError({name:"TypeError",message:"EncodingError U+9DE2"});
expect(() => {ms932Encoder.encode("\u9DE3")}).toThrowError({name:"TypeError",message:"EncodingError U+9DE3"});
expect(() => {ms932Encoder.encode("\u9DE4")}).toThrowError({name:"TypeError",message:"EncodingError U+9DE4"});
expect(() => {ms932Encoder.encode("\u9DE5")}).toThrowError({name:"TypeError",message:"EncodingError U+9DE5"});
expect([...ms932Encoder.encode("鷦")].join(",")).toBe("234,91"); // U+9DE6
expect(() => {ms932Encoder.encode("\u9DE7")}).toThrowError({name:"TypeError",message:"EncodingError U+9DE7"});
expect(() => {ms932Encoder.encode("\u9DE8")}).toThrowError({name:"TypeError",message:"EncodingError U+9DE8"});
expect(() => {ms932Encoder.encode("\u9DE9")}).toThrowError({name:"TypeError",message:"EncodingError U+9DE9"});
expect(() => {ms932Encoder.encode("\u9DEA")}).toThrowError({name:"TypeError",message:"EncodingError U+9DEA"});
expect(() => {ms932Encoder.encode("\u9DEB")}).toThrowError({name:"TypeError",message:"EncodingError U+9DEB"});
expect(() => {ms932Encoder.encode("\u9DEC")}).toThrowError({name:"TypeError",message:"EncodingError U+9DEC"});
expect([...ms932Encoder.encode("鷭")].join(",")).toBe("234,92"); // U+9DED
expect(() => {ms932Encoder.encode("\u9DEE")}).toThrowError({name:"TypeError",message:"EncodingError U+9DEE"});
expect([...ms932Encoder.encode("鷯")].join(",")).toBe("234,93"); // U+9DEF
expect(() => {ms932Encoder.encode("\u9DF0")}).toThrowError({name:"TypeError",message:"EncodingError U+9DF0"});
expect(() => {ms932Encoder.encode("\u9DF1")}).toThrowError({name:"TypeError",message:"EncodingError U+9DF1"});
expect([...ms932Encoder.encode("鷲")].join(",")).toBe("152,104"); // U+9DF2
expect(() => {ms932Encoder.encode("\u9DF3")}).toThrowError({name:"TypeError",message:"EncodingError U+9DF3"});
expect(() => {ms932Encoder.encode("\u9DF4")}).toThrowError({name:"TypeError",message:"EncodingError U+9DF4"});
expect(() => {ms932Encoder.encode("\u9DF5")}).toThrowError({name:"TypeError",message:"EncodingError U+9DF5"});
expect(() => {ms932Encoder.encode("\u9DF6")}).toThrowError({name:"TypeError",message:"EncodingError U+9DF6"});
expect(() => {ms932Encoder.encode("\u9DF7")}).toThrowError({name:"TypeError",message:"EncodingError U+9DF7"});
expect([...ms932Encoder.encode("鷸鷹鷺")].join(",")).toBe("234,90,145,233,141,235"); // U+9DF8
expect(() => {ms932Encoder.encode("\u9DFB")}).toThrowError({name:"TypeError",message:"EncodingError U+9DFB"});
expect(() => {ms932Encoder.encode("\u9DFC")}).toThrowError({name:"TypeError",message:"EncodingError U+9DFC"});
expect([...ms932Encoder.encode("鷽")].join(",")).toBe("234,94"); // U+9DFD
expect(() => {ms932Encoder.encode("\u9DFE")}).toThrowError({name:"TypeError",message:"EncodingError U+9DFE"});
expect(() => {ms932Encoder.encode("\u9DFF")}).toThrowError({name:"TypeError",message:"EncodingError U+9DFF"});
expect(() => {ms932Encoder.encode("\u9E00")}).toThrowError({name:"TypeError",message:"EncodingError U+9E00"});
expect(() => {ms932Encoder.encode("\u9E01")}).toThrowError({name:"TypeError",message:"EncodingError U+9E01"});
expect(() => {ms932Encoder.encode("\u9E02")}).toThrowError({name:"TypeError",message:"EncodingError U+9E02"});
expect(() => {ms932Encoder.encode("\u9E03")}).toThrowError({name:"TypeError",message:"EncodingError U+9E03"});
expect(() => {ms932Encoder.encode("\u9E04")}).toThrowError({name:"TypeError",message:"EncodingError U+9E04"});
expect(() => {ms932Encoder.encode("\u9E05")}).toThrowError({name:"TypeError",message:"EncodingError U+9E05"});
expect(() => {ms932Encoder.encode("\u9E06")}).toThrowError({name:"TypeError",message:"EncodingError U+9E06"});
expect(() => {ms932Encoder.encode("\u9E07")}).toThrowError({name:"TypeError",message:"EncodingError U+9E07"});
expect(() => {ms932Encoder.encode("\u9E08")}).toThrowError({name:"TypeError",message:"EncodingError U+9E08"});
expect(() => {ms932Encoder.encode("\u9E09")}).toThrowError({name:"TypeError",message:"EncodingError U+9E09"});
expect(() => {ms932Encoder.encode("\u9E0A")}).toThrowError({name:"TypeError",message:"EncodingError U+9E0A"});
expect(() => {ms932Encoder.encode("\u9E0B")}).toThrowError({name:"TypeError",message:"EncodingError U+9E0B"});
expect(() => {ms932Encoder.encode("\u9E0C")}).toThrowError({name:"TypeError",message:"EncodingError U+9E0C"});
expect(() => {ms932Encoder.encode("\u9E0D")}).toThrowError({name:"TypeError",message:"EncodingError U+9E0D"});
expect(() => {ms932Encoder.encode("\u9E0E")}).toThrowError({name:"TypeError",message:"EncodingError U+9E0E"});
expect(() => {ms932Encoder.encode("\u9E0F")}).toThrowError({name:"TypeError",message:"EncodingError U+9E0F"});
expect(() => {ms932Encoder.encode("\u9E10")}).toThrowError({name:"TypeError",message:"EncodingError U+9E10"});
expect(() => {ms932Encoder.encode("\u9E11")}).toThrowError({name:"TypeError",message:"EncodingError U+9E11"});
expect(() => {ms932Encoder.encode("\u9E12")}).toThrowError({name:"TypeError",message:"EncodingError U+9E12"});
expect(() => {ms932Encoder.encode("\u9E13")}).toThrowError({name:"TypeError",message:"EncodingError U+9E13"});
expect(() => {ms932Encoder.encode("\u9E14")}).toThrowError({name:"TypeError",message:"EncodingError U+9E14"});
expect(() => {ms932Encoder.encode("\u9E15")}).toThrowError({name:"TypeError",message:"EncodingError U+9E15"});
expect(() => {ms932Encoder.encode("\u9E16")}).toThrowError({name:"TypeError",message:"EncodingError U+9E16"});
expect(() => {ms932Encoder.encode("\u9E17")}).toThrowError({name:"TypeError",message:"EncodingError U+9E17"});
expect(() => {ms932Encoder.encode("\u9E18")}).toThrowError({name:"TypeError",message:"EncodingError U+9E18"});
expect([...ms932Encoder.encode("鸙鸚鸛")].join(",")).toBe("252,74,234,95,234,96"); // U+9E19
expect(() => {ms932Encoder.encode("\u9E1C")}).toThrowError({name:"TypeError",message:"EncodingError U+9E1C"});
expect(() => {ms932Encoder.encode("\u9E1D")}).toThrowError({name:"TypeError",message:"EncodingError U+9E1D"});
expect([...ms932Encoder.encode("鸞")].join(",")).toBe("234,97"); // U+9E1E
expect(() => {ms932Encoder.encode("\u9E1F")}).toThrowError({name:"TypeError",message:"EncodingError U+9E1F"});
expect(() => {ms932Encoder.encode("\u9E20")}).toThrowError({name:"TypeError",message:"EncodingError U+9E20"});
expect(() => {ms932Encoder.encode("\u9E21")}).toThrowError({name:"TypeError",message:"EncodingError U+9E21"});
expect(() => {ms932Encoder.encode("\u9E22")}).toThrowError({name:"TypeError",message:"EncodingError U+9E22"});
expect(() => {ms932Encoder.encode("\u9E23")}).toThrowError({name:"TypeError",message:"EncodingError U+9E23"});
expect(() => {ms932Encoder.encode("\u9E24")}).toThrowError({name:"TypeError",message:"EncodingError U+9E24"});
expect(() => {ms932Encoder.encode("\u9E25")}).toThrowError({name:"TypeError",message:"EncodingError U+9E25"});
expect(() => {ms932Encoder.encode("\u9E26")}).toThrowError({name:"TypeError",message:"EncodingError U+9E26"});
expect(() => {ms932Encoder.encode("\u9E27")}).toThrowError({name:"TypeError",message:"EncodingError U+9E27"});
expect(() => {ms932Encoder.encode("\u9E28")}).toThrowError({name:"TypeError",message:"EncodingError U+9E28"});
expect(() => {ms932Encoder.encode("\u9E29")}).toThrowError({name:"TypeError",message:"EncodingError U+9E29"});
expect(() => {ms932Encoder.encode("\u9E2A")}).toThrowError({name:"TypeError",message:"EncodingError U+9E2A"});
expect(() => {ms932Encoder.encode("\u9E2B")}).toThrowError({name:"TypeError",message:"EncodingError U+9E2B"});
expect(() => {ms932Encoder.encode("\u9E2C")}).toThrowError({name:"TypeError",message:"EncodingError U+9E2C"});
expect(() => {ms932Encoder.encode("\u9E2D")}).toThrowError({name:"TypeError",message:"EncodingError U+9E2D"});
expect(() => {ms932Encoder.encode("\u9E2E")}).toThrowError({name:"TypeError",message:"EncodingError U+9E2E"});
expect(() => {ms932Encoder.encode("\u9E2F")}).toThrowError({name:"TypeError",message:"EncodingError U+9E2F"});
expect(() => {ms932Encoder.encode("\u9E30")}).toThrowError({name:"TypeError",message:"EncodingError U+9E30"});
expect(() => {ms932Encoder.encode("\u9E31")}).toThrowError({name:"TypeError",message:"EncodingError U+9E31"});
expect(() => {ms932Encoder.encode("\u9E32")}).toThrowError({name:"TypeError",message:"EncodingError U+9E32"});
expect(() => {ms932Encoder.encode("\u9E33")}).toThrowError({name:"TypeError",message:"EncodingError U+9E33"});
expect(() => {ms932Encoder.encode("\u9E34")}).toThrowError({name:"TypeError",message:"EncodingError U+9E34"});
expect(() => {ms932Encoder.encode("\u9E35")}).toThrowError({name:"TypeError",message:"EncodingError U+9E35"});
expect(() => {ms932Encoder.encode("\u9E36")}).toThrowError({name:"TypeError",message:"EncodingError U+9E36"});
expect(() => {ms932Encoder.encode("\u9E37")}).toThrowError({name:"TypeError",message:"EncodingError U+9E37"});
expect(() => {ms932Encoder.encode("\u9E38")}).toThrowError({name:"TypeError",message:"EncodingError U+9E38"});
expect(() => {ms932Encoder.encode("\u9E39")}).toThrowError({name:"TypeError",message:"EncodingError U+9E39"});
expect(() => {ms932Encoder.encode("\u9E3A")}).toThrowError({name:"TypeError",message:"EncodingError U+9E3A"});
expect(() => {ms932Encoder.encode("\u9E3B")}).toThrowError({name:"TypeError",message:"EncodingError U+9E3B"});
expect(() => {ms932Encoder.encode("\u9E3C")}).toThrowError({name:"TypeError",message:"EncodingError U+9E3C"});
expect(() => {ms932Encoder.encode("\u9E3D")}).toThrowError({name:"TypeError",message:"EncodingError U+9E3D"});
expect(() => {ms932Encoder.encode("\u9E3E")}).toThrowError({name:"TypeError",message:"EncodingError U+9E3E"});
expect(() => {ms932Encoder.encode("\u9E3F")}).toThrowError({name:"TypeError",message:"EncodingError U+9E3F"});
expect(() => {ms932Encoder.encode("\u9E40")}).toThrowError({name:"TypeError",message:"EncodingError U+9E40"});
expect(() => {ms932Encoder.encode("\u9E41")}).toThrowError({name:"TypeError",message:"EncodingError U+9E41"});
expect(() => {ms932Encoder.encode("\u9E42")}).toThrowError({name:"TypeError",message:"EncodingError U+9E42"});
expect(() => {ms932Encoder.encode("\u9E43")}).toThrowError({name:"TypeError",message:"EncodingError U+9E43"});
expect(() => {ms932Encoder.encode("\u9E44")}).toThrowError({name:"TypeError",message:"EncodingError U+9E44"});
expect(() => {ms932Encoder.encode("\u9E45")}).toThrowError({name:"TypeError",message:"EncodingError U+9E45"});
expect(() => {ms932Encoder.encode("\u9E46")}).toThrowError({name:"TypeError",message:"EncodingError U+9E46"});
expect(() => {ms932Encoder.encode("\u9E47")}).toThrowError({name:"TypeError",message:"EncodingError U+9E47"});
expect(() => {ms932Encoder.encode("\u9E48")}).toThrowError({name:"TypeError",message:"EncodingError U+9E48"});
expect(() => {ms932Encoder.encode("\u9E49")}).toThrowError({name:"TypeError",message:"EncodingError U+9E49"});
expect(() => {ms932Encoder.encode("\u9E4A")}).toThrowError({name:"TypeError",message:"EncodingError U+9E4A"});
expect(() => {ms932Encoder.encode("\u9E4B")}).toThrowError({name:"TypeError",message:"EncodingError U+9E4B"});
expect(() => {ms932Encoder.encode("\u9E4C")}).toThrowError({name:"TypeError",message:"EncodingError U+9E4C"});
expect(() => {ms932Encoder.encode("\u9E4D")}).toThrowError({name:"TypeError",message:"EncodingError U+9E4D"});
expect(() => {ms932Encoder.encode("\u9E4E")}).toThrowError({name:"TypeError",message:"EncodingError U+9E4E"});
expect(() => {ms932Encoder.encode("\u9E4F")}).toThrowError({name:"TypeError",message:"EncodingError U+9E4F"});
expect(() => {ms932Encoder.encode("\u9E50")}).toThrowError({name:"TypeError",message:"EncodingError U+9E50"});
expect(() => {ms932Encoder.encode("\u9E51")}).toThrowError({name:"TypeError",message:"EncodingError U+9E51"});
expect(() => {ms932Encoder.encode("\u9E52")}).toThrowError({name:"TypeError",message:"EncodingError U+9E52"});
expect(() => {ms932Encoder.encode("\u9E53")}).toThrowError({name:"TypeError",message:"EncodingError U+9E53"});
expect(() => {ms932Encoder.encode("\u9E54")}).toThrowError({name:"TypeError",message:"EncodingError U+9E54"});
expect(() => {ms932Encoder.encode("\u9E55")}).toThrowError({name:"TypeError",message:"EncodingError U+9E55"});
expect(() => {ms932Encoder.encode("\u9E56")}).toThrowError({name:"TypeError",message:"EncodingError U+9E56"});
expect(() => {ms932Encoder.encode("\u9E57")}).toThrowError({name:"TypeError",message:"EncodingError U+9E57"});
expect(() => {ms932Encoder.encode("\u9E58")}).toThrowError({name:"TypeError",message:"EncodingError U+9E58"});
expect(() => {ms932Encoder.encode("\u9E59")}).toThrowError({name:"TypeError",message:"EncodingError U+9E59"});
expect(() => {ms932Encoder.encode("\u9E5A")}).toThrowError({name:"TypeError",message:"EncodingError U+9E5A"});
expect(() => {ms932Encoder.encode("\u9E5B")}).toThrowError({name:"TypeError",message:"EncodingError U+9E5B"});
expect(() => {ms932Encoder.encode("\u9E5C")}).toThrowError({name:"TypeError",message:"EncodingError U+9E5C"});
expect(() => {ms932Encoder.encode("\u9E5D")}).toThrowError({name:"TypeError",message:"EncodingError U+9E5D"});
expect(() => {ms932Encoder.encode("\u9E5E")}).toThrowError({name:"TypeError",message:"EncodingError U+9E5E"});
expect(() => {ms932Encoder.encode("\u9E5F")}).toThrowError({name:"TypeError",message:"EncodingError U+9E5F"});
expect(() => {ms932Encoder.encode("\u9E60")}).toThrowError({name:"TypeError",message:"EncodingError U+9E60"});
expect(() => {ms932Encoder.encode("\u9E61")}).toThrowError({name:"TypeError",message:"EncodingError U+9E61"});
expect(() => {ms932Encoder.encode("\u9E62")}).toThrowError({name:"TypeError",message:"EncodingError U+9E62"});
expect(() => {ms932Encoder.encode("\u9E63")}).toThrowError({name:"TypeError",message:"EncodingError U+9E63"});
expect(() => {ms932Encoder.encode("\u9E64")}).toThrowError({name:"TypeError",message:"EncodingError U+9E64"});
expect(() => {ms932Encoder.encode("\u9E65")}).toThrowError({name:"TypeError",message:"EncodingError U+9E65"});
expect(() => {ms932Encoder.encode("\u9E66")}).toThrowError({name:"TypeError",message:"EncodingError U+9E66"});
expect(() => {ms932Encoder.encode("\u9E67")}).toThrowError({name:"TypeError",message:"EncodingError U+9E67"});
expect(() => {ms932Encoder.encode("\u9E68")}).toThrowError({name:"TypeError",message:"EncodingError U+9E68"});
expect(() => {ms932Encoder.encode("\u9E69")}).toThrowError({name:"TypeError",message:"EncodingError U+9E69"});
expect(() => {ms932Encoder.encode("\u9E6A")}).toThrowError({name:"TypeError",message:"EncodingError U+9E6A"});
expect(() => {ms932Encoder.encode("\u9E6B")}).toThrowError({name:"TypeError",message:"EncodingError U+9E6B"});
expect(() => {ms932Encoder.encode("\u9E6C")}).toThrowError({name:"TypeError",message:"EncodingError U+9E6C"});
expect(() => {ms932Encoder.encode("\u9E6D")}).toThrowError({name:"TypeError",message:"EncodingError U+9E6D"});
expect(() => {ms932Encoder.encode("\u9E6E")}).toThrowError({name:"TypeError",message:"EncodingError U+9E6E"});
expect(() => {ms932Encoder.encode("\u9E6F")}).toThrowError({name:"TypeError",message:"EncodingError U+9E6F"});
expect(() => {ms932Encoder.encode("\u9E70")}).toThrowError({name:"TypeError",message:"EncodingError U+9E70"});
expect(() => {ms932Encoder.encode("\u9E71")}).toThrowError({name:"TypeError",message:"EncodingError U+9E71"});
expect(() => {ms932Encoder.encode("\u9E72")}).toThrowError({name:"TypeError",message:"EncodingError U+9E72"});
expect(() => {ms932Encoder.encode("\u9E73")}).toThrowError({name:"TypeError",message:"EncodingError U+9E73"});
expect(() => {ms932Encoder.encode("\u9E74")}).toThrowError({name:"TypeError",message:"EncodingError U+9E74"});
expect([...ms932Encoder.encode("鹵")].join(",")).toBe("234,98"); // U+9E75
expect(() => {ms932Encoder.encode("\u9E76")}).toThrowError({name:"TypeError",message:"EncodingError U+9E76"});
expect(() => {ms932Encoder.encode("\u9E77")}).toThrowError({name:"TypeError",message:"EncodingError U+9E77"});
expect([...ms932Encoder.encode("鹸鹹")].join(",")).toBe("140,178,234,99"); // U+9E78
expect(() => {ms932Encoder.encode("\u9E7A")}).toThrowError({name:"TypeError",message:"EncodingError U+9E7A"});
expect(() => {ms932Encoder.encode("\u9E7B")}).toThrowError({name:"TypeError",message:"EncodingError U+9E7B"});
expect(() => {ms932Encoder.encode("\u9E7C")}).toThrowError({name:"TypeError",message:"EncodingError U+9E7C"});
expect([...ms932Encoder.encode("鹽")].join(",")).toBe("234,100"); // U+9E7D
expect(() => {ms932Encoder.encode("\u9E7E")}).toThrowError({name:"TypeError",message:"EncodingError U+9E7E"});
expect([...ms932Encoder.encode("鹿")].join(",")).toBe("142,173"); // U+9E7F
expect(() => {ms932Encoder.encode("\u9E80")}).toThrowError({name:"TypeError",message:"EncodingError U+9E80"});
expect([...ms932Encoder.encode("麁")].join(",")).toBe("234,101"); // U+9E81
expect(() => {ms932Encoder.encode("\u9E82")}).toThrowError({name:"TypeError",message:"EncodingError U+9E82"});
expect(() => {ms932Encoder.encode("\u9E83")}).toThrowError({name:"TypeError",message:"EncodingError U+9E83"});
expect(() => {ms932Encoder.encode("\u9E84")}).toThrowError({name:"TypeError",message:"EncodingError U+9E84"});
expect(() => {ms932Encoder.encode("\u9E85")}).toThrowError({name:"TypeError",message:"EncodingError U+9E85"});
expect(() => {ms932Encoder.encode("\u9E86")}).toThrowError({name:"TypeError",message:"EncodingError U+9E86"});
expect(() => {ms932Encoder.encode("\u9E87")}).toThrowError({name:"TypeError",message:"EncodingError U+9E87"});
expect([...ms932Encoder.encode("麈")].join(",")).toBe("234,102"); // U+9E88
expect(() => {ms932Encoder.encode("\u9E89")}).toThrowError({name:"TypeError",message:"EncodingError U+9E89"});
expect(() => {ms932Encoder.encode("\u9E8A")}).toThrowError({name:"TypeError",message:"EncodingError U+9E8A"});
expect([...ms932Encoder.encode("麋麌")].join(",")).toBe("234,103,234,104"); // U+9E8B
expect(() => {ms932Encoder.encode("\u9E8D")}).toThrowError({name:"TypeError",message:"EncodingError U+9E8D"});
expect(() => {ms932Encoder.encode("\u9E8E")}).toThrowError({name:"TypeError",message:"EncodingError U+9E8E"});
expect(() => {ms932Encoder.encode("\u9E8F")}).toThrowError({name:"TypeError",message:"EncodingError U+9E8F"});
expect(() => {ms932Encoder.encode("\u9E90")}).toThrowError({name:"TypeError",message:"EncodingError U+9E90"});
expect([...ms932Encoder.encode("麑麒麓")].join(",")).toBe("234,107,234,105,152,91"); // U+9E91
expect(() => {ms932Encoder.encode("\u9E94")}).toThrowError({name:"TypeError",message:"EncodingError U+9E94"});
expect([...ms932Encoder.encode("麕")].join(",")).toBe("234,106"); // U+9E95
expect(() => {ms932Encoder.encode("\u9E96")}).toThrowError({name:"TypeError",message:"EncodingError U+9E96"});
expect([...ms932Encoder.encode("麗")].join(",")).toBe("151,237"); // U+9E97
expect(() => {ms932Encoder.encode("\u9E98")}).toThrowError({name:"TypeError",message:"EncodingError U+9E98"});
expect(() => {ms932Encoder.encode("\u9E99")}).toThrowError({name:"TypeError",message:"EncodingError U+9E99"});
expect(() => {ms932Encoder.encode("\u9E9A")}).toThrowError({name:"TypeError",message:"EncodingError U+9E9A"});
expect(() => {ms932Encoder.encode("\u9E9B")}).toThrowError({name:"TypeError",message:"EncodingError U+9E9B"});
expect(() => {ms932Encoder.encode("\u9E9C")}).toThrowError({name:"TypeError",message:"EncodingError U+9E9C"});
expect([...ms932Encoder.encode("麝")].join(",")).toBe("234,108"); // U+9E9D
expect(() => {ms932Encoder.encode("\u9E9E")}).toThrowError({name:"TypeError",message:"EncodingError U+9E9E"});
expect([...ms932Encoder.encode("麟")].join(",")).toBe("151,217"); // U+9E9F
expect(() => {ms932Encoder.encode("\u9EA0")}).toThrowError({name:"TypeError",message:"EncodingError U+9EA0"});
expect(() => {ms932Encoder.encode("\u9EA1")}).toThrowError({name:"TypeError",message:"EncodingError U+9EA1"});
expect(() => {ms932Encoder.encode("\u9EA2")}).toThrowError({name:"TypeError",message:"EncodingError U+9EA2"});
expect(() => {ms932Encoder.encode("\u9EA3")}).toThrowError({name:"TypeError",message:"EncodingError U+9EA3"});
expect(() => {ms932Encoder.encode("\u9EA4")}).toThrowError({name:"TypeError",message:"EncodingError U+9EA4"});
expect([...ms932Encoder.encode("麥麦")].join(",")).toBe("234,109,148,158"); // U+9EA5
expect(() => {ms932Encoder.encode("\u9EA7")}).toThrowError({name:"TypeError",message:"EncodingError U+9EA7"});
expect(() => {ms932Encoder.encode("\u9EA8")}).toThrowError({name:"TypeError",message:"EncodingError U+9EA8"});
expect([...ms932Encoder.encode("麩麪")].join(",")).toBe("234,110,234,112"); // U+9EA9
expect(() => {ms932Encoder.encode("\u9EAB")}).toThrowError({name:"TypeError",message:"EncodingError U+9EAB"});
expect(() => {ms932Encoder.encode("\u9EAC")}).toThrowError({name:"TypeError",message:"EncodingError U+9EAC"});
expect([...ms932Encoder.encode("麭")].join(",")).toBe("234,113"); // U+9EAD
expect(() => {ms932Encoder.encode("\u9EAE")}).toThrowError({name:"TypeError",message:"EncodingError U+9EAE"});
expect(() => {ms932Encoder.encode("\u9EAF")}).toThrowError({name:"TypeError",message:"EncodingError U+9EAF"});
expect(() => {ms932Encoder.encode("\u9EB0")}).toThrowError({name:"TypeError",message:"EncodingError U+9EB0"});
expect(() => {ms932Encoder.encode("\u9EB1")}).toThrowError({name:"TypeError",message:"EncodingError U+9EB1"});
expect(() => {ms932Encoder.encode("\u9EB2")}).toThrowError({name:"TypeError",message:"EncodingError U+9EB2"});
expect(() => {ms932Encoder.encode("\u9EB3")}).toThrowError({name:"TypeError",message:"EncodingError U+9EB3"});
expect(() => {ms932Encoder.encode("\u9EB4")}).toThrowError({name:"TypeError",message:"EncodingError U+9EB4"});
expect(() => {ms932Encoder.encode("\u9EB5")}).toThrowError({name:"TypeError",message:"EncodingError U+9EB5"});
expect(() => {ms932Encoder.encode("\u9EB6")}).toThrowError({name:"TypeError",message:"EncodingError U+9EB6"});
expect(() => {ms932Encoder.encode("\u9EB7")}).toThrowError({name:"TypeError",message:"EncodingError U+9EB7"});
expect([...ms932Encoder.encode("麸麹麺麻麼")].join(",")).toBe("234,111,141,141,150,203,150,131,155,245"); // U+9EB8
expect(() => {ms932Encoder.encode("\u9EBD")}).toThrowError({name:"TypeError",message:"EncodingError U+9EBD"});
expect([...ms932Encoder.encode("麾麿")].join(",")).toBe("159,128,150,155"); // U+9EBE
expect(() => {ms932Encoder.encode("\u9EC0")}).toThrowError({name:"TypeError",message:"EncodingError U+9EC0"});
expect(() => {ms932Encoder.encode("\u9EC1")}).toThrowError({name:"TypeError",message:"EncodingError U+9EC1"});
expect(() => {ms932Encoder.encode("\u9EC2")}).toThrowError({name:"TypeError",message:"EncodingError U+9EC2"});
expect(() => {ms932Encoder.encode("\u9EC3")}).toThrowError({name:"TypeError",message:"EncodingError U+9EC3"});
expect([...ms932Encoder.encode("黄")].join(",")).toBe("137,169"); // U+9EC4
expect(() => {ms932Encoder.encode("\u9EC5")}).toThrowError({name:"TypeError",message:"EncodingError U+9EC5"});
expect(() => {ms932Encoder.encode("\u9EC6")}).toThrowError({name:"TypeError",message:"EncodingError U+9EC6"});
expect(() => {ms932Encoder.encode("\u9EC7")}).toThrowError({name:"TypeError",message:"EncodingError U+9EC7"});
expect(() => {ms932Encoder.encode("\u9EC8")}).toThrowError({name:"TypeError",message:"EncodingError U+9EC8"});
expect(() => {ms932Encoder.encode("\u9EC9")}).toThrowError({name:"TypeError",message:"EncodingError U+9EC9"});
expect(() => {ms932Encoder.encode("\u9ECA")}).toThrowError({name:"TypeError",message:"EncodingError U+9ECA"});
expect(() => {ms932Encoder.encode("\u9ECB")}).toThrowError({name:"TypeError",message:"EncodingError U+9ECB"});
expect([...ms932Encoder.encode("黌黍黎黏黐黑黒")].join(",")).toBe("234,115,139,111,234,116,234,117,234,118,252,75,141,149"); // U+9ECC
expect(() => {ms932Encoder.encode("\u9ED3")}).toThrowError({name:"TypeError",message:"EncodingError U+9ED3"});
expect([...ms932Encoder.encode("黔")].join(",")).toBe("234,119"); // U+9ED4
expect(() => {ms932Encoder.encode("\u9ED5")}).toThrowError({name:"TypeError",message:"EncodingError U+9ED5"});
expect(() => {ms932Encoder.encode("\u9ED6")}).toThrowError({name:"TypeError",message:"EncodingError U+9ED6"});
expect(() => {ms932Encoder.encode("\u9ED7")}).toThrowError({name:"TypeError",message:"EncodingError U+9ED7"});
expect([...ms932Encoder.encode("默黙")].join(",")).toBe("224,210,150,217"); // U+9ED8
expect(() => {ms932Encoder.encode("\u9EDA")}).toThrowError({name:"TypeError",message:"EncodingError U+9EDA"});
expect([...ms932Encoder.encode("黛黜黝點")].join(",")).toBe("145,225,234,120,234,122,234,121"); // U+9EDB
expect(() => {ms932Encoder.encode("\u9EDF")}).toThrowError({name:"TypeError",message:"EncodingError U+9EDF"});
expect([...ms932Encoder.encode("黠")].join(",")).toBe("234,123"); // U+9EE0
expect(() => {ms932Encoder.encode("\u9EE1")}).toThrowError({name:"TypeError",message:"EncodingError U+9EE1"});
expect(() => {ms932Encoder.encode("\u9EE2")}).toThrowError({name:"TypeError",message:"EncodingError U+9EE2"});
expect(() => {ms932Encoder.encode("\u9EE3")}).toThrowError({name:"TypeError",message:"EncodingError U+9EE3"});
expect(() => {ms932Encoder.encode("\u9EE4")}).toThrowError({name:"TypeError",message:"EncodingError U+9EE4"});
expect([...ms932Encoder.encode("黥")].join(",")).toBe("234,124"); // U+9EE5
expect(() => {ms932Encoder.encode("\u9EE6")}).toThrowError({name:"TypeError",message:"EncodingError U+9EE6"});
expect(() => {ms932Encoder.encode("\u9EE7")}).toThrowError({name:"TypeError",message:"EncodingError U+9EE7"});
expect([...ms932Encoder.encode("黨")].join(",")).toBe("234,125"); // U+9EE8
expect(() => {ms932Encoder.encode("\u9EE9")}).toThrowError({name:"TypeError",message:"EncodingError U+9EE9"});
expect(() => {ms932Encoder.encode("\u9EEA")}).toThrowError({name:"TypeError",message:"EncodingError U+9EEA"});
expect(() => {ms932Encoder.encode("\u9EEB")}).toThrowError({name:"TypeError",message:"EncodingError U+9EEB"});
expect(() => {ms932Encoder.encode("\u9EEC")}).toThrowError({name:"TypeError",message:"EncodingError U+9EEC"});
expect(() => {ms932Encoder.encode("\u9EED")}).toThrowError({name:"TypeError",message:"EncodingError U+9EED"});
expect(() => {ms932Encoder.encode("\u9EEE")}).toThrowError({name:"TypeError",message:"EncodingError U+9EEE"});
expect([...ms932Encoder.encode("黯")].join(",")).toBe("234,126"); // U+9EEF
expect(() => {ms932Encoder.encode("\u9EF0")}).toThrowError({name:"TypeError",message:"EncodingError U+9EF0"});
expect(() => {ms932Encoder.encode("\u9EF1")}).toThrowError({name:"TypeError",message:"EncodingError U+9EF1"});
expect(() => {ms932Encoder.encode("\u9EF2")}).toThrowError({name:"TypeError",message:"EncodingError U+9EF2"});
expect(() => {ms932Encoder.encode("\u9EF3")}).toThrowError({name:"TypeError",message:"EncodingError U+9EF3"});
expect([...ms932Encoder.encode("黴")].join(",")).toBe("234,128"); // U+9EF4
expect(() => {ms932Encoder.encode("\u9EF5")}).toThrowError({name:"TypeError",message:"EncodingError U+9EF5"});
expect([...ms932Encoder.encode("黶黷")].join(",")).toBe("234,129,234,130"); // U+9EF6
expect(() => {ms932Encoder.encode("\u9EF8")}).toThrowError({name:"TypeError",message:"EncodingError U+9EF8"});
expect([...ms932Encoder.encode("黹")].join(",")).toBe("234,131"); // U+9EF9
expect(() => {ms932Encoder.encode("\u9EFA")}).toThrowError({name:"TypeError",message:"EncodingError U+9EFA"});
expect([...ms932Encoder.encode("黻黼黽")].join(",")).toBe("234,132,234,133,234,134"); // U+9EFB
expect(() => {ms932Encoder.encode("\u9EFE")}).toThrowError({name:"TypeError",message:"EncodingError U+9EFE"});
expect(() => {ms932Encoder.encode("\u9EFF")}).toThrowError({name:"TypeError",message:"EncodingError U+9EFF"});
expect(() => {ms932Encoder.encode("\u9F00")}).toThrowError({name:"TypeError",message:"EncodingError U+9F00"});
expect(() => {ms932Encoder.encode("\u9F01")}).toThrowError({name:"TypeError",message:"EncodingError U+9F01"});
expect(() => {ms932Encoder.encode("\u9F02")}).toThrowError({name:"TypeError",message:"EncodingError U+9F02"});
expect(() => {ms932Encoder.encode("\u9F03")}).toThrowError({name:"TypeError",message:"EncodingError U+9F03"});
expect(() => {ms932Encoder.encode("\u9F04")}).toThrowError({name:"TypeError",message:"EncodingError U+9F04"});
expect(() => {ms932Encoder.encode("\u9F05")}).toThrowError({name:"TypeError",message:"EncodingError U+9F05"});
expect(() => {ms932Encoder.encode("\u9F06")}).toThrowError({name:"TypeError",message:"EncodingError U+9F06"});
expect([...ms932Encoder.encode("鼇鼈")].join(",")).toBe("234,135,234,136"); // U+9F07
expect(() => {ms932Encoder.encode("\u9F09")}).toThrowError({name:"TypeError",message:"EncodingError U+9F09"});
expect(() => {ms932Encoder.encode("\u9F0A")}).toThrowError({name:"TypeError",message:"EncodingError U+9F0A"});
expect(() => {ms932Encoder.encode("\u9F0B")}).toThrowError({name:"TypeError",message:"EncodingError U+9F0B"});
expect(() => {ms932Encoder.encode("\u9F0C")}).toThrowError({name:"TypeError",message:"EncodingError U+9F0C"});
expect(() => {ms932Encoder.encode("\u9F0D")}).toThrowError({name:"TypeError",message:"EncodingError U+9F0D"});
expect([...ms932Encoder.encode("鼎")].join(",")).toBe("147,67"); // U+9F0E
expect(() => {ms932Encoder.encode("\u9F0F")}).toThrowError({name:"TypeError",message:"EncodingError U+9F0F"});
expect(() => {ms932Encoder.encode("\u9F10")}).toThrowError({name:"TypeError",message:"EncodingError U+9F10"});
expect(() => {ms932Encoder.encode("\u9F11")}).toThrowError({name:"TypeError",message:"EncodingError U+9F11"});
expect(() => {ms932Encoder.encode("\u9F12")}).toThrowError({name:"TypeError",message:"EncodingError U+9F12"});
expect([...ms932Encoder.encode("鼓")].join(",")).toBe("140,219"); // U+9F13
expect(() => {ms932Encoder.encode("\u9F14")}).toThrowError({name:"TypeError",message:"EncodingError U+9F14"});
expect([...ms932Encoder.encode("鼕")].join(",")).toBe("234,138"); // U+9F15
expect(() => {ms932Encoder.encode("\u9F16")}).toThrowError({name:"TypeError",message:"EncodingError U+9F16"});
expect(() => {ms932Encoder.encode("\u9F17")}).toThrowError({name:"TypeError",message:"EncodingError U+9F17"});
expect(() => {ms932Encoder.encode("\u9F18")}).toThrowError({name:"TypeError",message:"EncodingError U+9F18"});
expect(() => {ms932Encoder.encode("\u9F19")}).toThrowError({name:"TypeError",message:"EncodingError U+9F19"});
expect(() => {ms932Encoder.encode("\u9F1A")}).toThrowError({name:"TypeError",message:"EncodingError U+9F1A"});
expect(() => {ms932Encoder.encode("\u9F1B")}).toThrowError({name:"TypeError",message:"EncodingError U+9F1B"});
expect(() => {ms932Encoder.encode("\u9F1C")}).toThrowError({name:"TypeError",message:"EncodingError U+9F1C"});
expect(() => {ms932Encoder.encode("\u9F1D")}).toThrowError({name:"TypeError",message:"EncodingError U+9F1D"});
expect(() => {ms932Encoder.encode("\u9F1E")}).toThrowError({name:"TypeError",message:"EncodingError U+9F1E"});
expect(() => {ms932Encoder.encode("\u9F1F")}).toThrowError({name:"TypeError",message:"EncodingError U+9F1F"});
expect([...ms932Encoder.encode("鼠鼡")].join(",")).toBe("145,108,234,139"); // U+9F20
expect(() => {ms932Encoder.encode("\u9F22")}).toThrowError({name:"TypeError",message:"EncodingError U+9F22"});
expect(() => {ms932Encoder.encode("\u9F23")}).toThrowError({name:"TypeError",message:"EncodingError U+9F23"});
expect(() => {ms932Encoder.encode("\u9F24")}).toThrowError({name:"TypeError",message:"EncodingError U+9F24"});
expect(() => {ms932Encoder.encode("\u9F25")}).toThrowError({name:"TypeError",message:"EncodingError U+9F25"});
expect(() => {ms932Encoder.encode("\u9F26")}).toThrowError({name:"TypeError",message:"EncodingError U+9F26"});
expect(() => {ms932Encoder.encode("\u9F27")}).toThrowError({name:"TypeError",message:"EncodingError U+9F27"});
expect(() => {ms932Encoder.encode("\u9F28")}).toThrowError({name:"TypeError",message:"EncodingError U+9F28"});
expect(() => {ms932Encoder.encode("\u9F29")}).toThrowError({name:"TypeError",message:"EncodingError U+9F29"});
expect(() => {ms932Encoder.encode("\u9F2A")}).toThrowError({name:"TypeError",message:"EncodingError U+9F2A"});
expect(() => {ms932Encoder.encode("\u9F2B")}).toThrowError({name:"TypeError",message:"EncodingError U+9F2B"});
expect([...ms932Encoder.encode("鼬")].join(",")).toBe("234,140"); // U+9F2C
expect(() => {ms932Encoder.encode("\u9F2D")}).toThrowError({name:"TypeError",message:"EncodingError U+9F2D"});
expect(() => {ms932Encoder.encode("\u9F2E")}).toThrowError({name:"TypeError",message:"EncodingError U+9F2E"});
expect(() => {ms932Encoder.encode("\u9F2F")}).toThrowError({name:"TypeError",message:"EncodingError U+9F2F"});
expect(() => {ms932Encoder.encode("\u9F30")}).toThrowError({name:"TypeError",message:"EncodingError U+9F30"});
expect(() => {ms932Encoder.encode("\u9F31")}).toThrowError({name:"TypeError",message:"EncodingError U+9F31"});
expect(() => {ms932Encoder.encode("\u9F32")}).toThrowError({name:"TypeError",message:"EncodingError U+9F32"});
expect(() => {ms932Encoder.encode("\u9F33")}).toThrowError({name:"TypeError",message:"EncodingError U+9F33"});
expect(() => {ms932Encoder.encode("\u9F34")}).toThrowError({name:"TypeError",message:"EncodingError U+9F34"});
expect(() => {ms932Encoder.encode("\u9F35")}).toThrowError({name:"TypeError",message:"EncodingError U+9F35"});
expect(() => {ms932Encoder.encode("\u9F36")}).toThrowError({name:"TypeError",message:"EncodingError U+9F36"});
expect(() => {ms932Encoder.encode("\u9F37")}).toThrowError({name:"TypeError",message:"EncodingError U+9F37"});
expect(() => {ms932Encoder.encode("\u9F38")}).toThrowError({name:"TypeError",message:"EncodingError U+9F38"});
expect(() => {ms932Encoder.encode("\u9F39")}).toThrowError({name:"TypeError",message:"EncodingError U+9F39"});
expect(() => {ms932Encoder.encode("\u9F3A")}).toThrowError({name:"TypeError",message:"EncodingError U+9F3A"});
expect([...ms932Encoder.encode("鼻")].join(",")).toBe("149,64"); // U+9F3B
expect(() => {ms932Encoder.encode("\u9F3C")}).toThrowError({name:"TypeError",message:"EncodingError U+9F3C"});
expect(() => {ms932Encoder.encode("\u9F3D")}).toThrowError({name:"TypeError",message:"EncodingError U+9F3D"});
expect([...ms932Encoder.encode("鼾")].join(",")).toBe("234,141"); // U+9F3E
expect(() => {ms932Encoder.encode("\u9F3F")}).toThrowError({name:"TypeError",message:"EncodingError U+9F3F"});
expect(() => {ms932Encoder.encode("\u9F40")}).toThrowError({name:"TypeError",message:"EncodingError U+9F40"});
expect(() => {ms932Encoder.encode("\u9F41")}).toThrowError({name:"TypeError",message:"EncodingError U+9F41"});
expect(() => {ms932Encoder.encode("\u9F42")}).toThrowError({name:"TypeError",message:"EncodingError U+9F42"});
expect(() => {ms932Encoder.encode("\u9F43")}).toThrowError({name:"TypeError",message:"EncodingError U+9F43"});
expect(() => {ms932Encoder.encode("\u9F44")}).toThrowError({name:"TypeError",message:"EncodingError U+9F44"});
expect(() => {ms932Encoder.encode("\u9F45")}).toThrowError({name:"TypeError",message:"EncodingError U+9F45"});
expect(() => {ms932Encoder.encode("\u9F46")}).toThrowError({name:"TypeError",message:"EncodingError U+9F46"});
expect(() => {ms932Encoder.encode("\u9F47")}).toThrowError({name:"TypeError",message:"EncodingError U+9F47"});
expect(() => {ms932Encoder.encode("\u9F48")}).toThrowError({name:"TypeError",message:"EncodingError U+9F48"});
expect(() => {ms932Encoder.encode("\u9F49")}).toThrowError({name:"TypeError",message:"EncodingError U+9F49"});
expect([...ms932Encoder.encode("齊齋")].join(",")).toBe("234,142,226,86"); // U+9F4A
expect(() => {ms932Encoder.encode("\u9F4C")}).toThrowError({name:"TypeError",message:"EncodingError U+9F4C"});
expect(() => {ms932Encoder.encode("\u9F4D")}).toThrowError({name:"TypeError",message:"EncodingError U+9F4D"});
expect([...ms932Encoder.encode("齎齏")].join(",")).toBe("230,216,232,235"); // U+9F4E
expect(() => {ms932Encoder.encode("\u9F50")}).toThrowError({name:"TypeError",message:"EncodingError U+9F50"});
expect(() => {ms932Encoder.encode("\u9F51")}).toThrowError({name:"TypeError",message:"EncodingError U+9F51"});
expect([...ms932Encoder.encode("齒")].join(",")).toBe("234,143"); // U+9F52
expect(() => {ms932Encoder.encode("\u9F53")}).toThrowError({name:"TypeError",message:"EncodingError U+9F53"});
expect([...ms932Encoder.encode("齔")].join(",")).toBe("234,144"); // U+9F54
expect(() => {ms932Encoder.encode("\u9F55")}).toThrowError({name:"TypeError",message:"EncodingError U+9F55"});
expect(() => {ms932Encoder.encode("\u9F56")}).toThrowError({name:"TypeError",message:"EncodingError U+9F56"});
expect(() => {ms932Encoder.encode("\u9F57")}).toThrowError({name:"TypeError",message:"EncodingError U+9F57"});
expect(() => {ms932Encoder.encode("\u9F58")}).toThrowError({name:"TypeError",message:"EncodingError U+9F58"});
expect(() => {ms932Encoder.encode("\u9F59")}).toThrowError({name:"TypeError",message:"EncodingError U+9F59"});
expect(() => {ms932Encoder.encode("\u9F5A")}).toThrowError({name:"TypeError",message:"EncodingError U+9F5A"});
expect(() => {ms932Encoder.encode("\u9F5B")}).toThrowError({name:"TypeError",message:"EncodingError U+9F5B"});
expect(() => {ms932Encoder.encode("\u9F5C")}).toThrowError({name:"TypeError",message:"EncodingError U+9F5C"});
expect(() => {ms932Encoder.encode("\u9F5D")}).toThrowError({name:"TypeError",message:"EncodingError U+9F5D"});
expect(() => {ms932Encoder.encode("\u9F5E")}).toThrowError({name:"TypeError",message:"EncodingError U+9F5E"});
expect([...ms932Encoder.encode("齟齠齡齢齣")].join(",")).toBe("234,146,234,147,234,148,151,238,234,145"); // U+9F5F
expect(() => {ms932Encoder.encode("\u9F64")}).toThrowError({name:"TypeError",message:"EncodingError U+9F64"});
expect(() => {ms932Encoder.encode("\u9F65")}).toThrowError({name:"TypeError",message:"EncodingError U+9F65"});
expect([...ms932Encoder.encode("齦齧")].join(",")).toBe("234,149,234,150"); // U+9F66
expect(() => {ms932Encoder.encode("\u9F68")}).toThrowError({name:"TypeError",message:"EncodingError U+9F68"});
expect(() => {ms932Encoder.encode("\u9F69")}).toThrowError({name:"TypeError",message:"EncodingError U+9F69"});
expect([...ms932Encoder.encode("齪")].join(",")).toBe("234,152"); // U+9F6A
expect(() => {ms932Encoder.encode("\u9F6B")}).toThrowError({name:"TypeError",message:"EncodingError U+9F6B"});
expect([...ms932Encoder.encode("齬")].join(",")).toBe("234,151"); // U+9F6C
expect(() => {ms932Encoder.encode("\u9F6D")}).toThrowError({name:"TypeError",message:"EncodingError U+9F6D"});
expect(() => {ms932Encoder.encode("\u9F6E")}).toThrowError({name:"TypeError",message:"EncodingError U+9F6E"});
expect(() => {ms932Encoder.encode("\u9F6F")}).toThrowError({name:"TypeError",message:"EncodingError U+9F6F"});
expect(() => {ms932Encoder.encode("\u9F70")}).toThrowError({name:"TypeError",message:"EncodingError U+9F70"});
expect(() => {ms932Encoder.encode("\u9F71")}).toThrowError({name:"TypeError",message:"EncodingError U+9F71"});
expect([...ms932Encoder.encode("齲")].join(",")).toBe("234,154"); // U+9F72
expect(() => {ms932Encoder.encode("\u9F73")}).toThrowError({name:"TypeError",message:"EncodingError U+9F73"});
expect(() => {ms932Encoder.encode("\u9F74")}).toThrowError({name:"TypeError",message:"EncodingError U+9F74"});
expect(() => {ms932Encoder.encode("\u9F75")}).toThrowError({name:"TypeError",message:"EncodingError U+9F75"});
expect([...ms932Encoder.encode("齶齷")].join(",")).toBe("234,155,234,153"); // U+9F76
expect(() => {ms932Encoder.encode("\u9F78")}).toThrowError({name:"TypeError",message:"EncodingError U+9F78"});
expect(() => {ms932Encoder.encode("\u9F79")}).toThrowError({name:"TypeError",message:"EncodingError U+9F79"});
expect(() => {ms932Encoder.encode("\u9F7A")}).toThrowError({name:"TypeError",message:"EncodingError U+9F7A"});
expect(() => {ms932Encoder.encode("\u9F7B")}).toThrowError({name:"TypeError",message:"EncodingError U+9F7B"});
expect(() => {ms932Encoder.encode("\u9F7C")}).toThrowError({name:"TypeError",message:"EncodingError U+9F7C"});
expect(() => {ms932Encoder.encode("\u9F7D")}).toThrowError({name:"TypeError",message:"EncodingError U+9F7D"});
expect(() => {ms932Encoder.encode("\u9F7E")}).toThrowError({name:"TypeError",message:"EncodingError U+9F7E"});
expect(() => {ms932Encoder.encode("\u9F7F")}).toThrowError({name:"TypeError",message:"EncodingError U+9F7F"});
expect(() => {ms932Encoder.encode("\u9F80")}).toThrowError({name:"TypeError",message:"EncodingError U+9F80"});
expect(() => {ms932Encoder.encode("\u9F81")}).toThrowError({name:"TypeError",message:"EncodingError U+9F81"});
expect(() => {ms932Encoder.encode("\u9F82")}).toThrowError({name:"TypeError",message:"EncodingError U+9F82"});
expect(() => {ms932Encoder.encode("\u9F83")}).toThrowError({name:"TypeError",message:"EncodingError U+9F83"});
expect(() => {ms932Encoder.encode("\u9F84")}).toThrowError({name:"TypeError",message:"EncodingError U+9F84"});
expect(() => {ms932Encoder.encode("\u9F85")}).toThrowError({name:"TypeError",message:"EncodingError U+9F85"});
expect(() => {ms932Encoder.encode("\u9F86")}).toThrowError({name:"TypeError",message:"EncodingError U+9F86"});
expect(() => {ms932Encoder.encode("\u9F87")}).toThrowError({name:"TypeError",message:"EncodingError U+9F87"});
expect(() => {ms932Encoder.encode("\u9F88")}).toThrowError({name:"TypeError",message:"EncodingError U+9F88"});
expect(() => {ms932Encoder.encode("\u9F89")}).toThrowError({name:"TypeError",message:"EncodingError U+9F89"});
expect(() => {ms932Encoder.encode("\u9F8A")}).toThrowError({name:"TypeError",message:"EncodingError U+9F8A"});
expect(() => {ms932Encoder.encode("\u9F8B")}).toThrowError({name:"TypeError",message:"EncodingError U+9F8B"});
expect(() => {ms932Encoder.encode("\u9F8C")}).toThrowError({name:"TypeError",message:"EncodingError U+9F8C"});
expect([...ms932Encoder.encode("龍")].join(",")).toBe("151,180"); // U+9F8D
expect(() => {ms932Encoder.encode("\u9F8E")}).toThrowError({name:"TypeError",message:"EncodingError U+9F8E"});
expect(() => {ms932Encoder.encode("\u9F8F")}).toThrowError({name:"TypeError",message:"EncodingError U+9F8F"});
expect(() => {ms932Encoder.encode("\u9F90")}).toThrowError({name:"TypeError",message:"EncodingError U+9F90"});
expect(() => {ms932Encoder.encode("\u9F91")}).toThrowError({name:"TypeError",message:"EncodingError U+9F91"});
expect(() => {ms932Encoder.encode("\u9F92")}).toThrowError({name:"TypeError",message:"EncodingError U+9F92"});
expect(() => {ms932Encoder.encode("\u9F93")}).toThrowError({name:"TypeError",message:"EncodingError U+9F93"});
expect(() => {ms932Encoder.encode("\u9F94")}).toThrowError({name:"TypeError",message:"EncodingError U+9F94"});
expect([...ms932Encoder.encode("龕")].join(",")).toBe("234,156"); // U+9F95
expect(() => {ms932Encoder.encode("\u9F96")}).toThrowError({name:"TypeError",message:"EncodingError U+9F96"});
expect(() => {ms932Encoder.encode("\u9F97")}).toThrowError({name:"TypeError",message:"EncodingError U+9F97"});
expect(() => {ms932Encoder.encode("\u9F98")}).toThrowError({name:"TypeError",message:"EncodingError U+9F98"});
expect(() => {ms932Encoder.encode("\u9F99")}).toThrowError({name:"TypeError",message:"EncodingError U+9F99"});
expect(() => {ms932Encoder.encode("\u9F9A")}).toThrowError({name:"TypeError",message:"EncodingError U+9F9A"});
expect(() => {ms932Encoder.encode("\u9F9B")}).toThrowError({name:"TypeError",message:"EncodingError U+9F9B"});
expect([...ms932Encoder.encode("龜龝")].join(",")).toBe("234,157,226,115"); // U+9F9C
expect(() => {ms932Encoder.encode("\u9F9E")}).toThrowError({name:"TypeError",message:"EncodingError U+9F9E"});
expect(() => {ms932Encoder.encode("\u9F9F")}).toThrowError({name:"TypeError",message:"EncodingError U+9F9F"});
expect([...ms932Encoder.encode("龠")].join(",")).toBe("234,158"); // U+9FA0
expect(() => {ms932Encoder.encode("\u9FA1")}).toThrowError({name:"TypeError",message:"EncodingError U+9FA1"});
expect(() => {ms932Encoder.encode("\u9FA2")}).toThrowError({name:"TypeError",message:"EncodingError U+9FA2"});
expect(() => {ms932Encoder.encode("\u9FA3")}).toThrowError({name:"TypeError",message:"EncodingError U+9FA3"});
expect(() => {ms932Encoder.encode("\u9FA4")}).toThrowError({name:"TypeError",message:"EncodingError U+9FA4"});
expect(() => {ms932Encoder.encode("\u9FA5")}).toThrowError({name:"TypeError",message:"EncodingError U+9FA5"});
expect(() => {ms932Encoder.encode("\u9FA6")}).toThrowError({name:"TypeError",message:"EncodingError U+9FA6"});
expect(() => {ms932Encoder.encode("\u9FA7")}).toThrowError({name:"TypeError",message:"EncodingError U+9FA7"});
expect(() => {ms932Encoder.encode("\u9FA8")}).toThrowError({name:"TypeError",message:"EncodingError U+9FA8"});
expect(() => {ms932Encoder.encode("\u9FA9")}).toThrowError({name:"TypeError",message:"EncodingError U+9FA9"});
expect(() => {ms932Encoder.encode("\u9FAA")}).toThrowError({name:"TypeError",message:"EncodingError U+9FAA"});
expect(() => {ms932Encoder.encode("\u9FAB")}).toThrowError({name:"TypeError",message:"EncodingError U+9FAB"});
expect(() => {ms932Encoder.encode("\u9FAC")}).toThrowError({name:"TypeError",message:"EncodingError U+9FAC"});
expect(() => {ms932Encoder.encode("\u9FAD")}).toThrowError({name:"TypeError",message:"EncodingError U+9FAD"});
expect(() => {ms932Encoder.encode("\u9FAE")}).toThrowError({name:"TypeError",message:"EncodingError U+9FAE"});
expect(() => {ms932Encoder.encode("\u9FAF")}).toThrowError({name:"TypeError",message:"EncodingError U+9FAF"});
expect(() => {ms932Encoder.encode("\u9FB0")}).toThrowError({name:"TypeError",message:"EncodingError U+9FB0"});
expect(() => {ms932Encoder.encode("\u9FB1")}).toThrowError({name:"TypeError",message:"EncodingError U+9FB1"});
expect(() => {ms932Encoder.encode("\u9FB2")}).toThrowError({name:"TypeError",message:"EncodingError U+9FB2"});
expect(() => {ms932Encoder.encode("\u9FB3")}).toThrowError({name:"TypeError",message:"EncodingError U+9FB3"});
expect(() => {ms932Encoder.encode("\u9FB4")}).toThrowError({name:"TypeError",message:"EncodingError U+9FB4"});
expect(() => {ms932Encoder.encode("\u9FB5")}).toThrowError({name:"TypeError",message:"EncodingError U+9FB5"});
expect(() => {ms932Encoder.encode("\u9FB6")}).toThrowError({name:"TypeError",message:"EncodingError U+9FB6"});
expect(() => {ms932Encoder.encode("\u9FB7")}).toThrowError({name:"TypeError",message:"EncodingError U+9FB7"});
expect(() => {ms932Encoder.encode("\u9FB8")}).toThrowError({name:"TypeError",message:"EncodingError U+9FB8"});
expect(() => {ms932Encoder.encode("\u9FB9")}).toThrowError({name:"TypeError",message:"EncodingError U+9FB9"});
expect(() => {ms932Encoder.encode("\u9FBA")}).toThrowError({name:"TypeError",message:"EncodingError U+9FBA"});
expect(() => {ms932Encoder.encode("\u9FBB")}).toThrowError({name:"TypeError",message:"EncodingError U+9FBB"});
expect(() => {ms932Encoder.encode("\u9FBC")}).toThrowError({name:"TypeError",message:"EncodingError U+9FBC"});
expect(() => {ms932Encoder.encode("\u9FBD")}).toThrowError({name:"TypeError",message:"EncodingError U+9FBD"});
expect(() => {ms932Encoder.encode("\u9FBE")}).toThrowError({name:"TypeError",message:"EncodingError U+9FBE"});
expect(() => {ms932Encoder.encode("\u9FBF")}).toThrowError({name:"TypeError",message:"EncodingError U+9FBF"});
expect(() => {ms932Encoder.encode("\u9FC0")}).toThrowError({name:"TypeError",message:"EncodingError U+9FC0"});
expect(() => {ms932Encoder.encode("\u9FC1")}).toThrowError({name:"TypeError",message:"EncodingError U+9FC1"});
expect(() => {ms932Encoder.encode("\u9FC2")}).toThrowError({name:"TypeError",message:"EncodingError U+9FC2"});
expect(() => {ms932Encoder.encode("\u9FC3")}).toThrowError({name:"TypeError",message:"EncodingError U+9FC3"});
expect(() => {ms932Encoder.encode("\u9FC4")}).toThrowError({name:"TypeError",message:"EncodingError U+9FC4"});
expect(() => {ms932Encoder.encode("\u9FC5")}).toThrowError({name:"TypeError",message:"EncodingError U+9FC5"});
expect(() => {ms932Encoder.encode("\u9FC6")}).toThrowError({name:"TypeError",message:"EncodingError U+9FC6"});
expect(() => {ms932Encoder.encode("\u9FC7")}).toThrowError({name:"TypeError",message:"EncodingError U+9FC7"});
expect(() => {ms932Encoder.encode("\u9FC8")}).toThrowError({name:"TypeError",message:"EncodingError U+9FC8"});
expect(() => {ms932Encoder.encode("\u9FC9")}).toThrowError({name:"TypeError",message:"EncodingError U+9FC9"});
expect(() => {ms932Encoder.encode("\u9FCA")}).toThrowError({name:"TypeError",message:"EncodingError U+9FCA"});
expect(() => {ms932Encoder.encode("\u9FCB")}).toThrowError({name:"TypeError",message:"EncodingError U+9FCB"});
expect(() => {ms932Encoder.encode("\u9FCC")}).toThrowError({name:"TypeError",message:"EncodingError U+9FCC"});
expect(() => {ms932Encoder.encode("\u9FCD")}).toThrowError({name:"TypeError",message:"EncodingError U+9FCD"});
expect(() => {ms932Encoder.encode("\u9FCE")}).toThrowError({name:"TypeError",message:"EncodingError U+9FCE"});
expect(() => {ms932Encoder.encode("\u9FCF")}).toThrowError({name:"TypeError",message:"EncodingError U+9FCF"});
expect(() => {ms932Encoder.encode("\u9FD0")}).toThrowError({name:"TypeError",message:"EncodingError U+9FD0"});
expect(() => {ms932Encoder.encode("\u9FD1")}).toThrowError({name:"TypeError",message:"EncodingError U+9FD1"});
expect(() => {ms932Encoder.encode("\u9FD2")}).toThrowError({name:"TypeError",message:"EncodingError U+9FD2"});
expect(() => {ms932Encoder.encode("\u9FD3")}).toThrowError({name:"TypeError",message:"EncodingError U+9FD3"});
expect(() => {ms932Encoder.encode("\u9FD4")}).toThrowError({name:"TypeError",message:"EncodingError U+9FD4"});
expect(() => {ms932Encoder.encode("\u9FD5")}).toThrowError({name:"TypeError",message:"EncodingError U+9FD5"});
expect(() => {ms932Encoder.encode("\u9FD6")}).toThrowError({name:"TypeError",message:"EncodingError U+9FD6"});
expect(() => {ms932Encoder.encode("\u9FD7")}).toThrowError({name:"TypeError",message:"EncodingError U+9FD7"});
expect(() => {ms932Encoder.encode("\u9FD8")}).toThrowError({name:"TypeError",message:"EncodingError U+9FD8"});
expect(() => {ms932Encoder.encode("\u9FD9")}).toThrowError({name:"TypeError",message:"EncodingError U+9FD9"});
expect(() => {ms932Encoder.encode("\u9FDA")}).toThrowError({name:"TypeError",message:"EncodingError U+9FDA"});
expect(() => {ms932Encoder.encode("\u9FDB")}).toThrowError({name:"TypeError",message:"EncodingError U+9FDB"});
expect(() => {ms932Encoder.encode("\u9FDC")}).toThrowError({name:"TypeError",message:"EncodingError U+9FDC"});
expect(() => {ms932Encoder.encode("\u9FDD")}).toThrowError({name:"TypeError",message:"EncodingError U+9FDD"});
expect(() => {ms932Encoder.encode("\u9FDE")}).toThrowError({name:"TypeError",message:"EncodingError U+9FDE"});
expect(() => {ms932Encoder.encode("\u9FDF")}).toThrowError({name:"TypeError",message:"EncodingError U+9FDF"});
expect(() => {ms932Encoder.encode("\u9FE0")}).toThrowError({name:"TypeError",message:"EncodingError U+9FE0"});
expect(() => {ms932Encoder.encode("\u9FE1")}).toThrowError({name:"TypeError",message:"EncodingError U+9FE1"});
expect(() => {ms932Encoder.encode("\u9FE2")}).toThrowError({name:"TypeError",message:"EncodingError U+9FE2"});
expect(() => {ms932Encoder.encode("\u9FE3")}).toThrowError({name:"TypeError",message:"EncodingError U+9FE3"});
expect(() => {ms932Encoder.encode("\u9FE4")}).toThrowError({name:"TypeError",message:"EncodingError U+9FE4"});
expect(() => {ms932Encoder.encode("\u9FE5")}).toThrowError({name:"TypeError",message:"EncodingError U+9FE5"});
expect(() => {ms932Encoder.encode("\u9FE6")}).toThrowError({name:"TypeError",message:"EncodingError U+9FE6"});
expect(() => {ms932Encoder.encode("\u9FE7")}).toThrowError({name:"TypeError",message:"EncodingError U+9FE7"});
expect(() => {ms932Encoder.encode("\u9FE8")}).toThrowError({name:"TypeError",message:"EncodingError U+9FE8"});
expect(() => {ms932Encoder.encode("\u9FE9")}).toThrowError({name:"TypeError",message:"EncodingError U+9FE9"});
expect(() => {ms932Encoder.encode("\u9FEA")}).toThrowError({name:"TypeError",message:"EncodingError U+9FEA"});
expect(() => {ms932Encoder.encode("\u9FEB")}).toThrowError({name:"TypeError",message:"EncodingError U+9FEB"});
expect(() => {ms932Encoder.encode("\u9FEC")}).toThrowError({name:"TypeError",message:"EncodingError U+9FEC"});
expect(() => {ms932Encoder.encode("\u9FED")}).toThrowError({name:"TypeError",message:"EncodingError U+9FED"});
expect(() => {ms932Encoder.encode("\u9FEE")}).toThrowError({name:"TypeError",message:"EncodingError U+9FEE"});
expect(() => {ms932Encoder.encode("\u9FEF")}).toThrowError({name:"TypeError",message:"EncodingError U+9FEF"});
expect(() => {ms932Encoder.encode("\u9FF0")}).toThrowError({name:"TypeError",message:"EncodingError U+9FF0"});
expect(() => {ms932Encoder.encode("\u9FF1")}).toThrowError({name:"TypeError",message:"EncodingError U+9FF1"});
expect(() => {ms932Encoder.encode("\u9FF2")}).toThrowError({name:"TypeError",message:"EncodingError U+9FF2"});
expect(() => {ms932Encoder.encode("\u9FF3")}).toThrowError({name:"TypeError",message:"EncodingError U+9FF3"});
expect(() => {ms932Encoder.encode("\u9FF4")}).toThrowError({name:"TypeError",message:"EncodingError U+9FF4"});
expect(() => {ms932Encoder.encode("\u9FF5")}).toThrowError({name:"TypeError",message:"EncodingError U+9FF5"});
expect(() => {ms932Encoder.encode("\u9FF6")}).toThrowError({name:"TypeError",message:"EncodingError U+9FF6"});
expect(() => {ms932Encoder.encode("\u9FF7")}).toThrowError({name:"TypeError",message:"EncodingError U+9FF7"});
expect(() => {ms932Encoder.encode("\u9FF8")}).toThrowError({name:"TypeError",message:"EncodingError U+9FF8"});
expect(() => {ms932Encoder.encode("\u9FF9")}).toThrowError({name:"TypeError",message:"EncodingError U+9FF9"});
expect(() => {ms932Encoder.encode("\u9FFA")}).toThrowError({name:"TypeError",message:"EncodingError U+9FFA"});
expect(() => {ms932Encoder.encode("\u9FFB")}).toThrowError({name:"TypeError",message:"EncodingError U+9FFB"});
expect(() => {ms932Encoder.encode("\u9FFC")}).toThrowError({name:"TypeError",message:"EncodingError U+9FFC"});
expect(() => {ms932Encoder.encode("\u9FFD")}).toThrowError({name:"TypeError",message:"EncodingError U+9FFD"});
expect(() => {ms932Encoder.encode("\u9FFE")}).toThrowError({name:"TypeError",message:"EncodingError U+9FFE"});
expect(() => {ms932Encoder.encode("\u9FFF")}).toThrowError({name:"TypeError",message:"EncodingError U+9FFF"});

  });

});
