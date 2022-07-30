import { assertThrows } from "std/testing/asserts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+A000-U+AFFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  assertThrows(
    () => {
      ms932Encoder.encode("\uA000");
    },
    Error,
    "EncodingError U+A000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA001");
    },
    Error,
    "EncodingError U+A001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA002");
    },
    Error,
    "EncodingError U+A002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA003");
    },
    Error,
    "EncodingError U+A003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA004");
    },
    Error,
    "EncodingError U+A004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA005");
    },
    Error,
    "EncodingError U+A005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA006");
    },
    Error,
    "EncodingError U+A006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA007");
    },
    Error,
    "EncodingError U+A007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA008");
    },
    Error,
    "EncodingError U+A008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA009");
    },
    Error,
    "EncodingError U+A009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA00A");
    },
    Error,
    "EncodingError U+A00A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA00B");
    },
    Error,
    "EncodingError U+A00B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA00C");
    },
    Error,
    "EncodingError U+A00C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA00D");
    },
    Error,
    "EncodingError U+A00D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA00E");
    },
    Error,
    "EncodingError U+A00E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA00F");
    },
    Error,
    "EncodingError U+A00F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA010");
    },
    Error,
    "EncodingError U+A010",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA011");
    },
    Error,
    "EncodingError U+A011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA012");
    },
    Error,
    "EncodingError U+A012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA013");
    },
    Error,
    "EncodingError U+A013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA014");
    },
    Error,
    "EncodingError U+A014",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA015");
    },
    Error,
    "EncodingError U+A015",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA016");
    },
    Error,
    "EncodingError U+A016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA017");
    },
    Error,
    "EncodingError U+A017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA018");
    },
    Error,
    "EncodingError U+A018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA019");
    },
    Error,
    "EncodingError U+A019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA01A");
    },
    Error,
    "EncodingError U+A01A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA01B");
    },
    Error,
    "EncodingError U+A01B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA01C");
    },
    Error,
    "EncodingError U+A01C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA01D");
    },
    Error,
    "EncodingError U+A01D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA01E");
    },
    Error,
    "EncodingError U+A01E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA01F");
    },
    Error,
    "EncodingError U+A01F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA020");
    },
    Error,
    "EncodingError U+A020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA021");
    },
    Error,
    "EncodingError U+A021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA022");
    },
    Error,
    "EncodingError U+A022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA023");
    },
    Error,
    "EncodingError U+A023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA024");
    },
    Error,
    "EncodingError U+A024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA025");
    },
    Error,
    "EncodingError U+A025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA026");
    },
    Error,
    "EncodingError U+A026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA027");
    },
    Error,
    "EncodingError U+A027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA028");
    },
    Error,
    "EncodingError U+A028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA029");
    },
    Error,
    "EncodingError U+A029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA02A");
    },
    Error,
    "EncodingError U+A02A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA02B");
    },
    Error,
    "EncodingError U+A02B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA02C");
    },
    Error,
    "EncodingError U+A02C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA02D");
    },
    Error,
    "EncodingError U+A02D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA02E");
    },
    Error,
    "EncodingError U+A02E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA02F");
    },
    Error,
    "EncodingError U+A02F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA030");
    },
    Error,
    "EncodingError U+A030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA031");
    },
    Error,
    "EncodingError U+A031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA032");
    },
    Error,
    "EncodingError U+A032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA033");
    },
    Error,
    "EncodingError U+A033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA034");
    },
    Error,
    "EncodingError U+A034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA035");
    },
    Error,
    "EncodingError U+A035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA036");
    },
    Error,
    "EncodingError U+A036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA037");
    },
    Error,
    "EncodingError U+A037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA038");
    },
    Error,
    "EncodingError U+A038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA039");
    },
    Error,
    "EncodingError U+A039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA03A");
    },
    Error,
    "EncodingError U+A03A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA03B");
    },
    Error,
    "EncodingError U+A03B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA03C");
    },
    Error,
    "EncodingError U+A03C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA03D");
    },
    Error,
    "EncodingError U+A03D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA03E");
    },
    Error,
    "EncodingError U+A03E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA03F");
    },
    Error,
    "EncodingError U+A03F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA040");
    },
    Error,
    "EncodingError U+A040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA041");
    },
    Error,
    "EncodingError U+A041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA042");
    },
    Error,
    "EncodingError U+A042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA043");
    },
    Error,
    "EncodingError U+A043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA044");
    },
    Error,
    "EncodingError U+A044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA045");
    },
    Error,
    "EncodingError U+A045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA046");
    },
    Error,
    "EncodingError U+A046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA047");
    },
    Error,
    "EncodingError U+A047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA048");
    },
    Error,
    "EncodingError U+A048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA049");
    },
    Error,
    "EncodingError U+A049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA04A");
    },
    Error,
    "EncodingError U+A04A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA04B");
    },
    Error,
    "EncodingError U+A04B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA04C");
    },
    Error,
    "EncodingError U+A04C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA04D");
    },
    Error,
    "EncodingError U+A04D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA04E");
    },
    Error,
    "EncodingError U+A04E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA04F");
    },
    Error,
    "EncodingError U+A04F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA050");
    },
    Error,
    "EncodingError U+A050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA051");
    },
    Error,
    "EncodingError U+A051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA052");
    },
    Error,
    "EncodingError U+A052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA053");
    },
    Error,
    "EncodingError U+A053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA054");
    },
    Error,
    "EncodingError U+A054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA055");
    },
    Error,
    "EncodingError U+A055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA056");
    },
    Error,
    "EncodingError U+A056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA057");
    },
    Error,
    "EncodingError U+A057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA058");
    },
    Error,
    "EncodingError U+A058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA059");
    },
    Error,
    "EncodingError U+A059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA05A");
    },
    Error,
    "EncodingError U+A05A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA05B");
    },
    Error,
    "EncodingError U+A05B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA05C");
    },
    Error,
    "EncodingError U+A05C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA05D");
    },
    Error,
    "EncodingError U+A05D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA05E");
    },
    Error,
    "EncodingError U+A05E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA05F");
    },
    Error,
    "EncodingError U+A05F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA060");
    },
    Error,
    "EncodingError U+A060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA061");
    },
    Error,
    "EncodingError U+A061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA062");
    },
    Error,
    "EncodingError U+A062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA063");
    },
    Error,
    "EncodingError U+A063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA064");
    },
    Error,
    "EncodingError U+A064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA065");
    },
    Error,
    "EncodingError U+A065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA066");
    },
    Error,
    "EncodingError U+A066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA067");
    },
    Error,
    "EncodingError U+A067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA068");
    },
    Error,
    "EncodingError U+A068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA069");
    },
    Error,
    "EncodingError U+A069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA06A");
    },
    Error,
    "EncodingError U+A06A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA06B");
    },
    Error,
    "EncodingError U+A06B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA06C");
    },
    Error,
    "EncodingError U+A06C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA06D");
    },
    Error,
    "EncodingError U+A06D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA06E");
    },
    Error,
    "EncodingError U+A06E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA06F");
    },
    Error,
    "EncodingError U+A06F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA070");
    },
    Error,
    "EncodingError U+A070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA071");
    },
    Error,
    "EncodingError U+A071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA072");
    },
    Error,
    "EncodingError U+A072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA073");
    },
    Error,
    "EncodingError U+A073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA074");
    },
    Error,
    "EncodingError U+A074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA075");
    },
    Error,
    "EncodingError U+A075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA076");
    },
    Error,
    "EncodingError U+A076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA077");
    },
    Error,
    "EncodingError U+A077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA078");
    },
    Error,
    "EncodingError U+A078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA079");
    },
    Error,
    "EncodingError U+A079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA07A");
    },
    Error,
    "EncodingError U+A07A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA07B");
    },
    Error,
    "EncodingError U+A07B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA07C");
    },
    Error,
    "EncodingError U+A07C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA07D");
    },
    Error,
    "EncodingError U+A07D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA07E");
    },
    Error,
    "EncodingError U+A07E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA07F");
    },
    Error,
    "EncodingError U+A07F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA080");
    },
    Error,
    "EncodingError U+A080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA081");
    },
    Error,
    "EncodingError U+A081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA082");
    },
    Error,
    "EncodingError U+A082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA083");
    },
    Error,
    "EncodingError U+A083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA084");
    },
    Error,
    "EncodingError U+A084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA085");
    },
    Error,
    "EncodingError U+A085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA086");
    },
    Error,
    "EncodingError U+A086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA087");
    },
    Error,
    "EncodingError U+A087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA088");
    },
    Error,
    "EncodingError U+A088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA089");
    },
    Error,
    "EncodingError U+A089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA08A");
    },
    Error,
    "EncodingError U+A08A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA08B");
    },
    Error,
    "EncodingError U+A08B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA08C");
    },
    Error,
    "EncodingError U+A08C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA08D");
    },
    Error,
    "EncodingError U+A08D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA08E");
    },
    Error,
    "EncodingError U+A08E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA08F");
    },
    Error,
    "EncodingError U+A08F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA090");
    },
    Error,
    "EncodingError U+A090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA091");
    },
    Error,
    "EncodingError U+A091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA092");
    },
    Error,
    "EncodingError U+A092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA093");
    },
    Error,
    "EncodingError U+A093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA094");
    },
    Error,
    "EncodingError U+A094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA095");
    },
    Error,
    "EncodingError U+A095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA096");
    },
    Error,
    "EncodingError U+A096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA097");
    },
    Error,
    "EncodingError U+A097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA098");
    },
    Error,
    "EncodingError U+A098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA099");
    },
    Error,
    "EncodingError U+A099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA09A");
    },
    Error,
    "EncodingError U+A09A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA09B");
    },
    Error,
    "EncodingError U+A09B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA09C");
    },
    Error,
    "EncodingError U+A09C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA09D");
    },
    Error,
    "EncodingError U+A09D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA09E");
    },
    Error,
    "EncodingError U+A09E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA09F");
    },
    Error,
    "EncodingError U+A09F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A0");
    },
    Error,
    "EncodingError U+A0A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A1");
    },
    Error,
    "EncodingError U+A0A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A2");
    },
    Error,
    "EncodingError U+A0A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A3");
    },
    Error,
    "EncodingError U+A0A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A4");
    },
    Error,
    "EncodingError U+A0A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A5");
    },
    Error,
    "EncodingError U+A0A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A6");
    },
    Error,
    "EncodingError U+A0A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A7");
    },
    Error,
    "EncodingError U+A0A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A8");
    },
    Error,
    "EncodingError U+A0A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A9");
    },
    Error,
    "EncodingError U+A0A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0AA");
    },
    Error,
    "EncodingError U+A0AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0AB");
    },
    Error,
    "EncodingError U+A0AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0AC");
    },
    Error,
    "EncodingError U+A0AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0AD");
    },
    Error,
    "EncodingError U+A0AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0AE");
    },
    Error,
    "EncodingError U+A0AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0AF");
    },
    Error,
    "EncodingError U+A0AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B0");
    },
    Error,
    "EncodingError U+A0B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B1");
    },
    Error,
    "EncodingError U+A0B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B2");
    },
    Error,
    "EncodingError U+A0B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B3");
    },
    Error,
    "EncodingError U+A0B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B4");
    },
    Error,
    "EncodingError U+A0B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B5");
    },
    Error,
    "EncodingError U+A0B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B6");
    },
    Error,
    "EncodingError U+A0B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B7");
    },
    Error,
    "EncodingError U+A0B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B8");
    },
    Error,
    "EncodingError U+A0B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B9");
    },
    Error,
    "EncodingError U+A0B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0BA");
    },
    Error,
    "EncodingError U+A0BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0BB");
    },
    Error,
    "EncodingError U+A0BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0BC");
    },
    Error,
    "EncodingError U+A0BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0BD");
    },
    Error,
    "EncodingError U+A0BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0BE");
    },
    Error,
    "EncodingError U+A0BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0BF");
    },
    Error,
    "EncodingError U+A0BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C0");
    },
    Error,
    "EncodingError U+A0C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C1");
    },
    Error,
    "EncodingError U+A0C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C2");
    },
    Error,
    "EncodingError U+A0C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C3");
    },
    Error,
    "EncodingError U+A0C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C4");
    },
    Error,
    "EncodingError U+A0C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C5");
    },
    Error,
    "EncodingError U+A0C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C6");
    },
    Error,
    "EncodingError U+A0C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C7");
    },
    Error,
    "EncodingError U+A0C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C8");
    },
    Error,
    "EncodingError U+A0C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C9");
    },
    Error,
    "EncodingError U+A0C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0CA");
    },
    Error,
    "EncodingError U+A0CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0CB");
    },
    Error,
    "EncodingError U+A0CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0CC");
    },
    Error,
    "EncodingError U+A0CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0CD");
    },
    Error,
    "EncodingError U+A0CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0CE");
    },
    Error,
    "EncodingError U+A0CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0CF");
    },
    Error,
    "EncodingError U+A0CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D0");
    },
    Error,
    "EncodingError U+A0D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D1");
    },
    Error,
    "EncodingError U+A0D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D2");
    },
    Error,
    "EncodingError U+A0D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D3");
    },
    Error,
    "EncodingError U+A0D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D4");
    },
    Error,
    "EncodingError U+A0D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D5");
    },
    Error,
    "EncodingError U+A0D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D6");
    },
    Error,
    "EncodingError U+A0D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D7");
    },
    Error,
    "EncodingError U+A0D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D8");
    },
    Error,
    "EncodingError U+A0D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D9");
    },
    Error,
    "EncodingError U+A0D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0DA");
    },
    Error,
    "EncodingError U+A0DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0DB");
    },
    Error,
    "EncodingError U+A0DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0DC");
    },
    Error,
    "EncodingError U+A0DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0DD");
    },
    Error,
    "EncodingError U+A0DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0DE");
    },
    Error,
    "EncodingError U+A0DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0DF");
    },
    Error,
    "EncodingError U+A0DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E0");
    },
    Error,
    "EncodingError U+A0E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E1");
    },
    Error,
    "EncodingError U+A0E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E2");
    },
    Error,
    "EncodingError U+A0E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E3");
    },
    Error,
    "EncodingError U+A0E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E4");
    },
    Error,
    "EncodingError U+A0E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E5");
    },
    Error,
    "EncodingError U+A0E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E6");
    },
    Error,
    "EncodingError U+A0E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E7");
    },
    Error,
    "EncodingError U+A0E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E8");
    },
    Error,
    "EncodingError U+A0E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E9");
    },
    Error,
    "EncodingError U+A0E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0EA");
    },
    Error,
    "EncodingError U+A0EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0EB");
    },
    Error,
    "EncodingError U+A0EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0EC");
    },
    Error,
    "EncodingError U+A0EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0ED");
    },
    Error,
    "EncodingError U+A0ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0EE");
    },
    Error,
    "EncodingError U+A0EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0EF");
    },
    Error,
    "EncodingError U+A0EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F0");
    },
    Error,
    "EncodingError U+A0F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F1");
    },
    Error,
    "EncodingError U+A0F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F2");
    },
    Error,
    "EncodingError U+A0F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F3");
    },
    Error,
    "EncodingError U+A0F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F4");
    },
    Error,
    "EncodingError U+A0F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F5");
    },
    Error,
    "EncodingError U+A0F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F6");
    },
    Error,
    "EncodingError U+A0F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F7");
    },
    Error,
    "EncodingError U+A0F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F8");
    },
    Error,
    "EncodingError U+A0F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F9");
    },
    Error,
    "EncodingError U+A0F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0FA");
    },
    Error,
    "EncodingError U+A0FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0FB");
    },
    Error,
    "EncodingError U+A0FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0FC");
    },
    Error,
    "EncodingError U+A0FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0FD");
    },
    Error,
    "EncodingError U+A0FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0FE");
    },
    Error,
    "EncodingError U+A0FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0FF");
    },
    Error,
    "EncodingError U+A0FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA100");
    },
    Error,
    "EncodingError U+A100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA101");
    },
    Error,
    "EncodingError U+A101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA102");
    },
    Error,
    "EncodingError U+A102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA103");
    },
    Error,
    "EncodingError U+A103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA104");
    },
    Error,
    "EncodingError U+A104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA105");
    },
    Error,
    "EncodingError U+A105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA106");
    },
    Error,
    "EncodingError U+A106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA107");
    },
    Error,
    "EncodingError U+A107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA108");
    },
    Error,
    "EncodingError U+A108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA109");
    },
    Error,
    "EncodingError U+A109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA10A");
    },
    Error,
    "EncodingError U+A10A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA10B");
    },
    Error,
    "EncodingError U+A10B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA10C");
    },
    Error,
    "EncodingError U+A10C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA10D");
    },
    Error,
    "EncodingError U+A10D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA10E");
    },
    Error,
    "EncodingError U+A10E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA10F");
    },
    Error,
    "EncodingError U+A10F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA110");
    },
    Error,
    "EncodingError U+A110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA111");
    },
    Error,
    "EncodingError U+A111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA112");
    },
    Error,
    "EncodingError U+A112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA113");
    },
    Error,
    "EncodingError U+A113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA114");
    },
    Error,
    "EncodingError U+A114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA115");
    },
    Error,
    "EncodingError U+A115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA116");
    },
    Error,
    "EncodingError U+A116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA117");
    },
    Error,
    "EncodingError U+A117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA118");
    },
    Error,
    "EncodingError U+A118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA119");
    },
    Error,
    "EncodingError U+A119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA11A");
    },
    Error,
    "EncodingError U+A11A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA11B");
    },
    Error,
    "EncodingError U+A11B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA11C");
    },
    Error,
    "EncodingError U+A11C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA11D");
    },
    Error,
    "EncodingError U+A11D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA11E");
    },
    Error,
    "EncodingError U+A11E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA11F");
    },
    Error,
    "EncodingError U+A11F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA120");
    },
    Error,
    "EncodingError U+A120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA121");
    },
    Error,
    "EncodingError U+A121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA122");
    },
    Error,
    "EncodingError U+A122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA123");
    },
    Error,
    "EncodingError U+A123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA124");
    },
    Error,
    "EncodingError U+A124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA125");
    },
    Error,
    "EncodingError U+A125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA126");
    },
    Error,
    "EncodingError U+A126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA127");
    },
    Error,
    "EncodingError U+A127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA128");
    },
    Error,
    "EncodingError U+A128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA129");
    },
    Error,
    "EncodingError U+A129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA12A");
    },
    Error,
    "EncodingError U+A12A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA12B");
    },
    Error,
    "EncodingError U+A12B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA12C");
    },
    Error,
    "EncodingError U+A12C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA12D");
    },
    Error,
    "EncodingError U+A12D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA12E");
    },
    Error,
    "EncodingError U+A12E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA12F");
    },
    Error,
    "EncodingError U+A12F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA130");
    },
    Error,
    "EncodingError U+A130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA131");
    },
    Error,
    "EncodingError U+A131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA132");
    },
    Error,
    "EncodingError U+A132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA133");
    },
    Error,
    "EncodingError U+A133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA134");
    },
    Error,
    "EncodingError U+A134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA135");
    },
    Error,
    "EncodingError U+A135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA136");
    },
    Error,
    "EncodingError U+A136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA137");
    },
    Error,
    "EncodingError U+A137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA138");
    },
    Error,
    "EncodingError U+A138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA139");
    },
    Error,
    "EncodingError U+A139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA13A");
    },
    Error,
    "EncodingError U+A13A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA13B");
    },
    Error,
    "EncodingError U+A13B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA13C");
    },
    Error,
    "EncodingError U+A13C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA13D");
    },
    Error,
    "EncodingError U+A13D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA13E");
    },
    Error,
    "EncodingError U+A13E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA13F");
    },
    Error,
    "EncodingError U+A13F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA140");
    },
    Error,
    "EncodingError U+A140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA141");
    },
    Error,
    "EncodingError U+A141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA142");
    },
    Error,
    "EncodingError U+A142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA143");
    },
    Error,
    "EncodingError U+A143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA144");
    },
    Error,
    "EncodingError U+A144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA145");
    },
    Error,
    "EncodingError U+A145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA146");
    },
    Error,
    "EncodingError U+A146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA147");
    },
    Error,
    "EncodingError U+A147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA148");
    },
    Error,
    "EncodingError U+A148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA149");
    },
    Error,
    "EncodingError U+A149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA14A");
    },
    Error,
    "EncodingError U+A14A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA14B");
    },
    Error,
    "EncodingError U+A14B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA14C");
    },
    Error,
    "EncodingError U+A14C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA14D");
    },
    Error,
    "EncodingError U+A14D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA14E");
    },
    Error,
    "EncodingError U+A14E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA14F");
    },
    Error,
    "EncodingError U+A14F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA150");
    },
    Error,
    "EncodingError U+A150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA151");
    },
    Error,
    "EncodingError U+A151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA152");
    },
    Error,
    "EncodingError U+A152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA153");
    },
    Error,
    "EncodingError U+A153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA154");
    },
    Error,
    "EncodingError U+A154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA155");
    },
    Error,
    "EncodingError U+A155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA156");
    },
    Error,
    "EncodingError U+A156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA157");
    },
    Error,
    "EncodingError U+A157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA158");
    },
    Error,
    "EncodingError U+A158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA159");
    },
    Error,
    "EncodingError U+A159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA15A");
    },
    Error,
    "EncodingError U+A15A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA15B");
    },
    Error,
    "EncodingError U+A15B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA15C");
    },
    Error,
    "EncodingError U+A15C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA15D");
    },
    Error,
    "EncodingError U+A15D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA15E");
    },
    Error,
    "EncodingError U+A15E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA15F");
    },
    Error,
    "EncodingError U+A15F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA160");
    },
    Error,
    "EncodingError U+A160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA161");
    },
    Error,
    "EncodingError U+A161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA162");
    },
    Error,
    "EncodingError U+A162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA163");
    },
    Error,
    "EncodingError U+A163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA164");
    },
    Error,
    "EncodingError U+A164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA165");
    },
    Error,
    "EncodingError U+A165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA166");
    },
    Error,
    "EncodingError U+A166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA167");
    },
    Error,
    "EncodingError U+A167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA168");
    },
    Error,
    "EncodingError U+A168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA169");
    },
    Error,
    "EncodingError U+A169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA16A");
    },
    Error,
    "EncodingError U+A16A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA16B");
    },
    Error,
    "EncodingError U+A16B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA16C");
    },
    Error,
    "EncodingError U+A16C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA16D");
    },
    Error,
    "EncodingError U+A16D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA16E");
    },
    Error,
    "EncodingError U+A16E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA16F");
    },
    Error,
    "EncodingError U+A16F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA170");
    },
    Error,
    "EncodingError U+A170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA171");
    },
    Error,
    "EncodingError U+A171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA172");
    },
    Error,
    "EncodingError U+A172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA173");
    },
    Error,
    "EncodingError U+A173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA174");
    },
    Error,
    "EncodingError U+A174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA175");
    },
    Error,
    "EncodingError U+A175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA176");
    },
    Error,
    "EncodingError U+A176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA177");
    },
    Error,
    "EncodingError U+A177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA178");
    },
    Error,
    "EncodingError U+A178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA179");
    },
    Error,
    "EncodingError U+A179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA17A");
    },
    Error,
    "EncodingError U+A17A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA17B");
    },
    Error,
    "EncodingError U+A17B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA17C");
    },
    Error,
    "EncodingError U+A17C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA17D");
    },
    Error,
    "EncodingError U+A17D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA17E");
    },
    Error,
    "EncodingError U+A17E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA17F");
    },
    Error,
    "EncodingError U+A17F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA180");
    },
    Error,
    "EncodingError U+A180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA181");
    },
    Error,
    "EncodingError U+A181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA182");
    },
    Error,
    "EncodingError U+A182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA183");
    },
    Error,
    "EncodingError U+A183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA184");
    },
    Error,
    "EncodingError U+A184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA185");
    },
    Error,
    "EncodingError U+A185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA186");
    },
    Error,
    "EncodingError U+A186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA187");
    },
    Error,
    "EncodingError U+A187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA188");
    },
    Error,
    "EncodingError U+A188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA189");
    },
    Error,
    "EncodingError U+A189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA18A");
    },
    Error,
    "EncodingError U+A18A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA18B");
    },
    Error,
    "EncodingError U+A18B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA18C");
    },
    Error,
    "EncodingError U+A18C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA18D");
    },
    Error,
    "EncodingError U+A18D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA18E");
    },
    Error,
    "EncodingError U+A18E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA18F");
    },
    Error,
    "EncodingError U+A18F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA190");
    },
    Error,
    "EncodingError U+A190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA191");
    },
    Error,
    "EncodingError U+A191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA192");
    },
    Error,
    "EncodingError U+A192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA193");
    },
    Error,
    "EncodingError U+A193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA194");
    },
    Error,
    "EncodingError U+A194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA195");
    },
    Error,
    "EncodingError U+A195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA196");
    },
    Error,
    "EncodingError U+A196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA197");
    },
    Error,
    "EncodingError U+A197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA198");
    },
    Error,
    "EncodingError U+A198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA199");
    },
    Error,
    "EncodingError U+A199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA19A");
    },
    Error,
    "EncodingError U+A19A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA19B");
    },
    Error,
    "EncodingError U+A19B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA19C");
    },
    Error,
    "EncodingError U+A19C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA19D");
    },
    Error,
    "EncodingError U+A19D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA19E");
    },
    Error,
    "EncodingError U+A19E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA19F");
    },
    Error,
    "EncodingError U+A19F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A0");
    },
    Error,
    "EncodingError U+A1A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A1");
    },
    Error,
    "EncodingError U+A1A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A2");
    },
    Error,
    "EncodingError U+A1A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A3");
    },
    Error,
    "EncodingError U+A1A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A4");
    },
    Error,
    "EncodingError U+A1A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A5");
    },
    Error,
    "EncodingError U+A1A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A6");
    },
    Error,
    "EncodingError U+A1A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A7");
    },
    Error,
    "EncodingError U+A1A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A8");
    },
    Error,
    "EncodingError U+A1A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A9");
    },
    Error,
    "EncodingError U+A1A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1AA");
    },
    Error,
    "EncodingError U+A1AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1AB");
    },
    Error,
    "EncodingError U+A1AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1AC");
    },
    Error,
    "EncodingError U+A1AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1AD");
    },
    Error,
    "EncodingError U+A1AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1AE");
    },
    Error,
    "EncodingError U+A1AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1AF");
    },
    Error,
    "EncodingError U+A1AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B0");
    },
    Error,
    "EncodingError U+A1B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B1");
    },
    Error,
    "EncodingError U+A1B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B2");
    },
    Error,
    "EncodingError U+A1B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B3");
    },
    Error,
    "EncodingError U+A1B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B4");
    },
    Error,
    "EncodingError U+A1B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B5");
    },
    Error,
    "EncodingError U+A1B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B6");
    },
    Error,
    "EncodingError U+A1B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B7");
    },
    Error,
    "EncodingError U+A1B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B8");
    },
    Error,
    "EncodingError U+A1B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B9");
    },
    Error,
    "EncodingError U+A1B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1BA");
    },
    Error,
    "EncodingError U+A1BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1BB");
    },
    Error,
    "EncodingError U+A1BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1BC");
    },
    Error,
    "EncodingError U+A1BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1BD");
    },
    Error,
    "EncodingError U+A1BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1BE");
    },
    Error,
    "EncodingError U+A1BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1BF");
    },
    Error,
    "EncodingError U+A1BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C0");
    },
    Error,
    "EncodingError U+A1C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C1");
    },
    Error,
    "EncodingError U+A1C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C2");
    },
    Error,
    "EncodingError U+A1C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C3");
    },
    Error,
    "EncodingError U+A1C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C4");
    },
    Error,
    "EncodingError U+A1C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C5");
    },
    Error,
    "EncodingError U+A1C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C6");
    },
    Error,
    "EncodingError U+A1C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C7");
    },
    Error,
    "EncodingError U+A1C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C8");
    },
    Error,
    "EncodingError U+A1C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C9");
    },
    Error,
    "EncodingError U+A1C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1CA");
    },
    Error,
    "EncodingError U+A1CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1CB");
    },
    Error,
    "EncodingError U+A1CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1CC");
    },
    Error,
    "EncodingError U+A1CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1CD");
    },
    Error,
    "EncodingError U+A1CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1CE");
    },
    Error,
    "EncodingError U+A1CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1CF");
    },
    Error,
    "EncodingError U+A1CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D0");
    },
    Error,
    "EncodingError U+A1D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D1");
    },
    Error,
    "EncodingError U+A1D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D2");
    },
    Error,
    "EncodingError U+A1D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D3");
    },
    Error,
    "EncodingError U+A1D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D4");
    },
    Error,
    "EncodingError U+A1D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D5");
    },
    Error,
    "EncodingError U+A1D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D6");
    },
    Error,
    "EncodingError U+A1D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D7");
    },
    Error,
    "EncodingError U+A1D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D8");
    },
    Error,
    "EncodingError U+A1D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D9");
    },
    Error,
    "EncodingError U+A1D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1DA");
    },
    Error,
    "EncodingError U+A1DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1DB");
    },
    Error,
    "EncodingError U+A1DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1DC");
    },
    Error,
    "EncodingError U+A1DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1DD");
    },
    Error,
    "EncodingError U+A1DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1DE");
    },
    Error,
    "EncodingError U+A1DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1DF");
    },
    Error,
    "EncodingError U+A1DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E0");
    },
    Error,
    "EncodingError U+A1E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E1");
    },
    Error,
    "EncodingError U+A1E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E2");
    },
    Error,
    "EncodingError U+A1E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E3");
    },
    Error,
    "EncodingError U+A1E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E4");
    },
    Error,
    "EncodingError U+A1E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E5");
    },
    Error,
    "EncodingError U+A1E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E6");
    },
    Error,
    "EncodingError U+A1E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E7");
    },
    Error,
    "EncodingError U+A1E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E8");
    },
    Error,
    "EncodingError U+A1E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E9");
    },
    Error,
    "EncodingError U+A1E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1EA");
    },
    Error,
    "EncodingError U+A1EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1EB");
    },
    Error,
    "EncodingError U+A1EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1EC");
    },
    Error,
    "EncodingError U+A1EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1ED");
    },
    Error,
    "EncodingError U+A1ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1EE");
    },
    Error,
    "EncodingError U+A1EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1EF");
    },
    Error,
    "EncodingError U+A1EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F0");
    },
    Error,
    "EncodingError U+A1F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F1");
    },
    Error,
    "EncodingError U+A1F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F2");
    },
    Error,
    "EncodingError U+A1F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F3");
    },
    Error,
    "EncodingError U+A1F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F4");
    },
    Error,
    "EncodingError U+A1F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F5");
    },
    Error,
    "EncodingError U+A1F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F6");
    },
    Error,
    "EncodingError U+A1F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F7");
    },
    Error,
    "EncodingError U+A1F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F8");
    },
    Error,
    "EncodingError U+A1F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F9");
    },
    Error,
    "EncodingError U+A1F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1FA");
    },
    Error,
    "EncodingError U+A1FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1FB");
    },
    Error,
    "EncodingError U+A1FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1FC");
    },
    Error,
    "EncodingError U+A1FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1FD");
    },
    Error,
    "EncodingError U+A1FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1FE");
    },
    Error,
    "EncodingError U+A1FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1FF");
    },
    Error,
    "EncodingError U+A1FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA200");
    },
    Error,
    "EncodingError U+A200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA201");
    },
    Error,
    "EncodingError U+A201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA202");
    },
    Error,
    "EncodingError U+A202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA203");
    },
    Error,
    "EncodingError U+A203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA204");
    },
    Error,
    "EncodingError U+A204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA205");
    },
    Error,
    "EncodingError U+A205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA206");
    },
    Error,
    "EncodingError U+A206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA207");
    },
    Error,
    "EncodingError U+A207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA208");
    },
    Error,
    "EncodingError U+A208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA209");
    },
    Error,
    "EncodingError U+A209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA20A");
    },
    Error,
    "EncodingError U+A20A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA20B");
    },
    Error,
    "EncodingError U+A20B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA20C");
    },
    Error,
    "EncodingError U+A20C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA20D");
    },
    Error,
    "EncodingError U+A20D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA20E");
    },
    Error,
    "EncodingError U+A20E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA20F");
    },
    Error,
    "EncodingError U+A20F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA210");
    },
    Error,
    "EncodingError U+A210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA211");
    },
    Error,
    "EncodingError U+A211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA212");
    },
    Error,
    "EncodingError U+A212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA213");
    },
    Error,
    "EncodingError U+A213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA214");
    },
    Error,
    "EncodingError U+A214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA215");
    },
    Error,
    "EncodingError U+A215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA216");
    },
    Error,
    "EncodingError U+A216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA217");
    },
    Error,
    "EncodingError U+A217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA218");
    },
    Error,
    "EncodingError U+A218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA219");
    },
    Error,
    "EncodingError U+A219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA21A");
    },
    Error,
    "EncodingError U+A21A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA21B");
    },
    Error,
    "EncodingError U+A21B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA21C");
    },
    Error,
    "EncodingError U+A21C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA21D");
    },
    Error,
    "EncodingError U+A21D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA21E");
    },
    Error,
    "EncodingError U+A21E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA21F");
    },
    Error,
    "EncodingError U+A21F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA220");
    },
    Error,
    "EncodingError U+A220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA221");
    },
    Error,
    "EncodingError U+A221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA222");
    },
    Error,
    "EncodingError U+A222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA223");
    },
    Error,
    "EncodingError U+A223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA224");
    },
    Error,
    "EncodingError U+A224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA225");
    },
    Error,
    "EncodingError U+A225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA226");
    },
    Error,
    "EncodingError U+A226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA227");
    },
    Error,
    "EncodingError U+A227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA228");
    },
    Error,
    "EncodingError U+A228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA229");
    },
    Error,
    "EncodingError U+A229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA22A");
    },
    Error,
    "EncodingError U+A22A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA22B");
    },
    Error,
    "EncodingError U+A22B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA22C");
    },
    Error,
    "EncodingError U+A22C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA22D");
    },
    Error,
    "EncodingError U+A22D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA22E");
    },
    Error,
    "EncodingError U+A22E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA22F");
    },
    Error,
    "EncodingError U+A22F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA230");
    },
    Error,
    "EncodingError U+A230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA231");
    },
    Error,
    "EncodingError U+A231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA232");
    },
    Error,
    "EncodingError U+A232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA233");
    },
    Error,
    "EncodingError U+A233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA234");
    },
    Error,
    "EncodingError U+A234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA235");
    },
    Error,
    "EncodingError U+A235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA236");
    },
    Error,
    "EncodingError U+A236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA237");
    },
    Error,
    "EncodingError U+A237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA238");
    },
    Error,
    "EncodingError U+A238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA239");
    },
    Error,
    "EncodingError U+A239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA23A");
    },
    Error,
    "EncodingError U+A23A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA23B");
    },
    Error,
    "EncodingError U+A23B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA23C");
    },
    Error,
    "EncodingError U+A23C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA23D");
    },
    Error,
    "EncodingError U+A23D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA23E");
    },
    Error,
    "EncodingError U+A23E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA23F");
    },
    Error,
    "EncodingError U+A23F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA240");
    },
    Error,
    "EncodingError U+A240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA241");
    },
    Error,
    "EncodingError U+A241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA242");
    },
    Error,
    "EncodingError U+A242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA243");
    },
    Error,
    "EncodingError U+A243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA244");
    },
    Error,
    "EncodingError U+A244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA245");
    },
    Error,
    "EncodingError U+A245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA246");
    },
    Error,
    "EncodingError U+A246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA247");
    },
    Error,
    "EncodingError U+A247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA248");
    },
    Error,
    "EncodingError U+A248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA249");
    },
    Error,
    "EncodingError U+A249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA24A");
    },
    Error,
    "EncodingError U+A24A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA24B");
    },
    Error,
    "EncodingError U+A24B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA24C");
    },
    Error,
    "EncodingError U+A24C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA24D");
    },
    Error,
    "EncodingError U+A24D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA24E");
    },
    Error,
    "EncodingError U+A24E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA24F");
    },
    Error,
    "EncodingError U+A24F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA250");
    },
    Error,
    "EncodingError U+A250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA251");
    },
    Error,
    "EncodingError U+A251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA252");
    },
    Error,
    "EncodingError U+A252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA253");
    },
    Error,
    "EncodingError U+A253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA254");
    },
    Error,
    "EncodingError U+A254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA255");
    },
    Error,
    "EncodingError U+A255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA256");
    },
    Error,
    "EncodingError U+A256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA257");
    },
    Error,
    "EncodingError U+A257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA258");
    },
    Error,
    "EncodingError U+A258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA259");
    },
    Error,
    "EncodingError U+A259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA25A");
    },
    Error,
    "EncodingError U+A25A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA25B");
    },
    Error,
    "EncodingError U+A25B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA25C");
    },
    Error,
    "EncodingError U+A25C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA25D");
    },
    Error,
    "EncodingError U+A25D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA25E");
    },
    Error,
    "EncodingError U+A25E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA25F");
    },
    Error,
    "EncodingError U+A25F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA260");
    },
    Error,
    "EncodingError U+A260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA261");
    },
    Error,
    "EncodingError U+A261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA262");
    },
    Error,
    "EncodingError U+A262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA263");
    },
    Error,
    "EncodingError U+A263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA264");
    },
    Error,
    "EncodingError U+A264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA265");
    },
    Error,
    "EncodingError U+A265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA266");
    },
    Error,
    "EncodingError U+A266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA267");
    },
    Error,
    "EncodingError U+A267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA268");
    },
    Error,
    "EncodingError U+A268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA269");
    },
    Error,
    "EncodingError U+A269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA26A");
    },
    Error,
    "EncodingError U+A26A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA26B");
    },
    Error,
    "EncodingError U+A26B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA26C");
    },
    Error,
    "EncodingError U+A26C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA26D");
    },
    Error,
    "EncodingError U+A26D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA26E");
    },
    Error,
    "EncodingError U+A26E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA26F");
    },
    Error,
    "EncodingError U+A26F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA270");
    },
    Error,
    "EncodingError U+A270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA271");
    },
    Error,
    "EncodingError U+A271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA272");
    },
    Error,
    "EncodingError U+A272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA273");
    },
    Error,
    "EncodingError U+A273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA274");
    },
    Error,
    "EncodingError U+A274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA275");
    },
    Error,
    "EncodingError U+A275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA276");
    },
    Error,
    "EncodingError U+A276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA277");
    },
    Error,
    "EncodingError U+A277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA278");
    },
    Error,
    "EncodingError U+A278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA279");
    },
    Error,
    "EncodingError U+A279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA27A");
    },
    Error,
    "EncodingError U+A27A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA27B");
    },
    Error,
    "EncodingError U+A27B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA27C");
    },
    Error,
    "EncodingError U+A27C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA27D");
    },
    Error,
    "EncodingError U+A27D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA27E");
    },
    Error,
    "EncodingError U+A27E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA27F");
    },
    Error,
    "EncodingError U+A27F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA280");
    },
    Error,
    "EncodingError U+A280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA281");
    },
    Error,
    "EncodingError U+A281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA282");
    },
    Error,
    "EncodingError U+A282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA283");
    },
    Error,
    "EncodingError U+A283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA284");
    },
    Error,
    "EncodingError U+A284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA285");
    },
    Error,
    "EncodingError U+A285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA286");
    },
    Error,
    "EncodingError U+A286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA287");
    },
    Error,
    "EncodingError U+A287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA288");
    },
    Error,
    "EncodingError U+A288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA289");
    },
    Error,
    "EncodingError U+A289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA28A");
    },
    Error,
    "EncodingError U+A28A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA28B");
    },
    Error,
    "EncodingError U+A28B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA28C");
    },
    Error,
    "EncodingError U+A28C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA28D");
    },
    Error,
    "EncodingError U+A28D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA28E");
    },
    Error,
    "EncodingError U+A28E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA28F");
    },
    Error,
    "EncodingError U+A28F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA290");
    },
    Error,
    "EncodingError U+A290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA291");
    },
    Error,
    "EncodingError U+A291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA292");
    },
    Error,
    "EncodingError U+A292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA293");
    },
    Error,
    "EncodingError U+A293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA294");
    },
    Error,
    "EncodingError U+A294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA295");
    },
    Error,
    "EncodingError U+A295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA296");
    },
    Error,
    "EncodingError U+A296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA297");
    },
    Error,
    "EncodingError U+A297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA298");
    },
    Error,
    "EncodingError U+A298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA299");
    },
    Error,
    "EncodingError U+A299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA29A");
    },
    Error,
    "EncodingError U+A29A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA29B");
    },
    Error,
    "EncodingError U+A29B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA29C");
    },
    Error,
    "EncodingError U+A29C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA29D");
    },
    Error,
    "EncodingError U+A29D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA29E");
    },
    Error,
    "EncodingError U+A29E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA29F");
    },
    Error,
    "EncodingError U+A29F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A0");
    },
    Error,
    "EncodingError U+A2A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A1");
    },
    Error,
    "EncodingError U+A2A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A2");
    },
    Error,
    "EncodingError U+A2A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A3");
    },
    Error,
    "EncodingError U+A2A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A4");
    },
    Error,
    "EncodingError U+A2A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A5");
    },
    Error,
    "EncodingError U+A2A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A6");
    },
    Error,
    "EncodingError U+A2A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A7");
    },
    Error,
    "EncodingError U+A2A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A8");
    },
    Error,
    "EncodingError U+A2A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A9");
    },
    Error,
    "EncodingError U+A2A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2AA");
    },
    Error,
    "EncodingError U+A2AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2AB");
    },
    Error,
    "EncodingError U+A2AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2AC");
    },
    Error,
    "EncodingError U+A2AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2AD");
    },
    Error,
    "EncodingError U+A2AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2AE");
    },
    Error,
    "EncodingError U+A2AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2AF");
    },
    Error,
    "EncodingError U+A2AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B0");
    },
    Error,
    "EncodingError U+A2B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B1");
    },
    Error,
    "EncodingError U+A2B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B2");
    },
    Error,
    "EncodingError U+A2B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B3");
    },
    Error,
    "EncodingError U+A2B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B4");
    },
    Error,
    "EncodingError U+A2B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B5");
    },
    Error,
    "EncodingError U+A2B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B6");
    },
    Error,
    "EncodingError U+A2B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B7");
    },
    Error,
    "EncodingError U+A2B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B8");
    },
    Error,
    "EncodingError U+A2B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B9");
    },
    Error,
    "EncodingError U+A2B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2BA");
    },
    Error,
    "EncodingError U+A2BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2BB");
    },
    Error,
    "EncodingError U+A2BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2BC");
    },
    Error,
    "EncodingError U+A2BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2BD");
    },
    Error,
    "EncodingError U+A2BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2BE");
    },
    Error,
    "EncodingError U+A2BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2BF");
    },
    Error,
    "EncodingError U+A2BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C0");
    },
    Error,
    "EncodingError U+A2C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C1");
    },
    Error,
    "EncodingError U+A2C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C2");
    },
    Error,
    "EncodingError U+A2C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C3");
    },
    Error,
    "EncodingError U+A2C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C4");
    },
    Error,
    "EncodingError U+A2C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C5");
    },
    Error,
    "EncodingError U+A2C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C6");
    },
    Error,
    "EncodingError U+A2C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C7");
    },
    Error,
    "EncodingError U+A2C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C8");
    },
    Error,
    "EncodingError U+A2C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C9");
    },
    Error,
    "EncodingError U+A2C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2CA");
    },
    Error,
    "EncodingError U+A2CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2CB");
    },
    Error,
    "EncodingError U+A2CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2CC");
    },
    Error,
    "EncodingError U+A2CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2CD");
    },
    Error,
    "EncodingError U+A2CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2CE");
    },
    Error,
    "EncodingError U+A2CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2CF");
    },
    Error,
    "EncodingError U+A2CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D0");
    },
    Error,
    "EncodingError U+A2D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D1");
    },
    Error,
    "EncodingError U+A2D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D2");
    },
    Error,
    "EncodingError U+A2D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D3");
    },
    Error,
    "EncodingError U+A2D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D4");
    },
    Error,
    "EncodingError U+A2D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D5");
    },
    Error,
    "EncodingError U+A2D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D6");
    },
    Error,
    "EncodingError U+A2D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D7");
    },
    Error,
    "EncodingError U+A2D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D8");
    },
    Error,
    "EncodingError U+A2D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D9");
    },
    Error,
    "EncodingError U+A2D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2DA");
    },
    Error,
    "EncodingError U+A2DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2DB");
    },
    Error,
    "EncodingError U+A2DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2DC");
    },
    Error,
    "EncodingError U+A2DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2DD");
    },
    Error,
    "EncodingError U+A2DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2DE");
    },
    Error,
    "EncodingError U+A2DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2DF");
    },
    Error,
    "EncodingError U+A2DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E0");
    },
    Error,
    "EncodingError U+A2E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E1");
    },
    Error,
    "EncodingError U+A2E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E2");
    },
    Error,
    "EncodingError U+A2E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E3");
    },
    Error,
    "EncodingError U+A2E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E4");
    },
    Error,
    "EncodingError U+A2E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E5");
    },
    Error,
    "EncodingError U+A2E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E6");
    },
    Error,
    "EncodingError U+A2E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E7");
    },
    Error,
    "EncodingError U+A2E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E8");
    },
    Error,
    "EncodingError U+A2E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E9");
    },
    Error,
    "EncodingError U+A2E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2EA");
    },
    Error,
    "EncodingError U+A2EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2EB");
    },
    Error,
    "EncodingError U+A2EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2EC");
    },
    Error,
    "EncodingError U+A2EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2ED");
    },
    Error,
    "EncodingError U+A2ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2EE");
    },
    Error,
    "EncodingError U+A2EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2EF");
    },
    Error,
    "EncodingError U+A2EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F0");
    },
    Error,
    "EncodingError U+A2F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F1");
    },
    Error,
    "EncodingError U+A2F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F2");
    },
    Error,
    "EncodingError U+A2F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F3");
    },
    Error,
    "EncodingError U+A2F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F4");
    },
    Error,
    "EncodingError U+A2F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F5");
    },
    Error,
    "EncodingError U+A2F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F6");
    },
    Error,
    "EncodingError U+A2F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F7");
    },
    Error,
    "EncodingError U+A2F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F8");
    },
    Error,
    "EncodingError U+A2F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F9");
    },
    Error,
    "EncodingError U+A2F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2FA");
    },
    Error,
    "EncodingError U+A2FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2FB");
    },
    Error,
    "EncodingError U+A2FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2FC");
    },
    Error,
    "EncodingError U+A2FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2FD");
    },
    Error,
    "EncodingError U+A2FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2FE");
    },
    Error,
    "EncodingError U+A2FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2FF");
    },
    Error,
    "EncodingError U+A2FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA300");
    },
    Error,
    "EncodingError U+A300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA301");
    },
    Error,
    "EncodingError U+A301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA302");
    },
    Error,
    "EncodingError U+A302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA303");
    },
    Error,
    "EncodingError U+A303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA304");
    },
    Error,
    "EncodingError U+A304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA305");
    },
    Error,
    "EncodingError U+A305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA306");
    },
    Error,
    "EncodingError U+A306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA307");
    },
    Error,
    "EncodingError U+A307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA308");
    },
    Error,
    "EncodingError U+A308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA309");
    },
    Error,
    "EncodingError U+A309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA30A");
    },
    Error,
    "EncodingError U+A30A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA30B");
    },
    Error,
    "EncodingError U+A30B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA30C");
    },
    Error,
    "EncodingError U+A30C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA30D");
    },
    Error,
    "EncodingError U+A30D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA30E");
    },
    Error,
    "EncodingError U+A30E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA30F");
    },
    Error,
    "EncodingError U+A30F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA310");
    },
    Error,
    "EncodingError U+A310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA311");
    },
    Error,
    "EncodingError U+A311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA312");
    },
    Error,
    "EncodingError U+A312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA313");
    },
    Error,
    "EncodingError U+A313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA314");
    },
    Error,
    "EncodingError U+A314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA315");
    },
    Error,
    "EncodingError U+A315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA316");
    },
    Error,
    "EncodingError U+A316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA317");
    },
    Error,
    "EncodingError U+A317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA318");
    },
    Error,
    "EncodingError U+A318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA319");
    },
    Error,
    "EncodingError U+A319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA31A");
    },
    Error,
    "EncodingError U+A31A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA31B");
    },
    Error,
    "EncodingError U+A31B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA31C");
    },
    Error,
    "EncodingError U+A31C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA31D");
    },
    Error,
    "EncodingError U+A31D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA31E");
    },
    Error,
    "EncodingError U+A31E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA31F");
    },
    Error,
    "EncodingError U+A31F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA320");
    },
    Error,
    "EncodingError U+A320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA321");
    },
    Error,
    "EncodingError U+A321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA322");
    },
    Error,
    "EncodingError U+A322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA323");
    },
    Error,
    "EncodingError U+A323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA324");
    },
    Error,
    "EncodingError U+A324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA325");
    },
    Error,
    "EncodingError U+A325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA326");
    },
    Error,
    "EncodingError U+A326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA327");
    },
    Error,
    "EncodingError U+A327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA328");
    },
    Error,
    "EncodingError U+A328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA329");
    },
    Error,
    "EncodingError U+A329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA32A");
    },
    Error,
    "EncodingError U+A32A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA32B");
    },
    Error,
    "EncodingError U+A32B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA32C");
    },
    Error,
    "EncodingError U+A32C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA32D");
    },
    Error,
    "EncodingError U+A32D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA32E");
    },
    Error,
    "EncodingError U+A32E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA32F");
    },
    Error,
    "EncodingError U+A32F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA330");
    },
    Error,
    "EncodingError U+A330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA331");
    },
    Error,
    "EncodingError U+A331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA332");
    },
    Error,
    "EncodingError U+A332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA333");
    },
    Error,
    "EncodingError U+A333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA334");
    },
    Error,
    "EncodingError U+A334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA335");
    },
    Error,
    "EncodingError U+A335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA336");
    },
    Error,
    "EncodingError U+A336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA337");
    },
    Error,
    "EncodingError U+A337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA338");
    },
    Error,
    "EncodingError U+A338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA339");
    },
    Error,
    "EncodingError U+A339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA33A");
    },
    Error,
    "EncodingError U+A33A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA33B");
    },
    Error,
    "EncodingError U+A33B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA33C");
    },
    Error,
    "EncodingError U+A33C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA33D");
    },
    Error,
    "EncodingError U+A33D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA33E");
    },
    Error,
    "EncodingError U+A33E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA33F");
    },
    Error,
    "EncodingError U+A33F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA340");
    },
    Error,
    "EncodingError U+A340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA341");
    },
    Error,
    "EncodingError U+A341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA342");
    },
    Error,
    "EncodingError U+A342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA343");
    },
    Error,
    "EncodingError U+A343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA344");
    },
    Error,
    "EncodingError U+A344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA345");
    },
    Error,
    "EncodingError U+A345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA346");
    },
    Error,
    "EncodingError U+A346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA347");
    },
    Error,
    "EncodingError U+A347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA348");
    },
    Error,
    "EncodingError U+A348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA349");
    },
    Error,
    "EncodingError U+A349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA34A");
    },
    Error,
    "EncodingError U+A34A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA34B");
    },
    Error,
    "EncodingError U+A34B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA34C");
    },
    Error,
    "EncodingError U+A34C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA34D");
    },
    Error,
    "EncodingError U+A34D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA34E");
    },
    Error,
    "EncodingError U+A34E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA34F");
    },
    Error,
    "EncodingError U+A34F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA350");
    },
    Error,
    "EncodingError U+A350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA351");
    },
    Error,
    "EncodingError U+A351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA352");
    },
    Error,
    "EncodingError U+A352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA353");
    },
    Error,
    "EncodingError U+A353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA354");
    },
    Error,
    "EncodingError U+A354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA355");
    },
    Error,
    "EncodingError U+A355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA356");
    },
    Error,
    "EncodingError U+A356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA357");
    },
    Error,
    "EncodingError U+A357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA358");
    },
    Error,
    "EncodingError U+A358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA359");
    },
    Error,
    "EncodingError U+A359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA35A");
    },
    Error,
    "EncodingError U+A35A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA35B");
    },
    Error,
    "EncodingError U+A35B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA35C");
    },
    Error,
    "EncodingError U+A35C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA35D");
    },
    Error,
    "EncodingError U+A35D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA35E");
    },
    Error,
    "EncodingError U+A35E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA35F");
    },
    Error,
    "EncodingError U+A35F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA360");
    },
    Error,
    "EncodingError U+A360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA361");
    },
    Error,
    "EncodingError U+A361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA362");
    },
    Error,
    "EncodingError U+A362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA363");
    },
    Error,
    "EncodingError U+A363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA364");
    },
    Error,
    "EncodingError U+A364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA365");
    },
    Error,
    "EncodingError U+A365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA366");
    },
    Error,
    "EncodingError U+A366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA367");
    },
    Error,
    "EncodingError U+A367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA368");
    },
    Error,
    "EncodingError U+A368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA369");
    },
    Error,
    "EncodingError U+A369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA36A");
    },
    Error,
    "EncodingError U+A36A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA36B");
    },
    Error,
    "EncodingError U+A36B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA36C");
    },
    Error,
    "EncodingError U+A36C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA36D");
    },
    Error,
    "EncodingError U+A36D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA36E");
    },
    Error,
    "EncodingError U+A36E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA36F");
    },
    Error,
    "EncodingError U+A36F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA370");
    },
    Error,
    "EncodingError U+A370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA371");
    },
    Error,
    "EncodingError U+A371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA372");
    },
    Error,
    "EncodingError U+A372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA373");
    },
    Error,
    "EncodingError U+A373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA374");
    },
    Error,
    "EncodingError U+A374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA375");
    },
    Error,
    "EncodingError U+A375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA376");
    },
    Error,
    "EncodingError U+A376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA377");
    },
    Error,
    "EncodingError U+A377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA378");
    },
    Error,
    "EncodingError U+A378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA379");
    },
    Error,
    "EncodingError U+A379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA37A");
    },
    Error,
    "EncodingError U+A37A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA37B");
    },
    Error,
    "EncodingError U+A37B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA37C");
    },
    Error,
    "EncodingError U+A37C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA37D");
    },
    Error,
    "EncodingError U+A37D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA37E");
    },
    Error,
    "EncodingError U+A37E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA37F");
    },
    Error,
    "EncodingError U+A37F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA380");
    },
    Error,
    "EncodingError U+A380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA381");
    },
    Error,
    "EncodingError U+A381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA382");
    },
    Error,
    "EncodingError U+A382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA383");
    },
    Error,
    "EncodingError U+A383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA384");
    },
    Error,
    "EncodingError U+A384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA385");
    },
    Error,
    "EncodingError U+A385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA386");
    },
    Error,
    "EncodingError U+A386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA387");
    },
    Error,
    "EncodingError U+A387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA388");
    },
    Error,
    "EncodingError U+A388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA389");
    },
    Error,
    "EncodingError U+A389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA38A");
    },
    Error,
    "EncodingError U+A38A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA38B");
    },
    Error,
    "EncodingError U+A38B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA38C");
    },
    Error,
    "EncodingError U+A38C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA38D");
    },
    Error,
    "EncodingError U+A38D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA38E");
    },
    Error,
    "EncodingError U+A38E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA38F");
    },
    Error,
    "EncodingError U+A38F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA390");
    },
    Error,
    "EncodingError U+A390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA391");
    },
    Error,
    "EncodingError U+A391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA392");
    },
    Error,
    "EncodingError U+A392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA393");
    },
    Error,
    "EncodingError U+A393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA394");
    },
    Error,
    "EncodingError U+A394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA395");
    },
    Error,
    "EncodingError U+A395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA396");
    },
    Error,
    "EncodingError U+A396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA397");
    },
    Error,
    "EncodingError U+A397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA398");
    },
    Error,
    "EncodingError U+A398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA399");
    },
    Error,
    "EncodingError U+A399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA39A");
    },
    Error,
    "EncodingError U+A39A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA39B");
    },
    Error,
    "EncodingError U+A39B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA39C");
    },
    Error,
    "EncodingError U+A39C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA39D");
    },
    Error,
    "EncodingError U+A39D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA39E");
    },
    Error,
    "EncodingError U+A39E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA39F");
    },
    Error,
    "EncodingError U+A39F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A0");
    },
    Error,
    "EncodingError U+A3A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A1");
    },
    Error,
    "EncodingError U+A3A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A2");
    },
    Error,
    "EncodingError U+A3A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A3");
    },
    Error,
    "EncodingError U+A3A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A4");
    },
    Error,
    "EncodingError U+A3A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A5");
    },
    Error,
    "EncodingError U+A3A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A6");
    },
    Error,
    "EncodingError U+A3A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A7");
    },
    Error,
    "EncodingError U+A3A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A8");
    },
    Error,
    "EncodingError U+A3A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A9");
    },
    Error,
    "EncodingError U+A3A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3AA");
    },
    Error,
    "EncodingError U+A3AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3AB");
    },
    Error,
    "EncodingError U+A3AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3AC");
    },
    Error,
    "EncodingError U+A3AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3AD");
    },
    Error,
    "EncodingError U+A3AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3AE");
    },
    Error,
    "EncodingError U+A3AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3AF");
    },
    Error,
    "EncodingError U+A3AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B0");
    },
    Error,
    "EncodingError U+A3B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B1");
    },
    Error,
    "EncodingError U+A3B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B2");
    },
    Error,
    "EncodingError U+A3B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B3");
    },
    Error,
    "EncodingError U+A3B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B4");
    },
    Error,
    "EncodingError U+A3B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B5");
    },
    Error,
    "EncodingError U+A3B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B6");
    },
    Error,
    "EncodingError U+A3B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B7");
    },
    Error,
    "EncodingError U+A3B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B8");
    },
    Error,
    "EncodingError U+A3B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B9");
    },
    Error,
    "EncodingError U+A3B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3BA");
    },
    Error,
    "EncodingError U+A3BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3BB");
    },
    Error,
    "EncodingError U+A3BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3BC");
    },
    Error,
    "EncodingError U+A3BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3BD");
    },
    Error,
    "EncodingError U+A3BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3BE");
    },
    Error,
    "EncodingError U+A3BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3BF");
    },
    Error,
    "EncodingError U+A3BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C0");
    },
    Error,
    "EncodingError U+A3C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C1");
    },
    Error,
    "EncodingError U+A3C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C2");
    },
    Error,
    "EncodingError U+A3C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C3");
    },
    Error,
    "EncodingError U+A3C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C4");
    },
    Error,
    "EncodingError U+A3C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C5");
    },
    Error,
    "EncodingError U+A3C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C6");
    },
    Error,
    "EncodingError U+A3C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C7");
    },
    Error,
    "EncodingError U+A3C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C8");
    },
    Error,
    "EncodingError U+A3C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C9");
    },
    Error,
    "EncodingError U+A3C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3CA");
    },
    Error,
    "EncodingError U+A3CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3CB");
    },
    Error,
    "EncodingError U+A3CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3CC");
    },
    Error,
    "EncodingError U+A3CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3CD");
    },
    Error,
    "EncodingError U+A3CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3CE");
    },
    Error,
    "EncodingError U+A3CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3CF");
    },
    Error,
    "EncodingError U+A3CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D0");
    },
    Error,
    "EncodingError U+A3D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D1");
    },
    Error,
    "EncodingError U+A3D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D2");
    },
    Error,
    "EncodingError U+A3D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D3");
    },
    Error,
    "EncodingError U+A3D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D4");
    },
    Error,
    "EncodingError U+A3D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D5");
    },
    Error,
    "EncodingError U+A3D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D6");
    },
    Error,
    "EncodingError U+A3D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D7");
    },
    Error,
    "EncodingError U+A3D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D8");
    },
    Error,
    "EncodingError U+A3D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D9");
    },
    Error,
    "EncodingError U+A3D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3DA");
    },
    Error,
    "EncodingError U+A3DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3DB");
    },
    Error,
    "EncodingError U+A3DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3DC");
    },
    Error,
    "EncodingError U+A3DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3DD");
    },
    Error,
    "EncodingError U+A3DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3DE");
    },
    Error,
    "EncodingError U+A3DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3DF");
    },
    Error,
    "EncodingError U+A3DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E0");
    },
    Error,
    "EncodingError U+A3E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E1");
    },
    Error,
    "EncodingError U+A3E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E2");
    },
    Error,
    "EncodingError U+A3E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E3");
    },
    Error,
    "EncodingError U+A3E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E4");
    },
    Error,
    "EncodingError U+A3E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E5");
    },
    Error,
    "EncodingError U+A3E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E6");
    },
    Error,
    "EncodingError U+A3E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E7");
    },
    Error,
    "EncodingError U+A3E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E8");
    },
    Error,
    "EncodingError U+A3E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E9");
    },
    Error,
    "EncodingError U+A3E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3EA");
    },
    Error,
    "EncodingError U+A3EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3EB");
    },
    Error,
    "EncodingError U+A3EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3EC");
    },
    Error,
    "EncodingError U+A3EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3ED");
    },
    Error,
    "EncodingError U+A3ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3EE");
    },
    Error,
    "EncodingError U+A3EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3EF");
    },
    Error,
    "EncodingError U+A3EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F0");
    },
    Error,
    "EncodingError U+A3F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F1");
    },
    Error,
    "EncodingError U+A3F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F2");
    },
    Error,
    "EncodingError U+A3F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F3");
    },
    Error,
    "EncodingError U+A3F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F4");
    },
    Error,
    "EncodingError U+A3F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F5");
    },
    Error,
    "EncodingError U+A3F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F6");
    },
    Error,
    "EncodingError U+A3F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F7");
    },
    Error,
    "EncodingError U+A3F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F8");
    },
    Error,
    "EncodingError U+A3F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F9");
    },
    Error,
    "EncodingError U+A3F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3FA");
    },
    Error,
    "EncodingError U+A3FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3FB");
    },
    Error,
    "EncodingError U+A3FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3FC");
    },
    Error,
    "EncodingError U+A3FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3FD");
    },
    Error,
    "EncodingError U+A3FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3FE");
    },
    Error,
    "EncodingError U+A3FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3FF");
    },
    Error,
    "EncodingError U+A3FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA400");
    },
    Error,
    "EncodingError U+A400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA401");
    },
    Error,
    "EncodingError U+A401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA402");
    },
    Error,
    "EncodingError U+A402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA403");
    },
    Error,
    "EncodingError U+A403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA404");
    },
    Error,
    "EncodingError U+A404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA405");
    },
    Error,
    "EncodingError U+A405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA406");
    },
    Error,
    "EncodingError U+A406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA407");
    },
    Error,
    "EncodingError U+A407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA408");
    },
    Error,
    "EncodingError U+A408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA409");
    },
    Error,
    "EncodingError U+A409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA40A");
    },
    Error,
    "EncodingError U+A40A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA40B");
    },
    Error,
    "EncodingError U+A40B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA40C");
    },
    Error,
    "EncodingError U+A40C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA40D");
    },
    Error,
    "EncodingError U+A40D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA40E");
    },
    Error,
    "EncodingError U+A40E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA40F");
    },
    Error,
    "EncodingError U+A40F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA410");
    },
    Error,
    "EncodingError U+A410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA411");
    },
    Error,
    "EncodingError U+A411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA412");
    },
    Error,
    "EncodingError U+A412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA413");
    },
    Error,
    "EncodingError U+A413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA414");
    },
    Error,
    "EncodingError U+A414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA415");
    },
    Error,
    "EncodingError U+A415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA416");
    },
    Error,
    "EncodingError U+A416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA417");
    },
    Error,
    "EncodingError U+A417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA418");
    },
    Error,
    "EncodingError U+A418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA419");
    },
    Error,
    "EncodingError U+A419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA41A");
    },
    Error,
    "EncodingError U+A41A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA41B");
    },
    Error,
    "EncodingError U+A41B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA41C");
    },
    Error,
    "EncodingError U+A41C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA41D");
    },
    Error,
    "EncodingError U+A41D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA41E");
    },
    Error,
    "EncodingError U+A41E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA41F");
    },
    Error,
    "EncodingError U+A41F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA420");
    },
    Error,
    "EncodingError U+A420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA421");
    },
    Error,
    "EncodingError U+A421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA422");
    },
    Error,
    "EncodingError U+A422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA423");
    },
    Error,
    "EncodingError U+A423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA424");
    },
    Error,
    "EncodingError U+A424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA425");
    },
    Error,
    "EncodingError U+A425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA426");
    },
    Error,
    "EncodingError U+A426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA427");
    },
    Error,
    "EncodingError U+A427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA428");
    },
    Error,
    "EncodingError U+A428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA429");
    },
    Error,
    "EncodingError U+A429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA42A");
    },
    Error,
    "EncodingError U+A42A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA42B");
    },
    Error,
    "EncodingError U+A42B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA42C");
    },
    Error,
    "EncodingError U+A42C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA42D");
    },
    Error,
    "EncodingError U+A42D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA42E");
    },
    Error,
    "EncodingError U+A42E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA42F");
    },
    Error,
    "EncodingError U+A42F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA430");
    },
    Error,
    "EncodingError U+A430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA431");
    },
    Error,
    "EncodingError U+A431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA432");
    },
    Error,
    "EncodingError U+A432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA433");
    },
    Error,
    "EncodingError U+A433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA434");
    },
    Error,
    "EncodingError U+A434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA435");
    },
    Error,
    "EncodingError U+A435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA436");
    },
    Error,
    "EncodingError U+A436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA437");
    },
    Error,
    "EncodingError U+A437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA438");
    },
    Error,
    "EncodingError U+A438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA439");
    },
    Error,
    "EncodingError U+A439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA43A");
    },
    Error,
    "EncodingError U+A43A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA43B");
    },
    Error,
    "EncodingError U+A43B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA43C");
    },
    Error,
    "EncodingError U+A43C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA43D");
    },
    Error,
    "EncodingError U+A43D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA43E");
    },
    Error,
    "EncodingError U+A43E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA43F");
    },
    Error,
    "EncodingError U+A43F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA440");
    },
    Error,
    "EncodingError U+A440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA441");
    },
    Error,
    "EncodingError U+A441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA442");
    },
    Error,
    "EncodingError U+A442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA443");
    },
    Error,
    "EncodingError U+A443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA444");
    },
    Error,
    "EncodingError U+A444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA445");
    },
    Error,
    "EncodingError U+A445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA446");
    },
    Error,
    "EncodingError U+A446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA447");
    },
    Error,
    "EncodingError U+A447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA448");
    },
    Error,
    "EncodingError U+A448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA449");
    },
    Error,
    "EncodingError U+A449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA44A");
    },
    Error,
    "EncodingError U+A44A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA44B");
    },
    Error,
    "EncodingError U+A44B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA44C");
    },
    Error,
    "EncodingError U+A44C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA44D");
    },
    Error,
    "EncodingError U+A44D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA44E");
    },
    Error,
    "EncodingError U+A44E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA44F");
    },
    Error,
    "EncodingError U+A44F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA450");
    },
    Error,
    "EncodingError U+A450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA451");
    },
    Error,
    "EncodingError U+A451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA452");
    },
    Error,
    "EncodingError U+A452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA453");
    },
    Error,
    "EncodingError U+A453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA454");
    },
    Error,
    "EncodingError U+A454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA455");
    },
    Error,
    "EncodingError U+A455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA456");
    },
    Error,
    "EncodingError U+A456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA457");
    },
    Error,
    "EncodingError U+A457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA458");
    },
    Error,
    "EncodingError U+A458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA459");
    },
    Error,
    "EncodingError U+A459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA45A");
    },
    Error,
    "EncodingError U+A45A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA45B");
    },
    Error,
    "EncodingError U+A45B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA45C");
    },
    Error,
    "EncodingError U+A45C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA45D");
    },
    Error,
    "EncodingError U+A45D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA45E");
    },
    Error,
    "EncodingError U+A45E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA45F");
    },
    Error,
    "EncodingError U+A45F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA460");
    },
    Error,
    "EncodingError U+A460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA461");
    },
    Error,
    "EncodingError U+A461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA462");
    },
    Error,
    "EncodingError U+A462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA463");
    },
    Error,
    "EncodingError U+A463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA464");
    },
    Error,
    "EncodingError U+A464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA465");
    },
    Error,
    "EncodingError U+A465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA466");
    },
    Error,
    "EncodingError U+A466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA467");
    },
    Error,
    "EncodingError U+A467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA468");
    },
    Error,
    "EncodingError U+A468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA469");
    },
    Error,
    "EncodingError U+A469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA46A");
    },
    Error,
    "EncodingError U+A46A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA46B");
    },
    Error,
    "EncodingError U+A46B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA46C");
    },
    Error,
    "EncodingError U+A46C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA46D");
    },
    Error,
    "EncodingError U+A46D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA46E");
    },
    Error,
    "EncodingError U+A46E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA46F");
    },
    Error,
    "EncodingError U+A46F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA470");
    },
    Error,
    "EncodingError U+A470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA471");
    },
    Error,
    "EncodingError U+A471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA472");
    },
    Error,
    "EncodingError U+A472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA473");
    },
    Error,
    "EncodingError U+A473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA474");
    },
    Error,
    "EncodingError U+A474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA475");
    },
    Error,
    "EncodingError U+A475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA476");
    },
    Error,
    "EncodingError U+A476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA477");
    },
    Error,
    "EncodingError U+A477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA478");
    },
    Error,
    "EncodingError U+A478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA479");
    },
    Error,
    "EncodingError U+A479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA47A");
    },
    Error,
    "EncodingError U+A47A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA47B");
    },
    Error,
    "EncodingError U+A47B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA47C");
    },
    Error,
    "EncodingError U+A47C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA47D");
    },
    Error,
    "EncodingError U+A47D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA47E");
    },
    Error,
    "EncodingError U+A47E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA47F");
    },
    Error,
    "EncodingError U+A47F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA480");
    },
    Error,
    "EncodingError U+A480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA481");
    },
    Error,
    "EncodingError U+A481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA482");
    },
    Error,
    "EncodingError U+A482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA483");
    },
    Error,
    "EncodingError U+A483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA484");
    },
    Error,
    "EncodingError U+A484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA485");
    },
    Error,
    "EncodingError U+A485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA486");
    },
    Error,
    "EncodingError U+A486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA487");
    },
    Error,
    "EncodingError U+A487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA488");
    },
    Error,
    "EncodingError U+A488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA489");
    },
    Error,
    "EncodingError U+A489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA48A");
    },
    Error,
    "EncodingError U+A48A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA48B");
    },
    Error,
    "EncodingError U+A48B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA48C");
    },
    Error,
    "EncodingError U+A48C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA48D");
    },
    Error,
    "EncodingError U+A48D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA48E");
    },
    Error,
    "EncodingError U+A48E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA48F");
    },
    Error,
    "EncodingError U+A48F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA490");
    },
    Error,
    "EncodingError U+A490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA491");
    },
    Error,
    "EncodingError U+A491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA492");
    },
    Error,
    "EncodingError U+A492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA493");
    },
    Error,
    "EncodingError U+A493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA494");
    },
    Error,
    "EncodingError U+A494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA495");
    },
    Error,
    "EncodingError U+A495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA496");
    },
    Error,
    "EncodingError U+A496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA497");
    },
    Error,
    "EncodingError U+A497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA498");
    },
    Error,
    "EncodingError U+A498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA499");
    },
    Error,
    "EncodingError U+A499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA49A");
    },
    Error,
    "EncodingError U+A49A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA49B");
    },
    Error,
    "EncodingError U+A49B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA49C");
    },
    Error,
    "EncodingError U+A49C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA49D");
    },
    Error,
    "EncodingError U+A49D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA49E");
    },
    Error,
    "EncodingError U+A49E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA49F");
    },
    Error,
    "EncodingError U+A49F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A0");
    },
    Error,
    "EncodingError U+A4A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A1");
    },
    Error,
    "EncodingError U+A4A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A2");
    },
    Error,
    "EncodingError U+A4A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A3");
    },
    Error,
    "EncodingError U+A4A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A4");
    },
    Error,
    "EncodingError U+A4A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A5");
    },
    Error,
    "EncodingError U+A4A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A6");
    },
    Error,
    "EncodingError U+A4A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A7");
    },
    Error,
    "EncodingError U+A4A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A8");
    },
    Error,
    "EncodingError U+A4A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A9");
    },
    Error,
    "EncodingError U+A4A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4AA");
    },
    Error,
    "EncodingError U+A4AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4AB");
    },
    Error,
    "EncodingError U+A4AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4AC");
    },
    Error,
    "EncodingError U+A4AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4AD");
    },
    Error,
    "EncodingError U+A4AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4AE");
    },
    Error,
    "EncodingError U+A4AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4AF");
    },
    Error,
    "EncodingError U+A4AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B0");
    },
    Error,
    "EncodingError U+A4B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B1");
    },
    Error,
    "EncodingError U+A4B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B2");
    },
    Error,
    "EncodingError U+A4B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B3");
    },
    Error,
    "EncodingError U+A4B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B4");
    },
    Error,
    "EncodingError U+A4B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B5");
    },
    Error,
    "EncodingError U+A4B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B6");
    },
    Error,
    "EncodingError U+A4B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B7");
    },
    Error,
    "EncodingError U+A4B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B8");
    },
    Error,
    "EncodingError U+A4B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B9");
    },
    Error,
    "EncodingError U+A4B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4BA");
    },
    Error,
    "EncodingError U+A4BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4BB");
    },
    Error,
    "EncodingError U+A4BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4BC");
    },
    Error,
    "EncodingError U+A4BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4BD");
    },
    Error,
    "EncodingError U+A4BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4BE");
    },
    Error,
    "EncodingError U+A4BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4BF");
    },
    Error,
    "EncodingError U+A4BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C0");
    },
    Error,
    "EncodingError U+A4C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C1");
    },
    Error,
    "EncodingError U+A4C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C2");
    },
    Error,
    "EncodingError U+A4C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C3");
    },
    Error,
    "EncodingError U+A4C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C4");
    },
    Error,
    "EncodingError U+A4C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C5");
    },
    Error,
    "EncodingError U+A4C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C6");
    },
    Error,
    "EncodingError U+A4C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C7");
    },
    Error,
    "EncodingError U+A4C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C8");
    },
    Error,
    "EncodingError U+A4C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C9");
    },
    Error,
    "EncodingError U+A4C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4CA");
    },
    Error,
    "EncodingError U+A4CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4CB");
    },
    Error,
    "EncodingError U+A4CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4CC");
    },
    Error,
    "EncodingError U+A4CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4CD");
    },
    Error,
    "EncodingError U+A4CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4CE");
    },
    Error,
    "EncodingError U+A4CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4CF");
    },
    Error,
    "EncodingError U+A4CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D0");
    },
    Error,
    "EncodingError U+A4D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D1");
    },
    Error,
    "EncodingError U+A4D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D2");
    },
    Error,
    "EncodingError U+A4D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D3");
    },
    Error,
    "EncodingError U+A4D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D4");
    },
    Error,
    "EncodingError U+A4D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D5");
    },
    Error,
    "EncodingError U+A4D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D6");
    },
    Error,
    "EncodingError U+A4D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D7");
    },
    Error,
    "EncodingError U+A4D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D8");
    },
    Error,
    "EncodingError U+A4D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D9");
    },
    Error,
    "EncodingError U+A4D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4DA");
    },
    Error,
    "EncodingError U+A4DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4DB");
    },
    Error,
    "EncodingError U+A4DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4DC");
    },
    Error,
    "EncodingError U+A4DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4DD");
    },
    Error,
    "EncodingError U+A4DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4DE");
    },
    Error,
    "EncodingError U+A4DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4DF");
    },
    Error,
    "EncodingError U+A4DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E0");
    },
    Error,
    "EncodingError U+A4E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E1");
    },
    Error,
    "EncodingError U+A4E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E2");
    },
    Error,
    "EncodingError U+A4E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E3");
    },
    Error,
    "EncodingError U+A4E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E4");
    },
    Error,
    "EncodingError U+A4E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E5");
    },
    Error,
    "EncodingError U+A4E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E6");
    },
    Error,
    "EncodingError U+A4E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E7");
    },
    Error,
    "EncodingError U+A4E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E8");
    },
    Error,
    "EncodingError U+A4E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E9");
    },
    Error,
    "EncodingError U+A4E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4EA");
    },
    Error,
    "EncodingError U+A4EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4EB");
    },
    Error,
    "EncodingError U+A4EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4EC");
    },
    Error,
    "EncodingError U+A4EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4ED");
    },
    Error,
    "EncodingError U+A4ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4EE");
    },
    Error,
    "EncodingError U+A4EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4EF");
    },
    Error,
    "EncodingError U+A4EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F0");
    },
    Error,
    "EncodingError U+A4F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F1");
    },
    Error,
    "EncodingError U+A4F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F2");
    },
    Error,
    "EncodingError U+A4F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F3");
    },
    Error,
    "EncodingError U+A4F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F4");
    },
    Error,
    "EncodingError U+A4F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F5");
    },
    Error,
    "EncodingError U+A4F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F6");
    },
    Error,
    "EncodingError U+A4F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F7");
    },
    Error,
    "EncodingError U+A4F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F8");
    },
    Error,
    "EncodingError U+A4F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F9");
    },
    Error,
    "EncodingError U+A4F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4FA");
    },
    Error,
    "EncodingError U+A4FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4FB");
    },
    Error,
    "EncodingError U+A4FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4FC");
    },
    Error,
    "EncodingError U+A4FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4FD");
    },
    Error,
    "EncodingError U+A4FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4FE");
    },
    Error,
    "EncodingError U+A4FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4FF");
    },
    Error,
    "EncodingError U+A4FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA500");
    },
    Error,
    "EncodingError U+A500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA501");
    },
    Error,
    "EncodingError U+A501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA502");
    },
    Error,
    "EncodingError U+A502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA503");
    },
    Error,
    "EncodingError U+A503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA504");
    },
    Error,
    "EncodingError U+A504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA505");
    },
    Error,
    "EncodingError U+A505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA506");
    },
    Error,
    "EncodingError U+A506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA507");
    },
    Error,
    "EncodingError U+A507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA508");
    },
    Error,
    "EncodingError U+A508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA509");
    },
    Error,
    "EncodingError U+A509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA50A");
    },
    Error,
    "EncodingError U+A50A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA50B");
    },
    Error,
    "EncodingError U+A50B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA50C");
    },
    Error,
    "EncodingError U+A50C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA50D");
    },
    Error,
    "EncodingError U+A50D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA50E");
    },
    Error,
    "EncodingError U+A50E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA50F");
    },
    Error,
    "EncodingError U+A50F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA510");
    },
    Error,
    "EncodingError U+A510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA511");
    },
    Error,
    "EncodingError U+A511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA512");
    },
    Error,
    "EncodingError U+A512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA513");
    },
    Error,
    "EncodingError U+A513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA514");
    },
    Error,
    "EncodingError U+A514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA515");
    },
    Error,
    "EncodingError U+A515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA516");
    },
    Error,
    "EncodingError U+A516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA517");
    },
    Error,
    "EncodingError U+A517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA518");
    },
    Error,
    "EncodingError U+A518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA519");
    },
    Error,
    "EncodingError U+A519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA51A");
    },
    Error,
    "EncodingError U+A51A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA51B");
    },
    Error,
    "EncodingError U+A51B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA51C");
    },
    Error,
    "EncodingError U+A51C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA51D");
    },
    Error,
    "EncodingError U+A51D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA51E");
    },
    Error,
    "EncodingError U+A51E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA51F");
    },
    Error,
    "EncodingError U+A51F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA520");
    },
    Error,
    "EncodingError U+A520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA521");
    },
    Error,
    "EncodingError U+A521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA522");
    },
    Error,
    "EncodingError U+A522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA523");
    },
    Error,
    "EncodingError U+A523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA524");
    },
    Error,
    "EncodingError U+A524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA525");
    },
    Error,
    "EncodingError U+A525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA526");
    },
    Error,
    "EncodingError U+A526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA527");
    },
    Error,
    "EncodingError U+A527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA528");
    },
    Error,
    "EncodingError U+A528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA529");
    },
    Error,
    "EncodingError U+A529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA52A");
    },
    Error,
    "EncodingError U+A52A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA52B");
    },
    Error,
    "EncodingError U+A52B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA52C");
    },
    Error,
    "EncodingError U+A52C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA52D");
    },
    Error,
    "EncodingError U+A52D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA52E");
    },
    Error,
    "EncodingError U+A52E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA52F");
    },
    Error,
    "EncodingError U+A52F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA530");
    },
    Error,
    "EncodingError U+A530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA531");
    },
    Error,
    "EncodingError U+A531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA532");
    },
    Error,
    "EncodingError U+A532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA533");
    },
    Error,
    "EncodingError U+A533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA534");
    },
    Error,
    "EncodingError U+A534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA535");
    },
    Error,
    "EncodingError U+A535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA536");
    },
    Error,
    "EncodingError U+A536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA537");
    },
    Error,
    "EncodingError U+A537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA538");
    },
    Error,
    "EncodingError U+A538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA539");
    },
    Error,
    "EncodingError U+A539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA53A");
    },
    Error,
    "EncodingError U+A53A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA53B");
    },
    Error,
    "EncodingError U+A53B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA53C");
    },
    Error,
    "EncodingError U+A53C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA53D");
    },
    Error,
    "EncodingError U+A53D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA53E");
    },
    Error,
    "EncodingError U+A53E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA53F");
    },
    Error,
    "EncodingError U+A53F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA540");
    },
    Error,
    "EncodingError U+A540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA541");
    },
    Error,
    "EncodingError U+A541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA542");
    },
    Error,
    "EncodingError U+A542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA543");
    },
    Error,
    "EncodingError U+A543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA544");
    },
    Error,
    "EncodingError U+A544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA545");
    },
    Error,
    "EncodingError U+A545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA546");
    },
    Error,
    "EncodingError U+A546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA547");
    },
    Error,
    "EncodingError U+A547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA548");
    },
    Error,
    "EncodingError U+A548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA549");
    },
    Error,
    "EncodingError U+A549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA54A");
    },
    Error,
    "EncodingError U+A54A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA54B");
    },
    Error,
    "EncodingError U+A54B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA54C");
    },
    Error,
    "EncodingError U+A54C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA54D");
    },
    Error,
    "EncodingError U+A54D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA54E");
    },
    Error,
    "EncodingError U+A54E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA54F");
    },
    Error,
    "EncodingError U+A54F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA550");
    },
    Error,
    "EncodingError U+A550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA551");
    },
    Error,
    "EncodingError U+A551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA552");
    },
    Error,
    "EncodingError U+A552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA553");
    },
    Error,
    "EncodingError U+A553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA554");
    },
    Error,
    "EncodingError U+A554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA555");
    },
    Error,
    "EncodingError U+A555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA556");
    },
    Error,
    "EncodingError U+A556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA557");
    },
    Error,
    "EncodingError U+A557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA558");
    },
    Error,
    "EncodingError U+A558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA559");
    },
    Error,
    "EncodingError U+A559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA55A");
    },
    Error,
    "EncodingError U+A55A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA55B");
    },
    Error,
    "EncodingError U+A55B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA55C");
    },
    Error,
    "EncodingError U+A55C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA55D");
    },
    Error,
    "EncodingError U+A55D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA55E");
    },
    Error,
    "EncodingError U+A55E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA55F");
    },
    Error,
    "EncodingError U+A55F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA560");
    },
    Error,
    "EncodingError U+A560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA561");
    },
    Error,
    "EncodingError U+A561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA562");
    },
    Error,
    "EncodingError U+A562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA563");
    },
    Error,
    "EncodingError U+A563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA564");
    },
    Error,
    "EncodingError U+A564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA565");
    },
    Error,
    "EncodingError U+A565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA566");
    },
    Error,
    "EncodingError U+A566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA567");
    },
    Error,
    "EncodingError U+A567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA568");
    },
    Error,
    "EncodingError U+A568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA569");
    },
    Error,
    "EncodingError U+A569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA56A");
    },
    Error,
    "EncodingError U+A56A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA56B");
    },
    Error,
    "EncodingError U+A56B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA56C");
    },
    Error,
    "EncodingError U+A56C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA56D");
    },
    Error,
    "EncodingError U+A56D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA56E");
    },
    Error,
    "EncodingError U+A56E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA56F");
    },
    Error,
    "EncodingError U+A56F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA570");
    },
    Error,
    "EncodingError U+A570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA571");
    },
    Error,
    "EncodingError U+A571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA572");
    },
    Error,
    "EncodingError U+A572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA573");
    },
    Error,
    "EncodingError U+A573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA574");
    },
    Error,
    "EncodingError U+A574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA575");
    },
    Error,
    "EncodingError U+A575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA576");
    },
    Error,
    "EncodingError U+A576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA577");
    },
    Error,
    "EncodingError U+A577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA578");
    },
    Error,
    "EncodingError U+A578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA579");
    },
    Error,
    "EncodingError U+A579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA57A");
    },
    Error,
    "EncodingError U+A57A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA57B");
    },
    Error,
    "EncodingError U+A57B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA57C");
    },
    Error,
    "EncodingError U+A57C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA57D");
    },
    Error,
    "EncodingError U+A57D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA57E");
    },
    Error,
    "EncodingError U+A57E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA57F");
    },
    Error,
    "EncodingError U+A57F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA580");
    },
    Error,
    "EncodingError U+A580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA581");
    },
    Error,
    "EncodingError U+A581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA582");
    },
    Error,
    "EncodingError U+A582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA583");
    },
    Error,
    "EncodingError U+A583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA584");
    },
    Error,
    "EncodingError U+A584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA585");
    },
    Error,
    "EncodingError U+A585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA586");
    },
    Error,
    "EncodingError U+A586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA587");
    },
    Error,
    "EncodingError U+A587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA588");
    },
    Error,
    "EncodingError U+A588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA589");
    },
    Error,
    "EncodingError U+A589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA58A");
    },
    Error,
    "EncodingError U+A58A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA58B");
    },
    Error,
    "EncodingError U+A58B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA58C");
    },
    Error,
    "EncodingError U+A58C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA58D");
    },
    Error,
    "EncodingError U+A58D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA58E");
    },
    Error,
    "EncodingError U+A58E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA58F");
    },
    Error,
    "EncodingError U+A58F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA590");
    },
    Error,
    "EncodingError U+A590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA591");
    },
    Error,
    "EncodingError U+A591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA592");
    },
    Error,
    "EncodingError U+A592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA593");
    },
    Error,
    "EncodingError U+A593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA594");
    },
    Error,
    "EncodingError U+A594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA595");
    },
    Error,
    "EncodingError U+A595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA596");
    },
    Error,
    "EncodingError U+A596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA597");
    },
    Error,
    "EncodingError U+A597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA598");
    },
    Error,
    "EncodingError U+A598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA599");
    },
    Error,
    "EncodingError U+A599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA59A");
    },
    Error,
    "EncodingError U+A59A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA59B");
    },
    Error,
    "EncodingError U+A59B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA59C");
    },
    Error,
    "EncodingError U+A59C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA59D");
    },
    Error,
    "EncodingError U+A59D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA59E");
    },
    Error,
    "EncodingError U+A59E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA59F");
    },
    Error,
    "EncodingError U+A59F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A0");
    },
    Error,
    "EncodingError U+A5A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A1");
    },
    Error,
    "EncodingError U+A5A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A2");
    },
    Error,
    "EncodingError U+A5A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A3");
    },
    Error,
    "EncodingError U+A5A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A4");
    },
    Error,
    "EncodingError U+A5A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A5");
    },
    Error,
    "EncodingError U+A5A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A6");
    },
    Error,
    "EncodingError U+A5A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A7");
    },
    Error,
    "EncodingError U+A5A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A8");
    },
    Error,
    "EncodingError U+A5A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A9");
    },
    Error,
    "EncodingError U+A5A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5AA");
    },
    Error,
    "EncodingError U+A5AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5AB");
    },
    Error,
    "EncodingError U+A5AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5AC");
    },
    Error,
    "EncodingError U+A5AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5AD");
    },
    Error,
    "EncodingError U+A5AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5AE");
    },
    Error,
    "EncodingError U+A5AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5AF");
    },
    Error,
    "EncodingError U+A5AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B0");
    },
    Error,
    "EncodingError U+A5B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B1");
    },
    Error,
    "EncodingError U+A5B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B2");
    },
    Error,
    "EncodingError U+A5B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B3");
    },
    Error,
    "EncodingError U+A5B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B4");
    },
    Error,
    "EncodingError U+A5B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B5");
    },
    Error,
    "EncodingError U+A5B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B6");
    },
    Error,
    "EncodingError U+A5B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B7");
    },
    Error,
    "EncodingError U+A5B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B8");
    },
    Error,
    "EncodingError U+A5B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B9");
    },
    Error,
    "EncodingError U+A5B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5BA");
    },
    Error,
    "EncodingError U+A5BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5BB");
    },
    Error,
    "EncodingError U+A5BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5BC");
    },
    Error,
    "EncodingError U+A5BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5BD");
    },
    Error,
    "EncodingError U+A5BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5BE");
    },
    Error,
    "EncodingError U+A5BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5BF");
    },
    Error,
    "EncodingError U+A5BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C0");
    },
    Error,
    "EncodingError U+A5C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C1");
    },
    Error,
    "EncodingError U+A5C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C2");
    },
    Error,
    "EncodingError U+A5C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C3");
    },
    Error,
    "EncodingError U+A5C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C4");
    },
    Error,
    "EncodingError U+A5C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C5");
    },
    Error,
    "EncodingError U+A5C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C6");
    },
    Error,
    "EncodingError U+A5C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C7");
    },
    Error,
    "EncodingError U+A5C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C8");
    },
    Error,
    "EncodingError U+A5C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C9");
    },
    Error,
    "EncodingError U+A5C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5CA");
    },
    Error,
    "EncodingError U+A5CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5CB");
    },
    Error,
    "EncodingError U+A5CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5CC");
    },
    Error,
    "EncodingError U+A5CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5CD");
    },
    Error,
    "EncodingError U+A5CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5CE");
    },
    Error,
    "EncodingError U+A5CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5CF");
    },
    Error,
    "EncodingError U+A5CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D0");
    },
    Error,
    "EncodingError U+A5D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D1");
    },
    Error,
    "EncodingError U+A5D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D2");
    },
    Error,
    "EncodingError U+A5D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D3");
    },
    Error,
    "EncodingError U+A5D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D4");
    },
    Error,
    "EncodingError U+A5D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D5");
    },
    Error,
    "EncodingError U+A5D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D6");
    },
    Error,
    "EncodingError U+A5D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D7");
    },
    Error,
    "EncodingError U+A5D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D8");
    },
    Error,
    "EncodingError U+A5D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D9");
    },
    Error,
    "EncodingError U+A5D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5DA");
    },
    Error,
    "EncodingError U+A5DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5DB");
    },
    Error,
    "EncodingError U+A5DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5DC");
    },
    Error,
    "EncodingError U+A5DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5DD");
    },
    Error,
    "EncodingError U+A5DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5DE");
    },
    Error,
    "EncodingError U+A5DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5DF");
    },
    Error,
    "EncodingError U+A5DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E0");
    },
    Error,
    "EncodingError U+A5E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E1");
    },
    Error,
    "EncodingError U+A5E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E2");
    },
    Error,
    "EncodingError U+A5E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E3");
    },
    Error,
    "EncodingError U+A5E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E4");
    },
    Error,
    "EncodingError U+A5E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E5");
    },
    Error,
    "EncodingError U+A5E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E6");
    },
    Error,
    "EncodingError U+A5E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E7");
    },
    Error,
    "EncodingError U+A5E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E8");
    },
    Error,
    "EncodingError U+A5E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E9");
    },
    Error,
    "EncodingError U+A5E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5EA");
    },
    Error,
    "EncodingError U+A5EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5EB");
    },
    Error,
    "EncodingError U+A5EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5EC");
    },
    Error,
    "EncodingError U+A5EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5ED");
    },
    Error,
    "EncodingError U+A5ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5EE");
    },
    Error,
    "EncodingError U+A5EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5EF");
    },
    Error,
    "EncodingError U+A5EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F0");
    },
    Error,
    "EncodingError U+A5F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F1");
    },
    Error,
    "EncodingError U+A5F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F2");
    },
    Error,
    "EncodingError U+A5F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F3");
    },
    Error,
    "EncodingError U+A5F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F4");
    },
    Error,
    "EncodingError U+A5F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F5");
    },
    Error,
    "EncodingError U+A5F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F6");
    },
    Error,
    "EncodingError U+A5F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F7");
    },
    Error,
    "EncodingError U+A5F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F8");
    },
    Error,
    "EncodingError U+A5F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F9");
    },
    Error,
    "EncodingError U+A5F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5FA");
    },
    Error,
    "EncodingError U+A5FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5FB");
    },
    Error,
    "EncodingError U+A5FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5FC");
    },
    Error,
    "EncodingError U+A5FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5FD");
    },
    Error,
    "EncodingError U+A5FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5FE");
    },
    Error,
    "EncodingError U+A5FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5FF");
    },
    Error,
    "EncodingError U+A5FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA600");
    },
    Error,
    "EncodingError U+A600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA601");
    },
    Error,
    "EncodingError U+A601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA602");
    },
    Error,
    "EncodingError U+A602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA603");
    },
    Error,
    "EncodingError U+A603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA604");
    },
    Error,
    "EncodingError U+A604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA605");
    },
    Error,
    "EncodingError U+A605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA606");
    },
    Error,
    "EncodingError U+A606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA607");
    },
    Error,
    "EncodingError U+A607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA608");
    },
    Error,
    "EncodingError U+A608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA609");
    },
    Error,
    "EncodingError U+A609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA60A");
    },
    Error,
    "EncodingError U+A60A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA60B");
    },
    Error,
    "EncodingError U+A60B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA60C");
    },
    Error,
    "EncodingError U+A60C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA60D");
    },
    Error,
    "EncodingError U+A60D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA60E");
    },
    Error,
    "EncodingError U+A60E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA60F");
    },
    Error,
    "EncodingError U+A60F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA610");
    },
    Error,
    "EncodingError U+A610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA611");
    },
    Error,
    "EncodingError U+A611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA612");
    },
    Error,
    "EncodingError U+A612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA613");
    },
    Error,
    "EncodingError U+A613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA614");
    },
    Error,
    "EncodingError U+A614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA615");
    },
    Error,
    "EncodingError U+A615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA616");
    },
    Error,
    "EncodingError U+A616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA617");
    },
    Error,
    "EncodingError U+A617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA618");
    },
    Error,
    "EncodingError U+A618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA619");
    },
    Error,
    "EncodingError U+A619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA61A");
    },
    Error,
    "EncodingError U+A61A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA61B");
    },
    Error,
    "EncodingError U+A61B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA61C");
    },
    Error,
    "EncodingError U+A61C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA61D");
    },
    Error,
    "EncodingError U+A61D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA61E");
    },
    Error,
    "EncodingError U+A61E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA61F");
    },
    Error,
    "EncodingError U+A61F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA620");
    },
    Error,
    "EncodingError U+A620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA621");
    },
    Error,
    "EncodingError U+A621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA622");
    },
    Error,
    "EncodingError U+A622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA623");
    },
    Error,
    "EncodingError U+A623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA624");
    },
    Error,
    "EncodingError U+A624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA625");
    },
    Error,
    "EncodingError U+A625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA626");
    },
    Error,
    "EncodingError U+A626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA627");
    },
    Error,
    "EncodingError U+A627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA628");
    },
    Error,
    "EncodingError U+A628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA629");
    },
    Error,
    "EncodingError U+A629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA62A");
    },
    Error,
    "EncodingError U+A62A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA62B");
    },
    Error,
    "EncodingError U+A62B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA62C");
    },
    Error,
    "EncodingError U+A62C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA62D");
    },
    Error,
    "EncodingError U+A62D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA62E");
    },
    Error,
    "EncodingError U+A62E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA62F");
    },
    Error,
    "EncodingError U+A62F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA630");
    },
    Error,
    "EncodingError U+A630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA631");
    },
    Error,
    "EncodingError U+A631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA632");
    },
    Error,
    "EncodingError U+A632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA633");
    },
    Error,
    "EncodingError U+A633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA634");
    },
    Error,
    "EncodingError U+A634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA635");
    },
    Error,
    "EncodingError U+A635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA636");
    },
    Error,
    "EncodingError U+A636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA637");
    },
    Error,
    "EncodingError U+A637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA638");
    },
    Error,
    "EncodingError U+A638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA639");
    },
    Error,
    "EncodingError U+A639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA63A");
    },
    Error,
    "EncodingError U+A63A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA63B");
    },
    Error,
    "EncodingError U+A63B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA63C");
    },
    Error,
    "EncodingError U+A63C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA63D");
    },
    Error,
    "EncodingError U+A63D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA63E");
    },
    Error,
    "EncodingError U+A63E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA63F");
    },
    Error,
    "EncodingError U+A63F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA640");
    },
    Error,
    "EncodingError U+A640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA641");
    },
    Error,
    "EncodingError U+A641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA642");
    },
    Error,
    "EncodingError U+A642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA643");
    },
    Error,
    "EncodingError U+A643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA644");
    },
    Error,
    "EncodingError U+A644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA645");
    },
    Error,
    "EncodingError U+A645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA646");
    },
    Error,
    "EncodingError U+A646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA647");
    },
    Error,
    "EncodingError U+A647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA648");
    },
    Error,
    "EncodingError U+A648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA649");
    },
    Error,
    "EncodingError U+A649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA64A");
    },
    Error,
    "EncodingError U+A64A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA64B");
    },
    Error,
    "EncodingError U+A64B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA64C");
    },
    Error,
    "EncodingError U+A64C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA64D");
    },
    Error,
    "EncodingError U+A64D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA64E");
    },
    Error,
    "EncodingError U+A64E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA64F");
    },
    Error,
    "EncodingError U+A64F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA650");
    },
    Error,
    "EncodingError U+A650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA651");
    },
    Error,
    "EncodingError U+A651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA652");
    },
    Error,
    "EncodingError U+A652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA653");
    },
    Error,
    "EncodingError U+A653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA654");
    },
    Error,
    "EncodingError U+A654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA655");
    },
    Error,
    "EncodingError U+A655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA656");
    },
    Error,
    "EncodingError U+A656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA657");
    },
    Error,
    "EncodingError U+A657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA658");
    },
    Error,
    "EncodingError U+A658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA659");
    },
    Error,
    "EncodingError U+A659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA65A");
    },
    Error,
    "EncodingError U+A65A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA65B");
    },
    Error,
    "EncodingError U+A65B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA65C");
    },
    Error,
    "EncodingError U+A65C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA65D");
    },
    Error,
    "EncodingError U+A65D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA65E");
    },
    Error,
    "EncodingError U+A65E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA65F");
    },
    Error,
    "EncodingError U+A65F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA660");
    },
    Error,
    "EncodingError U+A660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA661");
    },
    Error,
    "EncodingError U+A661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA662");
    },
    Error,
    "EncodingError U+A662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA663");
    },
    Error,
    "EncodingError U+A663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA664");
    },
    Error,
    "EncodingError U+A664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA665");
    },
    Error,
    "EncodingError U+A665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA666");
    },
    Error,
    "EncodingError U+A666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA667");
    },
    Error,
    "EncodingError U+A667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA668");
    },
    Error,
    "EncodingError U+A668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA669");
    },
    Error,
    "EncodingError U+A669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA66A");
    },
    Error,
    "EncodingError U+A66A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA66B");
    },
    Error,
    "EncodingError U+A66B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA66C");
    },
    Error,
    "EncodingError U+A66C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA66D");
    },
    Error,
    "EncodingError U+A66D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA66E");
    },
    Error,
    "EncodingError U+A66E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA66F");
    },
    Error,
    "EncodingError U+A66F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA670");
    },
    Error,
    "EncodingError U+A670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA671");
    },
    Error,
    "EncodingError U+A671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA672");
    },
    Error,
    "EncodingError U+A672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA673");
    },
    Error,
    "EncodingError U+A673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA674");
    },
    Error,
    "EncodingError U+A674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA675");
    },
    Error,
    "EncodingError U+A675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA676");
    },
    Error,
    "EncodingError U+A676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA677");
    },
    Error,
    "EncodingError U+A677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA678");
    },
    Error,
    "EncodingError U+A678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA679");
    },
    Error,
    "EncodingError U+A679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA67A");
    },
    Error,
    "EncodingError U+A67A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA67B");
    },
    Error,
    "EncodingError U+A67B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA67C");
    },
    Error,
    "EncodingError U+A67C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA67D");
    },
    Error,
    "EncodingError U+A67D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA67E");
    },
    Error,
    "EncodingError U+A67E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA67F");
    },
    Error,
    "EncodingError U+A67F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA680");
    },
    Error,
    "EncodingError U+A680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA681");
    },
    Error,
    "EncodingError U+A681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA682");
    },
    Error,
    "EncodingError U+A682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA683");
    },
    Error,
    "EncodingError U+A683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA684");
    },
    Error,
    "EncodingError U+A684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA685");
    },
    Error,
    "EncodingError U+A685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA686");
    },
    Error,
    "EncodingError U+A686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA687");
    },
    Error,
    "EncodingError U+A687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA688");
    },
    Error,
    "EncodingError U+A688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA689");
    },
    Error,
    "EncodingError U+A689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA68A");
    },
    Error,
    "EncodingError U+A68A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA68B");
    },
    Error,
    "EncodingError U+A68B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA68C");
    },
    Error,
    "EncodingError U+A68C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA68D");
    },
    Error,
    "EncodingError U+A68D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA68E");
    },
    Error,
    "EncodingError U+A68E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA68F");
    },
    Error,
    "EncodingError U+A68F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA690");
    },
    Error,
    "EncodingError U+A690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA691");
    },
    Error,
    "EncodingError U+A691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA692");
    },
    Error,
    "EncodingError U+A692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA693");
    },
    Error,
    "EncodingError U+A693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA694");
    },
    Error,
    "EncodingError U+A694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA695");
    },
    Error,
    "EncodingError U+A695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA696");
    },
    Error,
    "EncodingError U+A696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA697");
    },
    Error,
    "EncodingError U+A697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA698");
    },
    Error,
    "EncodingError U+A698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA699");
    },
    Error,
    "EncodingError U+A699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA69A");
    },
    Error,
    "EncodingError U+A69A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA69B");
    },
    Error,
    "EncodingError U+A69B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA69C");
    },
    Error,
    "EncodingError U+A69C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA69D");
    },
    Error,
    "EncodingError U+A69D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA69E");
    },
    Error,
    "EncodingError U+A69E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA69F");
    },
    Error,
    "EncodingError U+A69F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A0");
    },
    Error,
    "EncodingError U+A6A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A1");
    },
    Error,
    "EncodingError U+A6A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A2");
    },
    Error,
    "EncodingError U+A6A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A3");
    },
    Error,
    "EncodingError U+A6A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A4");
    },
    Error,
    "EncodingError U+A6A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A5");
    },
    Error,
    "EncodingError U+A6A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A6");
    },
    Error,
    "EncodingError U+A6A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A7");
    },
    Error,
    "EncodingError U+A6A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A8");
    },
    Error,
    "EncodingError U+A6A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A9");
    },
    Error,
    "EncodingError U+A6A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6AA");
    },
    Error,
    "EncodingError U+A6AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6AB");
    },
    Error,
    "EncodingError U+A6AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6AC");
    },
    Error,
    "EncodingError U+A6AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6AD");
    },
    Error,
    "EncodingError U+A6AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6AE");
    },
    Error,
    "EncodingError U+A6AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6AF");
    },
    Error,
    "EncodingError U+A6AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B0");
    },
    Error,
    "EncodingError U+A6B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B1");
    },
    Error,
    "EncodingError U+A6B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B2");
    },
    Error,
    "EncodingError U+A6B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B3");
    },
    Error,
    "EncodingError U+A6B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B4");
    },
    Error,
    "EncodingError U+A6B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B5");
    },
    Error,
    "EncodingError U+A6B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B6");
    },
    Error,
    "EncodingError U+A6B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B7");
    },
    Error,
    "EncodingError U+A6B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B8");
    },
    Error,
    "EncodingError U+A6B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B9");
    },
    Error,
    "EncodingError U+A6B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6BA");
    },
    Error,
    "EncodingError U+A6BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6BB");
    },
    Error,
    "EncodingError U+A6BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6BC");
    },
    Error,
    "EncodingError U+A6BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6BD");
    },
    Error,
    "EncodingError U+A6BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6BE");
    },
    Error,
    "EncodingError U+A6BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6BF");
    },
    Error,
    "EncodingError U+A6BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C0");
    },
    Error,
    "EncodingError U+A6C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C1");
    },
    Error,
    "EncodingError U+A6C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C2");
    },
    Error,
    "EncodingError U+A6C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C3");
    },
    Error,
    "EncodingError U+A6C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C4");
    },
    Error,
    "EncodingError U+A6C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C5");
    },
    Error,
    "EncodingError U+A6C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C6");
    },
    Error,
    "EncodingError U+A6C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C7");
    },
    Error,
    "EncodingError U+A6C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C8");
    },
    Error,
    "EncodingError U+A6C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C9");
    },
    Error,
    "EncodingError U+A6C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6CA");
    },
    Error,
    "EncodingError U+A6CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6CB");
    },
    Error,
    "EncodingError U+A6CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6CC");
    },
    Error,
    "EncodingError U+A6CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6CD");
    },
    Error,
    "EncodingError U+A6CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6CE");
    },
    Error,
    "EncodingError U+A6CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6CF");
    },
    Error,
    "EncodingError U+A6CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D0");
    },
    Error,
    "EncodingError U+A6D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D1");
    },
    Error,
    "EncodingError U+A6D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D2");
    },
    Error,
    "EncodingError U+A6D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D3");
    },
    Error,
    "EncodingError U+A6D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D4");
    },
    Error,
    "EncodingError U+A6D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D5");
    },
    Error,
    "EncodingError U+A6D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D6");
    },
    Error,
    "EncodingError U+A6D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D7");
    },
    Error,
    "EncodingError U+A6D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D8");
    },
    Error,
    "EncodingError U+A6D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D9");
    },
    Error,
    "EncodingError U+A6D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6DA");
    },
    Error,
    "EncodingError U+A6DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6DB");
    },
    Error,
    "EncodingError U+A6DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6DC");
    },
    Error,
    "EncodingError U+A6DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6DD");
    },
    Error,
    "EncodingError U+A6DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6DE");
    },
    Error,
    "EncodingError U+A6DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6DF");
    },
    Error,
    "EncodingError U+A6DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E0");
    },
    Error,
    "EncodingError U+A6E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E1");
    },
    Error,
    "EncodingError U+A6E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E2");
    },
    Error,
    "EncodingError U+A6E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E3");
    },
    Error,
    "EncodingError U+A6E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E4");
    },
    Error,
    "EncodingError U+A6E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E5");
    },
    Error,
    "EncodingError U+A6E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E6");
    },
    Error,
    "EncodingError U+A6E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E7");
    },
    Error,
    "EncodingError U+A6E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E8");
    },
    Error,
    "EncodingError U+A6E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E9");
    },
    Error,
    "EncodingError U+A6E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6EA");
    },
    Error,
    "EncodingError U+A6EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6EB");
    },
    Error,
    "EncodingError U+A6EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6EC");
    },
    Error,
    "EncodingError U+A6EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6ED");
    },
    Error,
    "EncodingError U+A6ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6EE");
    },
    Error,
    "EncodingError U+A6EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6EF");
    },
    Error,
    "EncodingError U+A6EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F0");
    },
    Error,
    "EncodingError U+A6F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F1");
    },
    Error,
    "EncodingError U+A6F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F2");
    },
    Error,
    "EncodingError U+A6F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F3");
    },
    Error,
    "EncodingError U+A6F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F4");
    },
    Error,
    "EncodingError U+A6F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F5");
    },
    Error,
    "EncodingError U+A6F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F6");
    },
    Error,
    "EncodingError U+A6F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F7");
    },
    Error,
    "EncodingError U+A6F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F8");
    },
    Error,
    "EncodingError U+A6F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F9");
    },
    Error,
    "EncodingError U+A6F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6FA");
    },
    Error,
    "EncodingError U+A6FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6FB");
    },
    Error,
    "EncodingError U+A6FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6FC");
    },
    Error,
    "EncodingError U+A6FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6FD");
    },
    Error,
    "EncodingError U+A6FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6FE");
    },
    Error,
    "EncodingError U+A6FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6FF");
    },
    Error,
    "EncodingError U+A6FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA700");
    },
    Error,
    "EncodingError U+A700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA701");
    },
    Error,
    "EncodingError U+A701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA702");
    },
    Error,
    "EncodingError U+A702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA703");
    },
    Error,
    "EncodingError U+A703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA704");
    },
    Error,
    "EncodingError U+A704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA705");
    },
    Error,
    "EncodingError U+A705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA706");
    },
    Error,
    "EncodingError U+A706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA707");
    },
    Error,
    "EncodingError U+A707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA708");
    },
    Error,
    "EncodingError U+A708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA709");
    },
    Error,
    "EncodingError U+A709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA70A");
    },
    Error,
    "EncodingError U+A70A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA70B");
    },
    Error,
    "EncodingError U+A70B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA70C");
    },
    Error,
    "EncodingError U+A70C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA70D");
    },
    Error,
    "EncodingError U+A70D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA70E");
    },
    Error,
    "EncodingError U+A70E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA70F");
    },
    Error,
    "EncodingError U+A70F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA710");
    },
    Error,
    "EncodingError U+A710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA711");
    },
    Error,
    "EncodingError U+A711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA712");
    },
    Error,
    "EncodingError U+A712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA713");
    },
    Error,
    "EncodingError U+A713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA714");
    },
    Error,
    "EncodingError U+A714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA715");
    },
    Error,
    "EncodingError U+A715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA716");
    },
    Error,
    "EncodingError U+A716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA717");
    },
    Error,
    "EncodingError U+A717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA718");
    },
    Error,
    "EncodingError U+A718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA719");
    },
    Error,
    "EncodingError U+A719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA71A");
    },
    Error,
    "EncodingError U+A71A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA71B");
    },
    Error,
    "EncodingError U+A71B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA71C");
    },
    Error,
    "EncodingError U+A71C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA71D");
    },
    Error,
    "EncodingError U+A71D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA71E");
    },
    Error,
    "EncodingError U+A71E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA71F");
    },
    Error,
    "EncodingError U+A71F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA720");
    },
    Error,
    "EncodingError U+A720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA721");
    },
    Error,
    "EncodingError U+A721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA722");
    },
    Error,
    "EncodingError U+A722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA723");
    },
    Error,
    "EncodingError U+A723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA724");
    },
    Error,
    "EncodingError U+A724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA725");
    },
    Error,
    "EncodingError U+A725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA726");
    },
    Error,
    "EncodingError U+A726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA727");
    },
    Error,
    "EncodingError U+A727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA728");
    },
    Error,
    "EncodingError U+A728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA729");
    },
    Error,
    "EncodingError U+A729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA72A");
    },
    Error,
    "EncodingError U+A72A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA72B");
    },
    Error,
    "EncodingError U+A72B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA72C");
    },
    Error,
    "EncodingError U+A72C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA72D");
    },
    Error,
    "EncodingError U+A72D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA72E");
    },
    Error,
    "EncodingError U+A72E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA72F");
    },
    Error,
    "EncodingError U+A72F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA730");
    },
    Error,
    "EncodingError U+A730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA731");
    },
    Error,
    "EncodingError U+A731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA732");
    },
    Error,
    "EncodingError U+A732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA733");
    },
    Error,
    "EncodingError U+A733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA734");
    },
    Error,
    "EncodingError U+A734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA735");
    },
    Error,
    "EncodingError U+A735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA736");
    },
    Error,
    "EncodingError U+A736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA737");
    },
    Error,
    "EncodingError U+A737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA738");
    },
    Error,
    "EncodingError U+A738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA739");
    },
    Error,
    "EncodingError U+A739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA73A");
    },
    Error,
    "EncodingError U+A73A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA73B");
    },
    Error,
    "EncodingError U+A73B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA73C");
    },
    Error,
    "EncodingError U+A73C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA73D");
    },
    Error,
    "EncodingError U+A73D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA73E");
    },
    Error,
    "EncodingError U+A73E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA73F");
    },
    Error,
    "EncodingError U+A73F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA740");
    },
    Error,
    "EncodingError U+A740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA741");
    },
    Error,
    "EncodingError U+A741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA742");
    },
    Error,
    "EncodingError U+A742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA743");
    },
    Error,
    "EncodingError U+A743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA744");
    },
    Error,
    "EncodingError U+A744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA745");
    },
    Error,
    "EncodingError U+A745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA746");
    },
    Error,
    "EncodingError U+A746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA747");
    },
    Error,
    "EncodingError U+A747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA748");
    },
    Error,
    "EncodingError U+A748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA749");
    },
    Error,
    "EncodingError U+A749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA74A");
    },
    Error,
    "EncodingError U+A74A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA74B");
    },
    Error,
    "EncodingError U+A74B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA74C");
    },
    Error,
    "EncodingError U+A74C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA74D");
    },
    Error,
    "EncodingError U+A74D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA74E");
    },
    Error,
    "EncodingError U+A74E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA74F");
    },
    Error,
    "EncodingError U+A74F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA750");
    },
    Error,
    "EncodingError U+A750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA751");
    },
    Error,
    "EncodingError U+A751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA752");
    },
    Error,
    "EncodingError U+A752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA753");
    },
    Error,
    "EncodingError U+A753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA754");
    },
    Error,
    "EncodingError U+A754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA755");
    },
    Error,
    "EncodingError U+A755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA756");
    },
    Error,
    "EncodingError U+A756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA757");
    },
    Error,
    "EncodingError U+A757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA758");
    },
    Error,
    "EncodingError U+A758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA759");
    },
    Error,
    "EncodingError U+A759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA75A");
    },
    Error,
    "EncodingError U+A75A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA75B");
    },
    Error,
    "EncodingError U+A75B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA75C");
    },
    Error,
    "EncodingError U+A75C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA75D");
    },
    Error,
    "EncodingError U+A75D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA75E");
    },
    Error,
    "EncodingError U+A75E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA75F");
    },
    Error,
    "EncodingError U+A75F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA760");
    },
    Error,
    "EncodingError U+A760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA761");
    },
    Error,
    "EncodingError U+A761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA762");
    },
    Error,
    "EncodingError U+A762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA763");
    },
    Error,
    "EncodingError U+A763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA764");
    },
    Error,
    "EncodingError U+A764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA765");
    },
    Error,
    "EncodingError U+A765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA766");
    },
    Error,
    "EncodingError U+A766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA767");
    },
    Error,
    "EncodingError U+A767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA768");
    },
    Error,
    "EncodingError U+A768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA769");
    },
    Error,
    "EncodingError U+A769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA76A");
    },
    Error,
    "EncodingError U+A76A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA76B");
    },
    Error,
    "EncodingError U+A76B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA76C");
    },
    Error,
    "EncodingError U+A76C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA76D");
    },
    Error,
    "EncodingError U+A76D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA76E");
    },
    Error,
    "EncodingError U+A76E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA76F");
    },
    Error,
    "EncodingError U+A76F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA770");
    },
    Error,
    "EncodingError U+A770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA771");
    },
    Error,
    "EncodingError U+A771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA772");
    },
    Error,
    "EncodingError U+A772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA773");
    },
    Error,
    "EncodingError U+A773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA774");
    },
    Error,
    "EncodingError U+A774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA775");
    },
    Error,
    "EncodingError U+A775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA776");
    },
    Error,
    "EncodingError U+A776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA777");
    },
    Error,
    "EncodingError U+A777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA778");
    },
    Error,
    "EncodingError U+A778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA779");
    },
    Error,
    "EncodingError U+A779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA77A");
    },
    Error,
    "EncodingError U+A77A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA77B");
    },
    Error,
    "EncodingError U+A77B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA77C");
    },
    Error,
    "EncodingError U+A77C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA77D");
    },
    Error,
    "EncodingError U+A77D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA77E");
    },
    Error,
    "EncodingError U+A77E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA77F");
    },
    Error,
    "EncodingError U+A77F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA780");
    },
    Error,
    "EncodingError U+A780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA781");
    },
    Error,
    "EncodingError U+A781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA782");
    },
    Error,
    "EncodingError U+A782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA783");
    },
    Error,
    "EncodingError U+A783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA784");
    },
    Error,
    "EncodingError U+A784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA785");
    },
    Error,
    "EncodingError U+A785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA786");
    },
    Error,
    "EncodingError U+A786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA787");
    },
    Error,
    "EncodingError U+A787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA788");
    },
    Error,
    "EncodingError U+A788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA789");
    },
    Error,
    "EncodingError U+A789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA78A");
    },
    Error,
    "EncodingError U+A78A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA78B");
    },
    Error,
    "EncodingError U+A78B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA78C");
    },
    Error,
    "EncodingError U+A78C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA78D");
    },
    Error,
    "EncodingError U+A78D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA78E");
    },
    Error,
    "EncodingError U+A78E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA78F");
    },
    Error,
    "EncodingError U+A78F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA790");
    },
    Error,
    "EncodingError U+A790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA791");
    },
    Error,
    "EncodingError U+A791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA792");
    },
    Error,
    "EncodingError U+A792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA793");
    },
    Error,
    "EncodingError U+A793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA794");
    },
    Error,
    "EncodingError U+A794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA795");
    },
    Error,
    "EncodingError U+A795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA796");
    },
    Error,
    "EncodingError U+A796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA797");
    },
    Error,
    "EncodingError U+A797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA798");
    },
    Error,
    "EncodingError U+A798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA799");
    },
    Error,
    "EncodingError U+A799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA79A");
    },
    Error,
    "EncodingError U+A79A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA79B");
    },
    Error,
    "EncodingError U+A79B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA79C");
    },
    Error,
    "EncodingError U+A79C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA79D");
    },
    Error,
    "EncodingError U+A79D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA79E");
    },
    Error,
    "EncodingError U+A79E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA79F");
    },
    Error,
    "EncodingError U+A79F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A0");
    },
    Error,
    "EncodingError U+A7A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A1");
    },
    Error,
    "EncodingError U+A7A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A2");
    },
    Error,
    "EncodingError U+A7A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A3");
    },
    Error,
    "EncodingError U+A7A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A4");
    },
    Error,
    "EncodingError U+A7A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A5");
    },
    Error,
    "EncodingError U+A7A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A6");
    },
    Error,
    "EncodingError U+A7A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A7");
    },
    Error,
    "EncodingError U+A7A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A8");
    },
    Error,
    "EncodingError U+A7A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A9");
    },
    Error,
    "EncodingError U+A7A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7AA");
    },
    Error,
    "EncodingError U+A7AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7AB");
    },
    Error,
    "EncodingError U+A7AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7AC");
    },
    Error,
    "EncodingError U+A7AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7AD");
    },
    Error,
    "EncodingError U+A7AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7AE");
    },
    Error,
    "EncodingError U+A7AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7AF");
    },
    Error,
    "EncodingError U+A7AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B0");
    },
    Error,
    "EncodingError U+A7B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B1");
    },
    Error,
    "EncodingError U+A7B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B2");
    },
    Error,
    "EncodingError U+A7B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B3");
    },
    Error,
    "EncodingError U+A7B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B4");
    },
    Error,
    "EncodingError U+A7B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B5");
    },
    Error,
    "EncodingError U+A7B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B6");
    },
    Error,
    "EncodingError U+A7B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B7");
    },
    Error,
    "EncodingError U+A7B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B8");
    },
    Error,
    "EncodingError U+A7B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B9");
    },
    Error,
    "EncodingError U+A7B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7BA");
    },
    Error,
    "EncodingError U+A7BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7BB");
    },
    Error,
    "EncodingError U+A7BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7BC");
    },
    Error,
    "EncodingError U+A7BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7BD");
    },
    Error,
    "EncodingError U+A7BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7BE");
    },
    Error,
    "EncodingError U+A7BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7BF");
    },
    Error,
    "EncodingError U+A7BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C0");
    },
    Error,
    "EncodingError U+A7C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C1");
    },
    Error,
    "EncodingError U+A7C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C2");
    },
    Error,
    "EncodingError U+A7C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C3");
    },
    Error,
    "EncodingError U+A7C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C4");
    },
    Error,
    "EncodingError U+A7C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C5");
    },
    Error,
    "EncodingError U+A7C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C6");
    },
    Error,
    "EncodingError U+A7C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C7");
    },
    Error,
    "EncodingError U+A7C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C8");
    },
    Error,
    "EncodingError U+A7C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C9");
    },
    Error,
    "EncodingError U+A7C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7CA");
    },
    Error,
    "EncodingError U+A7CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7CB");
    },
    Error,
    "EncodingError U+A7CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7CC");
    },
    Error,
    "EncodingError U+A7CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7CD");
    },
    Error,
    "EncodingError U+A7CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7CE");
    },
    Error,
    "EncodingError U+A7CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7CF");
    },
    Error,
    "EncodingError U+A7CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D0");
    },
    Error,
    "EncodingError U+A7D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D1");
    },
    Error,
    "EncodingError U+A7D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D2");
    },
    Error,
    "EncodingError U+A7D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D3");
    },
    Error,
    "EncodingError U+A7D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D4");
    },
    Error,
    "EncodingError U+A7D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D5");
    },
    Error,
    "EncodingError U+A7D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D6");
    },
    Error,
    "EncodingError U+A7D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D7");
    },
    Error,
    "EncodingError U+A7D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D8");
    },
    Error,
    "EncodingError U+A7D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D9");
    },
    Error,
    "EncodingError U+A7D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7DA");
    },
    Error,
    "EncodingError U+A7DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7DB");
    },
    Error,
    "EncodingError U+A7DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7DC");
    },
    Error,
    "EncodingError U+A7DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7DD");
    },
    Error,
    "EncodingError U+A7DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7DE");
    },
    Error,
    "EncodingError U+A7DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7DF");
    },
    Error,
    "EncodingError U+A7DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E0");
    },
    Error,
    "EncodingError U+A7E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E1");
    },
    Error,
    "EncodingError U+A7E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E2");
    },
    Error,
    "EncodingError U+A7E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E3");
    },
    Error,
    "EncodingError U+A7E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E4");
    },
    Error,
    "EncodingError U+A7E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E5");
    },
    Error,
    "EncodingError U+A7E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E6");
    },
    Error,
    "EncodingError U+A7E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E7");
    },
    Error,
    "EncodingError U+A7E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E8");
    },
    Error,
    "EncodingError U+A7E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E9");
    },
    Error,
    "EncodingError U+A7E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7EA");
    },
    Error,
    "EncodingError U+A7EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7EB");
    },
    Error,
    "EncodingError U+A7EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7EC");
    },
    Error,
    "EncodingError U+A7EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7ED");
    },
    Error,
    "EncodingError U+A7ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7EE");
    },
    Error,
    "EncodingError U+A7EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7EF");
    },
    Error,
    "EncodingError U+A7EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F0");
    },
    Error,
    "EncodingError U+A7F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F1");
    },
    Error,
    "EncodingError U+A7F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F2");
    },
    Error,
    "EncodingError U+A7F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F3");
    },
    Error,
    "EncodingError U+A7F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F4");
    },
    Error,
    "EncodingError U+A7F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F5");
    },
    Error,
    "EncodingError U+A7F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F6");
    },
    Error,
    "EncodingError U+A7F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F7");
    },
    Error,
    "EncodingError U+A7F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F8");
    },
    Error,
    "EncodingError U+A7F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F9");
    },
    Error,
    "EncodingError U+A7F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7FA");
    },
    Error,
    "EncodingError U+A7FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7FB");
    },
    Error,
    "EncodingError U+A7FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7FC");
    },
    Error,
    "EncodingError U+A7FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7FD");
    },
    Error,
    "EncodingError U+A7FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7FE");
    },
    Error,
    "EncodingError U+A7FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7FF");
    },
    Error,
    "EncodingError U+A7FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA800");
    },
    Error,
    "EncodingError U+A800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA801");
    },
    Error,
    "EncodingError U+A801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA802");
    },
    Error,
    "EncodingError U+A802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA803");
    },
    Error,
    "EncodingError U+A803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA804");
    },
    Error,
    "EncodingError U+A804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA805");
    },
    Error,
    "EncodingError U+A805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA806");
    },
    Error,
    "EncodingError U+A806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA807");
    },
    Error,
    "EncodingError U+A807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA808");
    },
    Error,
    "EncodingError U+A808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA809");
    },
    Error,
    "EncodingError U+A809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA80A");
    },
    Error,
    "EncodingError U+A80A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA80B");
    },
    Error,
    "EncodingError U+A80B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA80C");
    },
    Error,
    "EncodingError U+A80C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA80D");
    },
    Error,
    "EncodingError U+A80D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA80E");
    },
    Error,
    "EncodingError U+A80E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA80F");
    },
    Error,
    "EncodingError U+A80F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA810");
    },
    Error,
    "EncodingError U+A810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA811");
    },
    Error,
    "EncodingError U+A811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA812");
    },
    Error,
    "EncodingError U+A812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA813");
    },
    Error,
    "EncodingError U+A813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA814");
    },
    Error,
    "EncodingError U+A814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA815");
    },
    Error,
    "EncodingError U+A815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA816");
    },
    Error,
    "EncodingError U+A816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA817");
    },
    Error,
    "EncodingError U+A817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA818");
    },
    Error,
    "EncodingError U+A818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA819");
    },
    Error,
    "EncodingError U+A819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA81A");
    },
    Error,
    "EncodingError U+A81A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA81B");
    },
    Error,
    "EncodingError U+A81B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA81C");
    },
    Error,
    "EncodingError U+A81C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA81D");
    },
    Error,
    "EncodingError U+A81D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA81E");
    },
    Error,
    "EncodingError U+A81E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA81F");
    },
    Error,
    "EncodingError U+A81F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA820");
    },
    Error,
    "EncodingError U+A820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA821");
    },
    Error,
    "EncodingError U+A821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA822");
    },
    Error,
    "EncodingError U+A822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA823");
    },
    Error,
    "EncodingError U+A823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA824");
    },
    Error,
    "EncodingError U+A824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA825");
    },
    Error,
    "EncodingError U+A825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA826");
    },
    Error,
    "EncodingError U+A826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA827");
    },
    Error,
    "EncodingError U+A827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA828");
    },
    Error,
    "EncodingError U+A828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA829");
    },
    Error,
    "EncodingError U+A829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA82A");
    },
    Error,
    "EncodingError U+A82A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA82B");
    },
    Error,
    "EncodingError U+A82B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA82C");
    },
    Error,
    "EncodingError U+A82C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA82D");
    },
    Error,
    "EncodingError U+A82D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA82E");
    },
    Error,
    "EncodingError U+A82E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA82F");
    },
    Error,
    "EncodingError U+A82F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA830");
    },
    Error,
    "EncodingError U+A830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA831");
    },
    Error,
    "EncodingError U+A831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA832");
    },
    Error,
    "EncodingError U+A832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA833");
    },
    Error,
    "EncodingError U+A833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA834");
    },
    Error,
    "EncodingError U+A834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA835");
    },
    Error,
    "EncodingError U+A835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA836");
    },
    Error,
    "EncodingError U+A836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA837");
    },
    Error,
    "EncodingError U+A837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA838");
    },
    Error,
    "EncodingError U+A838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA839");
    },
    Error,
    "EncodingError U+A839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA83A");
    },
    Error,
    "EncodingError U+A83A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA83B");
    },
    Error,
    "EncodingError U+A83B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA83C");
    },
    Error,
    "EncodingError U+A83C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA83D");
    },
    Error,
    "EncodingError U+A83D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA83E");
    },
    Error,
    "EncodingError U+A83E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA83F");
    },
    Error,
    "EncodingError U+A83F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA840");
    },
    Error,
    "EncodingError U+A840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA841");
    },
    Error,
    "EncodingError U+A841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA842");
    },
    Error,
    "EncodingError U+A842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA843");
    },
    Error,
    "EncodingError U+A843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA844");
    },
    Error,
    "EncodingError U+A844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA845");
    },
    Error,
    "EncodingError U+A845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA846");
    },
    Error,
    "EncodingError U+A846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA847");
    },
    Error,
    "EncodingError U+A847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA848");
    },
    Error,
    "EncodingError U+A848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA849");
    },
    Error,
    "EncodingError U+A849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA84A");
    },
    Error,
    "EncodingError U+A84A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA84B");
    },
    Error,
    "EncodingError U+A84B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA84C");
    },
    Error,
    "EncodingError U+A84C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA84D");
    },
    Error,
    "EncodingError U+A84D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA84E");
    },
    Error,
    "EncodingError U+A84E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA84F");
    },
    Error,
    "EncodingError U+A84F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA850");
    },
    Error,
    "EncodingError U+A850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA851");
    },
    Error,
    "EncodingError U+A851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA852");
    },
    Error,
    "EncodingError U+A852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA853");
    },
    Error,
    "EncodingError U+A853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA854");
    },
    Error,
    "EncodingError U+A854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA855");
    },
    Error,
    "EncodingError U+A855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA856");
    },
    Error,
    "EncodingError U+A856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA857");
    },
    Error,
    "EncodingError U+A857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA858");
    },
    Error,
    "EncodingError U+A858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA859");
    },
    Error,
    "EncodingError U+A859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA85A");
    },
    Error,
    "EncodingError U+A85A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA85B");
    },
    Error,
    "EncodingError U+A85B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA85C");
    },
    Error,
    "EncodingError U+A85C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA85D");
    },
    Error,
    "EncodingError U+A85D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA85E");
    },
    Error,
    "EncodingError U+A85E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA85F");
    },
    Error,
    "EncodingError U+A85F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA860");
    },
    Error,
    "EncodingError U+A860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA861");
    },
    Error,
    "EncodingError U+A861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA862");
    },
    Error,
    "EncodingError U+A862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA863");
    },
    Error,
    "EncodingError U+A863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA864");
    },
    Error,
    "EncodingError U+A864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA865");
    },
    Error,
    "EncodingError U+A865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA866");
    },
    Error,
    "EncodingError U+A866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA867");
    },
    Error,
    "EncodingError U+A867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA868");
    },
    Error,
    "EncodingError U+A868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA869");
    },
    Error,
    "EncodingError U+A869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA86A");
    },
    Error,
    "EncodingError U+A86A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA86B");
    },
    Error,
    "EncodingError U+A86B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA86C");
    },
    Error,
    "EncodingError U+A86C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA86D");
    },
    Error,
    "EncodingError U+A86D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA86E");
    },
    Error,
    "EncodingError U+A86E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA86F");
    },
    Error,
    "EncodingError U+A86F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA870");
    },
    Error,
    "EncodingError U+A870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA871");
    },
    Error,
    "EncodingError U+A871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA872");
    },
    Error,
    "EncodingError U+A872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA873");
    },
    Error,
    "EncodingError U+A873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA874");
    },
    Error,
    "EncodingError U+A874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA875");
    },
    Error,
    "EncodingError U+A875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA876");
    },
    Error,
    "EncodingError U+A876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA877");
    },
    Error,
    "EncodingError U+A877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA878");
    },
    Error,
    "EncodingError U+A878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA879");
    },
    Error,
    "EncodingError U+A879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA87A");
    },
    Error,
    "EncodingError U+A87A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA87B");
    },
    Error,
    "EncodingError U+A87B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA87C");
    },
    Error,
    "EncodingError U+A87C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA87D");
    },
    Error,
    "EncodingError U+A87D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA87E");
    },
    Error,
    "EncodingError U+A87E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA87F");
    },
    Error,
    "EncodingError U+A87F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA880");
    },
    Error,
    "EncodingError U+A880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA881");
    },
    Error,
    "EncodingError U+A881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA882");
    },
    Error,
    "EncodingError U+A882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA883");
    },
    Error,
    "EncodingError U+A883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA884");
    },
    Error,
    "EncodingError U+A884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA885");
    },
    Error,
    "EncodingError U+A885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA886");
    },
    Error,
    "EncodingError U+A886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA887");
    },
    Error,
    "EncodingError U+A887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA888");
    },
    Error,
    "EncodingError U+A888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA889");
    },
    Error,
    "EncodingError U+A889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA88A");
    },
    Error,
    "EncodingError U+A88A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA88B");
    },
    Error,
    "EncodingError U+A88B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA88C");
    },
    Error,
    "EncodingError U+A88C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA88D");
    },
    Error,
    "EncodingError U+A88D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA88E");
    },
    Error,
    "EncodingError U+A88E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA88F");
    },
    Error,
    "EncodingError U+A88F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA890");
    },
    Error,
    "EncodingError U+A890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA891");
    },
    Error,
    "EncodingError U+A891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA892");
    },
    Error,
    "EncodingError U+A892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA893");
    },
    Error,
    "EncodingError U+A893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA894");
    },
    Error,
    "EncodingError U+A894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA895");
    },
    Error,
    "EncodingError U+A895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA896");
    },
    Error,
    "EncodingError U+A896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA897");
    },
    Error,
    "EncodingError U+A897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA898");
    },
    Error,
    "EncodingError U+A898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA899");
    },
    Error,
    "EncodingError U+A899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA89A");
    },
    Error,
    "EncodingError U+A89A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA89B");
    },
    Error,
    "EncodingError U+A89B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA89C");
    },
    Error,
    "EncodingError U+A89C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA89D");
    },
    Error,
    "EncodingError U+A89D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA89E");
    },
    Error,
    "EncodingError U+A89E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA89F");
    },
    Error,
    "EncodingError U+A89F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A0");
    },
    Error,
    "EncodingError U+A8A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A1");
    },
    Error,
    "EncodingError U+A8A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A2");
    },
    Error,
    "EncodingError U+A8A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A3");
    },
    Error,
    "EncodingError U+A8A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A4");
    },
    Error,
    "EncodingError U+A8A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A5");
    },
    Error,
    "EncodingError U+A8A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A6");
    },
    Error,
    "EncodingError U+A8A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A7");
    },
    Error,
    "EncodingError U+A8A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A8");
    },
    Error,
    "EncodingError U+A8A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A9");
    },
    Error,
    "EncodingError U+A8A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8AA");
    },
    Error,
    "EncodingError U+A8AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8AB");
    },
    Error,
    "EncodingError U+A8AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8AC");
    },
    Error,
    "EncodingError U+A8AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8AD");
    },
    Error,
    "EncodingError U+A8AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8AE");
    },
    Error,
    "EncodingError U+A8AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8AF");
    },
    Error,
    "EncodingError U+A8AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B0");
    },
    Error,
    "EncodingError U+A8B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B1");
    },
    Error,
    "EncodingError U+A8B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B2");
    },
    Error,
    "EncodingError U+A8B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B3");
    },
    Error,
    "EncodingError U+A8B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B4");
    },
    Error,
    "EncodingError U+A8B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B5");
    },
    Error,
    "EncodingError U+A8B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B6");
    },
    Error,
    "EncodingError U+A8B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B7");
    },
    Error,
    "EncodingError U+A8B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B8");
    },
    Error,
    "EncodingError U+A8B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B9");
    },
    Error,
    "EncodingError U+A8B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8BA");
    },
    Error,
    "EncodingError U+A8BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8BB");
    },
    Error,
    "EncodingError U+A8BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8BC");
    },
    Error,
    "EncodingError U+A8BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8BD");
    },
    Error,
    "EncodingError U+A8BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8BE");
    },
    Error,
    "EncodingError U+A8BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8BF");
    },
    Error,
    "EncodingError U+A8BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C0");
    },
    Error,
    "EncodingError U+A8C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C1");
    },
    Error,
    "EncodingError U+A8C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C2");
    },
    Error,
    "EncodingError U+A8C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C3");
    },
    Error,
    "EncodingError U+A8C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C4");
    },
    Error,
    "EncodingError U+A8C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C5");
    },
    Error,
    "EncodingError U+A8C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C6");
    },
    Error,
    "EncodingError U+A8C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C7");
    },
    Error,
    "EncodingError U+A8C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C8");
    },
    Error,
    "EncodingError U+A8C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C9");
    },
    Error,
    "EncodingError U+A8C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8CA");
    },
    Error,
    "EncodingError U+A8CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8CB");
    },
    Error,
    "EncodingError U+A8CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8CC");
    },
    Error,
    "EncodingError U+A8CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8CD");
    },
    Error,
    "EncodingError U+A8CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8CE");
    },
    Error,
    "EncodingError U+A8CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8CF");
    },
    Error,
    "EncodingError U+A8CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D0");
    },
    Error,
    "EncodingError U+A8D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D1");
    },
    Error,
    "EncodingError U+A8D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D2");
    },
    Error,
    "EncodingError U+A8D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D3");
    },
    Error,
    "EncodingError U+A8D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D4");
    },
    Error,
    "EncodingError U+A8D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D5");
    },
    Error,
    "EncodingError U+A8D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D6");
    },
    Error,
    "EncodingError U+A8D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D7");
    },
    Error,
    "EncodingError U+A8D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D8");
    },
    Error,
    "EncodingError U+A8D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D9");
    },
    Error,
    "EncodingError U+A8D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8DA");
    },
    Error,
    "EncodingError U+A8DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8DB");
    },
    Error,
    "EncodingError U+A8DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8DC");
    },
    Error,
    "EncodingError U+A8DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8DD");
    },
    Error,
    "EncodingError U+A8DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8DE");
    },
    Error,
    "EncodingError U+A8DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8DF");
    },
    Error,
    "EncodingError U+A8DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E0");
    },
    Error,
    "EncodingError U+A8E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E1");
    },
    Error,
    "EncodingError U+A8E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E2");
    },
    Error,
    "EncodingError U+A8E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E3");
    },
    Error,
    "EncodingError U+A8E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E4");
    },
    Error,
    "EncodingError U+A8E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E5");
    },
    Error,
    "EncodingError U+A8E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E6");
    },
    Error,
    "EncodingError U+A8E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E7");
    },
    Error,
    "EncodingError U+A8E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E8");
    },
    Error,
    "EncodingError U+A8E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E9");
    },
    Error,
    "EncodingError U+A8E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8EA");
    },
    Error,
    "EncodingError U+A8EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8EB");
    },
    Error,
    "EncodingError U+A8EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8EC");
    },
    Error,
    "EncodingError U+A8EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8ED");
    },
    Error,
    "EncodingError U+A8ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8EE");
    },
    Error,
    "EncodingError U+A8EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8EF");
    },
    Error,
    "EncodingError U+A8EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F0");
    },
    Error,
    "EncodingError U+A8F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F1");
    },
    Error,
    "EncodingError U+A8F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F2");
    },
    Error,
    "EncodingError U+A8F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F3");
    },
    Error,
    "EncodingError U+A8F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F4");
    },
    Error,
    "EncodingError U+A8F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F5");
    },
    Error,
    "EncodingError U+A8F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F6");
    },
    Error,
    "EncodingError U+A8F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F7");
    },
    Error,
    "EncodingError U+A8F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F8");
    },
    Error,
    "EncodingError U+A8F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F9");
    },
    Error,
    "EncodingError U+A8F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8FA");
    },
    Error,
    "EncodingError U+A8FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8FB");
    },
    Error,
    "EncodingError U+A8FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8FC");
    },
    Error,
    "EncodingError U+A8FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8FD");
    },
    Error,
    "EncodingError U+A8FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8FE");
    },
    Error,
    "EncodingError U+A8FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8FF");
    },
    Error,
    "EncodingError U+A8FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA900");
    },
    Error,
    "EncodingError U+A900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA901");
    },
    Error,
    "EncodingError U+A901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA902");
    },
    Error,
    "EncodingError U+A902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA903");
    },
    Error,
    "EncodingError U+A903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA904");
    },
    Error,
    "EncodingError U+A904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA905");
    },
    Error,
    "EncodingError U+A905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA906");
    },
    Error,
    "EncodingError U+A906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA907");
    },
    Error,
    "EncodingError U+A907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA908");
    },
    Error,
    "EncodingError U+A908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA909");
    },
    Error,
    "EncodingError U+A909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA90A");
    },
    Error,
    "EncodingError U+A90A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA90B");
    },
    Error,
    "EncodingError U+A90B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA90C");
    },
    Error,
    "EncodingError U+A90C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA90D");
    },
    Error,
    "EncodingError U+A90D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA90E");
    },
    Error,
    "EncodingError U+A90E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA90F");
    },
    Error,
    "EncodingError U+A90F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA910");
    },
    Error,
    "EncodingError U+A910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA911");
    },
    Error,
    "EncodingError U+A911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA912");
    },
    Error,
    "EncodingError U+A912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA913");
    },
    Error,
    "EncodingError U+A913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA914");
    },
    Error,
    "EncodingError U+A914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA915");
    },
    Error,
    "EncodingError U+A915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA916");
    },
    Error,
    "EncodingError U+A916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA917");
    },
    Error,
    "EncodingError U+A917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA918");
    },
    Error,
    "EncodingError U+A918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA919");
    },
    Error,
    "EncodingError U+A919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA91A");
    },
    Error,
    "EncodingError U+A91A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA91B");
    },
    Error,
    "EncodingError U+A91B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA91C");
    },
    Error,
    "EncodingError U+A91C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA91D");
    },
    Error,
    "EncodingError U+A91D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA91E");
    },
    Error,
    "EncodingError U+A91E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA91F");
    },
    Error,
    "EncodingError U+A91F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA920");
    },
    Error,
    "EncodingError U+A920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA921");
    },
    Error,
    "EncodingError U+A921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA922");
    },
    Error,
    "EncodingError U+A922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA923");
    },
    Error,
    "EncodingError U+A923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA924");
    },
    Error,
    "EncodingError U+A924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA925");
    },
    Error,
    "EncodingError U+A925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA926");
    },
    Error,
    "EncodingError U+A926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA927");
    },
    Error,
    "EncodingError U+A927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA928");
    },
    Error,
    "EncodingError U+A928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA929");
    },
    Error,
    "EncodingError U+A929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA92A");
    },
    Error,
    "EncodingError U+A92A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA92B");
    },
    Error,
    "EncodingError U+A92B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA92C");
    },
    Error,
    "EncodingError U+A92C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA92D");
    },
    Error,
    "EncodingError U+A92D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA92E");
    },
    Error,
    "EncodingError U+A92E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA92F");
    },
    Error,
    "EncodingError U+A92F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA930");
    },
    Error,
    "EncodingError U+A930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA931");
    },
    Error,
    "EncodingError U+A931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA932");
    },
    Error,
    "EncodingError U+A932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA933");
    },
    Error,
    "EncodingError U+A933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA934");
    },
    Error,
    "EncodingError U+A934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA935");
    },
    Error,
    "EncodingError U+A935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA936");
    },
    Error,
    "EncodingError U+A936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA937");
    },
    Error,
    "EncodingError U+A937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA938");
    },
    Error,
    "EncodingError U+A938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA939");
    },
    Error,
    "EncodingError U+A939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA93A");
    },
    Error,
    "EncodingError U+A93A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA93B");
    },
    Error,
    "EncodingError U+A93B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA93C");
    },
    Error,
    "EncodingError U+A93C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA93D");
    },
    Error,
    "EncodingError U+A93D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA93E");
    },
    Error,
    "EncodingError U+A93E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA93F");
    },
    Error,
    "EncodingError U+A93F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA940");
    },
    Error,
    "EncodingError U+A940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA941");
    },
    Error,
    "EncodingError U+A941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA942");
    },
    Error,
    "EncodingError U+A942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA943");
    },
    Error,
    "EncodingError U+A943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA944");
    },
    Error,
    "EncodingError U+A944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA945");
    },
    Error,
    "EncodingError U+A945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA946");
    },
    Error,
    "EncodingError U+A946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA947");
    },
    Error,
    "EncodingError U+A947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA948");
    },
    Error,
    "EncodingError U+A948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA949");
    },
    Error,
    "EncodingError U+A949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA94A");
    },
    Error,
    "EncodingError U+A94A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA94B");
    },
    Error,
    "EncodingError U+A94B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA94C");
    },
    Error,
    "EncodingError U+A94C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA94D");
    },
    Error,
    "EncodingError U+A94D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA94E");
    },
    Error,
    "EncodingError U+A94E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA94F");
    },
    Error,
    "EncodingError U+A94F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA950");
    },
    Error,
    "EncodingError U+A950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA951");
    },
    Error,
    "EncodingError U+A951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA952");
    },
    Error,
    "EncodingError U+A952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA953");
    },
    Error,
    "EncodingError U+A953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA954");
    },
    Error,
    "EncodingError U+A954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA955");
    },
    Error,
    "EncodingError U+A955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA956");
    },
    Error,
    "EncodingError U+A956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA957");
    },
    Error,
    "EncodingError U+A957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA958");
    },
    Error,
    "EncodingError U+A958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA959");
    },
    Error,
    "EncodingError U+A959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA95A");
    },
    Error,
    "EncodingError U+A95A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA95B");
    },
    Error,
    "EncodingError U+A95B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA95C");
    },
    Error,
    "EncodingError U+A95C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA95D");
    },
    Error,
    "EncodingError U+A95D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA95E");
    },
    Error,
    "EncodingError U+A95E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA95F");
    },
    Error,
    "EncodingError U+A95F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA960");
    },
    Error,
    "EncodingError U+A960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA961");
    },
    Error,
    "EncodingError U+A961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA962");
    },
    Error,
    "EncodingError U+A962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA963");
    },
    Error,
    "EncodingError U+A963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA964");
    },
    Error,
    "EncodingError U+A964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA965");
    },
    Error,
    "EncodingError U+A965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA966");
    },
    Error,
    "EncodingError U+A966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA967");
    },
    Error,
    "EncodingError U+A967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA968");
    },
    Error,
    "EncodingError U+A968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA969");
    },
    Error,
    "EncodingError U+A969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA96A");
    },
    Error,
    "EncodingError U+A96A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA96B");
    },
    Error,
    "EncodingError U+A96B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA96C");
    },
    Error,
    "EncodingError U+A96C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA96D");
    },
    Error,
    "EncodingError U+A96D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA96E");
    },
    Error,
    "EncodingError U+A96E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA96F");
    },
    Error,
    "EncodingError U+A96F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA970");
    },
    Error,
    "EncodingError U+A970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA971");
    },
    Error,
    "EncodingError U+A971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA972");
    },
    Error,
    "EncodingError U+A972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA973");
    },
    Error,
    "EncodingError U+A973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA974");
    },
    Error,
    "EncodingError U+A974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA975");
    },
    Error,
    "EncodingError U+A975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA976");
    },
    Error,
    "EncodingError U+A976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA977");
    },
    Error,
    "EncodingError U+A977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA978");
    },
    Error,
    "EncodingError U+A978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA979");
    },
    Error,
    "EncodingError U+A979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA97A");
    },
    Error,
    "EncodingError U+A97A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA97B");
    },
    Error,
    "EncodingError U+A97B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA97C");
    },
    Error,
    "EncodingError U+A97C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA97D");
    },
    Error,
    "EncodingError U+A97D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA97E");
    },
    Error,
    "EncodingError U+A97E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA97F");
    },
    Error,
    "EncodingError U+A97F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA980");
    },
    Error,
    "EncodingError U+A980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA981");
    },
    Error,
    "EncodingError U+A981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA982");
    },
    Error,
    "EncodingError U+A982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA983");
    },
    Error,
    "EncodingError U+A983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA984");
    },
    Error,
    "EncodingError U+A984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA985");
    },
    Error,
    "EncodingError U+A985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA986");
    },
    Error,
    "EncodingError U+A986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA987");
    },
    Error,
    "EncodingError U+A987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA988");
    },
    Error,
    "EncodingError U+A988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA989");
    },
    Error,
    "EncodingError U+A989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA98A");
    },
    Error,
    "EncodingError U+A98A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA98B");
    },
    Error,
    "EncodingError U+A98B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA98C");
    },
    Error,
    "EncodingError U+A98C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA98D");
    },
    Error,
    "EncodingError U+A98D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA98E");
    },
    Error,
    "EncodingError U+A98E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA98F");
    },
    Error,
    "EncodingError U+A98F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA990");
    },
    Error,
    "EncodingError U+A990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA991");
    },
    Error,
    "EncodingError U+A991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA992");
    },
    Error,
    "EncodingError U+A992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA993");
    },
    Error,
    "EncodingError U+A993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA994");
    },
    Error,
    "EncodingError U+A994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA995");
    },
    Error,
    "EncodingError U+A995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA996");
    },
    Error,
    "EncodingError U+A996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA997");
    },
    Error,
    "EncodingError U+A997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA998");
    },
    Error,
    "EncodingError U+A998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA999");
    },
    Error,
    "EncodingError U+A999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA99A");
    },
    Error,
    "EncodingError U+A99A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA99B");
    },
    Error,
    "EncodingError U+A99B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA99C");
    },
    Error,
    "EncodingError U+A99C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA99D");
    },
    Error,
    "EncodingError U+A99D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA99E");
    },
    Error,
    "EncodingError U+A99E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA99F");
    },
    Error,
    "EncodingError U+A99F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A0");
    },
    Error,
    "EncodingError U+A9A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A1");
    },
    Error,
    "EncodingError U+A9A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A2");
    },
    Error,
    "EncodingError U+A9A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A3");
    },
    Error,
    "EncodingError U+A9A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A4");
    },
    Error,
    "EncodingError U+A9A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A5");
    },
    Error,
    "EncodingError U+A9A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A6");
    },
    Error,
    "EncodingError U+A9A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A7");
    },
    Error,
    "EncodingError U+A9A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A8");
    },
    Error,
    "EncodingError U+A9A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A9");
    },
    Error,
    "EncodingError U+A9A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9AA");
    },
    Error,
    "EncodingError U+A9AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9AB");
    },
    Error,
    "EncodingError U+A9AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9AC");
    },
    Error,
    "EncodingError U+A9AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9AD");
    },
    Error,
    "EncodingError U+A9AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9AE");
    },
    Error,
    "EncodingError U+A9AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9AF");
    },
    Error,
    "EncodingError U+A9AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B0");
    },
    Error,
    "EncodingError U+A9B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B1");
    },
    Error,
    "EncodingError U+A9B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B2");
    },
    Error,
    "EncodingError U+A9B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B3");
    },
    Error,
    "EncodingError U+A9B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B4");
    },
    Error,
    "EncodingError U+A9B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B5");
    },
    Error,
    "EncodingError U+A9B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B6");
    },
    Error,
    "EncodingError U+A9B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B7");
    },
    Error,
    "EncodingError U+A9B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B8");
    },
    Error,
    "EncodingError U+A9B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B9");
    },
    Error,
    "EncodingError U+A9B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9BA");
    },
    Error,
    "EncodingError U+A9BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9BB");
    },
    Error,
    "EncodingError U+A9BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9BC");
    },
    Error,
    "EncodingError U+A9BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9BD");
    },
    Error,
    "EncodingError U+A9BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9BE");
    },
    Error,
    "EncodingError U+A9BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9BF");
    },
    Error,
    "EncodingError U+A9BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C0");
    },
    Error,
    "EncodingError U+A9C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C1");
    },
    Error,
    "EncodingError U+A9C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C2");
    },
    Error,
    "EncodingError U+A9C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C3");
    },
    Error,
    "EncodingError U+A9C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C4");
    },
    Error,
    "EncodingError U+A9C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C5");
    },
    Error,
    "EncodingError U+A9C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C6");
    },
    Error,
    "EncodingError U+A9C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C7");
    },
    Error,
    "EncodingError U+A9C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C8");
    },
    Error,
    "EncodingError U+A9C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C9");
    },
    Error,
    "EncodingError U+A9C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9CA");
    },
    Error,
    "EncodingError U+A9CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9CB");
    },
    Error,
    "EncodingError U+A9CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9CC");
    },
    Error,
    "EncodingError U+A9CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9CD");
    },
    Error,
    "EncodingError U+A9CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9CE");
    },
    Error,
    "EncodingError U+A9CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9CF");
    },
    Error,
    "EncodingError U+A9CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D0");
    },
    Error,
    "EncodingError U+A9D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D1");
    },
    Error,
    "EncodingError U+A9D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D2");
    },
    Error,
    "EncodingError U+A9D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D3");
    },
    Error,
    "EncodingError U+A9D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D4");
    },
    Error,
    "EncodingError U+A9D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D5");
    },
    Error,
    "EncodingError U+A9D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D6");
    },
    Error,
    "EncodingError U+A9D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D7");
    },
    Error,
    "EncodingError U+A9D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D8");
    },
    Error,
    "EncodingError U+A9D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D9");
    },
    Error,
    "EncodingError U+A9D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9DA");
    },
    Error,
    "EncodingError U+A9DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9DB");
    },
    Error,
    "EncodingError U+A9DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9DC");
    },
    Error,
    "EncodingError U+A9DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9DD");
    },
    Error,
    "EncodingError U+A9DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9DE");
    },
    Error,
    "EncodingError U+A9DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9DF");
    },
    Error,
    "EncodingError U+A9DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E0");
    },
    Error,
    "EncodingError U+A9E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E1");
    },
    Error,
    "EncodingError U+A9E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E2");
    },
    Error,
    "EncodingError U+A9E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E3");
    },
    Error,
    "EncodingError U+A9E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E4");
    },
    Error,
    "EncodingError U+A9E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E5");
    },
    Error,
    "EncodingError U+A9E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E6");
    },
    Error,
    "EncodingError U+A9E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E7");
    },
    Error,
    "EncodingError U+A9E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E8");
    },
    Error,
    "EncodingError U+A9E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E9");
    },
    Error,
    "EncodingError U+A9E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9EA");
    },
    Error,
    "EncodingError U+A9EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9EB");
    },
    Error,
    "EncodingError U+A9EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9EC");
    },
    Error,
    "EncodingError U+A9EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9ED");
    },
    Error,
    "EncodingError U+A9ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9EE");
    },
    Error,
    "EncodingError U+A9EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9EF");
    },
    Error,
    "EncodingError U+A9EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F0");
    },
    Error,
    "EncodingError U+A9F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F1");
    },
    Error,
    "EncodingError U+A9F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F2");
    },
    Error,
    "EncodingError U+A9F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F3");
    },
    Error,
    "EncodingError U+A9F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F4");
    },
    Error,
    "EncodingError U+A9F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F5");
    },
    Error,
    "EncodingError U+A9F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F6");
    },
    Error,
    "EncodingError U+A9F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F7");
    },
    Error,
    "EncodingError U+A9F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F8");
    },
    Error,
    "EncodingError U+A9F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F9");
    },
    Error,
    "EncodingError U+A9F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9FA");
    },
    Error,
    "EncodingError U+A9FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9FB");
    },
    Error,
    "EncodingError U+A9FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9FC");
    },
    Error,
    "EncodingError U+A9FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9FD");
    },
    Error,
    "EncodingError U+A9FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9FE");
    },
    Error,
    "EncodingError U+A9FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9FF");
    },
    Error,
    "EncodingError U+A9FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA00");
    },
    Error,
    "EncodingError U+AA00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA01");
    },
    Error,
    "EncodingError U+AA01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA02");
    },
    Error,
    "EncodingError U+AA02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA03");
    },
    Error,
    "EncodingError U+AA03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA04");
    },
    Error,
    "EncodingError U+AA04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA05");
    },
    Error,
    "EncodingError U+AA05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA06");
    },
    Error,
    "EncodingError U+AA06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA07");
    },
    Error,
    "EncodingError U+AA07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA08");
    },
    Error,
    "EncodingError U+AA08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA09");
    },
    Error,
    "EncodingError U+AA09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA0A");
    },
    Error,
    "EncodingError U+AA0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA0B");
    },
    Error,
    "EncodingError U+AA0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA0C");
    },
    Error,
    "EncodingError U+AA0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA0D");
    },
    Error,
    "EncodingError U+AA0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA0E");
    },
    Error,
    "EncodingError U+AA0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA0F");
    },
    Error,
    "EncodingError U+AA0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA10");
    },
    Error,
    "EncodingError U+AA10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA11");
    },
    Error,
    "EncodingError U+AA11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA12");
    },
    Error,
    "EncodingError U+AA12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA13");
    },
    Error,
    "EncodingError U+AA13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA14");
    },
    Error,
    "EncodingError U+AA14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA15");
    },
    Error,
    "EncodingError U+AA15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA16");
    },
    Error,
    "EncodingError U+AA16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA17");
    },
    Error,
    "EncodingError U+AA17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA18");
    },
    Error,
    "EncodingError U+AA18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA19");
    },
    Error,
    "EncodingError U+AA19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA1A");
    },
    Error,
    "EncodingError U+AA1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA1B");
    },
    Error,
    "EncodingError U+AA1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA1C");
    },
    Error,
    "EncodingError U+AA1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA1D");
    },
    Error,
    "EncodingError U+AA1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA1E");
    },
    Error,
    "EncodingError U+AA1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA1F");
    },
    Error,
    "EncodingError U+AA1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA20");
    },
    Error,
    "EncodingError U+AA20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA21");
    },
    Error,
    "EncodingError U+AA21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA22");
    },
    Error,
    "EncodingError U+AA22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA23");
    },
    Error,
    "EncodingError U+AA23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA24");
    },
    Error,
    "EncodingError U+AA24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA25");
    },
    Error,
    "EncodingError U+AA25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA26");
    },
    Error,
    "EncodingError U+AA26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA27");
    },
    Error,
    "EncodingError U+AA27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA28");
    },
    Error,
    "EncodingError U+AA28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA29");
    },
    Error,
    "EncodingError U+AA29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA2A");
    },
    Error,
    "EncodingError U+AA2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA2B");
    },
    Error,
    "EncodingError U+AA2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA2C");
    },
    Error,
    "EncodingError U+AA2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA2D");
    },
    Error,
    "EncodingError U+AA2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA2E");
    },
    Error,
    "EncodingError U+AA2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA2F");
    },
    Error,
    "EncodingError U+AA2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA30");
    },
    Error,
    "EncodingError U+AA30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA31");
    },
    Error,
    "EncodingError U+AA31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA32");
    },
    Error,
    "EncodingError U+AA32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA33");
    },
    Error,
    "EncodingError U+AA33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA34");
    },
    Error,
    "EncodingError U+AA34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA35");
    },
    Error,
    "EncodingError U+AA35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA36");
    },
    Error,
    "EncodingError U+AA36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA37");
    },
    Error,
    "EncodingError U+AA37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA38");
    },
    Error,
    "EncodingError U+AA38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA39");
    },
    Error,
    "EncodingError U+AA39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA3A");
    },
    Error,
    "EncodingError U+AA3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA3B");
    },
    Error,
    "EncodingError U+AA3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA3C");
    },
    Error,
    "EncodingError U+AA3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA3D");
    },
    Error,
    "EncodingError U+AA3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA3E");
    },
    Error,
    "EncodingError U+AA3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA3F");
    },
    Error,
    "EncodingError U+AA3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA40");
    },
    Error,
    "EncodingError U+AA40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA41");
    },
    Error,
    "EncodingError U+AA41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA42");
    },
    Error,
    "EncodingError U+AA42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA43");
    },
    Error,
    "EncodingError U+AA43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA44");
    },
    Error,
    "EncodingError U+AA44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA45");
    },
    Error,
    "EncodingError U+AA45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA46");
    },
    Error,
    "EncodingError U+AA46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA47");
    },
    Error,
    "EncodingError U+AA47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA48");
    },
    Error,
    "EncodingError U+AA48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA49");
    },
    Error,
    "EncodingError U+AA49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA4A");
    },
    Error,
    "EncodingError U+AA4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA4B");
    },
    Error,
    "EncodingError U+AA4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA4C");
    },
    Error,
    "EncodingError U+AA4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA4D");
    },
    Error,
    "EncodingError U+AA4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA4E");
    },
    Error,
    "EncodingError U+AA4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA4F");
    },
    Error,
    "EncodingError U+AA4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA50");
    },
    Error,
    "EncodingError U+AA50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA51");
    },
    Error,
    "EncodingError U+AA51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA52");
    },
    Error,
    "EncodingError U+AA52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA53");
    },
    Error,
    "EncodingError U+AA53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA54");
    },
    Error,
    "EncodingError U+AA54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA55");
    },
    Error,
    "EncodingError U+AA55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA56");
    },
    Error,
    "EncodingError U+AA56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA57");
    },
    Error,
    "EncodingError U+AA57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA58");
    },
    Error,
    "EncodingError U+AA58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA59");
    },
    Error,
    "EncodingError U+AA59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA5A");
    },
    Error,
    "EncodingError U+AA5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA5B");
    },
    Error,
    "EncodingError U+AA5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA5C");
    },
    Error,
    "EncodingError U+AA5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA5D");
    },
    Error,
    "EncodingError U+AA5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA5E");
    },
    Error,
    "EncodingError U+AA5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA5F");
    },
    Error,
    "EncodingError U+AA5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA60");
    },
    Error,
    "EncodingError U+AA60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA61");
    },
    Error,
    "EncodingError U+AA61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA62");
    },
    Error,
    "EncodingError U+AA62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA63");
    },
    Error,
    "EncodingError U+AA63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA64");
    },
    Error,
    "EncodingError U+AA64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA65");
    },
    Error,
    "EncodingError U+AA65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA66");
    },
    Error,
    "EncodingError U+AA66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA67");
    },
    Error,
    "EncodingError U+AA67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA68");
    },
    Error,
    "EncodingError U+AA68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA69");
    },
    Error,
    "EncodingError U+AA69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA6A");
    },
    Error,
    "EncodingError U+AA6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA6B");
    },
    Error,
    "EncodingError U+AA6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA6C");
    },
    Error,
    "EncodingError U+AA6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA6D");
    },
    Error,
    "EncodingError U+AA6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA6E");
    },
    Error,
    "EncodingError U+AA6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA6F");
    },
    Error,
    "EncodingError U+AA6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA70");
    },
    Error,
    "EncodingError U+AA70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA71");
    },
    Error,
    "EncodingError U+AA71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA72");
    },
    Error,
    "EncodingError U+AA72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA73");
    },
    Error,
    "EncodingError U+AA73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA74");
    },
    Error,
    "EncodingError U+AA74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA75");
    },
    Error,
    "EncodingError U+AA75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA76");
    },
    Error,
    "EncodingError U+AA76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA77");
    },
    Error,
    "EncodingError U+AA77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA78");
    },
    Error,
    "EncodingError U+AA78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA79");
    },
    Error,
    "EncodingError U+AA79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA7A");
    },
    Error,
    "EncodingError U+AA7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA7B");
    },
    Error,
    "EncodingError U+AA7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA7C");
    },
    Error,
    "EncodingError U+AA7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA7D");
    },
    Error,
    "EncodingError U+AA7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA7E");
    },
    Error,
    "EncodingError U+AA7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA7F");
    },
    Error,
    "EncodingError U+AA7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA80");
    },
    Error,
    "EncodingError U+AA80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA81");
    },
    Error,
    "EncodingError U+AA81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA82");
    },
    Error,
    "EncodingError U+AA82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA83");
    },
    Error,
    "EncodingError U+AA83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA84");
    },
    Error,
    "EncodingError U+AA84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA85");
    },
    Error,
    "EncodingError U+AA85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA86");
    },
    Error,
    "EncodingError U+AA86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA87");
    },
    Error,
    "EncodingError U+AA87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA88");
    },
    Error,
    "EncodingError U+AA88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA89");
    },
    Error,
    "EncodingError U+AA89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA8A");
    },
    Error,
    "EncodingError U+AA8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA8B");
    },
    Error,
    "EncodingError U+AA8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA8C");
    },
    Error,
    "EncodingError U+AA8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA8D");
    },
    Error,
    "EncodingError U+AA8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA8E");
    },
    Error,
    "EncodingError U+AA8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA8F");
    },
    Error,
    "EncodingError U+AA8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA90");
    },
    Error,
    "EncodingError U+AA90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA91");
    },
    Error,
    "EncodingError U+AA91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA92");
    },
    Error,
    "EncodingError U+AA92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA93");
    },
    Error,
    "EncodingError U+AA93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA94");
    },
    Error,
    "EncodingError U+AA94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA95");
    },
    Error,
    "EncodingError U+AA95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA96");
    },
    Error,
    "EncodingError U+AA96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA97");
    },
    Error,
    "EncodingError U+AA97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA98");
    },
    Error,
    "EncodingError U+AA98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA99");
    },
    Error,
    "EncodingError U+AA99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA9A");
    },
    Error,
    "EncodingError U+AA9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA9B");
    },
    Error,
    "EncodingError U+AA9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA9C");
    },
    Error,
    "EncodingError U+AA9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA9D");
    },
    Error,
    "EncodingError U+AA9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA9E");
    },
    Error,
    "EncodingError U+AA9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA9F");
    },
    Error,
    "EncodingError U+AA9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA0");
    },
    Error,
    "EncodingError U+AAA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA1");
    },
    Error,
    "EncodingError U+AAA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA2");
    },
    Error,
    "EncodingError U+AAA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA3");
    },
    Error,
    "EncodingError U+AAA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA4");
    },
    Error,
    "EncodingError U+AAA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA5");
    },
    Error,
    "EncodingError U+AAA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA6");
    },
    Error,
    "EncodingError U+AAA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA7");
    },
    Error,
    "EncodingError U+AAA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA8");
    },
    Error,
    "EncodingError U+AAA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA9");
    },
    Error,
    "EncodingError U+AAA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAAA");
    },
    Error,
    "EncodingError U+AAAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAAB");
    },
    Error,
    "EncodingError U+AAAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAAC");
    },
    Error,
    "EncodingError U+AAAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAAD");
    },
    Error,
    "EncodingError U+AAAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAAE");
    },
    Error,
    "EncodingError U+AAAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAAF");
    },
    Error,
    "EncodingError U+AAAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB0");
    },
    Error,
    "EncodingError U+AAB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB1");
    },
    Error,
    "EncodingError U+AAB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB2");
    },
    Error,
    "EncodingError U+AAB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB3");
    },
    Error,
    "EncodingError U+AAB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB4");
    },
    Error,
    "EncodingError U+AAB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB5");
    },
    Error,
    "EncodingError U+AAB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB6");
    },
    Error,
    "EncodingError U+AAB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB7");
    },
    Error,
    "EncodingError U+AAB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB8");
    },
    Error,
    "EncodingError U+AAB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB9");
    },
    Error,
    "EncodingError U+AAB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAABA");
    },
    Error,
    "EncodingError U+AABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAABB");
    },
    Error,
    "EncodingError U+AABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAABC");
    },
    Error,
    "EncodingError U+AABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAABD");
    },
    Error,
    "EncodingError U+AABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAABE");
    },
    Error,
    "EncodingError U+AABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAABF");
    },
    Error,
    "EncodingError U+AABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC0");
    },
    Error,
    "EncodingError U+AAC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC1");
    },
    Error,
    "EncodingError U+AAC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC2");
    },
    Error,
    "EncodingError U+AAC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC3");
    },
    Error,
    "EncodingError U+AAC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC4");
    },
    Error,
    "EncodingError U+AAC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC5");
    },
    Error,
    "EncodingError U+AAC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC6");
    },
    Error,
    "EncodingError U+AAC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC7");
    },
    Error,
    "EncodingError U+AAC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC8");
    },
    Error,
    "EncodingError U+AAC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC9");
    },
    Error,
    "EncodingError U+AAC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAACA");
    },
    Error,
    "EncodingError U+AACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAACB");
    },
    Error,
    "EncodingError U+AACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAACC");
    },
    Error,
    "EncodingError U+AACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAACD");
    },
    Error,
    "EncodingError U+AACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAACE");
    },
    Error,
    "EncodingError U+AACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAACF");
    },
    Error,
    "EncodingError U+AACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD0");
    },
    Error,
    "EncodingError U+AAD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD1");
    },
    Error,
    "EncodingError U+AAD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD2");
    },
    Error,
    "EncodingError U+AAD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD3");
    },
    Error,
    "EncodingError U+AAD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD4");
    },
    Error,
    "EncodingError U+AAD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD5");
    },
    Error,
    "EncodingError U+AAD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD6");
    },
    Error,
    "EncodingError U+AAD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD7");
    },
    Error,
    "EncodingError U+AAD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD8");
    },
    Error,
    "EncodingError U+AAD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD9");
    },
    Error,
    "EncodingError U+AAD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAADA");
    },
    Error,
    "EncodingError U+AADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAADB");
    },
    Error,
    "EncodingError U+AADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAADC");
    },
    Error,
    "EncodingError U+AADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAADD");
    },
    Error,
    "EncodingError U+AADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAADE");
    },
    Error,
    "EncodingError U+AADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAADF");
    },
    Error,
    "EncodingError U+AADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE0");
    },
    Error,
    "EncodingError U+AAE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE1");
    },
    Error,
    "EncodingError U+AAE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE2");
    },
    Error,
    "EncodingError U+AAE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE3");
    },
    Error,
    "EncodingError U+AAE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE4");
    },
    Error,
    "EncodingError U+AAE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE5");
    },
    Error,
    "EncodingError U+AAE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE6");
    },
    Error,
    "EncodingError U+AAE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE7");
    },
    Error,
    "EncodingError U+AAE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE8");
    },
    Error,
    "EncodingError U+AAE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE9");
    },
    Error,
    "EncodingError U+AAE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAEA");
    },
    Error,
    "EncodingError U+AAEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAEB");
    },
    Error,
    "EncodingError U+AAEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAEC");
    },
    Error,
    "EncodingError U+AAEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAED");
    },
    Error,
    "EncodingError U+AAED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAEE");
    },
    Error,
    "EncodingError U+AAEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAEF");
    },
    Error,
    "EncodingError U+AAEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF0");
    },
    Error,
    "EncodingError U+AAF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF1");
    },
    Error,
    "EncodingError U+AAF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF2");
    },
    Error,
    "EncodingError U+AAF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF3");
    },
    Error,
    "EncodingError U+AAF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF4");
    },
    Error,
    "EncodingError U+AAF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF5");
    },
    Error,
    "EncodingError U+AAF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF6");
    },
    Error,
    "EncodingError U+AAF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF7");
    },
    Error,
    "EncodingError U+AAF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF8");
    },
    Error,
    "EncodingError U+AAF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF9");
    },
    Error,
    "EncodingError U+AAF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAFA");
    },
    Error,
    "EncodingError U+AAFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAFB");
    },
    Error,
    "EncodingError U+AAFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAFC");
    },
    Error,
    "EncodingError U+AAFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAFD");
    },
    Error,
    "EncodingError U+AAFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAFE");
    },
    Error,
    "EncodingError U+AAFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAFF");
    },
    Error,
    "EncodingError U+AAFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB00");
    },
    Error,
    "EncodingError U+AB00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB01");
    },
    Error,
    "EncodingError U+AB01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB02");
    },
    Error,
    "EncodingError U+AB02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB03");
    },
    Error,
    "EncodingError U+AB03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB04");
    },
    Error,
    "EncodingError U+AB04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB05");
    },
    Error,
    "EncodingError U+AB05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB06");
    },
    Error,
    "EncodingError U+AB06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB07");
    },
    Error,
    "EncodingError U+AB07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB08");
    },
    Error,
    "EncodingError U+AB08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB09");
    },
    Error,
    "EncodingError U+AB09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB0A");
    },
    Error,
    "EncodingError U+AB0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB0B");
    },
    Error,
    "EncodingError U+AB0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB0C");
    },
    Error,
    "EncodingError U+AB0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB0D");
    },
    Error,
    "EncodingError U+AB0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB0E");
    },
    Error,
    "EncodingError U+AB0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB0F");
    },
    Error,
    "EncodingError U+AB0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB10");
    },
    Error,
    "EncodingError U+AB10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB11");
    },
    Error,
    "EncodingError U+AB11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB12");
    },
    Error,
    "EncodingError U+AB12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB13");
    },
    Error,
    "EncodingError U+AB13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB14");
    },
    Error,
    "EncodingError U+AB14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB15");
    },
    Error,
    "EncodingError U+AB15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB16");
    },
    Error,
    "EncodingError U+AB16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB17");
    },
    Error,
    "EncodingError U+AB17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB18");
    },
    Error,
    "EncodingError U+AB18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB19");
    },
    Error,
    "EncodingError U+AB19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB1A");
    },
    Error,
    "EncodingError U+AB1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB1B");
    },
    Error,
    "EncodingError U+AB1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB1C");
    },
    Error,
    "EncodingError U+AB1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB1D");
    },
    Error,
    "EncodingError U+AB1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB1E");
    },
    Error,
    "EncodingError U+AB1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB1F");
    },
    Error,
    "EncodingError U+AB1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB20");
    },
    Error,
    "EncodingError U+AB20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB21");
    },
    Error,
    "EncodingError U+AB21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB22");
    },
    Error,
    "EncodingError U+AB22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB23");
    },
    Error,
    "EncodingError U+AB23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB24");
    },
    Error,
    "EncodingError U+AB24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB25");
    },
    Error,
    "EncodingError U+AB25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB26");
    },
    Error,
    "EncodingError U+AB26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB27");
    },
    Error,
    "EncodingError U+AB27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB28");
    },
    Error,
    "EncodingError U+AB28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB29");
    },
    Error,
    "EncodingError U+AB29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB2A");
    },
    Error,
    "EncodingError U+AB2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB2B");
    },
    Error,
    "EncodingError U+AB2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB2C");
    },
    Error,
    "EncodingError U+AB2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB2D");
    },
    Error,
    "EncodingError U+AB2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB2E");
    },
    Error,
    "EncodingError U+AB2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB2F");
    },
    Error,
    "EncodingError U+AB2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB30");
    },
    Error,
    "EncodingError U+AB30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB31");
    },
    Error,
    "EncodingError U+AB31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB32");
    },
    Error,
    "EncodingError U+AB32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB33");
    },
    Error,
    "EncodingError U+AB33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB34");
    },
    Error,
    "EncodingError U+AB34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB35");
    },
    Error,
    "EncodingError U+AB35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB36");
    },
    Error,
    "EncodingError U+AB36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB37");
    },
    Error,
    "EncodingError U+AB37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB38");
    },
    Error,
    "EncodingError U+AB38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB39");
    },
    Error,
    "EncodingError U+AB39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB3A");
    },
    Error,
    "EncodingError U+AB3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB3B");
    },
    Error,
    "EncodingError U+AB3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB3C");
    },
    Error,
    "EncodingError U+AB3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB3D");
    },
    Error,
    "EncodingError U+AB3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB3E");
    },
    Error,
    "EncodingError U+AB3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB3F");
    },
    Error,
    "EncodingError U+AB3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB40");
    },
    Error,
    "EncodingError U+AB40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB41");
    },
    Error,
    "EncodingError U+AB41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB42");
    },
    Error,
    "EncodingError U+AB42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB43");
    },
    Error,
    "EncodingError U+AB43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB44");
    },
    Error,
    "EncodingError U+AB44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB45");
    },
    Error,
    "EncodingError U+AB45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB46");
    },
    Error,
    "EncodingError U+AB46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB47");
    },
    Error,
    "EncodingError U+AB47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB48");
    },
    Error,
    "EncodingError U+AB48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB49");
    },
    Error,
    "EncodingError U+AB49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB4A");
    },
    Error,
    "EncodingError U+AB4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB4B");
    },
    Error,
    "EncodingError U+AB4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB4C");
    },
    Error,
    "EncodingError U+AB4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB4D");
    },
    Error,
    "EncodingError U+AB4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB4E");
    },
    Error,
    "EncodingError U+AB4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB4F");
    },
    Error,
    "EncodingError U+AB4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB50");
    },
    Error,
    "EncodingError U+AB50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB51");
    },
    Error,
    "EncodingError U+AB51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB52");
    },
    Error,
    "EncodingError U+AB52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB53");
    },
    Error,
    "EncodingError U+AB53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB54");
    },
    Error,
    "EncodingError U+AB54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB55");
    },
    Error,
    "EncodingError U+AB55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB56");
    },
    Error,
    "EncodingError U+AB56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB57");
    },
    Error,
    "EncodingError U+AB57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB58");
    },
    Error,
    "EncodingError U+AB58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB59");
    },
    Error,
    "EncodingError U+AB59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB5A");
    },
    Error,
    "EncodingError U+AB5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB5B");
    },
    Error,
    "EncodingError U+AB5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB5C");
    },
    Error,
    "EncodingError U+AB5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB5D");
    },
    Error,
    "EncodingError U+AB5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB5E");
    },
    Error,
    "EncodingError U+AB5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB5F");
    },
    Error,
    "EncodingError U+AB5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB60");
    },
    Error,
    "EncodingError U+AB60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB61");
    },
    Error,
    "EncodingError U+AB61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB62");
    },
    Error,
    "EncodingError U+AB62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB63");
    },
    Error,
    "EncodingError U+AB63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB64");
    },
    Error,
    "EncodingError U+AB64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB65");
    },
    Error,
    "EncodingError U+AB65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB66");
    },
    Error,
    "EncodingError U+AB66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB67");
    },
    Error,
    "EncodingError U+AB67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB68");
    },
    Error,
    "EncodingError U+AB68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB69");
    },
    Error,
    "EncodingError U+AB69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB6A");
    },
    Error,
    "EncodingError U+AB6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB6B");
    },
    Error,
    "EncodingError U+AB6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB6C");
    },
    Error,
    "EncodingError U+AB6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB6D");
    },
    Error,
    "EncodingError U+AB6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB6E");
    },
    Error,
    "EncodingError U+AB6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB6F");
    },
    Error,
    "EncodingError U+AB6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB70");
    },
    Error,
    "EncodingError U+AB70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB71");
    },
    Error,
    "EncodingError U+AB71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB72");
    },
    Error,
    "EncodingError U+AB72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB73");
    },
    Error,
    "EncodingError U+AB73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB74");
    },
    Error,
    "EncodingError U+AB74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB75");
    },
    Error,
    "EncodingError U+AB75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB76");
    },
    Error,
    "EncodingError U+AB76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB77");
    },
    Error,
    "EncodingError U+AB77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB78");
    },
    Error,
    "EncodingError U+AB78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB79");
    },
    Error,
    "EncodingError U+AB79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB7A");
    },
    Error,
    "EncodingError U+AB7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB7B");
    },
    Error,
    "EncodingError U+AB7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB7C");
    },
    Error,
    "EncodingError U+AB7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB7D");
    },
    Error,
    "EncodingError U+AB7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB7E");
    },
    Error,
    "EncodingError U+AB7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB7F");
    },
    Error,
    "EncodingError U+AB7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB80");
    },
    Error,
    "EncodingError U+AB80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB81");
    },
    Error,
    "EncodingError U+AB81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB82");
    },
    Error,
    "EncodingError U+AB82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB83");
    },
    Error,
    "EncodingError U+AB83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB84");
    },
    Error,
    "EncodingError U+AB84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB85");
    },
    Error,
    "EncodingError U+AB85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB86");
    },
    Error,
    "EncodingError U+AB86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB87");
    },
    Error,
    "EncodingError U+AB87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB88");
    },
    Error,
    "EncodingError U+AB88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB89");
    },
    Error,
    "EncodingError U+AB89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB8A");
    },
    Error,
    "EncodingError U+AB8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB8B");
    },
    Error,
    "EncodingError U+AB8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB8C");
    },
    Error,
    "EncodingError U+AB8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB8D");
    },
    Error,
    "EncodingError U+AB8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB8E");
    },
    Error,
    "EncodingError U+AB8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB8F");
    },
    Error,
    "EncodingError U+AB8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB90");
    },
    Error,
    "EncodingError U+AB90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB91");
    },
    Error,
    "EncodingError U+AB91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB92");
    },
    Error,
    "EncodingError U+AB92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB93");
    },
    Error,
    "EncodingError U+AB93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB94");
    },
    Error,
    "EncodingError U+AB94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB95");
    },
    Error,
    "EncodingError U+AB95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB96");
    },
    Error,
    "EncodingError U+AB96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB97");
    },
    Error,
    "EncodingError U+AB97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB98");
    },
    Error,
    "EncodingError U+AB98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB99");
    },
    Error,
    "EncodingError U+AB99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB9A");
    },
    Error,
    "EncodingError U+AB9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB9B");
    },
    Error,
    "EncodingError U+AB9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB9C");
    },
    Error,
    "EncodingError U+AB9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB9D");
    },
    Error,
    "EncodingError U+AB9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB9E");
    },
    Error,
    "EncodingError U+AB9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB9F");
    },
    Error,
    "EncodingError U+AB9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA0");
    },
    Error,
    "EncodingError U+ABA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA1");
    },
    Error,
    "EncodingError U+ABA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA2");
    },
    Error,
    "EncodingError U+ABA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA3");
    },
    Error,
    "EncodingError U+ABA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA4");
    },
    Error,
    "EncodingError U+ABA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA5");
    },
    Error,
    "EncodingError U+ABA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA6");
    },
    Error,
    "EncodingError U+ABA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA7");
    },
    Error,
    "EncodingError U+ABA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA8");
    },
    Error,
    "EncodingError U+ABA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA9");
    },
    Error,
    "EncodingError U+ABA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABAA");
    },
    Error,
    "EncodingError U+ABAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABAB");
    },
    Error,
    "EncodingError U+ABAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABAC");
    },
    Error,
    "EncodingError U+ABAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABAD");
    },
    Error,
    "EncodingError U+ABAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABAE");
    },
    Error,
    "EncodingError U+ABAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABAF");
    },
    Error,
    "EncodingError U+ABAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB0");
    },
    Error,
    "EncodingError U+ABB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB1");
    },
    Error,
    "EncodingError U+ABB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB2");
    },
    Error,
    "EncodingError U+ABB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB3");
    },
    Error,
    "EncodingError U+ABB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB4");
    },
    Error,
    "EncodingError U+ABB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB5");
    },
    Error,
    "EncodingError U+ABB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB6");
    },
    Error,
    "EncodingError U+ABB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB7");
    },
    Error,
    "EncodingError U+ABB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB8");
    },
    Error,
    "EncodingError U+ABB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB9");
    },
    Error,
    "EncodingError U+ABB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABBA");
    },
    Error,
    "EncodingError U+ABBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABBB");
    },
    Error,
    "EncodingError U+ABBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABBC");
    },
    Error,
    "EncodingError U+ABBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABBD");
    },
    Error,
    "EncodingError U+ABBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABBE");
    },
    Error,
    "EncodingError U+ABBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABBF");
    },
    Error,
    "EncodingError U+ABBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC0");
    },
    Error,
    "EncodingError U+ABC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC1");
    },
    Error,
    "EncodingError U+ABC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC2");
    },
    Error,
    "EncodingError U+ABC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC3");
    },
    Error,
    "EncodingError U+ABC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC4");
    },
    Error,
    "EncodingError U+ABC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC5");
    },
    Error,
    "EncodingError U+ABC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC6");
    },
    Error,
    "EncodingError U+ABC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC7");
    },
    Error,
    "EncodingError U+ABC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC8");
    },
    Error,
    "EncodingError U+ABC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC9");
    },
    Error,
    "EncodingError U+ABC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABCA");
    },
    Error,
    "EncodingError U+ABCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABCB");
    },
    Error,
    "EncodingError U+ABCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABCC");
    },
    Error,
    "EncodingError U+ABCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABCD");
    },
    Error,
    "EncodingError U+ABCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABCE");
    },
    Error,
    "EncodingError U+ABCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABCF");
    },
    Error,
    "EncodingError U+ABCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD0");
    },
    Error,
    "EncodingError U+ABD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD1");
    },
    Error,
    "EncodingError U+ABD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD2");
    },
    Error,
    "EncodingError U+ABD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD3");
    },
    Error,
    "EncodingError U+ABD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD4");
    },
    Error,
    "EncodingError U+ABD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD5");
    },
    Error,
    "EncodingError U+ABD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD6");
    },
    Error,
    "EncodingError U+ABD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD7");
    },
    Error,
    "EncodingError U+ABD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD8");
    },
    Error,
    "EncodingError U+ABD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD9");
    },
    Error,
    "EncodingError U+ABD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABDA");
    },
    Error,
    "EncodingError U+ABDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABDB");
    },
    Error,
    "EncodingError U+ABDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABDC");
    },
    Error,
    "EncodingError U+ABDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABDD");
    },
    Error,
    "EncodingError U+ABDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABDE");
    },
    Error,
    "EncodingError U+ABDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABDF");
    },
    Error,
    "EncodingError U+ABDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE0");
    },
    Error,
    "EncodingError U+ABE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE1");
    },
    Error,
    "EncodingError U+ABE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE2");
    },
    Error,
    "EncodingError U+ABE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE3");
    },
    Error,
    "EncodingError U+ABE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE4");
    },
    Error,
    "EncodingError U+ABE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE5");
    },
    Error,
    "EncodingError U+ABE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE6");
    },
    Error,
    "EncodingError U+ABE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE7");
    },
    Error,
    "EncodingError U+ABE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE8");
    },
    Error,
    "EncodingError U+ABE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE9");
    },
    Error,
    "EncodingError U+ABE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABEA");
    },
    Error,
    "EncodingError U+ABEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABEB");
    },
    Error,
    "EncodingError U+ABEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABEC");
    },
    Error,
    "EncodingError U+ABEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABED");
    },
    Error,
    "EncodingError U+ABED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABEE");
    },
    Error,
    "EncodingError U+ABEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABEF");
    },
    Error,
    "EncodingError U+ABEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF0");
    },
    Error,
    "EncodingError U+ABF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF1");
    },
    Error,
    "EncodingError U+ABF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF2");
    },
    Error,
    "EncodingError U+ABF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF3");
    },
    Error,
    "EncodingError U+ABF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF4");
    },
    Error,
    "EncodingError U+ABF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF5");
    },
    Error,
    "EncodingError U+ABF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF6");
    },
    Error,
    "EncodingError U+ABF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF7");
    },
    Error,
    "EncodingError U+ABF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF8");
    },
    Error,
    "EncodingError U+ABF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF9");
    },
    Error,
    "EncodingError U+ABF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABFA");
    },
    Error,
    "EncodingError U+ABFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABFB");
    },
    Error,
    "EncodingError U+ABFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABFC");
    },
    Error,
    "EncodingError U+ABFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABFD");
    },
    Error,
    "EncodingError U+ABFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABFE");
    },
    Error,
    "EncodingError U+ABFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABFF");
    },
    Error,
    "EncodingError U+ABFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC00");
    },
    Error,
    "EncodingError U+AC00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC01");
    },
    Error,
    "EncodingError U+AC01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC02");
    },
    Error,
    "EncodingError U+AC02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC03");
    },
    Error,
    "EncodingError U+AC03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC04");
    },
    Error,
    "EncodingError U+AC04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC05");
    },
    Error,
    "EncodingError U+AC05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC06");
    },
    Error,
    "EncodingError U+AC06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC07");
    },
    Error,
    "EncodingError U+AC07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC08");
    },
    Error,
    "EncodingError U+AC08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC09");
    },
    Error,
    "EncodingError U+AC09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC0A");
    },
    Error,
    "EncodingError U+AC0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC0B");
    },
    Error,
    "EncodingError U+AC0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC0C");
    },
    Error,
    "EncodingError U+AC0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC0D");
    },
    Error,
    "EncodingError U+AC0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC0E");
    },
    Error,
    "EncodingError U+AC0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC0F");
    },
    Error,
    "EncodingError U+AC0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC10");
    },
    Error,
    "EncodingError U+AC10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC11");
    },
    Error,
    "EncodingError U+AC11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC12");
    },
    Error,
    "EncodingError U+AC12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC13");
    },
    Error,
    "EncodingError U+AC13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC14");
    },
    Error,
    "EncodingError U+AC14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC15");
    },
    Error,
    "EncodingError U+AC15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC16");
    },
    Error,
    "EncodingError U+AC16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC17");
    },
    Error,
    "EncodingError U+AC17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC18");
    },
    Error,
    "EncodingError U+AC18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC19");
    },
    Error,
    "EncodingError U+AC19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC1A");
    },
    Error,
    "EncodingError U+AC1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC1B");
    },
    Error,
    "EncodingError U+AC1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC1C");
    },
    Error,
    "EncodingError U+AC1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC1D");
    },
    Error,
    "EncodingError U+AC1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC1E");
    },
    Error,
    "EncodingError U+AC1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC1F");
    },
    Error,
    "EncodingError U+AC1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC20");
    },
    Error,
    "EncodingError U+AC20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC21");
    },
    Error,
    "EncodingError U+AC21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC22");
    },
    Error,
    "EncodingError U+AC22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC23");
    },
    Error,
    "EncodingError U+AC23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC24");
    },
    Error,
    "EncodingError U+AC24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC25");
    },
    Error,
    "EncodingError U+AC25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC26");
    },
    Error,
    "EncodingError U+AC26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC27");
    },
    Error,
    "EncodingError U+AC27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC28");
    },
    Error,
    "EncodingError U+AC28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC29");
    },
    Error,
    "EncodingError U+AC29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC2A");
    },
    Error,
    "EncodingError U+AC2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC2B");
    },
    Error,
    "EncodingError U+AC2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC2C");
    },
    Error,
    "EncodingError U+AC2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC2D");
    },
    Error,
    "EncodingError U+AC2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC2E");
    },
    Error,
    "EncodingError U+AC2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC2F");
    },
    Error,
    "EncodingError U+AC2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC30");
    },
    Error,
    "EncodingError U+AC30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC31");
    },
    Error,
    "EncodingError U+AC31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC32");
    },
    Error,
    "EncodingError U+AC32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC33");
    },
    Error,
    "EncodingError U+AC33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC34");
    },
    Error,
    "EncodingError U+AC34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC35");
    },
    Error,
    "EncodingError U+AC35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC36");
    },
    Error,
    "EncodingError U+AC36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC37");
    },
    Error,
    "EncodingError U+AC37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC38");
    },
    Error,
    "EncodingError U+AC38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC39");
    },
    Error,
    "EncodingError U+AC39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC3A");
    },
    Error,
    "EncodingError U+AC3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC3B");
    },
    Error,
    "EncodingError U+AC3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC3C");
    },
    Error,
    "EncodingError U+AC3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC3D");
    },
    Error,
    "EncodingError U+AC3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC3E");
    },
    Error,
    "EncodingError U+AC3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC3F");
    },
    Error,
    "EncodingError U+AC3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC40");
    },
    Error,
    "EncodingError U+AC40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC41");
    },
    Error,
    "EncodingError U+AC41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC42");
    },
    Error,
    "EncodingError U+AC42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC43");
    },
    Error,
    "EncodingError U+AC43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC44");
    },
    Error,
    "EncodingError U+AC44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC45");
    },
    Error,
    "EncodingError U+AC45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC46");
    },
    Error,
    "EncodingError U+AC46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC47");
    },
    Error,
    "EncodingError U+AC47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC48");
    },
    Error,
    "EncodingError U+AC48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC49");
    },
    Error,
    "EncodingError U+AC49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC4A");
    },
    Error,
    "EncodingError U+AC4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC4B");
    },
    Error,
    "EncodingError U+AC4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC4C");
    },
    Error,
    "EncodingError U+AC4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC4D");
    },
    Error,
    "EncodingError U+AC4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC4E");
    },
    Error,
    "EncodingError U+AC4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC4F");
    },
    Error,
    "EncodingError U+AC4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC50");
    },
    Error,
    "EncodingError U+AC50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC51");
    },
    Error,
    "EncodingError U+AC51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC52");
    },
    Error,
    "EncodingError U+AC52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC53");
    },
    Error,
    "EncodingError U+AC53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC54");
    },
    Error,
    "EncodingError U+AC54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC55");
    },
    Error,
    "EncodingError U+AC55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC56");
    },
    Error,
    "EncodingError U+AC56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC57");
    },
    Error,
    "EncodingError U+AC57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC58");
    },
    Error,
    "EncodingError U+AC58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC59");
    },
    Error,
    "EncodingError U+AC59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC5A");
    },
    Error,
    "EncodingError U+AC5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC5B");
    },
    Error,
    "EncodingError U+AC5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC5C");
    },
    Error,
    "EncodingError U+AC5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC5D");
    },
    Error,
    "EncodingError U+AC5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC5E");
    },
    Error,
    "EncodingError U+AC5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC5F");
    },
    Error,
    "EncodingError U+AC5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC60");
    },
    Error,
    "EncodingError U+AC60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC61");
    },
    Error,
    "EncodingError U+AC61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC62");
    },
    Error,
    "EncodingError U+AC62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC63");
    },
    Error,
    "EncodingError U+AC63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC64");
    },
    Error,
    "EncodingError U+AC64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC65");
    },
    Error,
    "EncodingError U+AC65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC66");
    },
    Error,
    "EncodingError U+AC66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC67");
    },
    Error,
    "EncodingError U+AC67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC68");
    },
    Error,
    "EncodingError U+AC68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC69");
    },
    Error,
    "EncodingError U+AC69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC6A");
    },
    Error,
    "EncodingError U+AC6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC6B");
    },
    Error,
    "EncodingError U+AC6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC6C");
    },
    Error,
    "EncodingError U+AC6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC6D");
    },
    Error,
    "EncodingError U+AC6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC6E");
    },
    Error,
    "EncodingError U+AC6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC6F");
    },
    Error,
    "EncodingError U+AC6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC70");
    },
    Error,
    "EncodingError U+AC70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC71");
    },
    Error,
    "EncodingError U+AC71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC72");
    },
    Error,
    "EncodingError U+AC72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC73");
    },
    Error,
    "EncodingError U+AC73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC74");
    },
    Error,
    "EncodingError U+AC74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC75");
    },
    Error,
    "EncodingError U+AC75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC76");
    },
    Error,
    "EncodingError U+AC76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC77");
    },
    Error,
    "EncodingError U+AC77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC78");
    },
    Error,
    "EncodingError U+AC78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC79");
    },
    Error,
    "EncodingError U+AC79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC7A");
    },
    Error,
    "EncodingError U+AC7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC7B");
    },
    Error,
    "EncodingError U+AC7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC7C");
    },
    Error,
    "EncodingError U+AC7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC7D");
    },
    Error,
    "EncodingError U+AC7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC7E");
    },
    Error,
    "EncodingError U+AC7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC7F");
    },
    Error,
    "EncodingError U+AC7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC80");
    },
    Error,
    "EncodingError U+AC80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC81");
    },
    Error,
    "EncodingError U+AC81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC82");
    },
    Error,
    "EncodingError U+AC82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC83");
    },
    Error,
    "EncodingError U+AC83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC84");
    },
    Error,
    "EncodingError U+AC84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC85");
    },
    Error,
    "EncodingError U+AC85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC86");
    },
    Error,
    "EncodingError U+AC86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC87");
    },
    Error,
    "EncodingError U+AC87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC88");
    },
    Error,
    "EncodingError U+AC88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC89");
    },
    Error,
    "EncodingError U+AC89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC8A");
    },
    Error,
    "EncodingError U+AC8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC8B");
    },
    Error,
    "EncodingError U+AC8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC8C");
    },
    Error,
    "EncodingError U+AC8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC8D");
    },
    Error,
    "EncodingError U+AC8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC8E");
    },
    Error,
    "EncodingError U+AC8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC8F");
    },
    Error,
    "EncodingError U+AC8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC90");
    },
    Error,
    "EncodingError U+AC90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC91");
    },
    Error,
    "EncodingError U+AC91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC92");
    },
    Error,
    "EncodingError U+AC92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC93");
    },
    Error,
    "EncodingError U+AC93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC94");
    },
    Error,
    "EncodingError U+AC94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC95");
    },
    Error,
    "EncodingError U+AC95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC96");
    },
    Error,
    "EncodingError U+AC96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC97");
    },
    Error,
    "EncodingError U+AC97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC98");
    },
    Error,
    "EncodingError U+AC98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC99");
    },
    Error,
    "EncodingError U+AC99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC9A");
    },
    Error,
    "EncodingError U+AC9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC9B");
    },
    Error,
    "EncodingError U+AC9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC9C");
    },
    Error,
    "EncodingError U+AC9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC9D");
    },
    Error,
    "EncodingError U+AC9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC9E");
    },
    Error,
    "EncodingError U+AC9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC9F");
    },
    Error,
    "EncodingError U+AC9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA0");
    },
    Error,
    "EncodingError U+ACA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA1");
    },
    Error,
    "EncodingError U+ACA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA2");
    },
    Error,
    "EncodingError U+ACA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA3");
    },
    Error,
    "EncodingError U+ACA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA4");
    },
    Error,
    "EncodingError U+ACA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA5");
    },
    Error,
    "EncodingError U+ACA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA6");
    },
    Error,
    "EncodingError U+ACA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA7");
    },
    Error,
    "EncodingError U+ACA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA8");
    },
    Error,
    "EncodingError U+ACA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA9");
    },
    Error,
    "EncodingError U+ACA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACAA");
    },
    Error,
    "EncodingError U+ACAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACAB");
    },
    Error,
    "EncodingError U+ACAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACAC");
    },
    Error,
    "EncodingError U+ACAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACAD");
    },
    Error,
    "EncodingError U+ACAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACAE");
    },
    Error,
    "EncodingError U+ACAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACAF");
    },
    Error,
    "EncodingError U+ACAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB0");
    },
    Error,
    "EncodingError U+ACB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB1");
    },
    Error,
    "EncodingError U+ACB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB2");
    },
    Error,
    "EncodingError U+ACB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB3");
    },
    Error,
    "EncodingError U+ACB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB4");
    },
    Error,
    "EncodingError U+ACB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB5");
    },
    Error,
    "EncodingError U+ACB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB6");
    },
    Error,
    "EncodingError U+ACB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB7");
    },
    Error,
    "EncodingError U+ACB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB8");
    },
    Error,
    "EncodingError U+ACB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB9");
    },
    Error,
    "EncodingError U+ACB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACBA");
    },
    Error,
    "EncodingError U+ACBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACBB");
    },
    Error,
    "EncodingError U+ACBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACBC");
    },
    Error,
    "EncodingError U+ACBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACBD");
    },
    Error,
    "EncodingError U+ACBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACBE");
    },
    Error,
    "EncodingError U+ACBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACBF");
    },
    Error,
    "EncodingError U+ACBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC0");
    },
    Error,
    "EncodingError U+ACC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC1");
    },
    Error,
    "EncodingError U+ACC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC2");
    },
    Error,
    "EncodingError U+ACC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC3");
    },
    Error,
    "EncodingError U+ACC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC4");
    },
    Error,
    "EncodingError U+ACC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC5");
    },
    Error,
    "EncodingError U+ACC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC6");
    },
    Error,
    "EncodingError U+ACC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC7");
    },
    Error,
    "EncodingError U+ACC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC8");
    },
    Error,
    "EncodingError U+ACC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC9");
    },
    Error,
    "EncodingError U+ACC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACCA");
    },
    Error,
    "EncodingError U+ACCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACCB");
    },
    Error,
    "EncodingError U+ACCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACCC");
    },
    Error,
    "EncodingError U+ACCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACCD");
    },
    Error,
    "EncodingError U+ACCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACCE");
    },
    Error,
    "EncodingError U+ACCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACCF");
    },
    Error,
    "EncodingError U+ACCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD0");
    },
    Error,
    "EncodingError U+ACD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD1");
    },
    Error,
    "EncodingError U+ACD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD2");
    },
    Error,
    "EncodingError U+ACD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD3");
    },
    Error,
    "EncodingError U+ACD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD4");
    },
    Error,
    "EncodingError U+ACD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD5");
    },
    Error,
    "EncodingError U+ACD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD6");
    },
    Error,
    "EncodingError U+ACD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD7");
    },
    Error,
    "EncodingError U+ACD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD8");
    },
    Error,
    "EncodingError U+ACD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD9");
    },
    Error,
    "EncodingError U+ACD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACDA");
    },
    Error,
    "EncodingError U+ACDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACDB");
    },
    Error,
    "EncodingError U+ACDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACDC");
    },
    Error,
    "EncodingError U+ACDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACDD");
    },
    Error,
    "EncodingError U+ACDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACDE");
    },
    Error,
    "EncodingError U+ACDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACDF");
    },
    Error,
    "EncodingError U+ACDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE0");
    },
    Error,
    "EncodingError U+ACE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE1");
    },
    Error,
    "EncodingError U+ACE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE2");
    },
    Error,
    "EncodingError U+ACE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE3");
    },
    Error,
    "EncodingError U+ACE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE4");
    },
    Error,
    "EncodingError U+ACE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE5");
    },
    Error,
    "EncodingError U+ACE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE6");
    },
    Error,
    "EncodingError U+ACE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE7");
    },
    Error,
    "EncodingError U+ACE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE8");
    },
    Error,
    "EncodingError U+ACE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE9");
    },
    Error,
    "EncodingError U+ACE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACEA");
    },
    Error,
    "EncodingError U+ACEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACEB");
    },
    Error,
    "EncodingError U+ACEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACEC");
    },
    Error,
    "EncodingError U+ACEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACED");
    },
    Error,
    "EncodingError U+ACED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACEE");
    },
    Error,
    "EncodingError U+ACEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACEF");
    },
    Error,
    "EncodingError U+ACEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF0");
    },
    Error,
    "EncodingError U+ACF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF1");
    },
    Error,
    "EncodingError U+ACF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF2");
    },
    Error,
    "EncodingError U+ACF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF3");
    },
    Error,
    "EncodingError U+ACF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF4");
    },
    Error,
    "EncodingError U+ACF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF5");
    },
    Error,
    "EncodingError U+ACF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF6");
    },
    Error,
    "EncodingError U+ACF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF7");
    },
    Error,
    "EncodingError U+ACF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF8");
    },
    Error,
    "EncodingError U+ACF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF9");
    },
    Error,
    "EncodingError U+ACF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACFA");
    },
    Error,
    "EncodingError U+ACFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACFB");
    },
    Error,
    "EncodingError U+ACFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACFC");
    },
    Error,
    "EncodingError U+ACFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACFD");
    },
    Error,
    "EncodingError U+ACFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACFE");
    },
    Error,
    "EncodingError U+ACFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACFF");
    },
    Error,
    "EncodingError U+ACFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD00");
    },
    Error,
    "EncodingError U+AD00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD01");
    },
    Error,
    "EncodingError U+AD01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD02");
    },
    Error,
    "EncodingError U+AD02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD03");
    },
    Error,
    "EncodingError U+AD03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD04");
    },
    Error,
    "EncodingError U+AD04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD05");
    },
    Error,
    "EncodingError U+AD05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD06");
    },
    Error,
    "EncodingError U+AD06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD07");
    },
    Error,
    "EncodingError U+AD07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD08");
    },
    Error,
    "EncodingError U+AD08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD09");
    },
    Error,
    "EncodingError U+AD09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD0A");
    },
    Error,
    "EncodingError U+AD0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD0B");
    },
    Error,
    "EncodingError U+AD0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD0C");
    },
    Error,
    "EncodingError U+AD0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD0D");
    },
    Error,
    "EncodingError U+AD0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD0E");
    },
    Error,
    "EncodingError U+AD0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD0F");
    },
    Error,
    "EncodingError U+AD0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD10");
    },
    Error,
    "EncodingError U+AD10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD11");
    },
    Error,
    "EncodingError U+AD11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD12");
    },
    Error,
    "EncodingError U+AD12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD13");
    },
    Error,
    "EncodingError U+AD13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD14");
    },
    Error,
    "EncodingError U+AD14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD15");
    },
    Error,
    "EncodingError U+AD15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD16");
    },
    Error,
    "EncodingError U+AD16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD17");
    },
    Error,
    "EncodingError U+AD17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD18");
    },
    Error,
    "EncodingError U+AD18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD19");
    },
    Error,
    "EncodingError U+AD19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD1A");
    },
    Error,
    "EncodingError U+AD1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD1B");
    },
    Error,
    "EncodingError U+AD1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD1C");
    },
    Error,
    "EncodingError U+AD1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD1D");
    },
    Error,
    "EncodingError U+AD1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD1E");
    },
    Error,
    "EncodingError U+AD1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD1F");
    },
    Error,
    "EncodingError U+AD1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD20");
    },
    Error,
    "EncodingError U+AD20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD21");
    },
    Error,
    "EncodingError U+AD21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD22");
    },
    Error,
    "EncodingError U+AD22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD23");
    },
    Error,
    "EncodingError U+AD23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD24");
    },
    Error,
    "EncodingError U+AD24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD25");
    },
    Error,
    "EncodingError U+AD25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD26");
    },
    Error,
    "EncodingError U+AD26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD27");
    },
    Error,
    "EncodingError U+AD27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD28");
    },
    Error,
    "EncodingError U+AD28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD29");
    },
    Error,
    "EncodingError U+AD29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD2A");
    },
    Error,
    "EncodingError U+AD2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD2B");
    },
    Error,
    "EncodingError U+AD2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD2C");
    },
    Error,
    "EncodingError U+AD2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD2D");
    },
    Error,
    "EncodingError U+AD2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD2E");
    },
    Error,
    "EncodingError U+AD2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD2F");
    },
    Error,
    "EncodingError U+AD2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD30");
    },
    Error,
    "EncodingError U+AD30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD31");
    },
    Error,
    "EncodingError U+AD31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD32");
    },
    Error,
    "EncodingError U+AD32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD33");
    },
    Error,
    "EncodingError U+AD33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD34");
    },
    Error,
    "EncodingError U+AD34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD35");
    },
    Error,
    "EncodingError U+AD35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD36");
    },
    Error,
    "EncodingError U+AD36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD37");
    },
    Error,
    "EncodingError U+AD37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD38");
    },
    Error,
    "EncodingError U+AD38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD39");
    },
    Error,
    "EncodingError U+AD39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD3A");
    },
    Error,
    "EncodingError U+AD3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD3B");
    },
    Error,
    "EncodingError U+AD3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD3C");
    },
    Error,
    "EncodingError U+AD3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD3D");
    },
    Error,
    "EncodingError U+AD3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD3E");
    },
    Error,
    "EncodingError U+AD3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD3F");
    },
    Error,
    "EncodingError U+AD3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD40");
    },
    Error,
    "EncodingError U+AD40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD41");
    },
    Error,
    "EncodingError U+AD41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD42");
    },
    Error,
    "EncodingError U+AD42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD43");
    },
    Error,
    "EncodingError U+AD43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD44");
    },
    Error,
    "EncodingError U+AD44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD45");
    },
    Error,
    "EncodingError U+AD45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD46");
    },
    Error,
    "EncodingError U+AD46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD47");
    },
    Error,
    "EncodingError U+AD47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD48");
    },
    Error,
    "EncodingError U+AD48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD49");
    },
    Error,
    "EncodingError U+AD49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD4A");
    },
    Error,
    "EncodingError U+AD4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD4B");
    },
    Error,
    "EncodingError U+AD4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD4C");
    },
    Error,
    "EncodingError U+AD4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD4D");
    },
    Error,
    "EncodingError U+AD4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD4E");
    },
    Error,
    "EncodingError U+AD4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD4F");
    },
    Error,
    "EncodingError U+AD4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD50");
    },
    Error,
    "EncodingError U+AD50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD51");
    },
    Error,
    "EncodingError U+AD51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD52");
    },
    Error,
    "EncodingError U+AD52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD53");
    },
    Error,
    "EncodingError U+AD53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD54");
    },
    Error,
    "EncodingError U+AD54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD55");
    },
    Error,
    "EncodingError U+AD55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD56");
    },
    Error,
    "EncodingError U+AD56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD57");
    },
    Error,
    "EncodingError U+AD57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD58");
    },
    Error,
    "EncodingError U+AD58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD59");
    },
    Error,
    "EncodingError U+AD59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD5A");
    },
    Error,
    "EncodingError U+AD5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD5B");
    },
    Error,
    "EncodingError U+AD5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD5C");
    },
    Error,
    "EncodingError U+AD5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD5D");
    },
    Error,
    "EncodingError U+AD5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD5E");
    },
    Error,
    "EncodingError U+AD5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD5F");
    },
    Error,
    "EncodingError U+AD5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD60");
    },
    Error,
    "EncodingError U+AD60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD61");
    },
    Error,
    "EncodingError U+AD61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD62");
    },
    Error,
    "EncodingError U+AD62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD63");
    },
    Error,
    "EncodingError U+AD63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD64");
    },
    Error,
    "EncodingError U+AD64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD65");
    },
    Error,
    "EncodingError U+AD65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD66");
    },
    Error,
    "EncodingError U+AD66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD67");
    },
    Error,
    "EncodingError U+AD67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD68");
    },
    Error,
    "EncodingError U+AD68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD69");
    },
    Error,
    "EncodingError U+AD69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD6A");
    },
    Error,
    "EncodingError U+AD6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD6B");
    },
    Error,
    "EncodingError U+AD6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD6C");
    },
    Error,
    "EncodingError U+AD6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD6D");
    },
    Error,
    "EncodingError U+AD6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD6E");
    },
    Error,
    "EncodingError U+AD6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD6F");
    },
    Error,
    "EncodingError U+AD6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD70");
    },
    Error,
    "EncodingError U+AD70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD71");
    },
    Error,
    "EncodingError U+AD71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD72");
    },
    Error,
    "EncodingError U+AD72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD73");
    },
    Error,
    "EncodingError U+AD73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD74");
    },
    Error,
    "EncodingError U+AD74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD75");
    },
    Error,
    "EncodingError U+AD75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD76");
    },
    Error,
    "EncodingError U+AD76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD77");
    },
    Error,
    "EncodingError U+AD77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD78");
    },
    Error,
    "EncodingError U+AD78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD79");
    },
    Error,
    "EncodingError U+AD79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD7A");
    },
    Error,
    "EncodingError U+AD7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD7B");
    },
    Error,
    "EncodingError U+AD7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD7C");
    },
    Error,
    "EncodingError U+AD7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD7D");
    },
    Error,
    "EncodingError U+AD7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD7E");
    },
    Error,
    "EncodingError U+AD7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD7F");
    },
    Error,
    "EncodingError U+AD7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD80");
    },
    Error,
    "EncodingError U+AD80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD81");
    },
    Error,
    "EncodingError U+AD81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD82");
    },
    Error,
    "EncodingError U+AD82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD83");
    },
    Error,
    "EncodingError U+AD83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD84");
    },
    Error,
    "EncodingError U+AD84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD85");
    },
    Error,
    "EncodingError U+AD85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD86");
    },
    Error,
    "EncodingError U+AD86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD87");
    },
    Error,
    "EncodingError U+AD87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD88");
    },
    Error,
    "EncodingError U+AD88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD89");
    },
    Error,
    "EncodingError U+AD89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD8A");
    },
    Error,
    "EncodingError U+AD8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD8B");
    },
    Error,
    "EncodingError U+AD8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD8C");
    },
    Error,
    "EncodingError U+AD8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD8D");
    },
    Error,
    "EncodingError U+AD8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD8E");
    },
    Error,
    "EncodingError U+AD8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD8F");
    },
    Error,
    "EncodingError U+AD8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD90");
    },
    Error,
    "EncodingError U+AD90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD91");
    },
    Error,
    "EncodingError U+AD91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD92");
    },
    Error,
    "EncodingError U+AD92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD93");
    },
    Error,
    "EncodingError U+AD93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD94");
    },
    Error,
    "EncodingError U+AD94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD95");
    },
    Error,
    "EncodingError U+AD95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD96");
    },
    Error,
    "EncodingError U+AD96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD97");
    },
    Error,
    "EncodingError U+AD97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD98");
    },
    Error,
    "EncodingError U+AD98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD99");
    },
    Error,
    "EncodingError U+AD99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD9A");
    },
    Error,
    "EncodingError U+AD9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD9B");
    },
    Error,
    "EncodingError U+AD9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD9C");
    },
    Error,
    "EncodingError U+AD9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD9D");
    },
    Error,
    "EncodingError U+AD9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD9E");
    },
    Error,
    "EncodingError U+AD9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD9F");
    },
    Error,
    "EncodingError U+AD9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA0");
    },
    Error,
    "EncodingError U+ADA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA1");
    },
    Error,
    "EncodingError U+ADA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA2");
    },
    Error,
    "EncodingError U+ADA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA3");
    },
    Error,
    "EncodingError U+ADA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA4");
    },
    Error,
    "EncodingError U+ADA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA5");
    },
    Error,
    "EncodingError U+ADA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA6");
    },
    Error,
    "EncodingError U+ADA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA7");
    },
    Error,
    "EncodingError U+ADA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA8");
    },
    Error,
    "EncodingError U+ADA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA9");
    },
    Error,
    "EncodingError U+ADA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADAA");
    },
    Error,
    "EncodingError U+ADAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADAB");
    },
    Error,
    "EncodingError U+ADAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADAC");
    },
    Error,
    "EncodingError U+ADAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADAD");
    },
    Error,
    "EncodingError U+ADAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADAE");
    },
    Error,
    "EncodingError U+ADAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADAF");
    },
    Error,
    "EncodingError U+ADAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB0");
    },
    Error,
    "EncodingError U+ADB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB1");
    },
    Error,
    "EncodingError U+ADB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB2");
    },
    Error,
    "EncodingError U+ADB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB3");
    },
    Error,
    "EncodingError U+ADB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB4");
    },
    Error,
    "EncodingError U+ADB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB5");
    },
    Error,
    "EncodingError U+ADB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB6");
    },
    Error,
    "EncodingError U+ADB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB7");
    },
    Error,
    "EncodingError U+ADB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB8");
    },
    Error,
    "EncodingError U+ADB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB9");
    },
    Error,
    "EncodingError U+ADB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADBA");
    },
    Error,
    "EncodingError U+ADBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADBB");
    },
    Error,
    "EncodingError U+ADBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADBC");
    },
    Error,
    "EncodingError U+ADBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADBD");
    },
    Error,
    "EncodingError U+ADBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADBE");
    },
    Error,
    "EncodingError U+ADBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADBF");
    },
    Error,
    "EncodingError U+ADBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC0");
    },
    Error,
    "EncodingError U+ADC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC1");
    },
    Error,
    "EncodingError U+ADC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC2");
    },
    Error,
    "EncodingError U+ADC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC3");
    },
    Error,
    "EncodingError U+ADC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC4");
    },
    Error,
    "EncodingError U+ADC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC5");
    },
    Error,
    "EncodingError U+ADC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC6");
    },
    Error,
    "EncodingError U+ADC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC7");
    },
    Error,
    "EncodingError U+ADC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC8");
    },
    Error,
    "EncodingError U+ADC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC9");
    },
    Error,
    "EncodingError U+ADC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADCA");
    },
    Error,
    "EncodingError U+ADCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADCB");
    },
    Error,
    "EncodingError U+ADCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADCC");
    },
    Error,
    "EncodingError U+ADCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADCD");
    },
    Error,
    "EncodingError U+ADCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADCE");
    },
    Error,
    "EncodingError U+ADCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADCF");
    },
    Error,
    "EncodingError U+ADCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD0");
    },
    Error,
    "EncodingError U+ADD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD1");
    },
    Error,
    "EncodingError U+ADD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD2");
    },
    Error,
    "EncodingError U+ADD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD3");
    },
    Error,
    "EncodingError U+ADD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD4");
    },
    Error,
    "EncodingError U+ADD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD5");
    },
    Error,
    "EncodingError U+ADD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD6");
    },
    Error,
    "EncodingError U+ADD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD7");
    },
    Error,
    "EncodingError U+ADD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD8");
    },
    Error,
    "EncodingError U+ADD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD9");
    },
    Error,
    "EncodingError U+ADD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADDA");
    },
    Error,
    "EncodingError U+ADDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADDB");
    },
    Error,
    "EncodingError U+ADDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADDC");
    },
    Error,
    "EncodingError U+ADDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADDD");
    },
    Error,
    "EncodingError U+ADDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADDE");
    },
    Error,
    "EncodingError U+ADDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADDF");
    },
    Error,
    "EncodingError U+ADDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE0");
    },
    Error,
    "EncodingError U+ADE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE1");
    },
    Error,
    "EncodingError U+ADE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE2");
    },
    Error,
    "EncodingError U+ADE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE3");
    },
    Error,
    "EncodingError U+ADE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE4");
    },
    Error,
    "EncodingError U+ADE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE5");
    },
    Error,
    "EncodingError U+ADE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE6");
    },
    Error,
    "EncodingError U+ADE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE7");
    },
    Error,
    "EncodingError U+ADE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE8");
    },
    Error,
    "EncodingError U+ADE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE9");
    },
    Error,
    "EncodingError U+ADE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADEA");
    },
    Error,
    "EncodingError U+ADEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADEB");
    },
    Error,
    "EncodingError U+ADEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADEC");
    },
    Error,
    "EncodingError U+ADEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADED");
    },
    Error,
    "EncodingError U+ADED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADEE");
    },
    Error,
    "EncodingError U+ADEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADEF");
    },
    Error,
    "EncodingError U+ADEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF0");
    },
    Error,
    "EncodingError U+ADF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF1");
    },
    Error,
    "EncodingError U+ADF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF2");
    },
    Error,
    "EncodingError U+ADF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF3");
    },
    Error,
    "EncodingError U+ADF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF4");
    },
    Error,
    "EncodingError U+ADF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF5");
    },
    Error,
    "EncodingError U+ADF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF6");
    },
    Error,
    "EncodingError U+ADF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF7");
    },
    Error,
    "EncodingError U+ADF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF8");
    },
    Error,
    "EncodingError U+ADF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF9");
    },
    Error,
    "EncodingError U+ADF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADFA");
    },
    Error,
    "EncodingError U+ADFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADFB");
    },
    Error,
    "EncodingError U+ADFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADFC");
    },
    Error,
    "EncodingError U+ADFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADFD");
    },
    Error,
    "EncodingError U+ADFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADFE");
    },
    Error,
    "EncodingError U+ADFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADFF");
    },
    Error,
    "EncodingError U+ADFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE00");
    },
    Error,
    "EncodingError U+AE00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE01");
    },
    Error,
    "EncodingError U+AE01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE02");
    },
    Error,
    "EncodingError U+AE02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE03");
    },
    Error,
    "EncodingError U+AE03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE04");
    },
    Error,
    "EncodingError U+AE04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE05");
    },
    Error,
    "EncodingError U+AE05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE06");
    },
    Error,
    "EncodingError U+AE06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE07");
    },
    Error,
    "EncodingError U+AE07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE08");
    },
    Error,
    "EncodingError U+AE08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE09");
    },
    Error,
    "EncodingError U+AE09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE0A");
    },
    Error,
    "EncodingError U+AE0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE0B");
    },
    Error,
    "EncodingError U+AE0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE0C");
    },
    Error,
    "EncodingError U+AE0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE0D");
    },
    Error,
    "EncodingError U+AE0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE0E");
    },
    Error,
    "EncodingError U+AE0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE0F");
    },
    Error,
    "EncodingError U+AE0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE10");
    },
    Error,
    "EncodingError U+AE10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE11");
    },
    Error,
    "EncodingError U+AE11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE12");
    },
    Error,
    "EncodingError U+AE12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE13");
    },
    Error,
    "EncodingError U+AE13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE14");
    },
    Error,
    "EncodingError U+AE14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE15");
    },
    Error,
    "EncodingError U+AE15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE16");
    },
    Error,
    "EncodingError U+AE16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE17");
    },
    Error,
    "EncodingError U+AE17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE18");
    },
    Error,
    "EncodingError U+AE18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE19");
    },
    Error,
    "EncodingError U+AE19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE1A");
    },
    Error,
    "EncodingError U+AE1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE1B");
    },
    Error,
    "EncodingError U+AE1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE1C");
    },
    Error,
    "EncodingError U+AE1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE1D");
    },
    Error,
    "EncodingError U+AE1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE1E");
    },
    Error,
    "EncodingError U+AE1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE1F");
    },
    Error,
    "EncodingError U+AE1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE20");
    },
    Error,
    "EncodingError U+AE20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE21");
    },
    Error,
    "EncodingError U+AE21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE22");
    },
    Error,
    "EncodingError U+AE22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE23");
    },
    Error,
    "EncodingError U+AE23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE24");
    },
    Error,
    "EncodingError U+AE24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE25");
    },
    Error,
    "EncodingError U+AE25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE26");
    },
    Error,
    "EncodingError U+AE26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE27");
    },
    Error,
    "EncodingError U+AE27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE28");
    },
    Error,
    "EncodingError U+AE28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE29");
    },
    Error,
    "EncodingError U+AE29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE2A");
    },
    Error,
    "EncodingError U+AE2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE2B");
    },
    Error,
    "EncodingError U+AE2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE2C");
    },
    Error,
    "EncodingError U+AE2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE2D");
    },
    Error,
    "EncodingError U+AE2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE2E");
    },
    Error,
    "EncodingError U+AE2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE2F");
    },
    Error,
    "EncodingError U+AE2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE30");
    },
    Error,
    "EncodingError U+AE30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE31");
    },
    Error,
    "EncodingError U+AE31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE32");
    },
    Error,
    "EncodingError U+AE32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE33");
    },
    Error,
    "EncodingError U+AE33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE34");
    },
    Error,
    "EncodingError U+AE34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE35");
    },
    Error,
    "EncodingError U+AE35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE36");
    },
    Error,
    "EncodingError U+AE36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE37");
    },
    Error,
    "EncodingError U+AE37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE38");
    },
    Error,
    "EncodingError U+AE38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE39");
    },
    Error,
    "EncodingError U+AE39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE3A");
    },
    Error,
    "EncodingError U+AE3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE3B");
    },
    Error,
    "EncodingError U+AE3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE3C");
    },
    Error,
    "EncodingError U+AE3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE3D");
    },
    Error,
    "EncodingError U+AE3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE3E");
    },
    Error,
    "EncodingError U+AE3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE3F");
    },
    Error,
    "EncodingError U+AE3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE40");
    },
    Error,
    "EncodingError U+AE40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE41");
    },
    Error,
    "EncodingError U+AE41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE42");
    },
    Error,
    "EncodingError U+AE42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE43");
    },
    Error,
    "EncodingError U+AE43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE44");
    },
    Error,
    "EncodingError U+AE44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE45");
    },
    Error,
    "EncodingError U+AE45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE46");
    },
    Error,
    "EncodingError U+AE46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE47");
    },
    Error,
    "EncodingError U+AE47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE48");
    },
    Error,
    "EncodingError U+AE48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE49");
    },
    Error,
    "EncodingError U+AE49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE4A");
    },
    Error,
    "EncodingError U+AE4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE4B");
    },
    Error,
    "EncodingError U+AE4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE4C");
    },
    Error,
    "EncodingError U+AE4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE4D");
    },
    Error,
    "EncodingError U+AE4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE4E");
    },
    Error,
    "EncodingError U+AE4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE4F");
    },
    Error,
    "EncodingError U+AE4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE50");
    },
    Error,
    "EncodingError U+AE50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE51");
    },
    Error,
    "EncodingError U+AE51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE52");
    },
    Error,
    "EncodingError U+AE52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE53");
    },
    Error,
    "EncodingError U+AE53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE54");
    },
    Error,
    "EncodingError U+AE54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE55");
    },
    Error,
    "EncodingError U+AE55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE56");
    },
    Error,
    "EncodingError U+AE56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE57");
    },
    Error,
    "EncodingError U+AE57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE58");
    },
    Error,
    "EncodingError U+AE58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE59");
    },
    Error,
    "EncodingError U+AE59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE5A");
    },
    Error,
    "EncodingError U+AE5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE5B");
    },
    Error,
    "EncodingError U+AE5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE5C");
    },
    Error,
    "EncodingError U+AE5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE5D");
    },
    Error,
    "EncodingError U+AE5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE5E");
    },
    Error,
    "EncodingError U+AE5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE5F");
    },
    Error,
    "EncodingError U+AE5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE60");
    },
    Error,
    "EncodingError U+AE60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE61");
    },
    Error,
    "EncodingError U+AE61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE62");
    },
    Error,
    "EncodingError U+AE62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE63");
    },
    Error,
    "EncodingError U+AE63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE64");
    },
    Error,
    "EncodingError U+AE64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE65");
    },
    Error,
    "EncodingError U+AE65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE66");
    },
    Error,
    "EncodingError U+AE66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE67");
    },
    Error,
    "EncodingError U+AE67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE68");
    },
    Error,
    "EncodingError U+AE68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE69");
    },
    Error,
    "EncodingError U+AE69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE6A");
    },
    Error,
    "EncodingError U+AE6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE6B");
    },
    Error,
    "EncodingError U+AE6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE6C");
    },
    Error,
    "EncodingError U+AE6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE6D");
    },
    Error,
    "EncodingError U+AE6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE6E");
    },
    Error,
    "EncodingError U+AE6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE6F");
    },
    Error,
    "EncodingError U+AE6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE70");
    },
    Error,
    "EncodingError U+AE70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE71");
    },
    Error,
    "EncodingError U+AE71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE72");
    },
    Error,
    "EncodingError U+AE72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE73");
    },
    Error,
    "EncodingError U+AE73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE74");
    },
    Error,
    "EncodingError U+AE74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE75");
    },
    Error,
    "EncodingError U+AE75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE76");
    },
    Error,
    "EncodingError U+AE76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE77");
    },
    Error,
    "EncodingError U+AE77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE78");
    },
    Error,
    "EncodingError U+AE78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE79");
    },
    Error,
    "EncodingError U+AE79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE7A");
    },
    Error,
    "EncodingError U+AE7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE7B");
    },
    Error,
    "EncodingError U+AE7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE7C");
    },
    Error,
    "EncodingError U+AE7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE7D");
    },
    Error,
    "EncodingError U+AE7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE7E");
    },
    Error,
    "EncodingError U+AE7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE7F");
    },
    Error,
    "EncodingError U+AE7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE80");
    },
    Error,
    "EncodingError U+AE80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE81");
    },
    Error,
    "EncodingError U+AE81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE82");
    },
    Error,
    "EncodingError U+AE82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE83");
    },
    Error,
    "EncodingError U+AE83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE84");
    },
    Error,
    "EncodingError U+AE84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE85");
    },
    Error,
    "EncodingError U+AE85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE86");
    },
    Error,
    "EncodingError U+AE86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE87");
    },
    Error,
    "EncodingError U+AE87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE88");
    },
    Error,
    "EncodingError U+AE88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE89");
    },
    Error,
    "EncodingError U+AE89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE8A");
    },
    Error,
    "EncodingError U+AE8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE8B");
    },
    Error,
    "EncodingError U+AE8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE8C");
    },
    Error,
    "EncodingError U+AE8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE8D");
    },
    Error,
    "EncodingError U+AE8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE8E");
    },
    Error,
    "EncodingError U+AE8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE8F");
    },
    Error,
    "EncodingError U+AE8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE90");
    },
    Error,
    "EncodingError U+AE90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE91");
    },
    Error,
    "EncodingError U+AE91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE92");
    },
    Error,
    "EncodingError U+AE92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE93");
    },
    Error,
    "EncodingError U+AE93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE94");
    },
    Error,
    "EncodingError U+AE94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE95");
    },
    Error,
    "EncodingError U+AE95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE96");
    },
    Error,
    "EncodingError U+AE96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE97");
    },
    Error,
    "EncodingError U+AE97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE98");
    },
    Error,
    "EncodingError U+AE98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE99");
    },
    Error,
    "EncodingError U+AE99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE9A");
    },
    Error,
    "EncodingError U+AE9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE9B");
    },
    Error,
    "EncodingError U+AE9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE9C");
    },
    Error,
    "EncodingError U+AE9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE9D");
    },
    Error,
    "EncodingError U+AE9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE9E");
    },
    Error,
    "EncodingError U+AE9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE9F");
    },
    Error,
    "EncodingError U+AE9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA0");
    },
    Error,
    "EncodingError U+AEA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA1");
    },
    Error,
    "EncodingError U+AEA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA2");
    },
    Error,
    "EncodingError U+AEA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA3");
    },
    Error,
    "EncodingError U+AEA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA4");
    },
    Error,
    "EncodingError U+AEA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA5");
    },
    Error,
    "EncodingError U+AEA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA6");
    },
    Error,
    "EncodingError U+AEA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA7");
    },
    Error,
    "EncodingError U+AEA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA8");
    },
    Error,
    "EncodingError U+AEA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA9");
    },
    Error,
    "EncodingError U+AEA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEAA");
    },
    Error,
    "EncodingError U+AEAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEAB");
    },
    Error,
    "EncodingError U+AEAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEAC");
    },
    Error,
    "EncodingError U+AEAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEAD");
    },
    Error,
    "EncodingError U+AEAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEAE");
    },
    Error,
    "EncodingError U+AEAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEAF");
    },
    Error,
    "EncodingError U+AEAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB0");
    },
    Error,
    "EncodingError U+AEB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB1");
    },
    Error,
    "EncodingError U+AEB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB2");
    },
    Error,
    "EncodingError U+AEB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB3");
    },
    Error,
    "EncodingError U+AEB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB4");
    },
    Error,
    "EncodingError U+AEB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB5");
    },
    Error,
    "EncodingError U+AEB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB6");
    },
    Error,
    "EncodingError U+AEB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB7");
    },
    Error,
    "EncodingError U+AEB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB8");
    },
    Error,
    "EncodingError U+AEB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB9");
    },
    Error,
    "EncodingError U+AEB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEBA");
    },
    Error,
    "EncodingError U+AEBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEBB");
    },
    Error,
    "EncodingError U+AEBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEBC");
    },
    Error,
    "EncodingError U+AEBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEBD");
    },
    Error,
    "EncodingError U+AEBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEBE");
    },
    Error,
    "EncodingError U+AEBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEBF");
    },
    Error,
    "EncodingError U+AEBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC0");
    },
    Error,
    "EncodingError U+AEC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC1");
    },
    Error,
    "EncodingError U+AEC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC2");
    },
    Error,
    "EncodingError U+AEC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC3");
    },
    Error,
    "EncodingError U+AEC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC4");
    },
    Error,
    "EncodingError U+AEC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC5");
    },
    Error,
    "EncodingError U+AEC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC6");
    },
    Error,
    "EncodingError U+AEC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC7");
    },
    Error,
    "EncodingError U+AEC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC8");
    },
    Error,
    "EncodingError U+AEC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC9");
    },
    Error,
    "EncodingError U+AEC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAECA");
    },
    Error,
    "EncodingError U+AECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAECB");
    },
    Error,
    "EncodingError U+AECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAECC");
    },
    Error,
    "EncodingError U+AECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAECD");
    },
    Error,
    "EncodingError U+AECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAECE");
    },
    Error,
    "EncodingError U+AECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAECF");
    },
    Error,
    "EncodingError U+AECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED0");
    },
    Error,
    "EncodingError U+AED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED1");
    },
    Error,
    "EncodingError U+AED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED2");
    },
    Error,
    "EncodingError U+AED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED3");
    },
    Error,
    "EncodingError U+AED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED4");
    },
    Error,
    "EncodingError U+AED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED5");
    },
    Error,
    "EncodingError U+AED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED6");
    },
    Error,
    "EncodingError U+AED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED7");
    },
    Error,
    "EncodingError U+AED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED8");
    },
    Error,
    "EncodingError U+AED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED9");
    },
    Error,
    "EncodingError U+AED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEDA");
    },
    Error,
    "EncodingError U+AEDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEDB");
    },
    Error,
    "EncodingError U+AEDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEDC");
    },
    Error,
    "EncodingError U+AEDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEDD");
    },
    Error,
    "EncodingError U+AEDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEDE");
    },
    Error,
    "EncodingError U+AEDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEDF");
    },
    Error,
    "EncodingError U+AEDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE0");
    },
    Error,
    "EncodingError U+AEE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE1");
    },
    Error,
    "EncodingError U+AEE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE2");
    },
    Error,
    "EncodingError U+AEE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE3");
    },
    Error,
    "EncodingError U+AEE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE4");
    },
    Error,
    "EncodingError U+AEE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE5");
    },
    Error,
    "EncodingError U+AEE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE6");
    },
    Error,
    "EncodingError U+AEE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE7");
    },
    Error,
    "EncodingError U+AEE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE8");
    },
    Error,
    "EncodingError U+AEE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE9");
    },
    Error,
    "EncodingError U+AEE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEEA");
    },
    Error,
    "EncodingError U+AEEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEEB");
    },
    Error,
    "EncodingError U+AEEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEEC");
    },
    Error,
    "EncodingError U+AEEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEED");
    },
    Error,
    "EncodingError U+AEED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEEE");
    },
    Error,
    "EncodingError U+AEEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEEF");
    },
    Error,
    "EncodingError U+AEEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF0");
    },
    Error,
    "EncodingError U+AEF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF1");
    },
    Error,
    "EncodingError U+AEF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF2");
    },
    Error,
    "EncodingError U+AEF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF3");
    },
    Error,
    "EncodingError U+AEF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF4");
    },
    Error,
    "EncodingError U+AEF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF5");
    },
    Error,
    "EncodingError U+AEF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF6");
    },
    Error,
    "EncodingError U+AEF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF7");
    },
    Error,
    "EncodingError U+AEF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF8");
    },
    Error,
    "EncodingError U+AEF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF9");
    },
    Error,
    "EncodingError U+AEF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEFA");
    },
    Error,
    "EncodingError U+AEFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEFB");
    },
    Error,
    "EncodingError U+AEFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEFC");
    },
    Error,
    "EncodingError U+AEFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEFD");
    },
    Error,
    "EncodingError U+AEFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEFE");
    },
    Error,
    "EncodingError U+AEFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEFF");
    },
    Error,
    "EncodingError U+AEFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF00");
    },
    Error,
    "EncodingError U+AF00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF01");
    },
    Error,
    "EncodingError U+AF01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF02");
    },
    Error,
    "EncodingError U+AF02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF03");
    },
    Error,
    "EncodingError U+AF03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF04");
    },
    Error,
    "EncodingError U+AF04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF05");
    },
    Error,
    "EncodingError U+AF05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF06");
    },
    Error,
    "EncodingError U+AF06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF07");
    },
    Error,
    "EncodingError U+AF07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF08");
    },
    Error,
    "EncodingError U+AF08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF09");
    },
    Error,
    "EncodingError U+AF09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF0A");
    },
    Error,
    "EncodingError U+AF0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF0B");
    },
    Error,
    "EncodingError U+AF0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF0C");
    },
    Error,
    "EncodingError U+AF0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF0D");
    },
    Error,
    "EncodingError U+AF0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF0E");
    },
    Error,
    "EncodingError U+AF0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF0F");
    },
    Error,
    "EncodingError U+AF0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF10");
    },
    Error,
    "EncodingError U+AF10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF11");
    },
    Error,
    "EncodingError U+AF11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF12");
    },
    Error,
    "EncodingError U+AF12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF13");
    },
    Error,
    "EncodingError U+AF13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF14");
    },
    Error,
    "EncodingError U+AF14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF15");
    },
    Error,
    "EncodingError U+AF15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF16");
    },
    Error,
    "EncodingError U+AF16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF17");
    },
    Error,
    "EncodingError U+AF17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF18");
    },
    Error,
    "EncodingError U+AF18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF19");
    },
    Error,
    "EncodingError U+AF19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF1A");
    },
    Error,
    "EncodingError U+AF1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF1B");
    },
    Error,
    "EncodingError U+AF1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF1C");
    },
    Error,
    "EncodingError U+AF1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF1D");
    },
    Error,
    "EncodingError U+AF1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF1E");
    },
    Error,
    "EncodingError U+AF1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF1F");
    },
    Error,
    "EncodingError U+AF1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF20");
    },
    Error,
    "EncodingError U+AF20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF21");
    },
    Error,
    "EncodingError U+AF21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF22");
    },
    Error,
    "EncodingError U+AF22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF23");
    },
    Error,
    "EncodingError U+AF23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF24");
    },
    Error,
    "EncodingError U+AF24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF25");
    },
    Error,
    "EncodingError U+AF25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF26");
    },
    Error,
    "EncodingError U+AF26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF27");
    },
    Error,
    "EncodingError U+AF27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF28");
    },
    Error,
    "EncodingError U+AF28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF29");
    },
    Error,
    "EncodingError U+AF29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF2A");
    },
    Error,
    "EncodingError U+AF2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF2B");
    },
    Error,
    "EncodingError U+AF2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF2C");
    },
    Error,
    "EncodingError U+AF2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF2D");
    },
    Error,
    "EncodingError U+AF2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF2E");
    },
    Error,
    "EncodingError U+AF2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF2F");
    },
    Error,
    "EncodingError U+AF2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF30");
    },
    Error,
    "EncodingError U+AF30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF31");
    },
    Error,
    "EncodingError U+AF31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF32");
    },
    Error,
    "EncodingError U+AF32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF33");
    },
    Error,
    "EncodingError U+AF33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF34");
    },
    Error,
    "EncodingError U+AF34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF35");
    },
    Error,
    "EncodingError U+AF35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF36");
    },
    Error,
    "EncodingError U+AF36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF37");
    },
    Error,
    "EncodingError U+AF37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF38");
    },
    Error,
    "EncodingError U+AF38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF39");
    },
    Error,
    "EncodingError U+AF39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF3A");
    },
    Error,
    "EncodingError U+AF3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF3B");
    },
    Error,
    "EncodingError U+AF3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF3C");
    },
    Error,
    "EncodingError U+AF3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF3D");
    },
    Error,
    "EncodingError U+AF3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF3E");
    },
    Error,
    "EncodingError U+AF3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF3F");
    },
    Error,
    "EncodingError U+AF3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF40");
    },
    Error,
    "EncodingError U+AF40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF41");
    },
    Error,
    "EncodingError U+AF41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF42");
    },
    Error,
    "EncodingError U+AF42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF43");
    },
    Error,
    "EncodingError U+AF43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF44");
    },
    Error,
    "EncodingError U+AF44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF45");
    },
    Error,
    "EncodingError U+AF45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF46");
    },
    Error,
    "EncodingError U+AF46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF47");
    },
    Error,
    "EncodingError U+AF47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF48");
    },
    Error,
    "EncodingError U+AF48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF49");
    },
    Error,
    "EncodingError U+AF49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF4A");
    },
    Error,
    "EncodingError U+AF4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF4B");
    },
    Error,
    "EncodingError U+AF4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF4C");
    },
    Error,
    "EncodingError U+AF4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF4D");
    },
    Error,
    "EncodingError U+AF4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF4E");
    },
    Error,
    "EncodingError U+AF4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF4F");
    },
    Error,
    "EncodingError U+AF4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF50");
    },
    Error,
    "EncodingError U+AF50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF51");
    },
    Error,
    "EncodingError U+AF51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF52");
    },
    Error,
    "EncodingError U+AF52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF53");
    },
    Error,
    "EncodingError U+AF53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF54");
    },
    Error,
    "EncodingError U+AF54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF55");
    },
    Error,
    "EncodingError U+AF55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF56");
    },
    Error,
    "EncodingError U+AF56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF57");
    },
    Error,
    "EncodingError U+AF57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF58");
    },
    Error,
    "EncodingError U+AF58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF59");
    },
    Error,
    "EncodingError U+AF59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF5A");
    },
    Error,
    "EncodingError U+AF5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF5B");
    },
    Error,
    "EncodingError U+AF5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF5C");
    },
    Error,
    "EncodingError U+AF5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF5D");
    },
    Error,
    "EncodingError U+AF5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF5E");
    },
    Error,
    "EncodingError U+AF5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF5F");
    },
    Error,
    "EncodingError U+AF5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF60");
    },
    Error,
    "EncodingError U+AF60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF61");
    },
    Error,
    "EncodingError U+AF61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF62");
    },
    Error,
    "EncodingError U+AF62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF63");
    },
    Error,
    "EncodingError U+AF63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF64");
    },
    Error,
    "EncodingError U+AF64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF65");
    },
    Error,
    "EncodingError U+AF65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF66");
    },
    Error,
    "EncodingError U+AF66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF67");
    },
    Error,
    "EncodingError U+AF67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF68");
    },
    Error,
    "EncodingError U+AF68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF69");
    },
    Error,
    "EncodingError U+AF69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF6A");
    },
    Error,
    "EncodingError U+AF6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF6B");
    },
    Error,
    "EncodingError U+AF6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF6C");
    },
    Error,
    "EncodingError U+AF6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF6D");
    },
    Error,
    "EncodingError U+AF6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF6E");
    },
    Error,
    "EncodingError U+AF6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF6F");
    },
    Error,
    "EncodingError U+AF6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF70");
    },
    Error,
    "EncodingError U+AF70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF71");
    },
    Error,
    "EncodingError U+AF71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF72");
    },
    Error,
    "EncodingError U+AF72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF73");
    },
    Error,
    "EncodingError U+AF73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF74");
    },
    Error,
    "EncodingError U+AF74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF75");
    },
    Error,
    "EncodingError U+AF75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF76");
    },
    Error,
    "EncodingError U+AF76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF77");
    },
    Error,
    "EncodingError U+AF77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF78");
    },
    Error,
    "EncodingError U+AF78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF79");
    },
    Error,
    "EncodingError U+AF79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF7A");
    },
    Error,
    "EncodingError U+AF7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF7B");
    },
    Error,
    "EncodingError U+AF7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF7C");
    },
    Error,
    "EncodingError U+AF7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF7D");
    },
    Error,
    "EncodingError U+AF7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF7E");
    },
    Error,
    "EncodingError U+AF7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF7F");
    },
    Error,
    "EncodingError U+AF7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF80");
    },
    Error,
    "EncodingError U+AF80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF81");
    },
    Error,
    "EncodingError U+AF81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF82");
    },
    Error,
    "EncodingError U+AF82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF83");
    },
    Error,
    "EncodingError U+AF83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF84");
    },
    Error,
    "EncodingError U+AF84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF85");
    },
    Error,
    "EncodingError U+AF85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF86");
    },
    Error,
    "EncodingError U+AF86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF87");
    },
    Error,
    "EncodingError U+AF87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF88");
    },
    Error,
    "EncodingError U+AF88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF89");
    },
    Error,
    "EncodingError U+AF89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF8A");
    },
    Error,
    "EncodingError U+AF8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF8B");
    },
    Error,
    "EncodingError U+AF8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF8C");
    },
    Error,
    "EncodingError U+AF8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF8D");
    },
    Error,
    "EncodingError U+AF8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF8E");
    },
    Error,
    "EncodingError U+AF8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF8F");
    },
    Error,
    "EncodingError U+AF8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF90");
    },
    Error,
    "EncodingError U+AF90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF91");
    },
    Error,
    "EncodingError U+AF91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF92");
    },
    Error,
    "EncodingError U+AF92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF93");
    },
    Error,
    "EncodingError U+AF93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF94");
    },
    Error,
    "EncodingError U+AF94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF95");
    },
    Error,
    "EncodingError U+AF95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF96");
    },
    Error,
    "EncodingError U+AF96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF97");
    },
    Error,
    "EncodingError U+AF97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF98");
    },
    Error,
    "EncodingError U+AF98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF99");
    },
    Error,
    "EncodingError U+AF99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF9A");
    },
    Error,
    "EncodingError U+AF9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF9B");
    },
    Error,
    "EncodingError U+AF9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF9C");
    },
    Error,
    "EncodingError U+AF9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF9D");
    },
    Error,
    "EncodingError U+AF9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF9E");
    },
    Error,
    "EncodingError U+AF9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF9F");
    },
    Error,
    "EncodingError U+AF9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA0");
    },
    Error,
    "EncodingError U+AFA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA1");
    },
    Error,
    "EncodingError U+AFA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA2");
    },
    Error,
    "EncodingError U+AFA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA3");
    },
    Error,
    "EncodingError U+AFA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA4");
    },
    Error,
    "EncodingError U+AFA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA5");
    },
    Error,
    "EncodingError U+AFA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA6");
    },
    Error,
    "EncodingError U+AFA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA7");
    },
    Error,
    "EncodingError U+AFA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA8");
    },
    Error,
    "EncodingError U+AFA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA9");
    },
    Error,
    "EncodingError U+AFA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFAA");
    },
    Error,
    "EncodingError U+AFAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFAB");
    },
    Error,
    "EncodingError U+AFAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFAC");
    },
    Error,
    "EncodingError U+AFAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFAD");
    },
    Error,
    "EncodingError U+AFAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFAE");
    },
    Error,
    "EncodingError U+AFAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFAF");
    },
    Error,
    "EncodingError U+AFAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB0");
    },
    Error,
    "EncodingError U+AFB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB1");
    },
    Error,
    "EncodingError U+AFB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB2");
    },
    Error,
    "EncodingError U+AFB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB3");
    },
    Error,
    "EncodingError U+AFB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB4");
    },
    Error,
    "EncodingError U+AFB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB5");
    },
    Error,
    "EncodingError U+AFB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB6");
    },
    Error,
    "EncodingError U+AFB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB7");
    },
    Error,
    "EncodingError U+AFB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB8");
    },
    Error,
    "EncodingError U+AFB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB9");
    },
    Error,
    "EncodingError U+AFB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFBA");
    },
    Error,
    "EncodingError U+AFBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFBB");
    },
    Error,
    "EncodingError U+AFBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFBC");
    },
    Error,
    "EncodingError U+AFBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFBD");
    },
    Error,
    "EncodingError U+AFBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFBE");
    },
    Error,
    "EncodingError U+AFBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFBF");
    },
    Error,
    "EncodingError U+AFBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC0");
    },
    Error,
    "EncodingError U+AFC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC1");
    },
    Error,
    "EncodingError U+AFC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC2");
    },
    Error,
    "EncodingError U+AFC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC3");
    },
    Error,
    "EncodingError U+AFC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC4");
    },
    Error,
    "EncodingError U+AFC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC5");
    },
    Error,
    "EncodingError U+AFC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC6");
    },
    Error,
    "EncodingError U+AFC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC7");
    },
    Error,
    "EncodingError U+AFC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC8");
    },
    Error,
    "EncodingError U+AFC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC9");
    },
    Error,
    "EncodingError U+AFC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFCA");
    },
    Error,
    "EncodingError U+AFCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFCB");
    },
    Error,
    "EncodingError U+AFCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFCC");
    },
    Error,
    "EncodingError U+AFCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFCD");
    },
    Error,
    "EncodingError U+AFCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFCE");
    },
    Error,
    "EncodingError U+AFCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFCF");
    },
    Error,
    "EncodingError U+AFCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD0");
    },
    Error,
    "EncodingError U+AFD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD1");
    },
    Error,
    "EncodingError U+AFD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD2");
    },
    Error,
    "EncodingError U+AFD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD3");
    },
    Error,
    "EncodingError U+AFD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD4");
    },
    Error,
    "EncodingError U+AFD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD5");
    },
    Error,
    "EncodingError U+AFD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD6");
    },
    Error,
    "EncodingError U+AFD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD7");
    },
    Error,
    "EncodingError U+AFD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD8");
    },
    Error,
    "EncodingError U+AFD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD9");
    },
    Error,
    "EncodingError U+AFD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFDA");
    },
    Error,
    "EncodingError U+AFDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFDB");
    },
    Error,
    "EncodingError U+AFDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFDC");
    },
    Error,
    "EncodingError U+AFDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFDD");
    },
    Error,
    "EncodingError U+AFDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFDE");
    },
    Error,
    "EncodingError U+AFDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFDF");
    },
    Error,
    "EncodingError U+AFDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE0");
    },
    Error,
    "EncodingError U+AFE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE1");
    },
    Error,
    "EncodingError U+AFE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE2");
    },
    Error,
    "EncodingError U+AFE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE3");
    },
    Error,
    "EncodingError U+AFE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE4");
    },
    Error,
    "EncodingError U+AFE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE5");
    },
    Error,
    "EncodingError U+AFE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE6");
    },
    Error,
    "EncodingError U+AFE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE7");
    },
    Error,
    "EncodingError U+AFE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE8");
    },
    Error,
    "EncodingError U+AFE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE9");
    },
    Error,
    "EncodingError U+AFE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFEA");
    },
    Error,
    "EncodingError U+AFEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFEB");
    },
    Error,
    "EncodingError U+AFEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFEC");
    },
    Error,
    "EncodingError U+AFEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFED");
    },
    Error,
    "EncodingError U+AFED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFEE");
    },
    Error,
    "EncodingError U+AFEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFEF");
    },
    Error,
    "EncodingError U+AFEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF0");
    },
    Error,
    "EncodingError U+AFF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF1");
    },
    Error,
    "EncodingError U+AFF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF2");
    },
    Error,
    "EncodingError U+AFF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF3");
    },
    Error,
    "EncodingError U+AFF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF4");
    },
    Error,
    "EncodingError U+AFF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF5");
    },
    Error,
    "EncodingError U+AFF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF6");
    },
    Error,
    "EncodingError U+AFF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF7");
    },
    Error,
    "EncodingError U+AFF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF8");
    },
    Error,
    "EncodingError U+AFF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF9");
    },
    Error,
    "EncodingError U+AFF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFFA");
    },
    Error,
    "EncodingError U+AFFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFFB");
    },
    Error,
    "EncodingError U+AFFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFFC");
    },
    Error,
    "EncodingError U+AFFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFFD");
    },
    Error,
    "EncodingError U+AFFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFFE");
    },
    Error,
    "EncodingError U+AFFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFFF");
    },
    Error,
    "EncodingError U+AFFF",
  );
});
