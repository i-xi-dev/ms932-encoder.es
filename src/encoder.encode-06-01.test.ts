import { expect } from '@esm-bundle/chai';
import { Ms932 } from "./index";

describe("Ms932.Encoder.prototype.encode 6", () => {

  it("encode(string) - U+5000-U+53FF", () => {
    const ms932Encoder = new Ms932.Encoder({fatal:true});

    let r = true;
expect(() => {ms932Encoder.encode("\u5000")}).to.throw(Error, "EncodingError U+5000");
expect(() => {ms932Encoder.encode("\u5001")}).to.throw(Error, "EncodingError U+5001");
expect(() => {ms932Encoder.encode("\u5002")}).to.throw(Error, "EncodingError U+5002");
expect(() => {ms932Encoder.encode("\u5003")}).to.throw(Error, "EncodingError U+5003");
expect(() => {ms932Encoder.encode("\u5004")}).to.throw(Error, "EncodingError U+5004");
r = r && ([...ms932Encoder.encode("倅倆")].join(",") === "152,228,152,237"); // U+5005
expect(() => {ms932Encoder.encode("\u5007")}).to.throw(Error, "EncodingError U+5007");
expect(() => {ms932Encoder.encode("\u5008")}).to.throw(Error, "EncodingError U+5008");
r = r && ([...ms932Encoder.encode("倉")].join(",") === "145,113"); // U+5009
expect(() => {ms932Encoder.encode("\u500A")}).to.throw(Error, "EncodingError U+500A");
r = r && ([...ms932Encoder.encode("個")].join(",") === "140,194"); // U+500B
expect(() => {ms932Encoder.encode("\u500C")}).to.throw(Error, "EncodingError U+500C");
r = r && ([...ms932Encoder.encode("倍")].join(",") === "148,123"); // U+500D
expect(() => {ms932Encoder.encode("\u500E")}).to.throw(Error, "EncodingError U+500E");
r = r && ([...ms932Encoder.encode("倏")].join(",") === "224,197"); // U+500F
expect(() => {ms932Encoder.encode("\u5010")}).to.throw(Error, "EncodingError U+5010");
r = r && ([...ms932Encoder.encode("們倒")].join(",") === "152,236,147,124"); // U+5011
expect(() => {ms932Encoder.encode("\u5013")}).to.throw(Error, "EncodingError U+5013");
r = r && ([...ms932Encoder.encode("倔")].join(",") === "152,225"); // U+5014
expect(() => {ms932Encoder.encode("\u5015")}).to.throw(Error, "EncodingError U+5015");
r = r && ([...ms932Encoder.encode("倖")].join(",") === "140,244"); // U+5016
expect(() => {ms932Encoder.encode("\u5017")}).to.throw(Error, "EncodingError U+5017");
expect(() => {ms932Encoder.encode("\u5018")}).to.throw(Error, "EncodingError U+5018");
r = r && ([...ms932Encoder.encode("候倚")].join(",") === "140,243,152,223"); // U+5019
expect(() => {ms932Encoder.encode("\u501B")}).to.throw(Error, "EncodingError U+501B");
expect(() => {ms932Encoder.encode("\u501C")}).to.throw(Error, "EncodingError U+501C");
expect(() => {ms932Encoder.encode("\u501D")}).to.throw(Error, "EncodingError U+501D");
r = r && ([...ms932Encoder.encode("倞借")].join(",") === "250,119,142,216"); // U+501E
expect(() => {ms932Encoder.encode("\u5020")}).to.throw(Error, "EncodingError U+5020");
r = r && ([...ms932Encoder.encode("倡倢倣値倥倦")].join(",") === "152,231,250,117,149,237,146,108,152,227,140,145"); // U+5021
expect(() => {ms932Encoder.encode("\u5027")}).to.throw(Error, "EncodingError U+5027");
r = r && ([...ms932Encoder.encode("倨倩倪倫倬倭")].join(",") === "152,224,152,232,152,226,151,207,152,233,152,96"); // U+5028
expect(() => {ms932Encoder.encode("\u502E")}).to.throw(Error, "EncodingError U+502E");
expect(() => {ms932Encoder.encode("\u502F")}).to.throw(Error, "EncodingError U+502F");
expect(() => {ms932Encoder.encode("\u5030")}).to.throw(Error, "EncodingError U+5030");
expect(() => {ms932Encoder.encode("\u5031")}).to.throw(Error, "EncodingError U+5031");
expect(() => {ms932Encoder.encode("\u5032")}).to.throw(Error, "EncodingError U+5032");
expect(() => {ms932Encoder.encode("\u5033")}).to.throw(Error, "EncodingError U+5033");
expect(() => {ms932Encoder.encode("\u5034")}).to.throw(Error, "EncodingError U+5034");
expect(() => {ms932Encoder.encode("\u5035")}).to.throw(Error, "EncodingError U+5035");
r = r && ([...ms932Encoder.encode("倶")].join(",") === "139,228"); // U+5036
expect(() => {ms932Encoder.encode("\u5037")}).to.throw(Error, "EncodingError U+5037");
expect(() => {ms932Encoder.encode("\u5038")}).to.throw(Error, "EncodingError U+5038");
r = r && ([...ms932Encoder.encode("倹")].join(",") === "140,144"); // U+5039
expect(() => {ms932Encoder.encode("\u503A")}).to.throw(Error, "EncodingError U+503A");
expect(() => {ms932Encoder.encode("\u503B")}).to.throw(Error, "EncodingError U+503B");
expect(() => {ms932Encoder.encode("\u503C")}).to.throw(Error, "EncodingError U+503C");
expect(() => {ms932Encoder.encode("\u503D")}).to.throw(Error, "EncodingError U+503D");
expect(() => {ms932Encoder.encode("\u503E")}).to.throw(Error, "EncodingError U+503E");
expect(() => {ms932Encoder.encode("\u503F")}).to.throw(Error, "EncodingError U+503F");
r = r && ([...ms932Encoder.encode("偀")].join(",") === "250,116"); // U+5040
expect(() => {ms932Encoder.encode("\u5041")}).to.throw(Error, "EncodingError U+5041");
r = r && ([...ms932Encoder.encode("偂偃")].join(",") === "250,122,152,238"); // U+5042
expect(() => {ms932Encoder.encode("\u5044")}).to.throw(Error, "EncodingError U+5044");
expect(() => {ms932Encoder.encode("\u5045")}).to.throw(Error, "EncodingError U+5045");
r = r && ([...ms932Encoder.encode("偆假偈偉")].join(",") === "250,120,152,239,152,243,136,204"); // U+5046
expect(() => {ms932Encoder.encode("\u504A")}).to.throw(Error, "EncodingError U+504A");
expect(() => {ms932Encoder.encode("\u504B")}).to.throw(Error, "EncodingError U+504B");
expect(() => {ms932Encoder.encode("\u504C")}).to.throw(Error, "EncodingError U+504C");
expect(() => {ms932Encoder.encode("\u504D")}).to.throw(Error, "EncodingError U+504D");
expect(() => {ms932Encoder.encode("\u504E")}).to.throw(Error, "EncodingError U+504E");
r = r && ([...ms932Encoder.encode("偏偐")].join(",") === "149,206,152,242"); // U+504F
expect(() => {ms932Encoder.encode("\u5051")}).to.throw(Error, "EncodingError U+5051");
expect(() => {ms932Encoder.encode("\u5052")}).to.throw(Error, "EncodingError U+5052");
expect(() => {ms932Encoder.encode("\u5053")}).to.throw(Error, "EncodingError U+5053");
expect(() => {ms932Encoder.encode("\u5054")}).to.throw(Error, "EncodingError U+5054");
r = r && ([...ms932Encoder.encode("偕偖")].join(",") === "152,241,152,245"); // U+5055
expect(() => {ms932Encoder.encode("\u5057")}).to.throw(Error, "EncodingError U+5057");
expect(() => {ms932Encoder.encode("\u5058")}).to.throw(Error, "EncodingError U+5058");
expect(() => {ms932Encoder.encode("\u5059")}).to.throw(Error, "EncodingError U+5059");
r = r && ([...ms932Encoder.encode("做")].join(",") === "152,244"); // U+505A
expect(() => {ms932Encoder.encode("\u505B")}).to.throw(Error, "EncodingError U+505B");
r = r && ([...ms932Encoder.encode("停")].join(",") === "146,226"); // U+505C
expect(() => {ms932Encoder.encode("\u505D")}).to.throw(Error, "EncodingError U+505D");
expect(() => {ms932Encoder.encode("\u505E")}).to.throw(Error, "EncodingError U+505E");
expect(() => {ms932Encoder.encode("\u505F")}).to.throw(Error, "EncodingError U+505F");
expect(() => {ms932Encoder.encode("\u5060")}).to.throw(Error, "EncodingError U+5060");
expect(() => {ms932Encoder.encode("\u5061")}).to.throw(Error, "EncodingError U+5061");
expect(() => {ms932Encoder.encode("\u5062")}).to.throw(Error, "EncodingError U+5062");
expect(() => {ms932Encoder.encode("\u5063")}).to.throw(Error, "EncodingError U+5063");
expect(() => {ms932Encoder.encode("\u5064")}).to.throw(Error, "EncodingError U+5064");
r = r && ([...ms932Encoder.encode("健")].join(",") === "140,146"); // U+5065
expect(() => {ms932Encoder.encode("\u5066")}).to.throw(Error, "EncodingError U+5066");
expect(() => {ms932Encoder.encode("\u5067")}).to.throw(Error, "EncodingError U+5067");
expect(() => {ms932Encoder.encode("\u5068")}).to.throw(Error, "EncodingError U+5068");
expect(() => {ms932Encoder.encode("\u5069")}).to.throw(Error, "EncodingError U+5069");
expect(() => {ms932Encoder.encode("\u506A")}).to.throw(Error, "EncodingError U+506A");
expect(() => {ms932Encoder.encode("\u506B")}).to.throw(Error, "EncodingError U+506B");
r = r && ([...ms932Encoder.encode("偬")].join(",") === "152,246"); // U+506C
expect(() => {ms932Encoder.encode("\u506D")}).to.throw(Error, "EncodingError U+506D");
expect(() => {ms932Encoder.encode("\u506E")}).to.throw(Error, "EncodingError U+506E");
expect(() => {ms932Encoder.encode("\u506F")}).to.throw(Error, "EncodingError U+506F");
r = r && ([...ms932Encoder.encode("偰")].join(",") === "250,121"); // U+5070
expect(() => {ms932Encoder.encode("\u5071")}).to.throw(Error, "EncodingError U+5071");
r = r && ([...ms932Encoder.encode("偲")].join(",") === "142,195"); // U+5072
expect(() => {ms932Encoder.encode("\u5073")}).to.throw(Error, "EncodingError U+5073");
r = r && ([...ms932Encoder.encode("側偵偶")].join(",") === "145,164,146,227,139,244"); // U+5074
expect(() => {ms932Encoder.encode("\u5077")}).to.throw(Error, "EncodingError U+5077");
r = r && ([...ms932Encoder.encode("偸")].join(",") === "152,247"); // U+5078
expect(() => {ms932Encoder.encode("\u5079")}).to.throw(Error, "EncodingError U+5079");
expect(() => {ms932Encoder.encode("\u507A")}).to.throw(Error, "EncodingError U+507A");
expect(() => {ms932Encoder.encode("\u507B")}).to.throw(Error, "EncodingError U+507B");
expect(() => {ms932Encoder.encode("\u507C")}).to.throw(Error, "EncodingError U+507C");
r = r && ([...ms932Encoder.encode("偽")].join(",") === "139,85"); // U+507D
expect(() => {ms932Encoder.encode("\u507E")}).to.throw(Error, "EncodingError U+507E");
expect(() => {ms932Encoder.encode("\u507F")}).to.throw(Error, "EncodingError U+507F");
r = r && ([...ms932Encoder.encode("傀")].join(",") === "152,248"); // U+5080
expect(() => {ms932Encoder.encode("\u5081")}).to.throw(Error, "EncodingError U+5081");
expect(() => {ms932Encoder.encode("\u5082")}).to.throw(Error, "EncodingError U+5082");
expect(() => {ms932Encoder.encode("\u5083")}).to.throw(Error, "EncodingError U+5083");
expect(() => {ms932Encoder.encode("\u5084")}).to.throw(Error, "EncodingError U+5084");
r = r && ([...ms932Encoder.encode("傅")].join(",") === "152,250"); // U+5085
expect(() => {ms932Encoder.encode("\u5086")}).to.throw(Error, "EncodingError U+5086");
expect(() => {ms932Encoder.encode("\u5087")}).to.throw(Error, "EncodingError U+5087");
expect(() => {ms932Encoder.encode("\u5088")}).to.throw(Error, "EncodingError U+5088");
expect(() => {ms932Encoder.encode("\u5089")}).to.throw(Error, "EncodingError U+5089");
expect(() => {ms932Encoder.encode("\u508A")}).to.throw(Error, "EncodingError U+508A");
expect(() => {ms932Encoder.encode("\u508B")}).to.throw(Error, "EncodingError U+508B");
expect(() => {ms932Encoder.encode("\u508C")}).to.throw(Error, "EncodingError U+508C");
r = r && ([...ms932Encoder.encode("傍")].join(",") === "150,84"); // U+508D
expect(() => {ms932Encoder.encode("\u508E")}).to.throw(Error, "EncodingError U+508E");
expect(() => {ms932Encoder.encode("\u508F")}).to.throw(Error, "EncodingError U+508F");
expect(() => {ms932Encoder.encode("\u5090")}).to.throw(Error, "EncodingError U+5090");
r = r && ([...ms932Encoder.encode("傑")].join(",") === "140,134"); // U+5091
expect(() => {ms932Encoder.encode("\u5092")}).to.throw(Error, "EncodingError U+5092");
expect(() => {ms932Encoder.encode("\u5093")}).to.throw(Error, "EncodingError U+5093");
r = r && ([...ms932Encoder.encode("傔")].join(",") === "250,123"); // U+5094
expect(() => {ms932Encoder.encode("\u5095")}).to.throw(Error, "EncodingError U+5095");
expect(() => {ms932Encoder.encode("\u5096")}).to.throw(Error, "EncodingError U+5096");
expect(() => {ms932Encoder.encode("\u5097")}).to.throw(Error, "EncodingError U+5097");
r = r && ([...ms932Encoder.encode("傘備傚")].join(",") === "142,80,148,245,152,249"); // U+5098
expect(() => {ms932Encoder.encode("\u509B")}).to.throw(Error, "EncodingError U+509B");
expect(() => {ms932Encoder.encode("\u509C")}).to.throw(Error, "EncodingError U+509C");
expect(() => {ms932Encoder.encode("\u509D")}).to.throw(Error, "EncodingError U+509D");
expect(() => {ms932Encoder.encode("\u509E")}).to.throw(Error, "EncodingError U+509E");
expect(() => {ms932Encoder.encode("\u509F")}).to.throw(Error, "EncodingError U+509F");
expect(() => {ms932Encoder.encode("\u50A0")}).to.throw(Error, "EncodingError U+50A0");
expect(() => {ms932Encoder.encode("\u50A1")}).to.throw(Error, "EncodingError U+50A1");
expect(() => {ms932Encoder.encode("\u50A2")}).to.throw(Error, "EncodingError U+50A2");
expect(() => {ms932Encoder.encode("\u50A3")}).to.throw(Error, "EncodingError U+50A3");
expect(() => {ms932Encoder.encode("\u50A4")}).to.throw(Error, "EncodingError U+50A4");
expect(() => {ms932Encoder.encode("\u50A5")}).to.throw(Error, "EncodingError U+50A5");
expect(() => {ms932Encoder.encode("\u50A6")}).to.throw(Error, "EncodingError U+50A6");
expect(() => {ms932Encoder.encode("\u50A7")}).to.throw(Error, "EncodingError U+50A7");
expect(() => {ms932Encoder.encode("\u50A8")}).to.throw(Error, "EncodingError U+50A8");
expect(() => {ms932Encoder.encode("\u50A9")}).to.throw(Error, "EncodingError U+50A9");
expect(() => {ms932Encoder.encode("\u50AA")}).to.throw(Error, "EncodingError U+50AA");
expect(() => {ms932Encoder.encode("\u50AB")}).to.throw(Error, "EncodingError U+50AB");
r = r && ([...ms932Encoder.encode("催傭")].join(",") === "141,195,151,98"); // U+50AC
expect(() => {ms932Encoder.encode("\u50AE")}).to.throw(Error, "EncodingError U+50AE");
expect(() => {ms932Encoder.encode("\u50AF")}).to.throw(Error, "EncodingError U+50AF");
expect(() => {ms932Encoder.encode("\u50B0")}).to.throw(Error, "EncodingError U+50B0");
expect(() => {ms932Encoder.encode("\u50B1")}).to.throw(Error, "EncodingError U+50B1");
r = r && ([...ms932Encoder.encode("傲傳傴債")].join(",") === "152,252,153,66,152,251,141,194"); // U+50B2
expect(() => {ms932Encoder.encode("\u50B6")}).to.throw(Error, "EncodingError U+50B6");
r = r && ([...ms932Encoder.encode("傷")].join(",") === "143,157"); // U+50B7
expect(() => {ms932Encoder.encode("\u50B8")}).to.throw(Error, "EncodingError U+50B8");
expect(() => {ms932Encoder.encode("\u50B9")}).to.throw(Error, "EncodingError U+50B9");
expect(() => {ms932Encoder.encode("\u50BA")}).to.throw(Error, "EncodingError U+50BA");
expect(() => {ms932Encoder.encode("\u50BB")}).to.throw(Error, "EncodingError U+50BB");
expect(() => {ms932Encoder.encode("\u50BC")}).to.throw(Error, "EncodingError U+50BC");
expect(() => {ms932Encoder.encode("\u50BD")}).to.throw(Error, "EncodingError U+50BD");
r = r && ([...ms932Encoder.encode("傾")].join(",") === "140,88"); // U+50BE
expect(() => {ms932Encoder.encode("\u50BF")}).to.throw(Error, "EncodingError U+50BF");
expect(() => {ms932Encoder.encode("\u50C0")}).to.throw(Error, "EncodingError U+50C0");
expect(() => {ms932Encoder.encode("\u50C1")}).to.throw(Error, "EncodingError U+50C1");
r = r && ([...ms932Encoder.encode("僂")].join(",") === "153,67"); // U+50C2
expect(() => {ms932Encoder.encode("\u50C3")}).to.throw(Error, "EncodingError U+50C3");
expect(() => {ms932Encoder.encode("\u50C4")}).to.throw(Error, "EncodingError U+50C4");
r = r && ([...ms932Encoder.encode("僅")].join(",") === "139,205"); // U+50C5
expect(() => {ms932Encoder.encode("\u50C6")}).to.throw(Error, "EncodingError U+50C6");
expect(() => {ms932Encoder.encode("\u50C7")}).to.throw(Error, "EncodingError U+50C7");
expect(() => {ms932Encoder.encode("\u50C8")}).to.throw(Error, "EncodingError U+50C8");
r = r && ([...ms932Encoder.encode("僉僊")].join(",") === "153,64,153,65"); // U+50C9
expect(() => {ms932Encoder.encode("\u50CB")}).to.throw(Error, "EncodingError U+50CB");
expect(() => {ms932Encoder.encode("\u50CC")}).to.throw(Error, "EncodingError U+50CC");
r = r && ([...ms932Encoder.encode("働")].join(",") === "147,173"); // U+50CD
expect(() => {ms932Encoder.encode("\u50CE")}).to.throw(Error, "EncodingError U+50CE");
r = r && ([...ms932Encoder.encode("像")].join(",") === "145,156"); // U+50CF
expect(() => {ms932Encoder.encode("\u50D0")}).to.throw(Error, "EncodingError U+50D0");
r = r && ([...ms932Encoder.encode("僑")].join(",") === "139,161"); // U+50D1
expect(() => {ms932Encoder.encode("\u50D2")}).to.throw(Error, "EncodingError U+50D2");
expect(() => {ms932Encoder.encode("\u50D3")}).to.throw(Error, "EncodingError U+50D3");
expect(() => {ms932Encoder.encode("\u50D4")}).to.throw(Error, "EncodingError U+50D4");
r = r && ([...ms932Encoder.encode("僕僖")].join(",") === "150,108,153,68"); // U+50D5
expect(() => {ms932Encoder.encode("\u50D7")}).to.throw(Error, "EncodingError U+50D7");
r = r && ([...ms932Encoder.encode("僘")].join(",") === "250,125"); // U+50D8
expect(() => {ms932Encoder.encode("\u50D9")}).to.throw(Error, "EncodingError U+50D9");
r = r && ([...ms932Encoder.encode("僚")].join(",") === "151,187"); // U+50DA
expect(() => {ms932Encoder.encode("\u50DB")}).to.throw(Error, "EncodingError U+50DB");
expect(() => {ms932Encoder.encode("\u50DC")}).to.throw(Error, "EncodingError U+50DC");
expect(() => {ms932Encoder.encode("\u50DD")}).to.throw(Error, "EncodingError U+50DD");
r = r && ([...ms932Encoder.encode("僞")].join(",") === "153,69"); // U+50DE
expect(() => {ms932Encoder.encode("\u50DF")}).to.throw(Error, "EncodingError U+50DF");
expect(() => {ms932Encoder.encode("\u50E0")}).to.throw(Error, "EncodingError U+50E0");
expect(() => {ms932Encoder.encode("\u50E1")}).to.throw(Error, "EncodingError U+50E1");
expect(() => {ms932Encoder.encode("\u50E2")}).to.throw(Error, "EncodingError U+50E2");
r = r && ([...ms932Encoder.encode("僣")].join(",") === "153,72"); // U+50E3
expect(() => {ms932Encoder.encode("\u50E4")}).to.throw(Error, "EncodingError U+50E4");
r = r && ([...ms932Encoder.encode("僥")].join(",") === "153,70"); // U+50E5
expect(() => {ms932Encoder.encode("\u50E6")}).to.throw(Error, "EncodingError U+50E6");
r = r && ([...ms932Encoder.encode("僧")].join(",") === "145,109"); // U+50E7
expect(() => {ms932Encoder.encode("\u50E8")}).to.throw(Error, "EncodingError U+50E8");
expect(() => {ms932Encoder.encode("\u50E9")}).to.throw(Error, "EncodingError U+50E9");
expect(() => {ms932Encoder.encode("\u50EA")}).to.throw(Error, "EncodingError U+50EA");
expect(() => {ms932Encoder.encode("\u50EB")}).to.throw(Error, "EncodingError U+50EB");
expect(() => {ms932Encoder.encode("\u50EC")}).to.throw(Error, "EncodingError U+50EC");
r = r && ([...ms932Encoder.encode("僭僮")].join(",") === "153,71,153,73"); // U+50ED
expect(() => {ms932Encoder.encode("\u50EF")}).to.throw(Error, "EncodingError U+50EF");
expect(() => {ms932Encoder.encode("\u50F0")}).to.throw(Error, "EncodingError U+50F0");
expect(() => {ms932Encoder.encode("\u50F1")}).to.throw(Error, "EncodingError U+50F1");
expect(() => {ms932Encoder.encode("\u50F2")}).to.throw(Error, "EncodingError U+50F2");
expect(() => {ms932Encoder.encode("\u50F3")}).to.throw(Error, "EncodingError U+50F3");
r = r && ([...ms932Encoder.encode("僴僵")].join(",") === "250,124,153,75"); // U+50F4
expect(() => {ms932Encoder.encode("\u50F6")}).to.throw(Error, "EncodingError U+50F6");
expect(() => {ms932Encoder.encode("\u50F7")}).to.throw(Error, "EncodingError U+50F7");
expect(() => {ms932Encoder.encode("\u50F8")}).to.throw(Error, "EncodingError U+50F8");
r = r && ([...ms932Encoder.encode("價")].join(",") === "153,74"); // U+50F9
expect(() => {ms932Encoder.encode("\u50FA")}).to.throw(Error, "EncodingError U+50FA");
r = r && ([...ms932Encoder.encode("僻")].join(",") === "149,198"); // U+50FB
expect(() => {ms932Encoder.encode("\u50FC")}).to.throw(Error, "EncodingError U+50FC");
expect(() => {ms932Encoder.encode("\u50FD")}).to.throw(Error, "EncodingError U+50FD");
expect(() => {ms932Encoder.encode("\u50FE")}).to.throw(Error, "EncodingError U+50FE");
expect(() => {ms932Encoder.encode("\u50FF")}).to.throw(Error, "EncodingError U+50FF");
r = r && ([...ms932Encoder.encode("儀儁儂")].join(",") === "139,86,153,77,153,78"); // U+5100
expect(() => {ms932Encoder.encode("\u5103")}).to.throw(Error, "EncodingError U+5103");
r = r && ([...ms932Encoder.encode("億")].join(",") === "137,173"); // U+5104
expect(() => {ms932Encoder.encode("\u5105")}).to.throw(Error, "EncodingError U+5105");
expect(() => {ms932Encoder.encode("\u5106")}).to.throw(Error, "EncodingError U+5106");
expect(() => {ms932Encoder.encode("\u5107")}).to.throw(Error, "EncodingError U+5107");
expect(() => {ms932Encoder.encode("\u5108")}).to.throw(Error, "EncodingError U+5108");
r = r && ([...ms932Encoder.encode("儉")].join(",") === "153,76"); // U+5109
expect(() => {ms932Encoder.encode("\u510A")}).to.throw(Error, "EncodingError U+510A");
expect(() => {ms932Encoder.encode("\u510B")}).to.throw(Error, "EncodingError U+510B");
expect(() => {ms932Encoder.encode("\u510C")}).to.throw(Error, "EncodingError U+510C");
expect(() => {ms932Encoder.encode("\u510D")}).to.throw(Error, "EncodingError U+510D");
expect(() => {ms932Encoder.encode("\u510E")}).to.throw(Error, "EncodingError U+510E");
expect(() => {ms932Encoder.encode("\u510F")}).to.throw(Error, "EncodingError U+510F");
expect(() => {ms932Encoder.encode("\u5110")}).to.throw(Error, "EncodingError U+5110");
expect(() => {ms932Encoder.encode("\u5111")}).to.throw(Error, "EncodingError U+5111");
r = r && ([...ms932Encoder.encode("儒")].join(",") === "142,242"); // U+5112
expect(() => {ms932Encoder.encode("\u5113")}).to.throw(Error, "EncodingError U+5113");
r = r && ([...ms932Encoder.encode("儔儕儖")].join(",") === "153,81,153,80,153,79"); // U+5114
expect(() => {ms932Encoder.encode("\u5117")}).to.throw(Error, "EncodingError U+5117");
r = r && ([...ms932Encoder.encode("儘")].join(",") === "152,212"); // U+5118
expect(() => {ms932Encoder.encode("\u5119")}).to.throw(Error, "EncodingError U+5119");
r = r && ([...ms932Encoder.encode("儚")].join(",") === "153,82"); // U+511A
expect(() => {ms932Encoder.encode("\u511B")}).to.throw(Error, "EncodingError U+511B");
expect(() => {ms932Encoder.encode("\u511C")}).to.throw(Error, "EncodingError U+511C");
expect(() => {ms932Encoder.encode("\u511D")}).to.throw(Error, "EncodingError U+511D");
expect(() => {ms932Encoder.encode("\u511E")}).to.throw(Error, "EncodingError U+511E");
r = r && ([...ms932Encoder.encode("償")].join(",") === "143,158"); // U+511F
expect(() => {ms932Encoder.encode("\u5120")}).to.throw(Error, "EncodingError U+5120");
r = r && ([...ms932Encoder.encode("儡")].join(",") === "153,83"); // U+5121
expect(() => {ms932Encoder.encode("\u5122")}).to.throw(Error, "EncodingError U+5122");
expect(() => {ms932Encoder.encode("\u5123")}).to.throw(Error, "EncodingError U+5123");
expect(() => {ms932Encoder.encode("\u5124")}).to.throw(Error, "EncodingError U+5124");
expect(() => {ms932Encoder.encode("\u5125")}).to.throw(Error, "EncodingError U+5125");
expect(() => {ms932Encoder.encode("\u5126")}).to.throw(Error, "EncodingError U+5126");
expect(() => {ms932Encoder.encode("\u5127")}).to.throw(Error, "EncodingError U+5127");
expect(() => {ms932Encoder.encode("\u5128")}).to.throw(Error, "EncodingError U+5128");
expect(() => {ms932Encoder.encode("\u5129")}).to.throw(Error, "EncodingError U+5129");
r = r && ([...ms932Encoder.encode("優")].join(",") === "151,68"); // U+512A
expect(() => {ms932Encoder.encode("\u512B")}).to.throw(Error, "EncodingError U+512B");
expect(() => {ms932Encoder.encode("\u512C")}).to.throw(Error, "EncodingError U+512C");
expect(() => {ms932Encoder.encode("\u512D")}).to.throw(Error, "EncodingError U+512D");
expect(() => {ms932Encoder.encode("\u512E")}).to.throw(Error, "EncodingError U+512E");
expect(() => {ms932Encoder.encode("\u512F")}).to.throw(Error, "EncodingError U+512F");
expect(() => {ms932Encoder.encode("\u5130")}).to.throw(Error, "EncodingError U+5130");
expect(() => {ms932Encoder.encode("\u5131")}).to.throw(Error, "EncodingError U+5131");
r = r && ([...ms932Encoder.encode("儲")].join(",") === "150,215"); // U+5132
expect(() => {ms932Encoder.encode("\u5133")}).to.throw(Error, "EncodingError U+5133");
expect(() => {ms932Encoder.encode("\u5134")}).to.throw(Error, "EncodingError U+5134");
expect(() => {ms932Encoder.encode("\u5135")}).to.throw(Error, "EncodingError U+5135");
expect(() => {ms932Encoder.encode("\u5136")}).to.throw(Error, "EncodingError U+5136");
r = r && ([...ms932Encoder.encode("儷")].join(",") === "153,85"); // U+5137
expect(() => {ms932Encoder.encode("\u5138")}).to.throw(Error, "EncodingError U+5138");
expect(() => {ms932Encoder.encode("\u5139")}).to.throw(Error, "EncodingError U+5139");
r = r && ([...ms932Encoder.encode("儺儻儼")].join(",") === "153,84,153,87,153,86"); // U+513A
expect(() => {ms932Encoder.encode("\u513D")}).to.throw(Error, "EncodingError U+513D");
expect(() => {ms932Encoder.encode("\u513E")}).to.throw(Error, "EncodingError U+513E");
r = r && ([...ms932Encoder.encode("儿兀允")].join(",") === "153,88,153,89,136,242"); // U+513F
expect(() => {ms932Encoder.encode("\u5142")}).to.throw(Error, "EncodingError U+5142");
r = r && ([...ms932Encoder.encode("元兄充兆兇先光兊克兌免兎")].join(",") === "140,179,140,90,143,91,146,155,139,162,144,230,140,245,250,126,141,142,153,91,150,198,147,101"); // U+5143
expect(() => {ms932Encoder.encode("\u514F")}).to.throw(Error, "EncodingError U+514F");
r = r && ([...ms932Encoder.encode("児")].join(",") === "142,153"); // U+5150
expect(() => {ms932Encoder.encode("\u5151")}).to.throw(Error, "EncodingError U+5151");
r = r && ([...ms932Encoder.encode("兒")].join(",") === "153,90"); // U+5152
expect(() => {ms932Encoder.encode("\u5153")}).to.throw(Error, "EncodingError U+5153");
r = r && ([...ms932Encoder.encode("兔")].join(",") === "153,92"); // U+5154
expect(() => {ms932Encoder.encode("\u5155")}).to.throw(Error, "EncodingError U+5155");
expect(() => {ms932Encoder.encode("\u5156")}).to.throw(Error, "EncodingError U+5156");
expect(() => {ms932Encoder.encode("\u5157")}).to.throw(Error, "EncodingError U+5157");
expect(() => {ms932Encoder.encode("\u5158")}).to.throw(Error, "EncodingError U+5158");
expect(() => {ms932Encoder.encode("\u5159")}).to.throw(Error, "EncodingError U+5159");
r = r && ([...ms932Encoder.encode("党")].join(",") === "147,125"); // U+515A
expect(() => {ms932Encoder.encode("\u515B")}).to.throw(Error, "EncodingError U+515B");
r = r && ([...ms932Encoder.encode("兜")].join(",") === "138,149"); // U+515C
expect(() => {ms932Encoder.encode("\u515D")}).to.throw(Error, "EncodingError U+515D");
expect(() => {ms932Encoder.encode("\u515E")}).to.throw(Error, "EncodingError U+515E");
expect(() => {ms932Encoder.encode("\u515F")}).to.throw(Error, "EncodingError U+515F");
expect(() => {ms932Encoder.encode("\u5160")}).to.throw(Error, "EncodingError U+5160");
expect(() => {ms932Encoder.encode("\u5161")}).to.throw(Error, "EncodingError U+5161");
r = r && ([...ms932Encoder.encode("兢")].join(",") === "153,93"); // U+5162
expect(() => {ms932Encoder.encode("\u5163")}).to.throw(Error, "EncodingError U+5163");
r = r && ([...ms932Encoder.encode("兤入")].join(",") === "250,128,147,252"); // U+5164
expect(() => {ms932Encoder.encode("\u5166")}).to.throw(Error, "EncodingError U+5166");
expect(() => {ms932Encoder.encode("\u5167")}).to.throw(Error, "EncodingError U+5167");
r = r && ([...ms932Encoder.encode("全兩兪八公六兮")].join(",") === "145,83,153,95,153,96,148,170,140,246,152,90,153,97"); // U+5168
expect(() => {ms932Encoder.encode("\u516F")}).to.throw(Error, "EncodingError U+516F");
expect(() => {ms932Encoder.encode("\u5170")}).to.throw(Error, "EncodingError U+5170");
r = r && ([...ms932Encoder.encode("共")].join(",") === "139,164"); // U+5171
expect(() => {ms932Encoder.encode("\u5172")}).to.throw(Error, "EncodingError U+5172");
expect(() => {ms932Encoder.encode("\u5173")}).to.throw(Error, "EncodingError U+5173");
expect(() => {ms932Encoder.encode("\u5174")}).to.throw(Error, "EncodingError U+5174");
r = r && ([...ms932Encoder.encode("兵其具典")].join(",") === "149,186,145,180,139,239,147,84"); // U+5175
expect(() => {ms932Encoder.encode("\u5179")}).to.throw(Error, "EncodingError U+5179");
expect(() => {ms932Encoder.encode("\u517A")}).to.throw(Error, "EncodingError U+517A");
expect(() => {ms932Encoder.encode("\u517B")}).to.throw(Error, "EncodingError U+517B");
r = r && ([...ms932Encoder.encode("兼")].join(",") === "140,147"); // U+517C
expect(() => {ms932Encoder.encode("\u517D")}).to.throw(Error, "EncodingError U+517D");
expect(() => {ms932Encoder.encode("\u517E")}).to.throw(Error, "EncodingError U+517E");
expect(() => {ms932Encoder.encode("\u517F")}).to.throw(Error, "EncodingError U+517F");
r = r && ([...ms932Encoder.encode("冀")].join(",") === "153,98"); // U+5180
expect(() => {ms932Encoder.encode("\u5181")}).to.throw(Error, "EncodingError U+5181");
r = r && ([...ms932Encoder.encode("冂")].join(",") === "153,99"); // U+5182
expect(() => {ms932Encoder.encode("\u5183")}).to.throw(Error, "EncodingError U+5183");
expect(() => {ms932Encoder.encode("\u5184")}).to.throw(Error, "EncodingError U+5184");
r = r && ([...ms932Encoder.encode("内円")].join(",") === "147,224,137,126"); // U+5185
expect(() => {ms932Encoder.encode("\u5187")}).to.throw(Error, "EncodingError U+5187");
expect(() => {ms932Encoder.encode("\u5188")}).to.throw(Error, "EncodingError U+5188");
r = r && ([...ms932Encoder.encode("冉冊")].join(",") === "153,102,141,251"); // U+5189
expect(() => {ms932Encoder.encode("\u518B")}).to.throw(Error, "EncodingError U+518B");
r = r && ([...ms932Encoder.encode("册再")].join(",") === "153,101,141,196"); // U+518C
expect(() => {ms932Encoder.encode("\u518E")}).to.throw(Error, "EncodingError U+518E");
r = r && ([...ms932Encoder.encode("冏冐冑冒冓")].join(",") === "153,103,227,236,153,104,150,96,153,105"); // U+518F
expect(() => {ms932Encoder.encode("\u5194")}).to.throw(Error, "EncodingError U+5194");
r = r && ([...ms932Encoder.encode("冕冖冗")].join(",") === "153,106,153,107,143,231"); // U+5195
expect(() => {ms932Encoder.encode("\u5198")}).to.throw(Error, "EncodingError U+5198");
r = r && ([...ms932Encoder.encode("写")].join(",") === "142,202"); // U+5199
expect(() => {ms932Encoder.encode("\u519A")}).to.throw(Error, "EncodingError U+519A");
expect(() => {ms932Encoder.encode("\u519B")}).to.throw(Error, "EncodingError U+519B");
expect(() => {ms932Encoder.encode("\u519C")}).to.throw(Error, "EncodingError U+519C");
r = r && ([...ms932Encoder.encode("冝")].join(",") === "250,129"); // U+519D
expect(() => {ms932Encoder.encode("\u519E")}).to.throw(Error, "EncodingError U+519E");
expect(() => {ms932Encoder.encode("\u519F")}).to.throw(Error, "EncodingError U+519F");
r = r && ([...ms932Encoder.encode("冠")].join(",") === "138,165"); // U+51A0
expect(() => {ms932Encoder.encode("\u51A1")}).to.throw(Error, "EncodingError U+51A1");
r = r && ([...ms932Encoder.encode("冢")].join(",") === "153,110"); // U+51A2
expect(() => {ms932Encoder.encode("\u51A3")}).to.throw(Error, "EncodingError U+51A3");
r = r && ([...ms932Encoder.encode("冤冥冦")].join(",") === "153,108,150,187,153,109"); // U+51A4
expect(() => {ms932Encoder.encode("\u51A7")}).to.throw(Error, "EncodingError U+51A7");
r = r && ([...ms932Encoder.encode("冨冩冪冫冬")].join(",") === "149,121,153,111,153,112,153,113,147,126"); // U+51A8
expect(() => {ms932Encoder.encode("\u51AD")}).to.throw(Error, "EncodingError U+51AD");
expect(() => {ms932Encoder.encode("\u51AE")}).to.throw(Error, "EncodingError U+51AE");
expect(() => {ms932Encoder.encode("\u51AF")}).to.throw(Error, "EncodingError U+51AF");
r = r && ([...ms932Encoder.encode("冰冱冲决冴况冶冷")].join(",") === "153,117,153,115,153,116,153,114,141,225,153,118,150,232,151,226"); // U+51B0
expect(() => {ms932Encoder.encode("\u51B8")}).to.throw(Error, "EncodingError U+51B8");
expect(() => {ms932Encoder.encode("\u51B9")}).to.throw(Error, "EncodingError U+51B9");
expect(() => {ms932Encoder.encode("\u51BA")}).to.throw(Error, "EncodingError U+51BA");
expect(() => {ms932Encoder.encode("\u51BB")}).to.throw(Error, "EncodingError U+51BB");
expect(() => {ms932Encoder.encode("\u51BC")}).to.throw(Error, "EncodingError U+51BC");
r = r && ([...ms932Encoder.encode("冽冾")].join(",") === "153,119,250,130"); // U+51BD
expect(() => {ms932Encoder.encode("\u51BF")}).to.throw(Error, "EncodingError U+51BF");
expect(() => {ms932Encoder.encode("\u51C0")}).to.throw(Error, "EncodingError U+51C0");
expect(() => {ms932Encoder.encode("\u51C1")}).to.throw(Error, "EncodingError U+51C1");
expect(() => {ms932Encoder.encode("\u51C2")}).to.throw(Error, "EncodingError U+51C2");
expect(() => {ms932Encoder.encode("\u51C3")}).to.throw(Error, "EncodingError U+51C3");
r = r && ([...ms932Encoder.encode("凄凅准")].join(",") === "144,166,153,120,143,121"); // U+51C4
expect(() => {ms932Encoder.encode("\u51C7")}).to.throw(Error, "EncodingError U+51C7");
expect(() => {ms932Encoder.encode("\u51C8")}).to.throw(Error, "EncodingError U+51C8");
r = r && ([...ms932Encoder.encode("凉")].join(",") === "153,121"); // U+51C9
expect(() => {ms932Encoder.encode("\u51CA")}).to.throw(Error, "EncodingError U+51CA");
r = r && ([...ms932Encoder.encode("凋凌凍")].join(",") === "146,156,151,189,147,128"); // U+51CB
expect(() => {ms932Encoder.encode("\u51CE")}).to.throw(Error, "EncodingError U+51CE");
expect(() => {ms932Encoder.encode("\u51CF")}).to.throw(Error, "EncodingError U+51CF");
expect(() => {ms932Encoder.encode("\u51D0")}).to.throw(Error, "EncodingError U+51D0");
expect(() => {ms932Encoder.encode("\u51D1")}).to.throw(Error, "EncodingError U+51D1");
expect(() => {ms932Encoder.encode("\u51D2")}).to.throw(Error, "EncodingError U+51D2");
expect(() => {ms932Encoder.encode("\u51D3")}).to.throw(Error, "EncodingError U+51D3");
expect(() => {ms932Encoder.encode("\u51D4")}).to.throw(Error, "EncodingError U+51D4");
expect(() => {ms932Encoder.encode("\u51D5")}).to.throw(Error, "EncodingError U+51D5");
r = r && ([...ms932Encoder.encode("凖")].join(",") === "153,195"); // U+51D6
expect(() => {ms932Encoder.encode("\u51D7")}).to.throw(Error, "EncodingError U+51D7");
expect(() => {ms932Encoder.encode("\u51D8")}).to.throw(Error, "EncodingError U+51D8");
expect(() => {ms932Encoder.encode("\u51D9")}).to.throw(Error, "EncodingError U+51D9");
expect(() => {ms932Encoder.encode("\u51DA")}).to.throw(Error, "EncodingError U+51DA");
r = r && ([...ms932Encoder.encode("凛凜凝")].join(",") === "153,122,234,163,139,195"); // U+51DB
expect(() => {ms932Encoder.encode("\u51DE")}).to.throw(Error, "EncodingError U+51DE");
expect(() => {ms932Encoder.encode("\u51DF")}).to.throw(Error, "EncodingError U+51DF");
r = r && ([...ms932Encoder.encode("几凡")].join(",") === "153,123,150,125"); // U+51E0
expect(() => {ms932Encoder.encode("\u51E2")}).to.throw(Error, "EncodingError U+51E2");
expect(() => {ms932Encoder.encode("\u51E3")}).to.throw(Error, "EncodingError U+51E3");
expect(() => {ms932Encoder.encode("\u51E4")}).to.throw(Error, "EncodingError U+51E4");
expect(() => {ms932Encoder.encode("\u51E5")}).to.throw(Error, "EncodingError U+51E5");
r = r && ([...ms932Encoder.encode("処凧")].join(",") === "143,136,145,250"); // U+51E6
expect(() => {ms932Encoder.encode("\u51E8")}).to.throw(Error, "EncodingError U+51E8");
r = r && ([...ms932Encoder.encode("凩凪")].join(",") === "153,125,147,226"); // U+51E9
expect(() => {ms932Encoder.encode("\u51EB")}).to.throw(Error, "EncodingError U+51EB");
r = r && ([...ms932Encoder.encode("凬凭")].join(",") === "250,131,153,126"); // U+51EC
expect(() => {ms932Encoder.encode("\u51EE")}).to.throw(Error, "EncodingError U+51EE");
expect(() => {ms932Encoder.encode("\u51EF")}).to.throw(Error, "EncodingError U+51EF");
r = r && ([...ms932Encoder.encode("凰凱")].join(",") === "153,128,138,77"); // U+51F0
expect(() => {ms932Encoder.encode("\u51F2")}).to.throw(Error, "EncodingError U+51F2");
expect(() => {ms932Encoder.encode("\u51F3")}).to.throw(Error, "EncodingError U+51F3");
expect(() => {ms932Encoder.encode("\u51F4")}).to.throw(Error, "EncodingError U+51F4");
r = r && ([...ms932Encoder.encode("凵凶")].join(",") === "153,129,139,165"); // U+51F5
expect(() => {ms932Encoder.encode("\u51F7")}).to.throw(Error, "EncodingError U+51F7");
r = r && ([...ms932Encoder.encode("凸凹出")].join(",") === "147,202,137,154,143,111"); // U+51F8
expect(() => {ms932Encoder.encode("\u51FB")}).to.throw(Error, "EncodingError U+51FB");
expect(() => {ms932Encoder.encode("\u51FC")}).to.throw(Error, "EncodingError U+51FC");
r = r && ([...ms932Encoder.encode("函凾")].join(",") === "148,159,153,130"); // U+51FD
expect(() => {ms932Encoder.encode("\u51FF")}).to.throw(Error, "EncodingError U+51FF");
r = r && ([...ms932Encoder.encode("刀")].join(",") === "147,129"); // U+5200
expect(() => {ms932Encoder.encode("\u5201")}).to.throw(Error, "EncodingError U+5201");
expect(() => {ms932Encoder.encode("\u5202")}).to.throw(Error, "EncodingError U+5202");
r = r && ([...ms932Encoder.encode("刃刄")].join(",") === "144,110,153,131"); // U+5203
expect(() => {ms932Encoder.encode("\u5205")}).to.throw(Error, "EncodingError U+5205");
r = r && ([...ms932Encoder.encode("分切刈")].join(",") === "149,170,144,216,138,160"); // U+5206
expect(() => {ms932Encoder.encode("\u5209")}).to.throw(Error, "EncodingError U+5209");
r = r && ([...ms932Encoder.encode("刊刋")].join(",") === "138,167,153,132"); // U+520A
expect(() => {ms932Encoder.encode("\u520C")}).to.throw(Error, "EncodingError U+520C");
expect(() => {ms932Encoder.encode("\u520D")}).to.throw(Error, "EncodingError U+520D");
r = r && ([...ms932Encoder.encode("刎")].join(",") === "153,134"); // U+520E
expect(() => {ms932Encoder.encode("\u520F")}).to.throw(Error, "EncodingError U+520F");
expect(() => {ms932Encoder.encode("\u5210")}).to.throw(Error, "EncodingError U+5210");
r = r && ([...ms932Encoder.encode("刑")].join(",") === "140,89"); // U+5211
expect(() => {ms932Encoder.encode("\u5212")}).to.throw(Error, "EncodingError U+5212");
expect(() => {ms932Encoder.encode("\u5213")}).to.throw(Error, "EncodingError U+5213");
r = r && ([...ms932Encoder.encode("刔刕")].join(",") === "153,133,250,132"); // U+5214
expect(() => {ms932Encoder.encode("\u5216")}).to.throw(Error, "EncodingError U+5216");
r = r && ([...ms932Encoder.encode("列")].join(",") === "151,241"); // U+5217
expect(() => {ms932Encoder.encode("\u5218")}).to.throw(Error, "EncodingError U+5218");
expect(() => {ms932Encoder.encode("\u5219")}).to.throw(Error, "EncodingError U+5219");
expect(() => {ms932Encoder.encode("\u521A")}).to.throw(Error, "EncodingError U+521A");
expect(() => {ms932Encoder.encode("\u521B")}).to.throw(Error, "EncodingError U+521B");
expect(() => {ms932Encoder.encode("\u521C")}).to.throw(Error, "EncodingError U+521C");
r = r && ([...ms932Encoder.encode("初")].join(",") === "143,137"); // U+521D
expect(() => {ms932Encoder.encode("\u521E")}).to.throw(Error, "EncodingError U+521E");
expect(() => {ms932Encoder.encode("\u521F")}).to.throw(Error, "EncodingError U+521F");
expect(() => {ms932Encoder.encode("\u5220")}).to.throw(Error, "EncodingError U+5220");
expect(() => {ms932Encoder.encode("\u5221")}).to.throw(Error, "EncodingError U+5221");
expect(() => {ms932Encoder.encode("\u5222")}).to.throw(Error, "EncodingError U+5222");
expect(() => {ms932Encoder.encode("\u5223")}).to.throw(Error, "EncodingError U+5223");
r = r && ([...ms932Encoder.encode("判別")].join(",") === "148,187,149,202"); // U+5224
expect(() => {ms932Encoder.encode("\u5226")}).to.throw(Error, "EncodingError U+5226");
r = r && ([...ms932Encoder.encode("刧")].join(",") === "153,135"); // U+5227
expect(() => {ms932Encoder.encode("\u5228")}).to.throw(Error, "EncodingError U+5228");
r = r && ([...ms932Encoder.encode("利刪")].join(",") === "151,152,153,136"); // U+5229
expect(() => {ms932Encoder.encode("\u522B")}).to.throw(Error, "EncodingError U+522B");
expect(() => {ms932Encoder.encode("\u522C")}).to.throw(Error, "EncodingError U+522C");
expect(() => {ms932Encoder.encode("\u522D")}).to.throw(Error, "EncodingError U+522D");
r = r && ([...ms932Encoder.encode("刮")].join(",") === "153,137"); // U+522E
expect(() => {ms932Encoder.encode("\u522F")}).to.throw(Error, "EncodingError U+522F");
r = r && ([...ms932Encoder.encode("到")].join(",") === "147,158"); // U+5230
expect(() => {ms932Encoder.encode("\u5231")}).to.throw(Error, "EncodingError U+5231");
expect(() => {ms932Encoder.encode("\u5232")}).to.throw(Error, "EncodingError U+5232");
r = r && ([...ms932Encoder.encode("刳")].join(",") === "153,138"); // U+5233
expect(() => {ms932Encoder.encode("\u5234")}).to.throw(Error, "EncodingError U+5234");
expect(() => {ms932Encoder.encode("\u5235")}).to.throw(Error, "EncodingError U+5235");
r = r && ([...ms932Encoder.encode("制刷券刹刺刻")].join(",") === "144,167,141,252,140,148,153,139,142,104,141,143"); // U+5236
expect(() => {ms932Encoder.encode("\u523C")}).to.throw(Error, "EncodingError U+523C");
expect(() => {ms932Encoder.encode("\u523D")}).to.throw(Error, "EncodingError U+523D");
expect(() => {ms932Encoder.encode("\u523E")}).to.throw(Error, "EncodingError U+523E");
expect(() => {ms932Encoder.encode("\u523F")}).to.throw(Error, "EncodingError U+523F");
expect(() => {ms932Encoder.encode("\u5240")}).to.throw(Error, "EncodingError U+5240");
expect(() => {ms932Encoder.encode("\u5241")}).to.throw(Error, "EncodingError U+5241");
expect(() => {ms932Encoder.encode("\u5242")}).to.throw(Error, "EncodingError U+5242");
r = r && ([...ms932Encoder.encode("剃剄")].join(",") === "146,228,153,141"); // U+5243
expect(() => {ms932Encoder.encode("\u5245")}).to.throw(Error, "EncodingError U+5245");
expect(() => {ms932Encoder.encode("\u5246")}).to.throw(Error, "EncodingError U+5246");
r = r && ([...ms932Encoder.encode("則")].join(",") === "145,165"); // U+5247
expect(() => {ms932Encoder.encode("\u5248")}).to.throw(Error, "EncodingError U+5248");
expect(() => {ms932Encoder.encode("\u5249")}).to.throw(Error, "EncodingError U+5249");
r = r && ([...ms932Encoder.encode("削剋剌前")].join(",") === "141,237,153,142,153,143,145,79"); // U+524A
expect(() => {ms932Encoder.encode("\u524E")}).to.throw(Error, "EncodingError U+524E");
r = r && ([...ms932Encoder.encode("剏")].join(",") === "153,140"); // U+524F
expect(() => {ms932Encoder.encode("\u5250")}).to.throw(Error, "EncodingError U+5250");
expect(() => {ms932Encoder.encode("\u5251")}).to.throw(Error, "EncodingError U+5251");
expect(() => {ms932Encoder.encode("\u5252")}).to.throw(Error, "EncodingError U+5252");
expect(() => {ms932Encoder.encode("\u5253")}).to.throw(Error, "EncodingError U+5253");
r = r && ([...ms932Encoder.encode("剔")].join(",") === "153,145"); // U+5254
expect(() => {ms932Encoder.encode("\u5255")}).to.throw(Error, "EncodingError U+5255");
r = r && ([...ms932Encoder.encode("剖")].join(",") === "150,85"); // U+5256
expect(() => {ms932Encoder.encode("\u5257")}).to.throw(Error, "EncodingError U+5257");
expect(() => {ms932Encoder.encode("\u5258")}).to.throw(Error, "EncodingError U+5258");
expect(() => {ms932Encoder.encode("\u5259")}).to.throw(Error, "EncodingError U+5259");
expect(() => {ms932Encoder.encode("\u525A")}).to.throw(Error, "EncodingError U+525A");
r = r && ([...ms932Encoder.encode("剛")].join(",") === "141,132"); // U+525B
expect(() => {ms932Encoder.encode("\u525C")}).to.throw(Error, "EncodingError U+525C");
expect(() => {ms932Encoder.encode("\u525D")}).to.throw(Error, "EncodingError U+525D");
r = r && ([...ms932Encoder.encode("剞")].join(",") === "153,144"); // U+525E
expect(() => {ms932Encoder.encode("\u525F")}).to.throw(Error, "EncodingError U+525F");
expect(() => {ms932Encoder.encode("\u5260")}).to.throw(Error, "EncodingError U+5260");
expect(() => {ms932Encoder.encode("\u5261")}).to.throw(Error, "EncodingError U+5261");
expect(() => {ms932Encoder.encode("\u5262")}).to.throw(Error, "EncodingError U+5262");
r = r && ([...ms932Encoder.encode("剣剤剥")].join(",") === "140,149,141,220,148,141"); // U+5263
expect(() => {ms932Encoder.encode("\u5266")}).to.throw(Error, "EncodingError U+5266");
expect(() => {ms932Encoder.encode("\u5267")}).to.throw(Error, "EncodingError U+5267");
expect(() => {ms932Encoder.encode("\u5268")}).to.throw(Error, "EncodingError U+5268");
r = r && ([...ms932Encoder.encode("剩剪")].join(",") === "153,148,153,146"); // U+5269
expect(() => {ms932Encoder.encode("\u526B")}).to.throw(Error, "EncodingError U+526B");
expect(() => {ms932Encoder.encode("\u526C")}).to.throw(Error, "EncodingError U+526C");
expect(() => {ms932Encoder.encode("\u526D")}).to.throw(Error, "EncodingError U+526D");
expect(() => {ms932Encoder.encode("\u526E")}).to.throw(Error, "EncodingError U+526E");
r = r && ([...ms932Encoder.encode("副剰剱割剳剴創")].join(",") === "149,155,143,232,153,155,138,132,153,149,153,147,145,110"); // U+526F
expect(() => {ms932Encoder.encode("\u5276")}).to.throw(Error, "EncodingError U+5276");
expect(() => {ms932Encoder.encode("\u5277")}).to.throw(Error, "EncodingError U+5277");
expect(() => {ms932Encoder.encode("\u5278")}).to.throw(Error, "EncodingError U+5278");
expect(() => {ms932Encoder.encode("\u5279")}).to.throw(Error, "EncodingError U+5279");
expect(() => {ms932Encoder.encode("\u527A")}).to.throw(Error, "EncodingError U+527A");
expect(() => {ms932Encoder.encode("\u527B")}).to.throw(Error, "EncodingError U+527B");
expect(() => {ms932Encoder.encode("\u527C")}).to.throw(Error, "EncodingError U+527C");
r = r && ([...ms932Encoder.encode("剽")].join(",") === "153,151"); // U+527D
expect(() => {ms932Encoder.encode("\u527E")}).to.throw(Error, "EncodingError U+527E");
r = r && ([...ms932Encoder.encode("剿")].join(",") === "153,150"); // U+527F
expect(() => {ms932Encoder.encode("\u5280")}).to.throw(Error, "EncodingError U+5280");
expect(() => {ms932Encoder.encode("\u5281")}).to.throw(Error, "EncodingError U+5281");
expect(() => {ms932Encoder.encode("\u5282")}).to.throw(Error, "EncodingError U+5282");
r = r && ([...ms932Encoder.encode("劃")].join(",") === "138,99"); // U+5283
expect(() => {ms932Encoder.encode("\u5284")}).to.throw(Error, "EncodingError U+5284");
expect(() => {ms932Encoder.encode("\u5285")}).to.throw(Error, "EncodingError U+5285");
expect(() => {ms932Encoder.encode("\u5286")}).to.throw(Error, "EncodingError U+5286");
r = r && ([...ms932Encoder.encode("劇劈劉")].join(",") === "140,128,153,156,151,171"); // U+5287
expect(() => {ms932Encoder.encode("\u528A")}).to.throw(Error, "EncodingError U+528A");
expect(() => {ms932Encoder.encode("\u528B")}).to.throw(Error, "EncodingError U+528B");
expect(() => {ms932Encoder.encode("\u528C")}).to.throw(Error, "EncodingError U+528C");
r = r && ([...ms932Encoder.encode("劍")].join(",") === "153,152"); // U+528D
expect(() => {ms932Encoder.encode("\u528E")}).to.throw(Error, "EncodingError U+528E");
expect(() => {ms932Encoder.encode("\u528F")}).to.throw(Error, "EncodingError U+528F");
expect(() => {ms932Encoder.encode("\u5290")}).to.throw(Error, "EncodingError U+5290");
r = r && ([...ms932Encoder.encode("劑劒")].join(",") === "153,157,153,154"); // U+5291
expect(() => {ms932Encoder.encode("\u5293")}).to.throw(Error, "EncodingError U+5293");
r = r && ([...ms932Encoder.encode("劔")].join(",") === "153,153"); // U+5294
expect(() => {ms932Encoder.encode("\u5295")}).to.throw(Error, "EncodingError U+5295");
expect(() => {ms932Encoder.encode("\u5296")}).to.throw(Error, "EncodingError U+5296");
expect(() => {ms932Encoder.encode("\u5297")}).to.throw(Error, "EncodingError U+5297");
expect(() => {ms932Encoder.encode("\u5298")}).to.throw(Error, "EncodingError U+5298");
expect(() => {ms932Encoder.encode("\u5299")}).to.throw(Error, "EncodingError U+5299");
expect(() => {ms932Encoder.encode("\u529A")}).to.throw(Error, "EncodingError U+529A");
r = r && ([...ms932Encoder.encode("力劜")].join(",") === "151,205,250,133"); // U+529B
expect(() => {ms932Encoder.encode("\u529D")}).to.throw(Error, "EncodingError U+529D");
expect(() => {ms932Encoder.encode("\u529E")}).to.throw(Error, "EncodingError U+529E");
r = r && ([...ms932Encoder.encode("功加")].join(",") === "140,247,137,193"); // U+529F
expect(() => {ms932Encoder.encode("\u52A1")}).to.throw(Error, "EncodingError U+52A1");
expect(() => {ms932Encoder.encode("\u52A2")}).to.throw(Error, "EncodingError U+52A2");
r = r && ([...ms932Encoder.encode("劣")].join(",") === "151,242"); // U+52A3
expect(() => {ms932Encoder.encode("\u52A4")}).to.throw(Error, "EncodingError U+52A4");
expect(() => {ms932Encoder.encode("\u52A5")}).to.throw(Error, "EncodingError U+52A5");
r = r && ([...ms932Encoder.encode("劦")].join(",") === "250,134"); // U+52A6
expect(() => {ms932Encoder.encode("\u52A7")}).to.throw(Error, "EncodingError U+52A7");
expect(() => {ms932Encoder.encode("\u52A8")}).to.throw(Error, "EncodingError U+52A8");
r = r && ([...ms932Encoder.encode("助努劫劬劭")].join(",") === "143,149,147,119,141,133,153,160,153,161"); // U+52A9
expect(() => {ms932Encoder.encode("\u52AE")}).to.throw(Error, "EncodingError U+52AE");
r = r && ([...ms932Encoder.encode("劯")].join(",") === "251,119"); // U+52AF
expect(() => {ms932Encoder.encode("\u52B0")}).to.throw(Error, "EncodingError U+52B0");
r = r && ([...ms932Encoder.encode("励")].join(",") === "151,227"); // U+52B1
expect(() => {ms932Encoder.encode("\u52B2")}).to.throw(Error, "EncodingError U+52B2");
expect(() => {ms932Encoder.encode("\u52B3")}).to.throw(Error, "EncodingError U+52B3");
r = r && ([...ms932Encoder.encode("労劵")].join(",") === "152,74,153,163"); // U+52B4
expect(() => {ms932Encoder.encode("\u52B6")}).to.throw(Error, "EncodingError U+52B6");
expect(() => {ms932Encoder.encode("\u52B7")}).to.throw(Error, "EncodingError U+52B7");
expect(() => {ms932Encoder.encode("\u52B8")}).to.throw(Error, "EncodingError U+52B8");
r = r && ([...ms932Encoder.encode("効")].join(",") === "140,248"); // U+52B9
expect(() => {ms932Encoder.encode("\u52BA")}).to.throw(Error, "EncodingError U+52BA");
expect(() => {ms932Encoder.encode("\u52BB")}).to.throw(Error, "EncodingError U+52BB");
r = r && ([...ms932Encoder.encode("劼")].join(",") === "153,162"); // U+52BC
expect(() => {ms932Encoder.encode("\u52BD")}).to.throw(Error, "EncodingError U+52BD");
r = r && ([...ms932Encoder.encode("劾")].join(",") === "138,78"); // U+52BE
expect(() => {ms932Encoder.encode("\u52BF")}).to.throw(Error, "EncodingError U+52BF");
r = r && ([...ms932Encoder.encode("勀勁")].join(",") === "250,135,153,164"); // U+52C0
expect(() => {ms932Encoder.encode("\u52C2")}).to.throw(Error, "EncodingError U+52C2");
r = r && ([...ms932Encoder.encode("勃")].join(",") === "150,117"); // U+52C3
expect(() => {ms932Encoder.encode("\u52C4")}).to.throw(Error, "EncodingError U+52C4");
r = r && ([...ms932Encoder.encode("勅")].join(",") === "146,186"); // U+52C5
expect(() => {ms932Encoder.encode("\u52C6")}).to.throw(Error, "EncodingError U+52C6");
r = r && ([...ms932Encoder.encode("勇")].join(",") === "151,69"); // U+52C7
expect(() => {ms932Encoder.encode("\u52C8")}).to.throw(Error, "EncodingError U+52C8");
r = r && ([...ms932Encoder.encode("勉")].join(",") === "149,215"); // U+52C9
expect(() => {ms932Encoder.encode("\u52CA")}).to.throw(Error, "EncodingError U+52CA");
expect(() => {ms932Encoder.encode("\u52CB")}).to.throw(Error, "EncodingError U+52CB");
expect(() => {ms932Encoder.encode("\u52CC")}).to.throw(Error, "EncodingError U+52CC");
r = r && ([...ms932Encoder.encode("勍")].join(",") === "153,165"); // U+52CD
expect(() => {ms932Encoder.encode("\u52CE")}).to.throw(Error, "EncodingError U+52CE");
expect(() => {ms932Encoder.encode("\u52CF")}).to.throw(Error, "EncodingError U+52CF");
expect(() => {ms932Encoder.encode("\u52D0")}).to.throw(Error, "EncodingError U+52D0");
expect(() => {ms932Encoder.encode("\u52D1")}).to.throw(Error, "EncodingError U+52D1");
r = r && ([...ms932Encoder.encode("勒")].join(",") === "232,211"); // U+52D2
expect(() => {ms932Encoder.encode("\u52D3")}).to.throw(Error, "EncodingError U+52D3");
expect(() => {ms932Encoder.encode("\u52D4")}).to.throw(Error, "EncodingError U+52D4");
r = r && ([...ms932Encoder.encode("動")].join(",") === "147,174"); // U+52D5
expect(() => {ms932Encoder.encode("\u52D6")}).to.throw(Error, "EncodingError U+52D6");
r = r && ([...ms932Encoder.encode("勗勘務")].join(",") === "153,166,138,168,150,177"); // U+52D7
expect(() => {ms932Encoder.encode("\u52DA")}).to.throw(Error, "EncodingError U+52DA");
r = r && ([...ms932Encoder.encode("勛")].join(",") === "250,136"); // U+52DB
expect(() => {ms932Encoder.encode("\u52DC")}).to.throw(Error, "EncodingError U+52DC");
r = r && ([...ms932Encoder.encode("勝勞募勠")].join(",") === "143,159,153,167,149,229,153,171"); // U+52DD
expect(() => {ms932Encoder.encode("\u52E1")}).to.throw(Error, "EncodingError U+52E1");
r = r && ([...ms932Encoder.encode("勢勣勤")].join(",") === "144,168,153,168,139,206"); // U+52E2
expect(() => {ms932Encoder.encode("\u52E5")}).to.throw(Error, "EncodingError U+52E5");
r = r && ([...ms932Encoder.encode("勦勧")].join(",") === "153,169,138,169"); // U+52E6
expect(() => {ms932Encoder.encode("\u52E8")}).to.throw(Error, "EncodingError U+52E8");
expect(() => {ms932Encoder.encode("\u52E9")}).to.throw(Error, "EncodingError U+52E9");
expect(() => {ms932Encoder.encode("\u52EA")}).to.throw(Error, "EncodingError U+52EA");
expect(() => {ms932Encoder.encode("\u52EB")}).to.throw(Error, "EncodingError U+52EB");
expect(() => {ms932Encoder.encode("\u52EC")}).to.throw(Error, "EncodingError U+52EC");
expect(() => {ms932Encoder.encode("\u52ED")}).to.throw(Error, "EncodingError U+52ED");
expect(() => {ms932Encoder.encode("\u52EE")}).to.throw(Error, "EncodingError U+52EE");
expect(() => {ms932Encoder.encode("\u52EF")}).to.throw(Error, "EncodingError U+52EF");
expect(() => {ms932Encoder.encode("\u52F0")}).to.throw(Error, "EncodingError U+52F0");
expect(() => {ms932Encoder.encode("\u52F1")}).to.throw(Error, "EncodingError U+52F1");
r = r && ([...ms932Encoder.encode("勲勳")].join(",") === "140,77,153,172"); // U+52F2
expect(() => {ms932Encoder.encode("\u52F4")}).to.throw(Error, "EncodingError U+52F4");
r = r && ([...ms932Encoder.encode("勵")].join(",") === "153,173"); // U+52F5
expect(() => {ms932Encoder.encode("\u52F6")}).to.throw(Error, "EncodingError U+52F6");
expect(() => {ms932Encoder.encode("\u52F7")}).to.throw(Error, "EncodingError U+52F7");
r = r && ([...ms932Encoder.encode("勸勹勺")].join(",") === "153,174,153,175,142,217"); // U+52F8
expect(() => {ms932Encoder.encode("\u52FB")}).to.throw(Error, "EncodingError U+52FB");
expect(() => {ms932Encoder.encode("\u52FC")}).to.throw(Error, "EncodingError U+52FC");
expect(() => {ms932Encoder.encode("\u52FD")}).to.throw(Error, "EncodingError U+52FD");
r = r && ([...ms932Encoder.encode("勾勿匀匁匂")].join(",") === "140,249,150,220,250,137,150,230,147,245"); // U+52FE
expect(() => {ms932Encoder.encode("\u5303")}).to.throw(Error, "EncodingError U+5303");
expect(() => {ms932Encoder.encode("\u5304")}).to.throw(Error, "EncodingError U+5304");
r = r && ([...ms932Encoder.encode("包匆匇匈")].join(",") === "149,239,153,176,250,138,153,177"); // U+5305
expect(() => {ms932Encoder.encode("\u5309")}).to.throw(Error, "EncodingError U+5309");
expect(() => {ms932Encoder.encode("\u530A")}).to.throw(Error, "EncodingError U+530A");
expect(() => {ms932Encoder.encode("\u530B")}).to.throw(Error, "EncodingError U+530B");
expect(() => {ms932Encoder.encode("\u530C")}).to.throw(Error, "EncodingError U+530C");
r = r && ([...ms932Encoder.encode("匍")].join(",") === "153,179"); // U+530D
expect(() => {ms932Encoder.encode("\u530E")}).to.throw(Error, "EncodingError U+530E");
r = r && ([...ms932Encoder.encode("匏匐")].join(",") === "153,181,153,180"); // U+530F
expect(() => {ms932Encoder.encode("\u5311")}).to.throw(Error, "EncodingError U+5311");
expect(() => {ms932Encoder.encode("\u5312")}).to.throw(Error, "EncodingError U+5312");
expect(() => {ms932Encoder.encode("\u5313")}).to.throw(Error, "EncodingError U+5313");
expect(() => {ms932Encoder.encode("\u5314")}).to.throw(Error, "EncodingError U+5314");
r = r && ([...ms932Encoder.encode("匕化北")].join(",") === "153,182,137,187,150,107"); // U+5315
expect(() => {ms932Encoder.encode("\u5318")}).to.throw(Error, "EncodingError U+5318");
r = r && ([...ms932Encoder.encode("匙匚")].join(",") === "141,250,153,183"); // U+5319
expect(() => {ms932Encoder.encode("\u531B")}).to.throw(Error, "EncodingError U+531B");
expect(() => {ms932Encoder.encode("\u531C")}).to.throw(Error, "EncodingError U+531C");
r = r && ([...ms932Encoder.encode("匝")].join(",") === "145,120"); // U+531D
expect(() => {ms932Encoder.encode("\u531E")}).to.throw(Error, "EncodingError U+531E");
expect(() => {ms932Encoder.encode("\u531F")}).to.throw(Error, "EncodingError U+531F");
r = r && ([...ms932Encoder.encode("匠匡")].join(",") === "143,160,139,167"); // U+5320
expect(() => {ms932Encoder.encode("\u5322")}).to.throw(Error, "EncodingError U+5322");
r = r && ([...ms932Encoder.encode("匣匤")].join(",") === "153,184,250,139"); // U+5323
expect(() => {ms932Encoder.encode("\u5325")}).to.throw(Error, "EncodingError U+5325");
expect(() => {ms932Encoder.encode("\u5326")}).to.throw(Error, "EncodingError U+5326");
expect(() => {ms932Encoder.encode("\u5327")}).to.throw(Error, "EncodingError U+5327");
expect(() => {ms932Encoder.encode("\u5328")}).to.throw(Error, "EncodingError U+5328");
expect(() => {ms932Encoder.encode("\u5329")}).to.throw(Error, "EncodingError U+5329");
r = r && ([...ms932Encoder.encode("匪")].join(",") === "148,217"); // U+532A
expect(() => {ms932Encoder.encode("\u532B")}).to.throw(Error, "EncodingError U+532B");
expect(() => {ms932Encoder.encode("\u532C")}).to.throw(Error, "EncodingError U+532C");
expect(() => {ms932Encoder.encode("\u532D")}).to.throw(Error, "EncodingError U+532D");
expect(() => {ms932Encoder.encode("\u532E")}).to.throw(Error, "EncodingError U+532E");
r = r && ([...ms932Encoder.encode("匯")].join(",") === "153,185"); // U+532F
expect(() => {ms932Encoder.encode("\u5330")}).to.throw(Error, "EncodingError U+5330");
r = r && ([...ms932Encoder.encode("匱")].join(",") === "153,186"); // U+5331
expect(() => {ms932Encoder.encode("\u5332")}).to.throw(Error, "EncodingError U+5332");
r = r && ([...ms932Encoder.encode("匳")].join(",") === "153,187"); // U+5333
expect(() => {ms932Encoder.encode("\u5334")}).to.throw(Error, "EncodingError U+5334");
expect(() => {ms932Encoder.encode("\u5335")}).to.throw(Error, "EncodingError U+5335");
expect(() => {ms932Encoder.encode("\u5336")}).to.throw(Error, "EncodingError U+5336");
expect(() => {ms932Encoder.encode("\u5337")}).to.throw(Error, "EncodingError U+5337");
r = r && ([...ms932Encoder.encode("匸匹区医")].join(",") === "153,188,149,67,139,230,136,227"); // U+5338
expect(() => {ms932Encoder.encode("\u533C")}).to.throw(Error, "EncodingError U+533C");
expect(() => {ms932Encoder.encode("\u533D")}).to.throw(Error, "EncodingError U+533D");
expect(() => {ms932Encoder.encode("\u533E")}).to.throw(Error, "EncodingError U+533E");
r = r && ([...ms932Encoder.encode("匿區十")].join(",") === "147,189,153,189,143,92"); // U+533F
expect(() => {ms932Encoder.encode("\u5342")}).to.throw(Error, "EncodingError U+5342");
r = r && ([...ms932Encoder.encode("千")].join(",") === "144,231"); // U+5343
expect(() => {ms932Encoder.encode("\u5344")}).to.throw(Error, "EncodingError U+5344");
r = r && ([...ms932Encoder.encode("卅卆升午卉半")].join(",") === "153,191,153,190,143,161,140,223,153,193,148,188"); // U+5345
expect(() => {ms932Encoder.encode("\u534B")}).to.throw(Error, "EncodingError U+534B");
expect(() => {ms932Encoder.encode("\u534C")}).to.throw(Error, "EncodingError U+534C");
r = r && ([...ms932Encoder.encode("卍")].join(",") === "153,194"); // U+534D
expect(() => {ms932Encoder.encode("\u534E")}).to.throw(Error, "EncodingError U+534E");
expect(() => {ms932Encoder.encode("\u534F")}).to.throw(Error, "EncodingError U+534F");
expect(() => {ms932Encoder.encode("\u5350")}).to.throw(Error, "EncodingError U+5350");
r = r && ([...ms932Encoder.encode("卑卒卓協")].join(",") === "148,218,145,178,145,236,139,166"); // U+5351
expect(() => {ms932Encoder.encode("\u5355")}).to.throw(Error, "EncodingError U+5355");
expect(() => {ms932Encoder.encode("\u5356")}).to.throw(Error, "EncodingError U+5356");
r = r && ([...ms932Encoder.encode("南単")].join(",") === "147,236,146,80"); // U+5357
expect(() => {ms932Encoder.encode("\u5359")}).to.throw(Error, "EncodingError U+5359");
r = r && ([...ms932Encoder.encode("博")].join(",") === "148,142"); // U+535A
expect(() => {ms932Encoder.encode("\u535B")}).to.throw(Error, "EncodingError U+535B");
r = r && ([...ms932Encoder.encode("卜")].join(",") === "150,109"); // U+535C
expect(() => {ms932Encoder.encode("\u535D")}).to.throw(Error, "EncodingError U+535D");
r = r && ([...ms932Encoder.encode("卞")].join(",") === "153,196"); // U+535E
expect(() => {ms932Encoder.encode("\u535F")}).to.throw(Error, "EncodingError U+535F");
r = r && ([...ms932Encoder.encode("占")].join(",") === "144,232"); // U+5360
expect(() => {ms932Encoder.encode("\u5361")}).to.throw(Error, "EncodingError U+5361");
expect(() => {ms932Encoder.encode("\u5362")}).to.throw(Error, "EncodingError U+5362");
expect(() => {ms932Encoder.encode("\u5363")}).to.throw(Error, "EncodingError U+5363");
expect(() => {ms932Encoder.encode("\u5364")}).to.throw(Error, "EncodingError U+5364");
expect(() => {ms932Encoder.encode("\u5365")}).to.throw(Error, "EncodingError U+5365");
r = r && ([...ms932Encoder.encode("卦")].join(",") === "140,84"); // U+5366
expect(() => {ms932Encoder.encode("\u5367")}).to.throw(Error, "EncodingError U+5367");
expect(() => {ms932Encoder.encode("\u5368")}).to.throw(Error, "EncodingError U+5368");
r = r && ([...ms932Encoder.encode("卩")].join(",") === "153,197"); // U+5369
expect(() => {ms932Encoder.encode("\u536A")}).to.throw(Error, "EncodingError U+536A");
expect(() => {ms932Encoder.encode("\u536B")}).to.throw(Error, "EncodingError U+536B");
expect(() => {ms932Encoder.encode("\u536C")}).to.throw(Error, "EncodingError U+536C");
expect(() => {ms932Encoder.encode("\u536D")}).to.throw(Error, "EncodingError U+536D");
r = r && ([...ms932Encoder.encode("卮卯印危卲即却卵")].join(",") === "153,198,137,75,136,243,138,235,250,140,145,166,139,112,151,145"); // U+536E
expect(() => {ms932Encoder.encode("\u5376")}).to.throw(Error, "EncodingError U+5376");
r = r && ([...ms932Encoder.encode("卷卸")].join(",") === "153,201,137,181"); // U+5377
expect(() => {ms932Encoder.encode("\u5379")}).to.throw(Error, "EncodingError U+5379");
expect(() => {ms932Encoder.encode("\u537A")}).to.throw(Error, "EncodingError U+537A");
r = r && ([...ms932Encoder.encode("卻")].join(",") === "153,200"); // U+537B
expect(() => {ms932Encoder.encode("\u537C")}).to.throw(Error, "EncodingError U+537C");
expect(() => {ms932Encoder.encode("\u537D")}).to.throw(Error, "EncodingError U+537D");
expect(() => {ms932Encoder.encode("\u537E")}).to.throw(Error, "EncodingError U+537E");
r = r && ([...ms932Encoder.encode("卿")].join(",") === "139,168"); // U+537F
expect(() => {ms932Encoder.encode("\u5380")}).to.throw(Error, "EncodingError U+5380");
expect(() => {ms932Encoder.encode("\u5381")}).to.throw(Error, "EncodingError U+5381");
r = r && ([...ms932Encoder.encode("厂")].join(",") === "153,202"); // U+5382
expect(() => {ms932Encoder.encode("\u5383")}).to.throw(Error, "EncodingError U+5383");
r = r && ([...ms932Encoder.encode("厄")].join(",") === "150,239"); // U+5384
expect(() => {ms932Encoder.encode("\u5385")}).to.throw(Error, "EncodingError U+5385");
expect(() => {ms932Encoder.encode("\u5386")}).to.throw(Error, "EncodingError U+5386");
expect(() => {ms932Encoder.encode("\u5387")}).to.throw(Error, "EncodingError U+5387");
expect(() => {ms932Encoder.encode("\u5388")}).to.throw(Error, "EncodingError U+5388");
expect(() => {ms932Encoder.encode("\u5389")}).to.throw(Error, "EncodingError U+5389");
expect(() => {ms932Encoder.encode("\u538A")}).to.throw(Error, "EncodingError U+538A");
expect(() => {ms932Encoder.encode("\u538B")}).to.throw(Error, "EncodingError U+538B");
expect(() => {ms932Encoder.encode("\u538C")}).to.throw(Error, "EncodingError U+538C");
expect(() => {ms932Encoder.encode("\u538D")}).to.throw(Error, "EncodingError U+538D");
expect(() => {ms932Encoder.encode("\u538E")}).to.throw(Error, "EncodingError U+538E");
expect(() => {ms932Encoder.encode("\u538F")}).to.throw(Error, "EncodingError U+538F");
expect(() => {ms932Encoder.encode("\u5390")}).to.throw(Error, "EncodingError U+5390");
expect(() => {ms932Encoder.encode("\u5391")}).to.throw(Error, "EncodingError U+5391");
expect(() => {ms932Encoder.encode("\u5392")}).to.throw(Error, "EncodingError U+5392");
r = r && ([...ms932Encoder.encode("厓")].join(",") === "250,141"); // U+5393
expect(() => {ms932Encoder.encode("\u5394")}).to.throw(Error, "EncodingError U+5394");
expect(() => {ms932Encoder.encode("\u5395")}).to.throw(Error, "EncodingError U+5395");
r = r && ([...ms932Encoder.encode("厖")].join(",") === "153,203"); // U+5396
expect(() => {ms932Encoder.encode("\u5397")}).to.throw(Error, "EncodingError U+5397");
r = r && ([...ms932Encoder.encode("厘")].join(",") === "151,208"); // U+5398
expect(() => {ms932Encoder.encode("\u5399")}).to.throw(Error, "EncodingError U+5399");
r = r && ([...ms932Encoder.encode("厚")].join(",") === "140,250"); // U+539A
expect(() => {ms932Encoder.encode("\u539B")}).to.throw(Error, "EncodingError U+539B");
expect(() => {ms932Encoder.encode("\u539C")}).to.throw(Error, "EncodingError U+539C");
expect(() => {ms932Encoder.encode("\u539D")}).to.throw(Error, "EncodingError U+539D");
expect(() => {ms932Encoder.encode("\u539E")}).to.throw(Error, "EncodingError U+539E");
r = r && ([...ms932Encoder.encode("原厠")].join(",") === "140,180,153,204"); // U+539F
expect(() => {ms932Encoder.encode("\u53A1")}).to.throw(Error, "EncodingError U+53A1");
expect(() => {ms932Encoder.encode("\u53A2")}).to.throw(Error, "EncodingError U+53A2");
expect(() => {ms932Encoder.encode("\u53A3")}).to.throw(Error, "EncodingError U+53A3");
expect(() => {ms932Encoder.encode("\u53A4")}).to.throw(Error, "EncodingError U+53A4");
r = r && ([...ms932Encoder.encode("厥厦")].join(",") === "153,206,153,205"); // U+53A5
expect(() => {ms932Encoder.encode("\u53A7")}).to.throw(Error, "EncodingError U+53A7");
r = r && ([...ms932Encoder.encode("厨厩")].join(",") === "144,126,137,88"); // U+53A8
expect(() => {ms932Encoder.encode("\u53AA")}).to.throw(Error, "EncodingError U+53AA");
expect(() => {ms932Encoder.encode("\u53AB")}).to.throw(Error, "EncodingError U+53AB");
expect(() => {ms932Encoder.encode("\u53AC")}).to.throw(Error, "EncodingError U+53AC");
r = r && ([...ms932Encoder.encode("厭厮")].join(",") === "137,125,153,207"); // U+53AD
expect(() => {ms932Encoder.encode("\u53AF")}).to.throw(Error, "EncodingError U+53AF");
r = r && ([...ms932Encoder.encode("厰")].join(",") === "153,208"); // U+53B0
expect(() => {ms932Encoder.encode("\u53B1")}).to.throw(Error, "EncodingError U+53B1");
r = r && ([...ms932Encoder.encode("厲厳")].join(",") === "250,142,140,181"); // U+53B2
expect(() => {ms932Encoder.encode("\u53B4")}).to.throw(Error, "EncodingError U+53B4");
expect(() => {ms932Encoder.encode("\u53B5")}).to.throw(Error, "EncodingError U+53B5");
r = r && ([...ms932Encoder.encode("厶")].join(",") === "153,209"); // U+53B6
expect(() => {ms932Encoder.encode("\u53B7")}).to.throw(Error, "EncodingError U+53B7");
expect(() => {ms932Encoder.encode("\u53B8")}).to.throw(Error, "EncodingError U+53B8");
expect(() => {ms932Encoder.encode("\u53B9")}).to.throw(Error, "EncodingError U+53B9");
expect(() => {ms932Encoder.encode("\u53BA")}).to.throw(Error, "EncodingError U+53BA");
r = r && ([...ms932Encoder.encode("去")].join(",") === "139,142"); // U+53BB
expect(() => {ms932Encoder.encode("\u53BC")}).to.throw(Error, "EncodingError U+53BC");
expect(() => {ms932Encoder.encode("\u53BD")}).to.throw(Error, "EncodingError U+53BD");
expect(() => {ms932Encoder.encode("\u53BE")}).to.throw(Error, "EncodingError U+53BE");
expect(() => {ms932Encoder.encode("\u53BF")}).to.throw(Error, "EncodingError U+53BF");
expect(() => {ms932Encoder.encode("\u53C0")}).to.throw(Error, "EncodingError U+53C0");
expect(() => {ms932Encoder.encode("\u53C1")}).to.throw(Error, "EncodingError U+53C1");
r = r && ([...ms932Encoder.encode("参參")].join(",") === "142,81,153,210"); // U+53C2
expect(() => {ms932Encoder.encode("\u53C4")}).to.throw(Error, "EncodingError U+53C4");
expect(() => {ms932Encoder.encode("\u53C5")}).to.throw(Error, "EncodingError U+53C5");
expect(() => {ms932Encoder.encode("\u53C6")}).to.throw(Error, "EncodingError U+53C6");
expect(() => {ms932Encoder.encode("\u53C7")}).to.throw(Error, "EncodingError U+53C7");
r = r && ([...ms932Encoder.encode("又叉及友双反収")].join(",") === "150,148,141,179,139,121,151,70,145,111,148,189,142,251"); // U+53C8
expect(() => {ms932Encoder.encode("\u53CF")}).to.throw(Error, "EncodingError U+53CF");
expect(() => {ms932Encoder.encode("\u53D0")}).to.throw(Error, "EncodingError U+53D0");
expect(() => {ms932Encoder.encode("\u53D1")}).to.throw(Error, "EncodingError U+53D1");
expect(() => {ms932Encoder.encode("\u53D2")}).to.throw(Error, "EncodingError U+53D2");
expect(() => {ms932Encoder.encode("\u53D3")}).to.throw(Error, "EncodingError U+53D3");
r = r && ([...ms932Encoder.encode("叔")].join(",") === "143,102"); // U+53D4
expect(() => {ms932Encoder.encode("\u53D5")}).to.throw(Error, "EncodingError U+53D5");
r = r && ([...ms932Encoder.encode("取受")].join(",") === "142,230,142,243"); // U+53D6
expect(() => {ms932Encoder.encode("\u53D8")}).to.throw(Error, "EncodingError U+53D8");
r = r && ([...ms932Encoder.encode("叙")].join(",") === "143,150"); // U+53D9
expect(() => {ms932Encoder.encode("\u53DA")}).to.throw(Error, "EncodingError U+53DA");
r = r && ([...ms932Encoder.encode("叛")].join(",") === "148,190"); // U+53DB
expect(() => {ms932Encoder.encode("\u53DC")}).to.throw(Error, "EncodingError U+53DC");
r = r && ([...ms932Encoder.encode("叝")].join(",") === "250,143"); // U+53DD
expect(() => {ms932Encoder.encode("\u53DE")}).to.throw(Error, "EncodingError U+53DE");
r = r && ([...ms932Encoder.encode("叟")].join(",") === "153,213"); // U+53DF
expect(() => {ms932Encoder.encode("\u53E0")}).to.throw(Error, "EncodingError U+53E0");
r = r && ([...ms932Encoder.encode("叡叢口古句")].join(",") === "137,98,145,112,140,251,140,195,139,229"); // U+53E1
expect(() => {ms932Encoder.encode("\u53E6")}).to.throw(Error, "EncodingError U+53E6");
expect(() => {ms932Encoder.encode("\u53E7")}).to.throw(Error, "EncodingError U+53E7");
r = r && ([...ms932Encoder.encode("叨叩只叫召叭叮可台叱史右")].join(",") === "153,217,146,64,145,252,139,169,143,162,153,218,153,216,137,194,145,228,142,182,142,106,137,69"); // U+53E8
expect(() => {ms932Encoder.encode("\u53F4")}).to.throw(Error, "EncodingError U+53F4");
expect(() => {ms932Encoder.encode("\u53F5")}).to.throw(Error, "EncodingError U+53F5");
r = r && ([...ms932Encoder.encode("叶号司")].join(",") === "138,144,141,134,142,105"); // U+53F6
expect(() => {ms932Encoder.encode("\u53F9")}).to.throw(Error, "EncodingError U+53F9");
r = r && ([...ms932Encoder.encode("叺")].join(",") === "153,219"); // U+53FA
expect(() => {ms932Encoder.encode("\u53FB")}).to.throw(Error, "EncodingError U+53FB");
expect(() => {ms932Encoder.encode("\u53FC")}).to.throw(Error, "EncodingError U+53FC");
expect(() => {ms932Encoder.encode("\u53FD")}).to.throw(Error, "EncodingError U+53FD");
expect(() => {ms932Encoder.encode("\u53FE")}).to.throw(Error, "EncodingError U+53FE");
expect(() => {ms932Encoder.encode("\u53FF")}).to.throw(Error, "EncodingError U+53FF");

expect(r).to.equal(true);

  });

});
