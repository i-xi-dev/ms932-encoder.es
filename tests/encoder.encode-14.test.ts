import { assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+D000-U+DFFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  assertThrows(
    () => {
      ms932Encoder.encode("\uD000");
    },
    Error,
    "encode-error: U+D000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD001");
    },
    Error,
    "encode-error: U+D001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD002");
    },
    Error,
    "encode-error: U+D002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD003");
    },
    Error,
    "encode-error: U+D003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD004");
    },
    Error,
    "encode-error: U+D004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD005");
    },
    Error,
    "encode-error: U+D005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD006");
    },
    Error,
    "encode-error: U+D006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD007");
    },
    Error,
    "encode-error: U+D007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD008");
    },
    Error,
    "encode-error: U+D008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD009");
    },
    Error,
    "encode-error: U+D009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD00A");
    },
    Error,
    "encode-error: U+D00A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD00B");
    },
    Error,
    "encode-error: U+D00B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD00C");
    },
    Error,
    "encode-error: U+D00C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD00D");
    },
    Error,
    "encode-error: U+D00D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD00E");
    },
    Error,
    "encode-error: U+D00E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD00F");
    },
    Error,
    "encode-error: U+D00F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD010");
    },
    Error,
    "encode-error: U+D010",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD011");
    },
    Error,
    "encode-error: U+D011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD012");
    },
    Error,
    "encode-error: U+D012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD013");
    },
    Error,
    "encode-error: U+D013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD014");
    },
    Error,
    "encode-error: U+D014",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD015");
    },
    Error,
    "encode-error: U+D015",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD016");
    },
    Error,
    "encode-error: U+D016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD017");
    },
    Error,
    "encode-error: U+D017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD018");
    },
    Error,
    "encode-error: U+D018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD019");
    },
    Error,
    "encode-error: U+D019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD01A");
    },
    Error,
    "encode-error: U+D01A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD01B");
    },
    Error,
    "encode-error: U+D01B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD01C");
    },
    Error,
    "encode-error: U+D01C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD01D");
    },
    Error,
    "encode-error: U+D01D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD01E");
    },
    Error,
    "encode-error: U+D01E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD01F");
    },
    Error,
    "encode-error: U+D01F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD020");
    },
    Error,
    "encode-error: U+D020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD021");
    },
    Error,
    "encode-error: U+D021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD022");
    },
    Error,
    "encode-error: U+D022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD023");
    },
    Error,
    "encode-error: U+D023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD024");
    },
    Error,
    "encode-error: U+D024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD025");
    },
    Error,
    "encode-error: U+D025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD026");
    },
    Error,
    "encode-error: U+D026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD027");
    },
    Error,
    "encode-error: U+D027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD028");
    },
    Error,
    "encode-error: U+D028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD029");
    },
    Error,
    "encode-error: U+D029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD02A");
    },
    Error,
    "encode-error: U+D02A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD02B");
    },
    Error,
    "encode-error: U+D02B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD02C");
    },
    Error,
    "encode-error: U+D02C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD02D");
    },
    Error,
    "encode-error: U+D02D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD02E");
    },
    Error,
    "encode-error: U+D02E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD02F");
    },
    Error,
    "encode-error: U+D02F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD030");
    },
    Error,
    "encode-error: U+D030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD031");
    },
    Error,
    "encode-error: U+D031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD032");
    },
    Error,
    "encode-error: U+D032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD033");
    },
    Error,
    "encode-error: U+D033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD034");
    },
    Error,
    "encode-error: U+D034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD035");
    },
    Error,
    "encode-error: U+D035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD036");
    },
    Error,
    "encode-error: U+D036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD037");
    },
    Error,
    "encode-error: U+D037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD038");
    },
    Error,
    "encode-error: U+D038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD039");
    },
    Error,
    "encode-error: U+D039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD03A");
    },
    Error,
    "encode-error: U+D03A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD03B");
    },
    Error,
    "encode-error: U+D03B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD03C");
    },
    Error,
    "encode-error: U+D03C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD03D");
    },
    Error,
    "encode-error: U+D03D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD03E");
    },
    Error,
    "encode-error: U+D03E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD03F");
    },
    Error,
    "encode-error: U+D03F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD040");
    },
    Error,
    "encode-error: U+D040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD041");
    },
    Error,
    "encode-error: U+D041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD042");
    },
    Error,
    "encode-error: U+D042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD043");
    },
    Error,
    "encode-error: U+D043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD044");
    },
    Error,
    "encode-error: U+D044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD045");
    },
    Error,
    "encode-error: U+D045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD046");
    },
    Error,
    "encode-error: U+D046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD047");
    },
    Error,
    "encode-error: U+D047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD048");
    },
    Error,
    "encode-error: U+D048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD049");
    },
    Error,
    "encode-error: U+D049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD04A");
    },
    Error,
    "encode-error: U+D04A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD04B");
    },
    Error,
    "encode-error: U+D04B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD04C");
    },
    Error,
    "encode-error: U+D04C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD04D");
    },
    Error,
    "encode-error: U+D04D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD04E");
    },
    Error,
    "encode-error: U+D04E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD04F");
    },
    Error,
    "encode-error: U+D04F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD050");
    },
    Error,
    "encode-error: U+D050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD051");
    },
    Error,
    "encode-error: U+D051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD052");
    },
    Error,
    "encode-error: U+D052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD053");
    },
    Error,
    "encode-error: U+D053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD054");
    },
    Error,
    "encode-error: U+D054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD055");
    },
    Error,
    "encode-error: U+D055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD056");
    },
    Error,
    "encode-error: U+D056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD057");
    },
    Error,
    "encode-error: U+D057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD058");
    },
    Error,
    "encode-error: U+D058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD059");
    },
    Error,
    "encode-error: U+D059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD05A");
    },
    Error,
    "encode-error: U+D05A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD05B");
    },
    Error,
    "encode-error: U+D05B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD05C");
    },
    Error,
    "encode-error: U+D05C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD05D");
    },
    Error,
    "encode-error: U+D05D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD05E");
    },
    Error,
    "encode-error: U+D05E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD05F");
    },
    Error,
    "encode-error: U+D05F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD060");
    },
    Error,
    "encode-error: U+D060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD061");
    },
    Error,
    "encode-error: U+D061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD062");
    },
    Error,
    "encode-error: U+D062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD063");
    },
    Error,
    "encode-error: U+D063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD064");
    },
    Error,
    "encode-error: U+D064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD065");
    },
    Error,
    "encode-error: U+D065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD066");
    },
    Error,
    "encode-error: U+D066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD067");
    },
    Error,
    "encode-error: U+D067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD068");
    },
    Error,
    "encode-error: U+D068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD069");
    },
    Error,
    "encode-error: U+D069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD06A");
    },
    Error,
    "encode-error: U+D06A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD06B");
    },
    Error,
    "encode-error: U+D06B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD06C");
    },
    Error,
    "encode-error: U+D06C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD06D");
    },
    Error,
    "encode-error: U+D06D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD06E");
    },
    Error,
    "encode-error: U+D06E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD06F");
    },
    Error,
    "encode-error: U+D06F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD070");
    },
    Error,
    "encode-error: U+D070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD071");
    },
    Error,
    "encode-error: U+D071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD072");
    },
    Error,
    "encode-error: U+D072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD073");
    },
    Error,
    "encode-error: U+D073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD074");
    },
    Error,
    "encode-error: U+D074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD075");
    },
    Error,
    "encode-error: U+D075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD076");
    },
    Error,
    "encode-error: U+D076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD077");
    },
    Error,
    "encode-error: U+D077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD078");
    },
    Error,
    "encode-error: U+D078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD079");
    },
    Error,
    "encode-error: U+D079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD07A");
    },
    Error,
    "encode-error: U+D07A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD07B");
    },
    Error,
    "encode-error: U+D07B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD07C");
    },
    Error,
    "encode-error: U+D07C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD07D");
    },
    Error,
    "encode-error: U+D07D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD07E");
    },
    Error,
    "encode-error: U+D07E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD07F");
    },
    Error,
    "encode-error: U+D07F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD080");
    },
    Error,
    "encode-error: U+D080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD081");
    },
    Error,
    "encode-error: U+D081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD082");
    },
    Error,
    "encode-error: U+D082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD083");
    },
    Error,
    "encode-error: U+D083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD084");
    },
    Error,
    "encode-error: U+D084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD085");
    },
    Error,
    "encode-error: U+D085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD086");
    },
    Error,
    "encode-error: U+D086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD087");
    },
    Error,
    "encode-error: U+D087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD088");
    },
    Error,
    "encode-error: U+D088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD089");
    },
    Error,
    "encode-error: U+D089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD08A");
    },
    Error,
    "encode-error: U+D08A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD08B");
    },
    Error,
    "encode-error: U+D08B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD08C");
    },
    Error,
    "encode-error: U+D08C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD08D");
    },
    Error,
    "encode-error: U+D08D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD08E");
    },
    Error,
    "encode-error: U+D08E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD08F");
    },
    Error,
    "encode-error: U+D08F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD090");
    },
    Error,
    "encode-error: U+D090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD091");
    },
    Error,
    "encode-error: U+D091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD092");
    },
    Error,
    "encode-error: U+D092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD093");
    },
    Error,
    "encode-error: U+D093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD094");
    },
    Error,
    "encode-error: U+D094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD095");
    },
    Error,
    "encode-error: U+D095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD096");
    },
    Error,
    "encode-error: U+D096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD097");
    },
    Error,
    "encode-error: U+D097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD098");
    },
    Error,
    "encode-error: U+D098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD099");
    },
    Error,
    "encode-error: U+D099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD09A");
    },
    Error,
    "encode-error: U+D09A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD09B");
    },
    Error,
    "encode-error: U+D09B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD09C");
    },
    Error,
    "encode-error: U+D09C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD09D");
    },
    Error,
    "encode-error: U+D09D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD09E");
    },
    Error,
    "encode-error: U+D09E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD09F");
    },
    Error,
    "encode-error: U+D09F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A0");
    },
    Error,
    "encode-error: U+D0A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A1");
    },
    Error,
    "encode-error: U+D0A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A2");
    },
    Error,
    "encode-error: U+D0A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A3");
    },
    Error,
    "encode-error: U+D0A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A4");
    },
    Error,
    "encode-error: U+D0A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A5");
    },
    Error,
    "encode-error: U+D0A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A6");
    },
    Error,
    "encode-error: U+D0A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A7");
    },
    Error,
    "encode-error: U+D0A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A8");
    },
    Error,
    "encode-error: U+D0A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0A9");
    },
    Error,
    "encode-error: U+D0A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0AA");
    },
    Error,
    "encode-error: U+D0AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0AB");
    },
    Error,
    "encode-error: U+D0AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0AC");
    },
    Error,
    "encode-error: U+D0AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0AD");
    },
    Error,
    "encode-error: U+D0AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0AE");
    },
    Error,
    "encode-error: U+D0AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0AF");
    },
    Error,
    "encode-error: U+D0AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B0");
    },
    Error,
    "encode-error: U+D0B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B1");
    },
    Error,
    "encode-error: U+D0B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B2");
    },
    Error,
    "encode-error: U+D0B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B3");
    },
    Error,
    "encode-error: U+D0B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B4");
    },
    Error,
    "encode-error: U+D0B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B5");
    },
    Error,
    "encode-error: U+D0B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B6");
    },
    Error,
    "encode-error: U+D0B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B7");
    },
    Error,
    "encode-error: U+D0B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B8");
    },
    Error,
    "encode-error: U+D0B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0B9");
    },
    Error,
    "encode-error: U+D0B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0BA");
    },
    Error,
    "encode-error: U+D0BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0BB");
    },
    Error,
    "encode-error: U+D0BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0BC");
    },
    Error,
    "encode-error: U+D0BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0BD");
    },
    Error,
    "encode-error: U+D0BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0BE");
    },
    Error,
    "encode-error: U+D0BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0BF");
    },
    Error,
    "encode-error: U+D0BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C0");
    },
    Error,
    "encode-error: U+D0C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C1");
    },
    Error,
    "encode-error: U+D0C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C2");
    },
    Error,
    "encode-error: U+D0C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C3");
    },
    Error,
    "encode-error: U+D0C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C4");
    },
    Error,
    "encode-error: U+D0C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C5");
    },
    Error,
    "encode-error: U+D0C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C6");
    },
    Error,
    "encode-error: U+D0C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C7");
    },
    Error,
    "encode-error: U+D0C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C8");
    },
    Error,
    "encode-error: U+D0C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0C9");
    },
    Error,
    "encode-error: U+D0C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0CA");
    },
    Error,
    "encode-error: U+D0CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0CB");
    },
    Error,
    "encode-error: U+D0CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0CC");
    },
    Error,
    "encode-error: U+D0CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0CD");
    },
    Error,
    "encode-error: U+D0CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0CE");
    },
    Error,
    "encode-error: U+D0CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0CF");
    },
    Error,
    "encode-error: U+D0CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D0");
    },
    Error,
    "encode-error: U+D0D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D1");
    },
    Error,
    "encode-error: U+D0D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D2");
    },
    Error,
    "encode-error: U+D0D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D3");
    },
    Error,
    "encode-error: U+D0D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D4");
    },
    Error,
    "encode-error: U+D0D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D5");
    },
    Error,
    "encode-error: U+D0D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D6");
    },
    Error,
    "encode-error: U+D0D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D7");
    },
    Error,
    "encode-error: U+D0D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D8");
    },
    Error,
    "encode-error: U+D0D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0D9");
    },
    Error,
    "encode-error: U+D0D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0DA");
    },
    Error,
    "encode-error: U+D0DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0DB");
    },
    Error,
    "encode-error: U+D0DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0DC");
    },
    Error,
    "encode-error: U+D0DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0DD");
    },
    Error,
    "encode-error: U+D0DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0DE");
    },
    Error,
    "encode-error: U+D0DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0DF");
    },
    Error,
    "encode-error: U+D0DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E0");
    },
    Error,
    "encode-error: U+D0E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E1");
    },
    Error,
    "encode-error: U+D0E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E2");
    },
    Error,
    "encode-error: U+D0E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E3");
    },
    Error,
    "encode-error: U+D0E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E4");
    },
    Error,
    "encode-error: U+D0E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E5");
    },
    Error,
    "encode-error: U+D0E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E6");
    },
    Error,
    "encode-error: U+D0E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E7");
    },
    Error,
    "encode-error: U+D0E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E8");
    },
    Error,
    "encode-error: U+D0E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0E9");
    },
    Error,
    "encode-error: U+D0E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0EA");
    },
    Error,
    "encode-error: U+D0EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0EB");
    },
    Error,
    "encode-error: U+D0EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0EC");
    },
    Error,
    "encode-error: U+D0EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0ED");
    },
    Error,
    "encode-error: U+D0ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0EE");
    },
    Error,
    "encode-error: U+D0EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0EF");
    },
    Error,
    "encode-error: U+D0EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F0");
    },
    Error,
    "encode-error: U+D0F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F1");
    },
    Error,
    "encode-error: U+D0F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F2");
    },
    Error,
    "encode-error: U+D0F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F3");
    },
    Error,
    "encode-error: U+D0F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F4");
    },
    Error,
    "encode-error: U+D0F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F5");
    },
    Error,
    "encode-error: U+D0F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F6");
    },
    Error,
    "encode-error: U+D0F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F7");
    },
    Error,
    "encode-error: U+D0F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F8");
    },
    Error,
    "encode-error: U+D0F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0F9");
    },
    Error,
    "encode-error: U+D0F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0FA");
    },
    Error,
    "encode-error: U+D0FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0FB");
    },
    Error,
    "encode-error: U+D0FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0FC");
    },
    Error,
    "encode-error: U+D0FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0FD");
    },
    Error,
    "encode-error: U+D0FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0FE");
    },
    Error,
    "encode-error: U+D0FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD0FF");
    },
    Error,
    "encode-error: U+D0FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD100");
    },
    Error,
    "encode-error: U+D100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD101");
    },
    Error,
    "encode-error: U+D101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD102");
    },
    Error,
    "encode-error: U+D102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD103");
    },
    Error,
    "encode-error: U+D103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD104");
    },
    Error,
    "encode-error: U+D104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD105");
    },
    Error,
    "encode-error: U+D105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD106");
    },
    Error,
    "encode-error: U+D106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD107");
    },
    Error,
    "encode-error: U+D107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD108");
    },
    Error,
    "encode-error: U+D108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD109");
    },
    Error,
    "encode-error: U+D109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD10A");
    },
    Error,
    "encode-error: U+D10A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD10B");
    },
    Error,
    "encode-error: U+D10B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD10C");
    },
    Error,
    "encode-error: U+D10C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD10D");
    },
    Error,
    "encode-error: U+D10D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD10E");
    },
    Error,
    "encode-error: U+D10E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD10F");
    },
    Error,
    "encode-error: U+D10F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD110");
    },
    Error,
    "encode-error: U+D110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD111");
    },
    Error,
    "encode-error: U+D111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD112");
    },
    Error,
    "encode-error: U+D112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD113");
    },
    Error,
    "encode-error: U+D113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD114");
    },
    Error,
    "encode-error: U+D114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD115");
    },
    Error,
    "encode-error: U+D115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD116");
    },
    Error,
    "encode-error: U+D116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD117");
    },
    Error,
    "encode-error: U+D117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD118");
    },
    Error,
    "encode-error: U+D118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD119");
    },
    Error,
    "encode-error: U+D119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD11A");
    },
    Error,
    "encode-error: U+D11A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD11B");
    },
    Error,
    "encode-error: U+D11B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD11C");
    },
    Error,
    "encode-error: U+D11C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD11D");
    },
    Error,
    "encode-error: U+D11D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD11E");
    },
    Error,
    "encode-error: U+D11E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD11F");
    },
    Error,
    "encode-error: U+D11F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD120");
    },
    Error,
    "encode-error: U+D120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD121");
    },
    Error,
    "encode-error: U+D121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD122");
    },
    Error,
    "encode-error: U+D122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD123");
    },
    Error,
    "encode-error: U+D123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD124");
    },
    Error,
    "encode-error: U+D124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD125");
    },
    Error,
    "encode-error: U+D125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD126");
    },
    Error,
    "encode-error: U+D126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD127");
    },
    Error,
    "encode-error: U+D127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD128");
    },
    Error,
    "encode-error: U+D128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD129");
    },
    Error,
    "encode-error: U+D129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD12A");
    },
    Error,
    "encode-error: U+D12A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD12B");
    },
    Error,
    "encode-error: U+D12B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD12C");
    },
    Error,
    "encode-error: U+D12C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD12D");
    },
    Error,
    "encode-error: U+D12D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD12E");
    },
    Error,
    "encode-error: U+D12E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD12F");
    },
    Error,
    "encode-error: U+D12F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD130");
    },
    Error,
    "encode-error: U+D130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD131");
    },
    Error,
    "encode-error: U+D131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD132");
    },
    Error,
    "encode-error: U+D132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD133");
    },
    Error,
    "encode-error: U+D133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD134");
    },
    Error,
    "encode-error: U+D134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD135");
    },
    Error,
    "encode-error: U+D135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD136");
    },
    Error,
    "encode-error: U+D136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD137");
    },
    Error,
    "encode-error: U+D137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD138");
    },
    Error,
    "encode-error: U+D138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD139");
    },
    Error,
    "encode-error: U+D139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD13A");
    },
    Error,
    "encode-error: U+D13A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD13B");
    },
    Error,
    "encode-error: U+D13B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD13C");
    },
    Error,
    "encode-error: U+D13C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD13D");
    },
    Error,
    "encode-error: U+D13D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD13E");
    },
    Error,
    "encode-error: U+D13E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD13F");
    },
    Error,
    "encode-error: U+D13F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD140");
    },
    Error,
    "encode-error: U+D140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD141");
    },
    Error,
    "encode-error: U+D141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD142");
    },
    Error,
    "encode-error: U+D142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD143");
    },
    Error,
    "encode-error: U+D143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD144");
    },
    Error,
    "encode-error: U+D144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD145");
    },
    Error,
    "encode-error: U+D145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD146");
    },
    Error,
    "encode-error: U+D146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD147");
    },
    Error,
    "encode-error: U+D147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD148");
    },
    Error,
    "encode-error: U+D148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD149");
    },
    Error,
    "encode-error: U+D149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD14A");
    },
    Error,
    "encode-error: U+D14A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD14B");
    },
    Error,
    "encode-error: U+D14B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD14C");
    },
    Error,
    "encode-error: U+D14C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD14D");
    },
    Error,
    "encode-error: U+D14D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD14E");
    },
    Error,
    "encode-error: U+D14E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD14F");
    },
    Error,
    "encode-error: U+D14F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD150");
    },
    Error,
    "encode-error: U+D150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD151");
    },
    Error,
    "encode-error: U+D151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD152");
    },
    Error,
    "encode-error: U+D152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD153");
    },
    Error,
    "encode-error: U+D153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD154");
    },
    Error,
    "encode-error: U+D154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD155");
    },
    Error,
    "encode-error: U+D155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD156");
    },
    Error,
    "encode-error: U+D156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD157");
    },
    Error,
    "encode-error: U+D157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD158");
    },
    Error,
    "encode-error: U+D158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD159");
    },
    Error,
    "encode-error: U+D159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD15A");
    },
    Error,
    "encode-error: U+D15A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD15B");
    },
    Error,
    "encode-error: U+D15B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD15C");
    },
    Error,
    "encode-error: U+D15C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD15D");
    },
    Error,
    "encode-error: U+D15D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD15E");
    },
    Error,
    "encode-error: U+D15E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD15F");
    },
    Error,
    "encode-error: U+D15F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD160");
    },
    Error,
    "encode-error: U+D160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD161");
    },
    Error,
    "encode-error: U+D161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD162");
    },
    Error,
    "encode-error: U+D162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD163");
    },
    Error,
    "encode-error: U+D163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD164");
    },
    Error,
    "encode-error: U+D164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD165");
    },
    Error,
    "encode-error: U+D165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD166");
    },
    Error,
    "encode-error: U+D166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD167");
    },
    Error,
    "encode-error: U+D167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD168");
    },
    Error,
    "encode-error: U+D168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD169");
    },
    Error,
    "encode-error: U+D169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD16A");
    },
    Error,
    "encode-error: U+D16A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD16B");
    },
    Error,
    "encode-error: U+D16B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD16C");
    },
    Error,
    "encode-error: U+D16C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD16D");
    },
    Error,
    "encode-error: U+D16D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD16E");
    },
    Error,
    "encode-error: U+D16E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD16F");
    },
    Error,
    "encode-error: U+D16F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD170");
    },
    Error,
    "encode-error: U+D170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD171");
    },
    Error,
    "encode-error: U+D171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD172");
    },
    Error,
    "encode-error: U+D172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD173");
    },
    Error,
    "encode-error: U+D173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD174");
    },
    Error,
    "encode-error: U+D174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD175");
    },
    Error,
    "encode-error: U+D175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD176");
    },
    Error,
    "encode-error: U+D176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD177");
    },
    Error,
    "encode-error: U+D177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD178");
    },
    Error,
    "encode-error: U+D178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD179");
    },
    Error,
    "encode-error: U+D179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD17A");
    },
    Error,
    "encode-error: U+D17A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD17B");
    },
    Error,
    "encode-error: U+D17B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD17C");
    },
    Error,
    "encode-error: U+D17C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD17D");
    },
    Error,
    "encode-error: U+D17D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD17E");
    },
    Error,
    "encode-error: U+D17E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD17F");
    },
    Error,
    "encode-error: U+D17F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD180");
    },
    Error,
    "encode-error: U+D180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD181");
    },
    Error,
    "encode-error: U+D181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD182");
    },
    Error,
    "encode-error: U+D182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD183");
    },
    Error,
    "encode-error: U+D183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD184");
    },
    Error,
    "encode-error: U+D184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD185");
    },
    Error,
    "encode-error: U+D185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD186");
    },
    Error,
    "encode-error: U+D186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD187");
    },
    Error,
    "encode-error: U+D187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD188");
    },
    Error,
    "encode-error: U+D188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD189");
    },
    Error,
    "encode-error: U+D189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD18A");
    },
    Error,
    "encode-error: U+D18A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD18B");
    },
    Error,
    "encode-error: U+D18B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD18C");
    },
    Error,
    "encode-error: U+D18C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD18D");
    },
    Error,
    "encode-error: U+D18D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD18E");
    },
    Error,
    "encode-error: U+D18E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD18F");
    },
    Error,
    "encode-error: U+D18F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD190");
    },
    Error,
    "encode-error: U+D190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD191");
    },
    Error,
    "encode-error: U+D191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD192");
    },
    Error,
    "encode-error: U+D192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD193");
    },
    Error,
    "encode-error: U+D193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD194");
    },
    Error,
    "encode-error: U+D194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD195");
    },
    Error,
    "encode-error: U+D195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD196");
    },
    Error,
    "encode-error: U+D196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD197");
    },
    Error,
    "encode-error: U+D197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD198");
    },
    Error,
    "encode-error: U+D198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD199");
    },
    Error,
    "encode-error: U+D199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD19A");
    },
    Error,
    "encode-error: U+D19A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD19B");
    },
    Error,
    "encode-error: U+D19B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD19C");
    },
    Error,
    "encode-error: U+D19C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD19D");
    },
    Error,
    "encode-error: U+D19D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD19E");
    },
    Error,
    "encode-error: U+D19E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD19F");
    },
    Error,
    "encode-error: U+D19F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A0");
    },
    Error,
    "encode-error: U+D1A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A1");
    },
    Error,
    "encode-error: U+D1A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A2");
    },
    Error,
    "encode-error: U+D1A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A3");
    },
    Error,
    "encode-error: U+D1A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A4");
    },
    Error,
    "encode-error: U+D1A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A5");
    },
    Error,
    "encode-error: U+D1A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A6");
    },
    Error,
    "encode-error: U+D1A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A7");
    },
    Error,
    "encode-error: U+D1A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A8");
    },
    Error,
    "encode-error: U+D1A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1A9");
    },
    Error,
    "encode-error: U+D1A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1AA");
    },
    Error,
    "encode-error: U+D1AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1AB");
    },
    Error,
    "encode-error: U+D1AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1AC");
    },
    Error,
    "encode-error: U+D1AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1AD");
    },
    Error,
    "encode-error: U+D1AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1AE");
    },
    Error,
    "encode-error: U+D1AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1AF");
    },
    Error,
    "encode-error: U+D1AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B0");
    },
    Error,
    "encode-error: U+D1B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B1");
    },
    Error,
    "encode-error: U+D1B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B2");
    },
    Error,
    "encode-error: U+D1B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B3");
    },
    Error,
    "encode-error: U+D1B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B4");
    },
    Error,
    "encode-error: U+D1B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B5");
    },
    Error,
    "encode-error: U+D1B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B6");
    },
    Error,
    "encode-error: U+D1B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B7");
    },
    Error,
    "encode-error: U+D1B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B8");
    },
    Error,
    "encode-error: U+D1B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1B9");
    },
    Error,
    "encode-error: U+D1B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1BA");
    },
    Error,
    "encode-error: U+D1BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1BB");
    },
    Error,
    "encode-error: U+D1BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1BC");
    },
    Error,
    "encode-error: U+D1BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1BD");
    },
    Error,
    "encode-error: U+D1BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1BE");
    },
    Error,
    "encode-error: U+D1BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1BF");
    },
    Error,
    "encode-error: U+D1BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C0");
    },
    Error,
    "encode-error: U+D1C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C1");
    },
    Error,
    "encode-error: U+D1C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C2");
    },
    Error,
    "encode-error: U+D1C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C3");
    },
    Error,
    "encode-error: U+D1C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C4");
    },
    Error,
    "encode-error: U+D1C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C5");
    },
    Error,
    "encode-error: U+D1C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C6");
    },
    Error,
    "encode-error: U+D1C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C7");
    },
    Error,
    "encode-error: U+D1C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C8");
    },
    Error,
    "encode-error: U+D1C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1C9");
    },
    Error,
    "encode-error: U+D1C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1CA");
    },
    Error,
    "encode-error: U+D1CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1CB");
    },
    Error,
    "encode-error: U+D1CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1CC");
    },
    Error,
    "encode-error: U+D1CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1CD");
    },
    Error,
    "encode-error: U+D1CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1CE");
    },
    Error,
    "encode-error: U+D1CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1CF");
    },
    Error,
    "encode-error: U+D1CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D0");
    },
    Error,
    "encode-error: U+D1D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D1");
    },
    Error,
    "encode-error: U+D1D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D2");
    },
    Error,
    "encode-error: U+D1D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D3");
    },
    Error,
    "encode-error: U+D1D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D4");
    },
    Error,
    "encode-error: U+D1D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D5");
    },
    Error,
    "encode-error: U+D1D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D6");
    },
    Error,
    "encode-error: U+D1D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D7");
    },
    Error,
    "encode-error: U+D1D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D8");
    },
    Error,
    "encode-error: U+D1D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1D9");
    },
    Error,
    "encode-error: U+D1D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1DA");
    },
    Error,
    "encode-error: U+D1DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1DB");
    },
    Error,
    "encode-error: U+D1DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1DC");
    },
    Error,
    "encode-error: U+D1DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1DD");
    },
    Error,
    "encode-error: U+D1DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1DE");
    },
    Error,
    "encode-error: U+D1DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1DF");
    },
    Error,
    "encode-error: U+D1DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E0");
    },
    Error,
    "encode-error: U+D1E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E1");
    },
    Error,
    "encode-error: U+D1E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E2");
    },
    Error,
    "encode-error: U+D1E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E3");
    },
    Error,
    "encode-error: U+D1E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E4");
    },
    Error,
    "encode-error: U+D1E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E5");
    },
    Error,
    "encode-error: U+D1E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E6");
    },
    Error,
    "encode-error: U+D1E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E7");
    },
    Error,
    "encode-error: U+D1E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E8");
    },
    Error,
    "encode-error: U+D1E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1E9");
    },
    Error,
    "encode-error: U+D1E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1EA");
    },
    Error,
    "encode-error: U+D1EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1EB");
    },
    Error,
    "encode-error: U+D1EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1EC");
    },
    Error,
    "encode-error: U+D1EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1ED");
    },
    Error,
    "encode-error: U+D1ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1EE");
    },
    Error,
    "encode-error: U+D1EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1EF");
    },
    Error,
    "encode-error: U+D1EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F0");
    },
    Error,
    "encode-error: U+D1F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F1");
    },
    Error,
    "encode-error: U+D1F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F2");
    },
    Error,
    "encode-error: U+D1F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F3");
    },
    Error,
    "encode-error: U+D1F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F4");
    },
    Error,
    "encode-error: U+D1F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F5");
    },
    Error,
    "encode-error: U+D1F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F6");
    },
    Error,
    "encode-error: U+D1F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F7");
    },
    Error,
    "encode-error: U+D1F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F8");
    },
    Error,
    "encode-error: U+D1F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1F9");
    },
    Error,
    "encode-error: U+D1F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1FA");
    },
    Error,
    "encode-error: U+D1FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1FB");
    },
    Error,
    "encode-error: U+D1FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1FC");
    },
    Error,
    "encode-error: U+D1FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1FD");
    },
    Error,
    "encode-error: U+D1FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1FE");
    },
    Error,
    "encode-error: U+D1FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD1FF");
    },
    Error,
    "encode-error: U+D1FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD200");
    },
    Error,
    "encode-error: U+D200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD201");
    },
    Error,
    "encode-error: U+D201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD202");
    },
    Error,
    "encode-error: U+D202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD203");
    },
    Error,
    "encode-error: U+D203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD204");
    },
    Error,
    "encode-error: U+D204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD205");
    },
    Error,
    "encode-error: U+D205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD206");
    },
    Error,
    "encode-error: U+D206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD207");
    },
    Error,
    "encode-error: U+D207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD208");
    },
    Error,
    "encode-error: U+D208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD209");
    },
    Error,
    "encode-error: U+D209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD20A");
    },
    Error,
    "encode-error: U+D20A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD20B");
    },
    Error,
    "encode-error: U+D20B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD20C");
    },
    Error,
    "encode-error: U+D20C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD20D");
    },
    Error,
    "encode-error: U+D20D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD20E");
    },
    Error,
    "encode-error: U+D20E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD20F");
    },
    Error,
    "encode-error: U+D20F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD210");
    },
    Error,
    "encode-error: U+D210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD211");
    },
    Error,
    "encode-error: U+D211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD212");
    },
    Error,
    "encode-error: U+D212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD213");
    },
    Error,
    "encode-error: U+D213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD214");
    },
    Error,
    "encode-error: U+D214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD215");
    },
    Error,
    "encode-error: U+D215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD216");
    },
    Error,
    "encode-error: U+D216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD217");
    },
    Error,
    "encode-error: U+D217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD218");
    },
    Error,
    "encode-error: U+D218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD219");
    },
    Error,
    "encode-error: U+D219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD21A");
    },
    Error,
    "encode-error: U+D21A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD21B");
    },
    Error,
    "encode-error: U+D21B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD21C");
    },
    Error,
    "encode-error: U+D21C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD21D");
    },
    Error,
    "encode-error: U+D21D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD21E");
    },
    Error,
    "encode-error: U+D21E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD21F");
    },
    Error,
    "encode-error: U+D21F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD220");
    },
    Error,
    "encode-error: U+D220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD221");
    },
    Error,
    "encode-error: U+D221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD222");
    },
    Error,
    "encode-error: U+D222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD223");
    },
    Error,
    "encode-error: U+D223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD224");
    },
    Error,
    "encode-error: U+D224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD225");
    },
    Error,
    "encode-error: U+D225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD226");
    },
    Error,
    "encode-error: U+D226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD227");
    },
    Error,
    "encode-error: U+D227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD228");
    },
    Error,
    "encode-error: U+D228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD229");
    },
    Error,
    "encode-error: U+D229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD22A");
    },
    Error,
    "encode-error: U+D22A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD22B");
    },
    Error,
    "encode-error: U+D22B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD22C");
    },
    Error,
    "encode-error: U+D22C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD22D");
    },
    Error,
    "encode-error: U+D22D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD22E");
    },
    Error,
    "encode-error: U+D22E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD22F");
    },
    Error,
    "encode-error: U+D22F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD230");
    },
    Error,
    "encode-error: U+D230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD231");
    },
    Error,
    "encode-error: U+D231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD232");
    },
    Error,
    "encode-error: U+D232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD233");
    },
    Error,
    "encode-error: U+D233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD234");
    },
    Error,
    "encode-error: U+D234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD235");
    },
    Error,
    "encode-error: U+D235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD236");
    },
    Error,
    "encode-error: U+D236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD237");
    },
    Error,
    "encode-error: U+D237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD238");
    },
    Error,
    "encode-error: U+D238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD239");
    },
    Error,
    "encode-error: U+D239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD23A");
    },
    Error,
    "encode-error: U+D23A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD23B");
    },
    Error,
    "encode-error: U+D23B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD23C");
    },
    Error,
    "encode-error: U+D23C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD23D");
    },
    Error,
    "encode-error: U+D23D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD23E");
    },
    Error,
    "encode-error: U+D23E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD23F");
    },
    Error,
    "encode-error: U+D23F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD240");
    },
    Error,
    "encode-error: U+D240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD241");
    },
    Error,
    "encode-error: U+D241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD242");
    },
    Error,
    "encode-error: U+D242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD243");
    },
    Error,
    "encode-error: U+D243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD244");
    },
    Error,
    "encode-error: U+D244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD245");
    },
    Error,
    "encode-error: U+D245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD246");
    },
    Error,
    "encode-error: U+D246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD247");
    },
    Error,
    "encode-error: U+D247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD248");
    },
    Error,
    "encode-error: U+D248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD249");
    },
    Error,
    "encode-error: U+D249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD24A");
    },
    Error,
    "encode-error: U+D24A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD24B");
    },
    Error,
    "encode-error: U+D24B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD24C");
    },
    Error,
    "encode-error: U+D24C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD24D");
    },
    Error,
    "encode-error: U+D24D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD24E");
    },
    Error,
    "encode-error: U+D24E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD24F");
    },
    Error,
    "encode-error: U+D24F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD250");
    },
    Error,
    "encode-error: U+D250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD251");
    },
    Error,
    "encode-error: U+D251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD252");
    },
    Error,
    "encode-error: U+D252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD253");
    },
    Error,
    "encode-error: U+D253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD254");
    },
    Error,
    "encode-error: U+D254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD255");
    },
    Error,
    "encode-error: U+D255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD256");
    },
    Error,
    "encode-error: U+D256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD257");
    },
    Error,
    "encode-error: U+D257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD258");
    },
    Error,
    "encode-error: U+D258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD259");
    },
    Error,
    "encode-error: U+D259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD25A");
    },
    Error,
    "encode-error: U+D25A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD25B");
    },
    Error,
    "encode-error: U+D25B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD25C");
    },
    Error,
    "encode-error: U+D25C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD25D");
    },
    Error,
    "encode-error: U+D25D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD25E");
    },
    Error,
    "encode-error: U+D25E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD25F");
    },
    Error,
    "encode-error: U+D25F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD260");
    },
    Error,
    "encode-error: U+D260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD261");
    },
    Error,
    "encode-error: U+D261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD262");
    },
    Error,
    "encode-error: U+D262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD263");
    },
    Error,
    "encode-error: U+D263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD264");
    },
    Error,
    "encode-error: U+D264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD265");
    },
    Error,
    "encode-error: U+D265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD266");
    },
    Error,
    "encode-error: U+D266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD267");
    },
    Error,
    "encode-error: U+D267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD268");
    },
    Error,
    "encode-error: U+D268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD269");
    },
    Error,
    "encode-error: U+D269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD26A");
    },
    Error,
    "encode-error: U+D26A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD26B");
    },
    Error,
    "encode-error: U+D26B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD26C");
    },
    Error,
    "encode-error: U+D26C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD26D");
    },
    Error,
    "encode-error: U+D26D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD26E");
    },
    Error,
    "encode-error: U+D26E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD26F");
    },
    Error,
    "encode-error: U+D26F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD270");
    },
    Error,
    "encode-error: U+D270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD271");
    },
    Error,
    "encode-error: U+D271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD272");
    },
    Error,
    "encode-error: U+D272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD273");
    },
    Error,
    "encode-error: U+D273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD274");
    },
    Error,
    "encode-error: U+D274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD275");
    },
    Error,
    "encode-error: U+D275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD276");
    },
    Error,
    "encode-error: U+D276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD277");
    },
    Error,
    "encode-error: U+D277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD278");
    },
    Error,
    "encode-error: U+D278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD279");
    },
    Error,
    "encode-error: U+D279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD27A");
    },
    Error,
    "encode-error: U+D27A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD27B");
    },
    Error,
    "encode-error: U+D27B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD27C");
    },
    Error,
    "encode-error: U+D27C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD27D");
    },
    Error,
    "encode-error: U+D27D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD27E");
    },
    Error,
    "encode-error: U+D27E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD27F");
    },
    Error,
    "encode-error: U+D27F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD280");
    },
    Error,
    "encode-error: U+D280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD281");
    },
    Error,
    "encode-error: U+D281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD282");
    },
    Error,
    "encode-error: U+D282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD283");
    },
    Error,
    "encode-error: U+D283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD284");
    },
    Error,
    "encode-error: U+D284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD285");
    },
    Error,
    "encode-error: U+D285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD286");
    },
    Error,
    "encode-error: U+D286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD287");
    },
    Error,
    "encode-error: U+D287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD288");
    },
    Error,
    "encode-error: U+D288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD289");
    },
    Error,
    "encode-error: U+D289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD28A");
    },
    Error,
    "encode-error: U+D28A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD28B");
    },
    Error,
    "encode-error: U+D28B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD28C");
    },
    Error,
    "encode-error: U+D28C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD28D");
    },
    Error,
    "encode-error: U+D28D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD28E");
    },
    Error,
    "encode-error: U+D28E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD28F");
    },
    Error,
    "encode-error: U+D28F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD290");
    },
    Error,
    "encode-error: U+D290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD291");
    },
    Error,
    "encode-error: U+D291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD292");
    },
    Error,
    "encode-error: U+D292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD293");
    },
    Error,
    "encode-error: U+D293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD294");
    },
    Error,
    "encode-error: U+D294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD295");
    },
    Error,
    "encode-error: U+D295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD296");
    },
    Error,
    "encode-error: U+D296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD297");
    },
    Error,
    "encode-error: U+D297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD298");
    },
    Error,
    "encode-error: U+D298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD299");
    },
    Error,
    "encode-error: U+D299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD29A");
    },
    Error,
    "encode-error: U+D29A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD29B");
    },
    Error,
    "encode-error: U+D29B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD29C");
    },
    Error,
    "encode-error: U+D29C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD29D");
    },
    Error,
    "encode-error: U+D29D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD29E");
    },
    Error,
    "encode-error: U+D29E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD29F");
    },
    Error,
    "encode-error: U+D29F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A0");
    },
    Error,
    "encode-error: U+D2A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A1");
    },
    Error,
    "encode-error: U+D2A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A2");
    },
    Error,
    "encode-error: U+D2A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A3");
    },
    Error,
    "encode-error: U+D2A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A4");
    },
    Error,
    "encode-error: U+D2A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A5");
    },
    Error,
    "encode-error: U+D2A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A6");
    },
    Error,
    "encode-error: U+D2A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A7");
    },
    Error,
    "encode-error: U+D2A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A8");
    },
    Error,
    "encode-error: U+D2A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2A9");
    },
    Error,
    "encode-error: U+D2A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2AA");
    },
    Error,
    "encode-error: U+D2AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2AB");
    },
    Error,
    "encode-error: U+D2AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2AC");
    },
    Error,
    "encode-error: U+D2AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2AD");
    },
    Error,
    "encode-error: U+D2AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2AE");
    },
    Error,
    "encode-error: U+D2AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2AF");
    },
    Error,
    "encode-error: U+D2AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B0");
    },
    Error,
    "encode-error: U+D2B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B1");
    },
    Error,
    "encode-error: U+D2B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B2");
    },
    Error,
    "encode-error: U+D2B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B3");
    },
    Error,
    "encode-error: U+D2B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B4");
    },
    Error,
    "encode-error: U+D2B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B5");
    },
    Error,
    "encode-error: U+D2B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B6");
    },
    Error,
    "encode-error: U+D2B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B7");
    },
    Error,
    "encode-error: U+D2B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B8");
    },
    Error,
    "encode-error: U+D2B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2B9");
    },
    Error,
    "encode-error: U+D2B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2BA");
    },
    Error,
    "encode-error: U+D2BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2BB");
    },
    Error,
    "encode-error: U+D2BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2BC");
    },
    Error,
    "encode-error: U+D2BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2BD");
    },
    Error,
    "encode-error: U+D2BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2BE");
    },
    Error,
    "encode-error: U+D2BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2BF");
    },
    Error,
    "encode-error: U+D2BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C0");
    },
    Error,
    "encode-error: U+D2C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C1");
    },
    Error,
    "encode-error: U+D2C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C2");
    },
    Error,
    "encode-error: U+D2C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C3");
    },
    Error,
    "encode-error: U+D2C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C4");
    },
    Error,
    "encode-error: U+D2C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C5");
    },
    Error,
    "encode-error: U+D2C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C6");
    },
    Error,
    "encode-error: U+D2C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C7");
    },
    Error,
    "encode-error: U+D2C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C8");
    },
    Error,
    "encode-error: U+D2C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2C9");
    },
    Error,
    "encode-error: U+D2C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2CA");
    },
    Error,
    "encode-error: U+D2CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2CB");
    },
    Error,
    "encode-error: U+D2CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2CC");
    },
    Error,
    "encode-error: U+D2CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2CD");
    },
    Error,
    "encode-error: U+D2CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2CE");
    },
    Error,
    "encode-error: U+D2CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2CF");
    },
    Error,
    "encode-error: U+D2CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D0");
    },
    Error,
    "encode-error: U+D2D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D1");
    },
    Error,
    "encode-error: U+D2D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D2");
    },
    Error,
    "encode-error: U+D2D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D3");
    },
    Error,
    "encode-error: U+D2D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D4");
    },
    Error,
    "encode-error: U+D2D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D5");
    },
    Error,
    "encode-error: U+D2D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D6");
    },
    Error,
    "encode-error: U+D2D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D7");
    },
    Error,
    "encode-error: U+D2D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D8");
    },
    Error,
    "encode-error: U+D2D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2D9");
    },
    Error,
    "encode-error: U+D2D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2DA");
    },
    Error,
    "encode-error: U+D2DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2DB");
    },
    Error,
    "encode-error: U+D2DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2DC");
    },
    Error,
    "encode-error: U+D2DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2DD");
    },
    Error,
    "encode-error: U+D2DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2DE");
    },
    Error,
    "encode-error: U+D2DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2DF");
    },
    Error,
    "encode-error: U+D2DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E0");
    },
    Error,
    "encode-error: U+D2E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E1");
    },
    Error,
    "encode-error: U+D2E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E2");
    },
    Error,
    "encode-error: U+D2E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E3");
    },
    Error,
    "encode-error: U+D2E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E4");
    },
    Error,
    "encode-error: U+D2E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E5");
    },
    Error,
    "encode-error: U+D2E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E6");
    },
    Error,
    "encode-error: U+D2E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E7");
    },
    Error,
    "encode-error: U+D2E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E8");
    },
    Error,
    "encode-error: U+D2E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2E9");
    },
    Error,
    "encode-error: U+D2E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2EA");
    },
    Error,
    "encode-error: U+D2EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2EB");
    },
    Error,
    "encode-error: U+D2EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2EC");
    },
    Error,
    "encode-error: U+D2EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2ED");
    },
    Error,
    "encode-error: U+D2ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2EE");
    },
    Error,
    "encode-error: U+D2EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2EF");
    },
    Error,
    "encode-error: U+D2EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F0");
    },
    Error,
    "encode-error: U+D2F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F1");
    },
    Error,
    "encode-error: U+D2F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F2");
    },
    Error,
    "encode-error: U+D2F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F3");
    },
    Error,
    "encode-error: U+D2F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F4");
    },
    Error,
    "encode-error: U+D2F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F5");
    },
    Error,
    "encode-error: U+D2F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F6");
    },
    Error,
    "encode-error: U+D2F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F7");
    },
    Error,
    "encode-error: U+D2F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F8");
    },
    Error,
    "encode-error: U+D2F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2F9");
    },
    Error,
    "encode-error: U+D2F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2FA");
    },
    Error,
    "encode-error: U+D2FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2FB");
    },
    Error,
    "encode-error: U+D2FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2FC");
    },
    Error,
    "encode-error: U+D2FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2FD");
    },
    Error,
    "encode-error: U+D2FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2FE");
    },
    Error,
    "encode-error: U+D2FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD2FF");
    },
    Error,
    "encode-error: U+D2FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD300");
    },
    Error,
    "encode-error: U+D300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD301");
    },
    Error,
    "encode-error: U+D301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD302");
    },
    Error,
    "encode-error: U+D302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD303");
    },
    Error,
    "encode-error: U+D303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD304");
    },
    Error,
    "encode-error: U+D304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD305");
    },
    Error,
    "encode-error: U+D305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD306");
    },
    Error,
    "encode-error: U+D306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD307");
    },
    Error,
    "encode-error: U+D307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD308");
    },
    Error,
    "encode-error: U+D308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD309");
    },
    Error,
    "encode-error: U+D309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD30A");
    },
    Error,
    "encode-error: U+D30A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD30B");
    },
    Error,
    "encode-error: U+D30B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD30C");
    },
    Error,
    "encode-error: U+D30C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD30D");
    },
    Error,
    "encode-error: U+D30D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD30E");
    },
    Error,
    "encode-error: U+D30E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD30F");
    },
    Error,
    "encode-error: U+D30F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD310");
    },
    Error,
    "encode-error: U+D310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD311");
    },
    Error,
    "encode-error: U+D311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD312");
    },
    Error,
    "encode-error: U+D312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD313");
    },
    Error,
    "encode-error: U+D313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD314");
    },
    Error,
    "encode-error: U+D314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD315");
    },
    Error,
    "encode-error: U+D315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD316");
    },
    Error,
    "encode-error: U+D316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD317");
    },
    Error,
    "encode-error: U+D317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD318");
    },
    Error,
    "encode-error: U+D318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD319");
    },
    Error,
    "encode-error: U+D319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD31A");
    },
    Error,
    "encode-error: U+D31A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD31B");
    },
    Error,
    "encode-error: U+D31B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD31C");
    },
    Error,
    "encode-error: U+D31C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD31D");
    },
    Error,
    "encode-error: U+D31D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD31E");
    },
    Error,
    "encode-error: U+D31E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD31F");
    },
    Error,
    "encode-error: U+D31F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD320");
    },
    Error,
    "encode-error: U+D320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD321");
    },
    Error,
    "encode-error: U+D321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD322");
    },
    Error,
    "encode-error: U+D322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD323");
    },
    Error,
    "encode-error: U+D323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD324");
    },
    Error,
    "encode-error: U+D324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD325");
    },
    Error,
    "encode-error: U+D325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD326");
    },
    Error,
    "encode-error: U+D326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD327");
    },
    Error,
    "encode-error: U+D327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD328");
    },
    Error,
    "encode-error: U+D328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD329");
    },
    Error,
    "encode-error: U+D329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD32A");
    },
    Error,
    "encode-error: U+D32A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD32B");
    },
    Error,
    "encode-error: U+D32B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD32C");
    },
    Error,
    "encode-error: U+D32C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD32D");
    },
    Error,
    "encode-error: U+D32D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD32E");
    },
    Error,
    "encode-error: U+D32E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD32F");
    },
    Error,
    "encode-error: U+D32F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD330");
    },
    Error,
    "encode-error: U+D330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD331");
    },
    Error,
    "encode-error: U+D331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD332");
    },
    Error,
    "encode-error: U+D332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD333");
    },
    Error,
    "encode-error: U+D333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD334");
    },
    Error,
    "encode-error: U+D334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD335");
    },
    Error,
    "encode-error: U+D335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD336");
    },
    Error,
    "encode-error: U+D336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD337");
    },
    Error,
    "encode-error: U+D337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD338");
    },
    Error,
    "encode-error: U+D338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD339");
    },
    Error,
    "encode-error: U+D339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD33A");
    },
    Error,
    "encode-error: U+D33A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD33B");
    },
    Error,
    "encode-error: U+D33B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD33C");
    },
    Error,
    "encode-error: U+D33C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD33D");
    },
    Error,
    "encode-error: U+D33D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD33E");
    },
    Error,
    "encode-error: U+D33E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD33F");
    },
    Error,
    "encode-error: U+D33F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD340");
    },
    Error,
    "encode-error: U+D340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD341");
    },
    Error,
    "encode-error: U+D341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD342");
    },
    Error,
    "encode-error: U+D342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD343");
    },
    Error,
    "encode-error: U+D343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD344");
    },
    Error,
    "encode-error: U+D344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD345");
    },
    Error,
    "encode-error: U+D345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD346");
    },
    Error,
    "encode-error: U+D346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD347");
    },
    Error,
    "encode-error: U+D347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD348");
    },
    Error,
    "encode-error: U+D348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD349");
    },
    Error,
    "encode-error: U+D349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD34A");
    },
    Error,
    "encode-error: U+D34A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD34B");
    },
    Error,
    "encode-error: U+D34B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD34C");
    },
    Error,
    "encode-error: U+D34C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD34D");
    },
    Error,
    "encode-error: U+D34D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD34E");
    },
    Error,
    "encode-error: U+D34E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD34F");
    },
    Error,
    "encode-error: U+D34F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD350");
    },
    Error,
    "encode-error: U+D350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD351");
    },
    Error,
    "encode-error: U+D351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD352");
    },
    Error,
    "encode-error: U+D352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD353");
    },
    Error,
    "encode-error: U+D353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD354");
    },
    Error,
    "encode-error: U+D354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD355");
    },
    Error,
    "encode-error: U+D355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD356");
    },
    Error,
    "encode-error: U+D356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD357");
    },
    Error,
    "encode-error: U+D357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD358");
    },
    Error,
    "encode-error: U+D358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD359");
    },
    Error,
    "encode-error: U+D359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD35A");
    },
    Error,
    "encode-error: U+D35A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD35B");
    },
    Error,
    "encode-error: U+D35B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD35C");
    },
    Error,
    "encode-error: U+D35C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD35D");
    },
    Error,
    "encode-error: U+D35D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD35E");
    },
    Error,
    "encode-error: U+D35E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD35F");
    },
    Error,
    "encode-error: U+D35F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD360");
    },
    Error,
    "encode-error: U+D360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD361");
    },
    Error,
    "encode-error: U+D361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD362");
    },
    Error,
    "encode-error: U+D362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD363");
    },
    Error,
    "encode-error: U+D363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD364");
    },
    Error,
    "encode-error: U+D364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD365");
    },
    Error,
    "encode-error: U+D365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD366");
    },
    Error,
    "encode-error: U+D366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD367");
    },
    Error,
    "encode-error: U+D367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD368");
    },
    Error,
    "encode-error: U+D368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD369");
    },
    Error,
    "encode-error: U+D369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD36A");
    },
    Error,
    "encode-error: U+D36A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD36B");
    },
    Error,
    "encode-error: U+D36B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD36C");
    },
    Error,
    "encode-error: U+D36C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD36D");
    },
    Error,
    "encode-error: U+D36D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD36E");
    },
    Error,
    "encode-error: U+D36E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD36F");
    },
    Error,
    "encode-error: U+D36F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD370");
    },
    Error,
    "encode-error: U+D370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD371");
    },
    Error,
    "encode-error: U+D371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD372");
    },
    Error,
    "encode-error: U+D372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD373");
    },
    Error,
    "encode-error: U+D373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD374");
    },
    Error,
    "encode-error: U+D374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD375");
    },
    Error,
    "encode-error: U+D375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD376");
    },
    Error,
    "encode-error: U+D376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD377");
    },
    Error,
    "encode-error: U+D377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD378");
    },
    Error,
    "encode-error: U+D378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD379");
    },
    Error,
    "encode-error: U+D379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD37A");
    },
    Error,
    "encode-error: U+D37A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD37B");
    },
    Error,
    "encode-error: U+D37B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD37C");
    },
    Error,
    "encode-error: U+D37C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD37D");
    },
    Error,
    "encode-error: U+D37D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD37E");
    },
    Error,
    "encode-error: U+D37E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD37F");
    },
    Error,
    "encode-error: U+D37F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD380");
    },
    Error,
    "encode-error: U+D380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD381");
    },
    Error,
    "encode-error: U+D381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD382");
    },
    Error,
    "encode-error: U+D382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD383");
    },
    Error,
    "encode-error: U+D383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD384");
    },
    Error,
    "encode-error: U+D384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD385");
    },
    Error,
    "encode-error: U+D385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD386");
    },
    Error,
    "encode-error: U+D386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD387");
    },
    Error,
    "encode-error: U+D387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD388");
    },
    Error,
    "encode-error: U+D388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD389");
    },
    Error,
    "encode-error: U+D389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD38A");
    },
    Error,
    "encode-error: U+D38A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD38B");
    },
    Error,
    "encode-error: U+D38B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD38C");
    },
    Error,
    "encode-error: U+D38C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD38D");
    },
    Error,
    "encode-error: U+D38D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD38E");
    },
    Error,
    "encode-error: U+D38E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD38F");
    },
    Error,
    "encode-error: U+D38F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD390");
    },
    Error,
    "encode-error: U+D390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD391");
    },
    Error,
    "encode-error: U+D391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD392");
    },
    Error,
    "encode-error: U+D392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD393");
    },
    Error,
    "encode-error: U+D393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD394");
    },
    Error,
    "encode-error: U+D394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD395");
    },
    Error,
    "encode-error: U+D395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD396");
    },
    Error,
    "encode-error: U+D396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD397");
    },
    Error,
    "encode-error: U+D397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD398");
    },
    Error,
    "encode-error: U+D398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD399");
    },
    Error,
    "encode-error: U+D399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD39A");
    },
    Error,
    "encode-error: U+D39A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD39B");
    },
    Error,
    "encode-error: U+D39B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD39C");
    },
    Error,
    "encode-error: U+D39C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD39D");
    },
    Error,
    "encode-error: U+D39D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD39E");
    },
    Error,
    "encode-error: U+D39E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD39F");
    },
    Error,
    "encode-error: U+D39F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A0");
    },
    Error,
    "encode-error: U+D3A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A1");
    },
    Error,
    "encode-error: U+D3A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A2");
    },
    Error,
    "encode-error: U+D3A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A3");
    },
    Error,
    "encode-error: U+D3A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A4");
    },
    Error,
    "encode-error: U+D3A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A5");
    },
    Error,
    "encode-error: U+D3A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A6");
    },
    Error,
    "encode-error: U+D3A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A7");
    },
    Error,
    "encode-error: U+D3A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A8");
    },
    Error,
    "encode-error: U+D3A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3A9");
    },
    Error,
    "encode-error: U+D3A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3AA");
    },
    Error,
    "encode-error: U+D3AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3AB");
    },
    Error,
    "encode-error: U+D3AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3AC");
    },
    Error,
    "encode-error: U+D3AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3AD");
    },
    Error,
    "encode-error: U+D3AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3AE");
    },
    Error,
    "encode-error: U+D3AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3AF");
    },
    Error,
    "encode-error: U+D3AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B0");
    },
    Error,
    "encode-error: U+D3B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B1");
    },
    Error,
    "encode-error: U+D3B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B2");
    },
    Error,
    "encode-error: U+D3B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B3");
    },
    Error,
    "encode-error: U+D3B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B4");
    },
    Error,
    "encode-error: U+D3B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B5");
    },
    Error,
    "encode-error: U+D3B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B6");
    },
    Error,
    "encode-error: U+D3B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B7");
    },
    Error,
    "encode-error: U+D3B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B8");
    },
    Error,
    "encode-error: U+D3B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3B9");
    },
    Error,
    "encode-error: U+D3B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3BA");
    },
    Error,
    "encode-error: U+D3BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3BB");
    },
    Error,
    "encode-error: U+D3BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3BC");
    },
    Error,
    "encode-error: U+D3BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3BD");
    },
    Error,
    "encode-error: U+D3BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3BE");
    },
    Error,
    "encode-error: U+D3BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3BF");
    },
    Error,
    "encode-error: U+D3BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C0");
    },
    Error,
    "encode-error: U+D3C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C1");
    },
    Error,
    "encode-error: U+D3C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C2");
    },
    Error,
    "encode-error: U+D3C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C3");
    },
    Error,
    "encode-error: U+D3C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C4");
    },
    Error,
    "encode-error: U+D3C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C5");
    },
    Error,
    "encode-error: U+D3C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C6");
    },
    Error,
    "encode-error: U+D3C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C7");
    },
    Error,
    "encode-error: U+D3C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C8");
    },
    Error,
    "encode-error: U+D3C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3C9");
    },
    Error,
    "encode-error: U+D3C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3CA");
    },
    Error,
    "encode-error: U+D3CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3CB");
    },
    Error,
    "encode-error: U+D3CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3CC");
    },
    Error,
    "encode-error: U+D3CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3CD");
    },
    Error,
    "encode-error: U+D3CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3CE");
    },
    Error,
    "encode-error: U+D3CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3CF");
    },
    Error,
    "encode-error: U+D3CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D0");
    },
    Error,
    "encode-error: U+D3D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D1");
    },
    Error,
    "encode-error: U+D3D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D2");
    },
    Error,
    "encode-error: U+D3D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D3");
    },
    Error,
    "encode-error: U+D3D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D4");
    },
    Error,
    "encode-error: U+D3D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D5");
    },
    Error,
    "encode-error: U+D3D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D6");
    },
    Error,
    "encode-error: U+D3D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D7");
    },
    Error,
    "encode-error: U+D3D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D8");
    },
    Error,
    "encode-error: U+D3D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3D9");
    },
    Error,
    "encode-error: U+D3D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3DA");
    },
    Error,
    "encode-error: U+D3DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3DB");
    },
    Error,
    "encode-error: U+D3DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3DC");
    },
    Error,
    "encode-error: U+D3DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3DD");
    },
    Error,
    "encode-error: U+D3DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3DE");
    },
    Error,
    "encode-error: U+D3DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3DF");
    },
    Error,
    "encode-error: U+D3DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E0");
    },
    Error,
    "encode-error: U+D3E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E1");
    },
    Error,
    "encode-error: U+D3E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E2");
    },
    Error,
    "encode-error: U+D3E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E3");
    },
    Error,
    "encode-error: U+D3E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E4");
    },
    Error,
    "encode-error: U+D3E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E5");
    },
    Error,
    "encode-error: U+D3E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E6");
    },
    Error,
    "encode-error: U+D3E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E7");
    },
    Error,
    "encode-error: U+D3E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E8");
    },
    Error,
    "encode-error: U+D3E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3E9");
    },
    Error,
    "encode-error: U+D3E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3EA");
    },
    Error,
    "encode-error: U+D3EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3EB");
    },
    Error,
    "encode-error: U+D3EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3EC");
    },
    Error,
    "encode-error: U+D3EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3ED");
    },
    Error,
    "encode-error: U+D3ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3EE");
    },
    Error,
    "encode-error: U+D3EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3EF");
    },
    Error,
    "encode-error: U+D3EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F0");
    },
    Error,
    "encode-error: U+D3F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F1");
    },
    Error,
    "encode-error: U+D3F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F2");
    },
    Error,
    "encode-error: U+D3F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F3");
    },
    Error,
    "encode-error: U+D3F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F4");
    },
    Error,
    "encode-error: U+D3F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F5");
    },
    Error,
    "encode-error: U+D3F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F6");
    },
    Error,
    "encode-error: U+D3F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F7");
    },
    Error,
    "encode-error: U+D3F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F8");
    },
    Error,
    "encode-error: U+D3F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3F9");
    },
    Error,
    "encode-error: U+D3F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3FA");
    },
    Error,
    "encode-error: U+D3FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3FB");
    },
    Error,
    "encode-error: U+D3FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3FC");
    },
    Error,
    "encode-error: U+D3FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3FD");
    },
    Error,
    "encode-error: U+D3FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3FE");
    },
    Error,
    "encode-error: U+D3FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD3FF");
    },
    Error,
    "encode-error: U+D3FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD400");
    },
    Error,
    "encode-error: U+D400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD401");
    },
    Error,
    "encode-error: U+D401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD402");
    },
    Error,
    "encode-error: U+D402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD403");
    },
    Error,
    "encode-error: U+D403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD404");
    },
    Error,
    "encode-error: U+D404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD405");
    },
    Error,
    "encode-error: U+D405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD406");
    },
    Error,
    "encode-error: U+D406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD407");
    },
    Error,
    "encode-error: U+D407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD408");
    },
    Error,
    "encode-error: U+D408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD409");
    },
    Error,
    "encode-error: U+D409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD40A");
    },
    Error,
    "encode-error: U+D40A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD40B");
    },
    Error,
    "encode-error: U+D40B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD40C");
    },
    Error,
    "encode-error: U+D40C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD40D");
    },
    Error,
    "encode-error: U+D40D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD40E");
    },
    Error,
    "encode-error: U+D40E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD40F");
    },
    Error,
    "encode-error: U+D40F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD410");
    },
    Error,
    "encode-error: U+D410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD411");
    },
    Error,
    "encode-error: U+D411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD412");
    },
    Error,
    "encode-error: U+D412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD413");
    },
    Error,
    "encode-error: U+D413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD414");
    },
    Error,
    "encode-error: U+D414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD415");
    },
    Error,
    "encode-error: U+D415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD416");
    },
    Error,
    "encode-error: U+D416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD417");
    },
    Error,
    "encode-error: U+D417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD418");
    },
    Error,
    "encode-error: U+D418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD419");
    },
    Error,
    "encode-error: U+D419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD41A");
    },
    Error,
    "encode-error: U+D41A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD41B");
    },
    Error,
    "encode-error: U+D41B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD41C");
    },
    Error,
    "encode-error: U+D41C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD41D");
    },
    Error,
    "encode-error: U+D41D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD41E");
    },
    Error,
    "encode-error: U+D41E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD41F");
    },
    Error,
    "encode-error: U+D41F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD420");
    },
    Error,
    "encode-error: U+D420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD421");
    },
    Error,
    "encode-error: U+D421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD422");
    },
    Error,
    "encode-error: U+D422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD423");
    },
    Error,
    "encode-error: U+D423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD424");
    },
    Error,
    "encode-error: U+D424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD425");
    },
    Error,
    "encode-error: U+D425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD426");
    },
    Error,
    "encode-error: U+D426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD427");
    },
    Error,
    "encode-error: U+D427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD428");
    },
    Error,
    "encode-error: U+D428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD429");
    },
    Error,
    "encode-error: U+D429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD42A");
    },
    Error,
    "encode-error: U+D42A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD42B");
    },
    Error,
    "encode-error: U+D42B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD42C");
    },
    Error,
    "encode-error: U+D42C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD42D");
    },
    Error,
    "encode-error: U+D42D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD42E");
    },
    Error,
    "encode-error: U+D42E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD42F");
    },
    Error,
    "encode-error: U+D42F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD430");
    },
    Error,
    "encode-error: U+D430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD431");
    },
    Error,
    "encode-error: U+D431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD432");
    },
    Error,
    "encode-error: U+D432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD433");
    },
    Error,
    "encode-error: U+D433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD434");
    },
    Error,
    "encode-error: U+D434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD435");
    },
    Error,
    "encode-error: U+D435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD436");
    },
    Error,
    "encode-error: U+D436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD437");
    },
    Error,
    "encode-error: U+D437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD438");
    },
    Error,
    "encode-error: U+D438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD439");
    },
    Error,
    "encode-error: U+D439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD43A");
    },
    Error,
    "encode-error: U+D43A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD43B");
    },
    Error,
    "encode-error: U+D43B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD43C");
    },
    Error,
    "encode-error: U+D43C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD43D");
    },
    Error,
    "encode-error: U+D43D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD43E");
    },
    Error,
    "encode-error: U+D43E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD43F");
    },
    Error,
    "encode-error: U+D43F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD440");
    },
    Error,
    "encode-error: U+D440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD441");
    },
    Error,
    "encode-error: U+D441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD442");
    },
    Error,
    "encode-error: U+D442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD443");
    },
    Error,
    "encode-error: U+D443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD444");
    },
    Error,
    "encode-error: U+D444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD445");
    },
    Error,
    "encode-error: U+D445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD446");
    },
    Error,
    "encode-error: U+D446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD447");
    },
    Error,
    "encode-error: U+D447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD448");
    },
    Error,
    "encode-error: U+D448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD449");
    },
    Error,
    "encode-error: U+D449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD44A");
    },
    Error,
    "encode-error: U+D44A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD44B");
    },
    Error,
    "encode-error: U+D44B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD44C");
    },
    Error,
    "encode-error: U+D44C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD44D");
    },
    Error,
    "encode-error: U+D44D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD44E");
    },
    Error,
    "encode-error: U+D44E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD44F");
    },
    Error,
    "encode-error: U+D44F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD450");
    },
    Error,
    "encode-error: U+D450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD451");
    },
    Error,
    "encode-error: U+D451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD452");
    },
    Error,
    "encode-error: U+D452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD453");
    },
    Error,
    "encode-error: U+D453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD454");
    },
    Error,
    "encode-error: U+D454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD455");
    },
    Error,
    "encode-error: U+D455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD456");
    },
    Error,
    "encode-error: U+D456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD457");
    },
    Error,
    "encode-error: U+D457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD458");
    },
    Error,
    "encode-error: U+D458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD459");
    },
    Error,
    "encode-error: U+D459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD45A");
    },
    Error,
    "encode-error: U+D45A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD45B");
    },
    Error,
    "encode-error: U+D45B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD45C");
    },
    Error,
    "encode-error: U+D45C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD45D");
    },
    Error,
    "encode-error: U+D45D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD45E");
    },
    Error,
    "encode-error: U+D45E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD45F");
    },
    Error,
    "encode-error: U+D45F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD460");
    },
    Error,
    "encode-error: U+D460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD461");
    },
    Error,
    "encode-error: U+D461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD462");
    },
    Error,
    "encode-error: U+D462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD463");
    },
    Error,
    "encode-error: U+D463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD464");
    },
    Error,
    "encode-error: U+D464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD465");
    },
    Error,
    "encode-error: U+D465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD466");
    },
    Error,
    "encode-error: U+D466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD467");
    },
    Error,
    "encode-error: U+D467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD468");
    },
    Error,
    "encode-error: U+D468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD469");
    },
    Error,
    "encode-error: U+D469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD46A");
    },
    Error,
    "encode-error: U+D46A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD46B");
    },
    Error,
    "encode-error: U+D46B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD46C");
    },
    Error,
    "encode-error: U+D46C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD46D");
    },
    Error,
    "encode-error: U+D46D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD46E");
    },
    Error,
    "encode-error: U+D46E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD46F");
    },
    Error,
    "encode-error: U+D46F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD470");
    },
    Error,
    "encode-error: U+D470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD471");
    },
    Error,
    "encode-error: U+D471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD472");
    },
    Error,
    "encode-error: U+D472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD473");
    },
    Error,
    "encode-error: U+D473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD474");
    },
    Error,
    "encode-error: U+D474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD475");
    },
    Error,
    "encode-error: U+D475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD476");
    },
    Error,
    "encode-error: U+D476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD477");
    },
    Error,
    "encode-error: U+D477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD478");
    },
    Error,
    "encode-error: U+D478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD479");
    },
    Error,
    "encode-error: U+D479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD47A");
    },
    Error,
    "encode-error: U+D47A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD47B");
    },
    Error,
    "encode-error: U+D47B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD47C");
    },
    Error,
    "encode-error: U+D47C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD47D");
    },
    Error,
    "encode-error: U+D47D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD47E");
    },
    Error,
    "encode-error: U+D47E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD47F");
    },
    Error,
    "encode-error: U+D47F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD480");
    },
    Error,
    "encode-error: U+D480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD481");
    },
    Error,
    "encode-error: U+D481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD482");
    },
    Error,
    "encode-error: U+D482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD483");
    },
    Error,
    "encode-error: U+D483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD484");
    },
    Error,
    "encode-error: U+D484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD485");
    },
    Error,
    "encode-error: U+D485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD486");
    },
    Error,
    "encode-error: U+D486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD487");
    },
    Error,
    "encode-error: U+D487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD488");
    },
    Error,
    "encode-error: U+D488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD489");
    },
    Error,
    "encode-error: U+D489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD48A");
    },
    Error,
    "encode-error: U+D48A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD48B");
    },
    Error,
    "encode-error: U+D48B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD48C");
    },
    Error,
    "encode-error: U+D48C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD48D");
    },
    Error,
    "encode-error: U+D48D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD48E");
    },
    Error,
    "encode-error: U+D48E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD48F");
    },
    Error,
    "encode-error: U+D48F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD490");
    },
    Error,
    "encode-error: U+D490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD491");
    },
    Error,
    "encode-error: U+D491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD492");
    },
    Error,
    "encode-error: U+D492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD493");
    },
    Error,
    "encode-error: U+D493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD494");
    },
    Error,
    "encode-error: U+D494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD495");
    },
    Error,
    "encode-error: U+D495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD496");
    },
    Error,
    "encode-error: U+D496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD497");
    },
    Error,
    "encode-error: U+D497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD498");
    },
    Error,
    "encode-error: U+D498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD499");
    },
    Error,
    "encode-error: U+D499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD49A");
    },
    Error,
    "encode-error: U+D49A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD49B");
    },
    Error,
    "encode-error: U+D49B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD49C");
    },
    Error,
    "encode-error: U+D49C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD49D");
    },
    Error,
    "encode-error: U+D49D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD49E");
    },
    Error,
    "encode-error: U+D49E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD49F");
    },
    Error,
    "encode-error: U+D49F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A0");
    },
    Error,
    "encode-error: U+D4A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A1");
    },
    Error,
    "encode-error: U+D4A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A2");
    },
    Error,
    "encode-error: U+D4A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A3");
    },
    Error,
    "encode-error: U+D4A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A4");
    },
    Error,
    "encode-error: U+D4A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A5");
    },
    Error,
    "encode-error: U+D4A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A6");
    },
    Error,
    "encode-error: U+D4A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A7");
    },
    Error,
    "encode-error: U+D4A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A8");
    },
    Error,
    "encode-error: U+D4A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4A9");
    },
    Error,
    "encode-error: U+D4A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4AA");
    },
    Error,
    "encode-error: U+D4AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4AB");
    },
    Error,
    "encode-error: U+D4AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4AC");
    },
    Error,
    "encode-error: U+D4AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4AD");
    },
    Error,
    "encode-error: U+D4AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4AE");
    },
    Error,
    "encode-error: U+D4AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4AF");
    },
    Error,
    "encode-error: U+D4AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B0");
    },
    Error,
    "encode-error: U+D4B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B1");
    },
    Error,
    "encode-error: U+D4B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B2");
    },
    Error,
    "encode-error: U+D4B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B3");
    },
    Error,
    "encode-error: U+D4B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B4");
    },
    Error,
    "encode-error: U+D4B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B5");
    },
    Error,
    "encode-error: U+D4B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B6");
    },
    Error,
    "encode-error: U+D4B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B7");
    },
    Error,
    "encode-error: U+D4B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B8");
    },
    Error,
    "encode-error: U+D4B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4B9");
    },
    Error,
    "encode-error: U+D4B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4BA");
    },
    Error,
    "encode-error: U+D4BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4BB");
    },
    Error,
    "encode-error: U+D4BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4BC");
    },
    Error,
    "encode-error: U+D4BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4BD");
    },
    Error,
    "encode-error: U+D4BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4BE");
    },
    Error,
    "encode-error: U+D4BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4BF");
    },
    Error,
    "encode-error: U+D4BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C0");
    },
    Error,
    "encode-error: U+D4C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C1");
    },
    Error,
    "encode-error: U+D4C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C2");
    },
    Error,
    "encode-error: U+D4C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C3");
    },
    Error,
    "encode-error: U+D4C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C4");
    },
    Error,
    "encode-error: U+D4C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C5");
    },
    Error,
    "encode-error: U+D4C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C6");
    },
    Error,
    "encode-error: U+D4C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C7");
    },
    Error,
    "encode-error: U+D4C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C8");
    },
    Error,
    "encode-error: U+D4C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4C9");
    },
    Error,
    "encode-error: U+D4C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4CA");
    },
    Error,
    "encode-error: U+D4CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4CB");
    },
    Error,
    "encode-error: U+D4CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4CC");
    },
    Error,
    "encode-error: U+D4CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4CD");
    },
    Error,
    "encode-error: U+D4CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4CE");
    },
    Error,
    "encode-error: U+D4CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4CF");
    },
    Error,
    "encode-error: U+D4CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D0");
    },
    Error,
    "encode-error: U+D4D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D1");
    },
    Error,
    "encode-error: U+D4D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D2");
    },
    Error,
    "encode-error: U+D4D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D3");
    },
    Error,
    "encode-error: U+D4D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D4");
    },
    Error,
    "encode-error: U+D4D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D5");
    },
    Error,
    "encode-error: U+D4D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D6");
    },
    Error,
    "encode-error: U+D4D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D7");
    },
    Error,
    "encode-error: U+D4D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D8");
    },
    Error,
    "encode-error: U+D4D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4D9");
    },
    Error,
    "encode-error: U+D4D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4DA");
    },
    Error,
    "encode-error: U+D4DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4DB");
    },
    Error,
    "encode-error: U+D4DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4DC");
    },
    Error,
    "encode-error: U+D4DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4DD");
    },
    Error,
    "encode-error: U+D4DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4DE");
    },
    Error,
    "encode-error: U+D4DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4DF");
    },
    Error,
    "encode-error: U+D4DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E0");
    },
    Error,
    "encode-error: U+D4E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E1");
    },
    Error,
    "encode-error: U+D4E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E2");
    },
    Error,
    "encode-error: U+D4E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E3");
    },
    Error,
    "encode-error: U+D4E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E4");
    },
    Error,
    "encode-error: U+D4E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E5");
    },
    Error,
    "encode-error: U+D4E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E6");
    },
    Error,
    "encode-error: U+D4E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E7");
    },
    Error,
    "encode-error: U+D4E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E8");
    },
    Error,
    "encode-error: U+D4E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4E9");
    },
    Error,
    "encode-error: U+D4E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4EA");
    },
    Error,
    "encode-error: U+D4EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4EB");
    },
    Error,
    "encode-error: U+D4EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4EC");
    },
    Error,
    "encode-error: U+D4EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4ED");
    },
    Error,
    "encode-error: U+D4ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4EE");
    },
    Error,
    "encode-error: U+D4EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4EF");
    },
    Error,
    "encode-error: U+D4EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F0");
    },
    Error,
    "encode-error: U+D4F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F1");
    },
    Error,
    "encode-error: U+D4F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F2");
    },
    Error,
    "encode-error: U+D4F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F3");
    },
    Error,
    "encode-error: U+D4F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F4");
    },
    Error,
    "encode-error: U+D4F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F5");
    },
    Error,
    "encode-error: U+D4F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F6");
    },
    Error,
    "encode-error: U+D4F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F7");
    },
    Error,
    "encode-error: U+D4F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F8");
    },
    Error,
    "encode-error: U+D4F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4F9");
    },
    Error,
    "encode-error: U+D4F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4FA");
    },
    Error,
    "encode-error: U+D4FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4FB");
    },
    Error,
    "encode-error: U+D4FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4FC");
    },
    Error,
    "encode-error: U+D4FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4FD");
    },
    Error,
    "encode-error: U+D4FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4FE");
    },
    Error,
    "encode-error: U+D4FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD4FF");
    },
    Error,
    "encode-error: U+D4FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD500");
    },
    Error,
    "encode-error: U+D500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD501");
    },
    Error,
    "encode-error: U+D501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD502");
    },
    Error,
    "encode-error: U+D502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD503");
    },
    Error,
    "encode-error: U+D503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD504");
    },
    Error,
    "encode-error: U+D504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD505");
    },
    Error,
    "encode-error: U+D505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD506");
    },
    Error,
    "encode-error: U+D506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD507");
    },
    Error,
    "encode-error: U+D507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD508");
    },
    Error,
    "encode-error: U+D508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD509");
    },
    Error,
    "encode-error: U+D509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD50A");
    },
    Error,
    "encode-error: U+D50A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD50B");
    },
    Error,
    "encode-error: U+D50B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD50C");
    },
    Error,
    "encode-error: U+D50C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD50D");
    },
    Error,
    "encode-error: U+D50D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD50E");
    },
    Error,
    "encode-error: U+D50E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD50F");
    },
    Error,
    "encode-error: U+D50F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD510");
    },
    Error,
    "encode-error: U+D510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD511");
    },
    Error,
    "encode-error: U+D511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD512");
    },
    Error,
    "encode-error: U+D512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD513");
    },
    Error,
    "encode-error: U+D513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD514");
    },
    Error,
    "encode-error: U+D514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD515");
    },
    Error,
    "encode-error: U+D515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD516");
    },
    Error,
    "encode-error: U+D516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD517");
    },
    Error,
    "encode-error: U+D517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD518");
    },
    Error,
    "encode-error: U+D518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD519");
    },
    Error,
    "encode-error: U+D519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD51A");
    },
    Error,
    "encode-error: U+D51A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD51B");
    },
    Error,
    "encode-error: U+D51B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD51C");
    },
    Error,
    "encode-error: U+D51C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD51D");
    },
    Error,
    "encode-error: U+D51D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD51E");
    },
    Error,
    "encode-error: U+D51E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD51F");
    },
    Error,
    "encode-error: U+D51F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD520");
    },
    Error,
    "encode-error: U+D520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD521");
    },
    Error,
    "encode-error: U+D521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD522");
    },
    Error,
    "encode-error: U+D522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD523");
    },
    Error,
    "encode-error: U+D523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD524");
    },
    Error,
    "encode-error: U+D524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD525");
    },
    Error,
    "encode-error: U+D525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD526");
    },
    Error,
    "encode-error: U+D526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD527");
    },
    Error,
    "encode-error: U+D527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD528");
    },
    Error,
    "encode-error: U+D528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD529");
    },
    Error,
    "encode-error: U+D529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD52A");
    },
    Error,
    "encode-error: U+D52A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD52B");
    },
    Error,
    "encode-error: U+D52B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD52C");
    },
    Error,
    "encode-error: U+D52C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD52D");
    },
    Error,
    "encode-error: U+D52D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD52E");
    },
    Error,
    "encode-error: U+D52E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD52F");
    },
    Error,
    "encode-error: U+D52F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD530");
    },
    Error,
    "encode-error: U+D530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD531");
    },
    Error,
    "encode-error: U+D531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD532");
    },
    Error,
    "encode-error: U+D532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD533");
    },
    Error,
    "encode-error: U+D533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD534");
    },
    Error,
    "encode-error: U+D534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD535");
    },
    Error,
    "encode-error: U+D535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD536");
    },
    Error,
    "encode-error: U+D536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD537");
    },
    Error,
    "encode-error: U+D537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD538");
    },
    Error,
    "encode-error: U+D538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD539");
    },
    Error,
    "encode-error: U+D539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD53A");
    },
    Error,
    "encode-error: U+D53A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD53B");
    },
    Error,
    "encode-error: U+D53B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD53C");
    },
    Error,
    "encode-error: U+D53C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD53D");
    },
    Error,
    "encode-error: U+D53D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD53E");
    },
    Error,
    "encode-error: U+D53E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD53F");
    },
    Error,
    "encode-error: U+D53F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD540");
    },
    Error,
    "encode-error: U+D540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD541");
    },
    Error,
    "encode-error: U+D541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD542");
    },
    Error,
    "encode-error: U+D542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD543");
    },
    Error,
    "encode-error: U+D543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD544");
    },
    Error,
    "encode-error: U+D544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD545");
    },
    Error,
    "encode-error: U+D545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD546");
    },
    Error,
    "encode-error: U+D546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD547");
    },
    Error,
    "encode-error: U+D547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD548");
    },
    Error,
    "encode-error: U+D548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD549");
    },
    Error,
    "encode-error: U+D549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD54A");
    },
    Error,
    "encode-error: U+D54A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD54B");
    },
    Error,
    "encode-error: U+D54B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD54C");
    },
    Error,
    "encode-error: U+D54C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD54D");
    },
    Error,
    "encode-error: U+D54D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD54E");
    },
    Error,
    "encode-error: U+D54E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD54F");
    },
    Error,
    "encode-error: U+D54F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD550");
    },
    Error,
    "encode-error: U+D550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD551");
    },
    Error,
    "encode-error: U+D551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD552");
    },
    Error,
    "encode-error: U+D552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD553");
    },
    Error,
    "encode-error: U+D553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD554");
    },
    Error,
    "encode-error: U+D554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD555");
    },
    Error,
    "encode-error: U+D555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD556");
    },
    Error,
    "encode-error: U+D556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD557");
    },
    Error,
    "encode-error: U+D557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD558");
    },
    Error,
    "encode-error: U+D558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD559");
    },
    Error,
    "encode-error: U+D559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD55A");
    },
    Error,
    "encode-error: U+D55A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD55B");
    },
    Error,
    "encode-error: U+D55B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD55C");
    },
    Error,
    "encode-error: U+D55C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD55D");
    },
    Error,
    "encode-error: U+D55D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD55E");
    },
    Error,
    "encode-error: U+D55E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD55F");
    },
    Error,
    "encode-error: U+D55F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD560");
    },
    Error,
    "encode-error: U+D560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD561");
    },
    Error,
    "encode-error: U+D561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD562");
    },
    Error,
    "encode-error: U+D562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD563");
    },
    Error,
    "encode-error: U+D563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD564");
    },
    Error,
    "encode-error: U+D564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD565");
    },
    Error,
    "encode-error: U+D565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD566");
    },
    Error,
    "encode-error: U+D566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD567");
    },
    Error,
    "encode-error: U+D567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD568");
    },
    Error,
    "encode-error: U+D568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD569");
    },
    Error,
    "encode-error: U+D569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD56A");
    },
    Error,
    "encode-error: U+D56A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD56B");
    },
    Error,
    "encode-error: U+D56B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD56C");
    },
    Error,
    "encode-error: U+D56C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD56D");
    },
    Error,
    "encode-error: U+D56D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD56E");
    },
    Error,
    "encode-error: U+D56E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD56F");
    },
    Error,
    "encode-error: U+D56F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD570");
    },
    Error,
    "encode-error: U+D570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD571");
    },
    Error,
    "encode-error: U+D571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD572");
    },
    Error,
    "encode-error: U+D572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD573");
    },
    Error,
    "encode-error: U+D573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD574");
    },
    Error,
    "encode-error: U+D574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD575");
    },
    Error,
    "encode-error: U+D575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD576");
    },
    Error,
    "encode-error: U+D576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD577");
    },
    Error,
    "encode-error: U+D577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD578");
    },
    Error,
    "encode-error: U+D578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD579");
    },
    Error,
    "encode-error: U+D579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD57A");
    },
    Error,
    "encode-error: U+D57A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD57B");
    },
    Error,
    "encode-error: U+D57B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD57C");
    },
    Error,
    "encode-error: U+D57C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD57D");
    },
    Error,
    "encode-error: U+D57D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD57E");
    },
    Error,
    "encode-error: U+D57E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD57F");
    },
    Error,
    "encode-error: U+D57F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD580");
    },
    Error,
    "encode-error: U+D580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD581");
    },
    Error,
    "encode-error: U+D581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD582");
    },
    Error,
    "encode-error: U+D582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD583");
    },
    Error,
    "encode-error: U+D583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD584");
    },
    Error,
    "encode-error: U+D584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD585");
    },
    Error,
    "encode-error: U+D585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD586");
    },
    Error,
    "encode-error: U+D586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD587");
    },
    Error,
    "encode-error: U+D587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD588");
    },
    Error,
    "encode-error: U+D588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD589");
    },
    Error,
    "encode-error: U+D589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD58A");
    },
    Error,
    "encode-error: U+D58A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD58B");
    },
    Error,
    "encode-error: U+D58B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD58C");
    },
    Error,
    "encode-error: U+D58C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD58D");
    },
    Error,
    "encode-error: U+D58D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD58E");
    },
    Error,
    "encode-error: U+D58E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD58F");
    },
    Error,
    "encode-error: U+D58F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD590");
    },
    Error,
    "encode-error: U+D590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD591");
    },
    Error,
    "encode-error: U+D591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD592");
    },
    Error,
    "encode-error: U+D592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD593");
    },
    Error,
    "encode-error: U+D593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD594");
    },
    Error,
    "encode-error: U+D594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD595");
    },
    Error,
    "encode-error: U+D595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD596");
    },
    Error,
    "encode-error: U+D596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD597");
    },
    Error,
    "encode-error: U+D597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD598");
    },
    Error,
    "encode-error: U+D598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD599");
    },
    Error,
    "encode-error: U+D599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD59A");
    },
    Error,
    "encode-error: U+D59A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD59B");
    },
    Error,
    "encode-error: U+D59B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD59C");
    },
    Error,
    "encode-error: U+D59C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD59D");
    },
    Error,
    "encode-error: U+D59D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD59E");
    },
    Error,
    "encode-error: U+D59E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD59F");
    },
    Error,
    "encode-error: U+D59F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A0");
    },
    Error,
    "encode-error: U+D5A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A1");
    },
    Error,
    "encode-error: U+D5A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A2");
    },
    Error,
    "encode-error: U+D5A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A3");
    },
    Error,
    "encode-error: U+D5A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A4");
    },
    Error,
    "encode-error: U+D5A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A5");
    },
    Error,
    "encode-error: U+D5A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A6");
    },
    Error,
    "encode-error: U+D5A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A7");
    },
    Error,
    "encode-error: U+D5A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A8");
    },
    Error,
    "encode-error: U+D5A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5A9");
    },
    Error,
    "encode-error: U+D5A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5AA");
    },
    Error,
    "encode-error: U+D5AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5AB");
    },
    Error,
    "encode-error: U+D5AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5AC");
    },
    Error,
    "encode-error: U+D5AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5AD");
    },
    Error,
    "encode-error: U+D5AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5AE");
    },
    Error,
    "encode-error: U+D5AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5AF");
    },
    Error,
    "encode-error: U+D5AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B0");
    },
    Error,
    "encode-error: U+D5B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B1");
    },
    Error,
    "encode-error: U+D5B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B2");
    },
    Error,
    "encode-error: U+D5B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B3");
    },
    Error,
    "encode-error: U+D5B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B4");
    },
    Error,
    "encode-error: U+D5B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B5");
    },
    Error,
    "encode-error: U+D5B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B6");
    },
    Error,
    "encode-error: U+D5B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B7");
    },
    Error,
    "encode-error: U+D5B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B8");
    },
    Error,
    "encode-error: U+D5B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5B9");
    },
    Error,
    "encode-error: U+D5B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5BA");
    },
    Error,
    "encode-error: U+D5BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5BB");
    },
    Error,
    "encode-error: U+D5BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5BC");
    },
    Error,
    "encode-error: U+D5BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5BD");
    },
    Error,
    "encode-error: U+D5BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5BE");
    },
    Error,
    "encode-error: U+D5BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5BF");
    },
    Error,
    "encode-error: U+D5BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C0");
    },
    Error,
    "encode-error: U+D5C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C1");
    },
    Error,
    "encode-error: U+D5C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C2");
    },
    Error,
    "encode-error: U+D5C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C3");
    },
    Error,
    "encode-error: U+D5C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C4");
    },
    Error,
    "encode-error: U+D5C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C5");
    },
    Error,
    "encode-error: U+D5C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C6");
    },
    Error,
    "encode-error: U+D5C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C7");
    },
    Error,
    "encode-error: U+D5C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C8");
    },
    Error,
    "encode-error: U+D5C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5C9");
    },
    Error,
    "encode-error: U+D5C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5CA");
    },
    Error,
    "encode-error: U+D5CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5CB");
    },
    Error,
    "encode-error: U+D5CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5CC");
    },
    Error,
    "encode-error: U+D5CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5CD");
    },
    Error,
    "encode-error: U+D5CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5CE");
    },
    Error,
    "encode-error: U+D5CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5CF");
    },
    Error,
    "encode-error: U+D5CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D0");
    },
    Error,
    "encode-error: U+D5D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D1");
    },
    Error,
    "encode-error: U+D5D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D2");
    },
    Error,
    "encode-error: U+D5D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D3");
    },
    Error,
    "encode-error: U+D5D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D4");
    },
    Error,
    "encode-error: U+D5D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D5");
    },
    Error,
    "encode-error: U+D5D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D6");
    },
    Error,
    "encode-error: U+D5D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D7");
    },
    Error,
    "encode-error: U+D5D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D8");
    },
    Error,
    "encode-error: U+D5D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5D9");
    },
    Error,
    "encode-error: U+D5D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5DA");
    },
    Error,
    "encode-error: U+D5DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5DB");
    },
    Error,
    "encode-error: U+D5DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5DC");
    },
    Error,
    "encode-error: U+D5DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5DD");
    },
    Error,
    "encode-error: U+D5DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5DE");
    },
    Error,
    "encode-error: U+D5DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5DF");
    },
    Error,
    "encode-error: U+D5DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E0");
    },
    Error,
    "encode-error: U+D5E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E1");
    },
    Error,
    "encode-error: U+D5E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E2");
    },
    Error,
    "encode-error: U+D5E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E3");
    },
    Error,
    "encode-error: U+D5E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E4");
    },
    Error,
    "encode-error: U+D5E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E5");
    },
    Error,
    "encode-error: U+D5E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E6");
    },
    Error,
    "encode-error: U+D5E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E7");
    },
    Error,
    "encode-error: U+D5E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E8");
    },
    Error,
    "encode-error: U+D5E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5E9");
    },
    Error,
    "encode-error: U+D5E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5EA");
    },
    Error,
    "encode-error: U+D5EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5EB");
    },
    Error,
    "encode-error: U+D5EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5EC");
    },
    Error,
    "encode-error: U+D5EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5ED");
    },
    Error,
    "encode-error: U+D5ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5EE");
    },
    Error,
    "encode-error: U+D5EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5EF");
    },
    Error,
    "encode-error: U+D5EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F0");
    },
    Error,
    "encode-error: U+D5F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F1");
    },
    Error,
    "encode-error: U+D5F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F2");
    },
    Error,
    "encode-error: U+D5F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F3");
    },
    Error,
    "encode-error: U+D5F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F4");
    },
    Error,
    "encode-error: U+D5F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F5");
    },
    Error,
    "encode-error: U+D5F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F6");
    },
    Error,
    "encode-error: U+D5F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F7");
    },
    Error,
    "encode-error: U+D5F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F8");
    },
    Error,
    "encode-error: U+D5F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5F9");
    },
    Error,
    "encode-error: U+D5F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5FA");
    },
    Error,
    "encode-error: U+D5FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5FB");
    },
    Error,
    "encode-error: U+D5FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5FC");
    },
    Error,
    "encode-error: U+D5FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5FD");
    },
    Error,
    "encode-error: U+D5FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5FE");
    },
    Error,
    "encode-error: U+D5FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD5FF");
    },
    Error,
    "encode-error: U+D5FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD600");
    },
    Error,
    "encode-error: U+D600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD601");
    },
    Error,
    "encode-error: U+D601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD602");
    },
    Error,
    "encode-error: U+D602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD603");
    },
    Error,
    "encode-error: U+D603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD604");
    },
    Error,
    "encode-error: U+D604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD605");
    },
    Error,
    "encode-error: U+D605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD606");
    },
    Error,
    "encode-error: U+D606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD607");
    },
    Error,
    "encode-error: U+D607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD608");
    },
    Error,
    "encode-error: U+D608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD609");
    },
    Error,
    "encode-error: U+D609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD60A");
    },
    Error,
    "encode-error: U+D60A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD60B");
    },
    Error,
    "encode-error: U+D60B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD60C");
    },
    Error,
    "encode-error: U+D60C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD60D");
    },
    Error,
    "encode-error: U+D60D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD60E");
    },
    Error,
    "encode-error: U+D60E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD60F");
    },
    Error,
    "encode-error: U+D60F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD610");
    },
    Error,
    "encode-error: U+D610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD611");
    },
    Error,
    "encode-error: U+D611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD612");
    },
    Error,
    "encode-error: U+D612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD613");
    },
    Error,
    "encode-error: U+D613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD614");
    },
    Error,
    "encode-error: U+D614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD615");
    },
    Error,
    "encode-error: U+D615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD616");
    },
    Error,
    "encode-error: U+D616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD617");
    },
    Error,
    "encode-error: U+D617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD618");
    },
    Error,
    "encode-error: U+D618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD619");
    },
    Error,
    "encode-error: U+D619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD61A");
    },
    Error,
    "encode-error: U+D61A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD61B");
    },
    Error,
    "encode-error: U+D61B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD61C");
    },
    Error,
    "encode-error: U+D61C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD61D");
    },
    Error,
    "encode-error: U+D61D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD61E");
    },
    Error,
    "encode-error: U+D61E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD61F");
    },
    Error,
    "encode-error: U+D61F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD620");
    },
    Error,
    "encode-error: U+D620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD621");
    },
    Error,
    "encode-error: U+D621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD622");
    },
    Error,
    "encode-error: U+D622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD623");
    },
    Error,
    "encode-error: U+D623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD624");
    },
    Error,
    "encode-error: U+D624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD625");
    },
    Error,
    "encode-error: U+D625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD626");
    },
    Error,
    "encode-error: U+D626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD627");
    },
    Error,
    "encode-error: U+D627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD628");
    },
    Error,
    "encode-error: U+D628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD629");
    },
    Error,
    "encode-error: U+D629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD62A");
    },
    Error,
    "encode-error: U+D62A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD62B");
    },
    Error,
    "encode-error: U+D62B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD62C");
    },
    Error,
    "encode-error: U+D62C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD62D");
    },
    Error,
    "encode-error: U+D62D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD62E");
    },
    Error,
    "encode-error: U+D62E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD62F");
    },
    Error,
    "encode-error: U+D62F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD630");
    },
    Error,
    "encode-error: U+D630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD631");
    },
    Error,
    "encode-error: U+D631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD632");
    },
    Error,
    "encode-error: U+D632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD633");
    },
    Error,
    "encode-error: U+D633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD634");
    },
    Error,
    "encode-error: U+D634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD635");
    },
    Error,
    "encode-error: U+D635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD636");
    },
    Error,
    "encode-error: U+D636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD637");
    },
    Error,
    "encode-error: U+D637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD638");
    },
    Error,
    "encode-error: U+D638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD639");
    },
    Error,
    "encode-error: U+D639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD63A");
    },
    Error,
    "encode-error: U+D63A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD63B");
    },
    Error,
    "encode-error: U+D63B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD63C");
    },
    Error,
    "encode-error: U+D63C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD63D");
    },
    Error,
    "encode-error: U+D63D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD63E");
    },
    Error,
    "encode-error: U+D63E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD63F");
    },
    Error,
    "encode-error: U+D63F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD640");
    },
    Error,
    "encode-error: U+D640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD641");
    },
    Error,
    "encode-error: U+D641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD642");
    },
    Error,
    "encode-error: U+D642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD643");
    },
    Error,
    "encode-error: U+D643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD644");
    },
    Error,
    "encode-error: U+D644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD645");
    },
    Error,
    "encode-error: U+D645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD646");
    },
    Error,
    "encode-error: U+D646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD647");
    },
    Error,
    "encode-error: U+D647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD648");
    },
    Error,
    "encode-error: U+D648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD649");
    },
    Error,
    "encode-error: U+D649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD64A");
    },
    Error,
    "encode-error: U+D64A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD64B");
    },
    Error,
    "encode-error: U+D64B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD64C");
    },
    Error,
    "encode-error: U+D64C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD64D");
    },
    Error,
    "encode-error: U+D64D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD64E");
    },
    Error,
    "encode-error: U+D64E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD64F");
    },
    Error,
    "encode-error: U+D64F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD650");
    },
    Error,
    "encode-error: U+D650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD651");
    },
    Error,
    "encode-error: U+D651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD652");
    },
    Error,
    "encode-error: U+D652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD653");
    },
    Error,
    "encode-error: U+D653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD654");
    },
    Error,
    "encode-error: U+D654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD655");
    },
    Error,
    "encode-error: U+D655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD656");
    },
    Error,
    "encode-error: U+D656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD657");
    },
    Error,
    "encode-error: U+D657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD658");
    },
    Error,
    "encode-error: U+D658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD659");
    },
    Error,
    "encode-error: U+D659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD65A");
    },
    Error,
    "encode-error: U+D65A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD65B");
    },
    Error,
    "encode-error: U+D65B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD65C");
    },
    Error,
    "encode-error: U+D65C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD65D");
    },
    Error,
    "encode-error: U+D65D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD65E");
    },
    Error,
    "encode-error: U+D65E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD65F");
    },
    Error,
    "encode-error: U+D65F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD660");
    },
    Error,
    "encode-error: U+D660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD661");
    },
    Error,
    "encode-error: U+D661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD662");
    },
    Error,
    "encode-error: U+D662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD663");
    },
    Error,
    "encode-error: U+D663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD664");
    },
    Error,
    "encode-error: U+D664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD665");
    },
    Error,
    "encode-error: U+D665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD666");
    },
    Error,
    "encode-error: U+D666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD667");
    },
    Error,
    "encode-error: U+D667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD668");
    },
    Error,
    "encode-error: U+D668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD669");
    },
    Error,
    "encode-error: U+D669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD66A");
    },
    Error,
    "encode-error: U+D66A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD66B");
    },
    Error,
    "encode-error: U+D66B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD66C");
    },
    Error,
    "encode-error: U+D66C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD66D");
    },
    Error,
    "encode-error: U+D66D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD66E");
    },
    Error,
    "encode-error: U+D66E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD66F");
    },
    Error,
    "encode-error: U+D66F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD670");
    },
    Error,
    "encode-error: U+D670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD671");
    },
    Error,
    "encode-error: U+D671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD672");
    },
    Error,
    "encode-error: U+D672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD673");
    },
    Error,
    "encode-error: U+D673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD674");
    },
    Error,
    "encode-error: U+D674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD675");
    },
    Error,
    "encode-error: U+D675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD676");
    },
    Error,
    "encode-error: U+D676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD677");
    },
    Error,
    "encode-error: U+D677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD678");
    },
    Error,
    "encode-error: U+D678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD679");
    },
    Error,
    "encode-error: U+D679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD67A");
    },
    Error,
    "encode-error: U+D67A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD67B");
    },
    Error,
    "encode-error: U+D67B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD67C");
    },
    Error,
    "encode-error: U+D67C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD67D");
    },
    Error,
    "encode-error: U+D67D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD67E");
    },
    Error,
    "encode-error: U+D67E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD67F");
    },
    Error,
    "encode-error: U+D67F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD680");
    },
    Error,
    "encode-error: U+D680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD681");
    },
    Error,
    "encode-error: U+D681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD682");
    },
    Error,
    "encode-error: U+D682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD683");
    },
    Error,
    "encode-error: U+D683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD684");
    },
    Error,
    "encode-error: U+D684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD685");
    },
    Error,
    "encode-error: U+D685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD686");
    },
    Error,
    "encode-error: U+D686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD687");
    },
    Error,
    "encode-error: U+D687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD688");
    },
    Error,
    "encode-error: U+D688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD689");
    },
    Error,
    "encode-error: U+D689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD68A");
    },
    Error,
    "encode-error: U+D68A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD68B");
    },
    Error,
    "encode-error: U+D68B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD68C");
    },
    Error,
    "encode-error: U+D68C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD68D");
    },
    Error,
    "encode-error: U+D68D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD68E");
    },
    Error,
    "encode-error: U+D68E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD68F");
    },
    Error,
    "encode-error: U+D68F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD690");
    },
    Error,
    "encode-error: U+D690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD691");
    },
    Error,
    "encode-error: U+D691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD692");
    },
    Error,
    "encode-error: U+D692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD693");
    },
    Error,
    "encode-error: U+D693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD694");
    },
    Error,
    "encode-error: U+D694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD695");
    },
    Error,
    "encode-error: U+D695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD696");
    },
    Error,
    "encode-error: U+D696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD697");
    },
    Error,
    "encode-error: U+D697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD698");
    },
    Error,
    "encode-error: U+D698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD699");
    },
    Error,
    "encode-error: U+D699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD69A");
    },
    Error,
    "encode-error: U+D69A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD69B");
    },
    Error,
    "encode-error: U+D69B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD69C");
    },
    Error,
    "encode-error: U+D69C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD69D");
    },
    Error,
    "encode-error: U+D69D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD69E");
    },
    Error,
    "encode-error: U+D69E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD69F");
    },
    Error,
    "encode-error: U+D69F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A0");
    },
    Error,
    "encode-error: U+D6A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A1");
    },
    Error,
    "encode-error: U+D6A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A2");
    },
    Error,
    "encode-error: U+D6A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A3");
    },
    Error,
    "encode-error: U+D6A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A4");
    },
    Error,
    "encode-error: U+D6A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A5");
    },
    Error,
    "encode-error: U+D6A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A6");
    },
    Error,
    "encode-error: U+D6A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A7");
    },
    Error,
    "encode-error: U+D6A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A8");
    },
    Error,
    "encode-error: U+D6A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6A9");
    },
    Error,
    "encode-error: U+D6A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6AA");
    },
    Error,
    "encode-error: U+D6AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6AB");
    },
    Error,
    "encode-error: U+D6AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6AC");
    },
    Error,
    "encode-error: U+D6AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6AD");
    },
    Error,
    "encode-error: U+D6AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6AE");
    },
    Error,
    "encode-error: U+D6AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6AF");
    },
    Error,
    "encode-error: U+D6AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B0");
    },
    Error,
    "encode-error: U+D6B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B1");
    },
    Error,
    "encode-error: U+D6B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B2");
    },
    Error,
    "encode-error: U+D6B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B3");
    },
    Error,
    "encode-error: U+D6B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B4");
    },
    Error,
    "encode-error: U+D6B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B5");
    },
    Error,
    "encode-error: U+D6B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B6");
    },
    Error,
    "encode-error: U+D6B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B7");
    },
    Error,
    "encode-error: U+D6B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B8");
    },
    Error,
    "encode-error: U+D6B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6B9");
    },
    Error,
    "encode-error: U+D6B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6BA");
    },
    Error,
    "encode-error: U+D6BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6BB");
    },
    Error,
    "encode-error: U+D6BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6BC");
    },
    Error,
    "encode-error: U+D6BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6BD");
    },
    Error,
    "encode-error: U+D6BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6BE");
    },
    Error,
    "encode-error: U+D6BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6BF");
    },
    Error,
    "encode-error: U+D6BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C0");
    },
    Error,
    "encode-error: U+D6C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C1");
    },
    Error,
    "encode-error: U+D6C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C2");
    },
    Error,
    "encode-error: U+D6C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C3");
    },
    Error,
    "encode-error: U+D6C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C4");
    },
    Error,
    "encode-error: U+D6C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C5");
    },
    Error,
    "encode-error: U+D6C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C6");
    },
    Error,
    "encode-error: U+D6C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C7");
    },
    Error,
    "encode-error: U+D6C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C8");
    },
    Error,
    "encode-error: U+D6C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6C9");
    },
    Error,
    "encode-error: U+D6C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6CA");
    },
    Error,
    "encode-error: U+D6CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6CB");
    },
    Error,
    "encode-error: U+D6CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6CC");
    },
    Error,
    "encode-error: U+D6CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6CD");
    },
    Error,
    "encode-error: U+D6CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6CE");
    },
    Error,
    "encode-error: U+D6CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6CF");
    },
    Error,
    "encode-error: U+D6CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D0");
    },
    Error,
    "encode-error: U+D6D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D1");
    },
    Error,
    "encode-error: U+D6D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D2");
    },
    Error,
    "encode-error: U+D6D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D3");
    },
    Error,
    "encode-error: U+D6D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D4");
    },
    Error,
    "encode-error: U+D6D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D5");
    },
    Error,
    "encode-error: U+D6D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D6");
    },
    Error,
    "encode-error: U+D6D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D7");
    },
    Error,
    "encode-error: U+D6D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D8");
    },
    Error,
    "encode-error: U+D6D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6D9");
    },
    Error,
    "encode-error: U+D6D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6DA");
    },
    Error,
    "encode-error: U+D6DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6DB");
    },
    Error,
    "encode-error: U+D6DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6DC");
    },
    Error,
    "encode-error: U+D6DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6DD");
    },
    Error,
    "encode-error: U+D6DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6DE");
    },
    Error,
    "encode-error: U+D6DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6DF");
    },
    Error,
    "encode-error: U+D6DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E0");
    },
    Error,
    "encode-error: U+D6E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E1");
    },
    Error,
    "encode-error: U+D6E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E2");
    },
    Error,
    "encode-error: U+D6E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E3");
    },
    Error,
    "encode-error: U+D6E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E4");
    },
    Error,
    "encode-error: U+D6E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E5");
    },
    Error,
    "encode-error: U+D6E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E6");
    },
    Error,
    "encode-error: U+D6E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E7");
    },
    Error,
    "encode-error: U+D6E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E8");
    },
    Error,
    "encode-error: U+D6E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6E9");
    },
    Error,
    "encode-error: U+D6E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6EA");
    },
    Error,
    "encode-error: U+D6EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6EB");
    },
    Error,
    "encode-error: U+D6EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6EC");
    },
    Error,
    "encode-error: U+D6EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6ED");
    },
    Error,
    "encode-error: U+D6ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6EE");
    },
    Error,
    "encode-error: U+D6EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6EF");
    },
    Error,
    "encode-error: U+D6EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F0");
    },
    Error,
    "encode-error: U+D6F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F1");
    },
    Error,
    "encode-error: U+D6F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F2");
    },
    Error,
    "encode-error: U+D6F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F3");
    },
    Error,
    "encode-error: U+D6F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F4");
    },
    Error,
    "encode-error: U+D6F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F5");
    },
    Error,
    "encode-error: U+D6F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F6");
    },
    Error,
    "encode-error: U+D6F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F7");
    },
    Error,
    "encode-error: U+D6F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F8");
    },
    Error,
    "encode-error: U+D6F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6F9");
    },
    Error,
    "encode-error: U+D6F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6FA");
    },
    Error,
    "encode-error: U+D6FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6FB");
    },
    Error,
    "encode-error: U+D6FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6FC");
    },
    Error,
    "encode-error: U+D6FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6FD");
    },
    Error,
    "encode-error: U+D6FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6FE");
    },
    Error,
    "encode-error: U+D6FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD6FF");
    },
    Error,
    "encode-error: U+D6FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD700");
    },
    Error,
    "encode-error: U+D700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD701");
    },
    Error,
    "encode-error: U+D701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD702");
    },
    Error,
    "encode-error: U+D702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD703");
    },
    Error,
    "encode-error: U+D703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD704");
    },
    Error,
    "encode-error: U+D704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD705");
    },
    Error,
    "encode-error: U+D705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD706");
    },
    Error,
    "encode-error: U+D706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD707");
    },
    Error,
    "encode-error: U+D707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD708");
    },
    Error,
    "encode-error: U+D708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD709");
    },
    Error,
    "encode-error: U+D709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD70A");
    },
    Error,
    "encode-error: U+D70A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD70B");
    },
    Error,
    "encode-error: U+D70B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD70C");
    },
    Error,
    "encode-error: U+D70C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD70D");
    },
    Error,
    "encode-error: U+D70D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD70E");
    },
    Error,
    "encode-error: U+D70E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD70F");
    },
    Error,
    "encode-error: U+D70F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD710");
    },
    Error,
    "encode-error: U+D710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD711");
    },
    Error,
    "encode-error: U+D711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD712");
    },
    Error,
    "encode-error: U+D712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD713");
    },
    Error,
    "encode-error: U+D713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD714");
    },
    Error,
    "encode-error: U+D714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD715");
    },
    Error,
    "encode-error: U+D715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD716");
    },
    Error,
    "encode-error: U+D716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD717");
    },
    Error,
    "encode-error: U+D717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD718");
    },
    Error,
    "encode-error: U+D718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD719");
    },
    Error,
    "encode-error: U+D719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD71A");
    },
    Error,
    "encode-error: U+D71A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD71B");
    },
    Error,
    "encode-error: U+D71B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD71C");
    },
    Error,
    "encode-error: U+D71C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD71D");
    },
    Error,
    "encode-error: U+D71D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD71E");
    },
    Error,
    "encode-error: U+D71E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD71F");
    },
    Error,
    "encode-error: U+D71F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD720");
    },
    Error,
    "encode-error: U+D720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD721");
    },
    Error,
    "encode-error: U+D721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD722");
    },
    Error,
    "encode-error: U+D722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD723");
    },
    Error,
    "encode-error: U+D723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD724");
    },
    Error,
    "encode-error: U+D724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD725");
    },
    Error,
    "encode-error: U+D725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD726");
    },
    Error,
    "encode-error: U+D726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD727");
    },
    Error,
    "encode-error: U+D727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD728");
    },
    Error,
    "encode-error: U+D728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD729");
    },
    Error,
    "encode-error: U+D729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD72A");
    },
    Error,
    "encode-error: U+D72A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD72B");
    },
    Error,
    "encode-error: U+D72B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD72C");
    },
    Error,
    "encode-error: U+D72C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD72D");
    },
    Error,
    "encode-error: U+D72D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD72E");
    },
    Error,
    "encode-error: U+D72E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD72F");
    },
    Error,
    "encode-error: U+D72F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD730");
    },
    Error,
    "encode-error: U+D730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD731");
    },
    Error,
    "encode-error: U+D731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD732");
    },
    Error,
    "encode-error: U+D732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD733");
    },
    Error,
    "encode-error: U+D733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD734");
    },
    Error,
    "encode-error: U+D734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD735");
    },
    Error,
    "encode-error: U+D735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD736");
    },
    Error,
    "encode-error: U+D736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD737");
    },
    Error,
    "encode-error: U+D737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD738");
    },
    Error,
    "encode-error: U+D738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD739");
    },
    Error,
    "encode-error: U+D739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD73A");
    },
    Error,
    "encode-error: U+D73A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD73B");
    },
    Error,
    "encode-error: U+D73B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD73C");
    },
    Error,
    "encode-error: U+D73C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD73D");
    },
    Error,
    "encode-error: U+D73D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD73E");
    },
    Error,
    "encode-error: U+D73E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD73F");
    },
    Error,
    "encode-error: U+D73F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD740");
    },
    Error,
    "encode-error: U+D740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD741");
    },
    Error,
    "encode-error: U+D741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD742");
    },
    Error,
    "encode-error: U+D742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD743");
    },
    Error,
    "encode-error: U+D743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD744");
    },
    Error,
    "encode-error: U+D744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD745");
    },
    Error,
    "encode-error: U+D745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD746");
    },
    Error,
    "encode-error: U+D746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD747");
    },
    Error,
    "encode-error: U+D747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD748");
    },
    Error,
    "encode-error: U+D748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD749");
    },
    Error,
    "encode-error: U+D749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD74A");
    },
    Error,
    "encode-error: U+D74A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD74B");
    },
    Error,
    "encode-error: U+D74B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD74C");
    },
    Error,
    "encode-error: U+D74C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD74D");
    },
    Error,
    "encode-error: U+D74D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD74E");
    },
    Error,
    "encode-error: U+D74E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD74F");
    },
    Error,
    "encode-error: U+D74F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD750");
    },
    Error,
    "encode-error: U+D750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD751");
    },
    Error,
    "encode-error: U+D751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD752");
    },
    Error,
    "encode-error: U+D752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD753");
    },
    Error,
    "encode-error: U+D753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD754");
    },
    Error,
    "encode-error: U+D754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD755");
    },
    Error,
    "encode-error: U+D755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD756");
    },
    Error,
    "encode-error: U+D756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD757");
    },
    Error,
    "encode-error: U+D757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD758");
    },
    Error,
    "encode-error: U+D758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD759");
    },
    Error,
    "encode-error: U+D759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD75A");
    },
    Error,
    "encode-error: U+D75A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD75B");
    },
    Error,
    "encode-error: U+D75B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD75C");
    },
    Error,
    "encode-error: U+D75C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD75D");
    },
    Error,
    "encode-error: U+D75D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD75E");
    },
    Error,
    "encode-error: U+D75E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD75F");
    },
    Error,
    "encode-error: U+D75F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD760");
    },
    Error,
    "encode-error: U+D760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD761");
    },
    Error,
    "encode-error: U+D761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD762");
    },
    Error,
    "encode-error: U+D762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD763");
    },
    Error,
    "encode-error: U+D763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD764");
    },
    Error,
    "encode-error: U+D764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD765");
    },
    Error,
    "encode-error: U+D765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD766");
    },
    Error,
    "encode-error: U+D766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD767");
    },
    Error,
    "encode-error: U+D767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD768");
    },
    Error,
    "encode-error: U+D768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD769");
    },
    Error,
    "encode-error: U+D769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD76A");
    },
    Error,
    "encode-error: U+D76A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD76B");
    },
    Error,
    "encode-error: U+D76B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD76C");
    },
    Error,
    "encode-error: U+D76C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD76D");
    },
    Error,
    "encode-error: U+D76D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD76E");
    },
    Error,
    "encode-error: U+D76E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD76F");
    },
    Error,
    "encode-error: U+D76F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD770");
    },
    Error,
    "encode-error: U+D770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD771");
    },
    Error,
    "encode-error: U+D771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD772");
    },
    Error,
    "encode-error: U+D772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD773");
    },
    Error,
    "encode-error: U+D773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD774");
    },
    Error,
    "encode-error: U+D774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD775");
    },
    Error,
    "encode-error: U+D775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD776");
    },
    Error,
    "encode-error: U+D776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD777");
    },
    Error,
    "encode-error: U+D777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD778");
    },
    Error,
    "encode-error: U+D778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD779");
    },
    Error,
    "encode-error: U+D779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD77A");
    },
    Error,
    "encode-error: U+D77A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD77B");
    },
    Error,
    "encode-error: U+D77B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD77C");
    },
    Error,
    "encode-error: U+D77C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD77D");
    },
    Error,
    "encode-error: U+D77D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD77E");
    },
    Error,
    "encode-error: U+D77E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD77F");
    },
    Error,
    "encode-error: U+D77F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD780");
    },
    Error,
    "encode-error: U+D780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD781");
    },
    Error,
    "encode-error: U+D781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD782");
    },
    Error,
    "encode-error: U+D782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD783");
    },
    Error,
    "encode-error: U+D783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD784");
    },
    Error,
    "encode-error: U+D784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD785");
    },
    Error,
    "encode-error: U+D785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD786");
    },
    Error,
    "encode-error: U+D786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD787");
    },
    Error,
    "encode-error: U+D787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD788");
    },
    Error,
    "encode-error: U+D788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD789");
    },
    Error,
    "encode-error: U+D789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD78A");
    },
    Error,
    "encode-error: U+D78A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD78B");
    },
    Error,
    "encode-error: U+D78B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD78C");
    },
    Error,
    "encode-error: U+D78C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD78D");
    },
    Error,
    "encode-error: U+D78D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD78E");
    },
    Error,
    "encode-error: U+D78E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD78F");
    },
    Error,
    "encode-error: U+D78F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD790");
    },
    Error,
    "encode-error: U+D790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD791");
    },
    Error,
    "encode-error: U+D791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD792");
    },
    Error,
    "encode-error: U+D792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD793");
    },
    Error,
    "encode-error: U+D793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD794");
    },
    Error,
    "encode-error: U+D794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD795");
    },
    Error,
    "encode-error: U+D795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD796");
    },
    Error,
    "encode-error: U+D796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD797");
    },
    Error,
    "encode-error: U+D797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD798");
    },
    Error,
    "encode-error: U+D798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD799");
    },
    Error,
    "encode-error: U+D799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD79A");
    },
    Error,
    "encode-error: U+D79A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD79B");
    },
    Error,
    "encode-error: U+D79B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD79C");
    },
    Error,
    "encode-error: U+D79C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD79D");
    },
    Error,
    "encode-error: U+D79D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD79E");
    },
    Error,
    "encode-error: U+D79E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD79F");
    },
    Error,
    "encode-error: U+D79F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A0");
    },
    Error,
    "encode-error: U+D7A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A1");
    },
    Error,
    "encode-error: U+D7A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A2");
    },
    Error,
    "encode-error: U+D7A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A3");
    },
    Error,
    "encode-error: U+D7A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A4");
    },
    Error,
    "encode-error: U+D7A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A5");
    },
    Error,
    "encode-error: U+D7A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A6");
    },
    Error,
    "encode-error: U+D7A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A7");
    },
    Error,
    "encode-error: U+D7A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A8");
    },
    Error,
    "encode-error: U+D7A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7A9");
    },
    Error,
    "encode-error: U+D7A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7AA");
    },
    Error,
    "encode-error: U+D7AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7AB");
    },
    Error,
    "encode-error: U+D7AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7AC");
    },
    Error,
    "encode-error: U+D7AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7AD");
    },
    Error,
    "encode-error: U+D7AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7AE");
    },
    Error,
    "encode-error: U+D7AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7AF");
    },
    Error,
    "encode-error: U+D7AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B0");
    },
    Error,
    "encode-error: U+D7B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B1");
    },
    Error,
    "encode-error: U+D7B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B2");
    },
    Error,
    "encode-error: U+D7B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B3");
    },
    Error,
    "encode-error: U+D7B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B4");
    },
    Error,
    "encode-error: U+D7B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B5");
    },
    Error,
    "encode-error: U+D7B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B6");
    },
    Error,
    "encode-error: U+D7B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B7");
    },
    Error,
    "encode-error: U+D7B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B8");
    },
    Error,
    "encode-error: U+D7B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7B9");
    },
    Error,
    "encode-error: U+D7B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7BA");
    },
    Error,
    "encode-error: U+D7BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7BB");
    },
    Error,
    "encode-error: U+D7BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7BC");
    },
    Error,
    "encode-error: U+D7BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7BD");
    },
    Error,
    "encode-error: U+D7BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7BE");
    },
    Error,
    "encode-error: U+D7BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7BF");
    },
    Error,
    "encode-error: U+D7BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C0");
    },
    Error,
    "encode-error: U+D7C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C1");
    },
    Error,
    "encode-error: U+D7C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C2");
    },
    Error,
    "encode-error: U+D7C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C3");
    },
    Error,
    "encode-error: U+D7C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C4");
    },
    Error,
    "encode-error: U+D7C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C5");
    },
    Error,
    "encode-error: U+D7C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C6");
    },
    Error,
    "encode-error: U+D7C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C7");
    },
    Error,
    "encode-error: U+D7C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C8");
    },
    Error,
    "encode-error: U+D7C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7C9");
    },
    Error,
    "encode-error: U+D7C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7CA");
    },
    Error,
    "encode-error: U+D7CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7CB");
    },
    Error,
    "encode-error: U+D7CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7CC");
    },
    Error,
    "encode-error: U+D7CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7CD");
    },
    Error,
    "encode-error: U+D7CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7CE");
    },
    Error,
    "encode-error: U+D7CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7CF");
    },
    Error,
    "encode-error: U+D7CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D0");
    },
    Error,
    "encode-error: U+D7D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D1");
    },
    Error,
    "encode-error: U+D7D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D2");
    },
    Error,
    "encode-error: U+D7D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D3");
    },
    Error,
    "encode-error: U+D7D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D4");
    },
    Error,
    "encode-error: U+D7D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D5");
    },
    Error,
    "encode-error: U+D7D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D6");
    },
    Error,
    "encode-error: U+D7D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D7");
    },
    Error,
    "encode-error: U+D7D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D8");
    },
    Error,
    "encode-error: U+D7D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7D9");
    },
    Error,
    "encode-error: U+D7D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7DA");
    },
    Error,
    "encode-error: U+D7DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7DB");
    },
    Error,
    "encode-error: U+D7DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7DC");
    },
    Error,
    "encode-error: U+D7DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7DD");
    },
    Error,
    "encode-error: U+D7DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7DE");
    },
    Error,
    "encode-error: U+D7DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7DF");
    },
    Error,
    "encode-error: U+D7DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E0");
    },
    Error,
    "encode-error: U+D7E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E1");
    },
    Error,
    "encode-error: U+D7E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E2");
    },
    Error,
    "encode-error: U+D7E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E3");
    },
    Error,
    "encode-error: U+D7E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E4");
    },
    Error,
    "encode-error: U+D7E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E5");
    },
    Error,
    "encode-error: U+D7E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E6");
    },
    Error,
    "encode-error: U+D7E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E7");
    },
    Error,
    "encode-error: U+D7E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E8");
    },
    Error,
    "encode-error: U+D7E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7E9");
    },
    Error,
    "encode-error: U+D7E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7EA");
    },
    Error,
    "encode-error: U+D7EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7EB");
    },
    Error,
    "encode-error: U+D7EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7EC");
    },
    Error,
    "encode-error: U+D7EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7ED");
    },
    Error,
    "encode-error: U+D7ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7EE");
    },
    Error,
    "encode-error: U+D7EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7EF");
    },
    Error,
    "encode-error: U+D7EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F0");
    },
    Error,
    "encode-error: U+D7F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F1");
    },
    Error,
    "encode-error: U+D7F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F2");
    },
    Error,
    "encode-error: U+D7F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F3");
    },
    Error,
    "encode-error: U+D7F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F4");
    },
    Error,
    "encode-error: U+D7F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F5");
    },
    Error,
    "encode-error: U+D7F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F6");
    },
    Error,
    "encode-error: U+D7F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F7");
    },
    Error,
    "encode-error: U+D7F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F8");
    },
    Error,
    "encode-error: U+D7F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7F9");
    },
    Error,
    "encode-error: U+D7F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7FA");
    },
    Error,
    "encode-error: U+D7FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7FB");
    },
    Error,
    "encode-error: U+D7FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7FC");
    },
    Error,
    "encode-error: U+D7FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7FD");
    },
    Error,
    "encode-error: U+D7FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7FE");
    },
    Error,
    "encode-error: U+D7FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD7FF");
    },
    Error,
    "encode-error: U+D7FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD800");
    },
    Error,
    "encode-error: U+D800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD801");
    },
    Error,
    "encode-error: U+D801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD802");
    },
    Error,
    "encode-error: U+D802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD803");
    },
    Error,
    "encode-error: U+D803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD804");
    },
    Error,
    "encode-error: U+D804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD805");
    },
    Error,
    "encode-error: U+D805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD806");
    },
    Error,
    "encode-error: U+D806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD807");
    },
    Error,
    "encode-error: U+D807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD808");
    },
    Error,
    "encode-error: U+D808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD809");
    },
    Error,
    "encode-error: U+D809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD80A");
    },
    Error,
    "encode-error: U+D80A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD80B");
    },
    Error,
    "encode-error: U+D80B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD80C");
    },
    Error,
    "encode-error: U+D80C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD80D");
    },
    Error,
    "encode-error: U+D80D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD80E");
    },
    Error,
    "encode-error: U+D80E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD80F");
    },
    Error,
    "encode-error: U+D80F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD810");
    },
    Error,
    "encode-error: U+D810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD811");
    },
    Error,
    "encode-error: U+D811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD812");
    },
    Error,
    "encode-error: U+D812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD813");
    },
    Error,
    "encode-error: U+D813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD814");
    },
    Error,
    "encode-error: U+D814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD815");
    },
    Error,
    "encode-error: U+D815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD816");
    },
    Error,
    "encode-error: U+D816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD817");
    },
    Error,
    "encode-error: U+D817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD818");
    },
    Error,
    "encode-error: U+D818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD819");
    },
    Error,
    "encode-error: U+D819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD81A");
    },
    Error,
    "encode-error: U+D81A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD81B");
    },
    Error,
    "encode-error: U+D81B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD81C");
    },
    Error,
    "encode-error: U+D81C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD81D");
    },
    Error,
    "encode-error: U+D81D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD81E");
    },
    Error,
    "encode-error: U+D81E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD81F");
    },
    Error,
    "encode-error: U+D81F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD820");
    },
    Error,
    "encode-error: U+D820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD821");
    },
    Error,
    "encode-error: U+D821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD822");
    },
    Error,
    "encode-error: U+D822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD823");
    },
    Error,
    "encode-error: U+D823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD824");
    },
    Error,
    "encode-error: U+D824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD825");
    },
    Error,
    "encode-error: U+D825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD826");
    },
    Error,
    "encode-error: U+D826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD827");
    },
    Error,
    "encode-error: U+D827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD828");
    },
    Error,
    "encode-error: U+D828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD829");
    },
    Error,
    "encode-error: U+D829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD82A");
    },
    Error,
    "encode-error: U+D82A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD82B");
    },
    Error,
    "encode-error: U+D82B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD82C");
    },
    Error,
    "encode-error: U+D82C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD82D");
    },
    Error,
    "encode-error: U+D82D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD82E");
    },
    Error,
    "encode-error: U+D82E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD82F");
    },
    Error,
    "encode-error: U+D82F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD830");
    },
    Error,
    "encode-error: U+D830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD831");
    },
    Error,
    "encode-error: U+D831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD832");
    },
    Error,
    "encode-error: U+D832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD833");
    },
    Error,
    "encode-error: U+D833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD834");
    },
    Error,
    "encode-error: U+D834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD835");
    },
    Error,
    "encode-error: U+D835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD836");
    },
    Error,
    "encode-error: U+D836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD837");
    },
    Error,
    "encode-error: U+D837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD838");
    },
    Error,
    "encode-error: U+D838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD839");
    },
    Error,
    "encode-error: U+D839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD83A");
    },
    Error,
    "encode-error: U+D83A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD83B");
    },
    Error,
    "encode-error: U+D83B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD83C");
    },
    Error,
    "encode-error: U+D83C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD83D");
    },
    Error,
    "encode-error: U+D83D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD83E");
    },
    Error,
    "encode-error: U+D83E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD83F");
    },
    Error,
    "encode-error: U+D83F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD840");
    },
    Error,
    "encode-error: U+D840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD841");
    },
    Error,
    "encode-error: U+D841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD842");
    },
    Error,
    "encode-error: U+D842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD843");
    },
    Error,
    "encode-error: U+D843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD844");
    },
    Error,
    "encode-error: U+D844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD845");
    },
    Error,
    "encode-error: U+D845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD846");
    },
    Error,
    "encode-error: U+D846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD847");
    },
    Error,
    "encode-error: U+D847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD848");
    },
    Error,
    "encode-error: U+D848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD849");
    },
    Error,
    "encode-error: U+D849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD84A");
    },
    Error,
    "encode-error: U+D84A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD84B");
    },
    Error,
    "encode-error: U+D84B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD84C");
    },
    Error,
    "encode-error: U+D84C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD84D");
    },
    Error,
    "encode-error: U+D84D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD84E");
    },
    Error,
    "encode-error: U+D84E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD84F");
    },
    Error,
    "encode-error: U+D84F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD850");
    },
    Error,
    "encode-error: U+D850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD851");
    },
    Error,
    "encode-error: U+D851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD852");
    },
    Error,
    "encode-error: U+D852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD853");
    },
    Error,
    "encode-error: U+D853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD854");
    },
    Error,
    "encode-error: U+D854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD855");
    },
    Error,
    "encode-error: U+D855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD856");
    },
    Error,
    "encode-error: U+D856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD857");
    },
    Error,
    "encode-error: U+D857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD858");
    },
    Error,
    "encode-error: U+D858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD859");
    },
    Error,
    "encode-error: U+D859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD85A");
    },
    Error,
    "encode-error: U+D85A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD85B");
    },
    Error,
    "encode-error: U+D85B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD85C");
    },
    Error,
    "encode-error: U+D85C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD85D");
    },
    Error,
    "encode-error: U+D85D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD85E");
    },
    Error,
    "encode-error: U+D85E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD85F");
    },
    Error,
    "encode-error: U+D85F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD860");
    },
    Error,
    "encode-error: U+D860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD861");
    },
    Error,
    "encode-error: U+D861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD862");
    },
    Error,
    "encode-error: U+D862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD863");
    },
    Error,
    "encode-error: U+D863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD864");
    },
    Error,
    "encode-error: U+D864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD865");
    },
    Error,
    "encode-error: U+D865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD866");
    },
    Error,
    "encode-error: U+D866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD867");
    },
    Error,
    "encode-error: U+D867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD868");
    },
    Error,
    "encode-error: U+D868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD869");
    },
    Error,
    "encode-error: U+D869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD86A");
    },
    Error,
    "encode-error: U+D86A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD86B");
    },
    Error,
    "encode-error: U+D86B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD86C");
    },
    Error,
    "encode-error: U+D86C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD86D");
    },
    Error,
    "encode-error: U+D86D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD86E");
    },
    Error,
    "encode-error: U+D86E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD86F");
    },
    Error,
    "encode-error: U+D86F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD870");
    },
    Error,
    "encode-error: U+D870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD871");
    },
    Error,
    "encode-error: U+D871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD872");
    },
    Error,
    "encode-error: U+D872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD873");
    },
    Error,
    "encode-error: U+D873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD874");
    },
    Error,
    "encode-error: U+D874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD875");
    },
    Error,
    "encode-error: U+D875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD876");
    },
    Error,
    "encode-error: U+D876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD877");
    },
    Error,
    "encode-error: U+D877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD878");
    },
    Error,
    "encode-error: U+D878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD879");
    },
    Error,
    "encode-error: U+D879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD87A");
    },
    Error,
    "encode-error: U+D87A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD87B");
    },
    Error,
    "encode-error: U+D87B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD87C");
    },
    Error,
    "encode-error: U+D87C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD87D");
    },
    Error,
    "encode-error: U+D87D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD87E");
    },
    Error,
    "encode-error: U+D87E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD87F");
    },
    Error,
    "encode-error: U+D87F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD880");
    },
    Error,
    "encode-error: U+D880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD881");
    },
    Error,
    "encode-error: U+D881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD882");
    },
    Error,
    "encode-error: U+D882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD883");
    },
    Error,
    "encode-error: U+D883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD884");
    },
    Error,
    "encode-error: U+D884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD885");
    },
    Error,
    "encode-error: U+D885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD886");
    },
    Error,
    "encode-error: U+D886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD887");
    },
    Error,
    "encode-error: U+D887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD888");
    },
    Error,
    "encode-error: U+D888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD889");
    },
    Error,
    "encode-error: U+D889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD88A");
    },
    Error,
    "encode-error: U+D88A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD88B");
    },
    Error,
    "encode-error: U+D88B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD88C");
    },
    Error,
    "encode-error: U+D88C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD88D");
    },
    Error,
    "encode-error: U+D88D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD88E");
    },
    Error,
    "encode-error: U+D88E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD88F");
    },
    Error,
    "encode-error: U+D88F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD890");
    },
    Error,
    "encode-error: U+D890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD891");
    },
    Error,
    "encode-error: U+D891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD892");
    },
    Error,
    "encode-error: U+D892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD893");
    },
    Error,
    "encode-error: U+D893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD894");
    },
    Error,
    "encode-error: U+D894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD895");
    },
    Error,
    "encode-error: U+D895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD896");
    },
    Error,
    "encode-error: U+D896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD897");
    },
    Error,
    "encode-error: U+D897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD898");
    },
    Error,
    "encode-error: U+D898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD899");
    },
    Error,
    "encode-error: U+D899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD89A");
    },
    Error,
    "encode-error: U+D89A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD89B");
    },
    Error,
    "encode-error: U+D89B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD89C");
    },
    Error,
    "encode-error: U+D89C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD89D");
    },
    Error,
    "encode-error: U+D89D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD89E");
    },
    Error,
    "encode-error: U+D89E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD89F");
    },
    Error,
    "encode-error: U+D89F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A0");
    },
    Error,
    "encode-error: U+D8A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A1");
    },
    Error,
    "encode-error: U+D8A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A2");
    },
    Error,
    "encode-error: U+D8A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A3");
    },
    Error,
    "encode-error: U+D8A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A4");
    },
    Error,
    "encode-error: U+D8A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A5");
    },
    Error,
    "encode-error: U+D8A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A6");
    },
    Error,
    "encode-error: U+D8A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A7");
    },
    Error,
    "encode-error: U+D8A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A8");
    },
    Error,
    "encode-error: U+D8A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8A9");
    },
    Error,
    "encode-error: U+D8A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8AA");
    },
    Error,
    "encode-error: U+D8AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8AB");
    },
    Error,
    "encode-error: U+D8AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8AC");
    },
    Error,
    "encode-error: U+D8AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8AD");
    },
    Error,
    "encode-error: U+D8AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8AE");
    },
    Error,
    "encode-error: U+D8AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8AF");
    },
    Error,
    "encode-error: U+D8AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B0");
    },
    Error,
    "encode-error: U+D8B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B1");
    },
    Error,
    "encode-error: U+D8B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B2");
    },
    Error,
    "encode-error: U+D8B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B3");
    },
    Error,
    "encode-error: U+D8B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B4");
    },
    Error,
    "encode-error: U+D8B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B5");
    },
    Error,
    "encode-error: U+D8B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B6");
    },
    Error,
    "encode-error: U+D8B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B7");
    },
    Error,
    "encode-error: U+D8B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B8");
    },
    Error,
    "encode-error: U+D8B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8B9");
    },
    Error,
    "encode-error: U+D8B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8BA");
    },
    Error,
    "encode-error: U+D8BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8BB");
    },
    Error,
    "encode-error: U+D8BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8BC");
    },
    Error,
    "encode-error: U+D8BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8BD");
    },
    Error,
    "encode-error: U+D8BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8BE");
    },
    Error,
    "encode-error: U+D8BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8BF");
    },
    Error,
    "encode-error: U+D8BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C0");
    },
    Error,
    "encode-error: U+D8C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C1");
    },
    Error,
    "encode-error: U+D8C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C2");
    },
    Error,
    "encode-error: U+D8C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C3");
    },
    Error,
    "encode-error: U+D8C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C4");
    },
    Error,
    "encode-error: U+D8C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C5");
    },
    Error,
    "encode-error: U+D8C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C6");
    },
    Error,
    "encode-error: U+D8C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C7");
    },
    Error,
    "encode-error: U+D8C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C8");
    },
    Error,
    "encode-error: U+D8C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8C9");
    },
    Error,
    "encode-error: U+D8C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8CA");
    },
    Error,
    "encode-error: U+D8CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8CB");
    },
    Error,
    "encode-error: U+D8CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8CC");
    },
    Error,
    "encode-error: U+D8CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8CD");
    },
    Error,
    "encode-error: U+D8CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8CE");
    },
    Error,
    "encode-error: U+D8CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8CF");
    },
    Error,
    "encode-error: U+D8CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D0");
    },
    Error,
    "encode-error: U+D8D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D1");
    },
    Error,
    "encode-error: U+D8D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D2");
    },
    Error,
    "encode-error: U+D8D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D3");
    },
    Error,
    "encode-error: U+D8D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D4");
    },
    Error,
    "encode-error: U+D8D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D5");
    },
    Error,
    "encode-error: U+D8D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D6");
    },
    Error,
    "encode-error: U+D8D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D7");
    },
    Error,
    "encode-error: U+D8D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D8");
    },
    Error,
    "encode-error: U+D8D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8D9");
    },
    Error,
    "encode-error: U+D8D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8DA");
    },
    Error,
    "encode-error: U+D8DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8DB");
    },
    Error,
    "encode-error: U+D8DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8DC");
    },
    Error,
    "encode-error: U+D8DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8DD");
    },
    Error,
    "encode-error: U+D8DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8DE");
    },
    Error,
    "encode-error: U+D8DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8DF");
    },
    Error,
    "encode-error: U+D8DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E0");
    },
    Error,
    "encode-error: U+D8E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E1");
    },
    Error,
    "encode-error: U+D8E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E2");
    },
    Error,
    "encode-error: U+D8E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E3");
    },
    Error,
    "encode-error: U+D8E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E4");
    },
    Error,
    "encode-error: U+D8E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E5");
    },
    Error,
    "encode-error: U+D8E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E6");
    },
    Error,
    "encode-error: U+D8E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E7");
    },
    Error,
    "encode-error: U+D8E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E8");
    },
    Error,
    "encode-error: U+D8E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8E9");
    },
    Error,
    "encode-error: U+D8E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8EA");
    },
    Error,
    "encode-error: U+D8EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8EB");
    },
    Error,
    "encode-error: U+D8EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8EC");
    },
    Error,
    "encode-error: U+D8EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8ED");
    },
    Error,
    "encode-error: U+D8ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8EE");
    },
    Error,
    "encode-error: U+D8EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8EF");
    },
    Error,
    "encode-error: U+D8EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F0");
    },
    Error,
    "encode-error: U+D8F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F1");
    },
    Error,
    "encode-error: U+D8F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F2");
    },
    Error,
    "encode-error: U+D8F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F3");
    },
    Error,
    "encode-error: U+D8F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F4");
    },
    Error,
    "encode-error: U+D8F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F5");
    },
    Error,
    "encode-error: U+D8F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F6");
    },
    Error,
    "encode-error: U+D8F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F7");
    },
    Error,
    "encode-error: U+D8F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F8");
    },
    Error,
    "encode-error: U+D8F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8F9");
    },
    Error,
    "encode-error: U+D8F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8FA");
    },
    Error,
    "encode-error: U+D8FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8FB");
    },
    Error,
    "encode-error: U+D8FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8FC");
    },
    Error,
    "encode-error: U+D8FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8FD");
    },
    Error,
    "encode-error: U+D8FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8FE");
    },
    Error,
    "encode-error: U+D8FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD8FF");
    },
    Error,
    "encode-error: U+D8FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD900");
    },
    Error,
    "encode-error: U+D900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD901");
    },
    Error,
    "encode-error: U+D901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD902");
    },
    Error,
    "encode-error: U+D902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD903");
    },
    Error,
    "encode-error: U+D903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD904");
    },
    Error,
    "encode-error: U+D904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD905");
    },
    Error,
    "encode-error: U+D905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD906");
    },
    Error,
    "encode-error: U+D906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD907");
    },
    Error,
    "encode-error: U+D907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD908");
    },
    Error,
    "encode-error: U+D908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD909");
    },
    Error,
    "encode-error: U+D909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD90A");
    },
    Error,
    "encode-error: U+D90A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD90B");
    },
    Error,
    "encode-error: U+D90B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD90C");
    },
    Error,
    "encode-error: U+D90C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD90D");
    },
    Error,
    "encode-error: U+D90D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD90E");
    },
    Error,
    "encode-error: U+D90E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD90F");
    },
    Error,
    "encode-error: U+D90F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD910");
    },
    Error,
    "encode-error: U+D910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD911");
    },
    Error,
    "encode-error: U+D911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD912");
    },
    Error,
    "encode-error: U+D912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD913");
    },
    Error,
    "encode-error: U+D913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD914");
    },
    Error,
    "encode-error: U+D914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD915");
    },
    Error,
    "encode-error: U+D915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD916");
    },
    Error,
    "encode-error: U+D916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD917");
    },
    Error,
    "encode-error: U+D917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD918");
    },
    Error,
    "encode-error: U+D918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD919");
    },
    Error,
    "encode-error: U+D919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD91A");
    },
    Error,
    "encode-error: U+D91A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD91B");
    },
    Error,
    "encode-error: U+D91B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD91C");
    },
    Error,
    "encode-error: U+D91C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD91D");
    },
    Error,
    "encode-error: U+D91D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD91E");
    },
    Error,
    "encode-error: U+D91E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD91F");
    },
    Error,
    "encode-error: U+D91F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD920");
    },
    Error,
    "encode-error: U+D920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD921");
    },
    Error,
    "encode-error: U+D921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD922");
    },
    Error,
    "encode-error: U+D922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD923");
    },
    Error,
    "encode-error: U+D923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD924");
    },
    Error,
    "encode-error: U+D924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD925");
    },
    Error,
    "encode-error: U+D925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD926");
    },
    Error,
    "encode-error: U+D926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD927");
    },
    Error,
    "encode-error: U+D927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD928");
    },
    Error,
    "encode-error: U+D928",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD929");
    },
    Error,
    "encode-error: U+D929",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD92A");
    },
    Error,
    "encode-error: U+D92A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD92B");
    },
    Error,
    "encode-error: U+D92B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD92C");
    },
    Error,
    "encode-error: U+D92C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD92D");
    },
    Error,
    "encode-error: U+D92D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD92E");
    },
    Error,
    "encode-error: U+D92E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD92F");
    },
    Error,
    "encode-error: U+D92F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD930");
    },
    Error,
    "encode-error: U+D930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD931");
    },
    Error,
    "encode-error: U+D931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD932");
    },
    Error,
    "encode-error: U+D932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD933");
    },
    Error,
    "encode-error: U+D933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD934");
    },
    Error,
    "encode-error: U+D934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD935");
    },
    Error,
    "encode-error: U+D935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD936");
    },
    Error,
    "encode-error: U+D936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD937");
    },
    Error,
    "encode-error: U+D937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD938");
    },
    Error,
    "encode-error: U+D938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD939");
    },
    Error,
    "encode-error: U+D939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD93A");
    },
    Error,
    "encode-error: U+D93A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD93B");
    },
    Error,
    "encode-error: U+D93B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD93C");
    },
    Error,
    "encode-error: U+D93C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD93D");
    },
    Error,
    "encode-error: U+D93D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD93E");
    },
    Error,
    "encode-error: U+D93E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD93F");
    },
    Error,
    "encode-error: U+D93F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD940");
    },
    Error,
    "encode-error: U+D940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD941");
    },
    Error,
    "encode-error: U+D941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD942");
    },
    Error,
    "encode-error: U+D942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD943");
    },
    Error,
    "encode-error: U+D943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD944");
    },
    Error,
    "encode-error: U+D944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD945");
    },
    Error,
    "encode-error: U+D945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD946");
    },
    Error,
    "encode-error: U+D946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD947");
    },
    Error,
    "encode-error: U+D947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD948");
    },
    Error,
    "encode-error: U+D948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD949");
    },
    Error,
    "encode-error: U+D949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD94A");
    },
    Error,
    "encode-error: U+D94A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD94B");
    },
    Error,
    "encode-error: U+D94B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD94C");
    },
    Error,
    "encode-error: U+D94C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD94D");
    },
    Error,
    "encode-error: U+D94D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD94E");
    },
    Error,
    "encode-error: U+D94E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD94F");
    },
    Error,
    "encode-error: U+D94F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD950");
    },
    Error,
    "encode-error: U+D950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD951");
    },
    Error,
    "encode-error: U+D951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD952");
    },
    Error,
    "encode-error: U+D952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD953");
    },
    Error,
    "encode-error: U+D953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD954");
    },
    Error,
    "encode-error: U+D954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD955");
    },
    Error,
    "encode-error: U+D955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD956");
    },
    Error,
    "encode-error: U+D956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD957");
    },
    Error,
    "encode-error: U+D957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD958");
    },
    Error,
    "encode-error: U+D958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD959");
    },
    Error,
    "encode-error: U+D959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD95A");
    },
    Error,
    "encode-error: U+D95A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD95B");
    },
    Error,
    "encode-error: U+D95B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD95C");
    },
    Error,
    "encode-error: U+D95C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD95D");
    },
    Error,
    "encode-error: U+D95D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD95E");
    },
    Error,
    "encode-error: U+D95E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD95F");
    },
    Error,
    "encode-error: U+D95F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD960");
    },
    Error,
    "encode-error: U+D960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD961");
    },
    Error,
    "encode-error: U+D961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD962");
    },
    Error,
    "encode-error: U+D962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD963");
    },
    Error,
    "encode-error: U+D963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD964");
    },
    Error,
    "encode-error: U+D964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD965");
    },
    Error,
    "encode-error: U+D965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD966");
    },
    Error,
    "encode-error: U+D966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD967");
    },
    Error,
    "encode-error: U+D967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD968");
    },
    Error,
    "encode-error: U+D968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD969");
    },
    Error,
    "encode-error: U+D969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD96A");
    },
    Error,
    "encode-error: U+D96A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD96B");
    },
    Error,
    "encode-error: U+D96B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD96C");
    },
    Error,
    "encode-error: U+D96C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD96D");
    },
    Error,
    "encode-error: U+D96D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD96E");
    },
    Error,
    "encode-error: U+D96E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD96F");
    },
    Error,
    "encode-error: U+D96F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD970");
    },
    Error,
    "encode-error: U+D970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD971");
    },
    Error,
    "encode-error: U+D971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD972");
    },
    Error,
    "encode-error: U+D972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD973");
    },
    Error,
    "encode-error: U+D973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD974");
    },
    Error,
    "encode-error: U+D974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD975");
    },
    Error,
    "encode-error: U+D975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD976");
    },
    Error,
    "encode-error: U+D976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD977");
    },
    Error,
    "encode-error: U+D977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD978");
    },
    Error,
    "encode-error: U+D978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD979");
    },
    Error,
    "encode-error: U+D979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD97A");
    },
    Error,
    "encode-error: U+D97A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD97B");
    },
    Error,
    "encode-error: U+D97B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD97C");
    },
    Error,
    "encode-error: U+D97C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD97D");
    },
    Error,
    "encode-error: U+D97D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD97E");
    },
    Error,
    "encode-error: U+D97E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD97F");
    },
    Error,
    "encode-error: U+D97F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD980");
    },
    Error,
    "encode-error: U+D980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD981");
    },
    Error,
    "encode-error: U+D981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD982");
    },
    Error,
    "encode-error: U+D982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD983");
    },
    Error,
    "encode-error: U+D983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD984");
    },
    Error,
    "encode-error: U+D984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD985");
    },
    Error,
    "encode-error: U+D985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD986");
    },
    Error,
    "encode-error: U+D986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD987");
    },
    Error,
    "encode-error: U+D987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD988");
    },
    Error,
    "encode-error: U+D988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD989");
    },
    Error,
    "encode-error: U+D989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD98A");
    },
    Error,
    "encode-error: U+D98A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD98B");
    },
    Error,
    "encode-error: U+D98B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD98C");
    },
    Error,
    "encode-error: U+D98C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD98D");
    },
    Error,
    "encode-error: U+D98D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD98E");
    },
    Error,
    "encode-error: U+D98E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD98F");
    },
    Error,
    "encode-error: U+D98F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD990");
    },
    Error,
    "encode-error: U+D990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD991");
    },
    Error,
    "encode-error: U+D991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD992");
    },
    Error,
    "encode-error: U+D992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD993");
    },
    Error,
    "encode-error: U+D993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD994");
    },
    Error,
    "encode-error: U+D994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD995");
    },
    Error,
    "encode-error: U+D995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD996");
    },
    Error,
    "encode-error: U+D996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD997");
    },
    Error,
    "encode-error: U+D997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD998");
    },
    Error,
    "encode-error: U+D998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD999");
    },
    Error,
    "encode-error: U+D999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD99A");
    },
    Error,
    "encode-error: U+D99A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD99B");
    },
    Error,
    "encode-error: U+D99B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD99C");
    },
    Error,
    "encode-error: U+D99C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD99D");
    },
    Error,
    "encode-error: U+D99D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD99E");
    },
    Error,
    "encode-error: U+D99E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD99F");
    },
    Error,
    "encode-error: U+D99F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A0");
    },
    Error,
    "encode-error: U+D9A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A1");
    },
    Error,
    "encode-error: U+D9A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A2");
    },
    Error,
    "encode-error: U+D9A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A3");
    },
    Error,
    "encode-error: U+D9A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A4");
    },
    Error,
    "encode-error: U+D9A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A5");
    },
    Error,
    "encode-error: U+D9A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A6");
    },
    Error,
    "encode-error: U+D9A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A7");
    },
    Error,
    "encode-error: U+D9A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A8");
    },
    Error,
    "encode-error: U+D9A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9A9");
    },
    Error,
    "encode-error: U+D9A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9AA");
    },
    Error,
    "encode-error: U+D9AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9AB");
    },
    Error,
    "encode-error: U+D9AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9AC");
    },
    Error,
    "encode-error: U+D9AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9AD");
    },
    Error,
    "encode-error: U+D9AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9AE");
    },
    Error,
    "encode-error: U+D9AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9AF");
    },
    Error,
    "encode-error: U+D9AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B0");
    },
    Error,
    "encode-error: U+D9B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B1");
    },
    Error,
    "encode-error: U+D9B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B2");
    },
    Error,
    "encode-error: U+D9B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B3");
    },
    Error,
    "encode-error: U+D9B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B4");
    },
    Error,
    "encode-error: U+D9B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B5");
    },
    Error,
    "encode-error: U+D9B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B6");
    },
    Error,
    "encode-error: U+D9B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B7");
    },
    Error,
    "encode-error: U+D9B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B8");
    },
    Error,
    "encode-error: U+D9B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9B9");
    },
    Error,
    "encode-error: U+D9B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9BA");
    },
    Error,
    "encode-error: U+D9BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9BB");
    },
    Error,
    "encode-error: U+D9BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9BC");
    },
    Error,
    "encode-error: U+D9BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9BD");
    },
    Error,
    "encode-error: U+D9BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9BE");
    },
    Error,
    "encode-error: U+D9BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9BF");
    },
    Error,
    "encode-error: U+D9BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C0");
    },
    Error,
    "encode-error: U+D9C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C1");
    },
    Error,
    "encode-error: U+D9C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C2");
    },
    Error,
    "encode-error: U+D9C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C3");
    },
    Error,
    "encode-error: U+D9C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C4");
    },
    Error,
    "encode-error: U+D9C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C5");
    },
    Error,
    "encode-error: U+D9C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C6");
    },
    Error,
    "encode-error: U+D9C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C7");
    },
    Error,
    "encode-error: U+D9C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C8");
    },
    Error,
    "encode-error: U+D9C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9C9");
    },
    Error,
    "encode-error: U+D9C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9CA");
    },
    Error,
    "encode-error: U+D9CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9CB");
    },
    Error,
    "encode-error: U+D9CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9CC");
    },
    Error,
    "encode-error: U+D9CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9CD");
    },
    Error,
    "encode-error: U+D9CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9CE");
    },
    Error,
    "encode-error: U+D9CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9CF");
    },
    Error,
    "encode-error: U+D9CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D0");
    },
    Error,
    "encode-error: U+D9D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D1");
    },
    Error,
    "encode-error: U+D9D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D2");
    },
    Error,
    "encode-error: U+D9D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D3");
    },
    Error,
    "encode-error: U+D9D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D4");
    },
    Error,
    "encode-error: U+D9D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D5");
    },
    Error,
    "encode-error: U+D9D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D6");
    },
    Error,
    "encode-error: U+D9D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D7");
    },
    Error,
    "encode-error: U+D9D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D8");
    },
    Error,
    "encode-error: U+D9D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9D9");
    },
    Error,
    "encode-error: U+D9D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9DA");
    },
    Error,
    "encode-error: U+D9DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9DB");
    },
    Error,
    "encode-error: U+D9DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9DC");
    },
    Error,
    "encode-error: U+D9DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9DD");
    },
    Error,
    "encode-error: U+D9DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9DE");
    },
    Error,
    "encode-error: U+D9DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9DF");
    },
    Error,
    "encode-error: U+D9DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E0");
    },
    Error,
    "encode-error: U+D9E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E1");
    },
    Error,
    "encode-error: U+D9E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E2");
    },
    Error,
    "encode-error: U+D9E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E3");
    },
    Error,
    "encode-error: U+D9E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E4");
    },
    Error,
    "encode-error: U+D9E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E5");
    },
    Error,
    "encode-error: U+D9E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E6");
    },
    Error,
    "encode-error: U+D9E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E7");
    },
    Error,
    "encode-error: U+D9E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E8");
    },
    Error,
    "encode-error: U+D9E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9E9");
    },
    Error,
    "encode-error: U+D9E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9EA");
    },
    Error,
    "encode-error: U+D9EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9EB");
    },
    Error,
    "encode-error: U+D9EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9EC");
    },
    Error,
    "encode-error: U+D9EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9ED");
    },
    Error,
    "encode-error: U+D9ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9EE");
    },
    Error,
    "encode-error: U+D9EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9EF");
    },
    Error,
    "encode-error: U+D9EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F0");
    },
    Error,
    "encode-error: U+D9F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F1");
    },
    Error,
    "encode-error: U+D9F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F2");
    },
    Error,
    "encode-error: U+D9F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F3");
    },
    Error,
    "encode-error: U+D9F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F4");
    },
    Error,
    "encode-error: U+D9F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F5");
    },
    Error,
    "encode-error: U+D9F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F6");
    },
    Error,
    "encode-error: U+D9F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F7");
    },
    Error,
    "encode-error: U+D9F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F8");
    },
    Error,
    "encode-error: U+D9F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9F9");
    },
    Error,
    "encode-error: U+D9F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9FA");
    },
    Error,
    "encode-error: U+D9FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9FB");
    },
    Error,
    "encode-error: U+D9FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9FC");
    },
    Error,
    "encode-error: U+D9FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9FD");
    },
    Error,
    "encode-error: U+D9FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9FE");
    },
    Error,
    "encode-error: U+D9FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uD9FF");
    },
    Error,
    "encode-error: U+D9FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA00");
    },
    Error,
    "encode-error: U+DA00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA01");
    },
    Error,
    "encode-error: U+DA01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA02");
    },
    Error,
    "encode-error: U+DA02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA03");
    },
    Error,
    "encode-error: U+DA03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA04");
    },
    Error,
    "encode-error: U+DA04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA05");
    },
    Error,
    "encode-error: U+DA05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA06");
    },
    Error,
    "encode-error: U+DA06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA07");
    },
    Error,
    "encode-error: U+DA07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA08");
    },
    Error,
    "encode-error: U+DA08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA09");
    },
    Error,
    "encode-error: U+DA09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA0A");
    },
    Error,
    "encode-error: U+DA0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA0B");
    },
    Error,
    "encode-error: U+DA0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA0C");
    },
    Error,
    "encode-error: U+DA0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA0D");
    },
    Error,
    "encode-error: U+DA0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA0E");
    },
    Error,
    "encode-error: U+DA0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA0F");
    },
    Error,
    "encode-error: U+DA0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA10");
    },
    Error,
    "encode-error: U+DA10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA11");
    },
    Error,
    "encode-error: U+DA11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA12");
    },
    Error,
    "encode-error: U+DA12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA13");
    },
    Error,
    "encode-error: U+DA13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA14");
    },
    Error,
    "encode-error: U+DA14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA15");
    },
    Error,
    "encode-error: U+DA15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA16");
    },
    Error,
    "encode-error: U+DA16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA17");
    },
    Error,
    "encode-error: U+DA17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA18");
    },
    Error,
    "encode-error: U+DA18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA19");
    },
    Error,
    "encode-error: U+DA19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA1A");
    },
    Error,
    "encode-error: U+DA1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA1B");
    },
    Error,
    "encode-error: U+DA1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA1C");
    },
    Error,
    "encode-error: U+DA1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA1D");
    },
    Error,
    "encode-error: U+DA1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA1E");
    },
    Error,
    "encode-error: U+DA1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA1F");
    },
    Error,
    "encode-error: U+DA1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA20");
    },
    Error,
    "encode-error: U+DA20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA21");
    },
    Error,
    "encode-error: U+DA21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA22");
    },
    Error,
    "encode-error: U+DA22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA23");
    },
    Error,
    "encode-error: U+DA23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA24");
    },
    Error,
    "encode-error: U+DA24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA25");
    },
    Error,
    "encode-error: U+DA25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA26");
    },
    Error,
    "encode-error: U+DA26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA27");
    },
    Error,
    "encode-error: U+DA27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA28");
    },
    Error,
    "encode-error: U+DA28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA29");
    },
    Error,
    "encode-error: U+DA29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA2A");
    },
    Error,
    "encode-error: U+DA2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA2B");
    },
    Error,
    "encode-error: U+DA2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA2C");
    },
    Error,
    "encode-error: U+DA2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA2D");
    },
    Error,
    "encode-error: U+DA2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA2E");
    },
    Error,
    "encode-error: U+DA2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA2F");
    },
    Error,
    "encode-error: U+DA2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA30");
    },
    Error,
    "encode-error: U+DA30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA31");
    },
    Error,
    "encode-error: U+DA31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA32");
    },
    Error,
    "encode-error: U+DA32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA33");
    },
    Error,
    "encode-error: U+DA33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA34");
    },
    Error,
    "encode-error: U+DA34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA35");
    },
    Error,
    "encode-error: U+DA35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA36");
    },
    Error,
    "encode-error: U+DA36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA37");
    },
    Error,
    "encode-error: U+DA37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA38");
    },
    Error,
    "encode-error: U+DA38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA39");
    },
    Error,
    "encode-error: U+DA39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA3A");
    },
    Error,
    "encode-error: U+DA3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA3B");
    },
    Error,
    "encode-error: U+DA3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA3C");
    },
    Error,
    "encode-error: U+DA3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA3D");
    },
    Error,
    "encode-error: U+DA3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA3E");
    },
    Error,
    "encode-error: U+DA3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA3F");
    },
    Error,
    "encode-error: U+DA3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA40");
    },
    Error,
    "encode-error: U+DA40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA41");
    },
    Error,
    "encode-error: U+DA41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA42");
    },
    Error,
    "encode-error: U+DA42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA43");
    },
    Error,
    "encode-error: U+DA43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA44");
    },
    Error,
    "encode-error: U+DA44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA45");
    },
    Error,
    "encode-error: U+DA45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA46");
    },
    Error,
    "encode-error: U+DA46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA47");
    },
    Error,
    "encode-error: U+DA47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA48");
    },
    Error,
    "encode-error: U+DA48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA49");
    },
    Error,
    "encode-error: U+DA49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA4A");
    },
    Error,
    "encode-error: U+DA4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA4B");
    },
    Error,
    "encode-error: U+DA4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA4C");
    },
    Error,
    "encode-error: U+DA4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA4D");
    },
    Error,
    "encode-error: U+DA4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA4E");
    },
    Error,
    "encode-error: U+DA4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA4F");
    },
    Error,
    "encode-error: U+DA4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA50");
    },
    Error,
    "encode-error: U+DA50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA51");
    },
    Error,
    "encode-error: U+DA51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA52");
    },
    Error,
    "encode-error: U+DA52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA53");
    },
    Error,
    "encode-error: U+DA53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA54");
    },
    Error,
    "encode-error: U+DA54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA55");
    },
    Error,
    "encode-error: U+DA55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA56");
    },
    Error,
    "encode-error: U+DA56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA57");
    },
    Error,
    "encode-error: U+DA57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA58");
    },
    Error,
    "encode-error: U+DA58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA59");
    },
    Error,
    "encode-error: U+DA59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA5A");
    },
    Error,
    "encode-error: U+DA5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA5B");
    },
    Error,
    "encode-error: U+DA5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA5C");
    },
    Error,
    "encode-error: U+DA5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA5D");
    },
    Error,
    "encode-error: U+DA5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA5E");
    },
    Error,
    "encode-error: U+DA5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA5F");
    },
    Error,
    "encode-error: U+DA5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA60");
    },
    Error,
    "encode-error: U+DA60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA61");
    },
    Error,
    "encode-error: U+DA61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA62");
    },
    Error,
    "encode-error: U+DA62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA63");
    },
    Error,
    "encode-error: U+DA63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA64");
    },
    Error,
    "encode-error: U+DA64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA65");
    },
    Error,
    "encode-error: U+DA65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA66");
    },
    Error,
    "encode-error: U+DA66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA67");
    },
    Error,
    "encode-error: U+DA67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA68");
    },
    Error,
    "encode-error: U+DA68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA69");
    },
    Error,
    "encode-error: U+DA69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA6A");
    },
    Error,
    "encode-error: U+DA6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA6B");
    },
    Error,
    "encode-error: U+DA6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA6C");
    },
    Error,
    "encode-error: U+DA6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA6D");
    },
    Error,
    "encode-error: U+DA6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA6E");
    },
    Error,
    "encode-error: U+DA6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA6F");
    },
    Error,
    "encode-error: U+DA6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA70");
    },
    Error,
    "encode-error: U+DA70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA71");
    },
    Error,
    "encode-error: U+DA71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA72");
    },
    Error,
    "encode-error: U+DA72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA73");
    },
    Error,
    "encode-error: U+DA73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA74");
    },
    Error,
    "encode-error: U+DA74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA75");
    },
    Error,
    "encode-error: U+DA75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA76");
    },
    Error,
    "encode-error: U+DA76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA77");
    },
    Error,
    "encode-error: U+DA77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA78");
    },
    Error,
    "encode-error: U+DA78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA79");
    },
    Error,
    "encode-error: U+DA79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA7A");
    },
    Error,
    "encode-error: U+DA7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA7B");
    },
    Error,
    "encode-error: U+DA7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA7C");
    },
    Error,
    "encode-error: U+DA7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA7D");
    },
    Error,
    "encode-error: U+DA7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA7E");
    },
    Error,
    "encode-error: U+DA7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA7F");
    },
    Error,
    "encode-error: U+DA7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA80");
    },
    Error,
    "encode-error: U+DA80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA81");
    },
    Error,
    "encode-error: U+DA81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA82");
    },
    Error,
    "encode-error: U+DA82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA83");
    },
    Error,
    "encode-error: U+DA83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA84");
    },
    Error,
    "encode-error: U+DA84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA85");
    },
    Error,
    "encode-error: U+DA85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA86");
    },
    Error,
    "encode-error: U+DA86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA87");
    },
    Error,
    "encode-error: U+DA87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA88");
    },
    Error,
    "encode-error: U+DA88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA89");
    },
    Error,
    "encode-error: U+DA89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA8A");
    },
    Error,
    "encode-error: U+DA8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA8B");
    },
    Error,
    "encode-error: U+DA8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA8C");
    },
    Error,
    "encode-error: U+DA8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA8D");
    },
    Error,
    "encode-error: U+DA8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA8E");
    },
    Error,
    "encode-error: U+DA8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA8F");
    },
    Error,
    "encode-error: U+DA8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA90");
    },
    Error,
    "encode-error: U+DA90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA91");
    },
    Error,
    "encode-error: U+DA91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA92");
    },
    Error,
    "encode-error: U+DA92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA93");
    },
    Error,
    "encode-error: U+DA93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA94");
    },
    Error,
    "encode-error: U+DA94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA95");
    },
    Error,
    "encode-error: U+DA95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA96");
    },
    Error,
    "encode-error: U+DA96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA97");
    },
    Error,
    "encode-error: U+DA97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA98");
    },
    Error,
    "encode-error: U+DA98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA99");
    },
    Error,
    "encode-error: U+DA99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA9A");
    },
    Error,
    "encode-error: U+DA9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA9B");
    },
    Error,
    "encode-error: U+DA9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA9C");
    },
    Error,
    "encode-error: U+DA9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA9D");
    },
    Error,
    "encode-error: U+DA9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA9E");
    },
    Error,
    "encode-error: U+DA9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDA9F");
    },
    Error,
    "encode-error: U+DA9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA0");
    },
    Error,
    "encode-error: U+DAA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA1");
    },
    Error,
    "encode-error: U+DAA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA2");
    },
    Error,
    "encode-error: U+DAA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA3");
    },
    Error,
    "encode-error: U+DAA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA4");
    },
    Error,
    "encode-error: U+DAA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA5");
    },
    Error,
    "encode-error: U+DAA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA6");
    },
    Error,
    "encode-error: U+DAA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA7");
    },
    Error,
    "encode-error: U+DAA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA8");
    },
    Error,
    "encode-error: U+DAA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAA9");
    },
    Error,
    "encode-error: U+DAA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAAA");
    },
    Error,
    "encode-error: U+DAAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAAB");
    },
    Error,
    "encode-error: U+DAAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAAC");
    },
    Error,
    "encode-error: U+DAAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAAD");
    },
    Error,
    "encode-error: U+DAAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAAE");
    },
    Error,
    "encode-error: U+DAAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAAF");
    },
    Error,
    "encode-error: U+DAAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB0");
    },
    Error,
    "encode-error: U+DAB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB1");
    },
    Error,
    "encode-error: U+DAB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB2");
    },
    Error,
    "encode-error: U+DAB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB3");
    },
    Error,
    "encode-error: U+DAB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB4");
    },
    Error,
    "encode-error: U+DAB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB5");
    },
    Error,
    "encode-error: U+DAB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB6");
    },
    Error,
    "encode-error: U+DAB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB7");
    },
    Error,
    "encode-error: U+DAB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB8");
    },
    Error,
    "encode-error: U+DAB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAB9");
    },
    Error,
    "encode-error: U+DAB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDABA");
    },
    Error,
    "encode-error: U+DABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDABB");
    },
    Error,
    "encode-error: U+DABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDABC");
    },
    Error,
    "encode-error: U+DABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDABD");
    },
    Error,
    "encode-error: U+DABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDABE");
    },
    Error,
    "encode-error: U+DABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDABF");
    },
    Error,
    "encode-error: U+DABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC0");
    },
    Error,
    "encode-error: U+DAC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC1");
    },
    Error,
    "encode-error: U+DAC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC2");
    },
    Error,
    "encode-error: U+DAC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC3");
    },
    Error,
    "encode-error: U+DAC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC4");
    },
    Error,
    "encode-error: U+DAC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC5");
    },
    Error,
    "encode-error: U+DAC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC6");
    },
    Error,
    "encode-error: U+DAC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC7");
    },
    Error,
    "encode-error: U+DAC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC8");
    },
    Error,
    "encode-error: U+DAC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAC9");
    },
    Error,
    "encode-error: U+DAC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDACA");
    },
    Error,
    "encode-error: U+DACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDACB");
    },
    Error,
    "encode-error: U+DACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDACC");
    },
    Error,
    "encode-error: U+DACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDACD");
    },
    Error,
    "encode-error: U+DACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDACE");
    },
    Error,
    "encode-error: U+DACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDACF");
    },
    Error,
    "encode-error: U+DACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD0");
    },
    Error,
    "encode-error: U+DAD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD1");
    },
    Error,
    "encode-error: U+DAD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD2");
    },
    Error,
    "encode-error: U+DAD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD3");
    },
    Error,
    "encode-error: U+DAD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD4");
    },
    Error,
    "encode-error: U+DAD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD5");
    },
    Error,
    "encode-error: U+DAD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD6");
    },
    Error,
    "encode-error: U+DAD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD7");
    },
    Error,
    "encode-error: U+DAD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD8");
    },
    Error,
    "encode-error: U+DAD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAD9");
    },
    Error,
    "encode-error: U+DAD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDADA");
    },
    Error,
    "encode-error: U+DADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDADB");
    },
    Error,
    "encode-error: U+DADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDADC");
    },
    Error,
    "encode-error: U+DADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDADD");
    },
    Error,
    "encode-error: U+DADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDADE");
    },
    Error,
    "encode-error: U+DADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDADF");
    },
    Error,
    "encode-error: U+DADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE0");
    },
    Error,
    "encode-error: U+DAE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE1");
    },
    Error,
    "encode-error: U+DAE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE2");
    },
    Error,
    "encode-error: U+DAE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE3");
    },
    Error,
    "encode-error: U+DAE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE4");
    },
    Error,
    "encode-error: U+DAE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE5");
    },
    Error,
    "encode-error: U+DAE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE6");
    },
    Error,
    "encode-error: U+DAE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE7");
    },
    Error,
    "encode-error: U+DAE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE8");
    },
    Error,
    "encode-error: U+DAE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAE9");
    },
    Error,
    "encode-error: U+DAE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAEA");
    },
    Error,
    "encode-error: U+DAEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAEB");
    },
    Error,
    "encode-error: U+DAEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAEC");
    },
    Error,
    "encode-error: U+DAEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAED");
    },
    Error,
    "encode-error: U+DAED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAEE");
    },
    Error,
    "encode-error: U+DAEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAEF");
    },
    Error,
    "encode-error: U+DAEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF0");
    },
    Error,
    "encode-error: U+DAF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF1");
    },
    Error,
    "encode-error: U+DAF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF2");
    },
    Error,
    "encode-error: U+DAF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF3");
    },
    Error,
    "encode-error: U+DAF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF4");
    },
    Error,
    "encode-error: U+DAF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF5");
    },
    Error,
    "encode-error: U+DAF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF6");
    },
    Error,
    "encode-error: U+DAF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF7");
    },
    Error,
    "encode-error: U+DAF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF8");
    },
    Error,
    "encode-error: U+DAF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAF9");
    },
    Error,
    "encode-error: U+DAF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAFA");
    },
    Error,
    "encode-error: U+DAFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAFB");
    },
    Error,
    "encode-error: U+DAFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAFC");
    },
    Error,
    "encode-error: U+DAFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAFD");
    },
    Error,
    "encode-error: U+DAFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAFE");
    },
    Error,
    "encode-error: U+DAFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDAFF");
    },
    Error,
    "encode-error: U+DAFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB00");
    },
    Error,
    "encode-error: U+DB00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB01");
    },
    Error,
    "encode-error: U+DB01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB02");
    },
    Error,
    "encode-error: U+DB02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB03");
    },
    Error,
    "encode-error: U+DB03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB04");
    },
    Error,
    "encode-error: U+DB04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB05");
    },
    Error,
    "encode-error: U+DB05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB06");
    },
    Error,
    "encode-error: U+DB06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB07");
    },
    Error,
    "encode-error: U+DB07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB08");
    },
    Error,
    "encode-error: U+DB08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB09");
    },
    Error,
    "encode-error: U+DB09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB0A");
    },
    Error,
    "encode-error: U+DB0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB0B");
    },
    Error,
    "encode-error: U+DB0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB0C");
    },
    Error,
    "encode-error: U+DB0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB0D");
    },
    Error,
    "encode-error: U+DB0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB0E");
    },
    Error,
    "encode-error: U+DB0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB0F");
    },
    Error,
    "encode-error: U+DB0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB10");
    },
    Error,
    "encode-error: U+DB10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB11");
    },
    Error,
    "encode-error: U+DB11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB12");
    },
    Error,
    "encode-error: U+DB12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB13");
    },
    Error,
    "encode-error: U+DB13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB14");
    },
    Error,
    "encode-error: U+DB14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB15");
    },
    Error,
    "encode-error: U+DB15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB16");
    },
    Error,
    "encode-error: U+DB16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB17");
    },
    Error,
    "encode-error: U+DB17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB18");
    },
    Error,
    "encode-error: U+DB18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB19");
    },
    Error,
    "encode-error: U+DB19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB1A");
    },
    Error,
    "encode-error: U+DB1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB1B");
    },
    Error,
    "encode-error: U+DB1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB1C");
    },
    Error,
    "encode-error: U+DB1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB1D");
    },
    Error,
    "encode-error: U+DB1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB1E");
    },
    Error,
    "encode-error: U+DB1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB1F");
    },
    Error,
    "encode-error: U+DB1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB20");
    },
    Error,
    "encode-error: U+DB20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB21");
    },
    Error,
    "encode-error: U+DB21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB22");
    },
    Error,
    "encode-error: U+DB22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB23");
    },
    Error,
    "encode-error: U+DB23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB24");
    },
    Error,
    "encode-error: U+DB24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB25");
    },
    Error,
    "encode-error: U+DB25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB26");
    },
    Error,
    "encode-error: U+DB26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB27");
    },
    Error,
    "encode-error: U+DB27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB28");
    },
    Error,
    "encode-error: U+DB28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB29");
    },
    Error,
    "encode-error: U+DB29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB2A");
    },
    Error,
    "encode-error: U+DB2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB2B");
    },
    Error,
    "encode-error: U+DB2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB2C");
    },
    Error,
    "encode-error: U+DB2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB2D");
    },
    Error,
    "encode-error: U+DB2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB2E");
    },
    Error,
    "encode-error: U+DB2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB2F");
    },
    Error,
    "encode-error: U+DB2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB30");
    },
    Error,
    "encode-error: U+DB30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB31");
    },
    Error,
    "encode-error: U+DB31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB32");
    },
    Error,
    "encode-error: U+DB32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB33");
    },
    Error,
    "encode-error: U+DB33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB34");
    },
    Error,
    "encode-error: U+DB34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB35");
    },
    Error,
    "encode-error: U+DB35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB36");
    },
    Error,
    "encode-error: U+DB36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB37");
    },
    Error,
    "encode-error: U+DB37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB38");
    },
    Error,
    "encode-error: U+DB38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB39");
    },
    Error,
    "encode-error: U+DB39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB3A");
    },
    Error,
    "encode-error: U+DB3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB3B");
    },
    Error,
    "encode-error: U+DB3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB3C");
    },
    Error,
    "encode-error: U+DB3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB3D");
    },
    Error,
    "encode-error: U+DB3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB3E");
    },
    Error,
    "encode-error: U+DB3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB3F");
    },
    Error,
    "encode-error: U+DB3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB40");
    },
    Error,
    "encode-error: U+DB40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB41");
    },
    Error,
    "encode-error: U+DB41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB42");
    },
    Error,
    "encode-error: U+DB42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB43");
    },
    Error,
    "encode-error: U+DB43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB44");
    },
    Error,
    "encode-error: U+DB44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB45");
    },
    Error,
    "encode-error: U+DB45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB46");
    },
    Error,
    "encode-error: U+DB46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB47");
    },
    Error,
    "encode-error: U+DB47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB48");
    },
    Error,
    "encode-error: U+DB48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB49");
    },
    Error,
    "encode-error: U+DB49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB4A");
    },
    Error,
    "encode-error: U+DB4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB4B");
    },
    Error,
    "encode-error: U+DB4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB4C");
    },
    Error,
    "encode-error: U+DB4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB4D");
    },
    Error,
    "encode-error: U+DB4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB4E");
    },
    Error,
    "encode-error: U+DB4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB4F");
    },
    Error,
    "encode-error: U+DB4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB50");
    },
    Error,
    "encode-error: U+DB50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB51");
    },
    Error,
    "encode-error: U+DB51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB52");
    },
    Error,
    "encode-error: U+DB52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB53");
    },
    Error,
    "encode-error: U+DB53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB54");
    },
    Error,
    "encode-error: U+DB54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB55");
    },
    Error,
    "encode-error: U+DB55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB56");
    },
    Error,
    "encode-error: U+DB56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB57");
    },
    Error,
    "encode-error: U+DB57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB58");
    },
    Error,
    "encode-error: U+DB58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB59");
    },
    Error,
    "encode-error: U+DB59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB5A");
    },
    Error,
    "encode-error: U+DB5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB5B");
    },
    Error,
    "encode-error: U+DB5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB5C");
    },
    Error,
    "encode-error: U+DB5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB5D");
    },
    Error,
    "encode-error: U+DB5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB5E");
    },
    Error,
    "encode-error: U+DB5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB5F");
    },
    Error,
    "encode-error: U+DB5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB60");
    },
    Error,
    "encode-error: U+DB60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB61");
    },
    Error,
    "encode-error: U+DB61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB62");
    },
    Error,
    "encode-error: U+DB62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB63");
    },
    Error,
    "encode-error: U+DB63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB64");
    },
    Error,
    "encode-error: U+DB64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB65");
    },
    Error,
    "encode-error: U+DB65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB66");
    },
    Error,
    "encode-error: U+DB66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB67");
    },
    Error,
    "encode-error: U+DB67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB68");
    },
    Error,
    "encode-error: U+DB68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB69");
    },
    Error,
    "encode-error: U+DB69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB6A");
    },
    Error,
    "encode-error: U+DB6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB6B");
    },
    Error,
    "encode-error: U+DB6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB6C");
    },
    Error,
    "encode-error: U+DB6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB6D");
    },
    Error,
    "encode-error: U+DB6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB6E");
    },
    Error,
    "encode-error: U+DB6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB6F");
    },
    Error,
    "encode-error: U+DB6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB70");
    },
    Error,
    "encode-error: U+DB70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB71");
    },
    Error,
    "encode-error: U+DB71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB72");
    },
    Error,
    "encode-error: U+DB72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB73");
    },
    Error,
    "encode-error: U+DB73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB74");
    },
    Error,
    "encode-error: U+DB74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB75");
    },
    Error,
    "encode-error: U+DB75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB76");
    },
    Error,
    "encode-error: U+DB76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB77");
    },
    Error,
    "encode-error: U+DB77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB78");
    },
    Error,
    "encode-error: U+DB78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB79");
    },
    Error,
    "encode-error: U+DB79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB7A");
    },
    Error,
    "encode-error: U+DB7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB7B");
    },
    Error,
    "encode-error: U+DB7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB7C");
    },
    Error,
    "encode-error: U+DB7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB7D");
    },
    Error,
    "encode-error: U+DB7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB7E");
    },
    Error,
    "encode-error: U+DB7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB7F");
    },
    Error,
    "encode-error: U+DB7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB80");
    },
    Error,
    "encode-error: U+DB80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB81");
    },
    Error,
    "encode-error: U+DB81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB82");
    },
    Error,
    "encode-error: U+DB82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB83");
    },
    Error,
    "encode-error: U+DB83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB84");
    },
    Error,
    "encode-error: U+DB84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB85");
    },
    Error,
    "encode-error: U+DB85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB86");
    },
    Error,
    "encode-error: U+DB86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB87");
    },
    Error,
    "encode-error: U+DB87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB88");
    },
    Error,
    "encode-error: U+DB88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB89");
    },
    Error,
    "encode-error: U+DB89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB8A");
    },
    Error,
    "encode-error: U+DB8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB8B");
    },
    Error,
    "encode-error: U+DB8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB8C");
    },
    Error,
    "encode-error: U+DB8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB8D");
    },
    Error,
    "encode-error: U+DB8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB8E");
    },
    Error,
    "encode-error: U+DB8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB8F");
    },
    Error,
    "encode-error: U+DB8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB90");
    },
    Error,
    "encode-error: U+DB90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB91");
    },
    Error,
    "encode-error: U+DB91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB92");
    },
    Error,
    "encode-error: U+DB92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB93");
    },
    Error,
    "encode-error: U+DB93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB94");
    },
    Error,
    "encode-error: U+DB94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB95");
    },
    Error,
    "encode-error: U+DB95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB96");
    },
    Error,
    "encode-error: U+DB96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB97");
    },
    Error,
    "encode-error: U+DB97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB98");
    },
    Error,
    "encode-error: U+DB98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB99");
    },
    Error,
    "encode-error: U+DB99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB9A");
    },
    Error,
    "encode-error: U+DB9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB9B");
    },
    Error,
    "encode-error: U+DB9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB9C");
    },
    Error,
    "encode-error: U+DB9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB9D");
    },
    Error,
    "encode-error: U+DB9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB9E");
    },
    Error,
    "encode-error: U+DB9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDB9F");
    },
    Error,
    "encode-error: U+DB9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA0");
    },
    Error,
    "encode-error: U+DBA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA1");
    },
    Error,
    "encode-error: U+DBA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA2");
    },
    Error,
    "encode-error: U+DBA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA3");
    },
    Error,
    "encode-error: U+DBA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA4");
    },
    Error,
    "encode-error: U+DBA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA5");
    },
    Error,
    "encode-error: U+DBA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA6");
    },
    Error,
    "encode-error: U+DBA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA7");
    },
    Error,
    "encode-error: U+DBA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA8");
    },
    Error,
    "encode-error: U+DBA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBA9");
    },
    Error,
    "encode-error: U+DBA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBAA");
    },
    Error,
    "encode-error: U+DBAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBAB");
    },
    Error,
    "encode-error: U+DBAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBAC");
    },
    Error,
    "encode-error: U+DBAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBAD");
    },
    Error,
    "encode-error: U+DBAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBAE");
    },
    Error,
    "encode-error: U+DBAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBAF");
    },
    Error,
    "encode-error: U+DBAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB0");
    },
    Error,
    "encode-error: U+DBB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB1");
    },
    Error,
    "encode-error: U+DBB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB2");
    },
    Error,
    "encode-error: U+DBB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB3");
    },
    Error,
    "encode-error: U+DBB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB4");
    },
    Error,
    "encode-error: U+DBB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB5");
    },
    Error,
    "encode-error: U+DBB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB6");
    },
    Error,
    "encode-error: U+DBB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB7");
    },
    Error,
    "encode-error: U+DBB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB8");
    },
    Error,
    "encode-error: U+DBB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBB9");
    },
    Error,
    "encode-error: U+DBB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBBA");
    },
    Error,
    "encode-error: U+DBBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBBB");
    },
    Error,
    "encode-error: U+DBBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBBC");
    },
    Error,
    "encode-error: U+DBBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBBD");
    },
    Error,
    "encode-error: U+DBBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBBE");
    },
    Error,
    "encode-error: U+DBBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBBF");
    },
    Error,
    "encode-error: U+DBBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC0");
    },
    Error,
    "encode-error: U+DBC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC1");
    },
    Error,
    "encode-error: U+DBC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC2");
    },
    Error,
    "encode-error: U+DBC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC3");
    },
    Error,
    "encode-error: U+DBC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC4");
    },
    Error,
    "encode-error: U+DBC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC5");
    },
    Error,
    "encode-error: U+DBC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC6");
    },
    Error,
    "encode-error: U+DBC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC7");
    },
    Error,
    "encode-error: U+DBC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC8");
    },
    Error,
    "encode-error: U+DBC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBC9");
    },
    Error,
    "encode-error: U+DBC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBCA");
    },
    Error,
    "encode-error: U+DBCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBCB");
    },
    Error,
    "encode-error: U+DBCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBCC");
    },
    Error,
    "encode-error: U+DBCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBCD");
    },
    Error,
    "encode-error: U+DBCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBCE");
    },
    Error,
    "encode-error: U+DBCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBCF");
    },
    Error,
    "encode-error: U+DBCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD0");
    },
    Error,
    "encode-error: U+DBD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD1");
    },
    Error,
    "encode-error: U+DBD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD2");
    },
    Error,
    "encode-error: U+DBD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD3");
    },
    Error,
    "encode-error: U+DBD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD4");
    },
    Error,
    "encode-error: U+DBD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD5");
    },
    Error,
    "encode-error: U+DBD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD6");
    },
    Error,
    "encode-error: U+DBD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD7");
    },
    Error,
    "encode-error: U+DBD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD8");
    },
    Error,
    "encode-error: U+DBD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBD9");
    },
    Error,
    "encode-error: U+DBD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBDA");
    },
    Error,
    "encode-error: U+DBDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBDB");
    },
    Error,
    "encode-error: U+DBDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBDC");
    },
    Error,
    "encode-error: U+DBDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBDD");
    },
    Error,
    "encode-error: U+DBDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBDE");
    },
    Error,
    "encode-error: U+DBDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBDF");
    },
    Error,
    "encode-error: U+DBDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE0");
    },
    Error,
    "encode-error: U+DBE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE1");
    },
    Error,
    "encode-error: U+DBE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE2");
    },
    Error,
    "encode-error: U+DBE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE3");
    },
    Error,
    "encode-error: U+DBE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE4");
    },
    Error,
    "encode-error: U+DBE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE5");
    },
    Error,
    "encode-error: U+DBE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE6");
    },
    Error,
    "encode-error: U+DBE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE7");
    },
    Error,
    "encode-error: U+DBE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE8");
    },
    Error,
    "encode-error: U+DBE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBE9");
    },
    Error,
    "encode-error: U+DBE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBEA");
    },
    Error,
    "encode-error: U+DBEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBEB");
    },
    Error,
    "encode-error: U+DBEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBEC");
    },
    Error,
    "encode-error: U+DBEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBED");
    },
    Error,
    "encode-error: U+DBED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBEE");
    },
    Error,
    "encode-error: U+DBEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBEF");
    },
    Error,
    "encode-error: U+DBEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF0");
    },
    Error,
    "encode-error: U+DBF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF1");
    },
    Error,
    "encode-error: U+DBF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF2");
    },
    Error,
    "encode-error: U+DBF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF3");
    },
    Error,
    "encode-error: U+DBF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF4");
    },
    Error,
    "encode-error: U+DBF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF5");
    },
    Error,
    "encode-error: U+DBF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF6");
    },
    Error,
    "encode-error: U+DBF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF7");
    },
    Error,
    "encode-error: U+DBF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF8");
    },
    Error,
    "encode-error: U+DBF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBF9");
    },
    Error,
    "encode-error: U+DBF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBFA");
    },
    Error,
    "encode-error: U+DBFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBFB");
    },
    Error,
    "encode-error: U+DBFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBFC");
    },
    Error,
    "encode-error: U+DBFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBFD");
    },
    Error,
    "encode-error: U+DBFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBFE");
    },
    Error,
    "encode-error: U+DBFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDBFF");
    },
    Error,
    "encode-error: U+DBFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC00");
    },
    Error,
    "encode-error: U+DC00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC01");
    },
    Error,
    "encode-error: U+DC01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC02");
    },
    Error,
    "encode-error: U+DC02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC03");
    },
    Error,
    "encode-error: U+DC03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC04");
    },
    Error,
    "encode-error: U+DC04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC05");
    },
    Error,
    "encode-error: U+DC05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC06");
    },
    Error,
    "encode-error: U+DC06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC07");
    },
    Error,
    "encode-error: U+DC07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC08");
    },
    Error,
    "encode-error: U+DC08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC09");
    },
    Error,
    "encode-error: U+DC09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC0A");
    },
    Error,
    "encode-error: U+DC0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC0B");
    },
    Error,
    "encode-error: U+DC0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC0C");
    },
    Error,
    "encode-error: U+DC0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC0D");
    },
    Error,
    "encode-error: U+DC0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC0E");
    },
    Error,
    "encode-error: U+DC0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC0F");
    },
    Error,
    "encode-error: U+DC0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC10");
    },
    Error,
    "encode-error: U+DC10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC11");
    },
    Error,
    "encode-error: U+DC11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC12");
    },
    Error,
    "encode-error: U+DC12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC13");
    },
    Error,
    "encode-error: U+DC13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC14");
    },
    Error,
    "encode-error: U+DC14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC15");
    },
    Error,
    "encode-error: U+DC15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC16");
    },
    Error,
    "encode-error: U+DC16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC17");
    },
    Error,
    "encode-error: U+DC17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC18");
    },
    Error,
    "encode-error: U+DC18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC19");
    },
    Error,
    "encode-error: U+DC19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC1A");
    },
    Error,
    "encode-error: U+DC1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC1B");
    },
    Error,
    "encode-error: U+DC1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC1C");
    },
    Error,
    "encode-error: U+DC1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC1D");
    },
    Error,
    "encode-error: U+DC1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC1E");
    },
    Error,
    "encode-error: U+DC1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC1F");
    },
    Error,
    "encode-error: U+DC1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC20");
    },
    Error,
    "encode-error: U+DC20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC21");
    },
    Error,
    "encode-error: U+DC21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC22");
    },
    Error,
    "encode-error: U+DC22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC23");
    },
    Error,
    "encode-error: U+DC23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC24");
    },
    Error,
    "encode-error: U+DC24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC25");
    },
    Error,
    "encode-error: U+DC25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC26");
    },
    Error,
    "encode-error: U+DC26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC27");
    },
    Error,
    "encode-error: U+DC27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC28");
    },
    Error,
    "encode-error: U+DC28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC29");
    },
    Error,
    "encode-error: U+DC29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC2A");
    },
    Error,
    "encode-error: U+DC2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC2B");
    },
    Error,
    "encode-error: U+DC2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC2C");
    },
    Error,
    "encode-error: U+DC2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC2D");
    },
    Error,
    "encode-error: U+DC2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC2E");
    },
    Error,
    "encode-error: U+DC2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC2F");
    },
    Error,
    "encode-error: U+DC2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC30");
    },
    Error,
    "encode-error: U+DC30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC31");
    },
    Error,
    "encode-error: U+DC31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC32");
    },
    Error,
    "encode-error: U+DC32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC33");
    },
    Error,
    "encode-error: U+DC33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC34");
    },
    Error,
    "encode-error: U+DC34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC35");
    },
    Error,
    "encode-error: U+DC35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC36");
    },
    Error,
    "encode-error: U+DC36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC37");
    },
    Error,
    "encode-error: U+DC37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC38");
    },
    Error,
    "encode-error: U+DC38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC39");
    },
    Error,
    "encode-error: U+DC39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC3A");
    },
    Error,
    "encode-error: U+DC3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC3B");
    },
    Error,
    "encode-error: U+DC3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC3C");
    },
    Error,
    "encode-error: U+DC3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC3D");
    },
    Error,
    "encode-error: U+DC3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC3E");
    },
    Error,
    "encode-error: U+DC3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC3F");
    },
    Error,
    "encode-error: U+DC3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC40");
    },
    Error,
    "encode-error: U+DC40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC41");
    },
    Error,
    "encode-error: U+DC41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC42");
    },
    Error,
    "encode-error: U+DC42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC43");
    },
    Error,
    "encode-error: U+DC43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC44");
    },
    Error,
    "encode-error: U+DC44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC45");
    },
    Error,
    "encode-error: U+DC45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC46");
    },
    Error,
    "encode-error: U+DC46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC47");
    },
    Error,
    "encode-error: U+DC47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC48");
    },
    Error,
    "encode-error: U+DC48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC49");
    },
    Error,
    "encode-error: U+DC49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC4A");
    },
    Error,
    "encode-error: U+DC4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC4B");
    },
    Error,
    "encode-error: U+DC4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC4C");
    },
    Error,
    "encode-error: U+DC4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC4D");
    },
    Error,
    "encode-error: U+DC4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC4E");
    },
    Error,
    "encode-error: U+DC4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC4F");
    },
    Error,
    "encode-error: U+DC4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC50");
    },
    Error,
    "encode-error: U+DC50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC51");
    },
    Error,
    "encode-error: U+DC51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC52");
    },
    Error,
    "encode-error: U+DC52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC53");
    },
    Error,
    "encode-error: U+DC53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC54");
    },
    Error,
    "encode-error: U+DC54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC55");
    },
    Error,
    "encode-error: U+DC55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC56");
    },
    Error,
    "encode-error: U+DC56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC57");
    },
    Error,
    "encode-error: U+DC57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC58");
    },
    Error,
    "encode-error: U+DC58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC59");
    },
    Error,
    "encode-error: U+DC59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC5A");
    },
    Error,
    "encode-error: U+DC5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC5B");
    },
    Error,
    "encode-error: U+DC5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC5C");
    },
    Error,
    "encode-error: U+DC5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC5D");
    },
    Error,
    "encode-error: U+DC5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC5E");
    },
    Error,
    "encode-error: U+DC5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC5F");
    },
    Error,
    "encode-error: U+DC5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC60");
    },
    Error,
    "encode-error: U+DC60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC61");
    },
    Error,
    "encode-error: U+DC61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC62");
    },
    Error,
    "encode-error: U+DC62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC63");
    },
    Error,
    "encode-error: U+DC63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC64");
    },
    Error,
    "encode-error: U+DC64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC65");
    },
    Error,
    "encode-error: U+DC65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC66");
    },
    Error,
    "encode-error: U+DC66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC67");
    },
    Error,
    "encode-error: U+DC67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC68");
    },
    Error,
    "encode-error: U+DC68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC69");
    },
    Error,
    "encode-error: U+DC69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC6A");
    },
    Error,
    "encode-error: U+DC6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC6B");
    },
    Error,
    "encode-error: U+DC6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC6C");
    },
    Error,
    "encode-error: U+DC6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC6D");
    },
    Error,
    "encode-error: U+DC6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC6E");
    },
    Error,
    "encode-error: U+DC6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC6F");
    },
    Error,
    "encode-error: U+DC6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC70");
    },
    Error,
    "encode-error: U+DC70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC71");
    },
    Error,
    "encode-error: U+DC71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC72");
    },
    Error,
    "encode-error: U+DC72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC73");
    },
    Error,
    "encode-error: U+DC73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC74");
    },
    Error,
    "encode-error: U+DC74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC75");
    },
    Error,
    "encode-error: U+DC75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC76");
    },
    Error,
    "encode-error: U+DC76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC77");
    },
    Error,
    "encode-error: U+DC77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC78");
    },
    Error,
    "encode-error: U+DC78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC79");
    },
    Error,
    "encode-error: U+DC79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC7A");
    },
    Error,
    "encode-error: U+DC7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC7B");
    },
    Error,
    "encode-error: U+DC7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC7C");
    },
    Error,
    "encode-error: U+DC7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC7D");
    },
    Error,
    "encode-error: U+DC7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC7E");
    },
    Error,
    "encode-error: U+DC7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC7F");
    },
    Error,
    "encode-error: U+DC7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC80");
    },
    Error,
    "encode-error: U+DC80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC81");
    },
    Error,
    "encode-error: U+DC81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC82");
    },
    Error,
    "encode-error: U+DC82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC83");
    },
    Error,
    "encode-error: U+DC83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC84");
    },
    Error,
    "encode-error: U+DC84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC85");
    },
    Error,
    "encode-error: U+DC85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC86");
    },
    Error,
    "encode-error: U+DC86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC87");
    },
    Error,
    "encode-error: U+DC87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC88");
    },
    Error,
    "encode-error: U+DC88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC89");
    },
    Error,
    "encode-error: U+DC89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC8A");
    },
    Error,
    "encode-error: U+DC8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC8B");
    },
    Error,
    "encode-error: U+DC8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC8C");
    },
    Error,
    "encode-error: U+DC8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC8D");
    },
    Error,
    "encode-error: U+DC8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC8E");
    },
    Error,
    "encode-error: U+DC8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC8F");
    },
    Error,
    "encode-error: U+DC8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC90");
    },
    Error,
    "encode-error: U+DC90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC91");
    },
    Error,
    "encode-error: U+DC91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC92");
    },
    Error,
    "encode-error: U+DC92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC93");
    },
    Error,
    "encode-error: U+DC93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC94");
    },
    Error,
    "encode-error: U+DC94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC95");
    },
    Error,
    "encode-error: U+DC95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC96");
    },
    Error,
    "encode-error: U+DC96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC97");
    },
    Error,
    "encode-error: U+DC97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC98");
    },
    Error,
    "encode-error: U+DC98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC99");
    },
    Error,
    "encode-error: U+DC99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC9A");
    },
    Error,
    "encode-error: U+DC9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC9B");
    },
    Error,
    "encode-error: U+DC9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC9C");
    },
    Error,
    "encode-error: U+DC9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC9D");
    },
    Error,
    "encode-error: U+DC9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC9E");
    },
    Error,
    "encode-error: U+DC9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDC9F");
    },
    Error,
    "encode-error: U+DC9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA0");
    },
    Error,
    "encode-error: U+DCA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA1");
    },
    Error,
    "encode-error: U+DCA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA2");
    },
    Error,
    "encode-error: U+DCA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA3");
    },
    Error,
    "encode-error: U+DCA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA4");
    },
    Error,
    "encode-error: U+DCA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA5");
    },
    Error,
    "encode-error: U+DCA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA6");
    },
    Error,
    "encode-error: U+DCA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA7");
    },
    Error,
    "encode-error: U+DCA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA8");
    },
    Error,
    "encode-error: U+DCA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCA9");
    },
    Error,
    "encode-error: U+DCA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCAA");
    },
    Error,
    "encode-error: U+DCAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCAB");
    },
    Error,
    "encode-error: U+DCAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCAC");
    },
    Error,
    "encode-error: U+DCAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCAD");
    },
    Error,
    "encode-error: U+DCAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCAE");
    },
    Error,
    "encode-error: U+DCAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCAF");
    },
    Error,
    "encode-error: U+DCAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB0");
    },
    Error,
    "encode-error: U+DCB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB1");
    },
    Error,
    "encode-error: U+DCB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB2");
    },
    Error,
    "encode-error: U+DCB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB3");
    },
    Error,
    "encode-error: U+DCB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB4");
    },
    Error,
    "encode-error: U+DCB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB5");
    },
    Error,
    "encode-error: U+DCB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB6");
    },
    Error,
    "encode-error: U+DCB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB7");
    },
    Error,
    "encode-error: U+DCB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB8");
    },
    Error,
    "encode-error: U+DCB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCB9");
    },
    Error,
    "encode-error: U+DCB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCBA");
    },
    Error,
    "encode-error: U+DCBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCBB");
    },
    Error,
    "encode-error: U+DCBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCBC");
    },
    Error,
    "encode-error: U+DCBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCBD");
    },
    Error,
    "encode-error: U+DCBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCBE");
    },
    Error,
    "encode-error: U+DCBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCBF");
    },
    Error,
    "encode-error: U+DCBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC0");
    },
    Error,
    "encode-error: U+DCC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC1");
    },
    Error,
    "encode-error: U+DCC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC2");
    },
    Error,
    "encode-error: U+DCC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC3");
    },
    Error,
    "encode-error: U+DCC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC4");
    },
    Error,
    "encode-error: U+DCC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC5");
    },
    Error,
    "encode-error: U+DCC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC6");
    },
    Error,
    "encode-error: U+DCC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC7");
    },
    Error,
    "encode-error: U+DCC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC8");
    },
    Error,
    "encode-error: U+DCC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCC9");
    },
    Error,
    "encode-error: U+DCC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCCA");
    },
    Error,
    "encode-error: U+DCCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCCB");
    },
    Error,
    "encode-error: U+DCCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCCC");
    },
    Error,
    "encode-error: U+DCCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCCD");
    },
    Error,
    "encode-error: U+DCCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCCE");
    },
    Error,
    "encode-error: U+DCCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCCF");
    },
    Error,
    "encode-error: U+DCCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD0");
    },
    Error,
    "encode-error: U+DCD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD1");
    },
    Error,
    "encode-error: U+DCD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD2");
    },
    Error,
    "encode-error: U+DCD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD3");
    },
    Error,
    "encode-error: U+DCD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD4");
    },
    Error,
    "encode-error: U+DCD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD5");
    },
    Error,
    "encode-error: U+DCD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD6");
    },
    Error,
    "encode-error: U+DCD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD7");
    },
    Error,
    "encode-error: U+DCD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD8");
    },
    Error,
    "encode-error: U+DCD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCD9");
    },
    Error,
    "encode-error: U+DCD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCDA");
    },
    Error,
    "encode-error: U+DCDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCDB");
    },
    Error,
    "encode-error: U+DCDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCDC");
    },
    Error,
    "encode-error: U+DCDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCDD");
    },
    Error,
    "encode-error: U+DCDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCDE");
    },
    Error,
    "encode-error: U+DCDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCDF");
    },
    Error,
    "encode-error: U+DCDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE0");
    },
    Error,
    "encode-error: U+DCE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE1");
    },
    Error,
    "encode-error: U+DCE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE2");
    },
    Error,
    "encode-error: U+DCE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE3");
    },
    Error,
    "encode-error: U+DCE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE4");
    },
    Error,
    "encode-error: U+DCE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE5");
    },
    Error,
    "encode-error: U+DCE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE6");
    },
    Error,
    "encode-error: U+DCE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE7");
    },
    Error,
    "encode-error: U+DCE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE8");
    },
    Error,
    "encode-error: U+DCE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCE9");
    },
    Error,
    "encode-error: U+DCE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCEA");
    },
    Error,
    "encode-error: U+DCEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCEB");
    },
    Error,
    "encode-error: U+DCEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCEC");
    },
    Error,
    "encode-error: U+DCEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCED");
    },
    Error,
    "encode-error: U+DCED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCEE");
    },
    Error,
    "encode-error: U+DCEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCEF");
    },
    Error,
    "encode-error: U+DCEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF0");
    },
    Error,
    "encode-error: U+DCF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF1");
    },
    Error,
    "encode-error: U+DCF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF2");
    },
    Error,
    "encode-error: U+DCF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF3");
    },
    Error,
    "encode-error: U+DCF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF4");
    },
    Error,
    "encode-error: U+DCF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF5");
    },
    Error,
    "encode-error: U+DCF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF6");
    },
    Error,
    "encode-error: U+DCF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF7");
    },
    Error,
    "encode-error: U+DCF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF8");
    },
    Error,
    "encode-error: U+DCF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCF9");
    },
    Error,
    "encode-error: U+DCF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCFA");
    },
    Error,
    "encode-error: U+DCFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCFB");
    },
    Error,
    "encode-error: U+DCFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCFC");
    },
    Error,
    "encode-error: U+DCFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCFD");
    },
    Error,
    "encode-error: U+DCFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCFE");
    },
    Error,
    "encode-error: U+DCFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDCFF");
    },
    Error,
    "encode-error: U+DCFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD00");
    },
    Error,
    "encode-error: U+DD00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD01");
    },
    Error,
    "encode-error: U+DD01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD02");
    },
    Error,
    "encode-error: U+DD02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD03");
    },
    Error,
    "encode-error: U+DD03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD04");
    },
    Error,
    "encode-error: U+DD04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD05");
    },
    Error,
    "encode-error: U+DD05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD06");
    },
    Error,
    "encode-error: U+DD06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD07");
    },
    Error,
    "encode-error: U+DD07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD08");
    },
    Error,
    "encode-error: U+DD08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD09");
    },
    Error,
    "encode-error: U+DD09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD0A");
    },
    Error,
    "encode-error: U+DD0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD0B");
    },
    Error,
    "encode-error: U+DD0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD0C");
    },
    Error,
    "encode-error: U+DD0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD0D");
    },
    Error,
    "encode-error: U+DD0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD0E");
    },
    Error,
    "encode-error: U+DD0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD0F");
    },
    Error,
    "encode-error: U+DD0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD10");
    },
    Error,
    "encode-error: U+DD10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD11");
    },
    Error,
    "encode-error: U+DD11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD12");
    },
    Error,
    "encode-error: U+DD12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD13");
    },
    Error,
    "encode-error: U+DD13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD14");
    },
    Error,
    "encode-error: U+DD14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD15");
    },
    Error,
    "encode-error: U+DD15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD16");
    },
    Error,
    "encode-error: U+DD16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD17");
    },
    Error,
    "encode-error: U+DD17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD18");
    },
    Error,
    "encode-error: U+DD18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD19");
    },
    Error,
    "encode-error: U+DD19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD1A");
    },
    Error,
    "encode-error: U+DD1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD1B");
    },
    Error,
    "encode-error: U+DD1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD1C");
    },
    Error,
    "encode-error: U+DD1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD1D");
    },
    Error,
    "encode-error: U+DD1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD1E");
    },
    Error,
    "encode-error: U+DD1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD1F");
    },
    Error,
    "encode-error: U+DD1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD20");
    },
    Error,
    "encode-error: U+DD20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD21");
    },
    Error,
    "encode-error: U+DD21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD22");
    },
    Error,
    "encode-error: U+DD22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD23");
    },
    Error,
    "encode-error: U+DD23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD24");
    },
    Error,
    "encode-error: U+DD24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD25");
    },
    Error,
    "encode-error: U+DD25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD26");
    },
    Error,
    "encode-error: U+DD26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD27");
    },
    Error,
    "encode-error: U+DD27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD28");
    },
    Error,
    "encode-error: U+DD28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD29");
    },
    Error,
    "encode-error: U+DD29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD2A");
    },
    Error,
    "encode-error: U+DD2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD2B");
    },
    Error,
    "encode-error: U+DD2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD2C");
    },
    Error,
    "encode-error: U+DD2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD2D");
    },
    Error,
    "encode-error: U+DD2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD2E");
    },
    Error,
    "encode-error: U+DD2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD2F");
    },
    Error,
    "encode-error: U+DD2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD30");
    },
    Error,
    "encode-error: U+DD30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD31");
    },
    Error,
    "encode-error: U+DD31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD32");
    },
    Error,
    "encode-error: U+DD32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD33");
    },
    Error,
    "encode-error: U+DD33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD34");
    },
    Error,
    "encode-error: U+DD34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD35");
    },
    Error,
    "encode-error: U+DD35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD36");
    },
    Error,
    "encode-error: U+DD36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD37");
    },
    Error,
    "encode-error: U+DD37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD38");
    },
    Error,
    "encode-error: U+DD38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD39");
    },
    Error,
    "encode-error: U+DD39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD3A");
    },
    Error,
    "encode-error: U+DD3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD3B");
    },
    Error,
    "encode-error: U+DD3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD3C");
    },
    Error,
    "encode-error: U+DD3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD3D");
    },
    Error,
    "encode-error: U+DD3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD3E");
    },
    Error,
    "encode-error: U+DD3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD3F");
    },
    Error,
    "encode-error: U+DD3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD40");
    },
    Error,
    "encode-error: U+DD40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD41");
    },
    Error,
    "encode-error: U+DD41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD42");
    },
    Error,
    "encode-error: U+DD42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD43");
    },
    Error,
    "encode-error: U+DD43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD44");
    },
    Error,
    "encode-error: U+DD44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD45");
    },
    Error,
    "encode-error: U+DD45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD46");
    },
    Error,
    "encode-error: U+DD46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD47");
    },
    Error,
    "encode-error: U+DD47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD48");
    },
    Error,
    "encode-error: U+DD48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD49");
    },
    Error,
    "encode-error: U+DD49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD4A");
    },
    Error,
    "encode-error: U+DD4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD4B");
    },
    Error,
    "encode-error: U+DD4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD4C");
    },
    Error,
    "encode-error: U+DD4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD4D");
    },
    Error,
    "encode-error: U+DD4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD4E");
    },
    Error,
    "encode-error: U+DD4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD4F");
    },
    Error,
    "encode-error: U+DD4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD50");
    },
    Error,
    "encode-error: U+DD50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD51");
    },
    Error,
    "encode-error: U+DD51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD52");
    },
    Error,
    "encode-error: U+DD52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD53");
    },
    Error,
    "encode-error: U+DD53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD54");
    },
    Error,
    "encode-error: U+DD54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD55");
    },
    Error,
    "encode-error: U+DD55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD56");
    },
    Error,
    "encode-error: U+DD56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD57");
    },
    Error,
    "encode-error: U+DD57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD58");
    },
    Error,
    "encode-error: U+DD58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD59");
    },
    Error,
    "encode-error: U+DD59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD5A");
    },
    Error,
    "encode-error: U+DD5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD5B");
    },
    Error,
    "encode-error: U+DD5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD5C");
    },
    Error,
    "encode-error: U+DD5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD5D");
    },
    Error,
    "encode-error: U+DD5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD5E");
    },
    Error,
    "encode-error: U+DD5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD5F");
    },
    Error,
    "encode-error: U+DD5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD60");
    },
    Error,
    "encode-error: U+DD60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD61");
    },
    Error,
    "encode-error: U+DD61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD62");
    },
    Error,
    "encode-error: U+DD62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD63");
    },
    Error,
    "encode-error: U+DD63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD64");
    },
    Error,
    "encode-error: U+DD64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD65");
    },
    Error,
    "encode-error: U+DD65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD66");
    },
    Error,
    "encode-error: U+DD66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD67");
    },
    Error,
    "encode-error: U+DD67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD68");
    },
    Error,
    "encode-error: U+DD68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD69");
    },
    Error,
    "encode-error: U+DD69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD6A");
    },
    Error,
    "encode-error: U+DD6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD6B");
    },
    Error,
    "encode-error: U+DD6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD6C");
    },
    Error,
    "encode-error: U+DD6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD6D");
    },
    Error,
    "encode-error: U+DD6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD6E");
    },
    Error,
    "encode-error: U+DD6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD6F");
    },
    Error,
    "encode-error: U+DD6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD70");
    },
    Error,
    "encode-error: U+DD70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD71");
    },
    Error,
    "encode-error: U+DD71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD72");
    },
    Error,
    "encode-error: U+DD72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD73");
    },
    Error,
    "encode-error: U+DD73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD74");
    },
    Error,
    "encode-error: U+DD74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD75");
    },
    Error,
    "encode-error: U+DD75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD76");
    },
    Error,
    "encode-error: U+DD76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD77");
    },
    Error,
    "encode-error: U+DD77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD78");
    },
    Error,
    "encode-error: U+DD78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD79");
    },
    Error,
    "encode-error: U+DD79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD7A");
    },
    Error,
    "encode-error: U+DD7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD7B");
    },
    Error,
    "encode-error: U+DD7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD7C");
    },
    Error,
    "encode-error: U+DD7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD7D");
    },
    Error,
    "encode-error: U+DD7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD7E");
    },
    Error,
    "encode-error: U+DD7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD7F");
    },
    Error,
    "encode-error: U+DD7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD80");
    },
    Error,
    "encode-error: U+DD80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD81");
    },
    Error,
    "encode-error: U+DD81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD82");
    },
    Error,
    "encode-error: U+DD82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD83");
    },
    Error,
    "encode-error: U+DD83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD84");
    },
    Error,
    "encode-error: U+DD84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD85");
    },
    Error,
    "encode-error: U+DD85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD86");
    },
    Error,
    "encode-error: U+DD86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD87");
    },
    Error,
    "encode-error: U+DD87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD88");
    },
    Error,
    "encode-error: U+DD88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD89");
    },
    Error,
    "encode-error: U+DD89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD8A");
    },
    Error,
    "encode-error: U+DD8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD8B");
    },
    Error,
    "encode-error: U+DD8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD8C");
    },
    Error,
    "encode-error: U+DD8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD8D");
    },
    Error,
    "encode-error: U+DD8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD8E");
    },
    Error,
    "encode-error: U+DD8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD8F");
    },
    Error,
    "encode-error: U+DD8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD90");
    },
    Error,
    "encode-error: U+DD90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD91");
    },
    Error,
    "encode-error: U+DD91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD92");
    },
    Error,
    "encode-error: U+DD92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD93");
    },
    Error,
    "encode-error: U+DD93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD94");
    },
    Error,
    "encode-error: U+DD94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD95");
    },
    Error,
    "encode-error: U+DD95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD96");
    },
    Error,
    "encode-error: U+DD96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD97");
    },
    Error,
    "encode-error: U+DD97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD98");
    },
    Error,
    "encode-error: U+DD98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD99");
    },
    Error,
    "encode-error: U+DD99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD9A");
    },
    Error,
    "encode-error: U+DD9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD9B");
    },
    Error,
    "encode-error: U+DD9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD9C");
    },
    Error,
    "encode-error: U+DD9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD9D");
    },
    Error,
    "encode-error: U+DD9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD9E");
    },
    Error,
    "encode-error: U+DD9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDD9F");
    },
    Error,
    "encode-error: U+DD9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA0");
    },
    Error,
    "encode-error: U+DDA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA1");
    },
    Error,
    "encode-error: U+DDA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA2");
    },
    Error,
    "encode-error: U+DDA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA3");
    },
    Error,
    "encode-error: U+DDA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA4");
    },
    Error,
    "encode-error: U+DDA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA5");
    },
    Error,
    "encode-error: U+DDA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA6");
    },
    Error,
    "encode-error: U+DDA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA7");
    },
    Error,
    "encode-error: U+DDA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA8");
    },
    Error,
    "encode-error: U+DDA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDA9");
    },
    Error,
    "encode-error: U+DDA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDAA");
    },
    Error,
    "encode-error: U+DDAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDAB");
    },
    Error,
    "encode-error: U+DDAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDAC");
    },
    Error,
    "encode-error: U+DDAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDAD");
    },
    Error,
    "encode-error: U+DDAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDAE");
    },
    Error,
    "encode-error: U+DDAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDAF");
    },
    Error,
    "encode-error: U+DDAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB0");
    },
    Error,
    "encode-error: U+DDB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB1");
    },
    Error,
    "encode-error: U+DDB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB2");
    },
    Error,
    "encode-error: U+DDB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB3");
    },
    Error,
    "encode-error: U+DDB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB4");
    },
    Error,
    "encode-error: U+DDB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB5");
    },
    Error,
    "encode-error: U+DDB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB6");
    },
    Error,
    "encode-error: U+DDB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB7");
    },
    Error,
    "encode-error: U+DDB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB8");
    },
    Error,
    "encode-error: U+DDB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDB9");
    },
    Error,
    "encode-error: U+DDB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDBA");
    },
    Error,
    "encode-error: U+DDBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDBB");
    },
    Error,
    "encode-error: U+DDBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDBC");
    },
    Error,
    "encode-error: U+DDBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDBD");
    },
    Error,
    "encode-error: U+DDBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDBE");
    },
    Error,
    "encode-error: U+DDBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDBF");
    },
    Error,
    "encode-error: U+DDBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC0");
    },
    Error,
    "encode-error: U+DDC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC1");
    },
    Error,
    "encode-error: U+DDC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC2");
    },
    Error,
    "encode-error: U+DDC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC3");
    },
    Error,
    "encode-error: U+DDC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC4");
    },
    Error,
    "encode-error: U+DDC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC5");
    },
    Error,
    "encode-error: U+DDC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC6");
    },
    Error,
    "encode-error: U+DDC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC7");
    },
    Error,
    "encode-error: U+DDC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC8");
    },
    Error,
    "encode-error: U+DDC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDC9");
    },
    Error,
    "encode-error: U+DDC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDCA");
    },
    Error,
    "encode-error: U+DDCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDCB");
    },
    Error,
    "encode-error: U+DDCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDCC");
    },
    Error,
    "encode-error: U+DDCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDCD");
    },
    Error,
    "encode-error: U+DDCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDCE");
    },
    Error,
    "encode-error: U+DDCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDCF");
    },
    Error,
    "encode-error: U+DDCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD0");
    },
    Error,
    "encode-error: U+DDD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD1");
    },
    Error,
    "encode-error: U+DDD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD2");
    },
    Error,
    "encode-error: U+DDD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD3");
    },
    Error,
    "encode-error: U+DDD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD4");
    },
    Error,
    "encode-error: U+DDD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD5");
    },
    Error,
    "encode-error: U+DDD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD6");
    },
    Error,
    "encode-error: U+DDD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD7");
    },
    Error,
    "encode-error: U+DDD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD8");
    },
    Error,
    "encode-error: U+DDD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDD9");
    },
    Error,
    "encode-error: U+DDD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDDA");
    },
    Error,
    "encode-error: U+DDDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDDB");
    },
    Error,
    "encode-error: U+DDDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDDC");
    },
    Error,
    "encode-error: U+DDDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDDD");
    },
    Error,
    "encode-error: U+DDDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDDE");
    },
    Error,
    "encode-error: U+DDDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDDF");
    },
    Error,
    "encode-error: U+DDDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE0");
    },
    Error,
    "encode-error: U+DDE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE1");
    },
    Error,
    "encode-error: U+DDE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE2");
    },
    Error,
    "encode-error: U+DDE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE3");
    },
    Error,
    "encode-error: U+DDE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE4");
    },
    Error,
    "encode-error: U+DDE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE5");
    },
    Error,
    "encode-error: U+DDE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE6");
    },
    Error,
    "encode-error: U+DDE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE7");
    },
    Error,
    "encode-error: U+DDE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE8");
    },
    Error,
    "encode-error: U+DDE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDE9");
    },
    Error,
    "encode-error: U+DDE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDEA");
    },
    Error,
    "encode-error: U+DDEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDEB");
    },
    Error,
    "encode-error: U+DDEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDEC");
    },
    Error,
    "encode-error: U+DDEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDED");
    },
    Error,
    "encode-error: U+DDED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDEE");
    },
    Error,
    "encode-error: U+DDEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDEF");
    },
    Error,
    "encode-error: U+DDEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF0");
    },
    Error,
    "encode-error: U+DDF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF1");
    },
    Error,
    "encode-error: U+DDF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF2");
    },
    Error,
    "encode-error: U+DDF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF3");
    },
    Error,
    "encode-error: U+DDF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF4");
    },
    Error,
    "encode-error: U+DDF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF5");
    },
    Error,
    "encode-error: U+DDF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF6");
    },
    Error,
    "encode-error: U+DDF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF7");
    },
    Error,
    "encode-error: U+DDF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF8");
    },
    Error,
    "encode-error: U+DDF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDF9");
    },
    Error,
    "encode-error: U+DDF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDFA");
    },
    Error,
    "encode-error: U+DDFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDFB");
    },
    Error,
    "encode-error: U+DDFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDFC");
    },
    Error,
    "encode-error: U+DDFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDFD");
    },
    Error,
    "encode-error: U+DDFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDFE");
    },
    Error,
    "encode-error: U+DDFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDDFF");
    },
    Error,
    "encode-error: U+DDFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE00");
    },
    Error,
    "encode-error: U+DE00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE01");
    },
    Error,
    "encode-error: U+DE01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE02");
    },
    Error,
    "encode-error: U+DE02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE03");
    },
    Error,
    "encode-error: U+DE03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE04");
    },
    Error,
    "encode-error: U+DE04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE05");
    },
    Error,
    "encode-error: U+DE05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE06");
    },
    Error,
    "encode-error: U+DE06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE07");
    },
    Error,
    "encode-error: U+DE07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE08");
    },
    Error,
    "encode-error: U+DE08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE09");
    },
    Error,
    "encode-error: U+DE09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE0A");
    },
    Error,
    "encode-error: U+DE0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE0B");
    },
    Error,
    "encode-error: U+DE0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE0C");
    },
    Error,
    "encode-error: U+DE0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE0D");
    },
    Error,
    "encode-error: U+DE0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE0E");
    },
    Error,
    "encode-error: U+DE0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE0F");
    },
    Error,
    "encode-error: U+DE0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE10");
    },
    Error,
    "encode-error: U+DE10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE11");
    },
    Error,
    "encode-error: U+DE11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE12");
    },
    Error,
    "encode-error: U+DE12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE13");
    },
    Error,
    "encode-error: U+DE13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE14");
    },
    Error,
    "encode-error: U+DE14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE15");
    },
    Error,
    "encode-error: U+DE15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE16");
    },
    Error,
    "encode-error: U+DE16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE17");
    },
    Error,
    "encode-error: U+DE17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE18");
    },
    Error,
    "encode-error: U+DE18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE19");
    },
    Error,
    "encode-error: U+DE19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE1A");
    },
    Error,
    "encode-error: U+DE1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE1B");
    },
    Error,
    "encode-error: U+DE1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE1C");
    },
    Error,
    "encode-error: U+DE1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE1D");
    },
    Error,
    "encode-error: U+DE1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE1E");
    },
    Error,
    "encode-error: U+DE1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE1F");
    },
    Error,
    "encode-error: U+DE1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE20");
    },
    Error,
    "encode-error: U+DE20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE21");
    },
    Error,
    "encode-error: U+DE21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE22");
    },
    Error,
    "encode-error: U+DE22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE23");
    },
    Error,
    "encode-error: U+DE23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE24");
    },
    Error,
    "encode-error: U+DE24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE25");
    },
    Error,
    "encode-error: U+DE25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE26");
    },
    Error,
    "encode-error: U+DE26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE27");
    },
    Error,
    "encode-error: U+DE27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE28");
    },
    Error,
    "encode-error: U+DE28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE29");
    },
    Error,
    "encode-error: U+DE29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE2A");
    },
    Error,
    "encode-error: U+DE2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE2B");
    },
    Error,
    "encode-error: U+DE2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE2C");
    },
    Error,
    "encode-error: U+DE2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE2D");
    },
    Error,
    "encode-error: U+DE2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE2E");
    },
    Error,
    "encode-error: U+DE2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE2F");
    },
    Error,
    "encode-error: U+DE2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE30");
    },
    Error,
    "encode-error: U+DE30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE31");
    },
    Error,
    "encode-error: U+DE31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE32");
    },
    Error,
    "encode-error: U+DE32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE33");
    },
    Error,
    "encode-error: U+DE33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE34");
    },
    Error,
    "encode-error: U+DE34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE35");
    },
    Error,
    "encode-error: U+DE35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE36");
    },
    Error,
    "encode-error: U+DE36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE37");
    },
    Error,
    "encode-error: U+DE37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE38");
    },
    Error,
    "encode-error: U+DE38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE39");
    },
    Error,
    "encode-error: U+DE39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE3A");
    },
    Error,
    "encode-error: U+DE3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE3B");
    },
    Error,
    "encode-error: U+DE3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE3C");
    },
    Error,
    "encode-error: U+DE3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE3D");
    },
    Error,
    "encode-error: U+DE3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE3E");
    },
    Error,
    "encode-error: U+DE3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE3F");
    },
    Error,
    "encode-error: U+DE3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE40");
    },
    Error,
    "encode-error: U+DE40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE41");
    },
    Error,
    "encode-error: U+DE41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE42");
    },
    Error,
    "encode-error: U+DE42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE43");
    },
    Error,
    "encode-error: U+DE43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE44");
    },
    Error,
    "encode-error: U+DE44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE45");
    },
    Error,
    "encode-error: U+DE45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE46");
    },
    Error,
    "encode-error: U+DE46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE47");
    },
    Error,
    "encode-error: U+DE47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE48");
    },
    Error,
    "encode-error: U+DE48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE49");
    },
    Error,
    "encode-error: U+DE49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE4A");
    },
    Error,
    "encode-error: U+DE4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE4B");
    },
    Error,
    "encode-error: U+DE4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE4C");
    },
    Error,
    "encode-error: U+DE4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE4D");
    },
    Error,
    "encode-error: U+DE4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE4E");
    },
    Error,
    "encode-error: U+DE4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE4F");
    },
    Error,
    "encode-error: U+DE4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE50");
    },
    Error,
    "encode-error: U+DE50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE51");
    },
    Error,
    "encode-error: U+DE51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE52");
    },
    Error,
    "encode-error: U+DE52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE53");
    },
    Error,
    "encode-error: U+DE53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE54");
    },
    Error,
    "encode-error: U+DE54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE55");
    },
    Error,
    "encode-error: U+DE55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE56");
    },
    Error,
    "encode-error: U+DE56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE57");
    },
    Error,
    "encode-error: U+DE57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE58");
    },
    Error,
    "encode-error: U+DE58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE59");
    },
    Error,
    "encode-error: U+DE59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE5A");
    },
    Error,
    "encode-error: U+DE5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE5B");
    },
    Error,
    "encode-error: U+DE5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE5C");
    },
    Error,
    "encode-error: U+DE5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE5D");
    },
    Error,
    "encode-error: U+DE5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE5E");
    },
    Error,
    "encode-error: U+DE5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE5F");
    },
    Error,
    "encode-error: U+DE5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE60");
    },
    Error,
    "encode-error: U+DE60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE61");
    },
    Error,
    "encode-error: U+DE61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE62");
    },
    Error,
    "encode-error: U+DE62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE63");
    },
    Error,
    "encode-error: U+DE63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE64");
    },
    Error,
    "encode-error: U+DE64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE65");
    },
    Error,
    "encode-error: U+DE65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE66");
    },
    Error,
    "encode-error: U+DE66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE67");
    },
    Error,
    "encode-error: U+DE67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE68");
    },
    Error,
    "encode-error: U+DE68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE69");
    },
    Error,
    "encode-error: U+DE69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE6A");
    },
    Error,
    "encode-error: U+DE6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE6B");
    },
    Error,
    "encode-error: U+DE6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE6C");
    },
    Error,
    "encode-error: U+DE6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE6D");
    },
    Error,
    "encode-error: U+DE6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE6E");
    },
    Error,
    "encode-error: U+DE6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE6F");
    },
    Error,
    "encode-error: U+DE6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE70");
    },
    Error,
    "encode-error: U+DE70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE71");
    },
    Error,
    "encode-error: U+DE71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE72");
    },
    Error,
    "encode-error: U+DE72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE73");
    },
    Error,
    "encode-error: U+DE73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE74");
    },
    Error,
    "encode-error: U+DE74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE75");
    },
    Error,
    "encode-error: U+DE75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE76");
    },
    Error,
    "encode-error: U+DE76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE77");
    },
    Error,
    "encode-error: U+DE77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE78");
    },
    Error,
    "encode-error: U+DE78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE79");
    },
    Error,
    "encode-error: U+DE79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE7A");
    },
    Error,
    "encode-error: U+DE7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE7B");
    },
    Error,
    "encode-error: U+DE7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE7C");
    },
    Error,
    "encode-error: U+DE7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE7D");
    },
    Error,
    "encode-error: U+DE7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE7E");
    },
    Error,
    "encode-error: U+DE7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE7F");
    },
    Error,
    "encode-error: U+DE7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE80");
    },
    Error,
    "encode-error: U+DE80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE81");
    },
    Error,
    "encode-error: U+DE81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE82");
    },
    Error,
    "encode-error: U+DE82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE83");
    },
    Error,
    "encode-error: U+DE83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE84");
    },
    Error,
    "encode-error: U+DE84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE85");
    },
    Error,
    "encode-error: U+DE85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE86");
    },
    Error,
    "encode-error: U+DE86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE87");
    },
    Error,
    "encode-error: U+DE87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE88");
    },
    Error,
    "encode-error: U+DE88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE89");
    },
    Error,
    "encode-error: U+DE89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE8A");
    },
    Error,
    "encode-error: U+DE8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE8B");
    },
    Error,
    "encode-error: U+DE8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE8C");
    },
    Error,
    "encode-error: U+DE8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE8D");
    },
    Error,
    "encode-error: U+DE8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE8E");
    },
    Error,
    "encode-error: U+DE8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE8F");
    },
    Error,
    "encode-error: U+DE8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE90");
    },
    Error,
    "encode-error: U+DE90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE91");
    },
    Error,
    "encode-error: U+DE91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE92");
    },
    Error,
    "encode-error: U+DE92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE93");
    },
    Error,
    "encode-error: U+DE93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE94");
    },
    Error,
    "encode-error: U+DE94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE95");
    },
    Error,
    "encode-error: U+DE95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE96");
    },
    Error,
    "encode-error: U+DE96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE97");
    },
    Error,
    "encode-error: U+DE97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE98");
    },
    Error,
    "encode-error: U+DE98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE99");
    },
    Error,
    "encode-error: U+DE99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE9A");
    },
    Error,
    "encode-error: U+DE9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE9B");
    },
    Error,
    "encode-error: U+DE9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE9C");
    },
    Error,
    "encode-error: U+DE9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE9D");
    },
    Error,
    "encode-error: U+DE9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE9E");
    },
    Error,
    "encode-error: U+DE9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDE9F");
    },
    Error,
    "encode-error: U+DE9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA0");
    },
    Error,
    "encode-error: U+DEA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA1");
    },
    Error,
    "encode-error: U+DEA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA2");
    },
    Error,
    "encode-error: U+DEA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA3");
    },
    Error,
    "encode-error: U+DEA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA4");
    },
    Error,
    "encode-error: U+DEA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA5");
    },
    Error,
    "encode-error: U+DEA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA6");
    },
    Error,
    "encode-error: U+DEA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA7");
    },
    Error,
    "encode-error: U+DEA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA8");
    },
    Error,
    "encode-error: U+DEA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEA9");
    },
    Error,
    "encode-error: U+DEA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEAA");
    },
    Error,
    "encode-error: U+DEAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEAB");
    },
    Error,
    "encode-error: U+DEAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEAC");
    },
    Error,
    "encode-error: U+DEAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEAD");
    },
    Error,
    "encode-error: U+DEAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEAE");
    },
    Error,
    "encode-error: U+DEAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEAF");
    },
    Error,
    "encode-error: U+DEAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB0");
    },
    Error,
    "encode-error: U+DEB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB1");
    },
    Error,
    "encode-error: U+DEB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB2");
    },
    Error,
    "encode-error: U+DEB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB3");
    },
    Error,
    "encode-error: U+DEB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB4");
    },
    Error,
    "encode-error: U+DEB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB5");
    },
    Error,
    "encode-error: U+DEB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB6");
    },
    Error,
    "encode-error: U+DEB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB7");
    },
    Error,
    "encode-error: U+DEB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB8");
    },
    Error,
    "encode-error: U+DEB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEB9");
    },
    Error,
    "encode-error: U+DEB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEBA");
    },
    Error,
    "encode-error: U+DEBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEBB");
    },
    Error,
    "encode-error: U+DEBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEBC");
    },
    Error,
    "encode-error: U+DEBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEBD");
    },
    Error,
    "encode-error: U+DEBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEBE");
    },
    Error,
    "encode-error: U+DEBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEBF");
    },
    Error,
    "encode-error: U+DEBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC0");
    },
    Error,
    "encode-error: U+DEC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC1");
    },
    Error,
    "encode-error: U+DEC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC2");
    },
    Error,
    "encode-error: U+DEC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC3");
    },
    Error,
    "encode-error: U+DEC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC4");
    },
    Error,
    "encode-error: U+DEC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC5");
    },
    Error,
    "encode-error: U+DEC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC6");
    },
    Error,
    "encode-error: U+DEC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC7");
    },
    Error,
    "encode-error: U+DEC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC8");
    },
    Error,
    "encode-error: U+DEC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEC9");
    },
    Error,
    "encode-error: U+DEC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDECA");
    },
    Error,
    "encode-error: U+DECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDECB");
    },
    Error,
    "encode-error: U+DECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDECC");
    },
    Error,
    "encode-error: U+DECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDECD");
    },
    Error,
    "encode-error: U+DECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDECE");
    },
    Error,
    "encode-error: U+DECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDECF");
    },
    Error,
    "encode-error: U+DECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED0");
    },
    Error,
    "encode-error: U+DED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED1");
    },
    Error,
    "encode-error: U+DED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED2");
    },
    Error,
    "encode-error: U+DED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED3");
    },
    Error,
    "encode-error: U+DED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED4");
    },
    Error,
    "encode-error: U+DED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED5");
    },
    Error,
    "encode-error: U+DED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED6");
    },
    Error,
    "encode-error: U+DED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED7");
    },
    Error,
    "encode-error: U+DED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED8");
    },
    Error,
    "encode-error: U+DED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDED9");
    },
    Error,
    "encode-error: U+DED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEDA");
    },
    Error,
    "encode-error: U+DEDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEDB");
    },
    Error,
    "encode-error: U+DEDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEDC");
    },
    Error,
    "encode-error: U+DEDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEDD");
    },
    Error,
    "encode-error: U+DEDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEDE");
    },
    Error,
    "encode-error: U+DEDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEDF");
    },
    Error,
    "encode-error: U+DEDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE0");
    },
    Error,
    "encode-error: U+DEE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE1");
    },
    Error,
    "encode-error: U+DEE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE2");
    },
    Error,
    "encode-error: U+DEE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE3");
    },
    Error,
    "encode-error: U+DEE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE4");
    },
    Error,
    "encode-error: U+DEE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE5");
    },
    Error,
    "encode-error: U+DEE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE6");
    },
    Error,
    "encode-error: U+DEE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE7");
    },
    Error,
    "encode-error: U+DEE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE8");
    },
    Error,
    "encode-error: U+DEE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEE9");
    },
    Error,
    "encode-error: U+DEE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEEA");
    },
    Error,
    "encode-error: U+DEEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEEB");
    },
    Error,
    "encode-error: U+DEEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEEC");
    },
    Error,
    "encode-error: U+DEEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEED");
    },
    Error,
    "encode-error: U+DEED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEEE");
    },
    Error,
    "encode-error: U+DEEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEEF");
    },
    Error,
    "encode-error: U+DEEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF0");
    },
    Error,
    "encode-error: U+DEF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF1");
    },
    Error,
    "encode-error: U+DEF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF2");
    },
    Error,
    "encode-error: U+DEF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF3");
    },
    Error,
    "encode-error: U+DEF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF4");
    },
    Error,
    "encode-error: U+DEF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF5");
    },
    Error,
    "encode-error: U+DEF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF6");
    },
    Error,
    "encode-error: U+DEF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF7");
    },
    Error,
    "encode-error: U+DEF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF8");
    },
    Error,
    "encode-error: U+DEF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEF9");
    },
    Error,
    "encode-error: U+DEF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEFA");
    },
    Error,
    "encode-error: U+DEFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEFB");
    },
    Error,
    "encode-error: U+DEFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEFC");
    },
    Error,
    "encode-error: U+DEFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEFD");
    },
    Error,
    "encode-error: U+DEFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEFE");
    },
    Error,
    "encode-error: U+DEFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDEFF");
    },
    Error,
    "encode-error: U+DEFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF00");
    },
    Error,
    "encode-error: U+DF00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF01");
    },
    Error,
    "encode-error: U+DF01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF02");
    },
    Error,
    "encode-error: U+DF02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF03");
    },
    Error,
    "encode-error: U+DF03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF04");
    },
    Error,
    "encode-error: U+DF04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF05");
    },
    Error,
    "encode-error: U+DF05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF06");
    },
    Error,
    "encode-error: U+DF06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF07");
    },
    Error,
    "encode-error: U+DF07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF08");
    },
    Error,
    "encode-error: U+DF08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF09");
    },
    Error,
    "encode-error: U+DF09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF0A");
    },
    Error,
    "encode-error: U+DF0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF0B");
    },
    Error,
    "encode-error: U+DF0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF0C");
    },
    Error,
    "encode-error: U+DF0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF0D");
    },
    Error,
    "encode-error: U+DF0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF0E");
    },
    Error,
    "encode-error: U+DF0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF0F");
    },
    Error,
    "encode-error: U+DF0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF10");
    },
    Error,
    "encode-error: U+DF10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF11");
    },
    Error,
    "encode-error: U+DF11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF12");
    },
    Error,
    "encode-error: U+DF12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF13");
    },
    Error,
    "encode-error: U+DF13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF14");
    },
    Error,
    "encode-error: U+DF14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF15");
    },
    Error,
    "encode-error: U+DF15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF16");
    },
    Error,
    "encode-error: U+DF16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF17");
    },
    Error,
    "encode-error: U+DF17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF18");
    },
    Error,
    "encode-error: U+DF18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF19");
    },
    Error,
    "encode-error: U+DF19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF1A");
    },
    Error,
    "encode-error: U+DF1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF1B");
    },
    Error,
    "encode-error: U+DF1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF1C");
    },
    Error,
    "encode-error: U+DF1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF1D");
    },
    Error,
    "encode-error: U+DF1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF1E");
    },
    Error,
    "encode-error: U+DF1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF1F");
    },
    Error,
    "encode-error: U+DF1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF20");
    },
    Error,
    "encode-error: U+DF20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF21");
    },
    Error,
    "encode-error: U+DF21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF22");
    },
    Error,
    "encode-error: U+DF22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF23");
    },
    Error,
    "encode-error: U+DF23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF24");
    },
    Error,
    "encode-error: U+DF24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF25");
    },
    Error,
    "encode-error: U+DF25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF26");
    },
    Error,
    "encode-error: U+DF26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF27");
    },
    Error,
    "encode-error: U+DF27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF28");
    },
    Error,
    "encode-error: U+DF28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF29");
    },
    Error,
    "encode-error: U+DF29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF2A");
    },
    Error,
    "encode-error: U+DF2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF2B");
    },
    Error,
    "encode-error: U+DF2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF2C");
    },
    Error,
    "encode-error: U+DF2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF2D");
    },
    Error,
    "encode-error: U+DF2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF2E");
    },
    Error,
    "encode-error: U+DF2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF2F");
    },
    Error,
    "encode-error: U+DF2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF30");
    },
    Error,
    "encode-error: U+DF30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF31");
    },
    Error,
    "encode-error: U+DF31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF32");
    },
    Error,
    "encode-error: U+DF32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF33");
    },
    Error,
    "encode-error: U+DF33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF34");
    },
    Error,
    "encode-error: U+DF34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF35");
    },
    Error,
    "encode-error: U+DF35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF36");
    },
    Error,
    "encode-error: U+DF36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF37");
    },
    Error,
    "encode-error: U+DF37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF38");
    },
    Error,
    "encode-error: U+DF38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF39");
    },
    Error,
    "encode-error: U+DF39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF3A");
    },
    Error,
    "encode-error: U+DF3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF3B");
    },
    Error,
    "encode-error: U+DF3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF3C");
    },
    Error,
    "encode-error: U+DF3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF3D");
    },
    Error,
    "encode-error: U+DF3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF3E");
    },
    Error,
    "encode-error: U+DF3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF3F");
    },
    Error,
    "encode-error: U+DF3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF40");
    },
    Error,
    "encode-error: U+DF40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF41");
    },
    Error,
    "encode-error: U+DF41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF42");
    },
    Error,
    "encode-error: U+DF42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF43");
    },
    Error,
    "encode-error: U+DF43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF44");
    },
    Error,
    "encode-error: U+DF44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF45");
    },
    Error,
    "encode-error: U+DF45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF46");
    },
    Error,
    "encode-error: U+DF46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF47");
    },
    Error,
    "encode-error: U+DF47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF48");
    },
    Error,
    "encode-error: U+DF48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF49");
    },
    Error,
    "encode-error: U+DF49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF4A");
    },
    Error,
    "encode-error: U+DF4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF4B");
    },
    Error,
    "encode-error: U+DF4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF4C");
    },
    Error,
    "encode-error: U+DF4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF4D");
    },
    Error,
    "encode-error: U+DF4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF4E");
    },
    Error,
    "encode-error: U+DF4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF4F");
    },
    Error,
    "encode-error: U+DF4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF50");
    },
    Error,
    "encode-error: U+DF50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF51");
    },
    Error,
    "encode-error: U+DF51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF52");
    },
    Error,
    "encode-error: U+DF52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF53");
    },
    Error,
    "encode-error: U+DF53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF54");
    },
    Error,
    "encode-error: U+DF54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF55");
    },
    Error,
    "encode-error: U+DF55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF56");
    },
    Error,
    "encode-error: U+DF56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF57");
    },
    Error,
    "encode-error: U+DF57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF58");
    },
    Error,
    "encode-error: U+DF58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF59");
    },
    Error,
    "encode-error: U+DF59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF5A");
    },
    Error,
    "encode-error: U+DF5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF5B");
    },
    Error,
    "encode-error: U+DF5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF5C");
    },
    Error,
    "encode-error: U+DF5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF5D");
    },
    Error,
    "encode-error: U+DF5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF5E");
    },
    Error,
    "encode-error: U+DF5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF5F");
    },
    Error,
    "encode-error: U+DF5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF60");
    },
    Error,
    "encode-error: U+DF60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF61");
    },
    Error,
    "encode-error: U+DF61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF62");
    },
    Error,
    "encode-error: U+DF62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF63");
    },
    Error,
    "encode-error: U+DF63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF64");
    },
    Error,
    "encode-error: U+DF64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF65");
    },
    Error,
    "encode-error: U+DF65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF66");
    },
    Error,
    "encode-error: U+DF66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF67");
    },
    Error,
    "encode-error: U+DF67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF68");
    },
    Error,
    "encode-error: U+DF68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF69");
    },
    Error,
    "encode-error: U+DF69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF6A");
    },
    Error,
    "encode-error: U+DF6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF6B");
    },
    Error,
    "encode-error: U+DF6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF6C");
    },
    Error,
    "encode-error: U+DF6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF6D");
    },
    Error,
    "encode-error: U+DF6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF6E");
    },
    Error,
    "encode-error: U+DF6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF6F");
    },
    Error,
    "encode-error: U+DF6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF70");
    },
    Error,
    "encode-error: U+DF70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF71");
    },
    Error,
    "encode-error: U+DF71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF72");
    },
    Error,
    "encode-error: U+DF72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF73");
    },
    Error,
    "encode-error: U+DF73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF74");
    },
    Error,
    "encode-error: U+DF74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF75");
    },
    Error,
    "encode-error: U+DF75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF76");
    },
    Error,
    "encode-error: U+DF76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF77");
    },
    Error,
    "encode-error: U+DF77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF78");
    },
    Error,
    "encode-error: U+DF78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF79");
    },
    Error,
    "encode-error: U+DF79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF7A");
    },
    Error,
    "encode-error: U+DF7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF7B");
    },
    Error,
    "encode-error: U+DF7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF7C");
    },
    Error,
    "encode-error: U+DF7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF7D");
    },
    Error,
    "encode-error: U+DF7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF7E");
    },
    Error,
    "encode-error: U+DF7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF7F");
    },
    Error,
    "encode-error: U+DF7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF80");
    },
    Error,
    "encode-error: U+DF80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF81");
    },
    Error,
    "encode-error: U+DF81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF82");
    },
    Error,
    "encode-error: U+DF82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF83");
    },
    Error,
    "encode-error: U+DF83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF84");
    },
    Error,
    "encode-error: U+DF84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF85");
    },
    Error,
    "encode-error: U+DF85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF86");
    },
    Error,
    "encode-error: U+DF86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF87");
    },
    Error,
    "encode-error: U+DF87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF88");
    },
    Error,
    "encode-error: U+DF88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF89");
    },
    Error,
    "encode-error: U+DF89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF8A");
    },
    Error,
    "encode-error: U+DF8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF8B");
    },
    Error,
    "encode-error: U+DF8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF8C");
    },
    Error,
    "encode-error: U+DF8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF8D");
    },
    Error,
    "encode-error: U+DF8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF8E");
    },
    Error,
    "encode-error: U+DF8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF8F");
    },
    Error,
    "encode-error: U+DF8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF90");
    },
    Error,
    "encode-error: U+DF90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF91");
    },
    Error,
    "encode-error: U+DF91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF92");
    },
    Error,
    "encode-error: U+DF92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF93");
    },
    Error,
    "encode-error: U+DF93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF94");
    },
    Error,
    "encode-error: U+DF94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF95");
    },
    Error,
    "encode-error: U+DF95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF96");
    },
    Error,
    "encode-error: U+DF96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF97");
    },
    Error,
    "encode-error: U+DF97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF98");
    },
    Error,
    "encode-error: U+DF98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF99");
    },
    Error,
    "encode-error: U+DF99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF9A");
    },
    Error,
    "encode-error: U+DF9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF9B");
    },
    Error,
    "encode-error: U+DF9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF9C");
    },
    Error,
    "encode-error: U+DF9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF9D");
    },
    Error,
    "encode-error: U+DF9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF9E");
    },
    Error,
    "encode-error: U+DF9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDF9F");
    },
    Error,
    "encode-error: U+DF9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA0");
    },
    Error,
    "encode-error: U+DFA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA1");
    },
    Error,
    "encode-error: U+DFA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA2");
    },
    Error,
    "encode-error: U+DFA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA3");
    },
    Error,
    "encode-error: U+DFA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA4");
    },
    Error,
    "encode-error: U+DFA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA5");
    },
    Error,
    "encode-error: U+DFA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA6");
    },
    Error,
    "encode-error: U+DFA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA7");
    },
    Error,
    "encode-error: U+DFA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA8");
    },
    Error,
    "encode-error: U+DFA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFA9");
    },
    Error,
    "encode-error: U+DFA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFAA");
    },
    Error,
    "encode-error: U+DFAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFAB");
    },
    Error,
    "encode-error: U+DFAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFAC");
    },
    Error,
    "encode-error: U+DFAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFAD");
    },
    Error,
    "encode-error: U+DFAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFAE");
    },
    Error,
    "encode-error: U+DFAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFAF");
    },
    Error,
    "encode-error: U+DFAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB0");
    },
    Error,
    "encode-error: U+DFB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB1");
    },
    Error,
    "encode-error: U+DFB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB2");
    },
    Error,
    "encode-error: U+DFB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB3");
    },
    Error,
    "encode-error: U+DFB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB4");
    },
    Error,
    "encode-error: U+DFB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB5");
    },
    Error,
    "encode-error: U+DFB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB6");
    },
    Error,
    "encode-error: U+DFB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB7");
    },
    Error,
    "encode-error: U+DFB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB8");
    },
    Error,
    "encode-error: U+DFB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFB9");
    },
    Error,
    "encode-error: U+DFB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFBA");
    },
    Error,
    "encode-error: U+DFBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFBB");
    },
    Error,
    "encode-error: U+DFBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFBC");
    },
    Error,
    "encode-error: U+DFBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFBD");
    },
    Error,
    "encode-error: U+DFBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFBE");
    },
    Error,
    "encode-error: U+DFBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFBF");
    },
    Error,
    "encode-error: U+DFBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC0");
    },
    Error,
    "encode-error: U+DFC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC1");
    },
    Error,
    "encode-error: U+DFC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC2");
    },
    Error,
    "encode-error: U+DFC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC3");
    },
    Error,
    "encode-error: U+DFC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC4");
    },
    Error,
    "encode-error: U+DFC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC5");
    },
    Error,
    "encode-error: U+DFC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC6");
    },
    Error,
    "encode-error: U+DFC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC7");
    },
    Error,
    "encode-error: U+DFC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC8");
    },
    Error,
    "encode-error: U+DFC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFC9");
    },
    Error,
    "encode-error: U+DFC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFCA");
    },
    Error,
    "encode-error: U+DFCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFCB");
    },
    Error,
    "encode-error: U+DFCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFCC");
    },
    Error,
    "encode-error: U+DFCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFCD");
    },
    Error,
    "encode-error: U+DFCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFCE");
    },
    Error,
    "encode-error: U+DFCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFCF");
    },
    Error,
    "encode-error: U+DFCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD0");
    },
    Error,
    "encode-error: U+DFD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD1");
    },
    Error,
    "encode-error: U+DFD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD2");
    },
    Error,
    "encode-error: U+DFD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD3");
    },
    Error,
    "encode-error: U+DFD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD4");
    },
    Error,
    "encode-error: U+DFD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD5");
    },
    Error,
    "encode-error: U+DFD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD6");
    },
    Error,
    "encode-error: U+DFD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD7");
    },
    Error,
    "encode-error: U+DFD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD8");
    },
    Error,
    "encode-error: U+DFD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFD9");
    },
    Error,
    "encode-error: U+DFD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFDA");
    },
    Error,
    "encode-error: U+DFDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFDB");
    },
    Error,
    "encode-error: U+DFDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFDC");
    },
    Error,
    "encode-error: U+DFDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFDD");
    },
    Error,
    "encode-error: U+DFDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFDE");
    },
    Error,
    "encode-error: U+DFDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFDF");
    },
    Error,
    "encode-error: U+DFDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE0");
    },
    Error,
    "encode-error: U+DFE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE1");
    },
    Error,
    "encode-error: U+DFE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE2");
    },
    Error,
    "encode-error: U+DFE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE3");
    },
    Error,
    "encode-error: U+DFE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE4");
    },
    Error,
    "encode-error: U+DFE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE5");
    },
    Error,
    "encode-error: U+DFE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE6");
    },
    Error,
    "encode-error: U+DFE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE7");
    },
    Error,
    "encode-error: U+DFE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE8");
    },
    Error,
    "encode-error: U+DFE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFE9");
    },
    Error,
    "encode-error: U+DFE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFEA");
    },
    Error,
    "encode-error: U+DFEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFEB");
    },
    Error,
    "encode-error: U+DFEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFEC");
    },
    Error,
    "encode-error: U+DFEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFED");
    },
    Error,
    "encode-error: U+DFED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFEE");
    },
    Error,
    "encode-error: U+DFEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFEF");
    },
    Error,
    "encode-error: U+DFEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF0");
    },
    Error,
    "encode-error: U+DFF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF1");
    },
    Error,
    "encode-error: U+DFF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF2");
    },
    Error,
    "encode-error: U+DFF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF3");
    },
    Error,
    "encode-error: U+DFF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF4");
    },
    Error,
    "encode-error: U+DFF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF5");
    },
    Error,
    "encode-error: U+DFF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF6");
    },
    Error,
    "encode-error: U+DFF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF7");
    },
    Error,
    "encode-error: U+DFF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF8");
    },
    Error,
    "encode-error: U+DFF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFF9");
    },
    Error,
    "encode-error: U+DFF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFFA");
    },
    Error,
    "encode-error: U+DFFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFFB");
    },
    Error,
    "encode-error: U+DFFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFFC");
    },
    Error,
    "encode-error: U+DFFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFFD");
    },
    Error,
    "encode-error: U+DFFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFFE");
    },
    Error,
    "encode-error: U+DFFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uDFFF");
    },
    Error,
    "encode-error: U+DFFF",
  );
});
