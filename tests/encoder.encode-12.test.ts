import { assertThrows } from "std/testing/asserts";
import { Ms932 } from "../src/ms932.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+B000-U+BFFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  assertThrows(() => {
    ms932Encoder.encode("\uB000");
  }, Error, "EncodingError U+B000");
  assertThrows(() => {
    ms932Encoder.encode("\uB001");
  }, Error, "EncodingError U+B001");
  assertThrows(() => {
    ms932Encoder.encode("\uB002");
  }, Error, "EncodingError U+B002");
  assertThrows(() => {
    ms932Encoder.encode("\uB003");
  }, Error, "EncodingError U+B003");
  assertThrows(() => {
    ms932Encoder.encode("\uB004");
  }, Error, "EncodingError U+B004");
  assertThrows(() => {
    ms932Encoder.encode("\uB005");
  }, Error, "EncodingError U+B005");
  assertThrows(() => {
    ms932Encoder.encode("\uB006");
  }, Error, "EncodingError U+B006");
  assertThrows(() => {
    ms932Encoder.encode("\uB007");
  }, Error, "EncodingError U+B007");
  assertThrows(() => {
    ms932Encoder.encode("\uB008");
  }, Error, "EncodingError U+B008");
  assertThrows(() => {
    ms932Encoder.encode("\uB009");
  }, Error, "EncodingError U+B009");
  assertThrows(() => {
    ms932Encoder.encode("\uB00A");
  }, Error, "EncodingError U+B00A");
  assertThrows(() => {
    ms932Encoder.encode("\uB00B");
  }, Error, "EncodingError U+B00B");
  assertThrows(() => {
    ms932Encoder.encode("\uB00C");
  }, Error, "EncodingError U+B00C");
  assertThrows(() => {
    ms932Encoder.encode("\uB00D");
  }, Error, "EncodingError U+B00D");
  assertThrows(() => {
    ms932Encoder.encode("\uB00E");
  }, Error, "EncodingError U+B00E");
  assertThrows(() => {
    ms932Encoder.encode("\uB00F");
  }, Error, "EncodingError U+B00F");
  assertThrows(() => {
    ms932Encoder.encode("\uB010");
  }, Error, "EncodingError U+B010");
  assertThrows(() => {
    ms932Encoder.encode("\uB011");
  }, Error, "EncodingError U+B011");
  assertThrows(() => {
    ms932Encoder.encode("\uB012");
  }, Error, "EncodingError U+B012");
  assertThrows(() => {
    ms932Encoder.encode("\uB013");
  }, Error, "EncodingError U+B013");
  assertThrows(() => {
    ms932Encoder.encode("\uB014");
  }, Error, "EncodingError U+B014");
  assertThrows(() => {
    ms932Encoder.encode("\uB015");
  }, Error, "EncodingError U+B015");
  assertThrows(() => {
    ms932Encoder.encode("\uB016");
  }, Error, "EncodingError U+B016");
  assertThrows(() => {
    ms932Encoder.encode("\uB017");
  }, Error, "EncodingError U+B017");
  assertThrows(() => {
    ms932Encoder.encode("\uB018");
  }, Error, "EncodingError U+B018");
  assertThrows(() => {
    ms932Encoder.encode("\uB019");
  }, Error, "EncodingError U+B019");
  assertThrows(() => {
    ms932Encoder.encode("\uB01A");
  }, Error, "EncodingError U+B01A");
  assertThrows(() => {
    ms932Encoder.encode("\uB01B");
  }, Error, "EncodingError U+B01B");
  assertThrows(() => {
    ms932Encoder.encode("\uB01C");
  }, Error, "EncodingError U+B01C");
  assertThrows(() => {
    ms932Encoder.encode("\uB01D");
  }, Error, "EncodingError U+B01D");
  assertThrows(() => {
    ms932Encoder.encode("\uB01E");
  }, Error, "EncodingError U+B01E");
  assertThrows(() => {
    ms932Encoder.encode("\uB01F");
  }, Error, "EncodingError U+B01F");
  assertThrows(() => {
    ms932Encoder.encode("\uB020");
  }, Error, "EncodingError U+B020");
  assertThrows(() => {
    ms932Encoder.encode("\uB021");
  }, Error, "EncodingError U+B021");
  assertThrows(() => {
    ms932Encoder.encode("\uB022");
  }, Error, "EncodingError U+B022");
  assertThrows(() => {
    ms932Encoder.encode("\uB023");
  }, Error, "EncodingError U+B023");
  assertThrows(() => {
    ms932Encoder.encode("\uB024");
  }, Error, "EncodingError U+B024");
  assertThrows(() => {
    ms932Encoder.encode("\uB025");
  }, Error, "EncodingError U+B025");
  assertThrows(() => {
    ms932Encoder.encode("\uB026");
  }, Error, "EncodingError U+B026");
  assertThrows(() => {
    ms932Encoder.encode("\uB027");
  }, Error, "EncodingError U+B027");
  assertThrows(() => {
    ms932Encoder.encode("\uB028");
  }, Error, "EncodingError U+B028");
  assertThrows(() => {
    ms932Encoder.encode("\uB029");
  }, Error, "EncodingError U+B029");
  assertThrows(() => {
    ms932Encoder.encode("\uB02A");
  }, Error, "EncodingError U+B02A");
  assertThrows(() => {
    ms932Encoder.encode("\uB02B");
  }, Error, "EncodingError U+B02B");
  assertThrows(() => {
    ms932Encoder.encode("\uB02C");
  }, Error, "EncodingError U+B02C");
  assertThrows(() => {
    ms932Encoder.encode("\uB02D");
  }, Error, "EncodingError U+B02D");
  assertThrows(() => {
    ms932Encoder.encode("\uB02E");
  }, Error, "EncodingError U+B02E");
  assertThrows(() => {
    ms932Encoder.encode("\uB02F");
  }, Error, "EncodingError U+B02F");
  assertThrows(() => {
    ms932Encoder.encode("\uB030");
  }, Error, "EncodingError U+B030");
  assertThrows(() => {
    ms932Encoder.encode("\uB031");
  }, Error, "EncodingError U+B031");
  assertThrows(() => {
    ms932Encoder.encode("\uB032");
  }, Error, "EncodingError U+B032");
  assertThrows(() => {
    ms932Encoder.encode("\uB033");
  }, Error, "EncodingError U+B033");
  assertThrows(() => {
    ms932Encoder.encode("\uB034");
  }, Error, "EncodingError U+B034");
  assertThrows(() => {
    ms932Encoder.encode("\uB035");
  }, Error, "EncodingError U+B035");
  assertThrows(() => {
    ms932Encoder.encode("\uB036");
  }, Error, "EncodingError U+B036");
  assertThrows(() => {
    ms932Encoder.encode("\uB037");
  }, Error, "EncodingError U+B037");
  assertThrows(() => {
    ms932Encoder.encode("\uB038");
  }, Error, "EncodingError U+B038");
  assertThrows(() => {
    ms932Encoder.encode("\uB039");
  }, Error, "EncodingError U+B039");
  assertThrows(() => {
    ms932Encoder.encode("\uB03A");
  }, Error, "EncodingError U+B03A");
  assertThrows(() => {
    ms932Encoder.encode("\uB03B");
  }, Error, "EncodingError U+B03B");
  assertThrows(() => {
    ms932Encoder.encode("\uB03C");
  }, Error, "EncodingError U+B03C");
  assertThrows(() => {
    ms932Encoder.encode("\uB03D");
  }, Error, "EncodingError U+B03D");
  assertThrows(() => {
    ms932Encoder.encode("\uB03E");
  }, Error, "EncodingError U+B03E");
  assertThrows(() => {
    ms932Encoder.encode("\uB03F");
  }, Error, "EncodingError U+B03F");
  assertThrows(() => {
    ms932Encoder.encode("\uB040");
  }, Error, "EncodingError U+B040");
  assertThrows(() => {
    ms932Encoder.encode("\uB041");
  }, Error, "EncodingError U+B041");
  assertThrows(() => {
    ms932Encoder.encode("\uB042");
  }, Error, "EncodingError U+B042");
  assertThrows(() => {
    ms932Encoder.encode("\uB043");
  }, Error, "EncodingError U+B043");
  assertThrows(() => {
    ms932Encoder.encode("\uB044");
  }, Error, "EncodingError U+B044");
  assertThrows(() => {
    ms932Encoder.encode("\uB045");
  }, Error, "EncodingError U+B045");
  assertThrows(() => {
    ms932Encoder.encode("\uB046");
  }, Error, "EncodingError U+B046");
  assertThrows(() => {
    ms932Encoder.encode("\uB047");
  }, Error, "EncodingError U+B047");
  assertThrows(() => {
    ms932Encoder.encode("\uB048");
  }, Error, "EncodingError U+B048");
  assertThrows(() => {
    ms932Encoder.encode("\uB049");
  }, Error, "EncodingError U+B049");
  assertThrows(() => {
    ms932Encoder.encode("\uB04A");
  }, Error, "EncodingError U+B04A");
  assertThrows(() => {
    ms932Encoder.encode("\uB04B");
  }, Error, "EncodingError U+B04B");
  assertThrows(() => {
    ms932Encoder.encode("\uB04C");
  }, Error, "EncodingError U+B04C");
  assertThrows(() => {
    ms932Encoder.encode("\uB04D");
  }, Error, "EncodingError U+B04D");
  assertThrows(() => {
    ms932Encoder.encode("\uB04E");
  }, Error, "EncodingError U+B04E");
  assertThrows(() => {
    ms932Encoder.encode("\uB04F");
  }, Error, "EncodingError U+B04F");
  assertThrows(() => {
    ms932Encoder.encode("\uB050");
  }, Error, "EncodingError U+B050");
  assertThrows(() => {
    ms932Encoder.encode("\uB051");
  }, Error, "EncodingError U+B051");
  assertThrows(() => {
    ms932Encoder.encode("\uB052");
  }, Error, "EncodingError U+B052");
  assertThrows(() => {
    ms932Encoder.encode("\uB053");
  }, Error, "EncodingError U+B053");
  assertThrows(() => {
    ms932Encoder.encode("\uB054");
  }, Error, "EncodingError U+B054");
  assertThrows(() => {
    ms932Encoder.encode("\uB055");
  }, Error, "EncodingError U+B055");
  assertThrows(() => {
    ms932Encoder.encode("\uB056");
  }, Error, "EncodingError U+B056");
  assertThrows(() => {
    ms932Encoder.encode("\uB057");
  }, Error, "EncodingError U+B057");
  assertThrows(() => {
    ms932Encoder.encode("\uB058");
  }, Error, "EncodingError U+B058");
  assertThrows(() => {
    ms932Encoder.encode("\uB059");
  }, Error, "EncodingError U+B059");
  assertThrows(() => {
    ms932Encoder.encode("\uB05A");
  }, Error, "EncodingError U+B05A");
  assertThrows(() => {
    ms932Encoder.encode("\uB05B");
  }, Error, "EncodingError U+B05B");
  assertThrows(() => {
    ms932Encoder.encode("\uB05C");
  }, Error, "EncodingError U+B05C");
  assertThrows(() => {
    ms932Encoder.encode("\uB05D");
  }, Error, "EncodingError U+B05D");
  assertThrows(() => {
    ms932Encoder.encode("\uB05E");
  }, Error, "EncodingError U+B05E");
  assertThrows(() => {
    ms932Encoder.encode("\uB05F");
  }, Error, "EncodingError U+B05F");
  assertThrows(() => {
    ms932Encoder.encode("\uB060");
  }, Error, "EncodingError U+B060");
  assertThrows(() => {
    ms932Encoder.encode("\uB061");
  }, Error, "EncodingError U+B061");
  assertThrows(() => {
    ms932Encoder.encode("\uB062");
  }, Error, "EncodingError U+B062");
  assertThrows(() => {
    ms932Encoder.encode("\uB063");
  }, Error, "EncodingError U+B063");
  assertThrows(() => {
    ms932Encoder.encode("\uB064");
  }, Error, "EncodingError U+B064");
  assertThrows(() => {
    ms932Encoder.encode("\uB065");
  }, Error, "EncodingError U+B065");
  assertThrows(() => {
    ms932Encoder.encode("\uB066");
  }, Error, "EncodingError U+B066");
  assertThrows(() => {
    ms932Encoder.encode("\uB067");
  }, Error, "EncodingError U+B067");
  assertThrows(() => {
    ms932Encoder.encode("\uB068");
  }, Error, "EncodingError U+B068");
  assertThrows(() => {
    ms932Encoder.encode("\uB069");
  }, Error, "EncodingError U+B069");
  assertThrows(() => {
    ms932Encoder.encode("\uB06A");
  }, Error, "EncodingError U+B06A");
  assertThrows(() => {
    ms932Encoder.encode("\uB06B");
  }, Error, "EncodingError U+B06B");
  assertThrows(() => {
    ms932Encoder.encode("\uB06C");
  }, Error, "EncodingError U+B06C");
  assertThrows(() => {
    ms932Encoder.encode("\uB06D");
  }, Error, "EncodingError U+B06D");
  assertThrows(() => {
    ms932Encoder.encode("\uB06E");
  }, Error, "EncodingError U+B06E");
  assertThrows(() => {
    ms932Encoder.encode("\uB06F");
  }, Error, "EncodingError U+B06F");
  assertThrows(() => {
    ms932Encoder.encode("\uB070");
  }, Error, "EncodingError U+B070");
  assertThrows(() => {
    ms932Encoder.encode("\uB071");
  }, Error, "EncodingError U+B071");
  assertThrows(() => {
    ms932Encoder.encode("\uB072");
  }, Error, "EncodingError U+B072");
  assertThrows(() => {
    ms932Encoder.encode("\uB073");
  }, Error, "EncodingError U+B073");
  assertThrows(() => {
    ms932Encoder.encode("\uB074");
  }, Error, "EncodingError U+B074");
  assertThrows(() => {
    ms932Encoder.encode("\uB075");
  }, Error, "EncodingError U+B075");
  assertThrows(() => {
    ms932Encoder.encode("\uB076");
  }, Error, "EncodingError U+B076");
  assertThrows(() => {
    ms932Encoder.encode("\uB077");
  }, Error, "EncodingError U+B077");
  assertThrows(() => {
    ms932Encoder.encode("\uB078");
  }, Error, "EncodingError U+B078");
  assertThrows(() => {
    ms932Encoder.encode("\uB079");
  }, Error, "EncodingError U+B079");
  assertThrows(() => {
    ms932Encoder.encode("\uB07A");
  }, Error, "EncodingError U+B07A");
  assertThrows(() => {
    ms932Encoder.encode("\uB07B");
  }, Error, "EncodingError U+B07B");
  assertThrows(() => {
    ms932Encoder.encode("\uB07C");
  }, Error, "EncodingError U+B07C");
  assertThrows(() => {
    ms932Encoder.encode("\uB07D");
  }, Error, "EncodingError U+B07D");
  assertThrows(() => {
    ms932Encoder.encode("\uB07E");
  }, Error, "EncodingError U+B07E");
  assertThrows(() => {
    ms932Encoder.encode("\uB07F");
  }, Error, "EncodingError U+B07F");
  assertThrows(() => {
    ms932Encoder.encode("\uB080");
  }, Error, "EncodingError U+B080");
  assertThrows(() => {
    ms932Encoder.encode("\uB081");
  }, Error, "EncodingError U+B081");
  assertThrows(() => {
    ms932Encoder.encode("\uB082");
  }, Error, "EncodingError U+B082");
  assertThrows(() => {
    ms932Encoder.encode("\uB083");
  }, Error, "EncodingError U+B083");
  assertThrows(() => {
    ms932Encoder.encode("\uB084");
  }, Error, "EncodingError U+B084");
  assertThrows(() => {
    ms932Encoder.encode("\uB085");
  }, Error, "EncodingError U+B085");
  assertThrows(() => {
    ms932Encoder.encode("\uB086");
  }, Error, "EncodingError U+B086");
  assertThrows(() => {
    ms932Encoder.encode("\uB087");
  }, Error, "EncodingError U+B087");
  assertThrows(() => {
    ms932Encoder.encode("\uB088");
  }, Error, "EncodingError U+B088");
  assertThrows(() => {
    ms932Encoder.encode("\uB089");
  }, Error, "EncodingError U+B089");
  assertThrows(() => {
    ms932Encoder.encode("\uB08A");
  }, Error, "EncodingError U+B08A");
  assertThrows(() => {
    ms932Encoder.encode("\uB08B");
  }, Error, "EncodingError U+B08B");
  assertThrows(() => {
    ms932Encoder.encode("\uB08C");
  }, Error, "EncodingError U+B08C");
  assertThrows(() => {
    ms932Encoder.encode("\uB08D");
  }, Error, "EncodingError U+B08D");
  assertThrows(() => {
    ms932Encoder.encode("\uB08E");
  }, Error, "EncodingError U+B08E");
  assertThrows(() => {
    ms932Encoder.encode("\uB08F");
  }, Error, "EncodingError U+B08F");
  assertThrows(() => {
    ms932Encoder.encode("\uB090");
  }, Error, "EncodingError U+B090");
  assertThrows(() => {
    ms932Encoder.encode("\uB091");
  }, Error, "EncodingError U+B091");
  assertThrows(() => {
    ms932Encoder.encode("\uB092");
  }, Error, "EncodingError U+B092");
  assertThrows(() => {
    ms932Encoder.encode("\uB093");
  }, Error, "EncodingError U+B093");
  assertThrows(() => {
    ms932Encoder.encode("\uB094");
  }, Error, "EncodingError U+B094");
  assertThrows(() => {
    ms932Encoder.encode("\uB095");
  }, Error, "EncodingError U+B095");
  assertThrows(() => {
    ms932Encoder.encode("\uB096");
  }, Error, "EncodingError U+B096");
  assertThrows(() => {
    ms932Encoder.encode("\uB097");
  }, Error, "EncodingError U+B097");
  assertThrows(() => {
    ms932Encoder.encode("\uB098");
  }, Error, "EncodingError U+B098");
  assertThrows(() => {
    ms932Encoder.encode("\uB099");
  }, Error, "EncodingError U+B099");
  assertThrows(() => {
    ms932Encoder.encode("\uB09A");
  }, Error, "EncodingError U+B09A");
  assertThrows(() => {
    ms932Encoder.encode("\uB09B");
  }, Error, "EncodingError U+B09B");
  assertThrows(() => {
    ms932Encoder.encode("\uB09C");
  }, Error, "EncodingError U+B09C");
  assertThrows(() => {
    ms932Encoder.encode("\uB09D");
  }, Error, "EncodingError U+B09D");
  assertThrows(() => {
    ms932Encoder.encode("\uB09E");
  }, Error, "EncodingError U+B09E");
  assertThrows(() => {
    ms932Encoder.encode("\uB09F");
  }, Error, "EncodingError U+B09F");
  assertThrows(() => {
    ms932Encoder.encode("\uB0A0");
  }, Error, "EncodingError U+B0A0");
  assertThrows(() => {
    ms932Encoder.encode("\uB0A1");
  }, Error, "EncodingError U+B0A1");
  assertThrows(() => {
    ms932Encoder.encode("\uB0A2");
  }, Error, "EncodingError U+B0A2");
  assertThrows(() => {
    ms932Encoder.encode("\uB0A3");
  }, Error, "EncodingError U+B0A3");
  assertThrows(() => {
    ms932Encoder.encode("\uB0A4");
  }, Error, "EncodingError U+B0A4");
  assertThrows(() => {
    ms932Encoder.encode("\uB0A5");
  }, Error, "EncodingError U+B0A5");
  assertThrows(() => {
    ms932Encoder.encode("\uB0A6");
  }, Error, "EncodingError U+B0A6");
  assertThrows(() => {
    ms932Encoder.encode("\uB0A7");
  }, Error, "EncodingError U+B0A7");
  assertThrows(() => {
    ms932Encoder.encode("\uB0A8");
  }, Error, "EncodingError U+B0A8");
  assertThrows(() => {
    ms932Encoder.encode("\uB0A9");
  }, Error, "EncodingError U+B0A9");
  assertThrows(() => {
    ms932Encoder.encode("\uB0AA");
  }, Error, "EncodingError U+B0AA");
  assertThrows(() => {
    ms932Encoder.encode("\uB0AB");
  }, Error, "EncodingError U+B0AB");
  assertThrows(() => {
    ms932Encoder.encode("\uB0AC");
  }, Error, "EncodingError U+B0AC");
  assertThrows(() => {
    ms932Encoder.encode("\uB0AD");
  }, Error, "EncodingError U+B0AD");
  assertThrows(() => {
    ms932Encoder.encode("\uB0AE");
  }, Error, "EncodingError U+B0AE");
  assertThrows(() => {
    ms932Encoder.encode("\uB0AF");
  }, Error, "EncodingError U+B0AF");
  assertThrows(() => {
    ms932Encoder.encode("\uB0B0");
  }, Error, "EncodingError U+B0B0");
  assertThrows(() => {
    ms932Encoder.encode("\uB0B1");
  }, Error, "EncodingError U+B0B1");
  assertThrows(() => {
    ms932Encoder.encode("\uB0B2");
  }, Error, "EncodingError U+B0B2");
  assertThrows(() => {
    ms932Encoder.encode("\uB0B3");
  }, Error, "EncodingError U+B0B3");
  assertThrows(() => {
    ms932Encoder.encode("\uB0B4");
  }, Error, "EncodingError U+B0B4");
  assertThrows(() => {
    ms932Encoder.encode("\uB0B5");
  }, Error, "EncodingError U+B0B5");
  assertThrows(() => {
    ms932Encoder.encode("\uB0B6");
  }, Error, "EncodingError U+B0B6");
  assertThrows(() => {
    ms932Encoder.encode("\uB0B7");
  }, Error, "EncodingError U+B0B7");
  assertThrows(() => {
    ms932Encoder.encode("\uB0B8");
  }, Error, "EncodingError U+B0B8");
  assertThrows(() => {
    ms932Encoder.encode("\uB0B9");
  }, Error, "EncodingError U+B0B9");
  assertThrows(() => {
    ms932Encoder.encode("\uB0BA");
  }, Error, "EncodingError U+B0BA");
  assertThrows(() => {
    ms932Encoder.encode("\uB0BB");
  }, Error, "EncodingError U+B0BB");
  assertThrows(() => {
    ms932Encoder.encode("\uB0BC");
  }, Error, "EncodingError U+B0BC");
  assertThrows(() => {
    ms932Encoder.encode("\uB0BD");
  }, Error, "EncodingError U+B0BD");
  assertThrows(() => {
    ms932Encoder.encode("\uB0BE");
  }, Error, "EncodingError U+B0BE");
  assertThrows(() => {
    ms932Encoder.encode("\uB0BF");
  }, Error, "EncodingError U+B0BF");
  assertThrows(() => {
    ms932Encoder.encode("\uB0C0");
  }, Error, "EncodingError U+B0C0");
  assertThrows(() => {
    ms932Encoder.encode("\uB0C1");
  }, Error, "EncodingError U+B0C1");
  assertThrows(() => {
    ms932Encoder.encode("\uB0C2");
  }, Error, "EncodingError U+B0C2");
  assertThrows(() => {
    ms932Encoder.encode("\uB0C3");
  }, Error, "EncodingError U+B0C3");
  assertThrows(() => {
    ms932Encoder.encode("\uB0C4");
  }, Error, "EncodingError U+B0C4");
  assertThrows(() => {
    ms932Encoder.encode("\uB0C5");
  }, Error, "EncodingError U+B0C5");
  assertThrows(() => {
    ms932Encoder.encode("\uB0C6");
  }, Error, "EncodingError U+B0C6");
  assertThrows(() => {
    ms932Encoder.encode("\uB0C7");
  }, Error, "EncodingError U+B0C7");
  assertThrows(() => {
    ms932Encoder.encode("\uB0C8");
  }, Error, "EncodingError U+B0C8");
  assertThrows(() => {
    ms932Encoder.encode("\uB0C9");
  }, Error, "EncodingError U+B0C9");
  assertThrows(() => {
    ms932Encoder.encode("\uB0CA");
  }, Error, "EncodingError U+B0CA");
  assertThrows(() => {
    ms932Encoder.encode("\uB0CB");
  }, Error, "EncodingError U+B0CB");
  assertThrows(() => {
    ms932Encoder.encode("\uB0CC");
  }, Error, "EncodingError U+B0CC");
  assertThrows(() => {
    ms932Encoder.encode("\uB0CD");
  }, Error, "EncodingError U+B0CD");
  assertThrows(() => {
    ms932Encoder.encode("\uB0CE");
  }, Error, "EncodingError U+B0CE");
  assertThrows(() => {
    ms932Encoder.encode("\uB0CF");
  }, Error, "EncodingError U+B0CF");
  assertThrows(() => {
    ms932Encoder.encode("\uB0D0");
  }, Error, "EncodingError U+B0D0");
  assertThrows(() => {
    ms932Encoder.encode("\uB0D1");
  }, Error, "EncodingError U+B0D1");
  assertThrows(() => {
    ms932Encoder.encode("\uB0D2");
  }, Error, "EncodingError U+B0D2");
  assertThrows(() => {
    ms932Encoder.encode("\uB0D3");
  }, Error, "EncodingError U+B0D3");
  assertThrows(() => {
    ms932Encoder.encode("\uB0D4");
  }, Error, "EncodingError U+B0D4");
  assertThrows(() => {
    ms932Encoder.encode("\uB0D5");
  }, Error, "EncodingError U+B0D5");
  assertThrows(() => {
    ms932Encoder.encode("\uB0D6");
  }, Error, "EncodingError U+B0D6");
  assertThrows(() => {
    ms932Encoder.encode("\uB0D7");
  }, Error, "EncodingError U+B0D7");
  assertThrows(() => {
    ms932Encoder.encode("\uB0D8");
  }, Error, "EncodingError U+B0D8");
  assertThrows(() => {
    ms932Encoder.encode("\uB0D9");
  }, Error, "EncodingError U+B0D9");
  assertThrows(() => {
    ms932Encoder.encode("\uB0DA");
  }, Error, "EncodingError U+B0DA");
  assertThrows(() => {
    ms932Encoder.encode("\uB0DB");
  }, Error, "EncodingError U+B0DB");
  assertThrows(() => {
    ms932Encoder.encode("\uB0DC");
  }, Error, "EncodingError U+B0DC");
  assertThrows(() => {
    ms932Encoder.encode("\uB0DD");
  }, Error, "EncodingError U+B0DD");
  assertThrows(() => {
    ms932Encoder.encode("\uB0DE");
  }, Error, "EncodingError U+B0DE");
  assertThrows(() => {
    ms932Encoder.encode("\uB0DF");
  }, Error, "EncodingError U+B0DF");
  assertThrows(() => {
    ms932Encoder.encode("\uB0E0");
  }, Error, "EncodingError U+B0E0");
  assertThrows(() => {
    ms932Encoder.encode("\uB0E1");
  }, Error, "EncodingError U+B0E1");
  assertThrows(() => {
    ms932Encoder.encode("\uB0E2");
  }, Error, "EncodingError U+B0E2");
  assertThrows(() => {
    ms932Encoder.encode("\uB0E3");
  }, Error, "EncodingError U+B0E3");
  assertThrows(() => {
    ms932Encoder.encode("\uB0E4");
  }, Error, "EncodingError U+B0E4");
  assertThrows(() => {
    ms932Encoder.encode("\uB0E5");
  }, Error, "EncodingError U+B0E5");
  assertThrows(() => {
    ms932Encoder.encode("\uB0E6");
  }, Error, "EncodingError U+B0E6");
  assertThrows(() => {
    ms932Encoder.encode("\uB0E7");
  }, Error, "EncodingError U+B0E7");
  assertThrows(() => {
    ms932Encoder.encode("\uB0E8");
  }, Error, "EncodingError U+B0E8");
  assertThrows(() => {
    ms932Encoder.encode("\uB0E9");
  }, Error, "EncodingError U+B0E9");
  assertThrows(() => {
    ms932Encoder.encode("\uB0EA");
  }, Error, "EncodingError U+B0EA");
  assertThrows(() => {
    ms932Encoder.encode("\uB0EB");
  }, Error, "EncodingError U+B0EB");
  assertThrows(() => {
    ms932Encoder.encode("\uB0EC");
  }, Error, "EncodingError U+B0EC");
  assertThrows(() => {
    ms932Encoder.encode("\uB0ED");
  }, Error, "EncodingError U+B0ED");
  assertThrows(() => {
    ms932Encoder.encode("\uB0EE");
  }, Error, "EncodingError U+B0EE");
  assertThrows(() => {
    ms932Encoder.encode("\uB0EF");
  }, Error, "EncodingError U+B0EF");
  assertThrows(() => {
    ms932Encoder.encode("\uB0F0");
  }, Error, "EncodingError U+B0F0");
  assertThrows(() => {
    ms932Encoder.encode("\uB0F1");
  }, Error, "EncodingError U+B0F1");
  assertThrows(() => {
    ms932Encoder.encode("\uB0F2");
  }, Error, "EncodingError U+B0F2");
  assertThrows(() => {
    ms932Encoder.encode("\uB0F3");
  }, Error, "EncodingError U+B0F3");
  assertThrows(() => {
    ms932Encoder.encode("\uB0F4");
  }, Error, "EncodingError U+B0F4");
  assertThrows(() => {
    ms932Encoder.encode("\uB0F5");
  }, Error, "EncodingError U+B0F5");
  assertThrows(() => {
    ms932Encoder.encode("\uB0F6");
  }, Error, "EncodingError U+B0F6");
  assertThrows(() => {
    ms932Encoder.encode("\uB0F7");
  }, Error, "EncodingError U+B0F7");
  assertThrows(() => {
    ms932Encoder.encode("\uB0F8");
  }, Error, "EncodingError U+B0F8");
  assertThrows(() => {
    ms932Encoder.encode("\uB0F9");
  }, Error, "EncodingError U+B0F9");
  assertThrows(() => {
    ms932Encoder.encode("\uB0FA");
  }, Error, "EncodingError U+B0FA");
  assertThrows(() => {
    ms932Encoder.encode("\uB0FB");
  }, Error, "EncodingError U+B0FB");
  assertThrows(() => {
    ms932Encoder.encode("\uB0FC");
  }, Error, "EncodingError U+B0FC");
  assertThrows(() => {
    ms932Encoder.encode("\uB0FD");
  }, Error, "EncodingError U+B0FD");
  assertThrows(() => {
    ms932Encoder.encode("\uB0FE");
  }, Error, "EncodingError U+B0FE");
  assertThrows(() => {
    ms932Encoder.encode("\uB0FF");
  }, Error, "EncodingError U+B0FF");
  assertThrows(() => {
    ms932Encoder.encode("\uB100");
  }, Error, "EncodingError U+B100");
  assertThrows(() => {
    ms932Encoder.encode("\uB101");
  }, Error, "EncodingError U+B101");
  assertThrows(() => {
    ms932Encoder.encode("\uB102");
  }, Error, "EncodingError U+B102");
  assertThrows(() => {
    ms932Encoder.encode("\uB103");
  }, Error, "EncodingError U+B103");
  assertThrows(() => {
    ms932Encoder.encode("\uB104");
  }, Error, "EncodingError U+B104");
  assertThrows(() => {
    ms932Encoder.encode("\uB105");
  }, Error, "EncodingError U+B105");
  assertThrows(() => {
    ms932Encoder.encode("\uB106");
  }, Error, "EncodingError U+B106");
  assertThrows(() => {
    ms932Encoder.encode("\uB107");
  }, Error, "EncodingError U+B107");
  assertThrows(() => {
    ms932Encoder.encode("\uB108");
  }, Error, "EncodingError U+B108");
  assertThrows(() => {
    ms932Encoder.encode("\uB109");
  }, Error, "EncodingError U+B109");
  assertThrows(() => {
    ms932Encoder.encode("\uB10A");
  }, Error, "EncodingError U+B10A");
  assertThrows(() => {
    ms932Encoder.encode("\uB10B");
  }, Error, "EncodingError U+B10B");
  assertThrows(() => {
    ms932Encoder.encode("\uB10C");
  }, Error, "EncodingError U+B10C");
  assertThrows(() => {
    ms932Encoder.encode("\uB10D");
  }, Error, "EncodingError U+B10D");
  assertThrows(() => {
    ms932Encoder.encode("\uB10E");
  }, Error, "EncodingError U+B10E");
  assertThrows(() => {
    ms932Encoder.encode("\uB10F");
  }, Error, "EncodingError U+B10F");
  assertThrows(() => {
    ms932Encoder.encode("\uB110");
  }, Error, "EncodingError U+B110");
  assertThrows(() => {
    ms932Encoder.encode("\uB111");
  }, Error, "EncodingError U+B111");
  assertThrows(() => {
    ms932Encoder.encode("\uB112");
  }, Error, "EncodingError U+B112");
  assertThrows(() => {
    ms932Encoder.encode("\uB113");
  }, Error, "EncodingError U+B113");
  assertThrows(() => {
    ms932Encoder.encode("\uB114");
  }, Error, "EncodingError U+B114");
  assertThrows(() => {
    ms932Encoder.encode("\uB115");
  }, Error, "EncodingError U+B115");
  assertThrows(() => {
    ms932Encoder.encode("\uB116");
  }, Error, "EncodingError U+B116");
  assertThrows(() => {
    ms932Encoder.encode("\uB117");
  }, Error, "EncodingError U+B117");
  assertThrows(() => {
    ms932Encoder.encode("\uB118");
  }, Error, "EncodingError U+B118");
  assertThrows(() => {
    ms932Encoder.encode("\uB119");
  }, Error, "EncodingError U+B119");
  assertThrows(() => {
    ms932Encoder.encode("\uB11A");
  }, Error, "EncodingError U+B11A");
  assertThrows(() => {
    ms932Encoder.encode("\uB11B");
  }, Error, "EncodingError U+B11B");
  assertThrows(() => {
    ms932Encoder.encode("\uB11C");
  }, Error, "EncodingError U+B11C");
  assertThrows(() => {
    ms932Encoder.encode("\uB11D");
  }, Error, "EncodingError U+B11D");
  assertThrows(() => {
    ms932Encoder.encode("\uB11E");
  }, Error, "EncodingError U+B11E");
  assertThrows(() => {
    ms932Encoder.encode("\uB11F");
  }, Error, "EncodingError U+B11F");
  assertThrows(() => {
    ms932Encoder.encode("\uB120");
  }, Error, "EncodingError U+B120");
  assertThrows(() => {
    ms932Encoder.encode("\uB121");
  }, Error, "EncodingError U+B121");
  assertThrows(() => {
    ms932Encoder.encode("\uB122");
  }, Error, "EncodingError U+B122");
  assertThrows(() => {
    ms932Encoder.encode("\uB123");
  }, Error, "EncodingError U+B123");
  assertThrows(() => {
    ms932Encoder.encode("\uB124");
  }, Error, "EncodingError U+B124");
  assertThrows(() => {
    ms932Encoder.encode("\uB125");
  }, Error, "EncodingError U+B125");
  assertThrows(() => {
    ms932Encoder.encode("\uB126");
  }, Error, "EncodingError U+B126");
  assertThrows(() => {
    ms932Encoder.encode("\uB127");
  }, Error, "EncodingError U+B127");
  assertThrows(() => {
    ms932Encoder.encode("\uB128");
  }, Error, "EncodingError U+B128");
  assertThrows(() => {
    ms932Encoder.encode("\uB129");
  }, Error, "EncodingError U+B129");
  assertThrows(() => {
    ms932Encoder.encode("\uB12A");
  }, Error, "EncodingError U+B12A");
  assertThrows(() => {
    ms932Encoder.encode("\uB12B");
  }, Error, "EncodingError U+B12B");
  assertThrows(() => {
    ms932Encoder.encode("\uB12C");
  }, Error, "EncodingError U+B12C");
  assertThrows(() => {
    ms932Encoder.encode("\uB12D");
  }, Error, "EncodingError U+B12D");
  assertThrows(() => {
    ms932Encoder.encode("\uB12E");
  }, Error, "EncodingError U+B12E");
  assertThrows(() => {
    ms932Encoder.encode("\uB12F");
  }, Error, "EncodingError U+B12F");
  assertThrows(() => {
    ms932Encoder.encode("\uB130");
  }, Error, "EncodingError U+B130");
  assertThrows(() => {
    ms932Encoder.encode("\uB131");
  }, Error, "EncodingError U+B131");
  assertThrows(() => {
    ms932Encoder.encode("\uB132");
  }, Error, "EncodingError U+B132");
  assertThrows(() => {
    ms932Encoder.encode("\uB133");
  }, Error, "EncodingError U+B133");
  assertThrows(() => {
    ms932Encoder.encode("\uB134");
  }, Error, "EncodingError U+B134");
  assertThrows(() => {
    ms932Encoder.encode("\uB135");
  }, Error, "EncodingError U+B135");
  assertThrows(() => {
    ms932Encoder.encode("\uB136");
  }, Error, "EncodingError U+B136");
  assertThrows(() => {
    ms932Encoder.encode("\uB137");
  }, Error, "EncodingError U+B137");
  assertThrows(() => {
    ms932Encoder.encode("\uB138");
  }, Error, "EncodingError U+B138");
  assertThrows(() => {
    ms932Encoder.encode("\uB139");
  }, Error, "EncodingError U+B139");
  assertThrows(() => {
    ms932Encoder.encode("\uB13A");
  }, Error, "EncodingError U+B13A");
  assertThrows(() => {
    ms932Encoder.encode("\uB13B");
  }, Error, "EncodingError U+B13B");
  assertThrows(() => {
    ms932Encoder.encode("\uB13C");
  }, Error, "EncodingError U+B13C");
  assertThrows(() => {
    ms932Encoder.encode("\uB13D");
  }, Error, "EncodingError U+B13D");
  assertThrows(() => {
    ms932Encoder.encode("\uB13E");
  }, Error, "EncodingError U+B13E");
  assertThrows(() => {
    ms932Encoder.encode("\uB13F");
  }, Error, "EncodingError U+B13F");
  assertThrows(() => {
    ms932Encoder.encode("\uB140");
  }, Error, "EncodingError U+B140");
  assertThrows(() => {
    ms932Encoder.encode("\uB141");
  }, Error, "EncodingError U+B141");
  assertThrows(() => {
    ms932Encoder.encode("\uB142");
  }, Error, "EncodingError U+B142");
  assertThrows(() => {
    ms932Encoder.encode("\uB143");
  }, Error, "EncodingError U+B143");
  assertThrows(() => {
    ms932Encoder.encode("\uB144");
  }, Error, "EncodingError U+B144");
  assertThrows(() => {
    ms932Encoder.encode("\uB145");
  }, Error, "EncodingError U+B145");
  assertThrows(() => {
    ms932Encoder.encode("\uB146");
  }, Error, "EncodingError U+B146");
  assertThrows(() => {
    ms932Encoder.encode("\uB147");
  }, Error, "EncodingError U+B147");
  assertThrows(() => {
    ms932Encoder.encode("\uB148");
  }, Error, "EncodingError U+B148");
  assertThrows(() => {
    ms932Encoder.encode("\uB149");
  }, Error, "EncodingError U+B149");
  assertThrows(() => {
    ms932Encoder.encode("\uB14A");
  }, Error, "EncodingError U+B14A");
  assertThrows(() => {
    ms932Encoder.encode("\uB14B");
  }, Error, "EncodingError U+B14B");
  assertThrows(() => {
    ms932Encoder.encode("\uB14C");
  }, Error, "EncodingError U+B14C");
  assertThrows(() => {
    ms932Encoder.encode("\uB14D");
  }, Error, "EncodingError U+B14D");
  assertThrows(() => {
    ms932Encoder.encode("\uB14E");
  }, Error, "EncodingError U+B14E");
  assertThrows(() => {
    ms932Encoder.encode("\uB14F");
  }, Error, "EncodingError U+B14F");
  assertThrows(() => {
    ms932Encoder.encode("\uB150");
  }, Error, "EncodingError U+B150");
  assertThrows(() => {
    ms932Encoder.encode("\uB151");
  }, Error, "EncodingError U+B151");
  assertThrows(() => {
    ms932Encoder.encode("\uB152");
  }, Error, "EncodingError U+B152");
  assertThrows(() => {
    ms932Encoder.encode("\uB153");
  }, Error, "EncodingError U+B153");
  assertThrows(() => {
    ms932Encoder.encode("\uB154");
  }, Error, "EncodingError U+B154");
  assertThrows(() => {
    ms932Encoder.encode("\uB155");
  }, Error, "EncodingError U+B155");
  assertThrows(() => {
    ms932Encoder.encode("\uB156");
  }, Error, "EncodingError U+B156");
  assertThrows(() => {
    ms932Encoder.encode("\uB157");
  }, Error, "EncodingError U+B157");
  assertThrows(() => {
    ms932Encoder.encode("\uB158");
  }, Error, "EncodingError U+B158");
  assertThrows(() => {
    ms932Encoder.encode("\uB159");
  }, Error, "EncodingError U+B159");
  assertThrows(() => {
    ms932Encoder.encode("\uB15A");
  }, Error, "EncodingError U+B15A");
  assertThrows(() => {
    ms932Encoder.encode("\uB15B");
  }, Error, "EncodingError U+B15B");
  assertThrows(() => {
    ms932Encoder.encode("\uB15C");
  }, Error, "EncodingError U+B15C");
  assertThrows(() => {
    ms932Encoder.encode("\uB15D");
  }, Error, "EncodingError U+B15D");
  assertThrows(() => {
    ms932Encoder.encode("\uB15E");
  }, Error, "EncodingError U+B15E");
  assertThrows(() => {
    ms932Encoder.encode("\uB15F");
  }, Error, "EncodingError U+B15F");
  assertThrows(() => {
    ms932Encoder.encode("\uB160");
  }, Error, "EncodingError U+B160");
  assertThrows(() => {
    ms932Encoder.encode("\uB161");
  }, Error, "EncodingError U+B161");
  assertThrows(() => {
    ms932Encoder.encode("\uB162");
  }, Error, "EncodingError U+B162");
  assertThrows(() => {
    ms932Encoder.encode("\uB163");
  }, Error, "EncodingError U+B163");
  assertThrows(() => {
    ms932Encoder.encode("\uB164");
  }, Error, "EncodingError U+B164");
  assertThrows(() => {
    ms932Encoder.encode("\uB165");
  }, Error, "EncodingError U+B165");
  assertThrows(() => {
    ms932Encoder.encode("\uB166");
  }, Error, "EncodingError U+B166");
  assertThrows(() => {
    ms932Encoder.encode("\uB167");
  }, Error, "EncodingError U+B167");
  assertThrows(() => {
    ms932Encoder.encode("\uB168");
  }, Error, "EncodingError U+B168");
  assertThrows(() => {
    ms932Encoder.encode("\uB169");
  }, Error, "EncodingError U+B169");
  assertThrows(() => {
    ms932Encoder.encode("\uB16A");
  }, Error, "EncodingError U+B16A");
  assertThrows(() => {
    ms932Encoder.encode("\uB16B");
  }, Error, "EncodingError U+B16B");
  assertThrows(() => {
    ms932Encoder.encode("\uB16C");
  }, Error, "EncodingError U+B16C");
  assertThrows(() => {
    ms932Encoder.encode("\uB16D");
  }, Error, "EncodingError U+B16D");
  assertThrows(() => {
    ms932Encoder.encode("\uB16E");
  }, Error, "EncodingError U+B16E");
  assertThrows(() => {
    ms932Encoder.encode("\uB16F");
  }, Error, "EncodingError U+B16F");
  assertThrows(() => {
    ms932Encoder.encode("\uB170");
  }, Error, "EncodingError U+B170");
  assertThrows(() => {
    ms932Encoder.encode("\uB171");
  }, Error, "EncodingError U+B171");
  assertThrows(() => {
    ms932Encoder.encode("\uB172");
  }, Error, "EncodingError U+B172");
  assertThrows(() => {
    ms932Encoder.encode("\uB173");
  }, Error, "EncodingError U+B173");
  assertThrows(() => {
    ms932Encoder.encode("\uB174");
  }, Error, "EncodingError U+B174");
  assertThrows(() => {
    ms932Encoder.encode("\uB175");
  }, Error, "EncodingError U+B175");
  assertThrows(() => {
    ms932Encoder.encode("\uB176");
  }, Error, "EncodingError U+B176");
  assertThrows(() => {
    ms932Encoder.encode("\uB177");
  }, Error, "EncodingError U+B177");
  assertThrows(() => {
    ms932Encoder.encode("\uB178");
  }, Error, "EncodingError U+B178");
  assertThrows(() => {
    ms932Encoder.encode("\uB179");
  }, Error, "EncodingError U+B179");
  assertThrows(() => {
    ms932Encoder.encode("\uB17A");
  }, Error, "EncodingError U+B17A");
  assertThrows(() => {
    ms932Encoder.encode("\uB17B");
  }, Error, "EncodingError U+B17B");
  assertThrows(() => {
    ms932Encoder.encode("\uB17C");
  }, Error, "EncodingError U+B17C");
  assertThrows(() => {
    ms932Encoder.encode("\uB17D");
  }, Error, "EncodingError U+B17D");
  assertThrows(() => {
    ms932Encoder.encode("\uB17E");
  }, Error, "EncodingError U+B17E");
  assertThrows(() => {
    ms932Encoder.encode("\uB17F");
  }, Error, "EncodingError U+B17F");
  assertThrows(() => {
    ms932Encoder.encode("\uB180");
  }, Error, "EncodingError U+B180");
  assertThrows(() => {
    ms932Encoder.encode("\uB181");
  }, Error, "EncodingError U+B181");
  assertThrows(() => {
    ms932Encoder.encode("\uB182");
  }, Error, "EncodingError U+B182");
  assertThrows(() => {
    ms932Encoder.encode("\uB183");
  }, Error, "EncodingError U+B183");
  assertThrows(() => {
    ms932Encoder.encode("\uB184");
  }, Error, "EncodingError U+B184");
  assertThrows(() => {
    ms932Encoder.encode("\uB185");
  }, Error, "EncodingError U+B185");
  assertThrows(() => {
    ms932Encoder.encode("\uB186");
  }, Error, "EncodingError U+B186");
  assertThrows(() => {
    ms932Encoder.encode("\uB187");
  }, Error, "EncodingError U+B187");
  assertThrows(() => {
    ms932Encoder.encode("\uB188");
  }, Error, "EncodingError U+B188");
  assertThrows(() => {
    ms932Encoder.encode("\uB189");
  }, Error, "EncodingError U+B189");
  assertThrows(() => {
    ms932Encoder.encode("\uB18A");
  }, Error, "EncodingError U+B18A");
  assertThrows(() => {
    ms932Encoder.encode("\uB18B");
  }, Error, "EncodingError U+B18B");
  assertThrows(() => {
    ms932Encoder.encode("\uB18C");
  }, Error, "EncodingError U+B18C");
  assertThrows(() => {
    ms932Encoder.encode("\uB18D");
  }, Error, "EncodingError U+B18D");
  assertThrows(() => {
    ms932Encoder.encode("\uB18E");
  }, Error, "EncodingError U+B18E");
  assertThrows(() => {
    ms932Encoder.encode("\uB18F");
  }, Error, "EncodingError U+B18F");
  assertThrows(() => {
    ms932Encoder.encode("\uB190");
  }, Error, "EncodingError U+B190");
  assertThrows(() => {
    ms932Encoder.encode("\uB191");
  }, Error, "EncodingError U+B191");
  assertThrows(() => {
    ms932Encoder.encode("\uB192");
  }, Error, "EncodingError U+B192");
  assertThrows(() => {
    ms932Encoder.encode("\uB193");
  }, Error, "EncodingError U+B193");
  assertThrows(() => {
    ms932Encoder.encode("\uB194");
  }, Error, "EncodingError U+B194");
  assertThrows(() => {
    ms932Encoder.encode("\uB195");
  }, Error, "EncodingError U+B195");
  assertThrows(() => {
    ms932Encoder.encode("\uB196");
  }, Error, "EncodingError U+B196");
  assertThrows(() => {
    ms932Encoder.encode("\uB197");
  }, Error, "EncodingError U+B197");
  assertThrows(() => {
    ms932Encoder.encode("\uB198");
  }, Error, "EncodingError U+B198");
  assertThrows(() => {
    ms932Encoder.encode("\uB199");
  }, Error, "EncodingError U+B199");
  assertThrows(() => {
    ms932Encoder.encode("\uB19A");
  }, Error, "EncodingError U+B19A");
  assertThrows(() => {
    ms932Encoder.encode("\uB19B");
  }, Error, "EncodingError U+B19B");
  assertThrows(() => {
    ms932Encoder.encode("\uB19C");
  }, Error, "EncodingError U+B19C");
  assertThrows(() => {
    ms932Encoder.encode("\uB19D");
  }, Error, "EncodingError U+B19D");
  assertThrows(() => {
    ms932Encoder.encode("\uB19E");
  }, Error, "EncodingError U+B19E");
  assertThrows(() => {
    ms932Encoder.encode("\uB19F");
  }, Error, "EncodingError U+B19F");
  assertThrows(() => {
    ms932Encoder.encode("\uB1A0");
  }, Error, "EncodingError U+B1A0");
  assertThrows(() => {
    ms932Encoder.encode("\uB1A1");
  }, Error, "EncodingError U+B1A1");
  assertThrows(() => {
    ms932Encoder.encode("\uB1A2");
  }, Error, "EncodingError U+B1A2");
  assertThrows(() => {
    ms932Encoder.encode("\uB1A3");
  }, Error, "EncodingError U+B1A3");
  assertThrows(() => {
    ms932Encoder.encode("\uB1A4");
  }, Error, "EncodingError U+B1A4");
  assertThrows(() => {
    ms932Encoder.encode("\uB1A5");
  }, Error, "EncodingError U+B1A5");
  assertThrows(() => {
    ms932Encoder.encode("\uB1A6");
  }, Error, "EncodingError U+B1A6");
  assertThrows(() => {
    ms932Encoder.encode("\uB1A7");
  }, Error, "EncodingError U+B1A7");
  assertThrows(() => {
    ms932Encoder.encode("\uB1A8");
  }, Error, "EncodingError U+B1A8");
  assertThrows(() => {
    ms932Encoder.encode("\uB1A9");
  }, Error, "EncodingError U+B1A9");
  assertThrows(() => {
    ms932Encoder.encode("\uB1AA");
  }, Error, "EncodingError U+B1AA");
  assertThrows(() => {
    ms932Encoder.encode("\uB1AB");
  }, Error, "EncodingError U+B1AB");
  assertThrows(() => {
    ms932Encoder.encode("\uB1AC");
  }, Error, "EncodingError U+B1AC");
  assertThrows(() => {
    ms932Encoder.encode("\uB1AD");
  }, Error, "EncodingError U+B1AD");
  assertThrows(() => {
    ms932Encoder.encode("\uB1AE");
  }, Error, "EncodingError U+B1AE");
  assertThrows(() => {
    ms932Encoder.encode("\uB1AF");
  }, Error, "EncodingError U+B1AF");
  assertThrows(() => {
    ms932Encoder.encode("\uB1B0");
  }, Error, "EncodingError U+B1B0");
  assertThrows(() => {
    ms932Encoder.encode("\uB1B1");
  }, Error, "EncodingError U+B1B1");
  assertThrows(() => {
    ms932Encoder.encode("\uB1B2");
  }, Error, "EncodingError U+B1B2");
  assertThrows(() => {
    ms932Encoder.encode("\uB1B3");
  }, Error, "EncodingError U+B1B3");
  assertThrows(() => {
    ms932Encoder.encode("\uB1B4");
  }, Error, "EncodingError U+B1B4");
  assertThrows(() => {
    ms932Encoder.encode("\uB1B5");
  }, Error, "EncodingError U+B1B5");
  assertThrows(() => {
    ms932Encoder.encode("\uB1B6");
  }, Error, "EncodingError U+B1B6");
  assertThrows(() => {
    ms932Encoder.encode("\uB1B7");
  }, Error, "EncodingError U+B1B7");
  assertThrows(() => {
    ms932Encoder.encode("\uB1B8");
  }, Error, "EncodingError U+B1B8");
  assertThrows(() => {
    ms932Encoder.encode("\uB1B9");
  }, Error, "EncodingError U+B1B9");
  assertThrows(() => {
    ms932Encoder.encode("\uB1BA");
  }, Error, "EncodingError U+B1BA");
  assertThrows(() => {
    ms932Encoder.encode("\uB1BB");
  }, Error, "EncodingError U+B1BB");
  assertThrows(() => {
    ms932Encoder.encode("\uB1BC");
  }, Error, "EncodingError U+B1BC");
  assertThrows(() => {
    ms932Encoder.encode("\uB1BD");
  }, Error, "EncodingError U+B1BD");
  assertThrows(() => {
    ms932Encoder.encode("\uB1BE");
  }, Error, "EncodingError U+B1BE");
  assertThrows(() => {
    ms932Encoder.encode("\uB1BF");
  }, Error, "EncodingError U+B1BF");
  assertThrows(() => {
    ms932Encoder.encode("\uB1C0");
  }, Error, "EncodingError U+B1C0");
  assertThrows(() => {
    ms932Encoder.encode("\uB1C1");
  }, Error, "EncodingError U+B1C1");
  assertThrows(() => {
    ms932Encoder.encode("\uB1C2");
  }, Error, "EncodingError U+B1C2");
  assertThrows(() => {
    ms932Encoder.encode("\uB1C3");
  }, Error, "EncodingError U+B1C3");
  assertThrows(() => {
    ms932Encoder.encode("\uB1C4");
  }, Error, "EncodingError U+B1C4");
  assertThrows(() => {
    ms932Encoder.encode("\uB1C5");
  }, Error, "EncodingError U+B1C5");
  assertThrows(() => {
    ms932Encoder.encode("\uB1C6");
  }, Error, "EncodingError U+B1C6");
  assertThrows(() => {
    ms932Encoder.encode("\uB1C7");
  }, Error, "EncodingError U+B1C7");
  assertThrows(() => {
    ms932Encoder.encode("\uB1C8");
  }, Error, "EncodingError U+B1C8");
  assertThrows(() => {
    ms932Encoder.encode("\uB1C9");
  }, Error, "EncodingError U+B1C9");
  assertThrows(() => {
    ms932Encoder.encode("\uB1CA");
  }, Error, "EncodingError U+B1CA");
  assertThrows(() => {
    ms932Encoder.encode("\uB1CB");
  }, Error, "EncodingError U+B1CB");
  assertThrows(() => {
    ms932Encoder.encode("\uB1CC");
  }, Error, "EncodingError U+B1CC");
  assertThrows(() => {
    ms932Encoder.encode("\uB1CD");
  }, Error, "EncodingError U+B1CD");
  assertThrows(() => {
    ms932Encoder.encode("\uB1CE");
  }, Error, "EncodingError U+B1CE");
  assertThrows(() => {
    ms932Encoder.encode("\uB1CF");
  }, Error, "EncodingError U+B1CF");
  assertThrows(() => {
    ms932Encoder.encode("\uB1D0");
  }, Error, "EncodingError U+B1D0");
  assertThrows(() => {
    ms932Encoder.encode("\uB1D1");
  }, Error, "EncodingError U+B1D1");
  assertThrows(() => {
    ms932Encoder.encode("\uB1D2");
  }, Error, "EncodingError U+B1D2");
  assertThrows(() => {
    ms932Encoder.encode("\uB1D3");
  }, Error, "EncodingError U+B1D3");
  assertThrows(() => {
    ms932Encoder.encode("\uB1D4");
  }, Error, "EncodingError U+B1D4");
  assertThrows(() => {
    ms932Encoder.encode("\uB1D5");
  }, Error, "EncodingError U+B1D5");
  assertThrows(() => {
    ms932Encoder.encode("\uB1D6");
  }, Error, "EncodingError U+B1D6");
  assertThrows(() => {
    ms932Encoder.encode("\uB1D7");
  }, Error, "EncodingError U+B1D7");
  assertThrows(() => {
    ms932Encoder.encode("\uB1D8");
  }, Error, "EncodingError U+B1D8");
  assertThrows(() => {
    ms932Encoder.encode("\uB1D9");
  }, Error, "EncodingError U+B1D9");
  assertThrows(() => {
    ms932Encoder.encode("\uB1DA");
  }, Error, "EncodingError U+B1DA");
  assertThrows(() => {
    ms932Encoder.encode("\uB1DB");
  }, Error, "EncodingError U+B1DB");
  assertThrows(() => {
    ms932Encoder.encode("\uB1DC");
  }, Error, "EncodingError U+B1DC");
  assertThrows(() => {
    ms932Encoder.encode("\uB1DD");
  }, Error, "EncodingError U+B1DD");
  assertThrows(() => {
    ms932Encoder.encode("\uB1DE");
  }, Error, "EncodingError U+B1DE");
  assertThrows(() => {
    ms932Encoder.encode("\uB1DF");
  }, Error, "EncodingError U+B1DF");
  assertThrows(() => {
    ms932Encoder.encode("\uB1E0");
  }, Error, "EncodingError U+B1E0");
  assertThrows(() => {
    ms932Encoder.encode("\uB1E1");
  }, Error, "EncodingError U+B1E1");
  assertThrows(() => {
    ms932Encoder.encode("\uB1E2");
  }, Error, "EncodingError U+B1E2");
  assertThrows(() => {
    ms932Encoder.encode("\uB1E3");
  }, Error, "EncodingError U+B1E3");
  assertThrows(() => {
    ms932Encoder.encode("\uB1E4");
  }, Error, "EncodingError U+B1E4");
  assertThrows(() => {
    ms932Encoder.encode("\uB1E5");
  }, Error, "EncodingError U+B1E5");
  assertThrows(() => {
    ms932Encoder.encode("\uB1E6");
  }, Error, "EncodingError U+B1E6");
  assertThrows(() => {
    ms932Encoder.encode("\uB1E7");
  }, Error, "EncodingError U+B1E7");
  assertThrows(() => {
    ms932Encoder.encode("\uB1E8");
  }, Error, "EncodingError U+B1E8");
  assertThrows(() => {
    ms932Encoder.encode("\uB1E9");
  }, Error, "EncodingError U+B1E9");
  assertThrows(() => {
    ms932Encoder.encode("\uB1EA");
  }, Error, "EncodingError U+B1EA");
  assertThrows(() => {
    ms932Encoder.encode("\uB1EB");
  }, Error, "EncodingError U+B1EB");
  assertThrows(() => {
    ms932Encoder.encode("\uB1EC");
  }, Error, "EncodingError U+B1EC");
  assertThrows(() => {
    ms932Encoder.encode("\uB1ED");
  }, Error, "EncodingError U+B1ED");
  assertThrows(() => {
    ms932Encoder.encode("\uB1EE");
  }, Error, "EncodingError U+B1EE");
  assertThrows(() => {
    ms932Encoder.encode("\uB1EF");
  }, Error, "EncodingError U+B1EF");
  assertThrows(() => {
    ms932Encoder.encode("\uB1F0");
  }, Error, "EncodingError U+B1F0");
  assertThrows(() => {
    ms932Encoder.encode("\uB1F1");
  }, Error, "EncodingError U+B1F1");
  assertThrows(() => {
    ms932Encoder.encode("\uB1F2");
  }, Error, "EncodingError U+B1F2");
  assertThrows(() => {
    ms932Encoder.encode("\uB1F3");
  }, Error, "EncodingError U+B1F3");
  assertThrows(() => {
    ms932Encoder.encode("\uB1F4");
  }, Error, "EncodingError U+B1F4");
  assertThrows(() => {
    ms932Encoder.encode("\uB1F5");
  }, Error, "EncodingError U+B1F5");
  assertThrows(() => {
    ms932Encoder.encode("\uB1F6");
  }, Error, "EncodingError U+B1F6");
  assertThrows(() => {
    ms932Encoder.encode("\uB1F7");
  }, Error, "EncodingError U+B1F7");
  assertThrows(() => {
    ms932Encoder.encode("\uB1F8");
  }, Error, "EncodingError U+B1F8");
  assertThrows(() => {
    ms932Encoder.encode("\uB1F9");
  }, Error, "EncodingError U+B1F9");
  assertThrows(() => {
    ms932Encoder.encode("\uB1FA");
  }, Error, "EncodingError U+B1FA");
  assertThrows(() => {
    ms932Encoder.encode("\uB1FB");
  }, Error, "EncodingError U+B1FB");
  assertThrows(() => {
    ms932Encoder.encode("\uB1FC");
  }, Error, "EncodingError U+B1FC");
  assertThrows(() => {
    ms932Encoder.encode("\uB1FD");
  }, Error, "EncodingError U+B1FD");
  assertThrows(() => {
    ms932Encoder.encode("\uB1FE");
  }, Error, "EncodingError U+B1FE");
  assertThrows(() => {
    ms932Encoder.encode("\uB1FF");
  }, Error, "EncodingError U+B1FF");
  assertThrows(() => {
    ms932Encoder.encode("\uB200");
  }, Error, "EncodingError U+B200");
  assertThrows(() => {
    ms932Encoder.encode("\uB201");
  }, Error, "EncodingError U+B201");
  assertThrows(() => {
    ms932Encoder.encode("\uB202");
  }, Error, "EncodingError U+B202");
  assertThrows(() => {
    ms932Encoder.encode("\uB203");
  }, Error, "EncodingError U+B203");
  assertThrows(() => {
    ms932Encoder.encode("\uB204");
  }, Error, "EncodingError U+B204");
  assertThrows(() => {
    ms932Encoder.encode("\uB205");
  }, Error, "EncodingError U+B205");
  assertThrows(() => {
    ms932Encoder.encode("\uB206");
  }, Error, "EncodingError U+B206");
  assertThrows(() => {
    ms932Encoder.encode("\uB207");
  }, Error, "EncodingError U+B207");
  assertThrows(() => {
    ms932Encoder.encode("\uB208");
  }, Error, "EncodingError U+B208");
  assertThrows(() => {
    ms932Encoder.encode("\uB209");
  }, Error, "EncodingError U+B209");
  assertThrows(() => {
    ms932Encoder.encode("\uB20A");
  }, Error, "EncodingError U+B20A");
  assertThrows(() => {
    ms932Encoder.encode("\uB20B");
  }, Error, "EncodingError U+B20B");
  assertThrows(() => {
    ms932Encoder.encode("\uB20C");
  }, Error, "EncodingError U+B20C");
  assertThrows(() => {
    ms932Encoder.encode("\uB20D");
  }, Error, "EncodingError U+B20D");
  assertThrows(() => {
    ms932Encoder.encode("\uB20E");
  }, Error, "EncodingError U+B20E");
  assertThrows(() => {
    ms932Encoder.encode("\uB20F");
  }, Error, "EncodingError U+B20F");
  assertThrows(() => {
    ms932Encoder.encode("\uB210");
  }, Error, "EncodingError U+B210");
  assertThrows(() => {
    ms932Encoder.encode("\uB211");
  }, Error, "EncodingError U+B211");
  assertThrows(() => {
    ms932Encoder.encode("\uB212");
  }, Error, "EncodingError U+B212");
  assertThrows(() => {
    ms932Encoder.encode("\uB213");
  }, Error, "EncodingError U+B213");
  assertThrows(() => {
    ms932Encoder.encode("\uB214");
  }, Error, "EncodingError U+B214");
  assertThrows(() => {
    ms932Encoder.encode("\uB215");
  }, Error, "EncodingError U+B215");
  assertThrows(() => {
    ms932Encoder.encode("\uB216");
  }, Error, "EncodingError U+B216");
  assertThrows(() => {
    ms932Encoder.encode("\uB217");
  }, Error, "EncodingError U+B217");
  assertThrows(() => {
    ms932Encoder.encode("\uB218");
  }, Error, "EncodingError U+B218");
  assertThrows(() => {
    ms932Encoder.encode("\uB219");
  }, Error, "EncodingError U+B219");
  assertThrows(() => {
    ms932Encoder.encode("\uB21A");
  }, Error, "EncodingError U+B21A");
  assertThrows(() => {
    ms932Encoder.encode("\uB21B");
  }, Error, "EncodingError U+B21B");
  assertThrows(() => {
    ms932Encoder.encode("\uB21C");
  }, Error, "EncodingError U+B21C");
  assertThrows(() => {
    ms932Encoder.encode("\uB21D");
  }, Error, "EncodingError U+B21D");
  assertThrows(() => {
    ms932Encoder.encode("\uB21E");
  }, Error, "EncodingError U+B21E");
  assertThrows(() => {
    ms932Encoder.encode("\uB21F");
  }, Error, "EncodingError U+B21F");
  assertThrows(() => {
    ms932Encoder.encode("\uB220");
  }, Error, "EncodingError U+B220");
  assertThrows(() => {
    ms932Encoder.encode("\uB221");
  }, Error, "EncodingError U+B221");
  assertThrows(() => {
    ms932Encoder.encode("\uB222");
  }, Error, "EncodingError U+B222");
  assertThrows(() => {
    ms932Encoder.encode("\uB223");
  }, Error, "EncodingError U+B223");
  assertThrows(() => {
    ms932Encoder.encode("\uB224");
  }, Error, "EncodingError U+B224");
  assertThrows(() => {
    ms932Encoder.encode("\uB225");
  }, Error, "EncodingError U+B225");
  assertThrows(() => {
    ms932Encoder.encode("\uB226");
  }, Error, "EncodingError U+B226");
  assertThrows(() => {
    ms932Encoder.encode("\uB227");
  }, Error, "EncodingError U+B227");
  assertThrows(() => {
    ms932Encoder.encode("\uB228");
  }, Error, "EncodingError U+B228");
  assertThrows(() => {
    ms932Encoder.encode("\uB229");
  }, Error, "EncodingError U+B229");
  assertThrows(() => {
    ms932Encoder.encode("\uB22A");
  }, Error, "EncodingError U+B22A");
  assertThrows(() => {
    ms932Encoder.encode("\uB22B");
  }, Error, "EncodingError U+B22B");
  assertThrows(() => {
    ms932Encoder.encode("\uB22C");
  }, Error, "EncodingError U+B22C");
  assertThrows(() => {
    ms932Encoder.encode("\uB22D");
  }, Error, "EncodingError U+B22D");
  assertThrows(() => {
    ms932Encoder.encode("\uB22E");
  }, Error, "EncodingError U+B22E");
  assertThrows(() => {
    ms932Encoder.encode("\uB22F");
  }, Error, "EncodingError U+B22F");
  assertThrows(() => {
    ms932Encoder.encode("\uB230");
  }, Error, "EncodingError U+B230");
  assertThrows(() => {
    ms932Encoder.encode("\uB231");
  }, Error, "EncodingError U+B231");
  assertThrows(() => {
    ms932Encoder.encode("\uB232");
  }, Error, "EncodingError U+B232");
  assertThrows(() => {
    ms932Encoder.encode("\uB233");
  }, Error, "EncodingError U+B233");
  assertThrows(() => {
    ms932Encoder.encode("\uB234");
  }, Error, "EncodingError U+B234");
  assertThrows(() => {
    ms932Encoder.encode("\uB235");
  }, Error, "EncodingError U+B235");
  assertThrows(() => {
    ms932Encoder.encode("\uB236");
  }, Error, "EncodingError U+B236");
  assertThrows(() => {
    ms932Encoder.encode("\uB237");
  }, Error, "EncodingError U+B237");
  assertThrows(() => {
    ms932Encoder.encode("\uB238");
  }, Error, "EncodingError U+B238");
  assertThrows(() => {
    ms932Encoder.encode("\uB239");
  }, Error, "EncodingError U+B239");
  assertThrows(() => {
    ms932Encoder.encode("\uB23A");
  }, Error, "EncodingError U+B23A");
  assertThrows(() => {
    ms932Encoder.encode("\uB23B");
  }, Error, "EncodingError U+B23B");
  assertThrows(() => {
    ms932Encoder.encode("\uB23C");
  }, Error, "EncodingError U+B23C");
  assertThrows(() => {
    ms932Encoder.encode("\uB23D");
  }, Error, "EncodingError U+B23D");
  assertThrows(() => {
    ms932Encoder.encode("\uB23E");
  }, Error, "EncodingError U+B23E");
  assertThrows(() => {
    ms932Encoder.encode("\uB23F");
  }, Error, "EncodingError U+B23F");
  assertThrows(() => {
    ms932Encoder.encode("\uB240");
  }, Error, "EncodingError U+B240");
  assertThrows(() => {
    ms932Encoder.encode("\uB241");
  }, Error, "EncodingError U+B241");
  assertThrows(() => {
    ms932Encoder.encode("\uB242");
  }, Error, "EncodingError U+B242");
  assertThrows(() => {
    ms932Encoder.encode("\uB243");
  }, Error, "EncodingError U+B243");
  assertThrows(() => {
    ms932Encoder.encode("\uB244");
  }, Error, "EncodingError U+B244");
  assertThrows(() => {
    ms932Encoder.encode("\uB245");
  }, Error, "EncodingError U+B245");
  assertThrows(() => {
    ms932Encoder.encode("\uB246");
  }, Error, "EncodingError U+B246");
  assertThrows(() => {
    ms932Encoder.encode("\uB247");
  }, Error, "EncodingError U+B247");
  assertThrows(() => {
    ms932Encoder.encode("\uB248");
  }, Error, "EncodingError U+B248");
  assertThrows(() => {
    ms932Encoder.encode("\uB249");
  }, Error, "EncodingError U+B249");
  assertThrows(() => {
    ms932Encoder.encode("\uB24A");
  }, Error, "EncodingError U+B24A");
  assertThrows(() => {
    ms932Encoder.encode("\uB24B");
  }, Error, "EncodingError U+B24B");
  assertThrows(() => {
    ms932Encoder.encode("\uB24C");
  }, Error, "EncodingError U+B24C");
  assertThrows(() => {
    ms932Encoder.encode("\uB24D");
  }, Error, "EncodingError U+B24D");
  assertThrows(() => {
    ms932Encoder.encode("\uB24E");
  }, Error, "EncodingError U+B24E");
  assertThrows(() => {
    ms932Encoder.encode("\uB24F");
  }, Error, "EncodingError U+B24F");
  assertThrows(() => {
    ms932Encoder.encode("\uB250");
  }, Error, "EncodingError U+B250");
  assertThrows(() => {
    ms932Encoder.encode("\uB251");
  }, Error, "EncodingError U+B251");
  assertThrows(() => {
    ms932Encoder.encode("\uB252");
  }, Error, "EncodingError U+B252");
  assertThrows(() => {
    ms932Encoder.encode("\uB253");
  }, Error, "EncodingError U+B253");
  assertThrows(() => {
    ms932Encoder.encode("\uB254");
  }, Error, "EncodingError U+B254");
  assertThrows(() => {
    ms932Encoder.encode("\uB255");
  }, Error, "EncodingError U+B255");
  assertThrows(() => {
    ms932Encoder.encode("\uB256");
  }, Error, "EncodingError U+B256");
  assertThrows(() => {
    ms932Encoder.encode("\uB257");
  }, Error, "EncodingError U+B257");
  assertThrows(() => {
    ms932Encoder.encode("\uB258");
  }, Error, "EncodingError U+B258");
  assertThrows(() => {
    ms932Encoder.encode("\uB259");
  }, Error, "EncodingError U+B259");
  assertThrows(() => {
    ms932Encoder.encode("\uB25A");
  }, Error, "EncodingError U+B25A");
  assertThrows(() => {
    ms932Encoder.encode("\uB25B");
  }, Error, "EncodingError U+B25B");
  assertThrows(() => {
    ms932Encoder.encode("\uB25C");
  }, Error, "EncodingError U+B25C");
  assertThrows(() => {
    ms932Encoder.encode("\uB25D");
  }, Error, "EncodingError U+B25D");
  assertThrows(() => {
    ms932Encoder.encode("\uB25E");
  }, Error, "EncodingError U+B25E");
  assertThrows(() => {
    ms932Encoder.encode("\uB25F");
  }, Error, "EncodingError U+B25F");
  assertThrows(() => {
    ms932Encoder.encode("\uB260");
  }, Error, "EncodingError U+B260");
  assertThrows(() => {
    ms932Encoder.encode("\uB261");
  }, Error, "EncodingError U+B261");
  assertThrows(() => {
    ms932Encoder.encode("\uB262");
  }, Error, "EncodingError U+B262");
  assertThrows(() => {
    ms932Encoder.encode("\uB263");
  }, Error, "EncodingError U+B263");
  assertThrows(() => {
    ms932Encoder.encode("\uB264");
  }, Error, "EncodingError U+B264");
  assertThrows(() => {
    ms932Encoder.encode("\uB265");
  }, Error, "EncodingError U+B265");
  assertThrows(() => {
    ms932Encoder.encode("\uB266");
  }, Error, "EncodingError U+B266");
  assertThrows(() => {
    ms932Encoder.encode("\uB267");
  }, Error, "EncodingError U+B267");
  assertThrows(() => {
    ms932Encoder.encode("\uB268");
  }, Error, "EncodingError U+B268");
  assertThrows(() => {
    ms932Encoder.encode("\uB269");
  }, Error, "EncodingError U+B269");
  assertThrows(() => {
    ms932Encoder.encode("\uB26A");
  }, Error, "EncodingError U+B26A");
  assertThrows(() => {
    ms932Encoder.encode("\uB26B");
  }, Error, "EncodingError U+B26B");
  assertThrows(() => {
    ms932Encoder.encode("\uB26C");
  }, Error, "EncodingError U+B26C");
  assertThrows(() => {
    ms932Encoder.encode("\uB26D");
  }, Error, "EncodingError U+B26D");
  assertThrows(() => {
    ms932Encoder.encode("\uB26E");
  }, Error, "EncodingError U+B26E");
  assertThrows(() => {
    ms932Encoder.encode("\uB26F");
  }, Error, "EncodingError U+B26F");
  assertThrows(() => {
    ms932Encoder.encode("\uB270");
  }, Error, "EncodingError U+B270");
  assertThrows(() => {
    ms932Encoder.encode("\uB271");
  }, Error, "EncodingError U+B271");
  assertThrows(() => {
    ms932Encoder.encode("\uB272");
  }, Error, "EncodingError U+B272");
  assertThrows(() => {
    ms932Encoder.encode("\uB273");
  }, Error, "EncodingError U+B273");
  assertThrows(() => {
    ms932Encoder.encode("\uB274");
  }, Error, "EncodingError U+B274");
  assertThrows(() => {
    ms932Encoder.encode("\uB275");
  }, Error, "EncodingError U+B275");
  assertThrows(() => {
    ms932Encoder.encode("\uB276");
  }, Error, "EncodingError U+B276");
  assertThrows(() => {
    ms932Encoder.encode("\uB277");
  }, Error, "EncodingError U+B277");
  assertThrows(() => {
    ms932Encoder.encode("\uB278");
  }, Error, "EncodingError U+B278");
  assertThrows(() => {
    ms932Encoder.encode("\uB279");
  }, Error, "EncodingError U+B279");
  assertThrows(() => {
    ms932Encoder.encode("\uB27A");
  }, Error, "EncodingError U+B27A");
  assertThrows(() => {
    ms932Encoder.encode("\uB27B");
  }, Error, "EncodingError U+B27B");
  assertThrows(() => {
    ms932Encoder.encode("\uB27C");
  }, Error, "EncodingError U+B27C");
  assertThrows(() => {
    ms932Encoder.encode("\uB27D");
  }, Error, "EncodingError U+B27D");
  assertThrows(() => {
    ms932Encoder.encode("\uB27E");
  }, Error, "EncodingError U+B27E");
  assertThrows(() => {
    ms932Encoder.encode("\uB27F");
  }, Error, "EncodingError U+B27F");
  assertThrows(() => {
    ms932Encoder.encode("\uB280");
  }, Error, "EncodingError U+B280");
  assertThrows(() => {
    ms932Encoder.encode("\uB281");
  }, Error, "EncodingError U+B281");
  assertThrows(() => {
    ms932Encoder.encode("\uB282");
  }, Error, "EncodingError U+B282");
  assertThrows(() => {
    ms932Encoder.encode("\uB283");
  }, Error, "EncodingError U+B283");
  assertThrows(() => {
    ms932Encoder.encode("\uB284");
  }, Error, "EncodingError U+B284");
  assertThrows(() => {
    ms932Encoder.encode("\uB285");
  }, Error, "EncodingError U+B285");
  assertThrows(() => {
    ms932Encoder.encode("\uB286");
  }, Error, "EncodingError U+B286");
  assertThrows(() => {
    ms932Encoder.encode("\uB287");
  }, Error, "EncodingError U+B287");
  assertThrows(() => {
    ms932Encoder.encode("\uB288");
  }, Error, "EncodingError U+B288");
  assertThrows(() => {
    ms932Encoder.encode("\uB289");
  }, Error, "EncodingError U+B289");
  assertThrows(() => {
    ms932Encoder.encode("\uB28A");
  }, Error, "EncodingError U+B28A");
  assertThrows(() => {
    ms932Encoder.encode("\uB28B");
  }, Error, "EncodingError U+B28B");
  assertThrows(() => {
    ms932Encoder.encode("\uB28C");
  }, Error, "EncodingError U+B28C");
  assertThrows(() => {
    ms932Encoder.encode("\uB28D");
  }, Error, "EncodingError U+B28D");
  assertThrows(() => {
    ms932Encoder.encode("\uB28E");
  }, Error, "EncodingError U+B28E");
  assertThrows(() => {
    ms932Encoder.encode("\uB28F");
  }, Error, "EncodingError U+B28F");
  assertThrows(() => {
    ms932Encoder.encode("\uB290");
  }, Error, "EncodingError U+B290");
  assertThrows(() => {
    ms932Encoder.encode("\uB291");
  }, Error, "EncodingError U+B291");
  assertThrows(() => {
    ms932Encoder.encode("\uB292");
  }, Error, "EncodingError U+B292");
  assertThrows(() => {
    ms932Encoder.encode("\uB293");
  }, Error, "EncodingError U+B293");
  assertThrows(() => {
    ms932Encoder.encode("\uB294");
  }, Error, "EncodingError U+B294");
  assertThrows(() => {
    ms932Encoder.encode("\uB295");
  }, Error, "EncodingError U+B295");
  assertThrows(() => {
    ms932Encoder.encode("\uB296");
  }, Error, "EncodingError U+B296");
  assertThrows(() => {
    ms932Encoder.encode("\uB297");
  }, Error, "EncodingError U+B297");
  assertThrows(() => {
    ms932Encoder.encode("\uB298");
  }, Error, "EncodingError U+B298");
  assertThrows(() => {
    ms932Encoder.encode("\uB299");
  }, Error, "EncodingError U+B299");
  assertThrows(() => {
    ms932Encoder.encode("\uB29A");
  }, Error, "EncodingError U+B29A");
  assertThrows(() => {
    ms932Encoder.encode("\uB29B");
  }, Error, "EncodingError U+B29B");
  assertThrows(() => {
    ms932Encoder.encode("\uB29C");
  }, Error, "EncodingError U+B29C");
  assertThrows(() => {
    ms932Encoder.encode("\uB29D");
  }, Error, "EncodingError U+B29D");
  assertThrows(() => {
    ms932Encoder.encode("\uB29E");
  }, Error, "EncodingError U+B29E");
  assertThrows(() => {
    ms932Encoder.encode("\uB29F");
  }, Error, "EncodingError U+B29F");
  assertThrows(() => {
    ms932Encoder.encode("\uB2A0");
  }, Error, "EncodingError U+B2A0");
  assertThrows(() => {
    ms932Encoder.encode("\uB2A1");
  }, Error, "EncodingError U+B2A1");
  assertThrows(() => {
    ms932Encoder.encode("\uB2A2");
  }, Error, "EncodingError U+B2A2");
  assertThrows(() => {
    ms932Encoder.encode("\uB2A3");
  }, Error, "EncodingError U+B2A3");
  assertThrows(() => {
    ms932Encoder.encode("\uB2A4");
  }, Error, "EncodingError U+B2A4");
  assertThrows(() => {
    ms932Encoder.encode("\uB2A5");
  }, Error, "EncodingError U+B2A5");
  assertThrows(() => {
    ms932Encoder.encode("\uB2A6");
  }, Error, "EncodingError U+B2A6");
  assertThrows(() => {
    ms932Encoder.encode("\uB2A7");
  }, Error, "EncodingError U+B2A7");
  assertThrows(() => {
    ms932Encoder.encode("\uB2A8");
  }, Error, "EncodingError U+B2A8");
  assertThrows(() => {
    ms932Encoder.encode("\uB2A9");
  }, Error, "EncodingError U+B2A9");
  assertThrows(() => {
    ms932Encoder.encode("\uB2AA");
  }, Error, "EncodingError U+B2AA");
  assertThrows(() => {
    ms932Encoder.encode("\uB2AB");
  }, Error, "EncodingError U+B2AB");
  assertThrows(() => {
    ms932Encoder.encode("\uB2AC");
  }, Error, "EncodingError U+B2AC");
  assertThrows(() => {
    ms932Encoder.encode("\uB2AD");
  }, Error, "EncodingError U+B2AD");
  assertThrows(() => {
    ms932Encoder.encode("\uB2AE");
  }, Error, "EncodingError U+B2AE");
  assertThrows(() => {
    ms932Encoder.encode("\uB2AF");
  }, Error, "EncodingError U+B2AF");
  assertThrows(() => {
    ms932Encoder.encode("\uB2B0");
  }, Error, "EncodingError U+B2B0");
  assertThrows(() => {
    ms932Encoder.encode("\uB2B1");
  }, Error, "EncodingError U+B2B1");
  assertThrows(() => {
    ms932Encoder.encode("\uB2B2");
  }, Error, "EncodingError U+B2B2");
  assertThrows(() => {
    ms932Encoder.encode("\uB2B3");
  }, Error, "EncodingError U+B2B3");
  assertThrows(() => {
    ms932Encoder.encode("\uB2B4");
  }, Error, "EncodingError U+B2B4");
  assertThrows(() => {
    ms932Encoder.encode("\uB2B5");
  }, Error, "EncodingError U+B2B5");
  assertThrows(() => {
    ms932Encoder.encode("\uB2B6");
  }, Error, "EncodingError U+B2B6");
  assertThrows(() => {
    ms932Encoder.encode("\uB2B7");
  }, Error, "EncodingError U+B2B7");
  assertThrows(() => {
    ms932Encoder.encode("\uB2B8");
  }, Error, "EncodingError U+B2B8");
  assertThrows(() => {
    ms932Encoder.encode("\uB2B9");
  }, Error, "EncodingError U+B2B9");
  assertThrows(() => {
    ms932Encoder.encode("\uB2BA");
  }, Error, "EncodingError U+B2BA");
  assertThrows(() => {
    ms932Encoder.encode("\uB2BB");
  }, Error, "EncodingError U+B2BB");
  assertThrows(() => {
    ms932Encoder.encode("\uB2BC");
  }, Error, "EncodingError U+B2BC");
  assertThrows(() => {
    ms932Encoder.encode("\uB2BD");
  }, Error, "EncodingError U+B2BD");
  assertThrows(() => {
    ms932Encoder.encode("\uB2BE");
  }, Error, "EncodingError U+B2BE");
  assertThrows(() => {
    ms932Encoder.encode("\uB2BF");
  }, Error, "EncodingError U+B2BF");
  assertThrows(() => {
    ms932Encoder.encode("\uB2C0");
  }, Error, "EncodingError U+B2C0");
  assertThrows(() => {
    ms932Encoder.encode("\uB2C1");
  }, Error, "EncodingError U+B2C1");
  assertThrows(() => {
    ms932Encoder.encode("\uB2C2");
  }, Error, "EncodingError U+B2C2");
  assertThrows(() => {
    ms932Encoder.encode("\uB2C3");
  }, Error, "EncodingError U+B2C3");
  assertThrows(() => {
    ms932Encoder.encode("\uB2C4");
  }, Error, "EncodingError U+B2C4");
  assertThrows(() => {
    ms932Encoder.encode("\uB2C5");
  }, Error, "EncodingError U+B2C5");
  assertThrows(() => {
    ms932Encoder.encode("\uB2C6");
  }, Error, "EncodingError U+B2C6");
  assertThrows(() => {
    ms932Encoder.encode("\uB2C7");
  }, Error, "EncodingError U+B2C7");
  assertThrows(() => {
    ms932Encoder.encode("\uB2C8");
  }, Error, "EncodingError U+B2C8");
  assertThrows(() => {
    ms932Encoder.encode("\uB2C9");
  }, Error, "EncodingError U+B2C9");
  assertThrows(() => {
    ms932Encoder.encode("\uB2CA");
  }, Error, "EncodingError U+B2CA");
  assertThrows(() => {
    ms932Encoder.encode("\uB2CB");
  }, Error, "EncodingError U+B2CB");
  assertThrows(() => {
    ms932Encoder.encode("\uB2CC");
  }, Error, "EncodingError U+B2CC");
  assertThrows(() => {
    ms932Encoder.encode("\uB2CD");
  }, Error, "EncodingError U+B2CD");
  assertThrows(() => {
    ms932Encoder.encode("\uB2CE");
  }, Error, "EncodingError U+B2CE");
  assertThrows(() => {
    ms932Encoder.encode("\uB2CF");
  }, Error, "EncodingError U+B2CF");
  assertThrows(() => {
    ms932Encoder.encode("\uB2D0");
  }, Error, "EncodingError U+B2D0");
  assertThrows(() => {
    ms932Encoder.encode("\uB2D1");
  }, Error, "EncodingError U+B2D1");
  assertThrows(() => {
    ms932Encoder.encode("\uB2D2");
  }, Error, "EncodingError U+B2D2");
  assertThrows(() => {
    ms932Encoder.encode("\uB2D3");
  }, Error, "EncodingError U+B2D3");
  assertThrows(() => {
    ms932Encoder.encode("\uB2D4");
  }, Error, "EncodingError U+B2D4");
  assertThrows(() => {
    ms932Encoder.encode("\uB2D5");
  }, Error, "EncodingError U+B2D5");
  assertThrows(() => {
    ms932Encoder.encode("\uB2D6");
  }, Error, "EncodingError U+B2D6");
  assertThrows(() => {
    ms932Encoder.encode("\uB2D7");
  }, Error, "EncodingError U+B2D7");
  assertThrows(() => {
    ms932Encoder.encode("\uB2D8");
  }, Error, "EncodingError U+B2D8");
  assertThrows(() => {
    ms932Encoder.encode("\uB2D9");
  }, Error, "EncodingError U+B2D9");
  assertThrows(() => {
    ms932Encoder.encode("\uB2DA");
  }, Error, "EncodingError U+B2DA");
  assertThrows(() => {
    ms932Encoder.encode("\uB2DB");
  }, Error, "EncodingError U+B2DB");
  assertThrows(() => {
    ms932Encoder.encode("\uB2DC");
  }, Error, "EncodingError U+B2DC");
  assertThrows(() => {
    ms932Encoder.encode("\uB2DD");
  }, Error, "EncodingError U+B2DD");
  assertThrows(() => {
    ms932Encoder.encode("\uB2DE");
  }, Error, "EncodingError U+B2DE");
  assertThrows(() => {
    ms932Encoder.encode("\uB2DF");
  }, Error, "EncodingError U+B2DF");
  assertThrows(() => {
    ms932Encoder.encode("\uB2E0");
  }, Error, "EncodingError U+B2E0");
  assertThrows(() => {
    ms932Encoder.encode("\uB2E1");
  }, Error, "EncodingError U+B2E1");
  assertThrows(() => {
    ms932Encoder.encode("\uB2E2");
  }, Error, "EncodingError U+B2E2");
  assertThrows(() => {
    ms932Encoder.encode("\uB2E3");
  }, Error, "EncodingError U+B2E3");
  assertThrows(() => {
    ms932Encoder.encode("\uB2E4");
  }, Error, "EncodingError U+B2E4");
  assertThrows(() => {
    ms932Encoder.encode("\uB2E5");
  }, Error, "EncodingError U+B2E5");
  assertThrows(() => {
    ms932Encoder.encode("\uB2E6");
  }, Error, "EncodingError U+B2E6");
  assertThrows(() => {
    ms932Encoder.encode("\uB2E7");
  }, Error, "EncodingError U+B2E7");
  assertThrows(() => {
    ms932Encoder.encode("\uB2E8");
  }, Error, "EncodingError U+B2E8");
  assertThrows(() => {
    ms932Encoder.encode("\uB2E9");
  }, Error, "EncodingError U+B2E9");
  assertThrows(() => {
    ms932Encoder.encode("\uB2EA");
  }, Error, "EncodingError U+B2EA");
  assertThrows(() => {
    ms932Encoder.encode("\uB2EB");
  }, Error, "EncodingError U+B2EB");
  assertThrows(() => {
    ms932Encoder.encode("\uB2EC");
  }, Error, "EncodingError U+B2EC");
  assertThrows(() => {
    ms932Encoder.encode("\uB2ED");
  }, Error, "EncodingError U+B2ED");
  assertThrows(() => {
    ms932Encoder.encode("\uB2EE");
  }, Error, "EncodingError U+B2EE");
  assertThrows(() => {
    ms932Encoder.encode("\uB2EF");
  }, Error, "EncodingError U+B2EF");
  assertThrows(() => {
    ms932Encoder.encode("\uB2F0");
  }, Error, "EncodingError U+B2F0");
  assertThrows(() => {
    ms932Encoder.encode("\uB2F1");
  }, Error, "EncodingError U+B2F1");
  assertThrows(() => {
    ms932Encoder.encode("\uB2F2");
  }, Error, "EncodingError U+B2F2");
  assertThrows(() => {
    ms932Encoder.encode("\uB2F3");
  }, Error, "EncodingError U+B2F3");
  assertThrows(() => {
    ms932Encoder.encode("\uB2F4");
  }, Error, "EncodingError U+B2F4");
  assertThrows(() => {
    ms932Encoder.encode("\uB2F5");
  }, Error, "EncodingError U+B2F5");
  assertThrows(() => {
    ms932Encoder.encode("\uB2F6");
  }, Error, "EncodingError U+B2F6");
  assertThrows(() => {
    ms932Encoder.encode("\uB2F7");
  }, Error, "EncodingError U+B2F7");
  assertThrows(() => {
    ms932Encoder.encode("\uB2F8");
  }, Error, "EncodingError U+B2F8");
  assertThrows(() => {
    ms932Encoder.encode("\uB2F9");
  }, Error, "EncodingError U+B2F9");
  assertThrows(() => {
    ms932Encoder.encode("\uB2FA");
  }, Error, "EncodingError U+B2FA");
  assertThrows(() => {
    ms932Encoder.encode("\uB2FB");
  }, Error, "EncodingError U+B2FB");
  assertThrows(() => {
    ms932Encoder.encode("\uB2FC");
  }, Error, "EncodingError U+B2FC");
  assertThrows(() => {
    ms932Encoder.encode("\uB2FD");
  }, Error, "EncodingError U+B2FD");
  assertThrows(() => {
    ms932Encoder.encode("\uB2FE");
  }, Error, "EncodingError U+B2FE");
  assertThrows(() => {
    ms932Encoder.encode("\uB2FF");
  }, Error, "EncodingError U+B2FF");
  assertThrows(() => {
    ms932Encoder.encode("\uB300");
  }, Error, "EncodingError U+B300");
  assertThrows(() => {
    ms932Encoder.encode("\uB301");
  }, Error, "EncodingError U+B301");
  assertThrows(() => {
    ms932Encoder.encode("\uB302");
  }, Error, "EncodingError U+B302");
  assertThrows(() => {
    ms932Encoder.encode("\uB303");
  }, Error, "EncodingError U+B303");
  assertThrows(() => {
    ms932Encoder.encode("\uB304");
  }, Error, "EncodingError U+B304");
  assertThrows(() => {
    ms932Encoder.encode("\uB305");
  }, Error, "EncodingError U+B305");
  assertThrows(() => {
    ms932Encoder.encode("\uB306");
  }, Error, "EncodingError U+B306");
  assertThrows(() => {
    ms932Encoder.encode("\uB307");
  }, Error, "EncodingError U+B307");
  assertThrows(() => {
    ms932Encoder.encode("\uB308");
  }, Error, "EncodingError U+B308");
  assertThrows(() => {
    ms932Encoder.encode("\uB309");
  }, Error, "EncodingError U+B309");
  assertThrows(() => {
    ms932Encoder.encode("\uB30A");
  }, Error, "EncodingError U+B30A");
  assertThrows(() => {
    ms932Encoder.encode("\uB30B");
  }, Error, "EncodingError U+B30B");
  assertThrows(() => {
    ms932Encoder.encode("\uB30C");
  }, Error, "EncodingError U+B30C");
  assertThrows(() => {
    ms932Encoder.encode("\uB30D");
  }, Error, "EncodingError U+B30D");
  assertThrows(() => {
    ms932Encoder.encode("\uB30E");
  }, Error, "EncodingError U+B30E");
  assertThrows(() => {
    ms932Encoder.encode("\uB30F");
  }, Error, "EncodingError U+B30F");
  assertThrows(() => {
    ms932Encoder.encode("\uB310");
  }, Error, "EncodingError U+B310");
  assertThrows(() => {
    ms932Encoder.encode("\uB311");
  }, Error, "EncodingError U+B311");
  assertThrows(() => {
    ms932Encoder.encode("\uB312");
  }, Error, "EncodingError U+B312");
  assertThrows(() => {
    ms932Encoder.encode("\uB313");
  }, Error, "EncodingError U+B313");
  assertThrows(() => {
    ms932Encoder.encode("\uB314");
  }, Error, "EncodingError U+B314");
  assertThrows(() => {
    ms932Encoder.encode("\uB315");
  }, Error, "EncodingError U+B315");
  assertThrows(() => {
    ms932Encoder.encode("\uB316");
  }, Error, "EncodingError U+B316");
  assertThrows(() => {
    ms932Encoder.encode("\uB317");
  }, Error, "EncodingError U+B317");
  assertThrows(() => {
    ms932Encoder.encode("\uB318");
  }, Error, "EncodingError U+B318");
  assertThrows(() => {
    ms932Encoder.encode("\uB319");
  }, Error, "EncodingError U+B319");
  assertThrows(() => {
    ms932Encoder.encode("\uB31A");
  }, Error, "EncodingError U+B31A");
  assertThrows(() => {
    ms932Encoder.encode("\uB31B");
  }, Error, "EncodingError U+B31B");
  assertThrows(() => {
    ms932Encoder.encode("\uB31C");
  }, Error, "EncodingError U+B31C");
  assertThrows(() => {
    ms932Encoder.encode("\uB31D");
  }, Error, "EncodingError U+B31D");
  assertThrows(() => {
    ms932Encoder.encode("\uB31E");
  }, Error, "EncodingError U+B31E");
  assertThrows(() => {
    ms932Encoder.encode("\uB31F");
  }, Error, "EncodingError U+B31F");
  assertThrows(() => {
    ms932Encoder.encode("\uB320");
  }, Error, "EncodingError U+B320");
  assertThrows(() => {
    ms932Encoder.encode("\uB321");
  }, Error, "EncodingError U+B321");
  assertThrows(() => {
    ms932Encoder.encode("\uB322");
  }, Error, "EncodingError U+B322");
  assertThrows(() => {
    ms932Encoder.encode("\uB323");
  }, Error, "EncodingError U+B323");
  assertThrows(() => {
    ms932Encoder.encode("\uB324");
  }, Error, "EncodingError U+B324");
  assertThrows(() => {
    ms932Encoder.encode("\uB325");
  }, Error, "EncodingError U+B325");
  assertThrows(() => {
    ms932Encoder.encode("\uB326");
  }, Error, "EncodingError U+B326");
  assertThrows(() => {
    ms932Encoder.encode("\uB327");
  }, Error, "EncodingError U+B327");
  assertThrows(() => {
    ms932Encoder.encode("\uB328");
  }, Error, "EncodingError U+B328");
  assertThrows(() => {
    ms932Encoder.encode("\uB329");
  }, Error, "EncodingError U+B329");
  assertThrows(() => {
    ms932Encoder.encode("\uB32A");
  }, Error, "EncodingError U+B32A");
  assertThrows(() => {
    ms932Encoder.encode("\uB32B");
  }, Error, "EncodingError U+B32B");
  assertThrows(() => {
    ms932Encoder.encode("\uB32C");
  }, Error, "EncodingError U+B32C");
  assertThrows(() => {
    ms932Encoder.encode("\uB32D");
  }, Error, "EncodingError U+B32D");
  assertThrows(() => {
    ms932Encoder.encode("\uB32E");
  }, Error, "EncodingError U+B32E");
  assertThrows(() => {
    ms932Encoder.encode("\uB32F");
  }, Error, "EncodingError U+B32F");
  assertThrows(() => {
    ms932Encoder.encode("\uB330");
  }, Error, "EncodingError U+B330");
  assertThrows(() => {
    ms932Encoder.encode("\uB331");
  }, Error, "EncodingError U+B331");
  assertThrows(() => {
    ms932Encoder.encode("\uB332");
  }, Error, "EncodingError U+B332");
  assertThrows(() => {
    ms932Encoder.encode("\uB333");
  }, Error, "EncodingError U+B333");
  assertThrows(() => {
    ms932Encoder.encode("\uB334");
  }, Error, "EncodingError U+B334");
  assertThrows(() => {
    ms932Encoder.encode("\uB335");
  }, Error, "EncodingError U+B335");
  assertThrows(() => {
    ms932Encoder.encode("\uB336");
  }, Error, "EncodingError U+B336");
  assertThrows(() => {
    ms932Encoder.encode("\uB337");
  }, Error, "EncodingError U+B337");
  assertThrows(() => {
    ms932Encoder.encode("\uB338");
  }, Error, "EncodingError U+B338");
  assertThrows(() => {
    ms932Encoder.encode("\uB339");
  }, Error, "EncodingError U+B339");
  assertThrows(() => {
    ms932Encoder.encode("\uB33A");
  }, Error, "EncodingError U+B33A");
  assertThrows(() => {
    ms932Encoder.encode("\uB33B");
  }, Error, "EncodingError U+B33B");
  assertThrows(() => {
    ms932Encoder.encode("\uB33C");
  }, Error, "EncodingError U+B33C");
  assertThrows(() => {
    ms932Encoder.encode("\uB33D");
  }, Error, "EncodingError U+B33D");
  assertThrows(() => {
    ms932Encoder.encode("\uB33E");
  }, Error, "EncodingError U+B33E");
  assertThrows(() => {
    ms932Encoder.encode("\uB33F");
  }, Error, "EncodingError U+B33F");
  assertThrows(() => {
    ms932Encoder.encode("\uB340");
  }, Error, "EncodingError U+B340");
  assertThrows(() => {
    ms932Encoder.encode("\uB341");
  }, Error, "EncodingError U+B341");
  assertThrows(() => {
    ms932Encoder.encode("\uB342");
  }, Error, "EncodingError U+B342");
  assertThrows(() => {
    ms932Encoder.encode("\uB343");
  }, Error, "EncodingError U+B343");
  assertThrows(() => {
    ms932Encoder.encode("\uB344");
  }, Error, "EncodingError U+B344");
  assertThrows(() => {
    ms932Encoder.encode("\uB345");
  }, Error, "EncodingError U+B345");
  assertThrows(() => {
    ms932Encoder.encode("\uB346");
  }, Error, "EncodingError U+B346");
  assertThrows(() => {
    ms932Encoder.encode("\uB347");
  }, Error, "EncodingError U+B347");
  assertThrows(() => {
    ms932Encoder.encode("\uB348");
  }, Error, "EncodingError U+B348");
  assertThrows(() => {
    ms932Encoder.encode("\uB349");
  }, Error, "EncodingError U+B349");
  assertThrows(() => {
    ms932Encoder.encode("\uB34A");
  }, Error, "EncodingError U+B34A");
  assertThrows(() => {
    ms932Encoder.encode("\uB34B");
  }, Error, "EncodingError U+B34B");
  assertThrows(() => {
    ms932Encoder.encode("\uB34C");
  }, Error, "EncodingError U+B34C");
  assertThrows(() => {
    ms932Encoder.encode("\uB34D");
  }, Error, "EncodingError U+B34D");
  assertThrows(() => {
    ms932Encoder.encode("\uB34E");
  }, Error, "EncodingError U+B34E");
  assertThrows(() => {
    ms932Encoder.encode("\uB34F");
  }, Error, "EncodingError U+B34F");
  assertThrows(() => {
    ms932Encoder.encode("\uB350");
  }, Error, "EncodingError U+B350");
  assertThrows(() => {
    ms932Encoder.encode("\uB351");
  }, Error, "EncodingError U+B351");
  assertThrows(() => {
    ms932Encoder.encode("\uB352");
  }, Error, "EncodingError U+B352");
  assertThrows(() => {
    ms932Encoder.encode("\uB353");
  }, Error, "EncodingError U+B353");
  assertThrows(() => {
    ms932Encoder.encode("\uB354");
  }, Error, "EncodingError U+B354");
  assertThrows(() => {
    ms932Encoder.encode("\uB355");
  }, Error, "EncodingError U+B355");
  assertThrows(() => {
    ms932Encoder.encode("\uB356");
  }, Error, "EncodingError U+B356");
  assertThrows(() => {
    ms932Encoder.encode("\uB357");
  }, Error, "EncodingError U+B357");
  assertThrows(() => {
    ms932Encoder.encode("\uB358");
  }, Error, "EncodingError U+B358");
  assertThrows(() => {
    ms932Encoder.encode("\uB359");
  }, Error, "EncodingError U+B359");
  assertThrows(() => {
    ms932Encoder.encode("\uB35A");
  }, Error, "EncodingError U+B35A");
  assertThrows(() => {
    ms932Encoder.encode("\uB35B");
  }, Error, "EncodingError U+B35B");
  assertThrows(() => {
    ms932Encoder.encode("\uB35C");
  }, Error, "EncodingError U+B35C");
  assertThrows(() => {
    ms932Encoder.encode("\uB35D");
  }, Error, "EncodingError U+B35D");
  assertThrows(() => {
    ms932Encoder.encode("\uB35E");
  }, Error, "EncodingError U+B35E");
  assertThrows(() => {
    ms932Encoder.encode("\uB35F");
  }, Error, "EncodingError U+B35F");
  assertThrows(() => {
    ms932Encoder.encode("\uB360");
  }, Error, "EncodingError U+B360");
  assertThrows(() => {
    ms932Encoder.encode("\uB361");
  }, Error, "EncodingError U+B361");
  assertThrows(() => {
    ms932Encoder.encode("\uB362");
  }, Error, "EncodingError U+B362");
  assertThrows(() => {
    ms932Encoder.encode("\uB363");
  }, Error, "EncodingError U+B363");
  assertThrows(() => {
    ms932Encoder.encode("\uB364");
  }, Error, "EncodingError U+B364");
  assertThrows(() => {
    ms932Encoder.encode("\uB365");
  }, Error, "EncodingError U+B365");
  assertThrows(() => {
    ms932Encoder.encode("\uB366");
  }, Error, "EncodingError U+B366");
  assertThrows(() => {
    ms932Encoder.encode("\uB367");
  }, Error, "EncodingError U+B367");
  assertThrows(() => {
    ms932Encoder.encode("\uB368");
  }, Error, "EncodingError U+B368");
  assertThrows(() => {
    ms932Encoder.encode("\uB369");
  }, Error, "EncodingError U+B369");
  assertThrows(() => {
    ms932Encoder.encode("\uB36A");
  }, Error, "EncodingError U+B36A");
  assertThrows(() => {
    ms932Encoder.encode("\uB36B");
  }, Error, "EncodingError U+B36B");
  assertThrows(() => {
    ms932Encoder.encode("\uB36C");
  }, Error, "EncodingError U+B36C");
  assertThrows(() => {
    ms932Encoder.encode("\uB36D");
  }, Error, "EncodingError U+B36D");
  assertThrows(() => {
    ms932Encoder.encode("\uB36E");
  }, Error, "EncodingError U+B36E");
  assertThrows(() => {
    ms932Encoder.encode("\uB36F");
  }, Error, "EncodingError U+B36F");
  assertThrows(() => {
    ms932Encoder.encode("\uB370");
  }, Error, "EncodingError U+B370");
  assertThrows(() => {
    ms932Encoder.encode("\uB371");
  }, Error, "EncodingError U+B371");
  assertThrows(() => {
    ms932Encoder.encode("\uB372");
  }, Error, "EncodingError U+B372");
  assertThrows(() => {
    ms932Encoder.encode("\uB373");
  }, Error, "EncodingError U+B373");
  assertThrows(() => {
    ms932Encoder.encode("\uB374");
  }, Error, "EncodingError U+B374");
  assertThrows(() => {
    ms932Encoder.encode("\uB375");
  }, Error, "EncodingError U+B375");
  assertThrows(() => {
    ms932Encoder.encode("\uB376");
  }, Error, "EncodingError U+B376");
  assertThrows(() => {
    ms932Encoder.encode("\uB377");
  }, Error, "EncodingError U+B377");
  assertThrows(() => {
    ms932Encoder.encode("\uB378");
  }, Error, "EncodingError U+B378");
  assertThrows(() => {
    ms932Encoder.encode("\uB379");
  }, Error, "EncodingError U+B379");
  assertThrows(() => {
    ms932Encoder.encode("\uB37A");
  }, Error, "EncodingError U+B37A");
  assertThrows(() => {
    ms932Encoder.encode("\uB37B");
  }, Error, "EncodingError U+B37B");
  assertThrows(() => {
    ms932Encoder.encode("\uB37C");
  }, Error, "EncodingError U+B37C");
  assertThrows(() => {
    ms932Encoder.encode("\uB37D");
  }, Error, "EncodingError U+B37D");
  assertThrows(() => {
    ms932Encoder.encode("\uB37E");
  }, Error, "EncodingError U+B37E");
  assertThrows(() => {
    ms932Encoder.encode("\uB37F");
  }, Error, "EncodingError U+B37F");
  assertThrows(() => {
    ms932Encoder.encode("\uB380");
  }, Error, "EncodingError U+B380");
  assertThrows(() => {
    ms932Encoder.encode("\uB381");
  }, Error, "EncodingError U+B381");
  assertThrows(() => {
    ms932Encoder.encode("\uB382");
  }, Error, "EncodingError U+B382");
  assertThrows(() => {
    ms932Encoder.encode("\uB383");
  }, Error, "EncodingError U+B383");
  assertThrows(() => {
    ms932Encoder.encode("\uB384");
  }, Error, "EncodingError U+B384");
  assertThrows(() => {
    ms932Encoder.encode("\uB385");
  }, Error, "EncodingError U+B385");
  assertThrows(() => {
    ms932Encoder.encode("\uB386");
  }, Error, "EncodingError U+B386");
  assertThrows(() => {
    ms932Encoder.encode("\uB387");
  }, Error, "EncodingError U+B387");
  assertThrows(() => {
    ms932Encoder.encode("\uB388");
  }, Error, "EncodingError U+B388");
  assertThrows(() => {
    ms932Encoder.encode("\uB389");
  }, Error, "EncodingError U+B389");
  assertThrows(() => {
    ms932Encoder.encode("\uB38A");
  }, Error, "EncodingError U+B38A");
  assertThrows(() => {
    ms932Encoder.encode("\uB38B");
  }, Error, "EncodingError U+B38B");
  assertThrows(() => {
    ms932Encoder.encode("\uB38C");
  }, Error, "EncodingError U+B38C");
  assertThrows(() => {
    ms932Encoder.encode("\uB38D");
  }, Error, "EncodingError U+B38D");
  assertThrows(() => {
    ms932Encoder.encode("\uB38E");
  }, Error, "EncodingError U+B38E");
  assertThrows(() => {
    ms932Encoder.encode("\uB38F");
  }, Error, "EncodingError U+B38F");
  assertThrows(() => {
    ms932Encoder.encode("\uB390");
  }, Error, "EncodingError U+B390");
  assertThrows(() => {
    ms932Encoder.encode("\uB391");
  }, Error, "EncodingError U+B391");
  assertThrows(() => {
    ms932Encoder.encode("\uB392");
  }, Error, "EncodingError U+B392");
  assertThrows(() => {
    ms932Encoder.encode("\uB393");
  }, Error, "EncodingError U+B393");
  assertThrows(() => {
    ms932Encoder.encode("\uB394");
  }, Error, "EncodingError U+B394");
  assertThrows(() => {
    ms932Encoder.encode("\uB395");
  }, Error, "EncodingError U+B395");
  assertThrows(() => {
    ms932Encoder.encode("\uB396");
  }, Error, "EncodingError U+B396");
  assertThrows(() => {
    ms932Encoder.encode("\uB397");
  }, Error, "EncodingError U+B397");
  assertThrows(() => {
    ms932Encoder.encode("\uB398");
  }, Error, "EncodingError U+B398");
  assertThrows(() => {
    ms932Encoder.encode("\uB399");
  }, Error, "EncodingError U+B399");
  assertThrows(() => {
    ms932Encoder.encode("\uB39A");
  }, Error, "EncodingError U+B39A");
  assertThrows(() => {
    ms932Encoder.encode("\uB39B");
  }, Error, "EncodingError U+B39B");
  assertThrows(() => {
    ms932Encoder.encode("\uB39C");
  }, Error, "EncodingError U+B39C");
  assertThrows(() => {
    ms932Encoder.encode("\uB39D");
  }, Error, "EncodingError U+B39D");
  assertThrows(() => {
    ms932Encoder.encode("\uB39E");
  }, Error, "EncodingError U+B39E");
  assertThrows(() => {
    ms932Encoder.encode("\uB39F");
  }, Error, "EncodingError U+B39F");
  assertThrows(() => {
    ms932Encoder.encode("\uB3A0");
  }, Error, "EncodingError U+B3A0");
  assertThrows(() => {
    ms932Encoder.encode("\uB3A1");
  }, Error, "EncodingError U+B3A1");
  assertThrows(() => {
    ms932Encoder.encode("\uB3A2");
  }, Error, "EncodingError U+B3A2");
  assertThrows(() => {
    ms932Encoder.encode("\uB3A3");
  }, Error, "EncodingError U+B3A3");
  assertThrows(() => {
    ms932Encoder.encode("\uB3A4");
  }, Error, "EncodingError U+B3A4");
  assertThrows(() => {
    ms932Encoder.encode("\uB3A5");
  }, Error, "EncodingError U+B3A5");
  assertThrows(() => {
    ms932Encoder.encode("\uB3A6");
  }, Error, "EncodingError U+B3A6");
  assertThrows(() => {
    ms932Encoder.encode("\uB3A7");
  }, Error, "EncodingError U+B3A7");
  assertThrows(() => {
    ms932Encoder.encode("\uB3A8");
  }, Error, "EncodingError U+B3A8");
  assertThrows(() => {
    ms932Encoder.encode("\uB3A9");
  }, Error, "EncodingError U+B3A9");
  assertThrows(() => {
    ms932Encoder.encode("\uB3AA");
  }, Error, "EncodingError U+B3AA");
  assertThrows(() => {
    ms932Encoder.encode("\uB3AB");
  }, Error, "EncodingError U+B3AB");
  assertThrows(() => {
    ms932Encoder.encode("\uB3AC");
  }, Error, "EncodingError U+B3AC");
  assertThrows(() => {
    ms932Encoder.encode("\uB3AD");
  }, Error, "EncodingError U+B3AD");
  assertThrows(() => {
    ms932Encoder.encode("\uB3AE");
  }, Error, "EncodingError U+B3AE");
  assertThrows(() => {
    ms932Encoder.encode("\uB3AF");
  }, Error, "EncodingError U+B3AF");
  assertThrows(() => {
    ms932Encoder.encode("\uB3B0");
  }, Error, "EncodingError U+B3B0");
  assertThrows(() => {
    ms932Encoder.encode("\uB3B1");
  }, Error, "EncodingError U+B3B1");
  assertThrows(() => {
    ms932Encoder.encode("\uB3B2");
  }, Error, "EncodingError U+B3B2");
  assertThrows(() => {
    ms932Encoder.encode("\uB3B3");
  }, Error, "EncodingError U+B3B3");
  assertThrows(() => {
    ms932Encoder.encode("\uB3B4");
  }, Error, "EncodingError U+B3B4");
  assertThrows(() => {
    ms932Encoder.encode("\uB3B5");
  }, Error, "EncodingError U+B3B5");
  assertThrows(() => {
    ms932Encoder.encode("\uB3B6");
  }, Error, "EncodingError U+B3B6");
  assertThrows(() => {
    ms932Encoder.encode("\uB3B7");
  }, Error, "EncodingError U+B3B7");
  assertThrows(() => {
    ms932Encoder.encode("\uB3B8");
  }, Error, "EncodingError U+B3B8");
  assertThrows(() => {
    ms932Encoder.encode("\uB3B9");
  }, Error, "EncodingError U+B3B9");
  assertThrows(() => {
    ms932Encoder.encode("\uB3BA");
  }, Error, "EncodingError U+B3BA");
  assertThrows(() => {
    ms932Encoder.encode("\uB3BB");
  }, Error, "EncodingError U+B3BB");
  assertThrows(() => {
    ms932Encoder.encode("\uB3BC");
  }, Error, "EncodingError U+B3BC");
  assertThrows(() => {
    ms932Encoder.encode("\uB3BD");
  }, Error, "EncodingError U+B3BD");
  assertThrows(() => {
    ms932Encoder.encode("\uB3BE");
  }, Error, "EncodingError U+B3BE");
  assertThrows(() => {
    ms932Encoder.encode("\uB3BF");
  }, Error, "EncodingError U+B3BF");
  assertThrows(() => {
    ms932Encoder.encode("\uB3C0");
  }, Error, "EncodingError U+B3C0");
  assertThrows(() => {
    ms932Encoder.encode("\uB3C1");
  }, Error, "EncodingError U+B3C1");
  assertThrows(() => {
    ms932Encoder.encode("\uB3C2");
  }, Error, "EncodingError U+B3C2");
  assertThrows(() => {
    ms932Encoder.encode("\uB3C3");
  }, Error, "EncodingError U+B3C3");
  assertThrows(() => {
    ms932Encoder.encode("\uB3C4");
  }, Error, "EncodingError U+B3C4");
  assertThrows(() => {
    ms932Encoder.encode("\uB3C5");
  }, Error, "EncodingError U+B3C5");
  assertThrows(() => {
    ms932Encoder.encode("\uB3C6");
  }, Error, "EncodingError U+B3C6");
  assertThrows(() => {
    ms932Encoder.encode("\uB3C7");
  }, Error, "EncodingError U+B3C7");
  assertThrows(() => {
    ms932Encoder.encode("\uB3C8");
  }, Error, "EncodingError U+B3C8");
  assertThrows(() => {
    ms932Encoder.encode("\uB3C9");
  }, Error, "EncodingError U+B3C9");
  assertThrows(() => {
    ms932Encoder.encode("\uB3CA");
  }, Error, "EncodingError U+B3CA");
  assertThrows(() => {
    ms932Encoder.encode("\uB3CB");
  }, Error, "EncodingError U+B3CB");
  assertThrows(() => {
    ms932Encoder.encode("\uB3CC");
  }, Error, "EncodingError U+B3CC");
  assertThrows(() => {
    ms932Encoder.encode("\uB3CD");
  }, Error, "EncodingError U+B3CD");
  assertThrows(() => {
    ms932Encoder.encode("\uB3CE");
  }, Error, "EncodingError U+B3CE");
  assertThrows(() => {
    ms932Encoder.encode("\uB3CF");
  }, Error, "EncodingError U+B3CF");
  assertThrows(() => {
    ms932Encoder.encode("\uB3D0");
  }, Error, "EncodingError U+B3D0");
  assertThrows(() => {
    ms932Encoder.encode("\uB3D1");
  }, Error, "EncodingError U+B3D1");
  assertThrows(() => {
    ms932Encoder.encode("\uB3D2");
  }, Error, "EncodingError U+B3D2");
  assertThrows(() => {
    ms932Encoder.encode("\uB3D3");
  }, Error, "EncodingError U+B3D3");
  assertThrows(() => {
    ms932Encoder.encode("\uB3D4");
  }, Error, "EncodingError U+B3D4");
  assertThrows(() => {
    ms932Encoder.encode("\uB3D5");
  }, Error, "EncodingError U+B3D5");
  assertThrows(() => {
    ms932Encoder.encode("\uB3D6");
  }, Error, "EncodingError U+B3D6");
  assertThrows(() => {
    ms932Encoder.encode("\uB3D7");
  }, Error, "EncodingError U+B3D7");
  assertThrows(() => {
    ms932Encoder.encode("\uB3D8");
  }, Error, "EncodingError U+B3D8");
  assertThrows(() => {
    ms932Encoder.encode("\uB3D9");
  }, Error, "EncodingError U+B3D9");
  assertThrows(() => {
    ms932Encoder.encode("\uB3DA");
  }, Error, "EncodingError U+B3DA");
  assertThrows(() => {
    ms932Encoder.encode("\uB3DB");
  }, Error, "EncodingError U+B3DB");
  assertThrows(() => {
    ms932Encoder.encode("\uB3DC");
  }, Error, "EncodingError U+B3DC");
  assertThrows(() => {
    ms932Encoder.encode("\uB3DD");
  }, Error, "EncodingError U+B3DD");
  assertThrows(() => {
    ms932Encoder.encode("\uB3DE");
  }, Error, "EncodingError U+B3DE");
  assertThrows(() => {
    ms932Encoder.encode("\uB3DF");
  }, Error, "EncodingError U+B3DF");
  assertThrows(() => {
    ms932Encoder.encode("\uB3E0");
  }, Error, "EncodingError U+B3E0");
  assertThrows(() => {
    ms932Encoder.encode("\uB3E1");
  }, Error, "EncodingError U+B3E1");
  assertThrows(() => {
    ms932Encoder.encode("\uB3E2");
  }, Error, "EncodingError U+B3E2");
  assertThrows(() => {
    ms932Encoder.encode("\uB3E3");
  }, Error, "EncodingError U+B3E3");
  assertThrows(() => {
    ms932Encoder.encode("\uB3E4");
  }, Error, "EncodingError U+B3E4");
  assertThrows(() => {
    ms932Encoder.encode("\uB3E5");
  }, Error, "EncodingError U+B3E5");
  assertThrows(() => {
    ms932Encoder.encode("\uB3E6");
  }, Error, "EncodingError U+B3E6");
  assertThrows(() => {
    ms932Encoder.encode("\uB3E7");
  }, Error, "EncodingError U+B3E7");
  assertThrows(() => {
    ms932Encoder.encode("\uB3E8");
  }, Error, "EncodingError U+B3E8");
  assertThrows(() => {
    ms932Encoder.encode("\uB3E9");
  }, Error, "EncodingError U+B3E9");
  assertThrows(() => {
    ms932Encoder.encode("\uB3EA");
  }, Error, "EncodingError U+B3EA");
  assertThrows(() => {
    ms932Encoder.encode("\uB3EB");
  }, Error, "EncodingError U+B3EB");
  assertThrows(() => {
    ms932Encoder.encode("\uB3EC");
  }, Error, "EncodingError U+B3EC");
  assertThrows(() => {
    ms932Encoder.encode("\uB3ED");
  }, Error, "EncodingError U+B3ED");
  assertThrows(() => {
    ms932Encoder.encode("\uB3EE");
  }, Error, "EncodingError U+B3EE");
  assertThrows(() => {
    ms932Encoder.encode("\uB3EF");
  }, Error, "EncodingError U+B3EF");
  assertThrows(() => {
    ms932Encoder.encode("\uB3F0");
  }, Error, "EncodingError U+B3F0");
  assertThrows(() => {
    ms932Encoder.encode("\uB3F1");
  }, Error, "EncodingError U+B3F1");
  assertThrows(() => {
    ms932Encoder.encode("\uB3F2");
  }, Error, "EncodingError U+B3F2");
  assertThrows(() => {
    ms932Encoder.encode("\uB3F3");
  }, Error, "EncodingError U+B3F3");
  assertThrows(() => {
    ms932Encoder.encode("\uB3F4");
  }, Error, "EncodingError U+B3F4");
  assertThrows(() => {
    ms932Encoder.encode("\uB3F5");
  }, Error, "EncodingError U+B3F5");
  assertThrows(() => {
    ms932Encoder.encode("\uB3F6");
  }, Error, "EncodingError U+B3F6");
  assertThrows(() => {
    ms932Encoder.encode("\uB3F7");
  }, Error, "EncodingError U+B3F7");
  assertThrows(() => {
    ms932Encoder.encode("\uB3F8");
  }, Error, "EncodingError U+B3F8");
  assertThrows(() => {
    ms932Encoder.encode("\uB3F9");
  }, Error, "EncodingError U+B3F9");
  assertThrows(() => {
    ms932Encoder.encode("\uB3FA");
  }, Error, "EncodingError U+B3FA");
  assertThrows(() => {
    ms932Encoder.encode("\uB3FB");
  }, Error, "EncodingError U+B3FB");
  assertThrows(() => {
    ms932Encoder.encode("\uB3FC");
  }, Error, "EncodingError U+B3FC");
  assertThrows(() => {
    ms932Encoder.encode("\uB3FD");
  }, Error, "EncodingError U+B3FD");
  assertThrows(() => {
    ms932Encoder.encode("\uB3FE");
  }, Error, "EncodingError U+B3FE");
  assertThrows(() => {
    ms932Encoder.encode("\uB3FF");
  }, Error, "EncodingError U+B3FF");
  assertThrows(() => {
    ms932Encoder.encode("\uB400");
  }, Error, "EncodingError U+B400");
  assertThrows(() => {
    ms932Encoder.encode("\uB401");
  }, Error, "EncodingError U+B401");
  assertThrows(() => {
    ms932Encoder.encode("\uB402");
  }, Error, "EncodingError U+B402");
  assertThrows(() => {
    ms932Encoder.encode("\uB403");
  }, Error, "EncodingError U+B403");
  assertThrows(() => {
    ms932Encoder.encode("\uB404");
  }, Error, "EncodingError U+B404");
  assertThrows(() => {
    ms932Encoder.encode("\uB405");
  }, Error, "EncodingError U+B405");
  assertThrows(() => {
    ms932Encoder.encode("\uB406");
  }, Error, "EncodingError U+B406");
  assertThrows(() => {
    ms932Encoder.encode("\uB407");
  }, Error, "EncodingError U+B407");
  assertThrows(() => {
    ms932Encoder.encode("\uB408");
  }, Error, "EncodingError U+B408");
  assertThrows(() => {
    ms932Encoder.encode("\uB409");
  }, Error, "EncodingError U+B409");
  assertThrows(() => {
    ms932Encoder.encode("\uB40A");
  }, Error, "EncodingError U+B40A");
  assertThrows(() => {
    ms932Encoder.encode("\uB40B");
  }, Error, "EncodingError U+B40B");
  assertThrows(() => {
    ms932Encoder.encode("\uB40C");
  }, Error, "EncodingError U+B40C");
  assertThrows(() => {
    ms932Encoder.encode("\uB40D");
  }, Error, "EncodingError U+B40D");
  assertThrows(() => {
    ms932Encoder.encode("\uB40E");
  }, Error, "EncodingError U+B40E");
  assertThrows(() => {
    ms932Encoder.encode("\uB40F");
  }, Error, "EncodingError U+B40F");
  assertThrows(() => {
    ms932Encoder.encode("\uB410");
  }, Error, "EncodingError U+B410");
  assertThrows(() => {
    ms932Encoder.encode("\uB411");
  }, Error, "EncodingError U+B411");
  assertThrows(() => {
    ms932Encoder.encode("\uB412");
  }, Error, "EncodingError U+B412");
  assertThrows(() => {
    ms932Encoder.encode("\uB413");
  }, Error, "EncodingError U+B413");
  assertThrows(() => {
    ms932Encoder.encode("\uB414");
  }, Error, "EncodingError U+B414");
  assertThrows(() => {
    ms932Encoder.encode("\uB415");
  }, Error, "EncodingError U+B415");
  assertThrows(() => {
    ms932Encoder.encode("\uB416");
  }, Error, "EncodingError U+B416");
  assertThrows(() => {
    ms932Encoder.encode("\uB417");
  }, Error, "EncodingError U+B417");
  assertThrows(() => {
    ms932Encoder.encode("\uB418");
  }, Error, "EncodingError U+B418");
  assertThrows(() => {
    ms932Encoder.encode("\uB419");
  }, Error, "EncodingError U+B419");
  assertThrows(() => {
    ms932Encoder.encode("\uB41A");
  }, Error, "EncodingError U+B41A");
  assertThrows(() => {
    ms932Encoder.encode("\uB41B");
  }, Error, "EncodingError U+B41B");
  assertThrows(() => {
    ms932Encoder.encode("\uB41C");
  }, Error, "EncodingError U+B41C");
  assertThrows(() => {
    ms932Encoder.encode("\uB41D");
  }, Error, "EncodingError U+B41D");
  assertThrows(() => {
    ms932Encoder.encode("\uB41E");
  }, Error, "EncodingError U+B41E");
  assertThrows(() => {
    ms932Encoder.encode("\uB41F");
  }, Error, "EncodingError U+B41F");
  assertThrows(() => {
    ms932Encoder.encode("\uB420");
  }, Error, "EncodingError U+B420");
  assertThrows(() => {
    ms932Encoder.encode("\uB421");
  }, Error, "EncodingError U+B421");
  assertThrows(() => {
    ms932Encoder.encode("\uB422");
  }, Error, "EncodingError U+B422");
  assertThrows(() => {
    ms932Encoder.encode("\uB423");
  }, Error, "EncodingError U+B423");
  assertThrows(() => {
    ms932Encoder.encode("\uB424");
  }, Error, "EncodingError U+B424");
  assertThrows(() => {
    ms932Encoder.encode("\uB425");
  }, Error, "EncodingError U+B425");
  assertThrows(() => {
    ms932Encoder.encode("\uB426");
  }, Error, "EncodingError U+B426");
  assertThrows(() => {
    ms932Encoder.encode("\uB427");
  }, Error, "EncodingError U+B427");
  assertThrows(() => {
    ms932Encoder.encode("\uB428");
  }, Error, "EncodingError U+B428");
  assertThrows(() => {
    ms932Encoder.encode("\uB429");
  }, Error, "EncodingError U+B429");
  assertThrows(() => {
    ms932Encoder.encode("\uB42A");
  }, Error, "EncodingError U+B42A");
  assertThrows(() => {
    ms932Encoder.encode("\uB42B");
  }, Error, "EncodingError U+B42B");
  assertThrows(() => {
    ms932Encoder.encode("\uB42C");
  }, Error, "EncodingError U+B42C");
  assertThrows(() => {
    ms932Encoder.encode("\uB42D");
  }, Error, "EncodingError U+B42D");
  assertThrows(() => {
    ms932Encoder.encode("\uB42E");
  }, Error, "EncodingError U+B42E");
  assertThrows(() => {
    ms932Encoder.encode("\uB42F");
  }, Error, "EncodingError U+B42F");
  assertThrows(() => {
    ms932Encoder.encode("\uB430");
  }, Error, "EncodingError U+B430");
  assertThrows(() => {
    ms932Encoder.encode("\uB431");
  }, Error, "EncodingError U+B431");
  assertThrows(() => {
    ms932Encoder.encode("\uB432");
  }, Error, "EncodingError U+B432");
  assertThrows(() => {
    ms932Encoder.encode("\uB433");
  }, Error, "EncodingError U+B433");
  assertThrows(() => {
    ms932Encoder.encode("\uB434");
  }, Error, "EncodingError U+B434");
  assertThrows(() => {
    ms932Encoder.encode("\uB435");
  }, Error, "EncodingError U+B435");
  assertThrows(() => {
    ms932Encoder.encode("\uB436");
  }, Error, "EncodingError U+B436");
  assertThrows(() => {
    ms932Encoder.encode("\uB437");
  }, Error, "EncodingError U+B437");
  assertThrows(() => {
    ms932Encoder.encode("\uB438");
  }, Error, "EncodingError U+B438");
  assertThrows(() => {
    ms932Encoder.encode("\uB439");
  }, Error, "EncodingError U+B439");
  assertThrows(() => {
    ms932Encoder.encode("\uB43A");
  }, Error, "EncodingError U+B43A");
  assertThrows(() => {
    ms932Encoder.encode("\uB43B");
  }, Error, "EncodingError U+B43B");
  assertThrows(() => {
    ms932Encoder.encode("\uB43C");
  }, Error, "EncodingError U+B43C");
  assertThrows(() => {
    ms932Encoder.encode("\uB43D");
  }, Error, "EncodingError U+B43D");
  assertThrows(() => {
    ms932Encoder.encode("\uB43E");
  }, Error, "EncodingError U+B43E");
  assertThrows(() => {
    ms932Encoder.encode("\uB43F");
  }, Error, "EncodingError U+B43F");
  assertThrows(() => {
    ms932Encoder.encode("\uB440");
  }, Error, "EncodingError U+B440");
  assertThrows(() => {
    ms932Encoder.encode("\uB441");
  }, Error, "EncodingError U+B441");
  assertThrows(() => {
    ms932Encoder.encode("\uB442");
  }, Error, "EncodingError U+B442");
  assertThrows(() => {
    ms932Encoder.encode("\uB443");
  }, Error, "EncodingError U+B443");
  assertThrows(() => {
    ms932Encoder.encode("\uB444");
  }, Error, "EncodingError U+B444");
  assertThrows(() => {
    ms932Encoder.encode("\uB445");
  }, Error, "EncodingError U+B445");
  assertThrows(() => {
    ms932Encoder.encode("\uB446");
  }, Error, "EncodingError U+B446");
  assertThrows(() => {
    ms932Encoder.encode("\uB447");
  }, Error, "EncodingError U+B447");
  assertThrows(() => {
    ms932Encoder.encode("\uB448");
  }, Error, "EncodingError U+B448");
  assertThrows(() => {
    ms932Encoder.encode("\uB449");
  }, Error, "EncodingError U+B449");
  assertThrows(() => {
    ms932Encoder.encode("\uB44A");
  }, Error, "EncodingError U+B44A");
  assertThrows(() => {
    ms932Encoder.encode("\uB44B");
  }, Error, "EncodingError U+B44B");
  assertThrows(() => {
    ms932Encoder.encode("\uB44C");
  }, Error, "EncodingError U+B44C");
  assertThrows(() => {
    ms932Encoder.encode("\uB44D");
  }, Error, "EncodingError U+B44D");
  assertThrows(() => {
    ms932Encoder.encode("\uB44E");
  }, Error, "EncodingError U+B44E");
  assertThrows(() => {
    ms932Encoder.encode("\uB44F");
  }, Error, "EncodingError U+B44F");
  assertThrows(() => {
    ms932Encoder.encode("\uB450");
  }, Error, "EncodingError U+B450");
  assertThrows(() => {
    ms932Encoder.encode("\uB451");
  }, Error, "EncodingError U+B451");
  assertThrows(() => {
    ms932Encoder.encode("\uB452");
  }, Error, "EncodingError U+B452");
  assertThrows(() => {
    ms932Encoder.encode("\uB453");
  }, Error, "EncodingError U+B453");
  assertThrows(() => {
    ms932Encoder.encode("\uB454");
  }, Error, "EncodingError U+B454");
  assertThrows(() => {
    ms932Encoder.encode("\uB455");
  }, Error, "EncodingError U+B455");
  assertThrows(() => {
    ms932Encoder.encode("\uB456");
  }, Error, "EncodingError U+B456");
  assertThrows(() => {
    ms932Encoder.encode("\uB457");
  }, Error, "EncodingError U+B457");
  assertThrows(() => {
    ms932Encoder.encode("\uB458");
  }, Error, "EncodingError U+B458");
  assertThrows(() => {
    ms932Encoder.encode("\uB459");
  }, Error, "EncodingError U+B459");
  assertThrows(() => {
    ms932Encoder.encode("\uB45A");
  }, Error, "EncodingError U+B45A");
  assertThrows(() => {
    ms932Encoder.encode("\uB45B");
  }, Error, "EncodingError U+B45B");
  assertThrows(() => {
    ms932Encoder.encode("\uB45C");
  }, Error, "EncodingError U+B45C");
  assertThrows(() => {
    ms932Encoder.encode("\uB45D");
  }, Error, "EncodingError U+B45D");
  assertThrows(() => {
    ms932Encoder.encode("\uB45E");
  }, Error, "EncodingError U+B45E");
  assertThrows(() => {
    ms932Encoder.encode("\uB45F");
  }, Error, "EncodingError U+B45F");
  assertThrows(() => {
    ms932Encoder.encode("\uB460");
  }, Error, "EncodingError U+B460");
  assertThrows(() => {
    ms932Encoder.encode("\uB461");
  }, Error, "EncodingError U+B461");
  assertThrows(() => {
    ms932Encoder.encode("\uB462");
  }, Error, "EncodingError U+B462");
  assertThrows(() => {
    ms932Encoder.encode("\uB463");
  }, Error, "EncodingError U+B463");
  assertThrows(() => {
    ms932Encoder.encode("\uB464");
  }, Error, "EncodingError U+B464");
  assertThrows(() => {
    ms932Encoder.encode("\uB465");
  }, Error, "EncodingError U+B465");
  assertThrows(() => {
    ms932Encoder.encode("\uB466");
  }, Error, "EncodingError U+B466");
  assertThrows(() => {
    ms932Encoder.encode("\uB467");
  }, Error, "EncodingError U+B467");
  assertThrows(() => {
    ms932Encoder.encode("\uB468");
  }, Error, "EncodingError U+B468");
  assertThrows(() => {
    ms932Encoder.encode("\uB469");
  }, Error, "EncodingError U+B469");
  assertThrows(() => {
    ms932Encoder.encode("\uB46A");
  }, Error, "EncodingError U+B46A");
  assertThrows(() => {
    ms932Encoder.encode("\uB46B");
  }, Error, "EncodingError U+B46B");
  assertThrows(() => {
    ms932Encoder.encode("\uB46C");
  }, Error, "EncodingError U+B46C");
  assertThrows(() => {
    ms932Encoder.encode("\uB46D");
  }, Error, "EncodingError U+B46D");
  assertThrows(() => {
    ms932Encoder.encode("\uB46E");
  }, Error, "EncodingError U+B46E");
  assertThrows(() => {
    ms932Encoder.encode("\uB46F");
  }, Error, "EncodingError U+B46F");
  assertThrows(() => {
    ms932Encoder.encode("\uB470");
  }, Error, "EncodingError U+B470");
  assertThrows(() => {
    ms932Encoder.encode("\uB471");
  }, Error, "EncodingError U+B471");
  assertThrows(() => {
    ms932Encoder.encode("\uB472");
  }, Error, "EncodingError U+B472");
  assertThrows(() => {
    ms932Encoder.encode("\uB473");
  }, Error, "EncodingError U+B473");
  assertThrows(() => {
    ms932Encoder.encode("\uB474");
  }, Error, "EncodingError U+B474");
  assertThrows(() => {
    ms932Encoder.encode("\uB475");
  }, Error, "EncodingError U+B475");
  assertThrows(() => {
    ms932Encoder.encode("\uB476");
  }, Error, "EncodingError U+B476");
  assertThrows(() => {
    ms932Encoder.encode("\uB477");
  }, Error, "EncodingError U+B477");
  assertThrows(() => {
    ms932Encoder.encode("\uB478");
  }, Error, "EncodingError U+B478");
  assertThrows(() => {
    ms932Encoder.encode("\uB479");
  }, Error, "EncodingError U+B479");
  assertThrows(() => {
    ms932Encoder.encode("\uB47A");
  }, Error, "EncodingError U+B47A");
  assertThrows(() => {
    ms932Encoder.encode("\uB47B");
  }, Error, "EncodingError U+B47B");
  assertThrows(() => {
    ms932Encoder.encode("\uB47C");
  }, Error, "EncodingError U+B47C");
  assertThrows(() => {
    ms932Encoder.encode("\uB47D");
  }, Error, "EncodingError U+B47D");
  assertThrows(() => {
    ms932Encoder.encode("\uB47E");
  }, Error, "EncodingError U+B47E");
  assertThrows(() => {
    ms932Encoder.encode("\uB47F");
  }, Error, "EncodingError U+B47F");
  assertThrows(() => {
    ms932Encoder.encode("\uB480");
  }, Error, "EncodingError U+B480");
  assertThrows(() => {
    ms932Encoder.encode("\uB481");
  }, Error, "EncodingError U+B481");
  assertThrows(() => {
    ms932Encoder.encode("\uB482");
  }, Error, "EncodingError U+B482");
  assertThrows(() => {
    ms932Encoder.encode("\uB483");
  }, Error, "EncodingError U+B483");
  assertThrows(() => {
    ms932Encoder.encode("\uB484");
  }, Error, "EncodingError U+B484");
  assertThrows(() => {
    ms932Encoder.encode("\uB485");
  }, Error, "EncodingError U+B485");
  assertThrows(() => {
    ms932Encoder.encode("\uB486");
  }, Error, "EncodingError U+B486");
  assertThrows(() => {
    ms932Encoder.encode("\uB487");
  }, Error, "EncodingError U+B487");
  assertThrows(() => {
    ms932Encoder.encode("\uB488");
  }, Error, "EncodingError U+B488");
  assertThrows(() => {
    ms932Encoder.encode("\uB489");
  }, Error, "EncodingError U+B489");
  assertThrows(() => {
    ms932Encoder.encode("\uB48A");
  }, Error, "EncodingError U+B48A");
  assertThrows(() => {
    ms932Encoder.encode("\uB48B");
  }, Error, "EncodingError U+B48B");
  assertThrows(() => {
    ms932Encoder.encode("\uB48C");
  }, Error, "EncodingError U+B48C");
  assertThrows(() => {
    ms932Encoder.encode("\uB48D");
  }, Error, "EncodingError U+B48D");
  assertThrows(() => {
    ms932Encoder.encode("\uB48E");
  }, Error, "EncodingError U+B48E");
  assertThrows(() => {
    ms932Encoder.encode("\uB48F");
  }, Error, "EncodingError U+B48F");
  assertThrows(() => {
    ms932Encoder.encode("\uB490");
  }, Error, "EncodingError U+B490");
  assertThrows(() => {
    ms932Encoder.encode("\uB491");
  }, Error, "EncodingError U+B491");
  assertThrows(() => {
    ms932Encoder.encode("\uB492");
  }, Error, "EncodingError U+B492");
  assertThrows(() => {
    ms932Encoder.encode("\uB493");
  }, Error, "EncodingError U+B493");
  assertThrows(() => {
    ms932Encoder.encode("\uB494");
  }, Error, "EncodingError U+B494");
  assertThrows(() => {
    ms932Encoder.encode("\uB495");
  }, Error, "EncodingError U+B495");
  assertThrows(() => {
    ms932Encoder.encode("\uB496");
  }, Error, "EncodingError U+B496");
  assertThrows(() => {
    ms932Encoder.encode("\uB497");
  }, Error, "EncodingError U+B497");
  assertThrows(() => {
    ms932Encoder.encode("\uB498");
  }, Error, "EncodingError U+B498");
  assertThrows(() => {
    ms932Encoder.encode("\uB499");
  }, Error, "EncodingError U+B499");
  assertThrows(() => {
    ms932Encoder.encode("\uB49A");
  }, Error, "EncodingError U+B49A");
  assertThrows(() => {
    ms932Encoder.encode("\uB49B");
  }, Error, "EncodingError U+B49B");
  assertThrows(() => {
    ms932Encoder.encode("\uB49C");
  }, Error, "EncodingError U+B49C");
  assertThrows(() => {
    ms932Encoder.encode("\uB49D");
  }, Error, "EncodingError U+B49D");
  assertThrows(() => {
    ms932Encoder.encode("\uB49E");
  }, Error, "EncodingError U+B49E");
  assertThrows(() => {
    ms932Encoder.encode("\uB49F");
  }, Error, "EncodingError U+B49F");
  assertThrows(() => {
    ms932Encoder.encode("\uB4A0");
  }, Error, "EncodingError U+B4A0");
  assertThrows(() => {
    ms932Encoder.encode("\uB4A1");
  }, Error, "EncodingError U+B4A1");
  assertThrows(() => {
    ms932Encoder.encode("\uB4A2");
  }, Error, "EncodingError U+B4A2");
  assertThrows(() => {
    ms932Encoder.encode("\uB4A3");
  }, Error, "EncodingError U+B4A3");
  assertThrows(() => {
    ms932Encoder.encode("\uB4A4");
  }, Error, "EncodingError U+B4A4");
  assertThrows(() => {
    ms932Encoder.encode("\uB4A5");
  }, Error, "EncodingError U+B4A5");
  assertThrows(() => {
    ms932Encoder.encode("\uB4A6");
  }, Error, "EncodingError U+B4A6");
  assertThrows(() => {
    ms932Encoder.encode("\uB4A7");
  }, Error, "EncodingError U+B4A7");
  assertThrows(() => {
    ms932Encoder.encode("\uB4A8");
  }, Error, "EncodingError U+B4A8");
  assertThrows(() => {
    ms932Encoder.encode("\uB4A9");
  }, Error, "EncodingError U+B4A9");
  assertThrows(() => {
    ms932Encoder.encode("\uB4AA");
  }, Error, "EncodingError U+B4AA");
  assertThrows(() => {
    ms932Encoder.encode("\uB4AB");
  }, Error, "EncodingError U+B4AB");
  assertThrows(() => {
    ms932Encoder.encode("\uB4AC");
  }, Error, "EncodingError U+B4AC");
  assertThrows(() => {
    ms932Encoder.encode("\uB4AD");
  }, Error, "EncodingError U+B4AD");
  assertThrows(() => {
    ms932Encoder.encode("\uB4AE");
  }, Error, "EncodingError U+B4AE");
  assertThrows(() => {
    ms932Encoder.encode("\uB4AF");
  }, Error, "EncodingError U+B4AF");
  assertThrows(() => {
    ms932Encoder.encode("\uB4B0");
  }, Error, "EncodingError U+B4B0");
  assertThrows(() => {
    ms932Encoder.encode("\uB4B1");
  }, Error, "EncodingError U+B4B1");
  assertThrows(() => {
    ms932Encoder.encode("\uB4B2");
  }, Error, "EncodingError U+B4B2");
  assertThrows(() => {
    ms932Encoder.encode("\uB4B3");
  }, Error, "EncodingError U+B4B3");
  assertThrows(() => {
    ms932Encoder.encode("\uB4B4");
  }, Error, "EncodingError U+B4B4");
  assertThrows(() => {
    ms932Encoder.encode("\uB4B5");
  }, Error, "EncodingError U+B4B5");
  assertThrows(() => {
    ms932Encoder.encode("\uB4B6");
  }, Error, "EncodingError U+B4B6");
  assertThrows(() => {
    ms932Encoder.encode("\uB4B7");
  }, Error, "EncodingError U+B4B7");
  assertThrows(() => {
    ms932Encoder.encode("\uB4B8");
  }, Error, "EncodingError U+B4B8");
  assertThrows(() => {
    ms932Encoder.encode("\uB4B9");
  }, Error, "EncodingError U+B4B9");
  assertThrows(() => {
    ms932Encoder.encode("\uB4BA");
  }, Error, "EncodingError U+B4BA");
  assertThrows(() => {
    ms932Encoder.encode("\uB4BB");
  }, Error, "EncodingError U+B4BB");
  assertThrows(() => {
    ms932Encoder.encode("\uB4BC");
  }, Error, "EncodingError U+B4BC");
  assertThrows(() => {
    ms932Encoder.encode("\uB4BD");
  }, Error, "EncodingError U+B4BD");
  assertThrows(() => {
    ms932Encoder.encode("\uB4BE");
  }, Error, "EncodingError U+B4BE");
  assertThrows(() => {
    ms932Encoder.encode("\uB4BF");
  }, Error, "EncodingError U+B4BF");
  assertThrows(() => {
    ms932Encoder.encode("\uB4C0");
  }, Error, "EncodingError U+B4C0");
  assertThrows(() => {
    ms932Encoder.encode("\uB4C1");
  }, Error, "EncodingError U+B4C1");
  assertThrows(() => {
    ms932Encoder.encode("\uB4C2");
  }, Error, "EncodingError U+B4C2");
  assertThrows(() => {
    ms932Encoder.encode("\uB4C3");
  }, Error, "EncodingError U+B4C3");
  assertThrows(() => {
    ms932Encoder.encode("\uB4C4");
  }, Error, "EncodingError U+B4C4");
  assertThrows(() => {
    ms932Encoder.encode("\uB4C5");
  }, Error, "EncodingError U+B4C5");
  assertThrows(() => {
    ms932Encoder.encode("\uB4C6");
  }, Error, "EncodingError U+B4C6");
  assertThrows(() => {
    ms932Encoder.encode("\uB4C7");
  }, Error, "EncodingError U+B4C7");
  assertThrows(() => {
    ms932Encoder.encode("\uB4C8");
  }, Error, "EncodingError U+B4C8");
  assertThrows(() => {
    ms932Encoder.encode("\uB4C9");
  }, Error, "EncodingError U+B4C9");
  assertThrows(() => {
    ms932Encoder.encode("\uB4CA");
  }, Error, "EncodingError U+B4CA");
  assertThrows(() => {
    ms932Encoder.encode("\uB4CB");
  }, Error, "EncodingError U+B4CB");
  assertThrows(() => {
    ms932Encoder.encode("\uB4CC");
  }, Error, "EncodingError U+B4CC");
  assertThrows(() => {
    ms932Encoder.encode("\uB4CD");
  }, Error, "EncodingError U+B4CD");
  assertThrows(() => {
    ms932Encoder.encode("\uB4CE");
  }, Error, "EncodingError U+B4CE");
  assertThrows(() => {
    ms932Encoder.encode("\uB4CF");
  }, Error, "EncodingError U+B4CF");
  assertThrows(() => {
    ms932Encoder.encode("\uB4D0");
  }, Error, "EncodingError U+B4D0");
  assertThrows(() => {
    ms932Encoder.encode("\uB4D1");
  }, Error, "EncodingError U+B4D1");
  assertThrows(() => {
    ms932Encoder.encode("\uB4D2");
  }, Error, "EncodingError U+B4D2");
  assertThrows(() => {
    ms932Encoder.encode("\uB4D3");
  }, Error, "EncodingError U+B4D3");
  assertThrows(() => {
    ms932Encoder.encode("\uB4D4");
  }, Error, "EncodingError U+B4D4");
  assertThrows(() => {
    ms932Encoder.encode("\uB4D5");
  }, Error, "EncodingError U+B4D5");
  assertThrows(() => {
    ms932Encoder.encode("\uB4D6");
  }, Error, "EncodingError U+B4D6");
  assertThrows(() => {
    ms932Encoder.encode("\uB4D7");
  }, Error, "EncodingError U+B4D7");
  assertThrows(() => {
    ms932Encoder.encode("\uB4D8");
  }, Error, "EncodingError U+B4D8");
  assertThrows(() => {
    ms932Encoder.encode("\uB4D9");
  }, Error, "EncodingError U+B4D9");
  assertThrows(() => {
    ms932Encoder.encode("\uB4DA");
  }, Error, "EncodingError U+B4DA");
  assertThrows(() => {
    ms932Encoder.encode("\uB4DB");
  }, Error, "EncodingError U+B4DB");
  assertThrows(() => {
    ms932Encoder.encode("\uB4DC");
  }, Error, "EncodingError U+B4DC");
  assertThrows(() => {
    ms932Encoder.encode("\uB4DD");
  }, Error, "EncodingError U+B4DD");
  assertThrows(() => {
    ms932Encoder.encode("\uB4DE");
  }, Error, "EncodingError U+B4DE");
  assertThrows(() => {
    ms932Encoder.encode("\uB4DF");
  }, Error, "EncodingError U+B4DF");
  assertThrows(() => {
    ms932Encoder.encode("\uB4E0");
  }, Error, "EncodingError U+B4E0");
  assertThrows(() => {
    ms932Encoder.encode("\uB4E1");
  }, Error, "EncodingError U+B4E1");
  assertThrows(() => {
    ms932Encoder.encode("\uB4E2");
  }, Error, "EncodingError U+B4E2");
  assertThrows(() => {
    ms932Encoder.encode("\uB4E3");
  }, Error, "EncodingError U+B4E3");
  assertThrows(() => {
    ms932Encoder.encode("\uB4E4");
  }, Error, "EncodingError U+B4E4");
  assertThrows(() => {
    ms932Encoder.encode("\uB4E5");
  }, Error, "EncodingError U+B4E5");
  assertThrows(() => {
    ms932Encoder.encode("\uB4E6");
  }, Error, "EncodingError U+B4E6");
  assertThrows(() => {
    ms932Encoder.encode("\uB4E7");
  }, Error, "EncodingError U+B4E7");
  assertThrows(() => {
    ms932Encoder.encode("\uB4E8");
  }, Error, "EncodingError U+B4E8");
  assertThrows(() => {
    ms932Encoder.encode("\uB4E9");
  }, Error, "EncodingError U+B4E9");
  assertThrows(() => {
    ms932Encoder.encode("\uB4EA");
  }, Error, "EncodingError U+B4EA");
  assertThrows(() => {
    ms932Encoder.encode("\uB4EB");
  }, Error, "EncodingError U+B4EB");
  assertThrows(() => {
    ms932Encoder.encode("\uB4EC");
  }, Error, "EncodingError U+B4EC");
  assertThrows(() => {
    ms932Encoder.encode("\uB4ED");
  }, Error, "EncodingError U+B4ED");
  assertThrows(() => {
    ms932Encoder.encode("\uB4EE");
  }, Error, "EncodingError U+B4EE");
  assertThrows(() => {
    ms932Encoder.encode("\uB4EF");
  }, Error, "EncodingError U+B4EF");
  assertThrows(() => {
    ms932Encoder.encode("\uB4F0");
  }, Error, "EncodingError U+B4F0");
  assertThrows(() => {
    ms932Encoder.encode("\uB4F1");
  }, Error, "EncodingError U+B4F1");
  assertThrows(() => {
    ms932Encoder.encode("\uB4F2");
  }, Error, "EncodingError U+B4F2");
  assertThrows(() => {
    ms932Encoder.encode("\uB4F3");
  }, Error, "EncodingError U+B4F3");
  assertThrows(() => {
    ms932Encoder.encode("\uB4F4");
  }, Error, "EncodingError U+B4F4");
  assertThrows(() => {
    ms932Encoder.encode("\uB4F5");
  }, Error, "EncodingError U+B4F5");
  assertThrows(() => {
    ms932Encoder.encode("\uB4F6");
  }, Error, "EncodingError U+B4F6");
  assertThrows(() => {
    ms932Encoder.encode("\uB4F7");
  }, Error, "EncodingError U+B4F7");
  assertThrows(() => {
    ms932Encoder.encode("\uB4F8");
  }, Error, "EncodingError U+B4F8");
  assertThrows(() => {
    ms932Encoder.encode("\uB4F9");
  }, Error, "EncodingError U+B4F9");
  assertThrows(() => {
    ms932Encoder.encode("\uB4FA");
  }, Error, "EncodingError U+B4FA");
  assertThrows(() => {
    ms932Encoder.encode("\uB4FB");
  }, Error, "EncodingError U+B4FB");
  assertThrows(() => {
    ms932Encoder.encode("\uB4FC");
  }, Error, "EncodingError U+B4FC");
  assertThrows(() => {
    ms932Encoder.encode("\uB4FD");
  }, Error, "EncodingError U+B4FD");
  assertThrows(() => {
    ms932Encoder.encode("\uB4FE");
  }, Error, "EncodingError U+B4FE");
  assertThrows(() => {
    ms932Encoder.encode("\uB4FF");
  }, Error, "EncodingError U+B4FF");
  assertThrows(() => {
    ms932Encoder.encode("\uB500");
  }, Error, "EncodingError U+B500");
  assertThrows(() => {
    ms932Encoder.encode("\uB501");
  }, Error, "EncodingError U+B501");
  assertThrows(() => {
    ms932Encoder.encode("\uB502");
  }, Error, "EncodingError U+B502");
  assertThrows(() => {
    ms932Encoder.encode("\uB503");
  }, Error, "EncodingError U+B503");
  assertThrows(() => {
    ms932Encoder.encode("\uB504");
  }, Error, "EncodingError U+B504");
  assertThrows(() => {
    ms932Encoder.encode("\uB505");
  }, Error, "EncodingError U+B505");
  assertThrows(() => {
    ms932Encoder.encode("\uB506");
  }, Error, "EncodingError U+B506");
  assertThrows(() => {
    ms932Encoder.encode("\uB507");
  }, Error, "EncodingError U+B507");
  assertThrows(() => {
    ms932Encoder.encode("\uB508");
  }, Error, "EncodingError U+B508");
  assertThrows(() => {
    ms932Encoder.encode("\uB509");
  }, Error, "EncodingError U+B509");
  assertThrows(() => {
    ms932Encoder.encode("\uB50A");
  }, Error, "EncodingError U+B50A");
  assertThrows(() => {
    ms932Encoder.encode("\uB50B");
  }, Error, "EncodingError U+B50B");
  assertThrows(() => {
    ms932Encoder.encode("\uB50C");
  }, Error, "EncodingError U+B50C");
  assertThrows(() => {
    ms932Encoder.encode("\uB50D");
  }, Error, "EncodingError U+B50D");
  assertThrows(() => {
    ms932Encoder.encode("\uB50E");
  }, Error, "EncodingError U+B50E");
  assertThrows(() => {
    ms932Encoder.encode("\uB50F");
  }, Error, "EncodingError U+B50F");
  assertThrows(() => {
    ms932Encoder.encode("\uB510");
  }, Error, "EncodingError U+B510");
  assertThrows(() => {
    ms932Encoder.encode("\uB511");
  }, Error, "EncodingError U+B511");
  assertThrows(() => {
    ms932Encoder.encode("\uB512");
  }, Error, "EncodingError U+B512");
  assertThrows(() => {
    ms932Encoder.encode("\uB513");
  }, Error, "EncodingError U+B513");
  assertThrows(() => {
    ms932Encoder.encode("\uB514");
  }, Error, "EncodingError U+B514");
  assertThrows(() => {
    ms932Encoder.encode("\uB515");
  }, Error, "EncodingError U+B515");
  assertThrows(() => {
    ms932Encoder.encode("\uB516");
  }, Error, "EncodingError U+B516");
  assertThrows(() => {
    ms932Encoder.encode("\uB517");
  }, Error, "EncodingError U+B517");
  assertThrows(() => {
    ms932Encoder.encode("\uB518");
  }, Error, "EncodingError U+B518");
  assertThrows(() => {
    ms932Encoder.encode("\uB519");
  }, Error, "EncodingError U+B519");
  assertThrows(() => {
    ms932Encoder.encode("\uB51A");
  }, Error, "EncodingError U+B51A");
  assertThrows(() => {
    ms932Encoder.encode("\uB51B");
  }, Error, "EncodingError U+B51B");
  assertThrows(() => {
    ms932Encoder.encode("\uB51C");
  }, Error, "EncodingError U+B51C");
  assertThrows(() => {
    ms932Encoder.encode("\uB51D");
  }, Error, "EncodingError U+B51D");
  assertThrows(() => {
    ms932Encoder.encode("\uB51E");
  }, Error, "EncodingError U+B51E");
  assertThrows(() => {
    ms932Encoder.encode("\uB51F");
  }, Error, "EncodingError U+B51F");
  assertThrows(() => {
    ms932Encoder.encode("\uB520");
  }, Error, "EncodingError U+B520");
  assertThrows(() => {
    ms932Encoder.encode("\uB521");
  }, Error, "EncodingError U+B521");
  assertThrows(() => {
    ms932Encoder.encode("\uB522");
  }, Error, "EncodingError U+B522");
  assertThrows(() => {
    ms932Encoder.encode("\uB523");
  }, Error, "EncodingError U+B523");
  assertThrows(() => {
    ms932Encoder.encode("\uB524");
  }, Error, "EncodingError U+B524");
  assertThrows(() => {
    ms932Encoder.encode("\uB525");
  }, Error, "EncodingError U+B525");
  assertThrows(() => {
    ms932Encoder.encode("\uB526");
  }, Error, "EncodingError U+B526");
  assertThrows(() => {
    ms932Encoder.encode("\uB527");
  }, Error, "EncodingError U+B527");
  assertThrows(() => {
    ms932Encoder.encode("\uB528");
  }, Error, "EncodingError U+B528");
  assertThrows(() => {
    ms932Encoder.encode("\uB529");
  }, Error, "EncodingError U+B529");
  assertThrows(() => {
    ms932Encoder.encode("\uB52A");
  }, Error, "EncodingError U+B52A");
  assertThrows(() => {
    ms932Encoder.encode("\uB52B");
  }, Error, "EncodingError U+B52B");
  assertThrows(() => {
    ms932Encoder.encode("\uB52C");
  }, Error, "EncodingError U+B52C");
  assertThrows(() => {
    ms932Encoder.encode("\uB52D");
  }, Error, "EncodingError U+B52D");
  assertThrows(() => {
    ms932Encoder.encode("\uB52E");
  }, Error, "EncodingError U+B52E");
  assertThrows(() => {
    ms932Encoder.encode("\uB52F");
  }, Error, "EncodingError U+B52F");
  assertThrows(() => {
    ms932Encoder.encode("\uB530");
  }, Error, "EncodingError U+B530");
  assertThrows(() => {
    ms932Encoder.encode("\uB531");
  }, Error, "EncodingError U+B531");
  assertThrows(() => {
    ms932Encoder.encode("\uB532");
  }, Error, "EncodingError U+B532");
  assertThrows(() => {
    ms932Encoder.encode("\uB533");
  }, Error, "EncodingError U+B533");
  assertThrows(() => {
    ms932Encoder.encode("\uB534");
  }, Error, "EncodingError U+B534");
  assertThrows(() => {
    ms932Encoder.encode("\uB535");
  }, Error, "EncodingError U+B535");
  assertThrows(() => {
    ms932Encoder.encode("\uB536");
  }, Error, "EncodingError U+B536");
  assertThrows(() => {
    ms932Encoder.encode("\uB537");
  }, Error, "EncodingError U+B537");
  assertThrows(() => {
    ms932Encoder.encode("\uB538");
  }, Error, "EncodingError U+B538");
  assertThrows(() => {
    ms932Encoder.encode("\uB539");
  }, Error, "EncodingError U+B539");
  assertThrows(() => {
    ms932Encoder.encode("\uB53A");
  }, Error, "EncodingError U+B53A");
  assertThrows(() => {
    ms932Encoder.encode("\uB53B");
  }, Error, "EncodingError U+B53B");
  assertThrows(() => {
    ms932Encoder.encode("\uB53C");
  }, Error, "EncodingError U+B53C");
  assertThrows(() => {
    ms932Encoder.encode("\uB53D");
  }, Error, "EncodingError U+B53D");
  assertThrows(() => {
    ms932Encoder.encode("\uB53E");
  }, Error, "EncodingError U+B53E");
  assertThrows(() => {
    ms932Encoder.encode("\uB53F");
  }, Error, "EncodingError U+B53F");
  assertThrows(() => {
    ms932Encoder.encode("\uB540");
  }, Error, "EncodingError U+B540");
  assertThrows(() => {
    ms932Encoder.encode("\uB541");
  }, Error, "EncodingError U+B541");
  assertThrows(() => {
    ms932Encoder.encode("\uB542");
  }, Error, "EncodingError U+B542");
  assertThrows(() => {
    ms932Encoder.encode("\uB543");
  }, Error, "EncodingError U+B543");
  assertThrows(() => {
    ms932Encoder.encode("\uB544");
  }, Error, "EncodingError U+B544");
  assertThrows(() => {
    ms932Encoder.encode("\uB545");
  }, Error, "EncodingError U+B545");
  assertThrows(() => {
    ms932Encoder.encode("\uB546");
  }, Error, "EncodingError U+B546");
  assertThrows(() => {
    ms932Encoder.encode("\uB547");
  }, Error, "EncodingError U+B547");
  assertThrows(() => {
    ms932Encoder.encode("\uB548");
  }, Error, "EncodingError U+B548");
  assertThrows(() => {
    ms932Encoder.encode("\uB549");
  }, Error, "EncodingError U+B549");
  assertThrows(() => {
    ms932Encoder.encode("\uB54A");
  }, Error, "EncodingError U+B54A");
  assertThrows(() => {
    ms932Encoder.encode("\uB54B");
  }, Error, "EncodingError U+B54B");
  assertThrows(() => {
    ms932Encoder.encode("\uB54C");
  }, Error, "EncodingError U+B54C");
  assertThrows(() => {
    ms932Encoder.encode("\uB54D");
  }, Error, "EncodingError U+B54D");
  assertThrows(() => {
    ms932Encoder.encode("\uB54E");
  }, Error, "EncodingError U+B54E");
  assertThrows(() => {
    ms932Encoder.encode("\uB54F");
  }, Error, "EncodingError U+B54F");
  assertThrows(() => {
    ms932Encoder.encode("\uB550");
  }, Error, "EncodingError U+B550");
  assertThrows(() => {
    ms932Encoder.encode("\uB551");
  }, Error, "EncodingError U+B551");
  assertThrows(() => {
    ms932Encoder.encode("\uB552");
  }, Error, "EncodingError U+B552");
  assertThrows(() => {
    ms932Encoder.encode("\uB553");
  }, Error, "EncodingError U+B553");
  assertThrows(() => {
    ms932Encoder.encode("\uB554");
  }, Error, "EncodingError U+B554");
  assertThrows(() => {
    ms932Encoder.encode("\uB555");
  }, Error, "EncodingError U+B555");
  assertThrows(() => {
    ms932Encoder.encode("\uB556");
  }, Error, "EncodingError U+B556");
  assertThrows(() => {
    ms932Encoder.encode("\uB557");
  }, Error, "EncodingError U+B557");
  assertThrows(() => {
    ms932Encoder.encode("\uB558");
  }, Error, "EncodingError U+B558");
  assertThrows(() => {
    ms932Encoder.encode("\uB559");
  }, Error, "EncodingError U+B559");
  assertThrows(() => {
    ms932Encoder.encode("\uB55A");
  }, Error, "EncodingError U+B55A");
  assertThrows(() => {
    ms932Encoder.encode("\uB55B");
  }, Error, "EncodingError U+B55B");
  assertThrows(() => {
    ms932Encoder.encode("\uB55C");
  }, Error, "EncodingError U+B55C");
  assertThrows(() => {
    ms932Encoder.encode("\uB55D");
  }, Error, "EncodingError U+B55D");
  assertThrows(() => {
    ms932Encoder.encode("\uB55E");
  }, Error, "EncodingError U+B55E");
  assertThrows(() => {
    ms932Encoder.encode("\uB55F");
  }, Error, "EncodingError U+B55F");
  assertThrows(() => {
    ms932Encoder.encode("\uB560");
  }, Error, "EncodingError U+B560");
  assertThrows(() => {
    ms932Encoder.encode("\uB561");
  }, Error, "EncodingError U+B561");
  assertThrows(() => {
    ms932Encoder.encode("\uB562");
  }, Error, "EncodingError U+B562");
  assertThrows(() => {
    ms932Encoder.encode("\uB563");
  }, Error, "EncodingError U+B563");
  assertThrows(() => {
    ms932Encoder.encode("\uB564");
  }, Error, "EncodingError U+B564");
  assertThrows(() => {
    ms932Encoder.encode("\uB565");
  }, Error, "EncodingError U+B565");
  assertThrows(() => {
    ms932Encoder.encode("\uB566");
  }, Error, "EncodingError U+B566");
  assertThrows(() => {
    ms932Encoder.encode("\uB567");
  }, Error, "EncodingError U+B567");
  assertThrows(() => {
    ms932Encoder.encode("\uB568");
  }, Error, "EncodingError U+B568");
  assertThrows(() => {
    ms932Encoder.encode("\uB569");
  }, Error, "EncodingError U+B569");
  assertThrows(() => {
    ms932Encoder.encode("\uB56A");
  }, Error, "EncodingError U+B56A");
  assertThrows(() => {
    ms932Encoder.encode("\uB56B");
  }, Error, "EncodingError U+B56B");
  assertThrows(() => {
    ms932Encoder.encode("\uB56C");
  }, Error, "EncodingError U+B56C");
  assertThrows(() => {
    ms932Encoder.encode("\uB56D");
  }, Error, "EncodingError U+B56D");
  assertThrows(() => {
    ms932Encoder.encode("\uB56E");
  }, Error, "EncodingError U+B56E");
  assertThrows(() => {
    ms932Encoder.encode("\uB56F");
  }, Error, "EncodingError U+B56F");
  assertThrows(() => {
    ms932Encoder.encode("\uB570");
  }, Error, "EncodingError U+B570");
  assertThrows(() => {
    ms932Encoder.encode("\uB571");
  }, Error, "EncodingError U+B571");
  assertThrows(() => {
    ms932Encoder.encode("\uB572");
  }, Error, "EncodingError U+B572");
  assertThrows(() => {
    ms932Encoder.encode("\uB573");
  }, Error, "EncodingError U+B573");
  assertThrows(() => {
    ms932Encoder.encode("\uB574");
  }, Error, "EncodingError U+B574");
  assertThrows(() => {
    ms932Encoder.encode("\uB575");
  }, Error, "EncodingError U+B575");
  assertThrows(() => {
    ms932Encoder.encode("\uB576");
  }, Error, "EncodingError U+B576");
  assertThrows(() => {
    ms932Encoder.encode("\uB577");
  }, Error, "EncodingError U+B577");
  assertThrows(() => {
    ms932Encoder.encode("\uB578");
  }, Error, "EncodingError U+B578");
  assertThrows(() => {
    ms932Encoder.encode("\uB579");
  }, Error, "EncodingError U+B579");
  assertThrows(() => {
    ms932Encoder.encode("\uB57A");
  }, Error, "EncodingError U+B57A");
  assertThrows(() => {
    ms932Encoder.encode("\uB57B");
  }, Error, "EncodingError U+B57B");
  assertThrows(() => {
    ms932Encoder.encode("\uB57C");
  }, Error, "EncodingError U+B57C");
  assertThrows(() => {
    ms932Encoder.encode("\uB57D");
  }, Error, "EncodingError U+B57D");
  assertThrows(() => {
    ms932Encoder.encode("\uB57E");
  }, Error, "EncodingError U+B57E");
  assertThrows(() => {
    ms932Encoder.encode("\uB57F");
  }, Error, "EncodingError U+B57F");
  assertThrows(() => {
    ms932Encoder.encode("\uB580");
  }, Error, "EncodingError U+B580");
  assertThrows(() => {
    ms932Encoder.encode("\uB581");
  }, Error, "EncodingError U+B581");
  assertThrows(() => {
    ms932Encoder.encode("\uB582");
  }, Error, "EncodingError U+B582");
  assertThrows(() => {
    ms932Encoder.encode("\uB583");
  }, Error, "EncodingError U+B583");
  assertThrows(() => {
    ms932Encoder.encode("\uB584");
  }, Error, "EncodingError U+B584");
  assertThrows(() => {
    ms932Encoder.encode("\uB585");
  }, Error, "EncodingError U+B585");
  assertThrows(() => {
    ms932Encoder.encode("\uB586");
  }, Error, "EncodingError U+B586");
  assertThrows(() => {
    ms932Encoder.encode("\uB587");
  }, Error, "EncodingError U+B587");
  assertThrows(() => {
    ms932Encoder.encode("\uB588");
  }, Error, "EncodingError U+B588");
  assertThrows(() => {
    ms932Encoder.encode("\uB589");
  }, Error, "EncodingError U+B589");
  assertThrows(() => {
    ms932Encoder.encode("\uB58A");
  }, Error, "EncodingError U+B58A");
  assertThrows(() => {
    ms932Encoder.encode("\uB58B");
  }, Error, "EncodingError U+B58B");
  assertThrows(() => {
    ms932Encoder.encode("\uB58C");
  }, Error, "EncodingError U+B58C");
  assertThrows(() => {
    ms932Encoder.encode("\uB58D");
  }, Error, "EncodingError U+B58D");
  assertThrows(() => {
    ms932Encoder.encode("\uB58E");
  }, Error, "EncodingError U+B58E");
  assertThrows(() => {
    ms932Encoder.encode("\uB58F");
  }, Error, "EncodingError U+B58F");
  assertThrows(() => {
    ms932Encoder.encode("\uB590");
  }, Error, "EncodingError U+B590");
  assertThrows(() => {
    ms932Encoder.encode("\uB591");
  }, Error, "EncodingError U+B591");
  assertThrows(() => {
    ms932Encoder.encode("\uB592");
  }, Error, "EncodingError U+B592");
  assertThrows(() => {
    ms932Encoder.encode("\uB593");
  }, Error, "EncodingError U+B593");
  assertThrows(() => {
    ms932Encoder.encode("\uB594");
  }, Error, "EncodingError U+B594");
  assertThrows(() => {
    ms932Encoder.encode("\uB595");
  }, Error, "EncodingError U+B595");
  assertThrows(() => {
    ms932Encoder.encode("\uB596");
  }, Error, "EncodingError U+B596");
  assertThrows(() => {
    ms932Encoder.encode("\uB597");
  }, Error, "EncodingError U+B597");
  assertThrows(() => {
    ms932Encoder.encode("\uB598");
  }, Error, "EncodingError U+B598");
  assertThrows(() => {
    ms932Encoder.encode("\uB599");
  }, Error, "EncodingError U+B599");
  assertThrows(() => {
    ms932Encoder.encode("\uB59A");
  }, Error, "EncodingError U+B59A");
  assertThrows(() => {
    ms932Encoder.encode("\uB59B");
  }, Error, "EncodingError U+B59B");
  assertThrows(() => {
    ms932Encoder.encode("\uB59C");
  }, Error, "EncodingError U+B59C");
  assertThrows(() => {
    ms932Encoder.encode("\uB59D");
  }, Error, "EncodingError U+B59D");
  assertThrows(() => {
    ms932Encoder.encode("\uB59E");
  }, Error, "EncodingError U+B59E");
  assertThrows(() => {
    ms932Encoder.encode("\uB59F");
  }, Error, "EncodingError U+B59F");
  assertThrows(() => {
    ms932Encoder.encode("\uB5A0");
  }, Error, "EncodingError U+B5A0");
  assertThrows(() => {
    ms932Encoder.encode("\uB5A1");
  }, Error, "EncodingError U+B5A1");
  assertThrows(() => {
    ms932Encoder.encode("\uB5A2");
  }, Error, "EncodingError U+B5A2");
  assertThrows(() => {
    ms932Encoder.encode("\uB5A3");
  }, Error, "EncodingError U+B5A3");
  assertThrows(() => {
    ms932Encoder.encode("\uB5A4");
  }, Error, "EncodingError U+B5A4");
  assertThrows(() => {
    ms932Encoder.encode("\uB5A5");
  }, Error, "EncodingError U+B5A5");
  assertThrows(() => {
    ms932Encoder.encode("\uB5A6");
  }, Error, "EncodingError U+B5A6");
  assertThrows(() => {
    ms932Encoder.encode("\uB5A7");
  }, Error, "EncodingError U+B5A7");
  assertThrows(() => {
    ms932Encoder.encode("\uB5A8");
  }, Error, "EncodingError U+B5A8");
  assertThrows(() => {
    ms932Encoder.encode("\uB5A9");
  }, Error, "EncodingError U+B5A9");
  assertThrows(() => {
    ms932Encoder.encode("\uB5AA");
  }, Error, "EncodingError U+B5AA");
  assertThrows(() => {
    ms932Encoder.encode("\uB5AB");
  }, Error, "EncodingError U+B5AB");
  assertThrows(() => {
    ms932Encoder.encode("\uB5AC");
  }, Error, "EncodingError U+B5AC");
  assertThrows(() => {
    ms932Encoder.encode("\uB5AD");
  }, Error, "EncodingError U+B5AD");
  assertThrows(() => {
    ms932Encoder.encode("\uB5AE");
  }, Error, "EncodingError U+B5AE");
  assertThrows(() => {
    ms932Encoder.encode("\uB5AF");
  }, Error, "EncodingError U+B5AF");
  assertThrows(() => {
    ms932Encoder.encode("\uB5B0");
  }, Error, "EncodingError U+B5B0");
  assertThrows(() => {
    ms932Encoder.encode("\uB5B1");
  }, Error, "EncodingError U+B5B1");
  assertThrows(() => {
    ms932Encoder.encode("\uB5B2");
  }, Error, "EncodingError U+B5B2");
  assertThrows(() => {
    ms932Encoder.encode("\uB5B3");
  }, Error, "EncodingError U+B5B3");
  assertThrows(() => {
    ms932Encoder.encode("\uB5B4");
  }, Error, "EncodingError U+B5B4");
  assertThrows(() => {
    ms932Encoder.encode("\uB5B5");
  }, Error, "EncodingError U+B5B5");
  assertThrows(() => {
    ms932Encoder.encode("\uB5B6");
  }, Error, "EncodingError U+B5B6");
  assertThrows(() => {
    ms932Encoder.encode("\uB5B7");
  }, Error, "EncodingError U+B5B7");
  assertThrows(() => {
    ms932Encoder.encode("\uB5B8");
  }, Error, "EncodingError U+B5B8");
  assertThrows(() => {
    ms932Encoder.encode("\uB5B9");
  }, Error, "EncodingError U+B5B9");
  assertThrows(() => {
    ms932Encoder.encode("\uB5BA");
  }, Error, "EncodingError U+B5BA");
  assertThrows(() => {
    ms932Encoder.encode("\uB5BB");
  }, Error, "EncodingError U+B5BB");
  assertThrows(() => {
    ms932Encoder.encode("\uB5BC");
  }, Error, "EncodingError U+B5BC");
  assertThrows(() => {
    ms932Encoder.encode("\uB5BD");
  }, Error, "EncodingError U+B5BD");
  assertThrows(() => {
    ms932Encoder.encode("\uB5BE");
  }, Error, "EncodingError U+B5BE");
  assertThrows(() => {
    ms932Encoder.encode("\uB5BF");
  }, Error, "EncodingError U+B5BF");
  assertThrows(() => {
    ms932Encoder.encode("\uB5C0");
  }, Error, "EncodingError U+B5C0");
  assertThrows(() => {
    ms932Encoder.encode("\uB5C1");
  }, Error, "EncodingError U+B5C1");
  assertThrows(() => {
    ms932Encoder.encode("\uB5C2");
  }, Error, "EncodingError U+B5C2");
  assertThrows(() => {
    ms932Encoder.encode("\uB5C3");
  }, Error, "EncodingError U+B5C3");
  assertThrows(() => {
    ms932Encoder.encode("\uB5C4");
  }, Error, "EncodingError U+B5C4");
  assertThrows(() => {
    ms932Encoder.encode("\uB5C5");
  }, Error, "EncodingError U+B5C5");
  assertThrows(() => {
    ms932Encoder.encode("\uB5C6");
  }, Error, "EncodingError U+B5C6");
  assertThrows(() => {
    ms932Encoder.encode("\uB5C7");
  }, Error, "EncodingError U+B5C7");
  assertThrows(() => {
    ms932Encoder.encode("\uB5C8");
  }, Error, "EncodingError U+B5C8");
  assertThrows(() => {
    ms932Encoder.encode("\uB5C9");
  }, Error, "EncodingError U+B5C9");
  assertThrows(() => {
    ms932Encoder.encode("\uB5CA");
  }, Error, "EncodingError U+B5CA");
  assertThrows(() => {
    ms932Encoder.encode("\uB5CB");
  }, Error, "EncodingError U+B5CB");
  assertThrows(() => {
    ms932Encoder.encode("\uB5CC");
  }, Error, "EncodingError U+B5CC");
  assertThrows(() => {
    ms932Encoder.encode("\uB5CD");
  }, Error, "EncodingError U+B5CD");
  assertThrows(() => {
    ms932Encoder.encode("\uB5CE");
  }, Error, "EncodingError U+B5CE");
  assertThrows(() => {
    ms932Encoder.encode("\uB5CF");
  }, Error, "EncodingError U+B5CF");
  assertThrows(() => {
    ms932Encoder.encode("\uB5D0");
  }, Error, "EncodingError U+B5D0");
  assertThrows(() => {
    ms932Encoder.encode("\uB5D1");
  }, Error, "EncodingError U+B5D1");
  assertThrows(() => {
    ms932Encoder.encode("\uB5D2");
  }, Error, "EncodingError U+B5D2");
  assertThrows(() => {
    ms932Encoder.encode("\uB5D3");
  }, Error, "EncodingError U+B5D3");
  assertThrows(() => {
    ms932Encoder.encode("\uB5D4");
  }, Error, "EncodingError U+B5D4");
  assertThrows(() => {
    ms932Encoder.encode("\uB5D5");
  }, Error, "EncodingError U+B5D5");
  assertThrows(() => {
    ms932Encoder.encode("\uB5D6");
  }, Error, "EncodingError U+B5D6");
  assertThrows(() => {
    ms932Encoder.encode("\uB5D7");
  }, Error, "EncodingError U+B5D7");
  assertThrows(() => {
    ms932Encoder.encode("\uB5D8");
  }, Error, "EncodingError U+B5D8");
  assertThrows(() => {
    ms932Encoder.encode("\uB5D9");
  }, Error, "EncodingError U+B5D9");
  assertThrows(() => {
    ms932Encoder.encode("\uB5DA");
  }, Error, "EncodingError U+B5DA");
  assertThrows(() => {
    ms932Encoder.encode("\uB5DB");
  }, Error, "EncodingError U+B5DB");
  assertThrows(() => {
    ms932Encoder.encode("\uB5DC");
  }, Error, "EncodingError U+B5DC");
  assertThrows(() => {
    ms932Encoder.encode("\uB5DD");
  }, Error, "EncodingError U+B5DD");
  assertThrows(() => {
    ms932Encoder.encode("\uB5DE");
  }, Error, "EncodingError U+B5DE");
  assertThrows(() => {
    ms932Encoder.encode("\uB5DF");
  }, Error, "EncodingError U+B5DF");
  assertThrows(() => {
    ms932Encoder.encode("\uB5E0");
  }, Error, "EncodingError U+B5E0");
  assertThrows(() => {
    ms932Encoder.encode("\uB5E1");
  }, Error, "EncodingError U+B5E1");
  assertThrows(() => {
    ms932Encoder.encode("\uB5E2");
  }, Error, "EncodingError U+B5E2");
  assertThrows(() => {
    ms932Encoder.encode("\uB5E3");
  }, Error, "EncodingError U+B5E3");
  assertThrows(() => {
    ms932Encoder.encode("\uB5E4");
  }, Error, "EncodingError U+B5E4");
  assertThrows(() => {
    ms932Encoder.encode("\uB5E5");
  }, Error, "EncodingError U+B5E5");
  assertThrows(() => {
    ms932Encoder.encode("\uB5E6");
  }, Error, "EncodingError U+B5E6");
  assertThrows(() => {
    ms932Encoder.encode("\uB5E7");
  }, Error, "EncodingError U+B5E7");
  assertThrows(() => {
    ms932Encoder.encode("\uB5E8");
  }, Error, "EncodingError U+B5E8");
  assertThrows(() => {
    ms932Encoder.encode("\uB5E9");
  }, Error, "EncodingError U+B5E9");
  assertThrows(() => {
    ms932Encoder.encode("\uB5EA");
  }, Error, "EncodingError U+B5EA");
  assertThrows(() => {
    ms932Encoder.encode("\uB5EB");
  }, Error, "EncodingError U+B5EB");
  assertThrows(() => {
    ms932Encoder.encode("\uB5EC");
  }, Error, "EncodingError U+B5EC");
  assertThrows(() => {
    ms932Encoder.encode("\uB5ED");
  }, Error, "EncodingError U+B5ED");
  assertThrows(() => {
    ms932Encoder.encode("\uB5EE");
  }, Error, "EncodingError U+B5EE");
  assertThrows(() => {
    ms932Encoder.encode("\uB5EF");
  }, Error, "EncodingError U+B5EF");
  assertThrows(() => {
    ms932Encoder.encode("\uB5F0");
  }, Error, "EncodingError U+B5F0");
  assertThrows(() => {
    ms932Encoder.encode("\uB5F1");
  }, Error, "EncodingError U+B5F1");
  assertThrows(() => {
    ms932Encoder.encode("\uB5F2");
  }, Error, "EncodingError U+B5F2");
  assertThrows(() => {
    ms932Encoder.encode("\uB5F3");
  }, Error, "EncodingError U+B5F3");
  assertThrows(() => {
    ms932Encoder.encode("\uB5F4");
  }, Error, "EncodingError U+B5F4");
  assertThrows(() => {
    ms932Encoder.encode("\uB5F5");
  }, Error, "EncodingError U+B5F5");
  assertThrows(() => {
    ms932Encoder.encode("\uB5F6");
  }, Error, "EncodingError U+B5F6");
  assertThrows(() => {
    ms932Encoder.encode("\uB5F7");
  }, Error, "EncodingError U+B5F7");
  assertThrows(() => {
    ms932Encoder.encode("\uB5F8");
  }, Error, "EncodingError U+B5F8");
  assertThrows(() => {
    ms932Encoder.encode("\uB5F9");
  }, Error, "EncodingError U+B5F9");
  assertThrows(() => {
    ms932Encoder.encode("\uB5FA");
  }, Error, "EncodingError U+B5FA");
  assertThrows(() => {
    ms932Encoder.encode("\uB5FB");
  }, Error, "EncodingError U+B5FB");
  assertThrows(() => {
    ms932Encoder.encode("\uB5FC");
  }, Error, "EncodingError U+B5FC");
  assertThrows(() => {
    ms932Encoder.encode("\uB5FD");
  }, Error, "EncodingError U+B5FD");
  assertThrows(() => {
    ms932Encoder.encode("\uB5FE");
  }, Error, "EncodingError U+B5FE");
  assertThrows(() => {
    ms932Encoder.encode("\uB5FF");
  }, Error, "EncodingError U+B5FF");
  assertThrows(() => {
    ms932Encoder.encode("\uB600");
  }, Error, "EncodingError U+B600");
  assertThrows(() => {
    ms932Encoder.encode("\uB601");
  }, Error, "EncodingError U+B601");
  assertThrows(() => {
    ms932Encoder.encode("\uB602");
  }, Error, "EncodingError U+B602");
  assertThrows(() => {
    ms932Encoder.encode("\uB603");
  }, Error, "EncodingError U+B603");
  assertThrows(() => {
    ms932Encoder.encode("\uB604");
  }, Error, "EncodingError U+B604");
  assertThrows(() => {
    ms932Encoder.encode("\uB605");
  }, Error, "EncodingError U+B605");
  assertThrows(() => {
    ms932Encoder.encode("\uB606");
  }, Error, "EncodingError U+B606");
  assertThrows(() => {
    ms932Encoder.encode("\uB607");
  }, Error, "EncodingError U+B607");
  assertThrows(() => {
    ms932Encoder.encode("\uB608");
  }, Error, "EncodingError U+B608");
  assertThrows(() => {
    ms932Encoder.encode("\uB609");
  }, Error, "EncodingError U+B609");
  assertThrows(() => {
    ms932Encoder.encode("\uB60A");
  }, Error, "EncodingError U+B60A");
  assertThrows(() => {
    ms932Encoder.encode("\uB60B");
  }, Error, "EncodingError U+B60B");
  assertThrows(() => {
    ms932Encoder.encode("\uB60C");
  }, Error, "EncodingError U+B60C");
  assertThrows(() => {
    ms932Encoder.encode("\uB60D");
  }, Error, "EncodingError U+B60D");
  assertThrows(() => {
    ms932Encoder.encode("\uB60E");
  }, Error, "EncodingError U+B60E");
  assertThrows(() => {
    ms932Encoder.encode("\uB60F");
  }, Error, "EncodingError U+B60F");
  assertThrows(() => {
    ms932Encoder.encode("\uB610");
  }, Error, "EncodingError U+B610");
  assertThrows(() => {
    ms932Encoder.encode("\uB611");
  }, Error, "EncodingError U+B611");
  assertThrows(() => {
    ms932Encoder.encode("\uB612");
  }, Error, "EncodingError U+B612");
  assertThrows(() => {
    ms932Encoder.encode("\uB613");
  }, Error, "EncodingError U+B613");
  assertThrows(() => {
    ms932Encoder.encode("\uB614");
  }, Error, "EncodingError U+B614");
  assertThrows(() => {
    ms932Encoder.encode("\uB615");
  }, Error, "EncodingError U+B615");
  assertThrows(() => {
    ms932Encoder.encode("\uB616");
  }, Error, "EncodingError U+B616");
  assertThrows(() => {
    ms932Encoder.encode("\uB617");
  }, Error, "EncodingError U+B617");
  assertThrows(() => {
    ms932Encoder.encode("\uB618");
  }, Error, "EncodingError U+B618");
  assertThrows(() => {
    ms932Encoder.encode("\uB619");
  }, Error, "EncodingError U+B619");
  assertThrows(() => {
    ms932Encoder.encode("\uB61A");
  }, Error, "EncodingError U+B61A");
  assertThrows(() => {
    ms932Encoder.encode("\uB61B");
  }, Error, "EncodingError U+B61B");
  assertThrows(() => {
    ms932Encoder.encode("\uB61C");
  }, Error, "EncodingError U+B61C");
  assertThrows(() => {
    ms932Encoder.encode("\uB61D");
  }, Error, "EncodingError U+B61D");
  assertThrows(() => {
    ms932Encoder.encode("\uB61E");
  }, Error, "EncodingError U+B61E");
  assertThrows(() => {
    ms932Encoder.encode("\uB61F");
  }, Error, "EncodingError U+B61F");
  assertThrows(() => {
    ms932Encoder.encode("\uB620");
  }, Error, "EncodingError U+B620");
  assertThrows(() => {
    ms932Encoder.encode("\uB621");
  }, Error, "EncodingError U+B621");
  assertThrows(() => {
    ms932Encoder.encode("\uB622");
  }, Error, "EncodingError U+B622");
  assertThrows(() => {
    ms932Encoder.encode("\uB623");
  }, Error, "EncodingError U+B623");
  assertThrows(() => {
    ms932Encoder.encode("\uB624");
  }, Error, "EncodingError U+B624");
  assertThrows(() => {
    ms932Encoder.encode("\uB625");
  }, Error, "EncodingError U+B625");
  assertThrows(() => {
    ms932Encoder.encode("\uB626");
  }, Error, "EncodingError U+B626");
  assertThrows(() => {
    ms932Encoder.encode("\uB627");
  }, Error, "EncodingError U+B627");
  assertThrows(() => {
    ms932Encoder.encode("\uB628");
  }, Error, "EncodingError U+B628");
  assertThrows(() => {
    ms932Encoder.encode("\uB629");
  }, Error, "EncodingError U+B629");
  assertThrows(() => {
    ms932Encoder.encode("\uB62A");
  }, Error, "EncodingError U+B62A");
  assertThrows(() => {
    ms932Encoder.encode("\uB62B");
  }, Error, "EncodingError U+B62B");
  assertThrows(() => {
    ms932Encoder.encode("\uB62C");
  }, Error, "EncodingError U+B62C");
  assertThrows(() => {
    ms932Encoder.encode("\uB62D");
  }, Error, "EncodingError U+B62D");
  assertThrows(() => {
    ms932Encoder.encode("\uB62E");
  }, Error, "EncodingError U+B62E");
  assertThrows(() => {
    ms932Encoder.encode("\uB62F");
  }, Error, "EncodingError U+B62F");
  assertThrows(() => {
    ms932Encoder.encode("\uB630");
  }, Error, "EncodingError U+B630");
  assertThrows(() => {
    ms932Encoder.encode("\uB631");
  }, Error, "EncodingError U+B631");
  assertThrows(() => {
    ms932Encoder.encode("\uB632");
  }, Error, "EncodingError U+B632");
  assertThrows(() => {
    ms932Encoder.encode("\uB633");
  }, Error, "EncodingError U+B633");
  assertThrows(() => {
    ms932Encoder.encode("\uB634");
  }, Error, "EncodingError U+B634");
  assertThrows(() => {
    ms932Encoder.encode("\uB635");
  }, Error, "EncodingError U+B635");
  assertThrows(() => {
    ms932Encoder.encode("\uB636");
  }, Error, "EncodingError U+B636");
  assertThrows(() => {
    ms932Encoder.encode("\uB637");
  }, Error, "EncodingError U+B637");
  assertThrows(() => {
    ms932Encoder.encode("\uB638");
  }, Error, "EncodingError U+B638");
  assertThrows(() => {
    ms932Encoder.encode("\uB639");
  }, Error, "EncodingError U+B639");
  assertThrows(() => {
    ms932Encoder.encode("\uB63A");
  }, Error, "EncodingError U+B63A");
  assertThrows(() => {
    ms932Encoder.encode("\uB63B");
  }, Error, "EncodingError U+B63B");
  assertThrows(() => {
    ms932Encoder.encode("\uB63C");
  }, Error, "EncodingError U+B63C");
  assertThrows(() => {
    ms932Encoder.encode("\uB63D");
  }, Error, "EncodingError U+B63D");
  assertThrows(() => {
    ms932Encoder.encode("\uB63E");
  }, Error, "EncodingError U+B63E");
  assertThrows(() => {
    ms932Encoder.encode("\uB63F");
  }, Error, "EncodingError U+B63F");
  assertThrows(() => {
    ms932Encoder.encode("\uB640");
  }, Error, "EncodingError U+B640");
  assertThrows(() => {
    ms932Encoder.encode("\uB641");
  }, Error, "EncodingError U+B641");
  assertThrows(() => {
    ms932Encoder.encode("\uB642");
  }, Error, "EncodingError U+B642");
  assertThrows(() => {
    ms932Encoder.encode("\uB643");
  }, Error, "EncodingError U+B643");
  assertThrows(() => {
    ms932Encoder.encode("\uB644");
  }, Error, "EncodingError U+B644");
  assertThrows(() => {
    ms932Encoder.encode("\uB645");
  }, Error, "EncodingError U+B645");
  assertThrows(() => {
    ms932Encoder.encode("\uB646");
  }, Error, "EncodingError U+B646");
  assertThrows(() => {
    ms932Encoder.encode("\uB647");
  }, Error, "EncodingError U+B647");
  assertThrows(() => {
    ms932Encoder.encode("\uB648");
  }, Error, "EncodingError U+B648");
  assertThrows(() => {
    ms932Encoder.encode("\uB649");
  }, Error, "EncodingError U+B649");
  assertThrows(() => {
    ms932Encoder.encode("\uB64A");
  }, Error, "EncodingError U+B64A");
  assertThrows(() => {
    ms932Encoder.encode("\uB64B");
  }, Error, "EncodingError U+B64B");
  assertThrows(() => {
    ms932Encoder.encode("\uB64C");
  }, Error, "EncodingError U+B64C");
  assertThrows(() => {
    ms932Encoder.encode("\uB64D");
  }, Error, "EncodingError U+B64D");
  assertThrows(() => {
    ms932Encoder.encode("\uB64E");
  }, Error, "EncodingError U+B64E");
  assertThrows(() => {
    ms932Encoder.encode("\uB64F");
  }, Error, "EncodingError U+B64F");
  assertThrows(() => {
    ms932Encoder.encode("\uB650");
  }, Error, "EncodingError U+B650");
  assertThrows(() => {
    ms932Encoder.encode("\uB651");
  }, Error, "EncodingError U+B651");
  assertThrows(() => {
    ms932Encoder.encode("\uB652");
  }, Error, "EncodingError U+B652");
  assertThrows(() => {
    ms932Encoder.encode("\uB653");
  }, Error, "EncodingError U+B653");
  assertThrows(() => {
    ms932Encoder.encode("\uB654");
  }, Error, "EncodingError U+B654");
  assertThrows(() => {
    ms932Encoder.encode("\uB655");
  }, Error, "EncodingError U+B655");
  assertThrows(() => {
    ms932Encoder.encode("\uB656");
  }, Error, "EncodingError U+B656");
  assertThrows(() => {
    ms932Encoder.encode("\uB657");
  }, Error, "EncodingError U+B657");
  assertThrows(() => {
    ms932Encoder.encode("\uB658");
  }, Error, "EncodingError U+B658");
  assertThrows(() => {
    ms932Encoder.encode("\uB659");
  }, Error, "EncodingError U+B659");
  assertThrows(() => {
    ms932Encoder.encode("\uB65A");
  }, Error, "EncodingError U+B65A");
  assertThrows(() => {
    ms932Encoder.encode("\uB65B");
  }, Error, "EncodingError U+B65B");
  assertThrows(() => {
    ms932Encoder.encode("\uB65C");
  }, Error, "EncodingError U+B65C");
  assertThrows(() => {
    ms932Encoder.encode("\uB65D");
  }, Error, "EncodingError U+B65D");
  assertThrows(() => {
    ms932Encoder.encode("\uB65E");
  }, Error, "EncodingError U+B65E");
  assertThrows(() => {
    ms932Encoder.encode("\uB65F");
  }, Error, "EncodingError U+B65F");
  assertThrows(() => {
    ms932Encoder.encode("\uB660");
  }, Error, "EncodingError U+B660");
  assertThrows(() => {
    ms932Encoder.encode("\uB661");
  }, Error, "EncodingError U+B661");
  assertThrows(() => {
    ms932Encoder.encode("\uB662");
  }, Error, "EncodingError U+B662");
  assertThrows(() => {
    ms932Encoder.encode("\uB663");
  }, Error, "EncodingError U+B663");
  assertThrows(() => {
    ms932Encoder.encode("\uB664");
  }, Error, "EncodingError U+B664");
  assertThrows(() => {
    ms932Encoder.encode("\uB665");
  }, Error, "EncodingError U+B665");
  assertThrows(() => {
    ms932Encoder.encode("\uB666");
  }, Error, "EncodingError U+B666");
  assertThrows(() => {
    ms932Encoder.encode("\uB667");
  }, Error, "EncodingError U+B667");
  assertThrows(() => {
    ms932Encoder.encode("\uB668");
  }, Error, "EncodingError U+B668");
  assertThrows(() => {
    ms932Encoder.encode("\uB669");
  }, Error, "EncodingError U+B669");
  assertThrows(() => {
    ms932Encoder.encode("\uB66A");
  }, Error, "EncodingError U+B66A");
  assertThrows(() => {
    ms932Encoder.encode("\uB66B");
  }, Error, "EncodingError U+B66B");
  assertThrows(() => {
    ms932Encoder.encode("\uB66C");
  }, Error, "EncodingError U+B66C");
  assertThrows(() => {
    ms932Encoder.encode("\uB66D");
  }, Error, "EncodingError U+B66D");
  assertThrows(() => {
    ms932Encoder.encode("\uB66E");
  }, Error, "EncodingError U+B66E");
  assertThrows(() => {
    ms932Encoder.encode("\uB66F");
  }, Error, "EncodingError U+B66F");
  assertThrows(() => {
    ms932Encoder.encode("\uB670");
  }, Error, "EncodingError U+B670");
  assertThrows(() => {
    ms932Encoder.encode("\uB671");
  }, Error, "EncodingError U+B671");
  assertThrows(() => {
    ms932Encoder.encode("\uB672");
  }, Error, "EncodingError U+B672");
  assertThrows(() => {
    ms932Encoder.encode("\uB673");
  }, Error, "EncodingError U+B673");
  assertThrows(() => {
    ms932Encoder.encode("\uB674");
  }, Error, "EncodingError U+B674");
  assertThrows(() => {
    ms932Encoder.encode("\uB675");
  }, Error, "EncodingError U+B675");
  assertThrows(() => {
    ms932Encoder.encode("\uB676");
  }, Error, "EncodingError U+B676");
  assertThrows(() => {
    ms932Encoder.encode("\uB677");
  }, Error, "EncodingError U+B677");
  assertThrows(() => {
    ms932Encoder.encode("\uB678");
  }, Error, "EncodingError U+B678");
  assertThrows(() => {
    ms932Encoder.encode("\uB679");
  }, Error, "EncodingError U+B679");
  assertThrows(() => {
    ms932Encoder.encode("\uB67A");
  }, Error, "EncodingError U+B67A");
  assertThrows(() => {
    ms932Encoder.encode("\uB67B");
  }, Error, "EncodingError U+B67B");
  assertThrows(() => {
    ms932Encoder.encode("\uB67C");
  }, Error, "EncodingError U+B67C");
  assertThrows(() => {
    ms932Encoder.encode("\uB67D");
  }, Error, "EncodingError U+B67D");
  assertThrows(() => {
    ms932Encoder.encode("\uB67E");
  }, Error, "EncodingError U+B67E");
  assertThrows(() => {
    ms932Encoder.encode("\uB67F");
  }, Error, "EncodingError U+B67F");
  assertThrows(() => {
    ms932Encoder.encode("\uB680");
  }, Error, "EncodingError U+B680");
  assertThrows(() => {
    ms932Encoder.encode("\uB681");
  }, Error, "EncodingError U+B681");
  assertThrows(() => {
    ms932Encoder.encode("\uB682");
  }, Error, "EncodingError U+B682");
  assertThrows(() => {
    ms932Encoder.encode("\uB683");
  }, Error, "EncodingError U+B683");
  assertThrows(() => {
    ms932Encoder.encode("\uB684");
  }, Error, "EncodingError U+B684");
  assertThrows(() => {
    ms932Encoder.encode("\uB685");
  }, Error, "EncodingError U+B685");
  assertThrows(() => {
    ms932Encoder.encode("\uB686");
  }, Error, "EncodingError U+B686");
  assertThrows(() => {
    ms932Encoder.encode("\uB687");
  }, Error, "EncodingError U+B687");
  assertThrows(() => {
    ms932Encoder.encode("\uB688");
  }, Error, "EncodingError U+B688");
  assertThrows(() => {
    ms932Encoder.encode("\uB689");
  }, Error, "EncodingError U+B689");
  assertThrows(() => {
    ms932Encoder.encode("\uB68A");
  }, Error, "EncodingError U+B68A");
  assertThrows(() => {
    ms932Encoder.encode("\uB68B");
  }, Error, "EncodingError U+B68B");
  assertThrows(() => {
    ms932Encoder.encode("\uB68C");
  }, Error, "EncodingError U+B68C");
  assertThrows(() => {
    ms932Encoder.encode("\uB68D");
  }, Error, "EncodingError U+B68D");
  assertThrows(() => {
    ms932Encoder.encode("\uB68E");
  }, Error, "EncodingError U+B68E");
  assertThrows(() => {
    ms932Encoder.encode("\uB68F");
  }, Error, "EncodingError U+B68F");
  assertThrows(() => {
    ms932Encoder.encode("\uB690");
  }, Error, "EncodingError U+B690");
  assertThrows(() => {
    ms932Encoder.encode("\uB691");
  }, Error, "EncodingError U+B691");
  assertThrows(() => {
    ms932Encoder.encode("\uB692");
  }, Error, "EncodingError U+B692");
  assertThrows(() => {
    ms932Encoder.encode("\uB693");
  }, Error, "EncodingError U+B693");
  assertThrows(() => {
    ms932Encoder.encode("\uB694");
  }, Error, "EncodingError U+B694");
  assertThrows(() => {
    ms932Encoder.encode("\uB695");
  }, Error, "EncodingError U+B695");
  assertThrows(() => {
    ms932Encoder.encode("\uB696");
  }, Error, "EncodingError U+B696");
  assertThrows(() => {
    ms932Encoder.encode("\uB697");
  }, Error, "EncodingError U+B697");
  assertThrows(() => {
    ms932Encoder.encode("\uB698");
  }, Error, "EncodingError U+B698");
  assertThrows(() => {
    ms932Encoder.encode("\uB699");
  }, Error, "EncodingError U+B699");
  assertThrows(() => {
    ms932Encoder.encode("\uB69A");
  }, Error, "EncodingError U+B69A");
  assertThrows(() => {
    ms932Encoder.encode("\uB69B");
  }, Error, "EncodingError U+B69B");
  assertThrows(() => {
    ms932Encoder.encode("\uB69C");
  }, Error, "EncodingError U+B69C");
  assertThrows(() => {
    ms932Encoder.encode("\uB69D");
  }, Error, "EncodingError U+B69D");
  assertThrows(() => {
    ms932Encoder.encode("\uB69E");
  }, Error, "EncodingError U+B69E");
  assertThrows(() => {
    ms932Encoder.encode("\uB69F");
  }, Error, "EncodingError U+B69F");
  assertThrows(() => {
    ms932Encoder.encode("\uB6A0");
  }, Error, "EncodingError U+B6A0");
  assertThrows(() => {
    ms932Encoder.encode("\uB6A1");
  }, Error, "EncodingError U+B6A1");
  assertThrows(() => {
    ms932Encoder.encode("\uB6A2");
  }, Error, "EncodingError U+B6A2");
  assertThrows(() => {
    ms932Encoder.encode("\uB6A3");
  }, Error, "EncodingError U+B6A3");
  assertThrows(() => {
    ms932Encoder.encode("\uB6A4");
  }, Error, "EncodingError U+B6A4");
  assertThrows(() => {
    ms932Encoder.encode("\uB6A5");
  }, Error, "EncodingError U+B6A5");
  assertThrows(() => {
    ms932Encoder.encode("\uB6A6");
  }, Error, "EncodingError U+B6A6");
  assertThrows(() => {
    ms932Encoder.encode("\uB6A7");
  }, Error, "EncodingError U+B6A7");
  assertThrows(() => {
    ms932Encoder.encode("\uB6A8");
  }, Error, "EncodingError U+B6A8");
  assertThrows(() => {
    ms932Encoder.encode("\uB6A9");
  }, Error, "EncodingError U+B6A9");
  assertThrows(() => {
    ms932Encoder.encode("\uB6AA");
  }, Error, "EncodingError U+B6AA");
  assertThrows(() => {
    ms932Encoder.encode("\uB6AB");
  }, Error, "EncodingError U+B6AB");
  assertThrows(() => {
    ms932Encoder.encode("\uB6AC");
  }, Error, "EncodingError U+B6AC");
  assertThrows(() => {
    ms932Encoder.encode("\uB6AD");
  }, Error, "EncodingError U+B6AD");
  assertThrows(() => {
    ms932Encoder.encode("\uB6AE");
  }, Error, "EncodingError U+B6AE");
  assertThrows(() => {
    ms932Encoder.encode("\uB6AF");
  }, Error, "EncodingError U+B6AF");
  assertThrows(() => {
    ms932Encoder.encode("\uB6B0");
  }, Error, "EncodingError U+B6B0");
  assertThrows(() => {
    ms932Encoder.encode("\uB6B1");
  }, Error, "EncodingError U+B6B1");
  assertThrows(() => {
    ms932Encoder.encode("\uB6B2");
  }, Error, "EncodingError U+B6B2");
  assertThrows(() => {
    ms932Encoder.encode("\uB6B3");
  }, Error, "EncodingError U+B6B3");
  assertThrows(() => {
    ms932Encoder.encode("\uB6B4");
  }, Error, "EncodingError U+B6B4");
  assertThrows(() => {
    ms932Encoder.encode("\uB6B5");
  }, Error, "EncodingError U+B6B5");
  assertThrows(() => {
    ms932Encoder.encode("\uB6B6");
  }, Error, "EncodingError U+B6B6");
  assertThrows(() => {
    ms932Encoder.encode("\uB6B7");
  }, Error, "EncodingError U+B6B7");
  assertThrows(() => {
    ms932Encoder.encode("\uB6B8");
  }, Error, "EncodingError U+B6B8");
  assertThrows(() => {
    ms932Encoder.encode("\uB6B9");
  }, Error, "EncodingError U+B6B9");
  assertThrows(() => {
    ms932Encoder.encode("\uB6BA");
  }, Error, "EncodingError U+B6BA");
  assertThrows(() => {
    ms932Encoder.encode("\uB6BB");
  }, Error, "EncodingError U+B6BB");
  assertThrows(() => {
    ms932Encoder.encode("\uB6BC");
  }, Error, "EncodingError U+B6BC");
  assertThrows(() => {
    ms932Encoder.encode("\uB6BD");
  }, Error, "EncodingError U+B6BD");
  assertThrows(() => {
    ms932Encoder.encode("\uB6BE");
  }, Error, "EncodingError U+B6BE");
  assertThrows(() => {
    ms932Encoder.encode("\uB6BF");
  }, Error, "EncodingError U+B6BF");
  assertThrows(() => {
    ms932Encoder.encode("\uB6C0");
  }, Error, "EncodingError U+B6C0");
  assertThrows(() => {
    ms932Encoder.encode("\uB6C1");
  }, Error, "EncodingError U+B6C1");
  assertThrows(() => {
    ms932Encoder.encode("\uB6C2");
  }, Error, "EncodingError U+B6C2");
  assertThrows(() => {
    ms932Encoder.encode("\uB6C3");
  }, Error, "EncodingError U+B6C3");
  assertThrows(() => {
    ms932Encoder.encode("\uB6C4");
  }, Error, "EncodingError U+B6C4");
  assertThrows(() => {
    ms932Encoder.encode("\uB6C5");
  }, Error, "EncodingError U+B6C5");
  assertThrows(() => {
    ms932Encoder.encode("\uB6C6");
  }, Error, "EncodingError U+B6C6");
  assertThrows(() => {
    ms932Encoder.encode("\uB6C7");
  }, Error, "EncodingError U+B6C7");
  assertThrows(() => {
    ms932Encoder.encode("\uB6C8");
  }, Error, "EncodingError U+B6C8");
  assertThrows(() => {
    ms932Encoder.encode("\uB6C9");
  }, Error, "EncodingError U+B6C9");
  assertThrows(() => {
    ms932Encoder.encode("\uB6CA");
  }, Error, "EncodingError U+B6CA");
  assertThrows(() => {
    ms932Encoder.encode("\uB6CB");
  }, Error, "EncodingError U+B6CB");
  assertThrows(() => {
    ms932Encoder.encode("\uB6CC");
  }, Error, "EncodingError U+B6CC");
  assertThrows(() => {
    ms932Encoder.encode("\uB6CD");
  }, Error, "EncodingError U+B6CD");
  assertThrows(() => {
    ms932Encoder.encode("\uB6CE");
  }, Error, "EncodingError U+B6CE");
  assertThrows(() => {
    ms932Encoder.encode("\uB6CF");
  }, Error, "EncodingError U+B6CF");
  assertThrows(() => {
    ms932Encoder.encode("\uB6D0");
  }, Error, "EncodingError U+B6D0");
  assertThrows(() => {
    ms932Encoder.encode("\uB6D1");
  }, Error, "EncodingError U+B6D1");
  assertThrows(() => {
    ms932Encoder.encode("\uB6D2");
  }, Error, "EncodingError U+B6D2");
  assertThrows(() => {
    ms932Encoder.encode("\uB6D3");
  }, Error, "EncodingError U+B6D3");
  assertThrows(() => {
    ms932Encoder.encode("\uB6D4");
  }, Error, "EncodingError U+B6D4");
  assertThrows(() => {
    ms932Encoder.encode("\uB6D5");
  }, Error, "EncodingError U+B6D5");
  assertThrows(() => {
    ms932Encoder.encode("\uB6D6");
  }, Error, "EncodingError U+B6D6");
  assertThrows(() => {
    ms932Encoder.encode("\uB6D7");
  }, Error, "EncodingError U+B6D7");
  assertThrows(() => {
    ms932Encoder.encode("\uB6D8");
  }, Error, "EncodingError U+B6D8");
  assertThrows(() => {
    ms932Encoder.encode("\uB6D9");
  }, Error, "EncodingError U+B6D9");
  assertThrows(() => {
    ms932Encoder.encode("\uB6DA");
  }, Error, "EncodingError U+B6DA");
  assertThrows(() => {
    ms932Encoder.encode("\uB6DB");
  }, Error, "EncodingError U+B6DB");
  assertThrows(() => {
    ms932Encoder.encode("\uB6DC");
  }, Error, "EncodingError U+B6DC");
  assertThrows(() => {
    ms932Encoder.encode("\uB6DD");
  }, Error, "EncodingError U+B6DD");
  assertThrows(() => {
    ms932Encoder.encode("\uB6DE");
  }, Error, "EncodingError U+B6DE");
  assertThrows(() => {
    ms932Encoder.encode("\uB6DF");
  }, Error, "EncodingError U+B6DF");
  assertThrows(() => {
    ms932Encoder.encode("\uB6E0");
  }, Error, "EncodingError U+B6E0");
  assertThrows(() => {
    ms932Encoder.encode("\uB6E1");
  }, Error, "EncodingError U+B6E1");
  assertThrows(() => {
    ms932Encoder.encode("\uB6E2");
  }, Error, "EncodingError U+B6E2");
  assertThrows(() => {
    ms932Encoder.encode("\uB6E3");
  }, Error, "EncodingError U+B6E3");
  assertThrows(() => {
    ms932Encoder.encode("\uB6E4");
  }, Error, "EncodingError U+B6E4");
  assertThrows(() => {
    ms932Encoder.encode("\uB6E5");
  }, Error, "EncodingError U+B6E5");
  assertThrows(() => {
    ms932Encoder.encode("\uB6E6");
  }, Error, "EncodingError U+B6E6");
  assertThrows(() => {
    ms932Encoder.encode("\uB6E7");
  }, Error, "EncodingError U+B6E7");
  assertThrows(() => {
    ms932Encoder.encode("\uB6E8");
  }, Error, "EncodingError U+B6E8");
  assertThrows(() => {
    ms932Encoder.encode("\uB6E9");
  }, Error, "EncodingError U+B6E9");
  assertThrows(() => {
    ms932Encoder.encode("\uB6EA");
  }, Error, "EncodingError U+B6EA");
  assertThrows(() => {
    ms932Encoder.encode("\uB6EB");
  }, Error, "EncodingError U+B6EB");
  assertThrows(() => {
    ms932Encoder.encode("\uB6EC");
  }, Error, "EncodingError U+B6EC");
  assertThrows(() => {
    ms932Encoder.encode("\uB6ED");
  }, Error, "EncodingError U+B6ED");
  assertThrows(() => {
    ms932Encoder.encode("\uB6EE");
  }, Error, "EncodingError U+B6EE");
  assertThrows(() => {
    ms932Encoder.encode("\uB6EF");
  }, Error, "EncodingError U+B6EF");
  assertThrows(() => {
    ms932Encoder.encode("\uB6F0");
  }, Error, "EncodingError U+B6F0");
  assertThrows(() => {
    ms932Encoder.encode("\uB6F1");
  }, Error, "EncodingError U+B6F1");
  assertThrows(() => {
    ms932Encoder.encode("\uB6F2");
  }, Error, "EncodingError U+B6F2");
  assertThrows(() => {
    ms932Encoder.encode("\uB6F3");
  }, Error, "EncodingError U+B6F3");
  assertThrows(() => {
    ms932Encoder.encode("\uB6F4");
  }, Error, "EncodingError U+B6F4");
  assertThrows(() => {
    ms932Encoder.encode("\uB6F5");
  }, Error, "EncodingError U+B6F5");
  assertThrows(() => {
    ms932Encoder.encode("\uB6F6");
  }, Error, "EncodingError U+B6F6");
  assertThrows(() => {
    ms932Encoder.encode("\uB6F7");
  }, Error, "EncodingError U+B6F7");
  assertThrows(() => {
    ms932Encoder.encode("\uB6F8");
  }, Error, "EncodingError U+B6F8");
  assertThrows(() => {
    ms932Encoder.encode("\uB6F9");
  }, Error, "EncodingError U+B6F9");
  assertThrows(() => {
    ms932Encoder.encode("\uB6FA");
  }, Error, "EncodingError U+B6FA");
  assertThrows(() => {
    ms932Encoder.encode("\uB6FB");
  }, Error, "EncodingError U+B6FB");
  assertThrows(() => {
    ms932Encoder.encode("\uB6FC");
  }, Error, "EncodingError U+B6FC");
  assertThrows(() => {
    ms932Encoder.encode("\uB6FD");
  }, Error, "EncodingError U+B6FD");
  assertThrows(() => {
    ms932Encoder.encode("\uB6FE");
  }, Error, "EncodingError U+B6FE");
  assertThrows(() => {
    ms932Encoder.encode("\uB6FF");
  }, Error, "EncodingError U+B6FF");
  assertThrows(() => {
    ms932Encoder.encode("\uB700");
  }, Error, "EncodingError U+B700");
  assertThrows(() => {
    ms932Encoder.encode("\uB701");
  }, Error, "EncodingError U+B701");
  assertThrows(() => {
    ms932Encoder.encode("\uB702");
  }, Error, "EncodingError U+B702");
  assertThrows(() => {
    ms932Encoder.encode("\uB703");
  }, Error, "EncodingError U+B703");
  assertThrows(() => {
    ms932Encoder.encode("\uB704");
  }, Error, "EncodingError U+B704");
  assertThrows(() => {
    ms932Encoder.encode("\uB705");
  }, Error, "EncodingError U+B705");
  assertThrows(() => {
    ms932Encoder.encode("\uB706");
  }, Error, "EncodingError U+B706");
  assertThrows(() => {
    ms932Encoder.encode("\uB707");
  }, Error, "EncodingError U+B707");
  assertThrows(() => {
    ms932Encoder.encode("\uB708");
  }, Error, "EncodingError U+B708");
  assertThrows(() => {
    ms932Encoder.encode("\uB709");
  }, Error, "EncodingError U+B709");
  assertThrows(() => {
    ms932Encoder.encode("\uB70A");
  }, Error, "EncodingError U+B70A");
  assertThrows(() => {
    ms932Encoder.encode("\uB70B");
  }, Error, "EncodingError U+B70B");
  assertThrows(() => {
    ms932Encoder.encode("\uB70C");
  }, Error, "EncodingError U+B70C");
  assertThrows(() => {
    ms932Encoder.encode("\uB70D");
  }, Error, "EncodingError U+B70D");
  assertThrows(() => {
    ms932Encoder.encode("\uB70E");
  }, Error, "EncodingError U+B70E");
  assertThrows(() => {
    ms932Encoder.encode("\uB70F");
  }, Error, "EncodingError U+B70F");
  assertThrows(() => {
    ms932Encoder.encode("\uB710");
  }, Error, "EncodingError U+B710");
  assertThrows(() => {
    ms932Encoder.encode("\uB711");
  }, Error, "EncodingError U+B711");
  assertThrows(() => {
    ms932Encoder.encode("\uB712");
  }, Error, "EncodingError U+B712");
  assertThrows(() => {
    ms932Encoder.encode("\uB713");
  }, Error, "EncodingError U+B713");
  assertThrows(() => {
    ms932Encoder.encode("\uB714");
  }, Error, "EncodingError U+B714");
  assertThrows(() => {
    ms932Encoder.encode("\uB715");
  }, Error, "EncodingError U+B715");
  assertThrows(() => {
    ms932Encoder.encode("\uB716");
  }, Error, "EncodingError U+B716");
  assertThrows(() => {
    ms932Encoder.encode("\uB717");
  }, Error, "EncodingError U+B717");
  assertThrows(() => {
    ms932Encoder.encode("\uB718");
  }, Error, "EncodingError U+B718");
  assertThrows(() => {
    ms932Encoder.encode("\uB719");
  }, Error, "EncodingError U+B719");
  assertThrows(() => {
    ms932Encoder.encode("\uB71A");
  }, Error, "EncodingError U+B71A");
  assertThrows(() => {
    ms932Encoder.encode("\uB71B");
  }, Error, "EncodingError U+B71B");
  assertThrows(() => {
    ms932Encoder.encode("\uB71C");
  }, Error, "EncodingError U+B71C");
  assertThrows(() => {
    ms932Encoder.encode("\uB71D");
  }, Error, "EncodingError U+B71D");
  assertThrows(() => {
    ms932Encoder.encode("\uB71E");
  }, Error, "EncodingError U+B71E");
  assertThrows(() => {
    ms932Encoder.encode("\uB71F");
  }, Error, "EncodingError U+B71F");
  assertThrows(() => {
    ms932Encoder.encode("\uB720");
  }, Error, "EncodingError U+B720");
  assertThrows(() => {
    ms932Encoder.encode("\uB721");
  }, Error, "EncodingError U+B721");
  assertThrows(() => {
    ms932Encoder.encode("\uB722");
  }, Error, "EncodingError U+B722");
  assertThrows(() => {
    ms932Encoder.encode("\uB723");
  }, Error, "EncodingError U+B723");
  assertThrows(() => {
    ms932Encoder.encode("\uB724");
  }, Error, "EncodingError U+B724");
  assertThrows(() => {
    ms932Encoder.encode("\uB725");
  }, Error, "EncodingError U+B725");
  assertThrows(() => {
    ms932Encoder.encode("\uB726");
  }, Error, "EncodingError U+B726");
  assertThrows(() => {
    ms932Encoder.encode("\uB727");
  }, Error, "EncodingError U+B727");
  assertThrows(() => {
    ms932Encoder.encode("\uB728");
  }, Error, "EncodingError U+B728");
  assertThrows(() => {
    ms932Encoder.encode("\uB729");
  }, Error, "EncodingError U+B729");
  assertThrows(() => {
    ms932Encoder.encode("\uB72A");
  }, Error, "EncodingError U+B72A");
  assertThrows(() => {
    ms932Encoder.encode("\uB72B");
  }, Error, "EncodingError U+B72B");
  assertThrows(() => {
    ms932Encoder.encode("\uB72C");
  }, Error, "EncodingError U+B72C");
  assertThrows(() => {
    ms932Encoder.encode("\uB72D");
  }, Error, "EncodingError U+B72D");
  assertThrows(() => {
    ms932Encoder.encode("\uB72E");
  }, Error, "EncodingError U+B72E");
  assertThrows(() => {
    ms932Encoder.encode("\uB72F");
  }, Error, "EncodingError U+B72F");
  assertThrows(() => {
    ms932Encoder.encode("\uB730");
  }, Error, "EncodingError U+B730");
  assertThrows(() => {
    ms932Encoder.encode("\uB731");
  }, Error, "EncodingError U+B731");
  assertThrows(() => {
    ms932Encoder.encode("\uB732");
  }, Error, "EncodingError U+B732");
  assertThrows(() => {
    ms932Encoder.encode("\uB733");
  }, Error, "EncodingError U+B733");
  assertThrows(() => {
    ms932Encoder.encode("\uB734");
  }, Error, "EncodingError U+B734");
  assertThrows(() => {
    ms932Encoder.encode("\uB735");
  }, Error, "EncodingError U+B735");
  assertThrows(() => {
    ms932Encoder.encode("\uB736");
  }, Error, "EncodingError U+B736");
  assertThrows(() => {
    ms932Encoder.encode("\uB737");
  }, Error, "EncodingError U+B737");
  assertThrows(() => {
    ms932Encoder.encode("\uB738");
  }, Error, "EncodingError U+B738");
  assertThrows(() => {
    ms932Encoder.encode("\uB739");
  }, Error, "EncodingError U+B739");
  assertThrows(() => {
    ms932Encoder.encode("\uB73A");
  }, Error, "EncodingError U+B73A");
  assertThrows(() => {
    ms932Encoder.encode("\uB73B");
  }, Error, "EncodingError U+B73B");
  assertThrows(() => {
    ms932Encoder.encode("\uB73C");
  }, Error, "EncodingError U+B73C");
  assertThrows(() => {
    ms932Encoder.encode("\uB73D");
  }, Error, "EncodingError U+B73D");
  assertThrows(() => {
    ms932Encoder.encode("\uB73E");
  }, Error, "EncodingError U+B73E");
  assertThrows(() => {
    ms932Encoder.encode("\uB73F");
  }, Error, "EncodingError U+B73F");
  assertThrows(() => {
    ms932Encoder.encode("\uB740");
  }, Error, "EncodingError U+B740");
  assertThrows(() => {
    ms932Encoder.encode("\uB741");
  }, Error, "EncodingError U+B741");
  assertThrows(() => {
    ms932Encoder.encode("\uB742");
  }, Error, "EncodingError U+B742");
  assertThrows(() => {
    ms932Encoder.encode("\uB743");
  }, Error, "EncodingError U+B743");
  assertThrows(() => {
    ms932Encoder.encode("\uB744");
  }, Error, "EncodingError U+B744");
  assertThrows(() => {
    ms932Encoder.encode("\uB745");
  }, Error, "EncodingError U+B745");
  assertThrows(() => {
    ms932Encoder.encode("\uB746");
  }, Error, "EncodingError U+B746");
  assertThrows(() => {
    ms932Encoder.encode("\uB747");
  }, Error, "EncodingError U+B747");
  assertThrows(() => {
    ms932Encoder.encode("\uB748");
  }, Error, "EncodingError U+B748");
  assertThrows(() => {
    ms932Encoder.encode("\uB749");
  }, Error, "EncodingError U+B749");
  assertThrows(() => {
    ms932Encoder.encode("\uB74A");
  }, Error, "EncodingError U+B74A");
  assertThrows(() => {
    ms932Encoder.encode("\uB74B");
  }, Error, "EncodingError U+B74B");
  assertThrows(() => {
    ms932Encoder.encode("\uB74C");
  }, Error, "EncodingError U+B74C");
  assertThrows(() => {
    ms932Encoder.encode("\uB74D");
  }, Error, "EncodingError U+B74D");
  assertThrows(() => {
    ms932Encoder.encode("\uB74E");
  }, Error, "EncodingError U+B74E");
  assertThrows(() => {
    ms932Encoder.encode("\uB74F");
  }, Error, "EncodingError U+B74F");
  assertThrows(() => {
    ms932Encoder.encode("\uB750");
  }, Error, "EncodingError U+B750");
  assertThrows(() => {
    ms932Encoder.encode("\uB751");
  }, Error, "EncodingError U+B751");
  assertThrows(() => {
    ms932Encoder.encode("\uB752");
  }, Error, "EncodingError U+B752");
  assertThrows(() => {
    ms932Encoder.encode("\uB753");
  }, Error, "EncodingError U+B753");
  assertThrows(() => {
    ms932Encoder.encode("\uB754");
  }, Error, "EncodingError U+B754");
  assertThrows(() => {
    ms932Encoder.encode("\uB755");
  }, Error, "EncodingError U+B755");
  assertThrows(() => {
    ms932Encoder.encode("\uB756");
  }, Error, "EncodingError U+B756");
  assertThrows(() => {
    ms932Encoder.encode("\uB757");
  }, Error, "EncodingError U+B757");
  assertThrows(() => {
    ms932Encoder.encode("\uB758");
  }, Error, "EncodingError U+B758");
  assertThrows(() => {
    ms932Encoder.encode("\uB759");
  }, Error, "EncodingError U+B759");
  assertThrows(() => {
    ms932Encoder.encode("\uB75A");
  }, Error, "EncodingError U+B75A");
  assertThrows(() => {
    ms932Encoder.encode("\uB75B");
  }, Error, "EncodingError U+B75B");
  assertThrows(() => {
    ms932Encoder.encode("\uB75C");
  }, Error, "EncodingError U+B75C");
  assertThrows(() => {
    ms932Encoder.encode("\uB75D");
  }, Error, "EncodingError U+B75D");
  assertThrows(() => {
    ms932Encoder.encode("\uB75E");
  }, Error, "EncodingError U+B75E");
  assertThrows(() => {
    ms932Encoder.encode("\uB75F");
  }, Error, "EncodingError U+B75F");
  assertThrows(() => {
    ms932Encoder.encode("\uB760");
  }, Error, "EncodingError U+B760");
  assertThrows(() => {
    ms932Encoder.encode("\uB761");
  }, Error, "EncodingError U+B761");
  assertThrows(() => {
    ms932Encoder.encode("\uB762");
  }, Error, "EncodingError U+B762");
  assertThrows(() => {
    ms932Encoder.encode("\uB763");
  }, Error, "EncodingError U+B763");
  assertThrows(() => {
    ms932Encoder.encode("\uB764");
  }, Error, "EncodingError U+B764");
  assertThrows(() => {
    ms932Encoder.encode("\uB765");
  }, Error, "EncodingError U+B765");
  assertThrows(() => {
    ms932Encoder.encode("\uB766");
  }, Error, "EncodingError U+B766");
  assertThrows(() => {
    ms932Encoder.encode("\uB767");
  }, Error, "EncodingError U+B767");
  assertThrows(() => {
    ms932Encoder.encode("\uB768");
  }, Error, "EncodingError U+B768");
  assertThrows(() => {
    ms932Encoder.encode("\uB769");
  }, Error, "EncodingError U+B769");
  assertThrows(() => {
    ms932Encoder.encode("\uB76A");
  }, Error, "EncodingError U+B76A");
  assertThrows(() => {
    ms932Encoder.encode("\uB76B");
  }, Error, "EncodingError U+B76B");
  assertThrows(() => {
    ms932Encoder.encode("\uB76C");
  }, Error, "EncodingError U+B76C");
  assertThrows(() => {
    ms932Encoder.encode("\uB76D");
  }, Error, "EncodingError U+B76D");
  assertThrows(() => {
    ms932Encoder.encode("\uB76E");
  }, Error, "EncodingError U+B76E");
  assertThrows(() => {
    ms932Encoder.encode("\uB76F");
  }, Error, "EncodingError U+B76F");
  assertThrows(() => {
    ms932Encoder.encode("\uB770");
  }, Error, "EncodingError U+B770");
  assertThrows(() => {
    ms932Encoder.encode("\uB771");
  }, Error, "EncodingError U+B771");
  assertThrows(() => {
    ms932Encoder.encode("\uB772");
  }, Error, "EncodingError U+B772");
  assertThrows(() => {
    ms932Encoder.encode("\uB773");
  }, Error, "EncodingError U+B773");
  assertThrows(() => {
    ms932Encoder.encode("\uB774");
  }, Error, "EncodingError U+B774");
  assertThrows(() => {
    ms932Encoder.encode("\uB775");
  }, Error, "EncodingError U+B775");
  assertThrows(() => {
    ms932Encoder.encode("\uB776");
  }, Error, "EncodingError U+B776");
  assertThrows(() => {
    ms932Encoder.encode("\uB777");
  }, Error, "EncodingError U+B777");
  assertThrows(() => {
    ms932Encoder.encode("\uB778");
  }, Error, "EncodingError U+B778");
  assertThrows(() => {
    ms932Encoder.encode("\uB779");
  }, Error, "EncodingError U+B779");
  assertThrows(() => {
    ms932Encoder.encode("\uB77A");
  }, Error, "EncodingError U+B77A");
  assertThrows(() => {
    ms932Encoder.encode("\uB77B");
  }, Error, "EncodingError U+B77B");
  assertThrows(() => {
    ms932Encoder.encode("\uB77C");
  }, Error, "EncodingError U+B77C");
  assertThrows(() => {
    ms932Encoder.encode("\uB77D");
  }, Error, "EncodingError U+B77D");
  assertThrows(() => {
    ms932Encoder.encode("\uB77E");
  }, Error, "EncodingError U+B77E");
  assertThrows(() => {
    ms932Encoder.encode("\uB77F");
  }, Error, "EncodingError U+B77F");
  assertThrows(() => {
    ms932Encoder.encode("\uB780");
  }, Error, "EncodingError U+B780");
  assertThrows(() => {
    ms932Encoder.encode("\uB781");
  }, Error, "EncodingError U+B781");
  assertThrows(() => {
    ms932Encoder.encode("\uB782");
  }, Error, "EncodingError U+B782");
  assertThrows(() => {
    ms932Encoder.encode("\uB783");
  }, Error, "EncodingError U+B783");
  assertThrows(() => {
    ms932Encoder.encode("\uB784");
  }, Error, "EncodingError U+B784");
  assertThrows(() => {
    ms932Encoder.encode("\uB785");
  }, Error, "EncodingError U+B785");
  assertThrows(() => {
    ms932Encoder.encode("\uB786");
  }, Error, "EncodingError U+B786");
  assertThrows(() => {
    ms932Encoder.encode("\uB787");
  }, Error, "EncodingError U+B787");
  assertThrows(() => {
    ms932Encoder.encode("\uB788");
  }, Error, "EncodingError U+B788");
  assertThrows(() => {
    ms932Encoder.encode("\uB789");
  }, Error, "EncodingError U+B789");
  assertThrows(() => {
    ms932Encoder.encode("\uB78A");
  }, Error, "EncodingError U+B78A");
  assertThrows(() => {
    ms932Encoder.encode("\uB78B");
  }, Error, "EncodingError U+B78B");
  assertThrows(() => {
    ms932Encoder.encode("\uB78C");
  }, Error, "EncodingError U+B78C");
  assertThrows(() => {
    ms932Encoder.encode("\uB78D");
  }, Error, "EncodingError U+B78D");
  assertThrows(() => {
    ms932Encoder.encode("\uB78E");
  }, Error, "EncodingError U+B78E");
  assertThrows(() => {
    ms932Encoder.encode("\uB78F");
  }, Error, "EncodingError U+B78F");
  assertThrows(() => {
    ms932Encoder.encode("\uB790");
  }, Error, "EncodingError U+B790");
  assertThrows(() => {
    ms932Encoder.encode("\uB791");
  }, Error, "EncodingError U+B791");
  assertThrows(() => {
    ms932Encoder.encode("\uB792");
  }, Error, "EncodingError U+B792");
  assertThrows(() => {
    ms932Encoder.encode("\uB793");
  }, Error, "EncodingError U+B793");
  assertThrows(() => {
    ms932Encoder.encode("\uB794");
  }, Error, "EncodingError U+B794");
  assertThrows(() => {
    ms932Encoder.encode("\uB795");
  }, Error, "EncodingError U+B795");
  assertThrows(() => {
    ms932Encoder.encode("\uB796");
  }, Error, "EncodingError U+B796");
  assertThrows(() => {
    ms932Encoder.encode("\uB797");
  }, Error, "EncodingError U+B797");
  assertThrows(() => {
    ms932Encoder.encode("\uB798");
  }, Error, "EncodingError U+B798");
  assertThrows(() => {
    ms932Encoder.encode("\uB799");
  }, Error, "EncodingError U+B799");
  assertThrows(() => {
    ms932Encoder.encode("\uB79A");
  }, Error, "EncodingError U+B79A");
  assertThrows(() => {
    ms932Encoder.encode("\uB79B");
  }, Error, "EncodingError U+B79B");
  assertThrows(() => {
    ms932Encoder.encode("\uB79C");
  }, Error, "EncodingError U+B79C");
  assertThrows(() => {
    ms932Encoder.encode("\uB79D");
  }, Error, "EncodingError U+B79D");
  assertThrows(() => {
    ms932Encoder.encode("\uB79E");
  }, Error, "EncodingError U+B79E");
  assertThrows(() => {
    ms932Encoder.encode("\uB79F");
  }, Error, "EncodingError U+B79F");
  assertThrows(() => {
    ms932Encoder.encode("\uB7A0");
  }, Error, "EncodingError U+B7A0");
  assertThrows(() => {
    ms932Encoder.encode("\uB7A1");
  }, Error, "EncodingError U+B7A1");
  assertThrows(() => {
    ms932Encoder.encode("\uB7A2");
  }, Error, "EncodingError U+B7A2");
  assertThrows(() => {
    ms932Encoder.encode("\uB7A3");
  }, Error, "EncodingError U+B7A3");
  assertThrows(() => {
    ms932Encoder.encode("\uB7A4");
  }, Error, "EncodingError U+B7A4");
  assertThrows(() => {
    ms932Encoder.encode("\uB7A5");
  }, Error, "EncodingError U+B7A5");
  assertThrows(() => {
    ms932Encoder.encode("\uB7A6");
  }, Error, "EncodingError U+B7A6");
  assertThrows(() => {
    ms932Encoder.encode("\uB7A7");
  }, Error, "EncodingError U+B7A7");
  assertThrows(() => {
    ms932Encoder.encode("\uB7A8");
  }, Error, "EncodingError U+B7A8");
  assertThrows(() => {
    ms932Encoder.encode("\uB7A9");
  }, Error, "EncodingError U+B7A9");
  assertThrows(() => {
    ms932Encoder.encode("\uB7AA");
  }, Error, "EncodingError U+B7AA");
  assertThrows(() => {
    ms932Encoder.encode("\uB7AB");
  }, Error, "EncodingError U+B7AB");
  assertThrows(() => {
    ms932Encoder.encode("\uB7AC");
  }, Error, "EncodingError U+B7AC");
  assertThrows(() => {
    ms932Encoder.encode("\uB7AD");
  }, Error, "EncodingError U+B7AD");
  assertThrows(() => {
    ms932Encoder.encode("\uB7AE");
  }, Error, "EncodingError U+B7AE");
  assertThrows(() => {
    ms932Encoder.encode("\uB7AF");
  }, Error, "EncodingError U+B7AF");
  assertThrows(() => {
    ms932Encoder.encode("\uB7B0");
  }, Error, "EncodingError U+B7B0");
  assertThrows(() => {
    ms932Encoder.encode("\uB7B1");
  }, Error, "EncodingError U+B7B1");
  assertThrows(() => {
    ms932Encoder.encode("\uB7B2");
  }, Error, "EncodingError U+B7B2");
  assertThrows(() => {
    ms932Encoder.encode("\uB7B3");
  }, Error, "EncodingError U+B7B3");
  assertThrows(() => {
    ms932Encoder.encode("\uB7B4");
  }, Error, "EncodingError U+B7B4");
  assertThrows(() => {
    ms932Encoder.encode("\uB7B5");
  }, Error, "EncodingError U+B7B5");
  assertThrows(() => {
    ms932Encoder.encode("\uB7B6");
  }, Error, "EncodingError U+B7B6");
  assertThrows(() => {
    ms932Encoder.encode("\uB7B7");
  }, Error, "EncodingError U+B7B7");
  assertThrows(() => {
    ms932Encoder.encode("\uB7B8");
  }, Error, "EncodingError U+B7B8");
  assertThrows(() => {
    ms932Encoder.encode("\uB7B9");
  }, Error, "EncodingError U+B7B9");
  assertThrows(() => {
    ms932Encoder.encode("\uB7BA");
  }, Error, "EncodingError U+B7BA");
  assertThrows(() => {
    ms932Encoder.encode("\uB7BB");
  }, Error, "EncodingError U+B7BB");
  assertThrows(() => {
    ms932Encoder.encode("\uB7BC");
  }, Error, "EncodingError U+B7BC");
  assertThrows(() => {
    ms932Encoder.encode("\uB7BD");
  }, Error, "EncodingError U+B7BD");
  assertThrows(() => {
    ms932Encoder.encode("\uB7BE");
  }, Error, "EncodingError U+B7BE");
  assertThrows(() => {
    ms932Encoder.encode("\uB7BF");
  }, Error, "EncodingError U+B7BF");
  assertThrows(() => {
    ms932Encoder.encode("\uB7C0");
  }, Error, "EncodingError U+B7C0");
  assertThrows(() => {
    ms932Encoder.encode("\uB7C1");
  }, Error, "EncodingError U+B7C1");
  assertThrows(() => {
    ms932Encoder.encode("\uB7C2");
  }, Error, "EncodingError U+B7C2");
  assertThrows(() => {
    ms932Encoder.encode("\uB7C3");
  }, Error, "EncodingError U+B7C3");
  assertThrows(() => {
    ms932Encoder.encode("\uB7C4");
  }, Error, "EncodingError U+B7C4");
  assertThrows(() => {
    ms932Encoder.encode("\uB7C5");
  }, Error, "EncodingError U+B7C5");
  assertThrows(() => {
    ms932Encoder.encode("\uB7C6");
  }, Error, "EncodingError U+B7C6");
  assertThrows(() => {
    ms932Encoder.encode("\uB7C7");
  }, Error, "EncodingError U+B7C7");
  assertThrows(() => {
    ms932Encoder.encode("\uB7C8");
  }, Error, "EncodingError U+B7C8");
  assertThrows(() => {
    ms932Encoder.encode("\uB7C9");
  }, Error, "EncodingError U+B7C9");
  assertThrows(() => {
    ms932Encoder.encode("\uB7CA");
  }, Error, "EncodingError U+B7CA");
  assertThrows(() => {
    ms932Encoder.encode("\uB7CB");
  }, Error, "EncodingError U+B7CB");
  assertThrows(() => {
    ms932Encoder.encode("\uB7CC");
  }, Error, "EncodingError U+B7CC");
  assertThrows(() => {
    ms932Encoder.encode("\uB7CD");
  }, Error, "EncodingError U+B7CD");
  assertThrows(() => {
    ms932Encoder.encode("\uB7CE");
  }, Error, "EncodingError U+B7CE");
  assertThrows(() => {
    ms932Encoder.encode("\uB7CF");
  }, Error, "EncodingError U+B7CF");
  assertThrows(() => {
    ms932Encoder.encode("\uB7D0");
  }, Error, "EncodingError U+B7D0");
  assertThrows(() => {
    ms932Encoder.encode("\uB7D1");
  }, Error, "EncodingError U+B7D1");
  assertThrows(() => {
    ms932Encoder.encode("\uB7D2");
  }, Error, "EncodingError U+B7D2");
  assertThrows(() => {
    ms932Encoder.encode("\uB7D3");
  }, Error, "EncodingError U+B7D3");
  assertThrows(() => {
    ms932Encoder.encode("\uB7D4");
  }, Error, "EncodingError U+B7D4");
  assertThrows(() => {
    ms932Encoder.encode("\uB7D5");
  }, Error, "EncodingError U+B7D5");
  assertThrows(() => {
    ms932Encoder.encode("\uB7D6");
  }, Error, "EncodingError U+B7D6");
  assertThrows(() => {
    ms932Encoder.encode("\uB7D7");
  }, Error, "EncodingError U+B7D7");
  assertThrows(() => {
    ms932Encoder.encode("\uB7D8");
  }, Error, "EncodingError U+B7D8");
  assertThrows(() => {
    ms932Encoder.encode("\uB7D9");
  }, Error, "EncodingError U+B7D9");
  assertThrows(() => {
    ms932Encoder.encode("\uB7DA");
  }, Error, "EncodingError U+B7DA");
  assertThrows(() => {
    ms932Encoder.encode("\uB7DB");
  }, Error, "EncodingError U+B7DB");
  assertThrows(() => {
    ms932Encoder.encode("\uB7DC");
  }, Error, "EncodingError U+B7DC");
  assertThrows(() => {
    ms932Encoder.encode("\uB7DD");
  }, Error, "EncodingError U+B7DD");
  assertThrows(() => {
    ms932Encoder.encode("\uB7DE");
  }, Error, "EncodingError U+B7DE");
  assertThrows(() => {
    ms932Encoder.encode("\uB7DF");
  }, Error, "EncodingError U+B7DF");
  assertThrows(() => {
    ms932Encoder.encode("\uB7E0");
  }, Error, "EncodingError U+B7E0");
  assertThrows(() => {
    ms932Encoder.encode("\uB7E1");
  }, Error, "EncodingError U+B7E1");
  assertThrows(() => {
    ms932Encoder.encode("\uB7E2");
  }, Error, "EncodingError U+B7E2");
  assertThrows(() => {
    ms932Encoder.encode("\uB7E3");
  }, Error, "EncodingError U+B7E3");
  assertThrows(() => {
    ms932Encoder.encode("\uB7E4");
  }, Error, "EncodingError U+B7E4");
  assertThrows(() => {
    ms932Encoder.encode("\uB7E5");
  }, Error, "EncodingError U+B7E5");
  assertThrows(() => {
    ms932Encoder.encode("\uB7E6");
  }, Error, "EncodingError U+B7E6");
  assertThrows(() => {
    ms932Encoder.encode("\uB7E7");
  }, Error, "EncodingError U+B7E7");
  assertThrows(() => {
    ms932Encoder.encode("\uB7E8");
  }, Error, "EncodingError U+B7E8");
  assertThrows(() => {
    ms932Encoder.encode("\uB7E9");
  }, Error, "EncodingError U+B7E9");
  assertThrows(() => {
    ms932Encoder.encode("\uB7EA");
  }, Error, "EncodingError U+B7EA");
  assertThrows(() => {
    ms932Encoder.encode("\uB7EB");
  }, Error, "EncodingError U+B7EB");
  assertThrows(() => {
    ms932Encoder.encode("\uB7EC");
  }, Error, "EncodingError U+B7EC");
  assertThrows(() => {
    ms932Encoder.encode("\uB7ED");
  }, Error, "EncodingError U+B7ED");
  assertThrows(() => {
    ms932Encoder.encode("\uB7EE");
  }, Error, "EncodingError U+B7EE");
  assertThrows(() => {
    ms932Encoder.encode("\uB7EF");
  }, Error, "EncodingError U+B7EF");
  assertThrows(() => {
    ms932Encoder.encode("\uB7F0");
  }, Error, "EncodingError U+B7F0");
  assertThrows(() => {
    ms932Encoder.encode("\uB7F1");
  }, Error, "EncodingError U+B7F1");
  assertThrows(() => {
    ms932Encoder.encode("\uB7F2");
  }, Error, "EncodingError U+B7F2");
  assertThrows(() => {
    ms932Encoder.encode("\uB7F3");
  }, Error, "EncodingError U+B7F3");
  assertThrows(() => {
    ms932Encoder.encode("\uB7F4");
  }, Error, "EncodingError U+B7F4");
  assertThrows(() => {
    ms932Encoder.encode("\uB7F5");
  }, Error, "EncodingError U+B7F5");
  assertThrows(() => {
    ms932Encoder.encode("\uB7F6");
  }, Error, "EncodingError U+B7F6");
  assertThrows(() => {
    ms932Encoder.encode("\uB7F7");
  }, Error, "EncodingError U+B7F7");
  assertThrows(() => {
    ms932Encoder.encode("\uB7F8");
  }, Error, "EncodingError U+B7F8");
  assertThrows(() => {
    ms932Encoder.encode("\uB7F9");
  }, Error, "EncodingError U+B7F9");
  assertThrows(() => {
    ms932Encoder.encode("\uB7FA");
  }, Error, "EncodingError U+B7FA");
  assertThrows(() => {
    ms932Encoder.encode("\uB7FB");
  }, Error, "EncodingError U+B7FB");
  assertThrows(() => {
    ms932Encoder.encode("\uB7FC");
  }, Error, "EncodingError U+B7FC");
  assertThrows(() => {
    ms932Encoder.encode("\uB7FD");
  }, Error, "EncodingError U+B7FD");
  assertThrows(() => {
    ms932Encoder.encode("\uB7FE");
  }, Error, "EncodingError U+B7FE");
  assertThrows(() => {
    ms932Encoder.encode("\uB7FF");
  }, Error, "EncodingError U+B7FF");
  assertThrows(() => {
    ms932Encoder.encode("\uB800");
  }, Error, "EncodingError U+B800");
  assertThrows(() => {
    ms932Encoder.encode("\uB801");
  }, Error, "EncodingError U+B801");
  assertThrows(() => {
    ms932Encoder.encode("\uB802");
  }, Error, "EncodingError U+B802");
  assertThrows(() => {
    ms932Encoder.encode("\uB803");
  }, Error, "EncodingError U+B803");
  assertThrows(() => {
    ms932Encoder.encode("\uB804");
  }, Error, "EncodingError U+B804");
  assertThrows(() => {
    ms932Encoder.encode("\uB805");
  }, Error, "EncodingError U+B805");
  assertThrows(() => {
    ms932Encoder.encode("\uB806");
  }, Error, "EncodingError U+B806");
  assertThrows(() => {
    ms932Encoder.encode("\uB807");
  }, Error, "EncodingError U+B807");
  assertThrows(() => {
    ms932Encoder.encode("\uB808");
  }, Error, "EncodingError U+B808");
  assertThrows(() => {
    ms932Encoder.encode("\uB809");
  }, Error, "EncodingError U+B809");
  assertThrows(() => {
    ms932Encoder.encode("\uB80A");
  }, Error, "EncodingError U+B80A");
  assertThrows(() => {
    ms932Encoder.encode("\uB80B");
  }, Error, "EncodingError U+B80B");
  assertThrows(() => {
    ms932Encoder.encode("\uB80C");
  }, Error, "EncodingError U+B80C");
  assertThrows(() => {
    ms932Encoder.encode("\uB80D");
  }, Error, "EncodingError U+B80D");
  assertThrows(() => {
    ms932Encoder.encode("\uB80E");
  }, Error, "EncodingError U+B80E");
  assertThrows(() => {
    ms932Encoder.encode("\uB80F");
  }, Error, "EncodingError U+B80F");
  assertThrows(() => {
    ms932Encoder.encode("\uB810");
  }, Error, "EncodingError U+B810");
  assertThrows(() => {
    ms932Encoder.encode("\uB811");
  }, Error, "EncodingError U+B811");
  assertThrows(() => {
    ms932Encoder.encode("\uB812");
  }, Error, "EncodingError U+B812");
  assertThrows(() => {
    ms932Encoder.encode("\uB813");
  }, Error, "EncodingError U+B813");
  assertThrows(() => {
    ms932Encoder.encode("\uB814");
  }, Error, "EncodingError U+B814");
  assertThrows(() => {
    ms932Encoder.encode("\uB815");
  }, Error, "EncodingError U+B815");
  assertThrows(() => {
    ms932Encoder.encode("\uB816");
  }, Error, "EncodingError U+B816");
  assertThrows(() => {
    ms932Encoder.encode("\uB817");
  }, Error, "EncodingError U+B817");
  assertThrows(() => {
    ms932Encoder.encode("\uB818");
  }, Error, "EncodingError U+B818");
  assertThrows(() => {
    ms932Encoder.encode("\uB819");
  }, Error, "EncodingError U+B819");
  assertThrows(() => {
    ms932Encoder.encode("\uB81A");
  }, Error, "EncodingError U+B81A");
  assertThrows(() => {
    ms932Encoder.encode("\uB81B");
  }, Error, "EncodingError U+B81B");
  assertThrows(() => {
    ms932Encoder.encode("\uB81C");
  }, Error, "EncodingError U+B81C");
  assertThrows(() => {
    ms932Encoder.encode("\uB81D");
  }, Error, "EncodingError U+B81D");
  assertThrows(() => {
    ms932Encoder.encode("\uB81E");
  }, Error, "EncodingError U+B81E");
  assertThrows(() => {
    ms932Encoder.encode("\uB81F");
  }, Error, "EncodingError U+B81F");
  assertThrows(() => {
    ms932Encoder.encode("\uB820");
  }, Error, "EncodingError U+B820");
  assertThrows(() => {
    ms932Encoder.encode("\uB821");
  }, Error, "EncodingError U+B821");
  assertThrows(() => {
    ms932Encoder.encode("\uB822");
  }, Error, "EncodingError U+B822");
  assertThrows(() => {
    ms932Encoder.encode("\uB823");
  }, Error, "EncodingError U+B823");
  assertThrows(() => {
    ms932Encoder.encode("\uB824");
  }, Error, "EncodingError U+B824");
  assertThrows(() => {
    ms932Encoder.encode("\uB825");
  }, Error, "EncodingError U+B825");
  assertThrows(() => {
    ms932Encoder.encode("\uB826");
  }, Error, "EncodingError U+B826");
  assertThrows(() => {
    ms932Encoder.encode("\uB827");
  }, Error, "EncodingError U+B827");
  assertThrows(() => {
    ms932Encoder.encode("\uB828");
  }, Error, "EncodingError U+B828");
  assertThrows(() => {
    ms932Encoder.encode("\uB829");
  }, Error, "EncodingError U+B829");
  assertThrows(() => {
    ms932Encoder.encode("\uB82A");
  }, Error, "EncodingError U+B82A");
  assertThrows(() => {
    ms932Encoder.encode("\uB82B");
  }, Error, "EncodingError U+B82B");
  assertThrows(() => {
    ms932Encoder.encode("\uB82C");
  }, Error, "EncodingError U+B82C");
  assertThrows(() => {
    ms932Encoder.encode("\uB82D");
  }, Error, "EncodingError U+B82D");
  assertThrows(() => {
    ms932Encoder.encode("\uB82E");
  }, Error, "EncodingError U+B82E");
  assertThrows(() => {
    ms932Encoder.encode("\uB82F");
  }, Error, "EncodingError U+B82F");
  assertThrows(() => {
    ms932Encoder.encode("\uB830");
  }, Error, "EncodingError U+B830");
  assertThrows(() => {
    ms932Encoder.encode("\uB831");
  }, Error, "EncodingError U+B831");
  assertThrows(() => {
    ms932Encoder.encode("\uB832");
  }, Error, "EncodingError U+B832");
  assertThrows(() => {
    ms932Encoder.encode("\uB833");
  }, Error, "EncodingError U+B833");
  assertThrows(() => {
    ms932Encoder.encode("\uB834");
  }, Error, "EncodingError U+B834");
  assertThrows(() => {
    ms932Encoder.encode("\uB835");
  }, Error, "EncodingError U+B835");
  assertThrows(() => {
    ms932Encoder.encode("\uB836");
  }, Error, "EncodingError U+B836");
  assertThrows(() => {
    ms932Encoder.encode("\uB837");
  }, Error, "EncodingError U+B837");
  assertThrows(() => {
    ms932Encoder.encode("\uB838");
  }, Error, "EncodingError U+B838");
  assertThrows(() => {
    ms932Encoder.encode("\uB839");
  }, Error, "EncodingError U+B839");
  assertThrows(() => {
    ms932Encoder.encode("\uB83A");
  }, Error, "EncodingError U+B83A");
  assertThrows(() => {
    ms932Encoder.encode("\uB83B");
  }, Error, "EncodingError U+B83B");
  assertThrows(() => {
    ms932Encoder.encode("\uB83C");
  }, Error, "EncodingError U+B83C");
  assertThrows(() => {
    ms932Encoder.encode("\uB83D");
  }, Error, "EncodingError U+B83D");
  assertThrows(() => {
    ms932Encoder.encode("\uB83E");
  }, Error, "EncodingError U+B83E");
  assertThrows(() => {
    ms932Encoder.encode("\uB83F");
  }, Error, "EncodingError U+B83F");
  assertThrows(() => {
    ms932Encoder.encode("\uB840");
  }, Error, "EncodingError U+B840");
  assertThrows(() => {
    ms932Encoder.encode("\uB841");
  }, Error, "EncodingError U+B841");
  assertThrows(() => {
    ms932Encoder.encode("\uB842");
  }, Error, "EncodingError U+B842");
  assertThrows(() => {
    ms932Encoder.encode("\uB843");
  }, Error, "EncodingError U+B843");
  assertThrows(() => {
    ms932Encoder.encode("\uB844");
  }, Error, "EncodingError U+B844");
  assertThrows(() => {
    ms932Encoder.encode("\uB845");
  }, Error, "EncodingError U+B845");
  assertThrows(() => {
    ms932Encoder.encode("\uB846");
  }, Error, "EncodingError U+B846");
  assertThrows(() => {
    ms932Encoder.encode("\uB847");
  }, Error, "EncodingError U+B847");
  assertThrows(() => {
    ms932Encoder.encode("\uB848");
  }, Error, "EncodingError U+B848");
  assertThrows(() => {
    ms932Encoder.encode("\uB849");
  }, Error, "EncodingError U+B849");
  assertThrows(() => {
    ms932Encoder.encode("\uB84A");
  }, Error, "EncodingError U+B84A");
  assertThrows(() => {
    ms932Encoder.encode("\uB84B");
  }, Error, "EncodingError U+B84B");
  assertThrows(() => {
    ms932Encoder.encode("\uB84C");
  }, Error, "EncodingError U+B84C");
  assertThrows(() => {
    ms932Encoder.encode("\uB84D");
  }, Error, "EncodingError U+B84D");
  assertThrows(() => {
    ms932Encoder.encode("\uB84E");
  }, Error, "EncodingError U+B84E");
  assertThrows(() => {
    ms932Encoder.encode("\uB84F");
  }, Error, "EncodingError U+B84F");
  assertThrows(() => {
    ms932Encoder.encode("\uB850");
  }, Error, "EncodingError U+B850");
  assertThrows(() => {
    ms932Encoder.encode("\uB851");
  }, Error, "EncodingError U+B851");
  assertThrows(() => {
    ms932Encoder.encode("\uB852");
  }, Error, "EncodingError U+B852");
  assertThrows(() => {
    ms932Encoder.encode("\uB853");
  }, Error, "EncodingError U+B853");
  assertThrows(() => {
    ms932Encoder.encode("\uB854");
  }, Error, "EncodingError U+B854");
  assertThrows(() => {
    ms932Encoder.encode("\uB855");
  }, Error, "EncodingError U+B855");
  assertThrows(() => {
    ms932Encoder.encode("\uB856");
  }, Error, "EncodingError U+B856");
  assertThrows(() => {
    ms932Encoder.encode("\uB857");
  }, Error, "EncodingError U+B857");
  assertThrows(() => {
    ms932Encoder.encode("\uB858");
  }, Error, "EncodingError U+B858");
  assertThrows(() => {
    ms932Encoder.encode("\uB859");
  }, Error, "EncodingError U+B859");
  assertThrows(() => {
    ms932Encoder.encode("\uB85A");
  }, Error, "EncodingError U+B85A");
  assertThrows(() => {
    ms932Encoder.encode("\uB85B");
  }, Error, "EncodingError U+B85B");
  assertThrows(() => {
    ms932Encoder.encode("\uB85C");
  }, Error, "EncodingError U+B85C");
  assertThrows(() => {
    ms932Encoder.encode("\uB85D");
  }, Error, "EncodingError U+B85D");
  assertThrows(() => {
    ms932Encoder.encode("\uB85E");
  }, Error, "EncodingError U+B85E");
  assertThrows(() => {
    ms932Encoder.encode("\uB85F");
  }, Error, "EncodingError U+B85F");
  assertThrows(() => {
    ms932Encoder.encode("\uB860");
  }, Error, "EncodingError U+B860");
  assertThrows(() => {
    ms932Encoder.encode("\uB861");
  }, Error, "EncodingError U+B861");
  assertThrows(() => {
    ms932Encoder.encode("\uB862");
  }, Error, "EncodingError U+B862");
  assertThrows(() => {
    ms932Encoder.encode("\uB863");
  }, Error, "EncodingError U+B863");
  assertThrows(() => {
    ms932Encoder.encode("\uB864");
  }, Error, "EncodingError U+B864");
  assertThrows(() => {
    ms932Encoder.encode("\uB865");
  }, Error, "EncodingError U+B865");
  assertThrows(() => {
    ms932Encoder.encode("\uB866");
  }, Error, "EncodingError U+B866");
  assertThrows(() => {
    ms932Encoder.encode("\uB867");
  }, Error, "EncodingError U+B867");
  assertThrows(() => {
    ms932Encoder.encode("\uB868");
  }, Error, "EncodingError U+B868");
  assertThrows(() => {
    ms932Encoder.encode("\uB869");
  }, Error, "EncodingError U+B869");
  assertThrows(() => {
    ms932Encoder.encode("\uB86A");
  }, Error, "EncodingError U+B86A");
  assertThrows(() => {
    ms932Encoder.encode("\uB86B");
  }, Error, "EncodingError U+B86B");
  assertThrows(() => {
    ms932Encoder.encode("\uB86C");
  }, Error, "EncodingError U+B86C");
  assertThrows(() => {
    ms932Encoder.encode("\uB86D");
  }, Error, "EncodingError U+B86D");
  assertThrows(() => {
    ms932Encoder.encode("\uB86E");
  }, Error, "EncodingError U+B86E");
  assertThrows(() => {
    ms932Encoder.encode("\uB86F");
  }, Error, "EncodingError U+B86F");
  assertThrows(() => {
    ms932Encoder.encode("\uB870");
  }, Error, "EncodingError U+B870");
  assertThrows(() => {
    ms932Encoder.encode("\uB871");
  }, Error, "EncodingError U+B871");
  assertThrows(() => {
    ms932Encoder.encode("\uB872");
  }, Error, "EncodingError U+B872");
  assertThrows(() => {
    ms932Encoder.encode("\uB873");
  }, Error, "EncodingError U+B873");
  assertThrows(() => {
    ms932Encoder.encode("\uB874");
  }, Error, "EncodingError U+B874");
  assertThrows(() => {
    ms932Encoder.encode("\uB875");
  }, Error, "EncodingError U+B875");
  assertThrows(() => {
    ms932Encoder.encode("\uB876");
  }, Error, "EncodingError U+B876");
  assertThrows(() => {
    ms932Encoder.encode("\uB877");
  }, Error, "EncodingError U+B877");
  assertThrows(() => {
    ms932Encoder.encode("\uB878");
  }, Error, "EncodingError U+B878");
  assertThrows(() => {
    ms932Encoder.encode("\uB879");
  }, Error, "EncodingError U+B879");
  assertThrows(() => {
    ms932Encoder.encode("\uB87A");
  }, Error, "EncodingError U+B87A");
  assertThrows(() => {
    ms932Encoder.encode("\uB87B");
  }, Error, "EncodingError U+B87B");
  assertThrows(() => {
    ms932Encoder.encode("\uB87C");
  }, Error, "EncodingError U+B87C");
  assertThrows(() => {
    ms932Encoder.encode("\uB87D");
  }, Error, "EncodingError U+B87D");
  assertThrows(() => {
    ms932Encoder.encode("\uB87E");
  }, Error, "EncodingError U+B87E");
  assertThrows(() => {
    ms932Encoder.encode("\uB87F");
  }, Error, "EncodingError U+B87F");
  assertThrows(() => {
    ms932Encoder.encode("\uB880");
  }, Error, "EncodingError U+B880");
  assertThrows(() => {
    ms932Encoder.encode("\uB881");
  }, Error, "EncodingError U+B881");
  assertThrows(() => {
    ms932Encoder.encode("\uB882");
  }, Error, "EncodingError U+B882");
  assertThrows(() => {
    ms932Encoder.encode("\uB883");
  }, Error, "EncodingError U+B883");
  assertThrows(() => {
    ms932Encoder.encode("\uB884");
  }, Error, "EncodingError U+B884");
  assertThrows(() => {
    ms932Encoder.encode("\uB885");
  }, Error, "EncodingError U+B885");
  assertThrows(() => {
    ms932Encoder.encode("\uB886");
  }, Error, "EncodingError U+B886");
  assertThrows(() => {
    ms932Encoder.encode("\uB887");
  }, Error, "EncodingError U+B887");
  assertThrows(() => {
    ms932Encoder.encode("\uB888");
  }, Error, "EncodingError U+B888");
  assertThrows(() => {
    ms932Encoder.encode("\uB889");
  }, Error, "EncodingError U+B889");
  assertThrows(() => {
    ms932Encoder.encode("\uB88A");
  }, Error, "EncodingError U+B88A");
  assertThrows(() => {
    ms932Encoder.encode("\uB88B");
  }, Error, "EncodingError U+B88B");
  assertThrows(() => {
    ms932Encoder.encode("\uB88C");
  }, Error, "EncodingError U+B88C");
  assertThrows(() => {
    ms932Encoder.encode("\uB88D");
  }, Error, "EncodingError U+B88D");
  assertThrows(() => {
    ms932Encoder.encode("\uB88E");
  }, Error, "EncodingError U+B88E");
  assertThrows(() => {
    ms932Encoder.encode("\uB88F");
  }, Error, "EncodingError U+B88F");
  assertThrows(() => {
    ms932Encoder.encode("\uB890");
  }, Error, "EncodingError U+B890");
  assertThrows(() => {
    ms932Encoder.encode("\uB891");
  }, Error, "EncodingError U+B891");
  assertThrows(() => {
    ms932Encoder.encode("\uB892");
  }, Error, "EncodingError U+B892");
  assertThrows(() => {
    ms932Encoder.encode("\uB893");
  }, Error, "EncodingError U+B893");
  assertThrows(() => {
    ms932Encoder.encode("\uB894");
  }, Error, "EncodingError U+B894");
  assertThrows(() => {
    ms932Encoder.encode("\uB895");
  }, Error, "EncodingError U+B895");
  assertThrows(() => {
    ms932Encoder.encode("\uB896");
  }, Error, "EncodingError U+B896");
  assertThrows(() => {
    ms932Encoder.encode("\uB897");
  }, Error, "EncodingError U+B897");
  assertThrows(() => {
    ms932Encoder.encode("\uB898");
  }, Error, "EncodingError U+B898");
  assertThrows(() => {
    ms932Encoder.encode("\uB899");
  }, Error, "EncodingError U+B899");
  assertThrows(() => {
    ms932Encoder.encode("\uB89A");
  }, Error, "EncodingError U+B89A");
  assertThrows(() => {
    ms932Encoder.encode("\uB89B");
  }, Error, "EncodingError U+B89B");
  assertThrows(() => {
    ms932Encoder.encode("\uB89C");
  }, Error, "EncodingError U+B89C");
  assertThrows(() => {
    ms932Encoder.encode("\uB89D");
  }, Error, "EncodingError U+B89D");
  assertThrows(() => {
    ms932Encoder.encode("\uB89E");
  }, Error, "EncodingError U+B89E");
  assertThrows(() => {
    ms932Encoder.encode("\uB89F");
  }, Error, "EncodingError U+B89F");
  assertThrows(() => {
    ms932Encoder.encode("\uB8A0");
  }, Error, "EncodingError U+B8A0");
  assertThrows(() => {
    ms932Encoder.encode("\uB8A1");
  }, Error, "EncodingError U+B8A1");
  assertThrows(() => {
    ms932Encoder.encode("\uB8A2");
  }, Error, "EncodingError U+B8A2");
  assertThrows(() => {
    ms932Encoder.encode("\uB8A3");
  }, Error, "EncodingError U+B8A3");
  assertThrows(() => {
    ms932Encoder.encode("\uB8A4");
  }, Error, "EncodingError U+B8A4");
  assertThrows(() => {
    ms932Encoder.encode("\uB8A5");
  }, Error, "EncodingError U+B8A5");
  assertThrows(() => {
    ms932Encoder.encode("\uB8A6");
  }, Error, "EncodingError U+B8A6");
  assertThrows(() => {
    ms932Encoder.encode("\uB8A7");
  }, Error, "EncodingError U+B8A7");
  assertThrows(() => {
    ms932Encoder.encode("\uB8A8");
  }, Error, "EncodingError U+B8A8");
  assertThrows(() => {
    ms932Encoder.encode("\uB8A9");
  }, Error, "EncodingError U+B8A9");
  assertThrows(() => {
    ms932Encoder.encode("\uB8AA");
  }, Error, "EncodingError U+B8AA");
  assertThrows(() => {
    ms932Encoder.encode("\uB8AB");
  }, Error, "EncodingError U+B8AB");
  assertThrows(() => {
    ms932Encoder.encode("\uB8AC");
  }, Error, "EncodingError U+B8AC");
  assertThrows(() => {
    ms932Encoder.encode("\uB8AD");
  }, Error, "EncodingError U+B8AD");
  assertThrows(() => {
    ms932Encoder.encode("\uB8AE");
  }, Error, "EncodingError U+B8AE");
  assertThrows(() => {
    ms932Encoder.encode("\uB8AF");
  }, Error, "EncodingError U+B8AF");
  assertThrows(() => {
    ms932Encoder.encode("\uB8B0");
  }, Error, "EncodingError U+B8B0");
  assertThrows(() => {
    ms932Encoder.encode("\uB8B1");
  }, Error, "EncodingError U+B8B1");
  assertThrows(() => {
    ms932Encoder.encode("\uB8B2");
  }, Error, "EncodingError U+B8B2");
  assertThrows(() => {
    ms932Encoder.encode("\uB8B3");
  }, Error, "EncodingError U+B8B3");
  assertThrows(() => {
    ms932Encoder.encode("\uB8B4");
  }, Error, "EncodingError U+B8B4");
  assertThrows(() => {
    ms932Encoder.encode("\uB8B5");
  }, Error, "EncodingError U+B8B5");
  assertThrows(() => {
    ms932Encoder.encode("\uB8B6");
  }, Error, "EncodingError U+B8B6");
  assertThrows(() => {
    ms932Encoder.encode("\uB8B7");
  }, Error, "EncodingError U+B8B7");
  assertThrows(() => {
    ms932Encoder.encode("\uB8B8");
  }, Error, "EncodingError U+B8B8");
  assertThrows(() => {
    ms932Encoder.encode("\uB8B9");
  }, Error, "EncodingError U+B8B9");
  assertThrows(() => {
    ms932Encoder.encode("\uB8BA");
  }, Error, "EncodingError U+B8BA");
  assertThrows(() => {
    ms932Encoder.encode("\uB8BB");
  }, Error, "EncodingError U+B8BB");
  assertThrows(() => {
    ms932Encoder.encode("\uB8BC");
  }, Error, "EncodingError U+B8BC");
  assertThrows(() => {
    ms932Encoder.encode("\uB8BD");
  }, Error, "EncodingError U+B8BD");
  assertThrows(() => {
    ms932Encoder.encode("\uB8BE");
  }, Error, "EncodingError U+B8BE");
  assertThrows(() => {
    ms932Encoder.encode("\uB8BF");
  }, Error, "EncodingError U+B8BF");
  assertThrows(() => {
    ms932Encoder.encode("\uB8C0");
  }, Error, "EncodingError U+B8C0");
  assertThrows(() => {
    ms932Encoder.encode("\uB8C1");
  }, Error, "EncodingError U+B8C1");
  assertThrows(() => {
    ms932Encoder.encode("\uB8C2");
  }, Error, "EncodingError U+B8C2");
  assertThrows(() => {
    ms932Encoder.encode("\uB8C3");
  }, Error, "EncodingError U+B8C3");
  assertThrows(() => {
    ms932Encoder.encode("\uB8C4");
  }, Error, "EncodingError U+B8C4");
  assertThrows(() => {
    ms932Encoder.encode("\uB8C5");
  }, Error, "EncodingError U+B8C5");
  assertThrows(() => {
    ms932Encoder.encode("\uB8C6");
  }, Error, "EncodingError U+B8C6");
  assertThrows(() => {
    ms932Encoder.encode("\uB8C7");
  }, Error, "EncodingError U+B8C7");
  assertThrows(() => {
    ms932Encoder.encode("\uB8C8");
  }, Error, "EncodingError U+B8C8");
  assertThrows(() => {
    ms932Encoder.encode("\uB8C9");
  }, Error, "EncodingError U+B8C9");
  assertThrows(() => {
    ms932Encoder.encode("\uB8CA");
  }, Error, "EncodingError U+B8CA");
  assertThrows(() => {
    ms932Encoder.encode("\uB8CB");
  }, Error, "EncodingError U+B8CB");
  assertThrows(() => {
    ms932Encoder.encode("\uB8CC");
  }, Error, "EncodingError U+B8CC");
  assertThrows(() => {
    ms932Encoder.encode("\uB8CD");
  }, Error, "EncodingError U+B8CD");
  assertThrows(() => {
    ms932Encoder.encode("\uB8CE");
  }, Error, "EncodingError U+B8CE");
  assertThrows(() => {
    ms932Encoder.encode("\uB8CF");
  }, Error, "EncodingError U+B8CF");
  assertThrows(() => {
    ms932Encoder.encode("\uB8D0");
  }, Error, "EncodingError U+B8D0");
  assertThrows(() => {
    ms932Encoder.encode("\uB8D1");
  }, Error, "EncodingError U+B8D1");
  assertThrows(() => {
    ms932Encoder.encode("\uB8D2");
  }, Error, "EncodingError U+B8D2");
  assertThrows(() => {
    ms932Encoder.encode("\uB8D3");
  }, Error, "EncodingError U+B8D3");
  assertThrows(() => {
    ms932Encoder.encode("\uB8D4");
  }, Error, "EncodingError U+B8D4");
  assertThrows(() => {
    ms932Encoder.encode("\uB8D5");
  }, Error, "EncodingError U+B8D5");
  assertThrows(() => {
    ms932Encoder.encode("\uB8D6");
  }, Error, "EncodingError U+B8D6");
  assertThrows(() => {
    ms932Encoder.encode("\uB8D7");
  }, Error, "EncodingError U+B8D7");
  assertThrows(() => {
    ms932Encoder.encode("\uB8D8");
  }, Error, "EncodingError U+B8D8");
  assertThrows(() => {
    ms932Encoder.encode("\uB8D9");
  }, Error, "EncodingError U+B8D9");
  assertThrows(() => {
    ms932Encoder.encode("\uB8DA");
  }, Error, "EncodingError U+B8DA");
  assertThrows(() => {
    ms932Encoder.encode("\uB8DB");
  }, Error, "EncodingError U+B8DB");
  assertThrows(() => {
    ms932Encoder.encode("\uB8DC");
  }, Error, "EncodingError U+B8DC");
  assertThrows(() => {
    ms932Encoder.encode("\uB8DD");
  }, Error, "EncodingError U+B8DD");
  assertThrows(() => {
    ms932Encoder.encode("\uB8DE");
  }, Error, "EncodingError U+B8DE");
  assertThrows(() => {
    ms932Encoder.encode("\uB8DF");
  }, Error, "EncodingError U+B8DF");
  assertThrows(() => {
    ms932Encoder.encode("\uB8E0");
  }, Error, "EncodingError U+B8E0");
  assertThrows(() => {
    ms932Encoder.encode("\uB8E1");
  }, Error, "EncodingError U+B8E1");
  assertThrows(() => {
    ms932Encoder.encode("\uB8E2");
  }, Error, "EncodingError U+B8E2");
  assertThrows(() => {
    ms932Encoder.encode("\uB8E3");
  }, Error, "EncodingError U+B8E3");
  assertThrows(() => {
    ms932Encoder.encode("\uB8E4");
  }, Error, "EncodingError U+B8E4");
  assertThrows(() => {
    ms932Encoder.encode("\uB8E5");
  }, Error, "EncodingError U+B8E5");
  assertThrows(() => {
    ms932Encoder.encode("\uB8E6");
  }, Error, "EncodingError U+B8E6");
  assertThrows(() => {
    ms932Encoder.encode("\uB8E7");
  }, Error, "EncodingError U+B8E7");
  assertThrows(() => {
    ms932Encoder.encode("\uB8E8");
  }, Error, "EncodingError U+B8E8");
  assertThrows(() => {
    ms932Encoder.encode("\uB8E9");
  }, Error, "EncodingError U+B8E9");
  assertThrows(() => {
    ms932Encoder.encode("\uB8EA");
  }, Error, "EncodingError U+B8EA");
  assertThrows(() => {
    ms932Encoder.encode("\uB8EB");
  }, Error, "EncodingError U+B8EB");
  assertThrows(() => {
    ms932Encoder.encode("\uB8EC");
  }, Error, "EncodingError U+B8EC");
  assertThrows(() => {
    ms932Encoder.encode("\uB8ED");
  }, Error, "EncodingError U+B8ED");
  assertThrows(() => {
    ms932Encoder.encode("\uB8EE");
  }, Error, "EncodingError U+B8EE");
  assertThrows(() => {
    ms932Encoder.encode("\uB8EF");
  }, Error, "EncodingError U+B8EF");
  assertThrows(() => {
    ms932Encoder.encode("\uB8F0");
  }, Error, "EncodingError U+B8F0");
  assertThrows(() => {
    ms932Encoder.encode("\uB8F1");
  }, Error, "EncodingError U+B8F1");
  assertThrows(() => {
    ms932Encoder.encode("\uB8F2");
  }, Error, "EncodingError U+B8F2");
  assertThrows(() => {
    ms932Encoder.encode("\uB8F3");
  }, Error, "EncodingError U+B8F3");
  assertThrows(() => {
    ms932Encoder.encode("\uB8F4");
  }, Error, "EncodingError U+B8F4");
  assertThrows(() => {
    ms932Encoder.encode("\uB8F5");
  }, Error, "EncodingError U+B8F5");
  assertThrows(() => {
    ms932Encoder.encode("\uB8F6");
  }, Error, "EncodingError U+B8F6");
  assertThrows(() => {
    ms932Encoder.encode("\uB8F7");
  }, Error, "EncodingError U+B8F7");
  assertThrows(() => {
    ms932Encoder.encode("\uB8F8");
  }, Error, "EncodingError U+B8F8");
  assertThrows(() => {
    ms932Encoder.encode("\uB8F9");
  }, Error, "EncodingError U+B8F9");
  assertThrows(() => {
    ms932Encoder.encode("\uB8FA");
  }, Error, "EncodingError U+B8FA");
  assertThrows(() => {
    ms932Encoder.encode("\uB8FB");
  }, Error, "EncodingError U+B8FB");
  assertThrows(() => {
    ms932Encoder.encode("\uB8FC");
  }, Error, "EncodingError U+B8FC");
  assertThrows(() => {
    ms932Encoder.encode("\uB8FD");
  }, Error, "EncodingError U+B8FD");
  assertThrows(() => {
    ms932Encoder.encode("\uB8FE");
  }, Error, "EncodingError U+B8FE");
  assertThrows(() => {
    ms932Encoder.encode("\uB8FF");
  }, Error, "EncodingError U+B8FF");
  assertThrows(() => {
    ms932Encoder.encode("\uB900");
  }, Error, "EncodingError U+B900");
  assertThrows(() => {
    ms932Encoder.encode("\uB901");
  }, Error, "EncodingError U+B901");
  assertThrows(() => {
    ms932Encoder.encode("\uB902");
  }, Error, "EncodingError U+B902");
  assertThrows(() => {
    ms932Encoder.encode("\uB903");
  }, Error, "EncodingError U+B903");
  assertThrows(() => {
    ms932Encoder.encode("\uB904");
  }, Error, "EncodingError U+B904");
  assertThrows(() => {
    ms932Encoder.encode("\uB905");
  }, Error, "EncodingError U+B905");
  assertThrows(() => {
    ms932Encoder.encode("\uB906");
  }, Error, "EncodingError U+B906");
  assertThrows(() => {
    ms932Encoder.encode("\uB907");
  }, Error, "EncodingError U+B907");
  assertThrows(() => {
    ms932Encoder.encode("\uB908");
  }, Error, "EncodingError U+B908");
  assertThrows(() => {
    ms932Encoder.encode("\uB909");
  }, Error, "EncodingError U+B909");
  assertThrows(() => {
    ms932Encoder.encode("\uB90A");
  }, Error, "EncodingError U+B90A");
  assertThrows(() => {
    ms932Encoder.encode("\uB90B");
  }, Error, "EncodingError U+B90B");
  assertThrows(() => {
    ms932Encoder.encode("\uB90C");
  }, Error, "EncodingError U+B90C");
  assertThrows(() => {
    ms932Encoder.encode("\uB90D");
  }, Error, "EncodingError U+B90D");
  assertThrows(() => {
    ms932Encoder.encode("\uB90E");
  }, Error, "EncodingError U+B90E");
  assertThrows(() => {
    ms932Encoder.encode("\uB90F");
  }, Error, "EncodingError U+B90F");
  assertThrows(() => {
    ms932Encoder.encode("\uB910");
  }, Error, "EncodingError U+B910");
  assertThrows(() => {
    ms932Encoder.encode("\uB911");
  }, Error, "EncodingError U+B911");
  assertThrows(() => {
    ms932Encoder.encode("\uB912");
  }, Error, "EncodingError U+B912");
  assertThrows(() => {
    ms932Encoder.encode("\uB913");
  }, Error, "EncodingError U+B913");
  assertThrows(() => {
    ms932Encoder.encode("\uB914");
  }, Error, "EncodingError U+B914");
  assertThrows(() => {
    ms932Encoder.encode("\uB915");
  }, Error, "EncodingError U+B915");
  assertThrows(() => {
    ms932Encoder.encode("\uB916");
  }, Error, "EncodingError U+B916");
  assertThrows(() => {
    ms932Encoder.encode("\uB917");
  }, Error, "EncodingError U+B917");
  assertThrows(() => {
    ms932Encoder.encode("\uB918");
  }, Error, "EncodingError U+B918");
  assertThrows(() => {
    ms932Encoder.encode("\uB919");
  }, Error, "EncodingError U+B919");
  assertThrows(() => {
    ms932Encoder.encode("\uB91A");
  }, Error, "EncodingError U+B91A");
  assertThrows(() => {
    ms932Encoder.encode("\uB91B");
  }, Error, "EncodingError U+B91B");
  assertThrows(() => {
    ms932Encoder.encode("\uB91C");
  }, Error, "EncodingError U+B91C");
  assertThrows(() => {
    ms932Encoder.encode("\uB91D");
  }, Error, "EncodingError U+B91D");
  assertThrows(() => {
    ms932Encoder.encode("\uB91E");
  }, Error, "EncodingError U+B91E");
  assertThrows(() => {
    ms932Encoder.encode("\uB91F");
  }, Error, "EncodingError U+B91F");
  assertThrows(() => {
    ms932Encoder.encode("\uB920");
  }, Error, "EncodingError U+B920");
  assertThrows(() => {
    ms932Encoder.encode("\uB921");
  }, Error, "EncodingError U+B921");
  assertThrows(() => {
    ms932Encoder.encode("\uB922");
  }, Error, "EncodingError U+B922");
  assertThrows(() => {
    ms932Encoder.encode("\uB923");
  }, Error, "EncodingError U+B923");
  assertThrows(() => {
    ms932Encoder.encode("\uB924");
  }, Error, "EncodingError U+B924");
  assertThrows(() => {
    ms932Encoder.encode("\uB925");
  }, Error, "EncodingError U+B925");
  assertThrows(() => {
    ms932Encoder.encode("\uB926");
  }, Error, "EncodingError U+B926");
  assertThrows(() => {
    ms932Encoder.encode("\uB927");
  }, Error, "EncodingError U+B927");
  assertThrows(() => {
    ms932Encoder.encode("\uB928");
  }, Error, "EncodingError U+B928");
  assertThrows(() => {
    ms932Encoder.encode("\uB929");
  }, Error, "EncodingError U+B929");
  assertThrows(() => {
    ms932Encoder.encode("\uB92A");
  }, Error, "EncodingError U+B92A");
  assertThrows(() => {
    ms932Encoder.encode("\uB92B");
  }, Error, "EncodingError U+B92B");
  assertThrows(() => {
    ms932Encoder.encode("\uB92C");
  }, Error, "EncodingError U+B92C");
  assertThrows(() => {
    ms932Encoder.encode("\uB92D");
  }, Error, "EncodingError U+B92D");
  assertThrows(() => {
    ms932Encoder.encode("\uB92E");
  }, Error, "EncodingError U+B92E");
  assertThrows(() => {
    ms932Encoder.encode("\uB92F");
  }, Error, "EncodingError U+B92F");
  assertThrows(() => {
    ms932Encoder.encode("\uB930");
  }, Error, "EncodingError U+B930");
  assertThrows(() => {
    ms932Encoder.encode("\uB931");
  }, Error, "EncodingError U+B931");
  assertThrows(() => {
    ms932Encoder.encode("\uB932");
  }, Error, "EncodingError U+B932");
  assertThrows(() => {
    ms932Encoder.encode("\uB933");
  }, Error, "EncodingError U+B933");
  assertThrows(() => {
    ms932Encoder.encode("\uB934");
  }, Error, "EncodingError U+B934");
  assertThrows(() => {
    ms932Encoder.encode("\uB935");
  }, Error, "EncodingError U+B935");
  assertThrows(() => {
    ms932Encoder.encode("\uB936");
  }, Error, "EncodingError U+B936");
  assertThrows(() => {
    ms932Encoder.encode("\uB937");
  }, Error, "EncodingError U+B937");
  assertThrows(() => {
    ms932Encoder.encode("\uB938");
  }, Error, "EncodingError U+B938");
  assertThrows(() => {
    ms932Encoder.encode("\uB939");
  }, Error, "EncodingError U+B939");
  assertThrows(() => {
    ms932Encoder.encode("\uB93A");
  }, Error, "EncodingError U+B93A");
  assertThrows(() => {
    ms932Encoder.encode("\uB93B");
  }, Error, "EncodingError U+B93B");
  assertThrows(() => {
    ms932Encoder.encode("\uB93C");
  }, Error, "EncodingError U+B93C");
  assertThrows(() => {
    ms932Encoder.encode("\uB93D");
  }, Error, "EncodingError U+B93D");
  assertThrows(() => {
    ms932Encoder.encode("\uB93E");
  }, Error, "EncodingError U+B93E");
  assertThrows(() => {
    ms932Encoder.encode("\uB93F");
  }, Error, "EncodingError U+B93F");
  assertThrows(() => {
    ms932Encoder.encode("\uB940");
  }, Error, "EncodingError U+B940");
  assertThrows(() => {
    ms932Encoder.encode("\uB941");
  }, Error, "EncodingError U+B941");
  assertThrows(() => {
    ms932Encoder.encode("\uB942");
  }, Error, "EncodingError U+B942");
  assertThrows(() => {
    ms932Encoder.encode("\uB943");
  }, Error, "EncodingError U+B943");
  assertThrows(() => {
    ms932Encoder.encode("\uB944");
  }, Error, "EncodingError U+B944");
  assertThrows(() => {
    ms932Encoder.encode("\uB945");
  }, Error, "EncodingError U+B945");
  assertThrows(() => {
    ms932Encoder.encode("\uB946");
  }, Error, "EncodingError U+B946");
  assertThrows(() => {
    ms932Encoder.encode("\uB947");
  }, Error, "EncodingError U+B947");
  assertThrows(() => {
    ms932Encoder.encode("\uB948");
  }, Error, "EncodingError U+B948");
  assertThrows(() => {
    ms932Encoder.encode("\uB949");
  }, Error, "EncodingError U+B949");
  assertThrows(() => {
    ms932Encoder.encode("\uB94A");
  }, Error, "EncodingError U+B94A");
  assertThrows(() => {
    ms932Encoder.encode("\uB94B");
  }, Error, "EncodingError U+B94B");
  assertThrows(() => {
    ms932Encoder.encode("\uB94C");
  }, Error, "EncodingError U+B94C");
  assertThrows(() => {
    ms932Encoder.encode("\uB94D");
  }, Error, "EncodingError U+B94D");
  assertThrows(() => {
    ms932Encoder.encode("\uB94E");
  }, Error, "EncodingError U+B94E");
  assertThrows(() => {
    ms932Encoder.encode("\uB94F");
  }, Error, "EncodingError U+B94F");
  assertThrows(() => {
    ms932Encoder.encode("\uB950");
  }, Error, "EncodingError U+B950");
  assertThrows(() => {
    ms932Encoder.encode("\uB951");
  }, Error, "EncodingError U+B951");
  assertThrows(() => {
    ms932Encoder.encode("\uB952");
  }, Error, "EncodingError U+B952");
  assertThrows(() => {
    ms932Encoder.encode("\uB953");
  }, Error, "EncodingError U+B953");
  assertThrows(() => {
    ms932Encoder.encode("\uB954");
  }, Error, "EncodingError U+B954");
  assertThrows(() => {
    ms932Encoder.encode("\uB955");
  }, Error, "EncodingError U+B955");
  assertThrows(() => {
    ms932Encoder.encode("\uB956");
  }, Error, "EncodingError U+B956");
  assertThrows(() => {
    ms932Encoder.encode("\uB957");
  }, Error, "EncodingError U+B957");
  assertThrows(() => {
    ms932Encoder.encode("\uB958");
  }, Error, "EncodingError U+B958");
  assertThrows(() => {
    ms932Encoder.encode("\uB959");
  }, Error, "EncodingError U+B959");
  assertThrows(() => {
    ms932Encoder.encode("\uB95A");
  }, Error, "EncodingError U+B95A");
  assertThrows(() => {
    ms932Encoder.encode("\uB95B");
  }, Error, "EncodingError U+B95B");
  assertThrows(() => {
    ms932Encoder.encode("\uB95C");
  }, Error, "EncodingError U+B95C");
  assertThrows(() => {
    ms932Encoder.encode("\uB95D");
  }, Error, "EncodingError U+B95D");
  assertThrows(() => {
    ms932Encoder.encode("\uB95E");
  }, Error, "EncodingError U+B95E");
  assertThrows(() => {
    ms932Encoder.encode("\uB95F");
  }, Error, "EncodingError U+B95F");
  assertThrows(() => {
    ms932Encoder.encode("\uB960");
  }, Error, "EncodingError U+B960");
  assertThrows(() => {
    ms932Encoder.encode("\uB961");
  }, Error, "EncodingError U+B961");
  assertThrows(() => {
    ms932Encoder.encode("\uB962");
  }, Error, "EncodingError U+B962");
  assertThrows(() => {
    ms932Encoder.encode("\uB963");
  }, Error, "EncodingError U+B963");
  assertThrows(() => {
    ms932Encoder.encode("\uB964");
  }, Error, "EncodingError U+B964");
  assertThrows(() => {
    ms932Encoder.encode("\uB965");
  }, Error, "EncodingError U+B965");
  assertThrows(() => {
    ms932Encoder.encode("\uB966");
  }, Error, "EncodingError U+B966");
  assertThrows(() => {
    ms932Encoder.encode("\uB967");
  }, Error, "EncodingError U+B967");
  assertThrows(() => {
    ms932Encoder.encode("\uB968");
  }, Error, "EncodingError U+B968");
  assertThrows(() => {
    ms932Encoder.encode("\uB969");
  }, Error, "EncodingError U+B969");
  assertThrows(() => {
    ms932Encoder.encode("\uB96A");
  }, Error, "EncodingError U+B96A");
  assertThrows(() => {
    ms932Encoder.encode("\uB96B");
  }, Error, "EncodingError U+B96B");
  assertThrows(() => {
    ms932Encoder.encode("\uB96C");
  }, Error, "EncodingError U+B96C");
  assertThrows(() => {
    ms932Encoder.encode("\uB96D");
  }, Error, "EncodingError U+B96D");
  assertThrows(() => {
    ms932Encoder.encode("\uB96E");
  }, Error, "EncodingError U+B96E");
  assertThrows(() => {
    ms932Encoder.encode("\uB96F");
  }, Error, "EncodingError U+B96F");
  assertThrows(() => {
    ms932Encoder.encode("\uB970");
  }, Error, "EncodingError U+B970");
  assertThrows(() => {
    ms932Encoder.encode("\uB971");
  }, Error, "EncodingError U+B971");
  assertThrows(() => {
    ms932Encoder.encode("\uB972");
  }, Error, "EncodingError U+B972");
  assertThrows(() => {
    ms932Encoder.encode("\uB973");
  }, Error, "EncodingError U+B973");
  assertThrows(() => {
    ms932Encoder.encode("\uB974");
  }, Error, "EncodingError U+B974");
  assertThrows(() => {
    ms932Encoder.encode("\uB975");
  }, Error, "EncodingError U+B975");
  assertThrows(() => {
    ms932Encoder.encode("\uB976");
  }, Error, "EncodingError U+B976");
  assertThrows(() => {
    ms932Encoder.encode("\uB977");
  }, Error, "EncodingError U+B977");
  assertThrows(() => {
    ms932Encoder.encode("\uB978");
  }, Error, "EncodingError U+B978");
  assertThrows(() => {
    ms932Encoder.encode("\uB979");
  }, Error, "EncodingError U+B979");
  assertThrows(() => {
    ms932Encoder.encode("\uB97A");
  }, Error, "EncodingError U+B97A");
  assertThrows(() => {
    ms932Encoder.encode("\uB97B");
  }, Error, "EncodingError U+B97B");
  assertThrows(() => {
    ms932Encoder.encode("\uB97C");
  }, Error, "EncodingError U+B97C");
  assertThrows(() => {
    ms932Encoder.encode("\uB97D");
  }, Error, "EncodingError U+B97D");
  assertThrows(() => {
    ms932Encoder.encode("\uB97E");
  }, Error, "EncodingError U+B97E");
  assertThrows(() => {
    ms932Encoder.encode("\uB97F");
  }, Error, "EncodingError U+B97F");
  assertThrows(() => {
    ms932Encoder.encode("\uB980");
  }, Error, "EncodingError U+B980");
  assertThrows(() => {
    ms932Encoder.encode("\uB981");
  }, Error, "EncodingError U+B981");
  assertThrows(() => {
    ms932Encoder.encode("\uB982");
  }, Error, "EncodingError U+B982");
  assertThrows(() => {
    ms932Encoder.encode("\uB983");
  }, Error, "EncodingError U+B983");
  assertThrows(() => {
    ms932Encoder.encode("\uB984");
  }, Error, "EncodingError U+B984");
  assertThrows(() => {
    ms932Encoder.encode("\uB985");
  }, Error, "EncodingError U+B985");
  assertThrows(() => {
    ms932Encoder.encode("\uB986");
  }, Error, "EncodingError U+B986");
  assertThrows(() => {
    ms932Encoder.encode("\uB987");
  }, Error, "EncodingError U+B987");
  assertThrows(() => {
    ms932Encoder.encode("\uB988");
  }, Error, "EncodingError U+B988");
  assertThrows(() => {
    ms932Encoder.encode("\uB989");
  }, Error, "EncodingError U+B989");
  assertThrows(() => {
    ms932Encoder.encode("\uB98A");
  }, Error, "EncodingError U+B98A");
  assertThrows(() => {
    ms932Encoder.encode("\uB98B");
  }, Error, "EncodingError U+B98B");
  assertThrows(() => {
    ms932Encoder.encode("\uB98C");
  }, Error, "EncodingError U+B98C");
  assertThrows(() => {
    ms932Encoder.encode("\uB98D");
  }, Error, "EncodingError U+B98D");
  assertThrows(() => {
    ms932Encoder.encode("\uB98E");
  }, Error, "EncodingError U+B98E");
  assertThrows(() => {
    ms932Encoder.encode("\uB98F");
  }, Error, "EncodingError U+B98F");
  assertThrows(() => {
    ms932Encoder.encode("\uB990");
  }, Error, "EncodingError U+B990");
  assertThrows(() => {
    ms932Encoder.encode("\uB991");
  }, Error, "EncodingError U+B991");
  assertThrows(() => {
    ms932Encoder.encode("\uB992");
  }, Error, "EncodingError U+B992");
  assertThrows(() => {
    ms932Encoder.encode("\uB993");
  }, Error, "EncodingError U+B993");
  assertThrows(() => {
    ms932Encoder.encode("\uB994");
  }, Error, "EncodingError U+B994");
  assertThrows(() => {
    ms932Encoder.encode("\uB995");
  }, Error, "EncodingError U+B995");
  assertThrows(() => {
    ms932Encoder.encode("\uB996");
  }, Error, "EncodingError U+B996");
  assertThrows(() => {
    ms932Encoder.encode("\uB997");
  }, Error, "EncodingError U+B997");
  assertThrows(() => {
    ms932Encoder.encode("\uB998");
  }, Error, "EncodingError U+B998");
  assertThrows(() => {
    ms932Encoder.encode("\uB999");
  }, Error, "EncodingError U+B999");
  assertThrows(() => {
    ms932Encoder.encode("\uB99A");
  }, Error, "EncodingError U+B99A");
  assertThrows(() => {
    ms932Encoder.encode("\uB99B");
  }, Error, "EncodingError U+B99B");
  assertThrows(() => {
    ms932Encoder.encode("\uB99C");
  }, Error, "EncodingError U+B99C");
  assertThrows(() => {
    ms932Encoder.encode("\uB99D");
  }, Error, "EncodingError U+B99D");
  assertThrows(() => {
    ms932Encoder.encode("\uB99E");
  }, Error, "EncodingError U+B99E");
  assertThrows(() => {
    ms932Encoder.encode("\uB99F");
  }, Error, "EncodingError U+B99F");
  assertThrows(() => {
    ms932Encoder.encode("\uB9A0");
  }, Error, "EncodingError U+B9A0");
  assertThrows(() => {
    ms932Encoder.encode("\uB9A1");
  }, Error, "EncodingError U+B9A1");
  assertThrows(() => {
    ms932Encoder.encode("\uB9A2");
  }, Error, "EncodingError U+B9A2");
  assertThrows(() => {
    ms932Encoder.encode("\uB9A3");
  }, Error, "EncodingError U+B9A3");
  assertThrows(() => {
    ms932Encoder.encode("\uB9A4");
  }, Error, "EncodingError U+B9A4");
  assertThrows(() => {
    ms932Encoder.encode("\uB9A5");
  }, Error, "EncodingError U+B9A5");
  assertThrows(() => {
    ms932Encoder.encode("\uB9A6");
  }, Error, "EncodingError U+B9A6");
  assertThrows(() => {
    ms932Encoder.encode("\uB9A7");
  }, Error, "EncodingError U+B9A7");
  assertThrows(() => {
    ms932Encoder.encode("\uB9A8");
  }, Error, "EncodingError U+B9A8");
  assertThrows(() => {
    ms932Encoder.encode("\uB9A9");
  }, Error, "EncodingError U+B9A9");
  assertThrows(() => {
    ms932Encoder.encode("\uB9AA");
  }, Error, "EncodingError U+B9AA");
  assertThrows(() => {
    ms932Encoder.encode("\uB9AB");
  }, Error, "EncodingError U+B9AB");
  assertThrows(() => {
    ms932Encoder.encode("\uB9AC");
  }, Error, "EncodingError U+B9AC");
  assertThrows(() => {
    ms932Encoder.encode("\uB9AD");
  }, Error, "EncodingError U+B9AD");
  assertThrows(() => {
    ms932Encoder.encode("\uB9AE");
  }, Error, "EncodingError U+B9AE");
  assertThrows(() => {
    ms932Encoder.encode("\uB9AF");
  }, Error, "EncodingError U+B9AF");
  assertThrows(() => {
    ms932Encoder.encode("\uB9B0");
  }, Error, "EncodingError U+B9B0");
  assertThrows(() => {
    ms932Encoder.encode("\uB9B1");
  }, Error, "EncodingError U+B9B1");
  assertThrows(() => {
    ms932Encoder.encode("\uB9B2");
  }, Error, "EncodingError U+B9B2");
  assertThrows(() => {
    ms932Encoder.encode("\uB9B3");
  }, Error, "EncodingError U+B9B3");
  assertThrows(() => {
    ms932Encoder.encode("\uB9B4");
  }, Error, "EncodingError U+B9B4");
  assertThrows(() => {
    ms932Encoder.encode("\uB9B5");
  }, Error, "EncodingError U+B9B5");
  assertThrows(() => {
    ms932Encoder.encode("\uB9B6");
  }, Error, "EncodingError U+B9B6");
  assertThrows(() => {
    ms932Encoder.encode("\uB9B7");
  }, Error, "EncodingError U+B9B7");
  assertThrows(() => {
    ms932Encoder.encode("\uB9B8");
  }, Error, "EncodingError U+B9B8");
  assertThrows(() => {
    ms932Encoder.encode("\uB9B9");
  }, Error, "EncodingError U+B9B9");
  assertThrows(() => {
    ms932Encoder.encode("\uB9BA");
  }, Error, "EncodingError U+B9BA");
  assertThrows(() => {
    ms932Encoder.encode("\uB9BB");
  }, Error, "EncodingError U+B9BB");
  assertThrows(() => {
    ms932Encoder.encode("\uB9BC");
  }, Error, "EncodingError U+B9BC");
  assertThrows(() => {
    ms932Encoder.encode("\uB9BD");
  }, Error, "EncodingError U+B9BD");
  assertThrows(() => {
    ms932Encoder.encode("\uB9BE");
  }, Error, "EncodingError U+B9BE");
  assertThrows(() => {
    ms932Encoder.encode("\uB9BF");
  }, Error, "EncodingError U+B9BF");
  assertThrows(() => {
    ms932Encoder.encode("\uB9C0");
  }, Error, "EncodingError U+B9C0");
  assertThrows(() => {
    ms932Encoder.encode("\uB9C1");
  }, Error, "EncodingError U+B9C1");
  assertThrows(() => {
    ms932Encoder.encode("\uB9C2");
  }, Error, "EncodingError U+B9C2");
  assertThrows(() => {
    ms932Encoder.encode("\uB9C3");
  }, Error, "EncodingError U+B9C3");
  assertThrows(() => {
    ms932Encoder.encode("\uB9C4");
  }, Error, "EncodingError U+B9C4");
  assertThrows(() => {
    ms932Encoder.encode("\uB9C5");
  }, Error, "EncodingError U+B9C5");
  assertThrows(() => {
    ms932Encoder.encode("\uB9C6");
  }, Error, "EncodingError U+B9C6");
  assertThrows(() => {
    ms932Encoder.encode("\uB9C7");
  }, Error, "EncodingError U+B9C7");
  assertThrows(() => {
    ms932Encoder.encode("\uB9C8");
  }, Error, "EncodingError U+B9C8");
  assertThrows(() => {
    ms932Encoder.encode("\uB9C9");
  }, Error, "EncodingError U+B9C9");
  assertThrows(() => {
    ms932Encoder.encode("\uB9CA");
  }, Error, "EncodingError U+B9CA");
  assertThrows(() => {
    ms932Encoder.encode("\uB9CB");
  }, Error, "EncodingError U+B9CB");
  assertThrows(() => {
    ms932Encoder.encode("\uB9CC");
  }, Error, "EncodingError U+B9CC");
  assertThrows(() => {
    ms932Encoder.encode("\uB9CD");
  }, Error, "EncodingError U+B9CD");
  assertThrows(() => {
    ms932Encoder.encode("\uB9CE");
  }, Error, "EncodingError U+B9CE");
  assertThrows(() => {
    ms932Encoder.encode("\uB9CF");
  }, Error, "EncodingError U+B9CF");
  assertThrows(() => {
    ms932Encoder.encode("\uB9D0");
  }, Error, "EncodingError U+B9D0");
  assertThrows(() => {
    ms932Encoder.encode("\uB9D1");
  }, Error, "EncodingError U+B9D1");
  assertThrows(() => {
    ms932Encoder.encode("\uB9D2");
  }, Error, "EncodingError U+B9D2");
  assertThrows(() => {
    ms932Encoder.encode("\uB9D3");
  }, Error, "EncodingError U+B9D3");
  assertThrows(() => {
    ms932Encoder.encode("\uB9D4");
  }, Error, "EncodingError U+B9D4");
  assertThrows(() => {
    ms932Encoder.encode("\uB9D5");
  }, Error, "EncodingError U+B9D5");
  assertThrows(() => {
    ms932Encoder.encode("\uB9D6");
  }, Error, "EncodingError U+B9D6");
  assertThrows(() => {
    ms932Encoder.encode("\uB9D7");
  }, Error, "EncodingError U+B9D7");
  assertThrows(() => {
    ms932Encoder.encode("\uB9D8");
  }, Error, "EncodingError U+B9D8");
  assertThrows(() => {
    ms932Encoder.encode("\uB9D9");
  }, Error, "EncodingError U+B9D9");
  assertThrows(() => {
    ms932Encoder.encode("\uB9DA");
  }, Error, "EncodingError U+B9DA");
  assertThrows(() => {
    ms932Encoder.encode("\uB9DB");
  }, Error, "EncodingError U+B9DB");
  assertThrows(() => {
    ms932Encoder.encode("\uB9DC");
  }, Error, "EncodingError U+B9DC");
  assertThrows(() => {
    ms932Encoder.encode("\uB9DD");
  }, Error, "EncodingError U+B9DD");
  assertThrows(() => {
    ms932Encoder.encode("\uB9DE");
  }, Error, "EncodingError U+B9DE");
  assertThrows(() => {
    ms932Encoder.encode("\uB9DF");
  }, Error, "EncodingError U+B9DF");
  assertThrows(() => {
    ms932Encoder.encode("\uB9E0");
  }, Error, "EncodingError U+B9E0");
  assertThrows(() => {
    ms932Encoder.encode("\uB9E1");
  }, Error, "EncodingError U+B9E1");
  assertThrows(() => {
    ms932Encoder.encode("\uB9E2");
  }, Error, "EncodingError U+B9E2");
  assertThrows(() => {
    ms932Encoder.encode("\uB9E3");
  }, Error, "EncodingError U+B9E3");
  assertThrows(() => {
    ms932Encoder.encode("\uB9E4");
  }, Error, "EncodingError U+B9E4");
  assertThrows(() => {
    ms932Encoder.encode("\uB9E5");
  }, Error, "EncodingError U+B9E5");
  assertThrows(() => {
    ms932Encoder.encode("\uB9E6");
  }, Error, "EncodingError U+B9E6");
  assertThrows(() => {
    ms932Encoder.encode("\uB9E7");
  }, Error, "EncodingError U+B9E7");
  assertThrows(() => {
    ms932Encoder.encode("\uB9E8");
  }, Error, "EncodingError U+B9E8");
  assertThrows(() => {
    ms932Encoder.encode("\uB9E9");
  }, Error, "EncodingError U+B9E9");
  assertThrows(() => {
    ms932Encoder.encode("\uB9EA");
  }, Error, "EncodingError U+B9EA");
  assertThrows(() => {
    ms932Encoder.encode("\uB9EB");
  }, Error, "EncodingError U+B9EB");
  assertThrows(() => {
    ms932Encoder.encode("\uB9EC");
  }, Error, "EncodingError U+B9EC");
  assertThrows(() => {
    ms932Encoder.encode("\uB9ED");
  }, Error, "EncodingError U+B9ED");
  assertThrows(() => {
    ms932Encoder.encode("\uB9EE");
  }, Error, "EncodingError U+B9EE");
  assertThrows(() => {
    ms932Encoder.encode("\uB9EF");
  }, Error, "EncodingError U+B9EF");
  assertThrows(() => {
    ms932Encoder.encode("\uB9F0");
  }, Error, "EncodingError U+B9F0");
  assertThrows(() => {
    ms932Encoder.encode("\uB9F1");
  }, Error, "EncodingError U+B9F1");
  assertThrows(() => {
    ms932Encoder.encode("\uB9F2");
  }, Error, "EncodingError U+B9F2");
  assertThrows(() => {
    ms932Encoder.encode("\uB9F3");
  }, Error, "EncodingError U+B9F3");
  assertThrows(() => {
    ms932Encoder.encode("\uB9F4");
  }, Error, "EncodingError U+B9F4");
  assertThrows(() => {
    ms932Encoder.encode("\uB9F5");
  }, Error, "EncodingError U+B9F5");
  assertThrows(() => {
    ms932Encoder.encode("\uB9F6");
  }, Error, "EncodingError U+B9F6");
  assertThrows(() => {
    ms932Encoder.encode("\uB9F7");
  }, Error, "EncodingError U+B9F7");
  assertThrows(() => {
    ms932Encoder.encode("\uB9F8");
  }, Error, "EncodingError U+B9F8");
  assertThrows(() => {
    ms932Encoder.encode("\uB9F9");
  }, Error, "EncodingError U+B9F9");
  assertThrows(() => {
    ms932Encoder.encode("\uB9FA");
  }, Error, "EncodingError U+B9FA");
  assertThrows(() => {
    ms932Encoder.encode("\uB9FB");
  }, Error, "EncodingError U+B9FB");
  assertThrows(() => {
    ms932Encoder.encode("\uB9FC");
  }, Error, "EncodingError U+B9FC");
  assertThrows(() => {
    ms932Encoder.encode("\uB9FD");
  }, Error, "EncodingError U+B9FD");
  assertThrows(() => {
    ms932Encoder.encode("\uB9FE");
  }, Error, "EncodingError U+B9FE");
  assertThrows(() => {
    ms932Encoder.encode("\uB9FF");
  }, Error, "EncodingError U+B9FF");
  assertThrows(() => {
    ms932Encoder.encode("\uBA00");
  }, Error, "EncodingError U+BA00");
  assertThrows(() => {
    ms932Encoder.encode("\uBA01");
  }, Error, "EncodingError U+BA01");
  assertThrows(() => {
    ms932Encoder.encode("\uBA02");
  }, Error, "EncodingError U+BA02");
  assertThrows(() => {
    ms932Encoder.encode("\uBA03");
  }, Error, "EncodingError U+BA03");
  assertThrows(() => {
    ms932Encoder.encode("\uBA04");
  }, Error, "EncodingError U+BA04");
  assertThrows(() => {
    ms932Encoder.encode("\uBA05");
  }, Error, "EncodingError U+BA05");
  assertThrows(() => {
    ms932Encoder.encode("\uBA06");
  }, Error, "EncodingError U+BA06");
  assertThrows(() => {
    ms932Encoder.encode("\uBA07");
  }, Error, "EncodingError U+BA07");
  assertThrows(() => {
    ms932Encoder.encode("\uBA08");
  }, Error, "EncodingError U+BA08");
  assertThrows(() => {
    ms932Encoder.encode("\uBA09");
  }, Error, "EncodingError U+BA09");
  assertThrows(() => {
    ms932Encoder.encode("\uBA0A");
  }, Error, "EncodingError U+BA0A");
  assertThrows(() => {
    ms932Encoder.encode("\uBA0B");
  }, Error, "EncodingError U+BA0B");
  assertThrows(() => {
    ms932Encoder.encode("\uBA0C");
  }, Error, "EncodingError U+BA0C");
  assertThrows(() => {
    ms932Encoder.encode("\uBA0D");
  }, Error, "EncodingError U+BA0D");
  assertThrows(() => {
    ms932Encoder.encode("\uBA0E");
  }, Error, "EncodingError U+BA0E");
  assertThrows(() => {
    ms932Encoder.encode("\uBA0F");
  }, Error, "EncodingError U+BA0F");
  assertThrows(() => {
    ms932Encoder.encode("\uBA10");
  }, Error, "EncodingError U+BA10");
  assertThrows(() => {
    ms932Encoder.encode("\uBA11");
  }, Error, "EncodingError U+BA11");
  assertThrows(() => {
    ms932Encoder.encode("\uBA12");
  }, Error, "EncodingError U+BA12");
  assertThrows(() => {
    ms932Encoder.encode("\uBA13");
  }, Error, "EncodingError U+BA13");
  assertThrows(() => {
    ms932Encoder.encode("\uBA14");
  }, Error, "EncodingError U+BA14");
  assertThrows(() => {
    ms932Encoder.encode("\uBA15");
  }, Error, "EncodingError U+BA15");
  assertThrows(() => {
    ms932Encoder.encode("\uBA16");
  }, Error, "EncodingError U+BA16");
  assertThrows(() => {
    ms932Encoder.encode("\uBA17");
  }, Error, "EncodingError U+BA17");
  assertThrows(() => {
    ms932Encoder.encode("\uBA18");
  }, Error, "EncodingError U+BA18");
  assertThrows(() => {
    ms932Encoder.encode("\uBA19");
  }, Error, "EncodingError U+BA19");
  assertThrows(() => {
    ms932Encoder.encode("\uBA1A");
  }, Error, "EncodingError U+BA1A");
  assertThrows(() => {
    ms932Encoder.encode("\uBA1B");
  }, Error, "EncodingError U+BA1B");
  assertThrows(() => {
    ms932Encoder.encode("\uBA1C");
  }, Error, "EncodingError U+BA1C");
  assertThrows(() => {
    ms932Encoder.encode("\uBA1D");
  }, Error, "EncodingError U+BA1D");
  assertThrows(() => {
    ms932Encoder.encode("\uBA1E");
  }, Error, "EncodingError U+BA1E");
  assertThrows(() => {
    ms932Encoder.encode("\uBA1F");
  }, Error, "EncodingError U+BA1F");
  assertThrows(() => {
    ms932Encoder.encode("\uBA20");
  }, Error, "EncodingError U+BA20");
  assertThrows(() => {
    ms932Encoder.encode("\uBA21");
  }, Error, "EncodingError U+BA21");
  assertThrows(() => {
    ms932Encoder.encode("\uBA22");
  }, Error, "EncodingError U+BA22");
  assertThrows(() => {
    ms932Encoder.encode("\uBA23");
  }, Error, "EncodingError U+BA23");
  assertThrows(() => {
    ms932Encoder.encode("\uBA24");
  }, Error, "EncodingError U+BA24");
  assertThrows(() => {
    ms932Encoder.encode("\uBA25");
  }, Error, "EncodingError U+BA25");
  assertThrows(() => {
    ms932Encoder.encode("\uBA26");
  }, Error, "EncodingError U+BA26");
  assertThrows(() => {
    ms932Encoder.encode("\uBA27");
  }, Error, "EncodingError U+BA27");
  assertThrows(() => {
    ms932Encoder.encode("\uBA28");
  }, Error, "EncodingError U+BA28");
  assertThrows(() => {
    ms932Encoder.encode("\uBA29");
  }, Error, "EncodingError U+BA29");
  assertThrows(() => {
    ms932Encoder.encode("\uBA2A");
  }, Error, "EncodingError U+BA2A");
  assertThrows(() => {
    ms932Encoder.encode("\uBA2B");
  }, Error, "EncodingError U+BA2B");
  assertThrows(() => {
    ms932Encoder.encode("\uBA2C");
  }, Error, "EncodingError U+BA2C");
  assertThrows(() => {
    ms932Encoder.encode("\uBA2D");
  }, Error, "EncodingError U+BA2D");
  assertThrows(() => {
    ms932Encoder.encode("\uBA2E");
  }, Error, "EncodingError U+BA2E");
  assertThrows(() => {
    ms932Encoder.encode("\uBA2F");
  }, Error, "EncodingError U+BA2F");
  assertThrows(() => {
    ms932Encoder.encode("\uBA30");
  }, Error, "EncodingError U+BA30");
  assertThrows(() => {
    ms932Encoder.encode("\uBA31");
  }, Error, "EncodingError U+BA31");
  assertThrows(() => {
    ms932Encoder.encode("\uBA32");
  }, Error, "EncodingError U+BA32");
  assertThrows(() => {
    ms932Encoder.encode("\uBA33");
  }, Error, "EncodingError U+BA33");
  assertThrows(() => {
    ms932Encoder.encode("\uBA34");
  }, Error, "EncodingError U+BA34");
  assertThrows(() => {
    ms932Encoder.encode("\uBA35");
  }, Error, "EncodingError U+BA35");
  assertThrows(() => {
    ms932Encoder.encode("\uBA36");
  }, Error, "EncodingError U+BA36");
  assertThrows(() => {
    ms932Encoder.encode("\uBA37");
  }, Error, "EncodingError U+BA37");
  assertThrows(() => {
    ms932Encoder.encode("\uBA38");
  }, Error, "EncodingError U+BA38");
  assertThrows(() => {
    ms932Encoder.encode("\uBA39");
  }, Error, "EncodingError U+BA39");
  assertThrows(() => {
    ms932Encoder.encode("\uBA3A");
  }, Error, "EncodingError U+BA3A");
  assertThrows(() => {
    ms932Encoder.encode("\uBA3B");
  }, Error, "EncodingError U+BA3B");
  assertThrows(() => {
    ms932Encoder.encode("\uBA3C");
  }, Error, "EncodingError U+BA3C");
  assertThrows(() => {
    ms932Encoder.encode("\uBA3D");
  }, Error, "EncodingError U+BA3D");
  assertThrows(() => {
    ms932Encoder.encode("\uBA3E");
  }, Error, "EncodingError U+BA3E");
  assertThrows(() => {
    ms932Encoder.encode("\uBA3F");
  }, Error, "EncodingError U+BA3F");
  assertThrows(() => {
    ms932Encoder.encode("\uBA40");
  }, Error, "EncodingError U+BA40");
  assertThrows(() => {
    ms932Encoder.encode("\uBA41");
  }, Error, "EncodingError U+BA41");
  assertThrows(() => {
    ms932Encoder.encode("\uBA42");
  }, Error, "EncodingError U+BA42");
  assertThrows(() => {
    ms932Encoder.encode("\uBA43");
  }, Error, "EncodingError U+BA43");
  assertThrows(() => {
    ms932Encoder.encode("\uBA44");
  }, Error, "EncodingError U+BA44");
  assertThrows(() => {
    ms932Encoder.encode("\uBA45");
  }, Error, "EncodingError U+BA45");
  assertThrows(() => {
    ms932Encoder.encode("\uBA46");
  }, Error, "EncodingError U+BA46");
  assertThrows(() => {
    ms932Encoder.encode("\uBA47");
  }, Error, "EncodingError U+BA47");
  assertThrows(() => {
    ms932Encoder.encode("\uBA48");
  }, Error, "EncodingError U+BA48");
  assertThrows(() => {
    ms932Encoder.encode("\uBA49");
  }, Error, "EncodingError U+BA49");
  assertThrows(() => {
    ms932Encoder.encode("\uBA4A");
  }, Error, "EncodingError U+BA4A");
  assertThrows(() => {
    ms932Encoder.encode("\uBA4B");
  }, Error, "EncodingError U+BA4B");
  assertThrows(() => {
    ms932Encoder.encode("\uBA4C");
  }, Error, "EncodingError U+BA4C");
  assertThrows(() => {
    ms932Encoder.encode("\uBA4D");
  }, Error, "EncodingError U+BA4D");
  assertThrows(() => {
    ms932Encoder.encode("\uBA4E");
  }, Error, "EncodingError U+BA4E");
  assertThrows(() => {
    ms932Encoder.encode("\uBA4F");
  }, Error, "EncodingError U+BA4F");
  assertThrows(() => {
    ms932Encoder.encode("\uBA50");
  }, Error, "EncodingError U+BA50");
  assertThrows(() => {
    ms932Encoder.encode("\uBA51");
  }, Error, "EncodingError U+BA51");
  assertThrows(() => {
    ms932Encoder.encode("\uBA52");
  }, Error, "EncodingError U+BA52");
  assertThrows(() => {
    ms932Encoder.encode("\uBA53");
  }, Error, "EncodingError U+BA53");
  assertThrows(() => {
    ms932Encoder.encode("\uBA54");
  }, Error, "EncodingError U+BA54");
  assertThrows(() => {
    ms932Encoder.encode("\uBA55");
  }, Error, "EncodingError U+BA55");
  assertThrows(() => {
    ms932Encoder.encode("\uBA56");
  }, Error, "EncodingError U+BA56");
  assertThrows(() => {
    ms932Encoder.encode("\uBA57");
  }, Error, "EncodingError U+BA57");
  assertThrows(() => {
    ms932Encoder.encode("\uBA58");
  }, Error, "EncodingError U+BA58");
  assertThrows(() => {
    ms932Encoder.encode("\uBA59");
  }, Error, "EncodingError U+BA59");
  assertThrows(() => {
    ms932Encoder.encode("\uBA5A");
  }, Error, "EncodingError U+BA5A");
  assertThrows(() => {
    ms932Encoder.encode("\uBA5B");
  }, Error, "EncodingError U+BA5B");
  assertThrows(() => {
    ms932Encoder.encode("\uBA5C");
  }, Error, "EncodingError U+BA5C");
  assertThrows(() => {
    ms932Encoder.encode("\uBA5D");
  }, Error, "EncodingError U+BA5D");
  assertThrows(() => {
    ms932Encoder.encode("\uBA5E");
  }, Error, "EncodingError U+BA5E");
  assertThrows(() => {
    ms932Encoder.encode("\uBA5F");
  }, Error, "EncodingError U+BA5F");
  assertThrows(() => {
    ms932Encoder.encode("\uBA60");
  }, Error, "EncodingError U+BA60");
  assertThrows(() => {
    ms932Encoder.encode("\uBA61");
  }, Error, "EncodingError U+BA61");
  assertThrows(() => {
    ms932Encoder.encode("\uBA62");
  }, Error, "EncodingError U+BA62");
  assertThrows(() => {
    ms932Encoder.encode("\uBA63");
  }, Error, "EncodingError U+BA63");
  assertThrows(() => {
    ms932Encoder.encode("\uBA64");
  }, Error, "EncodingError U+BA64");
  assertThrows(() => {
    ms932Encoder.encode("\uBA65");
  }, Error, "EncodingError U+BA65");
  assertThrows(() => {
    ms932Encoder.encode("\uBA66");
  }, Error, "EncodingError U+BA66");
  assertThrows(() => {
    ms932Encoder.encode("\uBA67");
  }, Error, "EncodingError U+BA67");
  assertThrows(() => {
    ms932Encoder.encode("\uBA68");
  }, Error, "EncodingError U+BA68");
  assertThrows(() => {
    ms932Encoder.encode("\uBA69");
  }, Error, "EncodingError U+BA69");
  assertThrows(() => {
    ms932Encoder.encode("\uBA6A");
  }, Error, "EncodingError U+BA6A");
  assertThrows(() => {
    ms932Encoder.encode("\uBA6B");
  }, Error, "EncodingError U+BA6B");
  assertThrows(() => {
    ms932Encoder.encode("\uBA6C");
  }, Error, "EncodingError U+BA6C");
  assertThrows(() => {
    ms932Encoder.encode("\uBA6D");
  }, Error, "EncodingError U+BA6D");
  assertThrows(() => {
    ms932Encoder.encode("\uBA6E");
  }, Error, "EncodingError U+BA6E");
  assertThrows(() => {
    ms932Encoder.encode("\uBA6F");
  }, Error, "EncodingError U+BA6F");
  assertThrows(() => {
    ms932Encoder.encode("\uBA70");
  }, Error, "EncodingError U+BA70");
  assertThrows(() => {
    ms932Encoder.encode("\uBA71");
  }, Error, "EncodingError U+BA71");
  assertThrows(() => {
    ms932Encoder.encode("\uBA72");
  }, Error, "EncodingError U+BA72");
  assertThrows(() => {
    ms932Encoder.encode("\uBA73");
  }, Error, "EncodingError U+BA73");
  assertThrows(() => {
    ms932Encoder.encode("\uBA74");
  }, Error, "EncodingError U+BA74");
  assertThrows(() => {
    ms932Encoder.encode("\uBA75");
  }, Error, "EncodingError U+BA75");
  assertThrows(() => {
    ms932Encoder.encode("\uBA76");
  }, Error, "EncodingError U+BA76");
  assertThrows(() => {
    ms932Encoder.encode("\uBA77");
  }, Error, "EncodingError U+BA77");
  assertThrows(() => {
    ms932Encoder.encode("\uBA78");
  }, Error, "EncodingError U+BA78");
  assertThrows(() => {
    ms932Encoder.encode("\uBA79");
  }, Error, "EncodingError U+BA79");
  assertThrows(() => {
    ms932Encoder.encode("\uBA7A");
  }, Error, "EncodingError U+BA7A");
  assertThrows(() => {
    ms932Encoder.encode("\uBA7B");
  }, Error, "EncodingError U+BA7B");
  assertThrows(() => {
    ms932Encoder.encode("\uBA7C");
  }, Error, "EncodingError U+BA7C");
  assertThrows(() => {
    ms932Encoder.encode("\uBA7D");
  }, Error, "EncodingError U+BA7D");
  assertThrows(() => {
    ms932Encoder.encode("\uBA7E");
  }, Error, "EncodingError U+BA7E");
  assertThrows(() => {
    ms932Encoder.encode("\uBA7F");
  }, Error, "EncodingError U+BA7F");
  assertThrows(() => {
    ms932Encoder.encode("\uBA80");
  }, Error, "EncodingError U+BA80");
  assertThrows(() => {
    ms932Encoder.encode("\uBA81");
  }, Error, "EncodingError U+BA81");
  assertThrows(() => {
    ms932Encoder.encode("\uBA82");
  }, Error, "EncodingError U+BA82");
  assertThrows(() => {
    ms932Encoder.encode("\uBA83");
  }, Error, "EncodingError U+BA83");
  assertThrows(() => {
    ms932Encoder.encode("\uBA84");
  }, Error, "EncodingError U+BA84");
  assertThrows(() => {
    ms932Encoder.encode("\uBA85");
  }, Error, "EncodingError U+BA85");
  assertThrows(() => {
    ms932Encoder.encode("\uBA86");
  }, Error, "EncodingError U+BA86");
  assertThrows(() => {
    ms932Encoder.encode("\uBA87");
  }, Error, "EncodingError U+BA87");
  assertThrows(() => {
    ms932Encoder.encode("\uBA88");
  }, Error, "EncodingError U+BA88");
  assertThrows(() => {
    ms932Encoder.encode("\uBA89");
  }, Error, "EncodingError U+BA89");
  assertThrows(() => {
    ms932Encoder.encode("\uBA8A");
  }, Error, "EncodingError U+BA8A");
  assertThrows(() => {
    ms932Encoder.encode("\uBA8B");
  }, Error, "EncodingError U+BA8B");
  assertThrows(() => {
    ms932Encoder.encode("\uBA8C");
  }, Error, "EncodingError U+BA8C");
  assertThrows(() => {
    ms932Encoder.encode("\uBA8D");
  }, Error, "EncodingError U+BA8D");
  assertThrows(() => {
    ms932Encoder.encode("\uBA8E");
  }, Error, "EncodingError U+BA8E");
  assertThrows(() => {
    ms932Encoder.encode("\uBA8F");
  }, Error, "EncodingError U+BA8F");
  assertThrows(() => {
    ms932Encoder.encode("\uBA90");
  }, Error, "EncodingError U+BA90");
  assertThrows(() => {
    ms932Encoder.encode("\uBA91");
  }, Error, "EncodingError U+BA91");
  assertThrows(() => {
    ms932Encoder.encode("\uBA92");
  }, Error, "EncodingError U+BA92");
  assertThrows(() => {
    ms932Encoder.encode("\uBA93");
  }, Error, "EncodingError U+BA93");
  assertThrows(() => {
    ms932Encoder.encode("\uBA94");
  }, Error, "EncodingError U+BA94");
  assertThrows(() => {
    ms932Encoder.encode("\uBA95");
  }, Error, "EncodingError U+BA95");
  assertThrows(() => {
    ms932Encoder.encode("\uBA96");
  }, Error, "EncodingError U+BA96");
  assertThrows(() => {
    ms932Encoder.encode("\uBA97");
  }, Error, "EncodingError U+BA97");
  assertThrows(() => {
    ms932Encoder.encode("\uBA98");
  }, Error, "EncodingError U+BA98");
  assertThrows(() => {
    ms932Encoder.encode("\uBA99");
  }, Error, "EncodingError U+BA99");
  assertThrows(() => {
    ms932Encoder.encode("\uBA9A");
  }, Error, "EncodingError U+BA9A");
  assertThrows(() => {
    ms932Encoder.encode("\uBA9B");
  }, Error, "EncodingError U+BA9B");
  assertThrows(() => {
    ms932Encoder.encode("\uBA9C");
  }, Error, "EncodingError U+BA9C");
  assertThrows(() => {
    ms932Encoder.encode("\uBA9D");
  }, Error, "EncodingError U+BA9D");
  assertThrows(() => {
    ms932Encoder.encode("\uBA9E");
  }, Error, "EncodingError U+BA9E");
  assertThrows(() => {
    ms932Encoder.encode("\uBA9F");
  }, Error, "EncodingError U+BA9F");
  assertThrows(() => {
    ms932Encoder.encode("\uBAA0");
  }, Error, "EncodingError U+BAA0");
  assertThrows(() => {
    ms932Encoder.encode("\uBAA1");
  }, Error, "EncodingError U+BAA1");
  assertThrows(() => {
    ms932Encoder.encode("\uBAA2");
  }, Error, "EncodingError U+BAA2");
  assertThrows(() => {
    ms932Encoder.encode("\uBAA3");
  }, Error, "EncodingError U+BAA3");
  assertThrows(() => {
    ms932Encoder.encode("\uBAA4");
  }, Error, "EncodingError U+BAA4");
  assertThrows(() => {
    ms932Encoder.encode("\uBAA5");
  }, Error, "EncodingError U+BAA5");
  assertThrows(() => {
    ms932Encoder.encode("\uBAA6");
  }, Error, "EncodingError U+BAA6");
  assertThrows(() => {
    ms932Encoder.encode("\uBAA7");
  }, Error, "EncodingError U+BAA7");
  assertThrows(() => {
    ms932Encoder.encode("\uBAA8");
  }, Error, "EncodingError U+BAA8");
  assertThrows(() => {
    ms932Encoder.encode("\uBAA9");
  }, Error, "EncodingError U+BAA9");
  assertThrows(() => {
    ms932Encoder.encode("\uBAAA");
  }, Error, "EncodingError U+BAAA");
  assertThrows(() => {
    ms932Encoder.encode("\uBAAB");
  }, Error, "EncodingError U+BAAB");
  assertThrows(() => {
    ms932Encoder.encode("\uBAAC");
  }, Error, "EncodingError U+BAAC");
  assertThrows(() => {
    ms932Encoder.encode("\uBAAD");
  }, Error, "EncodingError U+BAAD");
  assertThrows(() => {
    ms932Encoder.encode("\uBAAE");
  }, Error, "EncodingError U+BAAE");
  assertThrows(() => {
    ms932Encoder.encode("\uBAAF");
  }, Error, "EncodingError U+BAAF");
  assertThrows(() => {
    ms932Encoder.encode("\uBAB0");
  }, Error, "EncodingError U+BAB0");
  assertThrows(() => {
    ms932Encoder.encode("\uBAB1");
  }, Error, "EncodingError U+BAB1");
  assertThrows(() => {
    ms932Encoder.encode("\uBAB2");
  }, Error, "EncodingError U+BAB2");
  assertThrows(() => {
    ms932Encoder.encode("\uBAB3");
  }, Error, "EncodingError U+BAB3");
  assertThrows(() => {
    ms932Encoder.encode("\uBAB4");
  }, Error, "EncodingError U+BAB4");
  assertThrows(() => {
    ms932Encoder.encode("\uBAB5");
  }, Error, "EncodingError U+BAB5");
  assertThrows(() => {
    ms932Encoder.encode("\uBAB6");
  }, Error, "EncodingError U+BAB6");
  assertThrows(() => {
    ms932Encoder.encode("\uBAB7");
  }, Error, "EncodingError U+BAB7");
  assertThrows(() => {
    ms932Encoder.encode("\uBAB8");
  }, Error, "EncodingError U+BAB8");
  assertThrows(() => {
    ms932Encoder.encode("\uBAB9");
  }, Error, "EncodingError U+BAB9");
  assertThrows(() => {
    ms932Encoder.encode("\uBABA");
  }, Error, "EncodingError U+BABA");
  assertThrows(() => {
    ms932Encoder.encode("\uBABB");
  }, Error, "EncodingError U+BABB");
  assertThrows(() => {
    ms932Encoder.encode("\uBABC");
  }, Error, "EncodingError U+BABC");
  assertThrows(() => {
    ms932Encoder.encode("\uBABD");
  }, Error, "EncodingError U+BABD");
  assertThrows(() => {
    ms932Encoder.encode("\uBABE");
  }, Error, "EncodingError U+BABE");
  assertThrows(() => {
    ms932Encoder.encode("\uBABF");
  }, Error, "EncodingError U+BABF");
  assertThrows(() => {
    ms932Encoder.encode("\uBAC0");
  }, Error, "EncodingError U+BAC0");
  assertThrows(() => {
    ms932Encoder.encode("\uBAC1");
  }, Error, "EncodingError U+BAC1");
  assertThrows(() => {
    ms932Encoder.encode("\uBAC2");
  }, Error, "EncodingError U+BAC2");
  assertThrows(() => {
    ms932Encoder.encode("\uBAC3");
  }, Error, "EncodingError U+BAC3");
  assertThrows(() => {
    ms932Encoder.encode("\uBAC4");
  }, Error, "EncodingError U+BAC4");
  assertThrows(() => {
    ms932Encoder.encode("\uBAC5");
  }, Error, "EncodingError U+BAC5");
  assertThrows(() => {
    ms932Encoder.encode("\uBAC6");
  }, Error, "EncodingError U+BAC6");
  assertThrows(() => {
    ms932Encoder.encode("\uBAC7");
  }, Error, "EncodingError U+BAC7");
  assertThrows(() => {
    ms932Encoder.encode("\uBAC8");
  }, Error, "EncodingError U+BAC8");
  assertThrows(() => {
    ms932Encoder.encode("\uBAC9");
  }, Error, "EncodingError U+BAC9");
  assertThrows(() => {
    ms932Encoder.encode("\uBACA");
  }, Error, "EncodingError U+BACA");
  assertThrows(() => {
    ms932Encoder.encode("\uBACB");
  }, Error, "EncodingError U+BACB");
  assertThrows(() => {
    ms932Encoder.encode("\uBACC");
  }, Error, "EncodingError U+BACC");
  assertThrows(() => {
    ms932Encoder.encode("\uBACD");
  }, Error, "EncodingError U+BACD");
  assertThrows(() => {
    ms932Encoder.encode("\uBACE");
  }, Error, "EncodingError U+BACE");
  assertThrows(() => {
    ms932Encoder.encode("\uBACF");
  }, Error, "EncodingError U+BACF");
  assertThrows(() => {
    ms932Encoder.encode("\uBAD0");
  }, Error, "EncodingError U+BAD0");
  assertThrows(() => {
    ms932Encoder.encode("\uBAD1");
  }, Error, "EncodingError U+BAD1");
  assertThrows(() => {
    ms932Encoder.encode("\uBAD2");
  }, Error, "EncodingError U+BAD2");
  assertThrows(() => {
    ms932Encoder.encode("\uBAD3");
  }, Error, "EncodingError U+BAD3");
  assertThrows(() => {
    ms932Encoder.encode("\uBAD4");
  }, Error, "EncodingError U+BAD4");
  assertThrows(() => {
    ms932Encoder.encode("\uBAD5");
  }, Error, "EncodingError U+BAD5");
  assertThrows(() => {
    ms932Encoder.encode("\uBAD6");
  }, Error, "EncodingError U+BAD6");
  assertThrows(() => {
    ms932Encoder.encode("\uBAD7");
  }, Error, "EncodingError U+BAD7");
  assertThrows(() => {
    ms932Encoder.encode("\uBAD8");
  }, Error, "EncodingError U+BAD8");
  assertThrows(() => {
    ms932Encoder.encode("\uBAD9");
  }, Error, "EncodingError U+BAD9");
  assertThrows(() => {
    ms932Encoder.encode("\uBADA");
  }, Error, "EncodingError U+BADA");
  assertThrows(() => {
    ms932Encoder.encode("\uBADB");
  }, Error, "EncodingError U+BADB");
  assertThrows(() => {
    ms932Encoder.encode("\uBADC");
  }, Error, "EncodingError U+BADC");
  assertThrows(() => {
    ms932Encoder.encode("\uBADD");
  }, Error, "EncodingError U+BADD");
  assertThrows(() => {
    ms932Encoder.encode("\uBADE");
  }, Error, "EncodingError U+BADE");
  assertThrows(() => {
    ms932Encoder.encode("\uBADF");
  }, Error, "EncodingError U+BADF");
  assertThrows(() => {
    ms932Encoder.encode("\uBAE0");
  }, Error, "EncodingError U+BAE0");
  assertThrows(() => {
    ms932Encoder.encode("\uBAE1");
  }, Error, "EncodingError U+BAE1");
  assertThrows(() => {
    ms932Encoder.encode("\uBAE2");
  }, Error, "EncodingError U+BAE2");
  assertThrows(() => {
    ms932Encoder.encode("\uBAE3");
  }, Error, "EncodingError U+BAE3");
  assertThrows(() => {
    ms932Encoder.encode("\uBAE4");
  }, Error, "EncodingError U+BAE4");
  assertThrows(() => {
    ms932Encoder.encode("\uBAE5");
  }, Error, "EncodingError U+BAE5");
  assertThrows(() => {
    ms932Encoder.encode("\uBAE6");
  }, Error, "EncodingError U+BAE6");
  assertThrows(() => {
    ms932Encoder.encode("\uBAE7");
  }, Error, "EncodingError U+BAE7");
  assertThrows(() => {
    ms932Encoder.encode("\uBAE8");
  }, Error, "EncodingError U+BAE8");
  assertThrows(() => {
    ms932Encoder.encode("\uBAE9");
  }, Error, "EncodingError U+BAE9");
  assertThrows(() => {
    ms932Encoder.encode("\uBAEA");
  }, Error, "EncodingError U+BAEA");
  assertThrows(() => {
    ms932Encoder.encode("\uBAEB");
  }, Error, "EncodingError U+BAEB");
  assertThrows(() => {
    ms932Encoder.encode("\uBAEC");
  }, Error, "EncodingError U+BAEC");
  assertThrows(() => {
    ms932Encoder.encode("\uBAED");
  }, Error, "EncodingError U+BAED");
  assertThrows(() => {
    ms932Encoder.encode("\uBAEE");
  }, Error, "EncodingError U+BAEE");
  assertThrows(() => {
    ms932Encoder.encode("\uBAEF");
  }, Error, "EncodingError U+BAEF");
  assertThrows(() => {
    ms932Encoder.encode("\uBAF0");
  }, Error, "EncodingError U+BAF0");
  assertThrows(() => {
    ms932Encoder.encode("\uBAF1");
  }, Error, "EncodingError U+BAF1");
  assertThrows(() => {
    ms932Encoder.encode("\uBAF2");
  }, Error, "EncodingError U+BAF2");
  assertThrows(() => {
    ms932Encoder.encode("\uBAF3");
  }, Error, "EncodingError U+BAF3");
  assertThrows(() => {
    ms932Encoder.encode("\uBAF4");
  }, Error, "EncodingError U+BAF4");
  assertThrows(() => {
    ms932Encoder.encode("\uBAF5");
  }, Error, "EncodingError U+BAF5");
  assertThrows(() => {
    ms932Encoder.encode("\uBAF6");
  }, Error, "EncodingError U+BAF6");
  assertThrows(() => {
    ms932Encoder.encode("\uBAF7");
  }, Error, "EncodingError U+BAF7");
  assertThrows(() => {
    ms932Encoder.encode("\uBAF8");
  }, Error, "EncodingError U+BAF8");
  assertThrows(() => {
    ms932Encoder.encode("\uBAF9");
  }, Error, "EncodingError U+BAF9");
  assertThrows(() => {
    ms932Encoder.encode("\uBAFA");
  }, Error, "EncodingError U+BAFA");
  assertThrows(() => {
    ms932Encoder.encode("\uBAFB");
  }, Error, "EncodingError U+BAFB");
  assertThrows(() => {
    ms932Encoder.encode("\uBAFC");
  }, Error, "EncodingError U+BAFC");
  assertThrows(() => {
    ms932Encoder.encode("\uBAFD");
  }, Error, "EncodingError U+BAFD");
  assertThrows(() => {
    ms932Encoder.encode("\uBAFE");
  }, Error, "EncodingError U+BAFE");
  assertThrows(() => {
    ms932Encoder.encode("\uBAFF");
  }, Error, "EncodingError U+BAFF");
  assertThrows(() => {
    ms932Encoder.encode("\uBB00");
  }, Error, "EncodingError U+BB00");
  assertThrows(() => {
    ms932Encoder.encode("\uBB01");
  }, Error, "EncodingError U+BB01");
  assertThrows(() => {
    ms932Encoder.encode("\uBB02");
  }, Error, "EncodingError U+BB02");
  assertThrows(() => {
    ms932Encoder.encode("\uBB03");
  }, Error, "EncodingError U+BB03");
  assertThrows(() => {
    ms932Encoder.encode("\uBB04");
  }, Error, "EncodingError U+BB04");
  assertThrows(() => {
    ms932Encoder.encode("\uBB05");
  }, Error, "EncodingError U+BB05");
  assertThrows(() => {
    ms932Encoder.encode("\uBB06");
  }, Error, "EncodingError U+BB06");
  assertThrows(() => {
    ms932Encoder.encode("\uBB07");
  }, Error, "EncodingError U+BB07");
  assertThrows(() => {
    ms932Encoder.encode("\uBB08");
  }, Error, "EncodingError U+BB08");
  assertThrows(() => {
    ms932Encoder.encode("\uBB09");
  }, Error, "EncodingError U+BB09");
  assertThrows(() => {
    ms932Encoder.encode("\uBB0A");
  }, Error, "EncodingError U+BB0A");
  assertThrows(() => {
    ms932Encoder.encode("\uBB0B");
  }, Error, "EncodingError U+BB0B");
  assertThrows(() => {
    ms932Encoder.encode("\uBB0C");
  }, Error, "EncodingError U+BB0C");
  assertThrows(() => {
    ms932Encoder.encode("\uBB0D");
  }, Error, "EncodingError U+BB0D");
  assertThrows(() => {
    ms932Encoder.encode("\uBB0E");
  }, Error, "EncodingError U+BB0E");
  assertThrows(() => {
    ms932Encoder.encode("\uBB0F");
  }, Error, "EncodingError U+BB0F");
  assertThrows(() => {
    ms932Encoder.encode("\uBB10");
  }, Error, "EncodingError U+BB10");
  assertThrows(() => {
    ms932Encoder.encode("\uBB11");
  }, Error, "EncodingError U+BB11");
  assertThrows(() => {
    ms932Encoder.encode("\uBB12");
  }, Error, "EncodingError U+BB12");
  assertThrows(() => {
    ms932Encoder.encode("\uBB13");
  }, Error, "EncodingError U+BB13");
  assertThrows(() => {
    ms932Encoder.encode("\uBB14");
  }, Error, "EncodingError U+BB14");
  assertThrows(() => {
    ms932Encoder.encode("\uBB15");
  }, Error, "EncodingError U+BB15");
  assertThrows(() => {
    ms932Encoder.encode("\uBB16");
  }, Error, "EncodingError U+BB16");
  assertThrows(() => {
    ms932Encoder.encode("\uBB17");
  }, Error, "EncodingError U+BB17");
  assertThrows(() => {
    ms932Encoder.encode("\uBB18");
  }, Error, "EncodingError U+BB18");
  assertThrows(() => {
    ms932Encoder.encode("\uBB19");
  }, Error, "EncodingError U+BB19");
  assertThrows(() => {
    ms932Encoder.encode("\uBB1A");
  }, Error, "EncodingError U+BB1A");
  assertThrows(() => {
    ms932Encoder.encode("\uBB1B");
  }, Error, "EncodingError U+BB1B");
  assertThrows(() => {
    ms932Encoder.encode("\uBB1C");
  }, Error, "EncodingError U+BB1C");
  assertThrows(() => {
    ms932Encoder.encode("\uBB1D");
  }, Error, "EncodingError U+BB1D");
  assertThrows(() => {
    ms932Encoder.encode("\uBB1E");
  }, Error, "EncodingError U+BB1E");
  assertThrows(() => {
    ms932Encoder.encode("\uBB1F");
  }, Error, "EncodingError U+BB1F");
  assertThrows(() => {
    ms932Encoder.encode("\uBB20");
  }, Error, "EncodingError U+BB20");
  assertThrows(() => {
    ms932Encoder.encode("\uBB21");
  }, Error, "EncodingError U+BB21");
  assertThrows(() => {
    ms932Encoder.encode("\uBB22");
  }, Error, "EncodingError U+BB22");
  assertThrows(() => {
    ms932Encoder.encode("\uBB23");
  }, Error, "EncodingError U+BB23");
  assertThrows(() => {
    ms932Encoder.encode("\uBB24");
  }, Error, "EncodingError U+BB24");
  assertThrows(() => {
    ms932Encoder.encode("\uBB25");
  }, Error, "EncodingError U+BB25");
  assertThrows(() => {
    ms932Encoder.encode("\uBB26");
  }, Error, "EncodingError U+BB26");
  assertThrows(() => {
    ms932Encoder.encode("\uBB27");
  }, Error, "EncodingError U+BB27");
  assertThrows(() => {
    ms932Encoder.encode("\uBB28");
  }, Error, "EncodingError U+BB28");
  assertThrows(() => {
    ms932Encoder.encode("\uBB29");
  }, Error, "EncodingError U+BB29");
  assertThrows(() => {
    ms932Encoder.encode("\uBB2A");
  }, Error, "EncodingError U+BB2A");
  assertThrows(() => {
    ms932Encoder.encode("\uBB2B");
  }, Error, "EncodingError U+BB2B");
  assertThrows(() => {
    ms932Encoder.encode("\uBB2C");
  }, Error, "EncodingError U+BB2C");
  assertThrows(() => {
    ms932Encoder.encode("\uBB2D");
  }, Error, "EncodingError U+BB2D");
  assertThrows(() => {
    ms932Encoder.encode("\uBB2E");
  }, Error, "EncodingError U+BB2E");
  assertThrows(() => {
    ms932Encoder.encode("\uBB2F");
  }, Error, "EncodingError U+BB2F");
  assertThrows(() => {
    ms932Encoder.encode("\uBB30");
  }, Error, "EncodingError U+BB30");
  assertThrows(() => {
    ms932Encoder.encode("\uBB31");
  }, Error, "EncodingError U+BB31");
  assertThrows(() => {
    ms932Encoder.encode("\uBB32");
  }, Error, "EncodingError U+BB32");
  assertThrows(() => {
    ms932Encoder.encode("\uBB33");
  }, Error, "EncodingError U+BB33");
  assertThrows(() => {
    ms932Encoder.encode("\uBB34");
  }, Error, "EncodingError U+BB34");
  assertThrows(() => {
    ms932Encoder.encode("\uBB35");
  }, Error, "EncodingError U+BB35");
  assertThrows(() => {
    ms932Encoder.encode("\uBB36");
  }, Error, "EncodingError U+BB36");
  assertThrows(() => {
    ms932Encoder.encode("\uBB37");
  }, Error, "EncodingError U+BB37");
  assertThrows(() => {
    ms932Encoder.encode("\uBB38");
  }, Error, "EncodingError U+BB38");
  assertThrows(() => {
    ms932Encoder.encode("\uBB39");
  }, Error, "EncodingError U+BB39");
  assertThrows(() => {
    ms932Encoder.encode("\uBB3A");
  }, Error, "EncodingError U+BB3A");
  assertThrows(() => {
    ms932Encoder.encode("\uBB3B");
  }, Error, "EncodingError U+BB3B");
  assertThrows(() => {
    ms932Encoder.encode("\uBB3C");
  }, Error, "EncodingError U+BB3C");
  assertThrows(() => {
    ms932Encoder.encode("\uBB3D");
  }, Error, "EncodingError U+BB3D");
  assertThrows(() => {
    ms932Encoder.encode("\uBB3E");
  }, Error, "EncodingError U+BB3E");
  assertThrows(() => {
    ms932Encoder.encode("\uBB3F");
  }, Error, "EncodingError U+BB3F");
  assertThrows(() => {
    ms932Encoder.encode("\uBB40");
  }, Error, "EncodingError U+BB40");
  assertThrows(() => {
    ms932Encoder.encode("\uBB41");
  }, Error, "EncodingError U+BB41");
  assertThrows(() => {
    ms932Encoder.encode("\uBB42");
  }, Error, "EncodingError U+BB42");
  assertThrows(() => {
    ms932Encoder.encode("\uBB43");
  }, Error, "EncodingError U+BB43");
  assertThrows(() => {
    ms932Encoder.encode("\uBB44");
  }, Error, "EncodingError U+BB44");
  assertThrows(() => {
    ms932Encoder.encode("\uBB45");
  }, Error, "EncodingError U+BB45");
  assertThrows(() => {
    ms932Encoder.encode("\uBB46");
  }, Error, "EncodingError U+BB46");
  assertThrows(() => {
    ms932Encoder.encode("\uBB47");
  }, Error, "EncodingError U+BB47");
  assertThrows(() => {
    ms932Encoder.encode("\uBB48");
  }, Error, "EncodingError U+BB48");
  assertThrows(() => {
    ms932Encoder.encode("\uBB49");
  }, Error, "EncodingError U+BB49");
  assertThrows(() => {
    ms932Encoder.encode("\uBB4A");
  }, Error, "EncodingError U+BB4A");
  assertThrows(() => {
    ms932Encoder.encode("\uBB4B");
  }, Error, "EncodingError U+BB4B");
  assertThrows(() => {
    ms932Encoder.encode("\uBB4C");
  }, Error, "EncodingError U+BB4C");
  assertThrows(() => {
    ms932Encoder.encode("\uBB4D");
  }, Error, "EncodingError U+BB4D");
  assertThrows(() => {
    ms932Encoder.encode("\uBB4E");
  }, Error, "EncodingError U+BB4E");
  assertThrows(() => {
    ms932Encoder.encode("\uBB4F");
  }, Error, "EncodingError U+BB4F");
  assertThrows(() => {
    ms932Encoder.encode("\uBB50");
  }, Error, "EncodingError U+BB50");
  assertThrows(() => {
    ms932Encoder.encode("\uBB51");
  }, Error, "EncodingError U+BB51");
  assertThrows(() => {
    ms932Encoder.encode("\uBB52");
  }, Error, "EncodingError U+BB52");
  assertThrows(() => {
    ms932Encoder.encode("\uBB53");
  }, Error, "EncodingError U+BB53");
  assertThrows(() => {
    ms932Encoder.encode("\uBB54");
  }, Error, "EncodingError U+BB54");
  assertThrows(() => {
    ms932Encoder.encode("\uBB55");
  }, Error, "EncodingError U+BB55");
  assertThrows(() => {
    ms932Encoder.encode("\uBB56");
  }, Error, "EncodingError U+BB56");
  assertThrows(() => {
    ms932Encoder.encode("\uBB57");
  }, Error, "EncodingError U+BB57");
  assertThrows(() => {
    ms932Encoder.encode("\uBB58");
  }, Error, "EncodingError U+BB58");
  assertThrows(() => {
    ms932Encoder.encode("\uBB59");
  }, Error, "EncodingError U+BB59");
  assertThrows(() => {
    ms932Encoder.encode("\uBB5A");
  }, Error, "EncodingError U+BB5A");
  assertThrows(() => {
    ms932Encoder.encode("\uBB5B");
  }, Error, "EncodingError U+BB5B");
  assertThrows(() => {
    ms932Encoder.encode("\uBB5C");
  }, Error, "EncodingError U+BB5C");
  assertThrows(() => {
    ms932Encoder.encode("\uBB5D");
  }, Error, "EncodingError U+BB5D");
  assertThrows(() => {
    ms932Encoder.encode("\uBB5E");
  }, Error, "EncodingError U+BB5E");
  assertThrows(() => {
    ms932Encoder.encode("\uBB5F");
  }, Error, "EncodingError U+BB5F");
  assertThrows(() => {
    ms932Encoder.encode("\uBB60");
  }, Error, "EncodingError U+BB60");
  assertThrows(() => {
    ms932Encoder.encode("\uBB61");
  }, Error, "EncodingError U+BB61");
  assertThrows(() => {
    ms932Encoder.encode("\uBB62");
  }, Error, "EncodingError U+BB62");
  assertThrows(() => {
    ms932Encoder.encode("\uBB63");
  }, Error, "EncodingError U+BB63");
  assertThrows(() => {
    ms932Encoder.encode("\uBB64");
  }, Error, "EncodingError U+BB64");
  assertThrows(() => {
    ms932Encoder.encode("\uBB65");
  }, Error, "EncodingError U+BB65");
  assertThrows(() => {
    ms932Encoder.encode("\uBB66");
  }, Error, "EncodingError U+BB66");
  assertThrows(() => {
    ms932Encoder.encode("\uBB67");
  }, Error, "EncodingError U+BB67");
  assertThrows(() => {
    ms932Encoder.encode("\uBB68");
  }, Error, "EncodingError U+BB68");
  assertThrows(() => {
    ms932Encoder.encode("\uBB69");
  }, Error, "EncodingError U+BB69");
  assertThrows(() => {
    ms932Encoder.encode("\uBB6A");
  }, Error, "EncodingError U+BB6A");
  assertThrows(() => {
    ms932Encoder.encode("\uBB6B");
  }, Error, "EncodingError U+BB6B");
  assertThrows(() => {
    ms932Encoder.encode("\uBB6C");
  }, Error, "EncodingError U+BB6C");
  assertThrows(() => {
    ms932Encoder.encode("\uBB6D");
  }, Error, "EncodingError U+BB6D");
  assertThrows(() => {
    ms932Encoder.encode("\uBB6E");
  }, Error, "EncodingError U+BB6E");
  assertThrows(() => {
    ms932Encoder.encode("\uBB6F");
  }, Error, "EncodingError U+BB6F");
  assertThrows(() => {
    ms932Encoder.encode("\uBB70");
  }, Error, "EncodingError U+BB70");
  assertThrows(() => {
    ms932Encoder.encode("\uBB71");
  }, Error, "EncodingError U+BB71");
  assertThrows(() => {
    ms932Encoder.encode("\uBB72");
  }, Error, "EncodingError U+BB72");
  assertThrows(() => {
    ms932Encoder.encode("\uBB73");
  }, Error, "EncodingError U+BB73");
  assertThrows(() => {
    ms932Encoder.encode("\uBB74");
  }, Error, "EncodingError U+BB74");
  assertThrows(() => {
    ms932Encoder.encode("\uBB75");
  }, Error, "EncodingError U+BB75");
  assertThrows(() => {
    ms932Encoder.encode("\uBB76");
  }, Error, "EncodingError U+BB76");
  assertThrows(() => {
    ms932Encoder.encode("\uBB77");
  }, Error, "EncodingError U+BB77");
  assertThrows(() => {
    ms932Encoder.encode("\uBB78");
  }, Error, "EncodingError U+BB78");
  assertThrows(() => {
    ms932Encoder.encode("\uBB79");
  }, Error, "EncodingError U+BB79");
  assertThrows(() => {
    ms932Encoder.encode("\uBB7A");
  }, Error, "EncodingError U+BB7A");
  assertThrows(() => {
    ms932Encoder.encode("\uBB7B");
  }, Error, "EncodingError U+BB7B");
  assertThrows(() => {
    ms932Encoder.encode("\uBB7C");
  }, Error, "EncodingError U+BB7C");
  assertThrows(() => {
    ms932Encoder.encode("\uBB7D");
  }, Error, "EncodingError U+BB7D");
  assertThrows(() => {
    ms932Encoder.encode("\uBB7E");
  }, Error, "EncodingError U+BB7E");
  assertThrows(() => {
    ms932Encoder.encode("\uBB7F");
  }, Error, "EncodingError U+BB7F");
  assertThrows(() => {
    ms932Encoder.encode("\uBB80");
  }, Error, "EncodingError U+BB80");
  assertThrows(() => {
    ms932Encoder.encode("\uBB81");
  }, Error, "EncodingError U+BB81");
  assertThrows(() => {
    ms932Encoder.encode("\uBB82");
  }, Error, "EncodingError U+BB82");
  assertThrows(() => {
    ms932Encoder.encode("\uBB83");
  }, Error, "EncodingError U+BB83");
  assertThrows(() => {
    ms932Encoder.encode("\uBB84");
  }, Error, "EncodingError U+BB84");
  assertThrows(() => {
    ms932Encoder.encode("\uBB85");
  }, Error, "EncodingError U+BB85");
  assertThrows(() => {
    ms932Encoder.encode("\uBB86");
  }, Error, "EncodingError U+BB86");
  assertThrows(() => {
    ms932Encoder.encode("\uBB87");
  }, Error, "EncodingError U+BB87");
  assertThrows(() => {
    ms932Encoder.encode("\uBB88");
  }, Error, "EncodingError U+BB88");
  assertThrows(() => {
    ms932Encoder.encode("\uBB89");
  }, Error, "EncodingError U+BB89");
  assertThrows(() => {
    ms932Encoder.encode("\uBB8A");
  }, Error, "EncodingError U+BB8A");
  assertThrows(() => {
    ms932Encoder.encode("\uBB8B");
  }, Error, "EncodingError U+BB8B");
  assertThrows(() => {
    ms932Encoder.encode("\uBB8C");
  }, Error, "EncodingError U+BB8C");
  assertThrows(() => {
    ms932Encoder.encode("\uBB8D");
  }, Error, "EncodingError U+BB8D");
  assertThrows(() => {
    ms932Encoder.encode("\uBB8E");
  }, Error, "EncodingError U+BB8E");
  assertThrows(() => {
    ms932Encoder.encode("\uBB8F");
  }, Error, "EncodingError U+BB8F");
  assertThrows(() => {
    ms932Encoder.encode("\uBB90");
  }, Error, "EncodingError U+BB90");
  assertThrows(() => {
    ms932Encoder.encode("\uBB91");
  }, Error, "EncodingError U+BB91");
  assertThrows(() => {
    ms932Encoder.encode("\uBB92");
  }, Error, "EncodingError U+BB92");
  assertThrows(() => {
    ms932Encoder.encode("\uBB93");
  }, Error, "EncodingError U+BB93");
  assertThrows(() => {
    ms932Encoder.encode("\uBB94");
  }, Error, "EncodingError U+BB94");
  assertThrows(() => {
    ms932Encoder.encode("\uBB95");
  }, Error, "EncodingError U+BB95");
  assertThrows(() => {
    ms932Encoder.encode("\uBB96");
  }, Error, "EncodingError U+BB96");
  assertThrows(() => {
    ms932Encoder.encode("\uBB97");
  }, Error, "EncodingError U+BB97");
  assertThrows(() => {
    ms932Encoder.encode("\uBB98");
  }, Error, "EncodingError U+BB98");
  assertThrows(() => {
    ms932Encoder.encode("\uBB99");
  }, Error, "EncodingError U+BB99");
  assertThrows(() => {
    ms932Encoder.encode("\uBB9A");
  }, Error, "EncodingError U+BB9A");
  assertThrows(() => {
    ms932Encoder.encode("\uBB9B");
  }, Error, "EncodingError U+BB9B");
  assertThrows(() => {
    ms932Encoder.encode("\uBB9C");
  }, Error, "EncodingError U+BB9C");
  assertThrows(() => {
    ms932Encoder.encode("\uBB9D");
  }, Error, "EncodingError U+BB9D");
  assertThrows(() => {
    ms932Encoder.encode("\uBB9E");
  }, Error, "EncodingError U+BB9E");
  assertThrows(() => {
    ms932Encoder.encode("\uBB9F");
  }, Error, "EncodingError U+BB9F");
  assertThrows(() => {
    ms932Encoder.encode("\uBBA0");
  }, Error, "EncodingError U+BBA0");
  assertThrows(() => {
    ms932Encoder.encode("\uBBA1");
  }, Error, "EncodingError U+BBA1");
  assertThrows(() => {
    ms932Encoder.encode("\uBBA2");
  }, Error, "EncodingError U+BBA2");
  assertThrows(() => {
    ms932Encoder.encode("\uBBA3");
  }, Error, "EncodingError U+BBA3");
  assertThrows(() => {
    ms932Encoder.encode("\uBBA4");
  }, Error, "EncodingError U+BBA4");
  assertThrows(() => {
    ms932Encoder.encode("\uBBA5");
  }, Error, "EncodingError U+BBA5");
  assertThrows(() => {
    ms932Encoder.encode("\uBBA6");
  }, Error, "EncodingError U+BBA6");
  assertThrows(() => {
    ms932Encoder.encode("\uBBA7");
  }, Error, "EncodingError U+BBA7");
  assertThrows(() => {
    ms932Encoder.encode("\uBBA8");
  }, Error, "EncodingError U+BBA8");
  assertThrows(() => {
    ms932Encoder.encode("\uBBA9");
  }, Error, "EncodingError U+BBA9");
  assertThrows(() => {
    ms932Encoder.encode("\uBBAA");
  }, Error, "EncodingError U+BBAA");
  assertThrows(() => {
    ms932Encoder.encode("\uBBAB");
  }, Error, "EncodingError U+BBAB");
  assertThrows(() => {
    ms932Encoder.encode("\uBBAC");
  }, Error, "EncodingError U+BBAC");
  assertThrows(() => {
    ms932Encoder.encode("\uBBAD");
  }, Error, "EncodingError U+BBAD");
  assertThrows(() => {
    ms932Encoder.encode("\uBBAE");
  }, Error, "EncodingError U+BBAE");
  assertThrows(() => {
    ms932Encoder.encode("\uBBAF");
  }, Error, "EncodingError U+BBAF");
  assertThrows(() => {
    ms932Encoder.encode("\uBBB0");
  }, Error, "EncodingError U+BBB0");
  assertThrows(() => {
    ms932Encoder.encode("\uBBB1");
  }, Error, "EncodingError U+BBB1");
  assertThrows(() => {
    ms932Encoder.encode("\uBBB2");
  }, Error, "EncodingError U+BBB2");
  assertThrows(() => {
    ms932Encoder.encode("\uBBB3");
  }, Error, "EncodingError U+BBB3");
  assertThrows(() => {
    ms932Encoder.encode("\uBBB4");
  }, Error, "EncodingError U+BBB4");
  assertThrows(() => {
    ms932Encoder.encode("\uBBB5");
  }, Error, "EncodingError U+BBB5");
  assertThrows(() => {
    ms932Encoder.encode("\uBBB6");
  }, Error, "EncodingError U+BBB6");
  assertThrows(() => {
    ms932Encoder.encode("\uBBB7");
  }, Error, "EncodingError U+BBB7");
  assertThrows(() => {
    ms932Encoder.encode("\uBBB8");
  }, Error, "EncodingError U+BBB8");
  assertThrows(() => {
    ms932Encoder.encode("\uBBB9");
  }, Error, "EncodingError U+BBB9");
  assertThrows(() => {
    ms932Encoder.encode("\uBBBA");
  }, Error, "EncodingError U+BBBA");
  assertThrows(() => {
    ms932Encoder.encode("\uBBBB");
  }, Error, "EncodingError U+BBBB");
  assertThrows(() => {
    ms932Encoder.encode("\uBBBC");
  }, Error, "EncodingError U+BBBC");
  assertThrows(() => {
    ms932Encoder.encode("\uBBBD");
  }, Error, "EncodingError U+BBBD");
  assertThrows(() => {
    ms932Encoder.encode("\uBBBE");
  }, Error, "EncodingError U+BBBE");
  assertThrows(() => {
    ms932Encoder.encode("\uBBBF");
  }, Error, "EncodingError U+BBBF");
  assertThrows(() => {
    ms932Encoder.encode("\uBBC0");
  }, Error, "EncodingError U+BBC0");
  assertThrows(() => {
    ms932Encoder.encode("\uBBC1");
  }, Error, "EncodingError U+BBC1");
  assertThrows(() => {
    ms932Encoder.encode("\uBBC2");
  }, Error, "EncodingError U+BBC2");
  assertThrows(() => {
    ms932Encoder.encode("\uBBC3");
  }, Error, "EncodingError U+BBC3");
  assertThrows(() => {
    ms932Encoder.encode("\uBBC4");
  }, Error, "EncodingError U+BBC4");
  assertThrows(() => {
    ms932Encoder.encode("\uBBC5");
  }, Error, "EncodingError U+BBC5");
  assertThrows(() => {
    ms932Encoder.encode("\uBBC6");
  }, Error, "EncodingError U+BBC6");
  assertThrows(() => {
    ms932Encoder.encode("\uBBC7");
  }, Error, "EncodingError U+BBC7");
  assertThrows(() => {
    ms932Encoder.encode("\uBBC8");
  }, Error, "EncodingError U+BBC8");
  assertThrows(() => {
    ms932Encoder.encode("\uBBC9");
  }, Error, "EncodingError U+BBC9");
  assertThrows(() => {
    ms932Encoder.encode("\uBBCA");
  }, Error, "EncodingError U+BBCA");
  assertThrows(() => {
    ms932Encoder.encode("\uBBCB");
  }, Error, "EncodingError U+BBCB");
  assertThrows(() => {
    ms932Encoder.encode("\uBBCC");
  }, Error, "EncodingError U+BBCC");
  assertThrows(() => {
    ms932Encoder.encode("\uBBCD");
  }, Error, "EncodingError U+BBCD");
  assertThrows(() => {
    ms932Encoder.encode("\uBBCE");
  }, Error, "EncodingError U+BBCE");
  assertThrows(() => {
    ms932Encoder.encode("\uBBCF");
  }, Error, "EncodingError U+BBCF");
  assertThrows(() => {
    ms932Encoder.encode("\uBBD0");
  }, Error, "EncodingError U+BBD0");
  assertThrows(() => {
    ms932Encoder.encode("\uBBD1");
  }, Error, "EncodingError U+BBD1");
  assertThrows(() => {
    ms932Encoder.encode("\uBBD2");
  }, Error, "EncodingError U+BBD2");
  assertThrows(() => {
    ms932Encoder.encode("\uBBD3");
  }, Error, "EncodingError U+BBD3");
  assertThrows(() => {
    ms932Encoder.encode("\uBBD4");
  }, Error, "EncodingError U+BBD4");
  assertThrows(() => {
    ms932Encoder.encode("\uBBD5");
  }, Error, "EncodingError U+BBD5");
  assertThrows(() => {
    ms932Encoder.encode("\uBBD6");
  }, Error, "EncodingError U+BBD6");
  assertThrows(() => {
    ms932Encoder.encode("\uBBD7");
  }, Error, "EncodingError U+BBD7");
  assertThrows(() => {
    ms932Encoder.encode("\uBBD8");
  }, Error, "EncodingError U+BBD8");
  assertThrows(() => {
    ms932Encoder.encode("\uBBD9");
  }, Error, "EncodingError U+BBD9");
  assertThrows(() => {
    ms932Encoder.encode("\uBBDA");
  }, Error, "EncodingError U+BBDA");
  assertThrows(() => {
    ms932Encoder.encode("\uBBDB");
  }, Error, "EncodingError U+BBDB");
  assertThrows(() => {
    ms932Encoder.encode("\uBBDC");
  }, Error, "EncodingError U+BBDC");
  assertThrows(() => {
    ms932Encoder.encode("\uBBDD");
  }, Error, "EncodingError U+BBDD");
  assertThrows(() => {
    ms932Encoder.encode("\uBBDE");
  }, Error, "EncodingError U+BBDE");
  assertThrows(() => {
    ms932Encoder.encode("\uBBDF");
  }, Error, "EncodingError U+BBDF");
  assertThrows(() => {
    ms932Encoder.encode("\uBBE0");
  }, Error, "EncodingError U+BBE0");
  assertThrows(() => {
    ms932Encoder.encode("\uBBE1");
  }, Error, "EncodingError U+BBE1");
  assertThrows(() => {
    ms932Encoder.encode("\uBBE2");
  }, Error, "EncodingError U+BBE2");
  assertThrows(() => {
    ms932Encoder.encode("\uBBE3");
  }, Error, "EncodingError U+BBE3");
  assertThrows(() => {
    ms932Encoder.encode("\uBBE4");
  }, Error, "EncodingError U+BBE4");
  assertThrows(() => {
    ms932Encoder.encode("\uBBE5");
  }, Error, "EncodingError U+BBE5");
  assertThrows(() => {
    ms932Encoder.encode("\uBBE6");
  }, Error, "EncodingError U+BBE6");
  assertThrows(() => {
    ms932Encoder.encode("\uBBE7");
  }, Error, "EncodingError U+BBE7");
  assertThrows(() => {
    ms932Encoder.encode("\uBBE8");
  }, Error, "EncodingError U+BBE8");
  assertThrows(() => {
    ms932Encoder.encode("\uBBE9");
  }, Error, "EncodingError U+BBE9");
  assertThrows(() => {
    ms932Encoder.encode("\uBBEA");
  }, Error, "EncodingError U+BBEA");
  assertThrows(() => {
    ms932Encoder.encode("\uBBEB");
  }, Error, "EncodingError U+BBEB");
  assertThrows(() => {
    ms932Encoder.encode("\uBBEC");
  }, Error, "EncodingError U+BBEC");
  assertThrows(() => {
    ms932Encoder.encode("\uBBED");
  }, Error, "EncodingError U+BBED");
  assertThrows(() => {
    ms932Encoder.encode("\uBBEE");
  }, Error, "EncodingError U+BBEE");
  assertThrows(() => {
    ms932Encoder.encode("\uBBEF");
  }, Error, "EncodingError U+BBEF");
  assertThrows(() => {
    ms932Encoder.encode("\uBBF0");
  }, Error, "EncodingError U+BBF0");
  assertThrows(() => {
    ms932Encoder.encode("\uBBF1");
  }, Error, "EncodingError U+BBF1");
  assertThrows(() => {
    ms932Encoder.encode("\uBBF2");
  }, Error, "EncodingError U+BBF2");
  assertThrows(() => {
    ms932Encoder.encode("\uBBF3");
  }, Error, "EncodingError U+BBF3");
  assertThrows(() => {
    ms932Encoder.encode("\uBBF4");
  }, Error, "EncodingError U+BBF4");
  assertThrows(() => {
    ms932Encoder.encode("\uBBF5");
  }, Error, "EncodingError U+BBF5");
  assertThrows(() => {
    ms932Encoder.encode("\uBBF6");
  }, Error, "EncodingError U+BBF6");
  assertThrows(() => {
    ms932Encoder.encode("\uBBF7");
  }, Error, "EncodingError U+BBF7");
  assertThrows(() => {
    ms932Encoder.encode("\uBBF8");
  }, Error, "EncodingError U+BBF8");
  assertThrows(() => {
    ms932Encoder.encode("\uBBF9");
  }, Error, "EncodingError U+BBF9");
  assertThrows(() => {
    ms932Encoder.encode("\uBBFA");
  }, Error, "EncodingError U+BBFA");
  assertThrows(() => {
    ms932Encoder.encode("\uBBFB");
  }, Error, "EncodingError U+BBFB");
  assertThrows(() => {
    ms932Encoder.encode("\uBBFC");
  }, Error, "EncodingError U+BBFC");
  assertThrows(() => {
    ms932Encoder.encode("\uBBFD");
  }, Error, "EncodingError U+BBFD");
  assertThrows(() => {
    ms932Encoder.encode("\uBBFE");
  }, Error, "EncodingError U+BBFE");
  assertThrows(() => {
    ms932Encoder.encode("\uBBFF");
  }, Error, "EncodingError U+BBFF");
  assertThrows(() => {
    ms932Encoder.encode("\uBC00");
  }, Error, "EncodingError U+BC00");
  assertThrows(() => {
    ms932Encoder.encode("\uBC01");
  }, Error, "EncodingError U+BC01");
  assertThrows(() => {
    ms932Encoder.encode("\uBC02");
  }, Error, "EncodingError U+BC02");
  assertThrows(() => {
    ms932Encoder.encode("\uBC03");
  }, Error, "EncodingError U+BC03");
  assertThrows(() => {
    ms932Encoder.encode("\uBC04");
  }, Error, "EncodingError U+BC04");
  assertThrows(() => {
    ms932Encoder.encode("\uBC05");
  }, Error, "EncodingError U+BC05");
  assertThrows(() => {
    ms932Encoder.encode("\uBC06");
  }, Error, "EncodingError U+BC06");
  assertThrows(() => {
    ms932Encoder.encode("\uBC07");
  }, Error, "EncodingError U+BC07");
  assertThrows(() => {
    ms932Encoder.encode("\uBC08");
  }, Error, "EncodingError U+BC08");
  assertThrows(() => {
    ms932Encoder.encode("\uBC09");
  }, Error, "EncodingError U+BC09");
  assertThrows(() => {
    ms932Encoder.encode("\uBC0A");
  }, Error, "EncodingError U+BC0A");
  assertThrows(() => {
    ms932Encoder.encode("\uBC0B");
  }, Error, "EncodingError U+BC0B");
  assertThrows(() => {
    ms932Encoder.encode("\uBC0C");
  }, Error, "EncodingError U+BC0C");
  assertThrows(() => {
    ms932Encoder.encode("\uBC0D");
  }, Error, "EncodingError U+BC0D");
  assertThrows(() => {
    ms932Encoder.encode("\uBC0E");
  }, Error, "EncodingError U+BC0E");
  assertThrows(() => {
    ms932Encoder.encode("\uBC0F");
  }, Error, "EncodingError U+BC0F");
  assertThrows(() => {
    ms932Encoder.encode("\uBC10");
  }, Error, "EncodingError U+BC10");
  assertThrows(() => {
    ms932Encoder.encode("\uBC11");
  }, Error, "EncodingError U+BC11");
  assertThrows(() => {
    ms932Encoder.encode("\uBC12");
  }, Error, "EncodingError U+BC12");
  assertThrows(() => {
    ms932Encoder.encode("\uBC13");
  }, Error, "EncodingError U+BC13");
  assertThrows(() => {
    ms932Encoder.encode("\uBC14");
  }, Error, "EncodingError U+BC14");
  assertThrows(() => {
    ms932Encoder.encode("\uBC15");
  }, Error, "EncodingError U+BC15");
  assertThrows(() => {
    ms932Encoder.encode("\uBC16");
  }, Error, "EncodingError U+BC16");
  assertThrows(() => {
    ms932Encoder.encode("\uBC17");
  }, Error, "EncodingError U+BC17");
  assertThrows(() => {
    ms932Encoder.encode("\uBC18");
  }, Error, "EncodingError U+BC18");
  assertThrows(() => {
    ms932Encoder.encode("\uBC19");
  }, Error, "EncodingError U+BC19");
  assertThrows(() => {
    ms932Encoder.encode("\uBC1A");
  }, Error, "EncodingError U+BC1A");
  assertThrows(() => {
    ms932Encoder.encode("\uBC1B");
  }, Error, "EncodingError U+BC1B");
  assertThrows(() => {
    ms932Encoder.encode("\uBC1C");
  }, Error, "EncodingError U+BC1C");
  assertThrows(() => {
    ms932Encoder.encode("\uBC1D");
  }, Error, "EncodingError U+BC1D");
  assertThrows(() => {
    ms932Encoder.encode("\uBC1E");
  }, Error, "EncodingError U+BC1E");
  assertThrows(() => {
    ms932Encoder.encode("\uBC1F");
  }, Error, "EncodingError U+BC1F");
  assertThrows(() => {
    ms932Encoder.encode("\uBC20");
  }, Error, "EncodingError U+BC20");
  assertThrows(() => {
    ms932Encoder.encode("\uBC21");
  }, Error, "EncodingError U+BC21");
  assertThrows(() => {
    ms932Encoder.encode("\uBC22");
  }, Error, "EncodingError U+BC22");
  assertThrows(() => {
    ms932Encoder.encode("\uBC23");
  }, Error, "EncodingError U+BC23");
  assertThrows(() => {
    ms932Encoder.encode("\uBC24");
  }, Error, "EncodingError U+BC24");
  assertThrows(() => {
    ms932Encoder.encode("\uBC25");
  }, Error, "EncodingError U+BC25");
  assertThrows(() => {
    ms932Encoder.encode("\uBC26");
  }, Error, "EncodingError U+BC26");
  assertThrows(() => {
    ms932Encoder.encode("\uBC27");
  }, Error, "EncodingError U+BC27");
  assertThrows(() => {
    ms932Encoder.encode("\uBC28");
  }, Error, "EncodingError U+BC28");
  assertThrows(() => {
    ms932Encoder.encode("\uBC29");
  }, Error, "EncodingError U+BC29");
  assertThrows(() => {
    ms932Encoder.encode("\uBC2A");
  }, Error, "EncodingError U+BC2A");
  assertThrows(() => {
    ms932Encoder.encode("\uBC2B");
  }, Error, "EncodingError U+BC2B");
  assertThrows(() => {
    ms932Encoder.encode("\uBC2C");
  }, Error, "EncodingError U+BC2C");
  assertThrows(() => {
    ms932Encoder.encode("\uBC2D");
  }, Error, "EncodingError U+BC2D");
  assertThrows(() => {
    ms932Encoder.encode("\uBC2E");
  }, Error, "EncodingError U+BC2E");
  assertThrows(() => {
    ms932Encoder.encode("\uBC2F");
  }, Error, "EncodingError U+BC2F");
  assertThrows(() => {
    ms932Encoder.encode("\uBC30");
  }, Error, "EncodingError U+BC30");
  assertThrows(() => {
    ms932Encoder.encode("\uBC31");
  }, Error, "EncodingError U+BC31");
  assertThrows(() => {
    ms932Encoder.encode("\uBC32");
  }, Error, "EncodingError U+BC32");
  assertThrows(() => {
    ms932Encoder.encode("\uBC33");
  }, Error, "EncodingError U+BC33");
  assertThrows(() => {
    ms932Encoder.encode("\uBC34");
  }, Error, "EncodingError U+BC34");
  assertThrows(() => {
    ms932Encoder.encode("\uBC35");
  }, Error, "EncodingError U+BC35");
  assertThrows(() => {
    ms932Encoder.encode("\uBC36");
  }, Error, "EncodingError U+BC36");
  assertThrows(() => {
    ms932Encoder.encode("\uBC37");
  }, Error, "EncodingError U+BC37");
  assertThrows(() => {
    ms932Encoder.encode("\uBC38");
  }, Error, "EncodingError U+BC38");
  assertThrows(() => {
    ms932Encoder.encode("\uBC39");
  }, Error, "EncodingError U+BC39");
  assertThrows(() => {
    ms932Encoder.encode("\uBC3A");
  }, Error, "EncodingError U+BC3A");
  assertThrows(() => {
    ms932Encoder.encode("\uBC3B");
  }, Error, "EncodingError U+BC3B");
  assertThrows(() => {
    ms932Encoder.encode("\uBC3C");
  }, Error, "EncodingError U+BC3C");
  assertThrows(() => {
    ms932Encoder.encode("\uBC3D");
  }, Error, "EncodingError U+BC3D");
  assertThrows(() => {
    ms932Encoder.encode("\uBC3E");
  }, Error, "EncodingError U+BC3E");
  assertThrows(() => {
    ms932Encoder.encode("\uBC3F");
  }, Error, "EncodingError U+BC3F");
  assertThrows(() => {
    ms932Encoder.encode("\uBC40");
  }, Error, "EncodingError U+BC40");
  assertThrows(() => {
    ms932Encoder.encode("\uBC41");
  }, Error, "EncodingError U+BC41");
  assertThrows(() => {
    ms932Encoder.encode("\uBC42");
  }, Error, "EncodingError U+BC42");
  assertThrows(() => {
    ms932Encoder.encode("\uBC43");
  }, Error, "EncodingError U+BC43");
  assertThrows(() => {
    ms932Encoder.encode("\uBC44");
  }, Error, "EncodingError U+BC44");
  assertThrows(() => {
    ms932Encoder.encode("\uBC45");
  }, Error, "EncodingError U+BC45");
  assertThrows(() => {
    ms932Encoder.encode("\uBC46");
  }, Error, "EncodingError U+BC46");
  assertThrows(() => {
    ms932Encoder.encode("\uBC47");
  }, Error, "EncodingError U+BC47");
  assertThrows(() => {
    ms932Encoder.encode("\uBC48");
  }, Error, "EncodingError U+BC48");
  assertThrows(() => {
    ms932Encoder.encode("\uBC49");
  }, Error, "EncodingError U+BC49");
  assertThrows(() => {
    ms932Encoder.encode("\uBC4A");
  }, Error, "EncodingError U+BC4A");
  assertThrows(() => {
    ms932Encoder.encode("\uBC4B");
  }, Error, "EncodingError U+BC4B");
  assertThrows(() => {
    ms932Encoder.encode("\uBC4C");
  }, Error, "EncodingError U+BC4C");
  assertThrows(() => {
    ms932Encoder.encode("\uBC4D");
  }, Error, "EncodingError U+BC4D");
  assertThrows(() => {
    ms932Encoder.encode("\uBC4E");
  }, Error, "EncodingError U+BC4E");
  assertThrows(() => {
    ms932Encoder.encode("\uBC4F");
  }, Error, "EncodingError U+BC4F");
  assertThrows(() => {
    ms932Encoder.encode("\uBC50");
  }, Error, "EncodingError U+BC50");
  assertThrows(() => {
    ms932Encoder.encode("\uBC51");
  }, Error, "EncodingError U+BC51");
  assertThrows(() => {
    ms932Encoder.encode("\uBC52");
  }, Error, "EncodingError U+BC52");
  assertThrows(() => {
    ms932Encoder.encode("\uBC53");
  }, Error, "EncodingError U+BC53");
  assertThrows(() => {
    ms932Encoder.encode("\uBC54");
  }, Error, "EncodingError U+BC54");
  assertThrows(() => {
    ms932Encoder.encode("\uBC55");
  }, Error, "EncodingError U+BC55");
  assertThrows(() => {
    ms932Encoder.encode("\uBC56");
  }, Error, "EncodingError U+BC56");
  assertThrows(() => {
    ms932Encoder.encode("\uBC57");
  }, Error, "EncodingError U+BC57");
  assertThrows(() => {
    ms932Encoder.encode("\uBC58");
  }, Error, "EncodingError U+BC58");
  assertThrows(() => {
    ms932Encoder.encode("\uBC59");
  }, Error, "EncodingError U+BC59");
  assertThrows(() => {
    ms932Encoder.encode("\uBC5A");
  }, Error, "EncodingError U+BC5A");
  assertThrows(() => {
    ms932Encoder.encode("\uBC5B");
  }, Error, "EncodingError U+BC5B");
  assertThrows(() => {
    ms932Encoder.encode("\uBC5C");
  }, Error, "EncodingError U+BC5C");
  assertThrows(() => {
    ms932Encoder.encode("\uBC5D");
  }, Error, "EncodingError U+BC5D");
  assertThrows(() => {
    ms932Encoder.encode("\uBC5E");
  }, Error, "EncodingError U+BC5E");
  assertThrows(() => {
    ms932Encoder.encode("\uBC5F");
  }, Error, "EncodingError U+BC5F");
  assertThrows(() => {
    ms932Encoder.encode("\uBC60");
  }, Error, "EncodingError U+BC60");
  assertThrows(() => {
    ms932Encoder.encode("\uBC61");
  }, Error, "EncodingError U+BC61");
  assertThrows(() => {
    ms932Encoder.encode("\uBC62");
  }, Error, "EncodingError U+BC62");
  assertThrows(() => {
    ms932Encoder.encode("\uBC63");
  }, Error, "EncodingError U+BC63");
  assertThrows(() => {
    ms932Encoder.encode("\uBC64");
  }, Error, "EncodingError U+BC64");
  assertThrows(() => {
    ms932Encoder.encode("\uBC65");
  }, Error, "EncodingError U+BC65");
  assertThrows(() => {
    ms932Encoder.encode("\uBC66");
  }, Error, "EncodingError U+BC66");
  assertThrows(() => {
    ms932Encoder.encode("\uBC67");
  }, Error, "EncodingError U+BC67");
  assertThrows(() => {
    ms932Encoder.encode("\uBC68");
  }, Error, "EncodingError U+BC68");
  assertThrows(() => {
    ms932Encoder.encode("\uBC69");
  }, Error, "EncodingError U+BC69");
  assertThrows(() => {
    ms932Encoder.encode("\uBC6A");
  }, Error, "EncodingError U+BC6A");
  assertThrows(() => {
    ms932Encoder.encode("\uBC6B");
  }, Error, "EncodingError U+BC6B");
  assertThrows(() => {
    ms932Encoder.encode("\uBC6C");
  }, Error, "EncodingError U+BC6C");
  assertThrows(() => {
    ms932Encoder.encode("\uBC6D");
  }, Error, "EncodingError U+BC6D");
  assertThrows(() => {
    ms932Encoder.encode("\uBC6E");
  }, Error, "EncodingError U+BC6E");
  assertThrows(() => {
    ms932Encoder.encode("\uBC6F");
  }, Error, "EncodingError U+BC6F");
  assertThrows(() => {
    ms932Encoder.encode("\uBC70");
  }, Error, "EncodingError U+BC70");
  assertThrows(() => {
    ms932Encoder.encode("\uBC71");
  }, Error, "EncodingError U+BC71");
  assertThrows(() => {
    ms932Encoder.encode("\uBC72");
  }, Error, "EncodingError U+BC72");
  assertThrows(() => {
    ms932Encoder.encode("\uBC73");
  }, Error, "EncodingError U+BC73");
  assertThrows(() => {
    ms932Encoder.encode("\uBC74");
  }, Error, "EncodingError U+BC74");
  assertThrows(() => {
    ms932Encoder.encode("\uBC75");
  }, Error, "EncodingError U+BC75");
  assertThrows(() => {
    ms932Encoder.encode("\uBC76");
  }, Error, "EncodingError U+BC76");
  assertThrows(() => {
    ms932Encoder.encode("\uBC77");
  }, Error, "EncodingError U+BC77");
  assertThrows(() => {
    ms932Encoder.encode("\uBC78");
  }, Error, "EncodingError U+BC78");
  assertThrows(() => {
    ms932Encoder.encode("\uBC79");
  }, Error, "EncodingError U+BC79");
  assertThrows(() => {
    ms932Encoder.encode("\uBC7A");
  }, Error, "EncodingError U+BC7A");
  assertThrows(() => {
    ms932Encoder.encode("\uBC7B");
  }, Error, "EncodingError U+BC7B");
  assertThrows(() => {
    ms932Encoder.encode("\uBC7C");
  }, Error, "EncodingError U+BC7C");
  assertThrows(() => {
    ms932Encoder.encode("\uBC7D");
  }, Error, "EncodingError U+BC7D");
  assertThrows(() => {
    ms932Encoder.encode("\uBC7E");
  }, Error, "EncodingError U+BC7E");
  assertThrows(() => {
    ms932Encoder.encode("\uBC7F");
  }, Error, "EncodingError U+BC7F");
  assertThrows(() => {
    ms932Encoder.encode("\uBC80");
  }, Error, "EncodingError U+BC80");
  assertThrows(() => {
    ms932Encoder.encode("\uBC81");
  }, Error, "EncodingError U+BC81");
  assertThrows(() => {
    ms932Encoder.encode("\uBC82");
  }, Error, "EncodingError U+BC82");
  assertThrows(() => {
    ms932Encoder.encode("\uBC83");
  }, Error, "EncodingError U+BC83");
  assertThrows(() => {
    ms932Encoder.encode("\uBC84");
  }, Error, "EncodingError U+BC84");
  assertThrows(() => {
    ms932Encoder.encode("\uBC85");
  }, Error, "EncodingError U+BC85");
  assertThrows(() => {
    ms932Encoder.encode("\uBC86");
  }, Error, "EncodingError U+BC86");
  assertThrows(() => {
    ms932Encoder.encode("\uBC87");
  }, Error, "EncodingError U+BC87");
  assertThrows(() => {
    ms932Encoder.encode("\uBC88");
  }, Error, "EncodingError U+BC88");
  assertThrows(() => {
    ms932Encoder.encode("\uBC89");
  }, Error, "EncodingError U+BC89");
  assertThrows(() => {
    ms932Encoder.encode("\uBC8A");
  }, Error, "EncodingError U+BC8A");
  assertThrows(() => {
    ms932Encoder.encode("\uBC8B");
  }, Error, "EncodingError U+BC8B");
  assertThrows(() => {
    ms932Encoder.encode("\uBC8C");
  }, Error, "EncodingError U+BC8C");
  assertThrows(() => {
    ms932Encoder.encode("\uBC8D");
  }, Error, "EncodingError U+BC8D");
  assertThrows(() => {
    ms932Encoder.encode("\uBC8E");
  }, Error, "EncodingError U+BC8E");
  assertThrows(() => {
    ms932Encoder.encode("\uBC8F");
  }, Error, "EncodingError U+BC8F");
  assertThrows(() => {
    ms932Encoder.encode("\uBC90");
  }, Error, "EncodingError U+BC90");
  assertThrows(() => {
    ms932Encoder.encode("\uBC91");
  }, Error, "EncodingError U+BC91");
  assertThrows(() => {
    ms932Encoder.encode("\uBC92");
  }, Error, "EncodingError U+BC92");
  assertThrows(() => {
    ms932Encoder.encode("\uBC93");
  }, Error, "EncodingError U+BC93");
  assertThrows(() => {
    ms932Encoder.encode("\uBC94");
  }, Error, "EncodingError U+BC94");
  assertThrows(() => {
    ms932Encoder.encode("\uBC95");
  }, Error, "EncodingError U+BC95");
  assertThrows(() => {
    ms932Encoder.encode("\uBC96");
  }, Error, "EncodingError U+BC96");
  assertThrows(() => {
    ms932Encoder.encode("\uBC97");
  }, Error, "EncodingError U+BC97");
  assertThrows(() => {
    ms932Encoder.encode("\uBC98");
  }, Error, "EncodingError U+BC98");
  assertThrows(() => {
    ms932Encoder.encode("\uBC99");
  }, Error, "EncodingError U+BC99");
  assertThrows(() => {
    ms932Encoder.encode("\uBC9A");
  }, Error, "EncodingError U+BC9A");
  assertThrows(() => {
    ms932Encoder.encode("\uBC9B");
  }, Error, "EncodingError U+BC9B");
  assertThrows(() => {
    ms932Encoder.encode("\uBC9C");
  }, Error, "EncodingError U+BC9C");
  assertThrows(() => {
    ms932Encoder.encode("\uBC9D");
  }, Error, "EncodingError U+BC9D");
  assertThrows(() => {
    ms932Encoder.encode("\uBC9E");
  }, Error, "EncodingError U+BC9E");
  assertThrows(() => {
    ms932Encoder.encode("\uBC9F");
  }, Error, "EncodingError U+BC9F");
  assertThrows(() => {
    ms932Encoder.encode("\uBCA0");
  }, Error, "EncodingError U+BCA0");
  assertThrows(() => {
    ms932Encoder.encode("\uBCA1");
  }, Error, "EncodingError U+BCA1");
  assertThrows(() => {
    ms932Encoder.encode("\uBCA2");
  }, Error, "EncodingError U+BCA2");
  assertThrows(() => {
    ms932Encoder.encode("\uBCA3");
  }, Error, "EncodingError U+BCA3");
  assertThrows(() => {
    ms932Encoder.encode("\uBCA4");
  }, Error, "EncodingError U+BCA4");
  assertThrows(() => {
    ms932Encoder.encode("\uBCA5");
  }, Error, "EncodingError U+BCA5");
  assertThrows(() => {
    ms932Encoder.encode("\uBCA6");
  }, Error, "EncodingError U+BCA6");
  assertThrows(() => {
    ms932Encoder.encode("\uBCA7");
  }, Error, "EncodingError U+BCA7");
  assertThrows(() => {
    ms932Encoder.encode("\uBCA8");
  }, Error, "EncodingError U+BCA8");
  assertThrows(() => {
    ms932Encoder.encode("\uBCA9");
  }, Error, "EncodingError U+BCA9");
  assertThrows(() => {
    ms932Encoder.encode("\uBCAA");
  }, Error, "EncodingError U+BCAA");
  assertThrows(() => {
    ms932Encoder.encode("\uBCAB");
  }, Error, "EncodingError U+BCAB");
  assertThrows(() => {
    ms932Encoder.encode("\uBCAC");
  }, Error, "EncodingError U+BCAC");
  assertThrows(() => {
    ms932Encoder.encode("\uBCAD");
  }, Error, "EncodingError U+BCAD");
  assertThrows(() => {
    ms932Encoder.encode("\uBCAE");
  }, Error, "EncodingError U+BCAE");
  assertThrows(() => {
    ms932Encoder.encode("\uBCAF");
  }, Error, "EncodingError U+BCAF");
  assertThrows(() => {
    ms932Encoder.encode("\uBCB0");
  }, Error, "EncodingError U+BCB0");
  assertThrows(() => {
    ms932Encoder.encode("\uBCB1");
  }, Error, "EncodingError U+BCB1");
  assertThrows(() => {
    ms932Encoder.encode("\uBCB2");
  }, Error, "EncodingError U+BCB2");
  assertThrows(() => {
    ms932Encoder.encode("\uBCB3");
  }, Error, "EncodingError U+BCB3");
  assertThrows(() => {
    ms932Encoder.encode("\uBCB4");
  }, Error, "EncodingError U+BCB4");
  assertThrows(() => {
    ms932Encoder.encode("\uBCB5");
  }, Error, "EncodingError U+BCB5");
  assertThrows(() => {
    ms932Encoder.encode("\uBCB6");
  }, Error, "EncodingError U+BCB6");
  assertThrows(() => {
    ms932Encoder.encode("\uBCB7");
  }, Error, "EncodingError U+BCB7");
  assertThrows(() => {
    ms932Encoder.encode("\uBCB8");
  }, Error, "EncodingError U+BCB8");
  assertThrows(() => {
    ms932Encoder.encode("\uBCB9");
  }, Error, "EncodingError U+BCB9");
  assertThrows(() => {
    ms932Encoder.encode("\uBCBA");
  }, Error, "EncodingError U+BCBA");
  assertThrows(() => {
    ms932Encoder.encode("\uBCBB");
  }, Error, "EncodingError U+BCBB");
  assertThrows(() => {
    ms932Encoder.encode("\uBCBC");
  }, Error, "EncodingError U+BCBC");
  assertThrows(() => {
    ms932Encoder.encode("\uBCBD");
  }, Error, "EncodingError U+BCBD");
  assertThrows(() => {
    ms932Encoder.encode("\uBCBE");
  }, Error, "EncodingError U+BCBE");
  assertThrows(() => {
    ms932Encoder.encode("\uBCBF");
  }, Error, "EncodingError U+BCBF");
  assertThrows(() => {
    ms932Encoder.encode("\uBCC0");
  }, Error, "EncodingError U+BCC0");
  assertThrows(() => {
    ms932Encoder.encode("\uBCC1");
  }, Error, "EncodingError U+BCC1");
  assertThrows(() => {
    ms932Encoder.encode("\uBCC2");
  }, Error, "EncodingError U+BCC2");
  assertThrows(() => {
    ms932Encoder.encode("\uBCC3");
  }, Error, "EncodingError U+BCC3");
  assertThrows(() => {
    ms932Encoder.encode("\uBCC4");
  }, Error, "EncodingError U+BCC4");
  assertThrows(() => {
    ms932Encoder.encode("\uBCC5");
  }, Error, "EncodingError U+BCC5");
  assertThrows(() => {
    ms932Encoder.encode("\uBCC6");
  }, Error, "EncodingError U+BCC6");
  assertThrows(() => {
    ms932Encoder.encode("\uBCC7");
  }, Error, "EncodingError U+BCC7");
  assertThrows(() => {
    ms932Encoder.encode("\uBCC8");
  }, Error, "EncodingError U+BCC8");
  assertThrows(() => {
    ms932Encoder.encode("\uBCC9");
  }, Error, "EncodingError U+BCC9");
  assertThrows(() => {
    ms932Encoder.encode("\uBCCA");
  }, Error, "EncodingError U+BCCA");
  assertThrows(() => {
    ms932Encoder.encode("\uBCCB");
  }, Error, "EncodingError U+BCCB");
  assertThrows(() => {
    ms932Encoder.encode("\uBCCC");
  }, Error, "EncodingError U+BCCC");
  assertThrows(() => {
    ms932Encoder.encode("\uBCCD");
  }, Error, "EncodingError U+BCCD");
  assertThrows(() => {
    ms932Encoder.encode("\uBCCE");
  }, Error, "EncodingError U+BCCE");
  assertThrows(() => {
    ms932Encoder.encode("\uBCCF");
  }, Error, "EncodingError U+BCCF");
  assertThrows(() => {
    ms932Encoder.encode("\uBCD0");
  }, Error, "EncodingError U+BCD0");
  assertThrows(() => {
    ms932Encoder.encode("\uBCD1");
  }, Error, "EncodingError U+BCD1");
  assertThrows(() => {
    ms932Encoder.encode("\uBCD2");
  }, Error, "EncodingError U+BCD2");
  assertThrows(() => {
    ms932Encoder.encode("\uBCD3");
  }, Error, "EncodingError U+BCD3");
  assertThrows(() => {
    ms932Encoder.encode("\uBCD4");
  }, Error, "EncodingError U+BCD4");
  assertThrows(() => {
    ms932Encoder.encode("\uBCD5");
  }, Error, "EncodingError U+BCD5");
  assertThrows(() => {
    ms932Encoder.encode("\uBCD6");
  }, Error, "EncodingError U+BCD6");
  assertThrows(() => {
    ms932Encoder.encode("\uBCD7");
  }, Error, "EncodingError U+BCD7");
  assertThrows(() => {
    ms932Encoder.encode("\uBCD8");
  }, Error, "EncodingError U+BCD8");
  assertThrows(() => {
    ms932Encoder.encode("\uBCD9");
  }, Error, "EncodingError U+BCD9");
  assertThrows(() => {
    ms932Encoder.encode("\uBCDA");
  }, Error, "EncodingError U+BCDA");
  assertThrows(() => {
    ms932Encoder.encode("\uBCDB");
  }, Error, "EncodingError U+BCDB");
  assertThrows(() => {
    ms932Encoder.encode("\uBCDC");
  }, Error, "EncodingError U+BCDC");
  assertThrows(() => {
    ms932Encoder.encode("\uBCDD");
  }, Error, "EncodingError U+BCDD");
  assertThrows(() => {
    ms932Encoder.encode("\uBCDE");
  }, Error, "EncodingError U+BCDE");
  assertThrows(() => {
    ms932Encoder.encode("\uBCDF");
  }, Error, "EncodingError U+BCDF");
  assertThrows(() => {
    ms932Encoder.encode("\uBCE0");
  }, Error, "EncodingError U+BCE0");
  assertThrows(() => {
    ms932Encoder.encode("\uBCE1");
  }, Error, "EncodingError U+BCE1");
  assertThrows(() => {
    ms932Encoder.encode("\uBCE2");
  }, Error, "EncodingError U+BCE2");
  assertThrows(() => {
    ms932Encoder.encode("\uBCE3");
  }, Error, "EncodingError U+BCE3");
  assertThrows(() => {
    ms932Encoder.encode("\uBCE4");
  }, Error, "EncodingError U+BCE4");
  assertThrows(() => {
    ms932Encoder.encode("\uBCE5");
  }, Error, "EncodingError U+BCE5");
  assertThrows(() => {
    ms932Encoder.encode("\uBCE6");
  }, Error, "EncodingError U+BCE6");
  assertThrows(() => {
    ms932Encoder.encode("\uBCE7");
  }, Error, "EncodingError U+BCE7");
  assertThrows(() => {
    ms932Encoder.encode("\uBCE8");
  }, Error, "EncodingError U+BCE8");
  assertThrows(() => {
    ms932Encoder.encode("\uBCE9");
  }, Error, "EncodingError U+BCE9");
  assertThrows(() => {
    ms932Encoder.encode("\uBCEA");
  }, Error, "EncodingError U+BCEA");
  assertThrows(() => {
    ms932Encoder.encode("\uBCEB");
  }, Error, "EncodingError U+BCEB");
  assertThrows(() => {
    ms932Encoder.encode("\uBCEC");
  }, Error, "EncodingError U+BCEC");
  assertThrows(() => {
    ms932Encoder.encode("\uBCED");
  }, Error, "EncodingError U+BCED");
  assertThrows(() => {
    ms932Encoder.encode("\uBCEE");
  }, Error, "EncodingError U+BCEE");
  assertThrows(() => {
    ms932Encoder.encode("\uBCEF");
  }, Error, "EncodingError U+BCEF");
  assertThrows(() => {
    ms932Encoder.encode("\uBCF0");
  }, Error, "EncodingError U+BCF0");
  assertThrows(() => {
    ms932Encoder.encode("\uBCF1");
  }, Error, "EncodingError U+BCF1");
  assertThrows(() => {
    ms932Encoder.encode("\uBCF2");
  }, Error, "EncodingError U+BCF2");
  assertThrows(() => {
    ms932Encoder.encode("\uBCF3");
  }, Error, "EncodingError U+BCF3");
  assertThrows(() => {
    ms932Encoder.encode("\uBCF4");
  }, Error, "EncodingError U+BCF4");
  assertThrows(() => {
    ms932Encoder.encode("\uBCF5");
  }, Error, "EncodingError U+BCF5");
  assertThrows(() => {
    ms932Encoder.encode("\uBCF6");
  }, Error, "EncodingError U+BCF6");
  assertThrows(() => {
    ms932Encoder.encode("\uBCF7");
  }, Error, "EncodingError U+BCF7");
  assertThrows(() => {
    ms932Encoder.encode("\uBCF8");
  }, Error, "EncodingError U+BCF8");
  assertThrows(() => {
    ms932Encoder.encode("\uBCF9");
  }, Error, "EncodingError U+BCF9");
  assertThrows(() => {
    ms932Encoder.encode("\uBCFA");
  }, Error, "EncodingError U+BCFA");
  assertThrows(() => {
    ms932Encoder.encode("\uBCFB");
  }, Error, "EncodingError U+BCFB");
  assertThrows(() => {
    ms932Encoder.encode("\uBCFC");
  }, Error, "EncodingError U+BCFC");
  assertThrows(() => {
    ms932Encoder.encode("\uBCFD");
  }, Error, "EncodingError U+BCFD");
  assertThrows(() => {
    ms932Encoder.encode("\uBCFE");
  }, Error, "EncodingError U+BCFE");
  assertThrows(() => {
    ms932Encoder.encode("\uBCFF");
  }, Error, "EncodingError U+BCFF");
  assertThrows(() => {
    ms932Encoder.encode("\uBD00");
  }, Error, "EncodingError U+BD00");
  assertThrows(() => {
    ms932Encoder.encode("\uBD01");
  }, Error, "EncodingError U+BD01");
  assertThrows(() => {
    ms932Encoder.encode("\uBD02");
  }, Error, "EncodingError U+BD02");
  assertThrows(() => {
    ms932Encoder.encode("\uBD03");
  }, Error, "EncodingError U+BD03");
  assertThrows(() => {
    ms932Encoder.encode("\uBD04");
  }, Error, "EncodingError U+BD04");
  assertThrows(() => {
    ms932Encoder.encode("\uBD05");
  }, Error, "EncodingError U+BD05");
  assertThrows(() => {
    ms932Encoder.encode("\uBD06");
  }, Error, "EncodingError U+BD06");
  assertThrows(() => {
    ms932Encoder.encode("\uBD07");
  }, Error, "EncodingError U+BD07");
  assertThrows(() => {
    ms932Encoder.encode("\uBD08");
  }, Error, "EncodingError U+BD08");
  assertThrows(() => {
    ms932Encoder.encode("\uBD09");
  }, Error, "EncodingError U+BD09");
  assertThrows(() => {
    ms932Encoder.encode("\uBD0A");
  }, Error, "EncodingError U+BD0A");
  assertThrows(() => {
    ms932Encoder.encode("\uBD0B");
  }, Error, "EncodingError U+BD0B");
  assertThrows(() => {
    ms932Encoder.encode("\uBD0C");
  }, Error, "EncodingError U+BD0C");
  assertThrows(() => {
    ms932Encoder.encode("\uBD0D");
  }, Error, "EncodingError U+BD0D");
  assertThrows(() => {
    ms932Encoder.encode("\uBD0E");
  }, Error, "EncodingError U+BD0E");
  assertThrows(() => {
    ms932Encoder.encode("\uBD0F");
  }, Error, "EncodingError U+BD0F");
  assertThrows(() => {
    ms932Encoder.encode("\uBD10");
  }, Error, "EncodingError U+BD10");
  assertThrows(() => {
    ms932Encoder.encode("\uBD11");
  }, Error, "EncodingError U+BD11");
  assertThrows(() => {
    ms932Encoder.encode("\uBD12");
  }, Error, "EncodingError U+BD12");
  assertThrows(() => {
    ms932Encoder.encode("\uBD13");
  }, Error, "EncodingError U+BD13");
  assertThrows(() => {
    ms932Encoder.encode("\uBD14");
  }, Error, "EncodingError U+BD14");
  assertThrows(() => {
    ms932Encoder.encode("\uBD15");
  }, Error, "EncodingError U+BD15");
  assertThrows(() => {
    ms932Encoder.encode("\uBD16");
  }, Error, "EncodingError U+BD16");
  assertThrows(() => {
    ms932Encoder.encode("\uBD17");
  }, Error, "EncodingError U+BD17");
  assertThrows(() => {
    ms932Encoder.encode("\uBD18");
  }, Error, "EncodingError U+BD18");
  assertThrows(() => {
    ms932Encoder.encode("\uBD19");
  }, Error, "EncodingError U+BD19");
  assertThrows(() => {
    ms932Encoder.encode("\uBD1A");
  }, Error, "EncodingError U+BD1A");
  assertThrows(() => {
    ms932Encoder.encode("\uBD1B");
  }, Error, "EncodingError U+BD1B");
  assertThrows(() => {
    ms932Encoder.encode("\uBD1C");
  }, Error, "EncodingError U+BD1C");
  assertThrows(() => {
    ms932Encoder.encode("\uBD1D");
  }, Error, "EncodingError U+BD1D");
  assertThrows(() => {
    ms932Encoder.encode("\uBD1E");
  }, Error, "EncodingError U+BD1E");
  assertThrows(() => {
    ms932Encoder.encode("\uBD1F");
  }, Error, "EncodingError U+BD1F");
  assertThrows(() => {
    ms932Encoder.encode("\uBD20");
  }, Error, "EncodingError U+BD20");
  assertThrows(() => {
    ms932Encoder.encode("\uBD21");
  }, Error, "EncodingError U+BD21");
  assertThrows(() => {
    ms932Encoder.encode("\uBD22");
  }, Error, "EncodingError U+BD22");
  assertThrows(() => {
    ms932Encoder.encode("\uBD23");
  }, Error, "EncodingError U+BD23");
  assertThrows(() => {
    ms932Encoder.encode("\uBD24");
  }, Error, "EncodingError U+BD24");
  assertThrows(() => {
    ms932Encoder.encode("\uBD25");
  }, Error, "EncodingError U+BD25");
  assertThrows(() => {
    ms932Encoder.encode("\uBD26");
  }, Error, "EncodingError U+BD26");
  assertThrows(() => {
    ms932Encoder.encode("\uBD27");
  }, Error, "EncodingError U+BD27");
  assertThrows(() => {
    ms932Encoder.encode("\uBD28");
  }, Error, "EncodingError U+BD28");
  assertThrows(() => {
    ms932Encoder.encode("\uBD29");
  }, Error, "EncodingError U+BD29");
  assertThrows(() => {
    ms932Encoder.encode("\uBD2A");
  }, Error, "EncodingError U+BD2A");
  assertThrows(() => {
    ms932Encoder.encode("\uBD2B");
  }, Error, "EncodingError U+BD2B");
  assertThrows(() => {
    ms932Encoder.encode("\uBD2C");
  }, Error, "EncodingError U+BD2C");
  assertThrows(() => {
    ms932Encoder.encode("\uBD2D");
  }, Error, "EncodingError U+BD2D");
  assertThrows(() => {
    ms932Encoder.encode("\uBD2E");
  }, Error, "EncodingError U+BD2E");
  assertThrows(() => {
    ms932Encoder.encode("\uBD2F");
  }, Error, "EncodingError U+BD2F");
  assertThrows(() => {
    ms932Encoder.encode("\uBD30");
  }, Error, "EncodingError U+BD30");
  assertThrows(() => {
    ms932Encoder.encode("\uBD31");
  }, Error, "EncodingError U+BD31");
  assertThrows(() => {
    ms932Encoder.encode("\uBD32");
  }, Error, "EncodingError U+BD32");
  assertThrows(() => {
    ms932Encoder.encode("\uBD33");
  }, Error, "EncodingError U+BD33");
  assertThrows(() => {
    ms932Encoder.encode("\uBD34");
  }, Error, "EncodingError U+BD34");
  assertThrows(() => {
    ms932Encoder.encode("\uBD35");
  }, Error, "EncodingError U+BD35");
  assertThrows(() => {
    ms932Encoder.encode("\uBD36");
  }, Error, "EncodingError U+BD36");
  assertThrows(() => {
    ms932Encoder.encode("\uBD37");
  }, Error, "EncodingError U+BD37");
  assertThrows(() => {
    ms932Encoder.encode("\uBD38");
  }, Error, "EncodingError U+BD38");
  assertThrows(() => {
    ms932Encoder.encode("\uBD39");
  }, Error, "EncodingError U+BD39");
  assertThrows(() => {
    ms932Encoder.encode("\uBD3A");
  }, Error, "EncodingError U+BD3A");
  assertThrows(() => {
    ms932Encoder.encode("\uBD3B");
  }, Error, "EncodingError U+BD3B");
  assertThrows(() => {
    ms932Encoder.encode("\uBD3C");
  }, Error, "EncodingError U+BD3C");
  assertThrows(() => {
    ms932Encoder.encode("\uBD3D");
  }, Error, "EncodingError U+BD3D");
  assertThrows(() => {
    ms932Encoder.encode("\uBD3E");
  }, Error, "EncodingError U+BD3E");
  assertThrows(() => {
    ms932Encoder.encode("\uBD3F");
  }, Error, "EncodingError U+BD3F");
  assertThrows(() => {
    ms932Encoder.encode("\uBD40");
  }, Error, "EncodingError U+BD40");
  assertThrows(() => {
    ms932Encoder.encode("\uBD41");
  }, Error, "EncodingError U+BD41");
  assertThrows(() => {
    ms932Encoder.encode("\uBD42");
  }, Error, "EncodingError U+BD42");
  assertThrows(() => {
    ms932Encoder.encode("\uBD43");
  }, Error, "EncodingError U+BD43");
  assertThrows(() => {
    ms932Encoder.encode("\uBD44");
  }, Error, "EncodingError U+BD44");
  assertThrows(() => {
    ms932Encoder.encode("\uBD45");
  }, Error, "EncodingError U+BD45");
  assertThrows(() => {
    ms932Encoder.encode("\uBD46");
  }, Error, "EncodingError U+BD46");
  assertThrows(() => {
    ms932Encoder.encode("\uBD47");
  }, Error, "EncodingError U+BD47");
  assertThrows(() => {
    ms932Encoder.encode("\uBD48");
  }, Error, "EncodingError U+BD48");
  assertThrows(() => {
    ms932Encoder.encode("\uBD49");
  }, Error, "EncodingError U+BD49");
  assertThrows(() => {
    ms932Encoder.encode("\uBD4A");
  }, Error, "EncodingError U+BD4A");
  assertThrows(() => {
    ms932Encoder.encode("\uBD4B");
  }, Error, "EncodingError U+BD4B");
  assertThrows(() => {
    ms932Encoder.encode("\uBD4C");
  }, Error, "EncodingError U+BD4C");
  assertThrows(() => {
    ms932Encoder.encode("\uBD4D");
  }, Error, "EncodingError U+BD4D");
  assertThrows(() => {
    ms932Encoder.encode("\uBD4E");
  }, Error, "EncodingError U+BD4E");
  assertThrows(() => {
    ms932Encoder.encode("\uBD4F");
  }, Error, "EncodingError U+BD4F");
  assertThrows(() => {
    ms932Encoder.encode("\uBD50");
  }, Error, "EncodingError U+BD50");
  assertThrows(() => {
    ms932Encoder.encode("\uBD51");
  }, Error, "EncodingError U+BD51");
  assertThrows(() => {
    ms932Encoder.encode("\uBD52");
  }, Error, "EncodingError U+BD52");
  assertThrows(() => {
    ms932Encoder.encode("\uBD53");
  }, Error, "EncodingError U+BD53");
  assertThrows(() => {
    ms932Encoder.encode("\uBD54");
  }, Error, "EncodingError U+BD54");
  assertThrows(() => {
    ms932Encoder.encode("\uBD55");
  }, Error, "EncodingError U+BD55");
  assertThrows(() => {
    ms932Encoder.encode("\uBD56");
  }, Error, "EncodingError U+BD56");
  assertThrows(() => {
    ms932Encoder.encode("\uBD57");
  }, Error, "EncodingError U+BD57");
  assertThrows(() => {
    ms932Encoder.encode("\uBD58");
  }, Error, "EncodingError U+BD58");
  assertThrows(() => {
    ms932Encoder.encode("\uBD59");
  }, Error, "EncodingError U+BD59");
  assertThrows(() => {
    ms932Encoder.encode("\uBD5A");
  }, Error, "EncodingError U+BD5A");
  assertThrows(() => {
    ms932Encoder.encode("\uBD5B");
  }, Error, "EncodingError U+BD5B");
  assertThrows(() => {
    ms932Encoder.encode("\uBD5C");
  }, Error, "EncodingError U+BD5C");
  assertThrows(() => {
    ms932Encoder.encode("\uBD5D");
  }, Error, "EncodingError U+BD5D");
  assertThrows(() => {
    ms932Encoder.encode("\uBD5E");
  }, Error, "EncodingError U+BD5E");
  assertThrows(() => {
    ms932Encoder.encode("\uBD5F");
  }, Error, "EncodingError U+BD5F");
  assertThrows(() => {
    ms932Encoder.encode("\uBD60");
  }, Error, "EncodingError U+BD60");
  assertThrows(() => {
    ms932Encoder.encode("\uBD61");
  }, Error, "EncodingError U+BD61");
  assertThrows(() => {
    ms932Encoder.encode("\uBD62");
  }, Error, "EncodingError U+BD62");
  assertThrows(() => {
    ms932Encoder.encode("\uBD63");
  }, Error, "EncodingError U+BD63");
  assertThrows(() => {
    ms932Encoder.encode("\uBD64");
  }, Error, "EncodingError U+BD64");
  assertThrows(() => {
    ms932Encoder.encode("\uBD65");
  }, Error, "EncodingError U+BD65");
  assertThrows(() => {
    ms932Encoder.encode("\uBD66");
  }, Error, "EncodingError U+BD66");
  assertThrows(() => {
    ms932Encoder.encode("\uBD67");
  }, Error, "EncodingError U+BD67");
  assertThrows(() => {
    ms932Encoder.encode("\uBD68");
  }, Error, "EncodingError U+BD68");
  assertThrows(() => {
    ms932Encoder.encode("\uBD69");
  }, Error, "EncodingError U+BD69");
  assertThrows(() => {
    ms932Encoder.encode("\uBD6A");
  }, Error, "EncodingError U+BD6A");
  assertThrows(() => {
    ms932Encoder.encode("\uBD6B");
  }, Error, "EncodingError U+BD6B");
  assertThrows(() => {
    ms932Encoder.encode("\uBD6C");
  }, Error, "EncodingError U+BD6C");
  assertThrows(() => {
    ms932Encoder.encode("\uBD6D");
  }, Error, "EncodingError U+BD6D");
  assertThrows(() => {
    ms932Encoder.encode("\uBD6E");
  }, Error, "EncodingError U+BD6E");
  assertThrows(() => {
    ms932Encoder.encode("\uBD6F");
  }, Error, "EncodingError U+BD6F");
  assertThrows(() => {
    ms932Encoder.encode("\uBD70");
  }, Error, "EncodingError U+BD70");
  assertThrows(() => {
    ms932Encoder.encode("\uBD71");
  }, Error, "EncodingError U+BD71");
  assertThrows(() => {
    ms932Encoder.encode("\uBD72");
  }, Error, "EncodingError U+BD72");
  assertThrows(() => {
    ms932Encoder.encode("\uBD73");
  }, Error, "EncodingError U+BD73");
  assertThrows(() => {
    ms932Encoder.encode("\uBD74");
  }, Error, "EncodingError U+BD74");
  assertThrows(() => {
    ms932Encoder.encode("\uBD75");
  }, Error, "EncodingError U+BD75");
  assertThrows(() => {
    ms932Encoder.encode("\uBD76");
  }, Error, "EncodingError U+BD76");
  assertThrows(() => {
    ms932Encoder.encode("\uBD77");
  }, Error, "EncodingError U+BD77");
  assertThrows(() => {
    ms932Encoder.encode("\uBD78");
  }, Error, "EncodingError U+BD78");
  assertThrows(() => {
    ms932Encoder.encode("\uBD79");
  }, Error, "EncodingError U+BD79");
  assertThrows(() => {
    ms932Encoder.encode("\uBD7A");
  }, Error, "EncodingError U+BD7A");
  assertThrows(() => {
    ms932Encoder.encode("\uBD7B");
  }, Error, "EncodingError U+BD7B");
  assertThrows(() => {
    ms932Encoder.encode("\uBD7C");
  }, Error, "EncodingError U+BD7C");
  assertThrows(() => {
    ms932Encoder.encode("\uBD7D");
  }, Error, "EncodingError U+BD7D");
  assertThrows(() => {
    ms932Encoder.encode("\uBD7E");
  }, Error, "EncodingError U+BD7E");
  assertThrows(() => {
    ms932Encoder.encode("\uBD7F");
  }, Error, "EncodingError U+BD7F");
  assertThrows(() => {
    ms932Encoder.encode("\uBD80");
  }, Error, "EncodingError U+BD80");
  assertThrows(() => {
    ms932Encoder.encode("\uBD81");
  }, Error, "EncodingError U+BD81");
  assertThrows(() => {
    ms932Encoder.encode("\uBD82");
  }, Error, "EncodingError U+BD82");
  assertThrows(() => {
    ms932Encoder.encode("\uBD83");
  }, Error, "EncodingError U+BD83");
  assertThrows(() => {
    ms932Encoder.encode("\uBD84");
  }, Error, "EncodingError U+BD84");
  assertThrows(() => {
    ms932Encoder.encode("\uBD85");
  }, Error, "EncodingError U+BD85");
  assertThrows(() => {
    ms932Encoder.encode("\uBD86");
  }, Error, "EncodingError U+BD86");
  assertThrows(() => {
    ms932Encoder.encode("\uBD87");
  }, Error, "EncodingError U+BD87");
  assertThrows(() => {
    ms932Encoder.encode("\uBD88");
  }, Error, "EncodingError U+BD88");
  assertThrows(() => {
    ms932Encoder.encode("\uBD89");
  }, Error, "EncodingError U+BD89");
  assertThrows(() => {
    ms932Encoder.encode("\uBD8A");
  }, Error, "EncodingError U+BD8A");
  assertThrows(() => {
    ms932Encoder.encode("\uBD8B");
  }, Error, "EncodingError U+BD8B");
  assertThrows(() => {
    ms932Encoder.encode("\uBD8C");
  }, Error, "EncodingError U+BD8C");
  assertThrows(() => {
    ms932Encoder.encode("\uBD8D");
  }, Error, "EncodingError U+BD8D");
  assertThrows(() => {
    ms932Encoder.encode("\uBD8E");
  }, Error, "EncodingError U+BD8E");
  assertThrows(() => {
    ms932Encoder.encode("\uBD8F");
  }, Error, "EncodingError U+BD8F");
  assertThrows(() => {
    ms932Encoder.encode("\uBD90");
  }, Error, "EncodingError U+BD90");
  assertThrows(() => {
    ms932Encoder.encode("\uBD91");
  }, Error, "EncodingError U+BD91");
  assertThrows(() => {
    ms932Encoder.encode("\uBD92");
  }, Error, "EncodingError U+BD92");
  assertThrows(() => {
    ms932Encoder.encode("\uBD93");
  }, Error, "EncodingError U+BD93");
  assertThrows(() => {
    ms932Encoder.encode("\uBD94");
  }, Error, "EncodingError U+BD94");
  assertThrows(() => {
    ms932Encoder.encode("\uBD95");
  }, Error, "EncodingError U+BD95");
  assertThrows(() => {
    ms932Encoder.encode("\uBD96");
  }, Error, "EncodingError U+BD96");
  assertThrows(() => {
    ms932Encoder.encode("\uBD97");
  }, Error, "EncodingError U+BD97");
  assertThrows(() => {
    ms932Encoder.encode("\uBD98");
  }, Error, "EncodingError U+BD98");
  assertThrows(() => {
    ms932Encoder.encode("\uBD99");
  }, Error, "EncodingError U+BD99");
  assertThrows(() => {
    ms932Encoder.encode("\uBD9A");
  }, Error, "EncodingError U+BD9A");
  assertThrows(() => {
    ms932Encoder.encode("\uBD9B");
  }, Error, "EncodingError U+BD9B");
  assertThrows(() => {
    ms932Encoder.encode("\uBD9C");
  }, Error, "EncodingError U+BD9C");
  assertThrows(() => {
    ms932Encoder.encode("\uBD9D");
  }, Error, "EncodingError U+BD9D");
  assertThrows(() => {
    ms932Encoder.encode("\uBD9E");
  }, Error, "EncodingError U+BD9E");
  assertThrows(() => {
    ms932Encoder.encode("\uBD9F");
  }, Error, "EncodingError U+BD9F");
  assertThrows(() => {
    ms932Encoder.encode("\uBDA0");
  }, Error, "EncodingError U+BDA0");
  assertThrows(() => {
    ms932Encoder.encode("\uBDA1");
  }, Error, "EncodingError U+BDA1");
  assertThrows(() => {
    ms932Encoder.encode("\uBDA2");
  }, Error, "EncodingError U+BDA2");
  assertThrows(() => {
    ms932Encoder.encode("\uBDA3");
  }, Error, "EncodingError U+BDA3");
  assertThrows(() => {
    ms932Encoder.encode("\uBDA4");
  }, Error, "EncodingError U+BDA4");
  assertThrows(() => {
    ms932Encoder.encode("\uBDA5");
  }, Error, "EncodingError U+BDA5");
  assertThrows(() => {
    ms932Encoder.encode("\uBDA6");
  }, Error, "EncodingError U+BDA6");
  assertThrows(() => {
    ms932Encoder.encode("\uBDA7");
  }, Error, "EncodingError U+BDA7");
  assertThrows(() => {
    ms932Encoder.encode("\uBDA8");
  }, Error, "EncodingError U+BDA8");
  assertThrows(() => {
    ms932Encoder.encode("\uBDA9");
  }, Error, "EncodingError U+BDA9");
  assertThrows(() => {
    ms932Encoder.encode("\uBDAA");
  }, Error, "EncodingError U+BDAA");
  assertThrows(() => {
    ms932Encoder.encode("\uBDAB");
  }, Error, "EncodingError U+BDAB");
  assertThrows(() => {
    ms932Encoder.encode("\uBDAC");
  }, Error, "EncodingError U+BDAC");
  assertThrows(() => {
    ms932Encoder.encode("\uBDAD");
  }, Error, "EncodingError U+BDAD");
  assertThrows(() => {
    ms932Encoder.encode("\uBDAE");
  }, Error, "EncodingError U+BDAE");
  assertThrows(() => {
    ms932Encoder.encode("\uBDAF");
  }, Error, "EncodingError U+BDAF");
  assertThrows(() => {
    ms932Encoder.encode("\uBDB0");
  }, Error, "EncodingError U+BDB0");
  assertThrows(() => {
    ms932Encoder.encode("\uBDB1");
  }, Error, "EncodingError U+BDB1");
  assertThrows(() => {
    ms932Encoder.encode("\uBDB2");
  }, Error, "EncodingError U+BDB2");
  assertThrows(() => {
    ms932Encoder.encode("\uBDB3");
  }, Error, "EncodingError U+BDB3");
  assertThrows(() => {
    ms932Encoder.encode("\uBDB4");
  }, Error, "EncodingError U+BDB4");
  assertThrows(() => {
    ms932Encoder.encode("\uBDB5");
  }, Error, "EncodingError U+BDB5");
  assertThrows(() => {
    ms932Encoder.encode("\uBDB6");
  }, Error, "EncodingError U+BDB6");
  assertThrows(() => {
    ms932Encoder.encode("\uBDB7");
  }, Error, "EncodingError U+BDB7");
  assertThrows(() => {
    ms932Encoder.encode("\uBDB8");
  }, Error, "EncodingError U+BDB8");
  assertThrows(() => {
    ms932Encoder.encode("\uBDB9");
  }, Error, "EncodingError U+BDB9");
  assertThrows(() => {
    ms932Encoder.encode("\uBDBA");
  }, Error, "EncodingError U+BDBA");
  assertThrows(() => {
    ms932Encoder.encode("\uBDBB");
  }, Error, "EncodingError U+BDBB");
  assertThrows(() => {
    ms932Encoder.encode("\uBDBC");
  }, Error, "EncodingError U+BDBC");
  assertThrows(() => {
    ms932Encoder.encode("\uBDBD");
  }, Error, "EncodingError U+BDBD");
  assertThrows(() => {
    ms932Encoder.encode("\uBDBE");
  }, Error, "EncodingError U+BDBE");
  assertThrows(() => {
    ms932Encoder.encode("\uBDBF");
  }, Error, "EncodingError U+BDBF");
  assertThrows(() => {
    ms932Encoder.encode("\uBDC0");
  }, Error, "EncodingError U+BDC0");
  assertThrows(() => {
    ms932Encoder.encode("\uBDC1");
  }, Error, "EncodingError U+BDC1");
  assertThrows(() => {
    ms932Encoder.encode("\uBDC2");
  }, Error, "EncodingError U+BDC2");
  assertThrows(() => {
    ms932Encoder.encode("\uBDC3");
  }, Error, "EncodingError U+BDC3");
  assertThrows(() => {
    ms932Encoder.encode("\uBDC4");
  }, Error, "EncodingError U+BDC4");
  assertThrows(() => {
    ms932Encoder.encode("\uBDC5");
  }, Error, "EncodingError U+BDC5");
  assertThrows(() => {
    ms932Encoder.encode("\uBDC6");
  }, Error, "EncodingError U+BDC6");
  assertThrows(() => {
    ms932Encoder.encode("\uBDC7");
  }, Error, "EncodingError U+BDC7");
  assertThrows(() => {
    ms932Encoder.encode("\uBDC8");
  }, Error, "EncodingError U+BDC8");
  assertThrows(() => {
    ms932Encoder.encode("\uBDC9");
  }, Error, "EncodingError U+BDC9");
  assertThrows(() => {
    ms932Encoder.encode("\uBDCA");
  }, Error, "EncodingError U+BDCA");
  assertThrows(() => {
    ms932Encoder.encode("\uBDCB");
  }, Error, "EncodingError U+BDCB");
  assertThrows(() => {
    ms932Encoder.encode("\uBDCC");
  }, Error, "EncodingError U+BDCC");
  assertThrows(() => {
    ms932Encoder.encode("\uBDCD");
  }, Error, "EncodingError U+BDCD");
  assertThrows(() => {
    ms932Encoder.encode("\uBDCE");
  }, Error, "EncodingError U+BDCE");
  assertThrows(() => {
    ms932Encoder.encode("\uBDCF");
  }, Error, "EncodingError U+BDCF");
  assertThrows(() => {
    ms932Encoder.encode("\uBDD0");
  }, Error, "EncodingError U+BDD0");
  assertThrows(() => {
    ms932Encoder.encode("\uBDD1");
  }, Error, "EncodingError U+BDD1");
  assertThrows(() => {
    ms932Encoder.encode("\uBDD2");
  }, Error, "EncodingError U+BDD2");
  assertThrows(() => {
    ms932Encoder.encode("\uBDD3");
  }, Error, "EncodingError U+BDD3");
  assertThrows(() => {
    ms932Encoder.encode("\uBDD4");
  }, Error, "EncodingError U+BDD4");
  assertThrows(() => {
    ms932Encoder.encode("\uBDD5");
  }, Error, "EncodingError U+BDD5");
  assertThrows(() => {
    ms932Encoder.encode("\uBDD6");
  }, Error, "EncodingError U+BDD6");
  assertThrows(() => {
    ms932Encoder.encode("\uBDD7");
  }, Error, "EncodingError U+BDD7");
  assertThrows(() => {
    ms932Encoder.encode("\uBDD8");
  }, Error, "EncodingError U+BDD8");
  assertThrows(() => {
    ms932Encoder.encode("\uBDD9");
  }, Error, "EncodingError U+BDD9");
  assertThrows(() => {
    ms932Encoder.encode("\uBDDA");
  }, Error, "EncodingError U+BDDA");
  assertThrows(() => {
    ms932Encoder.encode("\uBDDB");
  }, Error, "EncodingError U+BDDB");
  assertThrows(() => {
    ms932Encoder.encode("\uBDDC");
  }, Error, "EncodingError U+BDDC");
  assertThrows(() => {
    ms932Encoder.encode("\uBDDD");
  }, Error, "EncodingError U+BDDD");
  assertThrows(() => {
    ms932Encoder.encode("\uBDDE");
  }, Error, "EncodingError U+BDDE");
  assertThrows(() => {
    ms932Encoder.encode("\uBDDF");
  }, Error, "EncodingError U+BDDF");
  assertThrows(() => {
    ms932Encoder.encode("\uBDE0");
  }, Error, "EncodingError U+BDE0");
  assertThrows(() => {
    ms932Encoder.encode("\uBDE1");
  }, Error, "EncodingError U+BDE1");
  assertThrows(() => {
    ms932Encoder.encode("\uBDE2");
  }, Error, "EncodingError U+BDE2");
  assertThrows(() => {
    ms932Encoder.encode("\uBDE3");
  }, Error, "EncodingError U+BDE3");
  assertThrows(() => {
    ms932Encoder.encode("\uBDE4");
  }, Error, "EncodingError U+BDE4");
  assertThrows(() => {
    ms932Encoder.encode("\uBDE5");
  }, Error, "EncodingError U+BDE5");
  assertThrows(() => {
    ms932Encoder.encode("\uBDE6");
  }, Error, "EncodingError U+BDE6");
  assertThrows(() => {
    ms932Encoder.encode("\uBDE7");
  }, Error, "EncodingError U+BDE7");
  assertThrows(() => {
    ms932Encoder.encode("\uBDE8");
  }, Error, "EncodingError U+BDE8");
  assertThrows(() => {
    ms932Encoder.encode("\uBDE9");
  }, Error, "EncodingError U+BDE9");
  assertThrows(() => {
    ms932Encoder.encode("\uBDEA");
  }, Error, "EncodingError U+BDEA");
  assertThrows(() => {
    ms932Encoder.encode("\uBDEB");
  }, Error, "EncodingError U+BDEB");
  assertThrows(() => {
    ms932Encoder.encode("\uBDEC");
  }, Error, "EncodingError U+BDEC");
  assertThrows(() => {
    ms932Encoder.encode("\uBDED");
  }, Error, "EncodingError U+BDED");
  assertThrows(() => {
    ms932Encoder.encode("\uBDEE");
  }, Error, "EncodingError U+BDEE");
  assertThrows(() => {
    ms932Encoder.encode("\uBDEF");
  }, Error, "EncodingError U+BDEF");
  assertThrows(() => {
    ms932Encoder.encode("\uBDF0");
  }, Error, "EncodingError U+BDF0");
  assertThrows(() => {
    ms932Encoder.encode("\uBDF1");
  }, Error, "EncodingError U+BDF1");
  assertThrows(() => {
    ms932Encoder.encode("\uBDF2");
  }, Error, "EncodingError U+BDF2");
  assertThrows(() => {
    ms932Encoder.encode("\uBDF3");
  }, Error, "EncodingError U+BDF3");
  assertThrows(() => {
    ms932Encoder.encode("\uBDF4");
  }, Error, "EncodingError U+BDF4");
  assertThrows(() => {
    ms932Encoder.encode("\uBDF5");
  }, Error, "EncodingError U+BDF5");
  assertThrows(() => {
    ms932Encoder.encode("\uBDF6");
  }, Error, "EncodingError U+BDF6");
  assertThrows(() => {
    ms932Encoder.encode("\uBDF7");
  }, Error, "EncodingError U+BDF7");
  assertThrows(() => {
    ms932Encoder.encode("\uBDF8");
  }, Error, "EncodingError U+BDF8");
  assertThrows(() => {
    ms932Encoder.encode("\uBDF9");
  }, Error, "EncodingError U+BDF9");
  assertThrows(() => {
    ms932Encoder.encode("\uBDFA");
  }, Error, "EncodingError U+BDFA");
  assertThrows(() => {
    ms932Encoder.encode("\uBDFB");
  }, Error, "EncodingError U+BDFB");
  assertThrows(() => {
    ms932Encoder.encode("\uBDFC");
  }, Error, "EncodingError U+BDFC");
  assertThrows(() => {
    ms932Encoder.encode("\uBDFD");
  }, Error, "EncodingError U+BDFD");
  assertThrows(() => {
    ms932Encoder.encode("\uBDFE");
  }, Error, "EncodingError U+BDFE");
  assertThrows(() => {
    ms932Encoder.encode("\uBDFF");
  }, Error, "EncodingError U+BDFF");
  assertThrows(() => {
    ms932Encoder.encode("\uBE00");
  }, Error, "EncodingError U+BE00");
  assertThrows(() => {
    ms932Encoder.encode("\uBE01");
  }, Error, "EncodingError U+BE01");
  assertThrows(() => {
    ms932Encoder.encode("\uBE02");
  }, Error, "EncodingError U+BE02");
  assertThrows(() => {
    ms932Encoder.encode("\uBE03");
  }, Error, "EncodingError U+BE03");
  assertThrows(() => {
    ms932Encoder.encode("\uBE04");
  }, Error, "EncodingError U+BE04");
  assertThrows(() => {
    ms932Encoder.encode("\uBE05");
  }, Error, "EncodingError U+BE05");
  assertThrows(() => {
    ms932Encoder.encode("\uBE06");
  }, Error, "EncodingError U+BE06");
  assertThrows(() => {
    ms932Encoder.encode("\uBE07");
  }, Error, "EncodingError U+BE07");
  assertThrows(() => {
    ms932Encoder.encode("\uBE08");
  }, Error, "EncodingError U+BE08");
  assertThrows(() => {
    ms932Encoder.encode("\uBE09");
  }, Error, "EncodingError U+BE09");
  assertThrows(() => {
    ms932Encoder.encode("\uBE0A");
  }, Error, "EncodingError U+BE0A");
  assertThrows(() => {
    ms932Encoder.encode("\uBE0B");
  }, Error, "EncodingError U+BE0B");
  assertThrows(() => {
    ms932Encoder.encode("\uBE0C");
  }, Error, "EncodingError U+BE0C");
  assertThrows(() => {
    ms932Encoder.encode("\uBE0D");
  }, Error, "EncodingError U+BE0D");
  assertThrows(() => {
    ms932Encoder.encode("\uBE0E");
  }, Error, "EncodingError U+BE0E");
  assertThrows(() => {
    ms932Encoder.encode("\uBE0F");
  }, Error, "EncodingError U+BE0F");
  assertThrows(() => {
    ms932Encoder.encode("\uBE10");
  }, Error, "EncodingError U+BE10");
  assertThrows(() => {
    ms932Encoder.encode("\uBE11");
  }, Error, "EncodingError U+BE11");
  assertThrows(() => {
    ms932Encoder.encode("\uBE12");
  }, Error, "EncodingError U+BE12");
  assertThrows(() => {
    ms932Encoder.encode("\uBE13");
  }, Error, "EncodingError U+BE13");
  assertThrows(() => {
    ms932Encoder.encode("\uBE14");
  }, Error, "EncodingError U+BE14");
  assertThrows(() => {
    ms932Encoder.encode("\uBE15");
  }, Error, "EncodingError U+BE15");
  assertThrows(() => {
    ms932Encoder.encode("\uBE16");
  }, Error, "EncodingError U+BE16");
  assertThrows(() => {
    ms932Encoder.encode("\uBE17");
  }, Error, "EncodingError U+BE17");
  assertThrows(() => {
    ms932Encoder.encode("\uBE18");
  }, Error, "EncodingError U+BE18");
  assertThrows(() => {
    ms932Encoder.encode("\uBE19");
  }, Error, "EncodingError U+BE19");
  assertThrows(() => {
    ms932Encoder.encode("\uBE1A");
  }, Error, "EncodingError U+BE1A");
  assertThrows(() => {
    ms932Encoder.encode("\uBE1B");
  }, Error, "EncodingError U+BE1B");
  assertThrows(() => {
    ms932Encoder.encode("\uBE1C");
  }, Error, "EncodingError U+BE1C");
  assertThrows(() => {
    ms932Encoder.encode("\uBE1D");
  }, Error, "EncodingError U+BE1D");
  assertThrows(() => {
    ms932Encoder.encode("\uBE1E");
  }, Error, "EncodingError U+BE1E");
  assertThrows(() => {
    ms932Encoder.encode("\uBE1F");
  }, Error, "EncodingError U+BE1F");
  assertThrows(() => {
    ms932Encoder.encode("\uBE20");
  }, Error, "EncodingError U+BE20");
  assertThrows(() => {
    ms932Encoder.encode("\uBE21");
  }, Error, "EncodingError U+BE21");
  assertThrows(() => {
    ms932Encoder.encode("\uBE22");
  }, Error, "EncodingError U+BE22");
  assertThrows(() => {
    ms932Encoder.encode("\uBE23");
  }, Error, "EncodingError U+BE23");
  assertThrows(() => {
    ms932Encoder.encode("\uBE24");
  }, Error, "EncodingError U+BE24");
  assertThrows(() => {
    ms932Encoder.encode("\uBE25");
  }, Error, "EncodingError U+BE25");
  assertThrows(() => {
    ms932Encoder.encode("\uBE26");
  }, Error, "EncodingError U+BE26");
  assertThrows(() => {
    ms932Encoder.encode("\uBE27");
  }, Error, "EncodingError U+BE27");
  assertThrows(() => {
    ms932Encoder.encode("\uBE28");
  }, Error, "EncodingError U+BE28");
  assertThrows(() => {
    ms932Encoder.encode("\uBE29");
  }, Error, "EncodingError U+BE29");
  assertThrows(() => {
    ms932Encoder.encode("\uBE2A");
  }, Error, "EncodingError U+BE2A");
  assertThrows(() => {
    ms932Encoder.encode("\uBE2B");
  }, Error, "EncodingError U+BE2B");
  assertThrows(() => {
    ms932Encoder.encode("\uBE2C");
  }, Error, "EncodingError U+BE2C");
  assertThrows(() => {
    ms932Encoder.encode("\uBE2D");
  }, Error, "EncodingError U+BE2D");
  assertThrows(() => {
    ms932Encoder.encode("\uBE2E");
  }, Error, "EncodingError U+BE2E");
  assertThrows(() => {
    ms932Encoder.encode("\uBE2F");
  }, Error, "EncodingError U+BE2F");
  assertThrows(() => {
    ms932Encoder.encode("\uBE30");
  }, Error, "EncodingError U+BE30");
  assertThrows(() => {
    ms932Encoder.encode("\uBE31");
  }, Error, "EncodingError U+BE31");
  assertThrows(() => {
    ms932Encoder.encode("\uBE32");
  }, Error, "EncodingError U+BE32");
  assertThrows(() => {
    ms932Encoder.encode("\uBE33");
  }, Error, "EncodingError U+BE33");
  assertThrows(() => {
    ms932Encoder.encode("\uBE34");
  }, Error, "EncodingError U+BE34");
  assertThrows(() => {
    ms932Encoder.encode("\uBE35");
  }, Error, "EncodingError U+BE35");
  assertThrows(() => {
    ms932Encoder.encode("\uBE36");
  }, Error, "EncodingError U+BE36");
  assertThrows(() => {
    ms932Encoder.encode("\uBE37");
  }, Error, "EncodingError U+BE37");
  assertThrows(() => {
    ms932Encoder.encode("\uBE38");
  }, Error, "EncodingError U+BE38");
  assertThrows(() => {
    ms932Encoder.encode("\uBE39");
  }, Error, "EncodingError U+BE39");
  assertThrows(() => {
    ms932Encoder.encode("\uBE3A");
  }, Error, "EncodingError U+BE3A");
  assertThrows(() => {
    ms932Encoder.encode("\uBE3B");
  }, Error, "EncodingError U+BE3B");
  assertThrows(() => {
    ms932Encoder.encode("\uBE3C");
  }, Error, "EncodingError U+BE3C");
  assertThrows(() => {
    ms932Encoder.encode("\uBE3D");
  }, Error, "EncodingError U+BE3D");
  assertThrows(() => {
    ms932Encoder.encode("\uBE3E");
  }, Error, "EncodingError U+BE3E");
  assertThrows(() => {
    ms932Encoder.encode("\uBE3F");
  }, Error, "EncodingError U+BE3F");
  assertThrows(() => {
    ms932Encoder.encode("\uBE40");
  }, Error, "EncodingError U+BE40");
  assertThrows(() => {
    ms932Encoder.encode("\uBE41");
  }, Error, "EncodingError U+BE41");
  assertThrows(() => {
    ms932Encoder.encode("\uBE42");
  }, Error, "EncodingError U+BE42");
  assertThrows(() => {
    ms932Encoder.encode("\uBE43");
  }, Error, "EncodingError U+BE43");
  assertThrows(() => {
    ms932Encoder.encode("\uBE44");
  }, Error, "EncodingError U+BE44");
  assertThrows(() => {
    ms932Encoder.encode("\uBE45");
  }, Error, "EncodingError U+BE45");
  assertThrows(() => {
    ms932Encoder.encode("\uBE46");
  }, Error, "EncodingError U+BE46");
  assertThrows(() => {
    ms932Encoder.encode("\uBE47");
  }, Error, "EncodingError U+BE47");
  assertThrows(() => {
    ms932Encoder.encode("\uBE48");
  }, Error, "EncodingError U+BE48");
  assertThrows(() => {
    ms932Encoder.encode("\uBE49");
  }, Error, "EncodingError U+BE49");
  assertThrows(() => {
    ms932Encoder.encode("\uBE4A");
  }, Error, "EncodingError U+BE4A");
  assertThrows(() => {
    ms932Encoder.encode("\uBE4B");
  }, Error, "EncodingError U+BE4B");
  assertThrows(() => {
    ms932Encoder.encode("\uBE4C");
  }, Error, "EncodingError U+BE4C");
  assertThrows(() => {
    ms932Encoder.encode("\uBE4D");
  }, Error, "EncodingError U+BE4D");
  assertThrows(() => {
    ms932Encoder.encode("\uBE4E");
  }, Error, "EncodingError U+BE4E");
  assertThrows(() => {
    ms932Encoder.encode("\uBE4F");
  }, Error, "EncodingError U+BE4F");
  assertThrows(() => {
    ms932Encoder.encode("\uBE50");
  }, Error, "EncodingError U+BE50");
  assertThrows(() => {
    ms932Encoder.encode("\uBE51");
  }, Error, "EncodingError U+BE51");
  assertThrows(() => {
    ms932Encoder.encode("\uBE52");
  }, Error, "EncodingError U+BE52");
  assertThrows(() => {
    ms932Encoder.encode("\uBE53");
  }, Error, "EncodingError U+BE53");
  assertThrows(() => {
    ms932Encoder.encode("\uBE54");
  }, Error, "EncodingError U+BE54");
  assertThrows(() => {
    ms932Encoder.encode("\uBE55");
  }, Error, "EncodingError U+BE55");
  assertThrows(() => {
    ms932Encoder.encode("\uBE56");
  }, Error, "EncodingError U+BE56");
  assertThrows(() => {
    ms932Encoder.encode("\uBE57");
  }, Error, "EncodingError U+BE57");
  assertThrows(() => {
    ms932Encoder.encode("\uBE58");
  }, Error, "EncodingError U+BE58");
  assertThrows(() => {
    ms932Encoder.encode("\uBE59");
  }, Error, "EncodingError U+BE59");
  assertThrows(() => {
    ms932Encoder.encode("\uBE5A");
  }, Error, "EncodingError U+BE5A");
  assertThrows(() => {
    ms932Encoder.encode("\uBE5B");
  }, Error, "EncodingError U+BE5B");
  assertThrows(() => {
    ms932Encoder.encode("\uBE5C");
  }, Error, "EncodingError U+BE5C");
  assertThrows(() => {
    ms932Encoder.encode("\uBE5D");
  }, Error, "EncodingError U+BE5D");
  assertThrows(() => {
    ms932Encoder.encode("\uBE5E");
  }, Error, "EncodingError U+BE5E");
  assertThrows(() => {
    ms932Encoder.encode("\uBE5F");
  }, Error, "EncodingError U+BE5F");
  assertThrows(() => {
    ms932Encoder.encode("\uBE60");
  }, Error, "EncodingError U+BE60");
  assertThrows(() => {
    ms932Encoder.encode("\uBE61");
  }, Error, "EncodingError U+BE61");
  assertThrows(() => {
    ms932Encoder.encode("\uBE62");
  }, Error, "EncodingError U+BE62");
  assertThrows(() => {
    ms932Encoder.encode("\uBE63");
  }, Error, "EncodingError U+BE63");
  assertThrows(() => {
    ms932Encoder.encode("\uBE64");
  }, Error, "EncodingError U+BE64");
  assertThrows(() => {
    ms932Encoder.encode("\uBE65");
  }, Error, "EncodingError U+BE65");
  assertThrows(() => {
    ms932Encoder.encode("\uBE66");
  }, Error, "EncodingError U+BE66");
  assertThrows(() => {
    ms932Encoder.encode("\uBE67");
  }, Error, "EncodingError U+BE67");
  assertThrows(() => {
    ms932Encoder.encode("\uBE68");
  }, Error, "EncodingError U+BE68");
  assertThrows(() => {
    ms932Encoder.encode("\uBE69");
  }, Error, "EncodingError U+BE69");
  assertThrows(() => {
    ms932Encoder.encode("\uBE6A");
  }, Error, "EncodingError U+BE6A");
  assertThrows(() => {
    ms932Encoder.encode("\uBE6B");
  }, Error, "EncodingError U+BE6B");
  assertThrows(() => {
    ms932Encoder.encode("\uBE6C");
  }, Error, "EncodingError U+BE6C");
  assertThrows(() => {
    ms932Encoder.encode("\uBE6D");
  }, Error, "EncodingError U+BE6D");
  assertThrows(() => {
    ms932Encoder.encode("\uBE6E");
  }, Error, "EncodingError U+BE6E");
  assertThrows(() => {
    ms932Encoder.encode("\uBE6F");
  }, Error, "EncodingError U+BE6F");
  assertThrows(() => {
    ms932Encoder.encode("\uBE70");
  }, Error, "EncodingError U+BE70");
  assertThrows(() => {
    ms932Encoder.encode("\uBE71");
  }, Error, "EncodingError U+BE71");
  assertThrows(() => {
    ms932Encoder.encode("\uBE72");
  }, Error, "EncodingError U+BE72");
  assertThrows(() => {
    ms932Encoder.encode("\uBE73");
  }, Error, "EncodingError U+BE73");
  assertThrows(() => {
    ms932Encoder.encode("\uBE74");
  }, Error, "EncodingError U+BE74");
  assertThrows(() => {
    ms932Encoder.encode("\uBE75");
  }, Error, "EncodingError U+BE75");
  assertThrows(() => {
    ms932Encoder.encode("\uBE76");
  }, Error, "EncodingError U+BE76");
  assertThrows(() => {
    ms932Encoder.encode("\uBE77");
  }, Error, "EncodingError U+BE77");
  assertThrows(() => {
    ms932Encoder.encode("\uBE78");
  }, Error, "EncodingError U+BE78");
  assertThrows(() => {
    ms932Encoder.encode("\uBE79");
  }, Error, "EncodingError U+BE79");
  assertThrows(() => {
    ms932Encoder.encode("\uBE7A");
  }, Error, "EncodingError U+BE7A");
  assertThrows(() => {
    ms932Encoder.encode("\uBE7B");
  }, Error, "EncodingError U+BE7B");
  assertThrows(() => {
    ms932Encoder.encode("\uBE7C");
  }, Error, "EncodingError U+BE7C");
  assertThrows(() => {
    ms932Encoder.encode("\uBE7D");
  }, Error, "EncodingError U+BE7D");
  assertThrows(() => {
    ms932Encoder.encode("\uBE7E");
  }, Error, "EncodingError U+BE7E");
  assertThrows(() => {
    ms932Encoder.encode("\uBE7F");
  }, Error, "EncodingError U+BE7F");
  assertThrows(() => {
    ms932Encoder.encode("\uBE80");
  }, Error, "EncodingError U+BE80");
  assertThrows(() => {
    ms932Encoder.encode("\uBE81");
  }, Error, "EncodingError U+BE81");
  assertThrows(() => {
    ms932Encoder.encode("\uBE82");
  }, Error, "EncodingError U+BE82");
  assertThrows(() => {
    ms932Encoder.encode("\uBE83");
  }, Error, "EncodingError U+BE83");
  assertThrows(() => {
    ms932Encoder.encode("\uBE84");
  }, Error, "EncodingError U+BE84");
  assertThrows(() => {
    ms932Encoder.encode("\uBE85");
  }, Error, "EncodingError U+BE85");
  assertThrows(() => {
    ms932Encoder.encode("\uBE86");
  }, Error, "EncodingError U+BE86");
  assertThrows(() => {
    ms932Encoder.encode("\uBE87");
  }, Error, "EncodingError U+BE87");
  assertThrows(() => {
    ms932Encoder.encode("\uBE88");
  }, Error, "EncodingError U+BE88");
  assertThrows(() => {
    ms932Encoder.encode("\uBE89");
  }, Error, "EncodingError U+BE89");
  assertThrows(() => {
    ms932Encoder.encode("\uBE8A");
  }, Error, "EncodingError U+BE8A");
  assertThrows(() => {
    ms932Encoder.encode("\uBE8B");
  }, Error, "EncodingError U+BE8B");
  assertThrows(() => {
    ms932Encoder.encode("\uBE8C");
  }, Error, "EncodingError U+BE8C");
  assertThrows(() => {
    ms932Encoder.encode("\uBE8D");
  }, Error, "EncodingError U+BE8D");
  assertThrows(() => {
    ms932Encoder.encode("\uBE8E");
  }, Error, "EncodingError U+BE8E");
  assertThrows(() => {
    ms932Encoder.encode("\uBE8F");
  }, Error, "EncodingError U+BE8F");
  assertThrows(() => {
    ms932Encoder.encode("\uBE90");
  }, Error, "EncodingError U+BE90");
  assertThrows(() => {
    ms932Encoder.encode("\uBE91");
  }, Error, "EncodingError U+BE91");
  assertThrows(() => {
    ms932Encoder.encode("\uBE92");
  }, Error, "EncodingError U+BE92");
  assertThrows(() => {
    ms932Encoder.encode("\uBE93");
  }, Error, "EncodingError U+BE93");
  assertThrows(() => {
    ms932Encoder.encode("\uBE94");
  }, Error, "EncodingError U+BE94");
  assertThrows(() => {
    ms932Encoder.encode("\uBE95");
  }, Error, "EncodingError U+BE95");
  assertThrows(() => {
    ms932Encoder.encode("\uBE96");
  }, Error, "EncodingError U+BE96");
  assertThrows(() => {
    ms932Encoder.encode("\uBE97");
  }, Error, "EncodingError U+BE97");
  assertThrows(() => {
    ms932Encoder.encode("\uBE98");
  }, Error, "EncodingError U+BE98");
  assertThrows(() => {
    ms932Encoder.encode("\uBE99");
  }, Error, "EncodingError U+BE99");
  assertThrows(() => {
    ms932Encoder.encode("\uBE9A");
  }, Error, "EncodingError U+BE9A");
  assertThrows(() => {
    ms932Encoder.encode("\uBE9B");
  }, Error, "EncodingError U+BE9B");
  assertThrows(() => {
    ms932Encoder.encode("\uBE9C");
  }, Error, "EncodingError U+BE9C");
  assertThrows(() => {
    ms932Encoder.encode("\uBE9D");
  }, Error, "EncodingError U+BE9D");
  assertThrows(() => {
    ms932Encoder.encode("\uBE9E");
  }, Error, "EncodingError U+BE9E");
  assertThrows(() => {
    ms932Encoder.encode("\uBE9F");
  }, Error, "EncodingError U+BE9F");
  assertThrows(() => {
    ms932Encoder.encode("\uBEA0");
  }, Error, "EncodingError U+BEA0");
  assertThrows(() => {
    ms932Encoder.encode("\uBEA1");
  }, Error, "EncodingError U+BEA1");
  assertThrows(() => {
    ms932Encoder.encode("\uBEA2");
  }, Error, "EncodingError U+BEA2");
  assertThrows(() => {
    ms932Encoder.encode("\uBEA3");
  }, Error, "EncodingError U+BEA3");
  assertThrows(() => {
    ms932Encoder.encode("\uBEA4");
  }, Error, "EncodingError U+BEA4");
  assertThrows(() => {
    ms932Encoder.encode("\uBEA5");
  }, Error, "EncodingError U+BEA5");
  assertThrows(() => {
    ms932Encoder.encode("\uBEA6");
  }, Error, "EncodingError U+BEA6");
  assertThrows(() => {
    ms932Encoder.encode("\uBEA7");
  }, Error, "EncodingError U+BEA7");
  assertThrows(() => {
    ms932Encoder.encode("\uBEA8");
  }, Error, "EncodingError U+BEA8");
  assertThrows(() => {
    ms932Encoder.encode("\uBEA9");
  }, Error, "EncodingError U+BEA9");
  assertThrows(() => {
    ms932Encoder.encode("\uBEAA");
  }, Error, "EncodingError U+BEAA");
  assertThrows(() => {
    ms932Encoder.encode("\uBEAB");
  }, Error, "EncodingError U+BEAB");
  assertThrows(() => {
    ms932Encoder.encode("\uBEAC");
  }, Error, "EncodingError U+BEAC");
  assertThrows(() => {
    ms932Encoder.encode("\uBEAD");
  }, Error, "EncodingError U+BEAD");
  assertThrows(() => {
    ms932Encoder.encode("\uBEAE");
  }, Error, "EncodingError U+BEAE");
  assertThrows(() => {
    ms932Encoder.encode("\uBEAF");
  }, Error, "EncodingError U+BEAF");
  assertThrows(() => {
    ms932Encoder.encode("\uBEB0");
  }, Error, "EncodingError U+BEB0");
  assertThrows(() => {
    ms932Encoder.encode("\uBEB1");
  }, Error, "EncodingError U+BEB1");
  assertThrows(() => {
    ms932Encoder.encode("\uBEB2");
  }, Error, "EncodingError U+BEB2");
  assertThrows(() => {
    ms932Encoder.encode("\uBEB3");
  }, Error, "EncodingError U+BEB3");
  assertThrows(() => {
    ms932Encoder.encode("\uBEB4");
  }, Error, "EncodingError U+BEB4");
  assertThrows(() => {
    ms932Encoder.encode("\uBEB5");
  }, Error, "EncodingError U+BEB5");
  assertThrows(() => {
    ms932Encoder.encode("\uBEB6");
  }, Error, "EncodingError U+BEB6");
  assertThrows(() => {
    ms932Encoder.encode("\uBEB7");
  }, Error, "EncodingError U+BEB7");
  assertThrows(() => {
    ms932Encoder.encode("\uBEB8");
  }, Error, "EncodingError U+BEB8");
  assertThrows(() => {
    ms932Encoder.encode("\uBEB9");
  }, Error, "EncodingError U+BEB9");
  assertThrows(() => {
    ms932Encoder.encode("\uBEBA");
  }, Error, "EncodingError U+BEBA");
  assertThrows(() => {
    ms932Encoder.encode("\uBEBB");
  }, Error, "EncodingError U+BEBB");
  assertThrows(() => {
    ms932Encoder.encode("\uBEBC");
  }, Error, "EncodingError U+BEBC");
  assertThrows(() => {
    ms932Encoder.encode("\uBEBD");
  }, Error, "EncodingError U+BEBD");
  assertThrows(() => {
    ms932Encoder.encode("\uBEBE");
  }, Error, "EncodingError U+BEBE");
  assertThrows(() => {
    ms932Encoder.encode("\uBEBF");
  }, Error, "EncodingError U+BEBF");
  assertThrows(() => {
    ms932Encoder.encode("\uBEC0");
  }, Error, "EncodingError U+BEC0");
  assertThrows(() => {
    ms932Encoder.encode("\uBEC1");
  }, Error, "EncodingError U+BEC1");
  assertThrows(() => {
    ms932Encoder.encode("\uBEC2");
  }, Error, "EncodingError U+BEC2");
  assertThrows(() => {
    ms932Encoder.encode("\uBEC3");
  }, Error, "EncodingError U+BEC3");
  assertThrows(() => {
    ms932Encoder.encode("\uBEC4");
  }, Error, "EncodingError U+BEC4");
  assertThrows(() => {
    ms932Encoder.encode("\uBEC5");
  }, Error, "EncodingError U+BEC5");
  assertThrows(() => {
    ms932Encoder.encode("\uBEC6");
  }, Error, "EncodingError U+BEC6");
  assertThrows(() => {
    ms932Encoder.encode("\uBEC7");
  }, Error, "EncodingError U+BEC7");
  assertThrows(() => {
    ms932Encoder.encode("\uBEC8");
  }, Error, "EncodingError U+BEC8");
  assertThrows(() => {
    ms932Encoder.encode("\uBEC9");
  }, Error, "EncodingError U+BEC9");
  assertThrows(() => {
    ms932Encoder.encode("\uBECA");
  }, Error, "EncodingError U+BECA");
  assertThrows(() => {
    ms932Encoder.encode("\uBECB");
  }, Error, "EncodingError U+BECB");
  assertThrows(() => {
    ms932Encoder.encode("\uBECC");
  }, Error, "EncodingError U+BECC");
  assertThrows(() => {
    ms932Encoder.encode("\uBECD");
  }, Error, "EncodingError U+BECD");
  assertThrows(() => {
    ms932Encoder.encode("\uBECE");
  }, Error, "EncodingError U+BECE");
  assertThrows(() => {
    ms932Encoder.encode("\uBECF");
  }, Error, "EncodingError U+BECF");
  assertThrows(() => {
    ms932Encoder.encode("\uBED0");
  }, Error, "EncodingError U+BED0");
  assertThrows(() => {
    ms932Encoder.encode("\uBED1");
  }, Error, "EncodingError U+BED1");
  assertThrows(() => {
    ms932Encoder.encode("\uBED2");
  }, Error, "EncodingError U+BED2");
  assertThrows(() => {
    ms932Encoder.encode("\uBED3");
  }, Error, "EncodingError U+BED3");
  assertThrows(() => {
    ms932Encoder.encode("\uBED4");
  }, Error, "EncodingError U+BED4");
  assertThrows(() => {
    ms932Encoder.encode("\uBED5");
  }, Error, "EncodingError U+BED5");
  assertThrows(() => {
    ms932Encoder.encode("\uBED6");
  }, Error, "EncodingError U+BED6");
  assertThrows(() => {
    ms932Encoder.encode("\uBED7");
  }, Error, "EncodingError U+BED7");
  assertThrows(() => {
    ms932Encoder.encode("\uBED8");
  }, Error, "EncodingError U+BED8");
  assertThrows(() => {
    ms932Encoder.encode("\uBED9");
  }, Error, "EncodingError U+BED9");
  assertThrows(() => {
    ms932Encoder.encode("\uBEDA");
  }, Error, "EncodingError U+BEDA");
  assertThrows(() => {
    ms932Encoder.encode("\uBEDB");
  }, Error, "EncodingError U+BEDB");
  assertThrows(() => {
    ms932Encoder.encode("\uBEDC");
  }, Error, "EncodingError U+BEDC");
  assertThrows(() => {
    ms932Encoder.encode("\uBEDD");
  }, Error, "EncodingError U+BEDD");
  assertThrows(() => {
    ms932Encoder.encode("\uBEDE");
  }, Error, "EncodingError U+BEDE");
  assertThrows(() => {
    ms932Encoder.encode("\uBEDF");
  }, Error, "EncodingError U+BEDF");
  assertThrows(() => {
    ms932Encoder.encode("\uBEE0");
  }, Error, "EncodingError U+BEE0");
  assertThrows(() => {
    ms932Encoder.encode("\uBEE1");
  }, Error, "EncodingError U+BEE1");
  assertThrows(() => {
    ms932Encoder.encode("\uBEE2");
  }, Error, "EncodingError U+BEE2");
  assertThrows(() => {
    ms932Encoder.encode("\uBEE3");
  }, Error, "EncodingError U+BEE3");
  assertThrows(() => {
    ms932Encoder.encode("\uBEE4");
  }, Error, "EncodingError U+BEE4");
  assertThrows(() => {
    ms932Encoder.encode("\uBEE5");
  }, Error, "EncodingError U+BEE5");
  assertThrows(() => {
    ms932Encoder.encode("\uBEE6");
  }, Error, "EncodingError U+BEE6");
  assertThrows(() => {
    ms932Encoder.encode("\uBEE7");
  }, Error, "EncodingError U+BEE7");
  assertThrows(() => {
    ms932Encoder.encode("\uBEE8");
  }, Error, "EncodingError U+BEE8");
  assertThrows(() => {
    ms932Encoder.encode("\uBEE9");
  }, Error, "EncodingError U+BEE9");
  assertThrows(() => {
    ms932Encoder.encode("\uBEEA");
  }, Error, "EncodingError U+BEEA");
  assertThrows(() => {
    ms932Encoder.encode("\uBEEB");
  }, Error, "EncodingError U+BEEB");
  assertThrows(() => {
    ms932Encoder.encode("\uBEEC");
  }, Error, "EncodingError U+BEEC");
  assertThrows(() => {
    ms932Encoder.encode("\uBEED");
  }, Error, "EncodingError U+BEED");
  assertThrows(() => {
    ms932Encoder.encode("\uBEEE");
  }, Error, "EncodingError U+BEEE");
  assertThrows(() => {
    ms932Encoder.encode("\uBEEF");
  }, Error, "EncodingError U+BEEF");
  assertThrows(() => {
    ms932Encoder.encode("\uBEF0");
  }, Error, "EncodingError U+BEF0");
  assertThrows(() => {
    ms932Encoder.encode("\uBEF1");
  }, Error, "EncodingError U+BEF1");
  assertThrows(() => {
    ms932Encoder.encode("\uBEF2");
  }, Error, "EncodingError U+BEF2");
  assertThrows(() => {
    ms932Encoder.encode("\uBEF3");
  }, Error, "EncodingError U+BEF3");
  assertThrows(() => {
    ms932Encoder.encode("\uBEF4");
  }, Error, "EncodingError U+BEF4");
  assertThrows(() => {
    ms932Encoder.encode("\uBEF5");
  }, Error, "EncodingError U+BEF5");
  assertThrows(() => {
    ms932Encoder.encode("\uBEF6");
  }, Error, "EncodingError U+BEF6");
  assertThrows(() => {
    ms932Encoder.encode("\uBEF7");
  }, Error, "EncodingError U+BEF7");
  assertThrows(() => {
    ms932Encoder.encode("\uBEF8");
  }, Error, "EncodingError U+BEF8");
  assertThrows(() => {
    ms932Encoder.encode("\uBEF9");
  }, Error, "EncodingError U+BEF9");
  assertThrows(() => {
    ms932Encoder.encode("\uBEFA");
  }, Error, "EncodingError U+BEFA");
  assertThrows(() => {
    ms932Encoder.encode("\uBEFB");
  }, Error, "EncodingError U+BEFB");
  assertThrows(() => {
    ms932Encoder.encode("\uBEFC");
  }, Error, "EncodingError U+BEFC");
  assertThrows(() => {
    ms932Encoder.encode("\uBEFD");
  }, Error, "EncodingError U+BEFD");
  assertThrows(() => {
    ms932Encoder.encode("\uBEFE");
  }, Error, "EncodingError U+BEFE");
  assertThrows(() => {
    ms932Encoder.encode("\uBEFF");
  }, Error, "EncodingError U+BEFF");
  assertThrows(() => {
    ms932Encoder.encode("\uBF00");
  }, Error, "EncodingError U+BF00");
  assertThrows(() => {
    ms932Encoder.encode("\uBF01");
  }, Error, "EncodingError U+BF01");
  assertThrows(() => {
    ms932Encoder.encode("\uBF02");
  }, Error, "EncodingError U+BF02");
  assertThrows(() => {
    ms932Encoder.encode("\uBF03");
  }, Error, "EncodingError U+BF03");
  assertThrows(() => {
    ms932Encoder.encode("\uBF04");
  }, Error, "EncodingError U+BF04");
  assertThrows(() => {
    ms932Encoder.encode("\uBF05");
  }, Error, "EncodingError U+BF05");
  assertThrows(() => {
    ms932Encoder.encode("\uBF06");
  }, Error, "EncodingError U+BF06");
  assertThrows(() => {
    ms932Encoder.encode("\uBF07");
  }, Error, "EncodingError U+BF07");
  assertThrows(() => {
    ms932Encoder.encode("\uBF08");
  }, Error, "EncodingError U+BF08");
  assertThrows(() => {
    ms932Encoder.encode("\uBF09");
  }, Error, "EncodingError U+BF09");
  assertThrows(() => {
    ms932Encoder.encode("\uBF0A");
  }, Error, "EncodingError U+BF0A");
  assertThrows(() => {
    ms932Encoder.encode("\uBF0B");
  }, Error, "EncodingError U+BF0B");
  assertThrows(() => {
    ms932Encoder.encode("\uBF0C");
  }, Error, "EncodingError U+BF0C");
  assertThrows(() => {
    ms932Encoder.encode("\uBF0D");
  }, Error, "EncodingError U+BF0D");
  assertThrows(() => {
    ms932Encoder.encode("\uBF0E");
  }, Error, "EncodingError U+BF0E");
  assertThrows(() => {
    ms932Encoder.encode("\uBF0F");
  }, Error, "EncodingError U+BF0F");
  assertThrows(() => {
    ms932Encoder.encode("\uBF10");
  }, Error, "EncodingError U+BF10");
  assertThrows(() => {
    ms932Encoder.encode("\uBF11");
  }, Error, "EncodingError U+BF11");
  assertThrows(() => {
    ms932Encoder.encode("\uBF12");
  }, Error, "EncodingError U+BF12");
  assertThrows(() => {
    ms932Encoder.encode("\uBF13");
  }, Error, "EncodingError U+BF13");
  assertThrows(() => {
    ms932Encoder.encode("\uBF14");
  }, Error, "EncodingError U+BF14");
  assertThrows(() => {
    ms932Encoder.encode("\uBF15");
  }, Error, "EncodingError U+BF15");
  assertThrows(() => {
    ms932Encoder.encode("\uBF16");
  }, Error, "EncodingError U+BF16");
  assertThrows(() => {
    ms932Encoder.encode("\uBF17");
  }, Error, "EncodingError U+BF17");
  assertThrows(() => {
    ms932Encoder.encode("\uBF18");
  }, Error, "EncodingError U+BF18");
  assertThrows(() => {
    ms932Encoder.encode("\uBF19");
  }, Error, "EncodingError U+BF19");
  assertThrows(() => {
    ms932Encoder.encode("\uBF1A");
  }, Error, "EncodingError U+BF1A");
  assertThrows(() => {
    ms932Encoder.encode("\uBF1B");
  }, Error, "EncodingError U+BF1B");
  assertThrows(() => {
    ms932Encoder.encode("\uBF1C");
  }, Error, "EncodingError U+BF1C");
  assertThrows(() => {
    ms932Encoder.encode("\uBF1D");
  }, Error, "EncodingError U+BF1D");
  assertThrows(() => {
    ms932Encoder.encode("\uBF1E");
  }, Error, "EncodingError U+BF1E");
  assertThrows(() => {
    ms932Encoder.encode("\uBF1F");
  }, Error, "EncodingError U+BF1F");
  assertThrows(() => {
    ms932Encoder.encode("\uBF20");
  }, Error, "EncodingError U+BF20");
  assertThrows(() => {
    ms932Encoder.encode("\uBF21");
  }, Error, "EncodingError U+BF21");
  assertThrows(() => {
    ms932Encoder.encode("\uBF22");
  }, Error, "EncodingError U+BF22");
  assertThrows(() => {
    ms932Encoder.encode("\uBF23");
  }, Error, "EncodingError U+BF23");
  assertThrows(() => {
    ms932Encoder.encode("\uBF24");
  }, Error, "EncodingError U+BF24");
  assertThrows(() => {
    ms932Encoder.encode("\uBF25");
  }, Error, "EncodingError U+BF25");
  assertThrows(() => {
    ms932Encoder.encode("\uBF26");
  }, Error, "EncodingError U+BF26");
  assertThrows(() => {
    ms932Encoder.encode("\uBF27");
  }, Error, "EncodingError U+BF27");
  assertThrows(() => {
    ms932Encoder.encode("\uBF28");
  }, Error, "EncodingError U+BF28");
  assertThrows(() => {
    ms932Encoder.encode("\uBF29");
  }, Error, "EncodingError U+BF29");
  assertThrows(() => {
    ms932Encoder.encode("\uBF2A");
  }, Error, "EncodingError U+BF2A");
  assertThrows(() => {
    ms932Encoder.encode("\uBF2B");
  }, Error, "EncodingError U+BF2B");
  assertThrows(() => {
    ms932Encoder.encode("\uBF2C");
  }, Error, "EncodingError U+BF2C");
  assertThrows(() => {
    ms932Encoder.encode("\uBF2D");
  }, Error, "EncodingError U+BF2D");
  assertThrows(() => {
    ms932Encoder.encode("\uBF2E");
  }, Error, "EncodingError U+BF2E");
  assertThrows(() => {
    ms932Encoder.encode("\uBF2F");
  }, Error, "EncodingError U+BF2F");
  assertThrows(() => {
    ms932Encoder.encode("\uBF30");
  }, Error, "EncodingError U+BF30");
  assertThrows(() => {
    ms932Encoder.encode("\uBF31");
  }, Error, "EncodingError U+BF31");
  assertThrows(() => {
    ms932Encoder.encode("\uBF32");
  }, Error, "EncodingError U+BF32");
  assertThrows(() => {
    ms932Encoder.encode("\uBF33");
  }, Error, "EncodingError U+BF33");
  assertThrows(() => {
    ms932Encoder.encode("\uBF34");
  }, Error, "EncodingError U+BF34");
  assertThrows(() => {
    ms932Encoder.encode("\uBF35");
  }, Error, "EncodingError U+BF35");
  assertThrows(() => {
    ms932Encoder.encode("\uBF36");
  }, Error, "EncodingError U+BF36");
  assertThrows(() => {
    ms932Encoder.encode("\uBF37");
  }, Error, "EncodingError U+BF37");
  assertThrows(() => {
    ms932Encoder.encode("\uBF38");
  }, Error, "EncodingError U+BF38");
  assertThrows(() => {
    ms932Encoder.encode("\uBF39");
  }, Error, "EncodingError U+BF39");
  assertThrows(() => {
    ms932Encoder.encode("\uBF3A");
  }, Error, "EncodingError U+BF3A");
  assertThrows(() => {
    ms932Encoder.encode("\uBF3B");
  }, Error, "EncodingError U+BF3B");
  assertThrows(() => {
    ms932Encoder.encode("\uBF3C");
  }, Error, "EncodingError U+BF3C");
  assertThrows(() => {
    ms932Encoder.encode("\uBF3D");
  }, Error, "EncodingError U+BF3D");
  assertThrows(() => {
    ms932Encoder.encode("\uBF3E");
  }, Error, "EncodingError U+BF3E");
  assertThrows(() => {
    ms932Encoder.encode("\uBF3F");
  }, Error, "EncodingError U+BF3F");
  assertThrows(() => {
    ms932Encoder.encode("\uBF40");
  }, Error, "EncodingError U+BF40");
  assertThrows(() => {
    ms932Encoder.encode("\uBF41");
  }, Error, "EncodingError U+BF41");
  assertThrows(() => {
    ms932Encoder.encode("\uBF42");
  }, Error, "EncodingError U+BF42");
  assertThrows(() => {
    ms932Encoder.encode("\uBF43");
  }, Error, "EncodingError U+BF43");
  assertThrows(() => {
    ms932Encoder.encode("\uBF44");
  }, Error, "EncodingError U+BF44");
  assertThrows(() => {
    ms932Encoder.encode("\uBF45");
  }, Error, "EncodingError U+BF45");
  assertThrows(() => {
    ms932Encoder.encode("\uBF46");
  }, Error, "EncodingError U+BF46");
  assertThrows(() => {
    ms932Encoder.encode("\uBF47");
  }, Error, "EncodingError U+BF47");
  assertThrows(() => {
    ms932Encoder.encode("\uBF48");
  }, Error, "EncodingError U+BF48");
  assertThrows(() => {
    ms932Encoder.encode("\uBF49");
  }, Error, "EncodingError U+BF49");
  assertThrows(() => {
    ms932Encoder.encode("\uBF4A");
  }, Error, "EncodingError U+BF4A");
  assertThrows(() => {
    ms932Encoder.encode("\uBF4B");
  }, Error, "EncodingError U+BF4B");
  assertThrows(() => {
    ms932Encoder.encode("\uBF4C");
  }, Error, "EncodingError U+BF4C");
  assertThrows(() => {
    ms932Encoder.encode("\uBF4D");
  }, Error, "EncodingError U+BF4D");
  assertThrows(() => {
    ms932Encoder.encode("\uBF4E");
  }, Error, "EncodingError U+BF4E");
  assertThrows(() => {
    ms932Encoder.encode("\uBF4F");
  }, Error, "EncodingError U+BF4F");
  assertThrows(() => {
    ms932Encoder.encode("\uBF50");
  }, Error, "EncodingError U+BF50");
  assertThrows(() => {
    ms932Encoder.encode("\uBF51");
  }, Error, "EncodingError U+BF51");
  assertThrows(() => {
    ms932Encoder.encode("\uBF52");
  }, Error, "EncodingError U+BF52");
  assertThrows(() => {
    ms932Encoder.encode("\uBF53");
  }, Error, "EncodingError U+BF53");
  assertThrows(() => {
    ms932Encoder.encode("\uBF54");
  }, Error, "EncodingError U+BF54");
  assertThrows(() => {
    ms932Encoder.encode("\uBF55");
  }, Error, "EncodingError U+BF55");
  assertThrows(() => {
    ms932Encoder.encode("\uBF56");
  }, Error, "EncodingError U+BF56");
  assertThrows(() => {
    ms932Encoder.encode("\uBF57");
  }, Error, "EncodingError U+BF57");
  assertThrows(() => {
    ms932Encoder.encode("\uBF58");
  }, Error, "EncodingError U+BF58");
  assertThrows(() => {
    ms932Encoder.encode("\uBF59");
  }, Error, "EncodingError U+BF59");
  assertThrows(() => {
    ms932Encoder.encode("\uBF5A");
  }, Error, "EncodingError U+BF5A");
  assertThrows(() => {
    ms932Encoder.encode("\uBF5B");
  }, Error, "EncodingError U+BF5B");
  assertThrows(() => {
    ms932Encoder.encode("\uBF5C");
  }, Error, "EncodingError U+BF5C");
  assertThrows(() => {
    ms932Encoder.encode("\uBF5D");
  }, Error, "EncodingError U+BF5D");
  assertThrows(() => {
    ms932Encoder.encode("\uBF5E");
  }, Error, "EncodingError U+BF5E");
  assertThrows(() => {
    ms932Encoder.encode("\uBF5F");
  }, Error, "EncodingError U+BF5F");
  assertThrows(() => {
    ms932Encoder.encode("\uBF60");
  }, Error, "EncodingError U+BF60");
  assertThrows(() => {
    ms932Encoder.encode("\uBF61");
  }, Error, "EncodingError U+BF61");
  assertThrows(() => {
    ms932Encoder.encode("\uBF62");
  }, Error, "EncodingError U+BF62");
  assertThrows(() => {
    ms932Encoder.encode("\uBF63");
  }, Error, "EncodingError U+BF63");
  assertThrows(() => {
    ms932Encoder.encode("\uBF64");
  }, Error, "EncodingError U+BF64");
  assertThrows(() => {
    ms932Encoder.encode("\uBF65");
  }, Error, "EncodingError U+BF65");
  assertThrows(() => {
    ms932Encoder.encode("\uBF66");
  }, Error, "EncodingError U+BF66");
  assertThrows(() => {
    ms932Encoder.encode("\uBF67");
  }, Error, "EncodingError U+BF67");
  assertThrows(() => {
    ms932Encoder.encode("\uBF68");
  }, Error, "EncodingError U+BF68");
  assertThrows(() => {
    ms932Encoder.encode("\uBF69");
  }, Error, "EncodingError U+BF69");
  assertThrows(() => {
    ms932Encoder.encode("\uBF6A");
  }, Error, "EncodingError U+BF6A");
  assertThrows(() => {
    ms932Encoder.encode("\uBF6B");
  }, Error, "EncodingError U+BF6B");
  assertThrows(() => {
    ms932Encoder.encode("\uBF6C");
  }, Error, "EncodingError U+BF6C");
  assertThrows(() => {
    ms932Encoder.encode("\uBF6D");
  }, Error, "EncodingError U+BF6D");
  assertThrows(() => {
    ms932Encoder.encode("\uBF6E");
  }, Error, "EncodingError U+BF6E");
  assertThrows(() => {
    ms932Encoder.encode("\uBF6F");
  }, Error, "EncodingError U+BF6F");
  assertThrows(() => {
    ms932Encoder.encode("\uBF70");
  }, Error, "EncodingError U+BF70");
  assertThrows(() => {
    ms932Encoder.encode("\uBF71");
  }, Error, "EncodingError U+BF71");
  assertThrows(() => {
    ms932Encoder.encode("\uBF72");
  }, Error, "EncodingError U+BF72");
  assertThrows(() => {
    ms932Encoder.encode("\uBF73");
  }, Error, "EncodingError U+BF73");
  assertThrows(() => {
    ms932Encoder.encode("\uBF74");
  }, Error, "EncodingError U+BF74");
  assertThrows(() => {
    ms932Encoder.encode("\uBF75");
  }, Error, "EncodingError U+BF75");
  assertThrows(() => {
    ms932Encoder.encode("\uBF76");
  }, Error, "EncodingError U+BF76");
  assertThrows(() => {
    ms932Encoder.encode("\uBF77");
  }, Error, "EncodingError U+BF77");
  assertThrows(() => {
    ms932Encoder.encode("\uBF78");
  }, Error, "EncodingError U+BF78");
  assertThrows(() => {
    ms932Encoder.encode("\uBF79");
  }, Error, "EncodingError U+BF79");
  assertThrows(() => {
    ms932Encoder.encode("\uBF7A");
  }, Error, "EncodingError U+BF7A");
  assertThrows(() => {
    ms932Encoder.encode("\uBF7B");
  }, Error, "EncodingError U+BF7B");
  assertThrows(() => {
    ms932Encoder.encode("\uBF7C");
  }, Error, "EncodingError U+BF7C");
  assertThrows(() => {
    ms932Encoder.encode("\uBF7D");
  }, Error, "EncodingError U+BF7D");
  assertThrows(() => {
    ms932Encoder.encode("\uBF7E");
  }, Error, "EncodingError U+BF7E");
  assertThrows(() => {
    ms932Encoder.encode("\uBF7F");
  }, Error, "EncodingError U+BF7F");
  assertThrows(() => {
    ms932Encoder.encode("\uBF80");
  }, Error, "EncodingError U+BF80");
  assertThrows(() => {
    ms932Encoder.encode("\uBF81");
  }, Error, "EncodingError U+BF81");
  assertThrows(() => {
    ms932Encoder.encode("\uBF82");
  }, Error, "EncodingError U+BF82");
  assertThrows(() => {
    ms932Encoder.encode("\uBF83");
  }, Error, "EncodingError U+BF83");
  assertThrows(() => {
    ms932Encoder.encode("\uBF84");
  }, Error, "EncodingError U+BF84");
  assertThrows(() => {
    ms932Encoder.encode("\uBF85");
  }, Error, "EncodingError U+BF85");
  assertThrows(() => {
    ms932Encoder.encode("\uBF86");
  }, Error, "EncodingError U+BF86");
  assertThrows(() => {
    ms932Encoder.encode("\uBF87");
  }, Error, "EncodingError U+BF87");
  assertThrows(() => {
    ms932Encoder.encode("\uBF88");
  }, Error, "EncodingError U+BF88");
  assertThrows(() => {
    ms932Encoder.encode("\uBF89");
  }, Error, "EncodingError U+BF89");
  assertThrows(() => {
    ms932Encoder.encode("\uBF8A");
  }, Error, "EncodingError U+BF8A");
  assertThrows(() => {
    ms932Encoder.encode("\uBF8B");
  }, Error, "EncodingError U+BF8B");
  assertThrows(() => {
    ms932Encoder.encode("\uBF8C");
  }, Error, "EncodingError U+BF8C");
  assertThrows(() => {
    ms932Encoder.encode("\uBF8D");
  }, Error, "EncodingError U+BF8D");
  assertThrows(() => {
    ms932Encoder.encode("\uBF8E");
  }, Error, "EncodingError U+BF8E");
  assertThrows(() => {
    ms932Encoder.encode("\uBF8F");
  }, Error, "EncodingError U+BF8F");
  assertThrows(() => {
    ms932Encoder.encode("\uBF90");
  }, Error, "EncodingError U+BF90");
  assertThrows(() => {
    ms932Encoder.encode("\uBF91");
  }, Error, "EncodingError U+BF91");
  assertThrows(() => {
    ms932Encoder.encode("\uBF92");
  }, Error, "EncodingError U+BF92");
  assertThrows(() => {
    ms932Encoder.encode("\uBF93");
  }, Error, "EncodingError U+BF93");
  assertThrows(() => {
    ms932Encoder.encode("\uBF94");
  }, Error, "EncodingError U+BF94");
  assertThrows(() => {
    ms932Encoder.encode("\uBF95");
  }, Error, "EncodingError U+BF95");
  assertThrows(() => {
    ms932Encoder.encode("\uBF96");
  }, Error, "EncodingError U+BF96");
  assertThrows(() => {
    ms932Encoder.encode("\uBF97");
  }, Error, "EncodingError U+BF97");
  assertThrows(() => {
    ms932Encoder.encode("\uBF98");
  }, Error, "EncodingError U+BF98");
  assertThrows(() => {
    ms932Encoder.encode("\uBF99");
  }, Error, "EncodingError U+BF99");
  assertThrows(() => {
    ms932Encoder.encode("\uBF9A");
  }, Error, "EncodingError U+BF9A");
  assertThrows(() => {
    ms932Encoder.encode("\uBF9B");
  }, Error, "EncodingError U+BF9B");
  assertThrows(() => {
    ms932Encoder.encode("\uBF9C");
  }, Error, "EncodingError U+BF9C");
  assertThrows(() => {
    ms932Encoder.encode("\uBF9D");
  }, Error, "EncodingError U+BF9D");
  assertThrows(() => {
    ms932Encoder.encode("\uBF9E");
  }, Error, "EncodingError U+BF9E");
  assertThrows(() => {
    ms932Encoder.encode("\uBF9F");
  }, Error, "EncodingError U+BF9F");
  assertThrows(() => {
    ms932Encoder.encode("\uBFA0");
  }, Error, "EncodingError U+BFA0");
  assertThrows(() => {
    ms932Encoder.encode("\uBFA1");
  }, Error, "EncodingError U+BFA1");
  assertThrows(() => {
    ms932Encoder.encode("\uBFA2");
  }, Error, "EncodingError U+BFA2");
  assertThrows(() => {
    ms932Encoder.encode("\uBFA3");
  }, Error, "EncodingError U+BFA3");
  assertThrows(() => {
    ms932Encoder.encode("\uBFA4");
  }, Error, "EncodingError U+BFA4");
  assertThrows(() => {
    ms932Encoder.encode("\uBFA5");
  }, Error, "EncodingError U+BFA5");
  assertThrows(() => {
    ms932Encoder.encode("\uBFA6");
  }, Error, "EncodingError U+BFA6");
  assertThrows(() => {
    ms932Encoder.encode("\uBFA7");
  }, Error, "EncodingError U+BFA7");
  assertThrows(() => {
    ms932Encoder.encode("\uBFA8");
  }, Error, "EncodingError U+BFA8");
  assertThrows(() => {
    ms932Encoder.encode("\uBFA9");
  }, Error, "EncodingError U+BFA9");
  assertThrows(() => {
    ms932Encoder.encode("\uBFAA");
  }, Error, "EncodingError U+BFAA");
  assertThrows(() => {
    ms932Encoder.encode("\uBFAB");
  }, Error, "EncodingError U+BFAB");
  assertThrows(() => {
    ms932Encoder.encode("\uBFAC");
  }, Error, "EncodingError U+BFAC");
  assertThrows(() => {
    ms932Encoder.encode("\uBFAD");
  }, Error, "EncodingError U+BFAD");
  assertThrows(() => {
    ms932Encoder.encode("\uBFAE");
  }, Error, "EncodingError U+BFAE");
  assertThrows(() => {
    ms932Encoder.encode("\uBFAF");
  }, Error, "EncodingError U+BFAF");
  assertThrows(() => {
    ms932Encoder.encode("\uBFB0");
  }, Error, "EncodingError U+BFB0");
  assertThrows(() => {
    ms932Encoder.encode("\uBFB1");
  }, Error, "EncodingError U+BFB1");
  assertThrows(() => {
    ms932Encoder.encode("\uBFB2");
  }, Error, "EncodingError U+BFB2");
  assertThrows(() => {
    ms932Encoder.encode("\uBFB3");
  }, Error, "EncodingError U+BFB3");
  assertThrows(() => {
    ms932Encoder.encode("\uBFB4");
  }, Error, "EncodingError U+BFB4");
  assertThrows(() => {
    ms932Encoder.encode("\uBFB5");
  }, Error, "EncodingError U+BFB5");
  assertThrows(() => {
    ms932Encoder.encode("\uBFB6");
  }, Error, "EncodingError U+BFB6");
  assertThrows(() => {
    ms932Encoder.encode("\uBFB7");
  }, Error, "EncodingError U+BFB7");
  assertThrows(() => {
    ms932Encoder.encode("\uBFB8");
  }, Error, "EncodingError U+BFB8");
  assertThrows(() => {
    ms932Encoder.encode("\uBFB9");
  }, Error, "EncodingError U+BFB9");
  assertThrows(() => {
    ms932Encoder.encode("\uBFBA");
  }, Error, "EncodingError U+BFBA");
  assertThrows(() => {
    ms932Encoder.encode("\uBFBB");
  }, Error, "EncodingError U+BFBB");
  assertThrows(() => {
    ms932Encoder.encode("\uBFBC");
  }, Error, "EncodingError U+BFBC");
  assertThrows(() => {
    ms932Encoder.encode("\uBFBD");
  }, Error, "EncodingError U+BFBD");
  assertThrows(() => {
    ms932Encoder.encode("\uBFBE");
  }, Error, "EncodingError U+BFBE");
  assertThrows(() => {
    ms932Encoder.encode("\uBFBF");
  }, Error, "EncodingError U+BFBF");
  assertThrows(() => {
    ms932Encoder.encode("\uBFC0");
  }, Error, "EncodingError U+BFC0");
  assertThrows(() => {
    ms932Encoder.encode("\uBFC1");
  }, Error, "EncodingError U+BFC1");
  assertThrows(() => {
    ms932Encoder.encode("\uBFC2");
  }, Error, "EncodingError U+BFC2");
  assertThrows(() => {
    ms932Encoder.encode("\uBFC3");
  }, Error, "EncodingError U+BFC3");
  assertThrows(() => {
    ms932Encoder.encode("\uBFC4");
  }, Error, "EncodingError U+BFC4");
  assertThrows(() => {
    ms932Encoder.encode("\uBFC5");
  }, Error, "EncodingError U+BFC5");
  assertThrows(() => {
    ms932Encoder.encode("\uBFC6");
  }, Error, "EncodingError U+BFC6");
  assertThrows(() => {
    ms932Encoder.encode("\uBFC7");
  }, Error, "EncodingError U+BFC7");
  assertThrows(() => {
    ms932Encoder.encode("\uBFC8");
  }, Error, "EncodingError U+BFC8");
  assertThrows(() => {
    ms932Encoder.encode("\uBFC9");
  }, Error, "EncodingError U+BFC9");
  assertThrows(() => {
    ms932Encoder.encode("\uBFCA");
  }, Error, "EncodingError U+BFCA");
  assertThrows(() => {
    ms932Encoder.encode("\uBFCB");
  }, Error, "EncodingError U+BFCB");
  assertThrows(() => {
    ms932Encoder.encode("\uBFCC");
  }, Error, "EncodingError U+BFCC");
  assertThrows(() => {
    ms932Encoder.encode("\uBFCD");
  }, Error, "EncodingError U+BFCD");
  assertThrows(() => {
    ms932Encoder.encode("\uBFCE");
  }, Error, "EncodingError U+BFCE");
  assertThrows(() => {
    ms932Encoder.encode("\uBFCF");
  }, Error, "EncodingError U+BFCF");
  assertThrows(() => {
    ms932Encoder.encode("\uBFD0");
  }, Error, "EncodingError U+BFD0");
  assertThrows(() => {
    ms932Encoder.encode("\uBFD1");
  }, Error, "EncodingError U+BFD1");
  assertThrows(() => {
    ms932Encoder.encode("\uBFD2");
  }, Error, "EncodingError U+BFD2");
  assertThrows(() => {
    ms932Encoder.encode("\uBFD3");
  }, Error, "EncodingError U+BFD3");
  assertThrows(() => {
    ms932Encoder.encode("\uBFD4");
  }, Error, "EncodingError U+BFD4");
  assertThrows(() => {
    ms932Encoder.encode("\uBFD5");
  }, Error, "EncodingError U+BFD5");
  assertThrows(() => {
    ms932Encoder.encode("\uBFD6");
  }, Error, "EncodingError U+BFD6");
  assertThrows(() => {
    ms932Encoder.encode("\uBFD7");
  }, Error, "EncodingError U+BFD7");
  assertThrows(() => {
    ms932Encoder.encode("\uBFD8");
  }, Error, "EncodingError U+BFD8");
  assertThrows(() => {
    ms932Encoder.encode("\uBFD9");
  }, Error, "EncodingError U+BFD9");
  assertThrows(() => {
    ms932Encoder.encode("\uBFDA");
  }, Error, "EncodingError U+BFDA");
  assertThrows(() => {
    ms932Encoder.encode("\uBFDB");
  }, Error, "EncodingError U+BFDB");
  assertThrows(() => {
    ms932Encoder.encode("\uBFDC");
  }, Error, "EncodingError U+BFDC");
  assertThrows(() => {
    ms932Encoder.encode("\uBFDD");
  }, Error, "EncodingError U+BFDD");
  assertThrows(() => {
    ms932Encoder.encode("\uBFDE");
  }, Error, "EncodingError U+BFDE");
  assertThrows(() => {
    ms932Encoder.encode("\uBFDF");
  }, Error, "EncodingError U+BFDF");
  assertThrows(() => {
    ms932Encoder.encode("\uBFE0");
  }, Error, "EncodingError U+BFE0");
  assertThrows(() => {
    ms932Encoder.encode("\uBFE1");
  }, Error, "EncodingError U+BFE1");
  assertThrows(() => {
    ms932Encoder.encode("\uBFE2");
  }, Error, "EncodingError U+BFE2");
  assertThrows(() => {
    ms932Encoder.encode("\uBFE3");
  }, Error, "EncodingError U+BFE3");
  assertThrows(() => {
    ms932Encoder.encode("\uBFE4");
  }, Error, "EncodingError U+BFE4");
  assertThrows(() => {
    ms932Encoder.encode("\uBFE5");
  }, Error, "EncodingError U+BFE5");
  assertThrows(() => {
    ms932Encoder.encode("\uBFE6");
  }, Error, "EncodingError U+BFE6");
  assertThrows(() => {
    ms932Encoder.encode("\uBFE7");
  }, Error, "EncodingError U+BFE7");
  assertThrows(() => {
    ms932Encoder.encode("\uBFE8");
  }, Error, "EncodingError U+BFE8");
  assertThrows(() => {
    ms932Encoder.encode("\uBFE9");
  }, Error, "EncodingError U+BFE9");
  assertThrows(() => {
    ms932Encoder.encode("\uBFEA");
  }, Error, "EncodingError U+BFEA");
  assertThrows(() => {
    ms932Encoder.encode("\uBFEB");
  }, Error, "EncodingError U+BFEB");
  assertThrows(() => {
    ms932Encoder.encode("\uBFEC");
  }, Error, "EncodingError U+BFEC");
  assertThrows(() => {
    ms932Encoder.encode("\uBFED");
  }, Error, "EncodingError U+BFED");
  assertThrows(() => {
    ms932Encoder.encode("\uBFEE");
  }, Error, "EncodingError U+BFEE");
  assertThrows(() => {
    ms932Encoder.encode("\uBFEF");
  }, Error, "EncodingError U+BFEF");
  assertThrows(() => {
    ms932Encoder.encode("\uBFF0");
  }, Error, "EncodingError U+BFF0");
  assertThrows(() => {
    ms932Encoder.encode("\uBFF1");
  }, Error, "EncodingError U+BFF1");
  assertThrows(() => {
    ms932Encoder.encode("\uBFF2");
  }, Error, "EncodingError U+BFF2");
  assertThrows(() => {
    ms932Encoder.encode("\uBFF3");
  }, Error, "EncodingError U+BFF3");
  assertThrows(() => {
    ms932Encoder.encode("\uBFF4");
  }, Error, "EncodingError U+BFF4");
  assertThrows(() => {
    ms932Encoder.encode("\uBFF5");
  }, Error, "EncodingError U+BFF5");
  assertThrows(() => {
    ms932Encoder.encode("\uBFF6");
  }, Error, "EncodingError U+BFF6");
  assertThrows(() => {
    ms932Encoder.encode("\uBFF7");
  }, Error, "EncodingError U+BFF7");
  assertThrows(() => {
    ms932Encoder.encode("\uBFF8");
  }, Error, "EncodingError U+BFF8");
  assertThrows(() => {
    ms932Encoder.encode("\uBFF9");
  }, Error, "EncodingError U+BFF9");
  assertThrows(() => {
    ms932Encoder.encode("\uBFFA");
  }, Error, "EncodingError U+BFFA");
  assertThrows(() => {
    ms932Encoder.encode("\uBFFB");
  }, Error, "EncodingError U+BFFB");
  assertThrows(() => {
    ms932Encoder.encode("\uBFFC");
  }, Error, "EncodingError U+BFFC");
  assertThrows(() => {
    ms932Encoder.encode("\uBFFD");
  }, Error, "EncodingError U+BFFD");
  assertThrows(() => {
    ms932Encoder.encode("\uBFFE");
  }, Error, "EncodingError U+BFFE");
  assertThrows(() => {
    ms932Encoder.encode("\uBFFF");
  }, Error, "EncodingError U+BFFF");

});
