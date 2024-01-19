import { assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+E000-U+EFFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  assertThrows(
    () => {
      ms932Encoder.encode("\uE000");
    },
    Error,
    "encode-error: U+E000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE001");
    },
    Error,
    "encode-error: U+E001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE002");
    },
    Error,
    "encode-error: U+E002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE003");
    },
    Error,
    "encode-error: U+E003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE004");
    },
    Error,
    "encode-error: U+E004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE005");
    },
    Error,
    "encode-error: U+E005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE006");
    },
    Error,
    "encode-error: U+E006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE007");
    },
    Error,
    "encode-error: U+E007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE008");
    },
    Error,
    "encode-error: U+E008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE009");
    },
    Error,
    "encode-error: U+E009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE00A");
    },
    Error,
    "encode-error: U+E00A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE00B");
    },
    Error,
    "encode-error: U+E00B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE00C");
    },
    Error,
    "encode-error: U+E00C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE00D");
    },
    Error,
    "encode-error: U+E00D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE00E");
    },
    Error,
    "encode-error: U+E00E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE00F");
    },
    Error,
    "encode-error: U+E00F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE010");
    },
    Error,
    "encode-error: U+E010",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE011");
    },
    Error,
    "encode-error: U+E011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE012");
    },
    Error,
    "encode-error: U+E012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE013");
    },
    Error,
    "encode-error: U+E013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE014");
    },
    Error,
    "encode-error: U+E014",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE015");
    },
    Error,
    "encode-error: U+E015",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE016");
    },
    Error,
    "encode-error: U+E016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE017");
    },
    Error,
    "encode-error: U+E017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE018");
    },
    Error,
    "encode-error: U+E018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE019");
    },
    Error,
    "encode-error: U+E019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE01A");
    },
    Error,
    "encode-error: U+E01A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE01B");
    },
    Error,
    "encode-error: U+E01B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE01C");
    },
    Error,
    "encode-error: U+E01C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE01D");
    },
    Error,
    "encode-error: U+E01D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE01E");
    },
    Error,
    "encode-error: U+E01E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE01F");
    },
    Error,
    "encode-error: U+E01F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE020");
    },
    Error,
    "encode-error: U+E020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE021");
    },
    Error,
    "encode-error: U+E021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE022");
    },
    Error,
    "encode-error: U+E022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE023");
    },
    Error,
    "encode-error: U+E023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE024");
    },
    Error,
    "encode-error: U+E024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE025");
    },
    Error,
    "encode-error: U+E025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE026");
    },
    Error,
    "encode-error: U+E026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE027");
    },
    Error,
    "encode-error: U+E027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE028");
    },
    Error,
    "encode-error: U+E028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE029");
    },
    Error,
    "encode-error: U+E029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE02A");
    },
    Error,
    "encode-error: U+E02A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE02B");
    },
    Error,
    "encode-error: U+E02B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE02C");
    },
    Error,
    "encode-error: U+E02C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE02D");
    },
    Error,
    "encode-error: U+E02D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE02E");
    },
    Error,
    "encode-error: U+E02E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE02F");
    },
    Error,
    "encode-error: U+E02F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE030");
    },
    Error,
    "encode-error: U+E030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE031");
    },
    Error,
    "encode-error: U+E031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE032");
    },
    Error,
    "encode-error: U+E032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE033");
    },
    Error,
    "encode-error: U+E033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE034");
    },
    Error,
    "encode-error: U+E034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE035");
    },
    Error,
    "encode-error: U+E035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE036");
    },
    Error,
    "encode-error: U+E036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE037");
    },
    Error,
    "encode-error: U+E037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE038");
    },
    Error,
    "encode-error: U+E038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE039");
    },
    Error,
    "encode-error: U+E039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE03A");
    },
    Error,
    "encode-error: U+E03A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE03B");
    },
    Error,
    "encode-error: U+E03B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE03C");
    },
    Error,
    "encode-error: U+E03C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE03D");
    },
    Error,
    "encode-error: U+E03D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE03E");
    },
    Error,
    "encode-error: U+E03E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE03F");
    },
    Error,
    "encode-error: U+E03F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE040");
    },
    Error,
    "encode-error: U+E040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE041");
    },
    Error,
    "encode-error: U+E041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE042");
    },
    Error,
    "encode-error: U+E042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE043");
    },
    Error,
    "encode-error: U+E043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE044");
    },
    Error,
    "encode-error: U+E044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE045");
    },
    Error,
    "encode-error: U+E045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE046");
    },
    Error,
    "encode-error: U+E046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE047");
    },
    Error,
    "encode-error: U+E047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE048");
    },
    Error,
    "encode-error: U+E048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE049");
    },
    Error,
    "encode-error: U+E049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE04A");
    },
    Error,
    "encode-error: U+E04A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE04B");
    },
    Error,
    "encode-error: U+E04B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE04C");
    },
    Error,
    "encode-error: U+E04C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE04D");
    },
    Error,
    "encode-error: U+E04D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE04E");
    },
    Error,
    "encode-error: U+E04E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE04F");
    },
    Error,
    "encode-error: U+E04F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE050");
    },
    Error,
    "encode-error: U+E050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE051");
    },
    Error,
    "encode-error: U+E051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE052");
    },
    Error,
    "encode-error: U+E052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE053");
    },
    Error,
    "encode-error: U+E053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE054");
    },
    Error,
    "encode-error: U+E054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE055");
    },
    Error,
    "encode-error: U+E055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE056");
    },
    Error,
    "encode-error: U+E056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE057");
    },
    Error,
    "encode-error: U+E057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE058");
    },
    Error,
    "encode-error: U+E058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE059");
    },
    Error,
    "encode-error: U+E059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE05A");
    },
    Error,
    "encode-error: U+E05A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE05B");
    },
    Error,
    "encode-error: U+E05B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE05C");
    },
    Error,
    "encode-error: U+E05C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE05D");
    },
    Error,
    "encode-error: U+E05D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE05E");
    },
    Error,
    "encode-error: U+E05E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE05F");
    },
    Error,
    "encode-error: U+E05F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE060");
    },
    Error,
    "encode-error: U+E060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE061");
    },
    Error,
    "encode-error: U+E061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE062");
    },
    Error,
    "encode-error: U+E062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE063");
    },
    Error,
    "encode-error: U+E063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE064");
    },
    Error,
    "encode-error: U+E064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE065");
    },
    Error,
    "encode-error: U+E065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE066");
    },
    Error,
    "encode-error: U+E066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE067");
    },
    Error,
    "encode-error: U+E067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE068");
    },
    Error,
    "encode-error: U+E068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE069");
    },
    Error,
    "encode-error: U+E069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE06A");
    },
    Error,
    "encode-error: U+E06A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE06B");
    },
    Error,
    "encode-error: U+E06B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE06C");
    },
    Error,
    "encode-error: U+E06C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE06D");
    },
    Error,
    "encode-error: U+E06D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE06E");
    },
    Error,
    "encode-error: U+E06E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE06F");
    },
    Error,
    "encode-error: U+E06F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE070");
    },
    Error,
    "encode-error: U+E070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE071");
    },
    Error,
    "encode-error: U+E071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE072");
    },
    Error,
    "encode-error: U+E072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE073");
    },
    Error,
    "encode-error: U+E073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE074");
    },
    Error,
    "encode-error: U+E074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE075");
    },
    Error,
    "encode-error: U+E075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE076");
    },
    Error,
    "encode-error: U+E076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE077");
    },
    Error,
    "encode-error: U+E077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE078");
    },
    Error,
    "encode-error: U+E078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE079");
    },
    Error,
    "encode-error: U+E079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE07A");
    },
    Error,
    "encode-error: U+E07A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE07B");
    },
    Error,
    "encode-error: U+E07B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE07C");
    },
    Error,
    "encode-error: U+E07C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE07D");
    },
    Error,
    "encode-error: U+E07D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE07E");
    },
    Error,
    "encode-error: U+E07E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE07F");
    },
    Error,
    "encode-error: U+E07F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE080");
    },
    Error,
    "encode-error: U+E080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE081");
    },
    Error,
    "encode-error: U+E081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE082");
    },
    Error,
    "encode-error: U+E082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE083");
    },
    Error,
    "encode-error: U+E083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE084");
    },
    Error,
    "encode-error: U+E084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE085");
    },
    Error,
    "encode-error: U+E085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE086");
    },
    Error,
    "encode-error: U+E086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE087");
    },
    Error,
    "encode-error: U+E087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE088");
    },
    Error,
    "encode-error: U+E088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE089");
    },
    Error,
    "encode-error: U+E089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE08A");
    },
    Error,
    "encode-error: U+E08A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE08B");
    },
    Error,
    "encode-error: U+E08B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE08C");
    },
    Error,
    "encode-error: U+E08C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE08D");
    },
    Error,
    "encode-error: U+E08D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE08E");
    },
    Error,
    "encode-error: U+E08E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE08F");
    },
    Error,
    "encode-error: U+E08F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE090");
    },
    Error,
    "encode-error: U+E090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE091");
    },
    Error,
    "encode-error: U+E091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE092");
    },
    Error,
    "encode-error: U+E092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE093");
    },
    Error,
    "encode-error: U+E093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE094");
    },
    Error,
    "encode-error: U+E094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE095");
    },
    Error,
    "encode-error: U+E095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE096");
    },
    Error,
    "encode-error: U+E096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE097");
    },
    Error,
    "encode-error: U+E097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE098");
    },
    Error,
    "encode-error: U+E098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE099");
    },
    Error,
    "encode-error: U+E099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE09A");
    },
    Error,
    "encode-error: U+E09A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE09B");
    },
    Error,
    "encode-error: U+E09B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE09C");
    },
    Error,
    "encode-error: U+E09C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE09D");
    },
    Error,
    "encode-error: U+E09D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE09E");
    },
    Error,
    "encode-error: U+E09E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE09F");
    },
    Error,
    "encode-error: U+E09F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0A0");
    },
    Error,
    "encode-error: U+E0A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0A1");
    },
    Error,
    "encode-error: U+E0A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0A2");
    },
    Error,
    "encode-error: U+E0A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0A3");
    },
    Error,
    "encode-error: U+E0A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0A4");
    },
    Error,
    "encode-error: U+E0A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0A5");
    },
    Error,
    "encode-error: U+E0A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0A6");
    },
    Error,
    "encode-error: U+E0A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0A7");
    },
    Error,
    "encode-error: U+E0A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0A8");
    },
    Error,
    "encode-error: U+E0A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0A9");
    },
    Error,
    "encode-error: U+E0A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0AA");
    },
    Error,
    "encode-error: U+E0AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0AB");
    },
    Error,
    "encode-error: U+E0AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0AC");
    },
    Error,
    "encode-error: U+E0AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0AD");
    },
    Error,
    "encode-error: U+E0AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0AE");
    },
    Error,
    "encode-error: U+E0AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0AF");
    },
    Error,
    "encode-error: U+E0AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0B0");
    },
    Error,
    "encode-error: U+E0B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0B1");
    },
    Error,
    "encode-error: U+E0B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0B2");
    },
    Error,
    "encode-error: U+E0B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0B3");
    },
    Error,
    "encode-error: U+E0B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0B4");
    },
    Error,
    "encode-error: U+E0B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0B5");
    },
    Error,
    "encode-error: U+E0B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0B6");
    },
    Error,
    "encode-error: U+E0B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0B7");
    },
    Error,
    "encode-error: U+E0B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0B8");
    },
    Error,
    "encode-error: U+E0B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0B9");
    },
    Error,
    "encode-error: U+E0B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0BA");
    },
    Error,
    "encode-error: U+E0BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0BB");
    },
    Error,
    "encode-error: U+E0BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0BC");
    },
    Error,
    "encode-error: U+E0BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0BD");
    },
    Error,
    "encode-error: U+E0BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0BE");
    },
    Error,
    "encode-error: U+E0BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0BF");
    },
    Error,
    "encode-error: U+E0BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0C0");
    },
    Error,
    "encode-error: U+E0C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0C1");
    },
    Error,
    "encode-error: U+E0C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0C2");
    },
    Error,
    "encode-error: U+E0C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0C3");
    },
    Error,
    "encode-error: U+E0C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0C4");
    },
    Error,
    "encode-error: U+E0C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0C5");
    },
    Error,
    "encode-error: U+E0C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0C6");
    },
    Error,
    "encode-error: U+E0C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0C7");
    },
    Error,
    "encode-error: U+E0C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0C8");
    },
    Error,
    "encode-error: U+E0C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0C9");
    },
    Error,
    "encode-error: U+E0C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0CA");
    },
    Error,
    "encode-error: U+E0CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0CB");
    },
    Error,
    "encode-error: U+E0CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0CC");
    },
    Error,
    "encode-error: U+E0CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0CD");
    },
    Error,
    "encode-error: U+E0CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0CE");
    },
    Error,
    "encode-error: U+E0CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0CF");
    },
    Error,
    "encode-error: U+E0CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0D0");
    },
    Error,
    "encode-error: U+E0D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0D1");
    },
    Error,
    "encode-error: U+E0D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0D2");
    },
    Error,
    "encode-error: U+E0D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0D3");
    },
    Error,
    "encode-error: U+E0D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0D4");
    },
    Error,
    "encode-error: U+E0D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0D5");
    },
    Error,
    "encode-error: U+E0D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0D6");
    },
    Error,
    "encode-error: U+E0D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0D7");
    },
    Error,
    "encode-error: U+E0D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0D8");
    },
    Error,
    "encode-error: U+E0D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0D9");
    },
    Error,
    "encode-error: U+E0D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0DA");
    },
    Error,
    "encode-error: U+E0DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0DB");
    },
    Error,
    "encode-error: U+E0DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0DC");
    },
    Error,
    "encode-error: U+E0DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0DD");
    },
    Error,
    "encode-error: U+E0DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0DE");
    },
    Error,
    "encode-error: U+E0DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0DF");
    },
    Error,
    "encode-error: U+E0DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0E0");
    },
    Error,
    "encode-error: U+E0E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0E1");
    },
    Error,
    "encode-error: U+E0E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0E2");
    },
    Error,
    "encode-error: U+E0E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0E3");
    },
    Error,
    "encode-error: U+E0E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0E4");
    },
    Error,
    "encode-error: U+E0E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0E5");
    },
    Error,
    "encode-error: U+E0E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0E6");
    },
    Error,
    "encode-error: U+E0E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0E7");
    },
    Error,
    "encode-error: U+E0E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0E8");
    },
    Error,
    "encode-error: U+E0E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0E9");
    },
    Error,
    "encode-error: U+E0E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0EA");
    },
    Error,
    "encode-error: U+E0EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0EB");
    },
    Error,
    "encode-error: U+E0EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0EC");
    },
    Error,
    "encode-error: U+E0EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0ED");
    },
    Error,
    "encode-error: U+E0ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0EE");
    },
    Error,
    "encode-error: U+E0EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0EF");
    },
    Error,
    "encode-error: U+E0EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0F0");
    },
    Error,
    "encode-error: U+E0F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0F1");
    },
    Error,
    "encode-error: U+E0F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0F2");
    },
    Error,
    "encode-error: U+E0F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0F3");
    },
    Error,
    "encode-error: U+E0F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0F4");
    },
    Error,
    "encode-error: U+E0F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0F5");
    },
    Error,
    "encode-error: U+E0F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0F6");
    },
    Error,
    "encode-error: U+E0F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0F7");
    },
    Error,
    "encode-error: U+E0F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0F8");
    },
    Error,
    "encode-error: U+E0F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0F9");
    },
    Error,
    "encode-error: U+E0F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0FA");
    },
    Error,
    "encode-error: U+E0FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0FB");
    },
    Error,
    "encode-error: U+E0FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0FC");
    },
    Error,
    "encode-error: U+E0FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0FD");
    },
    Error,
    "encode-error: U+E0FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0FE");
    },
    Error,
    "encode-error: U+E0FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE0FF");
    },
    Error,
    "encode-error: U+E0FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE100");
    },
    Error,
    "encode-error: U+E100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE101");
    },
    Error,
    "encode-error: U+E101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE102");
    },
    Error,
    "encode-error: U+E102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE103");
    },
    Error,
    "encode-error: U+E103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE104");
    },
    Error,
    "encode-error: U+E104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE105");
    },
    Error,
    "encode-error: U+E105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE106");
    },
    Error,
    "encode-error: U+E106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE107");
    },
    Error,
    "encode-error: U+E107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE108");
    },
    Error,
    "encode-error: U+E108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE109");
    },
    Error,
    "encode-error: U+E109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE10A");
    },
    Error,
    "encode-error: U+E10A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE10B");
    },
    Error,
    "encode-error: U+E10B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE10C");
    },
    Error,
    "encode-error: U+E10C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE10D");
    },
    Error,
    "encode-error: U+E10D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE10E");
    },
    Error,
    "encode-error: U+E10E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE10F");
    },
    Error,
    "encode-error: U+E10F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE110");
    },
    Error,
    "encode-error: U+E110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE111");
    },
    Error,
    "encode-error: U+E111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE112");
    },
    Error,
    "encode-error: U+E112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE113");
    },
    Error,
    "encode-error: U+E113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE114");
    },
    Error,
    "encode-error: U+E114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE115");
    },
    Error,
    "encode-error: U+E115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE116");
    },
    Error,
    "encode-error: U+E116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE117");
    },
    Error,
    "encode-error: U+E117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE118");
    },
    Error,
    "encode-error: U+E118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE119");
    },
    Error,
    "encode-error: U+E119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE11A");
    },
    Error,
    "encode-error: U+E11A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE11B");
    },
    Error,
    "encode-error: U+E11B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE11C");
    },
    Error,
    "encode-error: U+E11C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE11D");
    },
    Error,
    "encode-error: U+E11D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE11E");
    },
    Error,
    "encode-error: U+E11E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE11F");
    },
    Error,
    "encode-error: U+E11F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE120");
    },
    Error,
    "encode-error: U+E120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE121");
    },
    Error,
    "encode-error: U+E121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE122");
    },
    Error,
    "encode-error: U+E122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE123");
    },
    Error,
    "encode-error: U+E123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE124");
    },
    Error,
    "encode-error: U+E124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE125");
    },
    Error,
    "encode-error: U+E125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE126");
    },
    Error,
    "encode-error: U+E126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE127");
    },
    Error,
    "encode-error: U+E127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE128");
    },
    Error,
    "encode-error: U+E128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE129");
    },
    Error,
    "encode-error: U+E129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE12A");
    },
    Error,
    "encode-error: U+E12A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE12B");
    },
    Error,
    "encode-error: U+E12B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE12C");
    },
    Error,
    "encode-error: U+E12C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE12D");
    },
    Error,
    "encode-error: U+E12D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE12E");
    },
    Error,
    "encode-error: U+E12E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE12F");
    },
    Error,
    "encode-error: U+E12F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE130");
    },
    Error,
    "encode-error: U+E130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE131");
    },
    Error,
    "encode-error: U+E131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE132");
    },
    Error,
    "encode-error: U+E132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE133");
    },
    Error,
    "encode-error: U+E133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE134");
    },
    Error,
    "encode-error: U+E134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE135");
    },
    Error,
    "encode-error: U+E135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE136");
    },
    Error,
    "encode-error: U+E136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE137");
    },
    Error,
    "encode-error: U+E137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE138");
    },
    Error,
    "encode-error: U+E138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE139");
    },
    Error,
    "encode-error: U+E139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE13A");
    },
    Error,
    "encode-error: U+E13A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE13B");
    },
    Error,
    "encode-error: U+E13B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE13C");
    },
    Error,
    "encode-error: U+E13C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE13D");
    },
    Error,
    "encode-error: U+E13D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE13E");
    },
    Error,
    "encode-error: U+E13E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE13F");
    },
    Error,
    "encode-error: U+E13F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE140");
    },
    Error,
    "encode-error: U+E140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE141");
    },
    Error,
    "encode-error: U+E141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE142");
    },
    Error,
    "encode-error: U+E142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE143");
    },
    Error,
    "encode-error: U+E143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE144");
    },
    Error,
    "encode-error: U+E144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE145");
    },
    Error,
    "encode-error: U+E145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE146");
    },
    Error,
    "encode-error: U+E146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE147");
    },
    Error,
    "encode-error: U+E147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE148");
    },
    Error,
    "encode-error: U+E148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE149");
    },
    Error,
    "encode-error: U+E149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE14A");
    },
    Error,
    "encode-error: U+E14A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE14B");
    },
    Error,
    "encode-error: U+E14B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE14C");
    },
    Error,
    "encode-error: U+E14C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE14D");
    },
    Error,
    "encode-error: U+E14D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE14E");
    },
    Error,
    "encode-error: U+E14E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE14F");
    },
    Error,
    "encode-error: U+E14F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE150");
    },
    Error,
    "encode-error: U+E150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE151");
    },
    Error,
    "encode-error: U+E151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE152");
    },
    Error,
    "encode-error: U+E152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE153");
    },
    Error,
    "encode-error: U+E153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE154");
    },
    Error,
    "encode-error: U+E154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE155");
    },
    Error,
    "encode-error: U+E155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE156");
    },
    Error,
    "encode-error: U+E156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE157");
    },
    Error,
    "encode-error: U+E157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE158");
    },
    Error,
    "encode-error: U+E158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE159");
    },
    Error,
    "encode-error: U+E159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE15A");
    },
    Error,
    "encode-error: U+E15A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE15B");
    },
    Error,
    "encode-error: U+E15B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE15C");
    },
    Error,
    "encode-error: U+E15C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE15D");
    },
    Error,
    "encode-error: U+E15D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE15E");
    },
    Error,
    "encode-error: U+E15E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE15F");
    },
    Error,
    "encode-error: U+E15F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE160");
    },
    Error,
    "encode-error: U+E160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE161");
    },
    Error,
    "encode-error: U+E161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE162");
    },
    Error,
    "encode-error: U+E162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE163");
    },
    Error,
    "encode-error: U+E163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE164");
    },
    Error,
    "encode-error: U+E164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE165");
    },
    Error,
    "encode-error: U+E165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE166");
    },
    Error,
    "encode-error: U+E166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE167");
    },
    Error,
    "encode-error: U+E167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE168");
    },
    Error,
    "encode-error: U+E168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE169");
    },
    Error,
    "encode-error: U+E169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE16A");
    },
    Error,
    "encode-error: U+E16A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE16B");
    },
    Error,
    "encode-error: U+E16B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE16C");
    },
    Error,
    "encode-error: U+E16C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE16D");
    },
    Error,
    "encode-error: U+E16D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE16E");
    },
    Error,
    "encode-error: U+E16E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE16F");
    },
    Error,
    "encode-error: U+E16F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE170");
    },
    Error,
    "encode-error: U+E170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE171");
    },
    Error,
    "encode-error: U+E171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE172");
    },
    Error,
    "encode-error: U+E172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE173");
    },
    Error,
    "encode-error: U+E173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE174");
    },
    Error,
    "encode-error: U+E174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE175");
    },
    Error,
    "encode-error: U+E175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE176");
    },
    Error,
    "encode-error: U+E176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE177");
    },
    Error,
    "encode-error: U+E177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE178");
    },
    Error,
    "encode-error: U+E178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE179");
    },
    Error,
    "encode-error: U+E179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE17A");
    },
    Error,
    "encode-error: U+E17A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE17B");
    },
    Error,
    "encode-error: U+E17B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE17C");
    },
    Error,
    "encode-error: U+E17C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE17D");
    },
    Error,
    "encode-error: U+E17D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE17E");
    },
    Error,
    "encode-error: U+E17E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE17F");
    },
    Error,
    "encode-error: U+E17F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE180");
    },
    Error,
    "encode-error: U+E180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE181");
    },
    Error,
    "encode-error: U+E181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE182");
    },
    Error,
    "encode-error: U+E182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE183");
    },
    Error,
    "encode-error: U+E183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE184");
    },
    Error,
    "encode-error: U+E184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE185");
    },
    Error,
    "encode-error: U+E185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE186");
    },
    Error,
    "encode-error: U+E186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE187");
    },
    Error,
    "encode-error: U+E187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE188");
    },
    Error,
    "encode-error: U+E188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE189");
    },
    Error,
    "encode-error: U+E189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE18A");
    },
    Error,
    "encode-error: U+E18A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE18B");
    },
    Error,
    "encode-error: U+E18B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE18C");
    },
    Error,
    "encode-error: U+E18C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE18D");
    },
    Error,
    "encode-error: U+E18D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE18E");
    },
    Error,
    "encode-error: U+E18E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE18F");
    },
    Error,
    "encode-error: U+E18F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE190");
    },
    Error,
    "encode-error: U+E190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE191");
    },
    Error,
    "encode-error: U+E191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE192");
    },
    Error,
    "encode-error: U+E192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE193");
    },
    Error,
    "encode-error: U+E193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE194");
    },
    Error,
    "encode-error: U+E194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE195");
    },
    Error,
    "encode-error: U+E195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE196");
    },
    Error,
    "encode-error: U+E196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE197");
    },
    Error,
    "encode-error: U+E197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE198");
    },
    Error,
    "encode-error: U+E198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE199");
    },
    Error,
    "encode-error: U+E199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE19A");
    },
    Error,
    "encode-error: U+E19A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE19B");
    },
    Error,
    "encode-error: U+E19B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE19C");
    },
    Error,
    "encode-error: U+E19C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE19D");
    },
    Error,
    "encode-error: U+E19D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE19E");
    },
    Error,
    "encode-error: U+E19E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE19F");
    },
    Error,
    "encode-error: U+E19F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1A0");
    },
    Error,
    "encode-error: U+E1A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1A1");
    },
    Error,
    "encode-error: U+E1A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1A2");
    },
    Error,
    "encode-error: U+E1A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1A3");
    },
    Error,
    "encode-error: U+E1A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1A4");
    },
    Error,
    "encode-error: U+E1A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1A5");
    },
    Error,
    "encode-error: U+E1A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1A6");
    },
    Error,
    "encode-error: U+E1A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1A7");
    },
    Error,
    "encode-error: U+E1A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1A8");
    },
    Error,
    "encode-error: U+E1A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1A9");
    },
    Error,
    "encode-error: U+E1A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1AA");
    },
    Error,
    "encode-error: U+E1AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1AB");
    },
    Error,
    "encode-error: U+E1AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1AC");
    },
    Error,
    "encode-error: U+E1AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1AD");
    },
    Error,
    "encode-error: U+E1AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1AE");
    },
    Error,
    "encode-error: U+E1AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1AF");
    },
    Error,
    "encode-error: U+E1AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1B0");
    },
    Error,
    "encode-error: U+E1B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1B1");
    },
    Error,
    "encode-error: U+E1B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1B2");
    },
    Error,
    "encode-error: U+E1B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1B3");
    },
    Error,
    "encode-error: U+E1B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1B4");
    },
    Error,
    "encode-error: U+E1B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1B5");
    },
    Error,
    "encode-error: U+E1B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1B6");
    },
    Error,
    "encode-error: U+E1B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1B7");
    },
    Error,
    "encode-error: U+E1B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1B8");
    },
    Error,
    "encode-error: U+E1B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1B9");
    },
    Error,
    "encode-error: U+E1B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1BA");
    },
    Error,
    "encode-error: U+E1BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1BB");
    },
    Error,
    "encode-error: U+E1BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1BC");
    },
    Error,
    "encode-error: U+E1BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1BD");
    },
    Error,
    "encode-error: U+E1BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1BE");
    },
    Error,
    "encode-error: U+E1BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1BF");
    },
    Error,
    "encode-error: U+E1BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1C0");
    },
    Error,
    "encode-error: U+E1C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1C1");
    },
    Error,
    "encode-error: U+E1C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1C2");
    },
    Error,
    "encode-error: U+E1C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1C3");
    },
    Error,
    "encode-error: U+E1C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1C4");
    },
    Error,
    "encode-error: U+E1C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1C5");
    },
    Error,
    "encode-error: U+E1C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1C6");
    },
    Error,
    "encode-error: U+E1C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1C7");
    },
    Error,
    "encode-error: U+E1C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1C8");
    },
    Error,
    "encode-error: U+E1C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1C9");
    },
    Error,
    "encode-error: U+E1C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1CA");
    },
    Error,
    "encode-error: U+E1CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1CB");
    },
    Error,
    "encode-error: U+E1CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1CC");
    },
    Error,
    "encode-error: U+E1CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1CD");
    },
    Error,
    "encode-error: U+E1CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1CE");
    },
    Error,
    "encode-error: U+E1CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1CF");
    },
    Error,
    "encode-error: U+E1CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1D0");
    },
    Error,
    "encode-error: U+E1D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1D1");
    },
    Error,
    "encode-error: U+E1D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1D2");
    },
    Error,
    "encode-error: U+E1D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1D3");
    },
    Error,
    "encode-error: U+E1D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1D4");
    },
    Error,
    "encode-error: U+E1D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1D5");
    },
    Error,
    "encode-error: U+E1D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1D6");
    },
    Error,
    "encode-error: U+E1D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1D7");
    },
    Error,
    "encode-error: U+E1D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1D8");
    },
    Error,
    "encode-error: U+E1D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1D9");
    },
    Error,
    "encode-error: U+E1D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1DA");
    },
    Error,
    "encode-error: U+E1DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1DB");
    },
    Error,
    "encode-error: U+E1DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1DC");
    },
    Error,
    "encode-error: U+E1DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1DD");
    },
    Error,
    "encode-error: U+E1DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1DE");
    },
    Error,
    "encode-error: U+E1DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1DF");
    },
    Error,
    "encode-error: U+E1DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1E0");
    },
    Error,
    "encode-error: U+E1E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1E1");
    },
    Error,
    "encode-error: U+E1E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1E2");
    },
    Error,
    "encode-error: U+E1E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1E3");
    },
    Error,
    "encode-error: U+E1E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1E4");
    },
    Error,
    "encode-error: U+E1E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1E5");
    },
    Error,
    "encode-error: U+E1E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1E6");
    },
    Error,
    "encode-error: U+E1E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1E7");
    },
    Error,
    "encode-error: U+E1E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1E8");
    },
    Error,
    "encode-error: U+E1E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1E9");
    },
    Error,
    "encode-error: U+E1E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1EA");
    },
    Error,
    "encode-error: U+E1EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1EB");
    },
    Error,
    "encode-error: U+E1EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1EC");
    },
    Error,
    "encode-error: U+E1EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1ED");
    },
    Error,
    "encode-error: U+E1ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1EE");
    },
    Error,
    "encode-error: U+E1EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1EF");
    },
    Error,
    "encode-error: U+E1EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1F0");
    },
    Error,
    "encode-error: U+E1F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1F1");
    },
    Error,
    "encode-error: U+E1F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1F2");
    },
    Error,
    "encode-error: U+E1F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1F3");
    },
    Error,
    "encode-error: U+E1F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1F4");
    },
    Error,
    "encode-error: U+E1F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1F5");
    },
    Error,
    "encode-error: U+E1F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1F6");
    },
    Error,
    "encode-error: U+E1F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1F7");
    },
    Error,
    "encode-error: U+E1F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1F8");
    },
    Error,
    "encode-error: U+E1F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1F9");
    },
    Error,
    "encode-error: U+E1F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1FA");
    },
    Error,
    "encode-error: U+E1FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1FB");
    },
    Error,
    "encode-error: U+E1FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1FC");
    },
    Error,
    "encode-error: U+E1FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1FD");
    },
    Error,
    "encode-error: U+E1FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1FE");
    },
    Error,
    "encode-error: U+E1FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE1FF");
    },
    Error,
    "encode-error: U+E1FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE200");
    },
    Error,
    "encode-error: U+E200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE201");
    },
    Error,
    "encode-error: U+E201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE202");
    },
    Error,
    "encode-error: U+E202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE203");
    },
    Error,
    "encode-error: U+E203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE204");
    },
    Error,
    "encode-error: U+E204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE205");
    },
    Error,
    "encode-error: U+E205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE206");
    },
    Error,
    "encode-error: U+E206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE207");
    },
    Error,
    "encode-error: U+E207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE208");
    },
    Error,
    "encode-error: U+E208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE209");
    },
    Error,
    "encode-error: U+E209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE20A");
    },
    Error,
    "encode-error: U+E20A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE20B");
    },
    Error,
    "encode-error: U+E20B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE20C");
    },
    Error,
    "encode-error: U+E20C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE20D");
    },
    Error,
    "encode-error: U+E20D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE20E");
    },
    Error,
    "encode-error: U+E20E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE20F");
    },
    Error,
    "encode-error: U+E20F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE210");
    },
    Error,
    "encode-error: U+E210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE211");
    },
    Error,
    "encode-error: U+E211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE212");
    },
    Error,
    "encode-error: U+E212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE213");
    },
    Error,
    "encode-error: U+E213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE214");
    },
    Error,
    "encode-error: U+E214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE215");
    },
    Error,
    "encode-error: U+E215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE216");
    },
    Error,
    "encode-error: U+E216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE217");
    },
    Error,
    "encode-error: U+E217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE218");
    },
    Error,
    "encode-error: U+E218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE219");
    },
    Error,
    "encode-error: U+E219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE21A");
    },
    Error,
    "encode-error: U+E21A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE21B");
    },
    Error,
    "encode-error: U+E21B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE21C");
    },
    Error,
    "encode-error: U+E21C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE21D");
    },
    Error,
    "encode-error: U+E21D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE21E");
    },
    Error,
    "encode-error: U+E21E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE21F");
    },
    Error,
    "encode-error: U+E21F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE220");
    },
    Error,
    "encode-error: U+E220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE221");
    },
    Error,
    "encode-error: U+E221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE222");
    },
    Error,
    "encode-error: U+E222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE223");
    },
    Error,
    "encode-error: U+E223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE224");
    },
    Error,
    "encode-error: U+E224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE225");
    },
    Error,
    "encode-error: U+E225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE226");
    },
    Error,
    "encode-error: U+E226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE227");
    },
    Error,
    "encode-error: U+E227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE228");
    },
    Error,
    "encode-error: U+E228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE229");
    },
    Error,
    "encode-error: U+E229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE22A");
    },
    Error,
    "encode-error: U+E22A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE22B");
    },
    Error,
    "encode-error: U+E22B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE22C");
    },
    Error,
    "encode-error: U+E22C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE22D");
    },
    Error,
    "encode-error: U+E22D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE22E");
    },
    Error,
    "encode-error: U+E22E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE22F");
    },
    Error,
    "encode-error: U+E22F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE230");
    },
    Error,
    "encode-error: U+E230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE231");
    },
    Error,
    "encode-error: U+E231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE232");
    },
    Error,
    "encode-error: U+E232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE233");
    },
    Error,
    "encode-error: U+E233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE234");
    },
    Error,
    "encode-error: U+E234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE235");
    },
    Error,
    "encode-error: U+E235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE236");
    },
    Error,
    "encode-error: U+E236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE237");
    },
    Error,
    "encode-error: U+E237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE238");
    },
    Error,
    "encode-error: U+E238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE239");
    },
    Error,
    "encode-error: U+E239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE23A");
    },
    Error,
    "encode-error: U+E23A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE23B");
    },
    Error,
    "encode-error: U+E23B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE23C");
    },
    Error,
    "encode-error: U+E23C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE23D");
    },
    Error,
    "encode-error: U+E23D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE23E");
    },
    Error,
    "encode-error: U+E23E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE23F");
    },
    Error,
    "encode-error: U+E23F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE240");
    },
    Error,
    "encode-error: U+E240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE241");
    },
    Error,
    "encode-error: U+E241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE242");
    },
    Error,
    "encode-error: U+E242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE243");
    },
    Error,
    "encode-error: U+E243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE244");
    },
    Error,
    "encode-error: U+E244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE245");
    },
    Error,
    "encode-error: U+E245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE246");
    },
    Error,
    "encode-error: U+E246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE247");
    },
    Error,
    "encode-error: U+E247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE248");
    },
    Error,
    "encode-error: U+E248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE249");
    },
    Error,
    "encode-error: U+E249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE24A");
    },
    Error,
    "encode-error: U+E24A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE24B");
    },
    Error,
    "encode-error: U+E24B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE24C");
    },
    Error,
    "encode-error: U+E24C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE24D");
    },
    Error,
    "encode-error: U+E24D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE24E");
    },
    Error,
    "encode-error: U+E24E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE24F");
    },
    Error,
    "encode-error: U+E24F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE250");
    },
    Error,
    "encode-error: U+E250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE251");
    },
    Error,
    "encode-error: U+E251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE252");
    },
    Error,
    "encode-error: U+E252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE253");
    },
    Error,
    "encode-error: U+E253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE254");
    },
    Error,
    "encode-error: U+E254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE255");
    },
    Error,
    "encode-error: U+E255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE256");
    },
    Error,
    "encode-error: U+E256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE257");
    },
    Error,
    "encode-error: U+E257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE258");
    },
    Error,
    "encode-error: U+E258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE259");
    },
    Error,
    "encode-error: U+E259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE25A");
    },
    Error,
    "encode-error: U+E25A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE25B");
    },
    Error,
    "encode-error: U+E25B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE25C");
    },
    Error,
    "encode-error: U+E25C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE25D");
    },
    Error,
    "encode-error: U+E25D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE25E");
    },
    Error,
    "encode-error: U+E25E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE25F");
    },
    Error,
    "encode-error: U+E25F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE260");
    },
    Error,
    "encode-error: U+E260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE261");
    },
    Error,
    "encode-error: U+E261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE262");
    },
    Error,
    "encode-error: U+E262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE263");
    },
    Error,
    "encode-error: U+E263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE264");
    },
    Error,
    "encode-error: U+E264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE265");
    },
    Error,
    "encode-error: U+E265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE266");
    },
    Error,
    "encode-error: U+E266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE267");
    },
    Error,
    "encode-error: U+E267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE268");
    },
    Error,
    "encode-error: U+E268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE269");
    },
    Error,
    "encode-error: U+E269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE26A");
    },
    Error,
    "encode-error: U+E26A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE26B");
    },
    Error,
    "encode-error: U+E26B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE26C");
    },
    Error,
    "encode-error: U+E26C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE26D");
    },
    Error,
    "encode-error: U+E26D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE26E");
    },
    Error,
    "encode-error: U+E26E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE26F");
    },
    Error,
    "encode-error: U+E26F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE270");
    },
    Error,
    "encode-error: U+E270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE271");
    },
    Error,
    "encode-error: U+E271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE272");
    },
    Error,
    "encode-error: U+E272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE273");
    },
    Error,
    "encode-error: U+E273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE274");
    },
    Error,
    "encode-error: U+E274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE275");
    },
    Error,
    "encode-error: U+E275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE276");
    },
    Error,
    "encode-error: U+E276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE277");
    },
    Error,
    "encode-error: U+E277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE278");
    },
    Error,
    "encode-error: U+E278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE279");
    },
    Error,
    "encode-error: U+E279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE27A");
    },
    Error,
    "encode-error: U+E27A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE27B");
    },
    Error,
    "encode-error: U+E27B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE27C");
    },
    Error,
    "encode-error: U+E27C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE27D");
    },
    Error,
    "encode-error: U+E27D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE27E");
    },
    Error,
    "encode-error: U+E27E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE27F");
    },
    Error,
    "encode-error: U+E27F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE280");
    },
    Error,
    "encode-error: U+E280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE281");
    },
    Error,
    "encode-error: U+E281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE282");
    },
    Error,
    "encode-error: U+E282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE283");
    },
    Error,
    "encode-error: U+E283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE284");
    },
    Error,
    "encode-error: U+E284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE285");
    },
    Error,
    "encode-error: U+E285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE286");
    },
    Error,
    "encode-error: U+E286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE287");
    },
    Error,
    "encode-error: U+E287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE288");
    },
    Error,
    "encode-error: U+E288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE289");
    },
    Error,
    "encode-error: U+E289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE28A");
    },
    Error,
    "encode-error: U+E28A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE28B");
    },
    Error,
    "encode-error: U+E28B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE28C");
    },
    Error,
    "encode-error: U+E28C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE28D");
    },
    Error,
    "encode-error: U+E28D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE28E");
    },
    Error,
    "encode-error: U+E28E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE28F");
    },
    Error,
    "encode-error: U+E28F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE290");
    },
    Error,
    "encode-error: U+E290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE291");
    },
    Error,
    "encode-error: U+E291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE292");
    },
    Error,
    "encode-error: U+E292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE293");
    },
    Error,
    "encode-error: U+E293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE294");
    },
    Error,
    "encode-error: U+E294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE295");
    },
    Error,
    "encode-error: U+E295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE296");
    },
    Error,
    "encode-error: U+E296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE297");
    },
    Error,
    "encode-error: U+E297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE298");
    },
    Error,
    "encode-error: U+E298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE299");
    },
    Error,
    "encode-error: U+E299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE29A");
    },
    Error,
    "encode-error: U+E29A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE29B");
    },
    Error,
    "encode-error: U+E29B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE29C");
    },
    Error,
    "encode-error: U+E29C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE29D");
    },
    Error,
    "encode-error: U+E29D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE29E");
    },
    Error,
    "encode-error: U+E29E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE29F");
    },
    Error,
    "encode-error: U+E29F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2A0");
    },
    Error,
    "encode-error: U+E2A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2A1");
    },
    Error,
    "encode-error: U+E2A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2A2");
    },
    Error,
    "encode-error: U+E2A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2A3");
    },
    Error,
    "encode-error: U+E2A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2A4");
    },
    Error,
    "encode-error: U+E2A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2A5");
    },
    Error,
    "encode-error: U+E2A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2A6");
    },
    Error,
    "encode-error: U+E2A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2A7");
    },
    Error,
    "encode-error: U+E2A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2A8");
    },
    Error,
    "encode-error: U+E2A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2A9");
    },
    Error,
    "encode-error: U+E2A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2AA");
    },
    Error,
    "encode-error: U+E2AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2AB");
    },
    Error,
    "encode-error: U+E2AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2AC");
    },
    Error,
    "encode-error: U+E2AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2AD");
    },
    Error,
    "encode-error: U+E2AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2AE");
    },
    Error,
    "encode-error: U+E2AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2AF");
    },
    Error,
    "encode-error: U+E2AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2B0");
    },
    Error,
    "encode-error: U+E2B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2B1");
    },
    Error,
    "encode-error: U+E2B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2B2");
    },
    Error,
    "encode-error: U+E2B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2B3");
    },
    Error,
    "encode-error: U+E2B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2B4");
    },
    Error,
    "encode-error: U+E2B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2B5");
    },
    Error,
    "encode-error: U+E2B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2B6");
    },
    Error,
    "encode-error: U+E2B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2B7");
    },
    Error,
    "encode-error: U+E2B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2B8");
    },
    Error,
    "encode-error: U+E2B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2B9");
    },
    Error,
    "encode-error: U+E2B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2BA");
    },
    Error,
    "encode-error: U+E2BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2BB");
    },
    Error,
    "encode-error: U+E2BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2BC");
    },
    Error,
    "encode-error: U+E2BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2BD");
    },
    Error,
    "encode-error: U+E2BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2BE");
    },
    Error,
    "encode-error: U+E2BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2BF");
    },
    Error,
    "encode-error: U+E2BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2C0");
    },
    Error,
    "encode-error: U+E2C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2C1");
    },
    Error,
    "encode-error: U+E2C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2C2");
    },
    Error,
    "encode-error: U+E2C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2C3");
    },
    Error,
    "encode-error: U+E2C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2C4");
    },
    Error,
    "encode-error: U+E2C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2C5");
    },
    Error,
    "encode-error: U+E2C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2C6");
    },
    Error,
    "encode-error: U+E2C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2C7");
    },
    Error,
    "encode-error: U+E2C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2C8");
    },
    Error,
    "encode-error: U+E2C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2C9");
    },
    Error,
    "encode-error: U+E2C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2CA");
    },
    Error,
    "encode-error: U+E2CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2CB");
    },
    Error,
    "encode-error: U+E2CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2CC");
    },
    Error,
    "encode-error: U+E2CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2CD");
    },
    Error,
    "encode-error: U+E2CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2CE");
    },
    Error,
    "encode-error: U+E2CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2CF");
    },
    Error,
    "encode-error: U+E2CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2D0");
    },
    Error,
    "encode-error: U+E2D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2D1");
    },
    Error,
    "encode-error: U+E2D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2D2");
    },
    Error,
    "encode-error: U+E2D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2D3");
    },
    Error,
    "encode-error: U+E2D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2D4");
    },
    Error,
    "encode-error: U+E2D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2D5");
    },
    Error,
    "encode-error: U+E2D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2D6");
    },
    Error,
    "encode-error: U+E2D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2D7");
    },
    Error,
    "encode-error: U+E2D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2D8");
    },
    Error,
    "encode-error: U+E2D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2D9");
    },
    Error,
    "encode-error: U+E2D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2DA");
    },
    Error,
    "encode-error: U+E2DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2DB");
    },
    Error,
    "encode-error: U+E2DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2DC");
    },
    Error,
    "encode-error: U+E2DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2DD");
    },
    Error,
    "encode-error: U+E2DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2DE");
    },
    Error,
    "encode-error: U+E2DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2DF");
    },
    Error,
    "encode-error: U+E2DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2E0");
    },
    Error,
    "encode-error: U+E2E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2E1");
    },
    Error,
    "encode-error: U+E2E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2E2");
    },
    Error,
    "encode-error: U+E2E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2E3");
    },
    Error,
    "encode-error: U+E2E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2E4");
    },
    Error,
    "encode-error: U+E2E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2E5");
    },
    Error,
    "encode-error: U+E2E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2E6");
    },
    Error,
    "encode-error: U+E2E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2E7");
    },
    Error,
    "encode-error: U+E2E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2E8");
    },
    Error,
    "encode-error: U+E2E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2E9");
    },
    Error,
    "encode-error: U+E2E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2EA");
    },
    Error,
    "encode-error: U+E2EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2EB");
    },
    Error,
    "encode-error: U+E2EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2EC");
    },
    Error,
    "encode-error: U+E2EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2ED");
    },
    Error,
    "encode-error: U+E2ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2EE");
    },
    Error,
    "encode-error: U+E2EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2EF");
    },
    Error,
    "encode-error: U+E2EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2F0");
    },
    Error,
    "encode-error: U+E2F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2F1");
    },
    Error,
    "encode-error: U+E2F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2F2");
    },
    Error,
    "encode-error: U+E2F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2F3");
    },
    Error,
    "encode-error: U+E2F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2F4");
    },
    Error,
    "encode-error: U+E2F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2F5");
    },
    Error,
    "encode-error: U+E2F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2F6");
    },
    Error,
    "encode-error: U+E2F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2F7");
    },
    Error,
    "encode-error: U+E2F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2F8");
    },
    Error,
    "encode-error: U+E2F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2F9");
    },
    Error,
    "encode-error: U+E2F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2FA");
    },
    Error,
    "encode-error: U+E2FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2FB");
    },
    Error,
    "encode-error: U+E2FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2FC");
    },
    Error,
    "encode-error: U+E2FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2FD");
    },
    Error,
    "encode-error: U+E2FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2FE");
    },
    Error,
    "encode-error: U+E2FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE2FF");
    },
    Error,
    "encode-error: U+E2FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE300");
    },
    Error,
    "encode-error: U+E300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE301");
    },
    Error,
    "encode-error: U+E301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE302");
    },
    Error,
    "encode-error: U+E302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE303");
    },
    Error,
    "encode-error: U+E303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE304");
    },
    Error,
    "encode-error: U+E304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE305");
    },
    Error,
    "encode-error: U+E305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE306");
    },
    Error,
    "encode-error: U+E306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE307");
    },
    Error,
    "encode-error: U+E307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE308");
    },
    Error,
    "encode-error: U+E308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE309");
    },
    Error,
    "encode-error: U+E309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE30A");
    },
    Error,
    "encode-error: U+E30A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE30B");
    },
    Error,
    "encode-error: U+E30B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE30C");
    },
    Error,
    "encode-error: U+E30C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE30D");
    },
    Error,
    "encode-error: U+E30D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE30E");
    },
    Error,
    "encode-error: U+E30E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE30F");
    },
    Error,
    "encode-error: U+E30F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE310");
    },
    Error,
    "encode-error: U+E310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE311");
    },
    Error,
    "encode-error: U+E311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE312");
    },
    Error,
    "encode-error: U+E312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE313");
    },
    Error,
    "encode-error: U+E313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE314");
    },
    Error,
    "encode-error: U+E314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE315");
    },
    Error,
    "encode-error: U+E315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE316");
    },
    Error,
    "encode-error: U+E316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE317");
    },
    Error,
    "encode-error: U+E317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE318");
    },
    Error,
    "encode-error: U+E318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE319");
    },
    Error,
    "encode-error: U+E319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE31A");
    },
    Error,
    "encode-error: U+E31A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE31B");
    },
    Error,
    "encode-error: U+E31B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE31C");
    },
    Error,
    "encode-error: U+E31C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE31D");
    },
    Error,
    "encode-error: U+E31D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE31E");
    },
    Error,
    "encode-error: U+E31E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE31F");
    },
    Error,
    "encode-error: U+E31F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE320");
    },
    Error,
    "encode-error: U+E320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE321");
    },
    Error,
    "encode-error: U+E321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE322");
    },
    Error,
    "encode-error: U+E322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE323");
    },
    Error,
    "encode-error: U+E323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE324");
    },
    Error,
    "encode-error: U+E324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE325");
    },
    Error,
    "encode-error: U+E325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE326");
    },
    Error,
    "encode-error: U+E326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE327");
    },
    Error,
    "encode-error: U+E327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE328");
    },
    Error,
    "encode-error: U+E328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE329");
    },
    Error,
    "encode-error: U+E329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE32A");
    },
    Error,
    "encode-error: U+E32A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE32B");
    },
    Error,
    "encode-error: U+E32B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE32C");
    },
    Error,
    "encode-error: U+E32C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE32D");
    },
    Error,
    "encode-error: U+E32D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE32E");
    },
    Error,
    "encode-error: U+E32E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE32F");
    },
    Error,
    "encode-error: U+E32F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE330");
    },
    Error,
    "encode-error: U+E330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE331");
    },
    Error,
    "encode-error: U+E331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE332");
    },
    Error,
    "encode-error: U+E332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE333");
    },
    Error,
    "encode-error: U+E333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE334");
    },
    Error,
    "encode-error: U+E334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE335");
    },
    Error,
    "encode-error: U+E335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE336");
    },
    Error,
    "encode-error: U+E336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE337");
    },
    Error,
    "encode-error: U+E337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE338");
    },
    Error,
    "encode-error: U+E338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE339");
    },
    Error,
    "encode-error: U+E339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE33A");
    },
    Error,
    "encode-error: U+E33A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE33B");
    },
    Error,
    "encode-error: U+E33B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE33C");
    },
    Error,
    "encode-error: U+E33C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE33D");
    },
    Error,
    "encode-error: U+E33D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE33E");
    },
    Error,
    "encode-error: U+E33E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE33F");
    },
    Error,
    "encode-error: U+E33F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE340");
    },
    Error,
    "encode-error: U+E340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE341");
    },
    Error,
    "encode-error: U+E341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE342");
    },
    Error,
    "encode-error: U+E342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE343");
    },
    Error,
    "encode-error: U+E343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE344");
    },
    Error,
    "encode-error: U+E344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE345");
    },
    Error,
    "encode-error: U+E345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE346");
    },
    Error,
    "encode-error: U+E346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE347");
    },
    Error,
    "encode-error: U+E347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE348");
    },
    Error,
    "encode-error: U+E348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE349");
    },
    Error,
    "encode-error: U+E349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE34A");
    },
    Error,
    "encode-error: U+E34A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE34B");
    },
    Error,
    "encode-error: U+E34B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE34C");
    },
    Error,
    "encode-error: U+E34C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE34D");
    },
    Error,
    "encode-error: U+E34D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE34E");
    },
    Error,
    "encode-error: U+E34E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE34F");
    },
    Error,
    "encode-error: U+E34F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE350");
    },
    Error,
    "encode-error: U+E350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE351");
    },
    Error,
    "encode-error: U+E351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE352");
    },
    Error,
    "encode-error: U+E352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE353");
    },
    Error,
    "encode-error: U+E353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE354");
    },
    Error,
    "encode-error: U+E354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE355");
    },
    Error,
    "encode-error: U+E355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE356");
    },
    Error,
    "encode-error: U+E356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE357");
    },
    Error,
    "encode-error: U+E357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE358");
    },
    Error,
    "encode-error: U+E358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE359");
    },
    Error,
    "encode-error: U+E359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE35A");
    },
    Error,
    "encode-error: U+E35A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE35B");
    },
    Error,
    "encode-error: U+E35B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE35C");
    },
    Error,
    "encode-error: U+E35C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE35D");
    },
    Error,
    "encode-error: U+E35D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE35E");
    },
    Error,
    "encode-error: U+E35E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE35F");
    },
    Error,
    "encode-error: U+E35F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE360");
    },
    Error,
    "encode-error: U+E360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE361");
    },
    Error,
    "encode-error: U+E361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE362");
    },
    Error,
    "encode-error: U+E362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE363");
    },
    Error,
    "encode-error: U+E363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE364");
    },
    Error,
    "encode-error: U+E364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE365");
    },
    Error,
    "encode-error: U+E365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE366");
    },
    Error,
    "encode-error: U+E366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE367");
    },
    Error,
    "encode-error: U+E367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE368");
    },
    Error,
    "encode-error: U+E368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE369");
    },
    Error,
    "encode-error: U+E369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE36A");
    },
    Error,
    "encode-error: U+E36A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE36B");
    },
    Error,
    "encode-error: U+E36B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE36C");
    },
    Error,
    "encode-error: U+E36C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE36D");
    },
    Error,
    "encode-error: U+E36D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE36E");
    },
    Error,
    "encode-error: U+E36E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE36F");
    },
    Error,
    "encode-error: U+E36F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE370");
    },
    Error,
    "encode-error: U+E370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE371");
    },
    Error,
    "encode-error: U+E371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE372");
    },
    Error,
    "encode-error: U+E372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE373");
    },
    Error,
    "encode-error: U+E373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE374");
    },
    Error,
    "encode-error: U+E374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE375");
    },
    Error,
    "encode-error: U+E375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE376");
    },
    Error,
    "encode-error: U+E376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE377");
    },
    Error,
    "encode-error: U+E377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE378");
    },
    Error,
    "encode-error: U+E378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE379");
    },
    Error,
    "encode-error: U+E379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE37A");
    },
    Error,
    "encode-error: U+E37A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE37B");
    },
    Error,
    "encode-error: U+E37B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE37C");
    },
    Error,
    "encode-error: U+E37C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE37D");
    },
    Error,
    "encode-error: U+E37D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE37E");
    },
    Error,
    "encode-error: U+E37E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE37F");
    },
    Error,
    "encode-error: U+E37F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE380");
    },
    Error,
    "encode-error: U+E380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE381");
    },
    Error,
    "encode-error: U+E381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE382");
    },
    Error,
    "encode-error: U+E382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE383");
    },
    Error,
    "encode-error: U+E383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE384");
    },
    Error,
    "encode-error: U+E384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE385");
    },
    Error,
    "encode-error: U+E385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE386");
    },
    Error,
    "encode-error: U+E386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE387");
    },
    Error,
    "encode-error: U+E387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE388");
    },
    Error,
    "encode-error: U+E388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE389");
    },
    Error,
    "encode-error: U+E389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE38A");
    },
    Error,
    "encode-error: U+E38A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE38B");
    },
    Error,
    "encode-error: U+E38B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE38C");
    },
    Error,
    "encode-error: U+E38C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE38D");
    },
    Error,
    "encode-error: U+E38D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE38E");
    },
    Error,
    "encode-error: U+E38E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE38F");
    },
    Error,
    "encode-error: U+E38F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE390");
    },
    Error,
    "encode-error: U+E390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE391");
    },
    Error,
    "encode-error: U+E391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE392");
    },
    Error,
    "encode-error: U+E392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE393");
    },
    Error,
    "encode-error: U+E393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE394");
    },
    Error,
    "encode-error: U+E394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE395");
    },
    Error,
    "encode-error: U+E395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE396");
    },
    Error,
    "encode-error: U+E396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE397");
    },
    Error,
    "encode-error: U+E397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE398");
    },
    Error,
    "encode-error: U+E398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE399");
    },
    Error,
    "encode-error: U+E399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE39A");
    },
    Error,
    "encode-error: U+E39A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE39B");
    },
    Error,
    "encode-error: U+E39B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE39C");
    },
    Error,
    "encode-error: U+E39C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE39D");
    },
    Error,
    "encode-error: U+E39D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE39E");
    },
    Error,
    "encode-error: U+E39E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE39F");
    },
    Error,
    "encode-error: U+E39F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3A0");
    },
    Error,
    "encode-error: U+E3A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3A1");
    },
    Error,
    "encode-error: U+E3A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3A2");
    },
    Error,
    "encode-error: U+E3A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3A3");
    },
    Error,
    "encode-error: U+E3A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3A4");
    },
    Error,
    "encode-error: U+E3A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3A5");
    },
    Error,
    "encode-error: U+E3A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3A6");
    },
    Error,
    "encode-error: U+E3A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3A7");
    },
    Error,
    "encode-error: U+E3A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3A8");
    },
    Error,
    "encode-error: U+E3A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3A9");
    },
    Error,
    "encode-error: U+E3A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3AA");
    },
    Error,
    "encode-error: U+E3AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3AB");
    },
    Error,
    "encode-error: U+E3AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3AC");
    },
    Error,
    "encode-error: U+E3AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3AD");
    },
    Error,
    "encode-error: U+E3AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3AE");
    },
    Error,
    "encode-error: U+E3AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3AF");
    },
    Error,
    "encode-error: U+E3AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3B0");
    },
    Error,
    "encode-error: U+E3B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3B1");
    },
    Error,
    "encode-error: U+E3B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3B2");
    },
    Error,
    "encode-error: U+E3B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3B3");
    },
    Error,
    "encode-error: U+E3B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3B4");
    },
    Error,
    "encode-error: U+E3B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3B5");
    },
    Error,
    "encode-error: U+E3B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3B6");
    },
    Error,
    "encode-error: U+E3B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3B7");
    },
    Error,
    "encode-error: U+E3B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3B8");
    },
    Error,
    "encode-error: U+E3B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3B9");
    },
    Error,
    "encode-error: U+E3B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3BA");
    },
    Error,
    "encode-error: U+E3BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3BB");
    },
    Error,
    "encode-error: U+E3BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3BC");
    },
    Error,
    "encode-error: U+E3BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3BD");
    },
    Error,
    "encode-error: U+E3BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3BE");
    },
    Error,
    "encode-error: U+E3BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3BF");
    },
    Error,
    "encode-error: U+E3BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3C0");
    },
    Error,
    "encode-error: U+E3C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3C1");
    },
    Error,
    "encode-error: U+E3C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3C2");
    },
    Error,
    "encode-error: U+E3C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3C3");
    },
    Error,
    "encode-error: U+E3C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3C4");
    },
    Error,
    "encode-error: U+E3C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3C5");
    },
    Error,
    "encode-error: U+E3C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3C6");
    },
    Error,
    "encode-error: U+E3C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3C7");
    },
    Error,
    "encode-error: U+E3C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3C8");
    },
    Error,
    "encode-error: U+E3C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3C9");
    },
    Error,
    "encode-error: U+E3C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3CA");
    },
    Error,
    "encode-error: U+E3CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3CB");
    },
    Error,
    "encode-error: U+E3CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3CC");
    },
    Error,
    "encode-error: U+E3CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3CD");
    },
    Error,
    "encode-error: U+E3CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3CE");
    },
    Error,
    "encode-error: U+E3CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3CF");
    },
    Error,
    "encode-error: U+E3CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3D0");
    },
    Error,
    "encode-error: U+E3D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3D1");
    },
    Error,
    "encode-error: U+E3D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3D2");
    },
    Error,
    "encode-error: U+E3D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3D3");
    },
    Error,
    "encode-error: U+E3D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3D4");
    },
    Error,
    "encode-error: U+E3D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3D5");
    },
    Error,
    "encode-error: U+E3D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3D6");
    },
    Error,
    "encode-error: U+E3D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3D7");
    },
    Error,
    "encode-error: U+E3D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3D8");
    },
    Error,
    "encode-error: U+E3D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3D9");
    },
    Error,
    "encode-error: U+E3D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3DA");
    },
    Error,
    "encode-error: U+E3DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3DB");
    },
    Error,
    "encode-error: U+E3DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3DC");
    },
    Error,
    "encode-error: U+E3DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3DD");
    },
    Error,
    "encode-error: U+E3DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3DE");
    },
    Error,
    "encode-error: U+E3DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3DF");
    },
    Error,
    "encode-error: U+E3DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3E0");
    },
    Error,
    "encode-error: U+E3E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3E1");
    },
    Error,
    "encode-error: U+E3E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3E2");
    },
    Error,
    "encode-error: U+E3E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3E3");
    },
    Error,
    "encode-error: U+E3E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3E4");
    },
    Error,
    "encode-error: U+E3E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3E5");
    },
    Error,
    "encode-error: U+E3E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3E6");
    },
    Error,
    "encode-error: U+E3E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3E7");
    },
    Error,
    "encode-error: U+E3E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3E8");
    },
    Error,
    "encode-error: U+E3E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3E9");
    },
    Error,
    "encode-error: U+E3E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3EA");
    },
    Error,
    "encode-error: U+E3EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3EB");
    },
    Error,
    "encode-error: U+E3EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3EC");
    },
    Error,
    "encode-error: U+E3EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3ED");
    },
    Error,
    "encode-error: U+E3ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3EE");
    },
    Error,
    "encode-error: U+E3EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3EF");
    },
    Error,
    "encode-error: U+E3EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3F0");
    },
    Error,
    "encode-error: U+E3F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3F1");
    },
    Error,
    "encode-error: U+E3F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3F2");
    },
    Error,
    "encode-error: U+E3F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3F3");
    },
    Error,
    "encode-error: U+E3F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3F4");
    },
    Error,
    "encode-error: U+E3F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3F5");
    },
    Error,
    "encode-error: U+E3F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3F6");
    },
    Error,
    "encode-error: U+E3F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3F7");
    },
    Error,
    "encode-error: U+E3F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3F8");
    },
    Error,
    "encode-error: U+E3F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3F9");
    },
    Error,
    "encode-error: U+E3F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3FA");
    },
    Error,
    "encode-error: U+E3FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3FB");
    },
    Error,
    "encode-error: U+E3FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3FC");
    },
    Error,
    "encode-error: U+E3FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3FD");
    },
    Error,
    "encode-error: U+E3FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3FE");
    },
    Error,
    "encode-error: U+E3FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE3FF");
    },
    Error,
    "encode-error: U+E3FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE400");
    },
    Error,
    "encode-error: U+E400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE401");
    },
    Error,
    "encode-error: U+E401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE402");
    },
    Error,
    "encode-error: U+E402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE403");
    },
    Error,
    "encode-error: U+E403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE404");
    },
    Error,
    "encode-error: U+E404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE405");
    },
    Error,
    "encode-error: U+E405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE406");
    },
    Error,
    "encode-error: U+E406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE407");
    },
    Error,
    "encode-error: U+E407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE408");
    },
    Error,
    "encode-error: U+E408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE409");
    },
    Error,
    "encode-error: U+E409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE40A");
    },
    Error,
    "encode-error: U+E40A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE40B");
    },
    Error,
    "encode-error: U+E40B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE40C");
    },
    Error,
    "encode-error: U+E40C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE40D");
    },
    Error,
    "encode-error: U+E40D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE40E");
    },
    Error,
    "encode-error: U+E40E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE40F");
    },
    Error,
    "encode-error: U+E40F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE410");
    },
    Error,
    "encode-error: U+E410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE411");
    },
    Error,
    "encode-error: U+E411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE412");
    },
    Error,
    "encode-error: U+E412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE413");
    },
    Error,
    "encode-error: U+E413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE414");
    },
    Error,
    "encode-error: U+E414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE415");
    },
    Error,
    "encode-error: U+E415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE416");
    },
    Error,
    "encode-error: U+E416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE417");
    },
    Error,
    "encode-error: U+E417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE418");
    },
    Error,
    "encode-error: U+E418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE419");
    },
    Error,
    "encode-error: U+E419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE41A");
    },
    Error,
    "encode-error: U+E41A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE41B");
    },
    Error,
    "encode-error: U+E41B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE41C");
    },
    Error,
    "encode-error: U+E41C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE41D");
    },
    Error,
    "encode-error: U+E41D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE41E");
    },
    Error,
    "encode-error: U+E41E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE41F");
    },
    Error,
    "encode-error: U+E41F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE420");
    },
    Error,
    "encode-error: U+E420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE421");
    },
    Error,
    "encode-error: U+E421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE422");
    },
    Error,
    "encode-error: U+E422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE423");
    },
    Error,
    "encode-error: U+E423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE424");
    },
    Error,
    "encode-error: U+E424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE425");
    },
    Error,
    "encode-error: U+E425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE426");
    },
    Error,
    "encode-error: U+E426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE427");
    },
    Error,
    "encode-error: U+E427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE428");
    },
    Error,
    "encode-error: U+E428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE429");
    },
    Error,
    "encode-error: U+E429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE42A");
    },
    Error,
    "encode-error: U+E42A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE42B");
    },
    Error,
    "encode-error: U+E42B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE42C");
    },
    Error,
    "encode-error: U+E42C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE42D");
    },
    Error,
    "encode-error: U+E42D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE42E");
    },
    Error,
    "encode-error: U+E42E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE42F");
    },
    Error,
    "encode-error: U+E42F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE430");
    },
    Error,
    "encode-error: U+E430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE431");
    },
    Error,
    "encode-error: U+E431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE432");
    },
    Error,
    "encode-error: U+E432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE433");
    },
    Error,
    "encode-error: U+E433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE434");
    },
    Error,
    "encode-error: U+E434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE435");
    },
    Error,
    "encode-error: U+E435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE436");
    },
    Error,
    "encode-error: U+E436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE437");
    },
    Error,
    "encode-error: U+E437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE438");
    },
    Error,
    "encode-error: U+E438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE439");
    },
    Error,
    "encode-error: U+E439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE43A");
    },
    Error,
    "encode-error: U+E43A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE43B");
    },
    Error,
    "encode-error: U+E43B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE43C");
    },
    Error,
    "encode-error: U+E43C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE43D");
    },
    Error,
    "encode-error: U+E43D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE43E");
    },
    Error,
    "encode-error: U+E43E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE43F");
    },
    Error,
    "encode-error: U+E43F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE440");
    },
    Error,
    "encode-error: U+E440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE441");
    },
    Error,
    "encode-error: U+E441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE442");
    },
    Error,
    "encode-error: U+E442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE443");
    },
    Error,
    "encode-error: U+E443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE444");
    },
    Error,
    "encode-error: U+E444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE445");
    },
    Error,
    "encode-error: U+E445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE446");
    },
    Error,
    "encode-error: U+E446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE447");
    },
    Error,
    "encode-error: U+E447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE448");
    },
    Error,
    "encode-error: U+E448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE449");
    },
    Error,
    "encode-error: U+E449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE44A");
    },
    Error,
    "encode-error: U+E44A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE44B");
    },
    Error,
    "encode-error: U+E44B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE44C");
    },
    Error,
    "encode-error: U+E44C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE44D");
    },
    Error,
    "encode-error: U+E44D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE44E");
    },
    Error,
    "encode-error: U+E44E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE44F");
    },
    Error,
    "encode-error: U+E44F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE450");
    },
    Error,
    "encode-error: U+E450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE451");
    },
    Error,
    "encode-error: U+E451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE452");
    },
    Error,
    "encode-error: U+E452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE453");
    },
    Error,
    "encode-error: U+E453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE454");
    },
    Error,
    "encode-error: U+E454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE455");
    },
    Error,
    "encode-error: U+E455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE456");
    },
    Error,
    "encode-error: U+E456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE457");
    },
    Error,
    "encode-error: U+E457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE458");
    },
    Error,
    "encode-error: U+E458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE459");
    },
    Error,
    "encode-error: U+E459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE45A");
    },
    Error,
    "encode-error: U+E45A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE45B");
    },
    Error,
    "encode-error: U+E45B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE45C");
    },
    Error,
    "encode-error: U+E45C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE45D");
    },
    Error,
    "encode-error: U+E45D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE45E");
    },
    Error,
    "encode-error: U+E45E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE45F");
    },
    Error,
    "encode-error: U+E45F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE460");
    },
    Error,
    "encode-error: U+E460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE461");
    },
    Error,
    "encode-error: U+E461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE462");
    },
    Error,
    "encode-error: U+E462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE463");
    },
    Error,
    "encode-error: U+E463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE464");
    },
    Error,
    "encode-error: U+E464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE465");
    },
    Error,
    "encode-error: U+E465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE466");
    },
    Error,
    "encode-error: U+E466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE467");
    },
    Error,
    "encode-error: U+E467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE468");
    },
    Error,
    "encode-error: U+E468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE469");
    },
    Error,
    "encode-error: U+E469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE46A");
    },
    Error,
    "encode-error: U+E46A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE46B");
    },
    Error,
    "encode-error: U+E46B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE46C");
    },
    Error,
    "encode-error: U+E46C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE46D");
    },
    Error,
    "encode-error: U+E46D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE46E");
    },
    Error,
    "encode-error: U+E46E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE46F");
    },
    Error,
    "encode-error: U+E46F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE470");
    },
    Error,
    "encode-error: U+E470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE471");
    },
    Error,
    "encode-error: U+E471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE472");
    },
    Error,
    "encode-error: U+E472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE473");
    },
    Error,
    "encode-error: U+E473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE474");
    },
    Error,
    "encode-error: U+E474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE475");
    },
    Error,
    "encode-error: U+E475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE476");
    },
    Error,
    "encode-error: U+E476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE477");
    },
    Error,
    "encode-error: U+E477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE478");
    },
    Error,
    "encode-error: U+E478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE479");
    },
    Error,
    "encode-error: U+E479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE47A");
    },
    Error,
    "encode-error: U+E47A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE47B");
    },
    Error,
    "encode-error: U+E47B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE47C");
    },
    Error,
    "encode-error: U+E47C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE47D");
    },
    Error,
    "encode-error: U+E47D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE47E");
    },
    Error,
    "encode-error: U+E47E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE47F");
    },
    Error,
    "encode-error: U+E47F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE480");
    },
    Error,
    "encode-error: U+E480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE481");
    },
    Error,
    "encode-error: U+E481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE482");
    },
    Error,
    "encode-error: U+E482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE483");
    },
    Error,
    "encode-error: U+E483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE484");
    },
    Error,
    "encode-error: U+E484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE485");
    },
    Error,
    "encode-error: U+E485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE486");
    },
    Error,
    "encode-error: U+E486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE487");
    },
    Error,
    "encode-error: U+E487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE488");
    },
    Error,
    "encode-error: U+E488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE489");
    },
    Error,
    "encode-error: U+E489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE48A");
    },
    Error,
    "encode-error: U+E48A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE48B");
    },
    Error,
    "encode-error: U+E48B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE48C");
    },
    Error,
    "encode-error: U+E48C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE48D");
    },
    Error,
    "encode-error: U+E48D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE48E");
    },
    Error,
    "encode-error: U+E48E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE48F");
    },
    Error,
    "encode-error: U+E48F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE490");
    },
    Error,
    "encode-error: U+E490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE491");
    },
    Error,
    "encode-error: U+E491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE492");
    },
    Error,
    "encode-error: U+E492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE493");
    },
    Error,
    "encode-error: U+E493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE494");
    },
    Error,
    "encode-error: U+E494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE495");
    },
    Error,
    "encode-error: U+E495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE496");
    },
    Error,
    "encode-error: U+E496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE497");
    },
    Error,
    "encode-error: U+E497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE498");
    },
    Error,
    "encode-error: U+E498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE499");
    },
    Error,
    "encode-error: U+E499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE49A");
    },
    Error,
    "encode-error: U+E49A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE49B");
    },
    Error,
    "encode-error: U+E49B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE49C");
    },
    Error,
    "encode-error: U+E49C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE49D");
    },
    Error,
    "encode-error: U+E49D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE49E");
    },
    Error,
    "encode-error: U+E49E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE49F");
    },
    Error,
    "encode-error: U+E49F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4A0");
    },
    Error,
    "encode-error: U+E4A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4A1");
    },
    Error,
    "encode-error: U+E4A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4A2");
    },
    Error,
    "encode-error: U+E4A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4A3");
    },
    Error,
    "encode-error: U+E4A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4A4");
    },
    Error,
    "encode-error: U+E4A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4A5");
    },
    Error,
    "encode-error: U+E4A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4A6");
    },
    Error,
    "encode-error: U+E4A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4A7");
    },
    Error,
    "encode-error: U+E4A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4A8");
    },
    Error,
    "encode-error: U+E4A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4A9");
    },
    Error,
    "encode-error: U+E4A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4AA");
    },
    Error,
    "encode-error: U+E4AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4AB");
    },
    Error,
    "encode-error: U+E4AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4AC");
    },
    Error,
    "encode-error: U+E4AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4AD");
    },
    Error,
    "encode-error: U+E4AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4AE");
    },
    Error,
    "encode-error: U+E4AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4AF");
    },
    Error,
    "encode-error: U+E4AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4B0");
    },
    Error,
    "encode-error: U+E4B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4B1");
    },
    Error,
    "encode-error: U+E4B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4B2");
    },
    Error,
    "encode-error: U+E4B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4B3");
    },
    Error,
    "encode-error: U+E4B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4B4");
    },
    Error,
    "encode-error: U+E4B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4B5");
    },
    Error,
    "encode-error: U+E4B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4B6");
    },
    Error,
    "encode-error: U+E4B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4B7");
    },
    Error,
    "encode-error: U+E4B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4B8");
    },
    Error,
    "encode-error: U+E4B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4B9");
    },
    Error,
    "encode-error: U+E4B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4BA");
    },
    Error,
    "encode-error: U+E4BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4BB");
    },
    Error,
    "encode-error: U+E4BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4BC");
    },
    Error,
    "encode-error: U+E4BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4BD");
    },
    Error,
    "encode-error: U+E4BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4BE");
    },
    Error,
    "encode-error: U+E4BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4BF");
    },
    Error,
    "encode-error: U+E4BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4C0");
    },
    Error,
    "encode-error: U+E4C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4C1");
    },
    Error,
    "encode-error: U+E4C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4C2");
    },
    Error,
    "encode-error: U+E4C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4C3");
    },
    Error,
    "encode-error: U+E4C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4C4");
    },
    Error,
    "encode-error: U+E4C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4C5");
    },
    Error,
    "encode-error: U+E4C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4C6");
    },
    Error,
    "encode-error: U+E4C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4C7");
    },
    Error,
    "encode-error: U+E4C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4C8");
    },
    Error,
    "encode-error: U+E4C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4C9");
    },
    Error,
    "encode-error: U+E4C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4CA");
    },
    Error,
    "encode-error: U+E4CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4CB");
    },
    Error,
    "encode-error: U+E4CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4CC");
    },
    Error,
    "encode-error: U+E4CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4CD");
    },
    Error,
    "encode-error: U+E4CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4CE");
    },
    Error,
    "encode-error: U+E4CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4CF");
    },
    Error,
    "encode-error: U+E4CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4D0");
    },
    Error,
    "encode-error: U+E4D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4D1");
    },
    Error,
    "encode-error: U+E4D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4D2");
    },
    Error,
    "encode-error: U+E4D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4D3");
    },
    Error,
    "encode-error: U+E4D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4D4");
    },
    Error,
    "encode-error: U+E4D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4D5");
    },
    Error,
    "encode-error: U+E4D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4D6");
    },
    Error,
    "encode-error: U+E4D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4D7");
    },
    Error,
    "encode-error: U+E4D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4D8");
    },
    Error,
    "encode-error: U+E4D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4D9");
    },
    Error,
    "encode-error: U+E4D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4DA");
    },
    Error,
    "encode-error: U+E4DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4DB");
    },
    Error,
    "encode-error: U+E4DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4DC");
    },
    Error,
    "encode-error: U+E4DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4DD");
    },
    Error,
    "encode-error: U+E4DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4DE");
    },
    Error,
    "encode-error: U+E4DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4DF");
    },
    Error,
    "encode-error: U+E4DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4E0");
    },
    Error,
    "encode-error: U+E4E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4E1");
    },
    Error,
    "encode-error: U+E4E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4E2");
    },
    Error,
    "encode-error: U+E4E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4E3");
    },
    Error,
    "encode-error: U+E4E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4E4");
    },
    Error,
    "encode-error: U+E4E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4E5");
    },
    Error,
    "encode-error: U+E4E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4E6");
    },
    Error,
    "encode-error: U+E4E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4E7");
    },
    Error,
    "encode-error: U+E4E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4E8");
    },
    Error,
    "encode-error: U+E4E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4E9");
    },
    Error,
    "encode-error: U+E4E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4EA");
    },
    Error,
    "encode-error: U+E4EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4EB");
    },
    Error,
    "encode-error: U+E4EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4EC");
    },
    Error,
    "encode-error: U+E4EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4ED");
    },
    Error,
    "encode-error: U+E4ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4EE");
    },
    Error,
    "encode-error: U+E4EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4EF");
    },
    Error,
    "encode-error: U+E4EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4F0");
    },
    Error,
    "encode-error: U+E4F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4F1");
    },
    Error,
    "encode-error: U+E4F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4F2");
    },
    Error,
    "encode-error: U+E4F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4F3");
    },
    Error,
    "encode-error: U+E4F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4F4");
    },
    Error,
    "encode-error: U+E4F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4F5");
    },
    Error,
    "encode-error: U+E4F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4F6");
    },
    Error,
    "encode-error: U+E4F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4F7");
    },
    Error,
    "encode-error: U+E4F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4F8");
    },
    Error,
    "encode-error: U+E4F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4F9");
    },
    Error,
    "encode-error: U+E4F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4FA");
    },
    Error,
    "encode-error: U+E4FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4FB");
    },
    Error,
    "encode-error: U+E4FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4FC");
    },
    Error,
    "encode-error: U+E4FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4FD");
    },
    Error,
    "encode-error: U+E4FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4FE");
    },
    Error,
    "encode-error: U+E4FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE4FF");
    },
    Error,
    "encode-error: U+E4FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE500");
    },
    Error,
    "encode-error: U+E500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE501");
    },
    Error,
    "encode-error: U+E501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE502");
    },
    Error,
    "encode-error: U+E502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE503");
    },
    Error,
    "encode-error: U+E503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE504");
    },
    Error,
    "encode-error: U+E504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE505");
    },
    Error,
    "encode-error: U+E505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE506");
    },
    Error,
    "encode-error: U+E506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE507");
    },
    Error,
    "encode-error: U+E507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE508");
    },
    Error,
    "encode-error: U+E508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE509");
    },
    Error,
    "encode-error: U+E509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE50A");
    },
    Error,
    "encode-error: U+E50A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE50B");
    },
    Error,
    "encode-error: U+E50B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE50C");
    },
    Error,
    "encode-error: U+E50C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE50D");
    },
    Error,
    "encode-error: U+E50D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE50E");
    },
    Error,
    "encode-error: U+E50E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE50F");
    },
    Error,
    "encode-error: U+E50F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE510");
    },
    Error,
    "encode-error: U+E510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE511");
    },
    Error,
    "encode-error: U+E511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE512");
    },
    Error,
    "encode-error: U+E512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE513");
    },
    Error,
    "encode-error: U+E513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE514");
    },
    Error,
    "encode-error: U+E514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE515");
    },
    Error,
    "encode-error: U+E515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE516");
    },
    Error,
    "encode-error: U+E516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE517");
    },
    Error,
    "encode-error: U+E517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE518");
    },
    Error,
    "encode-error: U+E518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE519");
    },
    Error,
    "encode-error: U+E519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE51A");
    },
    Error,
    "encode-error: U+E51A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE51B");
    },
    Error,
    "encode-error: U+E51B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE51C");
    },
    Error,
    "encode-error: U+E51C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE51D");
    },
    Error,
    "encode-error: U+E51D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE51E");
    },
    Error,
    "encode-error: U+E51E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE51F");
    },
    Error,
    "encode-error: U+E51F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE520");
    },
    Error,
    "encode-error: U+E520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE521");
    },
    Error,
    "encode-error: U+E521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE522");
    },
    Error,
    "encode-error: U+E522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE523");
    },
    Error,
    "encode-error: U+E523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE524");
    },
    Error,
    "encode-error: U+E524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE525");
    },
    Error,
    "encode-error: U+E525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE526");
    },
    Error,
    "encode-error: U+E526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE527");
    },
    Error,
    "encode-error: U+E527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE528");
    },
    Error,
    "encode-error: U+E528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE529");
    },
    Error,
    "encode-error: U+E529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE52A");
    },
    Error,
    "encode-error: U+E52A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE52B");
    },
    Error,
    "encode-error: U+E52B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE52C");
    },
    Error,
    "encode-error: U+E52C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE52D");
    },
    Error,
    "encode-error: U+E52D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE52E");
    },
    Error,
    "encode-error: U+E52E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE52F");
    },
    Error,
    "encode-error: U+E52F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE530");
    },
    Error,
    "encode-error: U+E530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE531");
    },
    Error,
    "encode-error: U+E531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE532");
    },
    Error,
    "encode-error: U+E532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE533");
    },
    Error,
    "encode-error: U+E533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE534");
    },
    Error,
    "encode-error: U+E534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE535");
    },
    Error,
    "encode-error: U+E535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE536");
    },
    Error,
    "encode-error: U+E536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE537");
    },
    Error,
    "encode-error: U+E537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE538");
    },
    Error,
    "encode-error: U+E538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE539");
    },
    Error,
    "encode-error: U+E539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE53A");
    },
    Error,
    "encode-error: U+E53A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE53B");
    },
    Error,
    "encode-error: U+E53B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE53C");
    },
    Error,
    "encode-error: U+E53C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE53D");
    },
    Error,
    "encode-error: U+E53D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE53E");
    },
    Error,
    "encode-error: U+E53E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE53F");
    },
    Error,
    "encode-error: U+E53F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE540");
    },
    Error,
    "encode-error: U+E540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE541");
    },
    Error,
    "encode-error: U+E541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE542");
    },
    Error,
    "encode-error: U+E542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE543");
    },
    Error,
    "encode-error: U+E543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE544");
    },
    Error,
    "encode-error: U+E544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE545");
    },
    Error,
    "encode-error: U+E545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE546");
    },
    Error,
    "encode-error: U+E546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE547");
    },
    Error,
    "encode-error: U+E547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE548");
    },
    Error,
    "encode-error: U+E548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE549");
    },
    Error,
    "encode-error: U+E549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE54A");
    },
    Error,
    "encode-error: U+E54A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE54B");
    },
    Error,
    "encode-error: U+E54B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE54C");
    },
    Error,
    "encode-error: U+E54C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE54D");
    },
    Error,
    "encode-error: U+E54D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE54E");
    },
    Error,
    "encode-error: U+E54E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE54F");
    },
    Error,
    "encode-error: U+E54F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE550");
    },
    Error,
    "encode-error: U+E550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE551");
    },
    Error,
    "encode-error: U+E551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE552");
    },
    Error,
    "encode-error: U+E552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE553");
    },
    Error,
    "encode-error: U+E553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE554");
    },
    Error,
    "encode-error: U+E554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE555");
    },
    Error,
    "encode-error: U+E555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE556");
    },
    Error,
    "encode-error: U+E556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE557");
    },
    Error,
    "encode-error: U+E557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE558");
    },
    Error,
    "encode-error: U+E558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE559");
    },
    Error,
    "encode-error: U+E559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE55A");
    },
    Error,
    "encode-error: U+E55A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE55B");
    },
    Error,
    "encode-error: U+E55B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE55C");
    },
    Error,
    "encode-error: U+E55C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE55D");
    },
    Error,
    "encode-error: U+E55D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE55E");
    },
    Error,
    "encode-error: U+E55E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE55F");
    },
    Error,
    "encode-error: U+E55F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE560");
    },
    Error,
    "encode-error: U+E560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE561");
    },
    Error,
    "encode-error: U+E561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE562");
    },
    Error,
    "encode-error: U+E562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE563");
    },
    Error,
    "encode-error: U+E563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE564");
    },
    Error,
    "encode-error: U+E564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE565");
    },
    Error,
    "encode-error: U+E565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE566");
    },
    Error,
    "encode-error: U+E566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE567");
    },
    Error,
    "encode-error: U+E567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE568");
    },
    Error,
    "encode-error: U+E568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE569");
    },
    Error,
    "encode-error: U+E569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE56A");
    },
    Error,
    "encode-error: U+E56A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE56B");
    },
    Error,
    "encode-error: U+E56B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE56C");
    },
    Error,
    "encode-error: U+E56C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE56D");
    },
    Error,
    "encode-error: U+E56D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE56E");
    },
    Error,
    "encode-error: U+E56E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE56F");
    },
    Error,
    "encode-error: U+E56F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE570");
    },
    Error,
    "encode-error: U+E570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE571");
    },
    Error,
    "encode-error: U+E571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE572");
    },
    Error,
    "encode-error: U+E572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE573");
    },
    Error,
    "encode-error: U+E573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE574");
    },
    Error,
    "encode-error: U+E574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE575");
    },
    Error,
    "encode-error: U+E575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE576");
    },
    Error,
    "encode-error: U+E576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE577");
    },
    Error,
    "encode-error: U+E577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE578");
    },
    Error,
    "encode-error: U+E578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE579");
    },
    Error,
    "encode-error: U+E579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE57A");
    },
    Error,
    "encode-error: U+E57A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE57B");
    },
    Error,
    "encode-error: U+E57B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE57C");
    },
    Error,
    "encode-error: U+E57C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE57D");
    },
    Error,
    "encode-error: U+E57D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE57E");
    },
    Error,
    "encode-error: U+E57E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE57F");
    },
    Error,
    "encode-error: U+E57F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE580");
    },
    Error,
    "encode-error: U+E580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE581");
    },
    Error,
    "encode-error: U+E581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE582");
    },
    Error,
    "encode-error: U+E582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE583");
    },
    Error,
    "encode-error: U+E583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE584");
    },
    Error,
    "encode-error: U+E584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE585");
    },
    Error,
    "encode-error: U+E585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE586");
    },
    Error,
    "encode-error: U+E586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE587");
    },
    Error,
    "encode-error: U+E587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE588");
    },
    Error,
    "encode-error: U+E588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE589");
    },
    Error,
    "encode-error: U+E589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE58A");
    },
    Error,
    "encode-error: U+E58A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE58B");
    },
    Error,
    "encode-error: U+E58B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE58C");
    },
    Error,
    "encode-error: U+E58C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE58D");
    },
    Error,
    "encode-error: U+E58D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE58E");
    },
    Error,
    "encode-error: U+E58E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE58F");
    },
    Error,
    "encode-error: U+E58F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE590");
    },
    Error,
    "encode-error: U+E590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE591");
    },
    Error,
    "encode-error: U+E591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE592");
    },
    Error,
    "encode-error: U+E592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE593");
    },
    Error,
    "encode-error: U+E593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE594");
    },
    Error,
    "encode-error: U+E594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE595");
    },
    Error,
    "encode-error: U+E595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE596");
    },
    Error,
    "encode-error: U+E596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE597");
    },
    Error,
    "encode-error: U+E597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE598");
    },
    Error,
    "encode-error: U+E598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE599");
    },
    Error,
    "encode-error: U+E599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE59A");
    },
    Error,
    "encode-error: U+E59A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE59B");
    },
    Error,
    "encode-error: U+E59B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE59C");
    },
    Error,
    "encode-error: U+E59C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE59D");
    },
    Error,
    "encode-error: U+E59D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE59E");
    },
    Error,
    "encode-error: U+E59E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE59F");
    },
    Error,
    "encode-error: U+E59F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5A0");
    },
    Error,
    "encode-error: U+E5A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5A1");
    },
    Error,
    "encode-error: U+E5A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5A2");
    },
    Error,
    "encode-error: U+E5A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5A3");
    },
    Error,
    "encode-error: U+E5A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5A4");
    },
    Error,
    "encode-error: U+E5A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5A5");
    },
    Error,
    "encode-error: U+E5A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5A6");
    },
    Error,
    "encode-error: U+E5A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5A7");
    },
    Error,
    "encode-error: U+E5A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5A8");
    },
    Error,
    "encode-error: U+E5A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5A9");
    },
    Error,
    "encode-error: U+E5A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5AA");
    },
    Error,
    "encode-error: U+E5AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5AB");
    },
    Error,
    "encode-error: U+E5AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5AC");
    },
    Error,
    "encode-error: U+E5AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5AD");
    },
    Error,
    "encode-error: U+E5AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5AE");
    },
    Error,
    "encode-error: U+E5AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5AF");
    },
    Error,
    "encode-error: U+E5AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5B0");
    },
    Error,
    "encode-error: U+E5B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5B1");
    },
    Error,
    "encode-error: U+E5B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5B2");
    },
    Error,
    "encode-error: U+E5B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5B3");
    },
    Error,
    "encode-error: U+E5B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5B4");
    },
    Error,
    "encode-error: U+E5B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5B5");
    },
    Error,
    "encode-error: U+E5B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5B6");
    },
    Error,
    "encode-error: U+E5B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5B7");
    },
    Error,
    "encode-error: U+E5B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5B8");
    },
    Error,
    "encode-error: U+E5B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5B9");
    },
    Error,
    "encode-error: U+E5B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5BA");
    },
    Error,
    "encode-error: U+E5BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5BB");
    },
    Error,
    "encode-error: U+E5BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5BC");
    },
    Error,
    "encode-error: U+E5BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5BD");
    },
    Error,
    "encode-error: U+E5BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5BE");
    },
    Error,
    "encode-error: U+E5BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5BF");
    },
    Error,
    "encode-error: U+E5BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5C0");
    },
    Error,
    "encode-error: U+E5C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5C1");
    },
    Error,
    "encode-error: U+E5C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5C2");
    },
    Error,
    "encode-error: U+E5C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5C3");
    },
    Error,
    "encode-error: U+E5C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5C4");
    },
    Error,
    "encode-error: U+E5C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5C5");
    },
    Error,
    "encode-error: U+E5C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5C6");
    },
    Error,
    "encode-error: U+E5C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5C7");
    },
    Error,
    "encode-error: U+E5C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5C8");
    },
    Error,
    "encode-error: U+E5C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5C9");
    },
    Error,
    "encode-error: U+E5C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5CA");
    },
    Error,
    "encode-error: U+E5CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5CB");
    },
    Error,
    "encode-error: U+E5CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5CC");
    },
    Error,
    "encode-error: U+E5CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5CD");
    },
    Error,
    "encode-error: U+E5CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5CE");
    },
    Error,
    "encode-error: U+E5CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5CF");
    },
    Error,
    "encode-error: U+E5CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5D0");
    },
    Error,
    "encode-error: U+E5D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5D1");
    },
    Error,
    "encode-error: U+E5D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5D2");
    },
    Error,
    "encode-error: U+E5D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5D3");
    },
    Error,
    "encode-error: U+E5D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5D4");
    },
    Error,
    "encode-error: U+E5D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5D5");
    },
    Error,
    "encode-error: U+E5D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5D6");
    },
    Error,
    "encode-error: U+E5D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5D7");
    },
    Error,
    "encode-error: U+E5D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5D8");
    },
    Error,
    "encode-error: U+E5D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5D9");
    },
    Error,
    "encode-error: U+E5D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5DA");
    },
    Error,
    "encode-error: U+E5DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5DB");
    },
    Error,
    "encode-error: U+E5DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5DC");
    },
    Error,
    "encode-error: U+E5DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5DD");
    },
    Error,
    "encode-error: U+E5DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5DE");
    },
    Error,
    "encode-error: U+E5DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5DF");
    },
    Error,
    "encode-error: U+E5DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5E0");
    },
    Error,
    "encode-error: U+E5E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5E1");
    },
    Error,
    "encode-error: U+E5E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5E2");
    },
    Error,
    "encode-error: U+E5E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5E3");
    },
    Error,
    "encode-error: U+E5E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5E4");
    },
    Error,
    "encode-error: U+E5E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5E5");
    },
    Error,
    "encode-error: U+E5E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5E6");
    },
    Error,
    "encode-error: U+E5E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5E7");
    },
    Error,
    "encode-error: U+E5E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5E8");
    },
    Error,
    "encode-error: U+E5E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5E9");
    },
    Error,
    "encode-error: U+E5E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5EA");
    },
    Error,
    "encode-error: U+E5EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5EB");
    },
    Error,
    "encode-error: U+E5EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5EC");
    },
    Error,
    "encode-error: U+E5EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5ED");
    },
    Error,
    "encode-error: U+E5ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5EE");
    },
    Error,
    "encode-error: U+E5EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5EF");
    },
    Error,
    "encode-error: U+E5EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5F0");
    },
    Error,
    "encode-error: U+E5F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5F1");
    },
    Error,
    "encode-error: U+E5F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5F2");
    },
    Error,
    "encode-error: U+E5F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5F3");
    },
    Error,
    "encode-error: U+E5F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5F4");
    },
    Error,
    "encode-error: U+E5F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5F5");
    },
    Error,
    "encode-error: U+E5F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5F6");
    },
    Error,
    "encode-error: U+E5F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5F7");
    },
    Error,
    "encode-error: U+E5F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5F8");
    },
    Error,
    "encode-error: U+E5F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5F9");
    },
    Error,
    "encode-error: U+E5F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5FA");
    },
    Error,
    "encode-error: U+E5FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5FB");
    },
    Error,
    "encode-error: U+E5FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5FC");
    },
    Error,
    "encode-error: U+E5FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5FD");
    },
    Error,
    "encode-error: U+E5FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5FE");
    },
    Error,
    "encode-error: U+E5FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE5FF");
    },
    Error,
    "encode-error: U+E5FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE600");
    },
    Error,
    "encode-error: U+E600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE601");
    },
    Error,
    "encode-error: U+E601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE602");
    },
    Error,
    "encode-error: U+E602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE603");
    },
    Error,
    "encode-error: U+E603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE604");
    },
    Error,
    "encode-error: U+E604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE605");
    },
    Error,
    "encode-error: U+E605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE606");
    },
    Error,
    "encode-error: U+E606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE607");
    },
    Error,
    "encode-error: U+E607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE608");
    },
    Error,
    "encode-error: U+E608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE609");
    },
    Error,
    "encode-error: U+E609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE60A");
    },
    Error,
    "encode-error: U+E60A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE60B");
    },
    Error,
    "encode-error: U+E60B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE60C");
    },
    Error,
    "encode-error: U+E60C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE60D");
    },
    Error,
    "encode-error: U+E60D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE60E");
    },
    Error,
    "encode-error: U+E60E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE60F");
    },
    Error,
    "encode-error: U+E60F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE610");
    },
    Error,
    "encode-error: U+E610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE611");
    },
    Error,
    "encode-error: U+E611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE612");
    },
    Error,
    "encode-error: U+E612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE613");
    },
    Error,
    "encode-error: U+E613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE614");
    },
    Error,
    "encode-error: U+E614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE615");
    },
    Error,
    "encode-error: U+E615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE616");
    },
    Error,
    "encode-error: U+E616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE617");
    },
    Error,
    "encode-error: U+E617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE618");
    },
    Error,
    "encode-error: U+E618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE619");
    },
    Error,
    "encode-error: U+E619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE61A");
    },
    Error,
    "encode-error: U+E61A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE61B");
    },
    Error,
    "encode-error: U+E61B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE61C");
    },
    Error,
    "encode-error: U+E61C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE61D");
    },
    Error,
    "encode-error: U+E61D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE61E");
    },
    Error,
    "encode-error: U+E61E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE61F");
    },
    Error,
    "encode-error: U+E61F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE620");
    },
    Error,
    "encode-error: U+E620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE621");
    },
    Error,
    "encode-error: U+E621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE622");
    },
    Error,
    "encode-error: U+E622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE623");
    },
    Error,
    "encode-error: U+E623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE624");
    },
    Error,
    "encode-error: U+E624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE625");
    },
    Error,
    "encode-error: U+E625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE626");
    },
    Error,
    "encode-error: U+E626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE627");
    },
    Error,
    "encode-error: U+E627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE628");
    },
    Error,
    "encode-error: U+E628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE629");
    },
    Error,
    "encode-error: U+E629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE62A");
    },
    Error,
    "encode-error: U+E62A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE62B");
    },
    Error,
    "encode-error: U+E62B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE62C");
    },
    Error,
    "encode-error: U+E62C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE62D");
    },
    Error,
    "encode-error: U+E62D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE62E");
    },
    Error,
    "encode-error: U+E62E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE62F");
    },
    Error,
    "encode-error: U+E62F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE630");
    },
    Error,
    "encode-error: U+E630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE631");
    },
    Error,
    "encode-error: U+E631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE632");
    },
    Error,
    "encode-error: U+E632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE633");
    },
    Error,
    "encode-error: U+E633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE634");
    },
    Error,
    "encode-error: U+E634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE635");
    },
    Error,
    "encode-error: U+E635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE636");
    },
    Error,
    "encode-error: U+E636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE637");
    },
    Error,
    "encode-error: U+E637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE638");
    },
    Error,
    "encode-error: U+E638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE639");
    },
    Error,
    "encode-error: U+E639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE63A");
    },
    Error,
    "encode-error: U+E63A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE63B");
    },
    Error,
    "encode-error: U+E63B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE63C");
    },
    Error,
    "encode-error: U+E63C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE63D");
    },
    Error,
    "encode-error: U+E63D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE63E");
    },
    Error,
    "encode-error: U+E63E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE63F");
    },
    Error,
    "encode-error: U+E63F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE640");
    },
    Error,
    "encode-error: U+E640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE641");
    },
    Error,
    "encode-error: U+E641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE642");
    },
    Error,
    "encode-error: U+E642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE643");
    },
    Error,
    "encode-error: U+E643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE644");
    },
    Error,
    "encode-error: U+E644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE645");
    },
    Error,
    "encode-error: U+E645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE646");
    },
    Error,
    "encode-error: U+E646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE647");
    },
    Error,
    "encode-error: U+E647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE648");
    },
    Error,
    "encode-error: U+E648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE649");
    },
    Error,
    "encode-error: U+E649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE64A");
    },
    Error,
    "encode-error: U+E64A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE64B");
    },
    Error,
    "encode-error: U+E64B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE64C");
    },
    Error,
    "encode-error: U+E64C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE64D");
    },
    Error,
    "encode-error: U+E64D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE64E");
    },
    Error,
    "encode-error: U+E64E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE64F");
    },
    Error,
    "encode-error: U+E64F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE650");
    },
    Error,
    "encode-error: U+E650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE651");
    },
    Error,
    "encode-error: U+E651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE652");
    },
    Error,
    "encode-error: U+E652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE653");
    },
    Error,
    "encode-error: U+E653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE654");
    },
    Error,
    "encode-error: U+E654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE655");
    },
    Error,
    "encode-error: U+E655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE656");
    },
    Error,
    "encode-error: U+E656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE657");
    },
    Error,
    "encode-error: U+E657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE658");
    },
    Error,
    "encode-error: U+E658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE659");
    },
    Error,
    "encode-error: U+E659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE65A");
    },
    Error,
    "encode-error: U+E65A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE65B");
    },
    Error,
    "encode-error: U+E65B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE65C");
    },
    Error,
    "encode-error: U+E65C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE65D");
    },
    Error,
    "encode-error: U+E65D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE65E");
    },
    Error,
    "encode-error: U+E65E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE65F");
    },
    Error,
    "encode-error: U+E65F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE660");
    },
    Error,
    "encode-error: U+E660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE661");
    },
    Error,
    "encode-error: U+E661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE662");
    },
    Error,
    "encode-error: U+E662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE663");
    },
    Error,
    "encode-error: U+E663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE664");
    },
    Error,
    "encode-error: U+E664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE665");
    },
    Error,
    "encode-error: U+E665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE666");
    },
    Error,
    "encode-error: U+E666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE667");
    },
    Error,
    "encode-error: U+E667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE668");
    },
    Error,
    "encode-error: U+E668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE669");
    },
    Error,
    "encode-error: U+E669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE66A");
    },
    Error,
    "encode-error: U+E66A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE66B");
    },
    Error,
    "encode-error: U+E66B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE66C");
    },
    Error,
    "encode-error: U+E66C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE66D");
    },
    Error,
    "encode-error: U+E66D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE66E");
    },
    Error,
    "encode-error: U+E66E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE66F");
    },
    Error,
    "encode-error: U+E66F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE670");
    },
    Error,
    "encode-error: U+E670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE671");
    },
    Error,
    "encode-error: U+E671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE672");
    },
    Error,
    "encode-error: U+E672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE673");
    },
    Error,
    "encode-error: U+E673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE674");
    },
    Error,
    "encode-error: U+E674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE675");
    },
    Error,
    "encode-error: U+E675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE676");
    },
    Error,
    "encode-error: U+E676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE677");
    },
    Error,
    "encode-error: U+E677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE678");
    },
    Error,
    "encode-error: U+E678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE679");
    },
    Error,
    "encode-error: U+E679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE67A");
    },
    Error,
    "encode-error: U+E67A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE67B");
    },
    Error,
    "encode-error: U+E67B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE67C");
    },
    Error,
    "encode-error: U+E67C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE67D");
    },
    Error,
    "encode-error: U+E67D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE67E");
    },
    Error,
    "encode-error: U+E67E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE67F");
    },
    Error,
    "encode-error: U+E67F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE680");
    },
    Error,
    "encode-error: U+E680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE681");
    },
    Error,
    "encode-error: U+E681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE682");
    },
    Error,
    "encode-error: U+E682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE683");
    },
    Error,
    "encode-error: U+E683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE684");
    },
    Error,
    "encode-error: U+E684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE685");
    },
    Error,
    "encode-error: U+E685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE686");
    },
    Error,
    "encode-error: U+E686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE687");
    },
    Error,
    "encode-error: U+E687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE688");
    },
    Error,
    "encode-error: U+E688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE689");
    },
    Error,
    "encode-error: U+E689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE68A");
    },
    Error,
    "encode-error: U+E68A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE68B");
    },
    Error,
    "encode-error: U+E68B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE68C");
    },
    Error,
    "encode-error: U+E68C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE68D");
    },
    Error,
    "encode-error: U+E68D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE68E");
    },
    Error,
    "encode-error: U+E68E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE68F");
    },
    Error,
    "encode-error: U+E68F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE690");
    },
    Error,
    "encode-error: U+E690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE691");
    },
    Error,
    "encode-error: U+E691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE692");
    },
    Error,
    "encode-error: U+E692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE693");
    },
    Error,
    "encode-error: U+E693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE694");
    },
    Error,
    "encode-error: U+E694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE695");
    },
    Error,
    "encode-error: U+E695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE696");
    },
    Error,
    "encode-error: U+E696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE697");
    },
    Error,
    "encode-error: U+E697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE698");
    },
    Error,
    "encode-error: U+E698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE699");
    },
    Error,
    "encode-error: U+E699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE69A");
    },
    Error,
    "encode-error: U+E69A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE69B");
    },
    Error,
    "encode-error: U+E69B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE69C");
    },
    Error,
    "encode-error: U+E69C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE69D");
    },
    Error,
    "encode-error: U+E69D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE69E");
    },
    Error,
    "encode-error: U+E69E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE69F");
    },
    Error,
    "encode-error: U+E69F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6A0");
    },
    Error,
    "encode-error: U+E6A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6A1");
    },
    Error,
    "encode-error: U+E6A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6A2");
    },
    Error,
    "encode-error: U+E6A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6A3");
    },
    Error,
    "encode-error: U+E6A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6A4");
    },
    Error,
    "encode-error: U+E6A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6A5");
    },
    Error,
    "encode-error: U+E6A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6A6");
    },
    Error,
    "encode-error: U+E6A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6A7");
    },
    Error,
    "encode-error: U+E6A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6A8");
    },
    Error,
    "encode-error: U+E6A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6A9");
    },
    Error,
    "encode-error: U+E6A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6AA");
    },
    Error,
    "encode-error: U+E6AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6AB");
    },
    Error,
    "encode-error: U+E6AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6AC");
    },
    Error,
    "encode-error: U+E6AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6AD");
    },
    Error,
    "encode-error: U+E6AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6AE");
    },
    Error,
    "encode-error: U+E6AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6AF");
    },
    Error,
    "encode-error: U+E6AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6B0");
    },
    Error,
    "encode-error: U+E6B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6B1");
    },
    Error,
    "encode-error: U+E6B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6B2");
    },
    Error,
    "encode-error: U+E6B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6B3");
    },
    Error,
    "encode-error: U+E6B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6B4");
    },
    Error,
    "encode-error: U+E6B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6B5");
    },
    Error,
    "encode-error: U+E6B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6B6");
    },
    Error,
    "encode-error: U+E6B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6B7");
    },
    Error,
    "encode-error: U+E6B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6B8");
    },
    Error,
    "encode-error: U+E6B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6B9");
    },
    Error,
    "encode-error: U+E6B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6BA");
    },
    Error,
    "encode-error: U+E6BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6BB");
    },
    Error,
    "encode-error: U+E6BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6BC");
    },
    Error,
    "encode-error: U+E6BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6BD");
    },
    Error,
    "encode-error: U+E6BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6BE");
    },
    Error,
    "encode-error: U+E6BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6BF");
    },
    Error,
    "encode-error: U+E6BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6C0");
    },
    Error,
    "encode-error: U+E6C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6C1");
    },
    Error,
    "encode-error: U+E6C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6C2");
    },
    Error,
    "encode-error: U+E6C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6C3");
    },
    Error,
    "encode-error: U+E6C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6C4");
    },
    Error,
    "encode-error: U+E6C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6C5");
    },
    Error,
    "encode-error: U+E6C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6C6");
    },
    Error,
    "encode-error: U+E6C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6C7");
    },
    Error,
    "encode-error: U+E6C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6C8");
    },
    Error,
    "encode-error: U+E6C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6C9");
    },
    Error,
    "encode-error: U+E6C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6CA");
    },
    Error,
    "encode-error: U+E6CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6CB");
    },
    Error,
    "encode-error: U+E6CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6CC");
    },
    Error,
    "encode-error: U+E6CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6CD");
    },
    Error,
    "encode-error: U+E6CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6CE");
    },
    Error,
    "encode-error: U+E6CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6CF");
    },
    Error,
    "encode-error: U+E6CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6D0");
    },
    Error,
    "encode-error: U+E6D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6D1");
    },
    Error,
    "encode-error: U+E6D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6D2");
    },
    Error,
    "encode-error: U+E6D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6D3");
    },
    Error,
    "encode-error: U+E6D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6D4");
    },
    Error,
    "encode-error: U+E6D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6D5");
    },
    Error,
    "encode-error: U+E6D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6D6");
    },
    Error,
    "encode-error: U+E6D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6D7");
    },
    Error,
    "encode-error: U+E6D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6D8");
    },
    Error,
    "encode-error: U+E6D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6D9");
    },
    Error,
    "encode-error: U+E6D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6DA");
    },
    Error,
    "encode-error: U+E6DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6DB");
    },
    Error,
    "encode-error: U+E6DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6DC");
    },
    Error,
    "encode-error: U+E6DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6DD");
    },
    Error,
    "encode-error: U+E6DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6DE");
    },
    Error,
    "encode-error: U+E6DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6DF");
    },
    Error,
    "encode-error: U+E6DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6E0");
    },
    Error,
    "encode-error: U+E6E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6E1");
    },
    Error,
    "encode-error: U+E6E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6E2");
    },
    Error,
    "encode-error: U+E6E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6E3");
    },
    Error,
    "encode-error: U+E6E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6E4");
    },
    Error,
    "encode-error: U+E6E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6E5");
    },
    Error,
    "encode-error: U+E6E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6E6");
    },
    Error,
    "encode-error: U+E6E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6E7");
    },
    Error,
    "encode-error: U+E6E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6E8");
    },
    Error,
    "encode-error: U+E6E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6E9");
    },
    Error,
    "encode-error: U+E6E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6EA");
    },
    Error,
    "encode-error: U+E6EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6EB");
    },
    Error,
    "encode-error: U+E6EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6EC");
    },
    Error,
    "encode-error: U+E6EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6ED");
    },
    Error,
    "encode-error: U+E6ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6EE");
    },
    Error,
    "encode-error: U+E6EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6EF");
    },
    Error,
    "encode-error: U+E6EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6F0");
    },
    Error,
    "encode-error: U+E6F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6F1");
    },
    Error,
    "encode-error: U+E6F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6F2");
    },
    Error,
    "encode-error: U+E6F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6F3");
    },
    Error,
    "encode-error: U+E6F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6F4");
    },
    Error,
    "encode-error: U+E6F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6F5");
    },
    Error,
    "encode-error: U+E6F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6F6");
    },
    Error,
    "encode-error: U+E6F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6F7");
    },
    Error,
    "encode-error: U+E6F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6F8");
    },
    Error,
    "encode-error: U+E6F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6F9");
    },
    Error,
    "encode-error: U+E6F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6FA");
    },
    Error,
    "encode-error: U+E6FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6FB");
    },
    Error,
    "encode-error: U+E6FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6FC");
    },
    Error,
    "encode-error: U+E6FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6FD");
    },
    Error,
    "encode-error: U+E6FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6FE");
    },
    Error,
    "encode-error: U+E6FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE6FF");
    },
    Error,
    "encode-error: U+E6FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE700");
    },
    Error,
    "encode-error: U+E700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE701");
    },
    Error,
    "encode-error: U+E701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE702");
    },
    Error,
    "encode-error: U+E702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE703");
    },
    Error,
    "encode-error: U+E703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE704");
    },
    Error,
    "encode-error: U+E704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE705");
    },
    Error,
    "encode-error: U+E705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE706");
    },
    Error,
    "encode-error: U+E706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE707");
    },
    Error,
    "encode-error: U+E707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE708");
    },
    Error,
    "encode-error: U+E708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE709");
    },
    Error,
    "encode-error: U+E709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE70A");
    },
    Error,
    "encode-error: U+E70A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE70B");
    },
    Error,
    "encode-error: U+E70B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE70C");
    },
    Error,
    "encode-error: U+E70C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE70D");
    },
    Error,
    "encode-error: U+E70D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE70E");
    },
    Error,
    "encode-error: U+E70E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE70F");
    },
    Error,
    "encode-error: U+E70F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE710");
    },
    Error,
    "encode-error: U+E710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE711");
    },
    Error,
    "encode-error: U+E711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE712");
    },
    Error,
    "encode-error: U+E712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE713");
    },
    Error,
    "encode-error: U+E713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE714");
    },
    Error,
    "encode-error: U+E714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE715");
    },
    Error,
    "encode-error: U+E715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE716");
    },
    Error,
    "encode-error: U+E716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE717");
    },
    Error,
    "encode-error: U+E717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE718");
    },
    Error,
    "encode-error: U+E718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE719");
    },
    Error,
    "encode-error: U+E719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE71A");
    },
    Error,
    "encode-error: U+E71A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE71B");
    },
    Error,
    "encode-error: U+E71B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE71C");
    },
    Error,
    "encode-error: U+E71C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE71D");
    },
    Error,
    "encode-error: U+E71D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE71E");
    },
    Error,
    "encode-error: U+E71E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE71F");
    },
    Error,
    "encode-error: U+E71F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE720");
    },
    Error,
    "encode-error: U+E720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE721");
    },
    Error,
    "encode-error: U+E721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE722");
    },
    Error,
    "encode-error: U+E722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE723");
    },
    Error,
    "encode-error: U+E723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE724");
    },
    Error,
    "encode-error: U+E724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE725");
    },
    Error,
    "encode-error: U+E725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE726");
    },
    Error,
    "encode-error: U+E726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE727");
    },
    Error,
    "encode-error: U+E727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE728");
    },
    Error,
    "encode-error: U+E728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE729");
    },
    Error,
    "encode-error: U+E729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE72A");
    },
    Error,
    "encode-error: U+E72A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE72B");
    },
    Error,
    "encode-error: U+E72B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE72C");
    },
    Error,
    "encode-error: U+E72C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE72D");
    },
    Error,
    "encode-error: U+E72D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE72E");
    },
    Error,
    "encode-error: U+E72E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE72F");
    },
    Error,
    "encode-error: U+E72F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE730");
    },
    Error,
    "encode-error: U+E730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE731");
    },
    Error,
    "encode-error: U+E731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE732");
    },
    Error,
    "encode-error: U+E732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE733");
    },
    Error,
    "encode-error: U+E733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE734");
    },
    Error,
    "encode-error: U+E734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE735");
    },
    Error,
    "encode-error: U+E735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE736");
    },
    Error,
    "encode-error: U+E736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE737");
    },
    Error,
    "encode-error: U+E737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE738");
    },
    Error,
    "encode-error: U+E738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE739");
    },
    Error,
    "encode-error: U+E739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE73A");
    },
    Error,
    "encode-error: U+E73A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE73B");
    },
    Error,
    "encode-error: U+E73B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE73C");
    },
    Error,
    "encode-error: U+E73C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE73D");
    },
    Error,
    "encode-error: U+E73D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE73E");
    },
    Error,
    "encode-error: U+E73E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE73F");
    },
    Error,
    "encode-error: U+E73F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE740");
    },
    Error,
    "encode-error: U+E740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE741");
    },
    Error,
    "encode-error: U+E741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE742");
    },
    Error,
    "encode-error: U+E742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE743");
    },
    Error,
    "encode-error: U+E743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE744");
    },
    Error,
    "encode-error: U+E744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE745");
    },
    Error,
    "encode-error: U+E745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE746");
    },
    Error,
    "encode-error: U+E746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE747");
    },
    Error,
    "encode-error: U+E747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE748");
    },
    Error,
    "encode-error: U+E748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE749");
    },
    Error,
    "encode-error: U+E749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE74A");
    },
    Error,
    "encode-error: U+E74A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE74B");
    },
    Error,
    "encode-error: U+E74B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE74C");
    },
    Error,
    "encode-error: U+E74C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE74D");
    },
    Error,
    "encode-error: U+E74D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE74E");
    },
    Error,
    "encode-error: U+E74E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE74F");
    },
    Error,
    "encode-error: U+E74F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE750");
    },
    Error,
    "encode-error: U+E750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE751");
    },
    Error,
    "encode-error: U+E751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE752");
    },
    Error,
    "encode-error: U+E752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE753");
    },
    Error,
    "encode-error: U+E753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE754");
    },
    Error,
    "encode-error: U+E754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE755");
    },
    Error,
    "encode-error: U+E755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE756");
    },
    Error,
    "encode-error: U+E756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE757");
    },
    Error,
    "encode-error: U+E757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE758");
    },
    Error,
    "encode-error: U+E758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE759");
    },
    Error,
    "encode-error: U+E759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE75A");
    },
    Error,
    "encode-error: U+E75A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE75B");
    },
    Error,
    "encode-error: U+E75B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE75C");
    },
    Error,
    "encode-error: U+E75C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE75D");
    },
    Error,
    "encode-error: U+E75D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE75E");
    },
    Error,
    "encode-error: U+E75E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE75F");
    },
    Error,
    "encode-error: U+E75F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE760");
    },
    Error,
    "encode-error: U+E760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE761");
    },
    Error,
    "encode-error: U+E761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE762");
    },
    Error,
    "encode-error: U+E762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE763");
    },
    Error,
    "encode-error: U+E763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE764");
    },
    Error,
    "encode-error: U+E764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE765");
    },
    Error,
    "encode-error: U+E765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE766");
    },
    Error,
    "encode-error: U+E766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE767");
    },
    Error,
    "encode-error: U+E767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE768");
    },
    Error,
    "encode-error: U+E768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE769");
    },
    Error,
    "encode-error: U+E769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE76A");
    },
    Error,
    "encode-error: U+E76A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE76B");
    },
    Error,
    "encode-error: U+E76B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE76C");
    },
    Error,
    "encode-error: U+E76C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE76D");
    },
    Error,
    "encode-error: U+E76D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE76E");
    },
    Error,
    "encode-error: U+E76E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE76F");
    },
    Error,
    "encode-error: U+E76F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE770");
    },
    Error,
    "encode-error: U+E770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE771");
    },
    Error,
    "encode-error: U+E771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE772");
    },
    Error,
    "encode-error: U+E772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE773");
    },
    Error,
    "encode-error: U+E773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE774");
    },
    Error,
    "encode-error: U+E774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE775");
    },
    Error,
    "encode-error: U+E775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE776");
    },
    Error,
    "encode-error: U+E776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE777");
    },
    Error,
    "encode-error: U+E777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE778");
    },
    Error,
    "encode-error: U+E778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE779");
    },
    Error,
    "encode-error: U+E779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE77A");
    },
    Error,
    "encode-error: U+E77A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE77B");
    },
    Error,
    "encode-error: U+E77B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE77C");
    },
    Error,
    "encode-error: U+E77C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE77D");
    },
    Error,
    "encode-error: U+E77D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE77E");
    },
    Error,
    "encode-error: U+E77E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE77F");
    },
    Error,
    "encode-error: U+E77F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE780");
    },
    Error,
    "encode-error: U+E780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE781");
    },
    Error,
    "encode-error: U+E781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE782");
    },
    Error,
    "encode-error: U+E782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE783");
    },
    Error,
    "encode-error: U+E783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE784");
    },
    Error,
    "encode-error: U+E784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE785");
    },
    Error,
    "encode-error: U+E785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE786");
    },
    Error,
    "encode-error: U+E786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE787");
    },
    Error,
    "encode-error: U+E787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE788");
    },
    Error,
    "encode-error: U+E788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE789");
    },
    Error,
    "encode-error: U+E789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE78A");
    },
    Error,
    "encode-error: U+E78A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE78B");
    },
    Error,
    "encode-error: U+E78B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE78C");
    },
    Error,
    "encode-error: U+E78C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE78D");
    },
    Error,
    "encode-error: U+E78D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE78E");
    },
    Error,
    "encode-error: U+E78E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE78F");
    },
    Error,
    "encode-error: U+E78F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE790");
    },
    Error,
    "encode-error: U+E790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE791");
    },
    Error,
    "encode-error: U+E791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE792");
    },
    Error,
    "encode-error: U+E792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE793");
    },
    Error,
    "encode-error: U+E793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE794");
    },
    Error,
    "encode-error: U+E794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE795");
    },
    Error,
    "encode-error: U+E795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE796");
    },
    Error,
    "encode-error: U+E796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE797");
    },
    Error,
    "encode-error: U+E797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE798");
    },
    Error,
    "encode-error: U+E798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE799");
    },
    Error,
    "encode-error: U+E799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE79A");
    },
    Error,
    "encode-error: U+E79A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE79B");
    },
    Error,
    "encode-error: U+E79B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE79C");
    },
    Error,
    "encode-error: U+E79C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE79D");
    },
    Error,
    "encode-error: U+E79D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE79E");
    },
    Error,
    "encode-error: U+E79E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE79F");
    },
    Error,
    "encode-error: U+E79F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7A0");
    },
    Error,
    "encode-error: U+E7A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7A1");
    },
    Error,
    "encode-error: U+E7A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7A2");
    },
    Error,
    "encode-error: U+E7A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7A3");
    },
    Error,
    "encode-error: U+E7A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7A4");
    },
    Error,
    "encode-error: U+E7A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7A5");
    },
    Error,
    "encode-error: U+E7A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7A6");
    },
    Error,
    "encode-error: U+E7A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7A7");
    },
    Error,
    "encode-error: U+E7A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7A8");
    },
    Error,
    "encode-error: U+E7A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7A9");
    },
    Error,
    "encode-error: U+E7A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7AA");
    },
    Error,
    "encode-error: U+E7AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7AB");
    },
    Error,
    "encode-error: U+E7AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7AC");
    },
    Error,
    "encode-error: U+E7AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7AD");
    },
    Error,
    "encode-error: U+E7AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7AE");
    },
    Error,
    "encode-error: U+E7AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7AF");
    },
    Error,
    "encode-error: U+E7AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7B0");
    },
    Error,
    "encode-error: U+E7B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7B1");
    },
    Error,
    "encode-error: U+E7B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7B2");
    },
    Error,
    "encode-error: U+E7B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7B3");
    },
    Error,
    "encode-error: U+E7B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7B4");
    },
    Error,
    "encode-error: U+E7B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7B5");
    },
    Error,
    "encode-error: U+E7B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7B6");
    },
    Error,
    "encode-error: U+E7B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7B7");
    },
    Error,
    "encode-error: U+E7B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7B8");
    },
    Error,
    "encode-error: U+E7B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7B9");
    },
    Error,
    "encode-error: U+E7B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7BA");
    },
    Error,
    "encode-error: U+E7BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7BB");
    },
    Error,
    "encode-error: U+E7BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7BC");
    },
    Error,
    "encode-error: U+E7BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7BD");
    },
    Error,
    "encode-error: U+E7BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7BE");
    },
    Error,
    "encode-error: U+E7BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7BF");
    },
    Error,
    "encode-error: U+E7BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7C0");
    },
    Error,
    "encode-error: U+E7C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7C1");
    },
    Error,
    "encode-error: U+E7C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7C2");
    },
    Error,
    "encode-error: U+E7C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7C3");
    },
    Error,
    "encode-error: U+E7C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7C4");
    },
    Error,
    "encode-error: U+E7C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7C5");
    },
    Error,
    "encode-error: U+E7C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7C6");
    },
    Error,
    "encode-error: U+E7C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7C7");
    },
    Error,
    "encode-error: U+E7C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7C8");
    },
    Error,
    "encode-error: U+E7C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7C9");
    },
    Error,
    "encode-error: U+E7C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7CA");
    },
    Error,
    "encode-error: U+E7CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7CB");
    },
    Error,
    "encode-error: U+E7CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7CC");
    },
    Error,
    "encode-error: U+E7CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7CD");
    },
    Error,
    "encode-error: U+E7CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7CE");
    },
    Error,
    "encode-error: U+E7CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7CF");
    },
    Error,
    "encode-error: U+E7CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7D0");
    },
    Error,
    "encode-error: U+E7D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7D1");
    },
    Error,
    "encode-error: U+E7D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7D2");
    },
    Error,
    "encode-error: U+E7D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7D3");
    },
    Error,
    "encode-error: U+E7D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7D4");
    },
    Error,
    "encode-error: U+E7D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7D5");
    },
    Error,
    "encode-error: U+E7D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7D6");
    },
    Error,
    "encode-error: U+E7D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7D7");
    },
    Error,
    "encode-error: U+E7D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7D8");
    },
    Error,
    "encode-error: U+E7D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7D9");
    },
    Error,
    "encode-error: U+E7D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7DA");
    },
    Error,
    "encode-error: U+E7DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7DB");
    },
    Error,
    "encode-error: U+E7DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7DC");
    },
    Error,
    "encode-error: U+E7DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7DD");
    },
    Error,
    "encode-error: U+E7DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7DE");
    },
    Error,
    "encode-error: U+E7DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7DF");
    },
    Error,
    "encode-error: U+E7DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7E0");
    },
    Error,
    "encode-error: U+E7E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7E1");
    },
    Error,
    "encode-error: U+E7E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7E2");
    },
    Error,
    "encode-error: U+E7E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7E3");
    },
    Error,
    "encode-error: U+E7E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7E4");
    },
    Error,
    "encode-error: U+E7E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7E5");
    },
    Error,
    "encode-error: U+E7E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7E6");
    },
    Error,
    "encode-error: U+E7E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7E7");
    },
    Error,
    "encode-error: U+E7E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7E8");
    },
    Error,
    "encode-error: U+E7E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7E9");
    },
    Error,
    "encode-error: U+E7E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7EA");
    },
    Error,
    "encode-error: U+E7EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7EB");
    },
    Error,
    "encode-error: U+E7EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7EC");
    },
    Error,
    "encode-error: U+E7EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7ED");
    },
    Error,
    "encode-error: U+E7ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7EE");
    },
    Error,
    "encode-error: U+E7EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7EF");
    },
    Error,
    "encode-error: U+E7EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7F0");
    },
    Error,
    "encode-error: U+E7F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7F1");
    },
    Error,
    "encode-error: U+E7F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7F2");
    },
    Error,
    "encode-error: U+E7F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7F3");
    },
    Error,
    "encode-error: U+E7F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7F4");
    },
    Error,
    "encode-error: U+E7F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7F5");
    },
    Error,
    "encode-error: U+E7F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7F6");
    },
    Error,
    "encode-error: U+E7F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7F7");
    },
    Error,
    "encode-error: U+E7F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7F8");
    },
    Error,
    "encode-error: U+E7F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7F9");
    },
    Error,
    "encode-error: U+E7F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7FA");
    },
    Error,
    "encode-error: U+E7FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7FB");
    },
    Error,
    "encode-error: U+E7FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7FC");
    },
    Error,
    "encode-error: U+E7FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7FD");
    },
    Error,
    "encode-error: U+E7FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7FE");
    },
    Error,
    "encode-error: U+E7FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE7FF");
    },
    Error,
    "encode-error: U+E7FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE800");
    },
    Error,
    "encode-error: U+E800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE801");
    },
    Error,
    "encode-error: U+E801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE802");
    },
    Error,
    "encode-error: U+E802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE803");
    },
    Error,
    "encode-error: U+E803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE804");
    },
    Error,
    "encode-error: U+E804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE805");
    },
    Error,
    "encode-error: U+E805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE806");
    },
    Error,
    "encode-error: U+E806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE807");
    },
    Error,
    "encode-error: U+E807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE808");
    },
    Error,
    "encode-error: U+E808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE809");
    },
    Error,
    "encode-error: U+E809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE80A");
    },
    Error,
    "encode-error: U+E80A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE80B");
    },
    Error,
    "encode-error: U+E80B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE80C");
    },
    Error,
    "encode-error: U+E80C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE80D");
    },
    Error,
    "encode-error: U+E80D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE80E");
    },
    Error,
    "encode-error: U+E80E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE80F");
    },
    Error,
    "encode-error: U+E80F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE810");
    },
    Error,
    "encode-error: U+E810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE811");
    },
    Error,
    "encode-error: U+E811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE812");
    },
    Error,
    "encode-error: U+E812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE813");
    },
    Error,
    "encode-error: U+E813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE814");
    },
    Error,
    "encode-error: U+E814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE815");
    },
    Error,
    "encode-error: U+E815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE816");
    },
    Error,
    "encode-error: U+E816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE817");
    },
    Error,
    "encode-error: U+E817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE818");
    },
    Error,
    "encode-error: U+E818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE819");
    },
    Error,
    "encode-error: U+E819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE81A");
    },
    Error,
    "encode-error: U+E81A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE81B");
    },
    Error,
    "encode-error: U+E81B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE81C");
    },
    Error,
    "encode-error: U+E81C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE81D");
    },
    Error,
    "encode-error: U+E81D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE81E");
    },
    Error,
    "encode-error: U+E81E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE81F");
    },
    Error,
    "encode-error: U+E81F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE820");
    },
    Error,
    "encode-error: U+E820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE821");
    },
    Error,
    "encode-error: U+E821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE822");
    },
    Error,
    "encode-error: U+E822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE823");
    },
    Error,
    "encode-error: U+E823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE824");
    },
    Error,
    "encode-error: U+E824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE825");
    },
    Error,
    "encode-error: U+E825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE826");
    },
    Error,
    "encode-error: U+E826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE827");
    },
    Error,
    "encode-error: U+E827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE828");
    },
    Error,
    "encode-error: U+E828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE829");
    },
    Error,
    "encode-error: U+E829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE82A");
    },
    Error,
    "encode-error: U+E82A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE82B");
    },
    Error,
    "encode-error: U+E82B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE82C");
    },
    Error,
    "encode-error: U+E82C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE82D");
    },
    Error,
    "encode-error: U+E82D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE82E");
    },
    Error,
    "encode-error: U+E82E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE82F");
    },
    Error,
    "encode-error: U+E82F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE830");
    },
    Error,
    "encode-error: U+E830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE831");
    },
    Error,
    "encode-error: U+E831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE832");
    },
    Error,
    "encode-error: U+E832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE833");
    },
    Error,
    "encode-error: U+E833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE834");
    },
    Error,
    "encode-error: U+E834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE835");
    },
    Error,
    "encode-error: U+E835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE836");
    },
    Error,
    "encode-error: U+E836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE837");
    },
    Error,
    "encode-error: U+E837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE838");
    },
    Error,
    "encode-error: U+E838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE839");
    },
    Error,
    "encode-error: U+E839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE83A");
    },
    Error,
    "encode-error: U+E83A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE83B");
    },
    Error,
    "encode-error: U+E83B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE83C");
    },
    Error,
    "encode-error: U+E83C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE83D");
    },
    Error,
    "encode-error: U+E83D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE83E");
    },
    Error,
    "encode-error: U+E83E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE83F");
    },
    Error,
    "encode-error: U+E83F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE840");
    },
    Error,
    "encode-error: U+E840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE841");
    },
    Error,
    "encode-error: U+E841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE842");
    },
    Error,
    "encode-error: U+E842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE843");
    },
    Error,
    "encode-error: U+E843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE844");
    },
    Error,
    "encode-error: U+E844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE845");
    },
    Error,
    "encode-error: U+E845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE846");
    },
    Error,
    "encode-error: U+E846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE847");
    },
    Error,
    "encode-error: U+E847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE848");
    },
    Error,
    "encode-error: U+E848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE849");
    },
    Error,
    "encode-error: U+E849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE84A");
    },
    Error,
    "encode-error: U+E84A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE84B");
    },
    Error,
    "encode-error: U+E84B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE84C");
    },
    Error,
    "encode-error: U+E84C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE84D");
    },
    Error,
    "encode-error: U+E84D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE84E");
    },
    Error,
    "encode-error: U+E84E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE84F");
    },
    Error,
    "encode-error: U+E84F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE850");
    },
    Error,
    "encode-error: U+E850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE851");
    },
    Error,
    "encode-error: U+E851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE852");
    },
    Error,
    "encode-error: U+E852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE853");
    },
    Error,
    "encode-error: U+E853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE854");
    },
    Error,
    "encode-error: U+E854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE855");
    },
    Error,
    "encode-error: U+E855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE856");
    },
    Error,
    "encode-error: U+E856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE857");
    },
    Error,
    "encode-error: U+E857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE858");
    },
    Error,
    "encode-error: U+E858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE859");
    },
    Error,
    "encode-error: U+E859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE85A");
    },
    Error,
    "encode-error: U+E85A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE85B");
    },
    Error,
    "encode-error: U+E85B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE85C");
    },
    Error,
    "encode-error: U+E85C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE85D");
    },
    Error,
    "encode-error: U+E85D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE85E");
    },
    Error,
    "encode-error: U+E85E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE85F");
    },
    Error,
    "encode-error: U+E85F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE860");
    },
    Error,
    "encode-error: U+E860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE861");
    },
    Error,
    "encode-error: U+E861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE862");
    },
    Error,
    "encode-error: U+E862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE863");
    },
    Error,
    "encode-error: U+E863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE864");
    },
    Error,
    "encode-error: U+E864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE865");
    },
    Error,
    "encode-error: U+E865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE866");
    },
    Error,
    "encode-error: U+E866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE867");
    },
    Error,
    "encode-error: U+E867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE868");
    },
    Error,
    "encode-error: U+E868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE869");
    },
    Error,
    "encode-error: U+E869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE86A");
    },
    Error,
    "encode-error: U+E86A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE86B");
    },
    Error,
    "encode-error: U+E86B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE86C");
    },
    Error,
    "encode-error: U+E86C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE86D");
    },
    Error,
    "encode-error: U+E86D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE86E");
    },
    Error,
    "encode-error: U+E86E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE86F");
    },
    Error,
    "encode-error: U+E86F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE870");
    },
    Error,
    "encode-error: U+E870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE871");
    },
    Error,
    "encode-error: U+E871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE872");
    },
    Error,
    "encode-error: U+E872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE873");
    },
    Error,
    "encode-error: U+E873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE874");
    },
    Error,
    "encode-error: U+E874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE875");
    },
    Error,
    "encode-error: U+E875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE876");
    },
    Error,
    "encode-error: U+E876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE877");
    },
    Error,
    "encode-error: U+E877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE878");
    },
    Error,
    "encode-error: U+E878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE879");
    },
    Error,
    "encode-error: U+E879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE87A");
    },
    Error,
    "encode-error: U+E87A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE87B");
    },
    Error,
    "encode-error: U+E87B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE87C");
    },
    Error,
    "encode-error: U+E87C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE87D");
    },
    Error,
    "encode-error: U+E87D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE87E");
    },
    Error,
    "encode-error: U+E87E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE87F");
    },
    Error,
    "encode-error: U+E87F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE880");
    },
    Error,
    "encode-error: U+E880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE881");
    },
    Error,
    "encode-error: U+E881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE882");
    },
    Error,
    "encode-error: U+E882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE883");
    },
    Error,
    "encode-error: U+E883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE884");
    },
    Error,
    "encode-error: U+E884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE885");
    },
    Error,
    "encode-error: U+E885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE886");
    },
    Error,
    "encode-error: U+E886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE887");
    },
    Error,
    "encode-error: U+E887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE888");
    },
    Error,
    "encode-error: U+E888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE889");
    },
    Error,
    "encode-error: U+E889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE88A");
    },
    Error,
    "encode-error: U+E88A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE88B");
    },
    Error,
    "encode-error: U+E88B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE88C");
    },
    Error,
    "encode-error: U+E88C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE88D");
    },
    Error,
    "encode-error: U+E88D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE88E");
    },
    Error,
    "encode-error: U+E88E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE88F");
    },
    Error,
    "encode-error: U+E88F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE890");
    },
    Error,
    "encode-error: U+E890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE891");
    },
    Error,
    "encode-error: U+E891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE892");
    },
    Error,
    "encode-error: U+E892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE893");
    },
    Error,
    "encode-error: U+E893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE894");
    },
    Error,
    "encode-error: U+E894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE895");
    },
    Error,
    "encode-error: U+E895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE896");
    },
    Error,
    "encode-error: U+E896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE897");
    },
    Error,
    "encode-error: U+E897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE898");
    },
    Error,
    "encode-error: U+E898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE899");
    },
    Error,
    "encode-error: U+E899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE89A");
    },
    Error,
    "encode-error: U+E89A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE89B");
    },
    Error,
    "encode-error: U+E89B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE89C");
    },
    Error,
    "encode-error: U+E89C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE89D");
    },
    Error,
    "encode-error: U+E89D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE89E");
    },
    Error,
    "encode-error: U+E89E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE89F");
    },
    Error,
    "encode-error: U+E89F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8A0");
    },
    Error,
    "encode-error: U+E8A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8A1");
    },
    Error,
    "encode-error: U+E8A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8A2");
    },
    Error,
    "encode-error: U+E8A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8A3");
    },
    Error,
    "encode-error: U+E8A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8A4");
    },
    Error,
    "encode-error: U+E8A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8A5");
    },
    Error,
    "encode-error: U+E8A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8A6");
    },
    Error,
    "encode-error: U+E8A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8A7");
    },
    Error,
    "encode-error: U+E8A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8A8");
    },
    Error,
    "encode-error: U+E8A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8A9");
    },
    Error,
    "encode-error: U+E8A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8AA");
    },
    Error,
    "encode-error: U+E8AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8AB");
    },
    Error,
    "encode-error: U+E8AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8AC");
    },
    Error,
    "encode-error: U+E8AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8AD");
    },
    Error,
    "encode-error: U+E8AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8AE");
    },
    Error,
    "encode-error: U+E8AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8AF");
    },
    Error,
    "encode-error: U+E8AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8B0");
    },
    Error,
    "encode-error: U+E8B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8B1");
    },
    Error,
    "encode-error: U+E8B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8B2");
    },
    Error,
    "encode-error: U+E8B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8B3");
    },
    Error,
    "encode-error: U+E8B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8B4");
    },
    Error,
    "encode-error: U+E8B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8B5");
    },
    Error,
    "encode-error: U+E8B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8B6");
    },
    Error,
    "encode-error: U+E8B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8B7");
    },
    Error,
    "encode-error: U+E8B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8B8");
    },
    Error,
    "encode-error: U+E8B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8B9");
    },
    Error,
    "encode-error: U+E8B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8BA");
    },
    Error,
    "encode-error: U+E8BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8BB");
    },
    Error,
    "encode-error: U+E8BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8BC");
    },
    Error,
    "encode-error: U+E8BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8BD");
    },
    Error,
    "encode-error: U+E8BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8BE");
    },
    Error,
    "encode-error: U+E8BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8BF");
    },
    Error,
    "encode-error: U+E8BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8C0");
    },
    Error,
    "encode-error: U+E8C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8C1");
    },
    Error,
    "encode-error: U+E8C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8C2");
    },
    Error,
    "encode-error: U+E8C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8C3");
    },
    Error,
    "encode-error: U+E8C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8C4");
    },
    Error,
    "encode-error: U+E8C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8C5");
    },
    Error,
    "encode-error: U+E8C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8C6");
    },
    Error,
    "encode-error: U+E8C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8C7");
    },
    Error,
    "encode-error: U+E8C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8C8");
    },
    Error,
    "encode-error: U+E8C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8C9");
    },
    Error,
    "encode-error: U+E8C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8CA");
    },
    Error,
    "encode-error: U+E8CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8CB");
    },
    Error,
    "encode-error: U+E8CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8CC");
    },
    Error,
    "encode-error: U+E8CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8CD");
    },
    Error,
    "encode-error: U+E8CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8CE");
    },
    Error,
    "encode-error: U+E8CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8CF");
    },
    Error,
    "encode-error: U+E8CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8D0");
    },
    Error,
    "encode-error: U+E8D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8D1");
    },
    Error,
    "encode-error: U+E8D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8D2");
    },
    Error,
    "encode-error: U+E8D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8D3");
    },
    Error,
    "encode-error: U+E8D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8D4");
    },
    Error,
    "encode-error: U+E8D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8D5");
    },
    Error,
    "encode-error: U+E8D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8D6");
    },
    Error,
    "encode-error: U+E8D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8D7");
    },
    Error,
    "encode-error: U+E8D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8D8");
    },
    Error,
    "encode-error: U+E8D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8D9");
    },
    Error,
    "encode-error: U+E8D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8DA");
    },
    Error,
    "encode-error: U+E8DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8DB");
    },
    Error,
    "encode-error: U+E8DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8DC");
    },
    Error,
    "encode-error: U+E8DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8DD");
    },
    Error,
    "encode-error: U+E8DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8DE");
    },
    Error,
    "encode-error: U+E8DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8DF");
    },
    Error,
    "encode-error: U+E8DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8E0");
    },
    Error,
    "encode-error: U+E8E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8E1");
    },
    Error,
    "encode-error: U+E8E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8E2");
    },
    Error,
    "encode-error: U+E8E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8E3");
    },
    Error,
    "encode-error: U+E8E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8E4");
    },
    Error,
    "encode-error: U+E8E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8E5");
    },
    Error,
    "encode-error: U+E8E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8E6");
    },
    Error,
    "encode-error: U+E8E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8E7");
    },
    Error,
    "encode-error: U+E8E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8E8");
    },
    Error,
    "encode-error: U+E8E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8E9");
    },
    Error,
    "encode-error: U+E8E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8EA");
    },
    Error,
    "encode-error: U+E8EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8EB");
    },
    Error,
    "encode-error: U+E8EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8EC");
    },
    Error,
    "encode-error: U+E8EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8ED");
    },
    Error,
    "encode-error: U+E8ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8EE");
    },
    Error,
    "encode-error: U+E8EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8EF");
    },
    Error,
    "encode-error: U+E8EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8F0");
    },
    Error,
    "encode-error: U+E8F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8F1");
    },
    Error,
    "encode-error: U+E8F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8F2");
    },
    Error,
    "encode-error: U+E8F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8F3");
    },
    Error,
    "encode-error: U+E8F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8F4");
    },
    Error,
    "encode-error: U+E8F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8F5");
    },
    Error,
    "encode-error: U+E8F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8F6");
    },
    Error,
    "encode-error: U+E8F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8F7");
    },
    Error,
    "encode-error: U+E8F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8F8");
    },
    Error,
    "encode-error: U+E8F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8F9");
    },
    Error,
    "encode-error: U+E8F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8FA");
    },
    Error,
    "encode-error: U+E8FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8FB");
    },
    Error,
    "encode-error: U+E8FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8FC");
    },
    Error,
    "encode-error: U+E8FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8FD");
    },
    Error,
    "encode-error: U+E8FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8FE");
    },
    Error,
    "encode-error: U+E8FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE8FF");
    },
    Error,
    "encode-error: U+E8FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE900");
    },
    Error,
    "encode-error: U+E900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE901");
    },
    Error,
    "encode-error: U+E901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE902");
    },
    Error,
    "encode-error: U+E902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE903");
    },
    Error,
    "encode-error: U+E903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE904");
    },
    Error,
    "encode-error: U+E904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE905");
    },
    Error,
    "encode-error: U+E905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE906");
    },
    Error,
    "encode-error: U+E906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE907");
    },
    Error,
    "encode-error: U+E907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE908");
    },
    Error,
    "encode-error: U+E908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE909");
    },
    Error,
    "encode-error: U+E909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE90A");
    },
    Error,
    "encode-error: U+E90A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE90B");
    },
    Error,
    "encode-error: U+E90B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE90C");
    },
    Error,
    "encode-error: U+E90C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE90D");
    },
    Error,
    "encode-error: U+E90D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE90E");
    },
    Error,
    "encode-error: U+E90E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE90F");
    },
    Error,
    "encode-error: U+E90F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE910");
    },
    Error,
    "encode-error: U+E910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE911");
    },
    Error,
    "encode-error: U+E911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE912");
    },
    Error,
    "encode-error: U+E912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE913");
    },
    Error,
    "encode-error: U+E913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE914");
    },
    Error,
    "encode-error: U+E914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE915");
    },
    Error,
    "encode-error: U+E915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE916");
    },
    Error,
    "encode-error: U+E916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE917");
    },
    Error,
    "encode-error: U+E917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE918");
    },
    Error,
    "encode-error: U+E918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE919");
    },
    Error,
    "encode-error: U+E919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE91A");
    },
    Error,
    "encode-error: U+E91A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE91B");
    },
    Error,
    "encode-error: U+E91B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE91C");
    },
    Error,
    "encode-error: U+E91C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE91D");
    },
    Error,
    "encode-error: U+E91D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE91E");
    },
    Error,
    "encode-error: U+E91E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE91F");
    },
    Error,
    "encode-error: U+E91F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE920");
    },
    Error,
    "encode-error: U+E920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE921");
    },
    Error,
    "encode-error: U+E921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE922");
    },
    Error,
    "encode-error: U+E922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE923");
    },
    Error,
    "encode-error: U+E923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE924");
    },
    Error,
    "encode-error: U+E924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE925");
    },
    Error,
    "encode-error: U+E925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE926");
    },
    Error,
    "encode-error: U+E926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE927");
    },
    Error,
    "encode-error: U+E927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE928");
    },
    Error,
    "encode-error: U+E928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE929");
    },
    Error,
    "encode-error: U+E929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE92A");
    },
    Error,
    "encode-error: U+E92A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE92B");
    },
    Error,
    "encode-error: U+E92B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE92C");
    },
    Error,
    "encode-error: U+E92C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE92D");
    },
    Error,
    "encode-error: U+E92D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE92E");
    },
    Error,
    "encode-error: U+E92E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE92F");
    },
    Error,
    "encode-error: U+E92F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE930");
    },
    Error,
    "encode-error: U+E930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE931");
    },
    Error,
    "encode-error: U+E931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE932");
    },
    Error,
    "encode-error: U+E932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE933");
    },
    Error,
    "encode-error: U+E933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE934");
    },
    Error,
    "encode-error: U+E934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE935");
    },
    Error,
    "encode-error: U+E935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE936");
    },
    Error,
    "encode-error: U+E936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE937");
    },
    Error,
    "encode-error: U+E937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE938");
    },
    Error,
    "encode-error: U+E938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE939");
    },
    Error,
    "encode-error: U+E939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE93A");
    },
    Error,
    "encode-error: U+E93A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE93B");
    },
    Error,
    "encode-error: U+E93B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE93C");
    },
    Error,
    "encode-error: U+E93C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE93D");
    },
    Error,
    "encode-error: U+E93D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE93E");
    },
    Error,
    "encode-error: U+E93E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE93F");
    },
    Error,
    "encode-error: U+E93F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE940");
    },
    Error,
    "encode-error: U+E940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE941");
    },
    Error,
    "encode-error: U+E941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE942");
    },
    Error,
    "encode-error: U+E942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE943");
    },
    Error,
    "encode-error: U+E943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE944");
    },
    Error,
    "encode-error: U+E944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE945");
    },
    Error,
    "encode-error: U+E945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE946");
    },
    Error,
    "encode-error: U+E946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE947");
    },
    Error,
    "encode-error: U+E947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE948");
    },
    Error,
    "encode-error: U+E948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE949");
    },
    Error,
    "encode-error: U+E949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE94A");
    },
    Error,
    "encode-error: U+E94A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE94B");
    },
    Error,
    "encode-error: U+E94B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE94C");
    },
    Error,
    "encode-error: U+E94C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE94D");
    },
    Error,
    "encode-error: U+E94D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE94E");
    },
    Error,
    "encode-error: U+E94E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE94F");
    },
    Error,
    "encode-error: U+E94F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE950");
    },
    Error,
    "encode-error: U+E950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE951");
    },
    Error,
    "encode-error: U+E951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE952");
    },
    Error,
    "encode-error: U+E952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE953");
    },
    Error,
    "encode-error: U+E953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE954");
    },
    Error,
    "encode-error: U+E954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE955");
    },
    Error,
    "encode-error: U+E955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE956");
    },
    Error,
    "encode-error: U+E956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE957");
    },
    Error,
    "encode-error: U+E957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE958");
    },
    Error,
    "encode-error: U+E958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE959");
    },
    Error,
    "encode-error: U+E959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE95A");
    },
    Error,
    "encode-error: U+E95A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE95B");
    },
    Error,
    "encode-error: U+E95B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE95C");
    },
    Error,
    "encode-error: U+E95C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE95D");
    },
    Error,
    "encode-error: U+E95D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE95E");
    },
    Error,
    "encode-error: U+E95E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE95F");
    },
    Error,
    "encode-error: U+E95F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE960");
    },
    Error,
    "encode-error: U+E960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE961");
    },
    Error,
    "encode-error: U+E961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE962");
    },
    Error,
    "encode-error: U+E962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE963");
    },
    Error,
    "encode-error: U+E963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE964");
    },
    Error,
    "encode-error: U+E964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE965");
    },
    Error,
    "encode-error: U+E965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE966");
    },
    Error,
    "encode-error: U+E966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE967");
    },
    Error,
    "encode-error: U+E967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE968");
    },
    Error,
    "encode-error: U+E968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE969");
    },
    Error,
    "encode-error: U+E969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE96A");
    },
    Error,
    "encode-error: U+E96A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE96B");
    },
    Error,
    "encode-error: U+E96B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE96C");
    },
    Error,
    "encode-error: U+E96C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE96D");
    },
    Error,
    "encode-error: U+E96D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE96E");
    },
    Error,
    "encode-error: U+E96E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE96F");
    },
    Error,
    "encode-error: U+E96F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE970");
    },
    Error,
    "encode-error: U+E970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE971");
    },
    Error,
    "encode-error: U+E971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE972");
    },
    Error,
    "encode-error: U+E972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE973");
    },
    Error,
    "encode-error: U+E973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE974");
    },
    Error,
    "encode-error: U+E974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE975");
    },
    Error,
    "encode-error: U+E975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE976");
    },
    Error,
    "encode-error: U+E976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE977");
    },
    Error,
    "encode-error: U+E977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE978");
    },
    Error,
    "encode-error: U+E978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE979");
    },
    Error,
    "encode-error: U+E979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE97A");
    },
    Error,
    "encode-error: U+E97A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE97B");
    },
    Error,
    "encode-error: U+E97B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE97C");
    },
    Error,
    "encode-error: U+E97C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE97D");
    },
    Error,
    "encode-error: U+E97D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE97E");
    },
    Error,
    "encode-error: U+E97E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE97F");
    },
    Error,
    "encode-error: U+E97F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE980");
    },
    Error,
    "encode-error: U+E980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE981");
    },
    Error,
    "encode-error: U+E981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE982");
    },
    Error,
    "encode-error: U+E982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE983");
    },
    Error,
    "encode-error: U+E983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE984");
    },
    Error,
    "encode-error: U+E984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE985");
    },
    Error,
    "encode-error: U+E985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE986");
    },
    Error,
    "encode-error: U+E986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE987");
    },
    Error,
    "encode-error: U+E987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE988");
    },
    Error,
    "encode-error: U+E988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE989");
    },
    Error,
    "encode-error: U+E989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE98A");
    },
    Error,
    "encode-error: U+E98A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE98B");
    },
    Error,
    "encode-error: U+E98B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE98C");
    },
    Error,
    "encode-error: U+E98C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE98D");
    },
    Error,
    "encode-error: U+E98D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE98E");
    },
    Error,
    "encode-error: U+E98E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE98F");
    },
    Error,
    "encode-error: U+E98F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE990");
    },
    Error,
    "encode-error: U+E990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE991");
    },
    Error,
    "encode-error: U+E991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE992");
    },
    Error,
    "encode-error: U+E992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE993");
    },
    Error,
    "encode-error: U+E993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE994");
    },
    Error,
    "encode-error: U+E994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE995");
    },
    Error,
    "encode-error: U+E995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE996");
    },
    Error,
    "encode-error: U+E996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE997");
    },
    Error,
    "encode-error: U+E997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE998");
    },
    Error,
    "encode-error: U+E998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE999");
    },
    Error,
    "encode-error: U+E999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE99A");
    },
    Error,
    "encode-error: U+E99A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE99B");
    },
    Error,
    "encode-error: U+E99B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE99C");
    },
    Error,
    "encode-error: U+E99C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE99D");
    },
    Error,
    "encode-error: U+E99D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE99E");
    },
    Error,
    "encode-error: U+E99E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE99F");
    },
    Error,
    "encode-error: U+E99F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9A0");
    },
    Error,
    "encode-error: U+E9A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9A1");
    },
    Error,
    "encode-error: U+E9A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9A2");
    },
    Error,
    "encode-error: U+E9A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9A3");
    },
    Error,
    "encode-error: U+E9A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9A4");
    },
    Error,
    "encode-error: U+E9A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9A5");
    },
    Error,
    "encode-error: U+E9A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9A6");
    },
    Error,
    "encode-error: U+E9A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9A7");
    },
    Error,
    "encode-error: U+E9A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9A8");
    },
    Error,
    "encode-error: U+E9A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9A9");
    },
    Error,
    "encode-error: U+E9A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9AA");
    },
    Error,
    "encode-error: U+E9AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9AB");
    },
    Error,
    "encode-error: U+E9AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9AC");
    },
    Error,
    "encode-error: U+E9AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9AD");
    },
    Error,
    "encode-error: U+E9AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9AE");
    },
    Error,
    "encode-error: U+E9AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9AF");
    },
    Error,
    "encode-error: U+E9AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9B0");
    },
    Error,
    "encode-error: U+E9B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9B1");
    },
    Error,
    "encode-error: U+E9B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9B2");
    },
    Error,
    "encode-error: U+E9B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9B3");
    },
    Error,
    "encode-error: U+E9B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9B4");
    },
    Error,
    "encode-error: U+E9B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9B5");
    },
    Error,
    "encode-error: U+E9B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9B6");
    },
    Error,
    "encode-error: U+E9B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9B7");
    },
    Error,
    "encode-error: U+E9B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9B8");
    },
    Error,
    "encode-error: U+E9B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9B9");
    },
    Error,
    "encode-error: U+E9B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9BA");
    },
    Error,
    "encode-error: U+E9BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9BB");
    },
    Error,
    "encode-error: U+E9BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9BC");
    },
    Error,
    "encode-error: U+E9BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9BD");
    },
    Error,
    "encode-error: U+E9BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9BE");
    },
    Error,
    "encode-error: U+E9BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9BF");
    },
    Error,
    "encode-error: U+E9BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9C0");
    },
    Error,
    "encode-error: U+E9C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9C1");
    },
    Error,
    "encode-error: U+E9C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9C2");
    },
    Error,
    "encode-error: U+E9C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9C3");
    },
    Error,
    "encode-error: U+E9C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9C4");
    },
    Error,
    "encode-error: U+E9C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9C5");
    },
    Error,
    "encode-error: U+E9C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9C6");
    },
    Error,
    "encode-error: U+E9C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9C7");
    },
    Error,
    "encode-error: U+E9C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9C8");
    },
    Error,
    "encode-error: U+E9C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9C9");
    },
    Error,
    "encode-error: U+E9C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9CA");
    },
    Error,
    "encode-error: U+E9CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9CB");
    },
    Error,
    "encode-error: U+E9CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9CC");
    },
    Error,
    "encode-error: U+E9CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9CD");
    },
    Error,
    "encode-error: U+E9CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9CE");
    },
    Error,
    "encode-error: U+E9CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9CF");
    },
    Error,
    "encode-error: U+E9CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9D0");
    },
    Error,
    "encode-error: U+E9D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9D1");
    },
    Error,
    "encode-error: U+E9D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9D2");
    },
    Error,
    "encode-error: U+E9D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9D3");
    },
    Error,
    "encode-error: U+E9D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9D4");
    },
    Error,
    "encode-error: U+E9D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9D5");
    },
    Error,
    "encode-error: U+E9D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9D6");
    },
    Error,
    "encode-error: U+E9D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9D7");
    },
    Error,
    "encode-error: U+E9D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9D8");
    },
    Error,
    "encode-error: U+E9D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9D9");
    },
    Error,
    "encode-error: U+E9D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9DA");
    },
    Error,
    "encode-error: U+E9DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9DB");
    },
    Error,
    "encode-error: U+E9DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9DC");
    },
    Error,
    "encode-error: U+E9DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9DD");
    },
    Error,
    "encode-error: U+E9DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9DE");
    },
    Error,
    "encode-error: U+E9DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9DF");
    },
    Error,
    "encode-error: U+E9DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9E0");
    },
    Error,
    "encode-error: U+E9E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9E1");
    },
    Error,
    "encode-error: U+E9E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9E2");
    },
    Error,
    "encode-error: U+E9E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9E3");
    },
    Error,
    "encode-error: U+E9E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9E4");
    },
    Error,
    "encode-error: U+E9E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9E5");
    },
    Error,
    "encode-error: U+E9E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9E6");
    },
    Error,
    "encode-error: U+E9E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9E7");
    },
    Error,
    "encode-error: U+E9E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9E8");
    },
    Error,
    "encode-error: U+E9E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9E9");
    },
    Error,
    "encode-error: U+E9E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9EA");
    },
    Error,
    "encode-error: U+E9EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9EB");
    },
    Error,
    "encode-error: U+E9EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9EC");
    },
    Error,
    "encode-error: U+E9EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9ED");
    },
    Error,
    "encode-error: U+E9ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9EE");
    },
    Error,
    "encode-error: U+E9EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9EF");
    },
    Error,
    "encode-error: U+E9EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9F0");
    },
    Error,
    "encode-error: U+E9F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9F1");
    },
    Error,
    "encode-error: U+E9F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9F2");
    },
    Error,
    "encode-error: U+E9F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9F3");
    },
    Error,
    "encode-error: U+E9F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9F4");
    },
    Error,
    "encode-error: U+E9F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9F5");
    },
    Error,
    "encode-error: U+E9F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9F6");
    },
    Error,
    "encode-error: U+E9F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9F7");
    },
    Error,
    "encode-error: U+E9F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9F8");
    },
    Error,
    "encode-error: U+E9F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9F9");
    },
    Error,
    "encode-error: U+E9F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9FA");
    },
    Error,
    "encode-error: U+E9FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9FB");
    },
    Error,
    "encode-error: U+E9FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9FC");
    },
    Error,
    "encode-error: U+E9FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9FD");
    },
    Error,
    "encode-error: U+E9FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9FE");
    },
    Error,
    "encode-error: U+E9FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uE9FF");
    },
    Error,
    "encode-error: U+E9FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA00");
    },
    Error,
    "encode-error: U+EA00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA01");
    },
    Error,
    "encode-error: U+EA01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA02");
    },
    Error,
    "encode-error: U+EA02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA03");
    },
    Error,
    "encode-error: U+EA03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA04");
    },
    Error,
    "encode-error: U+EA04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA05");
    },
    Error,
    "encode-error: U+EA05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA06");
    },
    Error,
    "encode-error: U+EA06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA07");
    },
    Error,
    "encode-error: U+EA07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA08");
    },
    Error,
    "encode-error: U+EA08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA09");
    },
    Error,
    "encode-error: U+EA09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA0A");
    },
    Error,
    "encode-error: U+EA0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA0B");
    },
    Error,
    "encode-error: U+EA0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA0C");
    },
    Error,
    "encode-error: U+EA0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA0D");
    },
    Error,
    "encode-error: U+EA0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA0E");
    },
    Error,
    "encode-error: U+EA0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA0F");
    },
    Error,
    "encode-error: U+EA0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA10");
    },
    Error,
    "encode-error: U+EA10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA11");
    },
    Error,
    "encode-error: U+EA11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA12");
    },
    Error,
    "encode-error: U+EA12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA13");
    },
    Error,
    "encode-error: U+EA13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA14");
    },
    Error,
    "encode-error: U+EA14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA15");
    },
    Error,
    "encode-error: U+EA15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA16");
    },
    Error,
    "encode-error: U+EA16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA17");
    },
    Error,
    "encode-error: U+EA17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA18");
    },
    Error,
    "encode-error: U+EA18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA19");
    },
    Error,
    "encode-error: U+EA19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA1A");
    },
    Error,
    "encode-error: U+EA1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA1B");
    },
    Error,
    "encode-error: U+EA1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA1C");
    },
    Error,
    "encode-error: U+EA1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA1D");
    },
    Error,
    "encode-error: U+EA1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA1E");
    },
    Error,
    "encode-error: U+EA1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA1F");
    },
    Error,
    "encode-error: U+EA1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA20");
    },
    Error,
    "encode-error: U+EA20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA21");
    },
    Error,
    "encode-error: U+EA21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA22");
    },
    Error,
    "encode-error: U+EA22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA23");
    },
    Error,
    "encode-error: U+EA23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA24");
    },
    Error,
    "encode-error: U+EA24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA25");
    },
    Error,
    "encode-error: U+EA25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA26");
    },
    Error,
    "encode-error: U+EA26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA27");
    },
    Error,
    "encode-error: U+EA27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA28");
    },
    Error,
    "encode-error: U+EA28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA29");
    },
    Error,
    "encode-error: U+EA29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA2A");
    },
    Error,
    "encode-error: U+EA2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA2B");
    },
    Error,
    "encode-error: U+EA2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA2C");
    },
    Error,
    "encode-error: U+EA2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA2D");
    },
    Error,
    "encode-error: U+EA2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA2E");
    },
    Error,
    "encode-error: U+EA2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA2F");
    },
    Error,
    "encode-error: U+EA2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA30");
    },
    Error,
    "encode-error: U+EA30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA31");
    },
    Error,
    "encode-error: U+EA31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA32");
    },
    Error,
    "encode-error: U+EA32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA33");
    },
    Error,
    "encode-error: U+EA33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA34");
    },
    Error,
    "encode-error: U+EA34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA35");
    },
    Error,
    "encode-error: U+EA35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA36");
    },
    Error,
    "encode-error: U+EA36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA37");
    },
    Error,
    "encode-error: U+EA37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA38");
    },
    Error,
    "encode-error: U+EA38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA39");
    },
    Error,
    "encode-error: U+EA39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA3A");
    },
    Error,
    "encode-error: U+EA3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA3B");
    },
    Error,
    "encode-error: U+EA3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA3C");
    },
    Error,
    "encode-error: U+EA3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA3D");
    },
    Error,
    "encode-error: U+EA3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA3E");
    },
    Error,
    "encode-error: U+EA3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA3F");
    },
    Error,
    "encode-error: U+EA3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA40");
    },
    Error,
    "encode-error: U+EA40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA41");
    },
    Error,
    "encode-error: U+EA41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA42");
    },
    Error,
    "encode-error: U+EA42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA43");
    },
    Error,
    "encode-error: U+EA43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA44");
    },
    Error,
    "encode-error: U+EA44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA45");
    },
    Error,
    "encode-error: U+EA45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA46");
    },
    Error,
    "encode-error: U+EA46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA47");
    },
    Error,
    "encode-error: U+EA47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA48");
    },
    Error,
    "encode-error: U+EA48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA49");
    },
    Error,
    "encode-error: U+EA49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA4A");
    },
    Error,
    "encode-error: U+EA4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA4B");
    },
    Error,
    "encode-error: U+EA4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA4C");
    },
    Error,
    "encode-error: U+EA4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA4D");
    },
    Error,
    "encode-error: U+EA4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA4E");
    },
    Error,
    "encode-error: U+EA4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA4F");
    },
    Error,
    "encode-error: U+EA4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA50");
    },
    Error,
    "encode-error: U+EA50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA51");
    },
    Error,
    "encode-error: U+EA51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA52");
    },
    Error,
    "encode-error: U+EA52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA53");
    },
    Error,
    "encode-error: U+EA53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA54");
    },
    Error,
    "encode-error: U+EA54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA55");
    },
    Error,
    "encode-error: U+EA55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA56");
    },
    Error,
    "encode-error: U+EA56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA57");
    },
    Error,
    "encode-error: U+EA57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA58");
    },
    Error,
    "encode-error: U+EA58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA59");
    },
    Error,
    "encode-error: U+EA59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA5A");
    },
    Error,
    "encode-error: U+EA5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA5B");
    },
    Error,
    "encode-error: U+EA5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA5C");
    },
    Error,
    "encode-error: U+EA5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA5D");
    },
    Error,
    "encode-error: U+EA5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA5E");
    },
    Error,
    "encode-error: U+EA5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA5F");
    },
    Error,
    "encode-error: U+EA5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA60");
    },
    Error,
    "encode-error: U+EA60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA61");
    },
    Error,
    "encode-error: U+EA61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA62");
    },
    Error,
    "encode-error: U+EA62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA63");
    },
    Error,
    "encode-error: U+EA63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA64");
    },
    Error,
    "encode-error: U+EA64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA65");
    },
    Error,
    "encode-error: U+EA65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA66");
    },
    Error,
    "encode-error: U+EA66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA67");
    },
    Error,
    "encode-error: U+EA67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA68");
    },
    Error,
    "encode-error: U+EA68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA69");
    },
    Error,
    "encode-error: U+EA69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA6A");
    },
    Error,
    "encode-error: U+EA6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA6B");
    },
    Error,
    "encode-error: U+EA6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA6C");
    },
    Error,
    "encode-error: U+EA6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA6D");
    },
    Error,
    "encode-error: U+EA6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA6E");
    },
    Error,
    "encode-error: U+EA6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA6F");
    },
    Error,
    "encode-error: U+EA6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA70");
    },
    Error,
    "encode-error: U+EA70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA71");
    },
    Error,
    "encode-error: U+EA71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA72");
    },
    Error,
    "encode-error: U+EA72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA73");
    },
    Error,
    "encode-error: U+EA73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA74");
    },
    Error,
    "encode-error: U+EA74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA75");
    },
    Error,
    "encode-error: U+EA75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA76");
    },
    Error,
    "encode-error: U+EA76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA77");
    },
    Error,
    "encode-error: U+EA77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA78");
    },
    Error,
    "encode-error: U+EA78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA79");
    },
    Error,
    "encode-error: U+EA79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA7A");
    },
    Error,
    "encode-error: U+EA7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA7B");
    },
    Error,
    "encode-error: U+EA7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA7C");
    },
    Error,
    "encode-error: U+EA7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA7D");
    },
    Error,
    "encode-error: U+EA7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA7E");
    },
    Error,
    "encode-error: U+EA7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA7F");
    },
    Error,
    "encode-error: U+EA7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA80");
    },
    Error,
    "encode-error: U+EA80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA81");
    },
    Error,
    "encode-error: U+EA81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA82");
    },
    Error,
    "encode-error: U+EA82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA83");
    },
    Error,
    "encode-error: U+EA83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA84");
    },
    Error,
    "encode-error: U+EA84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA85");
    },
    Error,
    "encode-error: U+EA85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA86");
    },
    Error,
    "encode-error: U+EA86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA87");
    },
    Error,
    "encode-error: U+EA87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA88");
    },
    Error,
    "encode-error: U+EA88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA89");
    },
    Error,
    "encode-error: U+EA89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA8A");
    },
    Error,
    "encode-error: U+EA8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA8B");
    },
    Error,
    "encode-error: U+EA8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA8C");
    },
    Error,
    "encode-error: U+EA8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA8D");
    },
    Error,
    "encode-error: U+EA8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA8E");
    },
    Error,
    "encode-error: U+EA8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA8F");
    },
    Error,
    "encode-error: U+EA8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA90");
    },
    Error,
    "encode-error: U+EA90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA91");
    },
    Error,
    "encode-error: U+EA91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA92");
    },
    Error,
    "encode-error: U+EA92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA93");
    },
    Error,
    "encode-error: U+EA93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA94");
    },
    Error,
    "encode-error: U+EA94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA95");
    },
    Error,
    "encode-error: U+EA95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA96");
    },
    Error,
    "encode-error: U+EA96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA97");
    },
    Error,
    "encode-error: U+EA97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA98");
    },
    Error,
    "encode-error: U+EA98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA99");
    },
    Error,
    "encode-error: U+EA99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA9A");
    },
    Error,
    "encode-error: U+EA9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA9B");
    },
    Error,
    "encode-error: U+EA9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA9C");
    },
    Error,
    "encode-error: U+EA9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA9D");
    },
    Error,
    "encode-error: U+EA9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA9E");
    },
    Error,
    "encode-error: U+EA9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEA9F");
    },
    Error,
    "encode-error: U+EA9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAA0");
    },
    Error,
    "encode-error: U+EAA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAA1");
    },
    Error,
    "encode-error: U+EAA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAA2");
    },
    Error,
    "encode-error: U+EAA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAA3");
    },
    Error,
    "encode-error: U+EAA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAA4");
    },
    Error,
    "encode-error: U+EAA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAA5");
    },
    Error,
    "encode-error: U+EAA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAA6");
    },
    Error,
    "encode-error: U+EAA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAA7");
    },
    Error,
    "encode-error: U+EAA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAA8");
    },
    Error,
    "encode-error: U+EAA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAA9");
    },
    Error,
    "encode-error: U+EAA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAAA");
    },
    Error,
    "encode-error: U+EAAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAAB");
    },
    Error,
    "encode-error: U+EAAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAAC");
    },
    Error,
    "encode-error: U+EAAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAAD");
    },
    Error,
    "encode-error: U+EAAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAAE");
    },
    Error,
    "encode-error: U+EAAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAAF");
    },
    Error,
    "encode-error: U+EAAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAB0");
    },
    Error,
    "encode-error: U+EAB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAB1");
    },
    Error,
    "encode-error: U+EAB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAB2");
    },
    Error,
    "encode-error: U+EAB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAB3");
    },
    Error,
    "encode-error: U+EAB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAB4");
    },
    Error,
    "encode-error: U+EAB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAB5");
    },
    Error,
    "encode-error: U+EAB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAB6");
    },
    Error,
    "encode-error: U+EAB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAB7");
    },
    Error,
    "encode-error: U+EAB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAB8");
    },
    Error,
    "encode-error: U+EAB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAB9");
    },
    Error,
    "encode-error: U+EAB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEABA");
    },
    Error,
    "encode-error: U+EABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEABB");
    },
    Error,
    "encode-error: U+EABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEABC");
    },
    Error,
    "encode-error: U+EABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEABD");
    },
    Error,
    "encode-error: U+EABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEABE");
    },
    Error,
    "encode-error: U+EABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEABF");
    },
    Error,
    "encode-error: U+EABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAC0");
    },
    Error,
    "encode-error: U+EAC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAC1");
    },
    Error,
    "encode-error: U+EAC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAC2");
    },
    Error,
    "encode-error: U+EAC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAC3");
    },
    Error,
    "encode-error: U+EAC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAC4");
    },
    Error,
    "encode-error: U+EAC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAC5");
    },
    Error,
    "encode-error: U+EAC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAC6");
    },
    Error,
    "encode-error: U+EAC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAC7");
    },
    Error,
    "encode-error: U+EAC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAC8");
    },
    Error,
    "encode-error: U+EAC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAC9");
    },
    Error,
    "encode-error: U+EAC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEACA");
    },
    Error,
    "encode-error: U+EACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEACB");
    },
    Error,
    "encode-error: U+EACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEACC");
    },
    Error,
    "encode-error: U+EACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEACD");
    },
    Error,
    "encode-error: U+EACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEACE");
    },
    Error,
    "encode-error: U+EACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEACF");
    },
    Error,
    "encode-error: U+EACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAD0");
    },
    Error,
    "encode-error: U+EAD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAD1");
    },
    Error,
    "encode-error: U+EAD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAD2");
    },
    Error,
    "encode-error: U+EAD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAD3");
    },
    Error,
    "encode-error: U+EAD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAD4");
    },
    Error,
    "encode-error: U+EAD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAD5");
    },
    Error,
    "encode-error: U+EAD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAD6");
    },
    Error,
    "encode-error: U+EAD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAD7");
    },
    Error,
    "encode-error: U+EAD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAD8");
    },
    Error,
    "encode-error: U+EAD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAD9");
    },
    Error,
    "encode-error: U+EAD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEADA");
    },
    Error,
    "encode-error: U+EADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEADB");
    },
    Error,
    "encode-error: U+EADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEADC");
    },
    Error,
    "encode-error: U+EADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEADD");
    },
    Error,
    "encode-error: U+EADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEADE");
    },
    Error,
    "encode-error: U+EADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEADF");
    },
    Error,
    "encode-error: U+EADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAE0");
    },
    Error,
    "encode-error: U+EAE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAE1");
    },
    Error,
    "encode-error: U+EAE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAE2");
    },
    Error,
    "encode-error: U+EAE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAE3");
    },
    Error,
    "encode-error: U+EAE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAE4");
    },
    Error,
    "encode-error: U+EAE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAE5");
    },
    Error,
    "encode-error: U+EAE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAE6");
    },
    Error,
    "encode-error: U+EAE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAE7");
    },
    Error,
    "encode-error: U+EAE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAE8");
    },
    Error,
    "encode-error: U+EAE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAE9");
    },
    Error,
    "encode-error: U+EAE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAEA");
    },
    Error,
    "encode-error: U+EAEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAEB");
    },
    Error,
    "encode-error: U+EAEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAEC");
    },
    Error,
    "encode-error: U+EAEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAED");
    },
    Error,
    "encode-error: U+EAED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAEE");
    },
    Error,
    "encode-error: U+EAEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAEF");
    },
    Error,
    "encode-error: U+EAEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAF0");
    },
    Error,
    "encode-error: U+EAF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAF1");
    },
    Error,
    "encode-error: U+EAF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAF2");
    },
    Error,
    "encode-error: U+EAF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAF3");
    },
    Error,
    "encode-error: U+EAF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAF4");
    },
    Error,
    "encode-error: U+EAF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAF5");
    },
    Error,
    "encode-error: U+EAF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAF6");
    },
    Error,
    "encode-error: U+EAF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAF7");
    },
    Error,
    "encode-error: U+EAF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAF8");
    },
    Error,
    "encode-error: U+EAF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAF9");
    },
    Error,
    "encode-error: U+EAF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAFA");
    },
    Error,
    "encode-error: U+EAFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAFB");
    },
    Error,
    "encode-error: U+EAFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAFC");
    },
    Error,
    "encode-error: U+EAFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAFD");
    },
    Error,
    "encode-error: U+EAFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAFE");
    },
    Error,
    "encode-error: U+EAFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEAFF");
    },
    Error,
    "encode-error: U+EAFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB00");
    },
    Error,
    "encode-error: U+EB00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB01");
    },
    Error,
    "encode-error: U+EB01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB02");
    },
    Error,
    "encode-error: U+EB02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB03");
    },
    Error,
    "encode-error: U+EB03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB04");
    },
    Error,
    "encode-error: U+EB04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB05");
    },
    Error,
    "encode-error: U+EB05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB06");
    },
    Error,
    "encode-error: U+EB06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB07");
    },
    Error,
    "encode-error: U+EB07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB08");
    },
    Error,
    "encode-error: U+EB08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB09");
    },
    Error,
    "encode-error: U+EB09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB0A");
    },
    Error,
    "encode-error: U+EB0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB0B");
    },
    Error,
    "encode-error: U+EB0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB0C");
    },
    Error,
    "encode-error: U+EB0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB0D");
    },
    Error,
    "encode-error: U+EB0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB0E");
    },
    Error,
    "encode-error: U+EB0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB0F");
    },
    Error,
    "encode-error: U+EB0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB10");
    },
    Error,
    "encode-error: U+EB10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB11");
    },
    Error,
    "encode-error: U+EB11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB12");
    },
    Error,
    "encode-error: U+EB12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB13");
    },
    Error,
    "encode-error: U+EB13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB14");
    },
    Error,
    "encode-error: U+EB14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB15");
    },
    Error,
    "encode-error: U+EB15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB16");
    },
    Error,
    "encode-error: U+EB16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB17");
    },
    Error,
    "encode-error: U+EB17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB18");
    },
    Error,
    "encode-error: U+EB18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB19");
    },
    Error,
    "encode-error: U+EB19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB1A");
    },
    Error,
    "encode-error: U+EB1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB1B");
    },
    Error,
    "encode-error: U+EB1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB1C");
    },
    Error,
    "encode-error: U+EB1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB1D");
    },
    Error,
    "encode-error: U+EB1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB1E");
    },
    Error,
    "encode-error: U+EB1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB1F");
    },
    Error,
    "encode-error: U+EB1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB20");
    },
    Error,
    "encode-error: U+EB20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB21");
    },
    Error,
    "encode-error: U+EB21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB22");
    },
    Error,
    "encode-error: U+EB22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB23");
    },
    Error,
    "encode-error: U+EB23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB24");
    },
    Error,
    "encode-error: U+EB24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB25");
    },
    Error,
    "encode-error: U+EB25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB26");
    },
    Error,
    "encode-error: U+EB26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB27");
    },
    Error,
    "encode-error: U+EB27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB28");
    },
    Error,
    "encode-error: U+EB28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB29");
    },
    Error,
    "encode-error: U+EB29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB2A");
    },
    Error,
    "encode-error: U+EB2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB2B");
    },
    Error,
    "encode-error: U+EB2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB2C");
    },
    Error,
    "encode-error: U+EB2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB2D");
    },
    Error,
    "encode-error: U+EB2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB2E");
    },
    Error,
    "encode-error: U+EB2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB2F");
    },
    Error,
    "encode-error: U+EB2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB30");
    },
    Error,
    "encode-error: U+EB30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB31");
    },
    Error,
    "encode-error: U+EB31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB32");
    },
    Error,
    "encode-error: U+EB32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB33");
    },
    Error,
    "encode-error: U+EB33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB34");
    },
    Error,
    "encode-error: U+EB34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB35");
    },
    Error,
    "encode-error: U+EB35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB36");
    },
    Error,
    "encode-error: U+EB36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB37");
    },
    Error,
    "encode-error: U+EB37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB38");
    },
    Error,
    "encode-error: U+EB38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB39");
    },
    Error,
    "encode-error: U+EB39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB3A");
    },
    Error,
    "encode-error: U+EB3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB3B");
    },
    Error,
    "encode-error: U+EB3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB3C");
    },
    Error,
    "encode-error: U+EB3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB3D");
    },
    Error,
    "encode-error: U+EB3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB3E");
    },
    Error,
    "encode-error: U+EB3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB3F");
    },
    Error,
    "encode-error: U+EB3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB40");
    },
    Error,
    "encode-error: U+EB40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB41");
    },
    Error,
    "encode-error: U+EB41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB42");
    },
    Error,
    "encode-error: U+EB42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB43");
    },
    Error,
    "encode-error: U+EB43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB44");
    },
    Error,
    "encode-error: U+EB44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB45");
    },
    Error,
    "encode-error: U+EB45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB46");
    },
    Error,
    "encode-error: U+EB46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB47");
    },
    Error,
    "encode-error: U+EB47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB48");
    },
    Error,
    "encode-error: U+EB48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB49");
    },
    Error,
    "encode-error: U+EB49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB4A");
    },
    Error,
    "encode-error: U+EB4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB4B");
    },
    Error,
    "encode-error: U+EB4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB4C");
    },
    Error,
    "encode-error: U+EB4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB4D");
    },
    Error,
    "encode-error: U+EB4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB4E");
    },
    Error,
    "encode-error: U+EB4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB4F");
    },
    Error,
    "encode-error: U+EB4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB50");
    },
    Error,
    "encode-error: U+EB50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB51");
    },
    Error,
    "encode-error: U+EB51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB52");
    },
    Error,
    "encode-error: U+EB52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB53");
    },
    Error,
    "encode-error: U+EB53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB54");
    },
    Error,
    "encode-error: U+EB54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB55");
    },
    Error,
    "encode-error: U+EB55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB56");
    },
    Error,
    "encode-error: U+EB56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB57");
    },
    Error,
    "encode-error: U+EB57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB58");
    },
    Error,
    "encode-error: U+EB58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB59");
    },
    Error,
    "encode-error: U+EB59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB5A");
    },
    Error,
    "encode-error: U+EB5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB5B");
    },
    Error,
    "encode-error: U+EB5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB5C");
    },
    Error,
    "encode-error: U+EB5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB5D");
    },
    Error,
    "encode-error: U+EB5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB5E");
    },
    Error,
    "encode-error: U+EB5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB5F");
    },
    Error,
    "encode-error: U+EB5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB60");
    },
    Error,
    "encode-error: U+EB60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB61");
    },
    Error,
    "encode-error: U+EB61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB62");
    },
    Error,
    "encode-error: U+EB62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB63");
    },
    Error,
    "encode-error: U+EB63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB64");
    },
    Error,
    "encode-error: U+EB64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB65");
    },
    Error,
    "encode-error: U+EB65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB66");
    },
    Error,
    "encode-error: U+EB66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB67");
    },
    Error,
    "encode-error: U+EB67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB68");
    },
    Error,
    "encode-error: U+EB68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB69");
    },
    Error,
    "encode-error: U+EB69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB6A");
    },
    Error,
    "encode-error: U+EB6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB6B");
    },
    Error,
    "encode-error: U+EB6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB6C");
    },
    Error,
    "encode-error: U+EB6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB6D");
    },
    Error,
    "encode-error: U+EB6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB6E");
    },
    Error,
    "encode-error: U+EB6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB6F");
    },
    Error,
    "encode-error: U+EB6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB70");
    },
    Error,
    "encode-error: U+EB70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB71");
    },
    Error,
    "encode-error: U+EB71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB72");
    },
    Error,
    "encode-error: U+EB72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB73");
    },
    Error,
    "encode-error: U+EB73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB74");
    },
    Error,
    "encode-error: U+EB74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB75");
    },
    Error,
    "encode-error: U+EB75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB76");
    },
    Error,
    "encode-error: U+EB76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB77");
    },
    Error,
    "encode-error: U+EB77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB78");
    },
    Error,
    "encode-error: U+EB78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB79");
    },
    Error,
    "encode-error: U+EB79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB7A");
    },
    Error,
    "encode-error: U+EB7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB7B");
    },
    Error,
    "encode-error: U+EB7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB7C");
    },
    Error,
    "encode-error: U+EB7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB7D");
    },
    Error,
    "encode-error: U+EB7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB7E");
    },
    Error,
    "encode-error: U+EB7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB7F");
    },
    Error,
    "encode-error: U+EB7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB80");
    },
    Error,
    "encode-error: U+EB80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB81");
    },
    Error,
    "encode-error: U+EB81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB82");
    },
    Error,
    "encode-error: U+EB82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB83");
    },
    Error,
    "encode-error: U+EB83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB84");
    },
    Error,
    "encode-error: U+EB84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB85");
    },
    Error,
    "encode-error: U+EB85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB86");
    },
    Error,
    "encode-error: U+EB86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB87");
    },
    Error,
    "encode-error: U+EB87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB88");
    },
    Error,
    "encode-error: U+EB88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB89");
    },
    Error,
    "encode-error: U+EB89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB8A");
    },
    Error,
    "encode-error: U+EB8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB8B");
    },
    Error,
    "encode-error: U+EB8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB8C");
    },
    Error,
    "encode-error: U+EB8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB8D");
    },
    Error,
    "encode-error: U+EB8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB8E");
    },
    Error,
    "encode-error: U+EB8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB8F");
    },
    Error,
    "encode-error: U+EB8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB90");
    },
    Error,
    "encode-error: U+EB90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB91");
    },
    Error,
    "encode-error: U+EB91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB92");
    },
    Error,
    "encode-error: U+EB92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB93");
    },
    Error,
    "encode-error: U+EB93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB94");
    },
    Error,
    "encode-error: U+EB94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB95");
    },
    Error,
    "encode-error: U+EB95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB96");
    },
    Error,
    "encode-error: U+EB96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB97");
    },
    Error,
    "encode-error: U+EB97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB98");
    },
    Error,
    "encode-error: U+EB98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB99");
    },
    Error,
    "encode-error: U+EB99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB9A");
    },
    Error,
    "encode-error: U+EB9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB9B");
    },
    Error,
    "encode-error: U+EB9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB9C");
    },
    Error,
    "encode-error: U+EB9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB9D");
    },
    Error,
    "encode-error: U+EB9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB9E");
    },
    Error,
    "encode-error: U+EB9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEB9F");
    },
    Error,
    "encode-error: U+EB9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBA0");
    },
    Error,
    "encode-error: U+EBA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBA1");
    },
    Error,
    "encode-error: U+EBA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBA2");
    },
    Error,
    "encode-error: U+EBA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBA3");
    },
    Error,
    "encode-error: U+EBA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBA4");
    },
    Error,
    "encode-error: U+EBA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBA5");
    },
    Error,
    "encode-error: U+EBA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBA6");
    },
    Error,
    "encode-error: U+EBA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBA7");
    },
    Error,
    "encode-error: U+EBA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBA8");
    },
    Error,
    "encode-error: U+EBA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBA9");
    },
    Error,
    "encode-error: U+EBA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBAA");
    },
    Error,
    "encode-error: U+EBAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBAB");
    },
    Error,
    "encode-error: U+EBAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBAC");
    },
    Error,
    "encode-error: U+EBAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBAD");
    },
    Error,
    "encode-error: U+EBAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBAE");
    },
    Error,
    "encode-error: U+EBAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBAF");
    },
    Error,
    "encode-error: U+EBAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBB0");
    },
    Error,
    "encode-error: U+EBB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBB1");
    },
    Error,
    "encode-error: U+EBB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBB2");
    },
    Error,
    "encode-error: U+EBB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBB3");
    },
    Error,
    "encode-error: U+EBB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBB4");
    },
    Error,
    "encode-error: U+EBB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBB5");
    },
    Error,
    "encode-error: U+EBB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBB6");
    },
    Error,
    "encode-error: U+EBB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBB7");
    },
    Error,
    "encode-error: U+EBB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBB8");
    },
    Error,
    "encode-error: U+EBB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBB9");
    },
    Error,
    "encode-error: U+EBB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBBA");
    },
    Error,
    "encode-error: U+EBBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBBB");
    },
    Error,
    "encode-error: U+EBBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBBC");
    },
    Error,
    "encode-error: U+EBBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBBD");
    },
    Error,
    "encode-error: U+EBBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBBE");
    },
    Error,
    "encode-error: U+EBBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBBF");
    },
    Error,
    "encode-error: U+EBBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBC0");
    },
    Error,
    "encode-error: U+EBC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBC1");
    },
    Error,
    "encode-error: U+EBC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBC2");
    },
    Error,
    "encode-error: U+EBC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBC3");
    },
    Error,
    "encode-error: U+EBC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBC4");
    },
    Error,
    "encode-error: U+EBC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBC5");
    },
    Error,
    "encode-error: U+EBC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBC6");
    },
    Error,
    "encode-error: U+EBC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBC7");
    },
    Error,
    "encode-error: U+EBC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBC8");
    },
    Error,
    "encode-error: U+EBC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBC9");
    },
    Error,
    "encode-error: U+EBC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBCA");
    },
    Error,
    "encode-error: U+EBCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBCB");
    },
    Error,
    "encode-error: U+EBCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBCC");
    },
    Error,
    "encode-error: U+EBCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBCD");
    },
    Error,
    "encode-error: U+EBCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBCE");
    },
    Error,
    "encode-error: U+EBCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBCF");
    },
    Error,
    "encode-error: U+EBCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBD0");
    },
    Error,
    "encode-error: U+EBD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBD1");
    },
    Error,
    "encode-error: U+EBD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBD2");
    },
    Error,
    "encode-error: U+EBD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBD3");
    },
    Error,
    "encode-error: U+EBD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBD4");
    },
    Error,
    "encode-error: U+EBD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBD5");
    },
    Error,
    "encode-error: U+EBD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBD6");
    },
    Error,
    "encode-error: U+EBD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBD7");
    },
    Error,
    "encode-error: U+EBD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBD8");
    },
    Error,
    "encode-error: U+EBD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBD9");
    },
    Error,
    "encode-error: U+EBD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBDA");
    },
    Error,
    "encode-error: U+EBDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBDB");
    },
    Error,
    "encode-error: U+EBDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBDC");
    },
    Error,
    "encode-error: U+EBDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBDD");
    },
    Error,
    "encode-error: U+EBDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBDE");
    },
    Error,
    "encode-error: U+EBDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBDF");
    },
    Error,
    "encode-error: U+EBDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBE0");
    },
    Error,
    "encode-error: U+EBE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBE1");
    },
    Error,
    "encode-error: U+EBE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBE2");
    },
    Error,
    "encode-error: U+EBE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBE3");
    },
    Error,
    "encode-error: U+EBE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBE4");
    },
    Error,
    "encode-error: U+EBE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBE5");
    },
    Error,
    "encode-error: U+EBE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBE6");
    },
    Error,
    "encode-error: U+EBE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBE7");
    },
    Error,
    "encode-error: U+EBE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBE8");
    },
    Error,
    "encode-error: U+EBE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBE9");
    },
    Error,
    "encode-error: U+EBE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBEA");
    },
    Error,
    "encode-error: U+EBEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBEB");
    },
    Error,
    "encode-error: U+EBEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBEC");
    },
    Error,
    "encode-error: U+EBEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBED");
    },
    Error,
    "encode-error: U+EBED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBEE");
    },
    Error,
    "encode-error: U+EBEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBEF");
    },
    Error,
    "encode-error: U+EBEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBF0");
    },
    Error,
    "encode-error: U+EBF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBF1");
    },
    Error,
    "encode-error: U+EBF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBF2");
    },
    Error,
    "encode-error: U+EBF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBF3");
    },
    Error,
    "encode-error: U+EBF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBF4");
    },
    Error,
    "encode-error: U+EBF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBF5");
    },
    Error,
    "encode-error: U+EBF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBF6");
    },
    Error,
    "encode-error: U+EBF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBF7");
    },
    Error,
    "encode-error: U+EBF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBF8");
    },
    Error,
    "encode-error: U+EBF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBF9");
    },
    Error,
    "encode-error: U+EBF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBFA");
    },
    Error,
    "encode-error: U+EBFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBFB");
    },
    Error,
    "encode-error: U+EBFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBFC");
    },
    Error,
    "encode-error: U+EBFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBFD");
    },
    Error,
    "encode-error: U+EBFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBFE");
    },
    Error,
    "encode-error: U+EBFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEBFF");
    },
    Error,
    "encode-error: U+EBFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC00");
    },
    Error,
    "encode-error: U+EC00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC01");
    },
    Error,
    "encode-error: U+EC01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC02");
    },
    Error,
    "encode-error: U+EC02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC03");
    },
    Error,
    "encode-error: U+EC03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC04");
    },
    Error,
    "encode-error: U+EC04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC05");
    },
    Error,
    "encode-error: U+EC05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC06");
    },
    Error,
    "encode-error: U+EC06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC07");
    },
    Error,
    "encode-error: U+EC07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC08");
    },
    Error,
    "encode-error: U+EC08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC09");
    },
    Error,
    "encode-error: U+EC09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC0A");
    },
    Error,
    "encode-error: U+EC0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC0B");
    },
    Error,
    "encode-error: U+EC0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC0C");
    },
    Error,
    "encode-error: U+EC0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC0D");
    },
    Error,
    "encode-error: U+EC0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC0E");
    },
    Error,
    "encode-error: U+EC0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC0F");
    },
    Error,
    "encode-error: U+EC0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC10");
    },
    Error,
    "encode-error: U+EC10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC11");
    },
    Error,
    "encode-error: U+EC11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC12");
    },
    Error,
    "encode-error: U+EC12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC13");
    },
    Error,
    "encode-error: U+EC13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC14");
    },
    Error,
    "encode-error: U+EC14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC15");
    },
    Error,
    "encode-error: U+EC15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC16");
    },
    Error,
    "encode-error: U+EC16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC17");
    },
    Error,
    "encode-error: U+EC17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC18");
    },
    Error,
    "encode-error: U+EC18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC19");
    },
    Error,
    "encode-error: U+EC19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC1A");
    },
    Error,
    "encode-error: U+EC1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC1B");
    },
    Error,
    "encode-error: U+EC1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC1C");
    },
    Error,
    "encode-error: U+EC1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC1D");
    },
    Error,
    "encode-error: U+EC1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC1E");
    },
    Error,
    "encode-error: U+EC1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC1F");
    },
    Error,
    "encode-error: U+EC1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC20");
    },
    Error,
    "encode-error: U+EC20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC21");
    },
    Error,
    "encode-error: U+EC21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC22");
    },
    Error,
    "encode-error: U+EC22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC23");
    },
    Error,
    "encode-error: U+EC23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC24");
    },
    Error,
    "encode-error: U+EC24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC25");
    },
    Error,
    "encode-error: U+EC25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC26");
    },
    Error,
    "encode-error: U+EC26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC27");
    },
    Error,
    "encode-error: U+EC27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC28");
    },
    Error,
    "encode-error: U+EC28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC29");
    },
    Error,
    "encode-error: U+EC29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC2A");
    },
    Error,
    "encode-error: U+EC2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC2B");
    },
    Error,
    "encode-error: U+EC2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC2C");
    },
    Error,
    "encode-error: U+EC2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC2D");
    },
    Error,
    "encode-error: U+EC2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC2E");
    },
    Error,
    "encode-error: U+EC2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC2F");
    },
    Error,
    "encode-error: U+EC2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC30");
    },
    Error,
    "encode-error: U+EC30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC31");
    },
    Error,
    "encode-error: U+EC31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC32");
    },
    Error,
    "encode-error: U+EC32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC33");
    },
    Error,
    "encode-error: U+EC33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC34");
    },
    Error,
    "encode-error: U+EC34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC35");
    },
    Error,
    "encode-error: U+EC35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC36");
    },
    Error,
    "encode-error: U+EC36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC37");
    },
    Error,
    "encode-error: U+EC37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC38");
    },
    Error,
    "encode-error: U+EC38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC39");
    },
    Error,
    "encode-error: U+EC39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC3A");
    },
    Error,
    "encode-error: U+EC3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC3B");
    },
    Error,
    "encode-error: U+EC3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC3C");
    },
    Error,
    "encode-error: U+EC3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC3D");
    },
    Error,
    "encode-error: U+EC3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC3E");
    },
    Error,
    "encode-error: U+EC3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC3F");
    },
    Error,
    "encode-error: U+EC3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC40");
    },
    Error,
    "encode-error: U+EC40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC41");
    },
    Error,
    "encode-error: U+EC41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC42");
    },
    Error,
    "encode-error: U+EC42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC43");
    },
    Error,
    "encode-error: U+EC43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC44");
    },
    Error,
    "encode-error: U+EC44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC45");
    },
    Error,
    "encode-error: U+EC45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC46");
    },
    Error,
    "encode-error: U+EC46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC47");
    },
    Error,
    "encode-error: U+EC47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC48");
    },
    Error,
    "encode-error: U+EC48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC49");
    },
    Error,
    "encode-error: U+EC49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC4A");
    },
    Error,
    "encode-error: U+EC4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC4B");
    },
    Error,
    "encode-error: U+EC4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC4C");
    },
    Error,
    "encode-error: U+EC4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC4D");
    },
    Error,
    "encode-error: U+EC4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC4E");
    },
    Error,
    "encode-error: U+EC4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC4F");
    },
    Error,
    "encode-error: U+EC4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC50");
    },
    Error,
    "encode-error: U+EC50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC51");
    },
    Error,
    "encode-error: U+EC51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC52");
    },
    Error,
    "encode-error: U+EC52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC53");
    },
    Error,
    "encode-error: U+EC53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC54");
    },
    Error,
    "encode-error: U+EC54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC55");
    },
    Error,
    "encode-error: U+EC55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC56");
    },
    Error,
    "encode-error: U+EC56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC57");
    },
    Error,
    "encode-error: U+EC57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC58");
    },
    Error,
    "encode-error: U+EC58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC59");
    },
    Error,
    "encode-error: U+EC59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC5A");
    },
    Error,
    "encode-error: U+EC5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC5B");
    },
    Error,
    "encode-error: U+EC5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC5C");
    },
    Error,
    "encode-error: U+EC5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC5D");
    },
    Error,
    "encode-error: U+EC5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC5E");
    },
    Error,
    "encode-error: U+EC5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC5F");
    },
    Error,
    "encode-error: U+EC5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC60");
    },
    Error,
    "encode-error: U+EC60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC61");
    },
    Error,
    "encode-error: U+EC61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC62");
    },
    Error,
    "encode-error: U+EC62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC63");
    },
    Error,
    "encode-error: U+EC63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC64");
    },
    Error,
    "encode-error: U+EC64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC65");
    },
    Error,
    "encode-error: U+EC65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC66");
    },
    Error,
    "encode-error: U+EC66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC67");
    },
    Error,
    "encode-error: U+EC67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC68");
    },
    Error,
    "encode-error: U+EC68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC69");
    },
    Error,
    "encode-error: U+EC69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC6A");
    },
    Error,
    "encode-error: U+EC6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC6B");
    },
    Error,
    "encode-error: U+EC6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC6C");
    },
    Error,
    "encode-error: U+EC6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC6D");
    },
    Error,
    "encode-error: U+EC6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC6E");
    },
    Error,
    "encode-error: U+EC6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC6F");
    },
    Error,
    "encode-error: U+EC6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC70");
    },
    Error,
    "encode-error: U+EC70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC71");
    },
    Error,
    "encode-error: U+EC71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC72");
    },
    Error,
    "encode-error: U+EC72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC73");
    },
    Error,
    "encode-error: U+EC73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC74");
    },
    Error,
    "encode-error: U+EC74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC75");
    },
    Error,
    "encode-error: U+EC75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC76");
    },
    Error,
    "encode-error: U+EC76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC77");
    },
    Error,
    "encode-error: U+EC77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC78");
    },
    Error,
    "encode-error: U+EC78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC79");
    },
    Error,
    "encode-error: U+EC79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC7A");
    },
    Error,
    "encode-error: U+EC7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC7B");
    },
    Error,
    "encode-error: U+EC7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC7C");
    },
    Error,
    "encode-error: U+EC7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC7D");
    },
    Error,
    "encode-error: U+EC7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC7E");
    },
    Error,
    "encode-error: U+EC7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC7F");
    },
    Error,
    "encode-error: U+EC7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC80");
    },
    Error,
    "encode-error: U+EC80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC81");
    },
    Error,
    "encode-error: U+EC81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC82");
    },
    Error,
    "encode-error: U+EC82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC83");
    },
    Error,
    "encode-error: U+EC83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC84");
    },
    Error,
    "encode-error: U+EC84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC85");
    },
    Error,
    "encode-error: U+EC85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC86");
    },
    Error,
    "encode-error: U+EC86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC87");
    },
    Error,
    "encode-error: U+EC87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC88");
    },
    Error,
    "encode-error: U+EC88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC89");
    },
    Error,
    "encode-error: U+EC89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC8A");
    },
    Error,
    "encode-error: U+EC8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC8B");
    },
    Error,
    "encode-error: U+EC8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC8C");
    },
    Error,
    "encode-error: U+EC8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC8D");
    },
    Error,
    "encode-error: U+EC8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC8E");
    },
    Error,
    "encode-error: U+EC8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC8F");
    },
    Error,
    "encode-error: U+EC8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC90");
    },
    Error,
    "encode-error: U+EC90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC91");
    },
    Error,
    "encode-error: U+EC91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC92");
    },
    Error,
    "encode-error: U+EC92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC93");
    },
    Error,
    "encode-error: U+EC93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC94");
    },
    Error,
    "encode-error: U+EC94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC95");
    },
    Error,
    "encode-error: U+EC95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC96");
    },
    Error,
    "encode-error: U+EC96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC97");
    },
    Error,
    "encode-error: U+EC97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC98");
    },
    Error,
    "encode-error: U+EC98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC99");
    },
    Error,
    "encode-error: U+EC99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC9A");
    },
    Error,
    "encode-error: U+EC9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC9B");
    },
    Error,
    "encode-error: U+EC9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC9C");
    },
    Error,
    "encode-error: U+EC9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC9D");
    },
    Error,
    "encode-error: U+EC9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC9E");
    },
    Error,
    "encode-error: U+EC9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEC9F");
    },
    Error,
    "encode-error: U+EC9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECA0");
    },
    Error,
    "encode-error: U+ECA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECA1");
    },
    Error,
    "encode-error: U+ECA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECA2");
    },
    Error,
    "encode-error: U+ECA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECA3");
    },
    Error,
    "encode-error: U+ECA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECA4");
    },
    Error,
    "encode-error: U+ECA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECA5");
    },
    Error,
    "encode-error: U+ECA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECA6");
    },
    Error,
    "encode-error: U+ECA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECA7");
    },
    Error,
    "encode-error: U+ECA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECA8");
    },
    Error,
    "encode-error: U+ECA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECA9");
    },
    Error,
    "encode-error: U+ECA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECAA");
    },
    Error,
    "encode-error: U+ECAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECAB");
    },
    Error,
    "encode-error: U+ECAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECAC");
    },
    Error,
    "encode-error: U+ECAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECAD");
    },
    Error,
    "encode-error: U+ECAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECAE");
    },
    Error,
    "encode-error: U+ECAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECAF");
    },
    Error,
    "encode-error: U+ECAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECB0");
    },
    Error,
    "encode-error: U+ECB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECB1");
    },
    Error,
    "encode-error: U+ECB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECB2");
    },
    Error,
    "encode-error: U+ECB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECB3");
    },
    Error,
    "encode-error: U+ECB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECB4");
    },
    Error,
    "encode-error: U+ECB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECB5");
    },
    Error,
    "encode-error: U+ECB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECB6");
    },
    Error,
    "encode-error: U+ECB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECB7");
    },
    Error,
    "encode-error: U+ECB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECB8");
    },
    Error,
    "encode-error: U+ECB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECB9");
    },
    Error,
    "encode-error: U+ECB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECBA");
    },
    Error,
    "encode-error: U+ECBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECBB");
    },
    Error,
    "encode-error: U+ECBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECBC");
    },
    Error,
    "encode-error: U+ECBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECBD");
    },
    Error,
    "encode-error: U+ECBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECBE");
    },
    Error,
    "encode-error: U+ECBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECBF");
    },
    Error,
    "encode-error: U+ECBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECC0");
    },
    Error,
    "encode-error: U+ECC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECC1");
    },
    Error,
    "encode-error: U+ECC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECC2");
    },
    Error,
    "encode-error: U+ECC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECC3");
    },
    Error,
    "encode-error: U+ECC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECC4");
    },
    Error,
    "encode-error: U+ECC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECC5");
    },
    Error,
    "encode-error: U+ECC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECC6");
    },
    Error,
    "encode-error: U+ECC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECC7");
    },
    Error,
    "encode-error: U+ECC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECC8");
    },
    Error,
    "encode-error: U+ECC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECC9");
    },
    Error,
    "encode-error: U+ECC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECCA");
    },
    Error,
    "encode-error: U+ECCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECCB");
    },
    Error,
    "encode-error: U+ECCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECCC");
    },
    Error,
    "encode-error: U+ECCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECCD");
    },
    Error,
    "encode-error: U+ECCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECCE");
    },
    Error,
    "encode-error: U+ECCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECCF");
    },
    Error,
    "encode-error: U+ECCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECD0");
    },
    Error,
    "encode-error: U+ECD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECD1");
    },
    Error,
    "encode-error: U+ECD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECD2");
    },
    Error,
    "encode-error: U+ECD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECD3");
    },
    Error,
    "encode-error: U+ECD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECD4");
    },
    Error,
    "encode-error: U+ECD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECD5");
    },
    Error,
    "encode-error: U+ECD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECD6");
    },
    Error,
    "encode-error: U+ECD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECD7");
    },
    Error,
    "encode-error: U+ECD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECD8");
    },
    Error,
    "encode-error: U+ECD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECD9");
    },
    Error,
    "encode-error: U+ECD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECDA");
    },
    Error,
    "encode-error: U+ECDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECDB");
    },
    Error,
    "encode-error: U+ECDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECDC");
    },
    Error,
    "encode-error: U+ECDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECDD");
    },
    Error,
    "encode-error: U+ECDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECDE");
    },
    Error,
    "encode-error: U+ECDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECDF");
    },
    Error,
    "encode-error: U+ECDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECE0");
    },
    Error,
    "encode-error: U+ECE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECE1");
    },
    Error,
    "encode-error: U+ECE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECE2");
    },
    Error,
    "encode-error: U+ECE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECE3");
    },
    Error,
    "encode-error: U+ECE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECE4");
    },
    Error,
    "encode-error: U+ECE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECE5");
    },
    Error,
    "encode-error: U+ECE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECE6");
    },
    Error,
    "encode-error: U+ECE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECE7");
    },
    Error,
    "encode-error: U+ECE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECE8");
    },
    Error,
    "encode-error: U+ECE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECE9");
    },
    Error,
    "encode-error: U+ECE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECEA");
    },
    Error,
    "encode-error: U+ECEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECEB");
    },
    Error,
    "encode-error: U+ECEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECEC");
    },
    Error,
    "encode-error: U+ECEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECED");
    },
    Error,
    "encode-error: U+ECED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECEE");
    },
    Error,
    "encode-error: U+ECEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECEF");
    },
    Error,
    "encode-error: U+ECEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECF0");
    },
    Error,
    "encode-error: U+ECF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECF1");
    },
    Error,
    "encode-error: U+ECF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECF2");
    },
    Error,
    "encode-error: U+ECF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECF3");
    },
    Error,
    "encode-error: U+ECF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECF4");
    },
    Error,
    "encode-error: U+ECF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECF5");
    },
    Error,
    "encode-error: U+ECF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECF6");
    },
    Error,
    "encode-error: U+ECF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECF7");
    },
    Error,
    "encode-error: U+ECF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECF8");
    },
    Error,
    "encode-error: U+ECF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECF9");
    },
    Error,
    "encode-error: U+ECF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECFA");
    },
    Error,
    "encode-error: U+ECFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECFB");
    },
    Error,
    "encode-error: U+ECFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECFC");
    },
    Error,
    "encode-error: U+ECFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECFD");
    },
    Error,
    "encode-error: U+ECFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECFE");
    },
    Error,
    "encode-error: U+ECFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uECFF");
    },
    Error,
    "encode-error: U+ECFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED00");
    },
    Error,
    "encode-error: U+ED00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED01");
    },
    Error,
    "encode-error: U+ED01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED02");
    },
    Error,
    "encode-error: U+ED02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED03");
    },
    Error,
    "encode-error: U+ED03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED04");
    },
    Error,
    "encode-error: U+ED04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED05");
    },
    Error,
    "encode-error: U+ED05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED06");
    },
    Error,
    "encode-error: U+ED06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED07");
    },
    Error,
    "encode-error: U+ED07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED08");
    },
    Error,
    "encode-error: U+ED08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED09");
    },
    Error,
    "encode-error: U+ED09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED0A");
    },
    Error,
    "encode-error: U+ED0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED0B");
    },
    Error,
    "encode-error: U+ED0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED0C");
    },
    Error,
    "encode-error: U+ED0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED0D");
    },
    Error,
    "encode-error: U+ED0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED0E");
    },
    Error,
    "encode-error: U+ED0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED0F");
    },
    Error,
    "encode-error: U+ED0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED10");
    },
    Error,
    "encode-error: U+ED10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED11");
    },
    Error,
    "encode-error: U+ED11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED12");
    },
    Error,
    "encode-error: U+ED12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED13");
    },
    Error,
    "encode-error: U+ED13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED14");
    },
    Error,
    "encode-error: U+ED14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED15");
    },
    Error,
    "encode-error: U+ED15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED16");
    },
    Error,
    "encode-error: U+ED16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED17");
    },
    Error,
    "encode-error: U+ED17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED18");
    },
    Error,
    "encode-error: U+ED18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED19");
    },
    Error,
    "encode-error: U+ED19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED1A");
    },
    Error,
    "encode-error: U+ED1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED1B");
    },
    Error,
    "encode-error: U+ED1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED1C");
    },
    Error,
    "encode-error: U+ED1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED1D");
    },
    Error,
    "encode-error: U+ED1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED1E");
    },
    Error,
    "encode-error: U+ED1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED1F");
    },
    Error,
    "encode-error: U+ED1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED20");
    },
    Error,
    "encode-error: U+ED20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED21");
    },
    Error,
    "encode-error: U+ED21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED22");
    },
    Error,
    "encode-error: U+ED22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED23");
    },
    Error,
    "encode-error: U+ED23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED24");
    },
    Error,
    "encode-error: U+ED24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED25");
    },
    Error,
    "encode-error: U+ED25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED26");
    },
    Error,
    "encode-error: U+ED26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED27");
    },
    Error,
    "encode-error: U+ED27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED28");
    },
    Error,
    "encode-error: U+ED28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED29");
    },
    Error,
    "encode-error: U+ED29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED2A");
    },
    Error,
    "encode-error: U+ED2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED2B");
    },
    Error,
    "encode-error: U+ED2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED2C");
    },
    Error,
    "encode-error: U+ED2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED2D");
    },
    Error,
    "encode-error: U+ED2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED2E");
    },
    Error,
    "encode-error: U+ED2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED2F");
    },
    Error,
    "encode-error: U+ED2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED30");
    },
    Error,
    "encode-error: U+ED30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED31");
    },
    Error,
    "encode-error: U+ED31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED32");
    },
    Error,
    "encode-error: U+ED32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED33");
    },
    Error,
    "encode-error: U+ED33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED34");
    },
    Error,
    "encode-error: U+ED34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED35");
    },
    Error,
    "encode-error: U+ED35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED36");
    },
    Error,
    "encode-error: U+ED36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED37");
    },
    Error,
    "encode-error: U+ED37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED38");
    },
    Error,
    "encode-error: U+ED38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED39");
    },
    Error,
    "encode-error: U+ED39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED3A");
    },
    Error,
    "encode-error: U+ED3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED3B");
    },
    Error,
    "encode-error: U+ED3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED3C");
    },
    Error,
    "encode-error: U+ED3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED3D");
    },
    Error,
    "encode-error: U+ED3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED3E");
    },
    Error,
    "encode-error: U+ED3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED3F");
    },
    Error,
    "encode-error: U+ED3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED40");
    },
    Error,
    "encode-error: U+ED40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED41");
    },
    Error,
    "encode-error: U+ED41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED42");
    },
    Error,
    "encode-error: U+ED42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED43");
    },
    Error,
    "encode-error: U+ED43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED44");
    },
    Error,
    "encode-error: U+ED44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED45");
    },
    Error,
    "encode-error: U+ED45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED46");
    },
    Error,
    "encode-error: U+ED46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED47");
    },
    Error,
    "encode-error: U+ED47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED48");
    },
    Error,
    "encode-error: U+ED48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED49");
    },
    Error,
    "encode-error: U+ED49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED4A");
    },
    Error,
    "encode-error: U+ED4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED4B");
    },
    Error,
    "encode-error: U+ED4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED4C");
    },
    Error,
    "encode-error: U+ED4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED4D");
    },
    Error,
    "encode-error: U+ED4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED4E");
    },
    Error,
    "encode-error: U+ED4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED4F");
    },
    Error,
    "encode-error: U+ED4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED50");
    },
    Error,
    "encode-error: U+ED50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED51");
    },
    Error,
    "encode-error: U+ED51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED52");
    },
    Error,
    "encode-error: U+ED52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED53");
    },
    Error,
    "encode-error: U+ED53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED54");
    },
    Error,
    "encode-error: U+ED54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED55");
    },
    Error,
    "encode-error: U+ED55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED56");
    },
    Error,
    "encode-error: U+ED56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED57");
    },
    Error,
    "encode-error: U+ED57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED58");
    },
    Error,
    "encode-error: U+ED58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED59");
    },
    Error,
    "encode-error: U+ED59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED5A");
    },
    Error,
    "encode-error: U+ED5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED5B");
    },
    Error,
    "encode-error: U+ED5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED5C");
    },
    Error,
    "encode-error: U+ED5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED5D");
    },
    Error,
    "encode-error: U+ED5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED5E");
    },
    Error,
    "encode-error: U+ED5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED5F");
    },
    Error,
    "encode-error: U+ED5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED60");
    },
    Error,
    "encode-error: U+ED60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED61");
    },
    Error,
    "encode-error: U+ED61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED62");
    },
    Error,
    "encode-error: U+ED62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED63");
    },
    Error,
    "encode-error: U+ED63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED64");
    },
    Error,
    "encode-error: U+ED64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED65");
    },
    Error,
    "encode-error: U+ED65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED66");
    },
    Error,
    "encode-error: U+ED66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED67");
    },
    Error,
    "encode-error: U+ED67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED68");
    },
    Error,
    "encode-error: U+ED68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED69");
    },
    Error,
    "encode-error: U+ED69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED6A");
    },
    Error,
    "encode-error: U+ED6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED6B");
    },
    Error,
    "encode-error: U+ED6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED6C");
    },
    Error,
    "encode-error: U+ED6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED6D");
    },
    Error,
    "encode-error: U+ED6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED6E");
    },
    Error,
    "encode-error: U+ED6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED6F");
    },
    Error,
    "encode-error: U+ED6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED70");
    },
    Error,
    "encode-error: U+ED70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED71");
    },
    Error,
    "encode-error: U+ED71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED72");
    },
    Error,
    "encode-error: U+ED72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED73");
    },
    Error,
    "encode-error: U+ED73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED74");
    },
    Error,
    "encode-error: U+ED74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED75");
    },
    Error,
    "encode-error: U+ED75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED76");
    },
    Error,
    "encode-error: U+ED76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED77");
    },
    Error,
    "encode-error: U+ED77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED78");
    },
    Error,
    "encode-error: U+ED78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED79");
    },
    Error,
    "encode-error: U+ED79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED7A");
    },
    Error,
    "encode-error: U+ED7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED7B");
    },
    Error,
    "encode-error: U+ED7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED7C");
    },
    Error,
    "encode-error: U+ED7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED7D");
    },
    Error,
    "encode-error: U+ED7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED7E");
    },
    Error,
    "encode-error: U+ED7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED7F");
    },
    Error,
    "encode-error: U+ED7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED80");
    },
    Error,
    "encode-error: U+ED80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED81");
    },
    Error,
    "encode-error: U+ED81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED82");
    },
    Error,
    "encode-error: U+ED82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED83");
    },
    Error,
    "encode-error: U+ED83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED84");
    },
    Error,
    "encode-error: U+ED84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED85");
    },
    Error,
    "encode-error: U+ED85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED86");
    },
    Error,
    "encode-error: U+ED86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED87");
    },
    Error,
    "encode-error: U+ED87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED88");
    },
    Error,
    "encode-error: U+ED88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED89");
    },
    Error,
    "encode-error: U+ED89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED8A");
    },
    Error,
    "encode-error: U+ED8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED8B");
    },
    Error,
    "encode-error: U+ED8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED8C");
    },
    Error,
    "encode-error: U+ED8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED8D");
    },
    Error,
    "encode-error: U+ED8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED8E");
    },
    Error,
    "encode-error: U+ED8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED8F");
    },
    Error,
    "encode-error: U+ED8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED90");
    },
    Error,
    "encode-error: U+ED90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED91");
    },
    Error,
    "encode-error: U+ED91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED92");
    },
    Error,
    "encode-error: U+ED92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED93");
    },
    Error,
    "encode-error: U+ED93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED94");
    },
    Error,
    "encode-error: U+ED94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED95");
    },
    Error,
    "encode-error: U+ED95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED96");
    },
    Error,
    "encode-error: U+ED96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED97");
    },
    Error,
    "encode-error: U+ED97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED98");
    },
    Error,
    "encode-error: U+ED98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED99");
    },
    Error,
    "encode-error: U+ED99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED9A");
    },
    Error,
    "encode-error: U+ED9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED9B");
    },
    Error,
    "encode-error: U+ED9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED9C");
    },
    Error,
    "encode-error: U+ED9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED9D");
    },
    Error,
    "encode-error: U+ED9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED9E");
    },
    Error,
    "encode-error: U+ED9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uED9F");
    },
    Error,
    "encode-error: U+ED9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDA0");
    },
    Error,
    "encode-error: U+EDA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDA1");
    },
    Error,
    "encode-error: U+EDA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDA2");
    },
    Error,
    "encode-error: U+EDA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDA3");
    },
    Error,
    "encode-error: U+EDA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDA4");
    },
    Error,
    "encode-error: U+EDA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDA5");
    },
    Error,
    "encode-error: U+EDA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDA6");
    },
    Error,
    "encode-error: U+EDA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDA7");
    },
    Error,
    "encode-error: U+EDA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDA8");
    },
    Error,
    "encode-error: U+EDA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDA9");
    },
    Error,
    "encode-error: U+EDA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDAA");
    },
    Error,
    "encode-error: U+EDAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDAB");
    },
    Error,
    "encode-error: U+EDAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDAC");
    },
    Error,
    "encode-error: U+EDAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDAD");
    },
    Error,
    "encode-error: U+EDAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDAE");
    },
    Error,
    "encode-error: U+EDAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDAF");
    },
    Error,
    "encode-error: U+EDAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDB0");
    },
    Error,
    "encode-error: U+EDB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDB1");
    },
    Error,
    "encode-error: U+EDB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDB2");
    },
    Error,
    "encode-error: U+EDB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDB3");
    },
    Error,
    "encode-error: U+EDB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDB4");
    },
    Error,
    "encode-error: U+EDB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDB5");
    },
    Error,
    "encode-error: U+EDB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDB6");
    },
    Error,
    "encode-error: U+EDB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDB7");
    },
    Error,
    "encode-error: U+EDB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDB8");
    },
    Error,
    "encode-error: U+EDB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDB9");
    },
    Error,
    "encode-error: U+EDB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDBA");
    },
    Error,
    "encode-error: U+EDBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDBB");
    },
    Error,
    "encode-error: U+EDBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDBC");
    },
    Error,
    "encode-error: U+EDBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDBD");
    },
    Error,
    "encode-error: U+EDBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDBE");
    },
    Error,
    "encode-error: U+EDBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDBF");
    },
    Error,
    "encode-error: U+EDBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDC0");
    },
    Error,
    "encode-error: U+EDC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDC1");
    },
    Error,
    "encode-error: U+EDC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDC2");
    },
    Error,
    "encode-error: U+EDC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDC3");
    },
    Error,
    "encode-error: U+EDC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDC4");
    },
    Error,
    "encode-error: U+EDC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDC5");
    },
    Error,
    "encode-error: U+EDC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDC6");
    },
    Error,
    "encode-error: U+EDC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDC7");
    },
    Error,
    "encode-error: U+EDC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDC8");
    },
    Error,
    "encode-error: U+EDC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDC9");
    },
    Error,
    "encode-error: U+EDC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDCA");
    },
    Error,
    "encode-error: U+EDCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDCB");
    },
    Error,
    "encode-error: U+EDCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDCC");
    },
    Error,
    "encode-error: U+EDCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDCD");
    },
    Error,
    "encode-error: U+EDCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDCE");
    },
    Error,
    "encode-error: U+EDCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDCF");
    },
    Error,
    "encode-error: U+EDCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDD0");
    },
    Error,
    "encode-error: U+EDD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDD1");
    },
    Error,
    "encode-error: U+EDD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDD2");
    },
    Error,
    "encode-error: U+EDD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDD3");
    },
    Error,
    "encode-error: U+EDD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDD4");
    },
    Error,
    "encode-error: U+EDD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDD5");
    },
    Error,
    "encode-error: U+EDD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDD6");
    },
    Error,
    "encode-error: U+EDD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDD7");
    },
    Error,
    "encode-error: U+EDD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDD8");
    },
    Error,
    "encode-error: U+EDD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDD9");
    },
    Error,
    "encode-error: U+EDD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDDA");
    },
    Error,
    "encode-error: U+EDDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDDB");
    },
    Error,
    "encode-error: U+EDDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDDC");
    },
    Error,
    "encode-error: U+EDDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDDD");
    },
    Error,
    "encode-error: U+EDDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDDE");
    },
    Error,
    "encode-error: U+EDDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDDF");
    },
    Error,
    "encode-error: U+EDDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDE0");
    },
    Error,
    "encode-error: U+EDE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDE1");
    },
    Error,
    "encode-error: U+EDE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDE2");
    },
    Error,
    "encode-error: U+EDE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDE3");
    },
    Error,
    "encode-error: U+EDE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDE4");
    },
    Error,
    "encode-error: U+EDE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDE5");
    },
    Error,
    "encode-error: U+EDE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDE6");
    },
    Error,
    "encode-error: U+EDE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDE7");
    },
    Error,
    "encode-error: U+EDE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDE8");
    },
    Error,
    "encode-error: U+EDE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDE9");
    },
    Error,
    "encode-error: U+EDE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDEA");
    },
    Error,
    "encode-error: U+EDEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDEB");
    },
    Error,
    "encode-error: U+EDEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDEC");
    },
    Error,
    "encode-error: U+EDEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDED");
    },
    Error,
    "encode-error: U+EDED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDEE");
    },
    Error,
    "encode-error: U+EDEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDEF");
    },
    Error,
    "encode-error: U+EDEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDF0");
    },
    Error,
    "encode-error: U+EDF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDF1");
    },
    Error,
    "encode-error: U+EDF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDF2");
    },
    Error,
    "encode-error: U+EDF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDF3");
    },
    Error,
    "encode-error: U+EDF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDF4");
    },
    Error,
    "encode-error: U+EDF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDF5");
    },
    Error,
    "encode-error: U+EDF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDF6");
    },
    Error,
    "encode-error: U+EDF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDF7");
    },
    Error,
    "encode-error: U+EDF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDF8");
    },
    Error,
    "encode-error: U+EDF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDF9");
    },
    Error,
    "encode-error: U+EDF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDFA");
    },
    Error,
    "encode-error: U+EDFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDFB");
    },
    Error,
    "encode-error: U+EDFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDFC");
    },
    Error,
    "encode-error: U+EDFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDFD");
    },
    Error,
    "encode-error: U+EDFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDFE");
    },
    Error,
    "encode-error: U+EDFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEDFF");
    },
    Error,
    "encode-error: U+EDFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE00");
    },
    Error,
    "encode-error: U+EE00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE01");
    },
    Error,
    "encode-error: U+EE01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE02");
    },
    Error,
    "encode-error: U+EE02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE03");
    },
    Error,
    "encode-error: U+EE03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE04");
    },
    Error,
    "encode-error: U+EE04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE05");
    },
    Error,
    "encode-error: U+EE05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE06");
    },
    Error,
    "encode-error: U+EE06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE07");
    },
    Error,
    "encode-error: U+EE07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE08");
    },
    Error,
    "encode-error: U+EE08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE09");
    },
    Error,
    "encode-error: U+EE09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE0A");
    },
    Error,
    "encode-error: U+EE0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE0B");
    },
    Error,
    "encode-error: U+EE0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE0C");
    },
    Error,
    "encode-error: U+EE0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE0D");
    },
    Error,
    "encode-error: U+EE0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE0E");
    },
    Error,
    "encode-error: U+EE0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE0F");
    },
    Error,
    "encode-error: U+EE0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE10");
    },
    Error,
    "encode-error: U+EE10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE11");
    },
    Error,
    "encode-error: U+EE11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE12");
    },
    Error,
    "encode-error: U+EE12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE13");
    },
    Error,
    "encode-error: U+EE13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE14");
    },
    Error,
    "encode-error: U+EE14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE15");
    },
    Error,
    "encode-error: U+EE15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE16");
    },
    Error,
    "encode-error: U+EE16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE17");
    },
    Error,
    "encode-error: U+EE17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE18");
    },
    Error,
    "encode-error: U+EE18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE19");
    },
    Error,
    "encode-error: U+EE19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE1A");
    },
    Error,
    "encode-error: U+EE1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE1B");
    },
    Error,
    "encode-error: U+EE1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE1C");
    },
    Error,
    "encode-error: U+EE1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE1D");
    },
    Error,
    "encode-error: U+EE1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE1E");
    },
    Error,
    "encode-error: U+EE1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE1F");
    },
    Error,
    "encode-error: U+EE1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE20");
    },
    Error,
    "encode-error: U+EE20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE21");
    },
    Error,
    "encode-error: U+EE21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE22");
    },
    Error,
    "encode-error: U+EE22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE23");
    },
    Error,
    "encode-error: U+EE23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE24");
    },
    Error,
    "encode-error: U+EE24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE25");
    },
    Error,
    "encode-error: U+EE25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE26");
    },
    Error,
    "encode-error: U+EE26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE27");
    },
    Error,
    "encode-error: U+EE27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE28");
    },
    Error,
    "encode-error: U+EE28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE29");
    },
    Error,
    "encode-error: U+EE29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE2A");
    },
    Error,
    "encode-error: U+EE2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE2B");
    },
    Error,
    "encode-error: U+EE2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE2C");
    },
    Error,
    "encode-error: U+EE2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE2D");
    },
    Error,
    "encode-error: U+EE2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE2E");
    },
    Error,
    "encode-error: U+EE2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE2F");
    },
    Error,
    "encode-error: U+EE2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE30");
    },
    Error,
    "encode-error: U+EE30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE31");
    },
    Error,
    "encode-error: U+EE31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE32");
    },
    Error,
    "encode-error: U+EE32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE33");
    },
    Error,
    "encode-error: U+EE33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE34");
    },
    Error,
    "encode-error: U+EE34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE35");
    },
    Error,
    "encode-error: U+EE35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE36");
    },
    Error,
    "encode-error: U+EE36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE37");
    },
    Error,
    "encode-error: U+EE37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE38");
    },
    Error,
    "encode-error: U+EE38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE39");
    },
    Error,
    "encode-error: U+EE39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE3A");
    },
    Error,
    "encode-error: U+EE3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE3B");
    },
    Error,
    "encode-error: U+EE3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE3C");
    },
    Error,
    "encode-error: U+EE3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE3D");
    },
    Error,
    "encode-error: U+EE3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE3E");
    },
    Error,
    "encode-error: U+EE3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE3F");
    },
    Error,
    "encode-error: U+EE3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE40");
    },
    Error,
    "encode-error: U+EE40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE41");
    },
    Error,
    "encode-error: U+EE41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE42");
    },
    Error,
    "encode-error: U+EE42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE43");
    },
    Error,
    "encode-error: U+EE43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE44");
    },
    Error,
    "encode-error: U+EE44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE45");
    },
    Error,
    "encode-error: U+EE45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE46");
    },
    Error,
    "encode-error: U+EE46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE47");
    },
    Error,
    "encode-error: U+EE47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE48");
    },
    Error,
    "encode-error: U+EE48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE49");
    },
    Error,
    "encode-error: U+EE49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE4A");
    },
    Error,
    "encode-error: U+EE4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE4B");
    },
    Error,
    "encode-error: U+EE4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE4C");
    },
    Error,
    "encode-error: U+EE4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE4D");
    },
    Error,
    "encode-error: U+EE4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE4E");
    },
    Error,
    "encode-error: U+EE4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE4F");
    },
    Error,
    "encode-error: U+EE4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE50");
    },
    Error,
    "encode-error: U+EE50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE51");
    },
    Error,
    "encode-error: U+EE51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE52");
    },
    Error,
    "encode-error: U+EE52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE53");
    },
    Error,
    "encode-error: U+EE53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE54");
    },
    Error,
    "encode-error: U+EE54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE55");
    },
    Error,
    "encode-error: U+EE55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE56");
    },
    Error,
    "encode-error: U+EE56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE57");
    },
    Error,
    "encode-error: U+EE57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE58");
    },
    Error,
    "encode-error: U+EE58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE59");
    },
    Error,
    "encode-error: U+EE59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE5A");
    },
    Error,
    "encode-error: U+EE5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE5B");
    },
    Error,
    "encode-error: U+EE5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE5C");
    },
    Error,
    "encode-error: U+EE5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE5D");
    },
    Error,
    "encode-error: U+EE5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE5E");
    },
    Error,
    "encode-error: U+EE5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE5F");
    },
    Error,
    "encode-error: U+EE5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE60");
    },
    Error,
    "encode-error: U+EE60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE61");
    },
    Error,
    "encode-error: U+EE61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE62");
    },
    Error,
    "encode-error: U+EE62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE63");
    },
    Error,
    "encode-error: U+EE63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE64");
    },
    Error,
    "encode-error: U+EE64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE65");
    },
    Error,
    "encode-error: U+EE65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE66");
    },
    Error,
    "encode-error: U+EE66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE67");
    },
    Error,
    "encode-error: U+EE67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE68");
    },
    Error,
    "encode-error: U+EE68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE69");
    },
    Error,
    "encode-error: U+EE69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE6A");
    },
    Error,
    "encode-error: U+EE6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE6B");
    },
    Error,
    "encode-error: U+EE6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE6C");
    },
    Error,
    "encode-error: U+EE6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE6D");
    },
    Error,
    "encode-error: U+EE6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE6E");
    },
    Error,
    "encode-error: U+EE6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE6F");
    },
    Error,
    "encode-error: U+EE6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE70");
    },
    Error,
    "encode-error: U+EE70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE71");
    },
    Error,
    "encode-error: U+EE71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE72");
    },
    Error,
    "encode-error: U+EE72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE73");
    },
    Error,
    "encode-error: U+EE73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE74");
    },
    Error,
    "encode-error: U+EE74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE75");
    },
    Error,
    "encode-error: U+EE75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE76");
    },
    Error,
    "encode-error: U+EE76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE77");
    },
    Error,
    "encode-error: U+EE77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE78");
    },
    Error,
    "encode-error: U+EE78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE79");
    },
    Error,
    "encode-error: U+EE79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE7A");
    },
    Error,
    "encode-error: U+EE7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE7B");
    },
    Error,
    "encode-error: U+EE7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE7C");
    },
    Error,
    "encode-error: U+EE7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE7D");
    },
    Error,
    "encode-error: U+EE7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE7E");
    },
    Error,
    "encode-error: U+EE7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE7F");
    },
    Error,
    "encode-error: U+EE7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE80");
    },
    Error,
    "encode-error: U+EE80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE81");
    },
    Error,
    "encode-error: U+EE81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE82");
    },
    Error,
    "encode-error: U+EE82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE83");
    },
    Error,
    "encode-error: U+EE83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE84");
    },
    Error,
    "encode-error: U+EE84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE85");
    },
    Error,
    "encode-error: U+EE85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE86");
    },
    Error,
    "encode-error: U+EE86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE87");
    },
    Error,
    "encode-error: U+EE87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE88");
    },
    Error,
    "encode-error: U+EE88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE89");
    },
    Error,
    "encode-error: U+EE89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE8A");
    },
    Error,
    "encode-error: U+EE8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE8B");
    },
    Error,
    "encode-error: U+EE8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE8C");
    },
    Error,
    "encode-error: U+EE8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE8D");
    },
    Error,
    "encode-error: U+EE8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE8E");
    },
    Error,
    "encode-error: U+EE8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE8F");
    },
    Error,
    "encode-error: U+EE8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE90");
    },
    Error,
    "encode-error: U+EE90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE91");
    },
    Error,
    "encode-error: U+EE91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE92");
    },
    Error,
    "encode-error: U+EE92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE93");
    },
    Error,
    "encode-error: U+EE93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE94");
    },
    Error,
    "encode-error: U+EE94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE95");
    },
    Error,
    "encode-error: U+EE95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE96");
    },
    Error,
    "encode-error: U+EE96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE97");
    },
    Error,
    "encode-error: U+EE97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE98");
    },
    Error,
    "encode-error: U+EE98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE99");
    },
    Error,
    "encode-error: U+EE99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE9A");
    },
    Error,
    "encode-error: U+EE9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE9B");
    },
    Error,
    "encode-error: U+EE9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE9C");
    },
    Error,
    "encode-error: U+EE9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE9D");
    },
    Error,
    "encode-error: U+EE9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE9E");
    },
    Error,
    "encode-error: U+EE9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEE9F");
    },
    Error,
    "encode-error: U+EE9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEA0");
    },
    Error,
    "encode-error: U+EEA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEA1");
    },
    Error,
    "encode-error: U+EEA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEA2");
    },
    Error,
    "encode-error: U+EEA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEA3");
    },
    Error,
    "encode-error: U+EEA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEA4");
    },
    Error,
    "encode-error: U+EEA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEA5");
    },
    Error,
    "encode-error: U+EEA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEA6");
    },
    Error,
    "encode-error: U+EEA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEA7");
    },
    Error,
    "encode-error: U+EEA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEA8");
    },
    Error,
    "encode-error: U+EEA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEA9");
    },
    Error,
    "encode-error: U+EEA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEAA");
    },
    Error,
    "encode-error: U+EEAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEAB");
    },
    Error,
    "encode-error: U+EEAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEAC");
    },
    Error,
    "encode-error: U+EEAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEAD");
    },
    Error,
    "encode-error: U+EEAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEAE");
    },
    Error,
    "encode-error: U+EEAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEAF");
    },
    Error,
    "encode-error: U+EEAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEB0");
    },
    Error,
    "encode-error: U+EEB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEB1");
    },
    Error,
    "encode-error: U+EEB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEB2");
    },
    Error,
    "encode-error: U+EEB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEB3");
    },
    Error,
    "encode-error: U+EEB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEB4");
    },
    Error,
    "encode-error: U+EEB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEB5");
    },
    Error,
    "encode-error: U+EEB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEB6");
    },
    Error,
    "encode-error: U+EEB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEB7");
    },
    Error,
    "encode-error: U+EEB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEB8");
    },
    Error,
    "encode-error: U+EEB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEB9");
    },
    Error,
    "encode-error: U+EEB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEBA");
    },
    Error,
    "encode-error: U+EEBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEBB");
    },
    Error,
    "encode-error: U+EEBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEBC");
    },
    Error,
    "encode-error: U+EEBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEBD");
    },
    Error,
    "encode-error: U+EEBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEBE");
    },
    Error,
    "encode-error: U+EEBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEBF");
    },
    Error,
    "encode-error: U+EEBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEC0");
    },
    Error,
    "encode-error: U+EEC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEC1");
    },
    Error,
    "encode-error: U+EEC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEC2");
    },
    Error,
    "encode-error: U+EEC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEC3");
    },
    Error,
    "encode-error: U+EEC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEC4");
    },
    Error,
    "encode-error: U+EEC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEC5");
    },
    Error,
    "encode-error: U+EEC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEC6");
    },
    Error,
    "encode-error: U+EEC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEC7");
    },
    Error,
    "encode-error: U+EEC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEC8");
    },
    Error,
    "encode-error: U+EEC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEC9");
    },
    Error,
    "encode-error: U+EEC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEECA");
    },
    Error,
    "encode-error: U+EECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEECB");
    },
    Error,
    "encode-error: U+EECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEECC");
    },
    Error,
    "encode-error: U+EECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEECD");
    },
    Error,
    "encode-error: U+EECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEECE");
    },
    Error,
    "encode-error: U+EECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEECF");
    },
    Error,
    "encode-error: U+EECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEED0");
    },
    Error,
    "encode-error: U+EED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEED1");
    },
    Error,
    "encode-error: U+EED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEED2");
    },
    Error,
    "encode-error: U+EED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEED3");
    },
    Error,
    "encode-error: U+EED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEED4");
    },
    Error,
    "encode-error: U+EED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEED5");
    },
    Error,
    "encode-error: U+EED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEED6");
    },
    Error,
    "encode-error: U+EED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEED7");
    },
    Error,
    "encode-error: U+EED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEED8");
    },
    Error,
    "encode-error: U+EED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEED9");
    },
    Error,
    "encode-error: U+EED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEDA");
    },
    Error,
    "encode-error: U+EEDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEDB");
    },
    Error,
    "encode-error: U+EEDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEDC");
    },
    Error,
    "encode-error: U+EEDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEDD");
    },
    Error,
    "encode-error: U+EEDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEDE");
    },
    Error,
    "encode-error: U+EEDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEDF");
    },
    Error,
    "encode-error: U+EEDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEE0");
    },
    Error,
    "encode-error: U+EEE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEE1");
    },
    Error,
    "encode-error: U+EEE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEE2");
    },
    Error,
    "encode-error: U+EEE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEE3");
    },
    Error,
    "encode-error: U+EEE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEE4");
    },
    Error,
    "encode-error: U+EEE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEE5");
    },
    Error,
    "encode-error: U+EEE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEE6");
    },
    Error,
    "encode-error: U+EEE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEE7");
    },
    Error,
    "encode-error: U+EEE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEE8");
    },
    Error,
    "encode-error: U+EEE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEE9");
    },
    Error,
    "encode-error: U+EEE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEEA");
    },
    Error,
    "encode-error: U+EEEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEEB");
    },
    Error,
    "encode-error: U+EEEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEEC");
    },
    Error,
    "encode-error: U+EEEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEED");
    },
    Error,
    "encode-error: U+EEED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEEE");
    },
    Error,
    "encode-error: U+EEEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEEF");
    },
    Error,
    "encode-error: U+EEEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEF0");
    },
    Error,
    "encode-error: U+EEF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEF1");
    },
    Error,
    "encode-error: U+EEF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEF2");
    },
    Error,
    "encode-error: U+EEF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEF3");
    },
    Error,
    "encode-error: U+EEF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEF4");
    },
    Error,
    "encode-error: U+EEF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEF5");
    },
    Error,
    "encode-error: U+EEF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEF6");
    },
    Error,
    "encode-error: U+EEF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEF7");
    },
    Error,
    "encode-error: U+EEF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEF8");
    },
    Error,
    "encode-error: U+EEF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEF9");
    },
    Error,
    "encode-error: U+EEF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEFA");
    },
    Error,
    "encode-error: U+EEFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEFB");
    },
    Error,
    "encode-error: U+EEFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEFC");
    },
    Error,
    "encode-error: U+EEFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEFD");
    },
    Error,
    "encode-error: U+EEFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEFE");
    },
    Error,
    "encode-error: U+EEFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEEFF");
    },
    Error,
    "encode-error: U+EEFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF00");
    },
    Error,
    "encode-error: U+EF00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF01");
    },
    Error,
    "encode-error: U+EF01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF02");
    },
    Error,
    "encode-error: U+EF02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF03");
    },
    Error,
    "encode-error: U+EF03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF04");
    },
    Error,
    "encode-error: U+EF04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF05");
    },
    Error,
    "encode-error: U+EF05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF06");
    },
    Error,
    "encode-error: U+EF06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF07");
    },
    Error,
    "encode-error: U+EF07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF08");
    },
    Error,
    "encode-error: U+EF08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF09");
    },
    Error,
    "encode-error: U+EF09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF0A");
    },
    Error,
    "encode-error: U+EF0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF0B");
    },
    Error,
    "encode-error: U+EF0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF0C");
    },
    Error,
    "encode-error: U+EF0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF0D");
    },
    Error,
    "encode-error: U+EF0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF0E");
    },
    Error,
    "encode-error: U+EF0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF0F");
    },
    Error,
    "encode-error: U+EF0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF10");
    },
    Error,
    "encode-error: U+EF10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF11");
    },
    Error,
    "encode-error: U+EF11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF12");
    },
    Error,
    "encode-error: U+EF12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF13");
    },
    Error,
    "encode-error: U+EF13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF14");
    },
    Error,
    "encode-error: U+EF14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF15");
    },
    Error,
    "encode-error: U+EF15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF16");
    },
    Error,
    "encode-error: U+EF16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF17");
    },
    Error,
    "encode-error: U+EF17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF18");
    },
    Error,
    "encode-error: U+EF18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF19");
    },
    Error,
    "encode-error: U+EF19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF1A");
    },
    Error,
    "encode-error: U+EF1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF1B");
    },
    Error,
    "encode-error: U+EF1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF1C");
    },
    Error,
    "encode-error: U+EF1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF1D");
    },
    Error,
    "encode-error: U+EF1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF1E");
    },
    Error,
    "encode-error: U+EF1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF1F");
    },
    Error,
    "encode-error: U+EF1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF20");
    },
    Error,
    "encode-error: U+EF20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF21");
    },
    Error,
    "encode-error: U+EF21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF22");
    },
    Error,
    "encode-error: U+EF22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF23");
    },
    Error,
    "encode-error: U+EF23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF24");
    },
    Error,
    "encode-error: U+EF24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF25");
    },
    Error,
    "encode-error: U+EF25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF26");
    },
    Error,
    "encode-error: U+EF26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF27");
    },
    Error,
    "encode-error: U+EF27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF28");
    },
    Error,
    "encode-error: U+EF28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF29");
    },
    Error,
    "encode-error: U+EF29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF2A");
    },
    Error,
    "encode-error: U+EF2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF2B");
    },
    Error,
    "encode-error: U+EF2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF2C");
    },
    Error,
    "encode-error: U+EF2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF2D");
    },
    Error,
    "encode-error: U+EF2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF2E");
    },
    Error,
    "encode-error: U+EF2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF2F");
    },
    Error,
    "encode-error: U+EF2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF30");
    },
    Error,
    "encode-error: U+EF30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF31");
    },
    Error,
    "encode-error: U+EF31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF32");
    },
    Error,
    "encode-error: U+EF32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF33");
    },
    Error,
    "encode-error: U+EF33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF34");
    },
    Error,
    "encode-error: U+EF34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF35");
    },
    Error,
    "encode-error: U+EF35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF36");
    },
    Error,
    "encode-error: U+EF36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF37");
    },
    Error,
    "encode-error: U+EF37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF38");
    },
    Error,
    "encode-error: U+EF38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF39");
    },
    Error,
    "encode-error: U+EF39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF3A");
    },
    Error,
    "encode-error: U+EF3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF3B");
    },
    Error,
    "encode-error: U+EF3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF3C");
    },
    Error,
    "encode-error: U+EF3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF3D");
    },
    Error,
    "encode-error: U+EF3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF3E");
    },
    Error,
    "encode-error: U+EF3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF3F");
    },
    Error,
    "encode-error: U+EF3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF40");
    },
    Error,
    "encode-error: U+EF40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF41");
    },
    Error,
    "encode-error: U+EF41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF42");
    },
    Error,
    "encode-error: U+EF42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF43");
    },
    Error,
    "encode-error: U+EF43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF44");
    },
    Error,
    "encode-error: U+EF44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF45");
    },
    Error,
    "encode-error: U+EF45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF46");
    },
    Error,
    "encode-error: U+EF46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF47");
    },
    Error,
    "encode-error: U+EF47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF48");
    },
    Error,
    "encode-error: U+EF48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF49");
    },
    Error,
    "encode-error: U+EF49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF4A");
    },
    Error,
    "encode-error: U+EF4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF4B");
    },
    Error,
    "encode-error: U+EF4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF4C");
    },
    Error,
    "encode-error: U+EF4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF4D");
    },
    Error,
    "encode-error: U+EF4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF4E");
    },
    Error,
    "encode-error: U+EF4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF4F");
    },
    Error,
    "encode-error: U+EF4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF50");
    },
    Error,
    "encode-error: U+EF50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF51");
    },
    Error,
    "encode-error: U+EF51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF52");
    },
    Error,
    "encode-error: U+EF52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF53");
    },
    Error,
    "encode-error: U+EF53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF54");
    },
    Error,
    "encode-error: U+EF54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF55");
    },
    Error,
    "encode-error: U+EF55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF56");
    },
    Error,
    "encode-error: U+EF56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF57");
    },
    Error,
    "encode-error: U+EF57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF58");
    },
    Error,
    "encode-error: U+EF58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF59");
    },
    Error,
    "encode-error: U+EF59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF5A");
    },
    Error,
    "encode-error: U+EF5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF5B");
    },
    Error,
    "encode-error: U+EF5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF5C");
    },
    Error,
    "encode-error: U+EF5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF5D");
    },
    Error,
    "encode-error: U+EF5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF5E");
    },
    Error,
    "encode-error: U+EF5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF5F");
    },
    Error,
    "encode-error: U+EF5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF60");
    },
    Error,
    "encode-error: U+EF60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF61");
    },
    Error,
    "encode-error: U+EF61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF62");
    },
    Error,
    "encode-error: U+EF62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF63");
    },
    Error,
    "encode-error: U+EF63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF64");
    },
    Error,
    "encode-error: U+EF64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF65");
    },
    Error,
    "encode-error: U+EF65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF66");
    },
    Error,
    "encode-error: U+EF66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF67");
    },
    Error,
    "encode-error: U+EF67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF68");
    },
    Error,
    "encode-error: U+EF68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF69");
    },
    Error,
    "encode-error: U+EF69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF6A");
    },
    Error,
    "encode-error: U+EF6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF6B");
    },
    Error,
    "encode-error: U+EF6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF6C");
    },
    Error,
    "encode-error: U+EF6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF6D");
    },
    Error,
    "encode-error: U+EF6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF6E");
    },
    Error,
    "encode-error: U+EF6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF6F");
    },
    Error,
    "encode-error: U+EF6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF70");
    },
    Error,
    "encode-error: U+EF70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF71");
    },
    Error,
    "encode-error: U+EF71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF72");
    },
    Error,
    "encode-error: U+EF72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF73");
    },
    Error,
    "encode-error: U+EF73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF74");
    },
    Error,
    "encode-error: U+EF74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF75");
    },
    Error,
    "encode-error: U+EF75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF76");
    },
    Error,
    "encode-error: U+EF76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF77");
    },
    Error,
    "encode-error: U+EF77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF78");
    },
    Error,
    "encode-error: U+EF78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF79");
    },
    Error,
    "encode-error: U+EF79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF7A");
    },
    Error,
    "encode-error: U+EF7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF7B");
    },
    Error,
    "encode-error: U+EF7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF7C");
    },
    Error,
    "encode-error: U+EF7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF7D");
    },
    Error,
    "encode-error: U+EF7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF7E");
    },
    Error,
    "encode-error: U+EF7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF7F");
    },
    Error,
    "encode-error: U+EF7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF80");
    },
    Error,
    "encode-error: U+EF80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF81");
    },
    Error,
    "encode-error: U+EF81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF82");
    },
    Error,
    "encode-error: U+EF82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF83");
    },
    Error,
    "encode-error: U+EF83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF84");
    },
    Error,
    "encode-error: U+EF84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF85");
    },
    Error,
    "encode-error: U+EF85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF86");
    },
    Error,
    "encode-error: U+EF86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF87");
    },
    Error,
    "encode-error: U+EF87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF88");
    },
    Error,
    "encode-error: U+EF88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF89");
    },
    Error,
    "encode-error: U+EF89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF8A");
    },
    Error,
    "encode-error: U+EF8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF8B");
    },
    Error,
    "encode-error: U+EF8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF8C");
    },
    Error,
    "encode-error: U+EF8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF8D");
    },
    Error,
    "encode-error: U+EF8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF8E");
    },
    Error,
    "encode-error: U+EF8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF8F");
    },
    Error,
    "encode-error: U+EF8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF90");
    },
    Error,
    "encode-error: U+EF90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF91");
    },
    Error,
    "encode-error: U+EF91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF92");
    },
    Error,
    "encode-error: U+EF92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF93");
    },
    Error,
    "encode-error: U+EF93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF94");
    },
    Error,
    "encode-error: U+EF94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF95");
    },
    Error,
    "encode-error: U+EF95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF96");
    },
    Error,
    "encode-error: U+EF96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF97");
    },
    Error,
    "encode-error: U+EF97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF98");
    },
    Error,
    "encode-error: U+EF98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF99");
    },
    Error,
    "encode-error: U+EF99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF9A");
    },
    Error,
    "encode-error: U+EF9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF9B");
    },
    Error,
    "encode-error: U+EF9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF9C");
    },
    Error,
    "encode-error: U+EF9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF9D");
    },
    Error,
    "encode-error: U+EF9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF9E");
    },
    Error,
    "encode-error: U+EF9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEF9F");
    },
    Error,
    "encode-error: U+EF9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFA0");
    },
    Error,
    "encode-error: U+EFA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFA1");
    },
    Error,
    "encode-error: U+EFA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFA2");
    },
    Error,
    "encode-error: U+EFA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFA3");
    },
    Error,
    "encode-error: U+EFA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFA4");
    },
    Error,
    "encode-error: U+EFA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFA5");
    },
    Error,
    "encode-error: U+EFA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFA6");
    },
    Error,
    "encode-error: U+EFA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFA7");
    },
    Error,
    "encode-error: U+EFA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFA8");
    },
    Error,
    "encode-error: U+EFA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFA9");
    },
    Error,
    "encode-error: U+EFA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFAA");
    },
    Error,
    "encode-error: U+EFAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFAB");
    },
    Error,
    "encode-error: U+EFAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFAC");
    },
    Error,
    "encode-error: U+EFAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFAD");
    },
    Error,
    "encode-error: U+EFAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFAE");
    },
    Error,
    "encode-error: U+EFAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFAF");
    },
    Error,
    "encode-error: U+EFAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFB0");
    },
    Error,
    "encode-error: U+EFB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFB1");
    },
    Error,
    "encode-error: U+EFB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFB2");
    },
    Error,
    "encode-error: U+EFB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFB3");
    },
    Error,
    "encode-error: U+EFB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFB4");
    },
    Error,
    "encode-error: U+EFB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFB5");
    },
    Error,
    "encode-error: U+EFB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFB6");
    },
    Error,
    "encode-error: U+EFB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFB7");
    },
    Error,
    "encode-error: U+EFB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFB8");
    },
    Error,
    "encode-error: U+EFB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFB9");
    },
    Error,
    "encode-error: U+EFB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFBA");
    },
    Error,
    "encode-error: U+EFBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFBB");
    },
    Error,
    "encode-error: U+EFBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFBC");
    },
    Error,
    "encode-error: U+EFBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFBD");
    },
    Error,
    "encode-error: U+EFBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFBE");
    },
    Error,
    "encode-error: U+EFBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFBF");
    },
    Error,
    "encode-error: U+EFBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFC0");
    },
    Error,
    "encode-error: U+EFC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFC1");
    },
    Error,
    "encode-error: U+EFC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFC2");
    },
    Error,
    "encode-error: U+EFC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFC3");
    },
    Error,
    "encode-error: U+EFC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFC4");
    },
    Error,
    "encode-error: U+EFC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFC5");
    },
    Error,
    "encode-error: U+EFC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFC6");
    },
    Error,
    "encode-error: U+EFC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFC7");
    },
    Error,
    "encode-error: U+EFC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFC8");
    },
    Error,
    "encode-error: U+EFC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFC9");
    },
    Error,
    "encode-error: U+EFC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFCA");
    },
    Error,
    "encode-error: U+EFCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFCB");
    },
    Error,
    "encode-error: U+EFCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFCC");
    },
    Error,
    "encode-error: U+EFCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFCD");
    },
    Error,
    "encode-error: U+EFCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFCE");
    },
    Error,
    "encode-error: U+EFCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFCF");
    },
    Error,
    "encode-error: U+EFCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFD0");
    },
    Error,
    "encode-error: U+EFD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFD1");
    },
    Error,
    "encode-error: U+EFD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFD2");
    },
    Error,
    "encode-error: U+EFD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFD3");
    },
    Error,
    "encode-error: U+EFD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFD4");
    },
    Error,
    "encode-error: U+EFD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFD5");
    },
    Error,
    "encode-error: U+EFD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFD6");
    },
    Error,
    "encode-error: U+EFD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFD7");
    },
    Error,
    "encode-error: U+EFD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFD8");
    },
    Error,
    "encode-error: U+EFD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFD9");
    },
    Error,
    "encode-error: U+EFD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFDA");
    },
    Error,
    "encode-error: U+EFDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFDB");
    },
    Error,
    "encode-error: U+EFDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFDC");
    },
    Error,
    "encode-error: U+EFDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFDD");
    },
    Error,
    "encode-error: U+EFDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFDE");
    },
    Error,
    "encode-error: U+EFDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFDF");
    },
    Error,
    "encode-error: U+EFDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFE0");
    },
    Error,
    "encode-error: U+EFE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFE1");
    },
    Error,
    "encode-error: U+EFE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFE2");
    },
    Error,
    "encode-error: U+EFE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFE3");
    },
    Error,
    "encode-error: U+EFE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFE4");
    },
    Error,
    "encode-error: U+EFE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFE5");
    },
    Error,
    "encode-error: U+EFE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFE6");
    },
    Error,
    "encode-error: U+EFE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFE7");
    },
    Error,
    "encode-error: U+EFE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFE8");
    },
    Error,
    "encode-error: U+EFE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFE9");
    },
    Error,
    "encode-error: U+EFE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFEA");
    },
    Error,
    "encode-error: U+EFEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFEB");
    },
    Error,
    "encode-error: U+EFEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFEC");
    },
    Error,
    "encode-error: U+EFEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFED");
    },
    Error,
    "encode-error: U+EFED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFEE");
    },
    Error,
    "encode-error: U+EFEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFEF");
    },
    Error,
    "encode-error: U+EFEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFF0");
    },
    Error,
    "encode-error: U+EFF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFF1");
    },
    Error,
    "encode-error: U+EFF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFF2");
    },
    Error,
    "encode-error: U+EFF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFF3");
    },
    Error,
    "encode-error: U+EFF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFF4");
    },
    Error,
    "encode-error: U+EFF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFF5");
    },
    Error,
    "encode-error: U+EFF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFF6");
    },
    Error,
    "encode-error: U+EFF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFF7");
    },
    Error,
    "encode-error: U+EFF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFF8");
    },
    Error,
    "encode-error: U+EFF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFF9");
    },
    Error,
    "encode-error: U+EFF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFFA");
    },
    Error,
    "encode-error: U+EFFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFFB");
    },
    Error,
    "encode-error: U+EFFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFFC");
    },
    Error,
    "encode-error: U+EFFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFFD");
    },
    Error,
    "encode-error: U+EFFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFFE");
    },
    Error,
    "encode-error: U+EFFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uEFFF");
    },
    Error,
    "encode-error: U+EFFF",
  );
});
