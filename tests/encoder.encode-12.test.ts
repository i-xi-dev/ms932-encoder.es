import { assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+B000-U+BFFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  assertThrows(
    () => {
      ms932Encoder.encode("\uB000");
    },
    Error,
    "encode-error: U+B000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB001");
    },
    Error,
    "encode-error: U+B001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB002");
    },
    Error,
    "encode-error: U+B002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB003");
    },
    Error,
    "encode-error: U+B003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB004");
    },
    Error,
    "encode-error: U+B004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB005");
    },
    Error,
    "encode-error: U+B005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB006");
    },
    Error,
    "encode-error: U+B006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB007");
    },
    Error,
    "encode-error: U+B007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB008");
    },
    Error,
    "encode-error: U+B008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB009");
    },
    Error,
    "encode-error: U+B009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB00A");
    },
    Error,
    "encode-error: U+B00A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB00B");
    },
    Error,
    "encode-error: U+B00B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB00C");
    },
    Error,
    "encode-error: U+B00C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB00D");
    },
    Error,
    "encode-error: U+B00D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB00E");
    },
    Error,
    "encode-error: U+B00E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB00F");
    },
    Error,
    "encode-error: U+B00F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB010");
    },
    Error,
    "encode-error: U+B010",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB011");
    },
    Error,
    "encode-error: U+B011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB012");
    },
    Error,
    "encode-error: U+B012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB013");
    },
    Error,
    "encode-error: U+B013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB014");
    },
    Error,
    "encode-error: U+B014",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB015");
    },
    Error,
    "encode-error: U+B015",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB016");
    },
    Error,
    "encode-error: U+B016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB017");
    },
    Error,
    "encode-error: U+B017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB018");
    },
    Error,
    "encode-error: U+B018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB019");
    },
    Error,
    "encode-error: U+B019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB01A");
    },
    Error,
    "encode-error: U+B01A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB01B");
    },
    Error,
    "encode-error: U+B01B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB01C");
    },
    Error,
    "encode-error: U+B01C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB01D");
    },
    Error,
    "encode-error: U+B01D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB01E");
    },
    Error,
    "encode-error: U+B01E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB01F");
    },
    Error,
    "encode-error: U+B01F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB020");
    },
    Error,
    "encode-error: U+B020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB021");
    },
    Error,
    "encode-error: U+B021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB022");
    },
    Error,
    "encode-error: U+B022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB023");
    },
    Error,
    "encode-error: U+B023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB024");
    },
    Error,
    "encode-error: U+B024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB025");
    },
    Error,
    "encode-error: U+B025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB026");
    },
    Error,
    "encode-error: U+B026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB027");
    },
    Error,
    "encode-error: U+B027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB028");
    },
    Error,
    "encode-error: U+B028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB029");
    },
    Error,
    "encode-error: U+B029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB02A");
    },
    Error,
    "encode-error: U+B02A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB02B");
    },
    Error,
    "encode-error: U+B02B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB02C");
    },
    Error,
    "encode-error: U+B02C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB02D");
    },
    Error,
    "encode-error: U+B02D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB02E");
    },
    Error,
    "encode-error: U+B02E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB02F");
    },
    Error,
    "encode-error: U+B02F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB030");
    },
    Error,
    "encode-error: U+B030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB031");
    },
    Error,
    "encode-error: U+B031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB032");
    },
    Error,
    "encode-error: U+B032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB033");
    },
    Error,
    "encode-error: U+B033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB034");
    },
    Error,
    "encode-error: U+B034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB035");
    },
    Error,
    "encode-error: U+B035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB036");
    },
    Error,
    "encode-error: U+B036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB037");
    },
    Error,
    "encode-error: U+B037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB038");
    },
    Error,
    "encode-error: U+B038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB039");
    },
    Error,
    "encode-error: U+B039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB03A");
    },
    Error,
    "encode-error: U+B03A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB03B");
    },
    Error,
    "encode-error: U+B03B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB03C");
    },
    Error,
    "encode-error: U+B03C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB03D");
    },
    Error,
    "encode-error: U+B03D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB03E");
    },
    Error,
    "encode-error: U+B03E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB03F");
    },
    Error,
    "encode-error: U+B03F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB040");
    },
    Error,
    "encode-error: U+B040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB041");
    },
    Error,
    "encode-error: U+B041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB042");
    },
    Error,
    "encode-error: U+B042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB043");
    },
    Error,
    "encode-error: U+B043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB044");
    },
    Error,
    "encode-error: U+B044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB045");
    },
    Error,
    "encode-error: U+B045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB046");
    },
    Error,
    "encode-error: U+B046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB047");
    },
    Error,
    "encode-error: U+B047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB048");
    },
    Error,
    "encode-error: U+B048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB049");
    },
    Error,
    "encode-error: U+B049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB04A");
    },
    Error,
    "encode-error: U+B04A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB04B");
    },
    Error,
    "encode-error: U+B04B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB04C");
    },
    Error,
    "encode-error: U+B04C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB04D");
    },
    Error,
    "encode-error: U+B04D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB04E");
    },
    Error,
    "encode-error: U+B04E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB04F");
    },
    Error,
    "encode-error: U+B04F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB050");
    },
    Error,
    "encode-error: U+B050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB051");
    },
    Error,
    "encode-error: U+B051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB052");
    },
    Error,
    "encode-error: U+B052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB053");
    },
    Error,
    "encode-error: U+B053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB054");
    },
    Error,
    "encode-error: U+B054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB055");
    },
    Error,
    "encode-error: U+B055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB056");
    },
    Error,
    "encode-error: U+B056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB057");
    },
    Error,
    "encode-error: U+B057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB058");
    },
    Error,
    "encode-error: U+B058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB059");
    },
    Error,
    "encode-error: U+B059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB05A");
    },
    Error,
    "encode-error: U+B05A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB05B");
    },
    Error,
    "encode-error: U+B05B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB05C");
    },
    Error,
    "encode-error: U+B05C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB05D");
    },
    Error,
    "encode-error: U+B05D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB05E");
    },
    Error,
    "encode-error: U+B05E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB05F");
    },
    Error,
    "encode-error: U+B05F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB060");
    },
    Error,
    "encode-error: U+B060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB061");
    },
    Error,
    "encode-error: U+B061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB062");
    },
    Error,
    "encode-error: U+B062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB063");
    },
    Error,
    "encode-error: U+B063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB064");
    },
    Error,
    "encode-error: U+B064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB065");
    },
    Error,
    "encode-error: U+B065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB066");
    },
    Error,
    "encode-error: U+B066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB067");
    },
    Error,
    "encode-error: U+B067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB068");
    },
    Error,
    "encode-error: U+B068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB069");
    },
    Error,
    "encode-error: U+B069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB06A");
    },
    Error,
    "encode-error: U+B06A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB06B");
    },
    Error,
    "encode-error: U+B06B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB06C");
    },
    Error,
    "encode-error: U+B06C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB06D");
    },
    Error,
    "encode-error: U+B06D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB06E");
    },
    Error,
    "encode-error: U+B06E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB06F");
    },
    Error,
    "encode-error: U+B06F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB070");
    },
    Error,
    "encode-error: U+B070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB071");
    },
    Error,
    "encode-error: U+B071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB072");
    },
    Error,
    "encode-error: U+B072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB073");
    },
    Error,
    "encode-error: U+B073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB074");
    },
    Error,
    "encode-error: U+B074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB075");
    },
    Error,
    "encode-error: U+B075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB076");
    },
    Error,
    "encode-error: U+B076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB077");
    },
    Error,
    "encode-error: U+B077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB078");
    },
    Error,
    "encode-error: U+B078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB079");
    },
    Error,
    "encode-error: U+B079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB07A");
    },
    Error,
    "encode-error: U+B07A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB07B");
    },
    Error,
    "encode-error: U+B07B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB07C");
    },
    Error,
    "encode-error: U+B07C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB07D");
    },
    Error,
    "encode-error: U+B07D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB07E");
    },
    Error,
    "encode-error: U+B07E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB07F");
    },
    Error,
    "encode-error: U+B07F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB080");
    },
    Error,
    "encode-error: U+B080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB081");
    },
    Error,
    "encode-error: U+B081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB082");
    },
    Error,
    "encode-error: U+B082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB083");
    },
    Error,
    "encode-error: U+B083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB084");
    },
    Error,
    "encode-error: U+B084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB085");
    },
    Error,
    "encode-error: U+B085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB086");
    },
    Error,
    "encode-error: U+B086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB087");
    },
    Error,
    "encode-error: U+B087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB088");
    },
    Error,
    "encode-error: U+B088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB089");
    },
    Error,
    "encode-error: U+B089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB08A");
    },
    Error,
    "encode-error: U+B08A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB08B");
    },
    Error,
    "encode-error: U+B08B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB08C");
    },
    Error,
    "encode-error: U+B08C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB08D");
    },
    Error,
    "encode-error: U+B08D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB08E");
    },
    Error,
    "encode-error: U+B08E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB08F");
    },
    Error,
    "encode-error: U+B08F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB090");
    },
    Error,
    "encode-error: U+B090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB091");
    },
    Error,
    "encode-error: U+B091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB092");
    },
    Error,
    "encode-error: U+B092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB093");
    },
    Error,
    "encode-error: U+B093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB094");
    },
    Error,
    "encode-error: U+B094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB095");
    },
    Error,
    "encode-error: U+B095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB096");
    },
    Error,
    "encode-error: U+B096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB097");
    },
    Error,
    "encode-error: U+B097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB098");
    },
    Error,
    "encode-error: U+B098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB099");
    },
    Error,
    "encode-error: U+B099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB09A");
    },
    Error,
    "encode-error: U+B09A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB09B");
    },
    Error,
    "encode-error: U+B09B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB09C");
    },
    Error,
    "encode-error: U+B09C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB09D");
    },
    Error,
    "encode-error: U+B09D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB09E");
    },
    Error,
    "encode-error: U+B09E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB09F");
    },
    Error,
    "encode-error: U+B09F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0A0");
    },
    Error,
    "encode-error: U+B0A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0A1");
    },
    Error,
    "encode-error: U+B0A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0A2");
    },
    Error,
    "encode-error: U+B0A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0A3");
    },
    Error,
    "encode-error: U+B0A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0A4");
    },
    Error,
    "encode-error: U+B0A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0A5");
    },
    Error,
    "encode-error: U+B0A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0A6");
    },
    Error,
    "encode-error: U+B0A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0A7");
    },
    Error,
    "encode-error: U+B0A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0A8");
    },
    Error,
    "encode-error: U+B0A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0A9");
    },
    Error,
    "encode-error: U+B0A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0AA");
    },
    Error,
    "encode-error: U+B0AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0AB");
    },
    Error,
    "encode-error: U+B0AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0AC");
    },
    Error,
    "encode-error: U+B0AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0AD");
    },
    Error,
    "encode-error: U+B0AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0AE");
    },
    Error,
    "encode-error: U+B0AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0AF");
    },
    Error,
    "encode-error: U+B0AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0B0");
    },
    Error,
    "encode-error: U+B0B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0B1");
    },
    Error,
    "encode-error: U+B0B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0B2");
    },
    Error,
    "encode-error: U+B0B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0B3");
    },
    Error,
    "encode-error: U+B0B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0B4");
    },
    Error,
    "encode-error: U+B0B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0B5");
    },
    Error,
    "encode-error: U+B0B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0B6");
    },
    Error,
    "encode-error: U+B0B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0B7");
    },
    Error,
    "encode-error: U+B0B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0B8");
    },
    Error,
    "encode-error: U+B0B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0B9");
    },
    Error,
    "encode-error: U+B0B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0BA");
    },
    Error,
    "encode-error: U+B0BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0BB");
    },
    Error,
    "encode-error: U+B0BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0BC");
    },
    Error,
    "encode-error: U+B0BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0BD");
    },
    Error,
    "encode-error: U+B0BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0BE");
    },
    Error,
    "encode-error: U+B0BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0BF");
    },
    Error,
    "encode-error: U+B0BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0C0");
    },
    Error,
    "encode-error: U+B0C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0C1");
    },
    Error,
    "encode-error: U+B0C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0C2");
    },
    Error,
    "encode-error: U+B0C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0C3");
    },
    Error,
    "encode-error: U+B0C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0C4");
    },
    Error,
    "encode-error: U+B0C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0C5");
    },
    Error,
    "encode-error: U+B0C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0C6");
    },
    Error,
    "encode-error: U+B0C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0C7");
    },
    Error,
    "encode-error: U+B0C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0C8");
    },
    Error,
    "encode-error: U+B0C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0C9");
    },
    Error,
    "encode-error: U+B0C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0CA");
    },
    Error,
    "encode-error: U+B0CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0CB");
    },
    Error,
    "encode-error: U+B0CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0CC");
    },
    Error,
    "encode-error: U+B0CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0CD");
    },
    Error,
    "encode-error: U+B0CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0CE");
    },
    Error,
    "encode-error: U+B0CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0CF");
    },
    Error,
    "encode-error: U+B0CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0D0");
    },
    Error,
    "encode-error: U+B0D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0D1");
    },
    Error,
    "encode-error: U+B0D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0D2");
    },
    Error,
    "encode-error: U+B0D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0D3");
    },
    Error,
    "encode-error: U+B0D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0D4");
    },
    Error,
    "encode-error: U+B0D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0D5");
    },
    Error,
    "encode-error: U+B0D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0D6");
    },
    Error,
    "encode-error: U+B0D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0D7");
    },
    Error,
    "encode-error: U+B0D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0D8");
    },
    Error,
    "encode-error: U+B0D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0D9");
    },
    Error,
    "encode-error: U+B0D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0DA");
    },
    Error,
    "encode-error: U+B0DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0DB");
    },
    Error,
    "encode-error: U+B0DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0DC");
    },
    Error,
    "encode-error: U+B0DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0DD");
    },
    Error,
    "encode-error: U+B0DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0DE");
    },
    Error,
    "encode-error: U+B0DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0DF");
    },
    Error,
    "encode-error: U+B0DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0E0");
    },
    Error,
    "encode-error: U+B0E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0E1");
    },
    Error,
    "encode-error: U+B0E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0E2");
    },
    Error,
    "encode-error: U+B0E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0E3");
    },
    Error,
    "encode-error: U+B0E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0E4");
    },
    Error,
    "encode-error: U+B0E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0E5");
    },
    Error,
    "encode-error: U+B0E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0E6");
    },
    Error,
    "encode-error: U+B0E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0E7");
    },
    Error,
    "encode-error: U+B0E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0E8");
    },
    Error,
    "encode-error: U+B0E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0E9");
    },
    Error,
    "encode-error: U+B0E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0EA");
    },
    Error,
    "encode-error: U+B0EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0EB");
    },
    Error,
    "encode-error: U+B0EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0EC");
    },
    Error,
    "encode-error: U+B0EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0ED");
    },
    Error,
    "encode-error: U+B0ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0EE");
    },
    Error,
    "encode-error: U+B0EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0EF");
    },
    Error,
    "encode-error: U+B0EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0F0");
    },
    Error,
    "encode-error: U+B0F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0F1");
    },
    Error,
    "encode-error: U+B0F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0F2");
    },
    Error,
    "encode-error: U+B0F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0F3");
    },
    Error,
    "encode-error: U+B0F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0F4");
    },
    Error,
    "encode-error: U+B0F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0F5");
    },
    Error,
    "encode-error: U+B0F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0F6");
    },
    Error,
    "encode-error: U+B0F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0F7");
    },
    Error,
    "encode-error: U+B0F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0F8");
    },
    Error,
    "encode-error: U+B0F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0F9");
    },
    Error,
    "encode-error: U+B0F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0FA");
    },
    Error,
    "encode-error: U+B0FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0FB");
    },
    Error,
    "encode-error: U+B0FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0FC");
    },
    Error,
    "encode-error: U+B0FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0FD");
    },
    Error,
    "encode-error: U+B0FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0FE");
    },
    Error,
    "encode-error: U+B0FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB0FF");
    },
    Error,
    "encode-error: U+B0FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB100");
    },
    Error,
    "encode-error: U+B100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB101");
    },
    Error,
    "encode-error: U+B101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB102");
    },
    Error,
    "encode-error: U+B102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB103");
    },
    Error,
    "encode-error: U+B103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB104");
    },
    Error,
    "encode-error: U+B104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB105");
    },
    Error,
    "encode-error: U+B105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB106");
    },
    Error,
    "encode-error: U+B106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB107");
    },
    Error,
    "encode-error: U+B107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB108");
    },
    Error,
    "encode-error: U+B108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB109");
    },
    Error,
    "encode-error: U+B109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB10A");
    },
    Error,
    "encode-error: U+B10A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB10B");
    },
    Error,
    "encode-error: U+B10B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB10C");
    },
    Error,
    "encode-error: U+B10C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB10D");
    },
    Error,
    "encode-error: U+B10D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB10E");
    },
    Error,
    "encode-error: U+B10E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB10F");
    },
    Error,
    "encode-error: U+B10F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB110");
    },
    Error,
    "encode-error: U+B110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB111");
    },
    Error,
    "encode-error: U+B111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB112");
    },
    Error,
    "encode-error: U+B112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB113");
    },
    Error,
    "encode-error: U+B113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB114");
    },
    Error,
    "encode-error: U+B114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB115");
    },
    Error,
    "encode-error: U+B115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB116");
    },
    Error,
    "encode-error: U+B116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB117");
    },
    Error,
    "encode-error: U+B117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB118");
    },
    Error,
    "encode-error: U+B118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB119");
    },
    Error,
    "encode-error: U+B119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB11A");
    },
    Error,
    "encode-error: U+B11A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB11B");
    },
    Error,
    "encode-error: U+B11B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB11C");
    },
    Error,
    "encode-error: U+B11C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB11D");
    },
    Error,
    "encode-error: U+B11D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB11E");
    },
    Error,
    "encode-error: U+B11E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB11F");
    },
    Error,
    "encode-error: U+B11F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB120");
    },
    Error,
    "encode-error: U+B120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB121");
    },
    Error,
    "encode-error: U+B121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB122");
    },
    Error,
    "encode-error: U+B122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB123");
    },
    Error,
    "encode-error: U+B123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB124");
    },
    Error,
    "encode-error: U+B124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB125");
    },
    Error,
    "encode-error: U+B125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB126");
    },
    Error,
    "encode-error: U+B126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB127");
    },
    Error,
    "encode-error: U+B127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB128");
    },
    Error,
    "encode-error: U+B128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB129");
    },
    Error,
    "encode-error: U+B129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB12A");
    },
    Error,
    "encode-error: U+B12A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB12B");
    },
    Error,
    "encode-error: U+B12B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB12C");
    },
    Error,
    "encode-error: U+B12C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB12D");
    },
    Error,
    "encode-error: U+B12D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB12E");
    },
    Error,
    "encode-error: U+B12E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB12F");
    },
    Error,
    "encode-error: U+B12F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB130");
    },
    Error,
    "encode-error: U+B130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB131");
    },
    Error,
    "encode-error: U+B131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB132");
    },
    Error,
    "encode-error: U+B132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB133");
    },
    Error,
    "encode-error: U+B133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB134");
    },
    Error,
    "encode-error: U+B134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB135");
    },
    Error,
    "encode-error: U+B135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB136");
    },
    Error,
    "encode-error: U+B136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB137");
    },
    Error,
    "encode-error: U+B137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB138");
    },
    Error,
    "encode-error: U+B138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB139");
    },
    Error,
    "encode-error: U+B139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB13A");
    },
    Error,
    "encode-error: U+B13A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB13B");
    },
    Error,
    "encode-error: U+B13B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB13C");
    },
    Error,
    "encode-error: U+B13C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB13D");
    },
    Error,
    "encode-error: U+B13D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB13E");
    },
    Error,
    "encode-error: U+B13E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB13F");
    },
    Error,
    "encode-error: U+B13F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB140");
    },
    Error,
    "encode-error: U+B140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB141");
    },
    Error,
    "encode-error: U+B141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB142");
    },
    Error,
    "encode-error: U+B142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB143");
    },
    Error,
    "encode-error: U+B143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB144");
    },
    Error,
    "encode-error: U+B144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB145");
    },
    Error,
    "encode-error: U+B145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB146");
    },
    Error,
    "encode-error: U+B146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB147");
    },
    Error,
    "encode-error: U+B147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB148");
    },
    Error,
    "encode-error: U+B148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB149");
    },
    Error,
    "encode-error: U+B149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB14A");
    },
    Error,
    "encode-error: U+B14A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB14B");
    },
    Error,
    "encode-error: U+B14B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB14C");
    },
    Error,
    "encode-error: U+B14C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB14D");
    },
    Error,
    "encode-error: U+B14D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB14E");
    },
    Error,
    "encode-error: U+B14E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB14F");
    },
    Error,
    "encode-error: U+B14F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB150");
    },
    Error,
    "encode-error: U+B150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB151");
    },
    Error,
    "encode-error: U+B151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB152");
    },
    Error,
    "encode-error: U+B152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB153");
    },
    Error,
    "encode-error: U+B153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB154");
    },
    Error,
    "encode-error: U+B154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB155");
    },
    Error,
    "encode-error: U+B155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB156");
    },
    Error,
    "encode-error: U+B156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB157");
    },
    Error,
    "encode-error: U+B157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB158");
    },
    Error,
    "encode-error: U+B158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB159");
    },
    Error,
    "encode-error: U+B159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB15A");
    },
    Error,
    "encode-error: U+B15A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB15B");
    },
    Error,
    "encode-error: U+B15B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB15C");
    },
    Error,
    "encode-error: U+B15C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB15D");
    },
    Error,
    "encode-error: U+B15D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB15E");
    },
    Error,
    "encode-error: U+B15E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB15F");
    },
    Error,
    "encode-error: U+B15F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB160");
    },
    Error,
    "encode-error: U+B160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB161");
    },
    Error,
    "encode-error: U+B161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB162");
    },
    Error,
    "encode-error: U+B162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB163");
    },
    Error,
    "encode-error: U+B163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB164");
    },
    Error,
    "encode-error: U+B164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB165");
    },
    Error,
    "encode-error: U+B165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB166");
    },
    Error,
    "encode-error: U+B166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB167");
    },
    Error,
    "encode-error: U+B167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB168");
    },
    Error,
    "encode-error: U+B168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB169");
    },
    Error,
    "encode-error: U+B169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB16A");
    },
    Error,
    "encode-error: U+B16A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB16B");
    },
    Error,
    "encode-error: U+B16B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB16C");
    },
    Error,
    "encode-error: U+B16C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB16D");
    },
    Error,
    "encode-error: U+B16D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB16E");
    },
    Error,
    "encode-error: U+B16E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB16F");
    },
    Error,
    "encode-error: U+B16F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB170");
    },
    Error,
    "encode-error: U+B170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB171");
    },
    Error,
    "encode-error: U+B171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB172");
    },
    Error,
    "encode-error: U+B172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB173");
    },
    Error,
    "encode-error: U+B173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB174");
    },
    Error,
    "encode-error: U+B174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB175");
    },
    Error,
    "encode-error: U+B175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB176");
    },
    Error,
    "encode-error: U+B176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB177");
    },
    Error,
    "encode-error: U+B177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB178");
    },
    Error,
    "encode-error: U+B178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB179");
    },
    Error,
    "encode-error: U+B179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB17A");
    },
    Error,
    "encode-error: U+B17A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB17B");
    },
    Error,
    "encode-error: U+B17B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB17C");
    },
    Error,
    "encode-error: U+B17C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB17D");
    },
    Error,
    "encode-error: U+B17D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB17E");
    },
    Error,
    "encode-error: U+B17E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB17F");
    },
    Error,
    "encode-error: U+B17F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB180");
    },
    Error,
    "encode-error: U+B180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB181");
    },
    Error,
    "encode-error: U+B181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB182");
    },
    Error,
    "encode-error: U+B182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB183");
    },
    Error,
    "encode-error: U+B183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB184");
    },
    Error,
    "encode-error: U+B184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB185");
    },
    Error,
    "encode-error: U+B185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB186");
    },
    Error,
    "encode-error: U+B186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB187");
    },
    Error,
    "encode-error: U+B187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB188");
    },
    Error,
    "encode-error: U+B188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB189");
    },
    Error,
    "encode-error: U+B189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB18A");
    },
    Error,
    "encode-error: U+B18A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB18B");
    },
    Error,
    "encode-error: U+B18B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB18C");
    },
    Error,
    "encode-error: U+B18C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB18D");
    },
    Error,
    "encode-error: U+B18D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB18E");
    },
    Error,
    "encode-error: U+B18E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB18F");
    },
    Error,
    "encode-error: U+B18F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB190");
    },
    Error,
    "encode-error: U+B190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB191");
    },
    Error,
    "encode-error: U+B191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB192");
    },
    Error,
    "encode-error: U+B192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB193");
    },
    Error,
    "encode-error: U+B193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB194");
    },
    Error,
    "encode-error: U+B194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB195");
    },
    Error,
    "encode-error: U+B195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB196");
    },
    Error,
    "encode-error: U+B196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB197");
    },
    Error,
    "encode-error: U+B197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB198");
    },
    Error,
    "encode-error: U+B198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB199");
    },
    Error,
    "encode-error: U+B199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB19A");
    },
    Error,
    "encode-error: U+B19A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB19B");
    },
    Error,
    "encode-error: U+B19B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB19C");
    },
    Error,
    "encode-error: U+B19C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB19D");
    },
    Error,
    "encode-error: U+B19D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB19E");
    },
    Error,
    "encode-error: U+B19E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB19F");
    },
    Error,
    "encode-error: U+B19F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1A0");
    },
    Error,
    "encode-error: U+B1A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1A1");
    },
    Error,
    "encode-error: U+B1A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1A2");
    },
    Error,
    "encode-error: U+B1A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1A3");
    },
    Error,
    "encode-error: U+B1A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1A4");
    },
    Error,
    "encode-error: U+B1A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1A5");
    },
    Error,
    "encode-error: U+B1A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1A6");
    },
    Error,
    "encode-error: U+B1A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1A7");
    },
    Error,
    "encode-error: U+B1A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1A8");
    },
    Error,
    "encode-error: U+B1A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1A9");
    },
    Error,
    "encode-error: U+B1A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1AA");
    },
    Error,
    "encode-error: U+B1AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1AB");
    },
    Error,
    "encode-error: U+B1AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1AC");
    },
    Error,
    "encode-error: U+B1AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1AD");
    },
    Error,
    "encode-error: U+B1AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1AE");
    },
    Error,
    "encode-error: U+B1AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1AF");
    },
    Error,
    "encode-error: U+B1AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1B0");
    },
    Error,
    "encode-error: U+B1B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1B1");
    },
    Error,
    "encode-error: U+B1B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1B2");
    },
    Error,
    "encode-error: U+B1B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1B3");
    },
    Error,
    "encode-error: U+B1B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1B4");
    },
    Error,
    "encode-error: U+B1B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1B5");
    },
    Error,
    "encode-error: U+B1B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1B6");
    },
    Error,
    "encode-error: U+B1B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1B7");
    },
    Error,
    "encode-error: U+B1B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1B8");
    },
    Error,
    "encode-error: U+B1B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1B9");
    },
    Error,
    "encode-error: U+B1B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1BA");
    },
    Error,
    "encode-error: U+B1BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1BB");
    },
    Error,
    "encode-error: U+B1BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1BC");
    },
    Error,
    "encode-error: U+B1BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1BD");
    },
    Error,
    "encode-error: U+B1BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1BE");
    },
    Error,
    "encode-error: U+B1BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1BF");
    },
    Error,
    "encode-error: U+B1BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1C0");
    },
    Error,
    "encode-error: U+B1C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1C1");
    },
    Error,
    "encode-error: U+B1C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1C2");
    },
    Error,
    "encode-error: U+B1C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1C3");
    },
    Error,
    "encode-error: U+B1C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1C4");
    },
    Error,
    "encode-error: U+B1C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1C5");
    },
    Error,
    "encode-error: U+B1C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1C6");
    },
    Error,
    "encode-error: U+B1C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1C7");
    },
    Error,
    "encode-error: U+B1C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1C8");
    },
    Error,
    "encode-error: U+B1C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1C9");
    },
    Error,
    "encode-error: U+B1C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1CA");
    },
    Error,
    "encode-error: U+B1CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1CB");
    },
    Error,
    "encode-error: U+B1CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1CC");
    },
    Error,
    "encode-error: U+B1CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1CD");
    },
    Error,
    "encode-error: U+B1CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1CE");
    },
    Error,
    "encode-error: U+B1CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1CF");
    },
    Error,
    "encode-error: U+B1CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1D0");
    },
    Error,
    "encode-error: U+B1D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1D1");
    },
    Error,
    "encode-error: U+B1D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1D2");
    },
    Error,
    "encode-error: U+B1D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1D3");
    },
    Error,
    "encode-error: U+B1D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1D4");
    },
    Error,
    "encode-error: U+B1D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1D5");
    },
    Error,
    "encode-error: U+B1D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1D6");
    },
    Error,
    "encode-error: U+B1D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1D7");
    },
    Error,
    "encode-error: U+B1D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1D8");
    },
    Error,
    "encode-error: U+B1D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1D9");
    },
    Error,
    "encode-error: U+B1D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1DA");
    },
    Error,
    "encode-error: U+B1DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1DB");
    },
    Error,
    "encode-error: U+B1DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1DC");
    },
    Error,
    "encode-error: U+B1DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1DD");
    },
    Error,
    "encode-error: U+B1DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1DE");
    },
    Error,
    "encode-error: U+B1DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1DF");
    },
    Error,
    "encode-error: U+B1DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1E0");
    },
    Error,
    "encode-error: U+B1E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1E1");
    },
    Error,
    "encode-error: U+B1E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1E2");
    },
    Error,
    "encode-error: U+B1E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1E3");
    },
    Error,
    "encode-error: U+B1E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1E4");
    },
    Error,
    "encode-error: U+B1E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1E5");
    },
    Error,
    "encode-error: U+B1E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1E6");
    },
    Error,
    "encode-error: U+B1E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1E7");
    },
    Error,
    "encode-error: U+B1E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1E8");
    },
    Error,
    "encode-error: U+B1E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1E9");
    },
    Error,
    "encode-error: U+B1E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1EA");
    },
    Error,
    "encode-error: U+B1EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1EB");
    },
    Error,
    "encode-error: U+B1EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1EC");
    },
    Error,
    "encode-error: U+B1EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1ED");
    },
    Error,
    "encode-error: U+B1ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1EE");
    },
    Error,
    "encode-error: U+B1EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1EF");
    },
    Error,
    "encode-error: U+B1EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1F0");
    },
    Error,
    "encode-error: U+B1F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1F1");
    },
    Error,
    "encode-error: U+B1F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1F2");
    },
    Error,
    "encode-error: U+B1F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1F3");
    },
    Error,
    "encode-error: U+B1F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1F4");
    },
    Error,
    "encode-error: U+B1F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1F5");
    },
    Error,
    "encode-error: U+B1F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1F6");
    },
    Error,
    "encode-error: U+B1F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1F7");
    },
    Error,
    "encode-error: U+B1F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1F8");
    },
    Error,
    "encode-error: U+B1F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1F9");
    },
    Error,
    "encode-error: U+B1F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1FA");
    },
    Error,
    "encode-error: U+B1FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1FB");
    },
    Error,
    "encode-error: U+B1FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1FC");
    },
    Error,
    "encode-error: U+B1FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1FD");
    },
    Error,
    "encode-error: U+B1FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1FE");
    },
    Error,
    "encode-error: U+B1FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB1FF");
    },
    Error,
    "encode-error: U+B1FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB200");
    },
    Error,
    "encode-error: U+B200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB201");
    },
    Error,
    "encode-error: U+B201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB202");
    },
    Error,
    "encode-error: U+B202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB203");
    },
    Error,
    "encode-error: U+B203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB204");
    },
    Error,
    "encode-error: U+B204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB205");
    },
    Error,
    "encode-error: U+B205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB206");
    },
    Error,
    "encode-error: U+B206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB207");
    },
    Error,
    "encode-error: U+B207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB208");
    },
    Error,
    "encode-error: U+B208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB209");
    },
    Error,
    "encode-error: U+B209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB20A");
    },
    Error,
    "encode-error: U+B20A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB20B");
    },
    Error,
    "encode-error: U+B20B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB20C");
    },
    Error,
    "encode-error: U+B20C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB20D");
    },
    Error,
    "encode-error: U+B20D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB20E");
    },
    Error,
    "encode-error: U+B20E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB20F");
    },
    Error,
    "encode-error: U+B20F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB210");
    },
    Error,
    "encode-error: U+B210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB211");
    },
    Error,
    "encode-error: U+B211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB212");
    },
    Error,
    "encode-error: U+B212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB213");
    },
    Error,
    "encode-error: U+B213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB214");
    },
    Error,
    "encode-error: U+B214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB215");
    },
    Error,
    "encode-error: U+B215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB216");
    },
    Error,
    "encode-error: U+B216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB217");
    },
    Error,
    "encode-error: U+B217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB218");
    },
    Error,
    "encode-error: U+B218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB219");
    },
    Error,
    "encode-error: U+B219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB21A");
    },
    Error,
    "encode-error: U+B21A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB21B");
    },
    Error,
    "encode-error: U+B21B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB21C");
    },
    Error,
    "encode-error: U+B21C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB21D");
    },
    Error,
    "encode-error: U+B21D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB21E");
    },
    Error,
    "encode-error: U+B21E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB21F");
    },
    Error,
    "encode-error: U+B21F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB220");
    },
    Error,
    "encode-error: U+B220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB221");
    },
    Error,
    "encode-error: U+B221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB222");
    },
    Error,
    "encode-error: U+B222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB223");
    },
    Error,
    "encode-error: U+B223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB224");
    },
    Error,
    "encode-error: U+B224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB225");
    },
    Error,
    "encode-error: U+B225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB226");
    },
    Error,
    "encode-error: U+B226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB227");
    },
    Error,
    "encode-error: U+B227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB228");
    },
    Error,
    "encode-error: U+B228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB229");
    },
    Error,
    "encode-error: U+B229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB22A");
    },
    Error,
    "encode-error: U+B22A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB22B");
    },
    Error,
    "encode-error: U+B22B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB22C");
    },
    Error,
    "encode-error: U+B22C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB22D");
    },
    Error,
    "encode-error: U+B22D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB22E");
    },
    Error,
    "encode-error: U+B22E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB22F");
    },
    Error,
    "encode-error: U+B22F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB230");
    },
    Error,
    "encode-error: U+B230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB231");
    },
    Error,
    "encode-error: U+B231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB232");
    },
    Error,
    "encode-error: U+B232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB233");
    },
    Error,
    "encode-error: U+B233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB234");
    },
    Error,
    "encode-error: U+B234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB235");
    },
    Error,
    "encode-error: U+B235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB236");
    },
    Error,
    "encode-error: U+B236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB237");
    },
    Error,
    "encode-error: U+B237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB238");
    },
    Error,
    "encode-error: U+B238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB239");
    },
    Error,
    "encode-error: U+B239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB23A");
    },
    Error,
    "encode-error: U+B23A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB23B");
    },
    Error,
    "encode-error: U+B23B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB23C");
    },
    Error,
    "encode-error: U+B23C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB23D");
    },
    Error,
    "encode-error: U+B23D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB23E");
    },
    Error,
    "encode-error: U+B23E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB23F");
    },
    Error,
    "encode-error: U+B23F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB240");
    },
    Error,
    "encode-error: U+B240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB241");
    },
    Error,
    "encode-error: U+B241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB242");
    },
    Error,
    "encode-error: U+B242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB243");
    },
    Error,
    "encode-error: U+B243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB244");
    },
    Error,
    "encode-error: U+B244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB245");
    },
    Error,
    "encode-error: U+B245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB246");
    },
    Error,
    "encode-error: U+B246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB247");
    },
    Error,
    "encode-error: U+B247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB248");
    },
    Error,
    "encode-error: U+B248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB249");
    },
    Error,
    "encode-error: U+B249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB24A");
    },
    Error,
    "encode-error: U+B24A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB24B");
    },
    Error,
    "encode-error: U+B24B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB24C");
    },
    Error,
    "encode-error: U+B24C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB24D");
    },
    Error,
    "encode-error: U+B24D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB24E");
    },
    Error,
    "encode-error: U+B24E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB24F");
    },
    Error,
    "encode-error: U+B24F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB250");
    },
    Error,
    "encode-error: U+B250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB251");
    },
    Error,
    "encode-error: U+B251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB252");
    },
    Error,
    "encode-error: U+B252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB253");
    },
    Error,
    "encode-error: U+B253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB254");
    },
    Error,
    "encode-error: U+B254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB255");
    },
    Error,
    "encode-error: U+B255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB256");
    },
    Error,
    "encode-error: U+B256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB257");
    },
    Error,
    "encode-error: U+B257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB258");
    },
    Error,
    "encode-error: U+B258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB259");
    },
    Error,
    "encode-error: U+B259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB25A");
    },
    Error,
    "encode-error: U+B25A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB25B");
    },
    Error,
    "encode-error: U+B25B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB25C");
    },
    Error,
    "encode-error: U+B25C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB25D");
    },
    Error,
    "encode-error: U+B25D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB25E");
    },
    Error,
    "encode-error: U+B25E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB25F");
    },
    Error,
    "encode-error: U+B25F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB260");
    },
    Error,
    "encode-error: U+B260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB261");
    },
    Error,
    "encode-error: U+B261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB262");
    },
    Error,
    "encode-error: U+B262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB263");
    },
    Error,
    "encode-error: U+B263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB264");
    },
    Error,
    "encode-error: U+B264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB265");
    },
    Error,
    "encode-error: U+B265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB266");
    },
    Error,
    "encode-error: U+B266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB267");
    },
    Error,
    "encode-error: U+B267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB268");
    },
    Error,
    "encode-error: U+B268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB269");
    },
    Error,
    "encode-error: U+B269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB26A");
    },
    Error,
    "encode-error: U+B26A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB26B");
    },
    Error,
    "encode-error: U+B26B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB26C");
    },
    Error,
    "encode-error: U+B26C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB26D");
    },
    Error,
    "encode-error: U+B26D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB26E");
    },
    Error,
    "encode-error: U+B26E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB26F");
    },
    Error,
    "encode-error: U+B26F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB270");
    },
    Error,
    "encode-error: U+B270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB271");
    },
    Error,
    "encode-error: U+B271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB272");
    },
    Error,
    "encode-error: U+B272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB273");
    },
    Error,
    "encode-error: U+B273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB274");
    },
    Error,
    "encode-error: U+B274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB275");
    },
    Error,
    "encode-error: U+B275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB276");
    },
    Error,
    "encode-error: U+B276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB277");
    },
    Error,
    "encode-error: U+B277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB278");
    },
    Error,
    "encode-error: U+B278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB279");
    },
    Error,
    "encode-error: U+B279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB27A");
    },
    Error,
    "encode-error: U+B27A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB27B");
    },
    Error,
    "encode-error: U+B27B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB27C");
    },
    Error,
    "encode-error: U+B27C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB27D");
    },
    Error,
    "encode-error: U+B27D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB27E");
    },
    Error,
    "encode-error: U+B27E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB27F");
    },
    Error,
    "encode-error: U+B27F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB280");
    },
    Error,
    "encode-error: U+B280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB281");
    },
    Error,
    "encode-error: U+B281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB282");
    },
    Error,
    "encode-error: U+B282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB283");
    },
    Error,
    "encode-error: U+B283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB284");
    },
    Error,
    "encode-error: U+B284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB285");
    },
    Error,
    "encode-error: U+B285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB286");
    },
    Error,
    "encode-error: U+B286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB287");
    },
    Error,
    "encode-error: U+B287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB288");
    },
    Error,
    "encode-error: U+B288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB289");
    },
    Error,
    "encode-error: U+B289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB28A");
    },
    Error,
    "encode-error: U+B28A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB28B");
    },
    Error,
    "encode-error: U+B28B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB28C");
    },
    Error,
    "encode-error: U+B28C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB28D");
    },
    Error,
    "encode-error: U+B28D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB28E");
    },
    Error,
    "encode-error: U+B28E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB28F");
    },
    Error,
    "encode-error: U+B28F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB290");
    },
    Error,
    "encode-error: U+B290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB291");
    },
    Error,
    "encode-error: U+B291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB292");
    },
    Error,
    "encode-error: U+B292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB293");
    },
    Error,
    "encode-error: U+B293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB294");
    },
    Error,
    "encode-error: U+B294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB295");
    },
    Error,
    "encode-error: U+B295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB296");
    },
    Error,
    "encode-error: U+B296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB297");
    },
    Error,
    "encode-error: U+B297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB298");
    },
    Error,
    "encode-error: U+B298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB299");
    },
    Error,
    "encode-error: U+B299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB29A");
    },
    Error,
    "encode-error: U+B29A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB29B");
    },
    Error,
    "encode-error: U+B29B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB29C");
    },
    Error,
    "encode-error: U+B29C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB29D");
    },
    Error,
    "encode-error: U+B29D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB29E");
    },
    Error,
    "encode-error: U+B29E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB29F");
    },
    Error,
    "encode-error: U+B29F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2A0");
    },
    Error,
    "encode-error: U+B2A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2A1");
    },
    Error,
    "encode-error: U+B2A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2A2");
    },
    Error,
    "encode-error: U+B2A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2A3");
    },
    Error,
    "encode-error: U+B2A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2A4");
    },
    Error,
    "encode-error: U+B2A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2A5");
    },
    Error,
    "encode-error: U+B2A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2A6");
    },
    Error,
    "encode-error: U+B2A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2A7");
    },
    Error,
    "encode-error: U+B2A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2A8");
    },
    Error,
    "encode-error: U+B2A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2A9");
    },
    Error,
    "encode-error: U+B2A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2AA");
    },
    Error,
    "encode-error: U+B2AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2AB");
    },
    Error,
    "encode-error: U+B2AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2AC");
    },
    Error,
    "encode-error: U+B2AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2AD");
    },
    Error,
    "encode-error: U+B2AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2AE");
    },
    Error,
    "encode-error: U+B2AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2AF");
    },
    Error,
    "encode-error: U+B2AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2B0");
    },
    Error,
    "encode-error: U+B2B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2B1");
    },
    Error,
    "encode-error: U+B2B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2B2");
    },
    Error,
    "encode-error: U+B2B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2B3");
    },
    Error,
    "encode-error: U+B2B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2B4");
    },
    Error,
    "encode-error: U+B2B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2B5");
    },
    Error,
    "encode-error: U+B2B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2B6");
    },
    Error,
    "encode-error: U+B2B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2B7");
    },
    Error,
    "encode-error: U+B2B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2B8");
    },
    Error,
    "encode-error: U+B2B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2B9");
    },
    Error,
    "encode-error: U+B2B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2BA");
    },
    Error,
    "encode-error: U+B2BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2BB");
    },
    Error,
    "encode-error: U+B2BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2BC");
    },
    Error,
    "encode-error: U+B2BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2BD");
    },
    Error,
    "encode-error: U+B2BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2BE");
    },
    Error,
    "encode-error: U+B2BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2BF");
    },
    Error,
    "encode-error: U+B2BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2C0");
    },
    Error,
    "encode-error: U+B2C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2C1");
    },
    Error,
    "encode-error: U+B2C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2C2");
    },
    Error,
    "encode-error: U+B2C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2C3");
    },
    Error,
    "encode-error: U+B2C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2C4");
    },
    Error,
    "encode-error: U+B2C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2C5");
    },
    Error,
    "encode-error: U+B2C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2C6");
    },
    Error,
    "encode-error: U+B2C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2C7");
    },
    Error,
    "encode-error: U+B2C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2C8");
    },
    Error,
    "encode-error: U+B2C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2C9");
    },
    Error,
    "encode-error: U+B2C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2CA");
    },
    Error,
    "encode-error: U+B2CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2CB");
    },
    Error,
    "encode-error: U+B2CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2CC");
    },
    Error,
    "encode-error: U+B2CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2CD");
    },
    Error,
    "encode-error: U+B2CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2CE");
    },
    Error,
    "encode-error: U+B2CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2CF");
    },
    Error,
    "encode-error: U+B2CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2D0");
    },
    Error,
    "encode-error: U+B2D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2D1");
    },
    Error,
    "encode-error: U+B2D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2D2");
    },
    Error,
    "encode-error: U+B2D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2D3");
    },
    Error,
    "encode-error: U+B2D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2D4");
    },
    Error,
    "encode-error: U+B2D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2D5");
    },
    Error,
    "encode-error: U+B2D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2D6");
    },
    Error,
    "encode-error: U+B2D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2D7");
    },
    Error,
    "encode-error: U+B2D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2D8");
    },
    Error,
    "encode-error: U+B2D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2D9");
    },
    Error,
    "encode-error: U+B2D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2DA");
    },
    Error,
    "encode-error: U+B2DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2DB");
    },
    Error,
    "encode-error: U+B2DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2DC");
    },
    Error,
    "encode-error: U+B2DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2DD");
    },
    Error,
    "encode-error: U+B2DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2DE");
    },
    Error,
    "encode-error: U+B2DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2DF");
    },
    Error,
    "encode-error: U+B2DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2E0");
    },
    Error,
    "encode-error: U+B2E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2E1");
    },
    Error,
    "encode-error: U+B2E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2E2");
    },
    Error,
    "encode-error: U+B2E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2E3");
    },
    Error,
    "encode-error: U+B2E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2E4");
    },
    Error,
    "encode-error: U+B2E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2E5");
    },
    Error,
    "encode-error: U+B2E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2E6");
    },
    Error,
    "encode-error: U+B2E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2E7");
    },
    Error,
    "encode-error: U+B2E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2E8");
    },
    Error,
    "encode-error: U+B2E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2E9");
    },
    Error,
    "encode-error: U+B2E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2EA");
    },
    Error,
    "encode-error: U+B2EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2EB");
    },
    Error,
    "encode-error: U+B2EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2EC");
    },
    Error,
    "encode-error: U+B2EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2ED");
    },
    Error,
    "encode-error: U+B2ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2EE");
    },
    Error,
    "encode-error: U+B2EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2EF");
    },
    Error,
    "encode-error: U+B2EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2F0");
    },
    Error,
    "encode-error: U+B2F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2F1");
    },
    Error,
    "encode-error: U+B2F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2F2");
    },
    Error,
    "encode-error: U+B2F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2F3");
    },
    Error,
    "encode-error: U+B2F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2F4");
    },
    Error,
    "encode-error: U+B2F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2F5");
    },
    Error,
    "encode-error: U+B2F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2F6");
    },
    Error,
    "encode-error: U+B2F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2F7");
    },
    Error,
    "encode-error: U+B2F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2F8");
    },
    Error,
    "encode-error: U+B2F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2F9");
    },
    Error,
    "encode-error: U+B2F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2FA");
    },
    Error,
    "encode-error: U+B2FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2FB");
    },
    Error,
    "encode-error: U+B2FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2FC");
    },
    Error,
    "encode-error: U+B2FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2FD");
    },
    Error,
    "encode-error: U+B2FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2FE");
    },
    Error,
    "encode-error: U+B2FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB2FF");
    },
    Error,
    "encode-error: U+B2FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB300");
    },
    Error,
    "encode-error: U+B300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB301");
    },
    Error,
    "encode-error: U+B301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB302");
    },
    Error,
    "encode-error: U+B302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB303");
    },
    Error,
    "encode-error: U+B303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB304");
    },
    Error,
    "encode-error: U+B304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB305");
    },
    Error,
    "encode-error: U+B305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB306");
    },
    Error,
    "encode-error: U+B306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB307");
    },
    Error,
    "encode-error: U+B307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB308");
    },
    Error,
    "encode-error: U+B308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB309");
    },
    Error,
    "encode-error: U+B309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB30A");
    },
    Error,
    "encode-error: U+B30A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB30B");
    },
    Error,
    "encode-error: U+B30B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB30C");
    },
    Error,
    "encode-error: U+B30C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB30D");
    },
    Error,
    "encode-error: U+B30D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB30E");
    },
    Error,
    "encode-error: U+B30E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB30F");
    },
    Error,
    "encode-error: U+B30F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB310");
    },
    Error,
    "encode-error: U+B310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB311");
    },
    Error,
    "encode-error: U+B311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB312");
    },
    Error,
    "encode-error: U+B312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB313");
    },
    Error,
    "encode-error: U+B313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB314");
    },
    Error,
    "encode-error: U+B314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB315");
    },
    Error,
    "encode-error: U+B315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB316");
    },
    Error,
    "encode-error: U+B316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB317");
    },
    Error,
    "encode-error: U+B317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB318");
    },
    Error,
    "encode-error: U+B318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB319");
    },
    Error,
    "encode-error: U+B319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB31A");
    },
    Error,
    "encode-error: U+B31A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB31B");
    },
    Error,
    "encode-error: U+B31B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB31C");
    },
    Error,
    "encode-error: U+B31C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB31D");
    },
    Error,
    "encode-error: U+B31D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB31E");
    },
    Error,
    "encode-error: U+B31E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB31F");
    },
    Error,
    "encode-error: U+B31F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB320");
    },
    Error,
    "encode-error: U+B320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB321");
    },
    Error,
    "encode-error: U+B321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB322");
    },
    Error,
    "encode-error: U+B322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB323");
    },
    Error,
    "encode-error: U+B323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB324");
    },
    Error,
    "encode-error: U+B324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB325");
    },
    Error,
    "encode-error: U+B325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB326");
    },
    Error,
    "encode-error: U+B326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB327");
    },
    Error,
    "encode-error: U+B327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB328");
    },
    Error,
    "encode-error: U+B328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB329");
    },
    Error,
    "encode-error: U+B329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB32A");
    },
    Error,
    "encode-error: U+B32A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB32B");
    },
    Error,
    "encode-error: U+B32B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB32C");
    },
    Error,
    "encode-error: U+B32C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB32D");
    },
    Error,
    "encode-error: U+B32D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB32E");
    },
    Error,
    "encode-error: U+B32E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB32F");
    },
    Error,
    "encode-error: U+B32F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB330");
    },
    Error,
    "encode-error: U+B330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB331");
    },
    Error,
    "encode-error: U+B331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB332");
    },
    Error,
    "encode-error: U+B332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB333");
    },
    Error,
    "encode-error: U+B333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB334");
    },
    Error,
    "encode-error: U+B334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB335");
    },
    Error,
    "encode-error: U+B335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB336");
    },
    Error,
    "encode-error: U+B336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB337");
    },
    Error,
    "encode-error: U+B337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB338");
    },
    Error,
    "encode-error: U+B338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB339");
    },
    Error,
    "encode-error: U+B339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB33A");
    },
    Error,
    "encode-error: U+B33A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB33B");
    },
    Error,
    "encode-error: U+B33B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB33C");
    },
    Error,
    "encode-error: U+B33C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB33D");
    },
    Error,
    "encode-error: U+B33D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB33E");
    },
    Error,
    "encode-error: U+B33E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB33F");
    },
    Error,
    "encode-error: U+B33F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB340");
    },
    Error,
    "encode-error: U+B340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB341");
    },
    Error,
    "encode-error: U+B341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB342");
    },
    Error,
    "encode-error: U+B342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB343");
    },
    Error,
    "encode-error: U+B343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB344");
    },
    Error,
    "encode-error: U+B344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB345");
    },
    Error,
    "encode-error: U+B345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB346");
    },
    Error,
    "encode-error: U+B346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB347");
    },
    Error,
    "encode-error: U+B347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB348");
    },
    Error,
    "encode-error: U+B348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB349");
    },
    Error,
    "encode-error: U+B349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB34A");
    },
    Error,
    "encode-error: U+B34A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB34B");
    },
    Error,
    "encode-error: U+B34B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB34C");
    },
    Error,
    "encode-error: U+B34C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB34D");
    },
    Error,
    "encode-error: U+B34D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB34E");
    },
    Error,
    "encode-error: U+B34E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB34F");
    },
    Error,
    "encode-error: U+B34F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB350");
    },
    Error,
    "encode-error: U+B350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB351");
    },
    Error,
    "encode-error: U+B351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB352");
    },
    Error,
    "encode-error: U+B352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB353");
    },
    Error,
    "encode-error: U+B353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB354");
    },
    Error,
    "encode-error: U+B354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB355");
    },
    Error,
    "encode-error: U+B355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB356");
    },
    Error,
    "encode-error: U+B356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB357");
    },
    Error,
    "encode-error: U+B357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB358");
    },
    Error,
    "encode-error: U+B358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB359");
    },
    Error,
    "encode-error: U+B359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB35A");
    },
    Error,
    "encode-error: U+B35A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB35B");
    },
    Error,
    "encode-error: U+B35B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB35C");
    },
    Error,
    "encode-error: U+B35C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB35D");
    },
    Error,
    "encode-error: U+B35D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB35E");
    },
    Error,
    "encode-error: U+B35E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB35F");
    },
    Error,
    "encode-error: U+B35F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB360");
    },
    Error,
    "encode-error: U+B360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB361");
    },
    Error,
    "encode-error: U+B361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB362");
    },
    Error,
    "encode-error: U+B362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB363");
    },
    Error,
    "encode-error: U+B363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB364");
    },
    Error,
    "encode-error: U+B364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB365");
    },
    Error,
    "encode-error: U+B365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB366");
    },
    Error,
    "encode-error: U+B366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB367");
    },
    Error,
    "encode-error: U+B367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB368");
    },
    Error,
    "encode-error: U+B368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB369");
    },
    Error,
    "encode-error: U+B369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB36A");
    },
    Error,
    "encode-error: U+B36A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB36B");
    },
    Error,
    "encode-error: U+B36B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB36C");
    },
    Error,
    "encode-error: U+B36C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB36D");
    },
    Error,
    "encode-error: U+B36D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB36E");
    },
    Error,
    "encode-error: U+B36E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB36F");
    },
    Error,
    "encode-error: U+B36F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB370");
    },
    Error,
    "encode-error: U+B370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB371");
    },
    Error,
    "encode-error: U+B371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB372");
    },
    Error,
    "encode-error: U+B372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB373");
    },
    Error,
    "encode-error: U+B373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB374");
    },
    Error,
    "encode-error: U+B374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB375");
    },
    Error,
    "encode-error: U+B375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB376");
    },
    Error,
    "encode-error: U+B376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB377");
    },
    Error,
    "encode-error: U+B377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB378");
    },
    Error,
    "encode-error: U+B378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB379");
    },
    Error,
    "encode-error: U+B379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB37A");
    },
    Error,
    "encode-error: U+B37A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB37B");
    },
    Error,
    "encode-error: U+B37B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB37C");
    },
    Error,
    "encode-error: U+B37C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB37D");
    },
    Error,
    "encode-error: U+B37D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB37E");
    },
    Error,
    "encode-error: U+B37E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB37F");
    },
    Error,
    "encode-error: U+B37F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB380");
    },
    Error,
    "encode-error: U+B380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB381");
    },
    Error,
    "encode-error: U+B381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB382");
    },
    Error,
    "encode-error: U+B382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB383");
    },
    Error,
    "encode-error: U+B383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB384");
    },
    Error,
    "encode-error: U+B384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB385");
    },
    Error,
    "encode-error: U+B385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB386");
    },
    Error,
    "encode-error: U+B386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB387");
    },
    Error,
    "encode-error: U+B387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB388");
    },
    Error,
    "encode-error: U+B388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB389");
    },
    Error,
    "encode-error: U+B389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB38A");
    },
    Error,
    "encode-error: U+B38A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB38B");
    },
    Error,
    "encode-error: U+B38B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB38C");
    },
    Error,
    "encode-error: U+B38C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB38D");
    },
    Error,
    "encode-error: U+B38D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB38E");
    },
    Error,
    "encode-error: U+B38E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB38F");
    },
    Error,
    "encode-error: U+B38F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB390");
    },
    Error,
    "encode-error: U+B390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB391");
    },
    Error,
    "encode-error: U+B391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB392");
    },
    Error,
    "encode-error: U+B392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB393");
    },
    Error,
    "encode-error: U+B393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB394");
    },
    Error,
    "encode-error: U+B394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB395");
    },
    Error,
    "encode-error: U+B395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB396");
    },
    Error,
    "encode-error: U+B396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB397");
    },
    Error,
    "encode-error: U+B397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB398");
    },
    Error,
    "encode-error: U+B398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB399");
    },
    Error,
    "encode-error: U+B399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB39A");
    },
    Error,
    "encode-error: U+B39A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB39B");
    },
    Error,
    "encode-error: U+B39B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB39C");
    },
    Error,
    "encode-error: U+B39C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB39D");
    },
    Error,
    "encode-error: U+B39D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB39E");
    },
    Error,
    "encode-error: U+B39E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB39F");
    },
    Error,
    "encode-error: U+B39F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3A0");
    },
    Error,
    "encode-error: U+B3A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3A1");
    },
    Error,
    "encode-error: U+B3A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3A2");
    },
    Error,
    "encode-error: U+B3A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3A3");
    },
    Error,
    "encode-error: U+B3A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3A4");
    },
    Error,
    "encode-error: U+B3A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3A5");
    },
    Error,
    "encode-error: U+B3A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3A6");
    },
    Error,
    "encode-error: U+B3A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3A7");
    },
    Error,
    "encode-error: U+B3A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3A8");
    },
    Error,
    "encode-error: U+B3A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3A9");
    },
    Error,
    "encode-error: U+B3A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3AA");
    },
    Error,
    "encode-error: U+B3AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3AB");
    },
    Error,
    "encode-error: U+B3AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3AC");
    },
    Error,
    "encode-error: U+B3AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3AD");
    },
    Error,
    "encode-error: U+B3AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3AE");
    },
    Error,
    "encode-error: U+B3AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3AF");
    },
    Error,
    "encode-error: U+B3AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3B0");
    },
    Error,
    "encode-error: U+B3B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3B1");
    },
    Error,
    "encode-error: U+B3B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3B2");
    },
    Error,
    "encode-error: U+B3B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3B3");
    },
    Error,
    "encode-error: U+B3B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3B4");
    },
    Error,
    "encode-error: U+B3B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3B5");
    },
    Error,
    "encode-error: U+B3B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3B6");
    },
    Error,
    "encode-error: U+B3B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3B7");
    },
    Error,
    "encode-error: U+B3B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3B8");
    },
    Error,
    "encode-error: U+B3B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3B9");
    },
    Error,
    "encode-error: U+B3B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3BA");
    },
    Error,
    "encode-error: U+B3BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3BB");
    },
    Error,
    "encode-error: U+B3BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3BC");
    },
    Error,
    "encode-error: U+B3BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3BD");
    },
    Error,
    "encode-error: U+B3BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3BE");
    },
    Error,
    "encode-error: U+B3BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3BF");
    },
    Error,
    "encode-error: U+B3BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3C0");
    },
    Error,
    "encode-error: U+B3C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3C1");
    },
    Error,
    "encode-error: U+B3C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3C2");
    },
    Error,
    "encode-error: U+B3C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3C3");
    },
    Error,
    "encode-error: U+B3C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3C4");
    },
    Error,
    "encode-error: U+B3C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3C5");
    },
    Error,
    "encode-error: U+B3C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3C6");
    },
    Error,
    "encode-error: U+B3C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3C7");
    },
    Error,
    "encode-error: U+B3C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3C8");
    },
    Error,
    "encode-error: U+B3C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3C9");
    },
    Error,
    "encode-error: U+B3C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3CA");
    },
    Error,
    "encode-error: U+B3CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3CB");
    },
    Error,
    "encode-error: U+B3CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3CC");
    },
    Error,
    "encode-error: U+B3CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3CD");
    },
    Error,
    "encode-error: U+B3CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3CE");
    },
    Error,
    "encode-error: U+B3CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3CF");
    },
    Error,
    "encode-error: U+B3CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3D0");
    },
    Error,
    "encode-error: U+B3D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3D1");
    },
    Error,
    "encode-error: U+B3D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3D2");
    },
    Error,
    "encode-error: U+B3D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3D3");
    },
    Error,
    "encode-error: U+B3D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3D4");
    },
    Error,
    "encode-error: U+B3D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3D5");
    },
    Error,
    "encode-error: U+B3D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3D6");
    },
    Error,
    "encode-error: U+B3D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3D7");
    },
    Error,
    "encode-error: U+B3D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3D8");
    },
    Error,
    "encode-error: U+B3D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3D9");
    },
    Error,
    "encode-error: U+B3D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3DA");
    },
    Error,
    "encode-error: U+B3DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3DB");
    },
    Error,
    "encode-error: U+B3DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3DC");
    },
    Error,
    "encode-error: U+B3DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3DD");
    },
    Error,
    "encode-error: U+B3DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3DE");
    },
    Error,
    "encode-error: U+B3DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3DF");
    },
    Error,
    "encode-error: U+B3DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3E0");
    },
    Error,
    "encode-error: U+B3E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3E1");
    },
    Error,
    "encode-error: U+B3E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3E2");
    },
    Error,
    "encode-error: U+B3E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3E3");
    },
    Error,
    "encode-error: U+B3E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3E4");
    },
    Error,
    "encode-error: U+B3E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3E5");
    },
    Error,
    "encode-error: U+B3E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3E6");
    },
    Error,
    "encode-error: U+B3E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3E7");
    },
    Error,
    "encode-error: U+B3E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3E8");
    },
    Error,
    "encode-error: U+B3E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3E9");
    },
    Error,
    "encode-error: U+B3E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3EA");
    },
    Error,
    "encode-error: U+B3EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3EB");
    },
    Error,
    "encode-error: U+B3EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3EC");
    },
    Error,
    "encode-error: U+B3EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3ED");
    },
    Error,
    "encode-error: U+B3ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3EE");
    },
    Error,
    "encode-error: U+B3EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3EF");
    },
    Error,
    "encode-error: U+B3EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3F0");
    },
    Error,
    "encode-error: U+B3F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3F1");
    },
    Error,
    "encode-error: U+B3F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3F2");
    },
    Error,
    "encode-error: U+B3F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3F3");
    },
    Error,
    "encode-error: U+B3F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3F4");
    },
    Error,
    "encode-error: U+B3F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3F5");
    },
    Error,
    "encode-error: U+B3F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3F6");
    },
    Error,
    "encode-error: U+B3F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3F7");
    },
    Error,
    "encode-error: U+B3F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3F8");
    },
    Error,
    "encode-error: U+B3F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3F9");
    },
    Error,
    "encode-error: U+B3F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3FA");
    },
    Error,
    "encode-error: U+B3FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3FB");
    },
    Error,
    "encode-error: U+B3FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3FC");
    },
    Error,
    "encode-error: U+B3FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3FD");
    },
    Error,
    "encode-error: U+B3FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3FE");
    },
    Error,
    "encode-error: U+B3FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB3FF");
    },
    Error,
    "encode-error: U+B3FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB400");
    },
    Error,
    "encode-error: U+B400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB401");
    },
    Error,
    "encode-error: U+B401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB402");
    },
    Error,
    "encode-error: U+B402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB403");
    },
    Error,
    "encode-error: U+B403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB404");
    },
    Error,
    "encode-error: U+B404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB405");
    },
    Error,
    "encode-error: U+B405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB406");
    },
    Error,
    "encode-error: U+B406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB407");
    },
    Error,
    "encode-error: U+B407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB408");
    },
    Error,
    "encode-error: U+B408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB409");
    },
    Error,
    "encode-error: U+B409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB40A");
    },
    Error,
    "encode-error: U+B40A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB40B");
    },
    Error,
    "encode-error: U+B40B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB40C");
    },
    Error,
    "encode-error: U+B40C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB40D");
    },
    Error,
    "encode-error: U+B40D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB40E");
    },
    Error,
    "encode-error: U+B40E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB40F");
    },
    Error,
    "encode-error: U+B40F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB410");
    },
    Error,
    "encode-error: U+B410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB411");
    },
    Error,
    "encode-error: U+B411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB412");
    },
    Error,
    "encode-error: U+B412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB413");
    },
    Error,
    "encode-error: U+B413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB414");
    },
    Error,
    "encode-error: U+B414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB415");
    },
    Error,
    "encode-error: U+B415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB416");
    },
    Error,
    "encode-error: U+B416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB417");
    },
    Error,
    "encode-error: U+B417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB418");
    },
    Error,
    "encode-error: U+B418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB419");
    },
    Error,
    "encode-error: U+B419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB41A");
    },
    Error,
    "encode-error: U+B41A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB41B");
    },
    Error,
    "encode-error: U+B41B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB41C");
    },
    Error,
    "encode-error: U+B41C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB41D");
    },
    Error,
    "encode-error: U+B41D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB41E");
    },
    Error,
    "encode-error: U+B41E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB41F");
    },
    Error,
    "encode-error: U+B41F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB420");
    },
    Error,
    "encode-error: U+B420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB421");
    },
    Error,
    "encode-error: U+B421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB422");
    },
    Error,
    "encode-error: U+B422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB423");
    },
    Error,
    "encode-error: U+B423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB424");
    },
    Error,
    "encode-error: U+B424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB425");
    },
    Error,
    "encode-error: U+B425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB426");
    },
    Error,
    "encode-error: U+B426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB427");
    },
    Error,
    "encode-error: U+B427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB428");
    },
    Error,
    "encode-error: U+B428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB429");
    },
    Error,
    "encode-error: U+B429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB42A");
    },
    Error,
    "encode-error: U+B42A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB42B");
    },
    Error,
    "encode-error: U+B42B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB42C");
    },
    Error,
    "encode-error: U+B42C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB42D");
    },
    Error,
    "encode-error: U+B42D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB42E");
    },
    Error,
    "encode-error: U+B42E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB42F");
    },
    Error,
    "encode-error: U+B42F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB430");
    },
    Error,
    "encode-error: U+B430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB431");
    },
    Error,
    "encode-error: U+B431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB432");
    },
    Error,
    "encode-error: U+B432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB433");
    },
    Error,
    "encode-error: U+B433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB434");
    },
    Error,
    "encode-error: U+B434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB435");
    },
    Error,
    "encode-error: U+B435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB436");
    },
    Error,
    "encode-error: U+B436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB437");
    },
    Error,
    "encode-error: U+B437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB438");
    },
    Error,
    "encode-error: U+B438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB439");
    },
    Error,
    "encode-error: U+B439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB43A");
    },
    Error,
    "encode-error: U+B43A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB43B");
    },
    Error,
    "encode-error: U+B43B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB43C");
    },
    Error,
    "encode-error: U+B43C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB43D");
    },
    Error,
    "encode-error: U+B43D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB43E");
    },
    Error,
    "encode-error: U+B43E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB43F");
    },
    Error,
    "encode-error: U+B43F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB440");
    },
    Error,
    "encode-error: U+B440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB441");
    },
    Error,
    "encode-error: U+B441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB442");
    },
    Error,
    "encode-error: U+B442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB443");
    },
    Error,
    "encode-error: U+B443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB444");
    },
    Error,
    "encode-error: U+B444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB445");
    },
    Error,
    "encode-error: U+B445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB446");
    },
    Error,
    "encode-error: U+B446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB447");
    },
    Error,
    "encode-error: U+B447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB448");
    },
    Error,
    "encode-error: U+B448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB449");
    },
    Error,
    "encode-error: U+B449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB44A");
    },
    Error,
    "encode-error: U+B44A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB44B");
    },
    Error,
    "encode-error: U+B44B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB44C");
    },
    Error,
    "encode-error: U+B44C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB44D");
    },
    Error,
    "encode-error: U+B44D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB44E");
    },
    Error,
    "encode-error: U+B44E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB44F");
    },
    Error,
    "encode-error: U+B44F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB450");
    },
    Error,
    "encode-error: U+B450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB451");
    },
    Error,
    "encode-error: U+B451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB452");
    },
    Error,
    "encode-error: U+B452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB453");
    },
    Error,
    "encode-error: U+B453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB454");
    },
    Error,
    "encode-error: U+B454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB455");
    },
    Error,
    "encode-error: U+B455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB456");
    },
    Error,
    "encode-error: U+B456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB457");
    },
    Error,
    "encode-error: U+B457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB458");
    },
    Error,
    "encode-error: U+B458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB459");
    },
    Error,
    "encode-error: U+B459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB45A");
    },
    Error,
    "encode-error: U+B45A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB45B");
    },
    Error,
    "encode-error: U+B45B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB45C");
    },
    Error,
    "encode-error: U+B45C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB45D");
    },
    Error,
    "encode-error: U+B45D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB45E");
    },
    Error,
    "encode-error: U+B45E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB45F");
    },
    Error,
    "encode-error: U+B45F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB460");
    },
    Error,
    "encode-error: U+B460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB461");
    },
    Error,
    "encode-error: U+B461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB462");
    },
    Error,
    "encode-error: U+B462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB463");
    },
    Error,
    "encode-error: U+B463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB464");
    },
    Error,
    "encode-error: U+B464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB465");
    },
    Error,
    "encode-error: U+B465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB466");
    },
    Error,
    "encode-error: U+B466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB467");
    },
    Error,
    "encode-error: U+B467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB468");
    },
    Error,
    "encode-error: U+B468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB469");
    },
    Error,
    "encode-error: U+B469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB46A");
    },
    Error,
    "encode-error: U+B46A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB46B");
    },
    Error,
    "encode-error: U+B46B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB46C");
    },
    Error,
    "encode-error: U+B46C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB46D");
    },
    Error,
    "encode-error: U+B46D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB46E");
    },
    Error,
    "encode-error: U+B46E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB46F");
    },
    Error,
    "encode-error: U+B46F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB470");
    },
    Error,
    "encode-error: U+B470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB471");
    },
    Error,
    "encode-error: U+B471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB472");
    },
    Error,
    "encode-error: U+B472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB473");
    },
    Error,
    "encode-error: U+B473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB474");
    },
    Error,
    "encode-error: U+B474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB475");
    },
    Error,
    "encode-error: U+B475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB476");
    },
    Error,
    "encode-error: U+B476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB477");
    },
    Error,
    "encode-error: U+B477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB478");
    },
    Error,
    "encode-error: U+B478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB479");
    },
    Error,
    "encode-error: U+B479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB47A");
    },
    Error,
    "encode-error: U+B47A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB47B");
    },
    Error,
    "encode-error: U+B47B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB47C");
    },
    Error,
    "encode-error: U+B47C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB47D");
    },
    Error,
    "encode-error: U+B47D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB47E");
    },
    Error,
    "encode-error: U+B47E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB47F");
    },
    Error,
    "encode-error: U+B47F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB480");
    },
    Error,
    "encode-error: U+B480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB481");
    },
    Error,
    "encode-error: U+B481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB482");
    },
    Error,
    "encode-error: U+B482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB483");
    },
    Error,
    "encode-error: U+B483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB484");
    },
    Error,
    "encode-error: U+B484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB485");
    },
    Error,
    "encode-error: U+B485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB486");
    },
    Error,
    "encode-error: U+B486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB487");
    },
    Error,
    "encode-error: U+B487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB488");
    },
    Error,
    "encode-error: U+B488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB489");
    },
    Error,
    "encode-error: U+B489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB48A");
    },
    Error,
    "encode-error: U+B48A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB48B");
    },
    Error,
    "encode-error: U+B48B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB48C");
    },
    Error,
    "encode-error: U+B48C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB48D");
    },
    Error,
    "encode-error: U+B48D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB48E");
    },
    Error,
    "encode-error: U+B48E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB48F");
    },
    Error,
    "encode-error: U+B48F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB490");
    },
    Error,
    "encode-error: U+B490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB491");
    },
    Error,
    "encode-error: U+B491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB492");
    },
    Error,
    "encode-error: U+B492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB493");
    },
    Error,
    "encode-error: U+B493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB494");
    },
    Error,
    "encode-error: U+B494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB495");
    },
    Error,
    "encode-error: U+B495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB496");
    },
    Error,
    "encode-error: U+B496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB497");
    },
    Error,
    "encode-error: U+B497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB498");
    },
    Error,
    "encode-error: U+B498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB499");
    },
    Error,
    "encode-error: U+B499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB49A");
    },
    Error,
    "encode-error: U+B49A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB49B");
    },
    Error,
    "encode-error: U+B49B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB49C");
    },
    Error,
    "encode-error: U+B49C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB49D");
    },
    Error,
    "encode-error: U+B49D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB49E");
    },
    Error,
    "encode-error: U+B49E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB49F");
    },
    Error,
    "encode-error: U+B49F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4A0");
    },
    Error,
    "encode-error: U+B4A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4A1");
    },
    Error,
    "encode-error: U+B4A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4A2");
    },
    Error,
    "encode-error: U+B4A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4A3");
    },
    Error,
    "encode-error: U+B4A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4A4");
    },
    Error,
    "encode-error: U+B4A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4A5");
    },
    Error,
    "encode-error: U+B4A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4A6");
    },
    Error,
    "encode-error: U+B4A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4A7");
    },
    Error,
    "encode-error: U+B4A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4A8");
    },
    Error,
    "encode-error: U+B4A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4A9");
    },
    Error,
    "encode-error: U+B4A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4AA");
    },
    Error,
    "encode-error: U+B4AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4AB");
    },
    Error,
    "encode-error: U+B4AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4AC");
    },
    Error,
    "encode-error: U+B4AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4AD");
    },
    Error,
    "encode-error: U+B4AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4AE");
    },
    Error,
    "encode-error: U+B4AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4AF");
    },
    Error,
    "encode-error: U+B4AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4B0");
    },
    Error,
    "encode-error: U+B4B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4B1");
    },
    Error,
    "encode-error: U+B4B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4B2");
    },
    Error,
    "encode-error: U+B4B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4B3");
    },
    Error,
    "encode-error: U+B4B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4B4");
    },
    Error,
    "encode-error: U+B4B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4B5");
    },
    Error,
    "encode-error: U+B4B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4B6");
    },
    Error,
    "encode-error: U+B4B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4B7");
    },
    Error,
    "encode-error: U+B4B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4B8");
    },
    Error,
    "encode-error: U+B4B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4B9");
    },
    Error,
    "encode-error: U+B4B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4BA");
    },
    Error,
    "encode-error: U+B4BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4BB");
    },
    Error,
    "encode-error: U+B4BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4BC");
    },
    Error,
    "encode-error: U+B4BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4BD");
    },
    Error,
    "encode-error: U+B4BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4BE");
    },
    Error,
    "encode-error: U+B4BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4BF");
    },
    Error,
    "encode-error: U+B4BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4C0");
    },
    Error,
    "encode-error: U+B4C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4C1");
    },
    Error,
    "encode-error: U+B4C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4C2");
    },
    Error,
    "encode-error: U+B4C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4C3");
    },
    Error,
    "encode-error: U+B4C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4C4");
    },
    Error,
    "encode-error: U+B4C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4C5");
    },
    Error,
    "encode-error: U+B4C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4C6");
    },
    Error,
    "encode-error: U+B4C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4C7");
    },
    Error,
    "encode-error: U+B4C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4C8");
    },
    Error,
    "encode-error: U+B4C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4C9");
    },
    Error,
    "encode-error: U+B4C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4CA");
    },
    Error,
    "encode-error: U+B4CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4CB");
    },
    Error,
    "encode-error: U+B4CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4CC");
    },
    Error,
    "encode-error: U+B4CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4CD");
    },
    Error,
    "encode-error: U+B4CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4CE");
    },
    Error,
    "encode-error: U+B4CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4CF");
    },
    Error,
    "encode-error: U+B4CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4D0");
    },
    Error,
    "encode-error: U+B4D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4D1");
    },
    Error,
    "encode-error: U+B4D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4D2");
    },
    Error,
    "encode-error: U+B4D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4D3");
    },
    Error,
    "encode-error: U+B4D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4D4");
    },
    Error,
    "encode-error: U+B4D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4D5");
    },
    Error,
    "encode-error: U+B4D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4D6");
    },
    Error,
    "encode-error: U+B4D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4D7");
    },
    Error,
    "encode-error: U+B4D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4D8");
    },
    Error,
    "encode-error: U+B4D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4D9");
    },
    Error,
    "encode-error: U+B4D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4DA");
    },
    Error,
    "encode-error: U+B4DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4DB");
    },
    Error,
    "encode-error: U+B4DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4DC");
    },
    Error,
    "encode-error: U+B4DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4DD");
    },
    Error,
    "encode-error: U+B4DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4DE");
    },
    Error,
    "encode-error: U+B4DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4DF");
    },
    Error,
    "encode-error: U+B4DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4E0");
    },
    Error,
    "encode-error: U+B4E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4E1");
    },
    Error,
    "encode-error: U+B4E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4E2");
    },
    Error,
    "encode-error: U+B4E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4E3");
    },
    Error,
    "encode-error: U+B4E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4E4");
    },
    Error,
    "encode-error: U+B4E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4E5");
    },
    Error,
    "encode-error: U+B4E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4E6");
    },
    Error,
    "encode-error: U+B4E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4E7");
    },
    Error,
    "encode-error: U+B4E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4E8");
    },
    Error,
    "encode-error: U+B4E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4E9");
    },
    Error,
    "encode-error: U+B4E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4EA");
    },
    Error,
    "encode-error: U+B4EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4EB");
    },
    Error,
    "encode-error: U+B4EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4EC");
    },
    Error,
    "encode-error: U+B4EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4ED");
    },
    Error,
    "encode-error: U+B4ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4EE");
    },
    Error,
    "encode-error: U+B4EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4EF");
    },
    Error,
    "encode-error: U+B4EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4F0");
    },
    Error,
    "encode-error: U+B4F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4F1");
    },
    Error,
    "encode-error: U+B4F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4F2");
    },
    Error,
    "encode-error: U+B4F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4F3");
    },
    Error,
    "encode-error: U+B4F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4F4");
    },
    Error,
    "encode-error: U+B4F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4F5");
    },
    Error,
    "encode-error: U+B4F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4F6");
    },
    Error,
    "encode-error: U+B4F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4F7");
    },
    Error,
    "encode-error: U+B4F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4F8");
    },
    Error,
    "encode-error: U+B4F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4F9");
    },
    Error,
    "encode-error: U+B4F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4FA");
    },
    Error,
    "encode-error: U+B4FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4FB");
    },
    Error,
    "encode-error: U+B4FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4FC");
    },
    Error,
    "encode-error: U+B4FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4FD");
    },
    Error,
    "encode-error: U+B4FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4FE");
    },
    Error,
    "encode-error: U+B4FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB4FF");
    },
    Error,
    "encode-error: U+B4FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB500");
    },
    Error,
    "encode-error: U+B500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB501");
    },
    Error,
    "encode-error: U+B501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB502");
    },
    Error,
    "encode-error: U+B502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB503");
    },
    Error,
    "encode-error: U+B503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB504");
    },
    Error,
    "encode-error: U+B504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB505");
    },
    Error,
    "encode-error: U+B505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB506");
    },
    Error,
    "encode-error: U+B506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB507");
    },
    Error,
    "encode-error: U+B507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB508");
    },
    Error,
    "encode-error: U+B508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB509");
    },
    Error,
    "encode-error: U+B509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB50A");
    },
    Error,
    "encode-error: U+B50A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB50B");
    },
    Error,
    "encode-error: U+B50B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB50C");
    },
    Error,
    "encode-error: U+B50C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB50D");
    },
    Error,
    "encode-error: U+B50D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB50E");
    },
    Error,
    "encode-error: U+B50E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB50F");
    },
    Error,
    "encode-error: U+B50F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB510");
    },
    Error,
    "encode-error: U+B510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB511");
    },
    Error,
    "encode-error: U+B511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB512");
    },
    Error,
    "encode-error: U+B512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB513");
    },
    Error,
    "encode-error: U+B513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB514");
    },
    Error,
    "encode-error: U+B514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB515");
    },
    Error,
    "encode-error: U+B515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB516");
    },
    Error,
    "encode-error: U+B516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB517");
    },
    Error,
    "encode-error: U+B517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB518");
    },
    Error,
    "encode-error: U+B518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB519");
    },
    Error,
    "encode-error: U+B519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB51A");
    },
    Error,
    "encode-error: U+B51A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB51B");
    },
    Error,
    "encode-error: U+B51B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB51C");
    },
    Error,
    "encode-error: U+B51C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB51D");
    },
    Error,
    "encode-error: U+B51D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB51E");
    },
    Error,
    "encode-error: U+B51E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB51F");
    },
    Error,
    "encode-error: U+B51F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB520");
    },
    Error,
    "encode-error: U+B520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB521");
    },
    Error,
    "encode-error: U+B521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB522");
    },
    Error,
    "encode-error: U+B522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB523");
    },
    Error,
    "encode-error: U+B523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB524");
    },
    Error,
    "encode-error: U+B524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB525");
    },
    Error,
    "encode-error: U+B525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB526");
    },
    Error,
    "encode-error: U+B526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB527");
    },
    Error,
    "encode-error: U+B527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB528");
    },
    Error,
    "encode-error: U+B528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB529");
    },
    Error,
    "encode-error: U+B529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB52A");
    },
    Error,
    "encode-error: U+B52A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB52B");
    },
    Error,
    "encode-error: U+B52B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB52C");
    },
    Error,
    "encode-error: U+B52C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB52D");
    },
    Error,
    "encode-error: U+B52D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB52E");
    },
    Error,
    "encode-error: U+B52E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB52F");
    },
    Error,
    "encode-error: U+B52F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB530");
    },
    Error,
    "encode-error: U+B530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB531");
    },
    Error,
    "encode-error: U+B531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB532");
    },
    Error,
    "encode-error: U+B532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB533");
    },
    Error,
    "encode-error: U+B533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB534");
    },
    Error,
    "encode-error: U+B534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB535");
    },
    Error,
    "encode-error: U+B535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB536");
    },
    Error,
    "encode-error: U+B536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB537");
    },
    Error,
    "encode-error: U+B537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB538");
    },
    Error,
    "encode-error: U+B538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB539");
    },
    Error,
    "encode-error: U+B539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB53A");
    },
    Error,
    "encode-error: U+B53A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB53B");
    },
    Error,
    "encode-error: U+B53B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB53C");
    },
    Error,
    "encode-error: U+B53C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB53D");
    },
    Error,
    "encode-error: U+B53D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB53E");
    },
    Error,
    "encode-error: U+B53E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB53F");
    },
    Error,
    "encode-error: U+B53F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB540");
    },
    Error,
    "encode-error: U+B540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB541");
    },
    Error,
    "encode-error: U+B541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB542");
    },
    Error,
    "encode-error: U+B542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB543");
    },
    Error,
    "encode-error: U+B543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB544");
    },
    Error,
    "encode-error: U+B544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB545");
    },
    Error,
    "encode-error: U+B545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB546");
    },
    Error,
    "encode-error: U+B546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB547");
    },
    Error,
    "encode-error: U+B547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB548");
    },
    Error,
    "encode-error: U+B548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB549");
    },
    Error,
    "encode-error: U+B549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB54A");
    },
    Error,
    "encode-error: U+B54A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB54B");
    },
    Error,
    "encode-error: U+B54B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB54C");
    },
    Error,
    "encode-error: U+B54C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB54D");
    },
    Error,
    "encode-error: U+B54D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB54E");
    },
    Error,
    "encode-error: U+B54E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB54F");
    },
    Error,
    "encode-error: U+B54F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB550");
    },
    Error,
    "encode-error: U+B550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB551");
    },
    Error,
    "encode-error: U+B551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB552");
    },
    Error,
    "encode-error: U+B552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB553");
    },
    Error,
    "encode-error: U+B553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB554");
    },
    Error,
    "encode-error: U+B554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB555");
    },
    Error,
    "encode-error: U+B555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB556");
    },
    Error,
    "encode-error: U+B556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB557");
    },
    Error,
    "encode-error: U+B557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB558");
    },
    Error,
    "encode-error: U+B558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB559");
    },
    Error,
    "encode-error: U+B559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB55A");
    },
    Error,
    "encode-error: U+B55A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB55B");
    },
    Error,
    "encode-error: U+B55B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB55C");
    },
    Error,
    "encode-error: U+B55C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB55D");
    },
    Error,
    "encode-error: U+B55D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB55E");
    },
    Error,
    "encode-error: U+B55E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB55F");
    },
    Error,
    "encode-error: U+B55F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB560");
    },
    Error,
    "encode-error: U+B560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB561");
    },
    Error,
    "encode-error: U+B561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB562");
    },
    Error,
    "encode-error: U+B562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB563");
    },
    Error,
    "encode-error: U+B563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB564");
    },
    Error,
    "encode-error: U+B564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB565");
    },
    Error,
    "encode-error: U+B565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB566");
    },
    Error,
    "encode-error: U+B566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB567");
    },
    Error,
    "encode-error: U+B567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB568");
    },
    Error,
    "encode-error: U+B568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB569");
    },
    Error,
    "encode-error: U+B569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB56A");
    },
    Error,
    "encode-error: U+B56A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB56B");
    },
    Error,
    "encode-error: U+B56B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB56C");
    },
    Error,
    "encode-error: U+B56C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB56D");
    },
    Error,
    "encode-error: U+B56D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB56E");
    },
    Error,
    "encode-error: U+B56E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB56F");
    },
    Error,
    "encode-error: U+B56F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB570");
    },
    Error,
    "encode-error: U+B570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB571");
    },
    Error,
    "encode-error: U+B571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB572");
    },
    Error,
    "encode-error: U+B572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB573");
    },
    Error,
    "encode-error: U+B573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB574");
    },
    Error,
    "encode-error: U+B574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB575");
    },
    Error,
    "encode-error: U+B575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB576");
    },
    Error,
    "encode-error: U+B576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB577");
    },
    Error,
    "encode-error: U+B577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB578");
    },
    Error,
    "encode-error: U+B578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB579");
    },
    Error,
    "encode-error: U+B579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB57A");
    },
    Error,
    "encode-error: U+B57A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB57B");
    },
    Error,
    "encode-error: U+B57B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB57C");
    },
    Error,
    "encode-error: U+B57C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB57D");
    },
    Error,
    "encode-error: U+B57D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB57E");
    },
    Error,
    "encode-error: U+B57E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB57F");
    },
    Error,
    "encode-error: U+B57F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB580");
    },
    Error,
    "encode-error: U+B580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB581");
    },
    Error,
    "encode-error: U+B581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB582");
    },
    Error,
    "encode-error: U+B582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB583");
    },
    Error,
    "encode-error: U+B583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB584");
    },
    Error,
    "encode-error: U+B584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB585");
    },
    Error,
    "encode-error: U+B585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB586");
    },
    Error,
    "encode-error: U+B586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB587");
    },
    Error,
    "encode-error: U+B587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB588");
    },
    Error,
    "encode-error: U+B588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB589");
    },
    Error,
    "encode-error: U+B589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB58A");
    },
    Error,
    "encode-error: U+B58A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB58B");
    },
    Error,
    "encode-error: U+B58B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB58C");
    },
    Error,
    "encode-error: U+B58C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB58D");
    },
    Error,
    "encode-error: U+B58D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB58E");
    },
    Error,
    "encode-error: U+B58E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB58F");
    },
    Error,
    "encode-error: U+B58F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB590");
    },
    Error,
    "encode-error: U+B590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB591");
    },
    Error,
    "encode-error: U+B591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB592");
    },
    Error,
    "encode-error: U+B592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB593");
    },
    Error,
    "encode-error: U+B593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB594");
    },
    Error,
    "encode-error: U+B594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB595");
    },
    Error,
    "encode-error: U+B595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB596");
    },
    Error,
    "encode-error: U+B596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB597");
    },
    Error,
    "encode-error: U+B597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB598");
    },
    Error,
    "encode-error: U+B598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB599");
    },
    Error,
    "encode-error: U+B599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB59A");
    },
    Error,
    "encode-error: U+B59A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB59B");
    },
    Error,
    "encode-error: U+B59B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB59C");
    },
    Error,
    "encode-error: U+B59C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB59D");
    },
    Error,
    "encode-error: U+B59D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB59E");
    },
    Error,
    "encode-error: U+B59E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB59F");
    },
    Error,
    "encode-error: U+B59F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5A0");
    },
    Error,
    "encode-error: U+B5A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5A1");
    },
    Error,
    "encode-error: U+B5A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5A2");
    },
    Error,
    "encode-error: U+B5A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5A3");
    },
    Error,
    "encode-error: U+B5A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5A4");
    },
    Error,
    "encode-error: U+B5A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5A5");
    },
    Error,
    "encode-error: U+B5A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5A6");
    },
    Error,
    "encode-error: U+B5A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5A7");
    },
    Error,
    "encode-error: U+B5A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5A8");
    },
    Error,
    "encode-error: U+B5A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5A9");
    },
    Error,
    "encode-error: U+B5A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5AA");
    },
    Error,
    "encode-error: U+B5AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5AB");
    },
    Error,
    "encode-error: U+B5AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5AC");
    },
    Error,
    "encode-error: U+B5AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5AD");
    },
    Error,
    "encode-error: U+B5AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5AE");
    },
    Error,
    "encode-error: U+B5AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5AF");
    },
    Error,
    "encode-error: U+B5AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5B0");
    },
    Error,
    "encode-error: U+B5B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5B1");
    },
    Error,
    "encode-error: U+B5B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5B2");
    },
    Error,
    "encode-error: U+B5B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5B3");
    },
    Error,
    "encode-error: U+B5B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5B4");
    },
    Error,
    "encode-error: U+B5B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5B5");
    },
    Error,
    "encode-error: U+B5B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5B6");
    },
    Error,
    "encode-error: U+B5B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5B7");
    },
    Error,
    "encode-error: U+B5B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5B8");
    },
    Error,
    "encode-error: U+B5B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5B9");
    },
    Error,
    "encode-error: U+B5B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5BA");
    },
    Error,
    "encode-error: U+B5BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5BB");
    },
    Error,
    "encode-error: U+B5BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5BC");
    },
    Error,
    "encode-error: U+B5BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5BD");
    },
    Error,
    "encode-error: U+B5BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5BE");
    },
    Error,
    "encode-error: U+B5BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5BF");
    },
    Error,
    "encode-error: U+B5BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5C0");
    },
    Error,
    "encode-error: U+B5C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5C1");
    },
    Error,
    "encode-error: U+B5C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5C2");
    },
    Error,
    "encode-error: U+B5C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5C3");
    },
    Error,
    "encode-error: U+B5C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5C4");
    },
    Error,
    "encode-error: U+B5C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5C5");
    },
    Error,
    "encode-error: U+B5C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5C6");
    },
    Error,
    "encode-error: U+B5C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5C7");
    },
    Error,
    "encode-error: U+B5C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5C8");
    },
    Error,
    "encode-error: U+B5C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5C9");
    },
    Error,
    "encode-error: U+B5C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5CA");
    },
    Error,
    "encode-error: U+B5CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5CB");
    },
    Error,
    "encode-error: U+B5CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5CC");
    },
    Error,
    "encode-error: U+B5CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5CD");
    },
    Error,
    "encode-error: U+B5CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5CE");
    },
    Error,
    "encode-error: U+B5CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5CF");
    },
    Error,
    "encode-error: U+B5CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5D0");
    },
    Error,
    "encode-error: U+B5D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5D1");
    },
    Error,
    "encode-error: U+B5D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5D2");
    },
    Error,
    "encode-error: U+B5D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5D3");
    },
    Error,
    "encode-error: U+B5D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5D4");
    },
    Error,
    "encode-error: U+B5D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5D5");
    },
    Error,
    "encode-error: U+B5D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5D6");
    },
    Error,
    "encode-error: U+B5D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5D7");
    },
    Error,
    "encode-error: U+B5D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5D8");
    },
    Error,
    "encode-error: U+B5D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5D9");
    },
    Error,
    "encode-error: U+B5D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5DA");
    },
    Error,
    "encode-error: U+B5DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5DB");
    },
    Error,
    "encode-error: U+B5DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5DC");
    },
    Error,
    "encode-error: U+B5DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5DD");
    },
    Error,
    "encode-error: U+B5DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5DE");
    },
    Error,
    "encode-error: U+B5DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5DF");
    },
    Error,
    "encode-error: U+B5DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5E0");
    },
    Error,
    "encode-error: U+B5E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5E1");
    },
    Error,
    "encode-error: U+B5E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5E2");
    },
    Error,
    "encode-error: U+B5E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5E3");
    },
    Error,
    "encode-error: U+B5E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5E4");
    },
    Error,
    "encode-error: U+B5E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5E5");
    },
    Error,
    "encode-error: U+B5E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5E6");
    },
    Error,
    "encode-error: U+B5E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5E7");
    },
    Error,
    "encode-error: U+B5E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5E8");
    },
    Error,
    "encode-error: U+B5E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5E9");
    },
    Error,
    "encode-error: U+B5E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5EA");
    },
    Error,
    "encode-error: U+B5EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5EB");
    },
    Error,
    "encode-error: U+B5EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5EC");
    },
    Error,
    "encode-error: U+B5EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5ED");
    },
    Error,
    "encode-error: U+B5ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5EE");
    },
    Error,
    "encode-error: U+B5EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5EF");
    },
    Error,
    "encode-error: U+B5EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5F0");
    },
    Error,
    "encode-error: U+B5F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5F1");
    },
    Error,
    "encode-error: U+B5F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5F2");
    },
    Error,
    "encode-error: U+B5F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5F3");
    },
    Error,
    "encode-error: U+B5F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5F4");
    },
    Error,
    "encode-error: U+B5F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5F5");
    },
    Error,
    "encode-error: U+B5F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5F6");
    },
    Error,
    "encode-error: U+B5F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5F7");
    },
    Error,
    "encode-error: U+B5F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5F8");
    },
    Error,
    "encode-error: U+B5F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5F9");
    },
    Error,
    "encode-error: U+B5F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5FA");
    },
    Error,
    "encode-error: U+B5FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5FB");
    },
    Error,
    "encode-error: U+B5FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5FC");
    },
    Error,
    "encode-error: U+B5FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5FD");
    },
    Error,
    "encode-error: U+B5FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5FE");
    },
    Error,
    "encode-error: U+B5FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB5FF");
    },
    Error,
    "encode-error: U+B5FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB600");
    },
    Error,
    "encode-error: U+B600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB601");
    },
    Error,
    "encode-error: U+B601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB602");
    },
    Error,
    "encode-error: U+B602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB603");
    },
    Error,
    "encode-error: U+B603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB604");
    },
    Error,
    "encode-error: U+B604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB605");
    },
    Error,
    "encode-error: U+B605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB606");
    },
    Error,
    "encode-error: U+B606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB607");
    },
    Error,
    "encode-error: U+B607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB608");
    },
    Error,
    "encode-error: U+B608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB609");
    },
    Error,
    "encode-error: U+B609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB60A");
    },
    Error,
    "encode-error: U+B60A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB60B");
    },
    Error,
    "encode-error: U+B60B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB60C");
    },
    Error,
    "encode-error: U+B60C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB60D");
    },
    Error,
    "encode-error: U+B60D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB60E");
    },
    Error,
    "encode-error: U+B60E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB60F");
    },
    Error,
    "encode-error: U+B60F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB610");
    },
    Error,
    "encode-error: U+B610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB611");
    },
    Error,
    "encode-error: U+B611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB612");
    },
    Error,
    "encode-error: U+B612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB613");
    },
    Error,
    "encode-error: U+B613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB614");
    },
    Error,
    "encode-error: U+B614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB615");
    },
    Error,
    "encode-error: U+B615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB616");
    },
    Error,
    "encode-error: U+B616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB617");
    },
    Error,
    "encode-error: U+B617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB618");
    },
    Error,
    "encode-error: U+B618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB619");
    },
    Error,
    "encode-error: U+B619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB61A");
    },
    Error,
    "encode-error: U+B61A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB61B");
    },
    Error,
    "encode-error: U+B61B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB61C");
    },
    Error,
    "encode-error: U+B61C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB61D");
    },
    Error,
    "encode-error: U+B61D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB61E");
    },
    Error,
    "encode-error: U+B61E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB61F");
    },
    Error,
    "encode-error: U+B61F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB620");
    },
    Error,
    "encode-error: U+B620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB621");
    },
    Error,
    "encode-error: U+B621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB622");
    },
    Error,
    "encode-error: U+B622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB623");
    },
    Error,
    "encode-error: U+B623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB624");
    },
    Error,
    "encode-error: U+B624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB625");
    },
    Error,
    "encode-error: U+B625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB626");
    },
    Error,
    "encode-error: U+B626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB627");
    },
    Error,
    "encode-error: U+B627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB628");
    },
    Error,
    "encode-error: U+B628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB629");
    },
    Error,
    "encode-error: U+B629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB62A");
    },
    Error,
    "encode-error: U+B62A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB62B");
    },
    Error,
    "encode-error: U+B62B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB62C");
    },
    Error,
    "encode-error: U+B62C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB62D");
    },
    Error,
    "encode-error: U+B62D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB62E");
    },
    Error,
    "encode-error: U+B62E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB62F");
    },
    Error,
    "encode-error: U+B62F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB630");
    },
    Error,
    "encode-error: U+B630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB631");
    },
    Error,
    "encode-error: U+B631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB632");
    },
    Error,
    "encode-error: U+B632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB633");
    },
    Error,
    "encode-error: U+B633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB634");
    },
    Error,
    "encode-error: U+B634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB635");
    },
    Error,
    "encode-error: U+B635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB636");
    },
    Error,
    "encode-error: U+B636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB637");
    },
    Error,
    "encode-error: U+B637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB638");
    },
    Error,
    "encode-error: U+B638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB639");
    },
    Error,
    "encode-error: U+B639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB63A");
    },
    Error,
    "encode-error: U+B63A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB63B");
    },
    Error,
    "encode-error: U+B63B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB63C");
    },
    Error,
    "encode-error: U+B63C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB63D");
    },
    Error,
    "encode-error: U+B63D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB63E");
    },
    Error,
    "encode-error: U+B63E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB63F");
    },
    Error,
    "encode-error: U+B63F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB640");
    },
    Error,
    "encode-error: U+B640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB641");
    },
    Error,
    "encode-error: U+B641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB642");
    },
    Error,
    "encode-error: U+B642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB643");
    },
    Error,
    "encode-error: U+B643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB644");
    },
    Error,
    "encode-error: U+B644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB645");
    },
    Error,
    "encode-error: U+B645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB646");
    },
    Error,
    "encode-error: U+B646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB647");
    },
    Error,
    "encode-error: U+B647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB648");
    },
    Error,
    "encode-error: U+B648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB649");
    },
    Error,
    "encode-error: U+B649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB64A");
    },
    Error,
    "encode-error: U+B64A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB64B");
    },
    Error,
    "encode-error: U+B64B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB64C");
    },
    Error,
    "encode-error: U+B64C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB64D");
    },
    Error,
    "encode-error: U+B64D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB64E");
    },
    Error,
    "encode-error: U+B64E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB64F");
    },
    Error,
    "encode-error: U+B64F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB650");
    },
    Error,
    "encode-error: U+B650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB651");
    },
    Error,
    "encode-error: U+B651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB652");
    },
    Error,
    "encode-error: U+B652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB653");
    },
    Error,
    "encode-error: U+B653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB654");
    },
    Error,
    "encode-error: U+B654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB655");
    },
    Error,
    "encode-error: U+B655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB656");
    },
    Error,
    "encode-error: U+B656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB657");
    },
    Error,
    "encode-error: U+B657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB658");
    },
    Error,
    "encode-error: U+B658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB659");
    },
    Error,
    "encode-error: U+B659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB65A");
    },
    Error,
    "encode-error: U+B65A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB65B");
    },
    Error,
    "encode-error: U+B65B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB65C");
    },
    Error,
    "encode-error: U+B65C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB65D");
    },
    Error,
    "encode-error: U+B65D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB65E");
    },
    Error,
    "encode-error: U+B65E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB65F");
    },
    Error,
    "encode-error: U+B65F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB660");
    },
    Error,
    "encode-error: U+B660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB661");
    },
    Error,
    "encode-error: U+B661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB662");
    },
    Error,
    "encode-error: U+B662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB663");
    },
    Error,
    "encode-error: U+B663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB664");
    },
    Error,
    "encode-error: U+B664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB665");
    },
    Error,
    "encode-error: U+B665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB666");
    },
    Error,
    "encode-error: U+B666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB667");
    },
    Error,
    "encode-error: U+B667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB668");
    },
    Error,
    "encode-error: U+B668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB669");
    },
    Error,
    "encode-error: U+B669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB66A");
    },
    Error,
    "encode-error: U+B66A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB66B");
    },
    Error,
    "encode-error: U+B66B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB66C");
    },
    Error,
    "encode-error: U+B66C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB66D");
    },
    Error,
    "encode-error: U+B66D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB66E");
    },
    Error,
    "encode-error: U+B66E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB66F");
    },
    Error,
    "encode-error: U+B66F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB670");
    },
    Error,
    "encode-error: U+B670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB671");
    },
    Error,
    "encode-error: U+B671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB672");
    },
    Error,
    "encode-error: U+B672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB673");
    },
    Error,
    "encode-error: U+B673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB674");
    },
    Error,
    "encode-error: U+B674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB675");
    },
    Error,
    "encode-error: U+B675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB676");
    },
    Error,
    "encode-error: U+B676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB677");
    },
    Error,
    "encode-error: U+B677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB678");
    },
    Error,
    "encode-error: U+B678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB679");
    },
    Error,
    "encode-error: U+B679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB67A");
    },
    Error,
    "encode-error: U+B67A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB67B");
    },
    Error,
    "encode-error: U+B67B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB67C");
    },
    Error,
    "encode-error: U+B67C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB67D");
    },
    Error,
    "encode-error: U+B67D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB67E");
    },
    Error,
    "encode-error: U+B67E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB67F");
    },
    Error,
    "encode-error: U+B67F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB680");
    },
    Error,
    "encode-error: U+B680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB681");
    },
    Error,
    "encode-error: U+B681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB682");
    },
    Error,
    "encode-error: U+B682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB683");
    },
    Error,
    "encode-error: U+B683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB684");
    },
    Error,
    "encode-error: U+B684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB685");
    },
    Error,
    "encode-error: U+B685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB686");
    },
    Error,
    "encode-error: U+B686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB687");
    },
    Error,
    "encode-error: U+B687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB688");
    },
    Error,
    "encode-error: U+B688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB689");
    },
    Error,
    "encode-error: U+B689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB68A");
    },
    Error,
    "encode-error: U+B68A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB68B");
    },
    Error,
    "encode-error: U+B68B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB68C");
    },
    Error,
    "encode-error: U+B68C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB68D");
    },
    Error,
    "encode-error: U+B68D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB68E");
    },
    Error,
    "encode-error: U+B68E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB68F");
    },
    Error,
    "encode-error: U+B68F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB690");
    },
    Error,
    "encode-error: U+B690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB691");
    },
    Error,
    "encode-error: U+B691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB692");
    },
    Error,
    "encode-error: U+B692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB693");
    },
    Error,
    "encode-error: U+B693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB694");
    },
    Error,
    "encode-error: U+B694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB695");
    },
    Error,
    "encode-error: U+B695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB696");
    },
    Error,
    "encode-error: U+B696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB697");
    },
    Error,
    "encode-error: U+B697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB698");
    },
    Error,
    "encode-error: U+B698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB699");
    },
    Error,
    "encode-error: U+B699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB69A");
    },
    Error,
    "encode-error: U+B69A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB69B");
    },
    Error,
    "encode-error: U+B69B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB69C");
    },
    Error,
    "encode-error: U+B69C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB69D");
    },
    Error,
    "encode-error: U+B69D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB69E");
    },
    Error,
    "encode-error: U+B69E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB69F");
    },
    Error,
    "encode-error: U+B69F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6A0");
    },
    Error,
    "encode-error: U+B6A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6A1");
    },
    Error,
    "encode-error: U+B6A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6A2");
    },
    Error,
    "encode-error: U+B6A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6A3");
    },
    Error,
    "encode-error: U+B6A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6A4");
    },
    Error,
    "encode-error: U+B6A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6A5");
    },
    Error,
    "encode-error: U+B6A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6A6");
    },
    Error,
    "encode-error: U+B6A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6A7");
    },
    Error,
    "encode-error: U+B6A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6A8");
    },
    Error,
    "encode-error: U+B6A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6A9");
    },
    Error,
    "encode-error: U+B6A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6AA");
    },
    Error,
    "encode-error: U+B6AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6AB");
    },
    Error,
    "encode-error: U+B6AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6AC");
    },
    Error,
    "encode-error: U+B6AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6AD");
    },
    Error,
    "encode-error: U+B6AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6AE");
    },
    Error,
    "encode-error: U+B6AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6AF");
    },
    Error,
    "encode-error: U+B6AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6B0");
    },
    Error,
    "encode-error: U+B6B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6B1");
    },
    Error,
    "encode-error: U+B6B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6B2");
    },
    Error,
    "encode-error: U+B6B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6B3");
    },
    Error,
    "encode-error: U+B6B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6B4");
    },
    Error,
    "encode-error: U+B6B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6B5");
    },
    Error,
    "encode-error: U+B6B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6B6");
    },
    Error,
    "encode-error: U+B6B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6B7");
    },
    Error,
    "encode-error: U+B6B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6B8");
    },
    Error,
    "encode-error: U+B6B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6B9");
    },
    Error,
    "encode-error: U+B6B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6BA");
    },
    Error,
    "encode-error: U+B6BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6BB");
    },
    Error,
    "encode-error: U+B6BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6BC");
    },
    Error,
    "encode-error: U+B6BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6BD");
    },
    Error,
    "encode-error: U+B6BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6BE");
    },
    Error,
    "encode-error: U+B6BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6BF");
    },
    Error,
    "encode-error: U+B6BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6C0");
    },
    Error,
    "encode-error: U+B6C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6C1");
    },
    Error,
    "encode-error: U+B6C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6C2");
    },
    Error,
    "encode-error: U+B6C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6C3");
    },
    Error,
    "encode-error: U+B6C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6C4");
    },
    Error,
    "encode-error: U+B6C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6C5");
    },
    Error,
    "encode-error: U+B6C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6C6");
    },
    Error,
    "encode-error: U+B6C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6C7");
    },
    Error,
    "encode-error: U+B6C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6C8");
    },
    Error,
    "encode-error: U+B6C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6C9");
    },
    Error,
    "encode-error: U+B6C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6CA");
    },
    Error,
    "encode-error: U+B6CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6CB");
    },
    Error,
    "encode-error: U+B6CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6CC");
    },
    Error,
    "encode-error: U+B6CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6CD");
    },
    Error,
    "encode-error: U+B6CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6CE");
    },
    Error,
    "encode-error: U+B6CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6CF");
    },
    Error,
    "encode-error: U+B6CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6D0");
    },
    Error,
    "encode-error: U+B6D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6D1");
    },
    Error,
    "encode-error: U+B6D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6D2");
    },
    Error,
    "encode-error: U+B6D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6D3");
    },
    Error,
    "encode-error: U+B6D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6D4");
    },
    Error,
    "encode-error: U+B6D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6D5");
    },
    Error,
    "encode-error: U+B6D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6D6");
    },
    Error,
    "encode-error: U+B6D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6D7");
    },
    Error,
    "encode-error: U+B6D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6D8");
    },
    Error,
    "encode-error: U+B6D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6D9");
    },
    Error,
    "encode-error: U+B6D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6DA");
    },
    Error,
    "encode-error: U+B6DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6DB");
    },
    Error,
    "encode-error: U+B6DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6DC");
    },
    Error,
    "encode-error: U+B6DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6DD");
    },
    Error,
    "encode-error: U+B6DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6DE");
    },
    Error,
    "encode-error: U+B6DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6DF");
    },
    Error,
    "encode-error: U+B6DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6E0");
    },
    Error,
    "encode-error: U+B6E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6E1");
    },
    Error,
    "encode-error: U+B6E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6E2");
    },
    Error,
    "encode-error: U+B6E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6E3");
    },
    Error,
    "encode-error: U+B6E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6E4");
    },
    Error,
    "encode-error: U+B6E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6E5");
    },
    Error,
    "encode-error: U+B6E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6E6");
    },
    Error,
    "encode-error: U+B6E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6E7");
    },
    Error,
    "encode-error: U+B6E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6E8");
    },
    Error,
    "encode-error: U+B6E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6E9");
    },
    Error,
    "encode-error: U+B6E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6EA");
    },
    Error,
    "encode-error: U+B6EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6EB");
    },
    Error,
    "encode-error: U+B6EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6EC");
    },
    Error,
    "encode-error: U+B6EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6ED");
    },
    Error,
    "encode-error: U+B6ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6EE");
    },
    Error,
    "encode-error: U+B6EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6EF");
    },
    Error,
    "encode-error: U+B6EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6F0");
    },
    Error,
    "encode-error: U+B6F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6F1");
    },
    Error,
    "encode-error: U+B6F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6F2");
    },
    Error,
    "encode-error: U+B6F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6F3");
    },
    Error,
    "encode-error: U+B6F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6F4");
    },
    Error,
    "encode-error: U+B6F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6F5");
    },
    Error,
    "encode-error: U+B6F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6F6");
    },
    Error,
    "encode-error: U+B6F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6F7");
    },
    Error,
    "encode-error: U+B6F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6F8");
    },
    Error,
    "encode-error: U+B6F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6F9");
    },
    Error,
    "encode-error: U+B6F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6FA");
    },
    Error,
    "encode-error: U+B6FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6FB");
    },
    Error,
    "encode-error: U+B6FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6FC");
    },
    Error,
    "encode-error: U+B6FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6FD");
    },
    Error,
    "encode-error: U+B6FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6FE");
    },
    Error,
    "encode-error: U+B6FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB6FF");
    },
    Error,
    "encode-error: U+B6FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB700");
    },
    Error,
    "encode-error: U+B700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB701");
    },
    Error,
    "encode-error: U+B701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB702");
    },
    Error,
    "encode-error: U+B702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB703");
    },
    Error,
    "encode-error: U+B703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB704");
    },
    Error,
    "encode-error: U+B704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB705");
    },
    Error,
    "encode-error: U+B705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB706");
    },
    Error,
    "encode-error: U+B706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB707");
    },
    Error,
    "encode-error: U+B707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB708");
    },
    Error,
    "encode-error: U+B708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB709");
    },
    Error,
    "encode-error: U+B709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB70A");
    },
    Error,
    "encode-error: U+B70A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB70B");
    },
    Error,
    "encode-error: U+B70B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB70C");
    },
    Error,
    "encode-error: U+B70C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB70D");
    },
    Error,
    "encode-error: U+B70D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB70E");
    },
    Error,
    "encode-error: U+B70E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB70F");
    },
    Error,
    "encode-error: U+B70F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB710");
    },
    Error,
    "encode-error: U+B710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB711");
    },
    Error,
    "encode-error: U+B711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB712");
    },
    Error,
    "encode-error: U+B712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB713");
    },
    Error,
    "encode-error: U+B713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB714");
    },
    Error,
    "encode-error: U+B714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB715");
    },
    Error,
    "encode-error: U+B715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB716");
    },
    Error,
    "encode-error: U+B716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB717");
    },
    Error,
    "encode-error: U+B717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB718");
    },
    Error,
    "encode-error: U+B718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB719");
    },
    Error,
    "encode-error: U+B719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB71A");
    },
    Error,
    "encode-error: U+B71A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB71B");
    },
    Error,
    "encode-error: U+B71B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB71C");
    },
    Error,
    "encode-error: U+B71C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB71D");
    },
    Error,
    "encode-error: U+B71D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB71E");
    },
    Error,
    "encode-error: U+B71E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB71F");
    },
    Error,
    "encode-error: U+B71F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB720");
    },
    Error,
    "encode-error: U+B720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB721");
    },
    Error,
    "encode-error: U+B721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB722");
    },
    Error,
    "encode-error: U+B722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB723");
    },
    Error,
    "encode-error: U+B723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB724");
    },
    Error,
    "encode-error: U+B724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB725");
    },
    Error,
    "encode-error: U+B725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB726");
    },
    Error,
    "encode-error: U+B726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB727");
    },
    Error,
    "encode-error: U+B727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB728");
    },
    Error,
    "encode-error: U+B728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB729");
    },
    Error,
    "encode-error: U+B729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB72A");
    },
    Error,
    "encode-error: U+B72A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB72B");
    },
    Error,
    "encode-error: U+B72B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB72C");
    },
    Error,
    "encode-error: U+B72C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB72D");
    },
    Error,
    "encode-error: U+B72D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB72E");
    },
    Error,
    "encode-error: U+B72E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB72F");
    },
    Error,
    "encode-error: U+B72F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB730");
    },
    Error,
    "encode-error: U+B730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB731");
    },
    Error,
    "encode-error: U+B731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB732");
    },
    Error,
    "encode-error: U+B732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB733");
    },
    Error,
    "encode-error: U+B733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB734");
    },
    Error,
    "encode-error: U+B734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB735");
    },
    Error,
    "encode-error: U+B735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB736");
    },
    Error,
    "encode-error: U+B736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB737");
    },
    Error,
    "encode-error: U+B737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB738");
    },
    Error,
    "encode-error: U+B738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB739");
    },
    Error,
    "encode-error: U+B739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB73A");
    },
    Error,
    "encode-error: U+B73A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB73B");
    },
    Error,
    "encode-error: U+B73B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB73C");
    },
    Error,
    "encode-error: U+B73C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB73D");
    },
    Error,
    "encode-error: U+B73D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB73E");
    },
    Error,
    "encode-error: U+B73E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB73F");
    },
    Error,
    "encode-error: U+B73F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB740");
    },
    Error,
    "encode-error: U+B740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB741");
    },
    Error,
    "encode-error: U+B741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB742");
    },
    Error,
    "encode-error: U+B742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB743");
    },
    Error,
    "encode-error: U+B743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB744");
    },
    Error,
    "encode-error: U+B744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB745");
    },
    Error,
    "encode-error: U+B745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB746");
    },
    Error,
    "encode-error: U+B746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB747");
    },
    Error,
    "encode-error: U+B747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB748");
    },
    Error,
    "encode-error: U+B748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB749");
    },
    Error,
    "encode-error: U+B749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB74A");
    },
    Error,
    "encode-error: U+B74A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB74B");
    },
    Error,
    "encode-error: U+B74B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB74C");
    },
    Error,
    "encode-error: U+B74C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB74D");
    },
    Error,
    "encode-error: U+B74D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB74E");
    },
    Error,
    "encode-error: U+B74E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB74F");
    },
    Error,
    "encode-error: U+B74F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB750");
    },
    Error,
    "encode-error: U+B750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB751");
    },
    Error,
    "encode-error: U+B751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB752");
    },
    Error,
    "encode-error: U+B752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB753");
    },
    Error,
    "encode-error: U+B753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB754");
    },
    Error,
    "encode-error: U+B754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB755");
    },
    Error,
    "encode-error: U+B755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB756");
    },
    Error,
    "encode-error: U+B756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB757");
    },
    Error,
    "encode-error: U+B757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB758");
    },
    Error,
    "encode-error: U+B758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB759");
    },
    Error,
    "encode-error: U+B759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB75A");
    },
    Error,
    "encode-error: U+B75A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB75B");
    },
    Error,
    "encode-error: U+B75B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB75C");
    },
    Error,
    "encode-error: U+B75C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB75D");
    },
    Error,
    "encode-error: U+B75D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB75E");
    },
    Error,
    "encode-error: U+B75E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB75F");
    },
    Error,
    "encode-error: U+B75F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB760");
    },
    Error,
    "encode-error: U+B760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB761");
    },
    Error,
    "encode-error: U+B761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB762");
    },
    Error,
    "encode-error: U+B762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB763");
    },
    Error,
    "encode-error: U+B763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB764");
    },
    Error,
    "encode-error: U+B764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB765");
    },
    Error,
    "encode-error: U+B765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB766");
    },
    Error,
    "encode-error: U+B766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB767");
    },
    Error,
    "encode-error: U+B767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB768");
    },
    Error,
    "encode-error: U+B768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB769");
    },
    Error,
    "encode-error: U+B769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB76A");
    },
    Error,
    "encode-error: U+B76A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB76B");
    },
    Error,
    "encode-error: U+B76B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB76C");
    },
    Error,
    "encode-error: U+B76C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB76D");
    },
    Error,
    "encode-error: U+B76D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB76E");
    },
    Error,
    "encode-error: U+B76E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB76F");
    },
    Error,
    "encode-error: U+B76F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB770");
    },
    Error,
    "encode-error: U+B770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB771");
    },
    Error,
    "encode-error: U+B771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB772");
    },
    Error,
    "encode-error: U+B772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB773");
    },
    Error,
    "encode-error: U+B773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB774");
    },
    Error,
    "encode-error: U+B774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB775");
    },
    Error,
    "encode-error: U+B775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB776");
    },
    Error,
    "encode-error: U+B776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB777");
    },
    Error,
    "encode-error: U+B777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB778");
    },
    Error,
    "encode-error: U+B778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB779");
    },
    Error,
    "encode-error: U+B779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB77A");
    },
    Error,
    "encode-error: U+B77A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB77B");
    },
    Error,
    "encode-error: U+B77B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB77C");
    },
    Error,
    "encode-error: U+B77C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB77D");
    },
    Error,
    "encode-error: U+B77D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB77E");
    },
    Error,
    "encode-error: U+B77E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB77F");
    },
    Error,
    "encode-error: U+B77F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB780");
    },
    Error,
    "encode-error: U+B780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB781");
    },
    Error,
    "encode-error: U+B781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB782");
    },
    Error,
    "encode-error: U+B782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB783");
    },
    Error,
    "encode-error: U+B783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB784");
    },
    Error,
    "encode-error: U+B784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB785");
    },
    Error,
    "encode-error: U+B785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB786");
    },
    Error,
    "encode-error: U+B786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB787");
    },
    Error,
    "encode-error: U+B787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB788");
    },
    Error,
    "encode-error: U+B788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB789");
    },
    Error,
    "encode-error: U+B789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB78A");
    },
    Error,
    "encode-error: U+B78A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB78B");
    },
    Error,
    "encode-error: U+B78B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB78C");
    },
    Error,
    "encode-error: U+B78C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB78D");
    },
    Error,
    "encode-error: U+B78D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB78E");
    },
    Error,
    "encode-error: U+B78E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB78F");
    },
    Error,
    "encode-error: U+B78F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB790");
    },
    Error,
    "encode-error: U+B790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB791");
    },
    Error,
    "encode-error: U+B791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB792");
    },
    Error,
    "encode-error: U+B792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB793");
    },
    Error,
    "encode-error: U+B793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB794");
    },
    Error,
    "encode-error: U+B794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB795");
    },
    Error,
    "encode-error: U+B795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB796");
    },
    Error,
    "encode-error: U+B796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB797");
    },
    Error,
    "encode-error: U+B797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB798");
    },
    Error,
    "encode-error: U+B798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB799");
    },
    Error,
    "encode-error: U+B799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB79A");
    },
    Error,
    "encode-error: U+B79A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB79B");
    },
    Error,
    "encode-error: U+B79B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB79C");
    },
    Error,
    "encode-error: U+B79C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB79D");
    },
    Error,
    "encode-error: U+B79D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB79E");
    },
    Error,
    "encode-error: U+B79E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB79F");
    },
    Error,
    "encode-error: U+B79F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7A0");
    },
    Error,
    "encode-error: U+B7A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7A1");
    },
    Error,
    "encode-error: U+B7A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7A2");
    },
    Error,
    "encode-error: U+B7A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7A3");
    },
    Error,
    "encode-error: U+B7A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7A4");
    },
    Error,
    "encode-error: U+B7A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7A5");
    },
    Error,
    "encode-error: U+B7A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7A6");
    },
    Error,
    "encode-error: U+B7A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7A7");
    },
    Error,
    "encode-error: U+B7A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7A8");
    },
    Error,
    "encode-error: U+B7A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7A9");
    },
    Error,
    "encode-error: U+B7A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7AA");
    },
    Error,
    "encode-error: U+B7AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7AB");
    },
    Error,
    "encode-error: U+B7AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7AC");
    },
    Error,
    "encode-error: U+B7AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7AD");
    },
    Error,
    "encode-error: U+B7AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7AE");
    },
    Error,
    "encode-error: U+B7AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7AF");
    },
    Error,
    "encode-error: U+B7AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7B0");
    },
    Error,
    "encode-error: U+B7B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7B1");
    },
    Error,
    "encode-error: U+B7B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7B2");
    },
    Error,
    "encode-error: U+B7B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7B3");
    },
    Error,
    "encode-error: U+B7B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7B4");
    },
    Error,
    "encode-error: U+B7B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7B5");
    },
    Error,
    "encode-error: U+B7B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7B6");
    },
    Error,
    "encode-error: U+B7B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7B7");
    },
    Error,
    "encode-error: U+B7B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7B8");
    },
    Error,
    "encode-error: U+B7B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7B9");
    },
    Error,
    "encode-error: U+B7B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7BA");
    },
    Error,
    "encode-error: U+B7BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7BB");
    },
    Error,
    "encode-error: U+B7BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7BC");
    },
    Error,
    "encode-error: U+B7BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7BD");
    },
    Error,
    "encode-error: U+B7BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7BE");
    },
    Error,
    "encode-error: U+B7BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7BF");
    },
    Error,
    "encode-error: U+B7BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7C0");
    },
    Error,
    "encode-error: U+B7C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7C1");
    },
    Error,
    "encode-error: U+B7C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7C2");
    },
    Error,
    "encode-error: U+B7C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7C3");
    },
    Error,
    "encode-error: U+B7C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7C4");
    },
    Error,
    "encode-error: U+B7C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7C5");
    },
    Error,
    "encode-error: U+B7C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7C6");
    },
    Error,
    "encode-error: U+B7C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7C7");
    },
    Error,
    "encode-error: U+B7C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7C8");
    },
    Error,
    "encode-error: U+B7C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7C9");
    },
    Error,
    "encode-error: U+B7C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7CA");
    },
    Error,
    "encode-error: U+B7CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7CB");
    },
    Error,
    "encode-error: U+B7CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7CC");
    },
    Error,
    "encode-error: U+B7CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7CD");
    },
    Error,
    "encode-error: U+B7CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7CE");
    },
    Error,
    "encode-error: U+B7CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7CF");
    },
    Error,
    "encode-error: U+B7CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7D0");
    },
    Error,
    "encode-error: U+B7D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7D1");
    },
    Error,
    "encode-error: U+B7D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7D2");
    },
    Error,
    "encode-error: U+B7D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7D3");
    },
    Error,
    "encode-error: U+B7D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7D4");
    },
    Error,
    "encode-error: U+B7D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7D5");
    },
    Error,
    "encode-error: U+B7D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7D6");
    },
    Error,
    "encode-error: U+B7D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7D7");
    },
    Error,
    "encode-error: U+B7D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7D8");
    },
    Error,
    "encode-error: U+B7D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7D9");
    },
    Error,
    "encode-error: U+B7D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7DA");
    },
    Error,
    "encode-error: U+B7DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7DB");
    },
    Error,
    "encode-error: U+B7DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7DC");
    },
    Error,
    "encode-error: U+B7DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7DD");
    },
    Error,
    "encode-error: U+B7DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7DE");
    },
    Error,
    "encode-error: U+B7DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7DF");
    },
    Error,
    "encode-error: U+B7DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7E0");
    },
    Error,
    "encode-error: U+B7E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7E1");
    },
    Error,
    "encode-error: U+B7E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7E2");
    },
    Error,
    "encode-error: U+B7E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7E3");
    },
    Error,
    "encode-error: U+B7E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7E4");
    },
    Error,
    "encode-error: U+B7E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7E5");
    },
    Error,
    "encode-error: U+B7E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7E6");
    },
    Error,
    "encode-error: U+B7E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7E7");
    },
    Error,
    "encode-error: U+B7E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7E8");
    },
    Error,
    "encode-error: U+B7E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7E9");
    },
    Error,
    "encode-error: U+B7E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7EA");
    },
    Error,
    "encode-error: U+B7EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7EB");
    },
    Error,
    "encode-error: U+B7EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7EC");
    },
    Error,
    "encode-error: U+B7EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7ED");
    },
    Error,
    "encode-error: U+B7ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7EE");
    },
    Error,
    "encode-error: U+B7EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7EF");
    },
    Error,
    "encode-error: U+B7EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7F0");
    },
    Error,
    "encode-error: U+B7F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7F1");
    },
    Error,
    "encode-error: U+B7F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7F2");
    },
    Error,
    "encode-error: U+B7F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7F3");
    },
    Error,
    "encode-error: U+B7F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7F4");
    },
    Error,
    "encode-error: U+B7F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7F5");
    },
    Error,
    "encode-error: U+B7F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7F6");
    },
    Error,
    "encode-error: U+B7F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7F7");
    },
    Error,
    "encode-error: U+B7F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7F8");
    },
    Error,
    "encode-error: U+B7F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7F9");
    },
    Error,
    "encode-error: U+B7F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7FA");
    },
    Error,
    "encode-error: U+B7FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7FB");
    },
    Error,
    "encode-error: U+B7FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7FC");
    },
    Error,
    "encode-error: U+B7FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7FD");
    },
    Error,
    "encode-error: U+B7FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7FE");
    },
    Error,
    "encode-error: U+B7FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB7FF");
    },
    Error,
    "encode-error: U+B7FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB800");
    },
    Error,
    "encode-error: U+B800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB801");
    },
    Error,
    "encode-error: U+B801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB802");
    },
    Error,
    "encode-error: U+B802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB803");
    },
    Error,
    "encode-error: U+B803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB804");
    },
    Error,
    "encode-error: U+B804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB805");
    },
    Error,
    "encode-error: U+B805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB806");
    },
    Error,
    "encode-error: U+B806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB807");
    },
    Error,
    "encode-error: U+B807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB808");
    },
    Error,
    "encode-error: U+B808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB809");
    },
    Error,
    "encode-error: U+B809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB80A");
    },
    Error,
    "encode-error: U+B80A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB80B");
    },
    Error,
    "encode-error: U+B80B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB80C");
    },
    Error,
    "encode-error: U+B80C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB80D");
    },
    Error,
    "encode-error: U+B80D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB80E");
    },
    Error,
    "encode-error: U+B80E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB80F");
    },
    Error,
    "encode-error: U+B80F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB810");
    },
    Error,
    "encode-error: U+B810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB811");
    },
    Error,
    "encode-error: U+B811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB812");
    },
    Error,
    "encode-error: U+B812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB813");
    },
    Error,
    "encode-error: U+B813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB814");
    },
    Error,
    "encode-error: U+B814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB815");
    },
    Error,
    "encode-error: U+B815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB816");
    },
    Error,
    "encode-error: U+B816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB817");
    },
    Error,
    "encode-error: U+B817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB818");
    },
    Error,
    "encode-error: U+B818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB819");
    },
    Error,
    "encode-error: U+B819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB81A");
    },
    Error,
    "encode-error: U+B81A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB81B");
    },
    Error,
    "encode-error: U+B81B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB81C");
    },
    Error,
    "encode-error: U+B81C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB81D");
    },
    Error,
    "encode-error: U+B81D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB81E");
    },
    Error,
    "encode-error: U+B81E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB81F");
    },
    Error,
    "encode-error: U+B81F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB820");
    },
    Error,
    "encode-error: U+B820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB821");
    },
    Error,
    "encode-error: U+B821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB822");
    },
    Error,
    "encode-error: U+B822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB823");
    },
    Error,
    "encode-error: U+B823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB824");
    },
    Error,
    "encode-error: U+B824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB825");
    },
    Error,
    "encode-error: U+B825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB826");
    },
    Error,
    "encode-error: U+B826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB827");
    },
    Error,
    "encode-error: U+B827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB828");
    },
    Error,
    "encode-error: U+B828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB829");
    },
    Error,
    "encode-error: U+B829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB82A");
    },
    Error,
    "encode-error: U+B82A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB82B");
    },
    Error,
    "encode-error: U+B82B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB82C");
    },
    Error,
    "encode-error: U+B82C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB82D");
    },
    Error,
    "encode-error: U+B82D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB82E");
    },
    Error,
    "encode-error: U+B82E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB82F");
    },
    Error,
    "encode-error: U+B82F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB830");
    },
    Error,
    "encode-error: U+B830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB831");
    },
    Error,
    "encode-error: U+B831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB832");
    },
    Error,
    "encode-error: U+B832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB833");
    },
    Error,
    "encode-error: U+B833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB834");
    },
    Error,
    "encode-error: U+B834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB835");
    },
    Error,
    "encode-error: U+B835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB836");
    },
    Error,
    "encode-error: U+B836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB837");
    },
    Error,
    "encode-error: U+B837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB838");
    },
    Error,
    "encode-error: U+B838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB839");
    },
    Error,
    "encode-error: U+B839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB83A");
    },
    Error,
    "encode-error: U+B83A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB83B");
    },
    Error,
    "encode-error: U+B83B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB83C");
    },
    Error,
    "encode-error: U+B83C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB83D");
    },
    Error,
    "encode-error: U+B83D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB83E");
    },
    Error,
    "encode-error: U+B83E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB83F");
    },
    Error,
    "encode-error: U+B83F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB840");
    },
    Error,
    "encode-error: U+B840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB841");
    },
    Error,
    "encode-error: U+B841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB842");
    },
    Error,
    "encode-error: U+B842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB843");
    },
    Error,
    "encode-error: U+B843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB844");
    },
    Error,
    "encode-error: U+B844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB845");
    },
    Error,
    "encode-error: U+B845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB846");
    },
    Error,
    "encode-error: U+B846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB847");
    },
    Error,
    "encode-error: U+B847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB848");
    },
    Error,
    "encode-error: U+B848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB849");
    },
    Error,
    "encode-error: U+B849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB84A");
    },
    Error,
    "encode-error: U+B84A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB84B");
    },
    Error,
    "encode-error: U+B84B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB84C");
    },
    Error,
    "encode-error: U+B84C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB84D");
    },
    Error,
    "encode-error: U+B84D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB84E");
    },
    Error,
    "encode-error: U+B84E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB84F");
    },
    Error,
    "encode-error: U+B84F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB850");
    },
    Error,
    "encode-error: U+B850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB851");
    },
    Error,
    "encode-error: U+B851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB852");
    },
    Error,
    "encode-error: U+B852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB853");
    },
    Error,
    "encode-error: U+B853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB854");
    },
    Error,
    "encode-error: U+B854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB855");
    },
    Error,
    "encode-error: U+B855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB856");
    },
    Error,
    "encode-error: U+B856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB857");
    },
    Error,
    "encode-error: U+B857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB858");
    },
    Error,
    "encode-error: U+B858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB859");
    },
    Error,
    "encode-error: U+B859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB85A");
    },
    Error,
    "encode-error: U+B85A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB85B");
    },
    Error,
    "encode-error: U+B85B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB85C");
    },
    Error,
    "encode-error: U+B85C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB85D");
    },
    Error,
    "encode-error: U+B85D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB85E");
    },
    Error,
    "encode-error: U+B85E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB85F");
    },
    Error,
    "encode-error: U+B85F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB860");
    },
    Error,
    "encode-error: U+B860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB861");
    },
    Error,
    "encode-error: U+B861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB862");
    },
    Error,
    "encode-error: U+B862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB863");
    },
    Error,
    "encode-error: U+B863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB864");
    },
    Error,
    "encode-error: U+B864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB865");
    },
    Error,
    "encode-error: U+B865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB866");
    },
    Error,
    "encode-error: U+B866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB867");
    },
    Error,
    "encode-error: U+B867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB868");
    },
    Error,
    "encode-error: U+B868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB869");
    },
    Error,
    "encode-error: U+B869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB86A");
    },
    Error,
    "encode-error: U+B86A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB86B");
    },
    Error,
    "encode-error: U+B86B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB86C");
    },
    Error,
    "encode-error: U+B86C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB86D");
    },
    Error,
    "encode-error: U+B86D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB86E");
    },
    Error,
    "encode-error: U+B86E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB86F");
    },
    Error,
    "encode-error: U+B86F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB870");
    },
    Error,
    "encode-error: U+B870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB871");
    },
    Error,
    "encode-error: U+B871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB872");
    },
    Error,
    "encode-error: U+B872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB873");
    },
    Error,
    "encode-error: U+B873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB874");
    },
    Error,
    "encode-error: U+B874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB875");
    },
    Error,
    "encode-error: U+B875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB876");
    },
    Error,
    "encode-error: U+B876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB877");
    },
    Error,
    "encode-error: U+B877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB878");
    },
    Error,
    "encode-error: U+B878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB879");
    },
    Error,
    "encode-error: U+B879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB87A");
    },
    Error,
    "encode-error: U+B87A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB87B");
    },
    Error,
    "encode-error: U+B87B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB87C");
    },
    Error,
    "encode-error: U+B87C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB87D");
    },
    Error,
    "encode-error: U+B87D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB87E");
    },
    Error,
    "encode-error: U+B87E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB87F");
    },
    Error,
    "encode-error: U+B87F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB880");
    },
    Error,
    "encode-error: U+B880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB881");
    },
    Error,
    "encode-error: U+B881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB882");
    },
    Error,
    "encode-error: U+B882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB883");
    },
    Error,
    "encode-error: U+B883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB884");
    },
    Error,
    "encode-error: U+B884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB885");
    },
    Error,
    "encode-error: U+B885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB886");
    },
    Error,
    "encode-error: U+B886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB887");
    },
    Error,
    "encode-error: U+B887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB888");
    },
    Error,
    "encode-error: U+B888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB889");
    },
    Error,
    "encode-error: U+B889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB88A");
    },
    Error,
    "encode-error: U+B88A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB88B");
    },
    Error,
    "encode-error: U+B88B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB88C");
    },
    Error,
    "encode-error: U+B88C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB88D");
    },
    Error,
    "encode-error: U+B88D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB88E");
    },
    Error,
    "encode-error: U+B88E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB88F");
    },
    Error,
    "encode-error: U+B88F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB890");
    },
    Error,
    "encode-error: U+B890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB891");
    },
    Error,
    "encode-error: U+B891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB892");
    },
    Error,
    "encode-error: U+B892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB893");
    },
    Error,
    "encode-error: U+B893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB894");
    },
    Error,
    "encode-error: U+B894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB895");
    },
    Error,
    "encode-error: U+B895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB896");
    },
    Error,
    "encode-error: U+B896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB897");
    },
    Error,
    "encode-error: U+B897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB898");
    },
    Error,
    "encode-error: U+B898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB899");
    },
    Error,
    "encode-error: U+B899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB89A");
    },
    Error,
    "encode-error: U+B89A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB89B");
    },
    Error,
    "encode-error: U+B89B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB89C");
    },
    Error,
    "encode-error: U+B89C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB89D");
    },
    Error,
    "encode-error: U+B89D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB89E");
    },
    Error,
    "encode-error: U+B89E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB89F");
    },
    Error,
    "encode-error: U+B89F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8A0");
    },
    Error,
    "encode-error: U+B8A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8A1");
    },
    Error,
    "encode-error: U+B8A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8A2");
    },
    Error,
    "encode-error: U+B8A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8A3");
    },
    Error,
    "encode-error: U+B8A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8A4");
    },
    Error,
    "encode-error: U+B8A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8A5");
    },
    Error,
    "encode-error: U+B8A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8A6");
    },
    Error,
    "encode-error: U+B8A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8A7");
    },
    Error,
    "encode-error: U+B8A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8A8");
    },
    Error,
    "encode-error: U+B8A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8A9");
    },
    Error,
    "encode-error: U+B8A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8AA");
    },
    Error,
    "encode-error: U+B8AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8AB");
    },
    Error,
    "encode-error: U+B8AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8AC");
    },
    Error,
    "encode-error: U+B8AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8AD");
    },
    Error,
    "encode-error: U+B8AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8AE");
    },
    Error,
    "encode-error: U+B8AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8AF");
    },
    Error,
    "encode-error: U+B8AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8B0");
    },
    Error,
    "encode-error: U+B8B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8B1");
    },
    Error,
    "encode-error: U+B8B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8B2");
    },
    Error,
    "encode-error: U+B8B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8B3");
    },
    Error,
    "encode-error: U+B8B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8B4");
    },
    Error,
    "encode-error: U+B8B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8B5");
    },
    Error,
    "encode-error: U+B8B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8B6");
    },
    Error,
    "encode-error: U+B8B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8B7");
    },
    Error,
    "encode-error: U+B8B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8B8");
    },
    Error,
    "encode-error: U+B8B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8B9");
    },
    Error,
    "encode-error: U+B8B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8BA");
    },
    Error,
    "encode-error: U+B8BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8BB");
    },
    Error,
    "encode-error: U+B8BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8BC");
    },
    Error,
    "encode-error: U+B8BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8BD");
    },
    Error,
    "encode-error: U+B8BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8BE");
    },
    Error,
    "encode-error: U+B8BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8BF");
    },
    Error,
    "encode-error: U+B8BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8C0");
    },
    Error,
    "encode-error: U+B8C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8C1");
    },
    Error,
    "encode-error: U+B8C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8C2");
    },
    Error,
    "encode-error: U+B8C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8C3");
    },
    Error,
    "encode-error: U+B8C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8C4");
    },
    Error,
    "encode-error: U+B8C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8C5");
    },
    Error,
    "encode-error: U+B8C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8C6");
    },
    Error,
    "encode-error: U+B8C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8C7");
    },
    Error,
    "encode-error: U+B8C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8C8");
    },
    Error,
    "encode-error: U+B8C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8C9");
    },
    Error,
    "encode-error: U+B8C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8CA");
    },
    Error,
    "encode-error: U+B8CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8CB");
    },
    Error,
    "encode-error: U+B8CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8CC");
    },
    Error,
    "encode-error: U+B8CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8CD");
    },
    Error,
    "encode-error: U+B8CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8CE");
    },
    Error,
    "encode-error: U+B8CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8CF");
    },
    Error,
    "encode-error: U+B8CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8D0");
    },
    Error,
    "encode-error: U+B8D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8D1");
    },
    Error,
    "encode-error: U+B8D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8D2");
    },
    Error,
    "encode-error: U+B8D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8D3");
    },
    Error,
    "encode-error: U+B8D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8D4");
    },
    Error,
    "encode-error: U+B8D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8D5");
    },
    Error,
    "encode-error: U+B8D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8D6");
    },
    Error,
    "encode-error: U+B8D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8D7");
    },
    Error,
    "encode-error: U+B8D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8D8");
    },
    Error,
    "encode-error: U+B8D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8D9");
    },
    Error,
    "encode-error: U+B8D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8DA");
    },
    Error,
    "encode-error: U+B8DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8DB");
    },
    Error,
    "encode-error: U+B8DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8DC");
    },
    Error,
    "encode-error: U+B8DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8DD");
    },
    Error,
    "encode-error: U+B8DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8DE");
    },
    Error,
    "encode-error: U+B8DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8DF");
    },
    Error,
    "encode-error: U+B8DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8E0");
    },
    Error,
    "encode-error: U+B8E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8E1");
    },
    Error,
    "encode-error: U+B8E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8E2");
    },
    Error,
    "encode-error: U+B8E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8E3");
    },
    Error,
    "encode-error: U+B8E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8E4");
    },
    Error,
    "encode-error: U+B8E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8E5");
    },
    Error,
    "encode-error: U+B8E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8E6");
    },
    Error,
    "encode-error: U+B8E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8E7");
    },
    Error,
    "encode-error: U+B8E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8E8");
    },
    Error,
    "encode-error: U+B8E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8E9");
    },
    Error,
    "encode-error: U+B8E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8EA");
    },
    Error,
    "encode-error: U+B8EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8EB");
    },
    Error,
    "encode-error: U+B8EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8EC");
    },
    Error,
    "encode-error: U+B8EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8ED");
    },
    Error,
    "encode-error: U+B8ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8EE");
    },
    Error,
    "encode-error: U+B8EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8EF");
    },
    Error,
    "encode-error: U+B8EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8F0");
    },
    Error,
    "encode-error: U+B8F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8F1");
    },
    Error,
    "encode-error: U+B8F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8F2");
    },
    Error,
    "encode-error: U+B8F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8F3");
    },
    Error,
    "encode-error: U+B8F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8F4");
    },
    Error,
    "encode-error: U+B8F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8F5");
    },
    Error,
    "encode-error: U+B8F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8F6");
    },
    Error,
    "encode-error: U+B8F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8F7");
    },
    Error,
    "encode-error: U+B8F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8F8");
    },
    Error,
    "encode-error: U+B8F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8F9");
    },
    Error,
    "encode-error: U+B8F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8FA");
    },
    Error,
    "encode-error: U+B8FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8FB");
    },
    Error,
    "encode-error: U+B8FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8FC");
    },
    Error,
    "encode-error: U+B8FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8FD");
    },
    Error,
    "encode-error: U+B8FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8FE");
    },
    Error,
    "encode-error: U+B8FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB8FF");
    },
    Error,
    "encode-error: U+B8FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB900");
    },
    Error,
    "encode-error: U+B900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB901");
    },
    Error,
    "encode-error: U+B901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB902");
    },
    Error,
    "encode-error: U+B902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB903");
    },
    Error,
    "encode-error: U+B903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB904");
    },
    Error,
    "encode-error: U+B904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB905");
    },
    Error,
    "encode-error: U+B905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB906");
    },
    Error,
    "encode-error: U+B906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB907");
    },
    Error,
    "encode-error: U+B907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB908");
    },
    Error,
    "encode-error: U+B908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB909");
    },
    Error,
    "encode-error: U+B909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB90A");
    },
    Error,
    "encode-error: U+B90A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB90B");
    },
    Error,
    "encode-error: U+B90B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB90C");
    },
    Error,
    "encode-error: U+B90C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB90D");
    },
    Error,
    "encode-error: U+B90D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB90E");
    },
    Error,
    "encode-error: U+B90E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB90F");
    },
    Error,
    "encode-error: U+B90F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB910");
    },
    Error,
    "encode-error: U+B910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB911");
    },
    Error,
    "encode-error: U+B911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB912");
    },
    Error,
    "encode-error: U+B912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB913");
    },
    Error,
    "encode-error: U+B913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB914");
    },
    Error,
    "encode-error: U+B914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB915");
    },
    Error,
    "encode-error: U+B915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB916");
    },
    Error,
    "encode-error: U+B916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB917");
    },
    Error,
    "encode-error: U+B917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB918");
    },
    Error,
    "encode-error: U+B918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB919");
    },
    Error,
    "encode-error: U+B919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB91A");
    },
    Error,
    "encode-error: U+B91A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB91B");
    },
    Error,
    "encode-error: U+B91B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB91C");
    },
    Error,
    "encode-error: U+B91C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB91D");
    },
    Error,
    "encode-error: U+B91D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB91E");
    },
    Error,
    "encode-error: U+B91E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB91F");
    },
    Error,
    "encode-error: U+B91F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB920");
    },
    Error,
    "encode-error: U+B920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB921");
    },
    Error,
    "encode-error: U+B921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB922");
    },
    Error,
    "encode-error: U+B922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB923");
    },
    Error,
    "encode-error: U+B923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB924");
    },
    Error,
    "encode-error: U+B924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB925");
    },
    Error,
    "encode-error: U+B925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB926");
    },
    Error,
    "encode-error: U+B926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB927");
    },
    Error,
    "encode-error: U+B927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB928");
    },
    Error,
    "encode-error: U+B928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB929");
    },
    Error,
    "encode-error: U+B929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB92A");
    },
    Error,
    "encode-error: U+B92A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB92B");
    },
    Error,
    "encode-error: U+B92B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB92C");
    },
    Error,
    "encode-error: U+B92C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB92D");
    },
    Error,
    "encode-error: U+B92D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB92E");
    },
    Error,
    "encode-error: U+B92E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB92F");
    },
    Error,
    "encode-error: U+B92F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB930");
    },
    Error,
    "encode-error: U+B930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB931");
    },
    Error,
    "encode-error: U+B931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB932");
    },
    Error,
    "encode-error: U+B932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB933");
    },
    Error,
    "encode-error: U+B933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB934");
    },
    Error,
    "encode-error: U+B934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB935");
    },
    Error,
    "encode-error: U+B935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB936");
    },
    Error,
    "encode-error: U+B936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB937");
    },
    Error,
    "encode-error: U+B937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB938");
    },
    Error,
    "encode-error: U+B938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB939");
    },
    Error,
    "encode-error: U+B939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB93A");
    },
    Error,
    "encode-error: U+B93A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB93B");
    },
    Error,
    "encode-error: U+B93B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB93C");
    },
    Error,
    "encode-error: U+B93C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB93D");
    },
    Error,
    "encode-error: U+B93D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB93E");
    },
    Error,
    "encode-error: U+B93E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB93F");
    },
    Error,
    "encode-error: U+B93F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB940");
    },
    Error,
    "encode-error: U+B940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB941");
    },
    Error,
    "encode-error: U+B941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB942");
    },
    Error,
    "encode-error: U+B942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB943");
    },
    Error,
    "encode-error: U+B943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB944");
    },
    Error,
    "encode-error: U+B944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB945");
    },
    Error,
    "encode-error: U+B945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB946");
    },
    Error,
    "encode-error: U+B946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB947");
    },
    Error,
    "encode-error: U+B947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB948");
    },
    Error,
    "encode-error: U+B948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB949");
    },
    Error,
    "encode-error: U+B949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB94A");
    },
    Error,
    "encode-error: U+B94A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB94B");
    },
    Error,
    "encode-error: U+B94B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB94C");
    },
    Error,
    "encode-error: U+B94C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB94D");
    },
    Error,
    "encode-error: U+B94D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB94E");
    },
    Error,
    "encode-error: U+B94E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB94F");
    },
    Error,
    "encode-error: U+B94F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB950");
    },
    Error,
    "encode-error: U+B950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB951");
    },
    Error,
    "encode-error: U+B951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB952");
    },
    Error,
    "encode-error: U+B952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB953");
    },
    Error,
    "encode-error: U+B953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB954");
    },
    Error,
    "encode-error: U+B954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB955");
    },
    Error,
    "encode-error: U+B955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB956");
    },
    Error,
    "encode-error: U+B956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB957");
    },
    Error,
    "encode-error: U+B957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB958");
    },
    Error,
    "encode-error: U+B958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB959");
    },
    Error,
    "encode-error: U+B959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB95A");
    },
    Error,
    "encode-error: U+B95A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB95B");
    },
    Error,
    "encode-error: U+B95B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB95C");
    },
    Error,
    "encode-error: U+B95C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB95D");
    },
    Error,
    "encode-error: U+B95D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB95E");
    },
    Error,
    "encode-error: U+B95E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB95F");
    },
    Error,
    "encode-error: U+B95F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB960");
    },
    Error,
    "encode-error: U+B960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB961");
    },
    Error,
    "encode-error: U+B961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB962");
    },
    Error,
    "encode-error: U+B962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB963");
    },
    Error,
    "encode-error: U+B963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB964");
    },
    Error,
    "encode-error: U+B964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB965");
    },
    Error,
    "encode-error: U+B965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB966");
    },
    Error,
    "encode-error: U+B966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB967");
    },
    Error,
    "encode-error: U+B967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB968");
    },
    Error,
    "encode-error: U+B968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB969");
    },
    Error,
    "encode-error: U+B969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB96A");
    },
    Error,
    "encode-error: U+B96A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB96B");
    },
    Error,
    "encode-error: U+B96B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB96C");
    },
    Error,
    "encode-error: U+B96C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB96D");
    },
    Error,
    "encode-error: U+B96D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB96E");
    },
    Error,
    "encode-error: U+B96E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB96F");
    },
    Error,
    "encode-error: U+B96F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB970");
    },
    Error,
    "encode-error: U+B970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB971");
    },
    Error,
    "encode-error: U+B971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB972");
    },
    Error,
    "encode-error: U+B972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB973");
    },
    Error,
    "encode-error: U+B973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB974");
    },
    Error,
    "encode-error: U+B974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB975");
    },
    Error,
    "encode-error: U+B975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB976");
    },
    Error,
    "encode-error: U+B976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB977");
    },
    Error,
    "encode-error: U+B977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB978");
    },
    Error,
    "encode-error: U+B978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB979");
    },
    Error,
    "encode-error: U+B979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB97A");
    },
    Error,
    "encode-error: U+B97A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB97B");
    },
    Error,
    "encode-error: U+B97B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB97C");
    },
    Error,
    "encode-error: U+B97C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB97D");
    },
    Error,
    "encode-error: U+B97D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB97E");
    },
    Error,
    "encode-error: U+B97E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB97F");
    },
    Error,
    "encode-error: U+B97F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB980");
    },
    Error,
    "encode-error: U+B980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB981");
    },
    Error,
    "encode-error: U+B981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB982");
    },
    Error,
    "encode-error: U+B982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB983");
    },
    Error,
    "encode-error: U+B983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB984");
    },
    Error,
    "encode-error: U+B984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB985");
    },
    Error,
    "encode-error: U+B985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB986");
    },
    Error,
    "encode-error: U+B986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB987");
    },
    Error,
    "encode-error: U+B987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB988");
    },
    Error,
    "encode-error: U+B988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB989");
    },
    Error,
    "encode-error: U+B989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB98A");
    },
    Error,
    "encode-error: U+B98A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB98B");
    },
    Error,
    "encode-error: U+B98B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB98C");
    },
    Error,
    "encode-error: U+B98C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB98D");
    },
    Error,
    "encode-error: U+B98D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB98E");
    },
    Error,
    "encode-error: U+B98E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB98F");
    },
    Error,
    "encode-error: U+B98F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB990");
    },
    Error,
    "encode-error: U+B990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB991");
    },
    Error,
    "encode-error: U+B991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB992");
    },
    Error,
    "encode-error: U+B992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB993");
    },
    Error,
    "encode-error: U+B993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB994");
    },
    Error,
    "encode-error: U+B994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB995");
    },
    Error,
    "encode-error: U+B995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB996");
    },
    Error,
    "encode-error: U+B996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB997");
    },
    Error,
    "encode-error: U+B997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB998");
    },
    Error,
    "encode-error: U+B998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB999");
    },
    Error,
    "encode-error: U+B999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB99A");
    },
    Error,
    "encode-error: U+B99A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB99B");
    },
    Error,
    "encode-error: U+B99B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB99C");
    },
    Error,
    "encode-error: U+B99C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB99D");
    },
    Error,
    "encode-error: U+B99D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB99E");
    },
    Error,
    "encode-error: U+B99E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB99F");
    },
    Error,
    "encode-error: U+B99F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9A0");
    },
    Error,
    "encode-error: U+B9A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9A1");
    },
    Error,
    "encode-error: U+B9A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9A2");
    },
    Error,
    "encode-error: U+B9A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9A3");
    },
    Error,
    "encode-error: U+B9A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9A4");
    },
    Error,
    "encode-error: U+B9A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9A5");
    },
    Error,
    "encode-error: U+B9A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9A6");
    },
    Error,
    "encode-error: U+B9A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9A7");
    },
    Error,
    "encode-error: U+B9A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9A8");
    },
    Error,
    "encode-error: U+B9A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9A9");
    },
    Error,
    "encode-error: U+B9A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9AA");
    },
    Error,
    "encode-error: U+B9AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9AB");
    },
    Error,
    "encode-error: U+B9AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9AC");
    },
    Error,
    "encode-error: U+B9AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9AD");
    },
    Error,
    "encode-error: U+B9AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9AE");
    },
    Error,
    "encode-error: U+B9AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9AF");
    },
    Error,
    "encode-error: U+B9AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9B0");
    },
    Error,
    "encode-error: U+B9B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9B1");
    },
    Error,
    "encode-error: U+B9B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9B2");
    },
    Error,
    "encode-error: U+B9B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9B3");
    },
    Error,
    "encode-error: U+B9B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9B4");
    },
    Error,
    "encode-error: U+B9B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9B5");
    },
    Error,
    "encode-error: U+B9B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9B6");
    },
    Error,
    "encode-error: U+B9B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9B7");
    },
    Error,
    "encode-error: U+B9B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9B8");
    },
    Error,
    "encode-error: U+B9B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9B9");
    },
    Error,
    "encode-error: U+B9B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9BA");
    },
    Error,
    "encode-error: U+B9BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9BB");
    },
    Error,
    "encode-error: U+B9BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9BC");
    },
    Error,
    "encode-error: U+B9BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9BD");
    },
    Error,
    "encode-error: U+B9BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9BE");
    },
    Error,
    "encode-error: U+B9BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9BF");
    },
    Error,
    "encode-error: U+B9BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9C0");
    },
    Error,
    "encode-error: U+B9C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9C1");
    },
    Error,
    "encode-error: U+B9C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9C2");
    },
    Error,
    "encode-error: U+B9C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9C3");
    },
    Error,
    "encode-error: U+B9C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9C4");
    },
    Error,
    "encode-error: U+B9C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9C5");
    },
    Error,
    "encode-error: U+B9C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9C6");
    },
    Error,
    "encode-error: U+B9C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9C7");
    },
    Error,
    "encode-error: U+B9C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9C8");
    },
    Error,
    "encode-error: U+B9C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9C9");
    },
    Error,
    "encode-error: U+B9C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9CA");
    },
    Error,
    "encode-error: U+B9CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9CB");
    },
    Error,
    "encode-error: U+B9CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9CC");
    },
    Error,
    "encode-error: U+B9CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9CD");
    },
    Error,
    "encode-error: U+B9CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9CE");
    },
    Error,
    "encode-error: U+B9CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9CF");
    },
    Error,
    "encode-error: U+B9CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9D0");
    },
    Error,
    "encode-error: U+B9D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9D1");
    },
    Error,
    "encode-error: U+B9D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9D2");
    },
    Error,
    "encode-error: U+B9D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9D3");
    },
    Error,
    "encode-error: U+B9D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9D4");
    },
    Error,
    "encode-error: U+B9D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9D5");
    },
    Error,
    "encode-error: U+B9D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9D6");
    },
    Error,
    "encode-error: U+B9D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9D7");
    },
    Error,
    "encode-error: U+B9D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9D8");
    },
    Error,
    "encode-error: U+B9D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9D9");
    },
    Error,
    "encode-error: U+B9D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9DA");
    },
    Error,
    "encode-error: U+B9DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9DB");
    },
    Error,
    "encode-error: U+B9DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9DC");
    },
    Error,
    "encode-error: U+B9DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9DD");
    },
    Error,
    "encode-error: U+B9DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9DE");
    },
    Error,
    "encode-error: U+B9DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9DF");
    },
    Error,
    "encode-error: U+B9DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9E0");
    },
    Error,
    "encode-error: U+B9E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9E1");
    },
    Error,
    "encode-error: U+B9E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9E2");
    },
    Error,
    "encode-error: U+B9E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9E3");
    },
    Error,
    "encode-error: U+B9E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9E4");
    },
    Error,
    "encode-error: U+B9E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9E5");
    },
    Error,
    "encode-error: U+B9E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9E6");
    },
    Error,
    "encode-error: U+B9E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9E7");
    },
    Error,
    "encode-error: U+B9E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9E8");
    },
    Error,
    "encode-error: U+B9E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9E9");
    },
    Error,
    "encode-error: U+B9E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9EA");
    },
    Error,
    "encode-error: U+B9EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9EB");
    },
    Error,
    "encode-error: U+B9EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9EC");
    },
    Error,
    "encode-error: U+B9EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9ED");
    },
    Error,
    "encode-error: U+B9ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9EE");
    },
    Error,
    "encode-error: U+B9EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9EF");
    },
    Error,
    "encode-error: U+B9EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9F0");
    },
    Error,
    "encode-error: U+B9F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9F1");
    },
    Error,
    "encode-error: U+B9F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9F2");
    },
    Error,
    "encode-error: U+B9F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9F3");
    },
    Error,
    "encode-error: U+B9F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9F4");
    },
    Error,
    "encode-error: U+B9F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9F5");
    },
    Error,
    "encode-error: U+B9F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9F6");
    },
    Error,
    "encode-error: U+B9F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9F7");
    },
    Error,
    "encode-error: U+B9F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9F8");
    },
    Error,
    "encode-error: U+B9F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9F9");
    },
    Error,
    "encode-error: U+B9F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9FA");
    },
    Error,
    "encode-error: U+B9FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9FB");
    },
    Error,
    "encode-error: U+B9FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9FC");
    },
    Error,
    "encode-error: U+B9FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9FD");
    },
    Error,
    "encode-error: U+B9FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9FE");
    },
    Error,
    "encode-error: U+B9FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uB9FF");
    },
    Error,
    "encode-error: U+B9FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA00");
    },
    Error,
    "encode-error: U+BA00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA01");
    },
    Error,
    "encode-error: U+BA01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA02");
    },
    Error,
    "encode-error: U+BA02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA03");
    },
    Error,
    "encode-error: U+BA03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA04");
    },
    Error,
    "encode-error: U+BA04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA05");
    },
    Error,
    "encode-error: U+BA05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA06");
    },
    Error,
    "encode-error: U+BA06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA07");
    },
    Error,
    "encode-error: U+BA07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA08");
    },
    Error,
    "encode-error: U+BA08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA09");
    },
    Error,
    "encode-error: U+BA09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA0A");
    },
    Error,
    "encode-error: U+BA0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA0B");
    },
    Error,
    "encode-error: U+BA0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA0C");
    },
    Error,
    "encode-error: U+BA0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA0D");
    },
    Error,
    "encode-error: U+BA0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA0E");
    },
    Error,
    "encode-error: U+BA0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA0F");
    },
    Error,
    "encode-error: U+BA0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA10");
    },
    Error,
    "encode-error: U+BA10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA11");
    },
    Error,
    "encode-error: U+BA11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA12");
    },
    Error,
    "encode-error: U+BA12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA13");
    },
    Error,
    "encode-error: U+BA13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA14");
    },
    Error,
    "encode-error: U+BA14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA15");
    },
    Error,
    "encode-error: U+BA15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA16");
    },
    Error,
    "encode-error: U+BA16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA17");
    },
    Error,
    "encode-error: U+BA17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA18");
    },
    Error,
    "encode-error: U+BA18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA19");
    },
    Error,
    "encode-error: U+BA19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA1A");
    },
    Error,
    "encode-error: U+BA1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA1B");
    },
    Error,
    "encode-error: U+BA1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA1C");
    },
    Error,
    "encode-error: U+BA1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA1D");
    },
    Error,
    "encode-error: U+BA1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA1E");
    },
    Error,
    "encode-error: U+BA1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA1F");
    },
    Error,
    "encode-error: U+BA1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA20");
    },
    Error,
    "encode-error: U+BA20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA21");
    },
    Error,
    "encode-error: U+BA21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA22");
    },
    Error,
    "encode-error: U+BA22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA23");
    },
    Error,
    "encode-error: U+BA23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA24");
    },
    Error,
    "encode-error: U+BA24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA25");
    },
    Error,
    "encode-error: U+BA25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA26");
    },
    Error,
    "encode-error: U+BA26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA27");
    },
    Error,
    "encode-error: U+BA27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA28");
    },
    Error,
    "encode-error: U+BA28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA29");
    },
    Error,
    "encode-error: U+BA29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA2A");
    },
    Error,
    "encode-error: U+BA2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA2B");
    },
    Error,
    "encode-error: U+BA2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA2C");
    },
    Error,
    "encode-error: U+BA2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA2D");
    },
    Error,
    "encode-error: U+BA2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA2E");
    },
    Error,
    "encode-error: U+BA2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA2F");
    },
    Error,
    "encode-error: U+BA2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA30");
    },
    Error,
    "encode-error: U+BA30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA31");
    },
    Error,
    "encode-error: U+BA31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA32");
    },
    Error,
    "encode-error: U+BA32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA33");
    },
    Error,
    "encode-error: U+BA33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA34");
    },
    Error,
    "encode-error: U+BA34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA35");
    },
    Error,
    "encode-error: U+BA35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA36");
    },
    Error,
    "encode-error: U+BA36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA37");
    },
    Error,
    "encode-error: U+BA37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA38");
    },
    Error,
    "encode-error: U+BA38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA39");
    },
    Error,
    "encode-error: U+BA39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA3A");
    },
    Error,
    "encode-error: U+BA3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA3B");
    },
    Error,
    "encode-error: U+BA3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA3C");
    },
    Error,
    "encode-error: U+BA3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA3D");
    },
    Error,
    "encode-error: U+BA3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA3E");
    },
    Error,
    "encode-error: U+BA3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA3F");
    },
    Error,
    "encode-error: U+BA3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA40");
    },
    Error,
    "encode-error: U+BA40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA41");
    },
    Error,
    "encode-error: U+BA41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA42");
    },
    Error,
    "encode-error: U+BA42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA43");
    },
    Error,
    "encode-error: U+BA43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA44");
    },
    Error,
    "encode-error: U+BA44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA45");
    },
    Error,
    "encode-error: U+BA45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA46");
    },
    Error,
    "encode-error: U+BA46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA47");
    },
    Error,
    "encode-error: U+BA47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA48");
    },
    Error,
    "encode-error: U+BA48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA49");
    },
    Error,
    "encode-error: U+BA49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA4A");
    },
    Error,
    "encode-error: U+BA4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA4B");
    },
    Error,
    "encode-error: U+BA4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA4C");
    },
    Error,
    "encode-error: U+BA4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA4D");
    },
    Error,
    "encode-error: U+BA4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA4E");
    },
    Error,
    "encode-error: U+BA4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA4F");
    },
    Error,
    "encode-error: U+BA4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA50");
    },
    Error,
    "encode-error: U+BA50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA51");
    },
    Error,
    "encode-error: U+BA51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA52");
    },
    Error,
    "encode-error: U+BA52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA53");
    },
    Error,
    "encode-error: U+BA53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA54");
    },
    Error,
    "encode-error: U+BA54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA55");
    },
    Error,
    "encode-error: U+BA55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA56");
    },
    Error,
    "encode-error: U+BA56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA57");
    },
    Error,
    "encode-error: U+BA57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA58");
    },
    Error,
    "encode-error: U+BA58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA59");
    },
    Error,
    "encode-error: U+BA59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA5A");
    },
    Error,
    "encode-error: U+BA5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA5B");
    },
    Error,
    "encode-error: U+BA5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA5C");
    },
    Error,
    "encode-error: U+BA5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA5D");
    },
    Error,
    "encode-error: U+BA5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA5E");
    },
    Error,
    "encode-error: U+BA5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA5F");
    },
    Error,
    "encode-error: U+BA5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA60");
    },
    Error,
    "encode-error: U+BA60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA61");
    },
    Error,
    "encode-error: U+BA61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA62");
    },
    Error,
    "encode-error: U+BA62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA63");
    },
    Error,
    "encode-error: U+BA63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA64");
    },
    Error,
    "encode-error: U+BA64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA65");
    },
    Error,
    "encode-error: U+BA65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA66");
    },
    Error,
    "encode-error: U+BA66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA67");
    },
    Error,
    "encode-error: U+BA67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA68");
    },
    Error,
    "encode-error: U+BA68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA69");
    },
    Error,
    "encode-error: U+BA69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA6A");
    },
    Error,
    "encode-error: U+BA6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA6B");
    },
    Error,
    "encode-error: U+BA6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA6C");
    },
    Error,
    "encode-error: U+BA6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA6D");
    },
    Error,
    "encode-error: U+BA6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA6E");
    },
    Error,
    "encode-error: U+BA6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA6F");
    },
    Error,
    "encode-error: U+BA6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA70");
    },
    Error,
    "encode-error: U+BA70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA71");
    },
    Error,
    "encode-error: U+BA71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA72");
    },
    Error,
    "encode-error: U+BA72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA73");
    },
    Error,
    "encode-error: U+BA73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA74");
    },
    Error,
    "encode-error: U+BA74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA75");
    },
    Error,
    "encode-error: U+BA75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA76");
    },
    Error,
    "encode-error: U+BA76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA77");
    },
    Error,
    "encode-error: U+BA77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA78");
    },
    Error,
    "encode-error: U+BA78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA79");
    },
    Error,
    "encode-error: U+BA79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA7A");
    },
    Error,
    "encode-error: U+BA7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA7B");
    },
    Error,
    "encode-error: U+BA7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA7C");
    },
    Error,
    "encode-error: U+BA7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA7D");
    },
    Error,
    "encode-error: U+BA7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA7E");
    },
    Error,
    "encode-error: U+BA7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA7F");
    },
    Error,
    "encode-error: U+BA7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA80");
    },
    Error,
    "encode-error: U+BA80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA81");
    },
    Error,
    "encode-error: U+BA81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA82");
    },
    Error,
    "encode-error: U+BA82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA83");
    },
    Error,
    "encode-error: U+BA83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA84");
    },
    Error,
    "encode-error: U+BA84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA85");
    },
    Error,
    "encode-error: U+BA85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA86");
    },
    Error,
    "encode-error: U+BA86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA87");
    },
    Error,
    "encode-error: U+BA87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA88");
    },
    Error,
    "encode-error: U+BA88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA89");
    },
    Error,
    "encode-error: U+BA89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA8A");
    },
    Error,
    "encode-error: U+BA8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA8B");
    },
    Error,
    "encode-error: U+BA8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA8C");
    },
    Error,
    "encode-error: U+BA8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA8D");
    },
    Error,
    "encode-error: U+BA8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA8E");
    },
    Error,
    "encode-error: U+BA8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA8F");
    },
    Error,
    "encode-error: U+BA8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA90");
    },
    Error,
    "encode-error: U+BA90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA91");
    },
    Error,
    "encode-error: U+BA91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA92");
    },
    Error,
    "encode-error: U+BA92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA93");
    },
    Error,
    "encode-error: U+BA93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA94");
    },
    Error,
    "encode-error: U+BA94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA95");
    },
    Error,
    "encode-error: U+BA95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA96");
    },
    Error,
    "encode-error: U+BA96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA97");
    },
    Error,
    "encode-error: U+BA97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA98");
    },
    Error,
    "encode-error: U+BA98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA99");
    },
    Error,
    "encode-error: U+BA99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA9A");
    },
    Error,
    "encode-error: U+BA9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA9B");
    },
    Error,
    "encode-error: U+BA9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA9C");
    },
    Error,
    "encode-error: U+BA9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA9D");
    },
    Error,
    "encode-error: U+BA9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA9E");
    },
    Error,
    "encode-error: U+BA9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBA9F");
    },
    Error,
    "encode-error: U+BA9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAA0");
    },
    Error,
    "encode-error: U+BAA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAA1");
    },
    Error,
    "encode-error: U+BAA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAA2");
    },
    Error,
    "encode-error: U+BAA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAA3");
    },
    Error,
    "encode-error: U+BAA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAA4");
    },
    Error,
    "encode-error: U+BAA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAA5");
    },
    Error,
    "encode-error: U+BAA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAA6");
    },
    Error,
    "encode-error: U+BAA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAA7");
    },
    Error,
    "encode-error: U+BAA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAA8");
    },
    Error,
    "encode-error: U+BAA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAA9");
    },
    Error,
    "encode-error: U+BAA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAAA");
    },
    Error,
    "encode-error: U+BAAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAAB");
    },
    Error,
    "encode-error: U+BAAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAAC");
    },
    Error,
    "encode-error: U+BAAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAAD");
    },
    Error,
    "encode-error: U+BAAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAAE");
    },
    Error,
    "encode-error: U+BAAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAAF");
    },
    Error,
    "encode-error: U+BAAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAB0");
    },
    Error,
    "encode-error: U+BAB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAB1");
    },
    Error,
    "encode-error: U+BAB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAB2");
    },
    Error,
    "encode-error: U+BAB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAB3");
    },
    Error,
    "encode-error: U+BAB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAB4");
    },
    Error,
    "encode-error: U+BAB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAB5");
    },
    Error,
    "encode-error: U+BAB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAB6");
    },
    Error,
    "encode-error: U+BAB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAB7");
    },
    Error,
    "encode-error: U+BAB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAB8");
    },
    Error,
    "encode-error: U+BAB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAB9");
    },
    Error,
    "encode-error: U+BAB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBABA");
    },
    Error,
    "encode-error: U+BABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBABB");
    },
    Error,
    "encode-error: U+BABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBABC");
    },
    Error,
    "encode-error: U+BABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBABD");
    },
    Error,
    "encode-error: U+BABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBABE");
    },
    Error,
    "encode-error: U+BABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBABF");
    },
    Error,
    "encode-error: U+BABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAC0");
    },
    Error,
    "encode-error: U+BAC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAC1");
    },
    Error,
    "encode-error: U+BAC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAC2");
    },
    Error,
    "encode-error: U+BAC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAC3");
    },
    Error,
    "encode-error: U+BAC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAC4");
    },
    Error,
    "encode-error: U+BAC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAC5");
    },
    Error,
    "encode-error: U+BAC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAC6");
    },
    Error,
    "encode-error: U+BAC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAC7");
    },
    Error,
    "encode-error: U+BAC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAC8");
    },
    Error,
    "encode-error: U+BAC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAC9");
    },
    Error,
    "encode-error: U+BAC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBACA");
    },
    Error,
    "encode-error: U+BACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBACB");
    },
    Error,
    "encode-error: U+BACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBACC");
    },
    Error,
    "encode-error: U+BACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBACD");
    },
    Error,
    "encode-error: U+BACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBACE");
    },
    Error,
    "encode-error: U+BACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBACF");
    },
    Error,
    "encode-error: U+BACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAD0");
    },
    Error,
    "encode-error: U+BAD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAD1");
    },
    Error,
    "encode-error: U+BAD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAD2");
    },
    Error,
    "encode-error: U+BAD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAD3");
    },
    Error,
    "encode-error: U+BAD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAD4");
    },
    Error,
    "encode-error: U+BAD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAD5");
    },
    Error,
    "encode-error: U+BAD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAD6");
    },
    Error,
    "encode-error: U+BAD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAD7");
    },
    Error,
    "encode-error: U+BAD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAD8");
    },
    Error,
    "encode-error: U+BAD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAD9");
    },
    Error,
    "encode-error: U+BAD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBADA");
    },
    Error,
    "encode-error: U+BADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBADB");
    },
    Error,
    "encode-error: U+BADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBADC");
    },
    Error,
    "encode-error: U+BADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBADD");
    },
    Error,
    "encode-error: U+BADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBADE");
    },
    Error,
    "encode-error: U+BADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBADF");
    },
    Error,
    "encode-error: U+BADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAE0");
    },
    Error,
    "encode-error: U+BAE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAE1");
    },
    Error,
    "encode-error: U+BAE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAE2");
    },
    Error,
    "encode-error: U+BAE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAE3");
    },
    Error,
    "encode-error: U+BAE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAE4");
    },
    Error,
    "encode-error: U+BAE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAE5");
    },
    Error,
    "encode-error: U+BAE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAE6");
    },
    Error,
    "encode-error: U+BAE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAE7");
    },
    Error,
    "encode-error: U+BAE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAE8");
    },
    Error,
    "encode-error: U+BAE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAE9");
    },
    Error,
    "encode-error: U+BAE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAEA");
    },
    Error,
    "encode-error: U+BAEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAEB");
    },
    Error,
    "encode-error: U+BAEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAEC");
    },
    Error,
    "encode-error: U+BAEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAED");
    },
    Error,
    "encode-error: U+BAED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAEE");
    },
    Error,
    "encode-error: U+BAEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAEF");
    },
    Error,
    "encode-error: U+BAEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAF0");
    },
    Error,
    "encode-error: U+BAF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAF1");
    },
    Error,
    "encode-error: U+BAF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAF2");
    },
    Error,
    "encode-error: U+BAF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAF3");
    },
    Error,
    "encode-error: U+BAF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAF4");
    },
    Error,
    "encode-error: U+BAF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAF5");
    },
    Error,
    "encode-error: U+BAF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAF6");
    },
    Error,
    "encode-error: U+BAF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAF7");
    },
    Error,
    "encode-error: U+BAF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAF8");
    },
    Error,
    "encode-error: U+BAF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAF9");
    },
    Error,
    "encode-error: U+BAF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAFA");
    },
    Error,
    "encode-error: U+BAFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAFB");
    },
    Error,
    "encode-error: U+BAFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAFC");
    },
    Error,
    "encode-error: U+BAFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAFD");
    },
    Error,
    "encode-error: U+BAFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAFE");
    },
    Error,
    "encode-error: U+BAFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBAFF");
    },
    Error,
    "encode-error: U+BAFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB00");
    },
    Error,
    "encode-error: U+BB00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB01");
    },
    Error,
    "encode-error: U+BB01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB02");
    },
    Error,
    "encode-error: U+BB02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB03");
    },
    Error,
    "encode-error: U+BB03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB04");
    },
    Error,
    "encode-error: U+BB04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB05");
    },
    Error,
    "encode-error: U+BB05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB06");
    },
    Error,
    "encode-error: U+BB06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB07");
    },
    Error,
    "encode-error: U+BB07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB08");
    },
    Error,
    "encode-error: U+BB08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB09");
    },
    Error,
    "encode-error: U+BB09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB0A");
    },
    Error,
    "encode-error: U+BB0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB0B");
    },
    Error,
    "encode-error: U+BB0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB0C");
    },
    Error,
    "encode-error: U+BB0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB0D");
    },
    Error,
    "encode-error: U+BB0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB0E");
    },
    Error,
    "encode-error: U+BB0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB0F");
    },
    Error,
    "encode-error: U+BB0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB10");
    },
    Error,
    "encode-error: U+BB10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB11");
    },
    Error,
    "encode-error: U+BB11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB12");
    },
    Error,
    "encode-error: U+BB12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB13");
    },
    Error,
    "encode-error: U+BB13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB14");
    },
    Error,
    "encode-error: U+BB14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB15");
    },
    Error,
    "encode-error: U+BB15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB16");
    },
    Error,
    "encode-error: U+BB16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB17");
    },
    Error,
    "encode-error: U+BB17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB18");
    },
    Error,
    "encode-error: U+BB18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB19");
    },
    Error,
    "encode-error: U+BB19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB1A");
    },
    Error,
    "encode-error: U+BB1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB1B");
    },
    Error,
    "encode-error: U+BB1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB1C");
    },
    Error,
    "encode-error: U+BB1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB1D");
    },
    Error,
    "encode-error: U+BB1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB1E");
    },
    Error,
    "encode-error: U+BB1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB1F");
    },
    Error,
    "encode-error: U+BB1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB20");
    },
    Error,
    "encode-error: U+BB20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB21");
    },
    Error,
    "encode-error: U+BB21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB22");
    },
    Error,
    "encode-error: U+BB22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB23");
    },
    Error,
    "encode-error: U+BB23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB24");
    },
    Error,
    "encode-error: U+BB24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB25");
    },
    Error,
    "encode-error: U+BB25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB26");
    },
    Error,
    "encode-error: U+BB26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB27");
    },
    Error,
    "encode-error: U+BB27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB28");
    },
    Error,
    "encode-error: U+BB28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB29");
    },
    Error,
    "encode-error: U+BB29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB2A");
    },
    Error,
    "encode-error: U+BB2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB2B");
    },
    Error,
    "encode-error: U+BB2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB2C");
    },
    Error,
    "encode-error: U+BB2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB2D");
    },
    Error,
    "encode-error: U+BB2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB2E");
    },
    Error,
    "encode-error: U+BB2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB2F");
    },
    Error,
    "encode-error: U+BB2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB30");
    },
    Error,
    "encode-error: U+BB30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB31");
    },
    Error,
    "encode-error: U+BB31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB32");
    },
    Error,
    "encode-error: U+BB32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB33");
    },
    Error,
    "encode-error: U+BB33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB34");
    },
    Error,
    "encode-error: U+BB34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB35");
    },
    Error,
    "encode-error: U+BB35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB36");
    },
    Error,
    "encode-error: U+BB36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB37");
    },
    Error,
    "encode-error: U+BB37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB38");
    },
    Error,
    "encode-error: U+BB38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB39");
    },
    Error,
    "encode-error: U+BB39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB3A");
    },
    Error,
    "encode-error: U+BB3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB3B");
    },
    Error,
    "encode-error: U+BB3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB3C");
    },
    Error,
    "encode-error: U+BB3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB3D");
    },
    Error,
    "encode-error: U+BB3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB3E");
    },
    Error,
    "encode-error: U+BB3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB3F");
    },
    Error,
    "encode-error: U+BB3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB40");
    },
    Error,
    "encode-error: U+BB40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB41");
    },
    Error,
    "encode-error: U+BB41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB42");
    },
    Error,
    "encode-error: U+BB42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB43");
    },
    Error,
    "encode-error: U+BB43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB44");
    },
    Error,
    "encode-error: U+BB44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB45");
    },
    Error,
    "encode-error: U+BB45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB46");
    },
    Error,
    "encode-error: U+BB46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB47");
    },
    Error,
    "encode-error: U+BB47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB48");
    },
    Error,
    "encode-error: U+BB48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB49");
    },
    Error,
    "encode-error: U+BB49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB4A");
    },
    Error,
    "encode-error: U+BB4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB4B");
    },
    Error,
    "encode-error: U+BB4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB4C");
    },
    Error,
    "encode-error: U+BB4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB4D");
    },
    Error,
    "encode-error: U+BB4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB4E");
    },
    Error,
    "encode-error: U+BB4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB4F");
    },
    Error,
    "encode-error: U+BB4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB50");
    },
    Error,
    "encode-error: U+BB50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB51");
    },
    Error,
    "encode-error: U+BB51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB52");
    },
    Error,
    "encode-error: U+BB52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB53");
    },
    Error,
    "encode-error: U+BB53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB54");
    },
    Error,
    "encode-error: U+BB54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB55");
    },
    Error,
    "encode-error: U+BB55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB56");
    },
    Error,
    "encode-error: U+BB56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB57");
    },
    Error,
    "encode-error: U+BB57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB58");
    },
    Error,
    "encode-error: U+BB58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB59");
    },
    Error,
    "encode-error: U+BB59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB5A");
    },
    Error,
    "encode-error: U+BB5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB5B");
    },
    Error,
    "encode-error: U+BB5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB5C");
    },
    Error,
    "encode-error: U+BB5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB5D");
    },
    Error,
    "encode-error: U+BB5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB5E");
    },
    Error,
    "encode-error: U+BB5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB5F");
    },
    Error,
    "encode-error: U+BB5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB60");
    },
    Error,
    "encode-error: U+BB60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB61");
    },
    Error,
    "encode-error: U+BB61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB62");
    },
    Error,
    "encode-error: U+BB62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB63");
    },
    Error,
    "encode-error: U+BB63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB64");
    },
    Error,
    "encode-error: U+BB64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB65");
    },
    Error,
    "encode-error: U+BB65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB66");
    },
    Error,
    "encode-error: U+BB66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB67");
    },
    Error,
    "encode-error: U+BB67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB68");
    },
    Error,
    "encode-error: U+BB68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB69");
    },
    Error,
    "encode-error: U+BB69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB6A");
    },
    Error,
    "encode-error: U+BB6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB6B");
    },
    Error,
    "encode-error: U+BB6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB6C");
    },
    Error,
    "encode-error: U+BB6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB6D");
    },
    Error,
    "encode-error: U+BB6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB6E");
    },
    Error,
    "encode-error: U+BB6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB6F");
    },
    Error,
    "encode-error: U+BB6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB70");
    },
    Error,
    "encode-error: U+BB70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB71");
    },
    Error,
    "encode-error: U+BB71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB72");
    },
    Error,
    "encode-error: U+BB72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB73");
    },
    Error,
    "encode-error: U+BB73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB74");
    },
    Error,
    "encode-error: U+BB74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB75");
    },
    Error,
    "encode-error: U+BB75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB76");
    },
    Error,
    "encode-error: U+BB76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB77");
    },
    Error,
    "encode-error: U+BB77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB78");
    },
    Error,
    "encode-error: U+BB78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB79");
    },
    Error,
    "encode-error: U+BB79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB7A");
    },
    Error,
    "encode-error: U+BB7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB7B");
    },
    Error,
    "encode-error: U+BB7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB7C");
    },
    Error,
    "encode-error: U+BB7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB7D");
    },
    Error,
    "encode-error: U+BB7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB7E");
    },
    Error,
    "encode-error: U+BB7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB7F");
    },
    Error,
    "encode-error: U+BB7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB80");
    },
    Error,
    "encode-error: U+BB80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB81");
    },
    Error,
    "encode-error: U+BB81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB82");
    },
    Error,
    "encode-error: U+BB82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB83");
    },
    Error,
    "encode-error: U+BB83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB84");
    },
    Error,
    "encode-error: U+BB84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB85");
    },
    Error,
    "encode-error: U+BB85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB86");
    },
    Error,
    "encode-error: U+BB86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB87");
    },
    Error,
    "encode-error: U+BB87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB88");
    },
    Error,
    "encode-error: U+BB88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB89");
    },
    Error,
    "encode-error: U+BB89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB8A");
    },
    Error,
    "encode-error: U+BB8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB8B");
    },
    Error,
    "encode-error: U+BB8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB8C");
    },
    Error,
    "encode-error: U+BB8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB8D");
    },
    Error,
    "encode-error: U+BB8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB8E");
    },
    Error,
    "encode-error: U+BB8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB8F");
    },
    Error,
    "encode-error: U+BB8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB90");
    },
    Error,
    "encode-error: U+BB90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB91");
    },
    Error,
    "encode-error: U+BB91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB92");
    },
    Error,
    "encode-error: U+BB92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB93");
    },
    Error,
    "encode-error: U+BB93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB94");
    },
    Error,
    "encode-error: U+BB94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB95");
    },
    Error,
    "encode-error: U+BB95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB96");
    },
    Error,
    "encode-error: U+BB96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB97");
    },
    Error,
    "encode-error: U+BB97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB98");
    },
    Error,
    "encode-error: U+BB98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB99");
    },
    Error,
    "encode-error: U+BB99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB9A");
    },
    Error,
    "encode-error: U+BB9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB9B");
    },
    Error,
    "encode-error: U+BB9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB9C");
    },
    Error,
    "encode-error: U+BB9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB9D");
    },
    Error,
    "encode-error: U+BB9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB9E");
    },
    Error,
    "encode-error: U+BB9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBB9F");
    },
    Error,
    "encode-error: U+BB9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBA0");
    },
    Error,
    "encode-error: U+BBA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBA1");
    },
    Error,
    "encode-error: U+BBA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBA2");
    },
    Error,
    "encode-error: U+BBA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBA3");
    },
    Error,
    "encode-error: U+BBA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBA4");
    },
    Error,
    "encode-error: U+BBA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBA5");
    },
    Error,
    "encode-error: U+BBA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBA6");
    },
    Error,
    "encode-error: U+BBA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBA7");
    },
    Error,
    "encode-error: U+BBA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBA8");
    },
    Error,
    "encode-error: U+BBA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBA9");
    },
    Error,
    "encode-error: U+BBA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBAA");
    },
    Error,
    "encode-error: U+BBAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBAB");
    },
    Error,
    "encode-error: U+BBAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBAC");
    },
    Error,
    "encode-error: U+BBAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBAD");
    },
    Error,
    "encode-error: U+BBAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBAE");
    },
    Error,
    "encode-error: U+BBAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBAF");
    },
    Error,
    "encode-error: U+BBAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBB0");
    },
    Error,
    "encode-error: U+BBB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBB1");
    },
    Error,
    "encode-error: U+BBB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBB2");
    },
    Error,
    "encode-error: U+BBB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBB3");
    },
    Error,
    "encode-error: U+BBB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBB4");
    },
    Error,
    "encode-error: U+BBB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBB5");
    },
    Error,
    "encode-error: U+BBB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBB6");
    },
    Error,
    "encode-error: U+BBB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBB7");
    },
    Error,
    "encode-error: U+BBB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBB8");
    },
    Error,
    "encode-error: U+BBB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBB9");
    },
    Error,
    "encode-error: U+BBB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBBA");
    },
    Error,
    "encode-error: U+BBBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBBB");
    },
    Error,
    "encode-error: U+BBBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBBC");
    },
    Error,
    "encode-error: U+BBBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBBD");
    },
    Error,
    "encode-error: U+BBBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBBE");
    },
    Error,
    "encode-error: U+BBBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBBF");
    },
    Error,
    "encode-error: U+BBBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBC0");
    },
    Error,
    "encode-error: U+BBC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBC1");
    },
    Error,
    "encode-error: U+BBC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBC2");
    },
    Error,
    "encode-error: U+BBC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBC3");
    },
    Error,
    "encode-error: U+BBC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBC4");
    },
    Error,
    "encode-error: U+BBC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBC5");
    },
    Error,
    "encode-error: U+BBC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBC6");
    },
    Error,
    "encode-error: U+BBC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBC7");
    },
    Error,
    "encode-error: U+BBC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBC8");
    },
    Error,
    "encode-error: U+BBC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBC9");
    },
    Error,
    "encode-error: U+BBC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBCA");
    },
    Error,
    "encode-error: U+BBCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBCB");
    },
    Error,
    "encode-error: U+BBCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBCC");
    },
    Error,
    "encode-error: U+BBCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBCD");
    },
    Error,
    "encode-error: U+BBCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBCE");
    },
    Error,
    "encode-error: U+BBCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBCF");
    },
    Error,
    "encode-error: U+BBCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBD0");
    },
    Error,
    "encode-error: U+BBD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBD1");
    },
    Error,
    "encode-error: U+BBD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBD2");
    },
    Error,
    "encode-error: U+BBD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBD3");
    },
    Error,
    "encode-error: U+BBD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBD4");
    },
    Error,
    "encode-error: U+BBD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBD5");
    },
    Error,
    "encode-error: U+BBD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBD6");
    },
    Error,
    "encode-error: U+BBD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBD7");
    },
    Error,
    "encode-error: U+BBD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBD8");
    },
    Error,
    "encode-error: U+BBD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBD9");
    },
    Error,
    "encode-error: U+BBD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBDA");
    },
    Error,
    "encode-error: U+BBDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBDB");
    },
    Error,
    "encode-error: U+BBDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBDC");
    },
    Error,
    "encode-error: U+BBDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBDD");
    },
    Error,
    "encode-error: U+BBDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBDE");
    },
    Error,
    "encode-error: U+BBDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBDF");
    },
    Error,
    "encode-error: U+BBDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBE0");
    },
    Error,
    "encode-error: U+BBE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBE1");
    },
    Error,
    "encode-error: U+BBE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBE2");
    },
    Error,
    "encode-error: U+BBE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBE3");
    },
    Error,
    "encode-error: U+BBE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBE4");
    },
    Error,
    "encode-error: U+BBE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBE5");
    },
    Error,
    "encode-error: U+BBE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBE6");
    },
    Error,
    "encode-error: U+BBE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBE7");
    },
    Error,
    "encode-error: U+BBE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBE8");
    },
    Error,
    "encode-error: U+BBE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBE9");
    },
    Error,
    "encode-error: U+BBE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBEA");
    },
    Error,
    "encode-error: U+BBEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBEB");
    },
    Error,
    "encode-error: U+BBEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBEC");
    },
    Error,
    "encode-error: U+BBEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBED");
    },
    Error,
    "encode-error: U+BBED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBEE");
    },
    Error,
    "encode-error: U+BBEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBEF");
    },
    Error,
    "encode-error: U+BBEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBF0");
    },
    Error,
    "encode-error: U+BBF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBF1");
    },
    Error,
    "encode-error: U+BBF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBF2");
    },
    Error,
    "encode-error: U+BBF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBF3");
    },
    Error,
    "encode-error: U+BBF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBF4");
    },
    Error,
    "encode-error: U+BBF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBF5");
    },
    Error,
    "encode-error: U+BBF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBF6");
    },
    Error,
    "encode-error: U+BBF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBF7");
    },
    Error,
    "encode-error: U+BBF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBF8");
    },
    Error,
    "encode-error: U+BBF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBF9");
    },
    Error,
    "encode-error: U+BBF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBFA");
    },
    Error,
    "encode-error: U+BBFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBFB");
    },
    Error,
    "encode-error: U+BBFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBFC");
    },
    Error,
    "encode-error: U+BBFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBFD");
    },
    Error,
    "encode-error: U+BBFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBFE");
    },
    Error,
    "encode-error: U+BBFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBBFF");
    },
    Error,
    "encode-error: U+BBFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC00");
    },
    Error,
    "encode-error: U+BC00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC01");
    },
    Error,
    "encode-error: U+BC01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC02");
    },
    Error,
    "encode-error: U+BC02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC03");
    },
    Error,
    "encode-error: U+BC03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC04");
    },
    Error,
    "encode-error: U+BC04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC05");
    },
    Error,
    "encode-error: U+BC05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC06");
    },
    Error,
    "encode-error: U+BC06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC07");
    },
    Error,
    "encode-error: U+BC07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC08");
    },
    Error,
    "encode-error: U+BC08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC09");
    },
    Error,
    "encode-error: U+BC09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC0A");
    },
    Error,
    "encode-error: U+BC0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC0B");
    },
    Error,
    "encode-error: U+BC0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC0C");
    },
    Error,
    "encode-error: U+BC0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC0D");
    },
    Error,
    "encode-error: U+BC0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC0E");
    },
    Error,
    "encode-error: U+BC0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC0F");
    },
    Error,
    "encode-error: U+BC0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC10");
    },
    Error,
    "encode-error: U+BC10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC11");
    },
    Error,
    "encode-error: U+BC11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC12");
    },
    Error,
    "encode-error: U+BC12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC13");
    },
    Error,
    "encode-error: U+BC13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC14");
    },
    Error,
    "encode-error: U+BC14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC15");
    },
    Error,
    "encode-error: U+BC15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC16");
    },
    Error,
    "encode-error: U+BC16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC17");
    },
    Error,
    "encode-error: U+BC17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC18");
    },
    Error,
    "encode-error: U+BC18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC19");
    },
    Error,
    "encode-error: U+BC19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC1A");
    },
    Error,
    "encode-error: U+BC1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC1B");
    },
    Error,
    "encode-error: U+BC1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC1C");
    },
    Error,
    "encode-error: U+BC1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC1D");
    },
    Error,
    "encode-error: U+BC1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC1E");
    },
    Error,
    "encode-error: U+BC1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC1F");
    },
    Error,
    "encode-error: U+BC1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC20");
    },
    Error,
    "encode-error: U+BC20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC21");
    },
    Error,
    "encode-error: U+BC21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC22");
    },
    Error,
    "encode-error: U+BC22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC23");
    },
    Error,
    "encode-error: U+BC23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC24");
    },
    Error,
    "encode-error: U+BC24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC25");
    },
    Error,
    "encode-error: U+BC25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC26");
    },
    Error,
    "encode-error: U+BC26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC27");
    },
    Error,
    "encode-error: U+BC27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC28");
    },
    Error,
    "encode-error: U+BC28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC29");
    },
    Error,
    "encode-error: U+BC29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC2A");
    },
    Error,
    "encode-error: U+BC2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC2B");
    },
    Error,
    "encode-error: U+BC2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC2C");
    },
    Error,
    "encode-error: U+BC2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC2D");
    },
    Error,
    "encode-error: U+BC2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC2E");
    },
    Error,
    "encode-error: U+BC2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC2F");
    },
    Error,
    "encode-error: U+BC2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC30");
    },
    Error,
    "encode-error: U+BC30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC31");
    },
    Error,
    "encode-error: U+BC31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC32");
    },
    Error,
    "encode-error: U+BC32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC33");
    },
    Error,
    "encode-error: U+BC33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC34");
    },
    Error,
    "encode-error: U+BC34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC35");
    },
    Error,
    "encode-error: U+BC35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC36");
    },
    Error,
    "encode-error: U+BC36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC37");
    },
    Error,
    "encode-error: U+BC37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC38");
    },
    Error,
    "encode-error: U+BC38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC39");
    },
    Error,
    "encode-error: U+BC39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC3A");
    },
    Error,
    "encode-error: U+BC3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC3B");
    },
    Error,
    "encode-error: U+BC3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC3C");
    },
    Error,
    "encode-error: U+BC3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC3D");
    },
    Error,
    "encode-error: U+BC3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC3E");
    },
    Error,
    "encode-error: U+BC3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC3F");
    },
    Error,
    "encode-error: U+BC3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC40");
    },
    Error,
    "encode-error: U+BC40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC41");
    },
    Error,
    "encode-error: U+BC41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC42");
    },
    Error,
    "encode-error: U+BC42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC43");
    },
    Error,
    "encode-error: U+BC43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC44");
    },
    Error,
    "encode-error: U+BC44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC45");
    },
    Error,
    "encode-error: U+BC45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC46");
    },
    Error,
    "encode-error: U+BC46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC47");
    },
    Error,
    "encode-error: U+BC47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC48");
    },
    Error,
    "encode-error: U+BC48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC49");
    },
    Error,
    "encode-error: U+BC49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC4A");
    },
    Error,
    "encode-error: U+BC4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC4B");
    },
    Error,
    "encode-error: U+BC4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC4C");
    },
    Error,
    "encode-error: U+BC4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC4D");
    },
    Error,
    "encode-error: U+BC4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC4E");
    },
    Error,
    "encode-error: U+BC4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC4F");
    },
    Error,
    "encode-error: U+BC4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC50");
    },
    Error,
    "encode-error: U+BC50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC51");
    },
    Error,
    "encode-error: U+BC51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC52");
    },
    Error,
    "encode-error: U+BC52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC53");
    },
    Error,
    "encode-error: U+BC53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC54");
    },
    Error,
    "encode-error: U+BC54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC55");
    },
    Error,
    "encode-error: U+BC55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC56");
    },
    Error,
    "encode-error: U+BC56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC57");
    },
    Error,
    "encode-error: U+BC57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC58");
    },
    Error,
    "encode-error: U+BC58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC59");
    },
    Error,
    "encode-error: U+BC59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC5A");
    },
    Error,
    "encode-error: U+BC5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC5B");
    },
    Error,
    "encode-error: U+BC5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC5C");
    },
    Error,
    "encode-error: U+BC5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC5D");
    },
    Error,
    "encode-error: U+BC5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC5E");
    },
    Error,
    "encode-error: U+BC5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC5F");
    },
    Error,
    "encode-error: U+BC5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC60");
    },
    Error,
    "encode-error: U+BC60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC61");
    },
    Error,
    "encode-error: U+BC61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC62");
    },
    Error,
    "encode-error: U+BC62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC63");
    },
    Error,
    "encode-error: U+BC63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC64");
    },
    Error,
    "encode-error: U+BC64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC65");
    },
    Error,
    "encode-error: U+BC65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC66");
    },
    Error,
    "encode-error: U+BC66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC67");
    },
    Error,
    "encode-error: U+BC67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC68");
    },
    Error,
    "encode-error: U+BC68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC69");
    },
    Error,
    "encode-error: U+BC69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC6A");
    },
    Error,
    "encode-error: U+BC6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC6B");
    },
    Error,
    "encode-error: U+BC6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC6C");
    },
    Error,
    "encode-error: U+BC6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC6D");
    },
    Error,
    "encode-error: U+BC6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC6E");
    },
    Error,
    "encode-error: U+BC6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC6F");
    },
    Error,
    "encode-error: U+BC6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC70");
    },
    Error,
    "encode-error: U+BC70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC71");
    },
    Error,
    "encode-error: U+BC71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC72");
    },
    Error,
    "encode-error: U+BC72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC73");
    },
    Error,
    "encode-error: U+BC73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC74");
    },
    Error,
    "encode-error: U+BC74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC75");
    },
    Error,
    "encode-error: U+BC75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC76");
    },
    Error,
    "encode-error: U+BC76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC77");
    },
    Error,
    "encode-error: U+BC77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC78");
    },
    Error,
    "encode-error: U+BC78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC79");
    },
    Error,
    "encode-error: U+BC79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC7A");
    },
    Error,
    "encode-error: U+BC7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC7B");
    },
    Error,
    "encode-error: U+BC7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC7C");
    },
    Error,
    "encode-error: U+BC7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC7D");
    },
    Error,
    "encode-error: U+BC7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC7E");
    },
    Error,
    "encode-error: U+BC7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC7F");
    },
    Error,
    "encode-error: U+BC7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC80");
    },
    Error,
    "encode-error: U+BC80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC81");
    },
    Error,
    "encode-error: U+BC81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC82");
    },
    Error,
    "encode-error: U+BC82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC83");
    },
    Error,
    "encode-error: U+BC83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC84");
    },
    Error,
    "encode-error: U+BC84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC85");
    },
    Error,
    "encode-error: U+BC85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC86");
    },
    Error,
    "encode-error: U+BC86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC87");
    },
    Error,
    "encode-error: U+BC87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC88");
    },
    Error,
    "encode-error: U+BC88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC89");
    },
    Error,
    "encode-error: U+BC89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC8A");
    },
    Error,
    "encode-error: U+BC8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC8B");
    },
    Error,
    "encode-error: U+BC8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC8C");
    },
    Error,
    "encode-error: U+BC8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC8D");
    },
    Error,
    "encode-error: U+BC8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC8E");
    },
    Error,
    "encode-error: U+BC8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC8F");
    },
    Error,
    "encode-error: U+BC8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC90");
    },
    Error,
    "encode-error: U+BC90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC91");
    },
    Error,
    "encode-error: U+BC91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC92");
    },
    Error,
    "encode-error: U+BC92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC93");
    },
    Error,
    "encode-error: U+BC93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC94");
    },
    Error,
    "encode-error: U+BC94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC95");
    },
    Error,
    "encode-error: U+BC95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC96");
    },
    Error,
    "encode-error: U+BC96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC97");
    },
    Error,
    "encode-error: U+BC97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC98");
    },
    Error,
    "encode-error: U+BC98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC99");
    },
    Error,
    "encode-error: U+BC99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC9A");
    },
    Error,
    "encode-error: U+BC9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC9B");
    },
    Error,
    "encode-error: U+BC9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC9C");
    },
    Error,
    "encode-error: U+BC9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC9D");
    },
    Error,
    "encode-error: U+BC9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC9E");
    },
    Error,
    "encode-error: U+BC9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBC9F");
    },
    Error,
    "encode-error: U+BC9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCA0");
    },
    Error,
    "encode-error: U+BCA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCA1");
    },
    Error,
    "encode-error: U+BCA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCA2");
    },
    Error,
    "encode-error: U+BCA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCA3");
    },
    Error,
    "encode-error: U+BCA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCA4");
    },
    Error,
    "encode-error: U+BCA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCA5");
    },
    Error,
    "encode-error: U+BCA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCA6");
    },
    Error,
    "encode-error: U+BCA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCA7");
    },
    Error,
    "encode-error: U+BCA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCA8");
    },
    Error,
    "encode-error: U+BCA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCA9");
    },
    Error,
    "encode-error: U+BCA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCAA");
    },
    Error,
    "encode-error: U+BCAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCAB");
    },
    Error,
    "encode-error: U+BCAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCAC");
    },
    Error,
    "encode-error: U+BCAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCAD");
    },
    Error,
    "encode-error: U+BCAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCAE");
    },
    Error,
    "encode-error: U+BCAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCAF");
    },
    Error,
    "encode-error: U+BCAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCB0");
    },
    Error,
    "encode-error: U+BCB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCB1");
    },
    Error,
    "encode-error: U+BCB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCB2");
    },
    Error,
    "encode-error: U+BCB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCB3");
    },
    Error,
    "encode-error: U+BCB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCB4");
    },
    Error,
    "encode-error: U+BCB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCB5");
    },
    Error,
    "encode-error: U+BCB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCB6");
    },
    Error,
    "encode-error: U+BCB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCB7");
    },
    Error,
    "encode-error: U+BCB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCB8");
    },
    Error,
    "encode-error: U+BCB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCB9");
    },
    Error,
    "encode-error: U+BCB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCBA");
    },
    Error,
    "encode-error: U+BCBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCBB");
    },
    Error,
    "encode-error: U+BCBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCBC");
    },
    Error,
    "encode-error: U+BCBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCBD");
    },
    Error,
    "encode-error: U+BCBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCBE");
    },
    Error,
    "encode-error: U+BCBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCBF");
    },
    Error,
    "encode-error: U+BCBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCC0");
    },
    Error,
    "encode-error: U+BCC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCC1");
    },
    Error,
    "encode-error: U+BCC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCC2");
    },
    Error,
    "encode-error: U+BCC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCC3");
    },
    Error,
    "encode-error: U+BCC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCC4");
    },
    Error,
    "encode-error: U+BCC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCC5");
    },
    Error,
    "encode-error: U+BCC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCC6");
    },
    Error,
    "encode-error: U+BCC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCC7");
    },
    Error,
    "encode-error: U+BCC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCC8");
    },
    Error,
    "encode-error: U+BCC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCC9");
    },
    Error,
    "encode-error: U+BCC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCCA");
    },
    Error,
    "encode-error: U+BCCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCCB");
    },
    Error,
    "encode-error: U+BCCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCCC");
    },
    Error,
    "encode-error: U+BCCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCCD");
    },
    Error,
    "encode-error: U+BCCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCCE");
    },
    Error,
    "encode-error: U+BCCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCCF");
    },
    Error,
    "encode-error: U+BCCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCD0");
    },
    Error,
    "encode-error: U+BCD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCD1");
    },
    Error,
    "encode-error: U+BCD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCD2");
    },
    Error,
    "encode-error: U+BCD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCD3");
    },
    Error,
    "encode-error: U+BCD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCD4");
    },
    Error,
    "encode-error: U+BCD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCD5");
    },
    Error,
    "encode-error: U+BCD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCD6");
    },
    Error,
    "encode-error: U+BCD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCD7");
    },
    Error,
    "encode-error: U+BCD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCD8");
    },
    Error,
    "encode-error: U+BCD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCD9");
    },
    Error,
    "encode-error: U+BCD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCDA");
    },
    Error,
    "encode-error: U+BCDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCDB");
    },
    Error,
    "encode-error: U+BCDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCDC");
    },
    Error,
    "encode-error: U+BCDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCDD");
    },
    Error,
    "encode-error: U+BCDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCDE");
    },
    Error,
    "encode-error: U+BCDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCDF");
    },
    Error,
    "encode-error: U+BCDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCE0");
    },
    Error,
    "encode-error: U+BCE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCE1");
    },
    Error,
    "encode-error: U+BCE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCE2");
    },
    Error,
    "encode-error: U+BCE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCE3");
    },
    Error,
    "encode-error: U+BCE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCE4");
    },
    Error,
    "encode-error: U+BCE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCE5");
    },
    Error,
    "encode-error: U+BCE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCE6");
    },
    Error,
    "encode-error: U+BCE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCE7");
    },
    Error,
    "encode-error: U+BCE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCE8");
    },
    Error,
    "encode-error: U+BCE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCE9");
    },
    Error,
    "encode-error: U+BCE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCEA");
    },
    Error,
    "encode-error: U+BCEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCEB");
    },
    Error,
    "encode-error: U+BCEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCEC");
    },
    Error,
    "encode-error: U+BCEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCED");
    },
    Error,
    "encode-error: U+BCED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCEE");
    },
    Error,
    "encode-error: U+BCEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCEF");
    },
    Error,
    "encode-error: U+BCEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCF0");
    },
    Error,
    "encode-error: U+BCF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCF1");
    },
    Error,
    "encode-error: U+BCF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCF2");
    },
    Error,
    "encode-error: U+BCF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCF3");
    },
    Error,
    "encode-error: U+BCF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCF4");
    },
    Error,
    "encode-error: U+BCF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCF5");
    },
    Error,
    "encode-error: U+BCF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCF6");
    },
    Error,
    "encode-error: U+BCF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCF7");
    },
    Error,
    "encode-error: U+BCF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCF8");
    },
    Error,
    "encode-error: U+BCF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCF9");
    },
    Error,
    "encode-error: U+BCF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCFA");
    },
    Error,
    "encode-error: U+BCFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCFB");
    },
    Error,
    "encode-error: U+BCFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCFC");
    },
    Error,
    "encode-error: U+BCFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCFD");
    },
    Error,
    "encode-error: U+BCFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCFE");
    },
    Error,
    "encode-error: U+BCFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBCFF");
    },
    Error,
    "encode-error: U+BCFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD00");
    },
    Error,
    "encode-error: U+BD00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD01");
    },
    Error,
    "encode-error: U+BD01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD02");
    },
    Error,
    "encode-error: U+BD02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD03");
    },
    Error,
    "encode-error: U+BD03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD04");
    },
    Error,
    "encode-error: U+BD04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD05");
    },
    Error,
    "encode-error: U+BD05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD06");
    },
    Error,
    "encode-error: U+BD06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD07");
    },
    Error,
    "encode-error: U+BD07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD08");
    },
    Error,
    "encode-error: U+BD08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD09");
    },
    Error,
    "encode-error: U+BD09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD0A");
    },
    Error,
    "encode-error: U+BD0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD0B");
    },
    Error,
    "encode-error: U+BD0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD0C");
    },
    Error,
    "encode-error: U+BD0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD0D");
    },
    Error,
    "encode-error: U+BD0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD0E");
    },
    Error,
    "encode-error: U+BD0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD0F");
    },
    Error,
    "encode-error: U+BD0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD10");
    },
    Error,
    "encode-error: U+BD10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD11");
    },
    Error,
    "encode-error: U+BD11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD12");
    },
    Error,
    "encode-error: U+BD12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD13");
    },
    Error,
    "encode-error: U+BD13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD14");
    },
    Error,
    "encode-error: U+BD14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD15");
    },
    Error,
    "encode-error: U+BD15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD16");
    },
    Error,
    "encode-error: U+BD16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD17");
    },
    Error,
    "encode-error: U+BD17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD18");
    },
    Error,
    "encode-error: U+BD18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD19");
    },
    Error,
    "encode-error: U+BD19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD1A");
    },
    Error,
    "encode-error: U+BD1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD1B");
    },
    Error,
    "encode-error: U+BD1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD1C");
    },
    Error,
    "encode-error: U+BD1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD1D");
    },
    Error,
    "encode-error: U+BD1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD1E");
    },
    Error,
    "encode-error: U+BD1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD1F");
    },
    Error,
    "encode-error: U+BD1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD20");
    },
    Error,
    "encode-error: U+BD20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD21");
    },
    Error,
    "encode-error: U+BD21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD22");
    },
    Error,
    "encode-error: U+BD22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD23");
    },
    Error,
    "encode-error: U+BD23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD24");
    },
    Error,
    "encode-error: U+BD24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD25");
    },
    Error,
    "encode-error: U+BD25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD26");
    },
    Error,
    "encode-error: U+BD26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD27");
    },
    Error,
    "encode-error: U+BD27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD28");
    },
    Error,
    "encode-error: U+BD28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD29");
    },
    Error,
    "encode-error: U+BD29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD2A");
    },
    Error,
    "encode-error: U+BD2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD2B");
    },
    Error,
    "encode-error: U+BD2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD2C");
    },
    Error,
    "encode-error: U+BD2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD2D");
    },
    Error,
    "encode-error: U+BD2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD2E");
    },
    Error,
    "encode-error: U+BD2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD2F");
    },
    Error,
    "encode-error: U+BD2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD30");
    },
    Error,
    "encode-error: U+BD30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD31");
    },
    Error,
    "encode-error: U+BD31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD32");
    },
    Error,
    "encode-error: U+BD32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD33");
    },
    Error,
    "encode-error: U+BD33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD34");
    },
    Error,
    "encode-error: U+BD34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD35");
    },
    Error,
    "encode-error: U+BD35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD36");
    },
    Error,
    "encode-error: U+BD36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD37");
    },
    Error,
    "encode-error: U+BD37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD38");
    },
    Error,
    "encode-error: U+BD38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD39");
    },
    Error,
    "encode-error: U+BD39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD3A");
    },
    Error,
    "encode-error: U+BD3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD3B");
    },
    Error,
    "encode-error: U+BD3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD3C");
    },
    Error,
    "encode-error: U+BD3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD3D");
    },
    Error,
    "encode-error: U+BD3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD3E");
    },
    Error,
    "encode-error: U+BD3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD3F");
    },
    Error,
    "encode-error: U+BD3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD40");
    },
    Error,
    "encode-error: U+BD40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD41");
    },
    Error,
    "encode-error: U+BD41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD42");
    },
    Error,
    "encode-error: U+BD42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD43");
    },
    Error,
    "encode-error: U+BD43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD44");
    },
    Error,
    "encode-error: U+BD44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD45");
    },
    Error,
    "encode-error: U+BD45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD46");
    },
    Error,
    "encode-error: U+BD46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD47");
    },
    Error,
    "encode-error: U+BD47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD48");
    },
    Error,
    "encode-error: U+BD48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD49");
    },
    Error,
    "encode-error: U+BD49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD4A");
    },
    Error,
    "encode-error: U+BD4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD4B");
    },
    Error,
    "encode-error: U+BD4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD4C");
    },
    Error,
    "encode-error: U+BD4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD4D");
    },
    Error,
    "encode-error: U+BD4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD4E");
    },
    Error,
    "encode-error: U+BD4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD4F");
    },
    Error,
    "encode-error: U+BD4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD50");
    },
    Error,
    "encode-error: U+BD50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD51");
    },
    Error,
    "encode-error: U+BD51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD52");
    },
    Error,
    "encode-error: U+BD52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD53");
    },
    Error,
    "encode-error: U+BD53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD54");
    },
    Error,
    "encode-error: U+BD54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD55");
    },
    Error,
    "encode-error: U+BD55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD56");
    },
    Error,
    "encode-error: U+BD56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD57");
    },
    Error,
    "encode-error: U+BD57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD58");
    },
    Error,
    "encode-error: U+BD58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD59");
    },
    Error,
    "encode-error: U+BD59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD5A");
    },
    Error,
    "encode-error: U+BD5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD5B");
    },
    Error,
    "encode-error: U+BD5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD5C");
    },
    Error,
    "encode-error: U+BD5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD5D");
    },
    Error,
    "encode-error: U+BD5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD5E");
    },
    Error,
    "encode-error: U+BD5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD5F");
    },
    Error,
    "encode-error: U+BD5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD60");
    },
    Error,
    "encode-error: U+BD60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD61");
    },
    Error,
    "encode-error: U+BD61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD62");
    },
    Error,
    "encode-error: U+BD62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD63");
    },
    Error,
    "encode-error: U+BD63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD64");
    },
    Error,
    "encode-error: U+BD64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD65");
    },
    Error,
    "encode-error: U+BD65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD66");
    },
    Error,
    "encode-error: U+BD66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD67");
    },
    Error,
    "encode-error: U+BD67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD68");
    },
    Error,
    "encode-error: U+BD68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD69");
    },
    Error,
    "encode-error: U+BD69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD6A");
    },
    Error,
    "encode-error: U+BD6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD6B");
    },
    Error,
    "encode-error: U+BD6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD6C");
    },
    Error,
    "encode-error: U+BD6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD6D");
    },
    Error,
    "encode-error: U+BD6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD6E");
    },
    Error,
    "encode-error: U+BD6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD6F");
    },
    Error,
    "encode-error: U+BD6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD70");
    },
    Error,
    "encode-error: U+BD70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD71");
    },
    Error,
    "encode-error: U+BD71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD72");
    },
    Error,
    "encode-error: U+BD72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD73");
    },
    Error,
    "encode-error: U+BD73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD74");
    },
    Error,
    "encode-error: U+BD74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD75");
    },
    Error,
    "encode-error: U+BD75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD76");
    },
    Error,
    "encode-error: U+BD76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD77");
    },
    Error,
    "encode-error: U+BD77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD78");
    },
    Error,
    "encode-error: U+BD78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD79");
    },
    Error,
    "encode-error: U+BD79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD7A");
    },
    Error,
    "encode-error: U+BD7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD7B");
    },
    Error,
    "encode-error: U+BD7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD7C");
    },
    Error,
    "encode-error: U+BD7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD7D");
    },
    Error,
    "encode-error: U+BD7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD7E");
    },
    Error,
    "encode-error: U+BD7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD7F");
    },
    Error,
    "encode-error: U+BD7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD80");
    },
    Error,
    "encode-error: U+BD80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD81");
    },
    Error,
    "encode-error: U+BD81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD82");
    },
    Error,
    "encode-error: U+BD82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD83");
    },
    Error,
    "encode-error: U+BD83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD84");
    },
    Error,
    "encode-error: U+BD84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD85");
    },
    Error,
    "encode-error: U+BD85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD86");
    },
    Error,
    "encode-error: U+BD86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD87");
    },
    Error,
    "encode-error: U+BD87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD88");
    },
    Error,
    "encode-error: U+BD88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD89");
    },
    Error,
    "encode-error: U+BD89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD8A");
    },
    Error,
    "encode-error: U+BD8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD8B");
    },
    Error,
    "encode-error: U+BD8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD8C");
    },
    Error,
    "encode-error: U+BD8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD8D");
    },
    Error,
    "encode-error: U+BD8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD8E");
    },
    Error,
    "encode-error: U+BD8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD8F");
    },
    Error,
    "encode-error: U+BD8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD90");
    },
    Error,
    "encode-error: U+BD90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD91");
    },
    Error,
    "encode-error: U+BD91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD92");
    },
    Error,
    "encode-error: U+BD92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD93");
    },
    Error,
    "encode-error: U+BD93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD94");
    },
    Error,
    "encode-error: U+BD94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD95");
    },
    Error,
    "encode-error: U+BD95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD96");
    },
    Error,
    "encode-error: U+BD96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD97");
    },
    Error,
    "encode-error: U+BD97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD98");
    },
    Error,
    "encode-error: U+BD98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD99");
    },
    Error,
    "encode-error: U+BD99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD9A");
    },
    Error,
    "encode-error: U+BD9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD9B");
    },
    Error,
    "encode-error: U+BD9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD9C");
    },
    Error,
    "encode-error: U+BD9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD9D");
    },
    Error,
    "encode-error: U+BD9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD9E");
    },
    Error,
    "encode-error: U+BD9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBD9F");
    },
    Error,
    "encode-error: U+BD9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDA0");
    },
    Error,
    "encode-error: U+BDA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDA1");
    },
    Error,
    "encode-error: U+BDA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDA2");
    },
    Error,
    "encode-error: U+BDA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDA3");
    },
    Error,
    "encode-error: U+BDA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDA4");
    },
    Error,
    "encode-error: U+BDA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDA5");
    },
    Error,
    "encode-error: U+BDA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDA6");
    },
    Error,
    "encode-error: U+BDA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDA7");
    },
    Error,
    "encode-error: U+BDA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDA8");
    },
    Error,
    "encode-error: U+BDA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDA9");
    },
    Error,
    "encode-error: U+BDA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDAA");
    },
    Error,
    "encode-error: U+BDAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDAB");
    },
    Error,
    "encode-error: U+BDAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDAC");
    },
    Error,
    "encode-error: U+BDAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDAD");
    },
    Error,
    "encode-error: U+BDAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDAE");
    },
    Error,
    "encode-error: U+BDAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDAF");
    },
    Error,
    "encode-error: U+BDAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDB0");
    },
    Error,
    "encode-error: U+BDB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDB1");
    },
    Error,
    "encode-error: U+BDB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDB2");
    },
    Error,
    "encode-error: U+BDB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDB3");
    },
    Error,
    "encode-error: U+BDB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDB4");
    },
    Error,
    "encode-error: U+BDB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDB5");
    },
    Error,
    "encode-error: U+BDB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDB6");
    },
    Error,
    "encode-error: U+BDB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDB7");
    },
    Error,
    "encode-error: U+BDB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDB8");
    },
    Error,
    "encode-error: U+BDB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDB9");
    },
    Error,
    "encode-error: U+BDB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDBA");
    },
    Error,
    "encode-error: U+BDBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDBB");
    },
    Error,
    "encode-error: U+BDBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDBC");
    },
    Error,
    "encode-error: U+BDBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDBD");
    },
    Error,
    "encode-error: U+BDBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDBE");
    },
    Error,
    "encode-error: U+BDBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDBF");
    },
    Error,
    "encode-error: U+BDBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDC0");
    },
    Error,
    "encode-error: U+BDC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDC1");
    },
    Error,
    "encode-error: U+BDC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDC2");
    },
    Error,
    "encode-error: U+BDC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDC3");
    },
    Error,
    "encode-error: U+BDC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDC4");
    },
    Error,
    "encode-error: U+BDC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDC5");
    },
    Error,
    "encode-error: U+BDC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDC6");
    },
    Error,
    "encode-error: U+BDC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDC7");
    },
    Error,
    "encode-error: U+BDC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDC8");
    },
    Error,
    "encode-error: U+BDC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDC9");
    },
    Error,
    "encode-error: U+BDC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDCA");
    },
    Error,
    "encode-error: U+BDCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDCB");
    },
    Error,
    "encode-error: U+BDCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDCC");
    },
    Error,
    "encode-error: U+BDCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDCD");
    },
    Error,
    "encode-error: U+BDCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDCE");
    },
    Error,
    "encode-error: U+BDCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDCF");
    },
    Error,
    "encode-error: U+BDCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDD0");
    },
    Error,
    "encode-error: U+BDD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDD1");
    },
    Error,
    "encode-error: U+BDD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDD2");
    },
    Error,
    "encode-error: U+BDD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDD3");
    },
    Error,
    "encode-error: U+BDD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDD4");
    },
    Error,
    "encode-error: U+BDD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDD5");
    },
    Error,
    "encode-error: U+BDD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDD6");
    },
    Error,
    "encode-error: U+BDD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDD7");
    },
    Error,
    "encode-error: U+BDD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDD8");
    },
    Error,
    "encode-error: U+BDD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDD9");
    },
    Error,
    "encode-error: U+BDD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDDA");
    },
    Error,
    "encode-error: U+BDDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDDB");
    },
    Error,
    "encode-error: U+BDDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDDC");
    },
    Error,
    "encode-error: U+BDDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDDD");
    },
    Error,
    "encode-error: U+BDDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDDE");
    },
    Error,
    "encode-error: U+BDDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDDF");
    },
    Error,
    "encode-error: U+BDDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDE0");
    },
    Error,
    "encode-error: U+BDE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDE1");
    },
    Error,
    "encode-error: U+BDE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDE2");
    },
    Error,
    "encode-error: U+BDE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDE3");
    },
    Error,
    "encode-error: U+BDE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDE4");
    },
    Error,
    "encode-error: U+BDE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDE5");
    },
    Error,
    "encode-error: U+BDE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDE6");
    },
    Error,
    "encode-error: U+BDE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDE7");
    },
    Error,
    "encode-error: U+BDE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDE8");
    },
    Error,
    "encode-error: U+BDE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDE9");
    },
    Error,
    "encode-error: U+BDE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDEA");
    },
    Error,
    "encode-error: U+BDEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDEB");
    },
    Error,
    "encode-error: U+BDEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDEC");
    },
    Error,
    "encode-error: U+BDEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDED");
    },
    Error,
    "encode-error: U+BDED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDEE");
    },
    Error,
    "encode-error: U+BDEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDEF");
    },
    Error,
    "encode-error: U+BDEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDF0");
    },
    Error,
    "encode-error: U+BDF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDF1");
    },
    Error,
    "encode-error: U+BDF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDF2");
    },
    Error,
    "encode-error: U+BDF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDF3");
    },
    Error,
    "encode-error: U+BDF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDF4");
    },
    Error,
    "encode-error: U+BDF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDF5");
    },
    Error,
    "encode-error: U+BDF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDF6");
    },
    Error,
    "encode-error: U+BDF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDF7");
    },
    Error,
    "encode-error: U+BDF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDF8");
    },
    Error,
    "encode-error: U+BDF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDF9");
    },
    Error,
    "encode-error: U+BDF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDFA");
    },
    Error,
    "encode-error: U+BDFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDFB");
    },
    Error,
    "encode-error: U+BDFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDFC");
    },
    Error,
    "encode-error: U+BDFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDFD");
    },
    Error,
    "encode-error: U+BDFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDFE");
    },
    Error,
    "encode-error: U+BDFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBDFF");
    },
    Error,
    "encode-error: U+BDFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE00");
    },
    Error,
    "encode-error: U+BE00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE01");
    },
    Error,
    "encode-error: U+BE01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE02");
    },
    Error,
    "encode-error: U+BE02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE03");
    },
    Error,
    "encode-error: U+BE03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE04");
    },
    Error,
    "encode-error: U+BE04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE05");
    },
    Error,
    "encode-error: U+BE05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE06");
    },
    Error,
    "encode-error: U+BE06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE07");
    },
    Error,
    "encode-error: U+BE07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE08");
    },
    Error,
    "encode-error: U+BE08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE09");
    },
    Error,
    "encode-error: U+BE09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE0A");
    },
    Error,
    "encode-error: U+BE0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE0B");
    },
    Error,
    "encode-error: U+BE0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE0C");
    },
    Error,
    "encode-error: U+BE0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE0D");
    },
    Error,
    "encode-error: U+BE0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE0E");
    },
    Error,
    "encode-error: U+BE0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE0F");
    },
    Error,
    "encode-error: U+BE0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE10");
    },
    Error,
    "encode-error: U+BE10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE11");
    },
    Error,
    "encode-error: U+BE11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE12");
    },
    Error,
    "encode-error: U+BE12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE13");
    },
    Error,
    "encode-error: U+BE13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE14");
    },
    Error,
    "encode-error: U+BE14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE15");
    },
    Error,
    "encode-error: U+BE15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE16");
    },
    Error,
    "encode-error: U+BE16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE17");
    },
    Error,
    "encode-error: U+BE17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE18");
    },
    Error,
    "encode-error: U+BE18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE19");
    },
    Error,
    "encode-error: U+BE19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE1A");
    },
    Error,
    "encode-error: U+BE1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE1B");
    },
    Error,
    "encode-error: U+BE1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE1C");
    },
    Error,
    "encode-error: U+BE1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE1D");
    },
    Error,
    "encode-error: U+BE1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE1E");
    },
    Error,
    "encode-error: U+BE1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE1F");
    },
    Error,
    "encode-error: U+BE1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE20");
    },
    Error,
    "encode-error: U+BE20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE21");
    },
    Error,
    "encode-error: U+BE21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE22");
    },
    Error,
    "encode-error: U+BE22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE23");
    },
    Error,
    "encode-error: U+BE23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE24");
    },
    Error,
    "encode-error: U+BE24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE25");
    },
    Error,
    "encode-error: U+BE25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE26");
    },
    Error,
    "encode-error: U+BE26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE27");
    },
    Error,
    "encode-error: U+BE27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE28");
    },
    Error,
    "encode-error: U+BE28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE29");
    },
    Error,
    "encode-error: U+BE29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE2A");
    },
    Error,
    "encode-error: U+BE2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE2B");
    },
    Error,
    "encode-error: U+BE2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE2C");
    },
    Error,
    "encode-error: U+BE2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE2D");
    },
    Error,
    "encode-error: U+BE2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE2E");
    },
    Error,
    "encode-error: U+BE2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE2F");
    },
    Error,
    "encode-error: U+BE2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE30");
    },
    Error,
    "encode-error: U+BE30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE31");
    },
    Error,
    "encode-error: U+BE31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE32");
    },
    Error,
    "encode-error: U+BE32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE33");
    },
    Error,
    "encode-error: U+BE33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE34");
    },
    Error,
    "encode-error: U+BE34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE35");
    },
    Error,
    "encode-error: U+BE35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE36");
    },
    Error,
    "encode-error: U+BE36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE37");
    },
    Error,
    "encode-error: U+BE37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE38");
    },
    Error,
    "encode-error: U+BE38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE39");
    },
    Error,
    "encode-error: U+BE39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE3A");
    },
    Error,
    "encode-error: U+BE3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE3B");
    },
    Error,
    "encode-error: U+BE3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE3C");
    },
    Error,
    "encode-error: U+BE3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE3D");
    },
    Error,
    "encode-error: U+BE3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE3E");
    },
    Error,
    "encode-error: U+BE3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE3F");
    },
    Error,
    "encode-error: U+BE3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE40");
    },
    Error,
    "encode-error: U+BE40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE41");
    },
    Error,
    "encode-error: U+BE41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE42");
    },
    Error,
    "encode-error: U+BE42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE43");
    },
    Error,
    "encode-error: U+BE43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE44");
    },
    Error,
    "encode-error: U+BE44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE45");
    },
    Error,
    "encode-error: U+BE45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE46");
    },
    Error,
    "encode-error: U+BE46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE47");
    },
    Error,
    "encode-error: U+BE47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE48");
    },
    Error,
    "encode-error: U+BE48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE49");
    },
    Error,
    "encode-error: U+BE49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE4A");
    },
    Error,
    "encode-error: U+BE4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE4B");
    },
    Error,
    "encode-error: U+BE4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE4C");
    },
    Error,
    "encode-error: U+BE4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE4D");
    },
    Error,
    "encode-error: U+BE4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE4E");
    },
    Error,
    "encode-error: U+BE4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE4F");
    },
    Error,
    "encode-error: U+BE4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE50");
    },
    Error,
    "encode-error: U+BE50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE51");
    },
    Error,
    "encode-error: U+BE51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE52");
    },
    Error,
    "encode-error: U+BE52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE53");
    },
    Error,
    "encode-error: U+BE53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE54");
    },
    Error,
    "encode-error: U+BE54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE55");
    },
    Error,
    "encode-error: U+BE55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE56");
    },
    Error,
    "encode-error: U+BE56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE57");
    },
    Error,
    "encode-error: U+BE57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE58");
    },
    Error,
    "encode-error: U+BE58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE59");
    },
    Error,
    "encode-error: U+BE59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE5A");
    },
    Error,
    "encode-error: U+BE5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE5B");
    },
    Error,
    "encode-error: U+BE5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE5C");
    },
    Error,
    "encode-error: U+BE5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE5D");
    },
    Error,
    "encode-error: U+BE5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE5E");
    },
    Error,
    "encode-error: U+BE5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE5F");
    },
    Error,
    "encode-error: U+BE5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE60");
    },
    Error,
    "encode-error: U+BE60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE61");
    },
    Error,
    "encode-error: U+BE61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE62");
    },
    Error,
    "encode-error: U+BE62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE63");
    },
    Error,
    "encode-error: U+BE63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE64");
    },
    Error,
    "encode-error: U+BE64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE65");
    },
    Error,
    "encode-error: U+BE65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE66");
    },
    Error,
    "encode-error: U+BE66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE67");
    },
    Error,
    "encode-error: U+BE67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE68");
    },
    Error,
    "encode-error: U+BE68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE69");
    },
    Error,
    "encode-error: U+BE69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE6A");
    },
    Error,
    "encode-error: U+BE6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE6B");
    },
    Error,
    "encode-error: U+BE6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE6C");
    },
    Error,
    "encode-error: U+BE6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE6D");
    },
    Error,
    "encode-error: U+BE6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE6E");
    },
    Error,
    "encode-error: U+BE6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE6F");
    },
    Error,
    "encode-error: U+BE6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE70");
    },
    Error,
    "encode-error: U+BE70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE71");
    },
    Error,
    "encode-error: U+BE71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE72");
    },
    Error,
    "encode-error: U+BE72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE73");
    },
    Error,
    "encode-error: U+BE73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE74");
    },
    Error,
    "encode-error: U+BE74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE75");
    },
    Error,
    "encode-error: U+BE75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE76");
    },
    Error,
    "encode-error: U+BE76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE77");
    },
    Error,
    "encode-error: U+BE77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE78");
    },
    Error,
    "encode-error: U+BE78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE79");
    },
    Error,
    "encode-error: U+BE79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE7A");
    },
    Error,
    "encode-error: U+BE7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE7B");
    },
    Error,
    "encode-error: U+BE7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE7C");
    },
    Error,
    "encode-error: U+BE7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE7D");
    },
    Error,
    "encode-error: U+BE7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE7E");
    },
    Error,
    "encode-error: U+BE7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE7F");
    },
    Error,
    "encode-error: U+BE7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE80");
    },
    Error,
    "encode-error: U+BE80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE81");
    },
    Error,
    "encode-error: U+BE81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE82");
    },
    Error,
    "encode-error: U+BE82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE83");
    },
    Error,
    "encode-error: U+BE83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE84");
    },
    Error,
    "encode-error: U+BE84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE85");
    },
    Error,
    "encode-error: U+BE85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE86");
    },
    Error,
    "encode-error: U+BE86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE87");
    },
    Error,
    "encode-error: U+BE87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE88");
    },
    Error,
    "encode-error: U+BE88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE89");
    },
    Error,
    "encode-error: U+BE89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE8A");
    },
    Error,
    "encode-error: U+BE8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE8B");
    },
    Error,
    "encode-error: U+BE8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE8C");
    },
    Error,
    "encode-error: U+BE8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE8D");
    },
    Error,
    "encode-error: U+BE8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE8E");
    },
    Error,
    "encode-error: U+BE8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE8F");
    },
    Error,
    "encode-error: U+BE8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE90");
    },
    Error,
    "encode-error: U+BE90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE91");
    },
    Error,
    "encode-error: U+BE91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE92");
    },
    Error,
    "encode-error: U+BE92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE93");
    },
    Error,
    "encode-error: U+BE93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE94");
    },
    Error,
    "encode-error: U+BE94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE95");
    },
    Error,
    "encode-error: U+BE95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE96");
    },
    Error,
    "encode-error: U+BE96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE97");
    },
    Error,
    "encode-error: U+BE97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE98");
    },
    Error,
    "encode-error: U+BE98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE99");
    },
    Error,
    "encode-error: U+BE99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE9A");
    },
    Error,
    "encode-error: U+BE9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE9B");
    },
    Error,
    "encode-error: U+BE9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE9C");
    },
    Error,
    "encode-error: U+BE9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE9D");
    },
    Error,
    "encode-error: U+BE9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE9E");
    },
    Error,
    "encode-error: U+BE9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBE9F");
    },
    Error,
    "encode-error: U+BE9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEA0");
    },
    Error,
    "encode-error: U+BEA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEA1");
    },
    Error,
    "encode-error: U+BEA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEA2");
    },
    Error,
    "encode-error: U+BEA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEA3");
    },
    Error,
    "encode-error: U+BEA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEA4");
    },
    Error,
    "encode-error: U+BEA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEA5");
    },
    Error,
    "encode-error: U+BEA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEA6");
    },
    Error,
    "encode-error: U+BEA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEA7");
    },
    Error,
    "encode-error: U+BEA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEA8");
    },
    Error,
    "encode-error: U+BEA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEA9");
    },
    Error,
    "encode-error: U+BEA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEAA");
    },
    Error,
    "encode-error: U+BEAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEAB");
    },
    Error,
    "encode-error: U+BEAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEAC");
    },
    Error,
    "encode-error: U+BEAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEAD");
    },
    Error,
    "encode-error: U+BEAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEAE");
    },
    Error,
    "encode-error: U+BEAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEAF");
    },
    Error,
    "encode-error: U+BEAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEB0");
    },
    Error,
    "encode-error: U+BEB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEB1");
    },
    Error,
    "encode-error: U+BEB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEB2");
    },
    Error,
    "encode-error: U+BEB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEB3");
    },
    Error,
    "encode-error: U+BEB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEB4");
    },
    Error,
    "encode-error: U+BEB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEB5");
    },
    Error,
    "encode-error: U+BEB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEB6");
    },
    Error,
    "encode-error: U+BEB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEB7");
    },
    Error,
    "encode-error: U+BEB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEB8");
    },
    Error,
    "encode-error: U+BEB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEB9");
    },
    Error,
    "encode-error: U+BEB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEBA");
    },
    Error,
    "encode-error: U+BEBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEBB");
    },
    Error,
    "encode-error: U+BEBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEBC");
    },
    Error,
    "encode-error: U+BEBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEBD");
    },
    Error,
    "encode-error: U+BEBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEBE");
    },
    Error,
    "encode-error: U+BEBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEBF");
    },
    Error,
    "encode-error: U+BEBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEC0");
    },
    Error,
    "encode-error: U+BEC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEC1");
    },
    Error,
    "encode-error: U+BEC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEC2");
    },
    Error,
    "encode-error: U+BEC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEC3");
    },
    Error,
    "encode-error: U+BEC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEC4");
    },
    Error,
    "encode-error: U+BEC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEC5");
    },
    Error,
    "encode-error: U+BEC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEC6");
    },
    Error,
    "encode-error: U+BEC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEC7");
    },
    Error,
    "encode-error: U+BEC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEC8");
    },
    Error,
    "encode-error: U+BEC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEC9");
    },
    Error,
    "encode-error: U+BEC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBECA");
    },
    Error,
    "encode-error: U+BECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBECB");
    },
    Error,
    "encode-error: U+BECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBECC");
    },
    Error,
    "encode-error: U+BECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBECD");
    },
    Error,
    "encode-error: U+BECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBECE");
    },
    Error,
    "encode-error: U+BECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBECF");
    },
    Error,
    "encode-error: U+BECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBED0");
    },
    Error,
    "encode-error: U+BED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBED1");
    },
    Error,
    "encode-error: U+BED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBED2");
    },
    Error,
    "encode-error: U+BED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBED3");
    },
    Error,
    "encode-error: U+BED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBED4");
    },
    Error,
    "encode-error: U+BED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBED5");
    },
    Error,
    "encode-error: U+BED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBED6");
    },
    Error,
    "encode-error: U+BED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBED7");
    },
    Error,
    "encode-error: U+BED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBED8");
    },
    Error,
    "encode-error: U+BED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBED9");
    },
    Error,
    "encode-error: U+BED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEDA");
    },
    Error,
    "encode-error: U+BEDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEDB");
    },
    Error,
    "encode-error: U+BEDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEDC");
    },
    Error,
    "encode-error: U+BEDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEDD");
    },
    Error,
    "encode-error: U+BEDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEDE");
    },
    Error,
    "encode-error: U+BEDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEDF");
    },
    Error,
    "encode-error: U+BEDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEE0");
    },
    Error,
    "encode-error: U+BEE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEE1");
    },
    Error,
    "encode-error: U+BEE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEE2");
    },
    Error,
    "encode-error: U+BEE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEE3");
    },
    Error,
    "encode-error: U+BEE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEE4");
    },
    Error,
    "encode-error: U+BEE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEE5");
    },
    Error,
    "encode-error: U+BEE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEE6");
    },
    Error,
    "encode-error: U+BEE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEE7");
    },
    Error,
    "encode-error: U+BEE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEE8");
    },
    Error,
    "encode-error: U+BEE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEE9");
    },
    Error,
    "encode-error: U+BEE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEEA");
    },
    Error,
    "encode-error: U+BEEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEEB");
    },
    Error,
    "encode-error: U+BEEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEEC");
    },
    Error,
    "encode-error: U+BEEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEED");
    },
    Error,
    "encode-error: U+BEED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEEE");
    },
    Error,
    "encode-error: U+BEEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEEF");
    },
    Error,
    "encode-error: U+BEEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEF0");
    },
    Error,
    "encode-error: U+BEF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEF1");
    },
    Error,
    "encode-error: U+BEF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEF2");
    },
    Error,
    "encode-error: U+BEF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEF3");
    },
    Error,
    "encode-error: U+BEF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEF4");
    },
    Error,
    "encode-error: U+BEF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEF5");
    },
    Error,
    "encode-error: U+BEF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEF6");
    },
    Error,
    "encode-error: U+BEF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEF7");
    },
    Error,
    "encode-error: U+BEF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEF8");
    },
    Error,
    "encode-error: U+BEF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEF9");
    },
    Error,
    "encode-error: U+BEF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEFA");
    },
    Error,
    "encode-error: U+BEFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEFB");
    },
    Error,
    "encode-error: U+BEFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEFC");
    },
    Error,
    "encode-error: U+BEFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEFD");
    },
    Error,
    "encode-error: U+BEFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEFE");
    },
    Error,
    "encode-error: U+BEFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBEFF");
    },
    Error,
    "encode-error: U+BEFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF00");
    },
    Error,
    "encode-error: U+BF00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF01");
    },
    Error,
    "encode-error: U+BF01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF02");
    },
    Error,
    "encode-error: U+BF02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF03");
    },
    Error,
    "encode-error: U+BF03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF04");
    },
    Error,
    "encode-error: U+BF04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF05");
    },
    Error,
    "encode-error: U+BF05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF06");
    },
    Error,
    "encode-error: U+BF06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF07");
    },
    Error,
    "encode-error: U+BF07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF08");
    },
    Error,
    "encode-error: U+BF08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF09");
    },
    Error,
    "encode-error: U+BF09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF0A");
    },
    Error,
    "encode-error: U+BF0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF0B");
    },
    Error,
    "encode-error: U+BF0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF0C");
    },
    Error,
    "encode-error: U+BF0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF0D");
    },
    Error,
    "encode-error: U+BF0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF0E");
    },
    Error,
    "encode-error: U+BF0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF0F");
    },
    Error,
    "encode-error: U+BF0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF10");
    },
    Error,
    "encode-error: U+BF10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF11");
    },
    Error,
    "encode-error: U+BF11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF12");
    },
    Error,
    "encode-error: U+BF12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF13");
    },
    Error,
    "encode-error: U+BF13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF14");
    },
    Error,
    "encode-error: U+BF14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF15");
    },
    Error,
    "encode-error: U+BF15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF16");
    },
    Error,
    "encode-error: U+BF16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF17");
    },
    Error,
    "encode-error: U+BF17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF18");
    },
    Error,
    "encode-error: U+BF18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF19");
    },
    Error,
    "encode-error: U+BF19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF1A");
    },
    Error,
    "encode-error: U+BF1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF1B");
    },
    Error,
    "encode-error: U+BF1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF1C");
    },
    Error,
    "encode-error: U+BF1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF1D");
    },
    Error,
    "encode-error: U+BF1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF1E");
    },
    Error,
    "encode-error: U+BF1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF1F");
    },
    Error,
    "encode-error: U+BF1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF20");
    },
    Error,
    "encode-error: U+BF20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF21");
    },
    Error,
    "encode-error: U+BF21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF22");
    },
    Error,
    "encode-error: U+BF22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF23");
    },
    Error,
    "encode-error: U+BF23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF24");
    },
    Error,
    "encode-error: U+BF24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF25");
    },
    Error,
    "encode-error: U+BF25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF26");
    },
    Error,
    "encode-error: U+BF26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF27");
    },
    Error,
    "encode-error: U+BF27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF28");
    },
    Error,
    "encode-error: U+BF28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF29");
    },
    Error,
    "encode-error: U+BF29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF2A");
    },
    Error,
    "encode-error: U+BF2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF2B");
    },
    Error,
    "encode-error: U+BF2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF2C");
    },
    Error,
    "encode-error: U+BF2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF2D");
    },
    Error,
    "encode-error: U+BF2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF2E");
    },
    Error,
    "encode-error: U+BF2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF2F");
    },
    Error,
    "encode-error: U+BF2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF30");
    },
    Error,
    "encode-error: U+BF30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF31");
    },
    Error,
    "encode-error: U+BF31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF32");
    },
    Error,
    "encode-error: U+BF32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF33");
    },
    Error,
    "encode-error: U+BF33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF34");
    },
    Error,
    "encode-error: U+BF34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF35");
    },
    Error,
    "encode-error: U+BF35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF36");
    },
    Error,
    "encode-error: U+BF36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF37");
    },
    Error,
    "encode-error: U+BF37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF38");
    },
    Error,
    "encode-error: U+BF38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF39");
    },
    Error,
    "encode-error: U+BF39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF3A");
    },
    Error,
    "encode-error: U+BF3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF3B");
    },
    Error,
    "encode-error: U+BF3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF3C");
    },
    Error,
    "encode-error: U+BF3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF3D");
    },
    Error,
    "encode-error: U+BF3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF3E");
    },
    Error,
    "encode-error: U+BF3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF3F");
    },
    Error,
    "encode-error: U+BF3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF40");
    },
    Error,
    "encode-error: U+BF40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF41");
    },
    Error,
    "encode-error: U+BF41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF42");
    },
    Error,
    "encode-error: U+BF42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF43");
    },
    Error,
    "encode-error: U+BF43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF44");
    },
    Error,
    "encode-error: U+BF44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF45");
    },
    Error,
    "encode-error: U+BF45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF46");
    },
    Error,
    "encode-error: U+BF46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF47");
    },
    Error,
    "encode-error: U+BF47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF48");
    },
    Error,
    "encode-error: U+BF48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF49");
    },
    Error,
    "encode-error: U+BF49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF4A");
    },
    Error,
    "encode-error: U+BF4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF4B");
    },
    Error,
    "encode-error: U+BF4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF4C");
    },
    Error,
    "encode-error: U+BF4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF4D");
    },
    Error,
    "encode-error: U+BF4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF4E");
    },
    Error,
    "encode-error: U+BF4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF4F");
    },
    Error,
    "encode-error: U+BF4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF50");
    },
    Error,
    "encode-error: U+BF50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF51");
    },
    Error,
    "encode-error: U+BF51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF52");
    },
    Error,
    "encode-error: U+BF52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF53");
    },
    Error,
    "encode-error: U+BF53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF54");
    },
    Error,
    "encode-error: U+BF54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF55");
    },
    Error,
    "encode-error: U+BF55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF56");
    },
    Error,
    "encode-error: U+BF56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF57");
    },
    Error,
    "encode-error: U+BF57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF58");
    },
    Error,
    "encode-error: U+BF58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF59");
    },
    Error,
    "encode-error: U+BF59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF5A");
    },
    Error,
    "encode-error: U+BF5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF5B");
    },
    Error,
    "encode-error: U+BF5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF5C");
    },
    Error,
    "encode-error: U+BF5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF5D");
    },
    Error,
    "encode-error: U+BF5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF5E");
    },
    Error,
    "encode-error: U+BF5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF5F");
    },
    Error,
    "encode-error: U+BF5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF60");
    },
    Error,
    "encode-error: U+BF60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF61");
    },
    Error,
    "encode-error: U+BF61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF62");
    },
    Error,
    "encode-error: U+BF62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF63");
    },
    Error,
    "encode-error: U+BF63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF64");
    },
    Error,
    "encode-error: U+BF64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF65");
    },
    Error,
    "encode-error: U+BF65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF66");
    },
    Error,
    "encode-error: U+BF66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF67");
    },
    Error,
    "encode-error: U+BF67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF68");
    },
    Error,
    "encode-error: U+BF68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF69");
    },
    Error,
    "encode-error: U+BF69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF6A");
    },
    Error,
    "encode-error: U+BF6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF6B");
    },
    Error,
    "encode-error: U+BF6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF6C");
    },
    Error,
    "encode-error: U+BF6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF6D");
    },
    Error,
    "encode-error: U+BF6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF6E");
    },
    Error,
    "encode-error: U+BF6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF6F");
    },
    Error,
    "encode-error: U+BF6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF70");
    },
    Error,
    "encode-error: U+BF70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF71");
    },
    Error,
    "encode-error: U+BF71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF72");
    },
    Error,
    "encode-error: U+BF72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF73");
    },
    Error,
    "encode-error: U+BF73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF74");
    },
    Error,
    "encode-error: U+BF74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF75");
    },
    Error,
    "encode-error: U+BF75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF76");
    },
    Error,
    "encode-error: U+BF76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF77");
    },
    Error,
    "encode-error: U+BF77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF78");
    },
    Error,
    "encode-error: U+BF78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF79");
    },
    Error,
    "encode-error: U+BF79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF7A");
    },
    Error,
    "encode-error: U+BF7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF7B");
    },
    Error,
    "encode-error: U+BF7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF7C");
    },
    Error,
    "encode-error: U+BF7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF7D");
    },
    Error,
    "encode-error: U+BF7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF7E");
    },
    Error,
    "encode-error: U+BF7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF7F");
    },
    Error,
    "encode-error: U+BF7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF80");
    },
    Error,
    "encode-error: U+BF80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF81");
    },
    Error,
    "encode-error: U+BF81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF82");
    },
    Error,
    "encode-error: U+BF82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF83");
    },
    Error,
    "encode-error: U+BF83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF84");
    },
    Error,
    "encode-error: U+BF84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF85");
    },
    Error,
    "encode-error: U+BF85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF86");
    },
    Error,
    "encode-error: U+BF86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF87");
    },
    Error,
    "encode-error: U+BF87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF88");
    },
    Error,
    "encode-error: U+BF88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF89");
    },
    Error,
    "encode-error: U+BF89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF8A");
    },
    Error,
    "encode-error: U+BF8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF8B");
    },
    Error,
    "encode-error: U+BF8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF8C");
    },
    Error,
    "encode-error: U+BF8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF8D");
    },
    Error,
    "encode-error: U+BF8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF8E");
    },
    Error,
    "encode-error: U+BF8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF8F");
    },
    Error,
    "encode-error: U+BF8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF90");
    },
    Error,
    "encode-error: U+BF90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF91");
    },
    Error,
    "encode-error: U+BF91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF92");
    },
    Error,
    "encode-error: U+BF92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF93");
    },
    Error,
    "encode-error: U+BF93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF94");
    },
    Error,
    "encode-error: U+BF94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF95");
    },
    Error,
    "encode-error: U+BF95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF96");
    },
    Error,
    "encode-error: U+BF96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF97");
    },
    Error,
    "encode-error: U+BF97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF98");
    },
    Error,
    "encode-error: U+BF98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF99");
    },
    Error,
    "encode-error: U+BF99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF9A");
    },
    Error,
    "encode-error: U+BF9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF9B");
    },
    Error,
    "encode-error: U+BF9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF9C");
    },
    Error,
    "encode-error: U+BF9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF9D");
    },
    Error,
    "encode-error: U+BF9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF9E");
    },
    Error,
    "encode-error: U+BF9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBF9F");
    },
    Error,
    "encode-error: U+BF9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFA0");
    },
    Error,
    "encode-error: U+BFA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFA1");
    },
    Error,
    "encode-error: U+BFA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFA2");
    },
    Error,
    "encode-error: U+BFA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFA3");
    },
    Error,
    "encode-error: U+BFA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFA4");
    },
    Error,
    "encode-error: U+BFA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFA5");
    },
    Error,
    "encode-error: U+BFA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFA6");
    },
    Error,
    "encode-error: U+BFA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFA7");
    },
    Error,
    "encode-error: U+BFA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFA8");
    },
    Error,
    "encode-error: U+BFA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFA9");
    },
    Error,
    "encode-error: U+BFA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFAA");
    },
    Error,
    "encode-error: U+BFAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFAB");
    },
    Error,
    "encode-error: U+BFAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFAC");
    },
    Error,
    "encode-error: U+BFAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFAD");
    },
    Error,
    "encode-error: U+BFAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFAE");
    },
    Error,
    "encode-error: U+BFAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFAF");
    },
    Error,
    "encode-error: U+BFAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFB0");
    },
    Error,
    "encode-error: U+BFB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFB1");
    },
    Error,
    "encode-error: U+BFB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFB2");
    },
    Error,
    "encode-error: U+BFB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFB3");
    },
    Error,
    "encode-error: U+BFB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFB4");
    },
    Error,
    "encode-error: U+BFB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFB5");
    },
    Error,
    "encode-error: U+BFB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFB6");
    },
    Error,
    "encode-error: U+BFB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFB7");
    },
    Error,
    "encode-error: U+BFB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFB8");
    },
    Error,
    "encode-error: U+BFB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFB9");
    },
    Error,
    "encode-error: U+BFB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFBA");
    },
    Error,
    "encode-error: U+BFBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFBB");
    },
    Error,
    "encode-error: U+BFBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFBC");
    },
    Error,
    "encode-error: U+BFBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFBD");
    },
    Error,
    "encode-error: U+BFBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFBE");
    },
    Error,
    "encode-error: U+BFBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFBF");
    },
    Error,
    "encode-error: U+BFBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFC0");
    },
    Error,
    "encode-error: U+BFC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFC1");
    },
    Error,
    "encode-error: U+BFC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFC2");
    },
    Error,
    "encode-error: U+BFC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFC3");
    },
    Error,
    "encode-error: U+BFC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFC4");
    },
    Error,
    "encode-error: U+BFC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFC5");
    },
    Error,
    "encode-error: U+BFC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFC6");
    },
    Error,
    "encode-error: U+BFC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFC7");
    },
    Error,
    "encode-error: U+BFC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFC8");
    },
    Error,
    "encode-error: U+BFC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFC9");
    },
    Error,
    "encode-error: U+BFC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFCA");
    },
    Error,
    "encode-error: U+BFCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFCB");
    },
    Error,
    "encode-error: U+BFCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFCC");
    },
    Error,
    "encode-error: U+BFCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFCD");
    },
    Error,
    "encode-error: U+BFCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFCE");
    },
    Error,
    "encode-error: U+BFCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFCF");
    },
    Error,
    "encode-error: U+BFCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFD0");
    },
    Error,
    "encode-error: U+BFD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFD1");
    },
    Error,
    "encode-error: U+BFD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFD2");
    },
    Error,
    "encode-error: U+BFD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFD3");
    },
    Error,
    "encode-error: U+BFD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFD4");
    },
    Error,
    "encode-error: U+BFD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFD5");
    },
    Error,
    "encode-error: U+BFD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFD6");
    },
    Error,
    "encode-error: U+BFD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFD7");
    },
    Error,
    "encode-error: U+BFD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFD8");
    },
    Error,
    "encode-error: U+BFD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFD9");
    },
    Error,
    "encode-error: U+BFD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFDA");
    },
    Error,
    "encode-error: U+BFDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFDB");
    },
    Error,
    "encode-error: U+BFDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFDC");
    },
    Error,
    "encode-error: U+BFDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFDD");
    },
    Error,
    "encode-error: U+BFDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFDE");
    },
    Error,
    "encode-error: U+BFDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFDF");
    },
    Error,
    "encode-error: U+BFDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFE0");
    },
    Error,
    "encode-error: U+BFE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFE1");
    },
    Error,
    "encode-error: U+BFE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFE2");
    },
    Error,
    "encode-error: U+BFE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFE3");
    },
    Error,
    "encode-error: U+BFE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFE4");
    },
    Error,
    "encode-error: U+BFE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFE5");
    },
    Error,
    "encode-error: U+BFE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFE6");
    },
    Error,
    "encode-error: U+BFE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFE7");
    },
    Error,
    "encode-error: U+BFE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFE8");
    },
    Error,
    "encode-error: U+BFE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFE9");
    },
    Error,
    "encode-error: U+BFE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFEA");
    },
    Error,
    "encode-error: U+BFEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFEB");
    },
    Error,
    "encode-error: U+BFEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFEC");
    },
    Error,
    "encode-error: U+BFEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFED");
    },
    Error,
    "encode-error: U+BFED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFEE");
    },
    Error,
    "encode-error: U+BFEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFEF");
    },
    Error,
    "encode-error: U+BFEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFF0");
    },
    Error,
    "encode-error: U+BFF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFF1");
    },
    Error,
    "encode-error: U+BFF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFF2");
    },
    Error,
    "encode-error: U+BFF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFF3");
    },
    Error,
    "encode-error: U+BFF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFF4");
    },
    Error,
    "encode-error: U+BFF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFF5");
    },
    Error,
    "encode-error: U+BFF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFF6");
    },
    Error,
    "encode-error: U+BFF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFF7");
    },
    Error,
    "encode-error: U+BFF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFF8");
    },
    Error,
    "encode-error: U+BFF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFF9");
    },
    Error,
    "encode-error: U+BFF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFFA");
    },
    Error,
    "encode-error: U+BFFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFFB");
    },
    Error,
    "encode-error: U+BFFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFFC");
    },
    Error,
    "encode-error: U+BFFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFFD");
    },
    Error,
    "encode-error: U+BFFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFFE");
    },
    Error,
    "encode-error: U+BFFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uBFFF");
    },
    Error,
    "encode-error: U+BFFF",
  );
});
