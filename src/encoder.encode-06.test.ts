import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 6", () => {

  it("encode(string) - U+5000-U+5FFF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

expect(() => {ms932Encoder.encode("\u5000")}).toThrowError({name:"TypeError",message:"EncodingError U+5000"});
expect(() => {ms932Encoder.encode("\u5001")}).toThrowError({name:"TypeError",message:"EncodingError U+5001"});
expect(() => {ms932Encoder.encode("\u5002")}).toThrowError({name:"TypeError",message:"EncodingError U+5002"});
expect(() => {ms932Encoder.encode("\u5003")}).toThrowError({name:"TypeError",message:"EncodingError U+5003"});
expect(() => {ms932Encoder.encode("\u5004")}).toThrowError({name:"TypeError",message:"EncodingError U+5004"});
expect([...ms932Encoder.encode("倅倆")].join(",")).toBe("152,228,152,237"); // U+5005
expect(() => {ms932Encoder.encode("\u5007")}).toThrowError({name:"TypeError",message:"EncodingError U+5007"});
expect(() => {ms932Encoder.encode("\u5008")}).toThrowError({name:"TypeError",message:"EncodingError U+5008"});
expect([...ms932Encoder.encode("倉")].join(",")).toBe("145,113"); // U+5009
expect(() => {ms932Encoder.encode("\u500A")}).toThrowError({name:"TypeError",message:"EncodingError U+500A"});
expect([...ms932Encoder.encode("個")].join(",")).toBe("140,194"); // U+500B
expect(() => {ms932Encoder.encode("\u500C")}).toThrowError({name:"TypeError",message:"EncodingError U+500C"});
expect([...ms932Encoder.encode("倍")].join(",")).toBe("148,123"); // U+500D
expect(() => {ms932Encoder.encode("\u500E")}).toThrowError({name:"TypeError",message:"EncodingError U+500E"});
expect([...ms932Encoder.encode("倏")].join(",")).toBe("224,197"); // U+500F
expect(() => {ms932Encoder.encode("\u5010")}).toThrowError({name:"TypeError",message:"EncodingError U+5010"});
expect([...ms932Encoder.encode("們倒")].join(",")).toBe("152,236,147,124"); // U+5011
expect(() => {ms932Encoder.encode("\u5013")}).toThrowError({name:"TypeError",message:"EncodingError U+5013"});
expect([...ms932Encoder.encode("倔")].join(",")).toBe("152,225"); // U+5014
expect(() => {ms932Encoder.encode("\u5015")}).toThrowError({name:"TypeError",message:"EncodingError U+5015"});
expect([...ms932Encoder.encode("倖")].join(",")).toBe("140,244"); // U+5016
expect(() => {ms932Encoder.encode("\u5017")}).toThrowError({name:"TypeError",message:"EncodingError U+5017"});
expect(() => {ms932Encoder.encode("\u5018")}).toThrowError({name:"TypeError",message:"EncodingError U+5018"});
expect([...ms932Encoder.encode("候倚")].join(",")).toBe("140,243,152,223"); // U+5019
expect(() => {ms932Encoder.encode("\u501B")}).toThrowError({name:"TypeError",message:"EncodingError U+501B"});
expect(() => {ms932Encoder.encode("\u501C")}).toThrowError({name:"TypeError",message:"EncodingError U+501C"});
expect(() => {ms932Encoder.encode("\u501D")}).toThrowError({name:"TypeError",message:"EncodingError U+501D"});
expect([...ms932Encoder.encode("倞借")].join(",")).toBe("250,119,142,216"); // U+501E
expect(() => {ms932Encoder.encode("\u5020")}).toThrowError({name:"TypeError",message:"EncodingError U+5020"});
expect([...ms932Encoder.encode("倡倢倣値倥倦")].join(",")).toBe("152,231,250,117,149,237,146,108,152,227,140,145"); // U+5021
expect(() => {ms932Encoder.encode("\u5027")}).toThrowError({name:"TypeError",message:"EncodingError U+5027"});
expect([...ms932Encoder.encode("倨倩倪倫倬倭")].join(",")).toBe("152,224,152,232,152,226,151,207,152,233,152,96"); // U+5028
expect(() => {ms932Encoder.encode("\u502E")}).toThrowError({name:"TypeError",message:"EncodingError U+502E"});
expect(() => {ms932Encoder.encode("\u502F")}).toThrowError({name:"TypeError",message:"EncodingError U+502F"});
expect(() => {ms932Encoder.encode("\u5030")}).toThrowError({name:"TypeError",message:"EncodingError U+5030"});
expect(() => {ms932Encoder.encode("\u5031")}).toThrowError({name:"TypeError",message:"EncodingError U+5031"});
expect(() => {ms932Encoder.encode("\u5032")}).toThrowError({name:"TypeError",message:"EncodingError U+5032"});
expect(() => {ms932Encoder.encode("\u5033")}).toThrowError({name:"TypeError",message:"EncodingError U+5033"});
expect(() => {ms932Encoder.encode("\u5034")}).toThrowError({name:"TypeError",message:"EncodingError U+5034"});
expect(() => {ms932Encoder.encode("\u5035")}).toThrowError({name:"TypeError",message:"EncodingError U+5035"});
expect([...ms932Encoder.encode("倶")].join(",")).toBe("139,228"); // U+5036
expect(() => {ms932Encoder.encode("\u5037")}).toThrowError({name:"TypeError",message:"EncodingError U+5037"});
expect(() => {ms932Encoder.encode("\u5038")}).toThrowError({name:"TypeError",message:"EncodingError U+5038"});
expect([...ms932Encoder.encode("倹")].join(",")).toBe("140,144"); // U+5039
expect(() => {ms932Encoder.encode("\u503A")}).toThrowError({name:"TypeError",message:"EncodingError U+503A"});
expect(() => {ms932Encoder.encode("\u503B")}).toThrowError({name:"TypeError",message:"EncodingError U+503B"});
expect(() => {ms932Encoder.encode("\u503C")}).toThrowError({name:"TypeError",message:"EncodingError U+503C"});
expect(() => {ms932Encoder.encode("\u503D")}).toThrowError({name:"TypeError",message:"EncodingError U+503D"});
expect(() => {ms932Encoder.encode("\u503E")}).toThrowError({name:"TypeError",message:"EncodingError U+503E"});
expect(() => {ms932Encoder.encode("\u503F")}).toThrowError({name:"TypeError",message:"EncodingError U+503F"});
expect([...ms932Encoder.encode("偀")].join(",")).toBe("250,116"); // U+5040
expect(() => {ms932Encoder.encode("\u5041")}).toThrowError({name:"TypeError",message:"EncodingError U+5041"});
expect([...ms932Encoder.encode("偂偃")].join(",")).toBe("250,122,152,238"); // U+5042
expect(() => {ms932Encoder.encode("\u5044")}).toThrowError({name:"TypeError",message:"EncodingError U+5044"});
expect(() => {ms932Encoder.encode("\u5045")}).toThrowError({name:"TypeError",message:"EncodingError U+5045"});
expect([...ms932Encoder.encode("偆假偈偉")].join(",")).toBe("250,120,152,239,152,243,136,204"); // U+5046
expect(() => {ms932Encoder.encode("\u504A")}).toThrowError({name:"TypeError",message:"EncodingError U+504A"});
expect(() => {ms932Encoder.encode("\u504B")}).toThrowError({name:"TypeError",message:"EncodingError U+504B"});
expect(() => {ms932Encoder.encode("\u504C")}).toThrowError({name:"TypeError",message:"EncodingError U+504C"});
expect(() => {ms932Encoder.encode("\u504D")}).toThrowError({name:"TypeError",message:"EncodingError U+504D"});
expect(() => {ms932Encoder.encode("\u504E")}).toThrowError({name:"TypeError",message:"EncodingError U+504E"});
expect([...ms932Encoder.encode("偏偐")].join(",")).toBe("149,206,152,242"); // U+504F
expect(() => {ms932Encoder.encode("\u5051")}).toThrowError({name:"TypeError",message:"EncodingError U+5051"});
expect(() => {ms932Encoder.encode("\u5052")}).toThrowError({name:"TypeError",message:"EncodingError U+5052"});
expect(() => {ms932Encoder.encode("\u5053")}).toThrowError({name:"TypeError",message:"EncodingError U+5053"});
expect(() => {ms932Encoder.encode("\u5054")}).toThrowError({name:"TypeError",message:"EncodingError U+5054"});
expect([...ms932Encoder.encode("偕偖")].join(",")).toBe("152,241,152,245"); // U+5055
expect(() => {ms932Encoder.encode("\u5057")}).toThrowError({name:"TypeError",message:"EncodingError U+5057"});
expect(() => {ms932Encoder.encode("\u5058")}).toThrowError({name:"TypeError",message:"EncodingError U+5058"});
expect(() => {ms932Encoder.encode("\u5059")}).toThrowError({name:"TypeError",message:"EncodingError U+5059"});
expect([...ms932Encoder.encode("做")].join(",")).toBe("152,244"); // U+505A
expect(() => {ms932Encoder.encode("\u505B")}).toThrowError({name:"TypeError",message:"EncodingError U+505B"});
expect([...ms932Encoder.encode("停")].join(",")).toBe("146,226"); // U+505C
expect(() => {ms932Encoder.encode("\u505D")}).toThrowError({name:"TypeError",message:"EncodingError U+505D"});
expect(() => {ms932Encoder.encode("\u505E")}).toThrowError({name:"TypeError",message:"EncodingError U+505E"});
expect(() => {ms932Encoder.encode("\u505F")}).toThrowError({name:"TypeError",message:"EncodingError U+505F"});
expect(() => {ms932Encoder.encode("\u5060")}).toThrowError({name:"TypeError",message:"EncodingError U+5060"});
expect(() => {ms932Encoder.encode("\u5061")}).toThrowError({name:"TypeError",message:"EncodingError U+5061"});
expect(() => {ms932Encoder.encode("\u5062")}).toThrowError({name:"TypeError",message:"EncodingError U+5062"});
expect(() => {ms932Encoder.encode("\u5063")}).toThrowError({name:"TypeError",message:"EncodingError U+5063"});
expect(() => {ms932Encoder.encode("\u5064")}).toThrowError({name:"TypeError",message:"EncodingError U+5064"});
expect([...ms932Encoder.encode("健")].join(",")).toBe("140,146"); // U+5065
expect(() => {ms932Encoder.encode("\u5066")}).toThrowError({name:"TypeError",message:"EncodingError U+5066"});
expect(() => {ms932Encoder.encode("\u5067")}).toThrowError({name:"TypeError",message:"EncodingError U+5067"});
expect(() => {ms932Encoder.encode("\u5068")}).toThrowError({name:"TypeError",message:"EncodingError U+5068"});
expect(() => {ms932Encoder.encode("\u5069")}).toThrowError({name:"TypeError",message:"EncodingError U+5069"});
expect(() => {ms932Encoder.encode("\u506A")}).toThrowError({name:"TypeError",message:"EncodingError U+506A"});
expect(() => {ms932Encoder.encode("\u506B")}).toThrowError({name:"TypeError",message:"EncodingError U+506B"});
expect([...ms932Encoder.encode("偬")].join(",")).toBe("152,246"); // U+506C
expect(() => {ms932Encoder.encode("\u506D")}).toThrowError({name:"TypeError",message:"EncodingError U+506D"});
expect(() => {ms932Encoder.encode("\u506E")}).toThrowError({name:"TypeError",message:"EncodingError U+506E"});
expect(() => {ms932Encoder.encode("\u506F")}).toThrowError({name:"TypeError",message:"EncodingError U+506F"});
expect([...ms932Encoder.encode("偰")].join(",")).toBe("250,121"); // U+5070
expect(() => {ms932Encoder.encode("\u5071")}).toThrowError({name:"TypeError",message:"EncodingError U+5071"});
expect([...ms932Encoder.encode("偲")].join(",")).toBe("142,195"); // U+5072
expect(() => {ms932Encoder.encode("\u5073")}).toThrowError({name:"TypeError",message:"EncodingError U+5073"});
expect([...ms932Encoder.encode("側偵偶")].join(",")).toBe("145,164,146,227,139,244"); // U+5074
expect(() => {ms932Encoder.encode("\u5077")}).toThrowError({name:"TypeError",message:"EncodingError U+5077"});
expect([...ms932Encoder.encode("偸")].join(",")).toBe("152,247"); // U+5078
expect(() => {ms932Encoder.encode("\u5079")}).toThrowError({name:"TypeError",message:"EncodingError U+5079"});
expect(() => {ms932Encoder.encode("\u507A")}).toThrowError({name:"TypeError",message:"EncodingError U+507A"});
expect(() => {ms932Encoder.encode("\u507B")}).toThrowError({name:"TypeError",message:"EncodingError U+507B"});
expect(() => {ms932Encoder.encode("\u507C")}).toThrowError({name:"TypeError",message:"EncodingError U+507C"});
expect([...ms932Encoder.encode("偽")].join(",")).toBe("139,85"); // U+507D
expect(() => {ms932Encoder.encode("\u507E")}).toThrowError({name:"TypeError",message:"EncodingError U+507E"});
expect(() => {ms932Encoder.encode("\u507F")}).toThrowError({name:"TypeError",message:"EncodingError U+507F"});
expect([...ms932Encoder.encode("傀")].join(",")).toBe("152,248"); // U+5080
expect(() => {ms932Encoder.encode("\u5081")}).toThrowError({name:"TypeError",message:"EncodingError U+5081"});
expect(() => {ms932Encoder.encode("\u5082")}).toThrowError({name:"TypeError",message:"EncodingError U+5082"});
expect(() => {ms932Encoder.encode("\u5083")}).toThrowError({name:"TypeError",message:"EncodingError U+5083"});
expect(() => {ms932Encoder.encode("\u5084")}).toThrowError({name:"TypeError",message:"EncodingError U+5084"});
expect([...ms932Encoder.encode("傅")].join(",")).toBe("152,250"); // U+5085
expect(() => {ms932Encoder.encode("\u5086")}).toThrowError({name:"TypeError",message:"EncodingError U+5086"});
expect(() => {ms932Encoder.encode("\u5087")}).toThrowError({name:"TypeError",message:"EncodingError U+5087"});
expect(() => {ms932Encoder.encode("\u5088")}).toThrowError({name:"TypeError",message:"EncodingError U+5088"});
expect(() => {ms932Encoder.encode("\u5089")}).toThrowError({name:"TypeError",message:"EncodingError U+5089"});
expect(() => {ms932Encoder.encode("\u508A")}).toThrowError({name:"TypeError",message:"EncodingError U+508A"});
expect(() => {ms932Encoder.encode("\u508B")}).toThrowError({name:"TypeError",message:"EncodingError U+508B"});
expect(() => {ms932Encoder.encode("\u508C")}).toThrowError({name:"TypeError",message:"EncodingError U+508C"});
expect([...ms932Encoder.encode("傍")].join(",")).toBe("150,84"); // U+508D
expect(() => {ms932Encoder.encode("\u508E")}).toThrowError({name:"TypeError",message:"EncodingError U+508E"});
expect(() => {ms932Encoder.encode("\u508F")}).toThrowError({name:"TypeError",message:"EncodingError U+508F"});
expect(() => {ms932Encoder.encode("\u5090")}).toThrowError({name:"TypeError",message:"EncodingError U+5090"});
expect([...ms932Encoder.encode("傑")].join(",")).toBe("140,134"); // U+5091
expect(() => {ms932Encoder.encode("\u5092")}).toThrowError({name:"TypeError",message:"EncodingError U+5092"});
expect(() => {ms932Encoder.encode("\u5093")}).toThrowError({name:"TypeError",message:"EncodingError U+5093"});
expect([...ms932Encoder.encode("傔")].join(",")).toBe("250,123"); // U+5094
expect(() => {ms932Encoder.encode("\u5095")}).toThrowError({name:"TypeError",message:"EncodingError U+5095"});
expect(() => {ms932Encoder.encode("\u5096")}).toThrowError({name:"TypeError",message:"EncodingError U+5096"});
expect(() => {ms932Encoder.encode("\u5097")}).toThrowError({name:"TypeError",message:"EncodingError U+5097"});
expect([...ms932Encoder.encode("傘備傚")].join(",")).toBe("142,80,148,245,152,249"); // U+5098
expect(() => {ms932Encoder.encode("\u509B")}).toThrowError({name:"TypeError",message:"EncodingError U+509B"});
expect(() => {ms932Encoder.encode("\u509C")}).toThrowError({name:"TypeError",message:"EncodingError U+509C"});
expect(() => {ms932Encoder.encode("\u509D")}).toThrowError({name:"TypeError",message:"EncodingError U+509D"});
expect(() => {ms932Encoder.encode("\u509E")}).toThrowError({name:"TypeError",message:"EncodingError U+509E"});
expect(() => {ms932Encoder.encode("\u509F")}).toThrowError({name:"TypeError",message:"EncodingError U+509F"});
expect(() => {ms932Encoder.encode("\u50A0")}).toThrowError({name:"TypeError",message:"EncodingError U+50A0"});
expect(() => {ms932Encoder.encode("\u50A1")}).toThrowError({name:"TypeError",message:"EncodingError U+50A1"});
expect(() => {ms932Encoder.encode("\u50A2")}).toThrowError({name:"TypeError",message:"EncodingError U+50A2"});
expect(() => {ms932Encoder.encode("\u50A3")}).toThrowError({name:"TypeError",message:"EncodingError U+50A3"});
expect(() => {ms932Encoder.encode("\u50A4")}).toThrowError({name:"TypeError",message:"EncodingError U+50A4"});
expect(() => {ms932Encoder.encode("\u50A5")}).toThrowError({name:"TypeError",message:"EncodingError U+50A5"});
expect(() => {ms932Encoder.encode("\u50A6")}).toThrowError({name:"TypeError",message:"EncodingError U+50A6"});
expect(() => {ms932Encoder.encode("\u50A7")}).toThrowError({name:"TypeError",message:"EncodingError U+50A7"});
expect(() => {ms932Encoder.encode("\u50A8")}).toThrowError({name:"TypeError",message:"EncodingError U+50A8"});
expect(() => {ms932Encoder.encode("\u50A9")}).toThrowError({name:"TypeError",message:"EncodingError U+50A9"});
expect(() => {ms932Encoder.encode("\u50AA")}).toThrowError({name:"TypeError",message:"EncodingError U+50AA"});
expect(() => {ms932Encoder.encode("\u50AB")}).toThrowError({name:"TypeError",message:"EncodingError U+50AB"});
expect([...ms932Encoder.encode("催傭")].join(",")).toBe("141,195,151,98"); // U+50AC
expect(() => {ms932Encoder.encode("\u50AE")}).toThrowError({name:"TypeError",message:"EncodingError U+50AE"});
expect(() => {ms932Encoder.encode("\u50AF")}).toThrowError({name:"TypeError",message:"EncodingError U+50AF"});
expect(() => {ms932Encoder.encode("\u50B0")}).toThrowError({name:"TypeError",message:"EncodingError U+50B0"});
expect(() => {ms932Encoder.encode("\u50B1")}).toThrowError({name:"TypeError",message:"EncodingError U+50B1"});
expect([...ms932Encoder.encode("傲傳傴債")].join(",")).toBe("152,252,153,66,152,251,141,194"); // U+50B2
expect(() => {ms932Encoder.encode("\u50B6")}).toThrowError({name:"TypeError",message:"EncodingError U+50B6"});
expect([...ms932Encoder.encode("傷")].join(",")).toBe("143,157"); // U+50B7
expect(() => {ms932Encoder.encode("\u50B8")}).toThrowError({name:"TypeError",message:"EncodingError U+50B8"});
expect(() => {ms932Encoder.encode("\u50B9")}).toThrowError({name:"TypeError",message:"EncodingError U+50B9"});
expect(() => {ms932Encoder.encode("\u50BA")}).toThrowError({name:"TypeError",message:"EncodingError U+50BA"});
expect(() => {ms932Encoder.encode("\u50BB")}).toThrowError({name:"TypeError",message:"EncodingError U+50BB"});
expect(() => {ms932Encoder.encode("\u50BC")}).toThrowError({name:"TypeError",message:"EncodingError U+50BC"});
expect(() => {ms932Encoder.encode("\u50BD")}).toThrowError({name:"TypeError",message:"EncodingError U+50BD"});
expect([...ms932Encoder.encode("傾")].join(",")).toBe("140,88"); // U+50BE
expect(() => {ms932Encoder.encode("\u50BF")}).toThrowError({name:"TypeError",message:"EncodingError U+50BF"});
expect(() => {ms932Encoder.encode("\u50C0")}).toThrowError({name:"TypeError",message:"EncodingError U+50C0"});
expect(() => {ms932Encoder.encode("\u50C1")}).toThrowError({name:"TypeError",message:"EncodingError U+50C1"});
expect([...ms932Encoder.encode("僂")].join(",")).toBe("153,67"); // U+50C2
expect(() => {ms932Encoder.encode("\u50C3")}).toThrowError({name:"TypeError",message:"EncodingError U+50C3"});
expect(() => {ms932Encoder.encode("\u50C4")}).toThrowError({name:"TypeError",message:"EncodingError U+50C4"});
expect([...ms932Encoder.encode("僅")].join(",")).toBe("139,205"); // U+50C5
expect(() => {ms932Encoder.encode("\u50C6")}).toThrowError({name:"TypeError",message:"EncodingError U+50C6"});
expect(() => {ms932Encoder.encode("\u50C7")}).toThrowError({name:"TypeError",message:"EncodingError U+50C7"});
expect(() => {ms932Encoder.encode("\u50C8")}).toThrowError({name:"TypeError",message:"EncodingError U+50C8"});
expect([...ms932Encoder.encode("僉僊")].join(",")).toBe("153,64,153,65"); // U+50C9
expect(() => {ms932Encoder.encode("\u50CB")}).toThrowError({name:"TypeError",message:"EncodingError U+50CB"});
expect(() => {ms932Encoder.encode("\u50CC")}).toThrowError({name:"TypeError",message:"EncodingError U+50CC"});
expect([...ms932Encoder.encode("働")].join(",")).toBe("147,173"); // U+50CD
expect(() => {ms932Encoder.encode("\u50CE")}).toThrowError({name:"TypeError",message:"EncodingError U+50CE"});
expect([...ms932Encoder.encode("像")].join(",")).toBe("145,156"); // U+50CF
expect(() => {ms932Encoder.encode("\u50D0")}).toThrowError({name:"TypeError",message:"EncodingError U+50D0"});
expect([...ms932Encoder.encode("僑")].join(",")).toBe("139,161"); // U+50D1
expect(() => {ms932Encoder.encode("\u50D2")}).toThrowError({name:"TypeError",message:"EncodingError U+50D2"});
expect(() => {ms932Encoder.encode("\u50D3")}).toThrowError({name:"TypeError",message:"EncodingError U+50D3"});
expect(() => {ms932Encoder.encode("\u50D4")}).toThrowError({name:"TypeError",message:"EncodingError U+50D4"});
expect([...ms932Encoder.encode("僕僖")].join(",")).toBe("150,108,153,68"); // U+50D5
expect(() => {ms932Encoder.encode("\u50D7")}).toThrowError({name:"TypeError",message:"EncodingError U+50D7"});
expect([...ms932Encoder.encode("僘")].join(",")).toBe("250,125"); // U+50D8
expect(() => {ms932Encoder.encode("\u50D9")}).toThrowError({name:"TypeError",message:"EncodingError U+50D9"});
expect([...ms932Encoder.encode("僚")].join(",")).toBe("151,187"); // U+50DA
expect(() => {ms932Encoder.encode("\u50DB")}).toThrowError({name:"TypeError",message:"EncodingError U+50DB"});
expect(() => {ms932Encoder.encode("\u50DC")}).toThrowError({name:"TypeError",message:"EncodingError U+50DC"});
expect(() => {ms932Encoder.encode("\u50DD")}).toThrowError({name:"TypeError",message:"EncodingError U+50DD"});
expect([...ms932Encoder.encode("僞")].join(",")).toBe("153,69"); // U+50DE
expect(() => {ms932Encoder.encode("\u50DF")}).toThrowError({name:"TypeError",message:"EncodingError U+50DF"});
expect(() => {ms932Encoder.encode("\u50E0")}).toThrowError({name:"TypeError",message:"EncodingError U+50E0"});
expect(() => {ms932Encoder.encode("\u50E1")}).toThrowError({name:"TypeError",message:"EncodingError U+50E1"});
expect(() => {ms932Encoder.encode("\u50E2")}).toThrowError({name:"TypeError",message:"EncodingError U+50E2"});
expect([...ms932Encoder.encode("僣")].join(",")).toBe("153,72"); // U+50E3
expect(() => {ms932Encoder.encode("\u50E4")}).toThrowError({name:"TypeError",message:"EncodingError U+50E4"});
expect([...ms932Encoder.encode("僥")].join(",")).toBe("153,70"); // U+50E5
expect(() => {ms932Encoder.encode("\u50E6")}).toThrowError({name:"TypeError",message:"EncodingError U+50E6"});
expect([...ms932Encoder.encode("僧")].join(",")).toBe("145,109"); // U+50E7
expect(() => {ms932Encoder.encode("\u50E8")}).toThrowError({name:"TypeError",message:"EncodingError U+50E8"});
expect(() => {ms932Encoder.encode("\u50E9")}).toThrowError({name:"TypeError",message:"EncodingError U+50E9"});
expect(() => {ms932Encoder.encode("\u50EA")}).toThrowError({name:"TypeError",message:"EncodingError U+50EA"});
expect(() => {ms932Encoder.encode("\u50EB")}).toThrowError({name:"TypeError",message:"EncodingError U+50EB"});
expect(() => {ms932Encoder.encode("\u50EC")}).toThrowError({name:"TypeError",message:"EncodingError U+50EC"});
expect([...ms932Encoder.encode("僭僮")].join(",")).toBe("153,71,153,73"); // U+50ED
expect(() => {ms932Encoder.encode("\u50EF")}).toThrowError({name:"TypeError",message:"EncodingError U+50EF"});
expect(() => {ms932Encoder.encode("\u50F0")}).toThrowError({name:"TypeError",message:"EncodingError U+50F0"});
expect(() => {ms932Encoder.encode("\u50F1")}).toThrowError({name:"TypeError",message:"EncodingError U+50F1"});
expect(() => {ms932Encoder.encode("\u50F2")}).toThrowError({name:"TypeError",message:"EncodingError U+50F2"});
expect(() => {ms932Encoder.encode("\u50F3")}).toThrowError({name:"TypeError",message:"EncodingError U+50F3"});
expect([...ms932Encoder.encode("僴僵")].join(",")).toBe("250,124,153,75"); // U+50F4
expect(() => {ms932Encoder.encode("\u50F6")}).toThrowError({name:"TypeError",message:"EncodingError U+50F6"});
expect(() => {ms932Encoder.encode("\u50F7")}).toThrowError({name:"TypeError",message:"EncodingError U+50F7"});
expect(() => {ms932Encoder.encode("\u50F8")}).toThrowError({name:"TypeError",message:"EncodingError U+50F8"});
expect([...ms932Encoder.encode("價")].join(",")).toBe("153,74"); // U+50F9
expect(() => {ms932Encoder.encode("\u50FA")}).toThrowError({name:"TypeError",message:"EncodingError U+50FA"});
expect([...ms932Encoder.encode("僻")].join(",")).toBe("149,198"); // U+50FB
expect(() => {ms932Encoder.encode("\u50FC")}).toThrowError({name:"TypeError",message:"EncodingError U+50FC"});
expect(() => {ms932Encoder.encode("\u50FD")}).toThrowError({name:"TypeError",message:"EncodingError U+50FD"});
expect(() => {ms932Encoder.encode("\u50FE")}).toThrowError({name:"TypeError",message:"EncodingError U+50FE"});
expect(() => {ms932Encoder.encode("\u50FF")}).toThrowError({name:"TypeError",message:"EncodingError U+50FF"});
expect([...ms932Encoder.encode("儀儁儂")].join(",")).toBe("139,86,153,77,153,78"); // U+5100
expect(() => {ms932Encoder.encode("\u5103")}).toThrowError({name:"TypeError",message:"EncodingError U+5103"});
expect([...ms932Encoder.encode("億")].join(",")).toBe("137,173"); // U+5104
expect(() => {ms932Encoder.encode("\u5105")}).toThrowError({name:"TypeError",message:"EncodingError U+5105"});
expect(() => {ms932Encoder.encode("\u5106")}).toThrowError({name:"TypeError",message:"EncodingError U+5106"});
expect(() => {ms932Encoder.encode("\u5107")}).toThrowError({name:"TypeError",message:"EncodingError U+5107"});
expect(() => {ms932Encoder.encode("\u5108")}).toThrowError({name:"TypeError",message:"EncodingError U+5108"});
expect([...ms932Encoder.encode("儉")].join(",")).toBe("153,76"); // U+5109
expect(() => {ms932Encoder.encode("\u510A")}).toThrowError({name:"TypeError",message:"EncodingError U+510A"});
expect(() => {ms932Encoder.encode("\u510B")}).toThrowError({name:"TypeError",message:"EncodingError U+510B"});
expect(() => {ms932Encoder.encode("\u510C")}).toThrowError({name:"TypeError",message:"EncodingError U+510C"});
expect(() => {ms932Encoder.encode("\u510D")}).toThrowError({name:"TypeError",message:"EncodingError U+510D"});
expect(() => {ms932Encoder.encode("\u510E")}).toThrowError({name:"TypeError",message:"EncodingError U+510E"});
expect(() => {ms932Encoder.encode("\u510F")}).toThrowError({name:"TypeError",message:"EncodingError U+510F"});
expect(() => {ms932Encoder.encode("\u5110")}).toThrowError({name:"TypeError",message:"EncodingError U+5110"});
expect(() => {ms932Encoder.encode("\u5111")}).toThrowError({name:"TypeError",message:"EncodingError U+5111"});
expect([...ms932Encoder.encode("儒")].join(",")).toBe("142,242"); // U+5112
expect(() => {ms932Encoder.encode("\u5113")}).toThrowError({name:"TypeError",message:"EncodingError U+5113"});
expect([...ms932Encoder.encode("儔儕儖")].join(",")).toBe("153,81,153,80,153,79"); // U+5114
expect(() => {ms932Encoder.encode("\u5117")}).toThrowError({name:"TypeError",message:"EncodingError U+5117"});
expect([...ms932Encoder.encode("儘")].join(",")).toBe("152,212"); // U+5118
expect(() => {ms932Encoder.encode("\u5119")}).toThrowError({name:"TypeError",message:"EncodingError U+5119"});
expect([...ms932Encoder.encode("儚")].join(",")).toBe("153,82"); // U+511A
expect(() => {ms932Encoder.encode("\u511B")}).toThrowError({name:"TypeError",message:"EncodingError U+511B"});
expect(() => {ms932Encoder.encode("\u511C")}).toThrowError({name:"TypeError",message:"EncodingError U+511C"});
expect(() => {ms932Encoder.encode("\u511D")}).toThrowError({name:"TypeError",message:"EncodingError U+511D"});
expect(() => {ms932Encoder.encode("\u511E")}).toThrowError({name:"TypeError",message:"EncodingError U+511E"});
expect([...ms932Encoder.encode("償")].join(",")).toBe("143,158"); // U+511F
expect(() => {ms932Encoder.encode("\u5120")}).toThrowError({name:"TypeError",message:"EncodingError U+5120"});
expect([...ms932Encoder.encode("儡")].join(",")).toBe("153,83"); // U+5121
expect(() => {ms932Encoder.encode("\u5122")}).toThrowError({name:"TypeError",message:"EncodingError U+5122"});
expect(() => {ms932Encoder.encode("\u5123")}).toThrowError({name:"TypeError",message:"EncodingError U+5123"});
expect(() => {ms932Encoder.encode("\u5124")}).toThrowError({name:"TypeError",message:"EncodingError U+5124"});
expect(() => {ms932Encoder.encode("\u5125")}).toThrowError({name:"TypeError",message:"EncodingError U+5125"});
expect(() => {ms932Encoder.encode("\u5126")}).toThrowError({name:"TypeError",message:"EncodingError U+5126"});
expect(() => {ms932Encoder.encode("\u5127")}).toThrowError({name:"TypeError",message:"EncodingError U+5127"});
expect(() => {ms932Encoder.encode("\u5128")}).toThrowError({name:"TypeError",message:"EncodingError U+5128"});
expect(() => {ms932Encoder.encode("\u5129")}).toThrowError({name:"TypeError",message:"EncodingError U+5129"});
expect([...ms932Encoder.encode("優")].join(",")).toBe("151,68"); // U+512A
expect(() => {ms932Encoder.encode("\u512B")}).toThrowError({name:"TypeError",message:"EncodingError U+512B"});
expect(() => {ms932Encoder.encode("\u512C")}).toThrowError({name:"TypeError",message:"EncodingError U+512C"});
expect(() => {ms932Encoder.encode("\u512D")}).toThrowError({name:"TypeError",message:"EncodingError U+512D"});
expect(() => {ms932Encoder.encode("\u512E")}).toThrowError({name:"TypeError",message:"EncodingError U+512E"});
expect(() => {ms932Encoder.encode("\u512F")}).toThrowError({name:"TypeError",message:"EncodingError U+512F"});
expect(() => {ms932Encoder.encode("\u5130")}).toThrowError({name:"TypeError",message:"EncodingError U+5130"});
expect(() => {ms932Encoder.encode("\u5131")}).toThrowError({name:"TypeError",message:"EncodingError U+5131"});
expect([...ms932Encoder.encode("儲")].join(",")).toBe("150,215"); // U+5132
expect(() => {ms932Encoder.encode("\u5133")}).toThrowError({name:"TypeError",message:"EncodingError U+5133"});
expect(() => {ms932Encoder.encode("\u5134")}).toThrowError({name:"TypeError",message:"EncodingError U+5134"});
expect(() => {ms932Encoder.encode("\u5135")}).toThrowError({name:"TypeError",message:"EncodingError U+5135"});
expect(() => {ms932Encoder.encode("\u5136")}).toThrowError({name:"TypeError",message:"EncodingError U+5136"});
expect([...ms932Encoder.encode("儷")].join(",")).toBe("153,85"); // U+5137
expect(() => {ms932Encoder.encode("\u5138")}).toThrowError({name:"TypeError",message:"EncodingError U+5138"});
expect(() => {ms932Encoder.encode("\u5139")}).toThrowError({name:"TypeError",message:"EncodingError U+5139"});
expect([...ms932Encoder.encode("儺儻儼")].join(",")).toBe("153,84,153,87,153,86"); // U+513A
expect(() => {ms932Encoder.encode("\u513D")}).toThrowError({name:"TypeError",message:"EncodingError U+513D"});
expect(() => {ms932Encoder.encode("\u513E")}).toThrowError({name:"TypeError",message:"EncodingError U+513E"});
expect([...ms932Encoder.encode("儿兀允")].join(",")).toBe("153,88,153,89,136,242"); // U+513F
expect(() => {ms932Encoder.encode("\u5142")}).toThrowError({name:"TypeError",message:"EncodingError U+5142"});
expect([...ms932Encoder.encode("元兄充兆兇先光兊克兌免兎")].join(",")).toBe("140,179,140,90,143,91,146,155,139,162,144,230,140,245,250,126,141,142,153,91,150,198,147,101"); // U+5143
expect(() => {ms932Encoder.encode("\u514F")}).toThrowError({name:"TypeError",message:"EncodingError U+514F"});
expect([...ms932Encoder.encode("児")].join(",")).toBe("142,153"); // U+5150
expect(() => {ms932Encoder.encode("\u5151")}).toThrowError({name:"TypeError",message:"EncodingError U+5151"});
expect([...ms932Encoder.encode("兒")].join(",")).toBe("153,90"); // U+5152
expect(() => {ms932Encoder.encode("\u5153")}).toThrowError({name:"TypeError",message:"EncodingError U+5153"});
expect([...ms932Encoder.encode("兔")].join(",")).toBe("153,92"); // U+5154
expect(() => {ms932Encoder.encode("\u5155")}).toThrowError({name:"TypeError",message:"EncodingError U+5155"});
expect(() => {ms932Encoder.encode("\u5156")}).toThrowError({name:"TypeError",message:"EncodingError U+5156"});
expect(() => {ms932Encoder.encode("\u5157")}).toThrowError({name:"TypeError",message:"EncodingError U+5157"});
expect(() => {ms932Encoder.encode("\u5158")}).toThrowError({name:"TypeError",message:"EncodingError U+5158"});
expect(() => {ms932Encoder.encode("\u5159")}).toThrowError({name:"TypeError",message:"EncodingError U+5159"});
expect([...ms932Encoder.encode("党")].join(",")).toBe("147,125"); // U+515A
expect(() => {ms932Encoder.encode("\u515B")}).toThrowError({name:"TypeError",message:"EncodingError U+515B"});
expect([...ms932Encoder.encode("兜")].join(",")).toBe("138,149"); // U+515C
expect(() => {ms932Encoder.encode("\u515D")}).toThrowError({name:"TypeError",message:"EncodingError U+515D"});
expect(() => {ms932Encoder.encode("\u515E")}).toThrowError({name:"TypeError",message:"EncodingError U+515E"});
expect(() => {ms932Encoder.encode("\u515F")}).toThrowError({name:"TypeError",message:"EncodingError U+515F"});
expect(() => {ms932Encoder.encode("\u5160")}).toThrowError({name:"TypeError",message:"EncodingError U+5160"});
expect(() => {ms932Encoder.encode("\u5161")}).toThrowError({name:"TypeError",message:"EncodingError U+5161"});
expect([...ms932Encoder.encode("兢")].join(",")).toBe("153,93"); // U+5162
expect(() => {ms932Encoder.encode("\u5163")}).toThrowError({name:"TypeError",message:"EncodingError U+5163"});
expect([...ms932Encoder.encode("兤入")].join(",")).toBe("250,128,147,252"); // U+5164
expect(() => {ms932Encoder.encode("\u5166")}).toThrowError({name:"TypeError",message:"EncodingError U+5166"});
expect(() => {ms932Encoder.encode("\u5167")}).toThrowError({name:"TypeError",message:"EncodingError U+5167"});
expect([...ms932Encoder.encode("全兩兪八公六兮")].join(",")).toBe("145,83,153,95,153,96,148,170,140,246,152,90,153,97"); // U+5168
expect(() => {ms932Encoder.encode("\u516F")}).toThrowError({name:"TypeError",message:"EncodingError U+516F"});
expect(() => {ms932Encoder.encode("\u5170")}).toThrowError({name:"TypeError",message:"EncodingError U+5170"});
expect([...ms932Encoder.encode("共")].join(",")).toBe("139,164"); // U+5171
expect(() => {ms932Encoder.encode("\u5172")}).toThrowError({name:"TypeError",message:"EncodingError U+5172"});
expect(() => {ms932Encoder.encode("\u5173")}).toThrowError({name:"TypeError",message:"EncodingError U+5173"});
expect(() => {ms932Encoder.encode("\u5174")}).toThrowError({name:"TypeError",message:"EncodingError U+5174"});
expect([...ms932Encoder.encode("兵其具典")].join(",")).toBe("149,186,145,180,139,239,147,84"); // U+5175
expect(() => {ms932Encoder.encode("\u5179")}).toThrowError({name:"TypeError",message:"EncodingError U+5179"});
expect(() => {ms932Encoder.encode("\u517A")}).toThrowError({name:"TypeError",message:"EncodingError U+517A"});
expect(() => {ms932Encoder.encode("\u517B")}).toThrowError({name:"TypeError",message:"EncodingError U+517B"});
expect([...ms932Encoder.encode("兼")].join(",")).toBe("140,147"); // U+517C
expect(() => {ms932Encoder.encode("\u517D")}).toThrowError({name:"TypeError",message:"EncodingError U+517D"});
expect(() => {ms932Encoder.encode("\u517E")}).toThrowError({name:"TypeError",message:"EncodingError U+517E"});
expect(() => {ms932Encoder.encode("\u517F")}).toThrowError({name:"TypeError",message:"EncodingError U+517F"});
expect([...ms932Encoder.encode("冀")].join(",")).toBe("153,98"); // U+5180
expect(() => {ms932Encoder.encode("\u5181")}).toThrowError({name:"TypeError",message:"EncodingError U+5181"});
expect([...ms932Encoder.encode("冂")].join(",")).toBe("153,99"); // U+5182
expect(() => {ms932Encoder.encode("\u5183")}).toThrowError({name:"TypeError",message:"EncodingError U+5183"});
expect(() => {ms932Encoder.encode("\u5184")}).toThrowError({name:"TypeError",message:"EncodingError U+5184"});
expect([...ms932Encoder.encode("内円")].join(",")).toBe("147,224,137,126"); // U+5185
expect(() => {ms932Encoder.encode("\u5187")}).toThrowError({name:"TypeError",message:"EncodingError U+5187"});
expect(() => {ms932Encoder.encode("\u5188")}).toThrowError({name:"TypeError",message:"EncodingError U+5188"});
expect([...ms932Encoder.encode("冉冊")].join(",")).toBe("153,102,141,251"); // U+5189
expect(() => {ms932Encoder.encode("\u518B")}).toThrowError({name:"TypeError",message:"EncodingError U+518B"});
expect([...ms932Encoder.encode("册再")].join(",")).toBe("153,101,141,196"); // U+518C
expect(() => {ms932Encoder.encode("\u518E")}).toThrowError({name:"TypeError",message:"EncodingError U+518E"});
expect([...ms932Encoder.encode("冏冐冑冒冓")].join(",")).toBe("153,103,227,236,153,104,150,96,153,105"); // U+518F
expect(() => {ms932Encoder.encode("\u5194")}).toThrowError({name:"TypeError",message:"EncodingError U+5194"});
expect([...ms932Encoder.encode("冕冖冗")].join(",")).toBe("153,106,153,107,143,231"); // U+5195
expect(() => {ms932Encoder.encode("\u5198")}).toThrowError({name:"TypeError",message:"EncodingError U+5198"});
expect([...ms932Encoder.encode("写")].join(",")).toBe("142,202"); // U+5199
expect(() => {ms932Encoder.encode("\u519A")}).toThrowError({name:"TypeError",message:"EncodingError U+519A"});
expect(() => {ms932Encoder.encode("\u519B")}).toThrowError({name:"TypeError",message:"EncodingError U+519B"});
expect(() => {ms932Encoder.encode("\u519C")}).toThrowError({name:"TypeError",message:"EncodingError U+519C"});
expect([...ms932Encoder.encode("冝")].join(",")).toBe("250,129"); // U+519D
expect(() => {ms932Encoder.encode("\u519E")}).toThrowError({name:"TypeError",message:"EncodingError U+519E"});
expect(() => {ms932Encoder.encode("\u519F")}).toThrowError({name:"TypeError",message:"EncodingError U+519F"});
expect([...ms932Encoder.encode("冠")].join(",")).toBe("138,165"); // U+51A0
expect(() => {ms932Encoder.encode("\u51A1")}).toThrowError({name:"TypeError",message:"EncodingError U+51A1"});
expect([...ms932Encoder.encode("冢")].join(",")).toBe("153,110"); // U+51A2
expect(() => {ms932Encoder.encode("\u51A3")}).toThrowError({name:"TypeError",message:"EncodingError U+51A3"});
expect([...ms932Encoder.encode("冤冥冦")].join(",")).toBe("153,108,150,187,153,109"); // U+51A4
expect(() => {ms932Encoder.encode("\u51A7")}).toThrowError({name:"TypeError",message:"EncodingError U+51A7"});
expect([...ms932Encoder.encode("冨冩冪冫冬")].join(",")).toBe("149,121,153,111,153,112,153,113,147,126"); // U+51A8
expect(() => {ms932Encoder.encode("\u51AD")}).toThrowError({name:"TypeError",message:"EncodingError U+51AD"});
expect(() => {ms932Encoder.encode("\u51AE")}).toThrowError({name:"TypeError",message:"EncodingError U+51AE"});
expect(() => {ms932Encoder.encode("\u51AF")}).toThrowError({name:"TypeError",message:"EncodingError U+51AF"});
expect([...ms932Encoder.encode("冰冱冲决冴况冶冷")].join(",")).toBe("153,117,153,115,153,116,153,114,141,225,153,118,150,232,151,226"); // U+51B0
expect(() => {ms932Encoder.encode("\u51B8")}).toThrowError({name:"TypeError",message:"EncodingError U+51B8"});
expect(() => {ms932Encoder.encode("\u51B9")}).toThrowError({name:"TypeError",message:"EncodingError U+51B9"});
expect(() => {ms932Encoder.encode("\u51BA")}).toThrowError({name:"TypeError",message:"EncodingError U+51BA"});
expect(() => {ms932Encoder.encode("\u51BB")}).toThrowError({name:"TypeError",message:"EncodingError U+51BB"});
expect(() => {ms932Encoder.encode("\u51BC")}).toThrowError({name:"TypeError",message:"EncodingError U+51BC"});
expect([...ms932Encoder.encode("冽冾")].join(",")).toBe("153,119,250,130"); // U+51BD
expect(() => {ms932Encoder.encode("\u51BF")}).toThrowError({name:"TypeError",message:"EncodingError U+51BF"});
expect(() => {ms932Encoder.encode("\u51C0")}).toThrowError({name:"TypeError",message:"EncodingError U+51C0"});
expect(() => {ms932Encoder.encode("\u51C1")}).toThrowError({name:"TypeError",message:"EncodingError U+51C1"});
expect(() => {ms932Encoder.encode("\u51C2")}).toThrowError({name:"TypeError",message:"EncodingError U+51C2"});
expect(() => {ms932Encoder.encode("\u51C3")}).toThrowError({name:"TypeError",message:"EncodingError U+51C3"});
expect([...ms932Encoder.encode("凄凅准")].join(",")).toBe("144,166,153,120,143,121"); // U+51C4
expect(() => {ms932Encoder.encode("\u51C7")}).toThrowError({name:"TypeError",message:"EncodingError U+51C7"});
expect(() => {ms932Encoder.encode("\u51C8")}).toThrowError({name:"TypeError",message:"EncodingError U+51C8"});
expect([...ms932Encoder.encode("凉")].join(",")).toBe("153,121"); // U+51C9
expect(() => {ms932Encoder.encode("\u51CA")}).toThrowError({name:"TypeError",message:"EncodingError U+51CA"});
expect([...ms932Encoder.encode("凋凌凍")].join(",")).toBe("146,156,151,189,147,128"); // U+51CB
expect(() => {ms932Encoder.encode("\u51CE")}).toThrowError({name:"TypeError",message:"EncodingError U+51CE"});
expect(() => {ms932Encoder.encode("\u51CF")}).toThrowError({name:"TypeError",message:"EncodingError U+51CF"});
expect(() => {ms932Encoder.encode("\u51D0")}).toThrowError({name:"TypeError",message:"EncodingError U+51D0"});
expect(() => {ms932Encoder.encode("\u51D1")}).toThrowError({name:"TypeError",message:"EncodingError U+51D1"});
expect(() => {ms932Encoder.encode("\u51D2")}).toThrowError({name:"TypeError",message:"EncodingError U+51D2"});
expect(() => {ms932Encoder.encode("\u51D3")}).toThrowError({name:"TypeError",message:"EncodingError U+51D3"});
expect(() => {ms932Encoder.encode("\u51D4")}).toThrowError({name:"TypeError",message:"EncodingError U+51D4"});
expect(() => {ms932Encoder.encode("\u51D5")}).toThrowError({name:"TypeError",message:"EncodingError U+51D5"});
expect([...ms932Encoder.encode("凖")].join(",")).toBe("153,195"); // U+51D6
expect(() => {ms932Encoder.encode("\u51D7")}).toThrowError({name:"TypeError",message:"EncodingError U+51D7"});
expect(() => {ms932Encoder.encode("\u51D8")}).toThrowError({name:"TypeError",message:"EncodingError U+51D8"});
expect(() => {ms932Encoder.encode("\u51D9")}).toThrowError({name:"TypeError",message:"EncodingError U+51D9"});
expect(() => {ms932Encoder.encode("\u51DA")}).toThrowError({name:"TypeError",message:"EncodingError U+51DA"});
expect([...ms932Encoder.encode("凛凜凝")].join(",")).toBe("153,122,234,163,139,195"); // U+51DB
expect(() => {ms932Encoder.encode("\u51DE")}).toThrowError({name:"TypeError",message:"EncodingError U+51DE"});
expect(() => {ms932Encoder.encode("\u51DF")}).toThrowError({name:"TypeError",message:"EncodingError U+51DF"});
expect([...ms932Encoder.encode("几凡")].join(",")).toBe("153,123,150,125"); // U+51E0
expect(() => {ms932Encoder.encode("\u51E2")}).toThrowError({name:"TypeError",message:"EncodingError U+51E2"});
expect(() => {ms932Encoder.encode("\u51E3")}).toThrowError({name:"TypeError",message:"EncodingError U+51E3"});
expect(() => {ms932Encoder.encode("\u51E4")}).toThrowError({name:"TypeError",message:"EncodingError U+51E4"});
expect(() => {ms932Encoder.encode("\u51E5")}).toThrowError({name:"TypeError",message:"EncodingError U+51E5"});
expect([...ms932Encoder.encode("処凧")].join(",")).toBe("143,136,145,250"); // U+51E6
expect(() => {ms932Encoder.encode("\u51E8")}).toThrowError({name:"TypeError",message:"EncodingError U+51E8"});
expect([...ms932Encoder.encode("凩凪")].join(",")).toBe("153,125,147,226"); // U+51E9
expect(() => {ms932Encoder.encode("\u51EB")}).toThrowError({name:"TypeError",message:"EncodingError U+51EB"});
expect([...ms932Encoder.encode("凬凭")].join(",")).toBe("250,131,153,126"); // U+51EC
expect(() => {ms932Encoder.encode("\u51EE")}).toThrowError({name:"TypeError",message:"EncodingError U+51EE"});
expect(() => {ms932Encoder.encode("\u51EF")}).toThrowError({name:"TypeError",message:"EncodingError U+51EF"});
expect([...ms932Encoder.encode("凰凱")].join(",")).toBe("153,128,138,77"); // U+51F0
expect(() => {ms932Encoder.encode("\u51F2")}).toThrowError({name:"TypeError",message:"EncodingError U+51F2"});
expect(() => {ms932Encoder.encode("\u51F3")}).toThrowError({name:"TypeError",message:"EncodingError U+51F3"});
expect(() => {ms932Encoder.encode("\u51F4")}).toThrowError({name:"TypeError",message:"EncodingError U+51F4"});
expect([...ms932Encoder.encode("凵凶")].join(",")).toBe("153,129,139,165"); // U+51F5
expect(() => {ms932Encoder.encode("\u51F7")}).toThrowError({name:"TypeError",message:"EncodingError U+51F7"});
expect([...ms932Encoder.encode("凸凹出")].join(",")).toBe("147,202,137,154,143,111"); // U+51F8
expect(() => {ms932Encoder.encode("\u51FB")}).toThrowError({name:"TypeError",message:"EncodingError U+51FB"});
expect(() => {ms932Encoder.encode("\u51FC")}).toThrowError({name:"TypeError",message:"EncodingError U+51FC"});
expect([...ms932Encoder.encode("函凾")].join(",")).toBe("148,159,153,130"); // U+51FD
expect(() => {ms932Encoder.encode("\u51FF")}).toThrowError({name:"TypeError",message:"EncodingError U+51FF"});
expect([...ms932Encoder.encode("刀")].join(",")).toBe("147,129"); // U+5200
expect(() => {ms932Encoder.encode("\u5201")}).toThrowError({name:"TypeError",message:"EncodingError U+5201"});
expect(() => {ms932Encoder.encode("\u5202")}).toThrowError({name:"TypeError",message:"EncodingError U+5202"});
expect([...ms932Encoder.encode("刃刄")].join(",")).toBe("144,110,153,131"); // U+5203
expect(() => {ms932Encoder.encode("\u5205")}).toThrowError({name:"TypeError",message:"EncodingError U+5205"});
expect([...ms932Encoder.encode("分切刈")].join(",")).toBe("149,170,144,216,138,160"); // U+5206
expect(() => {ms932Encoder.encode("\u5209")}).toThrowError({name:"TypeError",message:"EncodingError U+5209"});
expect([...ms932Encoder.encode("刊刋")].join(",")).toBe("138,167,153,132"); // U+520A
expect(() => {ms932Encoder.encode("\u520C")}).toThrowError({name:"TypeError",message:"EncodingError U+520C"});
expect(() => {ms932Encoder.encode("\u520D")}).toThrowError({name:"TypeError",message:"EncodingError U+520D"});
expect([...ms932Encoder.encode("刎")].join(",")).toBe("153,134"); // U+520E
expect(() => {ms932Encoder.encode("\u520F")}).toThrowError({name:"TypeError",message:"EncodingError U+520F"});
expect(() => {ms932Encoder.encode("\u5210")}).toThrowError({name:"TypeError",message:"EncodingError U+5210"});
expect([...ms932Encoder.encode("刑")].join(",")).toBe("140,89"); // U+5211
expect(() => {ms932Encoder.encode("\u5212")}).toThrowError({name:"TypeError",message:"EncodingError U+5212"});
expect(() => {ms932Encoder.encode("\u5213")}).toThrowError({name:"TypeError",message:"EncodingError U+5213"});
expect([...ms932Encoder.encode("刔刕")].join(",")).toBe("153,133,250,132"); // U+5214
expect(() => {ms932Encoder.encode("\u5216")}).toThrowError({name:"TypeError",message:"EncodingError U+5216"});
expect([...ms932Encoder.encode("列")].join(",")).toBe("151,241"); // U+5217
expect(() => {ms932Encoder.encode("\u5218")}).toThrowError({name:"TypeError",message:"EncodingError U+5218"});
expect(() => {ms932Encoder.encode("\u5219")}).toThrowError({name:"TypeError",message:"EncodingError U+5219"});
expect(() => {ms932Encoder.encode("\u521A")}).toThrowError({name:"TypeError",message:"EncodingError U+521A"});
expect(() => {ms932Encoder.encode("\u521B")}).toThrowError({name:"TypeError",message:"EncodingError U+521B"});
expect(() => {ms932Encoder.encode("\u521C")}).toThrowError({name:"TypeError",message:"EncodingError U+521C"});
expect([...ms932Encoder.encode("初")].join(",")).toBe("143,137"); // U+521D
expect(() => {ms932Encoder.encode("\u521E")}).toThrowError({name:"TypeError",message:"EncodingError U+521E"});
expect(() => {ms932Encoder.encode("\u521F")}).toThrowError({name:"TypeError",message:"EncodingError U+521F"});
expect(() => {ms932Encoder.encode("\u5220")}).toThrowError({name:"TypeError",message:"EncodingError U+5220"});
expect(() => {ms932Encoder.encode("\u5221")}).toThrowError({name:"TypeError",message:"EncodingError U+5221"});
expect(() => {ms932Encoder.encode("\u5222")}).toThrowError({name:"TypeError",message:"EncodingError U+5222"});
expect(() => {ms932Encoder.encode("\u5223")}).toThrowError({name:"TypeError",message:"EncodingError U+5223"});
expect([...ms932Encoder.encode("判別")].join(",")).toBe("148,187,149,202"); // U+5224
expect(() => {ms932Encoder.encode("\u5226")}).toThrowError({name:"TypeError",message:"EncodingError U+5226"});
expect([...ms932Encoder.encode("刧")].join(",")).toBe("153,135"); // U+5227
expect(() => {ms932Encoder.encode("\u5228")}).toThrowError({name:"TypeError",message:"EncodingError U+5228"});
expect([...ms932Encoder.encode("利刪")].join(",")).toBe("151,152,153,136"); // U+5229
expect(() => {ms932Encoder.encode("\u522B")}).toThrowError({name:"TypeError",message:"EncodingError U+522B"});
expect(() => {ms932Encoder.encode("\u522C")}).toThrowError({name:"TypeError",message:"EncodingError U+522C"});
expect(() => {ms932Encoder.encode("\u522D")}).toThrowError({name:"TypeError",message:"EncodingError U+522D"});
expect([...ms932Encoder.encode("刮")].join(",")).toBe("153,137"); // U+522E
expect(() => {ms932Encoder.encode("\u522F")}).toThrowError({name:"TypeError",message:"EncodingError U+522F"});
expect([...ms932Encoder.encode("到")].join(",")).toBe("147,158"); // U+5230
expect(() => {ms932Encoder.encode("\u5231")}).toThrowError({name:"TypeError",message:"EncodingError U+5231"});
expect(() => {ms932Encoder.encode("\u5232")}).toThrowError({name:"TypeError",message:"EncodingError U+5232"});
expect([...ms932Encoder.encode("刳")].join(",")).toBe("153,138"); // U+5233
expect(() => {ms932Encoder.encode("\u5234")}).toThrowError({name:"TypeError",message:"EncodingError U+5234"});
expect(() => {ms932Encoder.encode("\u5235")}).toThrowError({name:"TypeError",message:"EncodingError U+5235"});
expect([...ms932Encoder.encode("制刷券刹刺刻")].join(",")).toBe("144,167,141,252,140,148,153,139,142,104,141,143"); // U+5236
expect(() => {ms932Encoder.encode("\u523C")}).toThrowError({name:"TypeError",message:"EncodingError U+523C"});
expect(() => {ms932Encoder.encode("\u523D")}).toThrowError({name:"TypeError",message:"EncodingError U+523D"});
expect(() => {ms932Encoder.encode("\u523E")}).toThrowError({name:"TypeError",message:"EncodingError U+523E"});
expect(() => {ms932Encoder.encode("\u523F")}).toThrowError({name:"TypeError",message:"EncodingError U+523F"});
expect(() => {ms932Encoder.encode("\u5240")}).toThrowError({name:"TypeError",message:"EncodingError U+5240"});
expect(() => {ms932Encoder.encode("\u5241")}).toThrowError({name:"TypeError",message:"EncodingError U+5241"});
expect(() => {ms932Encoder.encode("\u5242")}).toThrowError({name:"TypeError",message:"EncodingError U+5242"});
expect([...ms932Encoder.encode("剃剄")].join(",")).toBe("146,228,153,141"); // U+5243
expect(() => {ms932Encoder.encode("\u5245")}).toThrowError({name:"TypeError",message:"EncodingError U+5245"});
expect(() => {ms932Encoder.encode("\u5246")}).toThrowError({name:"TypeError",message:"EncodingError U+5246"});
expect([...ms932Encoder.encode("則")].join(",")).toBe("145,165"); // U+5247
expect(() => {ms932Encoder.encode("\u5248")}).toThrowError({name:"TypeError",message:"EncodingError U+5248"});
expect(() => {ms932Encoder.encode("\u5249")}).toThrowError({name:"TypeError",message:"EncodingError U+5249"});
expect([...ms932Encoder.encode("削剋剌前")].join(",")).toBe("141,237,153,142,153,143,145,79"); // U+524A
expect(() => {ms932Encoder.encode("\u524E")}).toThrowError({name:"TypeError",message:"EncodingError U+524E"});
expect([...ms932Encoder.encode("剏")].join(",")).toBe("153,140"); // U+524F
expect(() => {ms932Encoder.encode("\u5250")}).toThrowError({name:"TypeError",message:"EncodingError U+5250"});
expect(() => {ms932Encoder.encode("\u5251")}).toThrowError({name:"TypeError",message:"EncodingError U+5251"});
expect(() => {ms932Encoder.encode("\u5252")}).toThrowError({name:"TypeError",message:"EncodingError U+5252"});
expect(() => {ms932Encoder.encode("\u5253")}).toThrowError({name:"TypeError",message:"EncodingError U+5253"});
expect([...ms932Encoder.encode("剔")].join(",")).toBe("153,145"); // U+5254
expect(() => {ms932Encoder.encode("\u5255")}).toThrowError({name:"TypeError",message:"EncodingError U+5255"});
expect([...ms932Encoder.encode("剖")].join(",")).toBe("150,85"); // U+5256
expect(() => {ms932Encoder.encode("\u5257")}).toThrowError({name:"TypeError",message:"EncodingError U+5257"});
expect(() => {ms932Encoder.encode("\u5258")}).toThrowError({name:"TypeError",message:"EncodingError U+5258"});
expect(() => {ms932Encoder.encode("\u5259")}).toThrowError({name:"TypeError",message:"EncodingError U+5259"});
expect(() => {ms932Encoder.encode("\u525A")}).toThrowError({name:"TypeError",message:"EncodingError U+525A"});
expect([...ms932Encoder.encode("剛")].join(",")).toBe("141,132"); // U+525B
expect(() => {ms932Encoder.encode("\u525C")}).toThrowError({name:"TypeError",message:"EncodingError U+525C"});
expect(() => {ms932Encoder.encode("\u525D")}).toThrowError({name:"TypeError",message:"EncodingError U+525D"});
expect([...ms932Encoder.encode("剞")].join(",")).toBe("153,144"); // U+525E
expect(() => {ms932Encoder.encode("\u525F")}).toThrowError({name:"TypeError",message:"EncodingError U+525F"});
expect(() => {ms932Encoder.encode("\u5260")}).toThrowError({name:"TypeError",message:"EncodingError U+5260"});
expect(() => {ms932Encoder.encode("\u5261")}).toThrowError({name:"TypeError",message:"EncodingError U+5261"});
expect(() => {ms932Encoder.encode("\u5262")}).toThrowError({name:"TypeError",message:"EncodingError U+5262"});
expect([...ms932Encoder.encode("剣剤剥")].join(",")).toBe("140,149,141,220,148,141"); // U+5263
expect(() => {ms932Encoder.encode("\u5266")}).toThrowError({name:"TypeError",message:"EncodingError U+5266"});
expect(() => {ms932Encoder.encode("\u5267")}).toThrowError({name:"TypeError",message:"EncodingError U+5267"});
expect(() => {ms932Encoder.encode("\u5268")}).toThrowError({name:"TypeError",message:"EncodingError U+5268"});
expect([...ms932Encoder.encode("剩剪")].join(",")).toBe("153,148,153,146"); // U+5269
expect(() => {ms932Encoder.encode("\u526B")}).toThrowError({name:"TypeError",message:"EncodingError U+526B"});
expect(() => {ms932Encoder.encode("\u526C")}).toThrowError({name:"TypeError",message:"EncodingError U+526C"});
expect(() => {ms932Encoder.encode("\u526D")}).toThrowError({name:"TypeError",message:"EncodingError U+526D"});
expect(() => {ms932Encoder.encode("\u526E")}).toThrowError({name:"TypeError",message:"EncodingError U+526E"});
expect([...ms932Encoder.encode("副剰剱割剳剴創")].join(",")).toBe("149,155,143,232,153,155,138,132,153,149,153,147,145,110"); // U+526F
expect(() => {ms932Encoder.encode("\u5276")}).toThrowError({name:"TypeError",message:"EncodingError U+5276"});
expect(() => {ms932Encoder.encode("\u5277")}).toThrowError({name:"TypeError",message:"EncodingError U+5277"});
expect(() => {ms932Encoder.encode("\u5278")}).toThrowError({name:"TypeError",message:"EncodingError U+5278"});
expect(() => {ms932Encoder.encode("\u5279")}).toThrowError({name:"TypeError",message:"EncodingError U+5279"});
expect(() => {ms932Encoder.encode("\u527A")}).toThrowError({name:"TypeError",message:"EncodingError U+527A"});
expect(() => {ms932Encoder.encode("\u527B")}).toThrowError({name:"TypeError",message:"EncodingError U+527B"});
expect(() => {ms932Encoder.encode("\u527C")}).toThrowError({name:"TypeError",message:"EncodingError U+527C"});
expect([...ms932Encoder.encode("剽")].join(",")).toBe("153,151"); // U+527D
expect(() => {ms932Encoder.encode("\u527E")}).toThrowError({name:"TypeError",message:"EncodingError U+527E"});
expect([...ms932Encoder.encode("剿")].join(",")).toBe("153,150"); // U+527F
expect(() => {ms932Encoder.encode("\u5280")}).toThrowError({name:"TypeError",message:"EncodingError U+5280"});
expect(() => {ms932Encoder.encode("\u5281")}).toThrowError({name:"TypeError",message:"EncodingError U+5281"});
expect(() => {ms932Encoder.encode("\u5282")}).toThrowError({name:"TypeError",message:"EncodingError U+5282"});
expect([...ms932Encoder.encode("劃")].join(",")).toBe("138,99"); // U+5283
expect(() => {ms932Encoder.encode("\u5284")}).toThrowError({name:"TypeError",message:"EncodingError U+5284"});
expect(() => {ms932Encoder.encode("\u5285")}).toThrowError({name:"TypeError",message:"EncodingError U+5285"});
expect(() => {ms932Encoder.encode("\u5286")}).toThrowError({name:"TypeError",message:"EncodingError U+5286"});
expect([...ms932Encoder.encode("劇劈劉")].join(",")).toBe("140,128,153,156,151,171"); // U+5287
expect(() => {ms932Encoder.encode("\u528A")}).toThrowError({name:"TypeError",message:"EncodingError U+528A"});
expect(() => {ms932Encoder.encode("\u528B")}).toThrowError({name:"TypeError",message:"EncodingError U+528B"});
expect(() => {ms932Encoder.encode("\u528C")}).toThrowError({name:"TypeError",message:"EncodingError U+528C"});
expect([...ms932Encoder.encode("劍")].join(",")).toBe("153,152"); // U+528D
expect(() => {ms932Encoder.encode("\u528E")}).toThrowError({name:"TypeError",message:"EncodingError U+528E"});
expect(() => {ms932Encoder.encode("\u528F")}).toThrowError({name:"TypeError",message:"EncodingError U+528F"});
expect(() => {ms932Encoder.encode("\u5290")}).toThrowError({name:"TypeError",message:"EncodingError U+5290"});
expect([...ms932Encoder.encode("劑劒")].join(",")).toBe("153,157,153,154"); // U+5291
expect(() => {ms932Encoder.encode("\u5293")}).toThrowError({name:"TypeError",message:"EncodingError U+5293"});
expect([...ms932Encoder.encode("劔")].join(",")).toBe("153,153"); // U+5294
expect(() => {ms932Encoder.encode("\u5295")}).toThrowError({name:"TypeError",message:"EncodingError U+5295"});
expect(() => {ms932Encoder.encode("\u5296")}).toThrowError({name:"TypeError",message:"EncodingError U+5296"});
expect(() => {ms932Encoder.encode("\u5297")}).toThrowError({name:"TypeError",message:"EncodingError U+5297"});
expect(() => {ms932Encoder.encode("\u5298")}).toThrowError({name:"TypeError",message:"EncodingError U+5298"});
expect(() => {ms932Encoder.encode("\u5299")}).toThrowError({name:"TypeError",message:"EncodingError U+5299"});
expect(() => {ms932Encoder.encode("\u529A")}).toThrowError({name:"TypeError",message:"EncodingError U+529A"});
expect([...ms932Encoder.encode("力劜")].join(",")).toBe("151,205,250,133"); // U+529B
expect(() => {ms932Encoder.encode("\u529D")}).toThrowError({name:"TypeError",message:"EncodingError U+529D"});
expect(() => {ms932Encoder.encode("\u529E")}).toThrowError({name:"TypeError",message:"EncodingError U+529E"});
expect([...ms932Encoder.encode("功加")].join(",")).toBe("140,247,137,193"); // U+529F
expect(() => {ms932Encoder.encode("\u52A1")}).toThrowError({name:"TypeError",message:"EncodingError U+52A1"});
expect(() => {ms932Encoder.encode("\u52A2")}).toThrowError({name:"TypeError",message:"EncodingError U+52A2"});
expect([...ms932Encoder.encode("劣")].join(",")).toBe("151,242"); // U+52A3
expect(() => {ms932Encoder.encode("\u52A4")}).toThrowError({name:"TypeError",message:"EncodingError U+52A4"});
expect(() => {ms932Encoder.encode("\u52A5")}).toThrowError({name:"TypeError",message:"EncodingError U+52A5"});
expect([...ms932Encoder.encode("劦")].join(",")).toBe("250,134"); // U+52A6
expect(() => {ms932Encoder.encode("\u52A7")}).toThrowError({name:"TypeError",message:"EncodingError U+52A7"});
expect(() => {ms932Encoder.encode("\u52A8")}).toThrowError({name:"TypeError",message:"EncodingError U+52A8"});
expect([...ms932Encoder.encode("助努劫劬劭")].join(",")).toBe("143,149,147,119,141,133,153,160,153,161"); // U+52A9
expect(() => {ms932Encoder.encode("\u52AE")}).toThrowError({name:"TypeError",message:"EncodingError U+52AE"});
expect([...ms932Encoder.encode("劯")].join(",")).toBe("251,119"); // U+52AF
expect(() => {ms932Encoder.encode("\u52B0")}).toThrowError({name:"TypeError",message:"EncodingError U+52B0"});
expect([...ms932Encoder.encode("励")].join(",")).toBe("151,227"); // U+52B1
expect(() => {ms932Encoder.encode("\u52B2")}).toThrowError({name:"TypeError",message:"EncodingError U+52B2"});
expect(() => {ms932Encoder.encode("\u52B3")}).toThrowError({name:"TypeError",message:"EncodingError U+52B3"});
expect([...ms932Encoder.encode("労劵")].join(",")).toBe("152,74,153,163"); // U+52B4
expect(() => {ms932Encoder.encode("\u52B6")}).toThrowError({name:"TypeError",message:"EncodingError U+52B6"});
expect(() => {ms932Encoder.encode("\u52B7")}).toThrowError({name:"TypeError",message:"EncodingError U+52B7"});
expect(() => {ms932Encoder.encode("\u52B8")}).toThrowError({name:"TypeError",message:"EncodingError U+52B8"});
expect([...ms932Encoder.encode("効")].join(",")).toBe("140,248"); // U+52B9
expect(() => {ms932Encoder.encode("\u52BA")}).toThrowError({name:"TypeError",message:"EncodingError U+52BA"});
expect(() => {ms932Encoder.encode("\u52BB")}).toThrowError({name:"TypeError",message:"EncodingError U+52BB"});
expect([...ms932Encoder.encode("劼")].join(",")).toBe("153,162"); // U+52BC
expect(() => {ms932Encoder.encode("\u52BD")}).toThrowError({name:"TypeError",message:"EncodingError U+52BD"});
expect([...ms932Encoder.encode("劾")].join(",")).toBe("138,78"); // U+52BE
expect(() => {ms932Encoder.encode("\u52BF")}).toThrowError({name:"TypeError",message:"EncodingError U+52BF"});
expect([...ms932Encoder.encode("勀勁")].join(",")).toBe("250,135,153,164"); // U+52C0
expect(() => {ms932Encoder.encode("\u52C2")}).toThrowError({name:"TypeError",message:"EncodingError U+52C2"});
expect([...ms932Encoder.encode("勃")].join(",")).toBe("150,117"); // U+52C3
expect(() => {ms932Encoder.encode("\u52C4")}).toThrowError({name:"TypeError",message:"EncodingError U+52C4"});
expect([...ms932Encoder.encode("勅")].join(",")).toBe("146,186"); // U+52C5
expect(() => {ms932Encoder.encode("\u52C6")}).toThrowError({name:"TypeError",message:"EncodingError U+52C6"});
expect([...ms932Encoder.encode("勇")].join(",")).toBe("151,69"); // U+52C7
expect(() => {ms932Encoder.encode("\u52C8")}).toThrowError({name:"TypeError",message:"EncodingError U+52C8"});
expect([...ms932Encoder.encode("勉")].join(",")).toBe("149,215"); // U+52C9
expect(() => {ms932Encoder.encode("\u52CA")}).toThrowError({name:"TypeError",message:"EncodingError U+52CA"});
expect(() => {ms932Encoder.encode("\u52CB")}).toThrowError({name:"TypeError",message:"EncodingError U+52CB"});
expect(() => {ms932Encoder.encode("\u52CC")}).toThrowError({name:"TypeError",message:"EncodingError U+52CC"});
expect([...ms932Encoder.encode("勍")].join(",")).toBe("153,165"); // U+52CD
expect(() => {ms932Encoder.encode("\u52CE")}).toThrowError({name:"TypeError",message:"EncodingError U+52CE"});
expect(() => {ms932Encoder.encode("\u52CF")}).toThrowError({name:"TypeError",message:"EncodingError U+52CF"});
expect(() => {ms932Encoder.encode("\u52D0")}).toThrowError({name:"TypeError",message:"EncodingError U+52D0"});
expect(() => {ms932Encoder.encode("\u52D1")}).toThrowError({name:"TypeError",message:"EncodingError U+52D1"});
expect([...ms932Encoder.encode("勒")].join(",")).toBe("232,211"); // U+52D2
expect(() => {ms932Encoder.encode("\u52D3")}).toThrowError({name:"TypeError",message:"EncodingError U+52D3"});
expect(() => {ms932Encoder.encode("\u52D4")}).toThrowError({name:"TypeError",message:"EncodingError U+52D4"});
expect([...ms932Encoder.encode("動")].join(",")).toBe("147,174"); // U+52D5
expect(() => {ms932Encoder.encode("\u52D6")}).toThrowError({name:"TypeError",message:"EncodingError U+52D6"});
expect([...ms932Encoder.encode("勗勘務")].join(",")).toBe("153,166,138,168,150,177"); // U+52D7
expect(() => {ms932Encoder.encode("\u52DA")}).toThrowError({name:"TypeError",message:"EncodingError U+52DA"});
expect([...ms932Encoder.encode("勛")].join(",")).toBe("250,136"); // U+52DB
expect(() => {ms932Encoder.encode("\u52DC")}).toThrowError({name:"TypeError",message:"EncodingError U+52DC"});
expect([...ms932Encoder.encode("勝勞募勠")].join(",")).toBe("143,159,153,167,149,229,153,171"); // U+52DD
expect(() => {ms932Encoder.encode("\u52E1")}).toThrowError({name:"TypeError",message:"EncodingError U+52E1"});
expect([...ms932Encoder.encode("勢勣勤")].join(",")).toBe("144,168,153,168,139,206"); // U+52E2
expect(() => {ms932Encoder.encode("\u52E5")}).toThrowError({name:"TypeError",message:"EncodingError U+52E5"});
expect([...ms932Encoder.encode("勦勧")].join(",")).toBe("153,169,138,169"); // U+52E6
expect(() => {ms932Encoder.encode("\u52E8")}).toThrowError({name:"TypeError",message:"EncodingError U+52E8"});
expect(() => {ms932Encoder.encode("\u52E9")}).toThrowError({name:"TypeError",message:"EncodingError U+52E9"});
expect(() => {ms932Encoder.encode("\u52EA")}).toThrowError({name:"TypeError",message:"EncodingError U+52EA"});
expect(() => {ms932Encoder.encode("\u52EB")}).toThrowError({name:"TypeError",message:"EncodingError U+52EB"});
expect(() => {ms932Encoder.encode("\u52EC")}).toThrowError({name:"TypeError",message:"EncodingError U+52EC"});
expect(() => {ms932Encoder.encode("\u52ED")}).toThrowError({name:"TypeError",message:"EncodingError U+52ED"});
expect(() => {ms932Encoder.encode("\u52EE")}).toThrowError({name:"TypeError",message:"EncodingError U+52EE"});
expect(() => {ms932Encoder.encode("\u52EF")}).toThrowError({name:"TypeError",message:"EncodingError U+52EF"});
expect(() => {ms932Encoder.encode("\u52F0")}).toThrowError({name:"TypeError",message:"EncodingError U+52F0"});
expect(() => {ms932Encoder.encode("\u52F1")}).toThrowError({name:"TypeError",message:"EncodingError U+52F1"});
expect([...ms932Encoder.encode("勲勳")].join(",")).toBe("140,77,153,172"); // U+52F2
expect(() => {ms932Encoder.encode("\u52F4")}).toThrowError({name:"TypeError",message:"EncodingError U+52F4"});
expect([...ms932Encoder.encode("勵")].join(",")).toBe("153,173"); // U+52F5
expect(() => {ms932Encoder.encode("\u52F6")}).toThrowError({name:"TypeError",message:"EncodingError U+52F6"});
expect(() => {ms932Encoder.encode("\u52F7")}).toThrowError({name:"TypeError",message:"EncodingError U+52F7"});
expect([...ms932Encoder.encode("勸勹勺")].join(",")).toBe("153,174,153,175,142,217"); // U+52F8
expect(() => {ms932Encoder.encode("\u52FB")}).toThrowError({name:"TypeError",message:"EncodingError U+52FB"});
expect(() => {ms932Encoder.encode("\u52FC")}).toThrowError({name:"TypeError",message:"EncodingError U+52FC"});
expect(() => {ms932Encoder.encode("\u52FD")}).toThrowError({name:"TypeError",message:"EncodingError U+52FD"});
expect([...ms932Encoder.encode("勾勿匀匁匂")].join(",")).toBe("140,249,150,220,250,137,150,230,147,245"); // U+52FE
expect(() => {ms932Encoder.encode("\u5303")}).toThrowError({name:"TypeError",message:"EncodingError U+5303"});
expect(() => {ms932Encoder.encode("\u5304")}).toThrowError({name:"TypeError",message:"EncodingError U+5304"});
expect([...ms932Encoder.encode("包匆匇匈")].join(",")).toBe("149,239,153,176,250,138,153,177"); // U+5305
expect(() => {ms932Encoder.encode("\u5309")}).toThrowError({name:"TypeError",message:"EncodingError U+5309"});
expect(() => {ms932Encoder.encode("\u530A")}).toThrowError({name:"TypeError",message:"EncodingError U+530A"});
expect(() => {ms932Encoder.encode("\u530B")}).toThrowError({name:"TypeError",message:"EncodingError U+530B"});
expect(() => {ms932Encoder.encode("\u530C")}).toThrowError({name:"TypeError",message:"EncodingError U+530C"});
expect([...ms932Encoder.encode("匍")].join(",")).toBe("153,179"); // U+530D
expect(() => {ms932Encoder.encode("\u530E")}).toThrowError({name:"TypeError",message:"EncodingError U+530E"});
expect([...ms932Encoder.encode("匏匐")].join(",")).toBe("153,181,153,180"); // U+530F
expect(() => {ms932Encoder.encode("\u5311")}).toThrowError({name:"TypeError",message:"EncodingError U+5311"});
expect(() => {ms932Encoder.encode("\u5312")}).toThrowError({name:"TypeError",message:"EncodingError U+5312"});
expect(() => {ms932Encoder.encode("\u5313")}).toThrowError({name:"TypeError",message:"EncodingError U+5313"});
expect(() => {ms932Encoder.encode("\u5314")}).toThrowError({name:"TypeError",message:"EncodingError U+5314"});
expect([...ms932Encoder.encode("匕化北")].join(",")).toBe("153,182,137,187,150,107"); // U+5315
expect(() => {ms932Encoder.encode("\u5318")}).toThrowError({name:"TypeError",message:"EncodingError U+5318"});
expect([...ms932Encoder.encode("匙匚")].join(",")).toBe("141,250,153,183"); // U+5319
expect(() => {ms932Encoder.encode("\u531B")}).toThrowError({name:"TypeError",message:"EncodingError U+531B"});
expect(() => {ms932Encoder.encode("\u531C")}).toThrowError({name:"TypeError",message:"EncodingError U+531C"});
expect([...ms932Encoder.encode("匝")].join(",")).toBe("145,120"); // U+531D
expect(() => {ms932Encoder.encode("\u531E")}).toThrowError({name:"TypeError",message:"EncodingError U+531E"});
expect(() => {ms932Encoder.encode("\u531F")}).toThrowError({name:"TypeError",message:"EncodingError U+531F"});
expect([...ms932Encoder.encode("匠匡")].join(",")).toBe("143,160,139,167"); // U+5320
expect(() => {ms932Encoder.encode("\u5322")}).toThrowError({name:"TypeError",message:"EncodingError U+5322"});
expect([...ms932Encoder.encode("匣匤")].join(",")).toBe("153,184,250,139"); // U+5323
expect(() => {ms932Encoder.encode("\u5325")}).toThrowError({name:"TypeError",message:"EncodingError U+5325"});
expect(() => {ms932Encoder.encode("\u5326")}).toThrowError({name:"TypeError",message:"EncodingError U+5326"});
expect(() => {ms932Encoder.encode("\u5327")}).toThrowError({name:"TypeError",message:"EncodingError U+5327"});
expect(() => {ms932Encoder.encode("\u5328")}).toThrowError({name:"TypeError",message:"EncodingError U+5328"});
expect(() => {ms932Encoder.encode("\u5329")}).toThrowError({name:"TypeError",message:"EncodingError U+5329"});
expect([...ms932Encoder.encode("匪")].join(",")).toBe("148,217"); // U+532A
expect(() => {ms932Encoder.encode("\u532B")}).toThrowError({name:"TypeError",message:"EncodingError U+532B"});
expect(() => {ms932Encoder.encode("\u532C")}).toThrowError({name:"TypeError",message:"EncodingError U+532C"});
expect(() => {ms932Encoder.encode("\u532D")}).toThrowError({name:"TypeError",message:"EncodingError U+532D"});
expect(() => {ms932Encoder.encode("\u532E")}).toThrowError({name:"TypeError",message:"EncodingError U+532E"});
expect([...ms932Encoder.encode("匯")].join(",")).toBe("153,185"); // U+532F
expect(() => {ms932Encoder.encode("\u5330")}).toThrowError({name:"TypeError",message:"EncodingError U+5330"});
expect([...ms932Encoder.encode("匱")].join(",")).toBe("153,186"); // U+5331
expect(() => {ms932Encoder.encode("\u5332")}).toThrowError({name:"TypeError",message:"EncodingError U+5332"});
expect([...ms932Encoder.encode("匳")].join(",")).toBe("153,187"); // U+5333
expect(() => {ms932Encoder.encode("\u5334")}).toThrowError({name:"TypeError",message:"EncodingError U+5334"});
expect(() => {ms932Encoder.encode("\u5335")}).toThrowError({name:"TypeError",message:"EncodingError U+5335"});
expect(() => {ms932Encoder.encode("\u5336")}).toThrowError({name:"TypeError",message:"EncodingError U+5336"});
expect(() => {ms932Encoder.encode("\u5337")}).toThrowError({name:"TypeError",message:"EncodingError U+5337"});
expect([...ms932Encoder.encode("匸匹区医")].join(",")).toBe("153,188,149,67,139,230,136,227"); // U+5338
expect(() => {ms932Encoder.encode("\u533C")}).toThrowError({name:"TypeError",message:"EncodingError U+533C"});
expect(() => {ms932Encoder.encode("\u533D")}).toThrowError({name:"TypeError",message:"EncodingError U+533D"});
expect(() => {ms932Encoder.encode("\u533E")}).toThrowError({name:"TypeError",message:"EncodingError U+533E"});
expect([...ms932Encoder.encode("匿區十")].join(",")).toBe("147,189,153,189,143,92"); // U+533F
expect(() => {ms932Encoder.encode("\u5342")}).toThrowError({name:"TypeError",message:"EncodingError U+5342"});
expect([...ms932Encoder.encode("千")].join(",")).toBe("144,231"); // U+5343
expect(() => {ms932Encoder.encode("\u5344")}).toThrowError({name:"TypeError",message:"EncodingError U+5344"});
expect([...ms932Encoder.encode("卅卆升午卉半")].join(",")).toBe("153,191,153,190,143,161,140,223,153,193,148,188"); // U+5345
expect(() => {ms932Encoder.encode("\u534B")}).toThrowError({name:"TypeError",message:"EncodingError U+534B"});
expect(() => {ms932Encoder.encode("\u534C")}).toThrowError({name:"TypeError",message:"EncodingError U+534C"});
expect([...ms932Encoder.encode("卍")].join(",")).toBe("153,194"); // U+534D
expect(() => {ms932Encoder.encode("\u534E")}).toThrowError({name:"TypeError",message:"EncodingError U+534E"});
expect(() => {ms932Encoder.encode("\u534F")}).toThrowError({name:"TypeError",message:"EncodingError U+534F"});
expect(() => {ms932Encoder.encode("\u5350")}).toThrowError({name:"TypeError",message:"EncodingError U+5350"});
expect([...ms932Encoder.encode("卑卒卓協")].join(",")).toBe("148,218,145,178,145,236,139,166"); // U+5351
expect(() => {ms932Encoder.encode("\u5355")}).toThrowError({name:"TypeError",message:"EncodingError U+5355"});
expect(() => {ms932Encoder.encode("\u5356")}).toThrowError({name:"TypeError",message:"EncodingError U+5356"});
expect([...ms932Encoder.encode("南単")].join(",")).toBe("147,236,146,80"); // U+5357
expect(() => {ms932Encoder.encode("\u5359")}).toThrowError({name:"TypeError",message:"EncodingError U+5359"});
expect([...ms932Encoder.encode("博")].join(",")).toBe("148,142"); // U+535A
expect(() => {ms932Encoder.encode("\u535B")}).toThrowError({name:"TypeError",message:"EncodingError U+535B"});
expect([...ms932Encoder.encode("卜")].join(",")).toBe("150,109"); // U+535C
expect(() => {ms932Encoder.encode("\u535D")}).toThrowError({name:"TypeError",message:"EncodingError U+535D"});
expect([...ms932Encoder.encode("卞")].join(",")).toBe("153,196"); // U+535E
expect(() => {ms932Encoder.encode("\u535F")}).toThrowError({name:"TypeError",message:"EncodingError U+535F"});
expect([...ms932Encoder.encode("占")].join(",")).toBe("144,232"); // U+5360
expect(() => {ms932Encoder.encode("\u5361")}).toThrowError({name:"TypeError",message:"EncodingError U+5361"});
expect(() => {ms932Encoder.encode("\u5362")}).toThrowError({name:"TypeError",message:"EncodingError U+5362"});
expect(() => {ms932Encoder.encode("\u5363")}).toThrowError({name:"TypeError",message:"EncodingError U+5363"});
expect(() => {ms932Encoder.encode("\u5364")}).toThrowError({name:"TypeError",message:"EncodingError U+5364"});
expect(() => {ms932Encoder.encode("\u5365")}).toThrowError({name:"TypeError",message:"EncodingError U+5365"});
expect([...ms932Encoder.encode("卦")].join(",")).toBe("140,84"); // U+5366
expect(() => {ms932Encoder.encode("\u5367")}).toThrowError({name:"TypeError",message:"EncodingError U+5367"});
expect(() => {ms932Encoder.encode("\u5368")}).toThrowError({name:"TypeError",message:"EncodingError U+5368"});
expect([...ms932Encoder.encode("卩")].join(",")).toBe("153,197"); // U+5369
expect(() => {ms932Encoder.encode("\u536A")}).toThrowError({name:"TypeError",message:"EncodingError U+536A"});
expect(() => {ms932Encoder.encode("\u536B")}).toThrowError({name:"TypeError",message:"EncodingError U+536B"});
expect(() => {ms932Encoder.encode("\u536C")}).toThrowError({name:"TypeError",message:"EncodingError U+536C"});
expect(() => {ms932Encoder.encode("\u536D")}).toThrowError({name:"TypeError",message:"EncodingError U+536D"});
expect([...ms932Encoder.encode("卮卯印危卲即却卵")].join(",")).toBe("153,198,137,75,136,243,138,235,250,140,145,166,139,112,151,145"); // U+536E
expect(() => {ms932Encoder.encode("\u5376")}).toThrowError({name:"TypeError",message:"EncodingError U+5376"});
expect([...ms932Encoder.encode("卷卸")].join(",")).toBe("153,201,137,181"); // U+5377
expect(() => {ms932Encoder.encode("\u5379")}).toThrowError({name:"TypeError",message:"EncodingError U+5379"});
expect(() => {ms932Encoder.encode("\u537A")}).toThrowError({name:"TypeError",message:"EncodingError U+537A"});
expect([...ms932Encoder.encode("卻")].join(",")).toBe("153,200"); // U+537B
expect(() => {ms932Encoder.encode("\u537C")}).toThrowError({name:"TypeError",message:"EncodingError U+537C"});
expect(() => {ms932Encoder.encode("\u537D")}).toThrowError({name:"TypeError",message:"EncodingError U+537D"});
expect(() => {ms932Encoder.encode("\u537E")}).toThrowError({name:"TypeError",message:"EncodingError U+537E"});
expect([...ms932Encoder.encode("卿")].join(",")).toBe("139,168"); // U+537F
expect(() => {ms932Encoder.encode("\u5380")}).toThrowError({name:"TypeError",message:"EncodingError U+5380"});
expect(() => {ms932Encoder.encode("\u5381")}).toThrowError({name:"TypeError",message:"EncodingError U+5381"});
expect([...ms932Encoder.encode("厂")].join(",")).toBe("153,202"); // U+5382
expect(() => {ms932Encoder.encode("\u5383")}).toThrowError({name:"TypeError",message:"EncodingError U+5383"});
expect([...ms932Encoder.encode("厄")].join(",")).toBe("150,239"); // U+5384
expect(() => {ms932Encoder.encode("\u5385")}).toThrowError({name:"TypeError",message:"EncodingError U+5385"});
expect(() => {ms932Encoder.encode("\u5386")}).toThrowError({name:"TypeError",message:"EncodingError U+5386"});
expect(() => {ms932Encoder.encode("\u5387")}).toThrowError({name:"TypeError",message:"EncodingError U+5387"});
expect(() => {ms932Encoder.encode("\u5388")}).toThrowError({name:"TypeError",message:"EncodingError U+5388"});
expect(() => {ms932Encoder.encode("\u5389")}).toThrowError({name:"TypeError",message:"EncodingError U+5389"});
expect(() => {ms932Encoder.encode("\u538A")}).toThrowError({name:"TypeError",message:"EncodingError U+538A"});
expect(() => {ms932Encoder.encode("\u538B")}).toThrowError({name:"TypeError",message:"EncodingError U+538B"});
expect(() => {ms932Encoder.encode("\u538C")}).toThrowError({name:"TypeError",message:"EncodingError U+538C"});
expect(() => {ms932Encoder.encode("\u538D")}).toThrowError({name:"TypeError",message:"EncodingError U+538D"});
expect(() => {ms932Encoder.encode("\u538E")}).toThrowError({name:"TypeError",message:"EncodingError U+538E"});
expect(() => {ms932Encoder.encode("\u538F")}).toThrowError({name:"TypeError",message:"EncodingError U+538F"});
expect(() => {ms932Encoder.encode("\u5390")}).toThrowError({name:"TypeError",message:"EncodingError U+5390"});
expect(() => {ms932Encoder.encode("\u5391")}).toThrowError({name:"TypeError",message:"EncodingError U+5391"});
expect(() => {ms932Encoder.encode("\u5392")}).toThrowError({name:"TypeError",message:"EncodingError U+5392"});
expect([...ms932Encoder.encode("厓")].join(",")).toBe("250,141"); // U+5393
expect(() => {ms932Encoder.encode("\u5394")}).toThrowError({name:"TypeError",message:"EncodingError U+5394"});
expect(() => {ms932Encoder.encode("\u5395")}).toThrowError({name:"TypeError",message:"EncodingError U+5395"});
expect([...ms932Encoder.encode("厖")].join(",")).toBe("153,203"); // U+5396
expect(() => {ms932Encoder.encode("\u5397")}).toThrowError({name:"TypeError",message:"EncodingError U+5397"});
expect([...ms932Encoder.encode("厘")].join(",")).toBe("151,208"); // U+5398
expect(() => {ms932Encoder.encode("\u5399")}).toThrowError({name:"TypeError",message:"EncodingError U+5399"});
expect([...ms932Encoder.encode("厚")].join(",")).toBe("140,250"); // U+539A
expect(() => {ms932Encoder.encode("\u539B")}).toThrowError({name:"TypeError",message:"EncodingError U+539B"});
expect(() => {ms932Encoder.encode("\u539C")}).toThrowError({name:"TypeError",message:"EncodingError U+539C"});
expect(() => {ms932Encoder.encode("\u539D")}).toThrowError({name:"TypeError",message:"EncodingError U+539D"});
expect(() => {ms932Encoder.encode("\u539E")}).toThrowError({name:"TypeError",message:"EncodingError U+539E"});
expect([...ms932Encoder.encode("原厠")].join(",")).toBe("140,180,153,204"); // U+539F
expect(() => {ms932Encoder.encode("\u53A1")}).toThrowError({name:"TypeError",message:"EncodingError U+53A1"});
expect(() => {ms932Encoder.encode("\u53A2")}).toThrowError({name:"TypeError",message:"EncodingError U+53A2"});
expect(() => {ms932Encoder.encode("\u53A3")}).toThrowError({name:"TypeError",message:"EncodingError U+53A3"});
expect(() => {ms932Encoder.encode("\u53A4")}).toThrowError({name:"TypeError",message:"EncodingError U+53A4"});
expect([...ms932Encoder.encode("厥厦")].join(",")).toBe("153,206,153,205"); // U+53A5
expect(() => {ms932Encoder.encode("\u53A7")}).toThrowError({name:"TypeError",message:"EncodingError U+53A7"});
expect([...ms932Encoder.encode("厨厩")].join(",")).toBe("144,126,137,88"); // U+53A8
expect(() => {ms932Encoder.encode("\u53AA")}).toThrowError({name:"TypeError",message:"EncodingError U+53AA"});
expect(() => {ms932Encoder.encode("\u53AB")}).toThrowError({name:"TypeError",message:"EncodingError U+53AB"});
expect(() => {ms932Encoder.encode("\u53AC")}).toThrowError({name:"TypeError",message:"EncodingError U+53AC"});
expect([...ms932Encoder.encode("厭厮")].join(",")).toBe("137,125,153,207"); // U+53AD
expect(() => {ms932Encoder.encode("\u53AF")}).toThrowError({name:"TypeError",message:"EncodingError U+53AF"});
expect([...ms932Encoder.encode("厰")].join(",")).toBe("153,208"); // U+53B0
expect(() => {ms932Encoder.encode("\u53B1")}).toThrowError({name:"TypeError",message:"EncodingError U+53B1"});
expect([...ms932Encoder.encode("厲厳")].join(",")).toBe("250,142,140,181"); // U+53B2
expect(() => {ms932Encoder.encode("\u53B4")}).toThrowError({name:"TypeError",message:"EncodingError U+53B4"});
expect(() => {ms932Encoder.encode("\u53B5")}).toThrowError({name:"TypeError",message:"EncodingError U+53B5"});
expect([...ms932Encoder.encode("厶")].join(",")).toBe("153,209"); // U+53B6
expect(() => {ms932Encoder.encode("\u53B7")}).toThrowError({name:"TypeError",message:"EncodingError U+53B7"});
expect(() => {ms932Encoder.encode("\u53B8")}).toThrowError({name:"TypeError",message:"EncodingError U+53B8"});
expect(() => {ms932Encoder.encode("\u53B9")}).toThrowError({name:"TypeError",message:"EncodingError U+53B9"});
expect(() => {ms932Encoder.encode("\u53BA")}).toThrowError({name:"TypeError",message:"EncodingError U+53BA"});
expect([...ms932Encoder.encode("去")].join(",")).toBe("139,142"); // U+53BB
expect(() => {ms932Encoder.encode("\u53BC")}).toThrowError({name:"TypeError",message:"EncodingError U+53BC"});
expect(() => {ms932Encoder.encode("\u53BD")}).toThrowError({name:"TypeError",message:"EncodingError U+53BD"});
expect(() => {ms932Encoder.encode("\u53BE")}).toThrowError({name:"TypeError",message:"EncodingError U+53BE"});
expect(() => {ms932Encoder.encode("\u53BF")}).toThrowError({name:"TypeError",message:"EncodingError U+53BF"});
expect(() => {ms932Encoder.encode("\u53C0")}).toThrowError({name:"TypeError",message:"EncodingError U+53C0"});
expect(() => {ms932Encoder.encode("\u53C1")}).toThrowError({name:"TypeError",message:"EncodingError U+53C1"});
expect([...ms932Encoder.encode("参參")].join(",")).toBe("142,81,153,210"); // U+53C2
expect(() => {ms932Encoder.encode("\u53C4")}).toThrowError({name:"TypeError",message:"EncodingError U+53C4"});
expect(() => {ms932Encoder.encode("\u53C5")}).toThrowError({name:"TypeError",message:"EncodingError U+53C5"});
expect(() => {ms932Encoder.encode("\u53C6")}).toThrowError({name:"TypeError",message:"EncodingError U+53C6"});
expect(() => {ms932Encoder.encode("\u53C7")}).toThrowError({name:"TypeError",message:"EncodingError U+53C7"});
expect([...ms932Encoder.encode("又叉及友双反収")].join(",")).toBe("150,148,141,179,139,121,151,70,145,111,148,189,142,251"); // U+53C8
expect(() => {ms932Encoder.encode("\u53CF")}).toThrowError({name:"TypeError",message:"EncodingError U+53CF"});
expect(() => {ms932Encoder.encode("\u53D0")}).toThrowError({name:"TypeError",message:"EncodingError U+53D0"});
expect(() => {ms932Encoder.encode("\u53D1")}).toThrowError({name:"TypeError",message:"EncodingError U+53D1"});
expect(() => {ms932Encoder.encode("\u53D2")}).toThrowError({name:"TypeError",message:"EncodingError U+53D2"});
expect(() => {ms932Encoder.encode("\u53D3")}).toThrowError({name:"TypeError",message:"EncodingError U+53D3"});
expect([...ms932Encoder.encode("叔")].join(",")).toBe("143,102"); // U+53D4
expect(() => {ms932Encoder.encode("\u53D5")}).toThrowError({name:"TypeError",message:"EncodingError U+53D5"});
expect([...ms932Encoder.encode("取受")].join(",")).toBe("142,230,142,243"); // U+53D6
expect(() => {ms932Encoder.encode("\u53D8")}).toThrowError({name:"TypeError",message:"EncodingError U+53D8"});
expect([...ms932Encoder.encode("叙")].join(",")).toBe("143,150"); // U+53D9
expect(() => {ms932Encoder.encode("\u53DA")}).toThrowError({name:"TypeError",message:"EncodingError U+53DA"});
expect([...ms932Encoder.encode("叛")].join(",")).toBe("148,190"); // U+53DB
expect(() => {ms932Encoder.encode("\u53DC")}).toThrowError({name:"TypeError",message:"EncodingError U+53DC"});
expect([...ms932Encoder.encode("叝")].join(",")).toBe("250,143"); // U+53DD
expect(() => {ms932Encoder.encode("\u53DE")}).toThrowError({name:"TypeError",message:"EncodingError U+53DE"});
expect([...ms932Encoder.encode("叟")].join(",")).toBe("153,213"); // U+53DF
expect(() => {ms932Encoder.encode("\u53E0")}).toThrowError({name:"TypeError",message:"EncodingError U+53E0"});
expect([...ms932Encoder.encode("叡叢口古句")].join(",")).toBe("137,98,145,112,140,251,140,195,139,229"); // U+53E1
expect(() => {ms932Encoder.encode("\u53E6")}).toThrowError({name:"TypeError",message:"EncodingError U+53E6"});
expect(() => {ms932Encoder.encode("\u53E7")}).toThrowError({name:"TypeError",message:"EncodingError U+53E7"});
expect([...ms932Encoder.encode("叨叩只叫召叭叮可台叱史右")].join(",")).toBe("153,217,146,64,145,252,139,169,143,162,153,218,153,216,137,194,145,228,142,182,142,106,137,69"); // U+53E8
expect(() => {ms932Encoder.encode("\u53F4")}).toThrowError({name:"TypeError",message:"EncodingError U+53F4"});
expect(() => {ms932Encoder.encode("\u53F5")}).toThrowError({name:"TypeError",message:"EncodingError U+53F5"});
expect([...ms932Encoder.encode("叶号司")].join(",")).toBe("138,144,141,134,142,105"); // U+53F6
expect(() => {ms932Encoder.encode("\u53F9")}).toThrowError({name:"TypeError",message:"EncodingError U+53F9"});
expect([...ms932Encoder.encode("叺")].join(",")).toBe("153,219"); // U+53FA
expect(() => {ms932Encoder.encode("\u53FB")}).toThrowError({name:"TypeError",message:"EncodingError U+53FB"});
expect(() => {ms932Encoder.encode("\u53FC")}).toThrowError({name:"TypeError",message:"EncodingError U+53FC"});
expect(() => {ms932Encoder.encode("\u53FD")}).toThrowError({name:"TypeError",message:"EncodingError U+53FD"});
expect(() => {ms932Encoder.encode("\u53FE")}).toThrowError({name:"TypeError",message:"EncodingError U+53FE"});
expect(() => {ms932Encoder.encode("\u53FF")}).toThrowError({name:"TypeError",message:"EncodingError U+53FF"});
expect(() => {ms932Encoder.encode("\u5400")}).toThrowError({name:"TypeError",message:"EncodingError U+5400"});
expect([...ms932Encoder.encode("吁")].join(",")).toBe("153,220"); // U+5401
expect(() => {ms932Encoder.encode("\u5402")}).toThrowError({name:"TypeError",message:"EncodingError U+5402"});
expect([...ms932Encoder.encode("吃各")].join(",")).toBe("139,104,138,101"); // U+5403
expect(() => {ms932Encoder.encode("\u5405")}).toThrowError({name:"TypeError",message:"EncodingError U+5405"});
expect(() => {ms932Encoder.encode("\u5406")}).toThrowError({name:"TypeError",message:"EncodingError U+5406"});
expect(() => {ms932Encoder.encode("\u5407")}).toThrowError({name:"TypeError",message:"EncodingError U+5407"});
expect([...ms932Encoder.encode("合吉吊吋同名后吏吐向")].join(",")).toBe("141,135,139,103,146,221,137,68,147,175,150,188,141,64,151,153,147,102,140,252"); // U+5408
expect(() => {ms932Encoder.encode("\u5412")}).toThrowError({name:"TypeError",message:"EncodingError U+5412"});
expect(() => {ms932Encoder.encode("\u5413")}).toThrowError({name:"TypeError",message:"EncodingError U+5413"});
expect(() => {ms932Encoder.encode("\u5414")}).toThrowError({name:"TypeError",message:"EncodingError U+5414"});
expect(() => {ms932Encoder.encode("\u5415")}).toThrowError({name:"TypeError",message:"EncodingError U+5415"});
expect(() => {ms932Encoder.encode("\u5416")}).toThrowError({name:"TypeError",message:"EncodingError U+5416"});
expect(() => {ms932Encoder.encode("\u5417")}).toThrowError({name:"TypeError",message:"EncodingError U+5417"});
expect(() => {ms932Encoder.encode("\u5418")}).toThrowError({name:"TypeError",message:"EncodingError U+5418"});
expect(() => {ms932Encoder.encode("\u5419")}).toThrowError({name:"TypeError",message:"EncodingError U+5419"});
expect(() => {ms932Encoder.encode("\u541A")}).toThrowError({name:"TypeError",message:"EncodingError U+541A"});
expect([...ms932Encoder.encode("君")].join(",")).toBe("140,78"); // U+541B
expect(() => {ms932Encoder.encode("\u541C")}).toThrowError({name:"TypeError",message:"EncodingError U+541C"});
expect([...ms932Encoder.encode("吝")].join(",")).toBe("153,229"); // U+541D
expect(() => {ms932Encoder.encode("\u541E")}).toThrowError({name:"TypeError",message:"EncodingError U+541E"});
expect([...ms932Encoder.encode("吟吠")].join(",")).toBe("139,225,150,105"); // U+541F
expect(() => {ms932Encoder.encode("\u5421")}).toThrowError({name:"TypeError",message:"EncodingError U+5421"});
expect(() => {ms932Encoder.encode("\u5422")}).toThrowError({name:"TypeError",message:"EncodingError U+5422"});
expect(() => {ms932Encoder.encode("\u5423")}).toThrowError({name:"TypeError",message:"EncodingError U+5423"});
expect(() => {ms932Encoder.encode("\u5424")}).toThrowError({name:"TypeError",message:"EncodingError U+5424"});
expect(() => {ms932Encoder.encode("\u5425")}).toThrowError({name:"TypeError",message:"EncodingError U+5425"});
expect([...ms932Encoder.encode("否")].join(",")).toBe("148,219"); // U+5426
expect(() => {ms932Encoder.encode("\u5427")}).toThrowError({name:"TypeError",message:"EncodingError U+5427"});
expect(() => {ms932Encoder.encode("\u5428")}).toThrowError({name:"TypeError",message:"EncodingError U+5428"});
expect([...ms932Encoder.encode("吩")].join(",")).toBe("153,228"); // U+5429
expect(() => {ms932Encoder.encode("\u542A")}).toThrowError({name:"TypeError",message:"EncodingError U+542A"});
expect([...ms932Encoder.encode("含听吭吮")].join(",")).toBe("138,220,153,223,153,224,153,226"); // U+542B
expect(() => {ms932Encoder.encode("\u542F")}).toThrowError({name:"TypeError",message:"EncodingError U+542F"});
expect(() => {ms932Encoder.encode("\u5430")}).toThrowError({name:"TypeError",message:"EncodingError U+5430"});
expect(() => {ms932Encoder.encode("\u5431")}).toThrowError({name:"TypeError",message:"EncodingError U+5431"});
expect(() => {ms932Encoder.encode("\u5432")}).toThrowError({name:"TypeError",message:"EncodingError U+5432"});
expect(() => {ms932Encoder.encode("\u5433")}).toThrowError({name:"TypeError",message:"EncodingError U+5433"});
expect(() => {ms932Encoder.encode("\u5434")}).toThrowError({name:"TypeError",message:"EncodingError U+5434"});
expect(() => {ms932Encoder.encode("\u5435")}).toThrowError({name:"TypeError",message:"EncodingError U+5435"});
expect([...ms932Encoder.encode("吶")].join(",")).toBe("153,227"); // U+5436
expect(() => {ms932Encoder.encode("\u5437")}).toThrowError({name:"TypeError",message:"EncodingError U+5437"});
expect([...ms932Encoder.encode("吸吹")].join(",")).toBe("139,122,144,129"); // U+5438
expect(() => {ms932Encoder.encode("\u543A")}).toThrowError({name:"TypeError",message:"EncodingError U+543A"});
expect([...ms932Encoder.encode("吻吼吽吾")].join(",")).toBe("149,171,153,225,153,221,140,225"); // U+543B
expect(() => {ms932Encoder.encode("\u543F")}).toThrowError({name:"TypeError",message:"EncodingError U+543F"});
expect([...ms932Encoder.encode("呀")].join(",")).toBe("153,222"); // U+5440
expect(() => {ms932Encoder.encode("\u5441")}).toThrowError({name:"TypeError",message:"EncodingError U+5441"});
expect([...ms932Encoder.encode("呂")].join(",")).toBe("152,67"); // U+5442
expect(() => {ms932Encoder.encode("\u5443")}).toThrowError({name:"TypeError",message:"EncodingError U+5443"});
expect(() => {ms932Encoder.encode("\u5444")}).toThrowError({name:"TypeError",message:"EncodingError U+5444"});
expect(() => {ms932Encoder.encode("\u5445")}).toThrowError({name:"TypeError",message:"EncodingError U+5445"});
expect([...ms932Encoder.encode("呆")].join(",")).toBe("149,240"); // U+5446
expect(() => {ms932Encoder.encode("\u5447")}).toThrowError({name:"TypeError",message:"EncodingError U+5447"});
expect([...ms932Encoder.encode("呈呉告")].join(",")).toBe("146,230,140,224,141,144"); // U+5448
expect(() => {ms932Encoder.encode("\u544B")}).toThrowError({name:"TypeError",message:"EncodingError U+544B"});
expect(() => {ms932Encoder.encode("\u544C")}).toThrowError({name:"TypeError",message:"EncodingError U+544C"});
expect(() => {ms932Encoder.encode("\u544D")}).toThrowError({name:"TypeError",message:"EncodingError U+544D"});
expect([...ms932Encoder.encode("呎")].join(",")).toBe("153,230"); // U+544E
expect(() => {ms932Encoder.encode("\u544F")}).toThrowError({name:"TypeError",message:"EncodingError U+544F"});
expect(() => {ms932Encoder.encode("\u5450")}).toThrowError({name:"TypeError",message:"EncodingError U+5450"});
expect([...ms932Encoder.encode("呑")].join(",")).toBe("147,219"); // U+5451
expect(() => {ms932Encoder.encode("\u5452")}).toThrowError({name:"TypeError",message:"EncodingError U+5452"});
expect(() => {ms932Encoder.encode("\u5453")}).toThrowError({name:"TypeError",message:"EncodingError U+5453"});
expect(() => {ms932Encoder.encode("\u5454")}).toThrowError({name:"TypeError",message:"EncodingError U+5454"});
expect(() => {ms932Encoder.encode("\u5455")}).toThrowError({name:"TypeError",message:"EncodingError U+5455"});
expect(() => {ms932Encoder.encode("\u5456")}).toThrowError({name:"TypeError",message:"EncodingError U+5456"});
expect(() => {ms932Encoder.encode("\u5457")}).toThrowError({name:"TypeError",message:"EncodingError U+5457"});
expect(() => {ms932Encoder.encode("\u5458")}).toThrowError({name:"TypeError",message:"EncodingError U+5458"});
expect(() => {ms932Encoder.encode("\u5459")}).toThrowError({name:"TypeError",message:"EncodingError U+5459"});
expect(() => {ms932Encoder.encode("\u545A")}).toThrowError({name:"TypeError",message:"EncodingError U+545A"});
expect(() => {ms932Encoder.encode("\u545B")}).toThrowError({name:"TypeError",message:"EncodingError U+545B"});
expect(() => {ms932Encoder.encode("\u545C")}).toThrowError({name:"TypeError",message:"EncodingError U+545C"});
expect(() => {ms932Encoder.encode("\u545D")}).toThrowError({name:"TypeError",message:"EncodingError U+545D"});
expect(() => {ms932Encoder.encode("\u545E")}).toThrowError({name:"TypeError",message:"EncodingError U+545E"});
expect([...ms932Encoder.encode("呟")].join(",")).toBe("153,234"); // U+545F
expect(() => {ms932Encoder.encode("\u5460")}).toThrowError({name:"TypeError",message:"EncodingError U+5460"});
expect(() => {ms932Encoder.encode("\u5461")}).toThrowError({name:"TypeError",message:"EncodingError U+5461"});
expect(() => {ms932Encoder.encode("\u5462")}).toThrowError({name:"TypeError",message:"EncodingError U+5462"});
expect(() => {ms932Encoder.encode("\u5463")}).toThrowError({name:"TypeError",message:"EncodingError U+5463"});
expect(() => {ms932Encoder.encode("\u5464")}).toThrowError({name:"TypeError",message:"EncodingError U+5464"});
expect(() => {ms932Encoder.encode("\u5465")}).toThrowError({name:"TypeError",message:"EncodingError U+5465"});
expect(() => {ms932Encoder.encode("\u5466")}).toThrowError({name:"TypeError",message:"EncodingError U+5466"});
expect(() => {ms932Encoder.encode("\u5467")}).toThrowError({name:"TypeError",message:"EncodingError U+5467"});
expect([...ms932Encoder.encode("周")].join(",")).toBe("142,252"); // U+5468
expect(() => {ms932Encoder.encode("\u5469")}).toThrowError({name:"TypeError",message:"EncodingError U+5469"});
expect([...ms932Encoder.encode("呪")].join(",")).toBe("142,244"); // U+546A
expect(() => {ms932Encoder.encode("\u546B")}).toThrowError({name:"TypeError",message:"EncodingError U+546B"});
expect(() => {ms932Encoder.encode("\u546C")}).toThrowError({name:"TypeError",message:"EncodingError U+546C"});
expect(() => {ms932Encoder.encode("\u546D")}).toThrowError({name:"TypeError",message:"EncodingError U+546D"});
expect(() => {ms932Encoder.encode("\u546E")}).toThrowError({name:"TypeError",message:"EncodingError U+546E"});
expect(() => {ms932Encoder.encode("\u546F")}).toThrowError({name:"TypeError",message:"EncodingError U+546F"});
expect([...ms932Encoder.encode("呰呱")].join(",")).toBe("153,237,153,235"); // U+5470
expect(() => {ms932Encoder.encode("\u5472")}).toThrowError({name:"TypeError",message:"EncodingError U+5472"});
expect([...ms932Encoder.encode("味")].join(",")).toBe("150,161"); // U+5473
expect(() => {ms932Encoder.encode("\u5474")}).toThrowError({name:"TypeError",message:"EncodingError U+5474"});
expect([...ms932Encoder.encode("呵呶呷")].join(",")).toBe("153,232,153,241,153,236"); // U+5475
expect(() => {ms932Encoder.encode("\u5478")}).toThrowError({name:"TypeError",message:"EncodingError U+5478"});
expect(() => {ms932Encoder.encode("\u5479")}).toThrowError({name:"TypeError",message:"EncodingError U+5479"});
expect(() => {ms932Encoder.encode("\u547A")}).toThrowError({name:"TypeError",message:"EncodingError U+547A"});
expect([...ms932Encoder.encode("呻呼命")].join(",")).toBe("153,239,140,196,150,189"); // U+547B
expect(() => {ms932Encoder.encode("\u547E")}).toThrowError({name:"TypeError",message:"EncodingError U+547E"});
expect(() => {ms932Encoder.encode("\u547F")}).toThrowError({name:"TypeError",message:"EncodingError U+547F"});
expect([...ms932Encoder.encode("咀")].join(",")).toBe("153,240"); // U+5480
expect(() => {ms932Encoder.encode("\u5481")}).toThrowError({name:"TypeError",message:"EncodingError U+5481"});
expect(() => {ms932Encoder.encode("\u5482")}).toThrowError({name:"TypeError",message:"EncodingError U+5482"});
expect(() => {ms932Encoder.encode("\u5483")}).toThrowError({name:"TypeError",message:"EncodingError U+5483"});
expect([...ms932Encoder.encode("咄")].join(",")).toBe("153,242"); // U+5484
expect(() => {ms932Encoder.encode("\u5485")}).toThrowError({name:"TypeError",message:"EncodingError U+5485"});
expect([...ms932Encoder.encode("咆")].join(",")).toBe("153,244"); // U+5486
expect(() => {ms932Encoder.encode("\u5487")}).toThrowError({name:"TypeError",message:"EncodingError U+5487"});
expect(() => {ms932Encoder.encode("\u5488")}).toThrowError({name:"TypeError",message:"EncodingError U+5488"});
expect(() => {ms932Encoder.encode("\u5489")}).toThrowError({name:"TypeError",message:"EncodingError U+5489"});
expect([...ms932Encoder.encode("咊咋和")].join(",")).toBe("250,146,141,238,152,97"); // U+548A
expect(() => {ms932Encoder.encode("\u548D")}).toThrowError({name:"TypeError",message:"EncodingError U+548D"});
expect([...ms932Encoder.encode("咎咏咐")].join(",")).toBe("153,233,153,231,153,243"); // U+548E
expect(() => {ms932Encoder.encode("\u5491")}).toThrowError({name:"TypeError",message:"EncodingError U+5491"});
expect([...ms932Encoder.encode("咒")].join(",")).toBe("153,238"); // U+5492
expect(() => {ms932Encoder.encode("\u5493")}).toThrowError({name:"TypeError",message:"EncodingError U+5493"});
expect(() => {ms932Encoder.encode("\u5494")}).toThrowError({name:"TypeError",message:"EncodingError U+5494"});
expect(() => {ms932Encoder.encode("\u5495")}).toThrowError({name:"TypeError",message:"EncodingError U+5495"});
expect(() => {ms932Encoder.encode("\u5496")}).toThrowError({name:"TypeError",message:"EncodingError U+5496"});
expect(() => {ms932Encoder.encode("\u5497")}).toThrowError({name:"TypeError",message:"EncodingError U+5497"});
expect(() => {ms932Encoder.encode("\u5498")}).toThrowError({name:"TypeError",message:"EncodingError U+5498"});
expect(() => {ms932Encoder.encode("\u5499")}).toThrowError({name:"TypeError",message:"EncodingError U+5499"});
expect(() => {ms932Encoder.encode("\u549A")}).toThrowError({name:"TypeError",message:"EncodingError U+549A"});
expect(() => {ms932Encoder.encode("\u549B")}).toThrowError({name:"TypeError",message:"EncodingError U+549B"});
expect([...ms932Encoder.encode("咜")].join(",")).toBe("250,145"); // U+549C
expect(() => {ms932Encoder.encode("\u549D")}).toThrowError({name:"TypeError",message:"EncodingError U+549D"});
expect(() => {ms932Encoder.encode("\u549E")}).toThrowError({name:"TypeError",message:"EncodingError U+549E"});
expect(() => {ms932Encoder.encode("\u549F")}).toThrowError({name:"TypeError",message:"EncodingError U+549F"});
expect(() => {ms932Encoder.encode("\u54A0")}).toThrowError({name:"TypeError",message:"EncodingError U+54A0"});
expect(() => {ms932Encoder.encode("\u54A1")}).toThrowError({name:"TypeError",message:"EncodingError U+54A1"});
expect([...ms932Encoder.encode("咢")].join(",")).toBe("153,246"); // U+54A2
expect(() => {ms932Encoder.encode("\u54A3")}).toThrowError({name:"TypeError",message:"EncodingError U+54A3"});
expect([...ms932Encoder.encode("咤咥")].join(",")).toBe("154,66,153,248"); // U+54A4
expect(() => {ms932Encoder.encode("\u54A6")}).toThrowError({name:"TypeError",message:"EncodingError U+54A6"});
expect(() => {ms932Encoder.encode("\u54A7")}).toThrowError({name:"TypeError",message:"EncodingError U+54A7"});
expect([...ms932Encoder.encode("咨咩")].join(",")).toBe("153,252,250,147"); // U+54A8
expect(() => {ms932Encoder.encode("\u54AA")}).toThrowError({name:"TypeError",message:"EncodingError U+54AA"});
expect([...ms932Encoder.encode("咫咬")].join(",")).toBe("154,64,153,249"); // U+54AB
expect(() => {ms932Encoder.encode("\u54AD")}).toThrowError({name:"TypeError",message:"EncodingError U+54AD"});
expect(() => {ms932Encoder.encode("\u54AE")}).toThrowError({name:"TypeError",message:"EncodingError U+54AE"});
expect([...ms932Encoder.encode("咯")].join(",")).toBe("154,93"); // U+54AF
expect(() => {ms932Encoder.encode("\u54B0")}).toThrowError({name:"TypeError",message:"EncodingError U+54B0"});
expect(() => {ms932Encoder.encode("\u54B1")}).toThrowError({name:"TypeError",message:"EncodingError U+54B1"});
expect([...ms932Encoder.encode("咲咳")].join(",")).toBe("141,231,138,80"); // U+54B2
expect(() => {ms932Encoder.encode("\u54B4")}).toThrowError({name:"TypeError",message:"EncodingError U+54B4"});
expect(() => {ms932Encoder.encode("\u54B5")}).toThrowError({name:"TypeError",message:"EncodingError U+54B5"});
expect(() => {ms932Encoder.encode("\u54B6")}).toThrowError({name:"TypeError",message:"EncodingError U+54B6"});
expect(() => {ms932Encoder.encode("\u54B7")}).toThrowError({name:"TypeError",message:"EncodingError U+54B7"});
expect([...ms932Encoder.encode("咸")].join(",")).toBe("153,247"); // U+54B8
expect(() => {ms932Encoder.encode("\u54B9")}).toThrowError({name:"TypeError",message:"EncodingError U+54B9"});
expect(() => {ms932Encoder.encode("\u54BA")}).toThrowError({name:"TypeError",message:"EncodingError U+54BA"});
expect(() => {ms932Encoder.encode("\u54BB")}).toThrowError({name:"TypeError",message:"EncodingError U+54BB"});
expect([...ms932Encoder.encode("咼咽咾")].join(",")).toBe("154,68,136,244,154,67"); // U+54BC
expect(() => {ms932Encoder.encode("\u54BF")}).toThrowError({name:"TypeError",message:"EncodingError U+54BF"});
expect([...ms932Encoder.encode("哀品哂")].join(",")).toBe("136,163,149,105,154,65"); // U+54C0
expect(() => {ms932Encoder.encode("\u54C3")}).toThrowError({name:"TypeError",message:"EncodingError U+54C3"});
expect([...ms932Encoder.encode("哄")].join(",")).toBe("153,250"); // U+54C4
expect(() => {ms932Encoder.encode("\u54C5")}).toThrowError({name:"TypeError",message:"EncodingError U+54C5"});
expect(() => {ms932Encoder.encode("\u54C6")}).toThrowError({name:"TypeError",message:"EncodingError U+54C6"});
expect([...ms932Encoder.encode("哇哈哉")].join(",")).toBe("153,245,153,251,141,198"); // U+54C7
expect(() => {ms932Encoder.encode("\u54CA")}).toThrowError({name:"TypeError",message:"EncodingError U+54CA"});
expect(() => {ms932Encoder.encode("\u54CB")}).toThrowError({name:"TypeError",message:"EncodingError U+54CB"});
expect(() => {ms932Encoder.encode("\u54CC")}).toThrowError({name:"TypeError",message:"EncodingError U+54CC"});
expect(() => {ms932Encoder.encode("\u54CD")}).toThrowError({name:"TypeError",message:"EncodingError U+54CD"});
expect(() => {ms932Encoder.encode("\u54CE")}).toThrowError({name:"TypeError",message:"EncodingError U+54CE"});
expect(() => {ms932Encoder.encode("\u54CF")}).toThrowError({name:"TypeError",message:"EncodingError U+54CF"});
expect(() => {ms932Encoder.encode("\u54D0")}).toThrowError({name:"TypeError",message:"EncodingError U+54D0"});
expect(() => {ms932Encoder.encode("\u54D1")}).toThrowError({name:"TypeError",message:"EncodingError U+54D1"});
expect(() => {ms932Encoder.encode("\u54D2")}).toThrowError({name:"TypeError",message:"EncodingError U+54D2"});
expect(() => {ms932Encoder.encode("\u54D3")}).toThrowError({name:"TypeError",message:"EncodingError U+54D3"});
expect(() => {ms932Encoder.encode("\u54D4")}).toThrowError({name:"TypeError",message:"EncodingError U+54D4"});
expect(() => {ms932Encoder.encode("\u54D5")}).toThrowError({name:"TypeError",message:"EncodingError U+54D5"});
expect(() => {ms932Encoder.encode("\u54D6")}).toThrowError({name:"TypeError",message:"EncodingError U+54D6"});
expect(() => {ms932Encoder.encode("\u54D7")}).toThrowError({name:"TypeError",message:"EncodingError U+54D7"});
expect([...ms932Encoder.encode("哘")].join(",")).toBe("154,69"); // U+54D8
expect(() => {ms932Encoder.encode("\u54D9")}).toThrowError({name:"TypeError",message:"EncodingError U+54D9"});
expect(() => {ms932Encoder.encode("\u54DA")}).toThrowError({name:"TypeError",message:"EncodingError U+54DA"});
expect(() => {ms932Encoder.encode("\u54DB")}).toThrowError({name:"TypeError",message:"EncodingError U+54DB"});
expect(() => {ms932Encoder.encode("\u54DC")}).toThrowError({name:"TypeError",message:"EncodingError U+54DC"});
expect(() => {ms932Encoder.encode("\u54DD")}).toThrowError({name:"TypeError",message:"EncodingError U+54DD"});
expect(() => {ms932Encoder.encode("\u54DE")}).toThrowError({name:"TypeError",message:"EncodingError U+54DE"});
expect(() => {ms932Encoder.encode("\u54DF")}).toThrowError({name:"TypeError",message:"EncodingError U+54DF"});
expect(() => {ms932Encoder.encode("\u54E0")}).toThrowError({name:"TypeError",message:"EncodingError U+54E0"});
expect([...ms932Encoder.encode("員哢")].join(",")).toBe("136,245,154,78"); // U+54E1
expect(() => {ms932Encoder.encode("\u54E3")}).toThrowError({name:"TypeError",message:"EncodingError U+54E3"});
expect(() => {ms932Encoder.encode("\u54E4")}).toThrowError({name:"TypeError",message:"EncodingError U+54E4"});
expect([...ms932Encoder.encode("哥哦")].join(",")).toBe("154,70,154,71"); // U+54E5
expect(() => {ms932Encoder.encode("\u54E7")}).toThrowError({name:"TypeError",message:"EncodingError U+54E7"});
expect([...ms932Encoder.encode("哨哩")].join(",")).toBe("143,163,150,137"); // U+54E8
expect(() => {ms932Encoder.encode("\u54EA")}).toThrowError({name:"TypeError",message:"EncodingError U+54EA"});
expect(() => {ms932Encoder.encode("\u54EB")}).toThrowError({name:"TypeError",message:"EncodingError U+54EB"});
expect(() => {ms932Encoder.encode("\u54EC")}).toThrowError({name:"TypeError",message:"EncodingError U+54EC"});
expect([...ms932Encoder.encode("哭哮")].join(",")).toBe("154,76,154,75"); // U+54ED
expect(() => {ms932Encoder.encode("\u54EF")}).toThrowError({name:"TypeError",message:"EncodingError U+54EF"});
expect(() => {ms932Encoder.encode("\u54F0")}).toThrowError({name:"TypeError",message:"EncodingError U+54F0"});
expect(() => {ms932Encoder.encode("\u54F1")}).toThrowError({name:"TypeError",message:"EncodingError U+54F1"});
expect([...ms932Encoder.encode("哲")].join(",")).toBe("147,78"); // U+54F2
expect(() => {ms932Encoder.encode("\u54F3")}).toThrowError({name:"TypeError",message:"EncodingError U+54F3"});
expect(() => {ms932Encoder.encode("\u54F4")}).toThrowError({name:"TypeError",message:"EncodingError U+54F4"});
expect(() => {ms932Encoder.encode("\u54F5")}).toThrowError({name:"TypeError",message:"EncodingError U+54F5"});
expect(() => {ms932Encoder.encode("\u54F6")}).toThrowError({name:"TypeError",message:"EncodingError U+54F6"});
expect(() => {ms932Encoder.encode("\u54F7")}).toThrowError({name:"TypeError",message:"EncodingError U+54F7"});
expect(() => {ms932Encoder.encode("\u54F8")}).toThrowError({name:"TypeError",message:"EncodingError U+54F8"});
expect(() => {ms932Encoder.encode("\u54F9")}).toThrowError({name:"TypeError",message:"EncodingError U+54F9"});
expect([...ms932Encoder.encode("哺")].join(",")).toBe("154,77"); // U+54FA
expect(() => {ms932Encoder.encode("\u54FB")}).toThrowError({name:"TypeError",message:"EncodingError U+54FB"});
expect(() => {ms932Encoder.encode("\u54FC")}).toThrowError({name:"TypeError",message:"EncodingError U+54FC"});
expect([...ms932Encoder.encode("哽")].join(",")).toBe("154,74"); // U+54FD
expect(() => {ms932Encoder.encode("\u54FE")}).toThrowError({name:"TypeError",message:"EncodingError U+54FE"});
expect([...ms932Encoder.encode("哿")].join(",")).toBe("250,148"); // U+54FF
expect(() => {ms932Encoder.encode("\u5500")}).toThrowError({name:"TypeError",message:"EncodingError U+5500"});
expect(() => {ms932Encoder.encode("\u5501")}).toThrowError({name:"TypeError",message:"EncodingError U+5501"});
expect(() => {ms932Encoder.encode("\u5502")}).toThrowError({name:"TypeError",message:"EncodingError U+5502"});
expect(() => {ms932Encoder.encode("\u5503")}).toThrowError({name:"TypeError",message:"EncodingError U+5503"});
expect([...ms932Encoder.encode("唄")].join(",")).toBe("137,83"); // U+5504
expect(() => {ms932Encoder.encode("\u5505")}).toThrowError({name:"TypeError",message:"EncodingError U+5505"});
expect([...ms932Encoder.encode("唆唇")].join(",")).toBe("141,180,144,79"); // U+5506
expect(() => {ms932Encoder.encode("\u5508")}).toThrowError({name:"TypeError",message:"EncodingError U+5508"});
expect(() => {ms932Encoder.encode("\u5509")}).toThrowError({name:"TypeError",message:"EncodingError U+5509"});
expect(() => {ms932Encoder.encode("\u550A")}).toThrowError({name:"TypeError",message:"EncodingError U+550A"});
expect(() => {ms932Encoder.encode("\u550B")}).toThrowError({name:"TypeError",message:"EncodingError U+550B"});
expect(() => {ms932Encoder.encode("\u550C")}).toThrowError({name:"TypeError",message:"EncodingError U+550C"});
expect(() => {ms932Encoder.encode("\u550D")}).toThrowError({name:"TypeError",message:"EncodingError U+550D"});
expect(() => {ms932Encoder.encode("\u550E")}).toThrowError({name:"TypeError",message:"EncodingError U+550E"});
expect([...ms932Encoder.encode("唏唐")].join(",")).toBe("154,72,147,130"); // U+550F
expect(() => {ms932Encoder.encode("\u5511")}).toThrowError({name:"TypeError",message:"EncodingError U+5511"});
expect(() => {ms932Encoder.encode("\u5512")}).toThrowError({name:"TypeError",message:"EncodingError U+5512"});
expect(() => {ms932Encoder.encode("\u5513")}).toThrowError({name:"TypeError",message:"EncodingError U+5513"});
expect([...ms932Encoder.encode("唔")].join(",")).toBe("154,73"); // U+5514
expect(() => {ms932Encoder.encode("\u5515")}).toThrowError({name:"TypeError",message:"EncodingError U+5515"});
expect([...ms932Encoder.encode("唖")].join(",")).toBe("136,160"); // U+5516
expect(() => {ms932Encoder.encode("\u5517")}).toThrowError({name:"TypeError",message:"EncodingError U+5517"});
expect(() => {ms932Encoder.encode("\u5518")}).toThrowError({name:"TypeError",message:"EncodingError U+5518"});
expect(() => {ms932Encoder.encode("\u5519")}).toThrowError({name:"TypeError",message:"EncodingError U+5519"});
expect(() => {ms932Encoder.encode("\u551A")}).toThrowError({name:"TypeError",message:"EncodingError U+551A"});
expect(() => {ms932Encoder.encode("\u551B")}).toThrowError({name:"TypeError",message:"EncodingError U+551B"});
expect(() => {ms932Encoder.encode("\u551C")}).toThrowError({name:"TypeError",message:"EncodingError U+551C"});
expect(() => {ms932Encoder.encode("\u551D")}).toThrowError({name:"TypeError",message:"EncodingError U+551D"});
expect(() => {ms932Encoder.encode("\u551E")}).toThrowError({name:"TypeError",message:"EncodingError U+551E"});
expect(() => {ms932Encoder.encode("\u551F")}).toThrowError({name:"TypeError",message:"EncodingError U+551F"});
expect(() => {ms932Encoder.encode("\u5520")}).toThrowError({name:"TypeError",message:"EncodingError U+5520"});
expect(() => {ms932Encoder.encode("\u5521")}).toThrowError({name:"TypeError",message:"EncodingError U+5521"});
expect(() => {ms932Encoder.encode("\u5522")}).toThrowError({name:"TypeError",message:"EncodingError U+5522"});
expect(() => {ms932Encoder.encode("\u5523")}).toThrowError({name:"TypeError",message:"EncodingError U+5523"});
expect(() => {ms932Encoder.encode("\u5524")}).toThrowError({name:"TypeError",message:"EncodingError U+5524"});
expect(() => {ms932Encoder.encode("\u5525")}).toThrowError({name:"TypeError",message:"EncodingError U+5525"});
expect(() => {ms932Encoder.encode("\u5526")}).toThrowError({name:"TypeError",message:"EncodingError U+5526"});
expect(() => {ms932Encoder.encode("\u5527")}).toThrowError({name:"TypeError",message:"EncodingError U+5527"});
expect(() => {ms932Encoder.encode("\u5528")}).toThrowError({name:"TypeError",message:"EncodingError U+5528"});
expect(() => {ms932Encoder.encode("\u5529")}).toThrowError({name:"TypeError",message:"EncodingError U+5529"});
expect(() => {ms932Encoder.encode("\u552A")}).toThrowError({name:"TypeError",message:"EncodingError U+552A"});
expect(() => {ms932Encoder.encode("\u552B")}).toThrowError({name:"TypeError",message:"EncodingError U+552B"});
expect(() => {ms932Encoder.encode("\u552C")}).toThrowError({name:"TypeError",message:"EncodingError U+552C"});
expect(() => {ms932Encoder.encode("\u552D")}).toThrowError({name:"TypeError",message:"EncodingError U+552D"});
expect([...ms932Encoder.encode("售唯")].join(",")).toBe("154,83,151,66"); // U+552E
expect(() => {ms932Encoder.encode("\u5530")}).toThrowError({name:"TypeError",message:"EncodingError U+5530"});
expect([...ms932Encoder.encode("唱")].join(",")).toBe("143,165"); // U+5531
expect(() => {ms932Encoder.encode("\u5532")}).toThrowError({name:"TypeError",message:"EncodingError U+5532"});
expect([...ms932Encoder.encode("唳")].join(",")).toBe("154,89"); // U+5533
expect(() => {ms932Encoder.encode("\u5534")}).toThrowError({name:"TypeError",message:"EncodingError U+5534"});
expect(() => {ms932Encoder.encode("\u5535")}).toThrowError({name:"TypeError",message:"EncodingError U+5535"});
expect(() => {ms932Encoder.encode("\u5536")}).toThrowError({name:"TypeError",message:"EncodingError U+5536"});
expect(() => {ms932Encoder.encode("\u5537")}).toThrowError({name:"TypeError",message:"EncodingError U+5537"});
expect([...ms932Encoder.encode("唸唹")].join(",")).toBe("154,88,154,79"); // U+5538
expect(() => {ms932Encoder.encode("\u553A")}).toThrowError({name:"TypeError",message:"EncodingError U+553A"});
expect(() => {ms932Encoder.encode("\u553B")}).toThrowError({name:"TypeError",message:"EncodingError U+553B"});
expect(() => {ms932Encoder.encode("\u553C")}).toThrowError({name:"TypeError",message:"EncodingError U+553C"});
expect(() => {ms932Encoder.encode("\u553D")}).toThrowError({name:"TypeError",message:"EncodingError U+553D"});
expect([...ms932Encoder.encode("唾")].join(",")).toBe("145,193"); // U+553E
expect(() => {ms932Encoder.encode("\u553F")}).toThrowError({name:"TypeError",message:"EncodingError U+553F"});
expect([...ms932Encoder.encode("啀")].join(",")).toBe("154,80"); // U+5540
expect(() => {ms932Encoder.encode("\u5541")}).toThrowError({name:"TypeError",message:"EncodingError U+5541"});
expect(() => {ms932Encoder.encode("\u5542")}).toThrowError({name:"TypeError",message:"EncodingError U+5542"});
expect(() => {ms932Encoder.encode("\u5543")}).toThrowError({name:"TypeError",message:"EncodingError U+5543"});
expect([...ms932Encoder.encode("啄啅商")].join(",")).toBe("145,237,154,85,143,164"); // U+5544
expect(() => {ms932Encoder.encode("\u5547")}).toThrowError({name:"TypeError",message:"EncodingError U+5547"});
expect(() => {ms932Encoder.encode("\u5548")}).toThrowError({name:"TypeError",message:"EncodingError U+5548"});
expect(() => {ms932Encoder.encode("\u5549")}).toThrowError({name:"TypeError",message:"EncodingError U+5549"});
expect(() => {ms932Encoder.encode("\u554A")}).toThrowError({name:"TypeError",message:"EncodingError U+554A"});
expect(() => {ms932Encoder.encode("\u554B")}).toThrowError({name:"TypeError",message:"EncodingError U+554B"});
expect([...ms932Encoder.encode("啌")].join(",")).toBe("154,82"); // U+554C
expect(() => {ms932Encoder.encode("\u554D")}).toThrowError({name:"TypeError",message:"EncodingError U+554D"});
expect(() => {ms932Encoder.encode("\u554E")}).toThrowError({name:"TypeError",message:"EncodingError U+554E"});
expect([...ms932Encoder.encode("問")].join(",")).toBe("150,226"); // U+554F
expect(() => {ms932Encoder.encode("\u5550")}).toThrowError({name:"TypeError",message:"EncodingError U+5550"});
expect(() => {ms932Encoder.encode("\u5551")}).toThrowError({name:"TypeError",message:"EncodingError U+5551"});
expect(() => {ms932Encoder.encode("\u5552")}).toThrowError({name:"TypeError",message:"EncodingError U+5552"});
expect([...ms932Encoder.encode("啓")].join(",")).toBe("140,91"); // U+5553
expect(() => {ms932Encoder.encode("\u5554")}).toThrowError({name:"TypeError",message:"EncodingError U+5554"});
expect(() => {ms932Encoder.encode("\u5555")}).toThrowError({name:"TypeError",message:"EncodingError U+5555"});
expect([...ms932Encoder.encode("啖啗")].join(",")).toBe("154,86,154,87"); // U+5556
expect(() => {ms932Encoder.encode("\u5558")}).toThrowError({name:"TypeError",message:"EncodingError U+5558"});
expect(() => {ms932Encoder.encode("\u5559")}).toThrowError({name:"TypeError",message:"EncodingError U+5559"});
expect(() => {ms932Encoder.encode("\u555A")}).toThrowError({name:"TypeError",message:"EncodingError U+555A"});
expect(() => {ms932Encoder.encode("\u555B")}).toThrowError({name:"TypeError",message:"EncodingError U+555B"});
expect([...ms932Encoder.encode("啜啝")].join(",")).toBe("154,84,154,90"); // U+555C
expect(() => {ms932Encoder.encode("\u555E")}).toThrowError({name:"TypeError",message:"EncodingError U+555E"});
expect(() => {ms932Encoder.encode("\u555F")}).toThrowError({name:"TypeError",message:"EncodingError U+555F"});
expect(() => {ms932Encoder.encode("\u5560")}).toThrowError({name:"TypeError",message:"EncodingError U+5560"});
expect(() => {ms932Encoder.encode("\u5561")}).toThrowError({name:"TypeError",message:"EncodingError U+5561"});
expect(() => {ms932Encoder.encode("\u5562")}).toThrowError({name:"TypeError",message:"EncodingError U+5562"});
expect([...ms932Encoder.encode("啣")].join(",")).toBe("154,81"); // U+5563
expect(() => {ms932Encoder.encode("\u5564")}).toThrowError({name:"TypeError",message:"EncodingError U+5564"});
expect(() => {ms932Encoder.encode("\u5565")}).toThrowError({name:"TypeError",message:"EncodingError U+5565"});
expect(() => {ms932Encoder.encode("\u5566")}).toThrowError({name:"TypeError",message:"EncodingError U+5566"});
expect(() => {ms932Encoder.encode("\u5567")}).toThrowError({name:"TypeError",message:"EncodingError U+5567"});
expect(() => {ms932Encoder.encode("\u5568")}).toThrowError({name:"TypeError",message:"EncodingError U+5568"});
expect(() => {ms932Encoder.encode("\u5569")}).toThrowError({name:"TypeError",message:"EncodingError U+5569"});
expect(() => {ms932Encoder.encode("\u556A")}).toThrowError({name:"TypeError",message:"EncodingError U+556A"});
expect(() => {ms932Encoder.encode("\u556B")}).toThrowError({name:"TypeError",message:"EncodingError U+556B"});
expect(() => {ms932Encoder.encode("\u556C")}).toThrowError({name:"TypeError",message:"EncodingError U+556C"});
expect(() => {ms932Encoder.encode("\u556D")}).toThrowError({name:"TypeError",message:"EncodingError U+556D"});
expect(() => {ms932Encoder.encode("\u556E")}).toThrowError({name:"TypeError",message:"EncodingError U+556E"});
expect(() => {ms932Encoder.encode("\u556F")}).toThrowError({name:"TypeError",message:"EncodingError U+556F"});
expect(() => {ms932Encoder.encode("\u5570")}).toThrowError({name:"TypeError",message:"EncodingError U+5570"});
expect(() => {ms932Encoder.encode("\u5571")}).toThrowError({name:"TypeError",message:"EncodingError U+5571"});
expect(() => {ms932Encoder.encode("\u5572")}).toThrowError({name:"TypeError",message:"EncodingError U+5572"});
expect(() => {ms932Encoder.encode("\u5573")}).toThrowError({name:"TypeError",message:"EncodingError U+5573"});
expect(() => {ms932Encoder.encode("\u5574")}).toThrowError({name:"TypeError",message:"EncodingError U+5574"});
expect(() => {ms932Encoder.encode("\u5575")}).toThrowError({name:"TypeError",message:"EncodingError U+5575"});
expect(() => {ms932Encoder.encode("\u5576")}).toThrowError({name:"TypeError",message:"EncodingError U+5576"});
expect(() => {ms932Encoder.encode("\u5577")}).toThrowError({name:"TypeError",message:"EncodingError U+5577"});
expect(() => {ms932Encoder.encode("\u5578")}).toThrowError({name:"TypeError",message:"EncodingError U+5578"});
expect(() => {ms932Encoder.encode("\u5579")}).toThrowError({name:"TypeError",message:"EncodingError U+5579"});
expect(() => {ms932Encoder.encode("\u557A")}).toThrowError({name:"TypeError",message:"EncodingError U+557A"});
expect([...ms932Encoder.encode("啻啼")].join(",")).toBe("154,96,154,101"); // U+557B
expect(() => {ms932Encoder.encode("\u557D")}).toThrowError({name:"TypeError",message:"EncodingError U+557D"});
expect([...ms932Encoder.encode("啾")].join(",")).toBe("154,97"); // U+557E
expect(() => {ms932Encoder.encode("\u557F")}).toThrowError({name:"TypeError",message:"EncodingError U+557F"});
expect([...ms932Encoder.encode("喀")].join(",")).toBe("154,92"); // U+5580
expect(() => {ms932Encoder.encode("\u5581")}).toThrowError({name:"TypeError",message:"EncodingError U+5581"});
expect(() => {ms932Encoder.encode("\u5582")}).toThrowError({name:"TypeError",message:"EncodingError U+5582"});
expect([...ms932Encoder.encode("喃善")].join(",")).toBe("154,102,145,80"); // U+5583
expect(() => {ms932Encoder.encode("\u5585")}).toThrowError({name:"TypeError",message:"EncodingError U+5585"});
expect([...ms932Encoder.encode("喆喇")].join(",")).toBe("250,149,154,104"); // U+5586
expect(() => {ms932Encoder.encode("\u5588")}).toThrowError({name:"TypeError",message:"EncodingError U+5588"});
expect([...ms932Encoder.encode("喉喊喋")].join(",")).toBe("141,65,154,94,146,157"); // U+5589
expect(() => {ms932Encoder.encode("\u558C")}).toThrowError({name:"TypeError",message:"EncodingError U+558C"});
expect(() => {ms932Encoder.encode("\u558D")}).toThrowError({name:"TypeError",message:"EncodingError U+558D"});
expect(() => {ms932Encoder.encode("\u558E")}).toThrowError({name:"TypeError",message:"EncodingError U+558E"});
expect(() => {ms932Encoder.encode("\u558F")}).toThrowError({name:"TypeError",message:"EncodingError U+558F"});
expect(() => {ms932Encoder.encode("\u5590")}).toThrowError({name:"TypeError",message:"EncodingError U+5590"});
expect(() => {ms932Encoder.encode("\u5591")}).toThrowError({name:"TypeError",message:"EncodingError U+5591"});
expect(() => {ms932Encoder.encode("\u5592")}).toThrowError({name:"TypeError",message:"EncodingError U+5592"});
expect(() => {ms932Encoder.encode("\u5593")}).toThrowError({name:"TypeError",message:"EncodingError U+5593"});
expect(() => {ms932Encoder.encode("\u5594")}).toThrowError({name:"TypeError",message:"EncodingError U+5594"});
expect(() => {ms932Encoder.encode("\u5595")}).toThrowError({name:"TypeError",message:"EncodingError U+5595"});
expect(() => {ms932Encoder.encode("\u5596")}).toThrowError({name:"TypeError",message:"EncodingError U+5596"});
expect(() => {ms932Encoder.encode("\u5597")}).toThrowError({name:"TypeError",message:"EncodingError U+5597"});
expect([...ms932Encoder.encode("喘喙喚")].join(",")).toBe("154,98,154,91,138,171"); // U+5598
expect(() => {ms932Encoder.encode("\u559B")}).toThrowError({name:"TypeError",message:"EncodingError U+559B"});
expect([...ms932Encoder.encode("喜喝喞喟")].join(",")).toBe("138,236,138,133,154,99,154,95"); // U+559C
expect(() => {ms932Encoder.encode("\u55A0")}).toThrowError({name:"TypeError",message:"EncodingError U+55A0"});
expect(() => {ms932Encoder.encode("\u55A1")}).toThrowError({name:"TypeError",message:"EncodingError U+55A1"});
expect(() => {ms932Encoder.encode("\u55A2")}).toThrowError({name:"TypeError",message:"EncodingError U+55A2"});
expect(() => {ms932Encoder.encode("\u55A3")}).toThrowError({name:"TypeError",message:"EncodingError U+55A3"});
expect(() => {ms932Encoder.encode("\u55A4")}).toThrowError({name:"TypeError",message:"EncodingError U+55A4"});
expect(() => {ms932Encoder.encode("\u55A5")}).toThrowError({name:"TypeError",message:"EncodingError U+55A5"});
expect(() => {ms932Encoder.encode("\u55A6")}).toThrowError({name:"TypeError",message:"EncodingError U+55A6"});
expect([...ms932Encoder.encode("喧喨喩喪喫喬")].join(",")).toBe("140,150,154,105,154,103,145,114,139,105,139,170"); // U+55A7
expect(() => {ms932Encoder.encode("\u55AD")}).toThrowError({name:"TypeError",message:"EncodingError U+55AD"});
expect([...ms932Encoder.encode("單")].join(",")).toBe("154,100"); // U+55AE
expect(() => {ms932Encoder.encode("\u55AF")}).toThrowError({name:"TypeError",message:"EncodingError U+55AF"});
expect([...ms932Encoder.encode("喰")].join(",")).toBe("139,242"); // U+55B0
expect(() => {ms932Encoder.encode("\u55B1")}).toThrowError({name:"TypeError",message:"EncodingError U+55B1"});
expect(() => {ms932Encoder.encode("\u55B2")}).toThrowError({name:"TypeError",message:"EncodingError U+55B2"});
expect(() => {ms932Encoder.encode("\u55B3")}).toThrowError({name:"TypeError",message:"EncodingError U+55B3"});
expect(() => {ms932Encoder.encode("\u55B4")}).toThrowError({name:"TypeError",message:"EncodingError U+55B4"});
expect(() => {ms932Encoder.encode("\u55B5")}).toThrowError({name:"TypeError",message:"EncodingError U+55B5"});
expect([...ms932Encoder.encode("営")].join(",")).toBe("137,99"); // U+55B6
expect(() => {ms932Encoder.encode("\u55B7")}).toThrowError({name:"TypeError",message:"EncodingError U+55B7"});
expect(() => {ms932Encoder.encode("\u55B8")}).toThrowError({name:"TypeError",message:"EncodingError U+55B8"});
expect(() => {ms932Encoder.encode("\u55B9")}).toThrowError({name:"TypeError",message:"EncodingError U+55B9"});
expect(() => {ms932Encoder.encode("\u55BA")}).toThrowError({name:"TypeError",message:"EncodingError U+55BA"});
expect(() => {ms932Encoder.encode("\u55BB")}).toThrowError({name:"TypeError",message:"EncodingError U+55BB"});
expect(() => {ms932Encoder.encode("\u55BC")}).toThrowError({name:"TypeError",message:"EncodingError U+55BC"});
expect(() => {ms932Encoder.encode("\u55BD")}).toThrowError({name:"TypeError",message:"EncodingError U+55BD"});
expect(() => {ms932Encoder.encode("\u55BE")}).toThrowError({name:"TypeError",message:"EncodingError U+55BE"});
expect(() => {ms932Encoder.encode("\u55BF")}).toThrowError({name:"TypeError",message:"EncodingError U+55BF"});
expect(() => {ms932Encoder.encode("\u55C0")}).toThrowError({name:"TypeError",message:"EncodingError U+55C0"});
expect(() => {ms932Encoder.encode("\u55C1")}).toThrowError({name:"TypeError",message:"EncodingError U+55C1"});
expect(() => {ms932Encoder.encode("\u55C2")}).toThrowError({name:"TypeError",message:"EncodingError U+55C2"});
expect(() => {ms932Encoder.encode("\u55C3")}).toThrowError({name:"TypeError",message:"EncodingError U+55C3"});
expect([...ms932Encoder.encode("嗄嗅")].join(",")).toBe("154,109,154,107"); // U+55C4
expect(() => {ms932Encoder.encode("\u55C6")}).toThrowError({name:"TypeError",message:"EncodingError U+55C6"});
expect([...ms932Encoder.encode("嗇")].join(",")).toBe("154,165"); // U+55C7
expect(() => {ms932Encoder.encode("\u55C8")}).toThrowError({name:"TypeError",message:"EncodingError U+55C8"});
expect(() => {ms932Encoder.encode("\u55C9")}).toThrowError({name:"TypeError",message:"EncodingError U+55C9"});
expect(() => {ms932Encoder.encode("\u55CA")}).toThrowError({name:"TypeError",message:"EncodingError U+55CA"});
expect(() => {ms932Encoder.encode("\u55CB")}).toThrowError({name:"TypeError",message:"EncodingError U+55CB"});
expect(() => {ms932Encoder.encode("\u55CC")}).toThrowError({name:"TypeError",message:"EncodingError U+55CC"});
expect(() => {ms932Encoder.encode("\u55CD")}).toThrowError({name:"TypeError",message:"EncodingError U+55CD"});
expect(() => {ms932Encoder.encode("\u55CE")}).toThrowError({name:"TypeError",message:"EncodingError U+55CE"});
expect(() => {ms932Encoder.encode("\u55CF")}).toThrowError({name:"TypeError",message:"EncodingError U+55CF"});
expect(() => {ms932Encoder.encode("\u55D0")}).toThrowError({name:"TypeError",message:"EncodingError U+55D0"});
expect(() => {ms932Encoder.encode("\u55D1")}).toThrowError({name:"TypeError",message:"EncodingError U+55D1"});
expect(() => {ms932Encoder.encode("\u55D2")}).toThrowError({name:"TypeError",message:"EncodingError U+55D2"});
expect(() => {ms932Encoder.encode("\u55D3")}).toThrowError({name:"TypeError",message:"EncodingError U+55D3"});
expect([...ms932Encoder.encode("嗔")].join(",")).toBe("154,112"); // U+55D4
expect(() => {ms932Encoder.encode("\u55D5")}).toThrowError({name:"TypeError",message:"EncodingError U+55D5"});
expect(() => {ms932Encoder.encode("\u55D6")}).toThrowError({name:"TypeError",message:"EncodingError U+55D6"});
expect(() => {ms932Encoder.encode("\u55D7")}).toThrowError({name:"TypeError",message:"EncodingError U+55D7"});
expect(() => {ms932Encoder.encode("\u55D8")}).toThrowError({name:"TypeError",message:"EncodingError U+55D8"});
expect(() => {ms932Encoder.encode("\u55D9")}).toThrowError({name:"TypeError",message:"EncodingError U+55D9"});
expect([...ms932Encoder.encode("嗚")].join(",")).toBe("154,106"); // U+55DA
expect(() => {ms932Encoder.encode("\u55DB")}).toThrowError({name:"TypeError",message:"EncodingError U+55DB"});
expect([...ms932Encoder.encode("嗜")].join(",")).toBe("154,110"); // U+55DC
expect(() => {ms932Encoder.encode("\u55DD")}).toThrowError({name:"TypeError",message:"EncodingError U+55DD"});
expect(() => {ms932Encoder.encode("\u55DE")}).toThrowError({name:"TypeError",message:"EncodingError U+55DE"});
expect([...ms932Encoder.encode("嗟")].join(",")).toBe("154,108"); // U+55DF
expect(() => {ms932Encoder.encode("\u55E0")}).toThrowError({name:"TypeError",message:"EncodingError U+55E0"});
expect(() => {ms932Encoder.encode("\u55E1")}).toThrowError({name:"TypeError",message:"EncodingError U+55E1"});
expect(() => {ms932Encoder.encode("\u55E2")}).toThrowError({name:"TypeError",message:"EncodingError U+55E2"});
expect([...ms932Encoder.encode("嗣嗤")].join(",")).toBe("142,107,154,111"); // U+55E3
expect(() => {ms932Encoder.encode("\u55E5")}).toThrowError({name:"TypeError",message:"EncodingError U+55E5"});
expect(() => {ms932Encoder.encode("\u55E6")}).toThrowError({name:"TypeError",message:"EncodingError U+55E6"});
expect(() => {ms932Encoder.encode("\u55E7")}).toThrowError({name:"TypeError",message:"EncodingError U+55E7"});
expect(() => {ms932Encoder.encode("\u55E8")}).toThrowError({name:"TypeError",message:"EncodingError U+55E8"});
expect(() => {ms932Encoder.encode("\u55E9")}).toThrowError({name:"TypeError",message:"EncodingError U+55E9"});
expect(() => {ms932Encoder.encode("\u55EA")}).toThrowError({name:"TypeError",message:"EncodingError U+55EA"});
expect(() => {ms932Encoder.encode("\u55EB")}).toThrowError({name:"TypeError",message:"EncodingError U+55EB"});
expect(() => {ms932Encoder.encode("\u55EC")}).toThrowError({name:"TypeError",message:"EncodingError U+55EC"});
expect(() => {ms932Encoder.encode("\u55ED")}).toThrowError({name:"TypeError",message:"EncodingError U+55ED"});
expect(() => {ms932Encoder.encode("\u55EE")}).toThrowError({name:"TypeError",message:"EncodingError U+55EE"});
expect(() => {ms932Encoder.encode("\u55EF")}).toThrowError({name:"TypeError",message:"EncodingError U+55EF"});
expect(() => {ms932Encoder.encode("\u55F0")}).toThrowError({name:"TypeError",message:"EncodingError U+55F0"});
expect(() => {ms932Encoder.encode("\u55F1")}).toThrowError({name:"TypeError",message:"EncodingError U+55F1"});
expect(() => {ms932Encoder.encode("\u55F2")}).toThrowError({name:"TypeError",message:"EncodingError U+55F2"});
expect(() => {ms932Encoder.encode("\u55F3")}).toThrowError({name:"TypeError",message:"EncodingError U+55F3"});
expect(() => {ms932Encoder.encode("\u55F4")}).toThrowError({name:"TypeError",message:"EncodingError U+55F4"});
expect(() => {ms932Encoder.encode("\u55F5")}).toThrowError({name:"TypeError",message:"EncodingError U+55F5"});
expect(() => {ms932Encoder.encode("\u55F6")}).toThrowError({name:"TypeError",message:"EncodingError U+55F6"});
expect([...ms932Encoder.encode("嗷")].join(",")).toBe("154,114"); // U+55F7
expect(() => {ms932Encoder.encode("\u55F8")}).toThrowError({name:"TypeError",message:"EncodingError U+55F8"});
expect([...ms932Encoder.encode("嗹")].join(",")).toBe("154,119"); // U+55F9
expect(() => {ms932Encoder.encode("\u55FA")}).toThrowError({name:"TypeError",message:"EncodingError U+55FA"});
expect(() => {ms932Encoder.encode("\u55FB")}).toThrowError({name:"TypeError",message:"EncodingError U+55FB"});
expect(() => {ms932Encoder.encode("\u55FC")}).toThrowError({name:"TypeError",message:"EncodingError U+55FC"});
expect([...ms932Encoder.encode("嗽嗾")].join(",")).toBe("154,117,154,116"); // U+55FD
expect(() => {ms932Encoder.encode("\u55FF")}).toThrowError({name:"TypeError",message:"EncodingError U+55FF"});
expect(() => {ms932Encoder.encode("\u5600")}).toThrowError({name:"TypeError",message:"EncodingError U+5600"});
expect(() => {ms932Encoder.encode("\u5601")}).toThrowError({name:"TypeError",message:"EncodingError U+5601"});
expect(() => {ms932Encoder.encode("\u5602")}).toThrowError({name:"TypeError",message:"EncodingError U+5602"});
expect(() => {ms932Encoder.encode("\u5603")}).toThrowError({name:"TypeError",message:"EncodingError U+5603"});
expect(() => {ms932Encoder.encode("\u5604")}).toThrowError({name:"TypeError",message:"EncodingError U+5604"});
expect(() => {ms932Encoder.encode("\u5605")}).toThrowError({name:"TypeError",message:"EncodingError U+5605"});
expect([...ms932Encoder.encode("嘆")].join(",")).toBe("146,81"); // U+5606
expect(() => {ms932Encoder.encode("\u5607")}).toThrowError({name:"TypeError",message:"EncodingError U+5607"});
expect(() => {ms932Encoder.encode("\u5608")}).toThrowError({name:"TypeError",message:"EncodingError U+5608"});
expect([...ms932Encoder.encode("嘉")].join(",")).toBe("137,195"); // U+5609
expect(() => {ms932Encoder.encode("\u560A")}).toThrowError({name:"TypeError",message:"EncodingError U+560A"});
expect(() => {ms932Encoder.encode("\u560B")}).toThrowError({name:"TypeError",message:"EncodingError U+560B"});
expect(() => {ms932Encoder.encode("\u560C")}).toThrowError({name:"TypeError",message:"EncodingError U+560C"});
expect(() => {ms932Encoder.encode("\u560D")}).toThrowError({name:"TypeError",message:"EncodingError U+560D"});
expect(() => {ms932Encoder.encode("\u560E")}).toThrowError({name:"TypeError",message:"EncodingError U+560E"});
expect(() => {ms932Encoder.encode("\u560F")}).toThrowError({name:"TypeError",message:"EncodingError U+560F"});
expect(() => {ms932Encoder.encode("\u5610")}).toThrowError({name:"TypeError",message:"EncodingError U+5610"});
expect(() => {ms932Encoder.encode("\u5611")}).toThrowError({name:"TypeError",message:"EncodingError U+5611"});
expect(() => {ms932Encoder.encode("\u5612")}).toThrowError({name:"TypeError",message:"EncodingError U+5612"});
expect(() => {ms932Encoder.encode("\u5613")}).toThrowError({name:"TypeError",message:"EncodingError U+5613"});
expect([...ms932Encoder.encode("嘔")].join(",")).toBe("154,113"); // U+5614
expect(() => {ms932Encoder.encode("\u5615")}).toThrowError({name:"TypeError",message:"EncodingError U+5615"});
expect([...ms932Encoder.encode("嘖嘗嘘")].join(",")).toBe("154,115,143,166,137,82"); // U+5616
expect(() => {ms932Encoder.encode("\u5619")}).toThrowError({name:"TypeError",message:"EncodingError U+5619"});
expect(() => {ms932Encoder.encode("\u561A")}).toThrowError({name:"TypeError",message:"EncodingError U+561A"});
expect([...ms932Encoder.encode("嘛")].join(",")).toBe("154,118"); // U+561B
expect(() => {ms932Encoder.encode("\u561C")}).toThrowError({name:"TypeError",message:"EncodingError U+561C"});
expect(() => {ms932Encoder.encode("\u561D")}).toThrowError({name:"TypeError",message:"EncodingError U+561D"});
expect(() => {ms932Encoder.encode("\u561E")}).toThrowError({name:"TypeError",message:"EncodingError U+561E"});
expect(() => {ms932Encoder.encode("\u561F")}).toThrowError({name:"TypeError",message:"EncodingError U+561F"});
expect(() => {ms932Encoder.encode("\u5620")}).toThrowError({name:"TypeError",message:"EncodingError U+5620"});
expect(() => {ms932Encoder.encode("\u5621")}).toThrowError({name:"TypeError",message:"EncodingError U+5621"});
expect(() => {ms932Encoder.encode("\u5622")}).toThrowError({name:"TypeError",message:"EncodingError U+5622"});
expect(() => {ms932Encoder.encode("\u5623")}).toThrowError({name:"TypeError",message:"EncodingError U+5623"});
expect(() => {ms932Encoder.encode("\u5624")}).toThrowError({name:"TypeError",message:"EncodingError U+5624"});
expect(() => {ms932Encoder.encode("\u5625")}).toThrowError({name:"TypeError",message:"EncodingError U+5625"});
expect(() => {ms932Encoder.encode("\u5626")}).toThrowError({name:"TypeError",message:"EncodingError U+5626"});
expect(() => {ms932Encoder.encode("\u5627")}).toThrowError({name:"TypeError",message:"EncodingError U+5627"});
expect(() => {ms932Encoder.encode("\u5628")}).toThrowError({name:"TypeError",message:"EncodingError U+5628"});
expect([...ms932Encoder.encode("嘩")].join(",")).toBe("137,220"); // U+5629
expect(() => {ms932Encoder.encode("\u562A")}).toThrowError({name:"TypeError",message:"EncodingError U+562A"});
expect(() => {ms932Encoder.encode("\u562B")}).toThrowError({name:"TypeError",message:"EncodingError U+562B"});
expect(() => {ms932Encoder.encode("\u562C")}).toThrowError({name:"TypeError",message:"EncodingError U+562C"});
expect(() => {ms932Encoder.encode("\u562D")}).toThrowError({name:"TypeError",message:"EncodingError U+562D"});
expect(() => {ms932Encoder.encode("\u562E")}).toThrowError({name:"TypeError",message:"EncodingError U+562E"});
expect([...ms932Encoder.encode("嘯")].join(",")).toBe("154,130"); // U+562F
expect(() => {ms932Encoder.encode("\u5630")}).toThrowError({name:"TypeError",message:"EncodingError U+5630"});
expect([...ms932Encoder.encode("嘱嘲")].join(",")).toBe("143,250,154,125"); // U+5631
expect(() => {ms932Encoder.encode("\u5633")}).toThrowError({name:"TypeError",message:"EncodingError U+5633"});
expect([...ms932Encoder.encode("嘴")].join(",")).toBe("154,123"); // U+5634
expect(() => {ms932Encoder.encode("\u5635")}).toThrowError({name:"TypeError",message:"EncodingError U+5635"});
expect([...ms932Encoder.encode("嘶")].join(",")).toBe("154,124"); // U+5636
expect(() => {ms932Encoder.encode("\u5637")}).toThrowError({name:"TypeError",message:"EncodingError U+5637"});
expect([...ms932Encoder.encode("嘸")].join(",")).toBe("154,126"); // U+5638
expect(() => {ms932Encoder.encode("\u5639")}).toThrowError({name:"TypeError",message:"EncodingError U+5639"});
expect(() => {ms932Encoder.encode("\u563A")}).toThrowError({name:"TypeError",message:"EncodingError U+563A"});
expect(() => {ms932Encoder.encode("\u563B")}).toThrowError({name:"TypeError",message:"EncodingError U+563B"});
expect(() => {ms932Encoder.encode("\u563C")}).toThrowError({name:"TypeError",message:"EncodingError U+563C"});
expect(() => {ms932Encoder.encode("\u563D")}).toThrowError({name:"TypeError",message:"EncodingError U+563D"});
expect(() => {ms932Encoder.encode("\u563E")}).toThrowError({name:"TypeError",message:"EncodingError U+563E"});
expect(() => {ms932Encoder.encode("\u563F")}).toThrowError({name:"TypeError",message:"EncodingError U+563F"});
expect(() => {ms932Encoder.encode("\u5640")}).toThrowError({name:"TypeError",message:"EncodingError U+5640"});
expect(() => {ms932Encoder.encode("\u5641")}).toThrowError({name:"TypeError",message:"EncodingError U+5641"});
expect([...ms932Encoder.encode("噂")].join(",")).toBe("137,92"); // U+5642
expect(() => {ms932Encoder.encode("\u5643")}).toThrowError({name:"TypeError",message:"EncodingError U+5643"});
expect(() => {ms932Encoder.encode("\u5644")}).toThrowError({name:"TypeError",message:"EncodingError U+5644"});
expect(() => {ms932Encoder.encode("\u5645")}).toThrowError({name:"TypeError",message:"EncodingError U+5645"});
expect(() => {ms932Encoder.encode("\u5646")}).toThrowError({name:"TypeError",message:"EncodingError U+5646"});
expect(() => {ms932Encoder.encode("\u5647")}).toThrowError({name:"TypeError",message:"EncodingError U+5647"});
expect(() => {ms932Encoder.encode("\u5648")}).toThrowError({name:"TypeError",message:"EncodingError U+5648"});
expect(() => {ms932Encoder.encode("\u5649")}).toThrowError({name:"TypeError",message:"EncodingError U+5649"});
expect(() => {ms932Encoder.encode("\u564A")}).toThrowError({name:"TypeError",message:"EncodingError U+564A"});
expect(() => {ms932Encoder.encode("\u564B")}).toThrowError({name:"TypeError",message:"EncodingError U+564B"});
expect([...ms932Encoder.encode("噌")].join(",")).toBe("145,88"); // U+564C
expect(() => {ms932Encoder.encode("\u564D")}).toThrowError({name:"TypeError",message:"EncodingError U+564D"});
expect([...ms932Encoder.encode("噎")].join(",")).toBe("154,120"); // U+564E
expect(() => {ms932Encoder.encode("\u564F")}).toThrowError({name:"TypeError",message:"EncodingError U+564F"});
expect([...ms932Encoder.encode("噐")].join(",")).toBe("154,121"); // U+5650
expect(() => {ms932Encoder.encode("\u5651")}).toThrowError({name:"TypeError",message:"EncodingError U+5651"});
expect(() => {ms932Encoder.encode("\u5652")}).toThrowError({name:"TypeError",message:"EncodingError U+5652"});
expect(() => {ms932Encoder.encode("\u5653")}).toThrowError({name:"TypeError",message:"EncodingError U+5653"});
expect(() => {ms932Encoder.encode("\u5654")}).toThrowError({name:"TypeError",message:"EncodingError U+5654"});
expect(() => {ms932Encoder.encode("\u5655")}).toThrowError({name:"TypeError",message:"EncodingError U+5655"});
expect(() => {ms932Encoder.encode("\u5656")}).toThrowError({name:"TypeError",message:"EncodingError U+5656"});
expect(() => {ms932Encoder.encode("\u5657")}).toThrowError({name:"TypeError",message:"EncodingError U+5657"});
expect(() => {ms932Encoder.encode("\u5658")}).toThrowError({name:"TypeError",message:"EncodingError U+5658"});
expect(() => {ms932Encoder.encode("\u5659")}).toThrowError({name:"TypeError",message:"EncodingError U+5659"});
expect(() => {ms932Encoder.encode("\u565A")}).toThrowError({name:"TypeError",message:"EncodingError U+565A"});
expect([...ms932Encoder.encode("噛")].join(",")).toBe("138,154"); // U+565B
expect(() => {ms932Encoder.encode("\u565C")}).toThrowError({name:"TypeError",message:"EncodingError U+565C"});
expect(() => {ms932Encoder.encode("\u565D")}).toThrowError({name:"TypeError",message:"EncodingError U+565D"});
expect(() => {ms932Encoder.encode("\u565E")}).toThrowError({name:"TypeError",message:"EncodingError U+565E"});
expect(() => {ms932Encoder.encode("\u565F")}).toThrowError({name:"TypeError",message:"EncodingError U+565F"});
expect(() => {ms932Encoder.encode("\u5660")}).toThrowError({name:"TypeError",message:"EncodingError U+5660"});
expect(() => {ms932Encoder.encode("\u5661")}).toThrowError({name:"TypeError",message:"EncodingError U+5661"});
expect(() => {ms932Encoder.encode("\u5662")}).toThrowError({name:"TypeError",message:"EncodingError U+5662"});
expect(() => {ms932Encoder.encode("\u5663")}).toThrowError({name:"TypeError",message:"EncodingError U+5663"});
expect([...ms932Encoder.encode("噤")].join(",")).toBe("154,129"); // U+5664
expect(() => {ms932Encoder.encode("\u5665")}).toThrowError({name:"TypeError",message:"EncodingError U+5665"});
expect(() => {ms932Encoder.encode("\u5666")}).toThrowError({name:"TypeError",message:"EncodingError U+5666"});
expect(() => {ms932Encoder.encode("\u5667")}).toThrowError({name:"TypeError",message:"EncodingError U+5667"});
expect([...ms932Encoder.encode("器")].join(",")).toBe("138,237"); // U+5668
expect(() => {ms932Encoder.encode("\u5669")}).toThrowError({name:"TypeError",message:"EncodingError U+5669"});
expect([...ms932Encoder.encode("噪噫噬")].join(",")).toBe("154,132,154,128,154,131"); // U+566A
expect(() => {ms932Encoder.encode("\u566D")}).toThrowError({name:"TypeError",message:"EncodingError U+566D"});
expect(() => {ms932Encoder.encode("\u566E")}).toThrowError({name:"TypeError",message:"EncodingError U+566E"});
expect(() => {ms932Encoder.encode("\u566F")}).toThrowError({name:"TypeError",message:"EncodingError U+566F"});
expect(() => {ms932Encoder.encode("\u5670")}).toThrowError({name:"TypeError",message:"EncodingError U+5670"});
expect(() => {ms932Encoder.encode("\u5671")}).toThrowError({name:"TypeError",message:"EncodingError U+5671"});
expect(() => {ms932Encoder.encode("\u5672")}).toThrowError({name:"TypeError",message:"EncodingError U+5672"});
expect(() => {ms932Encoder.encode("\u5673")}).toThrowError({name:"TypeError",message:"EncodingError U+5673"});
expect([...ms932Encoder.encode("噴")].join(",")).toBe("149,172"); // U+5674
expect(() => {ms932Encoder.encode("\u5675")}).toThrowError({name:"TypeError",message:"EncodingError U+5675"});
expect(() => {ms932Encoder.encode("\u5676")}).toThrowError({name:"TypeError",message:"EncodingError U+5676"});
expect(() => {ms932Encoder.encode("\u5677")}).toThrowError({name:"TypeError",message:"EncodingError U+5677"});
expect([...ms932Encoder.encode("噸")].join(",")).toBe("147,211"); // U+5678
expect(() => {ms932Encoder.encode("\u5679")}).toThrowError({name:"TypeError",message:"EncodingError U+5679"});
expect([...ms932Encoder.encode("噺")].join(",")).toBe("148,182"); // U+567A
expect(() => {ms932Encoder.encode("\u567B")}).toThrowError({name:"TypeError",message:"EncodingError U+567B"});
expect(() => {ms932Encoder.encode("\u567C")}).toThrowError({name:"TypeError",message:"EncodingError U+567C"});
expect(() => {ms932Encoder.encode("\u567D")}).toThrowError({name:"TypeError",message:"EncodingError U+567D"});
expect(() => {ms932Encoder.encode("\u567E")}).toThrowError({name:"TypeError",message:"EncodingError U+567E"});
expect(() => {ms932Encoder.encode("\u567F")}).toThrowError({name:"TypeError",message:"EncodingError U+567F"});
expect([...ms932Encoder.encode("嚀")].join(",")).toBe("154,134"); // U+5680
expect(() => {ms932Encoder.encode("\u5681")}).toThrowError({name:"TypeError",message:"EncodingError U+5681"});
expect(() => {ms932Encoder.encode("\u5682")}).toThrowError({name:"TypeError",message:"EncodingError U+5682"});
expect(() => {ms932Encoder.encode("\u5683")}).toThrowError({name:"TypeError",message:"EncodingError U+5683"});
expect(() => {ms932Encoder.encode("\u5684")}).toThrowError({name:"TypeError",message:"EncodingError U+5684"});
expect(() => {ms932Encoder.encode("\u5685")}).toThrowError({name:"TypeError",message:"EncodingError U+5685"});
expect([...ms932Encoder.encode("嚆嚇")].join(",")).toBe("154,133,138,100"); // U+5686
expect(() => {ms932Encoder.encode("\u5688")}).toThrowError({name:"TypeError",message:"EncodingError U+5688"});
expect(() => {ms932Encoder.encode("\u5689")}).toThrowError({name:"TypeError",message:"EncodingError U+5689"});
expect([...ms932Encoder.encode("嚊")].join(",")).toBe("154,135"); // U+568A
expect(() => {ms932Encoder.encode("\u568B")}).toThrowError({name:"TypeError",message:"EncodingError U+568B"});
expect(() => {ms932Encoder.encode("\u568C")}).toThrowError({name:"TypeError",message:"EncodingError U+568C"});
expect(() => {ms932Encoder.encode("\u568D")}).toThrowError({name:"TypeError",message:"EncodingError U+568D"});
expect(() => {ms932Encoder.encode("\u568E")}).toThrowError({name:"TypeError",message:"EncodingError U+568E"});
expect([...ms932Encoder.encode("嚏")].join(",")).toBe("154,138"); // U+568F
expect(() => {ms932Encoder.encode("\u5690")}).toThrowError({name:"TypeError",message:"EncodingError U+5690"});
expect(() => {ms932Encoder.encode("\u5691")}).toThrowError({name:"TypeError",message:"EncodingError U+5691"});
expect(() => {ms932Encoder.encode("\u5692")}).toThrowError({name:"TypeError",message:"EncodingError U+5692"});
expect(() => {ms932Encoder.encode("\u5693")}).toThrowError({name:"TypeError",message:"EncodingError U+5693"});
expect([...ms932Encoder.encode("嚔")].join(",")).toBe("154,137"); // U+5694
expect(() => {ms932Encoder.encode("\u5695")}).toThrowError({name:"TypeError",message:"EncodingError U+5695"});
expect(() => {ms932Encoder.encode("\u5696")}).toThrowError({name:"TypeError",message:"EncodingError U+5696"});
expect(() => {ms932Encoder.encode("\u5697")}).toThrowError({name:"TypeError",message:"EncodingError U+5697"});
expect(() => {ms932Encoder.encode("\u5698")}).toThrowError({name:"TypeError",message:"EncodingError U+5698"});
expect(() => {ms932Encoder.encode("\u5699")}).toThrowError({name:"TypeError",message:"EncodingError U+5699"});
expect(() => {ms932Encoder.encode("\u569A")}).toThrowError({name:"TypeError",message:"EncodingError U+569A"});
expect(() => {ms932Encoder.encode("\u569B")}).toThrowError({name:"TypeError",message:"EncodingError U+569B"});
expect(() => {ms932Encoder.encode("\u569C")}).toThrowError({name:"TypeError",message:"EncodingError U+569C"});
expect(() => {ms932Encoder.encode("\u569D")}).toThrowError({name:"TypeError",message:"EncodingError U+569D"});
expect(() => {ms932Encoder.encode("\u569E")}).toThrowError({name:"TypeError",message:"EncodingError U+569E"});
expect(() => {ms932Encoder.encode("\u569F")}).toThrowError({name:"TypeError",message:"EncodingError U+569F"});
expect([...ms932Encoder.encode("嚠")].join(",")).toBe("154,136"); // U+56A0
expect(() => {ms932Encoder.encode("\u56A1")}).toThrowError({name:"TypeError",message:"EncodingError U+56A1"});
expect([...ms932Encoder.encode("嚢")].join(",")).toBe("148,88"); // U+56A2
expect(() => {ms932Encoder.encode("\u56A3")}).toThrowError({name:"TypeError",message:"EncodingError U+56A3"});
expect(() => {ms932Encoder.encode("\u56A4")}).toThrowError({name:"TypeError",message:"EncodingError U+56A4"});
expect([...ms932Encoder.encode("嚥")].join(",")).toBe("154,139"); // U+56A5
expect(() => {ms932Encoder.encode("\u56A6")}).toThrowError({name:"TypeError",message:"EncodingError U+56A6"});
expect(() => {ms932Encoder.encode("\u56A7")}).toThrowError({name:"TypeError",message:"EncodingError U+56A7"});
expect(() => {ms932Encoder.encode("\u56A8")}).toThrowError({name:"TypeError",message:"EncodingError U+56A8"});
expect(() => {ms932Encoder.encode("\u56A9")}).toThrowError({name:"TypeError",message:"EncodingError U+56A9"});
expect(() => {ms932Encoder.encode("\u56AA")}).toThrowError({name:"TypeError",message:"EncodingError U+56AA"});
expect(() => {ms932Encoder.encode("\u56AB")}).toThrowError({name:"TypeError",message:"EncodingError U+56AB"});
expect(() => {ms932Encoder.encode("\u56AC")}).toThrowError({name:"TypeError",message:"EncodingError U+56AC"});
expect(() => {ms932Encoder.encode("\u56AD")}).toThrowError({name:"TypeError",message:"EncodingError U+56AD"});
expect([...ms932Encoder.encode("嚮")].join(",")).toBe("154,140"); // U+56AE
expect(() => {ms932Encoder.encode("\u56AF")}).toThrowError({name:"TypeError",message:"EncodingError U+56AF"});
expect(() => {ms932Encoder.encode("\u56B0")}).toThrowError({name:"TypeError",message:"EncodingError U+56B0"});
expect(() => {ms932Encoder.encode("\u56B1")}).toThrowError({name:"TypeError",message:"EncodingError U+56B1"});
expect(() => {ms932Encoder.encode("\u56B2")}).toThrowError({name:"TypeError",message:"EncodingError U+56B2"});
expect(() => {ms932Encoder.encode("\u56B3")}).toThrowError({name:"TypeError",message:"EncodingError U+56B3"});
expect([...ms932Encoder.encode("嚴")].join(",")).toBe("154,142"); // U+56B4
expect(() => {ms932Encoder.encode("\u56B5")}).toThrowError({name:"TypeError",message:"EncodingError U+56B5"});
expect([...ms932Encoder.encode("嚶")].join(",")).toBe("154,141"); // U+56B6
expect(() => {ms932Encoder.encode("\u56B7")}).toThrowError({name:"TypeError",message:"EncodingError U+56B7"});
expect(() => {ms932Encoder.encode("\u56B8")}).toThrowError({name:"TypeError",message:"EncodingError U+56B8"});
expect(() => {ms932Encoder.encode("\u56B9")}).toThrowError({name:"TypeError",message:"EncodingError U+56B9"});
expect(() => {ms932Encoder.encode("\u56BA")}).toThrowError({name:"TypeError",message:"EncodingError U+56BA"});
expect(() => {ms932Encoder.encode("\u56BB")}).toThrowError({name:"TypeError",message:"EncodingError U+56BB"});
expect([...ms932Encoder.encode("嚼")].join(",")).toBe("154,144"); // U+56BC
expect(() => {ms932Encoder.encode("\u56BD")}).toThrowError({name:"TypeError",message:"EncodingError U+56BD"});
expect(() => {ms932Encoder.encode("\u56BE")}).toThrowError({name:"TypeError",message:"EncodingError U+56BE"});
expect(() => {ms932Encoder.encode("\u56BF")}).toThrowError({name:"TypeError",message:"EncodingError U+56BF"});
expect([...ms932Encoder.encode("囀囁囂囃")].join(",")).toBe("154,147,154,145,154,143,154,146"); // U+56C0
expect(() => {ms932Encoder.encode("\u56C4")}).toThrowError({name:"TypeError",message:"EncodingError U+56C4"});
expect(() => {ms932Encoder.encode("\u56C5")}).toThrowError({name:"TypeError",message:"EncodingError U+56C5"});
expect(() => {ms932Encoder.encode("\u56C6")}).toThrowError({name:"TypeError",message:"EncodingError U+56C6"});
expect(() => {ms932Encoder.encode("\u56C7")}).toThrowError({name:"TypeError",message:"EncodingError U+56C7"});
expect([...ms932Encoder.encode("囈")].join(",")).toBe("154,148"); // U+56C8
expect(() => {ms932Encoder.encode("\u56C9")}).toThrowError({name:"TypeError",message:"EncodingError U+56C9"});
expect(() => {ms932Encoder.encode("\u56CA")}).toThrowError({name:"TypeError",message:"EncodingError U+56CA"});
expect(() => {ms932Encoder.encode("\u56CB")}).toThrowError({name:"TypeError",message:"EncodingError U+56CB"});
expect(() => {ms932Encoder.encode("\u56CC")}).toThrowError({name:"TypeError",message:"EncodingError U+56CC"});
expect(() => {ms932Encoder.encode("\u56CD")}).toThrowError({name:"TypeError",message:"EncodingError U+56CD"});
expect([...ms932Encoder.encode("囎")].join(",")).toBe("154,149"); // U+56CE
expect(() => {ms932Encoder.encode("\u56CF")}).toThrowError({name:"TypeError",message:"EncodingError U+56CF"});
expect(() => {ms932Encoder.encode("\u56D0")}).toThrowError({name:"TypeError",message:"EncodingError U+56D0"});
expect([...ms932Encoder.encode("囑")].join(",")).toBe("154,150"); // U+56D1
expect(() => {ms932Encoder.encode("\u56D2")}).toThrowError({name:"TypeError",message:"EncodingError U+56D2"});
expect([...ms932Encoder.encode("囓")].join(",")).toBe("154,151"); // U+56D3
expect(() => {ms932Encoder.encode("\u56D4")}).toThrowError({name:"TypeError",message:"EncodingError U+56D4"});
expect(() => {ms932Encoder.encode("\u56D5")}).toThrowError({name:"TypeError",message:"EncodingError U+56D5"});
expect(() => {ms932Encoder.encode("\u56D6")}).toThrowError({name:"TypeError",message:"EncodingError U+56D6"});
expect([...ms932Encoder.encode("囗囘")].join(",")).toBe("154,152,153,100"); // U+56D7
expect(() => {ms932Encoder.encode("\u56D9")}).toThrowError({name:"TypeError",message:"EncodingError U+56D9"});
expect([...ms932Encoder.encode("囚四")].join(",")).toBe("142,250,142,108"); // U+56DA
expect(() => {ms932Encoder.encode("\u56DC")}).toThrowError({name:"TypeError",message:"EncodingError U+56DC"});
expect(() => {ms932Encoder.encode("\u56DD")}).toThrowError({name:"TypeError",message:"EncodingError U+56DD"});
expect([...ms932Encoder.encode("回")].join(",")).toBe("137,241"); // U+56DE
expect(() => {ms932Encoder.encode("\u56DF")}).toThrowError({name:"TypeError",message:"EncodingError U+56DF"});
expect([...ms932Encoder.encode("因")].join(",")).toBe("136,246"); // U+56E0
expect(() => {ms932Encoder.encode("\u56E1")}).toThrowError({name:"TypeError",message:"EncodingError U+56E1"});
expect(() => {ms932Encoder.encode("\u56E2")}).toThrowError({name:"TypeError",message:"EncodingError U+56E2"});
expect([...ms932Encoder.encode("団")].join(",")).toBe("146,99"); // U+56E3
expect(() => {ms932Encoder.encode("\u56E4")}).toThrowError({name:"TypeError",message:"EncodingError U+56E4"});
expect(() => {ms932Encoder.encode("\u56E5")}).toThrowError({name:"TypeError",message:"EncodingError U+56E5"});
expect(() => {ms932Encoder.encode("\u56E6")}).toThrowError({name:"TypeError",message:"EncodingError U+56E6"});
expect(() => {ms932Encoder.encode("\u56E7")}).toThrowError({name:"TypeError",message:"EncodingError U+56E7"});
expect(() => {ms932Encoder.encode("\u56E8")}).toThrowError({name:"TypeError",message:"EncodingError U+56E8"});
expect(() => {ms932Encoder.encode("\u56E9")}).toThrowError({name:"TypeError",message:"EncodingError U+56E9"});
expect(() => {ms932Encoder.encode("\u56EA")}).toThrowError({name:"TypeError",message:"EncodingError U+56EA"});
expect(() => {ms932Encoder.encode("\u56EB")}).toThrowError({name:"TypeError",message:"EncodingError U+56EB"});
expect(() => {ms932Encoder.encode("\u56EC")}).toThrowError({name:"TypeError",message:"EncodingError U+56EC"});
expect(() => {ms932Encoder.encode("\u56ED")}).toThrowError({name:"TypeError",message:"EncodingError U+56ED"});
expect([...ms932Encoder.encode("囮")].join(",")).toBe("154,153"); // U+56EE
expect(() => {ms932Encoder.encode("\u56EF")}).toThrowError({name:"TypeError",message:"EncodingError U+56EF"});
expect([...ms932Encoder.encode("困")].join(",")).toBe("141,162"); // U+56F0
expect(() => {ms932Encoder.encode("\u56F1")}).toThrowError({name:"TypeError",message:"EncodingError U+56F1"});
expect([...ms932Encoder.encode("囲図")].join(",")).toBe("136,205,144,125"); // U+56F2
expect(() => {ms932Encoder.encode("\u56F4")}).toThrowError({name:"TypeError",message:"EncodingError U+56F4"});
expect(() => {ms932Encoder.encode("\u56F5")}).toThrowError({name:"TypeError",message:"EncodingError U+56F5"});
expect(() => {ms932Encoder.encode("\u56F6")}).toThrowError({name:"TypeError",message:"EncodingError U+56F6"});
expect(() => {ms932Encoder.encode("\u56F7")}).toThrowError({name:"TypeError",message:"EncodingError U+56F7"});
expect(() => {ms932Encoder.encode("\u56F8")}).toThrowError({name:"TypeError",message:"EncodingError U+56F8"});
expect([...ms932Encoder.encode("囹固")].join(",")).toBe("154,154,140,197"); // U+56F9
expect(() => {ms932Encoder.encode("\u56FB")}).toThrowError({name:"TypeError",message:"EncodingError U+56FB"});
expect(() => {ms932Encoder.encode("\u56FC")}).toThrowError({name:"TypeError",message:"EncodingError U+56FC"});
expect([...ms932Encoder.encode("国")].join(",")).toBe("141,145"); // U+56FD
expect(() => {ms932Encoder.encode("\u56FE")}).toThrowError({name:"TypeError",message:"EncodingError U+56FE"});
expect([...ms932Encoder.encode("囿圀")].join(",")).toBe("154,156,154,155"); // U+56FF
expect(() => {ms932Encoder.encode("\u5701")}).toThrowError({name:"TypeError",message:"EncodingError U+5701"});
expect(() => {ms932Encoder.encode("\u5702")}).toThrowError({name:"TypeError",message:"EncodingError U+5702"});
expect([...ms932Encoder.encode("圃圄")].join(",")).toBe("149,222,154,157"); // U+5703
expect(() => {ms932Encoder.encode("\u5705")}).toThrowError({name:"TypeError",message:"EncodingError U+5705"});
expect(() => {ms932Encoder.encode("\u5706")}).toThrowError({name:"TypeError",message:"EncodingError U+5706"});
expect(() => {ms932Encoder.encode("\u5707")}).toThrowError({name:"TypeError",message:"EncodingError U+5707"});
expect([...ms932Encoder.encode("圈圉")].join(",")).toBe("154,159,154,158"); // U+5708
expect(() => {ms932Encoder.encode("\u570A")}).toThrowError({name:"TypeError",message:"EncodingError U+570A"});
expect([...ms932Encoder.encode("國")].join(",")).toBe("154,160"); // U+570B
expect(() => {ms932Encoder.encode("\u570C")}).toThrowError({name:"TypeError",message:"EncodingError U+570C"});
expect([...ms932Encoder.encode("圍")].join(",")).toBe("154,161"); // U+570D
expect(() => {ms932Encoder.encode("\u570E")}).toThrowError({name:"TypeError",message:"EncodingError U+570E"});
expect([...ms932Encoder.encode("圏")].join(",")).toBe("140,151"); // U+570F
expect(() => {ms932Encoder.encode("\u5710")}).toThrowError({name:"TypeError",message:"EncodingError U+5710"});
expect(() => {ms932Encoder.encode("\u5711")}).toThrowError({name:"TypeError",message:"EncodingError U+5711"});
expect([...ms932Encoder.encode("園圓")].join(",")).toBe("137,128,154,162"); // U+5712
expect(() => {ms932Encoder.encode("\u5714")}).toThrowError({name:"TypeError",message:"EncodingError U+5714"});
expect(() => {ms932Encoder.encode("\u5715")}).toThrowError({name:"TypeError",message:"EncodingError U+5715"});
expect([...ms932Encoder.encode("圖")].join(",")).toBe("154,164"); // U+5716
expect(() => {ms932Encoder.encode("\u5717")}).toThrowError({name:"TypeError",message:"EncodingError U+5717"});
expect([...ms932Encoder.encode("團")].join(",")).toBe("154,163"); // U+5718
expect(() => {ms932Encoder.encode("\u5719")}).toThrowError({name:"TypeError",message:"EncodingError U+5719"});
expect(() => {ms932Encoder.encode("\u571A")}).toThrowError({name:"TypeError",message:"EncodingError U+571A"});
expect(() => {ms932Encoder.encode("\u571B")}).toThrowError({name:"TypeError",message:"EncodingError U+571B"});
expect([...ms932Encoder.encode("圜")].join(",")).toBe("154,166"); // U+571C
expect(() => {ms932Encoder.encode("\u571D")}).toThrowError({name:"TypeError",message:"EncodingError U+571D"});
expect(() => {ms932Encoder.encode("\u571E")}).toThrowError({name:"TypeError",message:"EncodingError U+571E"});
expect([...ms932Encoder.encode("土")].join(",")).toBe("147,121"); // U+571F
expect(() => {ms932Encoder.encode("\u5720")}).toThrowError({name:"TypeError",message:"EncodingError U+5720"});
expect(() => {ms932Encoder.encode("\u5721")}).toThrowError({name:"TypeError",message:"EncodingError U+5721"});
expect(() => {ms932Encoder.encode("\u5722")}).toThrowError({name:"TypeError",message:"EncodingError U+5722"});
expect(() => {ms932Encoder.encode("\u5723")}).toThrowError({name:"TypeError",message:"EncodingError U+5723"});
expect(() => {ms932Encoder.encode("\u5724")}).toThrowError({name:"TypeError",message:"EncodingError U+5724"});
expect(() => {ms932Encoder.encode("\u5725")}).toThrowError({name:"TypeError",message:"EncodingError U+5725"});
expect([...ms932Encoder.encode("圦圧在")].join(",")).toBe("154,167,136,179,141,221"); // U+5726
expect(() => {ms932Encoder.encode("\u5729")}).toThrowError({name:"TypeError",message:"EncodingError U+5729"});
expect(() => {ms932Encoder.encode("\u572A")}).toThrowError({name:"TypeError",message:"EncodingError U+572A"});
expect(() => {ms932Encoder.encode("\u572B")}).toThrowError({name:"TypeError",message:"EncodingError U+572B"});
expect(() => {ms932Encoder.encode("\u572C")}).toThrowError({name:"TypeError",message:"EncodingError U+572C"});
expect([...ms932Encoder.encode("圭")].join(",")).toBe("140,92"); // U+572D
expect(() => {ms932Encoder.encode("\u572E")}).toThrowError({name:"TypeError",message:"EncodingError U+572E"});
expect(() => {ms932Encoder.encode("\u572F")}).toThrowError({name:"TypeError",message:"EncodingError U+572F"});
expect([...ms932Encoder.encode("地")].join(",")).toBe("146,110"); // U+5730
expect(() => {ms932Encoder.encode("\u5731")}).toThrowError({name:"TypeError",message:"EncodingError U+5731"});
expect(() => {ms932Encoder.encode("\u5732")}).toThrowError({name:"TypeError",message:"EncodingError U+5732"});
expect(() => {ms932Encoder.encode("\u5733")}).toThrowError({name:"TypeError",message:"EncodingError U+5733"});
expect(() => {ms932Encoder.encode("\u5734")}).toThrowError({name:"TypeError",message:"EncodingError U+5734"});
expect(() => {ms932Encoder.encode("\u5735")}).toThrowError({name:"TypeError",message:"EncodingError U+5735"});
expect(() => {ms932Encoder.encode("\u5736")}).toThrowError({name:"TypeError",message:"EncodingError U+5736"});
expect([...ms932Encoder.encode("圷圸")].join(",")).toBe("154,168,154,169"); // U+5737
expect(() => {ms932Encoder.encode("\u5739")}).toThrowError({name:"TypeError",message:"EncodingError U+5739"});
expect(() => {ms932Encoder.encode("\u573A")}).toThrowError({name:"TypeError",message:"EncodingError U+573A"});
expect([...ms932Encoder.encode("圻")].join(",")).toBe("154,171"); // U+573B
expect(() => {ms932Encoder.encode("\u573C")}).toThrowError({name:"TypeError",message:"EncodingError U+573C"});
expect(() => {ms932Encoder.encode("\u573D")}).toThrowError({name:"TypeError",message:"EncodingError U+573D"});
expect(() => {ms932Encoder.encode("\u573E")}).toThrowError({name:"TypeError",message:"EncodingError U+573E"});
expect(() => {ms932Encoder.encode("\u573F")}).toThrowError({name:"TypeError",message:"EncodingError U+573F"});
expect([...ms932Encoder.encode("址")].join(",")).toBe("154,172"); // U+5740
expect(() => {ms932Encoder.encode("\u5741")}).toThrowError({name:"TypeError",message:"EncodingError U+5741"});
expect([...ms932Encoder.encode("坂")].join(",")).toBe("141,226"); // U+5742
expect(() => {ms932Encoder.encode("\u5743")}).toThrowError({name:"TypeError",message:"EncodingError U+5743"});
expect(() => {ms932Encoder.encode("\u5744")}).toThrowError({name:"TypeError",message:"EncodingError U+5744"});
expect(() => {ms932Encoder.encode("\u5745")}).toThrowError({name:"TypeError",message:"EncodingError U+5745"});
expect(() => {ms932Encoder.encode("\u5746")}).toThrowError({name:"TypeError",message:"EncodingError U+5746"});
expect([...ms932Encoder.encode("均")].join(",")).toBe("139,207"); // U+5747
expect(() => {ms932Encoder.encode("\u5748")}).toThrowError({name:"TypeError",message:"EncodingError U+5748"});
expect(() => {ms932Encoder.encode("\u5749")}).toThrowError({name:"TypeError",message:"EncodingError U+5749"});
expect([...ms932Encoder.encode("坊")].join(",")).toBe("150,86"); // U+574A
expect(() => {ms932Encoder.encode("\u574B")}).toThrowError({name:"TypeError",message:"EncodingError U+574B"});
expect(() => {ms932Encoder.encode("\u574C")}).toThrowError({name:"TypeError",message:"EncodingError U+574C"});
expect(() => {ms932Encoder.encode("\u574D")}).toThrowError({name:"TypeError",message:"EncodingError U+574D"});
expect([...ms932Encoder.encode("坎坏坐坑")].join(",")).toBe("154,170,154,173,141,191,141,66"); // U+574E
expect(() => {ms932Encoder.encode("\u5752")}).toThrowError({name:"TypeError",message:"EncodingError U+5752"});
expect(() => {ms932Encoder.encode("\u5753")}).toThrowError({name:"TypeError",message:"EncodingError U+5753"});
expect(() => {ms932Encoder.encode("\u5754")}).toThrowError({name:"TypeError",message:"EncodingError U+5754"});
expect(() => {ms932Encoder.encode("\u5755")}).toThrowError({name:"TypeError",message:"EncodingError U+5755"});
expect(() => {ms932Encoder.encode("\u5756")}).toThrowError({name:"TypeError",message:"EncodingError U+5756"});
expect(() => {ms932Encoder.encode("\u5757")}).toThrowError({name:"TypeError",message:"EncodingError U+5757"});
expect(() => {ms932Encoder.encode("\u5758")}).toThrowError({name:"TypeError",message:"EncodingError U+5758"});
expect([...ms932Encoder.encode("坙")].join(",")).toBe("250,150"); // U+5759
expect(() => {ms932Encoder.encode("\u575A")}).toThrowError({name:"TypeError",message:"EncodingError U+575A"});
expect(() => {ms932Encoder.encode("\u575B")}).toThrowError({name:"TypeError",message:"EncodingError U+575B"});
expect(() => {ms932Encoder.encode("\u575C")}).toThrowError({name:"TypeError",message:"EncodingError U+575C"});
expect(() => {ms932Encoder.encode("\u575D")}).toThrowError({name:"TypeError",message:"EncodingError U+575D"});
expect(() => {ms932Encoder.encode("\u575E")}).toThrowError({name:"TypeError",message:"EncodingError U+575E"});
expect(() => {ms932Encoder.encode("\u575F")}).toThrowError({name:"TypeError",message:"EncodingError U+575F"});
expect(() => {ms932Encoder.encode("\u5760")}).toThrowError({name:"TypeError",message:"EncodingError U+5760"});
expect([...ms932Encoder.encode("坡")].join(",")).toBe("154,177"); // U+5761
expect(() => {ms932Encoder.encode("\u5762")}).toThrowError({name:"TypeError",message:"EncodingError U+5762"});
expect(() => {ms932Encoder.encode("\u5763")}).toThrowError({name:"TypeError",message:"EncodingError U+5763"});
expect([...ms932Encoder.encode("坤坥坦")].join(",")).toBe("141,163,250,151,146,82"); // U+5764
expect(() => {ms932Encoder.encode("\u5767")}).toThrowError({name:"TypeError",message:"EncodingError U+5767"});
expect(() => {ms932Encoder.encode("\u5768")}).toThrowError({name:"TypeError",message:"EncodingError U+5768"});
expect([...ms932Encoder.encode("坩坪")].join(",")).toBe("154,174,146,216"); // U+5769
expect(() => {ms932Encoder.encode("\u576B")}).toThrowError({name:"TypeError",message:"EncodingError U+576B"});
expect(() => {ms932Encoder.encode("\u576C")}).toThrowError({name:"TypeError",message:"EncodingError U+576C"});
expect(() => {ms932Encoder.encode("\u576D")}).toThrowError({name:"TypeError",message:"EncodingError U+576D"});
expect(() => {ms932Encoder.encode("\u576E")}).toThrowError({name:"TypeError",message:"EncodingError U+576E"});
expect(() => {ms932Encoder.encode("\u576F")}).toThrowError({name:"TypeError",message:"EncodingError U+576F"});
expect(() => {ms932Encoder.encode("\u5770")}).toThrowError({name:"TypeError",message:"EncodingError U+5770"});
expect(() => {ms932Encoder.encode("\u5771")}).toThrowError({name:"TypeError",message:"EncodingError U+5771"});
expect(() => {ms932Encoder.encode("\u5772")}).toThrowError({name:"TypeError",message:"EncodingError U+5772"});
expect(() => {ms932Encoder.encode("\u5773")}).toThrowError({name:"TypeError",message:"EncodingError U+5773"});
expect(() => {ms932Encoder.encode("\u5774")}).toThrowError({name:"TypeError",message:"EncodingError U+5774"});
expect(() => {ms932Encoder.encode("\u5775")}).toThrowError({name:"TypeError",message:"EncodingError U+5775"});
expect(() => {ms932Encoder.encode("\u5776")}).toThrowError({name:"TypeError",message:"EncodingError U+5776"});
expect(() => {ms932Encoder.encode("\u5777")}).toThrowError({name:"TypeError",message:"EncodingError U+5777"});
expect(() => {ms932Encoder.encode("\u5778")}).toThrowError({name:"TypeError",message:"EncodingError U+5778"});
expect(() => {ms932Encoder.encode("\u5779")}).toThrowError({name:"TypeError",message:"EncodingError U+5779"});
expect(() => {ms932Encoder.encode("\u577A")}).toThrowError({name:"TypeError",message:"EncodingError U+577A"});
expect(() => {ms932Encoder.encode("\u577B")}).toThrowError({name:"TypeError",message:"EncodingError U+577B"});
expect(() => {ms932Encoder.encode("\u577C")}).toThrowError({name:"TypeError",message:"EncodingError U+577C"});
expect(() => {ms932Encoder.encode("\u577D")}).toThrowError({name:"TypeError",message:"EncodingError U+577D"});
expect(() => {ms932Encoder.encode("\u577E")}).toThrowError({name:"TypeError",message:"EncodingError U+577E"});
expect([...ms932Encoder.encode("坿")].join(",")).toBe("154,178"); // U+577F
expect(() => {ms932Encoder.encode("\u5780")}).toThrowError({name:"TypeError",message:"EncodingError U+5780"});
expect(() => {ms932Encoder.encode("\u5781")}).toThrowError({name:"TypeError",message:"EncodingError U+5781"});
expect([...ms932Encoder.encode("垂")].join(",")).toBe("144,130"); // U+5782
expect(() => {ms932Encoder.encode("\u5783")}).toThrowError({name:"TypeError",message:"EncodingError U+5783"});
expect(() => {ms932Encoder.encode("\u5784")}).toThrowError({name:"TypeError",message:"EncodingError U+5784"});
expect(() => {ms932Encoder.encode("\u5785")}).toThrowError({name:"TypeError",message:"EncodingError U+5785"});
expect(() => {ms932Encoder.encode("\u5786")}).toThrowError({name:"TypeError",message:"EncodingError U+5786"});
expect(() => {ms932Encoder.encode("\u5787")}).toThrowError({name:"TypeError",message:"EncodingError U+5787"});
expect([...ms932Encoder.encode("垈垉")].join(",")).toBe("154,176,154,179"); // U+5788
expect(() => {ms932Encoder.encode("\u578A")}).toThrowError({name:"TypeError",message:"EncodingError U+578A"});
expect([...ms932Encoder.encode("型")].join(",")).toBe("140,94"); // U+578B
expect(() => {ms932Encoder.encode("\u578C")}).toThrowError({name:"TypeError",message:"EncodingError U+578C"});
expect(() => {ms932Encoder.encode("\u578D")}).toThrowError({name:"TypeError",message:"EncodingError U+578D"});
expect(() => {ms932Encoder.encode("\u578E")}).toThrowError({name:"TypeError",message:"EncodingError U+578E"});
expect(() => {ms932Encoder.encode("\u578F")}).toThrowError({name:"TypeError",message:"EncodingError U+578F"});
expect(() => {ms932Encoder.encode("\u5790")}).toThrowError({name:"TypeError",message:"EncodingError U+5790"});
expect(() => {ms932Encoder.encode("\u5791")}).toThrowError({name:"TypeError",message:"EncodingError U+5791"});
expect(() => {ms932Encoder.encode("\u5792")}).toThrowError({name:"TypeError",message:"EncodingError U+5792"});
expect([...ms932Encoder.encode("垓")].join(",")).toBe("154,180"); // U+5793
expect(() => {ms932Encoder.encode("\u5794")}).toThrowError({name:"TypeError",message:"EncodingError U+5794"});
expect(() => {ms932Encoder.encode("\u5795")}).toThrowError({name:"TypeError",message:"EncodingError U+5795"});
expect(() => {ms932Encoder.encode("\u5796")}).toThrowError({name:"TypeError",message:"EncodingError U+5796"});
expect(() => {ms932Encoder.encode("\u5797")}).toThrowError({name:"TypeError",message:"EncodingError U+5797"});
expect(() => {ms932Encoder.encode("\u5798")}).toThrowError({name:"TypeError",message:"EncodingError U+5798"});
expect(() => {ms932Encoder.encode("\u5799")}).toThrowError({name:"TypeError",message:"EncodingError U+5799"});
expect(() => {ms932Encoder.encode("\u579A")}).toThrowError({name:"TypeError",message:"EncodingError U+579A"});
expect(() => {ms932Encoder.encode("\u579B")}).toThrowError({name:"TypeError",message:"EncodingError U+579B"});
expect(() => {ms932Encoder.encode("\u579C")}).toThrowError({name:"TypeError",message:"EncodingError U+579C"});
expect(() => {ms932Encoder.encode("\u579D")}).toThrowError({name:"TypeError",message:"EncodingError U+579D"});
expect(() => {ms932Encoder.encode("\u579E")}).toThrowError({name:"TypeError",message:"EncodingError U+579E"});
expect(() => {ms932Encoder.encode("\u579F")}).toThrowError({name:"TypeError",message:"EncodingError U+579F"});
expect([...ms932Encoder.encode("垠")].join(",")).toBe("154,181"); // U+57A0
expect(() => {ms932Encoder.encode("\u57A1")}).toThrowError({name:"TypeError",message:"EncodingError U+57A1"});
expect([...ms932Encoder.encode("垢垣垤")].join(",")).toBe("141,67,138,95,154,183"); // U+57A2
expect(() => {ms932Encoder.encode("\u57A5")}).toThrowError({name:"TypeError",message:"EncodingError U+57A5"});
expect(() => {ms932Encoder.encode("\u57A6")}).toThrowError({name:"TypeError",message:"EncodingError U+57A6"});
expect(() => {ms932Encoder.encode("\u57A7")}).toThrowError({name:"TypeError",message:"EncodingError U+57A7"});
expect(() => {ms932Encoder.encode("\u57A8")}).toThrowError({name:"TypeError",message:"EncodingError U+57A8"});
expect(() => {ms932Encoder.encode("\u57A9")}).toThrowError({name:"TypeError",message:"EncodingError U+57A9"});
expect([...ms932Encoder.encode("垪")].join(",")).toBe("154,184"); // U+57AA
expect(() => {ms932Encoder.encode("\u57AB")}).toThrowError({name:"TypeError",message:"EncodingError U+57AB"});
expect([...ms932Encoder.encode("垬")].join(",")).toBe("250,152"); // U+57AC
expect(() => {ms932Encoder.encode("\u57AD")}).toThrowError({name:"TypeError",message:"EncodingError U+57AD"});
expect(() => {ms932Encoder.encode("\u57AE")}).toThrowError({name:"TypeError",message:"EncodingError U+57AE"});
expect(() => {ms932Encoder.encode("\u57AF")}).toThrowError({name:"TypeError",message:"EncodingError U+57AF"});
expect([...ms932Encoder.encode("垰")].join(",")).toBe("154,185"); // U+57B0
expect(() => {ms932Encoder.encode("\u57B1")}).toThrowError({name:"TypeError",message:"EncodingError U+57B1"});
expect(() => {ms932Encoder.encode("\u57B2")}).toThrowError({name:"TypeError",message:"EncodingError U+57B2"});
expect([...ms932Encoder.encode("垳")].join(",")).toBe("154,182"); // U+57B3
expect(() => {ms932Encoder.encode("\u57B4")}).toThrowError({name:"TypeError",message:"EncodingError U+57B4"});
expect(() => {ms932Encoder.encode("\u57B5")}).toThrowError({name:"TypeError",message:"EncodingError U+57B5"});
expect(() => {ms932Encoder.encode("\u57B6")}).toThrowError({name:"TypeError",message:"EncodingError U+57B6"});
expect(() => {ms932Encoder.encode("\u57B7")}).toThrowError({name:"TypeError",message:"EncodingError U+57B7"});
expect(() => {ms932Encoder.encode("\u57B8")}).toThrowError({name:"TypeError",message:"EncodingError U+57B8"});
expect(() => {ms932Encoder.encode("\u57B9")}).toThrowError({name:"TypeError",message:"EncodingError U+57B9"});
expect(() => {ms932Encoder.encode("\u57BA")}).toThrowError({name:"TypeError",message:"EncodingError U+57BA"});
expect(() => {ms932Encoder.encode("\u57BB")}).toThrowError({name:"TypeError",message:"EncodingError U+57BB"});
expect(() => {ms932Encoder.encode("\u57BC")}).toThrowError({name:"TypeError",message:"EncodingError U+57BC"});
expect(() => {ms932Encoder.encode("\u57BD")}).toThrowError({name:"TypeError",message:"EncodingError U+57BD"});
expect(() => {ms932Encoder.encode("\u57BE")}).toThrowError({name:"TypeError",message:"EncodingError U+57BE"});
expect(() => {ms932Encoder.encode("\u57BF")}).toThrowError({name:"TypeError",message:"EncodingError U+57BF"});
expect([...ms932Encoder.encode("埀")].join(",")).toBe("154,175"); // U+57C0
expect(() => {ms932Encoder.encode("\u57C1")}).toThrowError({name:"TypeError",message:"EncodingError U+57C1"});
expect(() => {ms932Encoder.encode("\u57C2")}).toThrowError({name:"TypeError",message:"EncodingError U+57C2"});
expect([...ms932Encoder.encode("埃")].join(",")).toBe("154,186"); // U+57C3
expect(() => {ms932Encoder.encode("\u57C4")}).toThrowError({name:"TypeError",message:"EncodingError U+57C4"});
expect(() => {ms932Encoder.encode("\u57C5")}).toThrowError({name:"TypeError",message:"EncodingError U+57C5"});
expect([...ms932Encoder.encode("埆埇埈")].join(",")).toBe("154,187,250,154,250,153"); // U+57C6
expect(() => {ms932Encoder.encode("\u57C9")}).toThrowError({name:"TypeError",message:"EncodingError U+57C9"});
expect(() => {ms932Encoder.encode("\u57CA")}).toThrowError({name:"TypeError",message:"EncodingError U+57CA"});
expect([...ms932Encoder.encode("埋")].join(",")).toBe("150,132"); // U+57CB
expect(() => {ms932Encoder.encode("\u57CC")}).toThrowError({name:"TypeError",message:"EncodingError U+57CC"});
expect(() => {ms932Encoder.encode("\u57CD")}).toThrowError({name:"TypeError",message:"EncodingError U+57CD"});
expect([...ms932Encoder.encode("城")].join(",")).toBe("143,233"); // U+57CE
expect(() => {ms932Encoder.encode("\u57CF")}).toThrowError({name:"TypeError",message:"EncodingError U+57CF"});
expect(() => {ms932Encoder.encode("\u57D0")}).toThrowError({name:"TypeError",message:"EncodingError U+57D0"});
expect(() => {ms932Encoder.encode("\u57D1")}).toThrowError({name:"TypeError",message:"EncodingError U+57D1"});
expect([...ms932Encoder.encode("埒埓埔")].join(",")).toBe("154,189,154,190,154,188"); // U+57D2
expect(() => {ms932Encoder.encode("\u57D5")}).toThrowError({name:"TypeError",message:"EncodingError U+57D5"});
expect([...ms932Encoder.encode("埖")].join(",")).toBe("154,192"); // U+57D6
expect(() => {ms932Encoder.encode("\u57D7")}).toThrowError({name:"TypeError",message:"EncodingError U+57D7"});
expect(() => {ms932Encoder.encode("\u57D8")}).toThrowError({name:"TypeError",message:"EncodingError U+57D8"});
expect(() => {ms932Encoder.encode("\u57D9")}).toThrowError({name:"TypeError",message:"EncodingError U+57D9"});
expect(() => {ms932Encoder.encode("\u57DA")}).toThrowError({name:"TypeError",message:"EncodingError U+57DA"});
expect(() => {ms932Encoder.encode("\u57DB")}).toThrowError({name:"TypeError",message:"EncodingError U+57DB"});
expect([...ms932Encoder.encode("埜")].join(",")).toBe("148,87"); // U+57DC
expect(() => {ms932Encoder.encode("\u57DD")}).toThrowError({name:"TypeError",message:"EncodingError U+57DD"});
expect(() => {ms932Encoder.encode("\u57DE")}).toThrowError({name:"TypeError",message:"EncodingError U+57DE"});
expect([...ms932Encoder.encode("域埠")].join(",")).toBe("136,230,149,117"); // U+57DF
expect(() => {ms932Encoder.encode("\u57E1")}).toThrowError({name:"TypeError",message:"EncodingError U+57E1"});
expect(() => {ms932Encoder.encode("\u57E2")}).toThrowError({name:"TypeError",message:"EncodingError U+57E2"});
expect([...ms932Encoder.encode("埣")].join(",")).toBe("154,193"); // U+57E3
expect(() => {ms932Encoder.encode("\u57E4")}).toThrowError({name:"TypeError",message:"EncodingError U+57E4"});
expect(() => {ms932Encoder.encode("\u57E5")}).toThrowError({name:"TypeError",message:"EncodingError U+57E5"});
expect(() => {ms932Encoder.encode("\u57E6")}).toThrowError({name:"TypeError",message:"EncodingError U+57E6"});
expect(() => {ms932Encoder.encode("\u57E7")}).toThrowError({name:"TypeError",message:"EncodingError U+57E7"});
expect(() => {ms932Encoder.encode("\u57E8")}).toThrowError({name:"TypeError",message:"EncodingError U+57E8"});
expect(() => {ms932Encoder.encode("\u57E9")}).toThrowError({name:"TypeError",message:"EncodingError U+57E9"});
expect(() => {ms932Encoder.encode("\u57EA")}).toThrowError({name:"TypeError",message:"EncodingError U+57EA"});
expect(() => {ms932Encoder.encode("\u57EB")}).toThrowError({name:"TypeError",message:"EncodingError U+57EB"});
expect(() => {ms932Encoder.encode("\u57EC")}).toThrowError({name:"TypeError",message:"EncodingError U+57EC"});
expect(() => {ms932Encoder.encode("\u57ED")}).toThrowError({name:"TypeError",message:"EncodingError U+57ED"});
expect(() => {ms932Encoder.encode("\u57EE")}).toThrowError({name:"TypeError",message:"EncodingError U+57EE"});
expect(() => {ms932Encoder.encode("\u57EF")}).toThrowError({name:"TypeError",message:"EncodingError U+57EF"});
expect(() => {ms932Encoder.encode("\u57F0")}).toThrowError({name:"TypeError",message:"EncodingError U+57F0"});
expect(() => {ms932Encoder.encode("\u57F1")}).toThrowError({name:"TypeError",message:"EncodingError U+57F1"});
expect(() => {ms932Encoder.encode("\u57F2")}).toThrowError({name:"TypeError",message:"EncodingError U+57F2"});
expect(() => {ms932Encoder.encode("\u57F3")}).toThrowError({name:"TypeError",message:"EncodingError U+57F3"});
expect([...ms932Encoder.encode("埴")].join(",")).toBe("143,251"); // U+57F4
expect(() => {ms932Encoder.encode("\u57F5")}).toThrowError({name:"TypeError",message:"EncodingError U+57F5"});
expect(() => {ms932Encoder.encode("\u57F6")}).toThrowError({name:"TypeError",message:"EncodingError U+57F6"});
expect([...ms932Encoder.encode("執")].join(",")).toBe("142,183"); // U+57F7
expect(() => {ms932Encoder.encode("\u57F8")}).toThrowError({name:"TypeError",message:"EncodingError U+57F8"});
expect([...ms932Encoder.encode("培基")].join(",")).toBe("148,124,138,238"); // U+57F9
expect(() => {ms932Encoder.encode("\u57FB")}).toThrowError({name:"TypeError",message:"EncodingError U+57FB"});
expect([...ms932Encoder.encode("埼")].join(",")).toBe("141,233"); // U+57FC
expect(() => {ms932Encoder.encode("\u57FD")}).toThrowError({name:"TypeError",message:"EncodingError U+57FD"});
expect(() => {ms932Encoder.encode("\u57FE")}).toThrowError({name:"TypeError",message:"EncodingError U+57FE"});
expect(() => {ms932Encoder.encode("\u57FF")}).toThrowError({name:"TypeError",message:"EncodingError U+57FF"});
expect([...ms932Encoder.encode("堀")].join(",")).toBe("150,120"); // U+5800
expect(() => {ms932Encoder.encode("\u5801")}).toThrowError({name:"TypeError",message:"EncodingError U+5801"});
expect([...ms932Encoder.encode("堂")].join(",")).toBe("147,176"); // U+5802
expect(() => {ms932Encoder.encode("\u5803")}).toThrowError({name:"TypeError",message:"EncodingError U+5803"});
expect(() => {ms932Encoder.encode("\u5804")}).toThrowError({name:"TypeError",message:"EncodingError U+5804"});
expect([...ms932Encoder.encode("堅堆")].join(",")).toBe("140,152,145,205"); // U+5805
expect(() => {ms932Encoder.encode("\u5807")}).toThrowError({name:"TypeError",message:"EncodingError U+5807"});
expect(() => {ms932Encoder.encode("\u5808")}).toThrowError({name:"TypeError",message:"EncodingError U+5808"});
expect(() => {ms932Encoder.encode("\u5809")}).toThrowError({name:"TypeError",message:"EncodingError U+5809"});
expect([...ms932Encoder.encode("堊堋")].join(",")).toBe("154,191,154,194"); // U+580A
expect(() => {ms932Encoder.encode("\u580C")}).toThrowError({name:"TypeError",message:"EncodingError U+580C"});
expect(() => {ms932Encoder.encode("\u580D")}).toThrowError({name:"TypeError",message:"EncodingError U+580D"});
expect(() => {ms932Encoder.encode("\u580E")}).toThrowError({name:"TypeError",message:"EncodingError U+580E"});
expect(() => {ms932Encoder.encode("\u580F")}).toThrowError({name:"TypeError",message:"EncodingError U+580F"});
expect(() => {ms932Encoder.encode("\u5810")}).toThrowError({name:"TypeError",message:"EncodingError U+5810"});
expect(() => {ms932Encoder.encode("\u5811")}).toThrowError({name:"TypeError",message:"EncodingError U+5811"});
expect(() => {ms932Encoder.encode("\u5812")}).toThrowError({name:"TypeError",message:"EncodingError U+5812"});
expect(() => {ms932Encoder.encode("\u5813")}).toThrowError({name:"TypeError",message:"EncodingError U+5813"});
expect(() => {ms932Encoder.encode("\u5814")}).toThrowError({name:"TypeError",message:"EncodingError U+5814"});
expect([...ms932Encoder.encode("堕")].join(",")).toBe("145,194"); // U+5815
expect(() => {ms932Encoder.encode("\u5816")}).toThrowError({name:"TypeError",message:"EncodingError U+5816"});
expect(() => {ms932Encoder.encode("\u5817")}).toThrowError({name:"TypeError",message:"EncodingError U+5817"});
expect(() => {ms932Encoder.encode("\u5818")}).toThrowError({name:"TypeError",message:"EncodingError U+5818"});
expect([...ms932Encoder.encode("堙")].join(",")).toBe("154,195"); // U+5819
expect(() => {ms932Encoder.encode("\u581A")}).toThrowError({name:"TypeError",message:"EncodingError U+581A"});
expect(() => {ms932Encoder.encode("\u581B")}).toThrowError({name:"TypeError",message:"EncodingError U+581B"});
expect(() => {ms932Encoder.encode("\u581C")}).toThrowError({name:"TypeError",message:"EncodingError U+581C"});
expect([...ms932Encoder.encode("堝")].join(",")).toBe("154,196"); // U+581D
expect(() => {ms932Encoder.encode("\u581E")}).toThrowError({name:"TypeError",message:"EncodingError U+581E"});
expect(() => {ms932Encoder.encode("\u581F")}).toThrowError({name:"TypeError",message:"EncodingError U+581F"});
expect(() => {ms932Encoder.encode("\u5820")}).toThrowError({name:"TypeError",message:"EncodingError U+5820"});
expect([...ms932Encoder.encode("堡")].join(",")).toBe("154,198"); // U+5821
expect(() => {ms932Encoder.encode("\u5822")}).toThrowError({name:"TypeError",message:"EncodingError U+5822"});
expect(() => {ms932Encoder.encode("\u5823")}).toThrowError({name:"TypeError",message:"EncodingError U+5823"});
expect([...ms932Encoder.encode("堤")].join(",")).toBe("146,231"); // U+5824
expect(() => {ms932Encoder.encode("\u5825")}).toThrowError({name:"TypeError",message:"EncodingError U+5825"});
expect(() => {ms932Encoder.encode("\u5826")}).toThrowError({name:"TypeError",message:"EncodingError U+5826"});
expect(() => {ms932Encoder.encode("\u5827")}).toThrowError({name:"TypeError",message:"EncodingError U+5827"});
expect(() => {ms932Encoder.encode("\u5828")}).toThrowError({name:"TypeError",message:"EncodingError U+5828"});
expect(() => {ms932Encoder.encode("\u5829")}).toThrowError({name:"TypeError",message:"EncodingError U+5829"});
expect([...ms932Encoder.encode("堪")].join(",")).toBe("138,172"); // U+582A
expect(() => {ms932Encoder.encode("\u582B")}).toThrowError({name:"TypeError",message:"EncodingError U+582B"});
expect(() => {ms932Encoder.encode("\u582C")}).toThrowError({name:"TypeError",message:"EncodingError U+582C"});
expect(() => {ms932Encoder.encode("\u582D")}).toThrowError({name:"TypeError",message:"EncodingError U+582D"});
expect(() => {ms932Encoder.encode("\u582E")}).toThrowError({name:"TypeError",message:"EncodingError U+582E"});
expect([...ms932Encoder.encode("堯堰報")].join(",")).toBe("234,159,137,129,149,241"); // U+582F
expect(() => {ms932Encoder.encode("\u5832")}).toThrowError({name:"TypeError",message:"EncodingError U+5832"});
expect(() => {ms932Encoder.encode("\u5833")}).toThrowError({name:"TypeError",message:"EncodingError U+5833"});
expect([...ms932Encoder.encode("場堵")].join(",")).toBe("143,234,147,103"); // U+5834
expect(() => {ms932Encoder.encode("\u5836")}).toThrowError({name:"TypeError",message:"EncodingError U+5836"});
expect(() => {ms932Encoder.encode("\u5837")}).toThrowError({name:"TypeError",message:"EncodingError U+5837"});
expect(() => {ms932Encoder.encode("\u5838")}).toThrowError({name:"TypeError",message:"EncodingError U+5838"});
expect(() => {ms932Encoder.encode("\u5839")}).toThrowError({name:"TypeError",message:"EncodingError U+5839"});
expect([...ms932Encoder.encode("堺")].join(",")).toBe("141,228"); // U+583A
expect(() => {ms932Encoder.encode("\u583B")}).toThrowError({name:"TypeError",message:"EncodingError U+583B"});
expect(() => {ms932Encoder.encode("\u583C")}).toThrowError({name:"TypeError",message:"EncodingError U+583C"});
expect([...ms932Encoder.encode("堽")].join(",")).toBe("154,204"); // U+583D
expect(() => {ms932Encoder.encode("\u583E")}).toThrowError({name:"TypeError",message:"EncodingError U+583E"});
expect(() => {ms932Encoder.encode("\u583F")}).toThrowError({name:"TypeError",message:"EncodingError U+583F"});
expect([...ms932Encoder.encode("塀塁")].join(",")).toBe("149,187,151,219"); // U+5840
expect(() => {ms932Encoder.encode("\u5842")}).toThrowError({name:"TypeError",message:"EncodingError U+5842"});
expect(() => {ms932Encoder.encode("\u5843")}).toThrowError({name:"TypeError",message:"EncodingError U+5843"});
expect(() => {ms932Encoder.encode("\u5844")}).toThrowError({name:"TypeError",message:"EncodingError U+5844"});
expect(() => {ms932Encoder.encode("\u5845")}).toThrowError({name:"TypeError",message:"EncodingError U+5845"});
expect(() => {ms932Encoder.encode("\u5846")}).toThrowError({name:"TypeError",message:"EncodingError U+5846"});
expect(() => {ms932Encoder.encode("\u5847")}).toThrowError({name:"TypeError",message:"EncodingError U+5847"});
expect(() => {ms932Encoder.encode("\u5848")}).toThrowError({name:"TypeError",message:"EncodingError U+5848"});
expect(() => {ms932Encoder.encode("\u5849")}).toThrowError({name:"TypeError",message:"EncodingError U+5849"});
expect([...ms932Encoder.encode("塊塋")].join(",")).toBe("137,242,154,200"); // U+584A
expect(() => {ms932Encoder.encode("\u584C")}).toThrowError({name:"TypeError",message:"EncodingError U+584C"});
expect(() => {ms932Encoder.encode("\u584D")}).toThrowError({name:"TypeError",message:"EncodingError U+584D"});
expect(() => {ms932Encoder.encode("\u584E")}).toThrowError({name:"TypeError",message:"EncodingError U+584E"});
expect(() => {ms932Encoder.encode("\u584F")}).toThrowError({name:"TypeError",message:"EncodingError U+584F"});
expect(() => {ms932Encoder.encode("\u5850")}).toThrowError({name:"TypeError",message:"EncodingError U+5850"});
expect([...ms932Encoder.encode("塑塒")].join(",")).toBe("145,89,154,203"); // U+5851
expect(() => {ms932Encoder.encode("\u5853")}).toThrowError({name:"TypeError",message:"EncodingError U+5853"});
expect([...ms932Encoder.encode("塔")].join(",")).toBe("147,131"); // U+5854
expect(() => {ms932Encoder.encode("\u5855")}).toThrowError({name:"TypeError",message:"EncodingError U+5855"});
expect(() => {ms932Encoder.encode("\u5856")}).toThrowError({name:"TypeError",message:"EncodingError U+5856"});
expect([...ms932Encoder.encode("塗塘塙塚")].join(",")).toBe("147,104,147,132,148,183,146,203"); // U+5857
expect(() => {ms932Encoder.encode("\u585B")}).toThrowError({name:"TypeError",message:"EncodingError U+585B"});
expect(() => {ms932Encoder.encode("\u585C")}).toThrowError({name:"TypeError",message:"EncodingError U+585C"});
expect(() => {ms932Encoder.encode("\u585D")}).toThrowError({name:"TypeError",message:"EncodingError U+585D"});
expect([...ms932Encoder.encode("塞")].join(",")).toBe("141,199"); // U+585E
expect(() => {ms932Encoder.encode("\u585F")}).toThrowError({name:"TypeError",message:"EncodingError U+585F"});
expect(() => {ms932Encoder.encode("\u5860")}).toThrowError({name:"TypeError",message:"EncodingError U+5860"});
expect(() => {ms932Encoder.encode("\u5861")}).toThrowError({name:"TypeError",message:"EncodingError U+5861"});
expect([...ms932Encoder.encode("塢")].join(",")).toBe("154,199"); // U+5862
expect(() => {ms932Encoder.encode("\u5863")}).toThrowError({name:"TypeError",message:"EncodingError U+5863"});
expect(() => {ms932Encoder.encode("\u5864")}).toThrowError({name:"TypeError",message:"EncodingError U+5864"});
expect(() => {ms932Encoder.encode("\u5865")}).toThrowError({name:"TypeError",message:"EncodingError U+5865"});
expect(() => {ms932Encoder.encode("\u5866")}).toThrowError({name:"TypeError",message:"EncodingError U+5866"});
expect(() => {ms932Encoder.encode("\u5867")}).toThrowError({name:"TypeError",message:"EncodingError U+5867"});
expect(() => {ms932Encoder.encode("\u5868")}).toThrowError({name:"TypeError",message:"EncodingError U+5868"});
expect([...ms932Encoder.encode("塩")].join(",")).toBe("137,150"); // U+5869
expect(() => {ms932Encoder.encode("\u586A")}).toThrowError({name:"TypeError",message:"EncodingError U+586A"});
expect([...ms932Encoder.encode("填")].join(",")).toBe("147,85"); // U+586B
expect(() => {ms932Encoder.encode("\u586C")}).toThrowError({name:"TypeError",message:"EncodingError U+586C"});
expect(() => {ms932Encoder.encode("\u586D")}).toThrowError({name:"TypeError",message:"EncodingError U+586D"});
expect(() => {ms932Encoder.encode("\u586E")}).toThrowError({name:"TypeError",message:"EncodingError U+586E"});
expect(() => {ms932Encoder.encode("\u586F")}).toThrowError({name:"TypeError",message:"EncodingError U+586F"});
expect([...ms932Encoder.encode("塰")].join(",")).toBe("154,201"); // U+5870
expect(() => {ms932Encoder.encode("\u5871")}).toThrowError({name:"TypeError",message:"EncodingError U+5871"});
expect([...ms932Encoder.encode("塲")].join(",")).toBe("154,197"); // U+5872
expect(() => {ms932Encoder.encode("\u5873")}).toThrowError({name:"TypeError",message:"EncodingError U+5873"});
expect(() => {ms932Encoder.encode("\u5874")}).toThrowError({name:"TypeError",message:"EncodingError U+5874"});
expect([...ms932Encoder.encode("塵")].join(",")).toBe("144,111"); // U+5875
expect(() => {ms932Encoder.encode("\u5876")}).toThrowError({name:"TypeError",message:"EncodingError U+5876"});
expect(() => {ms932Encoder.encode("\u5877")}).toThrowError({name:"TypeError",message:"EncodingError U+5877"});
expect(() => {ms932Encoder.encode("\u5878")}).toThrowError({name:"TypeError",message:"EncodingError U+5878"});
expect([...ms932Encoder.encode("塹")].join(",")).toBe("154,205"); // U+5879
expect(() => {ms932Encoder.encode("\u587A")}).toThrowError({name:"TypeError",message:"EncodingError U+587A"});
expect(() => {ms932Encoder.encode("\u587B")}).toThrowError({name:"TypeError",message:"EncodingError U+587B"});
expect(() => {ms932Encoder.encode("\u587C")}).toThrowError({name:"TypeError",message:"EncodingError U+587C"});
expect(() => {ms932Encoder.encode("\u587D")}).toThrowError({name:"TypeError",message:"EncodingError U+587D"});
expect([...ms932Encoder.encode("塾")].join(",")).toBe("143,109"); // U+587E
expect(() => {ms932Encoder.encode("\u587F")}).toThrowError({name:"TypeError",message:"EncodingError U+587F"});
expect(() => {ms932Encoder.encode("\u5880")}).toThrowError({name:"TypeError",message:"EncodingError U+5880"});
expect(() => {ms932Encoder.encode("\u5881")}).toThrowError({name:"TypeError",message:"EncodingError U+5881"});
expect(() => {ms932Encoder.encode("\u5882")}).toThrowError({name:"TypeError",message:"EncodingError U+5882"});
expect([...ms932Encoder.encode("境")].join(",")).toBe("139,171"); // U+5883
expect(() => {ms932Encoder.encode("\u5884")}).toThrowError({name:"TypeError",message:"EncodingError U+5884"});
expect([...ms932Encoder.encode("墅")].join(",")).toBe("154,206"); // U+5885
expect(() => {ms932Encoder.encode("\u5886")}).toThrowError({name:"TypeError",message:"EncodingError U+5886"});
expect(() => {ms932Encoder.encode("\u5887")}).toThrowError({name:"TypeError",message:"EncodingError U+5887"});
expect(() => {ms932Encoder.encode("\u5888")}).toThrowError({name:"TypeError",message:"EncodingError U+5888"});
expect(() => {ms932Encoder.encode("\u5889")}).toThrowError({name:"TypeError",message:"EncodingError U+5889"});
expect(() => {ms932Encoder.encode("\u588A")}).toThrowError({name:"TypeError",message:"EncodingError U+588A"});
expect(() => {ms932Encoder.encode("\u588B")}).toThrowError({name:"TypeError",message:"EncodingError U+588B"});
expect(() => {ms932Encoder.encode("\u588C")}).toThrowError({name:"TypeError",message:"EncodingError U+588C"});
expect(() => {ms932Encoder.encode("\u588D")}).toThrowError({name:"TypeError",message:"EncodingError U+588D"});
expect(() => {ms932Encoder.encode("\u588E")}).toThrowError({name:"TypeError",message:"EncodingError U+588E"});
expect(() => {ms932Encoder.encode("\u588F")}).toThrowError({name:"TypeError",message:"EncodingError U+588F"});
expect(() => {ms932Encoder.encode("\u5890")}).toThrowError({name:"TypeError",message:"EncodingError U+5890"});
expect(() => {ms932Encoder.encode("\u5891")}).toThrowError({name:"TypeError",message:"EncodingError U+5891"});
expect(() => {ms932Encoder.encode("\u5892")}).toThrowError({name:"TypeError",message:"EncodingError U+5892"});
expect([...ms932Encoder.encode("墓")].join(",")).toBe("149,230"); // U+5893
expect(() => {ms932Encoder.encode("\u5894")}).toThrowError({name:"TypeError",message:"EncodingError U+5894"});
expect(() => {ms932Encoder.encode("\u5895")}).toThrowError({name:"TypeError",message:"EncodingError U+5895"});
expect(() => {ms932Encoder.encode("\u5896")}).toThrowError({name:"TypeError",message:"EncodingError U+5896"});
expect([...ms932Encoder.encode("増")].join(",")).toBe("145,157"); // U+5897
expect(() => {ms932Encoder.encode("\u5898")}).toThrowError({name:"TypeError",message:"EncodingError U+5898"});
expect(() => {ms932Encoder.encode("\u5899")}).toThrowError({name:"TypeError",message:"EncodingError U+5899"});
expect(() => {ms932Encoder.encode("\u589A")}).toThrowError({name:"TypeError",message:"EncodingError U+589A"});
expect(() => {ms932Encoder.encode("\u589B")}).toThrowError({name:"TypeError",message:"EncodingError U+589B"});
expect([...ms932Encoder.encode("墜")].join(",")).toBe("146,196"); // U+589C
expect(() => {ms932Encoder.encode("\u589D")}).toThrowError({name:"TypeError",message:"EncodingError U+589D"});
expect([...ms932Encoder.encode("增墟")].join(",")).toBe("250,157,154,208"); // U+589E
expect(() => {ms932Encoder.encode("\u58A0")}).toThrowError({name:"TypeError",message:"EncodingError U+58A0"});
expect(() => {ms932Encoder.encode("\u58A1")}).toThrowError({name:"TypeError",message:"EncodingError U+58A1"});
expect(() => {ms932Encoder.encode("\u58A2")}).toThrowError({name:"TypeError",message:"EncodingError U+58A2"});
expect(() => {ms932Encoder.encode("\u58A3")}).toThrowError({name:"TypeError",message:"EncodingError U+58A3"});
expect(() => {ms932Encoder.encode("\u58A4")}).toThrowError({name:"TypeError",message:"EncodingError U+58A4"});
expect(() => {ms932Encoder.encode("\u58A5")}).toThrowError({name:"TypeError",message:"EncodingError U+58A5"});
expect(() => {ms932Encoder.encode("\u58A6")}).toThrowError({name:"TypeError",message:"EncodingError U+58A6"});
expect(() => {ms932Encoder.encode("\u58A7")}).toThrowError({name:"TypeError",message:"EncodingError U+58A7"});
expect([...ms932Encoder.encode("墨")].join(",")).toBe("150,110"); // U+58A8
expect(() => {ms932Encoder.encode("\u58A9")}).toThrowError({name:"TypeError",message:"EncodingError U+58A9"});
expect(() => {ms932Encoder.encode("\u58AA")}).toThrowError({name:"TypeError",message:"EncodingError U+58AA"});
expect([...ms932Encoder.encode("墫")].join(",")).toBe("154,209"); // U+58AB
expect(() => {ms932Encoder.encode("\u58AC")}).toThrowError({name:"TypeError",message:"EncodingError U+58AC"});
expect(() => {ms932Encoder.encode("\u58AD")}).toThrowError({name:"TypeError",message:"EncodingError U+58AD"});
expect([...ms932Encoder.encode("墮")].join(",")).toBe("154,214"); // U+58AE
expect(() => {ms932Encoder.encode("\u58AF")}).toThrowError({name:"TypeError",message:"EncodingError U+58AF"});
expect(() => {ms932Encoder.encode("\u58B0")}).toThrowError({name:"TypeError",message:"EncodingError U+58B0"});
expect(() => {ms932Encoder.encode("\u58B1")}).toThrowError({name:"TypeError",message:"EncodingError U+58B1"});
expect([...ms932Encoder.encode("墲墳")].join(",")).toBe("250,158,149,173"); // U+58B2
expect(() => {ms932Encoder.encode("\u58B4")}).toThrowError({name:"TypeError",message:"EncodingError U+58B4"});
expect(() => {ms932Encoder.encode("\u58B5")}).toThrowError({name:"TypeError",message:"EncodingError U+58B5"});
expect(() => {ms932Encoder.encode("\u58B6")}).toThrowError({name:"TypeError",message:"EncodingError U+58B6"});
expect(() => {ms932Encoder.encode("\u58B7")}).toThrowError({name:"TypeError",message:"EncodingError U+58B7"});
expect([...ms932Encoder.encode("墸墹墺墻")].join(",")).toBe("154,213,154,207,154,210,154,212"); // U+58B8
expect(() => {ms932Encoder.encode("\u58BC")}).toThrowError({name:"TypeError",message:"EncodingError U+58BC"});
expect(() => {ms932Encoder.encode("\u58BD")}).toThrowError({name:"TypeError",message:"EncodingError U+58BD"});
expect([...ms932Encoder.encode("墾")].join(",")).toBe("141,164"); // U+58BE
expect(() => {ms932Encoder.encode("\u58BF")}).toThrowError({name:"TypeError",message:"EncodingError U+58BF"});
expect(() => {ms932Encoder.encode("\u58C0")}).toThrowError({name:"TypeError",message:"EncodingError U+58C0"});
expect([...ms932Encoder.encode("壁")].join(",")).toBe("149,199"); // U+58C1
expect(() => {ms932Encoder.encode("\u58C2")}).toThrowError({name:"TypeError",message:"EncodingError U+58C2"});
expect(() => {ms932Encoder.encode("\u58C3")}).toThrowError({name:"TypeError",message:"EncodingError U+58C3"});
expect(() => {ms932Encoder.encode("\u58C4")}).toThrowError({name:"TypeError",message:"EncodingError U+58C4"});
expect([...ms932Encoder.encode("壅")].join(",")).toBe("154,215"); // U+58C5
expect(() => {ms932Encoder.encode("\u58C6")}).toThrowError({name:"TypeError",message:"EncodingError U+58C6"});
expect([...ms932Encoder.encode("壇")].join(",")).toBe("146,100"); // U+58C7
expect(() => {ms932Encoder.encode("\u58C8")}).toThrowError({name:"TypeError",message:"EncodingError U+58C8"});
expect(() => {ms932Encoder.encode("\u58C9")}).toThrowError({name:"TypeError",message:"EncodingError U+58C9"});
expect([...ms932Encoder.encode("壊")].join(",")).toBe("137,243"); // U+58CA
expect(() => {ms932Encoder.encode("\u58CB")}).toThrowError({name:"TypeError",message:"EncodingError U+58CB"});
expect([...ms932Encoder.encode("壌")].join(",")).toBe("143,235"); // U+58CC
expect(() => {ms932Encoder.encode("\u58CD")}).toThrowError({name:"TypeError",message:"EncodingError U+58CD"});
expect(() => {ms932Encoder.encode("\u58CE")}).toThrowError({name:"TypeError",message:"EncodingError U+58CE"});
expect(() => {ms932Encoder.encode("\u58CF")}).toThrowError({name:"TypeError",message:"EncodingError U+58CF"});
expect(() => {ms932Encoder.encode("\u58D0")}).toThrowError({name:"TypeError",message:"EncodingError U+58D0"});
expect([...ms932Encoder.encode("壑")].join(",")).toBe("154,217"); // U+58D1
expect(() => {ms932Encoder.encode("\u58D2")}).toThrowError({name:"TypeError",message:"EncodingError U+58D2"});
expect([...ms932Encoder.encode("壓")].join(",")).toBe("154,216"); // U+58D3
expect(() => {ms932Encoder.encode("\u58D4")}).toThrowError({name:"TypeError",message:"EncodingError U+58D4"});
expect([...ms932Encoder.encode("壕")].join(",")).toBe("141,136"); // U+58D5
expect(() => {ms932Encoder.encode("\u58D6")}).toThrowError({name:"TypeError",message:"EncodingError U+58D6"});
expect([...ms932Encoder.encode("壗壘壙")].join(",")).toBe("154,218,154,220,154,219"); // U+58D7
expect(() => {ms932Encoder.encode("\u58DA")}).toThrowError({name:"TypeError",message:"EncodingError U+58DA"});
expect(() => {ms932Encoder.encode("\u58DB")}).toThrowError({name:"TypeError",message:"EncodingError U+58DB"});
expect([...ms932Encoder.encode("壜")].join(",")).toBe("154,222"); // U+58DC
expect(() => {ms932Encoder.encode("\u58DD")}).toThrowError({name:"TypeError",message:"EncodingError U+58DD"});
expect([...ms932Encoder.encode("壞壟")].join(",")).toBe("154,211,154,224"); // U+58DE
expect(() => {ms932Encoder.encode("\u58E0")}).toThrowError({name:"TypeError",message:"EncodingError U+58E0"});
expect(() => {ms932Encoder.encode("\u58E1")}).toThrowError({name:"TypeError",message:"EncodingError U+58E1"});
expect(() => {ms932Encoder.encode("\u58E2")}).toThrowError({name:"TypeError",message:"EncodingError U+58E2"});
expect(() => {ms932Encoder.encode("\u58E3")}).toThrowError({name:"TypeError",message:"EncodingError U+58E3"});
expect([...ms932Encoder.encode("壤壥")].join(",")).toBe("154,223,154,221"); // U+58E4
expect(() => {ms932Encoder.encode("\u58E6")}).toThrowError({name:"TypeError",message:"EncodingError U+58E6"});
expect(() => {ms932Encoder.encode("\u58E7")}).toThrowError({name:"TypeError",message:"EncodingError U+58E7"});
expect(() => {ms932Encoder.encode("\u58E8")}).toThrowError({name:"TypeError",message:"EncodingError U+58E8"});
expect(() => {ms932Encoder.encode("\u58E9")}).toThrowError({name:"TypeError",message:"EncodingError U+58E9"});
expect(() => {ms932Encoder.encode("\u58EA")}).toThrowError({name:"TypeError",message:"EncodingError U+58EA"});
expect([...ms932Encoder.encode("士壬")].join(",")).toBe("142,109,144,112"); // U+58EB
expect(() => {ms932Encoder.encode("\u58ED")}).toThrowError({name:"TypeError",message:"EncodingError U+58ED"});
expect([...ms932Encoder.encode("壮壯声壱売")].join(",")).toBe("145,115,154,225,144,186,136,235,148,132"); // U+58EE
expect(() => {ms932Encoder.encode("\u58F3")}).toThrowError({name:"TypeError",message:"EncodingError U+58F3"});
expect(() => {ms932Encoder.encode("\u58F4")}).toThrowError({name:"TypeError",message:"EncodingError U+58F4"});
expect(() => {ms932Encoder.encode("\u58F5")}).toThrowError({name:"TypeError",message:"EncodingError U+58F5"});
expect(() => {ms932Encoder.encode("\u58F6")}).toThrowError({name:"TypeError",message:"EncodingError U+58F6"});
expect([...ms932Encoder.encode("壷")].join(",")).toBe("146,217"); // U+58F7
expect(() => {ms932Encoder.encode("\u58F8")}).toThrowError({name:"TypeError",message:"EncodingError U+58F8"});
expect([...ms932Encoder.encode("壹壺壻壼壽")].join(",")).toBe("154,227,154,226,154,228,154,229,154,230"); // U+58F9
expect(() => {ms932Encoder.encode("\u58FE")}).toThrowError({name:"TypeError",message:"EncodingError U+58FE"});
expect(() => {ms932Encoder.encode("\u58FF")}).toThrowError({name:"TypeError",message:"EncodingError U+58FF"});
expect(() => {ms932Encoder.encode("\u5900")}).toThrowError({name:"TypeError",message:"EncodingError U+5900"});
expect(() => {ms932Encoder.encode("\u5901")}).toThrowError({name:"TypeError",message:"EncodingError U+5901"});
expect([...ms932Encoder.encode("夂")].join(",")).toBe("154,231"); // U+5902
expect(() => {ms932Encoder.encode("\u5903")}).toThrowError({name:"TypeError",message:"EncodingError U+5903"});
expect(() => {ms932Encoder.encode("\u5904")}).toThrowError({name:"TypeError",message:"EncodingError U+5904"});
expect(() => {ms932Encoder.encode("\u5905")}).toThrowError({name:"TypeError",message:"EncodingError U+5905"});
expect(() => {ms932Encoder.encode("\u5906")}).toThrowError({name:"TypeError",message:"EncodingError U+5906"});
expect(() => {ms932Encoder.encode("\u5907")}).toThrowError({name:"TypeError",message:"EncodingError U+5907"});
expect(() => {ms932Encoder.encode("\u5908")}).toThrowError({name:"TypeError",message:"EncodingError U+5908"});
expect([...ms932Encoder.encode("変夊夋")].join(",")).toBe("149,207,154,232,250,159"); // U+5909
expect(() => {ms932Encoder.encode("\u590C")}).toThrowError({name:"TypeError",message:"EncodingError U+590C"});
expect(() => {ms932Encoder.encode("\u590D")}).toThrowError({name:"TypeError",message:"EncodingError U+590D"});
expect(() => {ms932Encoder.encode("\u590E")}).toThrowError({name:"TypeError",message:"EncodingError U+590E"});
expect([...ms932Encoder.encode("夏夐")].join(",")).toBe("137,196,154,233"); // U+590F
expect(() => {ms932Encoder.encode("\u5911")}).toThrowError({name:"TypeError",message:"EncodingError U+5911"});
expect(() => {ms932Encoder.encode("\u5912")}).toThrowError({name:"TypeError",message:"EncodingError U+5912"});
expect(() => {ms932Encoder.encode("\u5913")}).toThrowError({name:"TypeError",message:"EncodingError U+5913"});
expect(() => {ms932Encoder.encode("\u5914")}).toThrowError({name:"TypeError",message:"EncodingError U+5914"});
expect([...ms932Encoder.encode("夕外")].join(",")).toBe("151,91,138,79"); // U+5915
expect(() => {ms932Encoder.encode("\u5917")}).toThrowError({name:"TypeError",message:"EncodingError U+5917"});
expect([...ms932Encoder.encode("夘夙多夛夜")].join(",")).toBe("153,199,143,103,145,189,154,234,150,233"); // U+5918
expect(() => {ms932Encoder.encode("\u591D")}).toThrowError({name:"TypeError",message:"EncodingError U+591D"});
expect(() => {ms932Encoder.encode("\u591E")}).toThrowError({name:"TypeError",message:"EncodingError U+591E"});
expect(() => {ms932Encoder.encode("\u591F")}).toThrowError({name:"TypeError",message:"EncodingError U+591F"});
expect(() => {ms932Encoder.encode("\u5920")}).toThrowError({name:"TypeError",message:"EncodingError U+5920"});
expect(() => {ms932Encoder.encode("\u5921")}).toThrowError({name:"TypeError",message:"EncodingError U+5921"});
expect([...ms932Encoder.encode("夢")].join(",")).toBe("150,178"); // U+5922
expect(() => {ms932Encoder.encode("\u5923")}).toThrowError({name:"TypeError",message:"EncodingError U+5923"});
expect(() => {ms932Encoder.encode("\u5924")}).toThrowError({name:"TypeError",message:"EncodingError U+5924"});
expect([...ms932Encoder.encode("夥")].join(",")).toBe("154,236"); // U+5925
expect(() => {ms932Encoder.encode("\u5926")}).toThrowError({name:"TypeError",message:"EncodingError U+5926"});
expect([...ms932Encoder.encode("大")].join(",")).toBe("145,229"); // U+5927
expect(() => {ms932Encoder.encode("\u5928")}).toThrowError({name:"TypeError",message:"EncodingError U+5928"});
expect([...ms932Encoder.encode("天太夫夬夭央")].join(",")).toBe("147,86,145,190,149,118,154,237,154,238,137,155"); // U+5929
expect(() => {ms932Encoder.encode("\u592F")}).toThrowError({name:"TypeError",message:"EncodingError U+592F"});
expect(() => {ms932Encoder.encode("\u5930")}).toThrowError({name:"TypeError",message:"EncodingError U+5930"});
expect([...ms932Encoder.encode("失夲")].join(",")).toBe("142,184,154,239"); // U+5931
expect(() => {ms932Encoder.encode("\u5933")}).toThrowError({name:"TypeError",message:"EncodingError U+5933"});
expect(() => {ms932Encoder.encode("\u5934")}).toThrowError({name:"TypeError",message:"EncodingError U+5934"});
expect(() => {ms932Encoder.encode("\u5935")}).toThrowError({name:"TypeError",message:"EncodingError U+5935"});
expect(() => {ms932Encoder.encode("\u5936")}).toThrowError({name:"TypeError",message:"EncodingError U+5936"});
expect([...ms932Encoder.encode("夷夸")].join(",")).toBe("136,206,154,240"); // U+5937
expect(() => {ms932Encoder.encode("\u5939")}).toThrowError({name:"TypeError",message:"EncodingError U+5939"});
expect(() => {ms932Encoder.encode("\u593A")}).toThrowError({name:"TypeError",message:"EncodingError U+593A"});
expect(() => {ms932Encoder.encode("\u593B")}).toThrowError({name:"TypeError",message:"EncodingError U+593B"});
expect(() => {ms932Encoder.encode("\u593C")}).toThrowError({name:"TypeError",message:"EncodingError U+593C"});
expect(() => {ms932Encoder.encode("\u593D")}).toThrowError({name:"TypeError",message:"EncodingError U+593D"});
expect([...ms932Encoder.encode("夾")].join(",")).toBe("154,241"); // U+593E
expect(() => {ms932Encoder.encode("\u593F")}).toThrowError({name:"TypeError",message:"EncodingError U+593F"});
expect(() => {ms932Encoder.encode("\u5940")}).toThrowError({name:"TypeError",message:"EncodingError U+5940"});
expect(() => {ms932Encoder.encode("\u5941")}).toThrowError({name:"TypeError",message:"EncodingError U+5941"});
expect(() => {ms932Encoder.encode("\u5942")}).toThrowError({name:"TypeError",message:"EncodingError U+5942"});
expect(() => {ms932Encoder.encode("\u5943")}).toThrowError({name:"TypeError",message:"EncodingError U+5943"});
expect([...ms932Encoder.encode("奄")].join(",")).toBe("137,130"); // U+5944
expect(() => {ms932Encoder.encode("\u5945")}).toThrowError({name:"TypeError",message:"EncodingError U+5945"});
expect(() => {ms932Encoder.encode("\u5946")}).toThrowError({name:"TypeError",message:"EncodingError U+5946"});
expect([...ms932Encoder.encode("奇奈奉")].join(",")).toBe("138,239,147,222,149,242"); // U+5947
expect(() => {ms932Encoder.encode("\u594A")}).toThrowError({name:"TypeError",message:"EncodingError U+594A"});
expect(() => {ms932Encoder.encode("\u594B")}).toThrowError({name:"TypeError",message:"EncodingError U+594B"});
expect(() => {ms932Encoder.encode("\u594C")}).toThrowError({name:"TypeError",message:"EncodingError U+594C"});
expect(() => {ms932Encoder.encode("\u594D")}).toThrowError({name:"TypeError",message:"EncodingError U+594D"});
expect([...ms932Encoder.encode("奎奏奐契")].join(",")).toBe("154,245,145,116,154,244,140,95"); // U+594E
expect(() => {ms932Encoder.encode("\u5952")}).toThrowError({name:"TypeError",message:"EncodingError U+5952"});
expect([...ms932Encoder.encode("奓奔奕")].join(",")).toBe("250,160,150,122,154,243"); // U+5953
expect(() => {ms932Encoder.encode("\u5956")}).toThrowError({name:"TypeError",message:"EncodingError U+5956"});
expect([...ms932Encoder.encode("套奘")].join(",")).toBe("147,133,154,247"); // U+5957
expect(() => {ms932Encoder.encode("\u5959")}).toThrowError({name:"TypeError",message:"EncodingError U+5959"});
expect([...ms932Encoder.encode("奚奛")].join(",")).toBe("154,246,250,161"); // U+595A
expect(() => {ms932Encoder.encode("\u595C")}).toThrowError({name:"TypeError",message:"EncodingError U+595C"});
expect([...ms932Encoder.encode("奝")].join(",")).toBe("250,162"); // U+595D
expect(() => {ms932Encoder.encode("\u595E")}).toThrowError({name:"TypeError",message:"EncodingError U+595E"});
expect(() => {ms932Encoder.encode("\u595F")}).toThrowError({name:"TypeError",message:"EncodingError U+595F"});
expect([...ms932Encoder.encode("奠")].join(",")).toBe("154,249"); // U+5960
expect(() => {ms932Encoder.encode("\u5961")}).toThrowError({name:"TypeError",message:"EncodingError U+5961"});
expect([...ms932Encoder.encode("奢奣")].join(",")).toBe("154,248,250,163"); // U+5962
expect(() => {ms932Encoder.encode("\u5964")}).toThrowError({name:"TypeError",message:"EncodingError U+5964"});
expect([...ms932Encoder.encode("奥")].join(",")).toBe("137,156"); // U+5965
expect(() => {ms932Encoder.encode("\u5966")}).toThrowError({name:"TypeError",message:"EncodingError U+5966"});
expect([...ms932Encoder.encode("奧奨奩奪")].join(",")).toBe("154,250,143,167,154,252,146,68"); // U+5967
expect(() => {ms932Encoder.encode("\u596B")}).toThrowError({name:"TypeError",message:"EncodingError U+596B"});
expect([...ms932Encoder.encode("奬")].join(",")).toBe("154,251"); // U+596C
expect(() => {ms932Encoder.encode("\u596D")}).toThrowError({name:"TypeError",message:"EncodingError U+596D"});
expect([...ms932Encoder.encode("奮")].join(",")).toBe("149,177"); // U+596E
expect(() => {ms932Encoder.encode("\u596F")}).toThrowError({name:"TypeError",message:"EncodingError U+596F"});
expect(() => {ms932Encoder.encode("\u5970")}).toThrowError({name:"TypeError",message:"EncodingError U+5970"});
expect(() => {ms932Encoder.encode("\u5971")}).toThrowError({name:"TypeError",message:"EncodingError U+5971"});
expect(() => {ms932Encoder.encode("\u5972")}).toThrowError({name:"TypeError",message:"EncodingError U+5972"});
expect([...ms932Encoder.encode("女奴")].join(",")).toBe("143,151,147,122"); // U+5973
expect(() => {ms932Encoder.encode("\u5975")}).toThrowError({name:"TypeError",message:"EncodingError U+5975"});
expect(() => {ms932Encoder.encode("\u5976")}).toThrowError({name:"TypeError",message:"EncodingError U+5976"});
expect(() => {ms932Encoder.encode("\u5977")}).toThrowError({name:"TypeError",message:"EncodingError U+5977"});
expect([...ms932Encoder.encode("奸")].join(",")).toBe("155,64"); // U+5978
expect(() => {ms932Encoder.encode("\u5979")}).toThrowError({name:"TypeError",message:"EncodingError U+5979"});
expect(() => {ms932Encoder.encode("\u597A")}).toThrowError({name:"TypeError",message:"EncodingError U+597A"});
expect(() => {ms932Encoder.encode("\u597B")}).toThrowError({name:"TypeError",message:"EncodingError U+597B"});
expect(() => {ms932Encoder.encode("\u597C")}).toThrowError({name:"TypeError",message:"EncodingError U+597C"});
expect([...ms932Encoder.encode("好")].join(",")).toBe("141,68"); // U+597D
expect(() => {ms932Encoder.encode("\u597E")}).toThrowError({name:"TypeError",message:"EncodingError U+597E"});
expect(() => {ms932Encoder.encode("\u597F")}).toThrowError({name:"TypeError",message:"EncodingError U+597F"});
expect(() => {ms932Encoder.encode("\u5980")}).toThrowError({name:"TypeError",message:"EncodingError U+5980"});
expect([...ms932Encoder.encode("妁如妃妄")].join(",")).toBe("155,65,148,64,148,220,150,207"); // U+5981
expect(() => {ms932Encoder.encode("\u5985")}).toThrowError({name:"TypeError",message:"EncodingError U+5985"});
expect(() => {ms932Encoder.encode("\u5986")}).toThrowError({name:"TypeError",message:"EncodingError U+5986"});
expect(() => {ms932Encoder.encode("\u5987")}).toThrowError({name:"TypeError",message:"EncodingError U+5987"});
expect(() => {ms932Encoder.encode("\u5988")}).toThrowError({name:"TypeError",message:"EncodingError U+5988"});
expect(() => {ms932Encoder.encode("\u5989")}).toThrowError({name:"TypeError",message:"EncodingError U+5989"});
expect([...ms932Encoder.encode("妊")].join(",")).toBe("148,68"); // U+598A
expect(() => {ms932Encoder.encode("\u598B")}).toThrowError({name:"TypeError",message:"EncodingError U+598B"});
expect(() => {ms932Encoder.encode("\u598C")}).toThrowError({name:"TypeError",message:"EncodingError U+598C"});
expect([...ms932Encoder.encode("妍")].join(",")).toBe("155,74"); // U+598D
expect(() => {ms932Encoder.encode("\u598E")}).toThrowError({name:"TypeError",message:"EncodingError U+598E"});
expect(() => {ms932Encoder.encode("\u598F")}).toThrowError({name:"TypeError",message:"EncodingError U+598F"});
expect(() => {ms932Encoder.encode("\u5990")}).toThrowError({name:"TypeError",message:"EncodingError U+5990"});
expect(() => {ms932Encoder.encode("\u5991")}).toThrowError({name:"TypeError",message:"EncodingError U+5991"});
expect(() => {ms932Encoder.encode("\u5992")}).toThrowError({name:"TypeError",message:"EncodingError U+5992"});
expect([...ms932Encoder.encode("妓")].join(",")).toBe("139,87"); // U+5993
expect(() => {ms932Encoder.encode("\u5994")}).toThrowError({name:"TypeError",message:"EncodingError U+5994"});
expect(() => {ms932Encoder.encode("\u5995")}).toThrowError({name:"TypeError",message:"EncodingError U+5995"});
expect([...ms932Encoder.encode("妖")].join(",")).toBe("151,100"); // U+5996
expect(() => {ms932Encoder.encode("\u5997")}).toThrowError({name:"TypeError",message:"EncodingError U+5997"});
expect(() => {ms932Encoder.encode("\u5998")}).toThrowError({name:"TypeError",message:"EncodingError U+5998"});
expect([...ms932Encoder.encode("妙")].join(",")).toBe("150,173"); // U+5999
expect(() => {ms932Encoder.encode("\u599A")}).toThrowError({name:"TypeError",message:"EncodingError U+599A"});
expect([...ms932Encoder.encode("妛")].join(",")).toBe("155,170"); // U+599B
expect(() => {ms932Encoder.encode("\u599C")}).toThrowError({name:"TypeError",message:"EncodingError U+599C"});
expect([...ms932Encoder.encode("妝")].join(",")).toBe("155,66"); // U+599D
expect(() => {ms932Encoder.encode("\u599E")}).toThrowError({name:"TypeError",message:"EncodingError U+599E"});
expect(() => {ms932Encoder.encode("\u599F")}).toThrowError({name:"TypeError",message:"EncodingError U+599F"});
expect(() => {ms932Encoder.encode("\u59A0")}).toThrowError({name:"TypeError",message:"EncodingError U+59A0"});
expect(() => {ms932Encoder.encode("\u59A1")}).toThrowError({name:"TypeError",message:"EncodingError U+59A1"});
expect(() => {ms932Encoder.encode("\u59A2")}).toThrowError({name:"TypeError",message:"EncodingError U+59A2"});
expect([...ms932Encoder.encode("妣妤妥")].join(",")).toBe("155,69,250,164,145,195"); // U+59A3
expect(() => {ms932Encoder.encode("\u59A6")}).toThrowError({name:"TypeError",message:"EncodingError U+59A6"});
expect(() => {ms932Encoder.encode("\u59A7")}).toThrowError({name:"TypeError",message:"EncodingError U+59A7"});
expect([...ms932Encoder.encode("妨")].join(",")).toBe("150,87"); // U+59A8
expect(() => {ms932Encoder.encode("\u59A9")}).toThrowError({name:"TypeError",message:"EncodingError U+59A9"});
expect(() => {ms932Encoder.encode("\u59AA")}).toThrowError({name:"TypeError",message:"EncodingError U+59AA"});
expect(() => {ms932Encoder.encode("\u59AB")}).toThrowError({name:"TypeError",message:"EncodingError U+59AB"});
expect([...ms932Encoder.encode("妬")].join(",")).toBe("147,105"); // U+59AC
expect(() => {ms932Encoder.encode("\u59AD")}).toThrowError({name:"TypeError",message:"EncodingError U+59AD"});
expect(() => {ms932Encoder.encode("\u59AE")}).toThrowError({name:"TypeError",message:"EncodingError U+59AE"});
expect(() => {ms932Encoder.encode("\u59AF")}).toThrowError({name:"TypeError",message:"EncodingError U+59AF"});
expect(() => {ms932Encoder.encode("\u59B0")}).toThrowError({name:"TypeError",message:"EncodingError U+59B0"});
expect(() => {ms932Encoder.encode("\u59B1")}).toThrowError({name:"TypeError",message:"EncodingError U+59B1"});
expect([...ms932Encoder.encode("妲")].join(",")).toBe("155,70"); // U+59B2
expect(() => {ms932Encoder.encode("\u59B3")}).toThrowError({name:"TypeError",message:"EncodingError U+59B3"});
expect(() => {ms932Encoder.encode("\u59B4")}).toThrowError({name:"TypeError",message:"EncodingError U+59B4"});
expect(() => {ms932Encoder.encode("\u59B5")}).toThrowError({name:"TypeError",message:"EncodingError U+59B5"});
expect(() => {ms932Encoder.encode("\u59B6")}).toThrowError({name:"TypeError",message:"EncodingError U+59B6"});
expect(() => {ms932Encoder.encode("\u59B7")}).toThrowError({name:"TypeError",message:"EncodingError U+59B7"});
expect(() => {ms932Encoder.encode("\u59B8")}).toThrowError({name:"TypeError",message:"EncodingError U+59B8"});
expect([...ms932Encoder.encode("妹妺妻")].join(",")).toBe("150,133,250,165,141,200"); // U+59B9
expect(() => {ms932Encoder.encode("\u59BC")}).toThrowError({name:"TypeError",message:"EncodingError U+59BC"});
expect(() => {ms932Encoder.encode("\u59BD")}).toThrowError({name:"TypeError",message:"EncodingError U+59BD"});
expect([...ms932Encoder.encode("妾")].join(",")).toBe("143,168"); // U+59BE
expect(() => {ms932Encoder.encode("\u59BF")}).toThrowError({name:"TypeError",message:"EncodingError U+59BF"});
expect(() => {ms932Encoder.encode("\u59C0")}).toThrowError({name:"TypeError",message:"EncodingError U+59C0"});
expect(() => {ms932Encoder.encode("\u59C1")}).toThrowError({name:"TypeError",message:"EncodingError U+59C1"});
expect(() => {ms932Encoder.encode("\u59C2")}).toThrowError({name:"TypeError",message:"EncodingError U+59C2"});
expect(() => {ms932Encoder.encode("\u59C3")}).toThrowError({name:"TypeError",message:"EncodingError U+59C3"});
expect(() => {ms932Encoder.encode("\u59C4")}).toThrowError({name:"TypeError",message:"EncodingError U+59C4"});
expect(() => {ms932Encoder.encode("\u59C5")}).toThrowError({name:"TypeError",message:"EncodingError U+59C5"});
expect([...ms932Encoder.encode("姆")].join(",")).toBe("155,71"); // U+59C6
expect(() => {ms932Encoder.encode("\u59C7")}).toThrowError({name:"TypeError",message:"EncodingError U+59C7"});
expect(() => {ms932Encoder.encode("\u59C8")}).toThrowError({name:"TypeError",message:"EncodingError U+59C8"});
expect([...ms932Encoder.encode("姉")].join(",")).toBe("142,111"); // U+59C9
expect(() => {ms932Encoder.encode("\u59CA")}).toThrowError({name:"TypeError",message:"EncodingError U+59CA"});
expect([...ms932Encoder.encode("始")].join(",")).toBe("142,110"); // U+59CB
expect(() => {ms932Encoder.encode("\u59CC")}).toThrowError({name:"TypeError",message:"EncodingError U+59CC"});
expect(() => {ms932Encoder.encode("\u59CD")}).toThrowError({name:"TypeError",message:"EncodingError U+59CD"});
expect(() => {ms932Encoder.encode("\u59CE")}).toThrowError({name:"TypeError",message:"EncodingError U+59CE"});
expect(() => {ms932Encoder.encode("\u59CF")}).toThrowError({name:"TypeError",message:"EncodingError U+59CF"});
expect([...ms932Encoder.encode("姐姑")].join(",")).toBe("136,183,140,198"); // U+59D0
expect(() => {ms932Encoder.encode("\u59D2")}).toThrowError({name:"TypeError",message:"EncodingError U+59D2"});
expect([...ms932Encoder.encode("姓委")].join(",")).toBe("144,169,136,207"); // U+59D3
expect(() => {ms932Encoder.encode("\u59D5")}).toThrowError({name:"TypeError",message:"EncodingError U+59D5"});
expect(() => {ms932Encoder.encode("\u59D6")}).toThrowError({name:"TypeError",message:"EncodingError U+59D6"});
expect(() => {ms932Encoder.encode("\u59D7")}).toThrowError({name:"TypeError",message:"EncodingError U+59D7"});
expect(() => {ms932Encoder.encode("\u59D8")}).toThrowError({name:"TypeError",message:"EncodingError U+59D8"});
expect([...ms932Encoder.encode("姙姚")].join(",")).toBe("155,75,155,76"); // U+59D9
expect(() => {ms932Encoder.encode("\u59DB")}).toThrowError({name:"TypeError",message:"EncodingError U+59DB"});
expect([...ms932Encoder.encode("姜")].join(",")).toBe("155,73"); // U+59DC
expect(() => {ms932Encoder.encode("\u59DD")}).toThrowError({name:"TypeError",message:"EncodingError U+59DD"});
expect(() => {ms932Encoder.encode("\u59DE")}).toThrowError({name:"TypeError",message:"EncodingError U+59DE"});
expect(() => {ms932Encoder.encode("\u59DF")}).toThrowError({name:"TypeError",message:"EncodingError U+59DF"});
expect(() => {ms932Encoder.encode("\u59E0")}).toThrowError({name:"TypeError",message:"EncodingError U+59E0"});
expect(() => {ms932Encoder.encode("\u59E1")}).toThrowError({name:"TypeError",message:"EncodingError U+59E1"});
expect(() => {ms932Encoder.encode("\u59E2")}).toThrowError({name:"TypeError",message:"EncodingError U+59E2"});
expect(() => {ms932Encoder.encode("\u59E3")}).toThrowError({name:"TypeError",message:"EncodingError U+59E3"});
expect(() => {ms932Encoder.encode("\u59E4")}).toThrowError({name:"TypeError",message:"EncodingError U+59E4"});
expect([...ms932Encoder.encode("姥姦")].join(",")).toBe("137,87,138,173"); // U+59E5
expect(() => {ms932Encoder.encode("\u59E7")}).toThrowError({name:"TypeError",message:"EncodingError U+59E7"});
expect([...ms932Encoder.encode("姨")].join(",")).toBe("155,72"); // U+59E8
expect(() => {ms932Encoder.encode("\u59E9")}).toThrowError({name:"TypeError",message:"EncodingError U+59E9"});
expect([...ms932Encoder.encode("姪姫")].join(",")).toBe("150,195,149,80"); // U+59EA
expect(() => {ms932Encoder.encode("\u59EC")}).toThrowError({name:"TypeError",message:"EncodingError U+59EC"});
expect(() => {ms932Encoder.encode("\u59ED")}).toThrowError({name:"TypeError",message:"EncodingError U+59ED"});
expect(() => {ms932Encoder.encode("\u59EE")}).toThrowError({name:"TypeError",message:"EncodingError U+59EE"});
expect(() => {ms932Encoder.encode("\u59EF")}).toThrowError({name:"TypeError",message:"EncodingError U+59EF"});
expect(() => {ms932Encoder.encode("\u59F0")}).toThrowError({name:"TypeError",message:"EncodingError U+59F0"});
expect(() => {ms932Encoder.encode("\u59F1")}).toThrowError({name:"TypeError",message:"EncodingError U+59F1"});
expect(() => {ms932Encoder.encode("\u59F2")}).toThrowError({name:"TypeError",message:"EncodingError U+59F2"});
expect(() => {ms932Encoder.encode("\u59F3")}).toThrowError({name:"TypeError",message:"EncodingError U+59F3"});
expect(() => {ms932Encoder.encode("\u59F4")}).toThrowError({name:"TypeError",message:"EncodingError U+59F4"});
expect(() => {ms932Encoder.encode("\u59F5")}).toThrowError({name:"TypeError",message:"EncodingError U+59F5"});
expect([...ms932Encoder.encode("姶")].join(",")).toBe("136,166"); // U+59F6
expect(() => {ms932Encoder.encode("\u59F7")}).toThrowError({name:"TypeError",message:"EncodingError U+59F7"});
expect(() => {ms932Encoder.encode("\u59F8")}).toThrowError({name:"TypeError",message:"EncodingError U+59F8"});
expect(() => {ms932Encoder.encode("\u59F9")}).toThrowError({name:"TypeError",message:"EncodingError U+59F9"});
expect(() => {ms932Encoder.encode("\u59FA")}).toThrowError({name:"TypeError",message:"EncodingError U+59FA"});
expect([...ms932Encoder.encode("姻")].join(",")).toBe("136,247"); // U+59FB
expect(() => {ms932Encoder.encode("\u59FC")}).toThrowError({name:"TypeError",message:"EncodingError U+59FC"});
expect(() => {ms932Encoder.encode("\u59FD")}).toThrowError({name:"TypeError",message:"EncodingError U+59FD"});
expect(() => {ms932Encoder.encode("\u59FE")}).toThrowError({name:"TypeError",message:"EncodingError U+59FE"});
expect([...ms932Encoder.encode("姿")].join(",")).toBe("142,112"); // U+59FF
expect(() => {ms932Encoder.encode("\u5A00")}).toThrowError({name:"TypeError",message:"EncodingError U+5A00"});
expect([...ms932Encoder.encode("威")].join(",")).toBe("136,208"); // U+5A01
expect(() => {ms932Encoder.encode("\u5A02")}).toThrowError({name:"TypeError",message:"EncodingError U+5A02"});
expect([...ms932Encoder.encode("娃")].join(",")).toBe("136,161"); // U+5A03
expect(() => {ms932Encoder.encode("\u5A04")}).toThrowError({name:"TypeError",message:"EncodingError U+5A04"});
expect(() => {ms932Encoder.encode("\u5A05")}).toThrowError({name:"TypeError",message:"EncodingError U+5A05"});
expect(() => {ms932Encoder.encode("\u5A06")}).toThrowError({name:"TypeError",message:"EncodingError U+5A06"});
expect(() => {ms932Encoder.encode("\u5A07")}).toThrowError({name:"TypeError",message:"EncodingError U+5A07"});
expect(() => {ms932Encoder.encode("\u5A08")}).toThrowError({name:"TypeError",message:"EncodingError U+5A08"});
expect([...ms932Encoder.encode("娉")].join(",")).toBe("155,81"); // U+5A09
expect(() => {ms932Encoder.encode("\u5A0A")}).toThrowError({name:"TypeError",message:"EncodingError U+5A0A"});
expect(() => {ms932Encoder.encode("\u5A0B")}).toThrowError({name:"TypeError",message:"EncodingError U+5A0B"});
expect(() => {ms932Encoder.encode("\u5A0C")}).toThrowError({name:"TypeError",message:"EncodingError U+5A0C"});
expect(() => {ms932Encoder.encode("\u5A0D")}).toThrowError({name:"TypeError",message:"EncodingError U+5A0D"});
expect(() => {ms932Encoder.encode("\u5A0E")}).toThrowError({name:"TypeError",message:"EncodingError U+5A0E"});
expect(() => {ms932Encoder.encode("\u5A0F")}).toThrowError({name:"TypeError",message:"EncodingError U+5A0F"});
expect(() => {ms932Encoder.encode("\u5A10")}).toThrowError({name:"TypeError",message:"EncodingError U+5A10"});
expect([...ms932Encoder.encode("娑")].join(",")).toBe("155,79"); // U+5A11
expect(() => {ms932Encoder.encode("\u5A12")}).toThrowError({name:"TypeError",message:"EncodingError U+5A12"});
expect(() => {ms932Encoder.encode("\u5A13")}).toThrowError({name:"TypeError",message:"EncodingError U+5A13"});
expect(() => {ms932Encoder.encode("\u5A14")}).toThrowError({name:"TypeError",message:"EncodingError U+5A14"});
expect(() => {ms932Encoder.encode("\u5A15")}).toThrowError({name:"TypeError",message:"EncodingError U+5A15"});
expect(() => {ms932Encoder.encode("\u5A16")}).toThrowError({name:"TypeError",message:"EncodingError U+5A16"});
expect(() => {ms932Encoder.encode("\u5A17")}).toThrowError({name:"TypeError",message:"EncodingError U+5A17"});
expect([...ms932Encoder.encode("娘")].join(",")).toBe("150,186"); // U+5A18
expect(() => {ms932Encoder.encode("\u5A19")}).toThrowError({name:"TypeError",message:"EncodingError U+5A19"});
expect([...ms932Encoder.encode("娚")].join(",")).toBe("155,82"); // U+5A1A
expect(() => {ms932Encoder.encode("\u5A1B")}).toThrowError({name:"TypeError",message:"EncodingError U+5A1B"});
expect([...ms932Encoder.encode("娜")].join(",")).toBe("155,80"); // U+5A1C
expect(() => {ms932Encoder.encode("\u5A1D")}).toThrowError({name:"TypeError",message:"EncodingError U+5A1D"});
expect(() => {ms932Encoder.encode("\u5A1E")}).toThrowError({name:"TypeError",message:"EncodingError U+5A1E"});
expect([...ms932Encoder.encode("娟娠")].join(",")).toBe("155,78,144,80"); // U+5A1F
expect(() => {ms932Encoder.encode("\u5A21")}).toThrowError({name:"TypeError",message:"EncodingError U+5A21"});
expect(() => {ms932Encoder.encode("\u5A22")}).toThrowError({name:"TypeError",message:"EncodingError U+5A22"});
expect(() => {ms932Encoder.encode("\u5A23")}).toThrowError({name:"TypeError",message:"EncodingError U+5A23"});
expect(() => {ms932Encoder.encode("\u5A24")}).toThrowError({name:"TypeError",message:"EncodingError U+5A24"});
expect([...ms932Encoder.encode("娥")].join(",")).toBe("155,77"); // U+5A25
expect(() => {ms932Encoder.encode("\u5A26")}).toThrowError({name:"TypeError",message:"EncodingError U+5A26"});
expect(() => {ms932Encoder.encode("\u5A27")}).toThrowError({name:"TypeError",message:"EncodingError U+5A27"});
expect(() => {ms932Encoder.encode("\u5A28")}).toThrowError({name:"TypeError",message:"EncodingError U+5A28"});
expect([...ms932Encoder.encode("娩")].join(",")).toBe("149,216"); // U+5A29
expect(() => {ms932Encoder.encode("\u5A2A")}).toThrowError({name:"TypeError",message:"EncodingError U+5A2A"});
expect(() => {ms932Encoder.encode("\u5A2B")}).toThrowError({name:"TypeError",message:"EncodingError U+5A2B"});
expect(() => {ms932Encoder.encode("\u5A2C")}).toThrowError({name:"TypeError",message:"EncodingError U+5A2C"});
expect(() => {ms932Encoder.encode("\u5A2D")}).toThrowError({name:"TypeError",message:"EncodingError U+5A2D"});
expect(() => {ms932Encoder.encode("\u5A2E")}).toThrowError({name:"TypeError",message:"EncodingError U+5A2E"});
expect([...ms932Encoder.encode("娯")].join(",")).toBe("140,226"); // U+5A2F
expect(() => {ms932Encoder.encode("\u5A30")}).toThrowError({name:"TypeError",message:"EncodingError U+5A30"});
expect(() => {ms932Encoder.encode("\u5A31")}).toThrowError({name:"TypeError",message:"EncodingError U+5A31"});
expect(() => {ms932Encoder.encode("\u5A32")}).toThrowError({name:"TypeError",message:"EncodingError U+5A32"});
expect(() => {ms932Encoder.encode("\u5A33")}).toThrowError({name:"TypeError",message:"EncodingError U+5A33"});
expect(() => {ms932Encoder.encode("\u5A34")}).toThrowError({name:"TypeError",message:"EncodingError U+5A34"});
expect([...ms932Encoder.encode("娵娶")].join(",")).toBe("155,86,155,87"); // U+5A35
expect(() => {ms932Encoder.encode("\u5A37")}).toThrowError({name:"TypeError",message:"EncodingError U+5A37"});
expect(() => {ms932Encoder.encode("\u5A38")}).toThrowError({name:"TypeError",message:"EncodingError U+5A38"});
expect(() => {ms932Encoder.encode("\u5A39")}).toThrowError({name:"TypeError",message:"EncodingError U+5A39"});
expect(() => {ms932Encoder.encode("\u5A3A")}).toThrowError({name:"TypeError",message:"EncodingError U+5A3A"});
expect(() => {ms932Encoder.encode("\u5A3B")}).toThrowError({name:"TypeError",message:"EncodingError U+5A3B"});
expect([...ms932Encoder.encode("娼")].join(",")).toBe("143,169"); // U+5A3C
expect(() => {ms932Encoder.encode("\u5A3D")}).toThrowError({name:"TypeError",message:"EncodingError U+5A3D"});
expect(() => {ms932Encoder.encode("\u5A3E")}).toThrowError({name:"TypeError",message:"EncodingError U+5A3E"});
expect(() => {ms932Encoder.encode("\u5A3F")}).toThrowError({name:"TypeError",message:"EncodingError U+5A3F"});
expect([...ms932Encoder.encode("婀婁")].join(",")).toBe("155,83,152,75"); // U+5A40
expect(() => {ms932Encoder.encode("\u5A42")}).toThrowError({name:"TypeError",message:"EncodingError U+5A42"});
expect(() => {ms932Encoder.encode("\u5A43")}).toThrowError({name:"TypeError",message:"EncodingError U+5A43"});
expect(() => {ms932Encoder.encode("\u5A44")}).toThrowError({name:"TypeError",message:"EncodingError U+5A44"});
expect(() => {ms932Encoder.encode("\u5A45")}).toThrowError({name:"TypeError",message:"EncodingError U+5A45"});
expect([...ms932Encoder.encode("婆")].join(",")).toBe("148,107"); // U+5A46
expect(() => {ms932Encoder.encode("\u5A47")}).toThrowError({name:"TypeError",message:"EncodingError U+5A47"});
expect(() => {ms932Encoder.encode("\u5A48")}).toThrowError({name:"TypeError",message:"EncodingError U+5A48"});
expect([...ms932Encoder.encode("婉")].join(",")).toBe("155,85"); // U+5A49
expect(() => {ms932Encoder.encode("\u5A4A")}).toThrowError({name:"TypeError",message:"EncodingError U+5A4A"});
expect(() => {ms932Encoder.encode("\u5A4B")}).toThrowError({name:"TypeError",message:"EncodingError U+5A4B"});
expect(() => {ms932Encoder.encode("\u5A4C")}).toThrowError({name:"TypeError",message:"EncodingError U+5A4C"});
expect(() => {ms932Encoder.encode("\u5A4D")}).toThrowError({name:"TypeError",message:"EncodingError U+5A4D"});
expect(() => {ms932Encoder.encode("\u5A4E")}).toThrowError({name:"TypeError",message:"EncodingError U+5A4E"});
expect(() => {ms932Encoder.encode("\u5A4F")}).toThrowError({name:"TypeError",message:"EncodingError U+5A4F"});
expect(() => {ms932Encoder.encode("\u5A50")}).toThrowError({name:"TypeError",message:"EncodingError U+5A50"});
expect(() => {ms932Encoder.encode("\u5A51")}).toThrowError({name:"TypeError",message:"EncodingError U+5A51"});
expect(() => {ms932Encoder.encode("\u5A52")}).toThrowError({name:"TypeError",message:"EncodingError U+5A52"});
expect(() => {ms932Encoder.encode("\u5A53")}).toThrowError({name:"TypeError",message:"EncodingError U+5A53"});
expect(() => {ms932Encoder.encode("\u5A54")}).toThrowError({name:"TypeError",message:"EncodingError U+5A54"});
expect(() => {ms932Encoder.encode("\u5A55")}).toThrowError({name:"TypeError",message:"EncodingError U+5A55"});
expect(() => {ms932Encoder.encode("\u5A56")}).toThrowError({name:"TypeError",message:"EncodingError U+5A56"});
expect(() => {ms932Encoder.encode("\u5A57")}).toThrowError({name:"TypeError",message:"EncodingError U+5A57"});
expect(() => {ms932Encoder.encode("\u5A58")}).toThrowError({name:"TypeError",message:"EncodingError U+5A58"});
expect(() => {ms932Encoder.encode("\u5A59")}).toThrowError({name:"TypeError",message:"EncodingError U+5A59"});
expect([...ms932Encoder.encode("婚")].join(",")).toBe("141,165"); // U+5A5A
expect(() => {ms932Encoder.encode("\u5A5B")}).toThrowError({name:"TypeError",message:"EncodingError U+5A5B"});
expect(() => {ms932Encoder.encode("\u5A5C")}).toThrowError({name:"TypeError",message:"EncodingError U+5A5C"});
expect(() => {ms932Encoder.encode("\u5A5D")}).toThrowError({name:"TypeError",message:"EncodingError U+5A5D"});
expect(() => {ms932Encoder.encode("\u5A5E")}).toThrowError({name:"TypeError",message:"EncodingError U+5A5E"});
expect(() => {ms932Encoder.encode("\u5A5F")}).toThrowError({name:"TypeError",message:"EncodingError U+5A5F"});
expect(() => {ms932Encoder.encode("\u5A60")}).toThrowError({name:"TypeError",message:"EncodingError U+5A60"});
expect(() => {ms932Encoder.encode("\u5A61")}).toThrowError({name:"TypeError",message:"EncodingError U+5A61"});
expect([...ms932Encoder.encode("婢")].join(",")).toBe("155,88"); // U+5A62
expect(() => {ms932Encoder.encode("\u5A63")}).toThrowError({name:"TypeError",message:"EncodingError U+5A63"});
expect(() => {ms932Encoder.encode("\u5A64")}).toThrowError({name:"TypeError",message:"EncodingError U+5A64"});
expect(() => {ms932Encoder.encode("\u5A65")}).toThrowError({name:"TypeError",message:"EncodingError U+5A65"});
expect([...ms932Encoder.encode("婦")].join(",")).toBe("149,119"); // U+5A66
expect(() => {ms932Encoder.encode("\u5A67")}).toThrowError({name:"TypeError",message:"EncodingError U+5A67"});
expect(() => {ms932Encoder.encode("\u5A68")}).toThrowError({name:"TypeError",message:"EncodingError U+5A68"});
expect(() => {ms932Encoder.encode("\u5A69")}).toThrowError({name:"TypeError",message:"EncodingError U+5A69"});
expect([...ms932Encoder.encode("婪")].join(",")).toBe("155,89"); // U+5A6A
expect(() => {ms932Encoder.encode("\u5A6B")}).toThrowError({name:"TypeError",message:"EncodingError U+5A6B"});
expect([...ms932Encoder.encode("婬")].join(",")).toBe("155,84"); // U+5A6C
expect(() => {ms932Encoder.encode("\u5A6D")}).toThrowError({name:"TypeError",message:"EncodingError U+5A6D"});
expect(() => {ms932Encoder.encode("\u5A6E")}).toThrowError({name:"TypeError",message:"EncodingError U+5A6E"});
expect(() => {ms932Encoder.encode("\u5A6F")}).toThrowError({name:"TypeError",message:"EncodingError U+5A6F"});
expect(() => {ms932Encoder.encode("\u5A70")}).toThrowError({name:"TypeError",message:"EncodingError U+5A70"});
expect(() => {ms932Encoder.encode("\u5A71")}).toThrowError({name:"TypeError",message:"EncodingError U+5A71"});
expect(() => {ms932Encoder.encode("\u5A72")}).toThrowError({name:"TypeError",message:"EncodingError U+5A72"});
expect(() => {ms932Encoder.encode("\u5A73")}).toThrowError({name:"TypeError",message:"EncodingError U+5A73"});
expect(() => {ms932Encoder.encode("\u5A74")}).toThrowError({name:"TypeError",message:"EncodingError U+5A74"});
expect(() => {ms932Encoder.encode("\u5A75")}).toThrowError({name:"TypeError",message:"EncodingError U+5A75"});
expect(() => {ms932Encoder.encode("\u5A76")}).toThrowError({name:"TypeError",message:"EncodingError U+5A76"});
expect(() => {ms932Encoder.encode("\u5A77")}).toThrowError({name:"TypeError",message:"EncodingError U+5A77"});
expect(() => {ms932Encoder.encode("\u5A78")}).toThrowError({name:"TypeError",message:"EncodingError U+5A78"});
expect(() => {ms932Encoder.encode("\u5A79")}).toThrowError({name:"TypeError",message:"EncodingError U+5A79"});
expect(() => {ms932Encoder.encode("\u5A7A")}).toThrowError({name:"TypeError",message:"EncodingError U+5A7A"});
expect(() => {ms932Encoder.encode("\u5A7B")}).toThrowError({name:"TypeError",message:"EncodingError U+5A7B"});
expect(() => {ms932Encoder.encode("\u5A7C")}).toThrowError({name:"TypeError",message:"EncodingError U+5A7C"});
expect(() => {ms932Encoder.encode("\u5A7D")}).toThrowError({name:"TypeError",message:"EncodingError U+5A7D"});
expect(() => {ms932Encoder.encode("\u5A7E")}).toThrowError({name:"TypeError",message:"EncodingError U+5A7E"});
expect([...ms932Encoder.encode("婿")].join(",")).toBe("150,185"); // U+5A7F
expect(() => {ms932Encoder.encode("\u5A80")}).toThrowError({name:"TypeError",message:"EncodingError U+5A80"});
expect(() => {ms932Encoder.encode("\u5A81")}).toThrowError({name:"TypeError",message:"EncodingError U+5A81"});
expect(() => {ms932Encoder.encode("\u5A82")}).toThrowError({name:"TypeError",message:"EncodingError U+5A82"});
expect(() => {ms932Encoder.encode("\u5A83")}).toThrowError({name:"TypeError",message:"EncodingError U+5A83"});
expect(() => {ms932Encoder.encode("\u5A84")}).toThrowError({name:"TypeError",message:"EncodingError U+5A84"});
expect(() => {ms932Encoder.encode("\u5A85")}).toThrowError({name:"TypeError",message:"EncodingError U+5A85"});
expect(() => {ms932Encoder.encode("\u5A86")}).toThrowError({name:"TypeError",message:"EncodingError U+5A86"});
expect(() => {ms932Encoder.encode("\u5A87")}).toThrowError({name:"TypeError",message:"EncodingError U+5A87"});
expect(() => {ms932Encoder.encode("\u5A88")}).toThrowError({name:"TypeError",message:"EncodingError U+5A88"});
expect(() => {ms932Encoder.encode("\u5A89")}).toThrowError({name:"TypeError",message:"EncodingError U+5A89"});
expect(() => {ms932Encoder.encode("\u5A8A")}).toThrowError({name:"TypeError",message:"EncodingError U+5A8A"});
expect(() => {ms932Encoder.encode("\u5A8B")}).toThrowError({name:"TypeError",message:"EncodingError U+5A8B"});
expect(() => {ms932Encoder.encode("\u5A8C")}).toThrowError({name:"TypeError",message:"EncodingError U+5A8C"});
expect(() => {ms932Encoder.encode("\u5A8D")}).toThrowError({name:"TypeError",message:"EncodingError U+5A8D"});
expect(() => {ms932Encoder.encode("\u5A8E")}).toThrowError({name:"TypeError",message:"EncodingError U+5A8E"});
expect(() => {ms932Encoder.encode("\u5A8F")}).toThrowError({name:"TypeError",message:"EncodingError U+5A8F"});
expect(() => {ms932Encoder.encode("\u5A90")}).toThrowError({name:"TypeError",message:"EncodingError U+5A90"});
expect(() => {ms932Encoder.encode("\u5A91")}).toThrowError({name:"TypeError",message:"EncodingError U+5A91"});
expect([...ms932Encoder.encode("媒")].join(",")).toBe("148,125"); // U+5A92
expect(() => {ms932Encoder.encode("\u5A93")}).toThrowError({name:"TypeError",message:"EncodingError U+5A93"});
expect(() => {ms932Encoder.encode("\u5A94")}).toThrowError({name:"TypeError",message:"EncodingError U+5A94"});
expect(() => {ms932Encoder.encode("\u5A95")}).toThrowError({name:"TypeError",message:"EncodingError U+5A95"});
expect(() => {ms932Encoder.encode("\u5A96")}).toThrowError({name:"TypeError",message:"EncodingError U+5A96"});
expect(() => {ms932Encoder.encode("\u5A97")}).toThrowError({name:"TypeError",message:"EncodingError U+5A97"});
expect(() => {ms932Encoder.encode("\u5A98")}).toThrowError({name:"TypeError",message:"EncodingError U+5A98"});
expect(() => {ms932Encoder.encode("\u5A99")}).toThrowError({name:"TypeError",message:"EncodingError U+5A99"});
expect([...ms932Encoder.encode("媚媛")].join(",")).toBe("155,90,149,81"); // U+5A9A
expect(() => {ms932Encoder.encode("\u5A9C")}).toThrowError({name:"TypeError",message:"EncodingError U+5A9C"});
expect(() => {ms932Encoder.encode("\u5A9D")}).toThrowError({name:"TypeError",message:"EncodingError U+5A9D"});
expect(() => {ms932Encoder.encode("\u5A9E")}).toThrowError({name:"TypeError",message:"EncodingError U+5A9E"});
expect(() => {ms932Encoder.encode("\u5A9F")}).toThrowError({name:"TypeError",message:"EncodingError U+5A9F"});
expect(() => {ms932Encoder.encode("\u5AA0")}).toThrowError({name:"TypeError",message:"EncodingError U+5AA0"});
expect(() => {ms932Encoder.encode("\u5AA1")}).toThrowError({name:"TypeError",message:"EncodingError U+5AA1"});
expect(() => {ms932Encoder.encode("\u5AA2")}).toThrowError({name:"TypeError",message:"EncodingError U+5AA2"});
expect(() => {ms932Encoder.encode("\u5AA3")}).toThrowError({name:"TypeError",message:"EncodingError U+5AA3"});
expect(() => {ms932Encoder.encode("\u5AA4")}).toThrowError({name:"TypeError",message:"EncodingError U+5AA4"});
expect(() => {ms932Encoder.encode("\u5AA5")}).toThrowError({name:"TypeError",message:"EncodingError U+5AA5"});
expect(() => {ms932Encoder.encode("\u5AA6")}).toThrowError({name:"TypeError",message:"EncodingError U+5AA6"});
expect(() => {ms932Encoder.encode("\u5AA7")}).toThrowError({name:"TypeError",message:"EncodingError U+5AA7"});
expect(() => {ms932Encoder.encode("\u5AA8")}).toThrowError({name:"TypeError",message:"EncodingError U+5AA8"});
expect(() => {ms932Encoder.encode("\u5AA9")}).toThrowError({name:"TypeError",message:"EncodingError U+5AA9"});
expect(() => {ms932Encoder.encode("\u5AAA")}).toThrowError({name:"TypeError",message:"EncodingError U+5AAA"});
expect(() => {ms932Encoder.encode("\u5AAB")}).toThrowError({name:"TypeError",message:"EncodingError U+5AAB"});
expect(() => {ms932Encoder.encode("\u5AAC")}).toThrowError({name:"TypeError",message:"EncodingError U+5AAC"});
expect(() => {ms932Encoder.encode("\u5AAD")}).toThrowError({name:"TypeError",message:"EncodingError U+5AAD"});
expect(() => {ms932Encoder.encode("\u5AAE")}).toThrowError({name:"TypeError",message:"EncodingError U+5AAE"});
expect(() => {ms932Encoder.encode("\u5AAF")}).toThrowError({name:"TypeError",message:"EncodingError U+5AAF"});
expect(() => {ms932Encoder.encode("\u5AB0")}).toThrowError({name:"TypeError",message:"EncodingError U+5AB0"});
expect(() => {ms932Encoder.encode("\u5AB1")}).toThrowError({name:"TypeError",message:"EncodingError U+5AB1"});
expect(() => {ms932Encoder.encode("\u5AB2")}).toThrowError({name:"TypeError",message:"EncodingError U+5AB2"});
expect(() => {ms932Encoder.encode("\u5AB3")}).toThrowError({name:"TypeError",message:"EncodingError U+5AB3"});
expect(() => {ms932Encoder.encode("\u5AB4")}).toThrowError({name:"TypeError",message:"EncodingError U+5AB4"});
expect(() => {ms932Encoder.encode("\u5AB5")}).toThrowError({name:"TypeError",message:"EncodingError U+5AB5"});
expect(() => {ms932Encoder.encode("\u5AB6")}).toThrowError({name:"TypeError",message:"EncodingError U+5AB6"});
expect(() => {ms932Encoder.encode("\u5AB7")}).toThrowError({name:"TypeError",message:"EncodingError U+5AB7"});
expect(() => {ms932Encoder.encode("\u5AB8")}).toThrowError({name:"TypeError",message:"EncodingError U+5AB8"});
expect(() => {ms932Encoder.encode("\u5AB9")}).toThrowError({name:"TypeError",message:"EncodingError U+5AB9"});
expect(() => {ms932Encoder.encode("\u5ABA")}).toThrowError({name:"TypeError",message:"EncodingError U+5ABA"});
expect(() => {ms932Encoder.encode("\u5ABB")}).toThrowError({name:"TypeError",message:"EncodingError U+5ABB"});
expect([...ms932Encoder.encode("媼媽媾")].join(",")).toBe("155,91,155,95,155,92"); // U+5ABC
expect(() => {ms932Encoder.encode("\u5ABF")}).toThrowError({name:"TypeError",message:"EncodingError U+5ABF"});
expect(() => {ms932Encoder.encode("\u5AC0")}).toThrowError({name:"TypeError",message:"EncodingError U+5AC0"});
expect([...ms932Encoder.encode("嫁嫂")].join(",")).toBe("137,197,155,94"); // U+5AC1
expect(() => {ms932Encoder.encode("\u5AC3")}).toThrowError({name:"TypeError",message:"EncodingError U+5AC3"});
expect(() => {ms932Encoder.encode("\u5AC4")}).toThrowError({name:"TypeError",message:"EncodingError U+5AC4"});
expect(() => {ms932Encoder.encode("\u5AC5")}).toThrowError({name:"TypeError",message:"EncodingError U+5AC5"});
expect(() => {ms932Encoder.encode("\u5AC6")}).toThrowError({name:"TypeError",message:"EncodingError U+5AC6"});
expect(() => {ms932Encoder.encode("\u5AC7")}).toThrowError({name:"TypeError",message:"EncodingError U+5AC7"});
expect(() => {ms932Encoder.encode("\u5AC8")}).toThrowError({name:"TypeError",message:"EncodingError U+5AC8"});
expect([...ms932Encoder.encode("嫉")].join(",")).toBe("142,185"); // U+5AC9
expect(() => {ms932Encoder.encode("\u5ACA")}).toThrowError({name:"TypeError",message:"EncodingError U+5ACA"});
expect([...ms932Encoder.encode("嫋嫌")].join(",")).toBe("155,93,140,153"); // U+5ACB
expect(() => {ms932Encoder.encode("\u5ACD")}).toThrowError({name:"TypeError",message:"EncodingError U+5ACD"});
expect(() => {ms932Encoder.encode("\u5ACE")}).toThrowError({name:"TypeError",message:"EncodingError U+5ACE"});
expect(() => {ms932Encoder.encode("\u5ACF")}).toThrowError({name:"TypeError",message:"EncodingError U+5ACF"});
expect([...ms932Encoder.encode("嫐")].join(",")).toBe("155,107"); // U+5AD0
expect(() => {ms932Encoder.encode("\u5AD1")}).toThrowError({name:"TypeError",message:"EncodingError U+5AD1"});
expect(() => {ms932Encoder.encode("\u5AD2")}).toThrowError({name:"TypeError",message:"EncodingError U+5AD2"});
expect(() => {ms932Encoder.encode("\u5AD3")}).toThrowError({name:"TypeError",message:"EncodingError U+5AD3"});
expect(() => {ms932Encoder.encode("\u5AD4")}).toThrowError({name:"TypeError",message:"EncodingError U+5AD4"});
expect(() => {ms932Encoder.encode("\u5AD5")}).toThrowError({name:"TypeError",message:"EncodingError U+5AD5"});
expect([...ms932Encoder.encode("嫖嫗")].join(",")).toBe("155,100,155,97"); // U+5AD6
expect(() => {ms932Encoder.encode("\u5AD8")}).toThrowError({name:"TypeError",message:"EncodingError U+5AD8"});
expect(() => {ms932Encoder.encode("\u5AD9")}).toThrowError({name:"TypeError",message:"EncodingError U+5AD9"});
expect(() => {ms932Encoder.encode("\u5ADA")}).toThrowError({name:"TypeError",message:"EncodingError U+5ADA"});
expect(() => {ms932Encoder.encode("\u5ADB")}).toThrowError({name:"TypeError",message:"EncodingError U+5ADB"});
expect(() => {ms932Encoder.encode("\u5ADC")}).toThrowError({name:"TypeError",message:"EncodingError U+5ADC"});
expect(() => {ms932Encoder.encode("\u5ADD")}).toThrowError({name:"TypeError",message:"EncodingError U+5ADD"});
expect(() => {ms932Encoder.encode("\u5ADE")}).toThrowError({name:"TypeError",message:"EncodingError U+5ADE"});
expect(() => {ms932Encoder.encode("\u5ADF")}).toThrowError({name:"TypeError",message:"EncodingError U+5ADF"});
expect(() => {ms932Encoder.encode("\u5AE0")}).toThrowError({name:"TypeError",message:"EncodingError U+5AE0"});
expect([...ms932Encoder.encode("嫡")].join(",")).toBe("146,132"); // U+5AE1
expect(() => {ms932Encoder.encode("\u5AE2")}).toThrowError({name:"TypeError",message:"EncodingError U+5AE2"});
expect([...ms932Encoder.encode("嫣")].join(",")).toBe("155,96"); // U+5AE3
expect(() => {ms932Encoder.encode("\u5AE4")}).toThrowError({name:"TypeError",message:"EncodingError U+5AE4"});
expect(() => {ms932Encoder.encode("\u5AE5")}).toThrowError({name:"TypeError",message:"EncodingError U+5AE5"});
expect([...ms932Encoder.encode("嫦")].join(",")).toBe("155,98"); // U+5AE6
expect(() => {ms932Encoder.encode("\u5AE7")}).toThrowError({name:"TypeError",message:"EncodingError U+5AE7"});
expect(() => {ms932Encoder.encode("\u5AE8")}).toThrowError({name:"TypeError",message:"EncodingError U+5AE8"});
expect([...ms932Encoder.encode("嫩")].join(",")).toBe("155,99"); // U+5AE9
expect(() => {ms932Encoder.encode("\u5AEA")}).toThrowError({name:"TypeError",message:"EncodingError U+5AEA"});
expect(() => {ms932Encoder.encode("\u5AEB")}).toThrowError({name:"TypeError",message:"EncodingError U+5AEB"});
expect(() => {ms932Encoder.encode("\u5AEC")}).toThrowError({name:"TypeError",message:"EncodingError U+5AEC"});
expect(() => {ms932Encoder.encode("\u5AED")}).toThrowError({name:"TypeError",message:"EncodingError U+5AED"});
expect(() => {ms932Encoder.encode("\u5AEE")}).toThrowError({name:"TypeError",message:"EncodingError U+5AEE"});
expect(() => {ms932Encoder.encode("\u5AEF")}).toThrowError({name:"TypeError",message:"EncodingError U+5AEF"});
expect(() => {ms932Encoder.encode("\u5AF0")}).toThrowError({name:"TypeError",message:"EncodingError U+5AF0"});
expect(() => {ms932Encoder.encode("\u5AF1")}).toThrowError({name:"TypeError",message:"EncodingError U+5AF1"});
expect(() => {ms932Encoder.encode("\u5AF2")}).toThrowError({name:"TypeError",message:"EncodingError U+5AF2"});
expect(() => {ms932Encoder.encode("\u5AF3")}).toThrowError({name:"TypeError",message:"EncodingError U+5AF3"});
expect(() => {ms932Encoder.encode("\u5AF4")}).toThrowError({name:"TypeError",message:"EncodingError U+5AF4"});
expect(() => {ms932Encoder.encode("\u5AF5")}).toThrowError({name:"TypeError",message:"EncodingError U+5AF5"});
expect(() => {ms932Encoder.encode("\u5AF6")}).toThrowError({name:"TypeError",message:"EncodingError U+5AF6"});
expect(() => {ms932Encoder.encode("\u5AF7")}).toThrowError({name:"TypeError",message:"EncodingError U+5AF7"});
expect(() => {ms932Encoder.encode("\u5AF8")}).toThrowError({name:"TypeError",message:"EncodingError U+5AF8"});
expect(() => {ms932Encoder.encode("\u5AF9")}).toThrowError({name:"TypeError",message:"EncodingError U+5AF9"});
expect([...ms932Encoder.encode("嫺嫻")].join(",")).toBe("155,101,155,102"); // U+5AFA
expect(() => {ms932Encoder.encode("\u5AFC")}).toThrowError({name:"TypeError",message:"EncodingError U+5AFC"});
expect(() => {ms932Encoder.encode("\u5AFD")}).toThrowError({name:"TypeError",message:"EncodingError U+5AFD"});
expect(() => {ms932Encoder.encode("\u5AFE")}).toThrowError({name:"TypeError",message:"EncodingError U+5AFE"});
expect(() => {ms932Encoder.encode("\u5AFF")}).toThrowError({name:"TypeError",message:"EncodingError U+5AFF"});
expect(() => {ms932Encoder.encode("\u5B00")}).toThrowError({name:"TypeError",message:"EncodingError U+5B00"});
expect(() => {ms932Encoder.encode("\u5B01")}).toThrowError({name:"TypeError",message:"EncodingError U+5B01"});
expect(() => {ms932Encoder.encode("\u5B02")}).toThrowError({name:"TypeError",message:"EncodingError U+5B02"});
expect(() => {ms932Encoder.encode("\u5B03")}).toThrowError({name:"TypeError",message:"EncodingError U+5B03"});
expect(() => {ms932Encoder.encode("\u5B04")}).toThrowError({name:"TypeError",message:"EncodingError U+5B04"});
expect(() => {ms932Encoder.encode("\u5B05")}).toThrowError({name:"TypeError",message:"EncodingError U+5B05"});
expect(() => {ms932Encoder.encode("\u5B06")}).toThrowError({name:"TypeError",message:"EncodingError U+5B06"});
expect(() => {ms932Encoder.encode("\u5B07")}).toThrowError({name:"TypeError",message:"EncodingError U+5B07"});
expect(() => {ms932Encoder.encode("\u5B08")}).toThrowError({name:"TypeError",message:"EncodingError U+5B08"});
expect([...ms932Encoder.encode("嬉")].join(",")).toBe("138,240"); // U+5B09
expect(() => {ms932Encoder.encode("\u5B0A")}).toThrowError({name:"TypeError",message:"EncodingError U+5B0A"});
expect([...ms932Encoder.encode("嬋嬌")].join(",")).toBe("155,104,155,103"); // U+5B0B
expect(() => {ms932Encoder.encode("\u5B0D")}).toThrowError({name:"TypeError",message:"EncodingError U+5B0D"});
expect(() => {ms932Encoder.encode("\u5B0E")}).toThrowError({name:"TypeError",message:"EncodingError U+5B0E"});
expect(() => {ms932Encoder.encode("\u5B0F")}).toThrowError({name:"TypeError",message:"EncodingError U+5B0F"});
expect(() => {ms932Encoder.encode("\u5B10")}).toThrowError({name:"TypeError",message:"EncodingError U+5B10"});
expect(() => {ms932Encoder.encode("\u5B11")}).toThrowError({name:"TypeError",message:"EncodingError U+5B11"});
expect(() => {ms932Encoder.encode("\u5B12")}).toThrowError({name:"TypeError",message:"EncodingError U+5B12"});
expect(() => {ms932Encoder.encode("\u5B13")}).toThrowError({name:"TypeError",message:"EncodingError U+5B13"});
expect(() => {ms932Encoder.encode("\u5B14")}).toThrowError({name:"TypeError",message:"EncodingError U+5B14"});
expect(() => {ms932Encoder.encode("\u5B15")}).toThrowError({name:"TypeError",message:"EncodingError U+5B15"});
expect([...ms932Encoder.encode("嬖")].join(",")).toBe("155,105"); // U+5B16
expect(() => {ms932Encoder.encode("\u5B17")}).toThrowError({name:"TypeError",message:"EncodingError U+5B17"});
expect(() => {ms932Encoder.encode("\u5B18")}).toThrowError({name:"TypeError",message:"EncodingError U+5B18"});
expect(() => {ms932Encoder.encode("\u5B19")}).toThrowError({name:"TypeError",message:"EncodingError U+5B19"});
expect(() => {ms932Encoder.encode("\u5B1A")}).toThrowError({name:"TypeError",message:"EncodingError U+5B1A"});
expect(() => {ms932Encoder.encode("\u5B1B")}).toThrowError({name:"TypeError",message:"EncodingError U+5B1B"});
expect(() => {ms932Encoder.encode("\u5B1C")}).toThrowError({name:"TypeError",message:"EncodingError U+5B1C"});
expect(() => {ms932Encoder.encode("\u5B1D")}).toThrowError({name:"TypeError",message:"EncodingError U+5B1D"});
expect(() => {ms932Encoder.encode("\u5B1E")}).toThrowError({name:"TypeError",message:"EncodingError U+5B1E"});
expect(() => {ms932Encoder.encode("\u5B1F")}).toThrowError({name:"TypeError",message:"EncodingError U+5B1F"});
expect(() => {ms932Encoder.encode("\u5B20")}).toThrowError({name:"TypeError",message:"EncodingError U+5B20"});
expect(() => {ms932Encoder.encode("\u5B21")}).toThrowError({name:"TypeError",message:"EncodingError U+5B21"});
expect([...ms932Encoder.encode("嬢")].join(",")).toBe("143,236"); // U+5B22
expect(() => {ms932Encoder.encode("\u5B23")}).toThrowError({name:"TypeError",message:"EncodingError U+5B23"});
expect(() => {ms932Encoder.encode("\u5B24")}).toThrowError({name:"TypeError",message:"EncodingError U+5B24"});
expect(() => {ms932Encoder.encode("\u5B25")}).toThrowError({name:"TypeError",message:"EncodingError U+5B25"});
expect(() => {ms932Encoder.encode("\u5B26")}).toThrowError({name:"TypeError",message:"EncodingError U+5B26"});
expect(() => {ms932Encoder.encode("\u5B27")}).toThrowError({name:"TypeError",message:"EncodingError U+5B27"});
expect(() => {ms932Encoder.encode("\u5B28")}).toThrowError({name:"TypeError",message:"EncodingError U+5B28"});
expect(() => {ms932Encoder.encode("\u5B29")}).toThrowError({name:"TypeError",message:"EncodingError U+5B29"});
expect([...ms932Encoder.encode("嬪")].join(",")).toBe("155,108"); // U+5B2A
expect(() => {ms932Encoder.encode("\u5B2B")}).toThrowError({name:"TypeError",message:"EncodingError U+5B2B"});
expect([...ms932Encoder.encode("嬬")].join(",")).toBe("146,218"); // U+5B2C
expect(() => {ms932Encoder.encode("\u5B2D")}).toThrowError({name:"TypeError",message:"EncodingError U+5B2D"});
expect(() => {ms932Encoder.encode("\u5B2E")}).toThrowError({name:"TypeError",message:"EncodingError U+5B2E"});
expect(() => {ms932Encoder.encode("\u5B2F")}).toThrowError({name:"TypeError",message:"EncodingError U+5B2F"});
expect([...ms932Encoder.encode("嬰")].join(",")).toBe("137,100"); // U+5B30
expect(() => {ms932Encoder.encode("\u5B31")}).toThrowError({name:"TypeError",message:"EncodingError U+5B31"});
expect([...ms932Encoder.encode("嬲")].join(",")).toBe("155,106"); // U+5B32
expect(() => {ms932Encoder.encode("\u5B33")}).toThrowError({name:"TypeError",message:"EncodingError U+5B33"});
expect(() => {ms932Encoder.encode("\u5B34")}).toThrowError({name:"TypeError",message:"EncodingError U+5B34"});
expect(() => {ms932Encoder.encode("\u5B35")}).toThrowError({name:"TypeError",message:"EncodingError U+5B35"});
expect([...ms932Encoder.encode("嬶")].join(",")).toBe("155,109"); // U+5B36
expect(() => {ms932Encoder.encode("\u5B37")}).toThrowError({name:"TypeError",message:"EncodingError U+5B37"});
expect(() => {ms932Encoder.encode("\u5B38")}).toThrowError({name:"TypeError",message:"EncodingError U+5B38"});
expect(() => {ms932Encoder.encode("\u5B39")}).toThrowError({name:"TypeError",message:"EncodingError U+5B39"});
expect(() => {ms932Encoder.encode("\u5B3A")}).toThrowError({name:"TypeError",message:"EncodingError U+5B3A"});
expect(() => {ms932Encoder.encode("\u5B3B")}).toThrowError({name:"TypeError",message:"EncodingError U+5B3B"});
expect(() => {ms932Encoder.encode("\u5B3C")}).toThrowError({name:"TypeError",message:"EncodingError U+5B3C"});
expect(() => {ms932Encoder.encode("\u5B3D")}).toThrowError({name:"TypeError",message:"EncodingError U+5B3D"});
expect([...ms932Encoder.encode("嬾")].join(",")).toBe("155,110"); // U+5B3E
expect(() => {ms932Encoder.encode("\u5B3F")}).toThrowError({name:"TypeError",message:"EncodingError U+5B3F"});
expect([...ms932Encoder.encode("孀")].join(",")).toBe("155,113"); // U+5B40
expect(() => {ms932Encoder.encode("\u5B41")}).toThrowError({name:"TypeError",message:"EncodingError U+5B41"});
expect(() => {ms932Encoder.encode("\u5B42")}).toThrowError({name:"TypeError",message:"EncodingError U+5B42"});
expect([...ms932Encoder.encode("孃")].join(",")).toBe("155,111"); // U+5B43
expect(() => {ms932Encoder.encode("\u5B44")}).toThrowError({name:"TypeError",message:"EncodingError U+5B44"});
expect([...ms932Encoder.encode("孅")].join(",")).toBe("155,112"); // U+5B45
expect(() => {ms932Encoder.encode("\u5B46")}).toThrowError({name:"TypeError",message:"EncodingError U+5B46"});
expect(() => {ms932Encoder.encode("\u5B47")}).toThrowError({name:"TypeError",message:"EncodingError U+5B47"});
expect(() => {ms932Encoder.encode("\u5B48")}).toThrowError({name:"TypeError",message:"EncodingError U+5B48"});
expect(() => {ms932Encoder.encode("\u5B49")}).toThrowError({name:"TypeError",message:"EncodingError U+5B49"});
expect(() => {ms932Encoder.encode("\u5B4A")}).toThrowError({name:"TypeError",message:"EncodingError U+5B4A"});
expect(() => {ms932Encoder.encode("\u5B4B")}).toThrowError({name:"TypeError",message:"EncodingError U+5B4B"});
expect(() => {ms932Encoder.encode("\u5B4C")}).toThrowError({name:"TypeError",message:"EncodingError U+5B4C"});
expect(() => {ms932Encoder.encode("\u5B4D")}).toThrowError({name:"TypeError",message:"EncodingError U+5B4D"});
expect(() => {ms932Encoder.encode("\u5B4E")}).toThrowError({name:"TypeError",message:"EncodingError U+5B4E"});
expect(() => {ms932Encoder.encode("\u5B4F")}).toThrowError({name:"TypeError",message:"EncodingError U+5B4F"});
expect([...ms932Encoder.encode("子孑")].join(",")).toBe("142,113,155,114"); // U+5B50
expect(() => {ms932Encoder.encode("\u5B52")}).toThrowError({name:"TypeError",message:"EncodingError U+5B52"});
expect(() => {ms932Encoder.encode("\u5B53")}).toThrowError({name:"TypeError",message:"EncodingError U+5B53"});
expect([...ms932Encoder.encode("孔孕孖字存")].join(",")).toBe("141,69,155,115,250,166,142,154,145,182"); // U+5B54
expect(() => {ms932Encoder.encode("\u5B59")}).toThrowError({name:"TypeError",message:"EncodingError U+5B59"});
expect([...ms932Encoder.encode("孚孛孜孝")].join(",")).toBe("155,116,155,117,142,121,141,70"); // U+5B5A
expect(() => {ms932Encoder.encode("\u5B5E")}).toThrowError({name:"TypeError",message:"EncodingError U+5B5E"});
expect([...ms932Encoder.encode("孟")].join(",")).toBe("150,208"); // U+5B5F
expect(() => {ms932Encoder.encode("\u5B60")}).toThrowError({name:"TypeError",message:"EncodingError U+5B60"});
expect(() => {ms932Encoder.encode("\u5B61")}).toThrowError({name:"TypeError",message:"EncodingError U+5B61"});
expect(() => {ms932Encoder.encode("\u5B62")}).toThrowError({name:"TypeError",message:"EncodingError U+5B62"});
expect([...ms932Encoder.encode("季孤孥学")].join(",")).toBe("139,71,140,199,155,118,138,119"); // U+5B63
expect(() => {ms932Encoder.encode("\u5B67")}).toThrowError({name:"TypeError",message:"EncodingError U+5B67"});
expect(() => {ms932Encoder.encode("\u5B68")}).toThrowError({name:"TypeError",message:"EncodingError U+5B68"});
expect([...ms932Encoder.encode("孩")].join(",")).toBe("155,119"); // U+5B69
expect(() => {ms932Encoder.encode("\u5B6A")}).toThrowError({name:"TypeError",message:"EncodingError U+5B6A"});
expect([...ms932Encoder.encode("孫")].join(",")).toBe("145,183"); // U+5B6B
expect(() => {ms932Encoder.encode("\u5B6C")}).toThrowError({name:"TypeError",message:"EncodingError U+5B6C"});
expect(() => {ms932Encoder.encode("\u5B6D")}).toThrowError({name:"TypeError",message:"EncodingError U+5B6D"});
expect(() => {ms932Encoder.encode("\u5B6E")}).toThrowError({name:"TypeError",message:"EncodingError U+5B6E"});
expect(() => {ms932Encoder.encode("\u5B6F")}).toThrowError({name:"TypeError",message:"EncodingError U+5B6F"});
expect([...ms932Encoder.encode("孰孱")].join(",")).toBe("155,120,155,161"); // U+5B70
expect(() => {ms932Encoder.encode("\u5B72")}).toThrowError({name:"TypeError",message:"EncodingError U+5B72"});
expect([...ms932Encoder.encode("孳")].join(",")).toBe("155,121"); // U+5B73
expect(() => {ms932Encoder.encode("\u5B74")}).toThrowError({name:"TypeError",message:"EncodingError U+5B74"});
expect([...ms932Encoder.encode("孵")].join(",")).toBe("155,122"); // U+5B75
expect(() => {ms932Encoder.encode("\u5B76")}).toThrowError({name:"TypeError",message:"EncodingError U+5B76"});
expect(() => {ms932Encoder.encode("\u5B77")}).toThrowError({name:"TypeError",message:"EncodingError U+5B77"});
expect([...ms932Encoder.encode("學")].join(",")).toBe("155,123"); // U+5B78
expect(() => {ms932Encoder.encode("\u5B79")}).toThrowError({name:"TypeError",message:"EncodingError U+5B79"});
expect([...ms932Encoder.encode("孺")].join(",")).toBe("155,125"); // U+5B7A
expect(() => {ms932Encoder.encode("\u5B7B")}).toThrowError({name:"TypeError",message:"EncodingError U+5B7B"});
expect(() => {ms932Encoder.encode("\u5B7C")}).toThrowError({name:"TypeError",message:"EncodingError U+5B7C"});
expect(() => {ms932Encoder.encode("\u5B7D")}).toThrowError({name:"TypeError",message:"EncodingError U+5B7D"});
expect(() => {ms932Encoder.encode("\u5B7E")}).toThrowError({name:"TypeError",message:"EncodingError U+5B7E"});
expect(() => {ms932Encoder.encode("\u5B7F")}).toThrowError({name:"TypeError",message:"EncodingError U+5B7F"});
expect([...ms932Encoder.encode("宀")].join(",")).toBe("155,126"); // U+5B80
expect(() => {ms932Encoder.encode("\u5B81")}).toThrowError({name:"TypeError",message:"EncodingError U+5B81"});
expect(() => {ms932Encoder.encode("\u5B82")}).toThrowError({name:"TypeError",message:"EncodingError U+5B82"});
expect([...ms932Encoder.encode("它")].join(",")).toBe("155,128"); // U+5B83
expect(() => {ms932Encoder.encode("\u5B84")}).toThrowError({name:"TypeError",message:"EncodingError U+5B84"});
expect([...ms932Encoder.encode("宅")].join(",")).toBe("145,238"); // U+5B85
expect(() => {ms932Encoder.encode("\u5B86")}).toThrowError({name:"TypeError",message:"EncodingError U+5B86"});
expect([...ms932Encoder.encode("宇守安")].join(",")).toBe("137,70,142,231,136,192"); // U+5B87
expect(() => {ms932Encoder.encode("\u5B8A")}).toThrowError({name:"TypeError",message:"EncodingError U+5B8A"});
expect([...ms932Encoder.encode("宋完宍")].join(",")).toBe("145,118,138,174,142,179"); // U+5B8B
expect(() => {ms932Encoder.encode("\u5B8E")}).toThrowError({name:"TypeError",message:"EncodingError U+5B8E"});
expect([...ms932Encoder.encode("宏")].join(",")).toBe("141,71"); // U+5B8F
expect(() => {ms932Encoder.encode("\u5B90")}).toThrowError({name:"TypeError",message:"EncodingError U+5B90"});
expect(() => {ms932Encoder.encode("\u5B91")}).toThrowError({name:"TypeError",message:"EncodingError U+5B91"});
expect(() => {ms932Encoder.encode("\u5B92")}).toThrowError({name:"TypeError",message:"EncodingError U+5B92"});
expect(() => {ms932Encoder.encode("\u5B93")}).toThrowError({name:"TypeError",message:"EncodingError U+5B93"});
expect(() => {ms932Encoder.encode("\u5B94")}).toThrowError({name:"TypeError",message:"EncodingError U+5B94"});
expect([...ms932Encoder.encode("宕")].join(",")).toBe("147,134"); // U+5B95
expect(() => {ms932Encoder.encode("\u5B96")}).toThrowError({name:"TypeError",message:"EncodingError U+5B96"});
expect([...ms932Encoder.encode("宗官宙定宛宜宝")].join(",")).toBe("143,64,138,175,146,136,146,232,136,182,139,88,149,243"); // U+5B97
expect(() => {ms932Encoder.encode("\u5B9E")}).toThrowError({name:"TypeError",message:"EncodingError U+5B9E"});
expect([...ms932Encoder.encode("実")].join(",")).toBe("142,192"); // U+5B9F
expect(() => {ms932Encoder.encode("\u5BA0")}).toThrowError({name:"TypeError",message:"EncodingError U+5BA0"});
expect(() => {ms932Encoder.encode("\u5BA1")}).toThrowError({name:"TypeError",message:"EncodingError U+5BA1"});
expect([...ms932Encoder.encode("客宣室宥宦")].join(",")).toBe("139,113,144,233,142,186,151,71,155,129"); // U+5BA2
expect(() => {ms932Encoder.encode("\u5BA7")}).toThrowError({name:"TypeError",message:"EncodingError U+5BA7"});
expect(() => {ms932Encoder.encode("\u5BA8")}).toThrowError({name:"TypeError",message:"EncodingError U+5BA8"});
expect(() => {ms932Encoder.encode("\u5BA9")}).toThrowError({name:"TypeError",message:"EncodingError U+5BA9"});
expect(() => {ms932Encoder.encode("\u5BAA")}).toThrowError({name:"TypeError",message:"EncodingError U+5BAA"});
expect(() => {ms932Encoder.encode("\u5BAB")}).toThrowError({name:"TypeError",message:"EncodingError U+5BAB"});
expect(() => {ms932Encoder.encode("\u5BAC")}).toThrowError({name:"TypeError",message:"EncodingError U+5BAC"});
expect(() => {ms932Encoder.encode("\u5BAD")}).toThrowError({name:"TypeError",message:"EncodingError U+5BAD"});
expect([...ms932Encoder.encode("宮")].join(",")).toBe("139,123"); // U+5BAE
expect(() => {ms932Encoder.encode("\u5BAF")}).toThrowError({name:"TypeError",message:"EncodingError U+5BAF"});
expect([...ms932Encoder.encode("宰")].join(",")).toBe("141,201"); // U+5BB0
expect(() => {ms932Encoder.encode("\u5BB1")}).toThrowError({name:"TypeError",message:"EncodingError U+5BB1"});
expect(() => {ms932Encoder.encode("\u5BB2")}).toThrowError({name:"TypeError",message:"EncodingError U+5BB2"});
expect([...ms932Encoder.encode("害宴宵家")].join(",")).toBe("138,81,137,131,143,170,137,198"); // U+5BB3
expect(() => {ms932Encoder.encode("\u5BB7")}).toThrowError({name:"TypeError",message:"EncodingError U+5BB7"});
expect([...ms932Encoder.encode("宸容")].join(",")).toBe("155,130,151,101"); // U+5BB8
expect(() => {ms932Encoder.encode("\u5BBA")}).toThrowError({name:"TypeError",message:"EncodingError U+5BBA"});
expect(() => {ms932Encoder.encode("\u5BBB")}).toThrowError({name:"TypeError",message:"EncodingError U+5BBB"});
expect(() => {ms932Encoder.encode("\u5BBC")}).toThrowError({name:"TypeError",message:"EncodingError U+5BBC"});
expect(() => {ms932Encoder.encode("\u5BBD")}).toThrowError({name:"TypeError",message:"EncodingError U+5BBD"});
expect(() => {ms932Encoder.encode("\u5BBE")}).toThrowError({name:"TypeError",message:"EncodingError U+5BBE"});
expect([...ms932Encoder.encode("宿寀")].join(",")).toBe("143,104,250,167"); // U+5BBF
expect(() => {ms932Encoder.encode("\u5BC1")}).toThrowError({name:"TypeError",message:"EncodingError U+5BC1"});
expect([...ms932Encoder.encode("寂寃寄寅密寇")].join(",")).toBe("142,226,155,131,138,241,147,208,150,167,155,132"); // U+5BC2
expect(() => {ms932Encoder.encode("\u5BC8")}).toThrowError({name:"TypeError",message:"EncodingError U+5BC8"});
expect([...ms932Encoder.encode("寉")].join(",")).toBe("155,133"); // U+5BC9
expect(() => {ms932Encoder.encode("\u5BCA")}).toThrowError({name:"TypeError",message:"EncodingError U+5BCA"});
expect(() => {ms932Encoder.encode("\u5BCB")}).toThrowError({name:"TypeError",message:"EncodingError U+5BCB"});
expect([...ms932Encoder.encode("富")].join(",")).toBe("149,120"); // U+5BCC
expect(() => {ms932Encoder.encode("\u5BCD")}).toThrowError({name:"TypeError",message:"EncodingError U+5BCD"});
expect(() => {ms932Encoder.encode("\u5BCE")}).toThrowError({name:"TypeError",message:"EncodingError U+5BCE"});
expect(() => {ms932Encoder.encode("\u5BCF")}).toThrowError({name:"TypeError",message:"EncodingError U+5BCF"});
expect([...ms932Encoder.encode("寐")].join(",")).toBe("155,135"); // U+5BD0
expect(() => {ms932Encoder.encode("\u5BD1")}).toThrowError({name:"TypeError",message:"EncodingError U+5BD1"});
expect([...ms932Encoder.encode("寒寓寔")].join(",")).toBe("138,166,139,245,155,134"); // U+5BD2
expect(() => {ms932Encoder.encode("\u5BD5")}).toThrowError({name:"TypeError",message:"EncodingError U+5BD5"});
expect(() => {ms932Encoder.encode("\u5BD6")}).toThrowError({name:"TypeError",message:"EncodingError U+5BD6"});
expect(() => {ms932Encoder.encode("\u5BD7")}).toThrowError({name:"TypeError",message:"EncodingError U+5BD7"});
expect([...ms932Encoder.encode("寘")].join(",")).toBe("250,169"); // U+5BD8
expect(() => {ms932Encoder.encode("\u5BD9")}).toThrowError({name:"TypeError",message:"EncodingError U+5BD9"});
expect(() => {ms932Encoder.encode("\u5BDA")}).toThrowError({name:"TypeError",message:"EncodingError U+5BDA"});
expect([...ms932Encoder.encode("寛")].join(",")).toBe("138,176"); // U+5BDB
expect(() => {ms932Encoder.encode("\u5BDC")}).toThrowError({name:"TypeError",message:"EncodingError U+5BDC"});
expect([...ms932Encoder.encode("寝寞察")].join(",")).toBe("144,81,155,139,142,64"); // U+5BDD
expect(() => {ms932Encoder.encode("\u5BE0")}).toThrowError({name:"TypeError",message:"EncodingError U+5BE0"});
expect([...ms932Encoder.encode("寡寢")].join(",")).toBe("137,199,155,138"); // U+5BE1
expect(() => {ms932Encoder.encode("\u5BE3")}).toThrowError({name:"TypeError",message:"EncodingError U+5BE3"});
expect([...ms932Encoder.encode("寤寥實寧寨審")].join(",")).toBe("155,136,155,140,155,137,148,74,158,203,144,82"); // U+5BE4
expect(() => {ms932Encoder.encode("\u5BEA")}).toThrowError({name:"TypeError",message:"EncodingError U+5BEA"});
expect([...ms932Encoder.encode("寫寬")].join(",")).toBe("155,141,250,170"); // U+5BEB
expect(() => {ms932Encoder.encode("\u5BED")}).toThrowError({name:"TypeError",message:"EncodingError U+5BED"});
expect([...ms932Encoder.encode("寮")].join(",")).toBe("151,190"); // U+5BEE
expect(() => {ms932Encoder.encode("\u5BEF")}).toThrowError({name:"TypeError",message:"EncodingError U+5BEF"});
expect([...ms932Encoder.encode("寰")].join(",")).toBe("155,142"); // U+5BF0
expect(() => {ms932Encoder.encode("\u5BF1")}).toThrowError({name:"TypeError",message:"EncodingError U+5BF1"});
expect(() => {ms932Encoder.encode("\u5BF2")}).toThrowError({name:"TypeError",message:"EncodingError U+5BF2"});
expect([...ms932Encoder.encode("寳")].join(",")).toBe("155,144"); // U+5BF3
expect(() => {ms932Encoder.encode("\u5BF4")}).toThrowError({name:"TypeError",message:"EncodingError U+5BF4"});
expect([...ms932Encoder.encode("寵寶")].join(",")).toBe("146,158,155,143"); // U+5BF5
expect(() => {ms932Encoder.encode("\u5BF7")}).toThrowError({name:"TypeError",message:"EncodingError U+5BF7"});
expect([...ms932Encoder.encode("寸")].join(",")).toBe("144,161"); // U+5BF8
expect(() => {ms932Encoder.encode("\u5BF9")}).toThrowError({name:"TypeError",message:"EncodingError U+5BF9"});
expect([...ms932Encoder.encode("寺")].join(",")).toBe("142,155"); // U+5BFA
expect(() => {ms932Encoder.encode("\u5BFB")}).toThrowError({name:"TypeError",message:"EncodingError U+5BFB"});
expect(() => {ms932Encoder.encode("\u5BFC")}).toThrowError({name:"TypeError",message:"EncodingError U+5BFC"});
expect(() => {ms932Encoder.encode("\u5BFD")}).toThrowError({name:"TypeError",message:"EncodingError U+5BFD"});
expect([...ms932Encoder.encode("対寿")].join(",")).toBe("145,206,142,245"); // U+5BFE
expect(() => {ms932Encoder.encode("\u5C00")}).toThrowError({name:"TypeError",message:"EncodingError U+5C00"});
expect([...ms932Encoder.encode("封専")].join(",")).toBe("149,149,144,234"); // U+5C01
expect(() => {ms932Encoder.encode("\u5C03")}).toThrowError({name:"TypeError",message:"EncodingError U+5C03"});
expect([...ms932Encoder.encode("射尅将將專尉尊尋")].join(",")).toBe("142,203,155,145,143,171,155,146,155,147,136,209,145,184,144,113"); // U+5C04
expect(() => {ms932Encoder.encode("\u5C0C")}).toThrowError({name:"TypeError",message:"EncodingError U+5C0C"});
expect([...ms932Encoder.encode("對導小")].join(",")).toBe("155,148,147,177,143,172"); // U+5C0D
expect(() => {ms932Encoder.encode("\u5C10")}).toThrowError({name:"TypeError",message:"EncodingError U+5C10"});
expect([...ms932Encoder.encode("少")].join(",")).toBe("143,173"); // U+5C11
expect(() => {ms932Encoder.encode("\u5C12")}).toThrowError({name:"TypeError",message:"EncodingError U+5C12"});
expect([...ms932Encoder.encode("尓")].join(",")).toBe("155,149"); // U+5C13
expect(() => {ms932Encoder.encode("\u5C14")}).toThrowError({name:"TypeError",message:"EncodingError U+5C14"});
expect(() => {ms932Encoder.encode("\u5C15")}).toThrowError({name:"TypeError",message:"EncodingError U+5C15"});
expect([...ms932Encoder.encode("尖")].join(",")).toBe("144,235"); // U+5C16
expect(() => {ms932Encoder.encode("\u5C17")}).toThrowError({name:"TypeError",message:"EncodingError U+5C17"});
expect(() => {ms932Encoder.encode("\u5C18")}).toThrowError({name:"TypeError",message:"EncodingError U+5C18"});
expect(() => {ms932Encoder.encode("\u5C19")}).toThrowError({name:"TypeError",message:"EncodingError U+5C19"});
expect([...ms932Encoder.encode("尚")].join(",")).toBe("143,174"); // U+5C1A
expect(() => {ms932Encoder.encode("\u5C1B")}).toThrowError({name:"TypeError",message:"EncodingError U+5C1B"});
expect(() => {ms932Encoder.encode("\u5C1C")}).toThrowError({name:"TypeError",message:"EncodingError U+5C1C"});
expect(() => {ms932Encoder.encode("\u5C1D")}).toThrowError({name:"TypeError",message:"EncodingError U+5C1D"});
expect([...ms932Encoder.encode("尞")].join(",")).toBe("250,171"); // U+5C1E
expect(() => {ms932Encoder.encode("\u5C1F")}).toThrowError({name:"TypeError",message:"EncodingError U+5C1F"});
expect([...ms932Encoder.encode("尠")].join(",")).toBe("155,150"); // U+5C20
expect(() => {ms932Encoder.encode("\u5C21")}).toThrowError({name:"TypeError",message:"EncodingError U+5C21"});
expect([...ms932Encoder.encode("尢")].join(",")).toBe("155,151"); // U+5C22
expect(() => {ms932Encoder.encode("\u5C23")}).toThrowError({name:"TypeError",message:"EncodingError U+5C23"});
expect([...ms932Encoder.encode("尤")].join(",")).toBe("150,222"); // U+5C24
expect(() => {ms932Encoder.encode("\u5C25")}).toThrowError({name:"TypeError",message:"EncodingError U+5C25"});
expect(() => {ms932Encoder.encode("\u5C26")}).toThrowError({name:"TypeError",message:"EncodingError U+5C26"});
expect(() => {ms932Encoder.encode("\u5C27")}).toThrowError({name:"TypeError",message:"EncodingError U+5C27"});
expect([...ms932Encoder.encode("尨")].join(",")).toBe("155,152"); // U+5C28
expect(() => {ms932Encoder.encode("\u5C29")}).toThrowError({name:"TypeError",message:"EncodingError U+5C29"});
expect(() => {ms932Encoder.encode("\u5C2A")}).toThrowError({name:"TypeError",message:"EncodingError U+5C2A"});
expect(() => {ms932Encoder.encode("\u5C2B")}).toThrowError({name:"TypeError",message:"EncodingError U+5C2B"});
expect(() => {ms932Encoder.encode("\u5C2C")}).toThrowError({name:"TypeError",message:"EncodingError U+5C2C"});
expect([...ms932Encoder.encode("尭")].join(",")).toBe("139,196"); // U+5C2D
expect(() => {ms932Encoder.encode("\u5C2E")}).toThrowError({name:"TypeError",message:"EncodingError U+5C2E"});
expect(() => {ms932Encoder.encode("\u5C2F")}).toThrowError({name:"TypeError",message:"EncodingError U+5C2F"});
expect(() => {ms932Encoder.encode("\u5C30")}).toThrowError({name:"TypeError",message:"EncodingError U+5C30"});
expect([...ms932Encoder.encode("就")].join(",")).toBe("143,65"); // U+5C31
expect(() => {ms932Encoder.encode("\u5C32")}).toThrowError({name:"TypeError",message:"EncodingError U+5C32"});
expect(() => {ms932Encoder.encode("\u5C33")}).toThrowError({name:"TypeError",message:"EncodingError U+5C33"});
expect(() => {ms932Encoder.encode("\u5C34")}).toThrowError({name:"TypeError",message:"EncodingError U+5C34"});
expect(() => {ms932Encoder.encode("\u5C35")}).toThrowError({name:"TypeError",message:"EncodingError U+5C35"});
expect(() => {ms932Encoder.encode("\u5C36")}).toThrowError({name:"TypeError",message:"EncodingError U+5C36"});
expect(() => {ms932Encoder.encode("\u5C37")}).toThrowError({name:"TypeError",message:"EncodingError U+5C37"});
expect([...ms932Encoder.encode("尸尹尺尻尼尽尾尿局屁")].join(",")).toBe("155,153,155,154,142,218,144,75,147,242,144,115,148,246,148,65,139,199,155,155"); // U+5C38
expect(() => {ms932Encoder.encode("\u5C42")}).toThrowError({name:"TypeError",message:"EncodingError U+5C42"});
expect(() => {ms932Encoder.encode("\u5C43")}).toThrowError({name:"TypeError",message:"EncodingError U+5C43"});
expect(() => {ms932Encoder.encode("\u5C44")}).toThrowError({name:"TypeError",message:"EncodingError U+5C44"});
expect([...ms932Encoder.encode("居屆")].join(",")).toBe("139,143,155,156"); // U+5C45
expect(() => {ms932Encoder.encode("\u5C47")}).toThrowError({name:"TypeError",message:"EncodingError U+5C47"});
expect([...ms932Encoder.encode("屈")].join(",")).toBe("139,252"); // U+5C48
expect(() => {ms932Encoder.encode("\u5C49")}).toThrowError({name:"TypeError",message:"EncodingError U+5C49"});
expect([...ms932Encoder.encode("届屋")].join(",")).toBe("147,205,137,174"); // U+5C4A
expect(() => {ms932Encoder.encode("\u5C4C")}).toThrowError({name:"TypeError",message:"EncodingError U+5C4C"});
expect([...ms932Encoder.encode("屍屎屏屐屑")].join(",")).toBe("142,114,155,157,155,160,155,159,139,251"); // U+5C4D
expect(() => {ms932Encoder.encode("\u5C52")}).toThrowError({name:"TypeError",message:"EncodingError U+5C52"});
expect([...ms932Encoder.encode("屓")].join(",")).toBe("155,158"); // U+5C53
expect(() => {ms932Encoder.encode("\u5C54")}).toThrowError({name:"TypeError",message:"EncodingError U+5C54"});
expect([...ms932Encoder.encode("展")].join(",")).toBe("147,87"); // U+5C55
expect(() => {ms932Encoder.encode("\u5C56")}).toThrowError({name:"TypeError",message:"EncodingError U+5C56"});
expect(() => {ms932Encoder.encode("\u5C57")}).toThrowError({name:"TypeError",message:"EncodingError U+5C57"});
expect(() => {ms932Encoder.encode("\u5C58")}).toThrowError({name:"TypeError",message:"EncodingError U+5C58"});
expect(() => {ms932Encoder.encode("\u5C59")}).toThrowError({name:"TypeError",message:"EncodingError U+5C59"});
expect(() => {ms932Encoder.encode("\u5C5A")}).toThrowError({name:"TypeError",message:"EncodingError U+5C5A"});
expect(() => {ms932Encoder.encode("\u5C5B")}).toThrowError({name:"TypeError",message:"EncodingError U+5C5B"});
expect(() => {ms932Encoder.encode("\u5C5C")}).toThrowError({name:"TypeError",message:"EncodingError U+5C5C"});
expect(() => {ms932Encoder.encode("\u5C5D")}).toThrowError({name:"TypeError",message:"EncodingError U+5C5D"});
expect([...ms932Encoder.encode("属")].join(",")).toBe("145,174"); // U+5C5E
expect(() => {ms932Encoder.encode("\u5C5F")}).toThrowError({name:"TypeError",message:"EncodingError U+5C5F"});
expect([...ms932Encoder.encode("屠屡")].join(",")).toBe("147,106,142,198"); // U+5C60
expect(() => {ms932Encoder.encode("\u5C62")}).toThrowError({name:"TypeError",message:"EncodingError U+5C62"});
expect(() => {ms932Encoder.encode("\u5C63")}).toThrowError({name:"TypeError",message:"EncodingError U+5C63"});
expect([...ms932Encoder.encode("層履")].join(",")).toBe("145,119,151,154"); // U+5C64
expect(() => {ms932Encoder.encode("\u5C66")}).toThrowError({name:"TypeError",message:"EncodingError U+5C66"});
expect(() => {ms932Encoder.encode("\u5C67")}).toThrowError({name:"TypeError",message:"EncodingError U+5C67"});
expect(() => {ms932Encoder.encode("\u5C68")}).toThrowError({name:"TypeError",message:"EncodingError U+5C68"});
expect(() => {ms932Encoder.encode("\u5C69")}).toThrowError({name:"TypeError",message:"EncodingError U+5C69"});
expect(() => {ms932Encoder.encode("\u5C6A")}).toThrowError({name:"TypeError",message:"EncodingError U+5C6A"});
expect(() => {ms932Encoder.encode("\u5C6B")}).toThrowError({name:"TypeError",message:"EncodingError U+5C6B"});
expect([...ms932Encoder.encode("屬")].join(",")).toBe("155,162"); // U+5C6C
expect(() => {ms932Encoder.encode("\u5C6D")}).toThrowError({name:"TypeError",message:"EncodingError U+5C6D"});
expect([...ms932Encoder.encode("屮屯")].join(",")).toBe("155,163,147,212"); // U+5C6E
expect(() => {ms932Encoder.encode("\u5C70")}).toThrowError({name:"TypeError",message:"EncodingError U+5C70"});
expect([...ms932Encoder.encode("山")].join(",")).toBe("142,82"); // U+5C71
expect(() => {ms932Encoder.encode("\u5C72")}).toThrowError({name:"TypeError",message:"EncodingError U+5C72"});
expect(() => {ms932Encoder.encode("\u5C73")}).toThrowError({name:"TypeError",message:"EncodingError U+5C73"});
expect(() => {ms932Encoder.encode("\u5C74")}).toThrowError({name:"TypeError",message:"EncodingError U+5C74"});
expect(() => {ms932Encoder.encode("\u5C75")}).toThrowError({name:"TypeError",message:"EncodingError U+5C75"});
expect([...ms932Encoder.encode("屶")].join(",")).toBe("155,165"); // U+5C76
expect(() => {ms932Encoder.encode("\u5C77")}).toThrowError({name:"TypeError",message:"EncodingError U+5C77"});
expect(() => {ms932Encoder.encode("\u5C78")}).toThrowError({name:"TypeError",message:"EncodingError U+5C78"});
expect([...ms932Encoder.encode("屹")].join(",")).toBe("155,166"); // U+5C79
expect(() => {ms932Encoder.encode("\u5C7A")}).toThrowError({name:"TypeError",message:"EncodingError U+5C7A"});
expect(() => {ms932Encoder.encode("\u5C7B")}).toThrowError({name:"TypeError",message:"EncodingError U+5C7B"});
expect(() => {ms932Encoder.encode("\u5C7C")}).toThrowError({name:"TypeError",message:"EncodingError U+5C7C"});
expect(() => {ms932Encoder.encode("\u5C7D")}).toThrowError({name:"TypeError",message:"EncodingError U+5C7D"});
expect(() => {ms932Encoder.encode("\u5C7E")}).toThrowError({name:"TypeError",message:"EncodingError U+5C7E"});
expect(() => {ms932Encoder.encode("\u5C7F")}).toThrowError({name:"TypeError",message:"EncodingError U+5C7F"});
expect(() => {ms932Encoder.encode("\u5C80")}).toThrowError({name:"TypeError",message:"EncodingError U+5C80"});
expect(() => {ms932Encoder.encode("\u5C81")}).toThrowError({name:"TypeError",message:"EncodingError U+5C81"});
expect(() => {ms932Encoder.encode("\u5C82")}).toThrowError({name:"TypeError",message:"EncodingError U+5C82"});
expect(() => {ms932Encoder.encode("\u5C83")}).toThrowError({name:"TypeError",message:"EncodingError U+5C83"});
expect(() => {ms932Encoder.encode("\u5C84")}).toThrowError({name:"TypeError",message:"EncodingError U+5C84"});
expect(() => {ms932Encoder.encode("\u5C85")}).toThrowError({name:"TypeError",message:"EncodingError U+5C85"});
expect(() => {ms932Encoder.encode("\u5C86")}).toThrowError({name:"TypeError",message:"EncodingError U+5C86"});
expect(() => {ms932Encoder.encode("\u5C87")}).toThrowError({name:"TypeError",message:"EncodingError U+5C87"});
expect(() => {ms932Encoder.encode("\u5C88")}).toThrowError({name:"TypeError",message:"EncodingError U+5C88"});
expect(() => {ms932Encoder.encode("\u5C89")}).toThrowError({name:"TypeError",message:"EncodingError U+5C89"});
expect(() => {ms932Encoder.encode("\u5C8A")}).toThrowError({name:"TypeError",message:"EncodingError U+5C8A"});
expect(() => {ms932Encoder.encode("\u5C8B")}).toThrowError({name:"TypeError",message:"EncodingError U+5C8B"});
expect([...ms932Encoder.encode("岌")].join(",")).toBe("155,167"); // U+5C8C
expect(() => {ms932Encoder.encode("\u5C8D")}).toThrowError({name:"TypeError",message:"EncodingError U+5C8D"});
expect(() => {ms932Encoder.encode("\u5C8E")}).toThrowError({name:"TypeError",message:"EncodingError U+5C8E"});
expect(() => {ms932Encoder.encode("\u5C8F")}).toThrowError({name:"TypeError",message:"EncodingError U+5C8F"});
expect([...ms932Encoder.encode("岐岑")].join(",")).toBe("138,242,155,168"); // U+5C90
expect(() => {ms932Encoder.encode("\u5C92")}).toThrowError({name:"TypeError",message:"EncodingError U+5C92"});
expect(() => {ms932Encoder.encode("\u5C93")}).toThrowError({name:"TypeError",message:"EncodingError U+5C93"});
expect([...ms932Encoder.encode("岔")].join(",")).toBe("155,169"); // U+5C94
expect(() => {ms932Encoder.encode("\u5C95")}).toThrowError({name:"TypeError",message:"EncodingError U+5C95"});
expect(() => {ms932Encoder.encode("\u5C96")}).toThrowError({name:"TypeError",message:"EncodingError U+5C96"});
expect(() => {ms932Encoder.encode("\u5C97")}).toThrowError({name:"TypeError",message:"EncodingError U+5C97"});
expect(() => {ms932Encoder.encode("\u5C98")}).toThrowError({name:"TypeError",message:"EncodingError U+5C98"});
expect(() => {ms932Encoder.encode("\u5C99")}).toThrowError({name:"TypeError",message:"EncodingError U+5C99"});
expect(() => {ms932Encoder.encode("\u5C9A")}).toThrowError({name:"TypeError",message:"EncodingError U+5C9A"});
expect(() => {ms932Encoder.encode("\u5C9B")}).toThrowError({name:"TypeError",message:"EncodingError U+5C9B"});
expect(() => {ms932Encoder.encode("\u5C9C")}).toThrowError({name:"TypeError",message:"EncodingError U+5C9C"});
expect(() => {ms932Encoder.encode("\u5C9D")}).toThrowError({name:"TypeError",message:"EncodingError U+5C9D"});
expect(() => {ms932Encoder.encode("\u5C9E")}).toThrowError({name:"TypeError",message:"EncodingError U+5C9E"});
expect(() => {ms932Encoder.encode("\u5C9F")}).toThrowError({name:"TypeError",message:"EncodingError U+5C9F"});
expect(() => {ms932Encoder.encode("\u5CA0")}).toThrowError({name:"TypeError",message:"EncodingError U+5CA0"});
expect([...ms932Encoder.encode("岡")].join(",")).toBe("137,170"); // U+5CA1
expect(() => {ms932Encoder.encode("\u5CA2")}).toThrowError({name:"TypeError",message:"EncodingError U+5CA2"});
expect(() => {ms932Encoder.encode("\u5CA3")}).toThrowError({name:"TypeError",message:"EncodingError U+5CA3"});
expect(() => {ms932Encoder.encode("\u5CA4")}).toThrowError({name:"TypeError",message:"EncodingError U+5CA4"});
expect(() => {ms932Encoder.encode("\u5CA5")}).toThrowError({name:"TypeError",message:"EncodingError U+5CA5"});
expect([...ms932Encoder.encode("岦")].join(",")).toBe("250,172"); // U+5CA6
expect(() => {ms932Encoder.encode("\u5CA7")}).toThrowError({name:"TypeError",message:"EncodingError U+5CA7"});
expect([...ms932Encoder.encode("岨岩")].join(",")).toBe("145,90,138,226"); // U+5CA8
expect(() => {ms932Encoder.encode("\u5CAA")}).toThrowError({name:"TypeError",message:"EncodingError U+5CAA"});
expect([...ms932Encoder.encode("岫岬")].join(",")).toBe("155,171,150,166"); // U+5CAB
expect(() => {ms932Encoder.encode("\u5CAD")}).toThrowError({name:"TypeError",message:"EncodingError U+5CAD"});
expect(() => {ms932Encoder.encode("\u5CAE")}).toThrowError({name:"TypeError",message:"EncodingError U+5CAE"});
expect(() => {ms932Encoder.encode("\u5CAF")}).toThrowError({name:"TypeError",message:"EncodingError U+5CAF"});
expect(() => {ms932Encoder.encode("\u5CB0")}).toThrowError({name:"TypeError",message:"EncodingError U+5CB0"});
expect([...ms932Encoder.encode("岱")].join(",")).toBe("145,208"); // U+5CB1
expect(() => {ms932Encoder.encode("\u5CB2")}).toThrowError({name:"TypeError",message:"EncodingError U+5CB2"});
expect([...ms932Encoder.encode("岳")].join(",")).toBe("138,120"); // U+5CB3
expect(() => {ms932Encoder.encode("\u5CB4")}).toThrowError({name:"TypeError",message:"EncodingError U+5CB4"});
expect(() => {ms932Encoder.encode("\u5CB5")}).toThrowError({name:"TypeError",message:"EncodingError U+5CB5"});
expect([...ms932Encoder.encode("岶岷岸")].join(",")).toBe("155,173,155,175,138,221"); // U+5CB6
expect(() => {ms932Encoder.encode("\u5CB9")}).toThrowError({name:"TypeError",message:"EncodingError U+5CB9"});
expect([...ms932Encoder.encode("岺岻岼")].join(",")).toBe("250,173,155,172,155,174"); // U+5CBA
expect(() => {ms932Encoder.encode("\u5CBD")}).toThrowError({name:"TypeError",message:"EncodingError U+5CBD"});
expect([...ms932Encoder.encode("岾")].join(",")).toBe("155,177"); // U+5CBE
expect(() => {ms932Encoder.encode("\u5CBF")}).toThrowError({name:"TypeError",message:"EncodingError U+5CBF"});
expect(() => {ms932Encoder.encode("\u5CC0")}).toThrowError({name:"TypeError",message:"EncodingError U+5CC0"});
expect(() => {ms932Encoder.encode("\u5CC1")}).toThrowError({name:"TypeError",message:"EncodingError U+5CC1"});
expect(() => {ms932Encoder.encode("\u5CC2")}).toThrowError({name:"TypeError",message:"EncodingError U+5CC2"});
expect(() => {ms932Encoder.encode("\u5CC3")}).toThrowError({name:"TypeError",message:"EncodingError U+5CC3"});
expect(() => {ms932Encoder.encode("\u5CC4")}).toThrowError({name:"TypeError",message:"EncodingError U+5CC4"});
expect([...ms932Encoder.encode("峅")].join(",")).toBe("155,176"); // U+5CC5
expect(() => {ms932Encoder.encode("\u5CC6")}).toThrowError({name:"TypeError",message:"EncodingError U+5CC6"});
expect([...ms932Encoder.encode("峇")].join(",")).toBe("155,178"); // U+5CC7
expect(() => {ms932Encoder.encode("\u5CC8")}).toThrowError({name:"TypeError",message:"EncodingError U+5CC8"});
expect(() => {ms932Encoder.encode("\u5CC9")}).toThrowError({name:"TypeError",message:"EncodingError U+5CC9"});
expect(() => {ms932Encoder.encode("\u5CCA")}).toThrowError({name:"TypeError",message:"EncodingError U+5CCA"});
expect(() => {ms932Encoder.encode("\u5CCB")}).toThrowError({name:"TypeError",message:"EncodingError U+5CCB"});
expect(() => {ms932Encoder.encode("\u5CCC")}).toThrowError({name:"TypeError",message:"EncodingError U+5CCC"});
expect(() => {ms932Encoder.encode("\u5CCD")}).toThrowError({name:"TypeError",message:"EncodingError U+5CCD"});
expect(() => {ms932Encoder.encode("\u5CCE")}).toThrowError({name:"TypeError",message:"EncodingError U+5CCE"});
expect(() => {ms932Encoder.encode("\u5CCF")}).toThrowError({name:"TypeError",message:"EncodingError U+5CCF"});
expect(() => {ms932Encoder.encode("\u5CD0")}).toThrowError({name:"TypeError",message:"EncodingError U+5CD0"});
expect(() => {ms932Encoder.encode("\u5CD1")}).toThrowError({name:"TypeError",message:"EncodingError U+5CD1"});
expect(() => {ms932Encoder.encode("\u5CD2")}).toThrowError({name:"TypeError",message:"EncodingError U+5CD2"});
expect(() => {ms932Encoder.encode("\u5CD3")}).toThrowError({name:"TypeError",message:"EncodingError U+5CD3"});
expect(() => {ms932Encoder.encode("\u5CD4")}).toThrowError({name:"TypeError",message:"EncodingError U+5CD4"});
expect(() => {ms932Encoder.encode("\u5CD5")}).toThrowError({name:"TypeError",message:"EncodingError U+5CD5"});
expect(() => {ms932Encoder.encode("\u5CD6")}).toThrowError({name:"TypeError",message:"EncodingError U+5CD6"});
expect(() => {ms932Encoder.encode("\u5CD7")}).toThrowError({name:"TypeError",message:"EncodingError U+5CD7"});
expect(() => {ms932Encoder.encode("\u5CD8")}).toThrowError({name:"TypeError",message:"EncodingError U+5CD8"});
expect([...ms932Encoder.encode("峙")].join(",")).toBe("155,179"); // U+5CD9
expect(() => {ms932Encoder.encode("\u5CDA")}).toThrowError({name:"TypeError",message:"EncodingError U+5CDA"});
expect(() => {ms932Encoder.encode("\u5CDB")}).toThrowError({name:"TypeError",message:"EncodingError U+5CDB"});
expect(() => {ms932Encoder.encode("\u5CDC")}).toThrowError({name:"TypeError",message:"EncodingError U+5CDC"});
expect(() => {ms932Encoder.encode("\u5CDD")}).toThrowError({name:"TypeError",message:"EncodingError U+5CDD"});
expect(() => {ms932Encoder.encode("\u5CDE")}).toThrowError({name:"TypeError",message:"EncodingError U+5CDE"});
expect(() => {ms932Encoder.encode("\u5CDF")}).toThrowError({name:"TypeError",message:"EncodingError U+5CDF"});
expect([...ms932Encoder.encode("峠峡")].join(",")).toBe("147,187,139,172"); // U+5CE0
expect(() => {ms932Encoder.encode("\u5CE2")}).toThrowError({name:"TypeError",message:"EncodingError U+5CE2"});
expect(() => {ms932Encoder.encode("\u5CE3")}).toThrowError({name:"TypeError",message:"EncodingError U+5CE3"});
expect(() => {ms932Encoder.encode("\u5CE4")}).toThrowError({name:"TypeError",message:"EncodingError U+5CE4"});
expect(() => {ms932Encoder.encode("\u5CE5")}).toThrowError({name:"TypeError",message:"EncodingError U+5CE5"});
expect(() => {ms932Encoder.encode("\u5CE6")}).toThrowError({name:"TypeError",message:"EncodingError U+5CE6"});
expect(() => {ms932Encoder.encode("\u5CE7")}).toThrowError({name:"TypeError",message:"EncodingError U+5CE7"});
expect([...ms932Encoder.encode("峨峩峪")].join(",")).toBe("137,227,155,180,155,185"); // U+5CE8
expect(() => {ms932Encoder.encode("\u5CEB")}).toThrowError({name:"TypeError",message:"EncodingError U+5CEB"});
expect(() => {ms932Encoder.encode("\u5CEC")}).toThrowError({name:"TypeError",message:"EncodingError U+5CEC"});
expect([...ms932Encoder.encode("峭")].join(",")).toBe("155,183"); // U+5CED
expect(() => {ms932Encoder.encode("\u5CEE")}).toThrowError({name:"TypeError",message:"EncodingError U+5CEE"});
expect([...ms932Encoder.encode("峯峰")].join(",")).toBe("149,245,149,244"); // U+5CEF
expect(() => {ms932Encoder.encode("\u5CF1")}).toThrowError({name:"TypeError",message:"EncodingError U+5CF1"});
expect(() => {ms932Encoder.encode("\u5CF2")}).toThrowError({name:"TypeError",message:"EncodingError U+5CF2"});
expect(() => {ms932Encoder.encode("\u5CF3")}).toThrowError({name:"TypeError",message:"EncodingError U+5CF3"});
expect(() => {ms932Encoder.encode("\u5CF4")}).toThrowError({name:"TypeError",message:"EncodingError U+5CF4"});
expect([...ms932Encoder.encode("峵島")].join(",")).toBe("250,174,147,135"); // U+5CF5
expect(() => {ms932Encoder.encode("\u5CF7")}).toThrowError({name:"TypeError",message:"EncodingError U+5CF7"});
expect(() => {ms932Encoder.encode("\u5CF8")}).toThrowError({name:"TypeError",message:"EncodingError U+5CF8"});
expect(() => {ms932Encoder.encode("\u5CF9")}).toThrowError({name:"TypeError",message:"EncodingError U+5CF9"});
expect([...ms932Encoder.encode("峺峻")].join(",")).toBe("155,182,143,115"); // U+5CFA
expect(() => {ms932Encoder.encode("\u5CFC")}).toThrowError({name:"TypeError",message:"EncodingError U+5CFC"});
expect([...ms932Encoder.encode("峽")].join(",")).toBe("155,181"); // U+5CFD
expect(() => {ms932Encoder.encode("\u5CFE")}).toThrowError({name:"TypeError",message:"EncodingError U+5CFE"});
expect(() => {ms932Encoder.encode("\u5CFF")}).toThrowError({name:"TypeError",message:"EncodingError U+5CFF"});
expect(() => {ms932Encoder.encode("\u5D00")}).toThrowError({name:"TypeError",message:"EncodingError U+5D00"});
expect(() => {ms932Encoder.encode("\u5D01")}).toThrowError({name:"TypeError",message:"EncodingError U+5D01"});
expect(() => {ms932Encoder.encode("\u5D02")}).toThrowError({name:"TypeError",message:"EncodingError U+5D02"});
expect(() => {ms932Encoder.encode("\u5D03")}).toThrowError({name:"TypeError",message:"EncodingError U+5D03"});
expect(() => {ms932Encoder.encode("\u5D04")}).toThrowError({name:"TypeError",message:"EncodingError U+5D04"});
expect(() => {ms932Encoder.encode("\u5D05")}).toThrowError({name:"TypeError",message:"EncodingError U+5D05"});
expect(() => {ms932Encoder.encode("\u5D06")}).toThrowError({name:"TypeError",message:"EncodingError U+5D06"});
expect([...ms932Encoder.encode("崇")].join(",")).toBe("144,146"); // U+5D07
expect(() => {ms932Encoder.encode("\u5D08")}).toThrowError({name:"TypeError",message:"EncodingError U+5D08"});
expect(() => {ms932Encoder.encode("\u5D09")}).toThrowError({name:"TypeError",message:"EncodingError U+5D09"});
expect(() => {ms932Encoder.encode("\u5D0A")}).toThrowError({name:"TypeError",message:"EncodingError U+5D0A"});
expect([...ms932Encoder.encode("崋")].join(",")).toBe("155,186"); // U+5D0B
expect(() => {ms932Encoder.encode("\u5D0C")}).toThrowError({name:"TypeError",message:"EncodingError U+5D0C"});
expect(() => {ms932Encoder.encode("\u5D0D")}).toThrowError({name:"TypeError",message:"EncodingError U+5D0D"});
expect([...ms932Encoder.encode("崎")].join(",")).toBe("141,232"); // U+5D0E
expect(() => {ms932Encoder.encode("\u5D0F")}).toThrowError({name:"TypeError",message:"EncodingError U+5D0F"});
expect(() => {ms932Encoder.encode("\u5D10")}).toThrowError({name:"TypeError",message:"EncodingError U+5D10"});
expect([...ms932Encoder.encode("崑")].join(",")).toBe("155,192"); // U+5D11
expect(() => {ms932Encoder.encode("\u5D12")}).toThrowError({name:"TypeError",message:"EncodingError U+5D12"});
expect(() => {ms932Encoder.encode("\u5D13")}).toThrowError({name:"TypeError",message:"EncodingError U+5D13"});
expect([...ms932Encoder.encode("崔崕崖崗崘崙崚崛")].join(",")).toBe("155,193,155,187,138,82,155,188,155,197,155,196,155,195,155,191"); // U+5D14
expect(() => {ms932Encoder.encode("\u5D1C")}).toThrowError({name:"TypeError",message:"EncodingError U+5D1C"});
expect(() => {ms932Encoder.encode("\u5D1D")}).toThrowError({name:"TypeError",message:"EncodingError U+5D1D"});
expect(() => {ms932Encoder.encode("\u5D1E")}).toThrowError({name:"TypeError",message:"EncodingError U+5D1E"});
expect([...ms932Encoder.encode("崟")].join(",")).toBe("155,190"); // U+5D1F
expect(() => {ms932Encoder.encode("\u5D20")}).toThrowError({name:"TypeError",message:"EncodingError U+5D20"});
expect(() => {ms932Encoder.encode("\u5D21")}).toThrowError({name:"TypeError",message:"EncodingError U+5D21"});
expect([...ms932Encoder.encode("崢")].join(",")).toBe("155,194"); // U+5D22
expect(() => {ms932Encoder.encode("\u5D23")}).toThrowError({name:"TypeError",message:"EncodingError U+5D23"});
expect(() => {ms932Encoder.encode("\u5D24")}).toThrowError({name:"TypeError",message:"EncodingError U+5D24"});
expect(() => {ms932Encoder.encode("\u5D25")}).toThrowError({name:"TypeError",message:"EncodingError U+5D25"});
expect(() => {ms932Encoder.encode("\u5D26")}).toThrowError({name:"TypeError",message:"EncodingError U+5D26"});
expect([...ms932Encoder.encode("崧")].join(",")).toBe("250,175"); // U+5D27
expect(() => {ms932Encoder.encode("\u5D28")}).toThrowError({name:"TypeError",message:"EncodingError U+5D28"});
expect([...ms932Encoder.encode("崩")].join(",")).toBe("149,246"); // U+5D29
expect(() => {ms932Encoder.encode("\u5D2A")}).toThrowError({name:"TypeError",message:"EncodingError U+5D2A"});
expect(() => {ms932Encoder.encode("\u5D2B")}).toThrowError({name:"TypeError",message:"EncodingError U+5D2B"});
expect(() => {ms932Encoder.encode("\u5D2C")}).toThrowError({name:"TypeError",message:"EncodingError U+5D2C"});
expect(() => {ms932Encoder.encode("\u5D2D")}).toThrowError({name:"TypeError",message:"EncodingError U+5D2D"});
expect(() => {ms932Encoder.encode("\u5D2E")}).toThrowError({name:"TypeError",message:"EncodingError U+5D2E"});
expect(() => {ms932Encoder.encode("\u5D2F")}).toThrowError({name:"TypeError",message:"EncodingError U+5D2F"});
expect(() => {ms932Encoder.encode("\u5D30")}).toThrowError({name:"TypeError",message:"EncodingError U+5D30"});
expect(() => {ms932Encoder.encode("\u5D31")}).toThrowError({name:"TypeError",message:"EncodingError U+5D31"});
expect(() => {ms932Encoder.encode("\u5D32")}).toThrowError({name:"TypeError",message:"EncodingError U+5D32"});
expect(() => {ms932Encoder.encode("\u5D33")}).toThrowError({name:"TypeError",message:"EncodingError U+5D33"});
expect(() => {ms932Encoder.encode("\u5D34")}).toThrowError({name:"TypeError",message:"EncodingError U+5D34"});
expect(() => {ms932Encoder.encode("\u5D35")}).toThrowError({name:"TypeError",message:"EncodingError U+5D35"});
expect(() => {ms932Encoder.encode("\u5D36")}).toThrowError({name:"TypeError",message:"EncodingError U+5D36"});
expect(() => {ms932Encoder.encode("\u5D37")}).toThrowError({name:"TypeError",message:"EncodingError U+5D37"});
expect(() => {ms932Encoder.encode("\u5D38")}).toThrowError({name:"TypeError",message:"EncodingError U+5D38"});
expect(() => {ms932Encoder.encode("\u5D39")}).toThrowError({name:"TypeError",message:"EncodingError U+5D39"});
expect(() => {ms932Encoder.encode("\u5D3A")}).toThrowError({name:"TypeError",message:"EncodingError U+5D3A"});
expect(() => {ms932Encoder.encode("\u5D3B")}).toThrowError({name:"TypeError",message:"EncodingError U+5D3B"});
expect(() => {ms932Encoder.encode("\u5D3C")}).toThrowError({name:"TypeError",message:"EncodingError U+5D3C"});
expect(() => {ms932Encoder.encode("\u5D3D")}).toThrowError({name:"TypeError",message:"EncodingError U+5D3D"});
expect(() => {ms932Encoder.encode("\u5D3E")}).toThrowError({name:"TypeError",message:"EncodingError U+5D3E"});
expect(() => {ms932Encoder.encode("\u5D3F")}).toThrowError({name:"TypeError",message:"EncodingError U+5D3F"});
expect(() => {ms932Encoder.encode("\u5D40")}).toThrowError({name:"TypeError",message:"EncodingError U+5D40"});
expect(() => {ms932Encoder.encode("\u5D41")}).toThrowError({name:"TypeError",message:"EncodingError U+5D41"});
expect([...ms932Encoder.encode("嵂")].join(",")).toBe("250,178"); // U+5D42
expect(() => {ms932Encoder.encode("\u5D43")}).toThrowError({name:"TypeError",message:"EncodingError U+5D43"});
expect(() => {ms932Encoder.encode("\u5D44")}).toThrowError({name:"TypeError",message:"EncodingError U+5D44"});
expect(() => {ms932Encoder.encode("\u5D45")}).toThrowError({name:"TypeError",message:"EncodingError U+5D45"});
expect(() => {ms932Encoder.encode("\u5D46")}).toThrowError({name:"TypeError",message:"EncodingError U+5D46"});
expect(() => {ms932Encoder.encode("\u5D47")}).toThrowError({name:"TypeError",message:"EncodingError U+5D47"});
expect(() => {ms932Encoder.encode("\u5D48")}).toThrowError({name:"TypeError",message:"EncodingError U+5D48"});
expect(() => {ms932Encoder.encode("\u5D49")}).toThrowError({name:"TypeError",message:"EncodingError U+5D49"});
expect(() => {ms932Encoder.encode("\u5D4A")}).toThrowError({name:"TypeError",message:"EncodingError U+5D4A"});
expect([...ms932Encoder.encode("嵋嵌")].join(",")).toBe("155,201,155,198"); // U+5D4B
expect(() => {ms932Encoder.encode("\u5D4D")}).toThrowError({name:"TypeError",message:"EncodingError U+5D4D"});
expect([...ms932Encoder.encode("嵎")].join(",")).toBe("155,200"); // U+5D4E
expect(() => {ms932Encoder.encode("\u5D4F")}).toThrowError({name:"TypeError",message:"EncodingError U+5D4F"});
expect([...ms932Encoder.encode("嵐")].join(",")).toBe("151,146"); // U+5D50
expect(() => {ms932Encoder.encode("\u5D51")}).toThrowError({name:"TypeError",message:"EncodingError U+5D51"});
expect([...ms932Encoder.encode("嵒嵓")].join(",")).toBe("155,199,250,176"); // U+5D52
expect(() => {ms932Encoder.encode("\u5D54")}).toThrowError({name:"TypeError",message:"EncodingError U+5D54"});
expect(() => {ms932Encoder.encode("\u5D55")}).toThrowError({name:"TypeError",message:"EncodingError U+5D55"});
expect(() => {ms932Encoder.encode("\u5D56")}).toThrowError({name:"TypeError",message:"EncodingError U+5D56"});
expect(() => {ms932Encoder.encode("\u5D57")}).toThrowError({name:"TypeError",message:"EncodingError U+5D57"});
expect(() => {ms932Encoder.encode("\u5D58")}).toThrowError({name:"TypeError",message:"EncodingError U+5D58"});
expect(() => {ms932Encoder.encode("\u5D59")}).toThrowError({name:"TypeError",message:"EncodingError U+5D59"});
expect(() => {ms932Encoder.encode("\u5D5A")}).toThrowError({name:"TypeError",message:"EncodingError U+5D5A"});
expect(() => {ms932Encoder.encode("\u5D5B")}).toThrowError({name:"TypeError",message:"EncodingError U+5D5B"});
expect([...ms932Encoder.encode("嵜")].join(",")).toBe("155,189"); // U+5D5C
expect(() => {ms932Encoder.encode("\u5D5D")}).toThrowError({name:"TypeError",message:"EncodingError U+5D5D"});
expect(() => {ms932Encoder.encode("\u5D5E")}).toThrowError({name:"TypeError",message:"EncodingError U+5D5E"});
expect(() => {ms932Encoder.encode("\u5D5F")}).toThrowError({name:"TypeError",message:"EncodingError U+5D5F"});
expect(() => {ms932Encoder.encode("\u5D60")}).toThrowError({name:"TypeError",message:"EncodingError U+5D60"});
expect(() => {ms932Encoder.encode("\u5D61")}).toThrowError({name:"TypeError",message:"EncodingError U+5D61"});
expect(() => {ms932Encoder.encode("\u5D62")}).toThrowError({name:"TypeError",message:"EncodingError U+5D62"});
expect(() => {ms932Encoder.encode("\u5D63")}).toThrowError({name:"TypeError",message:"EncodingError U+5D63"});
expect(() => {ms932Encoder.encode("\u5D64")}).toThrowError({name:"TypeError",message:"EncodingError U+5D64"});
expect(() => {ms932Encoder.encode("\u5D65")}).toThrowError({name:"TypeError",message:"EncodingError U+5D65"});
expect(() => {ms932Encoder.encode("\u5D66")}).toThrowError({name:"TypeError",message:"EncodingError U+5D66"});
expect(() => {ms932Encoder.encode("\u5D67")}).toThrowError({name:"TypeError",message:"EncodingError U+5D67"});
expect(() => {ms932Encoder.encode("\u5D68")}).toThrowError({name:"TypeError",message:"EncodingError U+5D68"});
expect([...ms932Encoder.encode("嵩")].join(",")).toBe("144,147"); // U+5D69
expect(() => {ms932Encoder.encode("\u5D6A")}).toThrowError({name:"TypeError",message:"EncodingError U+5D6A"});
expect(() => {ms932Encoder.encode("\u5D6B")}).toThrowError({name:"TypeError",message:"EncodingError U+5D6B"});
expect([...ms932Encoder.encode("嵬嵭")].join(",")).toBe("155,202,250,179"); // U+5D6C
expect(() => {ms932Encoder.encode("\u5D6E")}).toThrowError({name:"TypeError",message:"EncodingError U+5D6E"});
expect([...ms932Encoder.encode("嵯")].join(",")).toBe("141,181"); // U+5D6F
expect(() => {ms932Encoder.encode("\u5D70")}).toThrowError({name:"TypeError",message:"EncodingError U+5D70"});
expect(() => {ms932Encoder.encode("\u5D71")}).toThrowError({name:"TypeError",message:"EncodingError U+5D71"});
expect(() => {ms932Encoder.encode("\u5D72")}).toThrowError({name:"TypeError",message:"EncodingError U+5D72"});
expect([...ms932Encoder.encode("嵳")].join(",")).toBe("155,203"); // U+5D73
expect(() => {ms932Encoder.encode("\u5D74")}).toThrowError({name:"TypeError",message:"EncodingError U+5D74"});
expect(() => {ms932Encoder.encode("\u5D75")}).toThrowError({name:"TypeError",message:"EncodingError U+5D75"});
expect([...ms932Encoder.encode("嵶")].join(",")).toBe("155,204"); // U+5D76
expect(() => {ms932Encoder.encode("\u5D77")}).toThrowError({name:"TypeError",message:"EncodingError U+5D77"});
expect(() => {ms932Encoder.encode("\u5D78")}).toThrowError({name:"TypeError",message:"EncodingError U+5D78"});
expect(() => {ms932Encoder.encode("\u5D79")}).toThrowError({name:"TypeError",message:"EncodingError U+5D79"});
expect(() => {ms932Encoder.encode("\u5D7A")}).toThrowError({name:"TypeError",message:"EncodingError U+5D7A"});
expect(() => {ms932Encoder.encode("\u5D7B")}).toThrowError({name:"TypeError",message:"EncodingError U+5D7B"});
expect(() => {ms932Encoder.encode("\u5D7C")}).toThrowError({name:"TypeError",message:"EncodingError U+5D7C"});
expect(() => {ms932Encoder.encode("\u5D7D")}).toThrowError({name:"TypeError",message:"EncodingError U+5D7D"});
expect(() => {ms932Encoder.encode("\u5D7E")}).toThrowError({name:"TypeError",message:"EncodingError U+5D7E"});
expect(() => {ms932Encoder.encode("\u5D7F")}).toThrowError({name:"TypeError",message:"EncodingError U+5D7F"});
expect(() => {ms932Encoder.encode("\u5D80")}).toThrowError({name:"TypeError",message:"EncodingError U+5D80"});
expect(() => {ms932Encoder.encode("\u5D81")}).toThrowError({name:"TypeError",message:"EncodingError U+5D81"});
expect([...ms932Encoder.encode("嶂")].join(",")).toBe("155,207"); // U+5D82
expect(() => {ms932Encoder.encode("\u5D83")}).toThrowError({name:"TypeError",message:"EncodingError U+5D83"});
expect([...ms932Encoder.encode("嶄")].join(",")).toBe("155,206"); // U+5D84
expect(() => {ms932Encoder.encode("\u5D85")}).toThrowError({name:"TypeError",message:"EncodingError U+5D85"});
expect(() => {ms932Encoder.encode("\u5D86")}).toThrowError({name:"TypeError",message:"EncodingError U+5D86"});
expect([...ms932Encoder.encode("嶇")].join(",")).toBe("155,205"); // U+5D87
expect(() => {ms932Encoder.encode("\u5D88")}).toThrowError({name:"TypeError",message:"EncodingError U+5D88"});
expect(() => {ms932Encoder.encode("\u5D89")}).toThrowError({name:"TypeError",message:"EncodingError U+5D89"});
expect(() => {ms932Encoder.encode("\u5D8A")}).toThrowError({name:"TypeError",message:"EncodingError U+5D8A"});
expect([...ms932Encoder.encode("嶋嶌")].join(",")).toBe("147,136,155,184"); // U+5D8B
expect(() => {ms932Encoder.encode("\u5D8D")}).toThrowError({name:"TypeError",message:"EncodingError U+5D8D"});
expect(() => {ms932Encoder.encode("\u5D8E")}).toThrowError({name:"TypeError",message:"EncodingError U+5D8E"});
expect(() => {ms932Encoder.encode("\u5D8F")}).toThrowError({name:"TypeError",message:"EncodingError U+5D8F"});
expect([...ms932Encoder.encode("嶐")].join(",")).toBe("155,213"); // U+5D90
expect(() => {ms932Encoder.encode("\u5D91")}).toThrowError({name:"TypeError",message:"EncodingError U+5D91"});
expect(() => {ms932Encoder.encode("\u5D92")}).toThrowError({name:"TypeError",message:"EncodingError U+5D92"});
expect(() => {ms932Encoder.encode("\u5D93")}).toThrowError({name:"TypeError",message:"EncodingError U+5D93"});
expect(() => {ms932Encoder.encode("\u5D94")}).toThrowError({name:"TypeError",message:"EncodingError U+5D94"});
expect(() => {ms932Encoder.encode("\u5D95")}).toThrowError({name:"TypeError",message:"EncodingError U+5D95"});
expect(() => {ms932Encoder.encode("\u5D96")}).toThrowError({name:"TypeError",message:"EncodingError U+5D96"});
expect(() => {ms932Encoder.encode("\u5D97")}).toThrowError({name:"TypeError",message:"EncodingError U+5D97"});
expect(() => {ms932Encoder.encode("\u5D98")}).toThrowError({name:"TypeError",message:"EncodingError U+5D98"});
expect(() => {ms932Encoder.encode("\u5D99")}).toThrowError({name:"TypeError",message:"EncodingError U+5D99"});
expect(() => {ms932Encoder.encode("\u5D9A")}).toThrowError({name:"TypeError",message:"EncodingError U+5D9A"});
expect(() => {ms932Encoder.encode("\u5D9B")}).toThrowError({name:"TypeError",message:"EncodingError U+5D9B"});
expect(() => {ms932Encoder.encode("\u5D9C")}).toThrowError({name:"TypeError",message:"EncodingError U+5D9C"});
expect([...ms932Encoder.encode("嶝")].join(",")).toBe("155,209"); // U+5D9D
expect(() => {ms932Encoder.encode("\u5D9E")}).toThrowError({name:"TypeError",message:"EncodingError U+5D9E"});
expect(() => {ms932Encoder.encode("\u5D9F")}).toThrowError({name:"TypeError",message:"EncodingError U+5D9F"});
expect(() => {ms932Encoder.encode("\u5DA0")}).toThrowError({name:"TypeError",message:"EncodingError U+5DA0"});
expect(() => {ms932Encoder.encode("\u5DA1")}).toThrowError({name:"TypeError",message:"EncodingError U+5DA1"});
expect([...ms932Encoder.encode("嶢")].join(",")).toBe("155,208"); // U+5DA2
expect(() => {ms932Encoder.encode("\u5DA3")}).toThrowError({name:"TypeError",message:"EncodingError U+5DA3"});
expect(() => {ms932Encoder.encode("\u5DA4")}).toThrowError({name:"TypeError",message:"EncodingError U+5DA4"});
expect(() => {ms932Encoder.encode("\u5DA5")}).toThrowError({name:"TypeError",message:"EncodingError U+5DA5"});
expect(() => {ms932Encoder.encode("\u5DA6")}).toThrowError({name:"TypeError",message:"EncodingError U+5DA6"});
expect(() => {ms932Encoder.encode("\u5DA7")}).toThrowError({name:"TypeError",message:"EncodingError U+5DA7"});
expect(() => {ms932Encoder.encode("\u5DA8")}).toThrowError({name:"TypeError",message:"EncodingError U+5DA8"});
expect(() => {ms932Encoder.encode("\u5DA9")}).toThrowError({name:"TypeError",message:"EncodingError U+5DA9"});
expect(() => {ms932Encoder.encode("\u5DAA")}).toThrowError({name:"TypeError",message:"EncodingError U+5DAA"});
expect(() => {ms932Encoder.encode("\u5DAB")}).toThrowError({name:"TypeError",message:"EncodingError U+5DAB"});
expect([...ms932Encoder.encode("嶬")].join(",")).toBe("155,210"); // U+5DAC
expect(() => {ms932Encoder.encode("\u5DAD")}).toThrowError({name:"TypeError",message:"EncodingError U+5DAD"});
expect([...ms932Encoder.encode("嶮")].join(",")).toBe("155,211"); // U+5DAE
expect(() => {ms932Encoder.encode("\u5DAF")}).toThrowError({name:"TypeError",message:"EncodingError U+5DAF"});
expect(() => {ms932Encoder.encode("\u5DB0")}).toThrowError({name:"TypeError",message:"EncodingError U+5DB0"});
expect(() => {ms932Encoder.encode("\u5DB1")}).toThrowError({name:"TypeError",message:"EncodingError U+5DB1"});
expect(() => {ms932Encoder.encode("\u5DB2")}).toThrowError({name:"TypeError",message:"EncodingError U+5DB2"});
expect(() => {ms932Encoder.encode("\u5DB3")}).toThrowError({name:"TypeError",message:"EncodingError U+5DB3"});
expect(() => {ms932Encoder.encode("\u5DB4")}).toThrowError({name:"TypeError",message:"EncodingError U+5DB4"});
expect(() => {ms932Encoder.encode("\u5DB5")}).toThrowError({name:"TypeError",message:"EncodingError U+5DB5"});
expect(() => {ms932Encoder.encode("\u5DB6")}).toThrowError({name:"TypeError",message:"EncodingError U+5DB6"});
expect([...ms932Encoder.encode("嶷嶸嶹嶺")].join(",")).toBe("155,214,250,180,250,181,151,228"); // U+5DB7
expect(() => {ms932Encoder.encode("\u5DBB")}).toThrowError({name:"TypeError",message:"EncodingError U+5DBB"});
expect([...ms932Encoder.encode("嶼嶽")].join(",")).toBe("155,215,155,212"); // U+5DBC
expect(() => {ms932Encoder.encode("\u5DBE")}).toThrowError({name:"TypeError",message:"EncodingError U+5DBE"});
expect(() => {ms932Encoder.encode("\u5DBF")}).toThrowError({name:"TypeError",message:"EncodingError U+5DBF"});
expect(() => {ms932Encoder.encode("\u5DC0")}).toThrowError({name:"TypeError",message:"EncodingError U+5DC0"});
expect(() => {ms932Encoder.encode("\u5DC1")}).toThrowError({name:"TypeError",message:"EncodingError U+5DC1"});
expect(() => {ms932Encoder.encode("\u5DC2")}).toThrowError({name:"TypeError",message:"EncodingError U+5DC2"});
expect(() => {ms932Encoder.encode("\u5DC3")}).toThrowError({name:"TypeError",message:"EncodingError U+5DC3"});
expect(() => {ms932Encoder.encode("\u5DC4")}).toThrowError({name:"TypeError",message:"EncodingError U+5DC4"});
expect(() => {ms932Encoder.encode("\u5DC5")}).toThrowError({name:"TypeError",message:"EncodingError U+5DC5"});
expect(() => {ms932Encoder.encode("\u5DC6")}).toThrowError({name:"TypeError",message:"EncodingError U+5DC6"});
expect(() => {ms932Encoder.encode("\u5DC7")}).toThrowError({name:"TypeError",message:"EncodingError U+5DC7"});
expect(() => {ms932Encoder.encode("\u5DC8")}).toThrowError({name:"TypeError",message:"EncodingError U+5DC8"});
expect([...ms932Encoder.encode("巉")].join(",")).toBe("155,216"); // U+5DC9
expect(() => {ms932Encoder.encode("\u5DCA")}).toThrowError({name:"TypeError",message:"EncodingError U+5DCA"});
expect(() => {ms932Encoder.encode("\u5DCB")}).toThrowError({name:"TypeError",message:"EncodingError U+5DCB"});
expect([...ms932Encoder.encode("巌巍")].join(",")).toBe("138,222,155,217"); // U+5DCC
expect(() => {ms932Encoder.encode("\u5DCE")}).toThrowError({name:"TypeError",message:"EncodingError U+5DCE"});
expect(() => {ms932Encoder.encode("\u5DCF")}).toThrowError({name:"TypeError",message:"EncodingError U+5DCF"});
expect([...ms932Encoder.encode("巐")].join(",")).toBe("250,182"); // U+5DD0
expect(() => {ms932Encoder.encode("\u5DD1")}).toThrowError({name:"TypeError",message:"EncodingError U+5DD1"});
expect([...ms932Encoder.encode("巒巓")].join(",")).toBe("155,219,155,218"); // U+5DD2
expect(() => {ms932Encoder.encode("\u5DD4")}).toThrowError({name:"TypeError",message:"EncodingError U+5DD4"});
expect(() => {ms932Encoder.encode("\u5DD5")}).toThrowError({name:"TypeError",message:"EncodingError U+5DD5"});
expect([...ms932Encoder.encode("巖")].join(",")).toBe("155,220"); // U+5DD6
expect(() => {ms932Encoder.encode("\u5DD7")}).toThrowError({name:"TypeError",message:"EncodingError U+5DD7"});
expect(() => {ms932Encoder.encode("\u5DD8")}).toThrowError({name:"TypeError",message:"EncodingError U+5DD8"});
expect(() => {ms932Encoder.encode("\u5DD9")}).toThrowError({name:"TypeError",message:"EncodingError U+5DD9"});
expect(() => {ms932Encoder.encode("\u5DDA")}).toThrowError({name:"TypeError",message:"EncodingError U+5DDA"});
expect([...ms932Encoder.encode("巛")].join(",")).toBe("155,221"); // U+5DDB
expect(() => {ms932Encoder.encode("\u5DDC")}).toThrowError({name:"TypeError",message:"EncodingError U+5DDC"});
expect([...ms932Encoder.encode("川州")].join(",")).toBe("144,236,143,66"); // U+5DDD
expect(() => {ms932Encoder.encode("\u5DDF")}).toThrowError({name:"TypeError",message:"EncodingError U+5DDF"});
expect(() => {ms932Encoder.encode("\u5DE0")}).toThrowError({name:"TypeError",message:"EncodingError U+5DE0"});
expect([...ms932Encoder.encode("巡")].join(",")).toBe("143,132"); // U+5DE1
expect(() => {ms932Encoder.encode("\u5DE2")}).toThrowError({name:"TypeError",message:"EncodingError U+5DE2"});
expect([...ms932Encoder.encode("巣")].join(",")).toBe("145,131"); // U+5DE3
expect(() => {ms932Encoder.encode("\u5DE4")}).toThrowError({name:"TypeError",message:"EncodingError U+5DE4"});
expect([...ms932Encoder.encode("工左巧巨")].join(",")).toBe("141,72,141,182,141,73,139,144"); // U+5DE5
expect(() => {ms932Encoder.encode("\u5DE9")}).toThrowError({name:"TypeError",message:"EncodingError U+5DE9"});
expect(() => {ms932Encoder.encode("\u5DEA")}).toThrowError({name:"TypeError",message:"EncodingError U+5DEA"});
expect([...ms932Encoder.encode("巫")].join(",")).toBe("155,222"); // U+5DEB
expect(() => {ms932Encoder.encode("\u5DEC")}).toThrowError({name:"TypeError",message:"EncodingError U+5DEC"});
expect(() => {ms932Encoder.encode("\u5DED")}).toThrowError({name:"TypeError",message:"EncodingError U+5DED"});
expect([...ms932Encoder.encode("差")].join(",")).toBe("141,183"); // U+5DEE
expect(() => {ms932Encoder.encode("\u5DEF")}).toThrowError({name:"TypeError",message:"EncodingError U+5DEF"});
expect(() => {ms932Encoder.encode("\u5DF0")}).toThrowError({name:"TypeError",message:"EncodingError U+5DF0"});
expect([...ms932Encoder.encode("己已巳巴巵")].join(",")).toBe("140,200,155,223,150,164,148,98,155,224"); // U+5DF1
expect(() => {ms932Encoder.encode("\u5DF6")}).toThrowError({name:"TypeError",message:"EncodingError U+5DF6"});
expect([...ms932Encoder.encode("巷")].join(",")).toBe("141,74"); // U+5DF7
expect(() => {ms932Encoder.encode("\u5DF8")}).toThrowError({name:"TypeError",message:"EncodingError U+5DF8"});
expect(() => {ms932Encoder.encode("\u5DF9")}).toThrowError({name:"TypeError",message:"EncodingError U+5DF9"});
expect(() => {ms932Encoder.encode("\u5DFA")}).toThrowError({name:"TypeError",message:"EncodingError U+5DFA"});
expect([...ms932Encoder.encode("巻")].join(",")).toBe("138,170"); // U+5DFB
expect(() => {ms932Encoder.encode("\u5DFC")}).toThrowError({name:"TypeError",message:"EncodingError U+5DFC"});
expect([...ms932Encoder.encode("巽巾")].join(",")).toBe("146,70,139,208"); // U+5DFD
expect(() => {ms932Encoder.encode("\u5DFF")}).toThrowError({name:"TypeError",message:"EncodingError U+5DFF"});
expect(() => {ms932Encoder.encode("\u5E00")}).toThrowError({name:"TypeError",message:"EncodingError U+5E00"});
expect(() => {ms932Encoder.encode("\u5E01")}).toThrowError({name:"TypeError",message:"EncodingError U+5E01"});
expect([...ms932Encoder.encode("市布")].join(",")).toBe("142,115,149,122"); // U+5E02
expect(() => {ms932Encoder.encode("\u5E04")}).toThrowError({name:"TypeError",message:"EncodingError U+5E04"});
expect(() => {ms932Encoder.encode("\u5E05")}).toThrowError({name:"TypeError",message:"EncodingError U+5E05"});
expect([...ms932Encoder.encode("帆")].join(",")).toBe("148,191"); // U+5E06
expect(() => {ms932Encoder.encode("\u5E07")}).toThrowError({name:"TypeError",message:"EncodingError U+5E07"});
expect(() => {ms932Encoder.encode("\u5E08")}).toThrowError({name:"TypeError",message:"EncodingError U+5E08"});
expect(() => {ms932Encoder.encode("\u5E09")}).toThrowError({name:"TypeError",message:"EncodingError U+5E09"});
expect(() => {ms932Encoder.encode("\u5E0A")}).toThrowError({name:"TypeError",message:"EncodingError U+5E0A"});
expect([...ms932Encoder.encode("帋希")].join(",")).toBe("155,225,138,243"); // U+5E0B
expect(() => {ms932Encoder.encode("\u5E0D")}).toThrowError({name:"TypeError",message:"EncodingError U+5E0D"});
expect(() => {ms932Encoder.encode("\u5E0E")}).toThrowError({name:"TypeError",message:"EncodingError U+5E0E"});
expect(() => {ms932Encoder.encode("\u5E0F")}).toThrowError({name:"TypeError",message:"EncodingError U+5E0F"});
expect(() => {ms932Encoder.encode("\u5E10")}).toThrowError({name:"TypeError",message:"EncodingError U+5E10"});
expect([...ms932Encoder.encode("帑")].join(",")).toBe("155,228"); // U+5E11
expect(() => {ms932Encoder.encode("\u5E12")}).toThrowError({name:"TypeError",message:"EncodingError U+5E12"});
expect(() => {ms932Encoder.encode("\u5E13")}).toThrowError({name:"TypeError",message:"EncodingError U+5E13"});
expect(() => {ms932Encoder.encode("\u5E14")}).toThrowError({name:"TypeError",message:"EncodingError U+5E14"});
expect(() => {ms932Encoder.encode("\u5E15")}).toThrowError({name:"TypeError",message:"EncodingError U+5E15"});
expect([...ms932Encoder.encode("帖")].join(",")).toBe("146,159"); // U+5E16
expect(() => {ms932Encoder.encode("\u5E17")}).toThrowError({name:"TypeError",message:"EncodingError U+5E17"});
expect(() => {ms932Encoder.encode("\u5E18")}).toThrowError({name:"TypeError",message:"EncodingError U+5E18"});
expect([...ms932Encoder.encode("帙帚帛")].join(",")).toBe("155,227,155,226,155,229"); // U+5E19
expect(() => {ms932Encoder.encode("\u5E1C")}).toThrowError({name:"TypeError",message:"EncodingError U+5E1C"});
expect([...ms932Encoder.encode("帝")].join(",")).toBe("146,233"); // U+5E1D
expect(() => {ms932Encoder.encode("\u5E1E")}).toThrowError({name:"TypeError",message:"EncodingError U+5E1E"});
expect(() => {ms932Encoder.encode("\u5E1F")}).toThrowError({name:"TypeError",message:"EncodingError U+5E1F"});
expect(() => {ms932Encoder.encode("\u5E20")}).toThrowError({name:"TypeError",message:"EncodingError U+5E20"});
expect(() => {ms932Encoder.encode("\u5E21")}).toThrowError({name:"TypeError",message:"EncodingError U+5E21"});
expect(() => {ms932Encoder.encode("\u5E22")}).toThrowError({name:"TypeError",message:"EncodingError U+5E22"});
expect(() => {ms932Encoder.encode("\u5E23")}).toThrowError({name:"TypeError",message:"EncodingError U+5E23"});
expect(() => {ms932Encoder.encode("\u5E24")}).toThrowError({name:"TypeError",message:"EncodingError U+5E24"});
expect([...ms932Encoder.encode("帥")].join(",")).toBe("144,131"); // U+5E25
expect(() => {ms932Encoder.encode("\u5E26")}).toThrowError({name:"TypeError",message:"EncodingError U+5E26"});
expect(() => {ms932Encoder.encode("\u5E27")}).toThrowError({name:"TypeError",message:"EncodingError U+5E27"});
expect(() => {ms932Encoder.encode("\u5E28")}).toThrowError({name:"TypeError",message:"EncodingError U+5E28"});
expect(() => {ms932Encoder.encode("\u5E29")}).toThrowError({name:"TypeError",message:"EncodingError U+5E29"});
expect(() => {ms932Encoder.encode("\u5E2A")}).toThrowError({name:"TypeError",message:"EncodingError U+5E2A"});
expect([...ms932Encoder.encode("師")].join(",")).toBe("142,116"); // U+5E2B
expect(() => {ms932Encoder.encode("\u5E2C")}).toThrowError({name:"TypeError",message:"EncodingError U+5E2C"});
expect([...ms932Encoder.encode("席")].join(",")).toBe("144,200"); // U+5E2D
expect(() => {ms932Encoder.encode("\u5E2E")}).toThrowError({name:"TypeError",message:"EncodingError U+5E2E"});
expect([...ms932Encoder.encode("帯帰")].join(",")).toBe("145,209,139,65"); // U+5E2F
expect(() => {ms932Encoder.encode("\u5E31")}).toThrowError({name:"TypeError",message:"EncodingError U+5E31"});
expect(() => {ms932Encoder.encode("\u5E32")}).toThrowError({name:"TypeError",message:"EncodingError U+5E32"});
expect([...ms932Encoder.encode("帳")].join(",")).toBe("146,160"); // U+5E33
expect(() => {ms932Encoder.encode("\u5E34")}).toThrowError({name:"TypeError",message:"EncodingError U+5E34"});
expect(() => {ms932Encoder.encode("\u5E35")}).toThrowError({name:"TypeError",message:"EncodingError U+5E35"});
expect([...ms932Encoder.encode("帶帷常")].join(",")).toBe("155,230,155,231,143,237"); // U+5E36
expect(() => {ms932Encoder.encode("\u5E39")}).toThrowError({name:"TypeError",message:"EncodingError U+5E39"});
expect(() => {ms932Encoder.encode("\u5E3A")}).toThrowError({name:"TypeError",message:"EncodingError U+5E3A"});
expect(() => {ms932Encoder.encode("\u5E3B")}).toThrowError({name:"TypeError",message:"EncodingError U+5E3B"});
expect(() => {ms932Encoder.encode("\u5E3C")}).toThrowError({name:"TypeError",message:"EncodingError U+5E3C"});
expect([...ms932Encoder.encode("帽")].join(",")).toBe("150,88"); // U+5E3D
expect(() => {ms932Encoder.encode("\u5E3E")}).toThrowError({name:"TypeError",message:"EncodingError U+5E3E"});
expect(() => {ms932Encoder.encode("\u5E3F")}).toThrowError({name:"TypeError",message:"EncodingError U+5E3F"});
expect([...ms932Encoder.encode("幀")].join(",")).toBe("155,234"); // U+5E40
expect(() => {ms932Encoder.encode("\u5E41")}).toThrowError({name:"TypeError",message:"EncodingError U+5E41"});
expect(() => {ms932Encoder.encode("\u5E42")}).toThrowError({name:"TypeError",message:"EncodingError U+5E42"});
expect([...ms932Encoder.encode("幃幄幅")].join(",")).toBe("155,233,155,232,149,157"); // U+5E43
expect(() => {ms932Encoder.encode("\u5E46")}).toThrowError({name:"TypeError",message:"EncodingError U+5E46"});
expect([...ms932Encoder.encode("幇")].join(",")).toBe("155,241"); // U+5E47
expect(() => {ms932Encoder.encode("\u5E48")}).toThrowError({name:"TypeError",message:"EncodingError U+5E48"});
expect(() => {ms932Encoder.encode("\u5E49")}).toThrowError({name:"TypeError",message:"EncodingError U+5E49"});
expect(() => {ms932Encoder.encode("\u5E4A")}).toThrowError({name:"TypeError",message:"EncodingError U+5E4A"});
expect(() => {ms932Encoder.encode("\u5E4B")}).toThrowError({name:"TypeError",message:"EncodingError U+5E4B"});
expect([...ms932Encoder.encode("幌")].join(",")).toBe("150,121"); // U+5E4C
expect(() => {ms932Encoder.encode("\u5E4D")}).toThrowError({name:"TypeError",message:"EncodingError U+5E4D"});
expect([...ms932Encoder.encode("幎")].join(",")).toBe("155,235"); // U+5E4E
expect(() => {ms932Encoder.encode("\u5E4F")}).toThrowError({name:"TypeError",message:"EncodingError U+5E4F"});
expect(() => {ms932Encoder.encode("\u5E50")}).toThrowError({name:"TypeError",message:"EncodingError U+5E50"});
expect(() => {ms932Encoder.encode("\u5E51")}).toThrowError({name:"TypeError",message:"EncodingError U+5E51"});
expect(() => {ms932Encoder.encode("\u5E52")}).toThrowError({name:"TypeError",message:"EncodingError U+5E52"});
expect(() => {ms932Encoder.encode("\u5E53")}).toThrowError({name:"TypeError",message:"EncodingError U+5E53"});
expect([...ms932Encoder.encode("幔幕")].join(",")).toBe("155,237,150,139"); // U+5E54
expect(() => {ms932Encoder.encode("\u5E56")}).toThrowError({name:"TypeError",message:"EncodingError U+5E56"});
expect([...ms932Encoder.encode("幗")].join(",")).toBe("155,236"); // U+5E57
expect(() => {ms932Encoder.encode("\u5E58")}).toThrowError({name:"TypeError",message:"EncodingError U+5E58"});
expect(() => {ms932Encoder.encode("\u5E59")}).toThrowError({name:"TypeError",message:"EncodingError U+5E59"});
expect(() => {ms932Encoder.encode("\u5E5A")}).toThrowError({name:"TypeError",message:"EncodingError U+5E5A"});
expect(() => {ms932Encoder.encode("\u5E5B")}).toThrowError({name:"TypeError",message:"EncodingError U+5E5B"});
expect(() => {ms932Encoder.encode("\u5E5C")}).toThrowError({name:"TypeError",message:"EncodingError U+5E5C"});
expect(() => {ms932Encoder.encode("\u5E5D")}).toThrowError({name:"TypeError",message:"EncodingError U+5E5D"});
expect(() => {ms932Encoder.encode("\u5E5E")}).toThrowError({name:"TypeError",message:"EncodingError U+5E5E"});
expect([...ms932Encoder.encode("幟")].join(",")).toBe("155,238"); // U+5E5F
expect(() => {ms932Encoder.encode("\u5E60")}).toThrowError({name:"TypeError",message:"EncodingError U+5E60"});
expect([...ms932Encoder.encode("幡幢幣幤")].join(",")).toBe("148,166,155,239,149,188,155,240"); // U+5E61
expect(() => {ms932Encoder.encode("\u5E65")}).toThrowError({name:"TypeError",message:"EncodingError U+5E65"});
expect(() => {ms932Encoder.encode("\u5E66")}).toThrowError({name:"TypeError",message:"EncodingError U+5E66"});
expect(() => {ms932Encoder.encode("\u5E67")}).toThrowError({name:"TypeError",message:"EncodingError U+5E67"});
expect(() => {ms932Encoder.encode("\u5E68")}).toThrowError({name:"TypeError",message:"EncodingError U+5E68"});
expect(() => {ms932Encoder.encode("\u5E69")}).toThrowError({name:"TypeError",message:"EncodingError U+5E69"});
expect(() => {ms932Encoder.encode("\u5E6A")}).toThrowError({name:"TypeError",message:"EncodingError U+5E6A"});
expect(() => {ms932Encoder.encode("\u5E6B")}).toThrowError({name:"TypeError",message:"EncodingError U+5E6B"});
expect(() => {ms932Encoder.encode("\u5E6C")}).toThrowError({name:"TypeError",message:"EncodingError U+5E6C"});
expect(() => {ms932Encoder.encode("\u5E6D")}).toThrowError({name:"TypeError",message:"EncodingError U+5E6D"});
expect(() => {ms932Encoder.encode("\u5E6E")}).toThrowError({name:"TypeError",message:"EncodingError U+5E6E"});
expect(() => {ms932Encoder.encode("\u5E6F")}).toThrowError({name:"TypeError",message:"EncodingError U+5E6F"});
expect(() => {ms932Encoder.encode("\u5E70")}).toThrowError({name:"TypeError",message:"EncodingError U+5E70"});
expect(() => {ms932Encoder.encode("\u5E71")}).toThrowError({name:"TypeError",message:"EncodingError U+5E71"});
expect([...ms932Encoder.encode("干平年幵并")].join(",")).toBe("138,177,149,189,148,78,155,242,155,243"); // U+5E72
expect(() => {ms932Encoder.encode("\u5E77")}).toThrowError({name:"TypeError",message:"EncodingError U+5E77"});
expect([...ms932Encoder.encode("幸幹幺幻幼幽幾广")].join(",")).toBe("141,75,138,178,155,244,140,182,151,99,151,72,138,244,155,246"); // U+5E78
expect(() => {ms932Encoder.encode("\u5E80")}).toThrowError({name:"TypeError",message:"EncodingError U+5E80"});
expect([...ms932Encoder.encode("庁")].join(",")).toBe("146,161"); // U+5E81
expect(() => {ms932Encoder.encode("\u5E82")}).toThrowError({name:"TypeError",message:"EncodingError U+5E82"});
expect([...ms932Encoder.encode("広庄")].join(",")).toBe("141,76,143,175"); // U+5E83
expect(() => {ms932Encoder.encode("\u5E85")}).toThrowError({name:"TypeError",message:"EncodingError U+5E85"});
expect(() => {ms932Encoder.encode("\u5E86")}).toThrowError({name:"TypeError",message:"EncodingError U+5E86"});
expect([...ms932Encoder.encode("庇")].join(",")).toBe("148,221"); // U+5E87
expect(() => {ms932Encoder.encode("\u5E88")}).toThrowError({name:"TypeError",message:"EncodingError U+5E88"});
expect(() => {ms932Encoder.encode("\u5E89")}).toThrowError({name:"TypeError",message:"EncodingError U+5E89"});
expect([...ms932Encoder.encode("床")].join(",")).toBe("143,176"); // U+5E8A
expect(() => {ms932Encoder.encode("\u5E8B")}).toThrowError({name:"TypeError",message:"EncodingError U+5E8B"});
expect(() => {ms932Encoder.encode("\u5E8C")}).toThrowError({name:"TypeError",message:"EncodingError U+5E8C"});
expect(() => {ms932Encoder.encode("\u5E8D")}).toThrowError({name:"TypeError",message:"EncodingError U+5E8D"});
expect(() => {ms932Encoder.encode("\u5E8E")}).toThrowError({name:"TypeError",message:"EncodingError U+5E8E"});
expect([...ms932Encoder.encode("序")].join(",")).toBe("143,152"); // U+5E8F
expect(() => {ms932Encoder.encode("\u5E90")}).toThrowError({name:"TypeError",message:"EncodingError U+5E90"});
expect(() => {ms932Encoder.encode("\u5E91")}).toThrowError({name:"TypeError",message:"EncodingError U+5E91"});
expect(() => {ms932Encoder.encode("\u5E92")}).toThrowError({name:"TypeError",message:"EncodingError U+5E92"});
expect(() => {ms932Encoder.encode("\u5E93")}).toThrowError({name:"TypeError",message:"EncodingError U+5E93"});
expect(() => {ms932Encoder.encode("\u5E94")}).toThrowError({name:"TypeError",message:"EncodingError U+5E94"});
expect([...ms932Encoder.encode("底庖店")].join(",")).toBe("146,234,149,247,147,88"); // U+5E95
expect(() => {ms932Encoder.encode("\u5E98")}).toThrowError({name:"TypeError",message:"EncodingError U+5E98"});
expect(() => {ms932Encoder.encode("\u5E99")}).toThrowError({name:"TypeError",message:"EncodingError U+5E99"});
expect([...ms932Encoder.encode("庚")].join(",")).toBe("141,77"); // U+5E9A
expect(() => {ms932Encoder.encode("\u5E9B")}).toThrowError({name:"TypeError",message:"EncodingError U+5E9B"});
expect([...ms932Encoder.encode("府")].join(",")).toBe("149,123"); // U+5E9C
expect(() => {ms932Encoder.encode("\u5E9D")}).toThrowError({name:"TypeError",message:"EncodingError U+5E9D"});
expect(() => {ms932Encoder.encode("\u5E9E")}).toThrowError({name:"TypeError",message:"EncodingError U+5E9E"});
expect(() => {ms932Encoder.encode("\u5E9F")}).toThrowError({name:"TypeError",message:"EncodingError U+5E9F"});
expect([...ms932Encoder.encode("庠")].join(",")).toBe("155,247"); // U+5EA0
expect(() => {ms932Encoder.encode("\u5EA1")}).toThrowError({name:"TypeError",message:"EncodingError U+5EA1"});
expect(() => {ms932Encoder.encode("\u5EA2")}).toThrowError({name:"TypeError",message:"EncodingError U+5EA2"});
expect(() => {ms932Encoder.encode("\u5EA3")}).toThrowError({name:"TypeError",message:"EncodingError U+5EA3"});
expect(() => {ms932Encoder.encode("\u5EA4")}).toThrowError({name:"TypeError",message:"EncodingError U+5EA4"});
expect(() => {ms932Encoder.encode("\u5EA5")}).toThrowError({name:"TypeError",message:"EncodingError U+5EA5"});
expect([...ms932Encoder.encode("度座")].join(",")).toBe("147,120,141,192"); // U+5EA6
expect(() => {ms932Encoder.encode("\u5EA8")}).toThrowError({name:"TypeError",message:"EncodingError U+5EA8"});
expect(() => {ms932Encoder.encode("\u5EA9")}).toThrowError({name:"TypeError",message:"EncodingError U+5EA9"});
expect(() => {ms932Encoder.encode("\u5EAA")}).toThrowError({name:"TypeError",message:"EncodingError U+5EAA"});
expect([...ms932Encoder.encode("庫")].join(",")).toBe("140,201"); // U+5EAB
expect(() => {ms932Encoder.encode("\u5EAC")}).toThrowError({name:"TypeError",message:"EncodingError U+5EAC"});
expect([...ms932Encoder.encode("庭")].join(",")).toBe("146,235"); // U+5EAD
expect(() => {ms932Encoder.encode("\u5EAE")}).toThrowError({name:"TypeError",message:"EncodingError U+5EAE"});
expect(() => {ms932Encoder.encode("\u5EAF")}).toThrowError({name:"TypeError",message:"EncodingError U+5EAF"});
expect(() => {ms932Encoder.encode("\u5EB0")}).toThrowError({name:"TypeError",message:"EncodingError U+5EB0"});
expect(() => {ms932Encoder.encode("\u5EB1")}).toThrowError({name:"TypeError",message:"EncodingError U+5EB1"});
expect(() => {ms932Encoder.encode("\u5EB2")}).toThrowError({name:"TypeError",message:"EncodingError U+5EB2"});
expect(() => {ms932Encoder.encode("\u5EB3")}).toThrowError({name:"TypeError",message:"EncodingError U+5EB3"});
expect(() => {ms932Encoder.encode("\u5EB4")}).toThrowError({name:"TypeError",message:"EncodingError U+5EB4"});
expect([...ms932Encoder.encode("庵庶康庸")].join(",")).toBe("136,193,143,142,141,78,151,102"); // U+5EB5
expect(() => {ms932Encoder.encode("\u5EB9")}).toThrowError({name:"TypeError",message:"EncodingError U+5EB9"});
expect(() => {ms932Encoder.encode("\u5EBA")}).toThrowError({name:"TypeError",message:"EncodingError U+5EBA"});
expect(() => {ms932Encoder.encode("\u5EBB")}).toThrowError({name:"TypeError",message:"EncodingError U+5EBB"});
expect(() => {ms932Encoder.encode("\u5EBC")}).toThrowError({name:"TypeError",message:"EncodingError U+5EBC"});
expect(() => {ms932Encoder.encode("\u5EBD")}).toThrowError({name:"TypeError",message:"EncodingError U+5EBD"});
expect(() => {ms932Encoder.encode("\u5EBE")}).toThrowError({name:"TypeError",message:"EncodingError U+5EBE"});
expect(() => {ms932Encoder.encode("\u5EBF")}).toThrowError({name:"TypeError",message:"EncodingError U+5EBF"});
expect(() => {ms932Encoder.encode("\u5EC0")}).toThrowError({name:"TypeError",message:"EncodingError U+5EC0"});
expect([...ms932Encoder.encode("廁廂廃")].join(",")).toBe("155,248,155,249,148,112"); // U+5EC1
expect(() => {ms932Encoder.encode("\u5EC4")}).toThrowError({name:"TypeError",message:"EncodingError U+5EC4"});
expect(() => {ms932Encoder.encode("\u5EC5")}).toThrowError({name:"TypeError",message:"EncodingError U+5EC5"});
expect(() => {ms932Encoder.encode("\u5EC6")}).toThrowError({name:"TypeError",message:"EncodingError U+5EC6"});
expect(() => {ms932Encoder.encode("\u5EC7")}).toThrowError({name:"TypeError",message:"EncodingError U+5EC7"});
expect([...ms932Encoder.encode("廈廉廊")].join(",")).toBe("155,250,151,245,152,76"); // U+5EC8
expect(() => {ms932Encoder.encode("\u5ECB")}).toThrowError({name:"TypeError",message:"EncodingError U+5ECB"});
expect(() => {ms932Encoder.encode("\u5ECC")}).toThrowError({name:"TypeError",message:"EncodingError U+5ECC"});
expect(() => {ms932Encoder.encode("\u5ECD")}).toThrowError({name:"TypeError",message:"EncodingError U+5ECD"});
expect(() => {ms932Encoder.encode("\u5ECE")}).toThrowError({name:"TypeError",message:"EncodingError U+5ECE"});
expect([...ms932Encoder.encode("廏廐")].join(",")).toBe("155,252,155,251"); // U+5ECF
expect(() => {ms932Encoder.encode("\u5ED1")}).toThrowError({name:"TypeError",message:"EncodingError U+5ED1"});
expect(() => {ms932Encoder.encode("\u5ED2")}).toThrowError({name:"TypeError",message:"EncodingError U+5ED2"});
expect([...ms932Encoder.encode("廓")].join(",")).toBe("138,102"); // U+5ED3
expect(() => {ms932Encoder.encode("\u5ED4")}).toThrowError({name:"TypeError",message:"EncodingError U+5ED4"});
expect(() => {ms932Encoder.encode("\u5ED5")}).toThrowError({name:"TypeError",message:"EncodingError U+5ED5"});
expect([...ms932Encoder.encode("廖")].join(",")).toBe("156,64"); // U+5ED6
expect(() => {ms932Encoder.encode("\u5ED7")}).toThrowError({name:"TypeError",message:"EncodingError U+5ED7"});
expect(() => {ms932Encoder.encode("\u5ED8")}).toThrowError({name:"TypeError",message:"EncodingError U+5ED8"});
expect(() => {ms932Encoder.encode("\u5ED9")}).toThrowError({name:"TypeError",message:"EncodingError U+5ED9"});
expect([...ms932Encoder.encode("廚廛")].join(",")).toBe("156,67,156,68"); // U+5EDA
expect(() => {ms932Encoder.encode("\u5EDC")}).toThrowError({name:"TypeError",message:"EncodingError U+5EDC"});
expect([...ms932Encoder.encode("廝")].join(",")).toBe("156,66"); // U+5EDD
expect(() => {ms932Encoder.encode("\u5EDE")}).toThrowError({name:"TypeError",message:"EncodingError U+5EDE"});
expect([...ms932Encoder.encode("廟廠廡廢廣")].join(",")).toBe("149,95,143,177,156,70,156,69,156,65"); // U+5EDF
expect(() => {ms932Encoder.encode("\u5EE4")}).toThrowError({name:"TypeError",message:"EncodingError U+5EE4"});
expect(() => {ms932Encoder.encode("\u5EE5")}).toThrowError({name:"TypeError",message:"EncodingError U+5EE5"});
expect(() => {ms932Encoder.encode("\u5EE6")}).toThrowError({name:"TypeError",message:"EncodingError U+5EE6"});
expect(() => {ms932Encoder.encode("\u5EE7")}).toThrowError({name:"TypeError",message:"EncodingError U+5EE7"});
expect([...ms932Encoder.encode("廨廩")].join(",")).toBe("156,71,156,72"); // U+5EE8
expect(() => {ms932Encoder.encode("\u5EEA")}).toThrowError({name:"TypeError",message:"EncodingError U+5EEA"});
expect(() => {ms932Encoder.encode("\u5EEB")}).toThrowError({name:"TypeError",message:"EncodingError U+5EEB"});
expect([...ms932Encoder.encode("廬")].join(",")).toBe("156,73"); // U+5EEC
expect(() => {ms932Encoder.encode("\u5EED")}).toThrowError({name:"TypeError",message:"EncodingError U+5EED"});
expect(() => {ms932Encoder.encode("\u5EEE")}).toThrowError({name:"TypeError",message:"EncodingError U+5EEE"});
expect(() => {ms932Encoder.encode("\u5EEF")}).toThrowError({name:"TypeError",message:"EncodingError U+5EEF"});
expect([...ms932Encoder.encode("廰廱")].join(",")).toBe("156,76,156,74"); // U+5EF0
expect(() => {ms932Encoder.encode("\u5EF2")}).toThrowError({name:"TypeError",message:"EncodingError U+5EF2"});
expect([...ms932Encoder.encode("廳廴")].join(",")).toBe("156,75,156,77"); // U+5EF3
expect(() => {ms932Encoder.encode("\u5EF5")}).toThrowError({name:"TypeError",message:"EncodingError U+5EF5"});
expect([...ms932Encoder.encode("延廷廸")].join(",")).toBe("137,132,146,236,156,78"); // U+5EF6
expect(() => {ms932Encoder.encode("\u5EF9")}).toThrowError({name:"TypeError",message:"EncodingError U+5EF9"});
expect([...ms932Encoder.encode("建廻廼")].join(",")).toBe("140,154,137,244,148,85"); // U+5EFA
expect(() => {ms932Encoder.encode("\u5EFD")}).toThrowError({name:"TypeError",message:"EncodingError U+5EFD"});
expect([...ms932Encoder.encode("廾廿")].join(",")).toBe("156,79,147,249"); // U+5EFE
expect(() => {ms932Encoder.encode("\u5F00")}).toThrowError({name:"TypeError",message:"EncodingError U+5F00"});
expect([...ms932Encoder.encode("弁")].join(",")).toBe("149,217"); // U+5F01
expect(() => {ms932Encoder.encode("\u5F02")}).toThrowError({name:"TypeError",message:"EncodingError U+5F02"});
expect([...ms932Encoder.encode("弃弄")].join(",")).toBe("156,80,152,77"); // U+5F03
expect(() => {ms932Encoder.encode("\u5F05")}).toThrowError({name:"TypeError",message:"EncodingError U+5F05"});
expect(() => {ms932Encoder.encode("\u5F06")}).toThrowError({name:"TypeError",message:"EncodingError U+5F06"});
expect(() => {ms932Encoder.encode("\u5F07")}).toThrowError({name:"TypeError",message:"EncodingError U+5F07"});
expect(() => {ms932Encoder.encode("\u5F08")}).toThrowError({name:"TypeError",message:"EncodingError U+5F08"});
expect([...ms932Encoder.encode("弉弊弋弌弍")].join(",")).toBe("156,81,149,190,156,84,152,159,152,175"); // U+5F09
expect(() => {ms932Encoder.encode("\u5F0E")}).toThrowError({name:"TypeError",message:"EncodingError U+5F0E"});
expect([...ms932Encoder.encode("式弐弑")].join(",")).toBe("142,174,147,243,156,85"); // U+5F0F
expect(() => {ms932Encoder.encode("\u5F12")}).toThrowError({name:"TypeError",message:"EncodingError U+5F12"});
expect([...ms932Encoder.encode("弓弔引弖弗弘")].join(",")).toBe("139,124,146,162,136,248,156,86,149,164,141,79"); // U+5F13
expect(() => {ms932Encoder.encode("\u5F19")}).toThrowError({name:"TypeError",message:"EncodingError U+5F19"});
expect(() => {ms932Encoder.encode("\u5F1A")}).toThrowError({name:"TypeError",message:"EncodingError U+5F1A"});
expect([...ms932Encoder.encode("弛")].join(",")).toBe("146,111"); // U+5F1B
expect(() => {ms932Encoder.encode("\u5F1C")}).toThrowError({name:"TypeError",message:"EncodingError U+5F1C"});
expect(() => {ms932Encoder.encode("\u5F1D")}).toThrowError({name:"TypeError",message:"EncodingError U+5F1D"});
expect(() => {ms932Encoder.encode("\u5F1E")}).toThrowError({name:"TypeError",message:"EncodingError U+5F1E"});
expect([...ms932Encoder.encode("弟")].join(",")).toBe("146,237"); // U+5F1F
expect(() => {ms932Encoder.encode("\u5F20")}).toThrowError({name:"TypeError",message:"EncodingError U+5F20"});
expect([...ms932Encoder.encode("弡")].join(",")).toBe("250,183"); // U+5F21
expect(() => {ms932Encoder.encode("\u5F22")}).toThrowError({name:"TypeError",message:"EncodingError U+5F22"});
expect(() => {ms932Encoder.encode("\u5F23")}).toThrowError({name:"TypeError",message:"EncodingError U+5F23"});
expect(() => {ms932Encoder.encode("\u5F24")}).toThrowError({name:"TypeError",message:"EncodingError U+5F24"});
expect([...ms932Encoder.encode("弥弦弧")].join(",")).toBe("150,237,140,183,140,202"); // U+5F25
expect(() => {ms932Encoder.encode("\u5F28")}).toThrowError({name:"TypeError",message:"EncodingError U+5F28"});
expect([...ms932Encoder.encode("弩")].join(",")).toBe("156,87"); // U+5F29
expect(() => {ms932Encoder.encode("\u5F2A")}).toThrowError({name:"TypeError",message:"EncodingError U+5F2A"});
expect(() => {ms932Encoder.encode("\u5F2B")}).toThrowError({name:"TypeError",message:"EncodingError U+5F2B"});
expect(() => {ms932Encoder.encode("\u5F2C")}).toThrowError({name:"TypeError",message:"EncodingError U+5F2C"});
expect([...ms932Encoder.encode("弭")].join(",")).toBe("156,88"); // U+5F2D
expect(() => {ms932Encoder.encode("\u5F2E")}).toThrowError({name:"TypeError",message:"EncodingError U+5F2E"});
expect([...ms932Encoder.encode("弯")].join(",")).toBe("156,94"); // U+5F2F
expect(() => {ms932Encoder.encode("\u5F30")}).toThrowError({name:"TypeError",message:"EncodingError U+5F30"});
expect([...ms932Encoder.encode("弱")].join(",")).toBe("142,227"); // U+5F31
expect(() => {ms932Encoder.encode("\u5F32")}).toThrowError({name:"TypeError",message:"EncodingError U+5F32"});
expect(() => {ms932Encoder.encode("\u5F33")}).toThrowError({name:"TypeError",message:"EncodingError U+5F33"});
expect([...ms932Encoder.encode("弴張")].join(",")).toBe("250,184,146,163"); // U+5F34
expect(() => {ms932Encoder.encode("\u5F36")}).toThrowError({name:"TypeError",message:"EncodingError U+5F36"});
expect([...ms932Encoder.encode("強弸")].join(",")).toBe("139,173,156,89"); // U+5F37
expect(() => {ms932Encoder.encode("\u5F39")}).toThrowError({name:"TypeError",message:"EncodingError U+5F39"});
expect(() => {ms932Encoder.encode("\u5F3A")}).toThrowError({name:"TypeError",message:"EncodingError U+5F3A"});
expect(() => {ms932Encoder.encode("\u5F3B")}).toThrowError({name:"TypeError",message:"EncodingError U+5F3B"});
expect([...ms932Encoder.encode("弼")].join(",")).toBe("149,74"); // U+5F3C
expect(() => {ms932Encoder.encode("\u5F3D")}).toThrowError({name:"TypeError",message:"EncodingError U+5F3D"});
expect([...ms932Encoder.encode("弾")].join(",")).toBe("146,101"); // U+5F3E
expect(() => {ms932Encoder.encode("\u5F3F")}).toThrowError({name:"TypeError",message:"EncodingError U+5F3F"});
expect(() => {ms932Encoder.encode("\u5F40")}).toThrowError({name:"TypeError",message:"EncodingError U+5F40"});
expect([...ms932Encoder.encode("彁")].join(",")).toBe("156,90"); // U+5F41
expect(() => {ms932Encoder.encode("\u5F42")}).toThrowError({name:"TypeError",message:"EncodingError U+5F42"});
expect(() => {ms932Encoder.encode("\u5F43")}).toThrowError({name:"TypeError",message:"EncodingError U+5F43"});
expect(() => {ms932Encoder.encode("\u5F44")}).toThrowError({name:"TypeError",message:"EncodingError U+5F44"});
expect([...ms932Encoder.encode("彅")].join(",")).toBe("250,103"); // U+5F45
expect(() => {ms932Encoder.encode("\u5F46")}).toThrowError({name:"TypeError",message:"EncodingError U+5F46"});
expect(() => {ms932Encoder.encode("\u5F47")}).toThrowError({name:"TypeError",message:"EncodingError U+5F47"});
expect([...ms932Encoder.encode("彈")].join(",")).toBe("156,91"); // U+5F48
expect(() => {ms932Encoder.encode("\u5F49")}).toThrowError({name:"TypeError",message:"EncodingError U+5F49"});
expect([...ms932Encoder.encode("彊")].join(",")).toBe("139,174"); // U+5F4A
expect(() => {ms932Encoder.encode("\u5F4B")}).toThrowError({name:"TypeError",message:"EncodingError U+5F4B"});
expect([...ms932Encoder.encode("彌")].join(",")).toBe("156,92"); // U+5F4C
expect(() => {ms932Encoder.encode("\u5F4D")}).toThrowError({name:"TypeError",message:"EncodingError U+5F4D"});
expect([...ms932Encoder.encode("彎")].join(",")).toBe("156,93"); // U+5F4E
expect(() => {ms932Encoder.encode("\u5F4F")}).toThrowError({name:"TypeError",message:"EncodingError U+5F4F"});
expect(() => {ms932Encoder.encode("\u5F50")}).toThrowError({name:"TypeError",message:"EncodingError U+5F50"});
expect([...ms932Encoder.encode("彑")].join(",")).toBe("156,95"); // U+5F51
expect(() => {ms932Encoder.encode("\u5F52")}).toThrowError({name:"TypeError",message:"EncodingError U+5F52"});
expect([...ms932Encoder.encode("当")].join(",")).toBe("147,150"); // U+5F53
expect(() => {ms932Encoder.encode("\u5F54")}).toThrowError({name:"TypeError",message:"EncodingError U+5F54"});
expect(() => {ms932Encoder.encode("\u5F55")}).toThrowError({name:"TypeError",message:"EncodingError U+5F55"});
expect([...ms932Encoder.encode("彖彗")].join(",")).toBe("156,96,156,97"); // U+5F56
expect(() => {ms932Encoder.encode("\u5F58")}).toThrowError({name:"TypeError",message:"EncodingError U+5F58"});
expect([...ms932Encoder.encode("彙")].join(",")).toBe("156,98"); // U+5F59
expect(() => {ms932Encoder.encode("\u5F5A")}).toThrowError({name:"TypeError",message:"EncodingError U+5F5A"});
expect(() => {ms932Encoder.encode("\u5F5B")}).toThrowError({name:"TypeError",message:"EncodingError U+5F5B"});
expect([...ms932Encoder.encode("彜彝")].join(",")).toBe("156,83,156,82"); // U+5F5C
expect(() => {ms932Encoder.encode("\u5F5E")}).toThrowError({name:"TypeError",message:"EncodingError U+5F5E"});
expect(() => {ms932Encoder.encode("\u5F5F")}).toThrowError({name:"TypeError",message:"EncodingError U+5F5F"});
expect(() => {ms932Encoder.encode("\u5F60")}).toThrowError({name:"TypeError",message:"EncodingError U+5F60"});
expect([...ms932Encoder.encode("彡形")].join(",")).toBe("156,99,140,96"); // U+5F61
expect(() => {ms932Encoder.encode("\u5F63")}).toThrowError({name:"TypeError",message:"EncodingError U+5F63"});
expect(() => {ms932Encoder.encode("\u5F64")}).toThrowError({name:"TypeError",message:"EncodingError U+5F64"});
expect(() => {ms932Encoder.encode("\u5F65")}).toThrowError({name:"TypeError",message:"EncodingError U+5F65"});
expect([...ms932Encoder.encode("彦彧")].join(",")).toBe("149,70,250,185"); // U+5F66
expect(() => {ms932Encoder.encode("\u5F68")}).toThrowError({name:"TypeError",message:"EncodingError U+5F68"});
expect([...ms932Encoder.encode("彩彪彫彬彭")].join(",")).toBe("141,202,149,86,146,164,149,106,156,100"); // U+5F69
expect(() => {ms932Encoder.encode("\u5F6E")}).toThrowError({name:"TypeError",message:"EncodingError U+5F6E"});
expect(() => {ms932Encoder.encode("\u5F6F")}).toThrowError({name:"TypeError",message:"EncodingError U+5F6F"});
expect([...ms932Encoder.encode("彰影")].join(",")).toBe("143,178,137,101"); // U+5F70
expect(() => {ms932Encoder.encode("\u5F72")}).toThrowError({name:"TypeError",message:"EncodingError U+5F72"});
expect([...ms932Encoder.encode("彳")].join(",")).toBe("156,101"); // U+5F73
expect(() => {ms932Encoder.encode("\u5F74")}).toThrowError({name:"TypeError",message:"EncodingError U+5F74"});
expect(() => {ms932Encoder.encode("\u5F75")}).toThrowError({name:"TypeError",message:"EncodingError U+5F75"});
expect(() => {ms932Encoder.encode("\u5F76")}).toThrowError({name:"TypeError",message:"EncodingError U+5F76"});
expect([...ms932Encoder.encode("彷")].join(",")).toBe("156,102"); // U+5F77
expect(() => {ms932Encoder.encode("\u5F78")}).toThrowError({name:"TypeError",message:"EncodingError U+5F78"});
expect([...ms932Encoder.encode("役")].join(",")).toBe("150,240"); // U+5F79
expect(() => {ms932Encoder.encode("\u5F7A")}).toThrowError({name:"TypeError",message:"EncodingError U+5F7A"});
expect(() => {ms932Encoder.encode("\u5F7B")}).toThrowError({name:"TypeError",message:"EncodingError U+5F7B"});
expect([...ms932Encoder.encode("彼")].join(",")).toBe("148,222"); // U+5F7C
expect(() => {ms932Encoder.encode("\u5F7D")}).toThrowError({name:"TypeError",message:"EncodingError U+5F7D"});
expect(() => {ms932Encoder.encode("\u5F7E")}).toThrowError({name:"TypeError",message:"EncodingError U+5F7E"});
expect([...ms932Encoder.encode("彿往征徂徃径待")].join(",")).toBe("156,105,137,157,144,170,156,104,156,103,140,97,145,210"); // U+5F7F
expect(() => {ms932Encoder.encode("\u5F86")}).toThrowError({name:"TypeError",message:"EncodingError U+5F86"});
expect([...ms932Encoder.encode("徇很")].join(",")).toBe("156,109,156,107"); // U+5F87
expect(() => {ms932Encoder.encode("\u5F89")}).toThrowError({name:"TypeError",message:"EncodingError U+5F89"});
expect([...ms932Encoder.encode("徊律後")].join(",")).toBe("156,106,151,165,140,227"); // U+5F8A
expect(() => {ms932Encoder.encode("\u5F8D")}).toThrowError({name:"TypeError",message:"EncodingError U+5F8D"});
expect(() => {ms932Encoder.encode("\u5F8E")}).toThrowError({name:"TypeError",message:"EncodingError U+5F8E"});
expect(() => {ms932Encoder.encode("\u5F8F")}).toThrowError({name:"TypeError",message:"EncodingError U+5F8F"});
expect([...ms932Encoder.encode("徐徑徒従")].join(",")).toBe("143,153,156,108,147,107,143,93"); // U+5F90
expect(() => {ms932Encoder.encode("\u5F94")}).toThrowError({name:"TypeError",message:"EncodingError U+5F94"});
expect(() => {ms932Encoder.encode("\u5F95")}).toThrowError({name:"TypeError",message:"EncodingError U+5F95"});
expect(() => {ms932Encoder.encode("\u5F96")}).toThrowError({name:"TypeError",message:"EncodingError U+5F96"});
expect([...ms932Encoder.encode("得徘徙")].join(",")).toBe("147,190,156,112,156,111"); // U+5F97
expect(() => {ms932Encoder.encode("\u5F9A")}).toThrowError({name:"TypeError",message:"EncodingError U+5F9A"});
expect(() => {ms932Encoder.encode("\u5F9B")}).toThrowError({name:"TypeError",message:"EncodingError U+5F9B"});
expect(() => {ms932Encoder.encode("\u5F9C")}).toThrowError({name:"TypeError",message:"EncodingError U+5F9C"});
expect(() => {ms932Encoder.encode("\u5F9D")}).toThrowError({name:"TypeError",message:"EncodingError U+5F9D"});
expect([...ms932Encoder.encode("從")].join(",")).toBe("156,110"); // U+5F9E
expect(() => {ms932Encoder.encode("\u5F9F")}).toThrowError({name:"TypeError",message:"EncodingError U+5F9F"});
expect([...ms932Encoder.encode("徠御")].join(",")).toBe("156,113,140,228"); // U+5FA0
expect(() => {ms932Encoder.encode("\u5FA2")}).toThrowError({name:"TypeError",message:"EncodingError U+5FA2"});
expect(() => {ms932Encoder.encode("\u5FA3")}).toThrowError({name:"TypeError",message:"EncodingError U+5FA3"});
expect(() => {ms932Encoder.encode("\u5FA4")}).toThrowError({name:"TypeError",message:"EncodingError U+5FA4"});
expect(() => {ms932Encoder.encode("\u5FA5")}).toThrowError({name:"TypeError",message:"EncodingError U+5FA5"});
expect(() => {ms932Encoder.encode("\u5FA6")}).toThrowError({name:"TypeError",message:"EncodingError U+5FA6"});
expect(() => {ms932Encoder.encode("\u5FA7")}).toThrowError({name:"TypeError",message:"EncodingError U+5FA7"});
expect([...ms932Encoder.encode("徨復循")].join(",")).toBe("156,114,149,156,143,122"); // U+5FA8
expect(() => {ms932Encoder.encode("\u5FAB")}).toThrowError({name:"TypeError",message:"EncodingError U+5FAB"});
expect(() => {ms932Encoder.encode("\u5FAC")}).toThrowError({name:"TypeError",message:"EncodingError U+5FAC"});
expect([...ms932Encoder.encode("徭微")].join(",")).toBe("156,115,148,247"); // U+5FAD
expect(() => {ms932Encoder.encode("\u5FAF")}).toThrowError({name:"TypeError",message:"EncodingError U+5FAF"});
expect(() => {ms932Encoder.encode("\u5FB0")}).toThrowError({name:"TypeError",message:"EncodingError U+5FB0"});
expect(() => {ms932Encoder.encode("\u5FB1")}).toThrowError({name:"TypeError",message:"EncodingError U+5FB1"});
expect(() => {ms932Encoder.encode("\u5FB2")}).toThrowError({name:"TypeError",message:"EncodingError U+5FB2"});
expect([...ms932Encoder.encode("徳徴")].join(",")).toBe("147,191,146,165"); // U+5FB3
expect(() => {ms932Encoder.encode("\u5FB5")}).toThrowError({name:"TypeError",message:"EncodingError U+5FB5"});
expect(() => {ms932Encoder.encode("\u5FB6")}).toThrowError({name:"TypeError",message:"EncodingError U+5FB6"});
expect([...ms932Encoder.encode("德")].join(",")).toBe("250,186"); // U+5FB7
expect(() => {ms932Encoder.encode("\u5FB8")}).toThrowError({name:"TypeError",message:"EncodingError U+5FB8"});
expect([...ms932Encoder.encode("徹")].join(",")).toBe("147,79"); // U+5FB9
expect(() => {ms932Encoder.encode("\u5FBA")}).toThrowError({name:"TypeError",message:"EncodingError U+5FBA"});
expect(() => {ms932Encoder.encode("\u5FBB")}).toThrowError({name:"TypeError",message:"EncodingError U+5FBB"});
expect([...ms932Encoder.encode("徼徽")].join(",")).toBe("156,116,139,74"); // U+5FBC
expect(() => {ms932Encoder.encode("\u5FBE")}).toThrowError({name:"TypeError",message:"EncodingError U+5FBE"});
expect(() => {ms932Encoder.encode("\u5FBF")}).toThrowError({name:"TypeError",message:"EncodingError U+5FBF"});
expect(() => {ms932Encoder.encode("\u5FC0")}).toThrowError({name:"TypeError",message:"EncodingError U+5FC0"});
expect(() => {ms932Encoder.encode("\u5FC1")}).toThrowError({name:"TypeError",message:"EncodingError U+5FC1"});
expect(() => {ms932Encoder.encode("\u5FC2")}).toThrowError({name:"TypeError",message:"EncodingError U+5FC2"});
expect([...ms932Encoder.encode("心")].join(",")).toBe("144,83"); // U+5FC3
expect(() => {ms932Encoder.encode("\u5FC4")}).toThrowError({name:"TypeError",message:"EncodingError U+5FC4"});
expect([...ms932Encoder.encode("必")].join(",")).toBe("149,75"); // U+5FC5
expect(() => {ms932Encoder.encode("\u5FC6")}).toThrowError({name:"TypeError",message:"EncodingError U+5FC6"});
expect(() => {ms932Encoder.encode("\u5FC7")}).toThrowError({name:"TypeError",message:"EncodingError U+5FC7"});
expect(() => {ms932Encoder.encode("\u5FC8")}).toThrowError({name:"TypeError",message:"EncodingError U+5FC8"});
expect(() => {ms932Encoder.encode("\u5FC9")}).toThrowError({name:"TypeError",message:"EncodingError U+5FC9"});
expect(() => {ms932Encoder.encode("\u5FCA")}).toThrowError({name:"TypeError",message:"EncodingError U+5FCA"});
expect(() => {ms932Encoder.encode("\u5FCB")}).toThrowError({name:"TypeError",message:"EncodingError U+5FCB"});
expect([...ms932Encoder.encode("忌忍")].join(",")).toBe("138,245,148,69"); // U+5FCC
expect(() => {ms932Encoder.encode("\u5FCE")}).toThrowError({name:"TypeError",message:"EncodingError U+5FCE"});
expect(() => {ms932Encoder.encode("\u5FCF")}).toThrowError({name:"TypeError",message:"EncodingError U+5FCF"});
expect(() => {ms932Encoder.encode("\u5FD0")}).toThrowError({name:"TypeError",message:"EncodingError U+5FD0"});
expect(() => {ms932Encoder.encode("\u5FD1")}).toThrowError({name:"TypeError",message:"EncodingError U+5FD1"});
expect(() => {ms932Encoder.encode("\u5FD2")}).toThrowError({name:"TypeError",message:"EncodingError U+5FD2"});
expect(() => {ms932Encoder.encode("\u5FD3")}).toThrowError({name:"TypeError",message:"EncodingError U+5FD3"});
expect(() => {ms932Encoder.encode("\u5FD4")}).toThrowError({name:"TypeError",message:"EncodingError U+5FD4"});
expect(() => {ms932Encoder.encode("\u5FD5")}).toThrowError({name:"TypeError",message:"EncodingError U+5FD5"});
expect([...ms932Encoder.encode("忖志忘忙")].join(",")).toBe("156,117,142,117,150,89,150,90"); // U+5FD6
expect(() => {ms932Encoder.encode("\u5FDA")}).toThrowError({name:"TypeError",message:"EncodingError U+5FDA"});
expect(() => {ms932Encoder.encode("\u5FDB")}).toThrowError({name:"TypeError",message:"EncodingError U+5FDB"});
expect([...ms932Encoder.encode("応忝忞")].join(",")).toBe("137,158,156,122,250,187"); // U+5FDC
expect(() => {ms932Encoder.encode("\u5FDF")}).toThrowError({name:"TypeError",message:"EncodingError U+5FDF"});
expect([...ms932Encoder.encode("忠")].join(",")).toBe("146,137"); // U+5FE0
expect(() => {ms932Encoder.encode("\u5FE1")}).toThrowError({name:"TypeError",message:"EncodingError U+5FE1"});
expect(() => {ms932Encoder.encode("\u5FE2")}).toThrowError({name:"TypeError",message:"EncodingError U+5FE2"});
expect(() => {ms932Encoder.encode("\u5FE3")}).toThrowError({name:"TypeError",message:"EncodingError U+5FE3"});
expect([...ms932Encoder.encode("忤")].join(",")).toBe("156,119"); // U+5FE4
expect(() => {ms932Encoder.encode("\u5FE5")}).toThrowError({name:"TypeError",message:"EncodingError U+5FE5"});
expect(() => {ms932Encoder.encode("\u5FE6")}).toThrowError({name:"TypeError",message:"EncodingError U+5FE6"});
expect(() => {ms932Encoder.encode("\u5FE7")}).toThrowError({name:"TypeError",message:"EncodingError U+5FE7"});
expect(() => {ms932Encoder.encode("\u5FE8")}).toThrowError({name:"TypeError",message:"EncodingError U+5FE8"});
expect(() => {ms932Encoder.encode("\u5FE9")}).toThrowError({name:"TypeError",message:"EncodingError U+5FE9"});
expect(() => {ms932Encoder.encode("\u5FEA")}).toThrowError({name:"TypeError",message:"EncodingError U+5FEA"});
expect([...ms932Encoder.encode("快")].join(",")).toBe("137,245"); // U+5FEB
expect(() => {ms932Encoder.encode("\u5FEC")}).toThrowError({name:"TypeError",message:"EncodingError U+5FEC"});
expect(() => {ms932Encoder.encode("\u5FED")}).toThrowError({name:"TypeError",message:"EncodingError U+5FED"});
expect(() => {ms932Encoder.encode("\u5FEE")}).toThrowError({name:"TypeError",message:"EncodingError U+5FEE"});
expect(() => {ms932Encoder.encode("\u5FEF")}).toThrowError({name:"TypeError",message:"EncodingError U+5FEF"});
expect([...ms932Encoder.encode("忰忱")].join(",")).toBe("156,171,156,121"); // U+5FF0
expect(() => {ms932Encoder.encode("\u5FF2")}).toThrowError({name:"TypeError",message:"EncodingError U+5FF2"});
expect(() => {ms932Encoder.encode("\u5FF3")}).toThrowError({name:"TypeError",message:"EncodingError U+5FF3"});
expect(() => {ms932Encoder.encode("\u5FF4")}).toThrowError({name:"TypeError",message:"EncodingError U+5FF4"});
expect([...ms932Encoder.encode("念")].join(",")).toBe("148,79"); // U+5FF5
expect(() => {ms932Encoder.encode("\u5FF6")}).toThrowError({name:"TypeError",message:"EncodingError U+5FF6"});
expect(() => {ms932Encoder.encode("\u5FF7")}).toThrowError({name:"TypeError",message:"EncodingError U+5FF7"});
expect([...ms932Encoder.encode("忸")].join(",")).toBe("156,120"); // U+5FF8
expect(() => {ms932Encoder.encode("\u5FF9")}).toThrowError({name:"TypeError",message:"EncodingError U+5FF9"});
expect(() => {ms932Encoder.encode("\u5FFA")}).toThrowError({name:"TypeError",message:"EncodingError U+5FFA"});
expect([...ms932Encoder.encode("忻")].join(",")).toBe("156,118"); // U+5FFB
expect(() => {ms932Encoder.encode("\u5FFC")}).toThrowError({name:"TypeError",message:"EncodingError U+5FFC"});
expect([...ms932Encoder.encode("忽")].join(",")).toBe("141,154"); // U+5FFD
expect(() => {ms932Encoder.encode("\u5FFE")}).toThrowError({name:"TypeError",message:"EncodingError U+5FFE"});
expect([...ms932Encoder.encode("忿")].join(",")).toBe("156,124"); // U+5FFF

  });

});
