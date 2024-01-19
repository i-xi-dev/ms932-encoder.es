import { assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+A000-U+AFFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  assertThrows(
    () => {
      ms932Encoder.encode("\uA000");
    },
    Error,
    "encode-error: U+A000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA001");
    },
    Error,
    "encode-error: U+A001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA002");
    },
    Error,
    "encode-error: U+A002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA003");
    },
    Error,
    "encode-error: U+A003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA004");
    },
    Error,
    "encode-error: U+A004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA005");
    },
    Error,
    "encode-error: U+A005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA006");
    },
    Error,
    "encode-error: U+A006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA007");
    },
    Error,
    "encode-error: U+A007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA008");
    },
    Error,
    "encode-error: U+A008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA009");
    },
    Error,
    "encode-error: U+A009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA00A");
    },
    Error,
    "encode-error: U+A00A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA00B");
    },
    Error,
    "encode-error: U+A00B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA00C");
    },
    Error,
    "encode-error: U+A00C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA00D");
    },
    Error,
    "encode-error: U+A00D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA00E");
    },
    Error,
    "encode-error: U+A00E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA00F");
    },
    Error,
    "encode-error: U+A00F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA010");
    },
    Error,
    "encode-error: U+A010",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA011");
    },
    Error,
    "encode-error: U+A011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA012");
    },
    Error,
    "encode-error: U+A012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA013");
    },
    Error,
    "encode-error: U+A013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA014");
    },
    Error,
    "encode-error: U+A014",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA015");
    },
    Error,
    "encode-error: U+A015",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA016");
    },
    Error,
    "encode-error: U+A016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA017");
    },
    Error,
    "encode-error: U+A017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA018");
    },
    Error,
    "encode-error: U+A018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA019");
    },
    Error,
    "encode-error: U+A019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA01A");
    },
    Error,
    "encode-error: U+A01A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA01B");
    },
    Error,
    "encode-error: U+A01B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA01C");
    },
    Error,
    "encode-error: U+A01C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA01D");
    },
    Error,
    "encode-error: U+A01D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA01E");
    },
    Error,
    "encode-error: U+A01E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA01F");
    },
    Error,
    "encode-error: U+A01F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA020");
    },
    Error,
    "encode-error: U+A020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA021");
    },
    Error,
    "encode-error: U+A021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA022");
    },
    Error,
    "encode-error: U+A022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA023");
    },
    Error,
    "encode-error: U+A023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA024");
    },
    Error,
    "encode-error: U+A024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA025");
    },
    Error,
    "encode-error: U+A025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA026");
    },
    Error,
    "encode-error: U+A026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA027");
    },
    Error,
    "encode-error: U+A027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA028");
    },
    Error,
    "encode-error: U+A028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA029");
    },
    Error,
    "encode-error: U+A029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA02A");
    },
    Error,
    "encode-error: U+A02A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA02B");
    },
    Error,
    "encode-error: U+A02B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA02C");
    },
    Error,
    "encode-error: U+A02C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA02D");
    },
    Error,
    "encode-error: U+A02D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA02E");
    },
    Error,
    "encode-error: U+A02E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA02F");
    },
    Error,
    "encode-error: U+A02F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA030");
    },
    Error,
    "encode-error: U+A030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA031");
    },
    Error,
    "encode-error: U+A031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA032");
    },
    Error,
    "encode-error: U+A032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA033");
    },
    Error,
    "encode-error: U+A033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA034");
    },
    Error,
    "encode-error: U+A034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA035");
    },
    Error,
    "encode-error: U+A035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA036");
    },
    Error,
    "encode-error: U+A036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA037");
    },
    Error,
    "encode-error: U+A037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA038");
    },
    Error,
    "encode-error: U+A038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA039");
    },
    Error,
    "encode-error: U+A039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA03A");
    },
    Error,
    "encode-error: U+A03A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA03B");
    },
    Error,
    "encode-error: U+A03B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA03C");
    },
    Error,
    "encode-error: U+A03C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA03D");
    },
    Error,
    "encode-error: U+A03D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA03E");
    },
    Error,
    "encode-error: U+A03E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA03F");
    },
    Error,
    "encode-error: U+A03F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA040");
    },
    Error,
    "encode-error: U+A040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA041");
    },
    Error,
    "encode-error: U+A041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA042");
    },
    Error,
    "encode-error: U+A042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA043");
    },
    Error,
    "encode-error: U+A043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA044");
    },
    Error,
    "encode-error: U+A044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA045");
    },
    Error,
    "encode-error: U+A045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA046");
    },
    Error,
    "encode-error: U+A046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA047");
    },
    Error,
    "encode-error: U+A047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA048");
    },
    Error,
    "encode-error: U+A048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA049");
    },
    Error,
    "encode-error: U+A049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA04A");
    },
    Error,
    "encode-error: U+A04A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA04B");
    },
    Error,
    "encode-error: U+A04B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA04C");
    },
    Error,
    "encode-error: U+A04C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA04D");
    },
    Error,
    "encode-error: U+A04D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA04E");
    },
    Error,
    "encode-error: U+A04E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA04F");
    },
    Error,
    "encode-error: U+A04F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA050");
    },
    Error,
    "encode-error: U+A050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA051");
    },
    Error,
    "encode-error: U+A051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA052");
    },
    Error,
    "encode-error: U+A052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA053");
    },
    Error,
    "encode-error: U+A053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA054");
    },
    Error,
    "encode-error: U+A054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA055");
    },
    Error,
    "encode-error: U+A055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA056");
    },
    Error,
    "encode-error: U+A056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA057");
    },
    Error,
    "encode-error: U+A057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA058");
    },
    Error,
    "encode-error: U+A058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA059");
    },
    Error,
    "encode-error: U+A059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA05A");
    },
    Error,
    "encode-error: U+A05A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA05B");
    },
    Error,
    "encode-error: U+A05B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA05C");
    },
    Error,
    "encode-error: U+A05C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA05D");
    },
    Error,
    "encode-error: U+A05D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA05E");
    },
    Error,
    "encode-error: U+A05E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA05F");
    },
    Error,
    "encode-error: U+A05F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA060");
    },
    Error,
    "encode-error: U+A060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA061");
    },
    Error,
    "encode-error: U+A061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA062");
    },
    Error,
    "encode-error: U+A062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA063");
    },
    Error,
    "encode-error: U+A063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA064");
    },
    Error,
    "encode-error: U+A064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA065");
    },
    Error,
    "encode-error: U+A065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA066");
    },
    Error,
    "encode-error: U+A066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA067");
    },
    Error,
    "encode-error: U+A067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA068");
    },
    Error,
    "encode-error: U+A068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA069");
    },
    Error,
    "encode-error: U+A069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA06A");
    },
    Error,
    "encode-error: U+A06A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA06B");
    },
    Error,
    "encode-error: U+A06B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA06C");
    },
    Error,
    "encode-error: U+A06C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA06D");
    },
    Error,
    "encode-error: U+A06D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA06E");
    },
    Error,
    "encode-error: U+A06E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA06F");
    },
    Error,
    "encode-error: U+A06F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA070");
    },
    Error,
    "encode-error: U+A070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA071");
    },
    Error,
    "encode-error: U+A071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA072");
    },
    Error,
    "encode-error: U+A072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA073");
    },
    Error,
    "encode-error: U+A073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA074");
    },
    Error,
    "encode-error: U+A074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA075");
    },
    Error,
    "encode-error: U+A075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA076");
    },
    Error,
    "encode-error: U+A076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA077");
    },
    Error,
    "encode-error: U+A077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA078");
    },
    Error,
    "encode-error: U+A078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA079");
    },
    Error,
    "encode-error: U+A079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA07A");
    },
    Error,
    "encode-error: U+A07A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA07B");
    },
    Error,
    "encode-error: U+A07B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA07C");
    },
    Error,
    "encode-error: U+A07C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA07D");
    },
    Error,
    "encode-error: U+A07D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA07E");
    },
    Error,
    "encode-error: U+A07E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA07F");
    },
    Error,
    "encode-error: U+A07F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA080");
    },
    Error,
    "encode-error: U+A080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA081");
    },
    Error,
    "encode-error: U+A081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA082");
    },
    Error,
    "encode-error: U+A082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA083");
    },
    Error,
    "encode-error: U+A083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA084");
    },
    Error,
    "encode-error: U+A084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA085");
    },
    Error,
    "encode-error: U+A085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA086");
    },
    Error,
    "encode-error: U+A086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA087");
    },
    Error,
    "encode-error: U+A087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA088");
    },
    Error,
    "encode-error: U+A088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA089");
    },
    Error,
    "encode-error: U+A089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA08A");
    },
    Error,
    "encode-error: U+A08A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA08B");
    },
    Error,
    "encode-error: U+A08B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA08C");
    },
    Error,
    "encode-error: U+A08C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA08D");
    },
    Error,
    "encode-error: U+A08D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA08E");
    },
    Error,
    "encode-error: U+A08E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA08F");
    },
    Error,
    "encode-error: U+A08F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA090");
    },
    Error,
    "encode-error: U+A090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA091");
    },
    Error,
    "encode-error: U+A091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA092");
    },
    Error,
    "encode-error: U+A092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA093");
    },
    Error,
    "encode-error: U+A093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA094");
    },
    Error,
    "encode-error: U+A094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA095");
    },
    Error,
    "encode-error: U+A095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA096");
    },
    Error,
    "encode-error: U+A096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA097");
    },
    Error,
    "encode-error: U+A097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA098");
    },
    Error,
    "encode-error: U+A098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA099");
    },
    Error,
    "encode-error: U+A099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA09A");
    },
    Error,
    "encode-error: U+A09A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA09B");
    },
    Error,
    "encode-error: U+A09B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA09C");
    },
    Error,
    "encode-error: U+A09C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA09D");
    },
    Error,
    "encode-error: U+A09D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA09E");
    },
    Error,
    "encode-error: U+A09E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA09F");
    },
    Error,
    "encode-error: U+A09F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A0");
    },
    Error,
    "encode-error: U+A0A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A1");
    },
    Error,
    "encode-error: U+A0A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A2");
    },
    Error,
    "encode-error: U+A0A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A3");
    },
    Error,
    "encode-error: U+A0A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A4");
    },
    Error,
    "encode-error: U+A0A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A5");
    },
    Error,
    "encode-error: U+A0A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A6");
    },
    Error,
    "encode-error: U+A0A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A7");
    },
    Error,
    "encode-error: U+A0A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A8");
    },
    Error,
    "encode-error: U+A0A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0A9");
    },
    Error,
    "encode-error: U+A0A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0AA");
    },
    Error,
    "encode-error: U+A0AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0AB");
    },
    Error,
    "encode-error: U+A0AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0AC");
    },
    Error,
    "encode-error: U+A0AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0AD");
    },
    Error,
    "encode-error: U+A0AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0AE");
    },
    Error,
    "encode-error: U+A0AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0AF");
    },
    Error,
    "encode-error: U+A0AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B0");
    },
    Error,
    "encode-error: U+A0B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B1");
    },
    Error,
    "encode-error: U+A0B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B2");
    },
    Error,
    "encode-error: U+A0B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B3");
    },
    Error,
    "encode-error: U+A0B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B4");
    },
    Error,
    "encode-error: U+A0B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B5");
    },
    Error,
    "encode-error: U+A0B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B6");
    },
    Error,
    "encode-error: U+A0B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B7");
    },
    Error,
    "encode-error: U+A0B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B8");
    },
    Error,
    "encode-error: U+A0B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0B9");
    },
    Error,
    "encode-error: U+A0B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0BA");
    },
    Error,
    "encode-error: U+A0BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0BB");
    },
    Error,
    "encode-error: U+A0BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0BC");
    },
    Error,
    "encode-error: U+A0BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0BD");
    },
    Error,
    "encode-error: U+A0BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0BE");
    },
    Error,
    "encode-error: U+A0BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0BF");
    },
    Error,
    "encode-error: U+A0BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C0");
    },
    Error,
    "encode-error: U+A0C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C1");
    },
    Error,
    "encode-error: U+A0C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C2");
    },
    Error,
    "encode-error: U+A0C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C3");
    },
    Error,
    "encode-error: U+A0C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C4");
    },
    Error,
    "encode-error: U+A0C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C5");
    },
    Error,
    "encode-error: U+A0C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C6");
    },
    Error,
    "encode-error: U+A0C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C7");
    },
    Error,
    "encode-error: U+A0C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C8");
    },
    Error,
    "encode-error: U+A0C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0C9");
    },
    Error,
    "encode-error: U+A0C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0CA");
    },
    Error,
    "encode-error: U+A0CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0CB");
    },
    Error,
    "encode-error: U+A0CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0CC");
    },
    Error,
    "encode-error: U+A0CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0CD");
    },
    Error,
    "encode-error: U+A0CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0CE");
    },
    Error,
    "encode-error: U+A0CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0CF");
    },
    Error,
    "encode-error: U+A0CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D0");
    },
    Error,
    "encode-error: U+A0D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D1");
    },
    Error,
    "encode-error: U+A0D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D2");
    },
    Error,
    "encode-error: U+A0D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D3");
    },
    Error,
    "encode-error: U+A0D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D4");
    },
    Error,
    "encode-error: U+A0D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D5");
    },
    Error,
    "encode-error: U+A0D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D6");
    },
    Error,
    "encode-error: U+A0D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D7");
    },
    Error,
    "encode-error: U+A0D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D8");
    },
    Error,
    "encode-error: U+A0D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0D9");
    },
    Error,
    "encode-error: U+A0D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0DA");
    },
    Error,
    "encode-error: U+A0DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0DB");
    },
    Error,
    "encode-error: U+A0DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0DC");
    },
    Error,
    "encode-error: U+A0DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0DD");
    },
    Error,
    "encode-error: U+A0DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0DE");
    },
    Error,
    "encode-error: U+A0DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0DF");
    },
    Error,
    "encode-error: U+A0DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E0");
    },
    Error,
    "encode-error: U+A0E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E1");
    },
    Error,
    "encode-error: U+A0E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E2");
    },
    Error,
    "encode-error: U+A0E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E3");
    },
    Error,
    "encode-error: U+A0E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E4");
    },
    Error,
    "encode-error: U+A0E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E5");
    },
    Error,
    "encode-error: U+A0E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E6");
    },
    Error,
    "encode-error: U+A0E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E7");
    },
    Error,
    "encode-error: U+A0E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E8");
    },
    Error,
    "encode-error: U+A0E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0E9");
    },
    Error,
    "encode-error: U+A0E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0EA");
    },
    Error,
    "encode-error: U+A0EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0EB");
    },
    Error,
    "encode-error: U+A0EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0EC");
    },
    Error,
    "encode-error: U+A0EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0ED");
    },
    Error,
    "encode-error: U+A0ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0EE");
    },
    Error,
    "encode-error: U+A0EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0EF");
    },
    Error,
    "encode-error: U+A0EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F0");
    },
    Error,
    "encode-error: U+A0F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F1");
    },
    Error,
    "encode-error: U+A0F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F2");
    },
    Error,
    "encode-error: U+A0F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F3");
    },
    Error,
    "encode-error: U+A0F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F4");
    },
    Error,
    "encode-error: U+A0F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F5");
    },
    Error,
    "encode-error: U+A0F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F6");
    },
    Error,
    "encode-error: U+A0F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F7");
    },
    Error,
    "encode-error: U+A0F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F8");
    },
    Error,
    "encode-error: U+A0F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0F9");
    },
    Error,
    "encode-error: U+A0F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0FA");
    },
    Error,
    "encode-error: U+A0FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0FB");
    },
    Error,
    "encode-error: U+A0FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0FC");
    },
    Error,
    "encode-error: U+A0FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0FD");
    },
    Error,
    "encode-error: U+A0FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0FE");
    },
    Error,
    "encode-error: U+A0FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA0FF");
    },
    Error,
    "encode-error: U+A0FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA100");
    },
    Error,
    "encode-error: U+A100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA101");
    },
    Error,
    "encode-error: U+A101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA102");
    },
    Error,
    "encode-error: U+A102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA103");
    },
    Error,
    "encode-error: U+A103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA104");
    },
    Error,
    "encode-error: U+A104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA105");
    },
    Error,
    "encode-error: U+A105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA106");
    },
    Error,
    "encode-error: U+A106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA107");
    },
    Error,
    "encode-error: U+A107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA108");
    },
    Error,
    "encode-error: U+A108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA109");
    },
    Error,
    "encode-error: U+A109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA10A");
    },
    Error,
    "encode-error: U+A10A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA10B");
    },
    Error,
    "encode-error: U+A10B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA10C");
    },
    Error,
    "encode-error: U+A10C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA10D");
    },
    Error,
    "encode-error: U+A10D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA10E");
    },
    Error,
    "encode-error: U+A10E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA10F");
    },
    Error,
    "encode-error: U+A10F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA110");
    },
    Error,
    "encode-error: U+A110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA111");
    },
    Error,
    "encode-error: U+A111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA112");
    },
    Error,
    "encode-error: U+A112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA113");
    },
    Error,
    "encode-error: U+A113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA114");
    },
    Error,
    "encode-error: U+A114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA115");
    },
    Error,
    "encode-error: U+A115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA116");
    },
    Error,
    "encode-error: U+A116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA117");
    },
    Error,
    "encode-error: U+A117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA118");
    },
    Error,
    "encode-error: U+A118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA119");
    },
    Error,
    "encode-error: U+A119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA11A");
    },
    Error,
    "encode-error: U+A11A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA11B");
    },
    Error,
    "encode-error: U+A11B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA11C");
    },
    Error,
    "encode-error: U+A11C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA11D");
    },
    Error,
    "encode-error: U+A11D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA11E");
    },
    Error,
    "encode-error: U+A11E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA11F");
    },
    Error,
    "encode-error: U+A11F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA120");
    },
    Error,
    "encode-error: U+A120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA121");
    },
    Error,
    "encode-error: U+A121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA122");
    },
    Error,
    "encode-error: U+A122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA123");
    },
    Error,
    "encode-error: U+A123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA124");
    },
    Error,
    "encode-error: U+A124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA125");
    },
    Error,
    "encode-error: U+A125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA126");
    },
    Error,
    "encode-error: U+A126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA127");
    },
    Error,
    "encode-error: U+A127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA128");
    },
    Error,
    "encode-error: U+A128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA129");
    },
    Error,
    "encode-error: U+A129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA12A");
    },
    Error,
    "encode-error: U+A12A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA12B");
    },
    Error,
    "encode-error: U+A12B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA12C");
    },
    Error,
    "encode-error: U+A12C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA12D");
    },
    Error,
    "encode-error: U+A12D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA12E");
    },
    Error,
    "encode-error: U+A12E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA12F");
    },
    Error,
    "encode-error: U+A12F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA130");
    },
    Error,
    "encode-error: U+A130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA131");
    },
    Error,
    "encode-error: U+A131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA132");
    },
    Error,
    "encode-error: U+A132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA133");
    },
    Error,
    "encode-error: U+A133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA134");
    },
    Error,
    "encode-error: U+A134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA135");
    },
    Error,
    "encode-error: U+A135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA136");
    },
    Error,
    "encode-error: U+A136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA137");
    },
    Error,
    "encode-error: U+A137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA138");
    },
    Error,
    "encode-error: U+A138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA139");
    },
    Error,
    "encode-error: U+A139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA13A");
    },
    Error,
    "encode-error: U+A13A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA13B");
    },
    Error,
    "encode-error: U+A13B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA13C");
    },
    Error,
    "encode-error: U+A13C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA13D");
    },
    Error,
    "encode-error: U+A13D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA13E");
    },
    Error,
    "encode-error: U+A13E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA13F");
    },
    Error,
    "encode-error: U+A13F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA140");
    },
    Error,
    "encode-error: U+A140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA141");
    },
    Error,
    "encode-error: U+A141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA142");
    },
    Error,
    "encode-error: U+A142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA143");
    },
    Error,
    "encode-error: U+A143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA144");
    },
    Error,
    "encode-error: U+A144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA145");
    },
    Error,
    "encode-error: U+A145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA146");
    },
    Error,
    "encode-error: U+A146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA147");
    },
    Error,
    "encode-error: U+A147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA148");
    },
    Error,
    "encode-error: U+A148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA149");
    },
    Error,
    "encode-error: U+A149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA14A");
    },
    Error,
    "encode-error: U+A14A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA14B");
    },
    Error,
    "encode-error: U+A14B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA14C");
    },
    Error,
    "encode-error: U+A14C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA14D");
    },
    Error,
    "encode-error: U+A14D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA14E");
    },
    Error,
    "encode-error: U+A14E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA14F");
    },
    Error,
    "encode-error: U+A14F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA150");
    },
    Error,
    "encode-error: U+A150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA151");
    },
    Error,
    "encode-error: U+A151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA152");
    },
    Error,
    "encode-error: U+A152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA153");
    },
    Error,
    "encode-error: U+A153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA154");
    },
    Error,
    "encode-error: U+A154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA155");
    },
    Error,
    "encode-error: U+A155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA156");
    },
    Error,
    "encode-error: U+A156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA157");
    },
    Error,
    "encode-error: U+A157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA158");
    },
    Error,
    "encode-error: U+A158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA159");
    },
    Error,
    "encode-error: U+A159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA15A");
    },
    Error,
    "encode-error: U+A15A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA15B");
    },
    Error,
    "encode-error: U+A15B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA15C");
    },
    Error,
    "encode-error: U+A15C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA15D");
    },
    Error,
    "encode-error: U+A15D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA15E");
    },
    Error,
    "encode-error: U+A15E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA15F");
    },
    Error,
    "encode-error: U+A15F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA160");
    },
    Error,
    "encode-error: U+A160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA161");
    },
    Error,
    "encode-error: U+A161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA162");
    },
    Error,
    "encode-error: U+A162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA163");
    },
    Error,
    "encode-error: U+A163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA164");
    },
    Error,
    "encode-error: U+A164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA165");
    },
    Error,
    "encode-error: U+A165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA166");
    },
    Error,
    "encode-error: U+A166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA167");
    },
    Error,
    "encode-error: U+A167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA168");
    },
    Error,
    "encode-error: U+A168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA169");
    },
    Error,
    "encode-error: U+A169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA16A");
    },
    Error,
    "encode-error: U+A16A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA16B");
    },
    Error,
    "encode-error: U+A16B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA16C");
    },
    Error,
    "encode-error: U+A16C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA16D");
    },
    Error,
    "encode-error: U+A16D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA16E");
    },
    Error,
    "encode-error: U+A16E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA16F");
    },
    Error,
    "encode-error: U+A16F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA170");
    },
    Error,
    "encode-error: U+A170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA171");
    },
    Error,
    "encode-error: U+A171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA172");
    },
    Error,
    "encode-error: U+A172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA173");
    },
    Error,
    "encode-error: U+A173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA174");
    },
    Error,
    "encode-error: U+A174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA175");
    },
    Error,
    "encode-error: U+A175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA176");
    },
    Error,
    "encode-error: U+A176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA177");
    },
    Error,
    "encode-error: U+A177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA178");
    },
    Error,
    "encode-error: U+A178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA179");
    },
    Error,
    "encode-error: U+A179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA17A");
    },
    Error,
    "encode-error: U+A17A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA17B");
    },
    Error,
    "encode-error: U+A17B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA17C");
    },
    Error,
    "encode-error: U+A17C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA17D");
    },
    Error,
    "encode-error: U+A17D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA17E");
    },
    Error,
    "encode-error: U+A17E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA17F");
    },
    Error,
    "encode-error: U+A17F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA180");
    },
    Error,
    "encode-error: U+A180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA181");
    },
    Error,
    "encode-error: U+A181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA182");
    },
    Error,
    "encode-error: U+A182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA183");
    },
    Error,
    "encode-error: U+A183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA184");
    },
    Error,
    "encode-error: U+A184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA185");
    },
    Error,
    "encode-error: U+A185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA186");
    },
    Error,
    "encode-error: U+A186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA187");
    },
    Error,
    "encode-error: U+A187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA188");
    },
    Error,
    "encode-error: U+A188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA189");
    },
    Error,
    "encode-error: U+A189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA18A");
    },
    Error,
    "encode-error: U+A18A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA18B");
    },
    Error,
    "encode-error: U+A18B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA18C");
    },
    Error,
    "encode-error: U+A18C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA18D");
    },
    Error,
    "encode-error: U+A18D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA18E");
    },
    Error,
    "encode-error: U+A18E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA18F");
    },
    Error,
    "encode-error: U+A18F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA190");
    },
    Error,
    "encode-error: U+A190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA191");
    },
    Error,
    "encode-error: U+A191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA192");
    },
    Error,
    "encode-error: U+A192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA193");
    },
    Error,
    "encode-error: U+A193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA194");
    },
    Error,
    "encode-error: U+A194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA195");
    },
    Error,
    "encode-error: U+A195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA196");
    },
    Error,
    "encode-error: U+A196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA197");
    },
    Error,
    "encode-error: U+A197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA198");
    },
    Error,
    "encode-error: U+A198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA199");
    },
    Error,
    "encode-error: U+A199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA19A");
    },
    Error,
    "encode-error: U+A19A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA19B");
    },
    Error,
    "encode-error: U+A19B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA19C");
    },
    Error,
    "encode-error: U+A19C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA19D");
    },
    Error,
    "encode-error: U+A19D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA19E");
    },
    Error,
    "encode-error: U+A19E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA19F");
    },
    Error,
    "encode-error: U+A19F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A0");
    },
    Error,
    "encode-error: U+A1A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A1");
    },
    Error,
    "encode-error: U+A1A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A2");
    },
    Error,
    "encode-error: U+A1A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A3");
    },
    Error,
    "encode-error: U+A1A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A4");
    },
    Error,
    "encode-error: U+A1A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A5");
    },
    Error,
    "encode-error: U+A1A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A6");
    },
    Error,
    "encode-error: U+A1A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A7");
    },
    Error,
    "encode-error: U+A1A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A8");
    },
    Error,
    "encode-error: U+A1A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1A9");
    },
    Error,
    "encode-error: U+A1A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1AA");
    },
    Error,
    "encode-error: U+A1AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1AB");
    },
    Error,
    "encode-error: U+A1AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1AC");
    },
    Error,
    "encode-error: U+A1AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1AD");
    },
    Error,
    "encode-error: U+A1AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1AE");
    },
    Error,
    "encode-error: U+A1AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1AF");
    },
    Error,
    "encode-error: U+A1AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B0");
    },
    Error,
    "encode-error: U+A1B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B1");
    },
    Error,
    "encode-error: U+A1B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B2");
    },
    Error,
    "encode-error: U+A1B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B3");
    },
    Error,
    "encode-error: U+A1B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B4");
    },
    Error,
    "encode-error: U+A1B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B5");
    },
    Error,
    "encode-error: U+A1B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B6");
    },
    Error,
    "encode-error: U+A1B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B7");
    },
    Error,
    "encode-error: U+A1B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B8");
    },
    Error,
    "encode-error: U+A1B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1B9");
    },
    Error,
    "encode-error: U+A1B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1BA");
    },
    Error,
    "encode-error: U+A1BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1BB");
    },
    Error,
    "encode-error: U+A1BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1BC");
    },
    Error,
    "encode-error: U+A1BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1BD");
    },
    Error,
    "encode-error: U+A1BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1BE");
    },
    Error,
    "encode-error: U+A1BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1BF");
    },
    Error,
    "encode-error: U+A1BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C0");
    },
    Error,
    "encode-error: U+A1C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C1");
    },
    Error,
    "encode-error: U+A1C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C2");
    },
    Error,
    "encode-error: U+A1C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C3");
    },
    Error,
    "encode-error: U+A1C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C4");
    },
    Error,
    "encode-error: U+A1C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C5");
    },
    Error,
    "encode-error: U+A1C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C6");
    },
    Error,
    "encode-error: U+A1C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C7");
    },
    Error,
    "encode-error: U+A1C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C8");
    },
    Error,
    "encode-error: U+A1C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1C9");
    },
    Error,
    "encode-error: U+A1C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1CA");
    },
    Error,
    "encode-error: U+A1CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1CB");
    },
    Error,
    "encode-error: U+A1CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1CC");
    },
    Error,
    "encode-error: U+A1CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1CD");
    },
    Error,
    "encode-error: U+A1CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1CE");
    },
    Error,
    "encode-error: U+A1CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1CF");
    },
    Error,
    "encode-error: U+A1CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D0");
    },
    Error,
    "encode-error: U+A1D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D1");
    },
    Error,
    "encode-error: U+A1D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D2");
    },
    Error,
    "encode-error: U+A1D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D3");
    },
    Error,
    "encode-error: U+A1D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D4");
    },
    Error,
    "encode-error: U+A1D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D5");
    },
    Error,
    "encode-error: U+A1D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D6");
    },
    Error,
    "encode-error: U+A1D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D7");
    },
    Error,
    "encode-error: U+A1D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D8");
    },
    Error,
    "encode-error: U+A1D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1D9");
    },
    Error,
    "encode-error: U+A1D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1DA");
    },
    Error,
    "encode-error: U+A1DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1DB");
    },
    Error,
    "encode-error: U+A1DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1DC");
    },
    Error,
    "encode-error: U+A1DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1DD");
    },
    Error,
    "encode-error: U+A1DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1DE");
    },
    Error,
    "encode-error: U+A1DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1DF");
    },
    Error,
    "encode-error: U+A1DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E0");
    },
    Error,
    "encode-error: U+A1E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E1");
    },
    Error,
    "encode-error: U+A1E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E2");
    },
    Error,
    "encode-error: U+A1E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E3");
    },
    Error,
    "encode-error: U+A1E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E4");
    },
    Error,
    "encode-error: U+A1E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E5");
    },
    Error,
    "encode-error: U+A1E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E6");
    },
    Error,
    "encode-error: U+A1E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E7");
    },
    Error,
    "encode-error: U+A1E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E8");
    },
    Error,
    "encode-error: U+A1E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1E9");
    },
    Error,
    "encode-error: U+A1E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1EA");
    },
    Error,
    "encode-error: U+A1EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1EB");
    },
    Error,
    "encode-error: U+A1EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1EC");
    },
    Error,
    "encode-error: U+A1EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1ED");
    },
    Error,
    "encode-error: U+A1ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1EE");
    },
    Error,
    "encode-error: U+A1EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1EF");
    },
    Error,
    "encode-error: U+A1EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F0");
    },
    Error,
    "encode-error: U+A1F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F1");
    },
    Error,
    "encode-error: U+A1F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F2");
    },
    Error,
    "encode-error: U+A1F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F3");
    },
    Error,
    "encode-error: U+A1F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F4");
    },
    Error,
    "encode-error: U+A1F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F5");
    },
    Error,
    "encode-error: U+A1F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F6");
    },
    Error,
    "encode-error: U+A1F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F7");
    },
    Error,
    "encode-error: U+A1F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F8");
    },
    Error,
    "encode-error: U+A1F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1F9");
    },
    Error,
    "encode-error: U+A1F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1FA");
    },
    Error,
    "encode-error: U+A1FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1FB");
    },
    Error,
    "encode-error: U+A1FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1FC");
    },
    Error,
    "encode-error: U+A1FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1FD");
    },
    Error,
    "encode-error: U+A1FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1FE");
    },
    Error,
    "encode-error: U+A1FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA1FF");
    },
    Error,
    "encode-error: U+A1FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA200");
    },
    Error,
    "encode-error: U+A200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA201");
    },
    Error,
    "encode-error: U+A201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA202");
    },
    Error,
    "encode-error: U+A202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA203");
    },
    Error,
    "encode-error: U+A203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA204");
    },
    Error,
    "encode-error: U+A204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA205");
    },
    Error,
    "encode-error: U+A205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA206");
    },
    Error,
    "encode-error: U+A206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA207");
    },
    Error,
    "encode-error: U+A207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA208");
    },
    Error,
    "encode-error: U+A208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA209");
    },
    Error,
    "encode-error: U+A209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA20A");
    },
    Error,
    "encode-error: U+A20A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA20B");
    },
    Error,
    "encode-error: U+A20B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA20C");
    },
    Error,
    "encode-error: U+A20C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA20D");
    },
    Error,
    "encode-error: U+A20D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA20E");
    },
    Error,
    "encode-error: U+A20E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA20F");
    },
    Error,
    "encode-error: U+A20F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA210");
    },
    Error,
    "encode-error: U+A210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA211");
    },
    Error,
    "encode-error: U+A211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA212");
    },
    Error,
    "encode-error: U+A212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA213");
    },
    Error,
    "encode-error: U+A213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA214");
    },
    Error,
    "encode-error: U+A214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA215");
    },
    Error,
    "encode-error: U+A215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA216");
    },
    Error,
    "encode-error: U+A216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA217");
    },
    Error,
    "encode-error: U+A217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA218");
    },
    Error,
    "encode-error: U+A218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA219");
    },
    Error,
    "encode-error: U+A219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA21A");
    },
    Error,
    "encode-error: U+A21A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA21B");
    },
    Error,
    "encode-error: U+A21B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA21C");
    },
    Error,
    "encode-error: U+A21C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA21D");
    },
    Error,
    "encode-error: U+A21D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA21E");
    },
    Error,
    "encode-error: U+A21E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA21F");
    },
    Error,
    "encode-error: U+A21F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA220");
    },
    Error,
    "encode-error: U+A220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA221");
    },
    Error,
    "encode-error: U+A221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA222");
    },
    Error,
    "encode-error: U+A222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA223");
    },
    Error,
    "encode-error: U+A223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA224");
    },
    Error,
    "encode-error: U+A224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA225");
    },
    Error,
    "encode-error: U+A225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA226");
    },
    Error,
    "encode-error: U+A226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA227");
    },
    Error,
    "encode-error: U+A227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA228");
    },
    Error,
    "encode-error: U+A228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA229");
    },
    Error,
    "encode-error: U+A229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA22A");
    },
    Error,
    "encode-error: U+A22A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA22B");
    },
    Error,
    "encode-error: U+A22B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA22C");
    },
    Error,
    "encode-error: U+A22C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA22D");
    },
    Error,
    "encode-error: U+A22D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA22E");
    },
    Error,
    "encode-error: U+A22E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA22F");
    },
    Error,
    "encode-error: U+A22F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA230");
    },
    Error,
    "encode-error: U+A230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA231");
    },
    Error,
    "encode-error: U+A231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA232");
    },
    Error,
    "encode-error: U+A232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA233");
    },
    Error,
    "encode-error: U+A233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA234");
    },
    Error,
    "encode-error: U+A234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA235");
    },
    Error,
    "encode-error: U+A235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA236");
    },
    Error,
    "encode-error: U+A236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA237");
    },
    Error,
    "encode-error: U+A237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA238");
    },
    Error,
    "encode-error: U+A238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA239");
    },
    Error,
    "encode-error: U+A239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA23A");
    },
    Error,
    "encode-error: U+A23A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA23B");
    },
    Error,
    "encode-error: U+A23B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA23C");
    },
    Error,
    "encode-error: U+A23C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA23D");
    },
    Error,
    "encode-error: U+A23D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA23E");
    },
    Error,
    "encode-error: U+A23E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA23F");
    },
    Error,
    "encode-error: U+A23F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA240");
    },
    Error,
    "encode-error: U+A240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA241");
    },
    Error,
    "encode-error: U+A241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA242");
    },
    Error,
    "encode-error: U+A242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA243");
    },
    Error,
    "encode-error: U+A243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA244");
    },
    Error,
    "encode-error: U+A244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA245");
    },
    Error,
    "encode-error: U+A245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA246");
    },
    Error,
    "encode-error: U+A246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA247");
    },
    Error,
    "encode-error: U+A247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA248");
    },
    Error,
    "encode-error: U+A248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA249");
    },
    Error,
    "encode-error: U+A249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA24A");
    },
    Error,
    "encode-error: U+A24A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA24B");
    },
    Error,
    "encode-error: U+A24B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA24C");
    },
    Error,
    "encode-error: U+A24C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA24D");
    },
    Error,
    "encode-error: U+A24D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA24E");
    },
    Error,
    "encode-error: U+A24E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA24F");
    },
    Error,
    "encode-error: U+A24F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA250");
    },
    Error,
    "encode-error: U+A250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA251");
    },
    Error,
    "encode-error: U+A251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA252");
    },
    Error,
    "encode-error: U+A252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA253");
    },
    Error,
    "encode-error: U+A253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA254");
    },
    Error,
    "encode-error: U+A254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA255");
    },
    Error,
    "encode-error: U+A255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA256");
    },
    Error,
    "encode-error: U+A256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA257");
    },
    Error,
    "encode-error: U+A257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA258");
    },
    Error,
    "encode-error: U+A258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA259");
    },
    Error,
    "encode-error: U+A259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA25A");
    },
    Error,
    "encode-error: U+A25A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA25B");
    },
    Error,
    "encode-error: U+A25B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA25C");
    },
    Error,
    "encode-error: U+A25C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA25D");
    },
    Error,
    "encode-error: U+A25D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA25E");
    },
    Error,
    "encode-error: U+A25E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA25F");
    },
    Error,
    "encode-error: U+A25F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA260");
    },
    Error,
    "encode-error: U+A260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA261");
    },
    Error,
    "encode-error: U+A261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA262");
    },
    Error,
    "encode-error: U+A262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA263");
    },
    Error,
    "encode-error: U+A263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA264");
    },
    Error,
    "encode-error: U+A264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA265");
    },
    Error,
    "encode-error: U+A265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA266");
    },
    Error,
    "encode-error: U+A266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA267");
    },
    Error,
    "encode-error: U+A267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA268");
    },
    Error,
    "encode-error: U+A268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA269");
    },
    Error,
    "encode-error: U+A269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA26A");
    },
    Error,
    "encode-error: U+A26A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA26B");
    },
    Error,
    "encode-error: U+A26B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA26C");
    },
    Error,
    "encode-error: U+A26C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA26D");
    },
    Error,
    "encode-error: U+A26D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA26E");
    },
    Error,
    "encode-error: U+A26E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA26F");
    },
    Error,
    "encode-error: U+A26F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA270");
    },
    Error,
    "encode-error: U+A270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA271");
    },
    Error,
    "encode-error: U+A271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA272");
    },
    Error,
    "encode-error: U+A272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA273");
    },
    Error,
    "encode-error: U+A273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA274");
    },
    Error,
    "encode-error: U+A274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA275");
    },
    Error,
    "encode-error: U+A275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA276");
    },
    Error,
    "encode-error: U+A276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA277");
    },
    Error,
    "encode-error: U+A277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA278");
    },
    Error,
    "encode-error: U+A278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA279");
    },
    Error,
    "encode-error: U+A279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA27A");
    },
    Error,
    "encode-error: U+A27A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA27B");
    },
    Error,
    "encode-error: U+A27B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA27C");
    },
    Error,
    "encode-error: U+A27C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA27D");
    },
    Error,
    "encode-error: U+A27D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA27E");
    },
    Error,
    "encode-error: U+A27E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA27F");
    },
    Error,
    "encode-error: U+A27F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA280");
    },
    Error,
    "encode-error: U+A280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA281");
    },
    Error,
    "encode-error: U+A281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA282");
    },
    Error,
    "encode-error: U+A282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA283");
    },
    Error,
    "encode-error: U+A283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA284");
    },
    Error,
    "encode-error: U+A284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA285");
    },
    Error,
    "encode-error: U+A285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA286");
    },
    Error,
    "encode-error: U+A286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA287");
    },
    Error,
    "encode-error: U+A287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA288");
    },
    Error,
    "encode-error: U+A288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA289");
    },
    Error,
    "encode-error: U+A289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA28A");
    },
    Error,
    "encode-error: U+A28A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA28B");
    },
    Error,
    "encode-error: U+A28B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA28C");
    },
    Error,
    "encode-error: U+A28C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA28D");
    },
    Error,
    "encode-error: U+A28D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA28E");
    },
    Error,
    "encode-error: U+A28E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA28F");
    },
    Error,
    "encode-error: U+A28F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA290");
    },
    Error,
    "encode-error: U+A290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA291");
    },
    Error,
    "encode-error: U+A291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA292");
    },
    Error,
    "encode-error: U+A292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA293");
    },
    Error,
    "encode-error: U+A293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA294");
    },
    Error,
    "encode-error: U+A294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA295");
    },
    Error,
    "encode-error: U+A295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA296");
    },
    Error,
    "encode-error: U+A296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA297");
    },
    Error,
    "encode-error: U+A297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA298");
    },
    Error,
    "encode-error: U+A298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA299");
    },
    Error,
    "encode-error: U+A299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA29A");
    },
    Error,
    "encode-error: U+A29A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA29B");
    },
    Error,
    "encode-error: U+A29B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA29C");
    },
    Error,
    "encode-error: U+A29C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA29D");
    },
    Error,
    "encode-error: U+A29D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA29E");
    },
    Error,
    "encode-error: U+A29E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA29F");
    },
    Error,
    "encode-error: U+A29F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A0");
    },
    Error,
    "encode-error: U+A2A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A1");
    },
    Error,
    "encode-error: U+A2A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A2");
    },
    Error,
    "encode-error: U+A2A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A3");
    },
    Error,
    "encode-error: U+A2A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A4");
    },
    Error,
    "encode-error: U+A2A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A5");
    },
    Error,
    "encode-error: U+A2A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A6");
    },
    Error,
    "encode-error: U+A2A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A7");
    },
    Error,
    "encode-error: U+A2A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A8");
    },
    Error,
    "encode-error: U+A2A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2A9");
    },
    Error,
    "encode-error: U+A2A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2AA");
    },
    Error,
    "encode-error: U+A2AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2AB");
    },
    Error,
    "encode-error: U+A2AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2AC");
    },
    Error,
    "encode-error: U+A2AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2AD");
    },
    Error,
    "encode-error: U+A2AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2AE");
    },
    Error,
    "encode-error: U+A2AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2AF");
    },
    Error,
    "encode-error: U+A2AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B0");
    },
    Error,
    "encode-error: U+A2B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B1");
    },
    Error,
    "encode-error: U+A2B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B2");
    },
    Error,
    "encode-error: U+A2B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B3");
    },
    Error,
    "encode-error: U+A2B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B4");
    },
    Error,
    "encode-error: U+A2B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B5");
    },
    Error,
    "encode-error: U+A2B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B6");
    },
    Error,
    "encode-error: U+A2B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B7");
    },
    Error,
    "encode-error: U+A2B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B8");
    },
    Error,
    "encode-error: U+A2B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2B9");
    },
    Error,
    "encode-error: U+A2B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2BA");
    },
    Error,
    "encode-error: U+A2BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2BB");
    },
    Error,
    "encode-error: U+A2BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2BC");
    },
    Error,
    "encode-error: U+A2BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2BD");
    },
    Error,
    "encode-error: U+A2BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2BE");
    },
    Error,
    "encode-error: U+A2BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2BF");
    },
    Error,
    "encode-error: U+A2BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C0");
    },
    Error,
    "encode-error: U+A2C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C1");
    },
    Error,
    "encode-error: U+A2C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C2");
    },
    Error,
    "encode-error: U+A2C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C3");
    },
    Error,
    "encode-error: U+A2C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C4");
    },
    Error,
    "encode-error: U+A2C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C5");
    },
    Error,
    "encode-error: U+A2C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C6");
    },
    Error,
    "encode-error: U+A2C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C7");
    },
    Error,
    "encode-error: U+A2C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C8");
    },
    Error,
    "encode-error: U+A2C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2C9");
    },
    Error,
    "encode-error: U+A2C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2CA");
    },
    Error,
    "encode-error: U+A2CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2CB");
    },
    Error,
    "encode-error: U+A2CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2CC");
    },
    Error,
    "encode-error: U+A2CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2CD");
    },
    Error,
    "encode-error: U+A2CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2CE");
    },
    Error,
    "encode-error: U+A2CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2CF");
    },
    Error,
    "encode-error: U+A2CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D0");
    },
    Error,
    "encode-error: U+A2D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D1");
    },
    Error,
    "encode-error: U+A2D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D2");
    },
    Error,
    "encode-error: U+A2D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D3");
    },
    Error,
    "encode-error: U+A2D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D4");
    },
    Error,
    "encode-error: U+A2D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D5");
    },
    Error,
    "encode-error: U+A2D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D6");
    },
    Error,
    "encode-error: U+A2D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D7");
    },
    Error,
    "encode-error: U+A2D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D8");
    },
    Error,
    "encode-error: U+A2D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2D9");
    },
    Error,
    "encode-error: U+A2D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2DA");
    },
    Error,
    "encode-error: U+A2DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2DB");
    },
    Error,
    "encode-error: U+A2DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2DC");
    },
    Error,
    "encode-error: U+A2DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2DD");
    },
    Error,
    "encode-error: U+A2DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2DE");
    },
    Error,
    "encode-error: U+A2DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2DF");
    },
    Error,
    "encode-error: U+A2DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E0");
    },
    Error,
    "encode-error: U+A2E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E1");
    },
    Error,
    "encode-error: U+A2E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E2");
    },
    Error,
    "encode-error: U+A2E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E3");
    },
    Error,
    "encode-error: U+A2E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E4");
    },
    Error,
    "encode-error: U+A2E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E5");
    },
    Error,
    "encode-error: U+A2E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E6");
    },
    Error,
    "encode-error: U+A2E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E7");
    },
    Error,
    "encode-error: U+A2E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E8");
    },
    Error,
    "encode-error: U+A2E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2E9");
    },
    Error,
    "encode-error: U+A2E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2EA");
    },
    Error,
    "encode-error: U+A2EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2EB");
    },
    Error,
    "encode-error: U+A2EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2EC");
    },
    Error,
    "encode-error: U+A2EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2ED");
    },
    Error,
    "encode-error: U+A2ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2EE");
    },
    Error,
    "encode-error: U+A2EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2EF");
    },
    Error,
    "encode-error: U+A2EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F0");
    },
    Error,
    "encode-error: U+A2F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F1");
    },
    Error,
    "encode-error: U+A2F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F2");
    },
    Error,
    "encode-error: U+A2F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F3");
    },
    Error,
    "encode-error: U+A2F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F4");
    },
    Error,
    "encode-error: U+A2F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F5");
    },
    Error,
    "encode-error: U+A2F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F6");
    },
    Error,
    "encode-error: U+A2F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F7");
    },
    Error,
    "encode-error: U+A2F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F8");
    },
    Error,
    "encode-error: U+A2F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2F9");
    },
    Error,
    "encode-error: U+A2F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2FA");
    },
    Error,
    "encode-error: U+A2FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2FB");
    },
    Error,
    "encode-error: U+A2FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2FC");
    },
    Error,
    "encode-error: U+A2FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2FD");
    },
    Error,
    "encode-error: U+A2FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2FE");
    },
    Error,
    "encode-error: U+A2FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA2FF");
    },
    Error,
    "encode-error: U+A2FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA300");
    },
    Error,
    "encode-error: U+A300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA301");
    },
    Error,
    "encode-error: U+A301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA302");
    },
    Error,
    "encode-error: U+A302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA303");
    },
    Error,
    "encode-error: U+A303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA304");
    },
    Error,
    "encode-error: U+A304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA305");
    },
    Error,
    "encode-error: U+A305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA306");
    },
    Error,
    "encode-error: U+A306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA307");
    },
    Error,
    "encode-error: U+A307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA308");
    },
    Error,
    "encode-error: U+A308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA309");
    },
    Error,
    "encode-error: U+A309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA30A");
    },
    Error,
    "encode-error: U+A30A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA30B");
    },
    Error,
    "encode-error: U+A30B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA30C");
    },
    Error,
    "encode-error: U+A30C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA30D");
    },
    Error,
    "encode-error: U+A30D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA30E");
    },
    Error,
    "encode-error: U+A30E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA30F");
    },
    Error,
    "encode-error: U+A30F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA310");
    },
    Error,
    "encode-error: U+A310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA311");
    },
    Error,
    "encode-error: U+A311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA312");
    },
    Error,
    "encode-error: U+A312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA313");
    },
    Error,
    "encode-error: U+A313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA314");
    },
    Error,
    "encode-error: U+A314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA315");
    },
    Error,
    "encode-error: U+A315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA316");
    },
    Error,
    "encode-error: U+A316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA317");
    },
    Error,
    "encode-error: U+A317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA318");
    },
    Error,
    "encode-error: U+A318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA319");
    },
    Error,
    "encode-error: U+A319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA31A");
    },
    Error,
    "encode-error: U+A31A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA31B");
    },
    Error,
    "encode-error: U+A31B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA31C");
    },
    Error,
    "encode-error: U+A31C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA31D");
    },
    Error,
    "encode-error: U+A31D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA31E");
    },
    Error,
    "encode-error: U+A31E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA31F");
    },
    Error,
    "encode-error: U+A31F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA320");
    },
    Error,
    "encode-error: U+A320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA321");
    },
    Error,
    "encode-error: U+A321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA322");
    },
    Error,
    "encode-error: U+A322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA323");
    },
    Error,
    "encode-error: U+A323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA324");
    },
    Error,
    "encode-error: U+A324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA325");
    },
    Error,
    "encode-error: U+A325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA326");
    },
    Error,
    "encode-error: U+A326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA327");
    },
    Error,
    "encode-error: U+A327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA328");
    },
    Error,
    "encode-error: U+A328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA329");
    },
    Error,
    "encode-error: U+A329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA32A");
    },
    Error,
    "encode-error: U+A32A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA32B");
    },
    Error,
    "encode-error: U+A32B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA32C");
    },
    Error,
    "encode-error: U+A32C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA32D");
    },
    Error,
    "encode-error: U+A32D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA32E");
    },
    Error,
    "encode-error: U+A32E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA32F");
    },
    Error,
    "encode-error: U+A32F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA330");
    },
    Error,
    "encode-error: U+A330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA331");
    },
    Error,
    "encode-error: U+A331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA332");
    },
    Error,
    "encode-error: U+A332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA333");
    },
    Error,
    "encode-error: U+A333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA334");
    },
    Error,
    "encode-error: U+A334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA335");
    },
    Error,
    "encode-error: U+A335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA336");
    },
    Error,
    "encode-error: U+A336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA337");
    },
    Error,
    "encode-error: U+A337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA338");
    },
    Error,
    "encode-error: U+A338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA339");
    },
    Error,
    "encode-error: U+A339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA33A");
    },
    Error,
    "encode-error: U+A33A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA33B");
    },
    Error,
    "encode-error: U+A33B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA33C");
    },
    Error,
    "encode-error: U+A33C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA33D");
    },
    Error,
    "encode-error: U+A33D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA33E");
    },
    Error,
    "encode-error: U+A33E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA33F");
    },
    Error,
    "encode-error: U+A33F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA340");
    },
    Error,
    "encode-error: U+A340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA341");
    },
    Error,
    "encode-error: U+A341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA342");
    },
    Error,
    "encode-error: U+A342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA343");
    },
    Error,
    "encode-error: U+A343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA344");
    },
    Error,
    "encode-error: U+A344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA345");
    },
    Error,
    "encode-error: U+A345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA346");
    },
    Error,
    "encode-error: U+A346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA347");
    },
    Error,
    "encode-error: U+A347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA348");
    },
    Error,
    "encode-error: U+A348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA349");
    },
    Error,
    "encode-error: U+A349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA34A");
    },
    Error,
    "encode-error: U+A34A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA34B");
    },
    Error,
    "encode-error: U+A34B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA34C");
    },
    Error,
    "encode-error: U+A34C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA34D");
    },
    Error,
    "encode-error: U+A34D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA34E");
    },
    Error,
    "encode-error: U+A34E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA34F");
    },
    Error,
    "encode-error: U+A34F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA350");
    },
    Error,
    "encode-error: U+A350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA351");
    },
    Error,
    "encode-error: U+A351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA352");
    },
    Error,
    "encode-error: U+A352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA353");
    },
    Error,
    "encode-error: U+A353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA354");
    },
    Error,
    "encode-error: U+A354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA355");
    },
    Error,
    "encode-error: U+A355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA356");
    },
    Error,
    "encode-error: U+A356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA357");
    },
    Error,
    "encode-error: U+A357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA358");
    },
    Error,
    "encode-error: U+A358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA359");
    },
    Error,
    "encode-error: U+A359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA35A");
    },
    Error,
    "encode-error: U+A35A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA35B");
    },
    Error,
    "encode-error: U+A35B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA35C");
    },
    Error,
    "encode-error: U+A35C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA35D");
    },
    Error,
    "encode-error: U+A35D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA35E");
    },
    Error,
    "encode-error: U+A35E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA35F");
    },
    Error,
    "encode-error: U+A35F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA360");
    },
    Error,
    "encode-error: U+A360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA361");
    },
    Error,
    "encode-error: U+A361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA362");
    },
    Error,
    "encode-error: U+A362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA363");
    },
    Error,
    "encode-error: U+A363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA364");
    },
    Error,
    "encode-error: U+A364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA365");
    },
    Error,
    "encode-error: U+A365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA366");
    },
    Error,
    "encode-error: U+A366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA367");
    },
    Error,
    "encode-error: U+A367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA368");
    },
    Error,
    "encode-error: U+A368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA369");
    },
    Error,
    "encode-error: U+A369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA36A");
    },
    Error,
    "encode-error: U+A36A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA36B");
    },
    Error,
    "encode-error: U+A36B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA36C");
    },
    Error,
    "encode-error: U+A36C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA36D");
    },
    Error,
    "encode-error: U+A36D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA36E");
    },
    Error,
    "encode-error: U+A36E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA36F");
    },
    Error,
    "encode-error: U+A36F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA370");
    },
    Error,
    "encode-error: U+A370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA371");
    },
    Error,
    "encode-error: U+A371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA372");
    },
    Error,
    "encode-error: U+A372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA373");
    },
    Error,
    "encode-error: U+A373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA374");
    },
    Error,
    "encode-error: U+A374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA375");
    },
    Error,
    "encode-error: U+A375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA376");
    },
    Error,
    "encode-error: U+A376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA377");
    },
    Error,
    "encode-error: U+A377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA378");
    },
    Error,
    "encode-error: U+A378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA379");
    },
    Error,
    "encode-error: U+A379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA37A");
    },
    Error,
    "encode-error: U+A37A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA37B");
    },
    Error,
    "encode-error: U+A37B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA37C");
    },
    Error,
    "encode-error: U+A37C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA37D");
    },
    Error,
    "encode-error: U+A37D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA37E");
    },
    Error,
    "encode-error: U+A37E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA37F");
    },
    Error,
    "encode-error: U+A37F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA380");
    },
    Error,
    "encode-error: U+A380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA381");
    },
    Error,
    "encode-error: U+A381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA382");
    },
    Error,
    "encode-error: U+A382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA383");
    },
    Error,
    "encode-error: U+A383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA384");
    },
    Error,
    "encode-error: U+A384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA385");
    },
    Error,
    "encode-error: U+A385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA386");
    },
    Error,
    "encode-error: U+A386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA387");
    },
    Error,
    "encode-error: U+A387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA388");
    },
    Error,
    "encode-error: U+A388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA389");
    },
    Error,
    "encode-error: U+A389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA38A");
    },
    Error,
    "encode-error: U+A38A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA38B");
    },
    Error,
    "encode-error: U+A38B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA38C");
    },
    Error,
    "encode-error: U+A38C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA38D");
    },
    Error,
    "encode-error: U+A38D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA38E");
    },
    Error,
    "encode-error: U+A38E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA38F");
    },
    Error,
    "encode-error: U+A38F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA390");
    },
    Error,
    "encode-error: U+A390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA391");
    },
    Error,
    "encode-error: U+A391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA392");
    },
    Error,
    "encode-error: U+A392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA393");
    },
    Error,
    "encode-error: U+A393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA394");
    },
    Error,
    "encode-error: U+A394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA395");
    },
    Error,
    "encode-error: U+A395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA396");
    },
    Error,
    "encode-error: U+A396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA397");
    },
    Error,
    "encode-error: U+A397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA398");
    },
    Error,
    "encode-error: U+A398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA399");
    },
    Error,
    "encode-error: U+A399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA39A");
    },
    Error,
    "encode-error: U+A39A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA39B");
    },
    Error,
    "encode-error: U+A39B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA39C");
    },
    Error,
    "encode-error: U+A39C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA39D");
    },
    Error,
    "encode-error: U+A39D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA39E");
    },
    Error,
    "encode-error: U+A39E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA39F");
    },
    Error,
    "encode-error: U+A39F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A0");
    },
    Error,
    "encode-error: U+A3A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A1");
    },
    Error,
    "encode-error: U+A3A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A2");
    },
    Error,
    "encode-error: U+A3A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A3");
    },
    Error,
    "encode-error: U+A3A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A4");
    },
    Error,
    "encode-error: U+A3A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A5");
    },
    Error,
    "encode-error: U+A3A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A6");
    },
    Error,
    "encode-error: U+A3A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A7");
    },
    Error,
    "encode-error: U+A3A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A8");
    },
    Error,
    "encode-error: U+A3A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3A9");
    },
    Error,
    "encode-error: U+A3A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3AA");
    },
    Error,
    "encode-error: U+A3AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3AB");
    },
    Error,
    "encode-error: U+A3AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3AC");
    },
    Error,
    "encode-error: U+A3AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3AD");
    },
    Error,
    "encode-error: U+A3AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3AE");
    },
    Error,
    "encode-error: U+A3AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3AF");
    },
    Error,
    "encode-error: U+A3AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B0");
    },
    Error,
    "encode-error: U+A3B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B1");
    },
    Error,
    "encode-error: U+A3B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B2");
    },
    Error,
    "encode-error: U+A3B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B3");
    },
    Error,
    "encode-error: U+A3B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B4");
    },
    Error,
    "encode-error: U+A3B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B5");
    },
    Error,
    "encode-error: U+A3B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B6");
    },
    Error,
    "encode-error: U+A3B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B7");
    },
    Error,
    "encode-error: U+A3B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B8");
    },
    Error,
    "encode-error: U+A3B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3B9");
    },
    Error,
    "encode-error: U+A3B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3BA");
    },
    Error,
    "encode-error: U+A3BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3BB");
    },
    Error,
    "encode-error: U+A3BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3BC");
    },
    Error,
    "encode-error: U+A3BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3BD");
    },
    Error,
    "encode-error: U+A3BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3BE");
    },
    Error,
    "encode-error: U+A3BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3BF");
    },
    Error,
    "encode-error: U+A3BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C0");
    },
    Error,
    "encode-error: U+A3C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C1");
    },
    Error,
    "encode-error: U+A3C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C2");
    },
    Error,
    "encode-error: U+A3C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C3");
    },
    Error,
    "encode-error: U+A3C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C4");
    },
    Error,
    "encode-error: U+A3C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C5");
    },
    Error,
    "encode-error: U+A3C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C6");
    },
    Error,
    "encode-error: U+A3C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C7");
    },
    Error,
    "encode-error: U+A3C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C8");
    },
    Error,
    "encode-error: U+A3C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3C9");
    },
    Error,
    "encode-error: U+A3C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3CA");
    },
    Error,
    "encode-error: U+A3CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3CB");
    },
    Error,
    "encode-error: U+A3CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3CC");
    },
    Error,
    "encode-error: U+A3CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3CD");
    },
    Error,
    "encode-error: U+A3CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3CE");
    },
    Error,
    "encode-error: U+A3CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3CF");
    },
    Error,
    "encode-error: U+A3CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D0");
    },
    Error,
    "encode-error: U+A3D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D1");
    },
    Error,
    "encode-error: U+A3D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D2");
    },
    Error,
    "encode-error: U+A3D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D3");
    },
    Error,
    "encode-error: U+A3D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D4");
    },
    Error,
    "encode-error: U+A3D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D5");
    },
    Error,
    "encode-error: U+A3D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D6");
    },
    Error,
    "encode-error: U+A3D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D7");
    },
    Error,
    "encode-error: U+A3D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D8");
    },
    Error,
    "encode-error: U+A3D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3D9");
    },
    Error,
    "encode-error: U+A3D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3DA");
    },
    Error,
    "encode-error: U+A3DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3DB");
    },
    Error,
    "encode-error: U+A3DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3DC");
    },
    Error,
    "encode-error: U+A3DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3DD");
    },
    Error,
    "encode-error: U+A3DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3DE");
    },
    Error,
    "encode-error: U+A3DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3DF");
    },
    Error,
    "encode-error: U+A3DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E0");
    },
    Error,
    "encode-error: U+A3E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E1");
    },
    Error,
    "encode-error: U+A3E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E2");
    },
    Error,
    "encode-error: U+A3E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E3");
    },
    Error,
    "encode-error: U+A3E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E4");
    },
    Error,
    "encode-error: U+A3E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E5");
    },
    Error,
    "encode-error: U+A3E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E6");
    },
    Error,
    "encode-error: U+A3E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E7");
    },
    Error,
    "encode-error: U+A3E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E8");
    },
    Error,
    "encode-error: U+A3E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3E9");
    },
    Error,
    "encode-error: U+A3E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3EA");
    },
    Error,
    "encode-error: U+A3EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3EB");
    },
    Error,
    "encode-error: U+A3EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3EC");
    },
    Error,
    "encode-error: U+A3EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3ED");
    },
    Error,
    "encode-error: U+A3ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3EE");
    },
    Error,
    "encode-error: U+A3EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3EF");
    },
    Error,
    "encode-error: U+A3EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F0");
    },
    Error,
    "encode-error: U+A3F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F1");
    },
    Error,
    "encode-error: U+A3F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F2");
    },
    Error,
    "encode-error: U+A3F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F3");
    },
    Error,
    "encode-error: U+A3F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F4");
    },
    Error,
    "encode-error: U+A3F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F5");
    },
    Error,
    "encode-error: U+A3F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F6");
    },
    Error,
    "encode-error: U+A3F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F7");
    },
    Error,
    "encode-error: U+A3F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F8");
    },
    Error,
    "encode-error: U+A3F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3F9");
    },
    Error,
    "encode-error: U+A3F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3FA");
    },
    Error,
    "encode-error: U+A3FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3FB");
    },
    Error,
    "encode-error: U+A3FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3FC");
    },
    Error,
    "encode-error: U+A3FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3FD");
    },
    Error,
    "encode-error: U+A3FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3FE");
    },
    Error,
    "encode-error: U+A3FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA3FF");
    },
    Error,
    "encode-error: U+A3FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA400");
    },
    Error,
    "encode-error: U+A400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA401");
    },
    Error,
    "encode-error: U+A401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA402");
    },
    Error,
    "encode-error: U+A402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA403");
    },
    Error,
    "encode-error: U+A403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA404");
    },
    Error,
    "encode-error: U+A404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA405");
    },
    Error,
    "encode-error: U+A405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA406");
    },
    Error,
    "encode-error: U+A406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA407");
    },
    Error,
    "encode-error: U+A407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA408");
    },
    Error,
    "encode-error: U+A408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA409");
    },
    Error,
    "encode-error: U+A409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA40A");
    },
    Error,
    "encode-error: U+A40A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA40B");
    },
    Error,
    "encode-error: U+A40B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA40C");
    },
    Error,
    "encode-error: U+A40C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA40D");
    },
    Error,
    "encode-error: U+A40D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA40E");
    },
    Error,
    "encode-error: U+A40E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA40F");
    },
    Error,
    "encode-error: U+A40F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA410");
    },
    Error,
    "encode-error: U+A410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA411");
    },
    Error,
    "encode-error: U+A411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA412");
    },
    Error,
    "encode-error: U+A412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA413");
    },
    Error,
    "encode-error: U+A413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA414");
    },
    Error,
    "encode-error: U+A414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA415");
    },
    Error,
    "encode-error: U+A415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA416");
    },
    Error,
    "encode-error: U+A416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA417");
    },
    Error,
    "encode-error: U+A417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA418");
    },
    Error,
    "encode-error: U+A418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA419");
    },
    Error,
    "encode-error: U+A419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA41A");
    },
    Error,
    "encode-error: U+A41A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA41B");
    },
    Error,
    "encode-error: U+A41B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA41C");
    },
    Error,
    "encode-error: U+A41C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA41D");
    },
    Error,
    "encode-error: U+A41D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA41E");
    },
    Error,
    "encode-error: U+A41E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA41F");
    },
    Error,
    "encode-error: U+A41F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA420");
    },
    Error,
    "encode-error: U+A420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA421");
    },
    Error,
    "encode-error: U+A421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA422");
    },
    Error,
    "encode-error: U+A422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA423");
    },
    Error,
    "encode-error: U+A423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA424");
    },
    Error,
    "encode-error: U+A424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA425");
    },
    Error,
    "encode-error: U+A425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA426");
    },
    Error,
    "encode-error: U+A426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA427");
    },
    Error,
    "encode-error: U+A427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA428");
    },
    Error,
    "encode-error: U+A428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA429");
    },
    Error,
    "encode-error: U+A429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA42A");
    },
    Error,
    "encode-error: U+A42A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA42B");
    },
    Error,
    "encode-error: U+A42B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA42C");
    },
    Error,
    "encode-error: U+A42C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA42D");
    },
    Error,
    "encode-error: U+A42D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA42E");
    },
    Error,
    "encode-error: U+A42E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA42F");
    },
    Error,
    "encode-error: U+A42F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA430");
    },
    Error,
    "encode-error: U+A430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA431");
    },
    Error,
    "encode-error: U+A431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA432");
    },
    Error,
    "encode-error: U+A432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA433");
    },
    Error,
    "encode-error: U+A433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA434");
    },
    Error,
    "encode-error: U+A434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA435");
    },
    Error,
    "encode-error: U+A435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA436");
    },
    Error,
    "encode-error: U+A436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA437");
    },
    Error,
    "encode-error: U+A437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA438");
    },
    Error,
    "encode-error: U+A438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA439");
    },
    Error,
    "encode-error: U+A439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA43A");
    },
    Error,
    "encode-error: U+A43A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA43B");
    },
    Error,
    "encode-error: U+A43B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA43C");
    },
    Error,
    "encode-error: U+A43C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA43D");
    },
    Error,
    "encode-error: U+A43D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA43E");
    },
    Error,
    "encode-error: U+A43E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA43F");
    },
    Error,
    "encode-error: U+A43F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA440");
    },
    Error,
    "encode-error: U+A440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA441");
    },
    Error,
    "encode-error: U+A441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA442");
    },
    Error,
    "encode-error: U+A442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA443");
    },
    Error,
    "encode-error: U+A443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA444");
    },
    Error,
    "encode-error: U+A444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA445");
    },
    Error,
    "encode-error: U+A445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA446");
    },
    Error,
    "encode-error: U+A446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA447");
    },
    Error,
    "encode-error: U+A447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA448");
    },
    Error,
    "encode-error: U+A448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA449");
    },
    Error,
    "encode-error: U+A449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA44A");
    },
    Error,
    "encode-error: U+A44A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA44B");
    },
    Error,
    "encode-error: U+A44B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA44C");
    },
    Error,
    "encode-error: U+A44C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA44D");
    },
    Error,
    "encode-error: U+A44D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA44E");
    },
    Error,
    "encode-error: U+A44E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA44F");
    },
    Error,
    "encode-error: U+A44F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA450");
    },
    Error,
    "encode-error: U+A450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA451");
    },
    Error,
    "encode-error: U+A451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA452");
    },
    Error,
    "encode-error: U+A452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA453");
    },
    Error,
    "encode-error: U+A453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA454");
    },
    Error,
    "encode-error: U+A454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA455");
    },
    Error,
    "encode-error: U+A455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA456");
    },
    Error,
    "encode-error: U+A456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA457");
    },
    Error,
    "encode-error: U+A457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA458");
    },
    Error,
    "encode-error: U+A458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA459");
    },
    Error,
    "encode-error: U+A459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA45A");
    },
    Error,
    "encode-error: U+A45A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA45B");
    },
    Error,
    "encode-error: U+A45B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA45C");
    },
    Error,
    "encode-error: U+A45C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA45D");
    },
    Error,
    "encode-error: U+A45D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA45E");
    },
    Error,
    "encode-error: U+A45E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA45F");
    },
    Error,
    "encode-error: U+A45F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA460");
    },
    Error,
    "encode-error: U+A460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA461");
    },
    Error,
    "encode-error: U+A461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA462");
    },
    Error,
    "encode-error: U+A462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA463");
    },
    Error,
    "encode-error: U+A463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA464");
    },
    Error,
    "encode-error: U+A464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA465");
    },
    Error,
    "encode-error: U+A465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA466");
    },
    Error,
    "encode-error: U+A466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA467");
    },
    Error,
    "encode-error: U+A467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA468");
    },
    Error,
    "encode-error: U+A468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA469");
    },
    Error,
    "encode-error: U+A469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA46A");
    },
    Error,
    "encode-error: U+A46A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA46B");
    },
    Error,
    "encode-error: U+A46B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA46C");
    },
    Error,
    "encode-error: U+A46C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA46D");
    },
    Error,
    "encode-error: U+A46D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA46E");
    },
    Error,
    "encode-error: U+A46E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA46F");
    },
    Error,
    "encode-error: U+A46F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA470");
    },
    Error,
    "encode-error: U+A470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA471");
    },
    Error,
    "encode-error: U+A471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA472");
    },
    Error,
    "encode-error: U+A472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA473");
    },
    Error,
    "encode-error: U+A473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA474");
    },
    Error,
    "encode-error: U+A474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA475");
    },
    Error,
    "encode-error: U+A475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA476");
    },
    Error,
    "encode-error: U+A476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA477");
    },
    Error,
    "encode-error: U+A477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA478");
    },
    Error,
    "encode-error: U+A478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA479");
    },
    Error,
    "encode-error: U+A479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA47A");
    },
    Error,
    "encode-error: U+A47A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA47B");
    },
    Error,
    "encode-error: U+A47B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA47C");
    },
    Error,
    "encode-error: U+A47C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA47D");
    },
    Error,
    "encode-error: U+A47D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA47E");
    },
    Error,
    "encode-error: U+A47E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA47F");
    },
    Error,
    "encode-error: U+A47F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA480");
    },
    Error,
    "encode-error: U+A480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA481");
    },
    Error,
    "encode-error: U+A481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA482");
    },
    Error,
    "encode-error: U+A482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA483");
    },
    Error,
    "encode-error: U+A483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA484");
    },
    Error,
    "encode-error: U+A484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA485");
    },
    Error,
    "encode-error: U+A485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA486");
    },
    Error,
    "encode-error: U+A486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA487");
    },
    Error,
    "encode-error: U+A487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA488");
    },
    Error,
    "encode-error: U+A488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA489");
    },
    Error,
    "encode-error: U+A489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA48A");
    },
    Error,
    "encode-error: U+A48A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA48B");
    },
    Error,
    "encode-error: U+A48B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA48C");
    },
    Error,
    "encode-error: U+A48C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA48D");
    },
    Error,
    "encode-error: U+A48D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA48E");
    },
    Error,
    "encode-error: U+A48E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA48F");
    },
    Error,
    "encode-error: U+A48F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA490");
    },
    Error,
    "encode-error: U+A490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA491");
    },
    Error,
    "encode-error: U+A491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA492");
    },
    Error,
    "encode-error: U+A492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA493");
    },
    Error,
    "encode-error: U+A493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA494");
    },
    Error,
    "encode-error: U+A494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA495");
    },
    Error,
    "encode-error: U+A495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA496");
    },
    Error,
    "encode-error: U+A496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA497");
    },
    Error,
    "encode-error: U+A497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA498");
    },
    Error,
    "encode-error: U+A498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA499");
    },
    Error,
    "encode-error: U+A499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA49A");
    },
    Error,
    "encode-error: U+A49A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA49B");
    },
    Error,
    "encode-error: U+A49B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA49C");
    },
    Error,
    "encode-error: U+A49C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA49D");
    },
    Error,
    "encode-error: U+A49D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA49E");
    },
    Error,
    "encode-error: U+A49E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA49F");
    },
    Error,
    "encode-error: U+A49F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A0");
    },
    Error,
    "encode-error: U+A4A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A1");
    },
    Error,
    "encode-error: U+A4A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A2");
    },
    Error,
    "encode-error: U+A4A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A3");
    },
    Error,
    "encode-error: U+A4A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A4");
    },
    Error,
    "encode-error: U+A4A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A5");
    },
    Error,
    "encode-error: U+A4A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A6");
    },
    Error,
    "encode-error: U+A4A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A7");
    },
    Error,
    "encode-error: U+A4A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A8");
    },
    Error,
    "encode-error: U+A4A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4A9");
    },
    Error,
    "encode-error: U+A4A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4AA");
    },
    Error,
    "encode-error: U+A4AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4AB");
    },
    Error,
    "encode-error: U+A4AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4AC");
    },
    Error,
    "encode-error: U+A4AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4AD");
    },
    Error,
    "encode-error: U+A4AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4AE");
    },
    Error,
    "encode-error: U+A4AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4AF");
    },
    Error,
    "encode-error: U+A4AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B0");
    },
    Error,
    "encode-error: U+A4B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B1");
    },
    Error,
    "encode-error: U+A4B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B2");
    },
    Error,
    "encode-error: U+A4B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B3");
    },
    Error,
    "encode-error: U+A4B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B4");
    },
    Error,
    "encode-error: U+A4B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B5");
    },
    Error,
    "encode-error: U+A4B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B6");
    },
    Error,
    "encode-error: U+A4B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B7");
    },
    Error,
    "encode-error: U+A4B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B8");
    },
    Error,
    "encode-error: U+A4B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4B9");
    },
    Error,
    "encode-error: U+A4B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4BA");
    },
    Error,
    "encode-error: U+A4BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4BB");
    },
    Error,
    "encode-error: U+A4BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4BC");
    },
    Error,
    "encode-error: U+A4BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4BD");
    },
    Error,
    "encode-error: U+A4BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4BE");
    },
    Error,
    "encode-error: U+A4BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4BF");
    },
    Error,
    "encode-error: U+A4BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C0");
    },
    Error,
    "encode-error: U+A4C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C1");
    },
    Error,
    "encode-error: U+A4C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C2");
    },
    Error,
    "encode-error: U+A4C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C3");
    },
    Error,
    "encode-error: U+A4C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C4");
    },
    Error,
    "encode-error: U+A4C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C5");
    },
    Error,
    "encode-error: U+A4C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C6");
    },
    Error,
    "encode-error: U+A4C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C7");
    },
    Error,
    "encode-error: U+A4C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C8");
    },
    Error,
    "encode-error: U+A4C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4C9");
    },
    Error,
    "encode-error: U+A4C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4CA");
    },
    Error,
    "encode-error: U+A4CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4CB");
    },
    Error,
    "encode-error: U+A4CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4CC");
    },
    Error,
    "encode-error: U+A4CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4CD");
    },
    Error,
    "encode-error: U+A4CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4CE");
    },
    Error,
    "encode-error: U+A4CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4CF");
    },
    Error,
    "encode-error: U+A4CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D0");
    },
    Error,
    "encode-error: U+A4D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D1");
    },
    Error,
    "encode-error: U+A4D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D2");
    },
    Error,
    "encode-error: U+A4D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D3");
    },
    Error,
    "encode-error: U+A4D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D4");
    },
    Error,
    "encode-error: U+A4D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D5");
    },
    Error,
    "encode-error: U+A4D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D6");
    },
    Error,
    "encode-error: U+A4D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D7");
    },
    Error,
    "encode-error: U+A4D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D8");
    },
    Error,
    "encode-error: U+A4D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4D9");
    },
    Error,
    "encode-error: U+A4D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4DA");
    },
    Error,
    "encode-error: U+A4DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4DB");
    },
    Error,
    "encode-error: U+A4DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4DC");
    },
    Error,
    "encode-error: U+A4DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4DD");
    },
    Error,
    "encode-error: U+A4DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4DE");
    },
    Error,
    "encode-error: U+A4DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4DF");
    },
    Error,
    "encode-error: U+A4DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E0");
    },
    Error,
    "encode-error: U+A4E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E1");
    },
    Error,
    "encode-error: U+A4E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E2");
    },
    Error,
    "encode-error: U+A4E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E3");
    },
    Error,
    "encode-error: U+A4E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E4");
    },
    Error,
    "encode-error: U+A4E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E5");
    },
    Error,
    "encode-error: U+A4E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E6");
    },
    Error,
    "encode-error: U+A4E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E7");
    },
    Error,
    "encode-error: U+A4E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E8");
    },
    Error,
    "encode-error: U+A4E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4E9");
    },
    Error,
    "encode-error: U+A4E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4EA");
    },
    Error,
    "encode-error: U+A4EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4EB");
    },
    Error,
    "encode-error: U+A4EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4EC");
    },
    Error,
    "encode-error: U+A4EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4ED");
    },
    Error,
    "encode-error: U+A4ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4EE");
    },
    Error,
    "encode-error: U+A4EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4EF");
    },
    Error,
    "encode-error: U+A4EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F0");
    },
    Error,
    "encode-error: U+A4F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F1");
    },
    Error,
    "encode-error: U+A4F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F2");
    },
    Error,
    "encode-error: U+A4F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F3");
    },
    Error,
    "encode-error: U+A4F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F4");
    },
    Error,
    "encode-error: U+A4F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F5");
    },
    Error,
    "encode-error: U+A4F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F6");
    },
    Error,
    "encode-error: U+A4F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F7");
    },
    Error,
    "encode-error: U+A4F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F8");
    },
    Error,
    "encode-error: U+A4F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4F9");
    },
    Error,
    "encode-error: U+A4F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4FA");
    },
    Error,
    "encode-error: U+A4FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4FB");
    },
    Error,
    "encode-error: U+A4FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4FC");
    },
    Error,
    "encode-error: U+A4FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4FD");
    },
    Error,
    "encode-error: U+A4FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4FE");
    },
    Error,
    "encode-error: U+A4FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA4FF");
    },
    Error,
    "encode-error: U+A4FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA500");
    },
    Error,
    "encode-error: U+A500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA501");
    },
    Error,
    "encode-error: U+A501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA502");
    },
    Error,
    "encode-error: U+A502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA503");
    },
    Error,
    "encode-error: U+A503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA504");
    },
    Error,
    "encode-error: U+A504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA505");
    },
    Error,
    "encode-error: U+A505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA506");
    },
    Error,
    "encode-error: U+A506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA507");
    },
    Error,
    "encode-error: U+A507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA508");
    },
    Error,
    "encode-error: U+A508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA509");
    },
    Error,
    "encode-error: U+A509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA50A");
    },
    Error,
    "encode-error: U+A50A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA50B");
    },
    Error,
    "encode-error: U+A50B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA50C");
    },
    Error,
    "encode-error: U+A50C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA50D");
    },
    Error,
    "encode-error: U+A50D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA50E");
    },
    Error,
    "encode-error: U+A50E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA50F");
    },
    Error,
    "encode-error: U+A50F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA510");
    },
    Error,
    "encode-error: U+A510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA511");
    },
    Error,
    "encode-error: U+A511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA512");
    },
    Error,
    "encode-error: U+A512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA513");
    },
    Error,
    "encode-error: U+A513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA514");
    },
    Error,
    "encode-error: U+A514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA515");
    },
    Error,
    "encode-error: U+A515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA516");
    },
    Error,
    "encode-error: U+A516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA517");
    },
    Error,
    "encode-error: U+A517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA518");
    },
    Error,
    "encode-error: U+A518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA519");
    },
    Error,
    "encode-error: U+A519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA51A");
    },
    Error,
    "encode-error: U+A51A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA51B");
    },
    Error,
    "encode-error: U+A51B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA51C");
    },
    Error,
    "encode-error: U+A51C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA51D");
    },
    Error,
    "encode-error: U+A51D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA51E");
    },
    Error,
    "encode-error: U+A51E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA51F");
    },
    Error,
    "encode-error: U+A51F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA520");
    },
    Error,
    "encode-error: U+A520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA521");
    },
    Error,
    "encode-error: U+A521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA522");
    },
    Error,
    "encode-error: U+A522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA523");
    },
    Error,
    "encode-error: U+A523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA524");
    },
    Error,
    "encode-error: U+A524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA525");
    },
    Error,
    "encode-error: U+A525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA526");
    },
    Error,
    "encode-error: U+A526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA527");
    },
    Error,
    "encode-error: U+A527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA528");
    },
    Error,
    "encode-error: U+A528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA529");
    },
    Error,
    "encode-error: U+A529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA52A");
    },
    Error,
    "encode-error: U+A52A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA52B");
    },
    Error,
    "encode-error: U+A52B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA52C");
    },
    Error,
    "encode-error: U+A52C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA52D");
    },
    Error,
    "encode-error: U+A52D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA52E");
    },
    Error,
    "encode-error: U+A52E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA52F");
    },
    Error,
    "encode-error: U+A52F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA530");
    },
    Error,
    "encode-error: U+A530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA531");
    },
    Error,
    "encode-error: U+A531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA532");
    },
    Error,
    "encode-error: U+A532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA533");
    },
    Error,
    "encode-error: U+A533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA534");
    },
    Error,
    "encode-error: U+A534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA535");
    },
    Error,
    "encode-error: U+A535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA536");
    },
    Error,
    "encode-error: U+A536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA537");
    },
    Error,
    "encode-error: U+A537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA538");
    },
    Error,
    "encode-error: U+A538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA539");
    },
    Error,
    "encode-error: U+A539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA53A");
    },
    Error,
    "encode-error: U+A53A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA53B");
    },
    Error,
    "encode-error: U+A53B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA53C");
    },
    Error,
    "encode-error: U+A53C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA53D");
    },
    Error,
    "encode-error: U+A53D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA53E");
    },
    Error,
    "encode-error: U+A53E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA53F");
    },
    Error,
    "encode-error: U+A53F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA540");
    },
    Error,
    "encode-error: U+A540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA541");
    },
    Error,
    "encode-error: U+A541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA542");
    },
    Error,
    "encode-error: U+A542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA543");
    },
    Error,
    "encode-error: U+A543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA544");
    },
    Error,
    "encode-error: U+A544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA545");
    },
    Error,
    "encode-error: U+A545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA546");
    },
    Error,
    "encode-error: U+A546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA547");
    },
    Error,
    "encode-error: U+A547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA548");
    },
    Error,
    "encode-error: U+A548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA549");
    },
    Error,
    "encode-error: U+A549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA54A");
    },
    Error,
    "encode-error: U+A54A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA54B");
    },
    Error,
    "encode-error: U+A54B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA54C");
    },
    Error,
    "encode-error: U+A54C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA54D");
    },
    Error,
    "encode-error: U+A54D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA54E");
    },
    Error,
    "encode-error: U+A54E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA54F");
    },
    Error,
    "encode-error: U+A54F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA550");
    },
    Error,
    "encode-error: U+A550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA551");
    },
    Error,
    "encode-error: U+A551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA552");
    },
    Error,
    "encode-error: U+A552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA553");
    },
    Error,
    "encode-error: U+A553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA554");
    },
    Error,
    "encode-error: U+A554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA555");
    },
    Error,
    "encode-error: U+A555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA556");
    },
    Error,
    "encode-error: U+A556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA557");
    },
    Error,
    "encode-error: U+A557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA558");
    },
    Error,
    "encode-error: U+A558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA559");
    },
    Error,
    "encode-error: U+A559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA55A");
    },
    Error,
    "encode-error: U+A55A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA55B");
    },
    Error,
    "encode-error: U+A55B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA55C");
    },
    Error,
    "encode-error: U+A55C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA55D");
    },
    Error,
    "encode-error: U+A55D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA55E");
    },
    Error,
    "encode-error: U+A55E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA55F");
    },
    Error,
    "encode-error: U+A55F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA560");
    },
    Error,
    "encode-error: U+A560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA561");
    },
    Error,
    "encode-error: U+A561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA562");
    },
    Error,
    "encode-error: U+A562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA563");
    },
    Error,
    "encode-error: U+A563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA564");
    },
    Error,
    "encode-error: U+A564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA565");
    },
    Error,
    "encode-error: U+A565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA566");
    },
    Error,
    "encode-error: U+A566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA567");
    },
    Error,
    "encode-error: U+A567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA568");
    },
    Error,
    "encode-error: U+A568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA569");
    },
    Error,
    "encode-error: U+A569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA56A");
    },
    Error,
    "encode-error: U+A56A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA56B");
    },
    Error,
    "encode-error: U+A56B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA56C");
    },
    Error,
    "encode-error: U+A56C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA56D");
    },
    Error,
    "encode-error: U+A56D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA56E");
    },
    Error,
    "encode-error: U+A56E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA56F");
    },
    Error,
    "encode-error: U+A56F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA570");
    },
    Error,
    "encode-error: U+A570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA571");
    },
    Error,
    "encode-error: U+A571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA572");
    },
    Error,
    "encode-error: U+A572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA573");
    },
    Error,
    "encode-error: U+A573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA574");
    },
    Error,
    "encode-error: U+A574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA575");
    },
    Error,
    "encode-error: U+A575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA576");
    },
    Error,
    "encode-error: U+A576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA577");
    },
    Error,
    "encode-error: U+A577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA578");
    },
    Error,
    "encode-error: U+A578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA579");
    },
    Error,
    "encode-error: U+A579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA57A");
    },
    Error,
    "encode-error: U+A57A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA57B");
    },
    Error,
    "encode-error: U+A57B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA57C");
    },
    Error,
    "encode-error: U+A57C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA57D");
    },
    Error,
    "encode-error: U+A57D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA57E");
    },
    Error,
    "encode-error: U+A57E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA57F");
    },
    Error,
    "encode-error: U+A57F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA580");
    },
    Error,
    "encode-error: U+A580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA581");
    },
    Error,
    "encode-error: U+A581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA582");
    },
    Error,
    "encode-error: U+A582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA583");
    },
    Error,
    "encode-error: U+A583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA584");
    },
    Error,
    "encode-error: U+A584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA585");
    },
    Error,
    "encode-error: U+A585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA586");
    },
    Error,
    "encode-error: U+A586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA587");
    },
    Error,
    "encode-error: U+A587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA588");
    },
    Error,
    "encode-error: U+A588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA589");
    },
    Error,
    "encode-error: U+A589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA58A");
    },
    Error,
    "encode-error: U+A58A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA58B");
    },
    Error,
    "encode-error: U+A58B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA58C");
    },
    Error,
    "encode-error: U+A58C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA58D");
    },
    Error,
    "encode-error: U+A58D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA58E");
    },
    Error,
    "encode-error: U+A58E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA58F");
    },
    Error,
    "encode-error: U+A58F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA590");
    },
    Error,
    "encode-error: U+A590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA591");
    },
    Error,
    "encode-error: U+A591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA592");
    },
    Error,
    "encode-error: U+A592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA593");
    },
    Error,
    "encode-error: U+A593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA594");
    },
    Error,
    "encode-error: U+A594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA595");
    },
    Error,
    "encode-error: U+A595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA596");
    },
    Error,
    "encode-error: U+A596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA597");
    },
    Error,
    "encode-error: U+A597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA598");
    },
    Error,
    "encode-error: U+A598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA599");
    },
    Error,
    "encode-error: U+A599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA59A");
    },
    Error,
    "encode-error: U+A59A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA59B");
    },
    Error,
    "encode-error: U+A59B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA59C");
    },
    Error,
    "encode-error: U+A59C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA59D");
    },
    Error,
    "encode-error: U+A59D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA59E");
    },
    Error,
    "encode-error: U+A59E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA59F");
    },
    Error,
    "encode-error: U+A59F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A0");
    },
    Error,
    "encode-error: U+A5A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A1");
    },
    Error,
    "encode-error: U+A5A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A2");
    },
    Error,
    "encode-error: U+A5A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A3");
    },
    Error,
    "encode-error: U+A5A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A4");
    },
    Error,
    "encode-error: U+A5A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A5");
    },
    Error,
    "encode-error: U+A5A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A6");
    },
    Error,
    "encode-error: U+A5A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A7");
    },
    Error,
    "encode-error: U+A5A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A8");
    },
    Error,
    "encode-error: U+A5A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5A9");
    },
    Error,
    "encode-error: U+A5A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5AA");
    },
    Error,
    "encode-error: U+A5AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5AB");
    },
    Error,
    "encode-error: U+A5AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5AC");
    },
    Error,
    "encode-error: U+A5AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5AD");
    },
    Error,
    "encode-error: U+A5AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5AE");
    },
    Error,
    "encode-error: U+A5AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5AF");
    },
    Error,
    "encode-error: U+A5AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B0");
    },
    Error,
    "encode-error: U+A5B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B1");
    },
    Error,
    "encode-error: U+A5B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B2");
    },
    Error,
    "encode-error: U+A5B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B3");
    },
    Error,
    "encode-error: U+A5B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B4");
    },
    Error,
    "encode-error: U+A5B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B5");
    },
    Error,
    "encode-error: U+A5B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B6");
    },
    Error,
    "encode-error: U+A5B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B7");
    },
    Error,
    "encode-error: U+A5B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B8");
    },
    Error,
    "encode-error: U+A5B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5B9");
    },
    Error,
    "encode-error: U+A5B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5BA");
    },
    Error,
    "encode-error: U+A5BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5BB");
    },
    Error,
    "encode-error: U+A5BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5BC");
    },
    Error,
    "encode-error: U+A5BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5BD");
    },
    Error,
    "encode-error: U+A5BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5BE");
    },
    Error,
    "encode-error: U+A5BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5BF");
    },
    Error,
    "encode-error: U+A5BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C0");
    },
    Error,
    "encode-error: U+A5C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C1");
    },
    Error,
    "encode-error: U+A5C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C2");
    },
    Error,
    "encode-error: U+A5C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C3");
    },
    Error,
    "encode-error: U+A5C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C4");
    },
    Error,
    "encode-error: U+A5C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C5");
    },
    Error,
    "encode-error: U+A5C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C6");
    },
    Error,
    "encode-error: U+A5C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C7");
    },
    Error,
    "encode-error: U+A5C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C8");
    },
    Error,
    "encode-error: U+A5C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5C9");
    },
    Error,
    "encode-error: U+A5C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5CA");
    },
    Error,
    "encode-error: U+A5CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5CB");
    },
    Error,
    "encode-error: U+A5CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5CC");
    },
    Error,
    "encode-error: U+A5CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5CD");
    },
    Error,
    "encode-error: U+A5CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5CE");
    },
    Error,
    "encode-error: U+A5CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5CF");
    },
    Error,
    "encode-error: U+A5CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D0");
    },
    Error,
    "encode-error: U+A5D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D1");
    },
    Error,
    "encode-error: U+A5D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D2");
    },
    Error,
    "encode-error: U+A5D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D3");
    },
    Error,
    "encode-error: U+A5D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D4");
    },
    Error,
    "encode-error: U+A5D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D5");
    },
    Error,
    "encode-error: U+A5D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D6");
    },
    Error,
    "encode-error: U+A5D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D7");
    },
    Error,
    "encode-error: U+A5D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D8");
    },
    Error,
    "encode-error: U+A5D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5D9");
    },
    Error,
    "encode-error: U+A5D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5DA");
    },
    Error,
    "encode-error: U+A5DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5DB");
    },
    Error,
    "encode-error: U+A5DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5DC");
    },
    Error,
    "encode-error: U+A5DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5DD");
    },
    Error,
    "encode-error: U+A5DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5DE");
    },
    Error,
    "encode-error: U+A5DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5DF");
    },
    Error,
    "encode-error: U+A5DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E0");
    },
    Error,
    "encode-error: U+A5E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E1");
    },
    Error,
    "encode-error: U+A5E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E2");
    },
    Error,
    "encode-error: U+A5E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E3");
    },
    Error,
    "encode-error: U+A5E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E4");
    },
    Error,
    "encode-error: U+A5E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E5");
    },
    Error,
    "encode-error: U+A5E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E6");
    },
    Error,
    "encode-error: U+A5E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E7");
    },
    Error,
    "encode-error: U+A5E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E8");
    },
    Error,
    "encode-error: U+A5E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5E9");
    },
    Error,
    "encode-error: U+A5E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5EA");
    },
    Error,
    "encode-error: U+A5EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5EB");
    },
    Error,
    "encode-error: U+A5EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5EC");
    },
    Error,
    "encode-error: U+A5EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5ED");
    },
    Error,
    "encode-error: U+A5ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5EE");
    },
    Error,
    "encode-error: U+A5EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5EF");
    },
    Error,
    "encode-error: U+A5EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F0");
    },
    Error,
    "encode-error: U+A5F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F1");
    },
    Error,
    "encode-error: U+A5F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F2");
    },
    Error,
    "encode-error: U+A5F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F3");
    },
    Error,
    "encode-error: U+A5F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F4");
    },
    Error,
    "encode-error: U+A5F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F5");
    },
    Error,
    "encode-error: U+A5F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F6");
    },
    Error,
    "encode-error: U+A5F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F7");
    },
    Error,
    "encode-error: U+A5F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F8");
    },
    Error,
    "encode-error: U+A5F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5F9");
    },
    Error,
    "encode-error: U+A5F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5FA");
    },
    Error,
    "encode-error: U+A5FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5FB");
    },
    Error,
    "encode-error: U+A5FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5FC");
    },
    Error,
    "encode-error: U+A5FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5FD");
    },
    Error,
    "encode-error: U+A5FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5FE");
    },
    Error,
    "encode-error: U+A5FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA5FF");
    },
    Error,
    "encode-error: U+A5FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA600");
    },
    Error,
    "encode-error: U+A600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA601");
    },
    Error,
    "encode-error: U+A601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA602");
    },
    Error,
    "encode-error: U+A602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA603");
    },
    Error,
    "encode-error: U+A603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA604");
    },
    Error,
    "encode-error: U+A604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA605");
    },
    Error,
    "encode-error: U+A605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA606");
    },
    Error,
    "encode-error: U+A606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA607");
    },
    Error,
    "encode-error: U+A607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA608");
    },
    Error,
    "encode-error: U+A608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA609");
    },
    Error,
    "encode-error: U+A609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA60A");
    },
    Error,
    "encode-error: U+A60A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA60B");
    },
    Error,
    "encode-error: U+A60B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA60C");
    },
    Error,
    "encode-error: U+A60C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA60D");
    },
    Error,
    "encode-error: U+A60D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA60E");
    },
    Error,
    "encode-error: U+A60E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA60F");
    },
    Error,
    "encode-error: U+A60F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA610");
    },
    Error,
    "encode-error: U+A610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA611");
    },
    Error,
    "encode-error: U+A611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA612");
    },
    Error,
    "encode-error: U+A612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA613");
    },
    Error,
    "encode-error: U+A613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA614");
    },
    Error,
    "encode-error: U+A614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA615");
    },
    Error,
    "encode-error: U+A615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA616");
    },
    Error,
    "encode-error: U+A616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA617");
    },
    Error,
    "encode-error: U+A617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA618");
    },
    Error,
    "encode-error: U+A618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA619");
    },
    Error,
    "encode-error: U+A619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA61A");
    },
    Error,
    "encode-error: U+A61A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA61B");
    },
    Error,
    "encode-error: U+A61B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA61C");
    },
    Error,
    "encode-error: U+A61C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA61D");
    },
    Error,
    "encode-error: U+A61D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA61E");
    },
    Error,
    "encode-error: U+A61E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA61F");
    },
    Error,
    "encode-error: U+A61F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA620");
    },
    Error,
    "encode-error: U+A620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA621");
    },
    Error,
    "encode-error: U+A621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA622");
    },
    Error,
    "encode-error: U+A622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA623");
    },
    Error,
    "encode-error: U+A623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA624");
    },
    Error,
    "encode-error: U+A624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA625");
    },
    Error,
    "encode-error: U+A625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA626");
    },
    Error,
    "encode-error: U+A626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA627");
    },
    Error,
    "encode-error: U+A627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA628");
    },
    Error,
    "encode-error: U+A628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA629");
    },
    Error,
    "encode-error: U+A629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA62A");
    },
    Error,
    "encode-error: U+A62A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA62B");
    },
    Error,
    "encode-error: U+A62B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA62C");
    },
    Error,
    "encode-error: U+A62C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA62D");
    },
    Error,
    "encode-error: U+A62D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA62E");
    },
    Error,
    "encode-error: U+A62E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA62F");
    },
    Error,
    "encode-error: U+A62F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA630");
    },
    Error,
    "encode-error: U+A630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA631");
    },
    Error,
    "encode-error: U+A631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA632");
    },
    Error,
    "encode-error: U+A632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA633");
    },
    Error,
    "encode-error: U+A633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA634");
    },
    Error,
    "encode-error: U+A634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA635");
    },
    Error,
    "encode-error: U+A635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA636");
    },
    Error,
    "encode-error: U+A636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA637");
    },
    Error,
    "encode-error: U+A637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA638");
    },
    Error,
    "encode-error: U+A638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA639");
    },
    Error,
    "encode-error: U+A639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA63A");
    },
    Error,
    "encode-error: U+A63A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA63B");
    },
    Error,
    "encode-error: U+A63B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA63C");
    },
    Error,
    "encode-error: U+A63C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA63D");
    },
    Error,
    "encode-error: U+A63D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA63E");
    },
    Error,
    "encode-error: U+A63E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA63F");
    },
    Error,
    "encode-error: U+A63F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA640");
    },
    Error,
    "encode-error: U+A640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA641");
    },
    Error,
    "encode-error: U+A641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA642");
    },
    Error,
    "encode-error: U+A642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA643");
    },
    Error,
    "encode-error: U+A643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA644");
    },
    Error,
    "encode-error: U+A644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA645");
    },
    Error,
    "encode-error: U+A645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA646");
    },
    Error,
    "encode-error: U+A646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA647");
    },
    Error,
    "encode-error: U+A647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA648");
    },
    Error,
    "encode-error: U+A648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA649");
    },
    Error,
    "encode-error: U+A649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA64A");
    },
    Error,
    "encode-error: U+A64A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA64B");
    },
    Error,
    "encode-error: U+A64B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA64C");
    },
    Error,
    "encode-error: U+A64C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA64D");
    },
    Error,
    "encode-error: U+A64D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA64E");
    },
    Error,
    "encode-error: U+A64E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA64F");
    },
    Error,
    "encode-error: U+A64F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA650");
    },
    Error,
    "encode-error: U+A650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA651");
    },
    Error,
    "encode-error: U+A651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA652");
    },
    Error,
    "encode-error: U+A652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA653");
    },
    Error,
    "encode-error: U+A653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA654");
    },
    Error,
    "encode-error: U+A654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA655");
    },
    Error,
    "encode-error: U+A655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA656");
    },
    Error,
    "encode-error: U+A656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA657");
    },
    Error,
    "encode-error: U+A657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA658");
    },
    Error,
    "encode-error: U+A658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA659");
    },
    Error,
    "encode-error: U+A659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA65A");
    },
    Error,
    "encode-error: U+A65A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA65B");
    },
    Error,
    "encode-error: U+A65B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA65C");
    },
    Error,
    "encode-error: U+A65C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA65D");
    },
    Error,
    "encode-error: U+A65D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA65E");
    },
    Error,
    "encode-error: U+A65E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA65F");
    },
    Error,
    "encode-error: U+A65F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA660");
    },
    Error,
    "encode-error: U+A660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA661");
    },
    Error,
    "encode-error: U+A661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA662");
    },
    Error,
    "encode-error: U+A662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA663");
    },
    Error,
    "encode-error: U+A663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA664");
    },
    Error,
    "encode-error: U+A664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA665");
    },
    Error,
    "encode-error: U+A665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA666");
    },
    Error,
    "encode-error: U+A666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA667");
    },
    Error,
    "encode-error: U+A667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA668");
    },
    Error,
    "encode-error: U+A668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA669");
    },
    Error,
    "encode-error: U+A669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA66A");
    },
    Error,
    "encode-error: U+A66A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA66B");
    },
    Error,
    "encode-error: U+A66B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA66C");
    },
    Error,
    "encode-error: U+A66C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA66D");
    },
    Error,
    "encode-error: U+A66D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA66E");
    },
    Error,
    "encode-error: U+A66E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA66F");
    },
    Error,
    "encode-error: U+A66F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA670");
    },
    Error,
    "encode-error: U+A670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA671");
    },
    Error,
    "encode-error: U+A671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA672");
    },
    Error,
    "encode-error: U+A672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA673");
    },
    Error,
    "encode-error: U+A673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA674");
    },
    Error,
    "encode-error: U+A674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA675");
    },
    Error,
    "encode-error: U+A675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA676");
    },
    Error,
    "encode-error: U+A676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA677");
    },
    Error,
    "encode-error: U+A677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA678");
    },
    Error,
    "encode-error: U+A678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA679");
    },
    Error,
    "encode-error: U+A679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA67A");
    },
    Error,
    "encode-error: U+A67A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA67B");
    },
    Error,
    "encode-error: U+A67B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA67C");
    },
    Error,
    "encode-error: U+A67C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA67D");
    },
    Error,
    "encode-error: U+A67D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA67E");
    },
    Error,
    "encode-error: U+A67E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA67F");
    },
    Error,
    "encode-error: U+A67F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA680");
    },
    Error,
    "encode-error: U+A680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA681");
    },
    Error,
    "encode-error: U+A681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA682");
    },
    Error,
    "encode-error: U+A682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA683");
    },
    Error,
    "encode-error: U+A683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA684");
    },
    Error,
    "encode-error: U+A684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA685");
    },
    Error,
    "encode-error: U+A685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA686");
    },
    Error,
    "encode-error: U+A686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA687");
    },
    Error,
    "encode-error: U+A687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA688");
    },
    Error,
    "encode-error: U+A688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA689");
    },
    Error,
    "encode-error: U+A689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA68A");
    },
    Error,
    "encode-error: U+A68A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA68B");
    },
    Error,
    "encode-error: U+A68B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA68C");
    },
    Error,
    "encode-error: U+A68C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA68D");
    },
    Error,
    "encode-error: U+A68D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA68E");
    },
    Error,
    "encode-error: U+A68E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA68F");
    },
    Error,
    "encode-error: U+A68F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA690");
    },
    Error,
    "encode-error: U+A690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA691");
    },
    Error,
    "encode-error: U+A691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA692");
    },
    Error,
    "encode-error: U+A692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA693");
    },
    Error,
    "encode-error: U+A693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA694");
    },
    Error,
    "encode-error: U+A694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA695");
    },
    Error,
    "encode-error: U+A695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA696");
    },
    Error,
    "encode-error: U+A696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA697");
    },
    Error,
    "encode-error: U+A697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA698");
    },
    Error,
    "encode-error: U+A698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA699");
    },
    Error,
    "encode-error: U+A699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA69A");
    },
    Error,
    "encode-error: U+A69A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA69B");
    },
    Error,
    "encode-error: U+A69B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA69C");
    },
    Error,
    "encode-error: U+A69C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA69D");
    },
    Error,
    "encode-error: U+A69D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA69E");
    },
    Error,
    "encode-error: U+A69E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA69F");
    },
    Error,
    "encode-error: U+A69F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A0");
    },
    Error,
    "encode-error: U+A6A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A1");
    },
    Error,
    "encode-error: U+A6A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A2");
    },
    Error,
    "encode-error: U+A6A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A3");
    },
    Error,
    "encode-error: U+A6A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A4");
    },
    Error,
    "encode-error: U+A6A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A5");
    },
    Error,
    "encode-error: U+A6A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A6");
    },
    Error,
    "encode-error: U+A6A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A7");
    },
    Error,
    "encode-error: U+A6A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A8");
    },
    Error,
    "encode-error: U+A6A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6A9");
    },
    Error,
    "encode-error: U+A6A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6AA");
    },
    Error,
    "encode-error: U+A6AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6AB");
    },
    Error,
    "encode-error: U+A6AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6AC");
    },
    Error,
    "encode-error: U+A6AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6AD");
    },
    Error,
    "encode-error: U+A6AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6AE");
    },
    Error,
    "encode-error: U+A6AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6AF");
    },
    Error,
    "encode-error: U+A6AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B0");
    },
    Error,
    "encode-error: U+A6B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B1");
    },
    Error,
    "encode-error: U+A6B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B2");
    },
    Error,
    "encode-error: U+A6B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B3");
    },
    Error,
    "encode-error: U+A6B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B4");
    },
    Error,
    "encode-error: U+A6B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B5");
    },
    Error,
    "encode-error: U+A6B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B6");
    },
    Error,
    "encode-error: U+A6B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B7");
    },
    Error,
    "encode-error: U+A6B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B8");
    },
    Error,
    "encode-error: U+A6B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6B9");
    },
    Error,
    "encode-error: U+A6B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6BA");
    },
    Error,
    "encode-error: U+A6BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6BB");
    },
    Error,
    "encode-error: U+A6BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6BC");
    },
    Error,
    "encode-error: U+A6BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6BD");
    },
    Error,
    "encode-error: U+A6BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6BE");
    },
    Error,
    "encode-error: U+A6BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6BF");
    },
    Error,
    "encode-error: U+A6BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C0");
    },
    Error,
    "encode-error: U+A6C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C1");
    },
    Error,
    "encode-error: U+A6C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C2");
    },
    Error,
    "encode-error: U+A6C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C3");
    },
    Error,
    "encode-error: U+A6C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C4");
    },
    Error,
    "encode-error: U+A6C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C5");
    },
    Error,
    "encode-error: U+A6C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C6");
    },
    Error,
    "encode-error: U+A6C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C7");
    },
    Error,
    "encode-error: U+A6C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C8");
    },
    Error,
    "encode-error: U+A6C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6C9");
    },
    Error,
    "encode-error: U+A6C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6CA");
    },
    Error,
    "encode-error: U+A6CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6CB");
    },
    Error,
    "encode-error: U+A6CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6CC");
    },
    Error,
    "encode-error: U+A6CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6CD");
    },
    Error,
    "encode-error: U+A6CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6CE");
    },
    Error,
    "encode-error: U+A6CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6CF");
    },
    Error,
    "encode-error: U+A6CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D0");
    },
    Error,
    "encode-error: U+A6D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D1");
    },
    Error,
    "encode-error: U+A6D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D2");
    },
    Error,
    "encode-error: U+A6D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D3");
    },
    Error,
    "encode-error: U+A6D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D4");
    },
    Error,
    "encode-error: U+A6D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D5");
    },
    Error,
    "encode-error: U+A6D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D6");
    },
    Error,
    "encode-error: U+A6D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D7");
    },
    Error,
    "encode-error: U+A6D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D8");
    },
    Error,
    "encode-error: U+A6D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6D9");
    },
    Error,
    "encode-error: U+A6D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6DA");
    },
    Error,
    "encode-error: U+A6DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6DB");
    },
    Error,
    "encode-error: U+A6DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6DC");
    },
    Error,
    "encode-error: U+A6DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6DD");
    },
    Error,
    "encode-error: U+A6DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6DE");
    },
    Error,
    "encode-error: U+A6DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6DF");
    },
    Error,
    "encode-error: U+A6DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E0");
    },
    Error,
    "encode-error: U+A6E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E1");
    },
    Error,
    "encode-error: U+A6E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E2");
    },
    Error,
    "encode-error: U+A6E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E3");
    },
    Error,
    "encode-error: U+A6E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E4");
    },
    Error,
    "encode-error: U+A6E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E5");
    },
    Error,
    "encode-error: U+A6E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E6");
    },
    Error,
    "encode-error: U+A6E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E7");
    },
    Error,
    "encode-error: U+A6E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E8");
    },
    Error,
    "encode-error: U+A6E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6E9");
    },
    Error,
    "encode-error: U+A6E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6EA");
    },
    Error,
    "encode-error: U+A6EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6EB");
    },
    Error,
    "encode-error: U+A6EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6EC");
    },
    Error,
    "encode-error: U+A6EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6ED");
    },
    Error,
    "encode-error: U+A6ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6EE");
    },
    Error,
    "encode-error: U+A6EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6EF");
    },
    Error,
    "encode-error: U+A6EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F0");
    },
    Error,
    "encode-error: U+A6F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F1");
    },
    Error,
    "encode-error: U+A6F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F2");
    },
    Error,
    "encode-error: U+A6F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F3");
    },
    Error,
    "encode-error: U+A6F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F4");
    },
    Error,
    "encode-error: U+A6F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F5");
    },
    Error,
    "encode-error: U+A6F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F6");
    },
    Error,
    "encode-error: U+A6F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F7");
    },
    Error,
    "encode-error: U+A6F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F8");
    },
    Error,
    "encode-error: U+A6F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6F9");
    },
    Error,
    "encode-error: U+A6F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6FA");
    },
    Error,
    "encode-error: U+A6FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6FB");
    },
    Error,
    "encode-error: U+A6FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6FC");
    },
    Error,
    "encode-error: U+A6FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6FD");
    },
    Error,
    "encode-error: U+A6FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6FE");
    },
    Error,
    "encode-error: U+A6FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA6FF");
    },
    Error,
    "encode-error: U+A6FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA700");
    },
    Error,
    "encode-error: U+A700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA701");
    },
    Error,
    "encode-error: U+A701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA702");
    },
    Error,
    "encode-error: U+A702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA703");
    },
    Error,
    "encode-error: U+A703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA704");
    },
    Error,
    "encode-error: U+A704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA705");
    },
    Error,
    "encode-error: U+A705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA706");
    },
    Error,
    "encode-error: U+A706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA707");
    },
    Error,
    "encode-error: U+A707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA708");
    },
    Error,
    "encode-error: U+A708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA709");
    },
    Error,
    "encode-error: U+A709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA70A");
    },
    Error,
    "encode-error: U+A70A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA70B");
    },
    Error,
    "encode-error: U+A70B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA70C");
    },
    Error,
    "encode-error: U+A70C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA70D");
    },
    Error,
    "encode-error: U+A70D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA70E");
    },
    Error,
    "encode-error: U+A70E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA70F");
    },
    Error,
    "encode-error: U+A70F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA710");
    },
    Error,
    "encode-error: U+A710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA711");
    },
    Error,
    "encode-error: U+A711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA712");
    },
    Error,
    "encode-error: U+A712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA713");
    },
    Error,
    "encode-error: U+A713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA714");
    },
    Error,
    "encode-error: U+A714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA715");
    },
    Error,
    "encode-error: U+A715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA716");
    },
    Error,
    "encode-error: U+A716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA717");
    },
    Error,
    "encode-error: U+A717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA718");
    },
    Error,
    "encode-error: U+A718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA719");
    },
    Error,
    "encode-error: U+A719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA71A");
    },
    Error,
    "encode-error: U+A71A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA71B");
    },
    Error,
    "encode-error: U+A71B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA71C");
    },
    Error,
    "encode-error: U+A71C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA71D");
    },
    Error,
    "encode-error: U+A71D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA71E");
    },
    Error,
    "encode-error: U+A71E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA71F");
    },
    Error,
    "encode-error: U+A71F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA720");
    },
    Error,
    "encode-error: U+A720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA721");
    },
    Error,
    "encode-error: U+A721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA722");
    },
    Error,
    "encode-error: U+A722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA723");
    },
    Error,
    "encode-error: U+A723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA724");
    },
    Error,
    "encode-error: U+A724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA725");
    },
    Error,
    "encode-error: U+A725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA726");
    },
    Error,
    "encode-error: U+A726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA727");
    },
    Error,
    "encode-error: U+A727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA728");
    },
    Error,
    "encode-error: U+A728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA729");
    },
    Error,
    "encode-error: U+A729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA72A");
    },
    Error,
    "encode-error: U+A72A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA72B");
    },
    Error,
    "encode-error: U+A72B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA72C");
    },
    Error,
    "encode-error: U+A72C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA72D");
    },
    Error,
    "encode-error: U+A72D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA72E");
    },
    Error,
    "encode-error: U+A72E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA72F");
    },
    Error,
    "encode-error: U+A72F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA730");
    },
    Error,
    "encode-error: U+A730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA731");
    },
    Error,
    "encode-error: U+A731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA732");
    },
    Error,
    "encode-error: U+A732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA733");
    },
    Error,
    "encode-error: U+A733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA734");
    },
    Error,
    "encode-error: U+A734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA735");
    },
    Error,
    "encode-error: U+A735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA736");
    },
    Error,
    "encode-error: U+A736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA737");
    },
    Error,
    "encode-error: U+A737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA738");
    },
    Error,
    "encode-error: U+A738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA739");
    },
    Error,
    "encode-error: U+A739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA73A");
    },
    Error,
    "encode-error: U+A73A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA73B");
    },
    Error,
    "encode-error: U+A73B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA73C");
    },
    Error,
    "encode-error: U+A73C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA73D");
    },
    Error,
    "encode-error: U+A73D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA73E");
    },
    Error,
    "encode-error: U+A73E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA73F");
    },
    Error,
    "encode-error: U+A73F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA740");
    },
    Error,
    "encode-error: U+A740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA741");
    },
    Error,
    "encode-error: U+A741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA742");
    },
    Error,
    "encode-error: U+A742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA743");
    },
    Error,
    "encode-error: U+A743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA744");
    },
    Error,
    "encode-error: U+A744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA745");
    },
    Error,
    "encode-error: U+A745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA746");
    },
    Error,
    "encode-error: U+A746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA747");
    },
    Error,
    "encode-error: U+A747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA748");
    },
    Error,
    "encode-error: U+A748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA749");
    },
    Error,
    "encode-error: U+A749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA74A");
    },
    Error,
    "encode-error: U+A74A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA74B");
    },
    Error,
    "encode-error: U+A74B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA74C");
    },
    Error,
    "encode-error: U+A74C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA74D");
    },
    Error,
    "encode-error: U+A74D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA74E");
    },
    Error,
    "encode-error: U+A74E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA74F");
    },
    Error,
    "encode-error: U+A74F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA750");
    },
    Error,
    "encode-error: U+A750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA751");
    },
    Error,
    "encode-error: U+A751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA752");
    },
    Error,
    "encode-error: U+A752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA753");
    },
    Error,
    "encode-error: U+A753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA754");
    },
    Error,
    "encode-error: U+A754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA755");
    },
    Error,
    "encode-error: U+A755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA756");
    },
    Error,
    "encode-error: U+A756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA757");
    },
    Error,
    "encode-error: U+A757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA758");
    },
    Error,
    "encode-error: U+A758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA759");
    },
    Error,
    "encode-error: U+A759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA75A");
    },
    Error,
    "encode-error: U+A75A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA75B");
    },
    Error,
    "encode-error: U+A75B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA75C");
    },
    Error,
    "encode-error: U+A75C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA75D");
    },
    Error,
    "encode-error: U+A75D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA75E");
    },
    Error,
    "encode-error: U+A75E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA75F");
    },
    Error,
    "encode-error: U+A75F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA760");
    },
    Error,
    "encode-error: U+A760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA761");
    },
    Error,
    "encode-error: U+A761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA762");
    },
    Error,
    "encode-error: U+A762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA763");
    },
    Error,
    "encode-error: U+A763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA764");
    },
    Error,
    "encode-error: U+A764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA765");
    },
    Error,
    "encode-error: U+A765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA766");
    },
    Error,
    "encode-error: U+A766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA767");
    },
    Error,
    "encode-error: U+A767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA768");
    },
    Error,
    "encode-error: U+A768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA769");
    },
    Error,
    "encode-error: U+A769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA76A");
    },
    Error,
    "encode-error: U+A76A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA76B");
    },
    Error,
    "encode-error: U+A76B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA76C");
    },
    Error,
    "encode-error: U+A76C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA76D");
    },
    Error,
    "encode-error: U+A76D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA76E");
    },
    Error,
    "encode-error: U+A76E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA76F");
    },
    Error,
    "encode-error: U+A76F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA770");
    },
    Error,
    "encode-error: U+A770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA771");
    },
    Error,
    "encode-error: U+A771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA772");
    },
    Error,
    "encode-error: U+A772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA773");
    },
    Error,
    "encode-error: U+A773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA774");
    },
    Error,
    "encode-error: U+A774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA775");
    },
    Error,
    "encode-error: U+A775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA776");
    },
    Error,
    "encode-error: U+A776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA777");
    },
    Error,
    "encode-error: U+A777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA778");
    },
    Error,
    "encode-error: U+A778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA779");
    },
    Error,
    "encode-error: U+A779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA77A");
    },
    Error,
    "encode-error: U+A77A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA77B");
    },
    Error,
    "encode-error: U+A77B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA77C");
    },
    Error,
    "encode-error: U+A77C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA77D");
    },
    Error,
    "encode-error: U+A77D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA77E");
    },
    Error,
    "encode-error: U+A77E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA77F");
    },
    Error,
    "encode-error: U+A77F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA780");
    },
    Error,
    "encode-error: U+A780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA781");
    },
    Error,
    "encode-error: U+A781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA782");
    },
    Error,
    "encode-error: U+A782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA783");
    },
    Error,
    "encode-error: U+A783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA784");
    },
    Error,
    "encode-error: U+A784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA785");
    },
    Error,
    "encode-error: U+A785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA786");
    },
    Error,
    "encode-error: U+A786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA787");
    },
    Error,
    "encode-error: U+A787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA788");
    },
    Error,
    "encode-error: U+A788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA789");
    },
    Error,
    "encode-error: U+A789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA78A");
    },
    Error,
    "encode-error: U+A78A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA78B");
    },
    Error,
    "encode-error: U+A78B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA78C");
    },
    Error,
    "encode-error: U+A78C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA78D");
    },
    Error,
    "encode-error: U+A78D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA78E");
    },
    Error,
    "encode-error: U+A78E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA78F");
    },
    Error,
    "encode-error: U+A78F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA790");
    },
    Error,
    "encode-error: U+A790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA791");
    },
    Error,
    "encode-error: U+A791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA792");
    },
    Error,
    "encode-error: U+A792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA793");
    },
    Error,
    "encode-error: U+A793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA794");
    },
    Error,
    "encode-error: U+A794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA795");
    },
    Error,
    "encode-error: U+A795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA796");
    },
    Error,
    "encode-error: U+A796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA797");
    },
    Error,
    "encode-error: U+A797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA798");
    },
    Error,
    "encode-error: U+A798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA799");
    },
    Error,
    "encode-error: U+A799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA79A");
    },
    Error,
    "encode-error: U+A79A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA79B");
    },
    Error,
    "encode-error: U+A79B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA79C");
    },
    Error,
    "encode-error: U+A79C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA79D");
    },
    Error,
    "encode-error: U+A79D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA79E");
    },
    Error,
    "encode-error: U+A79E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA79F");
    },
    Error,
    "encode-error: U+A79F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A0");
    },
    Error,
    "encode-error: U+A7A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A1");
    },
    Error,
    "encode-error: U+A7A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A2");
    },
    Error,
    "encode-error: U+A7A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A3");
    },
    Error,
    "encode-error: U+A7A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A4");
    },
    Error,
    "encode-error: U+A7A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A5");
    },
    Error,
    "encode-error: U+A7A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A6");
    },
    Error,
    "encode-error: U+A7A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A7");
    },
    Error,
    "encode-error: U+A7A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A8");
    },
    Error,
    "encode-error: U+A7A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7A9");
    },
    Error,
    "encode-error: U+A7A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7AA");
    },
    Error,
    "encode-error: U+A7AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7AB");
    },
    Error,
    "encode-error: U+A7AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7AC");
    },
    Error,
    "encode-error: U+A7AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7AD");
    },
    Error,
    "encode-error: U+A7AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7AE");
    },
    Error,
    "encode-error: U+A7AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7AF");
    },
    Error,
    "encode-error: U+A7AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B0");
    },
    Error,
    "encode-error: U+A7B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B1");
    },
    Error,
    "encode-error: U+A7B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B2");
    },
    Error,
    "encode-error: U+A7B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B3");
    },
    Error,
    "encode-error: U+A7B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B4");
    },
    Error,
    "encode-error: U+A7B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B5");
    },
    Error,
    "encode-error: U+A7B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B6");
    },
    Error,
    "encode-error: U+A7B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B7");
    },
    Error,
    "encode-error: U+A7B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B8");
    },
    Error,
    "encode-error: U+A7B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7B9");
    },
    Error,
    "encode-error: U+A7B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7BA");
    },
    Error,
    "encode-error: U+A7BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7BB");
    },
    Error,
    "encode-error: U+A7BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7BC");
    },
    Error,
    "encode-error: U+A7BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7BD");
    },
    Error,
    "encode-error: U+A7BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7BE");
    },
    Error,
    "encode-error: U+A7BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7BF");
    },
    Error,
    "encode-error: U+A7BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C0");
    },
    Error,
    "encode-error: U+A7C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C1");
    },
    Error,
    "encode-error: U+A7C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C2");
    },
    Error,
    "encode-error: U+A7C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C3");
    },
    Error,
    "encode-error: U+A7C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C4");
    },
    Error,
    "encode-error: U+A7C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C5");
    },
    Error,
    "encode-error: U+A7C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C6");
    },
    Error,
    "encode-error: U+A7C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C7");
    },
    Error,
    "encode-error: U+A7C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C8");
    },
    Error,
    "encode-error: U+A7C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7C9");
    },
    Error,
    "encode-error: U+A7C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7CA");
    },
    Error,
    "encode-error: U+A7CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7CB");
    },
    Error,
    "encode-error: U+A7CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7CC");
    },
    Error,
    "encode-error: U+A7CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7CD");
    },
    Error,
    "encode-error: U+A7CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7CE");
    },
    Error,
    "encode-error: U+A7CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7CF");
    },
    Error,
    "encode-error: U+A7CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D0");
    },
    Error,
    "encode-error: U+A7D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D1");
    },
    Error,
    "encode-error: U+A7D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D2");
    },
    Error,
    "encode-error: U+A7D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D3");
    },
    Error,
    "encode-error: U+A7D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D4");
    },
    Error,
    "encode-error: U+A7D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D5");
    },
    Error,
    "encode-error: U+A7D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D6");
    },
    Error,
    "encode-error: U+A7D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D7");
    },
    Error,
    "encode-error: U+A7D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D8");
    },
    Error,
    "encode-error: U+A7D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7D9");
    },
    Error,
    "encode-error: U+A7D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7DA");
    },
    Error,
    "encode-error: U+A7DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7DB");
    },
    Error,
    "encode-error: U+A7DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7DC");
    },
    Error,
    "encode-error: U+A7DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7DD");
    },
    Error,
    "encode-error: U+A7DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7DE");
    },
    Error,
    "encode-error: U+A7DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7DF");
    },
    Error,
    "encode-error: U+A7DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E0");
    },
    Error,
    "encode-error: U+A7E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E1");
    },
    Error,
    "encode-error: U+A7E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E2");
    },
    Error,
    "encode-error: U+A7E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E3");
    },
    Error,
    "encode-error: U+A7E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E4");
    },
    Error,
    "encode-error: U+A7E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E5");
    },
    Error,
    "encode-error: U+A7E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E6");
    },
    Error,
    "encode-error: U+A7E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E7");
    },
    Error,
    "encode-error: U+A7E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E8");
    },
    Error,
    "encode-error: U+A7E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7E9");
    },
    Error,
    "encode-error: U+A7E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7EA");
    },
    Error,
    "encode-error: U+A7EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7EB");
    },
    Error,
    "encode-error: U+A7EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7EC");
    },
    Error,
    "encode-error: U+A7EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7ED");
    },
    Error,
    "encode-error: U+A7ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7EE");
    },
    Error,
    "encode-error: U+A7EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7EF");
    },
    Error,
    "encode-error: U+A7EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F0");
    },
    Error,
    "encode-error: U+A7F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F1");
    },
    Error,
    "encode-error: U+A7F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F2");
    },
    Error,
    "encode-error: U+A7F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F3");
    },
    Error,
    "encode-error: U+A7F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F4");
    },
    Error,
    "encode-error: U+A7F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F5");
    },
    Error,
    "encode-error: U+A7F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F6");
    },
    Error,
    "encode-error: U+A7F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F7");
    },
    Error,
    "encode-error: U+A7F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F8");
    },
    Error,
    "encode-error: U+A7F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7F9");
    },
    Error,
    "encode-error: U+A7F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7FA");
    },
    Error,
    "encode-error: U+A7FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7FB");
    },
    Error,
    "encode-error: U+A7FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7FC");
    },
    Error,
    "encode-error: U+A7FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7FD");
    },
    Error,
    "encode-error: U+A7FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7FE");
    },
    Error,
    "encode-error: U+A7FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA7FF");
    },
    Error,
    "encode-error: U+A7FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA800");
    },
    Error,
    "encode-error: U+A800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA801");
    },
    Error,
    "encode-error: U+A801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA802");
    },
    Error,
    "encode-error: U+A802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA803");
    },
    Error,
    "encode-error: U+A803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA804");
    },
    Error,
    "encode-error: U+A804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA805");
    },
    Error,
    "encode-error: U+A805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA806");
    },
    Error,
    "encode-error: U+A806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA807");
    },
    Error,
    "encode-error: U+A807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA808");
    },
    Error,
    "encode-error: U+A808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA809");
    },
    Error,
    "encode-error: U+A809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA80A");
    },
    Error,
    "encode-error: U+A80A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA80B");
    },
    Error,
    "encode-error: U+A80B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA80C");
    },
    Error,
    "encode-error: U+A80C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA80D");
    },
    Error,
    "encode-error: U+A80D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA80E");
    },
    Error,
    "encode-error: U+A80E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA80F");
    },
    Error,
    "encode-error: U+A80F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA810");
    },
    Error,
    "encode-error: U+A810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA811");
    },
    Error,
    "encode-error: U+A811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA812");
    },
    Error,
    "encode-error: U+A812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA813");
    },
    Error,
    "encode-error: U+A813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA814");
    },
    Error,
    "encode-error: U+A814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA815");
    },
    Error,
    "encode-error: U+A815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA816");
    },
    Error,
    "encode-error: U+A816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA817");
    },
    Error,
    "encode-error: U+A817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA818");
    },
    Error,
    "encode-error: U+A818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA819");
    },
    Error,
    "encode-error: U+A819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA81A");
    },
    Error,
    "encode-error: U+A81A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA81B");
    },
    Error,
    "encode-error: U+A81B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA81C");
    },
    Error,
    "encode-error: U+A81C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA81D");
    },
    Error,
    "encode-error: U+A81D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA81E");
    },
    Error,
    "encode-error: U+A81E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA81F");
    },
    Error,
    "encode-error: U+A81F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA820");
    },
    Error,
    "encode-error: U+A820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA821");
    },
    Error,
    "encode-error: U+A821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA822");
    },
    Error,
    "encode-error: U+A822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA823");
    },
    Error,
    "encode-error: U+A823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA824");
    },
    Error,
    "encode-error: U+A824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA825");
    },
    Error,
    "encode-error: U+A825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA826");
    },
    Error,
    "encode-error: U+A826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA827");
    },
    Error,
    "encode-error: U+A827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA828");
    },
    Error,
    "encode-error: U+A828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA829");
    },
    Error,
    "encode-error: U+A829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA82A");
    },
    Error,
    "encode-error: U+A82A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA82B");
    },
    Error,
    "encode-error: U+A82B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA82C");
    },
    Error,
    "encode-error: U+A82C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA82D");
    },
    Error,
    "encode-error: U+A82D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA82E");
    },
    Error,
    "encode-error: U+A82E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA82F");
    },
    Error,
    "encode-error: U+A82F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA830");
    },
    Error,
    "encode-error: U+A830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA831");
    },
    Error,
    "encode-error: U+A831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA832");
    },
    Error,
    "encode-error: U+A832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA833");
    },
    Error,
    "encode-error: U+A833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA834");
    },
    Error,
    "encode-error: U+A834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA835");
    },
    Error,
    "encode-error: U+A835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA836");
    },
    Error,
    "encode-error: U+A836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA837");
    },
    Error,
    "encode-error: U+A837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA838");
    },
    Error,
    "encode-error: U+A838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA839");
    },
    Error,
    "encode-error: U+A839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA83A");
    },
    Error,
    "encode-error: U+A83A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA83B");
    },
    Error,
    "encode-error: U+A83B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA83C");
    },
    Error,
    "encode-error: U+A83C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA83D");
    },
    Error,
    "encode-error: U+A83D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA83E");
    },
    Error,
    "encode-error: U+A83E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA83F");
    },
    Error,
    "encode-error: U+A83F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA840");
    },
    Error,
    "encode-error: U+A840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA841");
    },
    Error,
    "encode-error: U+A841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA842");
    },
    Error,
    "encode-error: U+A842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA843");
    },
    Error,
    "encode-error: U+A843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA844");
    },
    Error,
    "encode-error: U+A844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA845");
    },
    Error,
    "encode-error: U+A845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA846");
    },
    Error,
    "encode-error: U+A846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA847");
    },
    Error,
    "encode-error: U+A847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA848");
    },
    Error,
    "encode-error: U+A848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA849");
    },
    Error,
    "encode-error: U+A849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA84A");
    },
    Error,
    "encode-error: U+A84A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA84B");
    },
    Error,
    "encode-error: U+A84B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA84C");
    },
    Error,
    "encode-error: U+A84C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA84D");
    },
    Error,
    "encode-error: U+A84D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA84E");
    },
    Error,
    "encode-error: U+A84E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA84F");
    },
    Error,
    "encode-error: U+A84F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA850");
    },
    Error,
    "encode-error: U+A850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA851");
    },
    Error,
    "encode-error: U+A851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA852");
    },
    Error,
    "encode-error: U+A852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA853");
    },
    Error,
    "encode-error: U+A853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA854");
    },
    Error,
    "encode-error: U+A854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA855");
    },
    Error,
    "encode-error: U+A855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA856");
    },
    Error,
    "encode-error: U+A856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA857");
    },
    Error,
    "encode-error: U+A857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA858");
    },
    Error,
    "encode-error: U+A858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA859");
    },
    Error,
    "encode-error: U+A859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA85A");
    },
    Error,
    "encode-error: U+A85A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA85B");
    },
    Error,
    "encode-error: U+A85B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA85C");
    },
    Error,
    "encode-error: U+A85C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA85D");
    },
    Error,
    "encode-error: U+A85D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA85E");
    },
    Error,
    "encode-error: U+A85E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA85F");
    },
    Error,
    "encode-error: U+A85F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA860");
    },
    Error,
    "encode-error: U+A860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA861");
    },
    Error,
    "encode-error: U+A861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA862");
    },
    Error,
    "encode-error: U+A862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA863");
    },
    Error,
    "encode-error: U+A863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA864");
    },
    Error,
    "encode-error: U+A864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA865");
    },
    Error,
    "encode-error: U+A865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA866");
    },
    Error,
    "encode-error: U+A866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA867");
    },
    Error,
    "encode-error: U+A867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA868");
    },
    Error,
    "encode-error: U+A868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA869");
    },
    Error,
    "encode-error: U+A869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA86A");
    },
    Error,
    "encode-error: U+A86A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA86B");
    },
    Error,
    "encode-error: U+A86B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA86C");
    },
    Error,
    "encode-error: U+A86C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA86D");
    },
    Error,
    "encode-error: U+A86D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA86E");
    },
    Error,
    "encode-error: U+A86E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA86F");
    },
    Error,
    "encode-error: U+A86F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA870");
    },
    Error,
    "encode-error: U+A870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA871");
    },
    Error,
    "encode-error: U+A871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA872");
    },
    Error,
    "encode-error: U+A872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA873");
    },
    Error,
    "encode-error: U+A873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA874");
    },
    Error,
    "encode-error: U+A874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA875");
    },
    Error,
    "encode-error: U+A875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA876");
    },
    Error,
    "encode-error: U+A876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA877");
    },
    Error,
    "encode-error: U+A877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA878");
    },
    Error,
    "encode-error: U+A878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA879");
    },
    Error,
    "encode-error: U+A879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA87A");
    },
    Error,
    "encode-error: U+A87A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA87B");
    },
    Error,
    "encode-error: U+A87B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA87C");
    },
    Error,
    "encode-error: U+A87C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA87D");
    },
    Error,
    "encode-error: U+A87D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA87E");
    },
    Error,
    "encode-error: U+A87E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA87F");
    },
    Error,
    "encode-error: U+A87F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA880");
    },
    Error,
    "encode-error: U+A880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA881");
    },
    Error,
    "encode-error: U+A881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA882");
    },
    Error,
    "encode-error: U+A882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA883");
    },
    Error,
    "encode-error: U+A883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA884");
    },
    Error,
    "encode-error: U+A884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA885");
    },
    Error,
    "encode-error: U+A885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA886");
    },
    Error,
    "encode-error: U+A886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA887");
    },
    Error,
    "encode-error: U+A887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA888");
    },
    Error,
    "encode-error: U+A888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA889");
    },
    Error,
    "encode-error: U+A889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA88A");
    },
    Error,
    "encode-error: U+A88A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA88B");
    },
    Error,
    "encode-error: U+A88B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA88C");
    },
    Error,
    "encode-error: U+A88C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA88D");
    },
    Error,
    "encode-error: U+A88D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA88E");
    },
    Error,
    "encode-error: U+A88E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA88F");
    },
    Error,
    "encode-error: U+A88F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA890");
    },
    Error,
    "encode-error: U+A890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA891");
    },
    Error,
    "encode-error: U+A891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA892");
    },
    Error,
    "encode-error: U+A892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA893");
    },
    Error,
    "encode-error: U+A893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA894");
    },
    Error,
    "encode-error: U+A894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA895");
    },
    Error,
    "encode-error: U+A895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA896");
    },
    Error,
    "encode-error: U+A896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA897");
    },
    Error,
    "encode-error: U+A897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA898");
    },
    Error,
    "encode-error: U+A898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA899");
    },
    Error,
    "encode-error: U+A899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA89A");
    },
    Error,
    "encode-error: U+A89A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA89B");
    },
    Error,
    "encode-error: U+A89B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA89C");
    },
    Error,
    "encode-error: U+A89C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA89D");
    },
    Error,
    "encode-error: U+A89D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA89E");
    },
    Error,
    "encode-error: U+A89E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA89F");
    },
    Error,
    "encode-error: U+A89F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A0");
    },
    Error,
    "encode-error: U+A8A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A1");
    },
    Error,
    "encode-error: U+A8A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A2");
    },
    Error,
    "encode-error: U+A8A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A3");
    },
    Error,
    "encode-error: U+A8A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A4");
    },
    Error,
    "encode-error: U+A8A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A5");
    },
    Error,
    "encode-error: U+A8A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A6");
    },
    Error,
    "encode-error: U+A8A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A7");
    },
    Error,
    "encode-error: U+A8A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A8");
    },
    Error,
    "encode-error: U+A8A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8A9");
    },
    Error,
    "encode-error: U+A8A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8AA");
    },
    Error,
    "encode-error: U+A8AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8AB");
    },
    Error,
    "encode-error: U+A8AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8AC");
    },
    Error,
    "encode-error: U+A8AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8AD");
    },
    Error,
    "encode-error: U+A8AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8AE");
    },
    Error,
    "encode-error: U+A8AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8AF");
    },
    Error,
    "encode-error: U+A8AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B0");
    },
    Error,
    "encode-error: U+A8B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B1");
    },
    Error,
    "encode-error: U+A8B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B2");
    },
    Error,
    "encode-error: U+A8B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B3");
    },
    Error,
    "encode-error: U+A8B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B4");
    },
    Error,
    "encode-error: U+A8B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B5");
    },
    Error,
    "encode-error: U+A8B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B6");
    },
    Error,
    "encode-error: U+A8B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B7");
    },
    Error,
    "encode-error: U+A8B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B8");
    },
    Error,
    "encode-error: U+A8B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8B9");
    },
    Error,
    "encode-error: U+A8B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8BA");
    },
    Error,
    "encode-error: U+A8BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8BB");
    },
    Error,
    "encode-error: U+A8BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8BC");
    },
    Error,
    "encode-error: U+A8BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8BD");
    },
    Error,
    "encode-error: U+A8BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8BE");
    },
    Error,
    "encode-error: U+A8BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8BF");
    },
    Error,
    "encode-error: U+A8BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C0");
    },
    Error,
    "encode-error: U+A8C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C1");
    },
    Error,
    "encode-error: U+A8C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C2");
    },
    Error,
    "encode-error: U+A8C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C3");
    },
    Error,
    "encode-error: U+A8C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C4");
    },
    Error,
    "encode-error: U+A8C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C5");
    },
    Error,
    "encode-error: U+A8C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C6");
    },
    Error,
    "encode-error: U+A8C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C7");
    },
    Error,
    "encode-error: U+A8C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C8");
    },
    Error,
    "encode-error: U+A8C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8C9");
    },
    Error,
    "encode-error: U+A8C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8CA");
    },
    Error,
    "encode-error: U+A8CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8CB");
    },
    Error,
    "encode-error: U+A8CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8CC");
    },
    Error,
    "encode-error: U+A8CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8CD");
    },
    Error,
    "encode-error: U+A8CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8CE");
    },
    Error,
    "encode-error: U+A8CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8CF");
    },
    Error,
    "encode-error: U+A8CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D0");
    },
    Error,
    "encode-error: U+A8D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D1");
    },
    Error,
    "encode-error: U+A8D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D2");
    },
    Error,
    "encode-error: U+A8D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D3");
    },
    Error,
    "encode-error: U+A8D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D4");
    },
    Error,
    "encode-error: U+A8D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D5");
    },
    Error,
    "encode-error: U+A8D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D6");
    },
    Error,
    "encode-error: U+A8D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D7");
    },
    Error,
    "encode-error: U+A8D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D8");
    },
    Error,
    "encode-error: U+A8D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8D9");
    },
    Error,
    "encode-error: U+A8D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8DA");
    },
    Error,
    "encode-error: U+A8DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8DB");
    },
    Error,
    "encode-error: U+A8DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8DC");
    },
    Error,
    "encode-error: U+A8DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8DD");
    },
    Error,
    "encode-error: U+A8DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8DE");
    },
    Error,
    "encode-error: U+A8DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8DF");
    },
    Error,
    "encode-error: U+A8DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E0");
    },
    Error,
    "encode-error: U+A8E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E1");
    },
    Error,
    "encode-error: U+A8E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E2");
    },
    Error,
    "encode-error: U+A8E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E3");
    },
    Error,
    "encode-error: U+A8E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E4");
    },
    Error,
    "encode-error: U+A8E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E5");
    },
    Error,
    "encode-error: U+A8E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E6");
    },
    Error,
    "encode-error: U+A8E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E7");
    },
    Error,
    "encode-error: U+A8E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E8");
    },
    Error,
    "encode-error: U+A8E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8E9");
    },
    Error,
    "encode-error: U+A8E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8EA");
    },
    Error,
    "encode-error: U+A8EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8EB");
    },
    Error,
    "encode-error: U+A8EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8EC");
    },
    Error,
    "encode-error: U+A8EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8ED");
    },
    Error,
    "encode-error: U+A8ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8EE");
    },
    Error,
    "encode-error: U+A8EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8EF");
    },
    Error,
    "encode-error: U+A8EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F0");
    },
    Error,
    "encode-error: U+A8F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F1");
    },
    Error,
    "encode-error: U+A8F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F2");
    },
    Error,
    "encode-error: U+A8F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F3");
    },
    Error,
    "encode-error: U+A8F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F4");
    },
    Error,
    "encode-error: U+A8F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F5");
    },
    Error,
    "encode-error: U+A8F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F6");
    },
    Error,
    "encode-error: U+A8F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F7");
    },
    Error,
    "encode-error: U+A8F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F8");
    },
    Error,
    "encode-error: U+A8F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8F9");
    },
    Error,
    "encode-error: U+A8F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8FA");
    },
    Error,
    "encode-error: U+A8FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8FB");
    },
    Error,
    "encode-error: U+A8FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8FC");
    },
    Error,
    "encode-error: U+A8FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8FD");
    },
    Error,
    "encode-error: U+A8FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8FE");
    },
    Error,
    "encode-error: U+A8FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA8FF");
    },
    Error,
    "encode-error: U+A8FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA900");
    },
    Error,
    "encode-error: U+A900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA901");
    },
    Error,
    "encode-error: U+A901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA902");
    },
    Error,
    "encode-error: U+A902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA903");
    },
    Error,
    "encode-error: U+A903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA904");
    },
    Error,
    "encode-error: U+A904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA905");
    },
    Error,
    "encode-error: U+A905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA906");
    },
    Error,
    "encode-error: U+A906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA907");
    },
    Error,
    "encode-error: U+A907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA908");
    },
    Error,
    "encode-error: U+A908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA909");
    },
    Error,
    "encode-error: U+A909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA90A");
    },
    Error,
    "encode-error: U+A90A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA90B");
    },
    Error,
    "encode-error: U+A90B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA90C");
    },
    Error,
    "encode-error: U+A90C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA90D");
    },
    Error,
    "encode-error: U+A90D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA90E");
    },
    Error,
    "encode-error: U+A90E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA90F");
    },
    Error,
    "encode-error: U+A90F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA910");
    },
    Error,
    "encode-error: U+A910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA911");
    },
    Error,
    "encode-error: U+A911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA912");
    },
    Error,
    "encode-error: U+A912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA913");
    },
    Error,
    "encode-error: U+A913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA914");
    },
    Error,
    "encode-error: U+A914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA915");
    },
    Error,
    "encode-error: U+A915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA916");
    },
    Error,
    "encode-error: U+A916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA917");
    },
    Error,
    "encode-error: U+A917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA918");
    },
    Error,
    "encode-error: U+A918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA919");
    },
    Error,
    "encode-error: U+A919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA91A");
    },
    Error,
    "encode-error: U+A91A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA91B");
    },
    Error,
    "encode-error: U+A91B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA91C");
    },
    Error,
    "encode-error: U+A91C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA91D");
    },
    Error,
    "encode-error: U+A91D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA91E");
    },
    Error,
    "encode-error: U+A91E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA91F");
    },
    Error,
    "encode-error: U+A91F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA920");
    },
    Error,
    "encode-error: U+A920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA921");
    },
    Error,
    "encode-error: U+A921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA922");
    },
    Error,
    "encode-error: U+A922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA923");
    },
    Error,
    "encode-error: U+A923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA924");
    },
    Error,
    "encode-error: U+A924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA925");
    },
    Error,
    "encode-error: U+A925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA926");
    },
    Error,
    "encode-error: U+A926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA927");
    },
    Error,
    "encode-error: U+A927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA928");
    },
    Error,
    "encode-error: U+A928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA929");
    },
    Error,
    "encode-error: U+A929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA92A");
    },
    Error,
    "encode-error: U+A92A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA92B");
    },
    Error,
    "encode-error: U+A92B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA92C");
    },
    Error,
    "encode-error: U+A92C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA92D");
    },
    Error,
    "encode-error: U+A92D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA92E");
    },
    Error,
    "encode-error: U+A92E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA92F");
    },
    Error,
    "encode-error: U+A92F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA930");
    },
    Error,
    "encode-error: U+A930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA931");
    },
    Error,
    "encode-error: U+A931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA932");
    },
    Error,
    "encode-error: U+A932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA933");
    },
    Error,
    "encode-error: U+A933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA934");
    },
    Error,
    "encode-error: U+A934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA935");
    },
    Error,
    "encode-error: U+A935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA936");
    },
    Error,
    "encode-error: U+A936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA937");
    },
    Error,
    "encode-error: U+A937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA938");
    },
    Error,
    "encode-error: U+A938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA939");
    },
    Error,
    "encode-error: U+A939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA93A");
    },
    Error,
    "encode-error: U+A93A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA93B");
    },
    Error,
    "encode-error: U+A93B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA93C");
    },
    Error,
    "encode-error: U+A93C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA93D");
    },
    Error,
    "encode-error: U+A93D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA93E");
    },
    Error,
    "encode-error: U+A93E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA93F");
    },
    Error,
    "encode-error: U+A93F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA940");
    },
    Error,
    "encode-error: U+A940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA941");
    },
    Error,
    "encode-error: U+A941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA942");
    },
    Error,
    "encode-error: U+A942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA943");
    },
    Error,
    "encode-error: U+A943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA944");
    },
    Error,
    "encode-error: U+A944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA945");
    },
    Error,
    "encode-error: U+A945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA946");
    },
    Error,
    "encode-error: U+A946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA947");
    },
    Error,
    "encode-error: U+A947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA948");
    },
    Error,
    "encode-error: U+A948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA949");
    },
    Error,
    "encode-error: U+A949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA94A");
    },
    Error,
    "encode-error: U+A94A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA94B");
    },
    Error,
    "encode-error: U+A94B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA94C");
    },
    Error,
    "encode-error: U+A94C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA94D");
    },
    Error,
    "encode-error: U+A94D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA94E");
    },
    Error,
    "encode-error: U+A94E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA94F");
    },
    Error,
    "encode-error: U+A94F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA950");
    },
    Error,
    "encode-error: U+A950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA951");
    },
    Error,
    "encode-error: U+A951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA952");
    },
    Error,
    "encode-error: U+A952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA953");
    },
    Error,
    "encode-error: U+A953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA954");
    },
    Error,
    "encode-error: U+A954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA955");
    },
    Error,
    "encode-error: U+A955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA956");
    },
    Error,
    "encode-error: U+A956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA957");
    },
    Error,
    "encode-error: U+A957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA958");
    },
    Error,
    "encode-error: U+A958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA959");
    },
    Error,
    "encode-error: U+A959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA95A");
    },
    Error,
    "encode-error: U+A95A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA95B");
    },
    Error,
    "encode-error: U+A95B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA95C");
    },
    Error,
    "encode-error: U+A95C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA95D");
    },
    Error,
    "encode-error: U+A95D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA95E");
    },
    Error,
    "encode-error: U+A95E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA95F");
    },
    Error,
    "encode-error: U+A95F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA960");
    },
    Error,
    "encode-error: U+A960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA961");
    },
    Error,
    "encode-error: U+A961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA962");
    },
    Error,
    "encode-error: U+A962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA963");
    },
    Error,
    "encode-error: U+A963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA964");
    },
    Error,
    "encode-error: U+A964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA965");
    },
    Error,
    "encode-error: U+A965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA966");
    },
    Error,
    "encode-error: U+A966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA967");
    },
    Error,
    "encode-error: U+A967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA968");
    },
    Error,
    "encode-error: U+A968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA969");
    },
    Error,
    "encode-error: U+A969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA96A");
    },
    Error,
    "encode-error: U+A96A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA96B");
    },
    Error,
    "encode-error: U+A96B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA96C");
    },
    Error,
    "encode-error: U+A96C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA96D");
    },
    Error,
    "encode-error: U+A96D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA96E");
    },
    Error,
    "encode-error: U+A96E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA96F");
    },
    Error,
    "encode-error: U+A96F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA970");
    },
    Error,
    "encode-error: U+A970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA971");
    },
    Error,
    "encode-error: U+A971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA972");
    },
    Error,
    "encode-error: U+A972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA973");
    },
    Error,
    "encode-error: U+A973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA974");
    },
    Error,
    "encode-error: U+A974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA975");
    },
    Error,
    "encode-error: U+A975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA976");
    },
    Error,
    "encode-error: U+A976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA977");
    },
    Error,
    "encode-error: U+A977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA978");
    },
    Error,
    "encode-error: U+A978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA979");
    },
    Error,
    "encode-error: U+A979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA97A");
    },
    Error,
    "encode-error: U+A97A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA97B");
    },
    Error,
    "encode-error: U+A97B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA97C");
    },
    Error,
    "encode-error: U+A97C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA97D");
    },
    Error,
    "encode-error: U+A97D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA97E");
    },
    Error,
    "encode-error: U+A97E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA97F");
    },
    Error,
    "encode-error: U+A97F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA980");
    },
    Error,
    "encode-error: U+A980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA981");
    },
    Error,
    "encode-error: U+A981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA982");
    },
    Error,
    "encode-error: U+A982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA983");
    },
    Error,
    "encode-error: U+A983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA984");
    },
    Error,
    "encode-error: U+A984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA985");
    },
    Error,
    "encode-error: U+A985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA986");
    },
    Error,
    "encode-error: U+A986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA987");
    },
    Error,
    "encode-error: U+A987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA988");
    },
    Error,
    "encode-error: U+A988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA989");
    },
    Error,
    "encode-error: U+A989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA98A");
    },
    Error,
    "encode-error: U+A98A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA98B");
    },
    Error,
    "encode-error: U+A98B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA98C");
    },
    Error,
    "encode-error: U+A98C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA98D");
    },
    Error,
    "encode-error: U+A98D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA98E");
    },
    Error,
    "encode-error: U+A98E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA98F");
    },
    Error,
    "encode-error: U+A98F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA990");
    },
    Error,
    "encode-error: U+A990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA991");
    },
    Error,
    "encode-error: U+A991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA992");
    },
    Error,
    "encode-error: U+A992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA993");
    },
    Error,
    "encode-error: U+A993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA994");
    },
    Error,
    "encode-error: U+A994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA995");
    },
    Error,
    "encode-error: U+A995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA996");
    },
    Error,
    "encode-error: U+A996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA997");
    },
    Error,
    "encode-error: U+A997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA998");
    },
    Error,
    "encode-error: U+A998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA999");
    },
    Error,
    "encode-error: U+A999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA99A");
    },
    Error,
    "encode-error: U+A99A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA99B");
    },
    Error,
    "encode-error: U+A99B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA99C");
    },
    Error,
    "encode-error: U+A99C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA99D");
    },
    Error,
    "encode-error: U+A99D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA99E");
    },
    Error,
    "encode-error: U+A99E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA99F");
    },
    Error,
    "encode-error: U+A99F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A0");
    },
    Error,
    "encode-error: U+A9A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A1");
    },
    Error,
    "encode-error: U+A9A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A2");
    },
    Error,
    "encode-error: U+A9A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A3");
    },
    Error,
    "encode-error: U+A9A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A4");
    },
    Error,
    "encode-error: U+A9A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A5");
    },
    Error,
    "encode-error: U+A9A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A6");
    },
    Error,
    "encode-error: U+A9A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A7");
    },
    Error,
    "encode-error: U+A9A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A8");
    },
    Error,
    "encode-error: U+A9A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9A9");
    },
    Error,
    "encode-error: U+A9A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9AA");
    },
    Error,
    "encode-error: U+A9AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9AB");
    },
    Error,
    "encode-error: U+A9AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9AC");
    },
    Error,
    "encode-error: U+A9AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9AD");
    },
    Error,
    "encode-error: U+A9AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9AE");
    },
    Error,
    "encode-error: U+A9AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9AF");
    },
    Error,
    "encode-error: U+A9AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B0");
    },
    Error,
    "encode-error: U+A9B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B1");
    },
    Error,
    "encode-error: U+A9B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B2");
    },
    Error,
    "encode-error: U+A9B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B3");
    },
    Error,
    "encode-error: U+A9B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B4");
    },
    Error,
    "encode-error: U+A9B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B5");
    },
    Error,
    "encode-error: U+A9B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B6");
    },
    Error,
    "encode-error: U+A9B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B7");
    },
    Error,
    "encode-error: U+A9B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B8");
    },
    Error,
    "encode-error: U+A9B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9B9");
    },
    Error,
    "encode-error: U+A9B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9BA");
    },
    Error,
    "encode-error: U+A9BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9BB");
    },
    Error,
    "encode-error: U+A9BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9BC");
    },
    Error,
    "encode-error: U+A9BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9BD");
    },
    Error,
    "encode-error: U+A9BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9BE");
    },
    Error,
    "encode-error: U+A9BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9BF");
    },
    Error,
    "encode-error: U+A9BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C0");
    },
    Error,
    "encode-error: U+A9C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C1");
    },
    Error,
    "encode-error: U+A9C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C2");
    },
    Error,
    "encode-error: U+A9C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C3");
    },
    Error,
    "encode-error: U+A9C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C4");
    },
    Error,
    "encode-error: U+A9C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C5");
    },
    Error,
    "encode-error: U+A9C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C6");
    },
    Error,
    "encode-error: U+A9C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C7");
    },
    Error,
    "encode-error: U+A9C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C8");
    },
    Error,
    "encode-error: U+A9C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9C9");
    },
    Error,
    "encode-error: U+A9C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9CA");
    },
    Error,
    "encode-error: U+A9CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9CB");
    },
    Error,
    "encode-error: U+A9CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9CC");
    },
    Error,
    "encode-error: U+A9CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9CD");
    },
    Error,
    "encode-error: U+A9CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9CE");
    },
    Error,
    "encode-error: U+A9CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9CF");
    },
    Error,
    "encode-error: U+A9CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D0");
    },
    Error,
    "encode-error: U+A9D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D1");
    },
    Error,
    "encode-error: U+A9D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D2");
    },
    Error,
    "encode-error: U+A9D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D3");
    },
    Error,
    "encode-error: U+A9D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D4");
    },
    Error,
    "encode-error: U+A9D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D5");
    },
    Error,
    "encode-error: U+A9D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D6");
    },
    Error,
    "encode-error: U+A9D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D7");
    },
    Error,
    "encode-error: U+A9D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D8");
    },
    Error,
    "encode-error: U+A9D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9D9");
    },
    Error,
    "encode-error: U+A9D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9DA");
    },
    Error,
    "encode-error: U+A9DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9DB");
    },
    Error,
    "encode-error: U+A9DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9DC");
    },
    Error,
    "encode-error: U+A9DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9DD");
    },
    Error,
    "encode-error: U+A9DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9DE");
    },
    Error,
    "encode-error: U+A9DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9DF");
    },
    Error,
    "encode-error: U+A9DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E0");
    },
    Error,
    "encode-error: U+A9E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E1");
    },
    Error,
    "encode-error: U+A9E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E2");
    },
    Error,
    "encode-error: U+A9E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E3");
    },
    Error,
    "encode-error: U+A9E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E4");
    },
    Error,
    "encode-error: U+A9E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E5");
    },
    Error,
    "encode-error: U+A9E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E6");
    },
    Error,
    "encode-error: U+A9E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E7");
    },
    Error,
    "encode-error: U+A9E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E8");
    },
    Error,
    "encode-error: U+A9E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9E9");
    },
    Error,
    "encode-error: U+A9E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9EA");
    },
    Error,
    "encode-error: U+A9EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9EB");
    },
    Error,
    "encode-error: U+A9EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9EC");
    },
    Error,
    "encode-error: U+A9EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9ED");
    },
    Error,
    "encode-error: U+A9ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9EE");
    },
    Error,
    "encode-error: U+A9EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9EF");
    },
    Error,
    "encode-error: U+A9EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F0");
    },
    Error,
    "encode-error: U+A9F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F1");
    },
    Error,
    "encode-error: U+A9F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F2");
    },
    Error,
    "encode-error: U+A9F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F3");
    },
    Error,
    "encode-error: U+A9F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F4");
    },
    Error,
    "encode-error: U+A9F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F5");
    },
    Error,
    "encode-error: U+A9F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F6");
    },
    Error,
    "encode-error: U+A9F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F7");
    },
    Error,
    "encode-error: U+A9F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F8");
    },
    Error,
    "encode-error: U+A9F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9F9");
    },
    Error,
    "encode-error: U+A9F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9FA");
    },
    Error,
    "encode-error: U+A9FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9FB");
    },
    Error,
    "encode-error: U+A9FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9FC");
    },
    Error,
    "encode-error: U+A9FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9FD");
    },
    Error,
    "encode-error: U+A9FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9FE");
    },
    Error,
    "encode-error: U+A9FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uA9FF");
    },
    Error,
    "encode-error: U+A9FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA00");
    },
    Error,
    "encode-error: U+AA00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA01");
    },
    Error,
    "encode-error: U+AA01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA02");
    },
    Error,
    "encode-error: U+AA02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA03");
    },
    Error,
    "encode-error: U+AA03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA04");
    },
    Error,
    "encode-error: U+AA04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA05");
    },
    Error,
    "encode-error: U+AA05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA06");
    },
    Error,
    "encode-error: U+AA06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA07");
    },
    Error,
    "encode-error: U+AA07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA08");
    },
    Error,
    "encode-error: U+AA08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA09");
    },
    Error,
    "encode-error: U+AA09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA0A");
    },
    Error,
    "encode-error: U+AA0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA0B");
    },
    Error,
    "encode-error: U+AA0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA0C");
    },
    Error,
    "encode-error: U+AA0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA0D");
    },
    Error,
    "encode-error: U+AA0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA0E");
    },
    Error,
    "encode-error: U+AA0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA0F");
    },
    Error,
    "encode-error: U+AA0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA10");
    },
    Error,
    "encode-error: U+AA10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA11");
    },
    Error,
    "encode-error: U+AA11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA12");
    },
    Error,
    "encode-error: U+AA12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA13");
    },
    Error,
    "encode-error: U+AA13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA14");
    },
    Error,
    "encode-error: U+AA14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA15");
    },
    Error,
    "encode-error: U+AA15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA16");
    },
    Error,
    "encode-error: U+AA16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA17");
    },
    Error,
    "encode-error: U+AA17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA18");
    },
    Error,
    "encode-error: U+AA18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA19");
    },
    Error,
    "encode-error: U+AA19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA1A");
    },
    Error,
    "encode-error: U+AA1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA1B");
    },
    Error,
    "encode-error: U+AA1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA1C");
    },
    Error,
    "encode-error: U+AA1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA1D");
    },
    Error,
    "encode-error: U+AA1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA1E");
    },
    Error,
    "encode-error: U+AA1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA1F");
    },
    Error,
    "encode-error: U+AA1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA20");
    },
    Error,
    "encode-error: U+AA20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA21");
    },
    Error,
    "encode-error: U+AA21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA22");
    },
    Error,
    "encode-error: U+AA22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA23");
    },
    Error,
    "encode-error: U+AA23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA24");
    },
    Error,
    "encode-error: U+AA24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA25");
    },
    Error,
    "encode-error: U+AA25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA26");
    },
    Error,
    "encode-error: U+AA26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA27");
    },
    Error,
    "encode-error: U+AA27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA28");
    },
    Error,
    "encode-error: U+AA28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA29");
    },
    Error,
    "encode-error: U+AA29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA2A");
    },
    Error,
    "encode-error: U+AA2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA2B");
    },
    Error,
    "encode-error: U+AA2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA2C");
    },
    Error,
    "encode-error: U+AA2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA2D");
    },
    Error,
    "encode-error: U+AA2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA2E");
    },
    Error,
    "encode-error: U+AA2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA2F");
    },
    Error,
    "encode-error: U+AA2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA30");
    },
    Error,
    "encode-error: U+AA30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA31");
    },
    Error,
    "encode-error: U+AA31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA32");
    },
    Error,
    "encode-error: U+AA32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA33");
    },
    Error,
    "encode-error: U+AA33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA34");
    },
    Error,
    "encode-error: U+AA34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA35");
    },
    Error,
    "encode-error: U+AA35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA36");
    },
    Error,
    "encode-error: U+AA36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA37");
    },
    Error,
    "encode-error: U+AA37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA38");
    },
    Error,
    "encode-error: U+AA38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA39");
    },
    Error,
    "encode-error: U+AA39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA3A");
    },
    Error,
    "encode-error: U+AA3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA3B");
    },
    Error,
    "encode-error: U+AA3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA3C");
    },
    Error,
    "encode-error: U+AA3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA3D");
    },
    Error,
    "encode-error: U+AA3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA3E");
    },
    Error,
    "encode-error: U+AA3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA3F");
    },
    Error,
    "encode-error: U+AA3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA40");
    },
    Error,
    "encode-error: U+AA40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA41");
    },
    Error,
    "encode-error: U+AA41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA42");
    },
    Error,
    "encode-error: U+AA42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA43");
    },
    Error,
    "encode-error: U+AA43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA44");
    },
    Error,
    "encode-error: U+AA44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA45");
    },
    Error,
    "encode-error: U+AA45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA46");
    },
    Error,
    "encode-error: U+AA46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA47");
    },
    Error,
    "encode-error: U+AA47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA48");
    },
    Error,
    "encode-error: U+AA48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA49");
    },
    Error,
    "encode-error: U+AA49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA4A");
    },
    Error,
    "encode-error: U+AA4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA4B");
    },
    Error,
    "encode-error: U+AA4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA4C");
    },
    Error,
    "encode-error: U+AA4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA4D");
    },
    Error,
    "encode-error: U+AA4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA4E");
    },
    Error,
    "encode-error: U+AA4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA4F");
    },
    Error,
    "encode-error: U+AA4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA50");
    },
    Error,
    "encode-error: U+AA50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA51");
    },
    Error,
    "encode-error: U+AA51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA52");
    },
    Error,
    "encode-error: U+AA52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA53");
    },
    Error,
    "encode-error: U+AA53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA54");
    },
    Error,
    "encode-error: U+AA54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA55");
    },
    Error,
    "encode-error: U+AA55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA56");
    },
    Error,
    "encode-error: U+AA56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA57");
    },
    Error,
    "encode-error: U+AA57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA58");
    },
    Error,
    "encode-error: U+AA58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA59");
    },
    Error,
    "encode-error: U+AA59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA5A");
    },
    Error,
    "encode-error: U+AA5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA5B");
    },
    Error,
    "encode-error: U+AA5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA5C");
    },
    Error,
    "encode-error: U+AA5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA5D");
    },
    Error,
    "encode-error: U+AA5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA5E");
    },
    Error,
    "encode-error: U+AA5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA5F");
    },
    Error,
    "encode-error: U+AA5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA60");
    },
    Error,
    "encode-error: U+AA60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA61");
    },
    Error,
    "encode-error: U+AA61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA62");
    },
    Error,
    "encode-error: U+AA62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA63");
    },
    Error,
    "encode-error: U+AA63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA64");
    },
    Error,
    "encode-error: U+AA64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA65");
    },
    Error,
    "encode-error: U+AA65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA66");
    },
    Error,
    "encode-error: U+AA66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA67");
    },
    Error,
    "encode-error: U+AA67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA68");
    },
    Error,
    "encode-error: U+AA68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA69");
    },
    Error,
    "encode-error: U+AA69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA6A");
    },
    Error,
    "encode-error: U+AA6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA6B");
    },
    Error,
    "encode-error: U+AA6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA6C");
    },
    Error,
    "encode-error: U+AA6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA6D");
    },
    Error,
    "encode-error: U+AA6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA6E");
    },
    Error,
    "encode-error: U+AA6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA6F");
    },
    Error,
    "encode-error: U+AA6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA70");
    },
    Error,
    "encode-error: U+AA70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA71");
    },
    Error,
    "encode-error: U+AA71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA72");
    },
    Error,
    "encode-error: U+AA72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA73");
    },
    Error,
    "encode-error: U+AA73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA74");
    },
    Error,
    "encode-error: U+AA74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA75");
    },
    Error,
    "encode-error: U+AA75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA76");
    },
    Error,
    "encode-error: U+AA76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA77");
    },
    Error,
    "encode-error: U+AA77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA78");
    },
    Error,
    "encode-error: U+AA78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA79");
    },
    Error,
    "encode-error: U+AA79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA7A");
    },
    Error,
    "encode-error: U+AA7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA7B");
    },
    Error,
    "encode-error: U+AA7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA7C");
    },
    Error,
    "encode-error: U+AA7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA7D");
    },
    Error,
    "encode-error: U+AA7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA7E");
    },
    Error,
    "encode-error: U+AA7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA7F");
    },
    Error,
    "encode-error: U+AA7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA80");
    },
    Error,
    "encode-error: U+AA80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA81");
    },
    Error,
    "encode-error: U+AA81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA82");
    },
    Error,
    "encode-error: U+AA82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA83");
    },
    Error,
    "encode-error: U+AA83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA84");
    },
    Error,
    "encode-error: U+AA84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA85");
    },
    Error,
    "encode-error: U+AA85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA86");
    },
    Error,
    "encode-error: U+AA86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA87");
    },
    Error,
    "encode-error: U+AA87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA88");
    },
    Error,
    "encode-error: U+AA88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA89");
    },
    Error,
    "encode-error: U+AA89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA8A");
    },
    Error,
    "encode-error: U+AA8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA8B");
    },
    Error,
    "encode-error: U+AA8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA8C");
    },
    Error,
    "encode-error: U+AA8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA8D");
    },
    Error,
    "encode-error: U+AA8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA8E");
    },
    Error,
    "encode-error: U+AA8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA8F");
    },
    Error,
    "encode-error: U+AA8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA90");
    },
    Error,
    "encode-error: U+AA90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA91");
    },
    Error,
    "encode-error: U+AA91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA92");
    },
    Error,
    "encode-error: U+AA92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA93");
    },
    Error,
    "encode-error: U+AA93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA94");
    },
    Error,
    "encode-error: U+AA94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA95");
    },
    Error,
    "encode-error: U+AA95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA96");
    },
    Error,
    "encode-error: U+AA96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA97");
    },
    Error,
    "encode-error: U+AA97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA98");
    },
    Error,
    "encode-error: U+AA98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA99");
    },
    Error,
    "encode-error: U+AA99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA9A");
    },
    Error,
    "encode-error: U+AA9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA9B");
    },
    Error,
    "encode-error: U+AA9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA9C");
    },
    Error,
    "encode-error: U+AA9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA9D");
    },
    Error,
    "encode-error: U+AA9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA9E");
    },
    Error,
    "encode-error: U+AA9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAA9F");
    },
    Error,
    "encode-error: U+AA9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA0");
    },
    Error,
    "encode-error: U+AAA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA1");
    },
    Error,
    "encode-error: U+AAA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA2");
    },
    Error,
    "encode-error: U+AAA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA3");
    },
    Error,
    "encode-error: U+AAA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA4");
    },
    Error,
    "encode-error: U+AAA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA5");
    },
    Error,
    "encode-error: U+AAA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA6");
    },
    Error,
    "encode-error: U+AAA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA7");
    },
    Error,
    "encode-error: U+AAA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA8");
    },
    Error,
    "encode-error: U+AAA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAA9");
    },
    Error,
    "encode-error: U+AAA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAAA");
    },
    Error,
    "encode-error: U+AAAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAAB");
    },
    Error,
    "encode-error: U+AAAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAAC");
    },
    Error,
    "encode-error: U+AAAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAAD");
    },
    Error,
    "encode-error: U+AAAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAAE");
    },
    Error,
    "encode-error: U+AAAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAAF");
    },
    Error,
    "encode-error: U+AAAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB0");
    },
    Error,
    "encode-error: U+AAB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB1");
    },
    Error,
    "encode-error: U+AAB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB2");
    },
    Error,
    "encode-error: U+AAB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB3");
    },
    Error,
    "encode-error: U+AAB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB4");
    },
    Error,
    "encode-error: U+AAB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB5");
    },
    Error,
    "encode-error: U+AAB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB6");
    },
    Error,
    "encode-error: U+AAB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB7");
    },
    Error,
    "encode-error: U+AAB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB8");
    },
    Error,
    "encode-error: U+AAB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAB9");
    },
    Error,
    "encode-error: U+AAB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAABA");
    },
    Error,
    "encode-error: U+AABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAABB");
    },
    Error,
    "encode-error: U+AABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAABC");
    },
    Error,
    "encode-error: U+AABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAABD");
    },
    Error,
    "encode-error: U+AABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAABE");
    },
    Error,
    "encode-error: U+AABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAABF");
    },
    Error,
    "encode-error: U+AABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC0");
    },
    Error,
    "encode-error: U+AAC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC1");
    },
    Error,
    "encode-error: U+AAC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC2");
    },
    Error,
    "encode-error: U+AAC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC3");
    },
    Error,
    "encode-error: U+AAC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC4");
    },
    Error,
    "encode-error: U+AAC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC5");
    },
    Error,
    "encode-error: U+AAC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC6");
    },
    Error,
    "encode-error: U+AAC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC7");
    },
    Error,
    "encode-error: U+AAC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC8");
    },
    Error,
    "encode-error: U+AAC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAC9");
    },
    Error,
    "encode-error: U+AAC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAACA");
    },
    Error,
    "encode-error: U+AACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAACB");
    },
    Error,
    "encode-error: U+AACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAACC");
    },
    Error,
    "encode-error: U+AACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAACD");
    },
    Error,
    "encode-error: U+AACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAACE");
    },
    Error,
    "encode-error: U+AACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAACF");
    },
    Error,
    "encode-error: U+AACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD0");
    },
    Error,
    "encode-error: U+AAD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD1");
    },
    Error,
    "encode-error: U+AAD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD2");
    },
    Error,
    "encode-error: U+AAD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD3");
    },
    Error,
    "encode-error: U+AAD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD4");
    },
    Error,
    "encode-error: U+AAD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD5");
    },
    Error,
    "encode-error: U+AAD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD6");
    },
    Error,
    "encode-error: U+AAD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD7");
    },
    Error,
    "encode-error: U+AAD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD8");
    },
    Error,
    "encode-error: U+AAD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAD9");
    },
    Error,
    "encode-error: U+AAD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAADA");
    },
    Error,
    "encode-error: U+AADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAADB");
    },
    Error,
    "encode-error: U+AADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAADC");
    },
    Error,
    "encode-error: U+AADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAADD");
    },
    Error,
    "encode-error: U+AADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAADE");
    },
    Error,
    "encode-error: U+AADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAADF");
    },
    Error,
    "encode-error: U+AADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE0");
    },
    Error,
    "encode-error: U+AAE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE1");
    },
    Error,
    "encode-error: U+AAE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE2");
    },
    Error,
    "encode-error: U+AAE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE3");
    },
    Error,
    "encode-error: U+AAE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE4");
    },
    Error,
    "encode-error: U+AAE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE5");
    },
    Error,
    "encode-error: U+AAE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE6");
    },
    Error,
    "encode-error: U+AAE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE7");
    },
    Error,
    "encode-error: U+AAE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE8");
    },
    Error,
    "encode-error: U+AAE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAE9");
    },
    Error,
    "encode-error: U+AAE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAEA");
    },
    Error,
    "encode-error: U+AAEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAEB");
    },
    Error,
    "encode-error: U+AAEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAEC");
    },
    Error,
    "encode-error: U+AAEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAED");
    },
    Error,
    "encode-error: U+AAED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAEE");
    },
    Error,
    "encode-error: U+AAEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAEF");
    },
    Error,
    "encode-error: U+AAEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF0");
    },
    Error,
    "encode-error: U+AAF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF1");
    },
    Error,
    "encode-error: U+AAF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF2");
    },
    Error,
    "encode-error: U+AAF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF3");
    },
    Error,
    "encode-error: U+AAF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF4");
    },
    Error,
    "encode-error: U+AAF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF5");
    },
    Error,
    "encode-error: U+AAF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF6");
    },
    Error,
    "encode-error: U+AAF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF7");
    },
    Error,
    "encode-error: U+AAF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF8");
    },
    Error,
    "encode-error: U+AAF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAF9");
    },
    Error,
    "encode-error: U+AAF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAFA");
    },
    Error,
    "encode-error: U+AAFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAFB");
    },
    Error,
    "encode-error: U+AAFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAFC");
    },
    Error,
    "encode-error: U+AAFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAFD");
    },
    Error,
    "encode-error: U+AAFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAFE");
    },
    Error,
    "encode-error: U+AAFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAAFF");
    },
    Error,
    "encode-error: U+AAFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB00");
    },
    Error,
    "encode-error: U+AB00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB01");
    },
    Error,
    "encode-error: U+AB01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB02");
    },
    Error,
    "encode-error: U+AB02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB03");
    },
    Error,
    "encode-error: U+AB03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB04");
    },
    Error,
    "encode-error: U+AB04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB05");
    },
    Error,
    "encode-error: U+AB05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB06");
    },
    Error,
    "encode-error: U+AB06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB07");
    },
    Error,
    "encode-error: U+AB07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB08");
    },
    Error,
    "encode-error: U+AB08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB09");
    },
    Error,
    "encode-error: U+AB09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB0A");
    },
    Error,
    "encode-error: U+AB0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB0B");
    },
    Error,
    "encode-error: U+AB0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB0C");
    },
    Error,
    "encode-error: U+AB0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB0D");
    },
    Error,
    "encode-error: U+AB0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB0E");
    },
    Error,
    "encode-error: U+AB0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB0F");
    },
    Error,
    "encode-error: U+AB0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB10");
    },
    Error,
    "encode-error: U+AB10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB11");
    },
    Error,
    "encode-error: U+AB11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB12");
    },
    Error,
    "encode-error: U+AB12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB13");
    },
    Error,
    "encode-error: U+AB13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB14");
    },
    Error,
    "encode-error: U+AB14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB15");
    },
    Error,
    "encode-error: U+AB15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB16");
    },
    Error,
    "encode-error: U+AB16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB17");
    },
    Error,
    "encode-error: U+AB17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB18");
    },
    Error,
    "encode-error: U+AB18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB19");
    },
    Error,
    "encode-error: U+AB19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB1A");
    },
    Error,
    "encode-error: U+AB1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB1B");
    },
    Error,
    "encode-error: U+AB1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB1C");
    },
    Error,
    "encode-error: U+AB1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB1D");
    },
    Error,
    "encode-error: U+AB1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB1E");
    },
    Error,
    "encode-error: U+AB1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB1F");
    },
    Error,
    "encode-error: U+AB1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB20");
    },
    Error,
    "encode-error: U+AB20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB21");
    },
    Error,
    "encode-error: U+AB21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB22");
    },
    Error,
    "encode-error: U+AB22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB23");
    },
    Error,
    "encode-error: U+AB23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB24");
    },
    Error,
    "encode-error: U+AB24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB25");
    },
    Error,
    "encode-error: U+AB25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB26");
    },
    Error,
    "encode-error: U+AB26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB27");
    },
    Error,
    "encode-error: U+AB27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB28");
    },
    Error,
    "encode-error: U+AB28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB29");
    },
    Error,
    "encode-error: U+AB29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB2A");
    },
    Error,
    "encode-error: U+AB2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB2B");
    },
    Error,
    "encode-error: U+AB2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB2C");
    },
    Error,
    "encode-error: U+AB2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB2D");
    },
    Error,
    "encode-error: U+AB2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB2E");
    },
    Error,
    "encode-error: U+AB2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB2F");
    },
    Error,
    "encode-error: U+AB2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB30");
    },
    Error,
    "encode-error: U+AB30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB31");
    },
    Error,
    "encode-error: U+AB31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB32");
    },
    Error,
    "encode-error: U+AB32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB33");
    },
    Error,
    "encode-error: U+AB33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB34");
    },
    Error,
    "encode-error: U+AB34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB35");
    },
    Error,
    "encode-error: U+AB35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB36");
    },
    Error,
    "encode-error: U+AB36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB37");
    },
    Error,
    "encode-error: U+AB37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB38");
    },
    Error,
    "encode-error: U+AB38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB39");
    },
    Error,
    "encode-error: U+AB39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB3A");
    },
    Error,
    "encode-error: U+AB3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB3B");
    },
    Error,
    "encode-error: U+AB3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB3C");
    },
    Error,
    "encode-error: U+AB3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB3D");
    },
    Error,
    "encode-error: U+AB3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB3E");
    },
    Error,
    "encode-error: U+AB3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB3F");
    },
    Error,
    "encode-error: U+AB3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB40");
    },
    Error,
    "encode-error: U+AB40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB41");
    },
    Error,
    "encode-error: U+AB41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB42");
    },
    Error,
    "encode-error: U+AB42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB43");
    },
    Error,
    "encode-error: U+AB43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB44");
    },
    Error,
    "encode-error: U+AB44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB45");
    },
    Error,
    "encode-error: U+AB45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB46");
    },
    Error,
    "encode-error: U+AB46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB47");
    },
    Error,
    "encode-error: U+AB47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB48");
    },
    Error,
    "encode-error: U+AB48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB49");
    },
    Error,
    "encode-error: U+AB49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB4A");
    },
    Error,
    "encode-error: U+AB4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB4B");
    },
    Error,
    "encode-error: U+AB4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB4C");
    },
    Error,
    "encode-error: U+AB4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB4D");
    },
    Error,
    "encode-error: U+AB4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB4E");
    },
    Error,
    "encode-error: U+AB4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB4F");
    },
    Error,
    "encode-error: U+AB4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB50");
    },
    Error,
    "encode-error: U+AB50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB51");
    },
    Error,
    "encode-error: U+AB51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB52");
    },
    Error,
    "encode-error: U+AB52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB53");
    },
    Error,
    "encode-error: U+AB53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB54");
    },
    Error,
    "encode-error: U+AB54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB55");
    },
    Error,
    "encode-error: U+AB55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB56");
    },
    Error,
    "encode-error: U+AB56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB57");
    },
    Error,
    "encode-error: U+AB57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB58");
    },
    Error,
    "encode-error: U+AB58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB59");
    },
    Error,
    "encode-error: U+AB59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB5A");
    },
    Error,
    "encode-error: U+AB5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB5B");
    },
    Error,
    "encode-error: U+AB5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB5C");
    },
    Error,
    "encode-error: U+AB5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB5D");
    },
    Error,
    "encode-error: U+AB5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB5E");
    },
    Error,
    "encode-error: U+AB5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB5F");
    },
    Error,
    "encode-error: U+AB5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB60");
    },
    Error,
    "encode-error: U+AB60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB61");
    },
    Error,
    "encode-error: U+AB61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB62");
    },
    Error,
    "encode-error: U+AB62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB63");
    },
    Error,
    "encode-error: U+AB63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB64");
    },
    Error,
    "encode-error: U+AB64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB65");
    },
    Error,
    "encode-error: U+AB65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB66");
    },
    Error,
    "encode-error: U+AB66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB67");
    },
    Error,
    "encode-error: U+AB67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB68");
    },
    Error,
    "encode-error: U+AB68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB69");
    },
    Error,
    "encode-error: U+AB69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB6A");
    },
    Error,
    "encode-error: U+AB6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB6B");
    },
    Error,
    "encode-error: U+AB6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB6C");
    },
    Error,
    "encode-error: U+AB6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB6D");
    },
    Error,
    "encode-error: U+AB6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB6E");
    },
    Error,
    "encode-error: U+AB6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB6F");
    },
    Error,
    "encode-error: U+AB6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB70");
    },
    Error,
    "encode-error: U+AB70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB71");
    },
    Error,
    "encode-error: U+AB71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB72");
    },
    Error,
    "encode-error: U+AB72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB73");
    },
    Error,
    "encode-error: U+AB73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB74");
    },
    Error,
    "encode-error: U+AB74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB75");
    },
    Error,
    "encode-error: U+AB75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB76");
    },
    Error,
    "encode-error: U+AB76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB77");
    },
    Error,
    "encode-error: U+AB77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB78");
    },
    Error,
    "encode-error: U+AB78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB79");
    },
    Error,
    "encode-error: U+AB79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB7A");
    },
    Error,
    "encode-error: U+AB7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB7B");
    },
    Error,
    "encode-error: U+AB7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB7C");
    },
    Error,
    "encode-error: U+AB7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB7D");
    },
    Error,
    "encode-error: U+AB7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB7E");
    },
    Error,
    "encode-error: U+AB7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB7F");
    },
    Error,
    "encode-error: U+AB7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB80");
    },
    Error,
    "encode-error: U+AB80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB81");
    },
    Error,
    "encode-error: U+AB81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB82");
    },
    Error,
    "encode-error: U+AB82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB83");
    },
    Error,
    "encode-error: U+AB83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB84");
    },
    Error,
    "encode-error: U+AB84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB85");
    },
    Error,
    "encode-error: U+AB85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB86");
    },
    Error,
    "encode-error: U+AB86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB87");
    },
    Error,
    "encode-error: U+AB87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB88");
    },
    Error,
    "encode-error: U+AB88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB89");
    },
    Error,
    "encode-error: U+AB89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB8A");
    },
    Error,
    "encode-error: U+AB8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB8B");
    },
    Error,
    "encode-error: U+AB8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB8C");
    },
    Error,
    "encode-error: U+AB8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB8D");
    },
    Error,
    "encode-error: U+AB8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB8E");
    },
    Error,
    "encode-error: U+AB8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB8F");
    },
    Error,
    "encode-error: U+AB8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB90");
    },
    Error,
    "encode-error: U+AB90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB91");
    },
    Error,
    "encode-error: U+AB91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB92");
    },
    Error,
    "encode-error: U+AB92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB93");
    },
    Error,
    "encode-error: U+AB93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB94");
    },
    Error,
    "encode-error: U+AB94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB95");
    },
    Error,
    "encode-error: U+AB95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB96");
    },
    Error,
    "encode-error: U+AB96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB97");
    },
    Error,
    "encode-error: U+AB97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB98");
    },
    Error,
    "encode-error: U+AB98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB99");
    },
    Error,
    "encode-error: U+AB99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB9A");
    },
    Error,
    "encode-error: U+AB9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB9B");
    },
    Error,
    "encode-error: U+AB9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB9C");
    },
    Error,
    "encode-error: U+AB9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB9D");
    },
    Error,
    "encode-error: U+AB9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB9E");
    },
    Error,
    "encode-error: U+AB9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAB9F");
    },
    Error,
    "encode-error: U+AB9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA0");
    },
    Error,
    "encode-error: U+ABA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA1");
    },
    Error,
    "encode-error: U+ABA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA2");
    },
    Error,
    "encode-error: U+ABA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA3");
    },
    Error,
    "encode-error: U+ABA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA4");
    },
    Error,
    "encode-error: U+ABA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA5");
    },
    Error,
    "encode-error: U+ABA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA6");
    },
    Error,
    "encode-error: U+ABA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA7");
    },
    Error,
    "encode-error: U+ABA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA8");
    },
    Error,
    "encode-error: U+ABA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABA9");
    },
    Error,
    "encode-error: U+ABA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABAA");
    },
    Error,
    "encode-error: U+ABAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABAB");
    },
    Error,
    "encode-error: U+ABAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABAC");
    },
    Error,
    "encode-error: U+ABAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABAD");
    },
    Error,
    "encode-error: U+ABAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABAE");
    },
    Error,
    "encode-error: U+ABAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABAF");
    },
    Error,
    "encode-error: U+ABAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB0");
    },
    Error,
    "encode-error: U+ABB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB1");
    },
    Error,
    "encode-error: U+ABB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB2");
    },
    Error,
    "encode-error: U+ABB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB3");
    },
    Error,
    "encode-error: U+ABB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB4");
    },
    Error,
    "encode-error: U+ABB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB5");
    },
    Error,
    "encode-error: U+ABB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB6");
    },
    Error,
    "encode-error: U+ABB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB7");
    },
    Error,
    "encode-error: U+ABB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB8");
    },
    Error,
    "encode-error: U+ABB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABB9");
    },
    Error,
    "encode-error: U+ABB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABBA");
    },
    Error,
    "encode-error: U+ABBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABBB");
    },
    Error,
    "encode-error: U+ABBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABBC");
    },
    Error,
    "encode-error: U+ABBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABBD");
    },
    Error,
    "encode-error: U+ABBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABBE");
    },
    Error,
    "encode-error: U+ABBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABBF");
    },
    Error,
    "encode-error: U+ABBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC0");
    },
    Error,
    "encode-error: U+ABC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC1");
    },
    Error,
    "encode-error: U+ABC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC2");
    },
    Error,
    "encode-error: U+ABC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC3");
    },
    Error,
    "encode-error: U+ABC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC4");
    },
    Error,
    "encode-error: U+ABC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC5");
    },
    Error,
    "encode-error: U+ABC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC6");
    },
    Error,
    "encode-error: U+ABC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC7");
    },
    Error,
    "encode-error: U+ABC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC8");
    },
    Error,
    "encode-error: U+ABC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABC9");
    },
    Error,
    "encode-error: U+ABC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABCA");
    },
    Error,
    "encode-error: U+ABCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABCB");
    },
    Error,
    "encode-error: U+ABCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABCC");
    },
    Error,
    "encode-error: U+ABCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABCD");
    },
    Error,
    "encode-error: U+ABCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABCE");
    },
    Error,
    "encode-error: U+ABCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABCF");
    },
    Error,
    "encode-error: U+ABCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD0");
    },
    Error,
    "encode-error: U+ABD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD1");
    },
    Error,
    "encode-error: U+ABD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD2");
    },
    Error,
    "encode-error: U+ABD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD3");
    },
    Error,
    "encode-error: U+ABD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD4");
    },
    Error,
    "encode-error: U+ABD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD5");
    },
    Error,
    "encode-error: U+ABD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD6");
    },
    Error,
    "encode-error: U+ABD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD7");
    },
    Error,
    "encode-error: U+ABD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD8");
    },
    Error,
    "encode-error: U+ABD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABD9");
    },
    Error,
    "encode-error: U+ABD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABDA");
    },
    Error,
    "encode-error: U+ABDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABDB");
    },
    Error,
    "encode-error: U+ABDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABDC");
    },
    Error,
    "encode-error: U+ABDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABDD");
    },
    Error,
    "encode-error: U+ABDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABDE");
    },
    Error,
    "encode-error: U+ABDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABDF");
    },
    Error,
    "encode-error: U+ABDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE0");
    },
    Error,
    "encode-error: U+ABE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE1");
    },
    Error,
    "encode-error: U+ABE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE2");
    },
    Error,
    "encode-error: U+ABE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE3");
    },
    Error,
    "encode-error: U+ABE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE4");
    },
    Error,
    "encode-error: U+ABE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE5");
    },
    Error,
    "encode-error: U+ABE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE6");
    },
    Error,
    "encode-error: U+ABE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE7");
    },
    Error,
    "encode-error: U+ABE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE8");
    },
    Error,
    "encode-error: U+ABE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABE9");
    },
    Error,
    "encode-error: U+ABE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABEA");
    },
    Error,
    "encode-error: U+ABEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABEB");
    },
    Error,
    "encode-error: U+ABEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABEC");
    },
    Error,
    "encode-error: U+ABEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABED");
    },
    Error,
    "encode-error: U+ABED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABEE");
    },
    Error,
    "encode-error: U+ABEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABEF");
    },
    Error,
    "encode-error: U+ABEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF0");
    },
    Error,
    "encode-error: U+ABF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF1");
    },
    Error,
    "encode-error: U+ABF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF2");
    },
    Error,
    "encode-error: U+ABF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF3");
    },
    Error,
    "encode-error: U+ABF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF4");
    },
    Error,
    "encode-error: U+ABF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF5");
    },
    Error,
    "encode-error: U+ABF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF6");
    },
    Error,
    "encode-error: U+ABF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF7");
    },
    Error,
    "encode-error: U+ABF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF8");
    },
    Error,
    "encode-error: U+ABF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABF9");
    },
    Error,
    "encode-error: U+ABF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABFA");
    },
    Error,
    "encode-error: U+ABFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABFB");
    },
    Error,
    "encode-error: U+ABFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABFC");
    },
    Error,
    "encode-error: U+ABFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABFD");
    },
    Error,
    "encode-error: U+ABFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABFE");
    },
    Error,
    "encode-error: U+ABFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uABFF");
    },
    Error,
    "encode-error: U+ABFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC00");
    },
    Error,
    "encode-error: U+AC00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC01");
    },
    Error,
    "encode-error: U+AC01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC02");
    },
    Error,
    "encode-error: U+AC02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC03");
    },
    Error,
    "encode-error: U+AC03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC04");
    },
    Error,
    "encode-error: U+AC04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC05");
    },
    Error,
    "encode-error: U+AC05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC06");
    },
    Error,
    "encode-error: U+AC06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC07");
    },
    Error,
    "encode-error: U+AC07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC08");
    },
    Error,
    "encode-error: U+AC08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC09");
    },
    Error,
    "encode-error: U+AC09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC0A");
    },
    Error,
    "encode-error: U+AC0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC0B");
    },
    Error,
    "encode-error: U+AC0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC0C");
    },
    Error,
    "encode-error: U+AC0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC0D");
    },
    Error,
    "encode-error: U+AC0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC0E");
    },
    Error,
    "encode-error: U+AC0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC0F");
    },
    Error,
    "encode-error: U+AC0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC10");
    },
    Error,
    "encode-error: U+AC10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC11");
    },
    Error,
    "encode-error: U+AC11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC12");
    },
    Error,
    "encode-error: U+AC12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC13");
    },
    Error,
    "encode-error: U+AC13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC14");
    },
    Error,
    "encode-error: U+AC14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC15");
    },
    Error,
    "encode-error: U+AC15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC16");
    },
    Error,
    "encode-error: U+AC16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC17");
    },
    Error,
    "encode-error: U+AC17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC18");
    },
    Error,
    "encode-error: U+AC18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC19");
    },
    Error,
    "encode-error: U+AC19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC1A");
    },
    Error,
    "encode-error: U+AC1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC1B");
    },
    Error,
    "encode-error: U+AC1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC1C");
    },
    Error,
    "encode-error: U+AC1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC1D");
    },
    Error,
    "encode-error: U+AC1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC1E");
    },
    Error,
    "encode-error: U+AC1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC1F");
    },
    Error,
    "encode-error: U+AC1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC20");
    },
    Error,
    "encode-error: U+AC20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC21");
    },
    Error,
    "encode-error: U+AC21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC22");
    },
    Error,
    "encode-error: U+AC22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC23");
    },
    Error,
    "encode-error: U+AC23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC24");
    },
    Error,
    "encode-error: U+AC24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC25");
    },
    Error,
    "encode-error: U+AC25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC26");
    },
    Error,
    "encode-error: U+AC26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC27");
    },
    Error,
    "encode-error: U+AC27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC28");
    },
    Error,
    "encode-error: U+AC28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC29");
    },
    Error,
    "encode-error: U+AC29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC2A");
    },
    Error,
    "encode-error: U+AC2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC2B");
    },
    Error,
    "encode-error: U+AC2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC2C");
    },
    Error,
    "encode-error: U+AC2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC2D");
    },
    Error,
    "encode-error: U+AC2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC2E");
    },
    Error,
    "encode-error: U+AC2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC2F");
    },
    Error,
    "encode-error: U+AC2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC30");
    },
    Error,
    "encode-error: U+AC30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC31");
    },
    Error,
    "encode-error: U+AC31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC32");
    },
    Error,
    "encode-error: U+AC32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC33");
    },
    Error,
    "encode-error: U+AC33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC34");
    },
    Error,
    "encode-error: U+AC34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC35");
    },
    Error,
    "encode-error: U+AC35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC36");
    },
    Error,
    "encode-error: U+AC36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC37");
    },
    Error,
    "encode-error: U+AC37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC38");
    },
    Error,
    "encode-error: U+AC38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC39");
    },
    Error,
    "encode-error: U+AC39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC3A");
    },
    Error,
    "encode-error: U+AC3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC3B");
    },
    Error,
    "encode-error: U+AC3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC3C");
    },
    Error,
    "encode-error: U+AC3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC3D");
    },
    Error,
    "encode-error: U+AC3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC3E");
    },
    Error,
    "encode-error: U+AC3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC3F");
    },
    Error,
    "encode-error: U+AC3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC40");
    },
    Error,
    "encode-error: U+AC40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC41");
    },
    Error,
    "encode-error: U+AC41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC42");
    },
    Error,
    "encode-error: U+AC42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC43");
    },
    Error,
    "encode-error: U+AC43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC44");
    },
    Error,
    "encode-error: U+AC44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC45");
    },
    Error,
    "encode-error: U+AC45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC46");
    },
    Error,
    "encode-error: U+AC46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC47");
    },
    Error,
    "encode-error: U+AC47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC48");
    },
    Error,
    "encode-error: U+AC48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC49");
    },
    Error,
    "encode-error: U+AC49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC4A");
    },
    Error,
    "encode-error: U+AC4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC4B");
    },
    Error,
    "encode-error: U+AC4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC4C");
    },
    Error,
    "encode-error: U+AC4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC4D");
    },
    Error,
    "encode-error: U+AC4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC4E");
    },
    Error,
    "encode-error: U+AC4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC4F");
    },
    Error,
    "encode-error: U+AC4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC50");
    },
    Error,
    "encode-error: U+AC50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC51");
    },
    Error,
    "encode-error: U+AC51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC52");
    },
    Error,
    "encode-error: U+AC52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC53");
    },
    Error,
    "encode-error: U+AC53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC54");
    },
    Error,
    "encode-error: U+AC54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC55");
    },
    Error,
    "encode-error: U+AC55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC56");
    },
    Error,
    "encode-error: U+AC56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC57");
    },
    Error,
    "encode-error: U+AC57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC58");
    },
    Error,
    "encode-error: U+AC58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC59");
    },
    Error,
    "encode-error: U+AC59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC5A");
    },
    Error,
    "encode-error: U+AC5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC5B");
    },
    Error,
    "encode-error: U+AC5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC5C");
    },
    Error,
    "encode-error: U+AC5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC5D");
    },
    Error,
    "encode-error: U+AC5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC5E");
    },
    Error,
    "encode-error: U+AC5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC5F");
    },
    Error,
    "encode-error: U+AC5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC60");
    },
    Error,
    "encode-error: U+AC60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC61");
    },
    Error,
    "encode-error: U+AC61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC62");
    },
    Error,
    "encode-error: U+AC62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC63");
    },
    Error,
    "encode-error: U+AC63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC64");
    },
    Error,
    "encode-error: U+AC64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC65");
    },
    Error,
    "encode-error: U+AC65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC66");
    },
    Error,
    "encode-error: U+AC66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC67");
    },
    Error,
    "encode-error: U+AC67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC68");
    },
    Error,
    "encode-error: U+AC68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC69");
    },
    Error,
    "encode-error: U+AC69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC6A");
    },
    Error,
    "encode-error: U+AC6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC6B");
    },
    Error,
    "encode-error: U+AC6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC6C");
    },
    Error,
    "encode-error: U+AC6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC6D");
    },
    Error,
    "encode-error: U+AC6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC6E");
    },
    Error,
    "encode-error: U+AC6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC6F");
    },
    Error,
    "encode-error: U+AC6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC70");
    },
    Error,
    "encode-error: U+AC70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC71");
    },
    Error,
    "encode-error: U+AC71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC72");
    },
    Error,
    "encode-error: U+AC72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC73");
    },
    Error,
    "encode-error: U+AC73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC74");
    },
    Error,
    "encode-error: U+AC74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC75");
    },
    Error,
    "encode-error: U+AC75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC76");
    },
    Error,
    "encode-error: U+AC76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC77");
    },
    Error,
    "encode-error: U+AC77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC78");
    },
    Error,
    "encode-error: U+AC78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC79");
    },
    Error,
    "encode-error: U+AC79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC7A");
    },
    Error,
    "encode-error: U+AC7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC7B");
    },
    Error,
    "encode-error: U+AC7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC7C");
    },
    Error,
    "encode-error: U+AC7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC7D");
    },
    Error,
    "encode-error: U+AC7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC7E");
    },
    Error,
    "encode-error: U+AC7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC7F");
    },
    Error,
    "encode-error: U+AC7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC80");
    },
    Error,
    "encode-error: U+AC80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC81");
    },
    Error,
    "encode-error: U+AC81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC82");
    },
    Error,
    "encode-error: U+AC82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC83");
    },
    Error,
    "encode-error: U+AC83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC84");
    },
    Error,
    "encode-error: U+AC84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC85");
    },
    Error,
    "encode-error: U+AC85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC86");
    },
    Error,
    "encode-error: U+AC86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC87");
    },
    Error,
    "encode-error: U+AC87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC88");
    },
    Error,
    "encode-error: U+AC88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC89");
    },
    Error,
    "encode-error: U+AC89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC8A");
    },
    Error,
    "encode-error: U+AC8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC8B");
    },
    Error,
    "encode-error: U+AC8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC8C");
    },
    Error,
    "encode-error: U+AC8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC8D");
    },
    Error,
    "encode-error: U+AC8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC8E");
    },
    Error,
    "encode-error: U+AC8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC8F");
    },
    Error,
    "encode-error: U+AC8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC90");
    },
    Error,
    "encode-error: U+AC90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC91");
    },
    Error,
    "encode-error: U+AC91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC92");
    },
    Error,
    "encode-error: U+AC92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC93");
    },
    Error,
    "encode-error: U+AC93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC94");
    },
    Error,
    "encode-error: U+AC94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC95");
    },
    Error,
    "encode-error: U+AC95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC96");
    },
    Error,
    "encode-error: U+AC96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC97");
    },
    Error,
    "encode-error: U+AC97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC98");
    },
    Error,
    "encode-error: U+AC98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC99");
    },
    Error,
    "encode-error: U+AC99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC9A");
    },
    Error,
    "encode-error: U+AC9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC9B");
    },
    Error,
    "encode-error: U+AC9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC9C");
    },
    Error,
    "encode-error: U+AC9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC9D");
    },
    Error,
    "encode-error: U+AC9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC9E");
    },
    Error,
    "encode-error: U+AC9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAC9F");
    },
    Error,
    "encode-error: U+AC9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA0");
    },
    Error,
    "encode-error: U+ACA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA1");
    },
    Error,
    "encode-error: U+ACA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA2");
    },
    Error,
    "encode-error: U+ACA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA3");
    },
    Error,
    "encode-error: U+ACA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA4");
    },
    Error,
    "encode-error: U+ACA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA5");
    },
    Error,
    "encode-error: U+ACA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA6");
    },
    Error,
    "encode-error: U+ACA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA7");
    },
    Error,
    "encode-error: U+ACA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA8");
    },
    Error,
    "encode-error: U+ACA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACA9");
    },
    Error,
    "encode-error: U+ACA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACAA");
    },
    Error,
    "encode-error: U+ACAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACAB");
    },
    Error,
    "encode-error: U+ACAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACAC");
    },
    Error,
    "encode-error: U+ACAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACAD");
    },
    Error,
    "encode-error: U+ACAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACAE");
    },
    Error,
    "encode-error: U+ACAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACAF");
    },
    Error,
    "encode-error: U+ACAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB0");
    },
    Error,
    "encode-error: U+ACB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB1");
    },
    Error,
    "encode-error: U+ACB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB2");
    },
    Error,
    "encode-error: U+ACB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB3");
    },
    Error,
    "encode-error: U+ACB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB4");
    },
    Error,
    "encode-error: U+ACB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB5");
    },
    Error,
    "encode-error: U+ACB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB6");
    },
    Error,
    "encode-error: U+ACB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB7");
    },
    Error,
    "encode-error: U+ACB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB8");
    },
    Error,
    "encode-error: U+ACB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACB9");
    },
    Error,
    "encode-error: U+ACB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACBA");
    },
    Error,
    "encode-error: U+ACBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACBB");
    },
    Error,
    "encode-error: U+ACBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACBC");
    },
    Error,
    "encode-error: U+ACBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACBD");
    },
    Error,
    "encode-error: U+ACBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACBE");
    },
    Error,
    "encode-error: U+ACBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACBF");
    },
    Error,
    "encode-error: U+ACBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC0");
    },
    Error,
    "encode-error: U+ACC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC1");
    },
    Error,
    "encode-error: U+ACC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC2");
    },
    Error,
    "encode-error: U+ACC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC3");
    },
    Error,
    "encode-error: U+ACC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC4");
    },
    Error,
    "encode-error: U+ACC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC5");
    },
    Error,
    "encode-error: U+ACC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC6");
    },
    Error,
    "encode-error: U+ACC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC7");
    },
    Error,
    "encode-error: U+ACC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC8");
    },
    Error,
    "encode-error: U+ACC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACC9");
    },
    Error,
    "encode-error: U+ACC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACCA");
    },
    Error,
    "encode-error: U+ACCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACCB");
    },
    Error,
    "encode-error: U+ACCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACCC");
    },
    Error,
    "encode-error: U+ACCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACCD");
    },
    Error,
    "encode-error: U+ACCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACCE");
    },
    Error,
    "encode-error: U+ACCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACCF");
    },
    Error,
    "encode-error: U+ACCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD0");
    },
    Error,
    "encode-error: U+ACD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD1");
    },
    Error,
    "encode-error: U+ACD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD2");
    },
    Error,
    "encode-error: U+ACD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD3");
    },
    Error,
    "encode-error: U+ACD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD4");
    },
    Error,
    "encode-error: U+ACD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD5");
    },
    Error,
    "encode-error: U+ACD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD6");
    },
    Error,
    "encode-error: U+ACD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD7");
    },
    Error,
    "encode-error: U+ACD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD8");
    },
    Error,
    "encode-error: U+ACD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACD9");
    },
    Error,
    "encode-error: U+ACD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACDA");
    },
    Error,
    "encode-error: U+ACDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACDB");
    },
    Error,
    "encode-error: U+ACDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACDC");
    },
    Error,
    "encode-error: U+ACDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACDD");
    },
    Error,
    "encode-error: U+ACDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACDE");
    },
    Error,
    "encode-error: U+ACDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACDF");
    },
    Error,
    "encode-error: U+ACDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE0");
    },
    Error,
    "encode-error: U+ACE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE1");
    },
    Error,
    "encode-error: U+ACE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE2");
    },
    Error,
    "encode-error: U+ACE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE3");
    },
    Error,
    "encode-error: U+ACE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE4");
    },
    Error,
    "encode-error: U+ACE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE5");
    },
    Error,
    "encode-error: U+ACE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE6");
    },
    Error,
    "encode-error: U+ACE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE7");
    },
    Error,
    "encode-error: U+ACE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE8");
    },
    Error,
    "encode-error: U+ACE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACE9");
    },
    Error,
    "encode-error: U+ACE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACEA");
    },
    Error,
    "encode-error: U+ACEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACEB");
    },
    Error,
    "encode-error: U+ACEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACEC");
    },
    Error,
    "encode-error: U+ACEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACED");
    },
    Error,
    "encode-error: U+ACED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACEE");
    },
    Error,
    "encode-error: U+ACEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACEF");
    },
    Error,
    "encode-error: U+ACEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF0");
    },
    Error,
    "encode-error: U+ACF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF1");
    },
    Error,
    "encode-error: U+ACF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF2");
    },
    Error,
    "encode-error: U+ACF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF3");
    },
    Error,
    "encode-error: U+ACF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF4");
    },
    Error,
    "encode-error: U+ACF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF5");
    },
    Error,
    "encode-error: U+ACF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF6");
    },
    Error,
    "encode-error: U+ACF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF7");
    },
    Error,
    "encode-error: U+ACF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF8");
    },
    Error,
    "encode-error: U+ACF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACF9");
    },
    Error,
    "encode-error: U+ACF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACFA");
    },
    Error,
    "encode-error: U+ACFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACFB");
    },
    Error,
    "encode-error: U+ACFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACFC");
    },
    Error,
    "encode-error: U+ACFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACFD");
    },
    Error,
    "encode-error: U+ACFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACFE");
    },
    Error,
    "encode-error: U+ACFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uACFF");
    },
    Error,
    "encode-error: U+ACFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD00");
    },
    Error,
    "encode-error: U+AD00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD01");
    },
    Error,
    "encode-error: U+AD01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD02");
    },
    Error,
    "encode-error: U+AD02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD03");
    },
    Error,
    "encode-error: U+AD03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD04");
    },
    Error,
    "encode-error: U+AD04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD05");
    },
    Error,
    "encode-error: U+AD05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD06");
    },
    Error,
    "encode-error: U+AD06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD07");
    },
    Error,
    "encode-error: U+AD07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD08");
    },
    Error,
    "encode-error: U+AD08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD09");
    },
    Error,
    "encode-error: U+AD09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD0A");
    },
    Error,
    "encode-error: U+AD0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD0B");
    },
    Error,
    "encode-error: U+AD0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD0C");
    },
    Error,
    "encode-error: U+AD0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD0D");
    },
    Error,
    "encode-error: U+AD0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD0E");
    },
    Error,
    "encode-error: U+AD0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD0F");
    },
    Error,
    "encode-error: U+AD0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD10");
    },
    Error,
    "encode-error: U+AD10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD11");
    },
    Error,
    "encode-error: U+AD11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD12");
    },
    Error,
    "encode-error: U+AD12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD13");
    },
    Error,
    "encode-error: U+AD13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD14");
    },
    Error,
    "encode-error: U+AD14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD15");
    },
    Error,
    "encode-error: U+AD15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD16");
    },
    Error,
    "encode-error: U+AD16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD17");
    },
    Error,
    "encode-error: U+AD17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD18");
    },
    Error,
    "encode-error: U+AD18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD19");
    },
    Error,
    "encode-error: U+AD19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD1A");
    },
    Error,
    "encode-error: U+AD1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD1B");
    },
    Error,
    "encode-error: U+AD1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD1C");
    },
    Error,
    "encode-error: U+AD1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD1D");
    },
    Error,
    "encode-error: U+AD1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD1E");
    },
    Error,
    "encode-error: U+AD1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD1F");
    },
    Error,
    "encode-error: U+AD1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD20");
    },
    Error,
    "encode-error: U+AD20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD21");
    },
    Error,
    "encode-error: U+AD21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD22");
    },
    Error,
    "encode-error: U+AD22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD23");
    },
    Error,
    "encode-error: U+AD23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD24");
    },
    Error,
    "encode-error: U+AD24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD25");
    },
    Error,
    "encode-error: U+AD25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD26");
    },
    Error,
    "encode-error: U+AD26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD27");
    },
    Error,
    "encode-error: U+AD27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD28");
    },
    Error,
    "encode-error: U+AD28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD29");
    },
    Error,
    "encode-error: U+AD29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD2A");
    },
    Error,
    "encode-error: U+AD2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD2B");
    },
    Error,
    "encode-error: U+AD2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD2C");
    },
    Error,
    "encode-error: U+AD2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD2D");
    },
    Error,
    "encode-error: U+AD2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD2E");
    },
    Error,
    "encode-error: U+AD2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD2F");
    },
    Error,
    "encode-error: U+AD2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD30");
    },
    Error,
    "encode-error: U+AD30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD31");
    },
    Error,
    "encode-error: U+AD31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD32");
    },
    Error,
    "encode-error: U+AD32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD33");
    },
    Error,
    "encode-error: U+AD33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD34");
    },
    Error,
    "encode-error: U+AD34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD35");
    },
    Error,
    "encode-error: U+AD35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD36");
    },
    Error,
    "encode-error: U+AD36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD37");
    },
    Error,
    "encode-error: U+AD37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD38");
    },
    Error,
    "encode-error: U+AD38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD39");
    },
    Error,
    "encode-error: U+AD39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD3A");
    },
    Error,
    "encode-error: U+AD3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD3B");
    },
    Error,
    "encode-error: U+AD3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD3C");
    },
    Error,
    "encode-error: U+AD3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD3D");
    },
    Error,
    "encode-error: U+AD3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD3E");
    },
    Error,
    "encode-error: U+AD3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD3F");
    },
    Error,
    "encode-error: U+AD3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD40");
    },
    Error,
    "encode-error: U+AD40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD41");
    },
    Error,
    "encode-error: U+AD41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD42");
    },
    Error,
    "encode-error: U+AD42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD43");
    },
    Error,
    "encode-error: U+AD43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD44");
    },
    Error,
    "encode-error: U+AD44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD45");
    },
    Error,
    "encode-error: U+AD45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD46");
    },
    Error,
    "encode-error: U+AD46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD47");
    },
    Error,
    "encode-error: U+AD47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD48");
    },
    Error,
    "encode-error: U+AD48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD49");
    },
    Error,
    "encode-error: U+AD49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD4A");
    },
    Error,
    "encode-error: U+AD4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD4B");
    },
    Error,
    "encode-error: U+AD4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD4C");
    },
    Error,
    "encode-error: U+AD4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD4D");
    },
    Error,
    "encode-error: U+AD4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD4E");
    },
    Error,
    "encode-error: U+AD4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD4F");
    },
    Error,
    "encode-error: U+AD4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD50");
    },
    Error,
    "encode-error: U+AD50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD51");
    },
    Error,
    "encode-error: U+AD51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD52");
    },
    Error,
    "encode-error: U+AD52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD53");
    },
    Error,
    "encode-error: U+AD53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD54");
    },
    Error,
    "encode-error: U+AD54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD55");
    },
    Error,
    "encode-error: U+AD55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD56");
    },
    Error,
    "encode-error: U+AD56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD57");
    },
    Error,
    "encode-error: U+AD57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD58");
    },
    Error,
    "encode-error: U+AD58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD59");
    },
    Error,
    "encode-error: U+AD59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD5A");
    },
    Error,
    "encode-error: U+AD5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD5B");
    },
    Error,
    "encode-error: U+AD5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD5C");
    },
    Error,
    "encode-error: U+AD5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD5D");
    },
    Error,
    "encode-error: U+AD5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD5E");
    },
    Error,
    "encode-error: U+AD5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD5F");
    },
    Error,
    "encode-error: U+AD5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD60");
    },
    Error,
    "encode-error: U+AD60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD61");
    },
    Error,
    "encode-error: U+AD61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD62");
    },
    Error,
    "encode-error: U+AD62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD63");
    },
    Error,
    "encode-error: U+AD63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD64");
    },
    Error,
    "encode-error: U+AD64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD65");
    },
    Error,
    "encode-error: U+AD65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD66");
    },
    Error,
    "encode-error: U+AD66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD67");
    },
    Error,
    "encode-error: U+AD67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD68");
    },
    Error,
    "encode-error: U+AD68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD69");
    },
    Error,
    "encode-error: U+AD69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD6A");
    },
    Error,
    "encode-error: U+AD6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD6B");
    },
    Error,
    "encode-error: U+AD6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD6C");
    },
    Error,
    "encode-error: U+AD6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD6D");
    },
    Error,
    "encode-error: U+AD6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD6E");
    },
    Error,
    "encode-error: U+AD6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD6F");
    },
    Error,
    "encode-error: U+AD6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD70");
    },
    Error,
    "encode-error: U+AD70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD71");
    },
    Error,
    "encode-error: U+AD71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD72");
    },
    Error,
    "encode-error: U+AD72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD73");
    },
    Error,
    "encode-error: U+AD73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD74");
    },
    Error,
    "encode-error: U+AD74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD75");
    },
    Error,
    "encode-error: U+AD75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD76");
    },
    Error,
    "encode-error: U+AD76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD77");
    },
    Error,
    "encode-error: U+AD77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD78");
    },
    Error,
    "encode-error: U+AD78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD79");
    },
    Error,
    "encode-error: U+AD79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD7A");
    },
    Error,
    "encode-error: U+AD7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD7B");
    },
    Error,
    "encode-error: U+AD7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD7C");
    },
    Error,
    "encode-error: U+AD7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD7D");
    },
    Error,
    "encode-error: U+AD7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD7E");
    },
    Error,
    "encode-error: U+AD7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD7F");
    },
    Error,
    "encode-error: U+AD7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD80");
    },
    Error,
    "encode-error: U+AD80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD81");
    },
    Error,
    "encode-error: U+AD81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD82");
    },
    Error,
    "encode-error: U+AD82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD83");
    },
    Error,
    "encode-error: U+AD83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD84");
    },
    Error,
    "encode-error: U+AD84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD85");
    },
    Error,
    "encode-error: U+AD85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD86");
    },
    Error,
    "encode-error: U+AD86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD87");
    },
    Error,
    "encode-error: U+AD87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD88");
    },
    Error,
    "encode-error: U+AD88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD89");
    },
    Error,
    "encode-error: U+AD89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD8A");
    },
    Error,
    "encode-error: U+AD8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD8B");
    },
    Error,
    "encode-error: U+AD8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD8C");
    },
    Error,
    "encode-error: U+AD8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD8D");
    },
    Error,
    "encode-error: U+AD8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD8E");
    },
    Error,
    "encode-error: U+AD8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD8F");
    },
    Error,
    "encode-error: U+AD8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD90");
    },
    Error,
    "encode-error: U+AD90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD91");
    },
    Error,
    "encode-error: U+AD91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD92");
    },
    Error,
    "encode-error: U+AD92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD93");
    },
    Error,
    "encode-error: U+AD93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD94");
    },
    Error,
    "encode-error: U+AD94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD95");
    },
    Error,
    "encode-error: U+AD95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD96");
    },
    Error,
    "encode-error: U+AD96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD97");
    },
    Error,
    "encode-error: U+AD97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD98");
    },
    Error,
    "encode-error: U+AD98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD99");
    },
    Error,
    "encode-error: U+AD99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD9A");
    },
    Error,
    "encode-error: U+AD9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD9B");
    },
    Error,
    "encode-error: U+AD9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD9C");
    },
    Error,
    "encode-error: U+AD9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD9D");
    },
    Error,
    "encode-error: U+AD9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD9E");
    },
    Error,
    "encode-error: U+AD9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAD9F");
    },
    Error,
    "encode-error: U+AD9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA0");
    },
    Error,
    "encode-error: U+ADA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA1");
    },
    Error,
    "encode-error: U+ADA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA2");
    },
    Error,
    "encode-error: U+ADA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA3");
    },
    Error,
    "encode-error: U+ADA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA4");
    },
    Error,
    "encode-error: U+ADA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA5");
    },
    Error,
    "encode-error: U+ADA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA6");
    },
    Error,
    "encode-error: U+ADA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA7");
    },
    Error,
    "encode-error: U+ADA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA8");
    },
    Error,
    "encode-error: U+ADA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADA9");
    },
    Error,
    "encode-error: U+ADA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADAA");
    },
    Error,
    "encode-error: U+ADAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADAB");
    },
    Error,
    "encode-error: U+ADAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADAC");
    },
    Error,
    "encode-error: U+ADAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADAD");
    },
    Error,
    "encode-error: U+ADAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADAE");
    },
    Error,
    "encode-error: U+ADAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADAF");
    },
    Error,
    "encode-error: U+ADAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB0");
    },
    Error,
    "encode-error: U+ADB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB1");
    },
    Error,
    "encode-error: U+ADB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB2");
    },
    Error,
    "encode-error: U+ADB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB3");
    },
    Error,
    "encode-error: U+ADB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB4");
    },
    Error,
    "encode-error: U+ADB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB5");
    },
    Error,
    "encode-error: U+ADB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB6");
    },
    Error,
    "encode-error: U+ADB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB7");
    },
    Error,
    "encode-error: U+ADB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB8");
    },
    Error,
    "encode-error: U+ADB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADB9");
    },
    Error,
    "encode-error: U+ADB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADBA");
    },
    Error,
    "encode-error: U+ADBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADBB");
    },
    Error,
    "encode-error: U+ADBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADBC");
    },
    Error,
    "encode-error: U+ADBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADBD");
    },
    Error,
    "encode-error: U+ADBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADBE");
    },
    Error,
    "encode-error: U+ADBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADBF");
    },
    Error,
    "encode-error: U+ADBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC0");
    },
    Error,
    "encode-error: U+ADC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC1");
    },
    Error,
    "encode-error: U+ADC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC2");
    },
    Error,
    "encode-error: U+ADC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC3");
    },
    Error,
    "encode-error: U+ADC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC4");
    },
    Error,
    "encode-error: U+ADC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC5");
    },
    Error,
    "encode-error: U+ADC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC6");
    },
    Error,
    "encode-error: U+ADC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC7");
    },
    Error,
    "encode-error: U+ADC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC8");
    },
    Error,
    "encode-error: U+ADC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADC9");
    },
    Error,
    "encode-error: U+ADC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADCA");
    },
    Error,
    "encode-error: U+ADCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADCB");
    },
    Error,
    "encode-error: U+ADCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADCC");
    },
    Error,
    "encode-error: U+ADCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADCD");
    },
    Error,
    "encode-error: U+ADCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADCE");
    },
    Error,
    "encode-error: U+ADCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADCF");
    },
    Error,
    "encode-error: U+ADCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD0");
    },
    Error,
    "encode-error: U+ADD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD1");
    },
    Error,
    "encode-error: U+ADD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD2");
    },
    Error,
    "encode-error: U+ADD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD3");
    },
    Error,
    "encode-error: U+ADD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD4");
    },
    Error,
    "encode-error: U+ADD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD5");
    },
    Error,
    "encode-error: U+ADD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD6");
    },
    Error,
    "encode-error: U+ADD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD7");
    },
    Error,
    "encode-error: U+ADD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD8");
    },
    Error,
    "encode-error: U+ADD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADD9");
    },
    Error,
    "encode-error: U+ADD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADDA");
    },
    Error,
    "encode-error: U+ADDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADDB");
    },
    Error,
    "encode-error: U+ADDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADDC");
    },
    Error,
    "encode-error: U+ADDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADDD");
    },
    Error,
    "encode-error: U+ADDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADDE");
    },
    Error,
    "encode-error: U+ADDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADDF");
    },
    Error,
    "encode-error: U+ADDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE0");
    },
    Error,
    "encode-error: U+ADE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE1");
    },
    Error,
    "encode-error: U+ADE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE2");
    },
    Error,
    "encode-error: U+ADE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE3");
    },
    Error,
    "encode-error: U+ADE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE4");
    },
    Error,
    "encode-error: U+ADE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE5");
    },
    Error,
    "encode-error: U+ADE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE6");
    },
    Error,
    "encode-error: U+ADE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE7");
    },
    Error,
    "encode-error: U+ADE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE8");
    },
    Error,
    "encode-error: U+ADE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADE9");
    },
    Error,
    "encode-error: U+ADE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADEA");
    },
    Error,
    "encode-error: U+ADEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADEB");
    },
    Error,
    "encode-error: U+ADEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADEC");
    },
    Error,
    "encode-error: U+ADEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADED");
    },
    Error,
    "encode-error: U+ADED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADEE");
    },
    Error,
    "encode-error: U+ADEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADEF");
    },
    Error,
    "encode-error: U+ADEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF0");
    },
    Error,
    "encode-error: U+ADF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF1");
    },
    Error,
    "encode-error: U+ADF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF2");
    },
    Error,
    "encode-error: U+ADF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF3");
    },
    Error,
    "encode-error: U+ADF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF4");
    },
    Error,
    "encode-error: U+ADF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF5");
    },
    Error,
    "encode-error: U+ADF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF6");
    },
    Error,
    "encode-error: U+ADF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF7");
    },
    Error,
    "encode-error: U+ADF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF8");
    },
    Error,
    "encode-error: U+ADF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADF9");
    },
    Error,
    "encode-error: U+ADF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADFA");
    },
    Error,
    "encode-error: U+ADFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADFB");
    },
    Error,
    "encode-error: U+ADFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADFC");
    },
    Error,
    "encode-error: U+ADFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADFD");
    },
    Error,
    "encode-error: U+ADFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADFE");
    },
    Error,
    "encode-error: U+ADFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uADFF");
    },
    Error,
    "encode-error: U+ADFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE00");
    },
    Error,
    "encode-error: U+AE00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE01");
    },
    Error,
    "encode-error: U+AE01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE02");
    },
    Error,
    "encode-error: U+AE02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE03");
    },
    Error,
    "encode-error: U+AE03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE04");
    },
    Error,
    "encode-error: U+AE04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE05");
    },
    Error,
    "encode-error: U+AE05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE06");
    },
    Error,
    "encode-error: U+AE06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE07");
    },
    Error,
    "encode-error: U+AE07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE08");
    },
    Error,
    "encode-error: U+AE08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE09");
    },
    Error,
    "encode-error: U+AE09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE0A");
    },
    Error,
    "encode-error: U+AE0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE0B");
    },
    Error,
    "encode-error: U+AE0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE0C");
    },
    Error,
    "encode-error: U+AE0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE0D");
    },
    Error,
    "encode-error: U+AE0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE0E");
    },
    Error,
    "encode-error: U+AE0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE0F");
    },
    Error,
    "encode-error: U+AE0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE10");
    },
    Error,
    "encode-error: U+AE10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE11");
    },
    Error,
    "encode-error: U+AE11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE12");
    },
    Error,
    "encode-error: U+AE12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE13");
    },
    Error,
    "encode-error: U+AE13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE14");
    },
    Error,
    "encode-error: U+AE14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE15");
    },
    Error,
    "encode-error: U+AE15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE16");
    },
    Error,
    "encode-error: U+AE16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE17");
    },
    Error,
    "encode-error: U+AE17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE18");
    },
    Error,
    "encode-error: U+AE18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE19");
    },
    Error,
    "encode-error: U+AE19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE1A");
    },
    Error,
    "encode-error: U+AE1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE1B");
    },
    Error,
    "encode-error: U+AE1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE1C");
    },
    Error,
    "encode-error: U+AE1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE1D");
    },
    Error,
    "encode-error: U+AE1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE1E");
    },
    Error,
    "encode-error: U+AE1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE1F");
    },
    Error,
    "encode-error: U+AE1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE20");
    },
    Error,
    "encode-error: U+AE20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE21");
    },
    Error,
    "encode-error: U+AE21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE22");
    },
    Error,
    "encode-error: U+AE22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE23");
    },
    Error,
    "encode-error: U+AE23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE24");
    },
    Error,
    "encode-error: U+AE24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE25");
    },
    Error,
    "encode-error: U+AE25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE26");
    },
    Error,
    "encode-error: U+AE26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE27");
    },
    Error,
    "encode-error: U+AE27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE28");
    },
    Error,
    "encode-error: U+AE28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE29");
    },
    Error,
    "encode-error: U+AE29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE2A");
    },
    Error,
    "encode-error: U+AE2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE2B");
    },
    Error,
    "encode-error: U+AE2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE2C");
    },
    Error,
    "encode-error: U+AE2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE2D");
    },
    Error,
    "encode-error: U+AE2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE2E");
    },
    Error,
    "encode-error: U+AE2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE2F");
    },
    Error,
    "encode-error: U+AE2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE30");
    },
    Error,
    "encode-error: U+AE30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE31");
    },
    Error,
    "encode-error: U+AE31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE32");
    },
    Error,
    "encode-error: U+AE32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE33");
    },
    Error,
    "encode-error: U+AE33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE34");
    },
    Error,
    "encode-error: U+AE34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE35");
    },
    Error,
    "encode-error: U+AE35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE36");
    },
    Error,
    "encode-error: U+AE36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE37");
    },
    Error,
    "encode-error: U+AE37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE38");
    },
    Error,
    "encode-error: U+AE38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE39");
    },
    Error,
    "encode-error: U+AE39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE3A");
    },
    Error,
    "encode-error: U+AE3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE3B");
    },
    Error,
    "encode-error: U+AE3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE3C");
    },
    Error,
    "encode-error: U+AE3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE3D");
    },
    Error,
    "encode-error: U+AE3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE3E");
    },
    Error,
    "encode-error: U+AE3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE3F");
    },
    Error,
    "encode-error: U+AE3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE40");
    },
    Error,
    "encode-error: U+AE40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE41");
    },
    Error,
    "encode-error: U+AE41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE42");
    },
    Error,
    "encode-error: U+AE42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE43");
    },
    Error,
    "encode-error: U+AE43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE44");
    },
    Error,
    "encode-error: U+AE44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE45");
    },
    Error,
    "encode-error: U+AE45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE46");
    },
    Error,
    "encode-error: U+AE46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE47");
    },
    Error,
    "encode-error: U+AE47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE48");
    },
    Error,
    "encode-error: U+AE48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE49");
    },
    Error,
    "encode-error: U+AE49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE4A");
    },
    Error,
    "encode-error: U+AE4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE4B");
    },
    Error,
    "encode-error: U+AE4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE4C");
    },
    Error,
    "encode-error: U+AE4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE4D");
    },
    Error,
    "encode-error: U+AE4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE4E");
    },
    Error,
    "encode-error: U+AE4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE4F");
    },
    Error,
    "encode-error: U+AE4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE50");
    },
    Error,
    "encode-error: U+AE50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE51");
    },
    Error,
    "encode-error: U+AE51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE52");
    },
    Error,
    "encode-error: U+AE52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE53");
    },
    Error,
    "encode-error: U+AE53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE54");
    },
    Error,
    "encode-error: U+AE54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE55");
    },
    Error,
    "encode-error: U+AE55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE56");
    },
    Error,
    "encode-error: U+AE56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE57");
    },
    Error,
    "encode-error: U+AE57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE58");
    },
    Error,
    "encode-error: U+AE58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE59");
    },
    Error,
    "encode-error: U+AE59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE5A");
    },
    Error,
    "encode-error: U+AE5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE5B");
    },
    Error,
    "encode-error: U+AE5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE5C");
    },
    Error,
    "encode-error: U+AE5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE5D");
    },
    Error,
    "encode-error: U+AE5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE5E");
    },
    Error,
    "encode-error: U+AE5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE5F");
    },
    Error,
    "encode-error: U+AE5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE60");
    },
    Error,
    "encode-error: U+AE60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE61");
    },
    Error,
    "encode-error: U+AE61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE62");
    },
    Error,
    "encode-error: U+AE62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE63");
    },
    Error,
    "encode-error: U+AE63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE64");
    },
    Error,
    "encode-error: U+AE64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE65");
    },
    Error,
    "encode-error: U+AE65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE66");
    },
    Error,
    "encode-error: U+AE66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE67");
    },
    Error,
    "encode-error: U+AE67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE68");
    },
    Error,
    "encode-error: U+AE68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE69");
    },
    Error,
    "encode-error: U+AE69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE6A");
    },
    Error,
    "encode-error: U+AE6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE6B");
    },
    Error,
    "encode-error: U+AE6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE6C");
    },
    Error,
    "encode-error: U+AE6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE6D");
    },
    Error,
    "encode-error: U+AE6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE6E");
    },
    Error,
    "encode-error: U+AE6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE6F");
    },
    Error,
    "encode-error: U+AE6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE70");
    },
    Error,
    "encode-error: U+AE70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE71");
    },
    Error,
    "encode-error: U+AE71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE72");
    },
    Error,
    "encode-error: U+AE72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE73");
    },
    Error,
    "encode-error: U+AE73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE74");
    },
    Error,
    "encode-error: U+AE74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE75");
    },
    Error,
    "encode-error: U+AE75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE76");
    },
    Error,
    "encode-error: U+AE76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE77");
    },
    Error,
    "encode-error: U+AE77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE78");
    },
    Error,
    "encode-error: U+AE78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE79");
    },
    Error,
    "encode-error: U+AE79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE7A");
    },
    Error,
    "encode-error: U+AE7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE7B");
    },
    Error,
    "encode-error: U+AE7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE7C");
    },
    Error,
    "encode-error: U+AE7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE7D");
    },
    Error,
    "encode-error: U+AE7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE7E");
    },
    Error,
    "encode-error: U+AE7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE7F");
    },
    Error,
    "encode-error: U+AE7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE80");
    },
    Error,
    "encode-error: U+AE80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE81");
    },
    Error,
    "encode-error: U+AE81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE82");
    },
    Error,
    "encode-error: U+AE82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE83");
    },
    Error,
    "encode-error: U+AE83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE84");
    },
    Error,
    "encode-error: U+AE84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE85");
    },
    Error,
    "encode-error: U+AE85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE86");
    },
    Error,
    "encode-error: U+AE86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE87");
    },
    Error,
    "encode-error: U+AE87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE88");
    },
    Error,
    "encode-error: U+AE88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE89");
    },
    Error,
    "encode-error: U+AE89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE8A");
    },
    Error,
    "encode-error: U+AE8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE8B");
    },
    Error,
    "encode-error: U+AE8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE8C");
    },
    Error,
    "encode-error: U+AE8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE8D");
    },
    Error,
    "encode-error: U+AE8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE8E");
    },
    Error,
    "encode-error: U+AE8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE8F");
    },
    Error,
    "encode-error: U+AE8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE90");
    },
    Error,
    "encode-error: U+AE90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE91");
    },
    Error,
    "encode-error: U+AE91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE92");
    },
    Error,
    "encode-error: U+AE92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE93");
    },
    Error,
    "encode-error: U+AE93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE94");
    },
    Error,
    "encode-error: U+AE94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE95");
    },
    Error,
    "encode-error: U+AE95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE96");
    },
    Error,
    "encode-error: U+AE96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE97");
    },
    Error,
    "encode-error: U+AE97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE98");
    },
    Error,
    "encode-error: U+AE98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE99");
    },
    Error,
    "encode-error: U+AE99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE9A");
    },
    Error,
    "encode-error: U+AE9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE9B");
    },
    Error,
    "encode-error: U+AE9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE9C");
    },
    Error,
    "encode-error: U+AE9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE9D");
    },
    Error,
    "encode-error: U+AE9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE9E");
    },
    Error,
    "encode-error: U+AE9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAE9F");
    },
    Error,
    "encode-error: U+AE9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA0");
    },
    Error,
    "encode-error: U+AEA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA1");
    },
    Error,
    "encode-error: U+AEA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA2");
    },
    Error,
    "encode-error: U+AEA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA3");
    },
    Error,
    "encode-error: U+AEA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA4");
    },
    Error,
    "encode-error: U+AEA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA5");
    },
    Error,
    "encode-error: U+AEA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA6");
    },
    Error,
    "encode-error: U+AEA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA7");
    },
    Error,
    "encode-error: U+AEA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA8");
    },
    Error,
    "encode-error: U+AEA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEA9");
    },
    Error,
    "encode-error: U+AEA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEAA");
    },
    Error,
    "encode-error: U+AEAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEAB");
    },
    Error,
    "encode-error: U+AEAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEAC");
    },
    Error,
    "encode-error: U+AEAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEAD");
    },
    Error,
    "encode-error: U+AEAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEAE");
    },
    Error,
    "encode-error: U+AEAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEAF");
    },
    Error,
    "encode-error: U+AEAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB0");
    },
    Error,
    "encode-error: U+AEB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB1");
    },
    Error,
    "encode-error: U+AEB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB2");
    },
    Error,
    "encode-error: U+AEB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB3");
    },
    Error,
    "encode-error: U+AEB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB4");
    },
    Error,
    "encode-error: U+AEB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB5");
    },
    Error,
    "encode-error: U+AEB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB6");
    },
    Error,
    "encode-error: U+AEB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB7");
    },
    Error,
    "encode-error: U+AEB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB8");
    },
    Error,
    "encode-error: U+AEB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEB9");
    },
    Error,
    "encode-error: U+AEB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEBA");
    },
    Error,
    "encode-error: U+AEBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEBB");
    },
    Error,
    "encode-error: U+AEBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEBC");
    },
    Error,
    "encode-error: U+AEBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEBD");
    },
    Error,
    "encode-error: U+AEBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEBE");
    },
    Error,
    "encode-error: U+AEBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEBF");
    },
    Error,
    "encode-error: U+AEBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC0");
    },
    Error,
    "encode-error: U+AEC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC1");
    },
    Error,
    "encode-error: U+AEC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC2");
    },
    Error,
    "encode-error: U+AEC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC3");
    },
    Error,
    "encode-error: U+AEC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC4");
    },
    Error,
    "encode-error: U+AEC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC5");
    },
    Error,
    "encode-error: U+AEC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC6");
    },
    Error,
    "encode-error: U+AEC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC7");
    },
    Error,
    "encode-error: U+AEC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC8");
    },
    Error,
    "encode-error: U+AEC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEC9");
    },
    Error,
    "encode-error: U+AEC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAECA");
    },
    Error,
    "encode-error: U+AECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAECB");
    },
    Error,
    "encode-error: U+AECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAECC");
    },
    Error,
    "encode-error: U+AECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAECD");
    },
    Error,
    "encode-error: U+AECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAECE");
    },
    Error,
    "encode-error: U+AECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAECF");
    },
    Error,
    "encode-error: U+AECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED0");
    },
    Error,
    "encode-error: U+AED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED1");
    },
    Error,
    "encode-error: U+AED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED2");
    },
    Error,
    "encode-error: U+AED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED3");
    },
    Error,
    "encode-error: U+AED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED4");
    },
    Error,
    "encode-error: U+AED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED5");
    },
    Error,
    "encode-error: U+AED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED6");
    },
    Error,
    "encode-error: U+AED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED7");
    },
    Error,
    "encode-error: U+AED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED8");
    },
    Error,
    "encode-error: U+AED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAED9");
    },
    Error,
    "encode-error: U+AED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEDA");
    },
    Error,
    "encode-error: U+AEDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEDB");
    },
    Error,
    "encode-error: U+AEDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEDC");
    },
    Error,
    "encode-error: U+AEDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEDD");
    },
    Error,
    "encode-error: U+AEDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEDE");
    },
    Error,
    "encode-error: U+AEDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEDF");
    },
    Error,
    "encode-error: U+AEDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE0");
    },
    Error,
    "encode-error: U+AEE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE1");
    },
    Error,
    "encode-error: U+AEE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE2");
    },
    Error,
    "encode-error: U+AEE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE3");
    },
    Error,
    "encode-error: U+AEE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE4");
    },
    Error,
    "encode-error: U+AEE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE5");
    },
    Error,
    "encode-error: U+AEE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE6");
    },
    Error,
    "encode-error: U+AEE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE7");
    },
    Error,
    "encode-error: U+AEE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE8");
    },
    Error,
    "encode-error: U+AEE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEE9");
    },
    Error,
    "encode-error: U+AEE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEEA");
    },
    Error,
    "encode-error: U+AEEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEEB");
    },
    Error,
    "encode-error: U+AEEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEEC");
    },
    Error,
    "encode-error: U+AEEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEED");
    },
    Error,
    "encode-error: U+AEED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEEE");
    },
    Error,
    "encode-error: U+AEEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEEF");
    },
    Error,
    "encode-error: U+AEEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF0");
    },
    Error,
    "encode-error: U+AEF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF1");
    },
    Error,
    "encode-error: U+AEF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF2");
    },
    Error,
    "encode-error: U+AEF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF3");
    },
    Error,
    "encode-error: U+AEF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF4");
    },
    Error,
    "encode-error: U+AEF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF5");
    },
    Error,
    "encode-error: U+AEF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF6");
    },
    Error,
    "encode-error: U+AEF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF7");
    },
    Error,
    "encode-error: U+AEF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF8");
    },
    Error,
    "encode-error: U+AEF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEF9");
    },
    Error,
    "encode-error: U+AEF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEFA");
    },
    Error,
    "encode-error: U+AEFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEFB");
    },
    Error,
    "encode-error: U+AEFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEFC");
    },
    Error,
    "encode-error: U+AEFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEFD");
    },
    Error,
    "encode-error: U+AEFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEFE");
    },
    Error,
    "encode-error: U+AEFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAEFF");
    },
    Error,
    "encode-error: U+AEFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF00");
    },
    Error,
    "encode-error: U+AF00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF01");
    },
    Error,
    "encode-error: U+AF01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF02");
    },
    Error,
    "encode-error: U+AF02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF03");
    },
    Error,
    "encode-error: U+AF03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF04");
    },
    Error,
    "encode-error: U+AF04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF05");
    },
    Error,
    "encode-error: U+AF05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF06");
    },
    Error,
    "encode-error: U+AF06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF07");
    },
    Error,
    "encode-error: U+AF07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF08");
    },
    Error,
    "encode-error: U+AF08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF09");
    },
    Error,
    "encode-error: U+AF09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF0A");
    },
    Error,
    "encode-error: U+AF0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF0B");
    },
    Error,
    "encode-error: U+AF0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF0C");
    },
    Error,
    "encode-error: U+AF0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF0D");
    },
    Error,
    "encode-error: U+AF0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF0E");
    },
    Error,
    "encode-error: U+AF0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF0F");
    },
    Error,
    "encode-error: U+AF0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF10");
    },
    Error,
    "encode-error: U+AF10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF11");
    },
    Error,
    "encode-error: U+AF11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF12");
    },
    Error,
    "encode-error: U+AF12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF13");
    },
    Error,
    "encode-error: U+AF13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF14");
    },
    Error,
    "encode-error: U+AF14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF15");
    },
    Error,
    "encode-error: U+AF15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF16");
    },
    Error,
    "encode-error: U+AF16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF17");
    },
    Error,
    "encode-error: U+AF17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF18");
    },
    Error,
    "encode-error: U+AF18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF19");
    },
    Error,
    "encode-error: U+AF19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF1A");
    },
    Error,
    "encode-error: U+AF1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF1B");
    },
    Error,
    "encode-error: U+AF1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF1C");
    },
    Error,
    "encode-error: U+AF1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF1D");
    },
    Error,
    "encode-error: U+AF1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF1E");
    },
    Error,
    "encode-error: U+AF1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF1F");
    },
    Error,
    "encode-error: U+AF1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF20");
    },
    Error,
    "encode-error: U+AF20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF21");
    },
    Error,
    "encode-error: U+AF21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF22");
    },
    Error,
    "encode-error: U+AF22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF23");
    },
    Error,
    "encode-error: U+AF23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF24");
    },
    Error,
    "encode-error: U+AF24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF25");
    },
    Error,
    "encode-error: U+AF25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF26");
    },
    Error,
    "encode-error: U+AF26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF27");
    },
    Error,
    "encode-error: U+AF27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF28");
    },
    Error,
    "encode-error: U+AF28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF29");
    },
    Error,
    "encode-error: U+AF29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF2A");
    },
    Error,
    "encode-error: U+AF2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF2B");
    },
    Error,
    "encode-error: U+AF2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF2C");
    },
    Error,
    "encode-error: U+AF2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF2D");
    },
    Error,
    "encode-error: U+AF2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF2E");
    },
    Error,
    "encode-error: U+AF2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF2F");
    },
    Error,
    "encode-error: U+AF2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF30");
    },
    Error,
    "encode-error: U+AF30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF31");
    },
    Error,
    "encode-error: U+AF31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF32");
    },
    Error,
    "encode-error: U+AF32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF33");
    },
    Error,
    "encode-error: U+AF33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF34");
    },
    Error,
    "encode-error: U+AF34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF35");
    },
    Error,
    "encode-error: U+AF35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF36");
    },
    Error,
    "encode-error: U+AF36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF37");
    },
    Error,
    "encode-error: U+AF37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF38");
    },
    Error,
    "encode-error: U+AF38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF39");
    },
    Error,
    "encode-error: U+AF39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF3A");
    },
    Error,
    "encode-error: U+AF3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF3B");
    },
    Error,
    "encode-error: U+AF3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF3C");
    },
    Error,
    "encode-error: U+AF3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF3D");
    },
    Error,
    "encode-error: U+AF3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF3E");
    },
    Error,
    "encode-error: U+AF3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF3F");
    },
    Error,
    "encode-error: U+AF3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF40");
    },
    Error,
    "encode-error: U+AF40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF41");
    },
    Error,
    "encode-error: U+AF41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF42");
    },
    Error,
    "encode-error: U+AF42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF43");
    },
    Error,
    "encode-error: U+AF43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF44");
    },
    Error,
    "encode-error: U+AF44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF45");
    },
    Error,
    "encode-error: U+AF45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF46");
    },
    Error,
    "encode-error: U+AF46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF47");
    },
    Error,
    "encode-error: U+AF47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF48");
    },
    Error,
    "encode-error: U+AF48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF49");
    },
    Error,
    "encode-error: U+AF49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF4A");
    },
    Error,
    "encode-error: U+AF4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF4B");
    },
    Error,
    "encode-error: U+AF4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF4C");
    },
    Error,
    "encode-error: U+AF4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF4D");
    },
    Error,
    "encode-error: U+AF4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF4E");
    },
    Error,
    "encode-error: U+AF4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF4F");
    },
    Error,
    "encode-error: U+AF4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF50");
    },
    Error,
    "encode-error: U+AF50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF51");
    },
    Error,
    "encode-error: U+AF51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF52");
    },
    Error,
    "encode-error: U+AF52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF53");
    },
    Error,
    "encode-error: U+AF53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF54");
    },
    Error,
    "encode-error: U+AF54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF55");
    },
    Error,
    "encode-error: U+AF55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF56");
    },
    Error,
    "encode-error: U+AF56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF57");
    },
    Error,
    "encode-error: U+AF57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF58");
    },
    Error,
    "encode-error: U+AF58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF59");
    },
    Error,
    "encode-error: U+AF59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF5A");
    },
    Error,
    "encode-error: U+AF5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF5B");
    },
    Error,
    "encode-error: U+AF5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF5C");
    },
    Error,
    "encode-error: U+AF5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF5D");
    },
    Error,
    "encode-error: U+AF5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF5E");
    },
    Error,
    "encode-error: U+AF5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF5F");
    },
    Error,
    "encode-error: U+AF5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF60");
    },
    Error,
    "encode-error: U+AF60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF61");
    },
    Error,
    "encode-error: U+AF61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF62");
    },
    Error,
    "encode-error: U+AF62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF63");
    },
    Error,
    "encode-error: U+AF63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF64");
    },
    Error,
    "encode-error: U+AF64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF65");
    },
    Error,
    "encode-error: U+AF65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF66");
    },
    Error,
    "encode-error: U+AF66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF67");
    },
    Error,
    "encode-error: U+AF67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF68");
    },
    Error,
    "encode-error: U+AF68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF69");
    },
    Error,
    "encode-error: U+AF69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF6A");
    },
    Error,
    "encode-error: U+AF6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF6B");
    },
    Error,
    "encode-error: U+AF6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF6C");
    },
    Error,
    "encode-error: U+AF6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF6D");
    },
    Error,
    "encode-error: U+AF6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF6E");
    },
    Error,
    "encode-error: U+AF6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF6F");
    },
    Error,
    "encode-error: U+AF6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF70");
    },
    Error,
    "encode-error: U+AF70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF71");
    },
    Error,
    "encode-error: U+AF71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF72");
    },
    Error,
    "encode-error: U+AF72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF73");
    },
    Error,
    "encode-error: U+AF73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF74");
    },
    Error,
    "encode-error: U+AF74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF75");
    },
    Error,
    "encode-error: U+AF75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF76");
    },
    Error,
    "encode-error: U+AF76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF77");
    },
    Error,
    "encode-error: U+AF77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF78");
    },
    Error,
    "encode-error: U+AF78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF79");
    },
    Error,
    "encode-error: U+AF79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF7A");
    },
    Error,
    "encode-error: U+AF7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF7B");
    },
    Error,
    "encode-error: U+AF7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF7C");
    },
    Error,
    "encode-error: U+AF7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF7D");
    },
    Error,
    "encode-error: U+AF7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF7E");
    },
    Error,
    "encode-error: U+AF7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF7F");
    },
    Error,
    "encode-error: U+AF7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF80");
    },
    Error,
    "encode-error: U+AF80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF81");
    },
    Error,
    "encode-error: U+AF81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF82");
    },
    Error,
    "encode-error: U+AF82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF83");
    },
    Error,
    "encode-error: U+AF83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF84");
    },
    Error,
    "encode-error: U+AF84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF85");
    },
    Error,
    "encode-error: U+AF85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF86");
    },
    Error,
    "encode-error: U+AF86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF87");
    },
    Error,
    "encode-error: U+AF87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF88");
    },
    Error,
    "encode-error: U+AF88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF89");
    },
    Error,
    "encode-error: U+AF89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF8A");
    },
    Error,
    "encode-error: U+AF8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF8B");
    },
    Error,
    "encode-error: U+AF8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF8C");
    },
    Error,
    "encode-error: U+AF8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF8D");
    },
    Error,
    "encode-error: U+AF8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF8E");
    },
    Error,
    "encode-error: U+AF8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF8F");
    },
    Error,
    "encode-error: U+AF8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF90");
    },
    Error,
    "encode-error: U+AF90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF91");
    },
    Error,
    "encode-error: U+AF91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF92");
    },
    Error,
    "encode-error: U+AF92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF93");
    },
    Error,
    "encode-error: U+AF93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF94");
    },
    Error,
    "encode-error: U+AF94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF95");
    },
    Error,
    "encode-error: U+AF95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF96");
    },
    Error,
    "encode-error: U+AF96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF97");
    },
    Error,
    "encode-error: U+AF97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF98");
    },
    Error,
    "encode-error: U+AF98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF99");
    },
    Error,
    "encode-error: U+AF99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF9A");
    },
    Error,
    "encode-error: U+AF9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF9B");
    },
    Error,
    "encode-error: U+AF9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF9C");
    },
    Error,
    "encode-error: U+AF9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF9D");
    },
    Error,
    "encode-error: U+AF9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF9E");
    },
    Error,
    "encode-error: U+AF9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAF9F");
    },
    Error,
    "encode-error: U+AF9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA0");
    },
    Error,
    "encode-error: U+AFA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA1");
    },
    Error,
    "encode-error: U+AFA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA2");
    },
    Error,
    "encode-error: U+AFA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA3");
    },
    Error,
    "encode-error: U+AFA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA4");
    },
    Error,
    "encode-error: U+AFA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA5");
    },
    Error,
    "encode-error: U+AFA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA6");
    },
    Error,
    "encode-error: U+AFA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA7");
    },
    Error,
    "encode-error: U+AFA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA8");
    },
    Error,
    "encode-error: U+AFA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFA9");
    },
    Error,
    "encode-error: U+AFA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFAA");
    },
    Error,
    "encode-error: U+AFAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFAB");
    },
    Error,
    "encode-error: U+AFAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFAC");
    },
    Error,
    "encode-error: U+AFAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFAD");
    },
    Error,
    "encode-error: U+AFAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFAE");
    },
    Error,
    "encode-error: U+AFAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFAF");
    },
    Error,
    "encode-error: U+AFAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB0");
    },
    Error,
    "encode-error: U+AFB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB1");
    },
    Error,
    "encode-error: U+AFB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB2");
    },
    Error,
    "encode-error: U+AFB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB3");
    },
    Error,
    "encode-error: U+AFB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB4");
    },
    Error,
    "encode-error: U+AFB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB5");
    },
    Error,
    "encode-error: U+AFB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB6");
    },
    Error,
    "encode-error: U+AFB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB7");
    },
    Error,
    "encode-error: U+AFB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB8");
    },
    Error,
    "encode-error: U+AFB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFB9");
    },
    Error,
    "encode-error: U+AFB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFBA");
    },
    Error,
    "encode-error: U+AFBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFBB");
    },
    Error,
    "encode-error: U+AFBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFBC");
    },
    Error,
    "encode-error: U+AFBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFBD");
    },
    Error,
    "encode-error: U+AFBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFBE");
    },
    Error,
    "encode-error: U+AFBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFBF");
    },
    Error,
    "encode-error: U+AFBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC0");
    },
    Error,
    "encode-error: U+AFC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC1");
    },
    Error,
    "encode-error: U+AFC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC2");
    },
    Error,
    "encode-error: U+AFC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC3");
    },
    Error,
    "encode-error: U+AFC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC4");
    },
    Error,
    "encode-error: U+AFC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC5");
    },
    Error,
    "encode-error: U+AFC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC6");
    },
    Error,
    "encode-error: U+AFC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC7");
    },
    Error,
    "encode-error: U+AFC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC8");
    },
    Error,
    "encode-error: U+AFC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFC9");
    },
    Error,
    "encode-error: U+AFC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFCA");
    },
    Error,
    "encode-error: U+AFCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFCB");
    },
    Error,
    "encode-error: U+AFCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFCC");
    },
    Error,
    "encode-error: U+AFCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFCD");
    },
    Error,
    "encode-error: U+AFCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFCE");
    },
    Error,
    "encode-error: U+AFCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFCF");
    },
    Error,
    "encode-error: U+AFCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD0");
    },
    Error,
    "encode-error: U+AFD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD1");
    },
    Error,
    "encode-error: U+AFD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD2");
    },
    Error,
    "encode-error: U+AFD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD3");
    },
    Error,
    "encode-error: U+AFD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD4");
    },
    Error,
    "encode-error: U+AFD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD5");
    },
    Error,
    "encode-error: U+AFD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD6");
    },
    Error,
    "encode-error: U+AFD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD7");
    },
    Error,
    "encode-error: U+AFD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD8");
    },
    Error,
    "encode-error: U+AFD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFD9");
    },
    Error,
    "encode-error: U+AFD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFDA");
    },
    Error,
    "encode-error: U+AFDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFDB");
    },
    Error,
    "encode-error: U+AFDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFDC");
    },
    Error,
    "encode-error: U+AFDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFDD");
    },
    Error,
    "encode-error: U+AFDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFDE");
    },
    Error,
    "encode-error: U+AFDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFDF");
    },
    Error,
    "encode-error: U+AFDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE0");
    },
    Error,
    "encode-error: U+AFE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE1");
    },
    Error,
    "encode-error: U+AFE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE2");
    },
    Error,
    "encode-error: U+AFE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE3");
    },
    Error,
    "encode-error: U+AFE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE4");
    },
    Error,
    "encode-error: U+AFE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE5");
    },
    Error,
    "encode-error: U+AFE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE6");
    },
    Error,
    "encode-error: U+AFE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE7");
    },
    Error,
    "encode-error: U+AFE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE8");
    },
    Error,
    "encode-error: U+AFE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFE9");
    },
    Error,
    "encode-error: U+AFE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFEA");
    },
    Error,
    "encode-error: U+AFEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFEB");
    },
    Error,
    "encode-error: U+AFEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFEC");
    },
    Error,
    "encode-error: U+AFEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFED");
    },
    Error,
    "encode-error: U+AFED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFEE");
    },
    Error,
    "encode-error: U+AFEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFEF");
    },
    Error,
    "encode-error: U+AFEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF0");
    },
    Error,
    "encode-error: U+AFF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF1");
    },
    Error,
    "encode-error: U+AFF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF2");
    },
    Error,
    "encode-error: U+AFF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF3");
    },
    Error,
    "encode-error: U+AFF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF4");
    },
    Error,
    "encode-error: U+AFF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF5");
    },
    Error,
    "encode-error: U+AFF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF6");
    },
    Error,
    "encode-error: U+AFF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF7");
    },
    Error,
    "encode-error: U+AFF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF8");
    },
    Error,
    "encode-error: U+AFF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFF9");
    },
    Error,
    "encode-error: U+AFF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFFA");
    },
    Error,
    "encode-error: U+AFFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFFB");
    },
    Error,
    "encode-error: U+AFFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFFC");
    },
    Error,
    "encode-error: U+AFFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFFD");
    },
    Error,
    "encode-error: U+AFFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFFE");
    },
    Error,
    "encode-error: U+AFFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uAFFF");
    },
    Error,
    "encode-error: U+AFFF",
  );
});
