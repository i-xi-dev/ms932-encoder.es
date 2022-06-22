import { assertThrows } from "std/testing/asserts";
import { Ms932 } from "../src/ms932.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+E000-U+EFFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  assertThrows(() => {
    ms932Encoder.encode("\uE000");
  }, Error, "EncodingError U+E000");
  assertThrows(() => {
    ms932Encoder.encode("\uE001");
  }, Error, "EncodingError U+E001");
  assertThrows(() => {
    ms932Encoder.encode("\uE002");
  }, Error, "EncodingError U+E002");
  assertThrows(() => {
    ms932Encoder.encode("\uE003");
  }, Error, "EncodingError U+E003");
  assertThrows(() => {
    ms932Encoder.encode("\uE004");
  }, Error, "EncodingError U+E004");
  assertThrows(() => {
    ms932Encoder.encode("\uE005");
  }, Error, "EncodingError U+E005");
  assertThrows(() => {
    ms932Encoder.encode("\uE006");
  }, Error, "EncodingError U+E006");
  assertThrows(() => {
    ms932Encoder.encode("\uE007");
  }, Error, "EncodingError U+E007");
  assertThrows(() => {
    ms932Encoder.encode("\uE008");
  }, Error, "EncodingError U+E008");
  assertThrows(() => {
    ms932Encoder.encode("\uE009");
  }, Error, "EncodingError U+E009");
  assertThrows(() => {
    ms932Encoder.encode("\uE00A");
  }, Error, "EncodingError U+E00A");
  assertThrows(() => {
    ms932Encoder.encode("\uE00B");
  }, Error, "EncodingError U+E00B");
  assertThrows(() => {
    ms932Encoder.encode("\uE00C");
  }, Error, "EncodingError U+E00C");
  assertThrows(() => {
    ms932Encoder.encode("\uE00D");
  }, Error, "EncodingError U+E00D");
  assertThrows(() => {
    ms932Encoder.encode("\uE00E");
  }, Error, "EncodingError U+E00E");
  assertThrows(() => {
    ms932Encoder.encode("\uE00F");
  }, Error, "EncodingError U+E00F");
  assertThrows(() => {
    ms932Encoder.encode("\uE010");
  }, Error, "EncodingError U+E010");
  assertThrows(() => {
    ms932Encoder.encode("\uE011");
  }, Error, "EncodingError U+E011");
  assertThrows(() => {
    ms932Encoder.encode("\uE012");
  }, Error, "EncodingError U+E012");
  assertThrows(() => {
    ms932Encoder.encode("\uE013");
  }, Error, "EncodingError U+E013");
  assertThrows(() => {
    ms932Encoder.encode("\uE014");
  }, Error, "EncodingError U+E014");
  assertThrows(() => {
    ms932Encoder.encode("\uE015");
  }, Error, "EncodingError U+E015");
  assertThrows(() => {
    ms932Encoder.encode("\uE016");
  }, Error, "EncodingError U+E016");
  assertThrows(() => {
    ms932Encoder.encode("\uE017");
  }, Error, "EncodingError U+E017");
  assertThrows(() => {
    ms932Encoder.encode("\uE018");
  }, Error, "EncodingError U+E018");
  assertThrows(() => {
    ms932Encoder.encode("\uE019");
  }, Error, "EncodingError U+E019");
  assertThrows(() => {
    ms932Encoder.encode("\uE01A");
  }, Error, "EncodingError U+E01A");
  assertThrows(() => {
    ms932Encoder.encode("\uE01B");
  }, Error, "EncodingError U+E01B");
  assertThrows(() => {
    ms932Encoder.encode("\uE01C");
  }, Error, "EncodingError U+E01C");
  assertThrows(() => {
    ms932Encoder.encode("\uE01D");
  }, Error, "EncodingError U+E01D");
  assertThrows(() => {
    ms932Encoder.encode("\uE01E");
  }, Error, "EncodingError U+E01E");
  assertThrows(() => {
    ms932Encoder.encode("\uE01F");
  }, Error, "EncodingError U+E01F");
  assertThrows(() => {
    ms932Encoder.encode("\uE020");
  }, Error, "EncodingError U+E020");
  assertThrows(() => {
    ms932Encoder.encode("\uE021");
  }, Error, "EncodingError U+E021");
  assertThrows(() => {
    ms932Encoder.encode("\uE022");
  }, Error, "EncodingError U+E022");
  assertThrows(() => {
    ms932Encoder.encode("\uE023");
  }, Error, "EncodingError U+E023");
  assertThrows(() => {
    ms932Encoder.encode("\uE024");
  }, Error, "EncodingError U+E024");
  assertThrows(() => {
    ms932Encoder.encode("\uE025");
  }, Error, "EncodingError U+E025");
  assertThrows(() => {
    ms932Encoder.encode("\uE026");
  }, Error, "EncodingError U+E026");
  assertThrows(() => {
    ms932Encoder.encode("\uE027");
  }, Error, "EncodingError U+E027");
  assertThrows(() => {
    ms932Encoder.encode("\uE028");
  }, Error, "EncodingError U+E028");
  assertThrows(() => {
    ms932Encoder.encode("\uE029");
  }, Error, "EncodingError U+E029");
  assertThrows(() => {
    ms932Encoder.encode("\uE02A");
  }, Error, "EncodingError U+E02A");
  assertThrows(() => {
    ms932Encoder.encode("\uE02B");
  }, Error, "EncodingError U+E02B");
  assertThrows(() => {
    ms932Encoder.encode("\uE02C");
  }, Error, "EncodingError U+E02C");
  assertThrows(() => {
    ms932Encoder.encode("\uE02D");
  }, Error, "EncodingError U+E02D");
  assertThrows(() => {
    ms932Encoder.encode("\uE02E");
  }, Error, "EncodingError U+E02E");
  assertThrows(() => {
    ms932Encoder.encode("\uE02F");
  }, Error, "EncodingError U+E02F");
  assertThrows(() => {
    ms932Encoder.encode("\uE030");
  }, Error, "EncodingError U+E030");
  assertThrows(() => {
    ms932Encoder.encode("\uE031");
  }, Error, "EncodingError U+E031");
  assertThrows(() => {
    ms932Encoder.encode("\uE032");
  }, Error, "EncodingError U+E032");
  assertThrows(() => {
    ms932Encoder.encode("\uE033");
  }, Error, "EncodingError U+E033");
  assertThrows(() => {
    ms932Encoder.encode("\uE034");
  }, Error, "EncodingError U+E034");
  assertThrows(() => {
    ms932Encoder.encode("\uE035");
  }, Error, "EncodingError U+E035");
  assertThrows(() => {
    ms932Encoder.encode("\uE036");
  }, Error, "EncodingError U+E036");
  assertThrows(() => {
    ms932Encoder.encode("\uE037");
  }, Error, "EncodingError U+E037");
  assertThrows(() => {
    ms932Encoder.encode("\uE038");
  }, Error, "EncodingError U+E038");
  assertThrows(() => {
    ms932Encoder.encode("\uE039");
  }, Error, "EncodingError U+E039");
  assertThrows(() => {
    ms932Encoder.encode("\uE03A");
  }, Error, "EncodingError U+E03A");
  assertThrows(() => {
    ms932Encoder.encode("\uE03B");
  }, Error, "EncodingError U+E03B");
  assertThrows(() => {
    ms932Encoder.encode("\uE03C");
  }, Error, "EncodingError U+E03C");
  assertThrows(() => {
    ms932Encoder.encode("\uE03D");
  }, Error, "EncodingError U+E03D");
  assertThrows(() => {
    ms932Encoder.encode("\uE03E");
  }, Error, "EncodingError U+E03E");
  assertThrows(() => {
    ms932Encoder.encode("\uE03F");
  }, Error, "EncodingError U+E03F");
  assertThrows(() => {
    ms932Encoder.encode("\uE040");
  }, Error, "EncodingError U+E040");
  assertThrows(() => {
    ms932Encoder.encode("\uE041");
  }, Error, "EncodingError U+E041");
  assertThrows(() => {
    ms932Encoder.encode("\uE042");
  }, Error, "EncodingError U+E042");
  assertThrows(() => {
    ms932Encoder.encode("\uE043");
  }, Error, "EncodingError U+E043");
  assertThrows(() => {
    ms932Encoder.encode("\uE044");
  }, Error, "EncodingError U+E044");
  assertThrows(() => {
    ms932Encoder.encode("\uE045");
  }, Error, "EncodingError U+E045");
  assertThrows(() => {
    ms932Encoder.encode("\uE046");
  }, Error, "EncodingError U+E046");
  assertThrows(() => {
    ms932Encoder.encode("\uE047");
  }, Error, "EncodingError U+E047");
  assertThrows(() => {
    ms932Encoder.encode("\uE048");
  }, Error, "EncodingError U+E048");
  assertThrows(() => {
    ms932Encoder.encode("\uE049");
  }, Error, "EncodingError U+E049");
  assertThrows(() => {
    ms932Encoder.encode("\uE04A");
  }, Error, "EncodingError U+E04A");
  assertThrows(() => {
    ms932Encoder.encode("\uE04B");
  }, Error, "EncodingError U+E04B");
  assertThrows(() => {
    ms932Encoder.encode("\uE04C");
  }, Error, "EncodingError U+E04C");
  assertThrows(() => {
    ms932Encoder.encode("\uE04D");
  }, Error, "EncodingError U+E04D");
  assertThrows(() => {
    ms932Encoder.encode("\uE04E");
  }, Error, "EncodingError U+E04E");
  assertThrows(() => {
    ms932Encoder.encode("\uE04F");
  }, Error, "EncodingError U+E04F");
  assertThrows(() => {
    ms932Encoder.encode("\uE050");
  }, Error, "EncodingError U+E050");
  assertThrows(() => {
    ms932Encoder.encode("\uE051");
  }, Error, "EncodingError U+E051");
  assertThrows(() => {
    ms932Encoder.encode("\uE052");
  }, Error, "EncodingError U+E052");
  assertThrows(() => {
    ms932Encoder.encode("\uE053");
  }, Error, "EncodingError U+E053");
  assertThrows(() => {
    ms932Encoder.encode("\uE054");
  }, Error, "EncodingError U+E054");
  assertThrows(() => {
    ms932Encoder.encode("\uE055");
  }, Error, "EncodingError U+E055");
  assertThrows(() => {
    ms932Encoder.encode("\uE056");
  }, Error, "EncodingError U+E056");
  assertThrows(() => {
    ms932Encoder.encode("\uE057");
  }, Error, "EncodingError U+E057");
  assertThrows(() => {
    ms932Encoder.encode("\uE058");
  }, Error, "EncodingError U+E058");
  assertThrows(() => {
    ms932Encoder.encode("\uE059");
  }, Error, "EncodingError U+E059");
  assertThrows(() => {
    ms932Encoder.encode("\uE05A");
  }, Error, "EncodingError U+E05A");
  assertThrows(() => {
    ms932Encoder.encode("\uE05B");
  }, Error, "EncodingError U+E05B");
  assertThrows(() => {
    ms932Encoder.encode("\uE05C");
  }, Error, "EncodingError U+E05C");
  assertThrows(() => {
    ms932Encoder.encode("\uE05D");
  }, Error, "EncodingError U+E05D");
  assertThrows(() => {
    ms932Encoder.encode("\uE05E");
  }, Error, "EncodingError U+E05E");
  assertThrows(() => {
    ms932Encoder.encode("\uE05F");
  }, Error, "EncodingError U+E05F");
  assertThrows(() => {
    ms932Encoder.encode("\uE060");
  }, Error, "EncodingError U+E060");
  assertThrows(() => {
    ms932Encoder.encode("\uE061");
  }, Error, "EncodingError U+E061");
  assertThrows(() => {
    ms932Encoder.encode("\uE062");
  }, Error, "EncodingError U+E062");
  assertThrows(() => {
    ms932Encoder.encode("\uE063");
  }, Error, "EncodingError U+E063");
  assertThrows(() => {
    ms932Encoder.encode("\uE064");
  }, Error, "EncodingError U+E064");
  assertThrows(() => {
    ms932Encoder.encode("\uE065");
  }, Error, "EncodingError U+E065");
  assertThrows(() => {
    ms932Encoder.encode("\uE066");
  }, Error, "EncodingError U+E066");
  assertThrows(() => {
    ms932Encoder.encode("\uE067");
  }, Error, "EncodingError U+E067");
  assertThrows(() => {
    ms932Encoder.encode("\uE068");
  }, Error, "EncodingError U+E068");
  assertThrows(() => {
    ms932Encoder.encode("\uE069");
  }, Error, "EncodingError U+E069");
  assertThrows(() => {
    ms932Encoder.encode("\uE06A");
  }, Error, "EncodingError U+E06A");
  assertThrows(() => {
    ms932Encoder.encode("\uE06B");
  }, Error, "EncodingError U+E06B");
  assertThrows(() => {
    ms932Encoder.encode("\uE06C");
  }, Error, "EncodingError U+E06C");
  assertThrows(() => {
    ms932Encoder.encode("\uE06D");
  }, Error, "EncodingError U+E06D");
  assertThrows(() => {
    ms932Encoder.encode("\uE06E");
  }, Error, "EncodingError U+E06E");
  assertThrows(() => {
    ms932Encoder.encode("\uE06F");
  }, Error, "EncodingError U+E06F");
  assertThrows(() => {
    ms932Encoder.encode("\uE070");
  }, Error, "EncodingError U+E070");
  assertThrows(() => {
    ms932Encoder.encode("\uE071");
  }, Error, "EncodingError U+E071");
  assertThrows(() => {
    ms932Encoder.encode("\uE072");
  }, Error, "EncodingError U+E072");
  assertThrows(() => {
    ms932Encoder.encode("\uE073");
  }, Error, "EncodingError U+E073");
  assertThrows(() => {
    ms932Encoder.encode("\uE074");
  }, Error, "EncodingError U+E074");
  assertThrows(() => {
    ms932Encoder.encode("\uE075");
  }, Error, "EncodingError U+E075");
  assertThrows(() => {
    ms932Encoder.encode("\uE076");
  }, Error, "EncodingError U+E076");
  assertThrows(() => {
    ms932Encoder.encode("\uE077");
  }, Error, "EncodingError U+E077");
  assertThrows(() => {
    ms932Encoder.encode("\uE078");
  }, Error, "EncodingError U+E078");
  assertThrows(() => {
    ms932Encoder.encode("\uE079");
  }, Error, "EncodingError U+E079");
  assertThrows(() => {
    ms932Encoder.encode("\uE07A");
  }, Error, "EncodingError U+E07A");
  assertThrows(() => {
    ms932Encoder.encode("\uE07B");
  }, Error, "EncodingError U+E07B");
  assertThrows(() => {
    ms932Encoder.encode("\uE07C");
  }, Error, "EncodingError U+E07C");
  assertThrows(() => {
    ms932Encoder.encode("\uE07D");
  }, Error, "EncodingError U+E07D");
  assertThrows(() => {
    ms932Encoder.encode("\uE07E");
  }, Error, "EncodingError U+E07E");
  assertThrows(() => {
    ms932Encoder.encode("\uE07F");
  }, Error, "EncodingError U+E07F");
  assertThrows(() => {
    ms932Encoder.encode("\uE080");
  }, Error, "EncodingError U+E080");
  assertThrows(() => {
    ms932Encoder.encode("\uE081");
  }, Error, "EncodingError U+E081");
  assertThrows(() => {
    ms932Encoder.encode("\uE082");
  }, Error, "EncodingError U+E082");
  assertThrows(() => {
    ms932Encoder.encode("\uE083");
  }, Error, "EncodingError U+E083");
  assertThrows(() => {
    ms932Encoder.encode("\uE084");
  }, Error, "EncodingError U+E084");
  assertThrows(() => {
    ms932Encoder.encode("\uE085");
  }, Error, "EncodingError U+E085");
  assertThrows(() => {
    ms932Encoder.encode("\uE086");
  }, Error, "EncodingError U+E086");
  assertThrows(() => {
    ms932Encoder.encode("\uE087");
  }, Error, "EncodingError U+E087");
  assertThrows(() => {
    ms932Encoder.encode("\uE088");
  }, Error, "EncodingError U+E088");
  assertThrows(() => {
    ms932Encoder.encode("\uE089");
  }, Error, "EncodingError U+E089");
  assertThrows(() => {
    ms932Encoder.encode("\uE08A");
  }, Error, "EncodingError U+E08A");
  assertThrows(() => {
    ms932Encoder.encode("\uE08B");
  }, Error, "EncodingError U+E08B");
  assertThrows(() => {
    ms932Encoder.encode("\uE08C");
  }, Error, "EncodingError U+E08C");
  assertThrows(() => {
    ms932Encoder.encode("\uE08D");
  }, Error, "EncodingError U+E08D");
  assertThrows(() => {
    ms932Encoder.encode("\uE08E");
  }, Error, "EncodingError U+E08E");
  assertThrows(() => {
    ms932Encoder.encode("\uE08F");
  }, Error, "EncodingError U+E08F");
  assertThrows(() => {
    ms932Encoder.encode("\uE090");
  }, Error, "EncodingError U+E090");
  assertThrows(() => {
    ms932Encoder.encode("\uE091");
  }, Error, "EncodingError U+E091");
  assertThrows(() => {
    ms932Encoder.encode("\uE092");
  }, Error, "EncodingError U+E092");
  assertThrows(() => {
    ms932Encoder.encode("\uE093");
  }, Error, "EncodingError U+E093");
  assertThrows(() => {
    ms932Encoder.encode("\uE094");
  }, Error, "EncodingError U+E094");
  assertThrows(() => {
    ms932Encoder.encode("\uE095");
  }, Error, "EncodingError U+E095");
  assertThrows(() => {
    ms932Encoder.encode("\uE096");
  }, Error, "EncodingError U+E096");
  assertThrows(() => {
    ms932Encoder.encode("\uE097");
  }, Error, "EncodingError U+E097");
  assertThrows(() => {
    ms932Encoder.encode("\uE098");
  }, Error, "EncodingError U+E098");
  assertThrows(() => {
    ms932Encoder.encode("\uE099");
  }, Error, "EncodingError U+E099");
  assertThrows(() => {
    ms932Encoder.encode("\uE09A");
  }, Error, "EncodingError U+E09A");
  assertThrows(() => {
    ms932Encoder.encode("\uE09B");
  }, Error, "EncodingError U+E09B");
  assertThrows(() => {
    ms932Encoder.encode("\uE09C");
  }, Error, "EncodingError U+E09C");
  assertThrows(() => {
    ms932Encoder.encode("\uE09D");
  }, Error, "EncodingError U+E09D");
  assertThrows(() => {
    ms932Encoder.encode("\uE09E");
  }, Error, "EncodingError U+E09E");
  assertThrows(() => {
    ms932Encoder.encode("\uE09F");
  }, Error, "EncodingError U+E09F");
  assertThrows(() => {
    ms932Encoder.encode("\uE0A0");
  }, Error, "EncodingError U+E0A0");
  assertThrows(() => {
    ms932Encoder.encode("\uE0A1");
  }, Error, "EncodingError U+E0A1");
  assertThrows(() => {
    ms932Encoder.encode("\uE0A2");
  }, Error, "EncodingError U+E0A2");
  assertThrows(() => {
    ms932Encoder.encode("\uE0A3");
  }, Error, "EncodingError U+E0A3");
  assertThrows(() => {
    ms932Encoder.encode("\uE0A4");
  }, Error, "EncodingError U+E0A4");
  assertThrows(() => {
    ms932Encoder.encode("\uE0A5");
  }, Error, "EncodingError U+E0A5");
  assertThrows(() => {
    ms932Encoder.encode("\uE0A6");
  }, Error, "EncodingError U+E0A6");
  assertThrows(() => {
    ms932Encoder.encode("\uE0A7");
  }, Error, "EncodingError U+E0A7");
  assertThrows(() => {
    ms932Encoder.encode("\uE0A8");
  }, Error, "EncodingError U+E0A8");
  assertThrows(() => {
    ms932Encoder.encode("\uE0A9");
  }, Error, "EncodingError U+E0A9");
  assertThrows(() => {
    ms932Encoder.encode("\uE0AA");
  }, Error, "EncodingError U+E0AA");
  assertThrows(() => {
    ms932Encoder.encode("\uE0AB");
  }, Error, "EncodingError U+E0AB");
  assertThrows(() => {
    ms932Encoder.encode("\uE0AC");
  }, Error, "EncodingError U+E0AC");
  assertThrows(() => {
    ms932Encoder.encode("\uE0AD");
  }, Error, "EncodingError U+E0AD");
  assertThrows(() => {
    ms932Encoder.encode("\uE0AE");
  }, Error, "EncodingError U+E0AE");
  assertThrows(() => {
    ms932Encoder.encode("\uE0AF");
  }, Error, "EncodingError U+E0AF");
  assertThrows(() => {
    ms932Encoder.encode("\uE0B0");
  }, Error, "EncodingError U+E0B0");
  assertThrows(() => {
    ms932Encoder.encode("\uE0B1");
  }, Error, "EncodingError U+E0B1");
  assertThrows(() => {
    ms932Encoder.encode("\uE0B2");
  }, Error, "EncodingError U+E0B2");
  assertThrows(() => {
    ms932Encoder.encode("\uE0B3");
  }, Error, "EncodingError U+E0B3");
  assertThrows(() => {
    ms932Encoder.encode("\uE0B4");
  }, Error, "EncodingError U+E0B4");
  assertThrows(() => {
    ms932Encoder.encode("\uE0B5");
  }, Error, "EncodingError U+E0B5");
  assertThrows(() => {
    ms932Encoder.encode("\uE0B6");
  }, Error, "EncodingError U+E0B6");
  assertThrows(() => {
    ms932Encoder.encode("\uE0B7");
  }, Error, "EncodingError U+E0B7");
  assertThrows(() => {
    ms932Encoder.encode("\uE0B8");
  }, Error, "EncodingError U+E0B8");
  assertThrows(() => {
    ms932Encoder.encode("\uE0B9");
  }, Error, "EncodingError U+E0B9");
  assertThrows(() => {
    ms932Encoder.encode("\uE0BA");
  }, Error, "EncodingError U+E0BA");
  assertThrows(() => {
    ms932Encoder.encode("\uE0BB");
  }, Error, "EncodingError U+E0BB");
  assertThrows(() => {
    ms932Encoder.encode("\uE0BC");
  }, Error, "EncodingError U+E0BC");
  assertThrows(() => {
    ms932Encoder.encode("\uE0BD");
  }, Error, "EncodingError U+E0BD");
  assertThrows(() => {
    ms932Encoder.encode("\uE0BE");
  }, Error, "EncodingError U+E0BE");
  assertThrows(() => {
    ms932Encoder.encode("\uE0BF");
  }, Error, "EncodingError U+E0BF");
  assertThrows(() => {
    ms932Encoder.encode("\uE0C0");
  }, Error, "EncodingError U+E0C0");
  assertThrows(() => {
    ms932Encoder.encode("\uE0C1");
  }, Error, "EncodingError U+E0C1");
  assertThrows(() => {
    ms932Encoder.encode("\uE0C2");
  }, Error, "EncodingError U+E0C2");
  assertThrows(() => {
    ms932Encoder.encode("\uE0C3");
  }, Error, "EncodingError U+E0C3");
  assertThrows(() => {
    ms932Encoder.encode("\uE0C4");
  }, Error, "EncodingError U+E0C4");
  assertThrows(() => {
    ms932Encoder.encode("\uE0C5");
  }, Error, "EncodingError U+E0C5");
  assertThrows(() => {
    ms932Encoder.encode("\uE0C6");
  }, Error, "EncodingError U+E0C6");
  assertThrows(() => {
    ms932Encoder.encode("\uE0C7");
  }, Error, "EncodingError U+E0C7");
  assertThrows(() => {
    ms932Encoder.encode("\uE0C8");
  }, Error, "EncodingError U+E0C8");
  assertThrows(() => {
    ms932Encoder.encode("\uE0C9");
  }, Error, "EncodingError U+E0C9");
  assertThrows(() => {
    ms932Encoder.encode("\uE0CA");
  }, Error, "EncodingError U+E0CA");
  assertThrows(() => {
    ms932Encoder.encode("\uE0CB");
  }, Error, "EncodingError U+E0CB");
  assertThrows(() => {
    ms932Encoder.encode("\uE0CC");
  }, Error, "EncodingError U+E0CC");
  assertThrows(() => {
    ms932Encoder.encode("\uE0CD");
  }, Error, "EncodingError U+E0CD");
  assertThrows(() => {
    ms932Encoder.encode("\uE0CE");
  }, Error, "EncodingError U+E0CE");
  assertThrows(() => {
    ms932Encoder.encode("\uE0CF");
  }, Error, "EncodingError U+E0CF");
  assertThrows(() => {
    ms932Encoder.encode("\uE0D0");
  }, Error, "EncodingError U+E0D0");
  assertThrows(() => {
    ms932Encoder.encode("\uE0D1");
  }, Error, "EncodingError U+E0D1");
  assertThrows(() => {
    ms932Encoder.encode("\uE0D2");
  }, Error, "EncodingError U+E0D2");
  assertThrows(() => {
    ms932Encoder.encode("\uE0D3");
  }, Error, "EncodingError U+E0D3");
  assertThrows(() => {
    ms932Encoder.encode("\uE0D4");
  }, Error, "EncodingError U+E0D4");
  assertThrows(() => {
    ms932Encoder.encode("\uE0D5");
  }, Error, "EncodingError U+E0D5");
  assertThrows(() => {
    ms932Encoder.encode("\uE0D6");
  }, Error, "EncodingError U+E0D6");
  assertThrows(() => {
    ms932Encoder.encode("\uE0D7");
  }, Error, "EncodingError U+E0D7");
  assertThrows(() => {
    ms932Encoder.encode("\uE0D8");
  }, Error, "EncodingError U+E0D8");
  assertThrows(() => {
    ms932Encoder.encode("\uE0D9");
  }, Error, "EncodingError U+E0D9");
  assertThrows(() => {
    ms932Encoder.encode("\uE0DA");
  }, Error, "EncodingError U+E0DA");
  assertThrows(() => {
    ms932Encoder.encode("\uE0DB");
  }, Error, "EncodingError U+E0DB");
  assertThrows(() => {
    ms932Encoder.encode("\uE0DC");
  }, Error, "EncodingError U+E0DC");
  assertThrows(() => {
    ms932Encoder.encode("\uE0DD");
  }, Error, "EncodingError U+E0DD");
  assertThrows(() => {
    ms932Encoder.encode("\uE0DE");
  }, Error, "EncodingError U+E0DE");
  assertThrows(() => {
    ms932Encoder.encode("\uE0DF");
  }, Error, "EncodingError U+E0DF");
  assertThrows(() => {
    ms932Encoder.encode("\uE0E0");
  }, Error, "EncodingError U+E0E0");
  assertThrows(() => {
    ms932Encoder.encode("\uE0E1");
  }, Error, "EncodingError U+E0E1");
  assertThrows(() => {
    ms932Encoder.encode("\uE0E2");
  }, Error, "EncodingError U+E0E2");
  assertThrows(() => {
    ms932Encoder.encode("\uE0E3");
  }, Error, "EncodingError U+E0E3");
  assertThrows(() => {
    ms932Encoder.encode("\uE0E4");
  }, Error, "EncodingError U+E0E4");
  assertThrows(() => {
    ms932Encoder.encode("\uE0E5");
  }, Error, "EncodingError U+E0E5");
  assertThrows(() => {
    ms932Encoder.encode("\uE0E6");
  }, Error, "EncodingError U+E0E6");
  assertThrows(() => {
    ms932Encoder.encode("\uE0E7");
  }, Error, "EncodingError U+E0E7");
  assertThrows(() => {
    ms932Encoder.encode("\uE0E8");
  }, Error, "EncodingError U+E0E8");
  assertThrows(() => {
    ms932Encoder.encode("\uE0E9");
  }, Error, "EncodingError U+E0E9");
  assertThrows(() => {
    ms932Encoder.encode("\uE0EA");
  }, Error, "EncodingError U+E0EA");
  assertThrows(() => {
    ms932Encoder.encode("\uE0EB");
  }, Error, "EncodingError U+E0EB");
  assertThrows(() => {
    ms932Encoder.encode("\uE0EC");
  }, Error, "EncodingError U+E0EC");
  assertThrows(() => {
    ms932Encoder.encode("\uE0ED");
  }, Error, "EncodingError U+E0ED");
  assertThrows(() => {
    ms932Encoder.encode("\uE0EE");
  }, Error, "EncodingError U+E0EE");
  assertThrows(() => {
    ms932Encoder.encode("\uE0EF");
  }, Error, "EncodingError U+E0EF");
  assertThrows(() => {
    ms932Encoder.encode("\uE0F0");
  }, Error, "EncodingError U+E0F0");
  assertThrows(() => {
    ms932Encoder.encode("\uE0F1");
  }, Error, "EncodingError U+E0F1");
  assertThrows(() => {
    ms932Encoder.encode("\uE0F2");
  }, Error, "EncodingError U+E0F2");
  assertThrows(() => {
    ms932Encoder.encode("\uE0F3");
  }, Error, "EncodingError U+E0F3");
  assertThrows(() => {
    ms932Encoder.encode("\uE0F4");
  }, Error, "EncodingError U+E0F4");
  assertThrows(() => {
    ms932Encoder.encode("\uE0F5");
  }, Error, "EncodingError U+E0F5");
  assertThrows(() => {
    ms932Encoder.encode("\uE0F6");
  }, Error, "EncodingError U+E0F6");
  assertThrows(() => {
    ms932Encoder.encode("\uE0F7");
  }, Error, "EncodingError U+E0F7");
  assertThrows(() => {
    ms932Encoder.encode("\uE0F8");
  }, Error, "EncodingError U+E0F8");
  assertThrows(() => {
    ms932Encoder.encode("\uE0F9");
  }, Error, "EncodingError U+E0F9");
  assertThrows(() => {
    ms932Encoder.encode("\uE0FA");
  }, Error, "EncodingError U+E0FA");
  assertThrows(() => {
    ms932Encoder.encode("\uE0FB");
  }, Error, "EncodingError U+E0FB");
  assertThrows(() => {
    ms932Encoder.encode("\uE0FC");
  }, Error, "EncodingError U+E0FC");
  assertThrows(() => {
    ms932Encoder.encode("\uE0FD");
  }, Error, "EncodingError U+E0FD");
  assertThrows(() => {
    ms932Encoder.encode("\uE0FE");
  }, Error, "EncodingError U+E0FE");
  assertThrows(() => {
    ms932Encoder.encode("\uE0FF");
  }, Error, "EncodingError U+E0FF");
  assertThrows(() => {
    ms932Encoder.encode("\uE100");
  }, Error, "EncodingError U+E100");
  assertThrows(() => {
    ms932Encoder.encode("\uE101");
  }, Error, "EncodingError U+E101");
  assertThrows(() => {
    ms932Encoder.encode("\uE102");
  }, Error, "EncodingError U+E102");
  assertThrows(() => {
    ms932Encoder.encode("\uE103");
  }, Error, "EncodingError U+E103");
  assertThrows(() => {
    ms932Encoder.encode("\uE104");
  }, Error, "EncodingError U+E104");
  assertThrows(() => {
    ms932Encoder.encode("\uE105");
  }, Error, "EncodingError U+E105");
  assertThrows(() => {
    ms932Encoder.encode("\uE106");
  }, Error, "EncodingError U+E106");
  assertThrows(() => {
    ms932Encoder.encode("\uE107");
  }, Error, "EncodingError U+E107");
  assertThrows(() => {
    ms932Encoder.encode("\uE108");
  }, Error, "EncodingError U+E108");
  assertThrows(() => {
    ms932Encoder.encode("\uE109");
  }, Error, "EncodingError U+E109");
  assertThrows(() => {
    ms932Encoder.encode("\uE10A");
  }, Error, "EncodingError U+E10A");
  assertThrows(() => {
    ms932Encoder.encode("\uE10B");
  }, Error, "EncodingError U+E10B");
  assertThrows(() => {
    ms932Encoder.encode("\uE10C");
  }, Error, "EncodingError U+E10C");
  assertThrows(() => {
    ms932Encoder.encode("\uE10D");
  }, Error, "EncodingError U+E10D");
  assertThrows(() => {
    ms932Encoder.encode("\uE10E");
  }, Error, "EncodingError U+E10E");
  assertThrows(() => {
    ms932Encoder.encode("\uE10F");
  }, Error, "EncodingError U+E10F");
  assertThrows(() => {
    ms932Encoder.encode("\uE110");
  }, Error, "EncodingError U+E110");
  assertThrows(() => {
    ms932Encoder.encode("\uE111");
  }, Error, "EncodingError U+E111");
  assertThrows(() => {
    ms932Encoder.encode("\uE112");
  }, Error, "EncodingError U+E112");
  assertThrows(() => {
    ms932Encoder.encode("\uE113");
  }, Error, "EncodingError U+E113");
  assertThrows(() => {
    ms932Encoder.encode("\uE114");
  }, Error, "EncodingError U+E114");
  assertThrows(() => {
    ms932Encoder.encode("\uE115");
  }, Error, "EncodingError U+E115");
  assertThrows(() => {
    ms932Encoder.encode("\uE116");
  }, Error, "EncodingError U+E116");
  assertThrows(() => {
    ms932Encoder.encode("\uE117");
  }, Error, "EncodingError U+E117");
  assertThrows(() => {
    ms932Encoder.encode("\uE118");
  }, Error, "EncodingError U+E118");
  assertThrows(() => {
    ms932Encoder.encode("\uE119");
  }, Error, "EncodingError U+E119");
  assertThrows(() => {
    ms932Encoder.encode("\uE11A");
  }, Error, "EncodingError U+E11A");
  assertThrows(() => {
    ms932Encoder.encode("\uE11B");
  }, Error, "EncodingError U+E11B");
  assertThrows(() => {
    ms932Encoder.encode("\uE11C");
  }, Error, "EncodingError U+E11C");
  assertThrows(() => {
    ms932Encoder.encode("\uE11D");
  }, Error, "EncodingError U+E11D");
  assertThrows(() => {
    ms932Encoder.encode("\uE11E");
  }, Error, "EncodingError U+E11E");
  assertThrows(() => {
    ms932Encoder.encode("\uE11F");
  }, Error, "EncodingError U+E11F");
  assertThrows(() => {
    ms932Encoder.encode("\uE120");
  }, Error, "EncodingError U+E120");
  assertThrows(() => {
    ms932Encoder.encode("\uE121");
  }, Error, "EncodingError U+E121");
  assertThrows(() => {
    ms932Encoder.encode("\uE122");
  }, Error, "EncodingError U+E122");
  assertThrows(() => {
    ms932Encoder.encode("\uE123");
  }, Error, "EncodingError U+E123");
  assertThrows(() => {
    ms932Encoder.encode("\uE124");
  }, Error, "EncodingError U+E124");
  assertThrows(() => {
    ms932Encoder.encode("\uE125");
  }, Error, "EncodingError U+E125");
  assertThrows(() => {
    ms932Encoder.encode("\uE126");
  }, Error, "EncodingError U+E126");
  assertThrows(() => {
    ms932Encoder.encode("\uE127");
  }, Error, "EncodingError U+E127");
  assertThrows(() => {
    ms932Encoder.encode("\uE128");
  }, Error, "EncodingError U+E128");
  assertThrows(() => {
    ms932Encoder.encode("\uE129");
  }, Error, "EncodingError U+E129");
  assertThrows(() => {
    ms932Encoder.encode("\uE12A");
  }, Error, "EncodingError U+E12A");
  assertThrows(() => {
    ms932Encoder.encode("\uE12B");
  }, Error, "EncodingError U+E12B");
  assertThrows(() => {
    ms932Encoder.encode("\uE12C");
  }, Error, "EncodingError U+E12C");
  assertThrows(() => {
    ms932Encoder.encode("\uE12D");
  }, Error, "EncodingError U+E12D");
  assertThrows(() => {
    ms932Encoder.encode("\uE12E");
  }, Error, "EncodingError U+E12E");
  assertThrows(() => {
    ms932Encoder.encode("\uE12F");
  }, Error, "EncodingError U+E12F");
  assertThrows(() => {
    ms932Encoder.encode("\uE130");
  }, Error, "EncodingError U+E130");
  assertThrows(() => {
    ms932Encoder.encode("\uE131");
  }, Error, "EncodingError U+E131");
  assertThrows(() => {
    ms932Encoder.encode("\uE132");
  }, Error, "EncodingError U+E132");
  assertThrows(() => {
    ms932Encoder.encode("\uE133");
  }, Error, "EncodingError U+E133");
  assertThrows(() => {
    ms932Encoder.encode("\uE134");
  }, Error, "EncodingError U+E134");
  assertThrows(() => {
    ms932Encoder.encode("\uE135");
  }, Error, "EncodingError U+E135");
  assertThrows(() => {
    ms932Encoder.encode("\uE136");
  }, Error, "EncodingError U+E136");
  assertThrows(() => {
    ms932Encoder.encode("\uE137");
  }, Error, "EncodingError U+E137");
  assertThrows(() => {
    ms932Encoder.encode("\uE138");
  }, Error, "EncodingError U+E138");
  assertThrows(() => {
    ms932Encoder.encode("\uE139");
  }, Error, "EncodingError U+E139");
  assertThrows(() => {
    ms932Encoder.encode("\uE13A");
  }, Error, "EncodingError U+E13A");
  assertThrows(() => {
    ms932Encoder.encode("\uE13B");
  }, Error, "EncodingError U+E13B");
  assertThrows(() => {
    ms932Encoder.encode("\uE13C");
  }, Error, "EncodingError U+E13C");
  assertThrows(() => {
    ms932Encoder.encode("\uE13D");
  }, Error, "EncodingError U+E13D");
  assertThrows(() => {
    ms932Encoder.encode("\uE13E");
  }, Error, "EncodingError U+E13E");
  assertThrows(() => {
    ms932Encoder.encode("\uE13F");
  }, Error, "EncodingError U+E13F");
  assertThrows(() => {
    ms932Encoder.encode("\uE140");
  }, Error, "EncodingError U+E140");
  assertThrows(() => {
    ms932Encoder.encode("\uE141");
  }, Error, "EncodingError U+E141");
  assertThrows(() => {
    ms932Encoder.encode("\uE142");
  }, Error, "EncodingError U+E142");
  assertThrows(() => {
    ms932Encoder.encode("\uE143");
  }, Error, "EncodingError U+E143");
  assertThrows(() => {
    ms932Encoder.encode("\uE144");
  }, Error, "EncodingError U+E144");
  assertThrows(() => {
    ms932Encoder.encode("\uE145");
  }, Error, "EncodingError U+E145");
  assertThrows(() => {
    ms932Encoder.encode("\uE146");
  }, Error, "EncodingError U+E146");
  assertThrows(() => {
    ms932Encoder.encode("\uE147");
  }, Error, "EncodingError U+E147");
  assertThrows(() => {
    ms932Encoder.encode("\uE148");
  }, Error, "EncodingError U+E148");
  assertThrows(() => {
    ms932Encoder.encode("\uE149");
  }, Error, "EncodingError U+E149");
  assertThrows(() => {
    ms932Encoder.encode("\uE14A");
  }, Error, "EncodingError U+E14A");
  assertThrows(() => {
    ms932Encoder.encode("\uE14B");
  }, Error, "EncodingError U+E14B");
  assertThrows(() => {
    ms932Encoder.encode("\uE14C");
  }, Error, "EncodingError U+E14C");
  assertThrows(() => {
    ms932Encoder.encode("\uE14D");
  }, Error, "EncodingError U+E14D");
  assertThrows(() => {
    ms932Encoder.encode("\uE14E");
  }, Error, "EncodingError U+E14E");
  assertThrows(() => {
    ms932Encoder.encode("\uE14F");
  }, Error, "EncodingError U+E14F");
  assertThrows(() => {
    ms932Encoder.encode("\uE150");
  }, Error, "EncodingError U+E150");
  assertThrows(() => {
    ms932Encoder.encode("\uE151");
  }, Error, "EncodingError U+E151");
  assertThrows(() => {
    ms932Encoder.encode("\uE152");
  }, Error, "EncodingError U+E152");
  assertThrows(() => {
    ms932Encoder.encode("\uE153");
  }, Error, "EncodingError U+E153");
  assertThrows(() => {
    ms932Encoder.encode("\uE154");
  }, Error, "EncodingError U+E154");
  assertThrows(() => {
    ms932Encoder.encode("\uE155");
  }, Error, "EncodingError U+E155");
  assertThrows(() => {
    ms932Encoder.encode("\uE156");
  }, Error, "EncodingError U+E156");
  assertThrows(() => {
    ms932Encoder.encode("\uE157");
  }, Error, "EncodingError U+E157");
  assertThrows(() => {
    ms932Encoder.encode("\uE158");
  }, Error, "EncodingError U+E158");
  assertThrows(() => {
    ms932Encoder.encode("\uE159");
  }, Error, "EncodingError U+E159");
  assertThrows(() => {
    ms932Encoder.encode("\uE15A");
  }, Error, "EncodingError U+E15A");
  assertThrows(() => {
    ms932Encoder.encode("\uE15B");
  }, Error, "EncodingError U+E15B");
  assertThrows(() => {
    ms932Encoder.encode("\uE15C");
  }, Error, "EncodingError U+E15C");
  assertThrows(() => {
    ms932Encoder.encode("\uE15D");
  }, Error, "EncodingError U+E15D");
  assertThrows(() => {
    ms932Encoder.encode("\uE15E");
  }, Error, "EncodingError U+E15E");
  assertThrows(() => {
    ms932Encoder.encode("\uE15F");
  }, Error, "EncodingError U+E15F");
  assertThrows(() => {
    ms932Encoder.encode("\uE160");
  }, Error, "EncodingError U+E160");
  assertThrows(() => {
    ms932Encoder.encode("\uE161");
  }, Error, "EncodingError U+E161");
  assertThrows(() => {
    ms932Encoder.encode("\uE162");
  }, Error, "EncodingError U+E162");
  assertThrows(() => {
    ms932Encoder.encode("\uE163");
  }, Error, "EncodingError U+E163");
  assertThrows(() => {
    ms932Encoder.encode("\uE164");
  }, Error, "EncodingError U+E164");
  assertThrows(() => {
    ms932Encoder.encode("\uE165");
  }, Error, "EncodingError U+E165");
  assertThrows(() => {
    ms932Encoder.encode("\uE166");
  }, Error, "EncodingError U+E166");
  assertThrows(() => {
    ms932Encoder.encode("\uE167");
  }, Error, "EncodingError U+E167");
  assertThrows(() => {
    ms932Encoder.encode("\uE168");
  }, Error, "EncodingError U+E168");
  assertThrows(() => {
    ms932Encoder.encode("\uE169");
  }, Error, "EncodingError U+E169");
  assertThrows(() => {
    ms932Encoder.encode("\uE16A");
  }, Error, "EncodingError U+E16A");
  assertThrows(() => {
    ms932Encoder.encode("\uE16B");
  }, Error, "EncodingError U+E16B");
  assertThrows(() => {
    ms932Encoder.encode("\uE16C");
  }, Error, "EncodingError U+E16C");
  assertThrows(() => {
    ms932Encoder.encode("\uE16D");
  }, Error, "EncodingError U+E16D");
  assertThrows(() => {
    ms932Encoder.encode("\uE16E");
  }, Error, "EncodingError U+E16E");
  assertThrows(() => {
    ms932Encoder.encode("\uE16F");
  }, Error, "EncodingError U+E16F");
  assertThrows(() => {
    ms932Encoder.encode("\uE170");
  }, Error, "EncodingError U+E170");
  assertThrows(() => {
    ms932Encoder.encode("\uE171");
  }, Error, "EncodingError U+E171");
  assertThrows(() => {
    ms932Encoder.encode("\uE172");
  }, Error, "EncodingError U+E172");
  assertThrows(() => {
    ms932Encoder.encode("\uE173");
  }, Error, "EncodingError U+E173");
  assertThrows(() => {
    ms932Encoder.encode("\uE174");
  }, Error, "EncodingError U+E174");
  assertThrows(() => {
    ms932Encoder.encode("\uE175");
  }, Error, "EncodingError U+E175");
  assertThrows(() => {
    ms932Encoder.encode("\uE176");
  }, Error, "EncodingError U+E176");
  assertThrows(() => {
    ms932Encoder.encode("\uE177");
  }, Error, "EncodingError U+E177");
  assertThrows(() => {
    ms932Encoder.encode("\uE178");
  }, Error, "EncodingError U+E178");
  assertThrows(() => {
    ms932Encoder.encode("\uE179");
  }, Error, "EncodingError U+E179");
  assertThrows(() => {
    ms932Encoder.encode("\uE17A");
  }, Error, "EncodingError U+E17A");
  assertThrows(() => {
    ms932Encoder.encode("\uE17B");
  }, Error, "EncodingError U+E17B");
  assertThrows(() => {
    ms932Encoder.encode("\uE17C");
  }, Error, "EncodingError U+E17C");
  assertThrows(() => {
    ms932Encoder.encode("\uE17D");
  }, Error, "EncodingError U+E17D");
  assertThrows(() => {
    ms932Encoder.encode("\uE17E");
  }, Error, "EncodingError U+E17E");
  assertThrows(() => {
    ms932Encoder.encode("\uE17F");
  }, Error, "EncodingError U+E17F");
  assertThrows(() => {
    ms932Encoder.encode("\uE180");
  }, Error, "EncodingError U+E180");
  assertThrows(() => {
    ms932Encoder.encode("\uE181");
  }, Error, "EncodingError U+E181");
  assertThrows(() => {
    ms932Encoder.encode("\uE182");
  }, Error, "EncodingError U+E182");
  assertThrows(() => {
    ms932Encoder.encode("\uE183");
  }, Error, "EncodingError U+E183");
  assertThrows(() => {
    ms932Encoder.encode("\uE184");
  }, Error, "EncodingError U+E184");
  assertThrows(() => {
    ms932Encoder.encode("\uE185");
  }, Error, "EncodingError U+E185");
  assertThrows(() => {
    ms932Encoder.encode("\uE186");
  }, Error, "EncodingError U+E186");
  assertThrows(() => {
    ms932Encoder.encode("\uE187");
  }, Error, "EncodingError U+E187");
  assertThrows(() => {
    ms932Encoder.encode("\uE188");
  }, Error, "EncodingError U+E188");
  assertThrows(() => {
    ms932Encoder.encode("\uE189");
  }, Error, "EncodingError U+E189");
  assertThrows(() => {
    ms932Encoder.encode("\uE18A");
  }, Error, "EncodingError U+E18A");
  assertThrows(() => {
    ms932Encoder.encode("\uE18B");
  }, Error, "EncodingError U+E18B");
  assertThrows(() => {
    ms932Encoder.encode("\uE18C");
  }, Error, "EncodingError U+E18C");
  assertThrows(() => {
    ms932Encoder.encode("\uE18D");
  }, Error, "EncodingError U+E18D");
  assertThrows(() => {
    ms932Encoder.encode("\uE18E");
  }, Error, "EncodingError U+E18E");
  assertThrows(() => {
    ms932Encoder.encode("\uE18F");
  }, Error, "EncodingError U+E18F");
  assertThrows(() => {
    ms932Encoder.encode("\uE190");
  }, Error, "EncodingError U+E190");
  assertThrows(() => {
    ms932Encoder.encode("\uE191");
  }, Error, "EncodingError U+E191");
  assertThrows(() => {
    ms932Encoder.encode("\uE192");
  }, Error, "EncodingError U+E192");
  assertThrows(() => {
    ms932Encoder.encode("\uE193");
  }, Error, "EncodingError U+E193");
  assertThrows(() => {
    ms932Encoder.encode("\uE194");
  }, Error, "EncodingError U+E194");
  assertThrows(() => {
    ms932Encoder.encode("\uE195");
  }, Error, "EncodingError U+E195");
  assertThrows(() => {
    ms932Encoder.encode("\uE196");
  }, Error, "EncodingError U+E196");
  assertThrows(() => {
    ms932Encoder.encode("\uE197");
  }, Error, "EncodingError U+E197");
  assertThrows(() => {
    ms932Encoder.encode("\uE198");
  }, Error, "EncodingError U+E198");
  assertThrows(() => {
    ms932Encoder.encode("\uE199");
  }, Error, "EncodingError U+E199");
  assertThrows(() => {
    ms932Encoder.encode("\uE19A");
  }, Error, "EncodingError U+E19A");
  assertThrows(() => {
    ms932Encoder.encode("\uE19B");
  }, Error, "EncodingError U+E19B");
  assertThrows(() => {
    ms932Encoder.encode("\uE19C");
  }, Error, "EncodingError U+E19C");
  assertThrows(() => {
    ms932Encoder.encode("\uE19D");
  }, Error, "EncodingError U+E19D");
  assertThrows(() => {
    ms932Encoder.encode("\uE19E");
  }, Error, "EncodingError U+E19E");
  assertThrows(() => {
    ms932Encoder.encode("\uE19F");
  }, Error, "EncodingError U+E19F");
  assertThrows(() => {
    ms932Encoder.encode("\uE1A0");
  }, Error, "EncodingError U+E1A0");
  assertThrows(() => {
    ms932Encoder.encode("\uE1A1");
  }, Error, "EncodingError U+E1A1");
  assertThrows(() => {
    ms932Encoder.encode("\uE1A2");
  }, Error, "EncodingError U+E1A2");
  assertThrows(() => {
    ms932Encoder.encode("\uE1A3");
  }, Error, "EncodingError U+E1A3");
  assertThrows(() => {
    ms932Encoder.encode("\uE1A4");
  }, Error, "EncodingError U+E1A4");
  assertThrows(() => {
    ms932Encoder.encode("\uE1A5");
  }, Error, "EncodingError U+E1A5");
  assertThrows(() => {
    ms932Encoder.encode("\uE1A6");
  }, Error, "EncodingError U+E1A6");
  assertThrows(() => {
    ms932Encoder.encode("\uE1A7");
  }, Error, "EncodingError U+E1A7");
  assertThrows(() => {
    ms932Encoder.encode("\uE1A8");
  }, Error, "EncodingError U+E1A8");
  assertThrows(() => {
    ms932Encoder.encode("\uE1A9");
  }, Error, "EncodingError U+E1A9");
  assertThrows(() => {
    ms932Encoder.encode("\uE1AA");
  }, Error, "EncodingError U+E1AA");
  assertThrows(() => {
    ms932Encoder.encode("\uE1AB");
  }, Error, "EncodingError U+E1AB");
  assertThrows(() => {
    ms932Encoder.encode("\uE1AC");
  }, Error, "EncodingError U+E1AC");
  assertThrows(() => {
    ms932Encoder.encode("\uE1AD");
  }, Error, "EncodingError U+E1AD");
  assertThrows(() => {
    ms932Encoder.encode("\uE1AE");
  }, Error, "EncodingError U+E1AE");
  assertThrows(() => {
    ms932Encoder.encode("\uE1AF");
  }, Error, "EncodingError U+E1AF");
  assertThrows(() => {
    ms932Encoder.encode("\uE1B0");
  }, Error, "EncodingError U+E1B0");
  assertThrows(() => {
    ms932Encoder.encode("\uE1B1");
  }, Error, "EncodingError U+E1B1");
  assertThrows(() => {
    ms932Encoder.encode("\uE1B2");
  }, Error, "EncodingError U+E1B2");
  assertThrows(() => {
    ms932Encoder.encode("\uE1B3");
  }, Error, "EncodingError U+E1B3");
  assertThrows(() => {
    ms932Encoder.encode("\uE1B4");
  }, Error, "EncodingError U+E1B4");
  assertThrows(() => {
    ms932Encoder.encode("\uE1B5");
  }, Error, "EncodingError U+E1B5");
  assertThrows(() => {
    ms932Encoder.encode("\uE1B6");
  }, Error, "EncodingError U+E1B6");
  assertThrows(() => {
    ms932Encoder.encode("\uE1B7");
  }, Error, "EncodingError U+E1B7");
  assertThrows(() => {
    ms932Encoder.encode("\uE1B8");
  }, Error, "EncodingError U+E1B8");
  assertThrows(() => {
    ms932Encoder.encode("\uE1B9");
  }, Error, "EncodingError U+E1B9");
  assertThrows(() => {
    ms932Encoder.encode("\uE1BA");
  }, Error, "EncodingError U+E1BA");
  assertThrows(() => {
    ms932Encoder.encode("\uE1BB");
  }, Error, "EncodingError U+E1BB");
  assertThrows(() => {
    ms932Encoder.encode("\uE1BC");
  }, Error, "EncodingError U+E1BC");
  assertThrows(() => {
    ms932Encoder.encode("\uE1BD");
  }, Error, "EncodingError U+E1BD");
  assertThrows(() => {
    ms932Encoder.encode("\uE1BE");
  }, Error, "EncodingError U+E1BE");
  assertThrows(() => {
    ms932Encoder.encode("\uE1BF");
  }, Error, "EncodingError U+E1BF");
  assertThrows(() => {
    ms932Encoder.encode("\uE1C0");
  }, Error, "EncodingError U+E1C0");
  assertThrows(() => {
    ms932Encoder.encode("\uE1C1");
  }, Error, "EncodingError U+E1C1");
  assertThrows(() => {
    ms932Encoder.encode("\uE1C2");
  }, Error, "EncodingError U+E1C2");
  assertThrows(() => {
    ms932Encoder.encode("\uE1C3");
  }, Error, "EncodingError U+E1C3");
  assertThrows(() => {
    ms932Encoder.encode("\uE1C4");
  }, Error, "EncodingError U+E1C4");
  assertThrows(() => {
    ms932Encoder.encode("\uE1C5");
  }, Error, "EncodingError U+E1C5");
  assertThrows(() => {
    ms932Encoder.encode("\uE1C6");
  }, Error, "EncodingError U+E1C6");
  assertThrows(() => {
    ms932Encoder.encode("\uE1C7");
  }, Error, "EncodingError U+E1C7");
  assertThrows(() => {
    ms932Encoder.encode("\uE1C8");
  }, Error, "EncodingError U+E1C8");
  assertThrows(() => {
    ms932Encoder.encode("\uE1C9");
  }, Error, "EncodingError U+E1C9");
  assertThrows(() => {
    ms932Encoder.encode("\uE1CA");
  }, Error, "EncodingError U+E1CA");
  assertThrows(() => {
    ms932Encoder.encode("\uE1CB");
  }, Error, "EncodingError U+E1CB");
  assertThrows(() => {
    ms932Encoder.encode("\uE1CC");
  }, Error, "EncodingError U+E1CC");
  assertThrows(() => {
    ms932Encoder.encode("\uE1CD");
  }, Error, "EncodingError U+E1CD");
  assertThrows(() => {
    ms932Encoder.encode("\uE1CE");
  }, Error, "EncodingError U+E1CE");
  assertThrows(() => {
    ms932Encoder.encode("\uE1CF");
  }, Error, "EncodingError U+E1CF");
  assertThrows(() => {
    ms932Encoder.encode("\uE1D0");
  }, Error, "EncodingError U+E1D0");
  assertThrows(() => {
    ms932Encoder.encode("\uE1D1");
  }, Error, "EncodingError U+E1D1");
  assertThrows(() => {
    ms932Encoder.encode("\uE1D2");
  }, Error, "EncodingError U+E1D2");
  assertThrows(() => {
    ms932Encoder.encode("\uE1D3");
  }, Error, "EncodingError U+E1D3");
  assertThrows(() => {
    ms932Encoder.encode("\uE1D4");
  }, Error, "EncodingError U+E1D4");
  assertThrows(() => {
    ms932Encoder.encode("\uE1D5");
  }, Error, "EncodingError U+E1D5");
  assertThrows(() => {
    ms932Encoder.encode("\uE1D6");
  }, Error, "EncodingError U+E1D6");
  assertThrows(() => {
    ms932Encoder.encode("\uE1D7");
  }, Error, "EncodingError U+E1D7");
  assertThrows(() => {
    ms932Encoder.encode("\uE1D8");
  }, Error, "EncodingError U+E1D8");
  assertThrows(() => {
    ms932Encoder.encode("\uE1D9");
  }, Error, "EncodingError U+E1D9");
  assertThrows(() => {
    ms932Encoder.encode("\uE1DA");
  }, Error, "EncodingError U+E1DA");
  assertThrows(() => {
    ms932Encoder.encode("\uE1DB");
  }, Error, "EncodingError U+E1DB");
  assertThrows(() => {
    ms932Encoder.encode("\uE1DC");
  }, Error, "EncodingError U+E1DC");
  assertThrows(() => {
    ms932Encoder.encode("\uE1DD");
  }, Error, "EncodingError U+E1DD");
  assertThrows(() => {
    ms932Encoder.encode("\uE1DE");
  }, Error, "EncodingError U+E1DE");
  assertThrows(() => {
    ms932Encoder.encode("\uE1DF");
  }, Error, "EncodingError U+E1DF");
  assertThrows(() => {
    ms932Encoder.encode("\uE1E0");
  }, Error, "EncodingError U+E1E0");
  assertThrows(() => {
    ms932Encoder.encode("\uE1E1");
  }, Error, "EncodingError U+E1E1");
  assertThrows(() => {
    ms932Encoder.encode("\uE1E2");
  }, Error, "EncodingError U+E1E2");
  assertThrows(() => {
    ms932Encoder.encode("\uE1E3");
  }, Error, "EncodingError U+E1E3");
  assertThrows(() => {
    ms932Encoder.encode("\uE1E4");
  }, Error, "EncodingError U+E1E4");
  assertThrows(() => {
    ms932Encoder.encode("\uE1E5");
  }, Error, "EncodingError U+E1E5");
  assertThrows(() => {
    ms932Encoder.encode("\uE1E6");
  }, Error, "EncodingError U+E1E6");
  assertThrows(() => {
    ms932Encoder.encode("\uE1E7");
  }, Error, "EncodingError U+E1E7");
  assertThrows(() => {
    ms932Encoder.encode("\uE1E8");
  }, Error, "EncodingError U+E1E8");
  assertThrows(() => {
    ms932Encoder.encode("\uE1E9");
  }, Error, "EncodingError U+E1E9");
  assertThrows(() => {
    ms932Encoder.encode("\uE1EA");
  }, Error, "EncodingError U+E1EA");
  assertThrows(() => {
    ms932Encoder.encode("\uE1EB");
  }, Error, "EncodingError U+E1EB");
  assertThrows(() => {
    ms932Encoder.encode("\uE1EC");
  }, Error, "EncodingError U+E1EC");
  assertThrows(() => {
    ms932Encoder.encode("\uE1ED");
  }, Error, "EncodingError U+E1ED");
  assertThrows(() => {
    ms932Encoder.encode("\uE1EE");
  }, Error, "EncodingError U+E1EE");
  assertThrows(() => {
    ms932Encoder.encode("\uE1EF");
  }, Error, "EncodingError U+E1EF");
  assertThrows(() => {
    ms932Encoder.encode("\uE1F0");
  }, Error, "EncodingError U+E1F0");
  assertThrows(() => {
    ms932Encoder.encode("\uE1F1");
  }, Error, "EncodingError U+E1F1");
  assertThrows(() => {
    ms932Encoder.encode("\uE1F2");
  }, Error, "EncodingError U+E1F2");
  assertThrows(() => {
    ms932Encoder.encode("\uE1F3");
  }, Error, "EncodingError U+E1F3");
  assertThrows(() => {
    ms932Encoder.encode("\uE1F4");
  }, Error, "EncodingError U+E1F4");
  assertThrows(() => {
    ms932Encoder.encode("\uE1F5");
  }, Error, "EncodingError U+E1F5");
  assertThrows(() => {
    ms932Encoder.encode("\uE1F6");
  }, Error, "EncodingError U+E1F6");
  assertThrows(() => {
    ms932Encoder.encode("\uE1F7");
  }, Error, "EncodingError U+E1F7");
  assertThrows(() => {
    ms932Encoder.encode("\uE1F8");
  }, Error, "EncodingError U+E1F8");
  assertThrows(() => {
    ms932Encoder.encode("\uE1F9");
  }, Error, "EncodingError U+E1F9");
  assertThrows(() => {
    ms932Encoder.encode("\uE1FA");
  }, Error, "EncodingError U+E1FA");
  assertThrows(() => {
    ms932Encoder.encode("\uE1FB");
  }, Error, "EncodingError U+E1FB");
  assertThrows(() => {
    ms932Encoder.encode("\uE1FC");
  }, Error, "EncodingError U+E1FC");
  assertThrows(() => {
    ms932Encoder.encode("\uE1FD");
  }, Error, "EncodingError U+E1FD");
  assertThrows(() => {
    ms932Encoder.encode("\uE1FE");
  }, Error, "EncodingError U+E1FE");
  assertThrows(() => {
    ms932Encoder.encode("\uE1FF");
  }, Error, "EncodingError U+E1FF");
  assertThrows(() => {
    ms932Encoder.encode("\uE200");
  }, Error, "EncodingError U+E200");
  assertThrows(() => {
    ms932Encoder.encode("\uE201");
  }, Error, "EncodingError U+E201");
  assertThrows(() => {
    ms932Encoder.encode("\uE202");
  }, Error, "EncodingError U+E202");
  assertThrows(() => {
    ms932Encoder.encode("\uE203");
  }, Error, "EncodingError U+E203");
  assertThrows(() => {
    ms932Encoder.encode("\uE204");
  }, Error, "EncodingError U+E204");
  assertThrows(() => {
    ms932Encoder.encode("\uE205");
  }, Error, "EncodingError U+E205");
  assertThrows(() => {
    ms932Encoder.encode("\uE206");
  }, Error, "EncodingError U+E206");
  assertThrows(() => {
    ms932Encoder.encode("\uE207");
  }, Error, "EncodingError U+E207");
  assertThrows(() => {
    ms932Encoder.encode("\uE208");
  }, Error, "EncodingError U+E208");
  assertThrows(() => {
    ms932Encoder.encode("\uE209");
  }, Error, "EncodingError U+E209");
  assertThrows(() => {
    ms932Encoder.encode("\uE20A");
  }, Error, "EncodingError U+E20A");
  assertThrows(() => {
    ms932Encoder.encode("\uE20B");
  }, Error, "EncodingError U+E20B");
  assertThrows(() => {
    ms932Encoder.encode("\uE20C");
  }, Error, "EncodingError U+E20C");
  assertThrows(() => {
    ms932Encoder.encode("\uE20D");
  }, Error, "EncodingError U+E20D");
  assertThrows(() => {
    ms932Encoder.encode("\uE20E");
  }, Error, "EncodingError U+E20E");
  assertThrows(() => {
    ms932Encoder.encode("\uE20F");
  }, Error, "EncodingError U+E20F");
  assertThrows(() => {
    ms932Encoder.encode("\uE210");
  }, Error, "EncodingError U+E210");
  assertThrows(() => {
    ms932Encoder.encode("\uE211");
  }, Error, "EncodingError U+E211");
  assertThrows(() => {
    ms932Encoder.encode("\uE212");
  }, Error, "EncodingError U+E212");
  assertThrows(() => {
    ms932Encoder.encode("\uE213");
  }, Error, "EncodingError U+E213");
  assertThrows(() => {
    ms932Encoder.encode("\uE214");
  }, Error, "EncodingError U+E214");
  assertThrows(() => {
    ms932Encoder.encode("\uE215");
  }, Error, "EncodingError U+E215");
  assertThrows(() => {
    ms932Encoder.encode("\uE216");
  }, Error, "EncodingError U+E216");
  assertThrows(() => {
    ms932Encoder.encode("\uE217");
  }, Error, "EncodingError U+E217");
  assertThrows(() => {
    ms932Encoder.encode("\uE218");
  }, Error, "EncodingError U+E218");
  assertThrows(() => {
    ms932Encoder.encode("\uE219");
  }, Error, "EncodingError U+E219");
  assertThrows(() => {
    ms932Encoder.encode("\uE21A");
  }, Error, "EncodingError U+E21A");
  assertThrows(() => {
    ms932Encoder.encode("\uE21B");
  }, Error, "EncodingError U+E21B");
  assertThrows(() => {
    ms932Encoder.encode("\uE21C");
  }, Error, "EncodingError U+E21C");
  assertThrows(() => {
    ms932Encoder.encode("\uE21D");
  }, Error, "EncodingError U+E21D");
  assertThrows(() => {
    ms932Encoder.encode("\uE21E");
  }, Error, "EncodingError U+E21E");
  assertThrows(() => {
    ms932Encoder.encode("\uE21F");
  }, Error, "EncodingError U+E21F");
  assertThrows(() => {
    ms932Encoder.encode("\uE220");
  }, Error, "EncodingError U+E220");
  assertThrows(() => {
    ms932Encoder.encode("\uE221");
  }, Error, "EncodingError U+E221");
  assertThrows(() => {
    ms932Encoder.encode("\uE222");
  }, Error, "EncodingError U+E222");
  assertThrows(() => {
    ms932Encoder.encode("\uE223");
  }, Error, "EncodingError U+E223");
  assertThrows(() => {
    ms932Encoder.encode("\uE224");
  }, Error, "EncodingError U+E224");
  assertThrows(() => {
    ms932Encoder.encode("\uE225");
  }, Error, "EncodingError U+E225");
  assertThrows(() => {
    ms932Encoder.encode("\uE226");
  }, Error, "EncodingError U+E226");
  assertThrows(() => {
    ms932Encoder.encode("\uE227");
  }, Error, "EncodingError U+E227");
  assertThrows(() => {
    ms932Encoder.encode("\uE228");
  }, Error, "EncodingError U+E228");
  assertThrows(() => {
    ms932Encoder.encode("\uE229");
  }, Error, "EncodingError U+E229");
  assertThrows(() => {
    ms932Encoder.encode("\uE22A");
  }, Error, "EncodingError U+E22A");
  assertThrows(() => {
    ms932Encoder.encode("\uE22B");
  }, Error, "EncodingError U+E22B");
  assertThrows(() => {
    ms932Encoder.encode("\uE22C");
  }, Error, "EncodingError U+E22C");
  assertThrows(() => {
    ms932Encoder.encode("\uE22D");
  }, Error, "EncodingError U+E22D");
  assertThrows(() => {
    ms932Encoder.encode("\uE22E");
  }, Error, "EncodingError U+E22E");
  assertThrows(() => {
    ms932Encoder.encode("\uE22F");
  }, Error, "EncodingError U+E22F");
  assertThrows(() => {
    ms932Encoder.encode("\uE230");
  }, Error, "EncodingError U+E230");
  assertThrows(() => {
    ms932Encoder.encode("\uE231");
  }, Error, "EncodingError U+E231");
  assertThrows(() => {
    ms932Encoder.encode("\uE232");
  }, Error, "EncodingError U+E232");
  assertThrows(() => {
    ms932Encoder.encode("\uE233");
  }, Error, "EncodingError U+E233");
  assertThrows(() => {
    ms932Encoder.encode("\uE234");
  }, Error, "EncodingError U+E234");
  assertThrows(() => {
    ms932Encoder.encode("\uE235");
  }, Error, "EncodingError U+E235");
  assertThrows(() => {
    ms932Encoder.encode("\uE236");
  }, Error, "EncodingError U+E236");
  assertThrows(() => {
    ms932Encoder.encode("\uE237");
  }, Error, "EncodingError U+E237");
  assertThrows(() => {
    ms932Encoder.encode("\uE238");
  }, Error, "EncodingError U+E238");
  assertThrows(() => {
    ms932Encoder.encode("\uE239");
  }, Error, "EncodingError U+E239");
  assertThrows(() => {
    ms932Encoder.encode("\uE23A");
  }, Error, "EncodingError U+E23A");
  assertThrows(() => {
    ms932Encoder.encode("\uE23B");
  }, Error, "EncodingError U+E23B");
  assertThrows(() => {
    ms932Encoder.encode("\uE23C");
  }, Error, "EncodingError U+E23C");
  assertThrows(() => {
    ms932Encoder.encode("\uE23D");
  }, Error, "EncodingError U+E23D");
  assertThrows(() => {
    ms932Encoder.encode("\uE23E");
  }, Error, "EncodingError U+E23E");
  assertThrows(() => {
    ms932Encoder.encode("\uE23F");
  }, Error, "EncodingError U+E23F");
  assertThrows(() => {
    ms932Encoder.encode("\uE240");
  }, Error, "EncodingError U+E240");
  assertThrows(() => {
    ms932Encoder.encode("\uE241");
  }, Error, "EncodingError U+E241");
  assertThrows(() => {
    ms932Encoder.encode("\uE242");
  }, Error, "EncodingError U+E242");
  assertThrows(() => {
    ms932Encoder.encode("\uE243");
  }, Error, "EncodingError U+E243");
  assertThrows(() => {
    ms932Encoder.encode("\uE244");
  }, Error, "EncodingError U+E244");
  assertThrows(() => {
    ms932Encoder.encode("\uE245");
  }, Error, "EncodingError U+E245");
  assertThrows(() => {
    ms932Encoder.encode("\uE246");
  }, Error, "EncodingError U+E246");
  assertThrows(() => {
    ms932Encoder.encode("\uE247");
  }, Error, "EncodingError U+E247");
  assertThrows(() => {
    ms932Encoder.encode("\uE248");
  }, Error, "EncodingError U+E248");
  assertThrows(() => {
    ms932Encoder.encode("\uE249");
  }, Error, "EncodingError U+E249");
  assertThrows(() => {
    ms932Encoder.encode("\uE24A");
  }, Error, "EncodingError U+E24A");
  assertThrows(() => {
    ms932Encoder.encode("\uE24B");
  }, Error, "EncodingError U+E24B");
  assertThrows(() => {
    ms932Encoder.encode("\uE24C");
  }, Error, "EncodingError U+E24C");
  assertThrows(() => {
    ms932Encoder.encode("\uE24D");
  }, Error, "EncodingError U+E24D");
  assertThrows(() => {
    ms932Encoder.encode("\uE24E");
  }, Error, "EncodingError U+E24E");
  assertThrows(() => {
    ms932Encoder.encode("\uE24F");
  }, Error, "EncodingError U+E24F");
  assertThrows(() => {
    ms932Encoder.encode("\uE250");
  }, Error, "EncodingError U+E250");
  assertThrows(() => {
    ms932Encoder.encode("\uE251");
  }, Error, "EncodingError U+E251");
  assertThrows(() => {
    ms932Encoder.encode("\uE252");
  }, Error, "EncodingError U+E252");
  assertThrows(() => {
    ms932Encoder.encode("\uE253");
  }, Error, "EncodingError U+E253");
  assertThrows(() => {
    ms932Encoder.encode("\uE254");
  }, Error, "EncodingError U+E254");
  assertThrows(() => {
    ms932Encoder.encode("\uE255");
  }, Error, "EncodingError U+E255");
  assertThrows(() => {
    ms932Encoder.encode("\uE256");
  }, Error, "EncodingError U+E256");
  assertThrows(() => {
    ms932Encoder.encode("\uE257");
  }, Error, "EncodingError U+E257");
  assertThrows(() => {
    ms932Encoder.encode("\uE258");
  }, Error, "EncodingError U+E258");
  assertThrows(() => {
    ms932Encoder.encode("\uE259");
  }, Error, "EncodingError U+E259");
  assertThrows(() => {
    ms932Encoder.encode("\uE25A");
  }, Error, "EncodingError U+E25A");
  assertThrows(() => {
    ms932Encoder.encode("\uE25B");
  }, Error, "EncodingError U+E25B");
  assertThrows(() => {
    ms932Encoder.encode("\uE25C");
  }, Error, "EncodingError U+E25C");
  assertThrows(() => {
    ms932Encoder.encode("\uE25D");
  }, Error, "EncodingError U+E25D");
  assertThrows(() => {
    ms932Encoder.encode("\uE25E");
  }, Error, "EncodingError U+E25E");
  assertThrows(() => {
    ms932Encoder.encode("\uE25F");
  }, Error, "EncodingError U+E25F");
  assertThrows(() => {
    ms932Encoder.encode("\uE260");
  }, Error, "EncodingError U+E260");
  assertThrows(() => {
    ms932Encoder.encode("\uE261");
  }, Error, "EncodingError U+E261");
  assertThrows(() => {
    ms932Encoder.encode("\uE262");
  }, Error, "EncodingError U+E262");
  assertThrows(() => {
    ms932Encoder.encode("\uE263");
  }, Error, "EncodingError U+E263");
  assertThrows(() => {
    ms932Encoder.encode("\uE264");
  }, Error, "EncodingError U+E264");
  assertThrows(() => {
    ms932Encoder.encode("\uE265");
  }, Error, "EncodingError U+E265");
  assertThrows(() => {
    ms932Encoder.encode("\uE266");
  }, Error, "EncodingError U+E266");
  assertThrows(() => {
    ms932Encoder.encode("\uE267");
  }, Error, "EncodingError U+E267");
  assertThrows(() => {
    ms932Encoder.encode("\uE268");
  }, Error, "EncodingError U+E268");
  assertThrows(() => {
    ms932Encoder.encode("\uE269");
  }, Error, "EncodingError U+E269");
  assertThrows(() => {
    ms932Encoder.encode("\uE26A");
  }, Error, "EncodingError U+E26A");
  assertThrows(() => {
    ms932Encoder.encode("\uE26B");
  }, Error, "EncodingError U+E26B");
  assertThrows(() => {
    ms932Encoder.encode("\uE26C");
  }, Error, "EncodingError U+E26C");
  assertThrows(() => {
    ms932Encoder.encode("\uE26D");
  }, Error, "EncodingError U+E26D");
  assertThrows(() => {
    ms932Encoder.encode("\uE26E");
  }, Error, "EncodingError U+E26E");
  assertThrows(() => {
    ms932Encoder.encode("\uE26F");
  }, Error, "EncodingError U+E26F");
  assertThrows(() => {
    ms932Encoder.encode("\uE270");
  }, Error, "EncodingError U+E270");
  assertThrows(() => {
    ms932Encoder.encode("\uE271");
  }, Error, "EncodingError U+E271");
  assertThrows(() => {
    ms932Encoder.encode("\uE272");
  }, Error, "EncodingError U+E272");
  assertThrows(() => {
    ms932Encoder.encode("\uE273");
  }, Error, "EncodingError U+E273");
  assertThrows(() => {
    ms932Encoder.encode("\uE274");
  }, Error, "EncodingError U+E274");
  assertThrows(() => {
    ms932Encoder.encode("\uE275");
  }, Error, "EncodingError U+E275");
  assertThrows(() => {
    ms932Encoder.encode("\uE276");
  }, Error, "EncodingError U+E276");
  assertThrows(() => {
    ms932Encoder.encode("\uE277");
  }, Error, "EncodingError U+E277");
  assertThrows(() => {
    ms932Encoder.encode("\uE278");
  }, Error, "EncodingError U+E278");
  assertThrows(() => {
    ms932Encoder.encode("\uE279");
  }, Error, "EncodingError U+E279");
  assertThrows(() => {
    ms932Encoder.encode("\uE27A");
  }, Error, "EncodingError U+E27A");
  assertThrows(() => {
    ms932Encoder.encode("\uE27B");
  }, Error, "EncodingError U+E27B");
  assertThrows(() => {
    ms932Encoder.encode("\uE27C");
  }, Error, "EncodingError U+E27C");
  assertThrows(() => {
    ms932Encoder.encode("\uE27D");
  }, Error, "EncodingError U+E27D");
  assertThrows(() => {
    ms932Encoder.encode("\uE27E");
  }, Error, "EncodingError U+E27E");
  assertThrows(() => {
    ms932Encoder.encode("\uE27F");
  }, Error, "EncodingError U+E27F");
  assertThrows(() => {
    ms932Encoder.encode("\uE280");
  }, Error, "EncodingError U+E280");
  assertThrows(() => {
    ms932Encoder.encode("\uE281");
  }, Error, "EncodingError U+E281");
  assertThrows(() => {
    ms932Encoder.encode("\uE282");
  }, Error, "EncodingError U+E282");
  assertThrows(() => {
    ms932Encoder.encode("\uE283");
  }, Error, "EncodingError U+E283");
  assertThrows(() => {
    ms932Encoder.encode("\uE284");
  }, Error, "EncodingError U+E284");
  assertThrows(() => {
    ms932Encoder.encode("\uE285");
  }, Error, "EncodingError U+E285");
  assertThrows(() => {
    ms932Encoder.encode("\uE286");
  }, Error, "EncodingError U+E286");
  assertThrows(() => {
    ms932Encoder.encode("\uE287");
  }, Error, "EncodingError U+E287");
  assertThrows(() => {
    ms932Encoder.encode("\uE288");
  }, Error, "EncodingError U+E288");
  assertThrows(() => {
    ms932Encoder.encode("\uE289");
  }, Error, "EncodingError U+E289");
  assertThrows(() => {
    ms932Encoder.encode("\uE28A");
  }, Error, "EncodingError U+E28A");
  assertThrows(() => {
    ms932Encoder.encode("\uE28B");
  }, Error, "EncodingError U+E28B");
  assertThrows(() => {
    ms932Encoder.encode("\uE28C");
  }, Error, "EncodingError U+E28C");
  assertThrows(() => {
    ms932Encoder.encode("\uE28D");
  }, Error, "EncodingError U+E28D");
  assertThrows(() => {
    ms932Encoder.encode("\uE28E");
  }, Error, "EncodingError U+E28E");
  assertThrows(() => {
    ms932Encoder.encode("\uE28F");
  }, Error, "EncodingError U+E28F");
  assertThrows(() => {
    ms932Encoder.encode("\uE290");
  }, Error, "EncodingError U+E290");
  assertThrows(() => {
    ms932Encoder.encode("\uE291");
  }, Error, "EncodingError U+E291");
  assertThrows(() => {
    ms932Encoder.encode("\uE292");
  }, Error, "EncodingError U+E292");
  assertThrows(() => {
    ms932Encoder.encode("\uE293");
  }, Error, "EncodingError U+E293");
  assertThrows(() => {
    ms932Encoder.encode("\uE294");
  }, Error, "EncodingError U+E294");
  assertThrows(() => {
    ms932Encoder.encode("\uE295");
  }, Error, "EncodingError U+E295");
  assertThrows(() => {
    ms932Encoder.encode("\uE296");
  }, Error, "EncodingError U+E296");
  assertThrows(() => {
    ms932Encoder.encode("\uE297");
  }, Error, "EncodingError U+E297");
  assertThrows(() => {
    ms932Encoder.encode("\uE298");
  }, Error, "EncodingError U+E298");
  assertThrows(() => {
    ms932Encoder.encode("\uE299");
  }, Error, "EncodingError U+E299");
  assertThrows(() => {
    ms932Encoder.encode("\uE29A");
  }, Error, "EncodingError U+E29A");
  assertThrows(() => {
    ms932Encoder.encode("\uE29B");
  }, Error, "EncodingError U+E29B");
  assertThrows(() => {
    ms932Encoder.encode("\uE29C");
  }, Error, "EncodingError U+E29C");
  assertThrows(() => {
    ms932Encoder.encode("\uE29D");
  }, Error, "EncodingError U+E29D");
  assertThrows(() => {
    ms932Encoder.encode("\uE29E");
  }, Error, "EncodingError U+E29E");
  assertThrows(() => {
    ms932Encoder.encode("\uE29F");
  }, Error, "EncodingError U+E29F");
  assertThrows(() => {
    ms932Encoder.encode("\uE2A0");
  }, Error, "EncodingError U+E2A0");
  assertThrows(() => {
    ms932Encoder.encode("\uE2A1");
  }, Error, "EncodingError U+E2A1");
  assertThrows(() => {
    ms932Encoder.encode("\uE2A2");
  }, Error, "EncodingError U+E2A2");
  assertThrows(() => {
    ms932Encoder.encode("\uE2A3");
  }, Error, "EncodingError U+E2A3");
  assertThrows(() => {
    ms932Encoder.encode("\uE2A4");
  }, Error, "EncodingError U+E2A4");
  assertThrows(() => {
    ms932Encoder.encode("\uE2A5");
  }, Error, "EncodingError U+E2A5");
  assertThrows(() => {
    ms932Encoder.encode("\uE2A6");
  }, Error, "EncodingError U+E2A6");
  assertThrows(() => {
    ms932Encoder.encode("\uE2A7");
  }, Error, "EncodingError U+E2A7");
  assertThrows(() => {
    ms932Encoder.encode("\uE2A8");
  }, Error, "EncodingError U+E2A8");
  assertThrows(() => {
    ms932Encoder.encode("\uE2A9");
  }, Error, "EncodingError U+E2A9");
  assertThrows(() => {
    ms932Encoder.encode("\uE2AA");
  }, Error, "EncodingError U+E2AA");
  assertThrows(() => {
    ms932Encoder.encode("\uE2AB");
  }, Error, "EncodingError U+E2AB");
  assertThrows(() => {
    ms932Encoder.encode("\uE2AC");
  }, Error, "EncodingError U+E2AC");
  assertThrows(() => {
    ms932Encoder.encode("\uE2AD");
  }, Error, "EncodingError U+E2AD");
  assertThrows(() => {
    ms932Encoder.encode("\uE2AE");
  }, Error, "EncodingError U+E2AE");
  assertThrows(() => {
    ms932Encoder.encode("\uE2AF");
  }, Error, "EncodingError U+E2AF");
  assertThrows(() => {
    ms932Encoder.encode("\uE2B0");
  }, Error, "EncodingError U+E2B0");
  assertThrows(() => {
    ms932Encoder.encode("\uE2B1");
  }, Error, "EncodingError U+E2B1");
  assertThrows(() => {
    ms932Encoder.encode("\uE2B2");
  }, Error, "EncodingError U+E2B2");
  assertThrows(() => {
    ms932Encoder.encode("\uE2B3");
  }, Error, "EncodingError U+E2B3");
  assertThrows(() => {
    ms932Encoder.encode("\uE2B4");
  }, Error, "EncodingError U+E2B4");
  assertThrows(() => {
    ms932Encoder.encode("\uE2B5");
  }, Error, "EncodingError U+E2B5");
  assertThrows(() => {
    ms932Encoder.encode("\uE2B6");
  }, Error, "EncodingError U+E2B6");
  assertThrows(() => {
    ms932Encoder.encode("\uE2B7");
  }, Error, "EncodingError U+E2B7");
  assertThrows(() => {
    ms932Encoder.encode("\uE2B8");
  }, Error, "EncodingError U+E2B8");
  assertThrows(() => {
    ms932Encoder.encode("\uE2B9");
  }, Error, "EncodingError U+E2B9");
  assertThrows(() => {
    ms932Encoder.encode("\uE2BA");
  }, Error, "EncodingError U+E2BA");
  assertThrows(() => {
    ms932Encoder.encode("\uE2BB");
  }, Error, "EncodingError U+E2BB");
  assertThrows(() => {
    ms932Encoder.encode("\uE2BC");
  }, Error, "EncodingError U+E2BC");
  assertThrows(() => {
    ms932Encoder.encode("\uE2BD");
  }, Error, "EncodingError U+E2BD");
  assertThrows(() => {
    ms932Encoder.encode("\uE2BE");
  }, Error, "EncodingError U+E2BE");
  assertThrows(() => {
    ms932Encoder.encode("\uE2BF");
  }, Error, "EncodingError U+E2BF");
  assertThrows(() => {
    ms932Encoder.encode("\uE2C0");
  }, Error, "EncodingError U+E2C0");
  assertThrows(() => {
    ms932Encoder.encode("\uE2C1");
  }, Error, "EncodingError U+E2C1");
  assertThrows(() => {
    ms932Encoder.encode("\uE2C2");
  }, Error, "EncodingError U+E2C2");
  assertThrows(() => {
    ms932Encoder.encode("\uE2C3");
  }, Error, "EncodingError U+E2C3");
  assertThrows(() => {
    ms932Encoder.encode("\uE2C4");
  }, Error, "EncodingError U+E2C4");
  assertThrows(() => {
    ms932Encoder.encode("\uE2C5");
  }, Error, "EncodingError U+E2C5");
  assertThrows(() => {
    ms932Encoder.encode("\uE2C6");
  }, Error, "EncodingError U+E2C6");
  assertThrows(() => {
    ms932Encoder.encode("\uE2C7");
  }, Error, "EncodingError U+E2C7");
  assertThrows(() => {
    ms932Encoder.encode("\uE2C8");
  }, Error, "EncodingError U+E2C8");
  assertThrows(() => {
    ms932Encoder.encode("\uE2C9");
  }, Error, "EncodingError U+E2C9");
  assertThrows(() => {
    ms932Encoder.encode("\uE2CA");
  }, Error, "EncodingError U+E2CA");
  assertThrows(() => {
    ms932Encoder.encode("\uE2CB");
  }, Error, "EncodingError U+E2CB");
  assertThrows(() => {
    ms932Encoder.encode("\uE2CC");
  }, Error, "EncodingError U+E2CC");
  assertThrows(() => {
    ms932Encoder.encode("\uE2CD");
  }, Error, "EncodingError U+E2CD");
  assertThrows(() => {
    ms932Encoder.encode("\uE2CE");
  }, Error, "EncodingError U+E2CE");
  assertThrows(() => {
    ms932Encoder.encode("\uE2CF");
  }, Error, "EncodingError U+E2CF");
  assertThrows(() => {
    ms932Encoder.encode("\uE2D0");
  }, Error, "EncodingError U+E2D0");
  assertThrows(() => {
    ms932Encoder.encode("\uE2D1");
  }, Error, "EncodingError U+E2D1");
  assertThrows(() => {
    ms932Encoder.encode("\uE2D2");
  }, Error, "EncodingError U+E2D2");
  assertThrows(() => {
    ms932Encoder.encode("\uE2D3");
  }, Error, "EncodingError U+E2D3");
  assertThrows(() => {
    ms932Encoder.encode("\uE2D4");
  }, Error, "EncodingError U+E2D4");
  assertThrows(() => {
    ms932Encoder.encode("\uE2D5");
  }, Error, "EncodingError U+E2D5");
  assertThrows(() => {
    ms932Encoder.encode("\uE2D6");
  }, Error, "EncodingError U+E2D6");
  assertThrows(() => {
    ms932Encoder.encode("\uE2D7");
  }, Error, "EncodingError U+E2D7");
  assertThrows(() => {
    ms932Encoder.encode("\uE2D8");
  }, Error, "EncodingError U+E2D8");
  assertThrows(() => {
    ms932Encoder.encode("\uE2D9");
  }, Error, "EncodingError U+E2D9");
  assertThrows(() => {
    ms932Encoder.encode("\uE2DA");
  }, Error, "EncodingError U+E2DA");
  assertThrows(() => {
    ms932Encoder.encode("\uE2DB");
  }, Error, "EncodingError U+E2DB");
  assertThrows(() => {
    ms932Encoder.encode("\uE2DC");
  }, Error, "EncodingError U+E2DC");
  assertThrows(() => {
    ms932Encoder.encode("\uE2DD");
  }, Error, "EncodingError U+E2DD");
  assertThrows(() => {
    ms932Encoder.encode("\uE2DE");
  }, Error, "EncodingError U+E2DE");
  assertThrows(() => {
    ms932Encoder.encode("\uE2DF");
  }, Error, "EncodingError U+E2DF");
  assertThrows(() => {
    ms932Encoder.encode("\uE2E0");
  }, Error, "EncodingError U+E2E0");
  assertThrows(() => {
    ms932Encoder.encode("\uE2E1");
  }, Error, "EncodingError U+E2E1");
  assertThrows(() => {
    ms932Encoder.encode("\uE2E2");
  }, Error, "EncodingError U+E2E2");
  assertThrows(() => {
    ms932Encoder.encode("\uE2E3");
  }, Error, "EncodingError U+E2E3");
  assertThrows(() => {
    ms932Encoder.encode("\uE2E4");
  }, Error, "EncodingError U+E2E4");
  assertThrows(() => {
    ms932Encoder.encode("\uE2E5");
  }, Error, "EncodingError U+E2E5");
  assertThrows(() => {
    ms932Encoder.encode("\uE2E6");
  }, Error, "EncodingError U+E2E6");
  assertThrows(() => {
    ms932Encoder.encode("\uE2E7");
  }, Error, "EncodingError U+E2E7");
  assertThrows(() => {
    ms932Encoder.encode("\uE2E8");
  }, Error, "EncodingError U+E2E8");
  assertThrows(() => {
    ms932Encoder.encode("\uE2E9");
  }, Error, "EncodingError U+E2E9");
  assertThrows(() => {
    ms932Encoder.encode("\uE2EA");
  }, Error, "EncodingError U+E2EA");
  assertThrows(() => {
    ms932Encoder.encode("\uE2EB");
  }, Error, "EncodingError U+E2EB");
  assertThrows(() => {
    ms932Encoder.encode("\uE2EC");
  }, Error, "EncodingError U+E2EC");
  assertThrows(() => {
    ms932Encoder.encode("\uE2ED");
  }, Error, "EncodingError U+E2ED");
  assertThrows(() => {
    ms932Encoder.encode("\uE2EE");
  }, Error, "EncodingError U+E2EE");
  assertThrows(() => {
    ms932Encoder.encode("\uE2EF");
  }, Error, "EncodingError U+E2EF");
  assertThrows(() => {
    ms932Encoder.encode("\uE2F0");
  }, Error, "EncodingError U+E2F0");
  assertThrows(() => {
    ms932Encoder.encode("\uE2F1");
  }, Error, "EncodingError U+E2F1");
  assertThrows(() => {
    ms932Encoder.encode("\uE2F2");
  }, Error, "EncodingError U+E2F2");
  assertThrows(() => {
    ms932Encoder.encode("\uE2F3");
  }, Error, "EncodingError U+E2F3");
  assertThrows(() => {
    ms932Encoder.encode("\uE2F4");
  }, Error, "EncodingError U+E2F4");
  assertThrows(() => {
    ms932Encoder.encode("\uE2F5");
  }, Error, "EncodingError U+E2F5");
  assertThrows(() => {
    ms932Encoder.encode("\uE2F6");
  }, Error, "EncodingError U+E2F6");
  assertThrows(() => {
    ms932Encoder.encode("\uE2F7");
  }, Error, "EncodingError U+E2F7");
  assertThrows(() => {
    ms932Encoder.encode("\uE2F8");
  }, Error, "EncodingError U+E2F8");
  assertThrows(() => {
    ms932Encoder.encode("\uE2F9");
  }, Error, "EncodingError U+E2F9");
  assertThrows(() => {
    ms932Encoder.encode("\uE2FA");
  }, Error, "EncodingError U+E2FA");
  assertThrows(() => {
    ms932Encoder.encode("\uE2FB");
  }, Error, "EncodingError U+E2FB");
  assertThrows(() => {
    ms932Encoder.encode("\uE2FC");
  }, Error, "EncodingError U+E2FC");
  assertThrows(() => {
    ms932Encoder.encode("\uE2FD");
  }, Error, "EncodingError U+E2FD");
  assertThrows(() => {
    ms932Encoder.encode("\uE2FE");
  }, Error, "EncodingError U+E2FE");
  assertThrows(() => {
    ms932Encoder.encode("\uE2FF");
  }, Error, "EncodingError U+E2FF");
  assertThrows(() => {
    ms932Encoder.encode("\uE300");
  }, Error, "EncodingError U+E300");
  assertThrows(() => {
    ms932Encoder.encode("\uE301");
  }, Error, "EncodingError U+E301");
  assertThrows(() => {
    ms932Encoder.encode("\uE302");
  }, Error, "EncodingError U+E302");
  assertThrows(() => {
    ms932Encoder.encode("\uE303");
  }, Error, "EncodingError U+E303");
  assertThrows(() => {
    ms932Encoder.encode("\uE304");
  }, Error, "EncodingError U+E304");
  assertThrows(() => {
    ms932Encoder.encode("\uE305");
  }, Error, "EncodingError U+E305");
  assertThrows(() => {
    ms932Encoder.encode("\uE306");
  }, Error, "EncodingError U+E306");
  assertThrows(() => {
    ms932Encoder.encode("\uE307");
  }, Error, "EncodingError U+E307");
  assertThrows(() => {
    ms932Encoder.encode("\uE308");
  }, Error, "EncodingError U+E308");
  assertThrows(() => {
    ms932Encoder.encode("\uE309");
  }, Error, "EncodingError U+E309");
  assertThrows(() => {
    ms932Encoder.encode("\uE30A");
  }, Error, "EncodingError U+E30A");
  assertThrows(() => {
    ms932Encoder.encode("\uE30B");
  }, Error, "EncodingError U+E30B");
  assertThrows(() => {
    ms932Encoder.encode("\uE30C");
  }, Error, "EncodingError U+E30C");
  assertThrows(() => {
    ms932Encoder.encode("\uE30D");
  }, Error, "EncodingError U+E30D");
  assertThrows(() => {
    ms932Encoder.encode("\uE30E");
  }, Error, "EncodingError U+E30E");
  assertThrows(() => {
    ms932Encoder.encode("\uE30F");
  }, Error, "EncodingError U+E30F");
  assertThrows(() => {
    ms932Encoder.encode("\uE310");
  }, Error, "EncodingError U+E310");
  assertThrows(() => {
    ms932Encoder.encode("\uE311");
  }, Error, "EncodingError U+E311");
  assertThrows(() => {
    ms932Encoder.encode("\uE312");
  }, Error, "EncodingError U+E312");
  assertThrows(() => {
    ms932Encoder.encode("\uE313");
  }, Error, "EncodingError U+E313");
  assertThrows(() => {
    ms932Encoder.encode("\uE314");
  }, Error, "EncodingError U+E314");
  assertThrows(() => {
    ms932Encoder.encode("\uE315");
  }, Error, "EncodingError U+E315");
  assertThrows(() => {
    ms932Encoder.encode("\uE316");
  }, Error, "EncodingError U+E316");
  assertThrows(() => {
    ms932Encoder.encode("\uE317");
  }, Error, "EncodingError U+E317");
  assertThrows(() => {
    ms932Encoder.encode("\uE318");
  }, Error, "EncodingError U+E318");
  assertThrows(() => {
    ms932Encoder.encode("\uE319");
  }, Error, "EncodingError U+E319");
  assertThrows(() => {
    ms932Encoder.encode("\uE31A");
  }, Error, "EncodingError U+E31A");
  assertThrows(() => {
    ms932Encoder.encode("\uE31B");
  }, Error, "EncodingError U+E31B");
  assertThrows(() => {
    ms932Encoder.encode("\uE31C");
  }, Error, "EncodingError U+E31C");
  assertThrows(() => {
    ms932Encoder.encode("\uE31D");
  }, Error, "EncodingError U+E31D");
  assertThrows(() => {
    ms932Encoder.encode("\uE31E");
  }, Error, "EncodingError U+E31E");
  assertThrows(() => {
    ms932Encoder.encode("\uE31F");
  }, Error, "EncodingError U+E31F");
  assertThrows(() => {
    ms932Encoder.encode("\uE320");
  }, Error, "EncodingError U+E320");
  assertThrows(() => {
    ms932Encoder.encode("\uE321");
  }, Error, "EncodingError U+E321");
  assertThrows(() => {
    ms932Encoder.encode("\uE322");
  }, Error, "EncodingError U+E322");
  assertThrows(() => {
    ms932Encoder.encode("\uE323");
  }, Error, "EncodingError U+E323");
  assertThrows(() => {
    ms932Encoder.encode("\uE324");
  }, Error, "EncodingError U+E324");
  assertThrows(() => {
    ms932Encoder.encode("\uE325");
  }, Error, "EncodingError U+E325");
  assertThrows(() => {
    ms932Encoder.encode("\uE326");
  }, Error, "EncodingError U+E326");
  assertThrows(() => {
    ms932Encoder.encode("\uE327");
  }, Error, "EncodingError U+E327");
  assertThrows(() => {
    ms932Encoder.encode("\uE328");
  }, Error, "EncodingError U+E328");
  assertThrows(() => {
    ms932Encoder.encode("\uE329");
  }, Error, "EncodingError U+E329");
  assertThrows(() => {
    ms932Encoder.encode("\uE32A");
  }, Error, "EncodingError U+E32A");
  assertThrows(() => {
    ms932Encoder.encode("\uE32B");
  }, Error, "EncodingError U+E32B");
  assertThrows(() => {
    ms932Encoder.encode("\uE32C");
  }, Error, "EncodingError U+E32C");
  assertThrows(() => {
    ms932Encoder.encode("\uE32D");
  }, Error, "EncodingError U+E32D");
  assertThrows(() => {
    ms932Encoder.encode("\uE32E");
  }, Error, "EncodingError U+E32E");
  assertThrows(() => {
    ms932Encoder.encode("\uE32F");
  }, Error, "EncodingError U+E32F");
  assertThrows(() => {
    ms932Encoder.encode("\uE330");
  }, Error, "EncodingError U+E330");
  assertThrows(() => {
    ms932Encoder.encode("\uE331");
  }, Error, "EncodingError U+E331");
  assertThrows(() => {
    ms932Encoder.encode("\uE332");
  }, Error, "EncodingError U+E332");
  assertThrows(() => {
    ms932Encoder.encode("\uE333");
  }, Error, "EncodingError U+E333");
  assertThrows(() => {
    ms932Encoder.encode("\uE334");
  }, Error, "EncodingError U+E334");
  assertThrows(() => {
    ms932Encoder.encode("\uE335");
  }, Error, "EncodingError U+E335");
  assertThrows(() => {
    ms932Encoder.encode("\uE336");
  }, Error, "EncodingError U+E336");
  assertThrows(() => {
    ms932Encoder.encode("\uE337");
  }, Error, "EncodingError U+E337");
  assertThrows(() => {
    ms932Encoder.encode("\uE338");
  }, Error, "EncodingError U+E338");
  assertThrows(() => {
    ms932Encoder.encode("\uE339");
  }, Error, "EncodingError U+E339");
  assertThrows(() => {
    ms932Encoder.encode("\uE33A");
  }, Error, "EncodingError U+E33A");
  assertThrows(() => {
    ms932Encoder.encode("\uE33B");
  }, Error, "EncodingError U+E33B");
  assertThrows(() => {
    ms932Encoder.encode("\uE33C");
  }, Error, "EncodingError U+E33C");
  assertThrows(() => {
    ms932Encoder.encode("\uE33D");
  }, Error, "EncodingError U+E33D");
  assertThrows(() => {
    ms932Encoder.encode("\uE33E");
  }, Error, "EncodingError U+E33E");
  assertThrows(() => {
    ms932Encoder.encode("\uE33F");
  }, Error, "EncodingError U+E33F");
  assertThrows(() => {
    ms932Encoder.encode("\uE340");
  }, Error, "EncodingError U+E340");
  assertThrows(() => {
    ms932Encoder.encode("\uE341");
  }, Error, "EncodingError U+E341");
  assertThrows(() => {
    ms932Encoder.encode("\uE342");
  }, Error, "EncodingError U+E342");
  assertThrows(() => {
    ms932Encoder.encode("\uE343");
  }, Error, "EncodingError U+E343");
  assertThrows(() => {
    ms932Encoder.encode("\uE344");
  }, Error, "EncodingError U+E344");
  assertThrows(() => {
    ms932Encoder.encode("\uE345");
  }, Error, "EncodingError U+E345");
  assertThrows(() => {
    ms932Encoder.encode("\uE346");
  }, Error, "EncodingError U+E346");
  assertThrows(() => {
    ms932Encoder.encode("\uE347");
  }, Error, "EncodingError U+E347");
  assertThrows(() => {
    ms932Encoder.encode("\uE348");
  }, Error, "EncodingError U+E348");
  assertThrows(() => {
    ms932Encoder.encode("\uE349");
  }, Error, "EncodingError U+E349");
  assertThrows(() => {
    ms932Encoder.encode("\uE34A");
  }, Error, "EncodingError U+E34A");
  assertThrows(() => {
    ms932Encoder.encode("\uE34B");
  }, Error, "EncodingError U+E34B");
  assertThrows(() => {
    ms932Encoder.encode("\uE34C");
  }, Error, "EncodingError U+E34C");
  assertThrows(() => {
    ms932Encoder.encode("\uE34D");
  }, Error, "EncodingError U+E34D");
  assertThrows(() => {
    ms932Encoder.encode("\uE34E");
  }, Error, "EncodingError U+E34E");
  assertThrows(() => {
    ms932Encoder.encode("\uE34F");
  }, Error, "EncodingError U+E34F");
  assertThrows(() => {
    ms932Encoder.encode("\uE350");
  }, Error, "EncodingError U+E350");
  assertThrows(() => {
    ms932Encoder.encode("\uE351");
  }, Error, "EncodingError U+E351");
  assertThrows(() => {
    ms932Encoder.encode("\uE352");
  }, Error, "EncodingError U+E352");
  assertThrows(() => {
    ms932Encoder.encode("\uE353");
  }, Error, "EncodingError U+E353");
  assertThrows(() => {
    ms932Encoder.encode("\uE354");
  }, Error, "EncodingError U+E354");
  assertThrows(() => {
    ms932Encoder.encode("\uE355");
  }, Error, "EncodingError U+E355");
  assertThrows(() => {
    ms932Encoder.encode("\uE356");
  }, Error, "EncodingError U+E356");
  assertThrows(() => {
    ms932Encoder.encode("\uE357");
  }, Error, "EncodingError U+E357");
  assertThrows(() => {
    ms932Encoder.encode("\uE358");
  }, Error, "EncodingError U+E358");
  assertThrows(() => {
    ms932Encoder.encode("\uE359");
  }, Error, "EncodingError U+E359");
  assertThrows(() => {
    ms932Encoder.encode("\uE35A");
  }, Error, "EncodingError U+E35A");
  assertThrows(() => {
    ms932Encoder.encode("\uE35B");
  }, Error, "EncodingError U+E35B");
  assertThrows(() => {
    ms932Encoder.encode("\uE35C");
  }, Error, "EncodingError U+E35C");
  assertThrows(() => {
    ms932Encoder.encode("\uE35D");
  }, Error, "EncodingError U+E35D");
  assertThrows(() => {
    ms932Encoder.encode("\uE35E");
  }, Error, "EncodingError U+E35E");
  assertThrows(() => {
    ms932Encoder.encode("\uE35F");
  }, Error, "EncodingError U+E35F");
  assertThrows(() => {
    ms932Encoder.encode("\uE360");
  }, Error, "EncodingError U+E360");
  assertThrows(() => {
    ms932Encoder.encode("\uE361");
  }, Error, "EncodingError U+E361");
  assertThrows(() => {
    ms932Encoder.encode("\uE362");
  }, Error, "EncodingError U+E362");
  assertThrows(() => {
    ms932Encoder.encode("\uE363");
  }, Error, "EncodingError U+E363");
  assertThrows(() => {
    ms932Encoder.encode("\uE364");
  }, Error, "EncodingError U+E364");
  assertThrows(() => {
    ms932Encoder.encode("\uE365");
  }, Error, "EncodingError U+E365");
  assertThrows(() => {
    ms932Encoder.encode("\uE366");
  }, Error, "EncodingError U+E366");
  assertThrows(() => {
    ms932Encoder.encode("\uE367");
  }, Error, "EncodingError U+E367");
  assertThrows(() => {
    ms932Encoder.encode("\uE368");
  }, Error, "EncodingError U+E368");
  assertThrows(() => {
    ms932Encoder.encode("\uE369");
  }, Error, "EncodingError U+E369");
  assertThrows(() => {
    ms932Encoder.encode("\uE36A");
  }, Error, "EncodingError U+E36A");
  assertThrows(() => {
    ms932Encoder.encode("\uE36B");
  }, Error, "EncodingError U+E36B");
  assertThrows(() => {
    ms932Encoder.encode("\uE36C");
  }, Error, "EncodingError U+E36C");
  assertThrows(() => {
    ms932Encoder.encode("\uE36D");
  }, Error, "EncodingError U+E36D");
  assertThrows(() => {
    ms932Encoder.encode("\uE36E");
  }, Error, "EncodingError U+E36E");
  assertThrows(() => {
    ms932Encoder.encode("\uE36F");
  }, Error, "EncodingError U+E36F");
  assertThrows(() => {
    ms932Encoder.encode("\uE370");
  }, Error, "EncodingError U+E370");
  assertThrows(() => {
    ms932Encoder.encode("\uE371");
  }, Error, "EncodingError U+E371");
  assertThrows(() => {
    ms932Encoder.encode("\uE372");
  }, Error, "EncodingError U+E372");
  assertThrows(() => {
    ms932Encoder.encode("\uE373");
  }, Error, "EncodingError U+E373");
  assertThrows(() => {
    ms932Encoder.encode("\uE374");
  }, Error, "EncodingError U+E374");
  assertThrows(() => {
    ms932Encoder.encode("\uE375");
  }, Error, "EncodingError U+E375");
  assertThrows(() => {
    ms932Encoder.encode("\uE376");
  }, Error, "EncodingError U+E376");
  assertThrows(() => {
    ms932Encoder.encode("\uE377");
  }, Error, "EncodingError U+E377");
  assertThrows(() => {
    ms932Encoder.encode("\uE378");
  }, Error, "EncodingError U+E378");
  assertThrows(() => {
    ms932Encoder.encode("\uE379");
  }, Error, "EncodingError U+E379");
  assertThrows(() => {
    ms932Encoder.encode("\uE37A");
  }, Error, "EncodingError U+E37A");
  assertThrows(() => {
    ms932Encoder.encode("\uE37B");
  }, Error, "EncodingError U+E37B");
  assertThrows(() => {
    ms932Encoder.encode("\uE37C");
  }, Error, "EncodingError U+E37C");
  assertThrows(() => {
    ms932Encoder.encode("\uE37D");
  }, Error, "EncodingError U+E37D");
  assertThrows(() => {
    ms932Encoder.encode("\uE37E");
  }, Error, "EncodingError U+E37E");
  assertThrows(() => {
    ms932Encoder.encode("\uE37F");
  }, Error, "EncodingError U+E37F");
  assertThrows(() => {
    ms932Encoder.encode("\uE380");
  }, Error, "EncodingError U+E380");
  assertThrows(() => {
    ms932Encoder.encode("\uE381");
  }, Error, "EncodingError U+E381");
  assertThrows(() => {
    ms932Encoder.encode("\uE382");
  }, Error, "EncodingError U+E382");
  assertThrows(() => {
    ms932Encoder.encode("\uE383");
  }, Error, "EncodingError U+E383");
  assertThrows(() => {
    ms932Encoder.encode("\uE384");
  }, Error, "EncodingError U+E384");
  assertThrows(() => {
    ms932Encoder.encode("\uE385");
  }, Error, "EncodingError U+E385");
  assertThrows(() => {
    ms932Encoder.encode("\uE386");
  }, Error, "EncodingError U+E386");
  assertThrows(() => {
    ms932Encoder.encode("\uE387");
  }, Error, "EncodingError U+E387");
  assertThrows(() => {
    ms932Encoder.encode("\uE388");
  }, Error, "EncodingError U+E388");
  assertThrows(() => {
    ms932Encoder.encode("\uE389");
  }, Error, "EncodingError U+E389");
  assertThrows(() => {
    ms932Encoder.encode("\uE38A");
  }, Error, "EncodingError U+E38A");
  assertThrows(() => {
    ms932Encoder.encode("\uE38B");
  }, Error, "EncodingError U+E38B");
  assertThrows(() => {
    ms932Encoder.encode("\uE38C");
  }, Error, "EncodingError U+E38C");
  assertThrows(() => {
    ms932Encoder.encode("\uE38D");
  }, Error, "EncodingError U+E38D");
  assertThrows(() => {
    ms932Encoder.encode("\uE38E");
  }, Error, "EncodingError U+E38E");
  assertThrows(() => {
    ms932Encoder.encode("\uE38F");
  }, Error, "EncodingError U+E38F");
  assertThrows(() => {
    ms932Encoder.encode("\uE390");
  }, Error, "EncodingError U+E390");
  assertThrows(() => {
    ms932Encoder.encode("\uE391");
  }, Error, "EncodingError U+E391");
  assertThrows(() => {
    ms932Encoder.encode("\uE392");
  }, Error, "EncodingError U+E392");
  assertThrows(() => {
    ms932Encoder.encode("\uE393");
  }, Error, "EncodingError U+E393");
  assertThrows(() => {
    ms932Encoder.encode("\uE394");
  }, Error, "EncodingError U+E394");
  assertThrows(() => {
    ms932Encoder.encode("\uE395");
  }, Error, "EncodingError U+E395");
  assertThrows(() => {
    ms932Encoder.encode("\uE396");
  }, Error, "EncodingError U+E396");
  assertThrows(() => {
    ms932Encoder.encode("\uE397");
  }, Error, "EncodingError U+E397");
  assertThrows(() => {
    ms932Encoder.encode("\uE398");
  }, Error, "EncodingError U+E398");
  assertThrows(() => {
    ms932Encoder.encode("\uE399");
  }, Error, "EncodingError U+E399");
  assertThrows(() => {
    ms932Encoder.encode("\uE39A");
  }, Error, "EncodingError U+E39A");
  assertThrows(() => {
    ms932Encoder.encode("\uE39B");
  }, Error, "EncodingError U+E39B");
  assertThrows(() => {
    ms932Encoder.encode("\uE39C");
  }, Error, "EncodingError U+E39C");
  assertThrows(() => {
    ms932Encoder.encode("\uE39D");
  }, Error, "EncodingError U+E39D");
  assertThrows(() => {
    ms932Encoder.encode("\uE39E");
  }, Error, "EncodingError U+E39E");
  assertThrows(() => {
    ms932Encoder.encode("\uE39F");
  }, Error, "EncodingError U+E39F");
  assertThrows(() => {
    ms932Encoder.encode("\uE3A0");
  }, Error, "EncodingError U+E3A0");
  assertThrows(() => {
    ms932Encoder.encode("\uE3A1");
  }, Error, "EncodingError U+E3A1");
  assertThrows(() => {
    ms932Encoder.encode("\uE3A2");
  }, Error, "EncodingError U+E3A2");
  assertThrows(() => {
    ms932Encoder.encode("\uE3A3");
  }, Error, "EncodingError U+E3A3");
  assertThrows(() => {
    ms932Encoder.encode("\uE3A4");
  }, Error, "EncodingError U+E3A4");
  assertThrows(() => {
    ms932Encoder.encode("\uE3A5");
  }, Error, "EncodingError U+E3A5");
  assertThrows(() => {
    ms932Encoder.encode("\uE3A6");
  }, Error, "EncodingError U+E3A6");
  assertThrows(() => {
    ms932Encoder.encode("\uE3A7");
  }, Error, "EncodingError U+E3A7");
  assertThrows(() => {
    ms932Encoder.encode("\uE3A8");
  }, Error, "EncodingError U+E3A8");
  assertThrows(() => {
    ms932Encoder.encode("\uE3A9");
  }, Error, "EncodingError U+E3A9");
  assertThrows(() => {
    ms932Encoder.encode("\uE3AA");
  }, Error, "EncodingError U+E3AA");
  assertThrows(() => {
    ms932Encoder.encode("\uE3AB");
  }, Error, "EncodingError U+E3AB");
  assertThrows(() => {
    ms932Encoder.encode("\uE3AC");
  }, Error, "EncodingError U+E3AC");
  assertThrows(() => {
    ms932Encoder.encode("\uE3AD");
  }, Error, "EncodingError U+E3AD");
  assertThrows(() => {
    ms932Encoder.encode("\uE3AE");
  }, Error, "EncodingError U+E3AE");
  assertThrows(() => {
    ms932Encoder.encode("\uE3AF");
  }, Error, "EncodingError U+E3AF");
  assertThrows(() => {
    ms932Encoder.encode("\uE3B0");
  }, Error, "EncodingError U+E3B0");
  assertThrows(() => {
    ms932Encoder.encode("\uE3B1");
  }, Error, "EncodingError U+E3B1");
  assertThrows(() => {
    ms932Encoder.encode("\uE3B2");
  }, Error, "EncodingError U+E3B2");
  assertThrows(() => {
    ms932Encoder.encode("\uE3B3");
  }, Error, "EncodingError U+E3B3");
  assertThrows(() => {
    ms932Encoder.encode("\uE3B4");
  }, Error, "EncodingError U+E3B4");
  assertThrows(() => {
    ms932Encoder.encode("\uE3B5");
  }, Error, "EncodingError U+E3B5");
  assertThrows(() => {
    ms932Encoder.encode("\uE3B6");
  }, Error, "EncodingError U+E3B6");
  assertThrows(() => {
    ms932Encoder.encode("\uE3B7");
  }, Error, "EncodingError U+E3B7");
  assertThrows(() => {
    ms932Encoder.encode("\uE3B8");
  }, Error, "EncodingError U+E3B8");
  assertThrows(() => {
    ms932Encoder.encode("\uE3B9");
  }, Error, "EncodingError U+E3B9");
  assertThrows(() => {
    ms932Encoder.encode("\uE3BA");
  }, Error, "EncodingError U+E3BA");
  assertThrows(() => {
    ms932Encoder.encode("\uE3BB");
  }, Error, "EncodingError U+E3BB");
  assertThrows(() => {
    ms932Encoder.encode("\uE3BC");
  }, Error, "EncodingError U+E3BC");
  assertThrows(() => {
    ms932Encoder.encode("\uE3BD");
  }, Error, "EncodingError U+E3BD");
  assertThrows(() => {
    ms932Encoder.encode("\uE3BE");
  }, Error, "EncodingError U+E3BE");
  assertThrows(() => {
    ms932Encoder.encode("\uE3BF");
  }, Error, "EncodingError U+E3BF");
  assertThrows(() => {
    ms932Encoder.encode("\uE3C0");
  }, Error, "EncodingError U+E3C0");
  assertThrows(() => {
    ms932Encoder.encode("\uE3C1");
  }, Error, "EncodingError U+E3C1");
  assertThrows(() => {
    ms932Encoder.encode("\uE3C2");
  }, Error, "EncodingError U+E3C2");
  assertThrows(() => {
    ms932Encoder.encode("\uE3C3");
  }, Error, "EncodingError U+E3C3");
  assertThrows(() => {
    ms932Encoder.encode("\uE3C4");
  }, Error, "EncodingError U+E3C4");
  assertThrows(() => {
    ms932Encoder.encode("\uE3C5");
  }, Error, "EncodingError U+E3C5");
  assertThrows(() => {
    ms932Encoder.encode("\uE3C6");
  }, Error, "EncodingError U+E3C6");
  assertThrows(() => {
    ms932Encoder.encode("\uE3C7");
  }, Error, "EncodingError U+E3C7");
  assertThrows(() => {
    ms932Encoder.encode("\uE3C8");
  }, Error, "EncodingError U+E3C8");
  assertThrows(() => {
    ms932Encoder.encode("\uE3C9");
  }, Error, "EncodingError U+E3C9");
  assertThrows(() => {
    ms932Encoder.encode("\uE3CA");
  }, Error, "EncodingError U+E3CA");
  assertThrows(() => {
    ms932Encoder.encode("\uE3CB");
  }, Error, "EncodingError U+E3CB");
  assertThrows(() => {
    ms932Encoder.encode("\uE3CC");
  }, Error, "EncodingError U+E3CC");
  assertThrows(() => {
    ms932Encoder.encode("\uE3CD");
  }, Error, "EncodingError U+E3CD");
  assertThrows(() => {
    ms932Encoder.encode("\uE3CE");
  }, Error, "EncodingError U+E3CE");
  assertThrows(() => {
    ms932Encoder.encode("\uE3CF");
  }, Error, "EncodingError U+E3CF");
  assertThrows(() => {
    ms932Encoder.encode("\uE3D0");
  }, Error, "EncodingError U+E3D0");
  assertThrows(() => {
    ms932Encoder.encode("\uE3D1");
  }, Error, "EncodingError U+E3D1");
  assertThrows(() => {
    ms932Encoder.encode("\uE3D2");
  }, Error, "EncodingError U+E3D2");
  assertThrows(() => {
    ms932Encoder.encode("\uE3D3");
  }, Error, "EncodingError U+E3D3");
  assertThrows(() => {
    ms932Encoder.encode("\uE3D4");
  }, Error, "EncodingError U+E3D4");
  assertThrows(() => {
    ms932Encoder.encode("\uE3D5");
  }, Error, "EncodingError U+E3D5");
  assertThrows(() => {
    ms932Encoder.encode("\uE3D6");
  }, Error, "EncodingError U+E3D6");
  assertThrows(() => {
    ms932Encoder.encode("\uE3D7");
  }, Error, "EncodingError U+E3D7");
  assertThrows(() => {
    ms932Encoder.encode("\uE3D8");
  }, Error, "EncodingError U+E3D8");
  assertThrows(() => {
    ms932Encoder.encode("\uE3D9");
  }, Error, "EncodingError U+E3D9");
  assertThrows(() => {
    ms932Encoder.encode("\uE3DA");
  }, Error, "EncodingError U+E3DA");
  assertThrows(() => {
    ms932Encoder.encode("\uE3DB");
  }, Error, "EncodingError U+E3DB");
  assertThrows(() => {
    ms932Encoder.encode("\uE3DC");
  }, Error, "EncodingError U+E3DC");
  assertThrows(() => {
    ms932Encoder.encode("\uE3DD");
  }, Error, "EncodingError U+E3DD");
  assertThrows(() => {
    ms932Encoder.encode("\uE3DE");
  }, Error, "EncodingError U+E3DE");
  assertThrows(() => {
    ms932Encoder.encode("\uE3DF");
  }, Error, "EncodingError U+E3DF");
  assertThrows(() => {
    ms932Encoder.encode("\uE3E0");
  }, Error, "EncodingError U+E3E0");
  assertThrows(() => {
    ms932Encoder.encode("\uE3E1");
  }, Error, "EncodingError U+E3E1");
  assertThrows(() => {
    ms932Encoder.encode("\uE3E2");
  }, Error, "EncodingError U+E3E2");
  assertThrows(() => {
    ms932Encoder.encode("\uE3E3");
  }, Error, "EncodingError U+E3E3");
  assertThrows(() => {
    ms932Encoder.encode("\uE3E4");
  }, Error, "EncodingError U+E3E4");
  assertThrows(() => {
    ms932Encoder.encode("\uE3E5");
  }, Error, "EncodingError U+E3E5");
  assertThrows(() => {
    ms932Encoder.encode("\uE3E6");
  }, Error, "EncodingError U+E3E6");
  assertThrows(() => {
    ms932Encoder.encode("\uE3E7");
  }, Error, "EncodingError U+E3E7");
  assertThrows(() => {
    ms932Encoder.encode("\uE3E8");
  }, Error, "EncodingError U+E3E8");
  assertThrows(() => {
    ms932Encoder.encode("\uE3E9");
  }, Error, "EncodingError U+E3E9");
  assertThrows(() => {
    ms932Encoder.encode("\uE3EA");
  }, Error, "EncodingError U+E3EA");
  assertThrows(() => {
    ms932Encoder.encode("\uE3EB");
  }, Error, "EncodingError U+E3EB");
  assertThrows(() => {
    ms932Encoder.encode("\uE3EC");
  }, Error, "EncodingError U+E3EC");
  assertThrows(() => {
    ms932Encoder.encode("\uE3ED");
  }, Error, "EncodingError U+E3ED");
  assertThrows(() => {
    ms932Encoder.encode("\uE3EE");
  }, Error, "EncodingError U+E3EE");
  assertThrows(() => {
    ms932Encoder.encode("\uE3EF");
  }, Error, "EncodingError U+E3EF");
  assertThrows(() => {
    ms932Encoder.encode("\uE3F0");
  }, Error, "EncodingError U+E3F0");
  assertThrows(() => {
    ms932Encoder.encode("\uE3F1");
  }, Error, "EncodingError U+E3F1");
  assertThrows(() => {
    ms932Encoder.encode("\uE3F2");
  }, Error, "EncodingError U+E3F2");
  assertThrows(() => {
    ms932Encoder.encode("\uE3F3");
  }, Error, "EncodingError U+E3F3");
  assertThrows(() => {
    ms932Encoder.encode("\uE3F4");
  }, Error, "EncodingError U+E3F4");
  assertThrows(() => {
    ms932Encoder.encode("\uE3F5");
  }, Error, "EncodingError U+E3F5");
  assertThrows(() => {
    ms932Encoder.encode("\uE3F6");
  }, Error, "EncodingError U+E3F6");
  assertThrows(() => {
    ms932Encoder.encode("\uE3F7");
  }, Error, "EncodingError U+E3F7");
  assertThrows(() => {
    ms932Encoder.encode("\uE3F8");
  }, Error, "EncodingError U+E3F8");
  assertThrows(() => {
    ms932Encoder.encode("\uE3F9");
  }, Error, "EncodingError U+E3F9");
  assertThrows(() => {
    ms932Encoder.encode("\uE3FA");
  }, Error, "EncodingError U+E3FA");
  assertThrows(() => {
    ms932Encoder.encode("\uE3FB");
  }, Error, "EncodingError U+E3FB");
  assertThrows(() => {
    ms932Encoder.encode("\uE3FC");
  }, Error, "EncodingError U+E3FC");
  assertThrows(() => {
    ms932Encoder.encode("\uE3FD");
  }, Error, "EncodingError U+E3FD");
  assertThrows(() => {
    ms932Encoder.encode("\uE3FE");
  }, Error, "EncodingError U+E3FE");
  assertThrows(() => {
    ms932Encoder.encode("\uE3FF");
  }, Error, "EncodingError U+E3FF");
  assertThrows(() => {
    ms932Encoder.encode("\uE400");
  }, Error, "EncodingError U+E400");
  assertThrows(() => {
    ms932Encoder.encode("\uE401");
  }, Error, "EncodingError U+E401");
  assertThrows(() => {
    ms932Encoder.encode("\uE402");
  }, Error, "EncodingError U+E402");
  assertThrows(() => {
    ms932Encoder.encode("\uE403");
  }, Error, "EncodingError U+E403");
  assertThrows(() => {
    ms932Encoder.encode("\uE404");
  }, Error, "EncodingError U+E404");
  assertThrows(() => {
    ms932Encoder.encode("\uE405");
  }, Error, "EncodingError U+E405");
  assertThrows(() => {
    ms932Encoder.encode("\uE406");
  }, Error, "EncodingError U+E406");
  assertThrows(() => {
    ms932Encoder.encode("\uE407");
  }, Error, "EncodingError U+E407");
  assertThrows(() => {
    ms932Encoder.encode("\uE408");
  }, Error, "EncodingError U+E408");
  assertThrows(() => {
    ms932Encoder.encode("\uE409");
  }, Error, "EncodingError U+E409");
  assertThrows(() => {
    ms932Encoder.encode("\uE40A");
  }, Error, "EncodingError U+E40A");
  assertThrows(() => {
    ms932Encoder.encode("\uE40B");
  }, Error, "EncodingError U+E40B");
  assertThrows(() => {
    ms932Encoder.encode("\uE40C");
  }, Error, "EncodingError U+E40C");
  assertThrows(() => {
    ms932Encoder.encode("\uE40D");
  }, Error, "EncodingError U+E40D");
  assertThrows(() => {
    ms932Encoder.encode("\uE40E");
  }, Error, "EncodingError U+E40E");
  assertThrows(() => {
    ms932Encoder.encode("\uE40F");
  }, Error, "EncodingError U+E40F");
  assertThrows(() => {
    ms932Encoder.encode("\uE410");
  }, Error, "EncodingError U+E410");
  assertThrows(() => {
    ms932Encoder.encode("\uE411");
  }, Error, "EncodingError U+E411");
  assertThrows(() => {
    ms932Encoder.encode("\uE412");
  }, Error, "EncodingError U+E412");
  assertThrows(() => {
    ms932Encoder.encode("\uE413");
  }, Error, "EncodingError U+E413");
  assertThrows(() => {
    ms932Encoder.encode("\uE414");
  }, Error, "EncodingError U+E414");
  assertThrows(() => {
    ms932Encoder.encode("\uE415");
  }, Error, "EncodingError U+E415");
  assertThrows(() => {
    ms932Encoder.encode("\uE416");
  }, Error, "EncodingError U+E416");
  assertThrows(() => {
    ms932Encoder.encode("\uE417");
  }, Error, "EncodingError U+E417");
  assertThrows(() => {
    ms932Encoder.encode("\uE418");
  }, Error, "EncodingError U+E418");
  assertThrows(() => {
    ms932Encoder.encode("\uE419");
  }, Error, "EncodingError U+E419");
  assertThrows(() => {
    ms932Encoder.encode("\uE41A");
  }, Error, "EncodingError U+E41A");
  assertThrows(() => {
    ms932Encoder.encode("\uE41B");
  }, Error, "EncodingError U+E41B");
  assertThrows(() => {
    ms932Encoder.encode("\uE41C");
  }, Error, "EncodingError U+E41C");
  assertThrows(() => {
    ms932Encoder.encode("\uE41D");
  }, Error, "EncodingError U+E41D");
  assertThrows(() => {
    ms932Encoder.encode("\uE41E");
  }, Error, "EncodingError U+E41E");
  assertThrows(() => {
    ms932Encoder.encode("\uE41F");
  }, Error, "EncodingError U+E41F");
  assertThrows(() => {
    ms932Encoder.encode("\uE420");
  }, Error, "EncodingError U+E420");
  assertThrows(() => {
    ms932Encoder.encode("\uE421");
  }, Error, "EncodingError U+E421");
  assertThrows(() => {
    ms932Encoder.encode("\uE422");
  }, Error, "EncodingError U+E422");
  assertThrows(() => {
    ms932Encoder.encode("\uE423");
  }, Error, "EncodingError U+E423");
  assertThrows(() => {
    ms932Encoder.encode("\uE424");
  }, Error, "EncodingError U+E424");
  assertThrows(() => {
    ms932Encoder.encode("\uE425");
  }, Error, "EncodingError U+E425");
  assertThrows(() => {
    ms932Encoder.encode("\uE426");
  }, Error, "EncodingError U+E426");
  assertThrows(() => {
    ms932Encoder.encode("\uE427");
  }, Error, "EncodingError U+E427");
  assertThrows(() => {
    ms932Encoder.encode("\uE428");
  }, Error, "EncodingError U+E428");
  assertThrows(() => {
    ms932Encoder.encode("\uE429");
  }, Error, "EncodingError U+E429");
  assertThrows(() => {
    ms932Encoder.encode("\uE42A");
  }, Error, "EncodingError U+E42A");
  assertThrows(() => {
    ms932Encoder.encode("\uE42B");
  }, Error, "EncodingError U+E42B");
  assertThrows(() => {
    ms932Encoder.encode("\uE42C");
  }, Error, "EncodingError U+E42C");
  assertThrows(() => {
    ms932Encoder.encode("\uE42D");
  }, Error, "EncodingError U+E42D");
  assertThrows(() => {
    ms932Encoder.encode("\uE42E");
  }, Error, "EncodingError U+E42E");
  assertThrows(() => {
    ms932Encoder.encode("\uE42F");
  }, Error, "EncodingError U+E42F");
  assertThrows(() => {
    ms932Encoder.encode("\uE430");
  }, Error, "EncodingError U+E430");
  assertThrows(() => {
    ms932Encoder.encode("\uE431");
  }, Error, "EncodingError U+E431");
  assertThrows(() => {
    ms932Encoder.encode("\uE432");
  }, Error, "EncodingError U+E432");
  assertThrows(() => {
    ms932Encoder.encode("\uE433");
  }, Error, "EncodingError U+E433");
  assertThrows(() => {
    ms932Encoder.encode("\uE434");
  }, Error, "EncodingError U+E434");
  assertThrows(() => {
    ms932Encoder.encode("\uE435");
  }, Error, "EncodingError U+E435");
  assertThrows(() => {
    ms932Encoder.encode("\uE436");
  }, Error, "EncodingError U+E436");
  assertThrows(() => {
    ms932Encoder.encode("\uE437");
  }, Error, "EncodingError U+E437");
  assertThrows(() => {
    ms932Encoder.encode("\uE438");
  }, Error, "EncodingError U+E438");
  assertThrows(() => {
    ms932Encoder.encode("\uE439");
  }, Error, "EncodingError U+E439");
  assertThrows(() => {
    ms932Encoder.encode("\uE43A");
  }, Error, "EncodingError U+E43A");
  assertThrows(() => {
    ms932Encoder.encode("\uE43B");
  }, Error, "EncodingError U+E43B");
  assertThrows(() => {
    ms932Encoder.encode("\uE43C");
  }, Error, "EncodingError U+E43C");
  assertThrows(() => {
    ms932Encoder.encode("\uE43D");
  }, Error, "EncodingError U+E43D");
  assertThrows(() => {
    ms932Encoder.encode("\uE43E");
  }, Error, "EncodingError U+E43E");
  assertThrows(() => {
    ms932Encoder.encode("\uE43F");
  }, Error, "EncodingError U+E43F");
  assertThrows(() => {
    ms932Encoder.encode("\uE440");
  }, Error, "EncodingError U+E440");
  assertThrows(() => {
    ms932Encoder.encode("\uE441");
  }, Error, "EncodingError U+E441");
  assertThrows(() => {
    ms932Encoder.encode("\uE442");
  }, Error, "EncodingError U+E442");
  assertThrows(() => {
    ms932Encoder.encode("\uE443");
  }, Error, "EncodingError U+E443");
  assertThrows(() => {
    ms932Encoder.encode("\uE444");
  }, Error, "EncodingError U+E444");
  assertThrows(() => {
    ms932Encoder.encode("\uE445");
  }, Error, "EncodingError U+E445");
  assertThrows(() => {
    ms932Encoder.encode("\uE446");
  }, Error, "EncodingError U+E446");
  assertThrows(() => {
    ms932Encoder.encode("\uE447");
  }, Error, "EncodingError U+E447");
  assertThrows(() => {
    ms932Encoder.encode("\uE448");
  }, Error, "EncodingError U+E448");
  assertThrows(() => {
    ms932Encoder.encode("\uE449");
  }, Error, "EncodingError U+E449");
  assertThrows(() => {
    ms932Encoder.encode("\uE44A");
  }, Error, "EncodingError U+E44A");
  assertThrows(() => {
    ms932Encoder.encode("\uE44B");
  }, Error, "EncodingError U+E44B");
  assertThrows(() => {
    ms932Encoder.encode("\uE44C");
  }, Error, "EncodingError U+E44C");
  assertThrows(() => {
    ms932Encoder.encode("\uE44D");
  }, Error, "EncodingError U+E44D");
  assertThrows(() => {
    ms932Encoder.encode("\uE44E");
  }, Error, "EncodingError U+E44E");
  assertThrows(() => {
    ms932Encoder.encode("\uE44F");
  }, Error, "EncodingError U+E44F");
  assertThrows(() => {
    ms932Encoder.encode("\uE450");
  }, Error, "EncodingError U+E450");
  assertThrows(() => {
    ms932Encoder.encode("\uE451");
  }, Error, "EncodingError U+E451");
  assertThrows(() => {
    ms932Encoder.encode("\uE452");
  }, Error, "EncodingError U+E452");
  assertThrows(() => {
    ms932Encoder.encode("\uE453");
  }, Error, "EncodingError U+E453");
  assertThrows(() => {
    ms932Encoder.encode("\uE454");
  }, Error, "EncodingError U+E454");
  assertThrows(() => {
    ms932Encoder.encode("\uE455");
  }, Error, "EncodingError U+E455");
  assertThrows(() => {
    ms932Encoder.encode("\uE456");
  }, Error, "EncodingError U+E456");
  assertThrows(() => {
    ms932Encoder.encode("\uE457");
  }, Error, "EncodingError U+E457");
  assertThrows(() => {
    ms932Encoder.encode("\uE458");
  }, Error, "EncodingError U+E458");
  assertThrows(() => {
    ms932Encoder.encode("\uE459");
  }, Error, "EncodingError U+E459");
  assertThrows(() => {
    ms932Encoder.encode("\uE45A");
  }, Error, "EncodingError U+E45A");
  assertThrows(() => {
    ms932Encoder.encode("\uE45B");
  }, Error, "EncodingError U+E45B");
  assertThrows(() => {
    ms932Encoder.encode("\uE45C");
  }, Error, "EncodingError U+E45C");
  assertThrows(() => {
    ms932Encoder.encode("\uE45D");
  }, Error, "EncodingError U+E45D");
  assertThrows(() => {
    ms932Encoder.encode("\uE45E");
  }, Error, "EncodingError U+E45E");
  assertThrows(() => {
    ms932Encoder.encode("\uE45F");
  }, Error, "EncodingError U+E45F");
  assertThrows(() => {
    ms932Encoder.encode("\uE460");
  }, Error, "EncodingError U+E460");
  assertThrows(() => {
    ms932Encoder.encode("\uE461");
  }, Error, "EncodingError U+E461");
  assertThrows(() => {
    ms932Encoder.encode("\uE462");
  }, Error, "EncodingError U+E462");
  assertThrows(() => {
    ms932Encoder.encode("\uE463");
  }, Error, "EncodingError U+E463");
  assertThrows(() => {
    ms932Encoder.encode("\uE464");
  }, Error, "EncodingError U+E464");
  assertThrows(() => {
    ms932Encoder.encode("\uE465");
  }, Error, "EncodingError U+E465");
  assertThrows(() => {
    ms932Encoder.encode("\uE466");
  }, Error, "EncodingError U+E466");
  assertThrows(() => {
    ms932Encoder.encode("\uE467");
  }, Error, "EncodingError U+E467");
  assertThrows(() => {
    ms932Encoder.encode("\uE468");
  }, Error, "EncodingError U+E468");
  assertThrows(() => {
    ms932Encoder.encode("\uE469");
  }, Error, "EncodingError U+E469");
  assertThrows(() => {
    ms932Encoder.encode("\uE46A");
  }, Error, "EncodingError U+E46A");
  assertThrows(() => {
    ms932Encoder.encode("\uE46B");
  }, Error, "EncodingError U+E46B");
  assertThrows(() => {
    ms932Encoder.encode("\uE46C");
  }, Error, "EncodingError U+E46C");
  assertThrows(() => {
    ms932Encoder.encode("\uE46D");
  }, Error, "EncodingError U+E46D");
  assertThrows(() => {
    ms932Encoder.encode("\uE46E");
  }, Error, "EncodingError U+E46E");
  assertThrows(() => {
    ms932Encoder.encode("\uE46F");
  }, Error, "EncodingError U+E46F");
  assertThrows(() => {
    ms932Encoder.encode("\uE470");
  }, Error, "EncodingError U+E470");
  assertThrows(() => {
    ms932Encoder.encode("\uE471");
  }, Error, "EncodingError U+E471");
  assertThrows(() => {
    ms932Encoder.encode("\uE472");
  }, Error, "EncodingError U+E472");
  assertThrows(() => {
    ms932Encoder.encode("\uE473");
  }, Error, "EncodingError U+E473");
  assertThrows(() => {
    ms932Encoder.encode("\uE474");
  }, Error, "EncodingError U+E474");
  assertThrows(() => {
    ms932Encoder.encode("\uE475");
  }, Error, "EncodingError U+E475");
  assertThrows(() => {
    ms932Encoder.encode("\uE476");
  }, Error, "EncodingError U+E476");
  assertThrows(() => {
    ms932Encoder.encode("\uE477");
  }, Error, "EncodingError U+E477");
  assertThrows(() => {
    ms932Encoder.encode("\uE478");
  }, Error, "EncodingError U+E478");
  assertThrows(() => {
    ms932Encoder.encode("\uE479");
  }, Error, "EncodingError U+E479");
  assertThrows(() => {
    ms932Encoder.encode("\uE47A");
  }, Error, "EncodingError U+E47A");
  assertThrows(() => {
    ms932Encoder.encode("\uE47B");
  }, Error, "EncodingError U+E47B");
  assertThrows(() => {
    ms932Encoder.encode("\uE47C");
  }, Error, "EncodingError U+E47C");
  assertThrows(() => {
    ms932Encoder.encode("\uE47D");
  }, Error, "EncodingError U+E47D");
  assertThrows(() => {
    ms932Encoder.encode("\uE47E");
  }, Error, "EncodingError U+E47E");
  assertThrows(() => {
    ms932Encoder.encode("\uE47F");
  }, Error, "EncodingError U+E47F");
  assertThrows(() => {
    ms932Encoder.encode("\uE480");
  }, Error, "EncodingError U+E480");
  assertThrows(() => {
    ms932Encoder.encode("\uE481");
  }, Error, "EncodingError U+E481");
  assertThrows(() => {
    ms932Encoder.encode("\uE482");
  }, Error, "EncodingError U+E482");
  assertThrows(() => {
    ms932Encoder.encode("\uE483");
  }, Error, "EncodingError U+E483");
  assertThrows(() => {
    ms932Encoder.encode("\uE484");
  }, Error, "EncodingError U+E484");
  assertThrows(() => {
    ms932Encoder.encode("\uE485");
  }, Error, "EncodingError U+E485");
  assertThrows(() => {
    ms932Encoder.encode("\uE486");
  }, Error, "EncodingError U+E486");
  assertThrows(() => {
    ms932Encoder.encode("\uE487");
  }, Error, "EncodingError U+E487");
  assertThrows(() => {
    ms932Encoder.encode("\uE488");
  }, Error, "EncodingError U+E488");
  assertThrows(() => {
    ms932Encoder.encode("\uE489");
  }, Error, "EncodingError U+E489");
  assertThrows(() => {
    ms932Encoder.encode("\uE48A");
  }, Error, "EncodingError U+E48A");
  assertThrows(() => {
    ms932Encoder.encode("\uE48B");
  }, Error, "EncodingError U+E48B");
  assertThrows(() => {
    ms932Encoder.encode("\uE48C");
  }, Error, "EncodingError U+E48C");
  assertThrows(() => {
    ms932Encoder.encode("\uE48D");
  }, Error, "EncodingError U+E48D");
  assertThrows(() => {
    ms932Encoder.encode("\uE48E");
  }, Error, "EncodingError U+E48E");
  assertThrows(() => {
    ms932Encoder.encode("\uE48F");
  }, Error, "EncodingError U+E48F");
  assertThrows(() => {
    ms932Encoder.encode("\uE490");
  }, Error, "EncodingError U+E490");
  assertThrows(() => {
    ms932Encoder.encode("\uE491");
  }, Error, "EncodingError U+E491");
  assertThrows(() => {
    ms932Encoder.encode("\uE492");
  }, Error, "EncodingError U+E492");
  assertThrows(() => {
    ms932Encoder.encode("\uE493");
  }, Error, "EncodingError U+E493");
  assertThrows(() => {
    ms932Encoder.encode("\uE494");
  }, Error, "EncodingError U+E494");
  assertThrows(() => {
    ms932Encoder.encode("\uE495");
  }, Error, "EncodingError U+E495");
  assertThrows(() => {
    ms932Encoder.encode("\uE496");
  }, Error, "EncodingError U+E496");
  assertThrows(() => {
    ms932Encoder.encode("\uE497");
  }, Error, "EncodingError U+E497");
  assertThrows(() => {
    ms932Encoder.encode("\uE498");
  }, Error, "EncodingError U+E498");
  assertThrows(() => {
    ms932Encoder.encode("\uE499");
  }, Error, "EncodingError U+E499");
  assertThrows(() => {
    ms932Encoder.encode("\uE49A");
  }, Error, "EncodingError U+E49A");
  assertThrows(() => {
    ms932Encoder.encode("\uE49B");
  }, Error, "EncodingError U+E49B");
  assertThrows(() => {
    ms932Encoder.encode("\uE49C");
  }, Error, "EncodingError U+E49C");
  assertThrows(() => {
    ms932Encoder.encode("\uE49D");
  }, Error, "EncodingError U+E49D");
  assertThrows(() => {
    ms932Encoder.encode("\uE49E");
  }, Error, "EncodingError U+E49E");
  assertThrows(() => {
    ms932Encoder.encode("\uE49F");
  }, Error, "EncodingError U+E49F");
  assertThrows(() => {
    ms932Encoder.encode("\uE4A0");
  }, Error, "EncodingError U+E4A0");
  assertThrows(() => {
    ms932Encoder.encode("\uE4A1");
  }, Error, "EncodingError U+E4A1");
  assertThrows(() => {
    ms932Encoder.encode("\uE4A2");
  }, Error, "EncodingError U+E4A2");
  assertThrows(() => {
    ms932Encoder.encode("\uE4A3");
  }, Error, "EncodingError U+E4A3");
  assertThrows(() => {
    ms932Encoder.encode("\uE4A4");
  }, Error, "EncodingError U+E4A4");
  assertThrows(() => {
    ms932Encoder.encode("\uE4A5");
  }, Error, "EncodingError U+E4A5");
  assertThrows(() => {
    ms932Encoder.encode("\uE4A6");
  }, Error, "EncodingError U+E4A6");
  assertThrows(() => {
    ms932Encoder.encode("\uE4A7");
  }, Error, "EncodingError U+E4A7");
  assertThrows(() => {
    ms932Encoder.encode("\uE4A8");
  }, Error, "EncodingError U+E4A8");
  assertThrows(() => {
    ms932Encoder.encode("\uE4A9");
  }, Error, "EncodingError U+E4A9");
  assertThrows(() => {
    ms932Encoder.encode("\uE4AA");
  }, Error, "EncodingError U+E4AA");
  assertThrows(() => {
    ms932Encoder.encode("\uE4AB");
  }, Error, "EncodingError U+E4AB");
  assertThrows(() => {
    ms932Encoder.encode("\uE4AC");
  }, Error, "EncodingError U+E4AC");
  assertThrows(() => {
    ms932Encoder.encode("\uE4AD");
  }, Error, "EncodingError U+E4AD");
  assertThrows(() => {
    ms932Encoder.encode("\uE4AE");
  }, Error, "EncodingError U+E4AE");
  assertThrows(() => {
    ms932Encoder.encode("\uE4AF");
  }, Error, "EncodingError U+E4AF");
  assertThrows(() => {
    ms932Encoder.encode("\uE4B0");
  }, Error, "EncodingError U+E4B0");
  assertThrows(() => {
    ms932Encoder.encode("\uE4B1");
  }, Error, "EncodingError U+E4B1");
  assertThrows(() => {
    ms932Encoder.encode("\uE4B2");
  }, Error, "EncodingError U+E4B2");
  assertThrows(() => {
    ms932Encoder.encode("\uE4B3");
  }, Error, "EncodingError U+E4B3");
  assertThrows(() => {
    ms932Encoder.encode("\uE4B4");
  }, Error, "EncodingError U+E4B4");
  assertThrows(() => {
    ms932Encoder.encode("\uE4B5");
  }, Error, "EncodingError U+E4B5");
  assertThrows(() => {
    ms932Encoder.encode("\uE4B6");
  }, Error, "EncodingError U+E4B6");
  assertThrows(() => {
    ms932Encoder.encode("\uE4B7");
  }, Error, "EncodingError U+E4B7");
  assertThrows(() => {
    ms932Encoder.encode("\uE4B8");
  }, Error, "EncodingError U+E4B8");
  assertThrows(() => {
    ms932Encoder.encode("\uE4B9");
  }, Error, "EncodingError U+E4B9");
  assertThrows(() => {
    ms932Encoder.encode("\uE4BA");
  }, Error, "EncodingError U+E4BA");
  assertThrows(() => {
    ms932Encoder.encode("\uE4BB");
  }, Error, "EncodingError U+E4BB");
  assertThrows(() => {
    ms932Encoder.encode("\uE4BC");
  }, Error, "EncodingError U+E4BC");
  assertThrows(() => {
    ms932Encoder.encode("\uE4BD");
  }, Error, "EncodingError U+E4BD");
  assertThrows(() => {
    ms932Encoder.encode("\uE4BE");
  }, Error, "EncodingError U+E4BE");
  assertThrows(() => {
    ms932Encoder.encode("\uE4BF");
  }, Error, "EncodingError U+E4BF");
  assertThrows(() => {
    ms932Encoder.encode("\uE4C0");
  }, Error, "EncodingError U+E4C0");
  assertThrows(() => {
    ms932Encoder.encode("\uE4C1");
  }, Error, "EncodingError U+E4C1");
  assertThrows(() => {
    ms932Encoder.encode("\uE4C2");
  }, Error, "EncodingError U+E4C2");
  assertThrows(() => {
    ms932Encoder.encode("\uE4C3");
  }, Error, "EncodingError U+E4C3");
  assertThrows(() => {
    ms932Encoder.encode("\uE4C4");
  }, Error, "EncodingError U+E4C4");
  assertThrows(() => {
    ms932Encoder.encode("\uE4C5");
  }, Error, "EncodingError U+E4C5");
  assertThrows(() => {
    ms932Encoder.encode("\uE4C6");
  }, Error, "EncodingError U+E4C6");
  assertThrows(() => {
    ms932Encoder.encode("\uE4C7");
  }, Error, "EncodingError U+E4C7");
  assertThrows(() => {
    ms932Encoder.encode("\uE4C8");
  }, Error, "EncodingError U+E4C8");
  assertThrows(() => {
    ms932Encoder.encode("\uE4C9");
  }, Error, "EncodingError U+E4C9");
  assertThrows(() => {
    ms932Encoder.encode("\uE4CA");
  }, Error, "EncodingError U+E4CA");
  assertThrows(() => {
    ms932Encoder.encode("\uE4CB");
  }, Error, "EncodingError U+E4CB");
  assertThrows(() => {
    ms932Encoder.encode("\uE4CC");
  }, Error, "EncodingError U+E4CC");
  assertThrows(() => {
    ms932Encoder.encode("\uE4CD");
  }, Error, "EncodingError U+E4CD");
  assertThrows(() => {
    ms932Encoder.encode("\uE4CE");
  }, Error, "EncodingError U+E4CE");
  assertThrows(() => {
    ms932Encoder.encode("\uE4CF");
  }, Error, "EncodingError U+E4CF");
  assertThrows(() => {
    ms932Encoder.encode("\uE4D0");
  }, Error, "EncodingError U+E4D0");
  assertThrows(() => {
    ms932Encoder.encode("\uE4D1");
  }, Error, "EncodingError U+E4D1");
  assertThrows(() => {
    ms932Encoder.encode("\uE4D2");
  }, Error, "EncodingError U+E4D2");
  assertThrows(() => {
    ms932Encoder.encode("\uE4D3");
  }, Error, "EncodingError U+E4D3");
  assertThrows(() => {
    ms932Encoder.encode("\uE4D4");
  }, Error, "EncodingError U+E4D4");
  assertThrows(() => {
    ms932Encoder.encode("\uE4D5");
  }, Error, "EncodingError U+E4D5");
  assertThrows(() => {
    ms932Encoder.encode("\uE4D6");
  }, Error, "EncodingError U+E4D6");
  assertThrows(() => {
    ms932Encoder.encode("\uE4D7");
  }, Error, "EncodingError U+E4D7");
  assertThrows(() => {
    ms932Encoder.encode("\uE4D8");
  }, Error, "EncodingError U+E4D8");
  assertThrows(() => {
    ms932Encoder.encode("\uE4D9");
  }, Error, "EncodingError U+E4D9");
  assertThrows(() => {
    ms932Encoder.encode("\uE4DA");
  }, Error, "EncodingError U+E4DA");
  assertThrows(() => {
    ms932Encoder.encode("\uE4DB");
  }, Error, "EncodingError U+E4DB");
  assertThrows(() => {
    ms932Encoder.encode("\uE4DC");
  }, Error, "EncodingError U+E4DC");
  assertThrows(() => {
    ms932Encoder.encode("\uE4DD");
  }, Error, "EncodingError U+E4DD");
  assertThrows(() => {
    ms932Encoder.encode("\uE4DE");
  }, Error, "EncodingError U+E4DE");
  assertThrows(() => {
    ms932Encoder.encode("\uE4DF");
  }, Error, "EncodingError U+E4DF");
  assertThrows(() => {
    ms932Encoder.encode("\uE4E0");
  }, Error, "EncodingError U+E4E0");
  assertThrows(() => {
    ms932Encoder.encode("\uE4E1");
  }, Error, "EncodingError U+E4E1");
  assertThrows(() => {
    ms932Encoder.encode("\uE4E2");
  }, Error, "EncodingError U+E4E2");
  assertThrows(() => {
    ms932Encoder.encode("\uE4E3");
  }, Error, "EncodingError U+E4E3");
  assertThrows(() => {
    ms932Encoder.encode("\uE4E4");
  }, Error, "EncodingError U+E4E4");
  assertThrows(() => {
    ms932Encoder.encode("\uE4E5");
  }, Error, "EncodingError U+E4E5");
  assertThrows(() => {
    ms932Encoder.encode("\uE4E6");
  }, Error, "EncodingError U+E4E6");
  assertThrows(() => {
    ms932Encoder.encode("\uE4E7");
  }, Error, "EncodingError U+E4E7");
  assertThrows(() => {
    ms932Encoder.encode("\uE4E8");
  }, Error, "EncodingError U+E4E8");
  assertThrows(() => {
    ms932Encoder.encode("\uE4E9");
  }, Error, "EncodingError U+E4E9");
  assertThrows(() => {
    ms932Encoder.encode("\uE4EA");
  }, Error, "EncodingError U+E4EA");
  assertThrows(() => {
    ms932Encoder.encode("\uE4EB");
  }, Error, "EncodingError U+E4EB");
  assertThrows(() => {
    ms932Encoder.encode("\uE4EC");
  }, Error, "EncodingError U+E4EC");
  assertThrows(() => {
    ms932Encoder.encode("\uE4ED");
  }, Error, "EncodingError U+E4ED");
  assertThrows(() => {
    ms932Encoder.encode("\uE4EE");
  }, Error, "EncodingError U+E4EE");
  assertThrows(() => {
    ms932Encoder.encode("\uE4EF");
  }, Error, "EncodingError U+E4EF");
  assertThrows(() => {
    ms932Encoder.encode("\uE4F0");
  }, Error, "EncodingError U+E4F0");
  assertThrows(() => {
    ms932Encoder.encode("\uE4F1");
  }, Error, "EncodingError U+E4F1");
  assertThrows(() => {
    ms932Encoder.encode("\uE4F2");
  }, Error, "EncodingError U+E4F2");
  assertThrows(() => {
    ms932Encoder.encode("\uE4F3");
  }, Error, "EncodingError U+E4F3");
  assertThrows(() => {
    ms932Encoder.encode("\uE4F4");
  }, Error, "EncodingError U+E4F4");
  assertThrows(() => {
    ms932Encoder.encode("\uE4F5");
  }, Error, "EncodingError U+E4F5");
  assertThrows(() => {
    ms932Encoder.encode("\uE4F6");
  }, Error, "EncodingError U+E4F6");
  assertThrows(() => {
    ms932Encoder.encode("\uE4F7");
  }, Error, "EncodingError U+E4F7");
  assertThrows(() => {
    ms932Encoder.encode("\uE4F8");
  }, Error, "EncodingError U+E4F8");
  assertThrows(() => {
    ms932Encoder.encode("\uE4F9");
  }, Error, "EncodingError U+E4F9");
  assertThrows(() => {
    ms932Encoder.encode("\uE4FA");
  }, Error, "EncodingError U+E4FA");
  assertThrows(() => {
    ms932Encoder.encode("\uE4FB");
  }, Error, "EncodingError U+E4FB");
  assertThrows(() => {
    ms932Encoder.encode("\uE4FC");
  }, Error, "EncodingError U+E4FC");
  assertThrows(() => {
    ms932Encoder.encode("\uE4FD");
  }, Error, "EncodingError U+E4FD");
  assertThrows(() => {
    ms932Encoder.encode("\uE4FE");
  }, Error, "EncodingError U+E4FE");
  assertThrows(() => {
    ms932Encoder.encode("\uE4FF");
  }, Error, "EncodingError U+E4FF");
  assertThrows(() => {
    ms932Encoder.encode("\uE500");
  }, Error, "EncodingError U+E500");
  assertThrows(() => {
    ms932Encoder.encode("\uE501");
  }, Error, "EncodingError U+E501");
  assertThrows(() => {
    ms932Encoder.encode("\uE502");
  }, Error, "EncodingError U+E502");
  assertThrows(() => {
    ms932Encoder.encode("\uE503");
  }, Error, "EncodingError U+E503");
  assertThrows(() => {
    ms932Encoder.encode("\uE504");
  }, Error, "EncodingError U+E504");
  assertThrows(() => {
    ms932Encoder.encode("\uE505");
  }, Error, "EncodingError U+E505");
  assertThrows(() => {
    ms932Encoder.encode("\uE506");
  }, Error, "EncodingError U+E506");
  assertThrows(() => {
    ms932Encoder.encode("\uE507");
  }, Error, "EncodingError U+E507");
  assertThrows(() => {
    ms932Encoder.encode("\uE508");
  }, Error, "EncodingError U+E508");
  assertThrows(() => {
    ms932Encoder.encode("\uE509");
  }, Error, "EncodingError U+E509");
  assertThrows(() => {
    ms932Encoder.encode("\uE50A");
  }, Error, "EncodingError U+E50A");
  assertThrows(() => {
    ms932Encoder.encode("\uE50B");
  }, Error, "EncodingError U+E50B");
  assertThrows(() => {
    ms932Encoder.encode("\uE50C");
  }, Error, "EncodingError U+E50C");
  assertThrows(() => {
    ms932Encoder.encode("\uE50D");
  }, Error, "EncodingError U+E50D");
  assertThrows(() => {
    ms932Encoder.encode("\uE50E");
  }, Error, "EncodingError U+E50E");
  assertThrows(() => {
    ms932Encoder.encode("\uE50F");
  }, Error, "EncodingError U+E50F");
  assertThrows(() => {
    ms932Encoder.encode("\uE510");
  }, Error, "EncodingError U+E510");
  assertThrows(() => {
    ms932Encoder.encode("\uE511");
  }, Error, "EncodingError U+E511");
  assertThrows(() => {
    ms932Encoder.encode("\uE512");
  }, Error, "EncodingError U+E512");
  assertThrows(() => {
    ms932Encoder.encode("\uE513");
  }, Error, "EncodingError U+E513");
  assertThrows(() => {
    ms932Encoder.encode("\uE514");
  }, Error, "EncodingError U+E514");
  assertThrows(() => {
    ms932Encoder.encode("\uE515");
  }, Error, "EncodingError U+E515");
  assertThrows(() => {
    ms932Encoder.encode("\uE516");
  }, Error, "EncodingError U+E516");
  assertThrows(() => {
    ms932Encoder.encode("\uE517");
  }, Error, "EncodingError U+E517");
  assertThrows(() => {
    ms932Encoder.encode("\uE518");
  }, Error, "EncodingError U+E518");
  assertThrows(() => {
    ms932Encoder.encode("\uE519");
  }, Error, "EncodingError U+E519");
  assertThrows(() => {
    ms932Encoder.encode("\uE51A");
  }, Error, "EncodingError U+E51A");
  assertThrows(() => {
    ms932Encoder.encode("\uE51B");
  }, Error, "EncodingError U+E51B");
  assertThrows(() => {
    ms932Encoder.encode("\uE51C");
  }, Error, "EncodingError U+E51C");
  assertThrows(() => {
    ms932Encoder.encode("\uE51D");
  }, Error, "EncodingError U+E51D");
  assertThrows(() => {
    ms932Encoder.encode("\uE51E");
  }, Error, "EncodingError U+E51E");
  assertThrows(() => {
    ms932Encoder.encode("\uE51F");
  }, Error, "EncodingError U+E51F");
  assertThrows(() => {
    ms932Encoder.encode("\uE520");
  }, Error, "EncodingError U+E520");
  assertThrows(() => {
    ms932Encoder.encode("\uE521");
  }, Error, "EncodingError U+E521");
  assertThrows(() => {
    ms932Encoder.encode("\uE522");
  }, Error, "EncodingError U+E522");
  assertThrows(() => {
    ms932Encoder.encode("\uE523");
  }, Error, "EncodingError U+E523");
  assertThrows(() => {
    ms932Encoder.encode("\uE524");
  }, Error, "EncodingError U+E524");
  assertThrows(() => {
    ms932Encoder.encode("\uE525");
  }, Error, "EncodingError U+E525");
  assertThrows(() => {
    ms932Encoder.encode("\uE526");
  }, Error, "EncodingError U+E526");
  assertThrows(() => {
    ms932Encoder.encode("\uE527");
  }, Error, "EncodingError U+E527");
  assertThrows(() => {
    ms932Encoder.encode("\uE528");
  }, Error, "EncodingError U+E528");
  assertThrows(() => {
    ms932Encoder.encode("\uE529");
  }, Error, "EncodingError U+E529");
  assertThrows(() => {
    ms932Encoder.encode("\uE52A");
  }, Error, "EncodingError U+E52A");
  assertThrows(() => {
    ms932Encoder.encode("\uE52B");
  }, Error, "EncodingError U+E52B");
  assertThrows(() => {
    ms932Encoder.encode("\uE52C");
  }, Error, "EncodingError U+E52C");
  assertThrows(() => {
    ms932Encoder.encode("\uE52D");
  }, Error, "EncodingError U+E52D");
  assertThrows(() => {
    ms932Encoder.encode("\uE52E");
  }, Error, "EncodingError U+E52E");
  assertThrows(() => {
    ms932Encoder.encode("\uE52F");
  }, Error, "EncodingError U+E52F");
  assertThrows(() => {
    ms932Encoder.encode("\uE530");
  }, Error, "EncodingError U+E530");
  assertThrows(() => {
    ms932Encoder.encode("\uE531");
  }, Error, "EncodingError U+E531");
  assertThrows(() => {
    ms932Encoder.encode("\uE532");
  }, Error, "EncodingError U+E532");
  assertThrows(() => {
    ms932Encoder.encode("\uE533");
  }, Error, "EncodingError U+E533");
  assertThrows(() => {
    ms932Encoder.encode("\uE534");
  }, Error, "EncodingError U+E534");
  assertThrows(() => {
    ms932Encoder.encode("\uE535");
  }, Error, "EncodingError U+E535");
  assertThrows(() => {
    ms932Encoder.encode("\uE536");
  }, Error, "EncodingError U+E536");
  assertThrows(() => {
    ms932Encoder.encode("\uE537");
  }, Error, "EncodingError U+E537");
  assertThrows(() => {
    ms932Encoder.encode("\uE538");
  }, Error, "EncodingError U+E538");
  assertThrows(() => {
    ms932Encoder.encode("\uE539");
  }, Error, "EncodingError U+E539");
  assertThrows(() => {
    ms932Encoder.encode("\uE53A");
  }, Error, "EncodingError U+E53A");
  assertThrows(() => {
    ms932Encoder.encode("\uE53B");
  }, Error, "EncodingError U+E53B");
  assertThrows(() => {
    ms932Encoder.encode("\uE53C");
  }, Error, "EncodingError U+E53C");
  assertThrows(() => {
    ms932Encoder.encode("\uE53D");
  }, Error, "EncodingError U+E53D");
  assertThrows(() => {
    ms932Encoder.encode("\uE53E");
  }, Error, "EncodingError U+E53E");
  assertThrows(() => {
    ms932Encoder.encode("\uE53F");
  }, Error, "EncodingError U+E53F");
  assertThrows(() => {
    ms932Encoder.encode("\uE540");
  }, Error, "EncodingError U+E540");
  assertThrows(() => {
    ms932Encoder.encode("\uE541");
  }, Error, "EncodingError U+E541");
  assertThrows(() => {
    ms932Encoder.encode("\uE542");
  }, Error, "EncodingError U+E542");
  assertThrows(() => {
    ms932Encoder.encode("\uE543");
  }, Error, "EncodingError U+E543");
  assertThrows(() => {
    ms932Encoder.encode("\uE544");
  }, Error, "EncodingError U+E544");
  assertThrows(() => {
    ms932Encoder.encode("\uE545");
  }, Error, "EncodingError U+E545");
  assertThrows(() => {
    ms932Encoder.encode("\uE546");
  }, Error, "EncodingError U+E546");
  assertThrows(() => {
    ms932Encoder.encode("\uE547");
  }, Error, "EncodingError U+E547");
  assertThrows(() => {
    ms932Encoder.encode("\uE548");
  }, Error, "EncodingError U+E548");
  assertThrows(() => {
    ms932Encoder.encode("\uE549");
  }, Error, "EncodingError U+E549");
  assertThrows(() => {
    ms932Encoder.encode("\uE54A");
  }, Error, "EncodingError U+E54A");
  assertThrows(() => {
    ms932Encoder.encode("\uE54B");
  }, Error, "EncodingError U+E54B");
  assertThrows(() => {
    ms932Encoder.encode("\uE54C");
  }, Error, "EncodingError U+E54C");
  assertThrows(() => {
    ms932Encoder.encode("\uE54D");
  }, Error, "EncodingError U+E54D");
  assertThrows(() => {
    ms932Encoder.encode("\uE54E");
  }, Error, "EncodingError U+E54E");
  assertThrows(() => {
    ms932Encoder.encode("\uE54F");
  }, Error, "EncodingError U+E54F");
  assertThrows(() => {
    ms932Encoder.encode("\uE550");
  }, Error, "EncodingError U+E550");
  assertThrows(() => {
    ms932Encoder.encode("\uE551");
  }, Error, "EncodingError U+E551");
  assertThrows(() => {
    ms932Encoder.encode("\uE552");
  }, Error, "EncodingError U+E552");
  assertThrows(() => {
    ms932Encoder.encode("\uE553");
  }, Error, "EncodingError U+E553");
  assertThrows(() => {
    ms932Encoder.encode("\uE554");
  }, Error, "EncodingError U+E554");
  assertThrows(() => {
    ms932Encoder.encode("\uE555");
  }, Error, "EncodingError U+E555");
  assertThrows(() => {
    ms932Encoder.encode("\uE556");
  }, Error, "EncodingError U+E556");
  assertThrows(() => {
    ms932Encoder.encode("\uE557");
  }, Error, "EncodingError U+E557");
  assertThrows(() => {
    ms932Encoder.encode("\uE558");
  }, Error, "EncodingError U+E558");
  assertThrows(() => {
    ms932Encoder.encode("\uE559");
  }, Error, "EncodingError U+E559");
  assertThrows(() => {
    ms932Encoder.encode("\uE55A");
  }, Error, "EncodingError U+E55A");
  assertThrows(() => {
    ms932Encoder.encode("\uE55B");
  }, Error, "EncodingError U+E55B");
  assertThrows(() => {
    ms932Encoder.encode("\uE55C");
  }, Error, "EncodingError U+E55C");
  assertThrows(() => {
    ms932Encoder.encode("\uE55D");
  }, Error, "EncodingError U+E55D");
  assertThrows(() => {
    ms932Encoder.encode("\uE55E");
  }, Error, "EncodingError U+E55E");
  assertThrows(() => {
    ms932Encoder.encode("\uE55F");
  }, Error, "EncodingError U+E55F");
  assertThrows(() => {
    ms932Encoder.encode("\uE560");
  }, Error, "EncodingError U+E560");
  assertThrows(() => {
    ms932Encoder.encode("\uE561");
  }, Error, "EncodingError U+E561");
  assertThrows(() => {
    ms932Encoder.encode("\uE562");
  }, Error, "EncodingError U+E562");
  assertThrows(() => {
    ms932Encoder.encode("\uE563");
  }, Error, "EncodingError U+E563");
  assertThrows(() => {
    ms932Encoder.encode("\uE564");
  }, Error, "EncodingError U+E564");
  assertThrows(() => {
    ms932Encoder.encode("\uE565");
  }, Error, "EncodingError U+E565");
  assertThrows(() => {
    ms932Encoder.encode("\uE566");
  }, Error, "EncodingError U+E566");
  assertThrows(() => {
    ms932Encoder.encode("\uE567");
  }, Error, "EncodingError U+E567");
  assertThrows(() => {
    ms932Encoder.encode("\uE568");
  }, Error, "EncodingError U+E568");
  assertThrows(() => {
    ms932Encoder.encode("\uE569");
  }, Error, "EncodingError U+E569");
  assertThrows(() => {
    ms932Encoder.encode("\uE56A");
  }, Error, "EncodingError U+E56A");
  assertThrows(() => {
    ms932Encoder.encode("\uE56B");
  }, Error, "EncodingError U+E56B");
  assertThrows(() => {
    ms932Encoder.encode("\uE56C");
  }, Error, "EncodingError U+E56C");
  assertThrows(() => {
    ms932Encoder.encode("\uE56D");
  }, Error, "EncodingError U+E56D");
  assertThrows(() => {
    ms932Encoder.encode("\uE56E");
  }, Error, "EncodingError U+E56E");
  assertThrows(() => {
    ms932Encoder.encode("\uE56F");
  }, Error, "EncodingError U+E56F");
  assertThrows(() => {
    ms932Encoder.encode("\uE570");
  }, Error, "EncodingError U+E570");
  assertThrows(() => {
    ms932Encoder.encode("\uE571");
  }, Error, "EncodingError U+E571");
  assertThrows(() => {
    ms932Encoder.encode("\uE572");
  }, Error, "EncodingError U+E572");
  assertThrows(() => {
    ms932Encoder.encode("\uE573");
  }, Error, "EncodingError U+E573");
  assertThrows(() => {
    ms932Encoder.encode("\uE574");
  }, Error, "EncodingError U+E574");
  assertThrows(() => {
    ms932Encoder.encode("\uE575");
  }, Error, "EncodingError U+E575");
  assertThrows(() => {
    ms932Encoder.encode("\uE576");
  }, Error, "EncodingError U+E576");
  assertThrows(() => {
    ms932Encoder.encode("\uE577");
  }, Error, "EncodingError U+E577");
  assertThrows(() => {
    ms932Encoder.encode("\uE578");
  }, Error, "EncodingError U+E578");
  assertThrows(() => {
    ms932Encoder.encode("\uE579");
  }, Error, "EncodingError U+E579");
  assertThrows(() => {
    ms932Encoder.encode("\uE57A");
  }, Error, "EncodingError U+E57A");
  assertThrows(() => {
    ms932Encoder.encode("\uE57B");
  }, Error, "EncodingError U+E57B");
  assertThrows(() => {
    ms932Encoder.encode("\uE57C");
  }, Error, "EncodingError U+E57C");
  assertThrows(() => {
    ms932Encoder.encode("\uE57D");
  }, Error, "EncodingError U+E57D");
  assertThrows(() => {
    ms932Encoder.encode("\uE57E");
  }, Error, "EncodingError U+E57E");
  assertThrows(() => {
    ms932Encoder.encode("\uE57F");
  }, Error, "EncodingError U+E57F");
  assertThrows(() => {
    ms932Encoder.encode("\uE580");
  }, Error, "EncodingError U+E580");
  assertThrows(() => {
    ms932Encoder.encode("\uE581");
  }, Error, "EncodingError U+E581");
  assertThrows(() => {
    ms932Encoder.encode("\uE582");
  }, Error, "EncodingError U+E582");
  assertThrows(() => {
    ms932Encoder.encode("\uE583");
  }, Error, "EncodingError U+E583");
  assertThrows(() => {
    ms932Encoder.encode("\uE584");
  }, Error, "EncodingError U+E584");
  assertThrows(() => {
    ms932Encoder.encode("\uE585");
  }, Error, "EncodingError U+E585");
  assertThrows(() => {
    ms932Encoder.encode("\uE586");
  }, Error, "EncodingError U+E586");
  assertThrows(() => {
    ms932Encoder.encode("\uE587");
  }, Error, "EncodingError U+E587");
  assertThrows(() => {
    ms932Encoder.encode("\uE588");
  }, Error, "EncodingError U+E588");
  assertThrows(() => {
    ms932Encoder.encode("\uE589");
  }, Error, "EncodingError U+E589");
  assertThrows(() => {
    ms932Encoder.encode("\uE58A");
  }, Error, "EncodingError U+E58A");
  assertThrows(() => {
    ms932Encoder.encode("\uE58B");
  }, Error, "EncodingError U+E58B");
  assertThrows(() => {
    ms932Encoder.encode("\uE58C");
  }, Error, "EncodingError U+E58C");
  assertThrows(() => {
    ms932Encoder.encode("\uE58D");
  }, Error, "EncodingError U+E58D");
  assertThrows(() => {
    ms932Encoder.encode("\uE58E");
  }, Error, "EncodingError U+E58E");
  assertThrows(() => {
    ms932Encoder.encode("\uE58F");
  }, Error, "EncodingError U+E58F");
  assertThrows(() => {
    ms932Encoder.encode("\uE590");
  }, Error, "EncodingError U+E590");
  assertThrows(() => {
    ms932Encoder.encode("\uE591");
  }, Error, "EncodingError U+E591");
  assertThrows(() => {
    ms932Encoder.encode("\uE592");
  }, Error, "EncodingError U+E592");
  assertThrows(() => {
    ms932Encoder.encode("\uE593");
  }, Error, "EncodingError U+E593");
  assertThrows(() => {
    ms932Encoder.encode("\uE594");
  }, Error, "EncodingError U+E594");
  assertThrows(() => {
    ms932Encoder.encode("\uE595");
  }, Error, "EncodingError U+E595");
  assertThrows(() => {
    ms932Encoder.encode("\uE596");
  }, Error, "EncodingError U+E596");
  assertThrows(() => {
    ms932Encoder.encode("\uE597");
  }, Error, "EncodingError U+E597");
  assertThrows(() => {
    ms932Encoder.encode("\uE598");
  }, Error, "EncodingError U+E598");
  assertThrows(() => {
    ms932Encoder.encode("\uE599");
  }, Error, "EncodingError U+E599");
  assertThrows(() => {
    ms932Encoder.encode("\uE59A");
  }, Error, "EncodingError U+E59A");
  assertThrows(() => {
    ms932Encoder.encode("\uE59B");
  }, Error, "EncodingError U+E59B");
  assertThrows(() => {
    ms932Encoder.encode("\uE59C");
  }, Error, "EncodingError U+E59C");
  assertThrows(() => {
    ms932Encoder.encode("\uE59D");
  }, Error, "EncodingError U+E59D");
  assertThrows(() => {
    ms932Encoder.encode("\uE59E");
  }, Error, "EncodingError U+E59E");
  assertThrows(() => {
    ms932Encoder.encode("\uE59F");
  }, Error, "EncodingError U+E59F");
  assertThrows(() => {
    ms932Encoder.encode("\uE5A0");
  }, Error, "EncodingError U+E5A0");
  assertThrows(() => {
    ms932Encoder.encode("\uE5A1");
  }, Error, "EncodingError U+E5A1");
  assertThrows(() => {
    ms932Encoder.encode("\uE5A2");
  }, Error, "EncodingError U+E5A2");
  assertThrows(() => {
    ms932Encoder.encode("\uE5A3");
  }, Error, "EncodingError U+E5A3");
  assertThrows(() => {
    ms932Encoder.encode("\uE5A4");
  }, Error, "EncodingError U+E5A4");
  assertThrows(() => {
    ms932Encoder.encode("\uE5A5");
  }, Error, "EncodingError U+E5A5");
  assertThrows(() => {
    ms932Encoder.encode("\uE5A6");
  }, Error, "EncodingError U+E5A6");
  assertThrows(() => {
    ms932Encoder.encode("\uE5A7");
  }, Error, "EncodingError U+E5A7");
  assertThrows(() => {
    ms932Encoder.encode("\uE5A8");
  }, Error, "EncodingError U+E5A8");
  assertThrows(() => {
    ms932Encoder.encode("\uE5A9");
  }, Error, "EncodingError U+E5A9");
  assertThrows(() => {
    ms932Encoder.encode("\uE5AA");
  }, Error, "EncodingError U+E5AA");
  assertThrows(() => {
    ms932Encoder.encode("\uE5AB");
  }, Error, "EncodingError U+E5AB");
  assertThrows(() => {
    ms932Encoder.encode("\uE5AC");
  }, Error, "EncodingError U+E5AC");
  assertThrows(() => {
    ms932Encoder.encode("\uE5AD");
  }, Error, "EncodingError U+E5AD");
  assertThrows(() => {
    ms932Encoder.encode("\uE5AE");
  }, Error, "EncodingError U+E5AE");
  assertThrows(() => {
    ms932Encoder.encode("\uE5AF");
  }, Error, "EncodingError U+E5AF");
  assertThrows(() => {
    ms932Encoder.encode("\uE5B0");
  }, Error, "EncodingError U+E5B0");
  assertThrows(() => {
    ms932Encoder.encode("\uE5B1");
  }, Error, "EncodingError U+E5B1");
  assertThrows(() => {
    ms932Encoder.encode("\uE5B2");
  }, Error, "EncodingError U+E5B2");
  assertThrows(() => {
    ms932Encoder.encode("\uE5B3");
  }, Error, "EncodingError U+E5B3");
  assertThrows(() => {
    ms932Encoder.encode("\uE5B4");
  }, Error, "EncodingError U+E5B4");
  assertThrows(() => {
    ms932Encoder.encode("\uE5B5");
  }, Error, "EncodingError U+E5B5");
  assertThrows(() => {
    ms932Encoder.encode("\uE5B6");
  }, Error, "EncodingError U+E5B6");
  assertThrows(() => {
    ms932Encoder.encode("\uE5B7");
  }, Error, "EncodingError U+E5B7");
  assertThrows(() => {
    ms932Encoder.encode("\uE5B8");
  }, Error, "EncodingError U+E5B8");
  assertThrows(() => {
    ms932Encoder.encode("\uE5B9");
  }, Error, "EncodingError U+E5B9");
  assertThrows(() => {
    ms932Encoder.encode("\uE5BA");
  }, Error, "EncodingError U+E5BA");
  assertThrows(() => {
    ms932Encoder.encode("\uE5BB");
  }, Error, "EncodingError U+E5BB");
  assertThrows(() => {
    ms932Encoder.encode("\uE5BC");
  }, Error, "EncodingError U+E5BC");
  assertThrows(() => {
    ms932Encoder.encode("\uE5BD");
  }, Error, "EncodingError U+E5BD");
  assertThrows(() => {
    ms932Encoder.encode("\uE5BE");
  }, Error, "EncodingError U+E5BE");
  assertThrows(() => {
    ms932Encoder.encode("\uE5BF");
  }, Error, "EncodingError U+E5BF");
  assertThrows(() => {
    ms932Encoder.encode("\uE5C0");
  }, Error, "EncodingError U+E5C0");
  assertThrows(() => {
    ms932Encoder.encode("\uE5C1");
  }, Error, "EncodingError U+E5C1");
  assertThrows(() => {
    ms932Encoder.encode("\uE5C2");
  }, Error, "EncodingError U+E5C2");
  assertThrows(() => {
    ms932Encoder.encode("\uE5C3");
  }, Error, "EncodingError U+E5C3");
  assertThrows(() => {
    ms932Encoder.encode("\uE5C4");
  }, Error, "EncodingError U+E5C4");
  assertThrows(() => {
    ms932Encoder.encode("\uE5C5");
  }, Error, "EncodingError U+E5C5");
  assertThrows(() => {
    ms932Encoder.encode("\uE5C6");
  }, Error, "EncodingError U+E5C6");
  assertThrows(() => {
    ms932Encoder.encode("\uE5C7");
  }, Error, "EncodingError U+E5C7");
  assertThrows(() => {
    ms932Encoder.encode("\uE5C8");
  }, Error, "EncodingError U+E5C8");
  assertThrows(() => {
    ms932Encoder.encode("\uE5C9");
  }, Error, "EncodingError U+E5C9");
  assertThrows(() => {
    ms932Encoder.encode("\uE5CA");
  }, Error, "EncodingError U+E5CA");
  assertThrows(() => {
    ms932Encoder.encode("\uE5CB");
  }, Error, "EncodingError U+E5CB");
  assertThrows(() => {
    ms932Encoder.encode("\uE5CC");
  }, Error, "EncodingError U+E5CC");
  assertThrows(() => {
    ms932Encoder.encode("\uE5CD");
  }, Error, "EncodingError U+E5CD");
  assertThrows(() => {
    ms932Encoder.encode("\uE5CE");
  }, Error, "EncodingError U+E5CE");
  assertThrows(() => {
    ms932Encoder.encode("\uE5CF");
  }, Error, "EncodingError U+E5CF");
  assertThrows(() => {
    ms932Encoder.encode("\uE5D0");
  }, Error, "EncodingError U+E5D0");
  assertThrows(() => {
    ms932Encoder.encode("\uE5D1");
  }, Error, "EncodingError U+E5D1");
  assertThrows(() => {
    ms932Encoder.encode("\uE5D2");
  }, Error, "EncodingError U+E5D2");
  assertThrows(() => {
    ms932Encoder.encode("\uE5D3");
  }, Error, "EncodingError U+E5D3");
  assertThrows(() => {
    ms932Encoder.encode("\uE5D4");
  }, Error, "EncodingError U+E5D4");
  assertThrows(() => {
    ms932Encoder.encode("\uE5D5");
  }, Error, "EncodingError U+E5D5");
  assertThrows(() => {
    ms932Encoder.encode("\uE5D6");
  }, Error, "EncodingError U+E5D6");
  assertThrows(() => {
    ms932Encoder.encode("\uE5D7");
  }, Error, "EncodingError U+E5D7");
  assertThrows(() => {
    ms932Encoder.encode("\uE5D8");
  }, Error, "EncodingError U+E5D8");
  assertThrows(() => {
    ms932Encoder.encode("\uE5D9");
  }, Error, "EncodingError U+E5D9");
  assertThrows(() => {
    ms932Encoder.encode("\uE5DA");
  }, Error, "EncodingError U+E5DA");
  assertThrows(() => {
    ms932Encoder.encode("\uE5DB");
  }, Error, "EncodingError U+E5DB");
  assertThrows(() => {
    ms932Encoder.encode("\uE5DC");
  }, Error, "EncodingError U+E5DC");
  assertThrows(() => {
    ms932Encoder.encode("\uE5DD");
  }, Error, "EncodingError U+E5DD");
  assertThrows(() => {
    ms932Encoder.encode("\uE5DE");
  }, Error, "EncodingError U+E5DE");
  assertThrows(() => {
    ms932Encoder.encode("\uE5DF");
  }, Error, "EncodingError U+E5DF");
  assertThrows(() => {
    ms932Encoder.encode("\uE5E0");
  }, Error, "EncodingError U+E5E0");
  assertThrows(() => {
    ms932Encoder.encode("\uE5E1");
  }, Error, "EncodingError U+E5E1");
  assertThrows(() => {
    ms932Encoder.encode("\uE5E2");
  }, Error, "EncodingError U+E5E2");
  assertThrows(() => {
    ms932Encoder.encode("\uE5E3");
  }, Error, "EncodingError U+E5E3");
  assertThrows(() => {
    ms932Encoder.encode("\uE5E4");
  }, Error, "EncodingError U+E5E4");
  assertThrows(() => {
    ms932Encoder.encode("\uE5E5");
  }, Error, "EncodingError U+E5E5");
  assertThrows(() => {
    ms932Encoder.encode("\uE5E6");
  }, Error, "EncodingError U+E5E6");
  assertThrows(() => {
    ms932Encoder.encode("\uE5E7");
  }, Error, "EncodingError U+E5E7");
  assertThrows(() => {
    ms932Encoder.encode("\uE5E8");
  }, Error, "EncodingError U+E5E8");
  assertThrows(() => {
    ms932Encoder.encode("\uE5E9");
  }, Error, "EncodingError U+E5E9");
  assertThrows(() => {
    ms932Encoder.encode("\uE5EA");
  }, Error, "EncodingError U+E5EA");
  assertThrows(() => {
    ms932Encoder.encode("\uE5EB");
  }, Error, "EncodingError U+E5EB");
  assertThrows(() => {
    ms932Encoder.encode("\uE5EC");
  }, Error, "EncodingError U+E5EC");
  assertThrows(() => {
    ms932Encoder.encode("\uE5ED");
  }, Error, "EncodingError U+E5ED");
  assertThrows(() => {
    ms932Encoder.encode("\uE5EE");
  }, Error, "EncodingError U+E5EE");
  assertThrows(() => {
    ms932Encoder.encode("\uE5EF");
  }, Error, "EncodingError U+E5EF");
  assertThrows(() => {
    ms932Encoder.encode("\uE5F0");
  }, Error, "EncodingError U+E5F0");
  assertThrows(() => {
    ms932Encoder.encode("\uE5F1");
  }, Error, "EncodingError U+E5F1");
  assertThrows(() => {
    ms932Encoder.encode("\uE5F2");
  }, Error, "EncodingError U+E5F2");
  assertThrows(() => {
    ms932Encoder.encode("\uE5F3");
  }, Error, "EncodingError U+E5F3");
  assertThrows(() => {
    ms932Encoder.encode("\uE5F4");
  }, Error, "EncodingError U+E5F4");
  assertThrows(() => {
    ms932Encoder.encode("\uE5F5");
  }, Error, "EncodingError U+E5F5");
  assertThrows(() => {
    ms932Encoder.encode("\uE5F6");
  }, Error, "EncodingError U+E5F6");
  assertThrows(() => {
    ms932Encoder.encode("\uE5F7");
  }, Error, "EncodingError U+E5F7");
  assertThrows(() => {
    ms932Encoder.encode("\uE5F8");
  }, Error, "EncodingError U+E5F8");
  assertThrows(() => {
    ms932Encoder.encode("\uE5F9");
  }, Error, "EncodingError U+E5F9");
  assertThrows(() => {
    ms932Encoder.encode("\uE5FA");
  }, Error, "EncodingError U+E5FA");
  assertThrows(() => {
    ms932Encoder.encode("\uE5FB");
  }, Error, "EncodingError U+E5FB");
  assertThrows(() => {
    ms932Encoder.encode("\uE5FC");
  }, Error, "EncodingError U+E5FC");
  assertThrows(() => {
    ms932Encoder.encode("\uE5FD");
  }, Error, "EncodingError U+E5FD");
  assertThrows(() => {
    ms932Encoder.encode("\uE5FE");
  }, Error, "EncodingError U+E5FE");
  assertThrows(() => {
    ms932Encoder.encode("\uE5FF");
  }, Error, "EncodingError U+E5FF");
  assertThrows(() => {
    ms932Encoder.encode("\uE600");
  }, Error, "EncodingError U+E600");
  assertThrows(() => {
    ms932Encoder.encode("\uE601");
  }, Error, "EncodingError U+E601");
  assertThrows(() => {
    ms932Encoder.encode("\uE602");
  }, Error, "EncodingError U+E602");
  assertThrows(() => {
    ms932Encoder.encode("\uE603");
  }, Error, "EncodingError U+E603");
  assertThrows(() => {
    ms932Encoder.encode("\uE604");
  }, Error, "EncodingError U+E604");
  assertThrows(() => {
    ms932Encoder.encode("\uE605");
  }, Error, "EncodingError U+E605");
  assertThrows(() => {
    ms932Encoder.encode("\uE606");
  }, Error, "EncodingError U+E606");
  assertThrows(() => {
    ms932Encoder.encode("\uE607");
  }, Error, "EncodingError U+E607");
  assertThrows(() => {
    ms932Encoder.encode("\uE608");
  }, Error, "EncodingError U+E608");
  assertThrows(() => {
    ms932Encoder.encode("\uE609");
  }, Error, "EncodingError U+E609");
  assertThrows(() => {
    ms932Encoder.encode("\uE60A");
  }, Error, "EncodingError U+E60A");
  assertThrows(() => {
    ms932Encoder.encode("\uE60B");
  }, Error, "EncodingError U+E60B");
  assertThrows(() => {
    ms932Encoder.encode("\uE60C");
  }, Error, "EncodingError U+E60C");
  assertThrows(() => {
    ms932Encoder.encode("\uE60D");
  }, Error, "EncodingError U+E60D");
  assertThrows(() => {
    ms932Encoder.encode("\uE60E");
  }, Error, "EncodingError U+E60E");
  assertThrows(() => {
    ms932Encoder.encode("\uE60F");
  }, Error, "EncodingError U+E60F");
  assertThrows(() => {
    ms932Encoder.encode("\uE610");
  }, Error, "EncodingError U+E610");
  assertThrows(() => {
    ms932Encoder.encode("\uE611");
  }, Error, "EncodingError U+E611");
  assertThrows(() => {
    ms932Encoder.encode("\uE612");
  }, Error, "EncodingError U+E612");
  assertThrows(() => {
    ms932Encoder.encode("\uE613");
  }, Error, "EncodingError U+E613");
  assertThrows(() => {
    ms932Encoder.encode("\uE614");
  }, Error, "EncodingError U+E614");
  assertThrows(() => {
    ms932Encoder.encode("\uE615");
  }, Error, "EncodingError U+E615");
  assertThrows(() => {
    ms932Encoder.encode("\uE616");
  }, Error, "EncodingError U+E616");
  assertThrows(() => {
    ms932Encoder.encode("\uE617");
  }, Error, "EncodingError U+E617");
  assertThrows(() => {
    ms932Encoder.encode("\uE618");
  }, Error, "EncodingError U+E618");
  assertThrows(() => {
    ms932Encoder.encode("\uE619");
  }, Error, "EncodingError U+E619");
  assertThrows(() => {
    ms932Encoder.encode("\uE61A");
  }, Error, "EncodingError U+E61A");
  assertThrows(() => {
    ms932Encoder.encode("\uE61B");
  }, Error, "EncodingError U+E61B");
  assertThrows(() => {
    ms932Encoder.encode("\uE61C");
  }, Error, "EncodingError U+E61C");
  assertThrows(() => {
    ms932Encoder.encode("\uE61D");
  }, Error, "EncodingError U+E61D");
  assertThrows(() => {
    ms932Encoder.encode("\uE61E");
  }, Error, "EncodingError U+E61E");
  assertThrows(() => {
    ms932Encoder.encode("\uE61F");
  }, Error, "EncodingError U+E61F");
  assertThrows(() => {
    ms932Encoder.encode("\uE620");
  }, Error, "EncodingError U+E620");
  assertThrows(() => {
    ms932Encoder.encode("\uE621");
  }, Error, "EncodingError U+E621");
  assertThrows(() => {
    ms932Encoder.encode("\uE622");
  }, Error, "EncodingError U+E622");
  assertThrows(() => {
    ms932Encoder.encode("\uE623");
  }, Error, "EncodingError U+E623");
  assertThrows(() => {
    ms932Encoder.encode("\uE624");
  }, Error, "EncodingError U+E624");
  assertThrows(() => {
    ms932Encoder.encode("\uE625");
  }, Error, "EncodingError U+E625");
  assertThrows(() => {
    ms932Encoder.encode("\uE626");
  }, Error, "EncodingError U+E626");
  assertThrows(() => {
    ms932Encoder.encode("\uE627");
  }, Error, "EncodingError U+E627");
  assertThrows(() => {
    ms932Encoder.encode("\uE628");
  }, Error, "EncodingError U+E628");
  assertThrows(() => {
    ms932Encoder.encode("\uE629");
  }, Error, "EncodingError U+E629");
  assertThrows(() => {
    ms932Encoder.encode("\uE62A");
  }, Error, "EncodingError U+E62A");
  assertThrows(() => {
    ms932Encoder.encode("\uE62B");
  }, Error, "EncodingError U+E62B");
  assertThrows(() => {
    ms932Encoder.encode("\uE62C");
  }, Error, "EncodingError U+E62C");
  assertThrows(() => {
    ms932Encoder.encode("\uE62D");
  }, Error, "EncodingError U+E62D");
  assertThrows(() => {
    ms932Encoder.encode("\uE62E");
  }, Error, "EncodingError U+E62E");
  assertThrows(() => {
    ms932Encoder.encode("\uE62F");
  }, Error, "EncodingError U+E62F");
  assertThrows(() => {
    ms932Encoder.encode("\uE630");
  }, Error, "EncodingError U+E630");
  assertThrows(() => {
    ms932Encoder.encode("\uE631");
  }, Error, "EncodingError U+E631");
  assertThrows(() => {
    ms932Encoder.encode("\uE632");
  }, Error, "EncodingError U+E632");
  assertThrows(() => {
    ms932Encoder.encode("\uE633");
  }, Error, "EncodingError U+E633");
  assertThrows(() => {
    ms932Encoder.encode("\uE634");
  }, Error, "EncodingError U+E634");
  assertThrows(() => {
    ms932Encoder.encode("\uE635");
  }, Error, "EncodingError U+E635");
  assertThrows(() => {
    ms932Encoder.encode("\uE636");
  }, Error, "EncodingError U+E636");
  assertThrows(() => {
    ms932Encoder.encode("\uE637");
  }, Error, "EncodingError U+E637");
  assertThrows(() => {
    ms932Encoder.encode("\uE638");
  }, Error, "EncodingError U+E638");
  assertThrows(() => {
    ms932Encoder.encode("\uE639");
  }, Error, "EncodingError U+E639");
  assertThrows(() => {
    ms932Encoder.encode("\uE63A");
  }, Error, "EncodingError U+E63A");
  assertThrows(() => {
    ms932Encoder.encode("\uE63B");
  }, Error, "EncodingError U+E63B");
  assertThrows(() => {
    ms932Encoder.encode("\uE63C");
  }, Error, "EncodingError U+E63C");
  assertThrows(() => {
    ms932Encoder.encode("\uE63D");
  }, Error, "EncodingError U+E63D");
  assertThrows(() => {
    ms932Encoder.encode("\uE63E");
  }, Error, "EncodingError U+E63E");
  assertThrows(() => {
    ms932Encoder.encode("\uE63F");
  }, Error, "EncodingError U+E63F");
  assertThrows(() => {
    ms932Encoder.encode("\uE640");
  }, Error, "EncodingError U+E640");
  assertThrows(() => {
    ms932Encoder.encode("\uE641");
  }, Error, "EncodingError U+E641");
  assertThrows(() => {
    ms932Encoder.encode("\uE642");
  }, Error, "EncodingError U+E642");
  assertThrows(() => {
    ms932Encoder.encode("\uE643");
  }, Error, "EncodingError U+E643");
  assertThrows(() => {
    ms932Encoder.encode("\uE644");
  }, Error, "EncodingError U+E644");
  assertThrows(() => {
    ms932Encoder.encode("\uE645");
  }, Error, "EncodingError U+E645");
  assertThrows(() => {
    ms932Encoder.encode("\uE646");
  }, Error, "EncodingError U+E646");
  assertThrows(() => {
    ms932Encoder.encode("\uE647");
  }, Error, "EncodingError U+E647");
  assertThrows(() => {
    ms932Encoder.encode("\uE648");
  }, Error, "EncodingError U+E648");
  assertThrows(() => {
    ms932Encoder.encode("\uE649");
  }, Error, "EncodingError U+E649");
  assertThrows(() => {
    ms932Encoder.encode("\uE64A");
  }, Error, "EncodingError U+E64A");
  assertThrows(() => {
    ms932Encoder.encode("\uE64B");
  }, Error, "EncodingError U+E64B");
  assertThrows(() => {
    ms932Encoder.encode("\uE64C");
  }, Error, "EncodingError U+E64C");
  assertThrows(() => {
    ms932Encoder.encode("\uE64D");
  }, Error, "EncodingError U+E64D");
  assertThrows(() => {
    ms932Encoder.encode("\uE64E");
  }, Error, "EncodingError U+E64E");
  assertThrows(() => {
    ms932Encoder.encode("\uE64F");
  }, Error, "EncodingError U+E64F");
  assertThrows(() => {
    ms932Encoder.encode("\uE650");
  }, Error, "EncodingError U+E650");
  assertThrows(() => {
    ms932Encoder.encode("\uE651");
  }, Error, "EncodingError U+E651");
  assertThrows(() => {
    ms932Encoder.encode("\uE652");
  }, Error, "EncodingError U+E652");
  assertThrows(() => {
    ms932Encoder.encode("\uE653");
  }, Error, "EncodingError U+E653");
  assertThrows(() => {
    ms932Encoder.encode("\uE654");
  }, Error, "EncodingError U+E654");
  assertThrows(() => {
    ms932Encoder.encode("\uE655");
  }, Error, "EncodingError U+E655");
  assertThrows(() => {
    ms932Encoder.encode("\uE656");
  }, Error, "EncodingError U+E656");
  assertThrows(() => {
    ms932Encoder.encode("\uE657");
  }, Error, "EncodingError U+E657");
  assertThrows(() => {
    ms932Encoder.encode("\uE658");
  }, Error, "EncodingError U+E658");
  assertThrows(() => {
    ms932Encoder.encode("\uE659");
  }, Error, "EncodingError U+E659");
  assertThrows(() => {
    ms932Encoder.encode("\uE65A");
  }, Error, "EncodingError U+E65A");
  assertThrows(() => {
    ms932Encoder.encode("\uE65B");
  }, Error, "EncodingError U+E65B");
  assertThrows(() => {
    ms932Encoder.encode("\uE65C");
  }, Error, "EncodingError U+E65C");
  assertThrows(() => {
    ms932Encoder.encode("\uE65D");
  }, Error, "EncodingError U+E65D");
  assertThrows(() => {
    ms932Encoder.encode("\uE65E");
  }, Error, "EncodingError U+E65E");
  assertThrows(() => {
    ms932Encoder.encode("\uE65F");
  }, Error, "EncodingError U+E65F");
  assertThrows(() => {
    ms932Encoder.encode("\uE660");
  }, Error, "EncodingError U+E660");
  assertThrows(() => {
    ms932Encoder.encode("\uE661");
  }, Error, "EncodingError U+E661");
  assertThrows(() => {
    ms932Encoder.encode("\uE662");
  }, Error, "EncodingError U+E662");
  assertThrows(() => {
    ms932Encoder.encode("\uE663");
  }, Error, "EncodingError U+E663");
  assertThrows(() => {
    ms932Encoder.encode("\uE664");
  }, Error, "EncodingError U+E664");
  assertThrows(() => {
    ms932Encoder.encode("\uE665");
  }, Error, "EncodingError U+E665");
  assertThrows(() => {
    ms932Encoder.encode("\uE666");
  }, Error, "EncodingError U+E666");
  assertThrows(() => {
    ms932Encoder.encode("\uE667");
  }, Error, "EncodingError U+E667");
  assertThrows(() => {
    ms932Encoder.encode("\uE668");
  }, Error, "EncodingError U+E668");
  assertThrows(() => {
    ms932Encoder.encode("\uE669");
  }, Error, "EncodingError U+E669");
  assertThrows(() => {
    ms932Encoder.encode("\uE66A");
  }, Error, "EncodingError U+E66A");
  assertThrows(() => {
    ms932Encoder.encode("\uE66B");
  }, Error, "EncodingError U+E66B");
  assertThrows(() => {
    ms932Encoder.encode("\uE66C");
  }, Error, "EncodingError U+E66C");
  assertThrows(() => {
    ms932Encoder.encode("\uE66D");
  }, Error, "EncodingError U+E66D");
  assertThrows(() => {
    ms932Encoder.encode("\uE66E");
  }, Error, "EncodingError U+E66E");
  assertThrows(() => {
    ms932Encoder.encode("\uE66F");
  }, Error, "EncodingError U+E66F");
  assertThrows(() => {
    ms932Encoder.encode("\uE670");
  }, Error, "EncodingError U+E670");
  assertThrows(() => {
    ms932Encoder.encode("\uE671");
  }, Error, "EncodingError U+E671");
  assertThrows(() => {
    ms932Encoder.encode("\uE672");
  }, Error, "EncodingError U+E672");
  assertThrows(() => {
    ms932Encoder.encode("\uE673");
  }, Error, "EncodingError U+E673");
  assertThrows(() => {
    ms932Encoder.encode("\uE674");
  }, Error, "EncodingError U+E674");
  assertThrows(() => {
    ms932Encoder.encode("\uE675");
  }, Error, "EncodingError U+E675");
  assertThrows(() => {
    ms932Encoder.encode("\uE676");
  }, Error, "EncodingError U+E676");
  assertThrows(() => {
    ms932Encoder.encode("\uE677");
  }, Error, "EncodingError U+E677");
  assertThrows(() => {
    ms932Encoder.encode("\uE678");
  }, Error, "EncodingError U+E678");
  assertThrows(() => {
    ms932Encoder.encode("\uE679");
  }, Error, "EncodingError U+E679");
  assertThrows(() => {
    ms932Encoder.encode("\uE67A");
  }, Error, "EncodingError U+E67A");
  assertThrows(() => {
    ms932Encoder.encode("\uE67B");
  }, Error, "EncodingError U+E67B");
  assertThrows(() => {
    ms932Encoder.encode("\uE67C");
  }, Error, "EncodingError U+E67C");
  assertThrows(() => {
    ms932Encoder.encode("\uE67D");
  }, Error, "EncodingError U+E67D");
  assertThrows(() => {
    ms932Encoder.encode("\uE67E");
  }, Error, "EncodingError U+E67E");
  assertThrows(() => {
    ms932Encoder.encode("\uE67F");
  }, Error, "EncodingError U+E67F");
  assertThrows(() => {
    ms932Encoder.encode("\uE680");
  }, Error, "EncodingError U+E680");
  assertThrows(() => {
    ms932Encoder.encode("\uE681");
  }, Error, "EncodingError U+E681");
  assertThrows(() => {
    ms932Encoder.encode("\uE682");
  }, Error, "EncodingError U+E682");
  assertThrows(() => {
    ms932Encoder.encode("\uE683");
  }, Error, "EncodingError U+E683");
  assertThrows(() => {
    ms932Encoder.encode("\uE684");
  }, Error, "EncodingError U+E684");
  assertThrows(() => {
    ms932Encoder.encode("\uE685");
  }, Error, "EncodingError U+E685");
  assertThrows(() => {
    ms932Encoder.encode("\uE686");
  }, Error, "EncodingError U+E686");
  assertThrows(() => {
    ms932Encoder.encode("\uE687");
  }, Error, "EncodingError U+E687");
  assertThrows(() => {
    ms932Encoder.encode("\uE688");
  }, Error, "EncodingError U+E688");
  assertThrows(() => {
    ms932Encoder.encode("\uE689");
  }, Error, "EncodingError U+E689");
  assertThrows(() => {
    ms932Encoder.encode("\uE68A");
  }, Error, "EncodingError U+E68A");
  assertThrows(() => {
    ms932Encoder.encode("\uE68B");
  }, Error, "EncodingError U+E68B");
  assertThrows(() => {
    ms932Encoder.encode("\uE68C");
  }, Error, "EncodingError U+E68C");
  assertThrows(() => {
    ms932Encoder.encode("\uE68D");
  }, Error, "EncodingError U+E68D");
  assertThrows(() => {
    ms932Encoder.encode("\uE68E");
  }, Error, "EncodingError U+E68E");
  assertThrows(() => {
    ms932Encoder.encode("\uE68F");
  }, Error, "EncodingError U+E68F");
  assertThrows(() => {
    ms932Encoder.encode("\uE690");
  }, Error, "EncodingError U+E690");
  assertThrows(() => {
    ms932Encoder.encode("\uE691");
  }, Error, "EncodingError U+E691");
  assertThrows(() => {
    ms932Encoder.encode("\uE692");
  }, Error, "EncodingError U+E692");
  assertThrows(() => {
    ms932Encoder.encode("\uE693");
  }, Error, "EncodingError U+E693");
  assertThrows(() => {
    ms932Encoder.encode("\uE694");
  }, Error, "EncodingError U+E694");
  assertThrows(() => {
    ms932Encoder.encode("\uE695");
  }, Error, "EncodingError U+E695");
  assertThrows(() => {
    ms932Encoder.encode("\uE696");
  }, Error, "EncodingError U+E696");
  assertThrows(() => {
    ms932Encoder.encode("\uE697");
  }, Error, "EncodingError U+E697");
  assertThrows(() => {
    ms932Encoder.encode("\uE698");
  }, Error, "EncodingError U+E698");
  assertThrows(() => {
    ms932Encoder.encode("\uE699");
  }, Error, "EncodingError U+E699");
  assertThrows(() => {
    ms932Encoder.encode("\uE69A");
  }, Error, "EncodingError U+E69A");
  assertThrows(() => {
    ms932Encoder.encode("\uE69B");
  }, Error, "EncodingError U+E69B");
  assertThrows(() => {
    ms932Encoder.encode("\uE69C");
  }, Error, "EncodingError U+E69C");
  assertThrows(() => {
    ms932Encoder.encode("\uE69D");
  }, Error, "EncodingError U+E69D");
  assertThrows(() => {
    ms932Encoder.encode("\uE69E");
  }, Error, "EncodingError U+E69E");
  assertThrows(() => {
    ms932Encoder.encode("\uE69F");
  }, Error, "EncodingError U+E69F");
  assertThrows(() => {
    ms932Encoder.encode("\uE6A0");
  }, Error, "EncodingError U+E6A0");
  assertThrows(() => {
    ms932Encoder.encode("\uE6A1");
  }, Error, "EncodingError U+E6A1");
  assertThrows(() => {
    ms932Encoder.encode("\uE6A2");
  }, Error, "EncodingError U+E6A2");
  assertThrows(() => {
    ms932Encoder.encode("\uE6A3");
  }, Error, "EncodingError U+E6A3");
  assertThrows(() => {
    ms932Encoder.encode("\uE6A4");
  }, Error, "EncodingError U+E6A4");
  assertThrows(() => {
    ms932Encoder.encode("\uE6A5");
  }, Error, "EncodingError U+E6A5");
  assertThrows(() => {
    ms932Encoder.encode("\uE6A6");
  }, Error, "EncodingError U+E6A6");
  assertThrows(() => {
    ms932Encoder.encode("\uE6A7");
  }, Error, "EncodingError U+E6A7");
  assertThrows(() => {
    ms932Encoder.encode("\uE6A8");
  }, Error, "EncodingError U+E6A8");
  assertThrows(() => {
    ms932Encoder.encode("\uE6A9");
  }, Error, "EncodingError U+E6A9");
  assertThrows(() => {
    ms932Encoder.encode("\uE6AA");
  }, Error, "EncodingError U+E6AA");
  assertThrows(() => {
    ms932Encoder.encode("\uE6AB");
  }, Error, "EncodingError U+E6AB");
  assertThrows(() => {
    ms932Encoder.encode("\uE6AC");
  }, Error, "EncodingError U+E6AC");
  assertThrows(() => {
    ms932Encoder.encode("\uE6AD");
  }, Error, "EncodingError U+E6AD");
  assertThrows(() => {
    ms932Encoder.encode("\uE6AE");
  }, Error, "EncodingError U+E6AE");
  assertThrows(() => {
    ms932Encoder.encode("\uE6AF");
  }, Error, "EncodingError U+E6AF");
  assertThrows(() => {
    ms932Encoder.encode("\uE6B0");
  }, Error, "EncodingError U+E6B0");
  assertThrows(() => {
    ms932Encoder.encode("\uE6B1");
  }, Error, "EncodingError U+E6B1");
  assertThrows(() => {
    ms932Encoder.encode("\uE6B2");
  }, Error, "EncodingError U+E6B2");
  assertThrows(() => {
    ms932Encoder.encode("\uE6B3");
  }, Error, "EncodingError U+E6B3");
  assertThrows(() => {
    ms932Encoder.encode("\uE6B4");
  }, Error, "EncodingError U+E6B4");
  assertThrows(() => {
    ms932Encoder.encode("\uE6B5");
  }, Error, "EncodingError U+E6B5");
  assertThrows(() => {
    ms932Encoder.encode("\uE6B6");
  }, Error, "EncodingError U+E6B6");
  assertThrows(() => {
    ms932Encoder.encode("\uE6B7");
  }, Error, "EncodingError U+E6B7");
  assertThrows(() => {
    ms932Encoder.encode("\uE6B8");
  }, Error, "EncodingError U+E6B8");
  assertThrows(() => {
    ms932Encoder.encode("\uE6B9");
  }, Error, "EncodingError U+E6B9");
  assertThrows(() => {
    ms932Encoder.encode("\uE6BA");
  }, Error, "EncodingError U+E6BA");
  assertThrows(() => {
    ms932Encoder.encode("\uE6BB");
  }, Error, "EncodingError U+E6BB");
  assertThrows(() => {
    ms932Encoder.encode("\uE6BC");
  }, Error, "EncodingError U+E6BC");
  assertThrows(() => {
    ms932Encoder.encode("\uE6BD");
  }, Error, "EncodingError U+E6BD");
  assertThrows(() => {
    ms932Encoder.encode("\uE6BE");
  }, Error, "EncodingError U+E6BE");
  assertThrows(() => {
    ms932Encoder.encode("\uE6BF");
  }, Error, "EncodingError U+E6BF");
  assertThrows(() => {
    ms932Encoder.encode("\uE6C0");
  }, Error, "EncodingError U+E6C0");
  assertThrows(() => {
    ms932Encoder.encode("\uE6C1");
  }, Error, "EncodingError U+E6C1");
  assertThrows(() => {
    ms932Encoder.encode("\uE6C2");
  }, Error, "EncodingError U+E6C2");
  assertThrows(() => {
    ms932Encoder.encode("\uE6C3");
  }, Error, "EncodingError U+E6C3");
  assertThrows(() => {
    ms932Encoder.encode("\uE6C4");
  }, Error, "EncodingError U+E6C4");
  assertThrows(() => {
    ms932Encoder.encode("\uE6C5");
  }, Error, "EncodingError U+E6C5");
  assertThrows(() => {
    ms932Encoder.encode("\uE6C6");
  }, Error, "EncodingError U+E6C6");
  assertThrows(() => {
    ms932Encoder.encode("\uE6C7");
  }, Error, "EncodingError U+E6C7");
  assertThrows(() => {
    ms932Encoder.encode("\uE6C8");
  }, Error, "EncodingError U+E6C8");
  assertThrows(() => {
    ms932Encoder.encode("\uE6C9");
  }, Error, "EncodingError U+E6C9");
  assertThrows(() => {
    ms932Encoder.encode("\uE6CA");
  }, Error, "EncodingError U+E6CA");
  assertThrows(() => {
    ms932Encoder.encode("\uE6CB");
  }, Error, "EncodingError U+E6CB");
  assertThrows(() => {
    ms932Encoder.encode("\uE6CC");
  }, Error, "EncodingError U+E6CC");
  assertThrows(() => {
    ms932Encoder.encode("\uE6CD");
  }, Error, "EncodingError U+E6CD");
  assertThrows(() => {
    ms932Encoder.encode("\uE6CE");
  }, Error, "EncodingError U+E6CE");
  assertThrows(() => {
    ms932Encoder.encode("\uE6CF");
  }, Error, "EncodingError U+E6CF");
  assertThrows(() => {
    ms932Encoder.encode("\uE6D0");
  }, Error, "EncodingError U+E6D0");
  assertThrows(() => {
    ms932Encoder.encode("\uE6D1");
  }, Error, "EncodingError U+E6D1");
  assertThrows(() => {
    ms932Encoder.encode("\uE6D2");
  }, Error, "EncodingError U+E6D2");
  assertThrows(() => {
    ms932Encoder.encode("\uE6D3");
  }, Error, "EncodingError U+E6D3");
  assertThrows(() => {
    ms932Encoder.encode("\uE6D4");
  }, Error, "EncodingError U+E6D4");
  assertThrows(() => {
    ms932Encoder.encode("\uE6D5");
  }, Error, "EncodingError U+E6D5");
  assertThrows(() => {
    ms932Encoder.encode("\uE6D6");
  }, Error, "EncodingError U+E6D6");
  assertThrows(() => {
    ms932Encoder.encode("\uE6D7");
  }, Error, "EncodingError U+E6D7");
  assertThrows(() => {
    ms932Encoder.encode("\uE6D8");
  }, Error, "EncodingError U+E6D8");
  assertThrows(() => {
    ms932Encoder.encode("\uE6D9");
  }, Error, "EncodingError U+E6D9");
  assertThrows(() => {
    ms932Encoder.encode("\uE6DA");
  }, Error, "EncodingError U+E6DA");
  assertThrows(() => {
    ms932Encoder.encode("\uE6DB");
  }, Error, "EncodingError U+E6DB");
  assertThrows(() => {
    ms932Encoder.encode("\uE6DC");
  }, Error, "EncodingError U+E6DC");
  assertThrows(() => {
    ms932Encoder.encode("\uE6DD");
  }, Error, "EncodingError U+E6DD");
  assertThrows(() => {
    ms932Encoder.encode("\uE6DE");
  }, Error, "EncodingError U+E6DE");
  assertThrows(() => {
    ms932Encoder.encode("\uE6DF");
  }, Error, "EncodingError U+E6DF");
  assertThrows(() => {
    ms932Encoder.encode("\uE6E0");
  }, Error, "EncodingError U+E6E0");
  assertThrows(() => {
    ms932Encoder.encode("\uE6E1");
  }, Error, "EncodingError U+E6E1");
  assertThrows(() => {
    ms932Encoder.encode("\uE6E2");
  }, Error, "EncodingError U+E6E2");
  assertThrows(() => {
    ms932Encoder.encode("\uE6E3");
  }, Error, "EncodingError U+E6E3");
  assertThrows(() => {
    ms932Encoder.encode("\uE6E4");
  }, Error, "EncodingError U+E6E4");
  assertThrows(() => {
    ms932Encoder.encode("\uE6E5");
  }, Error, "EncodingError U+E6E5");
  assertThrows(() => {
    ms932Encoder.encode("\uE6E6");
  }, Error, "EncodingError U+E6E6");
  assertThrows(() => {
    ms932Encoder.encode("\uE6E7");
  }, Error, "EncodingError U+E6E7");
  assertThrows(() => {
    ms932Encoder.encode("\uE6E8");
  }, Error, "EncodingError U+E6E8");
  assertThrows(() => {
    ms932Encoder.encode("\uE6E9");
  }, Error, "EncodingError U+E6E9");
  assertThrows(() => {
    ms932Encoder.encode("\uE6EA");
  }, Error, "EncodingError U+E6EA");
  assertThrows(() => {
    ms932Encoder.encode("\uE6EB");
  }, Error, "EncodingError U+E6EB");
  assertThrows(() => {
    ms932Encoder.encode("\uE6EC");
  }, Error, "EncodingError U+E6EC");
  assertThrows(() => {
    ms932Encoder.encode("\uE6ED");
  }, Error, "EncodingError U+E6ED");
  assertThrows(() => {
    ms932Encoder.encode("\uE6EE");
  }, Error, "EncodingError U+E6EE");
  assertThrows(() => {
    ms932Encoder.encode("\uE6EF");
  }, Error, "EncodingError U+E6EF");
  assertThrows(() => {
    ms932Encoder.encode("\uE6F0");
  }, Error, "EncodingError U+E6F0");
  assertThrows(() => {
    ms932Encoder.encode("\uE6F1");
  }, Error, "EncodingError U+E6F1");
  assertThrows(() => {
    ms932Encoder.encode("\uE6F2");
  }, Error, "EncodingError U+E6F2");
  assertThrows(() => {
    ms932Encoder.encode("\uE6F3");
  }, Error, "EncodingError U+E6F3");
  assertThrows(() => {
    ms932Encoder.encode("\uE6F4");
  }, Error, "EncodingError U+E6F4");
  assertThrows(() => {
    ms932Encoder.encode("\uE6F5");
  }, Error, "EncodingError U+E6F5");
  assertThrows(() => {
    ms932Encoder.encode("\uE6F6");
  }, Error, "EncodingError U+E6F6");
  assertThrows(() => {
    ms932Encoder.encode("\uE6F7");
  }, Error, "EncodingError U+E6F7");
  assertThrows(() => {
    ms932Encoder.encode("\uE6F8");
  }, Error, "EncodingError U+E6F8");
  assertThrows(() => {
    ms932Encoder.encode("\uE6F9");
  }, Error, "EncodingError U+E6F9");
  assertThrows(() => {
    ms932Encoder.encode("\uE6FA");
  }, Error, "EncodingError U+E6FA");
  assertThrows(() => {
    ms932Encoder.encode("\uE6FB");
  }, Error, "EncodingError U+E6FB");
  assertThrows(() => {
    ms932Encoder.encode("\uE6FC");
  }, Error, "EncodingError U+E6FC");
  assertThrows(() => {
    ms932Encoder.encode("\uE6FD");
  }, Error, "EncodingError U+E6FD");
  assertThrows(() => {
    ms932Encoder.encode("\uE6FE");
  }, Error, "EncodingError U+E6FE");
  assertThrows(() => {
    ms932Encoder.encode("\uE6FF");
  }, Error, "EncodingError U+E6FF");
  assertThrows(() => {
    ms932Encoder.encode("\uE700");
  }, Error, "EncodingError U+E700");
  assertThrows(() => {
    ms932Encoder.encode("\uE701");
  }, Error, "EncodingError U+E701");
  assertThrows(() => {
    ms932Encoder.encode("\uE702");
  }, Error, "EncodingError U+E702");
  assertThrows(() => {
    ms932Encoder.encode("\uE703");
  }, Error, "EncodingError U+E703");
  assertThrows(() => {
    ms932Encoder.encode("\uE704");
  }, Error, "EncodingError U+E704");
  assertThrows(() => {
    ms932Encoder.encode("\uE705");
  }, Error, "EncodingError U+E705");
  assertThrows(() => {
    ms932Encoder.encode("\uE706");
  }, Error, "EncodingError U+E706");
  assertThrows(() => {
    ms932Encoder.encode("\uE707");
  }, Error, "EncodingError U+E707");
  assertThrows(() => {
    ms932Encoder.encode("\uE708");
  }, Error, "EncodingError U+E708");
  assertThrows(() => {
    ms932Encoder.encode("\uE709");
  }, Error, "EncodingError U+E709");
  assertThrows(() => {
    ms932Encoder.encode("\uE70A");
  }, Error, "EncodingError U+E70A");
  assertThrows(() => {
    ms932Encoder.encode("\uE70B");
  }, Error, "EncodingError U+E70B");
  assertThrows(() => {
    ms932Encoder.encode("\uE70C");
  }, Error, "EncodingError U+E70C");
  assertThrows(() => {
    ms932Encoder.encode("\uE70D");
  }, Error, "EncodingError U+E70D");
  assertThrows(() => {
    ms932Encoder.encode("\uE70E");
  }, Error, "EncodingError U+E70E");
  assertThrows(() => {
    ms932Encoder.encode("\uE70F");
  }, Error, "EncodingError U+E70F");
  assertThrows(() => {
    ms932Encoder.encode("\uE710");
  }, Error, "EncodingError U+E710");
  assertThrows(() => {
    ms932Encoder.encode("\uE711");
  }, Error, "EncodingError U+E711");
  assertThrows(() => {
    ms932Encoder.encode("\uE712");
  }, Error, "EncodingError U+E712");
  assertThrows(() => {
    ms932Encoder.encode("\uE713");
  }, Error, "EncodingError U+E713");
  assertThrows(() => {
    ms932Encoder.encode("\uE714");
  }, Error, "EncodingError U+E714");
  assertThrows(() => {
    ms932Encoder.encode("\uE715");
  }, Error, "EncodingError U+E715");
  assertThrows(() => {
    ms932Encoder.encode("\uE716");
  }, Error, "EncodingError U+E716");
  assertThrows(() => {
    ms932Encoder.encode("\uE717");
  }, Error, "EncodingError U+E717");
  assertThrows(() => {
    ms932Encoder.encode("\uE718");
  }, Error, "EncodingError U+E718");
  assertThrows(() => {
    ms932Encoder.encode("\uE719");
  }, Error, "EncodingError U+E719");
  assertThrows(() => {
    ms932Encoder.encode("\uE71A");
  }, Error, "EncodingError U+E71A");
  assertThrows(() => {
    ms932Encoder.encode("\uE71B");
  }, Error, "EncodingError U+E71B");
  assertThrows(() => {
    ms932Encoder.encode("\uE71C");
  }, Error, "EncodingError U+E71C");
  assertThrows(() => {
    ms932Encoder.encode("\uE71D");
  }, Error, "EncodingError U+E71D");
  assertThrows(() => {
    ms932Encoder.encode("\uE71E");
  }, Error, "EncodingError U+E71E");
  assertThrows(() => {
    ms932Encoder.encode("\uE71F");
  }, Error, "EncodingError U+E71F");
  assertThrows(() => {
    ms932Encoder.encode("\uE720");
  }, Error, "EncodingError U+E720");
  assertThrows(() => {
    ms932Encoder.encode("\uE721");
  }, Error, "EncodingError U+E721");
  assertThrows(() => {
    ms932Encoder.encode("\uE722");
  }, Error, "EncodingError U+E722");
  assertThrows(() => {
    ms932Encoder.encode("\uE723");
  }, Error, "EncodingError U+E723");
  assertThrows(() => {
    ms932Encoder.encode("\uE724");
  }, Error, "EncodingError U+E724");
  assertThrows(() => {
    ms932Encoder.encode("\uE725");
  }, Error, "EncodingError U+E725");
  assertThrows(() => {
    ms932Encoder.encode("\uE726");
  }, Error, "EncodingError U+E726");
  assertThrows(() => {
    ms932Encoder.encode("\uE727");
  }, Error, "EncodingError U+E727");
  assertThrows(() => {
    ms932Encoder.encode("\uE728");
  }, Error, "EncodingError U+E728");
  assertThrows(() => {
    ms932Encoder.encode("\uE729");
  }, Error, "EncodingError U+E729");
  assertThrows(() => {
    ms932Encoder.encode("\uE72A");
  }, Error, "EncodingError U+E72A");
  assertThrows(() => {
    ms932Encoder.encode("\uE72B");
  }, Error, "EncodingError U+E72B");
  assertThrows(() => {
    ms932Encoder.encode("\uE72C");
  }, Error, "EncodingError U+E72C");
  assertThrows(() => {
    ms932Encoder.encode("\uE72D");
  }, Error, "EncodingError U+E72D");
  assertThrows(() => {
    ms932Encoder.encode("\uE72E");
  }, Error, "EncodingError U+E72E");
  assertThrows(() => {
    ms932Encoder.encode("\uE72F");
  }, Error, "EncodingError U+E72F");
  assertThrows(() => {
    ms932Encoder.encode("\uE730");
  }, Error, "EncodingError U+E730");
  assertThrows(() => {
    ms932Encoder.encode("\uE731");
  }, Error, "EncodingError U+E731");
  assertThrows(() => {
    ms932Encoder.encode("\uE732");
  }, Error, "EncodingError U+E732");
  assertThrows(() => {
    ms932Encoder.encode("\uE733");
  }, Error, "EncodingError U+E733");
  assertThrows(() => {
    ms932Encoder.encode("\uE734");
  }, Error, "EncodingError U+E734");
  assertThrows(() => {
    ms932Encoder.encode("\uE735");
  }, Error, "EncodingError U+E735");
  assertThrows(() => {
    ms932Encoder.encode("\uE736");
  }, Error, "EncodingError U+E736");
  assertThrows(() => {
    ms932Encoder.encode("\uE737");
  }, Error, "EncodingError U+E737");
  assertThrows(() => {
    ms932Encoder.encode("\uE738");
  }, Error, "EncodingError U+E738");
  assertThrows(() => {
    ms932Encoder.encode("\uE739");
  }, Error, "EncodingError U+E739");
  assertThrows(() => {
    ms932Encoder.encode("\uE73A");
  }, Error, "EncodingError U+E73A");
  assertThrows(() => {
    ms932Encoder.encode("\uE73B");
  }, Error, "EncodingError U+E73B");
  assertThrows(() => {
    ms932Encoder.encode("\uE73C");
  }, Error, "EncodingError U+E73C");
  assertThrows(() => {
    ms932Encoder.encode("\uE73D");
  }, Error, "EncodingError U+E73D");
  assertThrows(() => {
    ms932Encoder.encode("\uE73E");
  }, Error, "EncodingError U+E73E");
  assertThrows(() => {
    ms932Encoder.encode("\uE73F");
  }, Error, "EncodingError U+E73F");
  assertThrows(() => {
    ms932Encoder.encode("\uE740");
  }, Error, "EncodingError U+E740");
  assertThrows(() => {
    ms932Encoder.encode("\uE741");
  }, Error, "EncodingError U+E741");
  assertThrows(() => {
    ms932Encoder.encode("\uE742");
  }, Error, "EncodingError U+E742");
  assertThrows(() => {
    ms932Encoder.encode("\uE743");
  }, Error, "EncodingError U+E743");
  assertThrows(() => {
    ms932Encoder.encode("\uE744");
  }, Error, "EncodingError U+E744");
  assertThrows(() => {
    ms932Encoder.encode("\uE745");
  }, Error, "EncodingError U+E745");
  assertThrows(() => {
    ms932Encoder.encode("\uE746");
  }, Error, "EncodingError U+E746");
  assertThrows(() => {
    ms932Encoder.encode("\uE747");
  }, Error, "EncodingError U+E747");
  assertThrows(() => {
    ms932Encoder.encode("\uE748");
  }, Error, "EncodingError U+E748");
  assertThrows(() => {
    ms932Encoder.encode("\uE749");
  }, Error, "EncodingError U+E749");
  assertThrows(() => {
    ms932Encoder.encode("\uE74A");
  }, Error, "EncodingError U+E74A");
  assertThrows(() => {
    ms932Encoder.encode("\uE74B");
  }, Error, "EncodingError U+E74B");
  assertThrows(() => {
    ms932Encoder.encode("\uE74C");
  }, Error, "EncodingError U+E74C");
  assertThrows(() => {
    ms932Encoder.encode("\uE74D");
  }, Error, "EncodingError U+E74D");
  assertThrows(() => {
    ms932Encoder.encode("\uE74E");
  }, Error, "EncodingError U+E74E");
  assertThrows(() => {
    ms932Encoder.encode("\uE74F");
  }, Error, "EncodingError U+E74F");
  assertThrows(() => {
    ms932Encoder.encode("\uE750");
  }, Error, "EncodingError U+E750");
  assertThrows(() => {
    ms932Encoder.encode("\uE751");
  }, Error, "EncodingError U+E751");
  assertThrows(() => {
    ms932Encoder.encode("\uE752");
  }, Error, "EncodingError U+E752");
  assertThrows(() => {
    ms932Encoder.encode("\uE753");
  }, Error, "EncodingError U+E753");
  assertThrows(() => {
    ms932Encoder.encode("\uE754");
  }, Error, "EncodingError U+E754");
  assertThrows(() => {
    ms932Encoder.encode("\uE755");
  }, Error, "EncodingError U+E755");
  assertThrows(() => {
    ms932Encoder.encode("\uE756");
  }, Error, "EncodingError U+E756");
  assertThrows(() => {
    ms932Encoder.encode("\uE757");
  }, Error, "EncodingError U+E757");
  assertThrows(() => {
    ms932Encoder.encode("\uE758");
  }, Error, "EncodingError U+E758");
  assertThrows(() => {
    ms932Encoder.encode("\uE759");
  }, Error, "EncodingError U+E759");
  assertThrows(() => {
    ms932Encoder.encode("\uE75A");
  }, Error, "EncodingError U+E75A");
  assertThrows(() => {
    ms932Encoder.encode("\uE75B");
  }, Error, "EncodingError U+E75B");
  assertThrows(() => {
    ms932Encoder.encode("\uE75C");
  }, Error, "EncodingError U+E75C");
  assertThrows(() => {
    ms932Encoder.encode("\uE75D");
  }, Error, "EncodingError U+E75D");
  assertThrows(() => {
    ms932Encoder.encode("\uE75E");
  }, Error, "EncodingError U+E75E");
  assertThrows(() => {
    ms932Encoder.encode("\uE75F");
  }, Error, "EncodingError U+E75F");
  assertThrows(() => {
    ms932Encoder.encode("\uE760");
  }, Error, "EncodingError U+E760");
  assertThrows(() => {
    ms932Encoder.encode("\uE761");
  }, Error, "EncodingError U+E761");
  assertThrows(() => {
    ms932Encoder.encode("\uE762");
  }, Error, "EncodingError U+E762");
  assertThrows(() => {
    ms932Encoder.encode("\uE763");
  }, Error, "EncodingError U+E763");
  assertThrows(() => {
    ms932Encoder.encode("\uE764");
  }, Error, "EncodingError U+E764");
  assertThrows(() => {
    ms932Encoder.encode("\uE765");
  }, Error, "EncodingError U+E765");
  assertThrows(() => {
    ms932Encoder.encode("\uE766");
  }, Error, "EncodingError U+E766");
  assertThrows(() => {
    ms932Encoder.encode("\uE767");
  }, Error, "EncodingError U+E767");
  assertThrows(() => {
    ms932Encoder.encode("\uE768");
  }, Error, "EncodingError U+E768");
  assertThrows(() => {
    ms932Encoder.encode("\uE769");
  }, Error, "EncodingError U+E769");
  assertThrows(() => {
    ms932Encoder.encode("\uE76A");
  }, Error, "EncodingError U+E76A");
  assertThrows(() => {
    ms932Encoder.encode("\uE76B");
  }, Error, "EncodingError U+E76B");
  assertThrows(() => {
    ms932Encoder.encode("\uE76C");
  }, Error, "EncodingError U+E76C");
  assertThrows(() => {
    ms932Encoder.encode("\uE76D");
  }, Error, "EncodingError U+E76D");
  assertThrows(() => {
    ms932Encoder.encode("\uE76E");
  }, Error, "EncodingError U+E76E");
  assertThrows(() => {
    ms932Encoder.encode("\uE76F");
  }, Error, "EncodingError U+E76F");
  assertThrows(() => {
    ms932Encoder.encode("\uE770");
  }, Error, "EncodingError U+E770");
  assertThrows(() => {
    ms932Encoder.encode("\uE771");
  }, Error, "EncodingError U+E771");
  assertThrows(() => {
    ms932Encoder.encode("\uE772");
  }, Error, "EncodingError U+E772");
  assertThrows(() => {
    ms932Encoder.encode("\uE773");
  }, Error, "EncodingError U+E773");
  assertThrows(() => {
    ms932Encoder.encode("\uE774");
  }, Error, "EncodingError U+E774");
  assertThrows(() => {
    ms932Encoder.encode("\uE775");
  }, Error, "EncodingError U+E775");
  assertThrows(() => {
    ms932Encoder.encode("\uE776");
  }, Error, "EncodingError U+E776");
  assertThrows(() => {
    ms932Encoder.encode("\uE777");
  }, Error, "EncodingError U+E777");
  assertThrows(() => {
    ms932Encoder.encode("\uE778");
  }, Error, "EncodingError U+E778");
  assertThrows(() => {
    ms932Encoder.encode("\uE779");
  }, Error, "EncodingError U+E779");
  assertThrows(() => {
    ms932Encoder.encode("\uE77A");
  }, Error, "EncodingError U+E77A");
  assertThrows(() => {
    ms932Encoder.encode("\uE77B");
  }, Error, "EncodingError U+E77B");
  assertThrows(() => {
    ms932Encoder.encode("\uE77C");
  }, Error, "EncodingError U+E77C");
  assertThrows(() => {
    ms932Encoder.encode("\uE77D");
  }, Error, "EncodingError U+E77D");
  assertThrows(() => {
    ms932Encoder.encode("\uE77E");
  }, Error, "EncodingError U+E77E");
  assertThrows(() => {
    ms932Encoder.encode("\uE77F");
  }, Error, "EncodingError U+E77F");
  assertThrows(() => {
    ms932Encoder.encode("\uE780");
  }, Error, "EncodingError U+E780");
  assertThrows(() => {
    ms932Encoder.encode("\uE781");
  }, Error, "EncodingError U+E781");
  assertThrows(() => {
    ms932Encoder.encode("\uE782");
  }, Error, "EncodingError U+E782");
  assertThrows(() => {
    ms932Encoder.encode("\uE783");
  }, Error, "EncodingError U+E783");
  assertThrows(() => {
    ms932Encoder.encode("\uE784");
  }, Error, "EncodingError U+E784");
  assertThrows(() => {
    ms932Encoder.encode("\uE785");
  }, Error, "EncodingError U+E785");
  assertThrows(() => {
    ms932Encoder.encode("\uE786");
  }, Error, "EncodingError U+E786");
  assertThrows(() => {
    ms932Encoder.encode("\uE787");
  }, Error, "EncodingError U+E787");
  assertThrows(() => {
    ms932Encoder.encode("\uE788");
  }, Error, "EncodingError U+E788");
  assertThrows(() => {
    ms932Encoder.encode("\uE789");
  }, Error, "EncodingError U+E789");
  assertThrows(() => {
    ms932Encoder.encode("\uE78A");
  }, Error, "EncodingError U+E78A");
  assertThrows(() => {
    ms932Encoder.encode("\uE78B");
  }, Error, "EncodingError U+E78B");
  assertThrows(() => {
    ms932Encoder.encode("\uE78C");
  }, Error, "EncodingError U+E78C");
  assertThrows(() => {
    ms932Encoder.encode("\uE78D");
  }, Error, "EncodingError U+E78D");
  assertThrows(() => {
    ms932Encoder.encode("\uE78E");
  }, Error, "EncodingError U+E78E");
  assertThrows(() => {
    ms932Encoder.encode("\uE78F");
  }, Error, "EncodingError U+E78F");
  assertThrows(() => {
    ms932Encoder.encode("\uE790");
  }, Error, "EncodingError U+E790");
  assertThrows(() => {
    ms932Encoder.encode("\uE791");
  }, Error, "EncodingError U+E791");
  assertThrows(() => {
    ms932Encoder.encode("\uE792");
  }, Error, "EncodingError U+E792");
  assertThrows(() => {
    ms932Encoder.encode("\uE793");
  }, Error, "EncodingError U+E793");
  assertThrows(() => {
    ms932Encoder.encode("\uE794");
  }, Error, "EncodingError U+E794");
  assertThrows(() => {
    ms932Encoder.encode("\uE795");
  }, Error, "EncodingError U+E795");
  assertThrows(() => {
    ms932Encoder.encode("\uE796");
  }, Error, "EncodingError U+E796");
  assertThrows(() => {
    ms932Encoder.encode("\uE797");
  }, Error, "EncodingError U+E797");
  assertThrows(() => {
    ms932Encoder.encode("\uE798");
  }, Error, "EncodingError U+E798");
  assertThrows(() => {
    ms932Encoder.encode("\uE799");
  }, Error, "EncodingError U+E799");
  assertThrows(() => {
    ms932Encoder.encode("\uE79A");
  }, Error, "EncodingError U+E79A");
  assertThrows(() => {
    ms932Encoder.encode("\uE79B");
  }, Error, "EncodingError U+E79B");
  assertThrows(() => {
    ms932Encoder.encode("\uE79C");
  }, Error, "EncodingError U+E79C");
  assertThrows(() => {
    ms932Encoder.encode("\uE79D");
  }, Error, "EncodingError U+E79D");
  assertThrows(() => {
    ms932Encoder.encode("\uE79E");
  }, Error, "EncodingError U+E79E");
  assertThrows(() => {
    ms932Encoder.encode("\uE79F");
  }, Error, "EncodingError U+E79F");
  assertThrows(() => {
    ms932Encoder.encode("\uE7A0");
  }, Error, "EncodingError U+E7A0");
  assertThrows(() => {
    ms932Encoder.encode("\uE7A1");
  }, Error, "EncodingError U+E7A1");
  assertThrows(() => {
    ms932Encoder.encode("\uE7A2");
  }, Error, "EncodingError U+E7A2");
  assertThrows(() => {
    ms932Encoder.encode("\uE7A3");
  }, Error, "EncodingError U+E7A3");
  assertThrows(() => {
    ms932Encoder.encode("\uE7A4");
  }, Error, "EncodingError U+E7A4");
  assertThrows(() => {
    ms932Encoder.encode("\uE7A5");
  }, Error, "EncodingError U+E7A5");
  assertThrows(() => {
    ms932Encoder.encode("\uE7A6");
  }, Error, "EncodingError U+E7A6");
  assertThrows(() => {
    ms932Encoder.encode("\uE7A7");
  }, Error, "EncodingError U+E7A7");
  assertThrows(() => {
    ms932Encoder.encode("\uE7A8");
  }, Error, "EncodingError U+E7A8");
  assertThrows(() => {
    ms932Encoder.encode("\uE7A9");
  }, Error, "EncodingError U+E7A9");
  assertThrows(() => {
    ms932Encoder.encode("\uE7AA");
  }, Error, "EncodingError U+E7AA");
  assertThrows(() => {
    ms932Encoder.encode("\uE7AB");
  }, Error, "EncodingError U+E7AB");
  assertThrows(() => {
    ms932Encoder.encode("\uE7AC");
  }, Error, "EncodingError U+E7AC");
  assertThrows(() => {
    ms932Encoder.encode("\uE7AD");
  }, Error, "EncodingError U+E7AD");
  assertThrows(() => {
    ms932Encoder.encode("\uE7AE");
  }, Error, "EncodingError U+E7AE");
  assertThrows(() => {
    ms932Encoder.encode("\uE7AF");
  }, Error, "EncodingError U+E7AF");
  assertThrows(() => {
    ms932Encoder.encode("\uE7B0");
  }, Error, "EncodingError U+E7B0");
  assertThrows(() => {
    ms932Encoder.encode("\uE7B1");
  }, Error, "EncodingError U+E7B1");
  assertThrows(() => {
    ms932Encoder.encode("\uE7B2");
  }, Error, "EncodingError U+E7B2");
  assertThrows(() => {
    ms932Encoder.encode("\uE7B3");
  }, Error, "EncodingError U+E7B3");
  assertThrows(() => {
    ms932Encoder.encode("\uE7B4");
  }, Error, "EncodingError U+E7B4");
  assertThrows(() => {
    ms932Encoder.encode("\uE7B5");
  }, Error, "EncodingError U+E7B5");
  assertThrows(() => {
    ms932Encoder.encode("\uE7B6");
  }, Error, "EncodingError U+E7B6");
  assertThrows(() => {
    ms932Encoder.encode("\uE7B7");
  }, Error, "EncodingError U+E7B7");
  assertThrows(() => {
    ms932Encoder.encode("\uE7B8");
  }, Error, "EncodingError U+E7B8");
  assertThrows(() => {
    ms932Encoder.encode("\uE7B9");
  }, Error, "EncodingError U+E7B9");
  assertThrows(() => {
    ms932Encoder.encode("\uE7BA");
  }, Error, "EncodingError U+E7BA");
  assertThrows(() => {
    ms932Encoder.encode("\uE7BB");
  }, Error, "EncodingError U+E7BB");
  assertThrows(() => {
    ms932Encoder.encode("\uE7BC");
  }, Error, "EncodingError U+E7BC");
  assertThrows(() => {
    ms932Encoder.encode("\uE7BD");
  }, Error, "EncodingError U+E7BD");
  assertThrows(() => {
    ms932Encoder.encode("\uE7BE");
  }, Error, "EncodingError U+E7BE");
  assertThrows(() => {
    ms932Encoder.encode("\uE7BF");
  }, Error, "EncodingError U+E7BF");
  assertThrows(() => {
    ms932Encoder.encode("\uE7C0");
  }, Error, "EncodingError U+E7C0");
  assertThrows(() => {
    ms932Encoder.encode("\uE7C1");
  }, Error, "EncodingError U+E7C1");
  assertThrows(() => {
    ms932Encoder.encode("\uE7C2");
  }, Error, "EncodingError U+E7C2");
  assertThrows(() => {
    ms932Encoder.encode("\uE7C3");
  }, Error, "EncodingError U+E7C3");
  assertThrows(() => {
    ms932Encoder.encode("\uE7C4");
  }, Error, "EncodingError U+E7C4");
  assertThrows(() => {
    ms932Encoder.encode("\uE7C5");
  }, Error, "EncodingError U+E7C5");
  assertThrows(() => {
    ms932Encoder.encode("\uE7C6");
  }, Error, "EncodingError U+E7C6");
  assertThrows(() => {
    ms932Encoder.encode("\uE7C7");
  }, Error, "EncodingError U+E7C7");
  assertThrows(() => {
    ms932Encoder.encode("\uE7C8");
  }, Error, "EncodingError U+E7C8");
  assertThrows(() => {
    ms932Encoder.encode("\uE7C9");
  }, Error, "EncodingError U+E7C9");
  assertThrows(() => {
    ms932Encoder.encode("\uE7CA");
  }, Error, "EncodingError U+E7CA");
  assertThrows(() => {
    ms932Encoder.encode("\uE7CB");
  }, Error, "EncodingError U+E7CB");
  assertThrows(() => {
    ms932Encoder.encode("\uE7CC");
  }, Error, "EncodingError U+E7CC");
  assertThrows(() => {
    ms932Encoder.encode("\uE7CD");
  }, Error, "EncodingError U+E7CD");
  assertThrows(() => {
    ms932Encoder.encode("\uE7CE");
  }, Error, "EncodingError U+E7CE");
  assertThrows(() => {
    ms932Encoder.encode("\uE7CF");
  }, Error, "EncodingError U+E7CF");
  assertThrows(() => {
    ms932Encoder.encode("\uE7D0");
  }, Error, "EncodingError U+E7D0");
  assertThrows(() => {
    ms932Encoder.encode("\uE7D1");
  }, Error, "EncodingError U+E7D1");
  assertThrows(() => {
    ms932Encoder.encode("\uE7D2");
  }, Error, "EncodingError U+E7D2");
  assertThrows(() => {
    ms932Encoder.encode("\uE7D3");
  }, Error, "EncodingError U+E7D3");
  assertThrows(() => {
    ms932Encoder.encode("\uE7D4");
  }, Error, "EncodingError U+E7D4");
  assertThrows(() => {
    ms932Encoder.encode("\uE7D5");
  }, Error, "EncodingError U+E7D5");
  assertThrows(() => {
    ms932Encoder.encode("\uE7D6");
  }, Error, "EncodingError U+E7D6");
  assertThrows(() => {
    ms932Encoder.encode("\uE7D7");
  }, Error, "EncodingError U+E7D7");
  assertThrows(() => {
    ms932Encoder.encode("\uE7D8");
  }, Error, "EncodingError U+E7D8");
  assertThrows(() => {
    ms932Encoder.encode("\uE7D9");
  }, Error, "EncodingError U+E7D9");
  assertThrows(() => {
    ms932Encoder.encode("\uE7DA");
  }, Error, "EncodingError U+E7DA");
  assertThrows(() => {
    ms932Encoder.encode("\uE7DB");
  }, Error, "EncodingError U+E7DB");
  assertThrows(() => {
    ms932Encoder.encode("\uE7DC");
  }, Error, "EncodingError U+E7DC");
  assertThrows(() => {
    ms932Encoder.encode("\uE7DD");
  }, Error, "EncodingError U+E7DD");
  assertThrows(() => {
    ms932Encoder.encode("\uE7DE");
  }, Error, "EncodingError U+E7DE");
  assertThrows(() => {
    ms932Encoder.encode("\uE7DF");
  }, Error, "EncodingError U+E7DF");
  assertThrows(() => {
    ms932Encoder.encode("\uE7E0");
  }, Error, "EncodingError U+E7E0");
  assertThrows(() => {
    ms932Encoder.encode("\uE7E1");
  }, Error, "EncodingError U+E7E1");
  assertThrows(() => {
    ms932Encoder.encode("\uE7E2");
  }, Error, "EncodingError U+E7E2");
  assertThrows(() => {
    ms932Encoder.encode("\uE7E3");
  }, Error, "EncodingError U+E7E3");
  assertThrows(() => {
    ms932Encoder.encode("\uE7E4");
  }, Error, "EncodingError U+E7E4");
  assertThrows(() => {
    ms932Encoder.encode("\uE7E5");
  }, Error, "EncodingError U+E7E5");
  assertThrows(() => {
    ms932Encoder.encode("\uE7E6");
  }, Error, "EncodingError U+E7E6");
  assertThrows(() => {
    ms932Encoder.encode("\uE7E7");
  }, Error, "EncodingError U+E7E7");
  assertThrows(() => {
    ms932Encoder.encode("\uE7E8");
  }, Error, "EncodingError U+E7E8");
  assertThrows(() => {
    ms932Encoder.encode("\uE7E9");
  }, Error, "EncodingError U+E7E9");
  assertThrows(() => {
    ms932Encoder.encode("\uE7EA");
  }, Error, "EncodingError U+E7EA");
  assertThrows(() => {
    ms932Encoder.encode("\uE7EB");
  }, Error, "EncodingError U+E7EB");
  assertThrows(() => {
    ms932Encoder.encode("\uE7EC");
  }, Error, "EncodingError U+E7EC");
  assertThrows(() => {
    ms932Encoder.encode("\uE7ED");
  }, Error, "EncodingError U+E7ED");
  assertThrows(() => {
    ms932Encoder.encode("\uE7EE");
  }, Error, "EncodingError U+E7EE");
  assertThrows(() => {
    ms932Encoder.encode("\uE7EF");
  }, Error, "EncodingError U+E7EF");
  assertThrows(() => {
    ms932Encoder.encode("\uE7F0");
  }, Error, "EncodingError U+E7F0");
  assertThrows(() => {
    ms932Encoder.encode("\uE7F1");
  }, Error, "EncodingError U+E7F1");
  assertThrows(() => {
    ms932Encoder.encode("\uE7F2");
  }, Error, "EncodingError U+E7F2");
  assertThrows(() => {
    ms932Encoder.encode("\uE7F3");
  }, Error, "EncodingError U+E7F3");
  assertThrows(() => {
    ms932Encoder.encode("\uE7F4");
  }, Error, "EncodingError U+E7F4");
  assertThrows(() => {
    ms932Encoder.encode("\uE7F5");
  }, Error, "EncodingError U+E7F5");
  assertThrows(() => {
    ms932Encoder.encode("\uE7F6");
  }, Error, "EncodingError U+E7F6");
  assertThrows(() => {
    ms932Encoder.encode("\uE7F7");
  }, Error, "EncodingError U+E7F7");
  assertThrows(() => {
    ms932Encoder.encode("\uE7F8");
  }, Error, "EncodingError U+E7F8");
  assertThrows(() => {
    ms932Encoder.encode("\uE7F9");
  }, Error, "EncodingError U+E7F9");
  assertThrows(() => {
    ms932Encoder.encode("\uE7FA");
  }, Error, "EncodingError U+E7FA");
  assertThrows(() => {
    ms932Encoder.encode("\uE7FB");
  }, Error, "EncodingError U+E7FB");
  assertThrows(() => {
    ms932Encoder.encode("\uE7FC");
  }, Error, "EncodingError U+E7FC");
  assertThrows(() => {
    ms932Encoder.encode("\uE7FD");
  }, Error, "EncodingError U+E7FD");
  assertThrows(() => {
    ms932Encoder.encode("\uE7FE");
  }, Error, "EncodingError U+E7FE");
  assertThrows(() => {
    ms932Encoder.encode("\uE7FF");
  }, Error, "EncodingError U+E7FF");
  assertThrows(() => {
    ms932Encoder.encode("\uE800");
  }, Error, "EncodingError U+E800");
  assertThrows(() => {
    ms932Encoder.encode("\uE801");
  }, Error, "EncodingError U+E801");
  assertThrows(() => {
    ms932Encoder.encode("\uE802");
  }, Error, "EncodingError U+E802");
  assertThrows(() => {
    ms932Encoder.encode("\uE803");
  }, Error, "EncodingError U+E803");
  assertThrows(() => {
    ms932Encoder.encode("\uE804");
  }, Error, "EncodingError U+E804");
  assertThrows(() => {
    ms932Encoder.encode("\uE805");
  }, Error, "EncodingError U+E805");
  assertThrows(() => {
    ms932Encoder.encode("\uE806");
  }, Error, "EncodingError U+E806");
  assertThrows(() => {
    ms932Encoder.encode("\uE807");
  }, Error, "EncodingError U+E807");
  assertThrows(() => {
    ms932Encoder.encode("\uE808");
  }, Error, "EncodingError U+E808");
  assertThrows(() => {
    ms932Encoder.encode("\uE809");
  }, Error, "EncodingError U+E809");
  assertThrows(() => {
    ms932Encoder.encode("\uE80A");
  }, Error, "EncodingError U+E80A");
  assertThrows(() => {
    ms932Encoder.encode("\uE80B");
  }, Error, "EncodingError U+E80B");
  assertThrows(() => {
    ms932Encoder.encode("\uE80C");
  }, Error, "EncodingError U+E80C");
  assertThrows(() => {
    ms932Encoder.encode("\uE80D");
  }, Error, "EncodingError U+E80D");
  assertThrows(() => {
    ms932Encoder.encode("\uE80E");
  }, Error, "EncodingError U+E80E");
  assertThrows(() => {
    ms932Encoder.encode("\uE80F");
  }, Error, "EncodingError U+E80F");
  assertThrows(() => {
    ms932Encoder.encode("\uE810");
  }, Error, "EncodingError U+E810");
  assertThrows(() => {
    ms932Encoder.encode("\uE811");
  }, Error, "EncodingError U+E811");
  assertThrows(() => {
    ms932Encoder.encode("\uE812");
  }, Error, "EncodingError U+E812");
  assertThrows(() => {
    ms932Encoder.encode("\uE813");
  }, Error, "EncodingError U+E813");
  assertThrows(() => {
    ms932Encoder.encode("\uE814");
  }, Error, "EncodingError U+E814");
  assertThrows(() => {
    ms932Encoder.encode("\uE815");
  }, Error, "EncodingError U+E815");
  assertThrows(() => {
    ms932Encoder.encode("\uE816");
  }, Error, "EncodingError U+E816");
  assertThrows(() => {
    ms932Encoder.encode("\uE817");
  }, Error, "EncodingError U+E817");
  assertThrows(() => {
    ms932Encoder.encode("\uE818");
  }, Error, "EncodingError U+E818");
  assertThrows(() => {
    ms932Encoder.encode("\uE819");
  }, Error, "EncodingError U+E819");
  assertThrows(() => {
    ms932Encoder.encode("\uE81A");
  }, Error, "EncodingError U+E81A");
  assertThrows(() => {
    ms932Encoder.encode("\uE81B");
  }, Error, "EncodingError U+E81B");
  assertThrows(() => {
    ms932Encoder.encode("\uE81C");
  }, Error, "EncodingError U+E81C");
  assertThrows(() => {
    ms932Encoder.encode("\uE81D");
  }, Error, "EncodingError U+E81D");
  assertThrows(() => {
    ms932Encoder.encode("\uE81E");
  }, Error, "EncodingError U+E81E");
  assertThrows(() => {
    ms932Encoder.encode("\uE81F");
  }, Error, "EncodingError U+E81F");
  assertThrows(() => {
    ms932Encoder.encode("\uE820");
  }, Error, "EncodingError U+E820");
  assertThrows(() => {
    ms932Encoder.encode("\uE821");
  }, Error, "EncodingError U+E821");
  assertThrows(() => {
    ms932Encoder.encode("\uE822");
  }, Error, "EncodingError U+E822");
  assertThrows(() => {
    ms932Encoder.encode("\uE823");
  }, Error, "EncodingError U+E823");
  assertThrows(() => {
    ms932Encoder.encode("\uE824");
  }, Error, "EncodingError U+E824");
  assertThrows(() => {
    ms932Encoder.encode("\uE825");
  }, Error, "EncodingError U+E825");
  assertThrows(() => {
    ms932Encoder.encode("\uE826");
  }, Error, "EncodingError U+E826");
  assertThrows(() => {
    ms932Encoder.encode("\uE827");
  }, Error, "EncodingError U+E827");
  assertThrows(() => {
    ms932Encoder.encode("\uE828");
  }, Error, "EncodingError U+E828");
  assertThrows(() => {
    ms932Encoder.encode("\uE829");
  }, Error, "EncodingError U+E829");
  assertThrows(() => {
    ms932Encoder.encode("\uE82A");
  }, Error, "EncodingError U+E82A");
  assertThrows(() => {
    ms932Encoder.encode("\uE82B");
  }, Error, "EncodingError U+E82B");
  assertThrows(() => {
    ms932Encoder.encode("\uE82C");
  }, Error, "EncodingError U+E82C");
  assertThrows(() => {
    ms932Encoder.encode("\uE82D");
  }, Error, "EncodingError U+E82D");
  assertThrows(() => {
    ms932Encoder.encode("\uE82E");
  }, Error, "EncodingError U+E82E");
  assertThrows(() => {
    ms932Encoder.encode("\uE82F");
  }, Error, "EncodingError U+E82F");
  assertThrows(() => {
    ms932Encoder.encode("\uE830");
  }, Error, "EncodingError U+E830");
  assertThrows(() => {
    ms932Encoder.encode("\uE831");
  }, Error, "EncodingError U+E831");
  assertThrows(() => {
    ms932Encoder.encode("\uE832");
  }, Error, "EncodingError U+E832");
  assertThrows(() => {
    ms932Encoder.encode("\uE833");
  }, Error, "EncodingError U+E833");
  assertThrows(() => {
    ms932Encoder.encode("\uE834");
  }, Error, "EncodingError U+E834");
  assertThrows(() => {
    ms932Encoder.encode("\uE835");
  }, Error, "EncodingError U+E835");
  assertThrows(() => {
    ms932Encoder.encode("\uE836");
  }, Error, "EncodingError U+E836");
  assertThrows(() => {
    ms932Encoder.encode("\uE837");
  }, Error, "EncodingError U+E837");
  assertThrows(() => {
    ms932Encoder.encode("\uE838");
  }, Error, "EncodingError U+E838");
  assertThrows(() => {
    ms932Encoder.encode("\uE839");
  }, Error, "EncodingError U+E839");
  assertThrows(() => {
    ms932Encoder.encode("\uE83A");
  }, Error, "EncodingError U+E83A");
  assertThrows(() => {
    ms932Encoder.encode("\uE83B");
  }, Error, "EncodingError U+E83B");
  assertThrows(() => {
    ms932Encoder.encode("\uE83C");
  }, Error, "EncodingError U+E83C");
  assertThrows(() => {
    ms932Encoder.encode("\uE83D");
  }, Error, "EncodingError U+E83D");
  assertThrows(() => {
    ms932Encoder.encode("\uE83E");
  }, Error, "EncodingError U+E83E");
  assertThrows(() => {
    ms932Encoder.encode("\uE83F");
  }, Error, "EncodingError U+E83F");
  assertThrows(() => {
    ms932Encoder.encode("\uE840");
  }, Error, "EncodingError U+E840");
  assertThrows(() => {
    ms932Encoder.encode("\uE841");
  }, Error, "EncodingError U+E841");
  assertThrows(() => {
    ms932Encoder.encode("\uE842");
  }, Error, "EncodingError U+E842");
  assertThrows(() => {
    ms932Encoder.encode("\uE843");
  }, Error, "EncodingError U+E843");
  assertThrows(() => {
    ms932Encoder.encode("\uE844");
  }, Error, "EncodingError U+E844");
  assertThrows(() => {
    ms932Encoder.encode("\uE845");
  }, Error, "EncodingError U+E845");
  assertThrows(() => {
    ms932Encoder.encode("\uE846");
  }, Error, "EncodingError U+E846");
  assertThrows(() => {
    ms932Encoder.encode("\uE847");
  }, Error, "EncodingError U+E847");
  assertThrows(() => {
    ms932Encoder.encode("\uE848");
  }, Error, "EncodingError U+E848");
  assertThrows(() => {
    ms932Encoder.encode("\uE849");
  }, Error, "EncodingError U+E849");
  assertThrows(() => {
    ms932Encoder.encode("\uE84A");
  }, Error, "EncodingError U+E84A");
  assertThrows(() => {
    ms932Encoder.encode("\uE84B");
  }, Error, "EncodingError U+E84B");
  assertThrows(() => {
    ms932Encoder.encode("\uE84C");
  }, Error, "EncodingError U+E84C");
  assertThrows(() => {
    ms932Encoder.encode("\uE84D");
  }, Error, "EncodingError U+E84D");
  assertThrows(() => {
    ms932Encoder.encode("\uE84E");
  }, Error, "EncodingError U+E84E");
  assertThrows(() => {
    ms932Encoder.encode("\uE84F");
  }, Error, "EncodingError U+E84F");
  assertThrows(() => {
    ms932Encoder.encode("\uE850");
  }, Error, "EncodingError U+E850");
  assertThrows(() => {
    ms932Encoder.encode("\uE851");
  }, Error, "EncodingError U+E851");
  assertThrows(() => {
    ms932Encoder.encode("\uE852");
  }, Error, "EncodingError U+E852");
  assertThrows(() => {
    ms932Encoder.encode("\uE853");
  }, Error, "EncodingError U+E853");
  assertThrows(() => {
    ms932Encoder.encode("\uE854");
  }, Error, "EncodingError U+E854");
  assertThrows(() => {
    ms932Encoder.encode("\uE855");
  }, Error, "EncodingError U+E855");
  assertThrows(() => {
    ms932Encoder.encode("\uE856");
  }, Error, "EncodingError U+E856");
  assertThrows(() => {
    ms932Encoder.encode("\uE857");
  }, Error, "EncodingError U+E857");
  assertThrows(() => {
    ms932Encoder.encode("\uE858");
  }, Error, "EncodingError U+E858");
  assertThrows(() => {
    ms932Encoder.encode("\uE859");
  }, Error, "EncodingError U+E859");
  assertThrows(() => {
    ms932Encoder.encode("\uE85A");
  }, Error, "EncodingError U+E85A");
  assertThrows(() => {
    ms932Encoder.encode("\uE85B");
  }, Error, "EncodingError U+E85B");
  assertThrows(() => {
    ms932Encoder.encode("\uE85C");
  }, Error, "EncodingError U+E85C");
  assertThrows(() => {
    ms932Encoder.encode("\uE85D");
  }, Error, "EncodingError U+E85D");
  assertThrows(() => {
    ms932Encoder.encode("\uE85E");
  }, Error, "EncodingError U+E85E");
  assertThrows(() => {
    ms932Encoder.encode("\uE85F");
  }, Error, "EncodingError U+E85F");
  assertThrows(() => {
    ms932Encoder.encode("\uE860");
  }, Error, "EncodingError U+E860");
  assertThrows(() => {
    ms932Encoder.encode("\uE861");
  }, Error, "EncodingError U+E861");
  assertThrows(() => {
    ms932Encoder.encode("\uE862");
  }, Error, "EncodingError U+E862");
  assertThrows(() => {
    ms932Encoder.encode("\uE863");
  }, Error, "EncodingError U+E863");
  assertThrows(() => {
    ms932Encoder.encode("\uE864");
  }, Error, "EncodingError U+E864");
  assertThrows(() => {
    ms932Encoder.encode("\uE865");
  }, Error, "EncodingError U+E865");
  assertThrows(() => {
    ms932Encoder.encode("\uE866");
  }, Error, "EncodingError U+E866");
  assertThrows(() => {
    ms932Encoder.encode("\uE867");
  }, Error, "EncodingError U+E867");
  assertThrows(() => {
    ms932Encoder.encode("\uE868");
  }, Error, "EncodingError U+E868");
  assertThrows(() => {
    ms932Encoder.encode("\uE869");
  }, Error, "EncodingError U+E869");
  assertThrows(() => {
    ms932Encoder.encode("\uE86A");
  }, Error, "EncodingError U+E86A");
  assertThrows(() => {
    ms932Encoder.encode("\uE86B");
  }, Error, "EncodingError U+E86B");
  assertThrows(() => {
    ms932Encoder.encode("\uE86C");
  }, Error, "EncodingError U+E86C");
  assertThrows(() => {
    ms932Encoder.encode("\uE86D");
  }, Error, "EncodingError U+E86D");
  assertThrows(() => {
    ms932Encoder.encode("\uE86E");
  }, Error, "EncodingError U+E86E");
  assertThrows(() => {
    ms932Encoder.encode("\uE86F");
  }, Error, "EncodingError U+E86F");
  assertThrows(() => {
    ms932Encoder.encode("\uE870");
  }, Error, "EncodingError U+E870");
  assertThrows(() => {
    ms932Encoder.encode("\uE871");
  }, Error, "EncodingError U+E871");
  assertThrows(() => {
    ms932Encoder.encode("\uE872");
  }, Error, "EncodingError U+E872");
  assertThrows(() => {
    ms932Encoder.encode("\uE873");
  }, Error, "EncodingError U+E873");
  assertThrows(() => {
    ms932Encoder.encode("\uE874");
  }, Error, "EncodingError U+E874");
  assertThrows(() => {
    ms932Encoder.encode("\uE875");
  }, Error, "EncodingError U+E875");
  assertThrows(() => {
    ms932Encoder.encode("\uE876");
  }, Error, "EncodingError U+E876");
  assertThrows(() => {
    ms932Encoder.encode("\uE877");
  }, Error, "EncodingError U+E877");
  assertThrows(() => {
    ms932Encoder.encode("\uE878");
  }, Error, "EncodingError U+E878");
  assertThrows(() => {
    ms932Encoder.encode("\uE879");
  }, Error, "EncodingError U+E879");
  assertThrows(() => {
    ms932Encoder.encode("\uE87A");
  }, Error, "EncodingError U+E87A");
  assertThrows(() => {
    ms932Encoder.encode("\uE87B");
  }, Error, "EncodingError U+E87B");
  assertThrows(() => {
    ms932Encoder.encode("\uE87C");
  }, Error, "EncodingError U+E87C");
  assertThrows(() => {
    ms932Encoder.encode("\uE87D");
  }, Error, "EncodingError U+E87D");
  assertThrows(() => {
    ms932Encoder.encode("\uE87E");
  }, Error, "EncodingError U+E87E");
  assertThrows(() => {
    ms932Encoder.encode("\uE87F");
  }, Error, "EncodingError U+E87F");
  assertThrows(() => {
    ms932Encoder.encode("\uE880");
  }, Error, "EncodingError U+E880");
  assertThrows(() => {
    ms932Encoder.encode("\uE881");
  }, Error, "EncodingError U+E881");
  assertThrows(() => {
    ms932Encoder.encode("\uE882");
  }, Error, "EncodingError U+E882");
  assertThrows(() => {
    ms932Encoder.encode("\uE883");
  }, Error, "EncodingError U+E883");
  assertThrows(() => {
    ms932Encoder.encode("\uE884");
  }, Error, "EncodingError U+E884");
  assertThrows(() => {
    ms932Encoder.encode("\uE885");
  }, Error, "EncodingError U+E885");
  assertThrows(() => {
    ms932Encoder.encode("\uE886");
  }, Error, "EncodingError U+E886");
  assertThrows(() => {
    ms932Encoder.encode("\uE887");
  }, Error, "EncodingError U+E887");
  assertThrows(() => {
    ms932Encoder.encode("\uE888");
  }, Error, "EncodingError U+E888");
  assertThrows(() => {
    ms932Encoder.encode("\uE889");
  }, Error, "EncodingError U+E889");
  assertThrows(() => {
    ms932Encoder.encode("\uE88A");
  }, Error, "EncodingError U+E88A");
  assertThrows(() => {
    ms932Encoder.encode("\uE88B");
  }, Error, "EncodingError U+E88B");
  assertThrows(() => {
    ms932Encoder.encode("\uE88C");
  }, Error, "EncodingError U+E88C");
  assertThrows(() => {
    ms932Encoder.encode("\uE88D");
  }, Error, "EncodingError U+E88D");
  assertThrows(() => {
    ms932Encoder.encode("\uE88E");
  }, Error, "EncodingError U+E88E");
  assertThrows(() => {
    ms932Encoder.encode("\uE88F");
  }, Error, "EncodingError U+E88F");
  assertThrows(() => {
    ms932Encoder.encode("\uE890");
  }, Error, "EncodingError U+E890");
  assertThrows(() => {
    ms932Encoder.encode("\uE891");
  }, Error, "EncodingError U+E891");
  assertThrows(() => {
    ms932Encoder.encode("\uE892");
  }, Error, "EncodingError U+E892");
  assertThrows(() => {
    ms932Encoder.encode("\uE893");
  }, Error, "EncodingError U+E893");
  assertThrows(() => {
    ms932Encoder.encode("\uE894");
  }, Error, "EncodingError U+E894");
  assertThrows(() => {
    ms932Encoder.encode("\uE895");
  }, Error, "EncodingError U+E895");
  assertThrows(() => {
    ms932Encoder.encode("\uE896");
  }, Error, "EncodingError U+E896");
  assertThrows(() => {
    ms932Encoder.encode("\uE897");
  }, Error, "EncodingError U+E897");
  assertThrows(() => {
    ms932Encoder.encode("\uE898");
  }, Error, "EncodingError U+E898");
  assertThrows(() => {
    ms932Encoder.encode("\uE899");
  }, Error, "EncodingError U+E899");
  assertThrows(() => {
    ms932Encoder.encode("\uE89A");
  }, Error, "EncodingError U+E89A");
  assertThrows(() => {
    ms932Encoder.encode("\uE89B");
  }, Error, "EncodingError U+E89B");
  assertThrows(() => {
    ms932Encoder.encode("\uE89C");
  }, Error, "EncodingError U+E89C");
  assertThrows(() => {
    ms932Encoder.encode("\uE89D");
  }, Error, "EncodingError U+E89D");
  assertThrows(() => {
    ms932Encoder.encode("\uE89E");
  }, Error, "EncodingError U+E89E");
  assertThrows(() => {
    ms932Encoder.encode("\uE89F");
  }, Error, "EncodingError U+E89F");
  assertThrows(() => {
    ms932Encoder.encode("\uE8A0");
  }, Error, "EncodingError U+E8A0");
  assertThrows(() => {
    ms932Encoder.encode("\uE8A1");
  }, Error, "EncodingError U+E8A1");
  assertThrows(() => {
    ms932Encoder.encode("\uE8A2");
  }, Error, "EncodingError U+E8A2");
  assertThrows(() => {
    ms932Encoder.encode("\uE8A3");
  }, Error, "EncodingError U+E8A3");
  assertThrows(() => {
    ms932Encoder.encode("\uE8A4");
  }, Error, "EncodingError U+E8A4");
  assertThrows(() => {
    ms932Encoder.encode("\uE8A5");
  }, Error, "EncodingError U+E8A5");
  assertThrows(() => {
    ms932Encoder.encode("\uE8A6");
  }, Error, "EncodingError U+E8A6");
  assertThrows(() => {
    ms932Encoder.encode("\uE8A7");
  }, Error, "EncodingError U+E8A7");
  assertThrows(() => {
    ms932Encoder.encode("\uE8A8");
  }, Error, "EncodingError U+E8A8");
  assertThrows(() => {
    ms932Encoder.encode("\uE8A9");
  }, Error, "EncodingError U+E8A9");
  assertThrows(() => {
    ms932Encoder.encode("\uE8AA");
  }, Error, "EncodingError U+E8AA");
  assertThrows(() => {
    ms932Encoder.encode("\uE8AB");
  }, Error, "EncodingError U+E8AB");
  assertThrows(() => {
    ms932Encoder.encode("\uE8AC");
  }, Error, "EncodingError U+E8AC");
  assertThrows(() => {
    ms932Encoder.encode("\uE8AD");
  }, Error, "EncodingError U+E8AD");
  assertThrows(() => {
    ms932Encoder.encode("\uE8AE");
  }, Error, "EncodingError U+E8AE");
  assertThrows(() => {
    ms932Encoder.encode("\uE8AF");
  }, Error, "EncodingError U+E8AF");
  assertThrows(() => {
    ms932Encoder.encode("\uE8B0");
  }, Error, "EncodingError U+E8B0");
  assertThrows(() => {
    ms932Encoder.encode("\uE8B1");
  }, Error, "EncodingError U+E8B1");
  assertThrows(() => {
    ms932Encoder.encode("\uE8B2");
  }, Error, "EncodingError U+E8B2");
  assertThrows(() => {
    ms932Encoder.encode("\uE8B3");
  }, Error, "EncodingError U+E8B3");
  assertThrows(() => {
    ms932Encoder.encode("\uE8B4");
  }, Error, "EncodingError U+E8B4");
  assertThrows(() => {
    ms932Encoder.encode("\uE8B5");
  }, Error, "EncodingError U+E8B5");
  assertThrows(() => {
    ms932Encoder.encode("\uE8B6");
  }, Error, "EncodingError U+E8B6");
  assertThrows(() => {
    ms932Encoder.encode("\uE8B7");
  }, Error, "EncodingError U+E8B7");
  assertThrows(() => {
    ms932Encoder.encode("\uE8B8");
  }, Error, "EncodingError U+E8B8");
  assertThrows(() => {
    ms932Encoder.encode("\uE8B9");
  }, Error, "EncodingError U+E8B9");
  assertThrows(() => {
    ms932Encoder.encode("\uE8BA");
  }, Error, "EncodingError U+E8BA");
  assertThrows(() => {
    ms932Encoder.encode("\uE8BB");
  }, Error, "EncodingError U+E8BB");
  assertThrows(() => {
    ms932Encoder.encode("\uE8BC");
  }, Error, "EncodingError U+E8BC");
  assertThrows(() => {
    ms932Encoder.encode("\uE8BD");
  }, Error, "EncodingError U+E8BD");
  assertThrows(() => {
    ms932Encoder.encode("\uE8BE");
  }, Error, "EncodingError U+E8BE");
  assertThrows(() => {
    ms932Encoder.encode("\uE8BF");
  }, Error, "EncodingError U+E8BF");
  assertThrows(() => {
    ms932Encoder.encode("\uE8C0");
  }, Error, "EncodingError U+E8C0");
  assertThrows(() => {
    ms932Encoder.encode("\uE8C1");
  }, Error, "EncodingError U+E8C1");
  assertThrows(() => {
    ms932Encoder.encode("\uE8C2");
  }, Error, "EncodingError U+E8C2");
  assertThrows(() => {
    ms932Encoder.encode("\uE8C3");
  }, Error, "EncodingError U+E8C3");
  assertThrows(() => {
    ms932Encoder.encode("\uE8C4");
  }, Error, "EncodingError U+E8C4");
  assertThrows(() => {
    ms932Encoder.encode("\uE8C5");
  }, Error, "EncodingError U+E8C5");
  assertThrows(() => {
    ms932Encoder.encode("\uE8C6");
  }, Error, "EncodingError U+E8C6");
  assertThrows(() => {
    ms932Encoder.encode("\uE8C7");
  }, Error, "EncodingError U+E8C7");
  assertThrows(() => {
    ms932Encoder.encode("\uE8C8");
  }, Error, "EncodingError U+E8C8");
  assertThrows(() => {
    ms932Encoder.encode("\uE8C9");
  }, Error, "EncodingError U+E8C9");
  assertThrows(() => {
    ms932Encoder.encode("\uE8CA");
  }, Error, "EncodingError U+E8CA");
  assertThrows(() => {
    ms932Encoder.encode("\uE8CB");
  }, Error, "EncodingError U+E8CB");
  assertThrows(() => {
    ms932Encoder.encode("\uE8CC");
  }, Error, "EncodingError U+E8CC");
  assertThrows(() => {
    ms932Encoder.encode("\uE8CD");
  }, Error, "EncodingError U+E8CD");
  assertThrows(() => {
    ms932Encoder.encode("\uE8CE");
  }, Error, "EncodingError U+E8CE");
  assertThrows(() => {
    ms932Encoder.encode("\uE8CF");
  }, Error, "EncodingError U+E8CF");
  assertThrows(() => {
    ms932Encoder.encode("\uE8D0");
  }, Error, "EncodingError U+E8D0");
  assertThrows(() => {
    ms932Encoder.encode("\uE8D1");
  }, Error, "EncodingError U+E8D1");
  assertThrows(() => {
    ms932Encoder.encode("\uE8D2");
  }, Error, "EncodingError U+E8D2");
  assertThrows(() => {
    ms932Encoder.encode("\uE8D3");
  }, Error, "EncodingError U+E8D3");
  assertThrows(() => {
    ms932Encoder.encode("\uE8D4");
  }, Error, "EncodingError U+E8D4");
  assertThrows(() => {
    ms932Encoder.encode("\uE8D5");
  }, Error, "EncodingError U+E8D5");
  assertThrows(() => {
    ms932Encoder.encode("\uE8D6");
  }, Error, "EncodingError U+E8D6");
  assertThrows(() => {
    ms932Encoder.encode("\uE8D7");
  }, Error, "EncodingError U+E8D7");
  assertThrows(() => {
    ms932Encoder.encode("\uE8D8");
  }, Error, "EncodingError U+E8D8");
  assertThrows(() => {
    ms932Encoder.encode("\uE8D9");
  }, Error, "EncodingError U+E8D9");
  assertThrows(() => {
    ms932Encoder.encode("\uE8DA");
  }, Error, "EncodingError U+E8DA");
  assertThrows(() => {
    ms932Encoder.encode("\uE8DB");
  }, Error, "EncodingError U+E8DB");
  assertThrows(() => {
    ms932Encoder.encode("\uE8DC");
  }, Error, "EncodingError U+E8DC");
  assertThrows(() => {
    ms932Encoder.encode("\uE8DD");
  }, Error, "EncodingError U+E8DD");
  assertThrows(() => {
    ms932Encoder.encode("\uE8DE");
  }, Error, "EncodingError U+E8DE");
  assertThrows(() => {
    ms932Encoder.encode("\uE8DF");
  }, Error, "EncodingError U+E8DF");
  assertThrows(() => {
    ms932Encoder.encode("\uE8E0");
  }, Error, "EncodingError U+E8E0");
  assertThrows(() => {
    ms932Encoder.encode("\uE8E1");
  }, Error, "EncodingError U+E8E1");
  assertThrows(() => {
    ms932Encoder.encode("\uE8E2");
  }, Error, "EncodingError U+E8E2");
  assertThrows(() => {
    ms932Encoder.encode("\uE8E3");
  }, Error, "EncodingError U+E8E3");
  assertThrows(() => {
    ms932Encoder.encode("\uE8E4");
  }, Error, "EncodingError U+E8E4");
  assertThrows(() => {
    ms932Encoder.encode("\uE8E5");
  }, Error, "EncodingError U+E8E5");
  assertThrows(() => {
    ms932Encoder.encode("\uE8E6");
  }, Error, "EncodingError U+E8E6");
  assertThrows(() => {
    ms932Encoder.encode("\uE8E7");
  }, Error, "EncodingError U+E8E7");
  assertThrows(() => {
    ms932Encoder.encode("\uE8E8");
  }, Error, "EncodingError U+E8E8");
  assertThrows(() => {
    ms932Encoder.encode("\uE8E9");
  }, Error, "EncodingError U+E8E9");
  assertThrows(() => {
    ms932Encoder.encode("\uE8EA");
  }, Error, "EncodingError U+E8EA");
  assertThrows(() => {
    ms932Encoder.encode("\uE8EB");
  }, Error, "EncodingError U+E8EB");
  assertThrows(() => {
    ms932Encoder.encode("\uE8EC");
  }, Error, "EncodingError U+E8EC");
  assertThrows(() => {
    ms932Encoder.encode("\uE8ED");
  }, Error, "EncodingError U+E8ED");
  assertThrows(() => {
    ms932Encoder.encode("\uE8EE");
  }, Error, "EncodingError U+E8EE");
  assertThrows(() => {
    ms932Encoder.encode("\uE8EF");
  }, Error, "EncodingError U+E8EF");
  assertThrows(() => {
    ms932Encoder.encode("\uE8F0");
  }, Error, "EncodingError U+E8F0");
  assertThrows(() => {
    ms932Encoder.encode("\uE8F1");
  }, Error, "EncodingError U+E8F1");
  assertThrows(() => {
    ms932Encoder.encode("\uE8F2");
  }, Error, "EncodingError U+E8F2");
  assertThrows(() => {
    ms932Encoder.encode("\uE8F3");
  }, Error, "EncodingError U+E8F3");
  assertThrows(() => {
    ms932Encoder.encode("\uE8F4");
  }, Error, "EncodingError U+E8F4");
  assertThrows(() => {
    ms932Encoder.encode("\uE8F5");
  }, Error, "EncodingError U+E8F5");
  assertThrows(() => {
    ms932Encoder.encode("\uE8F6");
  }, Error, "EncodingError U+E8F6");
  assertThrows(() => {
    ms932Encoder.encode("\uE8F7");
  }, Error, "EncodingError U+E8F7");
  assertThrows(() => {
    ms932Encoder.encode("\uE8F8");
  }, Error, "EncodingError U+E8F8");
  assertThrows(() => {
    ms932Encoder.encode("\uE8F9");
  }, Error, "EncodingError U+E8F9");
  assertThrows(() => {
    ms932Encoder.encode("\uE8FA");
  }, Error, "EncodingError U+E8FA");
  assertThrows(() => {
    ms932Encoder.encode("\uE8FB");
  }, Error, "EncodingError U+E8FB");
  assertThrows(() => {
    ms932Encoder.encode("\uE8FC");
  }, Error, "EncodingError U+E8FC");
  assertThrows(() => {
    ms932Encoder.encode("\uE8FD");
  }, Error, "EncodingError U+E8FD");
  assertThrows(() => {
    ms932Encoder.encode("\uE8FE");
  }, Error, "EncodingError U+E8FE");
  assertThrows(() => {
    ms932Encoder.encode("\uE8FF");
  }, Error, "EncodingError U+E8FF");
  assertThrows(() => {
    ms932Encoder.encode("\uE900");
  }, Error, "EncodingError U+E900");
  assertThrows(() => {
    ms932Encoder.encode("\uE901");
  }, Error, "EncodingError U+E901");
  assertThrows(() => {
    ms932Encoder.encode("\uE902");
  }, Error, "EncodingError U+E902");
  assertThrows(() => {
    ms932Encoder.encode("\uE903");
  }, Error, "EncodingError U+E903");
  assertThrows(() => {
    ms932Encoder.encode("\uE904");
  }, Error, "EncodingError U+E904");
  assertThrows(() => {
    ms932Encoder.encode("\uE905");
  }, Error, "EncodingError U+E905");
  assertThrows(() => {
    ms932Encoder.encode("\uE906");
  }, Error, "EncodingError U+E906");
  assertThrows(() => {
    ms932Encoder.encode("\uE907");
  }, Error, "EncodingError U+E907");
  assertThrows(() => {
    ms932Encoder.encode("\uE908");
  }, Error, "EncodingError U+E908");
  assertThrows(() => {
    ms932Encoder.encode("\uE909");
  }, Error, "EncodingError U+E909");
  assertThrows(() => {
    ms932Encoder.encode("\uE90A");
  }, Error, "EncodingError U+E90A");
  assertThrows(() => {
    ms932Encoder.encode("\uE90B");
  }, Error, "EncodingError U+E90B");
  assertThrows(() => {
    ms932Encoder.encode("\uE90C");
  }, Error, "EncodingError U+E90C");
  assertThrows(() => {
    ms932Encoder.encode("\uE90D");
  }, Error, "EncodingError U+E90D");
  assertThrows(() => {
    ms932Encoder.encode("\uE90E");
  }, Error, "EncodingError U+E90E");
  assertThrows(() => {
    ms932Encoder.encode("\uE90F");
  }, Error, "EncodingError U+E90F");
  assertThrows(() => {
    ms932Encoder.encode("\uE910");
  }, Error, "EncodingError U+E910");
  assertThrows(() => {
    ms932Encoder.encode("\uE911");
  }, Error, "EncodingError U+E911");
  assertThrows(() => {
    ms932Encoder.encode("\uE912");
  }, Error, "EncodingError U+E912");
  assertThrows(() => {
    ms932Encoder.encode("\uE913");
  }, Error, "EncodingError U+E913");
  assertThrows(() => {
    ms932Encoder.encode("\uE914");
  }, Error, "EncodingError U+E914");
  assertThrows(() => {
    ms932Encoder.encode("\uE915");
  }, Error, "EncodingError U+E915");
  assertThrows(() => {
    ms932Encoder.encode("\uE916");
  }, Error, "EncodingError U+E916");
  assertThrows(() => {
    ms932Encoder.encode("\uE917");
  }, Error, "EncodingError U+E917");
  assertThrows(() => {
    ms932Encoder.encode("\uE918");
  }, Error, "EncodingError U+E918");
  assertThrows(() => {
    ms932Encoder.encode("\uE919");
  }, Error, "EncodingError U+E919");
  assertThrows(() => {
    ms932Encoder.encode("\uE91A");
  }, Error, "EncodingError U+E91A");
  assertThrows(() => {
    ms932Encoder.encode("\uE91B");
  }, Error, "EncodingError U+E91B");
  assertThrows(() => {
    ms932Encoder.encode("\uE91C");
  }, Error, "EncodingError U+E91C");
  assertThrows(() => {
    ms932Encoder.encode("\uE91D");
  }, Error, "EncodingError U+E91D");
  assertThrows(() => {
    ms932Encoder.encode("\uE91E");
  }, Error, "EncodingError U+E91E");
  assertThrows(() => {
    ms932Encoder.encode("\uE91F");
  }, Error, "EncodingError U+E91F");
  assertThrows(() => {
    ms932Encoder.encode("\uE920");
  }, Error, "EncodingError U+E920");
  assertThrows(() => {
    ms932Encoder.encode("\uE921");
  }, Error, "EncodingError U+E921");
  assertThrows(() => {
    ms932Encoder.encode("\uE922");
  }, Error, "EncodingError U+E922");
  assertThrows(() => {
    ms932Encoder.encode("\uE923");
  }, Error, "EncodingError U+E923");
  assertThrows(() => {
    ms932Encoder.encode("\uE924");
  }, Error, "EncodingError U+E924");
  assertThrows(() => {
    ms932Encoder.encode("\uE925");
  }, Error, "EncodingError U+E925");
  assertThrows(() => {
    ms932Encoder.encode("\uE926");
  }, Error, "EncodingError U+E926");
  assertThrows(() => {
    ms932Encoder.encode("\uE927");
  }, Error, "EncodingError U+E927");
  assertThrows(() => {
    ms932Encoder.encode("\uE928");
  }, Error, "EncodingError U+E928");
  assertThrows(() => {
    ms932Encoder.encode("\uE929");
  }, Error, "EncodingError U+E929");
  assertThrows(() => {
    ms932Encoder.encode("\uE92A");
  }, Error, "EncodingError U+E92A");
  assertThrows(() => {
    ms932Encoder.encode("\uE92B");
  }, Error, "EncodingError U+E92B");
  assertThrows(() => {
    ms932Encoder.encode("\uE92C");
  }, Error, "EncodingError U+E92C");
  assertThrows(() => {
    ms932Encoder.encode("\uE92D");
  }, Error, "EncodingError U+E92D");
  assertThrows(() => {
    ms932Encoder.encode("\uE92E");
  }, Error, "EncodingError U+E92E");
  assertThrows(() => {
    ms932Encoder.encode("\uE92F");
  }, Error, "EncodingError U+E92F");
  assertThrows(() => {
    ms932Encoder.encode("\uE930");
  }, Error, "EncodingError U+E930");
  assertThrows(() => {
    ms932Encoder.encode("\uE931");
  }, Error, "EncodingError U+E931");
  assertThrows(() => {
    ms932Encoder.encode("\uE932");
  }, Error, "EncodingError U+E932");
  assertThrows(() => {
    ms932Encoder.encode("\uE933");
  }, Error, "EncodingError U+E933");
  assertThrows(() => {
    ms932Encoder.encode("\uE934");
  }, Error, "EncodingError U+E934");
  assertThrows(() => {
    ms932Encoder.encode("\uE935");
  }, Error, "EncodingError U+E935");
  assertThrows(() => {
    ms932Encoder.encode("\uE936");
  }, Error, "EncodingError U+E936");
  assertThrows(() => {
    ms932Encoder.encode("\uE937");
  }, Error, "EncodingError U+E937");
  assertThrows(() => {
    ms932Encoder.encode("\uE938");
  }, Error, "EncodingError U+E938");
  assertThrows(() => {
    ms932Encoder.encode("\uE939");
  }, Error, "EncodingError U+E939");
  assertThrows(() => {
    ms932Encoder.encode("\uE93A");
  }, Error, "EncodingError U+E93A");
  assertThrows(() => {
    ms932Encoder.encode("\uE93B");
  }, Error, "EncodingError U+E93B");
  assertThrows(() => {
    ms932Encoder.encode("\uE93C");
  }, Error, "EncodingError U+E93C");
  assertThrows(() => {
    ms932Encoder.encode("\uE93D");
  }, Error, "EncodingError U+E93D");
  assertThrows(() => {
    ms932Encoder.encode("\uE93E");
  }, Error, "EncodingError U+E93E");
  assertThrows(() => {
    ms932Encoder.encode("\uE93F");
  }, Error, "EncodingError U+E93F");
  assertThrows(() => {
    ms932Encoder.encode("\uE940");
  }, Error, "EncodingError U+E940");
  assertThrows(() => {
    ms932Encoder.encode("\uE941");
  }, Error, "EncodingError U+E941");
  assertThrows(() => {
    ms932Encoder.encode("\uE942");
  }, Error, "EncodingError U+E942");
  assertThrows(() => {
    ms932Encoder.encode("\uE943");
  }, Error, "EncodingError U+E943");
  assertThrows(() => {
    ms932Encoder.encode("\uE944");
  }, Error, "EncodingError U+E944");
  assertThrows(() => {
    ms932Encoder.encode("\uE945");
  }, Error, "EncodingError U+E945");
  assertThrows(() => {
    ms932Encoder.encode("\uE946");
  }, Error, "EncodingError U+E946");
  assertThrows(() => {
    ms932Encoder.encode("\uE947");
  }, Error, "EncodingError U+E947");
  assertThrows(() => {
    ms932Encoder.encode("\uE948");
  }, Error, "EncodingError U+E948");
  assertThrows(() => {
    ms932Encoder.encode("\uE949");
  }, Error, "EncodingError U+E949");
  assertThrows(() => {
    ms932Encoder.encode("\uE94A");
  }, Error, "EncodingError U+E94A");
  assertThrows(() => {
    ms932Encoder.encode("\uE94B");
  }, Error, "EncodingError U+E94B");
  assertThrows(() => {
    ms932Encoder.encode("\uE94C");
  }, Error, "EncodingError U+E94C");
  assertThrows(() => {
    ms932Encoder.encode("\uE94D");
  }, Error, "EncodingError U+E94D");
  assertThrows(() => {
    ms932Encoder.encode("\uE94E");
  }, Error, "EncodingError U+E94E");
  assertThrows(() => {
    ms932Encoder.encode("\uE94F");
  }, Error, "EncodingError U+E94F");
  assertThrows(() => {
    ms932Encoder.encode("\uE950");
  }, Error, "EncodingError U+E950");
  assertThrows(() => {
    ms932Encoder.encode("\uE951");
  }, Error, "EncodingError U+E951");
  assertThrows(() => {
    ms932Encoder.encode("\uE952");
  }, Error, "EncodingError U+E952");
  assertThrows(() => {
    ms932Encoder.encode("\uE953");
  }, Error, "EncodingError U+E953");
  assertThrows(() => {
    ms932Encoder.encode("\uE954");
  }, Error, "EncodingError U+E954");
  assertThrows(() => {
    ms932Encoder.encode("\uE955");
  }, Error, "EncodingError U+E955");
  assertThrows(() => {
    ms932Encoder.encode("\uE956");
  }, Error, "EncodingError U+E956");
  assertThrows(() => {
    ms932Encoder.encode("\uE957");
  }, Error, "EncodingError U+E957");
  assertThrows(() => {
    ms932Encoder.encode("\uE958");
  }, Error, "EncodingError U+E958");
  assertThrows(() => {
    ms932Encoder.encode("\uE959");
  }, Error, "EncodingError U+E959");
  assertThrows(() => {
    ms932Encoder.encode("\uE95A");
  }, Error, "EncodingError U+E95A");
  assertThrows(() => {
    ms932Encoder.encode("\uE95B");
  }, Error, "EncodingError U+E95B");
  assertThrows(() => {
    ms932Encoder.encode("\uE95C");
  }, Error, "EncodingError U+E95C");
  assertThrows(() => {
    ms932Encoder.encode("\uE95D");
  }, Error, "EncodingError U+E95D");
  assertThrows(() => {
    ms932Encoder.encode("\uE95E");
  }, Error, "EncodingError U+E95E");
  assertThrows(() => {
    ms932Encoder.encode("\uE95F");
  }, Error, "EncodingError U+E95F");
  assertThrows(() => {
    ms932Encoder.encode("\uE960");
  }, Error, "EncodingError U+E960");
  assertThrows(() => {
    ms932Encoder.encode("\uE961");
  }, Error, "EncodingError U+E961");
  assertThrows(() => {
    ms932Encoder.encode("\uE962");
  }, Error, "EncodingError U+E962");
  assertThrows(() => {
    ms932Encoder.encode("\uE963");
  }, Error, "EncodingError U+E963");
  assertThrows(() => {
    ms932Encoder.encode("\uE964");
  }, Error, "EncodingError U+E964");
  assertThrows(() => {
    ms932Encoder.encode("\uE965");
  }, Error, "EncodingError U+E965");
  assertThrows(() => {
    ms932Encoder.encode("\uE966");
  }, Error, "EncodingError U+E966");
  assertThrows(() => {
    ms932Encoder.encode("\uE967");
  }, Error, "EncodingError U+E967");
  assertThrows(() => {
    ms932Encoder.encode("\uE968");
  }, Error, "EncodingError U+E968");
  assertThrows(() => {
    ms932Encoder.encode("\uE969");
  }, Error, "EncodingError U+E969");
  assertThrows(() => {
    ms932Encoder.encode("\uE96A");
  }, Error, "EncodingError U+E96A");
  assertThrows(() => {
    ms932Encoder.encode("\uE96B");
  }, Error, "EncodingError U+E96B");
  assertThrows(() => {
    ms932Encoder.encode("\uE96C");
  }, Error, "EncodingError U+E96C");
  assertThrows(() => {
    ms932Encoder.encode("\uE96D");
  }, Error, "EncodingError U+E96D");
  assertThrows(() => {
    ms932Encoder.encode("\uE96E");
  }, Error, "EncodingError U+E96E");
  assertThrows(() => {
    ms932Encoder.encode("\uE96F");
  }, Error, "EncodingError U+E96F");
  assertThrows(() => {
    ms932Encoder.encode("\uE970");
  }, Error, "EncodingError U+E970");
  assertThrows(() => {
    ms932Encoder.encode("\uE971");
  }, Error, "EncodingError U+E971");
  assertThrows(() => {
    ms932Encoder.encode("\uE972");
  }, Error, "EncodingError U+E972");
  assertThrows(() => {
    ms932Encoder.encode("\uE973");
  }, Error, "EncodingError U+E973");
  assertThrows(() => {
    ms932Encoder.encode("\uE974");
  }, Error, "EncodingError U+E974");
  assertThrows(() => {
    ms932Encoder.encode("\uE975");
  }, Error, "EncodingError U+E975");
  assertThrows(() => {
    ms932Encoder.encode("\uE976");
  }, Error, "EncodingError U+E976");
  assertThrows(() => {
    ms932Encoder.encode("\uE977");
  }, Error, "EncodingError U+E977");
  assertThrows(() => {
    ms932Encoder.encode("\uE978");
  }, Error, "EncodingError U+E978");
  assertThrows(() => {
    ms932Encoder.encode("\uE979");
  }, Error, "EncodingError U+E979");
  assertThrows(() => {
    ms932Encoder.encode("\uE97A");
  }, Error, "EncodingError U+E97A");
  assertThrows(() => {
    ms932Encoder.encode("\uE97B");
  }, Error, "EncodingError U+E97B");
  assertThrows(() => {
    ms932Encoder.encode("\uE97C");
  }, Error, "EncodingError U+E97C");
  assertThrows(() => {
    ms932Encoder.encode("\uE97D");
  }, Error, "EncodingError U+E97D");
  assertThrows(() => {
    ms932Encoder.encode("\uE97E");
  }, Error, "EncodingError U+E97E");
  assertThrows(() => {
    ms932Encoder.encode("\uE97F");
  }, Error, "EncodingError U+E97F");
  assertThrows(() => {
    ms932Encoder.encode("\uE980");
  }, Error, "EncodingError U+E980");
  assertThrows(() => {
    ms932Encoder.encode("\uE981");
  }, Error, "EncodingError U+E981");
  assertThrows(() => {
    ms932Encoder.encode("\uE982");
  }, Error, "EncodingError U+E982");
  assertThrows(() => {
    ms932Encoder.encode("\uE983");
  }, Error, "EncodingError U+E983");
  assertThrows(() => {
    ms932Encoder.encode("\uE984");
  }, Error, "EncodingError U+E984");
  assertThrows(() => {
    ms932Encoder.encode("\uE985");
  }, Error, "EncodingError U+E985");
  assertThrows(() => {
    ms932Encoder.encode("\uE986");
  }, Error, "EncodingError U+E986");
  assertThrows(() => {
    ms932Encoder.encode("\uE987");
  }, Error, "EncodingError U+E987");
  assertThrows(() => {
    ms932Encoder.encode("\uE988");
  }, Error, "EncodingError U+E988");
  assertThrows(() => {
    ms932Encoder.encode("\uE989");
  }, Error, "EncodingError U+E989");
  assertThrows(() => {
    ms932Encoder.encode("\uE98A");
  }, Error, "EncodingError U+E98A");
  assertThrows(() => {
    ms932Encoder.encode("\uE98B");
  }, Error, "EncodingError U+E98B");
  assertThrows(() => {
    ms932Encoder.encode("\uE98C");
  }, Error, "EncodingError U+E98C");
  assertThrows(() => {
    ms932Encoder.encode("\uE98D");
  }, Error, "EncodingError U+E98D");
  assertThrows(() => {
    ms932Encoder.encode("\uE98E");
  }, Error, "EncodingError U+E98E");
  assertThrows(() => {
    ms932Encoder.encode("\uE98F");
  }, Error, "EncodingError U+E98F");
  assertThrows(() => {
    ms932Encoder.encode("\uE990");
  }, Error, "EncodingError U+E990");
  assertThrows(() => {
    ms932Encoder.encode("\uE991");
  }, Error, "EncodingError U+E991");
  assertThrows(() => {
    ms932Encoder.encode("\uE992");
  }, Error, "EncodingError U+E992");
  assertThrows(() => {
    ms932Encoder.encode("\uE993");
  }, Error, "EncodingError U+E993");
  assertThrows(() => {
    ms932Encoder.encode("\uE994");
  }, Error, "EncodingError U+E994");
  assertThrows(() => {
    ms932Encoder.encode("\uE995");
  }, Error, "EncodingError U+E995");
  assertThrows(() => {
    ms932Encoder.encode("\uE996");
  }, Error, "EncodingError U+E996");
  assertThrows(() => {
    ms932Encoder.encode("\uE997");
  }, Error, "EncodingError U+E997");
  assertThrows(() => {
    ms932Encoder.encode("\uE998");
  }, Error, "EncodingError U+E998");
  assertThrows(() => {
    ms932Encoder.encode("\uE999");
  }, Error, "EncodingError U+E999");
  assertThrows(() => {
    ms932Encoder.encode("\uE99A");
  }, Error, "EncodingError U+E99A");
  assertThrows(() => {
    ms932Encoder.encode("\uE99B");
  }, Error, "EncodingError U+E99B");
  assertThrows(() => {
    ms932Encoder.encode("\uE99C");
  }, Error, "EncodingError U+E99C");
  assertThrows(() => {
    ms932Encoder.encode("\uE99D");
  }, Error, "EncodingError U+E99D");
  assertThrows(() => {
    ms932Encoder.encode("\uE99E");
  }, Error, "EncodingError U+E99E");
  assertThrows(() => {
    ms932Encoder.encode("\uE99F");
  }, Error, "EncodingError U+E99F");
  assertThrows(() => {
    ms932Encoder.encode("\uE9A0");
  }, Error, "EncodingError U+E9A0");
  assertThrows(() => {
    ms932Encoder.encode("\uE9A1");
  }, Error, "EncodingError U+E9A1");
  assertThrows(() => {
    ms932Encoder.encode("\uE9A2");
  }, Error, "EncodingError U+E9A2");
  assertThrows(() => {
    ms932Encoder.encode("\uE9A3");
  }, Error, "EncodingError U+E9A3");
  assertThrows(() => {
    ms932Encoder.encode("\uE9A4");
  }, Error, "EncodingError U+E9A4");
  assertThrows(() => {
    ms932Encoder.encode("\uE9A5");
  }, Error, "EncodingError U+E9A5");
  assertThrows(() => {
    ms932Encoder.encode("\uE9A6");
  }, Error, "EncodingError U+E9A6");
  assertThrows(() => {
    ms932Encoder.encode("\uE9A7");
  }, Error, "EncodingError U+E9A7");
  assertThrows(() => {
    ms932Encoder.encode("\uE9A8");
  }, Error, "EncodingError U+E9A8");
  assertThrows(() => {
    ms932Encoder.encode("\uE9A9");
  }, Error, "EncodingError U+E9A9");
  assertThrows(() => {
    ms932Encoder.encode("\uE9AA");
  }, Error, "EncodingError U+E9AA");
  assertThrows(() => {
    ms932Encoder.encode("\uE9AB");
  }, Error, "EncodingError U+E9AB");
  assertThrows(() => {
    ms932Encoder.encode("\uE9AC");
  }, Error, "EncodingError U+E9AC");
  assertThrows(() => {
    ms932Encoder.encode("\uE9AD");
  }, Error, "EncodingError U+E9AD");
  assertThrows(() => {
    ms932Encoder.encode("\uE9AE");
  }, Error, "EncodingError U+E9AE");
  assertThrows(() => {
    ms932Encoder.encode("\uE9AF");
  }, Error, "EncodingError U+E9AF");
  assertThrows(() => {
    ms932Encoder.encode("\uE9B0");
  }, Error, "EncodingError U+E9B0");
  assertThrows(() => {
    ms932Encoder.encode("\uE9B1");
  }, Error, "EncodingError U+E9B1");
  assertThrows(() => {
    ms932Encoder.encode("\uE9B2");
  }, Error, "EncodingError U+E9B2");
  assertThrows(() => {
    ms932Encoder.encode("\uE9B3");
  }, Error, "EncodingError U+E9B3");
  assertThrows(() => {
    ms932Encoder.encode("\uE9B4");
  }, Error, "EncodingError U+E9B4");
  assertThrows(() => {
    ms932Encoder.encode("\uE9B5");
  }, Error, "EncodingError U+E9B5");
  assertThrows(() => {
    ms932Encoder.encode("\uE9B6");
  }, Error, "EncodingError U+E9B6");
  assertThrows(() => {
    ms932Encoder.encode("\uE9B7");
  }, Error, "EncodingError U+E9B7");
  assertThrows(() => {
    ms932Encoder.encode("\uE9B8");
  }, Error, "EncodingError U+E9B8");
  assertThrows(() => {
    ms932Encoder.encode("\uE9B9");
  }, Error, "EncodingError U+E9B9");
  assertThrows(() => {
    ms932Encoder.encode("\uE9BA");
  }, Error, "EncodingError U+E9BA");
  assertThrows(() => {
    ms932Encoder.encode("\uE9BB");
  }, Error, "EncodingError U+E9BB");
  assertThrows(() => {
    ms932Encoder.encode("\uE9BC");
  }, Error, "EncodingError U+E9BC");
  assertThrows(() => {
    ms932Encoder.encode("\uE9BD");
  }, Error, "EncodingError U+E9BD");
  assertThrows(() => {
    ms932Encoder.encode("\uE9BE");
  }, Error, "EncodingError U+E9BE");
  assertThrows(() => {
    ms932Encoder.encode("\uE9BF");
  }, Error, "EncodingError U+E9BF");
  assertThrows(() => {
    ms932Encoder.encode("\uE9C0");
  }, Error, "EncodingError U+E9C0");
  assertThrows(() => {
    ms932Encoder.encode("\uE9C1");
  }, Error, "EncodingError U+E9C1");
  assertThrows(() => {
    ms932Encoder.encode("\uE9C2");
  }, Error, "EncodingError U+E9C2");
  assertThrows(() => {
    ms932Encoder.encode("\uE9C3");
  }, Error, "EncodingError U+E9C3");
  assertThrows(() => {
    ms932Encoder.encode("\uE9C4");
  }, Error, "EncodingError U+E9C4");
  assertThrows(() => {
    ms932Encoder.encode("\uE9C5");
  }, Error, "EncodingError U+E9C5");
  assertThrows(() => {
    ms932Encoder.encode("\uE9C6");
  }, Error, "EncodingError U+E9C6");
  assertThrows(() => {
    ms932Encoder.encode("\uE9C7");
  }, Error, "EncodingError U+E9C7");
  assertThrows(() => {
    ms932Encoder.encode("\uE9C8");
  }, Error, "EncodingError U+E9C8");
  assertThrows(() => {
    ms932Encoder.encode("\uE9C9");
  }, Error, "EncodingError U+E9C9");
  assertThrows(() => {
    ms932Encoder.encode("\uE9CA");
  }, Error, "EncodingError U+E9CA");
  assertThrows(() => {
    ms932Encoder.encode("\uE9CB");
  }, Error, "EncodingError U+E9CB");
  assertThrows(() => {
    ms932Encoder.encode("\uE9CC");
  }, Error, "EncodingError U+E9CC");
  assertThrows(() => {
    ms932Encoder.encode("\uE9CD");
  }, Error, "EncodingError U+E9CD");
  assertThrows(() => {
    ms932Encoder.encode("\uE9CE");
  }, Error, "EncodingError U+E9CE");
  assertThrows(() => {
    ms932Encoder.encode("\uE9CF");
  }, Error, "EncodingError U+E9CF");
  assertThrows(() => {
    ms932Encoder.encode("\uE9D0");
  }, Error, "EncodingError U+E9D0");
  assertThrows(() => {
    ms932Encoder.encode("\uE9D1");
  }, Error, "EncodingError U+E9D1");
  assertThrows(() => {
    ms932Encoder.encode("\uE9D2");
  }, Error, "EncodingError U+E9D2");
  assertThrows(() => {
    ms932Encoder.encode("\uE9D3");
  }, Error, "EncodingError U+E9D3");
  assertThrows(() => {
    ms932Encoder.encode("\uE9D4");
  }, Error, "EncodingError U+E9D4");
  assertThrows(() => {
    ms932Encoder.encode("\uE9D5");
  }, Error, "EncodingError U+E9D5");
  assertThrows(() => {
    ms932Encoder.encode("\uE9D6");
  }, Error, "EncodingError U+E9D6");
  assertThrows(() => {
    ms932Encoder.encode("\uE9D7");
  }, Error, "EncodingError U+E9D7");
  assertThrows(() => {
    ms932Encoder.encode("\uE9D8");
  }, Error, "EncodingError U+E9D8");
  assertThrows(() => {
    ms932Encoder.encode("\uE9D9");
  }, Error, "EncodingError U+E9D9");
  assertThrows(() => {
    ms932Encoder.encode("\uE9DA");
  }, Error, "EncodingError U+E9DA");
  assertThrows(() => {
    ms932Encoder.encode("\uE9DB");
  }, Error, "EncodingError U+E9DB");
  assertThrows(() => {
    ms932Encoder.encode("\uE9DC");
  }, Error, "EncodingError U+E9DC");
  assertThrows(() => {
    ms932Encoder.encode("\uE9DD");
  }, Error, "EncodingError U+E9DD");
  assertThrows(() => {
    ms932Encoder.encode("\uE9DE");
  }, Error, "EncodingError U+E9DE");
  assertThrows(() => {
    ms932Encoder.encode("\uE9DF");
  }, Error, "EncodingError U+E9DF");
  assertThrows(() => {
    ms932Encoder.encode("\uE9E0");
  }, Error, "EncodingError U+E9E0");
  assertThrows(() => {
    ms932Encoder.encode("\uE9E1");
  }, Error, "EncodingError U+E9E1");
  assertThrows(() => {
    ms932Encoder.encode("\uE9E2");
  }, Error, "EncodingError U+E9E2");
  assertThrows(() => {
    ms932Encoder.encode("\uE9E3");
  }, Error, "EncodingError U+E9E3");
  assertThrows(() => {
    ms932Encoder.encode("\uE9E4");
  }, Error, "EncodingError U+E9E4");
  assertThrows(() => {
    ms932Encoder.encode("\uE9E5");
  }, Error, "EncodingError U+E9E5");
  assertThrows(() => {
    ms932Encoder.encode("\uE9E6");
  }, Error, "EncodingError U+E9E6");
  assertThrows(() => {
    ms932Encoder.encode("\uE9E7");
  }, Error, "EncodingError U+E9E7");
  assertThrows(() => {
    ms932Encoder.encode("\uE9E8");
  }, Error, "EncodingError U+E9E8");
  assertThrows(() => {
    ms932Encoder.encode("\uE9E9");
  }, Error, "EncodingError U+E9E9");
  assertThrows(() => {
    ms932Encoder.encode("\uE9EA");
  }, Error, "EncodingError U+E9EA");
  assertThrows(() => {
    ms932Encoder.encode("\uE9EB");
  }, Error, "EncodingError U+E9EB");
  assertThrows(() => {
    ms932Encoder.encode("\uE9EC");
  }, Error, "EncodingError U+E9EC");
  assertThrows(() => {
    ms932Encoder.encode("\uE9ED");
  }, Error, "EncodingError U+E9ED");
  assertThrows(() => {
    ms932Encoder.encode("\uE9EE");
  }, Error, "EncodingError U+E9EE");
  assertThrows(() => {
    ms932Encoder.encode("\uE9EF");
  }, Error, "EncodingError U+E9EF");
  assertThrows(() => {
    ms932Encoder.encode("\uE9F0");
  }, Error, "EncodingError U+E9F0");
  assertThrows(() => {
    ms932Encoder.encode("\uE9F1");
  }, Error, "EncodingError U+E9F1");
  assertThrows(() => {
    ms932Encoder.encode("\uE9F2");
  }, Error, "EncodingError U+E9F2");
  assertThrows(() => {
    ms932Encoder.encode("\uE9F3");
  }, Error, "EncodingError U+E9F3");
  assertThrows(() => {
    ms932Encoder.encode("\uE9F4");
  }, Error, "EncodingError U+E9F4");
  assertThrows(() => {
    ms932Encoder.encode("\uE9F5");
  }, Error, "EncodingError U+E9F5");
  assertThrows(() => {
    ms932Encoder.encode("\uE9F6");
  }, Error, "EncodingError U+E9F6");
  assertThrows(() => {
    ms932Encoder.encode("\uE9F7");
  }, Error, "EncodingError U+E9F7");
  assertThrows(() => {
    ms932Encoder.encode("\uE9F8");
  }, Error, "EncodingError U+E9F8");
  assertThrows(() => {
    ms932Encoder.encode("\uE9F9");
  }, Error, "EncodingError U+E9F9");
  assertThrows(() => {
    ms932Encoder.encode("\uE9FA");
  }, Error, "EncodingError U+E9FA");
  assertThrows(() => {
    ms932Encoder.encode("\uE9FB");
  }, Error, "EncodingError U+E9FB");
  assertThrows(() => {
    ms932Encoder.encode("\uE9FC");
  }, Error, "EncodingError U+E9FC");
  assertThrows(() => {
    ms932Encoder.encode("\uE9FD");
  }, Error, "EncodingError U+E9FD");
  assertThrows(() => {
    ms932Encoder.encode("\uE9FE");
  }, Error, "EncodingError U+E9FE");
  assertThrows(() => {
    ms932Encoder.encode("\uE9FF");
  }, Error, "EncodingError U+E9FF");
  assertThrows(() => {
    ms932Encoder.encode("\uEA00");
  }, Error, "EncodingError U+EA00");
  assertThrows(() => {
    ms932Encoder.encode("\uEA01");
  }, Error, "EncodingError U+EA01");
  assertThrows(() => {
    ms932Encoder.encode("\uEA02");
  }, Error, "EncodingError U+EA02");
  assertThrows(() => {
    ms932Encoder.encode("\uEA03");
  }, Error, "EncodingError U+EA03");
  assertThrows(() => {
    ms932Encoder.encode("\uEA04");
  }, Error, "EncodingError U+EA04");
  assertThrows(() => {
    ms932Encoder.encode("\uEA05");
  }, Error, "EncodingError U+EA05");
  assertThrows(() => {
    ms932Encoder.encode("\uEA06");
  }, Error, "EncodingError U+EA06");
  assertThrows(() => {
    ms932Encoder.encode("\uEA07");
  }, Error, "EncodingError U+EA07");
  assertThrows(() => {
    ms932Encoder.encode("\uEA08");
  }, Error, "EncodingError U+EA08");
  assertThrows(() => {
    ms932Encoder.encode("\uEA09");
  }, Error, "EncodingError U+EA09");
  assertThrows(() => {
    ms932Encoder.encode("\uEA0A");
  }, Error, "EncodingError U+EA0A");
  assertThrows(() => {
    ms932Encoder.encode("\uEA0B");
  }, Error, "EncodingError U+EA0B");
  assertThrows(() => {
    ms932Encoder.encode("\uEA0C");
  }, Error, "EncodingError U+EA0C");
  assertThrows(() => {
    ms932Encoder.encode("\uEA0D");
  }, Error, "EncodingError U+EA0D");
  assertThrows(() => {
    ms932Encoder.encode("\uEA0E");
  }, Error, "EncodingError U+EA0E");
  assertThrows(() => {
    ms932Encoder.encode("\uEA0F");
  }, Error, "EncodingError U+EA0F");
  assertThrows(() => {
    ms932Encoder.encode("\uEA10");
  }, Error, "EncodingError U+EA10");
  assertThrows(() => {
    ms932Encoder.encode("\uEA11");
  }, Error, "EncodingError U+EA11");
  assertThrows(() => {
    ms932Encoder.encode("\uEA12");
  }, Error, "EncodingError U+EA12");
  assertThrows(() => {
    ms932Encoder.encode("\uEA13");
  }, Error, "EncodingError U+EA13");
  assertThrows(() => {
    ms932Encoder.encode("\uEA14");
  }, Error, "EncodingError U+EA14");
  assertThrows(() => {
    ms932Encoder.encode("\uEA15");
  }, Error, "EncodingError U+EA15");
  assertThrows(() => {
    ms932Encoder.encode("\uEA16");
  }, Error, "EncodingError U+EA16");
  assertThrows(() => {
    ms932Encoder.encode("\uEA17");
  }, Error, "EncodingError U+EA17");
  assertThrows(() => {
    ms932Encoder.encode("\uEA18");
  }, Error, "EncodingError U+EA18");
  assertThrows(() => {
    ms932Encoder.encode("\uEA19");
  }, Error, "EncodingError U+EA19");
  assertThrows(() => {
    ms932Encoder.encode("\uEA1A");
  }, Error, "EncodingError U+EA1A");
  assertThrows(() => {
    ms932Encoder.encode("\uEA1B");
  }, Error, "EncodingError U+EA1B");
  assertThrows(() => {
    ms932Encoder.encode("\uEA1C");
  }, Error, "EncodingError U+EA1C");
  assertThrows(() => {
    ms932Encoder.encode("\uEA1D");
  }, Error, "EncodingError U+EA1D");
  assertThrows(() => {
    ms932Encoder.encode("\uEA1E");
  }, Error, "EncodingError U+EA1E");
  assertThrows(() => {
    ms932Encoder.encode("\uEA1F");
  }, Error, "EncodingError U+EA1F");
  assertThrows(() => {
    ms932Encoder.encode("\uEA20");
  }, Error, "EncodingError U+EA20");
  assertThrows(() => {
    ms932Encoder.encode("\uEA21");
  }, Error, "EncodingError U+EA21");
  assertThrows(() => {
    ms932Encoder.encode("\uEA22");
  }, Error, "EncodingError U+EA22");
  assertThrows(() => {
    ms932Encoder.encode("\uEA23");
  }, Error, "EncodingError U+EA23");
  assertThrows(() => {
    ms932Encoder.encode("\uEA24");
  }, Error, "EncodingError U+EA24");
  assertThrows(() => {
    ms932Encoder.encode("\uEA25");
  }, Error, "EncodingError U+EA25");
  assertThrows(() => {
    ms932Encoder.encode("\uEA26");
  }, Error, "EncodingError U+EA26");
  assertThrows(() => {
    ms932Encoder.encode("\uEA27");
  }, Error, "EncodingError U+EA27");
  assertThrows(() => {
    ms932Encoder.encode("\uEA28");
  }, Error, "EncodingError U+EA28");
  assertThrows(() => {
    ms932Encoder.encode("\uEA29");
  }, Error, "EncodingError U+EA29");
  assertThrows(() => {
    ms932Encoder.encode("\uEA2A");
  }, Error, "EncodingError U+EA2A");
  assertThrows(() => {
    ms932Encoder.encode("\uEA2B");
  }, Error, "EncodingError U+EA2B");
  assertThrows(() => {
    ms932Encoder.encode("\uEA2C");
  }, Error, "EncodingError U+EA2C");
  assertThrows(() => {
    ms932Encoder.encode("\uEA2D");
  }, Error, "EncodingError U+EA2D");
  assertThrows(() => {
    ms932Encoder.encode("\uEA2E");
  }, Error, "EncodingError U+EA2E");
  assertThrows(() => {
    ms932Encoder.encode("\uEA2F");
  }, Error, "EncodingError U+EA2F");
  assertThrows(() => {
    ms932Encoder.encode("\uEA30");
  }, Error, "EncodingError U+EA30");
  assertThrows(() => {
    ms932Encoder.encode("\uEA31");
  }, Error, "EncodingError U+EA31");
  assertThrows(() => {
    ms932Encoder.encode("\uEA32");
  }, Error, "EncodingError U+EA32");
  assertThrows(() => {
    ms932Encoder.encode("\uEA33");
  }, Error, "EncodingError U+EA33");
  assertThrows(() => {
    ms932Encoder.encode("\uEA34");
  }, Error, "EncodingError U+EA34");
  assertThrows(() => {
    ms932Encoder.encode("\uEA35");
  }, Error, "EncodingError U+EA35");
  assertThrows(() => {
    ms932Encoder.encode("\uEA36");
  }, Error, "EncodingError U+EA36");
  assertThrows(() => {
    ms932Encoder.encode("\uEA37");
  }, Error, "EncodingError U+EA37");
  assertThrows(() => {
    ms932Encoder.encode("\uEA38");
  }, Error, "EncodingError U+EA38");
  assertThrows(() => {
    ms932Encoder.encode("\uEA39");
  }, Error, "EncodingError U+EA39");
  assertThrows(() => {
    ms932Encoder.encode("\uEA3A");
  }, Error, "EncodingError U+EA3A");
  assertThrows(() => {
    ms932Encoder.encode("\uEA3B");
  }, Error, "EncodingError U+EA3B");
  assertThrows(() => {
    ms932Encoder.encode("\uEA3C");
  }, Error, "EncodingError U+EA3C");
  assertThrows(() => {
    ms932Encoder.encode("\uEA3D");
  }, Error, "EncodingError U+EA3D");
  assertThrows(() => {
    ms932Encoder.encode("\uEA3E");
  }, Error, "EncodingError U+EA3E");
  assertThrows(() => {
    ms932Encoder.encode("\uEA3F");
  }, Error, "EncodingError U+EA3F");
  assertThrows(() => {
    ms932Encoder.encode("\uEA40");
  }, Error, "EncodingError U+EA40");
  assertThrows(() => {
    ms932Encoder.encode("\uEA41");
  }, Error, "EncodingError U+EA41");
  assertThrows(() => {
    ms932Encoder.encode("\uEA42");
  }, Error, "EncodingError U+EA42");
  assertThrows(() => {
    ms932Encoder.encode("\uEA43");
  }, Error, "EncodingError U+EA43");
  assertThrows(() => {
    ms932Encoder.encode("\uEA44");
  }, Error, "EncodingError U+EA44");
  assertThrows(() => {
    ms932Encoder.encode("\uEA45");
  }, Error, "EncodingError U+EA45");
  assertThrows(() => {
    ms932Encoder.encode("\uEA46");
  }, Error, "EncodingError U+EA46");
  assertThrows(() => {
    ms932Encoder.encode("\uEA47");
  }, Error, "EncodingError U+EA47");
  assertThrows(() => {
    ms932Encoder.encode("\uEA48");
  }, Error, "EncodingError U+EA48");
  assertThrows(() => {
    ms932Encoder.encode("\uEA49");
  }, Error, "EncodingError U+EA49");
  assertThrows(() => {
    ms932Encoder.encode("\uEA4A");
  }, Error, "EncodingError U+EA4A");
  assertThrows(() => {
    ms932Encoder.encode("\uEA4B");
  }, Error, "EncodingError U+EA4B");
  assertThrows(() => {
    ms932Encoder.encode("\uEA4C");
  }, Error, "EncodingError U+EA4C");
  assertThrows(() => {
    ms932Encoder.encode("\uEA4D");
  }, Error, "EncodingError U+EA4D");
  assertThrows(() => {
    ms932Encoder.encode("\uEA4E");
  }, Error, "EncodingError U+EA4E");
  assertThrows(() => {
    ms932Encoder.encode("\uEA4F");
  }, Error, "EncodingError U+EA4F");
  assertThrows(() => {
    ms932Encoder.encode("\uEA50");
  }, Error, "EncodingError U+EA50");
  assertThrows(() => {
    ms932Encoder.encode("\uEA51");
  }, Error, "EncodingError U+EA51");
  assertThrows(() => {
    ms932Encoder.encode("\uEA52");
  }, Error, "EncodingError U+EA52");
  assertThrows(() => {
    ms932Encoder.encode("\uEA53");
  }, Error, "EncodingError U+EA53");
  assertThrows(() => {
    ms932Encoder.encode("\uEA54");
  }, Error, "EncodingError U+EA54");
  assertThrows(() => {
    ms932Encoder.encode("\uEA55");
  }, Error, "EncodingError U+EA55");
  assertThrows(() => {
    ms932Encoder.encode("\uEA56");
  }, Error, "EncodingError U+EA56");
  assertThrows(() => {
    ms932Encoder.encode("\uEA57");
  }, Error, "EncodingError U+EA57");
  assertThrows(() => {
    ms932Encoder.encode("\uEA58");
  }, Error, "EncodingError U+EA58");
  assertThrows(() => {
    ms932Encoder.encode("\uEA59");
  }, Error, "EncodingError U+EA59");
  assertThrows(() => {
    ms932Encoder.encode("\uEA5A");
  }, Error, "EncodingError U+EA5A");
  assertThrows(() => {
    ms932Encoder.encode("\uEA5B");
  }, Error, "EncodingError U+EA5B");
  assertThrows(() => {
    ms932Encoder.encode("\uEA5C");
  }, Error, "EncodingError U+EA5C");
  assertThrows(() => {
    ms932Encoder.encode("\uEA5D");
  }, Error, "EncodingError U+EA5D");
  assertThrows(() => {
    ms932Encoder.encode("\uEA5E");
  }, Error, "EncodingError U+EA5E");
  assertThrows(() => {
    ms932Encoder.encode("\uEA5F");
  }, Error, "EncodingError U+EA5F");
  assertThrows(() => {
    ms932Encoder.encode("\uEA60");
  }, Error, "EncodingError U+EA60");
  assertThrows(() => {
    ms932Encoder.encode("\uEA61");
  }, Error, "EncodingError U+EA61");
  assertThrows(() => {
    ms932Encoder.encode("\uEA62");
  }, Error, "EncodingError U+EA62");
  assertThrows(() => {
    ms932Encoder.encode("\uEA63");
  }, Error, "EncodingError U+EA63");
  assertThrows(() => {
    ms932Encoder.encode("\uEA64");
  }, Error, "EncodingError U+EA64");
  assertThrows(() => {
    ms932Encoder.encode("\uEA65");
  }, Error, "EncodingError U+EA65");
  assertThrows(() => {
    ms932Encoder.encode("\uEA66");
  }, Error, "EncodingError U+EA66");
  assertThrows(() => {
    ms932Encoder.encode("\uEA67");
  }, Error, "EncodingError U+EA67");
  assertThrows(() => {
    ms932Encoder.encode("\uEA68");
  }, Error, "EncodingError U+EA68");
  assertThrows(() => {
    ms932Encoder.encode("\uEA69");
  }, Error, "EncodingError U+EA69");
  assertThrows(() => {
    ms932Encoder.encode("\uEA6A");
  }, Error, "EncodingError U+EA6A");
  assertThrows(() => {
    ms932Encoder.encode("\uEA6B");
  }, Error, "EncodingError U+EA6B");
  assertThrows(() => {
    ms932Encoder.encode("\uEA6C");
  }, Error, "EncodingError U+EA6C");
  assertThrows(() => {
    ms932Encoder.encode("\uEA6D");
  }, Error, "EncodingError U+EA6D");
  assertThrows(() => {
    ms932Encoder.encode("\uEA6E");
  }, Error, "EncodingError U+EA6E");
  assertThrows(() => {
    ms932Encoder.encode("\uEA6F");
  }, Error, "EncodingError U+EA6F");
  assertThrows(() => {
    ms932Encoder.encode("\uEA70");
  }, Error, "EncodingError U+EA70");
  assertThrows(() => {
    ms932Encoder.encode("\uEA71");
  }, Error, "EncodingError U+EA71");
  assertThrows(() => {
    ms932Encoder.encode("\uEA72");
  }, Error, "EncodingError U+EA72");
  assertThrows(() => {
    ms932Encoder.encode("\uEA73");
  }, Error, "EncodingError U+EA73");
  assertThrows(() => {
    ms932Encoder.encode("\uEA74");
  }, Error, "EncodingError U+EA74");
  assertThrows(() => {
    ms932Encoder.encode("\uEA75");
  }, Error, "EncodingError U+EA75");
  assertThrows(() => {
    ms932Encoder.encode("\uEA76");
  }, Error, "EncodingError U+EA76");
  assertThrows(() => {
    ms932Encoder.encode("\uEA77");
  }, Error, "EncodingError U+EA77");
  assertThrows(() => {
    ms932Encoder.encode("\uEA78");
  }, Error, "EncodingError U+EA78");
  assertThrows(() => {
    ms932Encoder.encode("\uEA79");
  }, Error, "EncodingError U+EA79");
  assertThrows(() => {
    ms932Encoder.encode("\uEA7A");
  }, Error, "EncodingError U+EA7A");
  assertThrows(() => {
    ms932Encoder.encode("\uEA7B");
  }, Error, "EncodingError U+EA7B");
  assertThrows(() => {
    ms932Encoder.encode("\uEA7C");
  }, Error, "EncodingError U+EA7C");
  assertThrows(() => {
    ms932Encoder.encode("\uEA7D");
  }, Error, "EncodingError U+EA7D");
  assertThrows(() => {
    ms932Encoder.encode("\uEA7E");
  }, Error, "EncodingError U+EA7E");
  assertThrows(() => {
    ms932Encoder.encode("\uEA7F");
  }, Error, "EncodingError U+EA7F");
  assertThrows(() => {
    ms932Encoder.encode("\uEA80");
  }, Error, "EncodingError U+EA80");
  assertThrows(() => {
    ms932Encoder.encode("\uEA81");
  }, Error, "EncodingError U+EA81");
  assertThrows(() => {
    ms932Encoder.encode("\uEA82");
  }, Error, "EncodingError U+EA82");
  assertThrows(() => {
    ms932Encoder.encode("\uEA83");
  }, Error, "EncodingError U+EA83");
  assertThrows(() => {
    ms932Encoder.encode("\uEA84");
  }, Error, "EncodingError U+EA84");
  assertThrows(() => {
    ms932Encoder.encode("\uEA85");
  }, Error, "EncodingError U+EA85");
  assertThrows(() => {
    ms932Encoder.encode("\uEA86");
  }, Error, "EncodingError U+EA86");
  assertThrows(() => {
    ms932Encoder.encode("\uEA87");
  }, Error, "EncodingError U+EA87");
  assertThrows(() => {
    ms932Encoder.encode("\uEA88");
  }, Error, "EncodingError U+EA88");
  assertThrows(() => {
    ms932Encoder.encode("\uEA89");
  }, Error, "EncodingError U+EA89");
  assertThrows(() => {
    ms932Encoder.encode("\uEA8A");
  }, Error, "EncodingError U+EA8A");
  assertThrows(() => {
    ms932Encoder.encode("\uEA8B");
  }, Error, "EncodingError U+EA8B");
  assertThrows(() => {
    ms932Encoder.encode("\uEA8C");
  }, Error, "EncodingError U+EA8C");
  assertThrows(() => {
    ms932Encoder.encode("\uEA8D");
  }, Error, "EncodingError U+EA8D");
  assertThrows(() => {
    ms932Encoder.encode("\uEA8E");
  }, Error, "EncodingError U+EA8E");
  assertThrows(() => {
    ms932Encoder.encode("\uEA8F");
  }, Error, "EncodingError U+EA8F");
  assertThrows(() => {
    ms932Encoder.encode("\uEA90");
  }, Error, "EncodingError U+EA90");
  assertThrows(() => {
    ms932Encoder.encode("\uEA91");
  }, Error, "EncodingError U+EA91");
  assertThrows(() => {
    ms932Encoder.encode("\uEA92");
  }, Error, "EncodingError U+EA92");
  assertThrows(() => {
    ms932Encoder.encode("\uEA93");
  }, Error, "EncodingError U+EA93");
  assertThrows(() => {
    ms932Encoder.encode("\uEA94");
  }, Error, "EncodingError U+EA94");
  assertThrows(() => {
    ms932Encoder.encode("\uEA95");
  }, Error, "EncodingError U+EA95");
  assertThrows(() => {
    ms932Encoder.encode("\uEA96");
  }, Error, "EncodingError U+EA96");
  assertThrows(() => {
    ms932Encoder.encode("\uEA97");
  }, Error, "EncodingError U+EA97");
  assertThrows(() => {
    ms932Encoder.encode("\uEA98");
  }, Error, "EncodingError U+EA98");
  assertThrows(() => {
    ms932Encoder.encode("\uEA99");
  }, Error, "EncodingError U+EA99");
  assertThrows(() => {
    ms932Encoder.encode("\uEA9A");
  }, Error, "EncodingError U+EA9A");
  assertThrows(() => {
    ms932Encoder.encode("\uEA9B");
  }, Error, "EncodingError U+EA9B");
  assertThrows(() => {
    ms932Encoder.encode("\uEA9C");
  }, Error, "EncodingError U+EA9C");
  assertThrows(() => {
    ms932Encoder.encode("\uEA9D");
  }, Error, "EncodingError U+EA9D");
  assertThrows(() => {
    ms932Encoder.encode("\uEA9E");
  }, Error, "EncodingError U+EA9E");
  assertThrows(() => {
    ms932Encoder.encode("\uEA9F");
  }, Error, "EncodingError U+EA9F");
  assertThrows(() => {
    ms932Encoder.encode("\uEAA0");
  }, Error, "EncodingError U+EAA0");
  assertThrows(() => {
    ms932Encoder.encode("\uEAA1");
  }, Error, "EncodingError U+EAA1");
  assertThrows(() => {
    ms932Encoder.encode("\uEAA2");
  }, Error, "EncodingError U+EAA2");
  assertThrows(() => {
    ms932Encoder.encode("\uEAA3");
  }, Error, "EncodingError U+EAA3");
  assertThrows(() => {
    ms932Encoder.encode("\uEAA4");
  }, Error, "EncodingError U+EAA4");
  assertThrows(() => {
    ms932Encoder.encode("\uEAA5");
  }, Error, "EncodingError U+EAA5");
  assertThrows(() => {
    ms932Encoder.encode("\uEAA6");
  }, Error, "EncodingError U+EAA6");
  assertThrows(() => {
    ms932Encoder.encode("\uEAA7");
  }, Error, "EncodingError U+EAA7");
  assertThrows(() => {
    ms932Encoder.encode("\uEAA8");
  }, Error, "EncodingError U+EAA8");
  assertThrows(() => {
    ms932Encoder.encode("\uEAA9");
  }, Error, "EncodingError U+EAA9");
  assertThrows(() => {
    ms932Encoder.encode("\uEAAA");
  }, Error, "EncodingError U+EAAA");
  assertThrows(() => {
    ms932Encoder.encode("\uEAAB");
  }, Error, "EncodingError U+EAAB");
  assertThrows(() => {
    ms932Encoder.encode("\uEAAC");
  }, Error, "EncodingError U+EAAC");
  assertThrows(() => {
    ms932Encoder.encode("\uEAAD");
  }, Error, "EncodingError U+EAAD");
  assertThrows(() => {
    ms932Encoder.encode("\uEAAE");
  }, Error, "EncodingError U+EAAE");
  assertThrows(() => {
    ms932Encoder.encode("\uEAAF");
  }, Error, "EncodingError U+EAAF");
  assertThrows(() => {
    ms932Encoder.encode("\uEAB0");
  }, Error, "EncodingError U+EAB0");
  assertThrows(() => {
    ms932Encoder.encode("\uEAB1");
  }, Error, "EncodingError U+EAB1");
  assertThrows(() => {
    ms932Encoder.encode("\uEAB2");
  }, Error, "EncodingError U+EAB2");
  assertThrows(() => {
    ms932Encoder.encode("\uEAB3");
  }, Error, "EncodingError U+EAB3");
  assertThrows(() => {
    ms932Encoder.encode("\uEAB4");
  }, Error, "EncodingError U+EAB4");
  assertThrows(() => {
    ms932Encoder.encode("\uEAB5");
  }, Error, "EncodingError U+EAB5");
  assertThrows(() => {
    ms932Encoder.encode("\uEAB6");
  }, Error, "EncodingError U+EAB6");
  assertThrows(() => {
    ms932Encoder.encode("\uEAB7");
  }, Error, "EncodingError U+EAB7");
  assertThrows(() => {
    ms932Encoder.encode("\uEAB8");
  }, Error, "EncodingError U+EAB8");
  assertThrows(() => {
    ms932Encoder.encode("\uEAB9");
  }, Error, "EncodingError U+EAB9");
  assertThrows(() => {
    ms932Encoder.encode("\uEABA");
  }, Error, "EncodingError U+EABA");
  assertThrows(() => {
    ms932Encoder.encode("\uEABB");
  }, Error, "EncodingError U+EABB");
  assertThrows(() => {
    ms932Encoder.encode("\uEABC");
  }, Error, "EncodingError U+EABC");
  assertThrows(() => {
    ms932Encoder.encode("\uEABD");
  }, Error, "EncodingError U+EABD");
  assertThrows(() => {
    ms932Encoder.encode("\uEABE");
  }, Error, "EncodingError U+EABE");
  assertThrows(() => {
    ms932Encoder.encode("\uEABF");
  }, Error, "EncodingError U+EABF");
  assertThrows(() => {
    ms932Encoder.encode("\uEAC0");
  }, Error, "EncodingError U+EAC0");
  assertThrows(() => {
    ms932Encoder.encode("\uEAC1");
  }, Error, "EncodingError U+EAC1");
  assertThrows(() => {
    ms932Encoder.encode("\uEAC2");
  }, Error, "EncodingError U+EAC2");
  assertThrows(() => {
    ms932Encoder.encode("\uEAC3");
  }, Error, "EncodingError U+EAC3");
  assertThrows(() => {
    ms932Encoder.encode("\uEAC4");
  }, Error, "EncodingError U+EAC4");
  assertThrows(() => {
    ms932Encoder.encode("\uEAC5");
  }, Error, "EncodingError U+EAC5");
  assertThrows(() => {
    ms932Encoder.encode("\uEAC6");
  }, Error, "EncodingError U+EAC6");
  assertThrows(() => {
    ms932Encoder.encode("\uEAC7");
  }, Error, "EncodingError U+EAC7");
  assertThrows(() => {
    ms932Encoder.encode("\uEAC8");
  }, Error, "EncodingError U+EAC8");
  assertThrows(() => {
    ms932Encoder.encode("\uEAC9");
  }, Error, "EncodingError U+EAC9");
  assertThrows(() => {
    ms932Encoder.encode("\uEACA");
  }, Error, "EncodingError U+EACA");
  assertThrows(() => {
    ms932Encoder.encode("\uEACB");
  }, Error, "EncodingError U+EACB");
  assertThrows(() => {
    ms932Encoder.encode("\uEACC");
  }, Error, "EncodingError U+EACC");
  assertThrows(() => {
    ms932Encoder.encode("\uEACD");
  }, Error, "EncodingError U+EACD");
  assertThrows(() => {
    ms932Encoder.encode("\uEACE");
  }, Error, "EncodingError U+EACE");
  assertThrows(() => {
    ms932Encoder.encode("\uEACF");
  }, Error, "EncodingError U+EACF");
  assertThrows(() => {
    ms932Encoder.encode("\uEAD0");
  }, Error, "EncodingError U+EAD0");
  assertThrows(() => {
    ms932Encoder.encode("\uEAD1");
  }, Error, "EncodingError U+EAD1");
  assertThrows(() => {
    ms932Encoder.encode("\uEAD2");
  }, Error, "EncodingError U+EAD2");
  assertThrows(() => {
    ms932Encoder.encode("\uEAD3");
  }, Error, "EncodingError U+EAD3");
  assertThrows(() => {
    ms932Encoder.encode("\uEAD4");
  }, Error, "EncodingError U+EAD4");
  assertThrows(() => {
    ms932Encoder.encode("\uEAD5");
  }, Error, "EncodingError U+EAD5");
  assertThrows(() => {
    ms932Encoder.encode("\uEAD6");
  }, Error, "EncodingError U+EAD6");
  assertThrows(() => {
    ms932Encoder.encode("\uEAD7");
  }, Error, "EncodingError U+EAD7");
  assertThrows(() => {
    ms932Encoder.encode("\uEAD8");
  }, Error, "EncodingError U+EAD8");
  assertThrows(() => {
    ms932Encoder.encode("\uEAD9");
  }, Error, "EncodingError U+EAD9");
  assertThrows(() => {
    ms932Encoder.encode("\uEADA");
  }, Error, "EncodingError U+EADA");
  assertThrows(() => {
    ms932Encoder.encode("\uEADB");
  }, Error, "EncodingError U+EADB");
  assertThrows(() => {
    ms932Encoder.encode("\uEADC");
  }, Error, "EncodingError U+EADC");
  assertThrows(() => {
    ms932Encoder.encode("\uEADD");
  }, Error, "EncodingError U+EADD");
  assertThrows(() => {
    ms932Encoder.encode("\uEADE");
  }, Error, "EncodingError U+EADE");
  assertThrows(() => {
    ms932Encoder.encode("\uEADF");
  }, Error, "EncodingError U+EADF");
  assertThrows(() => {
    ms932Encoder.encode("\uEAE0");
  }, Error, "EncodingError U+EAE0");
  assertThrows(() => {
    ms932Encoder.encode("\uEAE1");
  }, Error, "EncodingError U+EAE1");
  assertThrows(() => {
    ms932Encoder.encode("\uEAE2");
  }, Error, "EncodingError U+EAE2");
  assertThrows(() => {
    ms932Encoder.encode("\uEAE3");
  }, Error, "EncodingError U+EAE3");
  assertThrows(() => {
    ms932Encoder.encode("\uEAE4");
  }, Error, "EncodingError U+EAE4");
  assertThrows(() => {
    ms932Encoder.encode("\uEAE5");
  }, Error, "EncodingError U+EAE5");
  assertThrows(() => {
    ms932Encoder.encode("\uEAE6");
  }, Error, "EncodingError U+EAE6");
  assertThrows(() => {
    ms932Encoder.encode("\uEAE7");
  }, Error, "EncodingError U+EAE7");
  assertThrows(() => {
    ms932Encoder.encode("\uEAE8");
  }, Error, "EncodingError U+EAE8");
  assertThrows(() => {
    ms932Encoder.encode("\uEAE9");
  }, Error, "EncodingError U+EAE9");
  assertThrows(() => {
    ms932Encoder.encode("\uEAEA");
  }, Error, "EncodingError U+EAEA");
  assertThrows(() => {
    ms932Encoder.encode("\uEAEB");
  }, Error, "EncodingError U+EAEB");
  assertThrows(() => {
    ms932Encoder.encode("\uEAEC");
  }, Error, "EncodingError U+EAEC");
  assertThrows(() => {
    ms932Encoder.encode("\uEAED");
  }, Error, "EncodingError U+EAED");
  assertThrows(() => {
    ms932Encoder.encode("\uEAEE");
  }, Error, "EncodingError U+EAEE");
  assertThrows(() => {
    ms932Encoder.encode("\uEAEF");
  }, Error, "EncodingError U+EAEF");
  assertThrows(() => {
    ms932Encoder.encode("\uEAF0");
  }, Error, "EncodingError U+EAF0");
  assertThrows(() => {
    ms932Encoder.encode("\uEAF1");
  }, Error, "EncodingError U+EAF1");
  assertThrows(() => {
    ms932Encoder.encode("\uEAF2");
  }, Error, "EncodingError U+EAF2");
  assertThrows(() => {
    ms932Encoder.encode("\uEAF3");
  }, Error, "EncodingError U+EAF3");
  assertThrows(() => {
    ms932Encoder.encode("\uEAF4");
  }, Error, "EncodingError U+EAF4");
  assertThrows(() => {
    ms932Encoder.encode("\uEAF5");
  }, Error, "EncodingError U+EAF5");
  assertThrows(() => {
    ms932Encoder.encode("\uEAF6");
  }, Error, "EncodingError U+EAF6");
  assertThrows(() => {
    ms932Encoder.encode("\uEAF7");
  }, Error, "EncodingError U+EAF7");
  assertThrows(() => {
    ms932Encoder.encode("\uEAF8");
  }, Error, "EncodingError U+EAF8");
  assertThrows(() => {
    ms932Encoder.encode("\uEAF9");
  }, Error, "EncodingError U+EAF9");
  assertThrows(() => {
    ms932Encoder.encode("\uEAFA");
  }, Error, "EncodingError U+EAFA");
  assertThrows(() => {
    ms932Encoder.encode("\uEAFB");
  }, Error, "EncodingError U+EAFB");
  assertThrows(() => {
    ms932Encoder.encode("\uEAFC");
  }, Error, "EncodingError U+EAFC");
  assertThrows(() => {
    ms932Encoder.encode("\uEAFD");
  }, Error, "EncodingError U+EAFD");
  assertThrows(() => {
    ms932Encoder.encode("\uEAFE");
  }, Error, "EncodingError U+EAFE");
  assertThrows(() => {
    ms932Encoder.encode("\uEAFF");
  }, Error, "EncodingError U+EAFF");
  assertThrows(() => {
    ms932Encoder.encode("\uEB00");
  }, Error, "EncodingError U+EB00");
  assertThrows(() => {
    ms932Encoder.encode("\uEB01");
  }, Error, "EncodingError U+EB01");
  assertThrows(() => {
    ms932Encoder.encode("\uEB02");
  }, Error, "EncodingError U+EB02");
  assertThrows(() => {
    ms932Encoder.encode("\uEB03");
  }, Error, "EncodingError U+EB03");
  assertThrows(() => {
    ms932Encoder.encode("\uEB04");
  }, Error, "EncodingError U+EB04");
  assertThrows(() => {
    ms932Encoder.encode("\uEB05");
  }, Error, "EncodingError U+EB05");
  assertThrows(() => {
    ms932Encoder.encode("\uEB06");
  }, Error, "EncodingError U+EB06");
  assertThrows(() => {
    ms932Encoder.encode("\uEB07");
  }, Error, "EncodingError U+EB07");
  assertThrows(() => {
    ms932Encoder.encode("\uEB08");
  }, Error, "EncodingError U+EB08");
  assertThrows(() => {
    ms932Encoder.encode("\uEB09");
  }, Error, "EncodingError U+EB09");
  assertThrows(() => {
    ms932Encoder.encode("\uEB0A");
  }, Error, "EncodingError U+EB0A");
  assertThrows(() => {
    ms932Encoder.encode("\uEB0B");
  }, Error, "EncodingError U+EB0B");
  assertThrows(() => {
    ms932Encoder.encode("\uEB0C");
  }, Error, "EncodingError U+EB0C");
  assertThrows(() => {
    ms932Encoder.encode("\uEB0D");
  }, Error, "EncodingError U+EB0D");
  assertThrows(() => {
    ms932Encoder.encode("\uEB0E");
  }, Error, "EncodingError U+EB0E");
  assertThrows(() => {
    ms932Encoder.encode("\uEB0F");
  }, Error, "EncodingError U+EB0F");
  assertThrows(() => {
    ms932Encoder.encode("\uEB10");
  }, Error, "EncodingError U+EB10");
  assertThrows(() => {
    ms932Encoder.encode("\uEB11");
  }, Error, "EncodingError U+EB11");
  assertThrows(() => {
    ms932Encoder.encode("\uEB12");
  }, Error, "EncodingError U+EB12");
  assertThrows(() => {
    ms932Encoder.encode("\uEB13");
  }, Error, "EncodingError U+EB13");
  assertThrows(() => {
    ms932Encoder.encode("\uEB14");
  }, Error, "EncodingError U+EB14");
  assertThrows(() => {
    ms932Encoder.encode("\uEB15");
  }, Error, "EncodingError U+EB15");
  assertThrows(() => {
    ms932Encoder.encode("\uEB16");
  }, Error, "EncodingError U+EB16");
  assertThrows(() => {
    ms932Encoder.encode("\uEB17");
  }, Error, "EncodingError U+EB17");
  assertThrows(() => {
    ms932Encoder.encode("\uEB18");
  }, Error, "EncodingError U+EB18");
  assertThrows(() => {
    ms932Encoder.encode("\uEB19");
  }, Error, "EncodingError U+EB19");
  assertThrows(() => {
    ms932Encoder.encode("\uEB1A");
  }, Error, "EncodingError U+EB1A");
  assertThrows(() => {
    ms932Encoder.encode("\uEB1B");
  }, Error, "EncodingError U+EB1B");
  assertThrows(() => {
    ms932Encoder.encode("\uEB1C");
  }, Error, "EncodingError U+EB1C");
  assertThrows(() => {
    ms932Encoder.encode("\uEB1D");
  }, Error, "EncodingError U+EB1D");
  assertThrows(() => {
    ms932Encoder.encode("\uEB1E");
  }, Error, "EncodingError U+EB1E");
  assertThrows(() => {
    ms932Encoder.encode("\uEB1F");
  }, Error, "EncodingError U+EB1F");
  assertThrows(() => {
    ms932Encoder.encode("\uEB20");
  }, Error, "EncodingError U+EB20");
  assertThrows(() => {
    ms932Encoder.encode("\uEB21");
  }, Error, "EncodingError U+EB21");
  assertThrows(() => {
    ms932Encoder.encode("\uEB22");
  }, Error, "EncodingError U+EB22");
  assertThrows(() => {
    ms932Encoder.encode("\uEB23");
  }, Error, "EncodingError U+EB23");
  assertThrows(() => {
    ms932Encoder.encode("\uEB24");
  }, Error, "EncodingError U+EB24");
  assertThrows(() => {
    ms932Encoder.encode("\uEB25");
  }, Error, "EncodingError U+EB25");
  assertThrows(() => {
    ms932Encoder.encode("\uEB26");
  }, Error, "EncodingError U+EB26");
  assertThrows(() => {
    ms932Encoder.encode("\uEB27");
  }, Error, "EncodingError U+EB27");
  assertThrows(() => {
    ms932Encoder.encode("\uEB28");
  }, Error, "EncodingError U+EB28");
  assertThrows(() => {
    ms932Encoder.encode("\uEB29");
  }, Error, "EncodingError U+EB29");
  assertThrows(() => {
    ms932Encoder.encode("\uEB2A");
  }, Error, "EncodingError U+EB2A");
  assertThrows(() => {
    ms932Encoder.encode("\uEB2B");
  }, Error, "EncodingError U+EB2B");
  assertThrows(() => {
    ms932Encoder.encode("\uEB2C");
  }, Error, "EncodingError U+EB2C");
  assertThrows(() => {
    ms932Encoder.encode("\uEB2D");
  }, Error, "EncodingError U+EB2D");
  assertThrows(() => {
    ms932Encoder.encode("\uEB2E");
  }, Error, "EncodingError U+EB2E");
  assertThrows(() => {
    ms932Encoder.encode("\uEB2F");
  }, Error, "EncodingError U+EB2F");
  assertThrows(() => {
    ms932Encoder.encode("\uEB30");
  }, Error, "EncodingError U+EB30");
  assertThrows(() => {
    ms932Encoder.encode("\uEB31");
  }, Error, "EncodingError U+EB31");
  assertThrows(() => {
    ms932Encoder.encode("\uEB32");
  }, Error, "EncodingError U+EB32");
  assertThrows(() => {
    ms932Encoder.encode("\uEB33");
  }, Error, "EncodingError U+EB33");
  assertThrows(() => {
    ms932Encoder.encode("\uEB34");
  }, Error, "EncodingError U+EB34");
  assertThrows(() => {
    ms932Encoder.encode("\uEB35");
  }, Error, "EncodingError U+EB35");
  assertThrows(() => {
    ms932Encoder.encode("\uEB36");
  }, Error, "EncodingError U+EB36");
  assertThrows(() => {
    ms932Encoder.encode("\uEB37");
  }, Error, "EncodingError U+EB37");
  assertThrows(() => {
    ms932Encoder.encode("\uEB38");
  }, Error, "EncodingError U+EB38");
  assertThrows(() => {
    ms932Encoder.encode("\uEB39");
  }, Error, "EncodingError U+EB39");
  assertThrows(() => {
    ms932Encoder.encode("\uEB3A");
  }, Error, "EncodingError U+EB3A");
  assertThrows(() => {
    ms932Encoder.encode("\uEB3B");
  }, Error, "EncodingError U+EB3B");
  assertThrows(() => {
    ms932Encoder.encode("\uEB3C");
  }, Error, "EncodingError U+EB3C");
  assertThrows(() => {
    ms932Encoder.encode("\uEB3D");
  }, Error, "EncodingError U+EB3D");
  assertThrows(() => {
    ms932Encoder.encode("\uEB3E");
  }, Error, "EncodingError U+EB3E");
  assertThrows(() => {
    ms932Encoder.encode("\uEB3F");
  }, Error, "EncodingError U+EB3F");
  assertThrows(() => {
    ms932Encoder.encode("\uEB40");
  }, Error, "EncodingError U+EB40");
  assertThrows(() => {
    ms932Encoder.encode("\uEB41");
  }, Error, "EncodingError U+EB41");
  assertThrows(() => {
    ms932Encoder.encode("\uEB42");
  }, Error, "EncodingError U+EB42");
  assertThrows(() => {
    ms932Encoder.encode("\uEB43");
  }, Error, "EncodingError U+EB43");
  assertThrows(() => {
    ms932Encoder.encode("\uEB44");
  }, Error, "EncodingError U+EB44");
  assertThrows(() => {
    ms932Encoder.encode("\uEB45");
  }, Error, "EncodingError U+EB45");
  assertThrows(() => {
    ms932Encoder.encode("\uEB46");
  }, Error, "EncodingError U+EB46");
  assertThrows(() => {
    ms932Encoder.encode("\uEB47");
  }, Error, "EncodingError U+EB47");
  assertThrows(() => {
    ms932Encoder.encode("\uEB48");
  }, Error, "EncodingError U+EB48");
  assertThrows(() => {
    ms932Encoder.encode("\uEB49");
  }, Error, "EncodingError U+EB49");
  assertThrows(() => {
    ms932Encoder.encode("\uEB4A");
  }, Error, "EncodingError U+EB4A");
  assertThrows(() => {
    ms932Encoder.encode("\uEB4B");
  }, Error, "EncodingError U+EB4B");
  assertThrows(() => {
    ms932Encoder.encode("\uEB4C");
  }, Error, "EncodingError U+EB4C");
  assertThrows(() => {
    ms932Encoder.encode("\uEB4D");
  }, Error, "EncodingError U+EB4D");
  assertThrows(() => {
    ms932Encoder.encode("\uEB4E");
  }, Error, "EncodingError U+EB4E");
  assertThrows(() => {
    ms932Encoder.encode("\uEB4F");
  }, Error, "EncodingError U+EB4F");
  assertThrows(() => {
    ms932Encoder.encode("\uEB50");
  }, Error, "EncodingError U+EB50");
  assertThrows(() => {
    ms932Encoder.encode("\uEB51");
  }, Error, "EncodingError U+EB51");
  assertThrows(() => {
    ms932Encoder.encode("\uEB52");
  }, Error, "EncodingError U+EB52");
  assertThrows(() => {
    ms932Encoder.encode("\uEB53");
  }, Error, "EncodingError U+EB53");
  assertThrows(() => {
    ms932Encoder.encode("\uEB54");
  }, Error, "EncodingError U+EB54");
  assertThrows(() => {
    ms932Encoder.encode("\uEB55");
  }, Error, "EncodingError U+EB55");
  assertThrows(() => {
    ms932Encoder.encode("\uEB56");
  }, Error, "EncodingError U+EB56");
  assertThrows(() => {
    ms932Encoder.encode("\uEB57");
  }, Error, "EncodingError U+EB57");
  assertThrows(() => {
    ms932Encoder.encode("\uEB58");
  }, Error, "EncodingError U+EB58");
  assertThrows(() => {
    ms932Encoder.encode("\uEB59");
  }, Error, "EncodingError U+EB59");
  assertThrows(() => {
    ms932Encoder.encode("\uEB5A");
  }, Error, "EncodingError U+EB5A");
  assertThrows(() => {
    ms932Encoder.encode("\uEB5B");
  }, Error, "EncodingError U+EB5B");
  assertThrows(() => {
    ms932Encoder.encode("\uEB5C");
  }, Error, "EncodingError U+EB5C");
  assertThrows(() => {
    ms932Encoder.encode("\uEB5D");
  }, Error, "EncodingError U+EB5D");
  assertThrows(() => {
    ms932Encoder.encode("\uEB5E");
  }, Error, "EncodingError U+EB5E");
  assertThrows(() => {
    ms932Encoder.encode("\uEB5F");
  }, Error, "EncodingError U+EB5F");
  assertThrows(() => {
    ms932Encoder.encode("\uEB60");
  }, Error, "EncodingError U+EB60");
  assertThrows(() => {
    ms932Encoder.encode("\uEB61");
  }, Error, "EncodingError U+EB61");
  assertThrows(() => {
    ms932Encoder.encode("\uEB62");
  }, Error, "EncodingError U+EB62");
  assertThrows(() => {
    ms932Encoder.encode("\uEB63");
  }, Error, "EncodingError U+EB63");
  assertThrows(() => {
    ms932Encoder.encode("\uEB64");
  }, Error, "EncodingError U+EB64");
  assertThrows(() => {
    ms932Encoder.encode("\uEB65");
  }, Error, "EncodingError U+EB65");
  assertThrows(() => {
    ms932Encoder.encode("\uEB66");
  }, Error, "EncodingError U+EB66");
  assertThrows(() => {
    ms932Encoder.encode("\uEB67");
  }, Error, "EncodingError U+EB67");
  assertThrows(() => {
    ms932Encoder.encode("\uEB68");
  }, Error, "EncodingError U+EB68");
  assertThrows(() => {
    ms932Encoder.encode("\uEB69");
  }, Error, "EncodingError U+EB69");
  assertThrows(() => {
    ms932Encoder.encode("\uEB6A");
  }, Error, "EncodingError U+EB6A");
  assertThrows(() => {
    ms932Encoder.encode("\uEB6B");
  }, Error, "EncodingError U+EB6B");
  assertThrows(() => {
    ms932Encoder.encode("\uEB6C");
  }, Error, "EncodingError U+EB6C");
  assertThrows(() => {
    ms932Encoder.encode("\uEB6D");
  }, Error, "EncodingError U+EB6D");
  assertThrows(() => {
    ms932Encoder.encode("\uEB6E");
  }, Error, "EncodingError U+EB6E");
  assertThrows(() => {
    ms932Encoder.encode("\uEB6F");
  }, Error, "EncodingError U+EB6F");
  assertThrows(() => {
    ms932Encoder.encode("\uEB70");
  }, Error, "EncodingError U+EB70");
  assertThrows(() => {
    ms932Encoder.encode("\uEB71");
  }, Error, "EncodingError U+EB71");
  assertThrows(() => {
    ms932Encoder.encode("\uEB72");
  }, Error, "EncodingError U+EB72");
  assertThrows(() => {
    ms932Encoder.encode("\uEB73");
  }, Error, "EncodingError U+EB73");
  assertThrows(() => {
    ms932Encoder.encode("\uEB74");
  }, Error, "EncodingError U+EB74");
  assertThrows(() => {
    ms932Encoder.encode("\uEB75");
  }, Error, "EncodingError U+EB75");
  assertThrows(() => {
    ms932Encoder.encode("\uEB76");
  }, Error, "EncodingError U+EB76");
  assertThrows(() => {
    ms932Encoder.encode("\uEB77");
  }, Error, "EncodingError U+EB77");
  assertThrows(() => {
    ms932Encoder.encode("\uEB78");
  }, Error, "EncodingError U+EB78");
  assertThrows(() => {
    ms932Encoder.encode("\uEB79");
  }, Error, "EncodingError U+EB79");
  assertThrows(() => {
    ms932Encoder.encode("\uEB7A");
  }, Error, "EncodingError U+EB7A");
  assertThrows(() => {
    ms932Encoder.encode("\uEB7B");
  }, Error, "EncodingError U+EB7B");
  assertThrows(() => {
    ms932Encoder.encode("\uEB7C");
  }, Error, "EncodingError U+EB7C");
  assertThrows(() => {
    ms932Encoder.encode("\uEB7D");
  }, Error, "EncodingError U+EB7D");
  assertThrows(() => {
    ms932Encoder.encode("\uEB7E");
  }, Error, "EncodingError U+EB7E");
  assertThrows(() => {
    ms932Encoder.encode("\uEB7F");
  }, Error, "EncodingError U+EB7F");
  assertThrows(() => {
    ms932Encoder.encode("\uEB80");
  }, Error, "EncodingError U+EB80");
  assertThrows(() => {
    ms932Encoder.encode("\uEB81");
  }, Error, "EncodingError U+EB81");
  assertThrows(() => {
    ms932Encoder.encode("\uEB82");
  }, Error, "EncodingError U+EB82");
  assertThrows(() => {
    ms932Encoder.encode("\uEB83");
  }, Error, "EncodingError U+EB83");
  assertThrows(() => {
    ms932Encoder.encode("\uEB84");
  }, Error, "EncodingError U+EB84");
  assertThrows(() => {
    ms932Encoder.encode("\uEB85");
  }, Error, "EncodingError U+EB85");
  assertThrows(() => {
    ms932Encoder.encode("\uEB86");
  }, Error, "EncodingError U+EB86");
  assertThrows(() => {
    ms932Encoder.encode("\uEB87");
  }, Error, "EncodingError U+EB87");
  assertThrows(() => {
    ms932Encoder.encode("\uEB88");
  }, Error, "EncodingError U+EB88");
  assertThrows(() => {
    ms932Encoder.encode("\uEB89");
  }, Error, "EncodingError U+EB89");
  assertThrows(() => {
    ms932Encoder.encode("\uEB8A");
  }, Error, "EncodingError U+EB8A");
  assertThrows(() => {
    ms932Encoder.encode("\uEB8B");
  }, Error, "EncodingError U+EB8B");
  assertThrows(() => {
    ms932Encoder.encode("\uEB8C");
  }, Error, "EncodingError U+EB8C");
  assertThrows(() => {
    ms932Encoder.encode("\uEB8D");
  }, Error, "EncodingError U+EB8D");
  assertThrows(() => {
    ms932Encoder.encode("\uEB8E");
  }, Error, "EncodingError U+EB8E");
  assertThrows(() => {
    ms932Encoder.encode("\uEB8F");
  }, Error, "EncodingError U+EB8F");
  assertThrows(() => {
    ms932Encoder.encode("\uEB90");
  }, Error, "EncodingError U+EB90");
  assertThrows(() => {
    ms932Encoder.encode("\uEB91");
  }, Error, "EncodingError U+EB91");
  assertThrows(() => {
    ms932Encoder.encode("\uEB92");
  }, Error, "EncodingError U+EB92");
  assertThrows(() => {
    ms932Encoder.encode("\uEB93");
  }, Error, "EncodingError U+EB93");
  assertThrows(() => {
    ms932Encoder.encode("\uEB94");
  }, Error, "EncodingError U+EB94");
  assertThrows(() => {
    ms932Encoder.encode("\uEB95");
  }, Error, "EncodingError U+EB95");
  assertThrows(() => {
    ms932Encoder.encode("\uEB96");
  }, Error, "EncodingError U+EB96");
  assertThrows(() => {
    ms932Encoder.encode("\uEB97");
  }, Error, "EncodingError U+EB97");
  assertThrows(() => {
    ms932Encoder.encode("\uEB98");
  }, Error, "EncodingError U+EB98");
  assertThrows(() => {
    ms932Encoder.encode("\uEB99");
  }, Error, "EncodingError U+EB99");
  assertThrows(() => {
    ms932Encoder.encode("\uEB9A");
  }, Error, "EncodingError U+EB9A");
  assertThrows(() => {
    ms932Encoder.encode("\uEB9B");
  }, Error, "EncodingError U+EB9B");
  assertThrows(() => {
    ms932Encoder.encode("\uEB9C");
  }, Error, "EncodingError U+EB9C");
  assertThrows(() => {
    ms932Encoder.encode("\uEB9D");
  }, Error, "EncodingError U+EB9D");
  assertThrows(() => {
    ms932Encoder.encode("\uEB9E");
  }, Error, "EncodingError U+EB9E");
  assertThrows(() => {
    ms932Encoder.encode("\uEB9F");
  }, Error, "EncodingError U+EB9F");
  assertThrows(() => {
    ms932Encoder.encode("\uEBA0");
  }, Error, "EncodingError U+EBA0");
  assertThrows(() => {
    ms932Encoder.encode("\uEBA1");
  }, Error, "EncodingError U+EBA1");
  assertThrows(() => {
    ms932Encoder.encode("\uEBA2");
  }, Error, "EncodingError U+EBA2");
  assertThrows(() => {
    ms932Encoder.encode("\uEBA3");
  }, Error, "EncodingError U+EBA3");
  assertThrows(() => {
    ms932Encoder.encode("\uEBA4");
  }, Error, "EncodingError U+EBA4");
  assertThrows(() => {
    ms932Encoder.encode("\uEBA5");
  }, Error, "EncodingError U+EBA5");
  assertThrows(() => {
    ms932Encoder.encode("\uEBA6");
  }, Error, "EncodingError U+EBA6");
  assertThrows(() => {
    ms932Encoder.encode("\uEBA7");
  }, Error, "EncodingError U+EBA7");
  assertThrows(() => {
    ms932Encoder.encode("\uEBA8");
  }, Error, "EncodingError U+EBA8");
  assertThrows(() => {
    ms932Encoder.encode("\uEBA9");
  }, Error, "EncodingError U+EBA9");
  assertThrows(() => {
    ms932Encoder.encode("\uEBAA");
  }, Error, "EncodingError U+EBAA");
  assertThrows(() => {
    ms932Encoder.encode("\uEBAB");
  }, Error, "EncodingError U+EBAB");
  assertThrows(() => {
    ms932Encoder.encode("\uEBAC");
  }, Error, "EncodingError U+EBAC");
  assertThrows(() => {
    ms932Encoder.encode("\uEBAD");
  }, Error, "EncodingError U+EBAD");
  assertThrows(() => {
    ms932Encoder.encode("\uEBAE");
  }, Error, "EncodingError U+EBAE");
  assertThrows(() => {
    ms932Encoder.encode("\uEBAF");
  }, Error, "EncodingError U+EBAF");
  assertThrows(() => {
    ms932Encoder.encode("\uEBB0");
  }, Error, "EncodingError U+EBB0");
  assertThrows(() => {
    ms932Encoder.encode("\uEBB1");
  }, Error, "EncodingError U+EBB1");
  assertThrows(() => {
    ms932Encoder.encode("\uEBB2");
  }, Error, "EncodingError U+EBB2");
  assertThrows(() => {
    ms932Encoder.encode("\uEBB3");
  }, Error, "EncodingError U+EBB3");
  assertThrows(() => {
    ms932Encoder.encode("\uEBB4");
  }, Error, "EncodingError U+EBB4");
  assertThrows(() => {
    ms932Encoder.encode("\uEBB5");
  }, Error, "EncodingError U+EBB5");
  assertThrows(() => {
    ms932Encoder.encode("\uEBB6");
  }, Error, "EncodingError U+EBB6");
  assertThrows(() => {
    ms932Encoder.encode("\uEBB7");
  }, Error, "EncodingError U+EBB7");
  assertThrows(() => {
    ms932Encoder.encode("\uEBB8");
  }, Error, "EncodingError U+EBB8");
  assertThrows(() => {
    ms932Encoder.encode("\uEBB9");
  }, Error, "EncodingError U+EBB9");
  assertThrows(() => {
    ms932Encoder.encode("\uEBBA");
  }, Error, "EncodingError U+EBBA");
  assertThrows(() => {
    ms932Encoder.encode("\uEBBB");
  }, Error, "EncodingError U+EBBB");
  assertThrows(() => {
    ms932Encoder.encode("\uEBBC");
  }, Error, "EncodingError U+EBBC");
  assertThrows(() => {
    ms932Encoder.encode("\uEBBD");
  }, Error, "EncodingError U+EBBD");
  assertThrows(() => {
    ms932Encoder.encode("\uEBBE");
  }, Error, "EncodingError U+EBBE");
  assertThrows(() => {
    ms932Encoder.encode("\uEBBF");
  }, Error, "EncodingError U+EBBF");
  assertThrows(() => {
    ms932Encoder.encode("\uEBC0");
  }, Error, "EncodingError U+EBC0");
  assertThrows(() => {
    ms932Encoder.encode("\uEBC1");
  }, Error, "EncodingError U+EBC1");
  assertThrows(() => {
    ms932Encoder.encode("\uEBC2");
  }, Error, "EncodingError U+EBC2");
  assertThrows(() => {
    ms932Encoder.encode("\uEBC3");
  }, Error, "EncodingError U+EBC3");
  assertThrows(() => {
    ms932Encoder.encode("\uEBC4");
  }, Error, "EncodingError U+EBC4");
  assertThrows(() => {
    ms932Encoder.encode("\uEBC5");
  }, Error, "EncodingError U+EBC5");
  assertThrows(() => {
    ms932Encoder.encode("\uEBC6");
  }, Error, "EncodingError U+EBC6");
  assertThrows(() => {
    ms932Encoder.encode("\uEBC7");
  }, Error, "EncodingError U+EBC7");
  assertThrows(() => {
    ms932Encoder.encode("\uEBC8");
  }, Error, "EncodingError U+EBC8");
  assertThrows(() => {
    ms932Encoder.encode("\uEBC9");
  }, Error, "EncodingError U+EBC9");
  assertThrows(() => {
    ms932Encoder.encode("\uEBCA");
  }, Error, "EncodingError U+EBCA");
  assertThrows(() => {
    ms932Encoder.encode("\uEBCB");
  }, Error, "EncodingError U+EBCB");
  assertThrows(() => {
    ms932Encoder.encode("\uEBCC");
  }, Error, "EncodingError U+EBCC");
  assertThrows(() => {
    ms932Encoder.encode("\uEBCD");
  }, Error, "EncodingError U+EBCD");
  assertThrows(() => {
    ms932Encoder.encode("\uEBCE");
  }, Error, "EncodingError U+EBCE");
  assertThrows(() => {
    ms932Encoder.encode("\uEBCF");
  }, Error, "EncodingError U+EBCF");
  assertThrows(() => {
    ms932Encoder.encode("\uEBD0");
  }, Error, "EncodingError U+EBD0");
  assertThrows(() => {
    ms932Encoder.encode("\uEBD1");
  }, Error, "EncodingError U+EBD1");
  assertThrows(() => {
    ms932Encoder.encode("\uEBD2");
  }, Error, "EncodingError U+EBD2");
  assertThrows(() => {
    ms932Encoder.encode("\uEBD3");
  }, Error, "EncodingError U+EBD3");
  assertThrows(() => {
    ms932Encoder.encode("\uEBD4");
  }, Error, "EncodingError U+EBD4");
  assertThrows(() => {
    ms932Encoder.encode("\uEBD5");
  }, Error, "EncodingError U+EBD5");
  assertThrows(() => {
    ms932Encoder.encode("\uEBD6");
  }, Error, "EncodingError U+EBD6");
  assertThrows(() => {
    ms932Encoder.encode("\uEBD7");
  }, Error, "EncodingError U+EBD7");
  assertThrows(() => {
    ms932Encoder.encode("\uEBD8");
  }, Error, "EncodingError U+EBD8");
  assertThrows(() => {
    ms932Encoder.encode("\uEBD9");
  }, Error, "EncodingError U+EBD9");
  assertThrows(() => {
    ms932Encoder.encode("\uEBDA");
  }, Error, "EncodingError U+EBDA");
  assertThrows(() => {
    ms932Encoder.encode("\uEBDB");
  }, Error, "EncodingError U+EBDB");
  assertThrows(() => {
    ms932Encoder.encode("\uEBDC");
  }, Error, "EncodingError U+EBDC");
  assertThrows(() => {
    ms932Encoder.encode("\uEBDD");
  }, Error, "EncodingError U+EBDD");
  assertThrows(() => {
    ms932Encoder.encode("\uEBDE");
  }, Error, "EncodingError U+EBDE");
  assertThrows(() => {
    ms932Encoder.encode("\uEBDF");
  }, Error, "EncodingError U+EBDF");
  assertThrows(() => {
    ms932Encoder.encode("\uEBE0");
  }, Error, "EncodingError U+EBE0");
  assertThrows(() => {
    ms932Encoder.encode("\uEBE1");
  }, Error, "EncodingError U+EBE1");
  assertThrows(() => {
    ms932Encoder.encode("\uEBE2");
  }, Error, "EncodingError U+EBE2");
  assertThrows(() => {
    ms932Encoder.encode("\uEBE3");
  }, Error, "EncodingError U+EBE3");
  assertThrows(() => {
    ms932Encoder.encode("\uEBE4");
  }, Error, "EncodingError U+EBE4");
  assertThrows(() => {
    ms932Encoder.encode("\uEBE5");
  }, Error, "EncodingError U+EBE5");
  assertThrows(() => {
    ms932Encoder.encode("\uEBE6");
  }, Error, "EncodingError U+EBE6");
  assertThrows(() => {
    ms932Encoder.encode("\uEBE7");
  }, Error, "EncodingError U+EBE7");
  assertThrows(() => {
    ms932Encoder.encode("\uEBE8");
  }, Error, "EncodingError U+EBE8");
  assertThrows(() => {
    ms932Encoder.encode("\uEBE9");
  }, Error, "EncodingError U+EBE9");
  assertThrows(() => {
    ms932Encoder.encode("\uEBEA");
  }, Error, "EncodingError U+EBEA");
  assertThrows(() => {
    ms932Encoder.encode("\uEBEB");
  }, Error, "EncodingError U+EBEB");
  assertThrows(() => {
    ms932Encoder.encode("\uEBEC");
  }, Error, "EncodingError U+EBEC");
  assertThrows(() => {
    ms932Encoder.encode("\uEBED");
  }, Error, "EncodingError U+EBED");
  assertThrows(() => {
    ms932Encoder.encode("\uEBEE");
  }, Error, "EncodingError U+EBEE");
  assertThrows(() => {
    ms932Encoder.encode("\uEBEF");
  }, Error, "EncodingError U+EBEF");
  assertThrows(() => {
    ms932Encoder.encode("\uEBF0");
  }, Error, "EncodingError U+EBF0");
  assertThrows(() => {
    ms932Encoder.encode("\uEBF1");
  }, Error, "EncodingError U+EBF1");
  assertThrows(() => {
    ms932Encoder.encode("\uEBF2");
  }, Error, "EncodingError U+EBF2");
  assertThrows(() => {
    ms932Encoder.encode("\uEBF3");
  }, Error, "EncodingError U+EBF3");
  assertThrows(() => {
    ms932Encoder.encode("\uEBF4");
  }, Error, "EncodingError U+EBF4");
  assertThrows(() => {
    ms932Encoder.encode("\uEBF5");
  }, Error, "EncodingError U+EBF5");
  assertThrows(() => {
    ms932Encoder.encode("\uEBF6");
  }, Error, "EncodingError U+EBF6");
  assertThrows(() => {
    ms932Encoder.encode("\uEBF7");
  }, Error, "EncodingError U+EBF7");
  assertThrows(() => {
    ms932Encoder.encode("\uEBF8");
  }, Error, "EncodingError U+EBF8");
  assertThrows(() => {
    ms932Encoder.encode("\uEBF9");
  }, Error, "EncodingError U+EBF9");
  assertThrows(() => {
    ms932Encoder.encode("\uEBFA");
  }, Error, "EncodingError U+EBFA");
  assertThrows(() => {
    ms932Encoder.encode("\uEBFB");
  }, Error, "EncodingError U+EBFB");
  assertThrows(() => {
    ms932Encoder.encode("\uEBFC");
  }, Error, "EncodingError U+EBFC");
  assertThrows(() => {
    ms932Encoder.encode("\uEBFD");
  }, Error, "EncodingError U+EBFD");
  assertThrows(() => {
    ms932Encoder.encode("\uEBFE");
  }, Error, "EncodingError U+EBFE");
  assertThrows(() => {
    ms932Encoder.encode("\uEBFF");
  }, Error, "EncodingError U+EBFF");
  assertThrows(() => {
    ms932Encoder.encode("\uEC00");
  }, Error, "EncodingError U+EC00");
  assertThrows(() => {
    ms932Encoder.encode("\uEC01");
  }, Error, "EncodingError U+EC01");
  assertThrows(() => {
    ms932Encoder.encode("\uEC02");
  }, Error, "EncodingError U+EC02");
  assertThrows(() => {
    ms932Encoder.encode("\uEC03");
  }, Error, "EncodingError U+EC03");
  assertThrows(() => {
    ms932Encoder.encode("\uEC04");
  }, Error, "EncodingError U+EC04");
  assertThrows(() => {
    ms932Encoder.encode("\uEC05");
  }, Error, "EncodingError U+EC05");
  assertThrows(() => {
    ms932Encoder.encode("\uEC06");
  }, Error, "EncodingError U+EC06");
  assertThrows(() => {
    ms932Encoder.encode("\uEC07");
  }, Error, "EncodingError U+EC07");
  assertThrows(() => {
    ms932Encoder.encode("\uEC08");
  }, Error, "EncodingError U+EC08");
  assertThrows(() => {
    ms932Encoder.encode("\uEC09");
  }, Error, "EncodingError U+EC09");
  assertThrows(() => {
    ms932Encoder.encode("\uEC0A");
  }, Error, "EncodingError U+EC0A");
  assertThrows(() => {
    ms932Encoder.encode("\uEC0B");
  }, Error, "EncodingError U+EC0B");
  assertThrows(() => {
    ms932Encoder.encode("\uEC0C");
  }, Error, "EncodingError U+EC0C");
  assertThrows(() => {
    ms932Encoder.encode("\uEC0D");
  }, Error, "EncodingError U+EC0D");
  assertThrows(() => {
    ms932Encoder.encode("\uEC0E");
  }, Error, "EncodingError U+EC0E");
  assertThrows(() => {
    ms932Encoder.encode("\uEC0F");
  }, Error, "EncodingError U+EC0F");
  assertThrows(() => {
    ms932Encoder.encode("\uEC10");
  }, Error, "EncodingError U+EC10");
  assertThrows(() => {
    ms932Encoder.encode("\uEC11");
  }, Error, "EncodingError U+EC11");
  assertThrows(() => {
    ms932Encoder.encode("\uEC12");
  }, Error, "EncodingError U+EC12");
  assertThrows(() => {
    ms932Encoder.encode("\uEC13");
  }, Error, "EncodingError U+EC13");
  assertThrows(() => {
    ms932Encoder.encode("\uEC14");
  }, Error, "EncodingError U+EC14");
  assertThrows(() => {
    ms932Encoder.encode("\uEC15");
  }, Error, "EncodingError U+EC15");
  assertThrows(() => {
    ms932Encoder.encode("\uEC16");
  }, Error, "EncodingError U+EC16");
  assertThrows(() => {
    ms932Encoder.encode("\uEC17");
  }, Error, "EncodingError U+EC17");
  assertThrows(() => {
    ms932Encoder.encode("\uEC18");
  }, Error, "EncodingError U+EC18");
  assertThrows(() => {
    ms932Encoder.encode("\uEC19");
  }, Error, "EncodingError U+EC19");
  assertThrows(() => {
    ms932Encoder.encode("\uEC1A");
  }, Error, "EncodingError U+EC1A");
  assertThrows(() => {
    ms932Encoder.encode("\uEC1B");
  }, Error, "EncodingError U+EC1B");
  assertThrows(() => {
    ms932Encoder.encode("\uEC1C");
  }, Error, "EncodingError U+EC1C");
  assertThrows(() => {
    ms932Encoder.encode("\uEC1D");
  }, Error, "EncodingError U+EC1D");
  assertThrows(() => {
    ms932Encoder.encode("\uEC1E");
  }, Error, "EncodingError U+EC1E");
  assertThrows(() => {
    ms932Encoder.encode("\uEC1F");
  }, Error, "EncodingError U+EC1F");
  assertThrows(() => {
    ms932Encoder.encode("\uEC20");
  }, Error, "EncodingError U+EC20");
  assertThrows(() => {
    ms932Encoder.encode("\uEC21");
  }, Error, "EncodingError U+EC21");
  assertThrows(() => {
    ms932Encoder.encode("\uEC22");
  }, Error, "EncodingError U+EC22");
  assertThrows(() => {
    ms932Encoder.encode("\uEC23");
  }, Error, "EncodingError U+EC23");
  assertThrows(() => {
    ms932Encoder.encode("\uEC24");
  }, Error, "EncodingError U+EC24");
  assertThrows(() => {
    ms932Encoder.encode("\uEC25");
  }, Error, "EncodingError U+EC25");
  assertThrows(() => {
    ms932Encoder.encode("\uEC26");
  }, Error, "EncodingError U+EC26");
  assertThrows(() => {
    ms932Encoder.encode("\uEC27");
  }, Error, "EncodingError U+EC27");
  assertThrows(() => {
    ms932Encoder.encode("\uEC28");
  }, Error, "EncodingError U+EC28");
  assertThrows(() => {
    ms932Encoder.encode("\uEC29");
  }, Error, "EncodingError U+EC29");
  assertThrows(() => {
    ms932Encoder.encode("\uEC2A");
  }, Error, "EncodingError U+EC2A");
  assertThrows(() => {
    ms932Encoder.encode("\uEC2B");
  }, Error, "EncodingError U+EC2B");
  assertThrows(() => {
    ms932Encoder.encode("\uEC2C");
  }, Error, "EncodingError U+EC2C");
  assertThrows(() => {
    ms932Encoder.encode("\uEC2D");
  }, Error, "EncodingError U+EC2D");
  assertThrows(() => {
    ms932Encoder.encode("\uEC2E");
  }, Error, "EncodingError U+EC2E");
  assertThrows(() => {
    ms932Encoder.encode("\uEC2F");
  }, Error, "EncodingError U+EC2F");
  assertThrows(() => {
    ms932Encoder.encode("\uEC30");
  }, Error, "EncodingError U+EC30");
  assertThrows(() => {
    ms932Encoder.encode("\uEC31");
  }, Error, "EncodingError U+EC31");
  assertThrows(() => {
    ms932Encoder.encode("\uEC32");
  }, Error, "EncodingError U+EC32");
  assertThrows(() => {
    ms932Encoder.encode("\uEC33");
  }, Error, "EncodingError U+EC33");
  assertThrows(() => {
    ms932Encoder.encode("\uEC34");
  }, Error, "EncodingError U+EC34");
  assertThrows(() => {
    ms932Encoder.encode("\uEC35");
  }, Error, "EncodingError U+EC35");
  assertThrows(() => {
    ms932Encoder.encode("\uEC36");
  }, Error, "EncodingError U+EC36");
  assertThrows(() => {
    ms932Encoder.encode("\uEC37");
  }, Error, "EncodingError U+EC37");
  assertThrows(() => {
    ms932Encoder.encode("\uEC38");
  }, Error, "EncodingError U+EC38");
  assertThrows(() => {
    ms932Encoder.encode("\uEC39");
  }, Error, "EncodingError U+EC39");
  assertThrows(() => {
    ms932Encoder.encode("\uEC3A");
  }, Error, "EncodingError U+EC3A");
  assertThrows(() => {
    ms932Encoder.encode("\uEC3B");
  }, Error, "EncodingError U+EC3B");
  assertThrows(() => {
    ms932Encoder.encode("\uEC3C");
  }, Error, "EncodingError U+EC3C");
  assertThrows(() => {
    ms932Encoder.encode("\uEC3D");
  }, Error, "EncodingError U+EC3D");
  assertThrows(() => {
    ms932Encoder.encode("\uEC3E");
  }, Error, "EncodingError U+EC3E");
  assertThrows(() => {
    ms932Encoder.encode("\uEC3F");
  }, Error, "EncodingError U+EC3F");
  assertThrows(() => {
    ms932Encoder.encode("\uEC40");
  }, Error, "EncodingError U+EC40");
  assertThrows(() => {
    ms932Encoder.encode("\uEC41");
  }, Error, "EncodingError U+EC41");
  assertThrows(() => {
    ms932Encoder.encode("\uEC42");
  }, Error, "EncodingError U+EC42");
  assertThrows(() => {
    ms932Encoder.encode("\uEC43");
  }, Error, "EncodingError U+EC43");
  assertThrows(() => {
    ms932Encoder.encode("\uEC44");
  }, Error, "EncodingError U+EC44");
  assertThrows(() => {
    ms932Encoder.encode("\uEC45");
  }, Error, "EncodingError U+EC45");
  assertThrows(() => {
    ms932Encoder.encode("\uEC46");
  }, Error, "EncodingError U+EC46");
  assertThrows(() => {
    ms932Encoder.encode("\uEC47");
  }, Error, "EncodingError U+EC47");
  assertThrows(() => {
    ms932Encoder.encode("\uEC48");
  }, Error, "EncodingError U+EC48");
  assertThrows(() => {
    ms932Encoder.encode("\uEC49");
  }, Error, "EncodingError U+EC49");
  assertThrows(() => {
    ms932Encoder.encode("\uEC4A");
  }, Error, "EncodingError U+EC4A");
  assertThrows(() => {
    ms932Encoder.encode("\uEC4B");
  }, Error, "EncodingError U+EC4B");
  assertThrows(() => {
    ms932Encoder.encode("\uEC4C");
  }, Error, "EncodingError U+EC4C");
  assertThrows(() => {
    ms932Encoder.encode("\uEC4D");
  }, Error, "EncodingError U+EC4D");
  assertThrows(() => {
    ms932Encoder.encode("\uEC4E");
  }, Error, "EncodingError U+EC4E");
  assertThrows(() => {
    ms932Encoder.encode("\uEC4F");
  }, Error, "EncodingError U+EC4F");
  assertThrows(() => {
    ms932Encoder.encode("\uEC50");
  }, Error, "EncodingError U+EC50");
  assertThrows(() => {
    ms932Encoder.encode("\uEC51");
  }, Error, "EncodingError U+EC51");
  assertThrows(() => {
    ms932Encoder.encode("\uEC52");
  }, Error, "EncodingError U+EC52");
  assertThrows(() => {
    ms932Encoder.encode("\uEC53");
  }, Error, "EncodingError U+EC53");
  assertThrows(() => {
    ms932Encoder.encode("\uEC54");
  }, Error, "EncodingError U+EC54");
  assertThrows(() => {
    ms932Encoder.encode("\uEC55");
  }, Error, "EncodingError U+EC55");
  assertThrows(() => {
    ms932Encoder.encode("\uEC56");
  }, Error, "EncodingError U+EC56");
  assertThrows(() => {
    ms932Encoder.encode("\uEC57");
  }, Error, "EncodingError U+EC57");
  assertThrows(() => {
    ms932Encoder.encode("\uEC58");
  }, Error, "EncodingError U+EC58");
  assertThrows(() => {
    ms932Encoder.encode("\uEC59");
  }, Error, "EncodingError U+EC59");
  assertThrows(() => {
    ms932Encoder.encode("\uEC5A");
  }, Error, "EncodingError U+EC5A");
  assertThrows(() => {
    ms932Encoder.encode("\uEC5B");
  }, Error, "EncodingError U+EC5B");
  assertThrows(() => {
    ms932Encoder.encode("\uEC5C");
  }, Error, "EncodingError U+EC5C");
  assertThrows(() => {
    ms932Encoder.encode("\uEC5D");
  }, Error, "EncodingError U+EC5D");
  assertThrows(() => {
    ms932Encoder.encode("\uEC5E");
  }, Error, "EncodingError U+EC5E");
  assertThrows(() => {
    ms932Encoder.encode("\uEC5F");
  }, Error, "EncodingError U+EC5F");
  assertThrows(() => {
    ms932Encoder.encode("\uEC60");
  }, Error, "EncodingError U+EC60");
  assertThrows(() => {
    ms932Encoder.encode("\uEC61");
  }, Error, "EncodingError U+EC61");
  assertThrows(() => {
    ms932Encoder.encode("\uEC62");
  }, Error, "EncodingError U+EC62");
  assertThrows(() => {
    ms932Encoder.encode("\uEC63");
  }, Error, "EncodingError U+EC63");
  assertThrows(() => {
    ms932Encoder.encode("\uEC64");
  }, Error, "EncodingError U+EC64");
  assertThrows(() => {
    ms932Encoder.encode("\uEC65");
  }, Error, "EncodingError U+EC65");
  assertThrows(() => {
    ms932Encoder.encode("\uEC66");
  }, Error, "EncodingError U+EC66");
  assertThrows(() => {
    ms932Encoder.encode("\uEC67");
  }, Error, "EncodingError U+EC67");
  assertThrows(() => {
    ms932Encoder.encode("\uEC68");
  }, Error, "EncodingError U+EC68");
  assertThrows(() => {
    ms932Encoder.encode("\uEC69");
  }, Error, "EncodingError U+EC69");
  assertThrows(() => {
    ms932Encoder.encode("\uEC6A");
  }, Error, "EncodingError U+EC6A");
  assertThrows(() => {
    ms932Encoder.encode("\uEC6B");
  }, Error, "EncodingError U+EC6B");
  assertThrows(() => {
    ms932Encoder.encode("\uEC6C");
  }, Error, "EncodingError U+EC6C");
  assertThrows(() => {
    ms932Encoder.encode("\uEC6D");
  }, Error, "EncodingError U+EC6D");
  assertThrows(() => {
    ms932Encoder.encode("\uEC6E");
  }, Error, "EncodingError U+EC6E");
  assertThrows(() => {
    ms932Encoder.encode("\uEC6F");
  }, Error, "EncodingError U+EC6F");
  assertThrows(() => {
    ms932Encoder.encode("\uEC70");
  }, Error, "EncodingError U+EC70");
  assertThrows(() => {
    ms932Encoder.encode("\uEC71");
  }, Error, "EncodingError U+EC71");
  assertThrows(() => {
    ms932Encoder.encode("\uEC72");
  }, Error, "EncodingError U+EC72");
  assertThrows(() => {
    ms932Encoder.encode("\uEC73");
  }, Error, "EncodingError U+EC73");
  assertThrows(() => {
    ms932Encoder.encode("\uEC74");
  }, Error, "EncodingError U+EC74");
  assertThrows(() => {
    ms932Encoder.encode("\uEC75");
  }, Error, "EncodingError U+EC75");
  assertThrows(() => {
    ms932Encoder.encode("\uEC76");
  }, Error, "EncodingError U+EC76");
  assertThrows(() => {
    ms932Encoder.encode("\uEC77");
  }, Error, "EncodingError U+EC77");
  assertThrows(() => {
    ms932Encoder.encode("\uEC78");
  }, Error, "EncodingError U+EC78");
  assertThrows(() => {
    ms932Encoder.encode("\uEC79");
  }, Error, "EncodingError U+EC79");
  assertThrows(() => {
    ms932Encoder.encode("\uEC7A");
  }, Error, "EncodingError U+EC7A");
  assertThrows(() => {
    ms932Encoder.encode("\uEC7B");
  }, Error, "EncodingError U+EC7B");
  assertThrows(() => {
    ms932Encoder.encode("\uEC7C");
  }, Error, "EncodingError U+EC7C");
  assertThrows(() => {
    ms932Encoder.encode("\uEC7D");
  }, Error, "EncodingError U+EC7D");
  assertThrows(() => {
    ms932Encoder.encode("\uEC7E");
  }, Error, "EncodingError U+EC7E");
  assertThrows(() => {
    ms932Encoder.encode("\uEC7F");
  }, Error, "EncodingError U+EC7F");
  assertThrows(() => {
    ms932Encoder.encode("\uEC80");
  }, Error, "EncodingError U+EC80");
  assertThrows(() => {
    ms932Encoder.encode("\uEC81");
  }, Error, "EncodingError U+EC81");
  assertThrows(() => {
    ms932Encoder.encode("\uEC82");
  }, Error, "EncodingError U+EC82");
  assertThrows(() => {
    ms932Encoder.encode("\uEC83");
  }, Error, "EncodingError U+EC83");
  assertThrows(() => {
    ms932Encoder.encode("\uEC84");
  }, Error, "EncodingError U+EC84");
  assertThrows(() => {
    ms932Encoder.encode("\uEC85");
  }, Error, "EncodingError U+EC85");
  assertThrows(() => {
    ms932Encoder.encode("\uEC86");
  }, Error, "EncodingError U+EC86");
  assertThrows(() => {
    ms932Encoder.encode("\uEC87");
  }, Error, "EncodingError U+EC87");
  assertThrows(() => {
    ms932Encoder.encode("\uEC88");
  }, Error, "EncodingError U+EC88");
  assertThrows(() => {
    ms932Encoder.encode("\uEC89");
  }, Error, "EncodingError U+EC89");
  assertThrows(() => {
    ms932Encoder.encode("\uEC8A");
  }, Error, "EncodingError U+EC8A");
  assertThrows(() => {
    ms932Encoder.encode("\uEC8B");
  }, Error, "EncodingError U+EC8B");
  assertThrows(() => {
    ms932Encoder.encode("\uEC8C");
  }, Error, "EncodingError U+EC8C");
  assertThrows(() => {
    ms932Encoder.encode("\uEC8D");
  }, Error, "EncodingError U+EC8D");
  assertThrows(() => {
    ms932Encoder.encode("\uEC8E");
  }, Error, "EncodingError U+EC8E");
  assertThrows(() => {
    ms932Encoder.encode("\uEC8F");
  }, Error, "EncodingError U+EC8F");
  assertThrows(() => {
    ms932Encoder.encode("\uEC90");
  }, Error, "EncodingError U+EC90");
  assertThrows(() => {
    ms932Encoder.encode("\uEC91");
  }, Error, "EncodingError U+EC91");
  assertThrows(() => {
    ms932Encoder.encode("\uEC92");
  }, Error, "EncodingError U+EC92");
  assertThrows(() => {
    ms932Encoder.encode("\uEC93");
  }, Error, "EncodingError U+EC93");
  assertThrows(() => {
    ms932Encoder.encode("\uEC94");
  }, Error, "EncodingError U+EC94");
  assertThrows(() => {
    ms932Encoder.encode("\uEC95");
  }, Error, "EncodingError U+EC95");
  assertThrows(() => {
    ms932Encoder.encode("\uEC96");
  }, Error, "EncodingError U+EC96");
  assertThrows(() => {
    ms932Encoder.encode("\uEC97");
  }, Error, "EncodingError U+EC97");
  assertThrows(() => {
    ms932Encoder.encode("\uEC98");
  }, Error, "EncodingError U+EC98");
  assertThrows(() => {
    ms932Encoder.encode("\uEC99");
  }, Error, "EncodingError U+EC99");
  assertThrows(() => {
    ms932Encoder.encode("\uEC9A");
  }, Error, "EncodingError U+EC9A");
  assertThrows(() => {
    ms932Encoder.encode("\uEC9B");
  }, Error, "EncodingError U+EC9B");
  assertThrows(() => {
    ms932Encoder.encode("\uEC9C");
  }, Error, "EncodingError U+EC9C");
  assertThrows(() => {
    ms932Encoder.encode("\uEC9D");
  }, Error, "EncodingError U+EC9D");
  assertThrows(() => {
    ms932Encoder.encode("\uEC9E");
  }, Error, "EncodingError U+EC9E");
  assertThrows(() => {
    ms932Encoder.encode("\uEC9F");
  }, Error, "EncodingError U+EC9F");
  assertThrows(() => {
    ms932Encoder.encode("\uECA0");
  }, Error, "EncodingError U+ECA0");
  assertThrows(() => {
    ms932Encoder.encode("\uECA1");
  }, Error, "EncodingError U+ECA1");
  assertThrows(() => {
    ms932Encoder.encode("\uECA2");
  }, Error, "EncodingError U+ECA2");
  assertThrows(() => {
    ms932Encoder.encode("\uECA3");
  }, Error, "EncodingError U+ECA3");
  assertThrows(() => {
    ms932Encoder.encode("\uECA4");
  }, Error, "EncodingError U+ECA4");
  assertThrows(() => {
    ms932Encoder.encode("\uECA5");
  }, Error, "EncodingError U+ECA5");
  assertThrows(() => {
    ms932Encoder.encode("\uECA6");
  }, Error, "EncodingError U+ECA6");
  assertThrows(() => {
    ms932Encoder.encode("\uECA7");
  }, Error, "EncodingError U+ECA7");
  assertThrows(() => {
    ms932Encoder.encode("\uECA8");
  }, Error, "EncodingError U+ECA8");
  assertThrows(() => {
    ms932Encoder.encode("\uECA9");
  }, Error, "EncodingError U+ECA9");
  assertThrows(() => {
    ms932Encoder.encode("\uECAA");
  }, Error, "EncodingError U+ECAA");
  assertThrows(() => {
    ms932Encoder.encode("\uECAB");
  }, Error, "EncodingError U+ECAB");
  assertThrows(() => {
    ms932Encoder.encode("\uECAC");
  }, Error, "EncodingError U+ECAC");
  assertThrows(() => {
    ms932Encoder.encode("\uECAD");
  }, Error, "EncodingError U+ECAD");
  assertThrows(() => {
    ms932Encoder.encode("\uECAE");
  }, Error, "EncodingError U+ECAE");
  assertThrows(() => {
    ms932Encoder.encode("\uECAF");
  }, Error, "EncodingError U+ECAF");
  assertThrows(() => {
    ms932Encoder.encode("\uECB0");
  }, Error, "EncodingError U+ECB0");
  assertThrows(() => {
    ms932Encoder.encode("\uECB1");
  }, Error, "EncodingError U+ECB1");
  assertThrows(() => {
    ms932Encoder.encode("\uECB2");
  }, Error, "EncodingError U+ECB2");
  assertThrows(() => {
    ms932Encoder.encode("\uECB3");
  }, Error, "EncodingError U+ECB3");
  assertThrows(() => {
    ms932Encoder.encode("\uECB4");
  }, Error, "EncodingError U+ECB4");
  assertThrows(() => {
    ms932Encoder.encode("\uECB5");
  }, Error, "EncodingError U+ECB5");
  assertThrows(() => {
    ms932Encoder.encode("\uECB6");
  }, Error, "EncodingError U+ECB6");
  assertThrows(() => {
    ms932Encoder.encode("\uECB7");
  }, Error, "EncodingError U+ECB7");
  assertThrows(() => {
    ms932Encoder.encode("\uECB8");
  }, Error, "EncodingError U+ECB8");
  assertThrows(() => {
    ms932Encoder.encode("\uECB9");
  }, Error, "EncodingError U+ECB9");
  assertThrows(() => {
    ms932Encoder.encode("\uECBA");
  }, Error, "EncodingError U+ECBA");
  assertThrows(() => {
    ms932Encoder.encode("\uECBB");
  }, Error, "EncodingError U+ECBB");
  assertThrows(() => {
    ms932Encoder.encode("\uECBC");
  }, Error, "EncodingError U+ECBC");
  assertThrows(() => {
    ms932Encoder.encode("\uECBD");
  }, Error, "EncodingError U+ECBD");
  assertThrows(() => {
    ms932Encoder.encode("\uECBE");
  }, Error, "EncodingError U+ECBE");
  assertThrows(() => {
    ms932Encoder.encode("\uECBF");
  }, Error, "EncodingError U+ECBF");
  assertThrows(() => {
    ms932Encoder.encode("\uECC0");
  }, Error, "EncodingError U+ECC0");
  assertThrows(() => {
    ms932Encoder.encode("\uECC1");
  }, Error, "EncodingError U+ECC1");
  assertThrows(() => {
    ms932Encoder.encode("\uECC2");
  }, Error, "EncodingError U+ECC2");
  assertThrows(() => {
    ms932Encoder.encode("\uECC3");
  }, Error, "EncodingError U+ECC3");
  assertThrows(() => {
    ms932Encoder.encode("\uECC4");
  }, Error, "EncodingError U+ECC4");
  assertThrows(() => {
    ms932Encoder.encode("\uECC5");
  }, Error, "EncodingError U+ECC5");
  assertThrows(() => {
    ms932Encoder.encode("\uECC6");
  }, Error, "EncodingError U+ECC6");
  assertThrows(() => {
    ms932Encoder.encode("\uECC7");
  }, Error, "EncodingError U+ECC7");
  assertThrows(() => {
    ms932Encoder.encode("\uECC8");
  }, Error, "EncodingError U+ECC8");
  assertThrows(() => {
    ms932Encoder.encode("\uECC9");
  }, Error, "EncodingError U+ECC9");
  assertThrows(() => {
    ms932Encoder.encode("\uECCA");
  }, Error, "EncodingError U+ECCA");
  assertThrows(() => {
    ms932Encoder.encode("\uECCB");
  }, Error, "EncodingError U+ECCB");
  assertThrows(() => {
    ms932Encoder.encode("\uECCC");
  }, Error, "EncodingError U+ECCC");
  assertThrows(() => {
    ms932Encoder.encode("\uECCD");
  }, Error, "EncodingError U+ECCD");
  assertThrows(() => {
    ms932Encoder.encode("\uECCE");
  }, Error, "EncodingError U+ECCE");
  assertThrows(() => {
    ms932Encoder.encode("\uECCF");
  }, Error, "EncodingError U+ECCF");
  assertThrows(() => {
    ms932Encoder.encode("\uECD0");
  }, Error, "EncodingError U+ECD0");
  assertThrows(() => {
    ms932Encoder.encode("\uECD1");
  }, Error, "EncodingError U+ECD1");
  assertThrows(() => {
    ms932Encoder.encode("\uECD2");
  }, Error, "EncodingError U+ECD2");
  assertThrows(() => {
    ms932Encoder.encode("\uECD3");
  }, Error, "EncodingError U+ECD3");
  assertThrows(() => {
    ms932Encoder.encode("\uECD4");
  }, Error, "EncodingError U+ECD4");
  assertThrows(() => {
    ms932Encoder.encode("\uECD5");
  }, Error, "EncodingError U+ECD5");
  assertThrows(() => {
    ms932Encoder.encode("\uECD6");
  }, Error, "EncodingError U+ECD6");
  assertThrows(() => {
    ms932Encoder.encode("\uECD7");
  }, Error, "EncodingError U+ECD7");
  assertThrows(() => {
    ms932Encoder.encode("\uECD8");
  }, Error, "EncodingError U+ECD8");
  assertThrows(() => {
    ms932Encoder.encode("\uECD9");
  }, Error, "EncodingError U+ECD9");
  assertThrows(() => {
    ms932Encoder.encode("\uECDA");
  }, Error, "EncodingError U+ECDA");
  assertThrows(() => {
    ms932Encoder.encode("\uECDB");
  }, Error, "EncodingError U+ECDB");
  assertThrows(() => {
    ms932Encoder.encode("\uECDC");
  }, Error, "EncodingError U+ECDC");
  assertThrows(() => {
    ms932Encoder.encode("\uECDD");
  }, Error, "EncodingError U+ECDD");
  assertThrows(() => {
    ms932Encoder.encode("\uECDE");
  }, Error, "EncodingError U+ECDE");
  assertThrows(() => {
    ms932Encoder.encode("\uECDF");
  }, Error, "EncodingError U+ECDF");
  assertThrows(() => {
    ms932Encoder.encode("\uECE0");
  }, Error, "EncodingError U+ECE0");
  assertThrows(() => {
    ms932Encoder.encode("\uECE1");
  }, Error, "EncodingError U+ECE1");
  assertThrows(() => {
    ms932Encoder.encode("\uECE2");
  }, Error, "EncodingError U+ECE2");
  assertThrows(() => {
    ms932Encoder.encode("\uECE3");
  }, Error, "EncodingError U+ECE3");
  assertThrows(() => {
    ms932Encoder.encode("\uECE4");
  }, Error, "EncodingError U+ECE4");
  assertThrows(() => {
    ms932Encoder.encode("\uECE5");
  }, Error, "EncodingError U+ECE5");
  assertThrows(() => {
    ms932Encoder.encode("\uECE6");
  }, Error, "EncodingError U+ECE6");
  assertThrows(() => {
    ms932Encoder.encode("\uECE7");
  }, Error, "EncodingError U+ECE7");
  assertThrows(() => {
    ms932Encoder.encode("\uECE8");
  }, Error, "EncodingError U+ECE8");
  assertThrows(() => {
    ms932Encoder.encode("\uECE9");
  }, Error, "EncodingError U+ECE9");
  assertThrows(() => {
    ms932Encoder.encode("\uECEA");
  }, Error, "EncodingError U+ECEA");
  assertThrows(() => {
    ms932Encoder.encode("\uECEB");
  }, Error, "EncodingError U+ECEB");
  assertThrows(() => {
    ms932Encoder.encode("\uECEC");
  }, Error, "EncodingError U+ECEC");
  assertThrows(() => {
    ms932Encoder.encode("\uECED");
  }, Error, "EncodingError U+ECED");
  assertThrows(() => {
    ms932Encoder.encode("\uECEE");
  }, Error, "EncodingError U+ECEE");
  assertThrows(() => {
    ms932Encoder.encode("\uECEF");
  }, Error, "EncodingError U+ECEF");
  assertThrows(() => {
    ms932Encoder.encode("\uECF0");
  }, Error, "EncodingError U+ECF0");
  assertThrows(() => {
    ms932Encoder.encode("\uECF1");
  }, Error, "EncodingError U+ECF1");
  assertThrows(() => {
    ms932Encoder.encode("\uECF2");
  }, Error, "EncodingError U+ECF2");
  assertThrows(() => {
    ms932Encoder.encode("\uECF3");
  }, Error, "EncodingError U+ECF3");
  assertThrows(() => {
    ms932Encoder.encode("\uECF4");
  }, Error, "EncodingError U+ECF4");
  assertThrows(() => {
    ms932Encoder.encode("\uECF5");
  }, Error, "EncodingError U+ECF5");
  assertThrows(() => {
    ms932Encoder.encode("\uECF6");
  }, Error, "EncodingError U+ECF6");
  assertThrows(() => {
    ms932Encoder.encode("\uECF7");
  }, Error, "EncodingError U+ECF7");
  assertThrows(() => {
    ms932Encoder.encode("\uECF8");
  }, Error, "EncodingError U+ECF8");
  assertThrows(() => {
    ms932Encoder.encode("\uECF9");
  }, Error, "EncodingError U+ECF9");
  assertThrows(() => {
    ms932Encoder.encode("\uECFA");
  }, Error, "EncodingError U+ECFA");
  assertThrows(() => {
    ms932Encoder.encode("\uECFB");
  }, Error, "EncodingError U+ECFB");
  assertThrows(() => {
    ms932Encoder.encode("\uECFC");
  }, Error, "EncodingError U+ECFC");
  assertThrows(() => {
    ms932Encoder.encode("\uECFD");
  }, Error, "EncodingError U+ECFD");
  assertThrows(() => {
    ms932Encoder.encode("\uECFE");
  }, Error, "EncodingError U+ECFE");
  assertThrows(() => {
    ms932Encoder.encode("\uECFF");
  }, Error, "EncodingError U+ECFF");
  assertThrows(() => {
    ms932Encoder.encode("\uED00");
  }, Error, "EncodingError U+ED00");
  assertThrows(() => {
    ms932Encoder.encode("\uED01");
  }, Error, "EncodingError U+ED01");
  assertThrows(() => {
    ms932Encoder.encode("\uED02");
  }, Error, "EncodingError U+ED02");
  assertThrows(() => {
    ms932Encoder.encode("\uED03");
  }, Error, "EncodingError U+ED03");
  assertThrows(() => {
    ms932Encoder.encode("\uED04");
  }, Error, "EncodingError U+ED04");
  assertThrows(() => {
    ms932Encoder.encode("\uED05");
  }, Error, "EncodingError U+ED05");
  assertThrows(() => {
    ms932Encoder.encode("\uED06");
  }, Error, "EncodingError U+ED06");
  assertThrows(() => {
    ms932Encoder.encode("\uED07");
  }, Error, "EncodingError U+ED07");
  assertThrows(() => {
    ms932Encoder.encode("\uED08");
  }, Error, "EncodingError U+ED08");
  assertThrows(() => {
    ms932Encoder.encode("\uED09");
  }, Error, "EncodingError U+ED09");
  assertThrows(() => {
    ms932Encoder.encode("\uED0A");
  }, Error, "EncodingError U+ED0A");
  assertThrows(() => {
    ms932Encoder.encode("\uED0B");
  }, Error, "EncodingError U+ED0B");
  assertThrows(() => {
    ms932Encoder.encode("\uED0C");
  }, Error, "EncodingError U+ED0C");
  assertThrows(() => {
    ms932Encoder.encode("\uED0D");
  }, Error, "EncodingError U+ED0D");
  assertThrows(() => {
    ms932Encoder.encode("\uED0E");
  }, Error, "EncodingError U+ED0E");
  assertThrows(() => {
    ms932Encoder.encode("\uED0F");
  }, Error, "EncodingError U+ED0F");
  assertThrows(() => {
    ms932Encoder.encode("\uED10");
  }, Error, "EncodingError U+ED10");
  assertThrows(() => {
    ms932Encoder.encode("\uED11");
  }, Error, "EncodingError U+ED11");
  assertThrows(() => {
    ms932Encoder.encode("\uED12");
  }, Error, "EncodingError U+ED12");
  assertThrows(() => {
    ms932Encoder.encode("\uED13");
  }, Error, "EncodingError U+ED13");
  assertThrows(() => {
    ms932Encoder.encode("\uED14");
  }, Error, "EncodingError U+ED14");
  assertThrows(() => {
    ms932Encoder.encode("\uED15");
  }, Error, "EncodingError U+ED15");
  assertThrows(() => {
    ms932Encoder.encode("\uED16");
  }, Error, "EncodingError U+ED16");
  assertThrows(() => {
    ms932Encoder.encode("\uED17");
  }, Error, "EncodingError U+ED17");
  assertThrows(() => {
    ms932Encoder.encode("\uED18");
  }, Error, "EncodingError U+ED18");
  assertThrows(() => {
    ms932Encoder.encode("\uED19");
  }, Error, "EncodingError U+ED19");
  assertThrows(() => {
    ms932Encoder.encode("\uED1A");
  }, Error, "EncodingError U+ED1A");
  assertThrows(() => {
    ms932Encoder.encode("\uED1B");
  }, Error, "EncodingError U+ED1B");
  assertThrows(() => {
    ms932Encoder.encode("\uED1C");
  }, Error, "EncodingError U+ED1C");
  assertThrows(() => {
    ms932Encoder.encode("\uED1D");
  }, Error, "EncodingError U+ED1D");
  assertThrows(() => {
    ms932Encoder.encode("\uED1E");
  }, Error, "EncodingError U+ED1E");
  assertThrows(() => {
    ms932Encoder.encode("\uED1F");
  }, Error, "EncodingError U+ED1F");
  assertThrows(() => {
    ms932Encoder.encode("\uED20");
  }, Error, "EncodingError U+ED20");
  assertThrows(() => {
    ms932Encoder.encode("\uED21");
  }, Error, "EncodingError U+ED21");
  assertThrows(() => {
    ms932Encoder.encode("\uED22");
  }, Error, "EncodingError U+ED22");
  assertThrows(() => {
    ms932Encoder.encode("\uED23");
  }, Error, "EncodingError U+ED23");
  assertThrows(() => {
    ms932Encoder.encode("\uED24");
  }, Error, "EncodingError U+ED24");
  assertThrows(() => {
    ms932Encoder.encode("\uED25");
  }, Error, "EncodingError U+ED25");
  assertThrows(() => {
    ms932Encoder.encode("\uED26");
  }, Error, "EncodingError U+ED26");
  assertThrows(() => {
    ms932Encoder.encode("\uED27");
  }, Error, "EncodingError U+ED27");
  assertThrows(() => {
    ms932Encoder.encode("\uED28");
  }, Error, "EncodingError U+ED28");
  assertThrows(() => {
    ms932Encoder.encode("\uED29");
  }, Error, "EncodingError U+ED29");
  assertThrows(() => {
    ms932Encoder.encode("\uED2A");
  }, Error, "EncodingError U+ED2A");
  assertThrows(() => {
    ms932Encoder.encode("\uED2B");
  }, Error, "EncodingError U+ED2B");
  assertThrows(() => {
    ms932Encoder.encode("\uED2C");
  }, Error, "EncodingError U+ED2C");
  assertThrows(() => {
    ms932Encoder.encode("\uED2D");
  }, Error, "EncodingError U+ED2D");
  assertThrows(() => {
    ms932Encoder.encode("\uED2E");
  }, Error, "EncodingError U+ED2E");
  assertThrows(() => {
    ms932Encoder.encode("\uED2F");
  }, Error, "EncodingError U+ED2F");
  assertThrows(() => {
    ms932Encoder.encode("\uED30");
  }, Error, "EncodingError U+ED30");
  assertThrows(() => {
    ms932Encoder.encode("\uED31");
  }, Error, "EncodingError U+ED31");
  assertThrows(() => {
    ms932Encoder.encode("\uED32");
  }, Error, "EncodingError U+ED32");
  assertThrows(() => {
    ms932Encoder.encode("\uED33");
  }, Error, "EncodingError U+ED33");
  assertThrows(() => {
    ms932Encoder.encode("\uED34");
  }, Error, "EncodingError U+ED34");
  assertThrows(() => {
    ms932Encoder.encode("\uED35");
  }, Error, "EncodingError U+ED35");
  assertThrows(() => {
    ms932Encoder.encode("\uED36");
  }, Error, "EncodingError U+ED36");
  assertThrows(() => {
    ms932Encoder.encode("\uED37");
  }, Error, "EncodingError U+ED37");
  assertThrows(() => {
    ms932Encoder.encode("\uED38");
  }, Error, "EncodingError U+ED38");
  assertThrows(() => {
    ms932Encoder.encode("\uED39");
  }, Error, "EncodingError U+ED39");
  assertThrows(() => {
    ms932Encoder.encode("\uED3A");
  }, Error, "EncodingError U+ED3A");
  assertThrows(() => {
    ms932Encoder.encode("\uED3B");
  }, Error, "EncodingError U+ED3B");
  assertThrows(() => {
    ms932Encoder.encode("\uED3C");
  }, Error, "EncodingError U+ED3C");
  assertThrows(() => {
    ms932Encoder.encode("\uED3D");
  }, Error, "EncodingError U+ED3D");
  assertThrows(() => {
    ms932Encoder.encode("\uED3E");
  }, Error, "EncodingError U+ED3E");
  assertThrows(() => {
    ms932Encoder.encode("\uED3F");
  }, Error, "EncodingError U+ED3F");
  assertThrows(() => {
    ms932Encoder.encode("\uED40");
  }, Error, "EncodingError U+ED40");
  assertThrows(() => {
    ms932Encoder.encode("\uED41");
  }, Error, "EncodingError U+ED41");
  assertThrows(() => {
    ms932Encoder.encode("\uED42");
  }, Error, "EncodingError U+ED42");
  assertThrows(() => {
    ms932Encoder.encode("\uED43");
  }, Error, "EncodingError U+ED43");
  assertThrows(() => {
    ms932Encoder.encode("\uED44");
  }, Error, "EncodingError U+ED44");
  assertThrows(() => {
    ms932Encoder.encode("\uED45");
  }, Error, "EncodingError U+ED45");
  assertThrows(() => {
    ms932Encoder.encode("\uED46");
  }, Error, "EncodingError U+ED46");
  assertThrows(() => {
    ms932Encoder.encode("\uED47");
  }, Error, "EncodingError U+ED47");
  assertThrows(() => {
    ms932Encoder.encode("\uED48");
  }, Error, "EncodingError U+ED48");
  assertThrows(() => {
    ms932Encoder.encode("\uED49");
  }, Error, "EncodingError U+ED49");
  assertThrows(() => {
    ms932Encoder.encode("\uED4A");
  }, Error, "EncodingError U+ED4A");
  assertThrows(() => {
    ms932Encoder.encode("\uED4B");
  }, Error, "EncodingError U+ED4B");
  assertThrows(() => {
    ms932Encoder.encode("\uED4C");
  }, Error, "EncodingError U+ED4C");
  assertThrows(() => {
    ms932Encoder.encode("\uED4D");
  }, Error, "EncodingError U+ED4D");
  assertThrows(() => {
    ms932Encoder.encode("\uED4E");
  }, Error, "EncodingError U+ED4E");
  assertThrows(() => {
    ms932Encoder.encode("\uED4F");
  }, Error, "EncodingError U+ED4F");
  assertThrows(() => {
    ms932Encoder.encode("\uED50");
  }, Error, "EncodingError U+ED50");
  assertThrows(() => {
    ms932Encoder.encode("\uED51");
  }, Error, "EncodingError U+ED51");
  assertThrows(() => {
    ms932Encoder.encode("\uED52");
  }, Error, "EncodingError U+ED52");
  assertThrows(() => {
    ms932Encoder.encode("\uED53");
  }, Error, "EncodingError U+ED53");
  assertThrows(() => {
    ms932Encoder.encode("\uED54");
  }, Error, "EncodingError U+ED54");
  assertThrows(() => {
    ms932Encoder.encode("\uED55");
  }, Error, "EncodingError U+ED55");
  assertThrows(() => {
    ms932Encoder.encode("\uED56");
  }, Error, "EncodingError U+ED56");
  assertThrows(() => {
    ms932Encoder.encode("\uED57");
  }, Error, "EncodingError U+ED57");
  assertThrows(() => {
    ms932Encoder.encode("\uED58");
  }, Error, "EncodingError U+ED58");
  assertThrows(() => {
    ms932Encoder.encode("\uED59");
  }, Error, "EncodingError U+ED59");
  assertThrows(() => {
    ms932Encoder.encode("\uED5A");
  }, Error, "EncodingError U+ED5A");
  assertThrows(() => {
    ms932Encoder.encode("\uED5B");
  }, Error, "EncodingError U+ED5B");
  assertThrows(() => {
    ms932Encoder.encode("\uED5C");
  }, Error, "EncodingError U+ED5C");
  assertThrows(() => {
    ms932Encoder.encode("\uED5D");
  }, Error, "EncodingError U+ED5D");
  assertThrows(() => {
    ms932Encoder.encode("\uED5E");
  }, Error, "EncodingError U+ED5E");
  assertThrows(() => {
    ms932Encoder.encode("\uED5F");
  }, Error, "EncodingError U+ED5F");
  assertThrows(() => {
    ms932Encoder.encode("\uED60");
  }, Error, "EncodingError U+ED60");
  assertThrows(() => {
    ms932Encoder.encode("\uED61");
  }, Error, "EncodingError U+ED61");
  assertThrows(() => {
    ms932Encoder.encode("\uED62");
  }, Error, "EncodingError U+ED62");
  assertThrows(() => {
    ms932Encoder.encode("\uED63");
  }, Error, "EncodingError U+ED63");
  assertThrows(() => {
    ms932Encoder.encode("\uED64");
  }, Error, "EncodingError U+ED64");
  assertThrows(() => {
    ms932Encoder.encode("\uED65");
  }, Error, "EncodingError U+ED65");
  assertThrows(() => {
    ms932Encoder.encode("\uED66");
  }, Error, "EncodingError U+ED66");
  assertThrows(() => {
    ms932Encoder.encode("\uED67");
  }, Error, "EncodingError U+ED67");
  assertThrows(() => {
    ms932Encoder.encode("\uED68");
  }, Error, "EncodingError U+ED68");
  assertThrows(() => {
    ms932Encoder.encode("\uED69");
  }, Error, "EncodingError U+ED69");
  assertThrows(() => {
    ms932Encoder.encode("\uED6A");
  }, Error, "EncodingError U+ED6A");
  assertThrows(() => {
    ms932Encoder.encode("\uED6B");
  }, Error, "EncodingError U+ED6B");
  assertThrows(() => {
    ms932Encoder.encode("\uED6C");
  }, Error, "EncodingError U+ED6C");
  assertThrows(() => {
    ms932Encoder.encode("\uED6D");
  }, Error, "EncodingError U+ED6D");
  assertThrows(() => {
    ms932Encoder.encode("\uED6E");
  }, Error, "EncodingError U+ED6E");
  assertThrows(() => {
    ms932Encoder.encode("\uED6F");
  }, Error, "EncodingError U+ED6F");
  assertThrows(() => {
    ms932Encoder.encode("\uED70");
  }, Error, "EncodingError U+ED70");
  assertThrows(() => {
    ms932Encoder.encode("\uED71");
  }, Error, "EncodingError U+ED71");
  assertThrows(() => {
    ms932Encoder.encode("\uED72");
  }, Error, "EncodingError U+ED72");
  assertThrows(() => {
    ms932Encoder.encode("\uED73");
  }, Error, "EncodingError U+ED73");
  assertThrows(() => {
    ms932Encoder.encode("\uED74");
  }, Error, "EncodingError U+ED74");
  assertThrows(() => {
    ms932Encoder.encode("\uED75");
  }, Error, "EncodingError U+ED75");
  assertThrows(() => {
    ms932Encoder.encode("\uED76");
  }, Error, "EncodingError U+ED76");
  assertThrows(() => {
    ms932Encoder.encode("\uED77");
  }, Error, "EncodingError U+ED77");
  assertThrows(() => {
    ms932Encoder.encode("\uED78");
  }, Error, "EncodingError U+ED78");
  assertThrows(() => {
    ms932Encoder.encode("\uED79");
  }, Error, "EncodingError U+ED79");
  assertThrows(() => {
    ms932Encoder.encode("\uED7A");
  }, Error, "EncodingError U+ED7A");
  assertThrows(() => {
    ms932Encoder.encode("\uED7B");
  }, Error, "EncodingError U+ED7B");
  assertThrows(() => {
    ms932Encoder.encode("\uED7C");
  }, Error, "EncodingError U+ED7C");
  assertThrows(() => {
    ms932Encoder.encode("\uED7D");
  }, Error, "EncodingError U+ED7D");
  assertThrows(() => {
    ms932Encoder.encode("\uED7E");
  }, Error, "EncodingError U+ED7E");
  assertThrows(() => {
    ms932Encoder.encode("\uED7F");
  }, Error, "EncodingError U+ED7F");
  assertThrows(() => {
    ms932Encoder.encode("\uED80");
  }, Error, "EncodingError U+ED80");
  assertThrows(() => {
    ms932Encoder.encode("\uED81");
  }, Error, "EncodingError U+ED81");
  assertThrows(() => {
    ms932Encoder.encode("\uED82");
  }, Error, "EncodingError U+ED82");
  assertThrows(() => {
    ms932Encoder.encode("\uED83");
  }, Error, "EncodingError U+ED83");
  assertThrows(() => {
    ms932Encoder.encode("\uED84");
  }, Error, "EncodingError U+ED84");
  assertThrows(() => {
    ms932Encoder.encode("\uED85");
  }, Error, "EncodingError U+ED85");
  assertThrows(() => {
    ms932Encoder.encode("\uED86");
  }, Error, "EncodingError U+ED86");
  assertThrows(() => {
    ms932Encoder.encode("\uED87");
  }, Error, "EncodingError U+ED87");
  assertThrows(() => {
    ms932Encoder.encode("\uED88");
  }, Error, "EncodingError U+ED88");
  assertThrows(() => {
    ms932Encoder.encode("\uED89");
  }, Error, "EncodingError U+ED89");
  assertThrows(() => {
    ms932Encoder.encode("\uED8A");
  }, Error, "EncodingError U+ED8A");
  assertThrows(() => {
    ms932Encoder.encode("\uED8B");
  }, Error, "EncodingError U+ED8B");
  assertThrows(() => {
    ms932Encoder.encode("\uED8C");
  }, Error, "EncodingError U+ED8C");
  assertThrows(() => {
    ms932Encoder.encode("\uED8D");
  }, Error, "EncodingError U+ED8D");
  assertThrows(() => {
    ms932Encoder.encode("\uED8E");
  }, Error, "EncodingError U+ED8E");
  assertThrows(() => {
    ms932Encoder.encode("\uED8F");
  }, Error, "EncodingError U+ED8F");
  assertThrows(() => {
    ms932Encoder.encode("\uED90");
  }, Error, "EncodingError U+ED90");
  assertThrows(() => {
    ms932Encoder.encode("\uED91");
  }, Error, "EncodingError U+ED91");
  assertThrows(() => {
    ms932Encoder.encode("\uED92");
  }, Error, "EncodingError U+ED92");
  assertThrows(() => {
    ms932Encoder.encode("\uED93");
  }, Error, "EncodingError U+ED93");
  assertThrows(() => {
    ms932Encoder.encode("\uED94");
  }, Error, "EncodingError U+ED94");
  assertThrows(() => {
    ms932Encoder.encode("\uED95");
  }, Error, "EncodingError U+ED95");
  assertThrows(() => {
    ms932Encoder.encode("\uED96");
  }, Error, "EncodingError U+ED96");
  assertThrows(() => {
    ms932Encoder.encode("\uED97");
  }, Error, "EncodingError U+ED97");
  assertThrows(() => {
    ms932Encoder.encode("\uED98");
  }, Error, "EncodingError U+ED98");
  assertThrows(() => {
    ms932Encoder.encode("\uED99");
  }, Error, "EncodingError U+ED99");
  assertThrows(() => {
    ms932Encoder.encode("\uED9A");
  }, Error, "EncodingError U+ED9A");
  assertThrows(() => {
    ms932Encoder.encode("\uED9B");
  }, Error, "EncodingError U+ED9B");
  assertThrows(() => {
    ms932Encoder.encode("\uED9C");
  }, Error, "EncodingError U+ED9C");
  assertThrows(() => {
    ms932Encoder.encode("\uED9D");
  }, Error, "EncodingError U+ED9D");
  assertThrows(() => {
    ms932Encoder.encode("\uED9E");
  }, Error, "EncodingError U+ED9E");
  assertThrows(() => {
    ms932Encoder.encode("\uED9F");
  }, Error, "EncodingError U+ED9F");
  assertThrows(() => {
    ms932Encoder.encode("\uEDA0");
  }, Error, "EncodingError U+EDA0");
  assertThrows(() => {
    ms932Encoder.encode("\uEDA1");
  }, Error, "EncodingError U+EDA1");
  assertThrows(() => {
    ms932Encoder.encode("\uEDA2");
  }, Error, "EncodingError U+EDA2");
  assertThrows(() => {
    ms932Encoder.encode("\uEDA3");
  }, Error, "EncodingError U+EDA3");
  assertThrows(() => {
    ms932Encoder.encode("\uEDA4");
  }, Error, "EncodingError U+EDA4");
  assertThrows(() => {
    ms932Encoder.encode("\uEDA5");
  }, Error, "EncodingError U+EDA5");
  assertThrows(() => {
    ms932Encoder.encode("\uEDA6");
  }, Error, "EncodingError U+EDA6");
  assertThrows(() => {
    ms932Encoder.encode("\uEDA7");
  }, Error, "EncodingError U+EDA7");
  assertThrows(() => {
    ms932Encoder.encode("\uEDA8");
  }, Error, "EncodingError U+EDA8");
  assertThrows(() => {
    ms932Encoder.encode("\uEDA9");
  }, Error, "EncodingError U+EDA9");
  assertThrows(() => {
    ms932Encoder.encode("\uEDAA");
  }, Error, "EncodingError U+EDAA");
  assertThrows(() => {
    ms932Encoder.encode("\uEDAB");
  }, Error, "EncodingError U+EDAB");
  assertThrows(() => {
    ms932Encoder.encode("\uEDAC");
  }, Error, "EncodingError U+EDAC");
  assertThrows(() => {
    ms932Encoder.encode("\uEDAD");
  }, Error, "EncodingError U+EDAD");
  assertThrows(() => {
    ms932Encoder.encode("\uEDAE");
  }, Error, "EncodingError U+EDAE");
  assertThrows(() => {
    ms932Encoder.encode("\uEDAF");
  }, Error, "EncodingError U+EDAF");
  assertThrows(() => {
    ms932Encoder.encode("\uEDB0");
  }, Error, "EncodingError U+EDB0");
  assertThrows(() => {
    ms932Encoder.encode("\uEDB1");
  }, Error, "EncodingError U+EDB1");
  assertThrows(() => {
    ms932Encoder.encode("\uEDB2");
  }, Error, "EncodingError U+EDB2");
  assertThrows(() => {
    ms932Encoder.encode("\uEDB3");
  }, Error, "EncodingError U+EDB3");
  assertThrows(() => {
    ms932Encoder.encode("\uEDB4");
  }, Error, "EncodingError U+EDB4");
  assertThrows(() => {
    ms932Encoder.encode("\uEDB5");
  }, Error, "EncodingError U+EDB5");
  assertThrows(() => {
    ms932Encoder.encode("\uEDB6");
  }, Error, "EncodingError U+EDB6");
  assertThrows(() => {
    ms932Encoder.encode("\uEDB7");
  }, Error, "EncodingError U+EDB7");
  assertThrows(() => {
    ms932Encoder.encode("\uEDB8");
  }, Error, "EncodingError U+EDB8");
  assertThrows(() => {
    ms932Encoder.encode("\uEDB9");
  }, Error, "EncodingError U+EDB9");
  assertThrows(() => {
    ms932Encoder.encode("\uEDBA");
  }, Error, "EncodingError U+EDBA");
  assertThrows(() => {
    ms932Encoder.encode("\uEDBB");
  }, Error, "EncodingError U+EDBB");
  assertThrows(() => {
    ms932Encoder.encode("\uEDBC");
  }, Error, "EncodingError U+EDBC");
  assertThrows(() => {
    ms932Encoder.encode("\uEDBD");
  }, Error, "EncodingError U+EDBD");
  assertThrows(() => {
    ms932Encoder.encode("\uEDBE");
  }, Error, "EncodingError U+EDBE");
  assertThrows(() => {
    ms932Encoder.encode("\uEDBF");
  }, Error, "EncodingError U+EDBF");
  assertThrows(() => {
    ms932Encoder.encode("\uEDC0");
  }, Error, "EncodingError U+EDC0");
  assertThrows(() => {
    ms932Encoder.encode("\uEDC1");
  }, Error, "EncodingError U+EDC1");
  assertThrows(() => {
    ms932Encoder.encode("\uEDC2");
  }, Error, "EncodingError U+EDC2");
  assertThrows(() => {
    ms932Encoder.encode("\uEDC3");
  }, Error, "EncodingError U+EDC3");
  assertThrows(() => {
    ms932Encoder.encode("\uEDC4");
  }, Error, "EncodingError U+EDC4");
  assertThrows(() => {
    ms932Encoder.encode("\uEDC5");
  }, Error, "EncodingError U+EDC5");
  assertThrows(() => {
    ms932Encoder.encode("\uEDC6");
  }, Error, "EncodingError U+EDC6");
  assertThrows(() => {
    ms932Encoder.encode("\uEDC7");
  }, Error, "EncodingError U+EDC7");
  assertThrows(() => {
    ms932Encoder.encode("\uEDC8");
  }, Error, "EncodingError U+EDC8");
  assertThrows(() => {
    ms932Encoder.encode("\uEDC9");
  }, Error, "EncodingError U+EDC9");
  assertThrows(() => {
    ms932Encoder.encode("\uEDCA");
  }, Error, "EncodingError U+EDCA");
  assertThrows(() => {
    ms932Encoder.encode("\uEDCB");
  }, Error, "EncodingError U+EDCB");
  assertThrows(() => {
    ms932Encoder.encode("\uEDCC");
  }, Error, "EncodingError U+EDCC");
  assertThrows(() => {
    ms932Encoder.encode("\uEDCD");
  }, Error, "EncodingError U+EDCD");
  assertThrows(() => {
    ms932Encoder.encode("\uEDCE");
  }, Error, "EncodingError U+EDCE");
  assertThrows(() => {
    ms932Encoder.encode("\uEDCF");
  }, Error, "EncodingError U+EDCF");
  assertThrows(() => {
    ms932Encoder.encode("\uEDD0");
  }, Error, "EncodingError U+EDD0");
  assertThrows(() => {
    ms932Encoder.encode("\uEDD1");
  }, Error, "EncodingError U+EDD1");
  assertThrows(() => {
    ms932Encoder.encode("\uEDD2");
  }, Error, "EncodingError U+EDD2");
  assertThrows(() => {
    ms932Encoder.encode("\uEDD3");
  }, Error, "EncodingError U+EDD3");
  assertThrows(() => {
    ms932Encoder.encode("\uEDD4");
  }, Error, "EncodingError U+EDD4");
  assertThrows(() => {
    ms932Encoder.encode("\uEDD5");
  }, Error, "EncodingError U+EDD5");
  assertThrows(() => {
    ms932Encoder.encode("\uEDD6");
  }, Error, "EncodingError U+EDD6");
  assertThrows(() => {
    ms932Encoder.encode("\uEDD7");
  }, Error, "EncodingError U+EDD7");
  assertThrows(() => {
    ms932Encoder.encode("\uEDD8");
  }, Error, "EncodingError U+EDD8");
  assertThrows(() => {
    ms932Encoder.encode("\uEDD9");
  }, Error, "EncodingError U+EDD9");
  assertThrows(() => {
    ms932Encoder.encode("\uEDDA");
  }, Error, "EncodingError U+EDDA");
  assertThrows(() => {
    ms932Encoder.encode("\uEDDB");
  }, Error, "EncodingError U+EDDB");
  assertThrows(() => {
    ms932Encoder.encode("\uEDDC");
  }, Error, "EncodingError U+EDDC");
  assertThrows(() => {
    ms932Encoder.encode("\uEDDD");
  }, Error, "EncodingError U+EDDD");
  assertThrows(() => {
    ms932Encoder.encode("\uEDDE");
  }, Error, "EncodingError U+EDDE");
  assertThrows(() => {
    ms932Encoder.encode("\uEDDF");
  }, Error, "EncodingError U+EDDF");
  assertThrows(() => {
    ms932Encoder.encode("\uEDE0");
  }, Error, "EncodingError U+EDE0");
  assertThrows(() => {
    ms932Encoder.encode("\uEDE1");
  }, Error, "EncodingError U+EDE1");
  assertThrows(() => {
    ms932Encoder.encode("\uEDE2");
  }, Error, "EncodingError U+EDE2");
  assertThrows(() => {
    ms932Encoder.encode("\uEDE3");
  }, Error, "EncodingError U+EDE3");
  assertThrows(() => {
    ms932Encoder.encode("\uEDE4");
  }, Error, "EncodingError U+EDE4");
  assertThrows(() => {
    ms932Encoder.encode("\uEDE5");
  }, Error, "EncodingError U+EDE5");
  assertThrows(() => {
    ms932Encoder.encode("\uEDE6");
  }, Error, "EncodingError U+EDE6");
  assertThrows(() => {
    ms932Encoder.encode("\uEDE7");
  }, Error, "EncodingError U+EDE7");
  assertThrows(() => {
    ms932Encoder.encode("\uEDE8");
  }, Error, "EncodingError U+EDE8");
  assertThrows(() => {
    ms932Encoder.encode("\uEDE9");
  }, Error, "EncodingError U+EDE9");
  assertThrows(() => {
    ms932Encoder.encode("\uEDEA");
  }, Error, "EncodingError U+EDEA");
  assertThrows(() => {
    ms932Encoder.encode("\uEDEB");
  }, Error, "EncodingError U+EDEB");
  assertThrows(() => {
    ms932Encoder.encode("\uEDEC");
  }, Error, "EncodingError U+EDEC");
  assertThrows(() => {
    ms932Encoder.encode("\uEDED");
  }, Error, "EncodingError U+EDED");
  assertThrows(() => {
    ms932Encoder.encode("\uEDEE");
  }, Error, "EncodingError U+EDEE");
  assertThrows(() => {
    ms932Encoder.encode("\uEDEF");
  }, Error, "EncodingError U+EDEF");
  assertThrows(() => {
    ms932Encoder.encode("\uEDF0");
  }, Error, "EncodingError U+EDF0");
  assertThrows(() => {
    ms932Encoder.encode("\uEDF1");
  }, Error, "EncodingError U+EDF1");
  assertThrows(() => {
    ms932Encoder.encode("\uEDF2");
  }, Error, "EncodingError U+EDF2");
  assertThrows(() => {
    ms932Encoder.encode("\uEDF3");
  }, Error, "EncodingError U+EDF3");
  assertThrows(() => {
    ms932Encoder.encode("\uEDF4");
  }, Error, "EncodingError U+EDF4");
  assertThrows(() => {
    ms932Encoder.encode("\uEDF5");
  }, Error, "EncodingError U+EDF5");
  assertThrows(() => {
    ms932Encoder.encode("\uEDF6");
  }, Error, "EncodingError U+EDF6");
  assertThrows(() => {
    ms932Encoder.encode("\uEDF7");
  }, Error, "EncodingError U+EDF7");
  assertThrows(() => {
    ms932Encoder.encode("\uEDF8");
  }, Error, "EncodingError U+EDF8");
  assertThrows(() => {
    ms932Encoder.encode("\uEDF9");
  }, Error, "EncodingError U+EDF9");
  assertThrows(() => {
    ms932Encoder.encode("\uEDFA");
  }, Error, "EncodingError U+EDFA");
  assertThrows(() => {
    ms932Encoder.encode("\uEDFB");
  }, Error, "EncodingError U+EDFB");
  assertThrows(() => {
    ms932Encoder.encode("\uEDFC");
  }, Error, "EncodingError U+EDFC");
  assertThrows(() => {
    ms932Encoder.encode("\uEDFD");
  }, Error, "EncodingError U+EDFD");
  assertThrows(() => {
    ms932Encoder.encode("\uEDFE");
  }, Error, "EncodingError U+EDFE");
  assertThrows(() => {
    ms932Encoder.encode("\uEDFF");
  }, Error, "EncodingError U+EDFF");
  assertThrows(() => {
    ms932Encoder.encode("\uEE00");
  }, Error, "EncodingError U+EE00");
  assertThrows(() => {
    ms932Encoder.encode("\uEE01");
  }, Error, "EncodingError U+EE01");
  assertThrows(() => {
    ms932Encoder.encode("\uEE02");
  }, Error, "EncodingError U+EE02");
  assertThrows(() => {
    ms932Encoder.encode("\uEE03");
  }, Error, "EncodingError U+EE03");
  assertThrows(() => {
    ms932Encoder.encode("\uEE04");
  }, Error, "EncodingError U+EE04");
  assertThrows(() => {
    ms932Encoder.encode("\uEE05");
  }, Error, "EncodingError U+EE05");
  assertThrows(() => {
    ms932Encoder.encode("\uEE06");
  }, Error, "EncodingError U+EE06");
  assertThrows(() => {
    ms932Encoder.encode("\uEE07");
  }, Error, "EncodingError U+EE07");
  assertThrows(() => {
    ms932Encoder.encode("\uEE08");
  }, Error, "EncodingError U+EE08");
  assertThrows(() => {
    ms932Encoder.encode("\uEE09");
  }, Error, "EncodingError U+EE09");
  assertThrows(() => {
    ms932Encoder.encode("\uEE0A");
  }, Error, "EncodingError U+EE0A");
  assertThrows(() => {
    ms932Encoder.encode("\uEE0B");
  }, Error, "EncodingError U+EE0B");
  assertThrows(() => {
    ms932Encoder.encode("\uEE0C");
  }, Error, "EncodingError U+EE0C");
  assertThrows(() => {
    ms932Encoder.encode("\uEE0D");
  }, Error, "EncodingError U+EE0D");
  assertThrows(() => {
    ms932Encoder.encode("\uEE0E");
  }, Error, "EncodingError U+EE0E");
  assertThrows(() => {
    ms932Encoder.encode("\uEE0F");
  }, Error, "EncodingError U+EE0F");
  assertThrows(() => {
    ms932Encoder.encode("\uEE10");
  }, Error, "EncodingError U+EE10");
  assertThrows(() => {
    ms932Encoder.encode("\uEE11");
  }, Error, "EncodingError U+EE11");
  assertThrows(() => {
    ms932Encoder.encode("\uEE12");
  }, Error, "EncodingError U+EE12");
  assertThrows(() => {
    ms932Encoder.encode("\uEE13");
  }, Error, "EncodingError U+EE13");
  assertThrows(() => {
    ms932Encoder.encode("\uEE14");
  }, Error, "EncodingError U+EE14");
  assertThrows(() => {
    ms932Encoder.encode("\uEE15");
  }, Error, "EncodingError U+EE15");
  assertThrows(() => {
    ms932Encoder.encode("\uEE16");
  }, Error, "EncodingError U+EE16");
  assertThrows(() => {
    ms932Encoder.encode("\uEE17");
  }, Error, "EncodingError U+EE17");
  assertThrows(() => {
    ms932Encoder.encode("\uEE18");
  }, Error, "EncodingError U+EE18");
  assertThrows(() => {
    ms932Encoder.encode("\uEE19");
  }, Error, "EncodingError U+EE19");
  assertThrows(() => {
    ms932Encoder.encode("\uEE1A");
  }, Error, "EncodingError U+EE1A");
  assertThrows(() => {
    ms932Encoder.encode("\uEE1B");
  }, Error, "EncodingError U+EE1B");
  assertThrows(() => {
    ms932Encoder.encode("\uEE1C");
  }, Error, "EncodingError U+EE1C");
  assertThrows(() => {
    ms932Encoder.encode("\uEE1D");
  }, Error, "EncodingError U+EE1D");
  assertThrows(() => {
    ms932Encoder.encode("\uEE1E");
  }, Error, "EncodingError U+EE1E");
  assertThrows(() => {
    ms932Encoder.encode("\uEE1F");
  }, Error, "EncodingError U+EE1F");
  assertThrows(() => {
    ms932Encoder.encode("\uEE20");
  }, Error, "EncodingError U+EE20");
  assertThrows(() => {
    ms932Encoder.encode("\uEE21");
  }, Error, "EncodingError U+EE21");
  assertThrows(() => {
    ms932Encoder.encode("\uEE22");
  }, Error, "EncodingError U+EE22");
  assertThrows(() => {
    ms932Encoder.encode("\uEE23");
  }, Error, "EncodingError U+EE23");
  assertThrows(() => {
    ms932Encoder.encode("\uEE24");
  }, Error, "EncodingError U+EE24");
  assertThrows(() => {
    ms932Encoder.encode("\uEE25");
  }, Error, "EncodingError U+EE25");
  assertThrows(() => {
    ms932Encoder.encode("\uEE26");
  }, Error, "EncodingError U+EE26");
  assertThrows(() => {
    ms932Encoder.encode("\uEE27");
  }, Error, "EncodingError U+EE27");
  assertThrows(() => {
    ms932Encoder.encode("\uEE28");
  }, Error, "EncodingError U+EE28");
  assertThrows(() => {
    ms932Encoder.encode("\uEE29");
  }, Error, "EncodingError U+EE29");
  assertThrows(() => {
    ms932Encoder.encode("\uEE2A");
  }, Error, "EncodingError U+EE2A");
  assertThrows(() => {
    ms932Encoder.encode("\uEE2B");
  }, Error, "EncodingError U+EE2B");
  assertThrows(() => {
    ms932Encoder.encode("\uEE2C");
  }, Error, "EncodingError U+EE2C");
  assertThrows(() => {
    ms932Encoder.encode("\uEE2D");
  }, Error, "EncodingError U+EE2D");
  assertThrows(() => {
    ms932Encoder.encode("\uEE2E");
  }, Error, "EncodingError U+EE2E");
  assertThrows(() => {
    ms932Encoder.encode("\uEE2F");
  }, Error, "EncodingError U+EE2F");
  assertThrows(() => {
    ms932Encoder.encode("\uEE30");
  }, Error, "EncodingError U+EE30");
  assertThrows(() => {
    ms932Encoder.encode("\uEE31");
  }, Error, "EncodingError U+EE31");
  assertThrows(() => {
    ms932Encoder.encode("\uEE32");
  }, Error, "EncodingError U+EE32");
  assertThrows(() => {
    ms932Encoder.encode("\uEE33");
  }, Error, "EncodingError U+EE33");
  assertThrows(() => {
    ms932Encoder.encode("\uEE34");
  }, Error, "EncodingError U+EE34");
  assertThrows(() => {
    ms932Encoder.encode("\uEE35");
  }, Error, "EncodingError U+EE35");
  assertThrows(() => {
    ms932Encoder.encode("\uEE36");
  }, Error, "EncodingError U+EE36");
  assertThrows(() => {
    ms932Encoder.encode("\uEE37");
  }, Error, "EncodingError U+EE37");
  assertThrows(() => {
    ms932Encoder.encode("\uEE38");
  }, Error, "EncodingError U+EE38");
  assertThrows(() => {
    ms932Encoder.encode("\uEE39");
  }, Error, "EncodingError U+EE39");
  assertThrows(() => {
    ms932Encoder.encode("\uEE3A");
  }, Error, "EncodingError U+EE3A");
  assertThrows(() => {
    ms932Encoder.encode("\uEE3B");
  }, Error, "EncodingError U+EE3B");
  assertThrows(() => {
    ms932Encoder.encode("\uEE3C");
  }, Error, "EncodingError U+EE3C");
  assertThrows(() => {
    ms932Encoder.encode("\uEE3D");
  }, Error, "EncodingError U+EE3D");
  assertThrows(() => {
    ms932Encoder.encode("\uEE3E");
  }, Error, "EncodingError U+EE3E");
  assertThrows(() => {
    ms932Encoder.encode("\uEE3F");
  }, Error, "EncodingError U+EE3F");
  assertThrows(() => {
    ms932Encoder.encode("\uEE40");
  }, Error, "EncodingError U+EE40");
  assertThrows(() => {
    ms932Encoder.encode("\uEE41");
  }, Error, "EncodingError U+EE41");
  assertThrows(() => {
    ms932Encoder.encode("\uEE42");
  }, Error, "EncodingError U+EE42");
  assertThrows(() => {
    ms932Encoder.encode("\uEE43");
  }, Error, "EncodingError U+EE43");
  assertThrows(() => {
    ms932Encoder.encode("\uEE44");
  }, Error, "EncodingError U+EE44");
  assertThrows(() => {
    ms932Encoder.encode("\uEE45");
  }, Error, "EncodingError U+EE45");
  assertThrows(() => {
    ms932Encoder.encode("\uEE46");
  }, Error, "EncodingError U+EE46");
  assertThrows(() => {
    ms932Encoder.encode("\uEE47");
  }, Error, "EncodingError U+EE47");
  assertThrows(() => {
    ms932Encoder.encode("\uEE48");
  }, Error, "EncodingError U+EE48");
  assertThrows(() => {
    ms932Encoder.encode("\uEE49");
  }, Error, "EncodingError U+EE49");
  assertThrows(() => {
    ms932Encoder.encode("\uEE4A");
  }, Error, "EncodingError U+EE4A");
  assertThrows(() => {
    ms932Encoder.encode("\uEE4B");
  }, Error, "EncodingError U+EE4B");
  assertThrows(() => {
    ms932Encoder.encode("\uEE4C");
  }, Error, "EncodingError U+EE4C");
  assertThrows(() => {
    ms932Encoder.encode("\uEE4D");
  }, Error, "EncodingError U+EE4D");
  assertThrows(() => {
    ms932Encoder.encode("\uEE4E");
  }, Error, "EncodingError U+EE4E");
  assertThrows(() => {
    ms932Encoder.encode("\uEE4F");
  }, Error, "EncodingError U+EE4F");
  assertThrows(() => {
    ms932Encoder.encode("\uEE50");
  }, Error, "EncodingError U+EE50");
  assertThrows(() => {
    ms932Encoder.encode("\uEE51");
  }, Error, "EncodingError U+EE51");
  assertThrows(() => {
    ms932Encoder.encode("\uEE52");
  }, Error, "EncodingError U+EE52");
  assertThrows(() => {
    ms932Encoder.encode("\uEE53");
  }, Error, "EncodingError U+EE53");
  assertThrows(() => {
    ms932Encoder.encode("\uEE54");
  }, Error, "EncodingError U+EE54");
  assertThrows(() => {
    ms932Encoder.encode("\uEE55");
  }, Error, "EncodingError U+EE55");
  assertThrows(() => {
    ms932Encoder.encode("\uEE56");
  }, Error, "EncodingError U+EE56");
  assertThrows(() => {
    ms932Encoder.encode("\uEE57");
  }, Error, "EncodingError U+EE57");
  assertThrows(() => {
    ms932Encoder.encode("\uEE58");
  }, Error, "EncodingError U+EE58");
  assertThrows(() => {
    ms932Encoder.encode("\uEE59");
  }, Error, "EncodingError U+EE59");
  assertThrows(() => {
    ms932Encoder.encode("\uEE5A");
  }, Error, "EncodingError U+EE5A");
  assertThrows(() => {
    ms932Encoder.encode("\uEE5B");
  }, Error, "EncodingError U+EE5B");
  assertThrows(() => {
    ms932Encoder.encode("\uEE5C");
  }, Error, "EncodingError U+EE5C");
  assertThrows(() => {
    ms932Encoder.encode("\uEE5D");
  }, Error, "EncodingError U+EE5D");
  assertThrows(() => {
    ms932Encoder.encode("\uEE5E");
  }, Error, "EncodingError U+EE5E");
  assertThrows(() => {
    ms932Encoder.encode("\uEE5F");
  }, Error, "EncodingError U+EE5F");
  assertThrows(() => {
    ms932Encoder.encode("\uEE60");
  }, Error, "EncodingError U+EE60");
  assertThrows(() => {
    ms932Encoder.encode("\uEE61");
  }, Error, "EncodingError U+EE61");
  assertThrows(() => {
    ms932Encoder.encode("\uEE62");
  }, Error, "EncodingError U+EE62");
  assertThrows(() => {
    ms932Encoder.encode("\uEE63");
  }, Error, "EncodingError U+EE63");
  assertThrows(() => {
    ms932Encoder.encode("\uEE64");
  }, Error, "EncodingError U+EE64");
  assertThrows(() => {
    ms932Encoder.encode("\uEE65");
  }, Error, "EncodingError U+EE65");
  assertThrows(() => {
    ms932Encoder.encode("\uEE66");
  }, Error, "EncodingError U+EE66");
  assertThrows(() => {
    ms932Encoder.encode("\uEE67");
  }, Error, "EncodingError U+EE67");
  assertThrows(() => {
    ms932Encoder.encode("\uEE68");
  }, Error, "EncodingError U+EE68");
  assertThrows(() => {
    ms932Encoder.encode("\uEE69");
  }, Error, "EncodingError U+EE69");
  assertThrows(() => {
    ms932Encoder.encode("\uEE6A");
  }, Error, "EncodingError U+EE6A");
  assertThrows(() => {
    ms932Encoder.encode("\uEE6B");
  }, Error, "EncodingError U+EE6B");
  assertThrows(() => {
    ms932Encoder.encode("\uEE6C");
  }, Error, "EncodingError U+EE6C");
  assertThrows(() => {
    ms932Encoder.encode("\uEE6D");
  }, Error, "EncodingError U+EE6D");
  assertThrows(() => {
    ms932Encoder.encode("\uEE6E");
  }, Error, "EncodingError U+EE6E");
  assertThrows(() => {
    ms932Encoder.encode("\uEE6F");
  }, Error, "EncodingError U+EE6F");
  assertThrows(() => {
    ms932Encoder.encode("\uEE70");
  }, Error, "EncodingError U+EE70");
  assertThrows(() => {
    ms932Encoder.encode("\uEE71");
  }, Error, "EncodingError U+EE71");
  assertThrows(() => {
    ms932Encoder.encode("\uEE72");
  }, Error, "EncodingError U+EE72");
  assertThrows(() => {
    ms932Encoder.encode("\uEE73");
  }, Error, "EncodingError U+EE73");
  assertThrows(() => {
    ms932Encoder.encode("\uEE74");
  }, Error, "EncodingError U+EE74");
  assertThrows(() => {
    ms932Encoder.encode("\uEE75");
  }, Error, "EncodingError U+EE75");
  assertThrows(() => {
    ms932Encoder.encode("\uEE76");
  }, Error, "EncodingError U+EE76");
  assertThrows(() => {
    ms932Encoder.encode("\uEE77");
  }, Error, "EncodingError U+EE77");
  assertThrows(() => {
    ms932Encoder.encode("\uEE78");
  }, Error, "EncodingError U+EE78");
  assertThrows(() => {
    ms932Encoder.encode("\uEE79");
  }, Error, "EncodingError U+EE79");
  assertThrows(() => {
    ms932Encoder.encode("\uEE7A");
  }, Error, "EncodingError U+EE7A");
  assertThrows(() => {
    ms932Encoder.encode("\uEE7B");
  }, Error, "EncodingError U+EE7B");
  assertThrows(() => {
    ms932Encoder.encode("\uEE7C");
  }, Error, "EncodingError U+EE7C");
  assertThrows(() => {
    ms932Encoder.encode("\uEE7D");
  }, Error, "EncodingError U+EE7D");
  assertThrows(() => {
    ms932Encoder.encode("\uEE7E");
  }, Error, "EncodingError U+EE7E");
  assertThrows(() => {
    ms932Encoder.encode("\uEE7F");
  }, Error, "EncodingError U+EE7F");
  assertThrows(() => {
    ms932Encoder.encode("\uEE80");
  }, Error, "EncodingError U+EE80");
  assertThrows(() => {
    ms932Encoder.encode("\uEE81");
  }, Error, "EncodingError U+EE81");
  assertThrows(() => {
    ms932Encoder.encode("\uEE82");
  }, Error, "EncodingError U+EE82");
  assertThrows(() => {
    ms932Encoder.encode("\uEE83");
  }, Error, "EncodingError U+EE83");
  assertThrows(() => {
    ms932Encoder.encode("\uEE84");
  }, Error, "EncodingError U+EE84");
  assertThrows(() => {
    ms932Encoder.encode("\uEE85");
  }, Error, "EncodingError U+EE85");
  assertThrows(() => {
    ms932Encoder.encode("\uEE86");
  }, Error, "EncodingError U+EE86");
  assertThrows(() => {
    ms932Encoder.encode("\uEE87");
  }, Error, "EncodingError U+EE87");
  assertThrows(() => {
    ms932Encoder.encode("\uEE88");
  }, Error, "EncodingError U+EE88");
  assertThrows(() => {
    ms932Encoder.encode("\uEE89");
  }, Error, "EncodingError U+EE89");
  assertThrows(() => {
    ms932Encoder.encode("\uEE8A");
  }, Error, "EncodingError U+EE8A");
  assertThrows(() => {
    ms932Encoder.encode("\uEE8B");
  }, Error, "EncodingError U+EE8B");
  assertThrows(() => {
    ms932Encoder.encode("\uEE8C");
  }, Error, "EncodingError U+EE8C");
  assertThrows(() => {
    ms932Encoder.encode("\uEE8D");
  }, Error, "EncodingError U+EE8D");
  assertThrows(() => {
    ms932Encoder.encode("\uEE8E");
  }, Error, "EncodingError U+EE8E");
  assertThrows(() => {
    ms932Encoder.encode("\uEE8F");
  }, Error, "EncodingError U+EE8F");
  assertThrows(() => {
    ms932Encoder.encode("\uEE90");
  }, Error, "EncodingError U+EE90");
  assertThrows(() => {
    ms932Encoder.encode("\uEE91");
  }, Error, "EncodingError U+EE91");
  assertThrows(() => {
    ms932Encoder.encode("\uEE92");
  }, Error, "EncodingError U+EE92");
  assertThrows(() => {
    ms932Encoder.encode("\uEE93");
  }, Error, "EncodingError U+EE93");
  assertThrows(() => {
    ms932Encoder.encode("\uEE94");
  }, Error, "EncodingError U+EE94");
  assertThrows(() => {
    ms932Encoder.encode("\uEE95");
  }, Error, "EncodingError U+EE95");
  assertThrows(() => {
    ms932Encoder.encode("\uEE96");
  }, Error, "EncodingError U+EE96");
  assertThrows(() => {
    ms932Encoder.encode("\uEE97");
  }, Error, "EncodingError U+EE97");
  assertThrows(() => {
    ms932Encoder.encode("\uEE98");
  }, Error, "EncodingError U+EE98");
  assertThrows(() => {
    ms932Encoder.encode("\uEE99");
  }, Error, "EncodingError U+EE99");
  assertThrows(() => {
    ms932Encoder.encode("\uEE9A");
  }, Error, "EncodingError U+EE9A");
  assertThrows(() => {
    ms932Encoder.encode("\uEE9B");
  }, Error, "EncodingError U+EE9B");
  assertThrows(() => {
    ms932Encoder.encode("\uEE9C");
  }, Error, "EncodingError U+EE9C");
  assertThrows(() => {
    ms932Encoder.encode("\uEE9D");
  }, Error, "EncodingError U+EE9D");
  assertThrows(() => {
    ms932Encoder.encode("\uEE9E");
  }, Error, "EncodingError U+EE9E");
  assertThrows(() => {
    ms932Encoder.encode("\uEE9F");
  }, Error, "EncodingError U+EE9F");
  assertThrows(() => {
    ms932Encoder.encode("\uEEA0");
  }, Error, "EncodingError U+EEA0");
  assertThrows(() => {
    ms932Encoder.encode("\uEEA1");
  }, Error, "EncodingError U+EEA1");
  assertThrows(() => {
    ms932Encoder.encode("\uEEA2");
  }, Error, "EncodingError U+EEA2");
  assertThrows(() => {
    ms932Encoder.encode("\uEEA3");
  }, Error, "EncodingError U+EEA3");
  assertThrows(() => {
    ms932Encoder.encode("\uEEA4");
  }, Error, "EncodingError U+EEA4");
  assertThrows(() => {
    ms932Encoder.encode("\uEEA5");
  }, Error, "EncodingError U+EEA5");
  assertThrows(() => {
    ms932Encoder.encode("\uEEA6");
  }, Error, "EncodingError U+EEA6");
  assertThrows(() => {
    ms932Encoder.encode("\uEEA7");
  }, Error, "EncodingError U+EEA7");
  assertThrows(() => {
    ms932Encoder.encode("\uEEA8");
  }, Error, "EncodingError U+EEA8");
  assertThrows(() => {
    ms932Encoder.encode("\uEEA9");
  }, Error, "EncodingError U+EEA9");
  assertThrows(() => {
    ms932Encoder.encode("\uEEAA");
  }, Error, "EncodingError U+EEAA");
  assertThrows(() => {
    ms932Encoder.encode("\uEEAB");
  }, Error, "EncodingError U+EEAB");
  assertThrows(() => {
    ms932Encoder.encode("\uEEAC");
  }, Error, "EncodingError U+EEAC");
  assertThrows(() => {
    ms932Encoder.encode("\uEEAD");
  }, Error, "EncodingError U+EEAD");
  assertThrows(() => {
    ms932Encoder.encode("\uEEAE");
  }, Error, "EncodingError U+EEAE");
  assertThrows(() => {
    ms932Encoder.encode("\uEEAF");
  }, Error, "EncodingError U+EEAF");
  assertThrows(() => {
    ms932Encoder.encode("\uEEB0");
  }, Error, "EncodingError U+EEB0");
  assertThrows(() => {
    ms932Encoder.encode("\uEEB1");
  }, Error, "EncodingError U+EEB1");
  assertThrows(() => {
    ms932Encoder.encode("\uEEB2");
  }, Error, "EncodingError U+EEB2");
  assertThrows(() => {
    ms932Encoder.encode("\uEEB3");
  }, Error, "EncodingError U+EEB3");
  assertThrows(() => {
    ms932Encoder.encode("\uEEB4");
  }, Error, "EncodingError U+EEB4");
  assertThrows(() => {
    ms932Encoder.encode("\uEEB5");
  }, Error, "EncodingError U+EEB5");
  assertThrows(() => {
    ms932Encoder.encode("\uEEB6");
  }, Error, "EncodingError U+EEB6");
  assertThrows(() => {
    ms932Encoder.encode("\uEEB7");
  }, Error, "EncodingError U+EEB7");
  assertThrows(() => {
    ms932Encoder.encode("\uEEB8");
  }, Error, "EncodingError U+EEB8");
  assertThrows(() => {
    ms932Encoder.encode("\uEEB9");
  }, Error, "EncodingError U+EEB9");
  assertThrows(() => {
    ms932Encoder.encode("\uEEBA");
  }, Error, "EncodingError U+EEBA");
  assertThrows(() => {
    ms932Encoder.encode("\uEEBB");
  }, Error, "EncodingError U+EEBB");
  assertThrows(() => {
    ms932Encoder.encode("\uEEBC");
  }, Error, "EncodingError U+EEBC");
  assertThrows(() => {
    ms932Encoder.encode("\uEEBD");
  }, Error, "EncodingError U+EEBD");
  assertThrows(() => {
    ms932Encoder.encode("\uEEBE");
  }, Error, "EncodingError U+EEBE");
  assertThrows(() => {
    ms932Encoder.encode("\uEEBF");
  }, Error, "EncodingError U+EEBF");
  assertThrows(() => {
    ms932Encoder.encode("\uEEC0");
  }, Error, "EncodingError U+EEC0");
  assertThrows(() => {
    ms932Encoder.encode("\uEEC1");
  }, Error, "EncodingError U+EEC1");
  assertThrows(() => {
    ms932Encoder.encode("\uEEC2");
  }, Error, "EncodingError U+EEC2");
  assertThrows(() => {
    ms932Encoder.encode("\uEEC3");
  }, Error, "EncodingError U+EEC3");
  assertThrows(() => {
    ms932Encoder.encode("\uEEC4");
  }, Error, "EncodingError U+EEC4");
  assertThrows(() => {
    ms932Encoder.encode("\uEEC5");
  }, Error, "EncodingError U+EEC5");
  assertThrows(() => {
    ms932Encoder.encode("\uEEC6");
  }, Error, "EncodingError U+EEC6");
  assertThrows(() => {
    ms932Encoder.encode("\uEEC7");
  }, Error, "EncodingError U+EEC7");
  assertThrows(() => {
    ms932Encoder.encode("\uEEC8");
  }, Error, "EncodingError U+EEC8");
  assertThrows(() => {
    ms932Encoder.encode("\uEEC9");
  }, Error, "EncodingError U+EEC9");
  assertThrows(() => {
    ms932Encoder.encode("\uEECA");
  }, Error, "EncodingError U+EECA");
  assertThrows(() => {
    ms932Encoder.encode("\uEECB");
  }, Error, "EncodingError U+EECB");
  assertThrows(() => {
    ms932Encoder.encode("\uEECC");
  }, Error, "EncodingError U+EECC");
  assertThrows(() => {
    ms932Encoder.encode("\uEECD");
  }, Error, "EncodingError U+EECD");
  assertThrows(() => {
    ms932Encoder.encode("\uEECE");
  }, Error, "EncodingError U+EECE");
  assertThrows(() => {
    ms932Encoder.encode("\uEECF");
  }, Error, "EncodingError U+EECF");
  assertThrows(() => {
    ms932Encoder.encode("\uEED0");
  }, Error, "EncodingError U+EED0");
  assertThrows(() => {
    ms932Encoder.encode("\uEED1");
  }, Error, "EncodingError U+EED1");
  assertThrows(() => {
    ms932Encoder.encode("\uEED2");
  }, Error, "EncodingError U+EED2");
  assertThrows(() => {
    ms932Encoder.encode("\uEED3");
  }, Error, "EncodingError U+EED3");
  assertThrows(() => {
    ms932Encoder.encode("\uEED4");
  }, Error, "EncodingError U+EED4");
  assertThrows(() => {
    ms932Encoder.encode("\uEED5");
  }, Error, "EncodingError U+EED5");
  assertThrows(() => {
    ms932Encoder.encode("\uEED6");
  }, Error, "EncodingError U+EED6");
  assertThrows(() => {
    ms932Encoder.encode("\uEED7");
  }, Error, "EncodingError U+EED7");
  assertThrows(() => {
    ms932Encoder.encode("\uEED8");
  }, Error, "EncodingError U+EED8");
  assertThrows(() => {
    ms932Encoder.encode("\uEED9");
  }, Error, "EncodingError U+EED9");
  assertThrows(() => {
    ms932Encoder.encode("\uEEDA");
  }, Error, "EncodingError U+EEDA");
  assertThrows(() => {
    ms932Encoder.encode("\uEEDB");
  }, Error, "EncodingError U+EEDB");
  assertThrows(() => {
    ms932Encoder.encode("\uEEDC");
  }, Error, "EncodingError U+EEDC");
  assertThrows(() => {
    ms932Encoder.encode("\uEEDD");
  }, Error, "EncodingError U+EEDD");
  assertThrows(() => {
    ms932Encoder.encode("\uEEDE");
  }, Error, "EncodingError U+EEDE");
  assertThrows(() => {
    ms932Encoder.encode("\uEEDF");
  }, Error, "EncodingError U+EEDF");
  assertThrows(() => {
    ms932Encoder.encode("\uEEE0");
  }, Error, "EncodingError U+EEE0");
  assertThrows(() => {
    ms932Encoder.encode("\uEEE1");
  }, Error, "EncodingError U+EEE1");
  assertThrows(() => {
    ms932Encoder.encode("\uEEE2");
  }, Error, "EncodingError U+EEE2");
  assertThrows(() => {
    ms932Encoder.encode("\uEEE3");
  }, Error, "EncodingError U+EEE3");
  assertThrows(() => {
    ms932Encoder.encode("\uEEE4");
  }, Error, "EncodingError U+EEE4");
  assertThrows(() => {
    ms932Encoder.encode("\uEEE5");
  }, Error, "EncodingError U+EEE5");
  assertThrows(() => {
    ms932Encoder.encode("\uEEE6");
  }, Error, "EncodingError U+EEE6");
  assertThrows(() => {
    ms932Encoder.encode("\uEEE7");
  }, Error, "EncodingError U+EEE7");
  assertThrows(() => {
    ms932Encoder.encode("\uEEE8");
  }, Error, "EncodingError U+EEE8");
  assertThrows(() => {
    ms932Encoder.encode("\uEEE9");
  }, Error, "EncodingError U+EEE9");
  assertThrows(() => {
    ms932Encoder.encode("\uEEEA");
  }, Error, "EncodingError U+EEEA");
  assertThrows(() => {
    ms932Encoder.encode("\uEEEB");
  }, Error, "EncodingError U+EEEB");
  assertThrows(() => {
    ms932Encoder.encode("\uEEEC");
  }, Error, "EncodingError U+EEEC");
  assertThrows(() => {
    ms932Encoder.encode("\uEEED");
  }, Error, "EncodingError U+EEED");
  assertThrows(() => {
    ms932Encoder.encode("\uEEEE");
  }, Error, "EncodingError U+EEEE");
  assertThrows(() => {
    ms932Encoder.encode("\uEEEF");
  }, Error, "EncodingError U+EEEF");
  assertThrows(() => {
    ms932Encoder.encode("\uEEF0");
  }, Error, "EncodingError U+EEF0");
  assertThrows(() => {
    ms932Encoder.encode("\uEEF1");
  }, Error, "EncodingError U+EEF1");
  assertThrows(() => {
    ms932Encoder.encode("\uEEF2");
  }, Error, "EncodingError U+EEF2");
  assertThrows(() => {
    ms932Encoder.encode("\uEEF3");
  }, Error, "EncodingError U+EEF3");
  assertThrows(() => {
    ms932Encoder.encode("\uEEF4");
  }, Error, "EncodingError U+EEF4");
  assertThrows(() => {
    ms932Encoder.encode("\uEEF5");
  }, Error, "EncodingError U+EEF5");
  assertThrows(() => {
    ms932Encoder.encode("\uEEF6");
  }, Error, "EncodingError U+EEF6");
  assertThrows(() => {
    ms932Encoder.encode("\uEEF7");
  }, Error, "EncodingError U+EEF7");
  assertThrows(() => {
    ms932Encoder.encode("\uEEF8");
  }, Error, "EncodingError U+EEF8");
  assertThrows(() => {
    ms932Encoder.encode("\uEEF9");
  }, Error, "EncodingError U+EEF9");
  assertThrows(() => {
    ms932Encoder.encode("\uEEFA");
  }, Error, "EncodingError U+EEFA");
  assertThrows(() => {
    ms932Encoder.encode("\uEEFB");
  }, Error, "EncodingError U+EEFB");
  assertThrows(() => {
    ms932Encoder.encode("\uEEFC");
  }, Error, "EncodingError U+EEFC");
  assertThrows(() => {
    ms932Encoder.encode("\uEEFD");
  }, Error, "EncodingError U+EEFD");
  assertThrows(() => {
    ms932Encoder.encode("\uEEFE");
  }, Error, "EncodingError U+EEFE");
  assertThrows(() => {
    ms932Encoder.encode("\uEEFF");
  }, Error, "EncodingError U+EEFF");
  assertThrows(() => {
    ms932Encoder.encode("\uEF00");
  }, Error, "EncodingError U+EF00");
  assertThrows(() => {
    ms932Encoder.encode("\uEF01");
  }, Error, "EncodingError U+EF01");
  assertThrows(() => {
    ms932Encoder.encode("\uEF02");
  }, Error, "EncodingError U+EF02");
  assertThrows(() => {
    ms932Encoder.encode("\uEF03");
  }, Error, "EncodingError U+EF03");
  assertThrows(() => {
    ms932Encoder.encode("\uEF04");
  }, Error, "EncodingError U+EF04");
  assertThrows(() => {
    ms932Encoder.encode("\uEF05");
  }, Error, "EncodingError U+EF05");
  assertThrows(() => {
    ms932Encoder.encode("\uEF06");
  }, Error, "EncodingError U+EF06");
  assertThrows(() => {
    ms932Encoder.encode("\uEF07");
  }, Error, "EncodingError U+EF07");
  assertThrows(() => {
    ms932Encoder.encode("\uEF08");
  }, Error, "EncodingError U+EF08");
  assertThrows(() => {
    ms932Encoder.encode("\uEF09");
  }, Error, "EncodingError U+EF09");
  assertThrows(() => {
    ms932Encoder.encode("\uEF0A");
  }, Error, "EncodingError U+EF0A");
  assertThrows(() => {
    ms932Encoder.encode("\uEF0B");
  }, Error, "EncodingError U+EF0B");
  assertThrows(() => {
    ms932Encoder.encode("\uEF0C");
  }, Error, "EncodingError U+EF0C");
  assertThrows(() => {
    ms932Encoder.encode("\uEF0D");
  }, Error, "EncodingError U+EF0D");
  assertThrows(() => {
    ms932Encoder.encode("\uEF0E");
  }, Error, "EncodingError U+EF0E");
  assertThrows(() => {
    ms932Encoder.encode("\uEF0F");
  }, Error, "EncodingError U+EF0F");
  assertThrows(() => {
    ms932Encoder.encode("\uEF10");
  }, Error, "EncodingError U+EF10");
  assertThrows(() => {
    ms932Encoder.encode("\uEF11");
  }, Error, "EncodingError U+EF11");
  assertThrows(() => {
    ms932Encoder.encode("\uEF12");
  }, Error, "EncodingError U+EF12");
  assertThrows(() => {
    ms932Encoder.encode("\uEF13");
  }, Error, "EncodingError U+EF13");
  assertThrows(() => {
    ms932Encoder.encode("\uEF14");
  }, Error, "EncodingError U+EF14");
  assertThrows(() => {
    ms932Encoder.encode("\uEF15");
  }, Error, "EncodingError U+EF15");
  assertThrows(() => {
    ms932Encoder.encode("\uEF16");
  }, Error, "EncodingError U+EF16");
  assertThrows(() => {
    ms932Encoder.encode("\uEF17");
  }, Error, "EncodingError U+EF17");
  assertThrows(() => {
    ms932Encoder.encode("\uEF18");
  }, Error, "EncodingError U+EF18");
  assertThrows(() => {
    ms932Encoder.encode("\uEF19");
  }, Error, "EncodingError U+EF19");
  assertThrows(() => {
    ms932Encoder.encode("\uEF1A");
  }, Error, "EncodingError U+EF1A");
  assertThrows(() => {
    ms932Encoder.encode("\uEF1B");
  }, Error, "EncodingError U+EF1B");
  assertThrows(() => {
    ms932Encoder.encode("\uEF1C");
  }, Error, "EncodingError U+EF1C");
  assertThrows(() => {
    ms932Encoder.encode("\uEF1D");
  }, Error, "EncodingError U+EF1D");
  assertThrows(() => {
    ms932Encoder.encode("\uEF1E");
  }, Error, "EncodingError U+EF1E");
  assertThrows(() => {
    ms932Encoder.encode("\uEF1F");
  }, Error, "EncodingError U+EF1F");
  assertThrows(() => {
    ms932Encoder.encode("\uEF20");
  }, Error, "EncodingError U+EF20");
  assertThrows(() => {
    ms932Encoder.encode("\uEF21");
  }, Error, "EncodingError U+EF21");
  assertThrows(() => {
    ms932Encoder.encode("\uEF22");
  }, Error, "EncodingError U+EF22");
  assertThrows(() => {
    ms932Encoder.encode("\uEF23");
  }, Error, "EncodingError U+EF23");
  assertThrows(() => {
    ms932Encoder.encode("\uEF24");
  }, Error, "EncodingError U+EF24");
  assertThrows(() => {
    ms932Encoder.encode("\uEF25");
  }, Error, "EncodingError U+EF25");
  assertThrows(() => {
    ms932Encoder.encode("\uEF26");
  }, Error, "EncodingError U+EF26");
  assertThrows(() => {
    ms932Encoder.encode("\uEF27");
  }, Error, "EncodingError U+EF27");
  assertThrows(() => {
    ms932Encoder.encode("\uEF28");
  }, Error, "EncodingError U+EF28");
  assertThrows(() => {
    ms932Encoder.encode("\uEF29");
  }, Error, "EncodingError U+EF29");
  assertThrows(() => {
    ms932Encoder.encode("\uEF2A");
  }, Error, "EncodingError U+EF2A");
  assertThrows(() => {
    ms932Encoder.encode("\uEF2B");
  }, Error, "EncodingError U+EF2B");
  assertThrows(() => {
    ms932Encoder.encode("\uEF2C");
  }, Error, "EncodingError U+EF2C");
  assertThrows(() => {
    ms932Encoder.encode("\uEF2D");
  }, Error, "EncodingError U+EF2D");
  assertThrows(() => {
    ms932Encoder.encode("\uEF2E");
  }, Error, "EncodingError U+EF2E");
  assertThrows(() => {
    ms932Encoder.encode("\uEF2F");
  }, Error, "EncodingError U+EF2F");
  assertThrows(() => {
    ms932Encoder.encode("\uEF30");
  }, Error, "EncodingError U+EF30");
  assertThrows(() => {
    ms932Encoder.encode("\uEF31");
  }, Error, "EncodingError U+EF31");
  assertThrows(() => {
    ms932Encoder.encode("\uEF32");
  }, Error, "EncodingError U+EF32");
  assertThrows(() => {
    ms932Encoder.encode("\uEF33");
  }, Error, "EncodingError U+EF33");
  assertThrows(() => {
    ms932Encoder.encode("\uEF34");
  }, Error, "EncodingError U+EF34");
  assertThrows(() => {
    ms932Encoder.encode("\uEF35");
  }, Error, "EncodingError U+EF35");
  assertThrows(() => {
    ms932Encoder.encode("\uEF36");
  }, Error, "EncodingError U+EF36");
  assertThrows(() => {
    ms932Encoder.encode("\uEF37");
  }, Error, "EncodingError U+EF37");
  assertThrows(() => {
    ms932Encoder.encode("\uEF38");
  }, Error, "EncodingError U+EF38");
  assertThrows(() => {
    ms932Encoder.encode("\uEF39");
  }, Error, "EncodingError U+EF39");
  assertThrows(() => {
    ms932Encoder.encode("\uEF3A");
  }, Error, "EncodingError U+EF3A");
  assertThrows(() => {
    ms932Encoder.encode("\uEF3B");
  }, Error, "EncodingError U+EF3B");
  assertThrows(() => {
    ms932Encoder.encode("\uEF3C");
  }, Error, "EncodingError U+EF3C");
  assertThrows(() => {
    ms932Encoder.encode("\uEF3D");
  }, Error, "EncodingError U+EF3D");
  assertThrows(() => {
    ms932Encoder.encode("\uEF3E");
  }, Error, "EncodingError U+EF3E");
  assertThrows(() => {
    ms932Encoder.encode("\uEF3F");
  }, Error, "EncodingError U+EF3F");
  assertThrows(() => {
    ms932Encoder.encode("\uEF40");
  }, Error, "EncodingError U+EF40");
  assertThrows(() => {
    ms932Encoder.encode("\uEF41");
  }, Error, "EncodingError U+EF41");
  assertThrows(() => {
    ms932Encoder.encode("\uEF42");
  }, Error, "EncodingError U+EF42");
  assertThrows(() => {
    ms932Encoder.encode("\uEF43");
  }, Error, "EncodingError U+EF43");
  assertThrows(() => {
    ms932Encoder.encode("\uEF44");
  }, Error, "EncodingError U+EF44");
  assertThrows(() => {
    ms932Encoder.encode("\uEF45");
  }, Error, "EncodingError U+EF45");
  assertThrows(() => {
    ms932Encoder.encode("\uEF46");
  }, Error, "EncodingError U+EF46");
  assertThrows(() => {
    ms932Encoder.encode("\uEF47");
  }, Error, "EncodingError U+EF47");
  assertThrows(() => {
    ms932Encoder.encode("\uEF48");
  }, Error, "EncodingError U+EF48");
  assertThrows(() => {
    ms932Encoder.encode("\uEF49");
  }, Error, "EncodingError U+EF49");
  assertThrows(() => {
    ms932Encoder.encode("\uEF4A");
  }, Error, "EncodingError U+EF4A");
  assertThrows(() => {
    ms932Encoder.encode("\uEF4B");
  }, Error, "EncodingError U+EF4B");
  assertThrows(() => {
    ms932Encoder.encode("\uEF4C");
  }, Error, "EncodingError U+EF4C");
  assertThrows(() => {
    ms932Encoder.encode("\uEF4D");
  }, Error, "EncodingError U+EF4D");
  assertThrows(() => {
    ms932Encoder.encode("\uEF4E");
  }, Error, "EncodingError U+EF4E");
  assertThrows(() => {
    ms932Encoder.encode("\uEF4F");
  }, Error, "EncodingError U+EF4F");
  assertThrows(() => {
    ms932Encoder.encode("\uEF50");
  }, Error, "EncodingError U+EF50");
  assertThrows(() => {
    ms932Encoder.encode("\uEF51");
  }, Error, "EncodingError U+EF51");
  assertThrows(() => {
    ms932Encoder.encode("\uEF52");
  }, Error, "EncodingError U+EF52");
  assertThrows(() => {
    ms932Encoder.encode("\uEF53");
  }, Error, "EncodingError U+EF53");
  assertThrows(() => {
    ms932Encoder.encode("\uEF54");
  }, Error, "EncodingError U+EF54");
  assertThrows(() => {
    ms932Encoder.encode("\uEF55");
  }, Error, "EncodingError U+EF55");
  assertThrows(() => {
    ms932Encoder.encode("\uEF56");
  }, Error, "EncodingError U+EF56");
  assertThrows(() => {
    ms932Encoder.encode("\uEF57");
  }, Error, "EncodingError U+EF57");
  assertThrows(() => {
    ms932Encoder.encode("\uEF58");
  }, Error, "EncodingError U+EF58");
  assertThrows(() => {
    ms932Encoder.encode("\uEF59");
  }, Error, "EncodingError U+EF59");
  assertThrows(() => {
    ms932Encoder.encode("\uEF5A");
  }, Error, "EncodingError U+EF5A");
  assertThrows(() => {
    ms932Encoder.encode("\uEF5B");
  }, Error, "EncodingError U+EF5B");
  assertThrows(() => {
    ms932Encoder.encode("\uEF5C");
  }, Error, "EncodingError U+EF5C");
  assertThrows(() => {
    ms932Encoder.encode("\uEF5D");
  }, Error, "EncodingError U+EF5D");
  assertThrows(() => {
    ms932Encoder.encode("\uEF5E");
  }, Error, "EncodingError U+EF5E");
  assertThrows(() => {
    ms932Encoder.encode("\uEF5F");
  }, Error, "EncodingError U+EF5F");
  assertThrows(() => {
    ms932Encoder.encode("\uEF60");
  }, Error, "EncodingError U+EF60");
  assertThrows(() => {
    ms932Encoder.encode("\uEF61");
  }, Error, "EncodingError U+EF61");
  assertThrows(() => {
    ms932Encoder.encode("\uEF62");
  }, Error, "EncodingError U+EF62");
  assertThrows(() => {
    ms932Encoder.encode("\uEF63");
  }, Error, "EncodingError U+EF63");
  assertThrows(() => {
    ms932Encoder.encode("\uEF64");
  }, Error, "EncodingError U+EF64");
  assertThrows(() => {
    ms932Encoder.encode("\uEF65");
  }, Error, "EncodingError U+EF65");
  assertThrows(() => {
    ms932Encoder.encode("\uEF66");
  }, Error, "EncodingError U+EF66");
  assertThrows(() => {
    ms932Encoder.encode("\uEF67");
  }, Error, "EncodingError U+EF67");
  assertThrows(() => {
    ms932Encoder.encode("\uEF68");
  }, Error, "EncodingError U+EF68");
  assertThrows(() => {
    ms932Encoder.encode("\uEF69");
  }, Error, "EncodingError U+EF69");
  assertThrows(() => {
    ms932Encoder.encode("\uEF6A");
  }, Error, "EncodingError U+EF6A");
  assertThrows(() => {
    ms932Encoder.encode("\uEF6B");
  }, Error, "EncodingError U+EF6B");
  assertThrows(() => {
    ms932Encoder.encode("\uEF6C");
  }, Error, "EncodingError U+EF6C");
  assertThrows(() => {
    ms932Encoder.encode("\uEF6D");
  }, Error, "EncodingError U+EF6D");
  assertThrows(() => {
    ms932Encoder.encode("\uEF6E");
  }, Error, "EncodingError U+EF6E");
  assertThrows(() => {
    ms932Encoder.encode("\uEF6F");
  }, Error, "EncodingError U+EF6F");
  assertThrows(() => {
    ms932Encoder.encode("\uEF70");
  }, Error, "EncodingError U+EF70");
  assertThrows(() => {
    ms932Encoder.encode("\uEF71");
  }, Error, "EncodingError U+EF71");
  assertThrows(() => {
    ms932Encoder.encode("\uEF72");
  }, Error, "EncodingError U+EF72");
  assertThrows(() => {
    ms932Encoder.encode("\uEF73");
  }, Error, "EncodingError U+EF73");
  assertThrows(() => {
    ms932Encoder.encode("\uEF74");
  }, Error, "EncodingError U+EF74");
  assertThrows(() => {
    ms932Encoder.encode("\uEF75");
  }, Error, "EncodingError U+EF75");
  assertThrows(() => {
    ms932Encoder.encode("\uEF76");
  }, Error, "EncodingError U+EF76");
  assertThrows(() => {
    ms932Encoder.encode("\uEF77");
  }, Error, "EncodingError U+EF77");
  assertThrows(() => {
    ms932Encoder.encode("\uEF78");
  }, Error, "EncodingError U+EF78");
  assertThrows(() => {
    ms932Encoder.encode("\uEF79");
  }, Error, "EncodingError U+EF79");
  assertThrows(() => {
    ms932Encoder.encode("\uEF7A");
  }, Error, "EncodingError U+EF7A");
  assertThrows(() => {
    ms932Encoder.encode("\uEF7B");
  }, Error, "EncodingError U+EF7B");
  assertThrows(() => {
    ms932Encoder.encode("\uEF7C");
  }, Error, "EncodingError U+EF7C");
  assertThrows(() => {
    ms932Encoder.encode("\uEF7D");
  }, Error, "EncodingError U+EF7D");
  assertThrows(() => {
    ms932Encoder.encode("\uEF7E");
  }, Error, "EncodingError U+EF7E");
  assertThrows(() => {
    ms932Encoder.encode("\uEF7F");
  }, Error, "EncodingError U+EF7F");
  assertThrows(() => {
    ms932Encoder.encode("\uEF80");
  }, Error, "EncodingError U+EF80");
  assertThrows(() => {
    ms932Encoder.encode("\uEF81");
  }, Error, "EncodingError U+EF81");
  assertThrows(() => {
    ms932Encoder.encode("\uEF82");
  }, Error, "EncodingError U+EF82");
  assertThrows(() => {
    ms932Encoder.encode("\uEF83");
  }, Error, "EncodingError U+EF83");
  assertThrows(() => {
    ms932Encoder.encode("\uEF84");
  }, Error, "EncodingError U+EF84");
  assertThrows(() => {
    ms932Encoder.encode("\uEF85");
  }, Error, "EncodingError U+EF85");
  assertThrows(() => {
    ms932Encoder.encode("\uEF86");
  }, Error, "EncodingError U+EF86");
  assertThrows(() => {
    ms932Encoder.encode("\uEF87");
  }, Error, "EncodingError U+EF87");
  assertThrows(() => {
    ms932Encoder.encode("\uEF88");
  }, Error, "EncodingError U+EF88");
  assertThrows(() => {
    ms932Encoder.encode("\uEF89");
  }, Error, "EncodingError U+EF89");
  assertThrows(() => {
    ms932Encoder.encode("\uEF8A");
  }, Error, "EncodingError U+EF8A");
  assertThrows(() => {
    ms932Encoder.encode("\uEF8B");
  }, Error, "EncodingError U+EF8B");
  assertThrows(() => {
    ms932Encoder.encode("\uEF8C");
  }, Error, "EncodingError U+EF8C");
  assertThrows(() => {
    ms932Encoder.encode("\uEF8D");
  }, Error, "EncodingError U+EF8D");
  assertThrows(() => {
    ms932Encoder.encode("\uEF8E");
  }, Error, "EncodingError U+EF8E");
  assertThrows(() => {
    ms932Encoder.encode("\uEF8F");
  }, Error, "EncodingError U+EF8F");
  assertThrows(() => {
    ms932Encoder.encode("\uEF90");
  }, Error, "EncodingError U+EF90");
  assertThrows(() => {
    ms932Encoder.encode("\uEF91");
  }, Error, "EncodingError U+EF91");
  assertThrows(() => {
    ms932Encoder.encode("\uEF92");
  }, Error, "EncodingError U+EF92");
  assertThrows(() => {
    ms932Encoder.encode("\uEF93");
  }, Error, "EncodingError U+EF93");
  assertThrows(() => {
    ms932Encoder.encode("\uEF94");
  }, Error, "EncodingError U+EF94");
  assertThrows(() => {
    ms932Encoder.encode("\uEF95");
  }, Error, "EncodingError U+EF95");
  assertThrows(() => {
    ms932Encoder.encode("\uEF96");
  }, Error, "EncodingError U+EF96");
  assertThrows(() => {
    ms932Encoder.encode("\uEF97");
  }, Error, "EncodingError U+EF97");
  assertThrows(() => {
    ms932Encoder.encode("\uEF98");
  }, Error, "EncodingError U+EF98");
  assertThrows(() => {
    ms932Encoder.encode("\uEF99");
  }, Error, "EncodingError U+EF99");
  assertThrows(() => {
    ms932Encoder.encode("\uEF9A");
  }, Error, "EncodingError U+EF9A");
  assertThrows(() => {
    ms932Encoder.encode("\uEF9B");
  }, Error, "EncodingError U+EF9B");
  assertThrows(() => {
    ms932Encoder.encode("\uEF9C");
  }, Error, "EncodingError U+EF9C");
  assertThrows(() => {
    ms932Encoder.encode("\uEF9D");
  }, Error, "EncodingError U+EF9D");
  assertThrows(() => {
    ms932Encoder.encode("\uEF9E");
  }, Error, "EncodingError U+EF9E");
  assertThrows(() => {
    ms932Encoder.encode("\uEF9F");
  }, Error, "EncodingError U+EF9F");
  assertThrows(() => {
    ms932Encoder.encode("\uEFA0");
  }, Error, "EncodingError U+EFA0");
  assertThrows(() => {
    ms932Encoder.encode("\uEFA1");
  }, Error, "EncodingError U+EFA1");
  assertThrows(() => {
    ms932Encoder.encode("\uEFA2");
  }, Error, "EncodingError U+EFA2");
  assertThrows(() => {
    ms932Encoder.encode("\uEFA3");
  }, Error, "EncodingError U+EFA3");
  assertThrows(() => {
    ms932Encoder.encode("\uEFA4");
  }, Error, "EncodingError U+EFA4");
  assertThrows(() => {
    ms932Encoder.encode("\uEFA5");
  }, Error, "EncodingError U+EFA5");
  assertThrows(() => {
    ms932Encoder.encode("\uEFA6");
  }, Error, "EncodingError U+EFA6");
  assertThrows(() => {
    ms932Encoder.encode("\uEFA7");
  }, Error, "EncodingError U+EFA7");
  assertThrows(() => {
    ms932Encoder.encode("\uEFA8");
  }, Error, "EncodingError U+EFA8");
  assertThrows(() => {
    ms932Encoder.encode("\uEFA9");
  }, Error, "EncodingError U+EFA9");
  assertThrows(() => {
    ms932Encoder.encode("\uEFAA");
  }, Error, "EncodingError U+EFAA");
  assertThrows(() => {
    ms932Encoder.encode("\uEFAB");
  }, Error, "EncodingError U+EFAB");
  assertThrows(() => {
    ms932Encoder.encode("\uEFAC");
  }, Error, "EncodingError U+EFAC");
  assertThrows(() => {
    ms932Encoder.encode("\uEFAD");
  }, Error, "EncodingError U+EFAD");
  assertThrows(() => {
    ms932Encoder.encode("\uEFAE");
  }, Error, "EncodingError U+EFAE");
  assertThrows(() => {
    ms932Encoder.encode("\uEFAF");
  }, Error, "EncodingError U+EFAF");
  assertThrows(() => {
    ms932Encoder.encode("\uEFB0");
  }, Error, "EncodingError U+EFB0");
  assertThrows(() => {
    ms932Encoder.encode("\uEFB1");
  }, Error, "EncodingError U+EFB1");
  assertThrows(() => {
    ms932Encoder.encode("\uEFB2");
  }, Error, "EncodingError U+EFB2");
  assertThrows(() => {
    ms932Encoder.encode("\uEFB3");
  }, Error, "EncodingError U+EFB3");
  assertThrows(() => {
    ms932Encoder.encode("\uEFB4");
  }, Error, "EncodingError U+EFB4");
  assertThrows(() => {
    ms932Encoder.encode("\uEFB5");
  }, Error, "EncodingError U+EFB5");
  assertThrows(() => {
    ms932Encoder.encode("\uEFB6");
  }, Error, "EncodingError U+EFB6");
  assertThrows(() => {
    ms932Encoder.encode("\uEFB7");
  }, Error, "EncodingError U+EFB7");
  assertThrows(() => {
    ms932Encoder.encode("\uEFB8");
  }, Error, "EncodingError U+EFB8");
  assertThrows(() => {
    ms932Encoder.encode("\uEFB9");
  }, Error, "EncodingError U+EFB9");
  assertThrows(() => {
    ms932Encoder.encode("\uEFBA");
  }, Error, "EncodingError U+EFBA");
  assertThrows(() => {
    ms932Encoder.encode("\uEFBB");
  }, Error, "EncodingError U+EFBB");
  assertThrows(() => {
    ms932Encoder.encode("\uEFBC");
  }, Error, "EncodingError U+EFBC");
  assertThrows(() => {
    ms932Encoder.encode("\uEFBD");
  }, Error, "EncodingError U+EFBD");
  assertThrows(() => {
    ms932Encoder.encode("\uEFBE");
  }, Error, "EncodingError U+EFBE");
  assertThrows(() => {
    ms932Encoder.encode("\uEFBF");
  }, Error, "EncodingError U+EFBF");
  assertThrows(() => {
    ms932Encoder.encode("\uEFC0");
  }, Error, "EncodingError U+EFC0");
  assertThrows(() => {
    ms932Encoder.encode("\uEFC1");
  }, Error, "EncodingError U+EFC1");
  assertThrows(() => {
    ms932Encoder.encode("\uEFC2");
  }, Error, "EncodingError U+EFC2");
  assertThrows(() => {
    ms932Encoder.encode("\uEFC3");
  }, Error, "EncodingError U+EFC3");
  assertThrows(() => {
    ms932Encoder.encode("\uEFC4");
  }, Error, "EncodingError U+EFC4");
  assertThrows(() => {
    ms932Encoder.encode("\uEFC5");
  }, Error, "EncodingError U+EFC5");
  assertThrows(() => {
    ms932Encoder.encode("\uEFC6");
  }, Error, "EncodingError U+EFC6");
  assertThrows(() => {
    ms932Encoder.encode("\uEFC7");
  }, Error, "EncodingError U+EFC7");
  assertThrows(() => {
    ms932Encoder.encode("\uEFC8");
  }, Error, "EncodingError U+EFC8");
  assertThrows(() => {
    ms932Encoder.encode("\uEFC9");
  }, Error, "EncodingError U+EFC9");
  assertThrows(() => {
    ms932Encoder.encode("\uEFCA");
  }, Error, "EncodingError U+EFCA");
  assertThrows(() => {
    ms932Encoder.encode("\uEFCB");
  }, Error, "EncodingError U+EFCB");
  assertThrows(() => {
    ms932Encoder.encode("\uEFCC");
  }, Error, "EncodingError U+EFCC");
  assertThrows(() => {
    ms932Encoder.encode("\uEFCD");
  }, Error, "EncodingError U+EFCD");
  assertThrows(() => {
    ms932Encoder.encode("\uEFCE");
  }, Error, "EncodingError U+EFCE");
  assertThrows(() => {
    ms932Encoder.encode("\uEFCF");
  }, Error, "EncodingError U+EFCF");
  assertThrows(() => {
    ms932Encoder.encode("\uEFD0");
  }, Error, "EncodingError U+EFD0");
  assertThrows(() => {
    ms932Encoder.encode("\uEFD1");
  }, Error, "EncodingError U+EFD1");
  assertThrows(() => {
    ms932Encoder.encode("\uEFD2");
  }, Error, "EncodingError U+EFD2");
  assertThrows(() => {
    ms932Encoder.encode("\uEFD3");
  }, Error, "EncodingError U+EFD3");
  assertThrows(() => {
    ms932Encoder.encode("\uEFD4");
  }, Error, "EncodingError U+EFD4");
  assertThrows(() => {
    ms932Encoder.encode("\uEFD5");
  }, Error, "EncodingError U+EFD5");
  assertThrows(() => {
    ms932Encoder.encode("\uEFD6");
  }, Error, "EncodingError U+EFD6");
  assertThrows(() => {
    ms932Encoder.encode("\uEFD7");
  }, Error, "EncodingError U+EFD7");
  assertThrows(() => {
    ms932Encoder.encode("\uEFD8");
  }, Error, "EncodingError U+EFD8");
  assertThrows(() => {
    ms932Encoder.encode("\uEFD9");
  }, Error, "EncodingError U+EFD9");
  assertThrows(() => {
    ms932Encoder.encode("\uEFDA");
  }, Error, "EncodingError U+EFDA");
  assertThrows(() => {
    ms932Encoder.encode("\uEFDB");
  }, Error, "EncodingError U+EFDB");
  assertThrows(() => {
    ms932Encoder.encode("\uEFDC");
  }, Error, "EncodingError U+EFDC");
  assertThrows(() => {
    ms932Encoder.encode("\uEFDD");
  }, Error, "EncodingError U+EFDD");
  assertThrows(() => {
    ms932Encoder.encode("\uEFDE");
  }, Error, "EncodingError U+EFDE");
  assertThrows(() => {
    ms932Encoder.encode("\uEFDF");
  }, Error, "EncodingError U+EFDF");
  assertThrows(() => {
    ms932Encoder.encode("\uEFE0");
  }, Error, "EncodingError U+EFE0");
  assertThrows(() => {
    ms932Encoder.encode("\uEFE1");
  }, Error, "EncodingError U+EFE1");
  assertThrows(() => {
    ms932Encoder.encode("\uEFE2");
  }, Error, "EncodingError U+EFE2");
  assertThrows(() => {
    ms932Encoder.encode("\uEFE3");
  }, Error, "EncodingError U+EFE3");
  assertThrows(() => {
    ms932Encoder.encode("\uEFE4");
  }, Error, "EncodingError U+EFE4");
  assertThrows(() => {
    ms932Encoder.encode("\uEFE5");
  }, Error, "EncodingError U+EFE5");
  assertThrows(() => {
    ms932Encoder.encode("\uEFE6");
  }, Error, "EncodingError U+EFE6");
  assertThrows(() => {
    ms932Encoder.encode("\uEFE7");
  }, Error, "EncodingError U+EFE7");
  assertThrows(() => {
    ms932Encoder.encode("\uEFE8");
  }, Error, "EncodingError U+EFE8");
  assertThrows(() => {
    ms932Encoder.encode("\uEFE9");
  }, Error, "EncodingError U+EFE9");
  assertThrows(() => {
    ms932Encoder.encode("\uEFEA");
  }, Error, "EncodingError U+EFEA");
  assertThrows(() => {
    ms932Encoder.encode("\uEFEB");
  }, Error, "EncodingError U+EFEB");
  assertThrows(() => {
    ms932Encoder.encode("\uEFEC");
  }, Error, "EncodingError U+EFEC");
  assertThrows(() => {
    ms932Encoder.encode("\uEFED");
  }, Error, "EncodingError U+EFED");
  assertThrows(() => {
    ms932Encoder.encode("\uEFEE");
  }, Error, "EncodingError U+EFEE");
  assertThrows(() => {
    ms932Encoder.encode("\uEFEF");
  }, Error, "EncodingError U+EFEF");
  assertThrows(() => {
    ms932Encoder.encode("\uEFF0");
  }, Error, "EncodingError U+EFF0");
  assertThrows(() => {
    ms932Encoder.encode("\uEFF1");
  }, Error, "EncodingError U+EFF1");
  assertThrows(() => {
    ms932Encoder.encode("\uEFF2");
  }, Error, "EncodingError U+EFF2");
  assertThrows(() => {
    ms932Encoder.encode("\uEFF3");
  }, Error, "EncodingError U+EFF3");
  assertThrows(() => {
    ms932Encoder.encode("\uEFF4");
  }, Error, "EncodingError U+EFF4");
  assertThrows(() => {
    ms932Encoder.encode("\uEFF5");
  }, Error, "EncodingError U+EFF5");
  assertThrows(() => {
    ms932Encoder.encode("\uEFF6");
  }, Error, "EncodingError U+EFF6");
  assertThrows(() => {
    ms932Encoder.encode("\uEFF7");
  }, Error, "EncodingError U+EFF7");
  assertThrows(() => {
    ms932Encoder.encode("\uEFF8");
  }, Error, "EncodingError U+EFF8");
  assertThrows(() => {
    ms932Encoder.encode("\uEFF9");
  }, Error, "EncodingError U+EFF9");
  assertThrows(() => {
    ms932Encoder.encode("\uEFFA");
  }, Error, "EncodingError U+EFFA");
  assertThrows(() => {
    ms932Encoder.encode("\uEFFB");
  }, Error, "EncodingError U+EFFB");
  assertThrows(() => {
    ms932Encoder.encode("\uEFFC");
  }, Error, "EncodingError U+EFFC");
  assertThrows(() => {
    ms932Encoder.encode("\uEFFD");
  }, Error, "EncodingError U+EFFD");
  assertThrows(() => {
    ms932Encoder.encode("\uEFFE");
  }, Error, "EncodingError U+EFFE");
  assertThrows(() => {
    ms932Encoder.encode("\uEFFF");
  }, Error, "EncodingError U+EFFF");

});
