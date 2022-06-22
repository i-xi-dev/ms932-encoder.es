import { assertStrictEquals, assertThrows } from "std/testing/asserts";
import { Ms932 } from "../src/ms932.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+6000-U+63FF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(() => {
    ms932Encoder.encode("\u6000");
  }, Error, "EncodingError U+6000");
  assertThrows(() => {
    ms932Encoder.encode("\u6001");
  }, Error, "EncodingError U+6001");
  assertThrows(() => {
    ms932Encoder.encode("\u6002");
  }, Error, "EncodingError U+6002");
  assertThrows(() => {
    ms932Encoder.encode("\u6003");
  }, Error, "EncodingError U+6003");
  assertThrows(() => {
    ms932Encoder.encode("\u6004");
  }, Error, "EncodingError U+6004");
  assertThrows(() => {
    ms932Encoder.encode("\u6005");
  }, Error, "EncodingError U+6005");
  assertThrows(() => {
    ms932Encoder.encode("\u6006");
  }, Error, "EncodingError U+6006");
  assertThrows(() => {
    ms932Encoder.encode("\u6007");
  }, Error, "EncodingError U+6007");
  assertThrows(() => {
    ms932Encoder.encode("\u6008");
  }, Error, "EncodingError U+6008");
  assertThrows(() => {
    ms932Encoder.encode("\u6009");
  }, Error, "EncodingError U+6009");
  assertThrows(() => {
    ms932Encoder.encode("\u600A");
  }, Error, "EncodingError U+600A");
  assertThrows(() => {
    ms932Encoder.encode("\u600B");
  }, Error, "EncodingError U+600B");
  assertThrows(() => {
    ms932Encoder.encode("\u600C");
  }, Error, "EncodingError U+600C");
  assertThrows(() => {
    ms932Encoder.encode("\u600D");
  }, Error, "EncodingError U+600D");
  r = r &&
    ([...ms932Encoder.encode("怎怏怐")].join(",") === "156,131,156,137,156,129"); // U+600E
  assertThrows(() => {
    ms932Encoder.encode("\u6011");
  }, Error, "EncodingError U+6011");
  r = r && ([...ms932Encoder.encode("怒")].join(",") === "147,123"); // U+6012
  assertThrows(() => {
    ms932Encoder.encode("\u6013");
  }, Error, "EncodingError U+6013");
  assertThrows(() => {
    ms932Encoder.encode("\u6014");
  }, Error, "EncodingError U+6014");
  r = r && ([...ms932Encoder.encode("怕怖")].join(",") === "156,134,149,124"); // U+6015
  assertThrows(() => {
    ms932Encoder.encode("\u6017");
  }, Error, "EncodingError U+6017");
  assertThrows(() => {
    ms932Encoder.encode("\u6018");
  }, Error, "EncodingError U+6018");
  r = r && ([...ms932Encoder.encode("怙")].join(",") === "156,128"); // U+6019
  assertThrows(() => {
    ms932Encoder.encode("\u601A");
  }, Error, "EncodingError U+601A");
  r = r &&
    ([...ms932Encoder.encode("怛怜思")].join(",") === "156,133,151,229,142,118"); // U+601B
  assertThrows(() => {
    ms932Encoder.encode("\u601E");
  }, Error, "EncodingError U+601E");
  assertThrows(() => {
    ms932Encoder.encode("\u601F");
  }, Error, "EncodingError U+601F");
  r = r && ([...ms932Encoder.encode("怠怡")].join(",") === "145,211,156,125"); // U+6020
  assertThrows(() => {
    ms932Encoder.encode("\u6022");
  }, Error, "EncodingError U+6022");
  assertThrows(() => {
    ms932Encoder.encode("\u6023");
  }, Error, "EncodingError U+6023");
  assertThrows(() => {
    ms932Encoder.encode("\u6024");
  }, Error, "EncodingError U+6024");
  r = r &&
    ([...ms932Encoder.encode("急怦性怨怩怪怫")].join(",") ===
      "139,125,156,136,144,171,137,133,156,130,137,246,156,135"); // U+6025
  assertThrows(() => {
    ms932Encoder.encode("\u602C");
  }, Error, "EncodingError U+602C");
  assertThrows(() => {
    ms932Encoder.encode("\u602D");
  }, Error, "EncodingError U+602D");
  assertThrows(() => {
    ms932Encoder.encode("\u602E");
  }, Error, "EncodingError U+602E");
  r = r && ([...ms932Encoder.encode("怯")].join(",") === "139,175"); // U+602F
  assertThrows(() => {
    ms932Encoder.encode("\u6030");
  }, Error, "EncodingError U+6030");
  r = r && ([...ms932Encoder.encode("怱")].join(",") === "156,132"); // U+6031
  assertThrows(() => {
    ms932Encoder.encode("\u6032");
  }, Error, "EncodingError U+6032");
  assertThrows(() => {
    ms932Encoder.encode("\u6033");
  }, Error, "EncodingError U+6033");
  assertThrows(() => {
    ms932Encoder.encode("\u6034");
  }, Error, "EncodingError U+6034");
  assertThrows(() => {
    ms932Encoder.encode("\u6035");
  }, Error, "EncodingError U+6035");
  assertThrows(() => {
    ms932Encoder.encode("\u6036");
  }, Error, "EncodingError U+6036");
  assertThrows(() => {
    ms932Encoder.encode("\u6037");
  }, Error, "EncodingError U+6037");
  assertThrows(() => {
    ms932Encoder.encode("\u6038");
  }, Error, "EncodingError U+6038");
  assertThrows(() => {
    ms932Encoder.encode("\u6039");
  }, Error, "EncodingError U+6039");
  r = r && ([...ms932Encoder.encode("怺")].join(",") === "156,138"); // U+603A
  assertThrows(() => {
    ms932Encoder.encode("\u603B");
  }, Error, "EncodingError U+603B");
  assertThrows(() => {
    ms932Encoder.encode("\u603C");
  }, Error, "EncodingError U+603C");
  assertThrows(() => {
    ms932Encoder.encode("\u603D");
  }, Error, "EncodingError U+603D");
  assertThrows(() => {
    ms932Encoder.encode("\u603E");
  }, Error, "EncodingError U+603E");
  assertThrows(() => {
    ms932Encoder.encode("\u603F");
  }, Error, "EncodingError U+603F");
  assertThrows(() => {
    ms932Encoder.encode("\u6040");
  }, Error, "EncodingError U+6040");
  r = r &&
    ([...ms932Encoder.encode("恁恂恃")].join(",") === "156,140,156,150,156,148"); // U+6041
  assertThrows(() => {
    ms932Encoder.encode("\u6044");
  }, Error, "EncodingError U+6044");
  assertThrows(() => {
    ms932Encoder.encode("\u6045");
  }, Error, "EncodingError U+6045");
  r = r && ([...ms932Encoder.encode("恆")].join(",") === "156,145"); // U+6046
  assertThrows(() => {
    ms932Encoder.encode("\u6047");
  }, Error, "EncodingError U+6047");
  assertThrows(() => {
    ms932Encoder.encode("\u6048");
  }, Error, "EncodingError U+6048");
  assertThrows(() => {
    ms932Encoder.encode("\u6049");
  }, Error, "EncodingError U+6049");
  r = r && ([...ms932Encoder.encode("恊恋")].join(",") === "156,144,151,246"); // U+604A
  assertThrows(() => {
    ms932Encoder.encode("\u604C");
  }, Error, "EncodingError U+604C");
  r = r && ([...ms932Encoder.encode("恍")].join(",") === "156,146"); // U+604D
  assertThrows(() => {
    ms932Encoder.encode("\u604E");
  }, Error, "EncodingError U+604E");
  assertThrows(() => {
    ms932Encoder.encode("\u604F");
  }, Error, "EncodingError U+604F");
  r = r && ([...ms932Encoder.encode("恐")].join(",") === "139,176"); // U+6050
  assertThrows(() => {
    ms932Encoder.encode("\u6051");
  }, Error, "EncodingError U+6051");
  r = r && ([...ms932Encoder.encode("恒")].join(",") === "141,80"); // U+6052
  assertThrows(() => {
    ms932Encoder.encode("\u6053");
  }, Error, "EncodingError U+6053");
  assertThrows(() => {
    ms932Encoder.encode("\u6054");
  }, Error, "EncodingError U+6054");
  r = r && ([...ms932Encoder.encode("恕")].join(",") === "143,154"); // U+6055
  assertThrows(() => {
    ms932Encoder.encode("\u6056");
  }, Error, "EncodingError U+6056");
  assertThrows(() => {
    ms932Encoder.encode("\u6057");
  }, Error, "EncodingError U+6057");
  assertThrows(() => {
    ms932Encoder.encode("\u6058");
  }, Error, "EncodingError U+6058");
  r = r && ([...ms932Encoder.encode("恙恚")].join(",") === "156,153,156,139"); // U+6059
  assertThrows(() => {
    ms932Encoder.encode("\u605B");
  }, Error, "EncodingError U+605B");
  assertThrows(() => {
    ms932Encoder.encode("\u605C");
  }, Error, "EncodingError U+605C");
  r = r && ([...ms932Encoder.encode("恝")].join(",") === "250,188"); // U+605D
  assertThrows(() => {
    ms932Encoder.encode("\u605E");
  }, Error, "EncodingError U+605E");
  r = r && ([...ms932Encoder.encode("恟恠")].join(",") === "156,143,156,126"); // U+605F
  assertThrows(() => {
    ms932Encoder.encode("\u6061");
  }, Error, "EncodingError U+6061");
  r = r &&
    ([...ms932Encoder.encode("恢恣恤恥")].join(",") ===
      "137,248,156,147,156,149,146,112"); // U+6062
  assertThrows(() => {
    ms932Encoder.encode("\u6066");
  }, Error, "EncodingError U+6066");
  assertThrows(() => {
    ms932Encoder.encode("\u6067");
  }, Error, "EncodingError U+6067");
  r = r &&
    ([...ms932Encoder.encode("恨恩恪恫恬恭")].join(",") ===
      "141,166,137,182,156,141,156,152,156,151,139,177"); // U+6068
  assertThrows(() => {
    ms932Encoder.encode("\u606E");
  }, Error, "EncodingError U+606E");
  r = r && ([...ms932Encoder.encode("息恰")].join(",") === "145,167,138,134"); // U+606F
  assertThrows(() => {
    ms932Encoder.encode("\u6071");
  }, Error, "EncodingError U+6071");
  assertThrows(() => {
    ms932Encoder.encode("\u6072");
  }, Error, "EncodingError U+6072");
  assertThrows(() => {
    ms932Encoder.encode("\u6073");
  }, Error, "EncodingError U+6073");
  assertThrows(() => {
    ms932Encoder.encode("\u6074");
  }, Error, "EncodingError U+6074");
  r = r && ([...ms932Encoder.encode("恵")].join(",") === "140,98"); // U+6075
  assertThrows(() => {
    ms932Encoder.encode("\u6076");
  }, Error, "EncodingError U+6076");
  r = r && ([...ms932Encoder.encode("恷")].join(",") === "156,142"); // U+6077
  assertThrows(() => {
    ms932Encoder.encode("\u6078");
  }, Error, "EncodingError U+6078");
  assertThrows(() => {
    ms932Encoder.encode("\u6079");
  }, Error, "EncodingError U+6079");
  assertThrows(() => {
    ms932Encoder.encode("\u607A");
  }, Error, "EncodingError U+607A");
  assertThrows(() => {
    ms932Encoder.encode("\u607B");
  }, Error, "EncodingError U+607B");
  assertThrows(() => {
    ms932Encoder.encode("\u607C");
  }, Error, "EncodingError U+607C");
  assertThrows(() => {
    ms932Encoder.encode("\u607D");
  }, Error, "EncodingError U+607D");
  assertThrows(() => {
    ms932Encoder.encode("\u607E");
  }, Error, "EncodingError U+607E");
  assertThrows(() => {
    ms932Encoder.encode("\u607F");
  }, Error, "EncodingError U+607F");
  assertThrows(() => {
    ms932Encoder.encode("\u6080");
  }, Error, "EncodingError U+6080");
  r = r && ([...ms932Encoder.encode("悁")].join(",") === "156,154"); // U+6081
  assertThrows(() => {
    ms932Encoder.encode("\u6082");
  }, Error, "EncodingError U+6082");
  r = r &&
    ([...ms932Encoder.encode("悃悄悅")].join(",") === "156,157,156,159,250,189"); // U+6083
  assertThrows(() => {
    ms932Encoder.encode("\u6086");
  }, Error, "EncodingError U+6086");
  assertThrows(() => {
    ms932Encoder.encode("\u6087");
  }, Error, "EncodingError U+6087");
  assertThrows(() => {
    ms932Encoder.encode("\u6088");
  }, Error, "EncodingError U+6088");
  r = r &&
    ([...ms932Encoder.encode("悉悊悋悌悍")].join(",") ===
      "142,187,250,190,156,165,146,238,156,155"); // U+6089
  assertThrows(() => {
    ms932Encoder.encode("\u608E");
  }, Error, "EncodingError U+608E");
  assertThrows(() => {
    ms932Encoder.encode("\u608F");
  }, Error, "EncodingError U+608F");
  assertThrows(() => {
    ms932Encoder.encode("\u6090");
  }, Error, "EncodingError U+6090");
  assertThrows(() => {
    ms932Encoder.encode("\u6091");
  }, Error, "EncodingError U+6091");
  r = r && ([...ms932Encoder.encode("悒")].join(",") === "156,163"); // U+6092
  assertThrows(() => {
    ms932Encoder.encode("\u6093");
  }, Error, "EncodingError U+6093");
  r = r && ([...ms932Encoder.encode("悔")].join(",") === "137,247"); // U+6094
  assertThrows(() => {
    ms932Encoder.encode("\u6095");
  }, Error, "EncodingError U+6095");
  r = r && ([...ms932Encoder.encode("悖悗")].join(",") === "156,161,156,162"); // U+6096
  assertThrows(() => {
    ms932Encoder.encode("\u6098");
  }, Error, "EncodingError U+6098");
  assertThrows(() => {
    ms932Encoder.encode("\u6099");
  }, Error, "EncodingError U+6099");
  r = r && ([...ms932Encoder.encode("悚悛")].join(",") === "156,158,156,160"); // U+609A
  assertThrows(() => {
    ms932Encoder.encode("\u609C");
  }, Error, "EncodingError U+609C");
  assertThrows(() => {
    ms932Encoder.encode("\u609D");
  }, Error, "EncodingError U+609D");
  assertThrows(() => {
    ms932Encoder.encode("\u609E");
  }, Error, "EncodingError U+609E");
  r = r && ([...ms932Encoder.encode("悟悠")].join(",") === "140,229,151,73"); // U+609F
  assertThrows(() => {
    ms932Encoder.encode("\u60A1");
  }, Error, "EncodingError U+60A1");
  assertThrows(() => {
    ms932Encoder.encode("\u60A2");
  }, Error, "EncodingError U+60A2");
  r = r && ([...ms932Encoder.encode("患")].join(",") === "138,179"); // U+60A3
  assertThrows(() => {
    ms932Encoder.encode("\u60A4");
  }, Error, "EncodingError U+60A4");
  assertThrows(() => {
    ms932Encoder.encode("\u60A5");
  }, Error, "EncodingError U+60A5");
  r = r && ([...ms932Encoder.encode("悦悧")].join(",") === "137,120,156,164"); // U+60A6
  assertThrows(() => {
    ms932Encoder.encode("\u60A8");
  }, Error, "EncodingError U+60A8");
  r = r && ([...ms932Encoder.encode("悩悪")].join(",") === "148,89,136,171"); // U+60A9
  assertThrows(() => {
    ms932Encoder.encode("\u60AB");
  }, Error, "EncodingError U+60AB");
  assertThrows(() => {
    ms932Encoder.encode("\u60AC");
  }, Error, "EncodingError U+60AC");
  assertThrows(() => {
    ms932Encoder.encode("\u60AD");
  }, Error, "EncodingError U+60AD");
  assertThrows(() => {
    ms932Encoder.encode("\u60AE");
  }, Error, "EncodingError U+60AE");
  assertThrows(() => {
    ms932Encoder.encode("\u60AF");
  }, Error, "EncodingError U+60AF");
  assertThrows(() => {
    ms932Encoder.encode("\u60B0");
  }, Error, "EncodingError U+60B0");
  assertThrows(() => {
    ms932Encoder.encode("\u60B1");
  }, Error, "EncodingError U+60B1");
  r = r &&
    ([...ms932Encoder.encode("悲悳悴悵悶")].join(",") ===
      "148,223,156,123,156,170,156,174,150,227"); // U+60B2
  assertThrows(() => {
    ms932Encoder.encode("\u60B7");
  }, Error, "EncodingError U+60B7");
  r = r && ([...ms932Encoder.encode("悸")].join(",") === "156,167"); // U+60B8
  assertThrows(() => {
    ms932Encoder.encode("\u60B9");
  }, Error, "EncodingError U+60B9");
  assertThrows(() => {
    ms932Encoder.encode("\u60BA");
  }, Error, "EncodingError U+60BA");
  assertThrows(() => {
    ms932Encoder.encode("\u60BB");
  }, Error, "EncodingError U+60BB");
  r = r && ([...ms932Encoder.encode("悼悽")].join(",") === "147,137,156,172"); // U+60BC
  assertThrows(() => {
    ms932Encoder.encode("\u60BE");
  }, Error, "EncodingError U+60BE");
  assertThrows(() => {
    ms932Encoder.encode("\u60BF");
  }, Error, "EncodingError U+60BF");
  assertThrows(() => {
    ms932Encoder.encode("\u60C0");
  }, Error, "EncodingError U+60C0");
  assertThrows(() => {
    ms932Encoder.encode("\u60C1");
  }, Error, "EncodingError U+60C1");
  assertThrows(() => {
    ms932Encoder.encode("\u60C2");
  }, Error, "EncodingError U+60C2");
  assertThrows(() => {
    ms932Encoder.encode("\u60C3");
  }, Error, "EncodingError U+60C3");
  assertThrows(() => {
    ms932Encoder.encode("\u60C4");
  }, Error, "EncodingError U+60C4");
  r = r &&
    ([...ms932Encoder.encode("情惆惇")].join(",") === "143,238,156,173,147,213"); // U+60C5
  assertThrows(() => {
    ms932Encoder.encode("\u60C8");
  }, Error, "EncodingError U+60C8");
  assertThrows(() => {
    ms932Encoder.encode("\u60C9");
  }, Error, "EncodingError U+60C9");
  assertThrows(() => {
    ms932Encoder.encode("\u60CA");
  }, Error, "EncodingError U+60CA");
  assertThrows(() => {
    ms932Encoder.encode("\u60CB");
  }, Error, "EncodingError U+60CB");
  assertThrows(() => {
    ms932Encoder.encode("\u60CC");
  }, Error, "EncodingError U+60CC");
  assertThrows(() => {
    ms932Encoder.encode("\u60CD");
  }, Error, "EncodingError U+60CD");
  assertThrows(() => {
    ms932Encoder.encode("\u60CE");
  }, Error, "EncodingError U+60CE");
  assertThrows(() => {
    ms932Encoder.encode("\u60CF");
  }, Error, "EncodingError U+60CF");
  assertThrows(() => {
    ms932Encoder.encode("\u60D0");
  }, Error, "EncodingError U+60D0");
  r = r && ([...ms932Encoder.encode("惑")].join(",") === "152,102"); // U+60D1
  assertThrows(() => {
    ms932Encoder.encode("\u60D2");
  }, Error, "EncodingError U+60D2");
  r = r && ([...ms932Encoder.encode("惓")].join(",") === "156,169"); // U+60D3
  assertThrows(() => {
    ms932Encoder.encode("\u60D4");
  }, Error, "EncodingError U+60D4");
  r = r && ([...ms932Encoder.encode("惕")].join(",") === "250,192"); // U+60D5
  assertThrows(() => {
    ms932Encoder.encode("\u60D6");
  }, Error, "EncodingError U+60D6");
  assertThrows(() => {
    ms932Encoder.encode("\u60D7");
  }, Error, "EncodingError U+60D7");
  r = r && ([...ms932Encoder.encode("惘")].join(",") === "156,175"); // U+60D8
  assertThrows(() => {
    ms932Encoder.encode("\u60D9");
  }, Error, "EncodingError U+60D9");
  r = r && ([...ms932Encoder.encode("惚")].join(",") === "141,155"); // U+60DA
  assertThrows(() => {
    ms932Encoder.encode("\u60DB");
  }, Error, "EncodingError U+60DB");
  r = r && ([...ms932Encoder.encode("惜")].join(",") === "144,201"); // U+60DC
  assertThrows(() => {
    ms932Encoder.encode("\u60DD");
  }, Error, "EncodingError U+60DD");
  r = r &&
    ([...ms932Encoder.encode("惞惟惠惡")].join(",") ===
      "250,191,136,210,156,168,156,166"); // U+60DE
  assertThrows(() => {
    ms932Encoder.encode("\u60E2");
  }, Error, "EncodingError U+60E2");
  r = r && ([...ms932Encoder.encode("惣")].join(",") === "145,121"); // U+60E3
  assertThrows(() => {
    ms932Encoder.encode("\u60E4");
  }, Error, "EncodingError U+60E4");
  assertThrows(() => {
    ms932Encoder.encode("\u60E5");
  }, Error, "EncodingError U+60E5");
  assertThrows(() => {
    ms932Encoder.encode("\u60E6");
  }, Error, "EncodingError U+60E6");
  r = r && ([...ms932Encoder.encode("惧惨")].join(",") === "156,156,142,83"); // U+60E7
  assertThrows(() => {
    ms932Encoder.encode("\u60E9");
  }, Error, "EncodingError U+60E9");
  assertThrows(() => {
    ms932Encoder.encode("\u60EA");
  }, Error, "EncodingError U+60EA");
  assertThrows(() => {
    ms932Encoder.encode("\u60EB");
  }, Error, "EncodingError U+60EB");
  assertThrows(() => {
    ms932Encoder.encode("\u60EC");
  }, Error, "EncodingError U+60EC");
  assertThrows(() => {
    ms932Encoder.encode("\u60ED");
  }, Error, "EncodingError U+60ED");
  assertThrows(() => {
    ms932Encoder.encode("\u60EE");
  }, Error, "EncodingError U+60EE");
  assertThrows(() => {
    ms932Encoder.encode("\u60EF");
  }, Error, "EncodingError U+60EF");
  r = r &&
    ([...ms932Encoder.encode("惰惱惲想惴")].join(",") ===
      "145,196,156,187,250,194,145,122,156,182"); // U+60F0
  assertThrows(() => {
    ms932Encoder.encode("\u60F5");
  }, Error, "EncodingError U+60F5");
  r = r && ([...ms932Encoder.encode("惶惷")].join(",") === "156,179,156,180"); // U+60F6
  assertThrows(() => {
    ms932Encoder.encode("\u60F8");
  }, Error, "EncodingError U+60F8");
  r = r &&
    ([...ms932Encoder.encode("惹惺惻")].join(",") === "142,228,156,183,156,186"); // U+60F9
  assertThrows(() => {
    ms932Encoder.encode("\u60FC");
  }, Error, "EncodingError U+60FC");
  assertThrows(() => {
    ms932Encoder.encode("\u60FD");
  }, Error, "EncodingError U+60FD");
  assertThrows(() => {
    ms932Encoder.encode("\u60FE");
  }, Error, "EncodingError U+60FE");
  assertThrows(() => {
    ms932Encoder.encode("\u60FF");
  }, Error, "EncodingError U+60FF");
  r = r && ([...ms932Encoder.encode("愀愁")].join(",") === "156,181,143,68"); // U+6100
  assertThrows(() => {
    ms932Encoder.encode("\u6102");
  }, Error, "EncodingError U+6102");
  r = r && ([...ms932Encoder.encode("愃")].join(",") === "156,184"); // U+6103
  assertThrows(() => {
    ms932Encoder.encode("\u6104");
  }, Error, "EncodingError U+6104");
  assertThrows(() => {
    ms932Encoder.encode("\u6105");
  }, Error, "EncodingError U+6105");
  r = r && ([...ms932Encoder.encode("愆")].join(",") === "156,178"); // U+6106
  assertThrows(() => {
    ms932Encoder.encode("\u6107");
  }, Error, "EncodingError U+6107");
  r = r && ([...ms932Encoder.encode("愈愉")].join(",") === "150,250,150,249"); // U+6108
  assertThrows(() => {
    ms932Encoder.encode("\u610A");
  }, Error, "EncodingError U+610A");
  assertThrows(() => {
    ms932Encoder.encode("\u610B");
  }, Error, "EncodingError U+610B");
  assertThrows(() => {
    ms932Encoder.encode("\u610C");
  }, Error, "EncodingError U+610C");
  r = r &&
    ([...ms932Encoder.encode("愍愎意")].join(",") === "156,188,156,189,136,211"); // U+610D
  assertThrows(() => {
    ms932Encoder.encode("\u6110");
  }, Error, "EncodingError U+6110");
  r = r && ([...ms932Encoder.encode("愑")].join(",") === "250,195"); // U+6111
  assertThrows(() => {
    ms932Encoder.encode("\u6112");
  }, Error, "EncodingError U+6112");
  assertThrows(() => {
    ms932Encoder.encode("\u6113");
  }, Error, "EncodingError U+6113");
  assertThrows(() => {
    ms932Encoder.encode("\u6114");
  }, Error, "EncodingError U+6114");
  r = r && ([...ms932Encoder.encode("愕")].join(",") === "156,177"); // U+6115
  assertThrows(() => {
    ms932Encoder.encode("\u6116");
  }, Error, "EncodingError U+6116");
  assertThrows(() => {
    ms932Encoder.encode("\u6117");
  }, Error, "EncodingError U+6117");
  assertThrows(() => {
    ms932Encoder.encode("\u6118");
  }, Error, "EncodingError U+6118");
  assertThrows(() => {
    ms932Encoder.encode("\u6119");
  }, Error, "EncodingError U+6119");
  r = r && ([...ms932Encoder.encode("愚愛")].join(",") === "139,240,136,164"); // U+611A
  assertThrows(() => {
    ms932Encoder.encode("\u611C");
  }, Error, "EncodingError U+611C");
  assertThrows(() => {
    ms932Encoder.encode("\u611D");
  }, Error, "EncodingError U+611D");
  assertThrows(() => {
    ms932Encoder.encode("\u611E");
  }, Error, "EncodingError U+611E");
  r = r &&
    ([...ms932Encoder.encode("感愠愡")].join(",") === "138,180,250,193,156,185"); // U+611F
  assertThrows(() => {
    ms932Encoder.encode("\u6122");
  }, Error, "EncodingError U+6122");
  assertThrows(() => {
    ms932Encoder.encode("\u6123");
  }, Error, "EncodingError U+6123");
  assertThrows(() => {
    ms932Encoder.encode("\u6124");
  }, Error, "EncodingError U+6124");
  assertThrows(() => {
    ms932Encoder.encode("\u6125");
  }, Error, "EncodingError U+6125");
  assertThrows(() => {
    ms932Encoder.encode("\u6126");
  }, Error, "EncodingError U+6126");
  r = r && ([...ms932Encoder.encode("愧愨")].join(",") === "156,193,156,192"); // U+6127
  assertThrows(() => {
    ms932Encoder.encode("\u6129");
  }, Error, "EncodingError U+6129");
  assertThrows(() => {
    ms932Encoder.encode("\u612A");
  }, Error, "EncodingError U+612A");
  assertThrows(() => {
    ms932Encoder.encode("\u612B");
  }, Error, "EncodingError U+612B");
  r = r && ([...ms932Encoder.encode("愬")].join(",") === "156,197"); // U+612C
  assertThrows(() => {
    ms932Encoder.encode("\u612D");
  }, Error, "EncodingError U+612D");
  assertThrows(() => {
    ms932Encoder.encode("\u612E");
  }, Error, "EncodingError U+612E");
  assertThrows(() => {
    ms932Encoder.encode("\u612F");
  }, Error, "EncodingError U+612F");
  r = r && ([...ms932Encoder.encode("愰")].join(",") === "250,197"); // U+6130
  assertThrows(() => {
    ms932Encoder.encode("\u6131");
  }, Error, "EncodingError U+6131");
  assertThrows(() => {
    ms932Encoder.encode("\u6132");
  }, Error, "EncodingError U+6132");
  assertThrows(() => {
    ms932Encoder.encode("\u6133");
  }, Error, "EncodingError U+6133");
  r = r && ([...ms932Encoder.encode("愴")].join(",") === "156,198"); // U+6134
  assertThrows(() => {
    ms932Encoder.encode("\u6135");
  }, Error, "EncodingError U+6135");
  assertThrows(() => {
    ms932Encoder.encode("\u6136");
  }, Error, "EncodingError U+6136");
  r = r && ([...ms932Encoder.encode("愷")].join(",") === "250,196"); // U+6137
  assertThrows(() => {
    ms932Encoder.encode("\u6138");
  }, Error, "EncodingError U+6138");
  assertThrows(() => {
    ms932Encoder.encode("\u6139");
  }, Error, "EncodingError U+6139");
  assertThrows(() => {
    ms932Encoder.encode("\u613A");
  }, Error, "EncodingError U+613A");
  assertThrows(() => {
    ms932Encoder.encode("\u613B");
  }, Error, "EncodingError U+613B");
  r = r &&
    ([...ms932Encoder.encode("愼愽愾愿")].join(",") ===
      "156,196,156,199,156,191,156,195"); // U+613C
  assertThrows(() => {
    ms932Encoder.encode("\u6140");
  }, Error, "EncodingError U+6140");
  assertThrows(() => {
    ms932Encoder.encode("\u6141");
  }, Error, "EncodingError U+6141");
  r = r && ([...ms932Encoder.encode("慂")].join(",") === "156,200"); // U+6142
  assertThrows(() => {
    ms932Encoder.encode("\u6143");
  }, Error, "EncodingError U+6143");
  r = r && ([...ms932Encoder.encode("慄")].join(",") === "156,201"); // U+6144
  assertThrows(() => {
    ms932Encoder.encode("\u6145");
  }, Error, "EncodingError U+6145");
  assertThrows(() => {
    ms932Encoder.encode("\u6146");
  }, Error, "EncodingError U+6146");
  r = r && ([...ms932Encoder.encode("慇慈")].join(",") === "156,190,142,156"); // U+6147
  assertThrows(() => {
    ms932Encoder.encode("\u6149");
  }, Error, "EncodingError U+6149");
  r = r &&
    ([...ms932Encoder.encode("慊態慌慍慎")].join(",") ===
      "156,194,145,212,141,81,156,176,144,84"); // U+614A
  assertThrows(() => {
    ms932Encoder.encode("\u614F");
  }, Error, "EncodingError U+614F");
  assertThrows(() => {
    ms932Encoder.encode("\u6150");
  }, Error, "EncodingError U+6150");
  assertThrows(() => {
    ms932Encoder.encode("\u6151");
  }, Error, "EncodingError U+6151");
  assertThrows(() => {
    ms932Encoder.encode("\u6152");
  }, Error, "EncodingError U+6152");
  r = r && ([...ms932Encoder.encode("慓")].join(",") === "156,214"); // U+6153
  assertThrows(() => {
    ms932Encoder.encode("\u6154");
  }, Error, "EncodingError U+6154");
  r = r && ([...ms932Encoder.encode("慕")].join(",") === "149,231"); // U+6155
  assertThrows(() => {
    ms932Encoder.encode("\u6156");
  }, Error, "EncodingError U+6156");
  assertThrows(() => {
    ms932Encoder.encode("\u6157");
  }, Error, "EncodingError U+6157");
  r = r &&
    ([...ms932Encoder.encode("慘慙慚")].join(",") === "156,204,156,205,156,206"); // U+6158
  assertThrows(() => {
    ms932Encoder.encode("\u615B");
  }, Error, "EncodingError U+615B");
  assertThrows(() => {
    ms932Encoder.encode("\u615C");
  }, Error, "EncodingError U+615C");
  r = r && ([...ms932Encoder.encode("慝")].join(",") === "156,213"); // U+615D
  assertThrows(() => {
    ms932Encoder.encode("\u615E");
  }, Error, "EncodingError U+615E");
  r = r && ([...ms932Encoder.encode("慟")].join(",") === "156,212"); // U+615F
  assertThrows(() => {
    ms932Encoder.encode("\u6160");
  }, Error, "EncodingError U+6160");
  assertThrows(() => {
    ms932Encoder.encode("\u6161");
  }, Error, "EncodingError U+6161");
  r = r && ([...ms932Encoder.encode("慢慣")].join(",") === "150,157,138,181"); // U+6162
  assertThrows(() => {
    ms932Encoder.encode("\u6164");
  }, Error, "EncodingError U+6164");
  r = r && ([...ms932Encoder.encode("慥")].join(",") === "156,210"); // U+6165
  assertThrows(() => {
    ms932Encoder.encode("\u6166");
  }, Error, "EncodingError U+6166");
  r = r && ([...ms932Encoder.encode("慧慨")].join(",") === "140,100,138,83"); // U+6167
  assertThrows(() => {
    ms932Encoder.encode("\u6169");
  }, Error, "EncodingError U+6169");
  assertThrows(() => {
    ms932Encoder.encode("\u616A");
  }, Error, "EncodingError U+616A");
  r = r && ([...ms932Encoder.encode("慫")].join(",") === "156,207"); // U+616B
  assertThrows(() => {
    ms932Encoder.encode("\u616C");
  }, Error, "EncodingError U+616C");
  assertThrows(() => {
    ms932Encoder.encode("\u616D");
  }, Error, "EncodingError U+616D");
  r = r &&
    ([...ms932Encoder.encode("慮慯慰慱")].join(",") ===
      "151,182,156,209,136,212,156,211"); // U+616E
  assertThrows(() => {
    ms932Encoder.encode("\u6172");
  }, Error, "EncodingError U+6172");
  r = r &&
    ([...ms932Encoder.encode("慳慴慵慶慷")].join(",") ===
      "156,202,156,208,156,215,140,99,156,203"); // U+6173
  assertThrows(() => {
    ms932Encoder.encode("\u6178");
  }, Error, "EncodingError U+6178");
  assertThrows(() => {
    ms932Encoder.encode("\u6179");
  }, Error, "EncodingError U+6179");
  assertThrows(() => {
    ms932Encoder.encode("\u617A");
  }, Error, "EncodingError U+617A");
  assertThrows(() => {
    ms932Encoder.encode("\u617B");
  }, Error, "EncodingError U+617B");
  assertThrows(() => {
    ms932Encoder.encode("\u617C");
  }, Error, "EncodingError U+617C");
  assertThrows(() => {
    ms932Encoder.encode("\u617D");
  }, Error, "EncodingError U+617D");
  r = r && ([...ms932Encoder.encode("慾")].join(",") === "151,124"); // U+617E
  assertThrows(() => {
    ms932Encoder.encode("\u617F");
  }, Error, "EncodingError U+617F");
  assertThrows(() => {
    ms932Encoder.encode("\u6180");
  }, Error, "EncodingError U+6180");
  assertThrows(() => {
    ms932Encoder.encode("\u6181");
  }, Error, "EncodingError U+6181");
  r = r && ([...ms932Encoder.encode("憂")].join(",") === "151,74"); // U+6182
  assertThrows(() => {
    ms932Encoder.encode("\u6183");
  }, Error, "EncodingError U+6183");
  assertThrows(() => {
    ms932Encoder.encode("\u6184");
  }, Error, "EncodingError U+6184");
  assertThrows(() => {
    ms932Encoder.encode("\u6185");
  }, Error, "EncodingError U+6185");
  assertThrows(() => {
    ms932Encoder.encode("\u6186");
  }, Error, "EncodingError U+6186");
  r = r && ([...ms932Encoder.encode("憇")].join(",") === "156,218"); // U+6187
  assertThrows(() => {
    ms932Encoder.encode("\u6188");
  }, Error, "EncodingError U+6188");
  assertThrows(() => {
    ms932Encoder.encode("\u6189");
  }, Error, "EncodingError U+6189");
  r = r && ([...ms932Encoder.encode("憊")].join(",") === "156,222"); // U+618A
  assertThrows(() => {
    ms932Encoder.encode("\u618B");
  }, Error, "EncodingError U+618B");
  assertThrows(() => {
    ms932Encoder.encode("\u618C");
  }, Error, "EncodingError U+618C");
  assertThrows(() => {
    ms932Encoder.encode("\u618D");
  }, Error, "EncodingError U+618D");
  r = r && ([...ms932Encoder.encode("憎")].join(",") === "145,158"); // U+618E
  assertThrows(() => {
    ms932Encoder.encode("\u618F");
  }, Error, "EncodingError U+618F");
  r = r && ([...ms932Encoder.encode("憐憑")].join(",") === "151,247,156,223"); // U+6190
  assertThrows(() => {
    ms932Encoder.encode("\u6192");
  }, Error, "EncodingError U+6192");
  assertThrows(() => {
    ms932Encoder.encode("\u6193");
  }, Error, "EncodingError U+6193");
  r = r && ([...ms932Encoder.encode("憔")].join(",") === "156,220"); // U+6194
  assertThrows(() => {
    ms932Encoder.encode("\u6195");
  }, Error, "EncodingError U+6195");
  r = r && ([...ms932Encoder.encode("憖")].join(",") === "156,217"); // U+6196
  assertThrows(() => {
    ms932Encoder.encode("\u6197");
  }, Error, "EncodingError U+6197");
  r = r &&
    ([...ms932Encoder.encode("憘憙憚")].join(",") === "250,198,156,216,156,221"); // U+6198
  assertThrows(() => {
    ms932Encoder.encode("\u619B");
  }, Error, "EncodingError U+619B");
  assertThrows(() => {
    ms932Encoder.encode("\u619C");
  }, Error, "EncodingError U+619C");
  assertThrows(() => {
    ms932Encoder.encode("\u619D");
  }, Error, "EncodingError U+619D");
  assertThrows(() => {
    ms932Encoder.encode("\u619E");
  }, Error, "EncodingError U+619E");
  assertThrows(() => {
    ms932Encoder.encode("\u619F");
  }, Error, "EncodingError U+619F");
  assertThrows(() => {
    ms932Encoder.encode("\u61A0");
  }, Error, "EncodingError U+61A0");
  assertThrows(() => {
    ms932Encoder.encode("\u61A1");
  }, Error, "EncodingError U+61A1");
  assertThrows(() => {
    ms932Encoder.encode("\u61A2");
  }, Error, "EncodingError U+61A2");
  assertThrows(() => {
    ms932Encoder.encode("\u61A3");
  }, Error, "EncodingError U+61A3");
  r = r && ([...ms932Encoder.encode("憤")].join(",") === "149,174"); // U+61A4
  assertThrows(() => {
    ms932Encoder.encode("\u61A5");
  }, Error, "EncodingError U+61A5");
  assertThrows(() => {
    ms932Encoder.encode("\u61A6");
  }, Error, "EncodingError U+61A6");
  r = r && ([...ms932Encoder.encode("憧")].join(",") === "147,178"); // U+61A7
  assertThrows(() => {
    ms932Encoder.encode("\u61A8");
  }, Error, "EncodingError U+61A8");
  r = r && ([...ms932Encoder.encode("憩")].join(",") === "140,101"); // U+61A9
  assertThrows(() => {
    ms932Encoder.encode("\u61AA");
  }, Error, "EncodingError U+61AA");
  r = r && ([...ms932Encoder.encode("憫憬")].join(",") === "156,224,156,219"); // U+61AB
  assertThrows(() => {
    ms932Encoder.encode("\u61AD");
  }, Error, "EncodingError U+61AD");
  r = r && ([...ms932Encoder.encode("憮")].join(",") === "156,225"); // U+61AE
  assertThrows(() => {
    ms932Encoder.encode("\u61AF");
  }, Error, "EncodingError U+61AF");
  assertThrows(() => {
    ms932Encoder.encode("\u61B0");
  }, Error, "EncodingError U+61B0");
  assertThrows(() => {
    ms932Encoder.encode("\u61B1");
  }, Error, "EncodingError U+61B1");
  r = r && ([...ms932Encoder.encode("憲")].join(",") === "140,155"); // U+61B2
  assertThrows(() => {
    ms932Encoder.encode("\u61B3");
  }, Error, "EncodingError U+61B3");
  assertThrows(() => {
    ms932Encoder.encode("\u61B4");
  }, Error, "EncodingError U+61B4");
  assertThrows(() => {
    ms932Encoder.encode("\u61B5");
  }, Error, "EncodingError U+61B5");
  r = r && ([...ms932Encoder.encode("憶")].join(",") === "137,175"); // U+61B6
  assertThrows(() => {
    ms932Encoder.encode("\u61B7");
  }, Error, "EncodingError U+61B7");
  assertThrows(() => {
    ms932Encoder.encode("\u61B8");
  }, Error, "EncodingError U+61B8");
  assertThrows(() => {
    ms932Encoder.encode("\u61B9");
  }, Error, "EncodingError U+61B9");
  r = r && ([...ms932Encoder.encode("憺")].join(",") === "156,233"); // U+61BA
  assertThrows(() => {
    ms932Encoder.encode("\u61BB");
  }, Error, "EncodingError U+61BB");
  assertThrows(() => {
    ms932Encoder.encode("\u61BC");
  }, Error, "EncodingError U+61BC");
  assertThrows(() => {
    ms932Encoder.encode("\u61BD");
  }, Error, "EncodingError U+61BD");
  r = r && ([...ms932Encoder.encode("憾")].join(",") === "138,182"); // U+61BE
  assertThrows(() => {
    ms932Encoder.encode("\u61BF");
  }, Error, "EncodingError U+61BF");
  assertThrows(() => {
    ms932Encoder.encode("\u61C0");
  }, Error, "EncodingError U+61C0");
  assertThrows(() => {
    ms932Encoder.encode("\u61C1");
  }, Error, "EncodingError U+61C1");
  assertThrows(() => {
    ms932Encoder.encode("\u61C2");
  }, Error, "EncodingError U+61C2");
  r = r && ([...ms932Encoder.encode("懃")].join(",") === "156,231"); // U+61C3
  assertThrows(() => {
    ms932Encoder.encode("\u61C4");
  }, Error, "EncodingError U+61C4");
  assertThrows(() => {
    ms932Encoder.encode("\u61C5");
  }, Error, "EncodingError U+61C5");
  r = r &&
    ([...ms932Encoder.encode("懆懇懈應懊懋懌懍")].join(",") ===
      "156,232,141,167,156,230,156,228,156,227,156,234,156,226,156,236"); // U+61C6
  assertThrows(() => {
    ms932Encoder.encode("\u61CE");
  }, Error, "EncodingError U+61CE");
  assertThrows(() => {
    ms932Encoder.encode("\u61CF");
  }, Error, "EncodingError U+61CF");
  r = r && ([...ms932Encoder.encode("懐")].join(",") === "137,249"); // U+61D0
  assertThrows(() => {
    ms932Encoder.encode("\u61D1");
  }, Error, "EncodingError U+61D1");
  assertThrows(() => {
    ms932Encoder.encode("\u61D2");
  }, Error, "EncodingError U+61D2");
  assertThrows(() => {
    ms932Encoder.encode("\u61D3");
  }, Error, "EncodingError U+61D3");
  assertThrows(() => {
    ms932Encoder.encode("\u61D4");
  }, Error, "EncodingError U+61D4");
  assertThrows(() => {
    ms932Encoder.encode("\u61D5");
  }, Error, "EncodingError U+61D5");
  assertThrows(() => {
    ms932Encoder.encode("\u61D6");
  }, Error, "EncodingError U+61D6");
  assertThrows(() => {
    ms932Encoder.encode("\u61D7");
  }, Error, "EncodingError U+61D7");
  assertThrows(() => {
    ms932Encoder.encode("\u61D8");
  }, Error, "EncodingError U+61D8");
  assertThrows(() => {
    ms932Encoder.encode("\u61D9");
  }, Error, "EncodingError U+61D9");
  assertThrows(() => {
    ms932Encoder.encode("\u61DA");
  }, Error, "EncodingError U+61DA");
  assertThrows(() => {
    ms932Encoder.encode("\u61DB");
  }, Error, "EncodingError U+61DB");
  assertThrows(() => {
    ms932Encoder.encode("\u61DC");
  }, Error, "EncodingError U+61DC");
  assertThrows(() => {
    ms932Encoder.encode("\u61DD");
  }, Error, "EncodingError U+61DD");
  assertThrows(() => {
    ms932Encoder.encode("\u61DE");
  }, Error, "EncodingError U+61DE");
  assertThrows(() => {
    ms932Encoder.encode("\u61DF");
  }, Error, "EncodingError U+61DF");
  assertThrows(() => {
    ms932Encoder.encode("\u61E0");
  }, Error, "EncodingError U+61E0");
  assertThrows(() => {
    ms932Encoder.encode("\u61E1");
  }, Error, "EncodingError U+61E1");
  assertThrows(() => {
    ms932Encoder.encode("\u61E2");
  }, Error, "EncodingError U+61E2");
  r = r && ([...ms932Encoder.encode("懣")].join(",") === "156,238"); // U+61E3
  assertThrows(() => {
    ms932Encoder.encode("\u61E4");
  }, Error, "EncodingError U+61E4");
  assertThrows(() => {
    ms932Encoder.encode("\u61E5");
  }, Error, "EncodingError U+61E5");
  r = r && ([...ms932Encoder.encode("懦")].join(",") === "156,237"); // U+61E6
  assertThrows(() => {
    ms932Encoder.encode("\u61E7");
  }, Error, "EncodingError U+61E7");
  assertThrows(() => {
    ms932Encoder.encode("\u61E8");
  }, Error, "EncodingError U+61E8");
  assertThrows(() => {
    ms932Encoder.encode("\u61E9");
  }, Error, "EncodingError U+61E9");
  assertThrows(() => {
    ms932Encoder.encode("\u61EA");
  }, Error, "EncodingError U+61EA");
  assertThrows(() => {
    ms932Encoder.encode("\u61EB");
  }, Error, "EncodingError U+61EB");
  assertThrows(() => {
    ms932Encoder.encode("\u61EC");
  }, Error, "EncodingError U+61EC");
  assertThrows(() => {
    ms932Encoder.encode("\u61ED");
  }, Error, "EncodingError U+61ED");
  assertThrows(() => {
    ms932Encoder.encode("\u61EE");
  }, Error, "EncodingError U+61EE");
  assertThrows(() => {
    ms932Encoder.encode("\u61EF");
  }, Error, "EncodingError U+61EF");
  assertThrows(() => {
    ms932Encoder.encode("\u61F0");
  }, Error, "EncodingError U+61F0");
  assertThrows(() => {
    ms932Encoder.encode("\u61F1");
  }, Error, "EncodingError U+61F1");
  r = r && ([...ms932Encoder.encode("懲")].join(",") === "146,166"); // U+61F2
  assertThrows(() => {
    ms932Encoder.encode("\u61F3");
  }, Error, "EncodingError U+61F3");
  r = r && ([...ms932Encoder.encode("懴")].join(",") === "156,241"); // U+61F4
  assertThrows(() => {
    ms932Encoder.encode("\u61F5");
  }, Error, "EncodingError U+61F5");
  r = r &&
    ([...ms932Encoder.encode("懶懷懸")].join(",") === "156,239,156,229,140,156"); // U+61F6
  assertThrows(() => {
    ms932Encoder.encode("\u61F9");
  }, Error, "EncodingError U+61F9");
  r = r && ([...ms932Encoder.encode("懺")].join(",") === "156,240"); // U+61FA
  assertThrows(() => {
    ms932Encoder.encode("\u61FB");
  }, Error, "EncodingError U+61FB");
  r = r &&
    ([...ms932Encoder.encode("懼懽懾懿戀")].join(",") ===
      "156,244,156,243,156,245,156,242,156,246"); // U+61FC
  assertThrows(() => {
    ms932Encoder.encode("\u6201");
  }, Error, "EncodingError U+6201");
  assertThrows(() => {
    ms932Encoder.encode("\u6202");
  }, Error, "EncodingError U+6202");
  assertThrows(() => {
    ms932Encoder.encode("\u6203");
  }, Error, "EncodingError U+6203");
  assertThrows(() => {
    ms932Encoder.encode("\u6204");
  }, Error, "EncodingError U+6204");
  assertThrows(() => {
    ms932Encoder.encode("\u6205");
  }, Error, "EncodingError U+6205");
  assertThrows(() => {
    ms932Encoder.encode("\u6206");
  }, Error, "EncodingError U+6206");
  assertThrows(() => {
    ms932Encoder.encode("\u6207");
  }, Error, "EncodingError U+6207");
  r = r &&
    ([...ms932Encoder.encode("戈戉戊")].join(",") === "156,247,156,248,149,232"); // U+6208
  assertThrows(() => {
    ms932Encoder.encode("\u620B");
  }, Error, "EncodingError U+620B");
  r = r &&
    ([...ms932Encoder.encode("戌戍戎")].join(",") === "156,250,156,249,143,94"); // U+620C
  assertThrows(() => {
    ms932Encoder.encode("\u620F");
  }, Error, "EncodingError U+620F");
  r = r &&
    ([...ms932Encoder.encode("成我戒戓戔")].join(",") ===
      "144,172,137,228,137,250,250,199,156,251"); // U+6210
  assertThrows(() => {
    ms932Encoder.encode("\u6215");
  }, Error, "EncodingError U+6215");
  r = r && ([...ms932Encoder.encode("或")].join(",") === "136,189"); // U+6216
  assertThrows(() => {
    ms932Encoder.encode("\u6217");
  }, Error, "EncodingError U+6217");
  assertThrows(() => {
    ms932Encoder.encode("\u6218");
  }, Error, "EncodingError U+6218");
  assertThrows(() => {
    ms932Encoder.encode("\u6219");
  }, Error, "EncodingError U+6219");
  r = r && ([...ms932Encoder.encode("戚戛")].join(",") === "144,202,156,252"); // U+621A
  assertThrows(() => {
    ms932Encoder.encode("\u621C");
  }, Error, "EncodingError U+621C");
  r = r &&
    ([...ms932Encoder.encode("戝戞戟")].join(",") === "230,193,157,64,140,129"); // U+621D
  assertThrows(() => {
    ms932Encoder.encode("\u6220");
  }, Error, "EncodingError U+6220");
  r = r && ([...ms932Encoder.encode("戡")].join(",") === "157,65"); // U+6221
  assertThrows(() => {
    ms932Encoder.encode("\u6222");
  }, Error, "EncodingError U+6222");
  assertThrows(() => {
    ms932Encoder.encode("\u6223");
  }, Error, "EncodingError U+6223");
  assertThrows(() => {
    ms932Encoder.encode("\u6224");
  }, Error, "EncodingError U+6224");
  assertThrows(() => {
    ms932Encoder.encode("\u6225");
  }, Error, "EncodingError U+6225");
  r = r && ([...ms932Encoder.encode("戦")].join(",") === "144,237"); // U+6226
  assertThrows(() => {
    ms932Encoder.encode("\u6227");
  }, Error, "EncodingError U+6227");
  assertThrows(() => {
    ms932Encoder.encode("\u6228");
  }, Error, "EncodingError U+6228");
  assertThrows(() => {
    ms932Encoder.encode("\u6229");
  }, Error, "EncodingError U+6229");
  r = r && ([...ms932Encoder.encode("截")].join(",") === "157,66"); // U+622A
  assertThrows(() => {
    ms932Encoder.encode("\u622B");
  }, Error, "EncodingError U+622B");
  assertThrows(() => {
    ms932Encoder.encode("\u622C");
  }, Error, "EncodingError U+622C");
  assertThrows(() => {
    ms932Encoder.encode("\u622D");
  }, Error, "EncodingError U+622D");
  r = r &&
    ([...ms932Encoder.encode("戮戯戰")].join(",") === "157,67,139,89,157,68"); // U+622E
  assertThrows(() => {
    ms932Encoder.encode("\u6231");
  }, Error, "EncodingError U+6231");
  r = r &&
    ([...ms932Encoder.encode("戲戳戴")].join(",") === "157,69,157,70,145,213"); // U+6232
  assertThrows(() => {
    ms932Encoder.encode("\u6235");
  }, Error, "EncodingError U+6235");
  assertThrows(() => {
    ms932Encoder.encode("\u6236");
  }, Error, "EncodingError U+6236");
  assertThrows(() => {
    ms932Encoder.encode("\u6237");
  }, Error, "EncodingError U+6237");
  r = r && ([...ms932Encoder.encode("戸")].join(",") === "140,203"); // U+6238
  assertThrows(() => {
    ms932Encoder.encode("\u6239");
  }, Error, "EncodingError U+6239");
  assertThrows(() => {
    ms932Encoder.encode("\u623A");
  }, Error, "EncodingError U+623A");
  r = r && ([...ms932Encoder.encode("戻")].join(",") === "150,223"); // U+623B
  assertThrows(() => {
    ms932Encoder.encode("\u623C");
  }, Error, "EncodingError U+623C");
  assertThrows(() => {
    ms932Encoder.encode("\u623D");
  }, Error, "EncodingError U+623D");
  assertThrows(() => {
    ms932Encoder.encode("\u623E");
  }, Error, "EncodingError U+623E");
  r = r &&
    ([...ms932Encoder.encode("房所扁")].join(",") === "150,91,143,138,157,71"); // U+623F
  assertThrows(() => {
    ms932Encoder.encode("\u6242");
  }, Error, "EncodingError U+6242");
  assertThrows(() => {
    ms932Encoder.encode("\u6243");
  }, Error, "EncodingError U+6243");
  assertThrows(() => {
    ms932Encoder.encode("\u6244");
  }, Error, "EncodingError U+6244");
  assertThrows(() => {
    ms932Encoder.encode("\u6245");
  }, Error, "EncodingError U+6245");
  assertThrows(() => {
    ms932Encoder.encode("\u6246");
  }, Error, "EncodingError U+6246");
  r = r &&
    ([...ms932Encoder.encode("扇扈扉")].join(",") === "144,238,231,187,148,224"); // U+6247
  assertThrows(() => {
    ms932Encoder.encode("\u624A");
  }, Error, "EncodingError U+624A");
  r = r && ([...ms932Encoder.encode("手")].join(",") === "142,232"); // U+624B
  assertThrows(() => {
    ms932Encoder.encode("\u624C");
  }, Error, "EncodingError U+624C");
  r = r && ([...ms932Encoder.encode("才扎")].join(",") === "141,203,157,72"); // U+624D
  assertThrows(() => {
    ms932Encoder.encode("\u624F");
  }, Error, "EncodingError U+624F");
  assertThrows(() => {
    ms932Encoder.encode("\u6250");
  }, Error, "EncodingError U+6250");
  assertThrows(() => {
    ms932Encoder.encode("\u6251");
  }, Error, "EncodingError U+6251");
  assertThrows(() => {
    ms932Encoder.encode("\u6252");
  }, Error, "EncodingError U+6252");
  r = r && ([...ms932Encoder.encode("打")].join(",") === "145,197"); // U+6253
  assertThrows(() => {
    ms932Encoder.encode("\u6254");
  }, Error, "EncodingError U+6254");
  r = r && ([...ms932Encoder.encode("払")].join(",") === "149,165"); // U+6255
  assertThrows(() => {
    ms932Encoder.encode("\u6256");
  }, Error, "EncodingError U+6256");
  assertThrows(() => {
    ms932Encoder.encode("\u6257");
  }, Error, "EncodingError U+6257");
  r = r && ([...ms932Encoder.encode("托")].join(",") === "145,239"); // U+6258
  assertThrows(() => {
    ms932Encoder.encode("\u6259");
  }, Error, "EncodingError U+6259");
  assertThrows(() => {
    ms932Encoder.encode("\u625A");
  }, Error, "EncodingError U+625A");
  r = r && ([...ms932Encoder.encode("扛")].join(",") === "157,75"); // U+625B
  assertThrows(() => {
    ms932Encoder.encode("\u625C");
  }, Error, "EncodingError U+625C");
  assertThrows(() => {
    ms932Encoder.encode("\u625D");
  }, Error, "EncodingError U+625D");
  r = r && ([...ms932Encoder.encode("扞")].join(",") === "157,73"); // U+625E
  assertThrows(() => {
    ms932Encoder.encode("\u625F");
  }, Error, "EncodingError U+625F");
  r = r && ([...ms932Encoder.encode("扠")].join(",") === "157,76"); // U+6260
  assertThrows(() => {
    ms932Encoder.encode("\u6261");
  }, Error, "EncodingError U+6261");
  assertThrows(() => {
    ms932Encoder.encode("\u6262");
  }, Error, "EncodingError U+6262");
  r = r && ([...ms932Encoder.encode("扣")].join(",") === "157,74"); // U+6263
  assertThrows(() => {
    ms932Encoder.encode("\u6264");
  }, Error, "EncodingError U+6264");
  assertThrows(() => {
    ms932Encoder.encode("\u6265");
  }, Error, "EncodingError U+6265");
  assertThrows(() => {
    ms932Encoder.encode("\u6266");
  }, Error, "EncodingError U+6266");
  assertThrows(() => {
    ms932Encoder.encode("\u6267");
  }, Error, "EncodingError U+6267");
  r = r && ([...ms932Encoder.encode("扨")].join(",") === "157,77"); // U+6268
  assertThrows(() => {
    ms932Encoder.encode("\u6269");
  }, Error, "EncodingError U+6269");
  assertThrows(() => {
    ms932Encoder.encode("\u626A");
  }, Error, "EncodingError U+626A");
  assertThrows(() => {
    ms932Encoder.encode("\u626B");
  }, Error, "EncodingError U+626B");
  assertThrows(() => {
    ms932Encoder.encode("\u626C");
  }, Error, "EncodingError U+626C");
  assertThrows(() => {
    ms932Encoder.encode("\u626D");
  }, Error, "EncodingError U+626D");
  r = r && ([...ms932Encoder.encode("扮")].join(",") === "149,175"); // U+626E
  assertThrows(() => {
    ms932Encoder.encode("\u626F");
  }, Error, "EncodingError U+626F");
  assertThrows(() => {
    ms932Encoder.encode("\u6270");
  }, Error, "EncodingError U+6270");
  r = r && ([...ms932Encoder.encode("扱")].join(",") === "136,181"); // U+6271
  assertThrows(() => {
    ms932Encoder.encode("\u6272");
  }, Error, "EncodingError U+6272");
  assertThrows(() => {
    ms932Encoder.encode("\u6273");
  }, Error, "EncodingError U+6273");
  assertThrows(() => {
    ms932Encoder.encode("\u6274");
  }, Error, "EncodingError U+6274");
  assertThrows(() => {
    ms932Encoder.encode("\u6275");
  }, Error, "EncodingError U+6275");
  r = r && ([...ms932Encoder.encode("扶")].join(",") === "149,125"); // U+6276
  assertThrows(() => {
    ms932Encoder.encode("\u6277");
  }, Error, "EncodingError U+6277");
  assertThrows(() => {
    ms932Encoder.encode("\u6278");
  }, Error, "EncodingError U+6278");
  r = r && ([...ms932Encoder.encode("批")].join(",") === "148,225"); // U+6279
  assertThrows(() => {
    ms932Encoder.encode("\u627A");
  }, Error, "EncodingError U+627A");
  assertThrows(() => {
    ms932Encoder.encode("\u627B");
  }, Error, "EncodingError U+627B");
  r = r && ([...ms932Encoder.encode("扼")].join(",") === "157,78"); // U+627C
  assertThrows(() => {
    ms932Encoder.encode("\u627D");
  }, Error, "EncodingError U+627D");
  r = r &&
    ([...ms932Encoder.encode("找承技")].join(",") === "157,81,143,179,139,90"); // U+627E
  assertThrows(() => {
    ms932Encoder.encode("\u6281");
  }, Error, "EncodingError U+6281");
  r = r &&
    ([...ms932Encoder.encode("抂抃抄")].join(",") === "157,79,157,86,143,180"); // U+6282
  assertThrows(() => {
    ms932Encoder.encode("\u6285");
  }, Error, "EncodingError U+6285");
  assertThrows(() => {
    ms932Encoder.encode("\u6286");
  }, Error, "EncodingError U+6286");
  assertThrows(() => {
    ms932Encoder.encode("\u6287");
  }, Error, "EncodingError U+6287");
  assertThrows(() => {
    ms932Encoder.encode("\u6288");
  }, Error, "EncodingError U+6288");
  r = r && ([...ms932Encoder.encode("抉把")].join(",") === "157,80,148,99"); // U+6289
  assertThrows(() => {
    ms932Encoder.encode("\u628B");
  }, Error, "EncodingError U+628B");
  assertThrows(() => {
    ms932Encoder.encode("\u628C");
  }, Error, "EncodingError U+628C");
  assertThrows(() => {
    ms932Encoder.encode("\u628D");
  }, Error, "EncodingError U+628D");
  assertThrows(() => {
    ms932Encoder.encode("\u628E");
  }, Error, "EncodingError U+628E");
  assertThrows(() => {
    ms932Encoder.encode("\u628F");
  }, Error, "EncodingError U+628F");
  assertThrows(() => {
    ms932Encoder.encode("\u6290");
  }, Error, "EncodingError U+6290");
  r = r &&
    ([...ms932Encoder.encode("抑抒抓抔投抖抗折")].join(",") ===
      "151,125,157,82,157,83,157,87,147,138,157,84,141,82,144,220"); // U+6291
  assertThrows(() => {
    ms932Encoder.encode("\u6299");
  }, Error, "EncodingError U+6299");
  assertThrows(() => {
    ms932Encoder.encode("\u629A");
  }, Error, "EncodingError U+629A");
  r = r && ([...ms932Encoder.encode("抛抜")].join(",") === "157,101,148,178"); // U+629B
  assertThrows(() => {
    ms932Encoder.encode("\u629D");
  }, Error, "EncodingError U+629D");
  r = r && ([...ms932Encoder.encode("択")].join(",") === "145,240"); // U+629E
  assertThrows(() => {
    ms932Encoder.encode("\u629F");
  }, Error, "EncodingError U+629F");
  assertThrows(() => {
    ms932Encoder.encode("\u62A0");
  }, Error, "EncodingError U+62A0");
  assertThrows(() => {
    ms932Encoder.encode("\u62A1");
  }, Error, "EncodingError U+62A1");
  assertThrows(() => {
    ms932Encoder.encode("\u62A2");
  }, Error, "EncodingError U+62A2");
  assertThrows(() => {
    ms932Encoder.encode("\u62A3");
  }, Error, "EncodingError U+62A3");
  assertThrows(() => {
    ms932Encoder.encode("\u62A4");
  }, Error, "EncodingError U+62A4");
  assertThrows(() => {
    ms932Encoder.encode("\u62A5");
  }, Error, "EncodingError U+62A5");
  r = r && ([...ms932Encoder.encode("抦")].join(",") === "250,200"); // U+62A6
  assertThrows(() => {
    ms932Encoder.encode("\u62A7");
  }, Error, "EncodingError U+62A7");
  assertThrows(() => {
    ms932Encoder.encode("\u62A8");
  }, Error, "EncodingError U+62A8");
  assertThrows(() => {
    ms932Encoder.encode("\u62A9");
  }, Error, "EncodingError U+62A9");
  assertThrows(() => {
    ms932Encoder.encode("\u62AA");
  }, Error, "EncodingError U+62AA");
  r = r && ([...ms932Encoder.encode("披抬")].join(",") === "148,226,157,171"); // U+62AB
  assertThrows(() => {
    ms932Encoder.encode("\u62AD");
  }, Error, "EncodingError U+62AD");
  assertThrows(() => {
    ms932Encoder.encode("\u62AE");
  }, Error, "EncodingError U+62AE");
  assertThrows(() => {
    ms932Encoder.encode("\u62AF");
  }, Error, "EncodingError U+62AF");
  assertThrows(() => {
    ms932Encoder.encode("\u62B0");
  }, Error, "EncodingError U+62B0");
  r = r && ([...ms932Encoder.encode("抱")].join(",") === "149,248"); // U+62B1
  assertThrows(() => {
    ms932Encoder.encode("\u62B2");
  }, Error, "EncodingError U+62B2");
  assertThrows(() => {
    ms932Encoder.encode("\u62B3");
  }, Error, "EncodingError U+62B3");
  assertThrows(() => {
    ms932Encoder.encode("\u62B4");
  }, Error, "EncodingError U+62B4");
  r = r && ([...ms932Encoder.encode("抵")].join(",") === "146,239"); // U+62B5
  assertThrows(() => {
    ms932Encoder.encode("\u62B6");
  }, Error, "EncodingError U+62B6");
  assertThrows(() => {
    ms932Encoder.encode("\u62B7");
  }, Error, "EncodingError U+62B7");
  assertThrows(() => {
    ms932Encoder.encode("\u62B8");
  }, Error, "EncodingError U+62B8");
  r = r && ([...ms932Encoder.encode("抹")].join(",") === "150,149"); // U+62B9
  assertThrows(() => {
    ms932Encoder.encode("\u62BA");
  }, Error, "EncodingError U+62BA");
  r = r &&
    ([...ms932Encoder.encode("抻押抽")].join(",") === "157,90,137,159,146,138"); // U+62BB
  assertThrows(() => {
    ms932Encoder.encode("\u62BE");
  }, Error, "EncodingError U+62BE");
  assertThrows(() => {
    ms932Encoder.encode("\u62BF");
  }, Error, "EncodingError U+62BF");
  assertThrows(() => {
    ms932Encoder.encode("\u62C0");
  }, Error, "EncodingError U+62C0");
  assertThrows(() => {
    ms932Encoder.encode("\u62C1");
  }, Error, "EncodingError U+62C1");
  r = r && ([...ms932Encoder.encode("拂")].join(",") === "157,99"); // U+62C2
  assertThrows(() => {
    ms932Encoder.encode("\u62C3");
  }, Error, "EncodingError U+62C3");
  assertThrows(() => {
    ms932Encoder.encode("\u62C4");
  }, Error, "EncodingError U+62C4");
  r = r &&
    ([...ms932Encoder.encode("担拆拇拈拉拊")].join(",") ===
      "146,83,157,93,157,100,157,95,157,102,157,98"); // U+62C5
  assertThrows(() => {
    ms932Encoder.encode("\u62CB");
  }, Error, "EncodingError U+62CB");
  r = r && ([...ms932Encoder.encode("拌拍")].join(",") === "157,97,148,143"); // U+62CC
  assertThrows(() => {
    ms932Encoder.encode("\u62CE");
  }, Error, "EncodingError U+62CE");
  r = r &&
    ([...ms932Encoder.encode("拏拐拑拒拓拔")].join(",") ===
      "157,91,137,251,157,89,139,145,145,241,157,85"); // U+62CF
  assertThrows(() => {
    ms932Encoder.encode("\u62D5");
  }, Error, "EncodingError U+62D5");
  assertThrows(() => {
    ms932Encoder.encode("\u62D6");
  }, Error, "EncodingError U+62D6");
  r = r &&
    ([...ms932Encoder.encode("拗拘拙")].join(",") === "157,88,141,83,144,217"); // U+62D7
  assertThrows(() => {
    ms932Encoder.encode("\u62DA");
  }, Error, "EncodingError U+62DA");
  r = r &&
    ([...ms932Encoder.encode("招拜拝")].join(",") === "143,181,157,96,148,113"); // U+62DB
  assertThrows(() => {
    ms932Encoder.encode("\u62DE");
  }, Error, "EncodingError U+62DE");
  assertThrows(() => {
    ms932Encoder.encode("\u62DF");
  }, Error, "EncodingError U+62DF");
  r = r && ([...ms932Encoder.encode("拠拡")].join(",") === "139,146,138,103"); // U+62E0
  assertThrows(() => {
    ms932Encoder.encode("\u62E2");
  }, Error, "EncodingError U+62E2");
  assertThrows(() => {
    ms932Encoder.encode("\u62E3");
  }, Error, "EncodingError U+62E3");
  assertThrows(() => {
    ms932Encoder.encode("\u62E4");
  }, Error, "EncodingError U+62E4");
  assertThrows(() => {
    ms932Encoder.encode("\u62E5");
  }, Error, "EncodingError U+62E5");
  assertThrows(() => {
    ms932Encoder.encode("\u62E6");
  }, Error, "EncodingError U+62E6");
  assertThrows(() => {
    ms932Encoder.encode("\u62E7");
  }, Error, "EncodingError U+62E7");
  assertThrows(() => {
    ms932Encoder.encode("\u62E8");
  }, Error, "EncodingError U+62E8");
  assertThrows(() => {
    ms932Encoder.encode("\u62E9");
  }, Error, "EncodingError U+62E9");
  assertThrows(() => {
    ms932Encoder.encode("\u62EA");
  }, Error, "EncodingError U+62EA");
  assertThrows(() => {
    ms932Encoder.encode("\u62EB");
  }, Error, "EncodingError U+62EB");
  r = r &&
    ([...ms932Encoder.encode("括拭拮拯")].join(",") ===
      "138,135,144,64,157,104,157,109"); // U+62EC
  assertThrows(() => {
    ms932Encoder.encode("\u62F0");
  }, Error, "EncodingError U+62F0");
  r = r && ([...ms932Encoder.encode("拱")].join(",") === "157,105"); // U+62F1
  assertThrows(() => {
    ms932Encoder.encode("\u62F2");
  }, Error, "EncodingError U+62F2");
  r = r && ([...ms932Encoder.encode("拳")].join(",") === "140,157"); // U+62F3
  assertThrows(() => {
    ms932Encoder.encode("\u62F4");
  }, Error, "EncodingError U+62F4");
  r = r &&
    ([...ms932Encoder.encode("拵拶拷")].join(",") === "157,110,142,65,141,137"); // U+62F5
  assertThrows(() => {
    ms932Encoder.encode("\u62F8");
  }, Error, "EncodingError U+62F8");
  assertThrows(() => {
    ms932Encoder.encode("\u62F9");
  }, Error, "EncodingError U+62F9");
  assertThrows(() => {
    ms932Encoder.encode("\u62FA");
  }, Error, "EncodingError U+62FA");
  assertThrows(() => {
    ms932Encoder.encode("\u62FB");
  }, Error, "EncodingError U+62FB");
  assertThrows(() => {
    ms932Encoder.encode("\u62FC");
  }, Error, "EncodingError U+62FC");
  assertThrows(() => {
    ms932Encoder.encode("\u62FD");
  }, Error, "EncodingError U+62FD");
  r = r && ([...ms932Encoder.encode("拾拿")].join(",") === "143,69,157,92"); // U+62FE
  assertThrows(() => {
    ms932Encoder.encode("\u6300");
  }, Error, "EncodingError U+6300");
  r = r && ([...ms932Encoder.encode("持挂")].join(",") === "142,157,157,107"); // U+6301
  assertThrows(() => {
    ms932Encoder.encode("\u6303");
  }, Error, "EncodingError U+6303");
  assertThrows(() => {
    ms932Encoder.encode("\u6304");
  }, Error, "EncodingError U+6304");
  assertThrows(() => {
    ms932Encoder.encode("\u6305");
  }, Error, "EncodingError U+6305");
  assertThrows(() => {
    ms932Encoder.encode("\u6306");
  }, Error, "EncodingError U+6306");
  r = r &&
    ([...ms932Encoder.encode("指挈按")].join(",") === "142,119,157,108,136,194"); // U+6307
  assertThrows(() => {
    ms932Encoder.encode("\u630A");
  }, Error, "EncodingError U+630A");
  assertThrows(() => {
    ms932Encoder.encode("\u630B");
  }, Error, "EncodingError U+630B");
  r = r && ([...ms932Encoder.encode("挌")].join(",") === "157,103"); // U+630C
  assertThrows(() => {
    ms932Encoder.encode("\u630D");
  }, Error, "EncodingError U+630D");
  assertThrows(() => {
    ms932Encoder.encode("\u630E");
  }, Error, "EncodingError U+630E");
  assertThrows(() => {
    ms932Encoder.encode("\u630F");
  }, Error, "EncodingError U+630F");
  assertThrows(() => {
    ms932Encoder.encode("\u6310");
  }, Error, "EncodingError U+6310");
  r = r && ([...ms932Encoder.encode("挑")].join(",") === "146,167"); // U+6311
  assertThrows(() => {
    ms932Encoder.encode("\u6312");
  }, Error, "EncodingError U+6312");
  assertThrows(() => {
    ms932Encoder.encode("\u6313");
  }, Error, "EncodingError U+6313");
  assertThrows(() => {
    ms932Encoder.encode("\u6314");
  }, Error, "EncodingError U+6314");
  assertThrows(() => {
    ms932Encoder.encode("\u6315");
  }, Error, "EncodingError U+6315");
  assertThrows(() => {
    ms932Encoder.encode("\u6316");
  }, Error, "EncodingError U+6316");
  assertThrows(() => {
    ms932Encoder.encode("\u6317");
  }, Error, "EncodingError U+6317");
  assertThrows(() => {
    ms932Encoder.encode("\u6318");
  }, Error, "EncodingError U+6318");
  r = r && ([...ms932Encoder.encode("挙")].join(",") === "139,147"); // U+6319
  assertThrows(() => {
    ms932Encoder.encode("\u631A");
  }, Error, "EncodingError U+631A");
  assertThrows(() => {
    ms932Encoder.encode("\u631B");
  }, Error, "EncodingError U+631B");
  assertThrows(() => {
    ms932Encoder.encode("\u631C");
  }, Error, "EncodingError U+631C");
  assertThrows(() => {
    ms932Encoder.encode("\u631D");
  }, Error, "EncodingError U+631D");
  assertThrows(() => {
    ms932Encoder.encode("\u631E");
  }, Error, "EncodingError U+631E");
  r = r && ([...ms932Encoder.encode("挟")].join(",") === "139,178"); // U+631F
  assertThrows(() => {
    ms932Encoder.encode("\u6320");
  }, Error, "EncodingError U+6320");
  assertThrows(() => {
    ms932Encoder.encode("\u6321");
  }, Error, "EncodingError U+6321");
  assertThrows(() => {
    ms932Encoder.encode("\u6322");
  }, Error, "EncodingError U+6322");
  assertThrows(() => {
    ms932Encoder.encode("\u6323");
  }, Error, "EncodingError U+6323");
  assertThrows(() => {
    ms932Encoder.encode("\u6324");
  }, Error, "EncodingError U+6324");
  assertThrows(() => {
    ms932Encoder.encode("\u6325");
  }, Error, "EncodingError U+6325");
  assertThrows(() => {
    ms932Encoder.encode("\u6326");
  }, Error, "EncodingError U+6326");
  r = r && ([...ms932Encoder.encode("挧挨")].join(",") === "157,106,136,165"); // U+6327
  assertThrows(() => {
    ms932Encoder.encode("\u6329");
  }, Error, "EncodingError U+6329");
  assertThrows(() => {
    ms932Encoder.encode("\u632A");
  }, Error, "EncodingError U+632A");
  r = r && ([...ms932Encoder.encode("挫")].join(",") === "141,193"); // U+632B
  assertThrows(() => {
    ms932Encoder.encode("\u632C");
  }, Error, "EncodingError U+632C");
  assertThrows(() => {
    ms932Encoder.encode("\u632D");
  }, Error, "EncodingError U+632D");
  assertThrows(() => {
    ms932Encoder.encode("\u632E");
  }, Error, "EncodingError U+632E");
  r = r && ([...ms932Encoder.encode("振")].join(",") === "144,85"); // U+632F
  assertThrows(() => {
    ms932Encoder.encode("\u6330");
  }, Error, "EncodingError U+6330");
  assertThrows(() => {
    ms932Encoder.encode("\u6331");
  }, Error, "EncodingError U+6331");
  assertThrows(() => {
    ms932Encoder.encode("\u6332");
  }, Error, "EncodingError U+6332");
  assertThrows(() => {
    ms932Encoder.encode("\u6333");
  }, Error, "EncodingError U+6333");
  assertThrows(() => {
    ms932Encoder.encode("\u6334");
  }, Error, "EncodingError U+6334");
  assertThrows(() => {
    ms932Encoder.encode("\u6335");
  }, Error, "EncodingError U+6335");
  assertThrows(() => {
    ms932Encoder.encode("\u6336");
  }, Error, "EncodingError U+6336");
  assertThrows(() => {
    ms932Encoder.encode("\u6337");
  }, Error, "EncodingError U+6337");
  assertThrows(() => {
    ms932Encoder.encode("\u6338");
  }, Error, "EncodingError U+6338");
  assertThrows(() => {
    ms932Encoder.encode("\u6339");
  }, Error, "EncodingError U+6339");
  r = r && ([...ms932Encoder.encode("挺")].join(",") === "146,240"); // U+633A
  assertThrows(() => {
    ms932Encoder.encode("\u633B");
  }, Error, "EncodingError U+633B");
  assertThrows(() => {
    ms932Encoder.encode("\u633C");
  }, Error, "EncodingError U+633C");
  r = r &&
    ([...ms932Encoder.encode("挽挾挿")].join(",") === "148,210,157,112,145,125"); // U+633D
  assertThrows(() => {
    ms932Encoder.encode("\u6340");
  }, Error, "EncodingError U+6340");
  assertThrows(() => {
    ms932Encoder.encode("\u6341");
  }, Error, "EncodingError U+6341");
  assertThrows(() => {
    ms932Encoder.encode("\u6342");
  }, Error, "EncodingError U+6342");
  assertThrows(() => {
    ms932Encoder.encode("\u6343");
  }, Error, "EncodingError U+6343");
  assertThrows(() => {
    ms932Encoder.encode("\u6344");
  }, Error, "EncodingError U+6344");
  assertThrows(() => {
    ms932Encoder.encode("\u6345");
  }, Error, "EncodingError U+6345");
  assertThrows(() => {
    ms932Encoder.encode("\u6346");
  }, Error, "EncodingError U+6346");
  assertThrows(() => {
    ms932Encoder.encode("\u6347");
  }, Error, "EncodingError U+6347");
  assertThrows(() => {
    ms932Encoder.encode("\u6348");
  }, Error, "EncodingError U+6348");
  r = r && ([...ms932Encoder.encode("捉")].join(",") === "145,168"); // U+6349
  assertThrows(() => {
    ms932Encoder.encode("\u634A");
  }, Error, "EncodingError U+634A");
  assertThrows(() => {
    ms932Encoder.encode("\u634B");
  }, Error, "EncodingError U+634B");
  r = r && ([...ms932Encoder.encode("捌捍")].join(",") === "142,74,157,113"); // U+634C
  assertThrows(() => {
    ms932Encoder.encode("\u634E");
  }, Error, "EncodingError U+634E");
  r = r && ([...ms932Encoder.encode("捏捐")].join(",") === "157,115,157,111"); // U+634F
  assertThrows(() => {
    ms932Encoder.encode("\u6351");
  }, Error, "EncodingError U+6351");
  assertThrows(() => {
    ms932Encoder.encode("\u6352");
  }, Error, "EncodingError U+6352");
  assertThrows(() => {
    ms932Encoder.encode("\u6353");
  }, Error, "EncodingError U+6353");
  assertThrows(() => {
    ms932Encoder.encode("\u6354");
  }, Error, "EncodingError U+6354");
  r = r && ([...ms932Encoder.encode("捕")].join(",") === "149,223"); // U+6355
  assertThrows(() => {
    ms932Encoder.encode("\u6356");
  }, Error, "EncodingError U+6356");
  r = r && ([...ms932Encoder.encode("捗")].join(",") === "146,187"); // U+6357
  assertThrows(() => {
    ms932Encoder.encode("\u6358");
  }, Error, "EncodingError U+6358");
  assertThrows(() => {
    ms932Encoder.encode("\u6359");
  }, Error, "EncodingError U+6359");
  assertThrows(() => {
    ms932Encoder.encode("\u635A");
  }, Error, "EncodingError U+635A");
  assertThrows(() => {
    ms932Encoder.encode("\u635B");
  }, Error, "EncodingError U+635B");
  r = r && ([...ms932Encoder.encode("捜")].join(",") === "145,123"); // U+635C
  assertThrows(() => {
    ms932Encoder.encode("\u635D");
  }, Error, "EncodingError U+635D");
  assertThrows(() => {
    ms932Encoder.encode("\u635E");
  }, Error, "EncodingError U+635E");
  assertThrows(() => {
    ms932Encoder.encode("\u635F");
  }, Error, "EncodingError U+635F");
  assertThrows(() => {
    ms932Encoder.encode("\u6360");
  }, Error, "EncodingError U+6360");
  assertThrows(() => {
    ms932Encoder.encode("\u6361");
  }, Error, "EncodingError U+6361");
  assertThrows(() => {
    ms932Encoder.encode("\u6362");
  }, Error, "EncodingError U+6362");
  assertThrows(() => {
    ms932Encoder.encode("\u6363");
  }, Error, "EncodingError U+6363");
  assertThrows(() => {
    ms932Encoder.encode("\u6364");
  }, Error, "EncodingError U+6364");
  assertThrows(() => {
    ms932Encoder.encode("\u6365");
  }, Error, "EncodingError U+6365");
  assertThrows(() => {
    ms932Encoder.encode("\u6366");
  }, Error, "EncodingError U+6366");
  r = r &&
    ([...ms932Encoder.encode("捧捨捩")].join(",") === "149,249,142,204,157,128"); // U+6367
  assertThrows(() => {
    ms932Encoder.encode("\u636A");
  }, Error, "EncodingError U+636A");
  r = r && ([...ms932Encoder.encode("捫")].join(",") === "157,126"); // U+636B
  assertThrows(() => {
    ms932Encoder.encode("\u636C");
  }, Error, "EncodingError U+636C");
  assertThrows(() => {
    ms932Encoder.encode("\u636D");
  }, Error, "EncodingError U+636D");
  r = r && ([...ms932Encoder.encode("据")].join(",") === "144,152"); // U+636E
  assertThrows(() => {
    ms932Encoder.encode("\u636F");
  }, Error, "EncodingError U+636F");
  assertThrows(() => {
    ms932Encoder.encode("\u6370");
  }, Error, "EncodingError U+6370");
  assertThrows(() => {
    ms932Encoder.encode("\u6371");
  }, Error, "EncodingError U+6371");
  r = r && ([...ms932Encoder.encode("捲")].join(",") === "140,158"); // U+6372
  assertThrows(() => {
    ms932Encoder.encode("\u6373");
  }, Error, "EncodingError U+6373");
  assertThrows(() => {
    ms932Encoder.encode("\u6374");
  }, Error, "EncodingError U+6374");
  assertThrows(() => {
    ms932Encoder.encode("\u6375");
  }, Error, "EncodingError U+6375");
  r = r && ([...ms932Encoder.encode("捶捷")].join(",") === "157,120,143,183"); // U+6376
  assertThrows(() => {
    ms932Encoder.encode("\u6378");
  }, Error, "EncodingError U+6378");
  assertThrows(() => {
    ms932Encoder.encode("\u6379");
  }, Error, "EncodingError U+6379");
  r = r && ([...ms932Encoder.encode("捺捻")].join(",") === "147,230,148,80"); // U+637A
  assertThrows(() => {
    ms932Encoder.encode("\u637C");
  }, Error, "EncodingError U+637C");
  assertThrows(() => {
    ms932Encoder.encode("\u637D");
  }, Error, "EncodingError U+637D");
  assertThrows(() => {
    ms932Encoder.encode("\u637E");
  }, Error, "EncodingError U+637E");
  assertThrows(() => {
    ms932Encoder.encode("\u637F");
  }, Error, "EncodingError U+637F");
  r = r && ([...ms932Encoder.encode("掀")].join(",") === "157,118"); // U+6380
  assertThrows(() => {
    ms932Encoder.encode("\u6381");
  }, Error, "EncodingError U+6381");
  assertThrows(() => {
    ms932Encoder.encode("\u6382");
  }, Error, "EncodingError U+6382");
  r = r && ([...ms932Encoder.encode("掃")].join(",") === "145,124"); // U+6383
  assertThrows(() => {
    ms932Encoder.encode("\u6384");
  }, Error, "EncodingError U+6384");
  assertThrows(() => {
    ms932Encoder.encode("\u6385");
  }, Error, "EncodingError U+6385");
  assertThrows(() => {
    ms932Encoder.encode("\u6386");
  }, Error, "EncodingError U+6386");
  assertThrows(() => {
    ms932Encoder.encode("\u6387");
  }, Error, "EncodingError U+6387");
  r = r && ([...ms932Encoder.encode("授掉")].join(",") === "142,246,157,123"); // U+6388
  assertThrows(() => {
    ms932Encoder.encode("\u638A");
  }, Error, "EncodingError U+638A");
  assertThrows(() => {
    ms932Encoder.encode("\u638B");
  }, Error, "EncodingError U+638B");
  r = r && ([...ms932Encoder.encode("掌")].join(",") === "143,182"); // U+638C
  assertThrows(() => {
    ms932Encoder.encode("\u638D");
  }, Error, "EncodingError U+638D");
  r = r && ([...ms932Encoder.encode("掎掏")].join(",") === "157,117,157,122"); // U+638E
  assertThrows(() => {
    ms932Encoder.encode("\u6390");
  }, Error, "EncodingError U+6390");
  assertThrows(() => {
    ms932Encoder.encode("\u6391");
  }, Error, "EncodingError U+6391");
  r = r && ([...ms932Encoder.encode("排")].join(",") === "148,114"); // U+6392
  assertThrows(() => {
    ms932Encoder.encode("\u6393");
  }, Error, "EncodingError U+6393");
  assertThrows(() => {
    ms932Encoder.encode("\u6394");
  }, Error, "EncodingError U+6394");
  assertThrows(() => {
    ms932Encoder.encode("\u6395");
  }, Error, "EncodingError U+6395");
  r = r && ([...ms932Encoder.encode("掖")].join(",") === "157,116"); // U+6396
  assertThrows(() => {
    ms932Encoder.encode("\u6397");
  }, Error, "EncodingError U+6397");
  r = r && ([...ms932Encoder.encode("掘")].join(",") === "140,64"); // U+6398
  assertThrows(() => {
    ms932Encoder.encode("\u6399");
  }, Error, "EncodingError U+6399");
  assertThrows(() => {
    ms932Encoder.encode("\u639A");
  }, Error, "EncodingError U+639A");
  r = r && ([...ms932Encoder.encode("掛")].join(",") === "138,124"); // U+639B
  assertThrows(() => {
    ms932Encoder.encode("\u639C");
  }, Error, "EncodingError U+639C");
  assertThrows(() => {
    ms932Encoder.encode("\u639D");
  }, Error, "EncodingError U+639D");
  assertThrows(() => {
    ms932Encoder.encode("\u639E");
  }, Error, "EncodingError U+639E");
  r = r &&
    ([...ms932Encoder.encode("掟掠採探掣")].join(",") ===
      "157,124,151,169,141,204,146,84,157,121"); // U+639F
  assertThrows(() => {
    ms932Encoder.encode("\u63A4");
  }, Error, "EncodingError U+63A4");
  r = r && ([...ms932Encoder.encode("接")].join(",") === "144,218"); // U+63A5
  assertThrows(() => {
    ms932Encoder.encode("\u63A6");
  }, Error, "EncodingError U+63A6");
  r = r &&
    ([...ms932Encoder.encode("控推掩措掫掬")].join(",") ===
      "141,84,144,132,137,134,145,91,157,119,139,100"); // U+63A7
  assertThrows(() => {
    ms932Encoder.encode("\u63AD");
  }, Error, "EncodingError U+63AD");
  assertThrows(() => {
    ms932Encoder.encode("\u63AE");
  }, Error, "EncodingError U+63AE");
  assertThrows(() => {
    ms932Encoder.encode("\u63AF");
  }, Error, "EncodingError U+63AF");
  assertThrows(() => {
    ms932Encoder.encode("\u63B0");
  }, Error, "EncodingError U+63B0");
  assertThrows(() => {
    ms932Encoder.encode("\u63B1");
  }, Error, "EncodingError U+63B1");
  r = r && ([...ms932Encoder.encode("掲")].join(",") === "140,102"); // U+63B2
  assertThrows(() => {
    ms932Encoder.encode("\u63B3");
  }, Error, "EncodingError U+63B3");
  r = r && ([...ms932Encoder.encode("掴掵")].join(",") === "146,205,157,125"); // U+63B4
  assertThrows(() => {
    ms932Encoder.encode("\u63B6");
  }, Error, "EncodingError U+63B6");
  assertThrows(() => {
    ms932Encoder.encode("\u63B7");
  }, Error, "EncodingError U+63B7");
  assertThrows(() => {
    ms932Encoder.encode("\u63B8");
  }, Error, "EncodingError U+63B8");
  assertThrows(() => {
    ms932Encoder.encode("\u63B9");
  }, Error, "EncodingError U+63B9");
  assertThrows(() => {
    ms932Encoder.encode("\u63BA");
  }, Error, "EncodingError U+63BA");
  r = r && ([...ms932Encoder.encode("掻")].join(",") === "145,126"); // U+63BB
  assertThrows(() => {
    ms932Encoder.encode("\u63BC");
  }, Error, "EncodingError U+63BC");
  assertThrows(() => {
    ms932Encoder.encode("\u63BD");
  }, Error, "EncodingError U+63BD");
  r = r && ([...ms932Encoder.encode("掾")].join(",") === "157,129"); // U+63BE
  assertThrows(() => {
    ms932Encoder.encode("\u63BF");
  }, Error, "EncodingError U+63BF");
  r = r && ([...ms932Encoder.encode("揀")].join(",") === "157,131"); // U+63C0
  assertThrows(() => {
    ms932Encoder.encode("\u63C1");
  }, Error, "EncodingError U+63C1");
  assertThrows(() => {
    ms932Encoder.encode("\u63C2");
  }, Error, "EncodingError U+63C2");
  r = r && ([...ms932Encoder.encode("揃揄")].join(",") === "145,181,157,137"); // U+63C3
  assertThrows(() => {
    ms932Encoder.encode("\u63C5");
  }, Error, "EncodingError U+63C5");
  r = r && ([...ms932Encoder.encode("揆")].join(",") === "157,132"); // U+63C6
  assertThrows(() => {
    ms932Encoder.encode("\u63C7");
  }, Error, "EncodingError U+63C7");
  assertThrows(() => {
    ms932Encoder.encode("\u63C8");
  }, Error, "EncodingError U+63C8");
  r = r && ([...ms932Encoder.encode("揉")].join(",") === "157,134"); // U+63C9
  assertThrows(() => {
    ms932Encoder.encode("\u63CA");
  }, Error, "EncodingError U+63CA");
  assertThrows(() => {
    ms932Encoder.encode("\u63CB");
  }, Error, "EncodingError U+63CB");
  assertThrows(() => {
    ms932Encoder.encode("\u63CC");
  }, Error, "EncodingError U+63CC");
  assertThrows(() => {
    ms932Encoder.encode("\u63CD");
  }, Error, "EncodingError U+63CD");
  assertThrows(() => {
    ms932Encoder.encode("\u63CE");
  }, Error, "EncodingError U+63CE");
  r = r && ([...ms932Encoder.encode("描提")].join(",") === "149,96,146,241"); // U+63CF
  assertThrows(() => {
    ms932Encoder.encode("\u63D1");
  }, Error, "EncodingError U+63D1");
  r = r && ([...ms932Encoder.encode("插")].join(",") === "157,135"); // U+63D2
  assertThrows(() => {
    ms932Encoder.encode("\u63D3");
  }, Error, "EncodingError U+63D3");
  assertThrows(() => {
    ms932Encoder.encode("\u63D4");
  }, Error, "EncodingError U+63D4");
  assertThrows(() => {
    ms932Encoder.encode("\u63D5");
  }, Error, "EncodingError U+63D5");
  r = r && ([...ms932Encoder.encode("揖")].join(",") === "151,75"); // U+63D6
  assertThrows(() => {
    ms932Encoder.encode("\u63D7");
  }, Error, "EncodingError U+63D7");
  assertThrows(() => {
    ms932Encoder.encode("\u63D8");
  }, Error, "EncodingError U+63D8");
  assertThrows(() => {
    ms932Encoder.encode("\u63D9");
  }, Error, "EncodingError U+63D9");
  r = r && ([...ms932Encoder.encode("揚換")].join(",") === "151,103,138,183"); // U+63DA
  assertThrows(() => {
    ms932Encoder.encode("\u63DC");
  }, Error, "EncodingError U+63DC");
  assertThrows(() => {
    ms932Encoder.encode("\u63DD");
  }, Error, "EncodingError U+63DD");
  assertThrows(() => {
    ms932Encoder.encode("\u63DE");
  }, Error, "EncodingError U+63DE");
  assertThrows(() => {
    ms932Encoder.encode("\u63DF");
  }, Error, "EncodingError U+63DF");
  assertThrows(() => {
    ms932Encoder.encode("\u63E0");
  }, Error, "EncodingError U+63E0");
  r = r && ([...ms932Encoder.encode("握")].join(",") === "136,172"); // U+63E1
  assertThrows(() => {
    ms932Encoder.encode("\u63E2");
  }, Error, "EncodingError U+63E2");
  r = r && ([...ms932Encoder.encode("揣")].join(",") === "157,133"); // U+63E3
  assertThrows(() => {
    ms932Encoder.encode("\u63E4");
  }, Error, "EncodingError U+63E4");
  assertThrows(() => {
    ms932Encoder.encode("\u63E5");
  }, Error, "EncodingError U+63E5");
  assertThrows(() => {
    ms932Encoder.encode("\u63E6");
  }, Error, "EncodingError U+63E6");
  assertThrows(() => {
    ms932Encoder.encode("\u63E7");
  }, Error, "EncodingError U+63E7");
  assertThrows(() => {
    ms932Encoder.encode("\u63E8");
  }, Error, "EncodingError U+63E8");
  r = r && ([...ms932Encoder.encode("揩")].join(",") === "157,130"); // U+63E9
  assertThrows(() => {
    ms932Encoder.encode("\u63EA");
  }, Error, "EncodingError U+63EA");
  assertThrows(() => {
    ms932Encoder.encode("\u63EB");
  }, Error, "EncodingError U+63EB");
  assertThrows(() => {
    ms932Encoder.encode("\u63EC");
  }, Error, "EncodingError U+63EC");
  assertThrows(() => {
    ms932Encoder.encode("\u63ED");
  }, Error, "EncodingError U+63ED");
  r = r && ([...ms932Encoder.encode("揮")].join(",") === "138,246"); // U+63EE
  assertThrows(() => {
    ms932Encoder.encode("\u63EF");
  }, Error, "EncodingError U+63EF");
  assertThrows(() => {
    ms932Encoder.encode("\u63F0");
  }, Error, "EncodingError U+63F0");
  assertThrows(() => {
    ms932Encoder.encode("\u63F1");
  }, Error, "EncodingError U+63F1");
  assertThrows(() => {
    ms932Encoder.encode("\u63F2");
  }, Error, "EncodingError U+63F2");
  assertThrows(() => {
    ms932Encoder.encode("\u63F3");
  }, Error, "EncodingError U+63F3");
  r = r &&
    ([...ms932Encoder.encode("援揵揶")].join(",") === "137,135,250,201,157,136"); // U+63F4
  assertThrows(() => {
    ms932Encoder.encode("\u63F7");
  }, Error, "EncodingError U+63F7");
  assertThrows(() => {
    ms932Encoder.encode("\u63F8");
  }, Error, "EncodingError U+63F8");
  assertThrows(() => {
    ms932Encoder.encode("\u63F9");
  }, Error, "EncodingError U+63F9");
  r = r && ([...ms932Encoder.encode("揺")].join(",") === "151,104"); // U+63FA
  assertThrows(() => {
    ms932Encoder.encode("\u63FB");
  }, Error, "EncodingError U+63FB");
  assertThrows(() => {
    ms932Encoder.encode("\u63FC");
  }, Error, "EncodingError U+63FC");
  assertThrows(() => {
    ms932Encoder.encode("\u63FD");
  }, Error, "EncodingError U+63FD");
  assertThrows(() => {
    ms932Encoder.encode("\u63FE");
  }, Error, "EncodingError U+63FE");
  assertThrows(() => {
    ms932Encoder.encode("\u63FF");
  }, Error, "EncodingError U+63FF");

  assertStrictEquals(r, true);

});
