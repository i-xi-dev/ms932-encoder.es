import { assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+D000-U+DFFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  assertThrows(
    () => {
      ms932Encoder.encode("\uD000");
    },
    Error,
    "EncodingError U+D000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD001");
    },
    Error,
    "EncodingError U+D001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD002");
    },
    Error,
    "EncodingError U+D002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD003");
    },
    Error,
    "EncodingError U+D003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD004");
    },
    Error,
    "EncodingError U+D004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD005");
    },
    Error,
    "EncodingError U+D005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD006");
    },
    Error,
    "EncodingError U+D006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD007");
    },
    Error,
    "EncodingError U+D007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD008");
    },
    Error,
    "EncodingError U+D008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD009");
    },
    Error,
    "EncodingError U+D009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD00A");
    },
    Error,
    "EncodingError U+D00A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD00B");
    },
    Error,
    "EncodingError U+D00B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD00C");
    },
    Error,
    "EncodingError U+D00C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD00D");
    },
    Error,
    "EncodingError U+D00D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD00E");
    },
    Error,
    "EncodingError U+D00E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD00F");
    },
    Error,
    "EncodingError U+D00F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD010");
    },
    Error,
    "EncodingError U+D010",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD011");
    },
    Error,
    "EncodingError U+D011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD012");
    },
    Error,
    "EncodingError U+D012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD013");
    },
    Error,
    "EncodingError U+D013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD014");
    },
    Error,
    "EncodingError U+D014",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD015");
    },
    Error,
    "EncodingError U+D015",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD016");
    },
    Error,
    "EncodingError U+D016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD017");
    },
    Error,
    "EncodingError U+D017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD018");
    },
    Error,
    "EncodingError U+D018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD019");
    },
    Error,
    "EncodingError U+D019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD01A");
    },
    Error,
    "EncodingError U+D01A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD01B");
    },
    Error,
    "EncodingError U+D01B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD01C");
    },
    Error,
    "EncodingError U+D01C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD01D");
    },
    Error,
    "EncodingError U+D01D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD01E");
    },
    Error,
    "EncodingError U+D01E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD01F");
    },
    Error,
    "EncodingError U+D01F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD020");
    },
    Error,
    "EncodingError U+D020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD021");
    },
    Error,
    "EncodingError U+D021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD022");
    },
    Error,
    "EncodingError U+D022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD023");
    },
    Error,
    "EncodingError U+D023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD024");
    },
    Error,
    "EncodingError U+D024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD025");
    },
    Error,
    "EncodingError U+D025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD026");
    },
    Error,
    "EncodingError U+D026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD027");
    },
    Error,
    "EncodingError U+D027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD028");
    },
    Error,
    "EncodingError U+D028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD029");
    },
    Error,
    "EncodingError U+D029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD02A");
    },
    Error,
    "EncodingError U+D02A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD02B");
    },
    Error,
    "EncodingError U+D02B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD02C");
    },
    Error,
    "EncodingError U+D02C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD02D");
    },
    Error,
    "EncodingError U+D02D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD02E");
    },
    Error,
    "EncodingError U+D02E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD02F");
    },
    Error,
    "EncodingError U+D02F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD030");
    },
    Error,
    "EncodingError U+D030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD031");
    },
    Error,
    "EncodingError U+D031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD032");
    },
    Error,
    "EncodingError U+D032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD033");
    },
    Error,
    "EncodingError U+D033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD034");
    },
    Error,
    "EncodingError U+D034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD035");
    },
    Error,
    "EncodingError U+D035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD036");
    },
    Error,
    "EncodingError U+D036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD037");
    },
    Error,
    "EncodingError U+D037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD038");
    },
    Error,
    "EncodingError U+D038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD039");
    },
    Error,
    "EncodingError U+D039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD03A");
    },
    Error,
    "EncodingError U+D03A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD03B");
    },
    Error,
    "EncodingError U+D03B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD03C");
    },
    Error,
    "EncodingError U+D03C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD03D");
    },
    Error,
    "EncodingError U+D03D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD03E");
    },
    Error,
    "EncodingError U+D03E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD03F");
    },
    Error,
    "EncodingError U+D03F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD040");
    },
    Error,
    "EncodingError U+D040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD041");
    },
    Error,
    "EncodingError U+D041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD042");
    },
    Error,
    "EncodingError U+D042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD043");
    },
    Error,
    "EncodingError U+D043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD044");
    },
    Error,
    "EncodingError U+D044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD045");
    },
    Error,
    "EncodingError U+D045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD046");
    },
    Error,
    "EncodingError U+D046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD047");
    },
    Error,
    "EncodingError U+D047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD048");
    },
    Error,
    "EncodingError U+D048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD049");
    },
    Error,
    "EncodingError U+D049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD04A");
    },
    Error,
    "EncodingError U+D04A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD04B");
    },
    Error,
    "EncodingError U+D04B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD04C");
    },
    Error,
    "EncodingError U+D04C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD04D");
    },
    Error,
    "EncodingError U+D04D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD04E");
    },
    Error,
    "EncodingError U+D04E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD04F");
    },
    Error,
    "EncodingError U+D04F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD050");
    },
    Error,
    "EncodingError U+D050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD051");
    },
    Error,
    "EncodingError U+D051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD052");
    },
    Error,
    "EncodingError U+D052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD053");
    },
    Error,
    "EncodingError U+D053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD054");
    },
    Error,
    "EncodingError U+D054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD055");
    },
    Error,
    "EncodingError U+D055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD056");
    },
    Error,
    "EncodingError U+D056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD057");
    },
    Error,
    "EncodingError U+D057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD058");
    },
    Error,
    "EncodingError U+D058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD059");
    },
    Error,
    "EncodingError U+D059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD05A");
    },
    Error,
    "EncodingError U+D05A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD05B");
    },
    Error,
    "EncodingError U+D05B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD05C");
    },
    Error,
    "EncodingError U+D05C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD05D");
    },
    Error,
    "EncodingError U+D05D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD05E");
    },
    Error,
    "EncodingError U+D05E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD05F");
    },
    Error,
    "EncodingError U+D05F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD060");
    },
    Error,
    "EncodingError U+D060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD061");
    },
    Error,
    "EncodingError U+D061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD062");
    },
    Error,
    "EncodingError U+D062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD063");
    },
    Error,
    "EncodingError U+D063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD064");
    },
    Error,
    "EncodingError U+D064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD065");
    },
    Error,
    "EncodingError U+D065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD066");
    },
    Error,
    "EncodingError U+D066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD067");
    },
    Error,
    "EncodingError U+D067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD068");
    },
    Error,
    "EncodingError U+D068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD069");
    },
    Error,
    "EncodingError U+D069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD06A");
    },
    Error,
    "EncodingError U+D06A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD06B");
    },
    Error,
    "EncodingError U+D06B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD06C");
    },
    Error,
    "EncodingError U+D06C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD06D");
    },
    Error,
    "EncodingError U+D06D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD06E");
    },
    Error,
    "EncodingError U+D06E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD06F");
    },
    Error,
    "EncodingError U+D06F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD070");
    },
    Error,
    "EncodingError U+D070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD071");
    },
    Error,
    "EncodingError U+D071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD072");
    },
    Error,
    "EncodingError U+D072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD073");
    },
    Error,
    "EncodingError U+D073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD074");
    },
    Error,
    "EncodingError U+D074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD075");
    },
    Error,
    "EncodingError U+D075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD076");
    },
    Error,
    "EncodingError U+D076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD077");
    },
    Error,
    "EncodingError U+D077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD078");
    },
    Error,
    "EncodingError U+D078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD079");
    },
    Error,
    "EncodingError U+D079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD07A");
    },
    Error,
    "EncodingError U+D07A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD07B");
    },
    Error,
    "EncodingError U+D07B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD07C");
    },
    Error,
    "EncodingError U+D07C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD07D");
    },
    Error,
    "EncodingError U+D07D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD07E");
    },
    Error,
    "EncodingError U+D07E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD07F");
    },
    Error,
    "EncodingError U+D07F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD080");
    },
    Error,
    "EncodingError U+D080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD081");
    },
    Error,
    "EncodingError U+D081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD082");
    },
    Error,
    "EncodingError U+D082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD083");
    },
    Error,
    "EncodingError U+D083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD084");
    },
    Error,
    "EncodingError U+D084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD085");
    },
    Error,
    "EncodingError U+D085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD086");
    },
    Error,
    "EncodingError U+D086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD087");
    },
    Error,
    "EncodingError U+D087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD088");
    },
    Error,
    "EncodingError U+D088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD089");
    },
    Error,
    "EncodingError U+D089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD08A");
    },
    Error,
    "EncodingError U+D08A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD08B");
    },
    Error,
    "EncodingError U+D08B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD08C");
    },
    Error,
    "EncodingError U+D08C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD08D");
    },
    Error,
    "EncodingError U+D08D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD08E");
    },
    Error,
    "EncodingError U+D08E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD08F");
    },
    Error,
    "EncodingError U+D08F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD090");
    },
    Error,
    "EncodingError U+D090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD091");
    },
    Error,
    "EncodingError U+D091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD092");
    },
    Error,
    "EncodingError U+D092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD093");
    },
    Error,
    "EncodingError U+D093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD094");
    },
    Error,
    "EncodingError U+D094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD095");
    },
    Error,
    "EncodingError U+D095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD096");
    },
    Error,
    "EncodingError U+D096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD097");
    },
    Error,
    "EncodingError U+D097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD098");
    },
    Error,
    "EncodingError U+D098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD099");
    },
    Error,
    "EncodingError U+D099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD09A");
    },
    Error,
    "EncodingError U+D09A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD09B");
    },
    Error,
    "EncodingError U+D09B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD09C");
    },
    Error,
    "EncodingError U+D09C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD09D");
    },
    Error,
    "EncodingError U+D09D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD09E");
    },
    Error,
    "EncodingError U+D09E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD09F");
    },
    Error,
    "EncodingError U+D09F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A0");
    },
    Error,
    "EncodingError U+D0A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A1");
    },
    Error,
    "EncodingError U+D0A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A2");
    },
    Error,
    "EncodingError U+D0A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A3");
    },
    Error,
    "EncodingError U+D0A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A4");
    },
    Error,
    "EncodingError U+D0A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A5");
    },
    Error,
    "EncodingError U+D0A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A6");
    },
    Error,
    "EncodingError U+D0A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A7");
    },
    Error,
    "EncodingError U+D0A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A8");
    },
    Error,
    "EncodingError U+D0A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A9");
    },
    Error,
    "EncodingError U+D0A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0AA");
    },
    Error,
    "EncodingError U+D0AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0AB");
    },
    Error,
    "EncodingError U+D0AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0AC");
    },
    Error,
    "EncodingError U+D0AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0AD");
    },
    Error,
    "EncodingError U+D0AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0AE");
    },
    Error,
    "EncodingError U+D0AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0AF");
    },
    Error,
    "EncodingError U+D0AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B0");
    },
    Error,
    "EncodingError U+D0B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B1");
    },
    Error,
    "EncodingError U+D0B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B2");
    },
    Error,
    "EncodingError U+D0B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B3");
    },
    Error,
    "EncodingError U+D0B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B4");
    },
    Error,
    "EncodingError U+D0B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B5");
    },
    Error,
    "EncodingError U+D0B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B6");
    },
    Error,
    "EncodingError U+D0B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B7");
    },
    Error,
    "EncodingError U+D0B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B8");
    },
    Error,
    "EncodingError U+D0B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B9");
    },
    Error,
    "EncodingError U+D0B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0BA");
    },
    Error,
    "EncodingError U+D0BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0BB");
    },
    Error,
    "EncodingError U+D0BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0BC");
    },
    Error,
    "EncodingError U+D0BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0BD");
    },
    Error,
    "EncodingError U+D0BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0BE");
    },
    Error,
    "EncodingError U+D0BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0BF");
    },
    Error,
    "EncodingError U+D0BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C0");
    },
    Error,
    "EncodingError U+D0C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C1");
    },
    Error,
    "EncodingError U+D0C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C2");
    },
    Error,
    "EncodingError U+D0C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C3");
    },
    Error,
    "EncodingError U+D0C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C4");
    },
    Error,
    "EncodingError U+D0C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C5");
    },
    Error,
    "EncodingError U+D0C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C6");
    },
    Error,
    "EncodingError U+D0C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C7");
    },
    Error,
    "EncodingError U+D0C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C8");
    },
    Error,
    "EncodingError U+D0C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C9");
    },
    Error,
    "EncodingError U+D0C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0CA");
    },
    Error,
    "EncodingError U+D0CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0CB");
    },
    Error,
    "EncodingError U+D0CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0CC");
    },
    Error,
    "EncodingError U+D0CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0CD");
    },
    Error,
    "EncodingError U+D0CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0CE");
    },
    Error,
    "EncodingError U+D0CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0CF");
    },
    Error,
    "EncodingError U+D0CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D0");
    },
    Error,
    "EncodingError U+D0D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D1");
    },
    Error,
    "EncodingError U+D0D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D2");
    },
    Error,
    "EncodingError U+D0D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D3");
    },
    Error,
    "EncodingError U+D0D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D4");
    },
    Error,
    "EncodingError U+D0D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D5");
    },
    Error,
    "EncodingError U+D0D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D6");
    },
    Error,
    "EncodingError U+D0D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D7");
    },
    Error,
    "EncodingError U+D0D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D8");
    },
    Error,
    "EncodingError U+D0D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D9");
    },
    Error,
    "EncodingError U+D0D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0DA");
    },
    Error,
    "EncodingError U+D0DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0DB");
    },
    Error,
    "EncodingError U+D0DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0DC");
    },
    Error,
    "EncodingError U+D0DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0DD");
    },
    Error,
    "EncodingError U+D0DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0DE");
    },
    Error,
    "EncodingError U+D0DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0DF");
    },
    Error,
    "EncodingError U+D0DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E0");
    },
    Error,
    "EncodingError U+D0E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E1");
    },
    Error,
    "EncodingError U+D0E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E2");
    },
    Error,
    "EncodingError U+D0E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E3");
    },
    Error,
    "EncodingError U+D0E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E4");
    },
    Error,
    "EncodingError U+D0E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E5");
    },
    Error,
    "EncodingError U+D0E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E6");
    },
    Error,
    "EncodingError U+D0E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E7");
    },
    Error,
    "EncodingError U+D0E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E8");
    },
    Error,
    "EncodingError U+D0E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E9");
    },
    Error,
    "EncodingError U+D0E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0EA");
    },
    Error,
    "EncodingError U+D0EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0EB");
    },
    Error,
    "EncodingError U+D0EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0EC");
    },
    Error,
    "EncodingError U+D0EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0ED");
    },
    Error,
    "EncodingError U+D0ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0EE");
    },
    Error,
    "EncodingError U+D0EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0EF");
    },
    Error,
    "EncodingError U+D0EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F0");
    },
    Error,
    "EncodingError U+D0F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F1");
    },
    Error,
    "EncodingError U+D0F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F2");
    },
    Error,
    "EncodingError U+D0F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F3");
    },
    Error,
    "EncodingError U+D0F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F4");
    },
    Error,
    "EncodingError U+D0F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F5");
    },
    Error,
    "EncodingError U+D0F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F6");
    },
    Error,
    "EncodingError U+D0F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F7");
    },
    Error,
    "EncodingError U+D0F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F8");
    },
    Error,
    "EncodingError U+D0F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F9");
    },
    Error,
    "EncodingError U+D0F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0FA");
    },
    Error,
    "EncodingError U+D0FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0FB");
    },
    Error,
    "EncodingError U+D0FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0FC");
    },
    Error,
    "EncodingError U+D0FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0FD");
    },
    Error,
    "EncodingError U+D0FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0FE");
    },
    Error,
    "EncodingError U+D0FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0FF");
    },
    Error,
    "EncodingError U+D0FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD100");
    },
    Error,
    "EncodingError U+D100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD101");
    },
    Error,
    "EncodingError U+D101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD102");
    },
    Error,
    "EncodingError U+D102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD103");
    },
    Error,
    "EncodingError U+D103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD104");
    },
    Error,
    "EncodingError U+D104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD105");
    },
    Error,
    "EncodingError U+D105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD106");
    },
    Error,
    "EncodingError U+D106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD107");
    },
    Error,
    "EncodingError U+D107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD108");
    },
    Error,
    "EncodingError U+D108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD109");
    },
    Error,
    "EncodingError U+D109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD10A");
    },
    Error,
    "EncodingError U+D10A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD10B");
    },
    Error,
    "EncodingError U+D10B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD10C");
    },
    Error,
    "EncodingError U+D10C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD10D");
    },
    Error,
    "EncodingError U+D10D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD10E");
    },
    Error,
    "EncodingError U+D10E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD10F");
    },
    Error,
    "EncodingError U+D10F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD110");
    },
    Error,
    "EncodingError U+D110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD111");
    },
    Error,
    "EncodingError U+D111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD112");
    },
    Error,
    "EncodingError U+D112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD113");
    },
    Error,
    "EncodingError U+D113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD114");
    },
    Error,
    "EncodingError U+D114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD115");
    },
    Error,
    "EncodingError U+D115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD116");
    },
    Error,
    "EncodingError U+D116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD117");
    },
    Error,
    "EncodingError U+D117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD118");
    },
    Error,
    "EncodingError U+D118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD119");
    },
    Error,
    "EncodingError U+D119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD11A");
    },
    Error,
    "EncodingError U+D11A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD11B");
    },
    Error,
    "EncodingError U+D11B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD11C");
    },
    Error,
    "EncodingError U+D11C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD11D");
    },
    Error,
    "EncodingError U+D11D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD11E");
    },
    Error,
    "EncodingError U+D11E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD11F");
    },
    Error,
    "EncodingError U+D11F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD120");
    },
    Error,
    "EncodingError U+D120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD121");
    },
    Error,
    "EncodingError U+D121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD122");
    },
    Error,
    "EncodingError U+D122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD123");
    },
    Error,
    "EncodingError U+D123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD124");
    },
    Error,
    "EncodingError U+D124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD125");
    },
    Error,
    "EncodingError U+D125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD126");
    },
    Error,
    "EncodingError U+D126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD127");
    },
    Error,
    "EncodingError U+D127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD128");
    },
    Error,
    "EncodingError U+D128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD129");
    },
    Error,
    "EncodingError U+D129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD12A");
    },
    Error,
    "EncodingError U+D12A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD12B");
    },
    Error,
    "EncodingError U+D12B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD12C");
    },
    Error,
    "EncodingError U+D12C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD12D");
    },
    Error,
    "EncodingError U+D12D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD12E");
    },
    Error,
    "EncodingError U+D12E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD12F");
    },
    Error,
    "EncodingError U+D12F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD130");
    },
    Error,
    "EncodingError U+D130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD131");
    },
    Error,
    "EncodingError U+D131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD132");
    },
    Error,
    "EncodingError U+D132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD133");
    },
    Error,
    "EncodingError U+D133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD134");
    },
    Error,
    "EncodingError U+D134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD135");
    },
    Error,
    "EncodingError U+D135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD136");
    },
    Error,
    "EncodingError U+D136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD137");
    },
    Error,
    "EncodingError U+D137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD138");
    },
    Error,
    "EncodingError U+D138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD139");
    },
    Error,
    "EncodingError U+D139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD13A");
    },
    Error,
    "EncodingError U+D13A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD13B");
    },
    Error,
    "EncodingError U+D13B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD13C");
    },
    Error,
    "EncodingError U+D13C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD13D");
    },
    Error,
    "EncodingError U+D13D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD13E");
    },
    Error,
    "EncodingError U+D13E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD13F");
    },
    Error,
    "EncodingError U+D13F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD140");
    },
    Error,
    "EncodingError U+D140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD141");
    },
    Error,
    "EncodingError U+D141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD142");
    },
    Error,
    "EncodingError U+D142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD143");
    },
    Error,
    "EncodingError U+D143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD144");
    },
    Error,
    "EncodingError U+D144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD145");
    },
    Error,
    "EncodingError U+D145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD146");
    },
    Error,
    "EncodingError U+D146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD147");
    },
    Error,
    "EncodingError U+D147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD148");
    },
    Error,
    "EncodingError U+D148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD149");
    },
    Error,
    "EncodingError U+D149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD14A");
    },
    Error,
    "EncodingError U+D14A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD14B");
    },
    Error,
    "EncodingError U+D14B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD14C");
    },
    Error,
    "EncodingError U+D14C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD14D");
    },
    Error,
    "EncodingError U+D14D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD14E");
    },
    Error,
    "EncodingError U+D14E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD14F");
    },
    Error,
    "EncodingError U+D14F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD150");
    },
    Error,
    "EncodingError U+D150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD151");
    },
    Error,
    "EncodingError U+D151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD152");
    },
    Error,
    "EncodingError U+D152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD153");
    },
    Error,
    "EncodingError U+D153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD154");
    },
    Error,
    "EncodingError U+D154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD155");
    },
    Error,
    "EncodingError U+D155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD156");
    },
    Error,
    "EncodingError U+D156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD157");
    },
    Error,
    "EncodingError U+D157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD158");
    },
    Error,
    "EncodingError U+D158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD159");
    },
    Error,
    "EncodingError U+D159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD15A");
    },
    Error,
    "EncodingError U+D15A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD15B");
    },
    Error,
    "EncodingError U+D15B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD15C");
    },
    Error,
    "EncodingError U+D15C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD15D");
    },
    Error,
    "EncodingError U+D15D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD15E");
    },
    Error,
    "EncodingError U+D15E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD15F");
    },
    Error,
    "EncodingError U+D15F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD160");
    },
    Error,
    "EncodingError U+D160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD161");
    },
    Error,
    "EncodingError U+D161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD162");
    },
    Error,
    "EncodingError U+D162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD163");
    },
    Error,
    "EncodingError U+D163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD164");
    },
    Error,
    "EncodingError U+D164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD165");
    },
    Error,
    "EncodingError U+D165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD166");
    },
    Error,
    "EncodingError U+D166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD167");
    },
    Error,
    "EncodingError U+D167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD168");
    },
    Error,
    "EncodingError U+D168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD169");
    },
    Error,
    "EncodingError U+D169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD16A");
    },
    Error,
    "EncodingError U+D16A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD16B");
    },
    Error,
    "EncodingError U+D16B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD16C");
    },
    Error,
    "EncodingError U+D16C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD16D");
    },
    Error,
    "EncodingError U+D16D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD16E");
    },
    Error,
    "EncodingError U+D16E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD16F");
    },
    Error,
    "EncodingError U+D16F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD170");
    },
    Error,
    "EncodingError U+D170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD171");
    },
    Error,
    "EncodingError U+D171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD172");
    },
    Error,
    "EncodingError U+D172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD173");
    },
    Error,
    "EncodingError U+D173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD174");
    },
    Error,
    "EncodingError U+D174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD175");
    },
    Error,
    "EncodingError U+D175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD176");
    },
    Error,
    "EncodingError U+D176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD177");
    },
    Error,
    "EncodingError U+D177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD178");
    },
    Error,
    "EncodingError U+D178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD179");
    },
    Error,
    "EncodingError U+D179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD17A");
    },
    Error,
    "EncodingError U+D17A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD17B");
    },
    Error,
    "EncodingError U+D17B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD17C");
    },
    Error,
    "EncodingError U+D17C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD17D");
    },
    Error,
    "EncodingError U+D17D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD17E");
    },
    Error,
    "EncodingError U+D17E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD17F");
    },
    Error,
    "EncodingError U+D17F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD180");
    },
    Error,
    "EncodingError U+D180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD181");
    },
    Error,
    "EncodingError U+D181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD182");
    },
    Error,
    "EncodingError U+D182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD183");
    },
    Error,
    "EncodingError U+D183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD184");
    },
    Error,
    "EncodingError U+D184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD185");
    },
    Error,
    "EncodingError U+D185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD186");
    },
    Error,
    "EncodingError U+D186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD187");
    },
    Error,
    "EncodingError U+D187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD188");
    },
    Error,
    "EncodingError U+D188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD189");
    },
    Error,
    "EncodingError U+D189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD18A");
    },
    Error,
    "EncodingError U+D18A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD18B");
    },
    Error,
    "EncodingError U+D18B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD18C");
    },
    Error,
    "EncodingError U+D18C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD18D");
    },
    Error,
    "EncodingError U+D18D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD18E");
    },
    Error,
    "EncodingError U+D18E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD18F");
    },
    Error,
    "EncodingError U+D18F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD190");
    },
    Error,
    "EncodingError U+D190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD191");
    },
    Error,
    "EncodingError U+D191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD192");
    },
    Error,
    "EncodingError U+D192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD193");
    },
    Error,
    "EncodingError U+D193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD194");
    },
    Error,
    "EncodingError U+D194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD195");
    },
    Error,
    "EncodingError U+D195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD196");
    },
    Error,
    "EncodingError U+D196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD197");
    },
    Error,
    "EncodingError U+D197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD198");
    },
    Error,
    "EncodingError U+D198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD199");
    },
    Error,
    "EncodingError U+D199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD19A");
    },
    Error,
    "EncodingError U+D19A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD19B");
    },
    Error,
    "EncodingError U+D19B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD19C");
    },
    Error,
    "EncodingError U+D19C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD19D");
    },
    Error,
    "EncodingError U+D19D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD19E");
    },
    Error,
    "EncodingError U+D19E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD19F");
    },
    Error,
    "EncodingError U+D19F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A0");
    },
    Error,
    "EncodingError U+D1A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A1");
    },
    Error,
    "EncodingError U+D1A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A2");
    },
    Error,
    "EncodingError U+D1A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A3");
    },
    Error,
    "EncodingError U+D1A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A4");
    },
    Error,
    "EncodingError U+D1A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A5");
    },
    Error,
    "EncodingError U+D1A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A6");
    },
    Error,
    "EncodingError U+D1A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A7");
    },
    Error,
    "EncodingError U+D1A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A8");
    },
    Error,
    "EncodingError U+D1A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A9");
    },
    Error,
    "EncodingError U+D1A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1AA");
    },
    Error,
    "EncodingError U+D1AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1AB");
    },
    Error,
    "EncodingError U+D1AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1AC");
    },
    Error,
    "EncodingError U+D1AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1AD");
    },
    Error,
    "EncodingError U+D1AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1AE");
    },
    Error,
    "EncodingError U+D1AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1AF");
    },
    Error,
    "EncodingError U+D1AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B0");
    },
    Error,
    "EncodingError U+D1B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B1");
    },
    Error,
    "EncodingError U+D1B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B2");
    },
    Error,
    "EncodingError U+D1B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B3");
    },
    Error,
    "EncodingError U+D1B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B4");
    },
    Error,
    "EncodingError U+D1B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B5");
    },
    Error,
    "EncodingError U+D1B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B6");
    },
    Error,
    "EncodingError U+D1B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B7");
    },
    Error,
    "EncodingError U+D1B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B8");
    },
    Error,
    "EncodingError U+D1B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B9");
    },
    Error,
    "EncodingError U+D1B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1BA");
    },
    Error,
    "EncodingError U+D1BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1BB");
    },
    Error,
    "EncodingError U+D1BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1BC");
    },
    Error,
    "EncodingError U+D1BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1BD");
    },
    Error,
    "EncodingError U+D1BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1BE");
    },
    Error,
    "EncodingError U+D1BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1BF");
    },
    Error,
    "EncodingError U+D1BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C0");
    },
    Error,
    "EncodingError U+D1C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C1");
    },
    Error,
    "EncodingError U+D1C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C2");
    },
    Error,
    "EncodingError U+D1C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C3");
    },
    Error,
    "EncodingError U+D1C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C4");
    },
    Error,
    "EncodingError U+D1C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C5");
    },
    Error,
    "EncodingError U+D1C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C6");
    },
    Error,
    "EncodingError U+D1C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C7");
    },
    Error,
    "EncodingError U+D1C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C8");
    },
    Error,
    "EncodingError U+D1C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C9");
    },
    Error,
    "EncodingError U+D1C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1CA");
    },
    Error,
    "EncodingError U+D1CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1CB");
    },
    Error,
    "EncodingError U+D1CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1CC");
    },
    Error,
    "EncodingError U+D1CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1CD");
    },
    Error,
    "EncodingError U+D1CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1CE");
    },
    Error,
    "EncodingError U+D1CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1CF");
    },
    Error,
    "EncodingError U+D1CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D0");
    },
    Error,
    "EncodingError U+D1D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D1");
    },
    Error,
    "EncodingError U+D1D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D2");
    },
    Error,
    "EncodingError U+D1D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D3");
    },
    Error,
    "EncodingError U+D1D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D4");
    },
    Error,
    "EncodingError U+D1D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D5");
    },
    Error,
    "EncodingError U+D1D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D6");
    },
    Error,
    "EncodingError U+D1D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D7");
    },
    Error,
    "EncodingError U+D1D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D8");
    },
    Error,
    "EncodingError U+D1D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D9");
    },
    Error,
    "EncodingError U+D1D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1DA");
    },
    Error,
    "EncodingError U+D1DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1DB");
    },
    Error,
    "EncodingError U+D1DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1DC");
    },
    Error,
    "EncodingError U+D1DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1DD");
    },
    Error,
    "EncodingError U+D1DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1DE");
    },
    Error,
    "EncodingError U+D1DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1DF");
    },
    Error,
    "EncodingError U+D1DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E0");
    },
    Error,
    "EncodingError U+D1E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E1");
    },
    Error,
    "EncodingError U+D1E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E2");
    },
    Error,
    "EncodingError U+D1E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E3");
    },
    Error,
    "EncodingError U+D1E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E4");
    },
    Error,
    "EncodingError U+D1E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E5");
    },
    Error,
    "EncodingError U+D1E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E6");
    },
    Error,
    "EncodingError U+D1E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E7");
    },
    Error,
    "EncodingError U+D1E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E8");
    },
    Error,
    "EncodingError U+D1E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E9");
    },
    Error,
    "EncodingError U+D1E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1EA");
    },
    Error,
    "EncodingError U+D1EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1EB");
    },
    Error,
    "EncodingError U+D1EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1EC");
    },
    Error,
    "EncodingError U+D1EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1ED");
    },
    Error,
    "EncodingError U+D1ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1EE");
    },
    Error,
    "EncodingError U+D1EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1EF");
    },
    Error,
    "EncodingError U+D1EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F0");
    },
    Error,
    "EncodingError U+D1F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F1");
    },
    Error,
    "EncodingError U+D1F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F2");
    },
    Error,
    "EncodingError U+D1F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F3");
    },
    Error,
    "EncodingError U+D1F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F4");
    },
    Error,
    "EncodingError U+D1F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F5");
    },
    Error,
    "EncodingError U+D1F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F6");
    },
    Error,
    "EncodingError U+D1F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F7");
    },
    Error,
    "EncodingError U+D1F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F8");
    },
    Error,
    "EncodingError U+D1F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F9");
    },
    Error,
    "EncodingError U+D1F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1FA");
    },
    Error,
    "EncodingError U+D1FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1FB");
    },
    Error,
    "EncodingError U+D1FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1FC");
    },
    Error,
    "EncodingError U+D1FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1FD");
    },
    Error,
    "EncodingError U+D1FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1FE");
    },
    Error,
    "EncodingError U+D1FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1FF");
    },
    Error,
    "EncodingError U+D1FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD200");
    },
    Error,
    "EncodingError U+D200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD201");
    },
    Error,
    "EncodingError U+D201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD202");
    },
    Error,
    "EncodingError U+D202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD203");
    },
    Error,
    "EncodingError U+D203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD204");
    },
    Error,
    "EncodingError U+D204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD205");
    },
    Error,
    "EncodingError U+D205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD206");
    },
    Error,
    "EncodingError U+D206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD207");
    },
    Error,
    "EncodingError U+D207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD208");
    },
    Error,
    "EncodingError U+D208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD209");
    },
    Error,
    "EncodingError U+D209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD20A");
    },
    Error,
    "EncodingError U+D20A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD20B");
    },
    Error,
    "EncodingError U+D20B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD20C");
    },
    Error,
    "EncodingError U+D20C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD20D");
    },
    Error,
    "EncodingError U+D20D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD20E");
    },
    Error,
    "EncodingError U+D20E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD20F");
    },
    Error,
    "EncodingError U+D20F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD210");
    },
    Error,
    "EncodingError U+D210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD211");
    },
    Error,
    "EncodingError U+D211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD212");
    },
    Error,
    "EncodingError U+D212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD213");
    },
    Error,
    "EncodingError U+D213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD214");
    },
    Error,
    "EncodingError U+D214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD215");
    },
    Error,
    "EncodingError U+D215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD216");
    },
    Error,
    "EncodingError U+D216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD217");
    },
    Error,
    "EncodingError U+D217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD218");
    },
    Error,
    "EncodingError U+D218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD219");
    },
    Error,
    "EncodingError U+D219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD21A");
    },
    Error,
    "EncodingError U+D21A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD21B");
    },
    Error,
    "EncodingError U+D21B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD21C");
    },
    Error,
    "EncodingError U+D21C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD21D");
    },
    Error,
    "EncodingError U+D21D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD21E");
    },
    Error,
    "EncodingError U+D21E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD21F");
    },
    Error,
    "EncodingError U+D21F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD220");
    },
    Error,
    "EncodingError U+D220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD221");
    },
    Error,
    "EncodingError U+D221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD222");
    },
    Error,
    "EncodingError U+D222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD223");
    },
    Error,
    "EncodingError U+D223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD224");
    },
    Error,
    "EncodingError U+D224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD225");
    },
    Error,
    "EncodingError U+D225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD226");
    },
    Error,
    "EncodingError U+D226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD227");
    },
    Error,
    "EncodingError U+D227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD228");
    },
    Error,
    "EncodingError U+D228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD229");
    },
    Error,
    "EncodingError U+D229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD22A");
    },
    Error,
    "EncodingError U+D22A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD22B");
    },
    Error,
    "EncodingError U+D22B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD22C");
    },
    Error,
    "EncodingError U+D22C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD22D");
    },
    Error,
    "EncodingError U+D22D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD22E");
    },
    Error,
    "EncodingError U+D22E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD22F");
    },
    Error,
    "EncodingError U+D22F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD230");
    },
    Error,
    "EncodingError U+D230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD231");
    },
    Error,
    "EncodingError U+D231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD232");
    },
    Error,
    "EncodingError U+D232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD233");
    },
    Error,
    "EncodingError U+D233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD234");
    },
    Error,
    "EncodingError U+D234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD235");
    },
    Error,
    "EncodingError U+D235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD236");
    },
    Error,
    "EncodingError U+D236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD237");
    },
    Error,
    "EncodingError U+D237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD238");
    },
    Error,
    "EncodingError U+D238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD239");
    },
    Error,
    "EncodingError U+D239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD23A");
    },
    Error,
    "EncodingError U+D23A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD23B");
    },
    Error,
    "EncodingError U+D23B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD23C");
    },
    Error,
    "EncodingError U+D23C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD23D");
    },
    Error,
    "EncodingError U+D23D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD23E");
    },
    Error,
    "EncodingError U+D23E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD23F");
    },
    Error,
    "EncodingError U+D23F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD240");
    },
    Error,
    "EncodingError U+D240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD241");
    },
    Error,
    "EncodingError U+D241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD242");
    },
    Error,
    "EncodingError U+D242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD243");
    },
    Error,
    "EncodingError U+D243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD244");
    },
    Error,
    "EncodingError U+D244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD245");
    },
    Error,
    "EncodingError U+D245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD246");
    },
    Error,
    "EncodingError U+D246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD247");
    },
    Error,
    "EncodingError U+D247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD248");
    },
    Error,
    "EncodingError U+D248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD249");
    },
    Error,
    "EncodingError U+D249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD24A");
    },
    Error,
    "EncodingError U+D24A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD24B");
    },
    Error,
    "EncodingError U+D24B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD24C");
    },
    Error,
    "EncodingError U+D24C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD24D");
    },
    Error,
    "EncodingError U+D24D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD24E");
    },
    Error,
    "EncodingError U+D24E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD24F");
    },
    Error,
    "EncodingError U+D24F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD250");
    },
    Error,
    "EncodingError U+D250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD251");
    },
    Error,
    "EncodingError U+D251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD252");
    },
    Error,
    "EncodingError U+D252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD253");
    },
    Error,
    "EncodingError U+D253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD254");
    },
    Error,
    "EncodingError U+D254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD255");
    },
    Error,
    "EncodingError U+D255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD256");
    },
    Error,
    "EncodingError U+D256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD257");
    },
    Error,
    "EncodingError U+D257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD258");
    },
    Error,
    "EncodingError U+D258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD259");
    },
    Error,
    "EncodingError U+D259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD25A");
    },
    Error,
    "EncodingError U+D25A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD25B");
    },
    Error,
    "EncodingError U+D25B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD25C");
    },
    Error,
    "EncodingError U+D25C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD25D");
    },
    Error,
    "EncodingError U+D25D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD25E");
    },
    Error,
    "EncodingError U+D25E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD25F");
    },
    Error,
    "EncodingError U+D25F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD260");
    },
    Error,
    "EncodingError U+D260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD261");
    },
    Error,
    "EncodingError U+D261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD262");
    },
    Error,
    "EncodingError U+D262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD263");
    },
    Error,
    "EncodingError U+D263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD264");
    },
    Error,
    "EncodingError U+D264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD265");
    },
    Error,
    "EncodingError U+D265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD266");
    },
    Error,
    "EncodingError U+D266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD267");
    },
    Error,
    "EncodingError U+D267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD268");
    },
    Error,
    "EncodingError U+D268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD269");
    },
    Error,
    "EncodingError U+D269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD26A");
    },
    Error,
    "EncodingError U+D26A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD26B");
    },
    Error,
    "EncodingError U+D26B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD26C");
    },
    Error,
    "EncodingError U+D26C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD26D");
    },
    Error,
    "EncodingError U+D26D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD26E");
    },
    Error,
    "EncodingError U+D26E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD26F");
    },
    Error,
    "EncodingError U+D26F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD270");
    },
    Error,
    "EncodingError U+D270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD271");
    },
    Error,
    "EncodingError U+D271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD272");
    },
    Error,
    "EncodingError U+D272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD273");
    },
    Error,
    "EncodingError U+D273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD274");
    },
    Error,
    "EncodingError U+D274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD275");
    },
    Error,
    "EncodingError U+D275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD276");
    },
    Error,
    "EncodingError U+D276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD277");
    },
    Error,
    "EncodingError U+D277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD278");
    },
    Error,
    "EncodingError U+D278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD279");
    },
    Error,
    "EncodingError U+D279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD27A");
    },
    Error,
    "EncodingError U+D27A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD27B");
    },
    Error,
    "EncodingError U+D27B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD27C");
    },
    Error,
    "EncodingError U+D27C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD27D");
    },
    Error,
    "EncodingError U+D27D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD27E");
    },
    Error,
    "EncodingError U+D27E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD27F");
    },
    Error,
    "EncodingError U+D27F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD280");
    },
    Error,
    "EncodingError U+D280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD281");
    },
    Error,
    "EncodingError U+D281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD282");
    },
    Error,
    "EncodingError U+D282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD283");
    },
    Error,
    "EncodingError U+D283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD284");
    },
    Error,
    "EncodingError U+D284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD285");
    },
    Error,
    "EncodingError U+D285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD286");
    },
    Error,
    "EncodingError U+D286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD287");
    },
    Error,
    "EncodingError U+D287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD288");
    },
    Error,
    "EncodingError U+D288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD289");
    },
    Error,
    "EncodingError U+D289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD28A");
    },
    Error,
    "EncodingError U+D28A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD28B");
    },
    Error,
    "EncodingError U+D28B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD28C");
    },
    Error,
    "EncodingError U+D28C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD28D");
    },
    Error,
    "EncodingError U+D28D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD28E");
    },
    Error,
    "EncodingError U+D28E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD28F");
    },
    Error,
    "EncodingError U+D28F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD290");
    },
    Error,
    "EncodingError U+D290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD291");
    },
    Error,
    "EncodingError U+D291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD292");
    },
    Error,
    "EncodingError U+D292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD293");
    },
    Error,
    "EncodingError U+D293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD294");
    },
    Error,
    "EncodingError U+D294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD295");
    },
    Error,
    "EncodingError U+D295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD296");
    },
    Error,
    "EncodingError U+D296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD297");
    },
    Error,
    "EncodingError U+D297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD298");
    },
    Error,
    "EncodingError U+D298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD299");
    },
    Error,
    "EncodingError U+D299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD29A");
    },
    Error,
    "EncodingError U+D29A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD29B");
    },
    Error,
    "EncodingError U+D29B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD29C");
    },
    Error,
    "EncodingError U+D29C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD29D");
    },
    Error,
    "EncodingError U+D29D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD29E");
    },
    Error,
    "EncodingError U+D29E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD29F");
    },
    Error,
    "EncodingError U+D29F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A0");
    },
    Error,
    "EncodingError U+D2A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A1");
    },
    Error,
    "EncodingError U+D2A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A2");
    },
    Error,
    "EncodingError U+D2A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A3");
    },
    Error,
    "EncodingError U+D2A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A4");
    },
    Error,
    "EncodingError U+D2A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A5");
    },
    Error,
    "EncodingError U+D2A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A6");
    },
    Error,
    "EncodingError U+D2A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A7");
    },
    Error,
    "EncodingError U+D2A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A8");
    },
    Error,
    "EncodingError U+D2A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A9");
    },
    Error,
    "EncodingError U+D2A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2AA");
    },
    Error,
    "EncodingError U+D2AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2AB");
    },
    Error,
    "EncodingError U+D2AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2AC");
    },
    Error,
    "EncodingError U+D2AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2AD");
    },
    Error,
    "EncodingError U+D2AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2AE");
    },
    Error,
    "EncodingError U+D2AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2AF");
    },
    Error,
    "EncodingError U+D2AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B0");
    },
    Error,
    "EncodingError U+D2B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B1");
    },
    Error,
    "EncodingError U+D2B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B2");
    },
    Error,
    "EncodingError U+D2B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B3");
    },
    Error,
    "EncodingError U+D2B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B4");
    },
    Error,
    "EncodingError U+D2B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B5");
    },
    Error,
    "EncodingError U+D2B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B6");
    },
    Error,
    "EncodingError U+D2B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B7");
    },
    Error,
    "EncodingError U+D2B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B8");
    },
    Error,
    "EncodingError U+D2B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B9");
    },
    Error,
    "EncodingError U+D2B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2BA");
    },
    Error,
    "EncodingError U+D2BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2BB");
    },
    Error,
    "EncodingError U+D2BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2BC");
    },
    Error,
    "EncodingError U+D2BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2BD");
    },
    Error,
    "EncodingError U+D2BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2BE");
    },
    Error,
    "EncodingError U+D2BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2BF");
    },
    Error,
    "EncodingError U+D2BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C0");
    },
    Error,
    "EncodingError U+D2C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C1");
    },
    Error,
    "EncodingError U+D2C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C2");
    },
    Error,
    "EncodingError U+D2C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C3");
    },
    Error,
    "EncodingError U+D2C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C4");
    },
    Error,
    "EncodingError U+D2C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C5");
    },
    Error,
    "EncodingError U+D2C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C6");
    },
    Error,
    "EncodingError U+D2C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C7");
    },
    Error,
    "EncodingError U+D2C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C8");
    },
    Error,
    "EncodingError U+D2C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C9");
    },
    Error,
    "EncodingError U+D2C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2CA");
    },
    Error,
    "EncodingError U+D2CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2CB");
    },
    Error,
    "EncodingError U+D2CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2CC");
    },
    Error,
    "EncodingError U+D2CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2CD");
    },
    Error,
    "EncodingError U+D2CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2CE");
    },
    Error,
    "EncodingError U+D2CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2CF");
    },
    Error,
    "EncodingError U+D2CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D0");
    },
    Error,
    "EncodingError U+D2D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D1");
    },
    Error,
    "EncodingError U+D2D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D2");
    },
    Error,
    "EncodingError U+D2D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D3");
    },
    Error,
    "EncodingError U+D2D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D4");
    },
    Error,
    "EncodingError U+D2D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D5");
    },
    Error,
    "EncodingError U+D2D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D6");
    },
    Error,
    "EncodingError U+D2D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D7");
    },
    Error,
    "EncodingError U+D2D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D8");
    },
    Error,
    "EncodingError U+D2D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D9");
    },
    Error,
    "EncodingError U+D2D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2DA");
    },
    Error,
    "EncodingError U+D2DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2DB");
    },
    Error,
    "EncodingError U+D2DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2DC");
    },
    Error,
    "EncodingError U+D2DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2DD");
    },
    Error,
    "EncodingError U+D2DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2DE");
    },
    Error,
    "EncodingError U+D2DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2DF");
    },
    Error,
    "EncodingError U+D2DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E0");
    },
    Error,
    "EncodingError U+D2E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E1");
    },
    Error,
    "EncodingError U+D2E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E2");
    },
    Error,
    "EncodingError U+D2E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E3");
    },
    Error,
    "EncodingError U+D2E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E4");
    },
    Error,
    "EncodingError U+D2E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E5");
    },
    Error,
    "EncodingError U+D2E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E6");
    },
    Error,
    "EncodingError U+D2E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E7");
    },
    Error,
    "EncodingError U+D2E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E8");
    },
    Error,
    "EncodingError U+D2E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E9");
    },
    Error,
    "EncodingError U+D2E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2EA");
    },
    Error,
    "EncodingError U+D2EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2EB");
    },
    Error,
    "EncodingError U+D2EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2EC");
    },
    Error,
    "EncodingError U+D2EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2ED");
    },
    Error,
    "EncodingError U+D2ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2EE");
    },
    Error,
    "EncodingError U+D2EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2EF");
    },
    Error,
    "EncodingError U+D2EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F0");
    },
    Error,
    "EncodingError U+D2F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F1");
    },
    Error,
    "EncodingError U+D2F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F2");
    },
    Error,
    "EncodingError U+D2F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F3");
    },
    Error,
    "EncodingError U+D2F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F4");
    },
    Error,
    "EncodingError U+D2F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F5");
    },
    Error,
    "EncodingError U+D2F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F6");
    },
    Error,
    "EncodingError U+D2F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F7");
    },
    Error,
    "EncodingError U+D2F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F8");
    },
    Error,
    "EncodingError U+D2F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F9");
    },
    Error,
    "EncodingError U+D2F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2FA");
    },
    Error,
    "EncodingError U+D2FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2FB");
    },
    Error,
    "EncodingError U+D2FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2FC");
    },
    Error,
    "EncodingError U+D2FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2FD");
    },
    Error,
    "EncodingError U+D2FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2FE");
    },
    Error,
    "EncodingError U+D2FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2FF");
    },
    Error,
    "EncodingError U+D2FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD300");
    },
    Error,
    "EncodingError U+D300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD301");
    },
    Error,
    "EncodingError U+D301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD302");
    },
    Error,
    "EncodingError U+D302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD303");
    },
    Error,
    "EncodingError U+D303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD304");
    },
    Error,
    "EncodingError U+D304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD305");
    },
    Error,
    "EncodingError U+D305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD306");
    },
    Error,
    "EncodingError U+D306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD307");
    },
    Error,
    "EncodingError U+D307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD308");
    },
    Error,
    "EncodingError U+D308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD309");
    },
    Error,
    "EncodingError U+D309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD30A");
    },
    Error,
    "EncodingError U+D30A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD30B");
    },
    Error,
    "EncodingError U+D30B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD30C");
    },
    Error,
    "EncodingError U+D30C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD30D");
    },
    Error,
    "EncodingError U+D30D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD30E");
    },
    Error,
    "EncodingError U+D30E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD30F");
    },
    Error,
    "EncodingError U+D30F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD310");
    },
    Error,
    "EncodingError U+D310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD311");
    },
    Error,
    "EncodingError U+D311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD312");
    },
    Error,
    "EncodingError U+D312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD313");
    },
    Error,
    "EncodingError U+D313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD314");
    },
    Error,
    "EncodingError U+D314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD315");
    },
    Error,
    "EncodingError U+D315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD316");
    },
    Error,
    "EncodingError U+D316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD317");
    },
    Error,
    "EncodingError U+D317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD318");
    },
    Error,
    "EncodingError U+D318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD319");
    },
    Error,
    "EncodingError U+D319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD31A");
    },
    Error,
    "EncodingError U+D31A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD31B");
    },
    Error,
    "EncodingError U+D31B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD31C");
    },
    Error,
    "EncodingError U+D31C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD31D");
    },
    Error,
    "EncodingError U+D31D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD31E");
    },
    Error,
    "EncodingError U+D31E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD31F");
    },
    Error,
    "EncodingError U+D31F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD320");
    },
    Error,
    "EncodingError U+D320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD321");
    },
    Error,
    "EncodingError U+D321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD322");
    },
    Error,
    "EncodingError U+D322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD323");
    },
    Error,
    "EncodingError U+D323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD324");
    },
    Error,
    "EncodingError U+D324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD325");
    },
    Error,
    "EncodingError U+D325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD326");
    },
    Error,
    "EncodingError U+D326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD327");
    },
    Error,
    "EncodingError U+D327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD328");
    },
    Error,
    "EncodingError U+D328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD329");
    },
    Error,
    "EncodingError U+D329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD32A");
    },
    Error,
    "EncodingError U+D32A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD32B");
    },
    Error,
    "EncodingError U+D32B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD32C");
    },
    Error,
    "EncodingError U+D32C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD32D");
    },
    Error,
    "EncodingError U+D32D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD32E");
    },
    Error,
    "EncodingError U+D32E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD32F");
    },
    Error,
    "EncodingError U+D32F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD330");
    },
    Error,
    "EncodingError U+D330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD331");
    },
    Error,
    "EncodingError U+D331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD332");
    },
    Error,
    "EncodingError U+D332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD333");
    },
    Error,
    "EncodingError U+D333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD334");
    },
    Error,
    "EncodingError U+D334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD335");
    },
    Error,
    "EncodingError U+D335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD336");
    },
    Error,
    "EncodingError U+D336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD337");
    },
    Error,
    "EncodingError U+D337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD338");
    },
    Error,
    "EncodingError U+D338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD339");
    },
    Error,
    "EncodingError U+D339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD33A");
    },
    Error,
    "EncodingError U+D33A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD33B");
    },
    Error,
    "EncodingError U+D33B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD33C");
    },
    Error,
    "EncodingError U+D33C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD33D");
    },
    Error,
    "EncodingError U+D33D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD33E");
    },
    Error,
    "EncodingError U+D33E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD33F");
    },
    Error,
    "EncodingError U+D33F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD340");
    },
    Error,
    "EncodingError U+D340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD341");
    },
    Error,
    "EncodingError U+D341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD342");
    },
    Error,
    "EncodingError U+D342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD343");
    },
    Error,
    "EncodingError U+D343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD344");
    },
    Error,
    "EncodingError U+D344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD345");
    },
    Error,
    "EncodingError U+D345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD346");
    },
    Error,
    "EncodingError U+D346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD347");
    },
    Error,
    "EncodingError U+D347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD348");
    },
    Error,
    "EncodingError U+D348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD349");
    },
    Error,
    "EncodingError U+D349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD34A");
    },
    Error,
    "EncodingError U+D34A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD34B");
    },
    Error,
    "EncodingError U+D34B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD34C");
    },
    Error,
    "EncodingError U+D34C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD34D");
    },
    Error,
    "EncodingError U+D34D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD34E");
    },
    Error,
    "EncodingError U+D34E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD34F");
    },
    Error,
    "EncodingError U+D34F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD350");
    },
    Error,
    "EncodingError U+D350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD351");
    },
    Error,
    "EncodingError U+D351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD352");
    },
    Error,
    "EncodingError U+D352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD353");
    },
    Error,
    "EncodingError U+D353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD354");
    },
    Error,
    "EncodingError U+D354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD355");
    },
    Error,
    "EncodingError U+D355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD356");
    },
    Error,
    "EncodingError U+D356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD357");
    },
    Error,
    "EncodingError U+D357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD358");
    },
    Error,
    "EncodingError U+D358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD359");
    },
    Error,
    "EncodingError U+D359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD35A");
    },
    Error,
    "EncodingError U+D35A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD35B");
    },
    Error,
    "EncodingError U+D35B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD35C");
    },
    Error,
    "EncodingError U+D35C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD35D");
    },
    Error,
    "EncodingError U+D35D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD35E");
    },
    Error,
    "EncodingError U+D35E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD35F");
    },
    Error,
    "EncodingError U+D35F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD360");
    },
    Error,
    "EncodingError U+D360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD361");
    },
    Error,
    "EncodingError U+D361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD362");
    },
    Error,
    "EncodingError U+D362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD363");
    },
    Error,
    "EncodingError U+D363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD364");
    },
    Error,
    "EncodingError U+D364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD365");
    },
    Error,
    "EncodingError U+D365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD366");
    },
    Error,
    "EncodingError U+D366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD367");
    },
    Error,
    "EncodingError U+D367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD368");
    },
    Error,
    "EncodingError U+D368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD369");
    },
    Error,
    "EncodingError U+D369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD36A");
    },
    Error,
    "EncodingError U+D36A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD36B");
    },
    Error,
    "EncodingError U+D36B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD36C");
    },
    Error,
    "EncodingError U+D36C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD36D");
    },
    Error,
    "EncodingError U+D36D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD36E");
    },
    Error,
    "EncodingError U+D36E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD36F");
    },
    Error,
    "EncodingError U+D36F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD370");
    },
    Error,
    "EncodingError U+D370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD371");
    },
    Error,
    "EncodingError U+D371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD372");
    },
    Error,
    "EncodingError U+D372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD373");
    },
    Error,
    "EncodingError U+D373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD374");
    },
    Error,
    "EncodingError U+D374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD375");
    },
    Error,
    "EncodingError U+D375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD376");
    },
    Error,
    "EncodingError U+D376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD377");
    },
    Error,
    "EncodingError U+D377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD378");
    },
    Error,
    "EncodingError U+D378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD379");
    },
    Error,
    "EncodingError U+D379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD37A");
    },
    Error,
    "EncodingError U+D37A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD37B");
    },
    Error,
    "EncodingError U+D37B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD37C");
    },
    Error,
    "EncodingError U+D37C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD37D");
    },
    Error,
    "EncodingError U+D37D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD37E");
    },
    Error,
    "EncodingError U+D37E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD37F");
    },
    Error,
    "EncodingError U+D37F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD380");
    },
    Error,
    "EncodingError U+D380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD381");
    },
    Error,
    "EncodingError U+D381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD382");
    },
    Error,
    "EncodingError U+D382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD383");
    },
    Error,
    "EncodingError U+D383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD384");
    },
    Error,
    "EncodingError U+D384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD385");
    },
    Error,
    "EncodingError U+D385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD386");
    },
    Error,
    "EncodingError U+D386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD387");
    },
    Error,
    "EncodingError U+D387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD388");
    },
    Error,
    "EncodingError U+D388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD389");
    },
    Error,
    "EncodingError U+D389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD38A");
    },
    Error,
    "EncodingError U+D38A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD38B");
    },
    Error,
    "EncodingError U+D38B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD38C");
    },
    Error,
    "EncodingError U+D38C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD38D");
    },
    Error,
    "EncodingError U+D38D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD38E");
    },
    Error,
    "EncodingError U+D38E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD38F");
    },
    Error,
    "EncodingError U+D38F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD390");
    },
    Error,
    "EncodingError U+D390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD391");
    },
    Error,
    "EncodingError U+D391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD392");
    },
    Error,
    "EncodingError U+D392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD393");
    },
    Error,
    "EncodingError U+D393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD394");
    },
    Error,
    "EncodingError U+D394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD395");
    },
    Error,
    "EncodingError U+D395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD396");
    },
    Error,
    "EncodingError U+D396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD397");
    },
    Error,
    "EncodingError U+D397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD398");
    },
    Error,
    "EncodingError U+D398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD399");
    },
    Error,
    "EncodingError U+D399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD39A");
    },
    Error,
    "EncodingError U+D39A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD39B");
    },
    Error,
    "EncodingError U+D39B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD39C");
    },
    Error,
    "EncodingError U+D39C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD39D");
    },
    Error,
    "EncodingError U+D39D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD39E");
    },
    Error,
    "EncodingError U+D39E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD39F");
    },
    Error,
    "EncodingError U+D39F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A0");
    },
    Error,
    "EncodingError U+D3A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A1");
    },
    Error,
    "EncodingError U+D3A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A2");
    },
    Error,
    "EncodingError U+D3A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A3");
    },
    Error,
    "EncodingError U+D3A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A4");
    },
    Error,
    "EncodingError U+D3A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A5");
    },
    Error,
    "EncodingError U+D3A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A6");
    },
    Error,
    "EncodingError U+D3A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A7");
    },
    Error,
    "EncodingError U+D3A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A8");
    },
    Error,
    "EncodingError U+D3A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A9");
    },
    Error,
    "EncodingError U+D3A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3AA");
    },
    Error,
    "EncodingError U+D3AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3AB");
    },
    Error,
    "EncodingError U+D3AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3AC");
    },
    Error,
    "EncodingError U+D3AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3AD");
    },
    Error,
    "EncodingError U+D3AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3AE");
    },
    Error,
    "EncodingError U+D3AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3AF");
    },
    Error,
    "EncodingError U+D3AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B0");
    },
    Error,
    "EncodingError U+D3B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B1");
    },
    Error,
    "EncodingError U+D3B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B2");
    },
    Error,
    "EncodingError U+D3B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B3");
    },
    Error,
    "EncodingError U+D3B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B4");
    },
    Error,
    "EncodingError U+D3B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B5");
    },
    Error,
    "EncodingError U+D3B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B6");
    },
    Error,
    "EncodingError U+D3B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B7");
    },
    Error,
    "EncodingError U+D3B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B8");
    },
    Error,
    "EncodingError U+D3B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B9");
    },
    Error,
    "EncodingError U+D3B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3BA");
    },
    Error,
    "EncodingError U+D3BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3BB");
    },
    Error,
    "EncodingError U+D3BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3BC");
    },
    Error,
    "EncodingError U+D3BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3BD");
    },
    Error,
    "EncodingError U+D3BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3BE");
    },
    Error,
    "EncodingError U+D3BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3BF");
    },
    Error,
    "EncodingError U+D3BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C0");
    },
    Error,
    "EncodingError U+D3C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C1");
    },
    Error,
    "EncodingError U+D3C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C2");
    },
    Error,
    "EncodingError U+D3C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C3");
    },
    Error,
    "EncodingError U+D3C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C4");
    },
    Error,
    "EncodingError U+D3C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C5");
    },
    Error,
    "EncodingError U+D3C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C6");
    },
    Error,
    "EncodingError U+D3C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C7");
    },
    Error,
    "EncodingError U+D3C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C8");
    },
    Error,
    "EncodingError U+D3C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C9");
    },
    Error,
    "EncodingError U+D3C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3CA");
    },
    Error,
    "EncodingError U+D3CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3CB");
    },
    Error,
    "EncodingError U+D3CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3CC");
    },
    Error,
    "EncodingError U+D3CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3CD");
    },
    Error,
    "EncodingError U+D3CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3CE");
    },
    Error,
    "EncodingError U+D3CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3CF");
    },
    Error,
    "EncodingError U+D3CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D0");
    },
    Error,
    "EncodingError U+D3D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D1");
    },
    Error,
    "EncodingError U+D3D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D2");
    },
    Error,
    "EncodingError U+D3D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D3");
    },
    Error,
    "EncodingError U+D3D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D4");
    },
    Error,
    "EncodingError U+D3D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D5");
    },
    Error,
    "EncodingError U+D3D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D6");
    },
    Error,
    "EncodingError U+D3D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D7");
    },
    Error,
    "EncodingError U+D3D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D8");
    },
    Error,
    "EncodingError U+D3D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D9");
    },
    Error,
    "EncodingError U+D3D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3DA");
    },
    Error,
    "EncodingError U+D3DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3DB");
    },
    Error,
    "EncodingError U+D3DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3DC");
    },
    Error,
    "EncodingError U+D3DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3DD");
    },
    Error,
    "EncodingError U+D3DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3DE");
    },
    Error,
    "EncodingError U+D3DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3DF");
    },
    Error,
    "EncodingError U+D3DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E0");
    },
    Error,
    "EncodingError U+D3E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E1");
    },
    Error,
    "EncodingError U+D3E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E2");
    },
    Error,
    "EncodingError U+D3E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E3");
    },
    Error,
    "EncodingError U+D3E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E4");
    },
    Error,
    "EncodingError U+D3E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E5");
    },
    Error,
    "EncodingError U+D3E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E6");
    },
    Error,
    "EncodingError U+D3E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E7");
    },
    Error,
    "EncodingError U+D3E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E8");
    },
    Error,
    "EncodingError U+D3E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E9");
    },
    Error,
    "EncodingError U+D3E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3EA");
    },
    Error,
    "EncodingError U+D3EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3EB");
    },
    Error,
    "EncodingError U+D3EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3EC");
    },
    Error,
    "EncodingError U+D3EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3ED");
    },
    Error,
    "EncodingError U+D3ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3EE");
    },
    Error,
    "EncodingError U+D3EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3EF");
    },
    Error,
    "EncodingError U+D3EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F0");
    },
    Error,
    "EncodingError U+D3F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F1");
    },
    Error,
    "EncodingError U+D3F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F2");
    },
    Error,
    "EncodingError U+D3F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F3");
    },
    Error,
    "EncodingError U+D3F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F4");
    },
    Error,
    "EncodingError U+D3F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F5");
    },
    Error,
    "EncodingError U+D3F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F6");
    },
    Error,
    "EncodingError U+D3F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F7");
    },
    Error,
    "EncodingError U+D3F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F8");
    },
    Error,
    "EncodingError U+D3F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F9");
    },
    Error,
    "EncodingError U+D3F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3FA");
    },
    Error,
    "EncodingError U+D3FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3FB");
    },
    Error,
    "EncodingError U+D3FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3FC");
    },
    Error,
    "EncodingError U+D3FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3FD");
    },
    Error,
    "EncodingError U+D3FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3FE");
    },
    Error,
    "EncodingError U+D3FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3FF");
    },
    Error,
    "EncodingError U+D3FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD400");
    },
    Error,
    "EncodingError U+D400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD401");
    },
    Error,
    "EncodingError U+D401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD402");
    },
    Error,
    "EncodingError U+D402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD403");
    },
    Error,
    "EncodingError U+D403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD404");
    },
    Error,
    "EncodingError U+D404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD405");
    },
    Error,
    "EncodingError U+D405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD406");
    },
    Error,
    "EncodingError U+D406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD407");
    },
    Error,
    "EncodingError U+D407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD408");
    },
    Error,
    "EncodingError U+D408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD409");
    },
    Error,
    "EncodingError U+D409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD40A");
    },
    Error,
    "EncodingError U+D40A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD40B");
    },
    Error,
    "EncodingError U+D40B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD40C");
    },
    Error,
    "EncodingError U+D40C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD40D");
    },
    Error,
    "EncodingError U+D40D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD40E");
    },
    Error,
    "EncodingError U+D40E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD40F");
    },
    Error,
    "EncodingError U+D40F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD410");
    },
    Error,
    "EncodingError U+D410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD411");
    },
    Error,
    "EncodingError U+D411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD412");
    },
    Error,
    "EncodingError U+D412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD413");
    },
    Error,
    "EncodingError U+D413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD414");
    },
    Error,
    "EncodingError U+D414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD415");
    },
    Error,
    "EncodingError U+D415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD416");
    },
    Error,
    "EncodingError U+D416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD417");
    },
    Error,
    "EncodingError U+D417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD418");
    },
    Error,
    "EncodingError U+D418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD419");
    },
    Error,
    "EncodingError U+D419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD41A");
    },
    Error,
    "EncodingError U+D41A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD41B");
    },
    Error,
    "EncodingError U+D41B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD41C");
    },
    Error,
    "EncodingError U+D41C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD41D");
    },
    Error,
    "EncodingError U+D41D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD41E");
    },
    Error,
    "EncodingError U+D41E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD41F");
    },
    Error,
    "EncodingError U+D41F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD420");
    },
    Error,
    "EncodingError U+D420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD421");
    },
    Error,
    "EncodingError U+D421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD422");
    },
    Error,
    "EncodingError U+D422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD423");
    },
    Error,
    "EncodingError U+D423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD424");
    },
    Error,
    "EncodingError U+D424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD425");
    },
    Error,
    "EncodingError U+D425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD426");
    },
    Error,
    "EncodingError U+D426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD427");
    },
    Error,
    "EncodingError U+D427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD428");
    },
    Error,
    "EncodingError U+D428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD429");
    },
    Error,
    "EncodingError U+D429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD42A");
    },
    Error,
    "EncodingError U+D42A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD42B");
    },
    Error,
    "EncodingError U+D42B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD42C");
    },
    Error,
    "EncodingError U+D42C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD42D");
    },
    Error,
    "EncodingError U+D42D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD42E");
    },
    Error,
    "EncodingError U+D42E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD42F");
    },
    Error,
    "EncodingError U+D42F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD430");
    },
    Error,
    "EncodingError U+D430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD431");
    },
    Error,
    "EncodingError U+D431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD432");
    },
    Error,
    "EncodingError U+D432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD433");
    },
    Error,
    "EncodingError U+D433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD434");
    },
    Error,
    "EncodingError U+D434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD435");
    },
    Error,
    "EncodingError U+D435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD436");
    },
    Error,
    "EncodingError U+D436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD437");
    },
    Error,
    "EncodingError U+D437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD438");
    },
    Error,
    "EncodingError U+D438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD439");
    },
    Error,
    "EncodingError U+D439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD43A");
    },
    Error,
    "EncodingError U+D43A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD43B");
    },
    Error,
    "EncodingError U+D43B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD43C");
    },
    Error,
    "EncodingError U+D43C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD43D");
    },
    Error,
    "EncodingError U+D43D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD43E");
    },
    Error,
    "EncodingError U+D43E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD43F");
    },
    Error,
    "EncodingError U+D43F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD440");
    },
    Error,
    "EncodingError U+D440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD441");
    },
    Error,
    "EncodingError U+D441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD442");
    },
    Error,
    "EncodingError U+D442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD443");
    },
    Error,
    "EncodingError U+D443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD444");
    },
    Error,
    "EncodingError U+D444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD445");
    },
    Error,
    "EncodingError U+D445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD446");
    },
    Error,
    "EncodingError U+D446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD447");
    },
    Error,
    "EncodingError U+D447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD448");
    },
    Error,
    "EncodingError U+D448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD449");
    },
    Error,
    "EncodingError U+D449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD44A");
    },
    Error,
    "EncodingError U+D44A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD44B");
    },
    Error,
    "EncodingError U+D44B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD44C");
    },
    Error,
    "EncodingError U+D44C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD44D");
    },
    Error,
    "EncodingError U+D44D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD44E");
    },
    Error,
    "EncodingError U+D44E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD44F");
    },
    Error,
    "EncodingError U+D44F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD450");
    },
    Error,
    "EncodingError U+D450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD451");
    },
    Error,
    "EncodingError U+D451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD452");
    },
    Error,
    "EncodingError U+D452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD453");
    },
    Error,
    "EncodingError U+D453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD454");
    },
    Error,
    "EncodingError U+D454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD455");
    },
    Error,
    "EncodingError U+D455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD456");
    },
    Error,
    "EncodingError U+D456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD457");
    },
    Error,
    "EncodingError U+D457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD458");
    },
    Error,
    "EncodingError U+D458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD459");
    },
    Error,
    "EncodingError U+D459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD45A");
    },
    Error,
    "EncodingError U+D45A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD45B");
    },
    Error,
    "EncodingError U+D45B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD45C");
    },
    Error,
    "EncodingError U+D45C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD45D");
    },
    Error,
    "EncodingError U+D45D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD45E");
    },
    Error,
    "EncodingError U+D45E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD45F");
    },
    Error,
    "EncodingError U+D45F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD460");
    },
    Error,
    "EncodingError U+D460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD461");
    },
    Error,
    "EncodingError U+D461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD462");
    },
    Error,
    "EncodingError U+D462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD463");
    },
    Error,
    "EncodingError U+D463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD464");
    },
    Error,
    "EncodingError U+D464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD465");
    },
    Error,
    "EncodingError U+D465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD466");
    },
    Error,
    "EncodingError U+D466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD467");
    },
    Error,
    "EncodingError U+D467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD468");
    },
    Error,
    "EncodingError U+D468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD469");
    },
    Error,
    "EncodingError U+D469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD46A");
    },
    Error,
    "EncodingError U+D46A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD46B");
    },
    Error,
    "EncodingError U+D46B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD46C");
    },
    Error,
    "EncodingError U+D46C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD46D");
    },
    Error,
    "EncodingError U+D46D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD46E");
    },
    Error,
    "EncodingError U+D46E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD46F");
    },
    Error,
    "EncodingError U+D46F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD470");
    },
    Error,
    "EncodingError U+D470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD471");
    },
    Error,
    "EncodingError U+D471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD472");
    },
    Error,
    "EncodingError U+D472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD473");
    },
    Error,
    "EncodingError U+D473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD474");
    },
    Error,
    "EncodingError U+D474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD475");
    },
    Error,
    "EncodingError U+D475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD476");
    },
    Error,
    "EncodingError U+D476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD477");
    },
    Error,
    "EncodingError U+D477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD478");
    },
    Error,
    "EncodingError U+D478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD479");
    },
    Error,
    "EncodingError U+D479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD47A");
    },
    Error,
    "EncodingError U+D47A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD47B");
    },
    Error,
    "EncodingError U+D47B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD47C");
    },
    Error,
    "EncodingError U+D47C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD47D");
    },
    Error,
    "EncodingError U+D47D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD47E");
    },
    Error,
    "EncodingError U+D47E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD47F");
    },
    Error,
    "EncodingError U+D47F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD480");
    },
    Error,
    "EncodingError U+D480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD481");
    },
    Error,
    "EncodingError U+D481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD482");
    },
    Error,
    "EncodingError U+D482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD483");
    },
    Error,
    "EncodingError U+D483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD484");
    },
    Error,
    "EncodingError U+D484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD485");
    },
    Error,
    "EncodingError U+D485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD486");
    },
    Error,
    "EncodingError U+D486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD487");
    },
    Error,
    "EncodingError U+D487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD488");
    },
    Error,
    "EncodingError U+D488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD489");
    },
    Error,
    "EncodingError U+D489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD48A");
    },
    Error,
    "EncodingError U+D48A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD48B");
    },
    Error,
    "EncodingError U+D48B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD48C");
    },
    Error,
    "EncodingError U+D48C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD48D");
    },
    Error,
    "EncodingError U+D48D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD48E");
    },
    Error,
    "EncodingError U+D48E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD48F");
    },
    Error,
    "EncodingError U+D48F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD490");
    },
    Error,
    "EncodingError U+D490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD491");
    },
    Error,
    "EncodingError U+D491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD492");
    },
    Error,
    "EncodingError U+D492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD493");
    },
    Error,
    "EncodingError U+D493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD494");
    },
    Error,
    "EncodingError U+D494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD495");
    },
    Error,
    "EncodingError U+D495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD496");
    },
    Error,
    "EncodingError U+D496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD497");
    },
    Error,
    "EncodingError U+D497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD498");
    },
    Error,
    "EncodingError U+D498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD499");
    },
    Error,
    "EncodingError U+D499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD49A");
    },
    Error,
    "EncodingError U+D49A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD49B");
    },
    Error,
    "EncodingError U+D49B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD49C");
    },
    Error,
    "EncodingError U+D49C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD49D");
    },
    Error,
    "EncodingError U+D49D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD49E");
    },
    Error,
    "EncodingError U+D49E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD49F");
    },
    Error,
    "EncodingError U+D49F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A0");
    },
    Error,
    "EncodingError U+D4A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A1");
    },
    Error,
    "EncodingError U+D4A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A2");
    },
    Error,
    "EncodingError U+D4A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A3");
    },
    Error,
    "EncodingError U+D4A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A4");
    },
    Error,
    "EncodingError U+D4A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A5");
    },
    Error,
    "EncodingError U+D4A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A6");
    },
    Error,
    "EncodingError U+D4A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A7");
    },
    Error,
    "EncodingError U+D4A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A8");
    },
    Error,
    "EncodingError U+D4A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A9");
    },
    Error,
    "EncodingError U+D4A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4AA");
    },
    Error,
    "EncodingError U+D4AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4AB");
    },
    Error,
    "EncodingError U+D4AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4AC");
    },
    Error,
    "EncodingError U+D4AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4AD");
    },
    Error,
    "EncodingError U+D4AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4AE");
    },
    Error,
    "EncodingError U+D4AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4AF");
    },
    Error,
    "EncodingError U+D4AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B0");
    },
    Error,
    "EncodingError U+D4B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B1");
    },
    Error,
    "EncodingError U+D4B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B2");
    },
    Error,
    "EncodingError U+D4B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B3");
    },
    Error,
    "EncodingError U+D4B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B4");
    },
    Error,
    "EncodingError U+D4B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B5");
    },
    Error,
    "EncodingError U+D4B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B6");
    },
    Error,
    "EncodingError U+D4B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B7");
    },
    Error,
    "EncodingError U+D4B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B8");
    },
    Error,
    "EncodingError U+D4B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B9");
    },
    Error,
    "EncodingError U+D4B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4BA");
    },
    Error,
    "EncodingError U+D4BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4BB");
    },
    Error,
    "EncodingError U+D4BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4BC");
    },
    Error,
    "EncodingError U+D4BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4BD");
    },
    Error,
    "EncodingError U+D4BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4BE");
    },
    Error,
    "EncodingError U+D4BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4BF");
    },
    Error,
    "EncodingError U+D4BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C0");
    },
    Error,
    "EncodingError U+D4C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C1");
    },
    Error,
    "EncodingError U+D4C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C2");
    },
    Error,
    "EncodingError U+D4C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C3");
    },
    Error,
    "EncodingError U+D4C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C4");
    },
    Error,
    "EncodingError U+D4C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C5");
    },
    Error,
    "EncodingError U+D4C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C6");
    },
    Error,
    "EncodingError U+D4C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C7");
    },
    Error,
    "EncodingError U+D4C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C8");
    },
    Error,
    "EncodingError U+D4C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C9");
    },
    Error,
    "EncodingError U+D4C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4CA");
    },
    Error,
    "EncodingError U+D4CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4CB");
    },
    Error,
    "EncodingError U+D4CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4CC");
    },
    Error,
    "EncodingError U+D4CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4CD");
    },
    Error,
    "EncodingError U+D4CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4CE");
    },
    Error,
    "EncodingError U+D4CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4CF");
    },
    Error,
    "EncodingError U+D4CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D0");
    },
    Error,
    "EncodingError U+D4D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D1");
    },
    Error,
    "EncodingError U+D4D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D2");
    },
    Error,
    "EncodingError U+D4D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D3");
    },
    Error,
    "EncodingError U+D4D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D4");
    },
    Error,
    "EncodingError U+D4D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D5");
    },
    Error,
    "EncodingError U+D4D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D6");
    },
    Error,
    "EncodingError U+D4D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D7");
    },
    Error,
    "EncodingError U+D4D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D8");
    },
    Error,
    "EncodingError U+D4D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D9");
    },
    Error,
    "EncodingError U+D4D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4DA");
    },
    Error,
    "EncodingError U+D4DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4DB");
    },
    Error,
    "EncodingError U+D4DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4DC");
    },
    Error,
    "EncodingError U+D4DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4DD");
    },
    Error,
    "EncodingError U+D4DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4DE");
    },
    Error,
    "EncodingError U+D4DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4DF");
    },
    Error,
    "EncodingError U+D4DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E0");
    },
    Error,
    "EncodingError U+D4E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E1");
    },
    Error,
    "EncodingError U+D4E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E2");
    },
    Error,
    "EncodingError U+D4E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E3");
    },
    Error,
    "EncodingError U+D4E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E4");
    },
    Error,
    "EncodingError U+D4E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E5");
    },
    Error,
    "EncodingError U+D4E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E6");
    },
    Error,
    "EncodingError U+D4E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E7");
    },
    Error,
    "EncodingError U+D4E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E8");
    },
    Error,
    "EncodingError U+D4E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E9");
    },
    Error,
    "EncodingError U+D4E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4EA");
    },
    Error,
    "EncodingError U+D4EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4EB");
    },
    Error,
    "EncodingError U+D4EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4EC");
    },
    Error,
    "EncodingError U+D4EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4ED");
    },
    Error,
    "EncodingError U+D4ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4EE");
    },
    Error,
    "EncodingError U+D4EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4EF");
    },
    Error,
    "EncodingError U+D4EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F0");
    },
    Error,
    "EncodingError U+D4F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F1");
    },
    Error,
    "EncodingError U+D4F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F2");
    },
    Error,
    "EncodingError U+D4F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F3");
    },
    Error,
    "EncodingError U+D4F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F4");
    },
    Error,
    "EncodingError U+D4F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F5");
    },
    Error,
    "EncodingError U+D4F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F6");
    },
    Error,
    "EncodingError U+D4F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F7");
    },
    Error,
    "EncodingError U+D4F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F8");
    },
    Error,
    "EncodingError U+D4F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F9");
    },
    Error,
    "EncodingError U+D4F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4FA");
    },
    Error,
    "EncodingError U+D4FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4FB");
    },
    Error,
    "EncodingError U+D4FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4FC");
    },
    Error,
    "EncodingError U+D4FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4FD");
    },
    Error,
    "EncodingError U+D4FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4FE");
    },
    Error,
    "EncodingError U+D4FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4FF");
    },
    Error,
    "EncodingError U+D4FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD500");
    },
    Error,
    "EncodingError U+D500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD501");
    },
    Error,
    "EncodingError U+D501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD502");
    },
    Error,
    "EncodingError U+D502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD503");
    },
    Error,
    "EncodingError U+D503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD504");
    },
    Error,
    "EncodingError U+D504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD505");
    },
    Error,
    "EncodingError U+D505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD506");
    },
    Error,
    "EncodingError U+D506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD507");
    },
    Error,
    "EncodingError U+D507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD508");
    },
    Error,
    "EncodingError U+D508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD509");
    },
    Error,
    "EncodingError U+D509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD50A");
    },
    Error,
    "EncodingError U+D50A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD50B");
    },
    Error,
    "EncodingError U+D50B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD50C");
    },
    Error,
    "EncodingError U+D50C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD50D");
    },
    Error,
    "EncodingError U+D50D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD50E");
    },
    Error,
    "EncodingError U+D50E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD50F");
    },
    Error,
    "EncodingError U+D50F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD510");
    },
    Error,
    "EncodingError U+D510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD511");
    },
    Error,
    "EncodingError U+D511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD512");
    },
    Error,
    "EncodingError U+D512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD513");
    },
    Error,
    "EncodingError U+D513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD514");
    },
    Error,
    "EncodingError U+D514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD515");
    },
    Error,
    "EncodingError U+D515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD516");
    },
    Error,
    "EncodingError U+D516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD517");
    },
    Error,
    "EncodingError U+D517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD518");
    },
    Error,
    "EncodingError U+D518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD519");
    },
    Error,
    "EncodingError U+D519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD51A");
    },
    Error,
    "EncodingError U+D51A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD51B");
    },
    Error,
    "EncodingError U+D51B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD51C");
    },
    Error,
    "EncodingError U+D51C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD51D");
    },
    Error,
    "EncodingError U+D51D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD51E");
    },
    Error,
    "EncodingError U+D51E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD51F");
    },
    Error,
    "EncodingError U+D51F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD520");
    },
    Error,
    "EncodingError U+D520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD521");
    },
    Error,
    "EncodingError U+D521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD522");
    },
    Error,
    "EncodingError U+D522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD523");
    },
    Error,
    "EncodingError U+D523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD524");
    },
    Error,
    "EncodingError U+D524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD525");
    },
    Error,
    "EncodingError U+D525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD526");
    },
    Error,
    "EncodingError U+D526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD527");
    },
    Error,
    "EncodingError U+D527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD528");
    },
    Error,
    "EncodingError U+D528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD529");
    },
    Error,
    "EncodingError U+D529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD52A");
    },
    Error,
    "EncodingError U+D52A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD52B");
    },
    Error,
    "EncodingError U+D52B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD52C");
    },
    Error,
    "EncodingError U+D52C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD52D");
    },
    Error,
    "EncodingError U+D52D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD52E");
    },
    Error,
    "EncodingError U+D52E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD52F");
    },
    Error,
    "EncodingError U+D52F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD530");
    },
    Error,
    "EncodingError U+D530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD531");
    },
    Error,
    "EncodingError U+D531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD532");
    },
    Error,
    "EncodingError U+D532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD533");
    },
    Error,
    "EncodingError U+D533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD534");
    },
    Error,
    "EncodingError U+D534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD535");
    },
    Error,
    "EncodingError U+D535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD536");
    },
    Error,
    "EncodingError U+D536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD537");
    },
    Error,
    "EncodingError U+D537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD538");
    },
    Error,
    "EncodingError U+D538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD539");
    },
    Error,
    "EncodingError U+D539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD53A");
    },
    Error,
    "EncodingError U+D53A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD53B");
    },
    Error,
    "EncodingError U+D53B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD53C");
    },
    Error,
    "EncodingError U+D53C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD53D");
    },
    Error,
    "EncodingError U+D53D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD53E");
    },
    Error,
    "EncodingError U+D53E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD53F");
    },
    Error,
    "EncodingError U+D53F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD540");
    },
    Error,
    "EncodingError U+D540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD541");
    },
    Error,
    "EncodingError U+D541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD542");
    },
    Error,
    "EncodingError U+D542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD543");
    },
    Error,
    "EncodingError U+D543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD544");
    },
    Error,
    "EncodingError U+D544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD545");
    },
    Error,
    "EncodingError U+D545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD546");
    },
    Error,
    "EncodingError U+D546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD547");
    },
    Error,
    "EncodingError U+D547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD548");
    },
    Error,
    "EncodingError U+D548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD549");
    },
    Error,
    "EncodingError U+D549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD54A");
    },
    Error,
    "EncodingError U+D54A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD54B");
    },
    Error,
    "EncodingError U+D54B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD54C");
    },
    Error,
    "EncodingError U+D54C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD54D");
    },
    Error,
    "EncodingError U+D54D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD54E");
    },
    Error,
    "EncodingError U+D54E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD54F");
    },
    Error,
    "EncodingError U+D54F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD550");
    },
    Error,
    "EncodingError U+D550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD551");
    },
    Error,
    "EncodingError U+D551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD552");
    },
    Error,
    "EncodingError U+D552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD553");
    },
    Error,
    "EncodingError U+D553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD554");
    },
    Error,
    "EncodingError U+D554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD555");
    },
    Error,
    "EncodingError U+D555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD556");
    },
    Error,
    "EncodingError U+D556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD557");
    },
    Error,
    "EncodingError U+D557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD558");
    },
    Error,
    "EncodingError U+D558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD559");
    },
    Error,
    "EncodingError U+D559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD55A");
    },
    Error,
    "EncodingError U+D55A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD55B");
    },
    Error,
    "EncodingError U+D55B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD55C");
    },
    Error,
    "EncodingError U+D55C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD55D");
    },
    Error,
    "EncodingError U+D55D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD55E");
    },
    Error,
    "EncodingError U+D55E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD55F");
    },
    Error,
    "EncodingError U+D55F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD560");
    },
    Error,
    "EncodingError U+D560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD561");
    },
    Error,
    "EncodingError U+D561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD562");
    },
    Error,
    "EncodingError U+D562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD563");
    },
    Error,
    "EncodingError U+D563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD564");
    },
    Error,
    "EncodingError U+D564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD565");
    },
    Error,
    "EncodingError U+D565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD566");
    },
    Error,
    "EncodingError U+D566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD567");
    },
    Error,
    "EncodingError U+D567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD568");
    },
    Error,
    "EncodingError U+D568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD569");
    },
    Error,
    "EncodingError U+D569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD56A");
    },
    Error,
    "EncodingError U+D56A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD56B");
    },
    Error,
    "EncodingError U+D56B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD56C");
    },
    Error,
    "EncodingError U+D56C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD56D");
    },
    Error,
    "EncodingError U+D56D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD56E");
    },
    Error,
    "EncodingError U+D56E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD56F");
    },
    Error,
    "EncodingError U+D56F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD570");
    },
    Error,
    "EncodingError U+D570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD571");
    },
    Error,
    "EncodingError U+D571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD572");
    },
    Error,
    "EncodingError U+D572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD573");
    },
    Error,
    "EncodingError U+D573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD574");
    },
    Error,
    "EncodingError U+D574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD575");
    },
    Error,
    "EncodingError U+D575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD576");
    },
    Error,
    "EncodingError U+D576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD577");
    },
    Error,
    "EncodingError U+D577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD578");
    },
    Error,
    "EncodingError U+D578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD579");
    },
    Error,
    "EncodingError U+D579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD57A");
    },
    Error,
    "EncodingError U+D57A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD57B");
    },
    Error,
    "EncodingError U+D57B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD57C");
    },
    Error,
    "EncodingError U+D57C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD57D");
    },
    Error,
    "EncodingError U+D57D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD57E");
    },
    Error,
    "EncodingError U+D57E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD57F");
    },
    Error,
    "EncodingError U+D57F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD580");
    },
    Error,
    "EncodingError U+D580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD581");
    },
    Error,
    "EncodingError U+D581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD582");
    },
    Error,
    "EncodingError U+D582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD583");
    },
    Error,
    "EncodingError U+D583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD584");
    },
    Error,
    "EncodingError U+D584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD585");
    },
    Error,
    "EncodingError U+D585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD586");
    },
    Error,
    "EncodingError U+D586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD587");
    },
    Error,
    "EncodingError U+D587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD588");
    },
    Error,
    "EncodingError U+D588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD589");
    },
    Error,
    "EncodingError U+D589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD58A");
    },
    Error,
    "EncodingError U+D58A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD58B");
    },
    Error,
    "EncodingError U+D58B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD58C");
    },
    Error,
    "EncodingError U+D58C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD58D");
    },
    Error,
    "EncodingError U+D58D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD58E");
    },
    Error,
    "EncodingError U+D58E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD58F");
    },
    Error,
    "EncodingError U+D58F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD590");
    },
    Error,
    "EncodingError U+D590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD591");
    },
    Error,
    "EncodingError U+D591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD592");
    },
    Error,
    "EncodingError U+D592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD593");
    },
    Error,
    "EncodingError U+D593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD594");
    },
    Error,
    "EncodingError U+D594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD595");
    },
    Error,
    "EncodingError U+D595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD596");
    },
    Error,
    "EncodingError U+D596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD597");
    },
    Error,
    "EncodingError U+D597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD598");
    },
    Error,
    "EncodingError U+D598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD599");
    },
    Error,
    "EncodingError U+D599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD59A");
    },
    Error,
    "EncodingError U+D59A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD59B");
    },
    Error,
    "EncodingError U+D59B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD59C");
    },
    Error,
    "EncodingError U+D59C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD59D");
    },
    Error,
    "EncodingError U+D59D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD59E");
    },
    Error,
    "EncodingError U+D59E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD59F");
    },
    Error,
    "EncodingError U+D59F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A0");
    },
    Error,
    "EncodingError U+D5A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A1");
    },
    Error,
    "EncodingError U+D5A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A2");
    },
    Error,
    "EncodingError U+D5A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A3");
    },
    Error,
    "EncodingError U+D5A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A4");
    },
    Error,
    "EncodingError U+D5A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A5");
    },
    Error,
    "EncodingError U+D5A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A6");
    },
    Error,
    "EncodingError U+D5A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A7");
    },
    Error,
    "EncodingError U+D5A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A8");
    },
    Error,
    "EncodingError U+D5A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A9");
    },
    Error,
    "EncodingError U+D5A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5AA");
    },
    Error,
    "EncodingError U+D5AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5AB");
    },
    Error,
    "EncodingError U+D5AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5AC");
    },
    Error,
    "EncodingError U+D5AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5AD");
    },
    Error,
    "EncodingError U+D5AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5AE");
    },
    Error,
    "EncodingError U+D5AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5AF");
    },
    Error,
    "EncodingError U+D5AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B0");
    },
    Error,
    "EncodingError U+D5B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B1");
    },
    Error,
    "EncodingError U+D5B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B2");
    },
    Error,
    "EncodingError U+D5B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B3");
    },
    Error,
    "EncodingError U+D5B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B4");
    },
    Error,
    "EncodingError U+D5B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B5");
    },
    Error,
    "EncodingError U+D5B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B6");
    },
    Error,
    "EncodingError U+D5B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B7");
    },
    Error,
    "EncodingError U+D5B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B8");
    },
    Error,
    "EncodingError U+D5B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B9");
    },
    Error,
    "EncodingError U+D5B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5BA");
    },
    Error,
    "EncodingError U+D5BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5BB");
    },
    Error,
    "EncodingError U+D5BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5BC");
    },
    Error,
    "EncodingError U+D5BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5BD");
    },
    Error,
    "EncodingError U+D5BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5BE");
    },
    Error,
    "EncodingError U+D5BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5BF");
    },
    Error,
    "EncodingError U+D5BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C0");
    },
    Error,
    "EncodingError U+D5C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C1");
    },
    Error,
    "EncodingError U+D5C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C2");
    },
    Error,
    "EncodingError U+D5C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C3");
    },
    Error,
    "EncodingError U+D5C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C4");
    },
    Error,
    "EncodingError U+D5C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C5");
    },
    Error,
    "EncodingError U+D5C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C6");
    },
    Error,
    "EncodingError U+D5C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C7");
    },
    Error,
    "EncodingError U+D5C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C8");
    },
    Error,
    "EncodingError U+D5C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C9");
    },
    Error,
    "EncodingError U+D5C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5CA");
    },
    Error,
    "EncodingError U+D5CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5CB");
    },
    Error,
    "EncodingError U+D5CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5CC");
    },
    Error,
    "EncodingError U+D5CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5CD");
    },
    Error,
    "EncodingError U+D5CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5CE");
    },
    Error,
    "EncodingError U+D5CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5CF");
    },
    Error,
    "EncodingError U+D5CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D0");
    },
    Error,
    "EncodingError U+D5D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D1");
    },
    Error,
    "EncodingError U+D5D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D2");
    },
    Error,
    "EncodingError U+D5D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D3");
    },
    Error,
    "EncodingError U+D5D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D4");
    },
    Error,
    "EncodingError U+D5D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D5");
    },
    Error,
    "EncodingError U+D5D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D6");
    },
    Error,
    "EncodingError U+D5D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D7");
    },
    Error,
    "EncodingError U+D5D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D8");
    },
    Error,
    "EncodingError U+D5D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D9");
    },
    Error,
    "EncodingError U+D5D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5DA");
    },
    Error,
    "EncodingError U+D5DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5DB");
    },
    Error,
    "EncodingError U+D5DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5DC");
    },
    Error,
    "EncodingError U+D5DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5DD");
    },
    Error,
    "EncodingError U+D5DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5DE");
    },
    Error,
    "EncodingError U+D5DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5DF");
    },
    Error,
    "EncodingError U+D5DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E0");
    },
    Error,
    "EncodingError U+D5E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E1");
    },
    Error,
    "EncodingError U+D5E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E2");
    },
    Error,
    "EncodingError U+D5E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E3");
    },
    Error,
    "EncodingError U+D5E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E4");
    },
    Error,
    "EncodingError U+D5E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E5");
    },
    Error,
    "EncodingError U+D5E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E6");
    },
    Error,
    "EncodingError U+D5E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E7");
    },
    Error,
    "EncodingError U+D5E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E8");
    },
    Error,
    "EncodingError U+D5E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E9");
    },
    Error,
    "EncodingError U+D5E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5EA");
    },
    Error,
    "EncodingError U+D5EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5EB");
    },
    Error,
    "EncodingError U+D5EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5EC");
    },
    Error,
    "EncodingError U+D5EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5ED");
    },
    Error,
    "EncodingError U+D5ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5EE");
    },
    Error,
    "EncodingError U+D5EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5EF");
    },
    Error,
    "EncodingError U+D5EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F0");
    },
    Error,
    "EncodingError U+D5F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F1");
    },
    Error,
    "EncodingError U+D5F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F2");
    },
    Error,
    "EncodingError U+D5F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F3");
    },
    Error,
    "EncodingError U+D5F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F4");
    },
    Error,
    "EncodingError U+D5F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F5");
    },
    Error,
    "EncodingError U+D5F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F6");
    },
    Error,
    "EncodingError U+D5F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F7");
    },
    Error,
    "EncodingError U+D5F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F8");
    },
    Error,
    "EncodingError U+D5F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F9");
    },
    Error,
    "EncodingError U+D5F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5FA");
    },
    Error,
    "EncodingError U+D5FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5FB");
    },
    Error,
    "EncodingError U+D5FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5FC");
    },
    Error,
    "EncodingError U+D5FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5FD");
    },
    Error,
    "EncodingError U+D5FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5FE");
    },
    Error,
    "EncodingError U+D5FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5FF");
    },
    Error,
    "EncodingError U+D5FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD600");
    },
    Error,
    "EncodingError U+D600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD601");
    },
    Error,
    "EncodingError U+D601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD602");
    },
    Error,
    "EncodingError U+D602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD603");
    },
    Error,
    "EncodingError U+D603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD604");
    },
    Error,
    "EncodingError U+D604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD605");
    },
    Error,
    "EncodingError U+D605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD606");
    },
    Error,
    "EncodingError U+D606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD607");
    },
    Error,
    "EncodingError U+D607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD608");
    },
    Error,
    "EncodingError U+D608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD609");
    },
    Error,
    "EncodingError U+D609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD60A");
    },
    Error,
    "EncodingError U+D60A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD60B");
    },
    Error,
    "EncodingError U+D60B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD60C");
    },
    Error,
    "EncodingError U+D60C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD60D");
    },
    Error,
    "EncodingError U+D60D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD60E");
    },
    Error,
    "EncodingError U+D60E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD60F");
    },
    Error,
    "EncodingError U+D60F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD610");
    },
    Error,
    "EncodingError U+D610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD611");
    },
    Error,
    "EncodingError U+D611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD612");
    },
    Error,
    "EncodingError U+D612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD613");
    },
    Error,
    "EncodingError U+D613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD614");
    },
    Error,
    "EncodingError U+D614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD615");
    },
    Error,
    "EncodingError U+D615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD616");
    },
    Error,
    "EncodingError U+D616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD617");
    },
    Error,
    "EncodingError U+D617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD618");
    },
    Error,
    "EncodingError U+D618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD619");
    },
    Error,
    "EncodingError U+D619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD61A");
    },
    Error,
    "EncodingError U+D61A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD61B");
    },
    Error,
    "EncodingError U+D61B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD61C");
    },
    Error,
    "EncodingError U+D61C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD61D");
    },
    Error,
    "EncodingError U+D61D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD61E");
    },
    Error,
    "EncodingError U+D61E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD61F");
    },
    Error,
    "EncodingError U+D61F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD620");
    },
    Error,
    "EncodingError U+D620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD621");
    },
    Error,
    "EncodingError U+D621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD622");
    },
    Error,
    "EncodingError U+D622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD623");
    },
    Error,
    "EncodingError U+D623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD624");
    },
    Error,
    "EncodingError U+D624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD625");
    },
    Error,
    "EncodingError U+D625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD626");
    },
    Error,
    "EncodingError U+D626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD627");
    },
    Error,
    "EncodingError U+D627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD628");
    },
    Error,
    "EncodingError U+D628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD629");
    },
    Error,
    "EncodingError U+D629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD62A");
    },
    Error,
    "EncodingError U+D62A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD62B");
    },
    Error,
    "EncodingError U+D62B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD62C");
    },
    Error,
    "EncodingError U+D62C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD62D");
    },
    Error,
    "EncodingError U+D62D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD62E");
    },
    Error,
    "EncodingError U+D62E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD62F");
    },
    Error,
    "EncodingError U+D62F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD630");
    },
    Error,
    "EncodingError U+D630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD631");
    },
    Error,
    "EncodingError U+D631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD632");
    },
    Error,
    "EncodingError U+D632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD633");
    },
    Error,
    "EncodingError U+D633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD634");
    },
    Error,
    "EncodingError U+D634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD635");
    },
    Error,
    "EncodingError U+D635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD636");
    },
    Error,
    "EncodingError U+D636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD637");
    },
    Error,
    "EncodingError U+D637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD638");
    },
    Error,
    "EncodingError U+D638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD639");
    },
    Error,
    "EncodingError U+D639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD63A");
    },
    Error,
    "EncodingError U+D63A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD63B");
    },
    Error,
    "EncodingError U+D63B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD63C");
    },
    Error,
    "EncodingError U+D63C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD63D");
    },
    Error,
    "EncodingError U+D63D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD63E");
    },
    Error,
    "EncodingError U+D63E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD63F");
    },
    Error,
    "EncodingError U+D63F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD640");
    },
    Error,
    "EncodingError U+D640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD641");
    },
    Error,
    "EncodingError U+D641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD642");
    },
    Error,
    "EncodingError U+D642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD643");
    },
    Error,
    "EncodingError U+D643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD644");
    },
    Error,
    "EncodingError U+D644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD645");
    },
    Error,
    "EncodingError U+D645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD646");
    },
    Error,
    "EncodingError U+D646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD647");
    },
    Error,
    "EncodingError U+D647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD648");
    },
    Error,
    "EncodingError U+D648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD649");
    },
    Error,
    "EncodingError U+D649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD64A");
    },
    Error,
    "EncodingError U+D64A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD64B");
    },
    Error,
    "EncodingError U+D64B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD64C");
    },
    Error,
    "EncodingError U+D64C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD64D");
    },
    Error,
    "EncodingError U+D64D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD64E");
    },
    Error,
    "EncodingError U+D64E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD64F");
    },
    Error,
    "EncodingError U+D64F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD650");
    },
    Error,
    "EncodingError U+D650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD651");
    },
    Error,
    "EncodingError U+D651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD652");
    },
    Error,
    "EncodingError U+D652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD653");
    },
    Error,
    "EncodingError U+D653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD654");
    },
    Error,
    "EncodingError U+D654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD655");
    },
    Error,
    "EncodingError U+D655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD656");
    },
    Error,
    "EncodingError U+D656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD657");
    },
    Error,
    "EncodingError U+D657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD658");
    },
    Error,
    "EncodingError U+D658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD659");
    },
    Error,
    "EncodingError U+D659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD65A");
    },
    Error,
    "EncodingError U+D65A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD65B");
    },
    Error,
    "EncodingError U+D65B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD65C");
    },
    Error,
    "EncodingError U+D65C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD65D");
    },
    Error,
    "EncodingError U+D65D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD65E");
    },
    Error,
    "EncodingError U+D65E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD65F");
    },
    Error,
    "EncodingError U+D65F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD660");
    },
    Error,
    "EncodingError U+D660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD661");
    },
    Error,
    "EncodingError U+D661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD662");
    },
    Error,
    "EncodingError U+D662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD663");
    },
    Error,
    "EncodingError U+D663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD664");
    },
    Error,
    "EncodingError U+D664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD665");
    },
    Error,
    "EncodingError U+D665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD666");
    },
    Error,
    "EncodingError U+D666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD667");
    },
    Error,
    "EncodingError U+D667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD668");
    },
    Error,
    "EncodingError U+D668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD669");
    },
    Error,
    "EncodingError U+D669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD66A");
    },
    Error,
    "EncodingError U+D66A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD66B");
    },
    Error,
    "EncodingError U+D66B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD66C");
    },
    Error,
    "EncodingError U+D66C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD66D");
    },
    Error,
    "EncodingError U+D66D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD66E");
    },
    Error,
    "EncodingError U+D66E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD66F");
    },
    Error,
    "EncodingError U+D66F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD670");
    },
    Error,
    "EncodingError U+D670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD671");
    },
    Error,
    "EncodingError U+D671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD672");
    },
    Error,
    "EncodingError U+D672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD673");
    },
    Error,
    "EncodingError U+D673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD674");
    },
    Error,
    "EncodingError U+D674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD675");
    },
    Error,
    "EncodingError U+D675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD676");
    },
    Error,
    "EncodingError U+D676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD677");
    },
    Error,
    "EncodingError U+D677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD678");
    },
    Error,
    "EncodingError U+D678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD679");
    },
    Error,
    "EncodingError U+D679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD67A");
    },
    Error,
    "EncodingError U+D67A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD67B");
    },
    Error,
    "EncodingError U+D67B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD67C");
    },
    Error,
    "EncodingError U+D67C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD67D");
    },
    Error,
    "EncodingError U+D67D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD67E");
    },
    Error,
    "EncodingError U+D67E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD67F");
    },
    Error,
    "EncodingError U+D67F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD680");
    },
    Error,
    "EncodingError U+D680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD681");
    },
    Error,
    "EncodingError U+D681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD682");
    },
    Error,
    "EncodingError U+D682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD683");
    },
    Error,
    "EncodingError U+D683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD684");
    },
    Error,
    "EncodingError U+D684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD685");
    },
    Error,
    "EncodingError U+D685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD686");
    },
    Error,
    "EncodingError U+D686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD687");
    },
    Error,
    "EncodingError U+D687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD688");
    },
    Error,
    "EncodingError U+D688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD689");
    },
    Error,
    "EncodingError U+D689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD68A");
    },
    Error,
    "EncodingError U+D68A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD68B");
    },
    Error,
    "EncodingError U+D68B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD68C");
    },
    Error,
    "EncodingError U+D68C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD68D");
    },
    Error,
    "EncodingError U+D68D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD68E");
    },
    Error,
    "EncodingError U+D68E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD68F");
    },
    Error,
    "EncodingError U+D68F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD690");
    },
    Error,
    "EncodingError U+D690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD691");
    },
    Error,
    "EncodingError U+D691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD692");
    },
    Error,
    "EncodingError U+D692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD693");
    },
    Error,
    "EncodingError U+D693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD694");
    },
    Error,
    "EncodingError U+D694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD695");
    },
    Error,
    "EncodingError U+D695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD696");
    },
    Error,
    "EncodingError U+D696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD697");
    },
    Error,
    "EncodingError U+D697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD698");
    },
    Error,
    "EncodingError U+D698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD699");
    },
    Error,
    "EncodingError U+D699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD69A");
    },
    Error,
    "EncodingError U+D69A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD69B");
    },
    Error,
    "EncodingError U+D69B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD69C");
    },
    Error,
    "EncodingError U+D69C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD69D");
    },
    Error,
    "EncodingError U+D69D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD69E");
    },
    Error,
    "EncodingError U+D69E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD69F");
    },
    Error,
    "EncodingError U+D69F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A0");
    },
    Error,
    "EncodingError U+D6A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A1");
    },
    Error,
    "EncodingError U+D6A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A2");
    },
    Error,
    "EncodingError U+D6A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A3");
    },
    Error,
    "EncodingError U+D6A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A4");
    },
    Error,
    "EncodingError U+D6A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A5");
    },
    Error,
    "EncodingError U+D6A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A6");
    },
    Error,
    "EncodingError U+D6A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A7");
    },
    Error,
    "EncodingError U+D6A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A8");
    },
    Error,
    "EncodingError U+D6A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A9");
    },
    Error,
    "EncodingError U+D6A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6AA");
    },
    Error,
    "EncodingError U+D6AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6AB");
    },
    Error,
    "EncodingError U+D6AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6AC");
    },
    Error,
    "EncodingError U+D6AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6AD");
    },
    Error,
    "EncodingError U+D6AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6AE");
    },
    Error,
    "EncodingError U+D6AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6AF");
    },
    Error,
    "EncodingError U+D6AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B0");
    },
    Error,
    "EncodingError U+D6B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B1");
    },
    Error,
    "EncodingError U+D6B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B2");
    },
    Error,
    "EncodingError U+D6B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B3");
    },
    Error,
    "EncodingError U+D6B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B4");
    },
    Error,
    "EncodingError U+D6B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B5");
    },
    Error,
    "EncodingError U+D6B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B6");
    },
    Error,
    "EncodingError U+D6B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B7");
    },
    Error,
    "EncodingError U+D6B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B8");
    },
    Error,
    "EncodingError U+D6B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B9");
    },
    Error,
    "EncodingError U+D6B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6BA");
    },
    Error,
    "EncodingError U+D6BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6BB");
    },
    Error,
    "EncodingError U+D6BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6BC");
    },
    Error,
    "EncodingError U+D6BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6BD");
    },
    Error,
    "EncodingError U+D6BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6BE");
    },
    Error,
    "EncodingError U+D6BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6BF");
    },
    Error,
    "EncodingError U+D6BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C0");
    },
    Error,
    "EncodingError U+D6C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C1");
    },
    Error,
    "EncodingError U+D6C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C2");
    },
    Error,
    "EncodingError U+D6C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C3");
    },
    Error,
    "EncodingError U+D6C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C4");
    },
    Error,
    "EncodingError U+D6C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C5");
    },
    Error,
    "EncodingError U+D6C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C6");
    },
    Error,
    "EncodingError U+D6C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C7");
    },
    Error,
    "EncodingError U+D6C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C8");
    },
    Error,
    "EncodingError U+D6C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C9");
    },
    Error,
    "EncodingError U+D6C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6CA");
    },
    Error,
    "EncodingError U+D6CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6CB");
    },
    Error,
    "EncodingError U+D6CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6CC");
    },
    Error,
    "EncodingError U+D6CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6CD");
    },
    Error,
    "EncodingError U+D6CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6CE");
    },
    Error,
    "EncodingError U+D6CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6CF");
    },
    Error,
    "EncodingError U+D6CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D0");
    },
    Error,
    "EncodingError U+D6D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D1");
    },
    Error,
    "EncodingError U+D6D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D2");
    },
    Error,
    "EncodingError U+D6D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D3");
    },
    Error,
    "EncodingError U+D6D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D4");
    },
    Error,
    "EncodingError U+D6D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D5");
    },
    Error,
    "EncodingError U+D6D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D6");
    },
    Error,
    "EncodingError U+D6D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D7");
    },
    Error,
    "EncodingError U+D6D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D8");
    },
    Error,
    "EncodingError U+D6D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D9");
    },
    Error,
    "EncodingError U+D6D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6DA");
    },
    Error,
    "EncodingError U+D6DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6DB");
    },
    Error,
    "EncodingError U+D6DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6DC");
    },
    Error,
    "EncodingError U+D6DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6DD");
    },
    Error,
    "EncodingError U+D6DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6DE");
    },
    Error,
    "EncodingError U+D6DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6DF");
    },
    Error,
    "EncodingError U+D6DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E0");
    },
    Error,
    "EncodingError U+D6E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E1");
    },
    Error,
    "EncodingError U+D6E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E2");
    },
    Error,
    "EncodingError U+D6E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E3");
    },
    Error,
    "EncodingError U+D6E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E4");
    },
    Error,
    "EncodingError U+D6E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E5");
    },
    Error,
    "EncodingError U+D6E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E6");
    },
    Error,
    "EncodingError U+D6E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E7");
    },
    Error,
    "EncodingError U+D6E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E8");
    },
    Error,
    "EncodingError U+D6E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E9");
    },
    Error,
    "EncodingError U+D6E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6EA");
    },
    Error,
    "EncodingError U+D6EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6EB");
    },
    Error,
    "EncodingError U+D6EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6EC");
    },
    Error,
    "EncodingError U+D6EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6ED");
    },
    Error,
    "EncodingError U+D6ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6EE");
    },
    Error,
    "EncodingError U+D6EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6EF");
    },
    Error,
    "EncodingError U+D6EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F0");
    },
    Error,
    "EncodingError U+D6F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F1");
    },
    Error,
    "EncodingError U+D6F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F2");
    },
    Error,
    "EncodingError U+D6F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F3");
    },
    Error,
    "EncodingError U+D6F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F4");
    },
    Error,
    "EncodingError U+D6F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F5");
    },
    Error,
    "EncodingError U+D6F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F6");
    },
    Error,
    "EncodingError U+D6F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F7");
    },
    Error,
    "EncodingError U+D6F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F8");
    },
    Error,
    "EncodingError U+D6F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F9");
    },
    Error,
    "EncodingError U+D6F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6FA");
    },
    Error,
    "EncodingError U+D6FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6FB");
    },
    Error,
    "EncodingError U+D6FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6FC");
    },
    Error,
    "EncodingError U+D6FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6FD");
    },
    Error,
    "EncodingError U+D6FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6FE");
    },
    Error,
    "EncodingError U+D6FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6FF");
    },
    Error,
    "EncodingError U+D6FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD700");
    },
    Error,
    "EncodingError U+D700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD701");
    },
    Error,
    "EncodingError U+D701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD702");
    },
    Error,
    "EncodingError U+D702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD703");
    },
    Error,
    "EncodingError U+D703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD704");
    },
    Error,
    "EncodingError U+D704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD705");
    },
    Error,
    "EncodingError U+D705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD706");
    },
    Error,
    "EncodingError U+D706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD707");
    },
    Error,
    "EncodingError U+D707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD708");
    },
    Error,
    "EncodingError U+D708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD709");
    },
    Error,
    "EncodingError U+D709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD70A");
    },
    Error,
    "EncodingError U+D70A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD70B");
    },
    Error,
    "EncodingError U+D70B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD70C");
    },
    Error,
    "EncodingError U+D70C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD70D");
    },
    Error,
    "EncodingError U+D70D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD70E");
    },
    Error,
    "EncodingError U+D70E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD70F");
    },
    Error,
    "EncodingError U+D70F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD710");
    },
    Error,
    "EncodingError U+D710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD711");
    },
    Error,
    "EncodingError U+D711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD712");
    },
    Error,
    "EncodingError U+D712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD713");
    },
    Error,
    "EncodingError U+D713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD714");
    },
    Error,
    "EncodingError U+D714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD715");
    },
    Error,
    "EncodingError U+D715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD716");
    },
    Error,
    "EncodingError U+D716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD717");
    },
    Error,
    "EncodingError U+D717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD718");
    },
    Error,
    "EncodingError U+D718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD719");
    },
    Error,
    "EncodingError U+D719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD71A");
    },
    Error,
    "EncodingError U+D71A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD71B");
    },
    Error,
    "EncodingError U+D71B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD71C");
    },
    Error,
    "EncodingError U+D71C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD71D");
    },
    Error,
    "EncodingError U+D71D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD71E");
    },
    Error,
    "EncodingError U+D71E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD71F");
    },
    Error,
    "EncodingError U+D71F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD720");
    },
    Error,
    "EncodingError U+D720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD721");
    },
    Error,
    "EncodingError U+D721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD722");
    },
    Error,
    "EncodingError U+D722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD723");
    },
    Error,
    "EncodingError U+D723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD724");
    },
    Error,
    "EncodingError U+D724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD725");
    },
    Error,
    "EncodingError U+D725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD726");
    },
    Error,
    "EncodingError U+D726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD727");
    },
    Error,
    "EncodingError U+D727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD728");
    },
    Error,
    "EncodingError U+D728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD729");
    },
    Error,
    "EncodingError U+D729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD72A");
    },
    Error,
    "EncodingError U+D72A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD72B");
    },
    Error,
    "EncodingError U+D72B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD72C");
    },
    Error,
    "EncodingError U+D72C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD72D");
    },
    Error,
    "EncodingError U+D72D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD72E");
    },
    Error,
    "EncodingError U+D72E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD72F");
    },
    Error,
    "EncodingError U+D72F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD730");
    },
    Error,
    "EncodingError U+D730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD731");
    },
    Error,
    "EncodingError U+D731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD732");
    },
    Error,
    "EncodingError U+D732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD733");
    },
    Error,
    "EncodingError U+D733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD734");
    },
    Error,
    "EncodingError U+D734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD735");
    },
    Error,
    "EncodingError U+D735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD736");
    },
    Error,
    "EncodingError U+D736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD737");
    },
    Error,
    "EncodingError U+D737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD738");
    },
    Error,
    "EncodingError U+D738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD739");
    },
    Error,
    "EncodingError U+D739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD73A");
    },
    Error,
    "EncodingError U+D73A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD73B");
    },
    Error,
    "EncodingError U+D73B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD73C");
    },
    Error,
    "EncodingError U+D73C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD73D");
    },
    Error,
    "EncodingError U+D73D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD73E");
    },
    Error,
    "EncodingError U+D73E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD73F");
    },
    Error,
    "EncodingError U+D73F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD740");
    },
    Error,
    "EncodingError U+D740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD741");
    },
    Error,
    "EncodingError U+D741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD742");
    },
    Error,
    "EncodingError U+D742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD743");
    },
    Error,
    "EncodingError U+D743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD744");
    },
    Error,
    "EncodingError U+D744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD745");
    },
    Error,
    "EncodingError U+D745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD746");
    },
    Error,
    "EncodingError U+D746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD747");
    },
    Error,
    "EncodingError U+D747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD748");
    },
    Error,
    "EncodingError U+D748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD749");
    },
    Error,
    "EncodingError U+D749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD74A");
    },
    Error,
    "EncodingError U+D74A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD74B");
    },
    Error,
    "EncodingError U+D74B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD74C");
    },
    Error,
    "EncodingError U+D74C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD74D");
    },
    Error,
    "EncodingError U+D74D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD74E");
    },
    Error,
    "EncodingError U+D74E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD74F");
    },
    Error,
    "EncodingError U+D74F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD750");
    },
    Error,
    "EncodingError U+D750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD751");
    },
    Error,
    "EncodingError U+D751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD752");
    },
    Error,
    "EncodingError U+D752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD753");
    },
    Error,
    "EncodingError U+D753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD754");
    },
    Error,
    "EncodingError U+D754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD755");
    },
    Error,
    "EncodingError U+D755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD756");
    },
    Error,
    "EncodingError U+D756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD757");
    },
    Error,
    "EncodingError U+D757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD758");
    },
    Error,
    "EncodingError U+D758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD759");
    },
    Error,
    "EncodingError U+D759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD75A");
    },
    Error,
    "EncodingError U+D75A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD75B");
    },
    Error,
    "EncodingError U+D75B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD75C");
    },
    Error,
    "EncodingError U+D75C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD75D");
    },
    Error,
    "EncodingError U+D75D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD75E");
    },
    Error,
    "EncodingError U+D75E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD75F");
    },
    Error,
    "EncodingError U+D75F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD760");
    },
    Error,
    "EncodingError U+D760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD761");
    },
    Error,
    "EncodingError U+D761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD762");
    },
    Error,
    "EncodingError U+D762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD763");
    },
    Error,
    "EncodingError U+D763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD764");
    },
    Error,
    "EncodingError U+D764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD765");
    },
    Error,
    "EncodingError U+D765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD766");
    },
    Error,
    "EncodingError U+D766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD767");
    },
    Error,
    "EncodingError U+D767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD768");
    },
    Error,
    "EncodingError U+D768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD769");
    },
    Error,
    "EncodingError U+D769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD76A");
    },
    Error,
    "EncodingError U+D76A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD76B");
    },
    Error,
    "EncodingError U+D76B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD76C");
    },
    Error,
    "EncodingError U+D76C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD76D");
    },
    Error,
    "EncodingError U+D76D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD76E");
    },
    Error,
    "EncodingError U+D76E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD76F");
    },
    Error,
    "EncodingError U+D76F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD770");
    },
    Error,
    "EncodingError U+D770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD771");
    },
    Error,
    "EncodingError U+D771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD772");
    },
    Error,
    "EncodingError U+D772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD773");
    },
    Error,
    "EncodingError U+D773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD774");
    },
    Error,
    "EncodingError U+D774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD775");
    },
    Error,
    "EncodingError U+D775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD776");
    },
    Error,
    "EncodingError U+D776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD777");
    },
    Error,
    "EncodingError U+D777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD778");
    },
    Error,
    "EncodingError U+D778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD779");
    },
    Error,
    "EncodingError U+D779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD77A");
    },
    Error,
    "EncodingError U+D77A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD77B");
    },
    Error,
    "EncodingError U+D77B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD77C");
    },
    Error,
    "EncodingError U+D77C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD77D");
    },
    Error,
    "EncodingError U+D77D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD77E");
    },
    Error,
    "EncodingError U+D77E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD77F");
    },
    Error,
    "EncodingError U+D77F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD780");
    },
    Error,
    "EncodingError U+D780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD781");
    },
    Error,
    "EncodingError U+D781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD782");
    },
    Error,
    "EncodingError U+D782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD783");
    },
    Error,
    "EncodingError U+D783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD784");
    },
    Error,
    "EncodingError U+D784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD785");
    },
    Error,
    "EncodingError U+D785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD786");
    },
    Error,
    "EncodingError U+D786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD787");
    },
    Error,
    "EncodingError U+D787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD788");
    },
    Error,
    "EncodingError U+D788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD789");
    },
    Error,
    "EncodingError U+D789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD78A");
    },
    Error,
    "EncodingError U+D78A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD78B");
    },
    Error,
    "EncodingError U+D78B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD78C");
    },
    Error,
    "EncodingError U+D78C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD78D");
    },
    Error,
    "EncodingError U+D78D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD78E");
    },
    Error,
    "EncodingError U+D78E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD78F");
    },
    Error,
    "EncodingError U+D78F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD790");
    },
    Error,
    "EncodingError U+D790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD791");
    },
    Error,
    "EncodingError U+D791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD792");
    },
    Error,
    "EncodingError U+D792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD793");
    },
    Error,
    "EncodingError U+D793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD794");
    },
    Error,
    "EncodingError U+D794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD795");
    },
    Error,
    "EncodingError U+D795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD796");
    },
    Error,
    "EncodingError U+D796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD797");
    },
    Error,
    "EncodingError U+D797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD798");
    },
    Error,
    "EncodingError U+D798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD799");
    },
    Error,
    "EncodingError U+D799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD79A");
    },
    Error,
    "EncodingError U+D79A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD79B");
    },
    Error,
    "EncodingError U+D79B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD79C");
    },
    Error,
    "EncodingError U+D79C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD79D");
    },
    Error,
    "EncodingError U+D79D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD79E");
    },
    Error,
    "EncodingError U+D79E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD79F");
    },
    Error,
    "EncodingError U+D79F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A0");
    },
    Error,
    "EncodingError U+D7A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A1");
    },
    Error,
    "EncodingError U+D7A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A2");
    },
    Error,
    "EncodingError U+D7A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A3");
    },
    Error,
    "EncodingError U+D7A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A4");
    },
    Error,
    "EncodingError U+D7A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A5");
    },
    Error,
    "EncodingError U+D7A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A6");
    },
    Error,
    "EncodingError U+D7A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A7");
    },
    Error,
    "EncodingError U+D7A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A8");
    },
    Error,
    "EncodingError U+D7A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A9");
    },
    Error,
    "EncodingError U+D7A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7AA");
    },
    Error,
    "EncodingError U+D7AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7AB");
    },
    Error,
    "EncodingError U+D7AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7AC");
    },
    Error,
    "EncodingError U+D7AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7AD");
    },
    Error,
    "EncodingError U+D7AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7AE");
    },
    Error,
    "EncodingError U+D7AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7AF");
    },
    Error,
    "EncodingError U+D7AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B0");
    },
    Error,
    "EncodingError U+D7B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B1");
    },
    Error,
    "EncodingError U+D7B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B2");
    },
    Error,
    "EncodingError U+D7B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B3");
    },
    Error,
    "EncodingError U+D7B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B4");
    },
    Error,
    "EncodingError U+D7B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B5");
    },
    Error,
    "EncodingError U+D7B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B6");
    },
    Error,
    "EncodingError U+D7B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B7");
    },
    Error,
    "EncodingError U+D7B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B8");
    },
    Error,
    "EncodingError U+D7B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B9");
    },
    Error,
    "EncodingError U+D7B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7BA");
    },
    Error,
    "EncodingError U+D7BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7BB");
    },
    Error,
    "EncodingError U+D7BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7BC");
    },
    Error,
    "EncodingError U+D7BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7BD");
    },
    Error,
    "EncodingError U+D7BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7BE");
    },
    Error,
    "EncodingError U+D7BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7BF");
    },
    Error,
    "EncodingError U+D7BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C0");
    },
    Error,
    "EncodingError U+D7C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C1");
    },
    Error,
    "EncodingError U+D7C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C2");
    },
    Error,
    "EncodingError U+D7C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C3");
    },
    Error,
    "EncodingError U+D7C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C4");
    },
    Error,
    "EncodingError U+D7C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C5");
    },
    Error,
    "EncodingError U+D7C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C6");
    },
    Error,
    "EncodingError U+D7C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C7");
    },
    Error,
    "EncodingError U+D7C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C8");
    },
    Error,
    "EncodingError U+D7C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C9");
    },
    Error,
    "EncodingError U+D7C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7CA");
    },
    Error,
    "EncodingError U+D7CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7CB");
    },
    Error,
    "EncodingError U+D7CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7CC");
    },
    Error,
    "EncodingError U+D7CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7CD");
    },
    Error,
    "EncodingError U+D7CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7CE");
    },
    Error,
    "EncodingError U+D7CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7CF");
    },
    Error,
    "EncodingError U+D7CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D0");
    },
    Error,
    "EncodingError U+D7D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D1");
    },
    Error,
    "EncodingError U+D7D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D2");
    },
    Error,
    "EncodingError U+D7D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D3");
    },
    Error,
    "EncodingError U+D7D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D4");
    },
    Error,
    "EncodingError U+D7D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D5");
    },
    Error,
    "EncodingError U+D7D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D6");
    },
    Error,
    "EncodingError U+D7D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D7");
    },
    Error,
    "EncodingError U+D7D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D8");
    },
    Error,
    "EncodingError U+D7D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D9");
    },
    Error,
    "EncodingError U+D7D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7DA");
    },
    Error,
    "EncodingError U+D7DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7DB");
    },
    Error,
    "EncodingError U+D7DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7DC");
    },
    Error,
    "EncodingError U+D7DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7DD");
    },
    Error,
    "EncodingError U+D7DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7DE");
    },
    Error,
    "EncodingError U+D7DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7DF");
    },
    Error,
    "EncodingError U+D7DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E0");
    },
    Error,
    "EncodingError U+D7E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E1");
    },
    Error,
    "EncodingError U+D7E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E2");
    },
    Error,
    "EncodingError U+D7E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E3");
    },
    Error,
    "EncodingError U+D7E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E4");
    },
    Error,
    "EncodingError U+D7E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E5");
    },
    Error,
    "EncodingError U+D7E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E6");
    },
    Error,
    "EncodingError U+D7E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E7");
    },
    Error,
    "EncodingError U+D7E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E8");
    },
    Error,
    "EncodingError U+D7E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E9");
    },
    Error,
    "EncodingError U+D7E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7EA");
    },
    Error,
    "EncodingError U+D7EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7EB");
    },
    Error,
    "EncodingError U+D7EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7EC");
    },
    Error,
    "EncodingError U+D7EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7ED");
    },
    Error,
    "EncodingError U+D7ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7EE");
    },
    Error,
    "EncodingError U+D7EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7EF");
    },
    Error,
    "EncodingError U+D7EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F0");
    },
    Error,
    "EncodingError U+D7F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F1");
    },
    Error,
    "EncodingError U+D7F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F2");
    },
    Error,
    "EncodingError U+D7F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F3");
    },
    Error,
    "EncodingError U+D7F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F4");
    },
    Error,
    "EncodingError U+D7F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F5");
    },
    Error,
    "EncodingError U+D7F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F6");
    },
    Error,
    "EncodingError U+D7F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F7");
    },
    Error,
    "EncodingError U+D7F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F8");
    },
    Error,
    "EncodingError U+D7F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F9");
    },
    Error,
    "EncodingError U+D7F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7FA");
    },
    Error,
    "EncodingError U+D7FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7FB");
    },
    Error,
    "EncodingError U+D7FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7FC");
    },
    Error,
    "EncodingError U+D7FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7FD");
    },
    Error,
    "EncodingError U+D7FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7FE");
    },
    Error,
    "EncodingError U+D7FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7FF");
    },
    Error,
    "EncodingError U+D7FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD800");
    },
    Error,
    "EncodingError U+D800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD801");
    },
    Error,
    "EncodingError U+D801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD802");
    },
    Error,
    "EncodingError U+D802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD803");
    },
    Error,
    "EncodingError U+D803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD804");
    },
    Error,
    "EncodingError U+D804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD805");
    },
    Error,
    "EncodingError U+D805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD806");
    },
    Error,
    "EncodingError U+D806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD807");
    },
    Error,
    "EncodingError U+D807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD808");
    },
    Error,
    "EncodingError U+D808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD809");
    },
    Error,
    "EncodingError U+D809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD80A");
    },
    Error,
    "EncodingError U+D80A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD80B");
    },
    Error,
    "EncodingError U+D80B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD80C");
    },
    Error,
    "EncodingError U+D80C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD80D");
    },
    Error,
    "EncodingError U+D80D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD80E");
    },
    Error,
    "EncodingError U+D80E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD80F");
    },
    Error,
    "EncodingError U+D80F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD810");
    },
    Error,
    "EncodingError U+D810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD811");
    },
    Error,
    "EncodingError U+D811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD812");
    },
    Error,
    "EncodingError U+D812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD813");
    },
    Error,
    "EncodingError U+D813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD814");
    },
    Error,
    "EncodingError U+D814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD815");
    },
    Error,
    "EncodingError U+D815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD816");
    },
    Error,
    "EncodingError U+D816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD817");
    },
    Error,
    "EncodingError U+D817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD818");
    },
    Error,
    "EncodingError U+D818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD819");
    },
    Error,
    "EncodingError U+D819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD81A");
    },
    Error,
    "EncodingError U+D81A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD81B");
    },
    Error,
    "EncodingError U+D81B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD81C");
    },
    Error,
    "EncodingError U+D81C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD81D");
    },
    Error,
    "EncodingError U+D81D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD81E");
    },
    Error,
    "EncodingError U+D81E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD81F");
    },
    Error,
    "EncodingError U+D81F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD820");
    },
    Error,
    "EncodingError U+D820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD821");
    },
    Error,
    "EncodingError U+D821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD822");
    },
    Error,
    "EncodingError U+D822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD823");
    },
    Error,
    "EncodingError U+D823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD824");
    },
    Error,
    "EncodingError U+D824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD825");
    },
    Error,
    "EncodingError U+D825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD826");
    },
    Error,
    "EncodingError U+D826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD827");
    },
    Error,
    "EncodingError U+D827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD828");
    },
    Error,
    "EncodingError U+D828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD829");
    },
    Error,
    "EncodingError U+D829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD82A");
    },
    Error,
    "EncodingError U+D82A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD82B");
    },
    Error,
    "EncodingError U+D82B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD82C");
    },
    Error,
    "EncodingError U+D82C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD82D");
    },
    Error,
    "EncodingError U+D82D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD82E");
    },
    Error,
    "EncodingError U+D82E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD82F");
    },
    Error,
    "EncodingError U+D82F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD830");
    },
    Error,
    "EncodingError U+D830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD831");
    },
    Error,
    "EncodingError U+D831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD832");
    },
    Error,
    "EncodingError U+D832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD833");
    },
    Error,
    "EncodingError U+D833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD834");
    },
    Error,
    "EncodingError U+D834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD835");
    },
    Error,
    "EncodingError U+D835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD836");
    },
    Error,
    "EncodingError U+D836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD837");
    },
    Error,
    "EncodingError U+D837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD838");
    },
    Error,
    "EncodingError U+D838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD839");
    },
    Error,
    "EncodingError U+D839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD83A");
    },
    Error,
    "EncodingError U+D83A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD83B");
    },
    Error,
    "EncodingError U+D83B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD83C");
    },
    Error,
    "EncodingError U+D83C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD83D");
    },
    Error,
    "EncodingError U+D83D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD83E");
    },
    Error,
    "EncodingError U+D83E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD83F");
    },
    Error,
    "EncodingError U+D83F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD840");
    },
    Error,
    "EncodingError U+D840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD841");
    },
    Error,
    "EncodingError U+D841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD842");
    },
    Error,
    "EncodingError U+D842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD843");
    },
    Error,
    "EncodingError U+D843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD844");
    },
    Error,
    "EncodingError U+D844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD845");
    },
    Error,
    "EncodingError U+D845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD846");
    },
    Error,
    "EncodingError U+D846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD847");
    },
    Error,
    "EncodingError U+D847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD848");
    },
    Error,
    "EncodingError U+D848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD849");
    },
    Error,
    "EncodingError U+D849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD84A");
    },
    Error,
    "EncodingError U+D84A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD84B");
    },
    Error,
    "EncodingError U+D84B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD84C");
    },
    Error,
    "EncodingError U+D84C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD84D");
    },
    Error,
    "EncodingError U+D84D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD84E");
    },
    Error,
    "EncodingError U+D84E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD84F");
    },
    Error,
    "EncodingError U+D84F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD850");
    },
    Error,
    "EncodingError U+D850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD851");
    },
    Error,
    "EncodingError U+D851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD852");
    },
    Error,
    "EncodingError U+D852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD853");
    },
    Error,
    "EncodingError U+D853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD854");
    },
    Error,
    "EncodingError U+D854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD855");
    },
    Error,
    "EncodingError U+D855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD856");
    },
    Error,
    "EncodingError U+D856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD857");
    },
    Error,
    "EncodingError U+D857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD858");
    },
    Error,
    "EncodingError U+D858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD859");
    },
    Error,
    "EncodingError U+D859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD85A");
    },
    Error,
    "EncodingError U+D85A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD85B");
    },
    Error,
    "EncodingError U+D85B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD85C");
    },
    Error,
    "EncodingError U+D85C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD85D");
    },
    Error,
    "EncodingError U+D85D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD85E");
    },
    Error,
    "EncodingError U+D85E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD85F");
    },
    Error,
    "EncodingError U+D85F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD860");
    },
    Error,
    "EncodingError U+D860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD861");
    },
    Error,
    "EncodingError U+D861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD862");
    },
    Error,
    "EncodingError U+D862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD863");
    },
    Error,
    "EncodingError U+D863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD864");
    },
    Error,
    "EncodingError U+D864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD865");
    },
    Error,
    "EncodingError U+D865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD866");
    },
    Error,
    "EncodingError U+D866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD867");
    },
    Error,
    "EncodingError U+D867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD868");
    },
    Error,
    "EncodingError U+D868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD869");
    },
    Error,
    "EncodingError U+D869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD86A");
    },
    Error,
    "EncodingError U+D86A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD86B");
    },
    Error,
    "EncodingError U+D86B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD86C");
    },
    Error,
    "EncodingError U+D86C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD86D");
    },
    Error,
    "EncodingError U+D86D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD86E");
    },
    Error,
    "EncodingError U+D86E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD86F");
    },
    Error,
    "EncodingError U+D86F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD870");
    },
    Error,
    "EncodingError U+D870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD871");
    },
    Error,
    "EncodingError U+D871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD872");
    },
    Error,
    "EncodingError U+D872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD873");
    },
    Error,
    "EncodingError U+D873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD874");
    },
    Error,
    "EncodingError U+D874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD875");
    },
    Error,
    "EncodingError U+D875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD876");
    },
    Error,
    "EncodingError U+D876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD877");
    },
    Error,
    "EncodingError U+D877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD878");
    },
    Error,
    "EncodingError U+D878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD879");
    },
    Error,
    "EncodingError U+D879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD87A");
    },
    Error,
    "EncodingError U+D87A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD87B");
    },
    Error,
    "EncodingError U+D87B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD87C");
    },
    Error,
    "EncodingError U+D87C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD87D");
    },
    Error,
    "EncodingError U+D87D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD87E");
    },
    Error,
    "EncodingError U+D87E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD87F");
    },
    Error,
    "EncodingError U+D87F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD880");
    },
    Error,
    "EncodingError U+D880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD881");
    },
    Error,
    "EncodingError U+D881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD882");
    },
    Error,
    "EncodingError U+D882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD883");
    },
    Error,
    "EncodingError U+D883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD884");
    },
    Error,
    "EncodingError U+D884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD885");
    },
    Error,
    "EncodingError U+D885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD886");
    },
    Error,
    "EncodingError U+D886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD887");
    },
    Error,
    "EncodingError U+D887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD888");
    },
    Error,
    "EncodingError U+D888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD889");
    },
    Error,
    "EncodingError U+D889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD88A");
    },
    Error,
    "EncodingError U+D88A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD88B");
    },
    Error,
    "EncodingError U+D88B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD88C");
    },
    Error,
    "EncodingError U+D88C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD88D");
    },
    Error,
    "EncodingError U+D88D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD88E");
    },
    Error,
    "EncodingError U+D88E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD88F");
    },
    Error,
    "EncodingError U+D88F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD890");
    },
    Error,
    "EncodingError U+D890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD891");
    },
    Error,
    "EncodingError U+D891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD892");
    },
    Error,
    "EncodingError U+D892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD893");
    },
    Error,
    "EncodingError U+D893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD894");
    },
    Error,
    "EncodingError U+D894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD895");
    },
    Error,
    "EncodingError U+D895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD896");
    },
    Error,
    "EncodingError U+D896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD897");
    },
    Error,
    "EncodingError U+D897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD898");
    },
    Error,
    "EncodingError U+D898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD899");
    },
    Error,
    "EncodingError U+D899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD89A");
    },
    Error,
    "EncodingError U+D89A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD89B");
    },
    Error,
    "EncodingError U+D89B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD89C");
    },
    Error,
    "EncodingError U+D89C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD89D");
    },
    Error,
    "EncodingError U+D89D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD89E");
    },
    Error,
    "EncodingError U+D89E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD89F");
    },
    Error,
    "EncodingError U+D89F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A0");
    },
    Error,
    "EncodingError U+D8A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A1");
    },
    Error,
    "EncodingError U+D8A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A2");
    },
    Error,
    "EncodingError U+D8A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A3");
    },
    Error,
    "EncodingError U+D8A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A4");
    },
    Error,
    "EncodingError U+D8A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A5");
    },
    Error,
    "EncodingError U+D8A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A6");
    },
    Error,
    "EncodingError U+D8A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A7");
    },
    Error,
    "EncodingError U+D8A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A8");
    },
    Error,
    "EncodingError U+D8A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A9");
    },
    Error,
    "EncodingError U+D8A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8AA");
    },
    Error,
    "EncodingError U+D8AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8AB");
    },
    Error,
    "EncodingError U+D8AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8AC");
    },
    Error,
    "EncodingError U+D8AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8AD");
    },
    Error,
    "EncodingError U+D8AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8AE");
    },
    Error,
    "EncodingError U+D8AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8AF");
    },
    Error,
    "EncodingError U+D8AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B0");
    },
    Error,
    "EncodingError U+D8B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B1");
    },
    Error,
    "EncodingError U+D8B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B2");
    },
    Error,
    "EncodingError U+D8B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B3");
    },
    Error,
    "EncodingError U+D8B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B4");
    },
    Error,
    "EncodingError U+D8B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B5");
    },
    Error,
    "EncodingError U+D8B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B6");
    },
    Error,
    "EncodingError U+D8B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B7");
    },
    Error,
    "EncodingError U+D8B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B8");
    },
    Error,
    "EncodingError U+D8B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B9");
    },
    Error,
    "EncodingError U+D8B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8BA");
    },
    Error,
    "EncodingError U+D8BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8BB");
    },
    Error,
    "EncodingError U+D8BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8BC");
    },
    Error,
    "EncodingError U+D8BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8BD");
    },
    Error,
    "EncodingError U+D8BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8BE");
    },
    Error,
    "EncodingError U+D8BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8BF");
    },
    Error,
    "EncodingError U+D8BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C0");
    },
    Error,
    "EncodingError U+D8C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C1");
    },
    Error,
    "EncodingError U+D8C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C2");
    },
    Error,
    "EncodingError U+D8C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C3");
    },
    Error,
    "EncodingError U+D8C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C4");
    },
    Error,
    "EncodingError U+D8C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C5");
    },
    Error,
    "EncodingError U+D8C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C6");
    },
    Error,
    "EncodingError U+D8C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C7");
    },
    Error,
    "EncodingError U+D8C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C8");
    },
    Error,
    "EncodingError U+D8C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C9");
    },
    Error,
    "EncodingError U+D8C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8CA");
    },
    Error,
    "EncodingError U+D8CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8CB");
    },
    Error,
    "EncodingError U+D8CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8CC");
    },
    Error,
    "EncodingError U+D8CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8CD");
    },
    Error,
    "EncodingError U+D8CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8CE");
    },
    Error,
    "EncodingError U+D8CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8CF");
    },
    Error,
    "EncodingError U+D8CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D0");
    },
    Error,
    "EncodingError U+D8D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D1");
    },
    Error,
    "EncodingError U+D8D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D2");
    },
    Error,
    "EncodingError U+D8D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D3");
    },
    Error,
    "EncodingError U+D8D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D4");
    },
    Error,
    "EncodingError U+D8D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D5");
    },
    Error,
    "EncodingError U+D8D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D6");
    },
    Error,
    "EncodingError U+D8D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D7");
    },
    Error,
    "EncodingError U+D8D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D8");
    },
    Error,
    "EncodingError U+D8D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D9");
    },
    Error,
    "EncodingError U+D8D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8DA");
    },
    Error,
    "EncodingError U+D8DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8DB");
    },
    Error,
    "EncodingError U+D8DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8DC");
    },
    Error,
    "EncodingError U+D8DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8DD");
    },
    Error,
    "EncodingError U+D8DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8DE");
    },
    Error,
    "EncodingError U+D8DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8DF");
    },
    Error,
    "EncodingError U+D8DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E0");
    },
    Error,
    "EncodingError U+D8E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E1");
    },
    Error,
    "EncodingError U+D8E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E2");
    },
    Error,
    "EncodingError U+D8E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E3");
    },
    Error,
    "EncodingError U+D8E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E4");
    },
    Error,
    "EncodingError U+D8E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E5");
    },
    Error,
    "EncodingError U+D8E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E6");
    },
    Error,
    "EncodingError U+D8E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E7");
    },
    Error,
    "EncodingError U+D8E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E8");
    },
    Error,
    "EncodingError U+D8E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E9");
    },
    Error,
    "EncodingError U+D8E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8EA");
    },
    Error,
    "EncodingError U+D8EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8EB");
    },
    Error,
    "EncodingError U+D8EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8EC");
    },
    Error,
    "EncodingError U+D8EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8ED");
    },
    Error,
    "EncodingError U+D8ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8EE");
    },
    Error,
    "EncodingError U+D8EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8EF");
    },
    Error,
    "EncodingError U+D8EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F0");
    },
    Error,
    "EncodingError U+D8F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F1");
    },
    Error,
    "EncodingError U+D8F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F2");
    },
    Error,
    "EncodingError U+D8F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F3");
    },
    Error,
    "EncodingError U+D8F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F4");
    },
    Error,
    "EncodingError U+D8F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F5");
    },
    Error,
    "EncodingError U+D8F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F6");
    },
    Error,
    "EncodingError U+D8F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F7");
    },
    Error,
    "EncodingError U+D8F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F8");
    },
    Error,
    "EncodingError U+D8F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F9");
    },
    Error,
    "EncodingError U+D8F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8FA");
    },
    Error,
    "EncodingError U+D8FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8FB");
    },
    Error,
    "EncodingError U+D8FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8FC");
    },
    Error,
    "EncodingError U+D8FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8FD");
    },
    Error,
    "EncodingError U+D8FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8FE");
    },
    Error,
    "EncodingError U+D8FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8FF");
    },
    Error,
    "EncodingError U+D8FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD900");
    },
    Error,
    "EncodingError U+D900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD901");
    },
    Error,
    "EncodingError U+D901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD902");
    },
    Error,
    "EncodingError U+D902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD903");
    },
    Error,
    "EncodingError U+D903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD904");
    },
    Error,
    "EncodingError U+D904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD905");
    },
    Error,
    "EncodingError U+D905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD906");
    },
    Error,
    "EncodingError U+D906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD907");
    },
    Error,
    "EncodingError U+D907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD908");
    },
    Error,
    "EncodingError U+D908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD909");
    },
    Error,
    "EncodingError U+D909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD90A");
    },
    Error,
    "EncodingError U+D90A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD90B");
    },
    Error,
    "EncodingError U+D90B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD90C");
    },
    Error,
    "EncodingError U+D90C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD90D");
    },
    Error,
    "EncodingError U+D90D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD90E");
    },
    Error,
    "EncodingError U+D90E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD90F");
    },
    Error,
    "EncodingError U+D90F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD910");
    },
    Error,
    "EncodingError U+D910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD911");
    },
    Error,
    "EncodingError U+D911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD912");
    },
    Error,
    "EncodingError U+D912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD913");
    },
    Error,
    "EncodingError U+D913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD914");
    },
    Error,
    "EncodingError U+D914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD915");
    },
    Error,
    "EncodingError U+D915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD916");
    },
    Error,
    "EncodingError U+D916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD917");
    },
    Error,
    "EncodingError U+D917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD918");
    },
    Error,
    "EncodingError U+D918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD919");
    },
    Error,
    "EncodingError U+D919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD91A");
    },
    Error,
    "EncodingError U+D91A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD91B");
    },
    Error,
    "EncodingError U+D91B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD91C");
    },
    Error,
    "EncodingError U+D91C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD91D");
    },
    Error,
    "EncodingError U+D91D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD91E");
    },
    Error,
    "EncodingError U+D91E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD91F");
    },
    Error,
    "EncodingError U+D91F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD920");
    },
    Error,
    "EncodingError U+D920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD921");
    },
    Error,
    "EncodingError U+D921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD922");
    },
    Error,
    "EncodingError U+D922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD923");
    },
    Error,
    "EncodingError U+D923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD924");
    },
    Error,
    "EncodingError U+D924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD925");
    },
    Error,
    "EncodingError U+D925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD926");
    },
    Error,
    "EncodingError U+D926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD927");
    },
    Error,
    "EncodingError U+D927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD928");
    },
    Error,
    "EncodingError U+D928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD929");
    },
    Error,
    "EncodingError U+D929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD92A");
    },
    Error,
    "EncodingError U+D92A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD92B");
    },
    Error,
    "EncodingError U+D92B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD92C");
    },
    Error,
    "EncodingError U+D92C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD92D");
    },
    Error,
    "EncodingError U+D92D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD92E");
    },
    Error,
    "EncodingError U+D92E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD92F");
    },
    Error,
    "EncodingError U+D92F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD930");
    },
    Error,
    "EncodingError U+D930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD931");
    },
    Error,
    "EncodingError U+D931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD932");
    },
    Error,
    "EncodingError U+D932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD933");
    },
    Error,
    "EncodingError U+D933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD934");
    },
    Error,
    "EncodingError U+D934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD935");
    },
    Error,
    "EncodingError U+D935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD936");
    },
    Error,
    "EncodingError U+D936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD937");
    },
    Error,
    "EncodingError U+D937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD938");
    },
    Error,
    "EncodingError U+D938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD939");
    },
    Error,
    "EncodingError U+D939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD93A");
    },
    Error,
    "EncodingError U+D93A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD93B");
    },
    Error,
    "EncodingError U+D93B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD93C");
    },
    Error,
    "EncodingError U+D93C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD93D");
    },
    Error,
    "EncodingError U+D93D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD93E");
    },
    Error,
    "EncodingError U+D93E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD93F");
    },
    Error,
    "EncodingError U+D93F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD940");
    },
    Error,
    "EncodingError U+D940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD941");
    },
    Error,
    "EncodingError U+D941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD942");
    },
    Error,
    "EncodingError U+D942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD943");
    },
    Error,
    "EncodingError U+D943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD944");
    },
    Error,
    "EncodingError U+D944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD945");
    },
    Error,
    "EncodingError U+D945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD946");
    },
    Error,
    "EncodingError U+D946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD947");
    },
    Error,
    "EncodingError U+D947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD948");
    },
    Error,
    "EncodingError U+D948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD949");
    },
    Error,
    "EncodingError U+D949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD94A");
    },
    Error,
    "EncodingError U+D94A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD94B");
    },
    Error,
    "EncodingError U+D94B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD94C");
    },
    Error,
    "EncodingError U+D94C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD94D");
    },
    Error,
    "EncodingError U+D94D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD94E");
    },
    Error,
    "EncodingError U+D94E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD94F");
    },
    Error,
    "EncodingError U+D94F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD950");
    },
    Error,
    "EncodingError U+D950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD951");
    },
    Error,
    "EncodingError U+D951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD952");
    },
    Error,
    "EncodingError U+D952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD953");
    },
    Error,
    "EncodingError U+D953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD954");
    },
    Error,
    "EncodingError U+D954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD955");
    },
    Error,
    "EncodingError U+D955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD956");
    },
    Error,
    "EncodingError U+D956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD957");
    },
    Error,
    "EncodingError U+D957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD958");
    },
    Error,
    "EncodingError U+D958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD959");
    },
    Error,
    "EncodingError U+D959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD95A");
    },
    Error,
    "EncodingError U+D95A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD95B");
    },
    Error,
    "EncodingError U+D95B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD95C");
    },
    Error,
    "EncodingError U+D95C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD95D");
    },
    Error,
    "EncodingError U+D95D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD95E");
    },
    Error,
    "EncodingError U+D95E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD95F");
    },
    Error,
    "EncodingError U+D95F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD960");
    },
    Error,
    "EncodingError U+D960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD961");
    },
    Error,
    "EncodingError U+D961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD962");
    },
    Error,
    "EncodingError U+D962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD963");
    },
    Error,
    "EncodingError U+D963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD964");
    },
    Error,
    "EncodingError U+D964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD965");
    },
    Error,
    "EncodingError U+D965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD966");
    },
    Error,
    "EncodingError U+D966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD967");
    },
    Error,
    "EncodingError U+D967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD968");
    },
    Error,
    "EncodingError U+D968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD969");
    },
    Error,
    "EncodingError U+D969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD96A");
    },
    Error,
    "EncodingError U+D96A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD96B");
    },
    Error,
    "EncodingError U+D96B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD96C");
    },
    Error,
    "EncodingError U+D96C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD96D");
    },
    Error,
    "EncodingError U+D96D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD96E");
    },
    Error,
    "EncodingError U+D96E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD96F");
    },
    Error,
    "EncodingError U+D96F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD970");
    },
    Error,
    "EncodingError U+D970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD971");
    },
    Error,
    "EncodingError U+D971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD972");
    },
    Error,
    "EncodingError U+D972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD973");
    },
    Error,
    "EncodingError U+D973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD974");
    },
    Error,
    "EncodingError U+D974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD975");
    },
    Error,
    "EncodingError U+D975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD976");
    },
    Error,
    "EncodingError U+D976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD977");
    },
    Error,
    "EncodingError U+D977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD978");
    },
    Error,
    "EncodingError U+D978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD979");
    },
    Error,
    "EncodingError U+D979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD97A");
    },
    Error,
    "EncodingError U+D97A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD97B");
    },
    Error,
    "EncodingError U+D97B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD97C");
    },
    Error,
    "EncodingError U+D97C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD97D");
    },
    Error,
    "EncodingError U+D97D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD97E");
    },
    Error,
    "EncodingError U+D97E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD97F");
    },
    Error,
    "EncodingError U+D97F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD980");
    },
    Error,
    "EncodingError U+D980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD981");
    },
    Error,
    "EncodingError U+D981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD982");
    },
    Error,
    "EncodingError U+D982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD983");
    },
    Error,
    "EncodingError U+D983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD984");
    },
    Error,
    "EncodingError U+D984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD985");
    },
    Error,
    "EncodingError U+D985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD986");
    },
    Error,
    "EncodingError U+D986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD987");
    },
    Error,
    "EncodingError U+D987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD988");
    },
    Error,
    "EncodingError U+D988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD989");
    },
    Error,
    "EncodingError U+D989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD98A");
    },
    Error,
    "EncodingError U+D98A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD98B");
    },
    Error,
    "EncodingError U+D98B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD98C");
    },
    Error,
    "EncodingError U+D98C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD98D");
    },
    Error,
    "EncodingError U+D98D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD98E");
    },
    Error,
    "EncodingError U+D98E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD98F");
    },
    Error,
    "EncodingError U+D98F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD990");
    },
    Error,
    "EncodingError U+D990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD991");
    },
    Error,
    "EncodingError U+D991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD992");
    },
    Error,
    "EncodingError U+D992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD993");
    },
    Error,
    "EncodingError U+D993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD994");
    },
    Error,
    "EncodingError U+D994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD995");
    },
    Error,
    "EncodingError U+D995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD996");
    },
    Error,
    "EncodingError U+D996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD997");
    },
    Error,
    "EncodingError U+D997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD998");
    },
    Error,
    "EncodingError U+D998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD999");
    },
    Error,
    "EncodingError U+D999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD99A");
    },
    Error,
    "EncodingError U+D99A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD99B");
    },
    Error,
    "EncodingError U+D99B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD99C");
    },
    Error,
    "EncodingError U+D99C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD99D");
    },
    Error,
    "EncodingError U+D99D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD99E");
    },
    Error,
    "EncodingError U+D99E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD99F");
    },
    Error,
    "EncodingError U+D99F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A0");
    },
    Error,
    "EncodingError U+D9A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A1");
    },
    Error,
    "EncodingError U+D9A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A2");
    },
    Error,
    "EncodingError U+D9A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A3");
    },
    Error,
    "EncodingError U+D9A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A4");
    },
    Error,
    "EncodingError U+D9A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A5");
    },
    Error,
    "EncodingError U+D9A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A6");
    },
    Error,
    "EncodingError U+D9A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A7");
    },
    Error,
    "EncodingError U+D9A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A8");
    },
    Error,
    "EncodingError U+D9A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A9");
    },
    Error,
    "EncodingError U+D9A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9AA");
    },
    Error,
    "EncodingError U+D9AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9AB");
    },
    Error,
    "EncodingError U+D9AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9AC");
    },
    Error,
    "EncodingError U+D9AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9AD");
    },
    Error,
    "EncodingError U+D9AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9AE");
    },
    Error,
    "EncodingError U+D9AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9AF");
    },
    Error,
    "EncodingError U+D9AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B0");
    },
    Error,
    "EncodingError U+D9B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B1");
    },
    Error,
    "EncodingError U+D9B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B2");
    },
    Error,
    "EncodingError U+D9B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B3");
    },
    Error,
    "EncodingError U+D9B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B4");
    },
    Error,
    "EncodingError U+D9B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B5");
    },
    Error,
    "EncodingError U+D9B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B6");
    },
    Error,
    "EncodingError U+D9B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B7");
    },
    Error,
    "EncodingError U+D9B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B8");
    },
    Error,
    "EncodingError U+D9B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B9");
    },
    Error,
    "EncodingError U+D9B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9BA");
    },
    Error,
    "EncodingError U+D9BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9BB");
    },
    Error,
    "EncodingError U+D9BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9BC");
    },
    Error,
    "EncodingError U+D9BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9BD");
    },
    Error,
    "EncodingError U+D9BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9BE");
    },
    Error,
    "EncodingError U+D9BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9BF");
    },
    Error,
    "EncodingError U+D9BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C0");
    },
    Error,
    "EncodingError U+D9C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C1");
    },
    Error,
    "EncodingError U+D9C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C2");
    },
    Error,
    "EncodingError U+D9C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C3");
    },
    Error,
    "EncodingError U+D9C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C4");
    },
    Error,
    "EncodingError U+D9C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C5");
    },
    Error,
    "EncodingError U+D9C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C6");
    },
    Error,
    "EncodingError U+D9C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C7");
    },
    Error,
    "EncodingError U+D9C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C8");
    },
    Error,
    "EncodingError U+D9C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C9");
    },
    Error,
    "EncodingError U+D9C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9CA");
    },
    Error,
    "EncodingError U+D9CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9CB");
    },
    Error,
    "EncodingError U+D9CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9CC");
    },
    Error,
    "EncodingError U+D9CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9CD");
    },
    Error,
    "EncodingError U+D9CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9CE");
    },
    Error,
    "EncodingError U+D9CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9CF");
    },
    Error,
    "EncodingError U+D9CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D0");
    },
    Error,
    "EncodingError U+D9D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D1");
    },
    Error,
    "EncodingError U+D9D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D2");
    },
    Error,
    "EncodingError U+D9D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D3");
    },
    Error,
    "EncodingError U+D9D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D4");
    },
    Error,
    "EncodingError U+D9D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D5");
    },
    Error,
    "EncodingError U+D9D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D6");
    },
    Error,
    "EncodingError U+D9D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D7");
    },
    Error,
    "EncodingError U+D9D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D8");
    },
    Error,
    "EncodingError U+D9D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D9");
    },
    Error,
    "EncodingError U+D9D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9DA");
    },
    Error,
    "EncodingError U+D9DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9DB");
    },
    Error,
    "EncodingError U+D9DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9DC");
    },
    Error,
    "EncodingError U+D9DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9DD");
    },
    Error,
    "EncodingError U+D9DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9DE");
    },
    Error,
    "EncodingError U+D9DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9DF");
    },
    Error,
    "EncodingError U+D9DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E0");
    },
    Error,
    "EncodingError U+D9E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E1");
    },
    Error,
    "EncodingError U+D9E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E2");
    },
    Error,
    "EncodingError U+D9E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E3");
    },
    Error,
    "EncodingError U+D9E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E4");
    },
    Error,
    "EncodingError U+D9E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E5");
    },
    Error,
    "EncodingError U+D9E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E6");
    },
    Error,
    "EncodingError U+D9E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E7");
    },
    Error,
    "EncodingError U+D9E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E8");
    },
    Error,
    "EncodingError U+D9E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E9");
    },
    Error,
    "EncodingError U+D9E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9EA");
    },
    Error,
    "EncodingError U+D9EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9EB");
    },
    Error,
    "EncodingError U+D9EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9EC");
    },
    Error,
    "EncodingError U+D9EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9ED");
    },
    Error,
    "EncodingError U+D9ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9EE");
    },
    Error,
    "EncodingError U+D9EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9EF");
    },
    Error,
    "EncodingError U+D9EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F0");
    },
    Error,
    "EncodingError U+D9F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F1");
    },
    Error,
    "EncodingError U+D9F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F2");
    },
    Error,
    "EncodingError U+D9F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F3");
    },
    Error,
    "EncodingError U+D9F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F4");
    },
    Error,
    "EncodingError U+D9F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F5");
    },
    Error,
    "EncodingError U+D9F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F6");
    },
    Error,
    "EncodingError U+D9F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F7");
    },
    Error,
    "EncodingError U+D9F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F8");
    },
    Error,
    "EncodingError U+D9F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F9");
    },
    Error,
    "EncodingError U+D9F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9FA");
    },
    Error,
    "EncodingError U+D9FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9FB");
    },
    Error,
    "EncodingError U+D9FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9FC");
    },
    Error,
    "EncodingError U+D9FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9FD");
    },
    Error,
    "EncodingError U+D9FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9FE");
    },
    Error,
    "EncodingError U+D9FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9FF");
    },
    Error,
    "EncodingError U+D9FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA00");
    },
    Error,
    "EncodingError U+DA00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA01");
    },
    Error,
    "EncodingError U+DA01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA02");
    },
    Error,
    "EncodingError U+DA02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA03");
    },
    Error,
    "EncodingError U+DA03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA04");
    },
    Error,
    "EncodingError U+DA04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA05");
    },
    Error,
    "EncodingError U+DA05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA06");
    },
    Error,
    "EncodingError U+DA06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA07");
    },
    Error,
    "EncodingError U+DA07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA08");
    },
    Error,
    "EncodingError U+DA08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA09");
    },
    Error,
    "EncodingError U+DA09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA0A");
    },
    Error,
    "EncodingError U+DA0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA0B");
    },
    Error,
    "EncodingError U+DA0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA0C");
    },
    Error,
    "EncodingError U+DA0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA0D");
    },
    Error,
    "EncodingError U+DA0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA0E");
    },
    Error,
    "EncodingError U+DA0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA0F");
    },
    Error,
    "EncodingError U+DA0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA10");
    },
    Error,
    "EncodingError U+DA10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA11");
    },
    Error,
    "EncodingError U+DA11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA12");
    },
    Error,
    "EncodingError U+DA12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA13");
    },
    Error,
    "EncodingError U+DA13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA14");
    },
    Error,
    "EncodingError U+DA14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA15");
    },
    Error,
    "EncodingError U+DA15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA16");
    },
    Error,
    "EncodingError U+DA16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA17");
    },
    Error,
    "EncodingError U+DA17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA18");
    },
    Error,
    "EncodingError U+DA18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA19");
    },
    Error,
    "EncodingError U+DA19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA1A");
    },
    Error,
    "EncodingError U+DA1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA1B");
    },
    Error,
    "EncodingError U+DA1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA1C");
    },
    Error,
    "EncodingError U+DA1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA1D");
    },
    Error,
    "EncodingError U+DA1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA1E");
    },
    Error,
    "EncodingError U+DA1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA1F");
    },
    Error,
    "EncodingError U+DA1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA20");
    },
    Error,
    "EncodingError U+DA20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA21");
    },
    Error,
    "EncodingError U+DA21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA22");
    },
    Error,
    "EncodingError U+DA22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA23");
    },
    Error,
    "EncodingError U+DA23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA24");
    },
    Error,
    "EncodingError U+DA24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA25");
    },
    Error,
    "EncodingError U+DA25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA26");
    },
    Error,
    "EncodingError U+DA26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA27");
    },
    Error,
    "EncodingError U+DA27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA28");
    },
    Error,
    "EncodingError U+DA28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA29");
    },
    Error,
    "EncodingError U+DA29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA2A");
    },
    Error,
    "EncodingError U+DA2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA2B");
    },
    Error,
    "EncodingError U+DA2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA2C");
    },
    Error,
    "EncodingError U+DA2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA2D");
    },
    Error,
    "EncodingError U+DA2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA2E");
    },
    Error,
    "EncodingError U+DA2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA2F");
    },
    Error,
    "EncodingError U+DA2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA30");
    },
    Error,
    "EncodingError U+DA30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA31");
    },
    Error,
    "EncodingError U+DA31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA32");
    },
    Error,
    "EncodingError U+DA32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA33");
    },
    Error,
    "EncodingError U+DA33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA34");
    },
    Error,
    "EncodingError U+DA34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA35");
    },
    Error,
    "EncodingError U+DA35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA36");
    },
    Error,
    "EncodingError U+DA36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA37");
    },
    Error,
    "EncodingError U+DA37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA38");
    },
    Error,
    "EncodingError U+DA38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA39");
    },
    Error,
    "EncodingError U+DA39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA3A");
    },
    Error,
    "EncodingError U+DA3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA3B");
    },
    Error,
    "EncodingError U+DA3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA3C");
    },
    Error,
    "EncodingError U+DA3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA3D");
    },
    Error,
    "EncodingError U+DA3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA3E");
    },
    Error,
    "EncodingError U+DA3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA3F");
    },
    Error,
    "EncodingError U+DA3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA40");
    },
    Error,
    "EncodingError U+DA40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA41");
    },
    Error,
    "EncodingError U+DA41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA42");
    },
    Error,
    "EncodingError U+DA42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA43");
    },
    Error,
    "EncodingError U+DA43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA44");
    },
    Error,
    "EncodingError U+DA44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA45");
    },
    Error,
    "EncodingError U+DA45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA46");
    },
    Error,
    "EncodingError U+DA46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA47");
    },
    Error,
    "EncodingError U+DA47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA48");
    },
    Error,
    "EncodingError U+DA48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA49");
    },
    Error,
    "EncodingError U+DA49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA4A");
    },
    Error,
    "EncodingError U+DA4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA4B");
    },
    Error,
    "EncodingError U+DA4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA4C");
    },
    Error,
    "EncodingError U+DA4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA4D");
    },
    Error,
    "EncodingError U+DA4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA4E");
    },
    Error,
    "EncodingError U+DA4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA4F");
    },
    Error,
    "EncodingError U+DA4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA50");
    },
    Error,
    "EncodingError U+DA50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA51");
    },
    Error,
    "EncodingError U+DA51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA52");
    },
    Error,
    "EncodingError U+DA52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA53");
    },
    Error,
    "EncodingError U+DA53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA54");
    },
    Error,
    "EncodingError U+DA54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA55");
    },
    Error,
    "EncodingError U+DA55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA56");
    },
    Error,
    "EncodingError U+DA56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA57");
    },
    Error,
    "EncodingError U+DA57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA58");
    },
    Error,
    "EncodingError U+DA58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA59");
    },
    Error,
    "EncodingError U+DA59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA5A");
    },
    Error,
    "EncodingError U+DA5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA5B");
    },
    Error,
    "EncodingError U+DA5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA5C");
    },
    Error,
    "EncodingError U+DA5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA5D");
    },
    Error,
    "EncodingError U+DA5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA5E");
    },
    Error,
    "EncodingError U+DA5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA5F");
    },
    Error,
    "EncodingError U+DA5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA60");
    },
    Error,
    "EncodingError U+DA60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA61");
    },
    Error,
    "EncodingError U+DA61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA62");
    },
    Error,
    "EncodingError U+DA62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA63");
    },
    Error,
    "EncodingError U+DA63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA64");
    },
    Error,
    "EncodingError U+DA64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA65");
    },
    Error,
    "EncodingError U+DA65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA66");
    },
    Error,
    "EncodingError U+DA66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA67");
    },
    Error,
    "EncodingError U+DA67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA68");
    },
    Error,
    "EncodingError U+DA68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA69");
    },
    Error,
    "EncodingError U+DA69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA6A");
    },
    Error,
    "EncodingError U+DA6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA6B");
    },
    Error,
    "EncodingError U+DA6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA6C");
    },
    Error,
    "EncodingError U+DA6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA6D");
    },
    Error,
    "EncodingError U+DA6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA6E");
    },
    Error,
    "EncodingError U+DA6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA6F");
    },
    Error,
    "EncodingError U+DA6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA70");
    },
    Error,
    "EncodingError U+DA70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA71");
    },
    Error,
    "EncodingError U+DA71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA72");
    },
    Error,
    "EncodingError U+DA72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA73");
    },
    Error,
    "EncodingError U+DA73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA74");
    },
    Error,
    "EncodingError U+DA74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA75");
    },
    Error,
    "EncodingError U+DA75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA76");
    },
    Error,
    "EncodingError U+DA76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA77");
    },
    Error,
    "EncodingError U+DA77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA78");
    },
    Error,
    "EncodingError U+DA78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA79");
    },
    Error,
    "EncodingError U+DA79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA7A");
    },
    Error,
    "EncodingError U+DA7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA7B");
    },
    Error,
    "EncodingError U+DA7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA7C");
    },
    Error,
    "EncodingError U+DA7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA7D");
    },
    Error,
    "EncodingError U+DA7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA7E");
    },
    Error,
    "EncodingError U+DA7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA7F");
    },
    Error,
    "EncodingError U+DA7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA80");
    },
    Error,
    "EncodingError U+DA80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA81");
    },
    Error,
    "EncodingError U+DA81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA82");
    },
    Error,
    "EncodingError U+DA82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA83");
    },
    Error,
    "EncodingError U+DA83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA84");
    },
    Error,
    "EncodingError U+DA84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA85");
    },
    Error,
    "EncodingError U+DA85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA86");
    },
    Error,
    "EncodingError U+DA86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA87");
    },
    Error,
    "EncodingError U+DA87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA88");
    },
    Error,
    "EncodingError U+DA88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA89");
    },
    Error,
    "EncodingError U+DA89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA8A");
    },
    Error,
    "EncodingError U+DA8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA8B");
    },
    Error,
    "EncodingError U+DA8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA8C");
    },
    Error,
    "EncodingError U+DA8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA8D");
    },
    Error,
    "EncodingError U+DA8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA8E");
    },
    Error,
    "EncodingError U+DA8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA8F");
    },
    Error,
    "EncodingError U+DA8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA90");
    },
    Error,
    "EncodingError U+DA90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA91");
    },
    Error,
    "EncodingError U+DA91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA92");
    },
    Error,
    "EncodingError U+DA92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA93");
    },
    Error,
    "EncodingError U+DA93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA94");
    },
    Error,
    "EncodingError U+DA94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA95");
    },
    Error,
    "EncodingError U+DA95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA96");
    },
    Error,
    "EncodingError U+DA96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA97");
    },
    Error,
    "EncodingError U+DA97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA98");
    },
    Error,
    "EncodingError U+DA98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA99");
    },
    Error,
    "EncodingError U+DA99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA9A");
    },
    Error,
    "EncodingError U+DA9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA9B");
    },
    Error,
    "EncodingError U+DA9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA9C");
    },
    Error,
    "EncodingError U+DA9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA9D");
    },
    Error,
    "EncodingError U+DA9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA9E");
    },
    Error,
    "EncodingError U+DA9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA9F");
    },
    Error,
    "EncodingError U+DA9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA0");
    },
    Error,
    "EncodingError U+DAA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA1");
    },
    Error,
    "EncodingError U+DAA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA2");
    },
    Error,
    "EncodingError U+DAA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA3");
    },
    Error,
    "EncodingError U+DAA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA4");
    },
    Error,
    "EncodingError U+DAA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA5");
    },
    Error,
    "EncodingError U+DAA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA6");
    },
    Error,
    "EncodingError U+DAA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA7");
    },
    Error,
    "EncodingError U+DAA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA8");
    },
    Error,
    "EncodingError U+DAA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA9");
    },
    Error,
    "EncodingError U+DAA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAAA");
    },
    Error,
    "EncodingError U+DAAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAAB");
    },
    Error,
    "EncodingError U+DAAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAAC");
    },
    Error,
    "EncodingError U+DAAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAAD");
    },
    Error,
    "EncodingError U+DAAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAAE");
    },
    Error,
    "EncodingError U+DAAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAAF");
    },
    Error,
    "EncodingError U+DAAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB0");
    },
    Error,
    "EncodingError U+DAB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB1");
    },
    Error,
    "EncodingError U+DAB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB2");
    },
    Error,
    "EncodingError U+DAB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB3");
    },
    Error,
    "EncodingError U+DAB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB4");
    },
    Error,
    "EncodingError U+DAB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB5");
    },
    Error,
    "EncodingError U+DAB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB6");
    },
    Error,
    "EncodingError U+DAB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB7");
    },
    Error,
    "EncodingError U+DAB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB8");
    },
    Error,
    "EncodingError U+DAB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB9");
    },
    Error,
    "EncodingError U+DAB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDABA");
    },
    Error,
    "EncodingError U+DABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDABB");
    },
    Error,
    "EncodingError U+DABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDABC");
    },
    Error,
    "EncodingError U+DABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDABD");
    },
    Error,
    "EncodingError U+DABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDABE");
    },
    Error,
    "EncodingError U+DABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDABF");
    },
    Error,
    "EncodingError U+DABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC0");
    },
    Error,
    "EncodingError U+DAC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC1");
    },
    Error,
    "EncodingError U+DAC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC2");
    },
    Error,
    "EncodingError U+DAC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC3");
    },
    Error,
    "EncodingError U+DAC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC4");
    },
    Error,
    "EncodingError U+DAC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC5");
    },
    Error,
    "EncodingError U+DAC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC6");
    },
    Error,
    "EncodingError U+DAC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC7");
    },
    Error,
    "EncodingError U+DAC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC8");
    },
    Error,
    "EncodingError U+DAC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC9");
    },
    Error,
    "EncodingError U+DAC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDACA");
    },
    Error,
    "EncodingError U+DACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDACB");
    },
    Error,
    "EncodingError U+DACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDACC");
    },
    Error,
    "EncodingError U+DACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDACD");
    },
    Error,
    "EncodingError U+DACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDACE");
    },
    Error,
    "EncodingError U+DACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDACF");
    },
    Error,
    "EncodingError U+DACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD0");
    },
    Error,
    "EncodingError U+DAD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD1");
    },
    Error,
    "EncodingError U+DAD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD2");
    },
    Error,
    "EncodingError U+DAD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD3");
    },
    Error,
    "EncodingError U+DAD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD4");
    },
    Error,
    "EncodingError U+DAD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD5");
    },
    Error,
    "EncodingError U+DAD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD6");
    },
    Error,
    "EncodingError U+DAD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD7");
    },
    Error,
    "EncodingError U+DAD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD8");
    },
    Error,
    "EncodingError U+DAD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD9");
    },
    Error,
    "EncodingError U+DAD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDADA");
    },
    Error,
    "EncodingError U+DADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDADB");
    },
    Error,
    "EncodingError U+DADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDADC");
    },
    Error,
    "EncodingError U+DADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDADD");
    },
    Error,
    "EncodingError U+DADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDADE");
    },
    Error,
    "EncodingError U+DADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDADF");
    },
    Error,
    "EncodingError U+DADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE0");
    },
    Error,
    "EncodingError U+DAE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE1");
    },
    Error,
    "EncodingError U+DAE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE2");
    },
    Error,
    "EncodingError U+DAE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE3");
    },
    Error,
    "EncodingError U+DAE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE4");
    },
    Error,
    "EncodingError U+DAE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE5");
    },
    Error,
    "EncodingError U+DAE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE6");
    },
    Error,
    "EncodingError U+DAE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE7");
    },
    Error,
    "EncodingError U+DAE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE8");
    },
    Error,
    "EncodingError U+DAE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE9");
    },
    Error,
    "EncodingError U+DAE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAEA");
    },
    Error,
    "EncodingError U+DAEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAEB");
    },
    Error,
    "EncodingError U+DAEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAEC");
    },
    Error,
    "EncodingError U+DAEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAED");
    },
    Error,
    "EncodingError U+DAED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAEE");
    },
    Error,
    "EncodingError U+DAEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAEF");
    },
    Error,
    "EncodingError U+DAEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF0");
    },
    Error,
    "EncodingError U+DAF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF1");
    },
    Error,
    "EncodingError U+DAF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF2");
    },
    Error,
    "EncodingError U+DAF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF3");
    },
    Error,
    "EncodingError U+DAF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF4");
    },
    Error,
    "EncodingError U+DAF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF5");
    },
    Error,
    "EncodingError U+DAF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF6");
    },
    Error,
    "EncodingError U+DAF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF7");
    },
    Error,
    "EncodingError U+DAF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF8");
    },
    Error,
    "EncodingError U+DAF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF9");
    },
    Error,
    "EncodingError U+DAF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAFA");
    },
    Error,
    "EncodingError U+DAFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAFB");
    },
    Error,
    "EncodingError U+DAFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAFC");
    },
    Error,
    "EncodingError U+DAFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAFD");
    },
    Error,
    "EncodingError U+DAFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAFE");
    },
    Error,
    "EncodingError U+DAFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAFF");
    },
    Error,
    "EncodingError U+DAFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB00");
    },
    Error,
    "EncodingError U+DB00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB01");
    },
    Error,
    "EncodingError U+DB01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB02");
    },
    Error,
    "EncodingError U+DB02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB03");
    },
    Error,
    "EncodingError U+DB03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB04");
    },
    Error,
    "EncodingError U+DB04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB05");
    },
    Error,
    "EncodingError U+DB05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB06");
    },
    Error,
    "EncodingError U+DB06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB07");
    },
    Error,
    "EncodingError U+DB07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB08");
    },
    Error,
    "EncodingError U+DB08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB09");
    },
    Error,
    "EncodingError U+DB09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB0A");
    },
    Error,
    "EncodingError U+DB0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB0B");
    },
    Error,
    "EncodingError U+DB0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB0C");
    },
    Error,
    "EncodingError U+DB0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB0D");
    },
    Error,
    "EncodingError U+DB0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB0E");
    },
    Error,
    "EncodingError U+DB0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB0F");
    },
    Error,
    "EncodingError U+DB0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB10");
    },
    Error,
    "EncodingError U+DB10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB11");
    },
    Error,
    "EncodingError U+DB11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB12");
    },
    Error,
    "EncodingError U+DB12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB13");
    },
    Error,
    "EncodingError U+DB13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB14");
    },
    Error,
    "EncodingError U+DB14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB15");
    },
    Error,
    "EncodingError U+DB15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB16");
    },
    Error,
    "EncodingError U+DB16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB17");
    },
    Error,
    "EncodingError U+DB17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB18");
    },
    Error,
    "EncodingError U+DB18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB19");
    },
    Error,
    "EncodingError U+DB19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB1A");
    },
    Error,
    "EncodingError U+DB1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB1B");
    },
    Error,
    "EncodingError U+DB1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB1C");
    },
    Error,
    "EncodingError U+DB1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB1D");
    },
    Error,
    "EncodingError U+DB1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB1E");
    },
    Error,
    "EncodingError U+DB1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB1F");
    },
    Error,
    "EncodingError U+DB1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB20");
    },
    Error,
    "EncodingError U+DB20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB21");
    },
    Error,
    "EncodingError U+DB21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB22");
    },
    Error,
    "EncodingError U+DB22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB23");
    },
    Error,
    "EncodingError U+DB23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB24");
    },
    Error,
    "EncodingError U+DB24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB25");
    },
    Error,
    "EncodingError U+DB25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB26");
    },
    Error,
    "EncodingError U+DB26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB27");
    },
    Error,
    "EncodingError U+DB27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB28");
    },
    Error,
    "EncodingError U+DB28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB29");
    },
    Error,
    "EncodingError U+DB29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB2A");
    },
    Error,
    "EncodingError U+DB2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB2B");
    },
    Error,
    "EncodingError U+DB2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB2C");
    },
    Error,
    "EncodingError U+DB2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB2D");
    },
    Error,
    "EncodingError U+DB2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB2E");
    },
    Error,
    "EncodingError U+DB2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB2F");
    },
    Error,
    "EncodingError U+DB2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB30");
    },
    Error,
    "EncodingError U+DB30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB31");
    },
    Error,
    "EncodingError U+DB31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB32");
    },
    Error,
    "EncodingError U+DB32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB33");
    },
    Error,
    "EncodingError U+DB33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB34");
    },
    Error,
    "EncodingError U+DB34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB35");
    },
    Error,
    "EncodingError U+DB35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB36");
    },
    Error,
    "EncodingError U+DB36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB37");
    },
    Error,
    "EncodingError U+DB37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB38");
    },
    Error,
    "EncodingError U+DB38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB39");
    },
    Error,
    "EncodingError U+DB39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB3A");
    },
    Error,
    "EncodingError U+DB3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB3B");
    },
    Error,
    "EncodingError U+DB3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB3C");
    },
    Error,
    "EncodingError U+DB3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB3D");
    },
    Error,
    "EncodingError U+DB3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB3E");
    },
    Error,
    "EncodingError U+DB3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB3F");
    },
    Error,
    "EncodingError U+DB3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB40");
    },
    Error,
    "EncodingError U+DB40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB41");
    },
    Error,
    "EncodingError U+DB41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB42");
    },
    Error,
    "EncodingError U+DB42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB43");
    },
    Error,
    "EncodingError U+DB43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB44");
    },
    Error,
    "EncodingError U+DB44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB45");
    },
    Error,
    "EncodingError U+DB45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB46");
    },
    Error,
    "EncodingError U+DB46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB47");
    },
    Error,
    "EncodingError U+DB47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB48");
    },
    Error,
    "EncodingError U+DB48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB49");
    },
    Error,
    "EncodingError U+DB49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB4A");
    },
    Error,
    "EncodingError U+DB4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB4B");
    },
    Error,
    "EncodingError U+DB4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB4C");
    },
    Error,
    "EncodingError U+DB4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB4D");
    },
    Error,
    "EncodingError U+DB4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB4E");
    },
    Error,
    "EncodingError U+DB4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB4F");
    },
    Error,
    "EncodingError U+DB4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB50");
    },
    Error,
    "EncodingError U+DB50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB51");
    },
    Error,
    "EncodingError U+DB51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB52");
    },
    Error,
    "EncodingError U+DB52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB53");
    },
    Error,
    "EncodingError U+DB53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB54");
    },
    Error,
    "EncodingError U+DB54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB55");
    },
    Error,
    "EncodingError U+DB55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB56");
    },
    Error,
    "EncodingError U+DB56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB57");
    },
    Error,
    "EncodingError U+DB57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB58");
    },
    Error,
    "EncodingError U+DB58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB59");
    },
    Error,
    "EncodingError U+DB59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB5A");
    },
    Error,
    "EncodingError U+DB5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB5B");
    },
    Error,
    "EncodingError U+DB5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB5C");
    },
    Error,
    "EncodingError U+DB5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB5D");
    },
    Error,
    "EncodingError U+DB5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB5E");
    },
    Error,
    "EncodingError U+DB5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB5F");
    },
    Error,
    "EncodingError U+DB5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB60");
    },
    Error,
    "EncodingError U+DB60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB61");
    },
    Error,
    "EncodingError U+DB61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB62");
    },
    Error,
    "EncodingError U+DB62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB63");
    },
    Error,
    "EncodingError U+DB63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB64");
    },
    Error,
    "EncodingError U+DB64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB65");
    },
    Error,
    "EncodingError U+DB65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB66");
    },
    Error,
    "EncodingError U+DB66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB67");
    },
    Error,
    "EncodingError U+DB67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB68");
    },
    Error,
    "EncodingError U+DB68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB69");
    },
    Error,
    "EncodingError U+DB69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB6A");
    },
    Error,
    "EncodingError U+DB6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB6B");
    },
    Error,
    "EncodingError U+DB6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB6C");
    },
    Error,
    "EncodingError U+DB6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB6D");
    },
    Error,
    "EncodingError U+DB6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB6E");
    },
    Error,
    "EncodingError U+DB6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB6F");
    },
    Error,
    "EncodingError U+DB6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB70");
    },
    Error,
    "EncodingError U+DB70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB71");
    },
    Error,
    "EncodingError U+DB71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB72");
    },
    Error,
    "EncodingError U+DB72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB73");
    },
    Error,
    "EncodingError U+DB73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB74");
    },
    Error,
    "EncodingError U+DB74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB75");
    },
    Error,
    "EncodingError U+DB75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB76");
    },
    Error,
    "EncodingError U+DB76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB77");
    },
    Error,
    "EncodingError U+DB77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB78");
    },
    Error,
    "EncodingError U+DB78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB79");
    },
    Error,
    "EncodingError U+DB79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB7A");
    },
    Error,
    "EncodingError U+DB7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB7B");
    },
    Error,
    "EncodingError U+DB7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB7C");
    },
    Error,
    "EncodingError U+DB7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB7D");
    },
    Error,
    "EncodingError U+DB7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB7E");
    },
    Error,
    "EncodingError U+DB7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB7F");
    },
    Error,
    "EncodingError U+DB7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB80");
    },
    Error,
    "EncodingError U+DB80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB81");
    },
    Error,
    "EncodingError U+DB81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB82");
    },
    Error,
    "EncodingError U+DB82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB83");
    },
    Error,
    "EncodingError U+DB83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB84");
    },
    Error,
    "EncodingError U+DB84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB85");
    },
    Error,
    "EncodingError U+DB85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB86");
    },
    Error,
    "EncodingError U+DB86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB87");
    },
    Error,
    "EncodingError U+DB87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB88");
    },
    Error,
    "EncodingError U+DB88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB89");
    },
    Error,
    "EncodingError U+DB89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB8A");
    },
    Error,
    "EncodingError U+DB8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB8B");
    },
    Error,
    "EncodingError U+DB8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB8C");
    },
    Error,
    "EncodingError U+DB8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB8D");
    },
    Error,
    "EncodingError U+DB8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB8E");
    },
    Error,
    "EncodingError U+DB8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB8F");
    },
    Error,
    "EncodingError U+DB8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB90");
    },
    Error,
    "EncodingError U+DB90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB91");
    },
    Error,
    "EncodingError U+DB91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB92");
    },
    Error,
    "EncodingError U+DB92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB93");
    },
    Error,
    "EncodingError U+DB93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB94");
    },
    Error,
    "EncodingError U+DB94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB95");
    },
    Error,
    "EncodingError U+DB95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB96");
    },
    Error,
    "EncodingError U+DB96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB97");
    },
    Error,
    "EncodingError U+DB97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB98");
    },
    Error,
    "EncodingError U+DB98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB99");
    },
    Error,
    "EncodingError U+DB99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB9A");
    },
    Error,
    "EncodingError U+DB9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB9B");
    },
    Error,
    "EncodingError U+DB9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB9C");
    },
    Error,
    "EncodingError U+DB9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB9D");
    },
    Error,
    "EncodingError U+DB9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB9E");
    },
    Error,
    "EncodingError U+DB9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB9F");
    },
    Error,
    "EncodingError U+DB9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA0");
    },
    Error,
    "EncodingError U+DBA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA1");
    },
    Error,
    "EncodingError U+DBA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA2");
    },
    Error,
    "EncodingError U+DBA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA3");
    },
    Error,
    "EncodingError U+DBA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA4");
    },
    Error,
    "EncodingError U+DBA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA5");
    },
    Error,
    "EncodingError U+DBA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA6");
    },
    Error,
    "EncodingError U+DBA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA7");
    },
    Error,
    "EncodingError U+DBA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA8");
    },
    Error,
    "EncodingError U+DBA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA9");
    },
    Error,
    "EncodingError U+DBA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBAA");
    },
    Error,
    "EncodingError U+DBAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBAB");
    },
    Error,
    "EncodingError U+DBAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBAC");
    },
    Error,
    "EncodingError U+DBAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBAD");
    },
    Error,
    "EncodingError U+DBAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBAE");
    },
    Error,
    "EncodingError U+DBAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBAF");
    },
    Error,
    "EncodingError U+DBAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB0");
    },
    Error,
    "EncodingError U+DBB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB1");
    },
    Error,
    "EncodingError U+DBB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB2");
    },
    Error,
    "EncodingError U+DBB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB3");
    },
    Error,
    "EncodingError U+DBB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB4");
    },
    Error,
    "EncodingError U+DBB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB5");
    },
    Error,
    "EncodingError U+DBB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB6");
    },
    Error,
    "EncodingError U+DBB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB7");
    },
    Error,
    "EncodingError U+DBB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB8");
    },
    Error,
    "EncodingError U+DBB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB9");
    },
    Error,
    "EncodingError U+DBB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBBA");
    },
    Error,
    "EncodingError U+DBBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBBB");
    },
    Error,
    "EncodingError U+DBBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBBC");
    },
    Error,
    "EncodingError U+DBBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBBD");
    },
    Error,
    "EncodingError U+DBBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBBE");
    },
    Error,
    "EncodingError U+DBBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBBF");
    },
    Error,
    "EncodingError U+DBBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC0");
    },
    Error,
    "EncodingError U+DBC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC1");
    },
    Error,
    "EncodingError U+DBC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC2");
    },
    Error,
    "EncodingError U+DBC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC3");
    },
    Error,
    "EncodingError U+DBC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC4");
    },
    Error,
    "EncodingError U+DBC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC5");
    },
    Error,
    "EncodingError U+DBC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC6");
    },
    Error,
    "EncodingError U+DBC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC7");
    },
    Error,
    "EncodingError U+DBC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC8");
    },
    Error,
    "EncodingError U+DBC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC9");
    },
    Error,
    "EncodingError U+DBC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBCA");
    },
    Error,
    "EncodingError U+DBCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBCB");
    },
    Error,
    "EncodingError U+DBCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBCC");
    },
    Error,
    "EncodingError U+DBCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBCD");
    },
    Error,
    "EncodingError U+DBCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBCE");
    },
    Error,
    "EncodingError U+DBCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBCF");
    },
    Error,
    "EncodingError U+DBCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD0");
    },
    Error,
    "EncodingError U+DBD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD1");
    },
    Error,
    "EncodingError U+DBD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD2");
    },
    Error,
    "EncodingError U+DBD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD3");
    },
    Error,
    "EncodingError U+DBD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD4");
    },
    Error,
    "EncodingError U+DBD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD5");
    },
    Error,
    "EncodingError U+DBD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD6");
    },
    Error,
    "EncodingError U+DBD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD7");
    },
    Error,
    "EncodingError U+DBD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD8");
    },
    Error,
    "EncodingError U+DBD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD9");
    },
    Error,
    "EncodingError U+DBD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBDA");
    },
    Error,
    "EncodingError U+DBDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBDB");
    },
    Error,
    "EncodingError U+DBDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBDC");
    },
    Error,
    "EncodingError U+DBDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBDD");
    },
    Error,
    "EncodingError U+DBDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBDE");
    },
    Error,
    "EncodingError U+DBDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBDF");
    },
    Error,
    "EncodingError U+DBDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE0");
    },
    Error,
    "EncodingError U+DBE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE1");
    },
    Error,
    "EncodingError U+DBE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE2");
    },
    Error,
    "EncodingError U+DBE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE3");
    },
    Error,
    "EncodingError U+DBE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE4");
    },
    Error,
    "EncodingError U+DBE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE5");
    },
    Error,
    "EncodingError U+DBE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE6");
    },
    Error,
    "EncodingError U+DBE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE7");
    },
    Error,
    "EncodingError U+DBE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE8");
    },
    Error,
    "EncodingError U+DBE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE9");
    },
    Error,
    "EncodingError U+DBE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBEA");
    },
    Error,
    "EncodingError U+DBEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBEB");
    },
    Error,
    "EncodingError U+DBEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBEC");
    },
    Error,
    "EncodingError U+DBEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBED");
    },
    Error,
    "EncodingError U+DBED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBEE");
    },
    Error,
    "EncodingError U+DBEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBEF");
    },
    Error,
    "EncodingError U+DBEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF0");
    },
    Error,
    "EncodingError U+DBF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF1");
    },
    Error,
    "EncodingError U+DBF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF2");
    },
    Error,
    "EncodingError U+DBF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF3");
    },
    Error,
    "EncodingError U+DBF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF4");
    },
    Error,
    "EncodingError U+DBF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF5");
    },
    Error,
    "EncodingError U+DBF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF6");
    },
    Error,
    "EncodingError U+DBF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF7");
    },
    Error,
    "EncodingError U+DBF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF8");
    },
    Error,
    "EncodingError U+DBF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF9");
    },
    Error,
    "EncodingError U+DBF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBFA");
    },
    Error,
    "EncodingError U+DBFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBFB");
    },
    Error,
    "EncodingError U+DBFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBFC");
    },
    Error,
    "EncodingError U+DBFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBFD");
    },
    Error,
    "EncodingError U+DBFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBFE");
    },
    Error,
    "EncodingError U+DBFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBFF");
    },
    Error,
    "EncodingError U+DBFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC00");
    },
    Error,
    "EncodingError U+DC00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC01");
    },
    Error,
    "EncodingError U+DC01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC02");
    },
    Error,
    "EncodingError U+DC02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC03");
    },
    Error,
    "EncodingError U+DC03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC04");
    },
    Error,
    "EncodingError U+DC04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC05");
    },
    Error,
    "EncodingError U+DC05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC06");
    },
    Error,
    "EncodingError U+DC06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC07");
    },
    Error,
    "EncodingError U+DC07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC08");
    },
    Error,
    "EncodingError U+DC08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC09");
    },
    Error,
    "EncodingError U+DC09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC0A");
    },
    Error,
    "EncodingError U+DC0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC0B");
    },
    Error,
    "EncodingError U+DC0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC0C");
    },
    Error,
    "EncodingError U+DC0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC0D");
    },
    Error,
    "EncodingError U+DC0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC0E");
    },
    Error,
    "EncodingError U+DC0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC0F");
    },
    Error,
    "EncodingError U+DC0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC10");
    },
    Error,
    "EncodingError U+DC10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC11");
    },
    Error,
    "EncodingError U+DC11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC12");
    },
    Error,
    "EncodingError U+DC12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC13");
    },
    Error,
    "EncodingError U+DC13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC14");
    },
    Error,
    "EncodingError U+DC14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC15");
    },
    Error,
    "EncodingError U+DC15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC16");
    },
    Error,
    "EncodingError U+DC16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC17");
    },
    Error,
    "EncodingError U+DC17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC18");
    },
    Error,
    "EncodingError U+DC18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC19");
    },
    Error,
    "EncodingError U+DC19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC1A");
    },
    Error,
    "EncodingError U+DC1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC1B");
    },
    Error,
    "EncodingError U+DC1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC1C");
    },
    Error,
    "EncodingError U+DC1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC1D");
    },
    Error,
    "EncodingError U+DC1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC1E");
    },
    Error,
    "EncodingError U+DC1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC1F");
    },
    Error,
    "EncodingError U+DC1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC20");
    },
    Error,
    "EncodingError U+DC20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC21");
    },
    Error,
    "EncodingError U+DC21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC22");
    },
    Error,
    "EncodingError U+DC22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC23");
    },
    Error,
    "EncodingError U+DC23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC24");
    },
    Error,
    "EncodingError U+DC24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC25");
    },
    Error,
    "EncodingError U+DC25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC26");
    },
    Error,
    "EncodingError U+DC26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC27");
    },
    Error,
    "EncodingError U+DC27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC28");
    },
    Error,
    "EncodingError U+DC28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC29");
    },
    Error,
    "EncodingError U+DC29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC2A");
    },
    Error,
    "EncodingError U+DC2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC2B");
    },
    Error,
    "EncodingError U+DC2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC2C");
    },
    Error,
    "EncodingError U+DC2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC2D");
    },
    Error,
    "EncodingError U+DC2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC2E");
    },
    Error,
    "EncodingError U+DC2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC2F");
    },
    Error,
    "EncodingError U+DC2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC30");
    },
    Error,
    "EncodingError U+DC30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC31");
    },
    Error,
    "EncodingError U+DC31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC32");
    },
    Error,
    "EncodingError U+DC32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC33");
    },
    Error,
    "EncodingError U+DC33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC34");
    },
    Error,
    "EncodingError U+DC34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC35");
    },
    Error,
    "EncodingError U+DC35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC36");
    },
    Error,
    "EncodingError U+DC36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC37");
    },
    Error,
    "EncodingError U+DC37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC38");
    },
    Error,
    "EncodingError U+DC38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC39");
    },
    Error,
    "EncodingError U+DC39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC3A");
    },
    Error,
    "EncodingError U+DC3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC3B");
    },
    Error,
    "EncodingError U+DC3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC3C");
    },
    Error,
    "EncodingError U+DC3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC3D");
    },
    Error,
    "EncodingError U+DC3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC3E");
    },
    Error,
    "EncodingError U+DC3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC3F");
    },
    Error,
    "EncodingError U+DC3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC40");
    },
    Error,
    "EncodingError U+DC40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC41");
    },
    Error,
    "EncodingError U+DC41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC42");
    },
    Error,
    "EncodingError U+DC42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC43");
    },
    Error,
    "EncodingError U+DC43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC44");
    },
    Error,
    "EncodingError U+DC44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC45");
    },
    Error,
    "EncodingError U+DC45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC46");
    },
    Error,
    "EncodingError U+DC46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC47");
    },
    Error,
    "EncodingError U+DC47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC48");
    },
    Error,
    "EncodingError U+DC48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC49");
    },
    Error,
    "EncodingError U+DC49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC4A");
    },
    Error,
    "EncodingError U+DC4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC4B");
    },
    Error,
    "EncodingError U+DC4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC4C");
    },
    Error,
    "EncodingError U+DC4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC4D");
    },
    Error,
    "EncodingError U+DC4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC4E");
    },
    Error,
    "EncodingError U+DC4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC4F");
    },
    Error,
    "EncodingError U+DC4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC50");
    },
    Error,
    "EncodingError U+DC50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC51");
    },
    Error,
    "EncodingError U+DC51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC52");
    },
    Error,
    "EncodingError U+DC52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC53");
    },
    Error,
    "EncodingError U+DC53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC54");
    },
    Error,
    "EncodingError U+DC54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC55");
    },
    Error,
    "EncodingError U+DC55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC56");
    },
    Error,
    "EncodingError U+DC56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC57");
    },
    Error,
    "EncodingError U+DC57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC58");
    },
    Error,
    "EncodingError U+DC58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC59");
    },
    Error,
    "EncodingError U+DC59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC5A");
    },
    Error,
    "EncodingError U+DC5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC5B");
    },
    Error,
    "EncodingError U+DC5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC5C");
    },
    Error,
    "EncodingError U+DC5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC5D");
    },
    Error,
    "EncodingError U+DC5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC5E");
    },
    Error,
    "EncodingError U+DC5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC5F");
    },
    Error,
    "EncodingError U+DC5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC60");
    },
    Error,
    "EncodingError U+DC60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC61");
    },
    Error,
    "EncodingError U+DC61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC62");
    },
    Error,
    "EncodingError U+DC62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC63");
    },
    Error,
    "EncodingError U+DC63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC64");
    },
    Error,
    "EncodingError U+DC64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC65");
    },
    Error,
    "EncodingError U+DC65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC66");
    },
    Error,
    "EncodingError U+DC66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC67");
    },
    Error,
    "EncodingError U+DC67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC68");
    },
    Error,
    "EncodingError U+DC68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC69");
    },
    Error,
    "EncodingError U+DC69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC6A");
    },
    Error,
    "EncodingError U+DC6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC6B");
    },
    Error,
    "EncodingError U+DC6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC6C");
    },
    Error,
    "EncodingError U+DC6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC6D");
    },
    Error,
    "EncodingError U+DC6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC6E");
    },
    Error,
    "EncodingError U+DC6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC6F");
    },
    Error,
    "EncodingError U+DC6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC70");
    },
    Error,
    "EncodingError U+DC70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC71");
    },
    Error,
    "EncodingError U+DC71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC72");
    },
    Error,
    "EncodingError U+DC72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC73");
    },
    Error,
    "EncodingError U+DC73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC74");
    },
    Error,
    "EncodingError U+DC74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC75");
    },
    Error,
    "EncodingError U+DC75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC76");
    },
    Error,
    "EncodingError U+DC76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC77");
    },
    Error,
    "EncodingError U+DC77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC78");
    },
    Error,
    "EncodingError U+DC78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC79");
    },
    Error,
    "EncodingError U+DC79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC7A");
    },
    Error,
    "EncodingError U+DC7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC7B");
    },
    Error,
    "EncodingError U+DC7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC7C");
    },
    Error,
    "EncodingError U+DC7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC7D");
    },
    Error,
    "EncodingError U+DC7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC7E");
    },
    Error,
    "EncodingError U+DC7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC7F");
    },
    Error,
    "EncodingError U+DC7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC80");
    },
    Error,
    "EncodingError U+DC80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC81");
    },
    Error,
    "EncodingError U+DC81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC82");
    },
    Error,
    "EncodingError U+DC82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC83");
    },
    Error,
    "EncodingError U+DC83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC84");
    },
    Error,
    "EncodingError U+DC84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC85");
    },
    Error,
    "EncodingError U+DC85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC86");
    },
    Error,
    "EncodingError U+DC86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC87");
    },
    Error,
    "EncodingError U+DC87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC88");
    },
    Error,
    "EncodingError U+DC88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC89");
    },
    Error,
    "EncodingError U+DC89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC8A");
    },
    Error,
    "EncodingError U+DC8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC8B");
    },
    Error,
    "EncodingError U+DC8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC8C");
    },
    Error,
    "EncodingError U+DC8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC8D");
    },
    Error,
    "EncodingError U+DC8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC8E");
    },
    Error,
    "EncodingError U+DC8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC8F");
    },
    Error,
    "EncodingError U+DC8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC90");
    },
    Error,
    "EncodingError U+DC90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC91");
    },
    Error,
    "EncodingError U+DC91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC92");
    },
    Error,
    "EncodingError U+DC92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC93");
    },
    Error,
    "EncodingError U+DC93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC94");
    },
    Error,
    "EncodingError U+DC94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC95");
    },
    Error,
    "EncodingError U+DC95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC96");
    },
    Error,
    "EncodingError U+DC96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC97");
    },
    Error,
    "EncodingError U+DC97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC98");
    },
    Error,
    "EncodingError U+DC98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC99");
    },
    Error,
    "EncodingError U+DC99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC9A");
    },
    Error,
    "EncodingError U+DC9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC9B");
    },
    Error,
    "EncodingError U+DC9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC9C");
    },
    Error,
    "EncodingError U+DC9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC9D");
    },
    Error,
    "EncodingError U+DC9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC9E");
    },
    Error,
    "EncodingError U+DC9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC9F");
    },
    Error,
    "EncodingError U+DC9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA0");
    },
    Error,
    "EncodingError U+DCA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA1");
    },
    Error,
    "EncodingError U+DCA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA2");
    },
    Error,
    "EncodingError U+DCA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA3");
    },
    Error,
    "EncodingError U+DCA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA4");
    },
    Error,
    "EncodingError U+DCA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA5");
    },
    Error,
    "EncodingError U+DCA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA6");
    },
    Error,
    "EncodingError U+DCA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA7");
    },
    Error,
    "EncodingError U+DCA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA8");
    },
    Error,
    "EncodingError U+DCA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA9");
    },
    Error,
    "EncodingError U+DCA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCAA");
    },
    Error,
    "EncodingError U+DCAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCAB");
    },
    Error,
    "EncodingError U+DCAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCAC");
    },
    Error,
    "EncodingError U+DCAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCAD");
    },
    Error,
    "EncodingError U+DCAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCAE");
    },
    Error,
    "EncodingError U+DCAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCAF");
    },
    Error,
    "EncodingError U+DCAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB0");
    },
    Error,
    "EncodingError U+DCB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB1");
    },
    Error,
    "EncodingError U+DCB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB2");
    },
    Error,
    "EncodingError U+DCB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB3");
    },
    Error,
    "EncodingError U+DCB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB4");
    },
    Error,
    "EncodingError U+DCB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB5");
    },
    Error,
    "EncodingError U+DCB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB6");
    },
    Error,
    "EncodingError U+DCB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB7");
    },
    Error,
    "EncodingError U+DCB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB8");
    },
    Error,
    "EncodingError U+DCB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB9");
    },
    Error,
    "EncodingError U+DCB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCBA");
    },
    Error,
    "EncodingError U+DCBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCBB");
    },
    Error,
    "EncodingError U+DCBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCBC");
    },
    Error,
    "EncodingError U+DCBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCBD");
    },
    Error,
    "EncodingError U+DCBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCBE");
    },
    Error,
    "EncodingError U+DCBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCBF");
    },
    Error,
    "EncodingError U+DCBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC0");
    },
    Error,
    "EncodingError U+DCC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC1");
    },
    Error,
    "EncodingError U+DCC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC2");
    },
    Error,
    "EncodingError U+DCC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC3");
    },
    Error,
    "EncodingError U+DCC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC4");
    },
    Error,
    "EncodingError U+DCC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC5");
    },
    Error,
    "EncodingError U+DCC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC6");
    },
    Error,
    "EncodingError U+DCC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC7");
    },
    Error,
    "EncodingError U+DCC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC8");
    },
    Error,
    "EncodingError U+DCC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC9");
    },
    Error,
    "EncodingError U+DCC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCCA");
    },
    Error,
    "EncodingError U+DCCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCCB");
    },
    Error,
    "EncodingError U+DCCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCCC");
    },
    Error,
    "EncodingError U+DCCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCCD");
    },
    Error,
    "EncodingError U+DCCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCCE");
    },
    Error,
    "EncodingError U+DCCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCCF");
    },
    Error,
    "EncodingError U+DCCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD0");
    },
    Error,
    "EncodingError U+DCD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD1");
    },
    Error,
    "EncodingError U+DCD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD2");
    },
    Error,
    "EncodingError U+DCD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD3");
    },
    Error,
    "EncodingError U+DCD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD4");
    },
    Error,
    "EncodingError U+DCD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD5");
    },
    Error,
    "EncodingError U+DCD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD6");
    },
    Error,
    "EncodingError U+DCD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD7");
    },
    Error,
    "EncodingError U+DCD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD8");
    },
    Error,
    "EncodingError U+DCD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD9");
    },
    Error,
    "EncodingError U+DCD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCDA");
    },
    Error,
    "EncodingError U+DCDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCDB");
    },
    Error,
    "EncodingError U+DCDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCDC");
    },
    Error,
    "EncodingError U+DCDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCDD");
    },
    Error,
    "EncodingError U+DCDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCDE");
    },
    Error,
    "EncodingError U+DCDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCDF");
    },
    Error,
    "EncodingError U+DCDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE0");
    },
    Error,
    "EncodingError U+DCE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE1");
    },
    Error,
    "EncodingError U+DCE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE2");
    },
    Error,
    "EncodingError U+DCE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE3");
    },
    Error,
    "EncodingError U+DCE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE4");
    },
    Error,
    "EncodingError U+DCE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE5");
    },
    Error,
    "EncodingError U+DCE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE6");
    },
    Error,
    "EncodingError U+DCE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE7");
    },
    Error,
    "EncodingError U+DCE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE8");
    },
    Error,
    "EncodingError U+DCE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE9");
    },
    Error,
    "EncodingError U+DCE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCEA");
    },
    Error,
    "EncodingError U+DCEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCEB");
    },
    Error,
    "EncodingError U+DCEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCEC");
    },
    Error,
    "EncodingError U+DCEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCED");
    },
    Error,
    "EncodingError U+DCED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCEE");
    },
    Error,
    "EncodingError U+DCEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCEF");
    },
    Error,
    "EncodingError U+DCEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF0");
    },
    Error,
    "EncodingError U+DCF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF1");
    },
    Error,
    "EncodingError U+DCF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF2");
    },
    Error,
    "EncodingError U+DCF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF3");
    },
    Error,
    "EncodingError U+DCF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF4");
    },
    Error,
    "EncodingError U+DCF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF5");
    },
    Error,
    "EncodingError U+DCF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF6");
    },
    Error,
    "EncodingError U+DCF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF7");
    },
    Error,
    "EncodingError U+DCF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF8");
    },
    Error,
    "EncodingError U+DCF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF9");
    },
    Error,
    "EncodingError U+DCF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCFA");
    },
    Error,
    "EncodingError U+DCFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCFB");
    },
    Error,
    "EncodingError U+DCFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCFC");
    },
    Error,
    "EncodingError U+DCFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCFD");
    },
    Error,
    "EncodingError U+DCFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCFE");
    },
    Error,
    "EncodingError U+DCFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCFF");
    },
    Error,
    "EncodingError U+DCFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD00");
    },
    Error,
    "EncodingError U+DD00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD01");
    },
    Error,
    "EncodingError U+DD01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD02");
    },
    Error,
    "EncodingError U+DD02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD03");
    },
    Error,
    "EncodingError U+DD03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD04");
    },
    Error,
    "EncodingError U+DD04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD05");
    },
    Error,
    "EncodingError U+DD05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD06");
    },
    Error,
    "EncodingError U+DD06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD07");
    },
    Error,
    "EncodingError U+DD07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD08");
    },
    Error,
    "EncodingError U+DD08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD09");
    },
    Error,
    "EncodingError U+DD09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD0A");
    },
    Error,
    "EncodingError U+DD0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD0B");
    },
    Error,
    "EncodingError U+DD0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD0C");
    },
    Error,
    "EncodingError U+DD0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD0D");
    },
    Error,
    "EncodingError U+DD0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD0E");
    },
    Error,
    "EncodingError U+DD0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD0F");
    },
    Error,
    "EncodingError U+DD0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD10");
    },
    Error,
    "EncodingError U+DD10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD11");
    },
    Error,
    "EncodingError U+DD11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD12");
    },
    Error,
    "EncodingError U+DD12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD13");
    },
    Error,
    "EncodingError U+DD13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD14");
    },
    Error,
    "EncodingError U+DD14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD15");
    },
    Error,
    "EncodingError U+DD15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD16");
    },
    Error,
    "EncodingError U+DD16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD17");
    },
    Error,
    "EncodingError U+DD17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD18");
    },
    Error,
    "EncodingError U+DD18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD19");
    },
    Error,
    "EncodingError U+DD19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD1A");
    },
    Error,
    "EncodingError U+DD1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD1B");
    },
    Error,
    "EncodingError U+DD1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD1C");
    },
    Error,
    "EncodingError U+DD1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD1D");
    },
    Error,
    "EncodingError U+DD1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD1E");
    },
    Error,
    "EncodingError U+DD1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD1F");
    },
    Error,
    "EncodingError U+DD1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD20");
    },
    Error,
    "EncodingError U+DD20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD21");
    },
    Error,
    "EncodingError U+DD21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD22");
    },
    Error,
    "EncodingError U+DD22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD23");
    },
    Error,
    "EncodingError U+DD23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD24");
    },
    Error,
    "EncodingError U+DD24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD25");
    },
    Error,
    "EncodingError U+DD25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD26");
    },
    Error,
    "EncodingError U+DD26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD27");
    },
    Error,
    "EncodingError U+DD27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD28");
    },
    Error,
    "EncodingError U+DD28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD29");
    },
    Error,
    "EncodingError U+DD29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD2A");
    },
    Error,
    "EncodingError U+DD2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD2B");
    },
    Error,
    "EncodingError U+DD2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD2C");
    },
    Error,
    "EncodingError U+DD2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD2D");
    },
    Error,
    "EncodingError U+DD2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD2E");
    },
    Error,
    "EncodingError U+DD2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD2F");
    },
    Error,
    "EncodingError U+DD2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD30");
    },
    Error,
    "EncodingError U+DD30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD31");
    },
    Error,
    "EncodingError U+DD31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD32");
    },
    Error,
    "EncodingError U+DD32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD33");
    },
    Error,
    "EncodingError U+DD33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD34");
    },
    Error,
    "EncodingError U+DD34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD35");
    },
    Error,
    "EncodingError U+DD35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD36");
    },
    Error,
    "EncodingError U+DD36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD37");
    },
    Error,
    "EncodingError U+DD37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD38");
    },
    Error,
    "EncodingError U+DD38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD39");
    },
    Error,
    "EncodingError U+DD39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD3A");
    },
    Error,
    "EncodingError U+DD3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD3B");
    },
    Error,
    "EncodingError U+DD3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD3C");
    },
    Error,
    "EncodingError U+DD3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD3D");
    },
    Error,
    "EncodingError U+DD3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD3E");
    },
    Error,
    "EncodingError U+DD3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD3F");
    },
    Error,
    "EncodingError U+DD3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD40");
    },
    Error,
    "EncodingError U+DD40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD41");
    },
    Error,
    "EncodingError U+DD41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD42");
    },
    Error,
    "EncodingError U+DD42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD43");
    },
    Error,
    "EncodingError U+DD43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD44");
    },
    Error,
    "EncodingError U+DD44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD45");
    },
    Error,
    "EncodingError U+DD45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD46");
    },
    Error,
    "EncodingError U+DD46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD47");
    },
    Error,
    "EncodingError U+DD47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD48");
    },
    Error,
    "EncodingError U+DD48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD49");
    },
    Error,
    "EncodingError U+DD49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD4A");
    },
    Error,
    "EncodingError U+DD4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD4B");
    },
    Error,
    "EncodingError U+DD4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD4C");
    },
    Error,
    "EncodingError U+DD4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD4D");
    },
    Error,
    "EncodingError U+DD4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD4E");
    },
    Error,
    "EncodingError U+DD4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD4F");
    },
    Error,
    "EncodingError U+DD4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD50");
    },
    Error,
    "EncodingError U+DD50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD51");
    },
    Error,
    "EncodingError U+DD51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD52");
    },
    Error,
    "EncodingError U+DD52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD53");
    },
    Error,
    "EncodingError U+DD53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD54");
    },
    Error,
    "EncodingError U+DD54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD55");
    },
    Error,
    "EncodingError U+DD55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD56");
    },
    Error,
    "EncodingError U+DD56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD57");
    },
    Error,
    "EncodingError U+DD57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD58");
    },
    Error,
    "EncodingError U+DD58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD59");
    },
    Error,
    "EncodingError U+DD59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD5A");
    },
    Error,
    "EncodingError U+DD5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD5B");
    },
    Error,
    "EncodingError U+DD5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD5C");
    },
    Error,
    "EncodingError U+DD5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD5D");
    },
    Error,
    "EncodingError U+DD5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD5E");
    },
    Error,
    "EncodingError U+DD5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD5F");
    },
    Error,
    "EncodingError U+DD5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD60");
    },
    Error,
    "EncodingError U+DD60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD61");
    },
    Error,
    "EncodingError U+DD61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD62");
    },
    Error,
    "EncodingError U+DD62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD63");
    },
    Error,
    "EncodingError U+DD63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD64");
    },
    Error,
    "EncodingError U+DD64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD65");
    },
    Error,
    "EncodingError U+DD65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD66");
    },
    Error,
    "EncodingError U+DD66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD67");
    },
    Error,
    "EncodingError U+DD67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD68");
    },
    Error,
    "EncodingError U+DD68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD69");
    },
    Error,
    "EncodingError U+DD69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD6A");
    },
    Error,
    "EncodingError U+DD6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD6B");
    },
    Error,
    "EncodingError U+DD6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD6C");
    },
    Error,
    "EncodingError U+DD6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD6D");
    },
    Error,
    "EncodingError U+DD6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD6E");
    },
    Error,
    "EncodingError U+DD6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD6F");
    },
    Error,
    "EncodingError U+DD6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD70");
    },
    Error,
    "EncodingError U+DD70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD71");
    },
    Error,
    "EncodingError U+DD71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD72");
    },
    Error,
    "EncodingError U+DD72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD73");
    },
    Error,
    "EncodingError U+DD73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD74");
    },
    Error,
    "EncodingError U+DD74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD75");
    },
    Error,
    "EncodingError U+DD75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD76");
    },
    Error,
    "EncodingError U+DD76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD77");
    },
    Error,
    "EncodingError U+DD77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD78");
    },
    Error,
    "EncodingError U+DD78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD79");
    },
    Error,
    "EncodingError U+DD79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD7A");
    },
    Error,
    "EncodingError U+DD7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD7B");
    },
    Error,
    "EncodingError U+DD7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD7C");
    },
    Error,
    "EncodingError U+DD7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD7D");
    },
    Error,
    "EncodingError U+DD7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD7E");
    },
    Error,
    "EncodingError U+DD7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD7F");
    },
    Error,
    "EncodingError U+DD7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD80");
    },
    Error,
    "EncodingError U+DD80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD81");
    },
    Error,
    "EncodingError U+DD81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD82");
    },
    Error,
    "EncodingError U+DD82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD83");
    },
    Error,
    "EncodingError U+DD83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD84");
    },
    Error,
    "EncodingError U+DD84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD85");
    },
    Error,
    "EncodingError U+DD85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD86");
    },
    Error,
    "EncodingError U+DD86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD87");
    },
    Error,
    "EncodingError U+DD87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD88");
    },
    Error,
    "EncodingError U+DD88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD89");
    },
    Error,
    "EncodingError U+DD89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD8A");
    },
    Error,
    "EncodingError U+DD8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD8B");
    },
    Error,
    "EncodingError U+DD8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD8C");
    },
    Error,
    "EncodingError U+DD8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD8D");
    },
    Error,
    "EncodingError U+DD8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD8E");
    },
    Error,
    "EncodingError U+DD8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD8F");
    },
    Error,
    "EncodingError U+DD8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD90");
    },
    Error,
    "EncodingError U+DD90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD91");
    },
    Error,
    "EncodingError U+DD91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD92");
    },
    Error,
    "EncodingError U+DD92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD93");
    },
    Error,
    "EncodingError U+DD93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD94");
    },
    Error,
    "EncodingError U+DD94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD95");
    },
    Error,
    "EncodingError U+DD95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD96");
    },
    Error,
    "EncodingError U+DD96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD97");
    },
    Error,
    "EncodingError U+DD97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD98");
    },
    Error,
    "EncodingError U+DD98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD99");
    },
    Error,
    "EncodingError U+DD99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD9A");
    },
    Error,
    "EncodingError U+DD9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD9B");
    },
    Error,
    "EncodingError U+DD9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD9C");
    },
    Error,
    "EncodingError U+DD9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD9D");
    },
    Error,
    "EncodingError U+DD9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD9E");
    },
    Error,
    "EncodingError U+DD9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD9F");
    },
    Error,
    "EncodingError U+DD9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA0");
    },
    Error,
    "EncodingError U+DDA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA1");
    },
    Error,
    "EncodingError U+DDA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA2");
    },
    Error,
    "EncodingError U+DDA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA3");
    },
    Error,
    "EncodingError U+DDA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA4");
    },
    Error,
    "EncodingError U+DDA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA5");
    },
    Error,
    "EncodingError U+DDA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA6");
    },
    Error,
    "EncodingError U+DDA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA7");
    },
    Error,
    "EncodingError U+DDA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA8");
    },
    Error,
    "EncodingError U+DDA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA9");
    },
    Error,
    "EncodingError U+DDA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDAA");
    },
    Error,
    "EncodingError U+DDAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDAB");
    },
    Error,
    "EncodingError U+DDAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDAC");
    },
    Error,
    "EncodingError U+DDAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDAD");
    },
    Error,
    "EncodingError U+DDAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDAE");
    },
    Error,
    "EncodingError U+DDAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDAF");
    },
    Error,
    "EncodingError U+DDAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB0");
    },
    Error,
    "EncodingError U+DDB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB1");
    },
    Error,
    "EncodingError U+DDB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB2");
    },
    Error,
    "EncodingError U+DDB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB3");
    },
    Error,
    "EncodingError U+DDB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB4");
    },
    Error,
    "EncodingError U+DDB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB5");
    },
    Error,
    "EncodingError U+DDB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB6");
    },
    Error,
    "EncodingError U+DDB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB7");
    },
    Error,
    "EncodingError U+DDB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB8");
    },
    Error,
    "EncodingError U+DDB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB9");
    },
    Error,
    "EncodingError U+DDB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDBA");
    },
    Error,
    "EncodingError U+DDBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDBB");
    },
    Error,
    "EncodingError U+DDBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDBC");
    },
    Error,
    "EncodingError U+DDBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDBD");
    },
    Error,
    "EncodingError U+DDBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDBE");
    },
    Error,
    "EncodingError U+DDBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDBF");
    },
    Error,
    "EncodingError U+DDBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC0");
    },
    Error,
    "EncodingError U+DDC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC1");
    },
    Error,
    "EncodingError U+DDC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC2");
    },
    Error,
    "EncodingError U+DDC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC3");
    },
    Error,
    "EncodingError U+DDC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC4");
    },
    Error,
    "EncodingError U+DDC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC5");
    },
    Error,
    "EncodingError U+DDC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC6");
    },
    Error,
    "EncodingError U+DDC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC7");
    },
    Error,
    "EncodingError U+DDC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC8");
    },
    Error,
    "EncodingError U+DDC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC9");
    },
    Error,
    "EncodingError U+DDC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDCA");
    },
    Error,
    "EncodingError U+DDCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDCB");
    },
    Error,
    "EncodingError U+DDCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDCC");
    },
    Error,
    "EncodingError U+DDCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDCD");
    },
    Error,
    "EncodingError U+DDCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDCE");
    },
    Error,
    "EncodingError U+DDCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDCF");
    },
    Error,
    "EncodingError U+DDCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD0");
    },
    Error,
    "EncodingError U+DDD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD1");
    },
    Error,
    "EncodingError U+DDD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD2");
    },
    Error,
    "EncodingError U+DDD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD3");
    },
    Error,
    "EncodingError U+DDD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD4");
    },
    Error,
    "EncodingError U+DDD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD5");
    },
    Error,
    "EncodingError U+DDD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD6");
    },
    Error,
    "EncodingError U+DDD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD7");
    },
    Error,
    "EncodingError U+DDD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD8");
    },
    Error,
    "EncodingError U+DDD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD9");
    },
    Error,
    "EncodingError U+DDD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDDA");
    },
    Error,
    "EncodingError U+DDDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDDB");
    },
    Error,
    "EncodingError U+DDDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDDC");
    },
    Error,
    "EncodingError U+DDDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDDD");
    },
    Error,
    "EncodingError U+DDDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDDE");
    },
    Error,
    "EncodingError U+DDDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDDF");
    },
    Error,
    "EncodingError U+DDDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE0");
    },
    Error,
    "EncodingError U+DDE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE1");
    },
    Error,
    "EncodingError U+DDE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE2");
    },
    Error,
    "EncodingError U+DDE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE3");
    },
    Error,
    "EncodingError U+DDE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE4");
    },
    Error,
    "EncodingError U+DDE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE5");
    },
    Error,
    "EncodingError U+DDE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE6");
    },
    Error,
    "EncodingError U+DDE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE7");
    },
    Error,
    "EncodingError U+DDE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE8");
    },
    Error,
    "EncodingError U+DDE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE9");
    },
    Error,
    "EncodingError U+DDE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDEA");
    },
    Error,
    "EncodingError U+DDEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDEB");
    },
    Error,
    "EncodingError U+DDEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDEC");
    },
    Error,
    "EncodingError U+DDEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDED");
    },
    Error,
    "EncodingError U+DDED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDEE");
    },
    Error,
    "EncodingError U+DDEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDEF");
    },
    Error,
    "EncodingError U+DDEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF0");
    },
    Error,
    "EncodingError U+DDF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF1");
    },
    Error,
    "EncodingError U+DDF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF2");
    },
    Error,
    "EncodingError U+DDF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF3");
    },
    Error,
    "EncodingError U+DDF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF4");
    },
    Error,
    "EncodingError U+DDF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF5");
    },
    Error,
    "EncodingError U+DDF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF6");
    },
    Error,
    "EncodingError U+DDF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF7");
    },
    Error,
    "EncodingError U+DDF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF8");
    },
    Error,
    "EncodingError U+DDF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF9");
    },
    Error,
    "EncodingError U+DDF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDFA");
    },
    Error,
    "EncodingError U+DDFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDFB");
    },
    Error,
    "EncodingError U+DDFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDFC");
    },
    Error,
    "EncodingError U+DDFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDFD");
    },
    Error,
    "EncodingError U+DDFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDFE");
    },
    Error,
    "EncodingError U+DDFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDFF");
    },
    Error,
    "EncodingError U+DDFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE00");
    },
    Error,
    "EncodingError U+DE00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE01");
    },
    Error,
    "EncodingError U+DE01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE02");
    },
    Error,
    "EncodingError U+DE02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE03");
    },
    Error,
    "EncodingError U+DE03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE04");
    },
    Error,
    "EncodingError U+DE04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE05");
    },
    Error,
    "EncodingError U+DE05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE06");
    },
    Error,
    "EncodingError U+DE06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE07");
    },
    Error,
    "EncodingError U+DE07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE08");
    },
    Error,
    "EncodingError U+DE08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE09");
    },
    Error,
    "EncodingError U+DE09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE0A");
    },
    Error,
    "EncodingError U+DE0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE0B");
    },
    Error,
    "EncodingError U+DE0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE0C");
    },
    Error,
    "EncodingError U+DE0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE0D");
    },
    Error,
    "EncodingError U+DE0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE0E");
    },
    Error,
    "EncodingError U+DE0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE0F");
    },
    Error,
    "EncodingError U+DE0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE10");
    },
    Error,
    "EncodingError U+DE10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE11");
    },
    Error,
    "EncodingError U+DE11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE12");
    },
    Error,
    "EncodingError U+DE12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE13");
    },
    Error,
    "EncodingError U+DE13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE14");
    },
    Error,
    "EncodingError U+DE14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE15");
    },
    Error,
    "EncodingError U+DE15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE16");
    },
    Error,
    "EncodingError U+DE16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE17");
    },
    Error,
    "EncodingError U+DE17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE18");
    },
    Error,
    "EncodingError U+DE18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE19");
    },
    Error,
    "EncodingError U+DE19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE1A");
    },
    Error,
    "EncodingError U+DE1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE1B");
    },
    Error,
    "EncodingError U+DE1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE1C");
    },
    Error,
    "EncodingError U+DE1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE1D");
    },
    Error,
    "EncodingError U+DE1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE1E");
    },
    Error,
    "EncodingError U+DE1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE1F");
    },
    Error,
    "EncodingError U+DE1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE20");
    },
    Error,
    "EncodingError U+DE20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE21");
    },
    Error,
    "EncodingError U+DE21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE22");
    },
    Error,
    "EncodingError U+DE22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE23");
    },
    Error,
    "EncodingError U+DE23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE24");
    },
    Error,
    "EncodingError U+DE24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE25");
    },
    Error,
    "EncodingError U+DE25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE26");
    },
    Error,
    "EncodingError U+DE26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE27");
    },
    Error,
    "EncodingError U+DE27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE28");
    },
    Error,
    "EncodingError U+DE28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE29");
    },
    Error,
    "EncodingError U+DE29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE2A");
    },
    Error,
    "EncodingError U+DE2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE2B");
    },
    Error,
    "EncodingError U+DE2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE2C");
    },
    Error,
    "EncodingError U+DE2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE2D");
    },
    Error,
    "EncodingError U+DE2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE2E");
    },
    Error,
    "EncodingError U+DE2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE2F");
    },
    Error,
    "EncodingError U+DE2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE30");
    },
    Error,
    "EncodingError U+DE30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE31");
    },
    Error,
    "EncodingError U+DE31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE32");
    },
    Error,
    "EncodingError U+DE32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE33");
    },
    Error,
    "EncodingError U+DE33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE34");
    },
    Error,
    "EncodingError U+DE34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE35");
    },
    Error,
    "EncodingError U+DE35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE36");
    },
    Error,
    "EncodingError U+DE36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE37");
    },
    Error,
    "EncodingError U+DE37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE38");
    },
    Error,
    "EncodingError U+DE38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE39");
    },
    Error,
    "EncodingError U+DE39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE3A");
    },
    Error,
    "EncodingError U+DE3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE3B");
    },
    Error,
    "EncodingError U+DE3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE3C");
    },
    Error,
    "EncodingError U+DE3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE3D");
    },
    Error,
    "EncodingError U+DE3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE3E");
    },
    Error,
    "EncodingError U+DE3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE3F");
    },
    Error,
    "EncodingError U+DE3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE40");
    },
    Error,
    "EncodingError U+DE40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE41");
    },
    Error,
    "EncodingError U+DE41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE42");
    },
    Error,
    "EncodingError U+DE42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE43");
    },
    Error,
    "EncodingError U+DE43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE44");
    },
    Error,
    "EncodingError U+DE44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE45");
    },
    Error,
    "EncodingError U+DE45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE46");
    },
    Error,
    "EncodingError U+DE46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE47");
    },
    Error,
    "EncodingError U+DE47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE48");
    },
    Error,
    "EncodingError U+DE48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE49");
    },
    Error,
    "EncodingError U+DE49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE4A");
    },
    Error,
    "EncodingError U+DE4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE4B");
    },
    Error,
    "EncodingError U+DE4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE4C");
    },
    Error,
    "EncodingError U+DE4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE4D");
    },
    Error,
    "EncodingError U+DE4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE4E");
    },
    Error,
    "EncodingError U+DE4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE4F");
    },
    Error,
    "EncodingError U+DE4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE50");
    },
    Error,
    "EncodingError U+DE50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE51");
    },
    Error,
    "EncodingError U+DE51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE52");
    },
    Error,
    "EncodingError U+DE52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE53");
    },
    Error,
    "EncodingError U+DE53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE54");
    },
    Error,
    "EncodingError U+DE54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE55");
    },
    Error,
    "EncodingError U+DE55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE56");
    },
    Error,
    "EncodingError U+DE56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE57");
    },
    Error,
    "EncodingError U+DE57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE58");
    },
    Error,
    "EncodingError U+DE58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE59");
    },
    Error,
    "EncodingError U+DE59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE5A");
    },
    Error,
    "EncodingError U+DE5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE5B");
    },
    Error,
    "EncodingError U+DE5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE5C");
    },
    Error,
    "EncodingError U+DE5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE5D");
    },
    Error,
    "EncodingError U+DE5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE5E");
    },
    Error,
    "EncodingError U+DE5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE5F");
    },
    Error,
    "EncodingError U+DE5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE60");
    },
    Error,
    "EncodingError U+DE60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE61");
    },
    Error,
    "EncodingError U+DE61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE62");
    },
    Error,
    "EncodingError U+DE62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE63");
    },
    Error,
    "EncodingError U+DE63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE64");
    },
    Error,
    "EncodingError U+DE64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE65");
    },
    Error,
    "EncodingError U+DE65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE66");
    },
    Error,
    "EncodingError U+DE66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE67");
    },
    Error,
    "EncodingError U+DE67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE68");
    },
    Error,
    "EncodingError U+DE68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE69");
    },
    Error,
    "EncodingError U+DE69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE6A");
    },
    Error,
    "EncodingError U+DE6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE6B");
    },
    Error,
    "EncodingError U+DE6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE6C");
    },
    Error,
    "EncodingError U+DE6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE6D");
    },
    Error,
    "EncodingError U+DE6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE6E");
    },
    Error,
    "EncodingError U+DE6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE6F");
    },
    Error,
    "EncodingError U+DE6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE70");
    },
    Error,
    "EncodingError U+DE70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE71");
    },
    Error,
    "EncodingError U+DE71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE72");
    },
    Error,
    "EncodingError U+DE72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE73");
    },
    Error,
    "EncodingError U+DE73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE74");
    },
    Error,
    "EncodingError U+DE74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE75");
    },
    Error,
    "EncodingError U+DE75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE76");
    },
    Error,
    "EncodingError U+DE76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE77");
    },
    Error,
    "EncodingError U+DE77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE78");
    },
    Error,
    "EncodingError U+DE78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE79");
    },
    Error,
    "EncodingError U+DE79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE7A");
    },
    Error,
    "EncodingError U+DE7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE7B");
    },
    Error,
    "EncodingError U+DE7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE7C");
    },
    Error,
    "EncodingError U+DE7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE7D");
    },
    Error,
    "EncodingError U+DE7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE7E");
    },
    Error,
    "EncodingError U+DE7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE7F");
    },
    Error,
    "EncodingError U+DE7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE80");
    },
    Error,
    "EncodingError U+DE80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE81");
    },
    Error,
    "EncodingError U+DE81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE82");
    },
    Error,
    "EncodingError U+DE82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE83");
    },
    Error,
    "EncodingError U+DE83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE84");
    },
    Error,
    "EncodingError U+DE84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE85");
    },
    Error,
    "EncodingError U+DE85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE86");
    },
    Error,
    "EncodingError U+DE86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE87");
    },
    Error,
    "EncodingError U+DE87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE88");
    },
    Error,
    "EncodingError U+DE88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE89");
    },
    Error,
    "EncodingError U+DE89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE8A");
    },
    Error,
    "EncodingError U+DE8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE8B");
    },
    Error,
    "EncodingError U+DE8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE8C");
    },
    Error,
    "EncodingError U+DE8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE8D");
    },
    Error,
    "EncodingError U+DE8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE8E");
    },
    Error,
    "EncodingError U+DE8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE8F");
    },
    Error,
    "EncodingError U+DE8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE90");
    },
    Error,
    "EncodingError U+DE90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE91");
    },
    Error,
    "EncodingError U+DE91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE92");
    },
    Error,
    "EncodingError U+DE92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE93");
    },
    Error,
    "EncodingError U+DE93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE94");
    },
    Error,
    "EncodingError U+DE94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE95");
    },
    Error,
    "EncodingError U+DE95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE96");
    },
    Error,
    "EncodingError U+DE96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE97");
    },
    Error,
    "EncodingError U+DE97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE98");
    },
    Error,
    "EncodingError U+DE98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE99");
    },
    Error,
    "EncodingError U+DE99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE9A");
    },
    Error,
    "EncodingError U+DE9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE9B");
    },
    Error,
    "EncodingError U+DE9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE9C");
    },
    Error,
    "EncodingError U+DE9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE9D");
    },
    Error,
    "EncodingError U+DE9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE9E");
    },
    Error,
    "EncodingError U+DE9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE9F");
    },
    Error,
    "EncodingError U+DE9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA0");
    },
    Error,
    "EncodingError U+DEA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA1");
    },
    Error,
    "EncodingError U+DEA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA2");
    },
    Error,
    "EncodingError U+DEA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA3");
    },
    Error,
    "EncodingError U+DEA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA4");
    },
    Error,
    "EncodingError U+DEA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA5");
    },
    Error,
    "EncodingError U+DEA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA6");
    },
    Error,
    "EncodingError U+DEA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA7");
    },
    Error,
    "EncodingError U+DEA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA8");
    },
    Error,
    "EncodingError U+DEA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA9");
    },
    Error,
    "EncodingError U+DEA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEAA");
    },
    Error,
    "EncodingError U+DEAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEAB");
    },
    Error,
    "EncodingError U+DEAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEAC");
    },
    Error,
    "EncodingError U+DEAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEAD");
    },
    Error,
    "EncodingError U+DEAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEAE");
    },
    Error,
    "EncodingError U+DEAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEAF");
    },
    Error,
    "EncodingError U+DEAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB0");
    },
    Error,
    "EncodingError U+DEB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB1");
    },
    Error,
    "EncodingError U+DEB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB2");
    },
    Error,
    "EncodingError U+DEB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB3");
    },
    Error,
    "EncodingError U+DEB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB4");
    },
    Error,
    "EncodingError U+DEB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB5");
    },
    Error,
    "EncodingError U+DEB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB6");
    },
    Error,
    "EncodingError U+DEB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB7");
    },
    Error,
    "EncodingError U+DEB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB8");
    },
    Error,
    "EncodingError U+DEB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB9");
    },
    Error,
    "EncodingError U+DEB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEBA");
    },
    Error,
    "EncodingError U+DEBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEBB");
    },
    Error,
    "EncodingError U+DEBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEBC");
    },
    Error,
    "EncodingError U+DEBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEBD");
    },
    Error,
    "EncodingError U+DEBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEBE");
    },
    Error,
    "EncodingError U+DEBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEBF");
    },
    Error,
    "EncodingError U+DEBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC0");
    },
    Error,
    "EncodingError U+DEC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC1");
    },
    Error,
    "EncodingError U+DEC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC2");
    },
    Error,
    "EncodingError U+DEC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC3");
    },
    Error,
    "EncodingError U+DEC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC4");
    },
    Error,
    "EncodingError U+DEC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC5");
    },
    Error,
    "EncodingError U+DEC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC6");
    },
    Error,
    "EncodingError U+DEC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC7");
    },
    Error,
    "EncodingError U+DEC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC8");
    },
    Error,
    "EncodingError U+DEC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC9");
    },
    Error,
    "EncodingError U+DEC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDECA");
    },
    Error,
    "EncodingError U+DECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDECB");
    },
    Error,
    "EncodingError U+DECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDECC");
    },
    Error,
    "EncodingError U+DECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDECD");
    },
    Error,
    "EncodingError U+DECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDECE");
    },
    Error,
    "EncodingError U+DECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDECF");
    },
    Error,
    "EncodingError U+DECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED0");
    },
    Error,
    "EncodingError U+DED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED1");
    },
    Error,
    "EncodingError U+DED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED2");
    },
    Error,
    "EncodingError U+DED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED3");
    },
    Error,
    "EncodingError U+DED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED4");
    },
    Error,
    "EncodingError U+DED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED5");
    },
    Error,
    "EncodingError U+DED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED6");
    },
    Error,
    "EncodingError U+DED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED7");
    },
    Error,
    "EncodingError U+DED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED8");
    },
    Error,
    "EncodingError U+DED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED9");
    },
    Error,
    "EncodingError U+DED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEDA");
    },
    Error,
    "EncodingError U+DEDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEDB");
    },
    Error,
    "EncodingError U+DEDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEDC");
    },
    Error,
    "EncodingError U+DEDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEDD");
    },
    Error,
    "EncodingError U+DEDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEDE");
    },
    Error,
    "EncodingError U+DEDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEDF");
    },
    Error,
    "EncodingError U+DEDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE0");
    },
    Error,
    "EncodingError U+DEE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE1");
    },
    Error,
    "EncodingError U+DEE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE2");
    },
    Error,
    "EncodingError U+DEE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE3");
    },
    Error,
    "EncodingError U+DEE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE4");
    },
    Error,
    "EncodingError U+DEE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE5");
    },
    Error,
    "EncodingError U+DEE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE6");
    },
    Error,
    "EncodingError U+DEE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE7");
    },
    Error,
    "EncodingError U+DEE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE8");
    },
    Error,
    "EncodingError U+DEE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE9");
    },
    Error,
    "EncodingError U+DEE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEEA");
    },
    Error,
    "EncodingError U+DEEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEEB");
    },
    Error,
    "EncodingError U+DEEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEEC");
    },
    Error,
    "EncodingError U+DEEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEED");
    },
    Error,
    "EncodingError U+DEED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEEE");
    },
    Error,
    "EncodingError U+DEEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEEF");
    },
    Error,
    "EncodingError U+DEEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF0");
    },
    Error,
    "EncodingError U+DEF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF1");
    },
    Error,
    "EncodingError U+DEF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF2");
    },
    Error,
    "EncodingError U+DEF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF3");
    },
    Error,
    "EncodingError U+DEF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF4");
    },
    Error,
    "EncodingError U+DEF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF5");
    },
    Error,
    "EncodingError U+DEF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF6");
    },
    Error,
    "EncodingError U+DEF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF7");
    },
    Error,
    "EncodingError U+DEF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF8");
    },
    Error,
    "EncodingError U+DEF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF9");
    },
    Error,
    "EncodingError U+DEF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEFA");
    },
    Error,
    "EncodingError U+DEFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEFB");
    },
    Error,
    "EncodingError U+DEFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEFC");
    },
    Error,
    "EncodingError U+DEFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEFD");
    },
    Error,
    "EncodingError U+DEFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEFE");
    },
    Error,
    "EncodingError U+DEFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEFF");
    },
    Error,
    "EncodingError U+DEFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF00");
    },
    Error,
    "EncodingError U+DF00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF01");
    },
    Error,
    "EncodingError U+DF01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF02");
    },
    Error,
    "EncodingError U+DF02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF03");
    },
    Error,
    "EncodingError U+DF03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF04");
    },
    Error,
    "EncodingError U+DF04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF05");
    },
    Error,
    "EncodingError U+DF05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF06");
    },
    Error,
    "EncodingError U+DF06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF07");
    },
    Error,
    "EncodingError U+DF07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF08");
    },
    Error,
    "EncodingError U+DF08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF09");
    },
    Error,
    "EncodingError U+DF09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF0A");
    },
    Error,
    "EncodingError U+DF0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF0B");
    },
    Error,
    "EncodingError U+DF0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF0C");
    },
    Error,
    "EncodingError U+DF0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF0D");
    },
    Error,
    "EncodingError U+DF0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF0E");
    },
    Error,
    "EncodingError U+DF0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF0F");
    },
    Error,
    "EncodingError U+DF0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF10");
    },
    Error,
    "EncodingError U+DF10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF11");
    },
    Error,
    "EncodingError U+DF11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF12");
    },
    Error,
    "EncodingError U+DF12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF13");
    },
    Error,
    "EncodingError U+DF13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF14");
    },
    Error,
    "EncodingError U+DF14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF15");
    },
    Error,
    "EncodingError U+DF15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF16");
    },
    Error,
    "EncodingError U+DF16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF17");
    },
    Error,
    "EncodingError U+DF17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF18");
    },
    Error,
    "EncodingError U+DF18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF19");
    },
    Error,
    "EncodingError U+DF19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF1A");
    },
    Error,
    "EncodingError U+DF1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF1B");
    },
    Error,
    "EncodingError U+DF1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF1C");
    },
    Error,
    "EncodingError U+DF1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF1D");
    },
    Error,
    "EncodingError U+DF1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF1E");
    },
    Error,
    "EncodingError U+DF1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF1F");
    },
    Error,
    "EncodingError U+DF1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF20");
    },
    Error,
    "EncodingError U+DF20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF21");
    },
    Error,
    "EncodingError U+DF21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF22");
    },
    Error,
    "EncodingError U+DF22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF23");
    },
    Error,
    "EncodingError U+DF23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF24");
    },
    Error,
    "EncodingError U+DF24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF25");
    },
    Error,
    "EncodingError U+DF25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF26");
    },
    Error,
    "EncodingError U+DF26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF27");
    },
    Error,
    "EncodingError U+DF27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF28");
    },
    Error,
    "EncodingError U+DF28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF29");
    },
    Error,
    "EncodingError U+DF29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF2A");
    },
    Error,
    "EncodingError U+DF2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF2B");
    },
    Error,
    "EncodingError U+DF2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF2C");
    },
    Error,
    "EncodingError U+DF2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF2D");
    },
    Error,
    "EncodingError U+DF2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF2E");
    },
    Error,
    "EncodingError U+DF2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF2F");
    },
    Error,
    "EncodingError U+DF2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF30");
    },
    Error,
    "EncodingError U+DF30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF31");
    },
    Error,
    "EncodingError U+DF31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF32");
    },
    Error,
    "EncodingError U+DF32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF33");
    },
    Error,
    "EncodingError U+DF33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF34");
    },
    Error,
    "EncodingError U+DF34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF35");
    },
    Error,
    "EncodingError U+DF35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF36");
    },
    Error,
    "EncodingError U+DF36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF37");
    },
    Error,
    "EncodingError U+DF37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF38");
    },
    Error,
    "EncodingError U+DF38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF39");
    },
    Error,
    "EncodingError U+DF39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF3A");
    },
    Error,
    "EncodingError U+DF3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF3B");
    },
    Error,
    "EncodingError U+DF3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF3C");
    },
    Error,
    "EncodingError U+DF3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF3D");
    },
    Error,
    "EncodingError U+DF3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF3E");
    },
    Error,
    "EncodingError U+DF3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF3F");
    },
    Error,
    "EncodingError U+DF3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF40");
    },
    Error,
    "EncodingError U+DF40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF41");
    },
    Error,
    "EncodingError U+DF41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF42");
    },
    Error,
    "EncodingError U+DF42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF43");
    },
    Error,
    "EncodingError U+DF43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF44");
    },
    Error,
    "EncodingError U+DF44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF45");
    },
    Error,
    "EncodingError U+DF45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF46");
    },
    Error,
    "EncodingError U+DF46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF47");
    },
    Error,
    "EncodingError U+DF47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF48");
    },
    Error,
    "EncodingError U+DF48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF49");
    },
    Error,
    "EncodingError U+DF49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF4A");
    },
    Error,
    "EncodingError U+DF4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF4B");
    },
    Error,
    "EncodingError U+DF4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF4C");
    },
    Error,
    "EncodingError U+DF4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF4D");
    },
    Error,
    "EncodingError U+DF4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF4E");
    },
    Error,
    "EncodingError U+DF4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF4F");
    },
    Error,
    "EncodingError U+DF4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF50");
    },
    Error,
    "EncodingError U+DF50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF51");
    },
    Error,
    "EncodingError U+DF51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF52");
    },
    Error,
    "EncodingError U+DF52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF53");
    },
    Error,
    "EncodingError U+DF53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF54");
    },
    Error,
    "EncodingError U+DF54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF55");
    },
    Error,
    "EncodingError U+DF55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF56");
    },
    Error,
    "EncodingError U+DF56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF57");
    },
    Error,
    "EncodingError U+DF57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF58");
    },
    Error,
    "EncodingError U+DF58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF59");
    },
    Error,
    "EncodingError U+DF59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF5A");
    },
    Error,
    "EncodingError U+DF5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF5B");
    },
    Error,
    "EncodingError U+DF5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF5C");
    },
    Error,
    "EncodingError U+DF5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF5D");
    },
    Error,
    "EncodingError U+DF5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF5E");
    },
    Error,
    "EncodingError U+DF5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF5F");
    },
    Error,
    "EncodingError U+DF5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF60");
    },
    Error,
    "EncodingError U+DF60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF61");
    },
    Error,
    "EncodingError U+DF61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF62");
    },
    Error,
    "EncodingError U+DF62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF63");
    },
    Error,
    "EncodingError U+DF63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF64");
    },
    Error,
    "EncodingError U+DF64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF65");
    },
    Error,
    "EncodingError U+DF65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF66");
    },
    Error,
    "EncodingError U+DF66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF67");
    },
    Error,
    "EncodingError U+DF67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF68");
    },
    Error,
    "EncodingError U+DF68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF69");
    },
    Error,
    "EncodingError U+DF69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF6A");
    },
    Error,
    "EncodingError U+DF6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF6B");
    },
    Error,
    "EncodingError U+DF6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF6C");
    },
    Error,
    "EncodingError U+DF6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF6D");
    },
    Error,
    "EncodingError U+DF6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF6E");
    },
    Error,
    "EncodingError U+DF6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF6F");
    },
    Error,
    "EncodingError U+DF6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF70");
    },
    Error,
    "EncodingError U+DF70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF71");
    },
    Error,
    "EncodingError U+DF71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF72");
    },
    Error,
    "EncodingError U+DF72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF73");
    },
    Error,
    "EncodingError U+DF73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF74");
    },
    Error,
    "EncodingError U+DF74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF75");
    },
    Error,
    "EncodingError U+DF75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF76");
    },
    Error,
    "EncodingError U+DF76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF77");
    },
    Error,
    "EncodingError U+DF77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF78");
    },
    Error,
    "EncodingError U+DF78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF79");
    },
    Error,
    "EncodingError U+DF79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF7A");
    },
    Error,
    "EncodingError U+DF7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF7B");
    },
    Error,
    "EncodingError U+DF7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF7C");
    },
    Error,
    "EncodingError U+DF7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF7D");
    },
    Error,
    "EncodingError U+DF7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF7E");
    },
    Error,
    "EncodingError U+DF7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF7F");
    },
    Error,
    "EncodingError U+DF7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF80");
    },
    Error,
    "EncodingError U+DF80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF81");
    },
    Error,
    "EncodingError U+DF81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF82");
    },
    Error,
    "EncodingError U+DF82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF83");
    },
    Error,
    "EncodingError U+DF83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF84");
    },
    Error,
    "EncodingError U+DF84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF85");
    },
    Error,
    "EncodingError U+DF85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF86");
    },
    Error,
    "EncodingError U+DF86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF87");
    },
    Error,
    "EncodingError U+DF87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF88");
    },
    Error,
    "EncodingError U+DF88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF89");
    },
    Error,
    "EncodingError U+DF89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF8A");
    },
    Error,
    "EncodingError U+DF8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF8B");
    },
    Error,
    "EncodingError U+DF8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF8C");
    },
    Error,
    "EncodingError U+DF8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF8D");
    },
    Error,
    "EncodingError U+DF8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF8E");
    },
    Error,
    "EncodingError U+DF8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF8F");
    },
    Error,
    "EncodingError U+DF8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF90");
    },
    Error,
    "EncodingError U+DF90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF91");
    },
    Error,
    "EncodingError U+DF91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF92");
    },
    Error,
    "EncodingError U+DF92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF93");
    },
    Error,
    "EncodingError U+DF93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF94");
    },
    Error,
    "EncodingError U+DF94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF95");
    },
    Error,
    "EncodingError U+DF95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF96");
    },
    Error,
    "EncodingError U+DF96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF97");
    },
    Error,
    "EncodingError U+DF97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF98");
    },
    Error,
    "EncodingError U+DF98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF99");
    },
    Error,
    "EncodingError U+DF99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF9A");
    },
    Error,
    "EncodingError U+DF9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF9B");
    },
    Error,
    "EncodingError U+DF9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF9C");
    },
    Error,
    "EncodingError U+DF9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF9D");
    },
    Error,
    "EncodingError U+DF9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF9E");
    },
    Error,
    "EncodingError U+DF9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF9F");
    },
    Error,
    "EncodingError U+DF9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA0");
    },
    Error,
    "EncodingError U+DFA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA1");
    },
    Error,
    "EncodingError U+DFA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA2");
    },
    Error,
    "EncodingError U+DFA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA3");
    },
    Error,
    "EncodingError U+DFA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA4");
    },
    Error,
    "EncodingError U+DFA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA5");
    },
    Error,
    "EncodingError U+DFA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA6");
    },
    Error,
    "EncodingError U+DFA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA7");
    },
    Error,
    "EncodingError U+DFA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA8");
    },
    Error,
    "EncodingError U+DFA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA9");
    },
    Error,
    "EncodingError U+DFA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFAA");
    },
    Error,
    "EncodingError U+DFAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFAB");
    },
    Error,
    "EncodingError U+DFAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFAC");
    },
    Error,
    "EncodingError U+DFAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFAD");
    },
    Error,
    "EncodingError U+DFAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFAE");
    },
    Error,
    "EncodingError U+DFAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFAF");
    },
    Error,
    "EncodingError U+DFAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB0");
    },
    Error,
    "EncodingError U+DFB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB1");
    },
    Error,
    "EncodingError U+DFB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB2");
    },
    Error,
    "EncodingError U+DFB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB3");
    },
    Error,
    "EncodingError U+DFB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB4");
    },
    Error,
    "EncodingError U+DFB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB5");
    },
    Error,
    "EncodingError U+DFB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB6");
    },
    Error,
    "EncodingError U+DFB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB7");
    },
    Error,
    "EncodingError U+DFB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB8");
    },
    Error,
    "EncodingError U+DFB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB9");
    },
    Error,
    "EncodingError U+DFB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFBA");
    },
    Error,
    "EncodingError U+DFBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFBB");
    },
    Error,
    "EncodingError U+DFBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFBC");
    },
    Error,
    "EncodingError U+DFBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFBD");
    },
    Error,
    "EncodingError U+DFBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFBE");
    },
    Error,
    "EncodingError U+DFBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFBF");
    },
    Error,
    "EncodingError U+DFBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC0");
    },
    Error,
    "EncodingError U+DFC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC1");
    },
    Error,
    "EncodingError U+DFC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC2");
    },
    Error,
    "EncodingError U+DFC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC3");
    },
    Error,
    "EncodingError U+DFC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC4");
    },
    Error,
    "EncodingError U+DFC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC5");
    },
    Error,
    "EncodingError U+DFC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC6");
    },
    Error,
    "EncodingError U+DFC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC7");
    },
    Error,
    "EncodingError U+DFC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC8");
    },
    Error,
    "EncodingError U+DFC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC9");
    },
    Error,
    "EncodingError U+DFC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFCA");
    },
    Error,
    "EncodingError U+DFCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFCB");
    },
    Error,
    "EncodingError U+DFCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFCC");
    },
    Error,
    "EncodingError U+DFCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFCD");
    },
    Error,
    "EncodingError U+DFCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFCE");
    },
    Error,
    "EncodingError U+DFCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFCF");
    },
    Error,
    "EncodingError U+DFCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD0");
    },
    Error,
    "EncodingError U+DFD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD1");
    },
    Error,
    "EncodingError U+DFD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD2");
    },
    Error,
    "EncodingError U+DFD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD3");
    },
    Error,
    "EncodingError U+DFD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD4");
    },
    Error,
    "EncodingError U+DFD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD5");
    },
    Error,
    "EncodingError U+DFD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD6");
    },
    Error,
    "EncodingError U+DFD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD7");
    },
    Error,
    "EncodingError U+DFD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD8");
    },
    Error,
    "EncodingError U+DFD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD9");
    },
    Error,
    "EncodingError U+DFD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFDA");
    },
    Error,
    "EncodingError U+DFDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFDB");
    },
    Error,
    "EncodingError U+DFDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFDC");
    },
    Error,
    "EncodingError U+DFDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFDD");
    },
    Error,
    "EncodingError U+DFDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFDE");
    },
    Error,
    "EncodingError U+DFDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFDF");
    },
    Error,
    "EncodingError U+DFDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE0");
    },
    Error,
    "EncodingError U+DFE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE1");
    },
    Error,
    "EncodingError U+DFE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE2");
    },
    Error,
    "EncodingError U+DFE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE3");
    },
    Error,
    "EncodingError U+DFE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE4");
    },
    Error,
    "EncodingError U+DFE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE5");
    },
    Error,
    "EncodingError U+DFE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE6");
    },
    Error,
    "EncodingError U+DFE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE7");
    },
    Error,
    "EncodingError U+DFE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE8");
    },
    Error,
    "EncodingError U+DFE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE9");
    },
    Error,
    "EncodingError U+DFE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFEA");
    },
    Error,
    "EncodingError U+DFEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFEB");
    },
    Error,
    "EncodingError U+DFEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFEC");
    },
    Error,
    "EncodingError U+DFEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFED");
    },
    Error,
    "EncodingError U+DFED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFEE");
    },
    Error,
    "EncodingError U+DFEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFEF");
    },
    Error,
    "EncodingError U+DFEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF0");
    },
    Error,
    "EncodingError U+DFF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF1");
    },
    Error,
    "EncodingError U+DFF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF2");
    },
    Error,
    "EncodingError U+DFF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF3");
    },
    Error,
    "EncodingError U+DFF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF4");
    },
    Error,
    "EncodingError U+DFF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF5");
    },
    Error,
    "EncodingError U+DFF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF6");
    },
    Error,
    "EncodingError U+DFF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF7");
    },
    Error,
    "EncodingError U+DFF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF8");
    },
    Error,
    "EncodingError U+DFF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF9");
    },
    Error,
    "EncodingError U+DFF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFFA");
    },
    Error,
    "EncodingError U+DFFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFFB");
    },
    Error,
    "EncodingError U+DFFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFFC");
    },
    Error,
    "EncodingError U+DFFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFFD");
    },
    Error,
    "EncodingError U+DFFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFFE");
    },
    Error,
    "EncodingError U+DFFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFFF");
    },
    Error,
    "EncodingError U+DFFF",
  );
});
