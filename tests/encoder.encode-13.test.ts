import { assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+C000-U+CFFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  assertThrows(
    () => {
      ms932Encoder.encode("\uC000");
    },
    Error,
    "EncodingError U+C000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC001");
    },
    Error,
    "EncodingError U+C001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC002");
    },
    Error,
    "EncodingError U+C002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC003");
    },
    Error,
    "EncodingError U+C003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC004");
    },
    Error,
    "EncodingError U+C004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC005");
    },
    Error,
    "EncodingError U+C005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC006");
    },
    Error,
    "EncodingError U+C006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC007");
    },
    Error,
    "EncodingError U+C007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC008");
    },
    Error,
    "EncodingError U+C008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC009");
    },
    Error,
    "EncodingError U+C009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC00A");
    },
    Error,
    "EncodingError U+C00A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC00B");
    },
    Error,
    "EncodingError U+C00B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC00C");
    },
    Error,
    "EncodingError U+C00C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC00D");
    },
    Error,
    "EncodingError U+C00D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC00E");
    },
    Error,
    "EncodingError U+C00E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC00F");
    },
    Error,
    "EncodingError U+C00F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC010");
    },
    Error,
    "EncodingError U+C010",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC011");
    },
    Error,
    "EncodingError U+C011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC012");
    },
    Error,
    "EncodingError U+C012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC013");
    },
    Error,
    "EncodingError U+C013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC014");
    },
    Error,
    "EncodingError U+C014",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC015");
    },
    Error,
    "EncodingError U+C015",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC016");
    },
    Error,
    "EncodingError U+C016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC017");
    },
    Error,
    "EncodingError U+C017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC018");
    },
    Error,
    "EncodingError U+C018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC019");
    },
    Error,
    "EncodingError U+C019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC01A");
    },
    Error,
    "EncodingError U+C01A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC01B");
    },
    Error,
    "EncodingError U+C01B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC01C");
    },
    Error,
    "EncodingError U+C01C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC01D");
    },
    Error,
    "EncodingError U+C01D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC01E");
    },
    Error,
    "EncodingError U+C01E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC01F");
    },
    Error,
    "EncodingError U+C01F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC020");
    },
    Error,
    "EncodingError U+C020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC021");
    },
    Error,
    "EncodingError U+C021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC022");
    },
    Error,
    "EncodingError U+C022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC023");
    },
    Error,
    "EncodingError U+C023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC024");
    },
    Error,
    "EncodingError U+C024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC025");
    },
    Error,
    "EncodingError U+C025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC026");
    },
    Error,
    "EncodingError U+C026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC027");
    },
    Error,
    "EncodingError U+C027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC028");
    },
    Error,
    "EncodingError U+C028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC029");
    },
    Error,
    "EncodingError U+C029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC02A");
    },
    Error,
    "EncodingError U+C02A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC02B");
    },
    Error,
    "EncodingError U+C02B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC02C");
    },
    Error,
    "EncodingError U+C02C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC02D");
    },
    Error,
    "EncodingError U+C02D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC02E");
    },
    Error,
    "EncodingError U+C02E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC02F");
    },
    Error,
    "EncodingError U+C02F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC030");
    },
    Error,
    "EncodingError U+C030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC031");
    },
    Error,
    "EncodingError U+C031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC032");
    },
    Error,
    "EncodingError U+C032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC033");
    },
    Error,
    "EncodingError U+C033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC034");
    },
    Error,
    "EncodingError U+C034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC035");
    },
    Error,
    "EncodingError U+C035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC036");
    },
    Error,
    "EncodingError U+C036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC037");
    },
    Error,
    "EncodingError U+C037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC038");
    },
    Error,
    "EncodingError U+C038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC039");
    },
    Error,
    "EncodingError U+C039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC03A");
    },
    Error,
    "EncodingError U+C03A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC03B");
    },
    Error,
    "EncodingError U+C03B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC03C");
    },
    Error,
    "EncodingError U+C03C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC03D");
    },
    Error,
    "EncodingError U+C03D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC03E");
    },
    Error,
    "EncodingError U+C03E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC03F");
    },
    Error,
    "EncodingError U+C03F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC040");
    },
    Error,
    "EncodingError U+C040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC041");
    },
    Error,
    "EncodingError U+C041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC042");
    },
    Error,
    "EncodingError U+C042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC043");
    },
    Error,
    "EncodingError U+C043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC044");
    },
    Error,
    "EncodingError U+C044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC045");
    },
    Error,
    "EncodingError U+C045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC046");
    },
    Error,
    "EncodingError U+C046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC047");
    },
    Error,
    "EncodingError U+C047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC048");
    },
    Error,
    "EncodingError U+C048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC049");
    },
    Error,
    "EncodingError U+C049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC04A");
    },
    Error,
    "EncodingError U+C04A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC04B");
    },
    Error,
    "EncodingError U+C04B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC04C");
    },
    Error,
    "EncodingError U+C04C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC04D");
    },
    Error,
    "EncodingError U+C04D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC04E");
    },
    Error,
    "EncodingError U+C04E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC04F");
    },
    Error,
    "EncodingError U+C04F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC050");
    },
    Error,
    "EncodingError U+C050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC051");
    },
    Error,
    "EncodingError U+C051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC052");
    },
    Error,
    "EncodingError U+C052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC053");
    },
    Error,
    "EncodingError U+C053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC054");
    },
    Error,
    "EncodingError U+C054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC055");
    },
    Error,
    "EncodingError U+C055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC056");
    },
    Error,
    "EncodingError U+C056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC057");
    },
    Error,
    "EncodingError U+C057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC058");
    },
    Error,
    "EncodingError U+C058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC059");
    },
    Error,
    "EncodingError U+C059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC05A");
    },
    Error,
    "EncodingError U+C05A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC05B");
    },
    Error,
    "EncodingError U+C05B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC05C");
    },
    Error,
    "EncodingError U+C05C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC05D");
    },
    Error,
    "EncodingError U+C05D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC05E");
    },
    Error,
    "EncodingError U+C05E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC05F");
    },
    Error,
    "EncodingError U+C05F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC060");
    },
    Error,
    "EncodingError U+C060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC061");
    },
    Error,
    "EncodingError U+C061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC062");
    },
    Error,
    "EncodingError U+C062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC063");
    },
    Error,
    "EncodingError U+C063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC064");
    },
    Error,
    "EncodingError U+C064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC065");
    },
    Error,
    "EncodingError U+C065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC066");
    },
    Error,
    "EncodingError U+C066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC067");
    },
    Error,
    "EncodingError U+C067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC068");
    },
    Error,
    "EncodingError U+C068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC069");
    },
    Error,
    "EncodingError U+C069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC06A");
    },
    Error,
    "EncodingError U+C06A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC06B");
    },
    Error,
    "EncodingError U+C06B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC06C");
    },
    Error,
    "EncodingError U+C06C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC06D");
    },
    Error,
    "EncodingError U+C06D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC06E");
    },
    Error,
    "EncodingError U+C06E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC06F");
    },
    Error,
    "EncodingError U+C06F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC070");
    },
    Error,
    "EncodingError U+C070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC071");
    },
    Error,
    "EncodingError U+C071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC072");
    },
    Error,
    "EncodingError U+C072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC073");
    },
    Error,
    "EncodingError U+C073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC074");
    },
    Error,
    "EncodingError U+C074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC075");
    },
    Error,
    "EncodingError U+C075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC076");
    },
    Error,
    "EncodingError U+C076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC077");
    },
    Error,
    "EncodingError U+C077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC078");
    },
    Error,
    "EncodingError U+C078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC079");
    },
    Error,
    "EncodingError U+C079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC07A");
    },
    Error,
    "EncodingError U+C07A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC07B");
    },
    Error,
    "EncodingError U+C07B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC07C");
    },
    Error,
    "EncodingError U+C07C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC07D");
    },
    Error,
    "EncodingError U+C07D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC07E");
    },
    Error,
    "EncodingError U+C07E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC07F");
    },
    Error,
    "EncodingError U+C07F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC080");
    },
    Error,
    "EncodingError U+C080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC081");
    },
    Error,
    "EncodingError U+C081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC082");
    },
    Error,
    "EncodingError U+C082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC083");
    },
    Error,
    "EncodingError U+C083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC084");
    },
    Error,
    "EncodingError U+C084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC085");
    },
    Error,
    "EncodingError U+C085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC086");
    },
    Error,
    "EncodingError U+C086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC087");
    },
    Error,
    "EncodingError U+C087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC088");
    },
    Error,
    "EncodingError U+C088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC089");
    },
    Error,
    "EncodingError U+C089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC08A");
    },
    Error,
    "EncodingError U+C08A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC08B");
    },
    Error,
    "EncodingError U+C08B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC08C");
    },
    Error,
    "EncodingError U+C08C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC08D");
    },
    Error,
    "EncodingError U+C08D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC08E");
    },
    Error,
    "EncodingError U+C08E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC08F");
    },
    Error,
    "EncodingError U+C08F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC090");
    },
    Error,
    "EncodingError U+C090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC091");
    },
    Error,
    "EncodingError U+C091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC092");
    },
    Error,
    "EncodingError U+C092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC093");
    },
    Error,
    "EncodingError U+C093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC094");
    },
    Error,
    "EncodingError U+C094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC095");
    },
    Error,
    "EncodingError U+C095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC096");
    },
    Error,
    "EncodingError U+C096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC097");
    },
    Error,
    "EncodingError U+C097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC098");
    },
    Error,
    "EncodingError U+C098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC099");
    },
    Error,
    "EncodingError U+C099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC09A");
    },
    Error,
    "EncodingError U+C09A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC09B");
    },
    Error,
    "EncodingError U+C09B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC09C");
    },
    Error,
    "EncodingError U+C09C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC09D");
    },
    Error,
    "EncodingError U+C09D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC09E");
    },
    Error,
    "EncodingError U+C09E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC09F");
    },
    Error,
    "EncodingError U+C09F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A0");
    },
    Error,
    "EncodingError U+C0A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A1");
    },
    Error,
    "EncodingError U+C0A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A2");
    },
    Error,
    "EncodingError U+C0A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A3");
    },
    Error,
    "EncodingError U+C0A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A4");
    },
    Error,
    "EncodingError U+C0A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A5");
    },
    Error,
    "EncodingError U+C0A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A6");
    },
    Error,
    "EncodingError U+C0A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A7");
    },
    Error,
    "EncodingError U+C0A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A8");
    },
    Error,
    "EncodingError U+C0A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0A9");
    },
    Error,
    "EncodingError U+C0A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0AA");
    },
    Error,
    "EncodingError U+C0AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0AB");
    },
    Error,
    "EncodingError U+C0AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0AC");
    },
    Error,
    "EncodingError U+C0AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0AD");
    },
    Error,
    "EncodingError U+C0AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0AE");
    },
    Error,
    "EncodingError U+C0AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0AF");
    },
    Error,
    "EncodingError U+C0AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B0");
    },
    Error,
    "EncodingError U+C0B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B1");
    },
    Error,
    "EncodingError U+C0B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B2");
    },
    Error,
    "EncodingError U+C0B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B3");
    },
    Error,
    "EncodingError U+C0B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B4");
    },
    Error,
    "EncodingError U+C0B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B5");
    },
    Error,
    "EncodingError U+C0B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B6");
    },
    Error,
    "EncodingError U+C0B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B7");
    },
    Error,
    "EncodingError U+C0B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B8");
    },
    Error,
    "EncodingError U+C0B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0B9");
    },
    Error,
    "EncodingError U+C0B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0BA");
    },
    Error,
    "EncodingError U+C0BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0BB");
    },
    Error,
    "EncodingError U+C0BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0BC");
    },
    Error,
    "EncodingError U+C0BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0BD");
    },
    Error,
    "EncodingError U+C0BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0BE");
    },
    Error,
    "EncodingError U+C0BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0BF");
    },
    Error,
    "EncodingError U+C0BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C0");
    },
    Error,
    "EncodingError U+C0C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C1");
    },
    Error,
    "EncodingError U+C0C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C2");
    },
    Error,
    "EncodingError U+C0C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C3");
    },
    Error,
    "EncodingError U+C0C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C4");
    },
    Error,
    "EncodingError U+C0C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C5");
    },
    Error,
    "EncodingError U+C0C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C6");
    },
    Error,
    "EncodingError U+C0C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C7");
    },
    Error,
    "EncodingError U+C0C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C8");
    },
    Error,
    "EncodingError U+C0C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0C9");
    },
    Error,
    "EncodingError U+C0C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0CA");
    },
    Error,
    "EncodingError U+C0CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0CB");
    },
    Error,
    "EncodingError U+C0CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0CC");
    },
    Error,
    "EncodingError U+C0CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0CD");
    },
    Error,
    "EncodingError U+C0CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0CE");
    },
    Error,
    "EncodingError U+C0CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0CF");
    },
    Error,
    "EncodingError U+C0CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D0");
    },
    Error,
    "EncodingError U+C0D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D1");
    },
    Error,
    "EncodingError U+C0D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D2");
    },
    Error,
    "EncodingError U+C0D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D3");
    },
    Error,
    "EncodingError U+C0D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D4");
    },
    Error,
    "EncodingError U+C0D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D5");
    },
    Error,
    "EncodingError U+C0D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D6");
    },
    Error,
    "EncodingError U+C0D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D7");
    },
    Error,
    "EncodingError U+C0D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D8");
    },
    Error,
    "EncodingError U+C0D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0D9");
    },
    Error,
    "EncodingError U+C0D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0DA");
    },
    Error,
    "EncodingError U+C0DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0DB");
    },
    Error,
    "EncodingError U+C0DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0DC");
    },
    Error,
    "EncodingError U+C0DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0DD");
    },
    Error,
    "EncodingError U+C0DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0DE");
    },
    Error,
    "EncodingError U+C0DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0DF");
    },
    Error,
    "EncodingError U+C0DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E0");
    },
    Error,
    "EncodingError U+C0E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E1");
    },
    Error,
    "EncodingError U+C0E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E2");
    },
    Error,
    "EncodingError U+C0E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E3");
    },
    Error,
    "EncodingError U+C0E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E4");
    },
    Error,
    "EncodingError U+C0E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E5");
    },
    Error,
    "EncodingError U+C0E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E6");
    },
    Error,
    "EncodingError U+C0E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E7");
    },
    Error,
    "EncodingError U+C0E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E8");
    },
    Error,
    "EncodingError U+C0E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0E9");
    },
    Error,
    "EncodingError U+C0E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0EA");
    },
    Error,
    "EncodingError U+C0EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0EB");
    },
    Error,
    "EncodingError U+C0EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0EC");
    },
    Error,
    "EncodingError U+C0EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0ED");
    },
    Error,
    "EncodingError U+C0ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0EE");
    },
    Error,
    "EncodingError U+C0EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0EF");
    },
    Error,
    "EncodingError U+C0EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F0");
    },
    Error,
    "EncodingError U+C0F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F1");
    },
    Error,
    "EncodingError U+C0F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F2");
    },
    Error,
    "EncodingError U+C0F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F3");
    },
    Error,
    "EncodingError U+C0F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F4");
    },
    Error,
    "EncodingError U+C0F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F5");
    },
    Error,
    "EncodingError U+C0F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F6");
    },
    Error,
    "EncodingError U+C0F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F7");
    },
    Error,
    "EncodingError U+C0F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F8");
    },
    Error,
    "EncodingError U+C0F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0F9");
    },
    Error,
    "EncodingError U+C0F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0FA");
    },
    Error,
    "EncodingError U+C0FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0FB");
    },
    Error,
    "EncodingError U+C0FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0FC");
    },
    Error,
    "EncodingError U+C0FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0FD");
    },
    Error,
    "EncodingError U+C0FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0FE");
    },
    Error,
    "EncodingError U+C0FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC0FF");
    },
    Error,
    "EncodingError U+C0FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC100");
    },
    Error,
    "EncodingError U+C100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC101");
    },
    Error,
    "EncodingError U+C101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC102");
    },
    Error,
    "EncodingError U+C102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC103");
    },
    Error,
    "EncodingError U+C103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC104");
    },
    Error,
    "EncodingError U+C104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC105");
    },
    Error,
    "EncodingError U+C105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC106");
    },
    Error,
    "EncodingError U+C106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC107");
    },
    Error,
    "EncodingError U+C107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC108");
    },
    Error,
    "EncodingError U+C108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC109");
    },
    Error,
    "EncodingError U+C109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC10A");
    },
    Error,
    "EncodingError U+C10A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC10B");
    },
    Error,
    "EncodingError U+C10B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC10C");
    },
    Error,
    "EncodingError U+C10C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC10D");
    },
    Error,
    "EncodingError U+C10D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC10E");
    },
    Error,
    "EncodingError U+C10E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC10F");
    },
    Error,
    "EncodingError U+C10F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC110");
    },
    Error,
    "EncodingError U+C110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC111");
    },
    Error,
    "EncodingError U+C111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC112");
    },
    Error,
    "EncodingError U+C112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC113");
    },
    Error,
    "EncodingError U+C113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC114");
    },
    Error,
    "EncodingError U+C114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC115");
    },
    Error,
    "EncodingError U+C115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC116");
    },
    Error,
    "EncodingError U+C116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC117");
    },
    Error,
    "EncodingError U+C117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC118");
    },
    Error,
    "EncodingError U+C118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC119");
    },
    Error,
    "EncodingError U+C119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC11A");
    },
    Error,
    "EncodingError U+C11A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC11B");
    },
    Error,
    "EncodingError U+C11B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC11C");
    },
    Error,
    "EncodingError U+C11C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC11D");
    },
    Error,
    "EncodingError U+C11D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC11E");
    },
    Error,
    "EncodingError U+C11E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC11F");
    },
    Error,
    "EncodingError U+C11F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC120");
    },
    Error,
    "EncodingError U+C120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC121");
    },
    Error,
    "EncodingError U+C121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC122");
    },
    Error,
    "EncodingError U+C122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC123");
    },
    Error,
    "EncodingError U+C123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC124");
    },
    Error,
    "EncodingError U+C124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC125");
    },
    Error,
    "EncodingError U+C125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC126");
    },
    Error,
    "EncodingError U+C126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC127");
    },
    Error,
    "EncodingError U+C127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC128");
    },
    Error,
    "EncodingError U+C128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC129");
    },
    Error,
    "EncodingError U+C129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC12A");
    },
    Error,
    "EncodingError U+C12A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC12B");
    },
    Error,
    "EncodingError U+C12B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC12C");
    },
    Error,
    "EncodingError U+C12C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC12D");
    },
    Error,
    "EncodingError U+C12D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC12E");
    },
    Error,
    "EncodingError U+C12E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC12F");
    },
    Error,
    "EncodingError U+C12F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC130");
    },
    Error,
    "EncodingError U+C130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC131");
    },
    Error,
    "EncodingError U+C131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC132");
    },
    Error,
    "EncodingError U+C132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC133");
    },
    Error,
    "EncodingError U+C133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC134");
    },
    Error,
    "EncodingError U+C134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC135");
    },
    Error,
    "EncodingError U+C135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC136");
    },
    Error,
    "EncodingError U+C136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC137");
    },
    Error,
    "EncodingError U+C137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC138");
    },
    Error,
    "EncodingError U+C138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC139");
    },
    Error,
    "EncodingError U+C139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC13A");
    },
    Error,
    "EncodingError U+C13A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC13B");
    },
    Error,
    "EncodingError U+C13B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC13C");
    },
    Error,
    "EncodingError U+C13C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC13D");
    },
    Error,
    "EncodingError U+C13D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC13E");
    },
    Error,
    "EncodingError U+C13E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC13F");
    },
    Error,
    "EncodingError U+C13F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC140");
    },
    Error,
    "EncodingError U+C140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC141");
    },
    Error,
    "EncodingError U+C141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC142");
    },
    Error,
    "EncodingError U+C142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC143");
    },
    Error,
    "EncodingError U+C143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC144");
    },
    Error,
    "EncodingError U+C144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC145");
    },
    Error,
    "EncodingError U+C145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC146");
    },
    Error,
    "EncodingError U+C146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC147");
    },
    Error,
    "EncodingError U+C147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC148");
    },
    Error,
    "EncodingError U+C148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC149");
    },
    Error,
    "EncodingError U+C149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC14A");
    },
    Error,
    "EncodingError U+C14A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC14B");
    },
    Error,
    "EncodingError U+C14B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC14C");
    },
    Error,
    "EncodingError U+C14C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC14D");
    },
    Error,
    "EncodingError U+C14D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC14E");
    },
    Error,
    "EncodingError U+C14E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC14F");
    },
    Error,
    "EncodingError U+C14F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC150");
    },
    Error,
    "EncodingError U+C150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC151");
    },
    Error,
    "EncodingError U+C151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC152");
    },
    Error,
    "EncodingError U+C152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC153");
    },
    Error,
    "EncodingError U+C153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC154");
    },
    Error,
    "EncodingError U+C154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC155");
    },
    Error,
    "EncodingError U+C155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC156");
    },
    Error,
    "EncodingError U+C156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC157");
    },
    Error,
    "EncodingError U+C157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC158");
    },
    Error,
    "EncodingError U+C158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC159");
    },
    Error,
    "EncodingError U+C159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC15A");
    },
    Error,
    "EncodingError U+C15A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC15B");
    },
    Error,
    "EncodingError U+C15B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC15C");
    },
    Error,
    "EncodingError U+C15C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC15D");
    },
    Error,
    "EncodingError U+C15D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC15E");
    },
    Error,
    "EncodingError U+C15E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC15F");
    },
    Error,
    "EncodingError U+C15F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC160");
    },
    Error,
    "EncodingError U+C160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC161");
    },
    Error,
    "EncodingError U+C161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC162");
    },
    Error,
    "EncodingError U+C162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC163");
    },
    Error,
    "EncodingError U+C163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC164");
    },
    Error,
    "EncodingError U+C164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC165");
    },
    Error,
    "EncodingError U+C165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC166");
    },
    Error,
    "EncodingError U+C166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC167");
    },
    Error,
    "EncodingError U+C167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC168");
    },
    Error,
    "EncodingError U+C168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC169");
    },
    Error,
    "EncodingError U+C169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC16A");
    },
    Error,
    "EncodingError U+C16A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC16B");
    },
    Error,
    "EncodingError U+C16B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC16C");
    },
    Error,
    "EncodingError U+C16C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC16D");
    },
    Error,
    "EncodingError U+C16D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC16E");
    },
    Error,
    "EncodingError U+C16E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC16F");
    },
    Error,
    "EncodingError U+C16F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC170");
    },
    Error,
    "EncodingError U+C170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC171");
    },
    Error,
    "EncodingError U+C171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC172");
    },
    Error,
    "EncodingError U+C172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC173");
    },
    Error,
    "EncodingError U+C173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC174");
    },
    Error,
    "EncodingError U+C174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC175");
    },
    Error,
    "EncodingError U+C175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC176");
    },
    Error,
    "EncodingError U+C176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC177");
    },
    Error,
    "EncodingError U+C177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC178");
    },
    Error,
    "EncodingError U+C178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC179");
    },
    Error,
    "EncodingError U+C179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC17A");
    },
    Error,
    "EncodingError U+C17A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC17B");
    },
    Error,
    "EncodingError U+C17B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC17C");
    },
    Error,
    "EncodingError U+C17C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC17D");
    },
    Error,
    "EncodingError U+C17D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC17E");
    },
    Error,
    "EncodingError U+C17E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC17F");
    },
    Error,
    "EncodingError U+C17F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC180");
    },
    Error,
    "EncodingError U+C180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC181");
    },
    Error,
    "EncodingError U+C181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC182");
    },
    Error,
    "EncodingError U+C182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC183");
    },
    Error,
    "EncodingError U+C183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC184");
    },
    Error,
    "EncodingError U+C184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC185");
    },
    Error,
    "EncodingError U+C185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC186");
    },
    Error,
    "EncodingError U+C186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC187");
    },
    Error,
    "EncodingError U+C187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC188");
    },
    Error,
    "EncodingError U+C188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC189");
    },
    Error,
    "EncodingError U+C189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC18A");
    },
    Error,
    "EncodingError U+C18A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC18B");
    },
    Error,
    "EncodingError U+C18B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC18C");
    },
    Error,
    "EncodingError U+C18C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC18D");
    },
    Error,
    "EncodingError U+C18D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC18E");
    },
    Error,
    "EncodingError U+C18E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC18F");
    },
    Error,
    "EncodingError U+C18F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC190");
    },
    Error,
    "EncodingError U+C190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC191");
    },
    Error,
    "EncodingError U+C191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC192");
    },
    Error,
    "EncodingError U+C192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC193");
    },
    Error,
    "EncodingError U+C193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC194");
    },
    Error,
    "EncodingError U+C194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC195");
    },
    Error,
    "EncodingError U+C195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC196");
    },
    Error,
    "EncodingError U+C196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC197");
    },
    Error,
    "EncodingError U+C197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC198");
    },
    Error,
    "EncodingError U+C198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC199");
    },
    Error,
    "EncodingError U+C199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC19A");
    },
    Error,
    "EncodingError U+C19A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC19B");
    },
    Error,
    "EncodingError U+C19B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC19C");
    },
    Error,
    "EncodingError U+C19C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC19D");
    },
    Error,
    "EncodingError U+C19D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC19E");
    },
    Error,
    "EncodingError U+C19E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC19F");
    },
    Error,
    "EncodingError U+C19F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A0");
    },
    Error,
    "EncodingError U+C1A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A1");
    },
    Error,
    "EncodingError U+C1A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A2");
    },
    Error,
    "EncodingError U+C1A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A3");
    },
    Error,
    "EncodingError U+C1A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A4");
    },
    Error,
    "EncodingError U+C1A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A5");
    },
    Error,
    "EncodingError U+C1A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A6");
    },
    Error,
    "EncodingError U+C1A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A7");
    },
    Error,
    "EncodingError U+C1A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A8");
    },
    Error,
    "EncodingError U+C1A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1A9");
    },
    Error,
    "EncodingError U+C1A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1AA");
    },
    Error,
    "EncodingError U+C1AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1AB");
    },
    Error,
    "EncodingError U+C1AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1AC");
    },
    Error,
    "EncodingError U+C1AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1AD");
    },
    Error,
    "EncodingError U+C1AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1AE");
    },
    Error,
    "EncodingError U+C1AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1AF");
    },
    Error,
    "EncodingError U+C1AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B0");
    },
    Error,
    "EncodingError U+C1B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B1");
    },
    Error,
    "EncodingError U+C1B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B2");
    },
    Error,
    "EncodingError U+C1B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B3");
    },
    Error,
    "EncodingError U+C1B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B4");
    },
    Error,
    "EncodingError U+C1B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B5");
    },
    Error,
    "EncodingError U+C1B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B6");
    },
    Error,
    "EncodingError U+C1B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B7");
    },
    Error,
    "EncodingError U+C1B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B8");
    },
    Error,
    "EncodingError U+C1B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1B9");
    },
    Error,
    "EncodingError U+C1B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1BA");
    },
    Error,
    "EncodingError U+C1BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1BB");
    },
    Error,
    "EncodingError U+C1BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1BC");
    },
    Error,
    "EncodingError U+C1BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1BD");
    },
    Error,
    "EncodingError U+C1BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1BE");
    },
    Error,
    "EncodingError U+C1BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1BF");
    },
    Error,
    "EncodingError U+C1BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C0");
    },
    Error,
    "EncodingError U+C1C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C1");
    },
    Error,
    "EncodingError U+C1C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C2");
    },
    Error,
    "EncodingError U+C1C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C3");
    },
    Error,
    "EncodingError U+C1C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C4");
    },
    Error,
    "EncodingError U+C1C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C5");
    },
    Error,
    "EncodingError U+C1C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C6");
    },
    Error,
    "EncodingError U+C1C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C7");
    },
    Error,
    "EncodingError U+C1C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C8");
    },
    Error,
    "EncodingError U+C1C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1C9");
    },
    Error,
    "EncodingError U+C1C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1CA");
    },
    Error,
    "EncodingError U+C1CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1CB");
    },
    Error,
    "EncodingError U+C1CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1CC");
    },
    Error,
    "EncodingError U+C1CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1CD");
    },
    Error,
    "EncodingError U+C1CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1CE");
    },
    Error,
    "EncodingError U+C1CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1CF");
    },
    Error,
    "EncodingError U+C1CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D0");
    },
    Error,
    "EncodingError U+C1D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D1");
    },
    Error,
    "EncodingError U+C1D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D2");
    },
    Error,
    "EncodingError U+C1D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D3");
    },
    Error,
    "EncodingError U+C1D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D4");
    },
    Error,
    "EncodingError U+C1D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D5");
    },
    Error,
    "EncodingError U+C1D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D6");
    },
    Error,
    "EncodingError U+C1D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D7");
    },
    Error,
    "EncodingError U+C1D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D8");
    },
    Error,
    "EncodingError U+C1D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1D9");
    },
    Error,
    "EncodingError U+C1D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1DA");
    },
    Error,
    "EncodingError U+C1DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1DB");
    },
    Error,
    "EncodingError U+C1DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1DC");
    },
    Error,
    "EncodingError U+C1DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1DD");
    },
    Error,
    "EncodingError U+C1DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1DE");
    },
    Error,
    "EncodingError U+C1DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1DF");
    },
    Error,
    "EncodingError U+C1DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E0");
    },
    Error,
    "EncodingError U+C1E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E1");
    },
    Error,
    "EncodingError U+C1E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E2");
    },
    Error,
    "EncodingError U+C1E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E3");
    },
    Error,
    "EncodingError U+C1E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E4");
    },
    Error,
    "EncodingError U+C1E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E5");
    },
    Error,
    "EncodingError U+C1E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E6");
    },
    Error,
    "EncodingError U+C1E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E7");
    },
    Error,
    "EncodingError U+C1E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E8");
    },
    Error,
    "EncodingError U+C1E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1E9");
    },
    Error,
    "EncodingError U+C1E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1EA");
    },
    Error,
    "EncodingError U+C1EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1EB");
    },
    Error,
    "EncodingError U+C1EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1EC");
    },
    Error,
    "EncodingError U+C1EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1ED");
    },
    Error,
    "EncodingError U+C1ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1EE");
    },
    Error,
    "EncodingError U+C1EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1EF");
    },
    Error,
    "EncodingError U+C1EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F0");
    },
    Error,
    "EncodingError U+C1F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F1");
    },
    Error,
    "EncodingError U+C1F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F2");
    },
    Error,
    "EncodingError U+C1F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F3");
    },
    Error,
    "EncodingError U+C1F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F4");
    },
    Error,
    "EncodingError U+C1F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F5");
    },
    Error,
    "EncodingError U+C1F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F6");
    },
    Error,
    "EncodingError U+C1F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F7");
    },
    Error,
    "EncodingError U+C1F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F8");
    },
    Error,
    "EncodingError U+C1F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1F9");
    },
    Error,
    "EncodingError U+C1F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1FA");
    },
    Error,
    "EncodingError U+C1FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1FB");
    },
    Error,
    "EncodingError U+C1FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1FC");
    },
    Error,
    "EncodingError U+C1FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1FD");
    },
    Error,
    "EncodingError U+C1FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1FE");
    },
    Error,
    "EncodingError U+C1FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC1FF");
    },
    Error,
    "EncodingError U+C1FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC200");
    },
    Error,
    "EncodingError U+C200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC201");
    },
    Error,
    "EncodingError U+C201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC202");
    },
    Error,
    "EncodingError U+C202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC203");
    },
    Error,
    "EncodingError U+C203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC204");
    },
    Error,
    "EncodingError U+C204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC205");
    },
    Error,
    "EncodingError U+C205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC206");
    },
    Error,
    "EncodingError U+C206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC207");
    },
    Error,
    "EncodingError U+C207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC208");
    },
    Error,
    "EncodingError U+C208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC209");
    },
    Error,
    "EncodingError U+C209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC20A");
    },
    Error,
    "EncodingError U+C20A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC20B");
    },
    Error,
    "EncodingError U+C20B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC20C");
    },
    Error,
    "EncodingError U+C20C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC20D");
    },
    Error,
    "EncodingError U+C20D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC20E");
    },
    Error,
    "EncodingError U+C20E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC20F");
    },
    Error,
    "EncodingError U+C20F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC210");
    },
    Error,
    "EncodingError U+C210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC211");
    },
    Error,
    "EncodingError U+C211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC212");
    },
    Error,
    "EncodingError U+C212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC213");
    },
    Error,
    "EncodingError U+C213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC214");
    },
    Error,
    "EncodingError U+C214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC215");
    },
    Error,
    "EncodingError U+C215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC216");
    },
    Error,
    "EncodingError U+C216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC217");
    },
    Error,
    "EncodingError U+C217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC218");
    },
    Error,
    "EncodingError U+C218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC219");
    },
    Error,
    "EncodingError U+C219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC21A");
    },
    Error,
    "EncodingError U+C21A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC21B");
    },
    Error,
    "EncodingError U+C21B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC21C");
    },
    Error,
    "EncodingError U+C21C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC21D");
    },
    Error,
    "EncodingError U+C21D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC21E");
    },
    Error,
    "EncodingError U+C21E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC21F");
    },
    Error,
    "EncodingError U+C21F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC220");
    },
    Error,
    "EncodingError U+C220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC221");
    },
    Error,
    "EncodingError U+C221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC222");
    },
    Error,
    "EncodingError U+C222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC223");
    },
    Error,
    "EncodingError U+C223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC224");
    },
    Error,
    "EncodingError U+C224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC225");
    },
    Error,
    "EncodingError U+C225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC226");
    },
    Error,
    "EncodingError U+C226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC227");
    },
    Error,
    "EncodingError U+C227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC228");
    },
    Error,
    "EncodingError U+C228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC229");
    },
    Error,
    "EncodingError U+C229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC22A");
    },
    Error,
    "EncodingError U+C22A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC22B");
    },
    Error,
    "EncodingError U+C22B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC22C");
    },
    Error,
    "EncodingError U+C22C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC22D");
    },
    Error,
    "EncodingError U+C22D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC22E");
    },
    Error,
    "EncodingError U+C22E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC22F");
    },
    Error,
    "EncodingError U+C22F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC230");
    },
    Error,
    "EncodingError U+C230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC231");
    },
    Error,
    "EncodingError U+C231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC232");
    },
    Error,
    "EncodingError U+C232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC233");
    },
    Error,
    "EncodingError U+C233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC234");
    },
    Error,
    "EncodingError U+C234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC235");
    },
    Error,
    "EncodingError U+C235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC236");
    },
    Error,
    "EncodingError U+C236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC237");
    },
    Error,
    "EncodingError U+C237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC238");
    },
    Error,
    "EncodingError U+C238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC239");
    },
    Error,
    "EncodingError U+C239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC23A");
    },
    Error,
    "EncodingError U+C23A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC23B");
    },
    Error,
    "EncodingError U+C23B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC23C");
    },
    Error,
    "EncodingError U+C23C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC23D");
    },
    Error,
    "EncodingError U+C23D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC23E");
    },
    Error,
    "EncodingError U+C23E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC23F");
    },
    Error,
    "EncodingError U+C23F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC240");
    },
    Error,
    "EncodingError U+C240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC241");
    },
    Error,
    "EncodingError U+C241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC242");
    },
    Error,
    "EncodingError U+C242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC243");
    },
    Error,
    "EncodingError U+C243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC244");
    },
    Error,
    "EncodingError U+C244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC245");
    },
    Error,
    "EncodingError U+C245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC246");
    },
    Error,
    "EncodingError U+C246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC247");
    },
    Error,
    "EncodingError U+C247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC248");
    },
    Error,
    "EncodingError U+C248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC249");
    },
    Error,
    "EncodingError U+C249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC24A");
    },
    Error,
    "EncodingError U+C24A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC24B");
    },
    Error,
    "EncodingError U+C24B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC24C");
    },
    Error,
    "EncodingError U+C24C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC24D");
    },
    Error,
    "EncodingError U+C24D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC24E");
    },
    Error,
    "EncodingError U+C24E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC24F");
    },
    Error,
    "EncodingError U+C24F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC250");
    },
    Error,
    "EncodingError U+C250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC251");
    },
    Error,
    "EncodingError U+C251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC252");
    },
    Error,
    "EncodingError U+C252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC253");
    },
    Error,
    "EncodingError U+C253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC254");
    },
    Error,
    "EncodingError U+C254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC255");
    },
    Error,
    "EncodingError U+C255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC256");
    },
    Error,
    "EncodingError U+C256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC257");
    },
    Error,
    "EncodingError U+C257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC258");
    },
    Error,
    "EncodingError U+C258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC259");
    },
    Error,
    "EncodingError U+C259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC25A");
    },
    Error,
    "EncodingError U+C25A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC25B");
    },
    Error,
    "EncodingError U+C25B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC25C");
    },
    Error,
    "EncodingError U+C25C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC25D");
    },
    Error,
    "EncodingError U+C25D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC25E");
    },
    Error,
    "EncodingError U+C25E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC25F");
    },
    Error,
    "EncodingError U+C25F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC260");
    },
    Error,
    "EncodingError U+C260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC261");
    },
    Error,
    "EncodingError U+C261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC262");
    },
    Error,
    "EncodingError U+C262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC263");
    },
    Error,
    "EncodingError U+C263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC264");
    },
    Error,
    "EncodingError U+C264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC265");
    },
    Error,
    "EncodingError U+C265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC266");
    },
    Error,
    "EncodingError U+C266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC267");
    },
    Error,
    "EncodingError U+C267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC268");
    },
    Error,
    "EncodingError U+C268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC269");
    },
    Error,
    "EncodingError U+C269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC26A");
    },
    Error,
    "EncodingError U+C26A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC26B");
    },
    Error,
    "EncodingError U+C26B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC26C");
    },
    Error,
    "EncodingError U+C26C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC26D");
    },
    Error,
    "EncodingError U+C26D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC26E");
    },
    Error,
    "EncodingError U+C26E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC26F");
    },
    Error,
    "EncodingError U+C26F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC270");
    },
    Error,
    "EncodingError U+C270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC271");
    },
    Error,
    "EncodingError U+C271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC272");
    },
    Error,
    "EncodingError U+C272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC273");
    },
    Error,
    "EncodingError U+C273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC274");
    },
    Error,
    "EncodingError U+C274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC275");
    },
    Error,
    "EncodingError U+C275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC276");
    },
    Error,
    "EncodingError U+C276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC277");
    },
    Error,
    "EncodingError U+C277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC278");
    },
    Error,
    "EncodingError U+C278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC279");
    },
    Error,
    "EncodingError U+C279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC27A");
    },
    Error,
    "EncodingError U+C27A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC27B");
    },
    Error,
    "EncodingError U+C27B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC27C");
    },
    Error,
    "EncodingError U+C27C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC27D");
    },
    Error,
    "EncodingError U+C27D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC27E");
    },
    Error,
    "EncodingError U+C27E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC27F");
    },
    Error,
    "EncodingError U+C27F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC280");
    },
    Error,
    "EncodingError U+C280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC281");
    },
    Error,
    "EncodingError U+C281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC282");
    },
    Error,
    "EncodingError U+C282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC283");
    },
    Error,
    "EncodingError U+C283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC284");
    },
    Error,
    "EncodingError U+C284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC285");
    },
    Error,
    "EncodingError U+C285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC286");
    },
    Error,
    "EncodingError U+C286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC287");
    },
    Error,
    "EncodingError U+C287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC288");
    },
    Error,
    "EncodingError U+C288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC289");
    },
    Error,
    "EncodingError U+C289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC28A");
    },
    Error,
    "EncodingError U+C28A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC28B");
    },
    Error,
    "EncodingError U+C28B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC28C");
    },
    Error,
    "EncodingError U+C28C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC28D");
    },
    Error,
    "EncodingError U+C28D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC28E");
    },
    Error,
    "EncodingError U+C28E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC28F");
    },
    Error,
    "EncodingError U+C28F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC290");
    },
    Error,
    "EncodingError U+C290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC291");
    },
    Error,
    "EncodingError U+C291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC292");
    },
    Error,
    "EncodingError U+C292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC293");
    },
    Error,
    "EncodingError U+C293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC294");
    },
    Error,
    "EncodingError U+C294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC295");
    },
    Error,
    "EncodingError U+C295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC296");
    },
    Error,
    "EncodingError U+C296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC297");
    },
    Error,
    "EncodingError U+C297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC298");
    },
    Error,
    "EncodingError U+C298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC299");
    },
    Error,
    "EncodingError U+C299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC29A");
    },
    Error,
    "EncodingError U+C29A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC29B");
    },
    Error,
    "EncodingError U+C29B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC29C");
    },
    Error,
    "EncodingError U+C29C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC29D");
    },
    Error,
    "EncodingError U+C29D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC29E");
    },
    Error,
    "EncodingError U+C29E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC29F");
    },
    Error,
    "EncodingError U+C29F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A0");
    },
    Error,
    "EncodingError U+C2A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A1");
    },
    Error,
    "EncodingError U+C2A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A2");
    },
    Error,
    "EncodingError U+C2A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A3");
    },
    Error,
    "EncodingError U+C2A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A4");
    },
    Error,
    "EncodingError U+C2A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A5");
    },
    Error,
    "EncodingError U+C2A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A6");
    },
    Error,
    "EncodingError U+C2A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A7");
    },
    Error,
    "EncodingError U+C2A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A8");
    },
    Error,
    "EncodingError U+C2A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2A9");
    },
    Error,
    "EncodingError U+C2A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2AA");
    },
    Error,
    "EncodingError U+C2AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2AB");
    },
    Error,
    "EncodingError U+C2AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2AC");
    },
    Error,
    "EncodingError U+C2AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2AD");
    },
    Error,
    "EncodingError U+C2AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2AE");
    },
    Error,
    "EncodingError U+C2AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2AF");
    },
    Error,
    "EncodingError U+C2AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B0");
    },
    Error,
    "EncodingError U+C2B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B1");
    },
    Error,
    "EncodingError U+C2B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B2");
    },
    Error,
    "EncodingError U+C2B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B3");
    },
    Error,
    "EncodingError U+C2B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B4");
    },
    Error,
    "EncodingError U+C2B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B5");
    },
    Error,
    "EncodingError U+C2B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B6");
    },
    Error,
    "EncodingError U+C2B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B7");
    },
    Error,
    "EncodingError U+C2B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B8");
    },
    Error,
    "EncodingError U+C2B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2B9");
    },
    Error,
    "EncodingError U+C2B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2BA");
    },
    Error,
    "EncodingError U+C2BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2BB");
    },
    Error,
    "EncodingError U+C2BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2BC");
    },
    Error,
    "EncodingError U+C2BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2BD");
    },
    Error,
    "EncodingError U+C2BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2BE");
    },
    Error,
    "EncodingError U+C2BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2BF");
    },
    Error,
    "EncodingError U+C2BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C0");
    },
    Error,
    "EncodingError U+C2C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C1");
    },
    Error,
    "EncodingError U+C2C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C2");
    },
    Error,
    "EncodingError U+C2C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C3");
    },
    Error,
    "EncodingError U+C2C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C4");
    },
    Error,
    "EncodingError U+C2C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C5");
    },
    Error,
    "EncodingError U+C2C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C6");
    },
    Error,
    "EncodingError U+C2C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C7");
    },
    Error,
    "EncodingError U+C2C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C8");
    },
    Error,
    "EncodingError U+C2C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2C9");
    },
    Error,
    "EncodingError U+C2C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2CA");
    },
    Error,
    "EncodingError U+C2CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2CB");
    },
    Error,
    "EncodingError U+C2CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2CC");
    },
    Error,
    "EncodingError U+C2CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2CD");
    },
    Error,
    "EncodingError U+C2CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2CE");
    },
    Error,
    "EncodingError U+C2CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2CF");
    },
    Error,
    "EncodingError U+C2CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D0");
    },
    Error,
    "EncodingError U+C2D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D1");
    },
    Error,
    "EncodingError U+C2D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D2");
    },
    Error,
    "EncodingError U+C2D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D3");
    },
    Error,
    "EncodingError U+C2D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D4");
    },
    Error,
    "EncodingError U+C2D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D5");
    },
    Error,
    "EncodingError U+C2D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D6");
    },
    Error,
    "EncodingError U+C2D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D7");
    },
    Error,
    "EncodingError U+C2D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D8");
    },
    Error,
    "EncodingError U+C2D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2D9");
    },
    Error,
    "EncodingError U+C2D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2DA");
    },
    Error,
    "EncodingError U+C2DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2DB");
    },
    Error,
    "EncodingError U+C2DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2DC");
    },
    Error,
    "EncodingError U+C2DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2DD");
    },
    Error,
    "EncodingError U+C2DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2DE");
    },
    Error,
    "EncodingError U+C2DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2DF");
    },
    Error,
    "EncodingError U+C2DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E0");
    },
    Error,
    "EncodingError U+C2E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E1");
    },
    Error,
    "EncodingError U+C2E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E2");
    },
    Error,
    "EncodingError U+C2E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E3");
    },
    Error,
    "EncodingError U+C2E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E4");
    },
    Error,
    "EncodingError U+C2E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E5");
    },
    Error,
    "EncodingError U+C2E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E6");
    },
    Error,
    "EncodingError U+C2E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E7");
    },
    Error,
    "EncodingError U+C2E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E8");
    },
    Error,
    "EncodingError U+C2E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2E9");
    },
    Error,
    "EncodingError U+C2E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2EA");
    },
    Error,
    "EncodingError U+C2EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2EB");
    },
    Error,
    "EncodingError U+C2EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2EC");
    },
    Error,
    "EncodingError U+C2EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2ED");
    },
    Error,
    "EncodingError U+C2ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2EE");
    },
    Error,
    "EncodingError U+C2EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2EF");
    },
    Error,
    "EncodingError U+C2EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F0");
    },
    Error,
    "EncodingError U+C2F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F1");
    },
    Error,
    "EncodingError U+C2F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F2");
    },
    Error,
    "EncodingError U+C2F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F3");
    },
    Error,
    "EncodingError U+C2F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F4");
    },
    Error,
    "EncodingError U+C2F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F5");
    },
    Error,
    "EncodingError U+C2F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F6");
    },
    Error,
    "EncodingError U+C2F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F7");
    },
    Error,
    "EncodingError U+C2F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F8");
    },
    Error,
    "EncodingError U+C2F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2F9");
    },
    Error,
    "EncodingError U+C2F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2FA");
    },
    Error,
    "EncodingError U+C2FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2FB");
    },
    Error,
    "EncodingError U+C2FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2FC");
    },
    Error,
    "EncodingError U+C2FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2FD");
    },
    Error,
    "EncodingError U+C2FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2FE");
    },
    Error,
    "EncodingError U+C2FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC2FF");
    },
    Error,
    "EncodingError U+C2FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC300");
    },
    Error,
    "EncodingError U+C300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC301");
    },
    Error,
    "EncodingError U+C301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC302");
    },
    Error,
    "EncodingError U+C302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC303");
    },
    Error,
    "EncodingError U+C303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC304");
    },
    Error,
    "EncodingError U+C304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC305");
    },
    Error,
    "EncodingError U+C305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC306");
    },
    Error,
    "EncodingError U+C306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC307");
    },
    Error,
    "EncodingError U+C307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC308");
    },
    Error,
    "EncodingError U+C308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC309");
    },
    Error,
    "EncodingError U+C309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC30A");
    },
    Error,
    "EncodingError U+C30A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC30B");
    },
    Error,
    "EncodingError U+C30B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC30C");
    },
    Error,
    "EncodingError U+C30C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC30D");
    },
    Error,
    "EncodingError U+C30D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC30E");
    },
    Error,
    "EncodingError U+C30E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC30F");
    },
    Error,
    "EncodingError U+C30F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC310");
    },
    Error,
    "EncodingError U+C310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC311");
    },
    Error,
    "EncodingError U+C311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC312");
    },
    Error,
    "EncodingError U+C312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC313");
    },
    Error,
    "EncodingError U+C313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC314");
    },
    Error,
    "EncodingError U+C314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC315");
    },
    Error,
    "EncodingError U+C315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC316");
    },
    Error,
    "EncodingError U+C316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC317");
    },
    Error,
    "EncodingError U+C317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC318");
    },
    Error,
    "EncodingError U+C318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC319");
    },
    Error,
    "EncodingError U+C319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC31A");
    },
    Error,
    "EncodingError U+C31A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC31B");
    },
    Error,
    "EncodingError U+C31B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC31C");
    },
    Error,
    "EncodingError U+C31C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC31D");
    },
    Error,
    "EncodingError U+C31D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC31E");
    },
    Error,
    "EncodingError U+C31E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC31F");
    },
    Error,
    "EncodingError U+C31F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC320");
    },
    Error,
    "EncodingError U+C320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC321");
    },
    Error,
    "EncodingError U+C321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC322");
    },
    Error,
    "EncodingError U+C322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC323");
    },
    Error,
    "EncodingError U+C323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC324");
    },
    Error,
    "EncodingError U+C324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC325");
    },
    Error,
    "EncodingError U+C325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC326");
    },
    Error,
    "EncodingError U+C326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC327");
    },
    Error,
    "EncodingError U+C327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC328");
    },
    Error,
    "EncodingError U+C328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC329");
    },
    Error,
    "EncodingError U+C329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC32A");
    },
    Error,
    "EncodingError U+C32A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC32B");
    },
    Error,
    "EncodingError U+C32B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC32C");
    },
    Error,
    "EncodingError U+C32C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC32D");
    },
    Error,
    "EncodingError U+C32D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC32E");
    },
    Error,
    "EncodingError U+C32E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC32F");
    },
    Error,
    "EncodingError U+C32F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC330");
    },
    Error,
    "EncodingError U+C330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC331");
    },
    Error,
    "EncodingError U+C331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC332");
    },
    Error,
    "EncodingError U+C332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC333");
    },
    Error,
    "EncodingError U+C333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC334");
    },
    Error,
    "EncodingError U+C334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC335");
    },
    Error,
    "EncodingError U+C335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC336");
    },
    Error,
    "EncodingError U+C336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC337");
    },
    Error,
    "EncodingError U+C337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC338");
    },
    Error,
    "EncodingError U+C338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC339");
    },
    Error,
    "EncodingError U+C339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC33A");
    },
    Error,
    "EncodingError U+C33A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC33B");
    },
    Error,
    "EncodingError U+C33B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC33C");
    },
    Error,
    "EncodingError U+C33C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC33D");
    },
    Error,
    "EncodingError U+C33D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC33E");
    },
    Error,
    "EncodingError U+C33E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC33F");
    },
    Error,
    "EncodingError U+C33F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC340");
    },
    Error,
    "EncodingError U+C340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC341");
    },
    Error,
    "EncodingError U+C341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC342");
    },
    Error,
    "EncodingError U+C342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC343");
    },
    Error,
    "EncodingError U+C343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC344");
    },
    Error,
    "EncodingError U+C344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC345");
    },
    Error,
    "EncodingError U+C345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC346");
    },
    Error,
    "EncodingError U+C346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC347");
    },
    Error,
    "EncodingError U+C347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC348");
    },
    Error,
    "EncodingError U+C348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC349");
    },
    Error,
    "EncodingError U+C349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC34A");
    },
    Error,
    "EncodingError U+C34A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC34B");
    },
    Error,
    "EncodingError U+C34B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC34C");
    },
    Error,
    "EncodingError U+C34C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC34D");
    },
    Error,
    "EncodingError U+C34D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC34E");
    },
    Error,
    "EncodingError U+C34E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC34F");
    },
    Error,
    "EncodingError U+C34F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC350");
    },
    Error,
    "EncodingError U+C350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC351");
    },
    Error,
    "EncodingError U+C351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC352");
    },
    Error,
    "EncodingError U+C352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC353");
    },
    Error,
    "EncodingError U+C353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC354");
    },
    Error,
    "EncodingError U+C354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC355");
    },
    Error,
    "EncodingError U+C355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC356");
    },
    Error,
    "EncodingError U+C356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC357");
    },
    Error,
    "EncodingError U+C357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC358");
    },
    Error,
    "EncodingError U+C358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC359");
    },
    Error,
    "EncodingError U+C359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC35A");
    },
    Error,
    "EncodingError U+C35A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC35B");
    },
    Error,
    "EncodingError U+C35B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC35C");
    },
    Error,
    "EncodingError U+C35C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC35D");
    },
    Error,
    "EncodingError U+C35D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC35E");
    },
    Error,
    "EncodingError U+C35E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC35F");
    },
    Error,
    "EncodingError U+C35F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC360");
    },
    Error,
    "EncodingError U+C360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC361");
    },
    Error,
    "EncodingError U+C361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC362");
    },
    Error,
    "EncodingError U+C362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC363");
    },
    Error,
    "EncodingError U+C363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC364");
    },
    Error,
    "EncodingError U+C364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC365");
    },
    Error,
    "EncodingError U+C365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC366");
    },
    Error,
    "EncodingError U+C366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC367");
    },
    Error,
    "EncodingError U+C367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC368");
    },
    Error,
    "EncodingError U+C368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC369");
    },
    Error,
    "EncodingError U+C369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC36A");
    },
    Error,
    "EncodingError U+C36A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC36B");
    },
    Error,
    "EncodingError U+C36B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC36C");
    },
    Error,
    "EncodingError U+C36C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC36D");
    },
    Error,
    "EncodingError U+C36D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC36E");
    },
    Error,
    "EncodingError U+C36E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC36F");
    },
    Error,
    "EncodingError U+C36F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC370");
    },
    Error,
    "EncodingError U+C370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC371");
    },
    Error,
    "EncodingError U+C371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC372");
    },
    Error,
    "EncodingError U+C372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC373");
    },
    Error,
    "EncodingError U+C373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC374");
    },
    Error,
    "EncodingError U+C374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC375");
    },
    Error,
    "EncodingError U+C375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC376");
    },
    Error,
    "EncodingError U+C376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC377");
    },
    Error,
    "EncodingError U+C377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC378");
    },
    Error,
    "EncodingError U+C378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC379");
    },
    Error,
    "EncodingError U+C379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC37A");
    },
    Error,
    "EncodingError U+C37A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC37B");
    },
    Error,
    "EncodingError U+C37B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC37C");
    },
    Error,
    "EncodingError U+C37C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC37D");
    },
    Error,
    "EncodingError U+C37D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC37E");
    },
    Error,
    "EncodingError U+C37E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC37F");
    },
    Error,
    "EncodingError U+C37F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC380");
    },
    Error,
    "EncodingError U+C380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC381");
    },
    Error,
    "EncodingError U+C381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC382");
    },
    Error,
    "EncodingError U+C382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC383");
    },
    Error,
    "EncodingError U+C383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC384");
    },
    Error,
    "EncodingError U+C384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC385");
    },
    Error,
    "EncodingError U+C385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC386");
    },
    Error,
    "EncodingError U+C386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC387");
    },
    Error,
    "EncodingError U+C387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC388");
    },
    Error,
    "EncodingError U+C388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC389");
    },
    Error,
    "EncodingError U+C389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC38A");
    },
    Error,
    "EncodingError U+C38A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC38B");
    },
    Error,
    "EncodingError U+C38B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC38C");
    },
    Error,
    "EncodingError U+C38C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC38D");
    },
    Error,
    "EncodingError U+C38D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC38E");
    },
    Error,
    "EncodingError U+C38E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC38F");
    },
    Error,
    "EncodingError U+C38F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC390");
    },
    Error,
    "EncodingError U+C390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC391");
    },
    Error,
    "EncodingError U+C391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC392");
    },
    Error,
    "EncodingError U+C392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC393");
    },
    Error,
    "EncodingError U+C393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC394");
    },
    Error,
    "EncodingError U+C394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC395");
    },
    Error,
    "EncodingError U+C395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC396");
    },
    Error,
    "EncodingError U+C396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC397");
    },
    Error,
    "EncodingError U+C397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC398");
    },
    Error,
    "EncodingError U+C398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC399");
    },
    Error,
    "EncodingError U+C399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC39A");
    },
    Error,
    "EncodingError U+C39A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC39B");
    },
    Error,
    "EncodingError U+C39B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC39C");
    },
    Error,
    "EncodingError U+C39C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC39D");
    },
    Error,
    "EncodingError U+C39D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC39E");
    },
    Error,
    "EncodingError U+C39E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC39F");
    },
    Error,
    "EncodingError U+C39F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A0");
    },
    Error,
    "EncodingError U+C3A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A1");
    },
    Error,
    "EncodingError U+C3A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A2");
    },
    Error,
    "EncodingError U+C3A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A3");
    },
    Error,
    "EncodingError U+C3A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A4");
    },
    Error,
    "EncodingError U+C3A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A5");
    },
    Error,
    "EncodingError U+C3A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A6");
    },
    Error,
    "EncodingError U+C3A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A7");
    },
    Error,
    "EncodingError U+C3A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A8");
    },
    Error,
    "EncodingError U+C3A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3A9");
    },
    Error,
    "EncodingError U+C3A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3AA");
    },
    Error,
    "EncodingError U+C3AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3AB");
    },
    Error,
    "EncodingError U+C3AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3AC");
    },
    Error,
    "EncodingError U+C3AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3AD");
    },
    Error,
    "EncodingError U+C3AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3AE");
    },
    Error,
    "EncodingError U+C3AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3AF");
    },
    Error,
    "EncodingError U+C3AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B0");
    },
    Error,
    "EncodingError U+C3B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B1");
    },
    Error,
    "EncodingError U+C3B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B2");
    },
    Error,
    "EncodingError U+C3B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B3");
    },
    Error,
    "EncodingError U+C3B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B4");
    },
    Error,
    "EncodingError U+C3B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B5");
    },
    Error,
    "EncodingError U+C3B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B6");
    },
    Error,
    "EncodingError U+C3B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B7");
    },
    Error,
    "EncodingError U+C3B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B8");
    },
    Error,
    "EncodingError U+C3B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3B9");
    },
    Error,
    "EncodingError U+C3B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3BA");
    },
    Error,
    "EncodingError U+C3BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3BB");
    },
    Error,
    "EncodingError U+C3BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3BC");
    },
    Error,
    "EncodingError U+C3BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3BD");
    },
    Error,
    "EncodingError U+C3BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3BE");
    },
    Error,
    "EncodingError U+C3BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3BF");
    },
    Error,
    "EncodingError U+C3BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C0");
    },
    Error,
    "EncodingError U+C3C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C1");
    },
    Error,
    "EncodingError U+C3C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C2");
    },
    Error,
    "EncodingError U+C3C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C3");
    },
    Error,
    "EncodingError U+C3C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C4");
    },
    Error,
    "EncodingError U+C3C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C5");
    },
    Error,
    "EncodingError U+C3C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C6");
    },
    Error,
    "EncodingError U+C3C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C7");
    },
    Error,
    "EncodingError U+C3C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C8");
    },
    Error,
    "EncodingError U+C3C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3C9");
    },
    Error,
    "EncodingError U+C3C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3CA");
    },
    Error,
    "EncodingError U+C3CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3CB");
    },
    Error,
    "EncodingError U+C3CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3CC");
    },
    Error,
    "EncodingError U+C3CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3CD");
    },
    Error,
    "EncodingError U+C3CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3CE");
    },
    Error,
    "EncodingError U+C3CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3CF");
    },
    Error,
    "EncodingError U+C3CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D0");
    },
    Error,
    "EncodingError U+C3D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D1");
    },
    Error,
    "EncodingError U+C3D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D2");
    },
    Error,
    "EncodingError U+C3D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D3");
    },
    Error,
    "EncodingError U+C3D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D4");
    },
    Error,
    "EncodingError U+C3D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D5");
    },
    Error,
    "EncodingError U+C3D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D6");
    },
    Error,
    "EncodingError U+C3D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D7");
    },
    Error,
    "EncodingError U+C3D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D8");
    },
    Error,
    "EncodingError U+C3D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3D9");
    },
    Error,
    "EncodingError U+C3D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3DA");
    },
    Error,
    "EncodingError U+C3DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3DB");
    },
    Error,
    "EncodingError U+C3DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3DC");
    },
    Error,
    "EncodingError U+C3DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3DD");
    },
    Error,
    "EncodingError U+C3DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3DE");
    },
    Error,
    "EncodingError U+C3DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3DF");
    },
    Error,
    "EncodingError U+C3DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E0");
    },
    Error,
    "EncodingError U+C3E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E1");
    },
    Error,
    "EncodingError U+C3E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E2");
    },
    Error,
    "EncodingError U+C3E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E3");
    },
    Error,
    "EncodingError U+C3E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E4");
    },
    Error,
    "EncodingError U+C3E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E5");
    },
    Error,
    "EncodingError U+C3E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E6");
    },
    Error,
    "EncodingError U+C3E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E7");
    },
    Error,
    "EncodingError U+C3E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E8");
    },
    Error,
    "EncodingError U+C3E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3E9");
    },
    Error,
    "EncodingError U+C3E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3EA");
    },
    Error,
    "EncodingError U+C3EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3EB");
    },
    Error,
    "EncodingError U+C3EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3EC");
    },
    Error,
    "EncodingError U+C3EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3ED");
    },
    Error,
    "EncodingError U+C3ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3EE");
    },
    Error,
    "EncodingError U+C3EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3EF");
    },
    Error,
    "EncodingError U+C3EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F0");
    },
    Error,
    "EncodingError U+C3F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F1");
    },
    Error,
    "EncodingError U+C3F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F2");
    },
    Error,
    "EncodingError U+C3F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F3");
    },
    Error,
    "EncodingError U+C3F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F4");
    },
    Error,
    "EncodingError U+C3F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F5");
    },
    Error,
    "EncodingError U+C3F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F6");
    },
    Error,
    "EncodingError U+C3F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F7");
    },
    Error,
    "EncodingError U+C3F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F8");
    },
    Error,
    "EncodingError U+C3F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3F9");
    },
    Error,
    "EncodingError U+C3F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3FA");
    },
    Error,
    "EncodingError U+C3FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3FB");
    },
    Error,
    "EncodingError U+C3FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3FC");
    },
    Error,
    "EncodingError U+C3FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3FD");
    },
    Error,
    "EncodingError U+C3FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3FE");
    },
    Error,
    "EncodingError U+C3FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC3FF");
    },
    Error,
    "EncodingError U+C3FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC400");
    },
    Error,
    "EncodingError U+C400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC401");
    },
    Error,
    "EncodingError U+C401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC402");
    },
    Error,
    "EncodingError U+C402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC403");
    },
    Error,
    "EncodingError U+C403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC404");
    },
    Error,
    "EncodingError U+C404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC405");
    },
    Error,
    "EncodingError U+C405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC406");
    },
    Error,
    "EncodingError U+C406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC407");
    },
    Error,
    "EncodingError U+C407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC408");
    },
    Error,
    "EncodingError U+C408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC409");
    },
    Error,
    "EncodingError U+C409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC40A");
    },
    Error,
    "EncodingError U+C40A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC40B");
    },
    Error,
    "EncodingError U+C40B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC40C");
    },
    Error,
    "EncodingError U+C40C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC40D");
    },
    Error,
    "EncodingError U+C40D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC40E");
    },
    Error,
    "EncodingError U+C40E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC40F");
    },
    Error,
    "EncodingError U+C40F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC410");
    },
    Error,
    "EncodingError U+C410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC411");
    },
    Error,
    "EncodingError U+C411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC412");
    },
    Error,
    "EncodingError U+C412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC413");
    },
    Error,
    "EncodingError U+C413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC414");
    },
    Error,
    "EncodingError U+C414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC415");
    },
    Error,
    "EncodingError U+C415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC416");
    },
    Error,
    "EncodingError U+C416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC417");
    },
    Error,
    "EncodingError U+C417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC418");
    },
    Error,
    "EncodingError U+C418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC419");
    },
    Error,
    "EncodingError U+C419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC41A");
    },
    Error,
    "EncodingError U+C41A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC41B");
    },
    Error,
    "EncodingError U+C41B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC41C");
    },
    Error,
    "EncodingError U+C41C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC41D");
    },
    Error,
    "EncodingError U+C41D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC41E");
    },
    Error,
    "EncodingError U+C41E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC41F");
    },
    Error,
    "EncodingError U+C41F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC420");
    },
    Error,
    "EncodingError U+C420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC421");
    },
    Error,
    "EncodingError U+C421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC422");
    },
    Error,
    "EncodingError U+C422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC423");
    },
    Error,
    "EncodingError U+C423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC424");
    },
    Error,
    "EncodingError U+C424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC425");
    },
    Error,
    "EncodingError U+C425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC426");
    },
    Error,
    "EncodingError U+C426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC427");
    },
    Error,
    "EncodingError U+C427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC428");
    },
    Error,
    "EncodingError U+C428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC429");
    },
    Error,
    "EncodingError U+C429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC42A");
    },
    Error,
    "EncodingError U+C42A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC42B");
    },
    Error,
    "EncodingError U+C42B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC42C");
    },
    Error,
    "EncodingError U+C42C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC42D");
    },
    Error,
    "EncodingError U+C42D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC42E");
    },
    Error,
    "EncodingError U+C42E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC42F");
    },
    Error,
    "EncodingError U+C42F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC430");
    },
    Error,
    "EncodingError U+C430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC431");
    },
    Error,
    "EncodingError U+C431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC432");
    },
    Error,
    "EncodingError U+C432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC433");
    },
    Error,
    "EncodingError U+C433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC434");
    },
    Error,
    "EncodingError U+C434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC435");
    },
    Error,
    "EncodingError U+C435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC436");
    },
    Error,
    "EncodingError U+C436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC437");
    },
    Error,
    "EncodingError U+C437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC438");
    },
    Error,
    "EncodingError U+C438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC439");
    },
    Error,
    "EncodingError U+C439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC43A");
    },
    Error,
    "EncodingError U+C43A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC43B");
    },
    Error,
    "EncodingError U+C43B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC43C");
    },
    Error,
    "EncodingError U+C43C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC43D");
    },
    Error,
    "EncodingError U+C43D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC43E");
    },
    Error,
    "EncodingError U+C43E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC43F");
    },
    Error,
    "EncodingError U+C43F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC440");
    },
    Error,
    "EncodingError U+C440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC441");
    },
    Error,
    "EncodingError U+C441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC442");
    },
    Error,
    "EncodingError U+C442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC443");
    },
    Error,
    "EncodingError U+C443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC444");
    },
    Error,
    "EncodingError U+C444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC445");
    },
    Error,
    "EncodingError U+C445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC446");
    },
    Error,
    "EncodingError U+C446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC447");
    },
    Error,
    "EncodingError U+C447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC448");
    },
    Error,
    "EncodingError U+C448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC449");
    },
    Error,
    "EncodingError U+C449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC44A");
    },
    Error,
    "EncodingError U+C44A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC44B");
    },
    Error,
    "EncodingError U+C44B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC44C");
    },
    Error,
    "EncodingError U+C44C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC44D");
    },
    Error,
    "EncodingError U+C44D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC44E");
    },
    Error,
    "EncodingError U+C44E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC44F");
    },
    Error,
    "EncodingError U+C44F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC450");
    },
    Error,
    "EncodingError U+C450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC451");
    },
    Error,
    "EncodingError U+C451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC452");
    },
    Error,
    "EncodingError U+C452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC453");
    },
    Error,
    "EncodingError U+C453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC454");
    },
    Error,
    "EncodingError U+C454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC455");
    },
    Error,
    "EncodingError U+C455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC456");
    },
    Error,
    "EncodingError U+C456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC457");
    },
    Error,
    "EncodingError U+C457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC458");
    },
    Error,
    "EncodingError U+C458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC459");
    },
    Error,
    "EncodingError U+C459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC45A");
    },
    Error,
    "EncodingError U+C45A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC45B");
    },
    Error,
    "EncodingError U+C45B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC45C");
    },
    Error,
    "EncodingError U+C45C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC45D");
    },
    Error,
    "EncodingError U+C45D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC45E");
    },
    Error,
    "EncodingError U+C45E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC45F");
    },
    Error,
    "EncodingError U+C45F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC460");
    },
    Error,
    "EncodingError U+C460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC461");
    },
    Error,
    "EncodingError U+C461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC462");
    },
    Error,
    "EncodingError U+C462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC463");
    },
    Error,
    "EncodingError U+C463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC464");
    },
    Error,
    "EncodingError U+C464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC465");
    },
    Error,
    "EncodingError U+C465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC466");
    },
    Error,
    "EncodingError U+C466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC467");
    },
    Error,
    "EncodingError U+C467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC468");
    },
    Error,
    "EncodingError U+C468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC469");
    },
    Error,
    "EncodingError U+C469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC46A");
    },
    Error,
    "EncodingError U+C46A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC46B");
    },
    Error,
    "EncodingError U+C46B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC46C");
    },
    Error,
    "EncodingError U+C46C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC46D");
    },
    Error,
    "EncodingError U+C46D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC46E");
    },
    Error,
    "EncodingError U+C46E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC46F");
    },
    Error,
    "EncodingError U+C46F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC470");
    },
    Error,
    "EncodingError U+C470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC471");
    },
    Error,
    "EncodingError U+C471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC472");
    },
    Error,
    "EncodingError U+C472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC473");
    },
    Error,
    "EncodingError U+C473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC474");
    },
    Error,
    "EncodingError U+C474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC475");
    },
    Error,
    "EncodingError U+C475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC476");
    },
    Error,
    "EncodingError U+C476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC477");
    },
    Error,
    "EncodingError U+C477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC478");
    },
    Error,
    "EncodingError U+C478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC479");
    },
    Error,
    "EncodingError U+C479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC47A");
    },
    Error,
    "EncodingError U+C47A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC47B");
    },
    Error,
    "EncodingError U+C47B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC47C");
    },
    Error,
    "EncodingError U+C47C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC47D");
    },
    Error,
    "EncodingError U+C47D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC47E");
    },
    Error,
    "EncodingError U+C47E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC47F");
    },
    Error,
    "EncodingError U+C47F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC480");
    },
    Error,
    "EncodingError U+C480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC481");
    },
    Error,
    "EncodingError U+C481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC482");
    },
    Error,
    "EncodingError U+C482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC483");
    },
    Error,
    "EncodingError U+C483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC484");
    },
    Error,
    "EncodingError U+C484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC485");
    },
    Error,
    "EncodingError U+C485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC486");
    },
    Error,
    "EncodingError U+C486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC487");
    },
    Error,
    "EncodingError U+C487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC488");
    },
    Error,
    "EncodingError U+C488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC489");
    },
    Error,
    "EncodingError U+C489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC48A");
    },
    Error,
    "EncodingError U+C48A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC48B");
    },
    Error,
    "EncodingError U+C48B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC48C");
    },
    Error,
    "EncodingError U+C48C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC48D");
    },
    Error,
    "EncodingError U+C48D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC48E");
    },
    Error,
    "EncodingError U+C48E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC48F");
    },
    Error,
    "EncodingError U+C48F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC490");
    },
    Error,
    "EncodingError U+C490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC491");
    },
    Error,
    "EncodingError U+C491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC492");
    },
    Error,
    "EncodingError U+C492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC493");
    },
    Error,
    "EncodingError U+C493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC494");
    },
    Error,
    "EncodingError U+C494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC495");
    },
    Error,
    "EncodingError U+C495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC496");
    },
    Error,
    "EncodingError U+C496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC497");
    },
    Error,
    "EncodingError U+C497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC498");
    },
    Error,
    "EncodingError U+C498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC499");
    },
    Error,
    "EncodingError U+C499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC49A");
    },
    Error,
    "EncodingError U+C49A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC49B");
    },
    Error,
    "EncodingError U+C49B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC49C");
    },
    Error,
    "EncodingError U+C49C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC49D");
    },
    Error,
    "EncodingError U+C49D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC49E");
    },
    Error,
    "EncodingError U+C49E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC49F");
    },
    Error,
    "EncodingError U+C49F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A0");
    },
    Error,
    "EncodingError U+C4A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A1");
    },
    Error,
    "EncodingError U+C4A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A2");
    },
    Error,
    "EncodingError U+C4A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A3");
    },
    Error,
    "EncodingError U+C4A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A4");
    },
    Error,
    "EncodingError U+C4A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A5");
    },
    Error,
    "EncodingError U+C4A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A6");
    },
    Error,
    "EncodingError U+C4A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A7");
    },
    Error,
    "EncodingError U+C4A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A8");
    },
    Error,
    "EncodingError U+C4A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4A9");
    },
    Error,
    "EncodingError U+C4A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4AA");
    },
    Error,
    "EncodingError U+C4AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4AB");
    },
    Error,
    "EncodingError U+C4AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4AC");
    },
    Error,
    "EncodingError U+C4AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4AD");
    },
    Error,
    "EncodingError U+C4AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4AE");
    },
    Error,
    "EncodingError U+C4AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4AF");
    },
    Error,
    "EncodingError U+C4AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B0");
    },
    Error,
    "EncodingError U+C4B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B1");
    },
    Error,
    "EncodingError U+C4B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B2");
    },
    Error,
    "EncodingError U+C4B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B3");
    },
    Error,
    "EncodingError U+C4B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B4");
    },
    Error,
    "EncodingError U+C4B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B5");
    },
    Error,
    "EncodingError U+C4B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B6");
    },
    Error,
    "EncodingError U+C4B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B7");
    },
    Error,
    "EncodingError U+C4B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B8");
    },
    Error,
    "EncodingError U+C4B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4B9");
    },
    Error,
    "EncodingError U+C4B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4BA");
    },
    Error,
    "EncodingError U+C4BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4BB");
    },
    Error,
    "EncodingError U+C4BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4BC");
    },
    Error,
    "EncodingError U+C4BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4BD");
    },
    Error,
    "EncodingError U+C4BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4BE");
    },
    Error,
    "EncodingError U+C4BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4BF");
    },
    Error,
    "EncodingError U+C4BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C0");
    },
    Error,
    "EncodingError U+C4C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C1");
    },
    Error,
    "EncodingError U+C4C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C2");
    },
    Error,
    "EncodingError U+C4C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C3");
    },
    Error,
    "EncodingError U+C4C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C4");
    },
    Error,
    "EncodingError U+C4C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C5");
    },
    Error,
    "EncodingError U+C4C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C6");
    },
    Error,
    "EncodingError U+C4C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C7");
    },
    Error,
    "EncodingError U+C4C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C8");
    },
    Error,
    "EncodingError U+C4C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4C9");
    },
    Error,
    "EncodingError U+C4C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4CA");
    },
    Error,
    "EncodingError U+C4CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4CB");
    },
    Error,
    "EncodingError U+C4CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4CC");
    },
    Error,
    "EncodingError U+C4CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4CD");
    },
    Error,
    "EncodingError U+C4CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4CE");
    },
    Error,
    "EncodingError U+C4CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4CF");
    },
    Error,
    "EncodingError U+C4CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D0");
    },
    Error,
    "EncodingError U+C4D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D1");
    },
    Error,
    "EncodingError U+C4D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D2");
    },
    Error,
    "EncodingError U+C4D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D3");
    },
    Error,
    "EncodingError U+C4D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D4");
    },
    Error,
    "EncodingError U+C4D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D5");
    },
    Error,
    "EncodingError U+C4D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D6");
    },
    Error,
    "EncodingError U+C4D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D7");
    },
    Error,
    "EncodingError U+C4D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D8");
    },
    Error,
    "EncodingError U+C4D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4D9");
    },
    Error,
    "EncodingError U+C4D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4DA");
    },
    Error,
    "EncodingError U+C4DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4DB");
    },
    Error,
    "EncodingError U+C4DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4DC");
    },
    Error,
    "EncodingError U+C4DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4DD");
    },
    Error,
    "EncodingError U+C4DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4DE");
    },
    Error,
    "EncodingError U+C4DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4DF");
    },
    Error,
    "EncodingError U+C4DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E0");
    },
    Error,
    "EncodingError U+C4E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E1");
    },
    Error,
    "EncodingError U+C4E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E2");
    },
    Error,
    "EncodingError U+C4E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E3");
    },
    Error,
    "EncodingError U+C4E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E4");
    },
    Error,
    "EncodingError U+C4E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E5");
    },
    Error,
    "EncodingError U+C4E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E6");
    },
    Error,
    "EncodingError U+C4E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E7");
    },
    Error,
    "EncodingError U+C4E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E8");
    },
    Error,
    "EncodingError U+C4E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4E9");
    },
    Error,
    "EncodingError U+C4E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4EA");
    },
    Error,
    "EncodingError U+C4EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4EB");
    },
    Error,
    "EncodingError U+C4EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4EC");
    },
    Error,
    "EncodingError U+C4EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4ED");
    },
    Error,
    "EncodingError U+C4ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4EE");
    },
    Error,
    "EncodingError U+C4EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4EF");
    },
    Error,
    "EncodingError U+C4EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F0");
    },
    Error,
    "EncodingError U+C4F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F1");
    },
    Error,
    "EncodingError U+C4F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F2");
    },
    Error,
    "EncodingError U+C4F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F3");
    },
    Error,
    "EncodingError U+C4F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F4");
    },
    Error,
    "EncodingError U+C4F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F5");
    },
    Error,
    "EncodingError U+C4F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F6");
    },
    Error,
    "EncodingError U+C4F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F7");
    },
    Error,
    "EncodingError U+C4F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F8");
    },
    Error,
    "EncodingError U+C4F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4F9");
    },
    Error,
    "EncodingError U+C4F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4FA");
    },
    Error,
    "EncodingError U+C4FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4FB");
    },
    Error,
    "EncodingError U+C4FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4FC");
    },
    Error,
    "EncodingError U+C4FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4FD");
    },
    Error,
    "EncodingError U+C4FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4FE");
    },
    Error,
    "EncodingError U+C4FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC4FF");
    },
    Error,
    "EncodingError U+C4FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC500");
    },
    Error,
    "EncodingError U+C500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC501");
    },
    Error,
    "EncodingError U+C501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC502");
    },
    Error,
    "EncodingError U+C502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC503");
    },
    Error,
    "EncodingError U+C503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC504");
    },
    Error,
    "EncodingError U+C504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC505");
    },
    Error,
    "EncodingError U+C505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC506");
    },
    Error,
    "EncodingError U+C506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC507");
    },
    Error,
    "EncodingError U+C507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC508");
    },
    Error,
    "EncodingError U+C508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC509");
    },
    Error,
    "EncodingError U+C509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC50A");
    },
    Error,
    "EncodingError U+C50A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC50B");
    },
    Error,
    "EncodingError U+C50B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC50C");
    },
    Error,
    "EncodingError U+C50C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC50D");
    },
    Error,
    "EncodingError U+C50D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC50E");
    },
    Error,
    "EncodingError U+C50E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC50F");
    },
    Error,
    "EncodingError U+C50F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC510");
    },
    Error,
    "EncodingError U+C510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC511");
    },
    Error,
    "EncodingError U+C511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC512");
    },
    Error,
    "EncodingError U+C512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC513");
    },
    Error,
    "EncodingError U+C513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC514");
    },
    Error,
    "EncodingError U+C514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC515");
    },
    Error,
    "EncodingError U+C515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC516");
    },
    Error,
    "EncodingError U+C516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC517");
    },
    Error,
    "EncodingError U+C517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC518");
    },
    Error,
    "EncodingError U+C518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC519");
    },
    Error,
    "EncodingError U+C519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC51A");
    },
    Error,
    "EncodingError U+C51A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC51B");
    },
    Error,
    "EncodingError U+C51B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC51C");
    },
    Error,
    "EncodingError U+C51C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC51D");
    },
    Error,
    "EncodingError U+C51D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC51E");
    },
    Error,
    "EncodingError U+C51E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC51F");
    },
    Error,
    "EncodingError U+C51F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC520");
    },
    Error,
    "EncodingError U+C520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC521");
    },
    Error,
    "EncodingError U+C521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC522");
    },
    Error,
    "EncodingError U+C522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC523");
    },
    Error,
    "EncodingError U+C523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC524");
    },
    Error,
    "EncodingError U+C524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC525");
    },
    Error,
    "EncodingError U+C525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC526");
    },
    Error,
    "EncodingError U+C526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC527");
    },
    Error,
    "EncodingError U+C527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC528");
    },
    Error,
    "EncodingError U+C528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC529");
    },
    Error,
    "EncodingError U+C529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC52A");
    },
    Error,
    "EncodingError U+C52A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC52B");
    },
    Error,
    "EncodingError U+C52B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC52C");
    },
    Error,
    "EncodingError U+C52C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC52D");
    },
    Error,
    "EncodingError U+C52D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC52E");
    },
    Error,
    "EncodingError U+C52E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC52F");
    },
    Error,
    "EncodingError U+C52F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC530");
    },
    Error,
    "EncodingError U+C530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC531");
    },
    Error,
    "EncodingError U+C531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC532");
    },
    Error,
    "EncodingError U+C532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC533");
    },
    Error,
    "EncodingError U+C533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC534");
    },
    Error,
    "EncodingError U+C534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC535");
    },
    Error,
    "EncodingError U+C535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC536");
    },
    Error,
    "EncodingError U+C536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC537");
    },
    Error,
    "EncodingError U+C537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC538");
    },
    Error,
    "EncodingError U+C538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC539");
    },
    Error,
    "EncodingError U+C539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC53A");
    },
    Error,
    "EncodingError U+C53A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC53B");
    },
    Error,
    "EncodingError U+C53B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC53C");
    },
    Error,
    "EncodingError U+C53C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC53D");
    },
    Error,
    "EncodingError U+C53D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC53E");
    },
    Error,
    "EncodingError U+C53E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC53F");
    },
    Error,
    "EncodingError U+C53F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC540");
    },
    Error,
    "EncodingError U+C540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC541");
    },
    Error,
    "EncodingError U+C541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC542");
    },
    Error,
    "EncodingError U+C542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC543");
    },
    Error,
    "EncodingError U+C543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC544");
    },
    Error,
    "EncodingError U+C544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC545");
    },
    Error,
    "EncodingError U+C545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC546");
    },
    Error,
    "EncodingError U+C546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC547");
    },
    Error,
    "EncodingError U+C547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC548");
    },
    Error,
    "EncodingError U+C548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC549");
    },
    Error,
    "EncodingError U+C549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC54A");
    },
    Error,
    "EncodingError U+C54A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC54B");
    },
    Error,
    "EncodingError U+C54B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC54C");
    },
    Error,
    "EncodingError U+C54C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC54D");
    },
    Error,
    "EncodingError U+C54D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC54E");
    },
    Error,
    "EncodingError U+C54E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC54F");
    },
    Error,
    "EncodingError U+C54F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC550");
    },
    Error,
    "EncodingError U+C550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC551");
    },
    Error,
    "EncodingError U+C551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC552");
    },
    Error,
    "EncodingError U+C552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC553");
    },
    Error,
    "EncodingError U+C553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC554");
    },
    Error,
    "EncodingError U+C554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC555");
    },
    Error,
    "EncodingError U+C555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC556");
    },
    Error,
    "EncodingError U+C556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC557");
    },
    Error,
    "EncodingError U+C557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC558");
    },
    Error,
    "EncodingError U+C558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC559");
    },
    Error,
    "EncodingError U+C559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC55A");
    },
    Error,
    "EncodingError U+C55A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC55B");
    },
    Error,
    "EncodingError U+C55B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC55C");
    },
    Error,
    "EncodingError U+C55C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC55D");
    },
    Error,
    "EncodingError U+C55D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC55E");
    },
    Error,
    "EncodingError U+C55E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC55F");
    },
    Error,
    "EncodingError U+C55F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC560");
    },
    Error,
    "EncodingError U+C560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC561");
    },
    Error,
    "EncodingError U+C561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC562");
    },
    Error,
    "EncodingError U+C562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC563");
    },
    Error,
    "EncodingError U+C563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC564");
    },
    Error,
    "EncodingError U+C564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC565");
    },
    Error,
    "EncodingError U+C565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC566");
    },
    Error,
    "EncodingError U+C566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC567");
    },
    Error,
    "EncodingError U+C567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC568");
    },
    Error,
    "EncodingError U+C568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC569");
    },
    Error,
    "EncodingError U+C569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC56A");
    },
    Error,
    "EncodingError U+C56A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC56B");
    },
    Error,
    "EncodingError U+C56B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC56C");
    },
    Error,
    "EncodingError U+C56C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC56D");
    },
    Error,
    "EncodingError U+C56D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC56E");
    },
    Error,
    "EncodingError U+C56E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC56F");
    },
    Error,
    "EncodingError U+C56F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC570");
    },
    Error,
    "EncodingError U+C570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC571");
    },
    Error,
    "EncodingError U+C571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC572");
    },
    Error,
    "EncodingError U+C572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC573");
    },
    Error,
    "EncodingError U+C573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC574");
    },
    Error,
    "EncodingError U+C574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC575");
    },
    Error,
    "EncodingError U+C575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC576");
    },
    Error,
    "EncodingError U+C576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC577");
    },
    Error,
    "EncodingError U+C577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC578");
    },
    Error,
    "EncodingError U+C578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC579");
    },
    Error,
    "EncodingError U+C579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC57A");
    },
    Error,
    "EncodingError U+C57A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC57B");
    },
    Error,
    "EncodingError U+C57B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC57C");
    },
    Error,
    "EncodingError U+C57C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC57D");
    },
    Error,
    "EncodingError U+C57D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC57E");
    },
    Error,
    "EncodingError U+C57E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC57F");
    },
    Error,
    "EncodingError U+C57F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC580");
    },
    Error,
    "EncodingError U+C580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC581");
    },
    Error,
    "EncodingError U+C581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC582");
    },
    Error,
    "EncodingError U+C582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC583");
    },
    Error,
    "EncodingError U+C583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC584");
    },
    Error,
    "EncodingError U+C584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC585");
    },
    Error,
    "EncodingError U+C585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC586");
    },
    Error,
    "EncodingError U+C586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC587");
    },
    Error,
    "EncodingError U+C587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC588");
    },
    Error,
    "EncodingError U+C588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC589");
    },
    Error,
    "EncodingError U+C589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC58A");
    },
    Error,
    "EncodingError U+C58A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC58B");
    },
    Error,
    "EncodingError U+C58B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC58C");
    },
    Error,
    "EncodingError U+C58C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC58D");
    },
    Error,
    "EncodingError U+C58D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC58E");
    },
    Error,
    "EncodingError U+C58E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC58F");
    },
    Error,
    "EncodingError U+C58F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC590");
    },
    Error,
    "EncodingError U+C590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC591");
    },
    Error,
    "EncodingError U+C591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC592");
    },
    Error,
    "EncodingError U+C592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC593");
    },
    Error,
    "EncodingError U+C593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC594");
    },
    Error,
    "EncodingError U+C594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC595");
    },
    Error,
    "EncodingError U+C595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC596");
    },
    Error,
    "EncodingError U+C596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC597");
    },
    Error,
    "EncodingError U+C597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC598");
    },
    Error,
    "EncodingError U+C598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC599");
    },
    Error,
    "EncodingError U+C599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC59A");
    },
    Error,
    "EncodingError U+C59A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC59B");
    },
    Error,
    "EncodingError U+C59B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC59C");
    },
    Error,
    "EncodingError U+C59C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC59D");
    },
    Error,
    "EncodingError U+C59D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC59E");
    },
    Error,
    "EncodingError U+C59E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC59F");
    },
    Error,
    "EncodingError U+C59F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A0");
    },
    Error,
    "EncodingError U+C5A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A1");
    },
    Error,
    "EncodingError U+C5A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A2");
    },
    Error,
    "EncodingError U+C5A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A3");
    },
    Error,
    "EncodingError U+C5A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A4");
    },
    Error,
    "EncodingError U+C5A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A5");
    },
    Error,
    "EncodingError U+C5A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A6");
    },
    Error,
    "EncodingError U+C5A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A7");
    },
    Error,
    "EncodingError U+C5A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A8");
    },
    Error,
    "EncodingError U+C5A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5A9");
    },
    Error,
    "EncodingError U+C5A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5AA");
    },
    Error,
    "EncodingError U+C5AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5AB");
    },
    Error,
    "EncodingError U+C5AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5AC");
    },
    Error,
    "EncodingError U+C5AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5AD");
    },
    Error,
    "EncodingError U+C5AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5AE");
    },
    Error,
    "EncodingError U+C5AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5AF");
    },
    Error,
    "EncodingError U+C5AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B0");
    },
    Error,
    "EncodingError U+C5B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B1");
    },
    Error,
    "EncodingError U+C5B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B2");
    },
    Error,
    "EncodingError U+C5B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B3");
    },
    Error,
    "EncodingError U+C5B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B4");
    },
    Error,
    "EncodingError U+C5B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B5");
    },
    Error,
    "EncodingError U+C5B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B6");
    },
    Error,
    "EncodingError U+C5B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B7");
    },
    Error,
    "EncodingError U+C5B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B8");
    },
    Error,
    "EncodingError U+C5B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5B9");
    },
    Error,
    "EncodingError U+C5B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5BA");
    },
    Error,
    "EncodingError U+C5BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5BB");
    },
    Error,
    "EncodingError U+C5BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5BC");
    },
    Error,
    "EncodingError U+C5BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5BD");
    },
    Error,
    "EncodingError U+C5BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5BE");
    },
    Error,
    "EncodingError U+C5BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5BF");
    },
    Error,
    "EncodingError U+C5BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C0");
    },
    Error,
    "EncodingError U+C5C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C1");
    },
    Error,
    "EncodingError U+C5C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C2");
    },
    Error,
    "EncodingError U+C5C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C3");
    },
    Error,
    "EncodingError U+C5C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C4");
    },
    Error,
    "EncodingError U+C5C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C5");
    },
    Error,
    "EncodingError U+C5C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C6");
    },
    Error,
    "EncodingError U+C5C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C7");
    },
    Error,
    "EncodingError U+C5C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C8");
    },
    Error,
    "EncodingError U+C5C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5C9");
    },
    Error,
    "EncodingError U+C5C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5CA");
    },
    Error,
    "EncodingError U+C5CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5CB");
    },
    Error,
    "EncodingError U+C5CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5CC");
    },
    Error,
    "EncodingError U+C5CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5CD");
    },
    Error,
    "EncodingError U+C5CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5CE");
    },
    Error,
    "EncodingError U+C5CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5CF");
    },
    Error,
    "EncodingError U+C5CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D0");
    },
    Error,
    "EncodingError U+C5D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D1");
    },
    Error,
    "EncodingError U+C5D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D2");
    },
    Error,
    "EncodingError U+C5D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D3");
    },
    Error,
    "EncodingError U+C5D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D4");
    },
    Error,
    "EncodingError U+C5D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D5");
    },
    Error,
    "EncodingError U+C5D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D6");
    },
    Error,
    "EncodingError U+C5D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D7");
    },
    Error,
    "EncodingError U+C5D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D8");
    },
    Error,
    "EncodingError U+C5D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5D9");
    },
    Error,
    "EncodingError U+C5D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5DA");
    },
    Error,
    "EncodingError U+C5DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5DB");
    },
    Error,
    "EncodingError U+C5DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5DC");
    },
    Error,
    "EncodingError U+C5DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5DD");
    },
    Error,
    "EncodingError U+C5DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5DE");
    },
    Error,
    "EncodingError U+C5DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5DF");
    },
    Error,
    "EncodingError U+C5DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E0");
    },
    Error,
    "EncodingError U+C5E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E1");
    },
    Error,
    "EncodingError U+C5E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E2");
    },
    Error,
    "EncodingError U+C5E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E3");
    },
    Error,
    "EncodingError U+C5E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E4");
    },
    Error,
    "EncodingError U+C5E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E5");
    },
    Error,
    "EncodingError U+C5E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E6");
    },
    Error,
    "EncodingError U+C5E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E7");
    },
    Error,
    "EncodingError U+C5E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E8");
    },
    Error,
    "EncodingError U+C5E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5E9");
    },
    Error,
    "EncodingError U+C5E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5EA");
    },
    Error,
    "EncodingError U+C5EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5EB");
    },
    Error,
    "EncodingError U+C5EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5EC");
    },
    Error,
    "EncodingError U+C5EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5ED");
    },
    Error,
    "EncodingError U+C5ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5EE");
    },
    Error,
    "EncodingError U+C5EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5EF");
    },
    Error,
    "EncodingError U+C5EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F0");
    },
    Error,
    "EncodingError U+C5F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F1");
    },
    Error,
    "EncodingError U+C5F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F2");
    },
    Error,
    "EncodingError U+C5F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F3");
    },
    Error,
    "EncodingError U+C5F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F4");
    },
    Error,
    "EncodingError U+C5F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F5");
    },
    Error,
    "EncodingError U+C5F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F6");
    },
    Error,
    "EncodingError U+C5F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F7");
    },
    Error,
    "EncodingError U+C5F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F8");
    },
    Error,
    "EncodingError U+C5F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5F9");
    },
    Error,
    "EncodingError U+C5F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5FA");
    },
    Error,
    "EncodingError U+C5FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5FB");
    },
    Error,
    "EncodingError U+C5FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5FC");
    },
    Error,
    "EncodingError U+C5FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5FD");
    },
    Error,
    "EncodingError U+C5FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5FE");
    },
    Error,
    "EncodingError U+C5FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC5FF");
    },
    Error,
    "EncodingError U+C5FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC600");
    },
    Error,
    "EncodingError U+C600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC601");
    },
    Error,
    "EncodingError U+C601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC602");
    },
    Error,
    "EncodingError U+C602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC603");
    },
    Error,
    "EncodingError U+C603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC604");
    },
    Error,
    "EncodingError U+C604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC605");
    },
    Error,
    "EncodingError U+C605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC606");
    },
    Error,
    "EncodingError U+C606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC607");
    },
    Error,
    "EncodingError U+C607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC608");
    },
    Error,
    "EncodingError U+C608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC609");
    },
    Error,
    "EncodingError U+C609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC60A");
    },
    Error,
    "EncodingError U+C60A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC60B");
    },
    Error,
    "EncodingError U+C60B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC60C");
    },
    Error,
    "EncodingError U+C60C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC60D");
    },
    Error,
    "EncodingError U+C60D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC60E");
    },
    Error,
    "EncodingError U+C60E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC60F");
    },
    Error,
    "EncodingError U+C60F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC610");
    },
    Error,
    "EncodingError U+C610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC611");
    },
    Error,
    "EncodingError U+C611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC612");
    },
    Error,
    "EncodingError U+C612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC613");
    },
    Error,
    "EncodingError U+C613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC614");
    },
    Error,
    "EncodingError U+C614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC615");
    },
    Error,
    "EncodingError U+C615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC616");
    },
    Error,
    "EncodingError U+C616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC617");
    },
    Error,
    "EncodingError U+C617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC618");
    },
    Error,
    "EncodingError U+C618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC619");
    },
    Error,
    "EncodingError U+C619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC61A");
    },
    Error,
    "EncodingError U+C61A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC61B");
    },
    Error,
    "EncodingError U+C61B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC61C");
    },
    Error,
    "EncodingError U+C61C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC61D");
    },
    Error,
    "EncodingError U+C61D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC61E");
    },
    Error,
    "EncodingError U+C61E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC61F");
    },
    Error,
    "EncodingError U+C61F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC620");
    },
    Error,
    "EncodingError U+C620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC621");
    },
    Error,
    "EncodingError U+C621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC622");
    },
    Error,
    "EncodingError U+C622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC623");
    },
    Error,
    "EncodingError U+C623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC624");
    },
    Error,
    "EncodingError U+C624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC625");
    },
    Error,
    "EncodingError U+C625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC626");
    },
    Error,
    "EncodingError U+C626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC627");
    },
    Error,
    "EncodingError U+C627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC628");
    },
    Error,
    "EncodingError U+C628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC629");
    },
    Error,
    "EncodingError U+C629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC62A");
    },
    Error,
    "EncodingError U+C62A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC62B");
    },
    Error,
    "EncodingError U+C62B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC62C");
    },
    Error,
    "EncodingError U+C62C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC62D");
    },
    Error,
    "EncodingError U+C62D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC62E");
    },
    Error,
    "EncodingError U+C62E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC62F");
    },
    Error,
    "EncodingError U+C62F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC630");
    },
    Error,
    "EncodingError U+C630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC631");
    },
    Error,
    "EncodingError U+C631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC632");
    },
    Error,
    "EncodingError U+C632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC633");
    },
    Error,
    "EncodingError U+C633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC634");
    },
    Error,
    "EncodingError U+C634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC635");
    },
    Error,
    "EncodingError U+C635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC636");
    },
    Error,
    "EncodingError U+C636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC637");
    },
    Error,
    "EncodingError U+C637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC638");
    },
    Error,
    "EncodingError U+C638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC639");
    },
    Error,
    "EncodingError U+C639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC63A");
    },
    Error,
    "EncodingError U+C63A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC63B");
    },
    Error,
    "EncodingError U+C63B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC63C");
    },
    Error,
    "EncodingError U+C63C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC63D");
    },
    Error,
    "EncodingError U+C63D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC63E");
    },
    Error,
    "EncodingError U+C63E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC63F");
    },
    Error,
    "EncodingError U+C63F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC640");
    },
    Error,
    "EncodingError U+C640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC641");
    },
    Error,
    "EncodingError U+C641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC642");
    },
    Error,
    "EncodingError U+C642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC643");
    },
    Error,
    "EncodingError U+C643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC644");
    },
    Error,
    "EncodingError U+C644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC645");
    },
    Error,
    "EncodingError U+C645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC646");
    },
    Error,
    "EncodingError U+C646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC647");
    },
    Error,
    "EncodingError U+C647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC648");
    },
    Error,
    "EncodingError U+C648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC649");
    },
    Error,
    "EncodingError U+C649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC64A");
    },
    Error,
    "EncodingError U+C64A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC64B");
    },
    Error,
    "EncodingError U+C64B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC64C");
    },
    Error,
    "EncodingError U+C64C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC64D");
    },
    Error,
    "EncodingError U+C64D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC64E");
    },
    Error,
    "EncodingError U+C64E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC64F");
    },
    Error,
    "EncodingError U+C64F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC650");
    },
    Error,
    "EncodingError U+C650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC651");
    },
    Error,
    "EncodingError U+C651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC652");
    },
    Error,
    "EncodingError U+C652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC653");
    },
    Error,
    "EncodingError U+C653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC654");
    },
    Error,
    "EncodingError U+C654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC655");
    },
    Error,
    "EncodingError U+C655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC656");
    },
    Error,
    "EncodingError U+C656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC657");
    },
    Error,
    "EncodingError U+C657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC658");
    },
    Error,
    "EncodingError U+C658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC659");
    },
    Error,
    "EncodingError U+C659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC65A");
    },
    Error,
    "EncodingError U+C65A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC65B");
    },
    Error,
    "EncodingError U+C65B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC65C");
    },
    Error,
    "EncodingError U+C65C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC65D");
    },
    Error,
    "EncodingError U+C65D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC65E");
    },
    Error,
    "EncodingError U+C65E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC65F");
    },
    Error,
    "EncodingError U+C65F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC660");
    },
    Error,
    "EncodingError U+C660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC661");
    },
    Error,
    "EncodingError U+C661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC662");
    },
    Error,
    "EncodingError U+C662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC663");
    },
    Error,
    "EncodingError U+C663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC664");
    },
    Error,
    "EncodingError U+C664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC665");
    },
    Error,
    "EncodingError U+C665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC666");
    },
    Error,
    "EncodingError U+C666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC667");
    },
    Error,
    "EncodingError U+C667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC668");
    },
    Error,
    "EncodingError U+C668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC669");
    },
    Error,
    "EncodingError U+C669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC66A");
    },
    Error,
    "EncodingError U+C66A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC66B");
    },
    Error,
    "EncodingError U+C66B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC66C");
    },
    Error,
    "EncodingError U+C66C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC66D");
    },
    Error,
    "EncodingError U+C66D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC66E");
    },
    Error,
    "EncodingError U+C66E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC66F");
    },
    Error,
    "EncodingError U+C66F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC670");
    },
    Error,
    "EncodingError U+C670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC671");
    },
    Error,
    "EncodingError U+C671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC672");
    },
    Error,
    "EncodingError U+C672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC673");
    },
    Error,
    "EncodingError U+C673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC674");
    },
    Error,
    "EncodingError U+C674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC675");
    },
    Error,
    "EncodingError U+C675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC676");
    },
    Error,
    "EncodingError U+C676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC677");
    },
    Error,
    "EncodingError U+C677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC678");
    },
    Error,
    "EncodingError U+C678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC679");
    },
    Error,
    "EncodingError U+C679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC67A");
    },
    Error,
    "EncodingError U+C67A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC67B");
    },
    Error,
    "EncodingError U+C67B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC67C");
    },
    Error,
    "EncodingError U+C67C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC67D");
    },
    Error,
    "EncodingError U+C67D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC67E");
    },
    Error,
    "EncodingError U+C67E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC67F");
    },
    Error,
    "EncodingError U+C67F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC680");
    },
    Error,
    "EncodingError U+C680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC681");
    },
    Error,
    "EncodingError U+C681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC682");
    },
    Error,
    "EncodingError U+C682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC683");
    },
    Error,
    "EncodingError U+C683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC684");
    },
    Error,
    "EncodingError U+C684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC685");
    },
    Error,
    "EncodingError U+C685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC686");
    },
    Error,
    "EncodingError U+C686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC687");
    },
    Error,
    "EncodingError U+C687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC688");
    },
    Error,
    "EncodingError U+C688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC689");
    },
    Error,
    "EncodingError U+C689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC68A");
    },
    Error,
    "EncodingError U+C68A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC68B");
    },
    Error,
    "EncodingError U+C68B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC68C");
    },
    Error,
    "EncodingError U+C68C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC68D");
    },
    Error,
    "EncodingError U+C68D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC68E");
    },
    Error,
    "EncodingError U+C68E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC68F");
    },
    Error,
    "EncodingError U+C68F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC690");
    },
    Error,
    "EncodingError U+C690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC691");
    },
    Error,
    "EncodingError U+C691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC692");
    },
    Error,
    "EncodingError U+C692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC693");
    },
    Error,
    "EncodingError U+C693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC694");
    },
    Error,
    "EncodingError U+C694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC695");
    },
    Error,
    "EncodingError U+C695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC696");
    },
    Error,
    "EncodingError U+C696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC697");
    },
    Error,
    "EncodingError U+C697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC698");
    },
    Error,
    "EncodingError U+C698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC699");
    },
    Error,
    "EncodingError U+C699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC69A");
    },
    Error,
    "EncodingError U+C69A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC69B");
    },
    Error,
    "EncodingError U+C69B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC69C");
    },
    Error,
    "EncodingError U+C69C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC69D");
    },
    Error,
    "EncodingError U+C69D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC69E");
    },
    Error,
    "EncodingError U+C69E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC69F");
    },
    Error,
    "EncodingError U+C69F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A0");
    },
    Error,
    "EncodingError U+C6A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A1");
    },
    Error,
    "EncodingError U+C6A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A2");
    },
    Error,
    "EncodingError U+C6A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A3");
    },
    Error,
    "EncodingError U+C6A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A4");
    },
    Error,
    "EncodingError U+C6A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A5");
    },
    Error,
    "EncodingError U+C6A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A6");
    },
    Error,
    "EncodingError U+C6A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A7");
    },
    Error,
    "EncodingError U+C6A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A8");
    },
    Error,
    "EncodingError U+C6A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6A9");
    },
    Error,
    "EncodingError U+C6A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6AA");
    },
    Error,
    "EncodingError U+C6AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6AB");
    },
    Error,
    "EncodingError U+C6AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6AC");
    },
    Error,
    "EncodingError U+C6AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6AD");
    },
    Error,
    "EncodingError U+C6AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6AE");
    },
    Error,
    "EncodingError U+C6AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6AF");
    },
    Error,
    "EncodingError U+C6AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B0");
    },
    Error,
    "EncodingError U+C6B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B1");
    },
    Error,
    "EncodingError U+C6B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B2");
    },
    Error,
    "EncodingError U+C6B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B3");
    },
    Error,
    "EncodingError U+C6B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B4");
    },
    Error,
    "EncodingError U+C6B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B5");
    },
    Error,
    "EncodingError U+C6B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B6");
    },
    Error,
    "EncodingError U+C6B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B7");
    },
    Error,
    "EncodingError U+C6B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B8");
    },
    Error,
    "EncodingError U+C6B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6B9");
    },
    Error,
    "EncodingError U+C6B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6BA");
    },
    Error,
    "EncodingError U+C6BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6BB");
    },
    Error,
    "EncodingError U+C6BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6BC");
    },
    Error,
    "EncodingError U+C6BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6BD");
    },
    Error,
    "EncodingError U+C6BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6BE");
    },
    Error,
    "EncodingError U+C6BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6BF");
    },
    Error,
    "EncodingError U+C6BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C0");
    },
    Error,
    "EncodingError U+C6C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C1");
    },
    Error,
    "EncodingError U+C6C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C2");
    },
    Error,
    "EncodingError U+C6C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C3");
    },
    Error,
    "EncodingError U+C6C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C4");
    },
    Error,
    "EncodingError U+C6C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C5");
    },
    Error,
    "EncodingError U+C6C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C6");
    },
    Error,
    "EncodingError U+C6C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C7");
    },
    Error,
    "EncodingError U+C6C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C8");
    },
    Error,
    "EncodingError U+C6C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6C9");
    },
    Error,
    "EncodingError U+C6C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6CA");
    },
    Error,
    "EncodingError U+C6CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6CB");
    },
    Error,
    "EncodingError U+C6CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6CC");
    },
    Error,
    "EncodingError U+C6CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6CD");
    },
    Error,
    "EncodingError U+C6CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6CE");
    },
    Error,
    "EncodingError U+C6CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6CF");
    },
    Error,
    "EncodingError U+C6CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D0");
    },
    Error,
    "EncodingError U+C6D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D1");
    },
    Error,
    "EncodingError U+C6D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D2");
    },
    Error,
    "EncodingError U+C6D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D3");
    },
    Error,
    "EncodingError U+C6D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D4");
    },
    Error,
    "EncodingError U+C6D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D5");
    },
    Error,
    "EncodingError U+C6D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D6");
    },
    Error,
    "EncodingError U+C6D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D7");
    },
    Error,
    "EncodingError U+C6D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D8");
    },
    Error,
    "EncodingError U+C6D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6D9");
    },
    Error,
    "EncodingError U+C6D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6DA");
    },
    Error,
    "EncodingError U+C6DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6DB");
    },
    Error,
    "EncodingError U+C6DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6DC");
    },
    Error,
    "EncodingError U+C6DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6DD");
    },
    Error,
    "EncodingError U+C6DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6DE");
    },
    Error,
    "EncodingError U+C6DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6DF");
    },
    Error,
    "EncodingError U+C6DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E0");
    },
    Error,
    "EncodingError U+C6E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E1");
    },
    Error,
    "EncodingError U+C6E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E2");
    },
    Error,
    "EncodingError U+C6E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E3");
    },
    Error,
    "EncodingError U+C6E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E4");
    },
    Error,
    "EncodingError U+C6E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E5");
    },
    Error,
    "EncodingError U+C6E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E6");
    },
    Error,
    "EncodingError U+C6E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E7");
    },
    Error,
    "EncodingError U+C6E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E8");
    },
    Error,
    "EncodingError U+C6E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6E9");
    },
    Error,
    "EncodingError U+C6E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6EA");
    },
    Error,
    "EncodingError U+C6EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6EB");
    },
    Error,
    "EncodingError U+C6EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6EC");
    },
    Error,
    "EncodingError U+C6EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6ED");
    },
    Error,
    "EncodingError U+C6ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6EE");
    },
    Error,
    "EncodingError U+C6EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6EF");
    },
    Error,
    "EncodingError U+C6EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F0");
    },
    Error,
    "EncodingError U+C6F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F1");
    },
    Error,
    "EncodingError U+C6F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F2");
    },
    Error,
    "EncodingError U+C6F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F3");
    },
    Error,
    "EncodingError U+C6F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F4");
    },
    Error,
    "EncodingError U+C6F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F5");
    },
    Error,
    "EncodingError U+C6F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F6");
    },
    Error,
    "EncodingError U+C6F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F7");
    },
    Error,
    "EncodingError U+C6F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F8");
    },
    Error,
    "EncodingError U+C6F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6F9");
    },
    Error,
    "EncodingError U+C6F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6FA");
    },
    Error,
    "EncodingError U+C6FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6FB");
    },
    Error,
    "EncodingError U+C6FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6FC");
    },
    Error,
    "EncodingError U+C6FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6FD");
    },
    Error,
    "EncodingError U+C6FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6FE");
    },
    Error,
    "EncodingError U+C6FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC6FF");
    },
    Error,
    "EncodingError U+C6FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC700");
    },
    Error,
    "EncodingError U+C700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC701");
    },
    Error,
    "EncodingError U+C701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC702");
    },
    Error,
    "EncodingError U+C702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC703");
    },
    Error,
    "EncodingError U+C703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC704");
    },
    Error,
    "EncodingError U+C704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC705");
    },
    Error,
    "EncodingError U+C705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC706");
    },
    Error,
    "EncodingError U+C706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC707");
    },
    Error,
    "EncodingError U+C707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC708");
    },
    Error,
    "EncodingError U+C708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC709");
    },
    Error,
    "EncodingError U+C709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC70A");
    },
    Error,
    "EncodingError U+C70A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC70B");
    },
    Error,
    "EncodingError U+C70B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC70C");
    },
    Error,
    "EncodingError U+C70C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC70D");
    },
    Error,
    "EncodingError U+C70D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC70E");
    },
    Error,
    "EncodingError U+C70E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC70F");
    },
    Error,
    "EncodingError U+C70F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC710");
    },
    Error,
    "EncodingError U+C710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC711");
    },
    Error,
    "EncodingError U+C711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC712");
    },
    Error,
    "EncodingError U+C712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC713");
    },
    Error,
    "EncodingError U+C713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC714");
    },
    Error,
    "EncodingError U+C714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC715");
    },
    Error,
    "EncodingError U+C715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC716");
    },
    Error,
    "EncodingError U+C716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC717");
    },
    Error,
    "EncodingError U+C717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC718");
    },
    Error,
    "EncodingError U+C718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC719");
    },
    Error,
    "EncodingError U+C719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC71A");
    },
    Error,
    "EncodingError U+C71A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC71B");
    },
    Error,
    "EncodingError U+C71B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC71C");
    },
    Error,
    "EncodingError U+C71C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC71D");
    },
    Error,
    "EncodingError U+C71D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC71E");
    },
    Error,
    "EncodingError U+C71E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC71F");
    },
    Error,
    "EncodingError U+C71F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC720");
    },
    Error,
    "EncodingError U+C720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC721");
    },
    Error,
    "EncodingError U+C721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC722");
    },
    Error,
    "EncodingError U+C722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC723");
    },
    Error,
    "EncodingError U+C723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC724");
    },
    Error,
    "EncodingError U+C724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC725");
    },
    Error,
    "EncodingError U+C725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC726");
    },
    Error,
    "EncodingError U+C726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC727");
    },
    Error,
    "EncodingError U+C727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC728");
    },
    Error,
    "EncodingError U+C728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC729");
    },
    Error,
    "EncodingError U+C729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC72A");
    },
    Error,
    "EncodingError U+C72A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC72B");
    },
    Error,
    "EncodingError U+C72B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC72C");
    },
    Error,
    "EncodingError U+C72C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC72D");
    },
    Error,
    "EncodingError U+C72D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC72E");
    },
    Error,
    "EncodingError U+C72E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC72F");
    },
    Error,
    "EncodingError U+C72F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC730");
    },
    Error,
    "EncodingError U+C730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC731");
    },
    Error,
    "EncodingError U+C731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC732");
    },
    Error,
    "EncodingError U+C732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC733");
    },
    Error,
    "EncodingError U+C733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC734");
    },
    Error,
    "EncodingError U+C734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC735");
    },
    Error,
    "EncodingError U+C735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC736");
    },
    Error,
    "EncodingError U+C736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC737");
    },
    Error,
    "EncodingError U+C737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC738");
    },
    Error,
    "EncodingError U+C738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC739");
    },
    Error,
    "EncodingError U+C739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC73A");
    },
    Error,
    "EncodingError U+C73A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC73B");
    },
    Error,
    "EncodingError U+C73B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC73C");
    },
    Error,
    "EncodingError U+C73C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC73D");
    },
    Error,
    "EncodingError U+C73D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC73E");
    },
    Error,
    "EncodingError U+C73E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC73F");
    },
    Error,
    "EncodingError U+C73F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC740");
    },
    Error,
    "EncodingError U+C740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC741");
    },
    Error,
    "EncodingError U+C741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC742");
    },
    Error,
    "EncodingError U+C742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC743");
    },
    Error,
    "EncodingError U+C743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC744");
    },
    Error,
    "EncodingError U+C744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC745");
    },
    Error,
    "EncodingError U+C745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC746");
    },
    Error,
    "EncodingError U+C746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC747");
    },
    Error,
    "EncodingError U+C747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC748");
    },
    Error,
    "EncodingError U+C748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC749");
    },
    Error,
    "EncodingError U+C749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC74A");
    },
    Error,
    "EncodingError U+C74A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC74B");
    },
    Error,
    "EncodingError U+C74B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC74C");
    },
    Error,
    "EncodingError U+C74C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC74D");
    },
    Error,
    "EncodingError U+C74D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC74E");
    },
    Error,
    "EncodingError U+C74E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC74F");
    },
    Error,
    "EncodingError U+C74F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC750");
    },
    Error,
    "EncodingError U+C750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC751");
    },
    Error,
    "EncodingError U+C751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC752");
    },
    Error,
    "EncodingError U+C752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC753");
    },
    Error,
    "EncodingError U+C753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC754");
    },
    Error,
    "EncodingError U+C754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC755");
    },
    Error,
    "EncodingError U+C755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC756");
    },
    Error,
    "EncodingError U+C756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC757");
    },
    Error,
    "EncodingError U+C757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC758");
    },
    Error,
    "EncodingError U+C758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC759");
    },
    Error,
    "EncodingError U+C759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC75A");
    },
    Error,
    "EncodingError U+C75A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC75B");
    },
    Error,
    "EncodingError U+C75B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC75C");
    },
    Error,
    "EncodingError U+C75C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC75D");
    },
    Error,
    "EncodingError U+C75D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC75E");
    },
    Error,
    "EncodingError U+C75E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC75F");
    },
    Error,
    "EncodingError U+C75F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC760");
    },
    Error,
    "EncodingError U+C760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC761");
    },
    Error,
    "EncodingError U+C761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC762");
    },
    Error,
    "EncodingError U+C762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC763");
    },
    Error,
    "EncodingError U+C763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC764");
    },
    Error,
    "EncodingError U+C764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC765");
    },
    Error,
    "EncodingError U+C765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC766");
    },
    Error,
    "EncodingError U+C766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC767");
    },
    Error,
    "EncodingError U+C767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC768");
    },
    Error,
    "EncodingError U+C768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC769");
    },
    Error,
    "EncodingError U+C769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC76A");
    },
    Error,
    "EncodingError U+C76A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC76B");
    },
    Error,
    "EncodingError U+C76B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC76C");
    },
    Error,
    "EncodingError U+C76C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC76D");
    },
    Error,
    "EncodingError U+C76D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC76E");
    },
    Error,
    "EncodingError U+C76E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC76F");
    },
    Error,
    "EncodingError U+C76F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC770");
    },
    Error,
    "EncodingError U+C770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC771");
    },
    Error,
    "EncodingError U+C771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC772");
    },
    Error,
    "EncodingError U+C772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC773");
    },
    Error,
    "EncodingError U+C773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC774");
    },
    Error,
    "EncodingError U+C774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC775");
    },
    Error,
    "EncodingError U+C775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC776");
    },
    Error,
    "EncodingError U+C776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC777");
    },
    Error,
    "EncodingError U+C777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC778");
    },
    Error,
    "EncodingError U+C778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC779");
    },
    Error,
    "EncodingError U+C779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC77A");
    },
    Error,
    "EncodingError U+C77A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC77B");
    },
    Error,
    "EncodingError U+C77B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC77C");
    },
    Error,
    "EncodingError U+C77C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC77D");
    },
    Error,
    "EncodingError U+C77D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC77E");
    },
    Error,
    "EncodingError U+C77E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC77F");
    },
    Error,
    "EncodingError U+C77F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC780");
    },
    Error,
    "EncodingError U+C780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC781");
    },
    Error,
    "EncodingError U+C781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC782");
    },
    Error,
    "EncodingError U+C782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC783");
    },
    Error,
    "EncodingError U+C783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC784");
    },
    Error,
    "EncodingError U+C784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC785");
    },
    Error,
    "EncodingError U+C785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC786");
    },
    Error,
    "EncodingError U+C786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC787");
    },
    Error,
    "EncodingError U+C787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC788");
    },
    Error,
    "EncodingError U+C788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC789");
    },
    Error,
    "EncodingError U+C789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC78A");
    },
    Error,
    "EncodingError U+C78A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC78B");
    },
    Error,
    "EncodingError U+C78B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC78C");
    },
    Error,
    "EncodingError U+C78C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC78D");
    },
    Error,
    "EncodingError U+C78D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC78E");
    },
    Error,
    "EncodingError U+C78E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC78F");
    },
    Error,
    "EncodingError U+C78F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC790");
    },
    Error,
    "EncodingError U+C790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC791");
    },
    Error,
    "EncodingError U+C791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC792");
    },
    Error,
    "EncodingError U+C792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC793");
    },
    Error,
    "EncodingError U+C793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC794");
    },
    Error,
    "EncodingError U+C794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC795");
    },
    Error,
    "EncodingError U+C795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC796");
    },
    Error,
    "EncodingError U+C796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC797");
    },
    Error,
    "EncodingError U+C797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC798");
    },
    Error,
    "EncodingError U+C798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC799");
    },
    Error,
    "EncodingError U+C799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC79A");
    },
    Error,
    "EncodingError U+C79A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC79B");
    },
    Error,
    "EncodingError U+C79B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC79C");
    },
    Error,
    "EncodingError U+C79C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC79D");
    },
    Error,
    "EncodingError U+C79D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC79E");
    },
    Error,
    "EncodingError U+C79E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC79F");
    },
    Error,
    "EncodingError U+C79F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A0");
    },
    Error,
    "EncodingError U+C7A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A1");
    },
    Error,
    "EncodingError U+C7A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A2");
    },
    Error,
    "EncodingError U+C7A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A3");
    },
    Error,
    "EncodingError U+C7A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A4");
    },
    Error,
    "EncodingError U+C7A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A5");
    },
    Error,
    "EncodingError U+C7A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A6");
    },
    Error,
    "EncodingError U+C7A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A7");
    },
    Error,
    "EncodingError U+C7A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A8");
    },
    Error,
    "EncodingError U+C7A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7A9");
    },
    Error,
    "EncodingError U+C7A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7AA");
    },
    Error,
    "EncodingError U+C7AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7AB");
    },
    Error,
    "EncodingError U+C7AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7AC");
    },
    Error,
    "EncodingError U+C7AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7AD");
    },
    Error,
    "EncodingError U+C7AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7AE");
    },
    Error,
    "EncodingError U+C7AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7AF");
    },
    Error,
    "EncodingError U+C7AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B0");
    },
    Error,
    "EncodingError U+C7B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B1");
    },
    Error,
    "EncodingError U+C7B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B2");
    },
    Error,
    "EncodingError U+C7B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B3");
    },
    Error,
    "EncodingError U+C7B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B4");
    },
    Error,
    "EncodingError U+C7B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B5");
    },
    Error,
    "EncodingError U+C7B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B6");
    },
    Error,
    "EncodingError U+C7B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B7");
    },
    Error,
    "EncodingError U+C7B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B8");
    },
    Error,
    "EncodingError U+C7B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7B9");
    },
    Error,
    "EncodingError U+C7B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7BA");
    },
    Error,
    "EncodingError U+C7BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7BB");
    },
    Error,
    "EncodingError U+C7BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7BC");
    },
    Error,
    "EncodingError U+C7BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7BD");
    },
    Error,
    "EncodingError U+C7BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7BE");
    },
    Error,
    "EncodingError U+C7BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7BF");
    },
    Error,
    "EncodingError U+C7BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C0");
    },
    Error,
    "EncodingError U+C7C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C1");
    },
    Error,
    "EncodingError U+C7C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C2");
    },
    Error,
    "EncodingError U+C7C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C3");
    },
    Error,
    "EncodingError U+C7C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C4");
    },
    Error,
    "EncodingError U+C7C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C5");
    },
    Error,
    "EncodingError U+C7C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C6");
    },
    Error,
    "EncodingError U+C7C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C7");
    },
    Error,
    "EncodingError U+C7C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C8");
    },
    Error,
    "EncodingError U+C7C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7C9");
    },
    Error,
    "EncodingError U+C7C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7CA");
    },
    Error,
    "EncodingError U+C7CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7CB");
    },
    Error,
    "EncodingError U+C7CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7CC");
    },
    Error,
    "EncodingError U+C7CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7CD");
    },
    Error,
    "EncodingError U+C7CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7CE");
    },
    Error,
    "EncodingError U+C7CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7CF");
    },
    Error,
    "EncodingError U+C7CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D0");
    },
    Error,
    "EncodingError U+C7D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D1");
    },
    Error,
    "EncodingError U+C7D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D2");
    },
    Error,
    "EncodingError U+C7D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D3");
    },
    Error,
    "EncodingError U+C7D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D4");
    },
    Error,
    "EncodingError U+C7D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D5");
    },
    Error,
    "EncodingError U+C7D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D6");
    },
    Error,
    "EncodingError U+C7D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D7");
    },
    Error,
    "EncodingError U+C7D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D8");
    },
    Error,
    "EncodingError U+C7D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7D9");
    },
    Error,
    "EncodingError U+C7D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7DA");
    },
    Error,
    "EncodingError U+C7DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7DB");
    },
    Error,
    "EncodingError U+C7DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7DC");
    },
    Error,
    "EncodingError U+C7DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7DD");
    },
    Error,
    "EncodingError U+C7DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7DE");
    },
    Error,
    "EncodingError U+C7DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7DF");
    },
    Error,
    "EncodingError U+C7DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E0");
    },
    Error,
    "EncodingError U+C7E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E1");
    },
    Error,
    "EncodingError U+C7E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E2");
    },
    Error,
    "EncodingError U+C7E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E3");
    },
    Error,
    "EncodingError U+C7E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E4");
    },
    Error,
    "EncodingError U+C7E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E5");
    },
    Error,
    "EncodingError U+C7E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E6");
    },
    Error,
    "EncodingError U+C7E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E7");
    },
    Error,
    "EncodingError U+C7E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E8");
    },
    Error,
    "EncodingError U+C7E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7E9");
    },
    Error,
    "EncodingError U+C7E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7EA");
    },
    Error,
    "EncodingError U+C7EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7EB");
    },
    Error,
    "EncodingError U+C7EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7EC");
    },
    Error,
    "EncodingError U+C7EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7ED");
    },
    Error,
    "EncodingError U+C7ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7EE");
    },
    Error,
    "EncodingError U+C7EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7EF");
    },
    Error,
    "EncodingError U+C7EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F0");
    },
    Error,
    "EncodingError U+C7F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F1");
    },
    Error,
    "EncodingError U+C7F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F2");
    },
    Error,
    "EncodingError U+C7F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F3");
    },
    Error,
    "EncodingError U+C7F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F4");
    },
    Error,
    "EncodingError U+C7F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F5");
    },
    Error,
    "EncodingError U+C7F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F6");
    },
    Error,
    "EncodingError U+C7F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F7");
    },
    Error,
    "EncodingError U+C7F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F8");
    },
    Error,
    "EncodingError U+C7F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7F9");
    },
    Error,
    "EncodingError U+C7F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7FA");
    },
    Error,
    "EncodingError U+C7FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7FB");
    },
    Error,
    "EncodingError U+C7FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7FC");
    },
    Error,
    "EncodingError U+C7FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7FD");
    },
    Error,
    "EncodingError U+C7FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7FE");
    },
    Error,
    "EncodingError U+C7FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC7FF");
    },
    Error,
    "EncodingError U+C7FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC800");
    },
    Error,
    "EncodingError U+C800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC801");
    },
    Error,
    "EncodingError U+C801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC802");
    },
    Error,
    "EncodingError U+C802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC803");
    },
    Error,
    "EncodingError U+C803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC804");
    },
    Error,
    "EncodingError U+C804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC805");
    },
    Error,
    "EncodingError U+C805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC806");
    },
    Error,
    "EncodingError U+C806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC807");
    },
    Error,
    "EncodingError U+C807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC808");
    },
    Error,
    "EncodingError U+C808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC809");
    },
    Error,
    "EncodingError U+C809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC80A");
    },
    Error,
    "EncodingError U+C80A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC80B");
    },
    Error,
    "EncodingError U+C80B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC80C");
    },
    Error,
    "EncodingError U+C80C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC80D");
    },
    Error,
    "EncodingError U+C80D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC80E");
    },
    Error,
    "EncodingError U+C80E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC80F");
    },
    Error,
    "EncodingError U+C80F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC810");
    },
    Error,
    "EncodingError U+C810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC811");
    },
    Error,
    "EncodingError U+C811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC812");
    },
    Error,
    "EncodingError U+C812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC813");
    },
    Error,
    "EncodingError U+C813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC814");
    },
    Error,
    "EncodingError U+C814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC815");
    },
    Error,
    "EncodingError U+C815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC816");
    },
    Error,
    "EncodingError U+C816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC817");
    },
    Error,
    "EncodingError U+C817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC818");
    },
    Error,
    "EncodingError U+C818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC819");
    },
    Error,
    "EncodingError U+C819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC81A");
    },
    Error,
    "EncodingError U+C81A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC81B");
    },
    Error,
    "EncodingError U+C81B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC81C");
    },
    Error,
    "EncodingError U+C81C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC81D");
    },
    Error,
    "EncodingError U+C81D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC81E");
    },
    Error,
    "EncodingError U+C81E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC81F");
    },
    Error,
    "EncodingError U+C81F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC820");
    },
    Error,
    "EncodingError U+C820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC821");
    },
    Error,
    "EncodingError U+C821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC822");
    },
    Error,
    "EncodingError U+C822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC823");
    },
    Error,
    "EncodingError U+C823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC824");
    },
    Error,
    "EncodingError U+C824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC825");
    },
    Error,
    "EncodingError U+C825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC826");
    },
    Error,
    "EncodingError U+C826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC827");
    },
    Error,
    "EncodingError U+C827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC828");
    },
    Error,
    "EncodingError U+C828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC829");
    },
    Error,
    "EncodingError U+C829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC82A");
    },
    Error,
    "EncodingError U+C82A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC82B");
    },
    Error,
    "EncodingError U+C82B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC82C");
    },
    Error,
    "EncodingError U+C82C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC82D");
    },
    Error,
    "EncodingError U+C82D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC82E");
    },
    Error,
    "EncodingError U+C82E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC82F");
    },
    Error,
    "EncodingError U+C82F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC830");
    },
    Error,
    "EncodingError U+C830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC831");
    },
    Error,
    "EncodingError U+C831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC832");
    },
    Error,
    "EncodingError U+C832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC833");
    },
    Error,
    "EncodingError U+C833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC834");
    },
    Error,
    "EncodingError U+C834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC835");
    },
    Error,
    "EncodingError U+C835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC836");
    },
    Error,
    "EncodingError U+C836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC837");
    },
    Error,
    "EncodingError U+C837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC838");
    },
    Error,
    "EncodingError U+C838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC839");
    },
    Error,
    "EncodingError U+C839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC83A");
    },
    Error,
    "EncodingError U+C83A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC83B");
    },
    Error,
    "EncodingError U+C83B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC83C");
    },
    Error,
    "EncodingError U+C83C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC83D");
    },
    Error,
    "EncodingError U+C83D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC83E");
    },
    Error,
    "EncodingError U+C83E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC83F");
    },
    Error,
    "EncodingError U+C83F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC840");
    },
    Error,
    "EncodingError U+C840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC841");
    },
    Error,
    "EncodingError U+C841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC842");
    },
    Error,
    "EncodingError U+C842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC843");
    },
    Error,
    "EncodingError U+C843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC844");
    },
    Error,
    "EncodingError U+C844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC845");
    },
    Error,
    "EncodingError U+C845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC846");
    },
    Error,
    "EncodingError U+C846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC847");
    },
    Error,
    "EncodingError U+C847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC848");
    },
    Error,
    "EncodingError U+C848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC849");
    },
    Error,
    "EncodingError U+C849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC84A");
    },
    Error,
    "EncodingError U+C84A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC84B");
    },
    Error,
    "EncodingError U+C84B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC84C");
    },
    Error,
    "EncodingError U+C84C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC84D");
    },
    Error,
    "EncodingError U+C84D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC84E");
    },
    Error,
    "EncodingError U+C84E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC84F");
    },
    Error,
    "EncodingError U+C84F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC850");
    },
    Error,
    "EncodingError U+C850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC851");
    },
    Error,
    "EncodingError U+C851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC852");
    },
    Error,
    "EncodingError U+C852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC853");
    },
    Error,
    "EncodingError U+C853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC854");
    },
    Error,
    "EncodingError U+C854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC855");
    },
    Error,
    "EncodingError U+C855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC856");
    },
    Error,
    "EncodingError U+C856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC857");
    },
    Error,
    "EncodingError U+C857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC858");
    },
    Error,
    "EncodingError U+C858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC859");
    },
    Error,
    "EncodingError U+C859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC85A");
    },
    Error,
    "EncodingError U+C85A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC85B");
    },
    Error,
    "EncodingError U+C85B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC85C");
    },
    Error,
    "EncodingError U+C85C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC85D");
    },
    Error,
    "EncodingError U+C85D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC85E");
    },
    Error,
    "EncodingError U+C85E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC85F");
    },
    Error,
    "EncodingError U+C85F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC860");
    },
    Error,
    "EncodingError U+C860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC861");
    },
    Error,
    "EncodingError U+C861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC862");
    },
    Error,
    "EncodingError U+C862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC863");
    },
    Error,
    "EncodingError U+C863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC864");
    },
    Error,
    "EncodingError U+C864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC865");
    },
    Error,
    "EncodingError U+C865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC866");
    },
    Error,
    "EncodingError U+C866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC867");
    },
    Error,
    "EncodingError U+C867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC868");
    },
    Error,
    "EncodingError U+C868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC869");
    },
    Error,
    "EncodingError U+C869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC86A");
    },
    Error,
    "EncodingError U+C86A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC86B");
    },
    Error,
    "EncodingError U+C86B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC86C");
    },
    Error,
    "EncodingError U+C86C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC86D");
    },
    Error,
    "EncodingError U+C86D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC86E");
    },
    Error,
    "EncodingError U+C86E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC86F");
    },
    Error,
    "EncodingError U+C86F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC870");
    },
    Error,
    "EncodingError U+C870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC871");
    },
    Error,
    "EncodingError U+C871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC872");
    },
    Error,
    "EncodingError U+C872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC873");
    },
    Error,
    "EncodingError U+C873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC874");
    },
    Error,
    "EncodingError U+C874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC875");
    },
    Error,
    "EncodingError U+C875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC876");
    },
    Error,
    "EncodingError U+C876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC877");
    },
    Error,
    "EncodingError U+C877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC878");
    },
    Error,
    "EncodingError U+C878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC879");
    },
    Error,
    "EncodingError U+C879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC87A");
    },
    Error,
    "EncodingError U+C87A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC87B");
    },
    Error,
    "EncodingError U+C87B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC87C");
    },
    Error,
    "EncodingError U+C87C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC87D");
    },
    Error,
    "EncodingError U+C87D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC87E");
    },
    Error,
    "EncodingError U+C87E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC87F");
    },
    Error,
    "EncodingError U+C87F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC880");
    },
    Error,
    "EncodingError U+C880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC881");
    },
    Error,
    "EncodingError U+C881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC882");
    },
    Error,
    "EncodingError U+C882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC883");
    },
    Error,
    "EncodingError U+C883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC884");
    },
    Error,
    "EncodingError U+C884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC885");
    },
    Error,
    "EncodingError U+C885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC886");
    },
    Error,
    "EncodingError U+C886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC887");
    },
    Error,
    "EncodingError U+C887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC888");
    },
    Error,
    "EncodingError U+C888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC889");
    },
    Error,
    "EncodingError U+C889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC88A");
    },
    Error,
    "EncodingError U+C88A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC88B");
    },
    Error,
    "EncodingError U+C88B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC88C");
    },
    Error,
    "EncodingError U+C88C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC88D");
    },
    Error,
    "EncodingError U+C88D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC88E");
    },
    Error,
    "EncodingError U+C88E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC88F");
    },
    Error,
    "EncodingError U+C88F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC890");
    },
    Error,
    "EncodingError U+C890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC891");
    },
    Error,
    "EncodingError U+C891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC892");
    },
    Error,
    "EncodingError U+C892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC893");
    },
    Error,
    "EncodingError U+C893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC894");
    },
    Error,
    "EncodingError U+C894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC895");
    },
    Error,
    "EncodingError U+C895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC896");
    },
    Error,
    "EncodingError U+C896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC897");
    },
    Error,
    "EncodingError U+C897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC898");
    },
    Error,
    "EncodingError U+C898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC899");
    },
    Error,
    "EncodingError U+C899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC89A");
    },
    Error,
    "EncodingError U+C89A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC89B");
    },
    Error,
    "EncodingError U+C89B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC89C");
    },
    Error,
    "EncodingError U+C89C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC89D");
    },
    Error,
    "EncodingError U+C89D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC89E");
    },
    Error,
    "EncodingError U+C89E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC89F");
    },
    Error,
    "EncodingError U+C89F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A0");
    },
    Error,
    "EncodingError U+C8A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A1");
    },
    Error,
    "EncodingError U+C8A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A2");
    },
    Error,
    "EncodingError U+C8A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A3");
    },
    Error,
    "EncodingError U+C8A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A4");
    },
    Error,
    "EncodingError U+C8A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A5");
    },
    Error,
    "EncodingError U+C8A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A6");
    },
    Error,
    "EncodingError U+C8A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A7");
    },
    Error,
    "EncodingError U+C8A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A8");
    },
    Error,
    "EncodingError U+C8A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8A9");
    },
    Error,
    "EncodingError U+C8A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8AA");
    },
    Error,
    "EncodingError U+C8AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8AB");
    },
    Error,
    "EncodingError U+C8AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8AC");
    },
    Error,
    "EncodingError U+C8AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8AD");
    },
    Error,
    "EncodingError U+C8AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8AE");
    },
    Error,
    "EncodingError U+C8AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8AF");
    },
    Error,
    "EncodingError U+C8AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B0");
    },
    Error,
    "EncodingError U+C8B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B1");
    },
    Error,
    "EncodingError U+C8B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B2");
    },
    Error,
    "EncodingError U+C8B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B3");
    },
    Error,
    "EncodingError U+C8B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B4");
    },
    Error,
    "EncodingError U+C8B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B5");
    },
    Error,
    "EncodingError U+C8B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B6");
    },
    Error,
    "EncodingError U+C8B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B7");
    },
    Error,
    "EncodingError U+C8B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B8");
    },
    Error,
    "EncodingError U+C8B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8B9");
    },
    Error,
    "EncodingError U+C8B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8BA");
    },
    Error,
    "EncodingError U+C8BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8BB");
    },
    Error,
    "EncodingError U+C8BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8BC");
    },
    Error,
    "EncodingError U+C8BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8BD");
    },
    Error,
    "EncodingError U+C8BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8BE");
    },
    Error,
    "EncodingError U+C8BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8BF");
    },
    Error,
    "EncodingError U+C8BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C0");
    },
    Error,
    "EncodingError U+C8C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C1");
    },
    Error,
    "EncodingError U+C8C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C2");
    },
    Error,
    "EncodingError U+C8C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C3");
    },
    Error,
    "EncodingError U+C8C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C4");
    },
    Error,
    "EncodingError U+C8C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C5");
    },
    Error,
    "EncodingError U+C8C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C6");
    },
    Error,
    "EncodingError U+C8C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C7");
    },
    Error,
    "EncodingError U+C8C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C8");
    },
    Error,
    "EncodingError U+C8C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8C9");
    },
    Error,
    "EncodingError U+C8C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8CA");
    },
    Error,
    "EncodingError U+C8CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8CB");
    },
    Error,
    "EncodingError U+C8CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8CC");
    },
    Error,
    "EncodingError U+C8CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8CD");
    },
    Error,
    "EncodingError U+C8CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8CE");
    },
    Error,
    "EncodingError U+C8CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8CF");
    },
    Error,
    "EncodingError U+C8CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D0");
    },
    Error,
    "EncodingError U+C8D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D1");
    },
    Error,
    "EncodingError U+C8D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D2");
    },
    Error,
    "EncodingError U+C8D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D3");
    },
    Error,
    "EncodingError U+C8D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D4");
    },
    Error,
    "EncodingError U+C8D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D5");
    },
    Error,
    "EncodingError U+C8D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D6");
    },
    Error,
    "EncodingError U+C8D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D7");
    },
    Error,
    "EncodingError U+C8D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D8");
    },
    Error,
    "EncodingError U+C8D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8D9");
    },
    Error,
    "EncodingError U+C8D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8DA");
    },
    Error,
    "EncodingError U+C8DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8DB");
    },
    Error,
    "EncodingError U+C8DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8DC");
    },
    Error,
    "EncodingError U+C8DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8DD");
    },
    Error,
    "EncodingError U+C8DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8DE");
    },
    Error,
    "EncodingError U+C8DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8DF");
    },
    Error,
    "EncodingError U+C8DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E0");
    },
    Error,
    "EncodingError U+C8E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E1");
    },
    Error,
    "EncodingError U+C8E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E2");
    },
    Error,
    "EncodingError U+C8E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E3");
    },
    Error,
    "EncodingError U+C8E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E4");
    },
    Error,
    "EncodingError U+C8E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E5");
    },
    Error,
    "EncodingError U+C8E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E6");
    },
    Error,
    "EncodingError U+C8E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E7");
    },
    Error,
    "EncodingError U+C8E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E8");
    },
    Error,
    "EncodingError U+C8E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8E9");
    },
    Error,
    "EncodingError U+C8E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8EA");
    },
    Error,
    "EncodingError U+C8EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8EB");
    },
    Error,
    "EncodingError U+C8EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8EC");
    },
    Error,
    "EncodingError U+C8EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8ED");
    },
    Error,
    "EncodingError U+C8ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8EE");
    },
    Error,
    "EncodingError U+C8EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8EF");
    },
    Error,
    "EncodingError U+C8EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F0");
    },
    Error,
    "EncodingError U+C8F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F1");
    },
    Error,
    "EncodingError U+C8F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F2");
    },
    Error,
    "EncodingError U+C8F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F3");
    },
    Error,
    "EncodingError U+C8F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F4");
    },
    Error,
    "EncodingError U+C8F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F5");
    },
    Error,
    "EncodingError U+C8F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F6");
    },
    Error,
    "EncodingError U+C8F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F7");
    },
    Error,
    "EncodingError U+C8F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F8");
    },
    Error,
    "EncodingError U+C8F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8F9");
    },
    Error,
    "EncodingError U+C8F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8FA");
    },
    Error,
    "EncodingError U+C8FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8FB");
    },
    Error,
    "EncodingError U+C8FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8FC");
    },
    Error,
    "EncodingError U+C8FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8FD");
    },
    Error,
    "EncodingError U+C8FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8FE");
    },
    Error,
    "EncodingError U+C8FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC8FF");
    },
    Error,
    "EncodingError U+C8FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC900");
    },
    Error,
    "EncodingError U+C900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC901");
    },
    Error,
    "EncodingError U+C901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC902");
    },
    Error,
    "EncodingError U+C902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC903");
    },
    Error,
    "EncodingError U+C903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC904");
    },
    Error,
    "EncodingError U+C904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC905");
    },
    Error,
    "EncodingError U+C905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC906");
    },
    Error,
    "EncodingError U+C906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC907");
    },
    Error,
    "EncodingError U+C907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC908");
    },
    Error,
    "EncodingError U+C908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC909");
    },
    Error,
    "EncodingError U+C909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC90A");
    },
    Error,
    "EncodingError U+C90A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC90B");
    },
    Error,
    "EncodingError U+C90B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC90C");
    },
    Error,
    "EncodingError U+C90C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC90D");
    },
    Error,
    "EncodingError U+C90D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC90E");
    },
    Error,
    "EncodingError U+C90E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC90F");
    },
    Error,
    "EncodingError U+C90F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC910");
    },
    Error,
    "EncodingError U+C910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC911");
    },
    Error,
    "EncodingError U+C911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC912");
    },
    Error,
    "EncodingError U+C912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC913");
    },
    Error,
    "EncodingError U+C913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC914");
    },
    Error,
    "EncodingError U+C914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC915");
    },
    Error,
    "EncodingError U+C915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC916");
    },
    Error,
    "EncodingError U+C916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC917");
    },
    Error,
    "EncodingError U+C917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC918");
    },
    Error,
    "EncodingError U+C918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC919");
    },
    Error,
    "EncodingError U+C919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC91A");
    },
    Error,
    "EncodingError U+C91A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC91B");
    },
    Error,
    "EncodingError U+C91B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC91C");
    },
    Error,
    "EncodingError U+C91C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC91D");
    },
    Error,
    "EncodingError U+C91D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC91E");
    },
    Error,
    "EncodingError U+C91E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC91F");
    },
    Error,
    "EncodingError U+C91F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC920");
    },
    Error,
    "EncodingError U+C920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC921");
    },
    Error,
    "EncodingError U+C921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC922");
    },
    Error,
    "EncodingError U+C922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC923");
    },
    Error,
    "EncodingError U+C923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC924");
    },
    Error,
    "EncodingError U+C924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC925");
    },
    Error,
    "EncodingError U+C925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC926");
    },
    Error,
    "EncodingError U+C926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC927");
    },
    Error,
    "EncodingError U+C927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC928");
    },
    Error,
    "EncodingError U+C928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC929");
    },
    Error,
    "EncodingError U+C929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC92A");
    },
    Error,
    "EncodingError U+C92A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC92B");
    },
    Error,
    "EncodingError U+C92B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC92C");
    },
    Error,
    "EncodingError U+C92C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC92D");
    },
    Error,
    "EncodingError U+C92D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC92E");
    },
    Error,
    "EncodingError U+C92E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC92F");
    },
    Error,
    "EncodingError U+C92F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC930");
    },
    Error,
    "EncodingError U+C930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC931");
    },
    Error,
    "EncodingError U+C931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC932");
    },
    Error,
    "EncodingError U+C932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC933");
    },
    Error,
    "EncodingError U+C933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC934");
    },
    Error,
    "EncodingError U+C934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC935");
    },
    Error,
    "EncodingError U+C935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC936");
    },
    Error,
    "EncodingError U+C936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC937");
    },
    Error,
    "EncodingError U+C937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC938");
    },
    Error,
    "EncodingError U+C938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC939");
    },
    Error,
    "EncodingError U+C939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC93A");
    },
    Error,
    "EncodingError U+C93A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC93B");
    },
    Error,
    "EncodingError U+C93B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC93C");
    },
    Error,
    "EncodingError U+C93C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC93D");
    },
    Error,
    "EncodingError U+C93D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC93E");
    },
    Error,
    "EncodingError U+C93E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC93F");
    },
    Error,
    "EncodingError U+C93F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC940");
    },
    Error,
    "EncodingError U+C940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC941");
    },
    Error,
    "EncodingError U+C941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC942");
    },
    Error,
    "EncodingError U+C942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC943");
    },
    Error,
    "EncodingError U+C943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC944");
    },
    Error,
    "EncodingError U+C944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC945");
    },
    Error,
    "EncodingError U+C945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC946");
    },
    Error,
    "EncodingError U+C946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC947");
    },
    Error,
    "EncodingError U+C947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC948");
    },
    Error,
    "EncodingError U+C948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC949");
    },
    Error,
    "EncodingError U+C949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC94A");
    },
    Error,
    "EncodingError U+C94A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC94B");
    },
    Error,
    "EncodingError U+C94B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC94C");
    },
    Error,
    "EncodingError U+C94C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC94D");
    },
    Error,
    "EncodingError U+C94D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC94E");
    },
    Error,
    "EncodingError U+C94E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC94F");
    },
    Error,
    "EncodingError U+C94F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC950");
    },
    Error,
    "EncodingError U+C950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC951");
    },
    Error,
    "EncodingError U+C951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC952");
    },
    Error,
    "EncodingError U+C952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC953");
    },
    Error,
    "EncodingError U+C953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC954");
    },
    Error,
    "EncodingError U+C954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC955");
    },
    Error,
    "EncodingError U+C955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC956");
    },
    Error,
    "EncodingError U+C956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC957");
    },
    Error,
    "EncodingError U+C957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC958");
    },
    Error,
    "EncodingError U+C958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC959");
    },
    Error,
    "EncodingError U+C959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC95A");
    },
    Error,
    "EncodingError U+C95A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC95B");
    },
    Error,
    "EncodingError U+C95B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC95C");
    },
    Error,
    "EncodingError U+C95C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC95D");
    },
    Error,
    "EncodingError U+C95D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC95E");
    },
    Error,
    "EncodingError U+C95E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC95F");
    },
    Error,
    "EncodingError U+C95F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC960");
    },
    Error,
    "EncodingError U+C960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC961");
    },
    Error,
    "EncodingError U+C961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC962");
    },
    Error,
    "EncodingError U+C962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC963");
    },
    Error,
    "EncodingError U+C963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC964");
    },
    Error,
    "EncodingError U+C964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC965");
    },
    Error,
    "EncodingError U+C965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC966");
    },
    Error,
    "EncodingError U+C966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC967");
    },
    Error,
    "EncodingError U+C967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC968");
    },
    Error,
    "EncodingError U+C968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC969");
    },
    Error,
    "EncodingError U+C969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC96A");
    },
    Error,
    "EncodingError U+C96A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC96B");
    },
    Error,
    "EncodingError U+C96B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC96C");
    },
    Error,
    "EncodingError U+C96C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC96D");
    },
    Error,
    "EncodingError U+C96D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC96E");
    },
    Error,
    "EncodingError U+C96E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC96F");
    },
    Error,
    "EncodingError U+C96F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC970");
    },
    Error,
    "EncodingError U+C970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC971");
    },
    Error,
    "EncodingError U+C971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC972");
    },
    Error,
    "EncodingError U+C972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC973");
    },
    Error,
    "EncodingError U+C973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC974");
    },
    Error,
    "EncodingError U+C974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC975");
    },
    Error,
    "EncodingError U+C975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC976");
    },
    Error,
    "EncodingError U+C976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC977");
    },
    Error,
    "EncodingError U+C977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC978");
    },
    Error,
    "EncodingError U+C978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC979");
    },
    Error,
    "EncodingError U+C979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC97A");
    },
    Error,
    "EncodingError U+C97A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC97B");
    },
    Error,
    "EncodingError U+C97B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC97C");
    },
    Error,
    "EncodingError U+C97C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC97D");
    },
    Error,
    "EncodingError U+C97D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC97E");
    },
    Error,
    "EncodingError U+C97E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC97F");
    },
    Error,
    "EncodingError U+C97F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC980");
    },
    Error,
    "EncodingError U+C980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC981");
    },
    Error,
    "EncodingError U+C981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC982");
    },
    Error,
    "EncodingError U+C982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC983");
    },
    Error,
    "EncodingError U+C983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC984");
    },
    Error,
    "EncodingError U+C984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC985");
    },
    Error,
    "EncodingError U+C985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC986");
    },
    Error,
    "EncodingError U+C986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC987");
    },
    Error,
    "EncodingError U+C987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC988");
    },
    Error,
    "EncodingError U+C988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC989");
    },
    Error,
    "EncodingError U+C989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC98A");
    },
    Error,
    "EncodingError U+C98A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC98B");
    },
    Error,
    "EncodingError U+C98B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC98C");
    },
    Error,
    "EncodingError U+C98C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC98D");
    },
    Error,
    "EncodingError U+C98D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC98E");
    },
    Error,
    "EncodingError U+C98E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC98F");
    },
    Error,
    "EncodingError U+C98F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC990");
    },
    Error,
    "EncodingError U+C990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC991");
    },
    Error,
    "EncodingError U+C991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC992");
    },
    Error,
    "EncodingError U+C992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC993");
    },
    Error,
    "EncodingError U+C993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC994");
    },
    Error,
    "EncodingError U+C994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC995");
    },
    Error,
    "EncodingError U+C995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC996");
    },
    Error,
    "EncodingError U+C996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC997");
    },
    Error,
    "EncodingError U+C997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC998");
    },
    Error,
    "EncodingError U+C998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC999");
    },
    Error,
    "EncodingError U+C999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC99A");
    },
    Error,
    "EncodingError U+C99A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC99B");
    },
    Error,
    "EncodingError U+C99B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC99C");
    },
    Error,
    "EncodingError U+C99C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC99D");
    },
    Error,
    "EncodingError U+C99D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC99E");
    },
    Error,
    "EncodingError U+C99E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC99F");
    },
    Error,
    "EncodingError U+C99F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A0");
    },
    Error,
    "EncodingError U+C9A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A1");
    },
    Error,
    "EncodingError U+C9A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A2");
    },
    Error,
    "EncodingError U+C9A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A3");
    },
    Error,
    "EncodingError U+C9A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A4");
    },
    Error,
    "EncodingError U+C9A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A5");
    },
    Error,
    "EncodingError U+C9A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A6");
    },
    Error,
    "EncodingError U+C9A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A7");
    },
    Error,
    "EncodingError U+C9A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A8");
    },
    Error,
    "EncodingError U+C9A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9A9");
    },
    Error,
    "EncodingError U+C9A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9AA");
    },
    Error,
    "EncodingError U+C9AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9AB");
    },
    Error,
    "EncodingError U+C9AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9AC");
    },
    Error,
    "EncodingError U+C9AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9AD");
    },
    Error,
    "EncodingError U+C9AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9AE");
    },
    Error,
    "EncodingError U+C9AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9AF");
    },
    Error,
    "EncodingError U+C9AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B0");
    },
    Error,
    "EncodingError U+C9B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B1");
    },
    Error,
    "EncodingError U+C9B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B2");
    },
    Error,
    "EncodingError U+C9B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B3");
    },
    Error,
    "EncodingError U+C9B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B4");
    },
    Error,
    "EncodingError U+C9B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B5");
    },
    Error,
    "EncodingError U+C9B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B6");
    },
    Error,
    "EncodingError U+C9B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B7");
    },
    Error,
    "EncodingError U+C9B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B8");
    },
    Error,
    "EncodingError U+C9B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9B9");
    },
    Error,
    "EncodingError U+C9B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9BA");
    },
    Error,
    "EncodingError U+C9BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9BB");
    },
    Error,
    "EncodingError U+C9BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9BC");
    },
    Error,
    "EncodingError U+C9BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9BD");
    },
    Error,
    "EncodingError U+C9BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9BE");
    },
    Error,
    "EncodingError U+C9BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9BF");
    },
    Error,
    "EncodingError U+C9BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C0");
    },
    Error,
    "EncodingError U+C9C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C1");
    },
    Error,
    "EncodingError U+C9C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C2");
    },
    Error,
    "EncodingError U+C9C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C3");
    },
    Error,
    "EncodingError U+C9C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C4");
    },
    Error,
    "EncodingError U+C9C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C5");
    },
    Error,
    "EncodingError U+C9C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C6");
    },
    Error,
    "EncodingError U+C9C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C7");
    },
    Error,
    "EncodingError U+C9C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C8");
    },
    Error,
    "EncodingError U+C9C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9C9");
    },
    Error,
    "EncodingError U+C9C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9CA");
    },
    Error,
    "EncodingError U+C9CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9CB");
    },
    Error,
    "EncodingError U+C9CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9CC");
    },
    Error,
    "EncodingError U+C9CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9CD");
    },
    Error,
    "EncodingError U+C9CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9CE");
    },
    Error,
    "EncodingError U+C9CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9CF");
    },
    Error,
    "EncodingError U+C9CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D0");
    },
    Error,
    "EncodingError U+C9D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D1");
    },
    Error,
    "EncodingError U+C9D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D2");
    },
    Error,
    "EncodingError U+C9D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D3");
    },
    Error,
    "EncodingError U+C9D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D4");
    },
    Error,
    "EncodingError U+C9D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D5");
    },
    Error,
    "EncodingError U+C9D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D6");
    },
    Error,
    "EncodingError U+C9D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D7");
    },
    Error,
    "EncodingError U+C9D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D8");
    },
    Error,
    "EncodingError U+C9D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9D9");
    },
    Error,
    "EncodingError U+C9D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9DA");
    },
    Error,
    "EncodingError U+C9DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9DB");
    },
    Error,
    "EncodingError U+C9DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9DC");
    },
    Error,
    "EncodingError U+C9DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9DD");
    },
    Error,
    "EncodingError U+C9DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9DE");
    },
    Error,
    "EncodingError U+C9DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9DF");
    },
    Error,
    "EncodingError U+C9DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E0");
    },
    Error,
    "EncodingError U+C9E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E1");
    },
    Error,
    "EncodingError U+C9E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E2");
    },
    Error,
    "EncodingError U+C9E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E3");
    },
    Error,
    "EncodingError U+C9E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E4");
    },
    Error,
    "EncodingError U+C9E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E5");
    },
    Error,
    "EncodingError U+C9E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E6");
    },
    Error,
    "EncodingError U+C9E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E7");
    },
    Error,
    "EncodingError U+C9E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E8");
    },
    Error,
    "EncodingError U+C9E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9E9");
    },
    Error,
    "EncodingError U+C9E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9EA");
    },
    Error,
    "EncodingError U+C9EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9EB");
    },
    Error,
    "EncodingError U+C9EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9EC");
    },
    Error,
    "EncodingError U+C9EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9ED");
    },
    Error,
    "EncodingError U+C9ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9EE");
    },
    Error,
    "EncodingError U+C9EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9EF");
    },
    Error,
    "EncodingError U+C9EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F0");
    },
    Error,
    "EncodingError U+C9F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F1");
    },
    Error,
    "EncodingError U+C9F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F2");
    },
    Error,
    "EncodingError U+C9F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F3");
    },
    Error,
    "EncodingError U+C9F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F4");
    },
    Error,
    "EncodingError U+C9F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F5");
    },
    Error,
    "EncodingError U+C9F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F6");
    },
    Error,
    "EncodingError U+C9F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F7");
    },
    Error,
    "EncodingError U+C9F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F8");
    },
    Error,
    "EncodingError U+C9F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9F9");
    },
    Error,
    "EncodingError U+C9F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9FA");
    },
    Error,
    "EncodingError U+C9FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9FB");
    },
    Error,
    "EncodingError U+C9FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9FC");
    },
    Error,
    "EncodingError U+C9FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9FD");
    },
    Error,
    "EncodingError U+C9FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9FE");
    },
    Error,
    "EncodingError U+C9FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uC9FF");
    },
    Error,
    "EncodingError U+C9FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA00");
    },
    Error,
    "EncodingError U+CA00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA01");
    },
    Error,
    "EncodingError U+CA01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA02");
    },
    Error,
    "EncodingError U+CA02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA03");
    },
    Error,
    "EncodingError U+CA03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA04");
    },
    Error,
    "EncodingError U+CA04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA05");
    },
    Error,
    "EncodingError U+CA05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA06");
    },
    Error,
    "EncodingError U+CA06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA07");
    },
    Error,
    "EncodingError U+CA07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA08");
    },
    Error,
    "EncodingError U+CA08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA09");
    },
    Error,
    "EncodingError U+CA09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA0A");
    },
    Error,
    "EncodingError U+CA0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA0B");
    },
    Error,
    "EncodingError U+CA0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA0C");
    },
    Error,
    "EncodingError U+CA0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA0D");
    },
    Error,
    "EncodingError U+CA0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA0E");
    },
    Error,
    "EncodingError U+CA0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA0F");
    },
    Error,
    "EncodingError U+CA0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA10");
    },
    Error,
    "EncodingError U+CA10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA11");
    },
    Error,
    "EncodingError U+CA11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA12");
    },
    Error,
    "EncodingError U+CA12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA13");
    },
    Error,
    "EncodingError U+CA13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA14");
    },
    Error,
    "EncodingError U+CA14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA15");
    },
    Error,
    "EncodingError U+CA15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA16");
    },
    Error,
    "EncodingError U+CA16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA17");
    },
    Error,
    "EncodingError U+CA17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA18");
    },
    Error,
    "EncodingError U+CA18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA19");
    },
    Error,
    "EncodingError U+CA19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA1A");
    },
    Error,
    "EncodingError U+CA1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA1B");
    },
    Error,
    "EncodingError U+CA1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA1C");
    },
    Error,
    "EncodingError U+CA1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA1D");
    },
    Error,
    "EncodingError U+CA1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA1E");
    },
    Error,
    "EncodingError U+CA1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA1F");
    },
    Error,
    "EncodingError U+CA1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA20");
    },
    Error,
    "EncodingError U+CA20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA21");
    },
    Error,
    "EncodingError U+CA21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA22");
    },
    Error,
    "EncodingError U+CA22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA23");
    },
    Error,
    "EncodingError U+CA23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA24");
    },
    Error,
    "EncodingError U+CA24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA25");
    },
    Error,
    "EncodingError U+CA25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA26");
    },
    Error,
    "EncodingError U+CA26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA27");
    },
    Error,
    "EncodingError U+CA27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA28");
    },
    Error,
    "EncodingError U+CA28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA29");
    },
    Error,
    "EncodingError U+CA29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA2A");
    },
    Error,
    "EncodingError U+CA2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA2B");
    },
    Error,
    "EncodingError U+CA2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA2C");
    },
    Error,
    "EncodingError U+CA2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA2D");
    },
    Error,
    "EncodingError U+CA2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA2E");
    },
    Error,
    "EncodingError U+CA2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA2F");
    },
    Error,
    "EncodingError U+CA2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA30");
    },
    Error,
    "EncodingError U+CA30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA31");
    },
    Error,
    "EncodingError U+CA31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA32");
    },
    Error,
    "EncodingError U+CA32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA33");
    },
    Error,
    "EncodingError U+CA33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA34");
    },
    Error,
    "EncodingError U+CA34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA35");
    },
    Error,
    "EncodingError U+CA35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA36");
    },
    Error,
    "EncodingError U+CA36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA37");
    },
    Error,
    "EncodingError U+CA37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA38");
    },
    Error,
    "EncodingError U+CA38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA39");
    },
    Error,
    "EncodingError U+CA39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA3A");
    },
    Error,
    "EncodingError U+CA3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA3B");
    },
    Error,
    "EncodingError U+CA3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA3C");
    },
    Error,
    "EncodingError U+CA3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA3D");
    },
    Error,
    "EncodingError U+CA3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA3E");
    },
    Error,
    "EncodingError U+CA3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA3F");
    },
    Error,
    "EncodingError U+CA3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA40");
    },
    Error,
    "EncodingError U+CA40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA41");
    },
    Error,
    "EncodingError U+CA41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA42");
    },
    Error,
    "EncodingError U+CA42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA43");
    },
    Error,
    "EncodingError U+CA43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA44");
    },
    Error,
    "EncodingError U+CA44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA45");
    },
    Error,
    "EncodingError U+CA45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA46");
    },
    Error,
    "EncodingError U+CA46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA47");
    },
    Error,
    "EncodingError U+CA47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA48");
    },
    Error,
    "EncodingError U+CA48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA49");
    },
    Error,
    "EncodingError U+CA49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA4A");
    },
    Error,
    "EncodingError U+CA4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA4B");
    },
    Error,
    "EncodingError U+CA4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA4C");
    },
    Error,
    "EncodingError U+CA4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA4D");
    },
    Error,
    "EncodingError U+CA4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA4E");
    },
    Error,
    "EncodingError U+CA4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA4F");
    },
    Error,
    "EncodingError U+CA4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA50");
    },
    Error,
    "EncodingError U+CA50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA51");
    },
    Error,
    "EncodingError U+CA51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA52");
    },
    Error,
    "EncodingError U+CA52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA53");
    },
    Error,
    "EncodingError U+CA53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA54");
    },
    Error,
    "EncodingError U+CA54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA55");
    },
    Error,
    "EncodingError U+CA55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA56");
    },
    Error,
    "EncodingError U+CA56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA57");
    },
    Error,
    "EncodingError U+CA57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA58");
    },
    Error,
    "EncodingError U+CA58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA59");
    },
    Error,
    "EncodingError U+CA59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA5A");
    },
    Error,
    "EncodingError U+CA5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA5B");
    },
    Error,
    "EncodingError U+CA5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA5C");
    },
    Error,
    "EncodingError U+CA5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA5D");
    },
    Error,
    "EncodingError U+CA5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA5E");
    },
    Error,
    "EncodingError U+CA5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA5F");
    },
    Error,
    "EncodingError U+CA5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA60");
    },
    Error,
    "EncodingError U+CA60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA61");
    },
    Error,
    "EncodingError U+CA61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA62");
    },
    Error,
    "EncodingError U+CA62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA63");
    },
    Error,
    "EncodingError U+CA63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA64");
    },
    Error,
    "EncodingError U+CA64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA65");
    },
    Error,
    "EncodingError U+CA65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA66");
    },
    Error,
    "EncodingError U+CA66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA67");
    },
    Error,
    "EncodingError U+CA67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA68");
    },
    Error,
    "EncodingError U+CA68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA69");
    },
    Error,
    "EncodingError U+CA69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA6A");
    },
    Error,
    "EncodingError U+CA6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA6B");
    },
    Error,
    "EncodingError U+CA6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA6C");
    },
    Error,
    "EncodingError U+CA6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA6D");
    },
    Error,
    "EncodingError U+CA6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA6E");
    },
    Error,
    "EncodingError U+CA6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA6F");
    },
    Error,
    "EncodingError U+CA6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA70");
    },
    Error,
    "EncodingError U+CA70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA71");
    },
    Error,
    "EncodingError U+CA71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA72");
    },
    Error,
    "EncodingError U+CA72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA73");
    },
    Error,
    "EncodingError U+CA73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA74");
    },
    Error,
    "EncodingError U+CA74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA75");
    },
    Error,
    "EncodingError U+CA75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA76");
    },
    Error,
    "EncodingError U+CA76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA77");
    },
    Error,
    "EncodingError U+CA77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA78");
    },
    Error,
    "EncodingError U+CA78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA79");
    },
    Error,
    "EncodingError U+CA79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA7A");
    },
    Error,
    "EncodingError U+CA7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA7B");
    },
    Error,
    "EncodingError U+CA7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA7C");
    },
    Error,
    "EncodingError U+CA7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA7D");
    },
    Error,
    "EncodingError U+CA7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA7E");
    },
    Error,
    "EncodingError U+CA7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA7F");
    },
    Error,
    "EncodingError U+CA7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA80");
    },
    Error,
    "EncodingError U+CA80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA81");
    },
    Error,
    "EncodingError U+CA81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA82");
    },
    Error,
    "EncodingError U+CA82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA83");
    },
    Error,
    "EncodingError U+CA83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA84");
    },
    Error,
    "EncodingError U+CA84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA85");
    },
    Error,
    "EncodingError U+CA85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA86");
    },
    Error,
    "EncodingError U+CA86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA87");
    },
    Error,
    "EncodingError U+CA87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA88");
    },
    Error,
    "EncodingError U+CA88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA89");
    },
    Error,
    "EncodingError U+CA89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA8A");
    },
    Error,
    "EncodingError U+CA8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA8B");
    },
    Error,
    "EncodingError U+CA8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA8C");
    },
    Error,
    "EncodingError U+CA8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA8D");
    },
    Error,
    "EncodingError U+CA8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA8E");
    },
    Error,
    "EncodingError U+CA8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA8F");
    },
    Error,
    "EncodingError U+CA8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA90");
    },
    Error,
    "EncodingError U+CA90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA91");
    },
    Error,
    "EncodingError U+CA91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA92");
    },
    Error,
    "EncodingError U+CA92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA93");
    },
    Error,
    "EncodingError U+CA93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA94");
    },
    Error,
    "EncodingError U+CA94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA95");
    },
    Error,
    "EncodingError U+CA95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA96");
    },
    Error,
    "EncodingError U+CA96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA97");
    },
    Error,
    "EncodingError U+CA97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA98");
    },
    Error,
    "EncodingError U+CA98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA99");
    },
    Error,
    "EncodingError U+CA99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA9A");
    },
    Error,
    "EncodingError U+CA9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA9B");
    },
    Error,
    "EncodingError U+CA9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA9C");
    },
    Error,
    "EncodingError U+CA9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA9D");
    },
    Error,
    "EncodingError U+CA9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA9E");
    },
    Error,
    "EncodingError U+CA9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCA9F");
    },
    Error,
    "EncodingError U+CA9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA0");
    },
    Error,
    "EncodingError U+CAA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA1");
    },
    Error,
    "EncodingError U+CAA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA2");
    },
    Error,
    "EncodingError U+CAA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA3");
    },
    Error,
    "EncodingError U+CAA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA4");
    },
    Error,
    "EncodingError U+CAA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA5");
    },
    Error,
    "EncodingError U+CAA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA6");
    },
    Error,
    "EncodingError U+CAA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA7");
    },
    Error,
    "EncodingError U+CAA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA8");
    },
    Error,
    "EncodingError U+CAA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAA9");
    },
    Error,
    "EncodingError U+CAA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAAA");
    },
    Error,
    "EncodingError U+CAAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAAB");
    },
    Error,
    "EncodingError U+CAAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAAC");
    },
    Error,
    "EncodingError U+CAAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAAD");
    },
    Error,
    "EncodingError U+CAAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAAE");
    },
    Error,
    "EncodingError U+CAAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAAF");
    },
    Error,
    "EncodingError U+CAAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB0");
    },
    Error,
    "EncodingError U+CAB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB1");
    },
    Error,
    "EncodingError U+CAB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB2");
    },
    Error,
    "EncodingError U+CAB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB3");
    },
    Error,
    "EncodingError U+CAB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB4");
    },
    Error,
    "EncodingError U+CAB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB5");
    },
    Error,
    "EncodingError U+CAB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB6");
    },
    Error,
    "EncodingError U+CAB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB7");
    },
    Error,
    "EncodingError U+CAB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB8");
    },
    Error,
    "EncodingError U+CAB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAB9");
    },
    Error,
    "EncodingError U+CAB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCABA");
    },
    Error,
    "EncodingError U+CABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCABB");
    },
    Error,
    "EncodingError U+CABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCABC");
    },
    Error,
    "EncodingError U+CABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCABD");
    },
    Error,
    "EncodingError U+CABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCABE");
    },
    Error,
    "EncodingError U+CABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCABF");
    },
    Error,
    "EncodingError U+CABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC0");
    },
    Error,
    "EncodingError U+CAC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC1");
    },
    Error,
    "EncodingError U+CAC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC2");
    },
    Error,
    "EncodingError U+CAC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC3");
    },
    Error,
    "EncodingError U+CAC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC4");
    },
    Error,
    "EncodingError U+CAC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC5");
    },
    Error,
    "EncodingError U+CAC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC6");
    },
    Error,
    "EncodingError U+CAC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC7");
    },
    Error,
    "EncodingError U+CAC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC8");
    },
    Error,
    "EncodingError U+CAC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAC9");
    },
    Error,
    "EncodingError U+CAC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCACA");
    },
    Error,
    "EncodingError U+CACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCACB");
    },
    Error,
    "EncodingError U+CACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCACC");
    },
    Error,
    "EncodingError U+CACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCACD");
    },
    Error,
    "EncodingError U+CACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCACE");
    },
    Error,
    "EncodingError U+CACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCACF");
    },
    Error,
    "EncodingError U+CACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD0");
    },
    Error,
    "EncodingError U+CAD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD1");
    },
    Error,
    "EncodingError U+CAD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD2");
    },
    Error,
    "EncodingError U+CAD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD3");
    },
    Error,
    "EncodingError U+CAD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD4");
    },
    Error,
    "EncodingError U+CAD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD5");
    },
    Error,
    "EncodingError U+CAD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD6");
    },
    Error,
    "EncodingError U+CAD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD7");
    },
    Error,
    "EncodingError U+CAD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD8");
    },
    Error,
    "EncodingError U+CAD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAD9");
    },
    Error,
    "EncodingError U+CAD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCADA");
    },
    Error,
    "EncodingError U+CADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCADB");
    },
    Error,
    "EncodingError U+CADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCADC");
    },
    Error,
    "EncodingError U+CADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCADD");
    },
    Error,
    "EncodingError U+CADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCADE");
    },
    Error,
    "EncodingError U+CADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCADF");
    },
    Error,
    "EncodingError U+CADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE0");
    },
    Error,
    "EncodingError U+CAE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE1");
    },
    Error,
    "EncodingError U+CAE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE2");
    },
    Error,
    "EncodingError U+CAE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE3");
    },
    Error,
    "EncodingError U+CAE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE4");
    },
    Error,
    "EncodingError U+CAE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE5");
    },
    Error,
    "EncodingError U+CAE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE6");
    },
    Error,
    "EncodingError U+CAE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE7");
    },
    Error,
    "EncodingError U+CAE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE8");
    },
    Error,
    "EncodingError U+CAE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAE9");
    },
    Error,
    "EncodingError U+CAE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAEA");
    },
    Error,
    "EncodingError U+CAEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAEB");
    },
    Error,
    "EncodingError U+CAEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAEC");
    },
    Error,
    "EncodingError U+CAEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAED");
    },
    Error,
    "EncodingError U+CAED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAEE");
    },
    Error,
    "EncodingError U+CAEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAEF");
    },
    Error,
    "EncodingError U+CAEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF0");
    },
    Error,
    "EncodingError U+CAF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF1");
    },
    Error,
    "EncodingError U+CAF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF2");
    },
    Error,
    "EncodingError U+CAF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF3");
    },
    Error,
    "EncodingError U+CAF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF4");
    },
    Error,
    "EncodingError U+CAF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF5");
    },
    Error,
    "EncodingError U+CAF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF6");
    },
    Error,
    "EncodingError U+CAF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF7");
    },
    Error,
    "EncodingError U+CAF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF8");
    },
    Error,
    "EncodingError U+CAF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAF9");
    },
    Error,
    "EncodingError U+CAF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAFA");
    },
    Error,
    "EncodingError U+CAFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAFB");
    },
    Error,
    "EncodingError U+CAFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAFC");
    },
    Error,
    "EncodingError U+CAFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAFD");
    },
    Error,
    "EncodingError U+CAFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAFE");
    },
    Error,
    "EncodingError U+CAFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCAFF");
    },
    Error,
    "EncodingError U+CAFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB00");
    },
    Error,
    "EncodingError U+CB00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB01");
    },
    Error,
    "EncodingError U+CB01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB02");
    },
    Error,
    "EncodingError U+CB02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB03");
    },
    Error,
    "EncodingError U+CB03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB04");
    },
    Error,
    "EncodingError U+CB04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB05");
    },
    Error,
    "EncodingError U+CB05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB06");
    },
    Error,
    "EncodingError U+CB06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB07");
    },
    Error,
    "EncodingError U+CB07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB08");
    },
    Error,
    "EncodingError U+CB08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB09");
    },
    Error,
    "EncodingError U+CB09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB0A");
    },
    Error,
    "EncodingError U+CB0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB0B");
    },
    Error,
    "EncodingError U+CB0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB0C");
    },
    Error,
    "EncodingError U+CB0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB0D");
    },
    Error,
    "EncodingError U+CB0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB0E");
    },
    Error,
    "EncodingError U+CB0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB0F");
    },
    Error,
    "EncodingError U+CB0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB10");
    },
    Error,
    "EncodingError U+CB10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB11");
    },
    Error,
    "EncodingError U+CB11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB12");
    },
    Error,
    "EncodingError U+CB12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB13");
    },
    Error,
    "EncodingError U+CB13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB14");
    },
    Error,
    "EncodingError U+CB14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB15");
    },
    Error,
    "EncodingError U+CB15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB16");
    },
    Error,
    "EncodingError U+CB16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB17");
    },
    Error,
    "EncodingError U+CB17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB18");
    },
    Error,
    "EncodingError U+CB18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB19");
    },
    Error,
    "EncodingError U+CB19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB1A");
    },
    Error,
    "EncodingError U+CB1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB1B");
    },
    Error,
    "EncodingError U+CB1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB1C");
    },
    Error,
    "EncodingError U+CB1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB1D");
    },
    Error,
    "EncodingError U+CB1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB1E");
    },
    Error,
    "EncodingError U+CB1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB1F");
    },
    Error,
    "EncodingError U+CB1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB20");
    },
    Error,
    "EncodingError U+CB20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB21");
    },
    Error,
    "EncodingError U+CB21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB22");
    },
    Error,
    "EncodingError U+CB22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB23");
    },
    Error,
    "EncodingError U+CB23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB24");
    },
    Error,
    "EncodingError U+CB24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB25");
    },
    Error,
    "EncodingError U+CB25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB26");
    },
    Error,
    "EncodingError U+CB26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB27");
    },
    Error,
    "EncodingError U+CB27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB28");
    },
    Error,
    "EncodingError U+CB28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB29");
    },
    Error,
    "EncodingError U+CB29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB2A");
    },
    Error,
    "EncodingError U+CB2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB2B");
    },
    Error,
    "EncodingError U+CB2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB2C");
    },
    Error,
    "EncodingError U+CB2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB2D");
    },
    Error,
    "EncodingError U+CB2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB2E");
    },
    Error,
    "EncodingError U+CB2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB2F");
    },
    Error,
    "EncodingError U+CB2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB30");
    },
    Error,
    "EncodingError U+CB30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB31");
    },
    Error,
    "EncodingError U+CB31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB32");
    },
    Error,
    "EncodingError U+CB32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB33");
    },
    Error,
    "EncodingError U+CB33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB34");
    },
    Error,
    "EncodingError U+CB34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB35");
    },
    Error,
    "EncodingError U+CB35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB36");
    },
    Error,
    "EncodingError U+CB36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB37");
    },
    Error,
    "EncodingError U+CB37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB38");
    },
    Error,
    "EncodingError U+CB38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB39");
    },
    Error,
    "EncodingError U+CB39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB3A");
    },
    Error,
    "EncodingError U+CB3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB3B");
    },
    Error,
    "EncodingError U+CB3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB3C");
    },
    Error,
    "EncodingError U+CB3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB3D");
    },
    Error,
    "EncodingError U+CB3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB3E");
    },
    Error,
    "EncodingError U+CB3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB3F");
    },
    Error,
    "EncodingError U+CB3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB40");
    },
    Error,
    "EncodingError U+CB40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB41");
    },
    Error,
    "EncodingError U+CB41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB42");
    },
    Error,
    "EncodingError U+CB42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB43");
    },
    Error,
    "EncodingError U+CB43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB44");
    },
    Error,
    "EncodingError U+CB44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB45");
    },
    Error,
    "EncodingError U+CB45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB46");
    },
    Error,
    "EncodingError U+CB46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB47");
    },
    Error,
    "EncodingError U+CB47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB48");
    },
    Error,
    "EncodingError U+CB48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB49");
    },
    Error,
    "EncodingError U+CB49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB4A");
    },
    Error,
    "EncodingError U+CB4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB4B");
    },
    Error,
    "EncodingError U+CB4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB4C");
    },
    Error,
    "EncodingError U+CB4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB4D");
    },
    Error,
    "EncodingError U+CB4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB4E");
    },
    Error,
    "EncodingError U+CB4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB4F");
    },
    Error,
    "EncodingError U+CB4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB50");
    },
    Error,
    "EncodingError U+CB50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB51");
    },
    Error,
    "EncodingError U+CB51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB52");
    },
    Error,
    "EncodingError U+CB52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB53");
    },
    Error,
    "EncodingError U+CB53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB54");
    },
    Error,
    "EncodingError U+CB54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB55");
    },
    Error,
    "EncodingError U+CB55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB56");
    },
    Error,
    "EncodingError U+CB56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB57");
    },
    Error,
    "EncodingError U+CB57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB58");
    },
    Error,
    "EncodingError U+CB58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB59");
    },
    Error,
    "EncodingError U+CB59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB5A");
    },
    Error,
    "EncodingError U+CB5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB5B");
    },
    Error,
    "EncodingError U+CB5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB5C");
    },
    Error,
    "EncodingError U+CB5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB5D");
    },
    Error,
    "EncodingError U+CB5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB5E");
    },
    Error,
    "EncodingError U+CB5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB5F");
    },
    Error,
    "EncodingError U+CB5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB60");
    },
    Error,
    "EncodingError U+CB60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB61");
    },
    Error,
    "EncodingError U+CB61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB62");
    },
    Error,
    "EncodingError U+CB62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB63");
    },
    Error,
    "EncodingError U+CB63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB64");
    },
    Error,
    "EncodingError U+CB64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB65");
    },
    Error,
    "EncodingError U+CB65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB66");
    },
    Error,
    "EncodingError U+CB66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB67");
    },
    Error,
    "EncodingError U+CB67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB68");
    },
    Error,
    "EncodingError U+CB68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB69");
    },
    Error,
    "EncodingError U+CB69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB6A");
    },
    Error,
    "EncodingError U+CB6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB6B");
    },
    Error,
    "EncodingError U+CB6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB6C");
    },
    Error,
    "EncodingError U+CB6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB6D");
    },
    Error,
    "EncodingError U+CB6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB6E");
    },
    Error,
    "EncodingError U+CB6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB6F");
    },
    Error,
    "EncodingError U+CB6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB70");
    },
    Error,
    "EncodingError U+CB70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB71");
    },
    Error,
    "EncodingError U+CB71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB72");
    },
    Error,
    "EncodingError U+CB72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB73");
    },
    Error,
    "EncodingError U+CB73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB74");
    },
    Error,
    "EncodingError U+CB74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB75");
    },
    Error,
    "EncodingError U+CB75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB76");
    },
    Error,
    "EncodingError U+CB76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB77");
    },
    Error,
    "EncodingError U+CB77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB78");
    },
    Error,
    "EncodingError U+CB78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB79");
    },
    Error,
    "EncodingError U+CB79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB7A");
    },
    Error,
    "EncodingError U+CB7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB7B");
    },
    Error,
    "EncodingError U+CB7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB7C");
    },
    Error,
    "EncodingError U+CB7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB7D");
    },
    Error,
    "EncodingError U+CB7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB7E");
    },
    Error,
    "EncodingError U+CB7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB7F");
    },
    Error,
    "EncodingError U+CB7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB80");
    },
    Error,
    "EncodingError U+CB80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB81");
    },
    Error,
    "EncodingError U+CB81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB82");
    },
    Error,
    "EncodingError U+CB82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB83");
    },
    Error,
    "EncodingError U+CB83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB84");
    },
    Error,
    "EncodingError U+CB84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB85");
    },
    Error,
    "EncodingError U+CB85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB86");
    },
    Error,
    "EncodingError U+CB86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB87");
    },
    Error,
    "EncodingError U+CB87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB88");
    },
    Error,
    "EncodingError U+CB88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB89");
    },
    Error,
    "EncodingError U+CB89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB8A");
    },
    Error,
    "EncodingError U+CB8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB8B");
    },
    Error,
    "EncodingError U+CB8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB8C");
    },
    Error,
    "EncodingError U+CB8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB8D");
    },
    Error,
    "EncodingError U+CB8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB8E");
    },
    Error,
    "EncodingError U+CB8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB8F");
    },
    Error,
    "EncodingError U+CB8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB90");
    },
    Error,
    "EncodingError U+CB90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB91");
    },
    Error,
    "EncodingError U+CB91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB92");
    },
    Error,
    "EncodingError U+CB92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB93");
    },
    Error,
    "EncodingError U+CB93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB94");
    },
    Error,
    "EncodingError U+CB94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB95");
    },
    Error,
    "EncodingError U+CB95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB96");
    },
    Error,
    "EncodingError U+CB96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB97");
    },
    Error,
    "EncodingError U+CB97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB98");
    },
    Error,
    "EncodingError U+CB98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB99");
    },
    Error,
    "EncodingError U+CB99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB9A");
    },
    Error,
    "EncodingError U+CB9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB9B");
    },
    Error,
    "EncodingError U+CB9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB9C");
    },
    Error,
    "EncodingError U+CB9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB9D");
    },
    Error,
    "EncodingError U+CB9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB9E");
    },
    Error,
    "EncodingError U+CB9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCB9F");
    },
    Error,
    "EncodingError U+CB9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA0");
    },
    Error,
    "EncodingError U+CBA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA1");
    },
    Error,
    "EncodingError U+CBA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA2");
    },
    Error,
    "EncodingError U+CBA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA3");
    },
    Error,
    "EncodingError U+CBA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA4");
    },
    Error,
    "EncodingError U+CBA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA5");
    },
    Error,
    "EncodingError U+CBA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA6");
    },
    Error,
    "EncodingError U+CBA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA7");
    },
    Error,
    "EncodingError U+CBA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA8");
    },
    Error,
    "EncodingError U+CBA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBA9");
    },
    Error,
    "EncodingError U+CBA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBAA");
    },
    Error,
    "EncodingError U+CBAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBAB");
    },
    Error,
    "EncodingError U+CBAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBAC");
    },
    Error,
    "EncodingError U+CBAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBAD");
    },
    Error,
    "EncodingError U+CBAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBAE");
    },
    Error,
    "EncodingError U+CBAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBAF");
    },
    Error,
    "EncodingError U+CBAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB0");
    },
    Error,
    "EncodingError U+CBB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB1");
    },
    Error,
    "EncodingError U+CBB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB2");
    },
    Error,
    "EncodingError U+CBB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB3");
    },
    Error,
    "EncodingError U+CBB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB4");
    },
    Error,
    "EncodingError U+CBB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB5");
    },
    Error,
    "EncodingError U+CBB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB6");
    },
    Error,
    "EncodingError U+CBB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB7");
    },
    Error,
    "EncodingError U+CBB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB8");
    },
    Error,
    "EncodingError U+CBB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBB9");
    },
    Error,
    "EncodingError U+CBB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBBA");
    },
    Error,
    "EncodingError U+CBBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBBB");
    },
    Error,
    "EncodingError U+CBBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBBC");
    },
    Error,
    "EncodingError U+CBBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBBD");
    },
    Error,
    "EncodingError U+CBBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBBE");
    },
    Error,
    "EncodingError U+CBBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBBF");
    },
    Error,
    "EncodingError U+CBBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC0");
    },
    Error,
    "EncodingError U+CBC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC1");
    },
    Error,
    "EncodingError U+CBC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC2");
    },
    Error,
    "EncodingError U+CBC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC3");
    },
    Error,
    "EncodingError U+CBC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC4");
    },
    Error,
    "EncodingError U+CBC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC5");
    },
    Error,
    "EncodingError U+CBC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC6");
    },
    Error,
    "EncodingError U+CBC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC7");
    },
    Error,
    "EncodingError U+CBC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC8");
    },
    Error,
    "EncodingError U+CBC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBC9");
    },
    Error,
    "EncodingError U+CBC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBCA");
    },
    Error,
    "EncodingError U+CBCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBCB");
    },
    Error,
    "EncodingError U+CBCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBCC");
    },
    Error,
    "EncodingError U+CBCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBCD");
    },
    Error,
    "EncodingError U+CBCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBCE");
    },
    Error,
    "EncodingError U+CBCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBCF");
    },
    Error,
    "EncodingError U+CBCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD0");
    },
    Error,
    "EncodingError U+CBD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD1");
    },
    Error,
    "EncodingError U+CBD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD2");
    },
    Error,
    "EncodingError U+CBD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD3");
    },
    Error,
    "EncodingError U+CBD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD4");
    },
    Error,
    "EncodingError U+CBD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD5");
    },
    Error,
    "EncodingError U+CBD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD6");
    },
    Error,
    "EncodingError U+CBD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD7");
    },
    Error,
    "EncodingError U+CBD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD8");
    },
    Error,
    "EncodingError U+CBD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBD9");
    },
    Error,
    "EncodingError U+CBD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBDA");
    },
    Error,
    "EncodingError U+CBDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBDB");
    },
    Error,
    "EncodingError U+CBDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBDC");
    },
    Error,
    "EncodingError U+CBDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBDD");
    },
    Error,
    "EncodingError U+CBDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBDE");
    },
    Error,
    "EncodingError U+CBDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBDF");
    },
    Error,
    "EncodingError U+CBDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE0");
    },
    Error,
    "EncodingError U+CBE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE1");
    },
    Error,
    "EncodingError U+CBE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE2");
    },
    Error,
    "EncodingError U+CBE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE3");
    },
    Error,
    "EncodingError U+CBE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE4");
    },
    Error,
    "EncodingError U+CBE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE5");
    },
    Error,
    "EncodingError U+CBE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE6");
    },
    Error,
    "EncodingError U+CBE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE7");
    },
    Error,
    "EncodingError U+CBE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE8");
    },
    Error,
    "EncodingError U+CBE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBE9");
    },
    Error,
    "EncodingError U+CBE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBEA");
    },
    Error,
    "EncodingError U+CBEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBEB");
    },
    Error,
    "EncodingError U+CBEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBEC");
    },
    Error,
    "EncodingError U+CBEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBED");
    },
    Error,
    "EncodingError U+CBED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBEE");
    },
    Error,
    "EncodingError U+CBEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBEF");
    },
    Error,
    "EncodingError U+CBEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF0");
    },
    Error,
    "EncodingError U+CBF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF1");
    },
    Error,
    "EncodingError U+CBF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF2");
    },
    Error,
    "EncodingError U+CBF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF3");
    },
    Error,
    "EncodingError U+CBF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF4");
    },
    Error,
    "EncodingError U+CBF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF5");
    },
    Error,
    "EncodingError U+CBF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF6");
    },
    Error,
    "EncodingError U+CBF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF7");
    },
    Error,
    "EncodingError U+CBF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF8");
    },
    Error,
    "EncodingError U+CBF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBF9");
    },
    Error,
    "EncodingError U+CBF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBFA");
    },
    Error,
    "EncodingError U+CBFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBFB");
    },
    Error,
    "EncodingError U+CBFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBFC");
    },
    Error,
    "EncodingError U+CBFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBFD");
    },
    Error,
    "EncodingError U+CBFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBFE");
    },
    Error,
    "EncodingError U+CBFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCBFF");
    },
    Error,
    "EncodingError U+CBFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC00");
    },
    Error,
    "EncodingError U+CC00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC01");
    },
    Error,
    "EncodingError U+CC01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC02");
    },
    Error,
    "EncodingError U+CC02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC03");
    },
    Error,
    "EncodingError U+CC03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC04");
    },
    Error,
    "EncodingError U+CC04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC05");
    },
    Error,
    "EncodingError U+CC05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC06");
    },
    Error,
    "EncodingError U+CC06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC07");
    },
    Error,
    "EncodingError U+CC07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC08");
    },
    Error,
    "EncodingError U+CC08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC09");
    },
    Error,
    "EncodingError U+CC09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC0A");
    },
    Error,
    "EncodingError U+CC0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC0B");
    },
    Error,
    "EncodingError U+CC0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC0C");
    },
    Error,
    "EncodingError U+CC0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC0D");
    },
    Error,
    "EncodingError U+CC0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC0E");
    },
    Error,
    "EncodingError U+CC0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC0F");
    },
    Error,
    "EncodingError U+CC0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC10");
    },
    Error,
    "EncodingError U+CC10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC11");
    },
    Error,
    "EncodingError U+CC11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC12");
    },
    Error,
    "EncodingError U+CC12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC13");
    },
    Error,
    "EncodingError U+CC13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC14");
    },
    Error,
    "EncodingError U+CC14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC15");
    },
    Error,
    "EncodingError U+CC15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC16");
    },
    Error,
    "EncodingError U+CC16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC17");
    },
    Error,
    "EncodingError U+CC17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC18");
    },
    Error,
    "EncodingError U+CC18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC19");
    },
    Error,
    "EncodingError U+CC19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC1A");
    },
    Error,
    "EncodingError U+CC1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC1B");
    },
    Error,
    "EncodingError U+CC1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC1C");
    },
    Error,
    "EncodingError U+CC1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC1D");
    },
    Error,
    "EncodingError U+CC1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC1E");
    },
    Error,
    "EncodingError U+CC1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC1F");
    },
    Error,
    "EncodingError U+CC1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC20");
    },
    Error,
    "EncodingError U+CC20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC21");
    },
    Error,
    "EncodingError U+CC21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC22");
    },
    Error,
    "EncodingError U+CC22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC23");
    },
    Error,
    "EncodingError U+CC23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC24");
    },
    Error,
    "EncodingError U+CC24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC25");
    },
    Error,
    "EncodingError U+CC25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC26");
    },
    Error,
    "EncodingError U+CC26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC27");
    },
    Error,
    "EncodingError U+CC27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC28");
    },
    Error,
    "EncodingError U+CC28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC29");
    },
    Error,
    "EncodingError U+CC29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC2A");
    },
    Error,
    "EncodingError U+CC2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC2B");
    },
    Error,
    "EncodingError U+CC2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC2C");
    },
    Error,
    "EncodingError U+CC2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC2D");
    },
    Error,
    "EncodingError U+CC2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC2E");
    },
    Error,
    "EncodingError U+CC2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC2F");
    },
    Error,
    "EncodingError U+CC2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC30");
    },
    Error,
    "EncodingError U+CC30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC31");
    },
    Error,
    "EncodingError U+CC31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC32");
    },
    Error,
    "EncodingError U+CC32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC33");
    },
    Error,
    "EncodingError U+CC33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC34");
    },
    Error,
    "EncodingError U+CC34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC35");
    },
    Error,
    "EncodingError U+CC35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC36");
    },
    Error,
    "EncodingError U+CC36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC37");
    },
    Error,
    "EncodingError U+CC37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC38");
    },
    Error,
    "EncodingError U+CC38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC39");
    },
    Error,
    "EncodingError U+CC39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC3A");
    },
    Error,
    "EncodingError U+CC3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC3B");
    },
    Error,
    "EncodingError U+CC3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC3C");
    },
    Error,
    "EncodingError U+CC3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC3D");
    },
    Error,
    "EncodingError U+CC3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC3E");
    },
    Error,
    "EncodingError U+CC3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC3F");
    },
    Error,
    "EncodingError U+CC3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC40");
    },
    Error,
    "EncodingError U+CC40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC41");
    },
    Error,
    "EncodingError U+CC41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC42");
    },
    Error,
    "EncodingError U+CC42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC43");
    },
    Error,
    "EncodingError U+CC43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC44");
    },
    Error,
    "EncodingError U+CC44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC45");
    },
    Error,
    "EncodingError U+CC45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC46");
    },
    Error,
    "EncodingError U+CC46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC47");
    },
    Error,
    "EncodingError U+CC47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC48");
    },
    Error,
    "EncodingError U+CC48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC49");
    },
    Error,
    "EncodingError U+CC49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC4A");
    },
    Error,
    "EncodingError U+CC4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC4B");
    },
    Error,
    "EncodingError U+CC4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC4C");
    },
    Error,
    "EncodingError U+CC4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC4D");
    },
    Error,
    "EncodingError U+CC4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC4E");
    },
    Error,
    "EncodingError U+CC4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC4F");
    },
    Error,
    "EncodingError U+CC4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC50");
    },
    Error,
    "EncodingError U+CC50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC51");
    },
    Error,
    "EncodingError U+CC51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC52");
    },
    Error,
    "EncodingError U+CC52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC53");
    },
    Error,
    "EncodingError U+CC53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC54");
    },
    Error,
    "EncodingError U+CC54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC55");
    },
    Error,
    "EncodingError U+CC55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC56");
    },
    Error,
    "EncodingError U+CC56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC57");
    },
    Error,
    "EncodingError U+CC57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC58");
    },
    Error,
    "EncodingError U+CC58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC59");
    },
    Error,
    "EncodingError U+CC59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC5A");
    },
    Error,
    "EncodingError U+CC5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC5B");
    },
    Error,
    "EncodingError U+CC5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC5C");
    },
    Error,
    "EncodingError U+CC5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC5D");
    },
    Error,
    "EncodingError U+CC5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC5E");
    },
    Error,
    "EncodingError U+CC5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC5F");
    },
    Error,
    "EncodingError U+CC5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC60");
    },
    Error,
    "EncodingError U+CC60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC61");
    },
    Error,
    "EncodingError U+CC61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC62");
    },
    Error,
    "EncodingError U+CC62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC63");
    },
    Error,
    "EncodingError U+CC63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC64");
    },
    Error,
    "EncodingError U+CC64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC65");
    },
    Error,
    "EncodingError U+CC65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC66");
    },
    Error,
    "EncodingError U+CC66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC67");
    },
    Error,
    "EncodingError U+CC67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC68");
    },
    Error,
    "EncodingError U+CC68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC69");
    },
    Error,
    "EncodingError U+CC69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC6A");
    },
    Error,
    "EncodingError U+CC6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC6B");
    },
    Error,
    "EncodingError U+CC6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC6C");
    },
    Error,
    "EncodingError U+CC6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC6D");
    },
    Error,
    "EncodingError U+CC6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC6E");
    },
    Error,
    "EncodingError U+CC6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC6F");
    },
    Error,
    "EncodingError U+CC6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC70");
    },
    Error,
    "EncodingError U+CC70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC71");
    },
    Error,
    "EncodingError U+CC71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC72");
    },
    Error,
    "EncodingError U+CC72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC73");
    },
    Error,
    "EncodingError U+CC73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC74");
    },
    Error,
    "EncodingError U+CC74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC75");
    },
    Error,
    "EncodingError U+CC75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC76");
    },
    Error,
    "EncodingError U+CC76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC77");
    },
    Error,
    "EncodingError U+CC77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC78");
    },
    Error,
    "EncodingError U+CC78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC79");
    },
    Error,
    "EncodingError U+CC79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC7A");
    },
    Error,
    "EncodingError U+CC7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC7B");
    },
    Error,
    "EncodingError U+CC7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC7C");
    },
    Error,
    "EncodingError U+CC7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC7D");
    },
    Error,
    "EncodingError U+CC7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC7E");
    },
    Error,
    "EncodingError U+CC7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC7F");
    },
    Error,
    "EncodingError U+CC7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC80");
    },
    Error,
    "EncodingError U+CC80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC81");
    },
    Error,
    "EncodingError U+CC81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC82");
    },
    Error,
    "EncodingError U+CC82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC83");
    },
    Error,
    "EncodingError U+CC83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC84");
    },
    Error,
    "EncodingError U+CC84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC85");
    },
    Error,
    "EncodingError U+CC85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC86");
    },
    Error,
    "EncodingError U+CC86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC87");
    },
    Error,
    "EncodingError U+CC87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC88");
    },
    Error,
    "EncodingError U+CC88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC89");
    },
    Error,
    "EncodingError U+CC89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC8A");
    },
    Error,
    "EncodingError U+CC8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC8B");
    },
    Error,
    "EncodingError U+CC8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC8C");
    },
    Error,
    "EncodingError U+CC8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC8D");
    },
    Error,
    "EncodingError U+CC8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC8E");
    },
    Error,
    "EncodingError U+CC8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC8F");
    },
    Error,
    "EncodingError U+CC8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC90");
    },
    Error,
    "EncodingError U+CC90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC91");
    },
    Error,
    "EncodingError U+CC91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC92");
    },
    Error,
    "EncodingError U+CC92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC93");
    },
    Error,
    "EncodingError U+CC93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC94");
    },
    Error,
    "EncodingError U+CC94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC95");
    },
    Error,
    "EncodingError U+CC95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC96");
    },
    Error,
    "EncodingError U+CC96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC97");
    },
    Error,
    "EncodingError U+CC97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC98");
    },
    Error,
    "EncodingError U+CC98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC99");
    },
    Error,
    "EncodingError U+CC99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC9A");
    },
    Error,
    "EncodingError U+CC9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC9B");
    },
    Error,
    "EncodingError U+CC9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC9C");
    },
    Error,
    "EncodingError U+CC9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC9D");
    },
    Error,
    "EncodingError U+CC9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC9E");
    },
    Error,
    "EncodingError U+CC9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCC9F");
    },
    Error,
    "EncodingError U+CC9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA0");
    },
    Error,
    "EncodingError U+CCA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA1");
    },
    Error,
    "EncodingError U+CCA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA2");
    },
    Error,
    "EncodingError U+CCA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA3");
    },
    Error,
    "EncodingError U+CCA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA4");
    },
    Error,
    "EncodingError U+CCA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA5");
    },
    Error,
    "EncodingError U+CCA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA6");
    },
    Error,
    "EncodingError U+CCA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA7");
    },
    Error,
    "EncodingError U+CCA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA8");
    },
    Error,
    "EncodingError U+CCA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCA9");
    },
    Error,
    "EncodingError U+CCA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCAA");
    },
    Error,
    "EncodingError U+CCAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCAB");
    },
    Error,
    "EncodingError U+CCAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCAC");
    },
    Error,
    "EncodingError U+CCAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCAD");
    },
    Error,
    "EncodingError U+CCAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCAE");
    },
    Error,
    "EncodingError U+CCAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCAF");
    },
    Error,
    "EncodingError U+CCAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB0");
    },
    Error,
    "EncodingError U+CCB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB1");
    },
    Error,
    "EncodingError U+CCB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB2");
    },
    Error,
    "EncodingError U+CCB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB3");
    },
    Error,
    "EncodingError U+CCB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB4");
    },
    Error,
    "EncodingError U+CCB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB5");
    },
    Error,
    "EncodingError U+CCB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB6");
    },
    Error,
    "EncodingError U+CCB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB7");
    },
    Error,
    "EncodingError U+CCB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB8");
    },
    Error,
    "EncodingError U+CCB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCB9");
    },
    Error,
    "EncodingError U+CCB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCBA");
    },
    Error,
    "EncodingError U+CCBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCBB");
    },
    Error,
    "EncodingError U+CCBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCBC");
    },
    Error,
    "EncodingError U+CCBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCBD");
    },
    Error,
    "EncodingError U+CCBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCBE");
    },
    Error,
    "EncodingError U+CCBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCBF");
    },
    Error,
    "EncodingError U+CCBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC0");
    },
    Error,
    "EncodingError U+CCC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC1");
    },
    Error,
    "EncodingError U+CCC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC2");
    },
    Error,
    "EncodingError U+CCC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC3");
    },
    Error,
    "EncodingError U+CCC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC4");
    },
    Error,
    "EncodingError U+CCC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC5");
    },
    Error,
    "EncodingError U+CCC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC6");
    },
    Error,
    "EncodingError U+CCC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC7");
    },
    Error,
    "EncodingError U+CCC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC8");
    },
    Error,
    "EncodingError U+CCC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCC9");
    },
    Error,
    "EncodingError U+CCC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCCA");
    },
    Error,
    "EncodingError U+CCCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCCB");
    },
    Error,
    "EncodingError U+CCCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCCC");
    },
    Error,
    "EncodingError U+CCCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCCD");
    },
    Error,
    "EncodingError U+CCCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCCE");
    },
    Error,
    "EncodingError U+CCCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCCF");
    },
    Error,
    "EncodingError U+CCCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD0");
    },
    Error,
    "EncodingError U+CCD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD1");
    },
    Error,
    "EncodingError U+CCD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD2");
    },
    Error,
    "EncodingError U+CCD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD3");
    },
    Error,
    "EncodingError U+CCD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD4");
    },
    Error,
    "EncodingError U+CCD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD5");
    },
    Error,
    "EncodingError U+CCD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD6");
    },
    Error,
    "EncodingError U+CCD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD7");
    },
    Error,
    "EncodingError U+CCD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD8");
    },
    Error,
    "EncodingError U+CCD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCD9");
    },
    Error,
    "EncodingError U+CCD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCDA");
    },
    Error,
    "EncodingError U+CCDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCDB");
    },
    Error,
    "EncodingError U+CCDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCDC");
    },
    Error,
    "EncodingError U+CCDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCDD");
    },
    Error,
    "EncodingError U+CCDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCDE");
    },
    Error,
    "EncodingError U+CCDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCDF");
    },
    Error,
    "EncodingError U+CCDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE0");
    },
    Error,
    "EncodingError U+CCE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE1");
    },
    Error,
    "EncodingError U+CCE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE2");
    },
    Error,
    "EncodingError U+CCE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE3");
    },
    Error,
    "EncodingError U+CCE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE4");
    },
    Error,
    "EncodingError U+CCE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE5");
    },
    Error,
    "EncodingError U+CCE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE6");
    },
    Error,
    "EncodingError U+CCE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE7");
    },
    Error,
    "EncodingError U+CCE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE8");
    },
    Error,
    "EncodingError U+CCE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCE9");
    },
    Error,
    "EncodingError U+CCE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCEA");
    },
    Error,
    "EncodingError U+CCEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCEB");
    },
    Error,
    "EncodingError U+CCEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCEC");
    },
    Error,
    "EncodingError U+CCEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCED");
    },
    Error,
    "EncodingError U+CCED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCEE");
    },
    Error,
    "EncodingError U+CCEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCEF");
    },
    Error,
    "EncodingError U+CCEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF0");
    },
    Error,
    "EncodingError U+CCF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF1");
    },
    Error,
    "EncodingError U+CCF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF2");
    },
    Error,
    "EncodingError U+CCF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF3");
    },
    Error,
    "EncodingError U+CCF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF4");
    },
    Error,
    "EncodingError U+CCF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF5");
    },
    Error,
    "EncodingError U+CCF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF6");
    },
    Error,
    "EncodingError U+CCF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF7");
    },
    Error,
    "EncodingError U+CCF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF8");
    },
    Error,
    "EncodingError U+CCF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCF9");
    },
    Error,
    "EncodingError U+CCF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCFA");
    },
    Error,
    "EncodingError U+CCFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCFB");
    },
    Error,
    "EncodingError U+CCFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCFC");
    },
    Error,
    "EncodingError U+CCFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCFD");
    },
    Error,
    "EncodingError U+CCFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCFE");
    },
    Error,
    "EncodingError U+CCFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCCFF");
    },
    Error,
    "EncodingError U+CCFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD00");
    },
    Error,
    "EncodingError U+CD00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD01");
    },
    Error,
    "EncodingError U+CD01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD02");
    },
    Error,
    "EncodingError U+CD02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD03");
    },
    Error,
    "EncodingError U+CD03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD04");
    },
    Error,
    "EncodingError U+CD04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD05");
    },
    Error,
    "EncodingError U+CD05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD06");
    },
    Error,
    "EncodingError U+CD06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD07");
    },
    Error,
    "EncodingError U+CD07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD08");
    },
    Error,
    "EncodingError U+CD08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD09");
    },
    Error,
    "EncodingError U+CD09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD0A");
    },
    Error,
    "EncodingError U+CD0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD0B");
    },
    Error,
    "EncodingError U+CD0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD0C");
    },
    Error,
    "EncodingError U+CD0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD0D");
    },
    Error,
    "EncodingError U+CD0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD0E");
    },
    Error,
    "EncodingError U+CD0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD0F");
    },
    Error,
    "EncodingError U+CD0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD10");
    },
    Error,
    "EncodingError U+CD10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD11");
    },
    Error,
    "EncodingError U+CD11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD12");
    },
    Error,
    "EncodingError U+CD12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD13");
    },
    Error,
    "EncodingError U+CD13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD14");
    },
    Error,
    "EncodingError U+CD14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD15");
    },
    Error,
    "EncodingError U+CD15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD16");
    },
    Error,
    "EncodingError U+CD16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD17");
    },
    Error,
    "EncodingError U+CD17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD18");
    },
    Error,
    "EncodingError U+CD18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD19");
    },
    Error,
    "EncodingError U+CD19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD1A");
    },
    Error,
    "EncodingError U+CD1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD1B");
    },
    Error,
    "EncodingError U+CD1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD1C");
    },
    Error,
    "EncodingError U+CD1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD1D");
    },
    Error,
    "EncodingError U+CD1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD1E");
    },
    Error,
    "EncodingError U+CD1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD1F");
    },
    Error,
    "EncodingError U+CD1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD20");
    },
    Error,
    "EncodingError U+CD20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD21");
    },
    Error,
    "EncodingError U+CD21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD22");
    },
    Error,
    "EncodingError U+CD22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD23");
    },
    Error,
    "EncodingError U+CD23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD24");
    },
    Error,
    "EncodingError U+CD24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD25");
    },
    Error,
    "EncodingError U+CD25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD26");
    },
    Error,
    "EncodingError U+CD26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD27");
    },
    Error,
    "EncodingError U+CD27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD28");
    },
    Error,
    "EncodingError U+CD28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD29");
    },
    Error,
    "EncodingError U+CD29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD2A");
    },
    Error,
    "EncodingError U+CD2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD2B");
    },
    Error,
    "EncodingError U+CD2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD2C");
    },
    Error,
    "EncodingError U+CD2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD2D");
    },
    Error,
    "EncodingError U+CD2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD2E");
    },
    Error,
    "EncodingError U+CD2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD2F");
    },
    Error,
    "EncodingError U+CD2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD30");
    },
    Error,
    "EncodingError U+CD30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD31");
    },
    Error,
    "EncodingError U+CD31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD32");
    },
    Error,
    "EncodingError U+CD32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD33");
    },
    Error,
    "EncodingError U+CD33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD34");
    },
    Error,
    "EncodingError U+CD34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD35");
    },
    Error,
    "EncodingError U+CD35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD36");
    },
    Error,
    "EncodingError U+CD36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD37");
    },
    Error,
    "EncodingError U+CD37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD38");
    },
    Error,
    "EncodingError U+CD38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD39");
    },
    Error,
    "EncodingError U+CD39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD3A");
    },
    Error,
    "EncodingError U+CD3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD3B");
    },
    Error,
    "EncodingError U+CD3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD3C");
    },
    Error,
    "EncodingError U+CD3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD3D");
    },
    Error,
    "EncodingError U+CD3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD3E");
    },
    Error,
    "EncodingError U+CD3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD3F");
    },
    Error,
    "EncodingError U+CD3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD40");
    },
    Error,
    "EncodingError U+CD40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD41");
    },
    Error,
    "EncodingError U+CD41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD42");
    },
    Error,
    "EncodingError U+CD42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD43");
    },
    Error,
    "EncodingError U+CD43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD44");
    },
    Error,
    "EncodingError U+CD44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD45");
    },
    Error,
    "EncodingError U+CD45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD46");
    },
    Error,
    "EncodingError U+CD46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD47");
    },
    Error,
    "EncodingError U+CD47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD48");
    },
    Error,
    "EncodingError U+CD48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD49");
    },
    Error,
    "EncodingError U+CD49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD4A");
    },
    Error,
    "EncodingError U+CD4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD4B");
    },
    Error,
    "EncodingError U+CD4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD4C");
    },
    Error,
    "EncodingError U+CD4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD4D");
    },
    Error,
    "EncodingError U+CD4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD4E");
    },
    Error,
    "EncodingError U+CD4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD4F");
    },
    Error,
    "EncodingError U+CD4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD50");
    },
    Error,
    "EncodingError U+CD50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD51");
    },
    Error,
    "EncodingError U+CD51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD52");
    },
    Error,
    "EncodingError U+CD52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD53");
    },
    Error,
    "EncodingError U+CD53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD54");
    },
    Error,
    "EncodingError U+CD54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD55");
    },
    Error,
    "EncodingError U+CD55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD56");
    },
    Error,
    "EncodingError U+CD56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD57");
    },
    Error,
    "EncodingError U+CD57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD58");
    },
    Error,
    "EncodingError U+CD58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD59");
    },
    Error,
    "EncodingError U+CD59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD5A");
    },
    Error,
    "EncodingError U+CD5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD5B");
    },
    Error,
    "EncodingError U+CD5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD5C");
    },
    Error,
    "EncodingError U+CD5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD5D");
    },
    Error,
    "EncodingError U+CD5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD5E");
    },
    Error,
    "EncodingError U+CD5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD5F");
    },
    Error,
    "EncodingError U+CD5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD60");
    },
    Error,
    "EncodingError U+CD60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD61");
    },
    Error,
    "EncodingError U+CD61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD62");
    },
    Error,
    "EncodingError U+CD62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD63");
    },
    Error,
    "EncodingError U+CD63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD64");
    },
    Error,
    "EncodingError U+CD64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD65");
    },
    Error,
    "EncodingError U+CD65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD66");
    },
    Error,
    "EncodingError U+CD66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD67");
    },
    Error,
    "EncodingError U+CD67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD68");
    },
    Error,
    "EncodingError U+CD68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD69");
    },
    Error,
    "EncodingError U+CD69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD6A");
    },
    Error,
    "EncodingError U+CD6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD6B");
    },
    Error,
    "EncodingError U+CD6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD6C");
    },
    Error,
    "EncodingError U+CD6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD6D");
    },
    Error,
    "EncodingError U+CD6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD6E");
    },
    Error,
    "EncodingError U+CD6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD6F");
    },
    Error,
    "EncodingError U+CD6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD70");
    },
    Error,
    "EncodingError U+CD70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD71");
    },
    Error,
    "EncodingError U+CD71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD72");
    },
    Error,
    "EncodingError U+CD72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD73");
    },
    Error,
    "EncodingError U+CD73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD74");
    },
    Error,
    "EncodingError U+CD74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD75");
    },
    Error,
    "EncodingError U+CD75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD76");
    },
    Error,
    "EncodingError U+CD76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD77");
    },
    Error,
    "EncodingError U+CD77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD78");
    },
    Error,
    "EncodingError U+CD78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD79");
    },
    Error,
    "EncodingError U+CD79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD7A");
    },
    Error,
    "EncodingError U+CD7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD7B");
    },
    Error,
    "EncodingError U+CD7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD7C");
    },
    Error,
    "EncodingError U+CD7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD7D");
    },
    Error,
    "EncodingError U+CD7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD7E");
    },
    Error,
    "EncodingError U+CD7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD7F");
    },
    Error,
    "EncodingError U+CD7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD80");
    },
    Error,
    "EncodingError U+CD80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD81");
    },
    Error,
    "EncodingError U+CD81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD82");
    },
    Error,
    "EncodingError U+CD82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD83");
    },
    Error,
    "EncodingError U+CD83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD84");
    },
    Error,
    "EncodingError U+CD84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD85");
    },
    Error,
    "EncodingError U+CD85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD86");
    },
    Error,
    "EncodingError U+CD86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD87");
    },
    Error,
    "EncodingError U+CD87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD88");
    },
    Error,
    "EncodingError U+CD88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD89");
    },
    Error,
    "EncodingError U+CD89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD8A");
    },
    Error,
    "EncodingError U+CD8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD8B");
    },
    Error,
    "EncodingError U+CD8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD8C");
    },
    Error,
    "EncodingError U+CD8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD8D");
    },
    Error,
    "EncodingError U+CD8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD8E");
    },
    Error,
    "EncodingError U+CD8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD8F");
    },
    Error,
    "EncodingError U+CD8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD90");
    },
    Error,
    "EncodingError U+CD90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD91");
    },
    Error,
    "EncodingError U+CD91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD92");
    },
    Error,
    "EncodingError U+CD92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD93");
    },
    Error,
    "EncodingError U+CD93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD94");
    },
    Error,
    "EncodingError U+CD94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD95");
    },
    Error,
    "EncodingError U+CD95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD96");
    },
    Error,
    "EncodingError U+CD96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD97");
    },
    Error,
    "EncodingError U+CD97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD98");
    },
    Error,
    "EncodingError U+CD98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD99");
    },
    Error,
    "EncodingError U+CD99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD9A");
    },
    Error,
    "EncodingError U+CD9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD9B");
    },
    Error,
    "EncodingError U+CD9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD9C");
    },
    Error,
    "EncodingError U+CD9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD9D");
    },
    Error,
    "EncodingError U+CD9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD9E");
    },
    Error,
    "EncodingError U+CD9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCD9F");
    },
    Error,
    "EncodingError U+CD9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA0");
    },
    Error,
    "EncodingError U+CDA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA1");
    },
    Error,
    "EncodingError U+CDA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA2");
    },
    Error,
    "EncodingError U+CDA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA3");
    },
    Error,
    "EncodingError U+CDA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA4");
    },
    Error,
    "EncodingError U+CDA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA5");
    },
    Error,
    "EncodingError U+CDA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA6");
    },
    Error,
    "EncodingError U+CDA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA7");
    },
    Error,
    "EncodingError U+CDA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA8");
    },
    Error,
    "EncodingError U+CDA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDA9");
    },
    Error,
    "EncodingError U+CDA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDAA");
    },
    Error,
    "EncodingError U+CDAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDAB");
    },
    Error,
    "EncodingError U+CDAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDAC");
    },
    Error,
    "EncodingError U+CDAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDAD");
    },
    Error,
    "EncodingError U+CDAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDAE");
    },
    Error,
    "EncodingError U+CDAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDAF");
    },
    Error,
    "EncodingError U+CDAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB0");
    },
    Error,
    "EncodingError U+CDB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB1");
    },
    Error,
    "EncodingError U+CDB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB2");
    },
    Error,
    "EncodingError U+CDB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB3");
    },
    Error,
    "EncodingError U+CDB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB4");
    },
    Error,
    "EncodingError U+CDB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB5");
    },
    Error,
    "EncodingError U+CDB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB6");
    },
    Error,
    "EncodingError U+CDB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB7");
    },
    Error,
    "EncodingError U+CDB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB8");
    },
    Error,
    "EncodingError U+CDB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDB9");
    },
    Error,
    "EncodingError U+CDB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDBA");
    },
    Error,
    "EncodingError U+CDBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDBB");
    },
    Error,
    "EncodingError U+CDBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDBC");
    },
    Error,
    "EncodingError U+CDBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDBD");
    },
    Error,
    "EncodingError U+CDBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDBE");
    },
    Error,
    "EncodingError U+CDBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDBF");
    },
    Error,
    "EncodingError U+CDBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC0");
    },
    Error,
    "EncodingError U+CDC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC1");
    },
    Error,
    "EncodingError U+CDC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC2");
    },
    Error,
    "EncodingError U+CDC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC3");
    },
    Error,
    "EncodingError U+CDC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC4");
    },
    Error,
    "EncodingError U+CDC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC5");
    },
    Error,
    "EncodingError U+CDC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC6");
    },
    Error,
    "EncodingError U+CDC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC7");
    },
    Error,
    "EncodingError U+CDC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC8");
    },
    Error,
    "EncodingError U+CDC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDC9");
    },
    Error,
    "EncodingError U+CDC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDCA");
    },
    Error,
    "EncodingError U+CDCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDCB");
    },
    Error,
    "EncodingError U+CDCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDCC");
    },
    Error,
    "EncodingError U+CDCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDCD");
    },
    Error,
    "EncodingError U+CDCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDCE");
    },
    Error,
    "EncodingError U+CDCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDCF");
    },
    Error,
    "EncodingError U+CDCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD0");
    },
    Error,
    "EncodingError U+CDD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD1");
    },
    Error,
    "EncodingError U+CDD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD2");
    },
    Error,
    "EncodingError U+CDD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD3");
    },
    Error,
    "EncodingError U+CDD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD4");
    },
    Error,
    "EncodingError U+CDD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD5");
    },
    Error,
    "EncodingError U+CDD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD6");
    },
    Error,
    "EncodingError U+CDD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD7");
    },
    Error,
    "EncodingError U+CDD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD8");
    },
    Error,
    "EncodingError U+CDD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDD9");
    },
    Error,
    "EncodingError U+CDD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDDA");
    },
    Error,
    "EncodingError U+CDDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDDB");
    },
    Error,
    "EncodingError U+CDDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDDC");
    },
    Error,
    "EncodingError U+CDDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDDD");
    },
    Error,
    "EncodingError U+CDDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDDE");
    },
    Error,
    "EncodingError U+CDDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDDF");
    },
    Error,
    "EncodingError U+CDDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE0");
    },
    Error,
    "EncodingError U+CDE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE1");
    },
    Error,
    "EncodingError U+CDE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE2");
    },
    Error,
    "EncodingError U+CDE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE3");
    },
    Error,
    "EncodingError U+CDE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE4");
    },
    Error,
    "EncodingError U+CDE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE5");
    },
    Error,
    "EncodingError U+CDE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE6");
    },
    Error,
    "EncodingError U+CDE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE7");
    },
    Error,
    "EncodingError U+CDE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE8");
    },
    Error,
    "EncodingError U+CDE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDE9");
    },
    Error,
    "EncodingError U+CDE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDEA");
    },
    Error,
    "EncodingError U+CDEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDEB");
    },
    Error,
    "EncodingError U+CDEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDEC");
    },
    Error,
    "EncodingError U+CDEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDED");
    },
    Error,
    "EncodingError U+CDED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDEE");
    },
    Error,
    "EncodingError U+CDEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDEF");
    },
    Error,
    "EncodingError U+CDEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF0");
    },
    Error,
    "EncodingError U+CDF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF1");
    },
    Error,
    "EncodingError U+CDF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF2");
    },
    Error,
    "EncodingError U+CDF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF3");
    },
    Error,
    "EncodingError U+CDF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF4");
    },
    Error,
    "EncodingError U+CDF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF5");
    },
    Error,
    "EncodingError U+CDF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF6");
    },
    Error,
    "EncodingError U+CDF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF7");
    },
    Error,
    "EncodingError U+CDF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF8");
    },
    Error,
    "EncodingError U+CDF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDF9");
    },
    Error,
    "EncodingError U+CDF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDFA");
    },
    Error,
    "EncodingError U+CDFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDFB");
    },
    Error,
    "EncodingError U+CDFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDFC");
    },
    Error,
    "EncodingError U+CDFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDFD");
    },
    Error,
    "EncodingError U+CDFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDFE");
    },
    Error,
    "EncodingError U+CDFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCDFF");
    },
    Error,
    "EncodingError U+CDFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE00");
    },
    Error,
    "EncodingError U+CE00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE01");
    },
    Error,
    "EncodingError U+CE01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE02");
    },
    Error,
    "EncodingError U+CE02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE03");
    },
    Error,
    "EncodingError U+CE03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE04");
    },
    Error,
    "EncodingError U+CE04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE05");
    },
    Error,
    "EncodingError U+CE05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE06");
    },
    Error,
    "EncodingError U+CE06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE07");
    },
    Error,
    "EncodingError U+CE07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE08");
    },
    Error,
    "EncodingError U+CE08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE09");
    },
    Error,
    "EncodingError U+CE09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE0A");
    },
    Error,
    "EncodingError U+CE0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE0B");
    },
    Error,
    "EncodingError U+CE0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE0C");
    },
    Error,
    "EncodingError U+CE0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE0D");
    },
    Error,
    "EncodingError U+CE0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE0E");
    },
    Error,
    "EncodingError U+CE0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE0F");
    },
    Error,
    "EncodingError U+CE0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE10");
    },
    Error,
    "EncodingError U+CE10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE11");
    },
    Error,
    "EncodingError U+CE11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE12");
    },
    Error,
    "EncodingError U+CE12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE13");
    },
    Error,
    "EncodingError U+CE13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE14");
    },
    Error,
    "EncodingError U+CE14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE15");
    },
    Error,
    "EncodingError U+CE15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE16");
    },
    Error,
    "EncodingError U+CE16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE17");
    },
    Error,
    "EncodingError U+CE17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE18");
    },
    Error,
    "EncodingError U+CE18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE19");
    },
    Error,
    "EncodingError U+CE19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE1A");
    },
    Error,
    "EncodingError U+CE1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE1B");
    },
    Error,
    "EncodingError U+CE1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE1C");
    },
    Error,
    "EncodingError U+CE1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE1D");
    },
    Error,
    "EncodingError U+CE1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE1E");
    },
    Error,
    "EncodingError U+CE1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE1F");
    },
    Error,
    "EncodingError U+CE1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE20");
    },
    Error,
    "EncodingError U+CE20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE21");
    },
    Error,
    "EncodingError U+CE21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE22");
    },
    Error,
    "EncodingError U+CE22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE23");
    },
    Error,
    "EncodingError U+CE23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE24");
    },
    Error,
    "EncodingError U+CE24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE25");
    },
    Error,
    "EncodingError U+CE25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE26");
    },
    Error,
    "EncodingError U+CE26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE27");
    },
    Error,
    "EncodingError U+CE27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE28");
    },
    Error,
    "EncodingError U+CE28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE29");
    },
    Error,
    "EncodingError U+CE29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE2A");
    },
    Error,
    "EncodingError U+CE2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE2B");
    },
    Error,
    "EncodingError U+CE2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE2C");
    },
    Error,
    "EncodingError U+CE2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE2D");
    },
    Error,
    "EncodingError U+CE2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE2E");
    },
    Error,
    "EncodingError U+CE2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE2F");
    },
    Error,
    "EncodingError U+CE2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE30");
    },
    Error,
    "EncodingError U+CE30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE31");
    },
    Error,
    "EncodingError U+CE31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE32");
    },
    Error,
    "EncodingError U+CE32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE33");
    },
    Error,
    "EncodingError U+CE33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE34");
    },
    Error,
    "EncodingError U+CE34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE35");
    },
    Error,
    "EncodingError U+CE35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE36");
    },
    Error,
    "EncodingError U+CE36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE37");
    },
    Error,
    "EncodingError U+CE37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE38");
    },
    Error,
    "EncodingError U+CE38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE39");
    },
    Error,
    "EncodingError U+CE39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE3A");
    },
    Error,
    "EncodingError U+CE3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE3B");
    },
    Error,
    "EncodingError U+CE3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE3C");
    },
    Error,
    "EncodingError U+CE3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE3D");
    },
    Error,
    "EncodingError U+CE3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE3E");
    },
    Error,
    "EncodingError U+CE3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE3F");
    },
    Error,
    "EncodingError U+CE3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE40");
    },
    Error,
    "EncodingError U+CE40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE41");
    },
    Error,
    "EncodingError U+CE41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE42");
    },
    Error,
    "EncodingError U+CE42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE43");
    },
    Error,
    "EncodingError U+CE43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE44");
    },
    Error,
    "EncodingError U+CE44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE45");
    },
    Error,
    "EncodingError U+CE45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE46");
    },
    Error,
    "EncodingError U+CE46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE47");
    },
    Error,
    "EncodingError U+CE47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE48");
    },
    Error,
    "EncodingError U+CE48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE49");
    },
    Error,
    "EncodingError U+CE49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE4A");
    },
    Error,
    "EncodingError U+CE4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE4B");
    },
    Error,
    "EncodingError U+CE4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE4C");
    },
    Error,
    "EncodingError U+CE4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE4D");
    },
    Error,
    "EncodingError U+CE4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE4E");
    },
    Error,
    "EncodingError U+CE4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE4F");
    },
    Error,
    "EncodingError U+CE4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE50");
    },
    Error,
    "EncodingError U+CE50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE51");
    },
    Error,
    "EncodingError U+CE51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE52");
    },
    Error,
    "EncodingError U+CE52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE53");
    },
    Error,
    "EncodingError U+CE53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE54");
    },
    Error,
    "EncodingError U+CE54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE55");
    },
    Error,
    "EncodingError U+CE55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE56");
    },
    Error,
    "EncodingError U+CE56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE57");
    },
    Error,
    "EncodingError U+CE57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE58");
    },
    Error,
    "EncodingError U+CE58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE59");
    },
    Error,
    "EncodingError U+CE59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE5A");
    },
    Error,
    "EncodingError U+CE5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE5B");
    },
    Error,
    "EncodingError U+CE5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE5C");
    },
    Error,
    "EncodingError U+CE5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE5D");
    },
    Error,
    "EncodingError U+CE5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE5E");
    },
    Error,
    "EncodingError U+CE5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE5F");
    },
    Error,
    "EncodingError U+CE5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE60");
    },
    Error,
    "EncodingError U+CE60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE61");
    },
    Error,
    "EncodingError U+CE61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE62");
    },
    Error,
    "EncodingError U+CE62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE63");
    },
    Error,
    "EncodingError U+CE63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE64");
    },
    Error,
    "EncodingError U+CE64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE65");
    },
    Error,
    "EncodingError U+CE65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE66");
    },
    Error,
    "EncodingError U+CE66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE67");
    },
    Error,
    "EncodingError U+CE67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE68");
    },
    Error,
    "EncodingError U+CE68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE69");
    },
    Error,
    "EncodingError U+CE69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE6A");
    },
    Error,
    "EncodingError U+CE6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE6B");
    },
    Error,
    "EncodingError U+CE6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE6C");
    },
    Error,
    "EncodingError U+CE6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE6D");
    },
    Error,
    "EncodingError U+CE6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE6E");
    },
    Error,
    "EncodingError U+CE6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE6F");
    },
    Error,
    "EncodingError U+CE6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE70");
    },
    Error,
    "EncodingError U+CE70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE71");
    },
    Error,
    "EncodingError U+CE71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE72");
    },
    Error,
    "EncodingError U+CE72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE73");
    },
    Error,
    "EncodingError U+CE73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE74");
    },
    Error,
    "EncodingError U+CE74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE75");
    },
    Error,
    "EncodingError U+CE75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE76");
    },
    Error,
    "EncodingError U+CE76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE77");
    },
    Error,
    "EncodingError U+CE77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE78");
    },
    Error,
    "EncodingError U+CE78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE79");
    },
    Error,
    "EncodingError U+CE79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE7A");
    },
    Error,
    "EncodingError U+CE7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE7B");
    },
    Error,
    "EncodingError U+CE7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE7C");
    },
    Error,
    "EncodingError U+CE7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE7D");
    },
    Error,
    "EncodingError U+CE7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE7E");
    },
    Error,
    "EncodingError U+CE7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE7F");
    },
    Error,
    "EncodingError U+CE7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE80");
    },
    Error,
    "EncodingError U+CE80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE81");
    },
    Error,
    "EncodingError U+CE81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE82");
    },
    Error,
    "EncodingError U+CE82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE83");
    },
    Error,
    "EncodingError U+CE83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE84");
    },
    Error,
    "EncodingError U+CE84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE85");
    },
    Error,
    "EncodingError U+CE85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE86");
    },
    Error,
    "EncodingError U+CE86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE87");
    },
    Error,
    "EncodingError U+CE87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE88");
    },
    Error,
    "EncodingError U+CE88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE89");
    },
    Error,
    "EncodingError U+CE89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE8A");
    },
    Error,
    "EncodingError U+CE8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE8B");
    },
    Error,
    "EncodingError U+CE8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE8C");
    },
    Error,
    "EncodingError U+CE8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE8D");
    },
    Error,
    "EncodingError U+CE8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE8E");
    },
    Error,
    "EncodingError U+CE8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE8F");
    },
    Error,
    "EncodingError U+CE8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE90");
    },
    Error,
    "EncodingError U+CE90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE91");
    },
    Error,
    "EncodingError U+CE91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE92");
    },
    Error,
    "EncodingError U+CE92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE93");
    },
    Error,
    "EncodingError U+CE93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE94");
    },
    Error,
    "EncodingError U+CE94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE95");
    },
    Error,
    "EncodingError U+CE95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE96");
    },
    Error,
    "EncodingError U+CE96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE97");
    },
    Error,
    "EncodingError U+CE97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE98");
    },
    Error,
    "EncodingError U+CE98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE99");
    },
    Error,
    "EncodingError U+CE99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE9A");
    },
    Error,
    "EncodingError U+CE9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE9B");
    },
    Error,
    "EncodingError U+CE9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE9C");
    },
    Error,
    "EncodingError U+CE9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE9D");
    },
    Error,
    "EncodingError U+CE9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE9E");
    },
    Error,
    "EncodingError U+CE9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCE9F");
    },
    Error,
    "EncodingError U+CE9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA0");
    },
    Error,
    "EncodingError U+CEA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA1");
    },
    Error,
    "EncodingError U+CEA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA2");
    },
    Error,
    "EncodingError U+CEA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA3");
    },
    Error,
    "EncodingError U+CEA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA4");
    },
    Error,
    "EncodingError U+CEA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA5");
    },
    Error,
    "EncodingError U+CEA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA6");
    },
    Error,
    "EncodingError U+CEA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA7");
    },
    Error,
    "EncodingError U+CEA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA8");
    },
    Error,
    "EncodingError U+CEA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEA9");
    },
    Error,
    "EncodingError U+CEA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEAA");
    },
    Error,
    "EncodingError U+CEAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEAB");
    },
    Error,
    "EncodingError U+CEAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEAC");
    },
    Error,
    "EncodingError U+CEAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEAD");
    },
    Error,
    "EncodingError U+CEAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEAE");
    },
    Error,
    "EncodingError U+CEAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEAF");
    },
    Error,
    "EncodingError U+CEAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB0");
    },
    Error,
    "EncodingError U+CEB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB1");
    },
    Error,
    "EncodingError U+CEB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB2");
    },
    Error,
    "EncodingError U+CEB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB3");
    },
    Error,
    "EncodingError U+CEB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB4");
    },
    Error,
    "EncodingError U+CEB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB5");
    },
    Error,
    "EncodingError U+CEB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB6");
    },
    Error,
    "EncodingError U+CEB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB7");
    },
    Error,
    "EncodingError U+CEB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB8");
    },
    Error,
    "EncodingError U+CEB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEB9");
    },
    Error,
    "EncodingError U+CEB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEBA");
    },
    Error,
    "EncodingError U+CEBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEBB");
    },
    Error,
    "EncodingError U+CEBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEBC");
    },
    Error,
    "EncodingError U+CEBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEBD");
    },
    Error,
    "EncodingError U+CEBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEBE");
    },
    Error,
    "EncodingError U+CEBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEBF");
    },
    Error,
    "EncodingError U+CEBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC0");
    },
    Error,
    "EncodingError U+CEC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC1");
    },
    Error,
    "EncodingError U+CEC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC2");
    },
    Error,
    "EncodingError U+CEC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC3");
    },
    Error,
    "EncodingError U+CEC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC4");
    },
    Error,
    "EncodingError U+CEC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC5");
    },
    Error,
    "EncodingError U+CEC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC6");
    },
    Error,
    "EncodingError U+CEC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC7");
    },
    Error,
    "EncodingError U+CEC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC8");
    },
    Error,
    "EncodingError U+CEC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEC9");
    },
    Error,
    "EncodingError U+CEC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCECA");
    },
    Error,
    "EncodingError U+CECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCECB");
    },
    Error,
    "EncodingError U+CECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCECC");
    },
    Error,
    "EncodingError U+CECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCECD");
    },
    Error,
    "EncodingError U+CECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCECE");
    },
    Error,
    "EncodingError U+CECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCECF");
    },
    Error,
    "EncodingError U+CECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED0");
    },
    Error,
    "EncodingError U+CED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED1");
    },
    Error,
    "EncodingError U+CED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED2");
    },
    Error,
    "EncodingError U+CED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED3");
    },
    Error,
    "EncodingError U+CED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED4");
    },
    Error,
    "EncodingError U+CED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED5");
    },
    Error,
    "EncodingError U+CED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED6");
    },
    Error,
    "EncodingError U+CED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED7");
    },
    Error,
    "EncodingError U+CED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED8");
    },
    Error,
    "EncodingError U+CED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCED9");
    },
    Error,
    "EncodingError U+CED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEDA");
    },
    Error,
    "EncodingError U+CEDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEDB");
    },
    Error,
    "EncodingError U+CEDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEDC");
    },
    Error,
    "EncodingError U+CEDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEDD");
    },
    Error,
    "EncodingError U+CEDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEDE");
    },
    Error,
    "EncodingError U+CEDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEDF");
    },
    Error,
    "EncodingError U+CEDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE0");
    },
    Error,
    "EncodingError U+CEE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE1");
    },
    Error,
    "EncodingError U+CEE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE2");
    },
    Error,
    "EncodingError U+CEE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE3");
    },
    Error,
    "EncodingError U+CEE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE4");
    },
    Error,
    "EncodingError U+CEE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE5");
    },
    Error,
    "EncodingError U+CEE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE6");
    },
    Error,
    "EncodingError U+CEE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE7");
    },
    Error,
    "EncodingError U+CEE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE8");
    },
    Error,
    "EncodingError U+CEE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEE9");
    },
    Error,
    "EncodingError U+CEE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEEA");
    },
    Error,
    "EncodingError U+CEEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEEB");
    },
    Error,
    "EncodingError U+CEEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEEC");
    },
    Error,
    "EncodingError U+CEEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEED");
    },
    Error,
    "EncodingError U+CEED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEEE");
    },
    Error,
    "EncodingError U+CEEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEEF");
    },
    Error,
    "EncodingError U+CEEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF0");
    },
    Error,
    "EncodingError U+CEF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF1");
    },
    Error,
    "EncodingError U+CEF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF2");
    },
    Error,
    "EncodingError U+CEF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF3");
    },
    Error,
    "EncodingError U+CEF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF4");
    },
    Error,
    "EncodingError U+CEF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF5");
    },
    Error,
    "EncodingError U+CEF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF6");
    },
    Error,
    "EncodingError U+CEF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF7");
    },
    Error,
    "EncodingError U+CEF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF8");
    },
    Error,
    "EncodingError U+CEF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEF9");
    },
    Error,
    "EncodingError U+CEF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEFA");
    },
    Error,
    "EncodingError U+CEFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEFB");
    },
    Error,
    "EncodingError U+CEFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEFC");
    },
    Error,
    "EncodingError U+CEFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEFD");
    },
    Error,
    "EncodingError U+CEFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEFE");
    },
    Error,
    "EncodingError U+CEFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCEFF");
    },
    Error,
    "EncodingError U+CEFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF00");
    },
    Error,
    "EncodingError U+CF00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF01");
    },
    Error,
    "EncodingError U+CF01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF02");
    },
    Error,
    "EncodingError U+CF02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF03");
    },
    Error,
    "EncodingError U+CF03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF04");
    },
    Error,
    "EncodingError U+CF04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF05");
    },
    Error,
    "EncodingError U+CF05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF06");
    },
    Error,
    "EncodingError U+CF06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF07");
    },
    Error,
    "EncodingError U+CF07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF08");
    },
    Error,
    "EncodingError U+CF08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF09");
    },
    Error,
    "EncodingError U+CF09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF0A");
    },
    Error,
    "EncodingError U+CF0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF0B");
    },
    Error,
    "EncodingError U+CF0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF0C");
    },
    Error,
    "EncodingError U+CF0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF0D");
    },
    Error,
    "EncodingError U+CF0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF0E");
    },
    Error,
    "EncodingError U+CF0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF0F");
    },
    Error,
    "EncodingError U+CF0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF10");
    },
    Error,
    "EncodingError U+CF10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF11");
    },
    Error,
    "EncodingError U+CF11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF12");
    },
    Error,
    "EncodingError U+CF12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF13");
    },
    Error,
    "EncodingError U+CF13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF14");
    },
    Error,
    "EncodingError U+CF14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF15");
    },
    Error,
    "EncodingError U+CF15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF16");
    },
    Error,
    "EncodingError U+CF16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF17");
    },
    Error,
    "EncodingError U+CF17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF18");
    },
    Error,
    "EncodingError U+CF18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF19");
    },
    Error,
    "EncodingError U+CF19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF1A");
    },
    Error,
    "EncodingError U+CF1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF1B");
    },
    Error,
    "EncodingError U+CF1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF1C");
    },
    Error,
    "EncodingError U+CF1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF1D");
    },
    Error,
    "EncodingError U+CF1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF1E");
    },
    Error,
    "EncodingError U+CF1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF1F");
    },
    Error,
    "EncodingError U+CF1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF20");
    },
    Error,
    "EncodingError U+CF20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF21");
    },
    Error,
    "EncodingError U+CF21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF22");
    },
    Error,
    "EncodingError U+CF22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF23");
    },
    Error,
    "EncodingError U+CF23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF24");
    },
    Error,
    "EncodingError U+CF24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF25");
    },
    Error,
    "EncodingError U+CF25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF26");
    },
    Error,
    "EncodingError U+CF26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF27");
    },
    Error,
    "EncodingError U+CF27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF28");
    },
    Error,
    "EncodingError U+CF28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF29");
    },
    Error,
    "EncodingError U+CF29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF2A");
    },
    Error,
    "EncodingError U+CF2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF2B");
    },
    Error,
    "EncodingError U+CF2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF2C");
    },
    Error,
    "EncodingError U+CF2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF2D");
    },
    Error,
    "EncodingError U+CF2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF2E");
    },
    Error,
    "EncodingError U+CF2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF2F");
    },
    Error,
    "EncodingError U+CF2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF30");
    },
    Error,
    "EncodingError U+CF30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF31");
    },
    Error,
    "EncodingError U+CF31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF32");
    },
    Error,
    "EncodingError U+CF32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF33");
    },
    Error,
    "EncodingError U+CF33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF34");
    },
    Error,
    "EncodingError U+CF34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF35");
    },
    Error,
    "EncodingError U+CF35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF36");
    },
    Error,
    "EncodingError U+CF36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF37");
    },
    Error,
    "EncodingError U+CF37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF38");
    },
    Error,
    "EncodingError U+CF38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF39");
    },
    Error,
    "EncodingError U+CF39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF3A");
    },
    Error,
    "EncodingError U+CF3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF3B");
    },
    Error,
    "EncodingError U+CF3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF3C");
    },
    Error,
    "EncodingError U+CF3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF3D");
    },
    Error,
    "EncodingError U+CF3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF3E");
    },
    Error,
    "EncodingError U+CF3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF3F");
    },
    Error,
    "EncodingError U+CF3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF40");
    },
    Error,
    "EncodingError U+CF40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF41");
    },
    Error,
    "EncodingError U+CF41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF42");
    },
    Error,
    "EncodingError U+CF42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF43");
    },
    Error,
    "EncodingError U+CF43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF44");
    },
    Error,
    "EncodingError U+CF44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF45");
    },
    Error,
    "EncodingError U+CF45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF46");
    },
    Error,
    "EncodingError U+CF46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF47");
    },
    Error,
    "EncodingError U+CF47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF48");
    },
    Error,
    "EncodingError U+CF48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF49");
    },
    Error,
    "EncodingError U+CF49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF4A");
    },
    Error,
    "EncodingError U+CF4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF4B");
    },
    Error,
    "EncodingError U+CF4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF4C");
    },
    Error,
    "EncodingError U+CF4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF4D");
    },
    Error,
    "EncodingError U+CF4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF4E");
    },
    Error,
    "EncodingError U+CF4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF4F");
    },
    Error,
    "EncodingError U+CF4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF50");
    },
    Error,
    "EncodingError U+CF50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF51");
    },
    Error,
    "EncodingError U+CF51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF52");
    },
    Error,
    "EncodingError U+CF52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF53");
    },
    Error,
    "EncodingError U+CF53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF54");
    },
    Error,
    "EncodingError U+CF54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF55");
    },
    Error,
    "EncodingError U+CF55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF56");
    },
    Error,
    "EncodingError U+CF56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF57");
    },
    Error,
    "EncodingError U+CF57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF58");
    },
    Error,
    "EncodingError U+CF58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF59");
    },
    Error,
    "EncodingError U+CF59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF5A");
    },
    Error,
    "EncodingError U+CF5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF5B");
    },
    Error,
    "EncodingError U+CF5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF5C");
    },
    Error,
    "EncodingError U+CF5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF5D");
    },
    Error,
    "EncodingError U+CF5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF5E");
    },
    Error,
    "EncodingError U+CF5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF5F");
    },
    Error,
    "EncodingError U+CF5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF60");
    },
    Error,
    "EncodingError U+CF60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF61");
    },
    Error,
    "EncodingError U+CF61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF62");
    },
    Error,
    "EncodingError U+CF62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF63");
    },
    Error,
    "EncodingError U+CF63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF64");
    },
    Error,
    "EncodingError U+CF64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF65");
    },
    Error,
    "EncodingError U+CF65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF66");
    },
    Error,
    "EncodingError U+CF66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF67");
    },
    Error,
    "EncodingError U+CF67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF68");
    },
    Error,
    "EncodingError U+CF68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF69");
    },
    Error,
    "EncodingError U+CF69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF6A");
    },
    Error,
    "EncodingError U+CF6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF6B");
    },
    Error,
    "EncodingError U+CF6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF6C");
    },
    Error,
    "EncodingError U+CF6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF6D");
    },
    Error,
    "EncodingError U+CF6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF6E");
    },
    Error,
    "EncodingError U+CF6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF6F");
    },
    Error,
    "EncodingError U+CF6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF70");
    },
    Error,
    "EncodingError U+CF70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF71");
    },
    Error,
    "EncodingError U+CF71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF72");
    },
    Error,
    "EncodingError U+CF72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF73");
    },
    Error,
    "EncodingError U+CF73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF74");
    },
    Error,
    "EncodingError U+CF74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF75");
    },
    Error,
    "EncodingError U+CF75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF76");
    },
    Error,
    "EncodingError U+CF76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF77");
    },
    Error,
    "EncodingError U+CF77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF78");
    },
    Error,
    "EncodingError U+CF78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF79");
    },
    Error,
    "EncodingError U+CF79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF7A");
    },
    Error,
    "EncodingError U+CF7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF7B");
    },
    Error,
    "EncodingError U+CF7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF7C");
    },
    Error,
    "EncodingError U+CF7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF7D");
    },
    Error,
    "EncodingError U+CF7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF7E");
    },
    Error,
    "EncodingError U+CF7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF7F");
    },
    Error,
    "EncodingError U+CF7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF80");
    },
    Error,
    "EncodingError U+CF80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF81");
    },
    Error,
    "EncodingError U+CF81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF82");
    },
    Error,
    "EncodingError U+CF82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF83");
    },
    Error,
    "EncodingError U+CF83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF84");
    },
    Error,
    "EncodingError U+CF84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF85");
    },
    Error,
    "EncodingError U+CF85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF86");
    },
    Error,
    "EncodingError U+CF86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF87");
    },
    Error,
    "EncodingError U+CF87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF88");
    },
    Error,
    "EncodingError U+CF88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF89");
    },
    Error,
    "EncodingError U+CF89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF8A");
    },
    Error,
    "EncodingError U+CF8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF8B");
    },
    Error,
    "EncodingError U+CF8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF8C");
    },
    Error,
    "EncodingError U+CF8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF8D");
    },
    Error,
    "EncodingError U+CF8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF8E");
    },
    Error,
    "EncodingError U+CF8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF8F");
    },
    Error,
    "EncodingError U+CF8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF90");
    },
    Error,
    "EncodingError U+CF90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF91");
    },
    Error,
    "EncodingError U+CF91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF92");
    },
    Error,
    "EncodingError U+CF92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF93");
    },
    Error,
    "EncodingError U+CF93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF94");
    },
    Error,
    "EncodingError U+CF94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF95");
    },
    Error,
    "EncodingError U+CF95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF96");
    },
    Error,
    "EncodingError U+CF96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF97");
    },
    Error,
    "EncodingError U+CF97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF98");
    },
    Error,
    "EncodingError U+CF98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF99");
    },
    Error,
    "EncodingError U+CF99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF9A");
    },
    Error,
    "EncodingError U+CF9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF9B");
    },
    Error,
    "EncodingError U+CF9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF9C");
    },
    Error,
    "EncodingError U+CF9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF9D");
    },
    Error,
    "EncodingError U+CF9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF9E");
    },
    Error,
    "EncodingError U+CF9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCF9F");
    },
    Error,
    "EncodingError U+CF9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA0");
    },
    Error,
    "EncodingError U+CFA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA1");
    },
    Error,
    "EncodingError U+CFA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA2");
    },
    Error,
    "EncodingError U+CFA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA3");
    },
    Error,
    "EncodingError U+CFA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA4");
    },
    Error,
    "EncodingError U+CFA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA5");
    },
    Error,
    "EncodingError U+CFA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA6");
    },
    Error,
    "EncodingError U+CFA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA7");
    },
    Error,
    "EncodingError U+CFA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA8");
    },
    Error,
    "EncodingError U+CFA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFA9");
    },
    Error,
    "EncodingError U+CFA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFAA");
    },
    Error,
    "EncodingError U+CFAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFAB");
    },
    Error,
    "EncodingError U+CFAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFAC");
    },
    Error,
    "EncodingError U+CFAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFAD");
    },
    Error,
    "EncodingError U+CFAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFAE");
    },
    Error,
    "EncodingError U+CFAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFAF");
    },
    Error,
    "EncodingError U+CFAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB0");
    },
    Error,
    "EncodingError U+CFB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB1");
    },
    Error,
    "EncodingError U+CFB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB2");
    },
    Error,
    "EncodingError U+CFB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB3");
    },
    Error,
    "EncodingError U+CFB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB4");
    },
    Error,
    "EncodingError U+CFB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB5");
    },
    Error,
    "EncodingError U+CFB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB6");
    },
    Error,
    "EncodingError U+CFB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB7");
    },
    Error,
    "EncodingError U+CFB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB8");
    },
    Error,
    "EncodingError U+CFB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFB9");
    },
    Error,
    "EncodingError U+CFB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFBA");
    },
    Error,
    "EncodingError U+CFBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFBB");
    },
    Error,
    "EncodingError U+CFBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFBC");
    },
    Error,
    "EncodingError U+CFBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFBD");
    },
    Error,
    "EncodingError U+CFBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFBE");
    },
    Error,
    "EncodingError U+CFBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFBF");
    },
    Error,
    "EncodingError U+CFBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC0");
    },
    Error,
    "EncodingError U+CFC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC1");
    },
    Error,
    "EncodingError U+CFC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC2");
    },
    Error,
    "EncodingError U+CFC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC3");
    },
    Error,
    "EncodingError U+CFC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC4");
    },
    Error,
    "EncodingError U+CFC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC5");
    },
    Error,
    "EncodingError U+CFC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC6");
    },
    Error,
    "EncodingError U+CFC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC7");
    },
    Error,
    "EncodingError U+CFC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC8");
    },
    Error,
    "EncodingError U+CFC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFC9");
    },
    Error,
    "EncodingError U+CFC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFCA");
    },
    Error,
    "EncodingError U+CFCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFCB");
    },
    Error,
    "EncodingError U+CFCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFCC");
    },
    Error,
    "EncodingError U+CFCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFCD");
    },
    Error,
    "EncodingError U+CFCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFCE");
    },
    Error,
    "EncodingError U+CFCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFCF");
    },
    Error,
    "EncodingError U+CFCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD0");
    },
    Error,
    "EncodingError U+CFD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD1");
    },
    Error,
    "EncodingError U+CFD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD2");
    },
    Error,
    "EncodingError U+CFD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD3");
    },
    Error,
    "EncodingError U+CFD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD4");
    },
    Error,
    "EncodingError U+CFD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD5");
    },
    Error,
    "EncodingError U+CFD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD6");
    },
    Error,
    "EncodingError U+CFD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD7");
    },
    Error,
    "EncodingError U+CFD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD8");
    },
    Error,
    "EncodingError U+CFD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFD9");
    },
    Error,
    "EncodingError U+CFD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFDA");
    },
    Error,
    "EncodingError U+CFDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFDB");
    },
    Error,
    "EncodingError U+CFDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFDC");
    },
    Error,
    "EncodingError U+CFDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFDD");
    },
    Error,
    "EncodingError U+CFDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFDE");
    },
    Error,
    "EncodingError U+CFDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFDF");
    },
    Error,
    "EncodingError U+CFDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE0");
    },
    Error,
    "EncodingError U+CFE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE1");
    },
    Error,
    "EncodingError U+CFE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE2");
    },
    Error,
    "EncodingError U+CFE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE3");
    },
    Error,
    "EncodingError U+CFE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE4");
    },
    Error,
    "EncodingError U+CFE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE5");
    },
    Error,
    "EncodingError U+CFE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE6");
    },
    Error,
    "EncodingError U+CFE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE7");
    },
    Error,
    "EncodingError U+CFE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE8");
    },
    Error,
    "EncodingError U+CFE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFE9");
    },
    Error,
    "EncodingError U+CFE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFEA");
    },
    Error,
    "EncodingError U+CFEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFEB");
    },
    Error,
    "EncodingError U+CFEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFEC");
    },
    Error,
    "EncodingError U+CFEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFED");
    },
    Error,
    "EncodingError U+CFED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFEE");
    },
    Error,
    "EncodingError U+CFEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFEF");
    },
    Error,
    "EncodingError U+CFEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF0");
    },
    Error,
    "EncodingError U+CFF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF1");
    },
    Error,
    "EncodingError U+CFF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF2");
    },
    Error,
    "EncodingError U+CFF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF3");
    },
    Error,
    "EncodingError U+CFF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF4");
    },
    Error,
    "EncodingError U+CFF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF5");
    },
    Error,
    "EncodingError U+CFF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF6");
    },
    Error,
    "EncodingError U+CFF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF7");
    },
    Error,
    "EncodingError U+CFF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF8");
    },
    Error,
    "EncodingError U+CFF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFF9");
    },
    Error,
    "EncodingError U+CFF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFFA");
    },
    Error,
    "EncodingError U+CFFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFFB");
    },
    Error,
    "EncodingError U+CFFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFFC");
    },
    Error,
    "EncodingError U+CFFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFFD");
    },
    Error,
    "EncodingError U+CFFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFFE");
    },
    Error,
    "EncodingError U+CFFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uCFFF");
    },
    Error,
    "EncodingError U+CFFF",
  );
});
