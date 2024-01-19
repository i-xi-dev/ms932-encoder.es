import { assertStrictEquals, assertThrows } from "./deps.ts";
import { Ms932 } from "../mod.ts";

Deno.test("Ms932.Encoder.prototype.encode(string) - U+F000-U+FFFF", () => {
  const ms932Encoder = new Ms932.Encoder({ fatal: true });

  let r = true;
  assertThrows(
    () => {
      ms932Encoder.encode("\uF000");
    },
    Error,
    "encode-error: U+F000",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF001");
    },
    Error,
    "encode-error: U+F001",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF002");
    },
    Error,
    "encode-error: U+F002",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF003");
    },
    Error,
    "encode-error: U+F003",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF004");
    },
    Error,
    "encode-error: U+F004",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF005");
    },
    Error,
    "encode-error: U+F005",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF006");
    },
    Error,
    "encode-error: U+F006",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF007");
    },
    Error,
    "encode-error: U+F007",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF008");
    },
    Error,
    "encode-error: U+F008",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF009");
    },
    Error,
    "encode-error: U+F009",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF00A");
    },
    Error,
    "encode-error: U+F00A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF00B");
    },
    Error,
    "encode-error: U+F00B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF00C");
    },
    Error,
    "encode-error: U+F00C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF00D");
    },
    Error,
    "encode-error: U+F00D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF00E");
    },
    Error,
    "encode-error: U+F00E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF00F");
    },
    Error,
    "encode-error: U+F00F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF010");
    },
    Error,
    "encode-error: U+F010",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF011");
    },
    Error,
    "encode-error: U+F011",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF012");
    },
    Error,
    "encode-error: U+F012",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF013");
    },
    Error,
    "encode-error: U+F013",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF014");
    },
    Error,
    "encode-error: U+F014",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF015");
    },
    Error,
    "encode-error: U+F015",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF016");
    },
    Error,
    "encode-error: U+F016",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF017");
    },
    Error,
    "encode-error: U+F017",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF018");
    },
    Error,
    "encode-error: U+F018",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF019");
    },
    Error,
    "encode-error: U+F019",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF01A");
    },
    Error,
    "encode-error: U+F01A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF01B");
    },
    Error,
    "encode-error: U+F01B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF01C");
    },
    Error,
    "encode-error: U+F01C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF01D");
    },
    Error,
    "encode-error: U+F01D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF01E");
    },
    Error,
    "encode-error: U+F01E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF01F");
    },
    Error,
    "encode-error: U+F01F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF020");
    },
    Error,
    "encode-error: U+F020",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF021");
    },
    Error,
    "encode-error: U+F021",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF022");
    },
    Error,
    "encode-error: U+F022",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF023");
    },
    Error,
    "encode-error: U+F023",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF024");
    },
    Error,
    "encode-error: U+F024",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF025");
    },
    Error,
    "encode-error: U+F025",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF026");
    },
    Error,
    "encode-error: U+F026",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF027");
    },
    Error,
    "encode-error: U+F027",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF028");
    },
    Error,
    "encode-error: U+F028",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF029");
    },
    Error,
    "encode-error: U+F029",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF02A");
    },
    Error,
    "encode-error: U+F02A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF02B");
    },
    Error,
    "encode-error: U+F02B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF02C");
    },
    Error,
    "encode-error: U+F02C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF02D");
    },
    Error,
    "encode-error: U+F02D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF02E");
    },
    Error,
    "encode-error: U+F02E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF02F");
    },
    Error,
    "encode-error: U+F02F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF030");
    },
    Error,
    "encode-error: U+F030",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF031");
    },
    Error,
    "encode-error: U+F031",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF032");
    },
    Error,
    "encode-error: U+F032",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF033");
    },
    Error,
    "encode-error: U+F033",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF034");
    },
    Error,
    "encode-error: U+F034",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF035");
    },
    Error,
    "encode-error: U+F035",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF036");
    },
    Error,
    "encode-error: U+F036",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF037");
    },
    Error,
    "encode-error: U+F037",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF038");
    },
    Error,
    "encode-error: U+F038",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF039");
    },
    Error,
    "encode-error: U+F039",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF03A");
    },
    Error,
    "encode-error: U+F03A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF03B");
    },
    Error,
    "encode-error: U+F03B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF03C");
    },
    Error,
    "encode-error: U+F03C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF03D");
    },
    Error,
    "encode-error: U+F03D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF03E");
    },
    Error,
    "encode-error: U+F03E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF03F");
    },
    Error,
    "encode-error: U+F03F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF040");
    },
    Error,
    "encode-error: U+F040",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF041");
    },
    Error,
    "encode-error: U+F041",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF042");
    },
    Error,
    "encode-error: U+F042",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF043");
    },
    Error,
    "encode-error: U+F043",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF044");
    },
    Error,
    "encode-error: U+F044",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF045");
    },
    Error,
    "encode-error: U+F045",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF046");
    },
    Error,
    "encode-error: U+F046",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF047");
    },
    Error,
    "encode-error: U+F047",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF048");
    },
    Error,
    "encode-error: U+F048",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF049");
    },
    Error,
    "encode-error: U+F049",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF04A");
    },
    Error,
    "encode-error: U+F04A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF04B");
    },
    Error,
    "encode-error: U+F04B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF04C");
    },
    Error,
    "encode-error: U+F04C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF04D");
    },
    Error,
    "encode-error: U+F04D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF04E");
    },
    Error,
    "encode-error: U+F04E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF04F");
    },
    Error,
    "encode-error: U+F04F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF050");
    },
    Error,
    "encode-error: U+F050",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF051");
    },
    Error,
    "encode-error: U+F051",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF052");
    },
    Error,
    "encode-error: U+F052",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF053");
    },
    Error,
    "encode-error: U+F053",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF054");
    },
    Error,
    "encode-error: U+F054",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF055");
    },
    Error,
    "encode-error: U+F055",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF056");
    },
    Error,
    "encode-error: U+F056",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF057");
    },
    Error,
    "encode-error: U+F057",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF058");
    },
    Error,
    "encode-error: U+F058",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF059");
    },
    Error,
    "encode-error: U+F059",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF05A");
    },
    Error,
    "encode-error: U+F05A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF05B");
    },
    Error,
    "encode-error: U+F05B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF05C");
    },
    Error,
    "encode-error: U+F05C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF05D");
    },
    Error,
    "encode-error: U+F05D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF05E");
    },
    Error,
    "encode-error: U+F05E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF05F");
    },
    Error,
    "encode-error: U+F05F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF060");
    },
    Error,
    "encode-error: U+F060",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF061");
    },
    Error,
    "encode-error: U+F061",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF062");
    },
    Error,
    "encode-error: U+F062",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF063");
    },
    Error,
    "encode-error: U+F063",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF064");
    },
    Error,
    "encode-error: U+F064",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF065");
    },
    Error,
    "encode-error: U+F065",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF066");
    },
    Error,
    "encode-error: U+F066",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF067");
    },
    Error,
    "encode-error: U+F067",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF068");
    },
    Error,
    "encode-error: U+F068",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF069");
    },
    Error,
    "encode-error: U+F069",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF06A");
    },
    Error,
    "encode-error: U+F06A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF06B");
    },
    Error,
    "encode-error: U+F06B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF06C");
    },
    Error,
    "encode-error: U+F06C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF06D");
    },
    Error,
    "encode-error: U+F06D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF06E");
    },
    Error,
    "encode-error: U+F06E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF06F");
    },
    Error,
    "encode-error: U+F06F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF070");
    },
    Error,
    "encode-error: U+F070",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF071");
    },
    Error,
    "encode-error: U+F071",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF072");
    },
    Error,
    "encode-error: U+F072",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF073");
    },
    Error,
    "encode-error: U+F073",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF074");
    },
    Error,
    "encode-error: U+F074",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF075");
    },
    Error,
    "encode-error: U+F075",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF076");
    },
    Error,
    "encode-error: U+F076",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF077");
    },
    Error,
    "encode-error: U+F077",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF078");
    },
    Error,
    "encode-error: U+F078",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF079");
    },
    Error,
    "encode-error: U+F079",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF07A");
    },
    Error,
    "encode-error: U+F07A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF07B");
    },
    Error,
    "encode-error: U+F07B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF07C");
    },
    Error,
    "encode-error: U+F07C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF07D");
    },
    Error,
    "encode-error: U+F07D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF07E");
    },
    Error,
    "encode-error: U+F07E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF07F");
    },
    Error,
    "encode-error: U+F07F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF080");
    },
    Error,
    "encode-error: U+F080",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF081");
    },
    Error,
    "encode-error: U+F081",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF082");
    },
    Error,
    "encode-error: U+F082",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF083");
    },
    Error,
    "encode-error: U+F083",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF084");
    },
    Error,
    "encode-error: U+F084",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF085");
    },
    Error,
    "encode-error: U+F085",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF086");
    },
    Error,
    "encode-error: U+F086",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF087");
    },
    Error,
    "encode-error: U+F087",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF088");
    },
    Error,
    "encode-error: U+F088",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF089");
    },
    Error,
    "encode-error: U+F089",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF08A");
    },
    Error,
    "encode-error: U+F08A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF08B");
    },
    Error,
    "encode-error: U+F08B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF08C");
    },
    Error,
    "encode-error: U+F08C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF08D");
    },
    Error,
    "encode-error: U+F08D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF08E");
    },
    Error,
    "encode-error: U+F08E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF08F");
    },
    Error,
    "encode-error: U+F08F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF090");
    },
    Error,
    "encode-error: U+F090",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF091");
    },
    Error,
    "encode-error: U+F091",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF092");
    },
    Error,
    "encode-error: U+F092",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF093");
    },
    Error,
    "encode-error: U+F093",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF094");
    },
    Error,
    "encode-error: U+F094",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF095");
    },
    Error,
    "encode-error: U+F095",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF096");
    },
    Error,
    "encode-error: U+F096",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF097");
    },
    Error,
    "encode-error: U+F097",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF098");
    },
    Error,
    "encode-error: U+F098",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF099");
    },
    Error,
    "encode-error: U+F099",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF09A");
    },
    Error,
    "encode-error: U+F09A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF09B");
    },
    Error,
    "encode-error: U+F09B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF09C");
    },
    Error,
    "encode-error: U+F09C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF09D");
    },
    Error,
    "encode-error: U+F09D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF09E");
    },
    Error,
    "encode-error: U+F09E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF09F");
    },
    Error,
    "encode-error: U+F09F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A0");
    },
    Error,
    "encode-error: U+F0A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A1");
    },
    Error,
    "encode-error: U+F0A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A2");
    },
    Error,
    "encode-error: U+F0A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A3");
    },
    Error,
    "encode-error: U+F0A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A4");
    },
    Error,
    "encode-error: U+F0A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A5");
    },
    Error,
    "encode-error: U+F0A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A6");
    },
    Error,
    "encode-error: U+F0A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A7");
    },
    Error,
    "encode-error: U+F0A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A8");
    },
    Error,
    "encode-error: U+F0A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0A9");
    },
    Error,
    "encode-error: U+F0A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0AA");
    },
    Error,
    "encode-error: U+F0AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0AB");
    },
    Error,
    "encode-error: U+F0AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0AC");
    },
    Error,
    "encode-error: U+F0AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0AD");
    },
    Error,
    "encode-error: U+F0AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0AE");
    },
    Error,
    "encode-error: U+F0AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0AF");
    },
    Error,
    "encode-error: U+F0AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B0");
    },
    Error,
    "encode-error: U+F0B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B1");
    },
    Error,
    "encode-error: U+F0B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B2");
    },
    Error,
    "encode-error: U+F0B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B3");
    },
    Error,
    "encode-error: U+F0B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B4");
    },
    Error,
    "encode-error: U+F0B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B5");
    },
    Error,
    "encode-error: U+F0B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B6");
    },
    Error,
    "encode-error: U+F0B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B7");
    },
    Error,
    "encode-error: U+F0B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B8");
    },
    Error,
    "encode-error: U+F0B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0B9");
    },
    Error,
    "encode-error: U+F0B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0BA");
    },
    Error,
    "encode-error: U+F0BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0BB");
    },
    Error,
    "encode-error: U+F0BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0BC");
    },
    Error,
    "encode-error: U+F0BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0BD");
    },
    Error,
    "encode-error: U+F0BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0BE");
    },
    Error,
    "encode-error: U+F0BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0BF");
    },
    Error,
    "encode-error: U+F0BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C0");
    },
    Error,
    "encode-error: U+F0C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C1");
    },
    Error,
    "encode-error: U+F0C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C2");
    },
    Error,
    "encode-error: U+F0C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C3");
    },
    Error,
    "encode-error: U+F0C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C4");
    },
    Error,
    "encode-error: U+F0C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C5");
    },
    Error,
    "encode-error: U+F0C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C6");
    },
    Error,
    "encode-error: U+F0C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C7");
    },
    Error,
    "encode-error: U+F0C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C8");
    },
    Error,
    "encode-error: U+F0C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0C9");
    },
    Error,
    "encode-error: U+F0C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0CA");
    },
    Error,
    "encode-error: U+F0CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0CB");
    },
    Error,
    "encode-error: U+F0CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0CC");
    },
    Error,
    "encode-error: U+F0CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0CD");
    },
    Error,
    "encode-error: U+F0CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0CE");
    },
    Error,
    "encode-error: U+F0CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0CF");
    },
    Error,
    "encode-error: U+F0CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D0");
    },
    Error,
    "encode-error: U+F0D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D1");
    },
    Error,
    "encode-error: U+F0D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D2");
    },
    Error,
    "encode-error: U+F0D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D3");
    },
    Error,
    "encode-error: U+F0D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D4");
    },
    Error,
    "encode-error: U+F0D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D5");
    },
    Error,
    "encode-error: U+F0D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D6");
    },
    Error,
    "encode-error: U+F0D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D7");
    },
    Error,
    "encode-error: U+F0D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D8");
    },
    Error,
    "encode-error: U+F0D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0D9");
    },
    Error,
    "encode-error: U+F0D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0DA");
    },
    Error,
    "encode-error: U+F0DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0DB");
    },
    Error,
    "encode-error: U+F0DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0DC");
    },
    Error,
    "encode-error: U+F0DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0DD");
    },
    Error,
    "encode-error: U+F0DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0DE");
    },
    Error,
    "encode-error: U+F0DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0DF");
    },
    Error,
    "encode-error: U+F0DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E0");
    },
    Error,
    "encode-error: U+F0E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E1");
    },
    Error,
    "encode-error: U+F0E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E2");
    },
    Error,
    "encode-error: U+F0E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E3");
    },
    Error,
    "encode-error: U+F0E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E4");
    },
    Error,
    "encode-error: U+F0E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E5");
    },
    Error,
    "encode-error: U+F0E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E6");
    },
    Error,
    "encode-error: U+F0E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E7");
    },
    Error,
    "encode-error: U+F0E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E8");
    },
    Error,
    "encode-error: U+F0E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0E9");
    },
    Error,
    "encode-error: U+F0E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0EA");
    },
    Error,
    "encode-error: U+F0EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0EB");
    },
    Error,
    "encode-error: U+F0EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0EC");
    },
    Error,
    "encode-error: U+F0EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0ED");
    },
    Error,
    "encode-error: U+F0ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0EE");
    },
    Error,
    "encode-error: U+F0EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0EF");
    },
    Error,
    "encode-error: U+F0EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F0");
    },
    Error,
    "encode-error: U+F0F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F1");
    },
    Error,
    "encode-error: U+F0F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F2");
    },
    Error,
    "encode-error: U+F0F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F3");
    },
    Error,
    "encode-error: U+F0F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F4");
    },
    Error,
    "encode-error: U+F0F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F5");
    },
    Error,
    "encode-error: U+F0F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F6");
    },
    Error,
    "encode-error: U+F0F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F7");
    },
    Error,
    "encode-error: U+F0F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F8");
    },
    Error,
    "encode-error: U+F0F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0F9");
    },
    Error,
    "encode-error: U+F0F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0FA");
    },
    Error,
    "encode-error: U+F0FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0FB");
    },
    Error,
    "encode-error: U+F0FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0FC");
    },
    Error,
    "encode-error: U+F0FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0FD");
    },
    Error,
    "encode-error: U+F0FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0FE");
    },
    Error,
    "encode-error: U+F0FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF0FF");
    },
    Error,
    "encode-error: U+F0FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF100");
    },
    Error,
    "encode-error: U+F100",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF101");
    },
    Error,
    "encode-error: U+F101",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF102");
    },
    Error,
    "encode-error: U+F102",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF103");
    },
    Error,
    "encode-error: U+F103",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF104");
    },
    Error,
    "encode-error: U+F104",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF105");
    },
    Error,
    "encode-error: U+F105",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF106");
    },
    Error,
    "encode-error: U+F106",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF107");
    },
    Error,
    "encode-error: U+F107",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF108");
    },
    Error,
    "encode-error: U+F108",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF109");
    },
    Error,
    "encode-error: U+F109",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF10A");
    },
    Error,
    "encode-error: U+F10A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF10B");
    },
    Error,
    "encode-error: U+F10B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF10C");
    },
    Error,
    "encode-error: U+F10C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF10D");
    },
    Error,
    "encode-error: U+F10D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF10E");
    },
    Error,
    "encode-error: U+F10E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF10F");
    },
    Error,
    "encode-error: U+F10F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF110");
    },
    Error,
    "encode-error: U+F110",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF111");
    },
    Error,
    "encode-error: U+F111",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF112");
    },
    Error,
    "encode-error: U+F112",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF113");
    },
    Error,
    "encode-error: U+F113",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF114");
    },
    Error,
    "encode-error: U+F114",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF115");
    },
    Error,
    "encode-error: U+F115",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF116");
    },
    Error,
    "encode-error: U+F116",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF117");
    },
    Error,
    "encode-error: U+F117",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF118");
    },
    Error,
    "encode-error: U+F118",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF119");
    },
    Error,
    "encode-error: U+F119",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF11A");
    },
    Error,
    "encode-error: U+F11A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF11B");
    },
    Error,
    "encode-error: U+F11B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF11C");
    },
    Error,
    "encode-error: U+F11C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF11D");
    },
    Error,
    "encode-error: U+F11D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF11E");
    },
    Error,
    "encode-error: U+F11E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF11F");
    },
    Error,
    "encode-error: U+F11F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF120");
    },
    Error,
    "encode-error: U+F120",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF121");
    },
    Error,
    "encode-error: U+F121",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF122");
    },
    Error,
    "encode-error: U+F122",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF123");
    },
    Error,
    "encode-error: U+F123",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF124");
    },
    Error,
    "encode-error: U+F124",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF125");
    },
    Error,
    "encode-error: U+F125",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF126");
    },
    Error,
    "encode-error: U+F126",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF127");
    },
    Error,
    "encode-error: U+F127",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF128");
    },
    Error,
    "encode-error: U+F128",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF129");
    },
    Error,
    "encode-error: U+F129",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF12A");
    },
    Error,
    "encode-error: U+F12A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF12B");
    },
    Error,
    "encode-error: U+F12B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF12C");
    },
    Error,
    "encode-error: U+F12C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF12D");
    },
    Error,
    "encode-error: U+F12D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF12E");
    },
    Error,
    "encode-error: U+F12E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF12F");
    },
    Error,
    "encode-error: U+F12F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF130");
    },
    Error,
    "encode-error: U+F130",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF131");
    },
    Error,
    "encode-error: U+F131",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF132");
    },
    Error,
    "encode-error: U+F132",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF133");
    },
    Error,
    "encode-error: U+F133",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF134");
    },
    Error,
    "encode-error: U+F134",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF135");
    },
    Error,
    "encode-error: U+F135",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF136");
    },
    Error,
    "encode-error: U+F136",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF137");
    },
    Error,
    "encode-error: U+F137",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF138");
    },
    Error,
    "encode-error: U+F138",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF139");
    },
    Error,
    "encode-error: U+F139",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF13A");
    },
    Error,
    "encode-error: U+F13A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF13B");
    },
    Error,
    "encode-error: U+F13B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF13C");
    },
    Error,
    "encode-error: U+F13C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF13D");
    },
    Error,
    "encode-error: U+F13D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF13E");
    },
    Error,
    "encode-error: U+F13E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF13F");
    },
    Error,
    "encode-error: U+F13F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF140");
    },
    Error,
    "encode-error: U+F140",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF141");
    },
    Error,
    "encode-error: U+F141",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF142");
    },
    Error,
    "encode-error: U+F142",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF143");
    },
    Error,
    "encode-error: U+F143",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF144");
    },
    Error,
    "encode-error: U+F144",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF145");
    },
    Error,
    "encode-error: U+F145",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF146");
    },
    Error,
    "encode-error: U+F146",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF147");
    },
    Error,
    "encode-error: U+F147",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF148");
    },
    Error,
    "encode-error: U+F148",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF149");
    },
    Error,
    "encode-error: U+F149",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF14A");
    },
    Error,
    "encode-error: U+F14A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF14B");
    },
    Error,
    "encode-error: U+F14B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF14C");
    },
    Error,
    "encode-error: U+F14C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF14D");
    },
    Error,
    "encode-error: U+F14D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF14E");
    },
    Error,
    "encode-error: U+F14E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF14F");
    },
    Error,
    "encode-error: U+F14F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF150");
    },
    Error,
    "encode-error: U+F150",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF151");
    },
    Error,
    "encode-error: U+F151",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF152");
    },
    Error,
    "encode-error: U+F152",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF153");
    },
    Error,
    "encode-error: U+F153",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF154");
    },
    Error,
    "encode-error: U+F154",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF155");
    },
    Error,
    "encode-error: U+F155",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF156");
    },
    Error,
    "encode-error: U+F156",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF157");
    },
    Error,
    "encode-error: U+F157",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF158");
    },
    Error,
    "encode-error: U+F158",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF159");
    },
    Error,
    "encode-error: U+F159",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF15A");
    },
    Error,
    "encode-error: U+F15A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF15B");
    },
    Error,
    "encode-error: U+F15B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF15C");
    },
    Error,
    "encode-error: U+F15C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF15D");
    },
    Error,
    "encode-error: U+F15D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF15E");
    },
    Error,
    "encode-error: U+F15E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF15F");
    },
    Error,
    "encode-error: U+F15F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF160");
    },
    Error,
    "encode-error: U+F160",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF161");
    },
    Error,
    "encode-error: U+F161",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF162");
    },
    Error,
    "encode-error: U+F162",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF163");
    },
    Error,
    "encode-error: U+F163",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF164");
    },
    Error,
    "encode-error: U+F164",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF165");
    },
    Error,
    "encode-error: U+F165",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF166");
    },
    Error,
    "encode-error: U+F166",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF167");
    },
    Error,
    "encode-error: U+F167",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF168");
    },
    Error,
    "encode-error: U+F168",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF169");
    },
    Error,
    "encode-error: U+F169",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF16A");
    },
    Error,
    "encode-error: U+F16A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF16B");
    },
    Error,
    "encode-error: U+F16B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF16C");
    },
    Error,
    "encode-error: U+F16C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF16D");
    },
    Error,
    "encode-error: U+F16D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF16E");
    },
    Error,
    "encode-error: U+F16E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF16F");
    },
    Error,
    "encode-error: U+F16F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF170");
    },
    Error,
    "encode-error: U+F170",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF171");
    },
    Error,
    "encode-error: U+F171",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF172");
    },
    Error,
    "encode-error: U+F172",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF173");
    },
    Error,
    "encode-error: U+F173",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF174");
    },
    Error,
    "encode-error: U+F174",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF175");
    },
    Error,
    "encode-error: U+F175",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF176");
    },
    Error,
    "encode-error: U+F176",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF177");
    },
    Error,
    "encode-error: U+F177",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF178");
    },
    Error,
    "encode-error: U+F178",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF179");
    },
    Error,
    "encode-error: U+F179",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF17A");
    },
    Error,
    "encode-error: U+F17A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF17B");
    },
    Error,
    "encode-error: U+F17B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF17C");
    },
    Error,
    "encode-error: U+F17C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF17D");
    },
    Error,
    "encode-error: U+F17D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF17E");
    },
    Error,
    "encode-error: U+F17E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF17F");
    },
    Error,
    "encode-error: U+F17F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF180");
    },
    Error,
    "encode-error: U+F180",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF181");
    },
    Error,
    "encode-error: U+F181",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF182");
    },
    Error,
    "encode-error: U+F182",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF183");
    },
    Error,
    "encode-error: U+F183",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF184");
    },
    Error,
    "encode-error: U+F184",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF185");
    },
    Error,
    "encode-error: U+F185",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF186");
    },
    Error,
    "encode-error: U+F186",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF187");
    },
    Error,
    "encode-error: U+F187",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF188");
    },
    Error,
    "encode-error: U+F188",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF189");
    },
    Error,
    "encode-error: U+F189",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF18A");
    },
    Error,
    "encode-error: U+F18A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF18B");
    },
    Error,
    "encode-error: U+F18B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF18C");
    },
    Error,
    "encode-error: U+F18C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF18D");
    },
    Error,
    "encode-error: U+F18D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF18E");
    },
    Error,
    "encode-error: U+F18E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF18F");
    },
    Error,
    "encode-error: U+F18F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF190");
    },
    Error,
    "encode-error: U+F190",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF191");
    },
    Error,
    "encode-error: U+F191",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF192");
    },
    Error,
    "encode-error: U+F192",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF193");
    },
    Error,
    "encode-error: U+F193",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF194");
    },
    Error,
    "encode-error: U+F194",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF195");
    },
    Error,
    "encode-error: U+F195",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF196");
    },
    Error,
    "encode-error: U+F196",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF197");
    },
    Error,
    "encode-error: U+F197",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF198");
    },
    Error,
    "encode-error: U+F198",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF199");
    },
    Error,
    "encode-error: U+F199",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF19A");
    },
    Error,
    "encode-error: U+F19A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF19B");
    },
    Error,
    "encode-error: U+F19B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF19C");
    },
    Error,
    "encode-error: U+F19C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF19D");
    },
    Error,
    "encode-error: U+F19D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF19E");
    },
    Error,
    "encode-error: U+F19E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF19F");
    },
    Error,
    "encode-error: U+F19F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A0");
    },
    Error,
    "encode-error: U+F1A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A1");
    },
    Error,
    "encode-error: U+F1A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A2");
    },
    Error,
    "encode-error: U+F1A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A3");
    },
    Error,
    "encode-error: U+F1A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A4");
    },
    Error,
    "encode-error: U+F1A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A5");
    },
    Error,
    "encode-error: U+F1A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A6");
    },
    Error,
    "encode-error: U+F1A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A7");
    },
    Error,
    "encode-error: U+F1A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A8");
    },
    Error,
    "encode-error: U+F1A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1A9");
    },
    Error,
    "encode-error: U+F1A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1AA");
    },
    Error,
    "encode-error: U+F1AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1AB");
    },
    Error,
    "encode-error: U+F1AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1AC");
    },
    Error,
    "encode-error: U+F1AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1AD");
    },
    Error,
    "encode-error: U+F1AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1AE");
    },
    Error,
    "encode-error: U+F1AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1AF");
    },
    Error,
    "encode-error: U+F1AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B0");
    },
    Error,
    "encode-error: U+F1B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B1");
    },
    Error,
    "encode-error: U+F1B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B2");
    },
    Error,
    "encode-error: U+F1B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B3");
    },
    Error,
    "encode-error: U+F1B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B4");
    },
    Error,
    "encode-error: U+F1B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B5");
    },
    Error,
    "encode-error: U+F1B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B6");
    },
    Error,
    "encode-error: U+F1B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B7");
    },
    Error,
    "encode-error: U+F1B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B8");
    },
    Error,
    "encode-error: U+F1B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1B9");
    },
    Error,
    "encode-error: U+F1B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1BA");
    },
    Error,
    "encode-error: U+F1BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1BB");
    },
    Error,
    "encode-error: U+F1BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1BC");
    },
    Error,
    "encode-error: U+F1BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1BD");
    },
    Error,
    "encode-error: U+F1BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1BE");
    },
    Error,
    "encode-error: U+F1BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1BF");
    },
    Error,
    "encode-error: U+F1BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C0");
    },
    Error,
    "encode-error: U+F1C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C1");
    },
    Error,
    "encode-error: U+F1C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C2");
    },
    Error,
    "encode-error: U+F1C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C3");
    },
    Error,
    "encode-error: U+F1C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C4");
    },
    Error,
    "encode-error: U+F1C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C5");
    },
    Error,
    "encode-error: U+F1C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C6");
    },
    Error,
    "encode-error: U+F1C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C7");
    },
    Error,
    "encode-error: U+F1C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C8");
    },
    Error,
    "encode-error: U+F1C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1C9");
    },
    Error,
    "encode-error: U+F1C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1CA");
    },
    Error,
    "encode-error: U+F1CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1CB");
    },
    Error,
    "encode-error: U+F1CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1CC");
    },
    Error,
    "encode-error: U+F1CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1CD");
    },
    Error,
    "encode-error: U+F1CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1CE");
    },
    Error,
    "encode-error: U+F1CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1CF");
    },
    Error,
    "encode-error: U+F1CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D0");
    },
    Error,
    "encode-error: U+F1D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D1");
    },
    Error,
    "encode-error: U+F1D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D2");
    },
    Error,
    "encode-error: U+F1D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D3");
    },
    Error,
    "encode-error: U+F1D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D4");
    },
    Error,
    "encode-error: U+F1D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D5");
    },
    Error,
    "encode-error: U+F1D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D6");
    },
    Error,
    "encode-error: U+F1D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D7");
    },
    Error,
    "encode-error: U+F1D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D8");
    },
    Error,
    "encode-error: U+F1D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1D9");
    },
    Error,
    "encode-error: U+F1D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1DA");
    },
    Error,
    "encode-error: U+F1DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1DB");
    },
    Error,
    "encode-error: U+F1DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1DC");
    },
    Error,
    "encode-error: U+F1DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1DD");
    },
    Error,
    "encode-error: U+F1DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1DE");
    },
    Error,
    "encode-error: U+F1DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1DF");
    },
    Error,
    "encode-error: U+F1DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E0");
    },
    Error,
    "encode-error: U+F1E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E1");
    },
    Error,
    "encode-error: U+F1E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E2");
    },
    Error,
    "encode-error: U+F1E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E3");
    },
    Error,
    "encode-error: U+F1E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E4");
    },
    Error,
    "encode-error: U+F1E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E5");
    },
    Error,
    "encode-error: U+F1E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E6");
    },
    Error,
    "encode-error: U+F1E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E7");
    },
    Error,
    "encode-error: U+F1E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E8");
    },
    Error,
    "encode-error: U+F1E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1E9");
    },
    Error,
    "encode-error: U+F1E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1EA");
    },
    Error,
    "encode-error: U+F1EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1EB");
    },
    Error,
    "encode-error: U+F1EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1EC");
    },
    Error,
    "encode-error: U+F1EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1ED");
    },
    Error,
    "encode-error: U+F1ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1EE");
    },
    Error,
    "encode-error: U+F1EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1EF");
    },
    Error,
    "encode-error: U+F1EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F0");
    },
    Error,
    "encode-error: U+F1F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F1");
    },
    Error,
    "encode-error: U+F1F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F2");
    },
    Error,
    "encode-error: U+F1F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F3");
    },
    Error,
    "encode-error: U+F1F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F4");
    },
    Error,
    "encode-error: U+F1F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F5");
    },
    Error,
    "encode-error: U+F1F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F6");
    },
    Error,
    "encode-error: U+F1F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F7");
    },
    Error,
    "encode-error: U+F1F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F8");
    },
    Error,
    "encode-error: U+F1F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1F9");
    },
    Error,
    "encode-error: U+F1F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1FA");
    },
    Error,
    "encode-error: U+F1FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1FB");
    },
    Error,
    "encode-error: U+F1FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1FC");
    },
    Error,
    "encode-error: U+F1FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1FD");
    },
    Error,
    "encode-error: U+F1FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1FE");
    },
    Error,
    "encode-error: U+F1FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF1FF");
    },
    Error,
    "encode-error: U+F1FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF200");
    },
    Error,
    "encode-error: U+F200",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF201");
    },
    Error,
    "encode-error: U+F201",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF202");
    },
    Error,
    "encode-error: U+F202",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF203");
    },
    Error,
    "encode-error: U+F203",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF204");
    },
    Error,
    "encode-error: U+F204",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF205");
    },
    Error,
    "encode-error: U+F205",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF206");
    },
    Error,
    "encode-error: U+F206",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF207");
    },
    Error,
    "encode-error: U+F207",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF208");
    },
    Error,
    "encode-error: U+F208",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF209");
    },
    Error,
    "encode-error: U+F209",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF20A");
    },
    Error,
    "encode-error: U+F20A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF20B");
    },
    Error,
    "encode-error: U+F20B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF20C");
    },
    Error,
    "encode-error: U+F20C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF20D");
    },
    Error,
    "encode-error: U+F20D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF20E");
    },
    Error,
    "encode-error: U+F20E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF20F");
    },
    Error,
    "encode-error: U+F20F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF210");
    },
    Error,
    "encode-error: U+F210",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF211");
    },
    Error,
    "encode-error: U+F211",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF212");
    },
    Error,
    "encode-error: U+F212",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF213");
    },
    Error,
    "encode-error: U+F213",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF214");
    },
    Error,
    "encode-error: U+F214",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF215");
    },
    Error,
    "encode-error: U+F215",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF216");
    },
    Error,
    "encode-error: U+F216",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF217");
    },
    Error,
    "encode-error: U+F217",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF218");
    },
    Error,
    "encode-error: U+F218",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF219");
    },
    Error,
    "encode-error: U+F219",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF21A");
    },
    Error,
    "encode-error: U+F21A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF21B");
    },
    Error,
    "encode-error: U+F21B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF21C");
    },
    Error,
    "encode-error: U+F21C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF21D");
    },
    Error,
    "encode-error: U+F21D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF21E");
    },
    Error,
    "encode-error: U+F21E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF21F");
    },
    Error,
    "encode-error: U+F21F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF220");
    },
    Error,
    "encode-error: U+F220",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF221");
    },
    Error,
    "encode-error: U+F221",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF222");
    },
    Error,
    "encode-error: U+F222",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF223");
    },
    Error,
    "encode-error: U+F223",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF224");
    },
    Error,
    "encode-error: U+F224",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF225");
    },
    Error,
    "encode-error: U+F225",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF226");
    },
    Error,
    "encode-error: U+F226",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF227");
    },
    Error,
    "encode-error: U+F227",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF228");
    },
    Error,
    "encode-error: U+F228",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF229");
    },
    Error,
    "encode-error: U+F229",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF22A");
    },
    Error,
    "encode-error: U+F22A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF22B");
    },
    Error,
    "encode-error: U+F22B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF22C");
    },
    Error,
    "encode-error: U+F22C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF22D");
    },
    Error,
    "encode-error: U+F22D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF22E");
    },
    Error,
    "encode-error: U+F22E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF22F");
    },
    Error,
    "encode-error: U+F22F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF230");
    },
    Error,
    "encode-error: U+F230",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF231");
    },
    Error,
    "encode-error: U+F231",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF232");
    },
    Error,
    "encode-error: U+F232",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF233");
    },
    Error,
    "encode-error: U+F233",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF234");
    },
    Error,
    "encode-error: U+F234",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF235");
    },
    Error,
    "encode-error: U+F235",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF236");
    },
    Error,
    "encode-error: U+F236",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF237");
    },
    Error,
    "encode-error: U+F237",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF238");
    },
    Error,
    "encode-error: U+F238",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF239");
    },
    Error,
    "encode-error: U+F239",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF23A");
    },
    Error,
    "encode-error: U+F23A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF23B");
    },
    Error,
    "encode-error: U+F23B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF23C");
    },
    Error,
    "encode-error: U+F23C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF23D");
    },
    Error,
    "encode-error: U+F23D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF23E");
    },
    Error,
    "encode-error: U+F23E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF23F");
    },
    Error,
    "encode-error: U+F23F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF240");
    },
    Error,
    "encode-error: U+F240",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF241");
    },
    Error,
    "encode-error: U+F241",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF242");
    },
    Error,
    "encode-error: U+F242",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF243");
    },
    Error,
    "encode-error: U+F243",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF244");
    },
    Error,
    "encode-error: U+F244",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF245");
    },
    Error,
    "encode-error: U+F245",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF246");
    },
    Error,
    "encode-error: U+F246",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF247");
    },
    Error,
    "encode-error: U+F247",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF248");
    },
    Error,
    "encode-error: U+F248",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF249");
    },
    Error,
    "encode-error: U+F249",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF24A");
    },
    Error,
    "encode-error: U+F24A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF24B");
    },
    Error,
    "encode-error: U+F24B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF24C");
    },
    Error,
    "encode-error: U+F24C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF24D");
    },
    Error,
    "encode-error: U+F24D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF24E");
    },
    Error,
    "encode-error: U+F24E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF24F");
    },
    Error,
    "encode-error: U+F24F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF250");
    },
    Error,
    "encode-error: U+F250",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF251");
    },
    Error,
    "encode-error: U+F251",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF252");
    },
    Error,
    "encode-error: U+F252",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF253");
    },
    Error,
    "encode-error: U+F253",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF254");
    },
    Error,
    "encode-error: U+F254",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF255");
    },
    Error,
    "encode-error: U+F255",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF256");
    },
    Error,
    "encode-error: U+F256",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF257");
    },
    Error,
    "encode-error: U+F257",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF258");
    },
    Error,
    "encode-error: U+F258",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF259");
    },
    Error,
    "encode-error: U+F259",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF25A");
    },
    Error,
    "encode-error: U+F25A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF25B");
    },
    Error,
    "encode-error: U+F25B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF25C");
    },
    Error,
    "encode-error: U+F25C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF25D");
    },
    Error,
    "encode-error: U+F25D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF25E");
    },
    Error,
    "encode-error: U+F25E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF25F");
    },
    Error,
    "encode-error: U+F25F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF260");
    },
    Error,
    "encode-error: U+F260",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF261");
    },
    Error,
    "encode-error: U+F261",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF262");
    },
    Error,
    "encode-error: U+F262",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF263");
    },
    Error,
    "encode-error: U+F263",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF264");
    },
    Error,
    "encode-error: U+F264",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF265");
    },
    Error,
    "encode-error: U+F265",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF266");
    },
    Error,
    "encode-error: U+F266",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF267");
    },
    Error,
    "encode-error: U+F267",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF268");
    },
    Error,
    "encode-error: U+F268",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF269");
    },
    Error,
    "encode-error: U+F269",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF26A");
    },
    Error,
    "encode-error: U+F26A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF26B");
    },
    Error,
    "encode-error: U+F26B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF26C");
    },
    Error,
    "encode-error: U+F26C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF26D");
    },
    Error,
    "encode-error: U+F26D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF26E");
    },
    Error,
    "encode-error: U+F26E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF26F");
    },
    Error,
    "encode-error: U+F26F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF270");
    },
    Error,
    "encode-error: U+F270",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF271");
    },
    Error,
    "encode-error: U+F271",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF272");
    },
    Error,
    "encode-error: U+F272",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF273");
    },
    Error,
    "encode-error: U+F273",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF274");
    },
    Error,
    "encode-error: U+F274",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF275");
    },
    Error,
    "encode-error: U+F275",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF276");
    },
    Error,
    "encode-error: U+F276",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF277");
    },
    Error,
    "encode-error: U+F277",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF278");
    },
    Error,
    "encode-error: U+F278",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF279");
    },
    Error,
    "encode-error: U+F279",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF27A");
    },
    Error,
    "encode-error: U+F27A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF27B");
    },
    Error,
    "encode-error: U+F27B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF27C");
    },
    Error,
    "encode-error: U+F27C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF27D");
    },
    Error,
    "encode-error: U+F27D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF27E");
    },
    Error,
    "encode-error: U+F27E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF27F");
    },
    Error,
    "encode-error: U+F27F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF280");
    },
    Error,
    "encode-error: U+F280",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF281");
    },
    Error,
    "encode-error: U+F281",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF282");
    },
    Error,
    "encode-error: U+F282",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF283");
    },
    Error,
    "encode-error: U+F283",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF284");
    },
    Error,
    "encode-error: U+F284",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF285");
    },
    Error,
    "encode-error: U+F285",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF286");
    },
    Error,
    "encode-error: U+F286",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF287");
    },
    Error,
    "encode-error: U+F287",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF288");
    },
    Error,
    "encode-error: U+F288",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF289");
    },
    Error,
    "encode-error: U+F289",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF28A");
    },
    Error,
    "encode-error: U+F28A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF28B");
    },
    Error,
    "encode-error: U+F28B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF28C");
    },
    Error,
    "encode-error: U+F28C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF28D");
    },
    Error,
    "encode-error: U+F28D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF28E");
    },
    Error,
    "encode-error: U+F28E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF28F");
    },
    Error,
    "encode-error: U+F28F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF290");
    },
    Error,
    "encode-error: U+F290",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF291");
    },
    Error,
    "encode-error: U+F291",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF292");
    },
    Error,
    "encode-error: U+F292",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF293");
    },
    Error,
    "encode-error: U+F293",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF294");
    },
    Error,
    "encode-error: U+F294",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF295");
    },
    Error,
    "encode-error: U+F295",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF296");
    },
    Error,
    "encode-error: U+F296",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF297");
    },
    Error,
    "encode-error: U+F297",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF298");
    },
    Error,
    "encode-error: U+F298",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF299");
    },
    Error,
    "encode-error: U+F299",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF29A");
    },
    Error,
    "encode-error: U+F29A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF29B");
    },
    Error,
    "encode-error: U+F29B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF29C");
    },
    Error,
    "encode-error: U+F29C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF29D");
    },
    Error,
    "encode-error: U+F29D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF29E");
    },
    Error,
    "encode-error: U+F29E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF29F");
    },
    Error,
    "encode-error: U+F29F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A0");
    },
    Error,
    "encode-error: U+F2A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A1");
    },
    Error,
    "encode-error: U+F2A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A2");
    },
    Error,
    "encode-error: U+F2A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A3");
    },
    Error,
    "encode-error: U+F2A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A4");
    },
    Error,
    "encode-error: U+F2A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A5");
    },
    Error,
    "encode-error: U+F2A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A6");
    },
    Error,
    "encode-error: U+F2A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A7");
    },
    Error,
    "encode-error: U+F2A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A8");
    },
    Error,
    "encode-error: U+F2A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2A9");
    },
    Error,
    "encode-error: U+F2A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2AA");
    },
    Error,
    "encode-error: U+F2AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2AB");
    },
    Error,
    "encode-error: U+F2AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2AC");
    },
    Error,
    "encode-error: U+F2AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2AD");
    },
    Error,
    "encode-error: U+F2AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2AE");
    },
    Error,
    "encode-error: U+F2AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2AF");
    },
    Error,
    "encode-error: U+F2AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B0");
    },
    Error,
    "encode-error: U+F2B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B1");
    },
    Error,
    "encode-error: U+F2B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B2");
    },
    Error,
    "encode-error: U+F2B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B3");
    },
    Error,
    "encode-error: U+F2B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B4");
    },
    Error,
    "encode-error: U+F2B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B5");
    },
    Error,
    "encode-error: U+F2B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B6");
    },
    Error,
    "encode-error: U+F2B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B7");
    },
    Error,
    "encode-error: U+F2B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B8");
    },
    Error,
    "encode-error: U+F2B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2B9");
    },
    Error,
    "encode-error: U+F2B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2BA");
    },
    Error,
    "encode-error: U+F2BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2BB");
    },
    Error,
    "encode-error: U+F2BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2BC");
    },
    Error,
    "encode-error: U+F2BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2BD");
    },
    Error,
    "encode-error: U+F2BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2BE");
    },
    Error,
    "encode-error: U+F2BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2BF");
    },
    Error,
    "encode-error: U+F2BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C0");
    },
    Error,
    "encode-error: U+F2C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C1");
    },
    Error,
    "encode-error: U+F2C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C2");
    },
    Error,
    "encode-error: U+F2C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C3");
    },
    Error,
    "encode-error: U+F2C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C4");
    },
    Error,
    "encode-error: U+F2C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C5");
    },
    Error,
    "encode-error: U+F2C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C6");
    },
    Error,
    "encode-error: U+F2C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C7");
    },
    Error,
    "encode-error: U+F2C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C8");
    },
    Error,
    "encode-error: U+F2C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2C9");
    },
    Error,
    "encode-error: U+F2C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2CA");
    },
    Error,
    "encode-error: U+F2CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2CB");
    },
    Error,
    "encode-error: U+F2CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2CC");
    },
    Error,
    "encode-error: U+F2CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2CD");
    },
    Error,
    "encode-error: U+F2CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2CE");
    },
    Error,
    "encode-error: U+F2CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2CF");
    },
    Error,
    "encode-error: U+F2CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D0");
    },
    Error,
    "encode-error: U+F2D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D1");
    },
    Error,
    "encode-error: U+F2D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D2");
    },
    Error,
    "encode-error: U+F2D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D3");
    },
    Error,
    "encode-error: U+F2D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D4");
    },
    Error,
    "encode-error: U+F2D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D5");
    },
    Error,
    "encode-error: U+F2D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D6");
    },
    Error,
    "encode-error: U+F2D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D7");
    },
    Error,
    "encode-error: U+F2D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D8");
    },
    Error,
    "encode-error: U+F2D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2D9");
    },
    Error,
    "encode-error: U+F2D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2DA");
    },
    Error,
    "encode-error: U+F2DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2DB");
    },
    Error,
    "encode-error: U+F2DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2DC");
    },
    Error,
    "encode-error: U+F2DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2DD");
    },
    Error,
    "encode-error: U+F2DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2DE");
    },
    Error,
    "encode-error: U+F2DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2DF");
    },
    Error,
    "encode-error: U+F2DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E0");
    },
    Error,
    "encode-error: U+F2E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E1");
    },
    Error,
    "encode-error: U+F2E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E2");
    },
    Error,
    "encode-error: U+F2E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E3");
    },
    Error,
    "encode-error: U+F2E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E4");
    },
    Error,
    "encode-error: U+F2E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E5");
    },
    Error,
    "encode-error: U+F2E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E6");
    },
    Error,
    "encode-error: U+F2E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E7");
    },
    Error,
    "encode-error: U+F2E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E8");
    },
    Error,
    "encode-error: U+F2E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2E9");
    },
    Error,
    "encode-error: U+F2E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2EA");
    },
    Error,
    "encode-error: U+F2EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2EB");
    },
    Error,
    "encode-error: U+F2EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2EC");
    },
    Error,
    "encode-error: U+F2EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2ED");
    },
    Error,
    "encode-error: U+F2ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2EE");
    },
    Error,
    "encode-error: U+F2EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2EF");
    },
    Error,
    "encode-error: U+F2EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F0");
    },
    Error,
    "encode-error: U+F2F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F1");
    },
    Error,
    "encode-error: U+F2F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F2");
    },
    Error,
    "encode-error: U+F2F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F3");
    },
    Error,
    "encode-error: U+F2F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F4");
    },
    Error,
    "encode-error: U+F2F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F5");
    },
    Error,
    "encode-error: U+F2F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F6");
    },
    Error,
    "encode-error: U+F2F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F7");
    },
    Error,
    "encode-error: U+F2F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F8");
    },
    Error,
    "encode-error: U+F2F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2F9");
    },
    Error,
    "encode-error: U+F2F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2FA");
    },
    Error,
    "encode-error: U+F2FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2FB");
    },
    Error,
    "encode-error: U+F2FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2FC");
    },
    Error,
    "encode-error: U+F2FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2FD");
    },
    Error,
    "encode-error: U+F2FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2FE");
    },
    Error,
    "encode-error: U+F2FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF2FF");
    },
    Error,
    "encode-error: U+F2FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF300");
    },
    Error,
    "encode-error: U+F300",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF301");
    },
    Error,
    "encode-error: U+F301",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF302");
    },
    Error,
    "encode-error: U+F302",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF303");
    },
    Error,
    "encode-error: U+F303",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF304");
    },
    Error,
    "encode-error: U+F304",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF305");
    },
    Error,
    "encode-error: U+F305",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF306");
    },
    Error,
    "encode-error: U+F306",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF307");
    },
    Error,
    "encode-error: U+F307",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF308");
    },
    Error,
    "encode-error: U+F308",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF309");
    },
    Error,
    "encode-error: U+F309",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF30A");
    },
    Error,
    "encode-error: U+F30A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF30B");
    },
    Error,
    "encode-error: U+F30B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF30C");
    },
    Error,
    "encode-error: U+F30C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF30D");
    },
    Error,
    "encode-error: U+F30D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF30E");
    },
    Error,
    "encode-error: U+F30E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF30F");
    },
    Error,
    "encode-error: U+F30F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF310");
    },
    Error,
    "encode-error: U+F310",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF311");
    },
    Error,
    "encode-error: U+F311",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF312");
    },
    Error,
    "encode-error: U+F312",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF313");
    },
    Error,
    "encode-error: U+F313",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF314");
    },
    Error,
    "encode-error: U+F314",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF315");
    },
    Error,
    "encode-error: U+F315",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF316");
    },
    Error,
    "encode-error: U+F316",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF317");
    },
    Error,
    "encode-error: U+F317",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF318");
    },
    Error,
    "encode-error: U+F318",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF319");
    },
    Error,
    "encode-error: U+F319",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF31A");
    },
    Error,
    "encode-error: U+F31A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF31B");
    },
    Error,
    "encode-error: U+F31B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF31C");
    },
    Error,
    "encode-error: U+F31C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF31D");
    },
    Error,
    "encode-error: U+F31D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF31E");
    },
    Error,
    "encode-error: U+F31E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF31F");
    },
    Error,
    "encode-error: U+F31F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF320");
    },
    Error,
    "encode-error: U+F320",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF321");
    },
    Error,
    "encode-error: U+F321",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF322");
    },
    Error,
    "encode-error: U+F322",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF323");
    },
    Error,
    "encode-error: U+F323",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF324");
    },
    Error,
    "encode-error: U+F324",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF325");
    },
    Error,
    "encode-error: U+F325",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF326");
    },
    Error,
    "encode-error: U+F326",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF327");
    },
    Error,
    "encode-error: U+F327",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF328");
    },
    Error,
    "encode-error: U+F328",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF329");
    },
    Error,
    "encode-error: U+F329",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF32A");
    },
    Error,
    "encode-error: U+F32A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF32B");
    },
    Error,
    "encode-error: U+F32B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF32C");
    },
    Error,
    "encode-error: U+F32C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF32D");
    },
    Error,
    "encode-error: U+F32D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF32E");
    },
    Error,
    "encode-error: U+F32E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF32F");
    },
    Error,
    "encode-error: U+F32F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF330");
    },
    Error,
    "encode-error: U+F330",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF331");
    },
    Error,
    "encode-error: U+F331",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF332");
    },
    Error,
    "encode-error: U+F332",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF333");
    },
    Error,
    "encode-error: U+F333",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF334");
    },
    Error,
    "encode-error: U+F334",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF335");
    },
    Error,
    "encode-error: U+F335",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF336");
    },
    Error,
    "encode-error: U+F336",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF337");
    },
    Error,
    "encode-error: U+F337",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF338");
    },
    Error,
    "encode-error: U+F338",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF339");
    },
    Error,
    "encode-error: U+F339",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF33A");
    },
    Error,
    "encode-error: U+F33A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF33B");
    },
    Error,
    "encode-error: U+F33B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF33C");
    },
    Error,
    "encode-error: U+F33C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF33D");
    },
    Error,
    "encode-error: U+F33D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF33E");
    },
    Error,
    "encode-error: U+F33E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF33F");
    },
    Error,
    "encode-error: U+F33F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF340");
    },
    Error,
    "encode-error: U+F340",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF341");
    },
    Error,
    "encode-error: U+F341",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF342");
    },
    Error,
    "encode-error: U+F342",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF343");
    },
    Error,
    "encode-error: U+F343",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF344");
    },
    Error,
    "encode-error: U+F344",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF345");
    },
    Error,
    "encode-error: U+F345",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF346");
    },
    Error,
    "encode-error: U+F346",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF347");
    },
    Error,
    "encode-error: U+F347",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF348");
    },
    Error,
    "encode-error: U+F348",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF349");
    },
    Error,
    "encode-error: U+F349",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF34A");
    },
    Error,
    "encode-error: U+F34A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF34B");
    },
    Error,
    "encode-error: U+F34B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF34C");
    },
    Error,
    "encode-error: U+F34C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF34D");
    },
    Error,
    "encode-error: U+F34D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF34E");
    },
    Error,
    "encode-error: U+F34E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF34F");
    },
    Error,
    "encode-error: U+F34F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF350");
    },
    Error,
    "encode-error: U+F350",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF351");
    },
    Error,
    "encode-error: U+F351",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF352");
    },
    Error,
    "encode-error: U+F352",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF353");
    },
    Error,
    "encode-error: U+F353",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF354");
    },
    Error,
    "encode-error: U+F354",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF355");
    },
    Error,
    "encode-error: U+F355",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF356");
    },
    Error,
    "encode-error: U+F356",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF357");
    },
    Error,
    "encode-error: U+F357",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF358");
    },
    Error,
    "encode-error: U+F358",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF359");
    },
    Error,
    "encode-error: U+F359",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF35A");
    },
    Error,
    "encode-error: U+F35A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF35B");
    },
    Error,
    "encode-error: U+F35B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF35C");
    },
    Error,
    "encode-error: U+F35C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF35D");
    },
    Error,
    "encode-error: U+F35D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF35E");
    },
    Error,
    "encode-error: U+F35E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF35F");
    },
    Error,
    "encode-error: U+F35F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF360");
    },
    Error,
    "encode-error: U+F360",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF361");
    },
    Error,
    "encode-error: U+F361",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF362");
    },
    Error,
    "encode-error: U+F362",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF363");
    },
    Error,
    "encode-error: U+F363",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF364");
    },
    Error,
    "encode-error: U+F364",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF365");
    },
    Error,
    "encode-error: U+F365",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF366");
    },
    Error,
    "encode-error: U+F366",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF367");
    },
    Error,
    "encode-error: U+F367",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF368");
    },
    Error,
    "encode-error: U+F368",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF369");
    },
    Error,
    "encode-error: U+F369",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF36A");
    },
    Error,
    "encode-error: U+F36A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF36B");
    },
    Error,
    "encode-error: U+F36B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF36C");
    },
    Error,
    "encode-error: U+F36C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF36D");
    },
    Error,
    "encode-error: U+F36D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF36E");
    },
    Error,
    "encode-error: U+F36E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF36F");
    },
    Error,
    "encode-error: U+F36F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF370");
    },
    Error,
    "encode-error: U+F370",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF371");
    },
    Error,
    "encode-error: U+F371",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF372");
    },
    Error,
    "encode-error: U+F372",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF373");
    },
    Error,
    "encode-error: U+F373",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF374");
    },
    Error,
    "encode-error: U+F374",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF375");
    },
    Error,
    "encode-error: U+F375",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF376");
    },
    Error,
    "encode-error: U+F376",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF377");
    },
    Error,
    "encode-error: U+F377",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF378");
    },
    Error,
    "encode-error: U+F378",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF379");
    },
    Error,
    "encode-error: U+F379",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF37A");
    },
    Error,
    "encode-error: U+F37A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF37B");
    },
    Error,
    "encode-error: U+F37B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF37C");
    },
    Error,
    "encode-error: U+F37C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF37D");
    },
    Error,
    "encode-error: U+F37D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF37E");
    },
    Error,
    "encode-error: U+F37E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF37F");
    },
    Error,
    "encode-error: U+F37F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF380");
    },
    Error,
    "encode-error: U+F380",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF381");
    },
    Error,
    "encode-error: U+F381",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF382");
    },
    Error,
    "encode-error: U+F382",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF383");
    },
    Error,
    "encode-error: U+F383",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF384");
    },
    Error,
    "encode-error: U+F384",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF385");
    },
    Error,
    "encode-error: U+F385",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF386");
    },
    Error,
    "encode-error: U+F386",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF387");
    },
    Error,
    "encode-error: U+F387",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF388");
    },
    Error,
    "encode-error: U+F388",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF389");
    },
    Error,
    "encode-error: U+F389",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF38A");
    },
    Error,
    "encode-error: U+F38A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF38B");
    },
    Error,
    "encode-error: U+F38B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF38C");
    },
    Error,
    "encode-error: U+F38C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF38D");
    },
    Error,
    "encode-error: U+F38D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF38E");
    },
    Error,
    "encode-error: U+F38E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF38F");
    },
    Error,
    "encode-error: U+F38F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF390");
    },
    Error,
    "encode-error: U+F390",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF391");
    },
    Error,
    "encode-error: U+F391",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF392");
    },
    Error,
    "encode-error: U+F392",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF393");
    },
    Error,
    "encode-error: U+F393",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF394");
    },
    Error,
    "encode-error: U+F394",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF395");
    },
    Error,
    "encode-error: U+F395",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF396");
    },
    Error,
    "encode-error: U+F396",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF397");
    },
    Error,
    "encode-error: U+F397",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF398");
    },
    Error,
    "encode-error: U+F398",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF399");
    },
    Error,
    "encode-error: U+F399",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF39A");
    },
    Error,
    "encode-error: U+F39A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF39B");
    },
    Error,
    "encode-error: U+F39B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF39C");
    },
    Error,
    "encode-error: U+F39C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF39D");
    },
    Error,
    "encode-error: U+F39D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF39E");
    },
    Error,
    "encode-error: U+F39E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF39F");
    },
    Error,
    "encode-error: U+F39F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A0");
    },
    Error,
    "encode-error: U+F3A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A1");
    },
    Error,
    "encode-error: U+F3A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A2");
    },
    Error,
    "encode-error: U+F3A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A3");
    },
    Error,
    "encode-error: U+F3A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A4");
    },
    Error,
    "encode-error: U+F3A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A5");
    },
    Error,
    "encode-error: U+F3A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A6");
    },
    Error,
    "encode-error: U+F3A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A7");
    },
    Error,
    "encode-error: U+F3A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A8");
    },
    Error,
    "encode-error: U+F3A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3A9");
    },
    Error,
    "encode-error: U+F3A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3AA");
    },
    Error,
    "encode-error: U+F3AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3AB");
    },
    Error,
    "encode-error: U+F3AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3AC");
    },
    Error,
    "encode-error: U+F3AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3AD");
    },
    Error,
    "encode-error: U+F3AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3AE");
    },
    Error,
    "encode-error: U+F3AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3AF");
    },
    Error,
    "encode-error: U+F3AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B0");
    },
    Error,
    "encode-error: U+F3B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B1");
    },
    Error,
    "encode-error: U+F3B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B2");
    },
    Error,
    "encode-error: U+F3B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B3");
    },
    Error,
    "encode-error: U+F3B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B4");
    },
    Error,
    "encode-error: U+F3B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B5");
    },
    Error,
    "encode-error: U+F3B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B6");
    },
    Error,
    "encode-error: U+F3B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B7");
    },
    Error,
    "encode-error: U+F3B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B8");
    },
    Error,
    "encode-error: U+F3B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3B9");
    },
    Error,
    "encode-error: U+F3B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3BA");
    },
    Error,
    "encode-error: U+F3BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3BB");
    },
    Error,
    "encode-error: U+F3BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3BC");
    },
    Error,
    "encode-error: U+F3BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3BD");
    },
    Error,
    "encode-error: U+F3BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3BE");
    },
    Error,
    "encode-error: U+F3BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3BF");
    },
    Error,
    "encode-error: U+F3BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C0");
    },
    Error,
    "encode-error: U+F3C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C1");
    },
    Error,
    "encode-error: U+F3C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C2");
    },
    Error,
    "encode-error: U+F3C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C3");
    },
    Error,
    "encode-error: U+F3C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C4");
    },
    Error,
    "encode-error: U+F3C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C5");
    },
    Error,
    "encode-error: U+F3C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C6");
    },
    Error,
    "encode-error: U+F3C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C7");
    },
    Error,
    "encode-error: U+F3C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C8");
    },
    Error,
    "encode-error: U+F3C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3C9");
    },
    Error,
    "encode-error: U+F3C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3CA");
    },
    Error,
    "encode-error: U+F3CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3CB");
    },
    Error,
    "encode-error: U+F3CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3CC");
    },
    Error,
    "encode-error: U+F3CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3CD");
    },
    Error,
    "encode-error: U+F3CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3CE");
    },
    Error,
    "encode-error: U+F3CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3CF");
    },
    Error,
    "encode-error: U+F3CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D0");
    },
    Error,
    "encode-error: U+F3D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D1");
    },
    Error,
    "encode-error: U+F3D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D2");
    },
    Error,
    "encode-error: U+F3D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D3");
    },
    Error,
    "encode-error: U+F3D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D4");
    },
    Error,
    "encode-error: U+F3D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D5");
    },
    Error,
    "encode-error: U+F3D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D6");
    },
    Error,
    "encode-error: U+F3D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D7");
    },
    Error,
    "encode-error: U+F3D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D8");
    },
    Error,
    "encode-error: U+F3D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3D9");
    },
    Error,
    "encode-error: U+F3D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3DA");
    },
    Error,
    "encode-error: U+F3DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3DB");
    },
    Error,
    "encode-error: U+F3DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3DC");
    },
    Error,
    "encode-error: U+F3DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3DD");
    },
    Error,
    "encode-error: U+F3DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3DE");
    },
    Error,
    "encode-error: U+F3DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3DF");
    },
    Error,
    "encode-error: U+F3DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E0");
    },
    Error,
    "encode-error: U+F3E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E1");
    },
    Error,
    "encode-error: U+F3E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E2");
    },
    Error,
    "encode-error: U+F3E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E3");
    },
    Error,
    "encode-error: U+F3E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E4");
    },
    Error,
    "encode-error: U+F3E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E5");
    },
    Error,
    "encode-error: U+F3E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E6");
    },
    Error,
    "encode-error: U+F3E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E7");
    },
    Error,
    "encode-error: U+F3E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E8");
    },
    Error,
    "encode-error: U+F3E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3E9");
    },
    Error,
    "encode-error: U+F3E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3EA");
    },
    Error,
    "encode-error: U+F3EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3EB");
    },
    Error,
    "encode-error: U+F3EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3EC");
    },
    Error,
    "encode-error: U+F3EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3ED");
    },
    Error,
    "encode-error: U+F3ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3EE");
    },
    Error,
    "encode-error: U+F3EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3EF");
    },
    Error,
    "encode-error: U+F3EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F0");
    },
    Error,
    "encode-error: U+F3F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F1");
    },
    Error,
    "encode-error: U+F3F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F2");
    },
    Error,
    "encode-error: U+F3F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F3");
    },
    Error,
    "encode-error: U+F3F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F4");
    },
    Error,
    "encode-error: U+F3F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F5");
    },
    Error,
    "encode-error: U+F3F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F6");
    },
    Error,
    "encode-error: U+F3F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F7");
    },
    Error,
    "encode-error: U+F3F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F8");
    },
    Error,
    "encode-error: U+F3F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3F9");
    },
    Error,
    "encode-error: U+F3F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3FA");
    },
    Error,
    "encode-error: U+F3FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3FB");
    },
    Error,
    "encode-error: U+F3FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3FC");
    },
    Error,
    "encode-error: U+F3FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3FD");
    },
    Error,
    "encode-error: U+F3FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3FE");
    },
    Error,
    "encode-error: U+F3FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF3FF");
    },
    Error,
    "encode-error: U+F3FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF400");
    },
    Error,
    "encode-error: U+F400",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF401");
    },
    Error,
    "encode-error: U+F401",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF402");
    },
    Error,
    "encode-error: U+F402",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF403");
    },
    Error,
    "encode-error: U+F403",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF404");
    },
    Error,
    "encode-error: U+F404",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF405");
    },
    Error,
    "encode-error: U+F405",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF406");
    },
    Error,
    "encode-error: U+F406",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF407");
    },
    Error,
    "encode-error: U+F407",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF408");
    },
    Error,
    "encode-error: U+F408",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF409");
    },
    Error,
    "encode-error: U+F409",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF40A");
    },
    Error,
    "encode-error: U+F40A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF40B");
    },
    Error,
    "encode-error: U+F40B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF40C");
    },
    Error,
    "encode-error: U+F40C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF40D");
    },
    Error,
    "encode-error: U+F40D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF40E");
    },
    Error,
    "encode-error: U+F40E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF40F");
    },
    Error,
    "encode-error: U+F40F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF410");
    },
    Error,
    "encode-error: U+F410",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF411");
    },
    Error,
    "encode-error: U+F411",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF412");
    },
    Error,
    "encode-error: U+F412",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF413");
    },
    Error,
    "encode-error: U+F413",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF414");
    },
    Error,
    "encode-error: U+F414",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF415");
    },
    Error,
    "encode-error: U+F415",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF416");
    },
    Error,
    "encode-error: U+F416",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF417");
    },
    Error,
    "encode-error: U+F417",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF418");
    },
    Error,
    "encode-error: U+F418",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF419");
    },
    Error,
    "encode-error: U+F419",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF41A");
    },
    Error,
    "encode-error: U+F41A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF41B");
    },
    Error,
    "encode-error: U+F41B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF41C");
    },
    Error,
    "encode-error: U+F41C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF41D");
    },
    Error,
    "encode-error: U+F41D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF41E");
    },
    Error,
    "encode-error: U+F41E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF41F");
    },
    Error,
    "encode-error: U+F41F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF420");
    },
    Error,
    "encode-error: U+F420",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF421");
    },
    Error,
    "encode-error: U+F421",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF422");
    },
    Error,
    "encode-error: U+F422",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF423");
    },
    Error,
    "encode-error: U+F423",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF424");
    },
    Error,
    "encode-error: U+F424",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF425");
    },
    Error,
    "encode-error: U+F425",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF426");
    },
    Error,
    "encode-error: U+F426",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF427");
    },
    Error,
    "encode-error: U+F427",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF428");
    },
    Error,
    "encode-error: U+F428",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF429");
    },
    Error,
    "encode-error: U+F429",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF42A");
    },
    Error,
    "encode-error: U+F42A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF42B");
    },
    Error,
    "encode-error: U+F42B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF42C");
    },
    Error,
    "encode-error: U+F42C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF42D");
    },
    Error,
    "encode-error: U+F42D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF42E");
    },
    Error,
    "encode-error: U+F42E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF42F");
    },
    Error,
    "encode-error: U+F42F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF430");
    },
    Error,
    "encode-error: U+F430",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF431");
    },
    Error,
    "encode-error: U+F431",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF432");
    },
    Error,
    "encode-error: U+F432",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF433");
    },
    Error,
    "encode-error: U+F433",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF434");
    },
    Error,
    "encode-error: U+F434",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF435");
    },
    Error,
    "encode-error: U+F435",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF436");
    },
    Error,
    "encode-error: U+F436",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF437");
    },
    Error,
    "encode-error: U+F437",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF438");
    },
    Error,
    "encode-error: U+F438",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF439");
    },
    Error,
    "encode-error: U+F439",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF43A");
    },
    Error,
    "encode-error: U+F43A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF43B");
    },
    Error,
    "encode-error: U+F43B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF43C");
    },
    Error,
    "encode-error: U+F43C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF43D");
    },
    Error,
    "encode-error: U+F43D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF43E");
    },
    Error,
    "encode-error: U+F43E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF43F");
    },
    Error,
    "encode-error: U+F43F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF440");
    },
    Error,
    "encode-error: U+F440",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF441");
    },
    Error,
    "encode-error: U+F441",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF442");
    },
    Error,
    "encode-error: U+F442",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF443");
    },
    Error,
    "encode-error: U+F443",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF444");
    },
    Error,
    "encode-error: U+F444",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF445");
    },
    Error,
    "encode-error: U+F445",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF446");
    },
    Error,
    "encode-error: U+F446",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF447");
    },
    Error,
    "encode-error: U+F447",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF448");
    },
    Error,
    "encode-error: U+F448",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF449");
    },
    Error,
    "encode-error: U+F449",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF44A");
    },
    Error,
    "encode-error: U+F44A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF44B");
    },
    Error,
    "encode-error: U+F44B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF44C");
    },
    Error,
    "encode-error: U+F44C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF44D");
    },
    Error,
    "encode-error: U+F44D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF44E");
    },
    Error,
    "encode-error: U+F44E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF44F");
    },
    Error,
    "encode-error: U+F44F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF450");
    },
    Error,
    "encode-error: U+F450",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF451");
    },
    Error,
    "encode-error: U+F451",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF452");
    },
    Error,
    "encode-error: U+F452",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF453");
    },
    Error,
    "encode-error: U+F453",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF454");
    },
    Error,
    "encode-error: U+F454",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF455");
    },
    Error,
    "encode-error: U+F455",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF456");
    },
    Error,
    "encode-error: U+F456",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF457");
    },
    Error,
    "encode-error: U+F457",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF458");
    },
    Error,
    "encode-error: U+F458",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF459");
    },
    Error,
    "encode-error: U+F459",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF45A");
    },
    Error,
    "encode-error: U+F45A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF45B");
    },
    Error,
    "encode-error: U+F45B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF45C");
    },
    Error,
    "encode-error: U+F45C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF45D");
    },
    Error,
    "encode-error: U+F45D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF45E");
    },
    Error,
    "encode-error: U+F45E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF45F");
    },
    Error,
    "encode-error: U+F45F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF460");
    },
    Error,
    "encode-error: U+F460",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF461");
    },
    Error,
    "encode-error: U+F461",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF462");
    },
    Error,
    "encode-error: U+F462",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF463");
    },
    Error,
    "encode-error: U+F463",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF464");
    },
    Error,
    "encode-error: U+F464",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF465");
    },
    Error,
    "encode-error: U+F465",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF466");
    },
    Error,
    "encode-error: U+F466",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF467");
    },
    Error,
    "encode-error: U+F467",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF468");
    },
    Error,
    "encode-error: U+F468",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF469");
    },
    Error,
    "encode-error: U+F469",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF46A");
    },
    Error,
    "encode-error: U+F46A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF46B");
    },
    Error,
    "encode-error: U+F46B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF46C");
    },
    Error,
    "encode-error: U+F46C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF46D");
    },
    Error,
    "encode-error: U+F46D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF46E");
    },
    Error,
    "encode-error: U+F46E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF46F");
    },
    Error,
    "encode-error: U+F46F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF470");
    },
    Error,
    "encode-error: U+F470",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF471");
    },
    Error,
    "encode-error: U+F471",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF472");
    },
    Error,
    "encode-error: U+F472",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF473");
    },
    Error,
    "encode-error: U+F473",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF474");
    },
    Error,
    "encode-error: U+F474",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF475");
    },
    Error,
    "encode-error: U+F475",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF476");
    },
    Error,
    "encode-error: U+F476",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF477");
    },
    Error,
    "encode-error: U+F477",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF478");
    },
    Error,
    "encode-error: U+F478",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF479");
    },
    Error,
    "encode-error: U+F479",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF47A");
    },
    Error,
    "encode-error: U+F47A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF47B");
    },
    Error,
    "encode-error: U+F47B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF47C");
    },
    Error,
    "encode-error: U+F47C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF47D");
    },
    Error,
    "encode-error: U+F47D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF47E");
    },
    Error,
    "encode-error: U+F47E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF47F");
    },
    Error,
    "encode-error: U+F47F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF480");
    },
    Error,
    "encode-error: U+F480",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF481");
    },
    Error,
    "encode-error: U+F481",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF482");
    },
    Error,
    "encode-error: U+F482",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF483");
    },
    Error,
    "encode-error: U+F483",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF484");
    },
    Error,
    "encode-error: U+F484",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF485");
    },
    Error,
    "encode-error: U+F485",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF486");
    },
    Error,
    "encode-error: U+F486",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF487");
    },
    Error,
    "encode-error: U+F487",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF488");
    },
    Error,
    "encode-error: U+F488",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF489");
    },
    Error,
    "encode-error: U+F489",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF48A");
    },
    Error,
    "encode-error: U+F48A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF48B");
    },
    Error,
    "encode-error: U+F48B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF48C");
    },
    Error,
    "encode-error: U+F48C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF48D");
    },
    Error,
    "encode-error: U+F48D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF48E");
    },
    Error,
    "encode-error: U+F48E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF48F");
    },
    Error,
    "encode-error: U+F48F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF490");
    },
    Error,
    "encode-error: U+F490",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF491");
    },
    Error,
    "encode-error: U+F491",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF492");
    },
    Error,
    "encode-error: U+F492",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF493");
    },
    Error,
    "encode-error: U+F493",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF494");
    },
    Error,
    "encode-error: U+F494",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF495");
    },
    Error,
    "encode-error: U+F495",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF496");
    },
    Error,
    "encode-error: U+F496",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF497");
    },
    Error,
    "encode-error: U+F497",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF498");
    },
    Error,
    "encode-error: U+F498",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF499");
    },
    Error,
    "encode-error: U+F499",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF49A");
    },
    Error,
    "encode-error: U+F49A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF49B");
    },
    Error,
    "encode-error: U+F49B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF49C");
    },
    Error,
    "encode-error: U+F49C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF49D");
    },
    Error,
    "encode-error: U+F49D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF49E");
    },
    Error,
    "encode-error: U+F49E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF49F");
    },
    Error,
    "encode-error: U+F49F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A0");
    },
    Error,
    "encode-error: U+F4A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A1");
    },
    Error,
    "encode-error: U+F4A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A2");
    },
    Error,
    "encode-error: U+F4A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A3");
    },
    Error,
    "encode-error: U+F4A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A4");
    },
    Error,
    "encode-error: U+F4A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A5");
    },
    Error,
    "encode-error: U+F4A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A6");
    },
    Error,
    "encode-error: U+F4A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A7");
    },
    Error,
    "encode-error: U+F4A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A8");
    },
    Error,
    "encode-error: U+F4A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4A9");
    },
    Error,
    "encode-error: U+F4A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4AA");
    },
    Error,
    "encode-error: U+F4AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4AB");
    },
    Error,
    "encode-error: U+F4AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4AC");
    },
    Error,
    "encode-error: U+F4AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4AD");
    },
    Error,
    "encode-error: U+F4AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4AE");
    },
    Error,
    "encode-error: U+F4AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4AF");
    },
    Error,
    "encode-error: U+F4AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B0");
    },
    Error,
    "encode-error: U+F4B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B1");
    },
    Error,
    "encode-error: U+F4B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B2");
    },
    Error,
    "encode-error: U+F4B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B3");
    },
    Error,
    "encode-error: U+F4B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B4");
    },
    Error,
    "encode-error: U+F4B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B5");
    },
    Error,
    "encode-error: U+F4B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B6");
    },
    Error,
    "encode-error: U+F4B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B7");
    },
    Error,
    "encode-error: U+F4B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B8");
    },
    Error,
    "encode-error: U+F4B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4B9");
    },
    Error,
    "encode-error: U+F4B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4BA");
    },
    Error,
    "encode-error: U+F4BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4BB");
    },
    Error,
    "encode-error: U+F4BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4BC");
    },
    Error,
    "encode-error: U+F4BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4BD");
    },
    Error,
    "encode-error: U+F4BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4BE");
    },
    Error,
    "encode-error: U+F4BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4BF");
    },
    Error,
    "encode-error: U+F4BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C0");
    },
    Error,
    "encode-error: U+F4C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C1");
    },
    Error,
    "encode-error: U+F4C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C2");
    },
    Error,
    "encode-error: U+F4C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C3");
    },
    Error,
    "encode-error: U+F4C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C4");
    },
    Error,
    "encode-error: U+F4C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C5");
    },
    Error,
    "encode-error: U+F4C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C6");
    },
    Error,
    "encode-error: U+F4C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C7");
    },
    Error,
    "encode-error: U+F4C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C8");
    },
    Error,
    "encode-error: U+F4C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4C9");
    },
    Error,
    "encode-error: U+F4C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4CA");
    },
    Error,
    "encode-error: U+F4CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4CB");
    },
    Error,
    "encode-error: U+F4CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4CC");
    },
    Error,
    "encode-error: U+F4CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4CD");
    },
    Error,
    "encode-error: U+F4CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4CE");
    },
    Error,
    "encode-error: U+F4CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4CF");
    },
    Error,
    "encode-error: U+F4CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D0");
    },
    Error,
    "encode-error: U+F4D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D1");
    },
    Error,
    "encode-error: U+F4D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D2");
    },
    Error,
    "encode-error: U+F4D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D3");
    },
    Error,
    "encode-error: U+F4D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D4");
    },
    Error,
    "encode-error: U+F4D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D5");
    },
    Error,
    "encode-error: U+F4D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D6");
    },
    Error,
    "encode-error: U+F4D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D7");
    },
    Error,
    "encode-error: U+F4D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D8");
    },
    Error,
    "encode-error: U+F4D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4D9");
    },
    Error,
    "encode-error: U+F4D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4DA");
    },
    Error,
    "encode-error: U+F4DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4DB");
    },
    Error,
    "encode-error: U+F4DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4DC");
    },
    Error,
    "encode-error: U+F4DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4DD");
    },
    Error,
    "encode-error: U+F4DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4DE");
    },
    Error,
    "encode-error: U+F4DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4DF");
    },
    Error,
    "encode-error: U+F4DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E0");
    },
    Error,
    "encode-error: U+F4E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E1");
    },
    Error,
    "encode-error: U+F4E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E2");
    },
    Error,
    "encode-error: U+F4E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E3");
    },
    Error,
    "encode-error: U+F4E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E4");
    },
    Error,
    "encode-error: U+F4E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E5");
    },
    Error,
    "encode-error: U+F4E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E6");
    },
    Error,
    "encode-error: U+F4E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E7");
    },
    Error,
    "encode-error: U+F4E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E8");
    },
    Error,
    "encode-error: U+F4E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4E9");
    },
    Error,
    "encode-error: U+F4E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4EA");
    },
    Error,
    "encode-error: U+F4EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4EB");
    },
    Error,
    "encode-error: U+F4EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4EC");
    },
    Error,
    "encode-error: U+F4EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4ED");
    },
    Error,
    "encode-error: U+F4ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4EE");
    },
    Error,
    "encode-error: U+F4EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4EF");
    },
    Error,
    "encode-error: U+F4EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F0");
    },
    Error,
    "encode-error: U+F4F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F1");
    },
    Error,
    "encode-error: U+F4F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F2");
    },
    Error,
    "encode-error: U+F4F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F3");
    },
    Error,
    "encode-error: U+F4F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F4");
    },
    Error,
    "encode-error: U+F4F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F5");
    },
    Error,
    "encode-error: U+F4F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F6");
    },
    Error,
    "encode-error: U+F4F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F7");
    },
    Error,
    "encode-error: U+F4F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F8");
    },
    Error,
    "encode-error: U+F4F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4F9");
    },
    Error,
    "encode-error: U+F4F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4FA");
    },
    Error,
    "encode-error: U+F4FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4FB");
    },
    Error,
    "encode-error: U+F4FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4FC");
    },
    Error,
    "encode-error: U+F4FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4FD");
    },
    Error,
    "encode-error: U+F4FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4FE");
    },
    Error,
    "encode-error: U+F4FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF4FF");
    },
    Error,
    "encode-error: U+F4FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF500");
    },
    Error,
    "encode-error: U+F500",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF501");
    },
    Error,
    "encode-error: U+F501",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF502");
    },
    Error,
    "encode-error: U+F502",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF503");
    },
    Error,
    "encode-error: U+F503",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF504");
    },
    Error,
    "encode-error: U+F504",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF505");
    },
    Error,
    "encode-error: U+F505",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF506");
    },
    Error,
    "encode-error: U+F506",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF507");
    },
    Error,
    "encode-error: U+F507",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF508");
    },
    Error,
    "encode-error: U+F508",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF509");
    },
    Error,
    "encode-error: U+F509",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF50A");
    },
    Error,
    "encode-error: U+F50A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF50B");
    },
    Error,
    "encode-error: U+F50B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF50C");
    },
    Error,
    "encode-error: U+F50C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF50D");
    },
    Error,
    "encode-error: U+F50D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF50E");
    },
    Error,
    "encode-error: U+F50E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF50F");
    },
    Error,
    "encode-error: U+F50F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF510");
    },
    Error,
    "encode-error: U+F510",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF511");
    },
    Error,
    "encode-error: U+F511",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF512");
    },
    Error,
    "encode-error: U+F512",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF513");
    },
    Error,
    "encode-error: U+F513",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF514");
    },
    Error,
    "encode-error: U+F514",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF515");
    },
    Error,
    "encode-error: U+F515",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF516");
    },
    Error,
    "encode-error: U+F516",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF517");
    },
    Error,
    "encode-error: U+F517",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF518");
    },
    Error,
    "encode-error: U+F518",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF519");
    },
    Error,
    "encode-error: U+F519",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF51A");
    },
    Error,
    "encode-error: U+F51A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF51B");
    },
    Error,
    "encode-error: U+F51B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF51C");
    },
    Error,
    "encode-error: U+F51C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF51D");
    },
    Error,
    "encode-error: U+F51D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF51E");
    },
    Error,
    "encode-error: U+F51E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF51F");
    },
    Error,
    "encode-error: U+F51F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF520");
    },
    Error,
    "encode-error: U+F520",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF521");
    },
    Error,
    "encode-error: U+F521",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF522");
    },
    Error,
    "encode-error: U+F522",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF523");
    },
    Error,
    "encode-error: U+F523",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF524");
    },
    Error,
    "encode-error: U+F524",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF525");
    },
    Error,
    "encode-error: U+F525",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF526");
    },
    Error,
    "encode-error: U+F526",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF527");
    },
    Error,
    "encode-error: U+F527",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF528");
    },
    Error,
    "encode-error: U+F528",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF529");
    },
    Error,
    "encode-error: U+F529",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF52A");
    },
    Error,
    "encode-error: U+F52A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF52B");
    },
    Error,
    "encode-error: U+F52B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF52C");
    },
    Error,
    "encode-error: U+F52C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF52D");
    },
    Error,
    "encode-error: U+F52D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF52E");
    },
    Error,
    "encode-error: U+F52E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF52F");
    },
    Error,
    "encode-error: U+F52F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF530");
    },
    Error,
    "encode-error: U+F530",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF531");
    },
    Error,
    "encode-error: U+F531",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF532");
    },
    Error,
    "encode-error: U+F532",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF533");
    },
    Error,
    "encode-error: U+F533",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF534");
    },
    Error,
    "encode-error: U+F534",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF535");
    },
    Error,
    "encode-error: U+F535",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF536");
    },
    Error,
    "encode-error: U+F536",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF537");
    },
    Error,
    "encode-error: U+F537",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF538");
    },
    Error,
    "encode-error: U+F538",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF539");
    },
    Error,
    "encode-error: U+F539",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF53A");
    },
    Error,
    "encode-error: U+F53A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF53B");
    },
    Error,
    "encode-error: U+F53B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF53C");
    },
    Error,
    "encode-error: U+F53C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF53D");
    },
    Error,
    "encode-error: U+F53D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF53E");
    },
    Error,
    "encode-error: U+F53E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF53F");
    },
    Error,
    "encode-error: U+F53F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF540");
    },
    Error,
    "encode-error: U+F540",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF541");
    },
    Error,
    "encode-error: U+F541",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF542");
    },
    Error,
    "encode-error: U+F542",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF543");
    },
    Error,
    "encode-error: U+F543",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF544");
    },
    Error,
    "encode-error: U+F544",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF545");
    },
    Error,
    "encode-error: U+F545",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF546");
    },
    Error,
    "encode-error: U+F546",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF547");
    },
    Error,
    "encode-error: U+F547",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF548");
    },
    Error,
    "encode-error: U+F548",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF549");
    },
    Error,
    "encode-error: U+F549",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF54A");
    },
    Error,
    "encode-error: U+F54A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF54B");
    },
    Error,
    "encode-error: U+F54B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF54C");
    },
    Error,
    "encode-error: U+F54C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF54D");
    },
    Error,
    "encode-error: U+F54D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF54E");
    },
    Error,
    "encode-error: U+F54E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF54F");
    },
    Error,
    "encode-error: U+F54F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF550");
    },
    Error,
    "encode-error: U+F550",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF551");
    },
    Error,
    "encode-error: U+F551",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF552");
    },
    Error,
    "encode-error: U+F552",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF553");
    },
    Error,
    "encode-error: U+F553",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF554");
    },
    Error,
    "encode-error: U+F554",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF555");
    },
    Error,
    "encode-error: U+F555",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF556");
    },
    Error,
    "encode-error: U+F556",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF557");
    },
    Error,
    "encode-error: U+F557",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF558");
    },
    Error,
    "encode-error: U+F558",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF559");
    },
    Error,
    "encode-error: U+F559",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF55A");
    },
    Error,
    "encode-error: U+F55A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF55B");
    },
    Error,
    "encode-error: U+F55B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF55C");
    },
    Error,
    "encode-error: U+F55C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF55D");
    },
    Error,
    "encode-error: U+F55D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF55E");
    },
    Error,
    "encode-error: U+F55E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF55F");
    },
    Error,
    "encode-error: U+F55F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF560");
    },
    Error,
    "encode-error: U+F560",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF561");
    },
    Error,
    "encode-error: U+F561",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF562");
    },
    Error,
    "encode-error: U+F562",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF563");
    },
    Error,
    "encode-error: U+F563",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF564");
    },
    Error,
    "encode-error: U+F564",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF565");
    },
    Error,
    "encode-error: U+F565",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF566");
    },
    Error,
    "encode-error: U+F566",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF567");
    },
    Error,
    "encode-error: U+F567",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF568");
    },
    Error,
    "encode-error: U+F568",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF569");
    },
    Error,
    "encode-error: U+F569",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF56A");
    },
    Error,
    "encode-error: U+F56A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF56B");
    },
    Error,
    "encode-error: U+F56B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF56C");
    },
    Error,
    "encode-error: U+F56C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF56D");
    },
    Error,
    "encode-error: U+F56D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF56E");
    },
    Error,
    "encode-error: U+F56E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF56F");
    },
    Error,
    "encode-error: U+F56F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF570");
    },
    Error,
    "encode-error: U+F570",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF571");
    },
    Error,
    "encode-error: U+F571",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF572");
    },
    Error,
    "encode-error: U+F572",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF573");
    },
    Error,
    "encode-error: U+F573",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF574");
    },
    Error,
    "encode-error: U+F574",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF575");
    },
    Error,
    "encode-error: U+F575",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF576");
    },
    Error,
    "encode-error: U+F576",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF577");
    },
    Error,
    "encode-error: U+F577",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF578");
    },
    Error,
    "encode-error: U+F578",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF579");
    },
    Error,
    "encode-error: U+F579",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF57A");
    },
    Error,
    "encode-error: U+F57A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF57B");
    },
    Error,
    "encode-error: U+F57B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF57C");
    },
    Error,
    "encode-error: U+F57C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF57D");
    },
    Error,
    "encode-error: U+F57D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF57E");
    },
    Error,
    "encode-error: U+F57E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF57F");
    },
    Error,
    "encode-error: U+F57F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF580");
    },
    Error,
    "encode-error: U+F580",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF581");
    },
    Error,
    "encode-error: U+F581",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF582");
    },
    Error,
    "encode-error: U+F582",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF583");
    },
    Error,
    "encode-error: U+F583",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF584");
    },
    Error,
    "encode-error: U+F584",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF585");
    },
    Error,
    "encode-error: U+F585",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF586");
    },
    Error,
    "encode-error: U+F586",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF587");
    },
    Error,
    "encode-error: U+F587",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF588");
    },
    Error,
    "encode-error: U+F588",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF589");
    },
    Error,
    "encode-error: U+F589",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF58A");
    },
    Error,
    "encode-error: U+F58A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF58B");
    },
    Error,
    "encode-error: U+F58B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF58C");
    },
    Error,
    "encode-error: U+F58C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF58D");
    },
    Error,
    "encode-error: U+F58D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF58E");
    },
    Error,
    "encode-error: U+F58E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF58F");
    },
    Error,
    "encode-error: U+F58F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF590");
    },
    Error,
    "encode-error: U+F590",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF591");
    },
    Error,
    "encode-error: U+F591",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF592");
    },
    Error,
    "encode-error: U+F592",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF593");
    },
    Error,
    "encode-error: U+F593",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF594");
    },
    Error,
    "encode-error: U+F594",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF595");
    },
    Error,
    "encode-error: U+F595",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF596");
    },
    Error,
    "encode-error: U+F596",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF597");
    },
    Error,
    "encode-error: U+F597",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF598");
    },
    Error,
    "encode-error: U+F598",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF599");
    },
    Error,
    "encode-error: U+F599",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF59A");
    },
    Error,
    "encode-error: U+F59A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF59B");
    },
    Error,
    "encode-error: U+F59B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF59C");
    },
    Error,
    "encode-error: U+F59C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF59D");
    },
    Error,
    "encode-error: U+F59D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF59E");
    },
    Error,
    "encode-error: U+F59E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF59F");
    },
    Error,
    "encode-error: U+F59F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A0");
    },
    Error,
    "encode-error: U+F5A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A1");
    },
    Error,
    "encode-error: U+F5A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A2");
    },
    Error,
    "encode-error: U+F5A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A3");
    },
    Error,
    "encode-error: U+F5A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A4");
    },
    Error,
    "encode-error: U+F5A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A5");
    },
    Error,
    "encode-error: U+F5A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A6");
    },
    Error,
    "encode-error: U+F5A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A7");
    },
    Error,
    "encode-error: U+F5A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A8");
    },
    Error,
    "encode-error: U+F5A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5A9");
    },
    Error,
    "encode-error: U+F5A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5AA");
    },
    Error,
    "encode-error: U+F5AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5AB");
    },
    Error,
    "encode-error: U+F5AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5AC");
    },
    Error,
    "encode-error: U+F5AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5AD");
    },
    Error,
    "encode-error: U+F5AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5AE");
    },
    Error,
    "encode-error: U+F5AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5AF");
    },
    Error,
    "encode-error: U+F5AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B0");
    },
    Error,
    "encode-error: U+F5B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B1");
    },
    Error,
    "encode-error: U+F5B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B2");
    },
    Error,
    "encode-error: U+F5B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B3");
    },
    Error,
    "encode-error: U+F5B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B4");
    },
    Error,
    "encode-error: U+F5B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B5");
    },
    Error,
    "encode-error: U+F5B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B6");
    },
    Error,
    "encode-error: U+F5B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B7");
    },
    Error,
    "encode-error: U+F5B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B8");
    },
    Error,
    "encode-error: U+F5B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5B9");
    },
    Error,
    "encode-error: U+F5B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5BA");
    },
    Error,
    "encode-error: U+F5BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5BB");
    },
    Error,
    "encode-error: U+F5BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5BC");
    },
    Error,
    "encode-error: U+F5BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5BD");
    },
    Error,
    "encode-error: U+F5BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5BE");
    },
    Error,
    "encode-error: U+F5BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5BF");
    },
    Error,
    "encode-error: U+F5BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C0");
    },
    Error,
    "encode-error: U+F5C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C1");
    },
    Error,
    "encode-error: U+F5C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C2");
    },
    Error,
    "encode-error: U+F5C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C3");
    },
    Error,
    "encode-error: U+F5C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C4");
    },
    Error,
    "encode-error: U+F5C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C5");
    },
    Error,
    "encode-error: U+F5C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C6");
    },
    Error,
    "encode-error: U+F5C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C7");
    },
    Error,
    "encode-error: U+F5C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C8");
    },
    Error,
    "encode-error: U+F5C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5C9");
    },
    Error,
    "encode-error: U+F5C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5CA");
    },
    Error,
    "encode-error: U+F5CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5CB");
    },
    Error,
    "encode-error: U+F5CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5CC");
    },
    Error,
    "encode-error: U+F5CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5CD");
    },
    Error,
    "encode-error: U+F5CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5CE");
    },
    Error,
    "encode-error: U+F5CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5CF");
    },
    Error,
    "encode-error: U+F5CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D0");
    },
    Error,
    "encode-error: U+F5D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D1");
    },
    Error,
    "encode-error: U+F5D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D2");
    },
    Error,
    "encode-error: U+F5D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D3");
    },
    Error,
    "encode-error: U+F5D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D4");
    },
    Error,
    "encode-error: U+F5D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D5");
    },
    Error,
    "encode-error: U+F5D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D6");
    },
    Error,
    "encode-error: U+F5D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D7");
    },
    Error,
    "encode-error: U+F5D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D8");
    },
    Error,
    "encode-error: U+F5D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5D9");
    },
    Error,
    "encode-error: U+F5D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5DA");
    },
    Error,
    "encode-error: U+F5DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5DB");
    },
    Error,
    "encode-error: U+F5DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5DC");
    },
    Error,
    "encode-error: U+F5DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5DD");
    },
    Error,
    "encode-error: U+F5DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5DE");
    },
    Error,
    "encode-error: U+F5DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5DF");
    },
    Error,
    "encode-error: U+F5DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E0");
    },
    Error,
    "encode-error: U+F5E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E1");
    },
    Error,
    "encode-error: U+F5E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E2");
    },
    Error,
    "encode-error: U+F5E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E3");
    },
    Error,
    "encode-error: U+F5E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E4");
    },
    Error,
    "encode-error: U+F5E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E5");
    },
    Error,
    "encode-error: U+F5E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E6");
    },
    Error,
    "encode-error: U+F5E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E7");
    },
    Error,
    "encode-error: U+F5E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E8");
    },
    Error,
    "encode-error: U+F5E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5E9");
    },
    Error,
    "encode-error: U+F5E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5EA");
    },
    Error,
    "encode-error: U+F5EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5EB");
    },
    Error,
    "encode-error: U+F5EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5EC");
    },
    Error,
    "encode-error: U+F5EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5ED");
    },
    Error,
    "encode-error: U+F5ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5EE");
    },
    Error,
    "encode-error: U+F5EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5EF");
    },
    Error,
    "encode-error: U+F5EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F0");
    },
    Error,
    "encode-error: U+F5F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F1");
    },
    Error,
    "encode-error: U+F5F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F2");
    },
    Error,
    "encode-error: U+F5F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F3");
    },
    Error,
    "encode-error: U+F5F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F4");
    },
    Error,
    "encode-error: U+F5F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F5");
    },
    Error,
    "encode-error: U+F5F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F6");
    },
    Error,
    "encode-error: U+F5F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F7");
    },
    Error,
    "encode-error: U+F5F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F8");
    },
    Error,
    "encode-error: U+F5F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5F9");
    },
    Error,
    "encode-error: U+F5F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5FA");
    },
    Error,
    "encode-error: U+F5FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5FB");
    },
    Error,
    "encode-error: U+F5FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5FC");
    },
    Error,
    "encode-error: U+F5FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5FD");
    },
    Error,
    "encode-error: U+F5FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5FE");
    },
    Error,
    "encode-error: U+F5FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF5FF");
    },
    Error,
    "encode-error: U+F5FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF600");
    },
    Error,
    "encode-error: U+F600",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF601");
    },
    Error,
    "encode-error: U+F601",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF602");
    },
    Error,
    "encode-error: U+F602",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF603");
    },
    Error,
    "encode-error: U+F603",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF604");
    },
    Error,
    "encode-error: U+F604",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF605");
    },
    Error,
    "encode-error: U+F605",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF606");
    },
    Error,
    "encode-error: U+F606",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF607");
    },
    Error,
    "encode-error: U+F607",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF608");
    },
    Error,
    "encode-error: U+F608",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF609");
    },
    Error,
    "encode-error: U+F609",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF60A");
    },
    Error,
    "encode-error: U+F60A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF60B");
    },
    Error,
    "encode-error: U+F60B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF60C");
    },
    Error,
    "encode-error: U+F60C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF60D");
    },
    Error,
    "encode-error: U+F60D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF60E");
    },
    Error,
    "encode-error: U+F60E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF60F");
    },
    Error,
    "encode-error: U+F60F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF610");
    },
    Error,
    "encode-error: U+F610",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF611");
    },
    Error,
    "encode-error: U+F611",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF612");
    },
    Error,
    "encode-error: U+F612",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF613");
    },
    Error,
    "encode-error: U+F613",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF614");
    },
    Error,
    "encode-error: U+F614",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF615");
    },
    Error,
    "encode-error: U+F615",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF616");
    },
    Error,
    "encode-error: U+F616",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF617");
    },
    Error,
    "encode-error: U+F617",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF618");
    },
    Error,
    "encode-error: U+F618",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF619");
    },
    Error,
    "encode-error: U+F619",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF61A");
    },
    Error,
    "encode-error: U+F61A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF61B");
    },
    Error,
    "encode-error: U+F61B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF61C");
    },
    Error,
    "encode-error: U+F61C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF61D");
    },
    Error,
    "encode-error: U+F61D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF61E");
    },
    Error,
    "encode-error: U+F61E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF61F");
    },
    Error,
    "encode-error: U+F61F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF620");
    },
    Error,
    "encode-error: U+F620",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF621");
    },
    Error,
    "encode-error: U+F621",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF622");
    },
    Error,
    "encode-error: U+F622",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF623");
    },
    Error,
    "encode-error: U+F623",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF624");
    },
    Error,
    "encode-error: U+F624",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF625");
    },
    Error,
    "encode-error: U+F625",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF626");
    },
    Error,
    "encode-error: U+F626",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF627");
    },
    Error,
    "encode-error: U+F627",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF628");
    },
    Error,
    "encode-error: U+F628",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF629");
    },
    Error,
    "encode-error: U+F629",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF62A");
    },
    Error,
    "encode-error: U+F62A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF62B");
    },
    Error,
    "encode-error: U+F62B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF62C");
    },
    Error,
    "encode-error: U+F62C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF62D");
    },
    Error,
    "encode-error: U+F62D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF62E");
    },
    Error,
    "encode-error: U+F62E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF62F");
    },
    Error,
    "encode-error: U+F62F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF630");
    },
    Error,
    "encode-error: U+F630",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF631");
    },
    Error,
    "encode-error: U+F631",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF632");
    },
    Error,
    "encode-error: U+F632",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF633");
    },
    Error,
    "encode-error: U+F633",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF634");
    },
    Error,
    "encode-error: U+F634",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF635");
    },
    Error,
    "encode-error: U+F635",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF636");
    },
    Error,
    "encode-error: U+F636",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF637");
    },
    Error,
    "encode-error: U+F637",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF638");
    },
    Error,
    "encode-error: U+F638",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF639");
    },
    Error,
    "encode-error: U+F639",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF63A");
    },
    Error,
    "encode-error: U+F63A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF63B");
    },
    Error,
    "encode-error: U+F63B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF63C");
    },
    Error,
    "encode-error: U+F63C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF63D");
    },
    Error,
    "encode-error: U+F63D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF63E");
    },
    Error,
    "encode-error: U+F63E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF63F");
    },
    Error,
    "encode-error: U+F63F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF640");
    },
    Error,
    "encode-error: U+F640",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF641");
    },
    Error,
    "encode-error: U+F641",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF642");
    },
    Error,
    "encode-error: U+F642",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF643");
    },
    Error,
    "encode-error: U+F643",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF644");
    },
    Error,
    "encode-error: U+F644",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF645");
    },
    Error,
    "encode-error: U+F645",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF646");
    },
    Error,
    "encode-error: U+F646",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF647");
    },
    Error,
    "encode-error: U+F647",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF648");
    },
    Error,
    "encode-error: U+F648",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF649");
    },
    Error,
    "encode-error: U+F649",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF64A");
    },
    Error,
    "encode-error: U+F64A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF64B");
    },
    Error,
    "encode-error: U+F64B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF64C");
    },
    Error,
    "encode-error: U+F64C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF64D");
    },
    Error,
    "encode-error: U+F64D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF64E");
    },
    Error,
    "encode-error: U+F64E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF64F");
    },
    Error,
    "encode-error: U+F64F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF650");
    },
    Error,
    "encode-error: U+F650",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF651");
    },
    Error,
    "encode-error: U+F651",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF652");
    },
    Error,
    "encode-error: U+F652",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF653");
    },
    Error,
    "encode-error: U+F653",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF654");
    },
    Error,
    "encode-error: U+F654",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF655");
    },
    Error,
    "encode-error: U+F655",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF656");
    },
    Error,
    "encode-error: U+F656",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF657");
    },
    Error,
    "encode-error: U+F657",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF658");
    },
    Error,
    "encode-error: U+F658",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF659");
    },
    Error,
    "encode-error: U+F659",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF65A");
    },
    Error,
    "encode-error: U+F65A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF65B");
    },
    Error,
    "encode-error: U+F65B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF65C");
    },
    Error,
    "encode-error: U+F65C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF65D");
    },
    Error,
    "encode-error: U+F65D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF65E");
    },
    Error,
    "encode-error: U+F65E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF65F");
    },
    Error,
    "encode-error: U+F65F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF660");
    },
    Error,
    "encode-error: U+F660",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF661");
    },
    Error,
    "encode-error: U+F661",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF662");
    },
    Error,
    "encode-error: U+F662",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF663");
    },
    Error,
    "encode-error: U+F663",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF664");
    },
    Error,
    "encode-error: U+F664",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF665");
    },
    Error,
    "encode-error: U+F665",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF666");
    },
    Error,
    "encode-error: U+F666",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF667");
    },
    Error,
    "encode-error: U+F667",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF668");
    },
    Error,
    "encode-error: U+F668",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF669");
    },
    Error,
    "encode-error: U+F669",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF66A");
    },
    Error,
    "encode-error: U+F66A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF66B");
    },
    Error,
    "encode-error: U+F66B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF66C");
    },
    Error,
    "encode-error: U+F66C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF66D");
    },
    Error,
    "encode-error: U+F66D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF66E");
    },
    Error,
    "encode-error: U+F66E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF66F");
    },
    Error,
    "encode-error: U+F66F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF670");
    },
    Error,
    "encode-error: U+F670",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF671");
    },
    Error,
    "encode-error: U+F671",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF672");
    },
    Error,
    "encode-error: U+F672",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF673");
    },
    Error,
    "encode-error: U+F673",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF674");
    },
    Error,
    "encode-error: U+F674",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF675");
    },
    Error,
    "encode-error: U+F675",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF676");
    },
    Error,
    "encode-error: U+F676",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF677");
    },
    Error,
    "encode-error: U+F677",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF678");
    },
    Error,
    "encode-error: U+F678",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF679");
    },
    Error,
    "encode-error: U+F679",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF67A");
    },
    Error,
    "encode-error: U+F67A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF67B");
    },
    Error,
    "encode-error: U+F67B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF67C");
    },
    Error,
    "encode-error: U+F67C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF67D");
    },
    Error,
    "encode-error: U+F67D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF67E");
    },
    Error,
    "encode-error: U+F67E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF67F");
    },
    Error,
    "encode-error: U+F67F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF680");
    },
    Error,
    "encode-error: U+F680",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF681");
    },
    Error,
    "encode-error: U+F681",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF682");
    },
    Error,
    "encode-error: U+F682",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF683");
    },
    Error,
    "encode-error: U+F683",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF684");
    },
    Error,
    "encode-error: U+F684",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF685");
    },
    Error,
    "encode-error: U+F685",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF686");
    },
    Error,
    "encode-error: U+F686",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF687");
    },
    Error,
    "encode-error: U+F687",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF688");
    },
    Error,
    "encode-error: U+F688",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF689");
    },
    Error,
    "encode-error: U+F689",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF68A");
    },
    Error,
    "encode-error: U+F68A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF68B");
    },
    Error,
    "encode-error: U+F68B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF68C");
    },
    Error,
    "encode-error: U+F68C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF68D");
    },
    Error,
    "encode-error: U+F68D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF68E");
    },
    Error,
    "encode-error: U+F68E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF68F");
    },
    Error,
    "encode-error: U+F68F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF690");
    },
    Error,
    "encode-error: U+F690",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF691");
    },
    Error,
    "encode-error: U+F691",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF692");
    },
    Error,
    "encode-error: U+F692",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF693");
    },
    Error,
    "encode-error: U+F693",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF694");
    },
    Error,
    "encode-error: U+F694",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF695");
    },
    Error,
    "encode-error: U+F695",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF696");
    },
    Error,
    "encode-error: U+F696",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF697");
    },
    Error,
    "encode-error: U+F697",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF698");
    },
    Error,
    "encode-error: U+F698",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF699");
    },
    Error,
    "encode-error: U+F699",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF69A");
    },
    Error,
    "encode-error: U+F69A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF69B");
    },
    Error,
    "encode-error: U+F69B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF69C");
    },
    Error,
    "encode-error: U+F69C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF69D");
    },
    Error,
    "encode-error: U+F69D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF69E");
    },
    Error,
    "encode-error: U+F69E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF69F");
    },
    Error,
    "encode-error: U+F69F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A0");
    },
    Error,
    "encode-error: U+F6A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A1");
    },
    Error,
    "encode-error: U+F6A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A2");
    },
    Error,
    "encode-error: U+F6A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A3");
    },
    Error,
    "encode-error: U+F6A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A4");
    },
    Error,
    "encode-error: U+F6A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A5");
    },
    Error,
    "encode-error: U+F6A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A6");
    },
    Error,
    "encode-error: U+F6A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A7");
    },
    Error,
    "encode-error: U+F6A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A8");
    },
    Error,
    "encode-error: U+F6A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6A9");
    },
    Error,
    "encode-error: U+F6A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6AA");
    },
    Error,
    "encode-error: U+F6AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6AB");
    },
    Error,
    "encode-error: U+F6AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6AC");
    },
    Error,
    "encode-error: U+F6AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6AD");
    },
    Error,
    "encode-error: U+F6AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6AE");
    },
    Error,
    "encode-error: U+F6AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6AF");
    },
    Error,
    "encode-error: U+F6AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B0");
    },
    Error,
    "encode-error: U+F6B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B1");
    },
    Error,
    "encode-error: U+F6B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B2");
    },
    Error,
    "encode-error: U+F6B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B3");
    },
    Error,
    "encode-error: U+F6B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B4");
    },
    Error,
    "encode-error: U+F6B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B5");
    },
    Error,
    "encode-error: U+F6B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B6");
    },
    Error,
    "encode-error: U+F6B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B7");
    },
    Error,
    "encode-error: U+F6B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B8");
    },
    Error,
    "encode-error: U+F6B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6B9");
    },
    Error,
    "encode-error: U+F6B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6BA");
    },
    Error,
    "encode-error: U+F6BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6BB");
    },
    Error,
    "encode-error: U+F6BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6BC");
    },
    Error,
    "encode-error: U+F6BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6BD");
    },
    Error,
    "encode-error: U+F6BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6BE");
    },
    Error,
    "encode-error: U+F6BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6BF");
    },
    Error,
    "encode-error: U+F6BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C0");
    },
    Error,
    "encode-error: U+F6C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C1");
    },
    Error,
    "encode-error: U+F6C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C2");
    },
    Error,
    "encode-error: U+F6C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C3");
    },
    Error,
    "encode-error: U+F6C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C4");
    },
    Error,
    "encode-error: U+F6C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C5");
    },
    Error,
    "encode-error: U+F6C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C6");
    },
    Error,
    "encode-error: U+F6C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C7");
    },
    Error,
    "encode-error: U+F6C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C8");
    },
    Error,
    "encode-error: U+F6C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6C9");
    },
    Error,
    "encode-error: U+F6C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6CA");
    },
    Error,
    "encode-error: U+F6CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6CB");
    },
    Error,
    "encode-error: U+F6CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6CC");
    },
    Error,
    "encode-error: U+F6CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6CD");
    },
    Error,
    "encode-error: U+F6CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6CE");
    },
    Error,
    "encode-error: U+F6CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6CF");
    },
    Error,
    "encode-error: U+F6CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D0");
    },
    Error,
    "encode-error: U+F6D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D1");
    },
    Error,
    "encode-error: U+F6D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D2");
    },
    Error,
    "encode-error: U+F6D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D3");
    },
    Error,
    "encode-error: U+F6D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D4");
    },
    Error,
    "encode-error: U+F6D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D5");
    },
    Error,
    "encode-error: U+F6D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D6");
    },
    Error,
    "encode-error: U+F6D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D7");
    },
    Error,
    "encode-error: U+F6D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D8");
    },
    Error,
    "encode-error: U+F6D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6D9");
    },
    Error,
    "encode-error: U+F6D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6DA");
    },
    Error,
    "encode-error: U+F6DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6DB");
    },
    Error,
    "encode-error: U+F6DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6DC");
    },
    Error,
    "encode-error: U+F6DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6DD");
    },
    Error,
    "encode-error: U+F6DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6DE");
    },
    Error,
    "encode-error: U+F6DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6DF");
    },
    Error,
    "encode-error: U+F6DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E0");
    },
    Error,
    "encode-error: U+F6E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E1");
    },
    Error,
    "encode-error: U+F6E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E2");
    },
    Error,
    "encode-error: U+F6E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E3");
    },
    Error,
    "encode-error: U+F6E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E4");
    },
    Error,
    "encode-error: U+F6E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E5");
    },
    Error,
    "encode-error: U+F6E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E6");
    },
    Error,
    "encode-error: U+F6E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E7");
    },
    Error,
    "encode-error: U+F6E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E8");
    },
    Error,
    "encode-error: U+F6E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6E9");
    },
    Error,
    "encode-error: U+F6E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6EA");
    },
    Error,
    "encode-error: U+F6EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6EB");
    },
    Error,
    "encode-error: U+F6EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6EC");
    },
    Error,
    "encode-error: U+F6EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6ED");
    },
    Error,
    "encode-error: U+F6ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6EE");
    },
    Error,
    "encode-error: U+F6EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6EF");
    },
    Error,
    "encode-error: U+F6EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F0");
    },
    Error,
    "encode-error: U+F6F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F1");
    },
    Error,
    "encode-error: U+F6F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F2");
    },
    Error,
    "encode-error: U+F6F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F3");
    },
    Error,
    "encode-error: U+F6F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F4");
    },
    Error,
    "encode-error: U+F6F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F5");
    },
    Error,
    "encode-error: U+F6F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F6");
    },
    Error,
    "encode-error: U+F6F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F7");
    },
    Error,
    "encode-error: U+F6F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F8");
    },
    Error,
    "encode-error: U+F6F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6F9");
    },
    Error,
    "encode-error: U+F6F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6FA");
    },
    Error,
    "encode-error: U+F6FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6FB");
    },
    Error,
    "encode-error: U+F6FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6FC");
    },
    Error,
    "encode-error: U+F6FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6FD");
    },
    Error,
    "encode-error: U+F6FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6FE");
    },
    Error,
    "encode-error: U+F6FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF6FF");
    },
    Error,
    "encode-error: U+F6FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF700");
    },
    Error,
    "encode-error: U+F700",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF701");
    },
    Error,
    "encode-error: U+F701",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF702");
    },
    Error,
    "encode-error: U+F702",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF703");
    },
    Error,
    "encode-error: U+F703",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF704");
    },
    Error,
    "encode-error: U+F704",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF705");
    },
    Error,
    "encode-error: U+F705",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF706");
    },
    Error,
    "encode-error: U+F706",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF707");
    },
    Error,
    "encode-error: U+F707",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF708");
    },
    Error,
    "encode-error: U+F708",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF709");
    },
    Error,
    "encode-error: U+F709",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF70A");
    },
    Error,
    "encode-error: U+F70A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF70B");
    },
    Error,
    "encode-error: U+F70B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF70C");
    },
    Error,
    "encode-error: U+F70C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF70D");
    },
    Error,
    "encode-error: U+F70D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF70E");
    },
    Error,
    "encode-error: U+F70E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF70F");
    },
    Error,
    "encode-error: U+F70F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF710");
    },
    Error,
    "encode-error: U+F710",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF711");
    },
    Error,
    "encode-error: U+F711",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF712");
    },
    Error,
    "encode-error: U+F712",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF713");
    },
    Error,
    "encode-error: U+F713",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF714");
    },
    Error,
    "encode-error: U+F714",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF715");
    },
    Error,
    "encode-error: U+F715",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF716");
    },
    Error,
    "encode-error: U+F716",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF717");
    },
    Error,
    "encode-error: U+F717",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF718");
    },
    Error,
    "encode-error: U+F718",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF719");
    },
    Error,
    "encode-error: U+F719",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF71A");
    },
    Error,
    "encode-error: U+F71A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF71B");
    },
    Error,
    "encode-error: U+F71B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF71C");
    },
    Error,
    "encode-error: U+F71C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF71D");
    },
    Error,
    "encode-error: U+F71D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF71E");
    },
    Error,
    "encode-error: U+F71E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF71F");
    },
    Error,
    "encode-error: U+F71F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF720");
    },
    Error,
    "encode-error: U+F720",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF721");
    },
    Error,
    "encode-error: U+F721",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF722");
    },
    Error,
    "encode-error: U+F722",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF723");
    },
    Error,
    "encode-error: U+F723",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF724");
    },
    Error,
    "encode-error: U+F724",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF725");
    },
    Error,
    "encode-error: U+F725",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF726");
    },
    Error,
    "encode-error: U+F726",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF727");
    },
    Error,
    "encode-error: U+F727",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF728");
    },
    Error,
    "encode-error: U+F728",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF729");
    },
    Error,
    "encode-error: U+F729",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF72A");
    },
    Error,
    "encode-error: U+F72A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF72B");
    },
    Error,
    "encode-error: U+F72B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF72C");
    },
    Error,
    "encode-error: U+F72C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF72D");
    },
    Error,
    "encode-error: U+F72D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF72E");
    },
    Error,
    "encode-error: U+F72E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF72F");
    },
    Error,
    "encode-error: U+F72F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF730");
    },
    Error,
    "encode-error: U+F730",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF731");
    },
    Error,
    "encode-error: U+F731",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF732");
    },
    Error,
    "encode-error: U+F732",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF733");
    },
    Error,
    "encode-error: U+F733",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF734");
    },
    Error,
    "encode-error: U+F734",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF735");
    },
    Error,
    "encode-error: U+F735",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF736");
    },
    Error,
    "encode-error: U+F736",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF737");
    },
    Error,
    "encode-error: U+F737",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF738");
    },
    Error,
    "encode-error: U+F738",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF739");
    },
    Error,
    "encode-error: U+F739",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF73A");
    },
    Error,
    "encode-error: U+F73A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF73B");
    },
    Error,
    "encode-error: U+F73B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF73C");
    },
    Error,
    "encode-error: U+F73C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF73D");
    },
    Error,
    "encode-error: U+F73D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF73E");
    },
    Error,
    "encode-error: U+F73E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF73F");
    },
    Error,
    "encode-error: U+F73F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF740");
    },
    Error,
    "encode-error: U+F740",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF741");
    },
    Error,
    "encode-error: U+F741",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF742");
    },
    Error,
    "encode-error: U+F742",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF743");
    },
    Error,
    "encode-error: U+F743",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF744");
    },
    Error,
    "encode-error: U+F744",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF745");
    },
    Error,
    "encode-error: U+F745",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF746");
    },
    Error,
    "encode-error: U+F746",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF747");
    },
    Error,
    "encode-error: U+F747",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF748");
    },
    Error,
    "encode-error: U+F748",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF749");
    },
    Error,
    "encode-error: U+F749",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF74A");
    },
    Error,
    "encode-error: U+F74A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF74B");
    },
    Error,
    "encode-error: U+F74B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF74C");
    },
    Error,
    "encode-error: U+F74C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF74D");
    },
    Error,
    "encode-error: U+F74D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF74E");
    },
    Error,
    "encode-error: U+F74E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF74F");
    },
    Error,
    "encode-error: U+F74F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF750");
    },
    Error,
    "encode-error: U+F750",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF751");
    },
    Error,
    "encode-error: U+F751",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF752");
    },
    Error,
    "encode-error: U+F752",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF753");
    },
    Error,
    "encode-error: U+F753",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF754");
    },
    Error,
    "encode-error: U+F754",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF755");
    },
    Error,
    "encode-error: U+F755",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF756");
    },
    Error,
    "encode-error: U+F756",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF757");
    },
    Error,
    "encode-error: U+F757",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF758");
    },
    Error,
    "encode-error: U+F758",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF759");
    },
    Error,
    "encode-error: U+F759",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF75A");
    },
    Error,
    "encode-error: U+F75A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF75B");
    },
    Error,
    "encode-error: U+F75B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF75C");
    },
    Error,
    "encode-error: U+F75C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF75D");
    },
    Error,
    "encode-error: U+F75D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF75E");
    },
    Error,
    "encode-error: U+F75E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF75F");
    },
    Error,
    "encode-error: U+F75F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF760");
    },
    Error,
    "encode-error: U+F760",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF761");
    },
    Error,
    "encode-error: U+F761",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF762");
    },
    Error,
    "encode-error: U+F762",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF763");
    },
    Error,
    "encode-error: U+F763",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF764");
    },
    Error,
    "encode-error: U+F764",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF765");
    },
    Error,
    "encode-error: U+F765",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF766");
    },
    Error,
    "encode-error: U+F766",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF767");
    },
    Error,
    "encode-error: U+F767",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF768");
    },
    Error,
    "encode-error: U+F768",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF769");
    },
    Error,
    "encode-error: U+F769",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF76A");
    },
    Error,
    "encode-error: U+F76A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF76B");
    },
    Error,
    "encode-error: U+F76B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF76C");
    },
    Error,
    "encode-error: U+F76C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF76D");
    },
    Error,
    "encode-error: U+F76D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF76E");
    },
    Error,
    "encode-error: U+F76E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF76F");
    },
    Error,
    "encode-error: U+F76F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF770");
    },
    Error,
    "encode-error: U+F770",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF771");
    },
    Error,
    "encode-error: U+F771",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF772");
    },
    Error,
    "encode-error: U+F772",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF773");
    },
    Error,
    "encode-error: U+F773",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF774");
    },
    Error,
    "encode-error: U+F774",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF775");
    },
    Error,
    "encode-error: U+F775",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF776");
    },
    Error,
    "encode-error: U+F776",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF777");
    },
    Error,
    "encode-error: U+F777",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF778");
    },
    Error,
    "encode-error: U+F778",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF779");
    },
    Error,
    "encode-error: U+F779",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF77A");
    },
    Error,
    "encode-error: U+F77A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF77B");
    },
    Error,
    "encode-error: U+F77B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF77C");
    },
    Error,
    "encode-error: U+F77C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF77D");
    },
    Error,
    "encode-error: U+F77D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF77E");
    },
    Error,
    "encode-error: U+F77E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF77F");
    },
    Error,
    "encode-error: U+F77F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF780");
    },
    Error,
    "encode-error: U+F780",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF781");
    },
    Error,
    "encode-error: U+F781",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF782");
    },
    Error,
    "encode-error: U+F782",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF783");
    },
    Error,
    "encode-error: U+F783",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF784");
    },
    Error,
    "encode-error: U+F784",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF785");
    },
    Error,
    "encode-error: U+F785",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF786");
    },
    Error,
    "encode-error: U+F786",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF787");
    },
    Error,
    "encode-error: U+F787",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF788");
    },
    Error,
    "encode-error: U+F788",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF789");
    },
    Error,
    "encode-error: U+F789",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF78A");
    },
    Error,
    "encode-error: U+F78A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF78B");
    },
    Error,
    "encode-error: U+F78B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF78C");
    },
    Error,
    "encode-error: U+F78C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF78D");
    },
    Error,
    "encode-error: U+F78D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF78E");
    },
    Error,
    "encode-error: U+F78E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF78F");
    },
    Error,
    "encode-error: U+F78F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF790");
    },
    Error,
    "encode-error: U+F790",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF791");
    },
    Error,
    "encode-error: U+F791",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF792");
    },
    Error,
    "encode-error: U+F792",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF793");
    },
    Error,
    "encode-error: U+F793",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF794");
    },
    Error,
    "encode-error: U+F794",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF795");
    },
    Error,
    "encode-error: U+F795",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF796");
    },
    Error,
    "encode-error: U+F796",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF797");
    },
    Error,
    "encode-error: U+F797",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF798");
    },
    Error,
    "encode-error: U+F798",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF799");
    },
    Error,
    "encode-error: U+F799",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF79A");
    },
    Error,
    "encode-error: U+F79A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF79B");
    },
    Error,
    "encode-error: U+F79B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF79C");
    },
    Error,
    "encode-error: U+F79C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF79D");
    },
    Error,
    "encode-error: U+F79D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF79E");
    },
    Error,
    "encode-error: U+F79E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF79F");
    },
    Error,
    "encode-error: U+F79F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A0");
    },
    Error,
    "encode-error: U+F7A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A1");
    },
    Error,
    "encode-error: U+F7A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A2");
    },
    Error,
    "encode-error: U+F7A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A3");
    },
    Error,
    "encode-error: U+F7A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A4");
    },
    Error,
    "encode-error: U+F7A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A5");
    },
    Error,
    "encode-error: U+F7A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A6");
    },
    Error,
    "encode-error: U+F7A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A7");
    },
    Error,
    "encode-error: U+F7A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A8");
    },
    Error,
    "encode-error: U+F7A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7A9");
    },
    Error,
    "encode-error: U+F7A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7AA");
    },
    Error,
    "encode-error: U+F7AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7AB");
    },
    Error,
    "encode-error: U+F7AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7AC");
    },
    Error,
    "encode-error: U+F7AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7AD");
    },
    Error,
    "encode-error: U+F7AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7AE");
    },
    Error,
    "encode-error: U+F7AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7AF");
    },
    Error,
    "encode-error: U+F7AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B0");
    },
    Error,
    "encode-error: U+F7B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B1");
    },
    Error,
    "encode-error: U+F7B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B2");
    },
    Error,
    "encode-error: U+F7B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B3");
    },
    Error,
    "encode-error: U+F7B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B4");
    },
    Error,
    "encode-error: U+F7B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B5");
    },
    Error,
    "encode-error: U+F7B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B6");
    },
    Error,
    "encode-error: U+F7B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B7");
    },
    Error,
    "encode-error: U+F7B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B8");
    },
    Error,
    "encode-error: U+F7B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7B9");
    },
    Error,
    "encode-error: U+F7B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7BA");
    },
    Error,
    "encode-error: U+F7BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7BB");
    },
    Error,
    "encode-error: U+F7BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7BC");
    },
    Error,
    "encode-error: U+F7BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7BD");
    },
    Error,
    "encode-error: U+F7BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7BE");
    },
    Error,
    "encode-error: U+F7BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7BF");
    },
    Error,
    "encode-error: U+F7BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C0");
    },
    Error,
    "encode-error: U+F7C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C1");
    },
    Error,
    "encode-error: U+F7C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C2");
    },
    Error,
    "encode-error: U+F7C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C3");
    },
    Error,
    "encode-error: U+F7C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C4");
    },
    Error,
    "encode-error: U+F7C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C5");
    },
    Error,
    "encode-error: U+F7C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C6");
    },
    Error,
    "encode-error: U+F7C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C7");
    },
    Error,
    "encode-error: U+F7C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C8");
    },
    Error,
    "encode-error: U+F7C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7C9");
    },
    Error,
    "encode-error: U+F7C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7CA");
    },
    Error,
    "encode-error: U+F7CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7CB");
    },
    Error,
    "encode-error: U+F7CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7CC");
    },
    Error,
    "encode-error: U+F7CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7CD");
    },
    Error,
    "encode-error: U+F7CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7CE");
    },
    Error,
    "encode-error: U+F7CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7CF");
    },
    Error,
    "encode-error: U+F7CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D0");
    },
    Error,
    "encode-error: U+F7D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D1");
    },
    Error,
    "encode-error: U+F7D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D2");
    },
    Error,
    "encode-error: U+F7D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D3");
    },
    Error,
    "encode-error: U+F7D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D4");
    },
    Error,
    "encode-error: U+F7D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D5");
    },
    Error,
    "encode-error: U+F7D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D6");
    },
    Error,
    "encode-error: U+F7D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D7");
    },
    Error,
    "encode-error: U+F7D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D8");
    },
    Error,
    "encode-error: U+F7D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7D9");
    },
    Error,
    "encode-error: U+F7D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7DA");
    },
    Error,
    "encode-error: U+F7DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7DB");
    },
    Error,
    "encode-error: U+F7DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7DC");
    },
    Error,
    "encode-error: U+F7DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7DD");
    },
    Error,
    "encode-error: U+F7DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7DE");
    },
    Error,
    "encode-error: U+F7DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7DF");
    },
    Error,
    "encode-error: U+F7DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E0");
    },
    Error,
    "encode-error: U+F7E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E1");
    },
    Error,
    "encode-error: U+F7E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E2");
    },
    Error,
    "encode-error: U+F7E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E3");
    },
    Error,
    "encode-error: U+F7E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E4");
    },
    Error,
    "encode-error: U+F7E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E5");
    },
    Error,
    "encode-error: U+F7E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E6");
    },
    Error,
    "encode-error: U+F7E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E7");
    },
    Error,
    "encode-error: U+F7E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E8");
    },
    Error,
    "encode-error: U+F7E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7E9");
    },
    Error,
    "encode-error: U+F7E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7EA");
    },
    Error,
    "encode-error: U+F7EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7EB");
    },
    Error,
    "encode-error: U+F7EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7EC");
    },
    Error,
    "encode-error: U+F7EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7ED");
    },
    Error,
    "encode-error: U+F7ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7EE");
    },
    Error,
    "encode-error: U+F7EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7EF");
    },
    Error,
    "encode-error: U+F7EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F0");
    },
    Error,
    "encode-error: U+F7F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F1");
    },
    Error,
    "encode-error: U+F7F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F2");
    },
    Error,
    "encode-error: U+F7F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F3");
    },
    Error,
    "encode-error: U+F7F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F4");
    },
    Error,
    "encode-error: U+F7F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F5");
    },
    Error,
    "encode-error: U+F7F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F6");
    },
    Error,
    "encode-error: U+F7F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F7");
    },
    Error,
    "encode-error: U+F7F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F8");
    },
    Error,
    "encode-error: U+F7F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7F9");
    },
    Error,
    "encode-error: U+F7F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7FA");
    },
    Error,
    "encode-error: U+F7FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7FB");
    },
    Error,
    "encode-error: U+F7FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7FC");
    },
    Error,
    "encode-error: U+F7FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7FD");
    },
    Error,
    "encode-error: U+F7FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7FE");
    },
    Error,
    "encode-error: U+F7FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF7FF");
    },
    Error,
    "encode-error: U+F7FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF800");
    },
    Error,
    "encode-error: U+F800",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF801");
    },
    Error,
    "encode-error: U+F801",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF802");
    },
    Error,
    "encode-error: U+F802",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF803");
    },
    Error,
    "encode-error: U+F803",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF804");
    },
    Error,
    "encode-error: U+F804",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF805");
    },
    Error,
    "encode-error: U+F805",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF806");
    },
    Error,
    "encode-error: U+F806",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF807");
    },
    Error,
    "encode-error: U+F807",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF808");
    },
    Error,
    "encode-error: U+F808",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF809");
    },
    Error,
    "encode-error: U+F809",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF80A");
    },
    Error,
    "encode-error: U+F80A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF80B");
    },
    Error,
    "encode-error: U+F80B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF80C");
    },
    Error,
    "encode-error: U+F80C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF80D");
    },
    Error,
    "encode-error: U+F80D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF80E");
    },
    Error,
    "encode-error: U+F80E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF80F");
    },
    Error,
    "encode-error: U+F80F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF810");
    },
    Error,
    "encode-error: U+F810",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF811");
    },
    Error,
    "encode-error: U+F811",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF812");
    },
    Error,
    "encode-error: U+F812",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF813");
    },
    Error,
    "encode-error: U+F813",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF814");
    },
    Error,
    "encode-error: U+F814",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF815");
    },
    Error,
    "encode-error: U+F815",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF816");
    },
    Error,
    "encode-error: U+F816",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF817");
    },
    Error,
    "encode-error: U+F817",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF818");
    },
    Error,
    "encode-error: U+F818",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF819");
    },
    Error,
    "encode-error: U+F819",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF81A");
    },
    Error,
    "encode-error: U+F81A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF81B");
    },
    Error,
    "encode-error: U+F81B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF81C");
    },
    Error,
    "encode-error: U+F81C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF81D");
    },
    Error,
    "encode-error: U+F81D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF81E");
    },
    Error,
    "encode-error: U+F81E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF81F");
    },
    Error,
    "encode-error: U+F81F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF820");
    },
    Error,
    "encode-error: U+F820",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF821");
    },
    Error,
    "encode-error: U+F821",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF822");
    },
    Error,
    "encode-error: U+F822",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF823");
    },
    Error,
    "encode-error: U+F823",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF824");
    },
    Error,
    "encode-error: U+F824",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF825");
    },
    Error,
    "encode-error: U+F825",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF826");
    },
    Error,
    "encode-error: U+F826",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF827");
    },
    Error,
    "encode-error: U+F827",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF828");
    },
    Error,
    "encode-error: U+F828",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF829");
    },
    Error,
    "encode-error: U+F829",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF82A");
    },
    Error,
    "encode-error: U+F82A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF82B");
    },
    Error,
    "encode-error: U+F82B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF82C");
    },
    Error,
    "encode-error: U+F82C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF82D");
    },
    Error,
    "encode-error: U+F82D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF82E");
    },
    Error,
    "encode-error: U+F82E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF82F");
    },
    Error,
    "encode-error: U+F82F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF830");
    },
    Error,
    "encode-error: U+F830",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF831");
    },
    Error,
    "encode-error: U+F831",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF832");
    },
    Error,
    "encode-error: U+F832",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF833");
    },
    Error,
    "encode-error: U+F833",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF834");
    },
    Error,
    "encode-error: U+F834",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF835");
    },
    Error,
    "encode-error: U+F835",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF836");
    },
    Error,
    "encode-error: U+F836",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF837");
    },
    Error,
    "encode-error: U+F837",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF838");
    },
    Error,
    "encode-error: U+F838",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF839");
    },
    Error,
    "encode-error: U+F839",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF83A");
    },
    Error,
    "encode-error: U+F83A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF83B");
    },
    Error,
    "encode-error: U+F83B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF83C");
    },
    Error,
    "encode-error: U+F83C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF83D");
    },
    Error,
    "encode-error: U+F83D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF83E");
    },
    Error,
    "encode-error: U+F83E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF83F");
    },
    Error,
    "encode-error: U+F83F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF840");
    },
    Error,
    "encode-error: U+F840",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF841");
    },
    Error,
    "encode-error: U+F841",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF842");
    },
    Error,
    "encode-error: U+F842",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF843");
    },
    Error,
    "encode-error: U+F843",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF844");
    },
    Error,
    "encode-error: U+F844",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF845");
    },
    Error,
    "encode-error: U+F845",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF846");
    },
    Error,
    "encode-error: U+F846",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF847");
    },
    Error,
    "encode-error: U+F847",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF848");
    },
    Error,
    "encode-error: U+F848",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF849");
    },
    Error,
    "encode-error: U+F849",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF84A");
    },
    Error,
    "encode-error: U+F84A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF84B");
    },
    Error,
    "encode-error: U+F84B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF84C");
    },
    Error,
    "encode-error: U+F84C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF84D");
    },
    Error,
    "encode-error: U+F84D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF84E");
    },
    Error,
    "encode-error: U+F84E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF84F");
    },
    Error,
    "encode-error: U+F84F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF850");
    },
    Error,
    "encode-error: U+F850",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF851");
    },
    Error,
    "encode-error: U+F851",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF852");
    },
    Error,
    "encode-error: U+F852",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF853");
    },
    Error,
    "encode-error: U+F853",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF854");
    },
    Error,
    "encode-error: U+F854",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF855");
    },
    Error,
    "encode-error: U+F855",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF856");
    },
    Error,
    "encode-error: U+F856",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF857");
    },
    Error,
    "encode-error: U+F857",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF858");
    },
    Error,
    "encode-error: U+F858",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF859");
    },
    Error,
    "encode-error: U+F859",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF85A");
    },
    Error,
    "encode-error: U+F85A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF85B");
    },
    Error,
    "encode-error: U+F85B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF85C");
    },
    Error,
    "encode-error: U+F85C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF85D");
    },
    Error,
    "encode-error: U+F85D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF85E");
    },
    Error,
    "encode-error: U+F85E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF85F");
    },
    Error,
    "encode-error: U+F85F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF860");
    },
    Error,
    "encode-error: U+F860",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF861");
    },
    Error,
    "encode-error: U+F861",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF862");
    },
    Error,
    "encode-error: U+F862",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF863");
    },
    Error,
    "encode-error: U+F863",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF864");
    },
    Error,
    "encode-error: U+F864",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF865");
    },
    Error,
    "encode-error: U+F865",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF866");
    },
    Error,
    "encode-error: U+F866",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF867");
    },
    Error,
    "encode-error: U+F867",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF868");
    },
    Error,
    "encode-error: U+F868",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF869");
    },
    Error,
    "encode-error: U+F869",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF86A");
    },
    Error,
    "encode-error: U+F86A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF86B");
    },
    Error,
    "encode-error: U+F86B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF86C");
    },
    Error,
    "encode-error: U+F86C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF86D");
    },
    Error,
    "encode-error: U+F86D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF86E");
    },
    Error,
    "encode-error: U+F86E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF86F");
    },
    Error,
    "encode-error: U+F86F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF870");
    },
    Error,
    "encode-error: U+F870",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF871");
    },
    Error,
    "encode-error: U+F871",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF872");
    },
    Error,
    "encode-error: U+F872",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF873");
    },
    Error,
    "encode-error: U+F873",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF874");
    },
    Error,
    "encode-error: U+F874",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF875");
    },
    Error,
    "encode-error: U+F875",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF876");
    },
    Error,
    "encode-error: U+F876",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF877");
    },
    Error,
    "encode-error: U+F877",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF878");
    },
    Error,
    "encode-error: U+F878",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF879");
    },
    Error,
    "encode-error: U+F879",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF87A");
    },
    Error,
    "encode-error: U+F87A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF87B");
    },
    Error,
    "encode-error: U+F87B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF87C");
    },
    Error,
    "encode-error: U+F87C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF87D");
    },
    Error,
    "encode-error: U+F87D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF87E");
    },
    Error,
    "encode-error: U+F87E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF87F");
    },
    Error,
    "encode-error: U+F87F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF880");
    },
    Error,
    "encode-error: U+F880",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF881");
    },
    Error,
    "encode-error: U+F881",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF882");
    },
    Error,
    "encode-error: U+F882",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF883");
    },
    Error,
    "encode-error: U+F883",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF884");
    },
    Error,
    "encode-error: U+F884",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF885");
    },
    Error,
    "encode-error: U+F885",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF886");
    },
    Error,
    "encode-error: U+F886",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF887");
    },
    Error,
    "encode-error: U+F887",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF888");
    },
    Error,
    "encode-error: U+F888",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF889");
    },
    Error,
    "encode-error: U+F889",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF88A");
    },
    Error,
    "encode-error: U+F88A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF88B");
    },
    Error,
    "encode-error: U+F88B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF88C");
    },
    Error,
    "encode-error: U+F88C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF88D");
    },
    Error,
    "encode-error: U+F88D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF88E");
    },
    Error,
    "encode-error: U+F88E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF88F");
    },
    Error,
    "encode-error: U+F88F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF890");
    },
    Error,
    "encode-error: U+F890",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF891");
    },
    Error,
    "encode-error: U+F891",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF892");
    },
    Error,
    "encode-error: U+F892",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF893");
    },
    Error,
    "encode-error: U+F893",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF894");
    },
    Error,
    "encode-error: U+F894",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF895");
    },
    Error,
    "encode-error: U+F895",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF896");
    },
    Error,
    "encode-error: U+F896",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF897");
    },
    Error,
    "encode-error: U+F897",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF898");
    },
    Error,
    "encode-error: U+F898",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF899");
    },
    Error,
    "encode-error: U+F899",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF89A");
    },
    Error,
    "encode-error: U+F89A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF89B");
    },
    Error,
    "encode-error: U+F89B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF89C");
    },
    Error,
    "encode-error: U+F89C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF89D");
    },
    Error,
    "encode-error: U+F89D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF89E");
    },
    Error,
    "encode-error: U+F89E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF89F");
    },
    Error,
    "encode-error: U+F89F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A0");
    },
    Error,
    "encode-error: U+F8A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A1");
    },
    Error,
    "encode-error: U+F8A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A2");
    },
    Error,
    "encode-error: U+F8A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A3");
    },
    Error,
    "encode-error: U+F8A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A4");
    },
    Error,
    "encode-error: U+F8A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A5");
    },
    Error,
    "encode-error: U+F8A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A6");
    },
    Error,
    "encode-error: U+F8A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A7");
    },
    Error,
    "encode-error: U+F8A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A8");
    },
    Error,
    "encode-error: U+F8A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8A9");
    },
    Error,
    "encode-error: U+F8A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8AA");
    },
    Error,
    "encode-error: U+F8AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8AB");
    },
    Error,
    "encode-error: U+F8AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8AC");
    },
    Error,
    "encode-error: U+F8AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8AD");
    },
    Error,
    "encode-error: U+F8AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8AE");
    },
    Error,
    "encode-error: U+F8AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8AF");
    },
    Error,
    "encode-error: U+F8AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B0");
    },
    Error,
    "encode-error: U+F8B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B1");
    },
    Error,
    "encode-error: U+F8B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B2");
    },
    Error,
    "encode-error: U+F8B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B3");
    },
    Error,
    "encode-error: U+F8B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B4");
    },
    Error,
    "encode-error: U+F8B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B5");
    },
    Error,
    "encode-error: U+F8B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B6");
    },
    Error,
    "encode-error: U+F8B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B7");
    },
    Error,
    "encode-error: U+F8B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B8");
    },
    Error,
    "encode-error: U+F8B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8B9");
    },
    Error,
    "encode-error: U+F8B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8BA");
    },
    Error,
    "encode-error: U+F8BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8BB");
    },
    Error,
    "encode-error: U+F8BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8BC");
    },
    Error,
    "encode-error: U+F8BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8BD");
    },
    Error,
    "encode-error: U+F8BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8BE");
    },
    Error,
    "encode-error: U+F8BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8BF");
    },
    Error,
    "encode-error: U+F8BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C0");
    },
    Error,
    "encode-error: U+F8C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C1");
    },
    Error,
    "encode-error: U+F8C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C2");
    },
    Error,
    "encode-error: U+F8C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C3");
    },
    Error,
    "encode-error: U+F8C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C4");
    },
    Error,
    "encode-error: U+F8C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C5");
    },
    Error,
    "encode-error: U+F8C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C6");
    },
    Error,
    "encode-error: U+F8C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C7");
    },
    Error,
    "encode-error: U+F8C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C8");
    },
    Error,
    "encode-error: U+F8C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8C9");
    },
    Error,
    "encode-error: U+F8C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8CA");
    },
    Error,
    "encode-error: U+F8CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8CB");
    },
    Error,
    "encode-error: U+F8CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8CC");
    },
    Error,
    "encode-error: U+F8CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8CD");
    },
    Error,
    "encode-error: U+F8CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8CE");
    },
    Error,
    "encode-error: U+F8CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8CF");
    },
    Error,
    "encode-error: U+F8CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D0");
    },
    Error,
    "encode-error: U+F8D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D1");
    },
    Error,
    "encode-error: U+F8D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D2");
    },
    Error,
    "encode-error: U+F8D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D3");
    },
    Error,
    "encode-error: U+F8D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D4");
    },
    Error,
    "encode-error: U+F8D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D5");
    },
    Error,
    "encode-error: U+F8D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D6");
    },
    Error,
    "encode-error: U+F8D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D7");
    },
    Error,
    "encode-error: U+F8D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D8");
    },
    Error,
    "encode-error: U+F8D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8D9");
    },
    Error,
    "encode-error: U+F8D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8DA");
    },
    Error,
    "encode-error: U+F8DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8DB");
    },
    Error,
    "encode-error: U+F8DB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8DC");
    },
    Error,
    "encode-error: U+F8DC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8DD");
    },
    Error,
    "encode-error: U+F8DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8DE");
    },
    Error,
    "encode-error: U+F8DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8DF");
    },
    Error,
    "encode-error: U+F8DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E0");
    },
    Error,
    "encode-error: U+F8E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E1");
    },
    Error,
    "encode-error: U+F8E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E2");
    },
    Error,
    "encode-error: U+F8E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E3");
    },
    Error,
    "encode-error: U+F8E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E4");
    },
    Error,
    "encode-error: U+F8E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E5");
    },
    Error,
    "encode-error: U+F8E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E6");
    },
    Error,
    "encode-error: U+F8E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E7");
    },
    Error,
    "encode-error: U+F8E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E8");
    },
    Error,
    "encode-error: U+F8E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8E9");
    },
    Error,
    "encode-error: U+F8E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8EA");
    },
    Error,
    "encode-error: U+F8EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8EB");
    },
    Error,
    "encode-error: U+F8EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8EC");
    },
    Error,
    "encode-error: U+F8EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8ED");
    },
    Error,
    "encode-error: U+F8ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8EE");
    },
    Error,
    "encode-error: U+F8EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8EF");
    },
    Error,
    "encode-error: U+F8EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F0");
    },
    Error,
    "encode-error: U+F8F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F1");
    },
    Error,
    "encode-error: U+F8F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F2");
    },
    Error,
    "encode-error: U+F8F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F3");
    },
    Error,
    "encode-error: U+F8F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F4");
    },
    Error,
    "encode-error: U+F8F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F5");
    },
    Error,
    "encode-error: U+F8F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F6");
    },
    Error,
    "encode-error: U+F8F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F7");
    },
    Error,
    "encode-error: U+F8F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F8");
    },
    Error,
    "encode-error: U+F8F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8F9");
    },
    Error,
    "encode-error: U+F8F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8FA");
    },
    Error,
    "encode-error: U+F8FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8FB");
    },
    Error,
    "encode-error: U+F8FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8FC");
    },
    Error,
    "encode-error: U+F8FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8FD");
    },
    Error,
    "encode-error: U+F8FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8FE");
    },
    Error,
    "encode-error: U+F8FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF8FF");
    },
    Error,
    "encode-error: U+F8FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF900");
    },
    Error,
    "encode-error: U+F900",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF901");
    },
    Error,
    "encode-error: U+F901",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF902");
    },
    Error,
    "encode-error: U+F902",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF903");
    },
    Error,
    "encode-error: U+F903",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF904");
    },
    Error,
    "encode-error: U+F904",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF905");
    },
    Error,
    "encode-error: U+F905",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF906");
    },
    Error,
    "encode-error: U+F906",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF907");
    },
    Error,
    "encode-error: U+F907",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF908");
    },
    Error,
    "encode-error: U+F908",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF909");
    },
    Error,
    "encode-error: U+F909",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF90A");
    },
    Error,
    "encode-error: U+F90A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF90B");
    },
    Error,
    "encode-error: U+F90B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF90C");
    },
    Error,
    "encode-error: U+F90C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF90D");
    },
    Error,
    "encode-error: U+F90D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF90E");
    },
    Error,
    "encode-error: U+F90E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF90F");
    },
    Error,
    "encode-error: U+F90F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF910");
    },
    Error,
    "encode-error: U+F910",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF911");
    },
    Error,
    "encode-error: U+F911",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF912");
    },
    Error,
    "encode-error: U+F912",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF913");
    },
    Error,
    "encode-error: U+F913",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF914");
    },
    Error,
    "encode-error: U+F914",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF915");
    },
    Error,
    "encode-error: U+F915",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF916");
    },
    Error,
    "encode-error: U+F916",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF917");
    },
    Error,
    "encode-error: U+F917",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF918");
    },
    Error,
    "encode-error: U+F918",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF919");
    },
    Error,
    "encode-error: U+F919",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF91A");
    },
    Error,
    "encode-error: U+F91A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF91B");
    },
    Error,
    "encode-error: U+F91B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF91C");
    },
    Error,
    "encode-error: U+F91C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF91D");
    },
    Error,
    "encode-error: U+F91D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF91E");
    },
    Error,
    "encode-error: U+F91E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF91F");
    },
    Error,
    "encode-error: U+F91F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF920");
    },
    Error,
    "encode-error: U+F920",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF921");
    },
    Error,
    "encode-error: U+F921",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF922");
    },
    Error,
    "encode-error: U+F922",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF923");
    },
    Error,
    "encode-error: U+F923",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF924");
    },
    Error,
    "encode-error: U+F924",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF925");
    },
    Error,
    "encode-error: U+F925",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF926");
    },
    Error,
    "encode-error: U+F926",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF927");
    },
    Error,
    "encode-error: U+F927",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF928");
    },
    Error,
    "encode-error: U+F928",
  );
  r = r && ([...ms932Encoder.encode("朗")].join(",") === "250,224"); // U+F929
  assertThrows(
    () => {
      ms932Encoder.encode("\uF92A");
    },
    Error,
    "encode-error: U+F92A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF92B");
    },
    Error,
    "encode-error: U+F92B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF92C");
    },
    Error,
    "encode-error: U+F92C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF92D");
    },
    Error,
    "encode-error: U+F92D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF92E");
    },
    Error,
    "encode-error: U+F92E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF92F");
    },
    Error,
    "encode-error: U+F92F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF930");
    },
    Error,
    "encode-error: U+F930",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF931");
    },
    Error,
    "encode-error: U+F931",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF932");
    },
    Error,
    "encode-error: U+F932",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF933");
    },
    Error,
    "encode-error: U+F933",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF934");
    },
    Error,
    "encode-error: U+F934",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF935");
    },
    Error,
    "encode-error: U+F935",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF936");
    },
    Error,
    "encode-error: U+F936",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF937");
    },
    Error,
    "encode-error: U+F937",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF938");
    },
    Error,
    "encode-error: U+F938",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF939");
    },
    Error,
    "encode-error: U+F939",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF93A");
    },
    Error,
    "encode-error: U+F93A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF93B");
    },
    Error,
    "encode-error: U+F93B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF93C");
    },
    Error,
    "encode-error: U+F93C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF93D");
    },
    Error,
    "encode-error: U+F93D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF93E");
    },
    Error,
    "encode-error: U+F93E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF93F");
    },
    Error,
    "encode-error: U+F93F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF940");
    },
    Error,
    "encode-error: U+F940",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF941");
    },
    Error,
    "encode-error: U+F941",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF942");
    },
    Error,
    "encode-error: U+F942",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF943");
    },
    Error,
    "encode-error: U+F943",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF944");
    },
    Error,
    "encode-error: U+F944",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF945");
    },
    Error,
    "encode-error: U+F945",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF946");
    },
    Error,
    "encode-error: U+F946",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF947");
    },
    Error,
    "encode-error: U+F947",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF948");
    },
    Error,
    "encode-error: U+F948",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF949");
    },
    Error,
    "encode-error: U+F949",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF94A");
    },
    Error,
    "encode-error: U+F94A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF94B");
    },
    Error,
    "encode-error: U+F94B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF94C");
    },
    Error,
    "encode-error: U+F94C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF94D");
    },
    Error,
    "encode-error: U+F94D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF94E");
    },
    Error,
    "encode-error: U+F94E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF94F");
    },
    Error,
    "encode-error: U+F94F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF950");
    },
    Error,
    "encode-error: U+F950",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF951");
    },
    Error,
    "encode-error: U+F951",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF952");
    },
    Error,
    "encode-error: U+F952",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF953");
    },
    Error,
    "encode-error: U+F953",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF954");
    },
    Error,
    "encode-error: U+F954",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF955");
    },
    Error,
    "encode-error: U+F955",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF956");
    },
    Error,
    "encode-error: U+F956",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF957");
    },
    Error,
    "encode-error: U+F957",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF958");
    },
    Error,
    "encode-error: U+F958",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF959");
    },
    Error,
    "encode-error: U+F959",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF95A");
    },
    Error,
    "encode-error: U+F95A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF95B");
    },
    Error,
    "encode-error: U+F95B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF95C");
    },
    Error,
    "encode-error: U+F95C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF95D");
    },
    Error,
    "encode-error: U+F95D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF95E");
    },
    Error,
    "encode-error: U+F95E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF95F");
    },
    Error,
    "encode-error: U+F95F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF960");
    },
    Error,
    "encode-error: U+F960",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF961");
    },
    Error,
    "encode-error: U+F961",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF962");
    },
    Error,
    "encode-error: U+F962",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF963");
    },
    Error,
    "encode-error: U+F963",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF964");
    },
    Error,
    "encode-error: U+F964",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF965");
    },
    Error,
    "encode-error: U+F965",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF966");
    },
    Error,
    "encode-error: U+F966",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF967");
    },
    Error,
    "encode-error: U+F967",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF968");
    },
    Error,
    "encode-error: U+F968",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF969");
    },
    Error,
    "encode-error: U+F969",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF96A");
    },
    Error,
    "encode-error: U+F96A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF96B");
    },
    Error,
    "encode-error: U+F96B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF96C");
    },
    Error,
    "encode-error: U+F96C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF96D");
    },
    Error,
    "encode-error: U+F96D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF96E");
    },
    Error,
    "encode-error: U+F96E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF96F");
    },
    Error,
    "encode-error: U+F96F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF970");
    },
    Error,
    "encode-error: U+F970",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF971");
    },
    Error,
    "encode-error: U+F971",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF972");
    },
    Error,
    "encode-error: U+F972",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF973");
    },
    Error,
    "encode-error: U+F973",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF974");
    },
    Error,
    "encode-error: U+F974",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF975");
    },
    Error,
    "encode-error: U+F975",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF976");
    },
    Error,
    "encode-error: U+F976",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF977");
    },
    Error,
    "encode-error: U+F977",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF978");
    },
    Error,
    "encode-error: U+F978",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF979");
    },
    Error,
    "encode-error: U+F979",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF97A");
    },
    Error,
    "encode-error: U+F97A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF97B");
    },
    Error,
    "encode-error: U+F97B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF97C");
    },
    Error,
    "encode-error: U+F97C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF97D");
    },
    Error,
    "encode-error: U+F97D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF97E");
    },
    Error,
    "encode-error: U+F97E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF97F");
    },
    Error,
    "encode-error: U+F97F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF980");
    },
    Error,
    "encode-error: U+F980",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF981");
    },
    Error,
    "encode-error: U+F981",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF982");
    },
    Error,
    "encode-error: U+F982",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF983");
    },
    Error,
    "encode-error: U+F983",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF984");
    },
    Error,
    "encode-error: U+F984",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF985");
    },
    Error,
    "encode-error: U+F985",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF986");
    },
    Error,
    "encode-error: U+F986",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF987");
    },
    Error,
    "encode-error: U+F987",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF988");
    },
    Error,
    "encode-error: U+F988",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF989");
    },
    Error,
    "encode-error: U+F989",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF98A");
    },
    Error,
    "encode-error: U+F98A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF98B");
    },
    Error,
    "encode-error: U+F98B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF98C");
    },
    Error,
    "encode-error: U+F98C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF98D");
    },
    Error,
    "encode-error: U+F98D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF98E");
    },
    Error,
    "encode-error: U+F98E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF98F");
    },
    Error,
    "encode-error: U+F98F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF990");
    },
    Error,
    "encode-error: U+F990",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF991");
    },
    Error,
    "encode-error: U+F991",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF992");
    },
    Error,
    "encode-error: U+F992",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF993");
    },
    Error,
    "encode-error: U+F993",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF994");
    },
    Error,
    "encode-error: U+F994",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF995");
    },
    Error,
    "encode-error: U+F995",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF996");
    },
    Error,
    "encode-error: U+F996",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF997");
    },
    Error,
    "encode-error: U+F997",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF998");
    },
    Error,
    "encode-error: U+F998",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF999");
    },
    Error,
    "encode-error: U+F999",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF99A");
    },
    Error,
    "encode-error: U+F99A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF99B");
    },
    Error,
    "encode-error: U+F99B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF99C");
    },
    Error,
    "encode-error: U+F99C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF99D");
    },
    Error,
    "encode-error: U+F99D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF99E");
    },
    Error,
    "encode-error: U+F99E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF99F");
    },
    Error,
    "encode-error: U+F99F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A0");
    },
    Error,
    "encode-error: U+F9A0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A1");
    },
    Error,
    "encode-error: U+F9A1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A2");
    },
    Error,
    "encode-error: U+F9A2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A3");
    },
    Error,
    "encode-error: U+F9A3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A4");
    },
    Error,
    "encode-error: U+F9A4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A5");
    },
    Error,
    "encode-error: U+F9A5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A6");
    },
    Error,
    "encode-error: U+F9A6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A7");
    },
    Error,
    "encode-error: U+F9A7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A8");
    },
    Error,
    "encode-error: U+F9A8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9A9");
    },
    Error,
    "encode-error: U+F9A9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9AA");
    },
    Error,
    "encode-error: U+F9AA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9AB");
    },
    Error,
    "encode-error: U+F9AB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9AC");
    },
    Error,
    "encode-error: U+F9AC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9AD");
    },
    Error,
    "encode-error: U+F9AD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9AE");
    },
    Error,
    "encode-error: U+F9AE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9AF");
    },
    Error,
    "encode-error: U+F9AF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B0");
    },
    Error,
    "encode-error: U+F9B0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B1");
    },
    Error,
    "encode-error: U+F9B1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B2");
    },
    Error,
    "encode-error: U+F9B2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B3");
    },
    Error,
    "encode-error: U+F9B3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B4");
    },
    Error,
    "encode-error: U+F9B4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B5");
    },
    Error,
    "encode-error: U+F9B5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B6");
    },
    Error,
    "encode-error: U+F9B6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B7");
    },
    Error,
    "encode-error: U+F9B7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B8");
    },
    Error,
    "encode-error: U+F9B8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9B9");
    },
    Error,
    "encode-error: U+F9B9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9BA");
    },
    Error,
    "encode-error: U+F9BA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9BB");
    },
    Error,
    "encode-error: U+F9BB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9BC");
    },
    Error,
    "encode-error: U+F9BC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9BD");
    },
    Error,
    "encode-error: U+F9BD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9BE");
    },
    Error,
    "encode-error: U+F9BE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9BF");
    },
    Error,
    "encode-error: U+F9BF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C0");
    },
    Error,
    "encode-error: U+F9C0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C1");
    },
    Error,
    "encode-error: U+F9C1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C2");
    },
    Error,
    "encode-error: U+F9C2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C3");
    },
    Error,
    "encode-error: U+F9C3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C4");
    },
    Error,
    "encode-error: U+F9C4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C5");
    },
    Error,
    "encode-error: U+F9C5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C6");
    },
    Error,
    "encode-error: U+F9C6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C7");
    },
    Error,
    "encode-error: U+F9C7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C8");
    },
    Error,
    "encode-error: U+F9C8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9C9");
    },
    Error,
    "encode-error: U+F9C9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9CA");
    },
    Error,
    "encode-error: U+F9CA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9CB");
    },
    Error,
    "encode-error: U+F9CB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9CC");
    },
    Error,
    "encode-error: U+F9CC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9CD");
    },
    Error,
    "encode-error: U+F9CD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9CE");
    },
    Error,
    "encode-error: U+F9CE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9CF");
    },
    Error,
    "encode-error: U+F9CF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D0");
    },
    Error,
    "encode-error: U+F9D0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D1");
    },
    Error,
    "encode-error: U+F9D1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D2");
    },
    Error,
    "encode-error: U+F9D2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D3");
    },
    Error,
    "encode-error: U+F9D3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D4");
    },
    Error,
    "encode-error: U+F9D4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D5");
    },
    Error,
    "encode-error: U+F9D5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D6");
    },
    Error,
    "encode-error: U+F9D6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D7");
    },
    Error,
    "encode-error: U+F9D7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D8");
    },
    Error,
    "encode-error: U+F9D8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9D9");
    },
    Error,
    "encode-error: U+F9D9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9DA");
    },
    Error,
    "encode-error: U+F9DA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9DB");
    },
    Error,
    "encode-error: U+F9DB",
  );
  r = r && ([...ms932Encoder.encode("隆")].join(",") === "251,233"); // U+F9DC
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9DD");
    },
    Error,
    "encode-error: U+F9DD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9DE");
    },
    Error,
    "encode-error: U+F9DE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9DF");
    },
    Error,
    "encode-error: U+F9DF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E0");
    },
    Error,
    "encode-error: U+F9E0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E1");
    },
    Error,
    "encode-error: U+F9E1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E2");
    },
    Error,
    "encode-error: U+F9E2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E3");
    },
    Error,
    "encode-error: U+F9E3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E4");
    },
    Error,
    "encode-error: U+F9E4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E5");
    },
    Error,
    "encode-error: U+F9E5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E6");
    },
    Error,
    "encode-error: U+F9E6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E7");
    },
    Error,
    "encode-error: U+F9E7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E8");
    },
    Error,
    "encode-error: U+F9E8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9E9");
    },
    Error,
    "encode-error: U+F9E9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9EA");
    },
    Error,
    "encode-error: U+F9EA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9EB");
    },
    Error,
    "encode-error: U+F9EB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9EC");
    },
    Error,
    "encode-error: U+F9EC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9ED");
    },
    Error,
    "encode-error: U+F9ED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9EE");
    },
    Error,
    "encode-error: U+F9EE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9EF");
    },
    Error,
    "encode-error: U+F9EF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F0");
    },
    Error,
    "encode-error: U+F9F0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F1");
    },
    Error,
    "encode-error: U+F9F1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F2");
    },
    Error,
    "encode-error: U+F9F2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F3");
    },
    Error,
    "encode-error: U+F9F3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F4");
    },
    Error,
    "encode-error: U+F9F4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F5");
    },
    Error,
    "encode-error: U+F9F5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F6");
    },
    Error,
    "encode-error: U+F9F6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F7");
    },
    Error,
    "encode-error: U+F9F7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F8");
    },
    Error,
    "encode-error: U+F9F8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9F9");
    },
    Error,
    "encode-error: U+F9F9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9FA");
    },
    Error,
    "encode-error: U+F9FA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9FB");
    },
    Error,
    "encode-error: U+F9FB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9FC");
    },
    Error,
    "encode-error: U+F9FC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9FD");
    },
    Error,
    "encode-error: U+F9FD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9FE");
    },
    Error,
    "encode-error: U+F9FE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uF9FF");
    },
    Error,
    "encode-error: U+F9FF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA00");
    },
    Error,
    "encode-error: U+FA00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA01");
    },
    Error,
    "encode-error: U+FA01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA02");
    },
    Error,
    "encode-error: U+FA02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA03");
    },
    Error,
    "encode-error: U+FA03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA04");
    },
    Error,
    "encode-error: U+FA04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA05");
    },
    Error,
    "encode-error: U+FA05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA06");
    },
    Error,
    "encode-error: U+FA06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA07");
    },
    Error,
    "encode-error: U+FA07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA08");
    },
    Error,
    "encode-error: U+FA08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA09");
    },
    Error,
    "encode-error: U+FA09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA0A");
    },
    Error,
    "encode-error: U+FA0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA0B");
    },
    Error,
    "encode-error: U+FA0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA0C");
    },
    Error,
    "encode-error: U+FA0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA0D");
    },
    Error,
    "encode-error: U+FA0D",
  );
  r = r &&
    ([...ms932Encoder.encode(
      "﨎﨏塚﨑晴﨓﨔凞猪益礼神祥福靖精羽﨟蘒﨡諸﨣﨤逸都﨧﨨﨩飯飼館鶴",
    )].join(
      ",",
    ) ===
      "250,144,250,155,250,156,250,177,250,216,250,232,250,234,251,88,251,94,251,117,251,125,251,126,251,128,251,130,251,134,251,137,251,146,251,157,251,159,251,160,251,169,251,177,251,179,251,180,251,183,251,211,251,218,251,234,251,246,251,247,251,249,252,73"); // U+FA0E
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA2E");
    },
    Error,
    "encode-error: U+FA2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA2F");
    },
    Error,
    "encode-error: U+FA2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA30");
    },
    Error,
    "encode-error: U+FA30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA31");
    },
    Error,
    "encode-error: U+FA31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA32");
    },
    Error,
    "encode-error: U+FA32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA33");
    },
    Error,
    "encode-error: U+FA33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA34");
    },
    Error,
    "encode-error: U+FA34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA35");
    },
    Error,
    "encode-error: U+FA35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA36");
    },
    Error,
    "encode-error: U+FA36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA37");
    },
    Error,
    "encode-error: U+FA37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA38");
    },
    Error,
    "encode-error: U+FA38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA39");
    },
    Error,
    "encode-error: U+FA39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA3A");
    },
    Error,
    "encode-error: U+FA3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA3B");
    },
    Error,
    "encode-error: U+FA3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA3C");
    },
    Error,
    "encode-error: U+FA3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA3D");
    },
    Error,
    "encode-error: U+FA3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA3E");
    },
    Error,
    "encode-error: U+FA3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA3F");
    },
    Error,
    "encode-error: U+FA3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA40");
    },
    Error,
    "encode-error: U+FA40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA41");
    },
    Error,
    "encode-error: U+FA41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA42");
    },
    Error,
    "encode-error: U+FA42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA43");
    },
    Error,
    "encode-error: U+FA43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA44");
    },
    Error,
    "encode-error: U+FA44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA45");
    },
    Error,
    "encode-error: U+FA45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA46");
    },
    Error,
    "encode-error: U+FA46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA47");
    },
    Error,
    "encode-error: U+FA47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA48");
    },
    Error,
    "encode-error: U+FA48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA49");
    },
    Error,
    "encode-error: U+FA49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA4A");
    },
    Error,
    "encode-error: U+FA4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA4B");
    },
    Error,
    "encode-error: U+FA4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA4C");
    },
    Error,
    "encode-error: U+FA4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA4D");
    },
    Error,
    "encode-error: U+FA4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA4E");
    },
    Error,
    "encode-error: U+FA4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA4F");
    },
    Error,
    "encode-error: U+FA4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA50");
    },
    Error,
    "encode-error: U+FA50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA51");
    },
    Error,
    "encode-error: U+FA51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA52");
    },
    Error,
    "encode-error: U+FA52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA53");
    },
    Error,
    "encode-error: U+FA53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA54");
    },
    Error,
    "encode-error: U+FA54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA55");
    },
    Error,
    "encode-error: U+FA55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA56");
    },
    Error,
    "encode-error: U+FA56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA57");
    },
    Error,
    "encode-error: U+FA57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA58");
    },
    Error,
    "encode-error: U+FA58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA59");
    },
    Error,
    "encode-error: U+FA59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA5A");
    },
    Error,
    "encode-error: U+FA5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA5B");
    },
    Error,
    "encode-error: U+FA5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA5C");
    },
    Error,
    "encode-error: U+FA5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA5D");
    },
    Error,
    "encode-error: U+FA5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA5E");
    },
    Error,
    "encode-error: U+FA5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA5F");
    },
    Error,
    "encode-error: U+FA5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA60");
    },
    Error,
    "encode-error: U+FA60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA61");
    },
    Error,
    "encode-error: U+FA61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA62");
    },
    Error,
    "encode-error: U+FA62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA63");
    },
    Error,
    "encode-error: U+FA63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA64");
    },
    Error,
    "encode-error: U+FA64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA65");
    },
    Error,
    "encode-error: U+FA65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA66");
    },
    Error,
    "encode-error: U+FA66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA67");
    },
    Error,
    "encode-error: U+FA67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA68");
    },
    Error,
    "encode-error: U+FA68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA69");
    },
    Error,
    "encode-error: U+FA69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA6A");
    },
    Error,
    "encode-error: U+FA6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA6B");
    },
    Error,
    "encode-error: U+FA6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA6C");
    },
    Error,
    "encode-error: U+FA6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA6D");
    },
    Error,
    "encode-error: U+FA6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA6E");
    },
    Error,
    "encode-error: U+FA6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA6F");
    },
    Error,
    "encode-error: U+FA6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA70");
    },
    Error,
    "encode-error: U+FA70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA71");
    },
    Error,
    "encode-error: U+FA71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA72");
    },
    Error,
    "encode-error: U+FA72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA73");
    },
    Error,
    "encode-error: U+FA73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA74");
    },
    Error,
    "encode-error: U+FA74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA75");
    },
    Error,
    "encode-error: U+FA75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA76");
    },
    Error,
    "encode-error: U+FA76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA77");
    },
    Error,
    "encode-error: U+FA77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA78");
    },
    Error,
    "encode-error: U+FA78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA79");
    },
    Error,
    "encode-error: U+FA79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA7A");
    },
    Error,
    "encode-error: U+FA7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA7B");
    },
    Error,
    "encode-error: U+FA7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA7C");
    },
    Error,
    "encode-error: U+FA7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA7D");
    },
    Error,
    "encode-error: U+FA7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA7E");
    },
    Error,
    "encode-error: U+FA7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA7F");
    },
    Error,
    "encode-error: U+FA7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA80");
    },
    Error,
    "encode-error: U+FA80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA81");
    },
    Error,
    "encode-error: U+FA81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA82");
    },
    Error,
    "encode-error: U+FA82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA83");
    },
    Error,
    "encode-error: U+FA83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA84");
    },
    Error,
    "encode-error: U+FA84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA85");
    },
    Error,
    "encode-error: U+FA85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA86");
    },
    Error,
    "encode-error: U+FA86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA87");
    },
    Error,
    "encode-error: U+FA87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA88");
    },
    Error,
    "encode-error: U+FA88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA89");
    },
    Error,
    "encode-error: U+FA89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA8A");
    },
    Error,
    "encode-error: U+FA8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA8B");
    },
    Error,
    "encode-error: U+FA8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA8C");
    },
    Error,
    "encode-error: U+FA8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA8D");
    },
    Error,
    "encode-error: U+FA8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA8E");
    },
    Error,
    "encode-error: U+FA8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA8F");
    },
    Error,
    "encode-error: U+FA8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA90");
    },
    Error,
    "encode-error: U+FA90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA91");
    },
    Error,
    "encode-error: U+FA91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA92");
    },
    Error,
    "encode-error: U+FA92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA93");
    },
    Error,
    "encode-error: U+FA93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA94");
    },
    Error,
    "encode-error: U+FA94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA95");
    },
    Error,
    "encode-error: U+FA95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA96");
    },
    Error,
    "encode-error: U+FA96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA97");
    },
    Error,
    "encode-error: U+FA97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA98");
    },
    Error,
    "encode-error: U+FA98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA99");
    },
    Error,
    "encode-error: U+FA99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA9A");
    },
    Error,
    "encode-error: U+FA9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA9B");
    },
    Error,
    "encode-error: U+FA9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA9C");
    },
    Error,
    "encode-error: U+FA9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA9D");
    },
    Error,
    "encode-error: U+FA9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA9E");
    },
    Error,
    "encode-error: U+FA9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFA9F");
    },
    Error,
    "encode-error: U+FA9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA0");
    },
    Error,
    "encode-error: U+FAA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA1");
    },
    Error,
    "encode-error: U+FAA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA2");
    },
    Error,
    "encode-error: U+FAA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA3");
    },
    Error,
    "encode-error: U+FAA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA4");
    },
    Error,
    "encode-error: U+FAA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA5");
    },
    Error,
    "encode-error: U+FAA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA6");
    },
    Error,
    "encode-error: U+FAA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA7");
    },
    Error,
    "encode-error: U+FAA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA8");
    },
    Error,
    "encode-error: U+FAA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAA9");
    },
    Error,
    "encode-error: U+FAA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAAA");
    },
    Error,
    "encode-error: U+FAAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAAB");
    },
    Error,
    "encode-error: U+FAAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAAC");
    },
    Error,
    "encode-error: U+FAAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAAD");
    },
    Error,
    "encode-error: U+FAAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAAE");
    },
    Error,
    "encode-error: U+FAAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAAF");
    },
    Error,
    "encode-error: U+FAAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB0");
    },
    Error,
    "encode-error: U+FAB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB1");
    },
    Error,
    "encode-error: U+FAB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB2");
    },
    Error,
    "encode-error: U+FAB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB3");
    },
    Error,
    "encode-error: U+FAB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB4");
    },
    Error,
    "encode-error: U+FAB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB5");
    },
    Error,
    "encode-error: U+FAB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB6");
    },
    Error,
    "encode-error: U+FAB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB7");
    },
    Error,
    "encode-error: U+FAB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB8");
    },
    Error,
    "encode-error: U+FAB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAB9");
    },
    Error,
    "encode-error: U+FAB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFABA");
    },
    Error,
    "encode-error: U+FABA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFABB");
    },
    Error,
    "encode-error: U+FABB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFABC");
    },
    Error,
    "encode-error: U+FABC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFABD");
    },
    Error,
    "encode-error: U+FABD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFABE");
    },
    Error,
    "encode-error: U+FABE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFABF");
    },
    Error,
    "encode-error: U+FABF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC0");
    },
    Error,
    "encode-error: U+FAC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC1");
    },
    Error,
    "encode-error: U+FAC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC2");
    },
    Error,
    "encode-error: U+FAC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC3");
    },
    Error,
    "encode-error: U+FAC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC4");
    },
    Error,
    "encode-error: U+FAC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC5");
    },
    Error,
    "encode-error: U+FAC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC6");
    },
    Error,
    "encode-error: U+FAC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC7");
    },
    Error,
    "encode-error: U+FAC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC8");
    },
    Error,
    "encode-error: U+FAC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAC9");
    },
    Error,
    "encode-error: U+FAC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFACA");
    },
    Error,
    "encode-error: U+FACA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFACB");
    },
    Error,
    "encode-error: U+FACB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFACC");
    },
    Error,
    "encode-error: U+FACC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFACD");
    },
    Error,
    "encode-error: U+FACD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFACE");
    },
    Error,
    "encode-error: U+FACE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFACF");
    },
    Error,
    "encode-error: U+FACF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD0");
    },
    Error,
    "encode-error: U+FAD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD1");
    },
    Error,
    "encode-error: U+FAD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD2");
    },
    Error,
    "encode-error: U+FAD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD3");
    },
    Error,
    "encode-error: U+FAD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD4");
    },
    Error,
    "encode-error: U+FAD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD5");
    },
    Error,
    "encode-error: U+FAD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD6");
    },
    Error,
    "encode-error: U+FAD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD7");
    },
    Error,
    "encode-error: U+FAD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD8");
    },
    Error,
    "encode-error: U+FAD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAD9");
    },
    Error,
    "encode-error: U+FAD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFADA");
    },
    Error,
    "encode-error: U+FADA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFADB");
    },
    Error,
    "encode-error: U+FADB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFADC");
    },
    Error,
    "encode-error: U+FADC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFADD");
    },
    Error,
    "encode-error: U+FADD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFADE");
    },
    Error,
    "encode-error: U+FADE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFADF");
    },
    Error,
    "encode-error: U+FADF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE0");
    },
    Error,
    "encode-error: U+FAE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE1");
    },
    Error,
    "encode-error: U+FAE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE2");
    },
    Error,
    "encode-error: U+FAE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE3");
    },
    Error,
    "encode-error: U+FAE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE4");
    },
    Error,
    "encode-error: U+FAE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE5");
    },
    Error,
    "encode-error: U+FAE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE6");
    },
    Error,
    "encode-error: U+FAE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE7");
    },
    Error,
    "encode-error: U+FAE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE8");
    },
    Error,
    "encode-error: U+FAE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAE9");
    },
    Error,
    "encode-error: U+FAE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAEA");
    },
    Error,
    "encode-error: U+FAEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAEB");
    },
    Error,
    "encode-error: U+FAEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAEC");
    },
    Error,
    "encode-error: U+FAEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAED");
    },
    Error,
    "encode-error: U+FAED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAEE");
    },
    Error,
    "encode-error: U+FAEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAEF");
    },
    Error,
    "encode-error: U+FAEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF0");
    },
    Error,
    "encode-error: U+FAF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF1");
    },
    Error,
    "encode-error: U+FAF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF2");
    },
    Error,
    "encode-error: U+FAF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF3");
    },
    Error,
    "encode-error: U+FAF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF4");
    },
    Error,
    "encode-error: U+FAF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF5");
    },
    Error,
    "encode-error: U+FAF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF6");
    },
    Error,
    "encode-error: U+FAF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF7");
    },
    Error,
    "encode-error: U+FAF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF8");
    },
    Error,
    "encode-error: U+FAF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAF9");
    },
    Error,
    "encode-error: U+FAF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAFA");
    },
    Error,
    "encode-error: U+FAFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAFB");
    },
    Error,
    "encode-error: U+FAFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAFC");
    },
    Error,
    "encode-error: U+FAFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAFD");
    },
    Error,
    "encode-error: U+FAFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAFE");
    },
    Error,
    "encode-error: U+FAFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFAFF");
    },
    Error,
    "encode-error: U+FAFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB00");
    },
    Error,
    "encode-error: U+FB00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB01");
    },
    Error,
    "encode-error: U+FB01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB02");
    },
    Error,
    "encode-error: U+FB02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB03");
    },
    Error,
    "encode-error: U+FB03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB04");
    },
    Error,
    "encode-error: U+FB04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB05");
    },
    Error,
    "encode-error: U+FB05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB06");
    },
    Error,
    "encode-error: U+FB06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB07");
    },
    Error,
    "encode-error: U+FB07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB08");
    },
    Error,
    "encode-error: U+FB08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB09");
    },
    Error,
    "encode-error: U+FB09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB0A");
    },
    Error,
    "encode-error: U+FB0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB0B");
    },
    Error,
    "encode-error: U+FB0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB0C");
    },
    Error,
    "encode-error: U+FB0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB0D");
    },
    Error,
    "encode-error: U+FB0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB0E");
    },
    Error,
    "encode-error: U+FB0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB0F");
    },
    Error,
    "encode-error: U+FB0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB10");
    },
    Error,
    "encode-error: U+FB10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB11");
    },
    Error,
    "encode-error: U+FB11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB12");
    },
    Error,
    "encode-error: U+FB12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB13");
    },
    Error,
    "encode-error: U+FB13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB14");
    },
    Error,
    "encode-error: U+FB14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB15");
    },
    Error,
    "encode-error: U+FB15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB16");
    },
    Error,
    "encode-error: U+FB16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB17");
    },
    Error,
    "encode-error: U+FB17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB18");
    },
    Error,
    "encode-error: U+FB18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB19");
    },
    Error,
    "encode-error: U+FB19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB1A");
    },
    Error,
    "encode-error: U+FB1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB1B");
    },
    Error,
    "encode-error: U+FB1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB1C");
    },
    Error,
    "encode-error: U+FB1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB1D");
    },
    Error,
    "encode-error: U+FB1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB1E");
    },
    Error,
    "encode-error: U+FB1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB1F");
    },
    Error,
    "encode-error: U+FB1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB20");
    },
    Error,
    "encode-error: U+FB20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB21");
    },
    Error,
    "encode-error: U+FB21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB22");
    },
    Error,
    "encode-error: U+FB22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB23");
    },
    Error,
    "encode-error: U+FB23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB24");
    },
    Error,
    "encode-error: U+FB24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB25");
    },
    Error,
    "encode-error: U+FB25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB26");
    },
    Error,
    "encode-error: U+FB26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB27");
    },
    Error,
    "encode-error: U+FB27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB28");
    },
    Error,
    "encode-error: U+FB28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB29");
    },
    Error,
    "encode-error: U+FB29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB2A");
    },
    Error,
    "encode-error: U+FB2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB2B");
    },
    Error,
    "encode-error: U+FB2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB2C");
    },
    Error,
    "encode-error: U+FB2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB2D");
    },
    Error,
    "encode-error: U+FB2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB2E");
    },
    Error,
    "encode-error: U+FB2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB2F");
    },
    Error,
    "encode-error: U+FB2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB30");
    },
    Error,
    "encode-error: U+FB30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB31");
    },
    Error,
    "encode-error: U+FB31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB32");
    },
    Error,
    "encode-error: U+FB32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB33");
    },
    Error,
    "encode-error: U+FB33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB34");
    },
    Error,
    "encode-error: U+FB34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB35");
    },
    Error,
    "encode-error: U+FB35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB36");
    },
    Error,
    "encode-error: U+FB36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB37");
    },
    Error,
    "encode-error: U+FB37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB38");
    },
    Error,
    "encode-error: U+FB38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB39");
    },
    Error,
    "encode-error: U+FB39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB3A");
    },
    Error,
    "encode-error: U+FB3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB3B");
    },
    Error,
    "encode-error: U+FB3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB3C");
    },
    Error,
    "encode-error: U+FB3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB3D");
    },
    Error,
    "encode-error: U+FB3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB3E");
    },
    Error,
    "encode-error: U+FB3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB3F");
    },
    Error,
    "encode-error: U+FB3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB40");
    },
    Error,
    "encode-error: U+FB40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB41");
    },
    Error,
    "encode-error: U+FB41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB42");
    },
    Error,
    "encode-error: U+FB42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB43");
    },
    Error,
    "encode-error: U+FB43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB44");
    },
    Error,
    "encode-error: U+FB44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB45");
    },
    Error,
    "encode-error: U+FB45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB46");
    },
    Error,
    "encode-error: U+FB46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB47");
    },
    Error,
    "encode-error: U+FB47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB48");
    },
    Error,
    "encode-error: U+FB48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB49");
    },
    Error,
    "encode-error: U+FB49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB4A");
    },
    Error,
    "encode-error: U+FB4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB4B");
    },
    Error,
    "encode-error: U+FB4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB4C");
    },
    Error,
    "encode-error: U+FB4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB4D");
    },
    Error,
    "encode-error: U+FB4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB4E");
    },
    Error,
    "encode-error: U+FB4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB4F");
    },
    Error,
    "encode-error: U+FB4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB50");
    },
    Error,
    "encode-error: U+FB50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB51");
    },
    Error,
    "encode-error: U+FB51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB52");
    },
    Error,
    "encode-error: U+FB52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB53");
    },
    Error,
    "encode-error: U+FB53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB54");
    },
    Error,
    "encode-error: U+FB54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB55");
    },
    Error,
    "encode-error: U+FB55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB56");
    },
    Error,
    "encode-error: U+FB56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB57");
    },
    Error,
    "encode-error: U+FB57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB58");
    },
    Error,
    "encode-error: U+FB58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB59");
    },
    Error,
    "encode-error: U+FB59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB5A");
    },
    Error,
    "encode-error: U+FB5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB5B");
    },
    Error,
    "encode-error: U+FB5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB5C");
    },
    Error,
    "encode-error: U+FB5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB5D");
    },
    Error,
    "encode-error: U+FB5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB5E");
    },
    Error,
    "encode-error: U+FB5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB5F");
    },
    Error,
    "encode-error: U+FB5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB60");
    },
    Error,
    "encode-error: U+FB60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB61");
    },
    Error,
    "encode-error: U+FB61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB62");
    },
    Error,
    "encode-error: U+FB62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB63");
    },
    Error,
    "encode-error: U+FB63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB64");
    },
    Error,
    "encode-error: U+FB64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB65");
    },
    Error,
    "encode-error: U+FB65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB66");
    },
    Error,
    "encode-error: U+FB66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB67");
    },
    Error,
    "encode-error: U+FB67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB68");
    },
    Error,
    "encode-error: U+FB68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB69");
    },
    Error,
    "encode-error: U+FB69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB6A");
    },
    Error,
    "encode-error: U+FB6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB6B");
    },
    Error,
    "encode-error: U+FB6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB6C");
    },
    Error,
    "encode-error: U+FB6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB6D");
    },
    Error,
    "encode-error: U+FB6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB6E");
    },
    Error,
    "encode-error: U+FB6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB6F");
    },
    Error,
    "encode-error: U+FB6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB70");
    },
    Error,
    "encode-error: U+FB70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB71");
    },
    Error,
    "encode-error: U+FB71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB72");
    },
    Error,
    "encode-error: U+FB72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB73");
    },
    Error,
    "encode-error: U+FB73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB74");
    },
    Error,
    "encode-error: U+FB74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB75");
    },
    Error,
    "encode-error: U+FB75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB76");
    },
    Error,
    "encode-error: U+FB76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB77");
    },
    Error,
    "encode-error: U+FB77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB78");
    },
    Error,
    "encode-error: U+FB78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB79");
    },
    Error,
    "encode-error: U+FB79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB7A");
    },
    Error,
    "encode-error: U+FB7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB7B");
    },
    Error,
    "encode-error: U+FB7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB7C");
    },
    Error,
    "encode-error: U+FB7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB7D");
    },
    Error,
    "encode-error: U+FB7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB7E");
    },
    Error,
    "encode-error: U+FB7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB7F");
    },
    Error,
    "encode-error: U+FB7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB80");
    },
    Error,
    "encode-error: U+FB80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB81");
    },
    Error,
    "encode-error: U+FB81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB82");
    },
    Error,
    "encode-error: U+FB82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB83");
    },
    Error,
    "encode-error: U+FB83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB84");
    },
    Error,
    "encode-error: U+FB84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB85");
    },
    Error,
    "encode-error: U+FB85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB86");
    },
    Error,
    "encode-error: U+FB86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB87");
    },
    Error,
    "encode-error: U+FB87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB88");
    },
    Error,
    "encode-error: U+FB88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB89");
    },
    Error,
    "encode-error: U+FB89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB8A");
    },
    Error,
    "encode-error: U+FB8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB8B");
    },
    Error,
    "encode-error: U+FB8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB8C");
    },
    Error,
    "encode-error: U+FB8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB8D");
    },
    Error,
    "encode-error: U+FB8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB8E");
    },
    Error,
    "encode-error: U+FB8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB8F");
    },
    Error,
    "encode-error: U+FB8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB90");
    },
    Error,
    "encode-error: U+FB90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB91");
    },
    Error,
    "encode-error: U+FB91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB92");
    },
    Error,
    "encode-error: U+FB92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB93");
    },
    Error,
    "encode-error: U+FB93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB94");
    },
    Error,
    "encode-error: U+FB94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB95");
    },
    Error,
    "encode-error: U+FB95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB96");
    },
    Error,
    "encode-error: U+FB96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB97");
    },
    Error,
    "encode-error: U+FB97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB98");
    },
    Error,
    "encode-error: U+FB98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB99");
    },
    Error,
    "encode-error: U+FB99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB9A");
    },
    Error,
    "encode-error: U+FB9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB9B");
    },
    Error,
    "encode-error: U+FB9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB9C");
    },
    Error,
    "encode-error: U+FB9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB9D");
    },
    Error,
    "encode-error: U+FB9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB9E");
    },
    Error,
    "encode-error: U+FB9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFB9F");
    },
    Error,
    "encode-error: U+FB9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA0");
    },
    Error,
    "encode-error: U+FBA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA1");
    },
    Error,
    "encode-error: U+FBA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA2");
    },
    Error,
    "encode-error: U+FBA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA3");
    },
    Error,
    "encode-error: U+FBA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA4");
    },
    Error,
    "encode-error: U+FBA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA5");
    },
    Error,
    "encode-error: U+FBA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA6");
    },
    Error,
    "encode-error: U+FBA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA7");
    },
    Error,
    "encode-error: U+FBA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA8");
    },
    Error,
    "encode-error: U+FBA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBA9");
    },
    Error,
    "encode-error: U+FBA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBAA");
    },
    Error,
    "encode-error: U+FBAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBAB");
    },
    Error,
    "encode-error: U+FBAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBAC");
    },
    Error,
    "encode-error: U+FBAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBAD");
    },
    Error,
    "encode-error: U+FBAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBAE");
    },
    Error,
    "encode-error: U+FBAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBAF");
    },
    Error,
    "encode-error: U+FBAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB0");
    },
    Error,
    "encode-error: U+FBB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB1");
    },
    Error,
    "encode-error: U+FBB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB2");
    },
    Error,
    "encode-error: U+FBB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB3");
    },
    Error,
    "encode-error: U+FBB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB4");
    },
    Error,
    "encode-error: U+FBB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB5");
    },
    Error,
    "encode-error: U+FBB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB6");
    },
    Error,
    "encode-error: U+FBB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB7");
    },
    Error,
    "encode-error: U+FBB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB8");
    },
    Error,
    "encode-error: U+FBB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBB9");
    },
    Error,
    "encode-error: U+FBB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBBA");
    },
    Error,
    "encode-error: U+FBBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBBB");
    },
    Error,
    "encode-error: U+FBBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBBC");
    },
    Error,
    "encode-error: U+FBBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBBD");
    },
    Error,
    "encode-error: U+FBBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBBE");
    },
    Error,
    "encode-error: U+FBBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBBF");
    },
    Error,
    "encode-error: U+FBBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC0");
    },
    Error,
    "encode-error: U+FBC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC1");
    },
    Error,
    "encode-error: U+FBC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC2");
    },
    Error,
    "encode-error: U+FBC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC3");
    },
    Error,
    "encode-error: U+FBC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC4");
    },
    Error,
    "encode-error: U+FBC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC5");
    },
    Error,
    "encode-error: U+FBC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC6");
    },
    Error,
    "encode-error: U+FBC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC7");
    },
    Error,
    "encode-error: U+FBC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC8");
    },
    Error,
    "encode-error: U+FBC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBC9");
    },
    Error,
    "encode-error: U+FBC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBCA");
    },
    Error,
    "encode-error: U+FBCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBCB");
    },
    Error,
    "encode-error: U+FBCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBCC");
    },
    Error,
    "encode-error: U+FBCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBCD");
    },
    Error,
    "encode-error: U+FBCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBCE");
    },
    Error,
    "encode-error: U+FBCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBCF");
    },
    Error,
    "encode-error: U+FBCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD0");
    },
    Error,
    "encode-error: U+FBD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD1");
    },
    Error,
    "encode-error: U+FBD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD2");
    },
    Error,
    "encode-error: U+FBD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD3");
    },
    Error,
    "encode-error: U+FBD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD4");
    },
    Error,
    "encode-error: U+FBD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD5");
    },
    Error,
    "encode-error: U+FBD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD6");
    },
    Error,
    "encode-error: U+FBD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD7");
    },
    Error,
    "encode-error: U+FBD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD8");
    },
    Error,
    "encode-error: U+FBD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBD9");
    },
    Error,
    "encode-error: U+FBD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBDA");
    },
    Error,
    "encode-error: U+FBDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBDB");
    },
    Error,
    "encode-error: U+FBDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBDC");
    },
    Error,
    "encode-error: U+FBDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBDD");
    },
    Error,
    "encode-error: U+FBDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBDE");
    },
    Error,
    "encode-error: U+FBDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBDF");
    },
    Error,
    "encode-error: U+FBDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE0");
    },
    Error,
    "encode-error: U+FBE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE1");
    },
    Error,
    "encode-error: U+FBE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE2");
    },
    Error,
    "encode-error: U+FBE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE3");
    },
    Error,
    "encode-error: U+FBE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE4");
    },
    Error,
    "encode-error: U+FBE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE5");
    },
    Error,
    "encode-error: U+FBE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE6");
    },
    Error,
    "encode-error: U+FBE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE7");
    },
    Error,
    "encode-error: U+FBE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE8");
    },
    Error,
    "encode-error: U+FBE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBE9");
    },
    Error,
    "encode-error: U+FBE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBEA");
    },
    Error,
    "encode-error: U+FBEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBEB");
    },
    Error,
    "encode-error: U+FBEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBEC");
    },
    Error,
    "encode-error: U+FBEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBED");
    },
    Error,
    "encode-error: U+FBED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBEE");
    },
    Error,
    "encode-error: U+FBEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBEF");
    },
    Error,
    "encode-error: U+FBEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF0");
    },
    Error,
    "encode-error: U+FBF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF1");
    },
    Error,
    "encode-error: U+FBF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF2");
    },
    Error,
    "encode-error: U+FBF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF3");
    },
    Error,
    "encode-error: U+FBF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF4");
    },
    Error,
    "encode-error: U+FBF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF5");
    },
    Error,
    "encode-error: U+FBF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF6");
    },
    Error,
    "encode-error: U+FBF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF7");
    },
    Error,
    "encode-error: U+FBF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF8");
    },
    Error,
    "encode-error: U+FBF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBF9");
    },
    Error,
    "encode-error: U+FBF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBFA");
    },
    Error,
    "encode-error: U+FBFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBFB");
    },
    Error,
    "encode-error: U+FBFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBFC");
    },
    Error,
    "encode-error: U+FBFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBFD");
    },
    Error,
    "encode-error: U+FBFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBFE");
    },
    Error,
    "encode-error: U+FBFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFBFF");
    },
    Error,
    "encode-error: U+FBFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC00");
    },
    Error,
    "encode-error: U+FC00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC01");
    },
    Error,
    "encode-error: U+FC01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC02");
    },
    Error,
    "encode-error: U+FC02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC03");
    },
    Error,
    "encode-error: U+FC03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC04");
    },
    Error,
    "encode-error: U+FC04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC05");
    },
    Error,
    "encode-error: U+FC05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC06");
    },
    Error,
    "encode-error: U+FC06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC07");
    },
    Error,
    "encode-error: U+FC07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC08");
    },
    Error,
    "encode-error: U+FC08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC09");
    },
    Error,
    "encode-error: U+FC09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC0A");
    },
    Error,
    "encode-error: U+FC0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC0B");
    },
    Error,
    "encode-error: U+FC0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC0C");
    },
    Error,
    "encode-error: U+FC0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC0D");
    },
    Error,
    "encode-error: U+FC0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC0E");
    },
    Error,
    "encode-error: U+FC0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC0F");
    },
    Error,
    "encode-error: U+FC0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC10");
    },
    Error,
    "encode-error: U+FC10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC11");
    },
    Error,
    "encode-error: U+FC11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC12");
    },
    Error,
    "encode-error: U+FC12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC13");
    },
    Error,
    "encode-error: U+FC13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC14");
    },
    Error,
    "encode-error: U+FC14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC15");
    },
    Error,
    "encode-error: U+FC15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC16");
    },
    Error,
    "encode-error: U+FC16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC17");
    },
    Error,
    "encode-error: U+FC17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC18");
    },
    Error,
    "encode-error: U+FC18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC19");
    },
    Error,
    "encode-error: U+FC19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC1A");
    },
    Error,
    "encode-error: U+FC1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC1B");
    },
    Error,
    "encode-error: U+FC1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC1C");
    },
    Error,
    "encode-error: U+FC1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC1D");
    },
    Error,
    "encode-error: U+FC1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC1E");
    },
    Error,
    "encode-error: U+FC1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC1F");
    },
    Error,
    "encode-error: U+FC1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC20");
    },
    Error,
    "encode-error: U+FC20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC21");
    },
    Error,
    "encode-error: U+FC21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC22");
    },
    Error,
    "encode-error: U+FC22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC23");
    },
    Error,
    "encode-error: U+FC23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC24");
    },
    Error,
    "encode-error: U+FC24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC25");
    },
    Error,
    "encode-error: U+FC25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC26");
    },
    Error,
    "encode-error: U+FC26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC27");
    },
    Error,
    "encode-error: U+FC27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC28");
    },
    Error,
    "encode-error: U+FC28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC29");
    },
    Error,
    "encode-error: U+FC29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC2A");
    },
    Error,
    "encode-error: U+FC2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC2B");
    },
    Error,
    "encode-error: U+FC2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC2C");
    },
    Error,
    "encode-error: U+FC2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC2D");
    },
    Error,
    "encode-error: U+FC2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC2E");
    },
    Error,
    "encode-error: U+FC2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC2F");
    },
    Error,
    "encode-error: U+FC2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC30");
    },
    Error,
    "encode-error: U+FC30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC31");
    },
    Error,
    "encode-error: U+FC31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC32");
    },
    Error,
    "encode-error: U+FC32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC33");
    },
    Error,
    "encode-error: U+FC33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC34");
    },
    Error,
    "encode-error: U+FC34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC35");
    },
    Error,
    "encode-error: U+FC35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC36");
    },
    Error,
    "encode-error: U+FC36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC37");
    },
    Error,
    "encode-error: U+FC37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC38");
    },
    Error,
    "encode-error: U+FC38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC39");
    },
    Error,
    "encode-error: U+FC39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC3A");
    },
    Error,
    "encode-error: U+FC3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC3B");
    },
    Error,
    "encode-error: U+FC3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC3C");
    },
    Error,
    "encode-error: U+FC3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC3D");
    },
    Error,
    "encode-error: U+FC3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC3E");
    },
    Error,
    "encode-error: U+FC3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC3F");
    },
    Error,
    "encode-error: U+FC3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC40");
    },
    Error,
    "encode-error: U+FC40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC41");
    },
    Error,
    "encode-error: U+FC41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC42");
    },
    Error,
    "encode-error: U+FC42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC43");
    },
    Error,
    "encode-error: U+FC43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC44");
    },
    Error,
    "encode-error: U+FC44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC45");
    },
    Error,
    "encode-error: U+FC45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC46");
    },
    Error,
    "encode-error: U+FC46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC47");
    },
    Error,
    "encode-error: U+FC47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC48");
    },
    Error,
    "encode-error: U+FC48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC49");
    },
    Error,
    "encode-error: U+FC49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC4A");
    },
    Error,
    "encode-error: U+FC4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC4B");
    },
    Error,
    "encode-error: U+FC4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC4C");
    },
    Error,
    "encode-error: U+FC4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC4D");
    },
    Error,
    "encode-error: U+FC4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC4E");
    },
    Error,
    "encode-error: U+FC4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC4F");
    },
    Error,
    "encode-error: U+FC4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC50");
    },
    Error,
    "encode-error: U+FC50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC51");
    },
    Error,
    "encode-error: U+FC51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC52");
    },
    Error,
    "encode-error: U+FC52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC53");
    },
    Error,
    "encode-error: U+FC53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC54");
    },
    Error,
    "encode-error: U+FC54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC55");
    },
    Error,
    "encode-error: U+FC55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC56");
    },
    Error,
    "encode-error: U+FC56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC57");
    },
    Error,
    "encode-error: U+FC57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC58");
    },
    Error,
    "encode-error: U+FC58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC59");
    },
    Error,
    "encode-error: U+FC59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC5A");
    },
    Error,
    "encode-error: U+FC5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC5B");
    },
    Error,
    "encode-error: U+FC5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC5C");
    },
    Error,
    "encode-error: U+FC5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC5D");
    },
    Error,
    "encode-error: U+FC5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC5E");
    },
    Error,
    "encode-error: U+FC5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC5F");
    },
    Error,
    "encode-error: U+FC5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC60");
    },
    Error,
    "encode-error: U+FC60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC61");
    },
    Error,
    "encode-error: U+FC61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC62");
    },
    Error,
    "encode-error: U+FC62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC63");
    },
    Error,
    "encode-error: U+FC63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC64");
    },
    Error,
    "encode-error: U+FC64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC65");
    },
    Error,
    "encode-error: U+FC65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC66");
    },
    Error,
    "encode-error: U+FC66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC67");
    },
    Error,
    "encode-error: U+FC67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC68");
    },
    Error,
    "encode-error: U+FC68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC69");
    },
    Error,
    "encode-error: U+FC69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC6A");
    },
    Error,
    "encode-error: U+FC6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC6B");
    },
    Error,
    "encode-error: U+FC6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC6C");
    },
    Error,
    "encode-error: U+FC6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC6D");
    },
    Error,
    "encode-error: U+FC6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC6E");
    },
    Error,
    "encode-error: U+FC6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC6F");
    },
    Error,
    "encode-error: U+FC6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC70");
    },
    Error,
    "encode-error: U+FC70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC71");
    },
    Error,
    "encode-error: U+FC71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC72");
    },
    Error,
    "encode-error: U+FC72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC73");
    },
    Error,
    "encode-error: U+FC73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC74");
    },
    Error,
    "encode-error: U+FC74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC75");
    },
    Error,
    "encode-error: U+FC75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC76");
    },
    Error,
    "encode-error: U+FC76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC77");
    },
    Error,
    "encode-error: U+FC77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC78");
    },
    Error,
    "encode-error: U+FC78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC79");
    },
    Error,
    "encode-error: U+FC79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC7A");
    },
    Error,
    "encode-error: U+FC7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC7B");
    },
    Error,
    "encode-error: U+FC7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC7C");
    },
    Error,
    "encode-error: U+FC7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC7D");
    },
    Error,
    "encode-error: U+FC7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC7E");
    },
    Error,
    "encode-error: U+FC7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC7F");
    },
    Error,
    "encode-error: U+FC7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC80");
    },
    Error,
    "encode-error: U+FC80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC81");
    },
    Error,
    "encode-error: U+FC81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC82");
    },
    Error,
    "encode-error: U+FC82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC83");
    },
    Error,
    "encode-error: U+FC83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC84");
    },
    Error,
    "encode-error: U+FC84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC85");
    },
    Error,
    "encode-error: U+FC85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC86");
    },
    Error,
    "encode-error: U+FC86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC87");
    },
    Error,
    "encode-error: U+FC87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC88");
    },
    Error,
    "encode-error: U+FC88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC89");
    },
    Error,
    "encode-error: U+FC89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC8A");
    },
    Error,
    "encode-error: U+FC8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC8B");
    },
    Error,
    "encode-error: U+FC8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC8C");
    },
    Error,
    "encode-error: U+FC8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC8D");
    },
    Error,
    "encode-error: U+FC8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC8E");
    },
    Error,
    "encode-error: U+FC8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC8F");
    },
    Error,
    "encode-error: U+FC8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC90");
    },
    Error,
    "encode-error: U+FC90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC91");
    },
    Error,
    "encode-error: U+FC91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC92");
    },
    Error,
    "encode-error: U+FC92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC93");
    },
    Error,
    "encode-error: U+FC93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC94");
    },
    Error,
    "encode-error: U+FC94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC95");
    },
    Error,
    "encode-error: U+FC95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC96");
    },
    Error,
    "encode-error: U+FC96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC97");
    },
    Error,
    "encode-error: U+FC97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC98");
    },
    Error,
    "encode-error: U+FC98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC99");
    },
    Error,
    "encode-error: U+FC99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC9A");
    },
    Error,
    "encode-error: U+FC9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC9B");
    },
    Error,
    "encode-error: U+FC9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC9C");
    },
    Error,
    "encode-error: U+FC9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC9D");
    },
    Error,
    "encode-error: U+FC9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC9E");
    },
    Error,
    "encode-error: U+FC9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFC9F");
    },
    Error,
    "encode-error: U+FC9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA0");
    },
    Error,
    "encode-error: U+FCA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA1");
    },
    Error,
    "encode-error: U+FCA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA2");
    },
    Error,
    "encode-error: U+FCA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA3");
    },
    Error,
    "encode-error: U+FCA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA4");
    },
    Error,
    "encode-error: U+FCA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA5");
    },
    Error,
    "encode-error: U+FCA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA6");
    },
    Error,
    "encode-error: U+FCA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA7");
    },
    Error,
    "encode-error: U+FCA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA8");
    },
    Error,
    "encode-error: U+FCA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCA9");
    },
    Error,
    "encode-error: U+FCA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCAA");
    },
    Error,
    "encode-error: U+FCAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCAB");
    },
    Error,
    "encode-error: U+FCAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCAC");
    },
    Error,
    "encode-error: U+FCAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCAD");
    },
    Error,
    "encode-error: U+FCAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCAE");
    },
    Error,
    "encode-error: U+FCAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCAF");
    },
    Error,
    "encode-error: U+FCAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB0");
    },
    Error,
    "encode-error: U+FCB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB1");
    },
    Error,
    "encode-error: U+FCB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB2");
    },
    Error,
    "encode-error: U+FCB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB3");
    },
    Error,
    "encode-error: U+FCB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB4");
    },
    Error,
    "encode-error: U+FCB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB5");
    },
    Error,
    "encode-error: U+FCB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB6");
    },
    Error,
    "encode-error: U+FCB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB7");
    },
    Error,
    "encode-error: U+FCB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB8");
    },
    Error,
    "encode-error: U+FCB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCB9");
    },
    Error,
    "encode-error: U+FCB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCBA");
    },
    Error,
    "encode-error: U+FCBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCBB");
    },
    Error,
    "encode-error: U+FCBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCBC");
    },
    Error,
    "encode-error: U+FCBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCBD");
    },
    Error,
    "encode-error: U+FCBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCBE");
    },
    Error,
    "encode-error: U+FCBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCBF");
    },
    Error,
    "encode-error: U+FCBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC0");
    },
    Error,
    "encode-error: U+FCC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC1");
    },
    Error,
    "encode-error: U+FCC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC2");
    },
    Error,
    "encode-error: U+FCC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC3");
    },
    Error,
    "encode-error: U+FCC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC4");
    },
    Error,
    "encode-error: U+FCC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC5");
    },
    Error,
    "encode-error: U+FCC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC6");
    },
    Error,
    "encode-error: U+FCC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC7");
    },
    Error,
    "encode-error: U+FCC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC8");
    },
    Error,
    "encode-error: U+FCC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCC9");
    },
    Error,
    "encode-error: U+FCC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCCA");
    },
    Error,
    "encode-error: U+FCCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCCB");
    },
    Error,
    "encode-error: U+FCCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCCC");
    },
    Error,
    "encode-error: U+FCCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCCD");
    },
    Error,
    "encode-error: U+FCCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCCE");
    },
    Error,
    "encode-error: U+FCCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCCF");
    },
    Error,
    "encode-error: U+FCCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD0");
    },
    Error,
    "encode-error: U+FCD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD1");
    },
    Error,
    "encode-error: U+FCD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD2");
    },
    Error,
    "encode-error: U+FCD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD3");
    },
    Error,
    "encode-error: U+FCD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD4");
    },
    Error,
    "encode-error: U+FCD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD5");
    },
    Error,
    "encode-error: U+FCD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD6");
    },
    Error,
    "encode-error: U+FCD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD7");
    },
    Error,
    "encode-error: U+FCD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD8");
    },
    Error,
    "encode-error: U+FCD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCD9");
    },
    Error,
    "encode-error: U+FCD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCDA");
    },
    Error,
    "encode-error: U+FCDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCDB");
    },
    Error,
    "encode-error: U+FCDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCDC");
    },
    Error,
    "encode-error: U+FCDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCDD");
    },
    Error,
    "encode-error: U+FCDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCDE");
    },
    Error,
    "encode-error: U+FCDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCDF");
    },
    Error,
    "encode-error: U+FCDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE0");
    },
    Error,
    "encode-error: U+FCE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE1");
    },
    Error,
    "encode-error: U+FCE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE2");
    },
    Error,
    "encode-error: U+FCE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE3");
    },
    Error,
    "encode-error: U+FCE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE4");
    },
    Error,
    "encode-error: U+FCE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE5");
    },
    Error,
    "encode-error: U+FCE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE6");
    },
    Error,
    "encode-error: U+FCE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE7");
    },
    Error,
    "encode-error: U+FCE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE8");
    },
    Error,
    "encode-error: U+FCE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCE9");
    },
    Error,
    "encode-error: U+FCE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCEA");
    },
    Error,
    "encode-error: U+FCEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCEB");
    },
    Error,
    "encode-error: U+FCEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCEC");
    },
    Error,
    "encode-error: U+FCEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCED");
    },
    Error,
    "encode-error: U+FCED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCEE");
    },
    Error,
    "encode-error: U+FCEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCEF");
    },
    Error,
    "encode-error: U+FCEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF0");
    },
    Error,
    "encode-error: U+FCF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF1");
    },
    Error,
    "encode-error: U+FCF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF2");
    },
    Error,
    "encode-error: U+FCF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF3");
    },
    Error,
    "encode-error: U+FCF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF4");
    },
    Error,
    "encode-error: U+FCF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF5");
    },
    Error,
    "encode-error: U+FCF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF6");
    },
    Error,
    "encode-error: U+FCF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF7");
    },
    Error,
    "encode-error: U+FCF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF8");
    },
    Error,
    "encode-error: U+FCF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCF9");
    },
    Error,
    "encode-error: U+FCF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCFA");
    },
    Error,
    "encode-error: U+FCFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCFB");
    },
    Error,
    "encode-error: U+FCFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCFC");
    },
    Error,
    "encode-error: U+FCFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCFD");
    },
    Error,
    "encode-error: U+FCFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCFE");
    },
    Error,
    "encode-error: U+FCFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFCFF");
    },
    Error,
    "encode-error: U+FCFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD00");
    },
    Error,
    "encode-error: U+FD00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD01");
    },
    Error,
    "encode-error: U+FD01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD02");
    },
    Error,
    "encode-error: U+FD02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD03");
    },
    Error,
    "encode-error: U+FD03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD04");
    },
    Error,
    "encode-error: U+FD04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD05");
    },
    Error,
    "encode-error: U+FD05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD06");
    },
    Error,
    "encode-error: U+FD06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD07");
    },
    Error,
    "encode-error: U+FD07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD08");
    },
    Error,
    "encode-error: U+FD08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD09");
    },
    Error,
    "encode-error: U+FD09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD0A");
    },
    Error,
    "encode-error: U+FD0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD0B");
    },
    Error,
    "encode-error: U+FD0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD0C");
    },
    Error,
    "encode-error: U+FD0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD0D");
    },
    Error,
    "encode-error: U+FD0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD0E");
    },
    Error,
    "encode-error: U+FD0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD0F");
    },
    Error,
    "encode-error: U+FD0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD10");
    },
    Error,
    "encode-error: U+FD10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD11");
    },
    Error,
    "encode-error: U+FD11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD12");
    },
    Error,
    "encode-error: U+FD12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD13");
    },
    Error,
    "encode-error: U+FD13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD14");
    },
    Error,
    "encode-error: U+FD14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD15");
    },
    Error,
    "encode-error: U+FD15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD16");
    },
    Error,
    "encode-error: U+FD16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD17");
    },
    Error,
    "encode-error: U+FD17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD18");
    },
    Error,
    "encode-error: U+FD18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD19");
    },
    Error,
    "encode-error: U+FD19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD1A");
    },
    Error,
    "encode-error: U+FD1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD1B");
    },
    Error,
    "encode-error: U+FD1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD1C");
    },
    Error,
    "encode-error: U+FD1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD1D");
    },
    Error,
    "encode-error: U+FD1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD1E");
    },
    Error,
    "encode-error: U+FD1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD1F");
    },
    Error,
    "encode-error: U+FD1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD20");
    },
    Error,
    "encode-error: U+FD20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD21");
    },
    Error,
    "encode-error: U+FD21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD22");
    },
    Error,
    "encode-error: U+FD22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD23");
    },
    Error,
    "encode-error: U+FD23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD24");
    },
    Error,
    "encode-error: U+FD24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD25");
    },
    Error,
    "encode-error: U+FD25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD26");
    },
    Error,
    "encode-error: U+FD26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD27");
    },
    Error,
    "encode-error: U+FD27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD28");
    },
    Error,
    "encode-error: U+FD28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD29");
    },
    Error,
    "encode-error: U+FD29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD2A");
    },
    Error,
    "encode-error: U+FD2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD2B");
    },
    Error,
    "encode-error: U+FD2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD2C");
    },
    Error,
    "encode-error: U+FD2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD2D");
    },
    Error,
    "encode-error: U+FD2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD2E");
    },
    Error,
    "encode-error: U+FD2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD2F");
    },
    Error,
    "encode-error: U+FD2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD30");
    },
    Error,
    "encode-error: U+FD30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD31");
    },
    Error,
    "encode-error: U+FD31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD32");
    },
    Error,
    "encode-error: U+FD32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD33");
    },
    Error,
    "encode-error: U+FD33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD34");
    },
    Error,
    "encode-error: U+FD34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD35");
    },
    Error,
    "encode-error: U+FD35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD36");
    },
    Error,
    "encode-error: U+FD36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD37");
    },
    Error,
    "encode-error: U+FD37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD38");
    },
    Error,
    "encode-error: U+FD38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD39");
    },
    Error,
    "encode-error: U+FD39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD3A");
    },
    Error,
    "encode-error: U+FD3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD3B");
    },
    Error,
    "encode-error: U+FD3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD3C");
    },
    Error,
    "encode-error: U+FD3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD3D");
    },
    Error,
    "encode-error: U+FD3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD3E");
    },
    Error,
    "encode-error: U+FD3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD3F");
    },
    Error,
    "encode-error: U+FD3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD40");
    },
    Error,
    "encode-error: U+FD40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD41");
    },
    Error,
    "encode-error: U+FD41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD42");
    },
    Error,
    "encode-error: U+FD42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD43");
    },
    Error,
    "encode-error: U+FD43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD44");
    },
    Error,
    "encode-error: U+FD44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD45");
    },
    Error,
    "encode-error: U+FD45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD46");
    },
    Error,
    "encode-error: U+FD46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD47");
    },
    Error,
    "encode-error: U+FD47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD48");
    },
    Error,
    "encode-error: U+FD48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD49");
    },
    Error,
    "encode-error: U+FD49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD4A");
    },
    Error,
    "encode-error: U+FD4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD4B");
    },
    Error,
    "encode-error: U+FD4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD4C");
    },
    Error,
    "encode-error: U+FD4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD4D");
    },
    Error,
    "encode-error: U+FD4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD4E");
    },
    Error,
    "encode-error: U+FD4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD4F");
    },
    Error,
    "encode-error: U+FD4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD50");
    },
    Error,
    "encode-error: U+FD50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD51");
    },
    Error,
    "encode-error: U+FD51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD52");
    },
    Error,
    "encode-error: U+FD52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD53");
    },
    Error,
    "encode-error: U+FD53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD54");
    },
    Error,
    "encode-error: U+FD54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD55");
    },
    Error,
    "encode-error: U+FD55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD56");
    },
    Error,
    "encode-error: U+FD56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD57");
    },
    Error,
    "encode-error: U+FD57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD58");
    },
    Error,
    "encode-error: U+FD58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD59");
    },
    Error,
    "encode-error: U+FD59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD5A");
    },
    Error,
    "encode-error: U+FD5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD5B");
    },
    Error,
    "encode-error: U+FD5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD5C");
    },
    Error,
    "encode-error: U+FD5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD5D");
    },
    Error,
    "encode-error: U+FD5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD5E");
    },
    Error,
    "encode-error: U+FD5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD5F");
    },
    Error,
    "encode-error: U+FD5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD60");
    },
    Error,
    "encode-error: U+FD60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD61");
    },
    Error,
    "encode-error: U+FD61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD62");
    },
    Error,
    "encode-error: U+FD62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD63");
    },
    Error,
    "encode-error: U+FD63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD64");
    },
    Error,
    "encode-error: U+FD64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD65");
    },
    Error,
    "encode-error: U+FD65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD66");
    },
    Error,
    "encode-error: U+FD66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD67");
    },
    Error,
    "encode-error: U+FD67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD68");
    },
    Error,
    "encode-error: U+FD68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD69");
    },
    Error,
    "encode-error: U+FD69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD6A");
    },
    Error,
    "encode-error: U+FD6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD6B");
    },
    Error,
    "encode-error: U+FD6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD6C");
    },
    Error,
    "encode-error: U+FD6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD6D");
    },
    Error,
    "encode-error: U+FD6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD6E");
    },
    Error,
    "encode-error: U+FD6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD6F");
    },
    Error,
    "encode-error: U+FD6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD70");
    },
    Error,
    "encode-error: U+FD70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD71");
    },
    Error,
    "encode-error: U+FD71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD72");
    },
    Error,
    "encode-error: U+FD72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD73");
    },
    Error,
    "encode-error: U+FD73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD74");
    },
    Error,
    "encode-error: U+FD74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD75");
    },
    Error,
    "encode-error: U+FD75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD76");
    },
    Error,
    "encode-error: U+FD76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD77");
    },
    Error,
    "encode-error: U+FD77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD78");
    },
    Error,
    "encode-error: U+FD78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD79");
    },
    Error,
    "encode-error: U+FD79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD7A");
    },
    Error,
    "encode-error: U+FD7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD7B");
    },
    Error,
    "encode-error: U+FD7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD7C");
    },
    Error,
    "encode-error: U+FD7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD7D");
    },
    Error,
    "encode-error: U+FD7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD7E");
    },
    Error,
    "encode-error: U+FD7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD7F");
    },
    Error,
    "encode-error: U+FD7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD80");
    },
    Error,
    "encode-error: U+FD80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD81");
    },
    Error,
    "encode-error: U+FD81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD82");
    },
    Error,
    "encode-error: U+FD82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD83");
    },
    Error,
    "encode-error: U+FD83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD84");
    },
    Error,
    "encode-error: U+FD84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD85");
    },
    Error,
    "encode-error: U+FD85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD86");
    },
    Error,
    "encode-error: U+FD86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD87");
    },
    Error,
    "encode-error: U+FD87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD88");
    },
    Error,
    "encode-error: U+FD88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD89");
    },
    Error,
    "encode-error: U+FD89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD8A");
    },
    Error,
    "encode-error: U+FD8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD8B");
    },
    Error,
    "encode-error: U+FD8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD8C");
    },
    Error,
    "encode-error: U+FD8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD8D");
    },
    Error,
    "encode-error: U+FD8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD8E");
    },
    Error,
    "encode-error: U+FD8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD8F");
    },
    Error,
    "encode-error: U+FD8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD90");
    },
    Error,
    "encode-error: U+FD90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD91");
    },
    Error,
    "encode-error: U+FD91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD92");
    },
    Error,
    "encode-error: U+FD92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD93");
    },
    Error,
    "encode-error: U+FD93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD94");
    },
    Error,
    "encode-error: U+FD94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD95");
    },
    Error,
    "encode-error: U+FD95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD96");
    },
    Error,
    "encode-error: U+FD96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD97");
    },
    Error,
    "encode-error: U+FD97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD98");
    },
    Error,
    "encode-error: U+FD98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD99");
    },
    Error,
    "encode-error: U+FD99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD9A");
    },
    Error,
    "encode-error: U+FD9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD9B");
    },
    Error,
    "encode-error: U+FD9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD9C");
    },
    Error,
    "encode-error: U+FD9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD9D");
    },
    Error,
    "encode-error: U+FD9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD9E");
    },
    Error,
    "encode-error: U+FD9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFD9F");
    },
    Error,
    "encode-error: U+FD9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA0");
    },
    Error,
    "encode-error: U+FDA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA1");
    },
    Error,
    "encode-error: U+FDA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA2");
    },
    Error,
    "encode-error: U+FDA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA3");
    },
    Error,
    "encode-error: U+FDA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA4");
    },
    Error,
    "encode-error: U+FDA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA5");
    },
    Error,
    "encode-error: U+FDA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA6");
    },
    Error,
    "encode-error: U+FDA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA7");
    },
    Error,
    "encode-error: U+FDA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA8");
    },
    Error,
    "encode-error: U+FDA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDA9");
    },
    Error,
    "encode-error: U+FDA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDAA");
    },
    Error,
    "encode-error: U+FDAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDAB");
    },
    Error,
    "encode-error: U+FDAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDAC");
    },
    Error,
    "encode-error: U+FDAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDAD");
    },
    Error,
    "encode-error: U+FDAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDAE");
    },
    Error,
    "encode-error: U+FDAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDAF");
    },
    Error,
    "encode-error: U+FDAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB0");
    },
    Error,
    "encode-error: U+FDB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB1");
    },
    Error,
    "encode-error: U+FDB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB2");
    },
    Error,
    "encode-error: U+FDB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB3");
    },
    Error,
    "encode-error: U+FDB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB4");
    },
    Error,
    "encode-error: U+FDB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB5");
    },
    Error,
    "encode-error: U+FDB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB6");
    },
    Error,
    "encode-error: U+FDB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB7");
    },
    Error,
    "encode-error: U+FDB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB8");
    },
    Error,
    "encode-error: U+FDB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDB9");
    },
    Error,
    "encode-error: U+FDB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDBA");
    },
    Error,
    "encode-error: U+FDBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDBB");
    },
    Error,
    "encode-error: U+FDBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDBC");
    },
    Error,
    "encode-error: U+FDBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDBD");
    },
    Error,
    "encode-error: U+FDBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDBE");
    },
    Error,
    "encode-error: U+FDBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDBF");
    },
    Error,
    "encode-error: U+FDBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC0");
    },
    Error,
    "encode-error: U+FDC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC1");
    },
    Error,
    "encode-error: U+FDC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC2");
    },
    Error,
    "encode-error: U+FDC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC3");
    },
    Error,
    "encode-error: U+FDC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC4");
    },
    Error,
    "encode-error: U+FDC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC5");
    },
    Error,
    "encode-error: U+FDC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC6");
    },
    Error,
    "encode-error: U+FDC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC7");
    },
    Error,
    "encode-error: U+FDC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC8");
    },
    Error,
    "encode-error: U+FDC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDC9");
    },
    Error,
    "encode-error: U+FDC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDCA");
    },
    Error,
    "encode-error: U+FDCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDCB");
    },
    Error,
    "encode-error: U+FDCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDCC");
    },
    Error,
    "encode-error: U+FDCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDCD");
    },
    Error,
    "encode-error: U+FDCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDCE");
    },
    Error,
    "encode-error: U+FDCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDCF");
    },
    Error,
    "encode-error: U+FDCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD0");
    },
    Error,
    "encode-error: U+FDD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD1");
    },
    Error,
    "encode-error: U+FDD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD2");
    },
    Error,
    "encode-error: U+FDD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD3");
    },
    Error,
    "encode-error: U+FDD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD4");
    },
    Error,
    "encode-error: U+FDD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD5");
    },
    Error,
    "encode-error: U+FDD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD6");
    },
    Error,
    "encode-error: U+FDD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD7");
    },
    Error,
    "encode-error: U+FDD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD8");
    },
    Error,
    "encode-error: U+FDD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDD9");
    },
    Error,
    "encode-error: U+FDD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDDA");
    },
    Error,
    "encode-error: U+FDDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDDB");
    },
    Error,
    "encode-error: U+FDDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDDC");
    },
    Error,
    "encode-error: U+FDDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDDD");
    },
    Error,
    "encode-error: U+FDDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDDE");
    },
    Error,
    "encode-error: U+FDDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDDF");
    },
    Error,
    "encode-error: U+FDDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE0");
    },
    Error,
    "encode-error: U+FDE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE1");
    },
    Error,
    "encode-error: U+FDE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE2");
    },
    Error,
    "encode-error: U+FDE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE3");
    },
    Error,
    "encode-error: U+FDE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE4");
    },
    Error,
    "encode-error: U+FDE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE5");
    },
    Error,
    "encode-error: U+FDE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE6");
    },
    Error,
    "encode-error: U+FDE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE7");
    },
    Error,
    "encode-error: U+FDE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE8");
    },
    Error,
    "encode-error: U+FDE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDE9");
    },
    Error,
    "encode-error: U+FDE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDEA");
    },
    Error,
    "encode-error: U+FDEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDEB");
    },
    Error,
    "encode-error: U+FDEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDEC");
    },
    Error,
    "encode-error: U+FDEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDED");
    },
    Error,
    "encode-error: U+FDED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDEE");
    },
    Error,
    "encode-error: U+FDEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDEF");
    },
    Error,
    "encode-error: U+FDEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF0");
    },
    Error,
    "encode-error: U+FDF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF1");
    },
    Error,
    "encode-error: U+FDF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF2");
    },
    Error,
    "encode-error: U+FDF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF3");
    },
    Error,
    "encode-error: U+FDF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF4");
    },
    Error,
    "encode-error: U+FDF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF5");
    },
    Error,
    "encode-error: U+FDF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF6");
    },
    Error,
    "encode-error: U+FDF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF7");
    },
    Error,
    "encode-error: U+FDF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF8");
    },
    Error,
    "encode-error: U+FDF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDF9");
    },
    Error,
    "encode-error: U+FDF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDFA");
    },
    Error,
    "encode-error: U+FDFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDFB");
    },
    Error,
    "encode-error: U+FDFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDFC");
    },
    Error,
    "encode-error: U+FDFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDFD");
    },
    Error,
    "encode-error: U+FDFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDFE");
    },
    Error,
    "encode-error: U+FDFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFDFF");
    },
    Error,
    "encode-error: U+FDFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE00");
    },
    Error,
    "encode-error: U+FE00",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE01");
    },
    Error,
    "encode-error: U+FE01",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE02");
    },
    Error,
    "encode-error: U+FE02",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE03");
    },
    Error,
    "encode-error: U+FE03",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE04");
    },
    Error,
    "encode-error: U+FE04",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE05");
    },
    Error,
    "encode-error: U+FE05",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE06");
    },
    Error,
    "encode-error: U+FE06",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE07");
    },
    Error,
    "encode-error: U+FE07",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE08");
    },
    Error,
    "encode-error: U+FE08",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE09");
    },
    Error,
    "encode-error: U+FE09",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE0A");
    },
    Error,
    "encode-error: U+FE0A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE0B");
    },
    Error,
    "encode-error: U+FE0B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE0C");
    },
    Error,
    "encode-error: U+FE0C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE0D");
    },
    Error,
    "encode-error: U+FE0D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE0E");
    },
    Error,
    "encode-error: U+FE0E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE0F");
    },
    Error,
    "encode-error: U+FE0F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE10");
    },
    Error,
    "encode-error: U+FE10",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE11");
    },
    Error,
    "encode-error: U+FE11",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE12");
    },
    Error,
    "encode-error: U+FE12",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE13");
    },
    Error,
    "encode-error: U+FE13",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE14");
    },
    Error,
    "encode-error: U+FE14",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE15");
    },
    Error,
    "encode-error: U+FE15",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE16");
    },
    Error,
    "encode-error: U+FE16",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE17");
    },
    Error,
    "encode-error: U+FE17",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE18");
    },
    Error,
    "encode-error: U+FE18",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE19");
    },
    Error,
    "encode-error: U+FE19",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE1A");
    },
    Error,
    "encode-error: U+FE1A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE1B");
    },
    Error,
    "encode-error: U+FE1B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE1C");
    },
    Error,
    "encode-error: U+FE1C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE1D");
    },
    Error,
    "encode-error: U+FE1D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE1E");
    },
    Error,
    "encode-error: U+FE1E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE1F");
    },
    Error,
    "encode-error: U+FE1F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE20");
    },
    Error,
    "encode-error: U+FE20",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE21");
    },
    Error,
    "encode-error: U+FE21",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE22");
    },
    Error,
    "encode-error: U+FE22",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE23");
    },
    Error,
    "encode-error: U+FE23",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE24");
    },
    Error,
    "encode-error: U+FE24",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE25");
    },
    Error,
    "encode-error: U+FE25",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE26");
    },
    Error,
    "encode-error: U+FE26",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE27");
    },
    Error,
    "encode-error: U+FE27",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE28");
    },
    Error,
    "encode-error: U+FE28",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE29");
    },
    Error,
    "encode-error: U+FE29",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE2A");
    },
    Error,
    "encode-error: U+FE2A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE2B");
    },
    Error,
    "encode-error: U+FE2B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE2C");
    },
    Error,
    "encode-error: U+FE2C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE2D");
    },
    Error,
    "encode-error: U+FE2D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE2E");
    },
    Error,
    "encode-error: U+FE2E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE2F");
    },
    Error,
    "encode-error: U+FE2F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE30");
    },
    Error,
    "encode-error: U+FE30",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE31");
    },
    Error,
    "encode-error: U+FE31",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE32");
    },
    Error,
    "encode-error: U+FE32",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE33");
    },
    Error,
    "encode-error: U+FE33",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE34");
    },
    Error,
    "encode-error: U+FE34",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE35");
    },
    Error,
    "encode-error: U+FE35",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE36");
    },
    Error,
    "encode-error: U+FE36",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE37");
    },
    Error,
    "encode-error: U+FE37",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE38");
    },
    Error,
    "encode-error: U+FE38",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE39");
    },
    Error,
    "encode-error: U+FE39",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE3A");
    },
    Error,
    "encode-error: U+FE3A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE3B");
    },
    Error,
    "encode-error: U+FE3B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE3C");
    },
    Error,
    "encode-error: U+FE3C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE3D");
    },
    Error,
    "encode-error: U+FE3D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE3E");
    },
    Error,
    "encode-error: U+FE3E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE3F");
    },
    Error,
    "encode-error: U+FE3F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE40");
    },
    Error,
    "encode-error: U+FE40",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE41");
    },
    Error,
    "encode-error: U+FE41",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE42");
    },
    Error,
    "encode-error: U+FE42",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE43");
    },
    Error,
    "encode-error: U+FE43",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE44");
    },
    Error,
    "encode-error: U+FE44",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE45");
    },
    Error,
    "encode-error: U+FE45",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE46");
    },
    Error,
    "encode-error: U+FE46",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE47");
    },
    Error,
    "encode-error: U+FE47",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE48");
    },
    Error,
    "encode-error: U+FE48",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE49");
    },
    Error,
    "encode-error: U+FE49",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE4A");
    },
    Error,
    "encode-error: U+FE4A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE4B");
    },
    Error,
    "encode-error: U+FE4B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE4C");
    },
    Error,
    "encode-error: U+FE4C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE4D");
    },
    Error,
    "encode-error: U+FE4D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE4E");
    },
    Error,
    "encode-error: U+FE4E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE4F");
    },
    Error,
    "encode-error: U+FE4F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE50");
    },
    Error,
    "encode-error: U+FE50",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE51");
    },
    Error,
    "encode-error: U+FE51",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE52");
    },
    Error,
    "encode-error: U+FE52",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE53");
    },
    Error,
    "encode-error: U+FE53",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE54");
    },
    Error,
    "encode-error: U+FE54",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE55");
    },
    Error,
    "encode-error: U+FE55",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE56");
    },
    Error,
    "encode-error: U+FE56",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE57");
    },
    Error,
    "encode-error: U+FE57",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE58");
    },
    Error,
    "encode-error: U+FE58",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE59");
    },
    Error,
    "encode-error: U+FE59",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE5A");
    },
    Error,
    "encode-error: U+FE5A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE5B");
    },
    Error,
    "encode-error: U+FE5B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE5C");
    },
    Error,
    "encode-error: U+FE5C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE5D");
    },
    Error,
    "encode-error: U+FE5D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE5E");
    },
    Error,
    "encode-error: U+FE5E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE5F");
    },
    Error,
    "encode-error: U+FE5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE60");
    },
    Error,
    "encode-error: U+FE60",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE61");
    },
    Error,
    "encode-error: U+FE61",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE62");
    },
    Error,
    "encode-error: U+FE62",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE63");
    },
    Error,
    "encode-error: U+FE63",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE64");
    },
    Error,
    "encode-error: U+FE64",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE65");
    },
    Error,
    "encode-error: U+FE65",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE66");
    },
    Error,
    "encode-error: U+FE66",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE67");
    },
    Error,
    "encode-error: U+FE67",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE68");
    },
    Error,
    "encode-error: U+FE68",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE69");
    },
    Error,
    "encode-error: U+FE69",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE6A");
    },
    Error,
    "encode-error: U+FE6A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE6B");
    },
    Error,
    "encode-error: U+FE6B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE6C");
    },
    Error,
    "encode-error: U+FE6C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE6D");
    },
    Error,
    "encode-error: U+FE6D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE6E");
    },
    Error,
    "encode-error: U+FE6E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE6F");
    },
    Error,
    "encode-error: U+FE6F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE70");
    },
    Error,
    "encode-error: U+FE70",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE71");
    },
    Error,
    "encode-error: U+FE71",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE72");
    },
    Error,
    "encode-error: U+FE72",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE73");
    },
    Error,
    "encode-error: U+FE73",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE74");
    },
    Error,
    "encode-error: U+FE74",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE75");
    },
    Error,
    "encode-error: U+FE75",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE76");
    },
    Error,
    "encode-error: U+FE76",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE77");
    },
    Error,
    "encode-error: U+FE77",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE78");
    },
    Error,
    "encode-error: U+FE78",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE79");
    },
    Error,
    "encode-error: U+FE79",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE7A");
    },
    Error,
    "encode-error: U+FE7A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE7B");
    },
    Error,
    "encode-error: U+FE7B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE7C");
    },
    Error,
    "encode-error: U+FE7C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE7D");
    },
    Error,
    "encode-error: U+FE7D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE7E");
    },
    Error,
    "encode-error: U+FE7E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE7F");
    },
    Error,
    "encode-error: U+FE7F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE80");
    },
    Error,
    "encode-error: U+FE80",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE81");
    },
    Error,
    "encode-error: U+FE81",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE82");
    },
    Error,
    "encode-error: U+FE82",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE83");
    },
    Error,
    "encode-error: U+FE83",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE84");
    },
    Error,
    "encode-error: U+FE84",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE85");
    },
    Error,
    "encode-error: U+FE85",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE86");
    },
    Error,
    "encode-error: U+FE86",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE87");
    },
    Error,
    "encode-error: U+FE87",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE88");
    },
    Error,
    "encode-error: U+FE88",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE89");
    },
    Error,
    "encode-error: U+FE89",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE8A");
    },
    Error,
    "encode-error: U+FE8A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE8B");
    },
    Error,
    "encode-error: U+FE8B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE8C");
    },
    Error,
    "encode-error: U+FE8C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE8D");
    },
    Error,
    "encode-error: U+FE8D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE8E");
    },
    Error,
    "encode-error: U+FE8E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE8F");
    },
    Error,
    "encode-error: U+FE8F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE90");
    },
    Error,
    "encode-error: U+FE90",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE91");
    },
    Error,
    "encode-error: U+FE91",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE92");
    },
    Error,
    "encode-error: U+FE92",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE93");
    },
    Error,
    "encode-error: U+FE93",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE94");
    },
    Error,
    "encode-error: U+FE94",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE95");
    },
    Error,
    "encode-error: U+FE95",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE96");
    },
    Error,
    "encode-error: U+FE96",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE97");
    },
    Error,
    "encode-error: U+FE97",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE98");
    },
    Error,
    "encode-error: U+FE98",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE99");
    },
    Error,
    "encode-error: U+FE99",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE9A");
    },
    Error,
    "encode-error: U+FE9A",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE9B");
    },
    Error,
    "encode-error: U+FE9B",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE9C");
    },
    Error,
    "encode-error: U+FE9C",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE9D");
    },
    Error,
    "encode-error: U+FE9D",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE9E");
    },
    Error,
    "encode-error: U+FE9E",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFE9F");
    },
    Error,
    "encode-error: U+FE9F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA0");
    },
    Error,
    "encode-error: U+FEA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA1");
    },
    Error,
    "encode-error: U+FEA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA2");
    },
    Error,
    "encode-error: U+FEA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA3");
    },
    Error,
    "encode-error: U+FEA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA4");
    },
    Error,
    "encode-error: U+FEA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA5");
    },
    Error,
    "encode-error: U+FEA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA6");
    },
    Error,
    "encode-error: U+FEA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA7");
    },
    Error,
    "encode-error: U+FEA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA8");
    },
    Error,
    "encode-error: U+FEA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEA9");
    },
    Error,
    "encode-error: U+FEA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEAA");
    },
    Error,
    "encode-error: U+FEAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEAB");
    },
    Error,
    "encode-error: U+FEAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEAC");
    },
    Error,
    "encode-error: U+FEAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEAD");
    },
    Error,
    "encode-error: U+FEAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEAE");
    },
    Error,
    "encode-error: U+FEAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEAF");
    },
    Error,
    "encode-error: U+FEAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB0");
    },
    Error,
    "encode-error: U+FEB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB1");
    },
    Error,
    "encode-error: U+FEB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB2");
    },
    Error,
    "encode-error: U+FEB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB3");
    },
    Error,
    "encode-error: U+FEB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB4");
    },
    Error,
    "encode-error: U+FEB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB5");
    },
    Error,
    "encode-error: U+FEB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB6");
    },
    Error,
    "encode-error: U+FEB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB7");
    },
    Error,
    "encode-error: U+FEB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB8");
    },
    Error,
    "encode-error: U+FEB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEB9");
    },
    Error,
    "encode-error: U+FEB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEBA");
    },
    Error,
    "encode-error: U+FEBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEBB");
    },
    Error,
    "encode-error: U+FEBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEBC");
    },
    Error,
    "encode-error: U+FEBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEBD");
    },
    Error,
    "encode-error: U+FEBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEBE");
    },
    Error,
    "encode-error: U+FEBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEBF");
    },
    Error,
    "encode-error: U+FEBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC0");
    },
    Error,
    "encode-error: U+FEC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC1");
    },
    Error,
    "encode-error: U+FEC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC2");
    },
    Error,
    "encode-error: U+FEC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC3");
    },
    Error,
    "encode-error: U+FEC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC4");
    },
    Error,
    "encode-error: U+FEC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC5");
    },
    Error,
    "encode-error: U+FEC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC6");
    },
    Error,
    "encode-error: U+FEC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC7");
    },
    Error,
    "encode-error: U+FEC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC8");
    },
    Error,
    "encode-error: U+FEC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEC9");
    },
    Error,
    "encode-error: U+FEC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFECA");
    },
    Error,
    "encode-error: U+FECA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFECB");
    },
    Error,
    "encode-error: U+FECB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFECC");
    },
    Error,
    "encode-error: U+FECC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFECD");
    },
    Error,
    "encode-error: U+FECD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFECE");
    },
    Error,
    "encode-error: U+FECE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFECF");
    },
    Error,
    "encode-error: U+FECF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED0");
    },
    Error,
    "encode-error: U+FED0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED1");
    },
    Error,
    "encode-error: U+FED1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED2");
    },
    Error,
    "encode-error: U+FED2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED3");
    },
    Error,
    "encode-error: U+FED3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED4");
    },
    Error,
    "encode-error: U+FED4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED5");
    },
    Error,
    "encode-error: U+FED5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED6");
    },
    Error,
    "encode-error: U+FED6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED7");
    },
    Error,
    "encode-error: U+FED7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED8");
    },
    Error,
    "encode-error: U+FED8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFED9");
    },
    Error,
    "encode-error: U+FED9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEDA");
    },
    Error,
    "encode-error: U+FEDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEDB");
    },
    Error,
    "encode-error: U+FEDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEDC");
    },
    Error,
    "encode-error: U+FEDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEDD");
    },
    Error,
    "encode-error: U+FEDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEDE");
    },
    Error,
    "encode-error: U+FEDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEDF");
    },
    Error,
    "encode-error: U+FEDF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE0");
    },
    Error,
    "encode-error: U+FEE0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE1");
    },
    Error,
    "encode-error: U+FEE1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE2");
    },
    Error,
    "encode-error: U+FEE2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE3");
    },
    Error,
    "encode-error: U+FEE3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE4");
    },
    Error,
    "encode-error: U+FEE4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE5");
    },
    Error,
    "encode-error: U+FEE5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE6");
    },
    Error,
    "encode-error: U+FEE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE7");
    },
    Error,
    "encode-error: U+FEE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE8");
    },
    Error,
    "encode-error: U+FEE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEE9");
    },
    Error,
    "encode-error: U+FEE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEEA");
    },
    Error,
    "encode-error: U+FEEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEEB");
    },
    Error,
    "encode-error: U+FEEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEEC");
    },
    Error,
    "encode-error: U+FEEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEED");
    },
    Error,
    "encode-error: U+FEED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEEE");
    },
    Error,
    "encode-error: U+FEEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEEF");
    },
    Error,
    "encode-error: U+FEEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF0");
    },
    Error,
    "encode-error: U+FEF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF1");
    },
    Error,
    "encode-error: U+FEF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF2");
    },
    Error,
    "encode-error: U+FEF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF3");
    },
    Error,
    "encode-error: U+FEF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF4");
    },
    Error,
    "encode-error: U+FEF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF5");
    },
    Error,
    "encode-error: U+FEF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF6");
    },
    Error,
    "encode-error: U+FEF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF7");
    },
    Error,
    "encode-error: U+FEF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF8");
    },
    Error,
    "encode-error: U+FEF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEF9");
    },
    Error,
    "encode-error: U+FEF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEFA");
    },
    Error,
    "encode-error: U+FEFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEFB");
    },
    Error,
    "encode-error: U+FEFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEFC");
    },
    Error,
    "encode-error: U+FEFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEFD");
    },
    Error,
    "encode-error: U+FEFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEFE");
    },
    Error,
    "encode-error: U+FEFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFEFF");
    },
    Error,
    "encode-error: U+FEFF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFF00");
    },
    Error,
    "encode-error: U+FF00",
  );
  r = r &&
    ([...ms932Encoder.encode(
      "！＂＃＄％＆＇（）＊＋，－．／０１２３４５６７８９：；＜＝＞？＠ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺ［＼］＾＿｀ａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ｛｜｝～",
    )].join(",") ===
      "129,73,250,87,129,148,129,144,129,147,129,149,250,86,129,105,129,106,129,150,129,123,129,67,129,124,129,68,129,94,130,79,130,80,130,81,130,82,130,83,130,84,130,85,130,86,130,87,130,88,129,70,129,71,129,131,129,129,129,132,129,72,129,151,130,96,130,97,130,98,130,99,130,100,130,101,130,102,130,103,130,104,130,105,130,106,130,107,130,108,130,109,130,110,130,111,130,112,130,113,130,114,130,115,130,116,130,117,130,118,130,119,130,120,130,121,129,109,129,95,129,110,129,79,129,81,129,77,130,129,130,130,130,131,130,132,130,133,130,134,130,135,130,136,130,137,130,138,130,139,130,140,130,141,130,142,130,143,130,144,130,145,130,146,130,147,130,148,130,149,130,150,130,151,130,152,130,153,130,154,129,111,129,98,129,112,129,96"); // U+FF01
  assertThrows(
    () => {
      ms932Encoder.encode("\uFF5F");
    },
    Error,
    "encode-error: U+FF5F",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFF60");
    },
    Error,
    "encode-error: U+FF60",
  );
  r = r &&
    ([...ms932Encoder.encode(
      "｡｢｣､･ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝﾞﾟ",
    )].join(",") ===
      "161,162,163,164,165,166,167,168,169,170,171,172,173,174,175,176,177,178,179,180,181,182,183,184,185,186,187,188,189,190,191,192,193,194,195,196,197,198,199,200,201,202,203,204,205,206,207,208,209,210,211,212,213,214,215,216,217,218,219,220,221,222,223"); // U+FF61
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA0");
    },
    Error,
    "encode-error: U+FFA0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA1");
    },
    Error,
    "encode-error: U+FFA1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA2");
    },
    Error,
    "encode-error: U+FFA2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA3");
    },
    Error,
    "encode-error: U+FFA3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA4");
    },
    Error,
    "encode-error: U+FFA4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA5");
    },
    Error,
    "encode-error: U+FFA5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA6");
    },
    Error,
    "encode-error: U+FFA6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA7");
    },
    Error,
    "encode-error: U+FFA7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA8");
    },
    Error,
    "encode-error: U+FFA8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFA9");
    },
    Error,
    "encode-error: U+FFA9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFAA");
    },
    Error,
    "encode-error: U+FFAA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFAB");
    },
    Error,
    "encode-error: U+FFAB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFAC");
    },
    Error,
    "encode-error: U+FFAC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFAD");
    },
    Error,
    "encode-error: U+FFAD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFAE");
    },
    Error,
    "encode-error: U+FFAE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFAF");
    },
    Error,
    "encode-error: U+FFAF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB0");
    },
    Error,
    "encode-error: U+FFB0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB1");
    },
    Error,
    "encode-error: U+FFB1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB2");
    },
    Error,
    "encode-error: U+FFB2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB3");
    },
    Error,
    "encode-error: U+FFB3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB4");
    },
    Error,
    "encode-error: U+FFB4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB5");
    },
    Error,
    "encode-error: U+FFB5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB6");
    },
    Error,
    "encode-error: U+FFB6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB7");
    },
    Error,
    "encode-error: U+FFB7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB8");
    },
    Error,
    "encode-error: U+FFB8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFB9");
    },
    Error,
    "encode-error: U+FFB9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFBA");
    },
    Error,
    "encode-error: U+FFBA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFBB");
    },
    Error,
    "encode-error: U+FFBB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFBC");
    },
    Error,
    "encode-error: U+FFBC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFBD");
    },
    Error,
    "encode-error: U+FFBD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFBE");
    },
    Error,
    "encode-error: U+FFBE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFBF");
    },
    Error,
    "encode-error: U+FFBF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC0");
    },
    Error,
    "encode-error: U+FFC0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC1");
    },
    Error,
    "encode-error: U+FFC1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC2");
    },
    Error,
    "encode-error: U+FFC2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC3");
    },
    Error,
    "encode-error: U+FFC3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC4");
    },
    Error,
    "encode-error: U+FFC4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC5");
    },
    Error,
    "encode-error: U+FFC5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC6");
    },
    Error,
    "encode-error: U+FFC6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC7");
    },
    Error,
    "encode-error: U+FFC7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC8");
    },
    Error,
    "encode-error: U+FFC8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFC9");
    },
    Error,
    "encode-error: U+FFC9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFCA");
    },
    Error,
    "encode-error: U+FFCA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFCB");
    },
    Error,
    "encode-error: U+FFCB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFCC");
    },
    Error,
    "encode-error: U+FFCC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFCD");
    },
    Error,
    "encode-error: U+FFCD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFCE");
    },
    Error,
    "encode-error: U+FFCE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFCF");
    },
    Error,
    "encode-error: U+FFCF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD0");
    },
    Error,
    "encode-error: U+FFD0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD1");
    },
    Error,
    "encode-error: U+FFD1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD2");
    },
    Error,
    "encode-error: U+FFD2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD3");
    },
    Error,
    "encode-error: U+FFD3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD4");
    },
    Error,
    "encode-error: U+FFD4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD5");
    },
    Error,
    "encode-error: U+FFD5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD6");
    },
    Error,
    "encode-error: U+FFD6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD7");
    },
    Error,
    "encode-error: U+FFD7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD8");
    },
    Error,
    "encode-error: U+FFD8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFD9");
    },
    Error,
    "encode-error: U+FFD9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFDA");
    },
    Error,
    "encode-error: U+FFDA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFDB");
    },
    Error,
    "encode-error: U+FFDB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFDC");
    },
    Error,
    "encode-error: U+FFDC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFDD");
    },
    Error,
    "encode-error: U+FFDD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFDE");
    },
    Error,
    "encode-error: U+FFDE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFDF");
    },
    Error,
    "encode-error: U+FFDF",
  );
  r = r &&
    ([...ms932Encoder.encode("￠￡￢￣￤￥")].join(",") ===
      "129,145,129,146,129,202,129,80,250,85,129,143"); // U+FFE0
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFE6");
    },
    Error,
    "encode-error: U+FFE6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFE7");
    },
    Error,
    "encode-error: U+FFE7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFE8");
    },
    Error,
    "encode-error: U+FFE8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFE9");
    },
    Error,
    "encode-error: U+FFE9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFEA");
    },
    Error,
    "encode-error: U+FFEA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFEB");
    },
    Error,
    "encode-error: U+FFEB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFEC");
    },
    Error,
    "encode-error: U+FFEC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFED");
    },
    Error,
    "encode-error: U+FFED",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFEE");
    },
    Error,
    "encode-error: U+FFEE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFEF");
    },
    Error,
    "encode-error: U+FFEF",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF0");
    },
    Error,
    "encode-error: U+FFF0",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF1");
    },
    Error,
    "encode-error: U+FFF1",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF2");
    },
    Error,
    "encode-error: U+FFF2",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF3");
    },
    Error,
    "encode-error: U+FFF3",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF4");
    },
    Error,
    "encode-error: U+FFF4",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF5");
    },
    Error,
    "encode-error: U+FFF5",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF6");
    },
    Error,
    "encode-error: U+FFF6",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF7");
    },
    Error,
    "encode-error: U+FFF7",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF8");
    },
    Error,
    "encode-error: U+FFF8",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFF9");
    },
    Error,
    "encode-error: U+FFF9",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFFA");
    },
    Error,
    "encode-error: U+FFFA",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFFB");
    },
    Error,
    "encode-error: U+FFFB",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFFC");
    },
    Error,
    "encode-error: U+FFFC",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFFD");
    },
    Error,
    "encode-error: U+FFFD",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFFE");
    },
    Error,
    "encode-error: U+FFFE",
  );
  assertThrows(
    () => {
      ms932Encoder.encode("\uFFFF");
    },
    Error,
    "encode-error: U+FFFF",
  );

  assertStrictEquals(r, true);
});
