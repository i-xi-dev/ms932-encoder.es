import { assertStrictEquals, assertThrows } from "std/testing/asserts";
import { Ms932 } from "../src/ms932.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+5000-U+53FF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(() => {
    ms932Encoder.encode("\u5000");
  }, Error, "EncodingError U+5000");
  assertThrows(() => {
    ms932Encoder.encode("\u5001");
  }, Error, "EncodingError U+5001");
  assertThrows(() => {
    ms932Encoder.encode("\u5002");
  }, Error, "EncodingError U+5002");
  assertThrows(() => {
    ms932Encoder.encode("\u5003");
  }, Error, "EncodingError U+5003");
  assertThrows(() => {
    ms932Encoder.encode("\u5004");
  }, Error, "EncodingError U+5004");
  r = r && ([...ms932Encoder.encode("倅倆")].join(",") === "152,228,152,237"); // U+5005
  assertThrows(() => {
    ms932Encoder.encode("\u5007");
  }, Error, "EncodingError U+5007");
  assertThrows(() => {
    ms932Encoder.encode("\u5008");
  }, Error, "EncodingError U+5008");
  r = r && ([...ms932Encoder.encode("倉")].join(",") === "145,113"); // U+5009
  assertThrows(() => {
    ms932Encoder.encode("\u500A");
  }, Error, "EncodingError U+500A");
  r = r && ([...ms932Encoder.encode("個")].join(",") === "140,194"); // U+500B
  assertThrows(() => {
    ms932Encoder.encode("\u500C");
  }, Error, "EncodingError U+500C");
  r = r && ([...ms932Encoder.encode("倍")].join(",") === "148,123"); // U+500D
  assertThrows(() => {
    ms932Encoder.encode("\u500E");
  }, Error, "EncodingError U+500E");
  r = r && ([...ms932Encoder.encode("倏")].join(",") === "224,197"); // U+500F
  assertThrows(() => {
    ms932Encoder.encode("\u5010");
  }, Error, "EncodingError U+5010");
  r = r && ([...ms932Encoder.encode("們倒")].join(",") === "152,236,147,124"); // U+5011
  assertThrows(() => {
    ms932Encoder.encode("\u5013");
  }, Error, "EncodingError U+5013");
  r = r && ([...ms932Encoder.encode("倔")].join(",") === "152,225"); // U+5014
  assertThrows(() => {
    ms932Encoder.encode("\u5015");
  }, Error, "EncodingError U+5015");
  r = r && ([...ms932Encoder.encode("倖")].join(",") === "140,244"); // U+5016
  assertThrows(() => {
    ms932Encoder.encode("\u5017");
  }, Error, "EncodingError U+5017");
  assertThrows(() => {
    ms932Encoder.encode("\u5018");
  }, Error, "EncodingError U+5018");
  r = r && ([...ms932Encoder.encode("候倚")].join(",") === "140,243,152,223"); // U+5019
  assertThrows(() => {
    ms932Encoder.encode("\u501B");
  }, Error, "EncodingError U+501B");
  assertThrows(() => {
    ms932Encoder.encode("\u501C");
  }, Error, "EncodingError U+501C");
  assertThrows(() => {
    ms932Encoder.encode("\u501D");
  }, Error, "EncodingError U+501D");
  r = r && ([...ms932Encoder.encode("倞借")].join(",") === "250,119,142,216"); // U+501E
  assertThrows(() => {
    ms932Encoder.encode("\u5020");
  }, Error, "EncodingError U+5020");
  r = r &&
    ([...ms932Encoder.encode("倡倢倣値倥倦")].join(",") ===
      "152,231,250,117,149,237,146,108,152,227,140,145"); // U+5021
  assertThrows(() => {
    ms932Encoder.encode("\u5027");
  }, Error, "EncodingError U+5027");
  r = r &&
    ([...ms932Encoder.encode("倨倩倪倫倬倭")].join(",") ===
      "152,224,152,232,152,226,151,207,152,233,152,96"); // U+5028
  assertThrows(() => {
    ms932Encoder.encode("\u502E");
  }, Error, "EncodingError U+502E");
  assertThrows(() => {
    ms932Encoder.encode("\u502F");
  }, Error, "EncodingError U+502F");
  assertThrows(() => {
    ms932Encoder.encode("\u5030");
  }, Error, "EncodingError U+5030");
  assertThrows(() => {
    ms932Encoder.encode("\u5031");
  }, Error, "EncodingError U+5031");
  assertThrows(() => {
    ms932Encoder.encode("\u5032");
  }, Error, "EncodingError U+5032");
  assertThrows(() => {
    ms932Encoder.encode("\u5033");
  }, Error, "EncodingError U+5033");
  assertThrows(() => {
    ms932Encoder.encode("\u5034");
  }, Error, "EncodingError U+5034");
  assertThrows(() => {
    ms932Encoder.encode("\u5035");
  }, Error, "EncodingError U+5035");
  r = r && ([...ms932Encoder.encode("倶")].join(",") === "139,228"); // U+5036
  assertThrows(() => {
    ms932Encoder.encode("\u5037");
  }, Error, "EncodingError U+5037");
  assertThrows(() => {
    ms932Encoder.encode("\u5038");
  }, Error, "EncodingError U+5038");
  r = r && ([...ms932Encoder.encode("倹")].join(",") === "140,144"); // U+5039
  assertThrows(() => {
    ms932Encoder.encode("\u503A");
  }, Error, "EncodingError U+503A");
  assertThrows(() => {
    ms932Encoder.encode("\u503B");
  }, Error, "EncodingError U+503B");
  assertThrows(() => {
    ms932Encoder.encode("\u503C");
  }, Error, "EncodingError U+503C");
  assertThrows(() => {
    ms932Encoder.encode("\u503D");
  }, Error, "EncodingError U+503D");
  assertThrows(() => {
    ms932Encoder.encode("\u503E");
  }, Error, "EncodingError U+503E");
  assertThrows(() => {
    ms932Encoder.encode("\u503F");
  }, Error, "EncodingError U+503F");
  r = r && ([...ms932Encoder.encode("偀")].join(",") === "250,116"); // U+5040
  assertThrows(() => {
    ms932Encoder.encode("\u5041");
  }, Error, "EncodingError U+5041");
  r = r && ([...ms932Encoder.encode("偂偃")].join(",") === "250,122,152,238"); // U+5042
  assertThrows(() => {
    ms932Encoder.encode("\u5044");
  }, Error, "EncodingError U+5044");
  assertThrows(() => {
    ms932Encoder.encode("\u5045");
  }, Error, "EncodingError U+5045");
  r = r &&
    ([...ms932Encoder.encode("偆假偈偉")].join(",") ===
      "250,120,152,239,152,243,136,204"); // U+5046
  assertThrows(() => {
    ms932Encoder.encode("\u504A");
  }, Error, "EncodingError U+504A");
  assertThrows(() => {
    ms932Encoder.encode("\u504B");
  }, Error, "EncodingError U+504B");
  assertThrows(() => {
    ms932Encoder.encode("\u504C");
  }, Error, "EncodingError U+504C");
  assertThrows(() => {
    ms932Encoder.encode("\u504D");
  }, Error, "EncodingError U+504D");
  assertThrows(() => {
    ms932Encoder.encode("\u504E");
  }, Error, "EncodingError U+504E");
  r = r && ([...ms932Encoder.encode("偏偐")].join(",") === "149,206,152,242"); // U+504F
  assertThrows(() => {
    ms932Encoder.encode("\u5051");
  }, Error, "EncodingError U+5051");
  assertThrows(() => {
    ms932Encoder.encode("\u5052");
  }, Error, "EncodingError U+5052");
  assertThrows(() => {
    ms932Encoder.encode("\u5053");
  }, Error, "EncodingError U+5053");
  assertThrows(() => {
    ms932Encoder.encode("\u5054");
  }, Error, "EncodingError U+5054");
  r = r && ([...ms932Encoder.encode("偕偖")].join(",") === "152,241,152,245"); // U+5055
  assertThrows(() => {
    ms932Encoder.encode("\u5057");
  }, Error, "EncodingError U+5057");
  assertThrows(() => {
    ms932Encoder.encode("\u5058");
  }, Error, "EncodingError U+5058");
  assertThrows(() => {
    ms932Encoder.encode("\u5059");
  }, Error, "EncodingError U+5059");
  r = r && ([...ms932Encoder.encode("做")].join(",") === "152,244"); // U+505A
  assertThrows(() => {
    ms932Encoder.encode("\u505B");
  }, Error, "EncodingError U+505B");
  r = r && ([...ms932Encoder.encode("停")].join(",") === "146,226"); // U+505C
  assertThrows(() => {
    ms932Encoder.encode("\u505D");
  }, Error, "EncodingError U+505D");
  assertThrows(() => {
    ms932Encoder.encode("\u505E");
  }, Error, "EncodingError U+505E");
  assertThrows(() => {
    ms932Encoder.encode("\u505F");
  }, Error, "EncodingError U+505F");
  assertThrows(() => {
    ms932Encoder.encode("\u5060");
  }, Error, "EncodingError U+5060");
  assertThrows(() => {
    ms932Encoder.encode("\u5061");
  }, Error, "EncodingError U+5061");
  assertThrows(() => {
    ms932Encoder.encode("\u5062");
  }, Error, "EncodingError U+5062");
  assertThrows(() => {
    ms932Encoder.encode("\u5063");
  }, Error, "EncodingError U+5063");
  assertThrows(() => {
    ms932Encoder.encode("\u5064");
  }, Error, "EncodingError U+5064");
  r = r && ([...ms932Encoder.encode("健")].join(",") === "140,146"); // U+5065
  assertThrows(() => {
    ms932Encoder.encode("\u5066");
  }, Error, "EncodingError U+5066");
  assertThrows(() => {
    ms932Encoder.encode("\u5067");
  }, Error, "EncodingError U+5067");
  assertThrows(() => {
    ms932Encoder.encode("\u5068");
  }, Error, "EncodingError U+5068");
  assertThrows(() => {
    ms932Encoder.encode("\u5069");
  }, Error, "EncodingError U+5069");
  assertThrows(() => {
    ms932Encoder.encode("\u506A");
  }, Error, "EncodingError U+506A");
  assertThrows(() => {
    ms932Encoder.encode("\u506B");
  }, Error, "EncodingError U+506B");
  r = r && ([...ms932Encoder.encode("偬")].join(",") === "152,246"); // U+506C
  assertThrows(() => {
    ms932Encoder.encode("\u506D");
  }, Error, "EncodingError U+506D");
  assertThrows(() => {
    ms932Encoder.encode("\u506E");
  }, Error, "EncodingError U+506E");
  assertThrows(() => {
    ms932Encoder.encode("\u506F");
  }, Error, "EncodingError U+506F");
  r = r && ([...ms932Encoder.encode("偰")].join(",") === "250,121"); // U+5070
  assertThrows(() => {
    ms932Encoder.encode("\u5071");
  }, Error, "EncodingError U+5071");
  r = r && ([...ms932Encoder.encode("偲")].join(",") === "142,195"); // U+5072
  assertThrows(() => {
    ms932Encoder.encode("\u5073");
  }, Error, "EncodingError U+5073");
  r = r &&
    ([...ms932Encoder.encode("側偵偶")].join(",") === "145,164,146,227,139,244"); // U+5074
  assertThrows(() => {
    ms932Encoder.encode("\u5077");
  }, Error, "EncodingError U+5077");
  r = r && ([...ms932Encoder.encode("偸")].join(",") === "152,247"); // U+5078
  assertThrows(() => {
    ms932Encoder.encode("\u5079");
  }, Error, "EncodingError U+5079");
  assertThrows(() => {
    ms932Encoder.encode("\u507A");
  }, Error, "EncodingError U+507A");
  assertThrows(() => {
    ms932Encoder.encode("\u507B");
  }, Error, "EncodingError U+507B");
  assertThrows(() => {
    ms932Encoder.encode("\u507C");
  }, Error, "EncodingError U+507C");
  r = r && ([...ms932Encoder.encode("偽")].join(",") === "139,85"); // U+507D
  assertThrows(() => {
    ms932Encoder.encode("\u507E");
  }, Error, "EncodingError U+507E");
  assertThrows(() => {
    ms932Encoder.encode("\u507F");
  }, Error, "EncodingError U+507F");
  r = r && ([...ms932Encoder.encode("傀")].join(",") === "152,248"); // U+5080
  assertThrows(() => {
    ms932Encoder.encode("\u5081");
  }, Error, "EncodingError U+5081");
  assertThrows(() => {
    ms932Encoder.encode("\u5082");
  }, Error, "EncodingError U+5082");
  assertThrows(() => {
    ms932Encoder.encode("\u5083");
  }, Error, "EncodingError U+5083");
  assertThrows(() => {
    ms932Encoder.encode("\u5084");
  }, Error, "EncodingError U+5084");
  r = r && ([...ms932Encoder.encode("傅")].join(",") === "152,250"); // U+5085
  assertThrows(() => {
    ms932Encoder.encode("\u5086");
  }, Error, "EncodingError U+5086");
  assertThrows(() => {
    ms932Encoder.encode("\u5087");
  }, Error, "EncodingError U+5087");
  assertThrows(() => {
    ms932Encoder.encode("\u5088");
  }, Error, "EncodingError U+5088");
  assertThrows(() => {
    ms932Encoder.encode("\u5089");
  }, Error, "EncodingError U+5089");
  assertThrows(() => {
    ms932Encoder.encode("\u508A");
  }, Error, "EncodingError U+508A");
  assertThrows(() => {
    ms932Encoder.encode("\u508B");
  }, Error, "EncodingError U+508B");
  assertThrows(() => {
    ms932Encoder.encode("\u508C");
  }, Error, "EncodingError U+508C");
  r = r && ([...ms932Encoder.encode("傍")].join(",") === "150,84"); // U+508D
  assertThrows(() => {
    ms932Encoder.encode("\u508E");
  }, Error, "EncodingError U+508E");
  assertThrows(() => {
    ms932Encoder.encode("\u508F");
  }, Error, "EncodingError U+508F");
  assertThrows(() => {
    ms932Encoder.encode("\u5090");
  }, Error, "EncodingError U+5090");
  r = r && ([...ms932Encoder.encode("傑")].join(",") === "140,134"); // U+5091
  assertThrows(() => {
    ms932Encoder.encode("\u5092");
  }, Error, "EncodingError U+5092");
  assertThrows(() => {
    ms932Encoder.encode("\u5093");
  }, Error, "EncodingError U+5093");
  r = r && ([...ms932Encoder.encode("傔")].join(",") === "250,123"); // U+5094
  assertThrows(() => {
    ms932Encoder.encode("\u5095");
  }, Error, "EncodingError U+5095");
  assertThrows(() => {
    ms932Encoder.encode("\u5096");
  }, Error, "EncodingError U+5096");
  assertThrows(() => {
    ms932Encoder.encode("\u5097");
  }, Error, "EncodingError U+5097");
  r = r &&
    ([...ms932Encoder.encode("傘備傚")].join(",") === "142,80,148,245,152,249"); // U+5098
  assertThrows(() => {
    ms932Encoder.encode("\u509B");
  }, Error, "EncodingError U+509B");
  assertThrows(() => {
    ms932Encoder.encode("\u509C");
  }, Error, "EncodingError U+509C");
  assertThrows(() => {
    ms932Encoder.encode("\u509D");
  }, Error, "EncodingError U+509D");
  assertThrows(() => {
    ms932Encoder.encode("\u509E");
  }, Error, "EncodingError U+509E");
  assertThrows(() => {
    ms932Encoder.encode("\u509F");
  }, Error, "EncodingError U+509F");
  assertThrows(() => {
    ms932Encoder.encode("\u50A0");
  }, Error, "EncodingError U+50A0");
  assertThrows(() => {
    ms932Encoder.encode("\u50A1");
  }, Error, "EncodingError U+50A1");
  assertThrows(() => {
    ms932Encoder.encode("\u50A2");
  }, Error, "EncodingError U+50A2");
  assertThrows(() => {
    ms932Encoder.encode("\u50A3");
  }, Error, "EncodingError U+50A3");
  assertThrows(() => {
    ms932Encoder.encode("\u50A4");
  }, Error, "EncodingError U+50A4");
  assertThrows(() => {
    ms932Encoder.encode("\u50A5");
  }, Error, "EncodingError U+50A5");
  assertThrows(() => {
    ms932Encoder.encode("\u50A6");
  }, Error, "EncodingError U+50A6");
  assertThrows(() => {
    ms932Encoder.encode("\u50A7");
  }, Error, "EncodingError U+50A7");
  assertThrows(() => {
    ms932Encoder.encode("\u50A8");
  }, Error, "EncodingError U+50A8");
  assertThrows(() => {
    ms932Encoder.encode("\u50A9");
  }, Error, "EncodingError U+50A9");
  assertThrows(() => {
    ms932Encoder.encode("\u50AA");
  }, Error, "EncodingError U+50AA");
  assertThrows(() => {
    ms932Encoder.encode("\u50AB");
  }, Error, "EncodingError U+50AB");
  r = r && ([...ms932Encoder.encode("催傭")].join(",") === "141,195,151,98"); // U+50AC
  assertThrows(() => {
    ms932Encoder.encode("\u50AE");
  }, Error, "EncodingError U+50AE");
  assertThrows(() => {
    ms932Encoder.encode("\u50AF");
  }, Error, "EncodingError U+50AF");
  assertThrows(() => {
    ms932Encoder.encode("\u50B0");
  }, Error, "EncodingError U+50B0");
  assertThrows(() => {
    ms932Encoder.encode("\u50B1");
  }, Error, "EncodingError U+50B1");
  r = r &&
    ([...ms932Encoder.encode("傲傳傴債")].join(",") ===
      "152,252,153,66,152,251,141,194"); // U+50B2
  assertThrows(() => {
    ms932Encoder.encode("\u50B6");
  }, Error, "EncodingError U+50B6");
  r = r && ([...ms932Encoder.encode("傷")].join(",") === "143,157"); // U+50B7
  assertThrows(() => {
    ms932Encoder.encode("\u50B8");
  }, Error, "EncodingError U+50B8");
  assertThrows(() => {
    ms932Encoder.encode("\u50B9");
  }, Error, "EncodingError U+50B9");
  assertThrows(() => {
    ms932Encoder.encode("\u50BA");
  }, Error, "EncodingError U+50BA");
  assertThrows(() => {
    ms932Encoder.encode("\u50BB");
  }, Error, "EncodingError U+50BB");
  assertThrows(() => {
    ms932Encoder.encode("\u50BC");
  }, Error, "EncodingError U+50BC");
  assertThrows(() => {
    ms932Encoder.encode("\u50BD");
  }, Error, "EncodingError U+50BD");
  r = r && ([...ms932Encoder.encode("傾")].join(",") === "140,88"); // U+50BE
  assertThrows(() => {
    ms932Encoder.encode("\u50BF");
  }, Error, "EncodingError U+50BF");
  assertThrows(() => {
    ms932Encoder.encode("\u50C0");
  }, Error, "EncodingError U+50C0");
  assertThrows(() => {
    ms932Encoder.encode("\u50C1");
  }, Error, "EncodingError U+50C1");
  r = r && ([...ms932Encoder.encode("僂")].join(",") === "153,67"); // U+50C2
  assertThrows(() => {
    ms932Encoder.encode("\u50C3");
  }, Error, "EncodingError U+50C3");
  assertThrows(() => {
    ms932Encoder.encode("\u50C4");
  }, Error, "EncodingError U+50C4");
  r = r && ([...ms932Encoder.encode("僅")].join(",") === "139,205"); // U+50C5
  assertThrows(() => {
    ms932Encoder.encode("\u50C6");
  }, Error, "EncodingError U+50C6");
  assertThrows(() => {
    ms932Encoder.encode("\u50C7");
  }, Error, "EncodingError U+50C7");
  assertThrows(() => {
    ms932Encoder.encode("\u50C8");
  }, Error, "EncodingError U+50C8");
  r = r && ([...ms932Encoder.encode("僉僊")].join(",") === "153,64,153,65"); // U+50C9
  assertThrows(() => {
    ms932Encoder.encode("\u50CB");
  }, Error, "EncodingError U+50CB");
  assertThrows(() => {
    ms932Encoder.encode("\u50CC");
  }, Error, "EncodingError U+50CC");
  r = r && ([...ms932Encoder.encode("働")].join(",") === "147,173"); // U+50CD
  assertThrows(() => {
    ms932Encoder.encode("\u50CE");
  }, Error, "EncodingError U+50CE");
  r = r && ([...ms932Encoder.encode("像")].join(",") === "145,156"); // U+50CF
  assertThrows(() => {
    ms932Encoder.encode("\u50D0");
  }, Error, "EncodingError U+50D0");
  r = r && ([...ms932Encoder.encode("僑")].join(",") === "139,161"); // U+50D1
  assertThrows(() => {
    ms932Encoder.encode("\u50D2");
  }, Error, "EncodingError U+50D2");
  assertThrows(() => {
    ms932Encoder.encode("\u50D3");
  }, Error, "EncodingError U+50D3");
  assertThrows(() => {
    ms932Encoder.encode("\u50D4");
  }, Error, "EncodingError U+50D4");
  r = r && ([...ms932Encoder.encode("僕僖")].join(",") === "150,108,153,68"); // U+50D5
  assertThrows(() => {
    ms932Encoder.encode("\u50D7");
  }, Error, "EncodingError U+50D7");
  r = r && ([...ms932Encoder.encode("僘")].join(",") === "250,125"); // U+50D8
  assertThrows(() => {
    ms932Encoder.encode("\u50D9");
  }, Error, "EncodingError U+50D9");
  r = r && ([...ms932Encoder.encode("僚")].join(",") === "151,187"); // U+50DA
  assertThrows(() => {
    ms932Encoder.encode("\u50DB");
  }, Error, "EncodingError U+50DB");
  assertThrows(() => {
    ms932Encoder.encode("\u50DC");
  }, Error, "EncodingError U+50DC");
  assertThrows(() => {
    ms932Encoder.encode("\u50DD");
  }, Error, "EncodingError U+50DD");
  r = r && ([...ms932Encoder.encode("僞")].join(",") === "153,69"); // U+50DE
  assertThrows(() => {
    ms932Encoder.encode("\u50DF");
  }, Error, "EncodingError U+50DF");
  assertThrows(() => {
    ms932Encoder.encode("\u50E0");
  }, Error, "EncodingError U+50E0");
  assertThrows(() => {
    ms932Encoder.encode("\u50E1");
  }, Error, "EncodingError U+50E1");
  assertThrows(() => {
    ms932Encoder.encode("\u50E2");
  }, Error, "EncodingError U+50E2");
  r = r && ([...ms932Encoder.encode("僣")].join(",") === "153,72"); // U+50E3
  assertThrows(() => {
    ms932Encoder.encode("\u50E4");
  }, Error, "EncodingError U+50E4");
  r = r && ([...ms932Encoder.encode("僥")].join(",") === "153,70"); // U+50E5
  assertThrows(() => {
    ms932Encoder.encode("\u50E6");
  }, Error, "EncodingError U+50E6");
  r = r && ([...ms932Encoder.encode("僧")].join(",") === "145,109"); // U+50E7
  assertThrows(() => {
    ms932Encoder.encode("\u50E8");
  }, Error, "EncodingError U+50E8");
  assertThrows(() => {
    ms932Encoder.encode("\u50E9");
  }, Error, "EncodingError U+50E9");
  assertThrows(() => {
    ms932Encoder.encode("\u50EA");
  }, Error, "EncodingError U+50EA");
  assertThrows(() => {
    ms932Encoder.encode("\u50EB");
  }, Error, "EncodingError U+50EB");
  assertThrows(() => {
    ms932Encoder.encode("\u50EC");
  }, Error, "EncodingError U+50EC");
  r = r && ([...ms932Encoder.encode("僭僮")].join(",") === "153,71,153,73"); // U+50ED
  assertThrows(() => {
    ms932Encoder.encode("\u50EF");
  }, Error, "EncodingError U+50EF");
  assertThrows(() => {
    ms932Encoder.encode("\u50F0");
  }, Error, "EncodingError U+50F0");
  assertThrows(() => {
    ms932Encoder.encode("\u50F1");
  }, Error, "EncodingError U+50F1");
  assertThrows(() => {
    ms932Encoder.encode("\u50F2");
  }, Error, "EncodingError U+50F2");
  assertThrows(() => {
    ms932Encoder.encode("\u50F3");
  }, Error, "EncodingError U+50F3");
  r = r && ([...ms932Encoder.encode("僴僵")].join(",") === "250,124,153,75"); // U+50F4
  assertThrows(() => {
    ms932Encoder.encode("\u50F6");
  }, Error, "EncodingError U+50F6");
  assertThrows(() => {
    ms932Encoder.encode("\u50F7");
  }, Error, "EncodingError U+50F7");
  assertThrows(() => {
    ms932Encoder.encode("\u50F8");
  }, Error, "EncodingError U+50F8");
  r = r && ([...ms932Encoder.encode("價")].join(",") === "153,74"); // U+50F9
  assertThrows(() => {
    ms932Encoder.encode("\u50FA");
  }, Error, "EncodingError U+50FA");
  r = r && ([...ms932Encoder.encode("僻")].join(",") === "149,198"); // U+50FB
  assertThrows(() => {
    ms932Encoder.encode("\u50FC");
  }, Error, "EncodingError U+50FC");
  assertThrows(() => {
    ms932Encoder.encode("\u50FD");
  }, Error, "EncodingError U+50FD");
  assertThrows(() => {
    ms932Encoder.encode("\u50FE");
  }, Error, "EncodingError U+50FE");
  assertThrows(() => {
    ms932Encoder.encode("\u50FF");
  }, Error, "EncodingError U+50FF");
  r = r &&
    ([...ms932Encoder.encode("儀儁儂")].join(",") === "139,86,153,77,153,78"); // U+5100
  assertThrows(() => {
    ms932Encoder.encode("\u5103");
  }, Error, "EncodingError U+5103");
  r = r && ([...ms932Encoder.encode("億")].join(",") === "137,173"); // U+5104
  assertThrows(() => {
    ms932Encoder.encode("\u5105");
  }, Error, "EncodingError U+5105");
  assertThrows(() => {
    ms932Encoder.encode("\u5106");
  }, Error, "EncodingError U+5106");
  assertThrows(() => {
    ms932Encoder.encode("\u5107");
  }, Error, "EncodingError U+5107");
  assertThrows(() => {
    ms932Encoder.encode("\u5108");
  }, Error, "EncodingError U+5108");
  r = r && ([...ms932Encoder.encode("儉")].join(",") === "153,76"); // U+5109
  assertThrows(() => {
    ms932Encoder.encode("\u510A");
  }, Error, "EncodingError U+510A");
  assertThrows(() => {
    ms932Encoder.encode("\u510B");
  }, Error, "EncodingError U+510B");
  assertThrows(() => {
    ms932Encoder.encode("\u510C");
  }, Error, "EncodingError U+510C");
  assertThrows(() => {
    ms932Encoder.encode("\u510D");
  }, Error, "EncodingError U+510D");
  assertThrows(() => {
    ms932Encoder.encode("\u510E");
  }, Error, "EncodingError U+510E");
  assertThrows(() => {
    ms932Encoder.encode("\u510F");
  }, Error, "EncodingError U+510F");
  assertThrows(() => {
    ms932Encoder.encode("\u5110");
  }, Error, "EncodingError U+5110");
  assertThrows(() => {
    ms932Encoder.encode("\u5111");
  }, Error, "EncodingError U+5111");
  r = r && ([...ms932Encoder.encode("儒")].join(",") === "142,242"); // U+5112
  assertThrows(() => {
    ms932Encoder.encode("\u5113");
  }, Error, "EncodingError U+5113");
  r = r &&
    ([...ms932Encoder.encode("儔儕儖")].join(",") === "153,81,153,80,153,79"); // U+5114
  assertThrows(() => {
    ms932Encoder.encode("\u5117");
  }, Error, "EncodingError U+5117");
  r = r && ([...ms932Encoder.encode("儘")].join(",") === "152,212"); // U+5118
  assertThrows(() => {
    ms932Encoder.encode("\u5119");
  }, Error, "EncodingError U+5119");
  r = r && ([...ms932Encoder.encode("儚")].join(",") === "153,82"); // U+511A
  assertThrows(() => {
    ms932Encoder.encode("\u511B");
  }, Error, "EncodingError U+511B");
  assertThrows(() => {
    ms932Encoder.encode("\u511C");
  }, Error, "EncodingError U+511C");
  assertThrows(() => {
    ms932Encoder.encode("\u511D");
  }, Error, "EncodingError U+511D");
  assertThrows(() => {
    ms932Encoder.encode("\u511E");
  }, Error, "EncodingError U+511E");
  r = r && ([...ms932Encoder.encode("償")].join(",") === "143,158"); // U+511F
  assertThrows(() => {
    ms932Encoder.encode("\u5120");
  }, Error, "EncodingError U+5120");
  r = r && ([...ms932Encoder.encode("儡")].join(",") === "153,83"); // U+5121
  assertThrows(() => {
    ms932Encoder.encode("\u5122");
  }, Error, "EncodingError U+5122");
  assertThrows(() => {
    ms932Encoder.encode("\u5123");
  }, Error, "EncodingError U+5123");
  assertThrows(() => {
    ms932Encoder.encode("\u5124");
  }, Error, "EncodingError U+5124");
  assertThrows(() => {
    ms932Encoder.encode("\u5125");
  }, Error, "EncodingError U+5125");
  assertThrows(() => {
    ms932Encoder.encode("\u5126");
  }, Error, "EncodingError U+5126");
  assertThrows(() => {
    ms932Encoder.encode("\u5127");
  }, Error, "EncodingError U+5127");
  assertThrows(() => {
    ms932Encoder.encode("\u5128");
  }, Error, "EncodingError U+5128");
  assertThrows(() => {
    ms932Encoder.encode("\u5129");
  }, Error, "EncodingError U+5129");
  r = r && ([...ms932Encoder.encode("優")].join(",") === "151,68"); // U+512A
  assertThrows(() => {
    ms932Encoder.encode("\u512B");
  }, Error, "EncodingError U+512B");
  assertThrows(() => {
    ms932Encoder.encode("\u512C");
  }, Error, "EncodingError U+512C");
  assertThrows(() => {
    ms932Encoder.encode("\u512D");
  }, Error, "EncodingError U+512D");
  assertThrows(() => {
    ms932Encoder.encode("\u512E");
  }, Error, "EncodingError U+512E");
  assertThrows(() => {
    ms932Encoder.encode("\u512F");
  }, Error, "EncodingError U+512F");
  assertThrows(() => {
    ms932Encoder.encode("\u5130");
  }, Error, "EncodingError U+5130");
  assertThrows(() => {
    ms932Encoder.encode("\u5131");
  }, Error, "EncodingError U+5131");
  r = r && ([...ms932Encoder.encode("儲")].join(",") === "150,215"); // U+5132
  assertThrows(() => {
    ms932Encoder.encode("\u5133");
  }, Error, "EncodingError U+5133");
  assertThrows(() => {
    ms932Encoder.encode("\u5134");
  }, Error, "EncodingError U+5134");
  assertThrows(() => {
    ms932Encoder.encode("\u5135");
  }, Error, "EncodingError U+5135");
  assertThrows(() => {
    ms932Encoder.encode("\u5136");
  }, Error, "EncodingError U+5136");
  r = r && ([...ms932Encoder.encode("儷")].join(",") === "153,85"); // U+5137
  assertThrows(() => {
    ms932Encoder.encode("\u5138");
  }, Error, "EncodingError U+5138");
  assertThrows(() => {
    ms932Encoder.encode("\u5139");
  }, Error, "EncodingError U+5139");
  r = r &&
    ([...ms932Encoder.encode("儺儻儼")].join(",") === "153,84,153,87,153,86"); // U+513A
  assertThrows(() => {
    ms932Encoder.encode("\u513D");
  }, Error, "EncodingError U+513D");
  assertThrows(() => {
    ms932Encoder.encode("\u513E");
  }, Error, "EncodingError U+513E");
  r = r &&
    ([...ms932Encoder.encode("儿兀允")].join(",") === "153,88,153,89,136,242"); // U+513F
  assertThrows(() => {
    ms932Encoder.encode("\u5142");
  }, Error, "EncodingError U+5142");
  r = r &&
    ([...ms932Encoder.encode("元兄充兆兇先光兊克兌免兎")].join(",") ===
      "140,179,140,90,143,91,146,155,139,162,144,230,140,245,250,126,141,142,153,91,150,198,147,101"); // U+5143
  assertThrows(() => {
    ms932Encoder.encode("\u514F");
  }, Error, "EncodingError U+514F");
  r = r && ([...ms932Encoder.encode("児")].join(",") === "142,153"); // U+5150
  assertThrows(() => {
    ms932Encoder.encode("\u5151");
  }, Error, "EncodingError U+5151");
  r = r && ([...ms932Encoder.encode("兒")].join(",") === "153,90"); // U+5152
  assertThrows(() => {
    ms932Encoder.encode("\u5153");
  }, Error, "EncodingError U+5153");
  r = r && ([...ms932Encoder.encode("兔")].join(",") === "153,92"); // U+5154
  assertThrows(() => {
    ms932Encoder.encode("\u5155");
  }, Error, "EncodingError U+5155");
  assertThrows(() => {
    ms932Encoder.encode("\u5156");
  }, Error, "EncodingError U+5156");
  assertThrows(() => {
    ms932Encoder.encode("\u5157");
  }, Error, "EncodingError U+5157");
  assertThrows(() => {
    ms932Encoder.encode("\u5158");
  }, Error, "EncodingError U+5158");
  assertThrows(() => {
    ms932Encoder.encode("\u5159");
  }, Error, "EncodingError U+5159");
  r = r && ([...ms932Encoder.encode("党")].join(",") === "147,125"); // U+515A
  assertThrows(() => {
    ms932Encoder.encode("\u515B");
  }, Error, "EncodingError U+515B");
  r = r && ([...ms932Encoder.encode("兜")].join(",") === "138,149"); // U+515C
  assertThrows(() => {
    ms932Encoder.encode("\u515D");
  }, Error, "EncodingError U+515D");
  assertThrows(() => {
    ms932Encoder.encode("\u515E");
  }, Error, "EncodingError U+515E");
  assertThrows(() => {
    ms932Encoder.encode("\u515F");
  }, Error, "EncodingError U+515F");
  assertThrows(() => {
    ms932Encoder.encode("\u5160");
  }, Error, "EncodingError U+5160");
  assertThrows(() => {
    ms932Encoder.encode("\u5161");
  }, Error, "EncodingError U+5161");
  r = r && ([...ms932Encoder.encode("兢")].join(",") === "153,93"); // U+5162
  assertThrows(() => {
    ms932Encoder.encode("\u5163");
  }, Error, "EncodingError U+5163");
  r = r && ([...ms932Encoder.encode("兤入")].join(",") === "250,128,147,252"); // U+5164
  assertThrows(() => {
    ms932Encoder.encode("\u5166");
  }, Error, "EncodingError U+5166");
  assertThrows(() => {
    ms932Encoder.encode("\u5167");
  }, Error, "EncodingError U+5167");
  r = r &&
    ([...ms932Encoder.encode("全兩兪八公六兮")].join(",") ===
      "145,83,153,95,153,96,148,170,140,246,152,90,153,97"); // U+5168
  assertThrows(() => {
    ms932Encoder.encode("\u516F");
  }, Error, "EncodingError U+516F");
  assertThrows(() => {
    ms932Encoder.encode("\u5170");
  }, Error, "EncodingError U+5170");
  r = r && ([...ms932Encoder.encode("共")].join(",") === "139,164"); // U+5171
  assertThrows(() => {
    ms932Encoder.encode("\u5172");
  }, Error, "EncodingError U+5172");
  assertThrows(() => {
    ms932Encoder.encode("\u5173");
  }, Error, "EncodingError U+5173");
  assertThrows(() => {
    ms932Encoder.encode("\u5174");
  }, Error, "EncodingError U+5174");
  r = r &&
    ([...ms932Encoder.encode("兵其具典")].join(",") ===
      "149,186,145,180,139,239,147,84"); // U+5175
  assertThrows(() => {
    ms932Encoder.encode("\u5179");
  }, Error, "EncodingError U+5179");
  assertThrows(() => {
    ms932Encoder.encode("\u517A");
  }, Error, "EncodingError U+517A");
  assertThrows(() => {
    ms932Encoder.encode("\u517B");
  }, Error, "EncodingError U+517B");
  r = r && ([...ms932Encoder.encode("兼")].join(",") === "140,147"); // U+517C
  assertThrows(() => {
    ms932Encoder.encode("\u517D");
  }, Error, "EncodingError U+517D");
  assertThrows(() => {
    ms932Encoder.encode("\u517E");
  }, Error, "EncodingError U+517E");
  assertThrows(() => {
    ms932Encoder.encode("\u517F");
  }, Error, "EncodingError U+517F");
  r = r && ([...ms932Encoder.encode("冀")].join(",") === "153,98"); // U+5180
  assertThrows(() => {
    ms932Encoder.encode("\u5181");
  }, Error, "EncodingError U+5181");
  r = r && ([...ms932Encoder.encode("冂")].join(",") === "153,99"); // U+5182
  assertThrows(() => {
    ms932Encoder.encode("\u5183");
  }, Error, "EncodingError U+5183");
  assertThrows(() => {
    ms932Encoder.encode("\u5184");
  }, Error, "EncodingError U+5184");
  r = r && ([...ms932Encoder.encode("内円")].join(",") === "147,224,137,126"); // U+5185
  assertThrows(() => {
    ms932Encoder.encode("\u5187");
  }, Error, "EncodingError U+5187");
  assertThrows(() => {
    ms932Encoder.encode("\u5188");
  }, Error, "EncodingError U+5188");
  r = r && ([...ms932Encoder.encode("冉冊")].join(",") === "153,102,141,251"); // U+5189
  assertThrows(() => {
    ms932Encoder.encode("\u518B");
  }, Error, "EncodingError U+518B");
  r = r && ([...ms932Encoder.encode("册再")].join(",") === "153,101,141,196"); // U+518C
  assertThrows(() => {
    ms932Encoder.encode("\u518E");
  }, Error, "EncodingError U+518E");
  r = r &&
    ([...ms932Encoder.encode("冏冐冑冒冓")].join(",") ===
      "153,103,227,236,153,104,150,96,153,105"); // U+518F
  assertThrows(() => {
    ms932Encoder.encode("\u5194");
  }, Error, "EncodingError U+5194");
  r = r &&
    ([...ms932Encoder.encode("冕冖冗")].join(",") === "153,106,153,107,143,231"); // U+5195
  assertThrows(() => {
    ms932Encoder.encode("\u5198");
  }, Error, "EncodingError U+5198");
  r = r && ([...ms932Encoder.encode("写")].join(",") === "142,202"); // U+5199
  assertThrows(() => {
    ms932Encoder.encode("\u519A");
  }, Error, "EncodingError U+519A");
  assertThrows(() => {
    ms932Encoder.encode("\u519B");
  }, Error, "EncodingError U+519B");
  assertThrows(() => {
    ms932Encoder.encode("\u519C");
  }, Error, "EncodingError U+519C");
  r = r && ([...ms932Encoder.encode("冝")].join(",") === "250,129"); // U+519D
  assertThrows(() => {
    ms932Encoder.encode("\u519E");
  }, Error, "EncodingError U+519E");
  assertThrows(() => {
    ms932Encoder.encode("\u519F");
  }, Error, "EncodingError U+519F");
  r = r && ([...ms932Encoder.encode("冠")].join(",") === "138,165"); // U+51A0
  assertThrows(() => {
    ms932Encoder.encode("\u51A1");
  }, Error, "EncodingError U+51A1");
  r = r && ([...ms932Encoder.encode("冢")].join(",") === "153,110"); // U+51A2
  assertThrows(() => {
    ms932Encoder.encode("\u51A3");
  }, Error, "EncodingError U+51A3");
  r = r &&
    ([...ms932Encoder.encode("冤冥冦")].join(",") === "153,108,150,187,153,109"); // U+51A4
  assertThrows(() => {
    ms932Encoder.encode("\u51A7");
  }, Error, "EncodingError U+51A7");
  r = r &&
    ([...ms932Encoder.encode("冨冩冪冫冬")].join(",") ===
      "149,121,153,111,153,112,153,113,147,126"); // U+51A8
  assertThrows(() => {
    ms932Encoder.encode("\u51AD");
  }, Error, "EncodingError U+51AD");
  assertThrows(() => {
    ms932Encoder.encode("\u51AE");
  }, Error, "EncodingError U+51AE");
  assertThrows(() => {
    ms932Encoder.encode("\u51AF");
  }, Error, "EncodingError U+51AF");
  r = r &&
    ([...ms932Encoder.encode("冰冱冲决冴况冶冷")].join(",") ===
      "153,117,153,115,153,116,153,114,141,225,153,118,150,232,151,226"); // U+51B0
  assertThrows(() => {
    ms932Encoder.encode("\u51B8");
  }, Error, "EncodingError U+51B8");
  assertThrows(() => {
    ms932Encoder.encode("\u51B9");
  }, Error, "EncodingError U+51B9");
  assertThrows(() => {
    ms932Encoder.encode("\u51BA");
  }, Error, "EncodingError U+51BA");
  assertThrows(() => {
    ms932Encoder.encode("\u51BB");
  }, Error, "EncodingError U+51BB");
  assertThrows(() => {
    ms932Encoder.encode("\u51BC");
  }, Error, "EncodingError U+51BC");
  r = r && ([...ms932Encoder.encode("冽冾")].join(",") === "153,119,250,130"); // U+51BD
  assertThrows(() => {
    ms932Encoder.encode("\u51BF");
  }, Error, "EncodingError U+51BF");
  assertThrows(() => {
    ms932Encoder.encode("\u51C0");
  }, Error, "EncodingError U+51C0");
  assertThrows(() => {
    ms932Encoder.encode("\u51C1");
  }, Error, "EncodingError U+51C1");
  assertThrows(() => {
    ms932Encoder.encode("\u51C2");
  }, Error, "EncodingError U+51C2");
  assertThrows(() => {
    ms932Encoder.encode("\u51C3");
  }, Error, "EncodingError U+51C3");
  r = r &&
    ([...ms932Encoder.encode("凄凅准")].join(",") === "144,166,153,120,143,121"); // U+51C4
  assertThrows(() => {
    ms932Encoder.encode("\u51C7");
  }, Error, "EncodingError U+51C7");
  assertThrows(() => {
    ms932Encoder.encode("\u51C8");
  }, Error, "EncodingError U+51C8");
  r = r && ([...ms932Encoder.encode("凉")].join(",") === "153,121"); // U+51C9
  assertThrows(() => {
    ms932Encoder.encode("\u51CA");
  }, Error, "EncodingError U+51CA");
  r = r &&
    ([...ms932Encoder.encode("凋凌凍")].join(",") === "146,156,151,189,147,128"); // U+51CB
  assertThrows(() => {
    ms932Encoder.encode("\u51CE");
  }, Error, "EncodingError U+51CE");
  assertThrows(() => {
    ms932Encoder.encode("\u51CF");
  }, Error, "EncodingError U+51CF");
  assertThrows(() => {
    ms932Encoder.encode("\u51D0");
  }, Error, "EncodingError U+51D0");
  assertThrows(() => {
    ms932Encoder.encode("\u51D1");
  }, Error, "EncodingError U+51D1");
  assertThrows(() => {
    ms932Encoder.encode("\u51D2");
  }, Error, "EncodingError U+51D2");
  assertThrows(() => {
    ms932Encoder.encode("\u51D3");
  }, Error, "EncodingError U+51D3");
  assertThrows(() => {
    ms932Encoder.encode("\u51D4");
  }, Error, "EncodingError U+51D4");
  assertThrows(() => {
    ms932Encoder.encode("\u51D5");
  }, Error, "EncodingError U+51D5");
  r = r && ([...ms932Encoder.encode("凖")].join(",") === "153,195"); // U+51D6
  assertThrows(() => {
    ms932Encoder.encode("\u51D7");
  }, Error, "EncodingError U+51D7");
  assertThrows(() => {
    ms932Encoder.encode("\u51D8");
  }, Error, "EncodingError U+51D8");
  assertThrows(() => {
    ms932Encoder.encode("\u51D9");
  }, Error, "EncodingError U+51D9");
  assertThrows(() => {
    ms932Encoder.encode("\u51DA");
  }, Error, "EncodingError U+51DA");
  r = r &&
    ([...ms932Encoder.encode("凛凜凝")].join(",") === "153,122,234,163,139,195"); // U+51DB
  assertThrows(() => {
    ms932Encoder.encode("\u51DE");
  }, Error, "EncodingError U+51DE");
  assertThrows(() => {
    ms932Encoder.encode("\u51DF");
  }, Error, "EncodingError U+51DF");
  r = r && ([...ms932Encoder.encode("几凡")].join(",") === "153,123,150,125"); // U+51E0
  assertThrows(() => {
    ms932Encoder.encode("\u51E2");
  }, Error, "EncodingError U+51E2");
  assertThrows(() => {
    ms932Encoder.encode("\u51E3");
  }, Error, "EncodingError U+51E3");
  assertThrows(() => {
    ms932Encoder.encode("\u51E4");
  }, Error, "EncodingError U+51E4");
  assertThrows(() => {
    ms932Encoder.encode("\u51E5");
  }, Error, "EncodingError U+51E5");
  r = r && ([...ms932Encoder.encode("処凧")].join(",") === "143,136,145,250"); // U+51E6
  assertThrows(() => {
    ms932Encoder.encode("\u51E8");
  }, Error, "EncodingError U+51E8");
  r = r && ([...ms932Encoder.encode("凩凪")].join(",") === "153,125,147,226"); // U+51E9
  assertThrows(() => {
    ms932Encoder.encode("\u51EB");
  }, Error, "EncodingError U+51EB");
  r = r && ([...ms932Encoder.encode("凬凭")].join(",") === "250,131,153,126"); // U+51EC
  assertThrows(() => {
    ms932Encoder.encode("\u51EE");
  }, Error, "EncodingError U+51EE");
  assertThrows(() => {
    ms932Encoder.encode("\u51EF");
  }, Error, "EncodingError U+51EF");
  r = r && ([...ms932Encoder.encode("凰凱")].join(",") === "153,128,138,77"); // U+51F0
  assertThrows(() => {
    ms932Encoder.encode("\u51F2");
  }, Error, "EncodingError U+51F2");
  assertThrows(() => {
    ms932Encoder.encode("\u51F3");
  }, Error, "EncodingError U+51F3");
  assertThrows(() => {
    ms932Encoder.encode("\u51F4");
  }, Error, "EncodingError U+51F4");
  r = r && ([...ms932Encoder.encode("凵凶")].join(",") === "153,129,139,165"); // U+51F5
  assertThrows(() => {
    ms932Encoder.encode("\u51F7");
  }, Error, "EncodingError U+51F7");
  r = r &&
    ([...ms932Encoder.encode("凸凹出")].join(",") === "147,202,137,154,143,111"); // U+51F8
  assertThrows(() => {
    ms932Encoder.encode("\u51FB");
  }, Error, "EncodingError U+51FB");
  assertThrows(() => {
    ms932Encoder.encode("\u51FC");
  }, Error, "EncodingError U+51FC");
  r = r && ([...ms932Encoder.encode("函凾")].join(",") === "148,159,153,130"); // U+51FD
  assertThrows(() => {
    ms932Encoder.encode("\u51FF");
  }, Error, "EncodingError U+51FF");
  r = r && ([...ms932Encoder.encode("刀")].join(",") === "147,129"); // U+5200
  assertThrows(() => {
    ms932Encoder.encode("\u5201");
  }, Error, "EncodingError U+5201");
  assertThrows(() => {
    ms932Encoder.encode("\u5202");
  }, Error, "EncodingError U+5202");
  r = r && ([...ms932Encoder.encode("刃刄")].join(",") === "144,110,153,131"); // U+5203
  assertThrows(() => {
    ms932Encoder.encode("\u5205");
  }, Error, "EncodingError U+5205");
  r = r &&
    ([...ms932Encoder.encode("分切刈")].join(",") === "149,170,144,216,138,160"); // U+5206
  assertThrows(() => {
    ms932Encoder.encode("\u5209");
  }, Error, "EncodingError U+5209");
  r = r && ([...ms932Encoder.encode("刊刋")].join(",") === "138,167,153,132"); // U+520A
  assertThrows(() => {
    ms932Encoder.encode("\u520C");
  }, Error, "EncodingError U+520C");
  assertThrows(() => {
    ms932Encoder.encode("\u520D");
  }, Error, "EncodingError U+520D");
  r = r && ([...ms932Encoder.encode("刎")].join(",") === "153,134"); // U+520E
  assertThrows(() => {
    ms932Encoder.encode("\u520F");
  }, Error, "EncodingError U+520F");
  assertThrows(() => {
    ms932Encoder.encode("\u5210");
  }, Error, "EncodingError U+5210");
  r = r && ([...ms932Encoder.encode("刑")].join(",") === "140,89"); // U+5211
  assertThrows(() => {
    ms932Encoder.encode("\u5212");
  }, Error, "EncodingError U+5212");
  assertThrows(() => {
    ms932Encoder.encode("\u5213");
  }, Error, "EncodingError U+5213");
  r = r && ([...ms932Encoder.encode("刔刕")].join(",") === "153,133,250,132"); // U+5214
  assertThrows(() => {
    ms932Encoder.encode("\u5216");
  }, Error, "EncodingError U+5216");
  r = r && ([...ms932Encoder.encode("列")].join(",") === "151,241"); // U+5217
  assertThrows(() => {
    ms932Encoder.encode("\u5218");
  }, Error, "EncodingError U+5218");
  assertThrows(() => {
    ms932Encoder.encode("\u5219");
  }, Error, "EncodingError U+5219");
  assertThrows(() => {
    ms932Encoder.encode("\u521A");
  }, Error, "EncodingError U+521A");
  assertThrows(() => {
    ms932Encoder.encode("\u521B");
  }, Error, "EncodingError U+521B");
  assertThrows(() => {
    ms932Encoder.encode("\u521C");
  }, Error, "EncodingError U+521C");
  r = r && ([...ms932Encoder.encode("初")].join(",") === "143,137"); // U+521D
  assertThrows(() => {
    ms932Encoder.encode("\u521E");
  }, Error, "EncodingError U+521E");
  assertThrows(() => {
    ms932Encoder.encode("\u521F");
  }, Error, "EncodingError U+521F");
  assertThrows(() => {
    ms932Encoder.encode("\u5220");
  }, Error, "EncodingError U+5220");
  assertThrows(() => {
    ms932Encoder.encode("\u5221");
  }, Error, "EncodingError U+5221");
  assertThrows(() => {
    ms932Encoder.encode("\u5222");
  }, Error, "EncodingError U+5222");
  assertThrows(() => {
    ms932Encoder.encode("\u5223");
  }, Error, "EncodingError U+5223");
  r = r && ([...ms932Encoder.encode("判別")].join(",") === "148,187,149,202"); // U+5224
  assertThrows(() => {
    ms932Encoder.encode("\u5226");
  }, Error, "EncodingError U+5226");
  r = r && ([...ms932Encoder.encode("刧")].join(",") === "153,135"); // U+5227
  assertThrows(() => {
    ms932Encoder.encode("\u5228");
  }, Error, "EncodingError U+5228");
  r = r && ([...ms932Encoder.encode("利刪")].join(",") === "151,152,153,136"); // U+5229
  assertThrows(() => {
    ms932Encoder.encode("\u522B");
  }, Error, "EncodingError U+522B");
  assertThrows(() => {
    ms932Encoder.encode("\u522C");
  }, Error, "EncodingError U+522C");
  assertThrows(() => {
    ms932Encoder.encode("\u522D");
  }, Error, "EncodingError U+522D");
  r = r && ([...ms932Encoder.encode("刮")].join(",") === "153,137"); // U+522E
  assertThrows(() => {
    ms932Encoder.encode("\u522F");
  }, Error, "EncodingError U+522F");
  r = r && ([...ms932Encoder.encode("到")].join(",") === "147,158"); // U+5230
  assertThrows(() => {
    ms932Encoder.encode("\u5231");
  }, Error, "EncodingError U+5231");
  assertThrows(() => {
    ms932Encoder.encode("\u5232");
  }, Error, "EncodingError U+5232");
  r = r && ([...ms932Encoder.encode("刳")].join(",") === "153,138"); // U+5233
  assertThrows(() => {
    ms932Encoder.encode("\u5234");
  }, Error, "EncodingError U+5234");
  assertThrows(() => {
    ms932Encoder.encode("\u5235");
  }, Error, "EncodingError U+5235");
  r = r &&
    ([...ms932Encoder.encode("制刷券刹刺刻")].join(",") ===
      "144,167,141,252,140,148,153,139,142,104,141,143"); // U+5236
  assertThrows(() => {
    ms932Encoder.encode("\u523C");
  }, Error, "EncodingError U+523C");
  assertThrows(() => {
    ms932Encoder.encode("\u523D");
  }, Error, "EncodingError U+523D");
  assertThrows(() => {
    ms932Encoder.encode("\u523E");
  }, Error, "EncodingError U+523E");
  assertThrows(() => {
    ms932Encoder.encode("\u523F");
  }, Error, "EncodingError U+523F");
  assertThrows(() => {
    ms932Encoder.encode("\u5240");
  }, Error, "EncodingError U+5240");
  assertThrows(() => {
    ms932Encoder.encode("\u5241");
  }, Error, "EncodingError U+5241");
  assertThrows(() => {
    ms932Encoder.encode("\u5242");
  }, Error, "EncodingError U+5242");
  r = r && ([...ms932Encoder.encode("剃剄")].join(",") === "146,228,153,141"); // U+5243
  assertThrows(() => {
    ms932Encoder.encode("\u5245");
  }, Error, "EncodingError U+5245");
  assertThrows(() => {
    ms932Encoder.encode("\u5246");
  }, Error, "EncodingError U+5246");
  r = r && ([...ms932Encoder.encode("則")].join(",") === "145,165"); // U+5247
  assertThrows(() => {
    ms932Encoder.encode("\u5248");
  }, Error, "EncodingError U+5248");
  assertThrows(() => {
    ms932Encoder.encode("\u5249");
  }, Error, "EncodingError U+5249");
  r = r &&
    ([...ms932Encoder.encode("削剋剌前")].join(",") ===
      "141,237,153,142,153,143,145,79"); // U+524A
  assertThrows(() => {
    ms932Encoder.encode("\u524E");
  }, Error, "EncodingError U+524E");
  r = r && ([...ms932Encoder.encode("剏")].join(",") === "153,140"); // U+524F
  assertThrows(() => {
    ms932Encoder.encode("\u5250");
  }, Error, "EncodingError U+5250");
  assertThrows(() => {
    ms932Encoder.encode("\u5251");
  }, Error, "EncodingError U+5251");
  assertThrows(() => {
    ms932Encoder.encode("\u5252");
  }, Error, "EncodingError U+5252");
  assertThrows(() => {
    ms932Encoder.encode("\u5253");
  }, Error, "EncodingError U+5253");
  r = r && ([...ms932Encoder.encode("剔")].join(",") === "153,145"); // U+5254
  assertThrows(() => {
    ms932Encoder.encode("\u5255");
  }, Error, "EncodingError U+5255");
  r = r && ([...ms932Encoder.encode("剖")].join(",") === "150,85"); // U+5256
  assertThrows(() => {
    ms932Encoder.encode("\u5257");
  }, Error, "EncodingError U+5257");
  assertThrows(() => {
    ms932Encoder.encode("\u5258");
  }, Error, "EncodingError U+5258");
  assertThrows(() => {
    ms932Encoder.encode("\u5259");
  }, Error, "EncodingError U+5259");
  assertThrows(() => {
    ms932Encoder.encode("\u525A");
  }, Error, "EncodingError U+525A");
  r = r && ([...ms932Encoder.encode("剛")].join(",") === "141,132"); // U+525B
  assertThrows(() => {
    ms932Encoder.encode("\u525C");
  }, Error, "EncodingError U+525C");
  assertThrows(() => {
    ms932Encoder.encode("\u525D");
  }, Error, "EncodingError U+525D");
  r = r && ([...ms932Encoder.encode("剞")].join(",") === "153,144"); // U+525E
  assertThrows(() => {
    ms932Encoder.encode("\u525F");
  }, Error, "EncodingError U+525F");
  assertThrows(() => {
    ms932Encoder.encode("\u5260");
  }, Error, "EncodingError U+5260");
  assertThrows(() => {
    ms932Encoder.encode("\u5261");
  }, Error, "EncodingError U+5261");
  assertThrows(() => {
    ms932Encoder.encode("\u5262");
  }, Error, "EncodingError U+5262");
  r = r &&
    ([...ms932Encoder.encode("剣剤剥")].join(",") === "140,149,141,220,148,141"); // U+5263
  assertThrows(() => {
    ms932Encoder.encode("\u5266");
  }, Error, "EncodingError U+5266");
  assertThrows(() => {
    ms932Encoder.encode("\u5267");
  }, Error, "EncodingError U+5267");
  assertThrows(() => {
    ms932Encoder.encode("\u5268");
  }, Error, "EncodingError U+5268");
  r = r && ([...ms932Encoder.encode("剩剪")].join(",") === "153,148,153,146"); // U+5269
  assertThrows(() => {
    ms932Encoder.encode("\u526B");
  }, Error, "EncodingError U+526B");
  assertThrows(() => {
    ms932Encoder.encode("\u526C");
  }, Error, "EncodingError U+526C");
  assertThrows(() => {
    ms932Encoder.encode("\u526D");
  }, Error, "EncodingError U+526D");
  assertThrows(() => {
    ms932Encoder.encode("\u526E");
  }, Error, "EncodingError U+526E");
  r = r &&
    ([...ms932Encoder.encode("副剰剱割剳剴創")].join(",") ===
      "149,155,143,232,153,155,138,132,153,149,153,147,145,110"); // U+526F
  assertThrows(() => {
    ms932Encoder.encode("\u5276");
  }, Error, "EncodingError U+5276");
  assertThrows(() => {
    ms932Encoder.encode("\u5277");
  }, Error, "EncodingError U+5277");
  assertThrows(() => {
    ms932Encoder.encode("\u5278");
  }, Error, "EncodingError U+5278");
  assertThrows(() => {
    ms932Encoder.encode("\u5279");
  }, Error, "EncodingError U+5279");
  assertThrows(() => {
    ms932Encoder.encode("\u527A");
  }, Error, "EncodingError U+527A");
  assertThrows(() => {
    ms932Encoder.encode("\u527B");
  }, Error, "EncodingError U+527B");
  assertThrows(() => {
    ms932Encoder.encode("\u527C");
  }, Error, "EncodingError U+527C");
  r = r && ([...ms932Encoder.encode("剽")].join(",") === "153,151"); // U+527D
  assertThrows(() => {
    ms932Encoder.encode("\u527E");
  }, Error, "EncodingError U+527E");
  r = r && ([...ms932Encoder.encode("剿")].join(",") === "153,150"); // U+527F
  assertThrows(() => {
    ms932Encoder.encode("\u5280");
  }, Error, "EncodingError U+5280");
  assertThrows(() => {
    ms932Encoder.encode("\u5281");
  }, Error, "EncodingError U+5281");
  assertThrows(() => {
    ms932Encoder.encode("\u5282");
  }, Error, "EncodingError U+5282");
  r = r && ([...ms932Encoder.encode("劃")].join(",") === "138,99"); // U+5283
  assertThrows(() => {
    ms932Encoder.encode("\u5284");
  }, Error, "EncodingError U+5284");
  assertThrows(() => {
    ms932Encoder.encode("\u5285");
  }, Error, "EncodingError U+5285");
  assertThrows(() => {
    ms932Encoder.encode("\u5286");
  }, Error, "EncodingError U+5286");
  r = r &&
    ([...ms932Encoder.encode("劇劈劉")].join(",") === "140,128,153,156,151,171"); // U+5287
  assertThrows(() => {
    ms932Encoder.encode("\u528A");
  }, Error, "EncodingError U+528A");
  assertThrows(() => {
    ms932Encoder.encode("\u528B");
  }, Error, "EncodingError U+528B");
  assertThrows(() => {
    ms932Encoder.encode("\u528C");
  }, Error, "EncodingError U+528C");
  r = r && ([...ms932Encoder.encode("劍")].join(",") === "153,152"); // U+528D
  assertThrows(() => {
    ms932Encoder.encode("\u528E");
  }, Error, "EncodingError U+528E");
  assertThrows(() => {
    ms932Encoder.encode("\u528F");
  }, Error, "EncodingError U+528F");
  assertThrows(() => {
    ms932Encoder.encode("\u5290");
  }, Error, "EncodingError U+5290");
  r = r && ([...ms932Encoder.encode("劑劒")].join(",") === "153,157,153,154"); // U+5291
  assertThrows(() => {
    ms932Encoder.encode("\u5293");
  }, Error, "EncodingError U+5293");
  r = r && ([...ms932Encoder.encode("劔")].join(",") === "153,153"); // U+5294
  assertThrows(() => {
    ms932Encoder.encode("\u5295");
  }, Error, "EncodingError U+5295");
  assertThrows(() => {
    ms932Encoder.encode("\u5296");
  }, Error, "EncodingError U+5296");
  assertThrows(() => {
    ms932Encoder.encode("\u5297");
  }, Error, "EncodingError U+5297");
  assertThrows(() => {
    ms932Encoder.encode("\u5298");
  }, Error, "EncodingError U+5298");
  assertThrows(() => {
    ms932Encoder.encode("\u5299");
  }, Error, "EncodingError U+5299");
  assertThrows(() => {
    ms932Encoder.encode("\u529A");
  }, Error, "EncodingError U+529A");
  r = r && ([...ms932Encoder.encode("力劜")].join(",") === "151,205,250,133"); // U+529B
  assertThrows(() => {
    ms932Encoder.encode("\u529D");
  }, Error, "EncodingError U+529D");
  assertThrows(() => {
    ms932Encoder.encode("\u529E");
  }, Error, "EncodingError U+529E");
  r = r && ([...ms932Encoder.encode("功加")].join(",") === "140,247,137,193"); // U+529F
  assertThrows(() => {
    ms932Encoder.encode("\u52A1");
  }, Error, "EncodingError U+52A1");
  assertThrows(() => {
    ms932Encoder.encode("\u52A2");
  }, Error, "EncodingError U+52A2");
  r = r && ([...ms932Encoder.encode("劣")].join(",") === "151,242"); // U+52A3
  assertThrows(() => {
    ms932Encoder.encode("\u52A4");
  }, Error, "EncodingError U+52A4");
  assertThrows(() => {
    ms932Encoder.encode("\u52A5");
  }, Error, "EncodingError U+52A5");
  r = r && ([...ms932Encoder.encode("劦")].join(",") === "250,134"); // U+52A6
  assertThrows(() => {
    ms932Encoder.encode("\u52A7");
  }, Error, "EncodingError U+52A7");
  assertThrows(() => {
    ms932Encoder.encode("\u52A8");
  }, Error, "EncodingError U+52A8");
  r = r &&
    ([...ms932Encoder.encode("助努劫劬劭")].join(",") ===
      "143,149,147,119,141,133,153,160,153,161"); // U+52A9
  assertThrows(() => {
    ms932Encoder.encode("\u52AE");
  }, Error, "EncodingError U+52AE");
  r = r && ([...ms932Encoder.encode("劯")].join(",") === "251,119"); // U+52AF
  assertThrows(() => {
    ms932Encoder.encode("\u52B0");
  }, Error, "EncodingError U+52B0");
  r = r && ([...ms932Encoder.encode("励")].join(",") === "151,227"); // U+52B1
  assertThrows(() => {
    ms932Encoder.encode("\u52B2");
  }, Error, "EncodingError U+52B2");
  assertThrows(() => {
    ms932Encoder.encode("\u52B3");
  }, Error, "EncodingError U+52B3");
  r = r && ([...ms932Encoder.encode("労劵")].join(",") === "152,74,153,163"); // U+52B4
  assertThrows(() => {
    ms932Encoder.encode("\u52B6");
  }, Error, "EncodingError U+52B6");
  assertThrows(() => {
    ms932Encoder.encode("\u52B7");
  }, Error, "EncodingError U+52B7");
  assertThrows(() => {
    ms932Encoder.encode("\u52B8");
  }, Error, "EncodingError U+52B8");
  r = r && ([...ms932Encoder.encode("効")].join(",") === "140,248"); // U+52B9
  assertThrows(() => {
    ms932Encoder.encode("\u52BA");
  }, Error, "EncodingError U+52BA");
  assertThrows(() => {
    ms932Encoder.encode("\u52BB");
  }, Error, "EncodingError U+52BB");
  r = r && ([...ms932Encoder.encode("劼")].join(",") === "153,162"); // U+52BC
  assertThrows(() => {
    ms932Encoder.encode("\u52BD");
  }, Error, "EncodingError U+52BD");
  r = r && ([...ms932Encoder.encode("劾")].join(",") === "138,78"); // U+52BE
  assertThrows(() => {
    ms932Encoder.encode("\u52BF");
  }, Error, "EncodingError U+52BF");
  r = r && ([...ms932Encoder.encode("勀勁")].join(",") === "250,135,153,164"); // U+52C0
  assertThrows(() => {
    ms932Encoder.encode("\u52C2");
  }, Error, "EncodingError U+52C2");
  r = r && ([...ms932Encoder.encode("勃")].join(",") === "150,117"); // U+52C3
  assertThrows(() => {
    ms932Encoder.encode("\u52C4");
  }, Error, "EncodingError U+52C4");
  r = r && ([...ms932Encoder.encode("勅")].join(",") === "146,186"); // U+52C5
  assertThrows(() => {
    ms932Encoder.encode("\u52C6");
  }, Error, "EncodingError U+52C6");
  r = r && ([...ms932Encoder.encode("勇")].join(",") === "151,69"); // U+52C7
  assertThrows(() => {
    ms932Encoder.encode("\u52C8");
  }, Error, "EncodingError U+52C8");
  r = r && ([...ms932Encoder.encode("勉")].join(",") === "149,215"); // U+52C9
  assertThrows(() => {
    ms932Encoder.encode("\u52CA");
  }, Error, "EncodingError U+52CA");
  assertThrows(() => {
    ms932Encoder.encode("\u52CB");
  }, Error, "EncodingError U+52CB");
  assertThrows(() => {
    ms932Encoder.encode("\u52CC");
  }, Error, "EncodingError U+52CC");
  r = r && ([...ms932Encoder.encode("勍")].join(",") === "153,165"); // U+52CD
  assertThrows(() => {
    ms932Encoder.encode("\u52CE");
  }, Error, "EncodingError U+52CE");
  assertThrows(() => {
    ms932Encoder.encode("\u52CF");
  }, Error, "EncodingError U+52CF");
  assertThrows(() => {
    ms932Encoder.encode("\u52D0");
  }, Error, "EncodingError U+52D0");
  assertThrows(() => {
    ms932Encoder.encode("\u52D1");
  }, Error, "EncodingError U+52D1");
  r = r && ([...ms932Encoder.encode("勒")].join(",") === "232,211"); // U+52D2
  assertThrows(() => {
    ms932Encoder.encode("\u52D3");
  }, Error, "EncodingError U+52D3");
  assertThrows(() => {
    ms932Encoder.encode("\u52D4");
  }, Error, "EncodingError U+52D4");
  r = r && ([...ms932Encoder.encode("動")].join(",") === "147,174"); // U+52D5
  assertThrows(() => {
    ms932Encoder.encode("\u52D6");
  }, Error, "EncodingError U+52D6");
  r = r &&
    ([...ms932Encoder.encode("勗勘務")].join(",") === "153,166,138,168,150,177"); // U+52D7
  assertThrows(() => {
    ms932Encoder.encode("\u52DA");
  }, Error, "EncodingError U+52DA");
  r = r && ([...ms932Encoder.encode("勛")].join(",") === "250,136"); // U+52DB
  assertThrows(() => {
    ms932Encoder.encode("\u52DC");
  }, Error, "EncodingError U+52DC");
  r = r &&
    ([...ms932Encoder.encode("勝勞募勠")].join(",") ===
      "143,159,153,167,149,229,153,171"); // U+52DD
  assertThrows(() => {
    ms932Encoder.encode("\u52E1");
  }, Error, "EncodingError U+52E1");
  r = r &&
    ([...ms932Encoder.encode("勢勣勤")].join(",") === "144,168,153,168,139,206"); // U+52E2
  assertThrows(() => {
    ms932Encoder.encode("\u52E5");
  }, Error, "EncodingError U+52E5");
  r = r && ([...ms932Encoder.encode("勦勧")].join(",") === "153,169,138,169"); // U+52E6
  assertThrows(() => {
    ms932Encoder.encode("\u52E8");
  }, Error, "EncodingError U+52E8");
  assertThrows(() => {
    ms932Encoder.encode("\u52E9");
  }, Error, "EncodingError U+52E9");
  assertThrows(() => {
    ms932Encoder.encode("\u52EA");
  }, Error, "EncodingError U+52EA");
  assertThrows(() => {
    ms932Encoder.encode("\u52EB");
  }, Error, "EncodingError U+52EB");
  assertThrows(() => {
    ms932Encoder.encode("\u52EC");
  }, Error, "EncodingError U+52EC");
  assertThrows(() => {
    ms932Encoder.encode("\u52ED");
  }, Error, "EncodingError U+52ED");
  assertThrows(() => {
    ms932Encoder.encode("\u52EE");
  }, Error, "EncodingError U+52EE");
  assertThrows(() => {
    ms932Encoder.encode("\u52EF");
  }, Error, "EncodingError U+52EF");
  assertThrows(() => {
    ms932Encoder.encode("\u52F0");
  }, Error, "EncodingError U+52F0");
  assertThrows(() => {
    ms932Encoder.encode("\u52F1");
  }, Error, "EncodingError U+52F1");
  r = r && ([...ms932Encoder.encode("勲勳")].join(",") === "140,77,153,172"); // U+52F2
  assertThrows(() => {
    ms932Encoder.encode("\u52F4");
  }, Error, "EncodingError U+52F4");
  r = r && ([...ms932Encoder.encode("勵")].join(",") === "153,173"); // U+52F5
  assertThrows(() => {
    ms932Encoder.encode("\u52F6");
  }, Error, "EncodingError U+52F6");
  assertThrows(() => {
    ms932Encoder.encode("\u52F7");
  }, Error, "EncodingError U+52F7");
  r = r &&
    ([...ms932Encoder.encode("勸勹勺")].join(",") === "153,174,153,175,142,217"); // U+52F8
  assertThrows(() => {
    ms932Encoder.encode("\u52FB");
  }, Error, "EncodingError U+52FB");
  assertThrows(() => {
    ms932Encoder.encode("\u52FC");
  }, Error, "EncodingError U+52FC");
  assertThrows(() => {
    ms932Encoder.encode("\u52FD");
  }, Error, "EncodingError U+52FD");
  r = r &&
    ([...ms932Encoder.encode("勾勿匀匁匂")].join(",") ===
      "140,249,150,220,250,137,150,230,147,245"); // U+52FE
  assertThrows(() => {
    ms932Encoder.encode("\u5303");
  }, Error, "EncodingError U+5303");
  assertThrows(() => {
    ms932Encoder.encode("\u5304");
  }, Error, "EncodingError U+5304");
  r = r &&
    ([...ms932Encoder.encode("包匆匇匈")].join(",") ===
      "149,239,153,176,250,138,153,177"); // U+5305
  assertThrows(() => {
    ms932Encoder.encode("\u5309");
  }, Error, "EncodingError U+5309");
  assertThrows(() => {
    ms932Encoder.encode("\u530A");
  }, Error, "EncodingError U+530A");
  assertThrows(() => {
    ms932Encoder.encode("\u530B");
  }, Error, "EncodingError U+530B");
  assertThrows(() => {
    ms932Encoder.encode("\u530C");
  }, Error, "EncodingError U+530C");
  r = r && ([...ms932Encoder.encode("匍")].join(",") === "153,179"); // U+530D
  assertThrows(() => {
    ms932Encoder.encode("\u530E");
  }, Error, "EncodingError U+530E");
  r = r && ([...ms932Encoder.encode("匏匐")].join(",") === "153,181,153,180"); // U+530F
  assertThrows(() => {
    ms932Encoder.encode("\u5311");
  }, Error, "EncodingError U+5311");
  assertThrows(() => {
    ms932Encoder.encode("\u5312");
  }, Error, "EncodingError U+5312");
  assertThrows(() => {
    ms932Encoder.encode("\u5313");
  }, Error, "EncodingError U+5313");
  assertThrows(() => {
    ms932Encoder.encode("\u5314");
  }, Error, "EncodingError U+5314");
  r = r &&
    ([...ms932Encoder.encode("匕化北")].join(",") === "153,182,137,187,150,107"); // U+5315
  assertThrows(() => {
    ms932Encoder.encode("\u5318");
  }, Error, "EncodingError U+5318");
  r = r && ([...ms932Encoder.encode("匙匚")].join(",") === "141,250,153,183"); // U+5319
  assertThrows(() => {
    ms932Encoder.encode("\u531B");
  }, Error, "EncodingError U+531B");
  assertThrows(() => {
    ms932Encoder.encode("\u531C");
  }, Error, "EncodingError U+531C");
  r = r && ([...ms932Encoder.encode("匝")].join(",") === "145,120"); // U+531D
  assertThrows(() => {
    ms932Encoder.encode("\u531E");
  }, Error, "EncodingError U+531E");
  assertThrows(() => {
    ms932Encoder.encode("\u531F");
  }, Error, "EncodingError U+531F");
  r = r && ([...ms932Encoder.encode("匠匡")].join(",") === "143,160,139,167"); // U+5320
  assertThrows(() => {
    ms932Encoder.encode("\u5322");
  }, Error, "EncodingError U+5322");
  r = r && ([...ms932Encoder.encode("匣匤")].join(",") === "153,184,250,139"); // U+5323
  assertThrows(() => {
    ms932Encoder.encode("\u5325");
  }, Error, "EncodingError U+5325");
  assertThrows(() => {
    ms932Encoder.encode("\u5326");
  }, Error, "EncodingError U+5326");
  assertThrows(() => {
    ms932Encoder.encode("\u5327");
  }, Error, "EncodingError U+5327");
  assertThrows(() => {
    ms932Encoder.encode("\u5328");
  }, Error, "EncodingError U+5328");
  assertThrows(() => {
    ms932Encoder.encode("\u5329");
  }, Error, "EncodingError U+5329");
  r = r && ([...ms932Encoder.encode("匪")].join(",") === "148,217"); // U+532A
  assertThrows(() => {
    ms932Encoder.encode("\u532B");
  }, Error, "EncodingError U+532B");
  assertThrows(() => {
    ms932Encoder.encode("\u532C");
  }, Error, "EncodingError U+532C");
  assertThrows(() => {
    ms932Encoder.encode("\u532D");
  }, Error, "EncodingError U+532D");
  assertThrows(() => {
    ms932Encoder.encode("\u532E");
  }, Error, "EncodingError U+532E");
  r = r && ([...ms932Encoder.encode("匯")].join(",") === "153,185"); // U+532F
  assertThrows(() => {
    ms932Encoder.encode("\u5330");
  }, Error, "EncodingError U+5330");
  r = r && ([...ms932Encoder.encode("匱")].join(",") === "153,186"); // U+5331
  assertThrows(() => {
    ms932Encoder.encode("\u5332");
  }, Error, "EncodingError U+5332");
  r = r && ([...ms932Encoder.encode("匳")].join(",") === "153,187"); // U+5333
  assertThrows(() => {
    ms932Encoder.encode("\u5334");
  }, Error, "EncodingError U+5334");
  assertThrows(() => {
    ms932Encoder.encode("\u5335");
  }, Error, "EncodingError U+5335");
  assertThrows(() => {
    ms932Encoder.encode("\u5336");
  }, Error, "EncodingError U+5336");
  assertThrows(() => {
    ms932Encoder.encode("\u5337");
  }, Error, "EncodingError U+5337");
  r = r &&
    ([...ms932Encoder.encode("匸匹区医")].join(",") ===
      "153,188,149,67,139,230,136,227"); // U+5338
  assertThrows(() => {
    ms932Encoder.encode("\u533C");
  }, Error, "EncodingError U+533C");
  assertThrows(() => {
    ms932Encoder.encode("\u533D");
  }, Error, "EncodingError U+533D");
  assertThrows(() => {
    ms932Encoder.encode("\u533E");
  }, Error, "EncodingError U+533E");
  r = r &&
    ([...ms932Encoder.encode("匿區十")].join(",") === "147,189,153,189,143,92"); // U+533F
  assertThrows(() => {
    ms932Encoder.encode("\u5342");
  }, Error, "EncodingError U+5342");
  r = r && ([...ms932Encoder.encode("千")].join(",") === "144,231"); // U+5343
  assertThrows(() => {
    ms932Encoder.encode("\u5344");
  }, Error, "EncodingError U+5344");
  r = r &&
    ([...ms932Encoder.encode("卅卆升午卉半")].join(",") ===
      "153,191,153,190,143,161,140,223,153,193,148,188"); // U+5345
  assertThrows(() => {
    ms932Encoder.encode("\u534B");
  }, Error, "EncodingError U+534B");
  assertThrows(() => {
    ms932Encoder.encode("\u534C");
  }, Error, "EncodingError U+534C");
  r = r && ([...ms932Encoder.encode("卍")].join(",") === "153,194"); // U+534D
  assertThrows(() => {
    ms932Encoder.encode("\u534E");
  }, Error, "EncodingError U+534E");
  assertThrows(() => {
    ms932Encoder.encode("\u534F");
  }, Error, "EncodingError U+534F");
  assertThrows(() => {
    ms932Encoder.encode("\u5350");
  }, Error, "EncodingError U+5350");
  r = r &&
    ([...ms932Encoder.encode("卑卒卓協")].join(",") ===
      "148,218,145,178,145,236,139,166"); // U+5351
  assertThrows(() => {
    ms932Encoder.encode("\u5355");
  }, Error, "EncodingError U+5355");
  assertThrows(() => {
    ms932Encoder.encode("\u5356");
  }, Error, "EncodingError U+5356");
  r = r && ([...ms932Encoder.encode("南単")].join(",") === "147,236,146,80"); // U+5357
  assertThrows(() => {
    ms932Encoder.encode("\u5359");
  }, Error, "EncodingError U+5359");
  r = r && ([...ms932Encoder.encode("博")].join(",") === "148,142"); // U+535A
  assertThrows(() => {
    ms932Encoder.encode("\u535B");
  }, Error, "EncodingError U+535B");
  r = r && ([...ms932Encoder.encode("卜")].join(",") === "150,109"); // U+535C
  assertThrows(() => {
    ms932Encoder.encode("\u535D");
  }, Error, "EncodingError U+535D");
  r = r && ([...ms932Encoder.encode("卞")].join(",") === "153,196"); // U+535E
  assertThrows(() => {
    ms932Encoder.encode("\u535F");
  }, Error, "EncodingError U+535F");
  r = r && ([...ms932Encoder.encode("占")].join(",") === "144,232"); // U+5360
  assertThrows(() => {
    ms932Encoder.encode("\u5361");
  }, Error, "EncodingError U+5361");
  assertThrows(() => {
    ms932Encoder.encode("\u5362");
  }, Error, "EncodingError U+5362");
  assertThrows(() => {
    ms932Encoder.encode("\u5363");
  }, Error, "EncodingError U+5363");
  assertThrows(() => {
    ms932Encoder.encode("\u5364");
  }, Error, "EncodingError U+5364");
  assertThrows(() => {
    ms932Encoder.encode("\u5365");
  }, Error, "EncodingError U+5365");
  r = r && ([...ms932Encoder.encode("卦")].join(",") === "140,84"); // U+5366
  assertThrows(() => {
    ms932Encoder.encode("\u5367");
  }, Error, "EncodingError U+5367");
  assertThrows(() => {
    ms932Encoder.encode("\u5368");
  }, Error, "EncodingError U+5368");
  r = r && ([...ms932Encoder.encode("卩")].join(",") === "153,197"); // U+5369
  assertThrows(() => {
    ms932Encoder.encode("\u536A");
  }, Error, "EncodingError U+536A");
  assertThrows(() => {
    ms932Encoder.encode("\u536B");
  }, Error, "EncodingError U+536B");
  assertThrows(() => {
    ms932Encoder.encode("\u536C");
  }, Error, "EncodingError U+536C");
  assertThrows(() => {
    ms932Encoder.encode("\u536D");
  }, Error, "EncodingError U+536D");
  r = r &&
    ([...ms932Encoder.encode("卮卯印危卲即却卵")].join(",") ===
      "153,198,137,75,136,243,138,235,250,140,145,166,139,112,151,145"); // U+536E
  assertThrows(() => {
    ms932Encoder.encode("\u5376");
  }, Error, "EncodingError U+5376");
  r = r && ([...ms932Encoder.encode("卷卸")].join(",") === "153,201,137,181"); // U+5377
  assertThrows(() => {
    ms932Encoder.encode("\u5379");
  }, Error, "EncodingError U+5379");
  assertThrows(() => {
    ms932Encoder.encode("\u537A");
  }, Error, "EncodingError U+537A");
  r = r && ([...ms932Encoder.encode("卻")].join(",") === "153,200"); // U+537B
  assertThrows(() => {
    ms932Encoder.encode("\u537C");
  }, Error, "EncodingError U+537C");
  assertThrows(() => {
    ms932Encoder.encode("\u537D");
  }, Error, "EncodingError U+537D");
  assertThrows(() => {
    ms932Encoder.encode("\u537E");
  }, Error, "EncodingError U+537E");
  r = r && ([...ms932Encoder.encode("卿")].join(",") === "139,168"); // U+537F
  assertThrows(() => {
    ms932Encoder.encode("\u5380");
  }, Error, "EncodingError U+5380");
  assertThrows(() => {
    ms932Encoder.encode("\u5381");
  }, Error, "EncodingError U+5381");
  r = r && ([...ms932Encoder.encode("厂")].join(",") === "153,202"); // U+5382
  assertThrows(() => {
    ms932Encoder.encode("\u5383");
  }, Error, "EncodingError U+5383");
  r = r && ([...ms932Encoder.encode("厄")].join(",") === "150,239"); // U+5384
  assertThrows(() => {
    ms932Encoder.encode("\u5385");
  }, Error, "EncodingError U+5385");
  assertThrows(() => {
    ms932Encoder.encode("\u5386");
  }, Error, "EncodingError U+5386");
  assertThrows(() => {
    ms932Encoder.encode("\u5387");
  }, Error, "EncodingError U+5387");
  assertThrows(() => {
    ms932Encoder.encode("\u5388");
  }, Error, "EncodingError U+5388");
  assertThrows(() => {
    ms932Encoder.encode("\u5389");
  }, Error, "EncodingError U+5389");
  assertThrows(() => {
    ms932Encoder.encode("\u538A");
  }, Error, "EncodingError U+538A");
  assertThrows(() => {
    ms932Encoder.encode("\u538B");
  }, Error, "EncodingError U+538B");
  assertThrows(() => {
    ms932Encoder.encode("\u538C");
  }, Error, "EncodingError U+538C");
  assertThrows(() => {
    ms932Encoder.encode("\u538D");
  }, Error, "EncodingError U+538D");
  assertThrows(() => {
    ms932Encoder.encode("\u538E");
  }, Error, "EncodingError U+538E");
  assertThrows(() => {
    ms932Encoder.encode("\u538F");
  }, Error, "EncodingError U+538F");
  assertThrows(() => {
    ms932Encoder.encode("\u5390");
  }, Error, "EncodingError U+5390");
  assertThrows(() => {
    ms932Encoder.encode("\u5391");
  }, Error, "EncodingError U+5391");
  assertThrows(() => {
    ms932Encoder.encode("\u5392");
  }, Error, "EncodingError U+5392");
  r = r && ([...ms932Encoder.encode("厓")].join(",") === "250,141"); // U+5393
  assertThrows(() => {
    ms932Encoder.encode("\u5394");
  }, Error, "EncodingError U+5394");
  assertThrows(() => {
    ms932Encoder.encode("\u5395");
  }, Error, "EncodingError U+5395");
  r = r && ([...ms932Encoder.encode("厖")].join(",") === "153,203"); // U+5396
  assertThrows(() => {
    ms932Encoder.encode("\u5397");
  }, Error, "EncodingError U+5397");
  r = r && ([...ms932Encoder.encode("厘")].join(",") === "151,208"); // U+5398
  assertThrows(() => {
    ms932Encoder.encode("\u5399");
  }, Error, "EncodingError U+5399");
  r = r && ([...ms932Encoder.encode("厚")].join(",") === "140,250"); // U+539A
  assertThrows(() => {
    ms932Encoder.encode("\u539B");
  }, Error, "EncodingError U+539B");
  assertThrows(() => {
    ms932Encoder.encode("\u539C");
  }, Error, "EncodingError U+539C");
  assertThrows(() => {
    ms932Encoder.encode("\u539D");
  }, Error, "EncodingError U+539D");
  assertThrows(() => {
    ms932Encoder.encode("\u539E");
  }, Error, "EncodingError U+539E");
  r = r && ([...ms932Encoder.encode("原厠")].join(",") === "140,180,153,204"); // U+539F
  assertThrows(() => {
    ms932Encoder.encode("\u53A1");
  }, Error, "EncodingError U+53A1");
  assertThrows(() => {
    ms932Encoder.encode("\u53A2");
  }, Error, "EncodingError U+53A2");
  assertThrows(() => {
    ms932Encoder.encode("\u53A3");
  }, Error, "EncodingError U+53A3");
  assertThrows(() => {
    ms932Encoder.encode("\u53A4");
  }, Error, "EncodingError U+53A4");
  r = r && ([...ms932Encoder.encode("厥厦")].join(",") === "153,206,153,205"); // U+53A5
  assertThrows(() => {
    ms932Encoder.encode("\u53A7");
  }, Error, "EncodingError U+53A7");
  r = r && ([...ms932Encoder.encode("厨厩")].join(",") === "144,126,137,88"); // U+53A8
  assertThrows(() => {
    ms932Encoder.encode("\u53AA");
  }, Error, "EncodingError U+53AA");
  assertThrows(() => {
    ms932Encoder.encode("\u53AB");
  }, Error, "EncodingError U+53AB");
  assertThrows(() => {
    ms932Encoder.encode("\u53AC");
  }, Error, "EncodingError U+53AC");
  r = r && ([...ms932Encoder.encode("厭厮")].join(",") === "137,125,153,207"); // U+53AD
  assertThrows(() => {
    ms932Encoder.encode("\u53AF");
  }, Error, "EncodingError U+53AF");
  r = r && ([...ms932Encoder.encode("厰")].join(",") === "153,208"); // U+53B0
  assertThrows(() => {
    ms932Encoder.encode("\u53B1");
  }, Error, "EncodingError U+53B1");
  r = r && ([...ms932Encoder.encode("厲厳")].join(",") === "250,142,140,181"); // U+53B2
  assertThrows(() => {
    ms932Encoder.encode("\u53B4");
  }, Error, "EncodingError U+53B4");
  assertThrows(() => {
    ms932Encoder.encode("\u53B5");
  }, Error, "EncodingError U+53B5");
  r = r && ([...ms932Encoder.encode("厶")].join(",") === "153,209"); // U+53B6
  assertThrows(() => {
    ms932Encoder.encode("\u53B7");
  }, Error, "EncodingError U+53B7");
  assertThrows(() => {
    ms932Encoder.encode("\u53B8");
  }, Error, "EncodingError U+53B8");
  assertThrows(() => {
    ms932Encoder.encode("\u53B9");
  }, Error, "EncodingError U+53B9");
  assertThrows(() => {
    ms932Encoder.encode("\u53BA");
  }, Error, "EncodingError U+53BA");
  r = r && ([...ms932Encoder.encode("去")].join(",") === "139,142"); // U+53BB
  assertThrows(() => {
    ms932Encoder.encode("\u53BC");
  }, Error, "EncodingError U+53BC");
  assertThrows(() => {
    ms932Encoder.encode("\u53BD");
  }, Error, "EncodingError U+53BD");
  assertThrows(() => {
    ms932Encoder.encode("\u53BE");
  }, Error, "EncodingError U+53BE");
  assertThrows(() => {
    ms932Encoder.encode("\u53BF");
  }, Error, "EncodingError U+53BF");
  assertThrows(() => {
    ms932Encoder.encode("\u53C0");
  }, Error, "EncodingError U+53C0");
  assertThrows(() => {
    ms932Encoder.encode("\u53C1");
  }, Error, "EncodingError U+53C1");
  r = r && ([...ms932Encoder.encode("参參")].join(",") === "142,81,153,210"); // U+53C2
  assertThrows(() => {
    ms932Encoder.encode("\u53C4");
  }, Error, "EncodingError U+53C4");
  assertThrows(() => {
    ms932Encoder.encode("\u53C5");
  }, Error, "EncodingError U+53C5");
  assertThrows(() => {
    ms932Encoder.encode("\u53C6");
  }, Error, "EncodingError U+53C6");
  assertThrows(() => {
    ms932Encoder.encode("\u53C7");
  }, Error, "EncodingError U+53C7");
  r = r &&
    ([...ms932Encoder.encode("又叉及友双反収")].join(",") ===
      "150,148,141,179,139,121,151,70,145,111,148,189,142,251"); // U+53C8
  assertThrows(() => {
    ms932Encoder.encode("\u53CF");
  }, Error, "EncodingError U+53CF");
  assertThrows(() => {
    ms932Encoder.encode("\u53D0");
  }, Error, "EncodingError U+53D0");
  assertThrows(() => {
    ms932Encoder.encode("\u53D1");
  }, Error, "EncodingError U+53D1");
  assertThrows(() => {
    ms932Encoder.encode("\u53D2");
  }, Error, "EncodingError U+53D2");
  assertThrows(() => {
    ms932Encoder.encode("\u53D3");
  }, Error, "EncodingError U+53D3");
  r = r && ([...ms932Encoder.encode("叔")].join(",") === "143,102"); // U+53D4
  assertThrows(() => {
    ms932Encoder.encode("\u53D5");
  }, Error, "EncodingError U+53D5");
  r = r && ([...ms932Encoder.encode("取受")].join(",") === "142,230,142,243"); // U+53D6
  assertThrows(() => {
    ms932Encoder.encode("\u53D8");
  }, Error, "EncodingError U+53D8");
  r = r && ([...ms932Encoder.encode("叙")].join(",") === "143,150"); // U+53D9
  assertThrows(() => {
    ms932Encoder.encode("\u53DA");
  }, Error, "EncodingError U+53DA");
  r = r && ([...ms932Encoder.encode("叛")].join(",") === "148,190"); // U+53DB
  assertThrows(() => {
    ms932Encoder.encode("\u53DC");
  }, Error, "EncodingError U+53DC");
  r = r && ([...ms932Encoder.encode("叝")].join(",") === "250,143"); // U+53DD
  assertThrows(() => {
    ms932Encoder.encode("\u53DE");
  }, Error, "EncodingError U+53DE");
  r = r && ([...ms932Encoder.encode("叟")].join(",") === "153,213"); // U+53DF
  assertThrows(() => {
    ms932Encoder.encode("\u53E0");
  }, Error, "EncodingError U+53E0");
  r = r &&
    ([...ms932Encoder.encode("叡叢口古句")].join(",") ===
      "137,98,145,112,140,251,140,195,139,229"); // U+53E1
  assertThrows(() => {
    ms932Encoder.encode("\u53E6");
  }, Error, "EncodingError U+53E6");
  assertThrows(() => {
    ms932Encoder.encode("\u53E7");
  }, Error, "EncodingError U+53E7");
  r = r &&
    ([...ms932Encoder.encode("叨叩只叫召叭叮可台叱史右")].join(",") ===
      "153,217,146,64,145,252,139,169,143,162,153,218,153,216,137,194,145,228,142,182,142,106,137,69"); // U+53E8
  assertThrows(() => {
    ms932Encoder.encode("\u53F4");
  }, Error, "EncodingError U+53F4");
  assertThrows(() => {
    ms932Encoder.encode("\u53F5");
  }, Error, "EncodingError U+53F5");
  r = r &&
    ([...ms932Encoder.encode("叶号司")].join(",") === "138,144,141,134,142,105"); // U+53F6
  assertThrows(() => {
    ms932Encoder.encode("\u53F9");
  }, Error, "EncodingError U+53F9");
  r = r && ([...ms932Encoder.encode("叺")].join(",") === "153,219"); // U+53FA
  assertThrows(() => {
    ms932Encoder.encode("\u53FB");
  }, Error, "EncodingError U+53FB");
  assertThrows(() => {
    ms932Encoder.encode("\u53FC");
  }, Error, "EncodingError U+53FC");
  assertThrows(() => {
    ms932Encoder.encode("\u53FD");
  }, Error, "EncodingError U+53FD");
  assertThrows(() => {
    ms932Encoder.encode("\u53FE");
  }, Error, "EncodingError U+53FE");
  assertThrows(() => {
    ms932Encoder.encode("\u53FF");
  }, Error, "EncodingError U+53FF");

  assertStrictEquals(r, true);

});
