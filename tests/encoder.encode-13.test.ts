import { assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+C000-U+CFFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  assertThrows(
    () => {
      ms932Encoder.encode("\uC000");
    },
    Error,
    "encode-error: U+C000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC001");
    },
    Error,
    "encode-error: U+C001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC002");
    },
    Error,
    "encode-error: U+C002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC003");
    },
    Error,
    "encode-error: U+C003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC004");
    },
    Error,
    "encode-error: U+C004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC005");
    },
    Error,
    "encode-error: U+C005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC006");
    },
    Error,
    "encode-error: U+C006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC007");
    },
    Error,
    "encode-error: U+C007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC008");
    },
    Error,
    "encode-error: U+C008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC009");
    },
    Error,
    "encode-error: U+C009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC00A");
    },
    Error,
    "encode-error: U+C00A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC00B");
    },
    Error,
    "encode-error: U+C00B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC00C");
    },
    Error,
    "encode-error: U+C00C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC00D");
    },
    Error,
    "encode-error: U+C00D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC00E");
    },
    Error,
    "encode-error: U+C00E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC00F");
    },
    Error,
    "encode-error: U+C00F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC010");
    },
    Error,
    "encode-error: U+C010",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC011");
    },
    Error,
    "encode-error: U+C011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC012");
    },
    Error,
    "encode-error: U+C012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC013");
    },
    Error,
    "encode-error: U+C013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC014");
    },
    Error,
    "encode-error: U+C014",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC015");
    },
    Error,
    "encode-error: U+C015",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC016");
    },
    Error,
    "encode-error: U+C016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC017");
    },
    Error,
    "encode-error: U+C017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC018");
    },
    Error,
    "encode-error: U+C018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC019");
    },
    Error,
    "encode-error: U+C019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC01A");
    },
    Error,
    "encode-error: U+C01A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC01B");
    },
    Error,
    "encode-error: U+C01B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC01C");
    },
    Error,
    "encode-error: U+C01C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC01D");
    },
    Error,
    "encode-error: U+C01D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC01E");
    },
    Error,
    "encode-error: U+C01E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC01F");
    },
    Error,
    "encode-error: U+C01F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC020");
    },
    Error,
    "encode-error: U+C020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC021");
    },
    Error,
    "encode-error: U+C021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC022");
    },
    Error,
    "encode-error: U+C022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC023");
    },
    Error,
    "encode-error: U+C023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC024");
    },
    Error,
    "encode-error: U+C024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC025");
    },
    Error,
    "encode-error: U+C025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC026");
    },
    Error,
    "encode-error: U+C026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC027");
    },
    Error,
    "encode-error: U+C027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC028");
    },
    Error,
    "encode-error: U+C028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC029");
    },
    Error,
    "encode-error: U+C029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC02A");
    },
    Error,
    "encode-error: U+C02A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC02B");
    },
    Error,
    "encode-error: U+C02B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC02C");
    },
    Error,
    "encode-error: U+C02C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC02D");
    },
    Error,
    "encode-error: U+C02D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC02E");
    },
    Error,
    "encode-error: U+C02E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC02F");
    },
    Error,
    "encode-error: U+C02F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC030");
    },
    Error,
    "encode-error: U+C030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC031");
    },
    Error,
    "encode-error: U+C031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC032");
    },
    Error,
    "encode-error: U+C032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC033");
    },
    Error,
    "encode-error: U+C033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC034");
    },
    Error,
    "encode-error: U+C034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC035");
    },
    Error,
    "encode-error: U+C035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC036");
    },
    Error,
    "encode-error: U+C036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC037");
    },
    Error,
    "encode-error: U+C037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC038");
    },
    Error,
    "encode-error: U+C038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC039");
    },
    Error,
    "encode-error: U+C039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC03A");
    },
    Error,
    "encode-error: U+C03A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC03B");
    },
    Error,
    "encode-error: U+C03B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC03C");
    },
    Error,
    "encode-error: U+C03C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC03D");
    },
    Error,
    "encode-error: U+C03D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC03E");
    },
    Error,
    "encode-error: U+C03E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC03F");
    },
    Error,
    "encode-error: U+C03F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC040");
    },
    Error,
    "encode-error: U+C040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC041");
    },
    Error,
    "encode-error: U+C041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC042");
    },
    Error,
    "encode-error: U+C042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC043");
    },
    Error,
    "encode-error: U+C043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC044");
    },
    Error,
    "encode-error: U+C044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC045");
    },
    Error,
    "encode-error: U+C045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC046");
    },
    Error,
    "encode-error: U+C046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC047");
    },
    Error,
    "encode-error: U+C047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC048");
    },
    Error,
    "encode-error: U+C048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC049");
    },
    Error,
    "encode-error: U+C049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC04A");
    },
    Error,
    "encode-error: U+C04A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC04B");
    },
    Error,
    "encode-error: U+C04B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC04C");
    },
    Error,
    "encode-error: U+C04C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC04D");
    },
    Error,
    "encode-error: U+C04D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC04E");
    },
    Error,
    "encode-error: U+C04E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC04F");
    },
    Error,
    "encode-error: U+C04F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC050");
    },
    Error,
    "encode-error: U+C050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC051");
    },
    Error,
    "encode-error: U+C051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC052");
    },
    Error,
    "encode-error: U+C052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC053");
    },
    Error,
    "encode-error: U+C053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC054");
    },
    Error,
    "encode-error: U+C054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC055");
    },
    Error,
    "encode-error: U+C055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC056");
    },
    Error,
    "encode-error: U+C056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC057");
    },
    Error,
    "encode-error: U+C057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC058");
    },
    Error,
    "encode-error: U+C058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC059");
    },
    Error,
    "encode-error: U+C059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC05A");
    },
    Error,
    "encode-error: U+C05A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC05B");
    },
    Error,
    "encode-error: U+C05B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC05C");
    },
    Error,
    "encode-error: U+C05C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC05D");
    },
    Error,
    "encode-error: U+C05D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC05E");
    },
    Error,
    "encode-error: U+C05E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC05F");
    },
    Error,
    "encode-error: U+C05F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC060");
    },
    Error,
    "encode-error: U+C060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC061");
    },
    Error,
    "encode-error: U+C061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC062");
    },
    Error,
    "encode-error: U+C062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC063");
    },
    Error,
    "encode-error: U+C063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC064");
    },
    Error,
    "encode-error: U+C064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC065");
    },
    Error,
    "encode-error: U+C065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC066");
    },
    Error,
    "encode-error: U+C066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC067");
    },
    Error,
    "encode-error: U+C067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC068");
    },
    Error,
    "encode-error: U+C068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC069");
    },
    Error,
    "encode-error: U+C069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC06A");
    },
    Error,
    "encode-error: U+C06A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC06B");
    },
    Error,
    "encode-error: U+C06B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC06C");
    },
    Error,
    "encode-error: U+C06C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC06D");
    },
    Error,
    "encode-error: U+C06D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC06E");
    },
    Error,
    "encode-error: U+C06E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC06F");
    },
    Error,
    "encode-error: U+C06F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC070");
    },
    Error,
    "encode-error: U+C070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC071");
    },
    Error,
    "encode-error: U+C071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC072");
    },
    Error,
    "encode-error: U+C072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC073");
    },
    Error,
    "encode-error: U+C073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC074");
    },
    Error,
    "encode-error: U+C074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC075");
    },
    Error,
    "encode-error: U+C075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC076");
    },
    Error,
    "encode-error: U+C076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC077");
    },
    Error,
    "encode-error: U+C077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC078");
    },
    Error,
    "encode-error: U+C078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC079");
    },
    Error,
    "encode-error: U+C079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC07A");
    },
    Error,
    "encode-error: U+C07A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC07B");
    },
    Error,
    "encode-error: U+C07B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC07C");
    },
    Error,
    "encode-error: U+C07C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC07D");
    },
    Error,
    "encode-error: U+C07D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC07E");
    },
    Error,
    "encode-error: U+C07E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC07F");
    },
    Error,
    "encode-error: U+C07F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC080");
    },
    Error,
    "encode-error: U+C080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC081");
    },
    Error,
    "encode-error: U+C081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC082");
    },
    Error,
    "encode-error: U+C082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC083");
    },
    Error,
    "encode-error: U+C083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC084");
    },
    Error,
    "encode-error: U+C084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC085");
    },
    Error,
    "encode-error: U+C085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC086");
    },
    Error,
    "encode-error: U+C086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC087");
    },
    Error,
    "encode-error: U+C087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC088");
    },
    Error,
    "encode-error: U+C088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC089");
    },
    Error,
    "encode-error: U+C089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC08A");
    },
    Error,
    "encode-error: U+C08A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC08B");
    },
    Error,
    "encode-error: U+C08B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC08C");
    },
    Error,
    "encode-error: U+C08C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC08D");
    },
    Error,
    "encode-error: U+C08D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC08E");
    },
    Error,
    "encode-error: U+C08E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC08F");
    },
    Error,
    "encode-error: U+C08F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC090");
    },
    Error,
    "encode-error: U+C090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC091");
    },
    Error,
    "encode-error: U+C091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC092");
    },
    Error,
    "encode-error: U+C092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC093");
    },
    Error,
    "encode-error: U+C093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC094");
    },
    Error,
    "encode-error: U+C094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC095");
    },
    Error,
    "encode-error: U+C095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC096");
    },
    Error,
    "encode-error: U+C096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC097");
    },
    Error,
    "encode-error: U+C097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC098");
    },
    Error,
    "encode-error: U+C098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC099");
    },
    Error,
    "encode-error: U+C099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC09A");
    },
    Error,
    "encode-error: U+C09A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC09B");
    },
    Error,
    "encode-error: U+C09B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC09C");
    },
    Error,
    "encode-error: U+C09C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC09D");
    },
    Error,
    "encode-error: U+C09D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC09E");
    },
    Error,
    "encode-error: U+C09E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC09F");
    },
    Error,
    "encode-error: U+C09F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A0");
    },
    Error,
    "encode-error: U+C0A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A1");
    },
    Error,
    "encode-error: U+C0A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A2");
    },
    Error,
    "encode-error: U+C0A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A3");
    },
    Error,
    "encode-error: U+C0A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A4");
    },
    Error,
    "encode-error: U+C0A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A5");
    },
    Error,
    "encode-error: U+C0A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A6");
    },
    Error,
    "encode-error: U+C0A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A7");
    },
    Error,
    "encode-error: U+C0A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A8");
    },
    Error,
    "encode-error: U+C0A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A9");
    },
    Error,
    "encode-error: U+C0A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0AA");
    },
    Error,
    "encode-error: U+C0AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0AB");
    },
    Error,
    "encode-error: U+C0AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0AC");
    },
    Error,
    "encode-error: U+C0AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0AD");
    },
    Error,
    "encode-error: U+C0AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0AE");
    },
    Error,
    "encode-error: U+C0AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0AF");
    },
    Error,
    "encode-error: U+C0AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B0");
    },
    Error,
    "encode-error: U+C0B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B1");
    },
    Error,
    "encode-error: U+C0B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B2");
    },
    Error,
    "encode-error: U+C0B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B3");
    },
    Error,
    "encode-error: U+C0B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B4");
    },
    Error,
    "encode-error: U+C0B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B5");
    },
    Error,
    "encode-error: U+C0B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B6");
    },
    Error,
    "encode-error: U+C0B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B7");
    },
    Error,
    "encode-error: U+C0B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B8");
    },
    Error,
    "encode-error: U+C0B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B9");
    },
    Error,
    "encode-error: U+C0B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0BA");
    },
    Error,
    "encode-error: U+C0BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0BB");
    },
    Error,
    "encode-error: U+C0BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0BC");
    },
    Error,
    "encode-error: U+C0BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0BD");
    },
    Error,
    "encode-error: U+C0BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0BE");
    },
    Error,
    "encode-error: U+C0BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0BF");
    },
    Error,
    "encode-error: U+C0BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C0");
    },
    Error,
    "encode-error: U+C0C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C1");
    },
    Error,
    "encode-error: U+C0C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C2");
    },
    Error,
    "encode-error: U+C0C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C3");
    },
    Error,
    "encode-error: U+C0C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C4");
    },
    Error,
    "encode-error: U+C0C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C5");
    },
    Error,
    "encode-error: U+C0C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C6");
    },
    Error,
    "encode-error: U+C0C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C7");
    },
    Error,
    "encode-error: U+C0C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C8");
    },
    Error,
    "encode-error: U+C0C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C9");
    },
    Error,
    "encode-error: U+C0C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0CA");
    },
    Error,
    "encode-error: U+C0CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0CB");
    },
    Error,
    "encode-error: U+C0CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0CC");
    },
    Error,
    "encode-error: U+C0CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0CD");
    },
    Error,
    "encode-error: U+C0CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0CE");
    },
    Error,
    "encode-error: U+C0CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0CF");
    },
    Error,
    "encode-error: U+C0CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D0");
    },
    Error,
    "encode-error: U+C0D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D1");
    },
    Error,
    "encode-error: U+C0D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D2");
    },
    Error,
    "encode-error: U+C0D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D3");
    },
    Error,
    "encode-error: U+C0D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D4");
    },
    Error,
    "encode-error: U+C0D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D5");
    },
    Error,
    "encode-error: U+C0D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D6");
    },
    Error,
    "encode-error: U+C0D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D7");
    },
    Error,
    "encode-error: U+C0D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D8");
    },
    Error,
    "encode-error: U+C0D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D9");
    },
    Error,
    "encode-error: U+C0D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0DA");
    },
    Error,
    "encode-error: U+C0DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0DB");
    },
    Error,
    "encode-error: U+C0DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0DC");
    },
    Error,
    "encode-error: U+C0DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0DD");
    },
    Error,
    "encode-error: U+C0DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0DE");
    },
    Error,
    "encode-error: U+C0DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0DF");
    },
    Error,
    "encode-error: U+C0DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E0");
    },
    Error,
    "encode-error: U+C0E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E1");
    },
    Error,
    "encode-error: U+C0E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E2");
    },
    Error,
    "encode-error: U+C0E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E3");
    },
    Error,
    "encode-error: U+C0E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E4");
    },
    Error,
    "encode-error: U+C0E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E5");
    },
    Error,
    "encode-error: U+C0E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E6");
    },
    Error,
    "encode-error: U+C0E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E7");
    },
    Error,
    "encode-error: U+C0E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E8");
    },
    Error,
    "encode-error: U+C0E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E9");
    },
    Error,
    "encode-error: U+C0E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0EA");
    },
    Error,
    "encode-error: U+C0EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0EB");
    },
    Error,
    "encode-error: U+C0EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0EC");
    },
    Error,
    "encode-error: U+C0EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0ED");
    },
    Error,
    "encode-error: U+C0ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0EE");
    },
    Error,
    "encode-error: U+C0EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0EF");
    },
    Error,
    "encode-error: U+C0EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F0");
    },
    Error,
    "encode-error: U+C0F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F1");
    },
    Error,
    "encode-error: U+C0F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F2");
    },
    Error,
    "encode-error: U+C0F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F3");
    },
    Error,
    "encode-error: U+C0F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F4");
    },
    Error,
    "encode-error: U+C0F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F5");
    },
    Error,
    "encode-error: U+C0F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F6");
    },
    Error,
    "encode-error: U+C0F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F7");
    },
    Error,
    "encode-error: U+C0F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F8");
    },
    Error,
    "encode-error: U+C0F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F9");
    },
    Error,
    "encode-error: U+C0F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0FA");
    },
    Error,
    "encode-error: U+C0FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0FB");
    },
    Error,
    "encode-error: U+C0FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0FC");
    },
    Error,
    "encode-error: U+C0FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0FD");
    },
    Error,
    "encode-error: U+C0FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0FE");
    },
    Error,
    "encode-error: U+C0FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0FF");
    },
    Error,
    "encode-error: U+C0FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC100");
    },
    Error,
    "encode-error: U+C100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC101");
    },
    Error,
    "encode-error: U+C101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC102");
    },
    Error,
    "encode-error: U+C102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC103");
    },
    Error,
    "encode-error: U+C103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC104");
    },
    Error,
    "encode-error: U+C104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC105");
    },
    Error,
    "encode-error: U+C105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC106");
    },
    Error,
    "encode-error: U+C106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC107");
    },
    Error,
    "encode-error: U+C107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC108");
    },
    Error,
    "encode-error: U+C108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC109");
    },
    Error,
    "encode-error: U+C109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC10A");
    },
    Error,
    "encode-error: U+C10A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC10B");
    },
    Error,
    "encode-error: U+C10B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC10C");
    },
    Error,
    "encode-error: U+C10C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC10D");
    },
    Error,
    "encode-error: U+C10D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC10E");
    },
    Error,
    "encode-error: U+C10E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC10F");
    },
    Error,
    "encode-error: U+C10F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC110");
    },
    Error,
    "encode-error: U+C110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC111");
    },
    Error,
    "encode-error: U+C111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC112");
    },
    Error,
    "encode-error: U+C112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC113");
    },
    Error,
    "encode-error: U+C113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC114");
    },
    Error,
    "encode-error: U+C114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC115");
    },
    Error,
    "encode-error: U+C115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC116");
    },
    Error,
    "encode-error: U+C116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC117");
    },
    Error,
    "encode-error: U+C117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC118");
    },
    Error,
    "encode-error: U+C118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC119");
    },
    Error,
    "encode-error: U+C119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC11A");
    },
    Error,
    "encode-error: U+C11A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC11B");
    },
    Error,
    "encode-error: U+C11B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC11C");
    },
    Error,
    "encode-error: U+C11C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC11D");
    },
    Error,
    "encode-error: U+C11D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC11E");
    },
    Error,
    "encode-error: U+C11E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC11F");
    },
    Error,
    "encode-error: U+C11F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC120");
    },
    Error,
    "encode-error: U+C120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC121");
    },
    Error,
    "encode-error: U+C121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC122");
    },
    Error,
    "encode-error: U+C122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC123");
    },
    Error,
    "encode-error: U+C123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC124");
    },
    Error,
    "encode-error: U+C124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC125");
    },
    Error,
    "encode-error: U+C125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC126");
    },
    Error,
    "encode-error: U+C126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC127");
    },
    Error,
    "encode-error: U+C127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC128");
    },
    Error,
    "encode-error: U+C128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC129");
    },
    Error,
    "encode-error: U+C129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC12A");
    },
    Error,
    "encode-error: U+C12A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC12B");
    },
    Error,
    "encode-error: U+C12B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC12C");
    },
    Error,
    "encode-error: U+C12C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC12D");
    },
    Error,
    "encode-error: U+C12D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC12E");
    },
    Error,
    "encode-error: U+C12E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC12F");
    },
    Error,
    "encode-error: U+C12F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC130");
    },
    Error,
    "encode-error: U+C130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC131");
    },
    Error,
    "encode-error: U+C131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC132");
    },
    Error,
    "encode-error: U+C132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC133");
    },
    Error,
    "encode-error: U+C133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC134");
    },
    Error,
    "encode-error: U+C134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC135");
    },
    Error,
    "encode-error: U+C135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC136");
    },
    Error,
    "encode-error: U+C136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC137");
    },
    Error,
    "encode-error: U+C137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC138");
    },
    Error,
    "encode-error: U+C138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC139");
    },
    Error,
    "encode-error: U+C139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC13A");
    },
    Error,
    "encode-error: U+C13A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC13B");
    },
    Error,
    "encode-error: U+C13B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC13C");
    },
    Error,
    "encode-error: U+C13C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC13D");
    },
    Error,
    "encode-error: U+C13D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC13E");
    },
    Error,
    "encode-error: U+C13E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC13F");
    },
    Error,
    "encode-error: U+C13F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC140");
    },
    Error,
    "encode-error: U+C140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC141");
    },
    Error,
    "encode-error: U+C141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC142");
    },
    Error,
    "encode-error: U+C142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC143");
    },
    Error,
    "encode-error: U+C143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC144");
    },
    Error,
    "encode-error: U+C144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC145");
    },
    Error,
    "encode-error: U+C145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC146");
    },
    Error,
    "encode-error: U+C146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC147");
    },
    Error,
    "encode-error: U+C147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC148");
    },
    Error,
    "encode-error: U+C148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC149");
    },
    Error,
    "encode-error: U+C149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC14A");
    },
    Error,
    "encode-error: U+C14A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC14B");
    },
    Error,
    "encode-error: U+C14B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC14C");
    },
    Error,
    "encode-error: U+C14C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC14D");
    },
    Error,
    "encode-error: U+C14D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC14E");
    },
    Error,
    "encode-error: U+C14E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC14F");
    },
    Error,
    "encode-error: U+C14F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC150");
    },
    Error,
    "encode-error: U+C150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC151");
    },
    Error,
    "encode-error: U+C151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC152");
    },
    Error,
    "encode-error: U+C152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC153");
    },
    Error,
    "encode-error: U+C153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC154");
    },
    Error,
    "encode-error: U+C154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC155");
    },
    Error,
    "encode-error: U+C155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC156");
    },
    Error,
    "encode-error: U+C156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC157");
    },
    Error,
    "encode-error: U+C157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC158");
    },
    Error,
    "encode-error: U+C158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC159");
    },
    Error,
    "encode-error: U+C159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC15A");
    },
    Error,
    "encode-error: U+C15A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC15B");
    },
    Error,
    "encode-error: U+C15B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC15C");
    },
    Error,
    "encode-error: U+C15C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC15D");
    },
    Error,
    "encode-error: U+C15D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC15E");
    },
    Error,
    "encode-error: U+C15E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC15F");
    },
    Error,
    "encode-error: U+C15F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC160");
    },
    Error,
    "encode-error: U+C160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC161");
    },
    Error,
    "encode-error: U+C161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC162");
    },
    Error,
    "encode-error: U+C162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC163");
    },
    Error,
    "encode-error: U+C163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC164");
    },
    Error,
    "encode-error: U+C164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC165");
    },
    Error,
    "encode-error: U+C165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC166");
    },
    Error,
    "encode-error: U+C166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC167");
    },
    Error,
    "encode-error: U+C167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC168");
    },
    Error,
    "encode-error: U+C168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC169");
    },
    Error,
    "encode-error: U+C169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC16A");
    },
    Error,
    "encode-error: U+C16A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC16B");
    },
    Error,
    "encode-error: U+C16B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC16C");
    },
    Error,
    "encode-error: U+C16C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC16D");
    },
    Error,
    "encode-error: U+C16D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC16E");
    },
    Error,
    "encode-error: U+C16E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC16F");
    },
    Error,
    "encode-error: U+C16F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC170");
    },
    Error,
    "encode-error: U+C170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC171");
    },
    Error,
    "encode-error: U+C171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC172");
    },
    Error,
    "encode-error: U+C172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC173");
    },
    Error,
    "encode-error: U+C173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC174");
    },
    Error,
    "encode-error: U+C174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC175");
    },
    Error,
    "encode-error: U+C175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC176");
    },
    Error,
    "encode-error: U+C176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC177");
    },
    Error,
    "encode-error: U+C177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC178");
    },
    Error,
    "encode-error: U+C178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC179");
    },
    Error,
    "encode-error: U+C179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC17A");
    },
    Error,
    "encode-error: U+C17A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC17B");
    },
    Error,
    "encode-error: U+C17B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC17C");
    },
    Error,
    "encode-error: U+C17C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC17D");
    },
    Error,
    "encode-error: U+C17D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC17E");
    },
    Error,
    "encode-error: U+C17E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC17F");
    },
    Error,
    "encode-error: U+C17F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC180");
    },
    Error,
    "encode-error: U+C180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC181");
    },
    Error,
    "encode-error: U+C181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC182");
    },
    Error,
    "encode-error: U+C182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC183");
    },
    Error,
    "encode-error: U+C183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC184");
    },
    Error,
    "encode-error: U+C184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC185");
    },
    Error,
    "encode-error: U+C185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC186");
    },
    Error,
    "encode-error: U+C186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC187");
    },
    Error,
    "encode-error: U+C187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC188");
    },
    Error,
    "encode-error: U+C188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC189");
    },
    Error,
    "encode-error: U+C189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC18A");
    },
    Error,
    "encode-error: U+C18A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC18B");
    },
    Error,
    "encode-error: U+C18B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC18C");
    },
    Error,
    "encode-error: U+C18C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC18D");
    },
    Error,
    "encode-error: U+C18D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC18E");
    },
    Error,
    "encode-error: U+C18E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC18F");
    },
    Error,
    "encode-error: U+C18F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC190");
    },
    Error,
    "encode-error: U+C190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC191");
    },
    Error,
    "encode-error: U+C191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC192");
    },
    Error,
    "encode-error: U+C192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC193");
    },
    Error,
    "encode-error: U+C193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC194");
    },
    Error,
    "encode-error: U+C194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC195");
    },
    Error,
    "encode-error: U+C195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC196");
    },
    Error,
    "encode-error: U+C196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC197");
    },
    Error,
    "encode-error: U+C197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC198");
    },
    Error,
    "encode-error: U+C198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC199");
    },
    Error,
    "encode-error: U+C199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC19A");
    },
    Error,
    "encode-error: U+C19A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC19B");
    },
    Error,
    "encode-error: U+C19B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC19C");
    },
    Error,
    "encode-error: U+C19C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC19D");
    },
    Error,
    "encode-error: U+C19D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC19E");
    },
    Error,
    "encode-error: U+C19E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC19F");
    },
    Error,
    "encode-error: U+C19F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A0");
    },
    Error,
    "encode-error: U+C1A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A1");
    },
    Error,
    "encode-error: U+C1A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A2");
    },
    Error,
    "encode-error: U+C1A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A3");
    },
    Error,
    "encode-error: U+C1A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A4");
    },
    Error,
    "encode-error: U+C1A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A5");
    },
    Error,
    "encode-error: U+C1A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A6");
    },
    Error,
    "encode-error: U+C1A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A7");
    },
    Error,
    "encode-error: U+C1A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A8");
    },
    Error,
    "encode-error: U+C1A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A9");
    },
    Error,
    "encode-error: U+C1A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1AA");
    },
    Error,
    "encode-error: U+C1AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1AB");
    },
    Error,
    "encode-error: U+C1AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1AC");
    },
    Error,
    "encode-error: U+C1AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1AD");
    },
    Error,
    "encode-error: U+C1AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1AE");
    },
    Error,
    "encode-error: U+C1AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1AF");
    },
    Error,
    "encode-error: U+C1AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B0");
    },
    Error,
    "encode-error: U+C1B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B1");
    },
    Error,
    "encode-error: U+C1B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B2");
    },
    Error,
    "encode-error: U+C1B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B3");
    },
    Error,
    "encode-error: U+C1B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B4");
    },
    Error,
    "encode-error: U+C1B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B5");
    },
    Error,
    "encode-error: U+C1B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B6");
    },
    Error,
    "encode-error: U+C1B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B7");
    },
    Error,
    "encode-error: U+C1B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B8");
    },
    Error,
    "encode-error: U+C1B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B9");
    },
    Error,
    "encode-error: U+C1B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1BA");
    },
    Error,
    "encode-error: U+C1BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1BB");
    },
    Error,
    "encode-error: U+C1BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1BC");
    },
    Error,
    "encode-error: U+C1BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1BD");
    },
    Error,
    "encode-error: U+C1BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1BE");
    },
    Error,
    "encode-error: U+C1BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1BF");
    },
    Error,
    "encode-error: U+C1BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C0");
    },
    Error,
    "encode-error: U+C1C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C1");
    },
    Error,
    "encode-error: U+C1C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C2");
    },
    Error,
    "encode-error: U+C1C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C3");
    },
    Error,
    "encode-error: U+C1C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C4");
    },
    Error,
    "encode-error: U+C1C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C5");
    },
    Error,
    "encode-error: U+C1C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C6");
    },
    Error,
    "encode-error: U+C1C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C7");
    },
    Error,
    "encode-error: U+C1C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C8");
    },
    Error,
    "encode-error: U+C1C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C9");
    },
    Error,
    "encode-error: U+C1C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1CA");
    },
    Error,
    "encode-error: U+C1CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1CB");
    },
    Error,
    "encode-error: U+C1CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1CC");
    },
    Error,
    "encode-error: U+C1CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1CD");
    },
    Error,
    "encode-error: U+C1CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1CE");
    },
    Error,
    "encode-error: U+C1CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1CF");
    },
    Error,
    "encode-error: U+C1CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D0");
    },
    Error,
    "encode-error: U+C1D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D1");
    },
    Error,
    "encode-error: U+C1D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D2");
    },
    Error,
    "encode-error: U+C1D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D3");
    },
    Error,
    "encode-error: U+C1D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D4");
    },
    Error,
    "encode-error: U+C1D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D5");
    },
    Error,
    "encode-error: U+C1D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D6");
    },
    Error,
    "encode-error: U+C1D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D7");
    },
    Error,
    "encode-error: U+C1D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D8");
    },
    Error,
    "encode-error: U+C1D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D9");
    },
    Error,
    "encode-error: U+C1D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1DA");
    },
    Error,
    "encode-error: U+C1DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1DB");
    },
    Error,
    "encode-error: U+C1DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1DC");
    },
    Error,
    "encode-error: U+C1DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1DD");
    },
    Error,
    "encode-error: U+C1DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1DE");
    },
    Error,
    "encode-error: U+C1DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1DF");
    },
    Error,
    "encode-error: U+C1DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E0");
    },
    Error,
    "encode-error: U+C1E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E1");
    },
    Error,
    "encode-error: U+C1E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E2");
    },
    Error,
    "encode-error: U+C1E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E3");
    },
    Error,
    "encode-error: U+C1E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E4");
    },
    Error,
    "encode-error: U+C1E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E5");
    },
    Error,
    "encode-error: U+C1E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E6");
    },
    Error,
    "encode-error: U+C1E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E7");
    },
    Error,
    "encode-error: U+C1E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E8");
    },
    Error,
    "encode-error: U+C1E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E9");
    },
    Error,
    "encode-error: U+C1E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1EA");
    },
    Error,
    "encode-error: U+C1EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1EB");
    },
    Error,
    "encode-error: U+C1EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1EC");
    },
    Error,
    "encode-error: U+C1EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1ED");
    },
    Error,
    "encode-error: U+C1ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1EE");
    },
    Error,
    "encode-error: U+C1EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1EF");
    },
    Error,
    "encode-error: U+C1EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F0");
    },
    Error,
    "encode-error: U+C1F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F1");
    },
    Error,
    "encode-error: U+C1F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F2");
    },
    Error,
    "encode-error: U+C1F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F3");
    },
    Error,
    "encode-error: U+C1F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F4");
    },
    Error,
    "encode-error: U+C1F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F5");
    },
    Error,
    "encode-error: U+C1F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F6");
    },
    Error,
    "encode-error: U+C1F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F7");
    },
    Error,
    "encode-error: U+C1F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F8");
    },
    Error,
    "encode-error: U+C1F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F9");
    },
    Error,
    "encode-error: U+C1F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1FA");
    },
    Error,
    "encode-error: U+C1FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1FB");
    },
    Error,
    "encode-error: U+C1FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1FC");
    },
    Error,
    "encode-error: U+C1FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1FD");
    },
    Error,
    "encode-error: U+C1FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1FE");
    },
    Error,
    "encode-error: U+C1FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1FF");
    },
    Error,
    "encode-error: U+C1FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC200");
    },
    Error,
    "encode-error: U+C200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC201");
    },
    Error,
    "encode-error: U+C201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC202");
    },
    Error,
    "encode-error: U+C202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC203");
    },
    Error,
    "encode-error: U+C203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC204");
    },
    Error,
    "encode-error: U+C204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC205");
    },
    Error,
    "encode-error: U+C205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC206");
    },
    Error,
    "encode-error: U+C206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC207");
    },
    Error,
    "encode-error: U+C207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC208");
    },
    Error,
    "encode-error: U+C208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC209");
    },
    Error,
    "encode-error: U+C209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC20A");
    },
    Error,
    "encode-error: U+C20A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC20B");
    },
    Error,
    "encode-error: U+C20B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC20C");
    },
    Error,
    "encode-error: U+C20C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC20D");
    },
    Error,
    "encode-error: U+C20D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC20E");
    },
    Error,
    "encode-error: U+C20E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC20F");
    },
    Error,
    "encode-error: U+C20F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC210");
    },
    Error,
    "encode-error: U+C210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC211");
    },
    Error,
    "encode-error: U+C211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC212");
    },
    Error,
    "encode-error: U+C212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC213");
    },
    Error,
    "encode-error: U+C213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC214");
    },
    Error,
    "encode-error: U+C214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC215");
    },
    Error,
    "encode-error: U+C215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC216");
    },
    Error,
    "encode-error: U+C216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC217");
    },
    Error,
    "encode-error: U+C217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC218");
    },
    Error,
    "encode-error: U+C218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC219");
    },
    Error,
    "encode-error: U+C219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC21A");
    },
    Error,
    "encode-error: U+C21A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC21B");
    },
    Error,
    "encode-error: U+C21B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC21C");
    },
    Error,
    "encode-error: U+C21C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC21D");
    },
    Error,
    "encode-error: U+C21D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC21E");
    },
    Error,
    "encode-error: U+C21E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC21F");
    },
    Error,
    "encode-error: U+C21F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC220");
    },
    Error,
    "encode-error: U+C220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC221");
    },
    Error,
    "encode-error: U+C221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC222");
    },
    Error,
    "encode-error: U+C222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC223");
    },
    Error,
    "encode-error: U+C223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC224");
    },
    Error,
    "encode-error: U+C224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC225");
    },
    Error,
    "encode-error: U+C225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC226");
    },
    Error,
    "encode-error: U+C226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC227");
    },
    Error,
    "encode-error: U+C227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC228");
    },
    Error,
    "encode-error: U+C228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC229");
    },
    Error,
    "encode-error: U+C229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC22A");
    },
    Error,
    "encode-error: U+C22A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC22B");
    },
    Error,
    "encode-error: U+C22B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC22C");
    },
    Error,
    "encode-error: U+C22C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC22D");
    },
    Error,
    "encode-error: U+C22D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC22E");
    },
    Error,
    "encode-error: U+C22E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC22F");
    },
    Error,
    "encode-error: U+C22F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC230");
    },
    Error,
    "encode-error: U+C230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC231");
    },
    Error,
    "encode-error: U+C231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC232");
    },
    Error,
    "encode-error: U+C232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC233");
    },
    Error,
    "encode-error: U+C233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC234");
    },
    Error,
    "encode-error: U+C234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC235");
    },
    Error,
    "encode-error: U+C235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC236");
    },
    Error,
    "encode-error: U+C236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC237");
    },
    Error,
    "encode-error: U+C237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC238");
    },
    Error,
    "encode-error: U+C238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC239");
    },
    Error,
    "encode-error: U+C239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC23A");
    },
    Error,
    "encode-error: U+C23A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC23B");
    },
    Error,
    "encode-error: U+C23B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC23C");
    },
    Error,
    "encode-error: U+C23C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC23D");
    },
    Error,
    "encode-error: U+C23D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC23E");
    },
    Error,
    "encode-error: U+C23E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC23F");
    },
    Error,
    "encode-error: U+C23F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC240");
    },
    Error,
    "encode-error: U+C240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC241");
    },
    Error,
    "encode-error: U+C241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC242");
    },
    Error,
    "encode-error: U+C242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC243");
    },
    Error,
    "encode-error: U+C243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC244");
    },
    Error,
    "encode-error: U+C244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC245");
    },
    Error,
    "encode-error: U+C245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC246");
    },
    Error,
    "encode-error: U+C246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC247");
    },
    Error,
    "encode-error: U+C247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC248");
    },
    Error,
    "encode-error: U+C248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC249");
    },
    Error,
    "encode-error: U+C249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC24A");
    },
    Error,
    "encode-error: U+C24A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC24B");
    },
    Error,
    "encode-error: U+C24B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC24C");
    },
    Error,
    "encode-error: U+C24C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC24D");
    },
    Error,
    "encode-error: U+C24D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC24E");
    },
    Error,
    "encode-error: U+C24E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC24F");
    },
    Error,
    "encode-error: U+C24F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC250");
    },
    Error,
    "encode-error: U+C250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC251");
    },
    Error,
    "encode-error: U+C251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC252");
    },
    Error,
    "encode-error: U+C252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC253");
    },
    Error,
    "encode-error: U+C253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC254");
    },
    Error,
    "encode-error: U+C254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC255");
    },
    Error,
    "encode-error: U+C255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC256");
    },
    Error,
    "encode-error: U+C256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC257");
    },
    Error,
    "encode-error: U+C257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC258");
    },
    Error,
    "encode-error: U+C258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC259");
    },
    Error,
    "encode-error: U+C259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC25A");
    },
    Error,
    "encode-error: U+C25A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC25B");
    },
    Error,
    "encode-error: U+C25B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC25C");
    },
    Error,
    "encode-error: U+C25C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC25D");
    },
    Error,
    "encode-error: U+C25D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC25E");
    },
    Error,
    "encode-error: U+C25E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC25F");
    },
    Error,
    "encode-error: U+C25F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC260");
    },
    Error,
    "encode-error: U+C260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC261");
    },
    Error,
    "encode-error: U+C261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC262");
    },
    Error,
    "encode-error: U+C262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC263");
    },
    Error,
    "encode-error: U+C263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC264");
    },
    Error,
    "encode-error: U+C264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC265");
    },
    Error,
    "encode-error: U+C265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC266");
    },
    Error,
    "encode-error: U+C266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC267");
    },
    Error,
    "encode-error: U+C267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC268");
    },
    Error,
    "encode-error: U+C268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC269");
    },
    Error,
    "encode-error: U+C269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC26A");
    },
    Error,
    "encode-error: U+C26A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC26B");
    },
    Error,
    "encode-error: U+C26B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC26C");
    },
    Error,
    "encode-error: U+C26C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC26D");
    },
    Error,
    "encode-error: U+C26D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC26E");
    },
    Error,
    "encode-error: U+C26E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC26F");
    },
    Error,
    "encode-error: U+C26F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC270");
    },
    Error,
    "encode-error: U+C270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC271");
    },
    Error,
    "encode-error: U+C271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC272");
    },
    Error,
    "encode-error: U+C272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC273");
    },
    Error,
    "encode-error: U+C273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC274");
    },
    Error,
    "encode-error: U+C274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC275");
    },
    Error,
    "encode-error: U+C275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC276");
    },
    Error,
    "encode-error: U+C276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC277");
    },
    Error,
    "encode-error: U+C277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC278");
    },
    Error,
    "encode-error: U+C278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC279");
    },
    Error,
    "encode-error: U+C279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC27A");
    },
    Error,
    "encode-error: U+C27A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC27B");
    },
    Error,
    "encode-error: U+C27B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC27C");
    },
    Error,
    "encode-error: U+C27C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC27D");
    },
    Error,
    "encode-error: U+C27D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC27E");
    },
    Error,
    "encode-error: U+C27E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC27F");
    },
    Error,
    "encode-error: U+C27F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC280");
    },
    Error,
    "encode-error: U+C280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC281");
    },
    Error,
    "encode-error: U+C281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC282");
    },
    Error,
    "encode-error: U+C282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC283");
    },
    Error,
    "encode-error: U+C283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC284");
    },
    Error,
    "encode-error: U+C284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC285");
    },
    Error,
    "encode-error: U+C285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC286");
    },
    Error,
    "encode-error: U+C286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC287");
    },
    Error,
    "encode-error: U+C287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC288");
    },
    Error,
    "encode-error: U+C288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC289");
    },
    Error,
    "encode-error: U+C289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC28A");
    },
    Error,
    "encode-error: U+C28A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC28B");
    },
    Error,
    "encode-error: U+C28B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC28C");
    },
    Error,
    "encode-error: U+C28C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC28D");
    },
    Error,
    "encode-error: U+C28D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC28E");
    },
    Error,
    "encode-error: U+C28E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC28F");
    },
    Error,
    "encode-error: U+C28F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC290");
    },
    Error,
    "encode-error: U+C290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC291");
    },
    Error,
    "encode-error: U+C291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC292");
    },
    Error,
    "encode-error: U+C292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC293");
    },
    Error,
    "encode-error: U+C293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC294");
    },
    Error,
    "encode-error: U+C294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC295");
    },
    Error,
    "encode-error: U+C295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC296");
    },
    Error,
    "encode-error: U+C296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC297");
    },
    Error,
    "encode-error: U+C297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC298");
    },
    Error,
    "encode-error: U+C298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC299");
    },
    Error,
    "encode-error: U+C299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC29A");
    },
    Error,
    "encode-error: U+C29A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC29B");
    },
    Error,
    "encode-error: U+C29B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC29C");
    },
    Error,
    "encode-error: U+C29C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC29D");
    },
    Error,
    "encode-error: U+C29D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC29E");
    },
    Error,
    "encode-error: U+C29E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC29F");
    },
    Error,
    "encode-error: U+C29F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A0");
    },
    Error,
    "encode-error: U+C2A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A1");
    },
    Error,
    "encode-error: U+C2A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A2");
    },
    Error,
    "encode-error: U+C2A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A3");
    },
    Error,
    "encode-error: U+C2A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A4");
    },
    Error,
    "encode-error: U+C2A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A5");
    },
    Error,
    "encode-error: U+C2A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A6");
    },
    Error,
    "encode-error: U+C2A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A7");
    },
    Error,
    "encode-error: U+C2A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A8");
    },
    Error,
    "encode-error: U+C2A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A9");
    },
    Error,
    "encode-error: U+C2A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2AA");
    },
    Error,
    "encode-error: U+C2AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2AB");
    },
    Error,
    "encode-error: U+C2AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2AC");
    },
    Error,
    "encode-error: U+C2AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2AD");
    },
    Error,
    "encode-error: U+C2AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2AE");
    },
    Error,
    "encode-error: U+C2AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2AF");
    },
    Error,
    "encode-error: U+C2AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B0");
    },
    Error,
    "encode-error: U+C2B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B1");
    },
    Error,
    "encode-error: U+C2B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B2");
    },
    Error,
    "encode-error: U+C2B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B3");
    },
    Error,
    "encode-error: U+C2B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B4");
    },
    Error,
    "encode-error: U+C2B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B5");
    },
    Error,
    "encode-error: U+C2B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B6");
    },
    Error,
    "encode-error: U+C2B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B7");
    },
    Error,
    "encode-error: U+C2B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B8");
    },
    Error,
    "encode-error: U+C2B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B9");
    },
    Error,
    "encode-error: U+C2B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2BA");
    },
    Error,
    "encode-error: U+C2BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2BB");
    },
    Error,
    "encode-error: U+C2BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2BC");
    },
    Error,
    "encode-error: U+C2BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2BD");
    },
    Error,
    "encode-error: U+C2BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2BE");
    },
    Error,
    "encode-error: U+C2BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2BF");
    },
    Error,
    "encode-error: U+C2BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C0");
    },
    Error,
    "encode-error: U+C2C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C1");
    },
    Error,
    "encode-error: U+C2C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C2");
    },
    Error,
    "encode-error: U+C2C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C3");
    },
    Error,
    "encode-error: U+C2C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C4");
    },
    Error,
    "encode-error: U+C2C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C5");
    },
    Error,
    "encode-error: U+C2C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C6");
    },
    Error,
    "encode-error: U+C2C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C7");
    },
    Error,
    "encode-error: U+C2C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C8");
    },
    Error,
    "encode-error: U+C2C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C9");
    },
    Error,
    "encode-error: U+C2C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2CA");
    },
    Error,
    "encode-error: U+C2CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2CB");
    },
    Error,
    "encode-error: U+C2CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2CC");
    },
    Error,
    "encode-error: U+C2CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2CD");
    },
    Error,
    "encode-error: U+C2CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2CE");
    },
    Error,
    "encode-error: U+C2CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2CF");
    },
    Error,
    "encode-error: U+C2CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D0");
    },
    Error,
    "encode-error: U+C2D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D1");
    },
    Error,
    "encode-error: U+C2D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D2");
    },
    Error,
    "encode-error: U+C2D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D3");
    },
    Error,
    "encode-error: U+C2D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D4");
    },
    Error,
    "encode-error: U+C2D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D5");
    },
    Error,
    "encode-error: U+C2D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D6");
    },
    Error,
    "encode-error: U+C2D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D7");
    },
    Error,
    "encode-error: U+C2D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D8");
    },
    Error,
    "encode-error: U+C2D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D9");
    },
    Error,
    "encode-error: U+C2D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2DA");
    },
    Error,
    "encode-error: U+C2DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2DB");
    },
    Error,
    "encode-error: U+C2DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2DC");
    },
    Error,
    "encode-error: U+C2DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2DD");
    },
    Error,
    "encode-error: U+C2DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2DE");
    },
    Error,
    "encode-error: U+C2DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2DF");
    },
    Error,
    "encode-error: U+C2DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E0");
    },
    Error,
    "encode-error: U+C2E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E1");
    },
    Error,
    "encode-error: U+C2E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E2");
    },
    Error,
    "encode-error: U+C2E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E3");
    },
    Error,
    "encode-error: U+C2E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E4");
    },
    Error,
    "encode-error: U+C2E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E5");
    },
    Error,
    "encode-error: U+C2E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E6");
    },
    Error,
    "encode-error: U+C2E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E7");
    },
    Error,
    "encode-error: U+C2E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E8");
    },
    Error,
    "encode-error: U+C2E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E9");
    },
    Error,
    "encode-error: U+C2E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2EA");
    },
    Error,
    "encode-error: U+C2EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2EB");
    },
    Error,
    "encode-error: U+C2EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2EC");
    },
    Error,
    "encode-error: U+C2EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2ED");
    },
    Error,
    "encode-error: U+C2ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2EE");
    },
    Error,
    "encode-error: U+C2EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2EF");
    },
    Error,
    "encode-error: U+C2EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F0");
    },
    Error,
    "encode-error: U+C2F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F1");
    },
    Error,
    "encode-error: U+C2F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F2");
    },
    Error,
    "encode-error: U+C2F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F3");
    },
    Error,
    "encode-error: U+C2F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F4");
    },
    Error,
    "encode-error: U+C2F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F5");
    },
    Error,
    "encode-error: U+C2F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F6");
    },
    Error,
    "encode-error: U+C2F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F7");
    },
    Error,
    "encode-error: U+C2F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F8");
    },
    Error,
    "encode-error: U+C2F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F9");
    },
    Error,
    "encode-error: U+C2F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2FA");
    },
    Error,
    "encode-error: U+C2FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2FB");
    },
    Error,
    "encode-error: U+C2FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2FC");
    },
    Error,
    "encode-error: U+C2FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2FD");
    },
    Error,
    "encode-error: U+C2FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2FE");
    },
    Error,
    "encode-error: U+C2FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2FF");
    },
    Error,
    "encode-error: U+C2FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC300");
    },
    Error,
    "encode-error: U+C300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC301");
    },
    Error,
    "encode-error: U+C301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC302");
    },
    Error,
    "encode-error: U+C302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC303");
    },
    Error,
    "encode-error: U+C303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC304");
    },
    Error,
    "encode-error: U+C304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC305");
    },
    Error,
    "encode-error: U+C305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC306");
    },
    Error,
    "encode-error: U+C306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC307");
    },
    Error,
    "encode-error: U+C307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC308");
    },
    Error,
    "encode-error: U+C308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC309");
    },
    Error,
    "encode-error: U+C309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC30A");
    },
    Error,
    "encode-error: U+C30A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC30B");
    },
    Error,
    "encode-error: U+C30B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC30C");
    },
    Error,
    "encode-error: U+C30C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC30D");
    },
    Error,
    "encode-error: U+C30D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC30E");
    },
    Error,
    "encode-error: U+C30E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC30F");
    },
    Error,
    "encode-error: U+C30F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC310");
    },
    Error,
    "encode-error: U+C310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC311");
    },
    Error,
    "encode-error: U+C311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC312");
    },
    Error,
    "encode-error: U+C312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC313");
    },
    Error,
    "encode-error: U+C313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC314");
    },
    Error,
    "encode-error: U+C314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC315");
    },
    Error,
    "encode-error: U+C315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC316");
    },
    Error,
    "encode-error: U+C316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC317");
    },
    Error,
    "encode-error: U+C317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC318");
    },
    Error,
    "encode-error: U+C318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC319");
    },
    Error,
    "encode-error: U+C319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC31A");
    },
    Error,
    "encode-error: U+C31A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC31B");
    },
    Error,
    "encode-error: U+C31B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC31C");
    },
    Error,
    "encode-error: U+C31C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC31D");
    },
    Error,
    "encode-error: U+C31D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC31E");
    },
    Error,
    "encode-error: U+C31E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC31F");
    },
    Error,
    "encode-error: U+C31F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC320");
    },
    Error,
    "encode-error: U+C320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC321");
    },
    Error,
    "encode-error: U+C321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC322");
    },
    Error,
    "encode-error: U+C322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC323");
    },
    Error,
    "encode-error: U+C323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC324");
    },
    Error,
    "encode-error: U+C324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC325");
    },
    Error,
    "encode-error: U+C325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC326");
    },
    Error,
    "encode-error: U+C326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC327");
    },
    Error,
    "encode-error: U+C327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC328");
    },
    Error,
    "encode-error: U+C328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC329");
    },
    Error,
    "encode-error: U+C329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC32A");
    },
    Error,
    "encode-error: U+C32A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC32B");
    },
    Error,
    "encode-error: U+C32B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC32C");
    },
    Error,
    "encode-error: U+C32C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC32D");
    },
    Error,
    "encode-error: U+C32D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC32E");
    },
    Error,
    "encode-error: U+C32E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC32F");
    },
    Error,
    "encode-error: U+C32F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC330");
    },
    Error,
    "encode-error: U+C330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC331");
    },
    Error,
    "encode-error: U+C331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC332");
    },
    Error,
    "encode-error: U+C332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC333");
    },
    Error,
    "encode-error: U+C333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC334");
    },
    Error,
    "encode-error: U+C334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC335");
    },
    Error,
    "encode-error: U+C335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC336");
    },
    Error,
    "encode-error: U+C336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC337");
    },
    Error,
    "encode-error: U+C337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC338");
    },
    Error,
    "encode-error: U+C338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC339");
    },
    Error,
    "encode-error: U+C339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC33A");
    },
    Error,
    "encode-error: U+C33A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC33B");
    },
    Error,
    "encode-error: U+C33B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC33C");
    },
    Error,
    "encode-error: U+C33C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC33D");
    },
    Error,
    "encode-error: U+C33D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC33E");
    },
    Error,
    "encode-error: U+C33E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC33F");
    },
    Error,
    "encode-error: U+C33F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC340");
    },
    Error,
    "encode-error: U+C340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC341");
    },
    Error,
    "encode-error: U+C341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC342");
    },
    Error,
    "encode-error: U+C342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC343");
    },
    Error,
    "encode-error: U+C343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC344");
    },
    Error,
    "encode-error: U+C344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC345");
    },
    Error,
    "encode-error: U+C345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC346");
    },
    Error,
    "encode-error: U+C346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC347");
    },
    Error,
    "encode-error: U+C347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC348");
    },
    Error,
    "encode-error: U+C348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC349");
    },
    Error,
    "encode-error: U+C349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC34A");
    },
    Error,
    "encode-error: U+C34A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC34B");
    },
    Error,
    "encode-error: U+C34B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC34C");
    },
    Error,
    "encode-error: U+C34C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC34D");
    },
    Error,
    "encode-error: U+C34D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC34E");
    },
    Error,
    "encode-error: U+C34E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC34F");
    },
    Error,
    "encode-error: U+C34F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC350");
    },
    Error,
    "encode-error: U+C350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC351");
    },
    Error,
    "encode-error: U+C351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC352");
    },
    Error,
    "encode-error: U+C352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC353");
    },
    Error,
    "encode-error: U+C353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC354");
    },
    Error,
    "encode-error: U+C354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC355");
    },
    Error,
    "encode-error: U+C355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC356");
    },
    Error,
    "encode-error: U+C356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC357");
    },
    Error,
    "encode-error: U+C357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC358");
    },
    Error,
    "encode-error: U+C358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC359");
    },
    Error,
    "encode-error: U+C359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC35A");
    },
    Error,
    "encode-error: U+C35A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC35B");
    },
    Error,
    "encode-error: U+C35B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC35C");
    },
    Error,
    "encode-error: U+C35C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC35D");
    },
    Error,
    "encode-error: U+C35D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC35E");
    },
    Error,
    "encode-error: U+C35E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC35F");
    },
    Error,
    "encode-error: U+C35F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC360");
    },
    Error,
    "encode-error: U+C360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC361");
    },
    Error,
    "encode-error: U+C361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC362");
    },
    Error,
    "encode-error: U+C362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC363");
    },
    Error,
    "encode-error: U+C363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC364");
    },
    Error,
    "encode-error: U+C364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC365");
    },
    Error,
    "encode-error: U+C365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC366");
    },
    Error,
    "encode-error: U+C366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC367");
    },
    Error,
    "encode-error: U+C367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC368");
    },
    Error,
    "encode-error: U+C368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC369");
    },
    Error,
    "encode-error: U+C369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC36A");
    },
    Error,
    "encode-error: U+C36A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC36B");
    },
    Error,
    "encode-error: U+C36B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC36C");
    },
    Error,
    "encode-error: U+C36C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC36D");
    },
    Error,
    "encode-error: U+C36D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC36E");
    },
    Error,
    "encode-error: U+C36E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC36F");
    },
    Error,
    "encode-error: U+C36F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC370");
    },
    Error,
    "encode-error: U+C370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC371");
    },
    Error,
    "encode-error: U+C371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC372");
    },
    Error,
    "encode-error: U+C372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC373");
    },
    Error,
    "encode-error: U+C373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC374");
    },
    Error,
    "encode-error: U+C374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC375");
    },
    Error,
    "encode-error: U+C375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC376");
    },
    Error,
    "encode-error: U+C376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC377");
    },
    Error,
    "encode-error: U+C377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC378");
    },
    Error,
    "encode-error: U+C378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC379");
    },
    Error,
    "encode-error: U+C379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC37A");
    },
    Error,
    "encode-error: U+C37A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC37B");
    },
    Error,
    "encode-error: U+C37B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC37C");
    },
    Error,
    "encode-error: U+C37C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC37D");
    },
    Error,
    "encode-error: U+C37D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC37E");
    },
    Error,
    "encode-error: U+C37E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC37F");
    },
    Error,
    "encode-error: U+C37F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC380");
    },
    Error,
    "encode-error: U+C380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC381");
    },
    Error,
    "encode-error: U+C381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC382");
    },
    Error,
    "encode-error: U+C382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC383");
    },
    Error,
    "encode-error: U+C383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC384");
    },
    Error,
    "encode-error: U+C384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC385");
    },
    Error,
    "encode-error: U+C385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC386");
    },
    Error,
    "encode-error: U+C386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC387");
    },
    Error,
    "encode-error: U+C387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC388");
    },
    Error,
    "encode-error: U+C388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC389");
    },
    Error,
    "encode-error: U+C389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC38A");
    },
    Error,
    "encode-error: U+C38A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC38B");
    },
    Error,
    "encode-error: U+C38B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC38C");
    },
    Error,
    "encode-error: U+C38C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC38D");
    },
    Error,
    "encode-error: U+C38D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC38E");
    },
    Error,
    "encode-error: U+C38E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC38F");
    },
    Error,
    "encode-error: U+C38F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC390");
    },
    Error,
    "encode-error: U+C390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC391");
    },
    Error,
    "encode-error: U+C391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC392");
    },
    Error,
    "encode-error: U+C392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC393");
    },
    Error,
    "encode-error: U+C393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC394");
    },
    Error,
    "encode-error: U+C394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC395");
    },
    Error,
    "encode-error: U+C395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC396");
    },
    Error,
    "encode-error: U+C396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC397");
    },
    Error,
    "encode-error: U+C397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC398");
    },
    Error,
    "encode-error: U+C398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC399");
    },
    Error,
    "encode-error: U+C399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC39A");
    },
    Error,
    "encode-error: U+C39A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC39B");
    },
    Error,
    "encode-error: U+C39B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC39C");
    },
    Error,
    "encode-error: U+C39C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC39D");
    },
    Error,
    "encode-error: U+C39D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC39E");
    },
    Error,
    "encode-error: U+C39E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC39F");
    },
    Error,
    "encode-error: U+C39F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A0");
    },
    Error,
    "encode-error: U+C3A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A1");
    },
    Error,
    "encode-error: U+C3A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A2");
    },
    Error,
    "encode-error: U+C3A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A3");
    },
    Error,
    "encode-error: U+C3A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A4");
    },
    Error,
    "encode-error: U+C3A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A5");
    },
    Error,
    "encode-error: U+C3A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A6");
    },
    Error,
    "encode-error: U+C3A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A7");
    },
    Error,
    "encode-error: U+C3A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A8");
    },
    Error,
    "encode-error: U+C3A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A9");
    },
    Error,
    "encode-error: U+C3A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3AA");
    },
    Error,
    "encode-error: U+C3AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3AB");
    },
    Error,
    "encode-error: U+C3AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3AC");
    },
    Error,
    "encode-error: U+C3AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3AD");
    },
    Error,
    "encode-error: U+C3AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3AE");
    },
    Error,
    "encode-error: U+C3AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3AF");
    },
    Error,
    "encode-error: U+C3AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B0");
    },
    Error,
    "encode-error: U+C3B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B1");
    },
    Error,
    "encode-error: U+C3B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B2");
    },
    Error,
    "encode-error: U+C3B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B3");
    },
    Error,
    "encode-error: U+C3B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B4");
    },
    Error,
    "encode-error: U+C3B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B5");
    },
    Error,
    "encode-error: U+C3B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B6");
    },
    Error,
    "encode-error: U+C3B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B7");
    },
    Error,
    "encode-error: U+C3B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B8");
    },
    Error,
    "encode-error: U+C3B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B9");
    },
    Error,
    "encode-error: U+C3B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3BA");
    },
    Error,
    "encode-error: U+C3BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3BB");
    },
    Error,
    "encode-error: U+C3BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3BC");
    },
    Error,
    "encode-error: U+C3BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3BD");
    },
    Error,
    "encode-error: U+C3BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3BE");
    },
    Error,
    "encode-error: U+C3BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3BF");
    },
    Error,
    "encode-error: U+C3BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C0");
    },
    Error,
    "encode-error: U+C3C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C1");
    },
    Error,
    "encode-error: U+C3C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C2");
    },
    Error,
    "encode-error: U+C3C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C3");
    },
    Error,
    "encode-error: U+C3C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C4");
    },
    Error,
    "encode-error: U+C3C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C5");
    },
    Error,
    "encode-error: U+C3C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C6");
    },
    Error,
    "encode-error: U+C3C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C7");
    },
    Error,
    "encode-error: U+C3C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C8");
    },
    Error,
    "encode-error: U+C3C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C9");
    },
    Error,
    "encode-error: U+C3C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3CA");
    },
    Error,
    "encode-error: U+C3CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3CB");
    },
    Error,
    "encode-error: U+C3CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3CC");
    },
    Error,
    "encode-error: U+C3CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3CD");
    },
    Error,
    "encode-error: U+C3CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3CE");
    },
    Error,
    "encode-error: U+C3CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3CF");
    },
    Error,
    "encode-error: U+C3CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D0");
    },
    Error,
    "encode-error: U+C3D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D1");
    },
    Error,
    "encode-error: U+C3D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D2");
    },
    Error,
    "encode-error: U+C3D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D3");
    },
    Error,
    "encode-error: U+C3D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D4");
    },
    Error,
    "encode-error: U+C3D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D5");
    },
    Error,
    "encode-error: U+C3D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D6");
    },
    Error,
    "encode-error: U+C3D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D7");
    },
    Error,
    "encode-error: U+C3D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D8");
    },
    Error,
    "encode-error: U+C3D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D9");
    },
    Error,
    "encode-error: U+C3D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3DA");
    },
    Error,
    "encode-error: U+C3DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3DB");
    },
    Error,
    "encode-error: U+C3DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3DC");
    },
    Error,
    "encode-error: U+C3DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3DD");
    },
    Error,
    "encode-error: U+C3DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3DE");
    },
    Error,
    "encode-error: U+C3DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3DF");
    },
    Error,
    "encode-error: U+C3DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E0");
    },
    Error,
    "encode-error: U+C3E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E1");
    },
    Error,
    "encode-error: U+C3E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E2");
    },
    Error,
    "encode-error: U+C3E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E3");
    },
    Error,
    "encode-error: U+C3E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E4");
    },
    Error,
    "encode-error: U+C3E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E5");
    },
    Error,
    "encode-error: U+C3E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E6");
    },
    Error,
    "encode-error: U+C3E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E7");
    },
    Error,
    "encode-error: U+C3E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E8");
    },
    Error,
    "encode-error: U+C3E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E9");
    },
    Error,
    "encode-error: U+C3E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3EA");
    },
    Error,
    "encode-error: U+C3EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3EB");
    },
    Error,
    "encode-error: U+C3EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3EC");
    },
    Error,
    "encode-error: U+C3EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3ED");
    },
    Error,
    "encode-error: U+C3ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3EE");
    },
    Error,
    "encode-error: U+C3EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3EF");
    },
    Error,
    "encode-error: U+C3EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F0");
    },
    Error,
    "encode-error: U+C3F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F1");
    },
    Error,
    "encode-error: U+C3F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F2");
    },
    Error,
    "encode-error: U+C3F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F3");
    },
    Error,
    "encode-error: U+C3F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F4");
    },
    Error,
    "encode-error: U+C3F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F5");
    },
    Error,
    "encode-error: U+C3F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F6");
    },
    Error,
    "encode-error: U+C3F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F7");
    },
    Error,
    "encode-error: U+C3F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F8");
    },
    Error,
    "encode-error: U+C3F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F9");
    },
    Error,
    "encode-error: U+C3F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3FA");
    },
    Error,
    "encode-error: U+C3FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3FB");
    },
    Error,
    "encode-error: U+C3FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3FC");
    },
    Error,
    "encode-error: U+C3FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3FD");
    },
    Error,
    "encode-error: U+C3FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3FE");
    },
    Error,
    "encode-error: U+C3FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3FF");
    },
    Error,
    "encode-error: U+C3FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC400");
    },
    Error,
    "encode-error: U+C400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC401");
    },
    Error,
    "encode-error: U+C401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC402");
    },
    Error,
    "encode-error: U+C402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC403");
    },
    Error,
    "encode-error: U+C403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC404");
    },
    Error,
    "encode-error: U+C404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC405");
    },
    Error,
    "encode-error: U+C405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC406");
    },
    Error,
    "encode-error: U+C406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC407");
    },
    Error,
    "encode-error: U+C407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC408");
    },
    Error,
    "encode-error: U+C408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC409");
    },
    Error,
    "encode-error: U+C409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC40A");
    },
    Error,
    "encode-error: U+C40A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC40B");
    },
    Error,
    "encode-error: U+C40B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC40C");
    },
    Error,
    "encode-error: U+C40C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC40D");
    },
    Error,
    "encode-error: U+C40D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC40E");
    },
    Error,
    "encode-error: U+C40E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC40F");
    },
    Error,
    "encode-error: U+C40F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC410");
    },
    Error,
    "encode-error: U+C410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC411");
    },
    Error,
    "encode-error: U+C411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC412");
    },
    Error,
    "encode-error: U+C412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC413");
    },
    Error,
    "encode-error: U+C413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC414");
    },
    Error,
    "encode-error: U+C414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC415");
    },
    Error,
    "encode-error: U+C415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC416");
    },
    Error,
    "encode-error: U+C416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC417");
    },
    Error,
    "encode-error: U+C417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC418");
    },
    Error,
    "encode-error: U+C418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC419");
    },
    Error,
    "encode-error: U+C419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC41A");
    },
    Error,
    "encode-error: U+C41A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC41B");
    },
    Error,
    "encode-error: U+C41B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC41C");
    },
    Error,
    "encode-error: U+C41C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC41D");
    },
    Error,
    "encode-error: U+C41D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC41E");
    },
    Error,
    "encode-error: U+C41E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC41F");
    },
    Error,
    "encode-error: U+C41F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC420");
    },
    Error,
    "encode-error: U+C420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC421");
    },
    Error,
    "encode-error: U+C421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC422");
    },
    Error,
    "encode-error: U+C422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC423");
    },
    Error,
    "encode-error: U+C423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC424");
    },
    Error,
    "encode-error: U+C424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC425");
    },
    Error,
    "encode-error: U+C425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC426");
    },
    Error,
    "encode-error: U+C426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC427");
    },
    Error,
    "encode-error: U+C427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC428");
    },
    Error,
    "encode-error: U+C428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC429");
    },
    Error,
    "encode-error: U+C429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC42A");
    },
    Error,
    "encode-error: U+C42A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC42B");
    },
    Error,
    "encode-error: U+C42B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC42C");
    },
    Error,
    "encode-error: U+C42C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC42D");
    },
    Error,
    "encode-error: U+C42D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC42E");
    },
    Error,
    "encode-error: U+C42E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC42F");
    },
    Error,
    "encode-error: U+C42F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC430");
    },
    Error,
    "encode-error: U+C430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC431");
    },
    Error,
    "encode-error: U+C431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC432");
    },
    Error,
    "encode-error: U+C432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC433");
    },
    Error,
    "encode-error: U+C433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC434");
    },
    Error,
    "encode-error: U+C434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC435");
    },
    Error,
    "encode-error: U+C435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC436");
    },
    Error,
    "encode-error: U+C436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC437");
    },
    Error,
    "encode-error: U+C437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC438");
    },
    Error,
    "encode-error: U+C438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC439");
    },
    Error,
    "encode-error: U+C439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC43A");
    },
    Error,
    "encode-error: U+C43A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC43B");
    },
    Error,
    "encode-error: U+C43B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC43C");
    },
    Error,
    "encode-error: U+C43C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC43D");
    },
    Error,
    "encode-error: U+C43D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC43E");
    },
    Error,
    "encode-error: U+C43E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC43F");
    },
    Error,
    "encode-error: U+C43F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC440");
    },
    Error,
    "encode-error: U+C440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC441");
    },
    Error,
    "encode-error: U+C441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC442");
    },
    Error,
    "encode-error: U+C442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC443");
    },
    Error,
    "encode-error: U+C443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC444");
    },
    Error,
    "encode-error: U+C444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC445");
    },
    Error,
    "encode-error: U+C445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC446");
    },
    Error,
    "encode-error: U+C446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC447");
    },
    Error,
    "encode-error: U+C447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC448");
    },
    Error,
    "encode-error: U+C448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC449");
    },
    Error,
    "encode-error: U+C449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC44A");
    },
    Error,
    "encode-error: U+C44A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC44B");
    },
    Error,
    "encode-error: U+C44B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC44C");
    },
    Error,
    "encode-error: U+C44C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC44D");
    },
    Error,
    "encode-error: U+C44D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC44E");
    },
    Error,
    "encode-error: U+C44E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC44F");
    },
    Error,
    "encode-error: U+C44F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC450");
    },
    Error,
    "encode-error: U+C450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC451");
    },
    Error,
    "encode-error: U+C451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC452");
    },
    Error,
    "encode-error: U+C452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC453");
    },
    Error,
    "encode-error: U+C453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC454");
    },
    Error,
    "encode-error: U+C454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC455");
    },
    Error,
    "encode-error: U+C455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC456");
    },
    Error,
    "encode-error: U+C456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC457");
    },
    Error,
    "encode-error: U+C457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC458");
    },
    Error,
    "encode-error: U+C458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC459");
    },
    Error,
    "encode-error: U+C459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC45A");
    },
    Error,
    "encode-error: U+C45A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC45B");
    },
    Error,
    "encode-error: U+C45B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC45C");
    },
    Error,
    "encode-error: U+C45C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC45D");
    },
    Error,
    "encode-error: U+C45D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC45E");
    },
    Error,
    "encode-error: U+C45E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC45F");
    },
    Error,
    "encode-error: U+C45F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC460");
    },
    Error,
    "encode-error: U+C460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC461");
    },
    Error,
    "encode-error: U+C461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC462");
    },
    Error,
    "encode-error: U+C462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC463");
    },
    Error,
    "encode-error: U+C463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC464");
    },
    Error,
    "encode-error: U+C464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC465");
    },
    Error,
    "encode-error: U+C465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC466");
    },
    Error,
    "encode-error: U+C466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC467");
    },
    Error,
    "encode-error: U+C467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC468");
    },
    Error,
    "encode-error: U+C468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC469");
    },
    Error,
    "encode-error: U+C469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC46A");
    },
    Error,
    "encode-error: U+C46A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC46B");
    },
    Error,
    "encode-error: U+C46B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC46C");
    },
    Error,
    "encode-error: U+C46C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC46D");
    },
    Error,
    "encode-error: U+C46D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC46E");
    },
    Error,
    "encode-error: U+C46E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC46F");
    },
    Error,
    "encode-error: U+C46F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC470");
    },
    Error,
    "encode-error: U+C470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC471");
    },
    Error,
    "encode-error: U+C471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC472");
    },
    Error,
    "encode-error: U+C472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC473");
    },
    Error,
    "encode-error: U+C473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC474");
    },
    Error,
    "encode-error: U+C474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC475");
    },
    Error,
    "encode-error: U+C475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC476");
    },
    Error,
    "encode-error: U+C476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC477");
    },
    Error,
    "encode-error: U+C477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC478");
    },
    Error,
    "encode-error: U+C478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC479");
    },
    Error,
    "encode-error: U+C479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC47A");
    },
    Error,
    "encode-error: U+C47A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC47B");
    },
    Error,
    "encode-error: U+C47B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC47C");
    },
    Error,
    "encode-error: U+C47C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC47D");
    },
    Error,
    "encode-error: U+C47D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC47E");
    },
    Error,
    "encode-error: U+C47E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC47F");
    },
    Error,
    "encode-error: U+C47F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC480");
    },
    Error,
    "encode-error: U+C480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC481");
    },
    Error,
    "encode-error: U+C481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC482");
    },
    Error,
    "encode-error: U+C482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC483");
    },
    Error,
    "encode-error: U+C483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC484");
    },
    Error,
    "encode-error: U+C484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC485");
    },
    Error,
    "encode-error: U+C485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC486");
    },
    Error,
    "encode-error: U+C486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC487");
    },
    Error,
    "encode-error: U+C487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC488");
    },
    Error,
    "encode-error: U+C488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC489");
    },
    Error,
    "encode-error: U+C489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC48A");
    },
    Error,
    "encode-error: U+C48A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC48B");
    },
    Error,
    "encode-error: U+C48B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC48C");
    },
    Error,
    "encode-error: U+C48C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC48D");
    },
    Error,
    "encode-error: U+C48D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC48E");
    },
    Error,
    "encode-error: U+C48E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC48F");
    },
    Error,
    "encode-error: U+C48F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC490");
    },
    Error,
    "encode-error: U+C490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC491");
    },
    Error,
    "encode-error: U+C491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC492");
    },
    Error,
    "encode-error: U+C492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC493");
    },
    Error,
    "encode-error: U+C493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC494");
    },
    Error,
    "encode-error: U+C494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC495");
    },
    Error,
    "encode-error: U+C495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC496");
    },
    Error,
    "encode-error: U+C496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC497");
    },
    Error,
    "encode-error: U+C497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC498");
    },
    Error,
    "encode-error: U+C498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC499");
    },
    Error,
    "encode-error: U+C499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC49A");
    },
    Error,
    "encode-error: U+C49A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC49B");
    },
    Error,
    "encode-error: U+C49B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC49C");
    },
    Error,
    "encode-error: U+C49C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC49D");
    },
    Error,
    "encode-error: U+C49D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC49E");
    },
    Error,
    "encode-error: U+C49E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC49F");
    },
    Error,
    "encode-error: U+C49F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A0");
    },
    Error,
    "encode-error: U+C4A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A1");
    },
    Error,
    "encode-error: U+C4A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A2");
    },
    Error,
    "encode-error: U+C4A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A3");
    },
    Error,
    "encode-error: U+C4A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A4");
    },
    Error,
    "encode-error: U+C4A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A5");
    },
    Error,
    "encode-error: U+C4A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A6");
    },
    Error,
    "encode-error: U+C4A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A7");
    },
    Error,
    "encode-error: U+C4A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A8");
    },
    Error,
    "encode-error: U+C4A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A9");
    },
    Error,
    "encode-error: U+C4A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4AA");
    },
    Error,
    "encode-error: U+C4AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4AB");
    },
    Error,
    "encode-error: U+C4AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4AC");
    },
    Error,
    "encode-error: U+C4AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4AD");
    },
    Error,
    "encode-error: U+C4AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4AE");
    },
    Error,
    "encode-error: U+C4AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4AF");
    },
    Error,
    "encode-error: U+C4AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B0");
    },
    Error,
    "encode-error: U+C4B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B1");
    },
    Error,
    "encode-error: U+C4B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B2");
    },
    Error,
    "encode-error: U+C4B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B3");
    },
    Error,
    "encode-error: U+C4B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B4");
    },
    Error,
    "encode-error: U+C4B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B5");
    },
    Error,
    "encode-error: U+C4B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B6");
    },
    Error,
    "encode-error: U+C4B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B7");
    },
    Error,
    "encode-error: U+C4B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B8");
    },
    Error,
    "encode-error: U+C4B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B9");
    },
    Error,
    "encode-error: U+C4B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4BA");
    },
    Error,
    "encode-error: U+C4BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4BB");
    },
    Error,
    "encode-error: U+C4BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4BC");
    },
    Error,
    "encode-error: U+C4BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4BD");
    },
    Error,
    "encode-error: U+C4BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4BE");
    },
    Error,
    "encode-error: U+C4BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4BF");
    },
    Error,
    "encode-error: U+C4BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C0");
    },
    Error,
    "encode-error: U+C4C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C1");
    },
    Error,
    "encode-error: U+C4C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C2");
    },
    Error,
    "encode-error: U+C4C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C3");
    },
    Error,
    "encode-error: U+C4C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C4");
    },
    Error,
    "encode-error: U+C4C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C5");
    },
    Error,
    "encode-error: U+C4C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C6");
    },
    Error,
    "encode-error: U+C4C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C7");
    },
    Error,
    "encode-error: U+C4C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C8");
    },
    Error,
    "encode-error: U+C4C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C9");
    },
    Error,
    "encode-error: U+C4C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4CA");
    },
    Error,
    "encode-error: U+C4CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4CB");
    },
    Error,
    "encode-error: U+C4CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4CC");
    },
    Error,
    "encode-error: U+C4CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4CD");
    },
    Error,
    "encode-error: U+C4CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4CE");
    },
    Error,
    "encode-error: U+C4CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4CF");
    },
    Error,
    "encode-error: U+C4CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D0");
    },
    Error,
    "encode-error: U+C4D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D1");
    },
    Error,
    "encode-error: U+C4D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D2");
    },
    Error,
    "encode-error: U+C4D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D3");
    },
    Error,
    "encode-error: U+C4D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D4");
    },
    Error,
    "encode-error: U+C4D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D5");
    },
    Error,
    "encode-error: U+C4D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D6");
    },
    Error,
    "encode-error: U+C4D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D7");
    },
    Error,
    "encode-error: U+C4D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D8");
    },
    Error,
    "encode-error: U+C4D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D9");
    },
    Error,
    "encode-error: U+C4D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4DA");
    },
    Error,
    "encode-error: U+C4DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4DB");
    },
    Error,
    "encode-error: U+C4DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4DC");
    },
    Error,
    "encode-error: U+C4DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4DD");
    },
    Error,
    "encode-error: U+C4DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4DE");
    },
    Error,
    "encode-error: U+C4DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4DF");
    },
    Error,
    "encode-error: U+C4DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E0");
    },
    Error,
    "encode-error: U+C4E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E1");
    },
    Error,
    "encode-error: U+C4E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E2");
    },
    Error,
    "encode-error: U+C4E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E3");
    },
    Error,
    "encode-error: U+C4E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E4");
    },
    Error,
    "encode-error: U+C4E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E5");
    },
    Error,
    "encode-error: U+C4E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E6");
    },
    Error,
    "encode-error: U+C4E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E7");
    },
    Error,
    "encode-error: U+C4E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E8");
    },
    Error,
    "encode-error: U+C4E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E9");
    },
    Error,
    "encode-error: U+C4E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4EA");
    },
    Error,
    "encode-error: U+C4EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4EB");
    },
    Error,
    "encode-error: U+C4EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4EC");
    },
    Error,
    "encode-error: U+C4EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4ED");
    },
    Error,
    "encode-error: U+C4ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4EE");
    },
    Error,
    "encode-error: U+C4EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4EF");
    },
    Error,
    "encode-error: U+C4EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F0");
    },
    Error,
    "encode-error: U+C4F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F1");
    },
    Error,
    "encode-error: U+C4F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F2");
    },
    Error,
    "encode-error: U+C4F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F3");
    },
    Error,
    "encode-error: U+C4F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F4");
    },
    Error,
    "encode-error: U+C4F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F5");
    },
    Error,
    "encode-error: U+C4F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F6");
    },
    Error,
    "encode-error: U+C4F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F7");
    },
    Error,
    "encode-error: U+C4F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F8");
    },
    Error,
    "encode-error: U+C4F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F9");
    },
    Error,
    "encode-error: U+C4F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4FA");
    },
    Error,
    "encode-error: U+C4FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4FB");
    },
    Error,
    "encode-error: U+C4FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4FC");
    },
    Error,
    "encode-error: U+C4FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4FD");
    },
    Error,
    "encode-error: U+C4FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4FE");
    },
    Error,
    "encode-error: U+C4FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4FF");
    },
    Error,
    "encode-error: U+C4FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC500");
    },
    Error,
    "encode-error: U+C500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC501");
    },
    Error,
    "encode-error: U+C501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC502");
    },
    Error,
    "encode-error: U+C502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC503");
    },
    Error,
    "encode-error: U+C503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC504");
    },
    Error,
    "encode-error: U+C504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC505");
    },
    Error,
    "encode-error: U+C505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC506");
    },
    Error,
    "encode-error: U+C506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC507");
    },
    Error,
    "encode-error: U+C507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC508");
    },
    Error,
    "encode-error: U+C508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC509");
    },
    Error,
    "encode-error: U+C509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC50A");
    },
    Error,
    "encode-error: U+C50A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC50B");
    },
    Error,
    "encode-error: U+C50B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC50C");
    },
    Error,
    "encode-error: U+C50C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC50D");
    },
    Error,
    "encode-error: U+C50D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC50E");
    },
    Error,
    "encode-error: U+C50E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC50F");
    },
    Error,
    "encode-error: U+C50F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC510");
    },
    Error,
    "encode-error: U+C510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC511");
    },
    Error,
    "encode-error: U+C511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC512");
    },
    Error,
    "encode-error: U+C512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC513");
    },
    Error,
    "encode-error: U+C513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC514");
    },
    Error,
    "encode-error: U+C514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC515");
    },
    Error,
    "encode-error: U+C515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC516");
    },
    Error,
    "encode-error: U+C516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC517");
    },
    Error,
    "encode-error: U+C517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC518");
    },
    Error,
    "encode-error: U+C518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC519");
    },
    Error,
    "encode-error: U+C519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC51A");
    },
    Error,
    "encode-error: U+C51A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC51B");
    },
    Error,
    "encode-error: U+C51B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC51C");
    },
    Error,
    "encode-error: U+C51C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC51D");
    },
    Error,
    "encode-error: U+C51D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC51E");
    },
    Error,
    "encode-error: U+C51E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC51F");
    },
    Error,
    "encode-error: U+C51F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC520");
    },
    Error,
    "encode-error: U+C520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC521");
    },
    Error,
    "encode-error: U+C521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC522");
    },
    Error,
    "encode-error: U+C522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC523");
    },
    Error,
    "encode-error: U+C523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC524");
    },
    Error,
    "encode-error: U+C524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC525");
    },
    Error,
    "encode-error: U+C525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC526");
    },
    Error,
    "encode-error: U+C526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC527");
    },
    Error,
    "encode-error: U+C527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC528");
    },
    Error,
    "encode-error: U+C528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC529");
    },
    Error,
    "encode-error: U+C529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC52A");
    },
    Error,
    "encode-error: U+C52A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC52B");
    },
    Error,
    "encode-error: U+C52B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC52C");
    },
    Error,
    "encode-error: U+C52C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC52D");
    },
    Error,
    "encode-error: U+C52D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC52E");
    },
    Error,
    "encode-error: U+C52E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC52F");
    },
    Error,
    "encode-error: U+C52F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC530");
    },
    Error,
    "encode-error: U+C530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC531");
    },
    Error,
    "encode-error: U+C531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC532");
    },
    Error,
    "encode-error: U+C532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC533");
    },
    Error,
    "encode-error: U+C533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC534");
    },
    Error,
    "encode-error: U+C534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC535");
    },
    Error,
    "encode-error: U+C535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC536");
    },
    Error,
    "encode-error: U+C536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC537");
    },
    Error,
    "encode-error: U+C537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC538");
    },
    Error,
    "encode-error: U+C538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC539");
    },
    Error,
    "encode-error: U+C539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC53A");
    },
    Error,
    "encode-error: U+C53A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC53B");
    },
    Error,
    "encode-error: U+C53B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC53C");
    },
    Error,
    "encode-error: U+C53C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC53D");
    },
    Error,
    "encode-error: U+C53D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC53E");
    },
    Error,
    "encode-error: U+C53E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC53F");
    },
    Error,
    "encode-error: U+C53F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC540");
    },
    Error,
    "encode-error: U+C540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC541");
    },
    Error,
    "encode-error: U+C541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC542");
    },
    Error,
    "encode-error: U+C542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC543");
    },
    Error,
    "encode-error: U+C543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC544");
    },
    Error,
    "encode-error: U+C544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC545");
    },
    Error,
    "encode-error: U+C545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC546");
    },
    Error,
    "encode-error: U+C546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC547");
    },
    Error,
    "encode-error: U+C547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC548");
    },
    Error,
    "encode-error: U+C548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC549");
    },
    Error,
    "encode-error: U+C549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC54A");
    },
    Error,
    "encode-error: U+C54A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC54B");
    },
    Error,
    "encode-error: U+C54B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC54C");
    },
    Error,
    "encode-error: U+C54C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC54D");
    },
    Error,
    "encode-error: U+C54D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC54E");
    },
    Error,
    "encode-error: U+C54E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC54F");
    },
    Error,
    "encode-error: U+C54F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC550");
    },
    Error,
    "encode-error: U+C550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC551");
    },
    Error,
    "encode-error: U+C551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC552");
    },
    Error,
    "encode-error: U+C552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC553");
    },
    Error,
    "encode-error: U+C553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC554");
    },
    Error,
    "encode-error: U+C554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC555");
    },
    Error,
    "encode-error: U+C555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC556");
    },
    Error,
    "encode-error: U+C556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC557");
    },
    Error,
    "encode-error: U+C557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC558");
    },
    Error,
    "encode-error: U+C558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC559");
    },
    Error,
    "encode-error: U+C559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC55A");
    },
    Error,
    "encode-error: U+C55A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC55B");
    },
    Error,
    "encode-error: U+C55B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC55C");
    },
    Error,
    "encode-error: U+C55C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC55D");
    },
    Error,
    "encode-error: U+C55D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC55E");
    },
    Error,
    "encode-error: U+C55E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC55F");
    },
    Error,
    "encode-error: U+C55F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC560");
    },
    Error,
    "encode-error: U+C560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC561");
    },
    Error,
    "encode-error: U+C561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC562");
    },
    Error,
    "encode-error: U+C562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC563");
    },
    Error,
    "encode-error: U+C563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC564");
    },
    Error,
    "encode-error: U+C564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC565");
    },
    Error,
    "encode-error: U+C565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC566");
    },
    Error,
    "encode-error: U+C566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC567");
    },
    Error,
    "encode-error: U+C567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC568");
    },
    Error,
    "encode-error: U+C568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC569");
    },
    Error,
    "encode-error: U+C569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC56A");
    },
    Error,
    "encode-error: U+C56A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC56B");
    },
    Error,
    "encode-error: U+C56B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC56C");
    },
    Error,
    "encode-error: U+C56C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC56D");
    },
    Error,
    "encode-error: U+C56D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC56E");
    },
    Error,
    "encode-error: U+C56E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC56F");
    },
    Error,
    "encode-error: U+C56F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC570");
    },
    Error,
    "encode-error: U+C570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC571");
    },
    Error,
    "encode-error: U+C571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC572");
    },
    Error,
    "encode-error: U+C572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC573");
    },
    Error,
    "encode-error: U+C573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC574");
    },
    Error,
    "encode-error: U+C574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC575");
    },
    Error,
    "encode-error: U+C575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC576");
    },
    Error,
    "encode-error: U+C576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC577");
    },
    Error,
    "encode-error: U+C577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC578");
    },
    Error,
    "encode-error: U+C578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC579");
    },
    Error,
    "encode-error: U+C579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC57A");
    },
    Error,
    "encode-error: U+C57A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC57B");
    },
    Error,
    "encode-error: U+C57B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC57C");
    },
    Error,
    "encode-error: U+C57C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC57D");
    },
    Error,
    "encode-error: U+C57D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC57E");
    },
    Error,
    "encode-error: U+C57E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC57F");
    },
    Error,
    "encode-error: U+C57F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC580");
    },
    Error,
    "encode-error: U+C580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC581");
    },
    Error,
    "encode-error: U+C581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC582");
    },
    Error,
    "encode-error: U+C582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC583");
    },
    Error,
    "encode-error: U+C583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC584");
    },
    Error,
    "encode-error: U+C584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC585");
    },
    Error,
    "encode-error: U+C585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC586");
    },
    Error,
    "encode-error: U+C586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC587");
    },
    Error,
    "encode-error: U+C587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC588");
    },
    Error,
    "encode-error: U+C588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC589");
    },
    Error,
    "encode-error: U+C589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC58A");
    },
    Error,
    "encode-error: U+C58A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC58B");
    },
    Error,
    "encode-error: U+C58B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC58C");
    },
    Error,
    "encode-error: U+C58C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC58D");
    },
    Error,
    "encode-error: U+C58D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC58E");
    },
    Error,
    "encode-error: U+C58E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC58F");
    },
    Error,
    "encode-error: U+C58F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC590");
    },
    Error,
    "encode-error: U+C590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC591");
    },
    Error,
    "encode-error: U+C591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC592");
    },
    Error,
    "encode-error: U+C592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC593");
    },
    Error,
    "encode-error: U+C593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC594");
    },
    Error,
    "encode-error: U+C594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC595");
    },
    Error,
    "encode-error: U+C595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC596");
    },
    Error,
    "encode-error: U+C596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC597");
    },
    Error,
    "encode-error: U+C597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC598");
    },
    Error,
    "encode-error: U+C598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC599");
    },
    Error,
    "encode-error: U+C599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC59A");
    },
    Error,
    "encode-error: U+C59A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC59B");
    },
    Error,
    "encode-error: U+C59B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC59C");
    },
    Error,
    "encode-error: U+C59C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC59D");
    },
    Error,
    "encode-error: U+C59D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC59E");
    },
    Error,
    "encode-error: U+C59E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC59F");
    },
    Error,
    "encode-error: U+C59F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A0");
    },
    Error,
    "encode-error: U+C5A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A1");
    },
    Error,
    "encode-error: U+C5A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A2");
    },
    Error,
    "encode-error: U+C5A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A3");
    },
    Error,
    "encode-error: U+C5A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A4");
    },
    Error,
    "encode-error: U+C5A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A5");
    },
    Error,
    "encode-error: U+C5A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A6");
    },
    Error,
    "encode-error: U+C5A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A7");
    },
    Error,
    "encode-error: U+C5A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A8");
    },
    Error,
    "encode-error: U+C5A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A9");
    },
    Error,
    "encode-error: U+C5A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5AA");
    },
    Error,
    "encode-error: U+C5AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5AB");
    },
    Error,
    "encode-error: U+C5AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5AC");
    },
    Error,
    "encode-error: U+C5AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5AD");
    },
    Error,
    "encode-error: U+C5AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5AE");
    },
    Error,
    "encode-error: U+C5AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5AF");
    },
    Error,
    "encode-error: U+C5AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B0");
    },
    Error,
    "encode-error: U+C5B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B1");
    },
    Error,
    "encode-error: U+C5B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B2");
    },
    Error,
    "encode-error: U+C5B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B3");
    },
    Error,
    "encode-error: U+C5B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B4");
    },
    Error,
    "encode-error: U+C5B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B5");
    },
    Error,
    "encode-error: U+C5B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B6");
    },
    Error,
    "encode-error: U+C5B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B7");
    },
    Error,
    "encode-error: U+C5B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B8");
    },
    Error,
    "encode-error: U+C5B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B9");
    },
    Error,
    "encode-error: U+C5B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5BA");
    },
    Error,
    "encode-error: U+C5BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5BB");
    },
    Error,
    "encode-error: U+C5BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5BC");
    },
    Error,
    "encode-error: U+C5BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5BD");
    },
    Error,
    "encode-error: U+C5BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5BE");
    },
    Error,
    "encode-error: U+C5BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5BF");
    },
    Error,
    "encode-error: U+C5BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C0");
    },
    Error,
    "encode-error: U+C5C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C1");
    },
    Error,
    "encode-error: U+C5C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C2");
    },
    Error,
    "encode-error: U+C5C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C3");
    },
    Error,
    "encode-error: U+C5C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C4");
    },
    Error,
    "encode-error: U+C5C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C5");
    },
    Error,
    "encode-error: U+C5C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C6");
    },
    Error,
    "encode-error: U+C5C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C7");
    },
    Error,
    "encode-error: U+C5C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C8");
    },
    Error,
    "encode-error: U+C5C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C9");
    },
    Error,
    "encode-error: U+C5C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5CA");
    },
    Error,
    "encode-error: U+C5CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5CB");
    },
    Error,
    "encode-error: U+C5CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5CC");
    },
    Error,
    "encode-error: U+C5CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5CD");
    },
    Error,
    "encode-error: U+C5CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5CE");
    },
    Error,
    "encode-error: U+C5CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5CF");
    },
    Error,
    "encode-error: U+C5CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D0");
    },
    Error,
    "encode-error: U+C5D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D1");
    },
    Error,
    "encode-error: U+C5D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D2");
    },
    Error,
    "encode-error: U+C5D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D3");
    },
    Error,
    "encode-error: U+C5D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D4");
    },
    Error,
    "encode-error: U+C5D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D5");
    },
    Error,
    "encode-error: U+C5D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D6");
    },
    Error,
    "encode-error: U+C5D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D7");
    },
    Error,
    "encode-error: U+C5D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D8");
    },
    Error,
    "encode-error: U+C5D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D9");
    },
    Error,
    "encode-error: U+C5D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5DA");
    },
    Error,
    "encode-error: U+C5DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5DB");
    },
    Error,
    "encode-error: U+C5DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5DC");
    },
    Error,
    "encode-error: U+C5DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5DD");
    },
    Error,
    "encode-error: U+C5DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5DE");
    },
    Error,
    "encode-error: U+C5DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5DF");
    },
    Error,
    "encode-error: U+C5DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E0");
    },
    Error,
    "encode-error: U+C5E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E1");
    },
    Error,
    "encode-error: U+C5E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E2");
    },
    Error,
    "encode-error: U+C5E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E3");
    },
    Error,
    "encode-error: U+C5E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E4");
    },
    Error,
    "encode-error: U+C5E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E5");
    },
    Error,
    "encode-error: U+C5E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E6");
    },
    Error,
    "encode-error: U+C5E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E7");
    },
    Error,
    "encode-error: U+C5E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E8");
    },
    Error,
    "encode-error: U+C5E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E9");
    },
    Error,
    "encode-error: U+C5E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5EA");
    },
    Error,
    "encode-error: U+C5EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5EB");
    },
    Error,
    "encode-error: U+C5EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5EC");
    },
    Error,
    "encode-error: U+C5EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5ED");
    },
    Error,
    "encode-error: U+C5ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5EE");
    },
    Error,
    "encode-error: U+C5EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5EF");
    },
    Error,
    "encode-error: U+C5EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F0");
    },
    Error,
    "encode-error: U+C5F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F1");
    },
    Error,
    "encode-error: U+C5F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F2");
    },
    Error,
    "encode-error: U+C5F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F3");
    },
    Error,
    "encode-error: U+C5F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F4");
    },
    Error,
    "encode-error: U+C5F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F5");
    },
    Error,
    "encode-error: U+C5F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F6");
    },
    Error,
    "encode-error: U+C5F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F7");
    },
    Error,
    "encode-error: U+C5F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F8");
    },
    Error,
    "encode-error: U+C5F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F9");
    },
    Error,
    "encode-error: U+C5F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5FA");
    },
    Error,
    "encode-error: U+C5FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5FB");
    },
    Error,
    "encode-error: U+C5FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5FC");
    },
    Error,
    "encode-error: U+C5FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5FD");
    },
    Error,
    "encode-error: U+C5FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5FE");
    },
    Error,
    "encode-error: U+C5FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5FF");
    },
    Error,
    "encode-error: U+C5FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC600");
    },
    Error,
    "encode-error: U+C600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC601");
    },
    Error,
    "encode-error: U+C601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC602");
    },
    Error,
    "encode-error: U+C602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC603");
    },
    Error,
    "encode-error: U+C603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC604");
    },
    Error,
    "encode-error: U+C604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC605");
    },
    Error,
    "encode-error: U+C605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC606");
    },
    Error,
    "encode-error: U+C606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC607");
    },
    Error,
    "encode-error: U+C607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC608");
    },
    Error,
    "encode-error: U+C608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC609");
    },
    Error,
    "encode-error: U+C609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC60A");
    },
    Error,
    "encode-error: U+C60A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC60B");
    },
    Error,
    "encode-error: U+C60B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC60C");
    },
    Error,
    "encode-error: U+C60C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC60D");
    },
    Error,
    "encode-error: U+C60D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC60E");
    },
    Error,
    "encode-error: U+C60E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC60F");
    },
    Error,
    "encode-error: U+C60F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC610");
    },
    Error,
    "encode-error: U+C610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC611");
    },
    Error,
    "encode-error: U+C611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC612");
    },
    Error,
    "encode-error: U+C612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC613");
    },
    Error,
    "encode-error: U+C613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC614");
    },
    Error,
    "encode-error: U+C614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC615");
    },
    Error,
    "encode-error: U+C615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC616");
    },
    Error,
    "encode-error: U+C616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC617");
    },
    Error,
    "encode-error: U+C617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC618");
    },
    Error,
    "encode-error: U+C618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC619");
    },
    Error,
    "encode-error: U+C619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC61A");
    },
    Error,
    "encode-error: U+C61A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC61B");
    },
    Error,
    "encode-error: U+C61B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC61C");
    },
    Error,
    "encode-error: U+C61C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC61D");
    },
    Error,
    "encode-error: U+C61D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC61E");
    },
    Error,
    "encode-error: U+C61E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC61F");
    },
    Error,
    "encode-error: U+C61F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC620");
    },
    Error,
    "encode-error: U+C620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC621");
    },
    Error,
    "encode-error: U+C621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC622");
    },
    Error,
    "encode-error: U+C622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC623");
    },
    Error,
    "encode-error: U+C623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC624");
    },
    Error,
    "encode-error: U+C624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC625");
    },
    Error,
    "encode-error: U+C625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC626");
    },
    Error,
    "encode-error: U+C626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC627");
    },
    Error,
    "encode-error: U+C627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC628");
    },
    Error,
    "encode-error: U+C628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC629");
    },
    Error,
    "encode-error: U+C629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC62A");
    },
    Error,
    "encode-error: U+C62A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC62B");
    },
    Error,
    "encode-error: U+C62B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC62C");
    },
    Error,
    "encode-error: U+C62C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC62D");
    },
    Error,
    "encode-error: U+C62D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC62E");
    },
    Error,
    "encode-error: U+C62E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC62F");
    },
    Error,
    "encode-error: U+C62F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC630");
    },
    Error,
    "encode-error: U+C630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC631");
    },
    Error,
    "encode-error: U+C631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC632");
    },
    Error,
    "encode-error: U+C632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC633");
    },
    Error,
    "encode-error: U+C633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC634");
    },
    Error,
    "encode-error: U+C634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC635");
    },
    Error,
    "encode-error: U+C635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC636");
    },
    Error,
    "encode-error: U+C636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC637");
    },
    Error,
    "encode-error: U+C637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC638");
    },
    Error,
    "encode-error: U+C638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC639");
    },
    Error,
    "encode-error: U+C639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC63A");
    },
    Error,
    "encode-error: U+C63A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC63B");
    },
    Error,
    "encode-error: U+C63B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC63C");
    },
    Error,
    "encode-error: U+C63C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC63D");
    },
    Error,
    "encode-error: U+C63D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC63E");
    },
    Error,
    "encode-error: U+C63E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC63F");
    },
    Error,
    "encode-error: U+C63F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC640");
    },
    Error,
    "encode-error: U+C640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC641");
    },
    Error,
    "encode-error: U+C641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC642");
    },
    Error,
    "encode-error: U+C642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC643");
    },
    Error,
    "encode-error: U+C643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC644");
    },
    Error,
    "encode-error: U+C644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC645");
    },
    Error,
    "encode-error: U+C645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC646");
    },
    Error,
    "encode-error: U+C646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC647");
    },
    Error,
    "encode-error: U+C647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC648");
    },
    Error,
    "encode-error: U+C648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC649");
    },
    Error,
    "encode-error: U+C649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC64A");
    },
    Error,
    "encode-error: U+C64A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC64B");
    },
    Error,
    "encode-error: U+C64B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC64C");
    },
    Error,
    "encode-error: U+C64C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC64D");
    },
    Error,
    "encode-error: U+C64D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC64E");
    },
    Error,
    "encode-error: U+C64E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC64F");
    },
    Error,
    "encode-error: U+C64F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC650");
    },
    Error,
    "encode-error: U+C650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC651");
    },
    Error,
    "encode-error: U+C651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC652");
    },
    Error,
    "encode-error: U+C652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC653");
    },
    Error,
    "encode-error: U+C653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC654");
    },
    Error,
    "encode-error: U+C654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC655");
    },
    Error,
    "encode-error: U+C655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC656");
    },
    Error,
    "encode-error: U+C656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC657");
    },
    Error,
    "encode-error: U+C657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC658");
    },
    Error,
    "encode-error: U+C658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC659");
    },
    Error,
    "encode-error: U+C659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC65A");
    },
    Error,
    "encode-error: U+C65A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC65B");
    },
    Error,
    "encode-error: U+C65B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC65C");
    },
    Error,
    "encode-error: U+C65C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC65D");
    },
    Error,
    "encode-error: U+C65D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC65E");
    },
    Error,
    "encode-error: U+C65E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC65F");
    },
    Error,
    "encode-error: U+C65F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC660");
    },
    Error,
    "encode-error: U+C660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC661");
    },
    Error,
    "encode-error: U+C661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC662");
    },
    Error,
    "encode-error: U+C662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC663");
    },
    Error,
    "encode-error: U+C663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC664");
    },
    Error,
    "encode-error: U+C664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC665");
    },
    Error,
    "encode-error: U+C665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC666");
    },
    Error,
    "encode-error: U+C666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC667");
    },
    Error,
    "encode-error: U+C667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC668");
    },
    Error,
    "encode-error: U+C668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC669");
    },
    Error,
    "encode-error: U+C669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC66A");
    },
    Error,
    "encode-error: U+C66A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC66B");
    },
    Error,
    "encode-error: U+C66B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC66C");
    },
    Error,
    "encode-error: U+C66C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC66D");
    },
    Error,
    "encode-error: U+C66D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC66E");
    },
    Error,
    "encode-error: U+C66E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC66F");
    },
    Error,
    "encode-error: U+C66F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC670");
    },
    Error,
    "encode-error: U+C670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC671");
    },
    Error,
    "encode-error: U+C671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC672");
    },
    Error,
    "encode-error: U+C672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC673");
    },
    Error,
    "encode-error: U+C673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC674");
    },
    Error,
    "encode-error: U+C674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC675");
    },
    Error,
    "encode-error: U+C675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC676");
    },
    Error,
    "encode-error: U+C676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC677");
    },
    Error,
    "encode-error: U+C677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC678");
    },
    Error,
    "encode-error: U+C678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC679");
    },
    Error,
    "encode-error: U+C679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC67A");
    },
    Error,
    "encode-error: U+C67A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC67B");
    },
    Error,
    "encode-error: U+C67B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC67C");
    },
    Error,
    "encode-error: U+C67C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC67D");
    },
    Error,
    "encode-error: U+C67D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC67E");
    },
    Error,
    "encode-error: U+C67E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC67F");
    },
    Error,
    "encode-error: U+C67F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC680");
    },
    Error,
    "encode-error: U+C680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC681");
    },
    Error,
    "encode-error: U+C681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC682");
    },
    Error,
    "encode-error: U+C682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC683");
    },
    Error,
    "encode-error: U+C683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC684");
    },
    Error,
    "encode-error: U+C684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC685");
    },
    Error,
    "encode-error: U+C685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC686");
    },
    Error,
    "encode-error: U+C686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC687");
    },
    Error,
    "encode-error: U+C687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC688");
    },
    Error,
    "encode-error: U+C688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC689");
    },
    Error,
    "encode-error: U+C689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC68A");
    },
    Error,
    "encode-error: U+C68A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC68B");
    },
    Error,
    "encode-error: U+C68B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC68C");
    },
    Error,
    "encode-error: U+C68C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC68D");
    },
    Error,
    "encode-error: U+C68D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC68E");
    },
    Error,
    "encode-error: U+C68E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC68F");
    },
    Error,
    "encode-error: U+C68F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC690");
    },
    Error,
    "encode-error: U+C690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC691");
    },
    Error,
    "encode-error: U+C691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC692");
    },
    Error,
    "encode-error: U+C692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC693");
    },
    Error,
    "encode-error: U+C693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC694");
    },
    Error,
    "encode-error: U+C694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC695");
    },
    Error,
    "encode-error: U+C695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC696");
    },
    Error,
    "encode-error: U+C696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC697");
    },
    Error,
    "encode-error: U+C697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC698");
    },
    Error,
    "encode-error: U+C698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC699");
    },
    Error,
    "encode-error: U+C699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC69A");
    },
    Error,
    "encode-error: U+C69A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC69B");
    },
    Error,
    "encode-error: U+C69B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC69C");
    },
    Error,
    "encode-error: U+C69C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC69D");
    },
    Error,
    "encode-error: U+C69D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC69E");
    },
    Error,
    "encode-error: U+C69E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC69F");
    },
    Error,
    "encode-error: U+C69F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A0");
    },
    Error,
    "encode-error: U+C6A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A1");
    },
    Error,
    "encode-error: U+C6A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A2");
    },
    Error,
    "encode-error: U+C6A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A3");
    },
    Error,
    "encode-error: U+C6A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A4");
    },
    Error,
    "encode-error: U+C6A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A5");
    },
    Error,
    "encode-error: U+C6A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A6");
    },
    Error,
    "encode-error: U+C6A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A7");
    },
    Error,
    "encode-error: U+C6A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A8");
    },
    Error,
    "encode-error: U+C6A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A9");
    },
    Error,
    "encode-error: U+C6A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6AA");
    },
    Error,
    "encode-error: U+C6AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6AB");
    },
    Error,
    "encode-error: U+C6AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6AC");
    },
    Error,
    "encode-error: U+C6AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6AD");
    },
    Error,
    "encode-error: U+C6AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6AE");
    },
    Error,
    "encode-error: U+C6AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6AF");
    },
    Error,
    "encode-error: U+C6AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B0");
    },
    Error,
    "encode-error: U+C6B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B1");
    },
    Error,
    "encode-error: U+C6B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B2");
    },
    Error,
    "encode-error: U+C6B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B3");
    },
    Error,
    "encode-error: U+C6B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B4");
    },
    Error,
    "encode-error: U+C6B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B5");
    },
    Error,
    "encode-error: U+C6B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B6");
    },
    Error,
    "encode-error: U+C6B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B7");
    },
    Error,
    "encode-error: U+C6B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B8");
    },
    Error,
    "encode-error: U+C6B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B9");
    },
    Error,
    "encode-error: U+C6B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6BA");
    },
    Error,
    "encode-error: U+C6BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6BB");
    },
    Error,
    "encode-error: U+C6BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6BC");
    },
    Error,
    "encode-error: U+C6BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6BD");
    },
    Error,
    "encode-error: U+C6BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6BE");
    },
    Error,
    "encode-error: U+C6BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6BF");
    },
    Error,
    "encode-error: U+C6BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C0");
    },
    Error,
    "encode-error: U+C6C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C1");
    },
    Error,
    "encode-error: U+C6C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C2");
    },
    Error,
    "encode-error: U+C6C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C3");
    },
    Error,
    "encode-error: U+C6C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C4");
    },
    Error,
    "encode-error: U+C6C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C5");
    },
    Error,
    "encode-error: U+C6C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C6");
    },
    Error,
    "encode-error: U+C6C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C7");
    },
    Error,
    "encode-error: U+C6C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C8");
    },
    Error,
    "encode-error: U+C6C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C9");
    },
    Error,
    "encode-error: U+C6C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6CA");
    },
    Error,
    "encode-error: U+C6CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6CB");
    },
    Error,
    "encode-error: U+C6CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6CC");
    },
    Error,
    "encode-error: U+C6CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6CD");
    },
    Error,
    "encode-error: U+C6CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6CE");
    },
    Error,
    "encode-error: U+C6CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6CF");
    },
    Error,
    "encode-error: U+C6CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D0");
    },
    Error,
    "encode-error: U+C6D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D1");
    },
    Error,
    "encode-error: U+C6D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D2");
    },
    Error,
    "encode-error: U+C6D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D3");
    },
    Error,
    "encode-error: U+C6D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D4");
    },
    Error,
    "encode-error: U+C6D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D5");
    },
    Error,
    "encode-error: U+C6D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D6");
    },
    Error,
    "encode-error: U+C6D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D7");
    },
    Error,
    "encode-error: U+C6D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D8");
    },
    Error,
    "encode-error: U+C6D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D9");
    },
    Error,
    "encode-error: U+C6D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6DA");
    },
    Error,
    "encode-error: U+C6DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6DB");
    },
    Error,
    "encode-error: U+C6DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6DC");
    },
    Error,
    "encode-error: U+C6DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6DD");
    },
    Error,
    "encode-error: U+C6DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6DE");
    },
    Error,
    "encode-error: U+C6DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6DF");
    },
    Error,
    "encode-error: U+C6DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E0");
    },
    Error,
    "encode-error: U+C6E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E1");
    },
    Error,
    "encode-error: U+C6E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E2");
    },
    Error,
    "encode-error: U+C6E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E3");
    },
    Error,
    "encode-error: U+C6E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E4");
    },
    Error,
    "encode-error: U+C6E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E5");
    },
    Error,
    "encode-error: U+C6E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E6");
    },
    Error,
    "encode-error: U+C6E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E7");
    },
    Error,
    "encode-error: U+C6E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E8");
    },
    Error,
    "encode-error: U+C6E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E9");
    },
    Error,
    "encode-error: U+C6E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6EA");
    },
    Error,
    "encode-error: U+C6EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6EB");
    },
    Error,
    "encode-error: U+C6EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6EC");
    },
    Error,
    "encode-error: U+C6EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6ED");
    },
    Error,
    "encode-error: U+C6ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6EE");
    },
    Error,
    "encode-error: U+C6EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6EF");
    },
    Error,
    "encode-error: U+C6EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F0");
    },
    Error,
    "encode-error: U+C6F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F1");
    },
    Error,
    "encode-error: U+C6F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F2");
    },
    Error,
    "encode-error: U+C6F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F3");
    },
    Error,
    "encode-error: U+C6F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F4");
    },
    Error,
    "encode-error: U+C6F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F5");
    },
    Error,
    "encode-error: U+C6F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F6");
    },
    Error,
    "encode-error: U+C6F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F7");
    },
    Error,
    "encode-error: U+C6F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F8");
    },
    Error,
    "encode-error: U+C6F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F9");
    },
    Error,
    "encode-error: U+C6F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6FA");
    },
    Error,
    "encode-error: U+C6FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6FB");
    },
    Error,
    "encode-error: U+C6FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6FC");
    },
    Error,
    "encode-error: U+C6FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6FD");
    },
    Error,
    "encode-error: U+C6FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6FE");
    },
    Error,
    "encode-error: U+C6FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6FF");
    },
    Error,
    "encode-error: U+C6FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC700");
    },
    Error,
    "encode-error: U+C700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC701");
    },
    Error,
    "encode-error: U+C701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC702");
    },
    Error,
    "encode-error: U+C702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC703");
    },
    Error,
    "encode-error: U+C703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC704");
    },
    Error,
    "encode-error: U+C704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC705");
    },
    Error,
    "encode-error: U+C705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC706");
    },
    Error,
    "encode-error: U+C706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC707");
    },
    Error,
    "encode-error: U+C707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC708");
    },
    Error,
    "encode-error: U+C708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC709");
    },
    Error,
    "encode-error: U+C709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC70A");
    },
    Error,
    "encode-error: U+C70A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC70B");
    },
    Error,
    "encode-error: U+C70B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC70C");
    },
    Error,
    "encode-error: U+C70C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC70D");
    },
    Error,
    "encode-error: U+C70D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC70E");
    },
    Error,
    "encode-error: U+C70E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC70F");
    },
    Error,
    "encode-error: U+C70F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC710");
    },
    Error,
    "encode-error: U+C710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC711");
    },
    Error,
    "encode-error: U+C711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC712");
    },
    Error,
    "encode-error: U+C712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC713");
    },
    Error,
    "encode-error: U+C713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC714");
    },
    Error,
    "encode-error: U+C714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC715");
    },
    Error,
    "encode-error: U+C715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC716");
    },
    Error,
    "encode-error: U+C716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC717");
    },
    Error,
    "encode-error: U+C717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC718");
    },
    Error,
    "encode-error: U+C718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC719");
    },
    Error,
    "encode-error: U+C719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC71A");
    },
    Error,
    "encode-error: U+C71A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC71B");
    },
    Error,
    "encode-error: U+C71B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC71C");
    },
    Error,
    "encode-error: U+C71C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC71D");
    },
    Error,
    "encode-error: U+C71D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC71E");
    },
    Error,
    "encode-error: U+C71E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC71F");
    },
    Error,
    "encode-error: U+C71F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC720");
    },
    Error,
    "encode-error: U+C720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC721");
    },
    Error,
    "encode-error: U+C721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC722");
    },
    Error,
    "encode-error: U+C722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC723");
    },
    Error,
    "encode-error: U+C723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC724");
    },
    Error,
    "encode-error: U+C724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC725");
    },
    Error,
    "encode-error: U+C725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC726");
    },
    Error,
    "encode-error: U+C726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC727");
    },
    Error,
    "encode-error: U+C727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC728");
    },
    Error,
    "encode-error: U+C728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC729");
    },
    Error,
    "encode-error: U+C729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC72A");
    },
    Error,
    "encode-error: U+C72A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC72B");
    },
    Error,
    "encode-error: U+C72B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC72C");
    },
    Error,
    "encode-error: U+C72C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC72D");
    },
    Error,
    "encode-error: U+C72D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC72E");
    },
    Error,
    "encode-error: U+C72E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC72F");
    },
    Error,
    "encode-error: U+C72F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC730");
    },
    Error,
    "encode-error: U+C730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC731");
    },
    Error,
    "encode-error: U+C731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC732");
    },
    Error,
    "encode-error: U+C732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC733");
    },
    Error,
    "encode-error: U+C733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC734");
    },
    Error,
    "encode-error: U+C734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC735");
    },
    Error,
    "encode-error: U+C735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC736");
    },
    Error,
    "encode-error: U+C736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC737");
    },
    Error,
    "encode-error: U+C737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC738");
    },
    Error,
    "encode-error: U+C738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC739");
    },
    Error,
    "encode-error: U+C739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC73A");
    },
    Error,
    "encode-error: U+C73A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC73B");
    },
    Error,
    "encode-error: U+C73B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC73C");
    },
    Error,
    "encode-error: U+C73C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC73D");
    },
    Error,
    "encode-error: U+C73D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC73E");
    },
    Error,
    "encode-error: U+C73E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC73F");
    },
    Error,
    "encode-error: U+C73F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC740");
    },
    Error,
    "encode-error: U+C740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC741");
    },
    Error,
    "encode-error: U+C741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC742");
    },
    Error,
    "encode-error: U+C742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC743");
    },
    Error,
    "encode-error: U+C743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC744");
    },
    Error,
    "encode-error: U+C744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC745");
    },
    Error,
    "encode-error: U+C745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC746");
    },
    Error,
    "encode-error: U+C746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC747");
    },
    Error,
    "encode-error: U+C747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC748");
    },
    Error,
    "encode-error: U+C748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC749");
    },
    Error,
    "encode-error: U+C749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC74A");
    },
    Error,
    "encode-error: U+C74A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC74B");
    },
    Error,
    "encode-error: U+C74B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC74C");
    },
    Error,
    "encode-error: U+C74C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC74D");
    },
    Error,
    "encode-error: U+C74D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC74E");
    },
    Error,
    "encode-error: U+C74E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC74F");
    },
    Error,
    "encode-error: U+C74F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC750");
    },
    Error,
    "encode-error: U+C750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC751");
    },
    Error,
    "encode-error: U+C751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC752");
    },
    Error,
    "encode-error: U+C752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC753");
    },
    Error,
    "encode-error: U+C753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC754");
    },
    Error,
    "encode-error: U+C754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC755");
    },
    Error,
    "encode-error: U+C755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC756");
    },
    Error,
    "encode-error: U+C756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC757");
    },
    Error,
    "encode-error: U+C757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC758");
    },
    Error,
    "encode-error: U+C758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC759");
    },
    Error,
    "encode-error: U+C759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC75A");
    },
    Error,
    "encode-error: U+C75A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC75B");
    },
    Error,
    "encode-error: U+C75B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC75C");
    },
    Error,
    "encode-error: U+C75C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC75D");
    },
    Error,
    "encode-error: U+C75D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC75E");
    },
    Error,
    "encode-error: U+C75E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC75F");
    },
    Error,
    "encode-error: U+C75F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC760");
    },
    Error,
    "encode-error: U+C760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC761");
    },
    Error,
    "encode-error: U+C761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC762");
    },
    Error,
    "encode-error: U+C762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC763");
    },
    Error,
    "encode-error: U+C763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC764");
    },
    Error,
    "encode-error: U+C764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC765");
    },
    Error,
    "encode-error: U+C765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC766");
    },
    Error,
    "encode-error: U+C766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC767");
    },
    Error,
    "encode-error: U+C767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC768");
    },
    Error,
    "encode-error: U+C768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC769");
    },
    Error,
    "encode-error: U+C769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC76A");
    },
    Error,
    "encode-error: U+C76A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC76B");
    },
    Error,
    "encode-error: U+C76B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC76C");
    },
    Error,
    "encode-error: U+C76C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC76D");
    },
    Error,
    "encode-error: U+C76D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC76E");
    },
    Error,
    "encode-error: U+C76E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC76F");
    },
    Error,
    "encode-error: U+C76F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC770");
    },
    Error,
    "encode-error: U+C770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC771");
    },
    Error,
    "encode-error: U+C771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC772");
    },
    Error,
    "encode-error: U+C772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC773");
    },
    Error,
    "encode-error: U+C773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC774");
    },
    Error,
    "encode-error: U+C774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC775");
    },
    Error,
    "encode-error: U+C775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC776");
    },
    Error,
    "encode-error: U+C776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC777");
    },
    Error,
    "encode-error: U+C777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC778");
    },
    Error,
    "encode-error: U+C778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC779");
    },
    Error,
    "encode-error: U+C779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC77A");
    },
    Error,
    "encode-error: U+C77A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC77B");
    },
    Error,
    "encode-error: U+C77B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC77C");
    },
    Error,
    "encode-error: U+C77C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC77D");
    },
    Error,
    "encode-error: U+C77D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC77E");
    },
    Error,
    "encode-error: U+C77E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC77F");
    },
    Error,
    "encode-error: U+C77F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC780");
    },
    Error,
    "encode-error: U+C780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC781");
    },
    Error,
    "encode-error: U+C781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC782");
    },
    Error,
    "encode-error: U+C782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC783");
    },
    Error,
    "encode-error: U+C783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC784");
    },
    Error,
    "encode-error: U+C784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC785");
    },
    Error,
    "encode-error: U+C785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC786");
    },
    Error,
    "encode-error: U+C786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC787");
    },
    Error,
    "encode-error: U+C787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC788");
    },
    Error,
    "encode-error: U+C788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC789");
    },
    Error,
    "encode-error: U+C789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC78A");
    },
    Error,
    "encode-error: U+C78A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC78B");
    },
    Error,
    "encode-error: U+C78B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC78C");
    },
    Error,
    "encode-error: U+C78C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC78D");
    },
    Error,
    "encode-error: U+C78D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC78E");
    },
    Error,
    "encode-error: U+C78E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC78F");
    },
    Error,
    "encode-error: U+C78F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC790");
    },
    Error,
    "encode-error: U+C790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC791");
    },
    Error,
    "encode-error: U+C791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC792");
    },
    Error,
    "encode-error: U+C792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC793");
    },
    Error,
    "encode-error: U+C793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC794");
    },
    Error,
    "encode-error: U+C794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC795");
    },
    Error,
    "encode-error: U+C795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC796");
    },
    Error,
    "encode-error: U+C796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC797");
    },
    Error,
    "encode-error: U+C797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC798");
    },
    Error,
    "encode-error: U+C798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC799");
    },
    Error,
    "encode-error: U+C799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC79A");
    },
    Error,
    "encode-error: U+C79A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC79B");
    },
    Error,
    "encode-error: U+C79B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC79C");
    },
    Error,
    "encode-error: U+C79C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC79D");
    },
    Error,
    "encode-error: U+C79D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC79E");
    },
    Error,
    "encode-error: U+C79E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC79F");
    },
    Error,
    "encode-error: U+C79F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A0");
    },
    Error,
    "encode-error: U+C7A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A1");
    },
    Error,
    "encode-error: U+C7A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A2");
    },
    Error,
    "encode-error: U+C7A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A3");
    },
    Error,
    "encode-error: U+C7A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A4");
    },
    Error,
    "encode-error: U+C7A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A5");
    },
    Error,
    "encode-error: U+C7A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A6");
    },
    Error,
    "encode-error: U+C7A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A7");
    },
    Error,
    "encode-error: U+C7A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A8");
    },
    Error,
    "encode-error: U+C7A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A9");
    },
    Error,
    "encode-error: U+C7A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7AA");
    },
    Error,
    "encode-error: U+C7AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7AB");
    },
    Error,
    "encode-error: U+C7AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7AC");
    },
    Error,
    "encode-error: U+C7AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7AD");
    },
    Error,
    "encode-error: U+C7AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7AE");
    },
    Error,
    "encode-error: U+C7AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7AF");
    },
    Error,
    "encode-error: U+C7AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B0");
    },
    Error,
    "encode-error: U+C7B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B1");
    },
    Error,
    "encode-error: U+C7B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B2");
    },
    Error,
    "encode-error: U+C7B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B3");
    },
    Error,
    "encode-error: U+C7B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B4");
    },
    Error,
    "encode-error: U+C7B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B5");
    },
    Error,
    "encode-error: U+C7B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B6");
    },
    Error,
    "encode-error: U+C7B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B7");
    },
    Error,
    "encode-error: U+C7B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B8");
    },
    Error,
    "encode-error: U+C7B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B9");
    },
    Error,
    "encode-error: U+C7B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7BA");
    },
    Error,
    "encode-error: U+C7BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7BB");
    },
    Error,
    "encode-error: U+C7BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7BC");
    },
    Error,
    "encode-error: U+C7BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7BD");
    },
    Error,
    "encode-error: U+C7BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7BE");
    },
    Error,
    "encode-error: U+C7BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7BF");
    },
    Error,
    "encode-error: U+C7BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C0");
    },
    Error,
    "encode-error: U+C7C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C1");
    },
    Error,
    "encode-error: U+C7C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C2");
    },
    Error,
    "encode-error: U+C7C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C3");
    },
    Error,
    "encode-error: U+C7C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C4");
    },
    Error,
    "encode-error: U+C7C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C5");
    },
    Error,
    "encode-error: U+C7C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C6");
    },
    Error,
    "encode-error: U+C7C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C7");
    },
    Error,
    "encode-error: U+C7C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C8");
    },
    Error,
    "encode-error: U+C7C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C9");
    },
    Error,
    "encode-error: U+C7C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7CA");
    },
    Error,
    "encode-error: U+C7CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7CB");
    },
    Error,
    "encode-error: U+C7CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7CC");
    },
    Error,
    "encode-error: U+C7CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7CD");
    },
    Error,
    "encode-error: U+C7CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7CE");
    },
    Error,
    "encode-error: U+C7CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7CF");
    },
    Error,
    "encode-error: U+C7CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D0");
    },
    Error,
    "encode-error: U+C7D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D1");
    },
    Error,
    "encode-error: U+C7D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D2");
    },
    Error,
    "encode-error: U+C7D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D3");
    },
    Error,
    "encode-error: U+C7D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D4");
    },
    Error,
    "encode-error: U+C7D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D5");
    },
    Error,
    "encode-error: U+C7D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D6");
    },
    Error,
    "encode-error: U+C7D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D7");
    },
    Error,
    "encode-error: U+C7D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D8");
    },
    Error,
    "encode-error: U+C7D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D9");
    },
    Error,
    "encode-error: U+C7D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7DA");
    },
    Error,
    "encode-error: U+C7DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7DB");
    },
    Error,
    "encode-error: U+C7DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7DC");
    },
    Error,
    "encode-error: U+C7DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7DD");
    },
    Error,
    "encode-error: U+C7DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7DE");
    },
    Error,
    "encode-error: U+C7DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7DF");
    },
    Error,
    "encode-error: U+C7DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E0");
    },
    Error,
    "encode-error: U+C7E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E1");
    },
    Error,
    "encode-error: U+C7E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E2");
    },
    Error,
    "encode-error: U+C7E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E3");
    },
    Error,
    "encode-error: U+C7E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E4");
    },
    Error,
    "encode-error: U+C7E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E5");
    },
    Error,
    "encode-error: U+C7E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E6");
    },
    Error,
    "encode-error: U+C7E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E7");
    },
    Error,
    "encode-error: U+C7E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E8");
    },
    Error,
    "encode-error: U+C7E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E9");
    },
    Error,
    "encode-error: U+C7E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7EA");
    },
    Error,
    "encode-error: U+C7EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7EB");
    },
    Error,
    "encode-error: U+C7EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7EC");
    },
    Error,
    "encode-error: U+C7EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7ED");
    },
    Error,
    "encode-error: U+C7ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7EE");
    },
    Error,
    "encode-error: U+C7EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7EF");
    },
    Error,
    "encode-error: U+C7EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F0");
    },
    Error,
    "encode-error: U+C7F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F1");
    },
    Error,
    "encode-error: U+C7F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F2");
    },
    Error,
    "encode-error: U+C7F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F3");
    },
    Error,
    "encode-error: U+C7F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F4");
    },
    Error,
    "encode-error: U+C7F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F5");
    },
    Error,
    "encode-error: U+C7F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F6");
    },
    Error,
    "encode-error: U+C7F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F7");
    },
    Error,
    "encode-error: U+C7F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F8");
    },
    Error,
    "encode-error: U+C7F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F9");
    },
    Error,
    "encode-error: U+C7F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7FA");
    },
    Error,
    "encode-error: U+C7FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7FB");
    },
    Error,
    "encode-error: U+C7FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7FC");
    },
    Error,
    "encode-error: U+C7FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7FD");
    },
    Error,
    "encode-error: U+C7FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7FE");
    },
    Error,
    "encode-error: U+C7FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7FF");
    },
    Error,
    "encode-error: U+C7FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC800");
    },
    Error,
    "encode-error: U+C800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC801");
    },
    Error,
    "encode-error: U+C801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC802");
    },
    Error,
    "encode-error: U+C802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC803");
    },
    Error,
    "encode-error: U+C803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC804");
    },
    Error,
    "encode-error: U+C804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC805");
    },
    Error,
    "encode-error: U+C805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC806");
    },
    Error,
    "encode-error: U+C806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC807");
    },
    Error,
    "encode-error: U+C807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC808");
    },
    Error,
    "encode-error: U+C808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC809");
    },
    Error,
    "encode-error: U+C809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC80A");
    },
    Error,
    "encode-error: U+C80A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC80B");
    },
    Error,
    "encode-error: U+C80B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC80C");
    },
    Error,
    "encode-error: U+C80C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC80D");
    },
    Error,
    "encode-error: U+C80D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC80E");
    },
    Error,
    "encode-error: U+C80E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC80F");
    },
    Error,
    "encode-error: U+C80F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC810");
    },
    Error,
    "encode-error: U+C810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC811");
    },
    Error,
    "encode-error: U+C811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC812");
    },
    Error,
    "encode-error: U+C812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC813");
    },
    Error,
    "encode-error: U+C813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC814");
    },
    Error,
    "encode-error: U+C814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC815");
    },
    Error,
    "encode-error: U+C815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC816");
    },
    Error,
    "encode-error: U+C816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC817");
    },
    Error,
    "encode-error: U+C817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC818");
    },
    Error,
    "encode-error: U+C818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC819");
    },
    Error,
    "encode-error: U+C819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC81A");
    },
    Error,
    "encode-error: U+C81A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC81B");
    },
    Error,
    "encode-error: U+C81B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC81C");
    },
    Error,
    "encode-error: U+C81C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC81D");
    },
    Error,
    "encode-error: U+C81D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC81E");
    },
    Error,
    "encode-error: U+C81E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC81F");
    },
    Error,
    "encode-error: U+C81F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC820");
    },
    Error,
    "encode-error: U+C820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC821");
    },
    Error,
    "encode-error: U+C821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC822");
    },
    Error,
    "encode-error: U+C822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC823");
    },
    Error,
    "encode-error: U+C823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC824");
    },
    Error,
    "encode-error: U+C824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC825");
    },
    Error,
    "encode-error: U+C825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC826");
    },
    Error,
    "encode-error: U+C826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC827");
    },
    Error,
    "encode-error: U+C827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC828");
    },
    Error,
    "encode-error: U+C828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC829");
    },
    Error,
    "encode-error: U+C829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC82A");
    },
    Error,
    "encode-error: U+C82A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC82B");
    },
    Error,
    "encode-error: U+C82B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC82C");
    },
    Error,
    "encode-error: U+C82C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC82D");
    },
    Error,
    "encode-error: U+C82D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC82E");
    },
    Error,
    "encode-error: U+C82E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC82F");
    },
    Error,
    "encode-error: U+C82F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC830");
    },
    Error,
    "encode-error: U+C830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC831");
    },
    Error,
    "encode-error: U+C831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC832");
    },
    Error,
    "encode-error: U+C832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC833");
    },
    Error,
    "encode-error: U+C833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC834");
    },
    Error,
    "encode-error: U+C834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC835");
    },
    Error,
    "encode-error: U+C835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC836");
    },
    Error,
    "encode-error: U+C836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC837");
    },
    Error,
    "encode-error: U+C837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC838");
    },
    Error,
    "encode-error: U+C838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC839");
    },
    Error,
    "encode-error: U+C839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC83A");
    },
    Error,
    "encode-error: U+C83A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC83B");
    },
    Error,
    "encode-error: U+C83B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC83C");
    },
    Error,
    "encode-error: U+C83C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC83D");
    },
    Error,
    "encode-error: U+C83D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC83E");
    },
    Error,
    "encode-error: U+C83E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC83F");
    },
    Error,
    "encode-error: U+C83F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC840");
    },
    Error,
    "encode-error: U+C840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC841");
    },
    Error,
    "encode-error: U+C841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC842");
    },
    Error,
    "encode-error: U+C842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC843");
    },
    Error,
    "encode-error: U+C843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC844");
    },
    Error,
    "encode-error: U+C844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC845");
    },
    Error,
    "encode-error: U+C845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC846");
    },
    Error,
    "encode-error: U+C846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC847");
    },
    Error,
    "encode-error: U+C847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC848");
    },
    Error,
    "encode-error: U+C848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC849");
    },
    Error,
    "encode-error: U+C849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC84A");
    },
    Error,
    "encode-error: U+C84A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC84B");
    },
    Error,
    "encode-error: U+C84B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC84C");
    },
    Error,
    "encode-error: U+C84C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC84D");
    },
    Error,
    "encode-error: U+C84D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC84E");
    },
    Error,
    "encode-error: U+C84E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC84F");
    },
    Error,
    "encode-error: U+C84F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC850");
    },
    Error,
    "encode-error: U+C850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC851");
    },
    Error,
    "encode-error: U+C851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC852");
    },
    Error,
    "encode-error: U+C852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC853");
    },
    Error,
    "encode-error: U+C853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC854");
    },
    Error,
    "encode-error: U+C854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC855");
    },
    Error,
    "encode-error: U+C855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC856");
    },
    Error,
    "encode-error: U+C856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC857");
    },
    Error,
    "encode-error: U+C857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC858");
    },
    Error,
    "encode-error: U+C858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC859");
    },
    Error,
    "encode-error: U+C859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC85A");
    },
    Error,
    "encode-error: U+C85A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC85B");
    },
    Error,
    "encode-error: U+C85B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC85C");
    },
    Error,
    "encode-error: U+C85C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC85D");
    },
    Error,
    "encode-error: U+C85D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC85E");
    },
    Error,
    "encode-error: U+C85E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC85F");
    },
    Error,
    "encode-error: U+C85F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC860");
    },
    Error,
    "encode-error: U+C860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC861");
    },
    Error,
    "encode-error: U+C861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC862");
    },
    Error,
    "encode-error: U+C862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC863");
    },
    Error,
    "encode-error: U+C863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC864");
    },
    Error,
    "encode-error: U+C864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC865");
    },
    Error,
    "encode-error: U+C865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC866");
    },
    Error,
    "encode-error: U+C866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC867");
    },
    Error,
    "encode-error: U+C867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC868");
    },
    Error,
    "encode-error: U+C868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC869");
    },
    Error,
    "encode-error: U+C869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC86A");
    },
    Error,
    "encode-error: U+C86A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC86B");
    },
    Error,
    "encode-error: U+C86B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC86C");
    },
    Error,
    "encode-error: U+C86C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC86D");
    },
    Error,
    "encode-error: U+C86D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC86E");
    },
    Error,
    "encode-error: U+C86E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC86F");
    },
    Error,
    "encode-error: U+C86F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC870");
    },
    Error,
    "encode-error: U+C870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC871");
    },
    Error,
    "encode-error: U+C871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC872");
    },
    Error,
    "encode-error: U+C872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC873");
    },
    Error,
    "encode-error: U+C873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC874");
    },
    Error,
    "encode-error: U+C874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC875");
    },
    Error,
    "encode-error: U+C875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC876");
    },
    Error,
    "encode-error: U+C876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC877");
    },
    Error,
    "encode-error: U+C877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC878");
    },
    Error,
    "encode-error: U+C878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC879");
    },
    Error,
    "encode-error: U+C879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC87A");
    },
    Error,
    "encode-error: U+C87A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC87B");
    },
    Error,
    "encode-error: U+C87B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC87C");
    },
    Error,
    "encode-error: U+C87C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC87D");
    },
    Error,
    "encode-error: U+C87D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC87E");
    },
    Error,
    "encode-error: U+C87E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC87F");
    },
    Error,
    "encode-error: U+C87F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC880");
    },
    Error,
    "encode-error: U+C880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC881");
    },
    Error,
    "encode-error: U+C881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC882");
    },
    Error,
    "encode-error: U+C882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC883");
    },
    Error,
    "encode-error: U+C883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC884");
    },
    Error,
    "encode-error: U+C884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC885");
    },
    Error,
    "encode-error: U+C885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC886");
    },
    Error,
    "encode-error: U+C886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC887");
    },
    Error,
    "encode-error: U+C887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC888");
    },
    Error,
    "encode-error: U+C888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC889");
    },
    Error,
    "encode-error: U+C889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC88A");
    },
    Error,
    "encode-error: U+C88A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC88B");
    },
    Error,
    "encode-error: U+C88B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC88C");
    },
    Error,
    "encode-error: U+C88C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC88D");
    },
    Error,
    "encode-error: U+C88D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC88E");
    },
    Error,
    "encode-error: U+C88E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC88F");
    },
    Error,
    "encode-error: U+C88F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC890");
    },
    Error,
    "encode-error: U+C890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC891");
    },
    Error,
    "encode-error: U+C891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC892");
    },
    Error,
    "encode-error: U+C892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC893");
    },
    Error,
    "encode-error: U+C893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC894");
    },
    Error,
    "encode-error: U+C894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC895");
    },
    Error,
    "encode-error: U+C895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC896");
    },
    Error,
    "encode-error: U+C896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC897");
    },
    Error,
    "encode-error: U+C897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC898");
    },
    Error,
    "encode-error: U+C898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC899");
    },
    Error,
    "encode-error: U+C899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC89A");
    },
    Error,
    "encode-error: U+C89A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC89B");
    },
    Error,
    "encode-error: U+C89B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC89C");
    },
    Error,
    "encode-error: U+C89C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC89D");
    },
    Error,
    "encode-error: U+C89D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC89E");
    },
    Error,
    "encode-error: U+C89E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC89F");
    },
    Error,
    "encode-error: U+C89F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A0");
    },
    Error,
    "encode-error: U+C8A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A1");
    },
    Error,
    "encode-error: U+C8A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A2");
    },
    Error,
    "encode-error: U+C8A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A3");
    },
    Error,
    "encode-error: U+C8A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A4");
    },
    Error,
    "encode-error: U+C8A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A5");
    },
    Error,
    "encode-error: U+C8A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A6");
    },
    Error,
    "encode-error: U+C8A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A7");
    },
    Error,
    "encode-error: U+C8A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A8");
    },
    Error,
    "encode-error: U+C8A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A9");
    },
    Error,
    "encode-error: U+C8A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8AA");
    },
    Error,
    "encode-error: U+C8AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8AB");
    },
    Error,
    "encode-error: U+C8AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8AC");
    },
    Error,
    "encode-error: U+C8AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8AD");
    },
    Error,
    "encode-error: U+C8AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8AE");
    },
    Error,
    "encode-error: U+C8AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8AF");
    },
    Error,
    "encode-error: U+C8AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B0");
    },
    Error,
    "encode-error: U+C8B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B1");
    },
    Error,
    "encode-error: U+C8B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B2");
    },
    Error,
    "encode-error: U+C8B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B3");
    },
    Error,
    "encode-error: U+C8B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B4");
    },
    Error,
    "encode-error: U+C8B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B5");
    },
    Error,
    "encode-error: U+C8B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B6");
    },
    Error,
    "encode-error: U+C8B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B7");
    },
    Error,
    "encode-error: U+C8B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B8");
    },
    Error,
    "encode-error: U+C8B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B9");
    },
    Error,
    "encode-error: U+C8B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8BA");
    },
    Error,
    "encode-error: U+C8BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8BB");
    },
    Error,
    "encode-error: U+C8BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8BC");
    },
    Error,
    "encode-error: U+C8BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8BD");
    },
    Error,
    "encode-error: U+C8BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8BE");
    },
    Error,
    "encode-error: U+C8BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8BF");
    },
    Error,
    "encode-error: U+C8BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C0");
    },
    Error,
    "encode-error: U+C8C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C1");
    },
    Error,
    "encode-error: U+C8C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C2");
    },
    Error,
    "encode-error: U+C8C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C3");
    },
    Error,
    "encode-error: U+C8C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C4");
    },
    Error,
    "encode-error: U+C8C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C5");
    },
    Error,
    "encode-error: U+C8C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C6");
    },
    Error,
    "encode-error: U+C8C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C7");
    },
    Error,
    "encode-error: U+C8C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C8");
    },
    Error,
    "encode-error: U+C8C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C9");
    },
    Error,
    "encode-error: U+C8C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8CA");
    },
    Error,
    "encode-error: U+C8CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8CB");
    },
    Error,
    "encode-error: U+C8CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8CC");
    },
    Error,
    "encode-error: U+C8CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8CD");
    },
    Error,
    "encode-error: U+C8CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8CE");
    },
    Error,
    "encode-error: U+C8CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8CF");
    },
    Error,
    "encode-error: U+C8CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D0");
    },
    Error,
    "encode-error: U+C8D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D1");
    },
    Error,
    "encode-error: U+C8D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D2");
    },
    Error,
    "encode-error: U+C8D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D3");
    },
    Error,
    "encode-error: U+C8D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D4");
    },
    Error,
    "encode-error: U+C8D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D5");
    },
    Error,
    "encode-error: U+C8D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D6");
    },
    Error,
    "encode-error: U+C8D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D7");
    },
    Error,
    "encode-error: U+C8D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D8");
    },
    Error,
    "encode-error: U+C8D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D9");
    },
    Error,
    "encode-error: U+C8D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8DA");
    },
    Error,
    "encode-error: U+C8DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8DB");
    },
    Error,
    "encode-error: U+C8DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8DC");
    },
    Error,
    "encode-error: U+C8DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8DD");
    },
    Error,
    "encode-error: U+C8DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8DE");
    },
    Error,
    "encode-error: U+C8DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8DF");
    },
    Error,
    "encode-error: U+C8DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E0");
    },
    Error,
    "encode-error: U+C8E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E1");
    },
    Error,
    "encode-error: U+C8E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E2");
    },
    Error,
    "encode-error: U+C8E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E3");
    },
    Error,
    "encode-error: U+C8E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E4");
    },
    Error,
    "encode-error: U+C8E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E5");
    },
    Error,
    "encode-error: U+C8E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E6");
    },
    Error,
    "encode-error: U+C8E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E7");
    },
    Error,
    "encode-error: U+C8E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E8");
    },
    Error,
    "encode-error: U+C8E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E9");
    },
    Error,
    "encode-error: U+C8E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8EA");
    },
    Error,
    "encode-error: U+C8EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8EB");
    },
    Error,
    "encode-error: U+C8EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8EC");
    },
    Error,
    "encode-error: U+C8EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8ED");
    },
    Error,
    "encode-error: U+C8ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8EE");
    },
    Error,
    "encode-error: U+C8EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8EF");
    },
    Error,
    "encode-error: U+C8EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F0");
    },
    Error,
    "encode-error: U+C8F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F1");
    },
    Error,
    "encode-error: U+C8F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F2");
    },
    Error,
    "encode-error: U+C8F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F3");
    },
    Error,
    "encode-error: U+C8F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F4");
    },
    Error,
    "encode-error: U+C8F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F5");
    },
    Error,
    "encode-error: U+C8F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F6");
    },
    Error,
    "encode-error: U+C8F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F7");
    },
    Error,
    "encode-error: U+C8F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F8");
    },
    Error,
    "encode-error: U+C8F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F9");
    },
    Error,
    "encode-error: U+C8F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8FA");
    },
    Error,
    "encode-error: U+C8FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8FB");
    },
    Error,
    "encode-error: U+C8FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8FC");
    },
    Error,
    "encode-error: U+C8FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8FD");
    },
    Error,
    "encode-error: U+C8FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8FE");
    },
    Error,
    "encode-error: U+C8FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8FF");
    },
    Error,
    "encode-error: U+C8FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC900");
    },
    Error,
    "encode-error: U+C900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC901");
    },
    Error,
    "encode-error: U+C901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC902");
    },
    Error,
    "encode-error: U+C902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC903");
    },
    Error,
    "encode-error: U+C903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC904");
    },
    Error,
    "encode-error: U+C904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC905");
    },
    Error,
    "encode-error: U+C905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC906");
    },
    Error,
    "encode-error: U+C906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC907");
    },
    Error,
    "encode-error: U+C907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC908");
    },
    Error,
    "encode-error: U+C908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC909");
    },
    Error,
    "encode-error: U+C909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC90A");
    },
    Error,
    "encode-error: U+C90A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC90B");
    },
    Error,
    "encode-error: U+C90B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC90C");
    },
    Error,
    "encode-error: U+C90C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC90D");
    },
    Error,
    "encode-error: U+C90D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC90E");
    },
    Error,
    "encode-error: U+C90E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC90F");
    },
    Error,
    "encode-error: U+C90F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC910");
    },
    Error,
    "encode-error: U+C910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC911");
    },
    Error,
    "encode-error: U+C911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC912");
    },
    Error,
    "encode-error: U+C912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC913");
    },
    Error,
    "encode-error: U+C913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC914");
    },
    Error,
    "encode-error: U+C914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC915");
    },
    Error,
    "encode-error: U+C915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC916");
    },
    Error,
    "encode-error: U+C916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC917");
    },
    Error,
    "encode-error: U+C917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC918");
    },
    Error,
    "encode-error: U+C918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC919");
    },
    Error,
    "encode-error: U+C919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC91A");
    },
    Error,
    "encode-error: U+C91A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC91B");
    },
    Error,
    "encode-error: U+C91B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC91C");
    },
    Error,
    "encode-error: U+C91C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC91D");
    },
    Error,
    "encode-error: U+C91D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC91E");
    },
    Error,
    "encode-error: U+C91E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC91F");
    },
    Error,
    "encode-error: U+C91F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC920");
    },
    Error,
    "encode-error: U+C920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC921");
    },
    Error,
    "encode-error: U+C921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC922");
    },
    Error,
    "encode-error: U+C922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC923");
    },
    Error,
    "encode-error: U+C923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC924");
    },
    Error,
    "encode-error: U+C924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC925");
    },
    Error,
    "encode-error: U+C925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC926");
    },
    Error,
    "encode-error: U+C926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC927");
    },
    Error,
    "encode-error: U+C927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC928");
    },
    Error,
    "encode-error: U+C928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC929");
    },
    Error,
    "encode-error: U+C929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC92A");
    },
    Error,
    "encode-error: U+C92A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC92B");
    },
    Error,
    "encode-error: U+C92B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC92C");
    },
    Error,
    "encode-error: U+C92C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC92D");
    },
    Error,
    "encode-error: U+C92D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC92E");
    },
    Error,
    "encode-error: U+C92E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC92F");
    },
    Error,
    "encode-error: U+C92F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC930");
    },
    Error,
    "encode-error: U+C930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC931");
    },
    Error,
    "encode-error: U+C931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC932");
    },
    Error,
    "encode-error: U+C932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC933");
    },
    Error,
    "encode-error: U+C933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC934");
    },
    Error,
    "encode-error: U+C934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC935");
    },
    Error,
    "encode-error: U+C935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC936");
    },
    Error,
    "encode-error: U+C936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC937");
    },
    Error,
    "encode-error: U+C937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC938");
    },
    Error,
    "encode-error: U+C938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC939");
    },
    Error,
    "encode-error: U+C939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC93A");
    },
    Error,
    "encode-error: U+C93A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC93B");
    },
    Error,
    "encode-error: U+C93B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC93C");
    },
    Error,
    "encode-error: U+C93C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC93D");
    },
    Error,
    "encode-error: U+C93D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC93E");
    },
    Error,
    "encode-error: U+C93E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC93F");
    },
    Error,
    "encode-error: U+C93F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC940");
    },
    Error,
    "encode-error: U+C940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC941");
    },
    Error,
    "encode-error: U+C941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC942");
    },
    Error,
    "encode-error: U+C942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC943");
    },
    Error,
    "encode-error: U+C943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC944");
    },
    Error,
    "encode-error: U+C944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC945");
    },
    Error,
    "encode-error: U+C945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC946");
    },
    Error,
    "encode-error: U+C946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC947");
    },
    Error,
    "encode-error: U+C947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC948");
    },
    Error,
    "encode-error: U+C948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC949");
    },
    Error,
    "encode-error: U+C949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC94A");
    },
    Error,
    "encode-error: U+C94A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC94B");
    },
    Error,
    "encode-error: U+C94B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC94C");
    },
    Error,
    "encode-error: U+C94C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC94D");
    },
    Error,
    "encode-error: U+C94D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC94E");
    },
    Error,
    "encode-error: U+C94E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC94F");
    },
    Error,
    "encode-error: U+C94F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC950");
    },
    Error,
    "encode-error: U+C950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC951");
    },
    Error,
    "encode-error: U+C951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC952");
    },
    Error,
    "encode-error: U+C952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC953");
    },
    Error,
    "encode-error: U+C953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC954");
    },
    Error,
    "encode-error: U+C954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC955");
    },
    Error,
    "encode-error: U+C955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC956");
    },
    Error,
    "encode-error: U+C956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC957");
    },
    Error,
    "encode-error: U+C957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC958");
    },
    Error,
    "encode-error: U+C958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC959");
    },
    Error,
    "encode-error: U+C959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC95A");
    },
    Error,
    "encode-error: U+C95A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC95B");
    },
    Error,
    "encode-error: U+C95B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC95C");
    },
    Error,
    "encode-error: U+C95C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC95D");
    },
    Error,
    "encode-error: U+C95D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC95E");
    },
    Error,
    "encode-error: U+C95E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC95F");
    },
    Error,
    "encode-error: U+C95F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC960");
    },
    Error,
    "encode-error: U+C960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC961");
    },
    Error,
    "encode-error: U+C961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC962");
    },
    Error,
    "encode-error: U+C962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC963");
    },
    Error,
    "encode-error: U+C963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC964");
    },
    Error,
    "encode-error: U+C964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC965");
    },
    Error,
    "encode-error: U+C965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC966");
    },
    Error,
    "encode-error: U+C966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC967");
    },
    Error,
    "encode-error: U+C967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC968");
    },
    Error,
    "encode-error: U+C968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC969");
    },
    Error,
    "encode-error: U+C969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC96A");
    },
    Error,
    "encode-error: U+C96A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC96B");
    },
    Error,
    "encode-error: U+C96B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC96C");
    },
    Error,
    "encode-error: U+C96C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC96D");
    },
    Error,
    "encode-error: U+C96D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC96E");
    },
    Error,
    "encode-error: U+C96E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC96F");
    },
    Error,
    "encode-error: U+C96F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC970");
    },
    Error,
    "encode-error: U+C970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC971");
    },
    Error,
    "encode-error: U+C971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC972");
    },
    Error,
    "encode-error: U+C972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC973");
    },
    Error,
    "encode-error: U+C973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC974");
    },
    Error,
    "encode-error: U+C974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC975");
    },
    Error,
    "encode-error: U+C975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC976");
    },
    Error,
    "encode-error: U+C976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC977");
    },
    Error,
    "encode-error: U+C977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC978");
    },
    Error,
    "encode-error: U+C978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC979");
    },
    Error,
    "encode-error: U+C979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC97A");
    },
    Error,
    "encode-error: U+C97A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC97B");
    },
    Error,
    "encode-error: U+C97B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC97C");
    },
    Error,
    "encode-error: U+C97C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC97D");
    },
    Error,
    "encode-error: U+C97D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC97E");
    },
    Error,
    "encode-error: U+C97E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC97F");
    },
    Error,
    "encode-error: U+C97F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC980");
    },
    Error,
    "encode-error: U+C980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC981");
    },
    Error,
    "encode-error: U+C981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC982");
    },
    Error,
    "encode-error: U+C982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC983");
    },
    Error,
    "encode-error: U+C983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC984");
    },
    Error,
    "encode-error: U+C984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC985");
    },
    Error,
    "encode-error: U+C985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC986");
    },
    Error,
    "encode-error: U+C986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC987");
    },
    Error,
    "encode-error: U+C987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC988");
    },
    Error,
    "encode-error: U+C988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC989");
    },
    Error,
    "encode-error: U+C989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC98A");
    },
    Error,
    "encode-error: U+C98A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC98B");
    },
    Error,
    "encode-error: U+C98B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC98C");
    },
    Error,
    "encode-error: U+C98C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC98D");
    },
    Error,
    "encode-error: U+C98D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC98E");
    },
    Error,
    "encode-error: U+C98E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC98F");
    },
    Error,
    "encode-error: U+C98F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC990");
    },
    Error,
    "encode-error: U+C990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC991");
    },
    Error,
    "encode-error: U+C991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC992");
    },
    Error,
    "encode-error: U+C992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC993");
    },
    Error,
    "encode-error: U+C993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC994");
    },
    Error,
    "encode-error: U+C994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC995");
    },
    Error,
    "encode-error: U+C995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC996");
    },
    Error,
    "encode-error: U+C996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC997");
    },
    Error,
    "encode-error: U+C997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC998");
    },
    Error,
    "encode-error: U+C998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC999");
    },
    Error,
    "encode-error: U+C999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC99A");
    },
    Error,
    "encode-error: U+C99A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC99B");
    },
    Error,
    "encode-error: U+C99B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC99C");
    },
    Error,
    "encode-error: U+C99C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC99D");
    },
    Error,
    "encode-error: U+C99D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC99E");
    },
    Error,
    "encode-error: U+C99E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC99F");
    },
    Error,
    "encode-error: U+C99F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A0");
    },
    Error,
    "encode-error: U+C9A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A1");
    },
    Error,
    "encode-error: U+C9A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A2");
    },
    Error,
    "encode-error: U+C9A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A3");
    },
    Error,
    "encode-error: U+C9A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A4");
    },
    Error,
    "encode-error: U+C9A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A5");
    },
    Error,
    "encode-error: U+C9A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A6");
    },
    Error,
    "encode-error: U+C9A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A7");
    },
    Error,
    "encode-error: U+C9A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A8");
    },
    Error,
    "encode-error: U+C9A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A9");
    },
    Error,
    "encode-error: U+C9A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9AA");
    },
    Error,
    "encode-error: U+C9AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9AB");
    },
    Error,
    "encode-error: U+C9AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9AC");
    },
    Error,
    "encode-error: U+C9AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9AD");
    },
    Error,
    "encode-error: U+C9AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9AE");
    },
    Error,
    "encode-error: U+C9AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9AF");
    },
    Error,
    "encode-error: U+C9AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B0");
    },
    Error,
    "encode-error: U+C9B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B1");
    },
    Error,
    "encode-error: U+C9B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B2");
    },
    Error,
    "encode-error: U+C9B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B3");
    },
    Error,
    "encode-error: U+C9B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B4");
    },
    Error,
    "encode-error: U+C9B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B5");
    },
    Error,
    "encode-error: U+C9B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B6");
    },
    Error,
    "encode-error: U+C9B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B7");
    },
    Error,
    "encode-error: U+C9B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B8");
    },
    Error,
    "encode-error: U+C9B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B9");
    },
    Error,
    "encode-error: U+C9B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9BA");
    },
    Error,
    "encode-error: U+C9BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9BB");
    },
    Error,
    "encode-error: U+C9BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9BC");
    },
    Error,
    "encode-error: U+C9BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9BD");
    },
    Error,
    "encode-error: U+C9BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9BE");
    },
    Error,
    "encode-error: U+C9BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9BF");
    },
    Error,
    "encode-error: U+C9BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C0");
    },
    Error,
    "encode-error: U+C9C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C1");
    },
    Error,
    "encode-error: U+C9C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C2");
    },
    Error,
    "encode-error: U+C9C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C3");
    },
    Error,
    "encode-error: U+C9C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C4");
    },
    Error,
    "encode-error: U+C9C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C5");
    },
    Error,
    "encode-error: U+C9C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C6");
    },
    Error,
    "encode-error: U+C9C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C7");
    },
    Error,
    "encode-error: U+C9C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C8");
    },
    Error,
    "encode-error: U+C9C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C9");
    },
    Error,
    "encode-error: U+C9C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9CA");
    },
    Error,
    "encode-error: U+C9CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9CB");
    },
    Error,
    "encode-error: U+C9CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9CC");
    },
    Error,
    "encode-error: U+C9CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9CD");
    },
    Error,
    "encode-error: U+C9CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9CE");
    },
    Error,
    "encode-error: U+C9CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9CF");
    },
    Error,
    "encode-error: U+C9CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D0");
    },
    Error,
    "encode-error: U+C9D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D1");
    },
    Error,
    "encode-error: U+C9D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D2");
    },
    Error,
    "encode-error: U+C9D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D3");
    },
    Error,
    "encode-error: U+C9D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D4");
    },
    Error,
    "encode-error: U+C9D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D5");
    },
    Error,
    "encode-error: U+C9D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D6");
    },
    Error,
    "encode-error: U+C9D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D7");
    },
    Error,
    "encode-error: U+C9D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D8");
    },
    Error,
    "encode-error: U+C9D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D9");
    },
    Error,
    "encode-error: U+C9D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9DA");
    },
    Error,
    "encode-error: U+C9DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9DB");
    },
    Error,
    "encode-error: U+C9DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9DC");
    },
    Error,
    "encode-error: U+C9DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9DD");
    },
    Error,
    "encode-error: U+C9DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9DE");
    },
    Error,
    "encode-error: U+C9DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9DF");
    },
    Error,
    "encode-error: U+C9DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E0");
    },
    Error,
    "encode-error: U+C9E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E1");
    },
    Error,
    "encode-error: U+C9E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E2");
    },
    Error,
    "encode-error: U+C9E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E3");
    },
    Error,
    "encode-error: U+C9E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E4");
    },
    Error,
    "encode-error: U+C9E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E5");
    },
    Error,
    "encode-error: U+C9E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E6");
    },
    Error,
    "encode-error: U+C9E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E7");
    },
    Error,
    "encode-error: U+C9E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E8");
    },
    Error,
    "encode-error: U+C9E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E9");
    },
    Error,
    "encode-error: U+C9E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9EA");
    },
    Error,
    "encode-error: U+C9EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9EB");
    },
    Error,
    "encode-error: U+C9EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9EC");
    },
    Error,
    "encode-error: U+C9EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9ED");
    },
    Error,
    "encode-error: U+C9ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9EE");
    },
    Error,
    "encode-error: U+C9EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9EF");
    },
    Error,
    "encode-error: U+C9EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F0");
    },
    Error,
    "encode-error: U+C9F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F1");
    },
    Error,
    "encode-error: U+C9F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F2");
    },
    Error,
    "encode-error: U+C9F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F3");
    },
    Error,
    "encode-error: U+C9F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F4");
    },
    Error,
    "encode-error: U+C9F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F5");
    },
    Error,
    "encode-error: U+C9F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F6");
    },
    Error,
    "encode-error: U+C9F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F7");
    },
    Error,
    "encode-error: U+C9F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F8");
    },
    Error,
    "encode-error: U+C9F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F9");
    },
    Error,
    "encode-error: U+C9F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9FA");
    },
    Error,
    "encode-error: U+C9FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9FB");
    },
    Error,
    "encode-error: U+C9FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9FC");
    },
    Error,
    "encode-error: U+C9FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9FD");
    },
    Error,
    "encode-error: U+C9FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9FE");
    },
    Error,
    "encode-error: U+C9FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9FF");
    },
    Error,
    "encode-error: U+C9FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA00");
    },
    Error,
    "encode-error: U+CA00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA01");
    },
    Error,
    "encode-error: U+CA01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA02");
    },
    Error,
    "encode-error: U+CA02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA03");
    },
    Error,
    "encode-error: U+CA03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA04");
    },
    Error,
    "encode-error: U+CA04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA05");
    },
    Error,
    "encode-error: U+CA05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA06");
    },
    Error,
    "encode-error: U+CA06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA07");
    },
    Error,
    "encode-error: U+CA07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA08");
    },
    Error,
    "encode-error: U+CA08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA09");
    },
    Error,
    "encode-error: U+CA09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA0A");
    },
    Error,
    "encode-error: U+CA0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA0B");
    },
    Error,
    "encode-error: U+CA0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA0C");
    },
    Error,
    "encode-error: U+CA0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA0D");
    },
    Error,
    "encode-error: U+CA0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA0E");
    },
    Error,
    "encode-error: U+CA0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA0F");
    },
    Error,
    "encode-error: U+CA0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA10");
    },
    Error,
    "encode-error: U+CA10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA11");
    },
    Error,
    "encode-error: U+CA11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA12");
    },
    Error,
    "encode-error: U+CA12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA13");
    },
    Error,
    "encode-error: U+CA13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA14");
    },
    Error,
    "encode-error: U+CA14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA15");
    },
    Error,
    "encode-error: U+CA15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA16");
    },
    Error,
    "encode-error: U+CA16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA17");
    },
    Error,
    "encode-error: U+CA17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA18");
    },
    Error,
    "encode-error: U+CA18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA19");
    },
    Error,
    "encode-error: U+CA19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA1A");
    },
    Error,
    "encode-error: U+CA1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA1B");
    },
    Error,
    "encode-error: U+CA1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA1C");
    },
    Error,
    "encode-error: U+CA1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA1D");
    },
    Error,
    "encode-error: U+CA1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA1E");
    },
    Error,
    "encode-error: U+CA1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA1F");
    },
    Error,
    "encode-error: U+CA1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA20");
    },
    Error,
    "encode-error: U+CA20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA21");
    },
    Error,
    "encode-error: U+CA21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA22");
    },
    Error,
    "encode-error: U+CA22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA23");
    },
    Error,
    "encode-error: U+CA23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA24");
    },
    Error,
    "encode-error: U+CA24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA25");
    },
    Error,
    "encode-error: U+CA25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA26");
    },
    Error,
    "encode-error: U+CA26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA27");
    },
    Error,
    "encode-error: U+CA27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA28");
    },
    Error,
    "encode-error: U+CA28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA29");
    },
    Error,
    "encode-error: U+CA29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA2A");
    },
    Error,
    "encode-error: U+CA2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA2B");
    },
    Error,
    "encode-error: U+CA2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA2C");
    },
    Error,
    "encode-error: U+CA2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA2D");
    },
    Error,
    "encode-error: U+CA2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA2E");
    },
    Error,
    "encode-error: U+CA2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA2F");
    },
    Error,
    "encode-error: U+CA2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA30");
    },
    Error,
    "encode-error: U+CA30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA31");
    },
    Error,
    "encode-error: U+CA31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA32");
    },
    Error,
    "encode-error: U+CA32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA33");
    },
    Error,
    "encode-error: U+CA33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA34");
    },
    Error,
    "encode-error: U+CA34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA35");
    },
    Error,
    "encode-error: U+CA35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA36");
    },
    Error,
    "encode-error: U+CA36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA37");
    },
    Error,
    "encode-error: U+CA37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA38");
    },
    Error,
    "encode-error: U+CA38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA39");
    },
    Error,
    "encode-error: U+CA39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA3A");
    },
    Error,
    "encode-error: U+CA3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA3B");
    },
    Error,
    "encode-error: U+CA3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA3C");
    },
    Error,
    "encode-error: U+CA3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA3D");
    },
    Error,
    "encode-error: U+CA3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA3E");
    },
    Error,
    "encode-error: U+CA3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA3F");
    },
    Error,
    "encode-error: U+CA3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA40");
    },
    Error,
    "encode-error: U+CA40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA41");
    },
    Error,
    "encode-error: U+CA41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA42");
    },
    Error,
    "encode-error: U+CA42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA43");
    },
    Error,
    "encode-error: U+CA43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA44");
    },
    Error,
    "encode-error: U+CA44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA45");
    },
    Error,
    "encode-error: U+CA45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA46");
    },
    Error,
    "encode-error: U+CA46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA47");
    },
    Error,
    "encode-error: U+CA47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA48");
    },
    Error,
    "encode-error: U+CA48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA49");
    },
    Error,
    "encode-error: U+CA49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA4A");
    },
    Error,
    "encode-error: U+CA4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA4B");
    },
    Error,
    "encode-error: U+CA4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA4C");
    },
    Error,
    "encode-error: U+CA4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA4D");
    },
    Error,
    "encode-error: U+CA4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA4E");
    },
    Error,
    "encode-error: U+CA4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA4F");
    },
    Error,
    "encode-error: U+CA4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA50");
    },
    Error,
    "encode-error: U+CA50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA51");
    },
    Error,
    "encode-error: U+CA51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA52");
    },
    Error,
    "encode-error: U+CA52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA53");
    },
    Error,
    "encode-error: U+CA53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA54");
    },
    Error,
    "encode-error: U+CA54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA55");
    },
    Error,
    "encode-error: U+CA55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA56");
    },
    Error,
    "encode-error: U+CA56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA57");
    },
    Error,
    "encode-error: U+CA57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA58");
    },
    Error,
    "encode-error: U+CA58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA59");
    },
    Error,
    "encode-error: U+CA59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA5A");
    },
    Error,
    "encode-error: U+CA5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA5B");
    },
    Error,
    "encode-error: U+CA5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA5C");
    },
    Error,
    "encode-error: U+CA5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA5D");
    },
    Error,
    "encode-error: U+CA5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA5E");
    },
    Error,
    "encode-error: U+CA5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA5F");
    },
    Error,
    "encode-error: U+CA5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA60");
    },
    Error,
    "encode-error: U+CA60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA61");
    },
    Error,
    "encode-error: U+CA61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA62");
    },
    Error,
    "encode-error: U+CA62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA63");
    },
    Error,
    "encode-error: U+CA63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA64");
    },
    Error,
    "encode-error: U+CA64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA65");
    },
    Error,
    "encode-error: U+CA65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA66");
    },
    Error,
    "encode-error: U+CA66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA67");
    },
    Error,
    "encode-error: U+CA67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA68");
    },
    Error,
    "encode-error: U+CA68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA69");
    },
    Error,
    "encode-error: U+CA69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA6A");
    },
    Error,
    "encode-error: U+CA6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA6B");
    },
    Error,
    "encode-error: U+CA6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA6C");
    },
    Error,
    "encode-error: U+CA6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA6D");
    },
    Error,
    "encode-error: U+CA6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA6E");
    },
    Error,
    "encode-error: U+CA6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA6F");
    },
    Error,
    "encode-error: U+CA6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA70");
    },
    Error,
    "encode-error: U+CA70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA71");
    },
    Error,
    "encode-error: U+CA71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA72");
    },
    Error,
    "encode-error: U+CA72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA73");
    },
    Error,
    "encode-error: U+CA73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA74");
    },
    Error,
    "encode-error: U+CA74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA75");
    },
    Error,
    "encode-error: U+CA75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA76");
    },
    Error,
    "encode-error: U+CA76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA77");
    },
    Error,
    "encode-error: U+CA77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA78");
    },
    Error,
    "encode-error: U+CA78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA79");
    },
    Error,
    "encode-error: U+CA79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA7A");
    },
    Error,
    "encode-error: U+CA7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA7B");
    },
    Error,
    "encode-error: U+CA7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA7C");
    },
    Error,
    "encode-error: U+CA7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA7D");
    },
    Error,
    "encode-error: U+CA7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA7E");
    },
    Error,
    "encode-error: U+CA7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA7F");
    },
    Error,
    "encode-error: U+CA7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA80");
    },
    Error,
    "encode-error: U+CA80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA81");
    },
    Error,
    "encode-error: U+CA81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA82");
    },
    Error,
    "encode-error: U+CA82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA83");
    },
    Error,
    "encode-error: U+CA83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA84");
    },
    Error,
    "encode-error: U+CA84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA85");
    },
    Error,
    "encode-error: U+CA85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA86");
    },
    Error,
    "encode-error: U+CA86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA87");
    },
    Error,
    "encode-error: U+CA87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA88");
    },
    Error,
    "encode-error: U+CA88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA89");
    },
    Error,
    "encode-error: U+CA89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA8A");
    },
    Error,
    "encode-error: U+CA8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA8B");
    },
    Error,
    "encode-error: U+CA8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA8C");
    },
    Error,
    "encode-error: U+CA8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA8D");
    },
    Error,
    "encode-error: U+CA8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA8E");
    },
    Error,
    "encode-error: U+CA8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA8F");
    },
    Error,
    "encode-error: U+CA8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA90");
    },
    Error,
    "encode-error: U+CA90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA91");
    },
    Error,
    "encode-error: U+CA91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA92");
    },
    Error,
    "encode-error: U+CA92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA93");
    },
    Error,
    "encode-error: U+CA93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA94");
    },
    Error,
    "encode-error: U+CA94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA95");
    },
    Error,
    "encode-error: U+CA95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA96");
    },
    Error,
    "encode-error: U+CA96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA97");
    },
    Error,
    "encode-error: U+CA97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA98");
    },
    Error,
    "encode-error: U+CA98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA99");
    },
    Error,
    "encode-error: U+CA99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA9A");
    },
    Error,
    "encode-error: U+CA9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA9B");
    },
    Error,
    "encode-error: U+CA9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA9C");
    },
    Error,
    "encode-error: U+CA9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA9D");
    },
    Error,
    "encode-error: U+CA9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA9E");
    },
    Error,
    "encode-error: U+CA9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA9F");
    },
    Error,
    "encode-error: U+CA9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA0");
    },
    Error,
    "encode-error: U+CAA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA1");
    },
    Error,
    "encode-error: U+CAA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA2");
    },
    Error,
    "encode-error: U+CAA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA3");
    },
    Error,
    "encode-error: U+CAA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA4");
    },
    Error,
    "encode-error: U+CAA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA5");
    },
    Error,
    "encode-error: U+CAA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA6");
    },
    Error,
    "encode-error: U+CAA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA7");
    },
    Error,
    "encode-error: U+CAA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA8");
    },
    Error,
    "encode-error: U+CAA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA9");
    },
    Error,
    "encode-error: U+CAA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAAA");
    },
    Error,
    "encode-error: U+CAAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAAB");
    },
    Error,
    "encode-error: U+CAAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAAC");
    },
    Error,
    "encode-error: U+CAAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAAD");
    },
    Error,
    "encode-error: U+CAAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAAE");
    },
    Error,
    "encode-error: U+CAAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAAF");
    },
    Error,
    "encode-error: U+CAAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB0");
    },
    Error,
    "encode-error: U+CAB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB1");
    },
    Error,
    "encode-error: U+CAB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB2");
    },
    Error,
    "encode-error: U+CAB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB3");
    },
    Error,
    "encode-error: U+CAB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB4");
    },
    Error,
    "encode-error: U+CAB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB5");
    },
    Error,
    "encode-error: U+CAB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB6");
    },
    Error,
    "encode-error: U+CAB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB7");
    },
    Error,
    "encode-error: U+CAB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB8");
    },
    Error,
    "encode-error: U+CAB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB9");
    },
    Error,
    "encode-error: U+CAB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCABA");
    },
    Error,
    "encode-error: U+CABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCABB");
    },
    Error,
    "encode-error: U+CABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCABC");
    },
    Error,
    "encode-error: U+CABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCABD");
    },
    Error,
    "encode-error: U+CABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCABE");
    },
    Error,
    "encode-error: U+CABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCABF");
    },
    Error,
    "encode-error: U+CABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC0");
    },
    Error,
    "encode-error: U+CAC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC1");
    },
    Error,
    "encode-error: U+CAC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC2");
    },
    Error,
    "encode-error: U+CAC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC3");
    },
    Error,
    "encode-error: U+CAC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC4");
    },
    Error,
    "encode-error: U+CAC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC5");
    },
    Error,
    "encode-error: U+CAC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC6");
    },
    Error,
    "encode-error: U+CAC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC7");
    },
    Error,
    "encode-error: U+CAC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC8");
    },
    Error,
    "encode-error: U+CAC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC9");
    },
    Error,
    "encode-error: U+CAC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCACA");
    },
    Error,
    "encode-error: U+CACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCACB");
    },
    Error,
    "encode-error: U+CACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCACC");
    },
    Error,
    "encode-error: U+CACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCACD");
    },
    Error,
    "encode-error: U+CACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCACE");
    },
    Error,
    "encode-error: U+CACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCACF");
    },
    Error,
    "encode-error: U+CACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD0");
    },
    Error,
    "encode-error: U+CAD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD1");
    },
    Error,
    "encode-error: U+CAD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD2");
    },
    Error,
    "encode-error: U+CAD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD3");
    },
    Error,
    "encode-error: U+CAD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD4");
    },
    Error,
    "encode-error: U+CAD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD5");
    },
    Error,
    "encode-error: U+CAD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD6");
    },
    Error,
    "encode-error: U+CAD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD7");
    },
    Error,
    "encode-error: U+CAD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD8");
    },
    Error,
    "encode-error: U+CAD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD9");
    },
    Error,
    "encode-error: U+CAD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCADA");
    },
    Error,
    "encode-error: U+CADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCADB");
    },
    Error,
    "encode-error: U+CADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCADC");
    },
    Error,
    "encode-error: U+CADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCADD");
    },
    Error,
    "encode-error: U+CADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCADE");
    },
    Error,
    "encode-error: U+CADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCADF");
    },
    Error,
    "encode-error: U+CADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE0");
    },
    Error,
    "encode-error: U+CAE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE1");
    },
    Error,
    "encode-error: U+CAE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE2");
    },
    Error,
    "encode-error: U+CAE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE3");
    },
    Error,
    "encode-error: U+CAE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE4");
    },
    Error,
    "encode-error: U+CAE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE5");
    },
    Error,
    "encode-error: U+CAE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE6");
    },
    Error,
    "encode-error: U+CAE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE7");
    },
    Error,
    "encode-error: U+CAE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE8");
    },
    Error,
    "encode-error: U+CAE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE9");
    },
    Error,
    "encode-error: U+CAE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAEA");
    },
    Error,
    "encode-error: U+CAEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAEB");
    },
    Error,
    "encode-error: U+CAEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAEC");
    },
    Error,
    "encode-error: U+CAEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAED");
    },
    Error,
    "encode-error: U+CAED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAEE");
    },
    Error,
    "encode-error: U+CAEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAEF");
    },
    Error,
    "encode-error: U+CAEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF0");
    },
    Error,
    "encode-error: U+CAF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF1");
    },
    Error,
    "encode-error: U+CAF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF2");
    },
    Error,
    "encode-error: U+CAF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF3");
    },
    Error,
    "encode-error: U+CAF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF4");
    },
    Error,
    "encode-error: U+CAF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF5");
    },
    Error,
    "encode-error: U+CAF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF6");
    },
    Error,
    "encode-error: U+CAF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF7");
    },
    Error,
    "encode-error: U+CAF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF8");
    },
    Error,
    "encode-error: U+CAF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF9");
    },
    Error,
    "encode-error: U+CAF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAFA");
    },
    Error,
    "encode-error: U+CAFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAFB");
    },
    Error,
    "encode-error: U+CAFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAFC");
    },
    Error,
    "encode-error: U+CAFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAFD");
    },
    Error,
    "encode-error: U+CAFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAFE");
    },
    Error,
    "encode-error: U+CAFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAFF");
    },
    Error,
    "encode-error: U+CAFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB00");
    },
    Error,
    "encode-error: U+CB00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB01");
    },
    Error,
    "encode-error: U+CB01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB02");
    },
    Error,
    "encode-error: U+CB02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB03");
    },
    Error,
    "encode-error: U+CB03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB04");
    },
    Error,
    "encode-error: U+CB04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB05");
    },
    Error,
    "encode-error: U+CB05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB06");
    },
    Error,
    "encode-error: U+CB06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB07");
    },
    Error,
    "encode-error: U+CB07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB08");
    },
    Error,
    "encode-error: U+CB08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB09");
    },
    Error,
    "encode-error: U+CB09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB0A");
    },
    Error,
    "encode-error: U+CB0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB0B");
    },
    Error,
    "encode-error: U+CB0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB0C");
    },
    Error,
    "encode-error: U+CB0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB0D");
    },
    Error,
    "encode-error: U+CB0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB0E");
    },
    Error,
    "encode-error: U+CB0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB0F");
    },
    Error,
    "encode-error: U+CB0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB10");
    },
    Error,
    "encode-error: U+CB10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB11");
    },
    Error,
    "encode-error: U+CB11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB12");
    },
    Error,
    "encode-error: U+CB12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB13");
    },
    Error,
    "encode-error: U+CB13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB14");
    },
    Error,
    "encode-error: U+CB14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB15");
    },
    Error,
    "encode-error: U+CB15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB16");
    },
    Error,
    "encode-error: U+CB16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB17");
    },
    Error,
    "encode-error: U+CB17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB18");
    },
    Error,
    "encode-error: U+CB18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB19");
    },
    Error,
    "encode-error: U+CB19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB1A");
    },
    Error,
    "encode-error: U+CB1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB1B");
    },
    Error,
    "encode-error: U+CB1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB1C");
    },
    Error,
    "encode-error: U+CB1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB1D");
    },
    Error,
    "encode-error: U+CB1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB1E");
    },
    Error,
    "encode-error: U+CB1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB1F");
    },
    Error,
    "encode-error: U+CB1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB20");
    },
    Error,
    "encode-error: U+CB20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB21");
    },
    Error,
    "encode-error: U+CB21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB22");
    },
    Error,
    "encode-error: U+CB22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB23");
    },
    Error,
    "encode-error: U+CB23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB24");
    },
    Error,
    "encode-error: U+CB24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB25");
    },
    Error,
    "encode-error: U+CB25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB26");
    },
    Error,
    "encode-error: U+CB26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB27");
    },
    Error,
    "encode-error: U+CB27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB28");
    },
    Error,
    "encode-error: U+CB28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB29");
    },
    Error,
    "encode-error: U+CB29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB2A");
    },
    Error,
    "encode-error: U+CB2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB2B");
    },
    Error,
    "encode-error: U+CB2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB2C");
    },
    Error,
    "encode-error: U+CB2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB2D");
    },
    Error,
    "encode-error: U+CB2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB2E");
    },
    Error,
    "encode-error: U+CB2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB2F");
    },
    Error,
    "encode-error: U+CB2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB30");
    },
    Error,
    "encode-error: U+CB30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB31");
    },
    Error,
    "encode-error: U+CB31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB32");
    },
    Error,
    "encode-error: U+CB32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB33");
    },
    Error,
    "encode-error: U+CB33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB34");
    },
    Error,
    "encode-error: U+CB34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB35");
    },
    Error,
    "encode-error: U+CB35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB36");
    },
    Error,
    "encode-error: U+CB36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB37");
    },
    Error,
    "encode-error: U+CB37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB38");
    },
    Error,
    "encode-error: U+CB38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB39");
    },
    Error,
    "encode-error: U+CB39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB3A");
    },
    Error,
    "encode-error: U+CB3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB3B");
    },
    Error,
    "encode-error: U+CB3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB3C");
    },
    Error,
    "encode-error: U+CB3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB3D");
    },
    Error,
    "encode-error: U+CB3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB3E");
    },
    Error,
    "encode-error: U+CB3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB3F");
    },
    Error,
    "encode-error: U+CB3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB40");
    },
    Error,
    "encode-error: U+CB40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB41");
    },
    Error,
    "encode-error: U+CB41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB42");
    },
    Error,
    "encode-error: U+CB42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB43");
    },
    Error,
    "encode-error: U+CB43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB44");
    },
    Error,
    "encode-error: U+CB44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB45");
    },
    Error,
    "encode-error: U+CB45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB46");
    },
    Error,
    "encode-error: U+CB46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB47");
    },
    Error,
    "encode-error: U+CB47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB48");
    },
    Error,
    "encode-error: U+CB48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB49");
    },
    Error,
    "encode-error: U+CB49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB4A");
    },
    Error,
    "encode-error: U+CB4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB4B");
    },
    Error,
    "encode-error: U+CB4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB4C");
    },
    Error,
    "encode-error: U+CB4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB4D");
    },
    Error,
    "encode-error: U+CB4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB4E");
    },
    Error,
    "encode-error: U+CB4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB4F");
    },
    Error,
    "encode-error: U+CB4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB50");
    },
    Error,
    "encode-error: U+CB50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB51");
    },
    Error,
    "encode-error: U+CB51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB52");
    },
    Error,
    "encode-error: U+CB52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB53");
    },
    Error,
    "encode-error: U+CB53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB54");
    },
    Error,
    "encode-error: U+CB54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB55");
    },
    Error,
    "encode-error: U+CB55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB56");
    },
    Error,
    "encode-error: U+CB56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB57");
    },
    Error,
    "encode-error: U+CB57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB58");
    },
    Error,
    "encode-error: U+CB58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB59");
    },
    Error,
    "encode-error: U+CB59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB5A");
    },
    Error,
    "encode-error: U+CB5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB5B");
    },
    Error,
    "encode-error: U+CB5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB5C");
    },
    Error,
    "encode-error: U+CB5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB5D");
    },
    Error,
    "encode-error: U+CB5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB5E");
    },
    Error,
    "encode-error: U+CB5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB5F");
    },
    Error,
    "encode-error: U+CB5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB60");
    },
    Error,
    "encode-error: U+CB60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB61");
    },
    Error,
    "encode-error: U+CB61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB62");
    },
    Error,
    "encode-error: U+CB62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB63");
    },
    Error,
    "encode-error: U+CB63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB64");
    },
    Error,
    "encode-error: U+CB64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB65");
    },
    Error,
    "encode-error: U+CB65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB66");
    },
    Error,
    "encode-error: U+CB66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB67");
    },
    Error,
    "encode-error: U+CB67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB68");
    },
    Error,
    "encode-error: U+CB68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB69");
    },
    Error,
    "encode-error: U+CB69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB6A");
    },
    Error,
    "encode-error: U+CB6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB6B");
    },
    Error,
    "encode-error: U+CB6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB6C");
    },
    Error,
    "encode-error: U+CB6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB6D");
    },
    Error,
    "encode-error: U+CB6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB6E");
    },
    Error,
    "encode-error: U+CB6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB6F");
    },
    Error,
    "encode-error: U+CB6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB70");
    },
    Error,
    "encode-error: U+CB70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB71");
    },
    Error,
    "encode-error: U+CB71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB72");
    },
    Error,
    "encode-error: U+CB72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB73");
    },
    Error,
    "encode-error: U+CB73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB74");
    },
    Error,
    "encode-error: U+CB74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB75");
    },
    Error,
    "encode-error: U+CB75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB76");
    },
    Error,
    "encode-error: U+CB76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB77");
    },
    Error,
    "encode-error: U+CB77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB78");
    },
    Error,
    "encode-error: U+CB78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB79");
    },
    Error,
    "encode-error: U+CB79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB7A");
    },
    Error,
    "encode-error: U+CB7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB7B");
    },
    Error,
    "encode-error: U+CB7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB7C");
    },
    Error,
    "encode-error: U+CB7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB7D");
    },
    Error,
    "encode-error: U+CB7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB7E");
    },
    Error,
    "encode-error: U+CB7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB7F");
    },
    Error,
    "encode-error: U+CB7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB80");
    },
    Error,
    "encode-error: U+CB80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB81");
    },
    Error,
    "encode-error: U+CB81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB82");
    },
    Error,
    "encode-error: U+CB82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB83");
    },
    Error,
    "encode-error: U+CB83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB84");
    },
    Error,
    "encode-error: U+CB84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB85");
    },
    Error,
    "encode-error: U+CB85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB86");
    },
    Error,
    "encode-error: U+CB86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB87");
    },
    Error,
    "encode-error: U+CB87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB88");
    },
    Error,
    "encode-error: U+CB88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB89");
    },
    Error,
    "encode-error: U+CB89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB8A");
    },
    Error,
    "encode-error: U+CB8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB8B");
    },
    Error,
    "encode-error: U+CB8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB8C");
    },
    Error,
    "encode-error: U+CB8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB8D");
    },
    Error,
    "encode-error: U+CB8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB8E");
    },
    Error,
    "encode-error: U+CB8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB8F");
    },
    Error,
    "encode-error: U+CB8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB90");
    },
    Error,
    "encode-error: U+CB90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB91");
    },
    Error,
    "encode-error: U+CB91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB92");
    },
    Error,
    "encode-error: U+CB92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB93");
    },
    Error,
    "encode-error: U+CB93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB94");
    },
    Error,
    "encode-error: U+CB94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB95");
    },
    Error,
    "encode-error: U+CB95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB96");
    },
    Error,
    "encode-error: U+CB96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB97");
    },
    Error,
    "encode-error: U+CB97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB98");
    },
    Error,
    "encode-error: U+CB98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB99");
    },
    Error,
    "encode-error: U+CB99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB9A");
    },
    Error,
    "encode-error: U+CB9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB9B");
    },
    Error,
    "encode-error: U+CB9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB9C");
    },
    Error,
    "encode-error: U+CB9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB9D");
    },
    Error,
    "encode-error: U+CB9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB9E");
    },
    Error,
    "encode-error: U+CB9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB9F");
    },
    Error,
    "encode-error: U+CB9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA0");
    },
    Error,
    "encode-error: U+CBA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA1");
    },
    Error,
    "encode-error: U+CBA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA2");
    },
    Error,
    "encode-error: U+CBA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA3");
    },
    Error,
    "encode-error: U+CBA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA4");
    },
    Error,
    "encode-error: U+CBA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA5");
    },
    Error,
    "encode-error: U+CBA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA6");
    },
    Error,
    "encode-error: U+CBA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA7");
    },
    Error,
    "encode-error: U+CBA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA8");
    },
    Error,
    "encode-error: U+CBA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA9");
    },
    Error,
    "encode-error: U+CBA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBAA");
    },
    Error,
    "encode-error: U+CBAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBAB");
    },
    Error,
    "encode-error: U+CBAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBAC");
    },
    Error,
    "encode-error: U+CBAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBAD");
    },
    Error,
    "encode-error: U+CBAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBAE");
    },
    Error,
    "encode-error: U+CBAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBAF");
    },
    Error,
    "encode-error: U+CBAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB0");
    },
    Error,
    "encode-error: U+CBB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB1");
    },
    Error,
    "encode-error: U+CBB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB2");
    },
    Error,
    "encode-error: U+CBB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB3");
    },
    Error,
    "encode-error: U+CBB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB4");
    },
    Error,
    "encode-error: U+CBB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB5");
    },
    Error,
    "encode-error: U+CBB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB6");
    },
    Error,
    "encode-error: U+CBB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB7");
    },
    Error,
    "encode-error: U+CBB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB8");
    },
    Error,
    "encode-error: U+CBB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB9");
    },
    Error,
    "encode-error: U+CBB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBBA");
    },
    Error,
    "encode-error: U+CBBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBBB");
    },
    Error,
    "encode-error: U+CBBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBBC");
    },
    Error,
    "encode-error: U+CBBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBBD");
    },
    Error,
    "encode-error: U+CBBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBBE");
    },
    Error,
    "encode-error: U+CBBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBBF");
    },
    Error,
    "encode-error: U+CBBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC0");
    },
    Error,
    "encode-error: U+CBC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC1");
    },
    Error,
    "encode-error: U+CBC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC2");
    },
    Error,
    "encode-error: U+CBC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC3");
    },
    Error,
    "encode-error: U+CBC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC4");
    },
    Error,
    "encode-error: U+CBC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC5");
    },
    Error,
    "encode-error: U+CBC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC6");
    },
    Error,
    "encode-error: U+CBC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC7");
    },
    Error,
    "encode-error: U+CBC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC8");
    },
    Error,
    "encode-error: U+CBC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC9");
    },
    Error,
    "encode-error: U+CBC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBCA");
    },
    Error,
    "encode-error: U+CBCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBCB");
    },
    Error,
    "encode-error: U+CBCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBCC");
    },
    Error,
    "encode-error: U+CBCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBCD");
    },
    Error,
    "encode-error: U+CBCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBCE");
    },
    Error,
    "encode-error: U+CBCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBCF");
    },
    Error,
    "encode-error: U+CBCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD0");
    },
    Error,
    "encode-error: U+CBD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD1");
    },
    Error,
    "encode-error: U+CBD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD2");
    },
    Error,
    "encode-error: U+CBD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD3");
    },
    Error,
    "encode-error: U+CBD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD4");
    },
    Error,
    "encode-error: U+CBD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD5");
    },
    Error,
    "encode-error: U+CBD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD6");
    },
    Error,
    "encode-error: U+CBD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD7");
    },
    Error,
    "encode-error: U+CBD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD8");
    },
    Error,
    "encode-error: U+CBD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD9");
    },
    Error,
    "encode-error: U+CBD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBDA");
    },
    Error,
    "encode-error: U+CBDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBDB");
    },
    Error,
    "encode-error: U+CBDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBDC");
    },
    Error,
    "encode-error: U+CBDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBDD");
    },
    Error,
    "encode-error: U+CBDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBDE");
    },
    Error,
    "encode-error: U+CBDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBDF");
    },
    Error,
    "encode-error: U+CBDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE0");
    },
    Error,
    "encode-error: U+CBE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE1");
    },
    Error,
    "encode-error: U+CBE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE2");
    },
    Error,
    "encode-error: U+CBE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE3");
    },
    Error,
    "encode-error: U+CBE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE4");
    },
    Error,
    "encode-error: U+CBE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE5");
    },
    Error,
    "encode-error: U+CBE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE6");
    },
    Error,
    "encode-error: U+CBE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE7");
    },
    Error,
    "encode-error: U+CBE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE8");
    },
    Error,
    "encode-error: U+CBE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE9");
    },
    Error,
    "encode-error: U+CBE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBEA");
    },
    Error,
    "encode-error: U+CBEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBEB");
    },
    Error,
    "encode-error: U+CBEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBEC");
    },
    Error,
    "encode-error: U+CBEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBED");
    },
    Error,
    "encode-error: U+CBED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBEE");
    },
    Error,
    "encode-error: U+CBEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBEF");
    },
    Error,
    "encode-error: U+CBEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF0");
    },
    Error,
    "encode-error: U+CBF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF1");
    },
    Error,
    "encode-error: U+CBF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF2");
    },
    Error,
    "encode-error: U+CBF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF3");
    },
    Error,
    "encode-error: U+CBF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF4");
    },
    Error,
    "encode-error: U+CBF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF5");
    },
    Error,
    "encode-error: U+CBF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF6");
    },
    Error,
    "encode-error: U+CBF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF7");
    },
    Error,
    "encode-error: U+CBF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF8");
    },
    Error,
    "encode-error: U+CBF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF9");
    },
    Error,
    "encode-error: U+CBF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBFA");
    },
    Error,
    "encode-error: U+CBFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBFB");
    },
    Error,
    "encode-error: U+CBFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBFC");
    },
    Error,
    "encode-error: U+CBFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBFD");
    },
    Error,
    "encode-error: U+CBFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBFE");
    },
    Error,
    "encode-error: U+CBFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBFF");
    },
    Error,
    "encode-error: U+CBFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC00");
    },
    Error,
    "encode-error: U+CC00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC01");
    },
    Error,
    "encode-error: U+CC01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC02");
    },
    Error,
    "encode-error: U+CC02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC03");
    },
    Error,
    "encode-error: U+CC03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC04");
    },
    Error,
    "encode-error: U+CC04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC05");
    },
    Error,
    "encode-error: U+CC05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC06");
    },
    Error,
    "encode-error: U+CC06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC07");
    },
    Error,
    "encode-error: U+CC07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC08");
    },
    Error,
    "encode-error: U+CC08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC09");
    },
    Error,
    "encode-error: U+CC09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC0A");
    },
    Error,
    "encode-error: U+CC0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC0B");
    },
    Error,
    "encode-error: U+CC0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC0C");
    },
    Error,
    "encode-error: U+CC0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC0D");
    },
    Error,
    "encode-error: U+CC0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC0E");
    },
    Error,
    "encode-error: U+CC0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC0F");
    },
    Error,
    "encode-error: U+CC0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC10");
    },
    Error,
    "encode-error: U+CC10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC11");
    },
    Error,
    "encode-error: U+CC11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC12");
    },
    Error,
    "encode-error: U+CC12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC13");
    },
    Error,
    "encode-error: U+CC13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC14");
    },
    Error,
    "encode-error: U+CC14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC15");
    },
    Error,
    "encode-error: U+CC15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC16");
    },
    Error,
    "encode-error: U+CC16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC17");
    },
    Error,
    "encode-error: U+CC17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC18");
    },
    Error,
    "encode-error: U+CC18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC19");
    },
    Error,
    "encode-error: U+CC19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC1A");
    },
    Error,
    "encode-error: U+CC1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC1B");
    },
    Error,
    "encode-error: U+CC1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC1C");
    },
    Error,
    "encode-error: U+CC1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC1D");
    },
    Error,
    "encode-error: U+CC1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC1E");
    },
    Error,
    "encode-error: U+CC1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC1F");
    },
    Error,
    "encode-error: U+CC1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC20");
    },
    Error,
    "encode-error: U+CC20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC21");
    },
    Error,
    "encode-error: U+CC21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC22");
    },
    Error,
    "encode-error: U+CC22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC23");
    },
    Error,
    "encode-error: U+CC23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC24");
    },
    Error,
    "encode-error: U+CC24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC25");
    },
    Error,
    "encode-error: U+CC25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC26");
    },
    Error,
    "encode-error: U+CC26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC27");
    },
    Error,
    "encode-error: U+CC27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC28");
    },
    Error,
    "encode-error: U+CC28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC29");
    },
    Error,
    "encode-error: U+CC29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC2A");
    },
    Error,
    "encode-error: U+CC2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC2B");
    },
    Error,
    "encode-error: U+CC2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC2C");
    },
    Error,
    "encode-error: U+CC2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC2D");
    },
    Error,
    "encode-error: U+CC2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC2E");
    },
    Error,
    "encode-error: U+CC2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC2F");
    },
    Error,
    "encode-error: U+CC2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC30");
    },
    Error,
    "encode-error: U+CC30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC31");
    },
    Error,
    "encode-error: U+CC31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC32");
    },
    Error,
    "encode-error: U+CC32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC33");
    },
    Error,
    "encode-error: U+CC33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC34");
    },
    Error,
    "encode-error: U+CC34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC35");
    },
    Error,
    "encode-error: U+CC35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC36");
    },
    Error,
    "encode-error: U+CC36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC37");
    },
    Error,
    "encode-error: U+CC37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC38");
    },
    Error,
    "encode-error: U+CC38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC39");
    },
    Error,
    "encode-error: U+CC39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC3A");
    },
    Error,
    "encode-error: U+CC3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC3B");
    },
    Error,
    "encode-error: U+CC3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC3C");
    },
    Error,
    "encode-error: U+CC3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC3D");
    },
    Error,
    "encode-error: U+CC3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC3E");
    },
    Error,
    "encode-error: U+CC3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC3F");
    },
    Error,
    "encode-error: U+CC3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC40");
    },
    Error,
    "encode-error: U+CC40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC41");
    },
    Error,
    "encode-error: U+CC41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC42");
    },
    Error,
    "encode-error: U+CC42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC43");
    },
    Error,
    "encode-error: U+CC43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC44");
    },
    Error,
    "encode-error: U+CC44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC45");
    },
    Error,
    "encode-error: U+CC45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC46");
    },
    Error,
    "encode-error: U+CC46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC47");
    },
    Error,
    "encode-error: U+CC47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC48");
    },
    Error,
    "encode-error: U+CC48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC49");
    },
    Error,
    "encode-error: U+CC49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC4A");
    },
    Error,
    "encode-error: U+CC4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC4B");
    },
    Error,
    "encode-error: U+CC4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC4C");
    },
    Error,
    "encode-error: U+CC4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC4D");
    },
    Error,
    "encode-error: U+CC4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC4E");
    },
    Error,
    "encode-error: U+CC4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC4F");
    },
    Error,
    "encode-error: U+CC4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC50");
    },
    Error,
    "encode-error: U+CC50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC51");
    },
    Error,
    "encode-error: U+CC51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC52");
    },
    Error,
    "encode-error: U+CC52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC53");
    },
    Error,
    "encode-error: U+CC53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC54");
    },
    Error,
    "encode-error: U+CC54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC55");
    },
    Error,
    "encode-error: U+CC55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC56");
    },
    Error,
    "encode-error: U+CC56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC57");
    },
    Error,
    "encode-error: U+CC57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC58");
    },
    Error,
    "encode-error: U+CC58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC59");
    },
    Error,
    "encode-error: U+CC59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC5A");
    },
    Error,
    "encode-error: U+CC5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC5B");
    },
    Error,
    "encode-error: U+CC5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC5C");
    },
    Error,
    "encode-error: U+CC5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC5D");
    },
    Error,
    "encode-error: U+CC5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC5E");
    },
    Error,
    "encode-error: U+CC5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC5F");
    },
    Error,
    "encode-error: U+CC5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC60");
    },
    Error,
    "encode-error: U+CC60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC61");
    },
    Error,
    "encode-error: U+CC61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC62");
    },
    Error,
    "encode-error: U+CC62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC63");
    },
    Error,
    "encode-error: U+CC63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC64");
    },
    Error,
    "encode-error: U+CC64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC65");
    },
    Error,
    "encode-error: U+CC65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC66");
    },
    Error,
    "encode-error: U+CC66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC67");
    },
    Error,
    "encode-error: U+CC67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC68");
    },
    Error,
    "encode-error: U+CC68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC69");
    },
    Error,
    "encode-error: U+CC69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC6A");
    },
    Error,
    "encode-error: U+CC6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC6B");
    },
    Error,
    "encode-error: U+CC6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC6C");
    },
    Error,
    "encode-error: U+CC6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC6D");
    },
    Error,
    "encode-error: U+CC6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC6E");
    },
    Error,
    "encode-error: U+CC6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC6F");
    },
    Error,
    "encode-error: U+CC6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC70");
    },
    Error,
    "encode-error: U+CC70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC71");
    },
    Error,
    "encode-error: U+CC71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC72");
    },
    Error,
    "encode-error: U+CC72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC73");
    },
    Error,
    "encode-error: U+CC73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC74");
    },
    Error,
    "encode-error: U+CC74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC75");
    },
    Error,
    "encode-error: U+CC75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC76");
    },
    Error,
    "encode-error: U+CC76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC77");
    },
    Error,
    "encode-error: U+CC77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC78");
    },
    Error,
    "encode-error: U+CC78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC79");
    },
    Error,
    "encode-error: U+CC79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC7A");
    },
    Error,
    "encode-error: U+CC7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC7B");
    },
    Error,
    "encode-error: U+CC7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC7C");
    },
    Error,
    "encode-error: U+CC7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC7D");
    },
    Error,
    "encode-error: U+CC7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC7E");
    },
    Error,
    "encode-error: U+CC7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC7F");
    },
    Error,
    "encode-error: U+CC7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC80");
    },
    Error,
    "encode-error: U+CC80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC81");
    },
    Error,
    "encode-error: U+CC81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC82");
    },
    Error,
    "encode-error: U+CC82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC83");
    },
    Error,
    "encode-error: U+CC83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC84");
    },
    Error,
    "encode-error: U+CC84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC85");
    },
    Error,
    "encode-error: U+CC85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC86");
    },
    Error,
    "encode-error: U+CC86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC87");
    },
    Error,
    "encode-error: U+CC87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC88");
    },
    Error,
    "encode-error: U+CC88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC89");
    },
    Error,
    "encode-error: U+CC89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC8A");
    },
    Error,
    "encode-error: U+CC8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC8B");
    },
    Error,
    "encode-error: U+CC8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC8C");
    },
    Error,
    "encode-error: U+CC8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC8D");
    },
    Error,
    "encode-error: U+CC8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC8E");
    },
    Error,
    "encode-error: U+CC8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC8F");
    },
    Error,
    "encode-error: U+CC8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC90");
    },
    Error,
    "encode-error: U+CC90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC91");
    },
    Error,
    "encode-error: U+CC91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC92");
    },
    Error,
    "encode-error: U+CC92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC93");
    },
    Error,
    "encode-error: U+CC93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC94");
    },
    Error,
    "encode-error: U+CC94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC95");
    },
    Error,
    "encode-error: U+CC95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC96");
    },
    Error,
    "encode-error: U+CC96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC97");
    },
    Error,
    "encode-error: U+CC97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC98");
    },
    Error,
    "encode-error: U+CC98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC99");
    },
    Error,
    "encode-error: U+CC99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC9A");
    },
    Error,
    "encode-error: U+CC9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC9B");
    },
    Error,
    "encode-error: U+CC9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC9C");
    },
    Error,
    "encode-error: U+CC9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC9D");
    },
    Error,
    "encode-error: U+CC9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC9E");
    },
    Error,
    "encode-error: U+CC9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC9F");
    },
    Error,
    "encode-error: U+CC9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA0");
    },
    Error,
    "encode-error: U+CCA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA1");
    },
    Error,
    "encode-error: U+CCA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA2");
    },
    Error,
    "encode-error: U+CCA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA3");
    },
    Error,
    "encode-error: U+CCA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA4");
    },
    Error,
    "encode-error: U+CCA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA5");
    },
    Error,
    "encode-error: U+CCA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA6");
    },
    Error,
    "encode-error: U+CCA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA7");
    },
    Error,
    "encode-error: U+CCA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA8");
    },
    Error,
    "encode-error: U+CCA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA9");
    },
    Error,
    "encode-error: U+CCA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCAA");
    },
    Error,
    "encode-error: U+CCAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCAB");
    },
    Error,
    "encode-error: U+CCAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCAC");
    },
    Error,
    "encode-error: U+CCAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCAD");
    },
    Error,
    "encode-error: U+CCAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCAE");
    },
    Error,
    "encode-error: U+CCAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCAF");
    },
    Error,
    "encode-error: U+CCAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB0");
    },
    Error,
    "encode-error: U+CCB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB1");
    },
    Error,
    "encode-error: U+CCB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB2");
    },
    Error,
    "encode-error: U+CCB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB3");
    },
    Error,
    "encode-error: U+CCB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB4");
    },
    Error,
    "encode-error: U+CCB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB5");
    },
    Error,
    "encode-error: U+CCB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB6");
    },
    Error,
    "encode-error: U+CCB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB7");
    },
    Error,
    "encode-error: U+CCB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB8");
    },
    Error,
    "encode-error: U+CCB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB9");
    },
    Error,
    "encode-error: U+CCB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCBA");
    },
    Error,
    "encode-error: U+CCBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCBB");
    },
    Error,
    "encode-error: U+CCBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCBC");
    },
    Error,
    "encode-error: U+CCBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCBD");
    },
    Error,
    "encode-error: U+CCBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCBE");
    },
    Error,
    "encode-error: U+CCBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCBF");
    },
    Error,
    "encode-error: U+CCBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC0");
    },
    Error,
    "encode-error: U+CCC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC1");
    },
    Error,
    "encode-error: U+CCC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC2");
    },
    Error,
    "encode-error: U+CCC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC3");
    },
    Error,
    "encode-error: U+CCC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC4");
    },
    Error,
    "encode-error: U+CCC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC5");
    },
    Error,
    "encode-error: U+CCC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC6");
    },
    Error,
    "encode-error: U+CCC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC7");
    },
    Error,
    "encode-error: U+CCC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC8");
    },
    Error,
    "encode-error: U+CCC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC9");
    },
    Error,
    "encode-error: U+CCC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCCA");
    },
    Error,
    "encode-error: U+CCCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCCB");
    },
    Error,
    "encode-error: U+CCCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCCC");
    },
    Error,
    "encode-error: U+CCCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCCD");
    },
    Error,
    "encode-error: U+CCCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCCE");
    },
    Error,
    "encode-error: U+CCCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCCF");
    },
    Error,
    "encode-error: U+CCCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD0");
    },
    Error,
    "encode-error: U+CCD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD1");
    },
    Error,
    "encode-error: U+CCD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD2");
    },
    Error,
    "encode-error: U+CCD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD3");
    },
    Error,
    "encode-error: U+CCD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD4");
    },
    Error,
    "encode-error: U+CCD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD5");
    },
    Error,
    "encode-error: U+CCD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD6");
    },
    Error,
    "encode-error: U+CCD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD7");
    },
    Error,
    "encode-error: U+CCD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD8");
    },
    Error,
    "encode-error: U+CCD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD9");
    },
    Error,
    "encode-error: U+CCD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCDA");
    },
    Error,
    "encode-error: U+CCDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCDB");
    },
    Error,
    "encode-error: U+CCDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCDC");
    },
    Error,
    "encode-error: U+CCDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCDD");
    },
    Error,
    "encode-error: U+CCDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCDE");
    },
    Error,
    "encode-error: U+CCDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCDF");
    },
    Error,
    "encode-error: U+CCDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE0");
    },
    Error,
    "encode-error: U+CCE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE1");
    },
    Error,
    "encode-error: U+CCE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE2");
    },
    Error,
    "encode-error: U+CCE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE3");
    },
    Error,
    "encode-error: U+CCE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE4");
    },
    Error,
    "encode-error: U+CCE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE5");
    },
    Error,
    "encode-error: U+CCE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE6");
    },
    Error,
    "encode-error: U+CCE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE7");
    },
    Error,
    "encode-error: U+CCE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE8");
    },
    Error,
    "encode-error: U+CCE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE9");
    },
    Error,
    "encode-error: U+CCE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCEA");
    },
    Error,
    "encode-error: U+CCEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCEB");
    },
    Error,
    "encode-error: U+CCEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCEC");
    },
    Error,
    "encode-error: U+CCEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCED");
    },
    Error,
    "encode-error: U+CCED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCEE");
    },
    Error,
    "encode-error: U+CCEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCEF");
    },
    Error,
    "encode-error: U+CCEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF0");
    },
    Error,
    "encode-error: U+CCF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF1");
    },
    Error,
    "encode-error: U+CCF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF2");
    },
    Error,
    "encode-error: U+CCF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF3");
    },
    Error,
    "encode-error: U+CCF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF4");
    },
    Error,
    "encode-error: U+CCF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF5");
    },
    Error,
    "encode-error: U+CCF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF6");
    },
    Error,
    "encode-error: U+CCF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF7");
    },
    Error,
    "encode-error: U+CCF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF8");
    },
    Error,
    "encode-error: U+CCF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF9");
    },
    Error,
    "encode-error: U+CCF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCFA");
    },
    Error,
    "encode-error: U+CCFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCFB");
    },
    Error,
    "encode-error: U+CCFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCFC");
    },
    Error,
    "encode-error: U+CCFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCFD");
    },
    Error,
    "encode-error: U+CCFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCFE");
    },
    Error,
    "encode-error: U+CCFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCFF");
    },
    Error,
    "encode-error: U+CCFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD00");
    },
    Error,
    "encode-error: U+CD00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD01");
    },
    Error,
    "encode-error: U+CD01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD02");
    },
    Error,
    "encode-error: U+CD02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD03");
    },
    Error,
    "encode-error: U+CD03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD04");
    },
    Error,
    "encode-error: U+CD04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD05");
    },
    Error,
    "encode-error: U+CD05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD06");
    },
    Error,
    "encode-error: U+CD06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD07");
    },
    Error,
    "encode-error: U+CD07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD08");
    },
    Error,
    "encode-error: U+CD08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD09");
    },
    Error,
    "encode-error: U+CD09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD0A");
    },
    Error,
    "encode-error: U+CD0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD0B");
    },
    Error,
    "encode-error: U+CD0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD0C");
    },
    Error,
    "encode-error: U+CD0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD0D");
    },
    Error,
    "encode-error: U+CD0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD0E");
    },
    Error,
    "encode-error: U+CD0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD0F");
    },
    Error,
    "encode-error: U+CD0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD10");
    },
    Error,
    "encode-error: U+CD10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD11");
    },
    Error,
    "encode-error: U+CD11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD12");
    },
    Error,
    "encode-error: U+CD12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD13");
    },
    Error,
    "encode-error: U+CD13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD14");
    },
    Error,
    "encode-error: U+CD14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD15");
    },
    Error,
    "encode-error: U+CD15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD16");
    },
    Error,
    "encode-error: U+CD16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD17");
    },
    Error,
    "encode-error: U+CD17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD18");
    },
    Error,
    "encode-error: U+CD18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD19");
    },
    Error,
    "encode-error: U+CD19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD1A");
    },
    Error,
    "encode-error: U+CD1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD1B");
    },
    Error,
    "encode-error: U+CD1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD1C");
    },
    Error,
    "encode-error: U+CD1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD1D");
    },
    Error,
    "encode-error: U+CD1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD1E");
    },
    Error,
    "encode-error: U+CD1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD1F");
    },
    Error,
    "encode-error: U+CD1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD20");
    },
    Error,
    "encode-error: U+CD20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD21");
    },
    Error,
    "encode-error: U+CD21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD22");
    },
    Error,
    "encode-error: U+CD22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD23");
    },
    Error,
    "encode-error: U+CD23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD24");
    },
    Error,
    "encode-error: U+CD24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD25");
    },
    Error,
    "encode-error: U+CD25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD26");
    },
    Error,
    "encode-error: U+CD26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD27");
    },
    Error,
    "encode-error: U+CD27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD28");
    },
    Error,
    "encode-error: U+CD28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD29");
    },
    Error,
    "encode-error: U+CD29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD2A");
    },
    Error,
    "encode-error: U+CD2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD2B");
    },
    Error,
    "encode-error: U+CD2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD2C");
    },
    Error,
    "encode-error: U+CD2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD2D");
    },
    Error,
    "encode-error: U+CD2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD2E");
    },
    Error,
    "encode-error: U+CD2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD2F");
    },
    Error,
    "encode-error: U+CD2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD30");
    },
    Error,
    "encode-error: U+CD30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD31");
    },
    Error,
    "encode-error: U+CD31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD32");
    },
    Error,
    "encode-error: U+CD32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD33");
    },
    Error,
    "encode-error: U+CD33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD34");
    },
    Error,
    "encode-error: U+CD34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD35");
    },
    Error,
    "encode-error: U+CD35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD36");
    },
    Error,
    "encode-error: U+CD36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD37");
    },
    Error,
    "encode-error: U+CD37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD38");
    },
    Error,
    "encode-error: U+CD38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD39");
    },
    Error,
    "encode-error: U+CD39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD3A");
    },
    Error,
    "encode-error: U+CD3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD3B");
    },
    Error,
    "encode-error: U+CD3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD3C");
    },
    Error,
    "encode-error: U+CD3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD3D");
    },
    Error,
    "encode-error: U+CD3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD3E");
    },
    Error,
    "encode-error: U+CD3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD3F");
    },
    Error,
    "encode-error: U+CD3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD40");
    },
    Error,
    "encode-error: U+CD40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD41");
    },
    Error,
    "encode-error: U+CD41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD42");
    },
    Error,
    "encode-error: U+CD42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD43");
    },
    Error,
    "encode-error: U+CD43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD44");
    },
    Error,
    "encode-error: U+CD44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD45");
    },
    Error,
    "encode-error: U+CD45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD46");
    },
    Error,
    "encode-error: U+CD46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD47");
    },
    Error,
    "encode-error: U+CD47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD48");
    },
    Error,
    "encode-error: U+CD48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD49");
    },
    Error,
    "encode-error: U+CD49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD4A");
    },
    Error,
    "encode-error: U+CD4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD4B");
    },
    Error,
    "encode-error: U+CD4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD4C");
    },
    Error,
    "encode-error: U+CD4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD4D");
    },
    Error,
    "encode-error: U+CD4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD4E");
    },
    Error,
    "encode-error: U+CD4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD4F");
    },
    Error,
    "encode-error: U+CD4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD50");
    },
    Error,
    "encode-error: U+CD50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD51");
    },
    Error,
    "encode-error: U+CD51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD52");
    },
    Error,
    "encode-error: U+CD52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD53");
    },
    Error,
    "encode-error: U+CD53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD54");
    },
    Error,
    "encode-error: U+CD54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD55");
    },
    Error,
    "encode-error: U+CD55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD56");
    },
    Error,
    "encode-error: U+CD56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD57");
    },
    Error,
    "encode-error: U+CD57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD58");
    },
    Error,
    "encode-error: U+CD58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD59");
    },
    Error,
    "encode-error: U+CD59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD5A");
    },
    Error,
    "encode-error: U+CD5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD5B");
    },
    Error,
    "encode-error: U+CD5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD5C");
    },
    Error,
    "encode-error: U+CD5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD5D");
    },
    Error,
    "encode-error: U+CD5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD5E");
    },
    Error,
    "encode-error: U+CD5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD5F");
    },
    Error,
    "encode-error: U+CD5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD60");
    },
    Error,
    "encode-error: U+CD60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD61");
    },
    Error,
    "encode-error: U+CD61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD62");
    },
    Error,
    "encode-error: U+CD62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD63");
    },
    Error,
    "encode-error: U+CD63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD64");
    },
    Error,
    "encode-error: U+CD64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD65");
    },
    Error,
    "encode-error: U+CD65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD66");
    },
    Error,
    "encode-error: U+CD66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD67");
    },
    Error,
    "encode-error: U+CD67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD68");
    },
    Error,
    "encode-error: U+CD68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD69");
    },
    Error,
    "encode-error: U+CD69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD6A");
    },
    Error,
    "encode-error: U+CD6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD6B");
    },
    Error,
    "encode-error: U+CD6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD6C");
    },
    Error,
    "encode-error: U+CD6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD6D");
    },
    Error,
    "encode-error: U+CD6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD6E");
    },
    Error,
    "encode-error: U+CD6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD6F");
    },
    Error,
    "encode-error: U+CD6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD70");
    },
    Error,
    "encode-error: U+CD70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD71");
    },
    Error,
    "encode-error: U+CD71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD72");
    },
    Error,
    "encode-error: U+CD72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD73");
    },
    Error,
    "encode-error: U+CD73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD74");
    },
    Error,
    "encode-error: U+CD74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD75");
    },
    Error,
    "encode-error: U+CD75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD76");
    },
    Error,
    "encode-error: U+CD76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD77");
    },
    Error,
    "encode-error: U+CD77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD78");
    },
    Error,
    "encode-error: U+CD78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD79");
    },
    Error,
    "encode-error: U+CD79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD7A");
    },
    Error,
    "encode-error: U+CD7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD7B");
    },
    Error,
    "encode-error: U+CD7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD7C");
    },
    Error,
    "encode-error: U+CD7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD7D");
    },
    Error,
    "encode-error: U+CD7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD7E");
    },
    Error,
    "encode-error: U+CD7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD7F");
    },
    Error,
    "encode-error: U+CD7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD80");
    },
    Error,
    "encode-error: U+CD80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD81");
    },
    Error,
    "encode-error: U+CD81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD82");
    },
    Error,
    "encode-error: U+CD82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD83");
    },
    Error,
    "encode-error: U+CD83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD84");
    },
    Error,
    "encode-error: U+CD84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD85");
    },
    Error,
    "encode-error: U+CD85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD86");
    },
    Error,
    "encode-error: U+CD86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD87");
    },
    Error,
    "encode-error: U+CD87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD88");
    },
    Error,
    "encode-error: U+CD88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD89");
    },
    Error,
    "encode-error: U+CD89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD8A");
    },
    Error,
    "encode-error: U+CD8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD8B");
    },
    Error,
    "encode-error: U+CD8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD8C");
    },
    Error,
    "encode-error: U+CD8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD8D");
    },
    Error,
    "encode-error: U+CD8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD8E");
    },
    Error,
    "encode-error: U+CD8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD8F");
    },
    Error,
    "encode-error: U+CD8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD90");
    },
    Error,
    "encode-error: U+CD90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD91");
    },
    Error,
    "encode-error: U+CD91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD92");
    },
    Error,
    "encode-error: U+CD92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD93");
    },
    Error,
    "encode-error: U+CD93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD94");
    },
    Error,
    "encode-error: U+CD94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD95");
    },
    Error,
    "encode-error: U+CD95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD96");
    },
    Error,
    "encode-error: U+CD96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD97");
    },
    Error,
    "encode-error: U+CD97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD98");
    },
    Error,
    "encode-error: U+CD98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD99");
    },
    Error,
    "encode-error: U+CD99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD9A");
    },
    Error,
    "encode-error: U+CD9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD9B");
    },
    Error,
    "encode-error: U+CD9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD9C");
    },
    Error,
    "encode-error: U+CD9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD9D");
    },
    Error,
    "encode-error: U+CD9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD9E");
    },
    Error,
    "encode-error: U+CD9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD9F");
    },
    Error,
    "encode-error: U+CD9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA0");
    },
    Error,
    "encode-error: U+CDA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA1");
    },
    Error,
    "encode-error: U+CDA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA2");
    },
    Error,
    "encode-error: U+CDA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA3");
    },
    Error,
    "encode-error: U+CDA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA4");
    },
    Error,
    "encode-error: U+CDA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA5");
    },
    Error,
    "encode-error: U+CDA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA6");
    },
    Error,
    "encode-error: U+CDA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA7");
    },
    Error,
    "encode-error: U+CDA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA8");
    },
    Error,
    "encode-error: U+CDA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA9");
    },
    Error,
    "encode-error: U+CDA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDAA");
    },
    Error,
    "encode-error: U+CDAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDAB");
    },
    Error,
    "encode-error: U+CDAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDAC");
    },
    Error,
    "encode-error: U+CDAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDAD");
    },
    Error,
    "encode-error: U+CDAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDAE");
    },
    Error,
    "encode-error: U+CDAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDAF");
    },
    Error,
    "encode-error: U+CDAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB0");
    },
    Error,
    "encode-error: U+CDB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB1");
    },
    Error,
    "encode-error: U+CDB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB2");
    },
    Error,
    "encode-error: U+CDB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB3");
    },
    Error,
    "encode-error: U+CDB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB4");
    },
    Error,
    "encode-error: U+CDB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB5");
    },
    Error,
    "encode-error: U+CDB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB6");
    },
    Error,
    "encode-error: U+CDB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB7");
    },
    Error,
    "encode-error: U+CDB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB8");
    },
    Error,
    "encode-error: U+CDB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB9");
    },
    Error,
    "encode-error: U+CDB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDBA");
    },
    Error,
    "encode-error: U+CDBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDBB");
    },
    Error,
    "encode-error: U+CDBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDBC");
    },
    Error,
    "encode-error: U+CDBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDBD");
    },
    Error,
    "encode-error: U+CDBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDBE");
    },
    Error,
    "encode-error: U+CDBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDBF");
    },
    Error,
    "encode-error: U+CDBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC0");
    },
    Error,
    "encode-error: U+CDC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC1");
    },
    Error,
    "encode-error: U+CDC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC2");
    },
    Error,
    "encode-error: U+CDC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC3");
    },
    Error,
    "encode-error: U+CDC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC4");
    },
    Error,
    "encode-error: U+CDC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC5");
    },
    Error,
    "encode-error: U+CDC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC6");
    },
    Error,
    "encode-error: U+CDC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC7");
    },
    Error,
    "encode-error: U+CDC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC8");
    },
    Error,
    "encode-error: U+CDC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC9");
    },
    Error,
    "encode-error: U+CDC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDCA");
    },
    Error,
    "encode-error: U+CDCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDCB");
    },
    Error,
    "encode-error: U+CDCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDCC");
    },
    Error,
    "encode-error: U+CDCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDCD");
    },
    Error,
    "encode-error: U+CDCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDCE");
    },
    Error,
    "encode-error: U+CDCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDCF");
    },
    Error,
    "encode-error: U+CDCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD0");
    },
    Error,
    "encode-error: U+CDD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD1");
    },
    Error,
    "encode-error: U+CDD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD2");
    },
    Error,
    "encode-error: U+CDD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD3");
    },
    Error,
    "encode-error: U+CDD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD4");
    },
    Error,
    "encode-error: U+CDD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD5");
    },
    Error,
    "encode-error: U+CDD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD6");
    },
    Error,
    "encode-error: U+CDD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD7");
    },
    Error,
    "encode-error: U+CDD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD8");
    },
    Error,
    "encode-error: U+CDD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD9");
    },
    Error,
    "encode-error: U+CDD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDDA");
    },
    Error,
    "encode-error: U+CDDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDDB");
    },
    Error,
    "encode-error: U+CDDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDDC");
    },
    Error,
    "encode-error: U+CDDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDDD");
    },
    Error,
    "encode-error: U+CDDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDDE");
    },
    Error,
    "encode-error: U+CDDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDDF");
    },
    Error,
    "encode-error: U+CDDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE0");
    },
    Error,
    "encode-error: U+CDE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE1");
    },
    Error,
    "encode-error: U+CDE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE2");
    },
    Error,
    "encode-error: U+CDE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE3");
    },
    Error,
    "encode-error: U+CDE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE4");
    },
    Error,
    "encode-error: U+CDE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE5");
    },
    Error,
    "encode-error: U+CDE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE6");
    },
    Error,
    "encode-error: U+CDE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE7");
    },
    Error,
    "encode-error: U+CDE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE8");
    },
    Error,
    "encode-error: U+CDE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE9");
    },
    Error,
    "encode-error: U+CDE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDEA");
    },
    Error,
    "encode-error: U+CDEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDEB");
    },
    Error,
    "encode-error: U+CDEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDEC");
    },
    Error,
    "encode-error: U+CDEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDED");
    },
    Error,
    "encode-error: U+CDED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDEE");
    },
    Error,
    "encode-error: U+CDEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDEF");
    },
    Error,
    "encode-error: U+CDEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF0");
    },
    Error,
    "encode-error: U+CDF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF1");
    },
    Error,
    "encode-error: U+CDF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF2");
    },
    Error,
    "encode-error: U+CDF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF3");
    },
    Error,
    "encode-error: U+CDF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF4");
    },
    Error,
    "encode-error: U+CDF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF5");
    },
    Error,
    "encode-error: U+CDF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF6");
    },
    Error,
    "encode-error: U+CDF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF7");
    },
    Error,
    "encode-error: U+CDF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF8");
    },
    Error,
    "encode-error: U+CDF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF9");
    },
    Error,
    "encode-error: U+CDF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDFA");
    },
    Error,
    "encode-error: U+CDFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDFB");
    },
    Error,
    "encode-error: U+CDFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDFC");
    },
    Error,
    "encode-error: U+CDFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDFD");
    },
    Error,
    "encode-error: U+CDFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDFE");
    },
    Error,
    "encode-error: U+CDFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDFF");
    },
    Error,
    "encode-error: U+CDFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE00");
    },
    Error,
    "encode-error: U+CE00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE01");
    },
    Error,
    "encode-error: U+CE01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE02");
    },
    Error,
    "encode-error: U+CE02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE03");
    },
    Error,
    "encode-error: U+CE03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE04");
    },
    Error,
    "encode-error: U+CE04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE05");
    },
    Error,
    "encode-error: U+CE05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE06");
    },
    Error,
    "encode-error: U+CE06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE07");
    },
    Error,
    "encode-error: U+CE07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE08");
    },
    Error,
    "encode-error: U+CE08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE09");
    },
    Error,
    "encode-error: U+CE09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE0A");
    },
    Error,
    "encode-error: U+CE0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE0B");
    },
    Error,
    "encode-error: U+CE0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE0C");
    },
    Error,
    "encode-error: U+CE0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE0D");
    },
    Error,
    "encode-error: U+CE0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE0E");
    },
    Error,
    "encode-error: U+CE0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE0F");
    },
    Error,
    "encode-error: U+CE0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE10");
    },
    Error,
    "encode-error: U+CE10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE11");
    },
    Error,
    "encode-error: U+CE11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE12");
    },
    Error,
    "encode-error: U+CE12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE13");
    },
    Error,
    "encode-error: U+CE13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE14");
    },
    Error,
    "encode-error: U+CE14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE15");
    },
    Error,
    "encode-error: U+CE15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE16");
    },
    Error,
    "encode-error: U+CE16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE17");
    },
    Error,
    "encode-error: U+CE17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE18");
    },
    Error,
    "encode-error: U+CE18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE19");
    },
    Error,
    "encode-error: U+CE19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE1A");
    },
    Error,
    "encode-error: U+CE1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE1B");
    },
    Error,
    "encode-error: U+CE1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE1C");
    },
    Error,
    "encode-error: U+CE1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE1D");
    },
    Error,
    "encode-error: U+CE1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE1E");
    },
    Error,
    "encode-error: U+CE1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE1F");
    },
    Error,
    "encode-error: U+CE1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE20");
    },
    Error,
    "encode-error: U+CE20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE21");
    },
    Error,
    "encode-error: U+CE21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE22");
    },
    Error,
    "encode-error: U+CE22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE23");
    },
    Error,
    "encode-error: U+CE23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE24");
    },
    Error,
    "encode-error: U+CE24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE25");
    },
    Error,
    "encode-error: U+CE25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE26");
    },
    Error,
    "encode-error: U+CE26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE27");
    },
    Error,
    "encode-error: U+CE27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE28");
    },
    Error,
    "encode-error: U+CE28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE29");
    },
    Error,
    "encode-error: U+CE29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE2A");
    },
    Error,
    "encode-error: U+CE2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE2B");
    },
    Error,
    "encode-error: U+CE2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE2C");
    },
    Error,
    "encode-error: U+CE2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE2D");
    },
    Error,
    "encode-error: U+CE2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE2E");
    },
    Error,
    "encode-error: U+CE2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE2F");
    },
    Error,
    "encode-error: U+CE2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE30");
    },
    Error,
    "encode-error: U+CE30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE31");
    },
    Error,
    "encode-error: U+CE31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE32");
    },
    Error,
    "encode-error: U+CE32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE33");
    },
    Error,
    "encode-error: U+CE33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE34");
    },
    Error,
    "encode-error: U+CE34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE35");
    },
    Error,
    "encode-error: U+CE35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE36");
    },
    Error,
    "encode-error: U+CE36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE37");
    },
    Error,
    "encode-error: U+CE37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE38");
    },
    Error,
    "encode-error: U+CE38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE39");
    },
    Error,
    "encode-error: U+CE39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE3A");
    },
    Error,
    "encode-error: U+CE3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE3B");
    },
    Error,
    "encode-error: U+CE3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE3C");
    },
    Error,
    "encode-error: U+CE3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE3D");
    },
    Error,
    "encode-error: U+CE3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE3E");
    },
    Error,
    "encode-error: U+CE3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE3F");
    },
    Error,
    "encode-error: U+CE3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE40");
    },
    Error,
    "encode-error: U+CE40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE41");
    },
    Error,
    "encode-error: U+CE41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE42");
    },
    Error,
    "encode-error: U+CE42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE43");
    },
    Error,
    "encode-error: U+CE43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE44");
    },
    Error,
    "encode-error: U+CE44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE45");
    },
    Error,
    "encode-error: U+CE45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE46");
    },
    Error,
    "encode-error: U+CE46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE47");
    },
    Error,
    "encode-error: U+CE47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE48");
    },
    Error,
    "encode-error: U+CE48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE49");
    },
    Error,
    "encode-error: U+CE49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE4A");
    },
    Error,
    "encode-error: U+CE4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE4B");
    },
    Error,
    "encode-error: U+CE4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE4C");
    },
    Error,
    "encode-error: U+CE4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE4D");
    },
    Error,
    "encode-error: U+CE4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE4E");
    },
    Error,
    "encode-error: U+CE4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE4F");
    },
    Error,
    "encode-error: U+CE4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE50");
    },
    Error,
    "encode-error: U+CE50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE51");
    },
    Error,
    "encode-error: U+CE51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE52");
    },
    Error,
    "encode-error: U+CE52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE53");
    },
    Error,
    "encode-error: U+CE53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE54");
    },
    Error,
    "encode-error: U+CE54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE55");
    },
    Error,
    "encode-error: U+CE55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE56");
    },
    Error,
    "encode-error: U+CE56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE57");
    },
    Error,
    "encode-error: U+CE57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE58");
    },
    Error,
    "encode-error: U+CE58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE59");
    },
    Error,
    "encode-error: U+CE59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE5A");
    },
    Error,
    "encode-error: U+CE5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE5B");
    },
    Error,
    "encode-error: U+CE5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE5C");
    },
    Error,
    "encode-error: U+CE5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE5D");
    },
    Error,
    "encode-error: U+CE5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE5E");
    },
    Error,
    "encode-error: U+CE5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE5F");
    },
    Error,
    "encode-error: U+CE5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE60");
    },
    Error,
    "encode-error: U+CE60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE61");
    },
    Error,
    "encode-error: U+CE61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE62");
    },
    Error,
    "encode-error: U+CE62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE63");
    },
    Error,
    "encode-error: U+CE63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE64");
    },
    Error,
    "encode-error: U+CE64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE65");
    },
    Error,
    "encode-error: U+CE65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE66");
    },
    Error,
    "encode-error: U+CE66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE67");
    },
    Error,
    "encode-error: U+CE67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE68");
    },
    Error,
    "encode-error: U+CE68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE69");
    },
    Error,
    "encode-error: U+CE69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE6A");
    },
    Error,
    "encode-error: U+CE6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE6B");
    },
    Error,
    "encode-error: U+CE6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE6C");
    },
    Error,
    "encode-error: U+CE6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE6D");
    },
    Error,
    "encode-error: U+CE6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE6E");
    },
    Error,
    "encode-error: U+CE6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE6F");
    },
    Error,
    "encode-error: U+CE6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE70");
    },
    Error,
    "encode-error: U+CE70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE71");
    },
    Error,
    "encode-error: U+CE71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE72");
    },
    Error,
    "encode-error: U+CE72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE73");
    },
    Error,
    "encode-error: U+CE73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE74");
    },
    Error,
    "encode-error: U+CE74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE75");
    },
    Error,
    "encode-error: U+CE75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE76");
    },
    Error,
    "encode-error: U+CE76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE77");
    },
    Error,
    "encode-error: U+CE77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE78");
    },
    Error,
    "encode-error: U+CE78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE79");
    },
    Error,
    "encode-error: U+CE79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE7A");
    },
    Error,
    "encode-error: U+CE7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE7B");
    },
    Error,
    "encode-error: U+CE7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE7C");
    },
    Error,
    "encode-error: U+CE7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE7D");
    },
    Error,
    "encode-error: U+CE7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE7E");
    },
    Error,
    "encode-error: U+CE7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE7F");
    },
    Error,
    "encode-error: U+CE7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE80");
    },
    Error,
    "encode-error: U+CE80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE81");
    },
    Error,
    "encode-error: U+CE81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE82");
    },
    Error,
    "encode-error: U+CE82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE83");
    },
    Error,
    "encode-error: U+CE83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE84");
    },
    Error,
    "encode-error: U+CE84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE85");
    },
    Error,
    "encode-error: U+CE85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE86");
    },
    Error,
    "encode-error: U+CE86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE87");
    },
    Error,
    "encode-error: U+CE87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE88");
    },
    Error,
    "encode-error: U+CE88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE89");
    },
    Error,
    "encode-error: U+CE89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE8A");
    },
    Error,
    "encode-error: U+CE8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE8B");
    },
    Error,
    "encode-error: U+CE8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE8C");
    },
    Error,
    "encode-error: U+CE8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE8D");
    },
    Error,
    "encode-error: U+CE8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE8E");
    },
    Error,
    "encode-error: U+CE8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE8F");
    },
    Error,
    "encode-error: U+CE8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE90");
    },
    Error,
    "encode-error: U+CE90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE91");
    },
    Error,
    "encode-error: U+CE91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE92");
    },
    Error,
    "encode-error: U+CE92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE93");
    },
    Error,
    "encode-error: U+CE93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE94");
    },
    Error,
    "encode-error: U+CE94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE95");
    },
    Error,
    "encode-error: U+CE95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE96");
    },
    Error,
    "encode-error: U+CE96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE97");
    },
    Error,
    "encode-error: U+CE97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE98");
    },
    Error,
    "encode-error: U+CE98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE99");
    },
    Error,
    "encode-error: U+CE99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE9A");
    },
    Error,
    "encode-error: U+CE9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE9B");
    },
    Error,
    "encode-error: U+CE9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE9C");
    },
    Error,
    "encode-error: U+CE9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE9D");
    },
    Error,
    "encode-error: U+CE9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE9E");
    },
    Error,
    "encode-error: U+CE9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE9F");
    },
    Error,
    "encode-error: U+CE9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA0");
    },
    Error,
    "encode-error: U+CEA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA1");
    },
    Error,
    "encode-error: U+CEA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA2");
    },
    Error,
    "encode-error: U+CEA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA3");
    },
    Error,
    "encode-error: U+CEA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA4");
    },
    Error,
    "encode-error: U+CEA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA5");
    },
    Error,
    "encode-error: U+CEA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA6");
    },
    Error,
    "encode-error: U+CEA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA7");
    },
    Error,
    "encode-error: U+CEA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA8");
    },
    Error,
    "encode-error: U+CEA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA9");
    },
    Error,
    "encode-error: U+CEA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEAA");
    },
    Error,
    "encode-error: U+CEAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEAB");
    },
    Error,
    "encode-error: U+CEAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEAC");
    },
    Error,
    "encode-error: U+CEAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEAD");
    },
    Error,
    "encode-error: U+CEAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEAE");
    },
    Error,
    "encode-error: U+CEAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEAF");
    },
    Error,
    "encode-error: U+CEAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB0");
    },
    Error,
    "encode-error: U+CEB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB1");
    },
    Error,
    "encode-error: U+CEB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB2");
    },
    Error,
    "encode-error: U+CEB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB3");
    },
    Error,
    "encode-error: U+CEB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB4");
    },
    Error,
    "encode-error: U+CEB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB5");
    },
    Error,
    "encode-error: U+CEB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB6");
    },
    Error,
    "encode-error: U+CEB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB7");
    },
    Error,
    "encode-error: U+CEB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB8");
    },
    Error,
    "encode-error: U+CEB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB9");
    },
    Error,
    "encode-error: U+CEB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEBA");
    },
    Error,
    "encode-error: U+CEBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEBB");
    },
    Error,
    "encode-error: U+CEBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEBC");
    },
    Error,
    "encode-error: U+CEBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEBD");
    },
    Error,
    "encode-error: U+CEBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEBE");
    },
    Error,
    "encode-error: U+CEBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEBF");
    },
    Error,
    "encode-error: U+CEBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC0");
    },
    Error,
    "encode-error: U+CEC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC1");
    },
    Error,
    "encode-error: U+CEC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC2");
    },
    Error,
    "encode-error: U+CEC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC3");
    },
    Error,
    "encode-error: U+CEC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC4");
    },
    Error,
    "encode-error: U+CEC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC5");
    },
    Error,
    "encode-error: U+CEC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC6");
    },
    Error,
    "encode-error: U+CEC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC7");
    },
    Error,
    "encode-error: U+CEC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC8");
    },
    Error,
    "encode-error: U+CEC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC9");
    },
    Error,
    "encode-error: U+CEC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCECA");
    },
    Error,
    "encode-error: U+CECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCECB");
    },
    Error,
    "encode-error: U+CECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCECC");
    },
    Error,
    "encode-error: U+CECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCECD");
    },
    Error,
    "encode-error: U+CECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCECE");
    },
    Error,
    "encode-error: U+CECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCECF");
    },
    Error,
    "encode-error: U+CECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED0");
    },
    Error,
    "encode-error: U+CED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED1");
    },
    Error,
    "encode-error: U+CED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED2");
    },
    Error,
    "encode-error: U+CED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED3");
    },
    Error,
    "encode-error: U+CED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED4");
    },
    Error,
    "encode-error: U+CED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED5");
    },
    Error,
    "encode-error: U+CED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED6");
    },
    Error,
    "encode-error: U+CED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED7");
    },
    Error,
    "encode-error: U+CED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED8");
    },
    Error,
    "encode-error: U+CED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED9");
    },
    Error,
    "encode-error: U+CED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEDA");
    },
    Error,
    "encode-error: U+CEDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEDB");
    },
    Error,
    "encode-error: U+CEDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEDC");
    },
    Error,
    "encode-error: U+CEDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEDD");
    },
    Error,
    "encode-error: U+CEDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEDE");
    },
    Error,
    "encode-error: U+CEDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEDF");
    },
    Error,
    "encode-error: U+CEDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE0");
    },
    Error,
    "encode-error: U+CEE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE1");
    },
    Error,
    "encode-error: U+CEE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE2");
    },
    Error,
    "encode-error: U+CEE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE3");
    },
    Error,
    "encode-error: U+CEE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE4");
    },
    Error,
    "encode-error: U+CEE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE5");
    },
    Error,
    "encode-error: U+CEE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE6");
    },
    Error,
    "encode-error: U+CEE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE7");
    },
    Error,
    "encode-error: U+CEE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE8");
    },
    Error,
    "encode-error: U+CEE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE9");
    },
    Error,
    "encode-error: U+CEE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEEA");
    },
    Error,
    "encode-error: U+CEEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEEB");
    },
    Error,
    "encode-error: U+CEEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEEC");
    },
    Error,
    "encode-error: U+CEEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEED");
    },
    Error,
    "encode-error: U+CEED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEEE");
    },
    Error,
    "encode-error: U+CEEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEEF");
    },
    Error,
    "encode-error: U+CEEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF0");
    },
    Error,
    "encode-error: U+CEF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF1");
    },
    Error,
    "encode-error: U+CEF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF2");
    },
    Error,
    "encode-error: U+CEF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF3");
    },
    Error,
    "encode-error: U+CEF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF4");
    },
    Error,
    "encode-error: U+CEF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF5");
    },
    Error,
    "encode-error: U+CEF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF6");
    },
    Error,
    "encode-error: U+CEF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF7");
    },
    Error,
    "encode-error: U+CEF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF8");
    },
    Error,
    "encode-error: U+CEF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF9");
    },
    Error,
    "encode-error: U+CEF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEFA");
    },
    Error,
    "encode-error: U+CEFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEFB");
    },
    Error,
    "encode-error: U+CEFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEFC");
    },
    Error,
    "encode-error: U+CEFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEFD");
    },
    Error,
    "encode-error: U+CEFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEFE");
    },
    Error,
    "encode-error: U+CEFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEFF");
    },
    Error,
    "encode-error: U+CEFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF00");
    },
    Error,
    "encode-error: U+CF00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF01");
    },
    Error,
    "encode-error: U+CF01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF02");
    },
    Error,
    "encode-error: U+CF02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF03");
    },
    Error,
    "encode-error: U+CF03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF04");
    },
    Error,
    "encode-error: U+CF04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF05");
    },
    Error,
    "encode-error: U+CF05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF06");
    },
    Error,
    "encode-error: U+CF06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF07");
    },
    Error,
    "encode-error: U+CF07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF08");
    },
    Error,
    "encode-error: U+CF08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF09");
    },
    Error,
    "encode-error: U+CF09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF0A");
    },
    Error,
    "encode-error: U+CF0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF0B");
    },
    Error,
    "encode-error: U+CF0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF0C");
    },
    Error,
    "encode-error: U+CF0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF0D");
    },
    Error,
    "encode-error: U+CF0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF0E");
    },
    Error,
    "encode-error: U+CF0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF0F");
    },
    Error,
    "encode-error: U+CF0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF10");
    },
    Error,
    "encode-error: U+CF10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF11");
    },
    Error,
    "encode-error: U+CF11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF12");
    },
    Error,
    "encode-error: U+CF12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF13");
    },
    Error,
    "encode-error: U+CF13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF14");
    },
    Error,
    "encode-error: U+CF14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF15");
    },
    Error,
    "encode-error: U+CF15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF16");
    },
    Error,
    "encode-error: U+CF16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF17");
    },
    Error,
    "encode-error: U+CF17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF18");
    },
    Error,
    "encode-error: U+CF18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF19");
    },
    Error,
    "encode-error: U+CF19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF1A");
    },
    Error,
    "encode-error: U+CF1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF1B");
    },
    Error,
    "encode-error: U+CF1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF1C");
    },
    Error,
    "encode-error: U+CF1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF1D");
    },
    Error,
    "encode-error: U+CF1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF1E");
    },
    Error,
    "encode-error: U+CF1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF1F");
    },
    Error,
    "encode-error: U+CF1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF20");
    },
    Error,
    "encode-error: U+CF20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF21");
    },
    Error,
    "encode-error: U+CF21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF22");
    },
    Error,
    "encode-error: U+CF22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF23");
    },
    Error,
    "encode-error: U+CF23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF24");
    },
    Error,
    "encode-error: U+CF24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF25");
    },
    Error,
    "encode-error: U+CF25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF26");
    },
    Error,
    "encode-error: U+CF26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF27");
    },
    Error,
    "encode-error: U+CF27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF28");
    },
    Error,
    "encode-error: U+CF28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF29");
    },
    Error,
    "encode-error: U+CF29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF2A");
    },
    Error,
    "encode-error: U+CF2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF2B");
    },
    Error,
    "encode-error: U+CF2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF2C");
    },
    Error,
    "encode-error: U+CF2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF2D");
    },
    Error,
    "encode-error: U+CF2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF2E");
    },
    Error,
    "encode-error: U+CF2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF2F");
    },
    Error,
    "encode-error: U+CF2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF30");
    },
    Error,
    "encode-error: U+CF30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF31");
    },
    Error,
    "encode-error: U+CF31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF32");
    },
    Error,
    "encode-error: U+CF32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF33");
    },
    Error,
    "encode-error: U+CF33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF34");
    },
    Error,
    "encode-error: U+CF34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF35");
    },
    Error,
    "encode-error: U+CF35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF36");
    },
    Error,
    "encode-error: U+CF36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF37");
    },
    Error,
    "encode-error: U+CF37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF38");
    },
    Error,
    "encode-error: U+CF38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF39");
    },
    Error,
    "encode-error: U+CF39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF3A");
    },
    Error,
    "encode-error: U+CF3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF3B");
    },
    Error,
    "encode-error: U+CF3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF3C");
    },
    Error,
    "encode-error: U+CF3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF3D");
    },
    Error,
    "encode-error: U+CF3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF3E");
    },
    Error,
    "encode-error: U+CF3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF3F");
    },
    Error,
    "encode-error: U+CF3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF40");
    },
    Error,
    "encode-error: U+CF40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF41");
    },
    Error,
    "encode-error: U+CF41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF42");
    },
    Error,
    "encode-error: U+CF42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF43");
    },
    Error,
    "encode-error: U+CF43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF44");
    },
    Error,
    "encode-error: U+CF44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF45");
    },
    Error,
    "encode-error: U+CF45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF46");
    },
    Error,
    "encode-error: U+CF46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF47");
    },
    Error,
    "encode-error: U+CF47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF48");
    },
    Error,
    "encode-error: U+CF48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF49");
    },
    Error,
    "encode-error: U+CF49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF4A");
    },
    Error,
    "encode-error: U+CF4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF4B");
    },
    Error,
    "encode-error: U+CF4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF4C");
    },
    Error,
    "encode-error: U+CF4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF4D");
    },
    Error,
    "encode-error: U+CF4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF4E");
    },
    Error,
    "encode-error: U+CF4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF4F");
    },
    Error,
    "encode-error: U+CF4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF50");
    },
    Error,
    "encode-error: U+CF50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF51");
    },
    Error,
    "encode-error: U+CF51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF52");
    },
    Error,
    "encode-error: U+CF52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF53");
    },
    Error,
    "encode-error: U+CF53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF54");
    },
    Error,
    "encode-error: U+CF54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF55");
    },
    Error,
    "encode-error: U+CF55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF56");
    },
    Error,
    "encode-error: U+CF56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF57");
    },
    Error,
    "encode-error: U+CF57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF58");
    },
    Error,
    "encode-error: U+CF58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF59");
    },
    Error,
    "encode-error: U+CF59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF5A");
    },
    Error,
    "encode-error: U+CF5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF5B");
    },
    Error,
    "encode-error: U+CF5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF5C");
    },
    Error,
    "encode-error: U+CF5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF5D");
    },
    Error,
    "encode-error: U+CF5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF5E");
    },
    Error,
    "encode-error: U+CF5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF5F");
    },
    Error,
    "encode-error: U+CF5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF60");
    },
    Error,
    "encode-error: U+CF60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF61");
    },
    Error,
    "encode-error: U+CF61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF62");
    },
    Error,
    "encode-error: U+CF62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF63");
    },
    Error,
    "encode-error: U+CF63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF64");
    },
    Error,
    "encode-error: U+CF64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF65");
    },
    Error,
    "encode-error: U+CF65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF66");
    },
    Error,
    "encode-error: U+CF66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF67");
    },
    Error,
    "encode-error: U+CF67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF68");
    },
    Error,
    "encode-error: U+CF68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF69");
    },
    Error,
    "encode-error: U+CF69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF6A");
    },
    Error,
    "encode-error: U+CF6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF6B");
    },
    Error,
    "encode-error: U+CF6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF6C");
    },
    Error,
    "encode-error: U+CF6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF6D");
    },
    Error,
    "encode-error: U+CF6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF6E");
    },
    Error,
    "encode-error: U+CF6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF6F");
    },
    Error,
    "encode-error: U+CF6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF70");
    },
    Error,
    "encode-error: U+CF70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF71");
    },
    Error,
    "encode-error: U+CF71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF72");
    },
    Error,
    "encode-error: U+CF72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF73");
    },
    Error,
    "encode-error: U+CF73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF74");
    },
    Error,
    "encode-error: U+CF74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF75");
    },
    Error,
    "encode-error: U+CF75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF76");
    },
    Error,
    "encode-error: U+CF76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF77");
    },
    Error,
    "encode-error: U+CF77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF78");
    },
    Error,
    "encode-error: U+CF78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF79");
    },
    Error,
    "encode-error: U+CF79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF7A");
    },
    Error,
    "encode-error: U+CF7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF7B");
    },
    Error,
    "encode-error: U+CF7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF7C");
    },
    Error,
    "encode-error: U+CF7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF7D");
    },
    Error,
    "encode-error: U+CF7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF7E");
    },
    Error,
    "encode-error: U+CF7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF7F");
    },
    Error,
    "encode-error: U+CF7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF80");
    },
    Error,
    "encode-error: U+CF80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF81");
    },
    Error,
    "encode-error: U+CF81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF82");
    },
    Error,
    "encode-error: U+CF82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF83");
    },
    Error,
    "encode-error: U+CF83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF84");
    },
    Error,
    "encode-error: U+CF84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF85");
    },
    Error,
    "encode-error: U+CF85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF86");
    },
    Error,
    "encode-error: U+CF86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF87");
    },
    Error,
    "encode-error: U+CF87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF88");
    },
    Error,
    "encode-error: U+CF88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF89");
    },
    Error,
    "encode-error: U+CF89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF8A");
    },
    Error,
    "encode-error: U+CF8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF8B");
    },
    Error,
    "encode-error: U+CF8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF8C");
    },
    Error,
    "encode-error: U+CF8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF8D");
    },
    Error,
    "encode-error: U+CF8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF8E");
    },
    Error,
    "encode-error: U+CF8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF8F");
    },
    Error,
    "encode-error: U+CF8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF90");
    },
    Error,
    "encode-error: U+CF90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF91");
    },
    Error,
    "encode-error: U+CF91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF92");
    },
    Error,
    "encode-error: U+CF92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF93");
    },
    Error,
    "encode-error: U+CF93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF94");
    },
    Error,
    "encode-error: U+CF94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF95");
    },
    Error,
    "encode-error: U+CF95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF96");
    },
    Error,
    "encode-error: U+CF96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF97");
    },
    Error,
    "encode-error: U+CF97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF98");
    },
    Error,
    "encode-error: U+CF98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF99");
    },
    Error,
    "encode-error: U+CF99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF9A");
    },
    Error,
    "encode-error: U+CF9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF9B");
    },
    Error,
    "encode-error: U+CF9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF9C");
    },
    Error,
    "encode-error: U+CF9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF9D");
    },
    Error,
    "encode-error: U+CF9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF9E");
    },
    Error,
    "encode-error: U+CF9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF9F");
    },
    Error,
    "encode-error: U+CF9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA0");
    },
    Error,
    "encode-error: U+CFA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA1");
    },
    Error,
    "encode-error: U+CFA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA2");
    },
    Error,
    "encode-error: U+CFA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA3");
    },
    Error,
    "encode-error: U+CFA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA4");
    },
    Error,
    "encode-error: U+CFA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA5");
    },
    Error,
    "encode-error: U+CFA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA6");
    },
    Error,
    "encode-error: U+CFA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA7");
    },
    Error,
    "encode-error: U+CFA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA8");
    },
    Error,
    "encode-error: U+CFA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA9");
    },
    Error,
    "encode-error: U+CFA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFAA");
    },
    Error,
    "encode-error: U+CFAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFAB");
    },
    Error,
    "encode-error: U+CFAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFAC");
    },
    Error,
    "encode-error: U+CFAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFAD");
    },
    Error,
    "encode-error: U+CFAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFAE");
    },
    Error,
    "encode-error: U+CFAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFAF");
    },
    Error,
    "encode-error: U+CFAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB0");
    },
    Error,
    "encode-error: U+CFB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB1");
    },
    Error,
    "encode-error: U+CFB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB2");
    },
    Error,
    "encode-error: U+CFB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB3");
    },
    Error,
    "encode-error: U+CFB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB4");
    },
    Error,
    "encode-error: U+CFB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB5");
    },
    Error,
    "encode-error: U+CFB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB6");
    },
    Error,
    "encode-error: U+CFB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB7");
    },
    Error,
    "encode-error: U+CFB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB8");
    },
    Error,
    "encode-error: U+CFB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB9");
    },
    Error,
    "encode-error: U+CFB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFBA");
    },
    Error,
    "encode-error: U+CFBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFBB");
    },
    Error,
    "encode-error: U+CFBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFBC");
    },
    Error,
    "encode-error: U+CFBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFBD");
    },
    Error,
    "encode-error: U+CFBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFBE");
    },
    Error,
    "encode-error: U+CFBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFBF");
    },
    Error,
    "encode-error: U+CFBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC0");
    },
    Error,
    "encode-error: U+CFC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC1");
    },
    Error,
    "encode-error: U+CFC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC2");
    },
    Error,
    "encode-error: U+CFC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC3");
    },
    Error,
    "encode-error: U+CFC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC4");
    },
    Error,
    "encode-error: U+CFC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC5");
    },
    Error,
    "encode-error: U+CFC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC6");
    },
    Error,
    "encode-error: U+CFC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC7");
    },
    Error,
    "encode-error: U+CFC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC8");
    },
    Error,
    "encode-error: U+CFC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC9");
    },
    Error,
    "encode-error: U+CFC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFCA");
    },
    Error,
    "encode-error: U+CFCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFCB");
    },
    Error,
    "encode-error: U+CFCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFCC");
    },
    Error,
    "encode-error: U+CFCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFCD");
    },
    Error,
    "encode-error: U+CFCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFCE");
    },
    Error,
    "encode-error: U+CFCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFCF");
    },
    Error,
    "encode-error: U+CFCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD0");
    },
    Error,
    "encode-error: U+CFD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD1");
    },
    Error,
    "encode-error: U+CFD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD2");
    },
    Error,
    "encode-error: U+CFD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD3");
    },
    Error,
    "encode-error: U+CFD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD4");
    },
    Error,
    "encode-error: U+CFD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD5");
    },
    Error,
    "encode-error: U+CFD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD6");
    },
    Error,
    "encode-error: U+CFD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD7");
    },
    Error,
    "encode-error: U+CFD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD8");
    },
    Error,
    "encode-error: U+CFD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD9");
    },
    Error,
    "encode-error: U+CFD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFDA");
    },
    Error,
    "encode-error: U+CFDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFDB");
    },
    Error,
    "encode-error: U+CFDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFDC");
    },
    Error,
    "encode-error: U+CFDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFDD");
    },
    Error,
    "encode-error: U+CFDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFDE");
    },
    Error,
    "encode-error: U+CFDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFDF");
    },
    Error,
    "encode-error: U+CFDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE0");
    },
    Error,
    "encode-error: U+CFE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE1");
    },
    Error,
    "encode-error: U+CFE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE2");
    },
    Error,
    "encode-error: U+CFE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE3");
    },
    Error,
    "encode-error: U+CFE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE4");
    },
    Error,
    "encode-error: U+CFE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE5");
    },
    Error,
    "encode-error: U+CFE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE6");
    },
    Error,
    "encode-error: U+CFE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE7");
    },
    Error,
    "encode-error: U+CFE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE8");
    },
    Error,
    "encode-error: U+CFE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE9");
    },
    Error,
    "encode-error: U+CFE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFEA");
    },
    Error,
    "encode-error: U+CFEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFEB");
    },
    Error,
    "encode-error: U+CFEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFEC");
    },
    Error,
    "encode-error: U+CFEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFED");
    },
    Error,
    "encode-error: U+CFED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFEE");
    },
    Error,
    "encode-error: U+CFEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFEF");
    },
    Error,
    "encode-error: U+CFEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF0");
    },
    Error,
    "encode-error: U+CFF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF1");
    },
    Error,
    "encode-error: U+CFF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF2");
    },
    Error,
    "encode-error: U+CFF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF3");
    },
    Error,
    "encode-error: U+CFF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF4");
    },
    Error,
    "encode-error: U+CFF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF5");
    },
    Error,
    "encode-error: U+CFF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF6");
    },
    Error,
    "encode-error: U+CFF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF7");
    },
    Error,
    "encode-error: U+CFF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF8");
    },
    Error,
    "encode-error: U+CFF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF9");
    },
    Error,
    "encode-error: U+CFF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFFA");
    },
    Error,
    "encode-error: U+CFFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFFB");
    },
    Error,
    "encode-error: U+CFFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFFC");
    },
    Error,
    "encode-error: U+CFFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFFD");
    },
    Error,
    "encode-error: U+CFFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFFE");
    },
    Error,
    "encode-error: U+CFFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFFF");
    },
    Error,
    "encode-error: U+CFFF",
  );
});
