import assert from "node:assert";
import { Ms932Encoder } from "./encoder";

describe("Ms932Encoder.prototype.encode 6", () => {

  it("encode(string) - U+5000-U+53FF", () => {
    const ms932Encoder = new Ms932Encoder({fatal:true});

    let r = true;
assert.throws(() => {ms932Encoder.encode("\u5000")}, {name:"Error",message:"EncodingError U+5000"});
assert.throws(() => {ms932Encoder.encode("\u5001")}, {name:"Error",message:"EncodingError U+5001"});
assert.throws(() => {ms932Encoder.encode("\u5002")}, {name:"Error",message:"EncodingError U+5002"});
assert.throws(() => {ms932Encoder.encode("\u5003")}, {name:"Error",message:"EncodingError U+5003"});
assert.throws(() => {ms932Encoder.encode("\u5004")}, {name:"Error",message:"EncodingError U+5004"});
r = r && ([...ms932Encoder.encode("倅倆")].join(",") === "152,228,152,237"); // U+5005
assert.throws(() => {ms932Encoder.encode("\u5007")}, {name:"Error",message:"EncodingError U+5007"});
assert.throws(() => {ms932Encoder.encode("\u5008")}, {name:"Error",message:"EncodingError U+5008"});
r = r && ([...ms932Encoder.encode("倉")].join(",") === "145,113"); // U+5009
assert.throws(() => {ms932Encoder.encode("\u500A")}, {name:"Error",message:"EncodingError U+500A"});
r = r && ([...ms932Encoder.encode("個")].join(",") === "140,194"); // U+500B
assert.throws(() => {ms932Encoder.encode("\u500C")}, {name:"Error",message:"EncodingError U+500C"});
r = r && ([...ms932Encoder.encode("倍")].join(",") === "148,123"); // U+500D
assert.throws(() => {ms932Encoder.encode("\u500E")}, {name:"Error",message:"EncodingError U+500E"});
r = r && ([...ms932Encoder.encode("倏")].join(",") === "224,197"); // U+500F
assert.throws(() => {ms932Encoder.encode("\u5010")}, {name:"Error",message:"EncodingError U+5010"});
r = r && ([...ms932Encoder.encode("們倒")].join(",") === "152,236,147,124"); // U+5011
assert.throws(() => {ms932Encoder.encode("\u5013")}, {name:"Error",message:"EncodingError U+5013"});
r = r && ([...ms932Encoder.encode("倔")].join(",") === "152,225"); // U+5014
assert.throws(() => {ms932Encoder.encode("\u5015")}, {name:"Error",message:"EncodingError U+5015"});
r = r && ([...ms932Encoder.encode("倖")].join(",") === "140,244"); // U+5016
assert.throws(() => {ms932Encoder.encode("\u5017")}, {name:"Error",message:"EncodingError U+5017"});
assert.throws(() => {ms932Encoder.encode("\u5018")}, {name:"Error",message:"EncodingError U+5018"});
r = r && ([...ms932Encoder.encode("候倚")].join(",") === "140,243,152,223"); // U+5019
assert.throws(() => {ms932Encoder.encode("\u501B")}, {name:"Error",message:"EncodingError U+501B"});
assert.throws(() => {ms932Encoder.encode("\u501C")}, {name:"Error",message:"EncodingError U+501C"});
assert.throws(() => {ms932Encoder.encode("\u501D")}, {name:"Error",message:"EncodingError U+501D"});
r = r && ([...ms932Encoder.encode("倞借")].join(",") === "250,119,142,216"); // U+501E
assert.throws(() => {ms932Encoder.encode("\u5020")}, {name:"Error",message:"EncodingError U+5020"});
r = r && ([...ms932Encoder.encode("倡倢倣値倥倦")].join(",") === "152,231,250,117,149,237,146,108,152,227,140,145"); // U+5021
assert.throws(() => {ms932Encoder.encode("\u5027")}, {name:"Error",message:"EncodingError U+5027"});
r = r && ([...ms932Encoder.encode("倨倩倪倫倬倭")].join(",") === "152,224,152,232,152,226,151,207,152,233,152,96"); // U+5028
assert.throws(() => {ms932Encoder.encode("\u502E")}, {name:"Error",message:"EncodingError U+502E"});
assert.throws(() => {ms932Encoder.encode("\u502F")}, {name:"Error",message:"EncodingError U+502F"});
assert.throws(() => {ms932Encoder.encode("\u5030")}, {name:"Error",message:"EncodingError U+5030"});
assert.throws(() => {ms932Encoder.encode("\u5031")}, {name:"Error",message:"EncodingError U+5031"});
assert.throws(() => {ms932Encoder.encode("\u5032")}, {name:"Error",message:"EncodingError U+5032"});
assert.throws(() => {ms932Encoder.encode("\u5033")}, {name:"Error",message:"EncodingError U+5033"});
assert.throws(() => {ms932Encoder.encode("\u5034")}, {name:"Error",message:"EncodingError U+5034"});
assert.throws(() => {ms932Encoder.encode("\u5035")}, {name:"Error",message:"EncodingError U+5035"});
r = r && ([...ms932Encoder.encode("倶")].join(",") === "139,228"); // U+5036
assert.throws(() => {ms932Encoder.encode("\u5037")}, {name:"Error",message:"EncodingError U+5037"});
assert.throws(() => {ms932Encoder.encode("\u5038")}, {name:"Error",message:"EncodingError U+5038"});
r = r && ([...ms932Encoder.encode("倹")].join(",") === "140,144"); // U+5039
assert.throws(() => {ms932Encoder.encode("\u503A")}, {name:"Error",message:"EncodingError U+503A"});
assert.throws(() => {ms932Encoder.encode("\u503B")}, {name:"Error",message:"EncodingError U+503B"});
assert.throws(() => {ms932Encoder.encode("\u503C")}, {name:"Error",message:"EncodingError U+503C"});
assert.throws(() => {ms932Encoder.encode("\u503D")}, {name:"Error",message:"EncodingError U+503D"});
assert.throws(() => {ms932Encoder.encode("\u503E")}, {name:"Error",message:"EncodingError U+503E"});
assert.throws(() => {ms932Encoder.encode("\u503F")}, {name:"Error",message:"EncodingError U+503F"});
r = r && ([...ms932Encoder.encode("偀")].join(",") === "250,116"); // U+5040
assert.throws(() => {ms932Encoder.encode("\u5041")}, {name:"Error",message:"EncodingError U+5041"});
r = r && ([...ms932Encoder.encode("偂偃")].join(",") === "250,122,152,238"); // U+5042
assert.throws(() => {ms932Encoder.encode("\u5044")}, {name:"Error",message:"EncodingError U+5044"});
assert.throws(() => {ms932Encoder.encode("\u5045")}, {name:"Error",message:"EncodingError U+5045"});
r = r && ([...ms932Encoder.encode("偆假偈偉")].join(",") === "250,120,152,239,152,243,136,204"); // U+5046
assert.throws(() => {ms932Encoder.encode("\u504A")}, {name:"Error",message:"EncodingError U+504A"});
assert.throws(() => {ms932Encoder.encode("\u504B")}, {name:"Error",message:"EncodingError U+504B"});
assert.throws(() => {ms932Encoder.encode("\u504C")}, {name:"Error",message:"EncodingError U+504C"});
assert.throws(() => {ms932Encoder.encode("\u504D")}, {name:"Error",message:"EncodingError U+504D"});
assert.throws(() => {ms932Encoder.encode("\u504E")}, {name:"Error",message:"EncodingError U+504E"});
r = r && ([...ms932Encoder.encode("偏偐")].join(",") === "149,206,152,242"); // U+504F
assert.throws(() => {ms932Encoder.encode("\u5051")}, {name:"Error",message:"EncodingError U+5051"});
assert.throws(() => {ms932Encoder.encode("\u5052")}, {name:"Error",message:"EncodingError U+5052"});
assert.throws(() => {ms932Encoder.encode("\u5053")}, {name:"Error",message:"EncodingError U+5053"});
assert.throws(() => {ms932Encoder.encode("\u5054")}, {name:"Error",message:"EncodingError U+5054"});
r = r && ([...ms932Encoder.encode("偕偖")].join(",") === "152,241,152,245"); // U+5055
assert.throws(() => {ms932Encoder.encode("\u5057")}, {name:"Error",message:"EncodingError U+5057"});
assert.throws(() => {ms932Encoder.encode("\u5058")}, {name:"Error",message:"EncodingError U+5058"});
assert.throws(() => {ms932Encoder.encode("\u5059")}, {name:"Error",message:"EncodingError U+5059"});
r = r && ([...ms932Encoder.encode("做")].join(",") === "152,244"); // U+505A
assert.throws(() => {ms932Encoder.encode("\u505B")}, {name:"Error",message:"EncodingError U+505B"});
r = r && ([...ms932Encoder.encode("停")].join(",") === "146,226"); // U+505C
assert.throws(() => {ms932Encoder.encode("\u505D")}, {name:"Error",message:"EncodingError U+505D"});
assert.throws(() => {ms932Encoder.encode("\u505E")}, {name:"Error",message:"EncodingError U+505E"});
assert.throws(() => {ms932Encoder.encode("\u505F")}, {name:"Error",message:"EncodingError U+505F"});
assert.throws(() => {ms932Encoder.encode("\u5060")}, {name:"Error",message:"EncodingError U+5060"});
assert.throws(() => {ms932Encoder.encode("\u5061")}, {name:"Error",message:"EncodingError U+5061"});
assert.throws(() => {ms932Encoder.encode("\u5062")}, {name:"Error",message:"EncodingError U+5062"});
assert.throws(() => {ms932Encoder.encode("\u5063")}, {name:"Error",message:"EncodingError U+5063"});
assert.throws(() => {ms932Encoder.encode("\u5064")}, {name:"Error",message:"EncodingError U+5064"});
r = r && ([...ms932Encoder.encode("健")].join(",") === "140,146"); // U+5065
assert.throws(() => {ms932Encoder.encode("\u5066")}, {name:"Error",message:"EncodingError U+5066"});
assert.throws(() => {ms932Encoder.encode("\u5067")}, {name:"Error",message:"EncodingError U+5067"});
assert.throws(() => {ms932Encoder.encode("\u5068")}, {name:"Error",message:"EncodingError U+5068"});
assert.throws(() => {ms932Encoder.encode("\u5069")}, {name:"Error",message:"EncodingError U+5069"});
assert.throws(() => {ms932Encoder.encode("\u506A")}, {name:"Error",message:"EncodingError U+506A"});
assert.throws(() => {ms932Encoder.encode("\u506B")}, {name:"Error",message:"EncodingError U+506B"});
r = r && ([...ms932Encoder.encode("偬")].join(",") === "152,246"); // U+506C
assert.throws(() => {ms932Encoder.encode("\u506D")}, {name:"Error",message:"EncodingError U+506D"});
assert.throws(() => {ms932Encoder.encode("\u506E")}, {name:"Error",message:"EncodingError U+506E"});
assert.throws(() => {ms932Encoder.encode("\u506F")}, {name:"Error",message:"EncodingError U+506F"});
r = r && ([...ms932Encoder.encode("偰")].join(",") === "250,121"); // U+5070
assert.throws(() => {ms932Encoder.encode("\u5071")}, {name:"Error",message:"EncodingError U+5071"});
r = r && ([...ms932Encoder.encode("偲")].join(",") === "142,195"); // U+5072
assert.throws(() => {ms932Encoder.encode("\u5073")}, {name:"Error",message:"EncodingError U+5073"});
r = r && ([...ms932Encoder.encode("側偵偶")].join(",") === "145,164,146,227,139,244"); // U+5074
assert.throws(() => {ms932Encoder.encode("\u5077")}, {name:"Error",message:"EncodingError U+5077"});
r = r && ([...ms932Encoder.encode("偸")].join(",") === "152,247"); // U+5078
assert.throws(() => {ms932Encoder.encode("\u5079")}, {name:"Error",message:"EncodingError U+5079"});
assert.throws(() => {ms932Encoder.encode("\u507A")}, {name:"Error",message:"EncodingError U+507A"});
assert.throws(() => {ms932Encoder.encode("\u507B")}, {name:"Error",message:"EncodingError U+507B"});
assert.throws(() => {ms932Encoder.encode("\u507C")}, {name:"Error",message:"EncodingError U+507C"});
r = r && ([...ms932Encoder.encode("偽")].join(",") === "139,85"); // U+507D
assert.throws(() => {ms932Encoder.encode("\u507E")}, {name:"Error",message:"EncodingError U+507E"});
assert.throws(() => {ms932Encoder.encode("\u507F")}, {name:"Error",message:"EncodingError U+507F"});
r = r && ([...ms932Encoder.encode("傀")].join(",") === "152,248"); // U+5080
assert.throws(() => {ms932Encoder.encode("\u5081")}, {name:"Error",message:"EncodingError U+5081"});
assert.throws(() => {ms932Encoder.encode("\u5082")}, {name:"Error",message:"EncodingError U+5082"});
assert.throws(() => {ms932Encoder.encode("\u5083")}, {name:"Error",message:"EncodingError U+5083"});
assert.throws(() => {ms932Encoder.encode("\u5084")}, {name:"Error",message:"EncodingError U+5084"});
r = r && ([...ms932Encoder.encode("傅")].join(",") === "152,250"); // U+5085
assert.throws(() => {ms932Encoder.encode("\u5086")}, {name:"Error",message:"EncodingError U+5086"});
assert.throws(() => {ms932Encoder.encode("\u5087")}, {name:"Error",message:"EncodingError U+5087"});
assert.throws(() => {ms932Encoder.encode("\u5088")}, {name:"Error",message:"EncodingError U+5088"});
assert.throws(() => {ms932Encoder.encode("\u5089")}, {name:"Error",message:"EncodingError U+5089"});
assert.throws(() => {ms932Encoder.encode("\u508A")}, {name:"Error",message:"EncodingError U+508A"});
assert.throws(() => {ms932Encoder.encode("\u508B")}, {name:"Error",message:"EncodingError U+508B"});
assert.throws(() => {ms932Encoder.encode("\u508C")}, {name:"Error",message:"EncodingError U+508C"});
r = r && ([...ms932Encoder.encode("傍")].join(",") === "150,84"); // U+508D
assert.throws(() => {ms932Encoder.encode("\u508E")}, {name:"Error",message:"EncodingError U+508E"});
assert.throws(() => {ms932Encoder.encode("\u508F")}, {name:"Error",message:"EncodingError U+508F"});
assert.throws(() => {ms932Encoder.encode("\u5090")}, {name:"Error",message:"EncodingError U+5090"});
r = r && ([...ms932Encoder.encode("傑")].join(",") === "140,134"); // U+5091
assert.throws(() => {ms932Encoder.encode("\u5092")}, {name:"Error",message:"EncodingError U+5092"});
assert.throws(() => {ms932Encoder.encode("\u5093")}, {name:"Error",message:"EncodingError U+5093"});
r = r && ([...ms932Encoder.encode("傔")].join(",") === "250,123"); // U+5094
assert.throws(() => {ms932Encoder.encode("\u5095")}, {name:"Error",message:"EncodingError U+5095"});
assert.throws(() => {ms932Encoder.encode("\u5096")}, {name:"Error",message:"EncodingError U+5096"});
assert.throws(() => {ms932Encoder.encode("\u5097")}, {name:"Error",message:"EncodingError U+5097"});
r = r && ([...ms932Encoder.encode("傘備傚")].join(",") === "142,80,148,245,152,249"); // U+5098
assert.throws(() => {ms932Encoder.encode("\u509B")}, {name:"Error",message:"EncodingError U+509B"});
assert.throws(() => {ms932Encoder.encode("\u509C")}, {name:"Error",message:"EncodingError U+509C"});
assert.throws(() => {ms932Encoder.encode("\u509D")}, {name:"Error",message:"EncodingError U+509D"});
assert.throws(() => {ms932Encoder.encode("\u509E")}, {name:"Error",message:"EncodingError U+509E"});
assert.throws(() => {ms932Encoder.encode("\u509F")}, {name:"Error",message:"EncodingError U+509F"});
assert.throws(() => {ms932Encoder.encode("\u50A0")}, {name:"Error",message:"EncodingError U+50A0"});
assert.throws(() => {ms932Encoder.encode("\u50A1")}, {name:"Error",message:"EncodingError U+50A1"});
assert.throws(() => {ms932Encoder.encode("\u50A2")}, {name:"Error",message:"EncodingError U+50A2"});
assert.throws(() => {ms932Encoder.encode("\u50A3")}, {name:"Error",message:"EncodingError U+50A3"});
assert.throws(() => {ms932Encoder.encode("\u50A4")}, {name:"Error",message:"EncodingError U+50A4"});
assert.throws(() => {ms932Encoder.encode("\u50A5")}, {name:"Error",message:"EncodingError U+50A5"});
assert.throws(() => {ms932Encoder.encode("\u50A6")}, {name:"Error",message:"EncodingError U+50A6"});
assert.throws(() => {ms932Encoder.encode("\u50A7")}, {name:"Error",message:"EncodingError U+50A7"});
assert.throws(() => {ms932Encoder.encode("\u50A8")}, {name:"Error",message:"EncodingError U+50A8"});
assert.throws(() => {ms932Encoder.encode("\u50A9")}, {name:"Error",message:"EncodingError U+50A9"});
assert.throws(() => {ms932Encoder.encode("\u50AA")}, {name:"Error",message:"EncodingError U+50AA"});
assert.throws(() => {ms932Encoder.encode("\u50AB")}, {name:"Error",message:"EncodingError U+50AB"});
r = r && ([...ms932Encoder.encode("催傭")].join(",") === "141,195,151,98"); // U+50AC
assert.throws(() => {ms932Encoder.encode("\u50AE")}, {name:"Error",message:"EncodingError U+50AE"});
assert.throws(() => {ms932Encoder.encode("\u50AF")}, {name:"Error",message:"EncodingError U+50AF"});
assert.throws(() => {ms932Encoder.encode("\u50B0")}, {name:"Error",message:"EncodingError U+50B0"});
assert.throws(() => {ms932Encoder.encode("\u50B1")}, {name:"Error",message:"EncodingError U+50B1"});
r = r && ([...ms932Encoder.encode("傲傳傴債")].join(",") === "152,252,153,66,152,251,141,194"); // U+50B2
assert.throws(() => {ms932Encoder.encode("\u50B6")}, {name:"Error",message:"EncodingError U+50B6"});
r = r && ([...ms932Encoder.encode("傷")].join(",") === "143,157"); // U+50B7
assert.throws(() => {ms932Encoder.encode("\u50B8")}, {name:"Error",message:"EncodingError U+50B8"});
assert.throws(() => {ms932Encoder.encode("\u50B9")}, {name:"Error",message:"EncodingError U+50B9"});
assert.throws(() => {ms932Encoder.encode("\u50BA")}, {name:"Error",message:"EncodingError U+50BA"});
assert.throws(() => {ms932Encoder.encode("\u50BB")}, {name:"Error",message:"EncodingError U+50BB"});
assert.throws(() => {ms932Encoder.encode("\u50BC")}, {name:"Error",message:"EncodingError U+50BC"});
assert.throws(() => {ms932Encoder.encode("\u50BD")}, {name:"Error",message:"EncodingError U+50BD"});
r = r && ([...ms932Encoder.encode("傾")].join(",") === "140,88"); // U+50BE
assert.throws(() => {ms932Encoder.encode("\u50BF")}, {name:"Error",message:"EncodingError U+50BF"});
assert.throws(() => {ms932Encoder.encode("\u50C0")}, {name:"Error",message:"EncodingError U+50C0"});
assert.throws(() => {ms932Encoder.encode("\u50C1")}, {name:"Error",message:"EncodingError U+50C1"});
r = r && ([...ms932Encoder.encode("僂")].join(",") === "153,67"); // U+50C2
assert.throws(() => {ms932Encoder.encode("\u50C3")}, {name:"Error",message:"EncodingError U+50C3"});
assert.throws(() => {ms932Encoder.encode("\u50C4")}, {name:"Error",message:"EncodingError U+50C4"});
r = r && ([...ms932Encoder.encode("僅")].join(",") === "139,205"); // U+50C5
assert.throws(() => {ms932Encoder.encode("\u50C6")}, {name:"Error",message:"EncodingError U+50C6"});
assert.throws(() => {ms932Encoder.encode("\u50C7")}, {name:"Error",message:"EncodingError U+50C7"});
assert.throws(() => {ms932Encoder.encode("\u50C8")}, {name:"Error",message:"EncodingError U+50C8"});
r = r && ([...ms932Encoder.encode("僉僊")].join(",") === "153,64,153,65"); // U+50C9
assert.throws(() => {ms932Encoder.encode("\u50CB")}, {name:"Error",message:"EncodingError U+50CB"});
assert.throws(() => {ms932Encoder.encode("\u50CC")}, {name:"Error",message:"EncodingError U+50CC"});
r = r && ([...ms932Encoder.encode("働")].join(",") === "147,173"); // U+50CD
assert.throws(() => {ms932Encoder.encode("\u50CE")}, {name:"Error",message:"EncodingError U+50CE"});
r = r && ([...ms932Encoder.encode("像")].join(",") === "145,156"); // U+50CF
assert.throws(() => {ms932Encoder.encode("\u50D0")}, {name:"Error",message:"EncodingError U+50D0"});
r = r && ([...ms932Encoder.encode("僑")].join(",") === "139,161"); // U+50D1
assert.throws(() => {ms932Encoder.encode("\u50D2")}, {name:"Error",message:"EncodingError U+50D2"});
assert.throws(() => {ms932Encoder.encode("\u50D3")}, {name:"Error",message:"EncodingError U+50D3"});
assert.throws(() => {ms932Encoder.encode("\u50D4")}, {name:"Error",message:"EncodingError U+50D4"});
r = r && ([...ms932Encoder.encode("僕僖")].join(",") === "150,108,153,68"); // U+50D5
assert.throws(() => {ms932Encoder.encode("\u50D7")}, {name:"Error",message:"EncodingError U+50D7"});
r = r && ([...ms932Encoder.encode("僘")].join(",") === "250,125"); // U+50D8
assert.throws(() => {ms932Encoder.encode("\u50D9")}, {name:"Error",message:"EncodingError U+50D9"});
r = r && ([...ms932Encoder.encode("僚")].join(",") === "151,187"); // U+50DA
assert.throws(() => {ms932Encoder.encode("\u50DB")}, {name:"Error",message:"EncodingError U+50DB"});
assert.throws(() => {ms932Encoder.encode("\u50DC")}, {name:"Error",message:"EncodingError U+50DC"});
assert.throws(() => {ms932Encoder.encode("\u50DD")}, {name:"Error",message:"EncodingError U+50DD"});
r = r && ([...ms932Encoder.encode("僞")].join(",") === "153,69"); // U+50DE
assert.throws(() => {ms932Encoder.encode("\u50DF")}, {name:"Error",message:"EncodingError U+50DF"});
assert.throws(() => {ms932Encoder.encode("\u50E0")}, {name:"Error",message:"EncodingError U+50E0"});
assert.throws(() => {ms932Encoder.encode("\u50E1")}, {name:"Error",message:"EncodingError U+50E1"});
assert.throws(() => {ms932Encoder.encode("\u50E2")}, {name:"Error",message:"EncodingError U+50E2"});
r = r && ([...ms932Encoder.encode("僣")].join(",") === "153,72"); // U+50E3
assert.throws(() => {ms932Encoder.encode("\u50E4")}, {name:"Error",message:"EncodingError U+50E4"});
r = r && ([...ms932Encoder.encode("僥")].join(",") === "153,70"); // U+50E5
assert.throws(() => {ms932Encoder.encode("\u50E6")}, {name:"Error",message:"EncodingError U+50E6"});
r = r && ([...ms932Encoder.encode("僧")].join(",") === "145,109"); // U+50E7
assert.throws(() => {ms932Encoder.encode("\u50E8")}, {name:"Error",message:"EncodingError U+50E8"});
assert.throws(() => {ms932Encoder.encode("\u50E9")}, {name:"Error",message:"EncodingError U+50E9"});
assert.throws(() => {ms932Encoder.encode("\u50EA")}, {name:"Error",message:"EncodingError U+50EA"});
assert.throws(() => {ms932Encoder.encode("\u50EB")}, {name:"Error",message:"EncodingError U+50EB"});
assert.throws(() => {ms932Encoder.encode("\u50EC")}, {name:"Error",message:"EncodingError U+50EC"});
r = r && ([...ms932Encoder.encode("僭僮")].join(",") === "153,71,153,73"); // U+50ED
assert.throws(() => {ms932Encoder.encode("\u50EF")}, {name:"Error",message:"EncodingError U+50EF"});
assert.throws(() => {ms932Encoder.encode("\u50F0")}, {name:"Error",message:"EncodingError U+50F0"});
assert.throws(() => {ms932Encoder.encode("\u50F1")}, {name:"Error",message:"EncodingError U+50F1"});
assert.throws(() => {ms932Encoder.encode("\u50F2")}, {name:"Error",message:"EncodingError U+50F2"});
assert.throws(() => {ms932Encoder.encode("\u50F3")}, {name:"Error",message:"EncodingError U+50F3"});
r = r && ([...ms932Encoder.encode("僴僵")].join(",") === "250,124,153,75"); // U+50F4
assert.throws(() => {ms932Encoder.encode("\u50F6")}, {name:"Error",message:"EncodingError U+50F6"});
assert.throws(() => {ms932Encoder.encode("\u50F7")}, {name:"Error",message:"EncodingError U+50F7"});
assert.throws(() => {ms932Encoder.encode("\u50F8")}, {name:"Error",message:"EncodingError U+50F8"});
r = r && ([...ms932Encoder.encode("價")].join(",") === "153,74"); // U+50F9
assert.throws(() => {ms932Encoder.encode("\u50FA")}, {name:"Error",message:"EncodingError U+50FA"});
r = r && ([...ms932Encoder.encode("僻")].join(",") === "149,198"); // U+50FB
assert.throws(() => {ms932Encoder.encode("\u50FC")}, {name:"Error",message:"EncodingError U+50FC"});
assert.throws(() => {ms932Encoder.encode("\u50FD")}, {name:"Error",message:"EncodingError U+50FD"});
assert.throws(() => {ms932Encoder.encode("\u50FE")}, {name:"Error",message:"EncodingError U+50FE"});
assert.throws(() => {ms932Encoder.encode("\u50FF")}, {name:"Error",message:"EncodingError U+50FF"});
r = r && ([...ms932Encoder.encode("儀儁儂")].join(",") === "139,86,153,77,153,78"); // U+5100
assert.throws(() => {ms932Encoder.encode("\u5103")}, {name:"Error",message:"EncodingError U+5103"});
r = r && ([...ms932Encoder.encode("億")].join(",") === "137,173"); // U+5104
assert.throws(() => {ms932Encoder.encode("\u5105")}, {name:"Error",message:"EncodingError U+5105"});
assert.throws(() => {ms932Encoder.encode("\u5106")}, {name:"Error",message:"EncodingError U+5106"});
assert.throws(() => {ms932Encoder.encode("\u5107")}, {name:"Error",message:"EncodingError U+5107"});
assert.throws(() => {ms932Encoder.encode("\u5108")}, {name:"Error",message:"EncodingError U+5108"});
r = r && ([...ms932Encoder.encode("儉")].join(",") === "153,76"); // U+5109
assert.throws(() => {ms932Encoder.encode("\u510A")}, {name:"Error",message:"EncodingError U+510A"});
assert.throws(() => {ms932Encoder.encode("\u510B")}, {name:"Error",message:"EncodingError U+510B"});
assert.throws(() => {ms932Encoder.encode("\u510C")}, {name:"Error",message:"EncodingError U+510C"});
assert.throws(() => {ms932Encoder.encode("\u510D")}, {name:"Error",message:"EncodingError U+510D"});
assert.throws(() => {ms932Encoder.encode("\u510E")}, {name:"Error",message:"EncodingError U+510E"});
assert.throws(() => {ms932Encoder.encode("\u510F")}, {name:"Error",message:"EncodingError U+510F"});
assert.throws(() => {ms932Encoder.encode("\u5110")}, {name:"Error",message:"EncodingError U+5110"});
assert.throws(() => {ms932Encoder.encode("\u5111")}, {name:"Error",message:"EncodingError U+5111"});
r = r && ([...ms932Encoder.encode("儒")].join(",") === "142,242"); // U+5112
assert.throws(() => {ms932Encoder.encode("\u5113")}, {name:"Error",message:"EncodingError U+5113"});
r = r && ([...ms932Encoder.encode("儔儕儖")].join(",") === "153,81,153,80,153,79"); // U+5114
assert.throws(() => {ms932Encoder.encode("\u5117")}, {name:"Error",message:"EncodingError U+5117"});
r = r && ([...ms932Encoder.encode("儘")].join(",") === "152,212"); // U+5118
assert.throws(() => {ms932Encoder.encode("\u5119")}, {name:"Error",message:"EncodingError U+5119"});
r = r && ([...ms932Encoder.encode("儚")].join(",") === "153,82"); // U+511A
assert.throws(() => {ms932Encoder.encode("\u511B")}, {name:"Error",message:"EncodingError U+511B"});
assert.throws(() => {ms932Encoder.encode("\u511C")}, {name:"Error",message:"EncodingError U+511C"});
assert.throws(() => {ms932Encoder.encode("\u511D")}, {name:"Error",message:"EncodingError U+511D"});
assert.throws(() => {ms932Encoder.encode("\u511E")}, {name:"Error",message:"EncodingError U+511E"});
r = r && ([...ms932Encoder.encode("償")].join(",") === "143,158"); // U+511F
assert.throws(() => {ms932Encoder.encode("\u5120")}, {name:"Error",message:"EncodingError U+5120"});
r = r && ([...ms932Encoder.encode("儡")].join(",") === "153,83"); // U+5121
assert.throws(() => {ms932Encoder.encode("\u5122")}, {name:"Error",message:"EncodingError U+5122"});
assert.throws(() => {ms932Encoder.encode("\u5123")}, {name:"Error",message:"EncodingError U+5123"});
assert.throws(() => {ms932Encoder.encode("\u5124")}, {name:"Error",message:"EncodingError U+5124"});
assert.throws(() => {ms932Encoder.encode("\u5125")}, {name:"Error",message:"EncodingError U+5125"});
assert.throws(() => {ms932Encoder.encode("\u5126")}, {name:"Error",message:"EncodingError U+5126"});
assert.throws(() => {ms932Encoder.encode("\u5127")}, {name:"Error",message:"EncodingError U+5127"});
assert.throws(() => {ms932Encoder.encode("\u5128")}, {name:"Error",message:"EncodingError U+5128"});
assert.throws(() => {ms932Encoder.encode("\u5129")}, {name:"Error",message:"EncodingError U+5129"});
r = r && ([...ms932Encoder.encode("優")].join(",") === "151,68"); // U+512A
assert.throws(() => {ms932Encoder.encode("\u512B")}, {name:"Error",message:"EncodingError U+512B"});
assert.throws(() => {ms932Encoder.encode("\u512C")}, {name:"Error",message:"EncodingError U+512C"});
assert.throws(() => {ms932Encoder.encode("\u512D")}, {name:"Error",message:"EncodingError U+512D"});
assert.throws(() => {ms932Encoder.encode("\u512E")}, {name:"Error",message:"EncodingError U+512E"});
assert.throws(() => {ms932Encoder.encode("\u512F")}, {name:"Error",message:"EncodingError U+512F"});
assert.throws(() => {ms932Encoder.encode("\u5130")}, {name:"Error",message:"EncodingError U+5130"});
assert.throws(() => {ms932Encoder.encode("\u5131")}, {name:"Error",message:"EncodingError U+5131"});
r = r && ([...ms932Encoder.encode("儲")].join(",") === "150,215"); // U+5132
assert.throws(() => {ms932Encoder.encode("\u5133")}, {name:"Error",message:"EncodingError U+5133"});
assert.throws(() => {ms932Encoder.encode("\u5134")}, {name:"Error",message:"EncodingError U+5134"});
assert.throws(() => {ms932Encoder.encode("\u5135")}, {name:"Error",message:"EncodingError U+5135"});
assert.throws(() => {ms932Encoder.encode("\u5136")}, {name:"Error",message:"EncodingError U+5136"});
r = r && ([...ms932Encoder.encode("儷")].join(",") === "153,85"); // U+5137
assert.throws(() => {ms932Encoder.encode("\u5138")}, {name:"Error",message:"EncodingError U+5138"});
assert.throws(() => {ms932Encoder.encode("\u5139")}, {name:"Error",message:"EncodingError U+5139"});
r = r && ([...ms932Encoder.encode("儺儻儼")].join(",") === "153,84,153,87,153,86"); // U+513A
assert.throws(() => {ms932Encoder.encode("\u513D")}, {name:"Error",message:"EncodingError U+513D"});
assert.throws(() => {ms932Encoder.encode("\u513E")}, {name:"Error",message:"EncodingError U+513E"});
r = r && ([...ms932Encoder.encode("儿兀允")].join(",") === "153,88,153,89,136,242"); // U+513F
assert.throws(() => {ms932Encoder.encode("\u5142")}, {name:"Error",message:"EncodingError U+5142"});
r = r && ([...ms932Encoder.encode("元兄充兆兇先光兊克兌免兎")].join(",") === "140,179,140,90,143,91,146,155,139,162,144,230,140,245,250,126,141,142,153,91,150,198,147,101"); // U+5143
assert.throws(() => {ms932Encoder.encode("\u514F")}, {name:"Error",message:"EncodingError U+514F"});
r = r && ([...ms932Encoder.encode("児")].join(",") === "142,153"); // U+5150
assert.throws(() => {ms932Encoder.encode("\u5151")}, {name:"Error",message:"EncodingError U+5151"});
r = r && ([...ms932Encoder.encode("兒")].join(",") === "153,90"); // U+5152
assert.throws(() => {ms932Encoder.encode("\u5153")}, {name:"Error",message:"EncodingError U+5153"});
r = r && ([...ms932Encoder.encode("兔")].join(",") === "153,92"); // U+5154
assert.throws(() => {ms932Encoder.encode("\u5155")}, {name:"Error",message:"EncodingError U+5155"});
assert.throws(() => {ms932Encoder.encode("\u5156")}, {name:"Error",message:"EncodingError U+5156"});
assert.throws(() => {ms932Encoder.encode("\u5157")}, {name:"Error",message:"EncodingError U+5157"});
assert.throws(() => {ms932Encoder.encode("\u5158")}, {name:"Error",message:"EncodingError U+5158"});
assert.throws(() => {ms932Encoder.encode("\u5159")}, {name:"Error",message:"EncodingError U+5159"});
r = r && ([...ms932Encoder.encode("党")].join(",") === "147,125"); // U+515A
assert.throws(() => {ms932Encoder.encode("\u515B")}, {name:"Error",message:"EncodingError U+515B"});
r = r && ([...ms932Encoder.encode("兜")].join(",") === "138,149"); // U+515C
assert.throws(() => {ms932Encoder.encode("\u515D")}, {name:"Error",message:"EncodingError U+515D"});
assert.throws(() => {ms932Encoder.encode("\u515E")}, {name:"Error",message:"EncodingError U+515E"});
assert.throws(() => {ms932Encoder.encode("\u515F")}, {name:"Error",message:"EncodingError U+515F"});
assert.throws(() => {ms932Encoder.encode("\u5160")}, {name:"Error",message:"EncodingError U+5160"});
assert.throws(() => {ms932Encoder.encode("\u5161")}, {name:"Error",message:"EncodingError U+5161"});
r = r && ([...ms932Encoder.encode("兢")].join(",") === "153,93"); // U+5162
assert.throws(() => {ms932Encoder.encode("\u5163")}, {name:"Error",message:"EncodingError U+5163"});
r = r && ([...ms932Encoder.encode("兤入")].join(",") === "250,128,147,252"); // U+5164
assert.throws(() => {ms932Encoder.encode("\u5166")}, {name:"Error",message:"EncodingError U+5166"});
assert.throws(() => {ms932Encoder.encode("\u5167")}, {name:"Error",message:"EncodingError U+5167"});
r = r && ([...ms932Encoder.encode("全兩兪八公六兮")].join(",") === "145,83,153,95,153,96,148,170,140,246,152,90,153,97"); // U+5168
assert.throws(() => {ms932Encoder.encode("\u516F")}, {name:"Error",message:"EncodingError U+516F"});
assert.throws(() => {ms932Encoder.encode("\u5170")}, {name:"Error",message:"EncodingError U+5170"});
r = r && ([...ms932Encoder.encode("共")].join(",") === "139,164"); // U+5171
assert.throws(() => {ms932Encoder.encode("\u5172")}, {name:"Error",message:"EncodingError U+5172"});
assert.throws(() => {ms932Encoder.encode("\u5173")}, {name:"Error",message:"EncodingError U+5173"});
assert.throws(() => {ms932Encoder.encode("\u5174")}, {name:"Error",message:"EncodingError U+5174"});
r = r && ([...ms932Encoder.encode("兵其具典")].join(",") === "149,186,145,180,139,239,147,84"); // U+5175
assert.throws(() => {ms932Encoder.encode("\u5179")}, {name:"Error",message:"EncodingError U+5179"});
assert.throws(() => {ms932Encoder.encode("\u517A")}, {name:"Error",message:"EncodingError U+517A"});
assert.throws(() => {ms932Encoder.encode("\u517B")}, {name:"Error",message:"EncodingError U+517B"});
r = r && ([...ms932Encoder.encode("兼")].join(",") === "140,147"); // U+517C
assert.throws(() => {ms932Encoder.encode("\u517D")}, {name:"Error",message:"EncodingError U+517D"});
assert.throws(() => {ms932Encoder.encode("\u517E")}, {name:"Error",message:"EncodingError U+517E"});
assert.throws(() => {ms932Encoder.encode("\u517F")}, {name:"Error",message:"EncodingError U+517F"});
r = r && ([...ms932Encoder.encode("冀")].join(",") === "153,98"); // U+5180
assert.throws(() => {ms932Encoder.encode("\u5181")}, {name:"Error",message:"EncodingError U+5181"});
r = r && ([...ms932Encoder.encode("冂")].join(",") === "153,99"); // U+5182
assert.throws(() => {ms932Encoder.encode("\u5183")}, {name:"Error",message:"EncodingError U+5183"});
assert.throws(() => {ms932Encoder.encode("\u5184")}, {name:"Error",message:"EncodingError U+5184"});
r = r && ([...ms932Encoder.encode("内円")].join(",") === "147,224,137,126"); // U+5185
assert.throws(() => {ms932Encoder.encode("\u5187")}, {name:"Error",message:"EncodingError U+5187"});
assert.throws(() => {ms932Encoder.encode("\u5188")}, {name:"Error",message:"EncodingError U+5188"});
r = r && ([...ms932Encoder.encode("冉冊")].join(",") === "153,102,141,251"); // U+5189
assert.throws(() => {ms932Encoder.encode("\u518B")}, {name:"Error",message:"EncodingError U+518B"});
r = r && ([...ms932Encoder.encode("册再")].join(",") === "153,101,141,196"); // U+518C
assert.throws(() => {ms932Encoder.encode("\u518E")}, {name:"Error",message:"EncodingError U+518E"});
r = r && ([...ms932Encoder.encode("冏冐冑冒冓")].join(",") === "153,103,227,236,153,104,150,96,153,105"); // U+518F
assert.throws(() => {ms932Encoder.encode("\u5194")}, {name:"Error",message:"EncodingError U+5194"});
r = r && ([...ms932Encoder.encode("冕冖冗")].join(",") === "153,106,153,107,143,231"); // U+5195
assert.throws(() => {ms932Encoder.encode("\u5198")}, {name:"Error",message:"EncodingError U+5198"});
r = r && ([...ms932Encoder.encode("写")].join(",") === "142,202"); // U+5199
assert.throws(() => {ms932Encoder.encode("\u519A")}, {name:"Error",message:"EncodingError U+519A"});
assert.throws(() => {ms932Encoder.encode("\u519B")}, {name:"Error",message:"EncodingError U+519B"});
assert.throws(() => {ms932Encoder.encode("\u519C")}, {name:"Error",message:"EncodingError U+519C"});
r = r && ([...ms932Encoder.encode("冝")].join(",") === "250,129"); // U+519D
assert.throws(() => {ms932Encoder.encode("\u519E")}, {name:"Error",message:"EncodingError U+519E"});
assert.throws(() => {ms932Encoder.encode("\u519F")}, {name:"Error",message:"EncodingError U+519F"});
r = r && ([...ms932Encoder.encode("冠")].join(",") === "138,165"); // U+51A0
assert.throws(() => {ms932Encoder.encode("\u51A1")}, {name:"Error",message:"EncodingError U+51A1"});
r = r && ([...ms932Encoder.encode("冢")].join(",") === "153,110"); // U+51A2
assert.throws(() => {ms932Encoder.encode("\u51A3")}, {name:"Error",message:"EncodingError U+51A3"});
r = r && ([...ms932Encoder.encode("冤冥冦")].join(",") === "153,108,150,187,153,109"); // U+51A4
assert.throws(() => {ms932Encoder.encode("\u51A7")}, {name:"Error",message:"EncodingError U+51A7"});
r = r && ([...ms932Encoder.encode("冨冩冪冫冬")].join(",") === "149,121,153,111,153,112,153,113,147,126"); // U+51A8
assert.throws(() => {ms932Encoder.encode("\u51AD")}, {name:"Error",message:"EncodingError U+51AD"});
assert.throws(() => {ms932Encoder.encode("\u51AE")}, {name:"Error",message:"EncodingError U+51AE"});
assert.throws(() => {ms932Encoder.encode("\u51AF")}, {name:"Error",message:"EncodingError U+51AF"});
r = r && ([...ms932Encoder.encode("冰冱冲决冴况冶冷")].join(",") === "153,117,153,115,153,116,153,114,141,225,153,118,150,232,151,226"); // U+51B0
assert.throws(() => {ms932Encoder.encode("\u51B8")}, {name:"Error",message:"EncodingError U+51B8"});
assert.throws(() => {ms932Encoder.encode("\u51B9")}, {name:"Error",message:"EncodingError U+51B9"});
assert.throws(() => {ms932Encoder.encode("\u51BA")}, {name:"Error",message:"EncodingError U+51BA"});
assert.throws(() => {ms932Encoder.encode("\u51BB")}, {name:"Error",message:"EncodingError U+51BB"});
assert.throws(() => {ms932Encoder.encode("\u51BC")}, {name:"Error",message:"EncodingError U+51BC"});
r = r && ([...ms932Encoder.encode("冽冾")].join(",") === "153,119,250,130"); // U+51BD
assert.throws(() => {ms932Encoder.encode("\u51BF")}, {name:"Error",message:"EncodingError U+51BF"});
assert.throws(() => {ms932Encoder.encode("\u51C0")}, {name:"Error",message:"EncodingError U+51C0"});
assert.throws(() => {ms932Encoder.encode("\u51C1")}, {name:"Error",message:"EncodingError U+51C1"});
assert.throws(() => {ms932Encoder.encode("\u51C2")}, {name:"Error",message:"EncodingError U+51C2"});
assert.throws(() => {ms932Encoder.encode("\u51C3")}, {name:"Error",message:"EncodingError U+51C3"});
r = r && ([...ms932Encoder.encode("凄凅准")].join(",") === "144,166,153,120,143,121"); // U+51C4
assert.throws(() => {ms932Encoder.encode("\u51C7")}, {name:"Error",message:"EncodingError U+51C7"});
assert.throws(() => {ms932Encoder.encode("\u51C8")}, {name:"Error",message:"EncodingError U+51C8"});
r = r && ([...ms932Encoder.encode("凉")].join(",") === "153,121"); // U+51C9
assert.throws(() => {ms932Encoder.encode("\u51CA")}, {name:"Error",message:"EncodingError U+51CA"});
r = r && ([...ms932Encoder.encode("凋凌凍")].join(",") === "146,156,151,189,147,128"); // U+51CB
assert.throws(() => {ms932Encoder.encode("\u51CE")}, {name:"Error",message:"EncodingError U+51CE"});
assert.throws(() => {ms932Encoder.encode("\u51CF")}, {name:"Error",message:"EncodingError U+51CF"});
assert.throws(() => {ms932Encoder.encode("\u51D0")}, {name:"Error",message:"EncodingError U+51D0"});
assert.throws(() => {ms932Encoder.encode("\u51D1")}, {name:"Error",message:"EncodingError U+51D1"});
assert.throws(() => {ms932Encoder.encode("\u51D2")}, {name:"Error",message:"EncodingError U+51D2"});
assert.throws(() => {ms932Encoder.encode("\u51D3")}, {name:"Error",message:"EncodingError U+51D3"});
assert.throws(() => {ms932Encoder.encode("\u51D4")}, {name:"Error",message:"EncodingError U+51D4"});
assert.throws(() => {ms932Encoder.encode("\u51D5")}, {name:"Error",message:"EncodingError U+51D5"});
r = r && ([...ms932Encoder.encode("凖")].join(",") === "153,195"); // U+51D6
assert.throws(() => {ms932Encoder.encode("\u51D7")}, {name:"Error",message:"EncodingError U+51D7"});
assert.throws(() => {ms932Encoder.encode("\u51D8")}, {name:"Error",message:"EncodingError U+51D8"});
assert.throws(() => {ms932Encoder.encode("\u51D9")}, {name:"Error",message:"EncodingError U+51D9"});
assert.throws(() => {ms932Encoder.encode("\u51DA")}, {name:"Error",message:"EncodingError U+51DA"});
r = r && ([...ms932Encoder.encode("凛凜凝")].join(",") === "153,122,234,163,139,195"); // U+51DB
assert.throws(() => {ms932Encoder.encode("\u51DE")}, {name:"Error",message:"EncodingError U+51DE"});
assert.throws(() => {ms932Encoder.encode("\u51DF")}, {name:"Error",message:"EncodingError U+51DF"});
r = r && ([...ms932Encoder.encode("几凡")].join(",") === "153,123,150,125"); // U+51E0
assert.throws(() => {ms932Encoder.encode("\u51E2")}, {name:"Error",message:"EncodingError U+51E2"});
assert.throws(() => {ms932Encoder.encode("\u51E3")}, {name:"Error",message:"EncodingError U+51E3"});
assert.throws(() => {ms932Encoder.encode("\u51E4")}, {name:"Error",message:"EncodingError U+51E4"});
assert.throws(() => {ms932Encoder.encode("\u51E5")}, {name:"Error",message:"EncodingError U+51E5"});
r = r && ([...ms932Encoder.encode("処凧")].join(",") === "143,136,145,250"); // U+51E6
assert.throws(() => {ms932Encoder.encode("\u51E8")}, {name:"Error",message:"EncodingError U+51E8"});
r = r && ([...ms932Encoder.encode("凩凪")].join(",") === "153,125,147,226"); // U+51E9
assert.throws(() => {ms932Encoder.encode("\u51EB")}, {name:"Error",message:"EncodingError U+51EB"});
r = r && ([...ms932Encoder.encode("凬凭")].join(",") === "250,131,153,126"); // U+51EC
assert.throws(() => {ms932Encoder.encode("\u51EE")}, {name:"Error",message:"EncodingError U+51EE"});
assert.throws(() => {ms932Encoder.encode("\u51EF")}, {name:"Error",message:"EncodingError U+51EF"});
r = r && ([...ms932Encoder.encode("凰凱")].join(",") === "153,128,138,77"); // U+51F0
assert.throws(() => {ms932Encoder.encode("\u51F2")}, {name:"Error",message:"EncodingError U+51F2"});
assert.throws(() => {ms932Encoder.encode("\u51F3")}, {name:"Error",message:"EncodingError U+51F3"});
assert.throws(() => {ms932Encoder.encode("\u51F4")}, {name:"Error",message:"EncodingError U+51F4"});
r = r && ([...ms932Encoder.encode("凵凶")].join(",") === "153,129,139,165"); // U+51F5
assert.throws(() => {ms932Encoder.encode("\u51F7")}, {name:"Error",message:"EncodingError U+51F7"});
r = r && ([...ms932Encoder.encode("凸凹出")].join(",") === "147,202,137,154,143,111"); // U+51F8
assert.throws(() => {ms932Encoder.encode("\u51FB")}, {name:"Error",message:"EncodingError U+51FB"});
assert.throws(() => {ms932Encoder.encode("\u51FC")}, {name:"Error",message:"EncodingError U+51FC"});
r = r && ([...ms932Encoder.encode("函凾")].join(",") === "148,159,153,130"); // U+51FD
assert.throws(() => {ms932Encoder.encode("\u51FF")}, {name:"Error",message:"EncodingError U+51FF"});
r = r && ([...ms932Encoder.encode("刀")].join(",") === "147,129"); // U+5200
assert.throws(() => {ms932Encoder.encode("\u5201")}, {name:"Error",message:"EncodingError U+5201"});
assert.throws(() => {ms932Encoder.encode("\u5202")}, {name:"Error",message:"EncodingError U+5202"});
r = r && ([...ms932Encoder.encode("刃刄")].join(",") === "144,110,153,131"); // U+5203
assert.throws(() => {ms932Encoder.encode("\u5205")}, {name:"Error",message:"EncodingError U+5205"});
r = r && ([...ms932Encoder.encode("分切刈")].join(",") === "149,170,144,216,138,160"); // U+5206
assert.throws(() => {ms932Encoder.encode("\u5209")}, {name:"Error",message:"EncodingError U+5209"});
r = r && ([...ms932Encoder.encode("刊刋")].join(",") === "138,167,153,132"); // U+520A
assert.throws(() => {ms932Encoder.encode("\u520C")}, {name:"Error",message:"EncodingError U+520C"});
assert.throws(() => {ms932Encoder.encode("\u520D")}, {name:"Error",message:"EncodingError U+520D"});
r = r && ([...ms932Encoder.encode("刎")].join(",") === "153,134"); // U+520E
assert.throws(() => {ms932Encoder.encode("\u520F")}, {name:"Error",message:"EncodingError U+520F"});
assert.throws(() => {ms932Encoder.encode("\u5210")}, {name:"Error",message:"EncodingError U+5210"});
r = r && ([...ms932Encoder.encode("刑")].join(",") === "140,89"); // U+5211
assert.throws(() => {ms932Encoder.encode("\u5212")}, {name:"Error",message:"EncodingError U+5212"});
assert.throws(() => {ms932Encoder.encode("\u5213")}, {name:"Error",message:"EncodingError U+5213"});
r = r && ([...ms932Encoder.encode("刔刕")].join(",") === "153,133,250,132"); // U+5214
assert.throws(() => {ms932Encoder.encode("\u5216")}, {name:"Error",message:"EncodingError U+5216"});
r = r && ([...ms932Encoder.encode("列")].join(",") === "151,241"); // U+5217
assert.throws(() => {ms932Encoder.encode("\u5218")}, {name:"Error",message:"EncodingError U+5218"});
assert.throws(() => {ms932Encoder.encode("\u5219")}, {name:"Error",message:"EncodingError U+5219"});
assert.throws(() => {ms932Encoder.encode("\u521A")}, {name:"Error",message:"EncodingError U+521A"});
assert.throws(() => {ms932Encoder.encode("\u521B")}, {name:"Error",message:"EncodingError U+521B"});
assert.throws(() => {ms932Encoder.encode("\u521C")}, {name:"Error",message:"EncodingError U+521C"});
r = r && ([...ms932Encoder.encode("初")].join(",") === "143,137"); // U+521D
assert.throws(() => {ms932Encoder.encode("\u521E")}, {name:"Error",message:"EncodingError U+521E"});
assert.throws(() => {ms932Encoder.encode("\u521F")}, {name:"Error",message:"EncodingError U+521F"});
assert.throws(() => {ms932Encoder.encode("\u5220")}, {name:"Error",message:"EncodingError U+5220"});
assert.throws(() => {ms932Encoder.encode("\u5221")}, {name:"Error",message:"EncodingError U+5221"});
assert.throws(() => {ms932Encoder.encode("\u5222")}, {name:"Error",message:"EncodingError U+5222"});
assert.throws(() => {ms932Encoder.encode("\u5223")}, {name:"Error",message:"EncodingError U+5223"});
r = r && ([...ms932Encoder.encode("判別")].join(",") === "148,187,149,202"); // U+5224
assert.throws(() => {ms932Encoder.encode("\u5226")}, {name:"Error",message:"EncodingError U+5226"});
r = r && ([...ms932Encoder.encode("刧")].join(",") === "153,135"); // U+5227
assert.throws(() => {ms932Encoder.encode("\u5228")}, {name:"Error",message:"EncodingError U+5228"});
r = r && ([...ms932Encoder.encode("利刪")].join(",") === "151,152,153,136"); // U+5229
assert.throws(() => {ms932Encoder.encode("\u522B")}, {name:"Error",message:"EncodingError U+522B"});
assert.throws(() => {ms932Encoder.encode("\u522C")}, {name:"Error",message:"EncodingError U+522C"});
assert.throws(() => {ms932Encoder.encode("\u522D")}, {name:"Error",message:"EncodingError U+522D"});
r = r && ([...ms932Encoder.encode("刮")].join(",") === "153,137"); // U+522E
assert.throws(() => {ms932Encoder.encode("\u522F")}, {name:"Error",message:"EncodingError U+522F"});
r = r && ([...ms932Encoder.encode("到")].join(",") === "147,158"); // U+5230
assert.throws(() => {ms932Encoder.encode("\u5231")}, {name:"Error",message:"EncodingError U+5231"});
assert.throws(() => {ms932Encoder.encode("\u5232")}, {name:"Error",message:"EncodingError U+5232"});
r = r && ([...ms932Encoder.encode("刳")].join(",") === "153,138"); // U+5233
assert.throws(() => {ms932Encoder.encode("\u5234")}, {name:"Error",message:"EncodingError U+5234"});
assert.throws(() => {ms932Encoder.encode("\u5235")}, {name:"Error",message:"EncodingError U+5235"});
r = r && ([...ms932Encoder.encode("制刷券刹刺刻")].join(",") === "144,167,141,252,140,148,153,139,142,104,141,143"); // U+5236
assert.throws(() => {ms932Encoder.encode("\u523C")}, {name:"Error",message:"EncodingError U+523C"});
assert.throws(() => {ms932Encoder.encode("\u523D")}, {name:"Error",message:"EncodingError U+523D"});
assert.throws(() => {ms932Encoder.encode("\u523E")}, {name:"Error",message:"EncodingError U+523E"});
assert.throws(() => {ms932Encoder.encode("\u523F")}, {name:"Error",message:"EncodingError U+523F"});
assert.throws(() => {ms932Encoder.encode("\u5240")}, {name:"Error",message:"EncodingError U+5240"});
assert.throws(() => {ms932Encoder.encode("\u5241")}, {name:"Error",message:"EncodingError U+5241"});
assert.throws(() => {ms932Encoder.encode("\u5242")}, {name:"Error",message:"EncodingError U+5242"});
r = r && ([...ms932Encoder.encode("剃剄")].join(",") === "146,228,153,141"); // U+5243
assert.throws(() => {ms932Encoder.encode("\u5245")}, {name:"Error",message:"EncodingError U+5245"});
assert.throws(() => {ms932Encoder.encode("\u5246")}, {name:"Error",message:"EncodingError U+5246"});
r = r && ([...ms932Encoder.encode("則")].join(",") === "145,165"); // U+5247
assert.throws(() => {ms932Encoder.encode("\u5248")}, {name:"Error",message:"EncodingError U+5248"});
assert.throws(() => {ms932Encoder.encode("\u5249")}, {name:"Error",message:"EncodingError U+5249"});
r = r && ([...ms932Encoder.encode("削剋剌前")].join(",") === "141,237,153,142,153,143,145,79"); // U+524A
assert.throws(() => {ms932Encoder.encode("\u524E")}, {name:"Error",message:"EncodingError U+524E"});
r = r && ([...ms932Encoder.encode("剏")].join(",") === "153,140"); // U+524F
assert.throws(() => {ms932Encoder.encode("\u5250")}, {name:"Error",message:"EncodingError U+5250"});
assert.throws(() => {ms932Encoder.encode("\u5251")}, {name:"Error",message:"EncodingError U+5251"});
assert.throws(() => {ms932Encoder.encode("\u5252")}, {name:"Error",message:"EncodingError U+5252"});
assert.throws(() => {ms932Encoder.encode("\u5253")}, {name:"Error",message:"EncodingError U+5253"});
r = r && ([...ms932Encoder.encode("剔")].join(",") === "153,145"); // U+5254
assert.throws(() => {ms932Encoder.encode("\u5255")}, {name:"Error",message:"EncodingError U+5255"});
r = r && ([...ms932Encoder.encode("剖")].join(",") === "150,85"); // U+5256
assert.throws(() => {ms932Encoder.encode("\u5257")}, {name:"Error",message:"EncodingError U+5257"});
assert.throws(() => {ms932Encoder.encode("\u5258")}, {name:"Error",message:"EncodingError U+5258"});
assert.throws(() => {ms932Encoder.encode("\u5259")}, {name:"Error",message:"EncodingError U+5259"});
assert.throws(() => {ms932Encoder.encode("\u525A")}, {name:"Error",message:"EncodingError U+525A"});
r = r && ([...ms932Encoder.encode("剛")].join(",") === "141,132"); // U+525B
assert.throws(() => {ms932Encoder.encode("\u525C")}, {name:"Error",message:"EncodingError U+525C"});
assert.throws(() => {ms932Encoder.encode("\u525D")}, {name:"Error",message:"EncodingError U+525D"});
r = r && ([...ms932Encoder.encode("剞")].join(",") === "153,144"); // U+525E
assert.throws(() => {ms932Encoder.encode("\u525F")}, {name:"Error",message:"EncodingError U+525F"});
assert.throws(() => {ms932Encoder.encode("\u5260")}, {name:"Error",message:"EncodingError U+5260"});
assert.throws(() => {ms932Encoder.encode("\u5261")}, {name:"Error",message:"EncodingError U+5261"});
assert.throws(() => {ms932Encoder.encode("\u5262")}, {name:"Error",message:"EncodingError U+5262"});
r = r && ([...ms932Encoder.encode("剣剤剥")].join(",") === "140,149,141,220,148,141"); // U+5263
assert.throws(() => {ms932Encoder.encode("\u5266")}, {name:"Error",message:"EncodingError U+5266"});
assert.throws(() => {ms932Encoder.encode("\u5267")}, {name:"Error",message:"EncodingError U+5267"});
assert.throws(() => {ms932Encoder.encode("\u5268")}, {name:"Error",message:"EncodingError U+5268"});
r = r && ([...ms932Encoder.encode("剩剪")].join(",") === "153,148,153,146"); // U+5269
assert.throws(() => {ms932Encoder.encode("\u526B")}, {name:"Error",message:"EncodingError U+526B"});
assert.throws(() => {ms932Encoder.encode("\u526C")}, {name:"Error",message:"EncodingError U+526C"});
assert.throws(() => {ms932Encoder.encode("\u526D")}, {name:"Error",message:"EncodingError U+526D"});
assert.throws(() => {ms932Encoder.encode("\u526E")}, {name:"Error",message:"EncodingError U+526E"});
r = r && ([...ms932Encoder.encode("副剰剱割剳剴創")].join(",") === "149,155,143,232,153,155,138,132,153,149,153,147,145,110"); // U+526F
assert.throws(() => {ms932Encoder.encode("\u5276")}, {name:"Error",message:"EncodingError U+5276"});
assert.throws(() => {ms932Encoder.encode("\u5277")}, {name:"Error",message:"EncodingError U+5277"});
assert.throws(() => {ms932Encoder.encode("\u5278")}, {name:"Error",message:"EncodingError U+5278"});
assert.throws(() => {ms932Encoder.encode("\u5279")}, {name:"Error",message:"EncodingError U+5279"});
assert.throws(() => {ms932Encoder.encode("\u527A")}, {name:"Error",message:"EncodingError U+527A"});
assert.throws(() => {ms932Encoder.encode("\u527B")}, {name:"Error",message:"EncodingError U+527B"});
assert.throws(() => {ms932Encoder.encode("\u527C")}, {name:"Error",message:"EncodingError U+527C"});
r = r && ([...ms932Encoder.encode("剽")].join(",") === "153,151"); // U+527D
assert.throws(() => {ms932Encoder.encode("\u527E")}, {name:"Error",message:"EncodingError U+527E"});
r = r && ([...ms932Encoder.encode("剿")].join(",") === "153,150"); // U+527F
assert.throws(() => {ms932Encoder.encode("\u5280")}, {name:"Error",message:"EncodingError U+5280"});
assert.throws(() => {ms932Encoder.encode("\u5281")}, {name:"Error",message:"EncodingError U+5281"});
assert.throws(() => {ms932Encoder.encode("\u5282")}, {name:"Error",message:"EncodingError U+5282"});
r = r && ([...ms932Encoder.encode("劃")].join(",") === "138,99"); // U+5283
assert.throws(() => {ms932Encoder.encode("\u5284")}, {name:"Error",message:"EncodingError U+5284"});
assert.throws(() => {ms932Encoder.encode("\u5285")}, {name:"Error",message:"EncodingError U+5285"});
assert.throws(() => {ms932Encoder.encode("\u5286")}, {name:"Error",message:"EncodingError U+5286"});
r = r && ([...ms932Encoder.encode("劇劈劉")].join(",") === "140,128,153,156,151,171"); // U+5287
assert.throws(() => {ms932Encoder.encode("\u528A")}, {name:"Error",message:"EncodingError U+528A"});
assert.throws(() => {ms932Encoder.encode("\u528B")}, {name:"Error",message:"EncodingError U+528B"});
assert.throws(() => {ms932Encoder.encode("\u528C")}, {name:"Error",message:"EncodingError U+528C"});
r = r && ([...ms932Encoder.encode("劍")].join(",") === "153,152"); // U+528D
assert.throws(() => {ms932Encoder.encode("\u528E")}, {name:"Error",message:"EncodingError U+528E"});
assert.throws(() => {ms932Encoder.encode("\u528F")}, {name:"Error",message:"EncodingError U+528F"});
assert.throws(() => {ms932Encoder.encode("\u5290")}, {name:"Error",message:"EncodingError U+5290"});
r = r && ([...ms932Encoder.encode("劑劒")].join(",") === "153,157,153,154"); // U+5291
assert.throws(() => {ms932Encoder.encode("\u5293")}, {name:"Error",message:"EncodingError U+5293"});
r = r && ([...ms932Encoder.encode("劔")].join(",") === "153,153"); // U+5294
assert.throws(() => {ms932Encoder.encode("\u5295")}, {name:"Error",message:"EncodingError U+5295"});
assert.throws(() => {ms932Encoder.encode("\u5296")}, {name:"Error",message:"EncodingError U+5296"});
assert.throws(() => {ms932Encoder.encode("\u5297")}, {name:"Error",message:"EncodingError U+5297"});
assert.throws(() => {ms932Encoder.encode("\u5298")}, {name:"Error",message:"EncodingError U+5298"});
assert.throws(() => {ms932Encoder.encode("\u5299")}, {name:"Error",message:"EncodingError U+5299"});
assert.throws(() => {ms932Encoder.encode("\u529A")}, {name:"Error",message:"EncodingError U+529A"});
r = r && ([...ms932Encoder.encode("力劜")].join(",") === "151,205,250,133"); // U+529B
assert.throws(() => {ms932Encoder.encode("\u529D")}, {name:"Error",message:"EncodingError U+529D"});
assert.throws(() => {ms932Encoder.encode("\u529E")}, {name:"Error",message:"EncodingError U+529E"});
r = r && ([...ms932Encoder.encode("功加")].join(",") === "140,247,137,193"); // U+529F
assert.throws(() => {ms932Encoder.encode("\u52A1")}, {name:"Error",message:"EncodingError U+52A1"});
assert.throws(() => {ms932Encoder.encode("\u52A2")}, {name:"Error",message:"EncodingError U+52A2"});
r = r && ([...ms932Encoder.encode("劣")].join(",") === "151,242"); // U+52A3
assert.throws(() => {ms932Encoder.encode("\u52A4")}, {name:"Error",message:"EncodingError U+52A4"});
assert.throws(() => {ms932Encoder.encode("\u52A5")}, {name:"Error",message:"EncodingError U+52A5"});
r = r && ([...ms932Encoder.encode("劦")].join(",") === "250,134"); // U+52A6
assert.throws(() => {ms932Encoder.encode("\u52A7")}, {name:"Error",message:"EncodingError U+52A7"});
assert.throws(() => {ms932Encoder.encode("\u52A8")}, {name:"Error",message:"EncodingError U+52A8"});
r = r && ([...ms932Encoder.encode("助努劫劬劭")].join(",") === "143,149,147,119,141,133,153,160,153,161"); // U+52A9
assert.throws(() => {ms932Encoder.encode("\u52AE")}, {name:"Error",message:"EncodingError U+52AE"});
r = r && ([...ms932Encoder.encode("劯")].join(",") === "251,119"); // U+52AF
assert.throws(() => {ms932Encoder.encode("\u52B0")}, {name:"Error",message:"EncodingError U+52B0"});
r = r && ([...ms932Encoder.encode("励")].join(",") === "151,227"); // U+52B1
assert.throws(() => {ms932Encoder.encode("\u52B2")}, {name:"Error",message:"EncodingError U+52B2"});
assert.throws(() => {ms932Encoder.encode("\u52B3")}, {name:"Error",message:"EncodingError U+52B3"});
r = r && ([...ms932Encoder.encode("労劵")].join(",") === "152,74,153,163"); // U+52B4
assert.throws(() => {ms932Encoder.encode("\u52B6")}, {name:"Error",message:"EncodingError U+52B6"});
assert.throws(() => {ms932Encoder.encode("\u52B7")}, {name:"Error",message:"EncodingError U+52B7"});
assert.throws(() => {ms932Encoder.encode("\u52B8")}, {name:"Error",message:"EncodingError U+52B8"});
r = r && ([...ms932Encoder.encode("効")].join(",") === "140,248"); // U+52B9
assert.throws(() => {ms932Encoder.encode("\u52BA")}, {name:"Error",message:"EncodingError U+52BA"});
assert.throws(() => {ms932Encoder.encode("\u52BB")}, {name:"Error",message:"EncodingError U+52BB"});
r = r && ([...ms932Encoder.encode("劼")].join(",") === "153,162"); // U+52BC
assert.throws(() => {ms932Encoder.encode("\u52BD")}, {name:"Error",message:"EncodingError U+52BD"});
r = r && ([...ms932Encoder.encode("劾")].join(",") === "138,78"); // U+52BE
assert.throws(() => {ms932Encoder.encode("\u52BF")}, {name:"Error",message:"EncodingError U+52BF"});
r = r && ([...ms932Encoder.encode("勀勁")].join(",") === "250,135,153,164"); // U+52C0
assert.throws(() => {ms932Encoder.encode("\u52C2")}, {name:"Error",message:"EncodingError U+52C2"});
r = r && ([...ms932Encoder.encode("勃")].join(",") === "150,117"); // U+52C3
assert.throws(() => {ms932Encoder.encode("\u52C4")}, {name:"Error",message:"EncodingError U+52C4"});
r = r && ([...ms932Encoder.encode("勅")].join(",") === "146,186"); // U+52C5
assert.throws(() => {ms932Encoder.encode("\u52C6")}, {name:"Error",message:"EncodingError U+52C6"});
r = r && ([...ms932Encoder.encode("勇")].join(",") === "151,69"); // U+52C7
assert.throws(() => {ms932Encoder.encode("\u52C8")}, {name:"Error",message:"EncodingError U+52C8"});
r = r && ([...ms932Encoder.encode("勉")].join(",") === "149,215"); // U+52C9
assert.throws(() => {ms932Encoder.encode("\u52CA")}, {name:"Error",message:"EncodingError U+52CA"});
assert.throws(() => {ms932Encoder.encode("\u52CB")}, {name:"Error",message:"EncodingError U+52CB"});
assert.throws(() => {ms932Encoder.encode("\u52CC")}, {name:"Error",message:"EncodingError U+52CC"});
r = r && ([...ms932Encoder.encode("勍")].join(",") === "153,165"); // U+52CD
assert.throws(() => {ms932Encoder.encode("\u52CE")}, {name:"Error",message:"EncodingError U+52CE"});
assert.throws(() => {ms932Encoder.encode("\u52CF")}, {name:"Error",message:"EncodingError U+52CF"});
assert.throws(() => {ms932Encoder.encode("\u52D0")}, {name:"Error",message:"EncodingError U+52D0"});
assert.throws(() => {ms932Encoder.encode("\u52D1")}, {name:"Error",message:"EncodingError U+52D1"});
r = r && ([...ms932Encoder.encode("勒")].join(",") === "232,211"); // U+52D2
assert.throws(() => {ms932Encoder.encode("\u52D3")}, {name:"Error",message:"EncodingError U+52D3"});
assert.throws(() => {ms932Encoder.encode("\u52D4")}, {name:"Error",message:"EncodingError U+52D4"});
r = r && ([...ms932Encoder.encode("動")].join(",") === "147,174"); // U+52D5
assert.throws(() => {ms932Encoder.encode("\u52D6")}, {name:"Error",message:"EncodingError U+52D6"});
r = r && ([...ms932Encoder.encode("勗勘務")].join(",") === "153,166,138,168,150,177"); // U+52D7
assert.throws(() => {ms932Encoder.encode("\u52DA")}, {name:"Error",message:"EncodingError U+52DA"});
r = r && ([...ms932Encoder.encode("勛")].join(",") === "250,136"); // U+52DB
assert.throws(() => {ms932Encoder.encode("\u52DC")}, {name:"Error",message:"EncodingError U+52DC"});
r = r && ([...ms932Encoder.encode("勝勞募勠")].join(",") === "143,159,153,167,149,229,153,171"); // U+52DD
assert.throws(() => {ms932Encoder.encode("\u52E1")}, {name:"Error",message:"EncodingError U+52E1"});
r = r && ([...ms932Encoder.encode("勢勣勤")].join(",") === "144,168,153,168,139,206"); // U+52E2
assert.throws(() => {ms932Encoder.encode("\u52E5")}, {name:"Error",message:"EncodingError U+52E5"});
r = r && ([...ms932Encoder.encode("勦勧")].join(",") === "153,169,138,169"); // U+52E6
assert.throws(() => {ms932Encoder.encode("\u52E8")}, {name:"Error",message:"EncodingError U+52E8"});
assert.throws(() => {ms932Encoder.encode("\u52E9")}, {name:"Error",message:"EncodingError U+52E9"});
assert.throws(() => {ms932Encoder.encode("\u52EA")}, {name:"Error",message:"EncodingError U+52EA"});
assert.throws(() => {ms932Encoder.encode("\u52EB")}, {name:"Error",message:"EncodingError U+52EB"});
assert.throws(() => {ms932Encoder.encode("\u52EC")}, {name:"Error",message:"EncodingError U+52EC"});
assert.throws(() => {ms932Encoder.encode("\u52ED")}, {name:"Error",message:"EncodingError U+52ED"});
assert.throws(() => {ms932Encoder.encode("\u52EE")}, {name:"Error",message:"EncodingError U+52EE"});
assert.throws(() => {ms932Encoder.encode("\u52EF")}, {name:"Error",message:"EncodingError U+52EF"});
assert.throws(() => {ms932Encoder.encode("\u52F0")}, {name:"Error",message:"EncodingError U+52F0"});
assert.throws(() => {ms932Encoder.encode("\u52F1")}, {name:"Error",message:"EncodingError U+52F1"});
r = r && ([...ms932Encoder.encode("勲勳")].join(",") === "140,77,153,172"); // U+52F2
assert.throws(() => {ms932Encoder.encode("\u52F4")}, {name:"Error",message:"EncodingError U+52F4"});
r = r && ([...ms932Encoder.encode("勵")].join(",") === "153,173"); // U+52F5
assert.throws(() => {ms932Encoder.encode("\u52F6")}, {name:"Error",message:"EncodingError U+52F6"});
assert.throws(() => {ms932Encoder.encode("\u52F7")}, {name:"Error",message:"EncodingError U+52F7"});
r = r && ([...ms932Encoder.encode("勸勹勺")].join(",") === "153,174,153,175,142,217"); // U+52F8
assert.throws(() => {ms932Encoder.encode("\u52FB")}, {name:"Error",message:"EncodingError U+52FB"});
assert.throws(() => {ms932Encoder.encode("\u52FC")}, {name:"Error",message:"EncodingError U+52FC"});
assert.throws(() => {ms932Encoder.encode("\u52FD")}, {name:"Error",message:"EncodingError U+52FD"});
r = r && ([...ms932Encoder.encode("勾勿匀匁匂")].join(",") === "140,249,150,220,250,137,150,230,147,245"); // U+52FE
assert.throws(() => {ms932Encoder.encode("\u5303")}, {name:"Error",message:"EncodingError U+5303"});
assert.throws(() => {ms932Encoder.encode("\u5304")}, {name:"Error",message:"EncodingError U+5304"});
r = r && ([...ms932Encoder.encode("包匆匇匈")].join(",") === "149,239,153,176,250,138,153,177"); // U+5305
assert.throws(() => {ms932Encoder.encode("\u5309")}, {name:"Error",message:"EncodingError U+5309"});
assert.throws(() => {ms932Encoder.encode("\u530A")}, {name:"Error",message:"EncodingError U+530A"});
assert.throws(() => {ms932Encoder.encode("\u530B")}, {name:"Error",message:"EncodingError U+530B"});
assert.throws(() => {ms932Encoder.encode("\u530C")}, {name:"Error",message:"EncodingError U+530C"});
r = r && ([...ms932Encoder.encode("匍")].join(",") === "153,179"); // U+530D
assert.throws(() => {ms932Encoder.encode("\u530E")}, {name:"Error",message:"EncodingError U+530E"});
r = r && ([...ms932Encoder.encode("匏匐")].join(",") === "153,181,153,180"); // U+530F
assert.throws(() => {ms932Encoder.encode("\u5311")}, {name:"Error",message:"EncodingError U+5311"});
assert.throws(() => {ms932Encoder.encode("\u5312")}, {name:"Error",message:"EncodingError U+5312"});
assert.throws(() => {ms932Encoder.encode("\u5313")}, {name:"Error",message:"EncodingError U+5313"});
assert.throws(() => {ms932Encoder.encode("\u5314")}, {name:"Error",message:"EncodingError U+5314"});
r = r && ([...ms932Encoder.encode("匕化北")].join(",") === "153,182,137,187,150,107"); // U+5315
assert.throws(() => {ms932Encoder.encode("\u5318")}, {name:"Error",message:"EncodingError U+5318"});
r = r && ([...ms932Encoder.encode("匙匚")].join(",") === "141,250,153,183"); // U+5319
assert.throws(() => {ms932Encoder.encode("\u531B")}, {name:"Error",message:"EncodingError U+531B"});
assert.throws(() => {ms932Encoder.encode("\u531C")}, {name:"Error",message:"EncodingError U+531C"});
r = r && ([...ms932Encoder.encode("匝")].join(",") === "145,120"); // U+531D
assert.throws(() => {ms932Encoder.encode("\u531E")}, {name:"Error",message:"EncodingError U+531E"});
assert.throws(() => {ms932Encoder.encode("\u531F")}, {name:"Error",message:"EncodingError U+531F"});
r = r && ([...ms932Encoder.encode("匠匡")].join(",") === "143,160,139,167"); // U+5320
assert.throws(() => {ms932Encoder.encode("\u5322")}, {name:"Error",message:"EncodingError U+5322"});
r = r && ([...ms932Encoder.encode("匣匤")].join(",") === "153,184,250,139"); // U+5323
assert.throws(() => {ms932Encoder.encode("\u5325")}, {name:"Error",message:"EncodingError U+5325"});
assert.throws(() => {ms932Encoder.encode("\u5326")}, {name:"Error",message:"EncodingError U+5326"});
assert.throws(() => {ms932Encoder.encode("\u5327")}, {name:"Error",message:"EncodingError U+5327"});
assert.throws(() => {ms932Encoder.encode("\u5328")}, {name:"Error",message:"EncodingError U+5328"});
assert.throws(() => {ms932Encoder.encode("\u5329")}, {name:"Error",message:"EncodingError U+5329"});
r = r && ([...ms932Encoder.encode("匪")].join(",") === "148,217"); // U+532A
assert.throws(() => {ms932Encoder.encode("\u532B")}, {name:"Error",message:"EncodingError U+532B"});
assert.throws(() => {ms932Encoder.encode("\u532C")}, {name:"Error",message:"EncodingError U+532C"});
assert.throws(() => {ms932Encoder.encode("\u532D")}, {name:"Error",message:"EncodingError U+532D"});
assert.throws(() => {ms932Encoder.encode("\u532E")}, {name:"Error",message:"EncodingError U+532E"});
r = r && ([...ms932Encoder.encode("匯")].join(",") === "153,185"); // U+532F
assert.throws(() => {ms932Encoder.encode("\u5330")}, {name:"Error",message:"EncodingError U+5330"});
r = r && ([...ms932Encoder.encode("匱")].join(",") === "153,186"); // U+5331
assert.throws(() => {ms932Encoder.encode("\u5332")}, {name:"Error",message:"EncodingError U+5332"});
r = r && ([...ms932Encoder.encode("匳")].join(",") === "153,187"); // U+5333
assert.throws(() => {ms932Encoder.encode("\u5334")}, {name:"Error",message:"EncodingError U+5334"});
assert.throws(() => {ms932Encoder.encode("\u5335")}, {name:"Error",message:"EncodingError U+5335"});
assert.throws(() => {ms932Encoder.encode("\u5336")}, {name:"Error",message:"EncodingError U+5336"});
assert.throws(() => {ms932Encoder.encode("\u5337")}, {name:"Error",message:"EncodingError U+5337"});
r = r && ([...ms932Encoder.encode("匸匹区医")].join(",") === "153,188,149,67,139,230,136,227"); // U+5338
assert.throws(() => {ms932Encoder.encode("\u533C")}, {name:"Error",message:"EncodingError U+533C"});
assert.throws(() => {ms932Encoder.encode("\u533D")}, {name:"Error",message:"EncodingError U+533D"});
assert.throws(() => {ms932Encoder.encode("\u533E")}, {name:"Error",message:"EncodingError U+533E"});
r = r && ([...ms932Encoder.encode("匿區十")].join(",") === "147,189,153,189,143,92"); // U+533F
assert.throws(() => {ms932Encoder.encode("\u5342")}, {name:"Error",message:"EncodingError U+5342"});
r = r && ([...ms932Encoder.encode("千")].join(",") === "144,231"); // U+5343
assert.throws(() => {ms932Encoder.encode("\u5344")}, {name:"Error",message:"EncodingError U+5344"});
r = r && ([...ms932Encoder.encode("卅卆升午卉半")].join(",") === "153,191,153,190,143,161,140,223,153,193,148,188"); // U+5345
assert.throws(() => {ms932Encoder.encode("\u534B")}, {name:"Error",message:"EncodingError U+534B"});
assert.throws(() => {ms932Encoder.encode("\u534C")}, {name:"Error",message:"EncodingError U+534C"});
r = r && ([...ms932Encoder.encode("卍")].join(",") === "153,194"); // U+534D
assert.throws(() => {ms932Encoder.encode("\u534E")}, {name:"Error",message:"EncodingError U+534E"});
assert.throws(() => {ms932Encoder.encode("\u534F")}, {name:"Error",message:"EncodingError U+534F"});
assert.throws(() => {ms932Encoder.encode("\u5350")}, {name:"Error",message:"EncodingError U+5350"});
r = r && ([...ms932Encoder.encode("卑卒卓協")].join(",") === "148,218,145,178,145,236,139,166"); // U+5351
assert.throws(() => {ms932Encoder.encode("\u5355")}, {name:"Error",message:"EncodingError U+5355"});
assert.throws(() => {ms932Encoder.encode("\u5356")}, {name:"Error",message:"EncodingError U+5356"});
r = r && ([...ms932Encoder.encode("南単")].join(",") === "147,236,146,80"); // U+5357
assert.throws(() => {ms932Encoder.encode("\u5359")}, {name:"Error",message:"EncodingError U+5359"});
r = r && ([...ms932Encoder.encode("博")].join(",") === "148,142"); // U+535A
assert.throws(() => {ms932Encoder.encode("\u535B")}, {name:"Error",message:"EncodingError U+535B"});
r = r && ([...ms932Encoder.encode("卜")].join(",") === "150,109"); // U+535C
assert.throws(() => {ms932Encoder.encode("\u535D")}, {name:"Error",message:"EncodingError U+535D"});
r = r && ([...ms932Encoder.encode("卞")].join(",") === "153,196"); // U+535E
assert.throws(() => {ms932Encoder.encode("\u535F")}, {name:"Error",message:"EncodingError U+535F"});
r = r && ([...ms932Encoder.encode("占")].join(",") === "144,232"); // U+5360
assert.throws(() => {ms932Encoder.encode("\u5361")}, {name:"Error",message:"EncodingError U+5361"});
assert.throws(() => {ms932Encoder.encode("\u5362")}, {name:"Error",message:"EncodingError U+5362"});
assert.throws(() => {ms932Encoder.encode("\u5363")}, {name:"Error",message:"EncodingError U+5363"});
assert.throws(() => {ms932Encoder.encode("\u5364")}, {name:"Error",message:"EncodingError U+5364"});
assert.throws(() => {ms932Encoder.encode("\u5365")}, {name:"Error",message:"EncodingError U+5365"});
r = r && ([...ms932Encoder.encode("卦")].join(",") === "140,84"); // U+5366
assert.throws(() => {ms932Encoder.encode("\u5367")}, {name:"Error",message:"EncodingError U+5367"});
assert.throws(() => {ms932Encoder.encode("\u5368")}, {name:"Error",message:"EncodingError U+5368"});
r = r && ([...ms932Encoder.encode("卩")].join(",") === "153,197"); // U+5369
assert.throws(() => {ms932Encoder.encode("\u536A")}, {name:"Error",message:"EncodingError U+536A"});
assert.throws(() => {ms932Encoder.encode("\u536B")}, {name:"Error",message:"EncodingError U+536B"});
assert.throws(() => {ms932Encoder.encode("\u536C")}, {name:"Error",message:"EncodingError U+536C"});
assert.throws(() => {ms932Encoder.encode("\u536D")}, {name:"Error",message:"EncodingError U+536D"});
r = r && ([...ms932Encoder.encode("卮卯印危卲即却卵")].join(",") === "153,198,137,75,136,243,138,235,250,140,145,166,139,112,151,145"); // U+536E
assert.throws(() => {ms932Encoder.encode("\u5376")}, {name:"Error",message:"EncodingError U+5376"});
r = r && ([...ms932Encoder.encode("卷卸")].join(",") === "153,201,137,181"); // U+5377
assert.throws(() => {ms932Encoder.encode("\u5379")}, {name:"Error",message:"EncodingError U+5379"});
assert.throws(() => {ms932Encoder.encode("\u537A")}, {name:"Error",message:"EncodingError U+537A"});
r = r && ([...ms932Encoder.encode("卻")].join(",") === "153,200"); // U+537B
assert.throws(() => {ms932Encoder.encode("\u537C")}, {name:"Error",message:"EncodingError U+537C"});
assert.throws(() => {ms932Encoder.encode("\u537D")}, {name:"Error",message:"EncodingError U+537D"});
assert.throws(() => {ms932Encoder.encode("\u537E")}, {name:"Error",message:"EncodingError U+537E"});
r = r && ([...ms932Encoder.encode("卿")].join(",") === "139,168"); // U+537F
assert.throws(() => {ms932Encoder.encode("\u5380")}, {name:"Error",message:"EncodingError U+5380"});
assert.throws(() => {ms932Encoder.encode("\u5381")}, {name:"Error",message:"EncodingError U+5381"});
r = r && ([...ms932Encoder.encode("厂")].join(",") === "153,202"); // U+5382
assert.throws(() => {ms932Encoder.encode("\u5383")}, {name:"Error",message:"EncodingError U+5383"});
r = r && ([...ms932Encoder.encode("厄")].join(",") === "150,239"); // U+5384
assert.throws(() => {ms932Encoder.encode("\u5385")}, {name:"Error",message:"EncodingError U+5385"});
assert.throws(() => {ms932Encoder.encode("\u5386")}, {name:"Error",message:"EncodingError U+5386"});
assert.throws(() => {ms932Encoder.encode("\u5387")}, {name:"Error",message:"EncodingError U+5387"});
assert.throws(() => {ms932Encoder.encode("\u5388")}, {name:"Error",message:"EncodingError U+5388"});
assert.throws(() => {ms932Encoder.encode("\u5389")}, {name:"Error",message:"EncodingError U+5389"});
assert.throws(() => {ms932Encoder.encode("\u538A")}, {name:"Error",message:"EncodingError U+538A"});
assert.throws(() => {ms932Encoder.encode("\u538B")}, {name:"Error",message:"EncodingError U+538B"});
assert.throws(() => {ms932Encoder.encode("\u538C")}, {name:"Error",message:"EncodingError U+538C"});
assert.throws(() => {ms932Encoder.encode("\u538D")}, {name:"Error",message:"EncodingError U+538D"});
assert.throws(() => {ms932Encoder.encode("\u538E")}, {name:"Error",message:"EncodingError U+538E"});
assert.throws(() => {ms932Encoder.encode("\u538F")}, {name:"Error",message:"EncodingError U+538F"});
assert.throws(() => {ms932Encoder.encode("\u5390")}, {name:"Error",message:"EncodingError U+5390"});
assert.throws(() => {ms932Encoder.encode("\u5391")}, {name:"Error",message:"EncodingError U+5391"});
assert.throws(() => {ms932Encoder.encode("\u5392")}, {name:"Error",message:"EncodingError U+5392"});
r = r && ([...ms932Encoder.encode("厓")].join(",") === "250,141"); // U+5393
assert.throws(() => {ms932Encoder.encode("\u5394")}, {name:"Error",message:"EncodingError U+5394"});
assert.throws(() => {ms932Encoder.encode("\u5395")}, {name:"Error",message:"EncodingError U+5395"});
r = r && ([...ms932Encoder.encode("厖")].join(",") === "153,203"); // U+5396
assert.throws(() => {ms932Encoder.encode("\u5397")}, {name:"Error",message:"EncodingError U+5397"});
r = r && ([...ms932Encoder.encode("厘")].join(",") === "151,208"); // U+5398
assert.throws(() => {ms932Encoder.encode("\u5399")}, {name:"Error",message:"EncodingError U+5399"});
r = r && ([...ms932Encoder.encode("厚")].join(",") === "140,250"); // U+539A
assert.throws(() => {ms932Encoder.encode("\u539B")}, {name:"Error",message:"EncodingError U+539B"});
assert.throws(() => {ms932Encoder.encode("\u539C")}, {name:"Error",message:"EncodingError U+539C"});
assert.throws(() => {ms932Encoder.encode("\u539D")}, {name:"Error",message:"EncodingError U+539D"});
assert.throws(() => {ms932Encoder.encode("\u539E")}, {name:"Error",message:"EncodingError U+539E"});
r = r && ([...ms932Encoder.encode("原厠")].join(",") === "140,180,153,204"); // U+539F
assert.throws(() => {ms932Encoder.encode("\u53A1")}, {name:"Error",message:"EncodingError U+53A1"});
assert.throws(() => {ms932Encoder.encode("\u53A2")}, {name:"Error",message:"EncodingError U+53A2"});
assert.throws(() => {ms932Encoder.encode("\u53A3")}, {name:"Error",message:"EncodingError U+53A3"});
assert.throws(() => {ms932Encoder.encode("\u53A4")}, {name:"Error",message:"EncodingError U+53A4"});
r = r && ([...ms932Encoder.encode("厥厦")].join(",") === "153,206,153,205"); // U+53A5
assert.throws(() => {ms932Encoder.encode("\u53A7")}, {name:"Error",message:"EncodingError U+53A7"});
r = r && ([...ms932Encoder.encode("厨厩")].join(",") === "144,126,137,88"); // U+53A8
assert.throws(() => {ms932Encoder.encode("\u53AA")}, {name:"Error",message:"EncodingError U+53AA"});
assert.throws(() => {ms932Encoder.encode("\u53AB")}, {name:"Error",message:"EncodingError U+53AB"});
assert.throws(() => {ms932Encoder.encode("\u53AC")}, {name:"Error",message:"EncodingError U+53AC"});
r = r && ([...ms932Encoder.encode("厭厮")].join(",") === "137,125,153,207"); // U+53AD
assert.throws(() => {ms932Encoder.encode("\u53AF")}, {name:"Error",message:"EncodingError U+53AF"});
r = r && ([...ms932Encoder.encode("厰")].join(",") === "153,208"); // U+53B0
assert.throws(() => {ms932Encoder.encode("\u53B1")}, {name:"Error",message:"EncodingError U+53B1"});
r = r && ([...ms932Encoder.encode("厲厳")].join(",") === "250,142,140,181"); // U+53B2
assert.throws(() => {ms932Encoder.encode("\u53B4")}, {name:"Error",message:"EncodingError U+53B4"});
assert.throws(() => {ms932Encoder.encode("\u53B5")}, {name:"Error",message:"EncodingError U+53B5"});
r = r && ([...ms932Encoder.encode("厶")].join(",") === "153,209"); // U+53B6
assert.throws(() => {ms932Encoder.encode("\u53B7")}, {name:"Error",message:"EncodingError U+53B7"});
assert.throws(() => {ms932Encoder.encode("\u53B8")}, {name:"Error",message:"EncodingError U+53B8"});
assert.throws(() => {ms932Encoder.encode("\u53B9")}, {name:"Error",message:"EncodingError U+53B9"});
assert.throws(() => {ms932Encoder.encode("\u53BA")}, {name:"Error",message:"EncodingError U+53BA"});
r = r && ([...ms932Encoder.encode("去")].join(",") === "139,142"); // U+53BB
assert.throws(() => {ms932Encoder.encode("\u53BC")}, {name:"Error",message:"EncodingError U+53BC"});
assert.throws(() => {ms932Encoder.encode("\u53BD")}, {name:"Error",message:"EncodingError U+53BD"});
assert.throws(() => {ms932Encoder.encode("\u53BE")}, {name:"Error",message:"EncodingError U+53BE"});
assert.throws(() => {ms932Encoder.encode("\u53BF")}, {name:"Error",message:"EncodingError U+53BF"});
assert.throws(() => {ms932Encoder.encode("\u53C0")}, {name:"Error",message:"EncodingError U+53C0"});
assert.throws(() => {ms932Encoder.encode("\u53C1")}, {name:"Error",message:"EncodingError U+53C1"});
r = r && ([...ms932Encoder.encode("参參")].join(",") === "142,81,153,210"); // U+53C2
assert.throws(() => {ms932Encoder.encode("\u53C4")}, {name:"Error",message:"EncodingError U+53C4"});
assert.throws(() => {ms932Encoder.encode("\u53C5")}, {name:"Error",message:"EncodingError U+53C5"});
assert.throws(() => {ms932Encoder.encode("\u53C6")}, {name:"Error",message:"EncodingError U+53C6"});
assert.throws(() => {ms932Encoder.encode("\u53C7")}, {name:"Error",message:"EncodingError U+53C7"});
r = r && ([...ms932Encoder.encode("又叉及友双反収")].join(",") === "150,148,141,179,139,121,151,70,145,111,148,189,142,251"); // U+53C8
assert.throws(() => {ms932Encoder.encode("\u53CF")}, {name:"Error",message:"EncodingError U+53CF"});
assert.throws(() => {ms932Encoder.encode("\u53D0")}, {name:"Error",message:"EncodingError U+53D0"});
assert.throws(() => {ms932Encoder.encode("\u53D1")}, {name:"Error",message:"EncodingError U+53D1"});
assert.throws(() => {ms932Encoder.encode("\u53D2")}, {name:"Error",message:"EncodingError U+53D2"});
assert.throws(() => {ms932Encoder.encode("\u53D3")}, {name:"Error",message:"EncodingError U+53D3"});
r = r && ([...ms932Encoder.encode("叔")].join(",") === "143,102"); // U+53D4
assert.throws(() => {ms932Encoder.encode("\u53D5")}, {name:"Error",message:"EncodingError U+53D5"});
r = r && ([...ms932Encoder.encode("取受")].join(",") === "142,230,142,243"); // U+53D6
assert.throws(() => {ms932Encoder.encode("\u53D8")}, {name:"Error",message:"EncodingError U+53D8"});
r = r && ([...ms932Encoder.encode("叙")].join(",") === "143,150"); // U+53D9
assert.throws(() => {ms932Encoder.encode("\u53DA")}, {name:"Error",message:"EncodingError U+53DA"});
r = r && ([...ms932Encoder.encode("叛")].join(",") === "148,190"); // U+53DB
assert.throws(() => {ms932Encoder.encode("\u53DC")}, {name:"Error",message:"EncodingError U+53DC"});
r = r && ([...ms932Encoder.encode("叝")].join(",") === "250,143"); // U+53DD
assert.throws(() => {ms932Encoder.encode("\u53DE")}, {name:"Error",message:"EncodingError U+53DE"});
r = r && ([...ms932Encoder.encode("叟")].join(",") === "153,213"); // U+53DF
assert.throws(() => {ms932Encoder.encode("\u53E0")}, {name:"Error",message:"EncodingError U+53E0"});
r = r && ([...ms932Encoder.encode("叡叢口古句")].join(",") === "137,98,145,112,140,251,140,195,139,229"); // U+53E1
assert.throws(() => {ms932Encoder.encode("\u53E6")}, {name:"Error",message:"EncodingError U+53E6"});
assert.throws(() => {ms932Encoder.encode("\u53E7")}, {name:"Error",message:"EncodingError U+53E7"});
r = r && ([...ms932Encoder.encode("叨叩只叫召叭叮可台叱史右")].join(",") === "153,217,146,64,145,252,139,169,143,162,153,218,153,216,137,194,145,228,142,182,142,106,137,69"); // U+53E8
assert.throws(() => {ms932Encoder.encode("\u53F4")}, {name:"Error",message:"EncodingError U+53F4"});
assert.throws(() => {ms932Encoder.encode("\u53F5")}, {name:"Error",message:"EncodingError U+53F5"});
r = r && ([...ms932Encoder.encode("叶号司")].join(",") === "138,144,141,134,142,105"); // U+53F6
assert.throws(() => {ms932Encoder.encode("\u53F9")}, {name:"Error",message:"EncodingError U+53F9"});
r = r && ([...ms932Encoder.encode("叺")].join(",") === "153,219"); // U+53FA
assert.throws(() => {ms932Encoder.encode("\u53FB")}, {name:"Error",message:"EncodingError U+53FB"});
assert.throws(() => {ms932Encoder.encode("\u53FC")}, {name:"Error",message:"EncodingError U+53FC"});
assert.throws(() => {ms932Encoder.encode("\u53FD")}, {name:"Error",message:"EncodingError U+53FD"});
assert.throws(() => {ms932Encoder.encode("\u53FE")}, {name:"Error",message:"EncodingError U+53FE"});
assert.throws(() => {ms932Encoder.encode("\u53FF")}, {name:"Error",message:"EncodingError U+53FF"});

assert.strictEqual(r, true);

  });

});
